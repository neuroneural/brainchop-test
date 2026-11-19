// BrainChop Offline PWA Service Worker
//
// Strategies (matching modern-web-guidance `performance` rules):
//   - HTML navigations: NetworkFirst (latest deploy when online, cached shell offline)
//   - Versioned Vite chunks (/assets/*) & default MRI (t1_crop.nii.gz): CacheFirst in `brainchop-shell-*`
//   - Model weights & colormaps (/models/*): CacheFirst in bounded
//     `brainchop-models-v1` cache (max 32 entries) so models survive shell updates
//   - Other same-origin static files: StaleWhileRevalidate
//   - Non-GET & cross-origin requests (e.g. GitHub API): bypassed (never cache POST/opaque)

const BUILD_VERSION = '__BRAINCHOP_BUILD_VERSION__';
const SHELL_CACHE = `brainchop-shell-${BUILD_VERSION}`;
const MODELS_CACHE = 'brainchop-models-v1';
const MAX_MODEL_ENTRIES = 32;

const PRECACHE_URLS = /*__BRAINCHOP_PRECACHE_URLS__*/ [
  './',
  './index.html',
  './niivue.css',
  './favicon.ico',
  './manifest.webmanifest',
  './t1_crop.nii.gz',
  './icons/icon-192.png',
  './icons/icon-512.png',
];

function isCacheableBasicResponse(response) {
  return Boolean(response && response.ok && response.status === 200 && response.type === 'basic');
}

async function trimCache(cacheName, maxEntries) {
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();
  if (keys.length <= maxEntries) return;
  const excess = keys.length - maxEntries;
  for (let i = 0; i < excess; i++) {
    await cache.delete(keys[i]);
  }
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(SHELL_CACHE).then((cache) =>
      // Use individual fetches so a single missing optional icon never blocks install.
      Promise.allSettled(
        PRECACHE_URLS.map(async (relUrl) => {
          const req = new Request(new URL(relUrl, self.registration.scope), { cache: 'reload' });
          const res = await fetch(req);
          if (isCacheableBasicResponse(res)) {
            await cache.put(req, res);
          }
        })
      )
    ).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key.startsWith('brainchop-shell-') && key !== SHELL_CACHE)
          .map((key) => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

async function networkFirstNavigation(request) {
  const cache = await caches.open(SHELL_CACHE);
  try {
    const response = await fetch(request);
    if (isCacheableBasicResponse(response)) {
      cache.put(new URL('./index.html', self.registration.scope), response.clone());
    }
    return response;
  } catch {
    return (
      (await cache.match(request, { ignoreSearch: true, ignoreVary: true })) ||
      (await cache.match(new URL('./index.html', self.registration.scope), { ignoreVary: true })) ||
      (await cache.match(new URL('./', self.registration.scope), { ignoreVary: true })) ||
      new Response('BrainChop is offline and not yet cached.', {
        status: 503,
        headers: { 'Content-Type': 'text/plain; charset=utf-8' },
      })
    );
  }
}

async function cacheFirst(request, cacheName, maxEntries = 0) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request, { ignoreVary: true });
  if (cached) return cached;
  const response = await fetch(request);
  if (isCacheableBasicResponse(response)) {
    await cache.put(request, response.clone());
    if (maxEntries > 0) {
      trimCache(cacheName, maxEntries).catch(() => {});
    }
  }
  return response;
}

async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request, { ignoreVary: true });
  const networkPromise = fetch(request)
    .then((response) => {
      if (isCacheableBasicResponse(response)) {
        cache.put(request, response.clone());
      }
      return response;
    })
    .catch(() => null);
  return cached || (await networkPromise) || new Response('', { status: 504 });
}

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // Never intercept sw.js itself so browser SW update checks always hit the network.
  const scopePath = new URL(self.registration.scope).pathname;
  const relPath = url.pathname.startsWith(scopePath)
    ? url.pathname.slice(scopePath.length)
    : url.pathname.replace(/^\//, '');
  if (relPath === 'sw.js') return;

  if (request.mode === 'navigate') {
    event.respondWith(networkFirstNavigation(request));
    return;
  }

  // Immutable content-hashed Vite chunks and the precached default MRI volume.
  if (relPath.startsWith('assets/') || relPath === 't1_crop.nii.gz') {
    event.respondWith(cacheFirst(request, SHELL_CACHE));
    return;
  }

  // Model weights and colormaps (preserved across shell deployments).
  if (relPath.startsWith('models/')) {
    event.respondWith(cacheFirst(request, MODELS_CACHE, MAX_MODEL_ENTRIES));
    return;
  }

  // Remaining same-origin static files (niivue.css, icons, manifest, favicon).
  event.respondWith(staleWhileRevalidate(request, SHELL_CACHE));
});
