const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./dkatlas24_int8_v3_runner-Bx9ADEBk.js","./vendor-niivue-BztUWqGV.js","./vendor-CKvLRpOF.js","./vendor-math-oqRZD8Fx.js"])))=>i.map(i=>d[i]);
var Ps=Object.defineProperty,ks=Object.defineProperties;var Ms=Object.getOwnPropertyDescriptors;var Gn=Object.getOwnPropertySymbols;var wo=Object.prototype.hasOwnProperty,ho=Object.prototype.propertyIsEnumerable;var Ht=Math.pow,bo=(e,t,n)=>t in e?Ps(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,St=(e,t)=>{for(var n in t||(t={}))wo.call(t,n)&&bo(e,n,t[n]);if(Gn)for(var n of Gn(t))ho.call(t,n)&&bo(e,n,t[n]);return e},It=(e,t)=>ks(e,Ms(t));var yo=(e,t)=>{var n={};for(var o in e)wo.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&Gn)for(var o of Gn(e))t.indexOf(o)<0&&ho.call(e,o)&&(n[o]=e[o]);return n};var ge=(e,t,n)=>new Promise((o,s)=>{var i=f=>{try{a(n.next(f))}catch(l){s(l)}},r=f=>{try{a(n.throw(f))}catch(l){s(l)}},a=f=>f.done?o(f.value):Promise.resolve(f.value).then(i,r);a((n=n.apply(e,t)).next())});import{z as Cn,$ as As,t as zs,L as vo,Y as Bs,M as xo,a as Cs,_ as Fs}from"./vendor-niivue-BztUWqGV.js";import{g as Us}from"./vendor-CKvLRpOF.js";import{l as Ls,n as Ws,p as Gs}from"./vendor-math-oqRZD8Fx.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const Rs="modulepreload",qs=function(e,t){return new URL(e,t).href},$o={},bt=function(t,n,o){let s=Promise.resolve();if(n&&n.length>0){let l=function(c){return Promise.all(c.map(g=>Promise.resolve(g).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};const r=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),f=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=l(n.map(c=>{if(c=qs(c,o),c in $o)return;$o[c]=!0;const g=c.endsWith(".css"),d=g?'[rel="stylesheet"]':"";if(o)for(let p=r.length-1;p>=0;p--){const m=r[p];if(m.href===c&&(!g||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${d}`))return;const u=document.createElement("link");if(u.rel=g?"stylesheet":Rs,g||(u.as="script"),u.crossOrigin="",u.href=c,f&&u.setAttribute("nonce",f),document.head.appendChild(u),g)return new Promise((p,m)=>{u.addEventListener("load",p),u.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(r){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=r,window.dispatchEvent(a),!a.defaultPrevented)throw r}return s.then(r=>{for(const a of r||[])a.status==="rejected"&&i(a.reason);return t().catch(i)})},_n=new WeakMap;class Is{getLabelMeta(t){return _n.get(t)||null}idx(t,n,o,s){return o*s[0]*s[1]+n*s[0]+t}check_previous_slice(t,n,o,s,i,r,a,f,l,c){let g=0;if(!i)return 0;const d=t[this.idx(o,s,i,r)];if(a>=6){const u=this.idx(o,s,i-1,r);d===t[u]&&(l[g++]=n[u])}if(a>=18){if(o){const u=this.idx(o-1,s,i-1,r);d===t[u]&&(l[g++]=n[u])}if(s){const u=this.idx(o,s-1,i-1,r);d===t[u]&&(l[g++]=n[u])}if(o<r[0]-1){const u=this.idx(o+1,s,i-1,r);d===t[u]&&(l[g++]=n[u])}if(s<r[1]-1){const u=this.idx(o,s+1,i-1,r);d===t[u]&&(l[g++]=n[u])}}if(a===26){if(o&&s){const u=this.idx(o-1,s-1,i-1,r);d===t[u]&&(l[g++]=n[u])}if(o<r[0]-1&&s){const u=this.idx(o+1,s-1,i-1,r);d===t[u]&&(l[g++]=n[u])}if(o&&s<r[1]-1){const u=this.idx(o-1,s+1,i-1,r);d===t[u]&&(l[g++]=n[u])}if(o<r[0]-1&&s<r[1]-1){const u=this.idx(o+1,s+1,i-1,r);d===t[u]&&(l[g++]=n[u])}}return g?(this.fill_tratab(f,l,g,c),l[0]):0}do_initial_labelling(t,n,o,s=null){const i=n[0]|0,r=n[1]|0,a=n[2]|0,f=i*r,l=f*a;let c=1;const g=8192;let d=g,u=new Uint32Array(d),p;if(o===6&&s&&s.il&&s.il.length===l){if(p=s.il,s.dirty)p.fill(0);else if(s.runs&&s.runLen>0){const _=s.runs,w=s.runLen;for(let h=0;h<w;h+=2)p.fill(0,_[h],_[h+1])}}else p=new Uint32Array(l),o===6&&s&&(s.il=p,s.runs=null,s.runLen=0,s.dirty=!1);if(o===6){s&&(s.dirty=!0);const _=(t instanceof Uint8Array||t instanceof Uint8ClampedArray)&&(t.byteOffset&3)===0&&(i&3)===0&&t.length>=l?new Uint32Array(t.buffer,t.byteOffset,l>>2):null;let w=s&&s.runs?s.runs:new Uint32Array(8192),h=w.length,$=0,b=0,P=0,C=0,v=-1,x=-1,G=a,M=-1;for(let A=0;A<a;A++){const T=A*f;for(let U=0;U<r;U++){const z=T+U*i;let N=0;if(_){const Z=z+i>>2;let te=z>>2;for(;te<Z&&_[te]===0;)te++;if(te===Z)continue;N=(te<<2)-z}let L=!1;for(;N<i;N++){const Z=z+N;if(_&&!L&&(N&3)===0&&_[Z>>2]===0){N+=3;continue}const te=t[Z];if(te===0){L&&(w[$++]=Z,L=!1);continue}if(!L){if($+2>h){h<<=1;const q=new Uint32Array(h);q.set(w),w=q}w[$++]=Z,L=!0}v<0&&(v=Z,G=A),x=Z,M=A;let R=0;if(A>0&&t[Z-f]===te&&(b=p[Z-f],R=1),N>0&&t[Z-1]===te){const q=p[Z-1];R===0?b=q:R===1?P=q:C=q,R++}if(U>0&&t[Z-i]===te){const q=p[Z-i];R===0?b=q:R===1?P=q:C=q,R++}if(R===0){if(p[Z]=c,c>=d){d+=g;const q=new Uint32Array(d);q.set(u),u=q}u[c-1]=c,c++}else if(p[Z]=b,R===2&&P!==b){let q=b;for(;u[q-1]!==q;)q=u[q-1];let D=P;for(;u[D-1]!==D;)D=u[D-1];const oe=q<D?q:D;u[q-1]=oe,u[D-1]=oe}else if(R===3&&(P!==b||C!==b)){let q=b;for(;u[q-1]!==q;)q=u[q-1];let D=P;for(;u[D-1]!==D;)D=u[D-1];let oe=C;for(;u[oe-1]!==oe;)oe=u[oe-1];let O=q<D?q:D;oe<O&&(O=oe),u[q-1]=O,u[D-1]=O,u[oe-1]=O}}L&&(w[$++]=z+i)}}for(let A=0;A<c-1;A++){let T=A;for(;u[T]!==T+1;)T=u[T]-1;u[A]=T+1}return s&&(s.runs=w,s.runLen=$,s.dirty=!1),this._lastInitialRange={conn:6,fgStart:v,fgEnd:x,minSl:G,maxSl:M,runs:w,runLen:$},[c-1,u,p]}const m=new Uint32Array(32),y=new Uint32Array(32),k=new Uint32Array(27);for(let _=0;_<a;_++)for(let w=0;w<r;w++)for(let h=0;h<i;h++){let $=0;const b=t[this.idx(h,w,_,n)];if(b!==0){if(k[0]=this.check_previous_slice(t,p,h,w,_,n,o,u,m,y),k[0]&&($+=1),o>=6){if(h){const P=this.idx(h-1,w,_,n);b===t[P]&&(k[$++]=p[P])}if(w){const P=this.idx(h,w-1,_,n);b===t[P]&&(k[$++]=p[P])}}if(o>=18){if(w&&h){const P=this.idx(h-1,w-1,_,n);b===t[P]&&(k[$++]=p[P])}if(w&&h<i-1){const P=this.idx(h+1,w-1,_,n);b===t[P]&&(k[$++]=p[P])}}if($)p[this.idx(h,w,_,n)]=k[0],this.fill_tratab(u,k,$,y);else{if(p[this.idx(h,w,_,n)]=c,c>=d){d+=g;const P=new Uint32Array(d);P.set(u),u=P}u[c-1]=c,c++}}}for(let _=0;_<c-1;_++){let w=_;for(;u[w]!==w+1;)w=u[w]-1;u[_]=w+1}return this._lastInitialRange=null,[c-1,u,p]}fill_tratab(t,n,o,s){let r=2147483647;for(let a=0;a<o;a++){let f=n[a];for(;t[f-1]!==f;)f=t[f-1];s[a]=f,r=Math.min(r,f)}for(let a=0;a<o;a++)t[s[a]-1]=r}translate_labels(t,n,o,s,i=null,r=null){const a=n[0]*n[1]*n[2];if(r&&(s===0||r.fgStart<0))return i&&(this._lastMeta={conn:r.conn,cl:0,fgStart:0,fgEnd:-1,minSl:0,maxSl:-1,ls2bw:new Uint32Array(1),sumls:new Uint32Array(1),distinctFgClasses:0,bw:i}),[0,t];let f=0;for(let m=0;m<s;m++)o[m]>f&&(f=o[m]);const l=new Uint32Array(f+1),c=i&&r?new Uint32Array(s+1):null,g=i&&r?new Uint32Array(s+1):null,d=r?r.fgStart:0,u=r?r.fgEnd:a-1;let p=0;if(r&&r.runs){const m=r.runs,y=r.runLen;for(let k=0;k<y;k+=2){const _=m[k],w=m[k+1];for(let h=_;h<w;h++){const $=o[t[h]-1];let b=l[$];b||(p+=1,b=p,l[$]=b,c&&(c[b]=i[h])),t[h]=b,g&&g[b]++}}}else for(let m=d;m<=u;m++){const y=t[m];if(y){const k=o[y-1];let _=l[k];_||(p+=1,_=p,l[k]=_,c&&(c[_]=i[m])),t[m]=_,g&&g[_]++}}if(i&&r){const m=c.slice(0,p+1),y=g.slice(0,p+1);let k=0;if(p>0){const _=m[1];k=1;for(let w=2;w<=p;w++)if(m[w]!==_){k=2;break}}this._lastMeta={conn:r.conn,cl:p,fgStart:r.fgStart,fgEnd:r.fgEnd,minSl:r.minSl,maxSl:r.maxSl,runs:r.runs,runLen:r.runLen,ls2bw:m,sumls:y,distinctFgClasses:k,bw:i}}return[p,t]}neighbor_winners(t,n,o,s,i=null,r=null){const a=n[0],f=n[1],l=n[2],c=a*f,g=!!(r&&i);let d=!1;for(let h=1;h<=s;h++)if(!o[h]){d=!0;break}if(!d)return g&&console.log("[relabel] 0/0 suppressed components resolved within their own class family (0 fell back to the unrestricted neighbour vote)"),new Uint32Array(s+1);const u=g?new Int32Array(s+1).fill(-1):null,p=new Map,m=(h,$)=>{let b=p.get(h);b||(b=new Map,p.set(h,b)),b.set($,(b.get($)||0)+1)},y=_n.get(t),k=y&&y.cl===s&&t.length===c*l;if(k&&y.runs){const h=y.runs,$=y.runLen;for(let b=0;b<$;b+=2){const P=h[b],C=h[b+1],v=P/c|0,x=P-v*c,G=x/a|0;let M=x-G*a;for(let A=P;A<C;A++,M++){const T=t[A];if(o[T])continue;g&&u[T]<0&&(u[T]=r(i[A]));let U;M>0&&(U=o[t[A-1]])&&m(T,U),M<a-1&&(U=o[t[A+1]])&&m(T,U),G>0&&(U=o[t[A-a]])&&m(T,U),G<f-1&&(U=o[t[A+a]])&&m(T,U),v>0&&(U=o[t[A-c]])&&m(T,U),v<l-1&&(U=o[t[A+c]])&&m(T,U)}}}else{const h=k?y.minSl:0,$=k?y.maxSl:l-1;let b=h*c;for(let P=h;P<=$;P++)for(let C=0;C<f;C++)for(let v=0;v<a;v++,b++){const x=t[b];if(x===0||o[x])continue;g&&u[x]<0&&(u[x]=r(i[b]));let G;v>0&&(G=o[t[b-1]])&&m(x,G),v<a-1&&(G=o[t[b+1]])&&m(x,G),C>0&&(G=o[t[b-a]])&&m(x,G),C<f-1&&(G=o[t[b+a]])&&m(x,G),P>0&&(G=o[t[b-c]])&&m(x,G),P<l-1&&(G=o[t[b+c]])&&m(x,G)}}const _=new Uint32Array(s+1).fill(0);let w=0;for(const[h,$]of p){const b=g?u[h]:0;let P=0,C=0;if(b>0){for(const[v,x]of $)r(v)===b&&(x>C||x===C&&(P===0||v<P))&&(C=x,P=v);P&&w++}if(!P)for(const[v,x]of $)(x>C||x===C&&(P===0||v<P))&&(C=x,P=v);_[h]=P}return g&&console.log(`[relabel] ${w}/${p.size} suppressed components resolved within their own class family (${p.size-w} fell back to the unrestricted neighbour vote)`),_}finalize_volume(t,n,o,s,i,r=null,a=null,f=!1){const l=t.length,c=i?this.neighbor_winners(t,n,o,s,r,a):null,g=c?new Uint32Array(s+1):o;let d=0;for(let _=1;_<=s;_++){let w=o[_];c&&(w||(w=c[_]),g[_]=w),w>d&&(d=w)}const u=_n.get(t),p=u&&u.cl===s&&u.ls2bw.length===s+1&&u.fgEnd<l;let m=0;if(p&&u.runs){const _=u.runs,w=u.runLen;for(let b=1;b<=s;b++)u.sumls[b]>0&&g[b]>m&&(m=g[b]);if(u.bw===r&&r instanceof Uint8Array&&d<=255){const b=new Uint8Array(s+1);let P=!1;for(let v=1;v<=s;v++)u.sumls[v]>0&&g[v]!==u.ls2bw[v]&&(b[v]=1,P=!0);const C=f?r:r.slice();if(P)for(let v=0;v<w;v+=2){const x=_[v],G=_[v+1];for(let M=x;M<G;M++){const A=t[M];b[A]&&(C[M]=g[A])}}return[m,C]}const $=r instanceof Uint8Array&&d<=255?new Uint8Array(l):new Uint32Array(l);for(let b=0;b<w;b+=2){const P=_[b],C=_[b+1];for(let v=P;v<C;v++){const x=g[t[v]];x&&($[v]=x)}}return[m,$]}const k=r instanceof Uint8Array&&d<=255?new Uint8Array(l):new Uint32Array(l);if(p){if(u.fgStart>=0&&u.fgEnd>=u.fgStart)for(let _=u.fgStart;_<=u.fgEnd;_++){const w=t[_];if(w!==0){const h=g[w];h&&(k[_]=h,h>m&&(m=h))}}}else for(let _=0;_<l;_++){const w=t[_];if(w!==0){const h=g[w];h&&(k[_]=h,h>m&&(m=h))}}return[m,k]}diagnose_components(t,n,o,s,i={}){var v,x,G;const r=(v=i.topN)!=null?v:50,a=(x=i.minSize)!=null?x:1,f=(G=i.label)!=null?G:"diag",l=s[0],c=s[1],g=s[2],d=l*c,u=new Uint32Array(n+1),p=new Uint32Array(n+1);for(let M=0;M<t.length;M++){const A=o[M];A&&(u[A]=t[M],p[A]++)}const m=new Map,y=new Uint32Array(n+1),k=new Uint32Array(n+1),_=(M,A)=>{let T=m.get(M);T||(T=new Map,m.set(M,T)),T.set(A,(T.get(A)||0)+1)};for(let M=0;M<g;M++)for(let A=0;A<c;A++)for(let T=0;T<l;T++){const U=M*d+A*l+T,z=o[U];if(!z)continue;const N=u[z],L=Z=>{const te=o[Z];if(te===z)return;k[z]++;const R=te?u[te]:0;R===0?y[z]++:R!==N&&_(z,R)};T>0&&L(U-1),T<l-1&&L(U+1),A>0&&L(U-l),A<c-1&&L(U+l),M>0&&L(U-d),M<g-1&&L(U+d)}const w=new Map,h=new Map;for(let M=1;M<=n;M++){const A=u[M];w.set(A,(w.get(A)||0)+1),(!h.has(A)||p[M]>h.get(A))&&h.set(A,p[M])}const $=[];for(let M=1;M<=n;M++){if(p[M]<a)continue;const A=u[M],T=m.get(M);let U=0,z=0,N=0;if(T)for(const[Z,te]of T)N+=te,te>z&&(z=te,U=Z);const L=k[M]||1;$.push({comp:M,class:A,size:p[M],largestOfClass:p[M]===h.get(A)?"Y":"n",compsInClass:w.get(A),domNeighbor:U,domFracForeign:N?+(z/N).toFixed(2):0,domFracBoundary:+(z/L).toFixed(2),bgFrac:+(y[M]/L).toFixed(2)})}$.sort((M,A)=>A.domFracForeign-M.domFracForeign||A.size-M.size);const b=(M,A)=>{const T=A.map(z=>Math.max(z.h.length,...M.map(N=>String(N[z.k]).length))),U=z=>z.map((N,L)=>String(N).padStart(T[L])).join("  ");return[U(A.map(z=>z.h)),...M.map(z=>U(A.map(N=>z[N.k])))].join(`
`)},P=[{k:"comp",h:"comp"},{k:"class",h:"class"},{k:"size",h:"size"},{k:"largestOfClass",h:"lrg"},{k:"compsInClass",h:"nComp"},{k:"domNeighbor",h:"domNbr"},{k:"domFracForeign",h:"encF"},{k:"domFracBoundary",h:"encB"},{k:"bgFrac",h:"bgF"}];console.log(`[${f}] total components=${n}, distinct classes=${w.size}
[${f}] island candidates (encF≈1 + small size + lrg=n ⇒ swallowed island):
`+b($.slice(0,r),P));const C=[...w.entries()].map(([M,A])=>({class:M,components:A,maxCompSize:h.get(M)})).sort((M,A)=>A.components-M.components);return console.log(`[${f}] per-class component counts (components=1 ⇒ fully connected):
`+b(C.slice(0,30),[{k:"class",h:"class"},{k:"components",h:"comps"},{k:"maxCompSize",h:"maxSize"}])),$}_collectComponentStats(t,n,o){const s=_n.get(o);if(s&&s.cl===n&&s.bw===t&&o.length===t.length)return[s.ls2bw,s.sumls];const i=t.length,r=new Uint32Array(n+1),a=new Uint32Array(n+1);for(let f=0;f<i;f++){const l=o[f];l>0&&(r[l]=t[f],a[l]++)}return[r,a]}_buildKeptMap(t,n,o,s,i){const r=new Uint32Array(o+1);let a=0;for(let l=1;l<=o;l++)t[l]>a&&(a=t[l]);const f=s==="all";if(a<=65535){const l=new Uint32Array(a+1),c=new Uint32Array(a+1);for(let g=1;g<=o;g++){const d=t[g];if(d!==0)if(f||s&&s.has&&s.has(d)){const u=n[g];(!c[d]||(i?u>=l[d]:u>l[d]))&&(l[d]=u,c[d]=g)}else r[g]=d}for(let g=1;g<=a;g++){const d=c[g];d>0&&(r[d]=g)}}else{const l=new Map;for(let c=1;c<=o;c++){const g=t[c];if(g!==0)if(f||s&&s.has&&s.has(g)){const d=n[c],u=l.get(g);(!u||(i?d>=u.sz:d>u.sz))&&l.set(g,{c,sz:d})}else r[c]=g}for(const[c,{c:g}]of l)r[g]=c}return r}largest_original_cluster_labels(t,n,o,s=null,i=!1,r=null,a=!1){const[f,l]=this._collectComponentStats(t,n,o),c=this._buildKeptMap(f,l,n,"all",!0);return this.finalize_volume(o,s,c,n,i,t,r,a)}filter_clusters(t,n,o,s,i=null,r=!1,a=null,f=!1){const[l,c]=this._collectComponentStats(t,n,o),g=this._buildKeptMap(l,c,n,s,!1);return this.finalize_volume(o,i,g,n,r,t,a,f)}filter_clusters_by_ratio(t,n,o,s,i=null,r=!1,a=null){const f=t.length,l=new Uint32Array(n+1).fill(0),c=new Uint32Array(n+1).fill(0);for(let p=0;p<f;p++){const m=o[p];m>0&&(l[m]===0&&(l[m]=t[p]),c[m]++)}const g=new Map;for(let p=1;p<=n;p++){const m=l[p],y=c[p];(!g.has(m)||y>g.get(m))&&g.set(m,y)}const d=new Uint8Array(n+1).fill(0);for(let p=1;p<=n;p++){const m=l[p],y=c[p],k=g.get(m)||0;y>=k*s&&(d[p]=1)}const u=new Uint32Array(n+1).fill(0);for(let p=1;p<=n;p++)d[p]&&(u[p]=l[p]);return this.finalize_volume(o,i,u,n,r,t,a)}_binaryComponentsFromLabels(t,n,o,s,i=!1){const r=s[0]|0,a=s[1]|0,f=s[2]|0,l=r*a,c=_n.get(o),g=c&&c.cl===n&&o.length===l*f&&(!i||c.bw===t);if(g&&c.conn===6&&c.distinctFgClasses<=1){const _=new Uint32Array(n+1);let w=0,h=0;for(let $=1;$<=n;$++){_[$]=$;const b=c.sumls[$];b>0&&b>=h&&(h=b,w=$)}return{parent:_,compSize:c.sumls,compClass:i?c.ls2bw:null,bestRoot:w}}const d=g?c.sumls:new Uint32Array(n+1),u=g?i?c.ls2bw:null:i?new Uint32Array(n+1):null,p=new Uint32Array(n+1);for(let _=1;_<=n;_++)p[_]=_;if(g&&c.conn===6&&c.runs&&c.bw===t){const _=($,b)=>{for(;p[$]!==$;)p[$]=p[p[$]],$=p[$];for(;p[b]!==b;)p[b]=p[p[b]],b=p[b];$!==b&&($<b?p[b]=$:p[$]=b)},w=c.runs,h=c.runLen;for(let $=0;$<h;$+=2){const b=w[$],P=w[$+1],C=b/l|0,v=b-C*l,x=v/r|0;let G=v-x*r;for(let M=b;M<P;M++,G++){const A=t[M];let T=0;if(C>0){const U=t[M-l];U!==0&&U!==A&&(T=o[M],_(T,o[M-l]))}if(x>0){const U=t[M-r];U!==0&&U!==A&&(T||(T=o[M]),_(T,o[M-r]))}if(G>0){const U=t[M-1];U!==0&&U!==A&&(T||(T=o[M]),_(T,o[M-1]))}}}}else{const _=g?c.minSl:0,w=g?c.maxSl:f-1;let h=_*l;for(let $=_;$<=w;$++)for(let b=0;b<a;b++)for(let P=0;P<r;P++,h++){const C=o[h];if(C===0)continue;g||(d[C]++,u&&u[C]===0&&(u[C]=t[h]));let v=C;for(;p[v]!==v;)p[v]=p[p[v]],v=p[v];if($>0){const x=o[h-l];if(x!==0&&x!==C){let G=x;for(;p[G]!==G;)p[G]=p[p[G]],G=p[G];v!==G&&(v<G?p[G]=v:(p[v]=G,v=G))}}if(b>0){const x=o[h-r];if(x!==0&&x!==C){let G=x;for(;p[G]!==G;)p[G]=p[p[G]],G=p[G];v!==G&&(v<G?p[G]=v:(p[v]=G,v=G))}}if(P>0){const x=o[h-1];if(x!==0&&x!==C){let G=x;for(;p[G]!==G;)p[G]=p[p[G]],G=p[G];v!==G&&(v<G?p[G]=v:p[v]=G)}}}}const m=new Uint32Array(n+1);for(let _=1;_<=n;_++){let w=_;for(;p[w]!==w;)w=p[w];p[_]=w,m[w]+=d[_]}let y=0,k=0;for(let _=1;_<=n;_++){const w=m[_];w>0&&w>=k&&(k=w,y=_)}return{parent:p,compSize:d,compClass:u,bestRoot:y}}applyLargestBinaryMaskInPlace(t,n,o,s){const i=t.length;if(n===0)return t.fill(0),t;const r=_n.get(o),a=r&&r.cl===n&&o.length===i;if(a&&r.conn===6&&r.distinctFgClasses<=1){let c=0,g=0;for(let d=1;d<=n;d++){const u=r.sumls[d];u>0&&u>=g&&(g=u,c=d)}if(r.runs&&r.bw===t){if(n>1){const d=r.runs,u=r.runLen;for(let p=0;p<u;p+=2){const m=d[p],y=d[p+1];for(let k=m;k<y;k++)o[k]!==c&&(t[k]=0)}}return t}if(r.fgStart>0&&t.fill(0,0,r.fgStart),r.fgEnd>=r.fgStart){for(let d=r.fgStart;d<=r.fgEnd;d++)o[d]!==c&&(t[d]=0);r.fgEnd+1<i&&t.fill(0,r.fgEnd+1)}else t.fill(0);return t}const{parent:f,bestRoot:l}=this._binaryComponentsFromLabels(t,n,o,s,!1);if(a&&r.runs&&r.bw===t){const c=r.runs,g=r.runLen;for(let d=0;d<g;d+=2){const u=c[d],p=c[d+1];for(let m=u;m<p;m++)f[o[m]]!==l&&(t[m]=0)}return t}if(a&&r.fgEnd>=r.fgStart){r.fgStart>0&&t.fill(0,0,r.fgStart);for(let c=r.fgStart;c<=r.fgEnd;c++){const g=o[c];(g===0||f[g]!==l)&&(t[c]=0)}r.fgEnd+1<i&&t.fill(0,r.fgEnd+1)}else for(let c=0;c<i;c++){const g=o[c];(g===0||f[g]!==l)&&(t[c]=0)}return t}filterHierarchicalFromLabels(t,n,o,s,i="all",r=!0,a=!1,f=null,l=!1){if(n===0)return[0,t instanceof Uint8Array?l?t:new Uint8Array(t.length):new Uint32Array(t.length)];const{parent:c,compSize:g,compClass:d,bestRoot:u}=this._binaryComponentsFromLabels(t,n,o,s,!0),p=new Uint32Array(n+1);for(let y=1;y<=n;y++)c[y]===u&&(p[y]=d[y]);const m=this._buildKeptMap(p,g,n,i,r);return this.finalize_volume(o,s,m,n,a,t,f,l)}filter18ClassFromLabels(t,n,o,s,i,r=!1,a=null,f=!1){return this.filterHierarchicalFromLabels(t,n,o,s,i,!1,r,a,f)}bwlabel(t,n,o=26,s=!1,i=!1,r=null){const a=Date.now(),f=n[0]*n[1]*n[2];if(![6,18,26].includes(o))return console.log("bwlabel: conn must be 6, 18 or 26."),[0,new Uint32Array(f)];if(n[0]<2||n[1]<2||n[2]<1)return console.log("bwlabel: img must be 2 or 3-dimensional"),[0,new Uint32Array(f)];let l;if(s){l=new Uint8Array(f);for(let m=0;m<f;m++)t[m]!==0&&(l[m]=1)}else t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Uint16Array||t instanceof Uint32Array||t instanceof Int8Array||t instanceof Int16Array||t instanceof Int32Array?t.length===f?l=t:(l=new Uint32Array(f),l.set(t.subarray(0,f))):(l=new Uint32Array(f),l.set(t));this._lastInitialRange=null,this._lastMeta=null;let[c,g,d]=this.do_initial_labelling(l,n,o,r);g===void 0&&(g=new Uint32Array(0));const[u,p]=this.translate_labels(d,n,g,c,l,this._lastInitialRange);if(this._lastMeta&&_n.set(p,this._lastMeta),console.log(o+" neighbor clustering into "+u+" regions in "+(Date.now()-a)+"ms"),i){const[m,y]=this.largest_original_cluster_labels(l,u,p);return[m,y]}return[u,p]}filter_clusters_by_rank(t,n,o,s,i=0,r=null,a=!1,f=null,l=!1,c=null){const g=t.length,d=new Uint32Array(n+1).fill(0),u=new Uint32Array(n+1).fill(0),p=f!=null&&Array.isArray(r)&&r.length===3,m=p?r[0]:0,y=p?r[1]:0,k=p?new Int32Array(n+1).fill(2147483647):null,_=p?new Int32Array(n+1).fill(-1):null,w=p?new Int32Array(n+1).fill(2147483647):null,h=p?new Int32Array(n+1).fill(-1):null,$=p?new Int32Array(n+1).fill(2147483647):null,b=p?new Int32Array(n+1).fill(-1):null;for(let M=0;M<g;M++){const A=o[M];if(A>0&&(d[A]===0&&(d[A]=t[M]),u[A]++,p)){const T=M%m,U=M/m|0,z=U%y,N=U/y|0;T<k[A]&&(k[A]=T),T>_[A]&&(_[A]=T),z<w[A]&&(w[A]=z),z>h[A]&&(h[A]=z),N<$[A]&&($[A]=N),N>b[A]&&(b[A]=N)}}let P=null,C=0;if(p){let M=-1;for(let L=1;L<=n;L++)u[L]>M&&(M=u[L],C=L);const A=Math.max(2,Math.ceil(f)+4),T=m*y,U=new Int16Array(g).fill(-1);let z=[];for(let L=0;L<g;L++)o[L]===C&&(U[L]=0,z.push(L));for(let L=1;L<=A&&z.length;L++){const Z=[];for(let te=0;te<z.length;te++){const R=z[te],q=R%m,oe=(R/m|0)%y;q>0&&U[R-1]===-1&&(U[R-1]=L,Z.push(R-1)),q<m-1&&U[R+1]===-1&&(U[R+1]=L,Z.push(R+1)),oe>0&&U[R-m]===-1&&(U[R-m]=L,Z.push(R-m)),oe<y-1&&U[R+m]===-1&&(U[R+m]=L,Z.push(R+m)),R-T>=0&&U[R-T]===-1&&(U[R-T]=L,Z.push(R-T)),R+T<g&&U[R+T]===-1&&(U[R+T]=L,Z.push(R+T))}z=Z}const N=A+1;P=new Float64Array(n+1).fill(N);for(let L=0;L<g;L++){const Z=o[L];if(Z>0&&Z!==C){const te=U[L]>=0?U[L]:N;te<P[Z]&&(P[Z]=te)}}l&&console.log(`[rank-filter] brain comp=${C} size=${M} bbox A[${k[C]},${_[C]}] B[${w[C]},${h[C]}] C[${$[C]},${b[C]}] | maxGap=${f} scan=${A}`)}const v=new Map;for(let M=1;M<=n;M++){const A=d[M],T=u[M];v.has(A)||v.set(A,[]),v.get(A).push({i:M,size:T})}const x=new Uint8Array(n+1).fill(0);for(const[M,A]of v.entries()){A.sort((N,L)=>L.size-N.size);const T=A.length?A[0].size:0,U=i>0?T*i:0,z=Math.min(A.length,s);for(let N=0;N<z;N++){const L=A[N];if(L.size<U){l&&N>0&&console.log(`[rank-filter] class ${M} #${N}: size=${L.size} DROP (below ${(i*100).toFixed(0)}% floor)`);break}if(N>0&&p){const Z=P[L.i],te=Z<=f;if(l&&console.log(`[rank-filter] class ${M} #${N}: size=${L.size} surfDist=${Z} -> ${te?"KEEP":"DROP (too far)"}`),!te)continue}x[L.i]=1}}const G=new Uint32Array(n+1).fill(0);for(let M=1;M<=n;M++)x[M]&&(G[M]=d[M]);return this.finalize_volume(o,r,G,n,a,t,c)}}function Ts(e){if(!(e!=null&&e.length))throw new Error("Segmentation volume is empty.");let t=0;if((e instanceof Uint8Array||e instanceof Uint8ClampedArray)&&(e.byteOffset&3)===0&&e.length>=4){const n=e.length>>2,o=new Uint32Array(e.buffer,e.byteOffset,n);for(let s=0;s<n;s++){const i=o[s];i!==0&&(i&255&&t++,i&65280&&t++,i&16711680&&t++,i&4278190080&&t++)}for(let s=n<<2;s<e.length;s++)e[s]!==0&&t++}else if(e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Uint16Array||e instanceof Uint32Array)for(let n=0;n<e.length;n++)e[n]!==0&&t++;else for(let n=0;n<e.length;n++){const o=e[n];if(!Number.isFinite(o)||o<0)throw new Error(`Segmentation contains an invalid label at voxel ${n}: ${o}.`);o!==0&&t++}if(t===0)throw new Error("Segmentation volume contains no foreground labels.");if(t>e.length*.95)throw new Error(`Segmentation fills ${(100*t/e.length).toFixed(1)}% of the volume; GPU output is unusable.`)}const Es={il:null,runs:null,runLen:0,dirty:!1};function Ns(e,t=.05,n=.95){const o=e.length,s=Math.min(1e5,o),i=Math.floor(s*t),r=Math.ceil(s*n)-1;if(e instanceof Uint8Array||e instanceof Uint8ClampedArray){if(s===0)return{qmin:0,qmax:0};const f=new Uint32Array(256);if(s>=o)for(let u=0;u<o;u++)f[e[u]]++;else for(let u=0;u<s;u++)f[e[Math.floor(Math.random()*o)]]++;let l=0,c=0,g=0,d=!1;for(let u=0;u<256;u++){const p=f[u];if(p!==0&&(l+=p,!d&&l>i&&(c=u,d=!0),l>r)){g=u;break}}return{qmin:c,qmax:g}}const a=new Float64Array(s);if(s>=o)a.set(e);else for(let f=0;f<s;f++){const l=Math.floor(Math.random()*o);a[f]=e[l]}return a.sort(),{qmin:a[i],qmax:a[r]}}function Os(e){const t=e.length;if(t===0)return{min:0,max:0};let n=e[0],o=e[0];if(e instanceof Uint8Array||e instanceof Uint8ClampedArray){for(let s=1;s<t;s++){const i=e[s];if(i<n?n=i:i>o&&(o=i),n===0&&o===255)break}return{min:n,max:o}}for(let s=1;s<t;s++){const i=e[s];i<n&&(n=i),i>o&&(o=i)}return{min:n,max:o}}function So(e,t,n){const o=e.length,s=new Float32Array(o);if(e instanceof Uint8Array||e instanceof Uint8ClampedArray){const i=new Float32Array(256);for(let r=0;r<256;r++)i[r]=(r-t)/n;for(let r=0;r<o;r++)s[r]=i[e[r]];return s}for(let i=0;i<o;i++)s[i]=(e[i]-t)/n;return s}function Ho(e,t,n,o){const s=t[0]|0,i=t[1]|0,r=t[2]|0,a=s*i*r,f=new o(a);if(n[0]===2&&n[1]===1&&n[2]===0&&a===e.length){const y=i*r,k=i*s,_=16;for(let w=0;w<i;w++){const h=w*r,$=w*s;for(let b=0;b<s;b+=_){const P=Math.min(b+_,s);for(let C=0;C<r;C+=_){const v=Math.min(C+_,r);for(let x=b;x<P;x++){let G=x*y+h+C,M=C*k+$+x;for(let A=C;A<v;A++,G++,M+=k)f[M]=e[G]}}}}return f}const l=[s,i,r],c=[l[n[0]],l[n[1]],l[n[2]]],g=[i*r,r,1],d=g[n[0]],u=g[n[1]],p=g[n[2]];let m=0;for(let y=0;y<c[0];y++){const k=y*d;for(let _=0;_<c[1];_++){const w=k+_*u;for(let h=0;h<c[2];h++,m++)f[m]=e[w+h*p]}}return f}function Pn(e,t=[256,256,256],n=[2,1,0]){return Ho(e,t,n,Float32Array)}function Ds(e,t=[256,256,256],n=[2,1,0]){return Ho(e,t,n,Uint8Array)}function no(e){const t=new Uint32Array(256);for(let n=0;n<e.length;n++)t[e[n]]++;return t}function Vs(e){const t=no(e);let n=0;for(let o=0;o<256;o++)t[o]>0&&n++;return n}function Po(e,t=!1,n="output"){let o=0,s=1/0,i=-1/0;if(!t&&(e instanceof Uint8Array||e instanceof Uint8ClampedArray)){if(e.length>0){let r=255,a=0,f=0;if((e.byteOffset&3)===0&&e.length>=4){const l=e.length>>2,c=new Uint32Array(e.buffer,e.byteOffset,l);for(let g=0;g<l;g++){const d=c[g];if(d===0){r=0;continue}const u=d&255,p=d>>>8&255,m=d>>>16&255,y=d>>>24;o+=u+p+m+y,u<r&&(r=u),u>a&&(a=u),p<r&&(r=p),p>a&&(a=p),m<r&&(r=m),m>a&&(a=m),y<r&&(r=y),y>a&&(a=y)}f=l<<2}for(let l=f;l<e.length;l++){const c=e[l];o+=c,c<r&&(r=c),c>a&&(a=c)}s=r,i=a}}else for(let r=0;r<e.length;r++){const a=e[r];if(!Number.isFinite(a))throw new Error(`Model ${n} contains NaN or Inf values.`);o+=a,a<s&&(s=a),a>i&&(i=a)}if(console.log(`${t?"Probability":"Segmentation"} volume sum: ${o}`),o===0)throw new Error(t?"Model probability output is all zeros. This may indicate an issue with WebGPU shaders or input data.":"Model produced an empty segmentation (all zeros). This may indicate an issue with WebGPU shaders or input data.");if(t&&(s<-1e-6||i>1+1e-6))throw new Error(`Probability output values out of range [0, 1]: min=${s.toFixed(4)}, max=${i.toFixed(4)}`);return{sum:o,min:s,max:i}}function Hs(e,t,n,o,s=null,i=null){return ge(this,null,function*(){const r=!!(e&&typeof e.data=="function");let a,f;r?(console.log("Downloading segmentation data from GPU to CPU..."),a=yield e.data(),f=e.shape||i||[256,256,256],console.log("Data download complete. Starting CPU processing.")):(a=e,f=i||[256,256,256]),Ts(a);let l,c=!1;if(a instanceof Uint8Array)l=a,c=!r;else{let d=0;for(let u=0;u<a.length;u++)a[u]>d&&(d=a[u]);l=d<=255?new Uint8Array(a):new Uint32Array(a),c=!0}let g=null;if(o.isPostProcessEnable){console.log("Applying CPU-based connected-component labeling...");const d=performance.now(),u=new Is,p=[5,14,15,58,59,60,598,608],m=!!o.fillSuppressedWithNeighborLabel||p.includes(n.id),y=[5,14,15,58,59,60,598,608],k=C=>C>=1&&C<=34?1:C>=35&&C<=68?2:0,_=y.includes(n.id)?k:null,w=f[0]*f[1]*f[2],h=Math.max(1e5,Math.floor(w*.01)),[$,b]=u.bwlabel(l,f,6,!1,!1,Es);if(g=u.getLabelMeta(b),$>h){const C=`Segmentation produced noise: ${$.toLocaleString()} disconnected regions (cap ${h.toLocaleString()}). The model output is unusable, so post-processing was aborted. Try re-running, switching backend (WebGPU/WebGL2), or another model.`;console.error("[postprocess] "+C);const v=new Error(C);throw v.code="SEGMENTATION_NOISE",v}if([1,7].includes(n.id)){const[G,M]=u.filter_clusters_by_rank(l,$,b,2,.02,f,m,8,!1,_);l=M,c=!0}else if([3,8,9,21,38,218].includes(n.id)){const C=new Set([1,2,5,6,13]),[v,x]=u.filter18ClassFromLabels(l,$,b,f,C,m,_,c);l=x,c=!0}else if([5,14,15,58,59,60,598,608].includes(n.id)){o.diagnoseEnclosedComponents&&u.diagnose_components(l,$,b,f,{label:`model${n.id}`,topN:60});const[C,v]=u.filterHierarchicalFromLabels(l,$,b,f,"all",!0,m,_,c);l=v,c=!0}else c||(l=l.slice(),c=!0),u.applyLargestBinaryMaskInPlace(l,$,b,f);const P=((performance.now()-d)/1e3).toFixed(4);console.log(`Connected-component labeling took: ${P} seconds.`)}switch(n.type){case"Brain_Masking":{const d=new Uint8Array(l.length);if(g&&g.runs){const u=g.runs,p=g.runLen;for(let m=0;m<p;m+=2){const y=u[m],k=u[m+1];for(let _=y;_<k;_++)l[_]!==0&&(d[_]=1)}}else for(let u=0;u<l.length;u++)d[u]=l[u]!==0?1:0;return d}case"Brain_Extraction":{const d=new Uint8Array(l.length),u=s?new Uint8Array(l.length):null;if(g&&g.runs){const p=g.runs,m=g.runLen;for(let y=0;y<m;y+=2){const k=p[y],_=p[y+1];for(let w=k;w<_;w++)l[w]!==0&&(d[w]=t[w],u&&(u[w]=1))}}else for(let p=0;p<l.length;p++){const m=l[p]!==0?1:0;d[p]=t[p]*m,u&&(u[p]=m)}return s&&(s.mask=u),d}default:return l instanceof Uint8Array?l:new Uint8Array(l)}})}const js={WEBGPU:"webgpu"};function Xs(e,t){return{startTime:Date.now(),Model_Name:(e==null?void 0:e.modelName)||"Unknown",Execution_Mode:t,TF_Backend:"webgpu",isModelFullVol:null,No_SubVolumes:1,Brainchop_Ver:"FullVolume",Input_Shape:null,Output_Shape:null,Channel_Last:null,Model_Param:null,Model_Layers:null,Actual_Labels:null,Expect_Labels:null,NumLabels_Match:null,Missing_Labels:null,Preprocess_t:null,Setup_t:null,Inference_t:null,Postprocess_t:null,Display_t:null,Status:null,Error_Type:null,Extra_Err_Info:null}}function Ys(e,t,n,o=null){e.Expect_Labels=t,e.Actual_Labels=n,e.NumLabels_Match=t===n,o&&o.length>0&&(e.Missing_Labels=o.join(", "))}function Ks(e,t,n,o=null){e.Inference_t=t,e.Postprocess_t=n,o&&(o.Preprocess_t!==void 0&&(e.Preprocess_t=o.Preprocess_t),o.Setup_t!==void 0&&(e.Setup_t=o.Setup_t),o.Display_t!==void 0&&(e.Display_t=o.Display_t)),e.Status="OK"}function Zs(e,t,n=null){e.Inference_t=1/0,e.Postprocess_t=1/0,e.Status="Fail",e.Error_Type=(t==null?void 0:t.message)||String(t),n&&(e.Extra_Err_Info=n)}const Nt=1e-8,Qs=[256,256,256];function on(e,t,n){return Math.max(t,Math.min(n,e))}function Js(e){return e.outputType==="probability"&&e.probabilityPostprocess==="cat-lite"}function er(e,t,n){const[o,s,i]=e,r=o.length,a=new Uint8Array(r);let f=0;for(let h=0;h<r;h++)Math.max(0,o[h])+Math.max(0,s[h])+Math.max(0,i[h])>=n&&(a[h]=1,f++);const[l,c,g]=t;if(l<2||c<2||g<1)return{componentCount:0,removedVoxels:0,supportMask:a};const d=l===256&&c===256,u=new Uint32Array(f),p=l*c;let m=0,y=0,k=0,_=0;for(let h=0;h<r;h++){if(a[h]!==1)continue;_++;const $=m;u[m++]=h,a[h]=2;for(let b=$;b<m;b++){const P=u[b],C=d?P&255:P%l,v=d?P>>>8&255:Math.floor(P/l)%c;C>0&&a[P-1]===1&&(a[P-1]=2,u[m++]=P-1),C+1<l&&a[P+1]===1&&(a[P+1]=2,u[m++]=P+1),v>0&&a[P-l]===1&&(a[P-l]=2,u[m++]=P-l),v+1<c&&a[P+l]===1&&(a[P+l]=2,u[m++]=P+l),P>=p&&a[P-p]===1&&(a[P-p]=2,u[m++]=P-p),P+p<r&&a[P+p]===1&&(a[P+p]=2,u[m++]=P+p)}m-$>=k-y&&(y=$,k=m)}let w=0;if(_>1)for(let h=0;h<m;h++){if(h>=y&&h<k)continue;const $=u[h];o[$]=0,s[$]=0,i[$]=0,a[$]=0,w++}return{componentCount:_,removedVoxels:w,supportMask:a}}function tr([e,t,n],o,{minSupport:s,priorPower:i},r=null){const a=!!(r&&s>0&&s<=1);let f=0;for(let m=0;m<o.length;m++){if(a&&r[m]!==2)continue;const y=Math.max(0,e[m])+Math.max(0,t[m])+Math.max(0,n[m]);Math.min(y,1)>=s&&Number.isFinite(o[m])&&f++}const l=new Uint32Array(f),c=new Float64Array(f),g=f*36<=192*Ht(2,20)?f:0,d=new Float64Array(g),u=new Float64Array(g),p=new Float64Array(g);for(let m=0,y=0;m<o.length;m++){if(a&&r[m]!==2)continue;const k=Math.max(0,e[m]),_=Math.max(0,t[m]),w=Math.max(0,n[m]),h=k+_+w,$=Math.min(h,1);!($>=s)||!Number.isFinite(o[m])||(l[y]=m,c[y]=o[m]-0,g&&(d[y]=$*Math.pow(w/h,i),u[y]=$*Math.pow(k/h,i),p[y]=$*Math.pow(_/h,i)),y++)}return{indices:l,values:c,weightCsf:d,weightGm:u,weightWm:p,volumes:[e,t,n]}}function ko([e,t,n],o,s,i){const r=Math.max(0,e[o]),a=Math.max(0,t[o]),f=Math.max(0,n[o]),l=r+a+f,c=Math.min(l,1);i[0]=c*Math.pow(f/l,s),i[1]=c*Math.pow(r/l,s),i[2]=c*Math.pow(a/l,s)}function Mo({indices:e,values:t,weightCsf:n,weightGm:o,weightWm:s,volumes:i},{minSeparation:r,sigmaFloor:a,priorPower:f},l=!1){const c=n.length===0?new Float64Array(3):null,g=new Float64Array(3),d=new Float64Array(3);for(let y=0;y<t.length;y++){const k=t[y];c&&ko(i,e[y],f,c);const _=c?c[0]:n[y],w=c?c[1]:o[y],h=c?c[2]:s[y];g[0]+=_*k,d[0]+=_,g[1]+=w*k,d[1]+=w,g[2]+=h*k,d[2]+=h}if(d.some(y=>y<100))return{applied:!1,reason:"too few high-confidence tissue voxels"};const u=Array.from(g,(y,k)=>y/d[k]);if(!(u[0]+r<u[1]&&u[1]+r<u[2]))return{applied:!1,reason:`implausible T1 tissue ordering (${u.map(y=>y.toFixed(3)).join(", ")})`};if(l)return{applied:!0,means:u};const p=new Float64Array(3);for(let y=0;y<t.length;y++){const k=t[y];c&&ko(i,e[y],f,c);const _=c?c[0]:n[y],w=c?c[1]:o[y],h=c?c[2]:s[y],$=k-u[0],b=k-u[1],P=k-u[2];p[0]+=_*$*$,p[1]+=w*b*b,p[2]+=h*P*P}const m=Array.from(p,(y,k)=>Math.sqrt(Math.max(a*a,y/d[k])));return{applied:!0,means:u,sigmas:m}}function nr(e,t,n,o,{minSupport:s,block:i,smoothingPasses:r},a=null){const[f,l,c]=e,[g,d,u]=n,p=!!(a&&s>0&&s<=1),m=Math.ceil(g/i),y=Math.ceil(d/i),k=Math.ceil(u/i),_=m*y*k,w=new Float64Array(_),h=new Float64Array(_),[$,b,P]=o,C=g*d;for(let z=0;z<u;z++){const N=Math.floor(z/i);for(let L=0;L<d;L++){const Z=Math.floor(L/i);let te=z*C+L*g;const R=(N*y+Z)*m;for(let q=0;q<g;q++,te++){if(p&&a[te]!==2)continue;const D=Math.max(0,f[te]),oe=Math.max(0,l[te]),O=Math.max(0,c[te]),j=D+oe+O,he=Math.min(j,1);if(!(he>=s)||!Number.isFinite(t[te]))continue;const Pe=D/j,Ce=oe/j,ye=O/j,Q=ye*$+Pe*b+Ce*P,ee=he*(ye*ye+Pe*Pe+Ce*Ce),W=R+Math.floor(q/i);w[W]+=ee*(t[te]-Q),h[W]+=ee}}}let v=new Float32Array(_),x=new Uint8Array(_);for(let z=0;z<_;z++)h[z]>1&&(v[z]=w[z]/h[z],x[z]=1);for(let z=0;z<r;z++){const N=new Float32Array(_),L=new Uint8Array(_);for(let Z=0;Z<k;Z++)for(let te=0;te<y;te++)for(let R=0;R<m;R++){let q=0,D=0;for(let O=-1;O<=1;O++){const j=Z+O;if(!(j<0||j>=k))for(let he=-1;he<=1;he++){const Pe=te+he;if(!(Pe<0||Pe>=y))for(let Ce=-1;Ce<=1;Ce++){const ye=R+Ce;if(ye<0||ye>=m)continue;const Q=(j*y+Pe)*m+ye;x[Q]&&(q+=v[Q],D++)}}}const oe=(Z*y+te)*m+R;D>0&&(N[oe]=q/D,L[oe]=1)}v=N,x=L}const G=(z,N)=>{const L=new Int32Array(z),Z=new Int32Array(z),te=new Float32Array(z);for(let R=0;R<z;R++){const q=on((R+.5)/i-.5,0,N-1);L[R]=Math.floor(q),Z[R]=Math.min(L[R]+1,N-1),te[R]=q-L[R]}return{low:L,high:Z,t:te}},M=G(g,m),A=G(d,y),T=G(u,k),U=g===256&&d===256;return z=>{let N,L,Z;if(U)Z=z>>>16,L=z>>>8&255,N=z&255;else{Z=Math.floor(z/C);const X=z-Z*C;L=Math.floor(X/g),N=X-L*g}const te=M.low[N],R=M.high[N],q=M.t[N],D=(T.low[Z]*y+A.low[L])*m,oe=(T.low[Z]*y+A.high[L])*m,O=(T.high[Z]*y+A.low[L])*m,j=(T.high[Z]*y+A.high[L])*m,he=v[D+te]+(v[D+R]-v[D+te])*q,Pe=v[oe+te]+(v[oe+R]-v[oe+te])*q,Ce=v[O+te]+(v[O+R]-v[O+te])*q,ye=v[j+te]+(v[j+R]-v[j+te])*q,Q=A.t[L],ee=he+(Pe-he)*Q,W=Ce+(ye-Ce)*Q;return ee+(W-ee)*T.t[Z]}}function Sn(e,t,n,o){const s=(e-t)/n;return-.5*s*s-o}function or(e,t,n,o={}){const{catLiteMinSupport:s=.03,catLitePurePriorPower:i=3,catLiteMinMeanSeparation:r=.035,catLiteSigmaFloor:a=.025,catLiteBiasBlockSize:f=16,catLiteBiasSmoothPasses:l=3,catLitePriorStrength:c=.8,catLiteIntensityStrength:g=.75,catLiteMixelPrior:d=.35,catLiteCsfWmMixelPrior:u=6,catLiteSpatialWeight:p=.25}=o,m={priorPower:i,minSupport:s,minSeparation:r,sigmaFloor:a},[y,k,_]=n,w=t.length,h=s>0&&s<=1,{componentCount:$,removedVoxels:b,supportMask:P}=er(e,n,s),C={componentCount:$,removedVoxels:b},v=tr(e,t,m,P),x=Mo(v,m,!0);if(!x.applied)return{tissues:e,stats:x};const G=nr(e,t,n,x.means,{minSupport:s,block:f,smoothingPasses:l},P);for(let le=0;le<v.indices.length;le++){const me=v.indices[le];v.values[le]=t[me]-G(me)}const M=Mo(v,m);if(!M.applied)return{tissues:e,stats:M};v.indices=v.weightCsf=v.weightGm=v.weightWm=null;const[A,T,U]=M.means,[z,N,L]=M.sigmas,[Z,te,R]=e,q=new Float32Array(w),D=new Float32Array(w),oe=new Float32Array(w),O=y*k,j=.5*(A+T),he=.5*(T+U),Pe=.5*(A+U),Ce=Math.sqrt(Ht(T-A,2)/12+.5*(Ht(z,2)+Ht(N,2))),ye=Math.sqrt(Ht(U-T,2)/12+.5*(Ht(N,2)+Ht(L,2))),Q=Math.sqrt(Ht(U-A,2)/12+.5*(Ht(z,2)+Ht(L,2))),ee=Math.log(z),W=Math.log(N),X=Math.log(L),V=Math.log(Ce),se=Math.log(ye),Le=Math.log(Q);let ze=0;for(let le=0;le<_;le++)for(let me=0;me<k;me++){let Y=le*O+me*y;for(let Fe=0;Fe<y;Fe++,Y++){if(h&&P[Y]!==2)continue;const H=Math.max(0,Z[Y]),qe=Math.max(0,te[Y]),tt=Math.max(0,R[Y]),Oe=H+qe+tt,rt=Math.min(Oe,1);if(!(rt>=s)||!Number.isFinite(t[Y]))continue;let at=H/Oe,ut=qe/Oe,gt=tt/Oe;if(p>0){let Qe=0,Bt=0,Xe=0,be=0;if(Fe>0){const we=Y-1,ie=Math.max(0,Z[we]),We=Math.max(0,te[we]),Ke=Math.max(0,R[we]),Ee=ie+We+Ke;Ee>Nt&&(Qe+=ie/Ee,Bt+=We/Ee,Xe+=Ke/Ee,be++)}if(Fe+1<y){const we=Y+1,ie=Math.max(0,Z[we]),We=Math.max(0,te[we]),Ke=Math.max(0,R[we]),Ee=ie+We+Ke;Ee>Nt&&(Qe+=ie/Ee,Bt+=We/Ee,Xe+=Ke/Ee,be++)}if(me>0){const we=Y-y,ie=Math.max(0,Z[we]),We=Math.max(0,te[we]),Ke=Math.max(0,R[we]),Ee=ie+We+Ke;Ee>Nt&&(Qe+=ie/Ee,Bt+=We/Ee,Xe+=Ke/Ee,be++)}if(me+1<k){const we=Y+y,ie=Math.max(0,Z[we]),We=Math.max(0,te[we]),Ke=Math.max(0,R[we]),Ee=ie+We+Ke;Ee>Nt&&(Qe+=ie/Ee,Bt+=We/Ee,Xe+=Ke/Ee,be++)}if(le>0){const we=Y-O,ie=Math.max(0,Z[we]),We=Math.max(0,te[we]),Ke=Math.max(0,R[we]),Ee=ie+We+Ke;Ee>Nt&&(Qe+=ie/Ee,Bt+=We/Ee,Xe+=Ke/Ee,be++)}if(le+1<_){const we=Y+O,ie=Math.max(0,Z[we]),We=Math.max(0,te[we]),Ke=Math.max(0,R[we]),Ee=ie+We+Ke;Ee>Nt&&(Qe+=ie/Ee,Bt+=We/Ee,Xe+=Ke/Ee,be++)}if(be){const we=1-p;at=we*at+p*Qe/be,ut=we*ut+p*Bt/be,gt=we*gt+p*Xe/be}}const Ae=v.values[ze++],Ze=c*Math.log(gt+Nt)+g*Sn(Ae,A,z,ee),Ye=c*Math.log(at+Nt)+g*Sn(Ae,T,N,W),dt=c*Math.log(ut+Nt)+g*Sn(Ae,U,L,X),_t=c*Math.log(d*2*Math.sqrt(gt*at)+Nt)+g*Sn(Ae,j,Ce,V),E=c*Math.log(d*2*Math.sqrt(at*ut)+Nt)+g*Sn(Ae,he,ye,se),Tt=c*Math.log(u*2*Math.sqrt(gt*ut)*Ht(1-at,2)+Nt)+g*Sn(Ae,Pe,Q,Le),zt=Math.max(Ze,Ye,dt,_t,E,Tt),Jt=Math.exp(Ze-zt),Rt=Math.exp(Ye-zt),S=Math.exp(dt-zt),F=Math.exp(_t-zt),I=Math.exp(E-zt),ce=Math.exp(Tt-zt),fe=Jt+Rt+S+F+I+ce,K=on((Ae-A)/(T-A),0,1),Ue=on((U-Ae)/(U-T),0,1),de=on((Ae-A)/(U-A),0,1),xe=(Rt+F*K+I*Ue)/fe,ue=(S+I*(1-Ue)+ce*de)/fe,_e=(Jt+F*(1-K)+ce*(1-de))/fe,ve=Math.min(gt,ut),ct=on((ve-at)/(ve+Nt),0,1),Re=on(4*gt*ut,0,1),je=Ht(1-Re*ct,2);q[Y]=on(xe*rt*je,0,1);const Ie=(1-xe*je)/Math.max(ue+_e,Nt);D[Y]=on(ue*Ie*rt,0,1),oe[Y]=on(_e*Ie*rt,0,1)}}return{tissues:[q,D,oe],stats:{applied:!0,tissueMeans:{csf:A,gray:T,white:U},tissueSigmas:{csf:z,gray:N,white:L},supportCleanup:C}}}const Ao=({csf:e,gray:t,white:n})=>`CSF=${e.toFixed(3)} GM=${t.toFixed(3)} WM=${n.toFixed(3)}`;function sr(e,t,n,o,s){return ge(this,null,function*(){var f;const i=[];for(let l=0;l<3;l++)i.push(yield s(e[l],l)),e[l]=null;const{tissues:r,stats:a}=or(i,t,Qs,n);if(o.Output_Type="Continuous tissue probability",o.Tissue="GM/WM/CSF",o.Softmax_Temperature=(f=n.softmaxTemperature)!=null?f:1,a.applied){o.Partial_Volume="CAT-lite mixed-class PVE",o.CAT_Lite_Tissue_Means=Ao(a.tissueMeans),o.CAT_Lite_Tissue_Sigmas=Ao(a.tissueSigmas);const{componentCount:l,removedVoxels:c}=a.supportCleanup;console.log(`[CAT-lite] means ${o.CAT_Lite_Tissue_Means}; sigmas ${o.CAT_Lite_Tissue_Sigmas}; removed ${c} voxels outside the largest of ${l} support components`)}else o.Partial_Volume=`Skipped: ${a.reason}`,console.warn(`[CAT-lite] skipped: ${a.reason}`);return r})}const an=[1,3,5,7,13,19,31,19,13,7,5,3,1],rr=[16,8,4,2,1,16,8,4,2,1,16,8,4,2,1,16,8,4,2,1,16,8,4,2,1],ar={model16chan18cls:{dilations:an,activation:"gelu_tanh",fullVolume:!0},model24chan18cls_gdice_prio:{dilations:an,activation:"gelu_tanh",fullVolume:!0},model6chan3cls:{dilations:an,activation:"gelu_tanh",fullVolume:!0},model24chan104cls_synth:{dilations:an,activation:"gelu_tanh",fullVolume:!0},model24chan104cls_infant_refit_synth:{dilations:an,activation:"gelu_tanh",fullVolume:!0},model24chan104cls_v3_repbn:{dilations:an,activation:"gelu_tanh",fullVolume:!0},model24chan50cls:{dilations:an,activation:"gelu_tanh",fullVolume:!0},model32chan18cls:{dilations:an,activation:"gelu_tanh",fullVolume:!1},mindgrab:{dilations:rr,activation:"gelu_tanh",fullVolume:!0},model5_gw_ae:{dilations:[1,2,4,8,16,8,4,2,1],activation:"relu",fullVolume:!0},model11_gw_ae:{dilations:[1,2,4,8,4,2,2,1],activation:"relu",noSafetensors:!0,fullVolume:!0},model30chan18cls:{dilations:[1,2,4,8,16,8,4,2,1],activation:"elu",fullVolume:!0},model30chan50cls:{dilations:[1,2,4,8,16,8,4,2,1],activation:"elu",fullVolume:!0}};function ir(e){const t=String(e.path||"").match(/\/models\/([^/]+)\//);return t?t[1]:null}function lo(e){const t=ir(e);if(!t)return null;const n=ar[t];return!n||n.noSafetensors?null:St({name:t},n)}function lr(e){const t=e&32768?-1:1,n=(e&31744)>>10,o=e&1023;return n===0?t*Math.pow(2,-14)*(o/1024):n===31?o?NaN:t*(1/0):t*Math.pow(2,n-15)*(1+o/1024)}function jo(e){const t=new DataView(e),n=Number(t.getBigUint64(0,!0)),o=JSON.parse(new TextDecoder().decode(new Uint8Array(e,8,n))),s=8+n,i={};for(const[r,a]of Object.entries(o)){if(r==="__metadata__"){i.__metadata__=a;continue}const[f,l]=a.data_offsets,c=a.shape.reduce((d,u)=>d*u,1);let g;if(a.dtype==="F32")g=new Float32Array(e.slice(s+f,s+l));else if(a.dtype==="F16"){const d=new Uint16Array(e.slice(s+f,s+l));g=new Float32Array(c);for(let u=0;u<c;u++)g[u]=lr(d[u])}else if(a.dtype==="BF16"){const d=new Uint16Array(e.slice(s+f,s+l));g=new Float32Array(c);const u=new Uint32Array(1),p=new Float32Array(u.buffer);for(let m=0;m<c;m++)u[0]=d[m]<<16,g[m]=p[0]}else throw new Error(`safetensors: unsupported dtype ${a.dtype} for tensor '${r}'`);if(g.length!==c)throw new Error(`safetensors: tensor '${r}' has ${g.length} values, shape says ${c}`);i[r]={dtype:a.dtype,shape:a.shape,data:g}}return i}function Xo(e){const t=[],n=[],o=[];for(const[i,r]of Object.entries(e)){if(i==="__metadata__")continue;const a=i.match(/^m\.model\.(\d+)\.(weight|bias)$/);if(!a)continue;const f=Number(a[1]),l=a[2]==="weight";if(r.shape.length===5){const[c,g,d,u,p]=r.shape,y={idx:f,outC:c,inC:g,kd:d,kh:u,kw:p,is1x1:d===1&&u===1&&p===1,w:r.data,bias:null},k=t.find(_=>_.idx===f);k?Object.assign(k,y):t.push(y)}else r.shape.length===1&&o.push({idx:f,isW:l,data:r.data,len:r.shape[0]})}t.sort((i,r)=>i.idx-r.idx);for(const i of o){const r=t.find(f=>f.idx===i.idx);if(r&&!i.isW){r.bias=i.data;continue}if(r&&i.isW)continue;let a=n.find(f=>f.idx===i.idx);a||(a={idx:i.idx,scale:null,bias:null},n.push(a)),i.isW?a.scale=i.data:a.bias=i.data}n.sort((i,r)=>i.idx-r.idx);let s=null;return t.length&&t[t.length-1].is1x1&&(s=t.pop()),{convs:t,affines:n,classifier:s}}function ur(e,t){var n;if(t==null)return e;if(t.length!==((n=e.classifier)==null?void 0:n.outC)||!Array.from(t).every(Number.isFinite))throw new Error("Classifier bias must contain one finite value per exported class");return e.classifier.bias=Float32Array.from(t),e}function cr(e,t){const n=t.cs,o=t.chan,{convs:s,affines:i,classifier:r}=e,a=u=>27*u*n;let f=0;const l=[];s.forEach((u,p)=>{const m=p===0?1:n,y={wq:f/4,inCS:m};f+=a(m),u.bias&&(y.biasQ=f/4,f+=n),l.push(y)}),i.forEach((u,p)=>{l[p]=l[p]||{},l[p].affQ=f/4,f+=n,l[p].affBiasQ=f/4,f+=n});let c=-1,g=-1;r&&(c=f,f+=o*t.nclass,f=Math.ceil(f/4)*4,r.bias&&(g=f,f+=t.nclass),f=Math.ceil(f/4)*4);const d=new Float32Array(f);if(s.forEach((u,p)=>{const m=l[p],y=m.inCS,k=m.wq*4,_=u.kd*u.kh*u.kw;if(u.outC>o||p>0&&u.inC>o)throw new Error(`layer ${p}: shape ${u.outC}x${u.inC} exceeds CHAN ${o}`);for(let w=0;w<u.outC;w++){for(let h=0;h<u.inC;h++)for(let $=0;$<u.kd;$++)for(let b=0;b<u.kh;b++)for(let P=0;P<u.kw;P++){const C=u.kd===3?$*9+b*3+P:0,v=(((w*u.inC+h)*u.kd+$)*u.kh+b)*u.kw+P;d[k+(C*y+h)*n+w]=u.w[v]}u.bias&&(d[m.biasQ*4+w]=u.bias[w])}if(_!==27&&_!==1)throw new Error(`layer ${p}: kernel ${u.kd}x${u.kh}x${u.kw} unsupported`)}),i.forEach((u,p)=>{const m=l[p];for(let y=0;y<o;y++)d[m.affQ*4+y]=u.scale?u.scale[y]:0,d[m.affBiasQ*4+y]=u.bias?u.bias[y]:0}),r)for(let u=0;u<t.nclass;u++){for(let p=0;p<o;p++)d[c+p*t.nclass+u]=r.w[u*r.inC+p];r.bias&&(d[g+u]=r.bias[u])}return{data:d,offsets:{layers:l,clsFloat:c,clsBiasFloat:g}}}function Yo(e,t={}){const{convs:n,affines:o,classifier:s}=e,i=n[0].outC,r=Math.ceil(i/4)*4,a=n.some(l=>l.bias),f=St({chan:i,cs:r,planes:r/4,nclass:s?s.outC:0,nhidden:n.length-1,norm:o.length?"gn":a?"none":"gn",affine:o.length>0,convBias:a,classifierBias:!!(s&&s.bias),centeredVariance:!1,eps:1e-5},t);if(f.nclass>256)throw new Error(`classifier has ${f.nclass} classes; the RGBA8 label texture holds at most 256`);if(!f.activation)throw new Error("descriptor needs an explicit `activation`");if(!f.dilations)throw new Error("descriptor needs an explicit `dilations` array");if(f.dilations.length!==n.length)throw new Error(`descriptor has ${f.dilations.length} dilations for ${n.length} convs`);return f}const Vn=(e,t)=>Array.from({length:e},(n,o)=>t(o)).join(""),zo=["x","y","z","w"];function fr(e){const t=`fn act4(x : vec4<f32>) -> vec4<f32> {
  return vec4<f32>(act(x.x), act(x.y), act(x.z), act(x.w));
}
`;switch(e){case"gelu_tanh":return`fn act(x : f32) -> f32 {
  let u = clamp(0.7978845608028654 * (x + 0.044715 * x * x * x), -9.0, 9.0);
  return 0.5 * x * (1.0 + tanh(u));
}
fn act4(x : vec4<f32>) -> vec4<f32> {
  let u = clamp(0.7978845608028654 * (x + 0.044715 * x * x * x), vec4<f32>(-9.0), vec4<f32>(9.0));
  return 0.5 * x * (vec4<f32>(1.0) + tanh(u));
}
`;case"gelu_tanh_approx":return`fn mn_tanh(x_in : f32) -> f32 {
  let x = clamp(x_in, -9.0, 9.0);
  let u = x * x;
  var p = -8.29118133e-14;
  p = p * u + 5.19263868e-11;
  p = p * u - 2.00294448e-08;
  p = p * u + 1.11017944e-05;
  p = p * u + 0.00309865153;
  p = p * u + 0.130791619;
  p = p * u + 0.99999994;
  var q = 0.000253859733;
  q = q * u + 0.024473751;
  q = q * u + 0.464124829;
  q = q * u + 1.0;
  return x * p / q;
}
fn act(x : f32) -> f32 {
  let u = 0.797884583 * (x + 0.044715 * (x * x * x));
  return (0.5 * x) * (1.0 + mn_tanh(u));
}
`+t;case"gelu_exp2_approx":return`fn mn_fast_exp2(x_in : f32) -> f32 {
  var x = x_in;
  if (!(x > -126.0)) { x = -126.0; }
  if (x > 126.0) { x = 126.0; }
  let f = floor(x);
  let r = x - f;
  var p = 0.000216128448;
  p = p * r + 0.00124678648;
  p = p * r + 0.0096754498;
  p = p * r + 0.0554852814;
  p = p * r + 0.240229305;
  p = p * r + 0.693147044;
  p = p * r + 1.0;
  return p * bitcast<f32>(u32((i32(f) + 127) << 23u));
}
fn act(x : f32) -> f32 {
  let u = x + 0.044715 * x * x * x;
  return x / (1.0 + mn_fast_exp2(-2.302208198144325 * u));
}
`+t;case"relu":return`fn act(x : f32) -> f32 { return max(x, 0.0); }
fn act4(x : vec4<f32>) -> vec4<f32> { return max(x, vec4<f32>(0.0)); }
`;case"elu":return`fn act(x : f32) -> f32 { return select(exp(x) - 1.0, x, x > 0.0); }
fn act4(x : vec4<f32>) -> vec4<f32> {
  return select(exp(x) - vec4<f32>(1.0), x, x > vec4<f32>(0.0));
}
`;default:throw new Error(`webgpu-native: unknown activation '${e}'; add it deliberately`)}}function pr(e,t,n){const o=e.cs/4,s=l=>Vn(n,l),i=l=>Vn(o,l),r=i(l=>`          let w${l} = vec4<f32>(wts4[wq + ${l}u]);
`),a=l=>`        { let wq = wq0 + ((tap * cin) + ic4 * 4u + ${l}u) * (CS / 4u);
`+r+s(c=>i(g=>`          a${c}${g} = fma(w${g}, vec4<f32>(s${c}.${zo[l]}), a${c}${g});
`))+`        }
`,f=(e.convBias?i(l=>`  let b${l} = vec4<f32>(wts4[params.bias_off / 4u + ${l}u]);
`)+s(l=>i(c=>`  a${l}${c} = a${l}${c} + b${c};
`)):"")+(e.norm==="none"?s(l=>i(c=>`  a${l}${c} = act4(a${l}${c});
`)):"");return`@compute @workgroup_size(${t}, 1, 1)
fn conv(@builtin(global_invocation_id) gid : vec3<u32>) {
  let y = i32(gid.y);
  let z = i32(gid.z);
  if (y >= NY || z >= NZ) { return; }
  let x0 = i32(gid.x) * ${n};
  let d = params.dilation;
  let cin = params.in_channels;
  let st4 = params.in_stride / 4u;
  let cin4 = cin / 4u;
  let wq0 = params.weight_off / 4u;
`+s(l=>i(c=>`  var a${l}${c} = vec4<f32>(0.0);
`))+s(l=>`  var s${l} = vec4<f32>(0.0);
`)+`  var tap : u32 = 0u;
  for (var dz : i32 = -1; dz <= 1; dz = dz + 1) {
  for (var dy : i32 = -1; dy <= 1; dy = dy + 1) {
    let sz = z + dz * d;
    let sy = y + dy * d;
    let okyz = sz >= 0 && sz < NZ && sy >= 0 && sy < NY;
    let plane = (u32(clamp(sz, 0, NZ - 1)) * u32(NY) + u32(clamp(sy, 0, NY - 1))) * u32(NX);
  for (var dx : i32 = -1; dx <= 1; dx = dx + 1) {
    let dxd = dx * d;
    if (okyz) {
      if (cin == 1u) {
        let wq = wq0 + tap * (CS / 4u);
`+r.replace(/^ {10}/gm,"        ")+s(l=>`        { let sx = x0 + ${l} + dxd;
          let sv = f32(src[plane + u32(clamp(sx, 0, NX - 1))]);
          let s = vec4<f32>(select(0.0, sv, sx >= 0 && sx < NX));
`+i(c=>`          a${l}${c} = fma(w${c}, s, a${l}${c});
`)+`        }
`)+`      } else {
      for (var ic4 : u32 = 0u; ic4 < cin4; ic4 = ic4 + 1u) {
`+s(l=>`        { let sx = x0 + ${l} + dxd;
          let q = vec4<f32>(src4[(plane + u32(clamp(sx, 0, NX - 1))) * st4 + ic4]);
          s${l} = select(vec4<f32>(0.0), q, sx >= 0 && sx < NX); }
`)+a(0)+a(1)+a(2)+a(3)+`      }
      }
    }
    tap = tap + 1u;
  }}}
`+f+`  let obase = (u32(z) * u32(NY) + u32(y)) * u32(NX) + u32(x0);
`+s(l=>`  { let o = (obase + ${l}u) * CS;
`+i(c=>Vn(4,g=>`    dst[o + ${4*c+g}u] = f16(a${l}${c}.${zo[g]});
`))+`  }
`)+`}
`}function mr(e){return`var<workgroup> wg_sum : array<f32, ${e} * CS>;
var<workgroup> wg_sq : array<f32, ${e} * CS>;
@compute @workgroup_size(${e}, 1, 1)
fn moments(@builtin(global_invocation_id) gid : vec3<u32>,
           @builtin(local_invocation_index) lid : u32,
           @builtin(workgroup_id) wid : vec3<u32>,
           @builtin(num_workgroups) nwg : vec3<u32>) {
  let slot = lid * CS;
  let base = ((gid.z * u32(NY) + gid.y) * u32(NX) + gid.x) * CS;
  for (var c : u32 = 0u; c < CS; c = c + 1u) {
    let v = f32(dst[base + c]);
    wg_sum[slot + c] = v;
    wg_sq[slot + c] = v * v;
  }
  workgroupBarrier();
  if (lid < CS) {
    var s : f32 = 0.0;
    var q : f32 = 0.0;
    for (var l : u32 = 0u; l < ${e}u; l = l + 1u) {
      s = s + wg_sum[l * CS + lid];
      q = q + wg_sq[l * CS + lid];
    }
    let g = (wid.z * nwg.y + wid.y) * nwg.x + wid.x;
    mom[(g * CS + lid) * 2u] = s;
    mom[(g * CS + lid) * 2u + 1u] = q;
  }
}
const STRIPES : u32 = 256u / CS;
var<workgroup> fs : array<f32, 256>;
var<workgroup> fq : array<f32, 256>;
@compute @workgroup_size(256, 1, 1)
fn moments_finish(@builtin(local_invocation_index) lid : u32) {
  let channel = lid % CS;
  let stripe = lid / CS;
  let groups = params.partial_groups;
  var s : f32 = 0.0;
  var q : f32 = 0.0;
  if (stripe < STRIPES) {
    var g : u32 = stripe;
    loop {
      if (g >= groups) { break; }
      s = s + mom[(g * CS + channel) * 2u];
      q = q + mom[(g * CS + channel) * 2u + 1u];
      g = g + STRIPES;
    }
  }
  fs[lid] = s;
  fq[lid] = q;
  workgroupBarrier();
  if (lid < CS) {
    var ts : f32 = 0.0;
    var tq : f32 = 0.0;
    for (var k : u32 = 0u; k < STRIPES; k = k + 1u) {
      ts = ts + fs[k * CS + lid];
      tq = tq + fq[k * CS + lid];
    }
    let n = f32(NX) * f32(NY) * f32(NZ);
    let mean = ts / n;
    let varr = max(tq / n - mean * mean, 0.0);
    mom[groups * CS * 2u + lid * 2u] = mean;
    mom[groups * CS * 2u + lid * 2u + 1u] = inverseSqrt(varr + EPS);
  }
}
`}function dr(e){return`@compute @workgroup_size(${e}, 1, 1)
fn norm(@builtin(global_invocation_id) gid : vec3<u32>) {
  let base = ((gid.z * u32(NY) + gid.y) * u32(NX) + gid.x) * CS;
  let mbase = params.partial_groups * CS * 2u;
  for (var c : u32 = 0u; c < CS; c = c + 1u) {
    var v = (f32(dst[base + c]) - mom[mbase + c * 2u]) * mom[mbase + c * 2u + 1u];
    if (HAS_AFFINE) {
      v = v * f32(wts[params.affine_off + c]) + f32(wts[params.bias_off + c]);
    }
    dst[base + c] = f16(act(v));
  }
}
`}function gr(e){return`@group(0) @binding(5) var<storage, read_write> labels : array<u32>;
@compute @workgroup_size(${e}, 1, 1)
fn classify(@builtin(global_invocation_id) gid : vec3<u32>) {
  let i = (gid.z * u32(NY) + gid.y) * u32(NX) + gid.x;
  let base = i * CS;
  var best : u32 = 0u;
  var best_v : f32 = -3.0e38;
  for (var k : u32 = 0u; k < NCLASS; k = k + 1u) {
    var acc : f32 = 0.0;
    if (CLASSIFIER_BIAS) { acc = f32(wts[params.bias_off + k]); }
    for (var c : u32 = 0u; c < CHAN; c = c + 1u) {
      acc = acc + f32(src[base + c]) * f32(wts[params.weight_off + c * NCLASS + k]);
    }
    if (acc > best_v) { best_v = acc; best = k; }
  }
  labels[i] = best;
}
`}function _r(e,t){var i;const{localX:n,vox:o,momLX:s}=t;if(e.cs%4!==0||e.cs>256)throw new Error(`webgpu-native: channel stride ${e.cs} unsupported`);if(e.nx%(n*o)||e.nx%n||e.nx%s)throw new Error(`webgpu-native: preset ${n}x${o}/${s} does not tile a ${e.nx}-voxel row`);if(s<e.cs)throw new Error(`webgpu-native: moments workgroup ${s} < ${e.cs} channels`);return`enable f16;
const NX : i32 = ${e.nx};
const NY : i32 = ${e.ny};
const NZ : i32 = ${e.nz};
const CS : u32 = ${e.cs}u;
const CHAN : u32 = ${e.chan}u;
const NCLASS : u32 = ${e.nclass}u;
const HAS_AFFINE : bool = ${!!e.affine};
const CLASSIFIER_BIAS : bool = ${!!e.classifierBias};
const EPS : f32 = ${Number((i=e.eps)!=null?i:1e-5).toExponential()};
struct Params {
  dilation : i32,
  weight_off : u32,
  affine_off : u32,
  bias_off : u32,
  in_channels : u32,
  in_stride : u32,
  partial_groups : u32,
  pad : u32,
};
@group(0) @binding(0) var<storage, read> src : array<f16>;
@group(0) @binding(1) var<storage, read_write> dst : array<f16>;
@group(0) @binding(2) var<storage, read> wts : array<f16>;
@group(0) @binding(3) var<uniform> params : Params;
@group(0) @binding(4) var<storage, read_write> mom : array<f32>;
@group(0) @binding(6) var<storage, read> wts4 : array<vec4<f16>>;
@group(0) @binding(7) var<storage, read> src4 : array<vec4<f16>>;
`+fr(e.activation)+pr(e,n,o)+(e.norm==="gn"?mr(s)+dr(n):"")+gr(n)}const Hn={amd:{localX:256,vox:1},apple:{localX:64,vox:2},default:{localX:64,vox:2}};function br(){var e;try{const t=new URLSearchParams(((e=globalThis.location)==null?void 0:e.search)||"").get("wgPreset"),n=t&&/^(\d+)x([124])$/.exec(t);return n?{localX:Number(n[1]),vox:Number(n[2]),source:"url"}:null}catch(t){return null}}function wr(e,t){var a;const n=String(((a=e.adapterInfo)==null?void 0:a.vendor)||"").toLowerCase(),o=e.limits,s=f=>f.localX<=o.maxComputeInvocationsPerWorkgroup&&f.localX<=o.maxComputeWorkgroupSizeX&&t.nx%(f.localX*f.vox)===0;let i=br()||It(St({},Hn[n]||Hn.default),{source:n||"default"});s(i)||(console.warn(`[WebGPU-native] preset ${i.localX}x${i.vox} does not fit this device; using the default`),i=It(St({},Hn.default),{source:"fallback"}));let r=0;for(const f of[256,128,64,32])if(f<=i.localX&&f>=t.cs&&t.nx%f===0&&f<=o.maxComputeInvocationsPerWorkgroup&&f*t.cs*8<=o.maxComputeWorkgroupStorageSize){r=f;break}if(!r)throw new Error(`webgpu-native: no moments workgroup fits ${t.cs} channels on this device`);return It(St({},i),{momLX:r,vendor:n||"unknown"})}const Ut=256;function Bo(e){if(typeof Float16Array!="undefined")return new Uint16Array(new Float16Array(e).buffer);const t=new Uint16Array(e.length),n=new Float32Array(1),o=new Uint32Array(n.buffer);for(let s=0;s<e.length;s++){n[0]=e[s];const i=o[0],r=i>>>16&32768,a=i>>>23&255,f=i&8388607;if(a===255){t[s]=r|31744|(f?512:0);continue}const l=a-127+15;if(l>=31){t[s]=r|31744;continue}if(l<=0){if(l<-10){t[s]=r;continue}const d=f|8388608,u=14-l;let p=d>>>u;const m=d&(1<<u)-1,y=1<<u-1;(m>y||m===y&&p&1)&&p++,t[s]=r|p;continue}let c=l<<10|f>>>13;const g=f&8191;(g>4096||g===4096&&c&1)&&c++,t[s]=r|c}return t}function hr(e,t){var n;return t.quantize8Bit?"8-bit quantized V4 runner requested":(n=e.features)!=null&&n.has("shader-f16")?t.outputType==="probability"?"probability output (CAT-lite) is not ported yet":t.enableTTA?"test-time augmentation uses the tinygrad TTA runner":t.forceFP32?"model entry forces fp32":t.webgpu_safetensor?lo(t)?null:"no descriptor in webgl2_runners/descriptors.js":"no safetensors weights":"device lacks shader-f16"}function yr(e,t){const n=e.nx*e.ny*e.nz,o=e.nx/t*e.ny*e.nz;return 2*n*e.cs*2+n*2+2*n*4+(o+1)*e.cs*2*4}const Co=new WeakMap;function vr(e,t,n){return ge(this,null,function*(){let o=Co.get(e);o||(o=new Map,Co.set(e,o));const s=`${t.chan}|${t.cs}|${t.nclass}|${t.norm}|${t.affine}|${t.convBias}|${t.clsBias}|${t.activation}|${t.eps}|${n.localX}x${n.vox}x${n.momLX}`;let i=o.get(s);return i||(i=ge(null,null,function*(){const r=e.createShaderModule({code:_r(t,n)}),a=["read-only-storage","storage","read-only-storage","uniform","storage","storage","read-only-storage","read-only-storage"],f=e.createBindGroupLayout({entries:a.map((d,u)=>({binding:u,visibility:GPUShaderStage.COMPUTE,buffer:{type:d}}))}),l=e.createPipelineLayout({bindGroupLayouts:[f]}),c=["conv","classify",...t.norm==="gn"?["moments","moments_finish","norm"]:[]],g=Object.fromEntries(yield Promise.all(c.map(d=>ge(null,null,function*(){return[d,yield e.createComputePipelineAsync({layout:l,compute:{module:r,entryPoint:d}})]}))));return{bgl:f,pipelines:g}}).catch(r=>{throw o.delete(s),r}),o.set(s,i)),i})}function xr(e,t,n,o){return ge(this,null,function*(){const s=lo(o);if(!s)throw new Error(`webgpu-native: no descriptor for ${o.path}`);const i=t instanceof Uint8Array?t:new Uint8Array(t),r=ur(Xo(jo(i.buffer.slice(i.byteOffset,i.byteOffset+i.byteLength))),o.classifierBias),a=Yo(r,{nx:Ut,ny:Ut,nz:Ut,activation:s.activation,dilations:s.dilations});if(!a.nclass)throw new Error("webgpu-native: model has no classifier");if(a.convBias&&a.affine)throw new Error("webgpu-native: conv bias together with a GroupNorm affine is not supported");const f=wr(e,a),l=Ut*Ut*Ut,c=l*a.cs*2,g=e.limits;if(c>g.maxStorageBufferBindingSize||c>g.maxBufferSize)throw new Error(`webgpu-native: a ${c>>>20} MiB activation exceeds this device's buffer limits`);console.log(`[WebGPU-native] ${s.name}: ${a.chan}ch (stride ${a.cs}) ${a.nclass}cls norm=${a.norm} affine=${a.affine} act=${a.activation} | preset ${f.localX}x${f.vox} (moments ${f.momLX}, ${f.source}) | ~${Math.round(yr(a,f.momLX)/1048576)} MiB`);const d=cr(r,a),{layers:u,clsFloat:p,clsBiasFloat:m}=d.offsets;e.pushErrorScope("validation"),e.pushErrorScope("out-of-memory");let y=2;try{const{bgl:k,pipelines:_}=yield vr(e,a,f),w=(O,j)=>e.createBuffer({size:O,usage:j}),h=GPUBufferUsage.STORAGE,$=Ut/f.momLX*Ut*Ut,b=Bo(d.data),P=w(l*2,h|GPUBufferUsage.COPY_DST),C=w(c,h),v=w(c,h),x=w(Math.ceil(b.byteLength/16)*16,h|GPUBufferUsage.COPY_DST),G=w(($+1)*a.cs*2*4,h),M=w(l*4,h|GPUBufferUsage.COPY_SRC),A=w(l*4,GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST);e.queue.writeBuffer(x,0,b);const T=(O,j,he)=>{const Pe=w(32,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST);return e.queue.writeBuffer(Pe,0,he),e.createBindGroup({layout:k,entries:[{binding:0,resource:{buffer:O}},{binding:1,resource:{buffer:j}},{binding:2,resource:{buffer:x}},{binding:3,resource:{buffer:Pe}},{binding:4,resource:{buffer:G}},{binding:5,resource:{buffer:M}},{binding:6,resource:{buffer:x}},{binding:7,resource:{buffer:O}}]})},U=O=>{const j=new Uint32Array(8);return j[0]=O.dilation|0,j[1]=O.weightOff>>>0,j[2]=O.affineOff>>>0,j[3]=O.biasOff>>>0,j[4]=O.inChannels>>>0,j[5]=O.inStride>>>0,j[6]=$,j},z=[];let N=P,L=C;u.forEach((O,j)=>{const he=j===0;z.push(T(N,L,U({dilation:a.dilations[j],weightOff:O.wq*4,affineOff:O.affQ!==void 0?O.affQ*4:0,biasOff:O.biasQ!==void 0?O.biasQ*4:O.affBiasQ!==void 0?O.affBiasQ*4:0,inChannels:he?1:a.cs,inStride:he?1:a.cs}))),N=L,L=L===C?v:C});const Z=T(N,L,U({weightOff:p,biasOff:m>=0?m:0}));y=0;const te=yield e.popErrorScope(),R=yield e.popErrorScope();if(te||R)throw new Error(`webgpu-native setup failed: ${(te||R).message}`);const q=Ut/(f.localX*f.vox),D=Ut/f.localX,oe=Ut/f.momLX;return function(j){return ge(this,null,function*(){if(j.length!==l)throw new Error(`webgpu-native: input has ${j.length} voxels, expected ${l}`);e.pushErrorScope("validation"),e.queue.writeBuffer(P,0,Bo(j));for(const Q of z){const ee=e.createCommandEncoder(),W=ee.beginComputePass();W.setBindGroup(0,Q),W.setPipeline(_.conv),W.dispatchWorkgroups(q,Ut,Ut),a.norm==="gn"&&(W.setPipeline(_.moments),W.dispatchWorkgroups(oe,Ut,Ut),W.setPipeline(_.moments_finish),W.dispatchWorkgroups(1,1,1),W.setPipeline(_.norm),W.dispatchWorkgroups(D,Ut,Ut)),W.end(),e.queue.submit([ee.finish()])}const he=e.createCommandEncoder(),Pe=he.beginComputePass();Pe.setBindGroup(0,Z),Pe.setPipeline(_.classify),Pe.dispatchWorkgroups(D,Ut,Ut),Pe.end(),he.copyBufferToBuffer(M,0,A,0,l*4),e.queue.submit([he.finish()]),yield A.mapAsync(GPUMapMode.READ);const Ce=new Float32Array(new Uint32Array(A.getMappedRange()));A.unmap();const ye=yield e.popErrorScope();if(ye)throw new Error(`webgpu-native inference failed: ${ye.message}`);return[Ce]})}}finally{for(;y-- >0;)yield e.popErrorScope().catch(()=>{})}})}const $r={grayMatter:[2,6,7,8,9,10,14,15,16,17],whiteMatter:[1,5],csf:[3,4,11,12]};function kn(e,t,n,o,s){var r;const i=Number((r=e[t])!=null?r:n);if(!Number.isFinite(i)||i<o||i>s)throw new Error(`${t} must be between ${o} and ${s}, got ${e[t]}`);return i}function jn(e,t,n){let o=0;for(const s of e||[]){if(!Number.isInteger(s)||s<0||s>=t||s>=32)throw new Error(`Invalid ${n} tissue label ${s} for ${t} classes`);o=(o|1<<s)>>>0}return o}function Sr(e,t){if(!Number.isInteger(t)||t<2||t>32)throw new Error(`Native WebGL2 grouped probabilities require 2..32 classes, got ${t}`);const n=St(St({},$r),e.probabilityGroups||{});return{temperature:kn(e,"softmaxTemperature",1,1e-6,1e6),supportTemperature:kn(e,"brainSupportTemperature",1,1e-6,1e6),supportPower:kn(e,"brainSupportPower",1,1e-6,1e6),sigma:kn(e,"partialVolumeSigma",0,0,2),grayMask:jn(n.grayMatter,t,"gray-matter"),whiteMask:jn(n.whiteMatter,t,"white-matter"),csfMask:jn(n.csf,t,"CSF")}}function Xn(e,t,n,o,s,i){const[r,a,f]=n,l=r*a,c=s.length-1>>1;for(let g=0;g<f;g++)for(let d=0;d<a;d++)for(let u=0;u<r;u++){const p=g*l+d*r+u,m=o===1?u:o===r?d:g,y=o===1?r:o===r?a:f;let k=0;for(let _=-c;_<=c;_++){const w=m+_;w<0||w>=y||(k+=s[_+c]*e[p+_*o])}t[p]=k/i}}function Pr(e,t,n,o){const[s,i,r]=n,a=s*i*r;if(!Array.isArray(e)||e.length!==3||e.some(u=>u.length!==a)||t.length!==a)throw new Error("Native WebGL2 tissue-prior dimensions do not match");const f=kn(o,"partialVolumeSigma",0,0,2),l=kn(o,"brainSupportPower",1,1e-6,1e6);let c=null,g=null,d=1;if(f>0){const u=Math.max(1,Math.round(3*f));g=new Float32Array(u*2+1),d=0;for(let p=-u;p<=u;p++){const m=Math.exp(-.5*p*p/(f*f));g[p+u]=m,d+=m}c=new Float32Array(a)}for(const u of e){let p=u;g&&(Xn(u,c,n,1,g,d),Xn(c,u,n,s,g,d),Xn(u,c,n,s*i,g,d),p=c);for(let m=0;m<a;m++){const y=Math.pow(Math.max(0,Math.min(1,t[m])),l);u[m]=Math.max(0,Math.min(1,p[m]*y))}}return e}const B=256,At=64,Xt=8,wt=At+2*Xt,pn=wt*4,Ve=B*64,Ln=B*B*2,Tn=9216,Ko=Tn*8,Zo=[1,3,5,7,13,19,31,19,13,7,5,3,1],qt=(e,t)=>Array.from({length:e},(n,o)=>t(o)).join(""),Qo=280,Jo=180,Yn=112;function es(e){var t;if(e!=null&&e.webgpuExecMode)return String(e.webgpuExecMode).toLowerCase();try{const n=new URLSearchParams(((t=globalThis.location)==null?void 0:t.search)||"").get("webgpuExec");if(n)return n.toLowerCase()}catch(n){}return""}function uo(e){var c;const t=(e==null?void 0:e.__adapterInfo)||(e==null?void 0:e.adapterInfo)||{},n=String(t.vendor||"").toLowerCase(),o=String(t.architecture||"").toLowerCase(),s=`${t.device||""} ${t.description||""}`,i=typeof navigator!="undefined"&&navigator.userAgent||"",r=typeof navigator!="undefined"&&(((c=navigator.userAgentData)==null?void 0:c.platform)||navigator.platform||"")||"",a=n==="apple"||/Mac|iPhone|iPad|iPod/i.test(`${r} ${i}`)&&!["intel","amd","nvidia","microsoft"].includes(n),f=!a&&(/Win/i.test(r)||/Windows/i.test(i)),l=f&&(n==="microsoft"||n==="intel"&&(/^gen-(9|11|12lp)/i.test(o)||/UHD Graphics|HD Graphics|Iris\(R\)\s*(Plus|Xe)|Pentium|Celeron/i.test(s)));return{vendor:n,arch:o,desc:s,isApple:a,isWindows:f,isWindowsSharedIgpu:l}}function ts(e,t){const n=es(t);if(n==="single"||n==="pipelined"||n==="paced"||n==="calibrate")return n;if(n==="chunked")return"paced";const o=uo(e);return o.isApple?"single":o.isWindows?e!=null&&e.__v4WinCalibrated?e.__v4WinFast?"pipelined":"paced":"calibrate":"pipelined"}function ns(e,t){const n=es(t);return n==="single"?!1:n==="paced"||n==="chunked"||n==="calibrate"?!0:n==="pipelined"?!1:uo(e).isWindows}function os(e,t,n){return(n==null?void 0:n.forceLowMem128)===!1?!1:uo(e).isWindowsSharedIgpu&&t.cs>=24&&t.cs%4===0}function vn(){return typeof requestAnimationFrame!="function"?new Promise(e=>setTimeout(e,0)):new Promise(e=>{let t=!1;const n=()=>{t||(t=!0,e())},o=setTimeout(n,16);requestAnimationFrame(()=>{clearTimeout(o),setTimeout(n,0)})})}function co(e,t,n){const o=e.isFull?Ve:e.mainStrips.length,s=e.isFull||!e.extStrips?0:e.extStrips.length,i=t+1<n?e.isFull?Ve:e.normStrips?e.normStrips.length:0:0,r=Math.max(16,Math.round(i*.12));return t===0?{convWork:Math.max(64,Math.round(o*.12)),normWork:r}:{convWork:o+s,normWork:r}}function ss(e,t){let n=0;for(let s=0;s<t;s++){const i=co(e.layers[s],s,t);n+=i.convWork+i.normWork}const o=e.clsSkipped?e.clsStrips.length:Ve;return n+=Math.max(64,Math.round(o*.2)),Math.max(1,n)}const rs=new Float32Array(1),kr=new Uint32Array(rs.buffer);function oo(e){rs[0]=e;const t=kr[0],n=t>>>16&32768,o=t>>>23&255;let s=t&8388607;if(o===255)return n|31744|(s?512:0);let i=o-127+15;return i<=0?i<-10?n:(s=(s|8388608)>>>1-i,n|s+4096>>>13):i>=31?n|31744:n|Math.min(31744,(i<<10)+(s+4096>>>13))}function Mr(e){const t=new Uint16Array(e.length);for(let n=0;n<e.length;n++)t[n]=oo(e[n]);return t}const ln=new Map,Ar=12,as=new WeakMap,zr=new WeakMap;function Br(e){let t=2166136261,n=2654435769;const o=e.byteLength>>>2;if((e.byteOffset&3)===0){const s=new Uint32Array(e.buffer,e.byteOffset,o);for(let i=0;i<s.length;i++){const r=s[i];t=Math.imul(t^r,16777619)>>>0,n=Math.imul(n^(r<<13|r>>>19),2246822507)>>>0}}else for(let s=0;s<o*4;s+=4){const i=e[s]|e[s+1]<<8|e[s+2]<<16|e[s+3]<<24;t=Math.imul(t^i,16777619)>>>0,n=Math.imul(n^(i<<13|i>>>19),2246822507)>>>0}for(let s=o*4;s<e.byteLength;s++)t=Math.imul(t^e[s],16777619)>>>0;return`${e.byteLength}_${t.toString(16)}_${n.toString(16)}`}function Cr(e,t,n,o){const s=o!=null&&o.classifierBias?JSON.stringify(o.classifierBias):"",i=`${Br(e)}|${n.chan}|${n.cs}|${n.nclass}|${n.norm}|${n.eps}|${s}`;if(ln.has(i)){const a=ln.get(i);return ln.delete(i),ln.set(i,a),a}const r=Wr(t,n);if(ln.size>=Ar){const a=ln.keys().next().value;ln.delete(a)}return ln.set(i,r),r}function fo(e,t){let n=e.get(t);return n||(n=new Map,e.set(t,n)),n}function jt(e,t,n){let o=e.get(t);return o||(o=n().catch(s=>{throw e.delete(t),s}),e.set(t,o)),o}function En(e,t){let n=0;return{alloc:(s,i)=>{const r=Math.max(16,Math.ceil(s/16)*16),a=e.createBuffer({size:r,usage:i});return t.push(a),n+=r,a},getBytes:()=>n,resetBytes:()=>{n=0}}}const rn=new WeakMap;function xn(e){const t=e?rn.get(e):null;if(t){rn.delete(e),t.inUse=!1;for(const n of t.buffers)n.destroy();t.buffers.length=0}}function is(e,t,n){const o=rn.get(e);if(o){if(o.key===t&&!o.inUse)return o.inUse=!0,o;if(o.inUse){const r=n();return It(St({key:t},r),{inUse:!0,pooled:!1})}rn.delete(e);for(const r of o.buffers)r.destroy();o.buffers.length=0}const s=n(),i=It(St({key:t},s),{inUse:!0,pooled:!0});return rn.set(e,i),i}function Ot(e,t,n){return e.createShaderModule({label:t,code:n})}function po(e,t,n,o,s){return ge(this,null,function*(){const i=e.createBindGroupLayout({entries:s.map((r,a)=>typeof r=="string"?{binding:a,visibility:GPUShaderStage.COMPUTE,buffer:{type:r}}:{binding:a,visibility:GPUShaderStage.COMPUTE,buffer:r})});try{const r=yield e.createComputePipelineAsync({label:t,layout:e.createPipelineLayout({bindGroupLayouts:[i]}),compute:{module:n,entryPoint:o}});return{bgl:i,pipe:r}}catch(r){if(n!=null&&n.getCompilationInfo){const a=yield n.getCompilationInfo().catch(()=>null),f=a?a.messages.filter(l=>l.type==="error"):[];if(f.length)throw new Error(`meshnet_fast_v4 [${t}] WGSL error: `+f.map(l=>`L${l.lineNum}:${l.linePos} ${l.message}`).join(" | "))}throw r}})}function so(e,t){const n=t?`enable f16;
`:"",o=t?"f16":"f32",s=`vec4<${o}>`;return e?`${n}
@group(0) @binding(0) var<storage, read> raw_u32 : array<u32>;
@group(0) @binding(1) var<storage, read_write> inp_4 : array<${s}>;
@group(0) @binding(2) var<uniform> lut : array<vec4<f32>, 64>;

var<workgroup> sh : array<f32, 32u * 33u>;

@compute @workgroup_size(8, 8, 1)
fn main(@builtin(local_invocation_id) lid : vec3<u32>,
        @builtin(workgroup_id) wid : vec3<u32>) {
  let t = lid.y * 8u + lid.x;
  let X0 = wid.x * 32u;
  let Y = wid.y;
  let Z0 = wid.z * 32u;

  let z4 = t & 7u;
  let xOff = t >> 3u;
  let zBase = z4 * 4u;
  for (var s : u32 = 0u; s < 4u; s = s + 1u) {
    let xLoc = s * 8u + xOff;
    let w = raw_u32[((X0 + xLoc) * 256u + Y) * 64u + wid.z * 8u + z4];
    let b0 = w & 0xffu;
    let b1 = (w >> 8u) & 0xffu;
    let b2 = (w >> 16u) & 0xffu;
    let b3 = (w >> 24u) & 0xffu;
    sh[(zBase + 0u) * 33u + xLoc] = lut[b0 >> 2u][b0 & 3u];
    sh[(zBase + 1u) * 33u + xLoc] = lut[b1 >> 2u][b1 & 3u];
    sh[(zBase + 2u) * 33u + xLoc] = lut[b2 >> 2u][b2 & 3u];
    sh[(zBase + 3u) * 33u + xLoc] = lut[b3 >> 2u][b3 & 3u];
  }
  workgroupBarrier();

  let x4Loc = t & 7u;
  let zOff = t >> 3u;
  let xBase = x4Loc * 4u;
  let dstX4 = ${Xt}u + wid.x * 8u + x4Loc;
  for (var s : u32 = 0u; s < 4u; s = s + 1u) {
    let zLoc = s * 8u + zOff;
    let r = zLoc * 33u + xBase;
    inp_4[((Z0 + zLoc) * 256u + Y) * ${wt}u + dstX4] =
      ${s}(${o}(sh[r]), ${o}(sh[r + 1u]), ${o}(sh[r + 2u]), ${o}(sh[r + 3u]));
  }
}`:`${n}
@group(0) @binding(0) var<storage, read> raw_f32 : array<f32>;
@group(0) @binding(1) var<storage, read_write> inp_4 : array<${s}>;
@group(0) @binding(2) var<uniform> params : vec4<f32>;

var<workgroup> sh : array<f32, 32u * 33u>;

@compute @workgroup_size(8, 8, 1)
fn main(@builtin(local_invocation_id) lid : vec3<u32>,
        @builtin(workgroup_id) wid : vec3<u32>) {
  let t = lid.y * 8u + lid.x;
  let X0 = wid.x * 32u;
  let Y = wid.y;
  let Z0 = wid.z * 32u;

  let zLoc = t & 31u;
  let xOff = t >> 5u;
  for (var s : u32 = 0u; s < 16u; s = s + 1u) {
    let xLoc = s * 2u + xOff;
    let v = raw_f32[((X0 + xLoc) * 256u + Y) * 256u + (Z0 + zLoc)];
    sh[zLoc * 33u + xLoc] = select((v - params.x) / params.y, 0.0, v == params.x);
  }
  workgroupBarrier();

  let x4Loc = t & 7u;
  let zOff = t >> 3u;
  let xBase = x4Loc * 4u;
  let dstX4 = ${Xt}u + wid.x * 8u + x4Loc;
  for (var s : u32 = 0u; s < 4u; s = s + 1u) {
    let zl = s * 8u + zOff;
    let r = zl * 33u + xBase;
    inp_4[((Z0 + zl) * 256u + Y) * ${wt}u + dstX4] =
      ${s}(${o}(sh[r]), ${o}(sh[r + 1u]), ${o}(sh[r + 2u]), ${o}(sh[r + 3u]));
  }
}`}function ls(){return`
@group(0) @binding(0) var<storage, read> src_u32 : array<u32>;
@group(0) @binding(1) var<storage, read_write> dst_u32 : array<u32>;

var<workgroup> sh : array<u32, 32u * 33u>;

@compute @workgroup_size(8, 8, 1)
fn main(@builtin(local_invocation_id) lid : vec3<u32>,
        @builtin(workgroup_id) wid : vec3<u32>) {
  let t = lid.y * 8u + lid.x;
  let X0 = wid.x * 32u;
  let Y = wid.y;
  let Z0 = wid.z * 32u;

  let x4Loc = t & 7u;
  let zOff = t >> 3u;
  let xBase = x4Loc * 4u;
  for (var s : u32 = 0u; s < 4u; s = s + 1u) {
    let zLoc = s * 8u + zOff;
    let w = src_u32[((Z0 + zLoc) * 256u + Y) * 64u + wid.x * 8u + x4Loc];
    let r = zLoc * 33u + xBase;
    sh[r + 0u] = w & 0xffu;
    sh[r + 1u] = (w >> 8u) & 0xffu;
    sh[r + 2u] = (w >> 16u) & 0xffu;
    sh[r + 3u] = (w >> 24u) & 0xffu;
  }
  workgroupBarrier();

  let z4Loc = t & 7u;
  let xOff = t >> 3u;
  let zBase = z4Loc * 4u;
  for (var s : u32 = 0u; s < 4u; s = s + 1u) {
    let xLoc = s * 8u + xOff;
    let b0 = sh[(zBase + 0u) * 33u + xLoc];
    let b1 = sh[(zBase + 1u) * 33u + xLoc];
    let b2 = sh[(zBase + 2u) * 33u + xLoc];
    let b3 = sh[(zBase + 3u) * 33u + xLoc];
    dst_u32[((X0 + xLoc) * 256u + Y) * 64u + wid.z * 8u + z4Loc] =
      b0 | (b1 << 8u) | (b2 << 16u) | (b3 << 24u);
  }
}`}function Fr(){return`
@group(0) @binding(0) var<storage, read> src_f32 : array<f32>;
@group(0) @binding(1) var<storage, read_write> dst_f32 : array<f32>;

var<workgroup> sh : array<f32, 32u * 33u>;

@compute @workgroup_size(8, 8, 1)
fn main(@builtin(local_invocation_id) lid : vec3<u32>,
        @builtin(workgroup_id) wid : vec3<u32>) {
  let t = lid.y * 8u + lid.x;
  let X0 = wid.x * 32u;
  let Y = wid.y;
  let Z0 = wid.z * 32u;

  let xLoc = t & 31u;
  let zOff = t >> 5u;
  for (var s : u32 = 0u; s < 16u; s = s + 1u) {
    let zLoc = s * 2u + zOff;
    sh[zLoc * 33u + xLoc] = src_f32[((Z0 + zLoc) * 256u + Y) * 256u + (X0 + xLoc)];
  }
  workgroupBarrier();

  let zLoc = t & 31u;
  let xOff = t >> 5u;
  for (var s : u32 = 0u; s < 16u; s = s + 1u) {
    let xl = s * 2u + xOff;
    dst_f32[((X0 + xl) * 256u + Y) * 256u + (Z0 + zLoc)] = sh[zLoc * 33u + xl];
  }
}`}function Ur(){return`
@group(0) @binding(0) var<storage, read> packedSrc : array<u32>;
@group(0) @binding(1) var<storage, read_write> outA : array<f32>;
@group(0) @binding(2) var<storage, read_write> outB : array<f32>;

@compute @workgroup_size(256, 1, 1)
fn main(@builtin(local_invocation_id) lid : vec3<u32>,
        @builtin(workgroup_id) wid : vec3<u32>) {
  let idx = wid.y * 65536u + wid.x * 256u + lid.x;
  let w = packedSrc[idx];
  let inv = 1.0 / 65535.0;
  outA[idx] = f32(w & 0xffffu) * inv;
  outB[idx] = f32(w >> 16u) * inv;
}`}function Fo(){return`
struct BlurParams {
  axis : u32,
  radius : u32,
  weightSum : f32,
  supPow : f32,
  k : array<vec4<f32>, 8>,
};
@group(0) @binding(0) var<storage, read> src : array<f32>;
@group(0) @binding(1) var<storage, read_write> dst : array<f32>;
@group(0) @binding(2) var<storage, read> sup : array<f32>;
@group(0) @binding(3) var<uniform> p : BlurParams;

fn blurSample(idx : u32, x : u32, y : u32, z : u32) -> f32 {
  var coord : i32 = i32(x);
  var stride : i32 = 1;
  if (p.axis == 1u) {
    coord = i32(y);
    stride = 256;
  } else if (p.axis == 2u) {
    coord = i32(z);
    stride = 65536;
  }
  let rad = i32(p.radius);
  var sum : f32 = 0.0;
  for (var o : i32 = -rad; o <= rad; o = o + 1) {
    let c = coord + o;
    if (c >= 0 && c < 256) {
      let kIdx = u32(o + rad);
      let w = p.k[kIdx >> 2u][kIdx & 3u];
      sum = sum + src[u32(i32(idx) + o * stride)] * w;
    }
  }
  return sum / p.weightSum;
}

@compute @workgroup_size(64, 4, 1)
fn blur_axis(@builtin(local_invocation_id) lid : vec3<u32>,
             @builtin(workgroup_id) wid : vec3<u32>) {
  let x = wid.x * 64u + lid.x;
  let y = wid.y * 4u + lid.y;
  let z = wid.z;
  let idx = (z * 256u + y) * 256u + x;
  dst[idx] = blurSample(idx, x, y, z);
}

@compute @workgroup_size(64, 4, 1)
fn blur_z_gate(@builtin(local_invocation_id) lid : vec3<u32>,
               @builtin(workgroup_id) wid : vec3<u32>) {
  let x = wid.x * 64u + lid.x;
  let y = wid.y * 4u + lid.y;
  let z = wid.z;
  let idx = (z * 256u + y) * 256u + x;
  let blurred = blurSample(idx, x, y, z);
  let sv = clamp(sup[idx], 0.0, 1.0);
  var gate : f32 = 0.0;
  if (sv > 0.0) {
    gate = select(pow(sv, p.supPow), sv, p.supPow == 1.0);
  }
  dst[idx] = clamp(blurred * gate, 0.0, 1.0);
}`}function sn(e,t,n,o,s){return ge(this,null,function*(){const i=fo(zr,e);let r=i.get(t);return r||(r=ge(null,null,function*(){const a=Ot(e,t,n());return po(e,t,a,o,s)}).catch(a=>{throw i.delete(t),a}),i.set(t,r)),r})}function Uo(e,t,n,o,s){t.fill(0);const i=B*B*B;if(!(s&&e[0]===o&&e[i-1]===o))return{hasBgSkip:!1};if(n.fill(0),(e instanceof Uint8Array||e instanceof Uint8ClampedArray)&&(e.byteOffset&3)===0&&Number.isInteger(o)&&o>=0&&o<=255){const f=new Uint32Array(e.buffer,e.byteOffset,i>>>2),l=new Uint32Array(n.buffer,n.byteOffset,B*B>>>2),c=(o&255)*16843009>>>0;let g=0;for(let d=0;d<B;d++)for(let u=0;u<16384;u++)l[u]|=f[g++]^c}else{let f=0;const l=B*B;for(let c=0;c<B;c++)for(let g=0;g<l;g++,f++)e[f]!==o&&(n[g]=1)}let a=0;for(let f=0;f<B;f++){const l=f*B;for(let c=0;c<B;c++)n[l+c]!==0&&(t[c*B+f]=1,a++)}return a===0||a>=6e4?{hasBgSkip:!1}:{hasBgSkip:!0}}function us(e){return e?`${e.grayMask}_${e.whiteMask}_${e.csfMask}_${e.temperature}_${e.supportTemperature}`:"seg"}function cs(l,c,g,d,u,p,m,y){return ge(this,arguments,function*(e,t,n,o,s,i,r,a,{includeCls:f=!0}={}){var X;const k=fo(as,e),_=o?1:0,w=s?1:0,h=r.useUniformWeff?1:0,$=(V,se,Le,ze)=>po(e,V,se,Le,ze),b=["storage","storage","storage","storage"],P=["read-only-storage","storage","storage","storage","storage","storage","read-only-storage","storage","uniform","uniform","uniform"],C=["read-only-storage","read-only-storage","storage","storage","read-only-storage","uniform"],v=["storage","storage","storage","storage","read-only-storage","read-only-storage",{type:"uniform",hasDynamicOffset:!0,minBindingSize:32}],x=["storage","storage","storage","storage","read-only-storage","read-only-storage","read-only-storage","uniform"],G=["read-only-storage","read-only-storage","read-only-storage","read-only-storage","storage","storage",r.useUniformWeff?"uniform":"read-only-storage","read-only-storage",{type:"uniform",hasDynamicOffset:!0,minBindingSize:32}],M=["read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","storage","uniform","uniform","uniform"],A=`128|init|${t.cs}|${t.activation}|${_}`,T=`128|conv0|${t.cs}|${t.dilations[0]}|${t.norm}|${_}|${w}`,U=`128|prep|${t.chan}|${t.cs}|${t.activation}|${t.norm}|${_}`,z=`128|flush|${t.cs}|${_}`,N=`128|norm|${t.cs}|${t.activation}|${t.norm}|${_}`,L=`128|cls|${t.chan}|${t.cs}|${t.nclass}|${(X=n==null?void 0:n.clsK4)!=null?X:0}|${r.numConvs}|${t.activation}|${t.norm}|${_}|${us(i)}`,Z=jt(k,A,()=>{const V=Ot(e,"init_act8_128",r.initActWgsl());return $("init_act8_128",V,"main",b)}),te=jt(k,T,()=>ge(null,null,function*(){const V=Ot(e,"conv0_128",r.conv0Wgsl()),se=yield Promise.all(r.halfPass0?[$("conv0_128_lo",V,"main_lo",P),$("conv0_128_hi",V,"main_hi",P),$("conv0_128_bg_lo",V,"main_bg_lo",P),$("conv0_128_bg_hi",V,"main_bg_hi",P)]:[$("conv0_128",V,"main",P),$("conv0_128_bg",V,"main_bg",P)]);return r.halfPass0?{lo:se[0],hi:se[1],bgLo:se[2],bgHi:se[3]}:{main:se[0],bg:se[1]}})),R=jt(k,U,()=>ge(null,null,function*(){const V=Ot(e,"prep_128",r.prepWgsl()),[se,Le]=yield Promise.all([$("moments_finish_128",V,"moments_finish",C),$("prep_weff_128",V,"prep_weff",C)]);return{pMomFin:se,pPrepW:Le}})),q=jt(k,z,()=>{const V=Ot(e,"flush_128",r.flushWgsl());return $("flush_stage_128",V,"main",v)}),D=jt(k,N,()=>ge(null,null,function*(){const V=Ot(e,"norm_128",r.normWgsl()),[se,Le]=yield Promise.all([$("norm_quant8_128",V,"main",x),$("norm_halo_fill_128",V,"norm_halo_fill",x)]);return{pNorm:se,pNormHalo:Le}})),oe=f?jt(k,L,()=>{const V=Ot(e,"cls_128",r.clsWgsl());return $("classify_v4_128",V,"main",M)}):Promise.resolve(null),O=a.map(V=>jt(k,`128|conv|${t.chan}|${t.cs}|${V}|${t.activation}|${t.norm}|${h}|${_}|${w}`,()=>ge(null,null,function*(){const se=Ot(e,`conv_128_d${V}`,r.getConvWgsl(V));if(r.halfPassConv){const[me,Y,Fe,H,qe,tt]=yield Promise.all([$(`conv_128_d${V}_lo`,se,"main_lo",G),$(`conv_128_d${V}_hi`,se,"main_hi",G),$(`conv_128_d${V}_ext_lo`,se,"main_ext_lo",G),$(`conv_128_d${V}_ext_hi`,se,"main_ext_hi",G),$(`conv_128_d${V}_bg_lo`,se,"main_bg_lo",G),$(`conv_128_d${V}_bg_hi`,se,"main_bg_hi",G)]);return{lo:me,hi:Y,extLo:Fe,extHi:H,bgLo:qe,bgHi:tt}}const[Le,ze,le]=yield Promise.all([$(`conv_128_d${V}`,se,"main",G),$(`conv_128_d${V}_ext`,se,"main_ext",G),$(`conv_128_d${V}_bg`,se,"main_bg",G)]);return{main:Le,ext:ze,bg:le}}))),[j,he,Pe,Ce,ye,Q,...ee]=yield Promise.all([Z,te,R,q,D,oe,...O]),W={};return a.forEach((V,se)=>{W[V]=ee[se]}),{pInit:j,pMomFin:Pe.pMomFin,pPrepW:Pe.pPrepW,pFlush:Ce,pNorm:ye.pNorm,pNormHalo:ye.pNormHalo,pCls:Q,pConv0:he,convPipes:W}})}function fs(c,g,d,u,p,m,y,k,_){return ge(this,arguments,function*(e,t,n,o,s,i,r,a,f,{includeCls:l=!0}={}){var X;const w=fo(as,e),h=o?1:0,$=s?1:0,b=i?1:0,P=a.useUniformWeff?1:0,C=a.chunkableStd?1:0,v=(V,se,Le,ze)=>po(e,V,se,Le,ze),x=["storage","storage"],G=["read-only-storage","storage","storage","read-only-storage","read-only-storage","storage","storage","read-only-storage","uniform"],M=["read-only-storage","read-only-storage","storage","storage","storage","storage","read-only-storage","uniform"],A=["storage","storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","uniform"],T=["read-only-storage","read-only-storage","storage","storage","storage","storage",a.useUniformWeff?"uniform":"read-only-storage","read-only-storage",a.chunkableStd?{type:"uniform",hasDynamicOffset:!0,minBindingSize:32}:"uniform"],U=["read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","storage","read-only-storage","uniform"],z=`std|init|${t.cs}|${t.activation}|${h}|${b}`,N=`std|conv0|${t.cs}|${t.dilations[0]}|${t.norm}|${h}|${$}|${b}`,L=`std|prep|${t.chan}|${t.cs}|${t.activation}|${t.norm}|${h}|${b}`,Z=`std|norm|${t.cs}|${t.activation}|${t.norm}|${h}|${b}`,te=`std|cls|${t.chan}|${t.cs}|${t.nclass}|${(X=n==null?void 0:n.clsK4)!=null?X:0}|${t.activation}|${t.norm}|${h}|${b}|${us(r)}`,R=jt(w,z,()=>{const V=Ot(e,"init_act8",a.initActWgsl());return v("init_act8",V,"main",x)}),q=jt(w,N,()=>ge(null,null,function*(){const V=Ot(e,"conv0",a.conv0Wgsl()),se=yield Promise.all(a.halfPass0?[v("conv0_lo",V,"main_lo",G),v("conv0_hi",V,"main_hi",G),v("conv0_bg_lo",V,"main_bg_lo",G),v("conv0_bg_hi",V,"main_bg_hi",G)]:[v("conv0",V,"main",G),v("conv0_bg",V,"main_bg",G)]);return a.halfPass0?{lo:se[0],hi:se[1],bgLo:se[2],bgHi:se[3]}:{main:se[0],bg:se[1]}})),D=jt(w,L,()=>ge(null,null,function*(){const V=Ot(e,"prep",a.prepWgsl()),[se,Le]=yield Promise.all([v("moments_finish",V,"moments_finish",M),v("prep_weff",V,"prep_weff",M)]);return{pMomFin:se,pPrepW:Le}})),oe=jt(w,Z,()=>ge(null,null,function*(){const V=Ot(e,"norm",a.normWgsl()),[se,Le]=yield Promise.all([v("norm_quant8",V,"main",A),v("norm_halo_fill",V,"norm_halo_fill",A)]);return{pNorm:se,pNormHalo:Le}})),O=l?jt(w,te,()=>{const V=Ot(e,"cls",a.clsWgsl());return v("classify_v4",V,"main",U)}):Promise.resolve(null),j=f.map(V=>jt(w,`std|conv|${t.chan}|${t.cs}|${V}|${t.activation}|${t.norm}|${P}|${h}|${$}|${b}${C?"|chk1":""}`,()=>ge(null,null,function*(){const se=Ot(e,`conv_d${V}`,a.getConvWgsl(V));if(a.halfPassConv){const[le,me,Y,Fe]=yield Promise.all([v(`conv_d${V}_lo`,se,"main_lo",T),v(`conv_d${V}_hi`,se,"main_hi",T),v(`conv_d${V}_ext_lo`,se,"main_ext_lo",T),v(`conv_d${V}_ext_hi`,se,"main_ext_hi",T)]);return{lo:le,hi:me,extLo:Y,extHi:Fe}}const[Le,ze]=yield Promise.all([v(`conv_d${V}`,se,"main",T),v(`conv_d${V}_ext`,se,"main_ext",T)]);return{main:Le,ext:ze}}))),[he,Pe,Ce,ye,Q,...ee]=yield Promise.all([R,q,D,oe,O,...j]),W={};return f.forEach((V,se)=>{W[V]=ee[se]}),{pInit:he,pMomFin:Ce.pMomFin,pPrepW:Ce.pPrepW,pNorm:ye.pNorm,pNormHalo:ye.pNormHalo,pCls:Q,pConv0:Pe,convPipes:W}})}function Lo(e,t,n,o,s){n.fill(0);const i=s&&e[0]===0&&e[e.length-1]===0;let r=0,a=0;if(!i){if(o)for(let f=0;f<B;f++){const l=f*B*pn;for(let c=0;c<B;c++){let g=l+c*pn+32;for(let d=0;d<B;d++,a++,g++){const u=e[a];t[g]=u===0?0:oo(u)}}}else for(let f=0;f<B;f++){const l=f*B*pn;for(let c=0;c<B;c++){const g=f*B*B+c*B;t.set(e.subarray(g,g+B),l+c*pn+32)}}return{hasBgSkip:!1}}for(let f=0;f<B;f++){const l=f*B*pn;for(let c=0;c<B;c++){let g=!1,d=l+c*pn+32;for(let u=0;u<B;u++,a++,d++){const p=e[a];p!==0?(t[d]=o?oo(p):p,g=!0):t[d]=0}g&&(n[f*B+c]=1,r++)}}return r===0||r>=6e4?{hasBgSkip:!1}:{hasBgSkip:!0}}function Fn(e,t){const n=new Uint8Array(B*B);for(let o=0;o<B;o++){const s=o*B,i=o-t,r=o+t;for(let a=0;a<B;a++){if(!e[s+a])continue;const f=a-t,l=a+t;if(i>=0){const c=i*B;f>=0&&(n[c+f]=1),n[c+a]=1,l<B&&(n[c+l]=1)}if(f>=0&&(n[s+f]=1),n[s+a]=1,l<B&&(n[s+l]=1),r>=0&&r<B){const c=r*B;f>=0&&(n[c+f]=1),n[c+a]=1,l<B&&(n[c+l]=1)}}}return n}function Lr(e,t){const n=new Uint8Array(B*B),o=new Uint8Array(B*B),s=new Int32Array(B+1);for(let i=0;i<B;i++){const r=i*B;for(let a=0;a<B;a++)s[a+1]=s[a]+e[r+a];for(let a=0;a<B;a++)s[Math.min(B-1,a+t)+1]-s[Math.max(0,a-t)]>0&&(n[r+a]=1)}for(let i=0;i<B;i++){for(let r=0;r<B;r++)s[r+1]=s[r]+n[r*B+i];for(let r=0;r<B;r++)s[Math.min(B-1,r+t)+1]-s[Math.max(0,r-t)]>0&&(o[r*B+i]=1)}return o}function Kn(e){const t=new Uint8Array(Ve);for(let n=0;n<B;n++){const o=n*B,s=n*64;for(let i=0;i<64;i++){const r=o+(i<<2);e[r]|e[r+1]|e[r+2]|e[r+3]&&(t[s+i]=1)}}return t}function Rn(e){const t=new Uint8Array(B*B);for(let n=0;n<B;n++){const o=n*B,s=n*64;for(let i=0;i<64;i++)if(e[s+i]){const r=o+(i<<2);t[r]=1,t[r+1]=1,t[r+2]=1,t[r+3]=1}}return t}function qn(e){let t=0;for(let s=0;s<Ve;s++)t+=e[s];const n=new Uint32Array(t);let o=0;for(let s=0;s<B;s++){const i=s*64;for(let r=0;r<64;r++)e[i+r]&&(n[o++]=s<<8|r)}return n}function un(e){let t=0;for(let n=0;n<e.length;n++)t+=e[n];return t}function Wo(e){const t=new Uint8Array(Ve);if(e===1024)for(let n=0;n<32;n++)for(let o=0;o<32;o++){const s=n*8+(n*3+o*5&7),i=o*2+(n+o&1);t[s*64+i]=1}else if(e===512)for(let n=0;n<32;n++)for(let o=0;o<16;o++){const s=n*8+(n*3+o*5&7),i=o*4+(n+o*3&3);t[s*64+i]=1}else for(let n=0;n<16;n++)for(let o=0;o<16;o++){const s=n*16+(n*7+o*3&15),i=o*4+(n+o*3&3);t[s*64+i]=1}return t}function ps(e,t,n,o){const s=n.length,i=()=>({isFull:!0,mode:"full",writtenMask:null,computedMask:null,mainStrips:null,extStrips:null,nMomExt:0,normStrips:null,haloRows:null,bgStrip:null,extWeight:0});if(!o||!t.hasBgSkip)return{clsSkipped:!1,clsStrips:null,layers:Array.from({length:s},i)};const r=Kn(Lr(e,3)),a=un(r)<15800,f=a?qn(r):null,l=new Array(s);let c=null;for(let _=0;_<s;_++){const w=n[_],h=Fn(_===0?e:c,w);if(_>0)for(let b=0;b<B;b++){const P=b<w||b>=B-w,C=b*B;for(let v=0;v<B;v++)(P||v<w||v>=B-w)&&(h[C+v]=1)}c=h;const $=new Uint8Array(Ve);for(let b=0;b<B;b++){const P=b*B,C=b*64;for(let v=0;v<64;v++){const x=P+(v<<2);h[x]|h[x+1]|h[x+2]|h[x+3]||($[C+v]=1)}}l[_]=$}const g=new Array(s);g[s-1]=r;for(let _=s-2;_>=0;_--)g[_]=Kn(Fn(Rn(g[_+1]),n[_+1]));const d=a&&s>=4&&n[s-1]<=2&&n[s-2]<=4&&n[s-3]<=6,u=Math.max(1,s-3),p=new Array(s).fill(null),m=new Array(s).fill(null),y=new Array(s).fill(null);if(d){const w=(Ve-un(g[s-1]))/Ve>=.52?256:512,h=1024,$=Wo(w),b=Wo(h),P=g[s-1],C=new Uint8Array(Ve);let v=0;for(let x=0;x<Ve;x++)$[x]&&!P[x]&&(C[x]=1,v++);if(v>0&&v<=Tn&&un(P)+v<=15360){p[s-1]=C,m[s-1]=new Uint8Array(Ve),y[s-1]=$;for(let x=s-2;x>=u;x--){const G=new Uint8Array(Ve),M=g[x+1],A=p[x+1];for(let R=0;R<Ve;R++)G[R]=M[R]|A[R];const T=Kn(Fn(Rn(G),n[x+1])),U=new Uint8Array(Ve),z=g[x];for(let R=0;R<Ve;R++)T[R]&&!z[R]&&(U[R]=1);const N=x===u?b:$,L=new Uint8Array(Ve);let Z=0,te=0;for(let R=0;R<Ve;R++)(U[R]||N[R])&&!z[R]&&(L[R]=1,Z++,N[R]&&te++);if(te===0||Z>Tn||un(z)+Z>15360){const R=x+1,q=g[R],D=m[R],oe=new Uint8Array(Ve);let O=0;for(let j=0;j<Ve;j++)(D[j]||b[j])&&!q[j]&&(oe[j]=1,O++);O<=Tn&&un(q)+O<=15360&&(p[R]=oe,y[R]=b);break}m[x]=U,p[x]=L,y[x]=N}}}const k=new Array(s);for(let _=0;_<s;_++){const w=un(l[_]),h=Ve-w,$=p[_]!==null,b=$?un(g[_])+un(p[_]):1/0;if(w>=512&&h<=b){const P=new Uint8Array(Ve);let C=-1;for(let M=0;M<Ve;M++)l[_][M]?C<0&&(C=M):P[M]=1;const v=P.slice();v[C]=1;const x={z:C>>>6,yWg:C&63,packed:C>>>6<<8|C&63},G=qn(P);k[_]={isFull:!1,mode:"rpure",writtenMask:P,computedMask:v,mainStrips:G,extStrips:_===0?null:new Uint32Array([x.packed]),nMomExt:_===0?0:1,normStrips:G,haloRows:null,bgStrip:x,extWeight:w}}else if($&&b<=15360){const P=g[_],C=p[_],v=m[_],x=y[_],G=qn(P),M=[],A=[];for(let L=0;L<B;L++){const Z=L*64;for(let te=0;te<64;te++){const R=Z+te;if(!C[R])continue;const q=L<<8|te;x[R]?M.push(q):A.push(q)}}const T=M.length;if(T===0){k[_]=i();continue}const U=new Uint32Array(M.length+A.length);U.set(M,0),U.set(A,M.length);const z=new Uint8Array(Ve),N=new Uint8Array(Ve);for(let L=0;L<Ve;L++)z[L]=P[L]|v[L],N[L]=P[L]|C[L];k[_]={isFull:!1,mode:"bwd",writtenMask:z,computedMask:N,mainStrips:G,extStrips:U,nMomExt:T,normStrips:_+1<s?qn(z):null,haloRows:null,bgStrip:null,extWeight:(Ve-G.length)/T}}else k[_]=i()}for(let _=s-2;_>=0;_--)k[_].mode==="bwd"&&k[_+1].mode!=="bwd"&&(k[_]=i());for(let _=0;_<s-1;_++){const w=k[_];if(w.mode!=="rpure")continue;const h=k[_+1],$=h.isFull?new Uint8Array(B*B).fill(1):Fn(Rn(h.computedMask),n[_+1]),b=Rn(w.writtenMask),P=[];for(let C=0;C<B;C++){const v=C*B;for(let x=0;x<B;x++)$[v+x]&&!b[v+x]&&P.push(C<<8|x)}P.length>0&&(w.haloRows=new Uint32Array(P))}return{clsSkipped:a,clsStrips:f,layers:k}}function Wr(e,t){const n=t.chan,o=t.cs,s=o/4,i=t.nclass,r=Math.ceil(i/4),{convs:a,affines:f,classifier:l}=e,c=a.length,g=27*s,d=9*o*3*s,u=o*r,p=(g+(c-1)*d+u)*4,m=new Float32Array(p),y=4*o,k=c*y,_=new Float32Array(k+r*4),w=(b,P,C)=>{if(t.norm!=="gn"||P>=n)return 1;const v=a[b],x=C*27,G=P*x;let M=0;for(let A=0;A<x;A++)M+=Math.abs(v.w[G+A]);return Math.max(M/16,1e-6)};for(let b=0;b<a[0].outC;b++){const P=w(0,b,a[0].inC),C=1/P;for(let v=0;v<27;v++)m[v*o+b]=a[0].w[b*27+v]*C;_[2*o+b]=t.eps/(P*P),a[0].bias&&(_[3*o+b]=a[0].bias[b])}for(let b=a[0].outC;b<o;b++)_[2*o+b]=t.eps;for(let b=1;b<c;b++){const P=a[b],C=(g+(b-1)*d)*4,v=b*y;for(let x=0;x<P.outC;x++){const G=w(b,x,P.inC),M=1/G,A=x>>>2,T=x&3;for(let U=0;U<9;U++)for(let z=0;z<P.inC;z++)for(let N=0;N<3;N++){const L=U*3+N,Z=C+(((U*o+z)*3+N)*s+A)*4+T;m[Z]=P.w[(x*P.inC+z)*27+L]*M}_[v+2*o+x]=t.eps/(G*G),P.bias&&(_[v+3*o+x]=P.bias[x])}for(let x=P.outC;x<o;x++)_[v+2*o+x]=t.eps}for(let b=0;b<c;b++){const P=b*y,C=f[b];for(let v=0;v<n;v++)t.norm==="gn"?(_[P+v]=C!=null&&C.scale?C.scale[v]:1,_[P+o+v]=C!=null&&C.bias?C.bias[v]:0):(_[P+v]=1,_[P+o+v]=0)}const h=g+(c-1)*d,$=h*4;for(let b=0;b<n;b++)for(let P=0;P<i;P++)m[$+b*r*4+P]=l.w[P*l.inC+b];for(let b=0;b<r*4;b++)_[k+b]=b<i?l.bias?l.bias[b]:0:-1e30;return{wF32:m,wF16:Mr(m),qmetaF32:_,w0Vec4s:g,hiddenVec4PerLayer:d,clsVec4Off:h,clsBiasOff:k,metaStride:y,clsK4:r}}function Mn(e){if(e==="gelu_tanh")return`fn act(x : f32) -> f32 {
  let u = clamp(0.7978845608028654 * (x + 0.044715 * x * x * x), -9.0, 9.0);
  return 0.5 * x * (1.0 + tanh(u));
}`;if(e==="relu")return"fn act(x : f32) -> f32 { return max(x, 0.0); }";if(e==="elu")return"fn act(x : f32) -> f32 { return select(exp(clamp(x, -20.0, 0.0)) - 1.0, x, x >= 0.0); }";throw new Error(`meshnet_fast_v4: unsupported activation '${e}'`)}function ms(e){return e==="gelu_tanh"?{uZeroInt:7,uZeroFloat:7/255,uZeroWord:117901063,sterbenzSub:"1.02734375h",zeroBin:7}:e==="relu"?{uZeroInt:0,uZeroFloat:0,uZeroWord:0,sterbenzSub:"1.0h",zeroBin:0}:{uZeroInt:32,uZeroFloat:32/255,uZeroWord:538976288,sterbenzSub:"1.125h",zeroBin:32}}function ds({chan:e,clsK4:t,nclass:n,V4:o,suf:s,readBiasStmt:i,biasExpr:r,probCfg:a}){const f=`    var acc0 = ${o}(0.0${s});
    var acc1 = ${o}(0.0${s});
    var acc2 = ${o}(0.0${s});
    var acc3 = ${o}(0.0${s});
    for (var c : u32 = 0u; c < ${e}u; c = c + 1u) {
      let wv = w16_4[w_cls + c * ${t}u + k4];
      let f = feat[c];
      acc0 = fma(f, ${o}(wv.x), acc0);
      acc1 = fma(f, ${o}(wv.y), acc1);
      acc2 = fma(f, ${o}(wv.z), acc2);
      acc3 = fma(f, ${o}(wv.w), acc3);
    }
    let k_base = k4 * 4u;
${i}`;if(!a)return`  var best_v = vec4<f32>(-1.0e29);
  var best_k = vec4<u32>(0u);

  for (var k4 : u32 = 0u; k4 < ${t}u; k4 = k4 + 1u) {
${f}
${qt(4,d=>`    let l${d} = vec4<f32>(acc${d}) + vec4<f32>(${r(d)});
    let m${d} = l${d} > best_v;
    best_v = select(best_v, l${d}, m${d});
    best_k = select(best_k, vec4<u32>(k_base + ${d}u), m${d});
`)}  }

  labels8[row_idx * ${At}u + x4] = best_k.x | (best_k.y << 8u) | (best_k.z << 16u) | (best_k.w << 24u);`;const l=`f32(${(1/Math.max(a.temperature,1e-6)).toExponential(8)})`,c=`f32(${(1/Math.max(a.supportTemperature,1e-6)).toExponential(8)})`,g=a.temperature===a.supportTemperature;return`  var max_v = vec4<f32>(-1.0e29);
  for (var k4 : u32 = 0u; k4 < ${t}u; k4 = k4 + 1u) {
${f}
${qt(4,d=>`    if (k_base + ${d}u < ${n}u) {
      max_v = max(max_v, vec4<f32>(acc${d}) + vec4<f32>(${r(d)}));
    }
`)}  }

  var denom = vec4<f32>(0.0);
  var sup_denom = vec4<f32>(0.0);
  var bg_w = vec4<f32>(0.0);
  var gm_num = vec4<f32>(0.0);
  var wm_num = vec4<f32>(0.0);
  var csf_num = vec4<f32>(0.0);
  for (var k4 : u32 = 0u; k4 < ${t}u; k4 = k4 + 1u) {
${f}
${qt(4,d=>`    let k${d} = k_base + ${d}u;
    if (k${d} < ${n}u) {
      let l${d} = vec4<f32>(acc${d}) + vec4<f32>(${r(d)});
      let v${d} = exp(clamp((l${d} - max_v) * ${l}, vec4<f32>(-80.0), vec4<f32>(0.0)));
      let s${d} = ${g?`v${d}`:`exp(clamp((l${d} - max_v) * ${c}, vec4<f32>(-80.0), vec4<f32>(0.0)))`};
      denom = denom + v${d};
      sup_denom = sup_denom + s${d};
      if (k${d} == 0u) { bg_w = s${d}; }
      let bit${d} = 1u << k${d};
      if ((${a.grayMask}u & bit${d}) != 0u) { gm_num = gm_num + v${d}; }
      if ((${a.whiteMask}u & bit${d}) != 0u) { wm_num = wm_num + v${d}; }
      if ((${a.csfMask}u & bit${d}) != 0u) { csf_num = csf_num + v${d}; }
    }
`)}  }

  let inv_den = vec4<f32>(1.0) / max(denom, vec4<f32>(1.0e-20));
  let gm = clamp(gm_num * inv_den, vec4<f32>(0.0), vec4<f32>(1.0));
  let wm = clamp(wm_num * inv_den, vec4<f32>(0.0), vec4<f32>(1.0));
  let csf = clamp(csf_num * inv_den, vec4<f32>(0.0), vec4<f32>(1.0));
  let sup = clamp(vec4<f32>(1.0) - bg_w / max(sup_denom, vec4<f32>(1.0e-20)), vec4<f32>(0.0), vec4<f32>(1.0));
  let vox_base = row_idx * ${B}u + x4 * 4u;
  if (cp.pad0 == 0u) {
    labels8[vox_base]      = pack2x16unorm(vec2<f32>(gm.x, wm.x));
    labels8[vox_base + 1u] = pack2x16unorm(vec2<f32>(gm.y, wm.y));
    labels8[vox_base + 2u] = pack2x16unorm(vec2<f32>(gm.z, wm.z));
    labels8[vox_base + 3u] = pack2x16unorm(vec2<f32>(gm.w, wm.w));
  } else {
    labels8[vox_base]      = pack2x16unorm(vec2<f32>(csf.x, sup.x));
    labels8[vox_base + 1u] = pack2x16unorm(vec2<f32>(csf.y, sup.y));
    labels8[vox_base + 2u] = pack2x16unorm(vec2<f32>(csf.z, sup.z));
    labels8[vox_base + 3u] = pack2x16unorm(vec2<f32>(csf.w, sup.w));
  }`}function gs({device:e,hasF16:t,nvox:n,outBufBytes:o,inpBuf:s,act8_0:i,labels8Buf:r,readbackBuf:a,pInit:f,bgInit:l,pCls:c,bgCls:g,clsUbo:d,packed:u,modelEntry:p,probCfg:m,canGpuProb:y,probSlots:k,ownedBuffers:_,mkBuf:w}){let h=!1,$=!1,b=!1,P=!1;const C=new Uint8Array(B*B);let v=null,x=null,G=null,M=null;const A=(q,D)=>e.createBindGroup({layout:q,entries:D.map((oe,O)=>({binding:O,resource:oe&&oe.buffer?oe:{buffer:oe}}))});function T(){if(!v){const q=t?"prep_in_u8_f16":"prep_in_u8_f32";v=ge(null,null,function*(){const{bgl:D,pipe:oe}=yield sn(e,q,()=>so(!0,t),"main",["read-only-storage","storage","uniform"]);if(P)return null;const O=w(256*4,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST),j=new Float32Array(256),he=A(D,[{buffer:r,offset:0,size:n},s,O]);return{pipe:oe,ubo:O,lutF32:j,bg:he}}).catch(D=>{throw v=null,D})}return v}function U(){if(!x){const q=t?"prep_in_f32_f16":"prep_in_f32_f32";x=ge(null,null,function*(){const{bgl:D,pipe:oe}=yield sn(e,q,()=>so(!1,t),"main",["read-only-storage","storage","uniform"]);if(P)return null;const O=w(16,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST),j=new Float32Array(4),he=o>=n*4?A(D,[{buffer:r,offset:0,size:n*4},s,O]):null,Pe=i.size>=n*4?A(D,[{buffer:i,offset:0,size:n*4},s,O]):null;return{pipe:oe,ubo:O,f32Tmp:j,bgLabels:he,bgAct0:Pe}}).catch(D=>{throw x=null,D})}return x}function z(){return G||(G=ge(null,null,function*(){const{bgl:q,pipe:D}=yield sn(e,"transpose_u8_v4",ls,"main",["read-only-storage","storage"]);if(P)return null;const oe=A(q,[{buffer:r,offset:0,size:n},{buffer:s,offset:0,size:n}]);return{pipe:D,bg:oe}}).catch(q=>{throw G=null,q})),G}function N(){return M||(M=ge(null,null,function*(){const[q,D,oe,O]=yield Promise.all([sn(e,"prob_unpack_two",Ur,"main",["read-only-storage","storage","storage"]),sn(e,"prob_blur_axis",Fo,"blur_axis",["read-only-storage","storage","read-only-storage","uniform"]),sn(e,"prob_blur_z_gate",Fo,"blur_z_gate",["read-only-storage","storage","read-only-storage","uniform"]),sn(e,"transpose_f32",Fr,"main",["read-only-storage","storage"])]);if(P)return null;const j=GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST,he=144,Pe=w(he,j),Ce=w(he,j),ye=w(he,j),Q=V=>({buffer:V,offset:0,size:o}),ee=A(q.bgl,[Q(k.pass0HoldBuf),Q(k.y0),Q(k.y1)]),W=A(q.bgl,[Q(r),Q(k.b),Q(k.sup)]),X=[k.y0,k.y1,k.b].map(V=>({buf:V,bgBlurX:A(D.bgl,[Q(V),Q(r),Q(k.sup),Pe]),bgBlurY:A(D.bgl,[Q(r),Q(V),Q(k.sup),Ce]),bgBlurZ:A(oe.bgl,[Q(V),Q(r),Q(k.sup),ye]),bgTranspose:A(O.bgl,[Q(r),Q(V)])}));return{pUnpack:q.pipe,pBlurAxis:D.pipe,pBlurZGate:oe.pipe,pTransposeF32:O.pipe,bgUnpack0:ee,bgUnpack1:W,tissues:X,uboX:Pe,uboY:Ce,uboZ:ye,uboScratch:new ArrayBuffer(he),lastBlurKey:null}}).catch(q=>{throw M=null,q})),M}function L(){m?y&&N().catch(()=>{}):(T().catch(()=>{}),z().catch(()=>{}))}function Z(){P=!0}function te(Pe){return ge(this,arguments,function*({volume:q,ioOpts:D,useCone:oe,padInputHost:O,headRowHost:j,hasF16Flag:he}){var ye;if(D!=null&&D.gpuNativeInput){const Q=(ye=D.normOffset)!=null?ye:0,ee=D.normRange||1,W=q instanceof Uint8Array||q instanceof Uint8ClampedArray,X=o>=n*4||i.size>=n*4;if(W){const ze=Uo(q,j,C,Q,oe),le=yield T();for(let me=0;me<256;me++)le.lutF32[me]=me===Q?0:(me-Q)/ee;return e.queue.writeBuffer(le.ubo,0,le.lutF32),e.queue.writeBuffer(r,0,q,0,n),{info:ze,runPrePasses(me,Y){(!$||b)&&(me.clearBuffer(s),$=!0,b=!1);const Fe=me.beginComputePass();if(Fe.setPipeline(le.pipe),Fe.setBindGroup(0,le.bg),Fe.dispatchWorkgroups(8,B,8),Fe.end(),Y.push("preprocess"),h){const H=me.beginComputePass();H.setPipeline(f.pipe),H.setBindGroup(0,l),H.dispatchWorkgroups(1,B,B),H.end(),Y.push("preprocess"),h=!1}}}}if(X){const ze=Uo(q,j,C,Q,oe),le=yield U(),me=!(o>=n*4),Y=me?i:r,Fe=me?le.bgAct0:le.bgLabels,H=q instanceof Float32Array?q:Float32Array.from(q);return le.f32Tmp[0]=Q,le.f32Tmp[1]=ee,le.f32Tmp[2]=0,le.f32Tmp[3]=0,e.queue.writeBuffer(le.ubo,0,le.f32Tmp),e.queue.writeBuffer(Y,0,H,0,n),{info:ze,runPrePasses(qe,tt){(!$||b)&&(qe.clearBuffer(s),$=!0,b=!1);const Oe=qe.beginComputePass();if(Oe.setPipeline(le.pipe),Oe.setBindGroup(0,Fe),Oe.dispatchWorkgroups(8,B,8),Oe.end(),tt.push("preprocess"),h||me){const rt=qe.beginComputePass();rt.setPipeline(f.pipe),rt.setBindGroup(0,l),rt.dispatchWorkgroups(1,B,B),rt.end(),tt.push("preprocess"),h=!1}}}}const V=new Float32Array(n);for(let ze=0;ze<n;ze++){const le=q[ze];V[ze]=le===Q?0:(le-Q)/ee}const se=Pn(V,[B,B,B],[2,1,0]),Le=Lo(se,O,j,he,oe);return e.queue.writeBuffer(s,0,O),$=!0,b=!1,{info:Le,runPrePasses(ze,le){if(h){const me=ze.beginComputePass();me.setPipeline(f.pipe),me.setBindGroup(0,l),me.dispatchWorkgroups(1,B,B),me.end(),le.push("preprocess"),h=!1}}}}const Ce=Lo(q,O,j,he,oe);return e.queue.writeBuffer(s,0,O),$=!0,b=!1,{info:Ce,runPrePasses(Q,ee){if(h){const W=Q.beginComputePass();W.setPipeline(f.pipe),W.setBindGroup(0,l),W.dispatchWorkgroups(1,B,B),W.end(),ee.push("preprocess"),h=!1}}}})}function R(Ce){return ge(this,arguments,function*({enc:q,schedule:D,passCategories:oe,u4Tmp:O,ioOpts:j,paced:he=!1,onProgress:Pe=null}){const ye=D.clsSkipped?D.clsStrips.length:B;if(!m){O[0]=u.clsVec4Off,O[1]=u.clsBiasOff,O[2]=D.clsSkipped?0:1,O[3]=0,e.queue.writeBuffer(d,0,O);{const H=q.beginComputePass();H.setPipeline(c.pipe),H.setBindGroup(0,g),ye>0&&H.dispatchWorkgroups(1,D.clsSkipped?1:64,ye),H.end(),oe.push("classify")}if(j!=null&&j.gpuNativeOutput){const H=yield z(),qe=q.beginComputePass();qe.setPipeline(H.pipe),qe.setBindGroup(0,H.bg),qe.dispatchWorkgroups(8,B,8),qe.end(),oe.push("postprocess"),b=!0,q.copyBufferToBuffer(s,0,a,0,n),e.queue.submit([q.finish()]),yield a.mapAsync(GPUMapMode.READ);const tt=new Uint8Array(a.getMappedRange()).slice();return a.unmap(),he&&Pe&&Pe(1,""),[tt]}q.copyBufferToBuffer(r,0,a,0,o),e.queue.submit([q.finish()]),yield a.mapAsync(GPUMapMode.READ);const Y=new Uint8Array(a.getMappedRange()),Fe=new Float32Array(n);for(let H=0;H<n;H++)Fe[H]=Y[H];return a.unmap(),he&&Pe&&Pe(1,""),[Fe]}if(y){const Y=yield N();O[0]=u.clsVec4Off,O[1]=u.clsBiasOff,O[2]=D.clsSkipped?0:1,O[3]=0,e.queue.writeBuffer(d,0,O),O[3]=1,e.queue.writeBuffer(k.clsUbo1,0,O);{const Ae=q.beginComputePass();Ae.setPipeline(c.pipe),Ae.setBindGroup(0,g),ye>0&&Ae.dispatchWorkgroups(1,D.clsSkipped?1:64,ye),Ae.end(),oe.push("classify")}q.copyBufferToBuffer(r,0,k.pass0HoldBuf,0,o),D.clsSkipped&&q.clearBuffer(r,0,o);{const Ae=q.beginComputePass();Ae.setPipeline(c.pipe),Ae.setBindGroup(0,k.bgCls1),ye>0&&Ae.dispatchWorkgroups(1,D.clsSkipped?1:64,ye),Ae.end(),oe.push("classify")}h=!0;const Fe=`${m.sigma}|${m.supportPower}`,H=m.sigma>0,qe=H?Math.max(1,Math.round(3*m.sigma)):0;if(Y.lastBlurKey!==Fe){const Ae=new Uint32Array(Y.uboScratch),Ze=new Float32Array(Y.uboScratch);Ze.fill(0);let Ye=1;if(H){Ye=0;for(let dt=-qe;dt<=qe;dt++){const _t=Math.exp(-.5*dt*dt/(m.sigma*m.sigma));Ze[4+dt+qe]=_t,Ye+=_t}}else Ze[4]=1;Ae[1]=qe,Ze[2]=Ye,Ae[0]=0,Ze[3]=1,e.queue.writeBuffer(Y.uboX,0,Y.uboScratch),Ae[0]=1,e.queue.writeBuffer(Y.uboY,0,Y.uboScratch),Ae[0]=2,Ze[3]=m.supportPower,e.queue.writeBuffer(Y.uboZ,0,Y.uboScratch),Y.lastBlurKey=Fe}{const Ae=q.beginComputePass();Ae.setPipeline(Y.pUnpack),Ae.setBindGroup(0,Y.bgUnpack0),Ae.dispatchWorkgroups(256,256,1),Ae.end(),oe.push("postprocess");const Ze=q.beginComputePass();Ze.setPipeline(Y.pUnpack),Ze.setBindGroup(0,Y.bgUnpack1),Ze.dispatchWorkgroups(256,256,1),Ze.end(),oe.push("postprocess")}he&&(e.queue.submit([q.finish()]),yield e.queue.onSubmittedWorkDone(),Pe&&Pe(.992,""),yield vn(),q=e.createCommandEncoder());const tt=!!(j!=null&&j.gpuNativeOutput);for(let Ae=0;Ae<3;Ae++){const Ze=Y.tissues[Ae];if(H){const dt=q.beginComputePass();dt.setPipeline(Y.pBlurAxis),dt.setBindGroup(0,Ze.bgBlurX),dt.dispatchWorkgroups(4,64,B),dt.end(),oe.push("postprocess");const _t=q.beginComputePass();_t.setPipeline(Y.pBlurAxis),_t.setBindGroup(0,Ze.bgBlurY),_t.dispatchWorkgroups(4,64,B),_t.end(),oe.push("postprocess")}const Ye=q.beginComputePass();if(Ye.setPipeline(Y.pBlurZGate),Ye.setBindGroup(0,Ze.bgBlurZ),Ye.dispatchWorkgroups(4,64,B),Ye.end(),oe.push("postprocess"),tt){const dt=q.beginComputePass();dt.setPipeline(Y.pTransposeF32),dt.setBindGroup(0,Ze.bgTranspose),dt.dispatchWorkgroups(8,B,8),dt.end(),oe.push("postprocess")}else Ae<2&&q.copyBufferToBuffer(r,0,Ze.buf,0,o)}const Oe=tt?[k.y0,k.y1,k.b]:[k.y0,k.y1,r];q.copyBufferToBuffer(Oe[0],0,a,0,o),e.queue.submit([q.finish()]),yield a.mapAsync(GPUMapMode.READ);const rt=new Float32Array(a.getMappedRange()).slice();a.unmap();const at=Ae=>ge(null,null,function*(){const Ze=e.createCommandEncoder();Ze.copyBufferToBuffer(Ae,0,a,0,o),e.queue.submit([Ze.finish()]),yield a.mapAsync(GPUMapMode.READ);const Ye=new Float32Array(a.getMappedRange()).slice();return a.unmap(),Ye}),ut=yield at(Oe[1]),gt=yield at(Oe[2]);return he&&Pe&&Pe(1,""),[rt,ut,gt]}O[0]=u.clsVec4Off,O[1]=u.clsBiasOff,O[2]=D.clsSkipped?0:1,O[3]=0,e.queue.writeBuffer(d,0,O);{const Y=q.beginComputePass();Y.setPipeline(c.pipe),Y.setBindGroup(0,g),ye>0&&Y.dispatchWorkgroups(1,D.clsSkipped?1:64,ye),Y.end(),oe.push("classify"),q.copyBufferToBuffer(r,0,a,0,o)}e.queue.submit([q.finish()]),yield a.mapAsync(GPUMapMode.READ);const Q=1/65535,ee=new Uint16Array(a.getMappedRange()),W=new Float32Array(n),X=new Float32Array(n);for(let Y=0;Y<n;Y++)W[Y]=ee[Y*2]*Q,X[Y]=ee[Y*2+1]*Q;a.unmap(),O[3]=1,e.queue.writeBuffer(d,0,O);const V=e.createCommandEncoder();D.clsSkipped&&V.clearBuffer(r,0,o);const se=V.beginComputePass();se.setPipeline(c.pipe),se.setBindGroup(0,g),ye>0&&se.dispatchWorkgroups(1,D.clsSkipped?1:64,ye),se.end(),oe.push("classify"),V.copyBufferToBuffer(r,0,a,0,o),e.queue.submit([V.finish()]),yield a.mapAsync(GPUMapMode.READ);const Le=new Uint16Array(a.getMappedRange()),ze=new Float32Array(n),le=new Float32Array(n);for(let Y=0;Y<n;Y++)ze[Y]=Le[Y*2]*Q,le[Y]=Le[Y*2+1]*Q;a.unmap();const me=Pr([W,X,ze],le,[B,B,B],p);return j!=null&&j.gpuNativeOutput?me.map(Y=>Pn(Y,[B,B,B],[2,1,0])):me})}return{prepareInput:te,finishAndReadback:R,warmupIoPipelines:L,dispose:Z}}function _s(e){const{cs:t,chan:n,nclass:o,clsK4:s,dilations:i,activation:r,norm:a,hasF16:f,hasSubgroups32:l,splitHalves:c,probCfg:g,chunkableStd:d=!1}=e,u=t/4,p=c?t/2:t,m=p*wt,y=p*At,k=9*t*3*u,_=k,w=k+u,h=f&&u%2===0&&w*8<=65536,$=ms(r),b=f?`enable f16;
`:"",P=l?`enable subgroups;
`:"",C=f?"f16":"f32",v=f?"h":"f",x=`vec4<${C}>`,G=f?256:255,M=({cStart:R,cEnd:q,hrExpr:D,yRowExpr:oe,isPermuted:O,momBinding:j,alsoWriteMomMain:he=!1,writeY8Expr:Pe="true"})=>{const Ce=O?".xzyw":"",ye=(ee,W)=>c&&ee>=p?`y8_1[${oe} + ${(ee-p)*At}u] = ${W};`:`y8_0[${oe} + ${ee*At}u] = ${W};`;if(f&&l)return qt(q-R,ee=>{const W=R+ee;return`  {
    let f = vec4<f32>(a_${W}${Ce});
    let ls = subgroupAdd(f.x + f.y + f.z + f.w);
    let lq = subgroupAdd(dot(f, f));
    let lmn = subgroupMin(min(min(f.x, f.y), min(f.z, f.w)));
    let lmx = subgroupMax(max(max(f.x, f.y), max(f.z, f.w)));
    let sp = lmx - lmn;
    let inv = select(0.0, 1.0 / sp, sp > 1e-7);
    if (${Pe}) {
      ${ye(W,"pack4x8unorm((f - vec4<f32>(lmn)) * inv)")}
    }
    if (slane == 0u) {
      let mv = vec4<f32>(ls, lq, lmn, sp);
      ${j}[(${D}) * ${t}u + ${W}u] = mv;
      ${he?`mom_main[(row_idx * 2u + sg) * ${t}u + ${W}u] = mv;`:""}
    }
  }
`});let Q="";for(let ee=R;ee<q;ee+=2){const W=ee,X=ee+1;Q+=`  {
    let f0 = vec4<f32>(a_${W}${Ce});
    let f1 = vec4<f32>(a_${X}${Ce});
    sh_s[tid]  = vec2<f32>(f0.x + f0.y + f0.z + f0.w, f1.x + f1.y + f1.z + f1.w);
    sh_q[tid]  = vec2<f32>(dot(f0, f0), dot(f1, f1));
    sh_mn[tid] = vec2<f32>(min(min(f0.x, f0.y), min(f0.z, f0.w)), min(min(f1.x, f1.y), min(f1.z, f1.w)));
    sh_mx[tid] = vec2<f32>(max(max(f0.x, f0.y), max(f0.z, f0.w)), max(max(f1.x, f1.y), max(f1.z, f1.w)));
    workgroupBarrier();
    if (slane < 2u) {
      var rs : f32 = 0.0;
      var rq : f32 = 0.0;
      var rmn : f32 = 3.0e38;
      var rmx : f32 = -3.0e38;
      if (slane == 0u) {
        for (var k : u32 = 0u; k < 32u; k = k + 1u) {
          rs  += sh_s[hbase + k].x;
          rq  += sh_q[hbase + k].x;
          rmn  = min(rmn, sh_mn[hbase + k].x);
          rmx  = max(rmx, sh_mx[hbase + k].x);
        }
        let sp = rmx - rmn;
        sh_res_mn[hslot]  = rmn;
        sh_res_inv[hslot] = select(0.0, 1.0 / sp, sp > 1e-7);
        let mv0 = vec4<f32>(rs, rq, rmn, sp);
        ${j}[(${D}) * ${t}u + ${W}u] = mv0;
        ${he?`mom_main[(row_idx * 2u + sg) * ${t}u + ${W}u] = mv0;`:""}
      } else {
        for (var k : u32 = 0u; k < 32u; k = k + 1u) {
          rs  += sh_s[hbase + k].y;
          rq  += sh_q[hbase + k].y;
          rmn  = min(rmn, sh_mn[hbase + k].y);
          rmx  = max(rmx, sh_mx[hbase + k].y);
        }
        let sp = rmx - rmn;
        sh_res_mn[hslot + 1u]  = rmn;
        sh_res_inv[hslot + 1u] = select(0.0, 1.0 / sp, sp > 1e-7);
        let mv1 = vec4<f32>(rs, rq, rmn, sp);
        ${j}[(${D}) * ${t}u + ${X}u] = mv1;
        ${he?`mom_main[(row_idx * 2u + sg) * ${t}u + ${X}u] = mv1;`:""}
      }
    }
    workgroupBarrier();
    let p_mn0  = sh_res_mn[hslot];
    let p_inv0 = sh_res_inv[hslot];
    let p_mn1  = sh_res_mn[hslot + 1u];
    let p_inv1 = sh_res_inv[hslot + 1u];
    if (${Pe}) {
      ${ye(W,"pack4x8unorm((f0 - vec4<f32>(p_mn0)) * p_inv0)")}
      ${ye(X,"pack4x8unorm((f1 - vec4<f32>(p_mn1)) * p_inv1)")}
    }
    workgroupBarrier();
  }
`}return Q},A=f&&l?"":`var<workgroup> sh_s       : array<vec2<f32>, 256>;
var<workgroup> sh_q       : array<vec2<f32>, 256>;
var<workgroup> sh_mn      : array<vec2<f32>, 256>;
var<workgroup> sh_mx      : array<vec2<f32>, 256>;
var<workgroup> sh_res_mn  : array<f32, 16>;
var<workgroup> sh_res_inv : array<f32, 16>;
`,T=()=>`
@group(0) @binding(0) var<storage, read_write> act0 : array<u32>;
@group(0) @binding(1) var<storage, read_write> act1 : array<u32>;
@compute @workgroup_size(${wt}, 1, 1)
fn main(@builtin(local_invocation_id) lid : vec3<u32>,
        @builtin(workgroup_id) wid : vec3<u32>) {
  let row_base = (wid.z * 256u + wid.y) * ${m}u + lid.x;
  let val = ${$.uZeroWord}u;
  for (var c : u32 = 0u; c < ${p}u; c = c + 1u) {
    let idx = row_base + c * ${wt}u;
    act0[idx] = val;
    ${c?"act1[idx] = val;":""}
  }
}`,U=i[0];return{initActWgsl:T,conv0Wgsl:()=>{const R=!f&&c,q=(Pe,Ce)=>{const ye=Pe/4,Q=Ce/4;return qt(Q-ye,ee=>{const W=ye+ee,X=W*4;return`          {
            let w0 = w16_4[wb + ${W}u];
            let w1 = w16_4[wb + ${u+W}u];
            let w2 = w16_4[wb + ${2*u+W}u];
            a_${X}     = fma(vn, ${x}(w0.x), fma(vc, ${x}(w1.x), fma(vp, ${x}(w2.x), a_${X})));
            a_${X+1} = fma(vn, ${x}(w0.y), fma(vc, ${x}(w1.y), fma(vp, ${x}(w2.y), a_${X+1})));
            a_${X+2} = fma(vn, ${x}(w0.z), fma(vc, ${x}(w1.z), fma(vp, ${x}(w2.z), a_${X+2})));
            a_${X+3} = fma(vn, ${x}(w0.w), fma(vc, ${x}(w1.w), fma(vp, ${x}(w2.w), a_${X+3})));
          }
`})},D=Math.floor(U/4),oe=U%4;let O="";oe===0?O=`
        let vn = inp_4[base - ${D}u];
        let vc = inp_4[base];
        let vp = inp_4[base + ${D}u];`:D===0&&oe===1?O=`
        let vL = inp_4[base - 1u];
        let vc = inp_4[base];
        let vR = inp_4[base + 1u];
        let vn = ${x}(vL.w, vc.xyz);
        let vp = ${x}(vc.yzw, vR.x);`:oe===1?O=`
        let vL = inp_4[base - ${D+1}u];
        let vN = inp_4[base - ${D}u];
        let vc = inp_4[base];
        let vP = inp_4[base + ${D}u];
        let vR = inp_4[base + ${D+1}u];
        let vn = ${x}(vL.w, vN.xyz);
        let vp = ${x}(vP.yzw, vR.x);`:oe===2?O=`
        let vL = inp_4[base - ${D+1}u];
        let vN = ${D===0?"inp_4[base]":`inp_4[base - ${D}u]`};
        let vc = ${D===0?"vN":"inp_4[base]"};
        let vP = ${D===0?"vN":`inp_4[base + ${D}u]`};
        let vR = inp_4[base + ${D+1}u];
        let vn = ${x}(vL.zw, vN.xy);
        let vp = ${x}(vP.zw, vR.xy);`:O=`
        let vL = inp_4[base - ${D+1}u];
        let vN = ${D===0?"inp_4[base]":`inp_4[base - ${D}u]`};
        let vc = ${D===0?"vN":"inp_4[base]"};
        let vP = ${D===0?"vN":`inp_4[base + ${D}u]`};
        let vR = inp_4[base + ${D+1}u];
        let vn = ${x}(vL.yzw, vN.x);
        let vp = ${x}(vP.w, vR.xyz);`;const j=(Pe,Ce,ye,Q)=>{const ee=qt(ye-Ce,se=>{const Le=Ce+se;return a==="none"?`  var a_${Le} = ${x}(${C}(qmeta[${3*t+Le}u]));
`:`  var a_${Le} = ${x}(0.0${v});
`}),W=Q?`  let y = i32(p0.bg_y0 + lid.y);
  let z = i32(p0.bg_z0);`:`  var y : i32;
  var z : i32;
  if (p0.is_full != 0u) {
    y = i32(wid.y * 4u + lid.y);
    z = i32(wid.z);
  } else {
    let pk = strips0[wid.z];
    y = i32((pk & 255u) * 4u + lid.y);
    z = i32(pk >> 8u);
  }`,X=Q?"lid.y * 2u + sg":"row_idx * 2u + sg",V=Q?"mom_ext":"mom_main";return`
@compute @workgroup_size(64, 4, 1)
fn ${Pe}(@builtin(local_invocation_id) lid : vec3<u32>,
             @builtin(workgroup_id) wid : vec3<u32>) {
  let sg = lid.x >> 5u;
  let slane = lid.x & 31u;
${f&&l?"":`  let hbase = (lid.y * 2u + sg) * 32u;
  let tid = hbase + slane;
  let hslot = (lid.y * 2u + sg) * 2u;
`}
  let x_pad = lid.x + ${Xt}u;
${W}
${ee}
  var tap_yz : u32 = 0u;
  for (var dz : i32 = -1; dz <= 1; dz = dz + 1) {
    let sz = z + dz * ${U};
    for (var dy : i32 = -1; dy <= 1; dy = dy + 1) {
      let sy = y + dy * ${U};
      if (sz >= 0 && sz < 256 && sy >= 0 && sy < 256) {
        let base = (u32(sz) * 256u + u32(sy)) * ${wt}u + x_pad;
${O}
        let wb = tap_yz * ${3*u}u;
${q(Ce,ye)}
      }
      tap_yz = tap_yz + 1u;
    }
  }
  let row_idx = u32(z) * 256u + u32(y);
  let y_row_base = row_idx * ${y}u + lid.x;
${M({cStart:Ce,cEnd:ye,hrExpr:X,yRowExpr:"y_row_base",isPermuted:!1,momBinding:V})}}`},he=R?j("main_lo",0,p,!1)+j("main_hi",p,t,!1)+j("main_bg_lo",0,p,!0)+j("main_bg_hi",p,t,!0):j("main",0,t,!1)+j("main_bg",0,t,!0);return`${b}${P}
struct Params0 {
  is_full : u32,
  bg_y0 : u32,
  bg_z0 : u32,
  pad0 : u32,
};
@group(0) @binding(0) var<storage, read> inp_4 : array<${x}>;
@group(0) @binding(1) var<storage, read_write> y8_0 : array<u32>;
@group(0) @binding(2) var<storage, read_write> y8_1 : array<u32>;
@group(0) @binding(3) var<storage, read> w16_4 : array<${x}>;
@group(0) @binding(4) var<storage, read> qmeta : array<f32>;
@group(0) @binding(5) var<storage, read_write> mom_main : array<vec4<f32>>;
@group(0) @binding(6) var<storage, read_write> mom_ext : array<vec4<f32>>;
@group(0) @binding(7) var<storage, read> strips0 : array<u32>;
@group(0) @binding(8) var<uniform> p0 : Params0;
${A}${he}`},prepWgsl:()=>`${b}
${Mn(r)}
struct PrepParams {
  meta_off : u32,
  next_w_vec4_off : u32,
  next_meta_off : u32,
  has_next : u32,
  is_first : u32,
  is_full : u32,
  n_main_strips : u32,
  n_ext_hr : u32,
  ext_weight : f32,
  pad0 : u32,
  pad1 : u32,
  pad2 : u32,
};
@group(0) @binding(0) var<storage, read> w16_4 : array<${x}>;
@group(0) @binding(1) var<storage, read> qmeta : array<f32>;
@group(0) @binding(2) var<storage, read_write> mom_main : array<vec4<f32>>;
@group(0) @binding(3) var<storage, read_write> mom_ext : array<vec4<f32>>;
@group(0) @binding(4) var<storage, read_write> mom_stats : array<vec4<f32>>;
@group(0) @binding(5) var<storage, read_write> w_eff : array<${x}>;
@group(0) @binding(6) var<storage, read> main_strips : array<u32>;
@group(0) @binding(7) var<uniform> pp : PrepParams;

var<workgroup> fin_s  : array<f32, 256>;
var<workgroup> fin_q  : array<f32, 256>;
var<workgroup> fin_es : array<f32, 256>;
var<workgroup> fin_eq : array<f32, 256>;
var<workgroup> fin_mn : array<f32, 256>;
var<workgroup> fin_mx : array<f32, 256>;

@compute @workgroup_size(256, 1, 1)
fn moments_finish(@builtin(local_invocation_index) lid : u32,
                  @builtin(workgroup_id) wid : vec3<u32>) {
  let c = wid.x;
  var s : f32 = 0.0;
  var q : f32 = 0.0;
  var es : f32 = 0.0;
  var eq : f32 = 0.0;
  var mn : f32 = 3.0e38;
  var mx : f32 = -3.0e38;
  if (pp.is_full != 0u) {
    for (var hr : u32 = lid; hr < ${Ln}u; hr = hr + 256u) {
      let v = mom_main[hr * ${t}u + c];
      s  += v.x;
      q  += v.y;
      mn  = min(mn, v.z);
      mx  = max(mx, v.z + v.w);
    }
  } else {
    for (var si : u32 = lid; si < pp.n_main_strips; si = si + 256u) {
      let pk = main_strips[si];
      let base_hr = ((pk >> 8u) * 256u + (pk & 255u) * 4u) * 2u;
      for (var h : u32 = 0u; h < 8u; h = h + 1u) {
        let v = mom_main[(base_hr + h) * ${t}u + c];
        s  += v.x;
        q  += v.y;
        mn  = min(mn, v.z);
        mx  = max(mx, v.z + v.w);
      }
    }
    if (pp.is_first != 0u) {
      mn = min(mn, 0.0);
      mx = max(mx, 0.0);
    } else if (pp.n_ext_hr > 0u) {
      for (var e : u32 = lid; e < pp.n_ext_hr; e = e + 256u) {
        let v = mom_ext[e * ${t}u + c];
        es += v.x;
        eq += v.y;
        mn  = min(mn, v.z);
        mx  = max(mx, v.z + v.w);
      }
    }
  }
  fin_s[lid]  = s;
  fin_q[lid]  = q;
  fin_es[lid] = es;
  fin_eq[lid] = eq;
  fin_mn[lid] = mn;
  fin_mx[lid] = mx;
  workgroupBarrier();
  for (var stride : u32 = 128u; stride > 0u; stride = stride >> 1u) {
    if (lid < stride) {
      fin_s[lid]  += fin_s[lid + stride];
      fin_q[lid]  += fin_q[lid + stride];
      fin_es[lid] += fin_es[lid + stride];
      fin_eq[lid] += fin_eq[lid + stride];
      fin_mn[lid]  = min(fin_mn[lid], fin_mn[lid + stride]);
      fin_mx[lid]  = max(fin_mx[lid], fin_mx[lid + stride]);
    }
    workgroupBarrier();
  }
  if (lid == 0u) {
    let mbase = pp.meta_off;
    let gamma = qmeta[mbase + c];
    let beta  = qmeta[mbase + ${t}u + c];
    let eps_base = qmeta[mbase + ${2*t}u + c];
    let q_prev = select(mom_stats[${t*2}u].x, 1.0, pp.is_first != 0u);
    let eff_eps = eps_base / (q_prev * q_prev);
    let total_s = fin_s[0] + pp.ext_weight * fin_es[0];
    let total_q = fin_q[0] + pp.ext_weight * fin_eq[0];
    let mean = ${a==="gn"?"total_s / 16777216.0":"0.0"};
    let varr = ${a==="gn"?"max(total_q / 16777216.0 - mean * mean, 0.0)":"1.0"};
    let inv_std = ${a==="gn"?"inverseSqrt(varr + eff_eps)":"1.0"};
    let scale = inv_std * gamma;
    let shift = beta - mean * scale;
    let u_lo = fin_mn[0] * scale + shift;
    let u_hi = fin_mx[0] * scale + shift;
    let vmax = max(0.25, max(act(u_lo), act(u_hi)));
    ${r==="gelu_tanh"?`
    let qs = select(max(vmax / 248.0, 0.1705 / 7.0), 1.0, c >= ${n}u);
    `:r==="relu"?`
    let qs = select(max(vmax / 255.0, 1e-6), 1.0, c >= ${n}u);
    `:`
    let qs = select(max(vmax / 223.0, 1.0 / 32.0), 1.0, c >= ${n}u);
    `}
    let sb = c * 2u;
    mom_stats[sb]      = vec4<f32>(mean, inv_std, qs, 1.0 / qs);
    mom_stats[sb + 1u] = vec4<f32>(scale, shift, 0.0, 0.0);
  }
}

@compute @workgroup_size(256, 1, 1)
fn prep_weff(@builtin(local_invocation_index) lid : u32) {
  if (pp.has_next == 0u) { return; }
  var q_ref : f32 = 1e-6;
  for (var ic : u32 = 0u; ic < ${n}u; ic = ic + 1u) {
    let qs = mom_stats[ic * 2u].z;
    q_ref = max(q_ref, ${G.toFixed(1)} * qs);
  }
  ${a==="none"?"q_ref = 1.0;":""}
  if (lid == 0u) {
    mom_stats[${t*2}u] = vec4<f32>(q_ref, 0.0, 0.0, 0.0);
  }
  let scale_num = ${G.toFixed(1)} / q_ref;
  for (var idx : u32 = lid; idx < ${k}u; idx = idx + 256u) {
    let ic = (idx / ${3*u}u) % ${t}u;
    let qs = mom_stats[ic * 2u].z;
    w_eff[idx] = w16_4[pp.next_w_vec4_off + idx] * ${C}(qs * scale_num);
  }
  if (lid < ${u}u) {
    ${a==="none"?`
    let mb = pp.next_meta_off + ${3*t}u + lid * 4u;
    w_eff[${_}u + lid] = ${x}(${C}(qmeta[mb]), ${C}(qmeta[mb + 1u]), ${C}(qmeta[mb + 2u]), ${C}(qmeta[mb + 3u]));
    `:`
    w_eff[${_}u + lid] = ${x}(0.0${v});
    `}
  }
}`,normWgsl:()=>`${Mn(r)}
struct NormParams {
  is_full : u32,
  bg_row : u32,
  halo_off : u32,
  n_halo : u32,
};
@group(0) @binding(0) var<storage, read_write> act8_0 : array<u32>;
@group(0) @binding(1) var<storage, read_write> act8_1 : array<u32>;
@group(0) @binding(2) var<storage, read> y8_0 : array<u32>;
@group(0) @binding(3) var<storage, read> y8_1 : array<u32>;
@group(0) @binding(4) var<storage, read> mom_main : array<vec4<f32>>;
@group(0) @binding(5) var<storage, read> mom_ext : array<vec4<f32>>;
@group(0) @binding(6) var<storage, read> mom_stats : array<vec4<f32>>;
@group(0) @binding(7) var<storage, read> norm_aux : array<u32>;
@group(0) @binding(8) var<uniform> np : NormParams;

@compute @workgroup_size(64, 4, 1)
fn main(@builtin(local_invocation_id) lid : vec3<u32>,
        @builtin(workgroup_id) wid : vec3<u32>) {
  let x4 = lid.x;
  let sg = x4 >> 5u;
  let x_pad = x4 + ${Xt}u;
  var y : u32;
  var z : u32;
  if (np.is_full != 0u) {
    y = wid.y * 4u + lid.y;
    z = wid.z;
  } else {
    let pk = norm_aux[wid.z];
    y = (pk & 255u) * 4u + lid.y;
    z = pk >> 8u;
  }
  let row_idx = z * 256u + y;
  let hr = row_idx * 2u + sg;
  let y_base = row_idx * ${y}u + x4;
  let a_base = row_idx * ${m}u + x_pad;
  let mom_base = hr * ${t}u;

  for (var c : u32 = 0u; c < ${p}u; c = c + 1u) {
    let inv_qs = mom_stats[c * 2u].w;
    let st = mom_stats[c * 2u + 1u];
    let rm = mom_main[mom_base + c];
    let yv = unpack4x8unorm(y8_0[y_base + c * ${At}u]) * rm.w + vec4<f32>(rm.z);
    let a = vec4<f32>(
      act(yv.x * st.x + st.y),
      act(yv.y * st.x + st.y),
      act(yv.z * st.x + st.y),
      act(yv.w * st.x + st.y)
    );
    act8_0[a_base + c * ${wt}u] = pack4x8unorm((a * inv_qs + vec4<f32>(${$.zeroBin.toFixed(1)})) * (1.0 / 255.0));
  }
  ${c?`
  for (var c : u32 = 0u; c < ${p}u; c = c + 1u) {
    let cg = ${p}u + c;
    let inv_qs = mom_stats[cg * 2u].w;
    let st = mom_stats[cg * 2u + 1u];
    let rm = mom_main[mom_base + cg];
    let yv = unpack4x8unorm(y8_1[y_base + c * ${At}u]) * rm.w + vec4<f32>(rm.z);
    let a = vec4<f32>(
      act(yv.x * st.x + st.y),
      act(yv.y * st.x + st.y),
      act(yv.z * st.x + st.y),
      act(yv.w * st.x + st.y)
    );
    act8_1[a_base + c * ${wt}u] = pack4x8unorm((a * inv_qs + vec4<f32>(${$.zeroBin.toFixed(1)})) * (1.0 / 255.0));
  }`:""}
}

@compute @workgroup_size(64, 4, 1)
fn norm_halo_fill(@builtin(local_invocation_id) lid : vec3<u32>,
                  @builtin(workgroup_id) wid : vec3<u32>) {
  let idx = wid.y * 4u + lid.y;
  if (idx >= np.n_halo) { return; }
  let x4 = lid.x;
  let sg = x4 >> 5u;
  let x_pad = x4 + ${Xt}u;
  let y_base = np.bg_row * ${y}u + x4;
  let mom_base = sg * ${t}u;
  let dst_row = norm_aux[np.halo_off + idx];
  let a_base = dst_row * ${m}u + x_pad;

  for (var c : u32 = 0u; c < ${p}u; c = c + 1u) {
    let inv_qs = mom_stats[c * 2u].w;
    let st = mom_stats[c * 2u + 1u];
    let rm = mom_ext[mom_base + c];
    let yv = unpack4x8unorm(y8_0[y_base + c * ${At}u]) * rm.w + vec4<f32>(rm.z);
    let a = vec4<f32>(
      act(yv.x * st.x + st.y),
      act(yv.y * st.x + st.y),
      act(yv.z * st.x + st.y),
      act(yv.w * st.x + st.y)
    );
    act8_0[a_base + c * ${wt}u] = pack4x8unorm((a * inv_qs + vec4<f32>(${$.zeroBin.toFixed(1)})) * (1.0 / 255.0));
  }
  ${c?`
  for (var c : u32 = 0u; c < ${p}u; c = c + 1u) {
    let cg = ${p}u + c;
    let inv_qs = mom_stats[cg * 2u].w;
    let st = mom_stats[cg * 2u + 1u];
    let rm = mom_ext[mom_base + cg];
    let yv = unpack4x8unorm(y8_1[y_base + c * ${At}u]) * rm.w + vec4<f32>(rm.z);
    let a = vec4<f32>(
      act(yv.x * st.x + st.y),
      act(yv.y * st.x + st.y),
      act(yv.z * st.x + st.y),
      act(yv.w * st.x + st.y)
    );
    act8_1[a_base + c * ${wt}u] = pack4x8unorm((a * inv_qs + vec4<f32>(${$.zeroBin.toFixed(1)})) * (1.0 / 255.0));
  }`:""}
}`,getConvWgsl:R=>{const q=Math.floor(R/4),oe=R%4*8,O=!f&&c,j=(W,X)=>f?`
          let ${W} = vec4<f16>(vec2<f16>(unpack2x16float(((${X} & 0x00FF00FFu) << 2u) | 0x3C003C00u)), vec2<f16>(unpack2x16float(((${X} >> 6u) & 0x03FC03FCu) | 0x3C003C00u))) - vec4<f16>(${$.sterbenzSub});`:`
          let ${W} = unpack4x8unorm(${X}) - vec4<f32>(${$.uZeroFloat});`,he=W=>{if(oe===0)return`
          let u_neg = ${W}[base - ${q}u];
          let uC    = ${W}[base];
          let u_pos = ${W}[base + ${q}u];`+j("vn","u_neg")+j("vc","uC")+j("vp","u_pos");const X=32-oe;return q===0?`
          let uL = ${W}[base - 1u];
          let uC = ${W}[base];
          let uR = ${W}[base + 1u];
          let u_neg = (uL >> ${X}u) | (uC << ${oe}u);
          let u_pos = (uC >> ${oe}u) | (uR << ${X}u);`+j("vn","u_neg")+j("vc","uC")+j("vp","u_pos"):`
          let uL = ${W}[base - ${q+1}u];
          let uN = ${W}[base - ${q}u];
          let uC = ${W}[base];
          let uP = ${W}[base + ${q}u];
          let uR = ${W}[base + ${q+1}u];
          let u_neg = (uL >> ${X}u) | (uN << ${oe}u);
          let u_pos = (uP >> ${oe}u) | (uR << ${X}u);`+j("vn","u_neg")+j("vc","uC")+j("vp","u_pos")},Pe=(W,X)=>{const V=W/4,se=X/4;if(h){const Le=u/2,ze=u;let le="";for(let me=V;me<se;me+=2){const Y=me*4,Fe=me/2;le+=`          {
            let wp0 = w_eff_u[wbu + ${Fe}u];
            let wp1 = w_eff_u[wbu + ${Le+Fe}u];
            let wp2 = w_eff_u[wbu + ${ze+Fe}u];
            let w0a = wp0[0];
            let w0b = wp0[1];
            let w1a = wp1[0];
            let w1b = wp1[1];
            let w2a = wp2[0];
            let w2b = wp2[1];
            a_${Y}     = fma(vn, vec4<f16>(w0a.x), fma(vc, vec4<f16>(w1a.x), fma(vp, vec4<f16>(w2a.x), a_${Y})));
            a_${Y+1} = fma(vn, vec4<f16>(w0a.y), fma(vc, vec4<f16>(w1a.y), fma(vp, vec4<f16>(w2a.y), a_${Y+1})));
            a_${Y+2} = fma(vn, vec4<f16>(w0a.z), fma(vc, vec4<f16>(w1a.z), fma(vp, vec4<f16>(w2a.z), a_${Y+2})));
            a_${Y+3} = fma(vn, vec4<f16>(w0a.w), fma(vc, vec4<f16>(w1a.w), fma(vp, vec4<f16>(w2a.w), a_${Y+3})));
            a_${Y+4} = fma(vn, vec4<f16>(w0b.x), fma(vc, vec4<f16>(w1b.x), fma(vp, vec4<f16>(w2b.x), a_${Y+4})));
            a_${Y+5} = fma(vn, vec4<f16>(w0b.y), fma(vc, vec4<f16>(w1b.y), fma(vp, vec4<f16>(w2b.y), a_${Y+5})));
            a_${Y+6} = fma(vn, vec4<f16>(w0b.z), fma(vc, vec4<f16>(w1b.z), fma(vp, vec4<f16>(w2b.z), a_${Y+6})));
            a_${Y+7} = fma(vn, vec4<f16>(w0b.w), fma(vc, vec4<f16>(w1b.w), fma(vp, vec4<f16>(w2b.w), a_${Y+7})));
          }
`}return le}return qt(se-V,Le=>{const ze=V+Le,le=ze*4;return`          {
            let w0 = w_eff[wb + ${ze}u];
            let w1 = w_eff[wb + ${u+ze}u];
            let w2 = w_eff[wb + ${2*u+ze}u];
            a_${le}     = fma(vn, ${x}(w0.x), fma(vc, ${x}(w1.x), fma(vp, ${x}(w2.x), a_${le})));
            a_${le+1} = fma(vn, ${x}(w0.y), fma(vc, ${x}(w1.y), fma(vp, ${x}(w2.y), a_${le+1})));
            a_${le+2} = fma(vn, ${x}(w0.z), fma(vc, ${x}(w1.z), fma(vp, ${x}(w2.z), a_${le+2})));
            a_${le+3} = fma(vn, ${x}(w0.w), fma(vc, ${x}(w1.w), fma(vp, ${x}(w2.w), a_${le+3})));
          }
`})},Ce=(W,X,V,se)=>{const Le=qt(V-X,tt=>{const Oe=X+tt;if(a==="none"){const rt=Oe>>>2,at=["x","y","z","w"][Oe&3];if(h){const ut=_+rt>>>1,gt=_+rt&1;return`  var a_${Oe} = ${x}(w_eff_u[${ut}u][${gt}].${at});
`}return`  var a_${Oe} = ${x}(w_eff[${_+rt}u].${at});
`}return`  var a_${Oe} = ${x}(0.0${v});
`}),ze=se?d?`
  let ext_i = cp.ext_base + wid.z;
  let pk = strips[cp.ext_off + ext_i];
  let y = i32((pk & 255u) * 4u + lid.y);
  let z = i32(pk >> 8u);`:`
  let pk = strips[cp.ext_off + wid.z];
  let y = i32((pk & 255u) * 4u + lid.y);
  let z = i32(pk >> 8u);`:d?`
  var y : i32;
  var z : i32;
  if (cp.is_full != 0u) {
    y = i32(wid.y * 4u + lid.y);
    z = i32(cp.main_off + wid.z);
  } else {
    let pk = strips[cp.main_off + wid.z];
    y = i32((pk & 255u) * 4u + lid.y);
    z = i32(pk >> 8u);
  }`:`
  var y : i32;
  var z : i32;
  if (cp.is_full != 0u) {
    y = i32(wid.y * 4u + lid.y);
    z = i32(wid.z);
  } else {
    let pk = strips[wid.z];
    y = i32((pk & 255u) * 4u + lid.y);
    z = i32(pk >> 8u);
  }`,le=se?d?"ext_i * 8u + lid.y * 2u + sg":"wid.z * 8u + lid.y * 2u + sg":"row_idx * 2u + sg",me=se?"mom_ext":"mom_main",Y=se?"(cp.write_ext_y8 != 0u)":"true",Fe=p<=8?`(${p}u + cp.pad0)`:`${p}u`,H=h?`        let wbu_tap = tap_yz * ${t*3*u/2}u;
        for (var ic : u32 = 0u; ic < ${Fe}; ic = ic + 1u) {
          let base = row_off + ic * ${wt}u;
${he("act8_0")}
          let wbu = wbu_tap + ic * ${3*u/2}u;
${Pe(X,V)}
        }`:`        let wb_tap = tap_yz * ${t*3*u}u;
        for (var ic : u32 = 0u; ic < ${Fe}; ic = ic + 1u) {
          let base = row_off + ic * ${wt}u;
${he("act8_0")}
          let wb = wb_tap + ic * ${3*u}u;
${Pe(X,V)}
        }`,qe=h?`        for (var ic : u32 = 0u; ic < ${Fe}; ic = ic + 1u) {
          let base = row_off + ic * ${wt}u;
${he("act8_1")}
          let wbu = wbu_tap + (${p}u + ic) * ${3*u/2}u;
${Pe(X,V)}
        }`:`        for (var ic : u32 = 0u; ic < ${Fe}; ic = ic + 1u) {
          let base = row_off + ic * ${wt}u;
${he("act8_1")}
          let wb = wb_tap + (${p}u + ic) * ${3*u}u;
${Pe(X,V)}
        }`;return`
@compute @workgroup_size(64, 4, 1)
fn ${W}(@builtin(local_invocation_id) lid : vec3<u32>,
             @builtin(workgroup_id) wid : vec3<u32>) {
  let x4 = lid.x;
  let sg = x4 >> 5u;
  let slane = x4 & 31u;
${f&&l?"":`  let hbase = (lid.y * 2u + sg) * 32u;
  let tid = hbase + slane;
  let hslot = (lid.y * 2u + sg) * 2u;
`}
  let x_pad = x4 + ${Xt}u;
${ze}
${Le}
  var tap_yz : u32 = 0u;
  for (var dz : i32 = -1; dz <= 1; dz = dz + 1) {
    let sz = z + dz * ${R};
    for (var dy : i32 = -1; dy <= 1; dy = dy + 1) {
      let sy = y + dy * ${R};
      if (sz >= 0 && sz < 256 && sy >= 0 && sy < 256) {
        let row_off = (u32(sz) * 256u + u32(sy)) * ${m}u + x_pad;
${H}
        ${c?qe:""}
      }
      tap_yz = tap_yz + 1u;
    }
  }
  let row_idx = u32(z) * 256u + u32(y);
  let y_row_base = row_idx * ${y}u + x4;
${M({cStart:X,cEnd:V,hrExpr:le,yRowExpr:"y_row_base",isPermuted:f,momBinding:me,alsoWriteMomMain:se,writeY8Expr:Y})}}`},ye=O?Ce("main_lo",0,p,!1)+Ce("main_hi",p,t,!1)+Ce("main_ext_lo",0,p,!0)+Ce("main_ext_hi",p,t,!0):Ce("main",0,t,!1)+Ce("main_ext",0,t,!0),Q=h?`@group(0) @binding(6) var<uniform> w_eff_u : array<mat2x4<f16>, ${Math.ceil(w/2)}>;`:`@group(0) @binding(6) var<storage, read> w_eff : array<${x}>;`;return`${b}${P}
${d?`struct ConvParams {
  is_full : u32,
  ext_off : u32,
  write_ext_y8 : u32,
  pad0 : u32,
  main_off : u32,
  ext_base : u32,
  pad1 : u32,
  pad2 : u32,
};`:`struct ConvParams {
  is_full : u32,
  ext_off : u32,
  write_ext_y8 : u32,
  pad0 : u32,
};`}
@group(0) @binding(0) var<storage, read> act8_0 : array<u32>;
@group(0) @binding(1) var<storage, read> act8_1 : array<u32>;
@group(0) @binding(2) var<storage, read_write> y8_0 : array<u32>;
@group(0) @binding(3) var<storage, read_write> y8_1 : array<u32>;
@group(0) @binding(4) var<storage, read_write> mom_main : array<vec4<f32>>;
@group(0) @binding(5) var<storage, read_write> mom_ext : array<vec4<f32>>;
${Q}
@group(0) @binding(7) var<storage, read> strips : array<u32>;
@group(0) @binding(8) var<uniform> cp : ConvParams;
${A}${ye}`},clsWgsl:()=>`${b}
${Mn(r)}
struct ClsParams {
  w_vec4_off : u32,
  bias_off : u32,
  is_full : u32,
  pad0 : u32,
};
@group(0) @binding(0) var<storage, read> y8_0 : array<u32>;
@group(0) @binding(1) var<storage, read> y8_1 : array<u32>;
@group(0) @binding(2) var<storage, read> w16_4 : array<${x}>;
@group(0) @binding(3) var<storage, read> qmeta : array<f32>;
@group(0) @binding(4) var<storage, read> mom_main : array<vec4<f32>>;
@group(0) @binding(5) var<storage, read> mom_stats : array<vec4<f32>>;
@group(0) @binding(6) var<storage, read_write> labels8 : array<u32>;
@group(0) @binding(7) var<storage, read> cls_strips : array<u32>;
@group(0) @binding(8) var<uniform> cp : ClsParams;

@compute @workgroup_size(64, 4, 1)
fn main(@builtin(local_invocation_id) lid : vec3<u32>,
        @builtin(workgroup_id) wid : vec3<u32>) {
  let x4 = lid.x;
  let sg = x4 >> 5u;
  var y : u32;
  var z : u32;
  if (cp.is_full != 0u) {
    y = wid.y * 4u + lid.y;
    z = wid.z;
  } else {
    let pk = cls_strips[wid.z];
    y = (pk & 255u) * 4u + lid.y;
    z = pk >> 8u;
  }
  let row_idx = z * 256u + y;
  let hr = row_idx * 2u + sg;
  let y_base = row_idx * ${y}u + x4;
  let mom_base = hr * ${t}u;

  var feat : array<${x}, ${n}>;
  for (var c : u32 = 0u; c < ${n}u; c = c + 1u) {
    let st = mom_stats[c * 2u + 1u];
    let rm = mom_main[mom_base + c];
    ${c?`
    let in_hi = c >= ${p}u;
    let c_loc = select(c, c - ${p}u, in_hi);
    let idx4 = y_base + c_loc * ${At}u;
    let q_word = select(y8_0[idx4], y8_1[idx4], in_hi);
    `:`
    let q_word = y8_0[y_base + c * ${At}u];
    `}
    let yv = unpack4x8unorm(q_word) * rm.w + vec4<f32>(rm.z);
    let fv = vec4<f32>(
      act(yv.x * st.x + st.y),
      act(yv.y * st.x + st.y),
      act(yv.z * st.x + st.y),
      act(yv.w * st.x + st.y)
    );
    feat[c] = ${x}(fv);
  }

  let w_cls = cp.w_vec4_off;
  let m_cls = cp.bias_off;
${ds({chan:n,clsK4:s,nclass:o,V4:x,suf:v,readBiasStmt:"",biasExpr:R=>`qmeta[m_cls + k_base + ${R}u]`,probCfg:g})}
}`,totalWEffVec4s:w,useUniformWeff:h,csHalf:p,chunkableStd:d,halfPass0:!f&&c,halfPassConv:!f&&c}}function bs(e){const{cs:t,chan:n,nclass:o,clsK4:s,dilations:i,activation:r,norm:a,hasF16:f,hasSubgroups32:l,numConvs:c,probCfg:g}=e,d=t/4,u=t/2,p=t/4,m=d*wt,y=16384,k=t*At,w=t*2+4,h=w+Ln*t,$=4*t,b=(c*$+s*4)/4,P=9*t*3*p,C=P,v=P+p,x=f&&p%2===0&&v*8<=65536,G=ms(r),M=f?`enable f16;
`:"",A=l?`enable subgroups;
`:"",T=f?"f16":"f32",U=f?"h":"f",z=`vec4<${T}>`,N=f?256:255,L=f&&l?"":`var<workgroup> sh_s       : array<vec2<f32>, 256>;
var<workgroup> sh_q       : array<vec2<f32>, 256>;
var<workgroup> sh_mn      : array<vec2<f32>, 256>;
var<workgroup> sh_mx      : array<vec2<f32>, 256>;
var<workgroup> sh_res_mn  : array<f32, 16>;
var<workgroup> sh_res_inv : array<f32, 16>;
`,Z=({cStart:Q,cEnd:ee,hrExpr:W,storeMode:X,isPermuted:V,momOffExpr:se,alsoWriteMomMain:Le=!1,writeY8Expr:ze="true"})=>{const le=V?".xzyw":"",me=(Fe,H)=>{if(X==="stage_bg")return`stage[s_bg_base + ${Fe*At}u] = ${H};`;if(X==="stage")return`stage[s_row_base + ${Fe*At}u] = ${H};`;const qe=Math.floor(Fe/d),tt=Fe%d;return`if (use_act) { act8_${qe}[a_row_base + ${tt*wt}u] = ${H}; } else { stage[s_row_base + ${Fe*At}u] = ${H}; }`};if(f&&l)return qt(ee-Q,Fe=>{const H=Q+Fe;return`  {
    let f = vec4<f32>(a_${H}${le});
    let ls = subgroupAdd(f.x + f.y + f.z + f.w);
    let lq = subgroupAdd(dot(f, f));
    let lmn = subgroupMin(min(min(f.x, f.y), min(f.z, f.w)));
    let lmx = subgroupMax(max(max(f.x, f.y), max(f.z, f.w)));
    let sp = lmx - lmn;
    let inv = select(0.0, 1.0 / sp, sp > 1e-7);
    if (${ze}) {
      ${me(H,"pack4x8unorm((f - vec4<f32>(lmn)) * inv)")}
    }
    if (slane == 0u) {
      let mv = vec4<f32>(ls, lq, lmn, sp);
      mom[${se} + (${W}) * ${t}u + ${H}u] = mv;
      ${Le?`mom[${w}u + (row_idx * 2u + sg) * ${t}u + ${H}u] = mv;`:""}
    }
  }
`});let Y="";for(let Fe=Q;Fe<ee;Fe+=2){const H=Fe,qe=Fe+1;Y+=`  {
    let f0 = vec4<f32>(a_${H}${le});
    let f1 = vec4<f32>(a_${qe}${le});
    sh_s[tid]  = vec2<f32>(f0.x + f0.y + f0.z + f0.w, f1.x + f1.y + f1.z + f1.w);
    sh_q[tid]  = vec2<f32>(dot(f0, f0), dot(f1, f1));
    sh_mn[tid] = vec2<f32>(min(min(f0.x, f0.y), min(f0.z, f0.w)), min(min(f1.x, f1.y), min(f1.z, f1.w)));
    sh_mx[tid] = vec2<f32>(max(max(f0.x, f0.y), max(f0.z, f0.w)), max(max(f1.x, f1.y), max(f1.z, f1.w)));
    workgroupBarrier();
    if (slane < 2u) {
      var rs : f32 = 0.0;
      var rq : f32 = 0.0;
      var rmn : f32 = 3.0e38;
      var rmx : f32 = -3.0e38;
      if (slane == 0u) {
        for (var k : u32 = 0u; k < 32u; k = k + 1u) {
          rs  += sh_s[hbase + k].x;
          rq  += sh_q[hbase + k].x;
          rmn  = min(rmn, sh_mn[hbase + k].x);
          rmx  = max(rmx, sh_mx[hbase + k].x);
        }
        let sp = rmx - rmn;
        sh_res_mn[hslot]  = rmn;
        sh_res_inv[hslot] = select(0.0, 1.0 / sp, sp > 1e-7);
        let mv0 = vec4<f32>(rs, rq, rmn, sp);
        mom[${se} + (${W}) * ${t}u + ${H}u] = mv0;
        ${Le?`mom[${w}u + (row_idx * 2u + sg) * ${t}u + ${H}u] = mv0;`:""}
      } else {
        for (var k : u32 = 0u; k < 32u; k = k + 1u) {
          rs  += sh_s[hbase + k].y;
          rq  += sh_q[hbase + k].y;
          rmn  = min(rmn, sh_mn[hbase + k].y);
          rmx  = max(rmx, sh_mx[hbase + k].y);
        }
        let sp = rmx - rmn;
        sh_res_mn[hslot + 1u]  = rmn;
        sh_res_inv[hslot + 1u] = select(0.0, 1.0 / sp, sp > 1e-7);
        let mv1 = vec4<f32>(rs, rq, rmn, sp);
        mom[${se} + (${W}) * ${t}u + ${qe}u] = mv1;
        ${Le?`mom[${w}u + (row_idx * 2u + sg) * ${t}u + ${qe}u] = mv1;`:""}
      }
    }
    workgroupBarrier();
    let p_mn0  = sh_res_mn[hslot];
    let p_inv0 = sh_res_inv[hslot];
    let p_mn1  = sh_res_mn[hslot + 1u];
    let p_inv1 = sh_res_inv[hslot + 1u];
    if (${ze}) {
      ${me(H,"pack4x8unorm((f0 - vec4<f32>(p_mn0)) * p_inv0)")}
      ${me(qe,"pack4x8unorm((f1 - vec4<f32>(p_mn1)) * p_inv1)")}
    }
    workgroupBarrier();
  }
`}return Y},te=()=>`
@group(0) @binding(0) var<storage, read_write> act0 : array<u32>;
@group(0) @binding(1) var<storage, read_write> act1 : array<u32>;
@group(0) @binding(2) var<storage, read_write> act2 : array<u32>;
@group(0) @binding(3) var<storage, read_write> act3 : array<u32>;
@compute @workgroup_size(${wt}, 1, 1)
fn main(@builtin(local_invocation_id) lid : vec3<u32>,
        @builtin(workgroup_id) wid : vec3<u32>) {
  let row_base = (wid.z * 256u + wid.y) * ${m}u + lid.x;
  let val = ${G.uZeroWord}u;
  for (var c : u32 = 0u; c < ${d}u; c = c + 1u) {
    let idx = row_base + c * ${wt}u;
    act0[idx] = val;
    act1[idx] = val;
    act2[idx] = val;
    act3[idx] = val;
  }
}`,R=i[0],q=!f&&t>=16,D=()=>{const Q=(Le,ze)=>{const le=Le/4,me=ze/4;return qt(me-le,Y=>{const Fe=le+Y,H=Fe*4;return`          {
            let w0 = w16_4[wb + ${Fe}u];
            let w1 = w16_4[wb + ${p+Fe}u];
            let w2 = w16_4[wb + ${2*p+Fe}u];
            a_${H}     = fma(vn, ${z}(w0.x), fma(vc, ${z}(w1.x), fma(vp, ${z}(w2.x), a_${H})));
            a_${H+1} = fma(vn, ${z}(w0.y), fma(vc, ${z}(w1.y), fma(vp, ${z}(w2.y), a_${H+1})));
            a_${H+2} = fma(vn, ${z}(w0.z), fma(vc, ${z}(w1.z), fma(vp, ${z}(w2.z), a_${H+2})));
            a_${H+3} = fma(vn, ${z}(w0.w), fma(vc, ${z}(w1.w), fma(vp, ${z}(w2.w), a_${H+3})));
          }
`})},ee=Math.floor(R/4),W=R%4;let X="";W===0?X=`
        let vn = inp_4[base - ${ee}u];
        let vc = inp_4[base];
        let vp = inp_4[base + ${ee}u];`:ee===0&&W===1?X=`
        let vL = inp_4[base - 1u];
        let vc = inp_4[base];
        let vR = inp_4[base + 1u];
        let vn = ${z}(vL.w, vc.xyz);
        let vp = ${z}(vc.yzw, vR.x);`:W===1?X=`
        let vL = inp_4[base - ${ee+1}u];
        let vN = inp_4[base - ${ee}u];
        let vc = inp_4[base];
        let vP = inp_4[base + ${ee}u];
        let vR = inp_4[base + ${ee+1}u];
        let vn = ${z}(vL.w, vN.xyz);
        let vp = ${z}(vP.yzw, vR.x);`:W===2?X=`
        let vL = inp_4[base - ${ee+1}u];
        let vN = ${ee===0?"inp_4[base]":`inp_4[base - ${ee}u]`};
        let vc = ${ee===0?"vN":"inp_4[base]"};
        let vP = ${ee===0?"vN":`inp_4[base + ${ee}u]`};
        let vR = inp_4[base + ${ee+1}u];
        let vn = ${z}(vL.zw, vN.xy);
        let vp = ${z}(vP.zw, vR.xy);`:X=`
        let vL = inp_4[base - ${ee+1}u];
        let vN = ${ee===0?"inp_4[base]":`inp_4[base - ${ee}u]`};
        let vc = ${ee===0?"vN":"inp_4[base]"};
        let vP = ${ee===0?"vN":`inp_4[base + ${ee}u]`};
        let vR = inp_4[base + ${ee+1}u];
        let vn = ${z}(vL.yzw, vN.x);
        let vp = ${z}(vP.w, vR.xyz);`;const V=(Le,ze,le,me)=>{const Y=qt(le-ze,Oe=>{const rt=ze+Oe;if(a==="none"){const at=3*t+rt;return`  var a_${rt} = ${z}(${T}(qmeta_u[${at>>>2}u][${at&3}u]));
`}return`  var a_${rt} = ${z}(0.0${U});
`}),Fe=me?`  let y = i32(p0.bg_y0 + lid.y);
  let z = i32(p0.bg_z0);`:`  var y : i32;
  var z : i32;
  if (p0.is_full != 0u) {
    y = i32(wid.y * 4u + lid.y);
    z = i32(wid.z);
  } else {
    let pk = strips0_u[wid.z >> 2u][wid.z & 3u];
    y = i32((pk & 255u) * 4u + lid.y);
    z = i32(pk >> 8u);
  }`,H=me?"lid.y * 2u + sg":"row_idx * 2u + sg",qe=me?`${h}u`:`${w}u`,tt=me?`  let s_bg_base = (${y}u + lid.y) * ${k}u + lid.x;`:`  let row_idx = u32(z) * 256u + u32(y);
  let use_act = u32(z) < 192u;
  let a_row_base = row_idx * ${m}u + x_pad;
  let s_row_base = ((u32(z) & 63u) * 256u + u32(y)) * ${k}u + lid.x;`;return`
@compute @workgroup_size(64, 4, 1)
fn ${Le}(@builtin(local_invocation_id) lid : vec3<u32>,
             @builtin(workgroup_id) wid : vec3<u32>) {
  let sg = lid.x >> 5u;
  let slane = lid.x & 31u;
${f&&l?"":`  let hbase = (lid.y * 2u + sg) * 32u;
  let tid = hbase + slane;
  let hslot = (lid.y * 2u + sg) * 2u;
`}
  let x_pad = lid.x + ${Xt}u;
${Fe}
${Y}
  var tap_yz : u32 = 0u;
  for (var dz : i32 = -1; dz <= 1; dz = dz + 1) {
    let sz = z + dz * ${R};
    for (var dy : i32 = -1; dy <= 1; dy = dy + 1) {
      let sy = y + dy * ${R};
      if (sz >= 0 && sz < 256 && sy >= 0 && sy < 256) {
        let base = (u32(sz) * 256u + u32(sy)) * ${wt}u + x_pad;
${X}
        let wb = tap_yz * ${3*p}u;
${Q(ze,le)}
      }
      tap_yz = tap_yz + 1u;
    }
  }
${tt}
${Z({cStart:ze,cEnd:le,hrExpr:H,storeMode:me?"stage_bg":"conv0_split",isPermuted:!1,momOffExpr:qe})}}`},se=q?V("main_lo",0,u,!1)+V("main_hi",u,t,!1)+V("main_bg_lo",0,u,!0)+V("main_bg_hi",u,t,!0):V("main",0,t,!1)+V("main_bg",0,t,!0);return`${M}${A}
struct Params0 {
  is_full : u32,
  bg_y0 : u32,
  bg_z0 : u32,
  pad0 : u32,
};
@group(0) @binding(0) var<storage, read> inp_4 : array<${z}>;
@group(0) @binding(1) var<storage, read_write> act8_0 : array<u32>;
@group(0) @binding(2) var<storage, read_write> act8_1 : array<u32>;
@group(0) @binding(3) var<storage, read_write> act8_2 : array<u32>;
@group(0) @binding(4) var<storage, read_write> act8_3 : array<u32>;
@group(0) @binding(5) var<storage, read_write> stage : array<u32>;
@group(0) @binding(6) var<storage, read> w16_4 : array<${z}>;
@group(0) @binding(7) var<storage, read_write> mom : array<vec4<f32>>;
@group(0) @binding(8) var<uniform> qmeta_u : array<vec4<f32>, ${t}>;
@group(0) @binding(9) var<uniform> strips0_u : array<vec4<u32>, 4096>;
@group(0) @binding(10) var<uniform> p0 : Params0;
${L}${se}`},oe=()=>`${M}
${Mn(r)}
struct PrepParams {
  meta_off : u32,
  next_w_vec4_off : u32,
  next_meta_off : u32,
  has_next : u32,
  is_first : u32,
  is_full : u32,
  n_main_strips : u32,
  n_ext_hr : u32,
  ext_weight : f32,
  pad0 : u32,
  pad1 : u32,
  pad2 : u32,
};
@group(0) @binding(0) var<storage, read> w16_4 : array<${z}>;
@group(0) @binding(1) var<storage, read> qmeta : array<f32>;
@group(0) @binding(2) var<storage, read_write> mom : array<vec4<f32>>;
@group(0) @binding(3) var<storage, read_write> w_eff : array<${z}>;
@group(0) @binding(4) var<storage, read> main_strips : array<u32>;
@group(0) @binding(5) var<uniform> pp : PrepParams;

var<workgroup> fin_s  : array<f32, 256>;
var<workgroup> fin_q  : array<f32, 256>;
var<workgroup> fin_es : array<f32, 256>;
var<workgroup> fin_eq : array<f32, 256>;
var<workgroup> fin_mn : array<f32, 256>;
var<workgroup> fin_mx : array<f32, 256>;

@compute @workgroup_size(256, 1, 1)
fn moments_finish(@builtin(local_invocation_index) lid : u32,
                  @builtin(workgroup_id) wid : vec3<u32>) {
  let c = wid.x;
  var s : f32 = 0.0;
  var q : f32 = 0.0;
  var es : f32 = 0.0;
  var eq : f32 = 0.0;
  var mn : f32 = 3.0e38;
  var mx : f32 = -3.0e38;
  if (pp.is_full != 0u) {
    for (var hr : u32 = lid; hr < ${Ln}u; hr = hr + 256u) {
      let v = mom[${w}u + hr * ${t}u + c];
      s  += v.x;
      q  += v.y;
      mn  = min(mn, v.z);
      mx  = max(mx, v.z + v.w);
    }
  } else {
    for (var si : u32 = lid; si < pp.n_main_strips; si = si + 256u) {
      let pk = main_strips[si];
      let base_hr = ((pk >> 8u) * 256u + (pk & 255u) * 4u) * 2u;
      for (var h : u32 = 0u; h < 8u; h = h + 1u) {
        let v = mom[${w}u + (base_hr + h) * ${t}u + c];
        s  += v.x;
        q  += v.y;
        mn  = min(mn, v.z);
        mx  = max(mx, v.z + v.w);
      }
    }
    if (pp.is_first != 0u) {
      mn = min(mn, 0.0);
      mx = max(mx, 0.0);
    } else if (pp.n_ext_hr > 0u) {
      for (var e : u32 = lid; e < pp.n_ext_hr; e = e + 256u) {
        let v = mom[${h}u + e * ${t}u + c];
        es += v.x;
        eq += v.y;
        mn  = min(mn, v.z);
        mx  = max(mx, v.z + v.w);
      }
    }
  }
  fin_s[lid]  = s;
  fin_q[lid]  = q;
  fin_es[lid] = es;
  fin_eq[lid] = eq;
  fin_mn[lid] = mn;
  fin_mx[lid] = mx;
  workgroupBarrier();
  for (var stride : u32 = 128u; stride > 0u; stride = stride >> 1u) {
    if (lid < stride) {
      fin_s[lid]  += fin_s[lid + stride];
      fin_q[lid]  += fin_q[lid + stride];
      fin_es[lid] += fin_es[lid + stride];
      fin_eq[lid] += fin_eq[lid + stride];
      fin_mn[lid]  = min(fin_mn[lid], fin_mn[lid + stride]);
      fin_mx[lid]  = max(fin_mx[lid], fin_mx[lid + stride]);
    }
    workgroupBarrier();
  }
  if (lid == 0u) {
    let mbase = pp.meta_off;
    let gamma = qmeta[mbase + c];
    let beta  = qmeta[mbase + ${t}u + c];
    let eps_base = qmeta[mbase + ${2*t}u + c];
    let q_prev = select(mom[${t*2}u].x, 1.0, pp.is_first != 0u);
    let eff_eps = eps_base / (q_prev * q_prev);
    let total_s = fin_s[0] + pp.ext_weight * fin_es[0];
    let total_q = fin_q[0] + pp.ext_weight * fin_eq[0];
    let mean = ${a==="gn"?"total_s / 16777216.0":"0.0"};
    let varr = ${a==="gn"?"max(total_q / 16777216.0 - mean * mean, 0.0)":"1.0"};
    let inv_std = ${a==="gn"?"inverseSqrt(varr + eff_eps)":"1.0"};
    let scale = inv_std * gamma;
    let shift = beta - mean * scale;
    let u_lo = fin_mn[0] * scale + shift;
    let u_hi = fin_mx[0] * scale + shift;
    let vmax = max(0.25, max(act(u_lo), act(u_hi)));
    ${r==="gelu_tanh"?`
    let qs = select(max(vmax / 248.0, 0.1705 / 7.0), 1.0, c >= ${n}u);
    `:r==="relu"?`
    let qs = select(max(vmax / 255.0, 1e-6), 1.0, c >= ${n}u);
    `:`
    let qs = select(max(vmax / 223.0, 1.0 / 32.0), 1.0, c >= ${n}u);
    `}
    let sb = c * 2u;
    mom[sb]      = vec4<f32>(mean, inv_std, qs, 1.0 / qs);
    mom[sb + 1u] = vec4<f32>(scale, shift, 0.0, 0.0);
  }
}

@compute @workgroup_size(256, 1, 1)
fn prep_weff(@builtin(local_invocation_index) lid : u32) {
  if (pp.has_next == 0u) { return; }
  var q_ref : f32 = 1e-6;
  for (var ic : u32 = 0u; ic < ${n}u; ic = ic + 1u) {
    let qs = mom[ic * 2u].z;
    q_ref = max(q_ref, ${N.toFixed(1)} * qs);
  }
  ${a==="none"?"q_ref = 1.0;":""}
  if (lid == 0u) {
    mom[${t*2}u] = vec4<f32>(q_ref, 0.0, 0.0, 0.0);
  }
  let scale_num = ${N.toFixed(1)} / q_ref;
  for (var idx : u32 = lid; idx < ${P}u; idx = idx + 256u) {
    let ic = (idx / ${3*p}u) % ${t}u;
    let qs = mom[ic * 2u].z;
    w_eff[idx] = w16_4[pp.next_w_vec4_off + idx] * ${T}(qs * scale_num);
  }
  if (lid < ${p}u) {
    ${a==="none"?`
    let mb = pp.next_meta_off + ${3*t}u + lid * 4u;
    w_eff[${C}u + lid] = ${z}(${T}(qmeta[mb]), ${T}(qmeta[mb + 1u]), ${T}(qmeta[mb + 2u]), ${T}(qmeta[mb + 3u]));
    `:`
    w_eff[${C}u + lid] = ${z}(0.0${U});
    `}
  }
}`,O=()=>`
struct BandFlushParams {
  is_full : u32,
  z_start : u32,
  strip_off : u32,
  pad0 : u32,
  pad1 : u32,
  pad2 : u32,
  pad3 : u32,
  pad4 : u32,
};
@group(0) @binding(0) var<storage, read_write> act8_0 : array<u32>;
@group(0) @binding(1) var<storage, read_write> act8_1 : array<u32>;
@group(0) @binding(2) var<storage, read_write> act8_2 : array<u32>;
@group(0) @binding(3) var<storage, read_write> act8_3 : array<u32>;
@group(0) @binding(4) var<storage, read> stage : array<u32>;
@group(0) @binding(5) var<storage, read> strips : array<u32>;
@group(0) @binding(6) var<uniform> fp : BandFlushParams;

@compute @workgroup_size(64, 4, 1)
fn main(@builtin(local_invocation_id) lid : vec3<u32>,
        @builtin(workgroup_id) wid : vec3<u32>) {
  let x4 = lid.x;
  let x_pad = x4 + ${Xt}u;
  var y : u32;
  var z : u32;
  if (fp.is_full != 0u) {
    y = wid.y * 4u + lid.y;
    z = fp.z_start + wid.z;
  } else {
    let pk = strips[fp.strip_off + wid.z] & 0xFFFFu;
    y = (pk & 255u) * 4u + lid.y;
    z = pk >> 8u;
  }
  let a_base = (z * 256u + y) * ${m}u + x_pad;
  let s_base = ((z & 63u) * 256u + y) * ${k}u + x4;
  for (var c : u32 = 0u; c < ${d}u; c = c + 1u) {
    let a_off = a_base + c * ${wt}u;
    act8_0[a_off] = stage[s_base + c * ${At}u];
    act8_1[a_off] = stage[s_base + (${d}u + c) * ${At}u];
    act8_2[a_off] = stage[s_base + (${2*d}u + c) * ${At}u];
    act8_3[a_off] = stage[s_base + (${3*d}u + c) * ${At}u];
  }
}`,j=(Q,ee)=>{const W=Q*d;return`
  for (var cl : u32 = 0u; cl < ${d}u; cl = cl + 1u) {
    let c = ${W}u + cl;
    let inv_qs = mom[c * 2u].w;
    let st = mom[c * 2u + 1u];
    let rm = mom[mom_base + c];
    let q_word = ${ee?`stage[s_bg_base + c * ${At}u]`:`select(stage[s_base + c * ${At}u], act8_${Q}[a_base + cl * ${wt}u], use_act)`};
    let yv = unpack4x8unorm(q_word) * rm.w + vec4<f32>(rm.z);
    let a = vec4<f32>(
      act(yv.x * st.x + st.y),
      act(yv.y * st.x + st.y),
      act(yv.z * st.x + st.y),
      act(yv.w * st.x + st.y)
    );
    act8_${Q}[a_base + cl * ${wt}u] = pack4x8unorm((a * inv_qs + vec4<f32>(${G.zeroBin.toFixed(1)})) * (1.0 / 255.0));
  }`},he=()=>`${Mn(r)}
struct NormParams {
  is_full : u32,
  bg_row : u32,
  halo_off : u32,
  n_halo : u32,
};
@group(0) @binding(0) var<storage, read_write> act8_0 : array<u32>;
@group(0) @binding(1) var<storage, read_write> act8_1 : array<u32>;
@group(0) @binding(2) var<storage, read_write> act8_2 : array<u32>;
@group(0) @binding(3) var<storage, read_write> act8_3 : array<u32>;
@group(0) @binding(4) var<storage, read> stage : array<u32>;
@group(0) @binding(5) var<storage, read> mom : array<vec4<f32>>;
@group(0) @binding(6) var<storage, read> norm_aux : array<u32>;
@group(0) @binding(7) var<uniform> np : NormParams;

@compute @workgroup_size(64, 4, 1)
fn main(@builtin(local_invocation_id) lid : vec3<u32>,
        @builtin(workgroup_id) wid : vec3<u32>) {
  let x4 = lid.x;
  let sg = x4 >> 5u;
  let x_pad = x4 + ${Xt}u;
  var y : u32;
  var z : u32;
  if (np.is_full != 0u) {
    y = wid.y * 4u + lid.y;
    z = wid.z;
  } else {
    let pk = norm_aux[wid.z];
    y = (pk & 255u) * 4u + lid.y;
    z = pk >> 8u;
  }
  let row_idx = z * 256u + y;
  let use_act = z < 192u;
  let a_base = row_idx * ${m}u + x_pad;
  let s_base = ((z & 63u) * 256u + y) * ${k}u + x4;
  let mom_base = ${w}u + (row_idx * 2u + sg) * ${t}u;
${qt(4,Q=>j(Q,!1))}
}

@compute @workgroup_size(64, 4, 1)
fn norm_halo_fill(@builtin(local_invocation_id) lid : vec3<u32>,
                  @builtin(workgroup_id) wid : vec3<u32>) {
  let idx = wid.y * 4u + lid.y;
  if (idx >= np.n_halo) { return; }
  let x4 = lid.x;
  let sg = x4 >> 5u;
  let x_pad = x4 + ${Xt}u;
  let s_bg_base = ${y}u * ${k}u + x4;
  let mom_base = ${h}u + sg * ${t}u;
  let dst_row = norm_aux[np.halo_off + idx];
  let a_base = dst_row * ${m}u + x_pad;
${qt(4,Q=>j(Q,!0))}
}`,Pe=Q=>{const ee=Math.floor(Q/4),X=Q%4*8,V=!f&&t>=16,se=(H,qe)=>f?`
          let ${H} = vec4<f16>(vec2<f16>(unpack2x16float(((${qe} & 0x00FF00FFu) << 2u) | 0x3C003C00u)), vec2<f16>(unpack2x16float(((${qe} >> 6u) & 0x03FC03FCu) | 0x3C003C00u))) - vec4<f16>(${G.sterbenzSub});`:`
          let ${H} = unpack4x8unorm(${qe}) - vec4<f32>(${G.uZeroFloat});`,Le=H=>{if(X===0)return`
          let u_neg = ${H}[base - ${ee}u];
          let uC    = ${H}[base];
          let u_pos = ${H}[base + ${ee}u];`+se("vn","u_neg")+se("vc","uC")+se("vp","u_pos");const qe=32-X;return ee===0?`
          let uL = ${H}[base - 1u];
          let uC = ${H}[base];
          let uR = ${H}[base + 1u];
          let u_neg = (uL >> ${qe}u) | (uC << ${X}u);
          let u_pos = (uC >> ${X}u) | (uR << ${qe}u);`+se("vn","u_neg")+se("vc","uC")+se("vp","u_pos"):`
          let uL = ${H}[base - ${ee+1}u];
          let uN = ${H}[base - ${ee}u];
          let uC = ${H}[base];
          let uP = ${H}[base + ${ee}u];
          let uR = ${H}[base + ${ee+1}u];
          let u_neg = (uL >> ${qe}u) | (uN << ${X}u);
          let u_pos = (uP >> ${X}u) | (uR << ${qe}u);`+se("vn","u_neg")+se("vc","uC")+se("vp","u_pos")},ze=(H,qe)=>{const tt=H/4,Oe=qe/4;if(x){const rt=p/2,at=p;let ut="";for(let gt=tt;gt<Oe;gt+=2){const Ae=gt*4,Ze=gt/2;ut+=`          {
            let wp0 = w_eff_u[wbu + ${Ze}u];
            let wp1 = w_eff_u[wbu + ${rt+Ze}u];
            let wp2 = w_eff_u[wbu + ${at+Ze}u];
            let w0a = wp0[0];
            let w0b = wp0[1];
            let w1a = wp1[0];
            let w1b = wp1[1];
            let w2a = wp2[0];
            let w2b = wp2[1];
            a_${Ae}     = fma(vn, vec4<f16>(w0a.x), fma(vc, vec4<f16>(w1a.x), fma(vp, vec4<f16>(w2a.x), a_${Ae})));
            a_${Ae+1} = fma(vn, vec4<f16>(w0a.y), fma(vc, vec4<f16>(w1a.y), fma(vp, vec4<f16>(w2a.y), a_${Ae+1})));
            a_${Ae+2} = fma(vn, vec4<f16>(w0a.z), fma(vc, vec4<f16>(w1a.z), fma(vp, vec4<f16>(w2a.z), a_${Ae+2})));
            a_${Ae+3} = fma(vn, vec4<f16>(w0a.w), fma(vc, vec4<f16>(w1a.w), fma(vp, vec4<f16>(w2a.w), a_${Ae+3})));
            a_${Ae+4} = fma(vn, vec4<f16>(w0b.x), fma(vc, vec4<f16>(w1b.x), fma(vp, vec4<f16>(w2b.x), a_${Ae+4})));
            a_${Ae+5} = fma(vn, vec4<f16>(w0b.y), fma(vc, vec4<f16>(w1b.y), fma(vp, vec4<f16>(w2b.y), a_${Ae+5})));
            a_${Ae+6} = fma(vn, vec4<f16>(w0b.z), fma(vc, vec4<f16>(w1b.z), fma(vp, vec4<f16>(w2b.z), a_${Ae+6})));
            a_${Ae+7} = fma(vn, vec4<f16>(w0b.w), fma(vc, vec4<f16>(w1b.w), fma(vp, vec4<f16>(w2b.w), a_${Ae+7})));
          }
`}return ut}return qt(Oe-tt,rt=>{const at=tt+rt,ut=at*4;return`          {
            let w0 = w_eff[wb + ${at}u];
            let w1 = w_eff[wb + ${p+at}u];
            let w2 = w_eff[wb + ${2*p+at}u];
            a_${ut}     = fma(vn, ${z}(w0.x), fma(vc, ${z}(w1.x), fma(vp, ${z}(w2.x), a_${ut})));
            a_${ut+1} = fma(vn, ${z}(w0.y), fma(vc, ${z}(w1.y), fma(vp, ${z}(w2.y), a_${ut+1})));
            a_${ut+2} = fma(vn, ${z}(w0.z), fma(vc, ${z}(w1.z), fma(vp, ${z}(w2.z), a_${ut+2})));
            a_${ut+3} = fma(vn, ${z}(w0.w), fma(vc, ${z}(w1.w), fma(vp, ${z}(w2.w), a_${ut+3})));
          }
`})},le=(H,qe,tt)=>{const Oe=H*d,rt=`(${d}u + cp.pad0)`;return x?`        for (var ic : u32 = 0u; ic < ${rt}; ic = ic + 1u) {
          let base = row_off + ic * ${wt}u;
${Le(`act8_${H}`)}
          let wbu = wbu_tap + ${Oe?`(${Oe}u + ic)`:"ic"} * ${3*p/2}u;
${ze(qe,tt)}
        }
`:`        for (var ic : u32 = 0u; ic < ${rt}; ic = ic + 1u) {
          let base = row_off + ic * ${wt}u;
${Le(`act8_${H}`)}
          let wb = wb_tap + ${Oe?`(${Oe}u + ic)`:"ic"} * ${3*p}u;
${ze(qe,tt)}
        }
`},me=(H,qe,tt,Oe)=>{const rt=qt(tt-qe,_t=>{const E=qe+_t;if(a==="none"){const Tt=E>>>2,zt=["x","y","z","w"][E&3];if(x){const Jt=C+Tt>>>1,Rt=C+Tt&1;return`  var a_${E} = ${z}(w_eff_u[${Jt}u][${Rt}].${zt});
`}return`  var a_${E} = ${z}(w_eff[${C+Tt}u].${zt});
`}return`  var a_${E} = ${z}(0.0${U});
`});let at="";Oe==="bg"?at=`
  let y = i32(cp.bg_y0 + lid.y);
  let z = i32(cp.bg_z0);`:Oe==="ext"?at=`
  let pk_full = strips[cp.ext_off + wid.z];
  let ext_orig = pk_full >> 16u;
  let pk = pk_full & 0xFFFFu;
  let y = i32((pk & 255u) * 4u + lid.y);
  let z = i32(pk >> 8u);`:at=`
  var y : i32;
  var z : i32;
  if (cp.is_full != 0u) {
    y = i32(wid.y * 4u + lid.y);
    z = i32(cp.z_start + wid.z);
  } else {
    let pk = strips[cp.strip_off + wid.z] & 0xFFFFu;
    y = i32((pk & 255u) * 4u + lid.y);
    z = i32(pk >> 8u);
  }`;const ut=Oe==="bg"?"lid.y * 2u + sg":Oe==="ext"?"ext_orig * 8u + lid.y * 2u + sg":"row_idx * 2u + sg",gt=Oe==="main"?`${w}u`:`${h}u`,Ae=Oe==="bg"?"stage_bg":"stage",Ze=Oe==="main"?"true":"(cp.write_ext_y8 != 0u)",Ye=Oe==="bg"?`  let row_idx = u32(z) * 256u + u32(y);
  let s_bg_base = (${y}u + lid.y) * ${k}u + x4;`:`  let row_idx = u32(z) * 256u + u32(y);
  let s_row_base = ((u32(z) & 63u) * 256u + u32(y)) * ${k}u + x4;`,dt=x?`        let wbu_tap = tap_yz * ${t*3*p/2}u;
`:`        let wb_tap = tap_yz * ${t*3*p}u;
`;return`
@compute @workgroup_size(64, 4, 1)
fn ${H}(@builtin(local_invocation_id) lid : vec3<u32>,
             @builtin(workgroup_id) wid : vec3<u32>) {
  let x4 = lid.x;
  let sg = x4 >> 5u;
  let slane = x4 & 31u;
${f&&l?"":`  let hbase = (lid.y * 2u + sg) * 32u;
  let tid = hbase + slane;
  let hslot = (lid.y * 2u + sg) * 2u;
`}
  let x_pad = x4 + ${Xt}u;
${at}
${rt}
  var tap_yz : u32 = 0u;
  for (var dz : i32 = -1; dz <= 1; dz = dz + 1) {
    let sz = z + dz * ${Q};
    for (var dy : i32 = -1; dy <= 1; dy = dy + 1) {
      let sy = y + dy * ${Q};
      if (sz >= 0 && sz < 256 && sy >= 0 && sy < 256) {
        let row_off = (u32(sz) * 256u + u32(sy)) * ${m}u + x_pad;
${dt}${qt(4,_t=>le(_t,qe,tt))}
      }
      tap_yz = tap_yz + 1u;
    }
  }
${Ye}
${Z({cStart:qe,cEnd:tt,hrExpr:ut,storeMode:Ae,isPermuted:f,momOffExpr:gt,alsoWriteMomMain:Oe!=="main",writeY8Expr:Ze})}}`},Y=V?me("main_lo",0,u,"main")+me("main_hi",u,t,"main")+me("main_ext_lo",0,u,"ext")+me("main_ext_hi",u,t,"ext")+me("main_bg_lo",0,u,"bg")+me("main_bg_hi",u,t,"bg"):me("main",0,t,"main")+me("main_ext",0,t,"ext")+me("main_bg",0,t,"bg"),Fe=x?`@group(0) @binding(6) var<uniform> w_eff_u : array<mat2x4<f16>, ${Math.ceil(v/2)}>;`:`@group(0) @binding(6) var<storage, read> w_eff : array<${z}>;`;return`${M}${A}
struct BandConvParams {
  is_full : u32,
  z_start : u32,
  strip_off : u32,
  ext_off : u32,
  write_ext_y8 : u32,
  bg_y0 : u32,
  bg_z0 : u32,
  pad0 : u32,
};
@group(0) @binding(0) var<storage, read> act8_0 : array<u32>;
@group(0) @binding(1) var<storage, read> act8_1 : array<u32>;
@group(0) @binding(2) var<storage, read> act8_2 : array<u32>;
@group(0) @binding(3) var<storage, read> act8_3 : array<u32>;
@group(0) @binding(4) var<storage, read_write> stage : array<u32>;
@group(0) @binding(5) var<storage, read_write> mom : array<vec4<f32>>;
${Fe}
@group(0) @binding(7) var<storage, read> strips : array<u32>;
@group(0) @binding(8) var<uniform> cp : BandConvParams;
${L}${Y}`},Ce=Q=>{const ee=Q*d;return`
  for (var cl : u32 = 0u; cl < ${d}u; cl = cl + 1u) {
    let c = ${ee}u + cl;
    if (c < ${n}u) {
      let st = mom[c * 2u + 1u];
      let rm = mom[mom_base + c];
      let q_word = select(stage[s_base + c * ${At}u], act8_${Q}[a_base + cl * ${wt}u], use_act);
      let yv = unpack4x8unorm(q_word) * rm.w + vec4<f32>(rm.z);
      let fv = vec4<f32>(
        act(yv.x * st.x + st.y),
        act(yv.y * st.x + st.y),
        act(yv.z * st.x + st.y),
        act(yv.w * st.x + st.y)
      );
      feat[c] = ${z}(fv);
    }
  }`};return{initActWgsl:te,conv0Wgsl:D,prepWgsl:oe,flushWgsl:O,normWgsl:he,getConvWgsl:Pe,clsWgsl:()=>`${M}
${Mn(r)}
struct ClsParams {
  w_vec4_off : u32,
  bias_off : u32,
  is_full : u32,
  pad0 : u32,
};
@group(0) @binding(0) var<storage, read> act8_0 : array<u32>;
@group(0) @binding(1) var<storage, read> act8_1 : array<u32>;
@group(0) @binding(2) var<storage, read> act8_2 : array<u32>;
@group(0) @binding(3) var<storage, read> act8_3 : array<u32>;
@group(0) @binding(4) var<storage, read> stage : array<u32>;
@group(0) @binding(5) var<storage, read> w16_4 : array<${z}>;
@group(0) @binding(6) var<storage, read> mom : array<vec4<f32>>;
@group(0) @binding(7) var<storage, read_write> labels8 : array<u32>;
@group(0) @binding(8) var<uniform> qmeta_u : array<vec4<f32>, ${b}>;
@group(0) @binding(9) var<uniform> cls_strips_u : array<vec4<u32>, 4096>;
@group(0) @binding(10) var<uniform> cp : ClsParams;

@compute @workgroup_size(64, 4, 1)
fn main(@builtin(local_invocation_id) lid : vec3<u32>,
        @builtin(workgroup_id) wid : vec3<u32>) {
  let x4 = lid.x;
  let sg = x4 >> 5u;
  var y : u32;
  var z : u32;
  if (cp.is_full != 0u) {
    y = wid.y * 4u + lid.y;
    z = wid.z;
  } else {
    let pk = cls_strips_u[wid.z >> 2u][wid.z & 3u];
    y = (pk & 255u) * 4u + lid.y;
    z = pk >> 8u;
  }
  let row_idx = z * 256u + y;
  let use_act = z < 192u;
  let a_base = row_idx * ${m}u + x4 + ${Xt}u;
  let s_base = ((z & 63u) * 256u + y) * ${k}u + x4;
  let mom_base = ${w}u + (row_idx * 2u + sg) * ${t}u;

  var feat : array<${z}, ${n}>;
${qt(4,Q=>Ce(Q))}

  let w_cls = cp.w_vec4_off;
  let b_vec4 = cp.bias_off >> 2u;
${ds({chan:n,clsK4:s,nclass:o,V4:z,suf:U,readBiasStmt:"    let bv = qmeta_u[b_vec4 + k4];",biasExpr:Q=>`bv.${["x","y","z","w"][Q]}`,probCfg:g})}
}`,qmetaVec4Len:b,numConvs:c,totalWEffVec4s:v,useUniformWeff:x,csQ:d,halfPass0:q,halfPassConv:!f&&t>=16}}function Gr(e,t,n,o,s,i,r){return ge(this,null,function*(){var Qe,Bt;const a=B*B*B,f=r?a*4:a,l=t.dilations.length,c=t.cs/4,g=B*B*c*wt*4,u=(64*B+4)*t.cs*At*4,m=(t.cs*2+4+(Ln+Ko)*t.cs)*16,y=e.limits||{},k=Math.min((Qe=y.maxStorageBufferBindingSize)!=null?Qe:1/0,(Bt=y.maxBufferSize)!=null?Bt:1/0);if(g>k||u>k||m>k||f>k){const Xe=Math.ceil(Math.max(g,u,m,f)/1048576);throw new Error(`meshnet_fast_v4: LowMem128 max buffer (${Xe} MiB) exceeds device limit (${k>>>20} MiB)`)}const _=bs({cs:t.cs,chan:t.chan,nclass:t.nclass,clsK4:n.clsK4,dilations:t.dilations,activation:t.activation,norm:t.norm,hasF16:o,hasSubgroups32:s,numConvs:l,probCfg:r});console.log(`[WebGPU-V4-128M] ${t.chan}ch(cs=${t.cs})/${t.nclass}cls (${l} convs, ${t.activation}, norm=${t.norm}${r?", prob=3":""}) | ${o?"f16+sterbenz":"f32"} | ${s?"subgroups32":"shared-8KiB"} | ZYCX-4Q+64slice | maxBuf=${(Math.max(g,u,m,f)/1048576).toFixed(1)} MiB`);const w=GPUBufferUsage.STORAGE,h=GPUBufferUsage.UNIFORM,$=GPUBufferUsage.COPY_DST,b=GPUBufferUsage.COPY_SRC,P=B*B*pn,C=P*(o?2:4),v=o?Math.ceil(_.totalWEffVec4s/2)*16:_.totalWEffVec4s*16,x=!!(r&&g>=f),G=`128|${t.cs}|${o?1:0}|${f}|${x?1:0}`,M=is(e,G,()=>{const Xe=[],be=En(e,Xe),we=be.alloc,ie={inpBuf:we(C,w|$|b),act8_0:we(g,w|$|b),act8_1:we(g,w|$|b),act8_2:we(g,w|$|b),act8_3:we(g,w|$|b),stageBuf:we(u,w),momBuf:we(m,w),labels8Buf:we(f,w|$|b),readbackBuf:we(f,GPUBufferUsage.MAP_READ|$),probPackTmpBuf:x?we(f,w|$|b):null};return{buffers:Xe,named:ie,bytes:be.getBytes()}}),{inpBuf:A,act8_0:T,act8_1:U,act8_2:z,act8_3:N,stageBuf:L,momBuf:Z,labels8Buf:te,readbackBuf:R,probPackTmpBuf:q}=M.named,D=[],oe=En(e,D),O=oe.alloc,j=O(o?n.wF16.byteLength:n.wF32.byteLength,w|$),he=O(n.qmetaF32.byteLength,w|h|$),Pe=O(v,_.useUniformWeff?w|h:w),Ce=t.norm==="gn"&&!(i!=null&&i.disableConeSkip),ye=O(Ve*4,h|$),Q=O(Ve*4,h|$),ee=Array.from({length:l},()=>O(Ce?Ve*4:16,w|$)),W=Array.from({length:l-1},()=>O(Ce?(Ve+B*B)*4:16,w|$)),X=O(16,h|$),V=O(16,h|$),se=Array.from({length:l},()=>O(48,h|$)),Le=Array.from({length:l-1},()=>O(16,h|$)),ze=Math.max(256,y.minUniformBufferOffsetAlignment||256),le=ze>>>2,me=20,Y=Math.max(1,(l-1)*me),Fe=O(Y*ze,h|$),H=new Uint32Array(Y*le);e.queue.writeBuffer(j,0,o?n.wF16:n.wF32),e.queue.writeBuffer(he,0,n.qmetaF32);const qe=Array.from(new Set(t.dilations.slice(1)));let tt;try{tt=yield cs(e,t,n,o,s,r,_,qe)}catch(Xe){for(const be of D)be.destroy();if(D.length=0,M.pooled)rn.get(e)===M&&xn(e);else{for(const be of M.buffers)be.destroy();M.buffers.length=0}throw Xe}const{pInit:Oe,pMomFin:rt,pPrepW:at,pFlush:ut,pNorm:gt,pNormHalo:Ae,pCls:Ze,pConv0:Ye,convPipes:dt}=tt,_t=(Xe,be)=>e.createBindGroup({layout:Xe,entries:be.map((we,ie)=>({binding:ie,resource:we&&we.buffer?we:{buffer:we}}))}),E=_t(Oe.bgl,[T,U,z,N]);{const Xe=e.createCommandEncoder(),be=Xe.beginComputePass();be.setPipeline(Oe.pipe),be.setBindGroup(0,E),be.dispatchWorkgroups(1,B,B),be.end(),e.queue.submit([Xe.finish()])}const Tt=(_.halfPass0?Ye.lo:Ye.main).bgl,zt=_t(Tt,[A,T,U,z,N,L,j,Z,{buffer:he,offset:0,size:t.cs*16},ye,X]),Jt=_t(Ze.bgl,[T,U,z,N,L,j,Z,te,he,Q,V]),Rt=x?O(16,h|$):null,S=x?_t(Ze.bgl,[T,U,z,N,L,j,Z,te,he,Q,Rt]):null,F=gs({device:e,hasF16:o,nvox:a,outBufBytes:f,inpBuf:A,act8_0:T,labels8Buf:te,readbackBuf:R,pInit:Oe,bgInit:E,pCls:Ze,bgCls:Jt,clsUbo:V,packed:n,modelEntry:i,probCfg:r,canGpuProb:x,probSlots:x?{clsUbo1:Rt,bgCls1:S,pass0HoldBuf:q,y0:T,y1:U,b:z,sup:N}:null,ownedBuffers:D,mkBuf:O}),I=se.map((Xe,be)=>_t(rt.bgl,[j,he,Z,Pe,ee[be],Xe])),ce=Le.map((Xe,be)=>_t(gt.bgl,[T,U,z,N,L,Z,W[be],Xe])),fe={buffer:Fe,offset:0,size:32},K=Array.from({length:l},(Xe,be)=>be===0?null:_t(ut.bgl,[T,U,z,N,L,ee[be],fe])),Ue=Array.from({length:l},(Xe,be)=>{if(be===0)return null;const we=t.dilations[be],ie=_.halfPassConv?dt[we].lo:dt[we].main;return _t(ie.bgl,[T,U,z,N,L,Z,Pe,ee[be],fe])}),de=o?new Uint16Array(P):new Float32Array(P),xe=new Uint8Array(B*B),ue=new Uint32Array(Ve),_e=new Uint32Array(Ve+B*B),ve=new Uint32Array(12),ct=new Float32Array(ve.buffer),Re=new Uint32Array(4),je=(Xe,be,we,ie,We,Ke,Ee,vt)=>{const Be=Xe*le;H[Be]=be?1:0,H[Be+1]=we,H[Be+2]=ie,H[Be+3]=We,H[Be+4]=Ke?1:0,H[Be+5]=Ee,H[Be+6]=vt,H[Be+7]=0};function Ie(Xe,be){return ge(this,null,function*(){if(Xe.length!==a)throw new Error(`meshnet_fast_v4 expected ${a} voxels, got ${Xe.length}`);const we=t.norm==="gn"&&!(i!=null&&i.disableConeSkip),ie=yield F.prepareInput({volume:Xe,ioOpts:be,useCone:we,padInputHost:de,headRowHost:xe,hasF16Flag:o}),We=ie.info,Ke=ps(xe,We,t.dilations,we),Ee=new Array(l);for(let $e=0;$e<l;$e++){const Ge=Ke.layers[$e],J=Ge.isFull?Ve:Ge.mainStrips.length,ne=Ge.isFull||!Ge.extStrips?0:Ge.extStrips.length,Ne=Ge.haloRows?Ge.haloRows.length:0;if($e===0){!Ge.isFull&&J>0&&(ue.set(Ge.mainStrips,0),e.queue.writeBuffer(ye,0,ue.subarray(0,J)),e.queue.writeBuffer(ee[0],0,ue.subarray(0,J))),Ee[0]={L:Ge,nMain:J,nExt:ne,nHalo:Ne};continue}const ot=new Uint32Array(8),Ft=new Uint32Array(8),it=new Uint32Array(8),st=new Uint32Array(8);if(!Ge.isFull){if(J>0){ue.set(Ge.mainStrips,0);for(let De=0;De<J;De++)Ft[Ge.mainStrips[De]>>>13]++;let Je=0;for(let De=0;De<8;De++)ot[De]=Je,Je+=Ft[De]}if(Ge.mode==="bwd"&&ne>0){const Je=Array.from({length:8},()=>[]);for(let Pt=0;Pt<ne;Pt++){const ft=Ge.extStrips[Pt];Je[ft>>>13].push((Pt&65535)<<16|ft)}let De=J;for(let Pt=0;Pt<8;Pt++){it[Pt]=De;const ft=Je[Pt];st[Pt]=ft.length;for(let pe=0;pe<ft.length;pe++)ue[De++]=ft[pe]}e.queue.writeBuffer(ee[$e],0,ue.subarray(0,J+ne))}else J>0&&e.queue.writeBuffer(ee[$e],0,ue.subarray(0,J))}const ke=Ge.mode==="rpure"&&Ne>0||Ge.mode==="bwd"&&$e+1<l,re=($e-1)*me,Gt=Ge.bgStrip?Ge.bgStrip.yWg*4:0,pt=Ge.bgStrip?Ge.bgStrip.z:0;for(let Je=0;Je<8;Je++)je(re+Je,Ge.isFull,Je*32,ot[Je],it[Je],ke,Gt,pt);for(let Je=0;Je<6;Je++)je(re+8+Je,Ge.isFull,Je*32,ot[Je],0,!1,0,0),je(re+14+Je,!1,Je*32,it[Je],0,!1,0,0);Ee[$e]={L:Ge,nMain:J,nExt:ne,nHalo:Ne,mainCount:Ft,extCount:st,layerBaseSlot:re}}l>1&&e.queue.writeBuffer(Fe,0,H);let vt=ts(e,i);const Be=[];if(vt==="single"){const $e=e.createCommandEncoder();ie.runPrePasses($e,Be),Ke.clsSkipped&&($e.clearBuffer(te,0,f),Ke.clsStrips.length>0&&e.queue.writeBuffer(Q,0,Ke.clsStrips));for(let Ge=0;Ge<l;Ge++){const J=Ee[Ge],{L:ne,nMain:Ne,nHalo:ot}=J,Ft=ne.nMomExt||0,it=ne.isFull?Ve:ne.normStrips?ne.normStrips.length:0;if(Ge===0){const ke=ne.isFull?64:1,re=ne.isFull?B:Ne,Gt=!!(ne.bgStrip&&ot>0);if(Re[0]=ne.isFull?1:0,Re[1]=ne.bgStrip?ne.bgStrip.yWg*4:0,Re[2]=ne.bgStrip?ne.bgStrip.z:0,Re[3]=0,e.queue.writeBuffer(X,0,Re),_.halfPass0)for(const[pt,Je]of[[Ye.lo,Ye.bgLo],[Ye.hi,Ye.bgHi]]){const De=$e.beginComputePass();De.setBindGroup(0,zt),re>0&&(De.setPipeline(pt.pipe),De.dispatchWorkgroups(1,ke,re)),Gt&&(De.setPipeline(Je.pipe),De.dispatchWorkgroups(1,1,1)),De.end(),Be.push("conv0")}else{const pt=$e.beginComputePass();pt.setBindGroup(0,zt),re>0&&(pt.setPipeline(Ye.main.pipe),pt.dispatchWorkgroups(1,ke,re)),Gt&&(pt.setPipeline(Ye.bg.pipe),pt.dispatchWorkgroups(1,1,1)),pt.end(),Be.push("conv0")}}else{const ke=t.dilations[Ge],re=dt[ke],Gt=Ue[Ge],pt=K[Ge],{mainCount:Je,extCount:De,layerBaseSlot:Pt}=J,ft=ne.mode==="rpure"&&!!ne.bgStrip;for(let pe=0;pe<8;pe++){if(pe>=2){const lt=pe-2,$t=ne.isFull||Je[lt]>0,et=!ne.isFull&&ne.mode==="bwd"&&De[lt]>0;if($t||et){const Me=$e.beginComputePass();Me.setPipeline(ut.pipe),$t&&(Me.setBindGroup(0,pt,[(Pt+8+lt)*ze]),Me.dispatchWorkgroups(1,ne.isFull?64:1,ne.isFull?32:Je[lt])),et&&(Me.setBindGroup(0,pt,[(Pt+14+lt)*ze]),Me.dispatchWorkgroups(1,1,De[lt])),Me.end(),Be.push("flushStage")}}const ae=ne.isFull||Je[pe]>0,Se=!ne.isFull&&ne.mode==="bwd"&&De[pe]>0,kt=pe===0&&ft;if(!ae&&!Se&&!kt)continue;const Dt=[(Pt+pe)*ze],ht=ne.isFull?64:1,yt=ne.isFull?32:Je[pe];if(_.halfPassConv)for(const[lt,$t,et]of[[re.lo,re.extLo,re.bgLo],[re.hi,re.extHi,re.bgHi]]){const Me=$e.beginComputePass();Me.setBindGroup(0,Gt,Dt),ae&&(Me.setPipeline(lt.pipe),Me.dispatchWorkgroups(1,ht,yt)),Se&&(Me.setPipeline($t.pipe),Me.dispatchWorkgroups(1,1,De[pe])),kt&&(Me.setPipeline(et.pipe),Me.dispatchWorkgroups(1,1,1)),Me.end(),Be.push("convHidden")}else{const lt=$e.beginComputePass();lt.setBindGroup(0,Gt,Dt),ae&&(lt.setPipeline(re.main.pipe),lt.dispatchWorkgroups(1,ht,yt)),Se&&(lt.setPipeline(re.ext.pipe),lt.dispatchWorkgroups(1,1,De[pe])),kt&&(lt.setPipeline(re.bg.pipe),lt.dispatchWorkgroups(1,1,1)),lt.end(),Be.push("convHidden")}}}const st=Ge+1<l?n.w0Vec4s+Ge*n.hiddenVec4PerLayer:0;ve[0]=Ge*n.metaStride,ve[1]=st,ve[2]=(Ge+1)*n.metaStride,ve[3]=Ge+1<l?1:0,ve[4]=Ge===0?1:0,ve[5]=ne.isFull?1:0,ve[6]=Ne,ve[7]=Ft*8,ct[8]=ne.extWeight||0,ve[9]=0,ve[10]=0,ve[11]=0,e.queue.writeBuffer(se[Ge],0,ve);{const ke=$e.beginComputePass();ke.setBindGroup(0,I[Ge]),ke.setPipeline(rt.pipe),ke.dispatchWorkgroups(t.cs,1,1),ke.end(),Be.push("momentsPrep")}if(Ge+1<l){{const re=$e.beginComputePass();re.setBindGroup(0,I[Ge]),re.setPipeline(at.pipe),re.dispatchWorkgroups(1,1,1),re.end(),Be.push("momentsPrep")}const ke=ne.isFull?0:it;if((ke>0||ot>0)&&(ke>0&&_e.set(ne.normStrips,0),ot>0&&_e.set(ne.haloRows,ke),e.queue.writeBuffer(W[Ge],0,_e.subarray(0,ke+ot))),Re[0]=ne.isFull?1:0,Re[1]=ne.bgStrip?ne.bgStrip.z*B+ne.bgStrip.yWg*4:0,Re[2]=ke,Re[3]=ot,e.queue.writeBuffer(Le[Ge],0,Re),ne.isFull||it>0||ot>0){const re=$e.beginComputePass();re.setBindGroup(0,ce[Ge]),(ne.isFull||it>0)&&(re.setPipeline(gt.pipe),re.dispatchWorkgroups(1,ne.isFull?64:1,ne.isFull?B:it)),ot>0&&(re.setPipeline(Ae.pipe),re.dispatchWorkgroups(1,Math.ceil(ot/4),1)),re.end(),Be.push("normHalo")}}}return Ie.__passCategories=Be,F.finishAndReadback({enc:$e,schedule:Ke,passCategories:Be,u4Tmp:Re,ioOpts:be})}const Lt=typeof(be==null?void 0:be.onProgress)=="function"?be.onProgress:null,Te=ss(Ke,l);let mt=0,Wt=-1,xt=e.__v4MsPerStrip||.12;const Mt=$e=>{if(!Lt)return;const Ge=Math.min(.99,mt/Te);let J="";$e>=0&&$e!==Wt&&(Wt=$e,J=`Layer ${$e+1}/${l}`),Lt(Ge,J)};let nt=e.createCommandEncoder();ie.runPrePasses(nt,Be),Ke.clsSkipped&&(nt.clearBuffer(te,0,f),Ke.clsStrips.length>0&&e.queue.writeBuffer(Q,0,Ke.clsStrips));for(let $e=0;$e<l;$e++){const Ge=Ee[$e],{L:J,nMain:ne,nHalo:Ne}=Ge,ot=J.nMomExt||0,Ft=J.isFull?Ve:J.normStrips?J.normStrips.length:0,it=co(J,$e,l);if($e===0){const ke=J.isFull?64:1,re=J.isFull?B:ne,Gt=!!(J.bgStrip&&Ne>0);if(Re[0]=J.isFull?1:0,Re[1]=J.bgStrip?J.bgStrip.yWg*4:0,Re[2]=J.bgStrip?J.bgStrip.z:0,Re[3]=0,e.queue.writeBuffer(X,0,Re),_.halfPass0)for(const[pt,Je]of[[Ye.lo,Ye.bgLo],[Ye.hi,Ye.bgHi]]){const De=nt.beginComputePass();De.setBindGroup(0,zt),re>0&&(De.setPipeline(pt.pipe),De.dispatchWorkgroups(1,ke,re)),Gt&&(De.setPipeline(Je.pipe),De.dispatchWorkgroups(1,1,1)),De.end(),Be.push("conv0")}else{const pt=nt.beginComputePass();pt.setBindGroup(0,zt),re>0&&(pt.setPipeline(Ye.main.pipe),pt.dispatchWorkgroups(1,ke,re)),Gt&&(pt.setPipeline(Ye.bg.pipe),pt.dispatchWorkgroups(1,1,1)),pt.end(),Be.push("conv0")}}else{const ke=t.dilations[$e],re=dt[ke],Gt=Ue[$e],pt=K[$e],{mainCount:Je,extCount:De,layerBaseSlot:Pt}=Ge,ft=J.mode==="rpure"&&!!J.bgStrip;let pe=0;for(let ae=0;ae<8;ae++){if(ae>=2){const ht=ae-2,yt=J.isFull||Je[ht]>0,lt=!J.isFull&&J.mode==="bwd"&&De[ht]>0;if(yt||lt){const $t=nt.beginComputePass();$t.setPipeline(ut.pipe),yt&&($t.setBindGroup(0,pt,[(Pt+8+ht)*ze]),$t.dispatchWorkgroups(1,J.isFull?64:1,J.isFull?32:Je[ht])),lt&&($t.setBindGroup(0,pt,[(Pt+14+ht)*ze]),$t.dispatchWorkgroups(1,1,De[ht])),$t.end(),Be.push("flushStage")}}const Se=J.isFull||Je[ae]>0,kt=!J.isFull&&J.mode==="bwd"&&De[ae]>0,Dt=ae===0&&ft;if(Se||kt||Dt){const ht=[(Pt+ae)*ze],yt=J.isFull?64:1,lt=J.isFull?32:Je[ae];if(_.halfPassConv)for(const[$t,et,Me]of[[re.lo,re.extLo,re.bgLo],[re.hi,re.extHi,re.bgHi]]){const Ct=nt.beginComputePass();Ct.setBindGroup(0,Gt,ht),Se&&(Ct.setPipeline($t.pipe),Ct.dispatchWorkgroups(1,yt,lt)),kt&&(Ct.setPipeline(et.pipe),Ct.dispatchWorkgroups(1,1,De[ae])),Dt&&(Ct.setPipeline(Me.pipe),Ct.dispatchWorkgroups(1,1,1)),Ct.end(),Be.push("convHidden")}else{const $t=nt.beginComputePass();$t.setBindGroup(0,Gt,ht),Se&&($t.setPipeline(re.main.pipe),$t.dispatchWorkgroups(1,yt,lt)),kt&&($t.setPipeline(re.ext.pipe),$t.dispatchWorkgroups(1,1,De[ae])),Dt&&($t.setPipeline(re.bg.pipe),$t.dispatchWorkgroups(1,1,1)),$t.end(),Be.push("convHidden")}pe+=(Se?J.isFull?2048:Je[ae]:0)+(kt?De[ae]:0)}if(vt==="calibrate"&&(pe>=512||ae===7&&pe>0)){const ht=performance.now();e.queue.submit([nt.finish()]),yield e.queue.onSubmittedWorkDone();const yt=performance.now()-ht;if(nt=e.createCommandEncoder(),mt+=pe,pe>=512){xt=yt/pe;const lt=xt*Ve;e.__v4WinCalibrated=!0,e.__v4MsPerStrip=xt,lt<Qo?(e.__v4WinFast=!0,vt="pipelined",console.log(`[WebGPU-V4-128M] Windows GPU calibration: estFullLayer=${lt.toFixed(1)}ms -> unthrottled pipelined mode`)):(e.__v4WinFast=!1,vt="paced",console.log(`[WebGPU-V4-128M] Windows GPU calibration: estFullLayer=${lt.toFixed(1)}ms -> TDR-safe paced mode`),Mt($e),yield vn())}pe=0}else if(vt==="paced"&&pe>0&&(pe*xt>=Jo*.75||ae===7)){const ht=performance.now();e.queue.submit([nt.finish()]),yield e.queue.onSubmittedWorkDone();const yt=performance.now()-ht;nt=e.createCommandEncoder(),pe>=256&&yt>.2&&(xt=.7*xt+.3*(yt/pe),e.__v4MsPerStrip=xt),mt+=pe,pe=0,Mt($e),yield vn()}}}const st=$e+1<l?n.w0Vec4s+$e*n.hiddenVec4PerLayer:0;ve[0]=$e*n.metaStride,ve[1]=st,ve[2]=($e+1)*n.metaStride,ve[3]=$e+1<l?1:0,ve[4]=$e===0?1:0,ve[5]=J.isFull?1:0,ve[6]=ne,ve[7]=ot*8,ct[8]=J.extWeight||0,ve[9]=0,ve[10]=0,ve[11]=0,e.queue.writeBuffer(se[$e],0,ve);{const ke=nt.beginComputePass();ke.setBindGroup(0,I[$e]),ke.setPipeline(rt.pipe),ke.dispatchWorkgroups(t.cs,1,1),ke.end(),Be.push("momentsPrep")}if($e+1<l){{const re=nt.beginComputePass();re.setBindGroup(0,I[$e]),re.setPipeline(at.pipe),re.dispatchWorkgroups(1,1,1),re.end(),Be.push("momentsPrep")}const ke=J.isFull?0:Ft;if((ke>0||Ne>0)&&(ke>0&&_e.set(J.normStrips,0),Ne>0&&_e.set(J.haloRows,ke),e.queue.writeBuffer(W[$e],0,_e.subarray(0,ke+Ne))),Re[0]=J.isFull?1:0,Re[1]=J.bgStrip?J.bgStrip.z*B+J.bgStrip.yWg*4:0,Re[2]=ke,Re[3]=Ne,e.queue.writeBuffer(Le[$e],0,Re),J.isFull||Ft>0||Ne>0){const re=nt.beginComputePass();re.setBindGroup(0,ce[$e]),(J.isFull||Ft>0)&&(re.setPipeline(gt.pipe),re.dispatchWorkgroups(1,J.isFull?64:1,J.isFull?B:Ft)),Ne>0&&(re.setPipeline(Ae.pipe),re.dispatchWorkgroups(1,Math.ceil(Ne/4),1)),re.end(),Be.push("normHalo")}}if(vt==="pipelined")e.queue.submit([nt.finish()]),nt=e.createCommandEncoder();else{const ke=performance.now();e.queue.submit([nt.finish()]),yield e.queue.onSubmittedWorkDone();const re=performance.now()-ke;nt=e.createCommandEncoder(),mt+=($e===0?it.convWork:0)+it.normWork,$e===0&&vt==="calibrate"&&re>=90&&(e.__v4WinCalibrated=!0,e.__v4WinFast=!1,vt="paced",console.log(`[WebGPU-V4-128M] Windows GPU calibration (conv0=${re.toFixed(1)}ms) -> TDR-safe paced mode`)),vt==="paced"&&(Mt($e),($e===0||re>=30)&&(yield vn()))}}return Ie.__passCategories=Be,F.finishAndReadback({enc:nt,schedule:Ke,passCategories:Be,u4Tmp:Re,ioOpts:be,paced:vt==="paced",onProgress:Lt})})}return F.warmupIoPipelines(),Ie.dispose=({keepSharedWorkspace:Xe=!1}={})=>{F.dispose();for(const be of D)be.destroy();if(D.length=0,oe.resetBytes(),M.pooled)Xe?M.inUse=!1:rn.get(e)===M&&xn(e);else{for(const be of M.buffers)be.destroy();M.buffers.length=0}},Ie.gpuBytes=()=>M.bytes+oe.getBytes(),Ie.__passCategories=[],Ie.__coneInfo=()=>({paddedVox:P,actMiB:g/1048576,mode:"LowMem128"}),Ie.kernels="v4-int8",Ie})}const ws=!0;function mo(s,i,r){return ge(this,arguments,function*(e,t,n,o={}){var Wt,xt,Mt,nt,$e,Ge;const a=t instanceof Uint8Array?t:new Uint8Array(t),f=jo(a.buffer.slice(a.byteOffset,a.byteOffset+a.byteLength)),l=Xo(f);o!=null&&o.classifierBias&&l.classifier&&(l.classifier.bias=Float32Array.from(o.classifierBias));const c=lo(o),g=(o==null?void 0:o.dilations)||(c==null?void 0:c.dilations)||(l.convs.length===25?[16,8,4,2,1,16,8,4,2,1,16,8,4,2,1,16,8,4,2,1,16,8,4,2,1]:l.convs.length===9?[1,2,4,8,16,8,4,2,1]:Zo),d=(o==null?void 0:o.activation)||(c==null?void 0:c.activation)||(l.affines.length||l.convs.length>=13?"gelu_tanh":"relu"),u=l.convs[0].outC,p=u>8?Math.ceil(u/8)*8:Math.ceil(u/4)*4,m=Yo(l,{nx:B,ny:B,nz:B,cs:p,activation:d,dilations:g}),y=Cr(a,l,m,o),k=(o==null?void 0:o.outputType)==="probability"?Sr(o,m.nclass):null,_=!!((xt=(Wt=e.features)==null?void 0:Wt.has)!=null&&xt.call(Wt,"shader-f16"))&&!(o!=null&&o.disableF16),w=e.__adapterInfo||e.adapterInfo||{},h=!!((nt=(Mt=e.features)==null?void 0:Mt.has)!=null&&nt.call(Mt,"subgroups"))&&w.subgroupMinSize===32&&w.subgroupMaxSize===32&&!(o!=null&&o.disableSubgroups),$=B*B*B,b=k?$*4:$,P=m.cs>=16,C=P?m.cs/2:m.cs,v=B*B*C*wt*4,x=B*B*C*At*4,G=e.limits||{},M=Math.min(($e=G.maxStorageBufferBindingSize)!=null?$e:1/0,(Ge=G.maxBufferSize)!=null?Ge:1/0),A=os(e,m,o);if((o!=null&&o.forceLowMem128||A||v>M||b>M)&&m.cs>=8&&m.cs%4===0)return Gr(e,m,y,_,h,o,k);if(v>M||b>M){const J=Math.max(v,b)>>>20;throw new Error(`meshnet_fast_v4: buffer (${J} MiB) exceeds device limit (${M>>>20} MiB)`)}const T=ns(e,o),U=_s({cs:m.cs,chan:m.chan,nclass:m.nclass,clsK4:y.clsK4,dilations:m.dilations,activation:m.activation,norm:m.norm,hasF16:_,hasSubgroups32:h,splitHalves:P,probCfg:k,chunkableStd:T});console.log(`[WebGPU-V4] ${m.chan}ch(cs=${m.cs})/${m.nclass}cls (${m.dilations.length} convs, ${m.activation}, norm=${m.norm}${k?", prob=3":""}) | ${_?"f16+sterbenz":"f32"} | ${h?"subgroups32":"shared-8KiB"} | ZYCX-pad80 | maxBuf=${(Math.max(v,b)/1048576).toFixed(1)} MiB`);const z=GPUBufferUsage.STORAGE,N=GPUBufferUsage.COPY_DST,L=GPUBufferUsage.COPY_SRC,Z=B*B*pn,te=Z*(_?2:4),R=Ln*m.cs*16,q=Ko*m.cs*16,D=(m.cs*2+4)*16,oe=_?Math.ceil(U.totalWEffVec4s/2)*16:U.totalWEffVec4s*16,O=`std|${m.cs}|${P?1:0}|${_?1:0}|${b}`,j=is(e,O,()=>{const J=[],ne=En(e,J),Ne=ne.alloc,ot={inpBuf:Ne(te,z|N|L),act8_0:Ne(v,z|N|L),act8_1:Ne(P?v:16,z|N|L),y8_0:Ne(x,z|N|L),y8_1:Ne(P?x:16,z|N|L),momMainBuf:Ne(R,z),momExtBuf:Ne(q,z),momStatsBuf:Ne(D,z),labels8Buf:Ne(b,z|N|L),readbackBuf:Ne(b,GPUBufferUsage.MAP_READ|N)};return{buffers:J,named:ot,bytes:ne.getBytes()}}),{inpBuf:he,act8_0:Pe,act8_1:Ce,y8_0:ye,y8_1:Q,momMainBuf:ee,momExtBuf:W,momStatsBuf:X,labels8Buf:V,readbackBuf:se}=j.named,Le=[],ze=En(e,Le),le=ze.alloc,me=le(_?y.wF16.byteLength:y.wF32.byteLength,z|N),Y=le(y.qmetaF32.byteLength,z|N),Fe=le(oe,U.useUniformWeff?z|GPUBufferUsage.UNIFORM:z),H=m.dilations.length,qe=m.norm==="gn"&&!(o!=null&&o.disableConeSkip),tt=Array.from({length:H},()=>le(qe?Ve*4:16,z|N)),Oe=Array.from({length:H-1},()=>le(qe?(Ve+B*B)*4:16,z|N)),rt=le(qe?Ve*4:16,z|N),at=le(16,GPUBufferUsage.UNIFORM|N),ut=le(16,GPUBufferUsage.UNIFORM|N),gt=Array.from({length:H},()=>le(48,GPUBufferUsage.UNIFORM|N)),Ae=Array.from({length:H-1},()=>le(16,GPUBufferUsage.UNIFORM|N)),Ze=Math.max(256,G.minUniformBufferOffsetAlignment||256),Ye=Ze>>>2,dt=U.chunkableStd?Math.max(1,(H-1)*Yn):0,_t=U.chunkableStd?le(dt*Ze,GPUBufferUsage.UNIFORM|N):null,E=U.chunkableStd?new Uint32Array(dt*Ye):null,Tt=U.chunkableStd?null:Array.from({length:H},()=>le(16,GPUBufferUsage.UNIFORM|N));e.queue.writeBuffer(me,0,_?y.wF16:y.wF32),e.queue.writeBuffer(Y,0,y.qmetaF32);const zt=Array.from(new Set(m.dilations.slice(1)));let Jt;try{Jt=yield fs(e,m,y,_,h,P,k,U,zt)}catch(J){for(const ne of Le)ne.destroy();if(Le.length=0,j.pooled)rn.get(e)===j&&xn(e);else{for(const ne of j.buffers)ne.destroy();j.buffers.length=0}throw J}const{pInit:Rt,pMomFin:S,pPrepW:F,pNorm:I,pNormHalo:ce,pCls:fe,pConv0:K,convPipes:Ue}=Jt,de=(J,ne)=>e.createBindGroup({layout:J,entries:ne.map((Ne,ot)=>({binding:ot,resource:Ne&&Ne.buffer?Ne:{buffer:Ne}}))}),xe=de(Rt.bgl,[Pe,Ce]);{const J=e.createCommandEncoder(),ne=J.beginComputePass();ne.setPipeline(Rt.pipe),ne.setBindGroup(0,xe),ne.dispatchWorkgroups(1,B,B),ne.end(),e.queue.submit([J.finish()])}const ue=(U.halfPass0?K.lo:K.main).bgl,_e=de(ue,[he,ye,Q,me,Y,ee,W,tt[0],at]),ve=de(fe.bgl,[ye,Q,me,Y,ee,X,V,rt,ut]),ct=!!(k&&P&&v>=b&&x>=b),Re=ct?le(16,GPUBufferUsage.UNIFORM|N):null,je=ct?de(fe.bgl,[ye,Q,me,Y,ee,X,V,rt,Re]):null,Ie=gs({device:e,hasF16:_,nvox:$,outBufBytes:b,inpBuf:he,act8_0:Pe,labels8Buf:V,readbackBuf:se,pInit:Rt,bgInit:xe,pCls:fe,bgCls:ve,clsUbo:ut,packed:y,modelEntry:o,probCfg:k,canGpuProb:ct,probSlots:ct?{clsUbo1:Re,bgCls1:je,pass0HoldBuf:Pe,y0:ye,y1:Q,b:Ce,sup:Pe}:null,ownedBuffers:Le,mkBuf:le}),Qe=gt.map((J,ne)=>de(S.bgl,[me,Y,ee,W,X,Fe,tt[ne],J])),Bt=Ae.map((J,ne)=>de(I.bgl,[Pe,Ce,ye,Q,ee,W,X,Oe[ne],J])),Xe=U.chunkableStd?{buffer:_t,offset:0,size:32}:null,be=Array.from({length:H},(J,ne)=>{if(ne===0)return null;const Ne=m.dilations[ne],ot=U.halfPassConv?Ue[Ne].lo:Ue[Ne].main;return de(ot.bgl,[Pe,Ce,ye,Q,ee,W,Fe,tt[ne],U.chunkableStd?Xe:Tt[ne]])}),we=(J,ne,Ne,ot,Ft,it)=>{const st=J*Ye;E[st]=ne?1:0,E[st+1]=Ne,E[st+2]=ot?1:0,E[st+3]=0,E[st+4]=Ft,E[st+5]=it,E[st+6]=0,E[st+7]=0},ie=(J,ne,Ne,ot,Ft,it,st,ke)=>{if(!(it<=0&&st<=0))if(U.halfPassConv){{const re=J.beginComputePass();ot?re.setBindGroup(0,Ne,ot):re.setBindGroup(0,Ne),it>0&&(re.setPipeline(ne.lo.pipe),re.dispatchWorkgroups(1,Ft,it)),st>0&&(re.setPipeline(ne.extLo.pipe),re.dispatchWorkgroups(1,1,st)),re.end(),ke.push("convHidden")}{const re=J.beginComputePass();ot?re.setBindGroup(0,Ne,ot):re.setBindGroup(0,Ne),it>0&&(re.setPipeline(ne.hi.pipe),re.dispatchWorkgroups(1,Ft,it)),st>0&&(re.setPipeline(ne.extHi.pipe),re.dispatchWorkgroups(1,1,st)),re.end(),ke.push("convHidden")}}else{const re=J.beginComputePass();ot?re.setBindGroup(0,Ne,ot):re.setBindGroup(0,Ne),it>0&&(re.setPipeline(ne.main.pipe),re.dispatchWorkgroups(1,Ft,it)),st>0&&(re.setPipeline(ne.ext.pipe),re.dispatchWorkgroups(1,1,st)),re.end(),ke.push("convHidden")}},We=_?new Uint16Array(Z):new Float32Array(Z),Ke=new Uint8Array(B*B),Ee=new Uint32Array(Ve),vt=new Uint32Array(Ve+B*B),Be=new Uint32Array(12),Lt=new Float32Array(Be.buffer),Te=new Uint32Array(4);function mt(J,ne){return ge(this,null,function*(){if(J.length!==$)throw new Error(`meshnet_fast_v4 expected ${$} voxels, got ${J.length}`);const Ne=m.norm==="gn"&&!(o!=null&&o.disableConeSkip),ot=yield Ie.prepareInput({volume:J,ioOpts:ne,useCone:Ne,padInputHost:We,headRowHost:Ke,hasF16Flag:_}),Ft=ot.info,it=ps(Ke,Ft,m.dilations,Ne);let st=ts(e,o);const ke=[];if(st==="single"&&!U.chunkableStd){const pe=e.createCommandEncoder();ot.runPrePasses(pe,ke),it.clsSkipped&&(pe.clearBuffer(V,0,b),it.clsStrips.length>0&&e.queue.writeBuffer(rt,0,it.clsStrips));for(let ae=0;ae<H;ae++){const Se=it.layers[ae],kt=Se.isFull?Ve:Se.mainStrips.length,Dt=Se.isFull||!Se.extStrips?0:Se.extStrips.length,ht=Se.nMomExt||0,yt=Se.haloRows?Se.haloRows.length:0,lt=Se.isFull?Ve:Se.normStrips?Se.normStrips.length:0;if(!Se.isFull&&(kt>0||Dt>0)&&(kt>0&&Ee.set(Se.mainStrips,0),Dt>0&&Ee.set(Se.extStrips,kt),e.queue.writeBuffer(tt[ae],0,Ee.subarray(0,kt+Dt))),ae===0){const et=Se.isFull?64:1,Me=Se.isFull?B:kt,Ct=!!(Se.bgStrip&&yt>0);if(Te[0]=Se.isFull?1:0,Te[1]=Se.bgStrip?Se.bgStrip.yWg*4:0,Te[2]=Se.bgStrip?Se.bgStrip.z:0,Te[3]=0,e.queue.writeBuffer(at,0,Te),U.halfPass0){{const He=pe.beginComputePass();He.setBindGroup(0,_e),Me>0&&(He.setPipeline(K.lo.pipe),He.dispatchWorkgroups(1,et,Me)),Ct&&(He.setPipeline(K.bgLo.pipe),He.dispatchWorkgroups(1,1,1)),He.end(),ke.push("conv0")}{const He=pe.beginComputePass();He.setBindGroup(0,_e),Me>0&&(He.setPipeline(K.hi.pipe),He.dispatchWorkgroups(1,et,Me)),Ct&&(He.setPipeline(K.bgHi.pipe),He.dispatchWorkgroups(1,1,1)),He.end(),ke.push("conv0")}}else{const He=pe.beginComputePass();He.setBindGroup(0,_e),Me>0&&(He.setPipeline(K.main.pipe),He.dispatchWorkgroups(1,et,Me)),Ct&&(He.setPipeline(K.bg.pipe),He.dispatchWorkgroups(1,1,1)),He.end(),ke.push("conv0")}}else{const et=m.dilations[ae],Me=Ue[et],Ct=be[ae],He=Se.isFull?64:1,Wn=Se.isFull?B:kt,gn=Se.mode==="rpure"&&yt>0||Se.mode==="bwd"&&ae+1<H;Te[0]=Se.isFull?1:0,Te[1]=kt,Te[2]=gn?1:0,Te[3]=0,e.queue.writeBuffer(Tt[ae],0,Te),ie(pe,Me,Ct,null,He,Wn,Dt,ke)}const $t=ae+1<H?y.w0Vec4s+ae*y.hiddenVec4PerLayer:0;Be[0]=ae*y.metaStride,Be[1]=$t,Be[2]=(ae+1)*y.metaStride,Be[3]=ae+1<H?1:0,Be[4]=ae===0?1:0,Be[5]=Se.isFull?1:0,Be[6]=kt,Be[7]=ht*8,Lt[8]=Se.extWeight||0,Be[9]=0,Be[10]=0,Be[11]=0,e.queue.writeBuffer(gt[ae],0,Be);{const et=pe.beginComputePass();et.setBindGroup(0,Qe[ae]),et.setPipeline(S.pipe),et.dispatchWorkgroups(m.cs,1,1),et.end(),ke.push("momentsPrep")}if(ae+1<H){{const Me=pe.beginComputePass();Me.setBindGroup(0,Qe[ae]),Me.setPipeline(F.pipe),Me.dispatchWorkgroups(1,1,1),Me.end(),ke.push("momentsPrep")}const et=Se.isFull?0:lt;if((et>0||yt>0)&&(et>0&&vt.set(Se.normStrips,0),yt>0&&vt.set(Se.haloRows,et),e.queue.writeBuffer(Oe[ae],0,vt.subarray(0,et+yt))),Te[0]=Se.isFull?1:0,Te[1]=Se.bgStrip?Se.bgStrip.z*B+Se.bgStrip.yWg*4:0,Te[2]=et,Te[3]=yt,e.queue.writeBuffer(Ae[ae],0,Te),Se.isFull||lt>0||yt>0){const Me=pe.beginComputePass();Me.setBindGroup(0,Bt[ae]),(Se.isFull||lt>0)&&(Me.setPipeline(I.pipe),Me.dispatchWorkgroups(1,Se.isFull?64:1,Se.isFull?B:lt)),yt>0&&(Me.setPipeline(ce.pipe),Me.dispatchWorkgroups(1,Math.ceil(yt/4),1)),Me.end(),ke.push("normHalo")}}}return mt.__passCategories=ke,Ie.finishAndReadback({enc:pe,schedule:it,passCategories:ke,u4Tmp:Te,ioOpts:ne})}const re=typeof(ne==null?void 0:ne.onProgress)=="function"?ne.onProgress:null,Gt=ss(it,H);let pt=0,Je=-1,De=e.__v4MsPerStrip||.12;const Pt=pe=>{if(!re)return;const ae=Math.min(.99,pt/Gt);let Se="";pe>=0&&pe!==Je&&(Je=pe,Se=`Layer ${pe+1}/${H}`),re(ae,Se)};let ft=e.createCommandEncoder();ot.runPrePasses(ft,ke),it.clsSkipped&&(ft.clearBuffer(V,0,b),it.clsStrips.length>0&&e.queue.writeBuffer(rt,0,it.clsStrips));for(let pe=0;pe<H;pe++){const ae=it.layers[pe],Se=ae.isFull?Ve:ae.mainStrips.length,kt=ae.isFull||!ae.extStrips?0:ae.extStrips.length,Dt=ae.nMomExt||0,ht=ae.haloRows?ae.haloRows.length:0,yt=ae.isFull?Ve:ae.normStrips?ae.normStrips.length:0,lt=co(ae,pe,H);if(!ae.isFull&&(Se>0||kt>0)&&(Se>0&&Ee.set(ae.mainStrips,0),kt>0&&Ee.set(ae.extStrips,Se),e.queue.writeBuffer(tt[pe],0,Ee.subarray(0,Se+kt))),pe===0){const et=ae.isFull?64:1,Me=ae.isFull?B:Se,Ct=!!(ae.bgStrip&&ht>0);if(Te[0]=ae.isFull?1:0,Te[1]=ae.bgStrip?ae.bgStrip.yWg*4:0,Te[2]=ae.bgStrip?ae.bgStrip.z:0,Te[3]=0,e.queue.writeBuffer(at,0,Te),U.halfPass0){{const He=ft.beginComputePass();He.setBindGroup(0,_e),Me>0&&(He.setPipeline(K.lo.pipe),He.dispatchWorkgroups(1,et,Me)),Ct&&(He.setPipeline(K.bgLo.pipe),He.dispatchWorkgroups(1,1,1)),He.end(),ke.push("conv0")}{const He=ft.beginComputePass();He.setBindGroup(0,_e),Me>0&&(He.setPipeline(K.hi.pipe),He.dispatchWorkgroups(1,et,Me)),Ct&&(He.setPipeline(K.bgHi.pipe),He.dispatchWorkgroups(1,1,1)),He.end(),ke.push("conv0")}}else{const He=ft.beginComputePass();He.setBindGroup(0,_e),Me>0&&(He.setPipeline(K.main.pipe),He.dispatchWorkgroups(1,et,Me)),Ct&&(He.setPipeline(K.bg.pipe),He.dispatchWorkgroups(1,1,1)),He.end(),ke.push("conv0")}}else{const et=m.dilations[pe],Me=Ue[et],Ct=be[pe],He=ae.isFull?64:1,Wn=ae.isFull?B:Se,gn=ae.mode==="rpure"&&ht>0||ae.mode==="bwd"&&pe+1<H;if(!U.chunkableStd)Te[0]=ae.isFull?1:0,Te[1]=Se,Te[2]=gn?1:0,Te[3]=0,e.queue.writeBuffer(Tt[pe],0,Te),ie(ft,Me,Ct,null,He,Wn,kt,ke);else if(st==="pipelined"||st==="single"){const Yt=(pe-1)*Yn;we(Yt,ae.isFull,Se,gn,0,0),e.queue.writeBuffer(_t,Yt*Ze,E.subarray(Yt*Ye,(Yt+1)*Ye)),ie(ft,Me,Ct,[Yt*Ze],He,Wn,kt,ke)}else{const Yt=(pe-1)*Yn,On=st==="calibrate"?1024:Math.max(256,Math.min(4096,Math.round(Jo/Math.max(.005,De)))),$n=[];let Bn=0;if(ae.isFull){const en=Math.max(4,Math.min(64,Math.round(On/64)));for(let Vt=0;Vt<B;Vt+=en){const Et=Math.min(en,B-Vt),Kt=Yt+Bn++;we(Kt,!0,Se,gn,Vt,0),$n.push({slotIdx:Kt,mainY:64,mainCountZ:Et,extCountZ:0,strips:Et*64})}}else{const en=Math.max(256,On);for(let Et=0;Et<Se;Et+=en){const Kt=Math.min(en,Se-Et),tn=Yt+Bn++;we(tn,!1,Se,gn,Et,0),$n.push({slotIdx:tn,mainY:1,mainCountZ:Kt,extCountZ:0,strips:Kt})}const Vt=Math.max(256,On);for(let Et=0;Et<kt;Et+=Vt){const Kt=Math.min(Vt,kt-Et),tn=Yt+Bn++;we(tn,!1,Se,gn,0,Et),$n.push({slotIdx:tn,mainY:1,mainCountZ:0,extCountZ:Kt,strips:Kt})}}Bn>0&&e.queue.writeBuffer(_t,Yt*Ze,E.subarray(Yt*Ye,(Yt+Bn)*Ye));let Qt=0;for(let en=0;en<$n.length;en++){const Vt=$n[en];if(ie(ft,Me,Ct,[Vt.slotIdx*Ze],Vt.mainY,Vt.mainCountZ,Vt.extCountZ,ke),st==="pipelined")continue;Qt+=Vt.strips;const Et=en===$n.length-1;if(st==="calibrate"&&(Qt>=512||Et&&Qt>0)){const Kt=performance.now();e.queue.submit([ft.finish()]),yield e.queue.onSubmittedWorkDone();const tn=performance.now()-Kt;if(ft=e.createCommandEncoder(),pt+=Qt,Qt>=512){De=tn/Qt;const Dn=De*Ve;e.__v4WinCalibrated=!0,e.__v4MsPerStrip=De,Dn<Qo?(e.__v4WinFast=!0,st="pipelined",console.log(`[WebGPU-V4] Windows GPU calibration: estFullLayer=${Dn.toFixed(1)}ms -> unthrottled pipelined mode`)):(e.__v4WinFast=!1,st="paced",console.log(`[WebGPU-V4] Windows GPU calibration: estFullLayer=${Dn.toFixed(1)}ms -> TDR-safe paced mode`),Pt(pe),yield vn())}Qt=0}else if(st==="paced"){const Kt=performance.now();e.queue.submit([ft.finish()]),yield e.queue.onSubmittedWorkDone();const tn=performance.now()-Kt;ft=e.createCommandEncoder(),Qt>=256&&tn>.2&&(De=.7*De+.3*(tn/Qt),e.__v4MsPerStrip=De),pt+=Qt,Qt=0,Pt(pe),yield vn()}}}}const $t=pe+1<H?y.w0Vec4s+pe*y.hiddenVec4PerLayer:0;Be[0]=pe*y.metaStride,Be[1]=$t,Be[2]=(pe+1)*y.metaStride,Be[3]=pe+1<H?1:0,Be[4]=pe===0?1:0,Be[5]=ae.isFull?1:0,Be[6]=Se,Be[7]=Dt*8,Lt[8]=ae.extWeight||0,Be[9]=0,Be[10]=0,Be[11]=0,e.queue.writeBuffer(gt[pe],0,Be);{const et=ft.beginComputePass();et.setBindGroup(0,Qe[pe]),et.setPipeline(S.pipe),et.dispatchWorkgroups(m.cs,1,1),et.end(),ke.push("momentsPrep")}if(pe+1<H){{const Me=ft.beginComputePass();Me.setBindGroup(0,Qe[pe]),Me.setPipeline(F.pipe),Me.dispatchWorkgroups(1,1,1),Me.end(),ke.push("momentsPrep")}const et=ae.isFull?0:yt;if((et>0||ht>0)&&(et>0&&vt.set(ae.normStrips,0),ht>0&&vt.set(ae.haloRows,et),e.queue.writeBuffer(Oe[pe],0,vt.subarray(0,et+ht))),Te[0]=ae.isFull?1:0,Te[1]=ae.bgStrip?ae.bgStrip.z*B+ae.bgStrip.yWg*4:0,Te[2]=et,Te[3]=ht,e.queue.writeBuffer(Ae[pe],0,Te),ae.isFull||yt>0||ht>0){const Me=ft.beginComputePass();Me.setBindGroup(0,Bt[pe]),(ae.isFull||yt>0)&&(Me.setPipeline(I.pipe),Me.dispatchWorkgroups(1,ae.isFull?64:1,ae.isFull?B:yt)),ht>0&&(Me.setPipeline(ce.pipe),Me.dispatchWorkgroups(1,Math.ceil(ht/4),1)),Me.end(),ke.push("normHalo")}}if(st==="pipelined")e.queue.submit([ft.finish()]),ft=e.createCommandEncoder();else if(st!=="single"){const et=performance.now();e.queue.submit([ft.finish()]),yield e.queue.onSubmittedWorkDone();const Me=performance.now()-et;ft=e.createCommandEncoder(),pt+=(pe===0||!U.chunkableStd?lt.convWork:0)+lt.normWork,pe===0&&st==="calibrate"&&Me>=90&&(e.__v4WinCalibrated=!0,e.__v4WinFast=!1,st="paced",console.log(`[WebGPU-V4] Windows GPU calibration (conv0=${Me.toFixed(1)}ms) -> TDR-safe paced mode`)),st==="paced"&&(Pt(pe),(pe===0||!U.chunkableStd||Me>=30)&&(yield vn()))}}return mt.__passCategories=ke,Ie.finishAndReadback({enc:ft,schedule:it,passCategories:ke,u4Tmp:Te,ioOpts:ne,paced:st==="paced",onProgress:re})})}return Ie.warmupIoPipelines(),mt.dispose=({keepSharedWorkspace:J=!1}={})=>{Ie.dispose();for(const ne of Le)ne.destroy();if(Le.length=0,ze.resetBytes(),j.pooled)J?j.inUse=!1:rn.get(e)===j&&xn(e);else{for(const ne of j.buffers)ne.destroy();j.buffers.length=0}},mt.gpuBytes=()=>j.bytes+ze.getBytes(),mt.__passCategories=[],mt.__coneInfo=()=>({paddedVox:Z,actMiB:v/1048576}),mt.kernels="v4-int8",mt})}function go(e){return ge(this,null,function*(){var f,l,c,g,d,u;if(!e)return;const t=!!((l=(f=e.features)==null?void 0:f.has)!=null&&l.call(f,"shader-f16")),n=e.__adapterInfo||e.adapterInfo||{},o=!!((g=(c=e.features)==null?void 0:c.has)!=null&&g.call(c,"subgroups"))&&n.subgroupMinSize===32&&n.subgroupMaxSize===32,s=e.limits||{},i=Math.min((d=s.maxStorageBufferBindingSize)!=null?d:1/0,(u=s.maxBufferSize)!=null?u:1/0),r=[{chan:24,cs:24,nclass:0,dilations:Zo,activation:"gelu_tanh",norm:"gn"},{chan:16,cs:16,nclass:0,dilations:[16,8,4,2,1],activation:"gelu_tanh",norm:"gn"}],a=[sn(e,t?"prep_in_u8_f16":"prep_in_u8_f32",()=>so(!0,t),"main",["read-only-storage","storage","uniform"]),sn(e,"transpose_u8_v4",ls,"main",["read-only-storage","storage"])];for(const p of r){const m=p.cs>=16,y=m?p.cs/2:p.cs,_=B*B*y*wt*4>i||os(e,p,null),w=Array.from(new Set(p.dilations.slice(1)));if(_){const h=bs({cs:p.cs,chan:p.chan,nclass:0,clsK4:0,dilations:p.dilations,activation:p.activation,norm:p.norm,hasF16:t,hasSubgroups32:o,numConvs:p.dilations.length,probCfg:null});a.push(cs(e,p,null,t,o,null,h,w,{includeCls:!1}))}else{const h=ns(e,null),$=_s({cs:p.cs,chan:p.chan,nclass:0,clsK4:0,dilations:p.dilations,activation:p.activation,norm:p.norm,hasF16:t,hasSubgroups32:o,splitHalves:m,probCfg:null,chunkableStd:h});a.push(fs(e,p,null,t,o,m,null,$,w,{includeCls:!1}))}}yield Promise.all(a)})}const Rr=(e,t)=>ge(null,null,function*(){const n=yield fetch(t).then(o=>o.arrayBuffer());return mo(e,new Uint8Array(n))}),hs=!0,qr={load:Rr,setupNet:mo,warmupV4CorePipelines:go,supportsF32Fallback:ws,supportsGpuNativeIO:hs},ro=Object.freeze(Object.defineProperty({__proto__:null,default:qr,releaseV4Workspace:xn,setupNet:mo,supportsF32Fallback:ws,supportsGpuNativeIO:hs,warmupV4CorePipelines:go},Symbol.toStringTag,{value:"Module"}));function Ir(){var e;try{if(new URLSearchParams(((e=globalThis.location)==null?void 0:e.search)||"").get("webgpuKernels")==="tinygrad")return"disabled by ?webgpuKernels=tinygrad"}catch(t){}return null}const zn=new Set(["meshnet_fast_v4","dkatlas24_int8","mindmap24_int8","model16chan18cls_int8","mindgrab_int8"]);function Tr(e){return zn.has(e)}const yn=Object.assign({"./webgpu_runners/dkatlas24_f32_runner.js":()=>bt(()=>import("./dkatlas24_f32_runner-CdBMa7VZ.js"),[],import.meta.url),"./webgpu_runners/dkatlas24_int8_v3_runner.js":()=>bt(()=>import("./dkatlas24_int8_v3_runner-Bx9ADEBk.js"),__vite__mapDeps([0,1,2,3]),import.meta.url),"./webgpu_runners/dkatlas24_runner.js":()=>bt(()=>import("./dkatlas24_runner-BkVMX0Bk.js"),[],import.meta.url),"./webgpu_runners/dkatlas24_synth_f32_runner.js":()=>bt(()=>import("./dkatlas24_synth_f32_runner-Bb7lxqr0.js"),[],import.meta.url),"./webgpu_runners/dkatlas24_synth_runner.js":()=>bt(()=>import("./dkatlas24_synth_runner-5rLWbXWF.js"),[],import.meta.url),"./webgpu_runners/manual_mindgrab_runner.js":()=>bt(()=>import("./manual_mindgrab_runner-DDusGIor.js"),[],import.meta.url),"./webgpu_runners/mindgrab_runner.js":()=>bt(()=>import("./mindgrab_runner-B-UQtXej.js"),[],import.meta.url),"./webgpu_runners/mindgrab_tta_runner.js":()=>bt(()=>import("./mindgrab_tta_runner-Ct42O8D2.js"),[],import.meta.url),"./webgpu_runners/model16chan18cls_f32_runner.js":()=>bt(()=>import("./model16chan18cls_f32_runner-B5FaUMez.js"),[],import.meta.url),"./webgpu_runners/model16chan18cls_runner.js":()=>bt(()=>import("./model16chan18cls_runner-aMK3m7Gj.js"),[],import.meta.url),"./webgpu_runners/model21_104class_runner.js":()=>bt(()=>import("./model21_104class_runner-DuOJ6qrl.js"),[],import.meta.url),"./webgpu_runners/model21_f32_runner.js":()=>bt(()=>import("./model21_f32_runner-yTUV9LXd.js"),[],import.meta.url),"./webgpu_runners/model21_tta_runner.js":()=>bt(()=>import("./model21_tta_runner-e7-76trO.js"),[],import.meta.url),"./webgpu_runners/model21chan18cls_runner.js":()=>bt(()=>import("./model21chan18cls_runner-DvLOnZMy.js"),[],import.meta.url),"./webgpu_runners/model24chan18cls_gdice_prio_probability_runner.js":()=>bt(()=>import("./model24chan18cls_gdice_prio_probability_runner-BHqpfuCi.js"),[],import.meta.url),"./webgpu_runners/model24chan18cls_gdice_prio_runner.js":()=>bt(()=>import("./model24chan18cls_gdice_prio_runner-B5cN26gD.js"),[],import.meta.url),"./webgpu_runners/model30chan18cls_runner.js":()=>bt(()=>import("./model30chan18cls_runner-C2mBz0G4.js"),[],import.meta.url),"./webgpu_runners/model30chan18cls_tta_runner.js":()=>bt(()=>import("./model30chan18cls_tta_runner-v8CMqLh5.js"),[],import.meta.url),"./webgpu_runners/model30chan50cls_f32_runner.js":()=>bt(()=>import("./model30chan50cls_f32_runner-DQ53FZ3-.js"),[],import.meta.url),"./webgpu_runners/model30chan50cls_runner.js":()=>bt(()=>import("./model30chan50cls_runner-D72-rlcG.js"),[],import.meta.url),"./webgpu_runners/model30chan50cls_tta_runner.js":()=>bt(()=>import("./model30chan50cls_tta_runner-CliMlbAZ.js"),[],import.meta.url),"./webgpu_runners/model32chan18cls_runner.js":()=>bt(()=>import("./model32chan18cls_runner-cowyou29.js"),[],import.meta.url),"./webgpu_runners/model5_gw_ae_runner.js":()=>bt(()=>import("./model5_gw_ae_runner-jI57fGIB.js"),[],import.meta.url),"./webgpu_runners/model5_runner.js":()=>bt(()=>import("./model5_runner-BiUlzJBp.js"),[],import.meta.url),"./webgpu_runners/model5_tta_runner.js":()=>bt(()=>import("./model5_tta_runner-DjIMLwlR.js"),[],import.meta.url),"./webgpu_runners/model6chan3cls_runner.js":()=>bt(()=>import("./model6chan3cls_runner-wSGRZpe5.js"),[],import.meta.url),"./webgpu_runners/robust_subcortical_runner.js":()=>bt(()=>import("./robust_subcortical_runner-D74Uw6At.js"),[],import.meta.url),"./webgpu_runners/robust_subcortical_tta_runner.js":()=>bt(()=>import("./robust_subcortical_tta_runner-CkwA2dHP.js"),[],import.meta.url)});function Er(){const e=Object.keys(yn).map(t=>{const n=t.match(/\/([^\/]+)_runner\.js$/);return n?n[1]:null}).filter(Boolean);return Array.from(new Set([...zn,...e]))}function Nr(e){if(zn.has(e))return()=>ge(null,null,function*(){return ro});const t=`./webgpu_runners/${e}_runner.js`;if(yn[t])return yn[t];const n=e.toLowerCase();for(const o of zn)if(o.toLowerCase()===n)return()=>ge(null,null,function*(){return ro});for(const[o,s]of Object.entries(yn))if(o.toLowerCase().includes(`/${n}_runner.js`))return s;for(const[o,s]of Object.entries(yn))if(o.includes(e))return s;return null}function Or(e){if(zn.has(e))return!0;const t=`./webgpu_runners/${e}_runner.js`;if(yn[t])return!0;const n=e.toLowerCase();for(const s of zn)if(s.toLowerCase()===n)return!0;const o=`/${n}_runner.js`;return Object.keys(yn).some(s=>s.toLowerCase().endsWith(o))}function Dr(e,t){if(typeof Float16Array=="undefined")throw new Error("Float16Array unavailable: cannot cast fp32 master weights to fp16.");const n=new DataView(e.buffer,e.byteOffset,e.byteLength),o=Number(n.getBigUint64(0,!0)),s=JSON.parse(new TextDecoder("utf8").decode(e.subarray(8,8+o))),i=8+o;if(!Object.entries(s).some(([p,m])=>p!=="__metadata__"&&m.dtype==="F32"))return e;const a={},f=[];let l=0;for(const[p,m]of Object.entries(s)){if(p==="__metadata__"){a[p]=m;continue}const[y,k]=m.data_offsets,_=e.subarray(i+y,i+k);let w,h;if(m.dtype==="F32"){const $=new Float32Array(_.slice().buffer),b=new Float16Array($);w=new Uint8Array(b.buffer),h="F16"}else w=_,h=m.dtype;a[p]={dtype:h,shape:m.shape,data_offsets:[l,l+w.byteLength]},f.push(w),l+=w.byteLength}const c=new TextEncoder().encode(JSON.stringify(a)),g=(8-c.byteLength%8)%8,d=new Uint8Array(8+c.byteLength+g+l);new DataView(d.buffer).setBigUint64(0,BigInt(c.byteLength+g),!0),d.set(c,8),d.fill(32,8+c.byteLength,8+c.byteLength+g);let u=8+c.byteLength+g;for(const p of f)d.set(p,u),u+=p.byteLength;return console.log("[WebGPU] Cast fp32 master weights -> fp16."),d}function Vr(e,t){try{const n=r=>!!(e.features&&e.features.has&&e.features.has(r)),o=e.limits||{},s=typeof navigator!="undefined"&&navigator.userAgent||"unknown",i=/Safari/.test(s)&&!/Chrome|Chromium|Android/.test(s);console.log("[SAFARI-DEBUG] ===== WebGPU device capabilities ====="),console.log("[SAFARI-DEBUG] model:",(t==null?void 0:t.modelName)||(t==null?void 0:t.webgpu_runner)||"(unknown)"),console.log("[SAFARI-DEBUG] userAgent:",s,"| classified Safari:",i),console.log("[SAFARI-DEBUG] shader-f16:",n("shader-f16")),console.log("[SAFARI-DEBUG] features:",e.features?Array.from(e.features):"(none)"),console.log("[SAFARI-DEBUG] limits:",{maxBufferSize:o.maxBufferSize,maxStorageBufferBindingSize:o.maxStorageBufferBindingSize,maxComputeInvocationsPerWorkgroup:o.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:o.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:o.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:o.maxComputeWorkgroupSizeZ,maxComputeWorkgroupsPerDimension:o.maxComputeWorkgroupsPerDimension}),console.log("[SAFARI-DEBUG] BC_WEBGPU_DEBUG (logits readback):",typeof window!="undefined"&&!!window.BC_WEBGPU_DEBUG),console.log("[SAFARI-DEBUG] =======================================")}catch(n){console.warn("[SAFARI-DEBUG] capability dump failed:",n==null?void 0:n.message)}}function ys(){return typeof requestAnimationFrame!="function"?new Promise(e=>setTimeout(e,0)):new Promise(e=>{let t=!1;const n=()=>{t||(t=!0,e())},o=setTimeout(n,25);requestAnimationFrame(()=>{clearTimeout(o),setTimeout(n,0)})})}const Hr=6,jr=4,bn=new Map,Zn=new Map,wn=new Map,mn=new WeakMap,Qn=new WeakSet;function Xr(e){return ge(this,null,function*(){if(!(!e||Qn.has(e))){Qn.add(e);try{yield go(e)}catch(t){Qn.delete(e),console.debug("[WebGPU] Background pipeline warmup skipped:",(t==null?void 0:t.message)||t)}}})}function vs(e,{keepSharedWorkspace:t=!1}={}){var n;if(e)try{if(typeof((n=e.execute)==null?void 0:n.dispose)=="function")e.execute.dispose({keepSharedWorkspace:t});else if(e.ownedBuffers)for(const o of e.ownedBuffers)o.destroy()}catch(o){console.warn("[WebGPU] Failed to dispose cached runner buffers:",o)}}function Yr(e,t,n,o){var s,i,r,a,f,l,c,g,d,u,p,m,y,k,_,w,h,$,b;return JSON.stringify([e,t,n,(s=o.id)!=null?s:null,(i=o.numClasses)!=null?i:null,(r=o.outputType)!=null?r:null,(a=o.dilations)!=null?a:null,(f=o.activation)!=null?f:null,(l=o.quantize8Bit)!=null?l:null,(c=o.forceFP32)!=null?c:null,(g=o.disableF16)!=null?g:null,(d=o.disableSubgroups)!=null?d:null,(u=o.disableConeSkip)!=null?u:null,(p=o.forceLowMem128)!=null?p:null,(m=o.webgpuExecMode)!=null?m:null,(y=o.softmaxTemperature)!=null?y:null,(k=o.brainSupportTemperature)!=null?k:null,(_=o.brainSupportPower)!=null?_:null,(w=o.partialVolumeSigma)!=null?w:null,(h=o.probabilityGroups)!=null?h:null,($=o.probabilityDisplay)!=null?$:null,(b=o.classifierBias)!=null?b:null])}function Go(e){const t=bn.get(e);if(t)return bn.delete(e),bn.set(e,t),Promise.resolve(t);const n=Zn.get(e);if(n)return n;const o=ge(null,null,function*(){let s;try{const r=yield fetch(e);if(!r.ok)throw new Error(`HTTP ${r.status}: ${r.statusText}`);s=yield r.arrayBuffer()}catch(r){throw new Error(`Failed to load weights from '${e}': ${r.message}`)}const i=new Uint8Array(s);for(bn.set(e,i);bn.size>Hr;){const r=bn.keys().next().value;bn.delete(r)}return i}).finally(()=>{Zn.delete(e)});return Zn.set(e,o),o}function Kr(e,t,n,o){if(!n)return e;const s=wn.get(t);if(s)return wn.delete(t),wn.set(t,s),s;const i=Dr(e);for(wn.set(t,i);wn.size>jr;){const r=wn.keys().next().value;wn.delete(r)}return i}function ao(e,t){return ge(this,null,function*(){const n=[],o=e.createBuffer.bind(e);e.createBuffer=s=>{const i=o(s);return n.push(i),i};try{return{result:yield t(),buffers:n}}finally{e.createBuffer=o}})}function io(e){let t=0;for(const n of e)t+=Number(n==null?void 0:n.size)||0;return t}function Jn(e){for(const t of e)try{t.destroy()}catch(n){}}function Zr(e,t,n){return ge(this,null,function*(){var $,b,P,C,v,x,G;const o=($=Ir())!=null?$:hr(e,t);let s=t.webgpu_runner,i=t.webgpu_safetensor;const r=!!(e.features&&e.features.has&&e.features.has("shader-f16"));let a=!1;o&&(t.forceFP32?(a=!0,console.log("[WebGPU] forceFP32: using fp32 runner and weights.")):!r&&Or(`${s}_f32`)&&(a=!0,console.log("[WebGPU] shader-f16 not supported on this device -> auto-selecting fp32 runner and weights.")),a&&(s=`${s}_f32`,i=i.replace(".safetensors","_f32.safetensors")),t.enableTTA&&t.webgpuTTArunner&&(console.log("[WebGPU] TTA Enabled: Switching to TTA runner and weights."),s=`${s}_tta`,i=i.replace(".safetensors","_tta.safetensors")));const l=Yr(o?"runner":"native",o?s:"webgpu_native",i,t),c=mn.get(e);if(c&&c.runnerKey===l)return It(St({},c),{cacheHit:!0});const g=!!(o&&Tr(s));if(n("Loading model…",.1),c&&(mn.delete(e),vs(c,{keepSharedWorkspace:g})),g||xn(e),Vr(e,t),o)console.log(`[WebGPU-native] not used for ${t.modelName||t.webgpu_runner}: ${o}`);else{let M=[];try{const A=yield Go(i),T=yield ao(e,()=>xr(e,A,n,t));M=T.buffers;const U=T.result;U.kernels="hand-written";const z={runnerKey:l,runnerName:"webgpu_native",weightsPath:i,execute:U,supportsGpuNativeIO:!1,ownedBuffers:M,gpuBytes:io(M)};return mn.set(e,z),console.log("[WebGPU-native] Using hand-written WebGPU kernels."),It(St({},z),{cacheHit:!1})}catch(A){Jn(M),console.warn("[WebGPU-native] falling back to the tinygrad runner:",(A==null?void 0:A.message)||A)}}const d=g?()=>ge(null,null,function*(){return ro}):Nr(s);if(!d){const M=Er();throw new Error(`Runner '${s}' not found. Available runners: ${M.join(", ")||"none"}. Looking in: ./webgpu_runners/`)}const[u,p]=yield Promise.all([d(),Go(i)]);if(!u.setupNet&&!((b=u.default)!=null&&b.setupNet))throw new Error(`Runner module '${s}' doesn't export 'setupNet'. Exported keys: ${Object.keys(u).join(", ")}`);const m=!!((C=u.supportsF32Fallback)!=null?C:(P=u.default)!=null&&P.supportsF32Fallback),y=!!((x=u.supportsGpuNativeIO)!=null?x:(v=u.default)!=null&&v.supportsGpuNativeIO);!a&&!r&&!m&&console.warn(`[WebGPU] shader-f16 not supported and no fp32 runner ('${s}_f32') available; the fp16 runner will likely fail and fall back to WebGL2.`);const _=Kr(p,i,!a&&!m),w=u.setupNet||((G=u.default)==null?void 0:G.setupNet);let h=[];try{const M=yield ao(e,()=>w(e,_,n,t));h=M.buffers;const A=M.result;if(typeof A!="function")throw Jn(h),new Error(`setupNet for '${s}' didn't return a function. Returned type: ${typeof A}`);const T={runnerKey:l,runnerName:s,weightsPath:i,execute:A,supportsGpuNativeIO:y,ownedBuffers:typeof A.dispose=="function"?null:h,gpuBytes:typeof A.gpuBytes=="function"?A.gpuBytes():io(h)};return mn.set(e,T),It(St({},T),{cacheHit:!1})}catch(M){throw g&&xn(e),Jn(h),new Error(`Failed to setup network for '${s}': ${M.message}`)}})}function Qr(e,t,n,o,s,i,r){return ge(this,null,function*(){var d,u,p,m;const a=n.outputType==="probability";console.log("Starting WebGPU inference..."),r(a?"Starting tissue estimation…":"Starting segmentation…",0);const f=Xs(n,js.WEBGPU);f.isModelFullVol=!0;let l=!1,c=null;const g=Js(n);try{if(!e)throw new Error("WebGPU device is required but not provided");if(!(n!=null&&n.webgpu_runner))throw new Error("Model entry must specify webgpu_runner property");if(!(n!=null&&n.webgpu_safetensor))throw new Error("Model entry must specify webgpu_safetensor property");const y=n.webgpuStorageSize||335544320;if(e.limits){const W=se=>(se/1048576).toFixed(0),X=(d=e.limits.maxStorageBufferBindingSize)!=null?d:1/0,V=(u=e.limits.maxBufferSize)!=null?u:1/0;if(X<y||V<y){const se=W(Math.min(X,V)),Le=W(y),ze=`[WebGPU] Device buffer limit (${se} MB) is below the ${Le} MB this model needs - using WebGL2 fallback.`;throw console.warn(ze),new Error(ze)}}e.pushErrorScope("out-of-memory"),l=!0;const k=performance.now();c=yield Zr(e,n,r);const _=((performance.now()-k)/1e3).toFixed(4),w=performance.now();r("Preparing volume…",.25);const h=[256,256,256],$=c.supportsGpuNativeIO&&!!n.enableTranspose&&!n.inputPermutation,b=c.supportsGpuNativeIO&&!!n.enableTranspose&&!n.outputPermutation;let P,C;if(n.enableQuantileNorm){const{qmin:W,qmax:X}=Ns(s);P=W,C=X-W}else{const{min:W,max:X}=Os(s);P=W,C=X-W}const v=C===0?1:C;let x=null,G,M=h;if($)g&&(x=So(s,P,v)),G=s;else{const W=So(s,P,v);if(g&&(x=W),n.inputPermutation){console.log(`[WebGPU] Permuting Input: ${n.inputPermutation}`);const X=n.inputPermutation;M=[h[X[0]],h[X[1]],h[X[2]]],G=Pn(W,h,X)}else n.enableTranspose?G=Pn(W,h,[2,1,0]):G=W}const A=((performance.now()-w)/1e3).toFixed(4);r("",.3),r(a?"Estimating tissue maps…":"Segmenting…",.3),yield ys();const T=performance.now(),U=c.supportsGpuNativeIO?W=>{const X=Math.max(0,Math.min(1,Number(W)||0));r("",.3+.6*X)}:void 0,z=$||b||U?{gpuNativeInput:$,gpuNativeOutput:b,normOffset:P,normRange:v,onProgress:U}:void 0,N=yield ao(e,()=>z?c.execute(G,z):c.execute(G)),L=N.result;if(typeof c.execute.gpuBytes=="function"){c.gpuBytes=c.execute.gpuBytes();const W=mn.get(e);W&&W.runnerKey===c.runnerKey&&(W.gpuBytes=c.gpuBytes)}else if(N.buffers.length>0){c.gpuBytes=(c.gpuBytes||0)+io(N.buffers),c.ownedBuffers&&c.ownedBuffers.push(...N.buffers);const W=mn.get(e);W&&W.runnerKey===c.runnerKey&&(W.gpuBytes=c.gpuBytes)}l=!1;const Z=yield e.popErrorScope();if(Z)throw new Error(`WebGPU out of memory (${Z.message||"allocation failed"}) - falling back to WebGL2.`);if(!L||!Array.isArray(L))throw new Error(`Inference didn't return expected array format. Returned: ${typeof L}`);const te=((performance.now()-T)/1e3).toFixed(4),R=(c.gpuBytes||0)/1048576;f.GPU_Memory_MiB=Math.round(R),f.WebGPU_Kernels=c.execute.kernels||"tinygrad";const q=R>=1024?`${(R/1024).toFixed(2)} GiB`:`${Math.round(R)} MiB`;console.log(`WebGPU inference took ${te}s (${f.WebGPU_Kernels} kernels, ${q} GPU memory).`),r("Finishing up…",.9),console.log("Inference result shapes:",L.map(W=>W==null?void 0:W.length));const D=n.outputPermutation||(n.enableTranspose?[2,1,0]:null),oe=performance.now();let O;const j={};if(g){if(L.length!==3)throw new Error(`CAT-lite expected three tissue maps; received ${L.length}.`);r("Refining tissue fractions…",.92),O=yield sr(L,x,n,f,b?X=>X:X=>D?Pn(X,M,D):X instanceof Float32Array?X:Float32Array.from(X))}else if(a){const W=L[0];O=b?W:D?Pn(W,M,D):W instanceof Float32Array?W:Float32Array.from(W),Po(O,!0,"probability")}else{const W=L[0];let X;b?X=W instanceof Uint8Array?W:new Uint8Array(W):D?X=Ds(W,M,D):X=W instanceof Uint8Array?W:new Uint8Array(W),Po(X,!1,"segmentation"),O=yield Hs(X,s,n,t,j,h)}const he=((performance.now()-oe)/1e3).toFixed(4),Pe=performance.now();yield i(O,t,n,j.mask);const Ce=((performance.now()-Pe)/1e3).toFixed(4);if(a)g||(f.Output_Type="Continuous tissue probability",f.Tissue=n.probabilityDisplay||"grayMatter",f.Softmax_Temperature=(p=n.softmaxTemperature)!=null?p:1);else{const W=Vs(O),X=n.numClasses||W;Ys(f,X,W)}Ks(f,te,he,{Preprocess_t:A,Setup_t:_,Display_t:Ce}),console.log(`[Timing] WebGPU | ${n.modelName} | setup=${(Number(_)*1e3).toFixed(1)}ms prep=${(Number(A)*1e3).toFixed(1)}ms infer=${(Number(te)*1e3).toFixed(1)}ms post=${(Number(he)*1e3).toFixed(1)}ms disp=${(Number(Ce)*1e3).toFixed(1)}ms cache=${c.cacheHit?"hit":"miss"}`);const ye=`${Number(te).toFixed(1)} s`,Q=a?`Tissue maps finished (${ye})`:`Segmentation finished (${ye})`,ee=!a&&((m=n.numClasses)!=null?m:0)>2?" · Option/Alt-click a region to isolate":"";r(`${n.modelName} · ${Q}${ee}`,1,"",f)}catch(y){if(console.error("WebGPU Inference Error:",y),c&&(mn.get(e)===c&&mn.delete(e),vs(c),c=null),l&&e){l=!1;try{yield e.popErrorScope()}catch(_){}}let k=y.message;throw y.message.includes("not found")?k+=". Check that the runner file exists and the name matches.":y.message.includes("fetch")?k+=". Check network connection and file paths.":y.message.includes("binding size")&&(k+=". GPU memory limit exceeded."),Zs(f,k,"WebGPU inference failed"),r("",-1,`WebGPU Error: ${k}`,f),y}})}const Jr={batchSize:1,numOfChan:1,isColorEnable:!0,isAutoColors:!0,bgLabelValue:0,drawBoundingVolume:!1,isGPU:!0,isBrainCropMaskBased:!0,showPhase1Output:!1,isPostProcessEnable:!0,fillSuppressedWithNeighborLabel:!1,diagnoseEnclosedComponents:!1,isContoursViewEnable:!1,browserArrayBufferMaxZDim:30,telemetryFlag:!1,chartXaxisStepPercent:10,uiSampleName:"BC_UI_Sample",atlasSelectedColorTable:"Fire"};function Ro(e,t=!0){if(!e)return e;const s=e,{turbo:n}=s,o=yo(s,["turbo"]);return!t||!n?o:It(St(St({},o),n),{isTurboActive:!0})}const hn=[{id:2,type:"Brain_Extraction",path:"/models/mindgrab/model.json",modelName:"🪓🧠 Omnimodal Skull Stripping",webgpu_safetensor:"./models/mindgrab/model.safetensors",webgpu_runner:"mindgrab",classifierBias:[1.525439739227295,-1.5258055925369263],webgpuTTArunner:!1,forceFP32:!1,webgpuStorageSize:503316480,numClasses:2,turbo:{webgpu_runner:"mindgrab_int8",quantize8Bit:!0,forceFP32:!1,webgpuTTArunner:!1,webgpuStorageSize:83886080,warning:"Runs via the 8-bit V4 WebGPU engine (~3.7s on M1 WebGPU, auto-scaling from 160 MiB down to 80 MiB max buffer on mobile) or native WebGL2."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,isPostProcessEnable:!0,enableCrop:!0,cropPadding:20,autoThreshold:.5,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!1,textureSize:0,warning:"This model may need dedicated graphics card.  For more info please check with Browser Resources <i class='fa fa-cogs'></i>.",inferenceDelay:100,description:"Omnimodal skull stripping (MindGrab) delivering high-accuracy brain extraction across T1, T2, FLAIR, DWI, EPI, MRA, PDw, qT1, CT, and PET via the 8-bit V4 WebGPU engine (80 MiB mobile / 160 MiB desktop max buffer) or native WebGL2."},{id:21,type:"Atlas",path:"/models/model24chan18cls_gdice_prio/model.json",modelName:"🪓 Subcortical + Tissue",colormapPath:"./models/model24chan18cls_gdice_prio/colormap.json",webgpu_safetensor:"./models/model24chan18cls_gdice_prio/model.safetensors",webgpu_runner:"model24chan18cls_gdice_prio",forceFP32:!1,webgpuStorageSize:1610612736,numClasses:18,turbo:{webgpu_runner:"mindmap24_int8",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:125829120,warning:"Runs via the 8-bit V4 WebGPU engine (~3.0s on M1 WebGPU, auto-scaling from 240 MiB down to 120 MiB max buffer on mobile) or native WebGL2."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,cropPadding:20,autoThreshold:0,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!0,textureSize:0,warning:"Runs via the 8-bit V4 WebGPU engine (120–240 MiB max buffer) or native WebGL2.",inferenceDelay:100,description:"Primary T1w brain parcellation into 17 regions (gray and white matter plus subcortical structures) via a 24-channel gridding-free MeshNet (MindMap v3.5 Unified: sharp sulci, intact occipital ribbon, and clinical slice/noise/bias robustness), accelerated by the 8-bit V4 WebGPU engine (120 MiB mobile / 240 MiB desktop max buffer)."},{id:23,type:"Probability_Map",path:"/models/model24chan18cls_gdice_prio/model.json",modelName:"⅔🧠 Tissue fraction maps (GM/WM/CSF)",webgpu_safetensor:"./models/model24chan18cls_gdice_prio/model.safetensors",webgpu_runner:"model24chan18cls_gdice_prio_probability",forceFP32:!1,webgpuStorageSize:1610612736,numClasses:18,turbo:{webgpu_runner:"mindmap24_int8",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:125829120,warning:"Experimental neural-assisted partial-volume estimate (~3.5s on M1 WebGPU, auto-scaling from 240 MiB down to 120 MiB max buffer on mobile)."},outputType:"probability",probabilityPostprocess:"cat-lite",softmaxTemperature:2,brainSupportTemperature:1,brainSupportPower:1,partialVolumeSigma:.65,probabilityDisplay:"grayMatter",probabilityTissues:[{name:"gm",tint:[255,64,64]},{name:"wm",tint:[255,255,255]},{name:"csf",tint:[64,128,255]}],probabilityOverlayFloor:128,probabilityOverlayAlpha:48,probabilityDisplayMin:.03,probabilityUnderlayOpacity:.1,probabilityGroups:{grayMatter:[2,6,7,8,9,10,14,15,16,17],whiteMatter:[1,5],csf:[3,4,11,12]},catLitePurePriorPower:3,catLitePriorStrength:.8,catLiteIntensityStrength:.75,catLiteMixelPrior:.35,catLiteCsfWmMixelPrior:6,catLiteSpatialWeight:.25,catLiteMinSupport:.03,catLiteSigmaFloor:.025,catLiteBiasBlockSize:16,catLiteBiasSmoothPasses:3,preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,enableQuantileNorm:!0,enableFovRecenter:!1,enableFovInflate:!1,warning:"Experimental neural-assisted mixed-class partial-volume estimate, not CAT12.",inferenceDelay:100,description:"CAT-inspired GM/WM/CSF partial-volume estimate. The 24-channel model supplies joint GM/WM/CSF priors; normalized T1 intensity, a coarse local bias estimate, spatial regularization, and explicit GM-CSF/GM-WM mixture classes produce continuous GM, WM and CSF fractions. Experimental and not a CAT12 result."},{id:5,type:"Atlas",path:"/models/model24chan104cls_v3_repbn/model.json",modelName:"🪓🔪 Desikan-Killiany Atlas",colormapPath:"./models/model24chan104cls_v3_repbn/colormap.json",webgpu_safetensor:"./models/model24chan104cls_v3_repbn/model.safetensors",webgpu_runner:"dkatlas24_synth",forceFP32:!1,webgpuStorageSize:1610612736,numClasses:104,turbo:{webgpu_runner:"dkatlas24_int8",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:125829120,warning:"Runs via the 8-bit V4 WebGPU engine (~3.0s on M1 WebGPU, auto-scaling from 240 MiB down to 120 MiB max buffer on mobile) or native WebGL2."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,cropPadding:20,autoThreshold:0,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!0,textureSize:0,warning:"Runs via the 8-bit V4 WebGPU engine (120–240 MiB max buffer) or native WebGL2.",inferenceDelay:100,description:"Primary 104-region Desikan-Killiany atlas parcellation (cortical + subcortical + 5-part corpus callosum) for research and clinical T1-weighted MRI, running via the 8-bit V4 WebGPU engine (~3.0s on M1, 120 MiB mobile / 240 MiB desktop max buffer) or native WebGL2."},{id:4,type:"Atlas",path:"/models/model24chan50cls/model.json",modelName:"🪓🔪 Desikan-Killiany 50",colormapPath:"./models/model24chan50cls/colormap.json",webgpu_safetensor:"./models/model24chan50cls/model.safetensors",webgpu_runner:"meshnet_fast_v4",forceFP32:!1,webgpuStorageSize:805306368,numClasses:50,turbo:{webgpu_runner:"meshnet_fast_v4",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:125829120,warning:"Runs via the 8-bit V4 WebGPU engine (~3.0s on M1 WebGPU, auto-scaling from 240 MiB down to 120 MiB max buffer on mobile) or native WebGL2."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,cropPadding:20,autoThreshold:0,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!0,textureSize:0,warning:"Runs via the 8-bit V4 WebGPU engine (120–240 MiB max buffer) or native WebGL2.",inferenceDelay:100,description:"Bilateral 50-region Desikan-Killiany cortical + subcortical + corpus callosum parcellation with built-in skull stripping (MindSnap-50 v3.5), running via the 8-bit V4 WebGPU engine (~3.0s on M1, 120 MiB mobile / 240 MiB desktop max buffer) or native WebGL2."},{id:6,type:"Divider",modelName:"-----------------",path:null},{id:3,type:"Atlas",path:"/models/model16chan18cls/model.json",modelName:"⚡🪓 Subcortical + Tissue",colormapPath:"./models/model16chan18cls/colormap.json",webgpu_safetensor:"./models/model16chan18cls/model.safetensors",webgpu_runner:"model16chan18cls",forceFP32:!1,webgpuStorageSize:536870912,numClasses:18,turbo:{webgpu_runner:"model16chan18cls_int8",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:83886080,warning:"Ultra-fast 16-channel MindMap v3.5 (~1.7s on M1 WebGPU, auto-scaling from 160 MiB down to 80 MiB max buffer on mobile)."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,cropPadding:20,autoThreshold:0,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!0,textureSize:0,warning:"Runs via the 8-bit V4 WebGPU engine (80–160 MiB max buffer) or native WebGL2.",inferenceDelay:100,description:"Ultra-fast 17-region brain parcellation (gray and white matter plus subcortical structures) via our 84K-parameter 16-channel MeshNet (MindMap-16ch v3.5), running in ~1.7s on M1 WebGPU with an 80 MiB mobile / 160 MiB desktop buffer footprint."},{id:14,type:"Atlas",path:"/models/model24chan104cls_synth/model.json",modelName:"🪓🔪 Desikan-Killiany (lesion scans)",colormapPath:"./models/model24chan104cls_synth/colormap.json",webgpu_safetensor:"./models/model24chan104cls_synth/model.safetensors",webgpu_runner:"dkatlas24_synth",forceFP32:!1,webgpuStorageSize:1610612736,numClasses:104,turbo:{webgpu_runner:"dkatlas24_int8",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:125829120,warning:"Runs via the 8-bit V4 WebGPU engine (~3.0s on M1 WebGPU, auto-scaling from 240 MiB down to 120 MiB max buffer on mobile) or native WebGL2."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,cropPadding:20,autoThreshold:0,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!0,textureSize:0,warning:"Runs via the 8-bit V4 WebGPU engine (120–240 MiB max buffer) or native WebGL2.",inferenceDelay:100,description:"Desikan-Killiany 104-region parcellation variant retained for scans with large focal lesions, running via the 8-bit V4 WebGPU engine (120–240 MiB max buffer) or native WebGL2."}];function _o(){return ge(this,null,function*(){return navigator.userAgent.indexOf("OPR/")>-1?"Opera":navigator.userAgent.indexOf("Edg/")>-1?"Edge":navigator.userAgent.indexOf("Falkon/")>-1?"Falkon":navigator.userAgent.indexOf("Chrome/")>-1?"Chrome":navigator.userAgent.indexOf("Firefox/")>-1?"Firefox":navigator.userAgent.indexOf("Safari/")>-1?"Safari":navigator.userAgent.indexOf("MSIE/")>-1||navigator.userAgent.indexOf("rv:")>-1?"IExplorer":"Unknown"})}function ea(){return ge(this,null,function*(){return navigator.userAgent.indexOf("OPR/")>-1?parseInt(navigator.userAgent.split("OPR/")[1]):navigator.userAgent.indexOf("Edg/")>-1?parseInt(navigator.userAgent.split("Edg/")[1]):navigator.userAgent.indexOf("Falkon/")>-1?parseInt(navigator.userAgent.split("Falkon/")[1]):navigator.userAgent.indexOf("Chrome/")>-1?parseInt(navigator.userAgent.split("Chrome/")[1]):navigator.userAgent.indexOf("Firefox/")>-1?parseInt(navigator.userAgent.split("Firefox/")[1]):navigator.userAgent.indexOf("Safari/")>-1?parseInt(navigator.userAgent.split("Safari/")[1]):navigator.userAgent.indexOf("MSIE/")>-1||navigator.userAgent.indexOf("rv:")>-1?parseInt(navigator.userAgent.split("MSIE/")[1]):1/0})}function ta(){return ge(this,null,function*(){return navigator.userAgent.indexOf("Win")>-1?"Windows":navigator.userAgent.indexOf("Mac")>-1?"MacOS":navigator.userAgent.indexOf("Linux")>-1?"Linux":navigator.userAgent.indexOf("UNIX")>-1?"UNIX":"Unknown"})}function na(e){return ge(this,null,function*(){return e?(console.log("WebGl2 is enabled"),!0):(console.log(typeof WebGL2RenderingContext!="undefined"?"WebGL2 may be disabled. Please try updating video card drivers":"WebGL2 is not supported"),!1)})}function oa(e){return ge(this,null,function*(){let t;if(e&&(t=e.getExtension("WEBGL_debug_renderer_info"),t)){const n=e.getParameter(t.UNMASKED_VENDOR_WEBGL);return n.indexOf("(")>-1&&n.indexOf(")")>-1?n.substring(n.indexOf("(")+1,n.indexOf(")")):n}return null})}function sa(e){return ge(this,null,function*(){if(e){const t=e.getExtension("WEBGL_debug_renderer_info");return t?e.getParameter(t.UNMASKED_VENDOR_WEBGL):null}else return null})}function ra(e){return ge(this,null,function*(){if(e){if(_o()==="Firefox")return e.getParameter(e.RENDERER);const t=e.getExtension("WEBGL_debug_renderer_info");return t?e.getParameter(t.UNMASKED_RENDERER_WEBGL):null}else return null})}function aa(e){return ge(this,null,function*(){let t;if(e){if(_o()==="Firefox")return e.getParameter(e.RENDERER);if(t=e.getExtension("WEBGL_debug_renderer_info"),t){let n=e.getParameter(t.UNMASKED_RENDERER_WEBGL);return n.indexOf("(")>-1&&n.indexOf(")")>-1&&n.indexOf("(R)")===-1&&(n=n.substring(n.indexOf("(")+1,n.indexOf(")")),n.split(",").length===3)?n.split(",")[1].trim():n}}return null})}function ia(){return ge(this,null,function*(){return navigator.hardwareConcurrency})}function la(){return ge(this,null,function*(){return/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)})}function ua(e,t=null){return ge(this,null,function*(){const n=new Date;if(e.isModelFullVol?e.Brainchop_Ver="FullVolume":e.Brainchop_Ver="SubVolumes",e.Total_t=(Date.now()-e.startTime)/1e3,delete e.startTime,e.Date=parseInt(n.getMonth()+1)+"/"+n.getDate()+"/"+n.getFullYear(),e.Browser=yield _o(),e.Browser_Ver=yield ea(),e.OS=yield ta(),e.WebGL2=yield na(t),e.GPU_Vendor=yield oa(t),e.GPU_Card=yield aa(t),e.GPU_Vendor_Full=yield sa(t),e.GPU_Card_Full=yield ra(t),e.CPU_Cores=yield ia(),e.Which_Brainchop="latest",(yield la())&&(e.Heap_Size_MB=window.performance.memory.totalJSHeapSize/(1024*1024).toFixed(2),e.Used_Heap_MB=window.performance.memory.usedJSHeapSize/(1024*1024).toFixed(2),e.Heap_Limit_MB=window.performance.memory.jsHeapSizeLimit/(1024*1024).toFixed(2)),t){console.log("MAX_TEXTURE_SIZE :",t.getParameter(t.MAX_TEXTURE_SIZE)),console.log("MAX_RENDERBUFFER_SIZE :",t.getParameter(t.MAX_RENDERBUFFER_SIZE));const o=t.getExtension("WEBGL_debug_renderer_info");console.log("VENDOR WEBGL:",t.getParameter(o.UNMASKED_VENDOR_WEBGL)),e.Texture_Size=t.getParameter(t.MAX_TEXTURE_SIZE)}else e.Texture_Size=null;return e})}const qo=.5,Io=8,To=(e,t,n)=>Math.min(n,Math.max(t,e)),Eo=e=>Math.hypot(e[0].clientX-e[1].clientX,e[0].clientY-e[1].clientY);function xs(e){e&&(e.pan2Dxyzmm=Float32Array.from([0,0,0,1]),e.scaleMultiplier=1),ca()}function ca(){const e=document.querySelector('meta[name="viewport"]');if(!e)return;const t=e.getAttribute("content")||"width=device-width, initial-scale=1.0";/maximum-scale/.test(t)||(e.setAttribute("content",`${t}, maximum-scale=1, user-scalable=no`),requestAnimationFrame(()=>requestAnimationFrame(()=>e.setAttribute("content",t))))}function fa(){const e=t=>t.preventDefault();for(const t of["gesturestart","gesturechange","gestureend"])document.addEventListener(t,e,{passive:!1});document.addEventListener("touchmove",t=>{t.touches.length>1&&t.preventDefault()},{passive:!1})}function pa(e){const t=new Set,n=s=>{t.size>1&&s.stopPropagation()},o=s=>t.delete(s.pointerId);window.addEventListener("pointerdown",s=>{s.pointerType==="touch"&&s.target===e&&t.add(s.pointerId),n(s)},!0),window.addEventListener("pointermove",n,!0),window.addEventListener("pointerup",o,!0),window.addEventListener("pointercancel",o,!0)}function ma(e,t,n,o,s){const i=e[3]/t;return[0,1,2].map(r=>{const a=n[r]-(o[r]+s[r])/2;return i*(a+e[r])-a})}function da(e){const t=e.canvas;if(!t)return;pa(t);let n=null;const o=r=>{var g,d,u;if(r.touches.length!==2){n=null;return}const a=t.getBoundingClientRect(),f=window.devicePixelRatio||1,l=((r.touches[0].clientX+r.touches[1].clientX)/2-a.left)*f,c=((r.touches[0].clientY+r.touches[1].clientY)/2-a.top)*f;n={dist:Math.max(1,Eo(r.touches)),pan:Array.from(e.pan2Dxyzmm),scale3d:e.scaleMultiplier||1,inRender:(u=(d=(g=e.view)==null?void 0:g.hitTest(l,c))==null?void 0:d.isRender)!=null?u:!1}},s=()=>{n=null},i=r=>{if(!n||r.touches.length!==2)return;const a=Eo(r.touches)/n.dist;if(!isFinite(a)||a<=0)return;if(n.inRender){e.scaleMultiplier=To(n.scale3d*a,qo,Io);return}const f=To(n.pan[3]*a,qo,Io),l=ma(n.pan,f,e.getCrosshairPos(),e.model.extentsMin,e.model.extentsMax);e.pan2Dxyzmm=Float32Array.from([l[0],l[1],l[2],f]),e.isYoked3DTo2DZoom?e.scaleMultiplier=f:e.drawScene()};t.addEventListener("touchstart",o,{passive:!0}),t.addEventListener("touchmove",i,{passive:!0}),t.addEventListener("touchend",s,{passive:!0}),t.addEventListener("touchcancel",s,{passive:!0})}function ga(e){return fa(),da(e),{resetView:()=>xs(e)}}const _a=720,ba=860;function wa(){var s,i,r,a,f,l;const e=window.visualViewport,t=Math.round((i=(s=e==null?void 0:e.width)!=null?s:window.innerWidth)!=null?i:0),n=Math.round((a=(r=e==null?void 0:e.height)!=null?r:window.innerHeight)!=null?a:0);return t>0&&t<=_a?!0:!!((l=(f=window.matchMedia)==null?void 0:f.call(window,"(pointer: coarse)"))==null?void 0:l.matches)&&Math.min(t,n)<=ba}const An=[{id:"multi",label:"All",title:"All planes",type:Cn.MULTIPLANAR},{id:"axial",label:"A",title:"Axial only",type:Cn.AXIAL},{id:"coronal",label:"C",title:"Coronal only",type:Cn.CORONAL},{id:"sagittal",label:"S",title:"Sagittal only",type:Cn.SAGITTAL},{id:"render",label:"3D",title:"3D render only",type:Cn.RENDER}];function $s(e,t,n){const o=An.find(s=>s.id===n)||An[0];e.sliceType=o.type,t.querySelectorAll("button").forEach(s=>s.classList.toggle("active",s.dataset.pane===o.id))}function ha(e,t){const n=document.createElement("div");n.id="paneSwitcher",n.className="pane-switcher",n.setAttribute("role","group"),n.setAttribute("aria-label","Visible planes");for(const s of An){const i=document.createElement("button");i.type="button",i.dataset.pane=s.id,i.textContent=s.label,i.title=s.title,i.setAttribute("aria-label",s.title),i.addEventListener("click",()=>$s(e,n,s.id)),n.appendChild(i)}const o=document.createElement("button");return o.type="button",o.className="pane-reset",o.textContent="⟲",o.title="Reset zoom and pan",o.setAttribute("aria-label","Reset zoom and pan"),o.addEventListener("click",()=>xs(e)),n.appendChild(o),t.appendChild(n),n}function ya(e){var s;const t=document.getElementById("canvas-container")||document.body,n=ha(e,t);n.querySelector('button[data-pane="multi"]').classList.add("active"),window.addEventListener("keydown",i=>{if(i.key!=="v"&&i.key!=="V"||i.altKey||i.ctrlKey||i.metaKey||i.repeat)return;const r=i.target;if(r instanceof HTMLElement&&(r.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(r.tagName)))return;i.preventDefault(),i.stopImmediatePropagation();const a=An.findIndex(f=>f.type===e.sliceType);$s(e,n,An[(a+1)%An.length].id)},!0);const o=()=>document.body.classList.toggle("nv-narrow",wa());window.addEventListener("resize",o),window.addEventListener("orientationchange",o),(s=window.visualViewport)==null||s.addEventListener("resize",o),o()}function No(e,t=e.img.slice(),n=e.name){const o=Object.assign(Object.create(Object.getPrototypeOf(e.hdr)),e.hdr),s=Fs(o,t,n);return s.id=crypto.randomUUID(),s}const Zt=e=>e&&typeof e.slice=="function"?e.slice():e;function Oo(e,t,n=e.name,o={},s={}){var f;const i=Object.assign(Object.create(Object.getPrototypeOf(e.hdr)),e.hdr,St({dims:[...e.hdr.dims],pixDims:[...e.hdr.pixDims],affine:e.hdr.affine.map(l=>[...l])},o)),r=e.dims?e.dims.slice(0,4):i.dims.slice(0,4),a=(f=e.nVox3D)!=null?f:r[1]*r[2]*r[3];return St({img:t,hdr:i,originalAffine:i.affine.map(l=>[...l]),dims:r,nVox3D:a,extentsMin:Zt(e.extentsMin),extentsMax:Zt(e.extentsMax),mm000:Zt(e.mm000),mm100:Zt(e.mm100),mm010:Zt(e.mm010),mm001:Zt(e.mm001),dimsRAS:e.dimsRAS?[...e.dimsRAS]:void 0,pixDimsRAS:e.pixDimsRAS?[...e.pixDimsRAS]:void 0,permRAS:e.permRAS?[...e.permRAS]:void 0,toRAS:Zt(e.toRAS),toRASvox:Zt(e.toRASvox),matRAS:Zt(e.matRAS),obliqueRAS:Zt(e.obliqueRAS),oblique_angle:e.oblique_angle,frac2mm:Zt(e.frac2mm),frac2mmOrtho:Zt(e.frac2mmOrtho),img2RASstep:e.img2RASstep?[...e.img2RASstep]:void 0,img2RASstart:e.img2RASstart?[...e.img2RASstart]:void 0,volScale:e.volScale?[...e.volScale]:void 0,name:n,id:crypto.randomUUID(),calMin:0,calMax:255,robustMin:0,robustMax:255,globalMin:0,globalMax:255,frame4D:0,nFrame4D:1,nTotalFrame4D:1,isLegendVisible:!1},s)}function va(e){let t=256,n=-1,o=0;for(let l=0;l<256;l++){const c=e[l];c>0&&(l<t&&(t=l),n=l,l!==0&&(o+=c))}if(t>n)return{calMin:0,calMax:255,robustMin:0,robustMax:255,globalMin:0,globalMax:255};if(t===n)return{calMin:t,calMax:n,robustMin:t,robustMax:n,globalMin:t,globalMax:n};const s=Math.round(o*.02),i=Math.round(o*.02);let r=0,a=t;for(let l=t;l<=n;l++){if(l===0&&e[0]>s){a=0;break}if(r+=e[l],r>=s){a=l;break}}r=0;let f=n;for(let l=n;l>=t;l--)if(r+=e[l],r>=i){f=Math.min(n,l+1);break}return a>=f&&(a=t,f=n),{calMin:a,calMax:f,robustMin:a,robustMax:f,globalMin:t,globalMax:n}}function eo(e,[t,n,o]){const s=e.dimsRAS,i=e.img2RASstart,r=e.img2RASstep;return!s||!i||!r||t<0||t>=s[1]||n<0||n>=s[2]||o<0||o>=s[3]?null:i[0]+t*r[0]+i[1]+n*r[1]+i[2]+o*r[2]}function Un(e,t){return ge(this,null,function*(){const n=e.img,o=yield Cs(t,e.hdr,n.buffer.byteLength===n.byteLength?n.buffer:n.buffer.slice(n.byteOffset,n.byteOffset+n.byteLength)),s=URL.createObjectURL(new Blob([o]));Object.assign(document.createElement("a"),{href:s,download:t}).click(),URL.revokeObjectURL(s)})}let nn=null,dn=!1,to=0,In=!1,Nn=[];const Ss=/Safari/.test(navigator.userAgent)&&!/Chrome|Chromium|CriOS|FxiOS|Edg|Android/.test(navigator.userAgent),xa=Ss&&new URLSearchParams(window.location.search).get("inference")!=="webgpu";function Do(){return ge(this,null,function*(){const e={secureContext:window.isSecureContext,navigatorGpuExists:"gpu"in navigator,adapterObtained:!1,deviceObtained:!1,f16Support:!1,error:null};if(window.isSecureContext||(console.warn("WebGPU requires a secure context (HTTPS or localhost)."),console.warn("Current origin:",window.location.origin)),"gpu"in navigator)try{console.log("Requesting WebGPU adapter...");const t=yield navigator.gpu.requestAdapter();if(t){e.adapterObtained=!0,console.log("WebGPU adapter obtained:",t),t.info&&console.log("Adapter info:",t.info),console.log("Adapter limits:",{maxBufferSize:t.limits.maxBufferSize,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension});const n={maxBufferSize:t.limits.maxBufferSize,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxStorageBuffersPerShaderStage:t.limits.maxStorageBuffersPerShaderStage,maxUniformBufferBindingSize:t.limits.maxUniformBufferBindingSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ,maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension},o=t.features.has("shader-f16"),s=t.features.has("subgroups");e.f16Support=o,e.subgroupsSupport=s;const i=[];o&&i.push("shader-f16"),s&&i.push("subgroups");const r=yield t.requestDevice({requiredLimits:n,requiredFeatures:i});r.__adapterInfo=t.info||null,r.__isLost=!1,r.lost&&typeof r.lost.then=="function"&&r.lost.then(f=>{r.__isLost=!0,(f==null?void 0:f.reason)!=="destroyed"&&(console.warn(`[WebGPU] Device was lost (${(f==null?void 0:f.reason)||"unknown"}): ${(f==null?void 0:f.message)||""}`),nn===r&&(nn=null,dn=!1,e.deviceObtained=!1,e.error=(f==null?void 0:f.message)||"WebGPU device lost",Vo(!1,e)))}),nn=r,e.deviceObtained=!0,dn=!0,console.log(`✓ WebGPU initialized successfully. F16: ${o?"enabled":"not available"}, Subgroups: ${s?"enabled":"not available"}`)}else console.warn("WebGPU adapter request returned null."),console.warn("This typically means:"),console.warn("  - Safari: WebGPU feature flags not enabled in Settings > Feature Flags"),console.warn("  - Unsupported GPU hardware"),console.warn("  - GPU drivers need updating"),e.error="Adapter returned null"}catch(t){e.error=t.message,console.error("WebGPU initialization error:",t),navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")&&(console.warn("Safari detected. To enable WebGPU:"),console.warn("  1. Open Safari Settings/Preferences"),console.warn('  2. Go to Advanced tab, enable "Show features for web developers"'),console.warn("  3. Go to Feature Flags tab"),console.warn("  4. Enable: WebGPU, GPU Process: DOM Rendering, GPU Process: Canvas Rendering"),console.warn("  5. Restart Safari"))}else console.warn("navigator.gpu not found. WebGPU API is not available in this browser."),e.error="navigator.gpu not found",navigator.userAgent.includes("Firefox")&&(console.warn("Firefox detected. To enable WebGPU in about:config:"),console.warn("  1. Set dom.webgpu.enabled = true"),console.warn("  2. Set gfx.webgpu.ignore-blocklist = true"),console.warn("  3. Restart Firefox"));return Vo(dn,e),dn||console.log("Falling back to WebGL backend."),window.webgpuDiagnostics=e,e})}function Vo(e,t){const n=document.getElementById("backendStatus");if(!n){console.log("Backend status element not found in DOM");return}if(e){const o=t.f16Support?" (F16)":"";n.textContent=`WebGPU${o}`,n.style.color="#4CAF50",n.title="WebGPU backend active - fastest performance"}else{n.textContent="WebGL",n.style.color="#FF9800";let o="WebGL backend (fallback)";t.error&&(o+=`
Reason: ${t.error}`),t.secureContext||(o+=`
⚠ Not a secure context (HTTPS required)`),Ss&&(o+=`

To enable WebGPU in Safari:
1. Settings > Feature Flags
2. Enable WebGPU flags
3. Restart Safari`),navigator.userAgent.includes("Firefox")&&(o+=`

To enable WebGPU in Firefox:
1. about:config > dom.webgpu.enabled = true
2. gfx.webgpu.ignore-blocklist = true
3. Restart Firefox`),n.title=o}}function $a(){return ge(this,null,function*(){let e="",t="",n=null,o=null,s=null,i=null;function r(){const S=modelSelect.value;return S==="-1"||modelSelect.selectedIndex<0?null:hn[S]||null}function a(){const S=r();modelSelect.title=(S==null?void 0:S.description)||"Choose a segmentation model to run"}const f="altKey";let l=null,c=null,g=null,d=null,u=null,p=null,m=null,y="input.nii.gz",k=null;const _=document.getElementById("dragSegmented");_&&_.querySelectorAll("button").forEach(S=>{S.onclick=()=>{E.secondaryDragMode=parseInt(S.dataset.drag,10),_.querySelectorAll("button").forEach(F=>F.classList.toggle("active",F===S))}});const w=document.getElementById("drawBtn"),h=document.getElementById("drawPopover"),$=document.getElementById("penRow"),b=document.getElementById("drawApplyRow");function P(S){h&&(h.hidden=!S,w&&w.setAttribute("aria-expanded",String(S)))}function C(S){E.drawIsEnabled=S>=0,S>=0&&(!E.drawingVolume&&E.volumes.length&&E.createEmptyDrawing(),E.drawPenValue=S&7,E.drawPenFilled=S>7),$&&$.querySelectorAll(".chip").forEach(F=>F.classList.toggle("active",parseInt(F.dataset.pen,10)===S))}function v(S){return ge(this,null,function*(){var de;if(E.volumes.length<2){window.alert("No segmentation open (run a model first).");return}if(S===0){E.drawUndo();return}const F=(de=E.drawingVolume)==null?void 0:de.img;if(!F){window.alert("Nothing drawn yet — pick a pen and draw on the image first.");return}const I=E.volumes[1].img;if(I instanceof Float32Array){window.alert("Drawing edits label segmentations, not probability maps.");return}const ce=E.volumes[1],fe=ce.dimsRAS;if(!fe||F.length!==fe[1]*fe[2]*fe[3]){window.alert("The drawing does not match the current image — redraw it.");return}const K=S===1?1:0;let Ue=0;for(let xe=0;xe<fe[3];xe++)for(let ue=0;ue<fe[2];ue++)for(let _e=0;_e<fe[1];_e++,Ue++)F[Ue]>0&&(I[eo(ce,[_e,ue,xe])]=K);E.closeDrawing(),yield E.updateGLVolume(),E.drawIsEnabled=!1,C(-1)})}w&&(w.onclick=S=>{S.stopPropagation(),P(h.hidden)}),$&&$.querySelectorAll(".chip").forEach(S=>{S.onclick=()=>C(parseInt(S.dataset.pen,10))}),b&&b.querySelectorAll(".chip").forEach(S=>{S.onclick=()=>v(parseInt(S.dataset.apply,10))}),document.addEventListener("click",S=>{!h||h.hidden||S.target.closest(".popover-wrap")||P(!1)}),document.addEventListener("keydown",S=>{S.key==="Escape"&&P(!1)});const x=document.getElementById("appDialog");x&&x.addEventListener("click",S=>{S.target===x&&x.close()}),aboutBtn.onclick=function(){fn("About BrainChop",`
      <div style="text-align: left; font-size: 0.95em;">
        <p><strong>🔒 Privacy First</strong><br>
        BrainChop runs entirely <strong>locally in your browser</strong>. Your imaging data never leaves your device, and no server-side processing is involved.</p>

        <p><strong>⌨️ Controls</strong><br>
        • <strong>Drag & Drop</strong> any NIfTI file to open.
        • Press <strong>C</strong> to toggle/cycle the clip-plane.
        • Press <strong>V</strong> repeatedly to cycle through views.
        • <strong>Option/Alt-click</strong> a segmentation label or CAT-lite tissue to show it alone in all panels + 3D. Click it again, click the background, or press Esc to restore all overlays.</p>

        <p><strong>🧠 AI Models</strong><br>
        <strong>🪓🧠 Omnimodal Skull Stripping:</strong> <em>Omnimodal Skull Stripping</em> (MindGrab) extracts the brain across T1, T2, FLAIR, DWI, EPI, MRA, PDw, qT1, CT, and PET.<br>
        <strong>🪓 / ⚡🪓 Subcortical + Tissue:</strong> <em>Subcortical + Tissue</em> (MindMap 24-channel) and <em>⚡🪓 Subcortical + Tissue</em> (MindMap 16-channel) for sub-3s research and clinical T1w parcellation.<br>
        <strong>⅔🧠 Tissue Fractions:</strong> <em>Tissue fraction maps (GM/WM/CSF)</em> for CAT-inspired continuous partial-volume estimation.<br>
        <strong>🪓🔪 / 🔪 Cortical + Subcortical Parcellation:</strong> <em>Desikan-Killiany Atlas</em> (104-region cortical + subcortical + 5-part corpus callosum) for standard and clinical T1w MRIs; <em>Desikan-Killiany (lesion scans)</em> for large focal lesions; <em>Desikan-Killiany 50</em> for merged bilateral cortical homologues.</p>
        
        <p><em>Note: Models may run slower on limited devices to ensure memory safety.</em></p>
      </div>
    `)};const G=document.getElementById("shadingBtn");G.onclick=()=>{const S=G.classList.toggle("active");G.setAttribute("aria-pressed",String(S)),E.volumeIllumination=S?.5:0},diagnosticsBtn.onclick=function(){let S=e;if(S.length<1&&window.webgpuDiagnostics){const I=window.webgpuDiagnostics;S=`:: Startup Diagnostics ::
`,S+=`Secure Context: ${I.secureContext}
`,S+=`WebGPU Enabled: ${dn}
`,S+=`F16 Support: ${I.f16Support}
`,I.error&&(S+=`Error: ${I.error}
`),S+=`User Agent: ${navigator.userAgent}
`}if(S.length<1){fn("Diagnostics","No diagnostic string generated: run a model to create diagnostics");return}let F=S;t=t.slice(0,-2),t!==""&&F.includes("Status: OK")&&(F=F.replace("Status: OK",`Status: ${t}`)),t="",navigator.clipboard.writeText(F).then(()=>{fn("Diagnostics",`<p>Diagnostics copied to clipboard</p><pre style="white-space: pre-wrap; font-family: monospace; font-size: 0.9em; overflow-x: auto;">${F}</pre>`)}).catch(I=>{fn("Diagnostics",`<p>Failed to copy to clipboard.</p><pre style="white-space: pre-wrap; font-family: monospace; font-size: 0.9em; overflow-x: auto;">${F}</pre>`)})},opacitySlider0.oninput=()=>{E.volumes[0]&&(E.volumes[0].opacity=Number(opacitySlider0.value)),E.updateGLVolume()};function M(){const S=Number(opacitySlider1.value);E.volumes.slice(1).forEach((F,I)=>{F.opacity=(g==null?void 0:g[I])===F&&c!==null&&I!==c?0:S}),E.updateGLVolume()}opacitySlider1.oninput=M;function A(S=null){const F=S==null?void 0:S.probabilityUnderlayOpacity;F!==void 0?(m===null&&(m=opacitySlider0.value),opacitySlider0.value=F,E.volumes[0]&&(E.volumes[0].opacity=Number(F))):m!==null&&(opacitySlider0.value=m,m=null,E.volumes[0]&&(E.volumes[0].opacity=Number(opacitySlider0.value)))}function T(){return ge(this,null,function*(){const S=E.volumes[0];let F=S.dims[1]===256&&S.dims[2]===256&&S.dims[3]===256&&S.img instanceof Uint8Array&&S.img.length===256*256*256;if((S.permRAS[0]!==-1||S.permRAS[1]!==3||S.permRAS[2]!==-2)&&(F=!1),F)return;Ye("Conforming input volume to 256³...",.05),yield ys(),yield z();const I=yield E.volumeTransform.conform(S,{toRAS:!1}),[ce,fe]=[p,y],K=modelSelect.value;yield E.removeVolume(0),yield E.addVolume(I),[p,y]=[ce,fe],modelSelect.value=K,a()})}function U(){for(c=null,g=null;E.model.volumes.length>1;)E.model.removeVolume(E.model.volumes.length-1)}function z(){return ge(this,null,function*(){U(),yield E.updateGLVolume()})}function N(){return E.volumes.length>=2&&E.volumes[1].colormapLabel?E.volumes[1]:null}function L(){l=null,d=null,u=null,R&&(R.style.display="none")}function Z(){const S=N();if(S){if(d===null&&(d=S.img),l===null)S.img=d,u=null;else{const F=d,I=new F.constructor(F.length);for(let ce=0;ce<F.length;ce++)I[ce]=F[ce]===l?l:0;S.img=I,u=te(l)}E.updateGLVolume(),q()}}function te(S){const F=E.volumes[0],I=d||E.volumes[1]&&E.volumes[1].img;if(!F||!I)return null;const ce=F.hdr.pixDims||[],fe=ce[1]&&ce[2]&&ce[3]?ce[1]*ce[2]*ce[3]:1,K=me(F.img,I,fe),Ue=K.reduce((ve,ct)=>ve+ct.volume_mm3,0),de=K.find(ve=>ve.label===S);if(!de)return null;const xe=Ue>0?de.volume_mm3/Ue*100:0,ue=[de.name,`${H(de.volume_mm3)} cm3   (${xe.toFixed(1)}% of brain)`,`${de.voxels.toLocaleString()} voxels`,`intensity  ${de.mean.toFixed(0)} +/- ${de.stdev.toFixed(0)}`];let _e=[1,1,1,1];if(o&&o.R&&o.R[S]!=null){const ve=ct=>Math.min(255,ct*.55+130)/255;_e=[ve(o.R[S]),ve(o.G[S]),ve(o.B[S]),1]}return{lines:ue,color:_e}}let R=null;function q(){var de,xe;R||(R=document.createElement("div"),R.style.cssText="position:absolute;pointer-events:none;font:13px/1.55 system-ui,sans-serif;text-shadow:0 1px 2px #000;white-space:pre;color:#ebebeb",E.canvas.parentElement.appendChild(R));const S=(xe=(de=E.view)==null?void 0:de.screenSlices)==null?void 0:xe.find(ue=>ue.axCorSag===4);if(l===null||!u||!N()||!S){R.style.display="none";return}const F=window.devicePixelRatio||1,[I,ce]=S.leftTopWidthHeight;Object.assign(R.style,{left:`${I/F+8}px`,top:`${ce/F+8}px`});const{lines:fe,color:K}=u,Ue=K.slice(0,3).map(ue=>Math.round(ue*255)).join(",");R.innerHTML=`<span style="color:rgb(${Ue})">${cn(fe[0])}</span>
`+fe.slice(1).map(cn).join(`
`),R.style.display="block"}function D(){const S=N();if(!S||!k)return null;const F=eo(S,k);if(F===null)return null;const I=(d||S.img)[F];return I===void 0?null:Math.round(I*S.hdr.scl_slope+S.hdr.scl_inter)}function oe(S){N()&&(l=S===0||S===l?null:S,Z())}function O(){if(!g||!k||g.some((I,ce)=>E.volumes[ce+1]!==I))return;let S=null,F=0;for(let I=0;I<g.length;I++){const ce=g[I],fe=eo(ce,k);if(fe===null)return;const K=ce.img[fe];Number.isFinite(K)&&K>F&&(F=K,S=I)}return S}function j(S){if(S[f]){if(N()){const F=D();if(F===null||Number.isNaN(F))return;oe(F)}else{const F=O();if(F===void 0)return;const I=F===c?null:F;I!==c&&(c=I,M())}S.preventDefault()}}function he(){return ge(this,null,function*(){if(!In){In=!0,Nn=[];try{yield Pe()}finally{In=!1,modelSelect.value="-1",a()}}})}function Pe(){return ge(this,null,function*(){var ct;const S=modelSelect.value;if(S==="-1"||modelSelect.selectedIndex<0)return;const F=document.getElementById("memstatusItem");F&&(F.hidden=!0),L(),yield T();const I=hn[S],ce=(new URLSearchParams(window.location.search).get("precision")||"").toLowerCase(),K=St(St({},Ro(I,ce!=="fp16"&&ce!=="fp32")),ce==="fp32"?{forceFP32:!0}:{}),Ue=St({},Jr),de=new URL("./",window.location.href).href;Ue.rootURL=de.endsWith("/")?de.slice(0,-1):de;const xe=E.volumes[0].img;let ue=null;const _e=xa&&!K.quantize8Bit,ve=_e;if(_e&&dn&&K.webgpu_safetensor&&console.info("Safari WebGPU legacy gate active for non-V4 model; routing to native WebGL2."),!ve&&(!nn||nn.__isLost)&&"gpu"in navigator&&to<2&&(ct=window.webgpuDiagnostics)!=null&&ct.adapterObtained&&(to++,console.info(`[WebGPU] Re-initializing device after prior loss (attempt ${to})...`),yield Do()),dn&&nn&&!nn.__isLost&&!ve&&K.webgpu_safetensor){console.log("Attempting WebGPU backend...");const Re=It(St({},K),{enableTTA:!1});try{yield Qr(nn,Ue,Re,E.volumes[0].hdr,xe,gt,Ye);return}catch(je){ue=je,console.error("WebGPU inference failed, falling back to native WebGL2.",je)}}if(I.webgpu_safetensor){const Re=ce==="int8"||ce==="rgba8",je=It(St({},Ro(I,!1)),{quantize8Bit:Re,autoQuantize8BitFallback:!Re&&!!I.turbo});try{const{runInferenceWebGl2:Ie,nativeWebgl2Available:Qe}=yield bt(()=>ge(null,null,function*(){const{runInferenceWebGl2:Bt,nativeWebgl2Available:Xe}=yield import("./inference-webgl2-KCvAzhde.js");return{runInferenceWebGl2:Bt,nativeWebgl2Available:Xe}}),[],import.meta.url);if(Qe()){console.log("Attempting native WebGL2 runner..."),yield Ie(Ue,je,E.volumes[0].hdr,xe,gt,Ye);return}ue=new Error("Native WebGL2 unavailable (no OffscreenCanvas WebGL2 context)."),console.warn(ue.message)}catch(Ie){ue=Ie,console.error("Native WebGL2 failed.",Ie)}}Sa(ue||new Error(`No available backend could run ${K.modelName}.`))})}modelSelect.onchange=()=>(a(),he()),a();function Ce(S){return ge(this,null,function*(){const F=N(),I=l!==null&&F&&d;I&&(F.img=d);try{return yield S()}finally{I&&Z()}})}function ye(){const S=E.volumes[1],F=(s==null?void 0:s.type)==="Brain_Extraction"?i:l!==null&&d?d:S.img;if(!F||F.length!==S.img.length)throw new Error("The segmentation mask is unavailable. Run the model again.");const I=new Uint8Array(F.length);for(let fe=0;fe<F.length;fe++)I[fe]=F[fe]!==0?1:0;const ce=No(S,I,"brain_mask");return Object.assign(ce.hdr,{datatypeCode:2,numBitsPerVoxel:8,scl_slope:1,scl_inter:0,cal_min:0,cal_max:1,intent_code:1002}),ce}function Q(S=!1){return ge(this,null,function*(){if(E.volumes.length<2){window.alert("No segmentation to save (run a model first).");return}const F=E.volumes.slice(1);yield Ce(()=>ge(null,null,function*(){for(const I of F)yield Un(I,ee(I,F.length,""));S&&(yield Un(ye(),"binary_mask.nii.gz"))}))})}function ee(S,F,I){return F>1?`segmentation_${S.name}${I}.nii.gz`:`segmentation${I}.nii.gz`}function W(){if(E.volumes.length<1){window.alert("No image loaded.");return}Un(E.volumes[0],"conformed_input.nii.gz")}function X(){return ge(this,null,function*(){if(E.volumes.length<1){window.alert("No image loaded.");return}yield Ce(()=>ge(null,null,function*(){yield E.saveDocument("brainchop.nvd")}))})}function V(S=!1){return ge(this,null,function*(){if(E.volumes.length<2){window.alert("No segmentation to save (run a model first).");return}if(!p||!p.hdr||!p.hdr.affine){window.alert("Original input grid is unavailable — reload the image and try again.");return}Ye("Reslicing to native space…",0),yield new Promise(F=>setTimeout(F,30));try{const F=E.volumes.slice(1);for(const I of F){const ce=yield Ce(()=>se(I));yield Un(ce,ee(I,F.length,"_native"))}if(S){const I=se(ye());yield Un(I,"binary_mask_native.nii.gz")}Ye("Saved native-space segmentation.",1)}catch(F){console.error("Native-space reslice failed:",F),window.alert("Native-space export failed: "+(F&&F.message?F.message:F))}})}function se(S){const F=S.img,I=p.hdr.affine,ce=p.hdr.dims[1],fe=p.hdr.dims[2],K=p.hdr.dims[3],Ue=S.hdr.dims[1],de=S.hdr.dims[2],xe=S.hdr.dims[3],ue=(ie,We)=>[ie[0][0]*We[0]+ie[0][1]*We[1]+ie[0][2]*We[2]+ie[0][3],ie[1][0]*We[0]+ie[1][1]*We[1]+ie[1][2]*We[2]+ie[1][3],ie[2][0]*We[0]+ie[2][1]*We[1]+ie[2][2]*We[2]+ie[2][3]],_e=Ls();if(!Ws(_e,Gs(...S.hdr.affine[0],...S.hdr.affine[1],...S.hdr.affine[2],...S.hdr.affine[3])))throw new Error("Segmentation affine is not invertible");const ve=(ie,We)=>[ie[0]*We[0]+ie[1]*We[1]+ie[2]*We[2]+ie[3],ie[4]*We[0]+ie[5]*We[1]+ie[6]*We[2]+ie[7],ie[8]*We[0]+ie[9]*We[1]+ie[10]*We[2]+ie[11]],ct=ie=>ve(_e,ue(I,ie)),Re=ct([0,0,0]),je=ct([1,0,0]).map((ie,We)=>ie-Re[We]),Ie=ct([0,1,0]).map((ie,We)=>ie-Re[We]),Qe=ct([0,0,1]).map((ie,We)=>ie-Re[We]),Bt=!!S.colormapLabel||S.hdr.intent_code===1002,Xe=ce*fe*K,be=No(p),we=(ie,We,Ke)=>ie>=0&&ie<Ue&&We>=0&&We<de&&Ke>=0&&Ke<xe?F[ie+We*Ue+Ke*Ue*de]:0;if(Bt){const ie=[];for(const Lt of[-.25,.25])for(const Te of[-.25,.25])for(const mt of[-.25,.25])ie.push([Lt*je[0]+Te*Ie[0]+mt*Qe[0],Lt*je[1]+Te*Ie[1]+mt*Qe[1],Lt*je[2]+Te*Ie[2]+mt*Qe[2]]);const We=new Int16Array(Xe);let Ke=0;const Ee=new Int32Array(8),vt=new Int32Array(8);let Be=0;for(let Lt=0;Lt<K;Lt++)for(let Te=0;Te<fe;Te++){let mt=Re[0]+Te*Ie[0]+Lt*Qe[0],Wt=Re[1]+Te*Ie[1]+Lt*Qe[1],xt=Re[2]+Te*Ie[2]+Lt*Qe[2];for(let Mt=0;Mt<ce;Mt++){let nt=0;for(let J=0;J<8;J++){const ne=we(Math.round(mt+ie[J][0]),Math.round(Wt+ie[J][1]),Math.round(xt+ie[J][2]));let Ne=-1;for(let ot=0;ot<nt;ot++)if(Ee[ot]===ne){Ne=ot;break}Ne<0?(Ee[nt]=ne,vt[nt]=1,nt++):vt[Ne]++}let $e=Ee[0],Ge=vt[0];for(let J=1;J<nt;J++)vt[J]>Ge&&(Ge=vt[J],$e=Ee[J]);$e>Ke&&(Ke=$e),We[Be++]=$e,mt+=je[0],Wt+=je[1],xt+=je[2]}}be.hdr.datatypeCode=4,be.hdr.numBitsPerVoxel=16,be.hdr.scl_slope=1,be.hdr.scl_inter=0,be.hdr.cal_min=0,be.hdr.cal_max=Ke,be.hdr.intent_code=1002,be.img=We}else{const ie=S.img instanceof Float32Array,We=ie?255:1,Ke=ie?.5:0,Ee=ie?new Uint8Array(Xe):be.img;Ee.fill(0),ie&&(Object.assign(be.hdr,{datatypeCode:2,numBitsPerVoxel:8,cal_min:0,cal_max:1}),be.img=Ee),be.hdr.scl_slope=1/We,be.hdr.scl_inter=0;const Be=ie?(Te,mt,Wt)=>{const xt=Math.floor(Te),Mt=Math.floor(mt),nt=Math.floor(Wt),$e=Te-xt,Ge=mt-Mt,J=Wt-nt,ne=we(xt,Mt,nt),Ne=we(xt+1,Mt,nt),ot=we(xt,Mt+1,nt),Ft=we(xt+1,Mt+1,nt),it=we(xt,Mt,nt+1),st=we(xt+1,Mt,nt+1),ke=we(xt,Mt+1,nt+1),re=we(xt+1,Mt+1,nt+1),Gt=ne+$e*(Ne-ne),pt=ot+$e*(Ft-ot),Je=it+$e*(st-it),De=ke+$e*(re-ke),Pt=Gt+Ge*(pt-Gt),ft=Je+Ge*(De-Je);return Pt+J*(ft-Pt)}:(Te,mt,Wt)=>we(Math.round(Te),Math.round(mt),Math.round(Wt));let Lt=0;for(let Te=0;Te<K;Te++)for(let mt=0;mt<fe;mt++){let Wt=Re[0]+mt*Ie[0]+Te*Qe[0],xt=Re[1]+mt*Ie[1]+Te*Qe[1],Mt=Re[2]+mt*Ie[2]+Te*Qe[2];for(let nt=0;nt<ce;nt++)Ee[Lt++]=Be(Wt,xt,Mt)*We+Ke,Wt+=je[0],xt+=je[1],Mt+=je[2]}}return be}const Le=[{act:Q,title:"Segmentation: conformed",sub:"256³ · 1 mm iso",need:"seg"},{act:V,title:"Segmentation: native space",sub:"resampled to the input grid",need:"seg"},{act:W,title:"Conformed input volume",sub:"the resampled T1 (256³ · 1 mm)",need:"img"},{act:X,title:"Scene",sub:"everything, as a .nvd document",need:"img"}];function ze(){const S=E.volumes.length>=1,F=E.volumes.length>=2,I=F&&s&&s.outputType!=="probability"&&(s.type!=="Brain_Extraction"||!!i),ce=de=>de==="seg"?F:S,fe=Le.map((de,xe)=>{const ue=ce(de.need)?"":" disabled";return`<button type="button" class="save-opt${ue}" data-i="${xe}"${ue?" disabled":""}>
        <span class="save-opt-title">${de.title}</span>
        <span class="save-opt-sub">${de.sub}</span>
      </button>`}).join("");fn("Save",`<div class="save-options">${fe}</div>${I?'<label class="save-mask-option"><input type="checkbox" id="saveBinaryMask"><span><strong>Also save binary mask</strong><small>Foreground 1 · background 0</small></span></label>':""}`,{hideClose:!0,saveMode:!0});const Ue=document.getElementById("dialogMessage");Ue&&Ue.querySelectorAll(".save-opt:not(.disabled)").forEach(de=>{de.onclick=()=>{var ve;const xe=Le[parseInt(de.dataset.i,10)],ue=xe.need==="seg"&&!!((ve=Ue.querySelector("#saveBinaryMask"))!=null&&ve.checked),_e=document.getElementById("appDialog");_e&&_e.open&&_e.close(),xe.act(ue)}})}const le=document.getElementById("saveBtn");le&&(le.onclick=ze);function me(S,F,I){const fe=new Map,K=F.length;for(let xe=0;xe<K;xe++){const ue=F[xe];if(ue===0)continue;let _e=fe.get(ue);_e||(_e={count:0,sum:0,sumSq:0,hist:new Float64Array(256)},fe.set(ue,_e));const ve=S[xe];_e.count++,_e.sum+=ve,_e.sumSq+=ve*ve,_e.hist[ve]++}const Ue=(xe,ue,_e)=>{const ve=_e*ue;let ct=0;for(let Re=0;Re<xe.length;Re++)if(ct+=xe[Re],ct>=ve)return Re;return xe.length-1},de=[];for(const[xe,ue]of[...fe.entries()].sort((_e,ve)=>_e[0]-ve[0])){const _e=ue.sum/ue.count,ve=Math.max(0,ue.sumSq/ue.count-_e*_e);let ct=0,Re=0;for(let je=0;je<ue.hist.length;je++)if(ue.hist[je]>0){ct=je;break}for(let je=ue.hist.length-1;je>=0;je--)if(ue.hist[je]>0){Re=je;break}de.push({label:xe,name:n&&n[xe]!=null?n[xe]:`label_${xe}`,voxels:ue.count,volume_mm3:ue.count*I,min:ct,max:Re,q1:Ue(ue.hist,ue.count,.25),median:Ue(ue.hist,ue.count,.5),q3:Ue(ue.hist,ue.count,.75),mean:_e,stdev:Math.sqrt(ve)})}return de}function Y(S){const F=["label","name","voxels","volume_mm3","min","max","q1","median","q3","mean","stdev"],I=K=>Number.isInteger(K)?String(K):K.toFixed(6),ce=K=>/[",\n]/.test(K)?`"${String(K).replace(/"/g,'""')}"`:String(K),fe=[F.join(",")];for(const K of S)fe.push([K.label,ce(K.name),K.voxels,I(K.volume_mm3),K.min,K.max,K.q1,K.median,K.q3,I(K.mean),I(K.stdev)].join(","));return fe.join(`
`)+`
`}function Fe(S){const F=new Blob([Y(S)],{type:"text/csv"}),I=URL.createObjectURL(F),ce=document.createElement("a");ce.href=I,ce.download="mask_stats.csv",document.body.appendChild(ce),ce.click(),ce.remove(),URL.revokeObjectURL(I)}const H=S=>{const F=S/1e3;return F>=10?Math.round(F).toLocaleString():F.toFixed(1)};function qe(S,F){const I=Math.max(...S.map(K=>K.volume_mm3)),ce=K=>o&&o.R&&o.R[K.label]!=null?`rgb(${o.R[K.label]},${o.G[K.label]},${o.B[K.label]})`:"#6b9bd1";let fe="";for(const K of S){const Ue=F>0?K.volume_mm3/F*100:0,de=I>0?K.volume_mm3/I*100:0,xe=`<span class="stat-val" data-cm3="${H(K.volume_mm3)}" data-pct="${Ue.toFixed(1)}%">${H(K.volume_mm3)}</span>`,ue=`<span class="stat-bar" style="width:${de.toFixed(2)}%;background:${ce(K)}" data-w-abs="${de.toFixed(2)}" data-w-pct="${Ue.toFixed(2)}"></span>`,_e=(ct,Re)=>`<div><span class="k">${ct}</span><span class="v">${Re}</span></div>`,ve=_e("min",K.min)+_e("max",K.max)+_e("Q1",K.q1)+_e("Q3",K.q3)+_e("median",K.median)+_e("mean",K.mean.toFixed(2))+_e("SD",K.stdev.toFixed(2))+_e("voxels",K.voxels.toLocaleString());fe+=`
        <div class="stat-row" role="button" tabindex="0" data-label="${K.label}" style="cursor:pointer">
          <div class="stat-line">
            <span class="stat-name">${cn(K.name)}</span>
            <span class="stat-track">${ue}</span>
            ${xe}
            <button type="button" class="stat-iso" title="Show only this region in the viewer">isolate</button>
          </div>
          <div class="stat-detail" style="display:none">${ve}</div>
        </div>`}return`
      <style>
        /* niivue.css sets a global "div{display:table-row}"; force block/flex on our
           plain container divs so width/1fr track sizing works. */
        /* Cap the dialog and let ONLY the region list scroll, so the header,
           toggle, Download and Close stay pinned/visible with long atlases. */
        #appDialog[open]{max-height:88vh;display:flex;flex-direction:column;box-sizing:border-box}
        #appDialog[open] h3{flex:0 0 auto}
        #appDialog[open] #dialogCloseBtn{flex:0 0 auto;align-self:center;width:auto;float:none}
        #dialogMessage{display:flex;flex-direction:column;flex:1 1 auto;min-height:0}
        #statsPanel{display:flex;flex-direction:column;flex:1 1 auto;min-height:0;width:440px;max-width:100%;box-sizing:border-box}
        #statsPanel .stat-head{flex:0 0 auto;display:flex;justify-content:space-between;align-items:baseline;margin:0 0 8px}
        #statsPanel .stat-total{opacity:.7;font-size:.95em}
        #statsPanel .stat-toggle{flex:0 0 auto;align-self:flex-start;display:inline-flex;border:1px solid #444;border-radius:8px;overflow:hidden;margin:0 0 10px}
        #statsPanel .stat-toggle button{background:transparent;color:inherit;border:0;padding:6px 16px;cursor:pointer;font:inherit;float:none;margin:0}
        #statsPanel .stat-toggle button.active{background:#3a3a3a;font-weight:600}
        #statsPanel #statsRows{flex:1 1 auto;min-height:0;overflow-y:auto;display:block}
        #statsPanel .stat-row{display:block;padding:6px 4px;border-radius:6px}
        #statsPanel .stat-row:hover{background:rgba(255,255,255,.05)}
        #statsPanel .stat-line{display:grid;grid-template-columns:120px 1fr 60px auto;align-items:center;gap:10px}
        #statsPanel .stat-iso{background:transparent;color:inherit;border:1px solid #555;border-radius:6px;padding:2px 8px;font:inherit;font-size:.78em;opacity:.55;cursor:pointer;float:none;margin:0}
        #statsPanel .stat-row:hover .stat-iso{opacity:.9}
        #statsPanel .stat-iso:hover{background:#3a3a3a;border-color:#777}
        #statsPanel .stat-name{text-align:right;opacity:.85;font-size:.9em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
        #statsPanel .stat-track{background:rgba(255,255,255,.06);border-radius:5px;height:18px;overflow:hidden;min-width:0}
        #statsPanel .stat-bar{display:block;height:100%;border-radius:5px;min-width:3px}
        #statsPanel .stat-val{text-align:right;font-variant-numeric:tabular-nums;font-weight:600}
        #statsPanel .stat-detail{margin:4px 0 6px 0;display:grid;grid-template-rows:auto auto;grid-auto-flow:column;grid-auto-columns:1fr;gap:2px 14px;font-size:.78em;font-variant-numeric:tabular-nums}
        #statsPanel .stat-detail>div{display:flex;justify-content:space-between;gap:6px;white-space:nowrap}
        #statsPanel .stat-detail .k{opacity:.55}
        #statsPanel .stat-detail .v{font-weight:600}
        #statsPanel .stat-actions{flex:0 0 auto;display:block;margin-top:12px;border-top:1px solid #444;padding-top:10px;text-align:right}
      </style>
      <div id="statsPanel">
        <div class="stat-head">
          <span class="stat-total" id="statsUnitLabel">total ${H(F)} cm³</span>
        </div>
        <div class="stat-toggle">
          <button type="button" data-mode="cm3" class="active">cm³</button>
          <button type="button" data-mode="pct">% of total</button>
        </div>
        <div id="statsRows">${fe}</div>
        <div class="stat-actions">
          <button type="button" id="statsDownloadBtn">Download CSV</button>
        </div>
      </div>`}saveStatsBtn.onclick=function(){if(E.volumes.length<2){window.alert("No segmentation to measure (run a model first).");return}if(E.volumes[1].img instanceof Float32Array){window.alert("Stats need a label segmentation, not probability maps.");return}const S=E.volumes[0].img,F=d||E.volumes[1].img;if(!S||!F||S.length!==F.length){window.alert("Input and segmentation grids do not match.");return}const I=E.volumes[0].hdr.pixDims||[],ce=I[1]&&I[2]&&I[3]?I[1]*I[2]*I[3]:1;let fe=me(S,F,ce);if(fe.length===0){window.alert("No non-background labels found in the segmentation.");return}fe=fe.slice().sort((de,xe)=>xe.volume_mm3-de.volume_mm3);const K=fe.reduce((de,xe)=>de+xe.volume_mm3,0);fn("Region volumes",qe(fe,K));const Ue=document.getElementById("statsPanel");Ue&&(Ue.querySelectorAll(".stat-toggle button").forEach(de=>{de.onclick=()=>{const xe=de.dataset.mode;Ue.querySelectorAll(".stat-toggle button").forEach(ue=>ue.classList.toggle("active",ue===de)),document.getElementById("statsUnitLabel").textContent=xe==="pct"?"100% of segmented volume":`total ${H(K)} cm³`,Ue.querySelectorAll(".stat-row").forEach(ue=>{const _e=ue.querySelector(".stat-val"),ve=ue.querySelector(".stat-bar");_e.textContent=xe==="pct"?_e.dataset.pct:_e.dataset.cm3,ve.style.width=(xe==="pct"?ve.dataset.wPct:ve.dataset.wAbs)+"%"})}}),Ue.querySelectorAll(".stat-row").forEach(de=>{const xe=()=>{const ue=de.querySelector(".stat-detail");ue.style.display=ue.style.display==="none"?"grid":"none"};de.onclick=xe,de.onkeydown=ue=>{(ue.key==="Enter"||ue.key===" ")&&(ue.preventDefault(),xe())}}),Ue.querySelectorAll(".stat-iso").forEach(de=>{de.onclick=xe=>{xe.stopPropagation();const ue=parseInt(de.closest(".stat-row").dataset.label,10);Number.isNaN(ue)||oe(ue);const _e=document.getElementById("appDialog");_e&&_e.open&&_e.close()}}),document.getElementById("statsDownloadBtn").onclick=()=>Fe(fe))};function tt(){E.volumes.length<=1&&(p=E.volumes[0]||null,y=p&&p.name?p.name:"input.nii.gz",s=null,i=null,A(),modelSelect.value="-1",a(),E.volumes[0]&&opacitySlider0.oninput())}const Oe=new Map;function rt(S){return ge(this,null,function*(){if(Oe.has(S))return Oe.get(S);const I=yield(yield fetch(S)).json();return Oe.set(S,I),I})}function at(S,F,I=1){let ce=0;for(let fe=0;fe<256;fe++)S[fe]>0&&ce++;return(!F||ce!==F.length)&&(t="Failed to Predict Some Labels - "),F.map((fe,K)=>{const Ue=K<256?S[K]:0,de=Ue>0?`${H(Ue*I)} cm3`:"Missing";return de==="Missing"&&(t+=`${fe}, `),`${fe}   ${de}`})}function ut(S,F,I){return ge(this,null,function*(){var ue,_e;const ce=(ue=F.probabilityDisplayMin)!=null?ue:.005,{probabilityOverlayAlpha:fe=96,probabilityOverlayFloor:K=192}=F,Ue=(I==null?void 0:I.tint)||[255,255,255],de=`probability-light-${Ue.join("-")}-${K}-${fe}`;if(!E.hasColormap(de)){const[ve,ct,Re]=Ue.map(je=>Math.round(je*K/255));E.addColormap(de,{R:[ve,Ue[0]],G:[ct,Ue[1]],B:[Re,Ue[2]],A:[0,fe],I:[0,255]})}const xe=Oo(E.volumes[0],S instanceof Float32Array?S:Float32Array.from(S),(_e=I==null?void 0:I.name)!=null?_e:E.volumes[0].name,{scl_inter:0,scl_slope:1,datatypeCode:16,numBitsPerVoxel:32,cal_min:0,cal_max:1,intent_code:1001},{calMin:ce,calMax:1,robustMin:ce,robustMax:1,globalMin:0,globalMax:1,colormapType:1,colormap:de,opacity:Number(opacitySlider1.value),modulateAlpha:1});return xe.modulationImage=xe.id,yield E.model.addVolume(xe),E.volumes.at(-1)})}function gt(S,F,I,ce){return ge(this,null,function*(){var ve,ct,Re;if(U(),L(),n=null,o=null,s=I,i=I.type==="Brain_Extraction"&&ce||null,I.outputType==="probability"){const je=Array.isArray(S)?S:[S],Ie=[];for(let Qe=0;Qe<je.length;Qe++)Ie.push(yield ut(je[Qe],I,(ve=I.probabilityTissues)==null?void 0:ve[Qe]));I.probabilityPostprocess==="cat-lite"&&Ie.length===3&&(g=Ie),A(I),yield E.updateGLVolume();return}const fe=S instanceof Uint8Array?S:new Uint8Array(S.buffer,S.byteOffset||0,S.byteLength);let K,Ue=null,de=0,xe={calMin:0,calMax:255,robustMin:0,robustMax:255,globalMin:0,globalMax:255};if(I.type==="Brain_Masking"){const je=["Background","Brain Mask"];n=je.slice();const Ie=[0,217],Qe=[0,119],Bt=[0,33];o={R:Ie,G:Qe,B:Bt};const Xe={R:Ie,G:Qe,B:Bt,labels:je},be="brainchop-label-mask";E.addColormap(be,Xe),K=be,Ue=xo(Xe),de=1002,xe={calMin:0,calMax:1,robustMin:0,robustMax:1,globalMin:0,globalMax:1}}else if(I.colormapPath){const je=no(fe),Ie=yield rt(I.colormapPath);n=Ie.labels?Ie.labels.slice():null,o={R:Ie.R,G:Ie.G,B:Ie.B};const Qe=E.volumes[0].hdr.pixDims||[],Bt=Qe[1]&&Qe[2]&&Qe[3]?Qe[1]*Qe[2]*Qe[3]:1,Xe=Ie.labels?at(je,Ie.labels,Bt):[],be=It(St(St({R:Ie.R,G:Ie.G,B:Ie.B},Ie.I?{I:Ie.I}:{}),Ie.A?{A:Ie.A}:{}),{labels:Xe}),we=`brainchop-label-${I.id}`;E.addColormap(we,be),K=we,Ue=xo(be);const ie=Math.max(1,((Re=(ct=Ie.R)==null?void 0:ct.length)!=null?Re:256)-1);de=1002,xe={calMin:0,calMax:ie,robustMin:0,robustMax:ie,globalMin:0,globalMax:ie}}else{const je=no(fe);xe=va(je),K=F.atlasSelectedColorTable.toLowerCase(),I.type==="Brain_Extraction"&&(K="copper2"),E.hasColormap(K)||(K="actc")}const ue=Oo(E.volumes[0],fe,E.volumes[0].name,{datatypeCode:2,numBitsPerVoxel:8,scl_inter:0,scl_slope:1,cal_min:xe.calMin,cal_max:xe.calMax,intent_code:de},It(St(It(St({},xe),{colormap:K}),Ue?{colormapLabel:Ue}:{}),{opacity:Number(opacitySlider1.value)}));yield E.model.addVolume(ue);const _e=E.volumes.at(-1);Ue&&_e&&!_e.colormapLabel&&(_e.colormapLabel=Ue),A(I),yield E.updateGLVolume()})}function Ae(S){return ge(this,null,function*(){var F;if(typeof S=="string")try{S=JSON.parse(S)}catch(I){console.error("Failed to parse telemetry data",I);return}S=yield ua(S,(F=E.view)==null?void 0:F.gl),e=`:: Diagnostics https://github.com/neuroneural/brainchop/issues ::
`;for(const I in S)S[I]!==null&&S[I]!==void 0&&(e+=`${I}: ${S[I]}
`)})}function Ze(S){const F=String(S).split(" · ").map(I=>I.trim()).filter(I=>I!=="");return F.length<=1?cn(String(S)):F.map((I,ce)=>`<span class="loc-seg"${ce>=2?' style="opacity:.75"':""}>${cn(I)}</span>`).join('<span class="loc-sep">&middot;</span>')}function Ye(S="",F=-1,I="",ce=[]){if(S){console.log(S);const fe=document.getElementById("location");fe&&(fe.innerHTML=Ze(S))}if(isNaN(F)){const fe=document.getElementById("memstatusItem");fe&&(fe.hidden=!1),memstatus.style.color="#ef4444",memstatus.textContent="Memory Issue"}else F>=0&&(modelProgress.value=F*modelProgress.max);I&&(In?(Nn.push(String(I)),console.warn("[backend]",I)):fn("Message",cn(String(I)).replace(/\n/g,"<br>"))),ce&&Object.keys(ce).length>0&&Ae(ce)}function dt(S){k=S.vox,document.getElementById("location").innerHTML=S.string.split("   ").map(F=>F.trim()).filter(F=>F!=="").map(F=>`<span class="loc-seg">${cn(F)}</span>`).join('<span class="loc-sep">&middot;</span>')}const _t=new URLSearchParams(window.location.search).get("viewer")==="webgpu"?"webgpu":"webgl2",E=new As({backend:_t,matcaps:{Shiny:zs}});yield E.attachTo("gl1"),console.info("NiiVue viewer backend:",E.backend),E.backgroundColor=[0,0,0,1],E.is3DCrosshairVisible=!0,E.clipPlaneColor=[.7,0,.7,.5],E.gamma=1,E.registerVolumeTransform(Us),E.isLegendVisible=!1,E.addEventListener("locationChange",S=>dt(S.detail)),E.canvas.addEventListener("click",j),window.addEventListener("keydown",S=>{S.key==="Escape"&&(document.querySelector("dialog[open]")||(l!==null?(l=null,Z()):c!==null&&(c=null,M())))});const Tt=E.drawScene.bind(E);E.drawScene=function(S){const F=Tt(S);try{q()}catch(I){console.warn("isolation HUD draw failed",I)}return F},E.primaryDragMode=vo.crosshair,E.secondaryDragMode=vo.slicer3D,E.showRender=Bs.ALWAYS,E.isYoked3DTo2DZoom=!0,E.crosshairGap=11;{const S=document.getElementById("dragSegmented");S&&S.querySelectorAll("button").forEach(F=>F.classList.toggle("active",parseInt(F.dataset.drag,10)===E.secondaryDragMode))}E.volumeIsNearestInterpolation=!0,yield E.loadVolumes([{url:"./t1_crop.nii.gz"}]),modelSelect.innerHTML="";const zt=document.createElement("option");zt.text="Run Segmentation Model",zt.value="-1",zt.disabled=!0,zt.selected=!0,zt.hidden=!0,modelSelect.appendChild(zt);for(let S=0;S<hn.length;S++){console.log(`Adding model option: ${hn[S].modelName}`);const F=document.createElement("option");F.text=hn[S].modelName,F.value=S,hn[S].type==="Divider"&&(F.disabled=!0),modelSelect.appendChild(F)}E.addEventListener("volumeLoaded",tt),tt(),ya(E),ga(E),modelSelect.value="-1",a(),C(-1),yield Do();const Rt=new URLSearchParams(window.location.search).get("model");Rt!==null&&Rt!==""&&Number(Rt)>=0&&Number(Rt)<hn.length?(modelSelect.value=String(Number(Rt)),a(),he()):dn&&nn&&(window.requestIdleCallback?F=>window.requestIdleCallback(F,{timeout:600}):F=>setTimeout(F,200))(()=>Xr(nn))})}function cn(e){return String(e).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Sa(e){const n=(Nn.length?Nn:[e&&e.message?e.message:String(e||"unknown error")]).map(o=>`<li>${cn(o)}</li>`).join("");fn("Segmentation failed",`<p>No available backend could run this model on this device.</p>
     <ul style="margin:0 0 4px 1.1em;padding:0;font-size:0.92em;line-height:1.45">${n}</ul>
     <p style="font-size:0.88em;color:#9aa4af">Full details are in the browser console and under Diagnostics.</p>`)}function fn(e,t,n={}){const o=document.getElementById("appDialog"),s=document.getElementById("dialogTitle"),i=document.getElementById("dialogMessage"),r=document.getElementById("dialogCloseBtn");if(!o)return;s.textContent=e,i.innerHTML=t,r.style.display=n.hideClose?"none":"",r.onclick=()=>o.close(),o.classList.toggle("dialog-save",!!n.saveMode);const a=document.getElementById("dialogXBtn");a&&(a.onclick=()=>o.close()),o.showModal()}function Pa(){return ge(this,null,function*(){try{const t=yield(yield fetch("https://api.github.com/repos/neuroneural/brainchop")).json();document.getElementById("star-count").textContent=t.stargazers_count}catch(e){console.error("Error fetching star count:",e)}})}(function(){return ge(this,null,function*(){yield $a(),yield Pa()})})();export{Yo as a,Xo as d,jo as p};
