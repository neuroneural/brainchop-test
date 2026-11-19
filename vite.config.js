import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'
import zlib from 'node:zlib'
import { defineConfig } from 'vite'
import viteCompression from 'vite-plugin-compression'

/**
 * Stamps a content-derived cache version and core app-shell precache URLs into
 * `dist/sw.js` after Vite emits the production bundle, ensuring every deploy
 * rolls the `brainchop-shell-*` cache cleanly while preserving cached models.
 */
function brainchopServiceWorkerPlugin() {
  let outDir = 'dist'
  return {
    name: 'brainchop-service-worker',
    apply: 'build',
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir || 'dist')
    },
    closeBundle() {
      const swPath = path.join(outDir, 'sw.js')
      const indexPath = path.join(outDir, 'index.html')
      if (!fs.existsSync(swPath) || !fs.existsSync(indexPath)) return

      const indexHtml = fs.readFileSync(indexPath, 'utf8')
      const precacheSet = new Set([
        './',
        './index.html',
        './niivue.css',
        './favicon.ico',
        './manifest.webmanifest',
        './t1_crop.nii.gz',
        './icons/icon-192.png',
        './icons/icon-512.png',
      ])

      // Include every entry JS/CSS chunk referenced by the built index.html.
      const assetRefRe = /(?:href|src)=["'](\.\/assets\/[^"']+)["']/g
      for (const m of indexHtml.matchAll(assetRefRe)) {
        precacheSet.add(m[1])
      }

      // Include the core runtime worker chunks (conform, postprocess, webgl2)
      // and NiiVue renderer chunks so offline launch works on both WebGPU & WebGL2.
      const assetsDir = path.join(outDir, 'assets')
      if (fs.existsSync(assetsDir)) {
        for (const file of fs.readdirSync(assetsDir)) {
          if (file.endsWith('.gz') || file.endsWith('.br')) continue
          if (
            /^(conform-worker|postprocess-worker|brainchop-webgl2-worker|inference-webgl2|slideView|vendor-niivue|vendor-math|vendor-|fonts-|matcaps-|index-)/.test(file)
          ) {
            precacheSet.add(`./assets/${file}`)
          }
        }
      }

      const precacheUrls = Array.from(precacheSet).sort()
      const hash = crypto
        .createHash('sha256')
        .update(indexHtml)
        .update(precacheUrls.join('\n'))
        .digest('hex')
        .slice(0, 12)

      let swSrc = fs.readFileSync(swPath, 'utf8')
      swSrc = swSrc.replace('__BRAINCHOP_BUILD_VERSION__', hash)
      swSrc = swSrc.replace(
        /\/\*__BRAINCHOP_PRECACHE_URLS__\*\/[\s\S]*?\];/,
        `${JSON.stringify(precacheUrls, null, 2)};`
      )
      fs.writeFileSync(swPath, swSrc)
      // Keep pre-compressed sw.js sidecars (if emitted by vite-plugin-compression)
      // strictly in sync with the stamped sw.js contents.
      const swBuf = Buffer.from(swSrc, 'utf8')
      if (fs.existsSync(`${swPath}.gz`)) {
        fs.writeFileSync(`${swPath}.gz`, zlib.gzipSync(swBuf))
      }
      if (fs.existsSync(`${swPath}.br`)) {
        fs.writeFileSync(`${swPath}.br`, zlib.brotliCompressSync(swBuf))
      }
    },
  }
}

export default defineConfig({
  root: '.',
  base: './', // Root path for custom domain brainchop.org
  plugins: [
    // Generate gzip compressed files
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 1024, // Only compress files larger than 1KB
      deleteOriginFile: false
    }),
    // Generate brotli compressed files (better compression than gzip)
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 1024,
      deleteOriginFile: false
    }),
    brainchopServiceWorkerPlugin()
  ],
  server: {
    open: 'index.html'
  },
  preview: {
    port: 8088
  },
  build: {
    target: 'es2015',
    minify: 'esbuild',
    chunkSizeWarningLimit: 2000, // Increase limit since medical imaging libs are naturally large
    rollupOptions: {
      output: {
        manualChunks(id) {
          // NiiVue visualization library
          if (id.includes('@niivue/niivue')) {
            return 'vendor-niivue';
          }
          // 3D math utilities
          if (id.includes('gl-matrix')) {
            return 'vendor-math';
          }
          // Compression libraries (loaded dynamically when needed)
          if (id.includes('blosc') || id.includes('lz4') || id.includes('zstd')) {
            return 'vendor-compression';
          }
          // Other vendor libraries
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    }
  },
  esbuild: {
    treeShaking: true,
    drop: ['debugger']
  }
})
