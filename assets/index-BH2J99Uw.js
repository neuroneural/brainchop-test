const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./dkatlas24_int8_v3_runner-FSAaw7_B.js","./vendor-niivue-BztUWqGV.js","./vendor-CKvLRpOF.js","./vendor-math-oqRZD8Fx.js"])))=>i.map(i=>d[i]);
var Ao=Object.defineProperty,Bo=Object.defineProperties;var Co=Object.getOwnPropertyDescriptors;var Rn=Object.getOwnPropertySymbols;var vs=Object.prototype.hasOwnProperty,ys=Object.prototype.propertyIsEnumerable;var jt=Math.pow,ws=(e,t,n)=>t in e?Ao(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,$t=(e,t)=>{for(var n in t||(t={}))vs.call(t,n)&&ws(e,n,t[n]);if(Rn)for(var n of Rn(t))ys.call(t,n)&&ws(e,n,t[n]);return e},Rt=(e,t)=>Bo(e,Co(t));var xs=(e,t)=>{var n={};for(var s in e)vs.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&Rn)for(var s of Rn(e))t.indexOf(s)<0&&ys.call(e,s)&&(n[s]=e[s]);return n};var we=(e,t,n)=>new Promise((s,o)=>{var i=c=>{try{a(n.next(c))}catch(l){o(l)}},r=c=>{try{a(n.throw(c))}catch(l){o(l)}},a=c=>c.done?s(c.value):Promise.resolve(c.value).then(i,r);a((n=n.apply(e,t)).next())});import{z as Fn,$ as zo,t as Fo,L as $s,Y as Lo,M as Ss,a as Uo,_ as Wo}from"./vendor-niivue-BztUWqGV.js";import{g as Ro}from"./vendor-CKvLRpOF.js";import{l as Go,n as Io,p as qo}from"./vendor-math-oqRZD8Fx.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();const To="modulepreload",Eo=function(e,t){return new URL(e,t).href},Ps={},gt=function(t,n,s){let o=Promise.resolve();if(n&&n.length>0){let l=function(f){return Promise.all(f.map(g=>Promise.resolve(g).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};const r=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),c=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));o=l(n.map(f=>{if(f=Eo(f,s),f in Ps)return;Ps[f]=!0;const g=f.endsWith(".css"),d=g?'[rel="stylesheet"]':"";if(s)for(let p=r.length-1;p>=0;p--){const m=r[p];if(m.href===f&&(!g||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${d}`))return;const u=document.createElement("link");if(u.rel=g?"stylesheet":To,g||(u.as="script"),u.crossOrigin="",u.href=f,c&&u.setAttribute("nonce",c),document.head.appendChild(u),g)return new Promise((p,m)=>{u.addEventListener("load",p),u.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${f}`)))})}))}function i(r){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=r,window.dispatchEvent(a),!a.defaultPrevented)throw r}return o.then(r=>{for(const a of r||[])a.status==="rejected"&&i(a.reason);return t().catch(i)})},_n=new WeakMap;class Oo{getLabelMeta(t){return _n.get(t)||null}idx(t,n,s,o){return s*o[0]*o[1]+n*o[0]+t}check_previous_slice(t,n,s,o,i,r,a,c,l,f){let g=0;if(!i)return 0;const d=t[this.idx(s,o,i,r)];if(a>=6){const u=this.idx(s,o,i-1,r);d===t[u]&&(l[g++]=n[u])}if(a>=18){if(s){const u=this.idx(s-1,o,i-1,r);d===t[u]&&(l[g++]=n[u])}if(o){const u=this.idx(s,o-1,i-1,r);d===t[u]&&(l[g++]=n[u])}if(s<r[0]-1){const u=this.idx(s+1,o,i-1,r);d===t[u]&&(l[g++]=n[u])}if(o<r[1]-1){const u=this.idx(s,o+1,i-1,r);d===t[u]&&(l[g++]=n[u])}}if(a===26){if(s&&o){const u=this.idx(s-1,o-1,i-1,r);d===t[u]&&(l[g++]=n[u])}if(s<r[0]-1&&o){const u=this.idx(s+1,o-1,i-1,r);d===t[u]&&(l[g++]=n[u])}if(s&&o<r[1]-1){const u=this.idx(s-1,o+1,i-1,r);d===t[u]&&(l[g++]=n[u])}if(s<r[0]-1&&o<r[1]-1){const u=this.idx(s+1,o+1,i-1,r);d===t[u]&&(l[g++]=n[u])}}return g?(this.fill_tratab(c,l,g,f),l[0]):0}do_initial_labelling(t,n,s,o=null){const i=n[0]|0,r=n[1]|0,a=n[2]|0,c=i*r,l=c*a;let f=1;const g=8192;let d=g,u=new Uint32Array(d),p;if(s===6&&o&&o.il&&o.il.length===l){if(p=o.il,o.dirty)p.fill(0);else if(o.runs&&o.runLen>0){const _=o.runs,h=o.runLen;for(let w=0;w<h;w+=2)p.fill(0,_[w],_[w+1])}}else p=new Uint32Array(l),s===6&&o&&(o.il=p,o.runs=null,o.runLen=0,o.dirty=!1);if(s===6){o&&(o.dirty=!0);const _=(t instanceof Uint8Array||t instanceof Uint8ClampedArray)&&(t.byteOffset&3)===0&&(i&3)===0&&t.length>=l?new Uint32Array(t.buffer,t.byteOffset,l>>2):null;let h=o&&o.runs?o.runs:new Uint32Array(8192),w=h.length,S=0,b=0,P=0,z=0,$=-1,y=-1,G=a,M=-1;for(let A=0;A<a;A++){const T=A*c;for(let U=0;U<r;U++){const B=T+U*i;let E=0;if(_){const ee=B+i>>2;let ae=B>>2;for(;ae<ee&&_[ae]===0;)ae++;if(ae===ee)continue;E=(ae<<2)-B}let W=!1;for(;E<i;E++){const ee=B+E;if(_&&!W&&(E&3)===0&&_[ee>>2]===0){E+=3;continue}const ae=t[ee];if(ae===0){W&&(h[S++]=ee,W=!1);continue}if(!W){if(S+2>w){w<<=1;const q=new Uint32Array(w);q.set(h),h=q}h[S++]=ee,W=!0}$<0&&($=ee,G=A),y=ee,M=A;let I=0;if(A>0&&t[ee-c]===ae&&(b=p[ee-c],I=1),E>0&&t[ee-1]===ae){const q=p[ee-1];I===0?b=q:I===1?P=q:z=q,I++}if(U>0&&t[ee-i]===ae){const q=p[ee-i];I===0?b=q:I===1?P=q:z=q,I++}if(I===0){if(p[ee]=f,f>=d){d+=g;const q=new Uint32Array(d);q.set(u),u=q}u[f-1]=f,f++}else if(p[ee]=b,I===2&&P!==b){let q=b;for(;u[q-1]!==q;)q=u[q-1];let N=P;for(;u[N-1]!==N;)N=u[N-1];const ie=q<N?q:N;u[q-1]=ie,u[N-1]=ie}else if(I===3&&(P!==b||z!==b)){let q=b;for(;u[q-1]!==q;)q=u[q-1];let N=P;for(;u[N-1]!==N;)N=u[N-1];let ie=z;for(;u[ie-1]!==ie;)ie=u[ie-1];let O=q<N?q:N;ie<O&&(O=ie),u[q-1]=O,u[N-1]=O,u[ie-1]=O}}W&&(h[S++]=B+i)}}for(let A=0;A<f-1;A++){let T=A;for(;u[T]!==T+1;)T=u[T]-1;u[A]=T+1}return o&&(o.runs=h,o.runLen=S,o.dirty=!1),this._lastInitialRange={conn:6,fgStart:$,fgEnd:y,minSl:G,maxSl:M,runs:h,runLen:S},[f-1,u,p]}const m=new Uint32Array(32),v=new Uint32Array(32),k=new Uint32Array(27);for(let _=0;_<a;_++)for(let h=0;h<r;h++)for(let w=0;w<i;w++){let S=0;const b=t[this.idx(w,h,_,n)];if(b!==0){if(k[0]=this.check_previous_slice(t,p,w,h,_,n,s,u,m,v),k[0]&&(S+=1),s>=6){if(w){const P=this.idx(w-1,h,_,n);b===t[P]&&(k[S++]=p[P])}if(h){const P=this.idx(w,h-1,_,n);b===t[P]&&(k[S++]=p[P])}}if(s>=18){if(h&&w){const P=this.idx(w-1,h-1,_,n);b===t[P]&&(k[S++]=p[P])}if(h&&w<i-1){const P=this.idx(w+1,h-1,_,n);b===t[P]&&(k[S++]=p[P])}}if(S)p[this.idx(w,h,_,n)]=k[0],this.fill_tratab(u,k,S,v);else{if(p[this.idx(w,h,_,n)]=f,f>=d){d+=g;const P=new Uint32Array(d);P.set(u),u=P}u[f-1]=f,f++}}}for(let _=0;_<f-1;_++){let h=_;for(;u[h]!==h+1;)h=u[h]-1;u[_]=h+1}return this._lastInitialRange=null,[f-1,u,p]}fill_tratab(t,n,s,o){let r=2147483647;for(let a=0;a<s;a++){let c=n[a];for(;t[c-1]!==c;)c=t[c-1];o[a]=c,r=Math.min(r,c)}for(let a=0;a<s;a++)t[o[a]-1]=r}translate_labels(t,n,s,o,i=null,r=null){const a=n[0]*n[1]*n[2];if(r&&(o===0||r.fgStart<0))return i&&(this._lastMeta={conn:r.conn,cl:0,fgStart:0,fgEnd:-1,minSl:0,maxSl:-1,ls2bw:new Uint32Array(1),sumls:new Uint32Array(1),distinctFgClasses:0,bw:i}),[0,t];let c=0;for(let m=0;m<o;m++)s[m]>c&&(c=s[m]);const l=new Uint32Array(c+1),f=i&&r?new Uint32Array(o+1):null,g=i&&r?new Uint32Array(o+1):null,d=r?r.fgStart:0,u=r?r.fgEnd:a-1;let p=0;if(r&&r.runs){const m=r.runs,v=r.runLen;for(let k=0;k<v;k+=2){const _=m[k],h=m[k+1];for(let w=_;w<h;w++){const S=s[t[w]-1];let b=l[S];b||(p+=1,b=p,l[S]=b,f&&(f[b]=i[w])),t[w]=b,g&&g[b]++}}}else for(let m=d;m<=u;m++){const v=t[m];if(v){const k=s[v-1];let _=l[k];_||(p+=1,_=p,l[k]=_,f&&(f[_]=i[m])),t[m]=_,g&&g[_]++}}if(i&&r){const m=f.slice(0,p+1),v=g.slice(0,p+1);let k=0;if(p>0){const _=m[1];k=1;for(let h=2;h<=p;h++)if(m[h]!==_){k=2;break}}this._lastMeta={conn:r.conn,cl:p,fgStart:r.fgStart,fgEnd:r.fgEnd,minSl:r.minSl,maxSl:r.maxSl,runs:r.runs,runLen:r.runLen,ls2bw:m,sumls:v,distinctFgClasses:k,bw:i}}return[p,t]}neighbor_winners(t,n,s,o,i=null,r=null){const a=n[0],c=n[1],l=n[2],f=a*c,g=!!(r&&i);let d=!1;for(let w=1;w<=o;w++)if(!s[w]){d=!0;break}if(!d)return g&&console.log("[relabel] 0/0 suppressed components resolved within their own class family (0 fell back to the unrestricted neighbour vote)"),new Uint32Array(o+1);const u=g?new Int32Array(o+1).fill(-1):null,p=new Map,m=(w,S)=>{let b=p.get(w);b||(b=new Map,p.set(w,b)),b.set(S,(b.get(S)||0)+1)},v=_n.get(t),k=v&&v.cl===o&&t.length===f*l;if(k&&v.runs){const w=v.runs,S=v.runLen;for(let b=0;b<S;b+=2){const P=w[b],z=w[b+1],$=P/f|0,y=P-$*f,G=y/a|0;let M=y-G*a;for(let A=P;A<z;A++,M++){const T=t[A];if(s[T])continue;g&&u[T]<0&&(u[T]=r(i[A]));let U;M>0&&(U=s[t[A-1]])&&m(T,U),M<a-1&&(U=s[t[A+1]])&&m(T,U),G>0&&(U=s[t[A-a]])&&m(T,U),G<c-1&&(U=s[t[A+a]])&&m(T,U),$>0&&(U=s[t[A-f]])&&m(T,U),$<l-1&&(U=s[t[A+f]])&&m(T,U)}}}else{const w=k?v.minSl:0,S=k?v.maxSl:l-1;let b=w*f;for(let P=w;P<=S;P++)for(let z=0;z<c;z++)for(let $=0;$<a;$++,b++){const y=t[b];if(y===0||s[y])continue;g&&u[y]<0&&(u[y]=r(i[b]));let G;$>0&&(G=s[t[b-1]])&&m(y,G),$<a-1&&(G=s[t[b+1]])&&m(y,G),z>0&&(G=s[t[b-a]])&&m(y,G),z<c-1&&(G=s[t[b+a]])&&m(y,G),P>0&&(G=s[t[b-f]])&&m(y,G),P<l-1&&(G=s[t[b+f]])&&m(y,G)}}const _=new Uint32Array(o+1).fill(0);let h=0;for(const[w,S]of p){const b=g?u[w]:0;let P=0,z=0;if(b>0){for(const[$,y]of S)r($)===b&&(y>z||y===z&&(P===0||$<P))&&(z=y,P=$);P&&h++}if(!P)for(const[$,y]of S)(y>z||y===z&&(P===0||$<P))&&(z=y,P=$);_[w]=P}return g&&console.log(`[relabel] ${h}/${p.size} suppressed components resolved within their own class family (${p.size-h} fell back to the unrestricted neighbour vote)`),_}finalize_volume(t,n,s,o,i,r=null,a=null,c=!1){const l=t.length,f=i?this.neighbor_winners(t,n,s,o,r,a):null,g=f?new Uint32Array(o+1):s;let d=0;for(let _=1;_<=o;_++){let h=s[_];f&&(h||(h=f[_]),g[_]=h),h>d&&(d=h)}const u=_n.get(t),p=u&&u.cl===o&&u.ls2bw.length===o+1&&u.fgEnd<l;let m=0;if(p&&u.runs){const _=u.runs,h=u.runLen;for(let b=1;b<=o;b++)u.sumls[b]>0&&g[b]>m&&(m=g[b]);if(u.bw===r&&r instanceof Uint8Array&&d<=255){const b=new Uint8Array(o+1);let P=!1;for(let $=1;$<=o;$++)u.sumls[$]>0&&g[$]!==u.ls2bw[$]&&(b[$]=1,P=!0);const z=c?r:r.slice();if(P)for(let $=0;$<h;$+=2){const y=_[$],G=_[$+1];for(let M=y;M<G;M++){const A=t[M];b[A]&&(z[M]=g[A])}}return[m,z]}const S=r instanceof Uint8Array&&d<=255?new Uint8Array(l):new Uint32Array(l);for(let b=0;b<h;b+=2){const P=_[b],z=_[b+1];for(let $=P;$<z;$++){const y=g[t[$]];y&&(S[$]=y)}}return[m,S]}const k=r instanceof Uint8Array&&d<=255?new Uint8Array(l):new Uint32Array(l);if(p){if(u.fgStart>=0&&u.fgEnd>=u.fgStart)for(let _=u.fgStart;_<=u.fgEnd;_++){const h=t[_];if(h!==0){const w=g[h];w&&(k[_]=w,w>m&&(m=w))}}}else for(let _=0;_<l;_++){const h=t[_];if(h!==0){const w=g[h];w&&(k[_]=w,w>m&&(m=w))}}return[m,k]}diagnose_components(t,n,s,o,i={}){var $,y,G;const r=($=i.topN)!=null?$:50,a=(y=i.minSize)!=null?y:1,c=(G=i.label)!=null?G:"diag",l=o[0],f=o[1],g=o[2],d=l*f,u=new Uint32Array(n+1),p=new Uint32Array(n+1);for(let M=0;M<t.length;M++){const A=s[M];A&&(u[A]=t[M],p[A]++)}const m=new Map,v=new Uint32Array(n+1),k=new Uint32Array(n+1),_=(M,A)=>{let T=m.get(M);T||(T=new Map,m.set(M,T)),T.set(A,(T.get(A)||0)+1)};for(let M=0;M<g;M++)for(let A=0;A<f;A++)for(let T=0;T<l;T++){const U=M*d+A*l+T,B=s[U];if(!B)continue;const E=u[B],W=ee=>{const ae=s[ee];if(ae===B)return;k[B]++;const I=ae?u[ae]:0;I===0?v[B]++:I!==E&&_(B,I)};T>0&&W(U-1),T<l-1&&W(U+1),A>0&&W(U-l),A<f-1&&W(U+l),M>0&&W(U-d),M<g-1&&W(U+d)}const h=new Map,w=new Map;for(let M=1;M<=n;M++){const A=u[M];h.set(A,(h.get(A)||0)+1),(!w.has(A)||p[M]>w.get(A))&&w.set(A,p[M])}const S=[];for(let M=1;M<=n;M++){if(p[M]<a)continue;const A=u[M],T=m.get(M);let U=0,B=0,E=0;if(T)for(const[ee,ae]of T)E+=ae,ae>B&&(B=ae,U=ee);const W=k[M]||1;S.push({comp:M,class:A,size:p[M],largestOfClass:p[M]===w.get(A)?"Y":"n",compsInClass:h.get(A),domNeighbor:U,domFracForeign:E?+(B/E).toFixed(2):0,domFracBoundary:+(B/W).toFixed(2),bgFrac:+(v[M]/W).toFixed(2)})}S.sort((M,A)=>A.domFracForeign-M.domFracForeign||A.size-M.size);const b=(M,A)=>{const T=A.map(B=>Math.max(B.h.length,...M.map(E=>String(E[B.k]).length))),U=B=>B.map((E,W)=>String(E).padStart(T[W])).join("  ");return[U(A.map(B=>B.h)),...M.map(B=>U(A.map(E=>B[E.k])))].join(`
`)},P=[{k:"comp",h:"comp"},{k:"class",h:"class"},{k:"size",h:"size"},{k:"largestOfClass",h:"lrg"},{k:"compsInClass",h:"nComp"},{k:"domNeighbor",h:"domNbr"},{k:"domFracForeign",h:"encF"},{k:"domFracBoundary",h:"encB"},{k:"bgFrac",h:"bgF"}];console.log(`[${c}] total components=${n}, distinct classes=${h.size}
[${c}] island candidates (encF≈1 + small size + lrg=n ⇒ swallowed island):
`+b(S.slice(0,r),P));const z=[...h.entries()].map(([M,A])=>({class:M,components:A,maxCompSize:w.get(M)})).sort((M,A)=>A.components-M.components);return console.log(`[${c}] per-class component counts (components=1 ⇒ fully connected):
`+b(z.slice(0,30),[{k:"class",h:"class"},{k:"components",h:"comps"},{k:"maxCompSize",h:"maxSize"}])),S}_collectComponentStats(t,n,s){const o=_n.get(s);if(o&&o.cl===n&&o.bw===t&&s.length===t.length)return[o.ls2bw,o.sumls];const i=t.length,r=new Uint32Array(n+1),a=new Uint32Array(n+1);for(let c=0;c<i;c++){const l=s[c];l>0&&(r[l]=t[c],a[l]++)}return[r,a]}_buildKeptMap(t,n,s,o,i){const r=new Uint32Array(s+1);let a=0;for(let l=1;l<=s;l++)t[l]>a&&(a=t[l]);const c=o==="all";if(a<=65535){const l=new Uint32Array(a+1),f=new Uint32Array(a+1);for(let g=1;g<=s;g++){const d=t[g];if(d!==0)if(c||o&&o.has&&o.has(d)){const u=n[g];(!f[d]||(i?u>=l[d]:u>l[d]))&&(l[d]=u,f[d]=g)}else r[g]=d}for(let g=1;g<=a;g++){const d=f[g];d>0&&(r[d]=g)}}else{const l=new Map;for(let f=1;f<=s;f++){const g=t[f];if(g!==0)if(c||o&&o.has&&o.has(g)){const d=n[f],u=l.get(g);(!u||(i?d>=u.sz:d>u.sz))&&l.set(g,{c:f,sz:d})}else r[f]=g}for(const[f,{c:g}]of l)r[g]=f}return r}largest_original_cluster_labels(t,n,s,o=null,i=!1,r=null,a=!1){const[c,l]=this._collectComponentStats(t,n,s),f=this._buildKeptMap(c,l,n,"all",!0);return this.finalize_volume(s,o,f,n,i,t,r,a)}filter_clusters(t,n,s,o,i=null,r=!1,a=null,c=!1){const[l,f]=this._collectComponentStats(t,n,s),g=this._buildKeptMap(l,f,n,o,!1);return this.finalize_volume(s,i,g,n,r,t,a,c)}filter_clusters_by_ratio(t,n,s,o,i=null,r=!1,a=null){const c=t.length,l=new Uint32Array(n+1).fill(0),f=new Uint32Array(n+1).fill(0);for(let p=0;p<c;p++){const m=s[p];m>0&&(l[m]===0&&(l[m]=t[p]),f[m]++)}const g=new Map;for(let p=1;p<=n;p++){const m=l[p],v=f[p];(!g.has(m)||v>g.get(m))&&g.set(m,v)}const d=new Uint8Array(n+1).fill(0);for(let p=1;p<=n;p++){const m=l[p],v=f[p],k=g.get(m)||0;v>=k*o&&(d[p]=1)}const u=new Uint32Array(n+1).fill(0);for(let p=1;p<=n;p++)d[p]&&(u[p]=l[p]);return this.finalize_volume(s,i,u,n,r,t,a)}_binaryComponentsFromLabels(t,n,s,o,i=!1){const r=o[0]|0,a=o[1]|0,c=o[2]|0,l=r*a,f=_n.get(s),g=f&&f.cl===n&&s.length===l*c&&(!i||f.bw===t);if(g&&f.conn===6&&f.distinctFgClasses<=1){const _=new Uint32Array(n+1);let h=0,w=0;for(let S=1;S<=n;S++){_[S]=S;const b=f.sumls[S];b>0&&b>=w&&(w=b,h=S)}return{parent:_,compSize:f.sumls,compClass:i?f.ls2bw:null,bestRoot:h}}const d=g?f.sumls:new Uint32Array(n+1),u=g?i?f.ls2bw:null:i?new Uint32Array(n+1):null,p=new Uint32Array(n+1);for(let _=1;_<=n;_++)p[_]=_;if(g&&f.conn===6&&f.runs&&f.bw===t){const _=(S,b)=>{for(;p[S]!==S;)p[S]=p[p[S]],S=p[S];for(;p[b]!==b;)p[b]=p[p[b]],b=p[b];S!==b&&(S<b?p[b]=S:p[S]=b)},h=f.runs,w=f.runLen;for(let S=0;S<w;S+=2){const b=h[S],P=h[S+1],z=b/l|0,$=b-z*l,y=$/r|0;let G=$-y*r;for(let M=b;M<P;M++,G++){const A=t[M];let T=0;if(z>0){const U=t[M-l];U!==0&&U!==A&&(T=s[M],_(T,s[M-l]))}if(y>0){const U=t[M-r];U!==0&&U!==A&&(T||(T=s[M]),_(T,s[M-r]))}if(G>0){const U=t[M-1];U!==0&&U!==A&&(T||(T=s[M]),_(T,s[M-1]))}}}}else{const _=g?f.minSl:0,h=g?f.maxSl:c-1;let w=_*l;for(let S=_;S<=h;S++)for(let b=0;b<a;b++)for(let P=0;P<r;P++,w++){const z=s[w];if(z===0)continue;g||(d[z]++,u&&u[z]===0&&(u[z]=t[w]));let $=z;for(;p[$]!==$;)p[$]=p[p[$]],$=p[$];if(S>0){const y=s[w-l];if(y!==0&&y!==z){let G=y;for(;p[G]!==G;)p[G]=p[p[G]],G=p[G];$!==G&&($<G?p[G]=$:(p[$]=G,$=G))}}if(b>0){const y=s[w-r];if(y!==0&&y!==z){let G=y;for(;p[G]!==G;)p[G]=p[p[G]],G=p[G];$!==G&&($<G?p[G]=$:(p[$]=G,$=G))}}if(P>0){const y=s[w-1];if(y!==0&&y!==z){let G=y;for(;p[G]!==G;)p[G]=p[p[G]],G=p[G];$!==G&&($<G?p[G]=$:p[$]=G)}}}}const m=new Uint32Array(n+1);for(let _=1;_<=n;_++){let h=_;for(;p[h]!==h;)h=p[h];p[_]=h,m[h]+=d[_]}let v=0,k=0;for(let _=1;_<=n;_++){const h=m[_];h>0&&h>=k&&(k=h,v=_)}return{parent:p,compSize:d,compClass:u,bestRoot:v}}applyLargestBinaryMaskInPlace(t,n,s,o){const i=t.length;if(n===0)return t.fill(0),t;const r=_n.get(s),a=r&&r.cl===n&&s.length===i;if(a&&r.conn===6&&r.distinctFgClasses<=1){let f=0,g=0;for(let d=1;d<=n;d++){const u=r.sumls[d];u>0&&u>=g&&(g=u,f=d)}if(r.runs&&r.bw===t){if(n>1){const d=r.runs,u=r.runLen;for(let p=0;p<u;p+=2){const m=d[p],v=d[p+1];for(let k=m;k<v;k++)s[k]!==f&&(t[k]=0)}}return t}if(r.fgStart>0&&t.fill(0,0,r.fgStart),r.fgEnd>=r.fgStart){for(let d=r.fgStart;d<=r.fgEnd;d++)s[d]!==f&&(t[d]=0);r.fgEnd+1<i&&t.fill(0,r.fgEnd+1)}else t.fill(0);return t}const{parent:c,bestRoot:l}=this._binaryComponentsFromLabels(t,n,s,o,!1);if(a&&r.runs&&r.bw===t){const f=r.runs,g=r.runLen;for(let d=0;d<g;d+=2){const u=f[d],p=f[d+1];for(let m=u;m<p;m++)c[s[m]]!==l&&(t[m]=0)}return t}if(a&&r.fgEnd>=r.fgStart){r.fgStart>0&&t.fill(0,0,r.fgStart);for(let f=r.fgStart;f<=r.fgEnd;f++){const g=s[f];(g===0||c[g]!==l)&&(t[f]=0)}r.fgEnd+1<i&&t.fill(0,r.fgEnd+1)}else for(let f=0;f<i;f++){const g=s[f];(g===0||c[g]!==l)&&(t[f]=0)}return t}filterHierarchicalFromLabels(t,n,s,o,i="all",r=!0,a=!1,c=null,l=!1){if(n===0)return[0,t instanceof Uint8Array?l?t:new Uint8Array(t.length):new Uint32Array(t.length)];const{parent:f,compSize:g,compClass:d,bestRoot:u}=this._binaryComponentsFromLabels(t,n,s,o,!0),p=new Uint32Array(n+1);for(let v=1;v<=n;v++)f[v]===u&&(p[v]=d[v]);const m=this._buildKeptMap(p,g,n,i,r);return this.finalize_volume(s,o,m,n,a,t,c,l)}filter18ClassFromLabels(t,n,s,o,i,r=!1,a=null,c=!1){return this.filterHierarchicalFromLabels(t,n,s,o,i,!1,r,a,c)}bwlabel(t,n,s=26,o=!1,i=!1,r=null){const a=Date.now(),c=n[0]*n[1]*n[2];if(![6,18,26].includes(s))return console.log("bwlabel: conn must be 6, 18 or 26."),[0,new Uint32Array(c)];if(n[0]<2||n[1]<2||n[2]<1)return console.log("bwlabel: img must be 2 or 3-dimensional"),[0,new Uint32Array(c)];let l;if(o){l=new Uint8Array(c);for(let m=0;m<c;m++)t[m]!==0&&(l[m]=1)}else t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Uint16Array||t instanceof Uint32Array||t instanceof Int8Array||t instanceof Int16Array||t instanceof Int32Array?t.length===c?l=t:(l=new Uint32Array(c),l.set(t.subarray(0,c))):(l=new Uint32Array(c),l.set(t));this._lastInitialRange=null,this._lastMeta=null;let[f,g,d]=this.do_initial_labelling(l,n,s,r);g===void 0&&(g=new Uint32Array(0));const[u,p]=this.translate_labels(d,n,g,f,l,this._lastInitialRange);if(this._lastMeta&&_n.set(p,this._lastMeta),console.log(s+" neighbor clustering into "+u+" regions in "+(Date.now()-a)+"ms"),i){const[m,v]=this.largest_original_cluster_labels(l,u,p);return[m,v]}return[u,p]}filter_clusters_by_rank(t,n,s,o,i=0,r=null,a=!1,c=null,l=!1,f=null){const g=t.length,d=new Uint32Array(n+1).fill(0),u=new Uint32Array(n+1).fill(0),p=c!=null&&Array.isArray(r)&&r.length===3,m=p?r[0]:0,v=p?r[1]:0,k=p?new Int32Array(n+1).fill(2147483647):null,_=p?new Int32Array(n+1).fill(-1):null,h=p?new Int32Array(n+1).fill(2147483647):null,w=p?new Int32Array(n+1).fill(-1):null,S=p?new Int32Array(n+1).fill(2147483647):null,b=p?new Int32Array(n+1).fill(-1):null;for(let M=0;M<g;M++){const A=s[M];if(A>0&&(d[A]===0&&(d[A]=t[M]),u[A]++,p)){const T=M%m,U=M/m|0,B=U%v,E=U/v|0;T<k[A]&&(k[A]=T),T>_[A]&&(_[A]=T),B<h[A]&&(h[A]=B),B>w[A]&&(w[A]=B),E<S[A]&&(S[A]=E),E>b[A]&&(b[A]=E)}}let P=null,z=0;if(p){let M=-1;for(let W=1;W<=n;W++)u[W]>M&&(M=u[W],z=W);const A=Math.max(2,Math.ceil(c)+4),T=m*v,U=new Int16Array(g).fill(-1);let B=[];for(let W=0;W<g;W++)s[W]===z&&(U[W]=0,B.push(W));for(let W=1;W<=A&&B.length;W++){const ee=[];for(let ae=0;ae<B.length;ae++){const I=B[ae],q=I%m,ie=(I/m|0)%v;q>0&&U[I-1]===-1&&(U[I-1]=W,ee.push(I-1)),q<m-1&&U[I+1]===-1&&(U[I+1]=W,ee.push(I+1)),ie>0&&U[I-m]===-1&&(U[I-m]=W,ee.push(I-m)),ie<v-1&&U[I+m]===-1&&(U[I+m]=W,ee.push(I+m)),I-T>=0&&U[I-T]===-1&&(U[I-T]=W,ee.push(I-T)),I+T<g&&U[I+T]===-1&&(U[I+T]=W,ee.push(I+T))}B=ee}const E=A+1;P=new Float64Array(n+1).fill(E);for(let W=0;W<g;W++){const ee=s[W];if(ee>0&&ee!==z){const ae=U[W]>=0?U[W]:E;ae<P[ee]&&(P[ee]=ae)}}l&&console.log(`[rank-filter] brain comp=${z} size=${M} bbox A[${k[z]},${_[z]}] B[${h[z]},${w[z]}] C[${S[z]},${b[z]}] | maxGap=${c} scan=${A}`)}const $=new Map;for(let M=1;M<=n;M++){const A=d[M],T=u[M];$.has(A)||$.set(A,[]),$.get(A).push({i:M,size:T})}const y=new Uint8Array(n+1).fill(0);for(const[M,A]of $.entries()){A.sort((E,W)=>W.size-E.size);const T=A.length?A[0].size:0,U=i>0?T*i:0,B=Math.min(A.length,o);for(let E=0;E<B;E++){const W=A[E];if(W.size<U){l&&E>0&&console.log(`[rank-filter] class ${M} #${E}: size=${W.size} DROP (below ${(i*100).toFixed(0)}% floor)`);break}if(E>0&&p){const ee=P[W.i],ae=ee<=c;if(l&&console.log(`[rank-filter] class ${M} #${E}: size=${W.size} surfDist=${ee} -> ${ae?"KEEP":"DROP (too far)"}`),!ae)continue}y[W.i]=1}}const G=new Uint32Array(n+1).fill(0);for(let M=1;M<=n;M++)y[M]&&(G[M]=d[M]);return this.finalize_volume(s,r,G,n,a,t,f)}}function No(e){if(!(e!=null&&e.length))throw new Error("Segmentation volume is empty.");let t=0;if((e instanceof Uint8Array||e instanceof Uint8ClampedArray)&&(e.byteOffset&3)===0&&e.length>=4){const n=e.length>>2,s=new Uint32Array(e.buffer,e.byteOffset,n);for(let o=0;o<n;o++){const i=s[o];i!==0&&(i&255&&t++,i&65280&&t++,i&16711680&&t++,i&4278190080&&t++)}for(let o=n<<2;o<e.length;o++)e[o]!==0&&t++}else if(e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Uint16Array||e instanceof Uint32Array)for(let n=0;n<e.length;n++)e[n]!==0&&t++;else for(let n=0;n<e.length;n++){const s=e[n];if(!Number.isFinite(s)||s<0)throw new Error(`Segmentation contains an invalid label at voxel ${n}: ${s}.`);s!==0&&t++}if(t===0)throw new Error("Segmentation volume contains no foreground labels.");if(t>e.length*.95)throw new Error(`Segmentation fills ${(100*t/e.length).toFixed(1)}% of the volume; GPU output is unusable.`)}const Do={il:null,runs:null,runLen:0,dirty:!1};function Vo(e,t=.05,n=.95){const s=e.length,o=Math.min(1e5,s),i=Math.floor(o*t),r=Math.ceil(o*n)-1;if(e instanceof Uint8Array||e instanceof Uint8ClampedArray){if(o===0)return{qmin:0,qmax:0};const c=new Uint32Array(256);if(o>=s)for(let u=0;u<s;u++)c[e[u]]++;else for(let u=0;u<o;u++)c[e[Math.floor(Math.random()*s)]]++;let l=0,f=0,g=0,d=!1;for(let u=0;u<256;u++){const p=c[u];if(p!==0&&(l+=p,!d&&l>i&&(f=u,d=!0),l>r)){g=u;break}}return{qmin:f,qmax:g}}const a=new Float64Array(o);if(o>=s)a.set(e);else for(let c=0;c<o;c++){const l=Math.floor(Math.random()*s);a[c]=e[l]}return a.sort(),{qmin:a[i],qmax:a[r]}}function Ho(e){const t=e.length;if(t===0)return{min:0,max:0};let n=e[0],s=e[0];if(e instanceof Uint8Array||e instanceof Uint8ClampedArray){for(let o=1;o<t;o++){const i=e[o];if(i<n?n=i:i>s&&(s=i),n===0&&s===255)break}return{min:n,max:s}}for(let o=1;o<t;o++){const i=e[o];i<n&&(n=i),i>s&&(s=i)}return{min:n,max:s}}function ks(e,t,n){const s=e.length,o=new Float32Array(s);if(e instanceof Uint8Array||e instanceof Uint8ClampedArray){const i=new Float32Array(256);for(let r=0;r<256;r++)i[r]=(r-t)/n;for(let r=0;r<s;r++)o[r]=i[e[r]];return o}for(let i=0;i<s;i++)o[i]=(e[i]-t)/n;return o}function Xs(e,t,n,s){const o=t[0]|0,i=t[1]|0,r=t[2]|0,a=o*i*r,c=new s(a);if(n[0]===2&&n[1]===1&&n[2]===0&&a===e.length){const v=i*r,k=i*o,_=16;for(let h=0;h<i;h++){const w=h*r,S=h*o;for(let b=0;b<o;b+=_){const P=Math.min(b+_,o);for(let z=0;z<r;z+=_){const $=Math.min(z+_,r);for(let y=b;y<P;y++){let G=y*v+w+z,M=z*k+S+y;for(let A=z;A<$;A++,G++,M+=k)c[M]=e[G]}}}}return c}const l=[o,i,r],f=[l[n[0]],l[n[1]],l[n[2]]],g=[i*r,r,1],d=g[n[0]],u=g[n[1]],p=g[n[2]];let m=0;for(let v=0;v<f[0];v++){const k=v*d;for(let _=0;_<f[1];_++){const h=k+_*u;for(let w=0;w<f[2];w++,m++)c[m]=e[h+w*p]}}return c}function kn(e,t=[256,256,256],n=[2,1,0]){return Xs(e,t,n,Float32Array)}function jo(e,t=[256,256,256],n=[2,1,0]){return Xs(e,t,n,Uint8Array)}function rs(e){const t=new Uint32Array(256);for(let n=0;n<e.length;n++)t[e[n]]++;return t}function Xo(e){const t=rs(e);let n=0;for(let s=0;s<256;s++)t[s]>0&&n++;return n}function Ms(e,t=!1,n="output"){let s=0,o=1/0,i=-1/0;if(!t&&(e instanceof Uint8Array||e instanceof Uint8ClampedArray)){if(e.length>0){let r=255,a=0,c=0;if((e.byteOffset&3)===0&&e.length>=4){const l=e.length>>2,f=new Uint32Array(e.buffer,e.byteOffset,l);for(let g=0;g<l;g++){const d=f[g];if(d===0){r=0;continue}const u=d&255,p=d>>>8&255,m=d>>>16&255,v=d>>>24;s+=u+p+m+v,u<r&&(r=u),u>a&&(a=u),p<r&&(r=p),p>a&&(a=p),m<r&&(r=m),m>a&&(a=m),v<r&&(r=v),v>a&&(a=v)}c=l<<2}for(let l=c;l<e.length;l++){const f=e[l];s+=f,f<r&&(r=f),f>a&&(a=f)}o=r,i=a}}else for(let r=0;r<e.length;r++){const a=e[r];if(!Number.isFinite(a))throw new Error(`Model ${n} contains NaN or Inf values.`);s+=a,a<o&&(o=a),a>i&&(i=a)}if(console.log(`${t?"Probability":"Segmentation"} volume sum: ${s}`),s===0)throw new Error(t?"Model probability output is all zeros. This may indicate an issue with WebGPU shaders or input data.":"Model produced an empty segmentation (all zeros). This may indicate an issue with WebGPU shaders or input data.");if(t&&(o<-1e-6||i>1+1e-6))throw new Error(`Probability output values out of range [0, 1]: min=${o.toFixed(4)}, max=${i.toFixed(4)}`);return{sum:s,min:o,max:i}}function Yo(e,t,n,s,o=null,i=null){return we(this,null,function*(){const r=!!(e&&typeof e.data=="function");let a,c;r?(console.log("Downloading segmentation data from GPU to CPU..."),a=yield e.data(),c=e.shape||i||[256,256,256],console.log("Data download complete. Starting CPU processing.")):(a=e,c=i||[256,256,256]),No(a);let l,f=!1;if(a instanceof Uint8Array)l=a,f=!r;else{let d=0;for(let u=0;u<a.length;u++)a[u]>d&&(d=a[u]);l=d<=255?new Uint8Array(a):new Uint32Array(a),f=!0}let g=null;if(s.isPostProcessEnable){console.log("Applying CPU-based connected-component labeling...");const d=performance.now(),u=new Oo,p=[5,14,15,58,59,60,598,608],m=!!s.fillSuppressedWithNeighborLabel||p.includes(n.id),v=[5,14,15,58,59,60,598,608],k=z=>z>=1&&z<=34?1:z>=35&&z<=68?2:0,_=v.includes(n.id)?k:null,h=c[0]*c[1]*c[2],w=Math.max(1e5,Math.floor(h*.01)),[S,b]=u.bwlabel(l,c,6,!1,!1,Do);if(g=u.getLabelMeta(b),S>w){const z=`Segmentation produced noise: ${S.toLocaleString()} disconnected regions (cap ${w.toLocaleString()}). The model output is unusable, so post-processing was aborted. Try re-running, switching backend (WebGPU/WebGL2), or another model.`;console.error("[postprocess] "+z);const $=new Error(z);throw $.code="SEGMENTATION_NOISE",$}if([1,7].includes(n.id)){const[G,M]=u.filter_clusters_by_rank(l,S,b,2,.02,c,m,8,!1,_);l=M,f=!0}else if([3,8,9,21,38,218].includes(n.id)){const z=new Set([1,2,5,6,13]),[$,y]=u.filter18ClassFromLabels(l,S,b,c,z,m,_,f);l=y,f=!0}else if([5,14,15,58,59,60,598,608].includes(n.id)){s.diagnoseEnclosedComponents&&u.diagnose_components(l,S,b,c,{label:`model${n.id}`,topN:60});const[z,$]=u.filterHierarchicalFromLabels(l,S,b,c,"all",!0,m,_,f);l=$,f=!0}else f||(l=l.slice(),f=!0),u.applyLargestBinaryMaskInPlace(l,S,b,c);const P=((performance.now()-d)/1e3).toFixed(4);console.log(`Connected-component labeling took: ${P} seconds.`)}switch(n.type){case"Brain_Masking":{const d=new Uint8Array(l.length);if(g&&g.runs){const u=g.runs,p=g.runLen;for(let m=0;m<p;m+=2){const v=u[m],k=u[m+1];for(let _=v;_<k;_++)l[_]!==0&&(d[_]=1)}}else for(let u=0;u<l.length;u++)d[u]=l[u]!==0?1:0;return d}case"Brain_Extraction":{const d=new Uint8Array(l.length),u=o?new Uint8Array(l.length):null;if(g&&g.runs){const p=g.runs,m=g.runLen;for(let v=0;v<m;v+=2){const k=p[v],_=p[v+1];for(let h=k;h<_;h++)l[h]!==0&&(d[h]=t[h],u&&(u[h]=1))}}else for(let p=0;p<l.length;p++){const m=l[p]!==0?1:0;d[p]=t[p]*m,u&&(u[p]=m)}return o&&(o.mask=u),d}default:return l instanceof Uint8Array?l:new Uint8Array(l)}})}const Ko={WEBGPU:"webgpu"};function Zo(e,t){return{startTime:Date.now(),Model_Name:(e==null?void 0:e.modelName)||"Unknown",Execution_Mode:t,TF_Backend:"webgpu",isModelFullVol:null,No_SubVolumes:1,Brainchop_Ver:"FullVolume",Input_Shape:null,Output_Shape:null,Channel_Last:null,Model_Param:null,Model_Layers:null,Actual_Labels:null,Expect_Labels:null,NumLabels_Match:null,Missing_Labels:null,Preprocess_t:null,Setup_t:null,Inference_t:null,Postprocess_t:null,Display_t:null,Status:null,Error_Type:null,Extra_Err_Info:null}}function Qo(e,t,n,s=null){e.Expect_Labels=t,e.Actual_Labels=n,e.NumLabels_Match=t===n,s&&s.length>0&&(e.Missing_Labels=s.join(", "))}function Jo(e,t,n,s=null){e.Inference_t=t,e.Postprocess_t=n,s&&(s.Preprocess_t!==void 0&&(e.Preprocess_t=s.Preprocess_t),s.Setup_t!==void 0&&(e.Setup_t=s.Setup_t),s.Display_t!==void 0&&(e.Display_t=s.Display_t)),e.Status="OK"}function er(e,t,n=null){e.Inference_t=1/0,e.Postprocess_t=1/0,e.Status="Fail",e.Error_Type=(t==null?void 0:t.message)||String(t),n&&(e.Extra_Err_Info=n)}const Et=1e-8,tr=[256,256,256];function rn(e,t,n){return Math.max(t,Math.min(n,e))}function nr(e){return e.outputType==="probability"&&e.probabilityPostprocess==="cat-lite"}function sr(e,t,n){const[s,o,i]=e,r=s.length,a=new Uint8Array(r);let c=0;for(let w=0;w<r;w++)Math.max(0,s[w])+Math.max(0,o[w])+Math.max(0,i[w])>=n&&(a[w]=1,c++);const[l,f,g]=t;if(l<2||f<2||g<1)return{componentCount:0,removedVoxels:0,supportMask:a};const d=l===256&&f===256,u=new Uint32Array(c),p=l*f;let m=0,v=0,k=0,_=0;for(let w=0;w<r;w++){if(a[w]!==1)continue;_++;const S=m;u[m++]=w,a[w]=2;for(let b=S;b<m;b++){const P=u[b],z=d?P&255:P%l,$=d?P>>>8&255:Math.floor(P/l)%f;z>0&&a[P-1]===1&&(a[P-1]=2,u[m++]=P-1),z+1<l&&a[P+1]===1&&(a[P+1]=2,u[m++]=P+1),$>0&&a[P-l]===1&&(a[P-l]=2,u[m++]=P-l),$+1<f&&a[P+l]===1&&(a[P+l]=2,u[m++]=P+l),P>=p&&a[P-p]===1&&(a[P-p]=2,u[m++]=P-p),P+p<r&&a[P+p]===1&&(a[P+p]=2,u[m++]=P+p)}m-S>=k-v&&(v=S,k=m)}let h=0;if(_>1)for(let w=0;w<m;w++){if(w>=v&&w<k)continue;const S=u[w];s[S]=0,o[S]=0,i[S]=0,a[S]=0,h++}return{componentCount:_,removedVoxels:h,supportMask:a}}function or([e,t,n],s,{minSupport:o,priorPower:i},r=null){const a=!!(r&&o>0&&o<=1);let c=0;for(let m=0;m<s.length;m++){if(a&&r[m]!==2)continue;const v=Math.max(0,e[m])+Math.max(0,t[m])+Math.max(0,n[m]);Math.min(v,1)>=o&&Number.isFinite(s[m])&&c++}const l=new Uint32Array(c),f=new Float64Array(c),g=c*36<=192*jt(2,20)?c:0,d=new Float64Array(g),u=new Float64Array(g),p=new Float64Array(g);for(let m=0,v=0;m<s.length;m++){if(a&&r[m]!==2)continue;const k=Math.max(0,e[m]),_=Math.max(0,t[m]),h=Math.max(0,n[m]),w=k+_+h,S=Math.min(w,1);!(S>=o)||!Number.isFinite(s[m])||(l[v]=m,f[v]=s[m]-0,g&&(d[v]=S*Math.pow(h/w,i),u[v]=S*Math.pow(k/w,i),p[v]=S*Math.pow(_/w,i)),v++)}return{indices:l,values:f,weightCsf:d,weightGm:u,weightWm:p,volumes:[e,t,n]}}function As([e,t,n],s,o,i){const r=Math.max(0,e[s]),a=Math.max(0,t[s]),c=Math.max(0,n[s]),l=r+a+c,f=Math.min(l,1);i[0]=f*Math.pow(c/l,o),i[1]=f*Math.pow(r/l,o),i[2]=f*Math.pow(a/l,o)}function Bs({indices:e,values:t,weightCsf:n,weightGm:s,weightWm:o,volumes:i},{minSeparation:r,sigmaFloor:a,priorPower:c},l=!1){const f=n.length===0?new Float64Array(3):null,g=new Float64Array(3),d=new Float64Array(3);for(let v=0;v<t.length;v++){const k=t[v];f&&As(i,e[v],c,f);const _=f?f[0]:n[v],h=f?f[1]:s[v],w=f?f[2]:o[v];g[0]+=_*k,d[0]+=_,g[1]+=h*k,d[1]+=h,g[2]+=w*k,d[2]+=w}if(d.some(v=>v<100))return{applied:!1,reason:"too few high-confidence tissue voxels"};const u=Array.from(g,(v,k)=>v/d[k]);if(!(u[0]+r<u[1]&&u[1]+r<u[2]))return{applied:!1,reason:`implausible T1 tissue ordering (${u.map(v=>v.toFixed(3)).join(", ")})`};if(l)return{applied:!0,means:u};const p=new Float64Array(3);for(let v=0;v<t.length;v++){const k=t[v];f&&As(i,e[v],c,f);const _=f?f[0]:n[v],h=f?f[1]:s[v],w=f?f[2]:o[v],S=k-u[0],b=k-u[1],P=k-u[2];p[0]+=_*S*S,p[1]+=h*b*b,p[2]+=w*P*P}const m=Array.from(p,(v,k)=>Math.sqrt(Math.max(a*a,v/d[k])));return{applied:!0,means:u,sigmas:m}}function rr(e,t,n,s,{minSupport:o,block:i,smoothingPasses:r},a=null){const[c,l,f]=e,[g,d,u]=n,p=!!(a&&o>0&&o<=1),m=Math.ceil(g/i),v=Math.ceil(d/i),k=Math.ceil(u/i),_=m*v*k,h=new Float64Array(_),w=new Float64Array(_),[S,b,P]=s,z=g*d;for(let B=0;B<u;B++){const E=Math.floor(B/i);for(let W=0;W<d;W++){const ee=Math.floor(W/i);let ae=B*z+W*g;const I=(E*v+ee)*m;for(let q=0;q<g;q++,ae++){if(p&&a[ae]!==2)continue;const N=Math.max(0,c[ae]),ie=Math.max(0,l[ae]),O=Math.max(0,f[ae]),j=N+ie+O,$e=Math.min(j,1);if(!($e>=o)||!Number.isFinite(t[ae]))continue;const Ae=N/j,Re=ie/j,ke=O/j,te=ke*S+Ae*b+Re*P,se=$e*(ke*ke+Ae*Ae+Re*Re),R=I+Math.floor(q/i);h[R]+=se*(t[ae]-te),w[R]+=se}}}let $=new Float32Array(_),y=new Uint8Array(_);for(let B=0;B<_;B++)w[B]>1&&($[B]=h[B]/w[B],y[B]=1);for(let B=0;B<r;B++){const E=new Float32Array(_),W=new Uint8Array(_);for(let ee=0;ee<k;ee++)for(let ae=0;ae<v;ae++)for(let I=0;I<m;I++){let q=0,N=0;for(let O=-1;O<=1;O++){const j=ee+O;if(!(j<0||j>=k))for(let $e=-1;$e<=1;$e++){const Ae=ae+$e;if(!(Ae<0||Ae>=v))for(let Re=-1;Re<=1;Re++){const ke=I+Re;if(ke<0||ke>=m)continue;const te=(j*v+Ae)*m+ke;y[te]&&(q+=$[te],N++)}}}const ie=(ee*v+ae)*m+I;N>0&&(E[ie]=q/N,W[ie]=1)}$=E,y=W}const G=(B,E)=>{const W=new Int32Array(B),ee=new Int32Array(B),ae=new Float32Array(B);for(let I=0;I<B;I++){const q=rn((I+.5)/i-.5,0,E-1);W[I]=Math.floor(q),ee[I]=Math.min(W[I]+1,E-1),ae[I]=q-W[I]}return{low:W,high:ee,t:ae}},M=G(g,m),A=G(d,v),T=G(u,k),U=g===256&&d===256;return B=>{let E,W,ee;if(U)ee=B>>>16,W=B>>>8&255,E=B&255;else{ee=Math.floor(B/z);const K=B-ee*z;W=Math.floor(K/g),E=K-W*g}const ae=M.low[E],I=M.high[E],q=M.t[E],N=(T.low[ee]*v+A.low[W])*m,ie=(T.low[ee]*v+A.high[W])*m,O=(T.high[ee]*v+A.low[W])*m,j=(T.high[ee]*v+A.high[W])*m,$e=$[N+ae]+($[N+I]-$[N+ae])*q,Ae=$[ie+ae]+($[ie+I]-$[ie+ae])*q,Re=$[O+ae]+($[O+I]-$[O+ae])*q,ke=$[j+ae]+($[j+I]-$[j+ae])*q,te=A.t[W],se=$e+(Ae-$e)*te,R=Re+(ke-Re)*te;return se+(R-se)*T.t[ee]}}function Sn(e,t,n,s){const o=(e-t)/n;return-.5*o*o-s}function ar(e,t,n,s={}){const{catLiteMinSupport:o=.03,catLitePurePriorPower:i=3,catLiteMinMeanSeparation:r=.035,catLiteSigmaFloor:a=.025,catLiteBiasBlockSize:c=16,catLiteBiasSmoothPasses:l=3,catLitePriorStrength:f=.8,catLiteIntensityStrength:g=.75,catLiteMixelPrior:d=.35,catLiteCsfWmMixelPrior:u=6,catLiteSpatialWeight:p=.25}=s,m={priorPower:i,minSupport:o,minSeparation:r,sigmaFloor:a},[v,k,_]=n,h=t.length,w=o>0&&o<=1,{componentCount:S,removedVoxels:b,supportMask:P}=sr(e,n,o),z={componentCount:S,removedVoxels:b},$=or(e,t,m,P),y=Bs($,m,!0);if(!y.applied)return{tissues:e,stats:y};const G=rr(e,t,n,y.means,{minSupport:o,block:c,smoothingPasses:l},P);for(let pe=0;pe<$.indices.length;pe++){const be=$.indices[pe];$.values[pe]=t[be]-G(be)}const M=Bs($,m);if(!M.applied)return{tissues:e,stats:M};$.indices=$.weightCsf=$.weightGm=$.weightWm=null;const[A,T,U]=M.means,[B,E,W]=M.sigmas,[ee,ae,I]=e,q=new Float32Array(h),N=new Float32Array(h),ie=new Float32Array(h),O=v*k,j=.5*(A+T),$e=.5*(T+U),Ae=.5*(A+U),Re=Math.sqrt(jt(T-A,2)/12+.5*(jt(B,2)+jt(E,2))),ke=Math.sqrt(jt(U-T,2)/12+.5*(jt(E,2)+jt(W,2))),te=Math.sqrt(jt(U-A,2)/12+.5*(jt(B,2)+jt(W,2))),se=Math.log(B),R=Math.log(E),K=Math.log(W),D=Math.log(Re),le=Math.log(ke),Ge=Math.log(te);let Fe=0;for(let pe=0;pe<_;pe++)for(let be=0;be<k;be++){let Z=pe*O+be*v;for(let We=0;We<v;We++,Z++){if(w&&P[Z]!==2)continue;const X=Math.max(0,ee[Z]),Ee=Math.max(0,ae[Z]),st=Math.max(0,I[Z]),Ne=X+Ee+st,rt=Math.min(Ne,1);if(!(rt>=o)||!Number.isFinite(t[Z]))continue;let at=X/Ne,it=Ee/Ne,bt=st/Ne;if(p>0){let Ce=0,de=0,V=0,oe=0;if(We>0){const ge=Z-1,De=Math.max(0,ee[ge]),lt=Math.max(0,ae[ge]),Oe=Math.max(0,I[ge]),Ie=De+lt+Oe;Ie>Et&&(Ce+=De/Ie,de+=lt/Ie,V+=Oe/Ie,oe++)}if(We+1<v){const ge=Z+1,De=Math.max(0,ee[ge]),lt=Math.max(0,ae[ge]),Oe=Math.max(0,I[ge]),Ie=De+lt+Oe;Ie>Et&&(Ce+=De/Ie,de+=lt/Ie,V+=Oe/Ie,oe++)}if(be>0){const ge=Z-v,De=Math.max(0,ee[ge]),lt=Math.max(0,ae[ge]),Oe=Math.max(0,I[ge]),Ie=De+lt+Oe;Ie>Et&&(Ce+=De/Ie,de+=lt/Ie,V+=Oe/Ie,oe++)}if(be+1<k){const ge=Z+v,De=Math.max(0,ee[ge]),lt=Math.max(0,ae[ge]),Oe=Math.max(0,I[ge]),Ie=De+lt+Oe;Ie>Et&&(Ce+=De/Ie,de+=lt/Ie,V+=Oe/Ie,oe++)}if(pe>0){const ge=Z-O,De=Math.max(0,ee[ge]),lt=Math.max(0,ae[ge]),Oe=Math.max(0,I[ge]),Ie=De+lt+Oe;Ie>Et&&(Ce+=De/Ie,de+=lt/Ie,V+=Oe/Ie,oe++)}if(pe+1<_){const ge=Z+O,De=Math.max(0,ee[ge]),lt=Math.max(0,ae[ge]),Oe=Math.max(0,I[ge]),Ie=De+lt+Oe;Ie>Et&&(Ce+=De/Ie,de+=lt/Ie,V+=Oe/Ie,oe++)}if(oe){const ge=1-p;at=ge*at+p*Ce/oe,it=ge*it+p*de/oe,bt=ge*bt+p*V/oe}}const Le=$.values[Fe++],Je=f*Math.log(bt+Et)+g*Sn(Le,A,B,se),ot=f*Math.log(at+Et)+g*Sn(Le,T,E,R),pt=f*Math.log(it+Et)+g*Sn(Le,U,W,K),mt=f*Math.log(d*2*Math.sqrt(bt*at)+Et)+g*Sn(Le,j,Re,D),ht=f*Math.log(d*2*Math.sqrt(at*it)+Et)+g*Sn(Le,$e,ke,le),Gt=f*Math.log(u*2*Math.sqrt(bt*it)*jt(1-at,2)+Et)+g*Sn(Le,Ae,te,Ge),Ct=Math.max(Je,ot,pt,mt,ht,Gt),H=Math.exp(Je-Ct),Nt=Math.exp(ot-Ct),Ut=Math.exp(pt-Ct),Dt=Math.exp(mt-Ct),zt=Math.exp(ht-Ct),x=Math.exp(Gt-Ct),F=H+Nt+Ut+Dt+zt+x,L=rn((Le-A)/(T-A),0,1),ue=rn((U-Le)/(U-T),0,1),Q=rn((Le-A)/(U-A),0,1),Ue=(Nt+Dt*L+zt*ue)/F,me=(Ut+zt*(1-ue)+x*Q)/F,he=(H+Dt*(1-L)+x*(1-Q))/F,Y=Math.min(bt,it),Be=rn((Y-at)/(Y+Et),0,1),ye=rn(4*bt*it,0,1),qe=jt(1-ye*Be,2);q[Z]=rn(Ue*rt*qe,0,1);const je=(1-Ue*qe)/Math.max(me+he,Et);N[Z]=rn(me*je*rt,0,1),ie[Z]=rn(he*je*rt,0,1)}}return{tissues:[q,N,ie],stats:{applied:!0,tissueMeans:{csf:A,gray:T,white:U},tissueSigmas:{csf:B,gray:E,white:W},supportCleanup:z}}}const Cs=({csf:e,gray:t,white:n})=>`CSF=${e.toFixed(3)} GM=${t.toFixed(3)} WM=${n.toFixed(3)}`;function ir(e,t,n,s,o){return we(this,null,function*(){var c;const i=[];for(let l=0;l<3;l++)i.push(yield o(e[l],l)),e[l]=null;const{tissues:r,stats:a}=ar(i,t,tr,n);if(s.Output_Type="Continuous tissue probability",s.Tissue="GM/WM/CSF",s.Softmax_Temperature=(c=n.softmaxTemperature)!=null?c:1,a.applied){s.Partial_Volume="CAT-lite mixed-class PVE",s.CAT_Lite_Tissue_Means=Cs(a.tissueMeans),s.CAT_Lite_Tissue_Sigmas=Cs(a.tissueSigmas);const{componentCount:l,removedVoxels:f}=a.supportCleanup;console.log(`[CAT-lite] means ${s.CAT_Lite_Tissue_Means}; sigmas ${s.CAT_Lite_Tissue_Sigmas}; removed ${f} voxels outside the largest of ${l} support components`)}else s.Partial_Volume=`Skipped: ${a.reason}`,console.warn(`[CAT-lite] skipped: ${a.reason}`);return r})}const un=[1,3,5,7,13,19,31,19,13,7,5,3,1],lr=[16,8,4,2,1,16,8,4,2,1,16,8,4,2,1,16,8,4,2,1,16,8,4,2,1],ur={model16chan18cls:{dilations:un,activation:"gelu_tanh",fullVolume:!0},model24chan18cls_gdice_prio:{dilations:un,activation:"gelu_tanh",fullVolume:!0},model6chan3cls:{dilations:un,activation:"gelu_tanh",fullVolume:!0},model24chan104cls_synth:{dilations:un,activation:"gelu_tanh",fullVolume:!0},model24chan104cls_infant_refit_synth:{dilations:un,activation:"gelu_tanh",fullVolume:!0},model24chan104cls_v3_repbn:{dilations:un,activation:"gelu_tanh",fullVolume:!0},model24chan50cls:{dilations:un,activation:"gelu_tanh",fullVolume:!0},model32chan18cls:{dilations:un,activation:"gelu_tanh",fullVolume:!1},mindgrab:{dilations:lr,activation:"gelu_tanh",fullVolume:!0},model5_gw_ae:{dilations:[1,2,4,8,16,8,4,2,1],activation:"relu",fullVolume:!0},model11_gw_ae:{dilations:[1,2,4,8,4,2,2,1],activation:"relu",noSafetensors:!0,fullVolume:!0},model30chan18cls:{dilations:[1,2,4,8,16,8,4,2,1],activation:"elu",fullVolume:!0},model30chan50cls:{dilations:[1,2,4,8,16,8,4,2,1],activation:"elu",fullVolume:!0}};function cr(e){const t=String(e.path||"").match(/\/models\/([^/]+)\//);return t?t[1]:null}function fs(e){const t=cr(e);if(!t)return null;const n=ur[t];return!n||n.noSafetensors?null:$t({name:t},n)}function fr(e){const t=e&32768?-1:1,n=(e&31744)>>10,s=e&1023;return n===0?t*Math.pow(2,-14)*(s/1024):n===31?s?NaN:t*(1/0):t*Math.pow(2,n-15)*(1+s/1024)}function Ys(e){const t=new DataView(e),n=Number(t.getBigUint64(0,!0)),s=JSON.parse(new TextDecoder().decode(new Uint8Array(e,8,n))),o=8+n,i={};for(const[r,a]of Object.entries(s)){if(r==="__metadata__"){i.__metadata__=a;continue}const[c,l]=a.data_offsets,f=a.shape.reduce((d,u)=>d*u,1);let g;if(a.dtype==="F32")g=new Float32Array(e.slice(o+c,o+l));else if(a.dtype==="F16"){const d=new Uint16Array(e.slice(o+c,o+l));g=new Float32Array(f);for(let u=0;u<f;u++)g[u]=fr(d[u])}else if(a.dtype==="BF16"){const d=new Uint16Array(e.slice(o+c,o+l));g=new Float32Array(f);const u=new Uint32Array(1),p=new Float32Array(u.buffer);for(let m=0;m<f;m++)u[0]=d[m]<<16,g[m]=p[0]}else throw new Error(`safetensors: unsupported dtype ${a.dtype} for tensor '${r}'`);if(g.length!==f)throw new Error(`safetensors: tensor '${r}' has ${g.length} values, shape says ${f}`);i[r]={dtype:a.dtype,shape:a.shape,data:g}}return i}function Ks(e){const t=[],n=[],s=[];for(const[i,r]of Object.entries(e)){if(i==="__metadata__")continue;const a=i.match(/^m\.model\.(\d+)\.(weight|bias)$/);if(!a)continue;const c=Number(a[1]),l=a[2]==="weight";if(r.shape.length===5){const[f,g,d,u,p]=r.shape,v={idx:c,outC:f,inC:g,kd:d,kh:u,kw:p,is1x1:d===1&&u===1&&p===1,w:r.data,bias:null},k=t.find(_=>_.idx===c);k?Object.assign(k,v):t.push(v)}else r.shape.length===1&&s.push({idx:c,isW:l,data:r.data,len:r.shape[0]})}t.sort((i,r)=>i.idx-r.idx);for(const i of s){const r=t.find(c=>c.idx===i.idx);if(r&&!i.isW){r.bias=i.data;continue}if(r&&i.isW)continue;let a=n.find(c=>c.idx===i.idx);a||(a={idx:i.idx,scale:null,bias:null},n.push(a)),i.isW?a.scale=i.data:a.bias=i.data}n.sort((i,r)=>i.idx-r.idx);let o=null;return t.length&&t[t.length-1].is1x1&&(o=t.pop()),{convs:t,affines:n,classifier:o}}function pr(e,t){var n;if(t==null)return e;if(t.length!==((n=e.classifier)==null?void 0:n.outC)||!Array.from(t).every(Number.isFinite))throw new Error("Classifier bias must contain one finite value per exported class");return e.classifier.bias=Float32Array.from(t),e}function mr(e,t){const n=t.cs,s=t.chan,{convs:o,affines:i,classifier:r}=e,a=u=>27*u*n;let c=0;const l=[];o.forEach((u,p)=>{const m=p===0?1:n,v={wq:c/4,inCS:m};c+=a(m),u.bias&&(v.biasQ=c/4,c+=n),l.push(v)}),i.forEach((u,p)=>{l[p]=l[p]||{},l[p].affQ=c/4,c+=n,l[p].affBiasQ=c/4,c+=n});let f=-1,g=-1;r&&(f=c,c+=s*t.nclass,c=Math.ceil(c/4)*4,r.bias&&(g=c,c+=t.nclass),c=Math.ceil(c/4)*4);const d=new Float32Array(c);if(o.forEach((u,p)=>{const m=l[p],v=m.inCS,k=m.wq*4,_=u.kd*u.kh*u.kw;if(u.outC>s||p>0&&u.inC>s)throw new Error(`layer ${p}: shape ${u.outC}x${u.inC} exceeds CHAN ${s}`);for(let h=0;h<u.outC;h++){for(let w=0;w<u.inC;w++)for(let S=0;S<u.kd;S++)for(let b=0;b<u.kh;b++)for(let P=0;P<u.kw;P++){const z=u.kd===3?S*9+b*3+P:0,$=(((h*u.inC+w)*u.kd+S)*u.kh+b)*u.kw+P;d[k+(z*v+w)*n+h]=u.w[$]}u.bias&&(d[m.biasQ*4+h]=u.bias[h])}if(_!==27&&_!==1)throw new Error(`layer ${p}: kernel ${u.kd}x${u.kh}x${u.kw} unsupported`)}),i.forEach((u,p)=>{const m=l[p];for(let v=0;v<s;v++)d[m.affQ*4+v]=u.scale?u.scale[v]:0,d[m.affBiasQ*4+v]=u.bias?u.bias[v]:0}),r)for(let u=0;u<t.nclass;u++){for(let p=0;p<s;p++)d[f+p*t.nclass+u]=r.w[u*r.inC+p];r.bias&&(d[g+u]=r.bias[u])}return{data:d,offsets:{layers:l,clsFloat:f,clsBiasFloat:g}}}function Zs(e,t={}){const{convs:n,affines:s,classifier:o}=e,i=n[0].outC,r=Math.ceil(i/4)*4,a=n.some(l=>l.bias),c=$t({chan:i,cs:r,planes:r/4,nclass:o?o.outC:0,nhidden:n.length-1,norm:s.length?"gn":a?"none":"gn",affine:s.length>0,convBias:a,classifierBias:!!(o&&o.bias),centeredVariance:!1,eps:1e-5},t);if(c.nclass>256)throw new Error(`classifier has ${c.nclass} classes; the RGBA8 label texture holds at most 256`);if(!c.activation)throw new Error("descriptor needs an explicit `activation`");if(!c.dilations)throw new Error("descriptor needs an explicit `dilations` array");if(c.dilations.length!==n.length)throw new Error(`descriptor has ${c.dilations.length} dilations for ${n.length} convs`);return c}const Hn=(e,t)=>Array.from({length:e},(n,s)=>t(s)).join(""),zs=["x","y","z","w"];function dr(e){const t=`fn act4(x : vec4<f32>) -> vec4<f32> {
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
`;default:throw new Error(`webgpu-native: unknown activation '${e}'; add it deliberately`)}}function gr(e,t,n){const s=e.cs/4,o=l=>Hn(n,l),i=l=>Hn(s,l),r=i(l=>`          let w${l} = vec4<f32>(wts4[wq + ${l}u]);
`),a=l=>`        { let wq = wq0 + ((tap * cin) + ic4 * 4u + ${l}u) * (CS / 4u);
`+r+o(f=>i(g=>`          a${f}${g} = fma(w${g}, vec4<f32>(s${f}.${zs[l]}), a${f}${g});
`))+`        }
`,c=(e.convBias?i(l=>`  let b${l} = vec4<f32>(wts4[params.bias_off / 4u + ${l}u]);
`)+o(l=>i(f=>`  a${l}${f} = a${l}${f} + b${f};
`)):"")+(e.norm==="none"?o(l=>i(f=>`  a${l}${f} = act4(a${l}${f});
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
`+o(l=>i(f=>`  var a${l}${f} = vec4<f32>(0.0);
`))+o(l=>`  var s${l} = vec4<f32>(0.0);
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
`+r.replace(/^ {10}/gm,"        ")+o(l=>`        { let sx = x0 + ${l} + dxd;
          let sv = f32(src[plane + u32(clamp(sx, 0, NX - 1))]);
          let s = vec4<f32>(select(0.0, sv, sx >= 0 && sx < NX));
`+i(f=>`          a${l}${f} = fma(w${f}, s, a${l}${f});
`)+`        }
`)+`      } else {
      for (var ic4 : u32 = 0u; ic4 < cin4; ic4 = ic4 + 1u) {
`+o(l=>`        { let sx = x0 + ${l} + dxd;
          let q = vec4<f32>(src4[(plane + u32(clamp(sx, 0, NX - 1))) * st4 + ic4]);
          s${l} = select(vec4<f32>(0.0), q, sx >= 0 && sx < NX); }
`)+a(0)+a(1)+a(2)+a(3)+`      }
      }
    }
    tap = tap + 1u;
  }}}
`+c+`  let obase = (u32(z) * u32(NY) + u32(y)) * u32(NX) + u32(x0);
`+o(l=>`  { let o = (obase + ${l}u) * CS;
`+i(f=>Hn(4,g=>`    dst[o + ${4*f+g}u] = f16(a${l}${f}.${zs[g]});
`))+`  }
`)+`}
`}function _r(e){return`var<workgroup> wg_sum : array<f32, ${e} * CS>;
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
`}function br(e){return`@compute @workgroup_size(${e}, 1, 1)
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
`}function hr(e){return`@group(0) @binding(5) var<storage, read_write> labels : array<u32>;
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
`}function wr(e,t){var i;const{localX:n,vox:s,momLX:o}=t;if(e.cs%4!==0||e.cs>256)throw new Error(`webgpu-native: channel stride ${e.cs} unsupported`);if(e.nx%(n*s)||e.nx%n||e.nx%o)throw new Error(`webgpu-native: preset ${n}x${s}/${o} does not tile a ${e.nx}-voxel row`);if(o<e.cs)throw new Error(`webgpu-native: moments workgroup ${o} < ${e.cs} channels`);return`enable f16;
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
`+dr(e.activation)+gr(e,n,s)+(e.norm==="gn"?_r(o)+br(n):"")+hr(n)}const jn={amd:{localX:256,vox:1},apple:{localX:64,vox:2},default:{localX:64,vox:2}};function vr(){var e;try{const t=new URLSearchParams(((e=globalThis.location)==null?void 0:e.search)||"").get("wgPreset"),n=t&&/^(\d+)x([124])$/.exec(t);return n?{localX:Number(n[1]),vox:Number(n[2]),source:"url"}:null}catch(t){return null}}function yr(e,t){var a;const n=String(((a=e.adapterInfo)==null?void 0:a.vendor)||"").toLowerCase(),s=e.limits,o=c=>c.localX<=s.maxComputeInvocationsPerWorkgroup&&c.localX<=s.maxComputeWorkgroupSizeX&&t.nx%(c.localX*c.vox)===0;let i=vr()||Rt($t({},jn[n]||jn.default),{source:n||"default"});o(i)||(console.warn(`[WebGPU-native] preset ${i.localX}x${i.vox} does not fit this device; using the default`),i=Rt($t({},jn.default),{source:"fallback"}));let r=0;for(const c of[256,128,64,32])if(c<=i.localX&&c>=t.cs&&t.nx%c===0&&c<=s.maxComputeInvocationsPerWorkgroup&&c*t.cs*8<=s.maxComputeWorkgroupStorageSize){r=c;break}if(!r)throw new Error(`webgpu-native: no moments workgroup fits ${t.cs} channels on this device`);return Rt($t({},i),{momLX:r,vendor:n||"unknown"})}const At=256;function Fs(e){if(typeof Float16Array!="undefined")return new Uint16Array(new Float16Array(e).buffer);const t=new Uint16Array(e.length),n=new Float32Array(1),s=new Uint32Array(n.buffer);for(let o=0;o<e.length;o++){n[0]=e[o];const i=s[0],r=i>>>16&32768,a=i>>>23&255,c=i&8388607;if(a===255){t[o]=r|31744|(c?512:0);continue}const l=a-127+15;if(l>=31){t[o]=r|31744;continue}if(l<=0){if(l<-10){t[o]=r;continue}const d=c|8388608,u=14-l;let p=d>>>u;const m=d&(1<<u)-1,v=1<<u-1;(m>v||m===v&&p&1)&&p++,t[o]=r|p;continue}let f=l<<10|c>>>13;const g=c&8191;(g>4096||g===4096&&f&1)&&f++,t[o]=r|f}return t}function xr(e,t){var n;return t.quantize8Bit?"8-bit quantized V4 runner requested":(n=e.features)!=null&&n.has("shader-f16")?t.outputType==="probability"?"probability output (CAT-lite) is not ported yet":t.enableTTA?"test-time augmentation uses the tinygrad TTA runner":t.forceFP32?"model entry forces fp32":t.webgpu_safetensor?fs(t)?null:"no descriptor in webgl2_runners/descriptors.js":"no safetensors weights":"device lacks shader-f16"}function $r(e,t){const n=e.nx*e.ny*e.nz,s=e.nx/t*e.ny*e.nz;return 2*n*e.cs*2+n*2+2*n*4+(s+1)*e.cs*2*4}const Ls=new WeakMap;function Sr(e,t,n){return we(this,null,function*(){let s=Ls.get(e);s||(s=new Map,Ls.set(e,s));const o=`${t.chan}|${t.cs}|${t.nclass}|${t.norm}|${t.affine}|${t.convBias}|${t.clsBias}|${t.activation}|${t.eps}|${n.localX}x${n.vox}x${n.momLX}`;let i=s.get(o);return i||(i=we(null,null,function*(){const r=e.createShaderModule({code:wr(t,n)}),a=["read-only-storage","storage","read-only-storage","uniform","storage","storage","read-only-storage","read-only-storage"],c=e.createBindGroupLayout({entries:a.map((d,u)=>({binding:u,visibility:GPUShaderStage.COMPUTE,buffer:{type:d}}))}),l=e.createPipelineLayout({bindGroupLayouts:[c]}),f=["conv","classify",...t.norm==="gn"?["moments","moments_finish","norm"]:[]],g=Object.fromEntries(yield Promise.all(f.map(d=>we(null,null,function*(){return[d,yield e.createComputePipelineAsync({layout:l,compute:{module:r,entryPoint:d}})]}))));return{bgl:c,pipelines:g}}).catch(r=>{throw s.delete(o),r}),s.set(o,i)),i})}function Pr(e,t,n,s){return we(this,null,function*(){const o=fs(s);if(!o)throw new Error(`webgpu-native: no descriptor for ${s.path}`);const i=t instanceof Uint8Array?t:new Uint8Array(t),r=pr(Ks(Ys(i.buffer.slice(i.byteOffset,i.byteOffset+i.byteLength))),s.classifierBias),a=Zs(r,{nx:At,ny:At,nz:At,activation:o.activation,dilations:o.dilations});if(!a.nclass)throw new Error("webgpu-native: model has no classifier");if(a.convBias&&a.affine)throw new Error("webgpu-native: conv bias together with a GroupNorm affine is not supported");const c=yr(e,a),l=At*At*At,f=l*a.cs*2,g=e.limits;if(f>g.maxStorageBufferBindingSize||f>g.maxBufferSize)throw new Error(`webgpu-native: a ${f>>>20} MiB activation exceeds this device's buffer limits`);console.log(`[WebGPU-native] ${o.name}: ${a.chan}ch (stride ${a.cs}) ${a.nclass}cls norm=${a.norm} affine=${a.affine} act=${a.activation} | preset ${c.localX}x${c.vox} (moments ${c.momLX}, ${c.source}) | ~${Math.round($r(a,c.momLX)/1048576)} MiB`);const d=mr(r,a),{layers:u,clsFloat:p,clsBiasFloat:m}=d.offsets;e.pushErrorScope("validation"),e.pushErrorScope("out-of-memory");let v=2;try{const{bgl:k,pipelines:_}=yield Sr(e,a,c),h=(O,j)=>e.createBuffer({size:O,usage:j}),w=GPUBufferUsage.STORAGE,S=At/c.momLX*At*At,b=Fs(d.data),P=h(l*2,w|GPUBufferUsage.COPY_DST),z=h(f,w),$=h(f,w),y=h(Math.ceil(b.byteLength/16)*16,w|GPUBufferUsage.COPY_DST),G=h((S+1)*a.cs*2*4,w),M=h(l*4,w|GPUBufferUsage.COPY_SRC),A=h(l*4,GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST);e.queue.writeBuffer(y,0,b);const T=(O,j,$e)=>{const Ae=h(32,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST);return e.queue.writeBuffer(Ae,0,$e),e.createBindGroup({layout:k,entries:[{binding:0,resource:{buffer:O}},{binding:1,resource:{buffer:j}},{binding:2,resource:{buffer:y}},{binding:3,resource:{buffer:Ae}},{binding:4,resource:{buffer:G}},{binding:5,resource:{buffer:M}},{binding:6,resource:{buffer:y}},{binding:7,resource:{buffer:O}}]})},U=O=>{const j=new Uint32Array(8);return j[0]=O.dilation|0,j[1]=O.weightOff>>>0,j[2]=O.affineOff>>>0,j[3]=O.biasOff>>>0,j[4]=O.inChannels>>>0,j[5]=O.inStride>>>0,j[6]=S,j},B=[];let E=P,W=z;u.forEach((O,j)=>{const $e=j===0;B.push(T(E,W,U({dilation:a.dilations[j],weightOff:O.wq*4,affineOff:O.affQ!==void 0?O.affQ*4:0,biasOff:O.biasQ!==void 0?O.biasQ*4:O.affBiasQ!==void 0?O.affBiasQ*4:0,inChannels:$e?1:a.cs,inStride:$e?1:a.cs}))),E=W,W=W===z?$:z});const ee=T(E,W,U({weightOff:p,biasOff:m>=0?m:0}));v=0;const ae=yield e.popErrorScope(),I=yield e.popErrorScope();if(ae||I)throw new Error(`webgpu-native setup failed: ${(ae||I).message}`);const q=At/(c.localX*c.vox),N=At/c.localX,ie=At/c.momLX;return function(j){return we(this,null,function*(){if(j.length!==l)throw new Error(`webgpu-native: input has ${j.length} voxels, expected ${l}`);e.pushErrorScope("validation"),e.queue.writeBuffer(P,0,Fs(j));for(const te of B){const se=e.createCommandEncoder(),R=se.beginComputePass();R.setBindGroup(0,te),R.setPipeline(_.conv),R.dispatchWorkgroups(q,At,At),a.norm==="gn"&&(R.setPipeline(_.moments),R.dispatchWorkgroups(ie,At,At),R.setPipeline(_.moments_finish),R.dispatchWorkgroups(1,1,1),R.setPipeline(_.norm),R.dispatchWorkgroups(N,At,At)),R.end(),e.queue.submit([se.finish()])}const $e=e.createCommandEncoder(),Ae=$e.beginComputePass();Ae.setBindGroup(0,ee),Ae.setPipeline(_.classify),Ae.dispatchWorkgroups(N,At,At),Ae.end(),$e.copyBufferToBuffer(M,0,A,0,l*4),e.queue.submit([$e.finish()]),yield A.mapAsync(GPUMapMode.READ);const Re=new Float32Array(new Uint32Array(A.getMappedRange()));A.unmap();const ke=yield e.popErrorScope();if(ke)throw new Error(`webgpu-native inference failed: ${ke.message}`);return[Re]})}}finally{for(;v-- >0;)yield e.popErrorScope().catch(()=>{})}})}const kr={grayMatter:[2,6,7,8,9,10,14,15,16,17],whiteMatter:[1,5],csf:[3,4,11,12]};function Mn(e,t,n,s,o){var r;const i=Number((r=e[t])!=null?r:n);if(!Number.isFinite(i)||i<s||i>o)throw new Error(`${t} must be between ${s} and ${o}, got ${e[t]}`);return i}function Xn(e,t,n){let s=0;for(const o of e||[]){if(!Number.isInteger(o)||o<0||o>=t||o>=32)throw new Error(`Invalid ${n} tissue label ${o} for ${t} classes`);s=(s|1<<o)>>>0}return s}function Mr(e,t){if(!Number.isInteger(t)||t<2||t>32)throw new Error(`Native WebGL2 grouped probabilities require 2..32 classes, got ${t}`);const n=$t($t({},kr),e.probabilityGroups||{});return{temperature:Mn(e,"softmaxTemperature",1,1e-6,1e6),supportTemperature:Mn(e,"brainSupportTemperature",1,1e-6,1e6),supportPower:Mn(e,"brainSupportPower",1,1e-6,1e6),sigma:Mn(e,"partialVolumeSigma",0,0,2),grayMask:Xn(n.grayMatter,t,"gray-matter"),whiteMask:Xn(n.whiteMatter,t,"white-matter"),csfMask:Xn(n.csf,t,"CSF")}}function Yn(e,t,n,s,o,i){const[r,a,c]=n,l=r*a,f=o.length-1>>1;for(let g=0;g<c;g++)for(let d=0;d<a;d++)for(let u=0;u<r;u++){const p=g*l+d*r+u,m=s===1?u:s===r?d:g,v=s===1?r:s===r?a:c;let k=0;for(let _=-f;_<=f;_++){const h=m+_;h<0||h>=v||(k+=o[_+f]*e[p+_*s])}t[p]=k/i}}function Ar(e,t,n,s){const[o,i,r]=n,a=o*i*r;if(!Array.isArray(e)||e.length!==3||e.some(u=>u.length!==a)||t.length!==a)throw new Error("Native WebGL2 tissue-prior dimensions do not match");const c=Mn(s,"partialVolumeSigma",0,0,2),l=Mn(s,"brainSupportPower",1,1e-6,1e6);let f=null,g=null,d=1;if(c>0){const u=Math.max(1,Math.round(3*c));g=new Float32Array(u*2+1),d=0;for(let p=-u;p<=u;p++){const m=Math.exp(-.5*p*p/(c*c));g[p+u]=m,d+=m}f=new Float32Array(a)}for(const u of e){let p=u;g&&(Yn(u,f,n,1,g,d),Yn(f,u,n,o,g,d),Yn(u,f,n,o*i,g,d),p=f);for(let m=0;m<a;m++){const v=Math.pow(Math.max(0,Math.min(1,t[m])),l);u[m]=Math.max(0,Math.min(1,p[m]*v))}}return e}const C=256,Pt=64,Yt=8,_t=Pt+2*Yt,pn=_t*4,Xe=C*64,Un=C*C*2,En=9216,Qs=En*8,Js=[1,3,5,7,13,19,31,19,13,7,5,3,1],Lt=(e,t)=>Array.from({length:e},(n,s)=>t(s)).join(""),eo=280,to=180,Kn=112;function no(e){var t;if(e!=null&&e.webgpuExecMode)return String(e.webgpuExecMode).toLowerCase();try{const n=new URLSearchParams(((t=globalThis.location)==null?void 0:t.search)||"").get("webgpuExec");if(n)return n.toLowerCase()}catch(n){}return""}function ps(e){var f;const t=(e==null?void 0:e.__adapterInfo)||(e==null?void 0:e.adapterInfo)||{},n=String(t.vendor||"").toLowerCase(),s=String(t.architecture||"").toLowerCase(),o=`${t.device||""} ${t.description||""}`,i=typeof navigator!="undefined"&&navigator.userAgent||"",r=typeof navigator!="undefined"&&(((f=navigator.userAgentData)==null?void 0:f.platform)||navigator.platform||"")||"",a=n==="apple"||/Mac|iPhone|iPad|iPod/i.test(`${r} ${i}`)&&!["intel","amd","nvidia","microsoft"].includes(n),c=!a&&(/Win/i.test(r)||/Windows/i.test(i)),l=c&&(n==="microsoft"||n==="intel"&&(/^gen-(9|11|12lp)/i.test(s)||/UHD Graphics|HD Graphics|Iris\(R\)\s*(Plus|Xe)|Pentium|Celeron/i.test(o)));return{vendor:n,arch:s,desc:o,isApple:a,isWindows:c,isWindowsSharedIgpu:l}}function so(e,t){const n=no(t);if(n==="single"||n==="pipelined"||n==="paced"||n==="calibrate")return n;if(n==="chunked")return"paced";const s=ps(e);return s.isApple?"single":s.isWindows?e!=null&&e.__v4WinCalibrated?e.__v4WinFast?"pipelined":"paced":"calibrate":"pipelined"}function oo(e,t){const n=no(t);return n==="single"?!1:n==="paced"||n==="chunked"||n==="calibrate"?!0:n==="pipelined"?!1:ps(e).isWindows}function ro(e,t,n){return(n==null?void 0:n.forceLowMem128)===!1?!1:ps(e).isWindowsSharedIgpu&&t.cs>=24&&t.cs%4===0}function yn(){return typeof requestAnimationFrame!="function"?new Promise(e=>setTimeout(e,0)):new Promise(e=>{let t=!1;const n=()=>{t||(t=!0,e())},s=setTimeout(n,16);requestAnimationFrame(()=>{clearTimeout(s),setTimeout(n,0)})})}function ms(e,t,n){const s=e.isFull?Xe:e.mainStrips.length,o=e.isFull||!e.extStrips?0:e.extStrips.length,i=t+1<n?e.isFull?Xe:e.normStrips?e.normStrips.length:0:0,r=Math.max(16,Math.round(i*.12));return t===0?{convWork:Math.max(64,Math.round(s*.12)),normWork:r}:{convWork:s+o,normWork:r}}function ao(e,t){let n=0;for(let o=0;o<t;o++){const i=ms(e.layers[o],o,t);n+=i.convWork+i.normWork}const s=e.clsSkipped?e.clsStrips.length:Xe;return n+=Math.max(64,Math.round(s*.2)),Math.max(1,n)}const io=new Float32Array(1),Br=new Uint32Array(io.buffer);function as(e){io[0]=e;const t=Br[0],n=t>>>16&32768,s=t>>>23&255;let o=t&8388607;if(s===255)return n|31744|(o?512:0);let i=s-127+15;return i<=0?i<-10?n:(o=(o|8388608)>>>1-i,n|o+4096>>>13):i>=31?n|31744:n|Math.min(31744,(i<<10)+(o+4096>>>13))}function Cr(e){const t=new Uint16Array(e.length);for(let n=0;n<e.length;n++)t[n]=as(e[n]);return t}const cn=new Map,zr=12,lo=new WeakMap,Fr=new WeakMap;function Lr(e){let t=2166136261,n=2654435769;const s=e.byteLength>>>2;if((e.byteOffset&3)===0){const o=new Uint32Array(e.buffer,e.byteOffset,s);for(let i=0;i<o.length;i++){const r=o[i];t=Math.imul(t^r,16777619)>>>0,n=Math.imul(n^(r<<13|r>>>19),2246822507)>>>0}}else for(let o=0;o<s*4;o+=4){const i=e[o]|e[o+1]<<8|e[o+2]<<16|e[o+3]<<24;t=Math.imul(t^i,16777619)>>>0,n=Math.imul(n^(i<<13|i>>>19),2246822507)>>>0}for(let o=s*4;o<e.byteLength;o++)t=Math.imul(t^e[o],16777619)>>>0;return`${e.byteLength}_${t.toString(16)}_${n.toString(16)}`}function Ur(e,t,n,s){const o=s!=null&&s.classifierBias?JSON.stringify(s.classifierBias):"",i=`${Lr(e)}|${n.chan}|${n.cs}|${n.nclass}|${n.norm}|${n.eps}|${o}`;if(cn.has(i)){const a=cn.get(i);return cn.delete(i),cn.set(i,a),a}const r=Ir(t,n);if(cn.size>=zr){const a=cn.keys().next().value;cn.delete(a)}return cn.set(i,r),r}function ds(e,t){let n=e.get(t);return n||(n=new Map,e.set(t,n)),n}function Xt(e,t,n){let s=e.get(t);return s||(s=n().catch(o=>{throw e.delete(t),o}),e.set(t,s)),s}function On(e,t){let n=0;return{alloc:(o,i)=>{const r=Math.max(16,Math.ceil(o/16)*16),a=e.createBuffer({size:r,usage:i});return t.push(a),n+=r,a},getBytes:()=>n,resetBytes:()=>{n=0}}}const ln=new WeakMap;function xn(e){const t=e?ln.get(e):null;if(t){ln.delete(e),t.inUse=!1;for(const n of t.buffers)n.destroy();t.buffers.length=0}}function uo(e,t,n){const s=ln.get(e);if(s){if(s.key===t&&!s.inUse)return s.inUse=!0,s;if(s.inUse){const r=n();return Rt($t({key:t},r),{inUse:!0,pooled:!1})}ln.delete(e);for(const r of s.buffers)r.destroy();s.buffers.length=0}const o=n(),i=Rt($t({key:t},o),{inUse:!0,pooled:!0});return ln.set(e,i),i}function Ot(e,t,n){return e.createShaderModule({label:t,code:n})}function gs(e,t,n,s,o){return we(this,null,function*(){const i=e.createBindGroupLayout({entries:o.map((r,a)=>typeof r=="string"?{binding:a,visibility:GPUShaderStage.COMPUTE,buffer:{type:r}}:{binding:a,visibility:GPUShaderStage.COMPUTE,buffer:r})});try{const r=yield e.createComputePipelineAsync({label:t,layout:e.createPipelineLayout({bindGroupLayouts:[i]}),compute:{module:n,entryPoint:s}});return{bgl:i,pipe:r}}catch(r){if(n!=null&&n.getCompilationInfo){const a=yield n.getCompilationInfo().catch(()=>null),c=a?a.messages.filter(l=>l.type==="error"):[];if(c.length)throw new Error(`meshnet_fast_v4 [${t}] WGSL error: `+c.map(l=>`L${l.lineNum}:${l.linePos} ${l.message}`).join(" | "))}throw r}})}function is(e,t){const n=t?`enable f16;
`:"",s=t?"f16":"f32",o=`vec4<${s}>`;return e?`${n}
@group(0) @binding(0) var<storage, read> raw_u32 : array<u32>;
@group(0) @binding(1) var<storage, read_write> inp_4 : array<${o}>;
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
  let dstX4 = ${Yt}u + wid.x * 8u + x4Loc;
  for (var s : u32 = 0u; s < 4u; s = s + 1u) {
    let zLoc = s * 8u + zOff;
    let r = zLoc * 33u + xBase;
    inp_4[((Z0 + zLoc) * 256u + Y) * ${_t}u + dstX4] =
      ${o}(${s}(sh[r]), ${s}(sh[r + 1u]), ${s}(sh[r + 2u]), ${s}(sh[r + 3u]));
  }
}`:`${n}
@group(0) @binding(0) var<storage, read> raw_f32 : array<f32>;
@group(0) @binding(1) var<storage, read_write> inp_4 : array<${o}>;
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
  let dstX4 = ${Yt}u + wid.x * 8u + x4Loc;
  for (var s : u32 = 0u; s < 4u; s = s + 1u) {
    let zl = s * 8u + zOff;
    let r = zl * 33u + xBase;
    inp_4[((Z0 + zl) * 256u + Y) * ${_t}u + dstX4] =
      ${o}(${s}(sh[r]), ${s}(sh[r + 1u]), ${s}(sh[r + 2u]), ${s}(sh[r + 3u]));
  }
}`}function co(){return`
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
}`}function Wr(){return`
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
}`}function Rr(){return`
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
}`}function Us(){return`
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
}`}function an(e,t,n,s,o){return we(this,null,function*(){const i=ds(Fr,e);let r=i.get(t);return r||(r=we(null,null,function*(){const a=Ot(e,t,n());return gs(e,t,a,s,o)}).catch(a=>{throw i.delete(t),a}),i.set(t,r)),r})}function Ws(e,t,n,s,o){t.fill(0);const i=C*C*C;if(!(o&&e[0]===s&&e[i-1]===s))return{hasBgSkip:!1};if(n.fill(0),(e instanceof Uint8Array||e instanceof Uint8ClampedArray)&&(e.byteOffset&3)===0&&Number.isInteger(s)&&s>=0&&s<=255){const c=new Uint32Array(e.buffer,e.byteOffset,i>>>2),l=new Uint32Array(n.buffer,n.byteOffset,C*C>>>2),f=(s&255)*16843009>>>0;let g=0;for(let d=0;d<C;d++)for(let u=0;u<16384;u++)l[u]|=c[g++]^f}else{let c=0;const l=C*C;for(let f=0;f<C;f++)for(let g=0;g<l;g++,c++)e[c]!==s&&(n[g]=1)}let a=0;for(let c=0;c<C;c++){const l=c*C;for(let f=0;f<C;f++)n[l+f]!==0&&(t[f*C+c]=1,a++)}return a===0||a>=6e4?{hasBgSkip:!1}:{hasBgSkip:!0}}function fo(e){return e?`${e.grayMask}_${e.whiteMask}_${e.csfMask}_${e.temperature}_${e.supportTemperature}`:"seg"}function po(l,f,g,d,u,p,m,v){return we(this,arguments,function*(e,t,n,s,o,i,r,a,{includeCls:c=!0}={}){var K;const k=ds(lo,e),_=s?1:0,h=o?1:0,w=r.useUniformWeff?1:0,S=(D,le,Ge,Fe)=>gs(e,D,le,Ge,Fe),b=["storage","storage","storage","storage"],P=["read-only-storage","storage","storage","storage","storage","storage","read-only-storage","storage","uniform","uniform","uniform"],z=["read-only-storage","read-only-storage","storage","storage","read-only-storage","uniform"],$=["storage","storage","storage","storage","read-only-storage","read-only-storage",{type:"uniform",hasDynamicOffset:!0,minBindingSize:32}],y=["storage","storage","storage","storage","read-only-storage","read-only-storage","read-only-storage","uniform"],G=["read-only-storage","read-only-storage","read-only-storage","read-only-storage","storage","storage",r.useUniformWeff?"uniform":"read-only-storage","read-only-storage",{type:"uniform",hasDynamicOffset:!0,minBindingSize:32}],M=["read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","storage","uniform","uniform","uniform"],A=`128|init|${t.cs}|${t.activation}|${_}`,T=`128|conv0|${t.cs}|${t.dilations[0]}|${t.norm}|${_}|${h}`,U=`128|prep|${t.chan}|${t.cs}|${t.activation}|${t.norm}|${_}`,B=`128|flush|${t.cs}|${_}`,E=`128|norm|${t.cs}|${t.activation}|${t.norm}|${_}`,W=`128|cls|${t.chan}|${t.cs}|${t.nclass}|${(K=n==null?void 0:n.clsK4)!=null?K:0}|${r.numConvs}|${t.activation}|${t.norm}|${_}|${fo(i)}`,ee=Xt(k,A,()=>{const D=Ot(e,"init_act8_128",r.initActWgsl());return S("init_act8_128",D,"main",b)}),ae=Xt(k,T,()=>we(null,null,function*(){const D=Ot(e,"conv0_128",r.conv0Wgsl()),le=yield Promise.all(r.halfPass0?[S("conv0_128_lo",D,"main_lo",P),S("conv0_128_hi",D,"main_hi",P),S("conv0_128_bg_lo",D,"main_bg_lo",P),S("conv0_128_bg_hi",D,"main_bg_hi",P)]:[S("conv0_128",D,"main",P),S("conv0_128_bg",D,"main_bg",P)]);return r.halfPass0?{lo:le[0],hi:le[1],bgLo:le[2],bgHi:le[3]}:{main:le[0],bg:le[1]}})),I=Xt(k,U,()=>we(null,null,function*(){const D=Ot(e,"prep_128",r.prepWgsl()),[le,Ge]=yield Promise.all([S("moments_finish_128",D,"moments_finish",z),S("prep_weff_128",D,"prep_weff",z)]);return{pMomFin:le,pPrepW:Ge}})),q=Xt(k,B,()=>{const D=Ot(e,"flush_128",r.flushWgsl());return S("flush_stage_128",D,"main",$)}),N=Xt(k,E,()=>we(null,null,function*(){const D=Ot(e,"norm_128",r.normWgsl()),[le,Ge]=yield Promise.all([S("norm_quant8_128",D,"main",y),S("norm_halo_fill_128",D,"norm_halo_fill",y)]);return{pNorm:le,pNormHalo:Ge}})),ie=c?Xt(k,W,()=>{const D=Ot(e,"cls_128",r.clsWgsl());return S("classify_v4_128",D,"main",M)}):Promise.resolve(null),O=a.map(D=>Xt(k,`128|conv|${t.chan}|${t.cs}|${D}|${t.activation}|${t.norm}|${w}|${_}|${h}`,()=>we(null,null,function*(){const le=Ot(e,`conv_128_d${D}`,r.getConvWgsl(D));if(r.halfPassConv){const[be,Z,We,X,Ee,st]=yield Promise.all([S(`conv_128_d${D}_lo`,le,"main_lo",G),S(`conv_128_d${D}_hi`,le,"main_hi",G),S(`conv_128_d${D}_ext_lo`,le,"main_ext_lo",G),S(`conv_128_d${D}_ext_hi`,le,"main_ext_hi",G),S(`conv_128_d${D}_bg_lo`,le,"main_bg_lo",G),S(`conv_128_d${D}_bg_hi`,le,"main_bg_hi",G)]);return{lo:be,hi:Z,extLo:We,extHi:X,bgLo:Ee,bgHi:st}}const[Ge,Fe,pe]=yield Promise.all([S(`conv_128_d${D}`,le,"main",G),S(`conv_128_d${D}_ext`,le,"main_ext",G),S(`conv_128_d${D}_bg`,le,"main_bg",G)]);return{main:Ge,ext:Fe,bg:pe}}))),[j,$e,Ae,Re,ke,te,...se]=yield Promise.all([ee,ae,I,q,N,ie,...O]),R={};return a.forEach((D,le)=>{R[D]=se[le]}),{pInit:j,pMomFin:Ae.pMomFin,pPrepW:Ae.pPrepW,pFlush:Re,pNorm:ke.pNorm,pNormHalo:ke.pNormHalo,pCls:te,pConv0:$e,convPipes:R}})}function mo(f,g,d,u,p,m,v,k,_){return we(this,arguments,function*(e,t,n,s,o,i,r,a,c,{includeCls:l=!0}={}){var K;const h=ds(lo,e),w=s?1:0,S=o?1:0,b=i?1:0,P=a.useUniformWeff?1:0,z=a.chunkableStd?1:0,$=(D,le,Ge,Fe)=>gs(e,D,le,Ge,Fe),y=["storage","storage"],G=["read-only-storage","storage","storage","read-only-storage","read-only-storage","storage","storage","read-only-storage","uniform"],M=["read-only-storage","read-only-storage","storage","storage","storage","storage","read-only-storage","uniform"],A=["storage","storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","uniform"],T=["read-only-storage","read-only-storage","storage","storage","storage","storage",a.useUniformWeff?"uniform":"read-only-storage","read-only-storage",a.chunkableStd?{type:"uniform",hasDynamicOffset:!0,minBindingSize:32}:"uniform"],U=["read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","storage","read-only-storage","uniform"],B=`std|init|${t.cs}|${t.activation}|${w}|${b}`,E=`std|conv0|${t.cs}|${t.dilations[0]}|${t.norm}|${w}|${S}|${b}`,W=`std|prep|${t.chan}|${t.cs}|${t.activation}|${t.norm}|${w}|${b}`,ee=`std|norm|${t.cs}|${t.activation}|${t.norm}|${w}|${b}`,ae=`std|cls|${t.chan}|${t.cs}|${t.nclass}|${(K=n==null?void 0:n.clsK4)!=null?K:0}|${t.activation}|${t.norm}|${w}|${b}|${fo(r)}`,I=Xt(h,B,()=>{const D=Ot(e,"init_act8",a.initActWgsl());return $("init_act8",D,"main",y)}),q=Xt(h,E,()=>we(null,null,function*(){const D=Ot(e,"conv0",a.conv0Wgsl()),le=yield Promise.all(a.halfPass0?[$("conv0_lo",D,"main_lo",G),$("conv0_hi",D,"main_hi",G),$("conv0_bg_lo",D,"main_bg_lo",G),$("conv0_bg_hi",D,"main_bg_hi",G)]:[$("conv0",D,"main",G),$("conv0_bg",D,"main_bg",G)]);return a.halfPass0?{lo:le[0],hi:le[1],bgLo:le[2],bgHi:le[3]}:{main:le[0],bg:le[1]}})),N=Xt(h,W,()=>we(null,null,function*(){const D=Ot(e,"prep",a.prepWgsl()),[le,Ge]=yield Promise.all([$("moments_finish",D,"moments_finish",M),$("prep_weff",D,"prep_weff",M)]);return{pMomFin:le,pPrepW:Ge}})),ie=Xt(h,ee,()=>we(null,null,function*(){const D=Ot(e,"norm",a.normWgsl()),[le,Ge]=yield Promise.all([$("norm_quant8",D,"main",A),$("norm_halo_fill",D,"norm_halo_fill",A)]);return{pNorm:le,pNormHalo:Ge}})),O=l?Xt(h,ae,()=>{const D=Ot(e,"cls",a.clsWgsl());return $("classify_v4",D,"main",U)}):Promise.resolve(null),j=c.map(D=>Xt(h,`std|conv|${t.chan}|${t.cs}|${D}|${t.activation}|${t.norm}|${P}|${w}|${S}|${b}${z?"|chk1":""}`,()=>we(null,null,function*(){const le=Ot(e,`conv_d${D}`,a.getConvWgsl(D));if(a.halfPassConv){const[pe,be,Z,We]=yield Promise.all([$(`conv_d${D}_lo`,le,"main_lo",T),$(`conv_d${D}_hi`,le,"main_hi",T),$(`conv_d${D}_ext_lo`,le,"main_ext_lo",T),$(`conv_d${D}_ext_hi`,le,"main_ext_hi",T)]);return{lo:pe,hi:be,extLo:Z,extHi:We}}const[Ge,Fe]=yield Promise.all([$(`conv_d${D}`,le,"main",T),$(`conv_d${D}_ext`,le,"main_ext",T)]);return{main:Ge,ext:Fe}}))),[$e,Ae,Re,ke,te,...se]=yield Promise.all([I,q,N,ie,O,...j]),R={};return c.forEach((D,le)=>{R[D]=se[le]}),{pInit:$e,pMomFin:Re.pMomFin,pPrepW:Re.pPrepW,pNorm:ke.pNorm,pNormHalo:ke.pNormHalo,pCls:te,pConv0:Ae,convPipes:R}})}function Rs(e,t,n,s,o){n.fill(0);const i=o&&e[0]===0&&e[e.length-1]===0;let r=0,a=0;if(!i){if(s)for(let c=0;c<C;c++){const l=c*C*pn;for(let f=0;f<C;f++){let g=l+f*pn+32;for(let d=0;d<C;d++,a++,g++){const u=e[a];t[g]=u===0?0:as(u)}}}else for(let c=0;c<C;c++){const l=c*C*pn;for(let f=0;f<C;f++){const g=c*C*C+f*C;t.set(e.subarray(g,g+C),l+f*pn+32)}}return{hasBgSkip:!1}}for(let c=0;c<C;c++){const l=c*C*pn;for(let f=0;f<C;f++){let g=!1,d=l+f*pn+32;for(let u=0;u<C;u++,a++,d++){const p=e[a];p!==0?(t[d]=s?as(p):p,g=!0):t[d]=0}g&&(n[c*C+f]=1,r++)}}return r===0||r>=6e4?{hasBgSkip:!1}:{hasBgSkip:!0}}function Ln(e,t){const n=new Uint8Array(C*C);for(let s=0;s<C;s++){const o=s*C,i=s-t,r=s+t;for(let a=0;a<C;a++){if(!e[o+a])continue;const c=a-t,l=a+t;if(i>=0){const f=i*C;c>=0&&(n[f+c]=1),n[f+a]=1,l<C&&(n[f+l]=1)}if(c>=0&&(n[o+c]=1),n[o+a]=1,l<C&&(n[o+l]=1),r>=0&&r<C){const f=r*C;c>=0&&(n[f+c]=1),n[f+a]=1,l<C&&(n[f+l]=1)}}}return n}function Gr(e,t){const n=new Uint8Array(C*C),s=new Uint8Array(C*C),o=new Int32Array(C+1);for(let i=0;i<C;i++){const r=i*C;for(let a=0;a<C;a++)o[a+1]=o[a]+e[r+a];for(let a=0;a<C;a++)o[Math.min(C-1,a+t)+1]-o[Math.max(0,a-t)]>0&&(n[r+a]=1)}for(let i=0;i<C;i++){for(let r=0;r<C;r++)o[r+1]=o[r]+n[r*C+i];for(let r=0;r<C;r++)o[Math.min(C-1,r+t)+1]-o[Math.max(0,r-t)]>0&&(s[r*C+i]=1)}return s}function Zn(e){const t=new Uint8Array(Xe);for(let n=0;n<C;n++){const s=n*C,o=n*64;for(let i=0;i<64;i++){const r=s+(i<<2);e[r]|e[r+1]|e[r+2]|e[r+3]&&(t[o+i]=1)}}return t}function Gn(e){const t=new Uint8Array(C*C);for(let n=0;n<C;n++){const s=n*C,o=n*64;for(let i=0;i<64;i++)if(e[o+i]){const r=s+(i<<2);t[r]=1,t[r+1]=1,t[r+2]=1,t[r+3]=1}}return t}function In(e){let t=0;for(let o=0;o<Xe;o++)t+=e[o];const n=new Uint32Array(t);let s=0;for(let o=0;o<C;o++){const i=o*64;for(let r=0;r<64;r++)e[i+r]&&(n[s++]=o<<8|r)}return n}function fn(e){let t=0;for(let n=0;n<e.length;n++)t+=e[n];return t}function Gs(e){const t=new Uint8Array(Xe);if(e===1024)for(let n=0;n<32;n++)for(let s=0;s<32;s++){const o=n*8+(n*3+s*5&7),i=s*2+(n+s&1);t[o*64+i]=1}else if(e===512)for(let n=0;n<32;n++)for(let s=0;s<16;s++){const o=n*8+(n*3+s*5&7),i=s*4+(n+s*3&3);t[o*64+i]=1}else for(let n=0;n<16;n++)for(let s=0;s<16;s++){const o=n*16+(n*7+s*3&15),i=s*4+(n+s*3&3);t[o*64+i]=1}return t}function go(e,t,n,s){const o=n.length,i=()=>({isFull:!0,mode:"full",writtenMask:null,computedMask:null,mainStrips:null,extStrips:null,nMomExt:0,normStrips:null,haloRows:null,bgStrip:null,extWeight:0});if(!s||!t.hasBgSkip)return{clsSkipped:!1,clsStrips:null,layers:Array.from({length:o},i)};const r=Zn(Gr(e,3)),a=fn(r)<15800,c=a?In(r):null,l=new Array(o);let f=null;for(let _=0;_<o;_++){const h=n[_],w=Ln(_===0?e:f,h);if(_>0)for(let b=0;b<C;b++){const P=b<h||b>=C-h,z=b*C;for(let $=0;$<C;$++)(P||$<h||$>=C-h)&&(w[z+$]=1)}f=w;const S=new Uint8Array(Xe);for(let b=0;b<C;b++){const P=b*C,z=b*64;for(let $=0;$<64;$++){const y=P+($<<2);w[y]|w[y+1]|w[y+2]|w[y+3]||(S[z+$]=1)}}l[_]=S}const g=new Array(o);g[o-1]=r;for(let _=o-2;_>=0;_--)g[_]=Zn(Ln(Gn(g[_+1]),n[_+1]));const d=a&&o>=4&&n[o-1]<=2&&n[o-2]<=4&&n[o-3]<=6,u=Math.max(1,o-3),p=new Array(o).fill(null),m=new Array(o).fill(null),v=new Array(o).fill(null);if(d){const h=(Xe-fn(g[o-1]))/Xe>=.52?256:512,w=1024,S=Gs(h),b=Gs(w),P=g[o-1],z=new Uint8Array(Xe);let $=0;for(let y=0;y<Xe;y++)S[y]&&!P[y]&&(z[y]=1,$++);if($>0&&$<=En&&fn(P)+$<=15360){p[o-1]=z,m[o-1]=new Uint8Array(Xe),v[o-1]=S;for(let y=o-2;y>=u;y--){const G=new Uint8Array(Xe),M=g[y+1],A=p[y+1];for(let I=0;I<Xe;I++)G[I]=M[I]|A[I];const T=Zn(Ln(Gn(G),n[y+1])),U=new Uint8Array(Xe),B=g[y];for(let I=0;I<Xe;I++)T[I]&&!B[I]&&(U[I]=1);const E=y===u?b:S,W=new Uint8Array(Xe);let ee=0,ae=0;for(let I=0;I<Xe;I++)(U[I]||E[I])&&!B[I]&&(W[I]=1,ee++,E[I]&&ae++);if(ae===0||ee>En||fn(B)+ee>15360){const I=y+1,q=g[I],N=m[I],ie=new Uint8Array(Xe);let O=0;for(let j=0;j<Xe;j++)(N[j]||b[j])&&!q[j]&&(ie[j]=1,O++);O<=En&&fn(q)+O<=15360&&(p[I]=ie,v[I]=b);break}m[y]=U,p[y]=W,v[y]=E}}}const k=new Array(o);for(let _=0;_<o;_++){const h=fn(l[_]),w=Xe-h,S=p[_]!==null,b=S?fn(g[_])+fn(p[_]):1/0;if(h>=512&&w<=b){const P=new Uint8Array(Xe);let z=-1;for(let M=0;M<Xe;M++)l[_][M]?z<0&&(z=M):P[M]=1;const $=P.slice();$[z]=1;const y={z:z>>>6,yWg:z&63,packed:z>>>6<<8|z&63},G=In(P);k[_]={isFull:!1,mode:"rpure",writtenMask:P,computedMask:$,mainStrips:G,extStrips:_===0?null:new Uint32Array([y.packed]),nMomExt:_===0?0:1,normStrips:G,haloRows:null,bgStrip:y,extWeight:h}}else if(S&&b<=15360){const P=g[_],z=p[_],$=m[_],y=v[_],G=In(P),M=[],A=[];for(let W=0;W<C;W++){const ee=W*64;for(let ae=0;ae<64;ae++){const I=ee+ae;if(!z[I])continue;const q=W<<8|ae;y[I]?M.push(q):A.push(q)}}const T=M.length;if(T===0){k[_]=i();continue}const U=new Uint32Array(M.length+A.length);U.set(M,0),U.set(A,M.length);const B=new Uint8Array(Xe),E=new Uint8Array(Xe);for(let W=0;W<Xe;W++)B[W]=P[W]|$[W],E[W]=P[W]|z[W];k[_]={isFull:!1,mode:"bwd",writtenMask:B,computedMask:E,mainStrips:G,extStrips:U,nMomExt:T,normStrips:_+1<o?In(B):null,haloRows:null,bgStrip:null,extWeight:(Xe-G.length)/T}}else k[_]=i()}for(let _=o-2;_>=0;_--)k[_].mode==="bwd"&&k[_+1].mode!=="bwd"&&(k[_]=i());for(let _=0;_<o-1;_++){const h=k[_];if(h.mode!=="rpure")continue;const w=k[_+1],S=w.isFull?new Uint8Array(C*C).fill(1):Ln(Gn(w.computedMask),n[_+1]),b=Gn(h.writtenMask),P=[];for(let z=0;z<C;z++){const $=z*C;for(let y=0;y<C;y++)S[$+y]&&!b[$+y]&&P.push(z<<8|y)}P.length>0&&(h.haloRows=new Uint32Array(P))}return{clsSkipped:a,clsStrips:c,layers:k}}function Ir(e,t){const n=t.chan,s=t.cs,o=s/4,i=t.nclass,r=Math.ceil(i/4),{convs:a,affines:c,classifier:l}=e,f=a.length,g=27*o,d=9*s*3*o,u=s*r,p=(g+(f-1)*d+u)*4,m=new Float32Array(p),v=4*s,k=f*v,_=new Float32Array(k+r*4),h=(b,P,z)=>{if(t.norm!=="gn"||P>=n)return 1;const $=a[b],y=z*27,G=P*y;let M=0;for(let A=0;A<y;A++)M+=Math.abs($.w[G+A]);return Math.max(M/16,1e-6)};for(let b=0;b<a[0].outC;b++){const P=h(0,b,a[0].inC),z=1/P;for(let $=0;$<27;$++)m[$*s+b]=a[0].w[b*27+$]*z;_[2*s+b]=t.eps/(P*P),a[0].bias&&(_[3*s+b]=a[0].bias[b])}for(let b=a[0].outC;b<s;b++)_[2*s+b]=t.eps;for(let b=1;b<f;b++){const P=a[b],z=(g+(b-1)*d)*4,$=b*v;for(let y=0;y<P.outC;y++){const G=h(b,y,P.inC),M=1/G,A=y>>>2,T=y&3;for(let U=0;U<9;U++)for(let B=0;B<P.inC;B++)for(let E=0;E<3;E++){const W=U*3+E,ee=z+(((U*s+B)*3+E)*o+A)*4+T;m[ee]=P.w[(y*P.inC+B)*27+W]*M}_[$+2*s+y]=t.eps/(G*G),P.bias&&(_[$+3*s+y]=P.bias[y])}for(let y=P.outC;y<s;y++)_[$+2*s+y]=t.eps}for(let b=0;b<f;b++){const P=b*v,z=c[b];for(let $=0;$<n;$++)t.norm==="gn"?(_[P+$]=z!=null&&z.scale?z.scale[$]:1,_[P+s+$]=z!=null&&z.bias?z.bias[$]:0):(_[P+$]=1,_[P+s+$]=0)}const w=g+(f-1)*d,S=w*4;for(let b=0;b<n;b++)for(let P=0;P<i;P++)m[S+b*r*4+P]=l.w[P*l.inC+b];for(let b=0;b<r*4;b++)_[k+b]=b<i?l.bias?l.bias[b]:0:-1e30;return{wF32:m,wF16:Cr(m),qmetaF32:_,w0Vec4s:g,hiddenVec4PerLayer:d,clsVec4Off:w,clsBiasOff:k,metaStride:v,clsK4:r}}function An(e){if(e==="gelu_tanh")return`fn act(x : f32) -> f32 {
  let u = clamp(0.7978845608028654 * (x + 0.044715 * x * x * x), -9.0, 9.0);
  return 0.5 * x * (1.0 + tanh(u));
}`;if(e==="relu")return"fn act(x : f32) -> f32 { return max(x, 0.0); }";if(e==="elu")return"fn act(x : f32) -> f32 { return select(exp(clamp(x, -20.0, 0.0)) - 1.0, x, x >= 0.0); }";throw new Error(`meshnet_fast_v4: unsupported activation '${e}'`)}function _o(e){return e==="gelu_tanh"?{uZeroInt:7,uZeroFloat:7/255,uZeroWord:117901063,sterbenzSub:"1.02734375h",zeroBin:7}:e==="relu"?{uZeroInt:0,uZeroFloat:0,uZeroWord:0,sterbenzSub:"1.0h",zeroBin:0}:{uZeroInt:32,uZeroFloat:32/255,uZeroWord:538976288,sterbenzSub:"1.125h",zeroBin:32}}function bo({chan:e,clsK4:t,nclass:n,V4:s,suf:o,readBiasStmt:i,biasExpr:r,probCfg:a}){const c=`    var acc0 = ${s}(0.0${o});
    var acc1 = ${s}(0.0${o});
    var acc2 = ${s}(0.0${o});
    var acc3 = ${s}(0.0${o});
    for (var c : u32 = 0u; c < ${e}u; c = c + 1u) {
      let wv = w16_4[w_cls + c * ${t}u + k4];
      let f = feat[c];
      acc0 = fma(f, ${s}(wv.x), acc0);
      acc1 = fma(f, ${s}(wv.y), acc1);
      acc2 = fma(f, ${s}(wv.z), acc2);
      acc3 = fma(f, ${s}(wv.w), acc3);
    }
    let k_base = k4 * 4u;
${i}`;if(!a)return`  var best_v = vec4<f32>(-1.0e29);
  var best_k = vec4<u32>(0u);

  for (var k4 : u32 = 0u; k4 < ${t}u; k4 = k4 + 1u) {
${c}
${Lt(4,d=>`    let l${d} = vec4<f32>(acc${d}) + vec4<f32>(${r(d)});
    let m${d} = l${d} > best_v;
    best_v = select(best_v, l${d}, m${d});
    best_k = select(best_k, vec4<u32>(k_base + ${d}u), m${d});
`)}  }

  labels8[row_idx * ${Pt}u + x4] = best_k.x | (best_k.y << 8u) | (best_k.z << 16u) | (best_k.w << 24u);`;const l=`f32(${(1/Math.max(a.temperature,1e-6)).toExponential(8)})`,f=`f32(${(1/Math.max(a.supportTemperature,1e-6)).toExponential(8)})`,g=a.temperature===a.supportTemperature;return`  var max_v = vec4<f32>(-1.0e29);
  for (var k4 : u32 = 0u; k4 < ${t}u; k4 = k4 + 1u) {
${c}
${Lt(4,d=>`    if (k_base + ${d}u < ${n}u) {
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
${c}
${Lt(4,d=>`    let k${d} = k_base + ${d}u;
    if (k${d} < ${n}u) {
      let l${d} = vec4<f32>(acc${d}) + vec4<f32>(${r(d)});
      let v${d} = exp(clamp((l${d} - max_v) * ${l}, vec4<f32>(-80.0), vec4<f32>(0.0)));
      let s${d} = ${g?`v${d}`:`exp(clamp((l${d} - max_v) * ${f}, vec4<f32>(-80.0), vec4<f32>(0.0)))`};
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
  let vox_base = row_idx * ${C}u + x4 * 4u;
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
  }`}function ho({device:e,hasF16:t,nvox:n,outBufBytes:s,inpBuf:o,act8_0:i,labels8Buf:r,readbackBuf:a,pInit:c,bgInit:l,pCls:f,bgCls:g,clsUbo:d,packed:u,modelEntry:p,probCfg:m,canGpuProb:v,probSlots:k,ownedBuffers:_,mkBuf:h}){let w=!1,S=!1,b=!1,P=!1;const z=new Uint8Array(C*C);let $=null,y=null,G=null,M=null;const A=(q,N)=>e.createBindGroup({layout:q,entries:N.map((ie,O)=>({binding:O,resource:ie&&ie.buffer?ie:{buffer:ie}}))});function T(){if(!$){const q=t?"prep_in_u8_f16":"prep_in_u8_f32";$=we(null,null,function*(){const{bgl:N,pipe:ie}=yield an(e,q,()=>is(!0,t),"main",["read-only-storage","storage","uniform"]);if(P)return null;const O=h(256*4,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST),j=new Float32Array(256),$e=A(N,[{buffer:r,offset:0,size:n},o,O]);return{pipe:ie,ubo:O,lutF32:j,bg:$e}}).catch(N=>{throw $=null,N})}return $}function U(){if(!y){const q=t?"prep_in_f32_f16":"prep_in_f32_f32";y=we(null,null,function*(){const{bgl:N,pipe:ie}=yield an(e,q,()=>is(!1,t),"main",["read-only-storage","storage","uniform"]);if(P)return null;const O=h(16,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST),j=new Float32Array(4),$e=s>=n*4?A(N,[{buffer:r,offset:0,size:n*4},o,O]):null,Ae=i.size>=n*4?A(N,[{buffer:i,offset:0,size:n*4},o,O]):null;return{pipe:ie,ubo:O,f32Tmp:j,bgLabels:$e,bgAct0:Ae}}).catch(N=>{throw y=null,N})}return y}function B(){return G||(G=we(null,null,function*(){const{bgl:q,pipe:N}=yield an(e,"transpose_u8_v4",co,"main",["read-only-storage","storage"]);if(P)return null;const ie=A(q,[{buffer:r,offset:0,size:n},{buffer:o,offset:0,size:n}]);return{pipe:N,bg:ie}}).catch(q=>{throw G=null,q})),G}function E(){return M||(M=we(null,null,function*(){const[q,N,ie,O]=yield Promise.all([an(e,"prob_unpack_two",Rr,"main",["read-only-storage","storage","storage"]),an(e,"prob_blur_axis",Us,"blur_axis",["read-only-storage","storage","read-only-storage","uniform"]),an(e,"prob_blur_z_gate",Us,"blur_z_gate",["read-only-storage","storage","read-only-storage","uniform"]),an(e,"transpose_f32",Wr,"main",["read-only-storage","storage"])]);if(P)return null;const j=GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST,$e=144,Ae=h($e,j),Re=h($e,j),ke=h($e,j),te=D=>({buffer:D,offset:0,size:s}),se=A(q.bgl,[te(k.pass0HoldBuf),te(k.y0),te(k.y1)]),R=A(q.bgl,[te(r),te(k.b),te(k.sup)]),K=[k.y0,k.y1,k.b].map(D=>({buf:D,bgBlurX:A(N.bgl,[te(D),te(r),te(k.sup),Ae]),bgBlurY:A(N.bgl,[te(r),te(D),te(k.sup),Re]),bgBlurZ:A(ie.bgl,[te(D),te(r),te(k.sup),ke]),bgTranspose:A(O.bgl,[te(r),te(D)])}));return{pUnpack:q.pipe,pBlurAxis:N.pipe,pBlurZGate:ie.pipe,pTransposeF32:O.pipe,bgUnpack0:se,bgUnpack1:R,tissues:K,uboX:Ae,uboY:Re,uboZ:ke,uboScratch:new ArrayBuffer($e),lastBlurKey:null}}).catch(q=>{throw M=null,q})),M}function W(){m?v&&E().catch(()=>{}):(T().catch(()=>{}),B().catch(()=>{}))}function ee(){P=!0}function ae(Ae){return we(this,arguments,function*({volume:q,ioOpts:N,useCone:ie,padInputHost:O,headRowHost:j,hasF16Flag:$e}){var ke;if(N!=null&&N.gpuNativeInput){const te=(ke=N.normOffset)!=null?ke:0,se=N.normRange||1,R=q instanceof Uint8Array||q instanceof Uint8ClampedArray,K=s>=n*4||i.size>=n*4;if(R){const Fe=Ws(q,j,z,te,ie),pe=yield T();for(let be=0;be<256;be++)pe.lutF32[be]=be===te?0:(be-te)/se;return e.queue.writeBuffer(pe.ubo,0,pe.lutF32),e.queue.writeBuffer(r,0,q,0,n),{info:Fe,runPrePasses(be,Z){(!S||b)&&(be.clearBuffer(o),S=!0,b=!1);const We=be.beginComputePass();if(We.setPipeline(pe.pipe),We.setBindGroup(0,pe.bg),We.dispatchWorkgroups(8,C,8),We.end(),Z.push("preprocess"),w){const X=be.beginComputePass();X.setPipeline(c.pipe),X.setBindGroup(0,l),X.dispatchWorkgroups(1,C,C),X.end(),Z.push("preprocess"),w=!1}}}}if(K){const Fe=Ws(q,j,z,te,ie),pe=yield U(),be=!(s>=n*4),Z=be?i:r,We=be?pe.bgAct0:pe.bgLabels,X=q instanceof Float32Array?q:Float32Array.from(q);return pe.f32Tmp[0]=te,pe.f32Tmp[1]=se,pe.f32Tmp[2]=0,pe.f32Tmp[3]=0,e.queue.writeBuffer(pe.ubo,0,pe.f32Tmp),e.queue.writeBuffer(Z,0,X,0,n),{info:Fe,runPrePasses(Ee,st){(!S||b)&&(Ee.clearBuffer(o),S=!0,b=!1);const Ne=Ee.beginComputePass();if(Ne.setPipeline(pe.pipe),Ne.setBindGroup(0,We),Ne.dispatchWorkgroups(8,C,8),Ne.end(),st.push("preprocess"),w||be){const rt=Ee.beginComputePass();rt.setPipeline(c.pipe),rt.setBindGroup(0,l),rt.dispatchWorkgroups(1,C,C),rt.end(),st.push("preprocess"),w=!1}}}}const D=new Float32Array(n);for(let Fe=0;Fe<n;Fe++){const pe=q[Fe];D[Fe]=pe===te?0:(pe-te)/se}const le=kn(D,[C,C,C],[2,1,0]),Ge=Rs(le,O,j,$e,ie);return e.queue.writeBuffer(o,0,O),S=!0,b=!1,{info:Ge,runPrePasses(Fe,pe){if(w){const be=Fe.beginComputePass();be.setPipeline(c.pipe),be.setBindGroup(0,l),be.dispatchWorkgroups(1,C,C),be.end(),pe.push("preprocess"),w=!1}}}}const Re=Rs(q,O,j,$e,ie);return e.queue.writeBuffer(o,0,O),S=!0,b=!1,{info:Re,runPrePasses(te,se){if(w){const R=te.beginComputePass();R.setPipeline(c.pipe),R.setBindGroup(0,l),R.dispatchWorkgroups(1,C,C),R.end(),se.push("preprocess"),w=!1}}}})}function I(Re){return we(this,arguments,function*({enc:q,schedule:N,passCategories:ie,u4Tmp:O,ioOpts:j,paced:$e=!1,onProgress:Ae=null}){const ke=N.clsSkipped?N.clsStrips.length:C;if(!m){O[0]=u.clsVec4Off,O[1]=u.clsBiasOff,O[2]=N.clsSkipped?0:1,O[3]=0,e.queue.writeBuffer(d,0,O);{const X=q.beginComputePass();X.setPipeline(f.pipe),X.setBindGroup(0,g),ke>0&&X.dispatchWorkgroups(1,N.clsSkipped?1:64,ke),X.end(),ie.push("classify")}if(j!=null&&j.gpuNativeOutput){const X=yield B(),Ee=q.beginComputePass();Ee.setPipeline(X.pipe),Ee.setBindGroup(0,X.bg),Ee.dispatchWorkgroups(8,C,8),Ee.end(),ie.push("postprocess"),b=!0,q.copyBufferToBuffer(o,0,a,0,n),e.queue.submit([q.finish()]),yield a.mapAsync(GPUMapMode.READ);const st=new Uint8Array(a.getMappedRange()).slice();return a.unmap(),$e&&Ae&&Ae(1,""),[st]}q.copyBufferToBuffer(r,0,a,0,s),e.queue.submit([q.finish()]),yield a.mapAsync(GPUMapMode.READ);const Z=new Uint8Array(a.getMappedRange()),We=new Float32Array(n);for(let X=0;X<n;X++)We[X]=Z[X];return a.unmap(),$e&&Ae&&Ae(1,""),[We]}if(v){const Z=yield E();O[0]=u.clsVec4Off,O[1]=u.clsBiasOff,O[2]=N.clsSkipped?0:1,O[3]=0,e.queue.writeBuffer(d,0,O),O[3]=1,e.queue.writeBuffer(k.clsUbo1,0,O);{const Le=q.beginComputePass();Le.setPipeline(f.pipe),Le.setBindGroup(0,g),ke>0&&Le.dispatchWorkgroups(1,N.clsSkipped?1:64,ke),Le.end(),ie.push("classify")}q.copyBufferToBuffer(r,0,k.pass0HoldBuf,0,s),N.clsSkipped&&q.clearBuffer(r,0,s);{const Le=q.beginComputePass();Le.setPipeline(f.pipe),Le.setBindGroup(0,k.bgCls1),ke>0&&Le.dispatchWorkgroups(1,N.clsSkipped?1:64,ke),Le.end(),ie.push("classify")}w=!0;const We=`${m.sigma}|${m.supportPower}`,X=m.sigma>0,Ee=X?Math.max(1,Math.round(3*m.sigma)):0;if(Z.lastBlurKey!==We){const Le=new Uint32Array(Z.uboScratch),Je=new Float32Array(Z.uboScratch);Je.fill(0);let ot=1;if(X){ot=0;for(let pt=-Ee;pt<=Ee;pt++){const mt=Math.exp(-.5*pt*pt/(m.sigma*m.sigma));Je[4+pt+Ee]=mt,ot+=mt}}else Je[4]=1;Le[1]=Ee,Je[2]=ot,Le[0]=0,Je[3]=1,e.queue.writeBuffer(Z.uboX,0,Z.uboScratch),Le[0]=1,e.queue.writeBuffer(Z.uboY,0,Z.uboScratch),Le[0]=2,Je[3]=m.supportPower,e.queue.writeBuffer(Z.uboZ,0,Z.uboScratch),Z.lastBlurKey=We}{const Le=q.beginComputePass();Le.setPipeline(Z.pUnpack),Le.setBindGroup(0,Z.bgUnpack0),Le.dispatchWorkgroups(256,256,1),Le.end(),ie.push("postprocess");const Je=q.beginComputePass();Je.setPipeline(Z.pUnpack),Je.setBindGroup(0,Z.bgUnpack1),Je.dispatchWorkgroups(256,256,1),Je.end(),ie.push("postprocess")}$e&&(e.queue.submit([q.finish()]),yield e.queue.onSubmittedWorkDone(),Ae&&Ae(.992,""),yield yn(),q=e.createCommandEncoder());const st=!!(j!=null&&j.gpuNativeOutput);for(let Le=0;Le<3;Le++){const Je=Z.tissues[Le];if(X){const pt=q.beginComputePass();pt.setPipeline(Z.pBlurAxis),pt.setBindGroup(0,Je.bgBlurX),pt.dispatchWorkgroups(4,64,C),pt.end(),ie.push("postprocess");const mt=q.beginComputePass();mt.setPipeline(Z.pBlurAxis),mt.setBindGroup(0,Je.bgBlurY),mt.dispatchWorkgroups(4,64,C),mt.end(),ie.push("postprocess")}const ot=q.beginComputePass();if(ot.setPipeline(Z.pBlurZGate),ot.setBindGroup(0,Je.bgBlurZ),ot.dispatchWorkgroups(4,64,C),ot.end(),ie.push("postprocess"),st){const pt=q.beginComputePass();pt.setPipeline(Z.pTransposeF32),pt.setBindGroup(0,Je.bgTranspose),pt.dispatchWorkgroups(8,C,8),pt.end(),ie.push("postprocess")}else Le<2&&q.copyBufferToBuffer(r,0,Je.buf,0,s)}const Ne=st?[k.y0,k.y1,k.b]:[k.y0,k.y1,r];q.copyBufferToBuffer(Ne[0],0,a,0,s),e.queue.submit([q.finish()]),yield a.mapAsync(GPUMapMode.READ);const rt=new Float32Array(a.getMappedRange()).slice();a.unmap();const at=Le=>we(null,null,function*(){const Je=e.createCommandEncoder();Je.copyBufferToBuffer(Le,0,a,0,s),e.queue.submit([Je.finish()]),yield a.mapAsync(GPUMapMode.READ);const ot=new Float32Array(a.getMappedRange()).slice();return a.unmap(),ot}),it=yield at(Ne[1]),bt=yield at(Ne[2]);return $e&&Ae&&Ae(1,""),[rt,it,bt]}O[0]=u.clsVec4Off,O[1]=u.clsBiasOff,O[2]=N.clsSkipped?0:1,O[3]=0,e.queue.writeBuffer(d,0,O);{const Z=q.beginComputePass();Z.setPipeline(f.pipe),Z.setBindGroup(0,g),ke>0&&Z.dispatchWorkgroups(1,N.clsSkipped?1:64,ke),Z.end(),ie.push("classify"),q.copyBufferToBuffer(r,0,a,0,s)}e.queue.submit([q.finish()]),yield a.mapAsync(GPUMapMode.READ);const te=1/65535,se=new Uint16Array(a.getMappedRange()),R=new Float32Array(n),K=new Float32Array(n);for(let Z=0;Z<n;Z++)R[Z]=se[Z*2]*te,K[Z]=se[Z*2+1]*te;a.unmap(),O[3]=1,e.queue.writeBuffer(d,0,O);const D=e.createCommandEncoder();N.clsSkipped&&D.clearBuffer(r,0,s);const le=D.beginComputePass();le.setPipeline(f.pipe),le.setBindGroup(0,g),ke>0&&le.dispatchWorkgroups(1,N.clsSkipped?1:64,ke),le.end(),ie.push("classify"),D.copyBufferToBuffer(r,0,a,0,s),e.queue.submit([D.finish()]),yield a.mapAsync(GPUMapMode.READ);const Ge=new Uint16Array(a.getMappedRange()),Fe=new Float32Array(n),pe=new Float32Array(n);for(let Z=0;Z<n;Z++)Fe[Z]=Ge[Z*2]*te,pe[Z]=Ge[Z*2+1]*te;a.unmap();const be=Ar([R,K,Fe],pe,[C,C,C],p);return j!=null&&j.gpuNativeOutput?be.map(Z=>kn(Z,[C,C,C],[2,1,0])):be})}return{prepareInput:ae,finishAndReadback:I,warmupIoPipelines:W,dispose:ee}}function wo(e){const{cs:t,chan:n,nclass:s,clsK4:o,dilations:i,activation:r,norm:a,hasF16:c,hasSubgroups32:l,splitHalves:f,probCfg:g,chunkableStd:d=!1}=e,u=t/4,p=f?t/2:t,m=p*_t,v=p*Pt,k=9*t*3*u,_=k,h=k+u,w=c&&u%2===0&&h*8<=65536,S=_o(r),b=c?`enable f16;
`:"",P=l?`enable subgroups;
`:"",z=c?"f16":"f32",$=c?"h":"f",y=`vec4<${z}>`,G=c?256:255,M=({cStart:I,cEnd:q,hrExpr:N,yRowExpr:ie,isPermuted:O,momBinding:j,alsoWriteMomMain:$e=!1,writeY8Expr:Ae="true"})=>{const Re=O?".xzyw":"",ke=(se,R)=>f&&se>=p?`y8_1[${ie} + ${(se-p)*Pt}u] = ${R};`:`y8_0[${ie} + ${se*Pt}u] = ${R};`;if(c&&l)return Lt(q-I,se=>{const R=I+se;return`  {
    let f = vec4<f32>(a_${R}${Re});
    let ls = subgroupAdd(f.x + f.y + f.z + f.w);
    let lq = subgroupAdd(dot(f, f));
    let lmn = subgroupMin(min(min(f.x, f.y), min(f.z, f.w)));
    let lmx = subgroupMax(max(max(f.x, f.y), max(f.z, f.w)));
    let sp = lmx - lmn;
    let inv = select(0.0, 1.0 / sp, sp > 1e-7);
    if (${Ae}) {
      ${ke(R,"pack4x8unorm((f - vec4<f32>(lmn)) * inv)")}
    }
    if (slane == 0u) {
      let mv = vec4<f32>(ls, lq, lmn, sp);
      ${j}[(${N}) * ${t}u + ${R}u] = mv;
      ${$e?`mom_main[(row_idx * 2u + sg) * ${t}u + ${R}u] = mv;`:""}
    }
  }
`});let te="";for(let se=I;se<q;se+=2){const R=se,K=se+1;te+=`  {
    let f0 = vec4<f32>(a_${R}${Re});
    let f1 = vec4<f32>(a_${K}${Re});
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
        ${j}[(${N}) * ${t}u + ${R}u] = mv0;
        ${$e?`mom_main[(row_idx * 2u + sg) * ${t}u + ${R}u] = mv0;`:""}
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
        ${j}[(${N}) * ${t}u + ${K}u] = mv1;
        ${$e?`mom_main[(row_idx * 2u + sg) * ${t}u + ${K}u] = mv1;`:""}
      }
    }
    workgroupBarrier();
    let p_mn0  = sh_res_mn[hslot];
    let p_inv0 = sh_res_inv[hslot];
    let p_mn1  = sh_res_mn[hslot + 1u];
    let p_inv1 = sh_res_inv[hslot + 1u];
    if (${Ae}) {
      ${ke(R,"pack4x8unorm((f0 - vec4<f32>(p_mn0)) * p_inv0)")}
      ${ke(K,"pack4x8unorm((f1 - vec4<f32>(p_mn1)) * p_inv1)")}
    }
    workgroupBarrier();
  }
`}return te},A=c&&l?"":`var<workgroup> sh_s       : array<vec2<f32>, 256>;
var<workgroup> sh_q       : array<vec2<f32>, 256>;
var<workgroup> sh_mn      : array<vec2<f32>, 256>;
var<workgroup> sh_mx      : array<vec2<f32>, 256>;
var<workgroup> sh_res_mn  : array<f32, 16>;
var<workgroup> sh_res_inv : array<f32, 16>;
`,T=()=>`
@group(0) @binding(0) var<storage, read_write> act0 : array<u32>;
@group(0) @binding(1) var<storage, read_write> act1 : array<u32>;
@compute @workgroup_size(${_t}, 1, 1)
fn main(@builtin(local_invocation_id) lid : vec3<u32>,
        @builtin(workgroup_id) wid : vec3<u32>) {
  let row_base = (wid.z * 256u + wid.y) * ${m}u + lid.x;
  let val = ${S.uZeroWord}u;
  for (var c : u32 = 0u; c < ${p}u; c = c + 1u) {
    let idx = row_base + c * ${_t}u;
    act0[idx] = val;
    ${f?"act1[idx] = val;":""}
  }
}`,U=i[0];return{initActWgsl:T,conv0Wgsl:()=>{const I=!c&&f,q=(Ae,Re)=>{const ke=Ae/4,te=Re/4;return Lt(te-ke,se=>{const R=ke+se,K=R*4;return`          {
            let w0 = w16_4[wb + ${R}u];
            let w1 = w16_4[wb + ${u+R}u];
            let w2 = w16_4[wb + ${2*u+R}u];
            a_${K}     = fma(vn, ${y}(w0.x), fma(vc, ${y}(w1.x), fma(vp, ${y}(w2.x), a_${K})));
            a_${K+1} = fma(vn, ${y}(w0.y), fma(vc, ${y}(w1.y), fma(vp, ${y}(w2.y), a_${K+1})));
            a_${K+2} = fma(vn, ${y}(w0.z), fma(vc, ${y}(w1.z), fma(vp, ${y}(w2.z), a_${K+2})));
            a_${K+3} = fma(vn, ${y}(w0.w), fma(vc, ${y}(w1.w), fma(vp, ${y}(w2.w), a_${K+3})));
          }
`})},N=Math.floor(U/4),ie=U%4;let O="";ie===0?O=`
        let vn = inp_4[base - ${N}u];
        let vc = inp_4[base];
        let vp = inp_4[base + ${N}u];`:N===0&&ie===1?O=`
        let vL = inp_4[base - 1u];
        let vc = inp_4[base];
        let vR = inp_4[base + 1u];
        let vn = ${y}(vL.w, vc.xyz);
        let vp = ${y}(vc.yzw, vR.x);`:ie===1?O=`
        let vL = inp_4[base - ${N+1}u];
        let vN = inp_4[base - ${N}u];
        let vc = inp_4[base];
        let vP = inp_4[base + ${N}u];
        let vR = inp_4[base + ${N+1}u];
        let vn = ${y}(vL.w, vN.xyz);
        let vp = ${y}(vP.yzw, vR.x);`:ie===2?O=`
        let vL = inp_4[base - ${N+1}u];
        let vN = ${N===0?"inp_4[base]":`inp_4[base - ${N}u]`};
        let vc = ${N===0?"vN":"inp_4[base]"};
        let vP = ${N===0?"vN":`inp_4[base + ${N}u]`};
        let vR = inp_4[base + ${N+1}u];
        let vn = ${y}(vL.zw, vN.xy);
        let vp = ${y}(vP.zw, vR.xy);`:O=`
        let vL = inp_4[base - ${N+1}u];
        let vN = ${N===0?"inp_4[base]":`inp_4[base - ${N}u]`};
        let vc = ${N===0?"vN":"inp_4[base]"};
        let vP = ${N===0?"vN":`inp_4[base + ${N}u]`};
        let vR = inp_4[base + ${N+1}u];
        let vn = ${y}(vL.yzw, vN.x);
        let vp = ${y}(vP.w, vR.xyz);`;const j=(Ae,Re,ke,te)=>{const se=Lt(ke-Re,le=>{const Ge=Re+le;return a==="none"?`  var a_${Ge} = ${y}(${z}(qmeta[${3*t+Ge}u]));
`:`  var a_${Ge} = ${y}(0.0${$});
`}),R=te?`  let y = i32(p0.bg_y0 + lid.y);
  let z = i32(p0.bg_z0);`:`  var y : i32;
  var z : i32;
  if (p0.is_full != 0u) {
    y = i32(wid.y * 4u + lid.y);
    z = i32(wid.z);
  } else {
    let pk = strips0[wid.z];
    y = i32((pk & 255u) * 4u + lid.y);
    z = i32(pk >> 8u);
  }`,K=te?"lid.y * 2u + sg":"row_idx * 2u + sg",D=te?"mom_ext":"mom_main";return`
@compute @workgroup_size(64, 4, 1)
fn ${Ae}(@builtin(local_invocation_id) lid : vec3<u32>,
             @builtin(workgroup_id) wid : vec3<u32>) {
  let sg = lid.x >> 5u;
  let slane = lid.x & 31u;
${c&&l?"":`  let hbase = (lid.y * 2u + sg) * 32u;
  let tid = hbase + slane;
  let hslot = (lid.y * 2u + sg) * 2u;
`}
  let x_pad = lid.x + ${Yt}u;
${R}
${se}
  var tap_yz : u32 = 0u;
  for (var dz : i32 = -1; dz <= 1; dz = dz + 1) {
    let sz = z + dz * ${U};
    for (var dy : i32 = -1; dy <= 1; dy = dy + 1) {
      let sy = y + dy * ${U};
      if (sz >= 0 && sz < 256 && sy >= 0 && sy < 256) {
        let base = (u32(sz) * 256u + u32(sy)) * ${_t}u + x_pad;
${O}
        let wb = tap_yz * ${3*u}u;
${q(Re,ke)}
      }
      tap_yz = tap_yz + 1u;
    }
  }
  let row_idx = u32(z) * 256u + u32(y);
  let y_row_base = row_idx * ${v}u + lid.x;
${M({cStart:Re,cEnd:ke,hrExpr:K,yRowExpr:"y_row_base",isPermuted:!1,momBinding:D})}}`},$e=I?j("main_lo",0,p,!1)+j("main_hi",p,t,!1)+j("main_bg_lo",0,p,!0)+j("main_bg_hi",p,t,!0):j("main",0,t,!1)+j("main_bg",0,t,!0);return`${b}${P}
struct Params0 {
  is_full : u32,
  bg_y0 : u32,
  bg_z0 : u32,
  pad0 : u32,
};
@group(0) @binding(0) var<storage, read> inp_4 : array<${y}>;
@group(0) @binding(1) var<storage, read_write> y8_0 : array<u32>;
@group(0) @binding(2) var<storage, read_write> y8_1 : array<u32>;
@group(0) @binding(3) var<storage, read> w16_4 : array<${y}>;
@group(0) @binding(4) var<storage, read> qmeta : array<f32>;
@group(0) @binding(5) var<storage, read_write> mom_main : array<vec4<f32>>;
@group(0) @binding(6) var<storage, read_write> mom_ext : array<vec4<f32>>;
@group(0) @binding(7) var<storage, read> strips0 : array<u32>;
@group(0) @binding(8) var<uniform> p0 : Params0;
${A}${$e}`},prepWgsl:()=>`${b}
${An(r)}
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
@group(0) @binding(0) var<storage, read> w16_4 : array<${y}>;
@group(0) @binding(1) var<storage, read> qmeta : array<f32>;
@group(0) @binding(2) var<storage, read_write> mom_main : array<vec4<f32>>;
@group(0) @binding(3) var<storage, read_write> mom_ext : array<vec4<f32>>;
@group(0) @binding(4) var<storage, read_write> mom_stats : array<vec4<f32>>;
@group(0) @binding(5) var<storage, read_write> w_eff : array<${y}>;
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
    for (var hr : u32 = lid; hr < ${Un}u; hr = hr + 256u) {
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
    w_eff[idx] = w16_4[pp.next_w_vec4_off + idx] * ${z}(qs * scale_num);
  }
  if (lid < ${u}u) {
    ${a==="none"?`
    let mb = pp.next_meta_off + ${3*t}u + lid * 4u;
    w_eff[${_}u + lid] = ${y}(${z}(qmeta[mb]), ${z}(qmeta[mb + 1u]), ${z}(qmeta[mb + 2u]), ${z}(qmeta[mb + 3u]));
    `:`
    w_eff[${_}u + lid] = ${y}(0.0${$});
    `}
  }
}`,normWgsl:()=>`${An(r)}
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
  let x_pad = x4 + ${Yt}u;
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
  let y_base = row_idx * ${v}u + x4;
  let a_base = row_idx * ${m}u + x_pad;
  let mom_base = hr * ${t}u;

  for (var c : u32 = 0u; c < ${p}u; c = c + 1u) {
    let inv_qs = mom_stats[c * 2u].w;
    let st = mom_stats[c * 2u + 1u];
    let rm = mom_main[mom_base + c];
    let yv = unpack4x8unorm(y8_0[y_base + c * ${Pt}u]) * rm.w + vec4<f32>(rm.z);
    let a = vec4<f32>(
      act(yv.x * st.x + st.y),
      act(yv.y * st.x + st.y),
      act(yv.z * st.x + st.y),
      act(yv.w * st.x + st.y)
    );
    act8_0[a_base + c * ${_t}u] = pack4x8unorm((a * inv_qs + vec4<f32>(${S.zeroBin.toFixed(1)})) * (1.0 / 255.0));
  }
  ${f?`
  for (var c : u32 = 0u; c < ${p}u; c = c + 1u) {
    let cg = ${p}u + c;
    let inv_qs = mom_stats[cg * 2u].w;
    let st = mom_stats[cg * 2u + 1u];
    let rm = mom_main[mom_base + cg];
    let yv = unpack4x8unorm(y8_1[y_base + c * ${Pt}u]) * rm.w + vec4<f32>(rm.z);
    let a = vec4<f32>(
      act(yv.x * st.x + st.y),
      act(yv.y * st.x + st.y),
      act(yv.z * st.x + st.y),
      act(yv.w * st.x + st.y)
    );
    act8_1[a_base + c * ${_t}u] = pack4x8unorm((a * inv_qs + vec4<f32>(${S.zeroBin.toFixed(1)})) * (1.0 / 255.0));
  }`:""}
}

@compute @workgroup_size(64, 4, 1)
fn norm_halo_fill(@builtin(local_invocation_id) lid : vec3<u32>,
                  @builtin(workgroup_id) wid : vec3<u32>) {
  let idx = wid.y * 4u + lid.y;
  if (idx >= np.n_halo) { return; }
  let x4 = lid.x;
  let sg = x4 >> 5u;
  let x_pad = x4 + ${Yt}u;
  let y_base = np.bg_row * ${v}u + x4;
  let mom_base = sg * ${t}u;
  let dst_row = norm_aux[np.halo_off + idx];
  let a_base = dst_row * ${m}u + x_pad;

  for (var c : u32 = 0u; c < ${p}u; c = c + 1u) {
    let inv_qs = mom_stats[c * 2u].w;
    let st = mom_stats[c * 2u + 1u];
    let rm = mom_ext[mom_base + c];
    let yv = unpack4x8unorm(y8_0[y_base + c * ${Pt}u]) * rm.w + vec4<f32>(rm.z);
    let a = vec4<f32>(
      act(yv.x * st.x + st.y),
      act(yv.y * st.x + st.y),
      act(yv.z * st.x + st.y),
      act(yv.w * st.x + st.y)
    );
    act8_0[a_base + c * ${_t}u] = pack4x8unorm((a * inv_qs + vec4<f32>(${S.zeroBin.toFixed(1)})) * (1.0 / 255.0));
  }
  ${f?`
  for (var c : u32 = 0u; c < ${p}u; c = c + 1u) {
    let cg = ${p}u + c;
    let inv_qs = mom_stats[cg * 2u].w;
    let st = mom_stats[cg * 2u + 1u];
    let rm = mom_ext[mom_base + cg];
    let yv = unpack4x8unorm(y8_1[y_base + c * ${Pt}u]) * rm.w + vec4<f32>(rm.z);
    let a = vec4<f32>(
      act(yv.x * st.x + st.y),
      act(yv.y * st.x + st.y),
      act(yv.z * st.x + st.y),
      act(yv.w * st.x + st.y)
    );
    act8_1[a_base + c * ${_t}u] = pack4x8unorm((a * inv_qs + vec4<f32>(${S.zeroBin.toFixed(1)})) * (1.0 / 255.0));
  }`:""}
}`,getConvWgsl:I=>{const q=Math.floor(I/4),ie=I%4*8,O=!c&&f,j=(R,K)=>c?`
          let ${R} = vec4<f16>(vec2<f16>(unpack2x16float(((${K} & 0x00FF00FFu) << 2u) | 0x3C003C00u)), vec2<f16>(unpack2x16float(((${K} >> 6u) & 0x03FC03FCu) | 0x3C003C00u))) - vec4<f16>(${S.sterbenzSub});`:`
          let ${R} = unpack4x8unorm(${K}) - vec4<f32>(${S.uZeroFloat});`,$e=R=>{if(ie===0)return`
          let u_neg = ${R}[base - ${q}u];
          let uC    = ${R}[base];
          let u_pos = ${R}[base + ${q}u];`+j("vn","u_neg")+j("vc","uC")+j("vp","u_pos");const K=32-ie;return q===0?`
          let uL = ${R}[base - 1u];
          let uC = ${R}[base];
          let uR = ${R}[base + 1u];
          let u_neg = (uL >> ${K}u) | (uC << ${ie}u);
          let u_pos = (uC >> ${ie}u) | (uR << ${K}u);`+j("vn","u_neg")+j("vc","uC")+j("vp","u_pos"):`
          let uL = ${R}[base - ${q+1}u];
          let uN = ${R}[base - ${q}u];
          let uC = ${R}[base];
          let uP = ${R}[base + ${q}u];
          let uR = ${R}[base + ${q+1}u];
          let u_neg = (uL >> ${K}u) | (uN << ${ie}u);
          let u_pos = (uP >> ${ie}u) | (uR << ${K}u);`+j("vn","u_neg")+j("vc","uC")+j("vp","u_pos")},Ae=(R,K)=>{const D=R/4,le=K/4;if(w){const Ge=u/2,Fe=u;let pe="";for(let be=D;be<le;be+=2){const Z=be*4,We=be/2;pe+=`          {
            let wp0 = w_eff_u[wbu + ${We}u];
            let wp1 = w_eff_u[wbu + ${Ge+We}u];
            let wp2 = w_eff_u[wbu + ${Fe+We}u];
            let w0a = wp0[0];
            let w0b = wp0[1];
            let w1a = wp1[0];
            let w1b = wp1[1];
            let w2a = wp2[0];
            let w2b = wp2[1];
            a_${Z}     = fma(vn, vec4<f16>(w0a.x), fma(vc, vec4<f16>(w1a.x), fma(vp, vec4<f16>(w2a.x), a_${Z})));
            a_${Z+1} = fma(vn, vec4<f16>(w0a.y), fma(vc, vec4<f16>(w1a.y), fma(vp, vec4<f16>(w2a.y), a_${Z+1})));
            a_${Z+2} = fma(vn, vec4<f16>(w0a.z), fma(vc, vec4<f16>(w1a.z), fma(vp, vec4<f16>(w2a.z), a_${Z+2})));
            a_${Z+3} = fma(vn, vec4<f16>(w0a.w), fma(vc, vec4<f16>(w1a.w), fma(vp, vec4<f16>(w2a.w), a_${Z+3})));
            a_${Z+4} = fma(vn, vec4<f16>(w0b.x), fma(vc, vec4<f16>(w1b.x), fma(vp, vec4<f16>(w2b.x), a_${Z+4})));
            a_${Z+5} = fma(vn, vec4<f16>(w0b.y), fma(vc, vec4<f16>(w1b.y), fma(vp, vec4<f16>(w2b.y), a_${Z+5})));
            a_${Z+6} = fma(vn, vec4<f16>(w0b.z), fma(vc, vec4<f16>(w1b.z), fma(vp, vec4<f16>(w2b.z), a_${Z+6})));
            a_${Z+7} = fma(vn, vec4<f16>(w0b.w), fma(vc, vec4<f16>(w1b.w), fma(vp, vec4<f16>(w2b.w), a_${Z+7})));
          }
`}return pe}return Lt(le-D,Ge=>{const Fe=D+Ge,pe=Fe*4;return`          {
            let w0 = w_eff[wb + ${Fe}u];
            let w1 = w_eff[wb + ${u+Fe}u];
            let w2 = w_eff[wb + ${2*u+Fe}u];
            a_${pe}     = fma(vn, ${y}(w0.x), fma(vc, ${y}(w1.x), fma(vp, ${y}(w2.x), a_${pe})));
            a_${pe+1} = fma(vn, ${y}(w0.y), fma(vc, ${y}(w1.y), fma(vp, ${y}(w2.y), a_${pe+1})));
            a_${pe+2} = fma(vn, ${y}(w0.z), fma(vc, ${y}(w1.z), fma(vp, ${y}(w2.z), a_${pe+2})));
            a_${pe+3} = fma(vn, ${y}(w0.w), fma(vc, ${y}(w1.w), fma(vp, ${y}(w2.w), a_${pe+3})));
          }
`})},Re=(R,K,D,le)=>{const Ge=Lt(D-K,st=>{const Ne=K+st;if(a==="none"){const rt=Ne>>>2,at=["x","y","z","w"][Ne&3];if(w){const it=_+rt>>>1,bt=_+rt&1;return`  var a_${Ne} = ${y}(w_eff_u[${it}u][${bt}].${at});
`}return`  var a_${Ne} = ${y}(w_eff[${_+rt}u].${at});
`}return`  var a_${Ne} = ${y}(0.0${$});
`}),Fe=le?d?`
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
  }`,pe=le?d?"ext_i * 8u + lid.y * 2u + sg":"wid.z * 8u + lid.y * 2u + sg":"row_idx * 2u + sg",be=le?"mom_ext":"mom_main",Z=le?"(cp.write_ext_y8 != 0u)":"true",We=p<=8?`(${p}u + cp.pad0)`:`${p}u`,X=w?`        let wbu_tap = tap_yz * ${t*3*u/2}u;
        for (var ic : u32 = 0u; ic < ${We}; ic = ic + 1u) {
          let base = row_off + ic * ${_t}u;
${$e("act8_0")}
          let wbu = wbu_tap + ic * ${3*u/2}u;
${Ae(K,D)}
        }`:`        let wb_tap = tap_yz * ${t*3*u}u;
        for (var ic : u32 = 0u; ic < ${We}; ic = ic + 1u) {
          let base = row_off + ic * ${_t}u;
${$e("act8_0")}
          let wb = wb_tap + ic * ${3*u}u;
${Ae(K,D)}
        }`,Ee=w?`        for (var ic : u32 = 0u; ic < ${We}; ic = ic + 1u) {
          let base = row_off + ic * ${_t}u;
${$e("act8_1")}
          let wbu = wbu_tap + (${p}u + ic) * ${3*u/2}u;
${Ae(K,D)}
        }`:`        for (var ic : u32 = 0u; ic < ${We}; ic = ic + 1u) {
          let base = row_off + ic * ${_t}u;
${$e("act8_1")}
          let wb = wb_tap + (${p}u + ic) * ${3*u}u;
${Ae(K,D)}
        }`;return`
@compute @workgroup_size(64, 4, 1)
fn ${R}(@builtin(local_invocation_id) lid : vec3<u32>,
             @builtin(workgroup_id) wid : vec3<u32>) {
  let x4 = lid.x;
  let sg = x4 >> 5u;
  let slane = x4 & 31u;
${c&&l?"":`  let hbase = (lid.y * 2u + sg) * 32u;
  let tid = hbase + slane;
  let hslot = (lid.y * 2u + sg) * 2u;
`}
  let x_pad = x4 + ${Yt}u;
${Fe}
${Ge}
  var tap_yz : u32 = 0u;
  for (var dz : i32 = -1; dz <= 1; dz = dz + 1) {
    let sz = z + dz * ${I};
    for (var dy : i32 = -1; dy <= 1; dy = dy + 1) {
      let sy = y + dy * ${I};
      if (sz >= 0 && sz < 256 && sy >= 0 && sy < 256) {
        let row_off = (u32(sz) * 256u + u32(sy)) * ${m}u + x_pad;
${X}
        ${f?Ee:""}
      }
      tap_yz = tap_yz + 1u;
    }
  }
  let row_idx = u32(z) * 256u + u32(y);
  let y_row_base = row_idx * ${v}u + x4;
${M({cStart:K,cEnd:D,hrExpr:pe,yRowExpr:"y_row_base",isPermuted:c,momBinding:be,alsoWriteMomMain:le,writeY8Expr:Z})}}`},ke=O?Re("main_lo",0,p,!1)+Re("main_hi",p,t,!1)+Re("main_ext_lo",0,p,!0)+Re("main_ext_hi",p,t,!0):Re("main",0,t,!1)+Re("main_ext",0,t,!0),te=w?`@group(0) @binding(6) var<uniform> w_eff_u : array<mat2x4<f16>, ${Math.ceil(h/2)}>;`:`@group(0) @binding(6) var<storage, read> w_eff : array<${y}>;`;return`${b}${P}
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
${te}
@group(0) @binding(7) var<storage, read> strips : array<u32>;
@group(0) @binding(8) var<uniform> cp : ConvParams;
${A}${ke}`},clsWgsl:()=>`${b}
${An(r)}
struct ClsParams {
  w_vec4_off : u32,
  bias_off : u32,
  is_full : u32,
  pad0 : u32,
};
@group(0) @binding(0) var<storage, read> y8_0 : array<u32>;
@group(0) @binding(1) var<storage, read> y8_1 : array<u32>;
@group(0) @binding(2) var<storage, read> w16_4 : array<${y}>;
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
  let y_base = row_idx * ${v}u + x4;
  let mom_base = hr * ${t}u;

  var feat : array<${y}, ${n}>;
  for (var c : u32 = 0u; c < ${n}u; c = c + 1u) {
    let st = mom_stats[c * 2u + 1u];
    let rm = mom_main[mom_base + c];
    ${f?`
    let in_hi = c >= ${p}u;
    let c_loc = select(c, c - ${p}u, in_hi);
    let idx4 = y_base + c_loc * ${Pt}u;
    let q_word = select(y8_0[idx4], y8_1[idx4], in_hi);
    `:`
    let q_word = y8_0[y_base + c * ${Pt}u];
    `}
    let yv = unpack4x8unorm(q_word) * rm.w + vec4<f32>(rm.z);
    let fv = vec4<f32>(
      act(yv.x * st.x + st.y),
      act(yv.y * st.x + st.y),
      act(yv.z * st.x + st.y),
      act(yv.w * st.x + st.y)
    );
    feat[c] = ${y}(fv);
  }

  let w_cls = cp.w_vec4_off;
  let m_cls = cp.bias_off;
${bo({chan:n,clsK4:o,nclass:s,V4:y,suf:$,readBiasStmt:"",biasExpr:I=>`qmeta[m_cls + k_base + ${I}u]`,probCfg:g})}
}`,totalWEffVec4s:h,useUniformWeff:w,csHalf:p,chunkableStd:d,halfPass0:!c&&f,halfPassConv:!c&&f}}function vo(e){const{cs:t,chan:n,nclass:s,clsK4:o,dilations:i,activation:r,norm:a,hasF16:c,hasSubgroups32:l,numConvs:f,probCfg:g}=e,d=t/4,u=t/2,p=t/4,m=d*_t,v=16384,k=t*Pt,h=t*2+4,w=h+Un*t,S=4*t,b=(f*S+o*4)/4,P=9*t*3*p,z=P,$=P+p,y=c&&p%2===0&&$*8<=65536,G=_o(r),M=c?`enable f16;
`:"",A=l?`enable subgroups;
`:"",T=c?"f16":"f32",U=c?"h":"f",B=`vec4<${T}>`,E=c?256:255,W=c&&l?"":`var<workgroup> sh_s       : array<vec2<f32>, 256>;
var<workgroup> sh_q       : array<vec2<f32>, 256>;
var<workgroup> sh_mn      : array<vec2<f32>, 256>;
var<workgroup> sh_mx      : array<vec2<f32>, 256>;
var<workgroup> sh_res_mn  : array<f32, 16>;
var<workgroup> sh_res_inv : array<f32, 16>;
`,ee=({cStart:te,cEnd:se,hrExpr:R,storeMode:K,isPermuted:D,momOffExpr:le,alsoWriteMomMain:Ge=!1,writeY8Expr:Fe="true"})=>{const pe=D?".xzyw":"",be=(We,X)=>{if(K==="stage_bg")return`stage[s_bg_base + ${We*Pt}u] = ${X};`;if(K==="stage")return`stage[s_row_base + ${We*Pt}u] = ${X};`;const Ee=Math.floor(We/d),st=We%d;return`if (use_act) { act8_${Ee}[a_row_base + ${st*_t}u] = ${X}; } else { stage[s_row_base + ${We*Pt}u] = ${X}; }`};if(c&&l)return Lt(se-te,We=>{const X=te+We;return`  {
    let f = vec4<f32>(a_${X}${pe});
    let ls = subgroupAdd(f.x + f.y + f.z + f.w);
    let lq = subgroupAdd(dot(f, f));
    let lmn = subgroupMin(min(min(f.x, f.y), min(f.z, f.w)));
    let lmx = subgroupMax(max(max(f.x, f.y), max(f.z, f.w)));
    let sp = lmx - lmn;
    let inv = select(0.0, 1.0 / sp, sp > 1e-7);
    if (${Fe}) {
      ${be(X,"pack4x8unorm((f - vec4<f32>(lmn)) * inv)")}
    }
    if (slane == 0u) {
      let mv = vec4<f32>(ls, lq, lmn, sp);
      mom[${le} + (${R}) * ${t}u + ${X}u] = mv;
      ${Ge?`mom[${h}u + (row_idx * 2u + sg) * ${t}u + ${X}u] = mv;`:""}
    }
  }
`});let Z="";for(let We=te;We<se;We+=2){const X=We,Ee=We+1;Z+=`  {
    let f0 = vec4<f32>(a_${X}${pe});
    let f1 = vec4<f32>(a_${Ee}${pe});
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
        mom[${le} + (${R}) * ${t}u + ${X}u] = mv0;
        ${Ge?`mom[${h}u + (row_idx * 2u + sg) * ${t}u + ${X}u] = mv0;`:""}
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
        mom[${le} + (${R}) * ${t}u + ${Ee}u] = mv1;
        ${Ge?`mom[${h}u + (row_idx * 2u + sg) * ${t}u + ${Ee}u] = mv1;`:""}
      }
    }
    workgroupBarrier();
    let p_mn0  = sh_res_mn[hslot];
    let p_inv0 = sh_res_inv[hslot];
    let p_mn1  = sh_res_mn[hslot + 1u];
    let p_inv1 = sh_res_inv[hslot + 1u];
    if (${Fe}) {
      ${be(X,"pack4x8unorm((f0 - vec4<f32>(p_mn0)) * p_inv0)")}
      ${be(Ee,"pack4x8unorm((f1 - vec4<f32>(p_mn1)) * p_inv1)")}
    }
    workgroupBarrier();
  }
`}return Z},ae=()=>`
@group(0) @binding(0) var<storage, read_write> act0 : array<u32>;
@group(0) @binding(1) var<storage, read_write> act1 : array<u32>;
@group(0) @binding(2) var<storage, read_write> act2 : array<u32>;
@group(0) @binding(3) var<storage, read_write> act3 : array<u32>;
@compute @workgroup_size(${_t}, 1, 1)
fn main(@builtin(local_invocation_id) lid : vec3<u32>,
        @builtin(workgroup_id) wid : vec3<u32>) {
  let row_base = (wid.z * 256u + wid.y) * ${m}u + lid.x;
  let val = ${G.uZeroWord}u;
  for (var c : u32 = 0u; c < ${d}u; c = c + 1u) {
    let idx = row_base + c * ${_t}u;
    act0[idx] = val;
    act1[idx] = val;
    act2[idx] = val;
    act3[idx] = val;
  }
}`,I=i[0],q=!c&&t>=16,N=()=>{const te=(Ge,Fe)=>{const pe=Ge/4,be=Fe/4;return Lt(be-pe,Z=>{const We=pe+Z,X=We*4;return`          {
            let w0 = w16_4[wb + ${We}u];
            let w1 = w16_4[wb + ${p+We}u];
            let w2 = w16_4[wb + ${2*p+We}u];
            a_${X}     = fma(vn, ${B}(w0.x), fma(vc, ${B}(w1.x), fma(vp, ${B}(w2.x), a_${X})));
            a_${X+1} = fma(vn, ${B}(w0.y), fma(vc, ${B}(w1.y), fma(vp, ${B}(w2.y), a_${X+1})));
            a_${X+2} = fma(vn, ${B}(w0.z), fma(vc, ${B}(w1.z), fma(vp, ${B}(w2.z), a_${X+2})));
            a_${X+3} = fma(vn, ${B}(w0.w), fma(vc, ${B}(w1.w), fma(vp, ${B}(w2.w), a_${X+3})));
          }
`})},se=Math.floor(I/4),R=I%4;let K="";R===0?K=`
        let vn = inp_4[base - ${se}u];
        let vc = inp_4[base];
        let vp = inp_4[base + ${se}u];`:se===0&&R===1?K=`
        let vL = inp_4[base - 1u];
        let vc = inp_4[base];
        let vR = inp_4[base + 1u];
        let vn = ${B}(vL.w, vc.xyz);
        let vp = ${B}(vc.yzw, vR.x);`:R===1?K=`
        let vL = inp_4[base - ${se+1}u];
        let vN = inp_4[base - ${se}u];
        let vc = inp_4[base];
        let vP = inp_4[base + ${se}u];
        let vR = inp_4[base + ${se+1}u];
        let vn = ${B}(vL.w, vN.xyz);
        let vp = ${B}(vP.yzw, vR.x);`:R===2?K=`
        let vL = inp_4[base - ${se+1}u];
        let vN = ${se===0?"inp_4[base]":`inp_4[base - ${se}u]`};
        let vc = ${se===0?"vN":"inp_4[base]"};
        let vP = ${se===0?"vN":`inp_4[base + ${se}u]`};
        let vR = inp_4[base + ${se+1}u];
        let vn = ${B}(vL.zw, vN.xy);
        let vp = ${B}(vP.zw, vR.xy);`:K=`
        let vL = inp_4[base - ${se+1}u];
        let vN = ${se===0?"inp_4[base]":`inp_4[base - ${se}u]`};
        let vc = ${se===0?"vN":"inp_4[base]"};
        let vP = ${se===0?"vN":`inp_4[base + ${se}u]`};
        let vR = inp_4[base + ${se+1}u];
        let vn = ${B}(vL.yzw, vN.x);
        let vp = ${B}(vP.w, vR.xyz);`;const D=(Ge,Fe,pe,be)=>{const Z=Lt(pe-Fe,Ne=>{const rt=Fe+Ne;if(a==="none"){const at=3*t+rt;return`  var a_${rt} = ${B}(${T}(qmeta_u[${at>>>2}u][${at&3}u]));
`}return`  var a_${rt} = ${B}(0.0${U});
`}),We=be?`  let y = i32(p0.bg_y0 + lid.y);
  let z = i32(p0.bg_z0);`:`  var y : i32;
  var z : i32;
  if (p0.is_full != 0u) {
    y = i32(wid.y * 4u + lid.y);
    z = i32(wid.z);
  } else {
    let pk = strips0_u[wid.z >> 2u][wid.z & 3u];
    y = i32((pk & 255u) * 4u + lid.y);
    z = i32(pk >> 8u);
  }`,X=be?"lid.y * 2u + sg":"row_idx * 2u + sg",Ee=be?`${w}u`:`${h}u`,st=be?`  let s_bg_base = (${v}u + lid.y) * ${k}u + lid.x;`:`  let row_idx = u32(z) * 256u + u32(y);
  let use_act = u32(z) < 192u;
  let a_row_base = row_idx * ${m}u + x_pad;
  let s_row_base = ((u32(z) & 63u) * 256u + u32(y)) * ${k}u + lid.x;`;return`
@compute @workgroup_size(64, 4, 1)
fn ${Ge}(@builtin(local_invocation_id) lid : vec3<u32>,
             @builtin(workgroup_id) wid : vec3<u32>) {
  let sg = lid.x >> 5u;
  let slane = lid.x & 31u;
${c&&l?"":`  let hbase = (lid.y * 2u + sg) * 32u;
  let tid = hbase + slane;
  let hslot = (lid.y * 2u + sg) * 2u;
`}
  let x_pad = lid.x + ${Yt}u;
${We}
${Z}
  var tap_yz : u32 = 0u;
  for (var dz : i32 = -1; dz <= 1; dz = dz + 1) {
    let sz = z + dz * ${I};
    for (var dy : i32 = -1; dy <= 1; dy = dy + 1) {
      let sy = y + dy * ${I};
      if (sz >= 0 && sz < 256 && sy >= 0 && sy < 256) {
        let base = (u32(sz) * 256u + u32(sy)) * ${_t}u + x_pad;
${K}
        let wb = tap_yz * ${3*p}u;
${te(Fe,pe)}
      }
      tap_yz = tap_yz + 1u;
    }
  }
${st}
${ee({cStart:Fe,cEnd:pe,hrExpr:X,storeMode:be?"stage_bg":"conv0_split",isPermuted:!1,momOffExpr:Ee})}}`},le=q?D("main_lo",0,u,!1)+D("main_hi",u,t,!1)+D("main_bg_lo",0,u,!0)+D("main_bg_hi",u,t,!0):D("main",0,t,!1)+D("main_bg",0,t,!0);return`${M}${A}
struct Params0 {
  is_full : u32,
  bg_y0 : u32,
  bg_z0 : u32,
  pad0 : u32,
};
@group(0) @binding(0) var<storage, read> inp_4 : array<${B}>;
@group(0) @binding(1) var<storage, read_write> act8_0 : array<u32>;
@group(0) @binding(2) var<storage, read_write> act8_1 : array<u32>;
@group(0) @binding(3) var<storage, read_write> act8_2 : array<u32>;
@group(0) @binding(4) var<storage, read_write> act8_3 : array<u32>;
@group(0) @binding(5) var<storage, read_write> stage : array<u32>;
@group(0) @binding(6) var<storage, read> w16_4 : array<${B}>;
@group(0) @binding(7) var<storage, read_write> mom : array<vec4<f32>>;
@group(0) @binding(8) var<uniform> qmeta_u : array<vec4<f32>, ${t}>;
@group(0) @binding(9) var<uniform> strips0_u : array<vec4<u32>, 4096>;
@group(0) @binding(10) var<uniform> p0 : Params0;
${W}${le}`},ie=()=>`${M}
${An(r)}
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
@group(0) @binding(0) var<storage, read> w16_4 : array<${B}>;
@group(0) @binding(1) var<storage, read> qmeta : array<f32>;
@group(0) @binding(2) var<storage, read_write> mom : array<vec4<f32>>;
@group(0) @binding(3) var<storage, read_write> w_eff : array<${B}>;
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
    for (var hr : u32 = lid; hr < ${Un}u; hr = hr + 256u) {
      let v = mom[${h}u + hr * ${t}u + c];
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
        let v = mom[${h}u + (base_hr + h) * ${t}u + c];
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
        let v = mom[${w}u + e * ${t}u + c];
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
    q_ref = max(q_ref, ${E.toFixed(1)} * qs);
  }
  ${a==="none"?"q_ref = 1.0;":""}
  if (lid == 0u) {
    mom[${t*2}u] = vec4<f32>(q_ref, 0.0, 0.0, 0.0);
  }
  let scale_num = ${E.toFixed(1)} / q_ref;
  for (var idx : u32 = lid; idx < ${P}u; idx = idx + 256u) {
    let ic = (idx / ${3*p}u) % ${t}u;
    let qs = mom[ic * 2u].z;
    w_eff[idx] = w16_4[pp.next_w_vec4_off + idx] * ${T}(qs * scale_num);
  }
  if (lid < ${p}u) {
    ${a==="none"?`
    let mb = pp.next_meta_off + ${3*t}u + lid * 4u;
    w_eff[${z}u + lid] = ${B}(${T}(qmeta[mb]), ${T}(qmeta[mb + 1u]), ${T}(qmeta[mb + 2u]), ${T}(qmeta[mb + 3u]));
    `:`
    w_eff[${z}u + lid] = ${B}(0.0${U});
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
  let x_pad = x4 + ${Yt}u;
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
    let a_off = a_base + c * ${_t}u;
    act8_0[a_off] = stage[s_base + c * ${Pt}u];
    act8_1[a_off] = stage[s_base + (${d}u + c) * ${Pt}u];
    act8_2[a_off] = stage[s_base + (${2*d}u + c) * ${Pt}u];
    act8_3[a_off] = stage[s_base + (${3*d}u + c) * ${Pt}u];
  }
}`,j=(te,se)=>{const R=te*d;return`
  for (var cl : u32 = 0u; cl < ${d}u; cl = cl + 1u) {
    let c = ${R}u + cl;
    let inv_qs = mom[c * 2u].w;
    let st = mom[c * 2u + 1u];
    let rm = mom[mom_base + c];
    let q_word = ${se?`stage[s_bg_base + c * ${Pt}u]`:`select(stage[s_base + c * ${Pt}u], act8_${te}[a_base + cl * ${_t}u], use_act)`};
    let yv = unpack4x8unorm(q_word) * rm.w + vec4<f32>(rm.z);
    let a = vec4<f32>(
      act(yv.x * st.x + st.y),
      act(yv.y * st.x + st.y),
      act(yv.z * st.x + st.y),
      act(yv.w * st.x + st.y)
    );
    act8_${te}[a_base + cl * ${_t}u] = pack4x8unorm((a * inv_qs + vec4<f32>(${G.zeroBin.toFixed(1)})) * (1.0 / 255.0));
  }`},$e=()=>`${An(r)}
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
  let x_pad = x4 + ${Yt}u;
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
  let mom_base = ${h}u + (row_idx * 2u + sg) * ${t}u;
${Lt(4,te=>j(te,!1))}
}

@compute @workgroup_size(64, 4, 1)
fn norm_halo_fill(@builtin(local_invocation_id) lid : vec3<u32>,
                  @builtin(workgroup_id) wid : vec3<u32>) {
  let idx = wid.y * 4u + lid.y;
  if (idx >= np.n_halo) { return; }
  let x4 = lid.x;
  let sg = x4 >> 5u;
  let x_pad = x4 + ${Yt}u;
  let s_bg_base = ${v}u * ${k}u + x4;
  let mom_base = ${w}u + sg * ${t}u;
  let dst_row = norm_aux[np.halo_off + idx];
  let a_base = dst_row * ${m}u + x_pad;
${Lt(4,te=>j(te,!0))}
}`,Ae=te=>{const se=Math.floor(te/4),K=te%4*8,D=!c&&t>=16,le=(X,Ee)=>c?`
          let ${X} = vec4<f16>(vec2<f16>(unpack2x16float(((${Ee} & 0x00FF00FFu) << 2u) | 0x3C003C00u)), vec2<f16>(unpack2x16float(((${Ee} >> 6u) & 0x03FC03FCu) | 0x3C003C00u))) - vec4<f16>(${G.sterbenzSub});`:`
          let ${X} = unpack4x8unorm(${Ee}) - vec4<f32>(${G.uZeroFloat});`,Ge=X=>{if(K===0)return`
          let u_neg = ${X}[base - ${se}u];
          let uC    = ${X}[base];
          let u_pos = ${X}[base + ${se}u];`+le("vn","u_neg")+le("vc","uC")+le("vp","u_pos");const Ee=32-K;return se===0?`
          let uL = ${X}[base - 1u];
          let uC = ${X}[base];
          let uR = ${X}[base + 1u];
          let u_neg = (uL >> ${Ee}u) | (uC << ${K}u);
          let u_pos = (uC >> ${K}u) | (uR << ${Ee}u);`+le("vn","u_neg")+le("vc","uC")+le("vp","u_pos"):`
          let uL = ${X}[base - ${se+1}u];
          let uN = ${X}[base - ${se}u];
          let uC = ${X}[base];
          let uP = ${X}[base + ${se}u];
          let uR = ${X}[base + ${se+1}u];
          let u_neg = (uL >> ${Ee}u) | (uN << ${K}u);
          let u_pos = (uP >> ${K}u) | (uR << ${Ee}u);`+le("vn","u_neg")+le("vc","uC")+le("vp","u_pos")},Fe=(X,Ee)=>{const st=X/4,Ne=Ee/4;if(y){const rt=p/2,at=p;let it="";for(let bt=st;bt<Ne;bt+=2){const Le=bt*4,Je=bt/2;it+=`          {
            let wp0 = w_eff_u[wbu + ${Je}u];
            let wp1 = w_eff_u[wbu + ${rt+Je}u];
            let wp2 = w_eff_u[wbu + ${at+Je}u];
            let w0a = wp0[0];
            let w0b = wp0[1];
            let w1a = wp1[0];
            let w1b = wp1[1];
            let w2a = wp2[0];
            let w2b = wp2[1];
            a_${Le}     = fma(vn, vec4<f16>(w0a.x), fma(vc, vec4<f16>(w1a.x), fma(vp, vec4<f16>(w2a.x), a_${Le})));
            a_${Le+1} = fma(vn, vec4<f16>(w0a.y), fma(vc, vec4<f16>(w1a.y), fma(vp, vec4<f16>(w2a.y), a_${Le+1})));
            a_${Le+2} = fma(vn, vec4<f16>(w0a.z), fma(vc, vec4<f16>(w1a.z), fma(vp, vec4<f16>(w2a.z), a_${Le+2})));
            a_${Le+3} = fma(vn, vec4<f16>(w0a.w), fma(vc, vec4<f16>(w1a.w), fma(vp, vec4<f16>(w2a.w), a_${Le+3})));
            a_${Le+4} = fma(vn, vec4<f16>(w0b.x), fma(vc, vec4<f16>(w1b.x), fma(vp, vec4<f16>(w2b.x), a_${Le+4})));
            a_${Le+5} = fma(vn, vec4<f16>(w0b.y), fma(vc, vec4<f16>(w1b.y), fma(vp, vec4<f16>(w2b.y), a_${Le+5})));
            a_${Le+6} = fma(vn, vec4<f16>(w0b.z), fma(vc, vec4<f16>(w1b.z), fma(vp, vec4<f16>(w2b.z), a_${Le+6})));
            a_${Le+7} = fma(vn, vec4<f16>(w0b.w), fma(vc, vec4<f16>(w1b.w), fma(vp, vec4<f16>(w2b.w), a_${Le+7})));
          }
`}return it}return Lt(Ne-st,rt=>{const at=st+rt,it=at*4;return`          {
            let w0 = w_eff[wb + ${at}u];
            let w1 = w_eff[wb + ${p+at}u];
            let w2 = w_eff[wb + ${2*p+at}u];
            a_${it}     = fma(vn, ${B}(w0.x), fma(vc, ${B}(w1.x), fma(vp, ${B}(w2.x), a_${it})));
            a_${it+1} = fma(vn, ${B}(w0.y), fma(vc, ${B}(w1.y), fma(vp, ${B}(w2.y), a_${it+1})));
            a_${it+2} = fma(vn, ${B}(w0.z), fma(vc, ${B}(w1.z), fma(vp, ${B}(w2.z), a_${it+2})));
            a_${it+3} = fma(vn, ${B}(w0.w), fma(vc, ${B}(w1.w), fma(vp, ${B}(w2.w), a_${it+3})));
          }
`})},pe=(X,Ee,st)=>{const Ne=X*d,rt=`(${d}u + cp.pad0)`;return y?`        for (var ic : u32 = 0u; ic < ${rt}; ic = ic + 1u) {
          let base = row_off + ic * ${_t}u;
${Ge(`act8_${X}`)}
          let wbu = wbu_tap + ${Ne?`(${Ne}u + ic)`:"ic"} * ${3*p/2}u;
${Fe(Ee,st)}
        }
`:`        for (var ic : u32 = 0u; ic < ${rt}; ic = ic + 1u) {
          let base = row_off + ic * ${_t}u;
${Ge(`act8_${X}`)}
          let wb = wb_tap + ${Ne?`(${Ne}u + ic)`:"ic"} * ${3*p}u;
${Fe(Ee,st)}
        }
`},be=(X,Ee,st,Ne)=>{const rt=Lt(st-Ee,mt=>{const ht=Ee+mt;if(a==="none"){const Gt=ht>>>2,Ct=["x","y","z","w"][ht&3];if(y){const H=z+Gt>>>1,Nt=z+Gt&1;return`  var a_${ht} = ${B}(w_eff_u[${H}u][${Nt}].${Ct});
`}return`  var a_${ht} = ${B}(w_eff[${z+Gt}u].${Ct});
`}return`  var a_${ht} = ${B}(0.0${U});
`});let at="";Ne==="bg"?at=`
  let y = i32(cp.bg_y0 + lid.y);
  let z = i32(cp.bg_z0);`:Ne==="ext"?at=`
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
  }`;const it=Ne==="bg"?"lid.y * 2u + sg":Ne==="ext"?"ext_orig * 8u + lid.y * 2u + sg":"row_idx * 2u + sg",bt=Ne==="main"?`${h}u`:`${w}u`,Le=Ne==="bg"?"stage_bg":"stage",Je=Ne==="main"?"true":"(cp.write_ext_y8 != 0u)",ot=Ne==="bg"?`  let row_idx = u32(z) * 256u + u32(y);
  let s_bg_base = (${v}u + lid.y) * ${k}u + x4;`:`  let row_idx = u32(z) * 256u + u32(y);
  let s_row_base = ((u32(z) & 63u) * 256u + u32(y)) * ${k}u + x4;`,pt=y?`        let wbu_tap = tap_yz * ${t*3*p/2}u;
`:`        let wb_tap = tap_yz * ${t*3*p}u;
`;return`
@compute @workgroup_size(64, 4, 1)
fn ${X}(@builtin(local_invocation_id) lid : vec3<u32>,
             @builtin(workgroup_id) wid : vec3<u32>) {
  let x4 = lid.x;
  let sg = x4 >> 5u;
  let slane = x4 & 31u;
${c&&l?"":`  let hbase = (lid.y * 2u + sg) * 32u;
  let tid = hbase + slane;
  let hslot = (lid.y * 2u + sg) * 2u;
`}
  let x_pad = x4 + ${Yt}u;
${at}
${rt}
  var tap_yz : u32 = 0u;
  for (var dz : i32 = -1; dz <= 1; dz = dz + 1) {
    let sz = z + dz * ${te};
    for (var dy : i32 = -1; dy <= 1; dy = dy + 1) {
      let sy = y + dy * ${te};
      if (sz >= 0 && sz < 256 && sy >= 0 && sy < 256) {
        let row_off = (u32(sz) * 256u + u32(sy)) * ${m}u + x_pad;
${pt}${Lt(4,mt=>pe(mt,Ee,st))}
      }
      tap_yz = tap_yz + 1u;
    }
  }
${ot}
${ee({cStart:Ee,cEnd:st,hrExpr:it,storeMode:Le,isPermuted:c,momOffExpr:bt,alsoWriteMomMain:Ne!=="main",writeY8Expr:Je})}}`},Z=D?be("main_lo",0,u,"main")+be("main_hi",u,t,"main")+be("main_ext_lo",0,u,"ext")+be("main_ext_hi",u,t,"ext")+be("main_bg_lo",0,u,"bg")+be("main_bg_hi",u,t,"bg"):be("main",0,t,"main")+be("main_ext",0,t,"ext")+be("main_bg",0,t,"bg"),We=y?`@group(0) @binding(6) var<uniform> w_eff_u : array<mat2x4<f16>, ${Math.ceil($/2)}>;`:`@group(0) @binding(6) var<storage, read> w_eff : array<${B}>;`;return`${M}${A}
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
${We}
@group(0) @binding(7) var<storage, read> strips : array<u32>;
@group(0) @binding(8) var<uniform> cp : BandConvParams;
${W}${Z}`},Re=te=>{const se=te*d;return`
  for (var cl : u32 = 0u; cl < ${d}u; cl = cl + 1u) {
    let c = ${se}u + cl;
    if (c < ${n}u) {
      let st = mom[c * 2u + 1u];
      let rm = mom[mom_base + c];
      let q_word = select(stage[s_base + c * ${Pt}u], act8_${te}[a_base + cl * ${_t}u], use_act);
      let yv = unpack4x8unorm(q_word) * rm.w + vec4<f32>(rm.z);
      let fv = vec4<f32>(
        act(yv.x * st.x + st.y),
        act(yv.y * st.x + st.y),
        act(yv.z * st.x + st.y),
        act(yv.w * st.x + st.y)
      );
      feat[c] = ${B}(fv);
    }
  }`};return{initActWgsl:ae,conv0Wgsl:N,prepWgsl:ie,flushWgsl:O,normWgsl:$e,getConvWgsl:Ae,clsWgsl:()=>`${M}
${An(r)}
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
@group(0) @binding(5) var<storage, read> w16_4 : array<${B}>;
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
  let a_base = row_idx * ${m}u + x4 + ${Yt}u;
  let s_base = ((z & 63u) * 256u + y) * ${k}u + x4;
  let mom_base = ${h}u + (row_idx * 2u + sg) * ${t}u;

  var feat : array<${B}, ${n}>;
${Lt(4,te=>Re(te))}

  let w_cls = cp.w_vec4_off;
  let b_vec4 = cp.bias_off >> 2u;
${bo({chan:n,clsK4:o,nclass:s,V4:B,suf:U,readBiasStmt:"    let bv = qmeta_u[b_vec4 + k4];",biasExpr:te=>`bv.${["x","y","z","w"][te]}`,probCfg:g})}
}`,qmetaVec4Len:b,numConvs:f,totalWEffVec4s:$,useUniformWeff:y,csQ:d,halfPass0:q,halfPassConv:!c&&t>=16}}function qr(e,t,n,s,o,i,r){return we(this,null,function*(){var Ce,de;const a=C*C*C,c=r?a*4:a,l=t.dilations.length,f=t.cs/4,g=C*C*f*_t*4,u=(64*C+4)*t.cs*Pt*4,m=(t.cs*2+4+(Un+Qs)*t.cs)*16,v=e.limits||{},k=Math.min((Ce=v.maxStorageBufferBindingSize)!=null?Ce:1/0,(de=v.maxBufferSize)!=null?de:1/0);if(g>k||u>k||m>k||c>k){const V=Math.ceil(Math.max(g,u,m,c)/1048576);throw new Error(`meshnet_fast_v4: LowMem128 max buffer (${V} MiB) exceeds device limit (${k>>>20} MiB)`)}const _=vo({cs:t.cs,chan:t.chan,nclass:t.nclass,clsK4:n.clsK4,dilations:t.dilations,activation:t.activation,norm:t.norm,hasF16:s,hasSubgroups32:o,numConvs:l,probCfg:r});console.log(`[WebGPU-V4-128M] ${t.chan}ch(cs=${t.cs})/${t.nclass}cls (${l} convs, ${t.activation}, norm=${t.norm}${r?", prob=3":""}) | ${s?"f16+sterbenz":"f32"} | ${o?"subgroups32":"shared-8KiB"} | ZYCX-4Q+64slice | maxBuf=${(Math.max(g,u,m,c)/1048576).toFixed(1)} MiB`);const h=GPUBufferUsage.STORAGE,w=GPUBufferUsage.UNIFORM,S=GPUBufferUsage.COPY_DST,b=GPUBufferUsage.COPY_SRC,P=C*C*pn,z=P*(s?2:4),$=s?Math.ceil(_.totalWEffVec4s/2)*16:_.totalWEffVec4s*16,y=!!(r&&g>=c),G=`128|${t.cs}|${s?1:0}|${c}|${y?1:0}`,M=uo(e,G,()=>{const V=[],oe=On(e,V),ge=oe.alloc,De={inpBuf:ge(z,h|S|b),act8_0:ge(g,h|S|b),act8_1:ge(g,h|S|b),act8_2:ge(g,h|S|b),act8_3:ge(g,h|S|b),stageBuf:ge(u,h),momBuf:ge(m,h),labels8Buf:ge(c,h|S|b),readbackBuf:ge(c,GPUBufferUsage.MAP_READ|S),probPackTmpBuf:y?ge(c,h|S|b):null};return{buffers:V,named:De,bytes:oe.getBytes()}}),{inpBuf:A,act8_0:T,act8_1:U,act8_2:B,act8_3:E,stageBuf:W,momBuf:ee,labels8Buf:ae,readbackBuf:I,probPackTmpBuf:q}=M.named,N=[],ie=On(e,N),O=ie.alloc,j=O(s?n.wF16.byteLength:n.wF32.byteLength,h|S),$e=O(n.qmetaF32.byteLength,h|w|S),Ae=O($,_.useUniformWeff?h|w:h),Re=t.norm==="gn"&&!(i!=null&&i.disableConeSkip),ke=O(Xe*4,w|S),te=O(Xe*4,w|S),se=Array.from({length:l},()=>O(Re?Xe*4:16,h|S)),R=Array.from({length:l-1},()=>O(Re?(Xe+C*C)*4:16,h|S)),K=O(16,w|S),D=O(16,w|S),le=Array.from({length:l},()=>O(48,w|S)),Ge=Array.from({length:l-1},()=>O(16,w|S)),Fe=Math.max(256,v.minUniformBufferOffsetAlignment||256),pe=Fe>>>2,be=20,Z=Math.max(1,(l-1)*be),We=O(Z*Fe,w|S),X=new Uint32Array(Z*pe);e.queue.writeBuffer(j,0,s?n.wF16:n.wF32),e.queue.writeBuffer($e,0,n.qmetaF32);const Ee=Array.from(new Set(t.dilations.slice(1)));let st;try{st=yield po(e,t,n,s,o,r,_,Ee)}catch(V){for(const oe of N)oe.destroy();if(N.length=0,M.pooled)ln.get(e)===M&&xn(e);else{for(const oe of M.buffers)oe.destroy();M.buffers.length=0}throw V}const{pInit:Ne,pMomFin:rt,pPrepW:at,pFlush:it,pNorm:bt,pNormHalo:Le,pCls:Je,pConv0:ot,convPipes:pt}=st,mt=(V,oe)=>e.createBindGroup({layout:V,entries:oe.map((ge,De)=>({binding:De,resource:ge&&ge.buffer?ge:{buffer:ge}}))}),ht=mt(Ne.bgl,[T,U,B,E]);{const V=e.createCommandEncoder(),oe=V.beginComputePass();oe.setPipeline(Ne.pipe),oe.setBindGroup(0,ht),oe.dispatchWorkgroups(1,C,C),oe.end(),e.queue.submit([V.finish()])}const Gt=(_.halfPass0?ot.lo:ot.main).bgl,Ct=mt(Gt,[A,T,U,B,E,W,j,ee,{buffer:$e,offset:0,size:t.cs*16},ke,K]),H=mt(Je.bgl,[T,U,B,E,W,j,ee,ae,$e,te,D]),Nt=y?O(16,w|S):null,Ut=y?mt(Je.bgl,[T,U,B,E,W,j,ee,ae,$e,te,Nt]):null,Dt=ho({device:e,hasF16:s,nvox:a,outBufBytes:c,inpBuf:A,act8_0:T,labels8Buf:ae,readbackBuf:I,pInit:Ne,bgInit:ht,pCls:Je,bgCls:H,clsUbo:D,packed:n,modelEntry:i,probCfg:r,canGpuProb:y,probSlots:y?{clsUbo1:Nt,bgCls1:Ut,pass0HoldBuf:q,y0:T,y1:U,b:B,sup:E}:null,ownedBuffers:N,mkBuf:O}),zt=le.map((V,oe)=>mt(rt.bgl,[j,$e,ee,Ae,se[oe],V])),x=Ge.map((V,oe)=>mt(bt.bgl,[T,U,B,E,W,ee,R[oe],V])),F={buffer:We,offset:0,size:32},L=Array.from({length:l},(V,oe)=>oe===0?null:mt(it.bgl,[T,U,B,E,W,se[oe],F])),ue=Array.from({length:l},(V,oe)=>{if(oe===0)return null;const ge=t.dilations[oe],De=_.halfPassConv?pt[ge].lo:pt[ge].main;return mt(De.bgl,[T,U,B,E,W,ee,Ae,se[oe],F])}),Q=s?new Uint16Array(P):new Float32Array(P),Ue=new Uint8Array(C*C),me=new Uint32Array(Xe),he=new Uint32Array(Xe+C*C),Y=new Uint32Array(12),Be=new Float32Array(Y.buffer),ye=new Uint32Array(4),qe=(V,oe,ge,De,lt,Oe,Ie,Me)=>{const ce=V*pe;X[ce]=oe?1:0,X[ce+1]=ge,X[ce+2]=De,X[ce+3]=lt,X[ce+4]=Oe?1:0,X[ce+5]=Ie,X[ce+6]=Me,X[ce+7]=0};function je(V,oe){return we(this,null,function*(){if(V.length!==a)throw new Error(`meshnet_fast_v4 expected ${a} voxels, got ${V.length}`);const ge=t.norm==="gn"&&!(i!=null&&i.disableConeSkip),De=yield Dt.prepareInput({volume:V,ioOpts:oe,useCone:ge,padInputHost:Q,headRowHost:Ue,hasF16Flag:s}),lt=De.info,Oe=go(Ue,lt,t.dilations,ge),Ie=new Array(l);for(let ve=0;ve<l;ve++){const Se=Oe.layers[ve],ne=Se.isFull?Xe:Se.mainStrips.length,J=Se.isFull||!Se.extStrips?0:Se.extStrips.length,Te=Se.haloRows?Se.haloRows.length:0;if(ve===0){!Se.isFull&&ne>0&&(me.set(Se.mainStrips,0),e.queue.writeBuffer(ke,0,me.subarray(0,ne)),e.queue.writeBuffer(se[0],0,me.subarray(0,ne))),Ie[0]={L:Se,nMain:ne,nExt:J,nHalo:Te};continue}const Ke=new Uint32Array(8),kt=new Uint32Array(8),Ve=new Uint32Array(8),Ze=new Uint32Array(8);if(!Se.isFull){if(ne>0){me.set(Se.mainStrips,0);for(let He=0;He<ne;He++)kt[Se.mainStrips[He]>>>13]++;let tt=0;for(let He=0;He<8;He++)Ke[He]=tt,tt+=kt[He]}if(Se.mode==="bwd"&&J>0){const tt=Array.from({length:8},()=>[]);for(let St=0;St<J;St++){const ct=Se.extStrips[St];tt[ct>>>13].push((St&65535)<<16|ct)}let He=ne;for(let St=0;St<8;St++){Ve[St]=He;const ct=tt[St];Ze[St]=ct.length;for(let _e=0;_e<ct.length;_e++)me[He++]=ct[_e]}e.queue.writeBuffer(se[ve],0,me.subarray(0,ne+J))}else ne>0&&e.queue.writeBuffer(se[ve],0,me.subarray(0,ne))}const Pe=Se.mode==="rpure"&&Te>0||Se.mode==="bwd"&&ve+1<l,re=(ve-1)*be,Ft=Se.bgStrip?Se.bgStrip.yWg*4:0,ft=Se.bgStrip?Se.bgStrip.z:0;for(let tt=0;tt<8;tt++)qe(re+tt,Se.isFull,tt*32,Ke[tt],Ve[tt],Pe,Ft,ft);for(let tt=0;tt<6;tt++)qe(re+8+tt,Se.isFull,tt*32,Ke[tt],0,!1,0,0),qe(re+14+tt,!1,tt*32,Ve[tt],0,!1,0,0);Ie[ve]={L:Se,nMain:ne,nExt:J,nHalo:Te,mainCount:kt,extCount:Ze,layerBaseSlot:re}}l>1&&e.queue.writeBuffer(We,0,X);let Me=so(e,i);const ce=[];if(Me==="single"){const ve=e.createCommandEncoder();De.runPrePasses(ve,ce),Oe.clsSkipped&&(ve.clearBuffer(ae,0,c),Oe.clsStrips.length>0&&e.queue.writeBuffer(te,0,Oe.clsStrips));for(let Se=0;Se<l;Se++){const ne=Ie[Se],{L:J,nMain:Te,nHalo:Ke}=ne,kt=J.nMomExt||0,Ve=J.isFull?Xe:J.normStrips?J.normStrips.length:0;if(Se===0){const Pe=J.isFull?64:1,re=J.isFull?C:Te,Ft=!!(J.bgStrip&&Ke>0);if(ye[0]=J.isFull?1:0,ye[1]=J.bgStrip?J.bgStrip.yWg*4:0,ye[2]=J.bgStrip?J.bgStrip.z:0,ye[3]=0,e.queue.writeBuffer(K,0,ye),_.halfPass0)for(const[ft,tt]of[[ot.lo,ot.bgLo],[ot.hi,ot.bgHi]]){const He=ve.beginComputePass();He.setBindGroup(0,Ct),re>0&&(He.setPipeline(ft.pipe),He.dispatchWorkgroups(1,Pe,re)),Ft&&(He.setPipeline(tt.pipe),He.dispatchWorkgroups(1,1,1)),He.end(),ce.push("conv0")}else{const ft=ve.beginComputePass();ft.setBindGroup(0,Ct),re>0&&(ft.setPipeline(ot.main.pipe),ft.dispatchWorkgroups(1,Pe,re)),Ft&&(ft.setPipeline(ot.bg.pipe),ft.dispatchWorkgroups(1,1,1)),ft.end(),ce.push("conv0")}}else{const Pe=t.dilations[Se],re=pt[Pe],Ft=ue[Se],ft=L[Se],{mainCount:tt,extCount:He,layerBaseSlot:St}=ne,ct=J.mode==="rpure"&&!!J.bgStrip;for(let _e=0;_e<8;_e++){if(_e>=2){const ut=_e-2,xt=J.isFull||tt[ut]>0,nt=!J.isFull&&J.mode==="bwd"&&He[ut]>0;if(xt||nt){const ze=ve.beginComputePass();ze.setPipeline(it.pipe),xt&&(ze.setBindGroup(0,ft,[(St+8+ut)*Fe]),ze.dispatchWorkgroups(1,J.isFull?64:1,J.isFull?32:tt[ut])),nt&&(ze.setBindGroup(0,ft,[(St+14+ut)*Fe]),ze.dispatchWorkgroups(1,1,He[ut])),ze.end(),ce.push("flushStage")}}const fe=J.isFull||tt[_e]>0,xe=!J.isFull&&J.mode==="bwd"&&He[_e]>0,yt=_e===0&&ct;if(!fe&&!xe&&!yt)continue;const Vt=[(St+_e)*Fe],wt=J.isFull?64:1,vt=J.isFull?32:tt[_e];if(_.halfPassConv)for(const[ut,xt,nt]of[[re.lo,re.extLo,re.bgLo],[re.hi,re.extHi,re.bgHi]]){const ze=ve.beginComputePass();ze.setBindGroup(0,Ft,Vt),fe&&(ze.setPipeline(ut.pipe),ze.dispatchWorkgroups(1,wt,vt)),xe&&(ze.setPipeline(xt.pipe),ze.dispatchWorkgroups(1,1,He[_e])),yt&&(ze.setPipeline(nt.pipe),ze.dispatchWorkgroups(1,1,1)),ze.end(),ce.push("convHidden")}else{const ut=ve.beginComputePass();ut.setBindGroup(0,Ft,Vt),fe&&(ut.setPipeline(re.main.pipe),ut.dispatchWorkgroups(1,wt,vt)),xe&&(ut.setPipeline(re.ext.pipe),ut.dispatchWorkgroups(1,1,He[_e])),yt&&(ut.setPipeline(re.bg.pipe),ut.dispatchWorkgroups(1,1,1)),ut.end(),ce.push("convHidden")}}}const Ze=Se+1<l?n.w0Vec4s+Se*n.hiddenVec4PerLayer:0;Y[0]=Se*n.metaStride,Y[1]=Ze,Y[2]=(Se+1)*n.metaStride,Y[3]=Se+1<l?1:0,Y[4]=Se===0?1:0,Y[5]=J.isFull?1:0,Y[6]=Te,Y[7]=kt*8,Be[8]=J.extWeight||0,Y[9]=0,Y[10]=0,Y[11]=0,e.queue.writeBuffer(le[Se],0,Y);{const Pe=ve.beginComputePass();Pe.setBindGroup(0,zt[Se]),Pe.setPipeline(rt.pipe),Pe.dispatchWorkgroups(t.cs,1,1),Pe.end(),ce.push("momentsPrep")}if(Se+1<l){{const re=ve.beginComputePass();re.setBindGroup(0,zt[Se]),re.setPipeline(at.pipe),re.dispatchWorkgroups(1,1,1),re.end(),ce.push("momentsPrep")}const Pe=J.isFull?0:Ve;if((Pe>0||Ke>0)&&(Pe>0&&he.set(J.normStrips,0),Ke>0&&he.set(J.haloRows,Pe),e.queue.writeBuffer(R[Se],0,he.subarray(0,Pe+Ke))),ye[0]=J.isFull?1:0,ye[1]=J.bgStrip?J.bgStrip.z*C+J.bgStrip.yWg*4:0,ye[2]=Pe,ye[3]=Ke,e.queue.writeBuffer(Ge[Se],0,ye),J.isFull||Ve>0||Ke>0){const re=ve.beginComputePass();re.setBindGroup(0,x[Se]),(J.isFull||Ve>0)&&(re.setPipeline(bt.pipe),re.dispatchWorkgroups(1,J.isFull?64:1,J.isFull?C:Ve)),Ke>0&&(re.setPipeline(Le.pipe),re.dispatchWorkgroups(1,Math.ceil(Ke/4),1)),re.end(),ce.push("normHalo")}}}return je.__passCategories=ce,Dt.finishAndReadback({enc:ve,schedule:Oe,passCategories:ce,u4Tmp:ye,ioOpts:oe})}const It=typeof(oe==null?void 0:oe.onProgress)=="function"?oe.onProgress:null,et=ao(Oe,l);let Bt=0,Wt=-1,qt=e.__v4MsPerStrip||.12;const dt=ve=>{if(!It)return;const Se=Math.min(.99,Bt/et);let ne="";ve>=0&&ve!==Wt&&(Wt=ve,ne=`Layer ${ve+1}/${l}`),It(Se,ne)};let Qe=e.createCommandEncoder();De.runPrePasses(Qe,ce),Oe.clsSkipped&&(Qe.clearBuffer(ae,0,c),Oe.clsStrips.length>0&&e.queue.writeBuffer(te,0,Oe.clsStrips));for(let ve=0;ve<l;ve++){const Se=Ie[ve],{L:ne,nMain:J,nHalo:Te}=Se,Ke=ne.nMomExt||0,kt=ne.isFull?Xe:ne.normStrips?ne.normStrips.length:0,Ve=ms(ne,ve,l);if(ve===0){const Pe=ne.isFull?64:1,re=ne.isFull?C:J,Ft=!!(ne.bgStrip&&Te>0);if(ye[0]=ne.isFull?1:0,ye[1]=ne.bgStrip?ne.bgStrip.yWg*4:0,ye[2]=ne.bgStrip?ne.bgStrip.z:0,ye[3]=0,e.queue.writeBuffer(K,0,ye),_.halfPass0)for(const[ft,tt]of[[ot.lo,ot.bgLo],[ot.hi,ot.bgHi]]){const He=Qe.beginComputePass();He.setBindGroup(0,Ct),re>0&&(He.setPipeline(ft.pipe),He.dispatchWorkgroups(1,Pe,re)),Ft&&(He.setPipeline(tt.pipe),He.dispatchWorkgroups(1,1,1)),He.end(),ce.push("conv0")}else{const ft=Qe.beginComputePass();ft.setBindGroup(0,Ct),re>0&&(ft.setPipeline(ot.main.pipe),ft.dispatchWorkgroups(1,Pe,re)),Ft&&(ft.setPipeline(ot.bg.pipe),ft.dispatchWorkgroups(1,1,1)),ft.end(),ce.push("conv0")}}else{const Pe=t.dilations[ve],re=pt[Pe],Ft=ue[ve],ft=L[ve],{mainCount:tt,extCount:He,layerBaseSlot:St}=Se,ct=ne.mode==="rpure"&&!!ne.bgStrip;let _e=0;for(let fe=0;fe<8;fe++){if(fe>=2){const wt=fe-2,vt=ne.isFull||tt[wt]>0,ut=!ne.isFull&&ne.mode==="bwd"&&He[wt]>0;if(vt||ut){const xt=Qe.beginComputePass();xt.setPipeline(it.pipe),vt&&(xt.setBindGroup(0,ft,[(St+8+wt)*Fe]),xt.dispatchWorkgroups(1,ne.isFull?64:1,ne.isFull?32:tt[wt])),ut&&(xt.setBindGroup(0,ft,[(St+14+wt)*Fe]),xt.dispatchWorkgroups(1,1,He[wt])),xt.end(),ce.push("flushStage")}}const xe=ne.isFull||tt[fe]>0,yt=!ne.isFull&&ne.mode==="bwd"&&He[fe]>0,Vt=fe===0&&ct;if(xe||yt||Vt){const wt=[(St+fe)*Fe],vt=ne.isFull?64:1,ut=ne.isFull?32:tt[fe];if(_.halfPassConv)for(const[xt,nt,ze]of[[re.lo,re.extLo,re.bgLo],[re.hi,re.extHi,re.bgHi]]){const Mt=Qe.beginComputePass();Mt.setBindGroup(0,Ft,wt),xe&&(Mt.setPipeline(xt.pipe),Mt.dispatchWorkgroups(1,vt,ut)),yt&&(Mt.setPipeline(nt.pipe),Mt.dispatchWorkgroups(1,1,He[fe])),Vt&&(Mt.setPipeline(ze.pipe),Mt.dispatchWorkgroups(1,1,1)),Mt.end(),ce.push("convHidden")}else{const xt=Qe.beginComputePass();xt.setBindGroup(0,Ft,wt),xe&&(xt.setPipeline(re.main.pipe),xt.dispatchWorkgroups(1,vt,ut)),yt&&(xt.setPipeline(re.ext.pipe),xt.dispatchWorkgroups(1,1,He[fe])),Vt&&(xt.setPipeline(re.bg.pipe),xt.dispatchWorkgroups(1,1,1)),xt.end(),ce.push("convHidden")}_e+=(xe?ne.isFull?2048:tt[fe]:0)+(yt?He[fe]:0)}if(Me==="calibrate"&&(_e>=512||fe===7&&_e>0)){const wt=performance.now();e.queue.submit([Qe.finish()]),yield e.queue.onSubmittedWorkDone();const vt=performance.now()-wt;if(Qe=e.createCommandEncoder(),Bt+=_e,_e>=512){qt=vt/_e;const ut=qt*Xe;e.__v4WinCalibrated=!0,e.__v4MsPerStrip=qt,ut<eo?(e.__v4WinFast=!0,Me="pipelined",console.log(`[WebGPU-V4-128M] Windows GPU calibration: estFullLayer=${ut.toFixed(1)}ms -> unthrottled pipelined mode`)):(e.__v4WinFast=!1,Me="paced",console.log(`[WebGPU-V4-128M] Windows GPU calibration: estFullLayer=${ut.toFixed(1)}ms -> TDR-safe paced mode`),dt(ve),yield yn())}_e=0}else if(Me==="paced"&&_e>0&&(_e*qt>=to*.75||fe===7)){const wt=performance.now();e.queue.submit([Qe.finish()]),yield e.queue.onSubmittedWorkDone();const vt=performance.now()-wt;Qe=e.createCommandEncoder(),_e>=256&&vt>.2&&(qt=.7*qt+.3*(vt/_e),e.__v4MsPerStrip=qt),Bt+=_e,_e=0,dt(ve),yield yn()}}}const Ze=ve+1<l?n.w0Vec4s+ve*n.hiddenVec4PerLayer:0;Y[0]=ve*n.metaStride,Y[1]=Ze,Y[2]=(ve+1)*n.metaStride,Y[3]=ve+1<l?1:0,Y[4]=ve===0?1:0,Y[5]=ne.isFull?1:0,Y[6]=J,Y[7]=Ke*8,Be[8]=ne.extWeight||0,Y[9]=0,Y[10]=0,Y[11]=0,e.queue.writeBuffer(le[ve],0,Y);{const Pe=Qe.beginComputePass();Pe.setBindGroup(0,zt[ve]),Pe.setPipeline(rt.pipe),Pe.dispatchWorkgroups(t.cs,1,1),Pe.end(),ce.push("momentsPrep")}if(ve+1<l){{const re=Qe.beginComputePass();re.setBindGroup(0,zt[ve]),re.setPipeline(at.pipe),re.dispatchWorkgroups(1,1,1),re.end(),ce.push("momentsPrep")}const Pe=ne.isFull?0:kt;if((Pe>0||Te>0)&&(Pe>0&&he.set(ne.normStrips,0),Te>0&&he.set(ne.haloRows,Pe),e.queue.writeBuffer(R[ve],0,he.subarray(0,Pe+Te))),ye[0]=ne.isFull?1:0,ye[1]=ne.bgStrip?ne.bgStrip.z*C+ne.bgStrip.yWg*4:0,ye[2]=Pe,ye[3]=Te,e.queue.writeBuffer(Ge[ve],0,ye),ne.isFull||kt>0||Te>0){const re=Qe.beginComputePass();re.setBindGroup(0,x[ve]),(ne.isFull||kt>0)&&(re.setPipeline(bt.pipe),re.dispatchWorkgroups(1,ne.isFull?64:1,ne.isFull?C:kt)),Te>0&&(re.setPipeline(Le.pipe),re.dispatchWorkgroups(1,Math.ceil(Te/4),1)),re.end(),ce.push("normHalo")}}if(Me==="pipelined")e.queue.submit([Qe.finish()]),Qe=e.createCommandEncoder();else{const Pe=performance.now();e.queue.submit([Qe.finish()]),yield e.queue.onSubmittedWorkDone();const re=performance.now()-Pe;Qe=e.createCommandEncoder(),Bt+=(ve===0?Ve.convWork:0)+Ve.normWork,ve===0&&Me==="calibrate"&&re>=90&&(e.__v4WinCalibrated=!0,e.__v4WinFast=!1,Me="paced",console.log(`[WebGPU-V4-128M] Windows GPU calibration (conv0=${re.toFixed(1)}ms) -> TDR-safe paced mode`)),Me==="paced"&&(dt(ve),(ve===0||re>=30)&&(yield yn()))}}return je.__passCategories=ce,Dt.finishAndReadback({enc:Qe,schedule:Oe,passCategories:ce,u4Tmp:ye,ioOpts:oe,paced:Me==="paced",onProgress:It})})}return Dt.warmupIoPipelines(),je.dispose=({keepSharedWorkspace:V=!1}={})=>{Dt.dispose();for(const oe of N)oe.destroy();if(N.length=0,ie.resetBytes(),M.pooled)V?M.inUse=!1:ln.get(e)===M&&xn(e);else{for(const oe of M.buffers)oe.destroy();M.buffers.length=0}},je.gpuBytes=()=>M.bytes+ie.getBytes(),je.__passCategories=[],je.__coneInfo=()=>({paddedVox:P,actMiB:g/1048576,mode:"LowMem128"}),je.kernels="v4-int8",je})}const yo=!0;function _s(o,i,r){return we(this,arguments,function*(e,t,n,s={}){var Wt,qt,dt,Qe,ve,Se;const a=t instanceof Uint8Array?t:new Uint8Array(t),c=Ys(a.buffer.slice(a.byteOffset,a.byteOffset+a.byteLength)),l=Ks(c);s!=null&&s.classifierBias&&l.classifier&&(l.classifier.bias=Float32Array.from(s.classifierBias));const f=fs(s),g=(s==null?void 0:s.dilations)||(f==null?void 0:f.dilations)||(l.convs.length===25?[16,8,4,2,1,16,8,4,2,1,16,8,4,2,1,16,8,4,2,1,16,8,4,2,1]:l.convs.length===9?[1,2,4,8,16,8,4,2,1]:Js),d=(s==null?void 0:s.activation)||(f==null?void 0:f.activation)||(l.affines.length||l.convs.length>=13?"gelu_tanh":"relu"),u=l.convs[0].outC,p=u>8?Math.ceil(u/8)*8:Math.ceil(u/4)*4,m=Zs(l,{nx:C,ny:C,nz:C,cs:p,activation:d,dilations:g}),v=Ur(a,l,m,s),k=(s==null?void 0:s.outputType)==="probability"?Mr(s,m.nclass):null,_=!!((qt=(Wt=e.features)==null?void 0:Wt.has)!=null&&qt.call(Wt,"shader-f16"))&&!(s!=null&&s.disableF16),h=e.__adapterInfo||e.adapterInfo||{},w=!!((Qe=(dt=e.features)==null?void 0:dt.has)!=null&&Qe.call(dt,"subgroups"))&&h.subgroupMinSize===32&&h.subgroupMaxSize===32&&!(s!=null&&s.disableSubgroups),S=C*C*C,b=k?S*4:S,P=m.cs>=16,z=P?m.cs/2:m.cs,$=C*C*z*_t*4,y=C*C*z*Pt*4,G=e.limits||{},M=Math.min((ve=G.maxStorageBufferBindingSize)!=null?ve:1/0,(Se=G.maxBufferSize)!=null?Se:1/0),A=ro(e,m,s);if((s!=null&&s.forceLowMem128||A||$>M||b>M)&&m.cs>=8&&m.cs%4===0)return qr(e,m,v,_,w,s,k);if($>M||b>M){const ne=Math.max($,b)>>>20;throw new Error(`meshnet_fast_v4: buffer (${ne} MiB) exceeds device limit (${M>>>20} MiB)`)}const T=oo(e,s),U=wo({cs:m.cs,chan:m.chan,nclass:m.nclass,clsK4:v.clsK4,dilations:m.dilations,activation:m.activation,norm:m.norm,hasF16:_,hasSubgroups32:w,splitHalves:P,probCfg:k,chunkableStd:T});console.log(`[WebGPU-V4] ${m.chan}ch(cs=${m.cs})/${m.nclass}cls (${m.dilations.length} convs, ${m.activation}, norm=${m.norm}${k?", prob=3":""}) | ${_?"f16+sterbenz":"f32"} | ${w?"subgroups32":"shared-8KiB"} | ZYCX-pad80 | maxBuf=${(Math.max($,b)/1048576).toFixed(1)} MiB`);const B=GPUBufferUsage.STORAGE,E=GPUBufferUsage.COPY_DST,W=GPUBufferUsage.COPY_SRC,ee=C*C*pn,ae=ee*(_?2:4),I=Un*m.cs*16,q=Qs*m.cs*16,N=(m.cs*2+4)*16,ie=_?Math.ceil(U.totalWEffVec4s/2)*16:U.totalWEffVec4s*16,O=`std|${m.cs}|${P?1:0}|${_?1:0}|${b}`,j=uo(e,O,()=>{const ne=[],J=On(e,ne),Te=J.alloc,Ke={inpBuf:Te(ae,B|E|W),act8_0:Te($,B|E|W),act8_1:Te(P?$:16,B|E|W),y8_0:Te(y,B|E|W),y8_1:Te(P?y:16,B|E|W),momMainBuf:Te(I,B),momExtBuf:Te(q,B),momStatsBuf:Te(N,B),labels8Buf:Te(b,B|E|W),readbackBuf:Te(b,GPUBufferUsage.MAP_READ|E)};return{buffers:ne,named:Ke,bytes:J.getBytes()}}),{inpBuf:$e,act8_0:Ae,act8_1:Re,y8_0:ke,y8_1:te,momMainBuf:se,momExtBuf:R,momStatsBuf:K,labels8Buf:D,readbackBuf:le}=j.named,Ge=[],Fe=On(e,Ge),pe=Fe.alloc,be=pe(_?v.wF16.byteLength:v.wF32.byteLength,B|E),Z=pe(v.qmetaF32.byteLength,B|E),We=pe(ie,U.useUniformWeff?B|GPUBufferUsage.UNIFORM:B),X=m.dilations.length,Ee=m.norm==="gn"&&!(s!=null&&s.disableConeSkip),st=Array.from({length:X},()=>pe(Ee?Xe*4:16,B|E)),Ne=Array.from({length:X-1},()=>pe(Ee?(Xe+C*C)*4:16,B|E)),rt=pe(Ee?Xe*4:16,B|E),at=pe(16,GPUBufferUsage.UNIFORM|E),it=pe(16,GPUBufferUsage.UNIFORM|E),bt=Array.from({length:X},()=>pe(48,GPUBufferUsage.UNIFORM|E)),Le=Array.from({length:X-1},()=>pe(16,GPUBufferUsage.UNIFORM|E)),Je=Math.max(256,G.minUniformBufferOffsetAlignment||256),ot=Je>>>2,pt=U.chunkableStd?Math.max(1,(X-1)*Kn):0,mt=U.chunkableStd?pe(pt*Je,GPUBufferUsage.UNIFORM|E):null,ht=U.chunkableStd?new Uint32Array(pt*ot):null,Gt=U.chunkableStd?null:Array.from({length:X},()=>pe(16,GPUBufferUsage.UNIFORM|E));e.queue.writeBuffer(be,0,_?v.wF16:v.wF32),e.queue.writeBuffer(Z,0,v.qmetaF32);const Ct=Array.from(new Set(m.dilations.slice(1)));let H;try{H=yield mo(e,m,v,_,w,P,k,U,Ct)}catch(ne){for(const J of Ge)J.destroy();if(Ge.length=0,j.pooled)ln.get(e)===j&&xn(e);else{for(const J of j.buffers)J.destroy();j.buffers.length=0}throw ne}const{pInit:Nt,pMomFin:Ut,pPrepW:Dt,pNorm:zt,pNormHalo:x,pCls:F,pConv0:L,convPipes:ue}=H,Q=(ne,J)=>e.createBindGroup({layout:ne,entries:J.map((Te,Ke)=>({binding:Ke,resource:Te&&Te.buffer?Te:{buffer:Te}}))}),Ue=Q(Nt.bgl,[Ae,Re]);{const ne=e.createCommandEncoder(),J=ne.beginComputePass();J.setPipeline(Nt.pipe),J.setBindGroup(0,Ue),J.dispatchWorkgroups(1,C,C),J.end(),e.queue.submit([ne.finish()])}const me=(U.halfPass0?L.lo:L.main).bgl,he=Q(me,[$e,ke,te,be,Z,se,R,st[0],at]),Y=Q(F.bgl,[ke,te,be,Z,se,K,D,rt,it]),Be=!!(k&&P&&$>=b&&y>=b),ye=Be?pe(16,GPUBufferUsage.UNIFORM|E):null,qe=Be?Q(F.bgl,[ke,te,be,Z,se,K,D,rt,ye]):null,je=ho({device:e,hasF16:_,nvox:S,outBufBytes:b,inpBuf:$e,act8_0:Ae,labels8Buf:D,readbackBuf:le,pInit:Nt,bgInit:Ue,pCls:F,bgCls:Y,clsUbo:it,packed:v,modelEntry:s,probCfg:k,canGpuProb:Be,probSlots:Be?{clsUbo1:ye,bgCls1:qe,pass0HoldBuf:Ae,y0:ke,y1:te,b:Re,sup:Ae}:null,ownedBuffers:Ge,mkBuf:pe}),Ce=bt.map((ne,J)=>Q(Ut.bgl,[be,Z,se,R,K,We,st[J],ne])),de=Le.map((ne,J)=>Q(zt.bgl,[Ae,Re,ke,te,se,R,K,Ne[J],ne])),V=U.chunkableStd?{buffer:mt,offset:0,size:32}:null,oe=Array.from({length:X},(ne,J)=>{if(J===0)return null;const Te=m.dilations[J],Ke=U.halfPassConv?ue[Te].lo:ue[Te].main;return Q(Ke.bgl,[Ae,Re,ke,te,se,R,We,st[J],U.chunkableStd?V:Gt[J]])}),ge=(ne,J,Te,Ke,kt,Ve)=>{const Ze=ne*ot;ht[Ze]=J?1:0,ht[Ze+1]=Te,ht[Ze+2]=Ke?1:0,ht[Ze+3]=0,ht[Ze+4]=kt,ht[Ze+5]=Ve,ht[Ze+6]=0,ht[Ze+7]=0},De=(ne,J,Te,Ke,kt,Ve,Ze,Pe)=>{if(!(Ve<=0&&Ze<=0))if(U.halfPassConv){{const re=ne.beginComputePass();Ke?re.setBindGroup(0,Te,Ke):re.setBindGroup(0,Te),Ve>0&&(re.setPipeline(J.lo.pipe),re.dispatchWorkgroups(1,kt,Ve)),Ze>0&&(re.setPipeline(J.extLo.pipe),re.dispatchWorkgroups(1,1,Ze)),re.end(),Pe.push("convHidden")}{const re=ne.beginComputePass();Ke?re.setBindGroup(0,Te,Ke):re.setBindGroup(0,Te),Ve>0&&(re.setPipeline(J.hi.pipe),re.dispatchWorkgroups(1,kt,Ve)),Ze>0&&(re.setPipeline(J.extHi.pipe),re.dispatchWorkgroups(1,1,Ze)),re.end(),Pe.push("convHidden")}}else{const re=ne.beginComputePass();Ke?re.setBindGroup(0,Te,Ke):re.setBindGroup(0,Te),Ve>0&&(re.setPipeline(J.main.pipe),re.dispatchWorkgroups(1,kt,Ve)),Ze>0&&(re.setPipeline(J.ext.pipe),re.dispatchWorkgroups(1,1,Ze)),re.end(),Pe.push("convHidden")}},lt=_?new Uint16Array(ee):new Float32Array(ee),Oe=new Uint8Array(C*C),Ie=new Uint32Array(Xe),Me=new Uint32Array(Xe+C*C),ce=new Uint32Array(12),It=new Float32Array(ce.buffer),et=new Uint32Array(4);function Bt(ne,J){return we(this,null,function*(){if(ne.length!==S)throw new Error(`meshnet_fast_v4 expected ${S} voxels, got ${ne.length}`);const Te=m.norm==="gn"&&!(s!=null&&s.disableConeSkip),Ke=yield je.prepareInput({volume:ne,ioOpts:J,useCone:Te,padInputHost:lt,headRowHost:Oe,hasF16Flag:_}),kt=Ke.info,Ve=go(Oe,kt,m.dilations,Te);let Ze=so(e,s);const Pe=[];if(Ze==="single"&&!U.chunkableStd){const _e=e.createCommandEncoder();Ke.runPrePasses(_e,Pe),Ve.clsSkipped&&(_e.clearBuffer(D,0,b),Ve.clsStrips.length>0&&e.queue.writeBuffer(rt,0,Ve.clsStrips));for(let fe=0;fe<X;fe++){const xe=Ve.layers[fe],yt=xe.isFull?Xe:xe.mainStrips.length,Vt=xe.isFull||!xe.extStrips?0:xe.extStrips.length,wt=xe.nMomExt||0,vt=xe.haloRows?xe.haloRows.length:0,ut=xe.isFull?Xe:xe.normStrips?xe.normStrips.length:0;if(!xe.isFull&&(yt>0||Vt>0)&&(yt>0&&Ie.set(xe.mainStrips,0),Vt>0&&Ie.set(xe.extStrips,yt),e.queue.writeBuffer(st[fe],0,Ie.subarray(0,yt+Vt))),fe===0){const nt=xe.isFull?64:1,ze=xe.isFull?C:yt,Mt=!!(xe.bgStrip&&vt>0);if(et[0]=xe.isFull?1:0,et[1]=xe.bgStrip?xe.bgStrip.yWg*4:0,et[2]=xe.bgStrip?xe.bgStrip.z:0,et[3]=0,e.queue.writeBuffer(at,0,et),U.halfPass0){{const Ye=_e.beginComputePass();Ye.setBindGroup(0,he),ze>0&&(Ye.setPipeline(L.lo.pipe),Ye.dispatchWorkgroups(1,nt,ze)),Mt&&(Ye.setPipeline(L.bgLo.pipe),Ye.dispatchWorkgroups(1,1,1)),Ye.end(),Pe.push("conv0")}{const Ye=_e.beginComputePass();Ye.setBindGroup(0,he),ze>0&&(Ye.setPipeline(L.hi.pipe),Ye.dispatchWorkgroups(1,nt,ze)),Mt&&(Ye.setPipeline(L.bgHi.pipe),Ye.dispatchWorkgroups(1,1,1)),Ye.end(),Pe.push("conv0")}}else{const Ye=_e.beginComputePass();Ye.setBindGroup(0,he),ze>0&&(Ye.setPipeline(L.main.pipe),Ye.dispatchWorkgroups(1,nt,ze)),Mt&&(Ye.setPipeline(L.bg.pipe),Ye.dispatchWorkgroups(1,1,1)),Ye.end(),Pe.push("conv0")}}else{const nt=m.dilations[fe],ze=ue[nt],Mt=oe[fe],Ye=xe.isFull?64:1,Wn=xe.isFull?C:yt,gn=xe.mode==="rpure"&&vt>0||xe.mode==="bwd"&&fe+1<X;et[0]=xe.isFull?1:0,et[1]=yt,et[2]=gn?1:0,et[3]=0,e.queue.writeBuffer(Gt[fe],0,et),De(_e,ze,Mt,null,Ye,Wn,Vt,Pe)}const xt=fe+1<X?v.w0Vec4s+fe*v.hiddenVec4PerLayer:0;ce[0]=fe*v.metaStride,ce[1]=xt,ce[2]=(fe+1)*v.metaStride,ce[3]=fe+1<X?1:0,ce[4]=fe===0?1:0,ce[5]=xe.isFull?1:0,ce[6]=yt,ce[7]=wt*8,It[8]=xe.extWeight||0,ce[9]=0,ce[10]=0,ce[11]=0,e.queue.writeBuffer(bt[fe],0,ce);{const nt=_e.beginComputePass();nt.setBindGroup(0,Ce[fe]),nt.setPipeline(Ut.pipe),nt.dispatchWorkgroups(m.cs,1,1),nt.end(),Pe.push("momentsPrep")}if(fe+1<X){{const ze=_e.beginComputePass();ze.setBindGroup(0,Ce[fe]),ze.setPipeline(Dt.pipe),ze.dispatchWorkgroups(1,1,1),ze.end(),Pe.push("momentsPrep")}const nt=xe.isFull?0:ut;if((nt>0||vt>0)&&(nt>0&&Me.set(xe.normStrips,0),vt>0&&Me.set(xe.haloRows,nt),e.queue.writeBuffer(Ne[fe],0,Me.subarray(0,nt+vt))),et[0]=xe.isFull?1:0,et[1]=xe.bgStrip?xe.bgStrip.z*C+xe.bgStrip.yWg*4:0,et[2]=nt,et[3]=vt,e.queue.writeBuffer(Le[fe],0,et),xe.isFull||ut>0||vt>0){const ze=_e.beginComputePass();ze.setBindGroup(0,de[fe]),(xe.isFull||ut>0)&&(ze.setPipeline(zt.pipe),ze.dispatchWorkgroups(1,xe.isFull?64:1,xe.isFull?C:ut)),vt>0&&(ze.setPipeline(x.pipe),ze.dispatchWorkgroups(1,Math.ceil(vt/4),1)),ze.end(),Pe.push("normHalo")}}}return Bt.__passCategories=Pe,je.finishAndReadback({enc:_e,schedule:Ve,passCategories:Pe,u4Tmp:et,ioOpts:J})}const re=typeof(J==null?void 0:J.onProgress)=="function"?J.onProgress:null,Ft=ao(Ve,X);let ft=0,tt=-1,He=e.__v4MsPerStrip||.12;const St=_e=>{if(!re)return;const fe=Math.min(.99,ft/Ft);let xe="";_e>=0&&_e!==tt&&(tt=_e,xe=`Layer ${_e+1}/${X}`),re(fe,xe)};let ct=e.createCommandEncoder();Ke.runPrePasses(ct,Pe),Ve.clsSkipped&&(ct.clearBuffer(D,0,b),Ve.clsStrips.length>0&&e.queue.writeBuffer(rt,0,Ve.clsStrips));for(let _e=0;_e<X;_e++){const fe=Ve.layers[_e],xe=fe.isFull?Xe:fe.mainStrips.length,yt=fe.isFull||!fe.extStrips?0:fe.extStrips.length,Vt=fe.nMomExt||0,wt=fe.haloRows?fe.haloRows.length:0,vt=fe.isFull?Xe:fe.normStrips?fe.normStrips.length:0,ut=ms(fe,_e,X);if(!fe.isFull&&(xe>0||yt>0)&&(xe>0&&Ie.set(fe.mainStrips,0),yt>0&&Ie.set(fe.extStrips,xe),e.queue.writeBuffer(st[_e],0,Ie.subarray(0,xe+yt))),_e===0){const nt=fe.isFull?64:1,ze=fe.isFull?C:xe,Mt=!!(fe.bgStrip&&wt>0);if(et[0]=fe.isFull?1:0,et[1]=fe.bgStrip?fe.bgStrip.yWg*4:0,et[2]=fe.bgStrip?fe.bgStrip.z:0,et[3]=0,e.queue.writeBuffer(at,0,et),U.halfPass0){{const Ye=ct.beginComputePass();Ye.setBindGroup(0,he),ze>0&&(Ye.setPipeline(L.lo.pipe),Ye.dispatchWorkgroups(1,nt,ze)),Mt&&(Ye.setPipeline(L.bgLo.pipe),Ye.dispatchWorkgroups(1,1,1)),Ye.end(),Pe.push("conv0")}{const Ye=ct.beginComputePass();Ye.setBindGroup(0,he),ze>0&&(Ye.setPipeline(L.hi.pipe),Ye.dispatchWorkgroups(1,nt,ze)),Mt&&(Ye.setPipeline(L.bgHi.pipe),Ye.dispatchWorkgroups(1,1,1)),Ye.end(),Pe.push("conv0")}}else{const Ye=ct.beginComputePass();Ye.setBindGroup(0,he),ze>0&&(Ye.setPipeline(L.main.pipe),Ye.dispatchWorkgroups(1,nt,ze)),Mt&&(Ye.setPipeline(L.bg.pipe),Ye.dispatchWorkgroups(1,1,1)),Ye.end(),Pe.push("conv0")}}else{const nt=m.dilations[_e],ze=ue[nt],Mt=oe[_e],Ye=fe.isFull?64:1,Wn=fe.isFull?C:xe,gn=fe.mode==="rpure"&&wt>0||fe.mode==="bwd"&&_e+1<X;if(!U.chunkableStd)et[0]=fe.isFull?1:0,et[1]=xe,et[2]=gn?1:0,et[3]=0,e.queue.writeBuffer(Gt[_e],0,et),De(ct,ze,Mt,null,Ye,Wn,yt,Pe);else if(Ze==="pipelined"||Ze==="single"){const Kt=(_e-1)*Kn;ge(Kt,fe.isFull,xe,gn,0,0),e.queue.writeBuffer(mt,Kt*Je,ht.subarray(Kt*ot,(Kt+1)*ot)),De(ct,ze,Mt,[Kt*Je],Ye,Wn,yt,Pe)}else{const Kt=(_e-1)*Kn,Dn=Ze==="calibrate"?1024:Math.max(256,Math.min(4096,Math.round(to/Math.max(.005,He)))),$n=[];let zn=0;if(fe.isFull){const nn=Math.max(4,Math.min(64,Math.round(Dn/64)));for(let Ht=0;Ht<C;Ht+=nn){const Tt=Math.min(nn,C-Ht),Zt=Kt+zn++;ge(Zt,!0,xe,gn,Ht,0),$n.push({slotIdx:Zt,mainY:64,mainCountZ:Tt,extCountZ:0,strips:Tt*64})}}else{const nn=Math.max(256,Dn);for(let Tt=0;Tt<xe;Tt+=nn){const Zt=Math.min(nn,xe-Tt),sn=Kt+zn++;ge(sn,!1,xe,gn,Tt,0),$n.push({slotIdx:sn,mainY:1,mainCountZ:Zt,extCountZ:0,strips:Zt})}const Ht=Math.max(256,Dn);for(let Tt=0;Tt<yt;Tt+=Ht){const Zt=Math.min(Ht,yt-Tt),sn=Kt+zn++;ge(sn,!1,xe,gn,0,Tt),$n.push({slotIdx:sn,mainY:1,mainCountZ:0,extCountZ:Zt,strips:Zt})}}zn>0&&e.queue.writeBuffer(mt,Kt*Je,ht.subarray(Kt*ot,(Kt+zn)*ot));let en=0;for(let nn=0;nn<$n.length;nn++){const Ht=$n[nn];if(De(ct,ze,Mt,[Ht.slotIdx*Je],Ht.mainY,Ht.mainCountZ,Ht.extCountZ,Pe),Ze==="pipelined")continue;en+=Ht.strips;const Tt=nn===$n.length-1;if(Ze==="calibrate"&&(en>=512||Tt&&en>0)){const Zt=performance.now();e.queue.submit([ct.finish()]),yield e.queue.onSubmittedWorkDone();const sn=performance.now()-Zt;if(ct=e.createCommandEncoder(),ft+=en,en>=512){He=sn/en;const Vn=He*Xe;e.__v4WinCalibrated=!0,e.__v4MsPerStrip=He,Vn<eo?(e.__v4WinFast=!0,Ze="pipelined",console.log(`[WebGPU-V4] Windows GPU calibration: estFullLayer=${Vn.toFixed(1)}ms -> unthrottled pipelined mode`)):(e.__v4WinFast=!1,Ze="paced",console.log(`[WebGPU-V4] Windows GPU calibration: estFullLayer=${Vn.toFixed(1)}ms -> TDR-safe paced mode`),St(_e),yield yn())}en=0}else if(Ze==="paced"){const Zt=performance.now();e.queue.submit([ct.finish()]),yield e.queue.onSubmittedWorkDone();const sn=performance.now()-Zt;ct=e.createCommandEncoder(),en>=256&&sn>.2&&(He=.7*He+.3*(sn/en),e.__v4MsPerStrip=He),ft+=en,en=0,St(_e),yield yn()}}}}const xt=_e+1<X?v.w0Vec4s+_e*v.hiddenVec4PerLayer:0;ce[0]=_e*v.metaStride,ce[1]=xt,ce[2]=(_e+1)*v.metaStride,ce[3]=_e+1<X?1:0,ce[4]=_e===0?1:0,ce[5]=fe.isFull?1:0,ce[6]=xe,ce[7]=Vt*8,It[8]=fe.extWeight||0,ce[9]=0,ce[10]=0,ce[11]=0,e.queue.writeBuffer(bt[_e],0,ce);{const nt=ct.beginComputePass();nt.setBindGroup(0,Ce[_e]),nt.setPipeline(Ut.pipe),nt.dispatchWorkgroups(m.cs,1,1),nt.end(),Pe.push("momentsPrep")}if(_e+1<X){{const ze=ct.beginComputePass();ze.setBindGroup(0,Ce[_e]),ze.setPipeline(Dt.pipe),ze.dispatchWorkgroups(1,1,1),ze.end(),Pe.push("momentsPrep")}const nt=fe.isFull?0:vt;if((nt>0||wt>0)&&(nt>0&&Me.set(fe.normStrips,0),wt>0&&Me.set(fe.haloRows,nt),e.queue.writeBuffer(Ne[_e],0,Me.subarray(0,nt+wt))),et[0]=fe.isFull?1:0,et[1]=fe.bgStrip?fe.bgStrip.z*C+fe.bgStrip.yWg*4:0,et[2]=nt,et[3]=wt,e.queue.writeBuffer(Le[_e],0,et),fe.isFull||vt>0||wt>0){const ze=ct.beginComputePass();ze.setBindGroup(0,de[_e]),(fe.isFull||vt>0)&&(ze.setPipeline(zt.pipe),ze.dispatchWorkgroups(1,fe.isFull?64:1,fe.isFull?C:vt)),wt>0&&(ze.setPipeline(x.pipe),ze.dispatchWorkgroups(1,Math.ceil(wt/4),1)),ze.end(),Pe.push("normHalo")}}if(Ze==="pipelined")e.queue.submit([ct.finish()]),ct=e.createCommandEncoder();else if(Ze!=="single"){const nt=performance.now();e.queue.submit([ct.finish()]),yield e.queue.onSubmittedWorkDone();const ze=performance.now()-nt;ct=e.createCommandEncoder(),ft+=(_e===0||!U.chunkableStd?ut.convWork:0)+ut.normWork,_e===0&&Ze==="calibrate"&&ze>=90&&(e.__v4WinCalibrated=!0,e.__v4WinFast=!1,Ze="paced",console.log(`[WebGPU-V4] Windows GPU calibration (conv0=${ze.toFixed(1)}ms) -> TDR-safe paced mode`)),Ze==="paced"&&(St(_e),(_e===0||!U.chunkableStd||ze>=30)&&(yield yn()))}}return Bt.__passCategories=Pe,je.finishAndReadback({enc:ct,schedule:Ve,passCategories:Pe,u4Tmp:et,ioOpts:J,paced:Ze==="paced",onProgress:re})})}return je.warmupIoPipelines(),Bt.dispose=({keepSharedWorkspace:ne=!1}={})=>{je.dispose();for(const J of Ge)J.destroy();if(Ge.length=0,Fe.resetBytes(),j.pooled)ne?j.inUse=!1:ln.get(e)===j&&xn(e);else{for(const J of j.buffers)J.destroy();j.buffers.length=0}},Bt.gpuBytes=()=>j.bytes+Fe.getBytes(),Bt.__passCategories=[],Bt.__coneInfo=()=>({paddedVox:ee,actMiB:$/1048576}),Bt.kernels="v4-int8",Bt})}function bs(e){return we(this,null,function*(){var c,l,f,g,d,u;if(!e)return;const t=!!((l=(c=e.features)==null?void 0:c.has)!=null&&l.call(c,"shader-f16")),n=e.__adapterInfo||e.adapterInfo||{},s=!!((g=(f=e.features)==null?void 0:f.has)!=null&&g.call(f,"subgroups"))&&n.subgroupMinSize===32&&n.subgroupMaxSize===32,o=e.limits||{},i=Math.min((d=o.maxStorageBufferBindingSize)!=null?d:1/0,(u=o.maxBufferSize)!=null?u:1/0),r=[{chan:24,cs:24,nclass:0,dilations:Js,activation:"gelu_tanh",norm:"gn"},{chan:16,cs:16,nclass:0,dilations:[16,8,4,2,1],activation:"gelu_tanh",norm:"gn"}],a=[an(e,t?"prep_in_u8_f16":"prep_in_u8_f32",()=>is(!0,t),"main",["read-only-storage","storage","uniform"]),an(e,"transpose_u8_v4",co,"main",["read-only-storage","storage"])];for(const p of r){const m=p.cs>=16,v=m?p.cs/2:p.cs,_=C*C*v*_t*4>i||ro(e,p,null),h=Array.from(new Set(p.dilations.slice(1)));if(_){const w=vo({cs:p.cs,chan:p.chan,nclass:0,clsK4:0,dilations:p.dilations,activation:p.activation,norm:p.norm,hasF16:t,hasSubgroups32:s,numConvs:p.dilations.length,probCfg:null});a.push(po(e,p,null,t,s,null,w,h,{includeCls:!1}))}else{const w=oo(e,null),S=wo({cs:p.cs,chan:p.chan,nclass:0,clsK4:0,dilations:p.dilations,activation:p.activation,norm:p.norm,hasF16:t,hasSubgroups32:s,splitHalves:m,probCfg:null,chunkableStd:w});a.push(mo(e,p,null,t,s,m,null,S,h,{includeCls:!1}))}}yield Promise.all(a)})}const Tr=(e,t)=>we(null,null,function*(){const n=yield fetch(t).then(s=>s.arrayBuffer());return _s(e,new Uint8Array(n))}),xo=!0,Er={load:Tr,setupNet:_s,warmupV4CorePipelines:bs,supportsF32Fallback:yo,supportsGpuNativeIO:xo},ls=Object.freeze(Object.defineProperty({__proto__:null,default:Er,releaseV4Workspace:xn,setupNet:_s,supportsF32Fallback:yo,supportsGpuNativeIO:xo,warmupV4CorePipelines:bs},Symbol.toStringTag,{value:"Module"}));function Or(){var e;try{if(new URLSearchParams(((e=globalThis.location)==null?void 0:e.search)||"").get("webgpuKernels")==="tinygrad")return"disabled by ?webgpuKernels=tinygrad"}catch(t){}return null}const Cn=new Set(["meshnet_fast_v4","dkatlas24_int8","mindmap24_int8","model16chan18cls_int8","mindgrab_int8"]);function Nr(e){return Cn.has(e)}const vn=Object.assign({"./webgpu_runners/dkatlas24_f32_runner.js":()=>gt(()=>import("./dkatlas24_f32_runner-CdBMa7VZ.js"),[],import.meta.url),"./webgpu_runners/dkatlas24_int8_v3_runner.js":()=>gt(()=>import("./dkatlas24_int8_v3_runner-FSAaw7_B.js"),__vite__mapDeps([0,1,2,3]),import.meta.url),"./webgpu_runners/dkatlas24_runner.js":()=>gt(()=>import("./dkatlas24_runner-BkVMX0Bk.js"),[],import.meta.url),"./webgpu_runners/dkatlas24_synth_f32_runner.js":()=>gt(()=>import("./dkatlas24_synth_f32_runner-Bb7lxqr0.js"),[],import.meta.url),"./webgpu_runners/dkatlas24_synth_runner.js":()=>gt(()=>import("./dkatlas24_synth_runner-5rLWbXWF.js"),[],import.meta.url),"./webgpu_runners/manual_mindgrab_runner.js":()=>gt(()=>import("./manual_mindgrab_runner-DDusGIor.js"),[],import.meta.url),"./webgpu_runners/mindgrab_runner.js":()=>gt(()=>import("./mindgrab_runner-B-UQtXej.js"),[],import.meta.url),"./webgpu_runners/mindgrab_tta_runner.js":()=>gt(()=>import("./mindgrab_tta_runner-Ct42O8D2.js"),[],import.meta.url),"./webgpu_runners/model16chan18cls_f32_runner.js":()=>gt(()=>import("./model16chan18cls_f32_runner-B5FaUMez.js"),[],import.meta.url),"./webgpu_runners/model16chan18cls_runner.js":()=>gt(()=>import("./model16chan18cls_runner-aMK3m7Gj.js"),[],import.meta.url),"./webgpu_runners/model21_104class_runner.js":()=>gt(()=>import("./model21_104class_runner-DuOJ6qrl.js"),[],import.meta.url),"./webgpu_runners/model21_f32_runner.js":()=>gt(()=>import("./model21_f32_runner-yTUV9LXd.js"),[],import.meta.url),"./webgpu_runners/model21_tta_runner.js":()=>gt(()=>import("./model21_tta_runner-e7-76trO.js"),[],import.meta.url),"./webgpu_runners/model21chan18cls_runner.js":()=>gt(()=>import("./model21chan18cls_runner-DvLOnZMy.js"),[],import.meta.url),"./webgpu_runners/model24chan18cls_gdice_prio_probability_runner.js":()=>gt(()=>import("./model24chan18cls_gdice_prio_probability_runner-BHqpfuCi.js"),[],import.meta.url),"./webgpu_runners/model24chan18cls_gdice_prio_runner.js":()=>gt(()=>import("./model24chan18cls_gdice_prio_runner-B5cN26gD.js"),[],import.meta.url),"./webgpu_runners/model30chan18cls_runner.js":()=>gt(()=>import("./model30chan18cls_runner-C2mBz0G4.js"),[],import.meta.url),"./webgpu_runners/model30chan18cls_tta_runner.js":()=>gt(()=>import("./model30chan18cls_tta_runner-v8CMqLh5.js"),[],import.meta.url),"./webgpu_runners/model30chan50cls_f32_runner.js":()=>gt(()=>import("./model30chan50cls_f32_runner-DQ53FZ3-.js"),[],import.meta.url),"./webgpu_runners/model30chan50cls_runner.js":()=>gt(()=>import("./model30chan50cls_runner-D72-rlcG.js"),[],import.meta.url),"./webgpu_runners/model30chan50cls_tta_runner.js":()=>gt(()=>import("./model30chan50cls_tta_runner-CliMlbAZ.js"),[],import.meta.url),"./webgpu_runners/model32chan18cls_runner.js":()=>gt(()=>import("./model32chan18cls_runner-cowyou29.js"),[],import.meta.url),"./webgpu_runners/model5_gw_ae_runner.js":()=>gt(()=>import("./model5_gw_ae_runner-jI57fGIB.js"),[],import.meta.url),"./webgpu_runners/model5_runner.js":()=>gt(()=>import("./model5_runner-BiUlzJBp.js"),[],import.meta.url),"./webgpu_runners/model5_tta_runner.js":()=>gt(()=>import("./model5_tta_runner-DjIMLwlR.js"),[],import.meta.url),"./webgpu_runners/model6chan3cls_runner.js":()=>gt(()=>import("./model6chan3cls_runner-wSGRZpe5.js"),[],import.meta.url),"./webgpu_runners/robust_subcortical_runner.js":()=>gt(()=>import("./robust_subcortical_runner-D74Uw6At.js"),[],import.meta.url),"./webgpu_runners/robust_subcortical_tta_runner.js":()=>gt(()=>import("./robust_subcortical_tta_runner-CkwA2dHP.js"),[],import.meta.url)});function Dr(){const e=Object.keys(vn).map(t=>{const n=t.match(/\/([^\/]+)_runner\.js$/);return n?n[1]:null}).filter(Boolean);return Array.from(new Set([...Cn,...e]))}function Vr(e){if(Cn.has(e))return()=>we(null,null,function*(){return ls});const t=`./webgpu_runners/${e}_runner.js`;if(vn[t])return vn[t];const n=e.toLowerCase();for(const s of Cn)if(s.toLowerCase()===n)return()=>we(null,null,function*(){return ls});for(const[s,o]of Object.entries(vn))if(s.toLowerCase().includes(`/${n}_runner.js`))return o;for(const[s,o]of Object.entries(vn))if(s.includes(e))return o;return null}function Hr(e){if(Cn.has(e))return!0;const t=`./webgpu_runners/${e}_runner.js`;if(vn[t])return!0;const n=e.toLowerCase();for(const o of Cn)if(o.toLowerCase()===n)return!0;const s=`/${n}_runner.js`;return Object.keys(vn).some(o=>o.toLowerCase().endsWith(s))}function jr(e,t){if(typeof Float16Array=="undefined")throw new Error("Float16Array unavailable: cannot cast fp32 master weights to fp16.");const n=new DataView(e.buffer,e.byteOffset,e.byteLength),s=Number(n.getBigUint64(0,!0)),o=JSON.parse(new TextDecoder("utf8").decode(e.subarray(8,8+s))),i=8+s;if(!Object.entries(o).some(([p,m])=>p!=="__metadata__"&&m.dtype==="F32"))return e;const a={},c=[];let l=0;for(const[p,m]of Object.entries(o)){if(p==="__metadata__"){a[p]=m;continue}const[v,k]=m.data_offsets,_=e.subarray(i+v,i+k);let h,w;if(m.dtype==="F32"){const S=new Float32Array(_.slice().buffer),b=new Float16Array(S);h=new Uint8Array(b.buffer),w="F16"}else h=_,w=m.dtype;a[p]={dtype:w,shape:m.shape,data_offsets:[l,l+h.byteLength]},c.push(h),l+=h.byteLength}const f=new TextEncoder().encode(JSON.stringify(a)),g=(8-f.byteLength%8)%8,d=new Uint8Array(8+f.byteLength+g+l);new DataView(d.buffer).setBigUint64(0,BigInt(f.byteLength+g),!0),d.set(f,8),d.fill(32,8+f.byteLength,8+f.byteLength+g);let u=8+f.byteLength+g;for(const p of c)d.set(p,u),u+=p.byteLength;return console.log("[WebGPU] Cast fp32 master weights -> fp16."),d}function Xr(e,t){try{const n=r=>!!(e.features&&e.features.has&&e.features.has(r)),s=e.limits||{},o=typeof navigator!="undefined"&&navigator.userAgent||"unknown",i=/Safari/.test(o)&&!/Chrome|Chromium|Android/.test(o);console.log("[SAFARI-DEBUG] ===== WebGPU device capabilities ====="),console.log("[SAFARI-DEBUG] model:",(t==null?void 0:t.modelName)||(t==null?void 0:t.webgpu_runner)||"(unknown)"),console.log("[SAFARI-DEBUG] userAgent:",o,"| classified Safari:",i),console.log("[SAFARI-DEBUG] shader-f16:",n("shader-f16")),console.log("[SAFARI-DEBUG] features:",e.features?Array.from(e.features):"(none)"),console.log("[SAFARI-DEBUG] limits:",{maxBufferSize:s.maxBufferSize,maxStorageBufferBindingSize:s.maxStorageBufferBindingSize,maxComputeInvocationsPerWorkgroup:s.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:s.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:s.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:s.maxComputeWorkgroupSizeZ,maxComputeWorkgroupsPerDimension:s.maxComputeWorkgroupsPerDimension}),console.log("[SAFARI-DEBUG] BC_WEBGPU_DEBUG (logits readback):",typeof window!="undefined"&&!!window.BC_WEBGPU_DEBUG),console.log("[SAFARI-DEBUG] =======================================")}catch(n){console.warn("[SAFARI-DEBUG] capability dump failed:",n==null?void 0:n.message)}}function $o(){return typeof requestAnimationFrame!="function"?new Promise(e=>setTimeout(e,0)):new Promise(e=>{let t=!1;const n=()=>{t||(t=!0,e())},s=setTimeout(n,25);requestAnimationFrame(()=>{clearTimeout(s),setTimeout(n,0)})})}const Yr=6,Kr=4,bn=new Map,Qn=new Map,hn=new Map,mn=new WeakMap,Jn=new WeakSet;function Zr(e){return we(this,null,function*(){if(!(!e||Jn.has(e))){Jn.add(e);try{yield bs(e)}catch(t){Jn.delete(e),console.debug("[WebGPU] Background pipeline warmup skipped:",(t==null?void 0:t.message)||t)}}})}function So(e,{keepSharedWorkspace:t=!1}={}){var n;if(e)try{if(typeof((n=e.execute)==null?void 0:n.dispose)=="function")e.execute.dispose({keepSharedWorkspace:t});else if(e.ownedBuffers)for(const s of e.ownedBuffers)s.destroy()}catch(s){console.warn("[WebGPU] Failed to dispose cached runner buffers:",s)}}function Qr(e,t,n,s){var o,i,r,a,c,l,f,g,d,u,p,m,v,k,_,h,w,S,b;return JSON.stringify([e,t,n,(o=s.id)!=null?o:null,(i=s.numClasses)!=null?i:null,(r=s.outputType)!=null?r:null,(a=s.dilations)!=null?a:null,(c=s.activation)!=null?c:null,(l=s.quantize8Bit)!=null?l:null,(f=s.forceFP32)!=null?f:null,(g=s.disableF16)!=null?g:null,(d=s.disableSubgroups)!=null?d:null,(u=s.disableConeSkip)!=null?u:null,(p=s.forceLowMem128)!=null?p:null,(m=s.webgpuExecMode)!=null?m:null,(v=s.softmaxTemperature)!=null?v:null,(k=s.brainSupportTemperature)!=null?k:null,(_=s.brainSupportPower)!=null?_:null,(h=s.partialVolumeSigma)!=null?h:null,(w=s.probabilityGroups)!=null?w:null,(S=s.probabilityDisplay)!=null?S:null,(b=s.classifierBias)!=null?b:null])}function Is(e){const t=bn.get(e);if(t)return bn.delete(e),bn.set(e,t),Promise.resolve(t);const n=Qn.get(e);if(n)return n;const s=we(null,null,function*(){let o;try{const r=yield fetch(e);if(!r.ok)throw new Error(`HTTP ${r.status}: ${r.statusText}`);o=yield r.arrayBuffer()}catch(r){throw new Error(`Failed to load weights from '${e}': ${r.message}`)}const i=new Uint8Array(o);for(bn.set(e,i);bn.size>Yr;){const r=bn.keys().next().value;bn.delete(r)}return i}).finally(()=>{Qn.delete(e)});return Qn.set(e,s),s}function Jr(e,t,n,s){if(!n)return e;const o=hn.get(t);if(o)return hn.delete(t),hn.set(t,o),o;const i=jr(e);for(hn.set(t,i);hn.size>Kr;){const r=hn.keys().next().value;hn.delete(r)}return i}function us(e,t){return we(this,null,function*(){const n=[],s=e.createBuffer.bind(e);e.createBuffer=o=>{const i=s(o);return n.push(i),i};try{return{result:yield t(),buffers:n}}finally{e.createBuffer=s}})}function cs(e){let t=0;for(const n of e)t+=Number(n==null?void 0:n.size)||0;return t}function es(e){for(const t of e)try{t.destroy()}catch(n){}}function ea(e,t,n){return we(this,null,function*(){var S,b,P,z,$,y,G;const s=(S=Or())!=null?S:xr(e,t);let o=t.webgpu_runner,i=t.webgpu_safetensor;const r=!!(e.features&&e.features.has&&e.features.has("shader-f16"));let a=!1;s&&(t.forceFP32?(a=!0,console.log("[WebGPU] forceFP32: using fp32 runner and weights.")):!r&&Hr(`${o}_f32`)&&(a=!0,console.log("[WebGPU] shader-f16 not supported on this device -> auto-selecting fp32 runner and weights.")),a&&(o=`${o}_f32`,i=i.replace(".safetensors","_f32.safetensors")),t.enableTTA&&t.webgpuTTArunner&&(console.log("[WebGPU] TTA Enabled: Switching to TTA runner and weights."),o=`${o}_tta`,i=i.replace(".safetensors","_tta.safetensors")));const l=Qr(s?"runner":"native",s?o:"webgpu_native",i,t),f=mn.get(e);if(f&&f.runnerKey===l)return Rt($t({},f),{cacheHit:!0});const g=!!(s&&Nr(o));if(n("Loading model…",.1),f&&(mn.delete(e),So(f,{keepSharedWorkspace:g})),g||xn(e),Xr(e,t),s)console.log(`[WebGPU-native] not used for ${t.modelName||t.webgpu_runner}: ${s}`);else{let M=[];try{const A=yield Is(i),T=yield us(e,()=>Pr(e,A,n,t));M=T.buffers;const U=T.result;U.kernels="hand-written";const B={runnerKey:l,runnerName:"webgpu_native",weightsPath:i,execute:U,supportsGpuNativeIO:!1,ownedBuffers:M,gpuBytes:cs(M)};return mn.set(e,B),console.log("[WebGPU-native] Using hand-written WebGPU kernels."),Rt($t({},B),{cacheHit:!1})}catch(A){es(M),console.warn("[WebGPU-native] falling back to the tinygrad runner:",(A==null?void 0:A.message)||A)}}const d=g?()=>we(null,null,function*(){return ls}):Vr(o);if(!d){const M=Dr();throw new Error(`Runner '${o}' not found. Available runners: ${M.join(", ")||"none"}. Looking in: ./webgpu_runners/`)}const[u,p]=yield Promise.all([d(),Is(i)]);if(!u.setupNet&&!((b=u.default)!=null&&b.setupNet))throw new Error(`Runner module '${o}' doesn't export 'setupNet'. Exported keys: ${Object.keys(u).join(", ")}`);const m=!!((z=u.supportsF32Fallback)!=null?z:(P=u.default)!=null&&P.supportsF32Fallback),v=!!((y=u.supportsGpuNativeIO)!=null?y:($=u.default)!=null&&$.supportsGpuNativeIO);!a&&!r&&!m&&console.warn(`[WebGPU] shader-f16 not supported and no fp32 runner ('${o}_f32') available; the fp16 runner will likely fail and fall back to WebGL2.`);const _=Jr(p,i,!a&&!m),h=u.setupNet||((G=u.default)==null?void 0:G.setupNet);let w=[];try{const M=yield us(e,()=>h(e,_,n,t));w=M.buffers;const A=M.result;if(typeof A!="function")throw es(w),new Error(`setupNet for '${o}' didn't return a function. Returned type: ${typeof A}`);const T={runnerKey:l,runnerName:o,weightsPath:i,execute:A,supportsGpuNativeIO:v,ownedBuffers:typeof A.dispose=="function"?null:w,gpuBytes:typeof A.gpuBytes=="function"?A.gpuBytes():cs(w)};return mn.set(e,T),Rt($t({},T),{cacheHit:!1})}catch(M){throw g&&xn(e),es(w),new Error(`Failed to setup network for '${o}': ${M.message}`)}})}function ta(e,t,n,s,o,i,r){return we(this,null,function*(){var d,u,p,m;const a=n.outputType==="probability";console.log("Starting WebGPU inference..."),r(a?"Starting tissue estimation…":"Starting segmentation…",0);const c=Zo(n,Ko.WEBGPU);c.isModelFullVol=!0;let l=!1,f=null;const g=nr(n);try{if(!e)throw new Error("WebGPU device is required but not provided");if(!(n!=null&&n.webgpu_runner))throw new Error("Model entry must specify webgpu_runner property");if(!(n!=null&&n.webgpu_safetensor))throw new Error("Model entry must specify webgpu_safetensor property");const v=n.webgpuStorageSize||335544320;if(e.limits){const R=le=>(le/1048576).toFixed(0),K=(d=e.limits.maxStorageBufferBindingSize)!=null?d:1/0,D=(u=e.limits.maxBufferSize)!=null?u:1/0;if(K<v||D<v){const le=R(Math.min(K,D)),Ge=R(v),Fe=`[WebGPU] Device buffer limit (${le} MB) is below the ${Ge} MB this model needs - using WebGL2 fallback.`;throw console.warn(Fe),new Error(Fe)}}e.pushErrorScope("out-of-memory"),l=!0;const k=performance.now();f=yield ea(e,n,r);const _=((performance.now()-k)/1e3).toFixed(4),h=performance.now();r("Preparing volume…",.25);const w=[256,256,256],S=f.supportsGpuNativeIO&&!!n.enableTranspose&&!n.inputPermutation,b=f.supportsGpuNativeIO&&!!n.enableTranspose&&!n.outputPermutation;let P,z;if(n.enableQuantileNorm){const{qmin:R,qmax:K}=Vo(o);P=R,z=K-R}else{const{min:R,max:K}=Ho(o);P=R,z=K-R}const $=z===0?1:z;let y=null,G,M=w;if(S)g&&(y=ks(o,P,$)),G=o;else{const R=ks(o,P,$);if(g&&(y=R),n.inputPermutation){console.log(`[WebGPU] Permuting Input: ${n.inputPermutation}`);const K=n.inputPermutation;M=[w[K[0]],w[K[1]],w[K[2]]],G=kn(R,w,K)}else n.enableTranspose?G=kn(R,w,[2,1,0]):G=R}const A=((performance.now()-h)/1e3).toFixed(4);r("",.3),r(a?"Estimating tissue maps…":"Segmenting…",.3),yield $o();const T=performance.now(),U=f.supportsGpuNativeIO?R=>{const K=Math.max(0,Math.min(1,Number(R)||0));r("",.3+.6*K)}:void 0,B=S||b||U?{gpuNativeInput:S,gpuNativeOutput:b,normOffset:P,normRange:$,onProgress:U}:void 0,E=yield us(e,()=>B?f.execute(G,B):f.execute(G)),W=E.result;if(typeof f.execute.gpuBytes=="function"){f.gpuBytes=f.execute.gpuBytes();const R=mn.get(e);R&&R.runnerKey===f.runnerKey&&(R.gpuBytes=f.gpuBytes)}else if(E.buffers.length>0){f.gpuBytes=(f.gpuBytes||0)+cs(E.buffers),f.ownedBuffers&&f.ownedBuffers.push(...E.buffers);const R=mn.get(e);R&&R.runnerKey===f.runnerKey&&(R.gpuBytes=f.gpuBytes)}l=!1;const ee=yield e.popErrorScope();if(ee)throw new Error(`WebGPU out of memory (${ee.message||"allocation failed"}) - falling back to WebGL2.`);if(!W||!Array.isArray(W))throw new Error(`Inference didn't return expected array format. Returned: ${typeof W}`);const ae=((performance.now()-T)/1e3).toFixed(4),I=(f.gpuBytes||0)/1048576;c.GPU_Memory_MiB=Math.round(I),c.WebGPU_Kernels=f.execute.kernels||"tinygrad";const q=I>=1024?`${(I/1024).toFixed(2)} GiB`:`${Math.round(I)} MiB`;console.log(`WebGPU inference took ${ae}s (${c.WebGPU_Kernels} kernels, ${q} GPU memory).`),r("Finishing up…",.9),console.log("Inference result shapes:",W.map(R=>R==null?void 0:R.length));const N=n.outputPermutation||(n.enableTranspose?[2,1,0]:null),ie=performance.now();let O;const j={};if(g){if(W.length!==3)throw new Error(`CAT-lite expected three tissue maps; received ${W.length}.`);r("Refining tissue fractions…",.92),O=yield ir(W,y,n,c,b?K=>K:K=>N?kn(K,M,N):K instanceof Float32Array?K:Float32Array.from(K))}else if(a){const R=W[0];O=b?R:N?kn(R,M,N):R instanceof Float32Array?R:Float32Array.from(R),Ms(O,!0,"probability")}else{const R=W[0];let K;b?K=R instanceof Uint8Array?R:new Uint8Array(R):N?K=jo(R,M,N):K=R instanceof Uint8Array?R:new Uint8Array(R),Ms(K,!1,"segmentation"),O=yield Yo(K,o,n,t,j,w)}const $e=((performance.now()-ie)/1e3).toFixed(4),Ae=performance.now();yield i(O,t,n,j.mask);const Re=((performance.now()-Ae)/1e3).toFixed(4);if(a)g||(c.Output_Type="Continuous tissue probability",c.Tissue=n.probabilityDisplay||"grayMatter",c.Softmax_Temperature=(p=n.softmaxTemperature)!=null?p:1);else{const R=Xo(O),K=n.numClasses||R;Qo(c,K,R)}Jo(c,ae,$e,{Preprocess_t:A,Setup_t:_,Display_t:Re}),console.log(`[Timing] WebGPU | ${n.modelName} | setup=${(Number(_)*1e3).toFixed(1)}ms prep=${(Number(A)*1e3).toFixed(1)}ms infer=${(Number(ae)*1e3).toFixed(1)}ms post=${(Number($e)*1e3).toFixed(1)}ms disp=${(Number(Re)*1e3).toFixed(1)}ms cache=${f.cacheHit?"hit":"miss"}`);const ke=`${Number(ae).toFixed(1)} s`,te=a?`Tissue maps finished (${ke})`:`Segmentation finished (${ke})`,se=!a&&((m=n.numClasses)!=null?m:0)>2?" · Option/Alt-click a region to isolate":"";r(`${n.modelName} · ${te}${se}`,1,"",c)}catch(v){if(console.error("WebGPU Inference Error:",v),f&&(mn.get(e)===f&&mn.delete(e),So(f),f=null),l&&e){l=!1;try{yield e.popErrorScope()}catch(_){}}let k=v.message;throw v.message.includes("not found")?k+=". Check that the runner file exists and the name matches.":v.message.includes("fetch")?k+=". Check network connection and file paths.":v.message.includes("binding size")&&(k+=". GPU memory limit exceeded."),er(c,k,"WebGPU inference failed"),r("",-1,`WebGPU Error: ${k}`,c),v}})}const na={batchSize:1,numOfChan:1,isColorEnable:!0,isAutoColors:!0,bgLabelValue:0,drawBoundingVolume:!1,isGPU:!0,isBrainCropMaskBased:!0,showPhase1Output:!1,isPostProcessEnable:!0,fillSuppressedWithNeighborLabel:!1,diagnoseEnclosedComponents:!1,isContoursViewEnable:!1,browserArrayBufferMaxZDim:30,telemetryFlag:!1,chartXaxisStepPercent:10,uiSampleName:"BC_UI_Sample",atlasSelectedColorTable:"Fire"};function qs(e,t=!0){if(!e)return e;const o=e,{turbo:n}=o,s=xs(o,["turbo"]);return!t||!n?s:Rt($t($t({},s),n),{isTurboActive:!0})}const wn=[{id:2,type:"Brain_Extraction",path:"/models/mindgrab/model.json",modelName:"🪓🧠 Omnimodal Skull Stripping",webgpu_safetensor:"./models/mindgrab/model.safetensors",webgpu_runner:"mindgrab",classifierBias:[1.525439739227295,-1.5258055925369263],webgpuTTArunner:!1,forceFP32:!1,webgpuStorageSize:503316480,numClasses:2,turbo:{webgpu_runner:"mindgrab_int8",quantize8Bit:!0,forceFP32:!1,webgpuTTArunner:!1,webgpuStorageSize:83886080,warning:"Runs via the 8-bit V4 WebGPU engine (~3.7s on M1 WebGPU, auto-scaling from 160 MiB down to 80 MiB max buffer on mobile) or native WebGL2."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,isPostProcessEnable:!0,enableCrop:!0,cropPadding:20,autoThreshold:.5,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!1,textureSize:0,warning:"This model may need dedicated graphics card.  For more info please check with Browser Resources <i class='fa fa-cogs'></i>.",inferenceDelay:100,description:"Omnimodal skull stripping (MindGrab) delivering high-accuracy brain extraction across T1, T2, FLAIR, DWI, EPI, MRA, PDw, qT1, CT, and PET via the 8-bit V4 WebGPU engine (80 MiB mobile / 160 MiB desktop max buffer) or native WebGL2."},{id:21,type:"Atlas",path:"/models/model24chan18cls_gdice_prio/model.json",modelName:"🪓 Subcortical + Tissue",colormapPath:"./models/model24chan18cls_gdice_prio/colormap.json",webgpu_safetensor:"./models/model24chan18cls_gdice_prio/model.safetensors",webgpu_runner:"model24chan18cls_gdice_prio",forceFP32:!1,webgpuStorageSize:1610612736,numClasses:18,turbo:{webgpu_runner:"mindmap24_int8",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:125829120,warning:"Runs via the 8-bit V4 WebGPU engine (~3.0s on M1 WebGPU, auto-scaling from 240 MiB down to 120 MiB max buffer on mobile) or native WebGL2."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,cropPadding:20,autoThreshold:0,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!0,textureSize:0,warning:"Runs via the 8-bit V4 WebGPU engine (120–240 MiB max buffer) or native WebGL2.",inferenceDelay:100,description:"Primary T1w brain parcellation into 17 regions (gray and white matter plus subcortical structures) via a 24-channel gridding-free MeshNet (MindMap v3.5 Unified: sharp sulci, intact occipital ribbon, and clinical slice/noise/bias robustness), accelerated by the 8-bit V4 WebGPU engine (120 MiB mobile / 240 MiB desktop max buffer)."},{id:23,type:"Probability_Map",path:"/models/model24chan18cls_gdice_prio/model.json",modelName:"⅔🧠 Tissue fraction maps (GM/WM/CSF)",webgpu_safetensor:"./models/model24chan18cls_gdice_prio/model.safetensors",webgpu_runner:"model24chan18cls_gdice_prio_probability",forceFP32:!1,webgpuStorageSize:1610612736,numClasses:18,turbo:{webgpu_runner:"mindmap24_int8",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:125829120,warning:"Experimental neural-assisted partial-volume estimate (~3.5s on M1 WebGPU, auto-scaling from 240 MiB down to 120 MiB max buffer on mobile)."},outputType:"probability",probabilityPostprocess:"cat-lite",softmaxTemperature:2,brainSupportTemperature:1,brainSupportPower:1,partialVolumeSigma:.65,probabilityDisplay:"grayMatter",probabilityTissues:[{name:"gm",tint:[255,64,64]},{name:"wm",tint:[255,255,255]},{name:"csf",tint:[64,128,255]}],probabilityOverlayFloor:128,probabilityOverlayAlpha:48,probabilityDisplayMin:.03,probabilityUnderlayOpacity:.1,probabilityGroups:{grayMatter:[2,6,7,8,9,10,14,15,16,17],whiteMatter:[1,5],csf:[3,4,11,12]},catLitePurePriorPower:3,catLitePriorStrength:.8,catLiteIntensityStrength:.75,catLiteMixelPrior:.35,catLiteCsfWmMixelPrior:6,catLiteSpatialWeight:.25,catLiteMinSupport:.03,catLiteSigmaFloor:.025,catLiteBiasBlockSize:16,catLiteBiasSmoothPasses:3,preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,enableQuantileNorm:!0,enableFovRecenter:!1,enableFovInflate:!1,warning:"Experimental neural-assisted mixed-class partial-volume estimate, not CAT12.",inferenceDelay:100,description:"CAT-inspired GM/WM/CSF partial-volume estimate. The 24-channel model supplies joint GM/WM/CSF priors; normalized T1 intensity, a coarse local bias estimate, spatial regularization, and explicit GM-CSF/GM-WM mixture classes produce continuous GM, WM and CSF fractions. Experimental and not a CAT12 result."},{id:5,type:"Atlas",path:"/models/model24chan104cls_v3_repbn/model.json",modelName:"🪓🔪 Desikan-Killiany Atlas",colormapPath:"./models/model24chan104cls_v3_repbn/colormap.json",webgpu_safetensor:"./models/model24chan104cls_v3_repbn/model.safetensors",webgpu_runner:"dkatlas24_synth",forceFP32:!1,webgpuStorageSize:1610612736,numClasses:104,turbo:{webgpu_runner:"dkatlas24_int8",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:125829120,warning:"Runs via the 8-bit V4 WebGPU engine (~3.0s on M1 WebGPU, auto-scaling from 240 MiB down to 120 MiB max buffer on mobile) or native WebGL2."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,cropPadding:20,autoThreshold:0,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!0,textureSize:0,warning:"Runs via the 8-bit V4 WebGPU engine (120–240 MiB max buffer) or native WebGL2.",inferenceDelay:100,description:"Primary 104-region Desikan-Killiany atlas parcellation (cortical + subcortical + 5-part corpus callosum) for research and clinical T1-weighted MRI, running via the 8-bit V4 WebGPU engine (~3.0s on M1, 120 MiB mobile / 240 MiB desktop max buffer) or native WebGL2."},{id:4,type:"Atlas",path:"/models/model24chan50cls/model.json",modelName:"🪓🔪 Desikan-Killiany 50",colormapPath:"./models/model24chan50cls/colormap.json",webgpu_safetensor:"./models/model24chan50cls/model.safetensors",webgpu_runner:"meshnet_fast_v4",forceFP32:!1,webgpuStorageSize:805306368,numClasses:50,turbo:{webgpu_runner:"meshnet_fast_v4",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:125829120,warning:"Runs via the 8-bit V4 WebGPU engine (~3.0s on M1 WebGPU, auto-scaling from 240 MiB down to 120 MiB max buffer on mobile) or native WebGL2."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,cropPadding:20,autoThreshold:0,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!0,textureSize:0,warning:"Runs via the 8-bit V4 WebGPU engine (120–240 MiB max buffer) or native WebGL2.",inferenceDelay:100,description:"Bilateral 50-region Desikan-Killiany cortical + subcortical + corpus callosum parcellation with built-in skull stripping (MindSnap-50 v3.5), running via the 8-bit V4 WebGPU engine (~3.0s on M1, 120 MiB mobile / 240 MiB desktop max buffer) or native WebGL2."},{id:6,type:"Divider",modelName:"-----------------",path:null},{id:3,type:"Atlas",path:"/models/model16chan18cls/model.json",modelName:"⚡🪓 Subcortical + Tissue",colormapPath:"./models/model16chan18cls/colormap.json",webgpu_safetensor:"./models/model16chan18cls/model.safetensors",webgpu_runner:"model16chan18cls",forceFP32:!1,webgpuStorageSize:536870912,numClasses:18,turbo:{webgpu_runner:"model16chan18cls_int8",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:83886080,warning:"Ultra-fast 16-channel MindMap v3.5 (~1.7s on M1 WebGPU, auto-scaling from 160 MiB down to 80 MiB max buffer on mobile)."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,cropPadding:20,autoThreshold:0,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!0,textureSize:0,warning:"Runs via the 8-bit V4 WebGPU engine (80–160 MiB max buffer) or native WebGL2.",inferenceDelay:100,description:"Ultra-fast 17-region brain parcellation (gray and white matter plus subcortical structures) via our 84K-parameter 16-channel MeshNet (MindMap-16ch v3.5), running in ~1.7s on M1 WebGPU with an 80 MiB mobile / 160 MiB desktop buffer footprint."},{id:14,type:"Atlas",path:"/models/model24chan104cls_synth/model.json",modelName:"🪓🔪 Desikan-Killiany (lesion scans)",colormapPath:"./models/model24chan104cls_synth/colormap.json",webgpu_safetensor:"./models/model24chan104cls_synth/model.safetensors",webgpu_runner:"dkatlas24_synth",forceFP32:!1,webgpuStorageSize:1610612736,numClasses:104,turbo:{webgpu_runner:"dkatlas24_int8",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:125829120,warning:"Runs via the 8-bit V4 WebGPU engine (~3.0s on M1 WebGPU, auto-scaling from 240 MiB down to 120 MiB max buffer on mobile) or native WebGL2."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,cropPadding:20,autoThreshold:0,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!0,textureSize:0,warning:"Runs via the 8-bit V4 WebGPU engine (120–240 MiB max buffer) or native WebGL2.",inferenceDelay:100,description:"Desikan-Killiany 104-region parcellation variant retained for scans with large focal lesions, running via the 8-bit V4 WebGPU engine (120–240 MiB max buffer) or native WebGL2."}];function hs(){return we(this,null,function*(){return navigator.userAgent.indexOf("OPR/")>-1?"Opera":navigator.userAgent.indexOf("Edg/")>-1?"Edge":navigator.userAgent.indexOf("Falkon/")>-1?"Falkon":navigator.userAgent.indexOf("Chrome/")>-1?"Chrome":navigator.userAgent.indexOf("Firefox/")>-1?"Firefox":navigator.userAgent.indexOf("Safari/")>-1?"Safari":navigator.userAgent.indexOf("MSIE/")>-1||navigator.userAgent.indexOf("rv:")>-1?"IExplorer":"Unknown"})}function sa(){return we(this,null,function*(){return navigator.userAgent.indexOf("OPR/")>-1?parseInt(navigator.userAgent.split("OPR/")[1]):navigator.userAgent.indexOf("Edg/")>-1?parseInt(navigator.userAgent.split("Edg/")[1]):navigator.userAgent.indexOf("Falkon/")>-1?parseInt(navigator.userAgent.split("Falkon/")[1]):navigator.userAgent.indexOf("Chrome/")>-1?parseInt(navigator.userAgent.split("Chrome/")[1]):navigator.userAgent.indexOf("Firefox/")>-1?parseInt(navigator.userAgent.split("Firefox/")[1]):navigator.userAgent.indexOf("Safari/")>-1?parseInt(navigator.userAgent.split("Safari/")[1]):navigator.userAgent.indexOf("MSIE/")>-1||navigator.userAgent.indexOf("rv:")>-1?parseInt(navigator.userAgent.split("MSIE/")[1]):1/0})}function oa(){return we(this,null,function*(){return navigator.userAgent.indexOf("Win")>-1?"Windows":navigator.userAgent.indexOf("Mac")>-1?"MacOS":navigator.userAgent.indexOf("Linux")>-1?"Linux":navigator.userAgent.indexOf("UNIX")>-1?"UNIX":"Unknown"})}function ra(e){return we(this,null,function*(){return e?(console.log("WebGl2 is enabled"),!0):(console.log(typeof WebGL2RenderingContext!="undefined"?"WebGL2 may be disabled. Please try updating video card drivers":"WebGL2 is not supported"),!1)})}function aa(e){return we(this,null,function*(){let t;if(e&&(t=e.getExtension("WEBGL_debug_renderer_info"),t)){const n=e.getParameter(t.UNMASKED_VENDOR_WEBGL);return n.indexOf("(")>-1&&n.indexOf(")")>-1?n.substring(n.indexOf("(")+1,n.indexOf(")")):n}return null})}function ia(e){return we(this,null,function*(){if(e){const t=e.getExtension("WEBGL_debug_renderer_info");return t?e.getParameter(t.UNMASKED_VENDOR_WEBGL):null}else return null})}function la(e){return we(this,null,function*(){if(e){if(hs()==="Firefox")return e.getParameter(e.RENDERER);const t=e.getExtension("WEBGL_debug_renderer_info");return t?e.getParameter(t.UNMASKED_RENDERER_WEBGL):null}else return null})}function ua(e){return we(this,null,function*(){let t;if(e){if(hs()==="Firefox")return e.getParameter(e.RENDERER);if(t=e.getExtension("WEBGL_debug_renderer_info"),t){let n=e.getParameter(t.UNMASKED_RENDERER_WEBGL);return n.indexOf("(")>-1&&n.indexOf(")")>-1&&n.indexOf("(R)")===-1&&(n=n.substring(n.indexOf("(")+1,n.indexOf(")")),n.split(",").length===3)?n.split(",")[1].trim():n}}return null})}function ca(){return we(this,null,function*(){return navigator.hardwareConcurrency})}function fa(){return we(this,null,function*(){return/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)})}function pa(e,t=null){return we(this,null,function*(){const n=new Date;if(e.isModelFullVol?e.Brainchop_Ver="FullVolume":e.Brainchop_Ver="SubVolumes",e.Total_t=(Date.now()-e.startTime)/1e3,delete e.startTime,e.Date=parseInt(n.getMonth()+1)+"/"+n.getDate()+"/"+n.getFullYear(),e.Browser=yield hs(),e.Browser_Ver=yield sa(),e.OS=yield oa(),e.WebGL2=yield ra(t),e.GPU_Vendor=yield aa(t),e.GPU_Card=yield ua(t),e.GPU_Vendor_Full=yield ia(t),e.GPU_Card_Full=yield la(t),e.CPU_Cores=yield ca(),e.Which_Brainchop="latest",(yield fa())&&(e.Heap_Size_MB=window.performance.memory.totalJSHeapSize/(1024*1024).toFixed(2),e.Used_Heap_MB=window.performance.memory.usedJSHeapSize/(1024*1024).toFixed(2),e.Heap_Limit_MB=window.performance.memory.jsHeapSizeLimit/(1024*1024).toFixed(2)),t){console.log("MAX_TEXTURE_SIZE :",t.getParameter(t.MAX_TEXTURE_SIZE)),console.log("MAX_RENDERBUFFER_SIZE :",t.getParameter(t.MAX_RENDERBUFFER_SIZE));const s=t.getExtension("WEBGL_debug_renderer_info");console.log("VENDOR WEBGL:",t.getParameter(s.UNMASKED_VENDOR_WEBGL)),e.Texture_Size=t.getParameter(t.MAX_TEXTURE_SIZE)}else e.Texture_Size=null;return e})}const ts={bankssts:1,caudalanteriorcingulate:2,caudalmiddlefrontal:3,cuneus:5,entorhinal:6,fusiform:7,inferiorparietal:8,inferiortemporal:9,isthmuscingulate:10,lateraloccipital:11,lateralorbitofrontal:12,lingual:13,medialorbitofrontal:14,middletemporal:15,parahippocampal:16,paracentral:17,parsopercularis:18,parsorbitalis:19,parstriangularis:20,pericalcarine:21,postcentral:22,posteriorcingulate:23,precentral:24,precuneus:25,rostralanteriorcingulate:26,rostralmiddlefrontal:27,superiorfrontal:28,superiorparietal:29,superiortemporal:30,supramarginal:31,frontalpole:32,temporalpole:33,transversetemporal:34,insula:35},ma=new Set(["BG","Unknown","background","Background"]),Ts={"Left-Cerebral-White-Matter":2,"Right-Cerebral-White-Matter":41,"Left-Cerebral-Cortex":3,"Right-Cerebral-Cortex":42,"Left-Lateral-Ventricle":4,"Right-Lateral-Ventricle":43,"Left-Inf-Lat-Vent":5,"Right-Inf-Lat-Vent":44,"Left-Cerebellum-White-Matter":7,"Right-Cerebellum-White-Matter":46,"Left-Cerebellum-Cortex":8,"Right-Cerebellum-Cortex":47,"Left-Thalamus":10,"Left-Thalamus-Proper":10,"Left-Thalamus-Proper*":10,"Right-Thalamus":49,"Right-Thalamus-Proper":49,"Right-Thalamus-Proper*":49,"Left-Caudate":11,"Right-Caudate":50,"Left-Putamen":12,"Right-Putamen":51,"Left-Pallidum":13,"Right-Pallidum":52,"Left-Hippocampus":17,"Right-Hippocampus":53,"Left-Amygdala":18,"Right-Amygdala":54,"Left-Accumbens":26,"Left-Accumbens-area":26,"Right-Accumbens":58,"Right-Accumbens-area":58,"Left-VentralDC":28,"Right-VentralDC":60,"3rd-Ventricle":14,"4th-Ventricle":15,"Brain-Stem":16,CSF:24,CC_Posterior:251,CC_Mid_Posterior:252,CC_Central:253,CC_Mid_Anterior:254,CC_Anterior:255,"Cerebral-White-Matter":2,"White Matter":2,"Cerebral-Cortex":3,"Grey Matter":3,"Gray Matter":3,"Lateral-Ventricle":4,Ventricle:4,"Inferior-Lateral-Ventricle":5,"Cerebellum-White-Matter":7,"Cerebellum-Cortex":8,Cerebellum:8,Thalamus:10,"Thalamus-Proper":10,"Thalamus-Proper*":10,Caudate:11,Putamen:12,Pallidum:13,Hippocampus:17,Amygdala:18,"Accumbens-area":26,Accumbens:26,VentralDC:28,"Corpus callosum":253,Corpus_Callosum:253};function da(e){if(typeof e!="string")return null;const t=e.trim();if(ma.has(t))return 0;if(Object.hasOwn(Ts,t))return Ts[t];if(t.startsWith("ctx-lh-")){const n=ts[t.slice(7)];return n?1e3+n:null}if(t.startsWith("ctx-rh-")){const n=ts[t.slice(7)];return n?2e3+n:null}if(t.startsWith("ctx-")){const n=ts[t.slice(4)];return n?1e3+n:null}return null}function qn(e){if(!Array.isArray(e)||e.length<3)return null;const t=new Int16Array(e.length);for(let n=0;n<e.length;n++){const s=da(e[n]);if(s===null||(n===0?s!==0:s<=0))return null;t[n]=s}return t}function ga(e,t){const n=e.length,s=new Int16Array(n),o=t.length;let i=0;for(let r=0;r<n;r++){const a=e[r],c=a>=0&&a<o?t[a]:a;s[r]=c,c>i&&(i=c)}return{img:s,maxLabel:i}}const Es=.5,Os=8,Ns=(e,t,n)=>Math.min(n,Math.max(t,e)),Ds=e=>Math.hypot(e[0].clientX-e[1].clientX,e[0].clientY-e[1].clientY);function Po(e){e&&(e.pan2Dxyzmm=Float32Array.from([0,0,0,1]),e.scaleMultiplier=1),_a()}function _a(){const e=document.querySelector('meta[name="viewport"]');if(!e)return;const t=e.getAttribute("content")||"width=device-width, initial-scale=1.0";/maximum-scale/.test(t)||(e.setAttribute("content",`${t}, maximum-scale=1, user-scalable=no`),requestAnimationFrame(()=>requestAnimationFrame(()=>e.setAttribute("content",t))))}function ba(){const e=t=>t.preventDefault();for(const t of["gesturestart","gesturechange","gestureend"])document.addEventListener(t,e,{passive:!1});document.addEventListener("touchmove",t=>{t.touches.length>1&&t.preventDefault()},{passive:!1})}function ha(e){const t=new Set,n=o=>{t.size>1&&o.stopPropagation()},s=o=>t.delete(o.pointerId);window.addEventListener("pointerdown",o=>{o.pointerType==="touch"&&o.target===e&&t.add(o.pointerId),n(o)},!0),window.addEventListener("pointermove",n,!0),window.addEventListener("pointerup",s,!0),window.addEventListener("pointercancel",s,!0)}function wa(e,t,n,s,o){const i=e[3]/t;return[0,1,2].map(r=>{const a=n[r]-(s[r]+o[r])/2;return i*(a+e[r])-a})}function va(e){const t=e.canvas;if(!t)return;ha(t);let n=null;const s=r=>{var g,d,u;if(r.touches.length!==2){n=null;return}const a=t.getBoundingClientRect(),c=window.devicePixelRatio||1,l=((r.touches[0].clientX+r.touches[1].clientX)/2-a.left)*c,f=((r.touches[0].clientY+r.touches[1].clientY)/2-a.top)*c;n={dist:Math.max(1,Ds(r.touches)),pan:Array.from(e.pan2Dxyzmm),scale3d:e.scaleMultiplier||1,inRender:(u=(d=(g=e.view)==null?void 0:g.hitTest(l,f))==null?void 0:d.isRender)!=null?u:!1}},o=()=>{n=null},i=r=>{if(!n||r.touches.length!==2)return;const a=Ds(r.touches)/n.dist;if(!isFinite(a)||a<=0)return;if(n.inRender){e.scaleMultiplier=Ns(n.scale3d*a,Es,Os);return}const c=Ns(n.pan[3]*a,Es,Os),l=wa(n.pan,c,e.getCrosshairPos(),e.model.extentsMin,e.model.extentsMax);e.pan2Dxyzmm=Float32Array.from([l[0],l[1],l[2],c]),e.isYoked3DTo2DZoom?e.scaleMultiplier=c:e.drawScene()};t.addEventListener("touchstart",s,{passive:!0}),t.addEventListener("touchmove",i,{passive:!0}),t.addEventListener("touchend",o,{passive:!0}),t.addEventListener("touchcancel",o,{passive:!0})}function ya(e){return ba(),va(e),{resetView:()=>Po(e)}}const xa=720,$a=860;function Sa(){var o,i,r,a,c,l;const e=window.visualViewport,t=Math.round((i=(o=e==null?void 0:e.width)!=null?o:window.innerWidth)!=null?i:0),n=Math.round((a=(r=e==null?void 0:e.height)!=null?r:window.innerHeight)!=null?a:0);return t>0&&t<=xa?!0:!!((l=(c=window.matchMedia)==null?void 0:c.call(window,"(pointer: coarse)"))==null?void 0:l.matches)&&Math.min(t,n)<=$a}const Bn=[{id:"multi",label:"All",title:"All planes",type:Fn.MULTIPLANAR},{id:"axial",label:"A",title:"Axial only",type:Fn.AXIAL},{id:"coronal",label:"C",title:"Coronal only",type:Fn.CORONAL},{id:"sagittal",label:"S",title:"Sagittal only",type:Fn.SAGITTAL},{id:"render",label:"3D",title:"3D render only",type:Fn.RENDER}];function ko(e,t,n){const s=Bn.find(o=>o.id===n)||Bn[0];e.sliceType=s.type,t.querySelectorAll("button").forEach(o=>o.classList.toggle("active",o.dataset.pane===s.id))}function Pa(e,t){const n=document.createElement("div");n.id="paneSwitcher",n.className="pane-switcher",n.setAttribute("role","group"),n.setAttribute("aria-label","Visible planes");for(const o of Bn){const i=document.createElement("button");i.type="button",i.dataset.pane=o.id,i.textContent=o.label,i.title=o.title,i.setAttribute("aria-label",o.title),i.addEventListener("click",()=>ko(e,n,o.id)),n.appendChild(i)}const s=document.createElement("button");return s.type="button",s.className="pane-reset",s.textContent="⟲",s.title="Reset zoom and pan",s.setAttribute("aria-label","Reset zoom and pan"),s.addEventListener("click",()=>Po(e)),n.appendChild(s),t.appendChild(n),n}function ka(e){var o;const t=document.getElementById("canvas-container")||document.body,n=Pa(e,t);n.querySelector('button[data-pane="multi"]').classList.add("active"),window.addEventListener("keydown",i=>{if(i.key!=="v"&&i.key!=="V"||i.altKey||i.ctrlKey||i.metaKey||i.repeat)return;const r=i.target;if(r instanceof HTMLElement&&(r.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(r.tagName)))return;i.preventDefault(),i.stopImmediatePropagation();const a=Bn.findIndex(c=>c.type===e.sliceType);ko(e,n,Bn[(a+1)%Bn.length].id)},!0);const s=()=>document.body.classList.toggle("nv-narrow",Sa());window.addEventListener("resize",s),window.addEventListener("orientationchange",s),(o=window.visualViewport)==null||o.addEventListener("resize",s),s()}function Vs(e,t=e.img.slice(),n=e.name){const s=Object.assign(Object.create(Object.getPrototypeOf(e.hdr)),e.hdr),o=Wo(s,t,n);return o.id=crypto.randomUUID(),o}const Qt=e=>e&&typeof e.slice=="function"?e.slice():e;function ns(e,t,n=e.name,s={},o={}){var c;const i=Object.assign(Object.create(Object.getPrototypeOf(e.hdr)),e.hdr,$t({dims:[...e.hdr.dims],pixDims:[...e.hdr.pixDims],affine:e.hdr.affine.map(l=>[...l])},s)),r=e.dims?e.dims.slice(0,4):i.dims.slice(0,4),a=(c=e.nVox3D)!=null?c:r[1]*r[2]*r[3];return $t({img:t,hdr:i,originalAffine:i.affine.map(l=>[...l]),dims:r,nVox3D:a,extentsMin:Qt(e.extentsMin),extentsMax:Qt(e.extentsMax),mm000:Qt(e.mm000),mm100:Qt(e.mm100),mm010:Qt(e.mm010),mm001:Qt(e.mm001),dimsRAS:e.dimsRAS?[...e.dimsRAS]:void 0,pixDimsRAS:e.pixDimsRAS?[...e.pixDimsRAS]:void 0,permRAS:e.permRAS?[...e.permRAS]:void 0,toRAS:Qt(e.toRAS),toRASvox:Qt(e.toRASvox),matRAS:Qt(e.matRAS),obliqueRAS:Qt(e.obliqueRAS),oblique_angle:e.oblique_angle,frac2mm:Qt(e.frac2mm),frac2mmOrtho:Qt(e.frac2mmOrtho),img2RASstep:e.img2RASstep?[...e.img2RASstep]:void 0,img2RASstart:e.img2RASstart?[...e.img2RASstart]:void 0,volScale:e.volScale?[...e.volScale]:void 0,name:n,id:crypto.randomUUID(),calMin:0,calMax:255,robustMin:0,robustMax:255,globalMin:0,globalMax:255,frame4D:0,nFrame4D:1,nTotalFrame4D:1,isLegendVisible:!1},o)}function Ma(e){let t=256,n=-1,s=0;for(let l=0;l<256;l++){const f=e[l];f>0&&(l<t&&(t=l),n=l,l!==0&&(s+=f))}if(t>n)return{calMin:0,calMax:255,robustMin:0,robustMax:255,globalMin:0,globalMax:255};if(t===n)return{calMin:t,calMax:n,robustMin:t,robustMax:n,globalMin:t,globalMax:n};const o=Math.round(s*.02),i=Math.round(s*.02);let r=0,a=t;for(let l=t;l<=n;l++){if(l===0&&e[0]>o){a=0;break}if(r+=e[l],r>=o){a=l;break}}r=0;let c=n;for(let l=n;l>=t;l--)if(r+=e[l],r>=i){c=Math.min(n,l+1);break}return a>=c&&(a=t,c=n),{calMin:a,calMax:c,robustMin:a,robustMax:c,globalMin:t,globalMax:n}}function ss(e,[t,n,s]){const o=e.dimsRAS,i=e.img2RASstart,r=e.img2RASstep;return!o||!i||!r||t<0||t>=o[1]||n<0||n>=o[2]||s<0||s>=o[3]?null:i[0]+t*r[0]+i[1]+n*r[1]+i[2]+s*r[2]}function Pn(e,t){return we(this,null,function*(){const n=e.img,s=yield Uo(t,e.hdr,n.buffer.byteLength===n.byteLength?n.buffer:n.buffer.slice(n.byteOffset,n.byteOffset+n.byteLength)),o=URL.createObjectURL(new Blob([s]));Object.assign(document.createElement("a"),{href:o,download:t}).click(),URL.revokeObjectURL(o)})}let on=null,dn=!1,os=0,Tn=!1,Nn=[];const Mo=/Safari/.test(navigator.userAgent)&&!/Chrome|Chromium|CriOS|FxiOS|Edg|Android/.test(navigator.userAgent),Aa=Mo&&new URLSearchParams(window.location.search).get("inference")!=="webgpu";function Hs(){return we(this,null,function*(){const e={secureContext:window.isSecureContext,navigatorGpuExists:"gpu"in navigator,adapterObtained:!1,deviceObtained:!1,f16Support:!1,error:null};if(window.isSecureContext||(console.warn("WebGPU requires a secure context (HTTPS or localhost)."),console.warn("Current origin:",window.location.origin)),"gpu"in navigator)try{console.log("Requesting WebGPU adapter...");const t=yield navigator.gpu.requestAdapter();if(t){e.adapterObtained=!0,console.log("WebGPU adapter obtained:",t),t.info&&console.log("Adapter info:",t.info),console.log("Adapter limits:",{maxBufferSize:t.limits.maxBufferSize,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension});const n={maxBufferSize:t.limits.maxBufferSize,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxStorageBuffersPerShaderStage:t.limits.maxStorageBuffersPerShaderStage,maxUniformBufferBindingSize:t.limits.maxUniformBufferBindingSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ,maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension},s=t.features.has("shader-f16"),o=t.features.has("subgroups");e.f16Support=s,e.subgroupsSupport=o;const i=[];s&&i.push("shader-f16"),o&&i.push("subgroups");const r=yield t.requestDevice({requiredLimits:n,requiredFeatures:i});r.__adapterInfo=t.info||null,r.__isLost=!1,r.lost&&typeof r.lost.then=="function"&&r.lost.then(c=>{r.__isLost=!0,(c==null?void 0:c.reason)!=="destroyed"&&(console.warn(`[WebGPU] Device was lost (${(c==null?void 0:c.reason)||"unknown"}): ${(c==null?void 0:c.message)||""}`),on===r&&(on=null,dn=!1,e.deviceObtained=!1,e.error=(c==null?void 0:c.message)||"WebGPU device lost",js(!1,e)))}),on=r,e.deviceObtained=!0,dn=!0,console.log(`✓ WebGPU initialized successfully. F16: ${s?"enabled":"not available"}, Subgroups: ${o?"enabled":"not available"}`)}else console.warn("WebGPU adapter request returned null."),console.warn("This typically means:"),console.warn("  - Safari: WebGPU feature flags not enabled in Settings > Feature Flags"),console.warn("  - Unsupported GPU hardware"),console.warn("  - GPU drivers need updating"),e.error="Adapter returned null"}catch(t){e.error=t.message,console.error("WebGPU initialization error:",t),navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")&&(console.warn("Safari detected. To enable WebGPU:"),console.warn("  1. Open Safari Settings/Preferences"),console.warn('  2. Go to Advanced tab, enable "Show features for web developers"'),console.warn("  3. Go to Feature Flags tab"),console.warn("  4. Enable: WebGPU, GPU Process: DOM Rendering, GPU Process: Canvas Rendering"),console.warn("  5. Restart Safari"))}else console.warn("navigator.gpu not found. WebGPU API is not available in this browser."),e.error="navigator.gpu not found",navigator.userAgent.includes("Firefox")&&(console.warn("Firefox detected. To enable WebGPU in about:config:"),console.warn("  1. Set dom.webgpu.enabled = true"),console.warn("  2. Set gfx.webgpu.ignore-blocklist = true"),console.warn("  3. Restart Firefox"));return js(dn,e),dn||console.log("Falling back to WebGL backend."),window.webgpuDiagnostics=e,e})}function js(e,t){const n=document.getElementById("backendStatus");if(!n){console.log("Backend status element not found in DOM");return}if(e){const s=t.f16Support?" (F16)":"";n.textContent=`WebGPU${s}`,n.style.color="#4CAF50",n.title="WebGPU backend active - fastest performance"}else{n.textContent="WebGL",n.style.color="#FF9800";let s="WebGL backend (fallback)";t.error&&(s+=`
Reason: ${t.error}`),t.secureContext||(s+=`
⚠ Not a secure context (HTTPS required)`),Mo&&(s+=`

To enable WebGPU in Safari:
1. Settings > Feature Flags
2. Enable WebGPU flags
3. Restart Safari`),navigator.userAgent.includes("Firefox")&&(s+=`

To enable WebGPU in Firefox:
1. about:config > dom.webgpu.enabled = true
2. gfx.webgpu.ignore-blocklist = true
3. Restart Firefox`),n.title=s}}function Ba(){return we(this,null,function*(){let e="",t="",n=null,s=null,o=null,i=null;function r(){const x=modelSelect.value;return x==="-1"||modelSelect.selectedIndex<0?null:wn[x]||null}function a(){const x=r();modelSelect.title=(x==null?void 0:x.description)||"Choose a segmentation model to run"}const c="altKey";let l=null,f=null,g=null,d=null,u=null,p=null,m=null,v="input.nii.gz",k=null;const _=document.getElementById("dragSegmented");_&&_.querySelectorAll("button").forEach(x=>{x.onclick=()=>{H.secondaryDragMode=parseInt(x.dataset.drag,10),_.querySelectorAll("button").forEach(F=>F.classList.toggle("active",F===x))}});const h=document.getElementById("drawBtn"),w=document.getElementById("drawPopover"),S=document.getElementById("penRow"),b=document.getElementById("drawApplyRow");function P(x){w&&(w.hidden=!x,h&&h.setAttribute("aria-expanded",String(x)))}function z(x){H.drawIsEnabled=x>=0,x>=0&&(!H.drawingVolume&&H.volumes.length&&H.createEmptyDrawing(),H.drawPenValue=x&7,H.drawPenFilled=x>7),S&&S.querySelectorAll(".chip").forEach(F=>F.classList.toggle("active",parseInt(F.dataset.pen,10)===x))}function $(x){return we(this,null,function*(){var he;if(H.volumes.length<2){window.alert("No segmentation open (run a model first).");return}if(x===0){H.drawUndo();return}const F=(he=H.drawingVolume)==null?void 0:he.img;if(!F){window.alert("Nothing drawn yet — pick a pen and draw on the image first.");return}const L=H.volumes[1].img;if(L instanceof Float32Array){window.alert("Drawing edits label segmentations, not probability maps.");return}const ue=H.volumes[1],Q=ue.dimsRAS;if(!Q||F.length!==Q[1]*Q[2]*Q[3]){window.alert("The drawing does not match the current image — redraw it.");return}const Ue=x===1?1:0;let me=0;for(let Y=0;Y<Q[3];Y++)for(let Be=0;Be<Q[2];Be++)for(let ye=0;ye<Q[1];ye++,me++)F[me]>0&&(L[ss(ue,[ye,Be,Y])]=Ue);H.closeDrawing(),yield H.updateGLVolume(),H.drawIsEnabled=!1,z(-1)})}h&&(h.onclick=x=>{x.stopPropagation(),P(w.hidden)}),S&&S.querySelectorAll(".chip").forEach(x=>{x.onclick=()=>z(parseInt(x.dataset.pen,10))}),b&&b.querySelectorAll(".chip").forEach(x=>{x.onclick=()=>$(parseInt(x.dataset.apply,10))}),document.addEventListener("click",x=>{!w||w.hidden||x.target.closest(".popover-wrap")||P(!1)}),document.addEventListener("keydown",x=>{x.key==="Escape"&&P(!1)});const y=document.getElementById("appDialog");if(y&&!("closedBy"in HTMLDialogElement.prototype)){let x=!1;const F=L=>{const ue=y.getBoundingClientRect();return L.clientX<ue.left||L.clientX>ue.right||L.clientY<ue.top||L.clientY>ue.bottom};y.addEventListener("pointerdown",L=>{x=L.target===y&&F(L)}),y.addEventListener("pointerup",L=>{x&&L.target===y&&F(L)&&y.close(),x=!1})}aboutBtn.onclick=function(){Jt("About BrainChop",`
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
    `)};const G=document.getElementById("shadingBtn");G.onclick=()=>{const x=G.classList.toggle("active");G.setAttribute("aria-pressed",String(x)),H.volumeIllumination=x?.5:0},diagnosticsBtn.onclick=function(){let x=e;if(x.length<1&&window.webgpuDiagnostics){const L=window.webgpuDiagnostics;x=`:: Startup Diagnostics ::
`,x+=`Secure Context: ${L.secureContext}
`,x+=`WebGPU Enabled: ${dn}
`,x+=`F16 Support: ${L.f16Support}
`,L.error&&(x+=`Error: ${L.error}
`),x+=`User Agent: ${navigator.userAgent}
`}if(x.length<1){Jt("Diagnostics","No diagnostic string generated: run a model to create diagnostics");return}let F=x;t=t.slice(0,-2),t!==""&&F.includes("Status: OK")&&(F=F.replace("Status: OK",`Status: ${t}`)),t="",navigator.clipboard.writeText(F).then(()=>{Jt("Diagnostics",`<p>Diagnostics copied to clipboard</p><pre style="white-space: pre-wrap; font-family: monospace; font-size: 0.9em; overflow-x: auto;">${F}</pre>`)}).catch(L=>{Jt("Diagnostics",`<p>Failed to copy to clipboard.</p><pre style="white-space: pre-wrap; font-family: monospace; font-size: 0.9em; overflow-x: auto;">${F}</pre>`)})},opacitySlider0.oninput=()=>{H.volumes[0]&&(H.volumes[0].opacity=Number(opacitySlider0.value)),H.updateGLVolume()};function M(){const x=Number(opacitySlider1.value);H.volumes.slice(1).forEach((F,L)=>{F.opacity=(g==null?void 0:g[L])===F&&f!==null&&L!==f?0:x}),H.updateGLVolume()}opacitySlider1.oninput=M;function A(x=null){const F=x==null?void 0:x.probabilityUnderlayOpacity;F!==void 0?(m===null&&(m=opacitySlider0.value),opacitySlider0.value=F,H.volumes[0]&&(H.volumes[0].opacity=Number(F))):m!==null&&(opacitySlider0.value=m,m=null,H.volumes[0]&&(H.volumes[0].opacity=Number(opacitySlider0.value)))}function T(){return we(this,null,function*(){const x=H.volumes[0];let F=x.dims[1]===256&&x.dims[2]===256&&x.dims[3]===256&&x.img instanceof Uint8Array&&x.img.length===256*256*256;if((x.permRAS[0]!==-1||x.permRAS[1]!==3||x.permRAS[2]!==-2)&&(F=!1),F)return;ht("Conforming input volume to 256³...",.05),yield $o(),yield B();const L=yield H.volumeTransform.conform(x,{toRAS:!1}),[ue,Q]=[p,v],Ue=modelSelect.value;yield H.removeVolume(0),yield H.addVolume(L),[p,v]=[ue,Q],modelSelect.value=Ue,a()})}function U(){for(f=null,g=null;H.model.volumes.length>1;)H.model.removeVolume(H.model.volumes.length-1)}function B(){return we(this,null,function*(){U(),yield H.updateGLVolume()})}function E(){return H.volumes.length>=2&&H.volumes[1].colormapLabel?H.volumes[1]:null}function W(){l=null,d=null,u=null,I&&(I.style.display="none")}function ee(){const x=E();if(x){if(d===null&&(d=x.img),l===null)x.img=d,u=null;else{const F=d,L=new F.constructor(F.length);for(let ue=0;ue<F.length;ue++)L[ue]=F[ue]===l?l:0;x.img=L,u=ae(l)}H.updateGLVolume(),q()}}function ae(x){const F=H.volumes[0],L=d||H.volumes[1]&&H.volumes[1].img;if(!F||!L)return null;const ue=F.hdr.pixDims||[],Q=ue[1]&&ue[2]&&ue[3]?ue[1]*ue[2]*ue[3]:1,Ue=X(F.img,L,Q),me=Ue.reduce((qe,je)=>qe+je.volume_mm3,0),he=Ue.find(qe=>qe.label===x);if(!he)return null;const Y=me>0?he.volume_mm3/me*100:0,Be=[he.name,`${Ne(he.volume_mm3)} cm3   (${Y.toFixed(1)}% of brain)`,`${he.voxels.toLocaleString()} voxels`,`intensity  ${he.mean.toFixed(0)} +/- ${he.stdev.toFixed(0)}`];let ye=[1,1,1,1];if(s&&s.R&&s.R[x]!=null){const qe=je=>Math.min(255,je*.55+130)/255;ye=[qe(s.R[x]),qe(s.G[x]),qe(s.B[x]),1]}return{lines:Be,color:ye}}let I=null;function q(){var he,Y;I||(I=document.createElement("div"),I.style.cssText="position:absolute;pointer-events:none;font:13px/1.55 system-ui,sans-serif;text-shadow:0 1px 2px #000;white-space:pre;color:#ebebeb",H.canvas.parentElement.appendChild(I));const x=(Y=(he=H.view)==null?void 0:he.screenSlices)==null?void 0:Y.find(Be=>Be.axCorSag===4);if(l===null||!u||!E()||!x){I.style.display="none";return}const F=window.devicePixelRatio||1,[L,ue]=x.leftTopWidthHeight;Object.assign(I.style,{left:`${L/F+8}px`,top:`${ue/F+8}px`});const{lines:Q,color:Ue}=u,me=Ue.slice(0,3).map(Be=>Math.round(Be*255)).join(",");I.innerHTML=`<span style="color:rgb(${me})">${tn(Q[0])}</span>
`+Q.slice(1).map(tn).join(`
`),I.style.display="block"}function N(){const x=E();if(!x||!k)return null;const F=ss(x,k);if(F===null)return null;const L=(d||x.img)[F];return L===void 0?null:Math.round(L*x.hdr.scl_slope+x.hdr.scl_inter)}function ie(x){E()&&(l=x===0||x===l?null:x,ee())}function O(){if(!g||!k||g.some((L,ue)=>H.volumes[ue+1]!==L))return;let x=null,F=0;for(let L=0;L<g.length;L++){const ue=g[L],Q=ss(ue,k);if(Q===null)return;const Ue=ue.img[Q];Number.isFinite(Ue)&&Ue>F&&(F=Ue,x=L)}return x}function j(x){if(x[c]){if(E()){const F=N();if(F===null||Number.isNaN(F))return;ie(F)}else{const F=O();if(F===void 0)return;const L=F===f?null:F;L!==f&&(f=L,M())}x.preventDefault()}}function $e(){return we(this,null,function*(){if(!Tn){Tn=!0,Nn=[];try{yield Ae()}finally{Tn=!1,modelSelect.value="-1",a()}}})}function Ae(){return we(this,null,function*(){var je;const x=modelSelect.value;if(x==="-1"||modelSelect.selectedIndex<0)return;const F=document.getElementById("memstatusItem");F&&(F.hidden=!0),W(),yield T();const L=wn[x],ue=(new URLSearchParams(window.location.search).get("precision")||"").toLowerCase(),Ue=$t($t({},qs(L,ue!=="fp16"&&ue!=="fp32")),ue==="fp32"?{forceFP32:!0}:{}),me=$t({},na),he=new URL("./",window.location.href).href;me.rootURL=he.endsWith("/")?he.slice(0,-1):he;const Y=H.volumes[0].img;let Be=null;const ye=Aa&&!Ue.quantize8Bit,qe=ye;if(ye&&dn&&Ue.webgpu_safetensor&&console.info("Safari WebGPU legacy gate active for non-V4 model; routing to native WebGL2."),!qe&&(!on||on.__isLost)&&"gpu"in navigator&&os<2&&(je=window.webgpuDiagnostics)!=null&&je.adapterObtained&&(os++,console.info(`[WebGPU] Re-initializing device after prior loss (attempt ${os})...`),yield Hs()),dn&&on&&!on.__isLost&&!qe&&Ue.webgpu_safetensor){console.log("Attempting WebGPU backend...");const Ce=Rt($t({},Ue),{enableTTA:!1});try{yield ta(on,me,Ce,H.volumes[0].hdr,Y,ot,ht);return}catch(de){Be=de,console.error("WebGPU inference failed, falling back to native WebGL2.",de)}}if(L.webgpu_safetensor){const Ce=ue==="int8"||ue==="rgba8",de=Rt($t({},qs(L,!1)),{quantize8Bit:Ce,autoQuantize8BitFallback:!Ce&&!!L.turbo});try{const{runInferenceWebGl2:V,nativeWebgl2Available:oe}=yield gt(()=>we(null,null,function*(){const{runInferenceWebGl2:ge,nativeWebgl2Available:De}=yield import("./inference-webgl2-KCvAzhde.js");return{runInferenceWebGl2:ge,nativeWebgl2Available:De}}),[],import.meta.url);if(oe()){console.log("Attempting native WebGL2 runner..."),yield V(me,de,H.volumes[0].hdr,Y,ot,ht);return}Be=new Error("Native WebGL2 unavailable (no OffscreenCanvas WebGL2 context)."),console.warn(Be.message)}catch(V){Be=V,console.error("Native WebGL2 failed.",V)}}Ca(Be||new Error(`No available backend could run ${Ue.modelName}.`))})}modelSelect.onchange=()=>(a(),$e()),a();function Re(x){return we(this,null,function*(){const F=E(),L=l!==null&&F&&d;L&&(F.img=d);try{return yield x()}finally{L&&ee()}})}function ke(){const x=H.volumes[1],F=(o==null?void 0:o.type)==="Brain_Extraction"?i:l!==null&&d?d:x.img;if(!F||F.length!==x.img.length)throw new Error("The segmentation mask is unavailable. Run the model again.");const L=new Uint8Array(F.length);for(let Q=0;Q<F.length;Q++)L[Q]=F[Q]!==0?1:0;const ue=Vs(x,L,"brain_mask");return Object.assign(ue.hdr,{datatypeCode:2,numBitsPerVoxel:8,scl_slope:1,scl_inter:0,cal_min:0,cal_max:1,intent_code:1002}),ue}function te(){return we(this,arguments,function*({includeMask:x=!1,useFreeSurfer:F=!1}={}){if(H.volumes.length<2){window.alert("No segmentation to save (run a model first).");return}const L=F?qn(n):null,ue=H.volumes.slice(1);yield Re(()=>we(null,null,function*(){for(const Q of ue){const Ue=!!Q.colormapLabel||Q.hdr.intent_code===1002;if(L&&Ue){const{img:me,maxLabel:he}=ga(Q.img,L),Y=ns(Q,me,Q.name,{datatypeCode:4,numBitsPerVoxel:16,scl_slope:1,scl_inter:0,cal_min:0,cal_max:he,intent_code:1002});yield Pn(Y,se(Q,ue.length,"_fs"))}else yield Pn(Q,se(Q,ue.length,""))}x&&(yield Pn(ke(),"binary_mask.nii.gz"))}))})}function se(x,F,L){return F>1?`segmentation_${x.name}${L}.nii.gz`:`segmentation${L}.nii.gz`}function R(){if(H.volumes.length<1){window.alert("No image loaded.");return}Pn(H.volumes[0],"conformed_input.nii.gz")}function K(){return we(this,null,function*(){if(H.volumes.length<1){window.alert("No image loaded.");return}yield Re(()=>we(null,null,function*(){yield H.saveDocument("brainchop.nvd")}))})}function D(){return we(this,arguments,function*({includeMask:x=!1,useFreeSurfer:F=!1}={}){if(H.volumes.length<2){window.alert("No segmentation to save (run a model first).");return}if(!p||!p.hdr||!p.hdr.affine){window.alert("Original input grid is unavailable — reload the image and try again.");return}const L=F?qn(n):null;ht("Reslicing to native space…",0),yield new Promise(ue=>setTimeout(ue,30));try{const ue=H.volumes.slice(1);for(const Q of ue){const Ue=!!Q.colormapLabel||Q.hdr.intent_code===1002,me=L&&Ue?L:null,he=yield Re(()=>le(Q,me));yield Pn(he,se(Q,ue.length,me?"_fs_native":"_native"))}if(x){const Q=le(ke());yield Pn(Q,"binary_mask_native.nii.gz")}ht("Saved native-space segmentation.",1)}catch(ue){console.error("Native-space reslice failed:",ue),window.alert("Native-space export failed: "+(ue&&ue.message?ue.message:ue))}})}function le(x,F=null){const L=x.img,ue=p.hdr.affine,Q=p.hdr.dims[1],Ue=p.hdr.dims[2],me=p.hdr.dims[3],he=x.hdr.dims[1],Y=x.hdr.dims[2],Be=x.hdr.dims[3],ye=(Me,ce)=>[Me[0][0]*ce[0]+Me[0][1]*ce[1]+Me[0][2]*ce[2]+Me[0][3],Me[1][0]*ce[0]+Me[1][1]*ce[1]+Me[1][2]*ce[2]+Me[1][3],Me[2][0]*ce[0]+Me[2][1]*ce[1]+Me[2][2]*ce[2]+Me[2][3]],qe=Go();if(!Io(qe,qo(...x.hdr.affine[0],...x.hdr.affine[1],...x.hdr.affine[2],...x.hdr.affine[3])))throw new Error("Segmentation affine is not invertible");const je=(Me,ce)=>[Me[0]*ce[0]+Me[1]*ce[1]+Me[2]*ce[2]+Me[3],Me[4]*ce[0]+Me[5]*ce[1]+Me[6]*ce[2]+Me[7],Me[8]*ce[0]+Me[9]*ce[1]+Me[10]*ce[2]+Me[11]],Ce=Me=>je(qe,ye(ue,Me)),de=Ce([0,0,0]),V=Ce([1,0,0]).map((Me,ce)=>Me-de[ce]),oe=Ce([0,1,0]).map((Me,ce)=>Me-de[ce]),ge=Ce([0,0,1]).map((Me,ce)=>Me-de[ce]),De=!!x.colormapLabel||x.hdr.intent_code===1002,lt=Q*Ue*me,Oe=Vs(p),Ie=(Me,ce,It)=>Me>=0&&Me<he&&ce>=0&&ce<Y&&It>=0&&It<Be?L[Me+ce*he+It*he*Y]:0;if(De){const Me=[];for(const dt of[-.25,.25])for(const Qe of[-.25,.25])for(const ve of[-.25,.25])Me.push([dt*V[0]+Qe*oe[0]+ve*ge[0],dt*V[1]+Qe*oe[1]+ve*ge[1],dt*V[2]+Qe*oe[2]+ve*ge[2]]);const ce=new Int16Array(lt),It=F?F.length:0;let et=0;const Bt=new Int32Array(8),Wt=new Int32Array(8);let qt=0;for(let dt=0;dt<me;dt++)for(let Qe=0;Qe<Ue;Qe++){let ve=de[0]+Qe*oe[0]+dt*ge[0],Se=de[1]+Qe*oe[1]+dt*ge[1],ne=de[2]+Qe*oe[2]+dt*ge[2];for(let J=0;J<Q;J++){let Te=0;for(let Ve=0;Ve<8;Ve++){const Ze=Ie(Math.round(ve+Me[Ve][0]),Math.round(Se+Me[Ve][1]),Math.round(ne+Me[Ve][2]));let Pe=-1;for(let re=0;re<Te;re++)if(Bt[re]===Ze){Pe=re;break}Pe<0?(Bt[Te]=Ze,Wt[Te]=1,Te++):Wt[Pe]++}let Ke=Bt[0],kt=Wt[0];for(let Ve=1;Ve<Te;Ve++)Wt[Ve]>kt&&(kt=Wt[Ve],Ke=Bt[Ve]);F&&Ke>=0&&Ke<It&&(Ke=F[Ke]),Ke>et&&(et=Ke),ce[qt++]=Ke,ve+=V[0],Se+=V[1],ne+=V[2]}}Oe.hdr.datatypeCode=4,Oe.hdr.numBitsPerVoxel=16,Oe.hdr.scl_slope=1,Oe.hdr.scl_inter=0,Oe.hdr.cal_min=0,Oe.hdr.cal_max=et,Oe.hdr.intent_code=1002,Oe.img=ce}else{const Me=x.img instanceof Float32Array,ce=Me?255:1,It=Me?.5:0,et=Me?new Uint8Array(lt):Oe.img;et.fill(0),Me&&(Object.assign(Oe.hdr,{datatypeCode:2,numBitsPerVoxel:8,cal_min:0,cal_max:1}),Oe.img=et),Oe.hdr.scl_slope=1/ce,Oe.hdr.scl_inter=0;const Wt=Me?(dt,Qe,ve)=>{const Se=Math.floor(dt),ne=Math.floor(Qe),J=Math.floor(ve),Te=dt-Se,Ke=Qe-ne,kt=ve-J,Ve=Ie(Se,ne,J),Ze=Ie(Se+1,ne,J),Pe=Ie(Se,ne+1,J),re=Ie(Se+1,ne+1,J),Ft=Ie(Se,ne,J+1),ft=Ie(Se+1,ne,J+1),tt=Ie(Se,ne+1,J+1),He=Ie(Se+1,ne+1,J+1),St=Ve+Te*(Ze-Ve),ct=Pe+Te*(re-Pe),_e=Ft+Te*(ft-Ft),fe=tt+Te*(He-tt),xe=St+Ke*(ct-St),yt=_e+Ke*(fe-_e);return xe+kt*(yt-xe)}:(dt,Qe,ve)=>Ie(Math.round(dt),Math.round(Qe),Math.round(ve));let qt=0;for(let dt=0;dt<me;dt++)for(let Qe=0;Qe<Ue;Qe++){let ve=de[0]+Qe*oe[0]+dt*ge[0],Se=de[1]+Qe*oe[1]+dt*ge[1],ne=de[2]+Qe*oe[2]+dt*ge[2];for(let J=0;J<Q;J++)et[qt++]=Wt(ve,Se,ne)*ce+It,ve+=V[0],Se+=V[1],ne+=V[2]}}return Oe}let Ge=!1,Fe=!1;const pe={cube:'<svg viewBox="0 0 24 24" class="save-opt-ico" aria-hidden="true"><path d="M12 2.75l8.25 4.75v9L12 21.25 3.75 16.5v-9z"/><path d="M12 12v9.25M3.75 7.5L12 12l8.25-4.5"/></svg>',grid:'<svg viewBox="0 0 24 24" class="save-opt-ico" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="2.5"/><path d="M3.5 9.5h17M3.5 14.5h17M9.5 3.5v17M14.5 3.5v17"/></svg>',volume:'<svg viewBox="0 0 24 24" class="save-opt-ico" aria-hidden="true"><path d="M12 3.5l8.5 4.5-8.5 4.5L3.5 8z"/><path d="M3.5 12l8.5 4.5 8.5-4.5M3.5 16l8.5 4.5 8.5-4.5"/></svg>',scene:'<svg viewBox="0 0 24 24" class="save-opt-ico" aria-hidden="true"><rect x="3.5" y="4.5" width="17" height="15" rx="2.5"/><path d="M3.5 9.5h17M9.5 9.5v10"/></svg>',arrow:'<svg viewBox="0 0 24 24" class="save-opt-arrow" aria-hidden="true"><path d="M12 4.5v11"/><path d="M7.5 11.5L12 16l4.5-4.5"/><path d="M5 19.5h14"/></svg>'},be=[{act:te,group:"seg",icon:"cube",title:"Conformed space",sub:"256³ · 1 mm isotropic",need:"seg"},{act:D,group:"seg",icon:"grid",title:"Native space",sub:"Resampled to the input grid",need:"seg"},{act:R,group:"vol",icon:"volume",title:"Conformed input volume",sub:"Resampled T1 · 256³ · 1 mm",need:"img"},{act:K,group:"vol",icon:"scene",title:"Scene (.nvd)",sub:"Full viewer state document",need:"img"}];function Z(){const x=H.volumes.length>=1,F=H.volumes.length>=2,L=F&&o&&o.outputType!=="probability"&&(o.type!=="Brain_Extraction"||!!i),ue=F&&o&&o.outputType!=="probability"&&o.type!=="Brain_Extraction"&&!!qn(n),Q=de=>de==="seg"?F:x;let Ue=!1;const me=de=>be.map((V,oe)=>({o:V,i:oe})).filter(({o:V})=>V.group===de).map(({o:V,i:oe})=>{const ge=Q(V.need),De=ge&&!Ue?(Ue=!0," autofocus"):"";return`<button type="button" class="save-opt${ge?"":" disabled"}" data-i="${oe}"${ge?"":" disabled"}${De}>
          ${pe[V.icon]}
          <span class="save-opt-copy">
            <span class="save-opt-title">${V.title}</span>
            <span class="save-opt-sub">${V.sub}</span>
          </span>
          ${pe.arrow}
        </button>`}).join(""),he=[];ue&&he.push(`
        <label class="save-check-row" for="saveFreeSurfer">
          <input type="checkbox" id="saveFreeSurfer" class="save-checkbox"${Ge?" checked":""}>
          <span class="save-check-copy">
            <span class="save-check-title">FreeSurfer label IDs <span class="save-badge">Freeview</span></span>
            <span class="save-check-sub">FreeSurferColorLUT numbering · open directly with :colormap=lut</span>
          </span>
        </label>`),L&&he.push(`
        <label class="save-check-row" for="saveBinaryMask">
          <input type="checkbox" id="saveBinaryMask" class="save-checkbox"${Fe?" checked":""}>
          <span class="save-check-copy">
            <span class="save-check-title">Also save binary mask</span>
            <span class="save-check-sub">Foreground 1 · background 0</span>
          </span>
        </label>`);const Y=he.length?`<div class="save-modifiers" role="group" aria-label="Segmentation export options">${he.join("")}</div>`:"",ye=`
      <div class="save-sheet">
        <section class="save-section">
          <div class="save-section-head">
            <span class="save-section-label">Segmentation</span>
            ${F?"":'<span class="save-section-hint">Run a model first</span>'}
          </div>
          <div class="save-options">${me("seg")}</div>
          ${Y}
        </section>
        <section class="save-section save-section-divider">
          <div class="save-section-head">
            <span class="save-section-label">Volume &amp; Scene</span>
          </div>
          <div class="save-options">${me("vol")}</div>
        </section>
      </div>`;Jt("Save",ye,{hideClose:!0,saveMode:!0});const qe=document.getElementById("dialogMessage");if(!qe)return;const je=qe.querySelector("#saveFreeSurfer");je&&(je.onchange=()=>{Ge=je.checked});const Ce=qe.querySelector("#saveBinaryMask");Ce&&(Ce.onchange=()=>{Fe=Ce.checked}),qe.querySelectorAll(".save-opt:not(.disabled)").forEach(de=>{de.onclick=()=>{var lt,Oe;const V=be[parseInt(de.dataset.i,10)],oe=V.need==="seg"&&!!((lt=qe.querySelector("#saveBinaryMask"))!=null&&lt.checked),ge=V.need==="seg"&&ue&&!!((Oe=qe.querySelector("#saveFreeSurfer"))!=null&&Oe.checked),De=document.getElementById("appDialog");De&&De.open&&De.close(),V.need==="seg"?V.act({includeMask:oe,useFreeSurfer:ge}):V.act()}})}const We=document.getElementById("saveBtn");We&&(We.onclick=Z);function X(x,F,L){const Q=new Map,Ue=F.length;for(let Y=0;Y<Ue;Y++){const Be=F[Y];if(Be===0)continue;let ye=Q.get(Be);ye||(ye={count:0,sum:0,sumSq:0,hist:new Float64Array(256)},Q.set(Be,ye));const qe=x[Y];ye.count++,ye.sum+=qe,ye.sumSq+=qe*qe,ye.hist[qe]++}const me=(Y,Be,ye)=>{const qe=ye*Be;let je=0;for(let Ce=0;Ce<Y.length;Ce++)if(je+=Y[Ce],je>=qe)return Ce;return Y.length-1},he=[];for(const[Y,Be]of[...Q.entries()].sort((ye,qe)=>ye[0]-qe[0])){const ye=Be.sum/Be.count,qe=Math.max(0,Be.sumSq/Be.count-ye*ye);let je=0,Ce=0;for(let de=0;de<Be.hist.length;de++)if(Be.hist[de]>0){je=de;break}for(let de=Be.hist.length-1;de>=0;de--)if(Be.hist[de]>0){Ce=de;break}he.push({label:Y,name:n&&n[Y]!=null?n[Y]:`label_${Y}`,voxels:Be.count,volume_mm3:Be.count*L,min:je,max:Ce,q1:me(Be.hist,Be.count,.25),median:me(Be.hist,Be.count,.5),q3:me(Be.hist,Be.count,.75),mean:ye,stdev:Math.sqrt(qe)})}return he}function Ee(x,F=null){const L=F?["label","fs_label","name","voxels","volume_mm3","min","max","q1","median","q3","mean","stdev"]:["label","name","voxels","volume_mm3","min","max","q1","median","q3","mean","stdev"],ue=me=>Number.isInteger(me)?String(me):me.toFixed(6),Q=me=>/[",\n]/.test(me)?`"${String(me).replace(/"/g,'""')}"`:String(me),Ue=[L.join(",")];for(const me of x){const he=F?[me.label,me.label<F.length?F[me.label]:me.label,Q(me.name)]:[me.label,Q(me.name)];he.push(me.voxels,ue(me.volume_mm3),me.min,me.max,me.q1,me.median,me.q3,ue(me.mean),ue(me.stdev)),Ue.push(he.join(","))}return Ue.join(`
`)+`
`}function st(x,F=null){const L=new Blob([Ee(x,F)],{type:"text/csv"}),ue=URL.createObjectURL(L),Q=document.createElement("a");Q.href=ue,Q.download="mask_stats.csv",document.body.appendChild(Q),Q.click(),Q.remove(),URL.revokeObjectURL(ue)}const Ne=x=>{const F=x/1e3;return F>=10?Math.round(F).toLocaleString():F.toFixed(1)};function rt(x,F,L=null){const ue=Math.max(...x.map(Y=>Y.volume_mm3)),Q=Y=>s&&s.R&&s.R[Y.label]!=null?`rgb(${s.R[Y.label]},${s.G[Y.label]},${s.B[Y.label]})`:"#6b9bd1";let Ue="";for(const Y of x){const Be=F>0?Y.volume_mm3/F*100:0,ye=ue>0?Y.volume_mm3/ue*100:0,qe=l===Y.label,je=L&&Y.label<L.length?L[Y.label]:null,Ce=`<span class="stat-val" data-cm3="${Ne(Y.volume_mm3)}" data-pct="${Be.toFixed(1)}%">${Ne(Y.volume_mm3)}</span>`,de=`<span class="stat-bar" style="width:${ye.toFixed(2)}%;background:${Q(Y)}" data-w-abs="${ye.toFixed(2)}" data-w-pct="${Be.toFixed(2)}"></span>`,V=(ge,De)=>`<div class="stat-kv"><span class="k">${ge}</span><span class="v">${De}</span></div>`,oe=V("min",Y.min)+V("max",Y.max)+V("Q1",Y.q1)+V("Q3",Y.q3)+V("median",Y.median)+V("mean",Y.mean.toFixed(2))+V("SD",Y.stdev.toFixed(2))+V("voxels",Y.voxels.toLocaleString());Ue+=`
        <div class="stat-row${qe?" is-isolated":""}" data-label="${Y.label}" data-name="${tn(Y.name.toLowerCase())}">
          <div class="stat-line">
            <button type="button" class="stat-trigger" aria-expanded="false">
              <span class="stat-chevron" aria-hidden="true"></span>
              <span class="stat-swatch" style="background:${Q(Y)}" aria-hidden="true"></span>
              <span class="stat-name">${tn(Y.name)}</span>
              <span class="stat-track" aria-hidden="true">${de}</span>
              ${Ce}
            </button>
            <button type="button" class="stat-iso${qe?" active":""}" aria-pressed="${qe}" aria-label="Isolate ${tn(Y.name)}">${qe?"isolated":"isolate"}</button>
          </div>
          <div class="stat-detail" hidden>
            <div class="stat-detail-meta">
              <span class="stat-detail-fullname">${tn(Y.name)}</span>
              <span class="stat-detail-badges">
                <span class="stat-id-chip">ID ${Y.label}</span>
                ${je?`<span class="save-badge">FS ${je}</span>`:""}
              </span>
            </div>
            <div class="stat-detail-grid">${oe}</div>
          </div>
        </div>`}const me=x.length===1?"region":"regions",he=x.length>8?`<search class="stat-search">
           <input type="search" id="statsFilterInput" class="stat-filter" placeholder="Filter regions…" aria-label="Filter regions" autocorrect="off" autocapitalize="none" spellcheck="false">
         </search>`:"";return`
      <div id="statsPanel">
        <div class="stat-toolbar">
          <div class="stat-toggle" role="group" aria-label="Volume display unit">
            <button type="button" data-mode="cm3" class="active" aria-pressed="true">cm³</button>
            <button type="button" data-mode="pct" aria-pressed="false">% of total</button>
          </div>
          <span class="stat-total" id="statsUnitLabel">${x.length} ${me} &middot; ${Ne(F)} cm³</span>
          ${he}
        </div>
        <div id="statsRows">
          ${Ue}
          <p id="statsEmpty" class="stat-empty" hidden>No matching regions</p>
        </div>
        <div class="stat-footer">
          <span class="stat-footer-hint">Select a row for intensity stats &middot; Isolate solos in 3D</span>
          <button type="button" id="statsDownloadBtn" class="stat-csv-btn">
            ${pe.arrow}
            <span>Download CSV</span>
          </button>
        </div>
      </div>`}saveStatsBtn.onclick=function(){if(H.volumes.length<2){Jt("Region volumes","<p>No segmentation to measure — run a model first.</p>");return}if(H.volumes[1].img instanceof Float32Array){Jt("Region volumes","<p>Region statistics require a discrete label segmentation, not continuous probability maps.</p>");return}const x=H.volumes[0].img,F=d||H.volumes[1].img;if(!x||!F||x.length!==F.length){Jt("Region volumes","<p>Input and segmentation grids do not match.</p>");return}const L=H.volumes[0].hdr.pixDims||[],ue=L[1]&&L[2]&&L[3]?L[1]*L[2]*L[3]:1;let Q=X(x,F,ue);if(Q.length===0){Jt("Region volumes","<p>No non-background labels found in the segmentation.</p>");return}Q=Q.slice().sort((Ce,de)=>de.volume_mm3-Ce.volume_mm3);const Ue=Q.reduce((Ce,de)=>Ce+de.volume_mm3,0),me=o&&o.type!=="Brain_Extraction"?qn(n):null;Jt("Region volumes",rt(Q,Ue,me),{hideClose:!0,statsMode:!0});const he=document.getElementById("statsPanel");if(!he)return;let Y="cm3",Be=Q.length;const ye=()=>{const Ce=document.getElementById("statsUnitLabel");if(!Ce)return;const de=Be===Q.length?`${Q.length} ${Q.length===1?"region":"regions"}`:`${Be} of ${Q.length} regions`,V=Y==="pct"?"100% of volume":`${Ne(Ue)} cm³`;Ce.innerHTML=`${de} &middot; ${V}`};he.querySelectorAll(".stat-toggle button").forEach(Ce=>{Ce.onclick=()=>{Y=Ce.dataset.mode,he.querySelectorAll(".stat-toggle button").forEach(de=>{const V=de===Ce;de.classList.toggle("active",V),de.setAttribute("aria-pressed",String(V))}),ye(),he.querySelectorAll(".stat-row").forEach(de=>{const V=de.querySelector(".stat-val"),oe=de.querySelector(".stat-bar");V.textContent=Y==="pct"?V.dataset.pct:V.dataset.cm3,oe.style.width=(Y==="pct"?oe.dataset.wPct:oe.dataset.wAbs)+"%"})}});const qe=document.getElementById("statsFilterInput"),je=document.getElementById("statsEmpty");if(qe){const Ce=()=>{const de=qe.value.trim().toLowerCase();Be=0,he.querySelectorAll(".stat-row").forEach(V=>{const oe=!de||V.dataset.name.includes(de)||V.dataset.label===de;V.hidden=!oe,oe&&Be++}),je&&(je.hidden=Be>0),ye()};qe.oninput=Ce,qe.addEventListener("keydown",de=>{de.key==="Escape"&&qe.value!==""&&(de.preventDefault(),de.stopPropagation(),qe.value="",Ce())})}he.querySelectorAll(".stat-trigger").forEach(Ce=>{Ce.onclick=()=>{const de=Ce.closest(".stat-row"),V=de.querySelector(".stat-detail"),oe=V.hidden;V.hidden=!oe,de.classList.toggle("is-expanded",oe),Ce.setAttribute("aria-expanded",String(oe))}}),he.querySelectorAll(".stat-iso").forEach(Ce=>{Ce.onclick=()=>{const de=parseInt(Ce.closest(".stat-row").dataset.label,10);Number.isNaN(de)||ie(de);const V=document.getElementById("appDialog");V&&V.open&&V.close()}}),document.getElementById("statsDownloadBtn").onclick=()=>st(Q,me)};function at(){H.volumes.length<=1&&(p=H.volumes[0]||null,v=p&&p.name?p.name:"input.nii.gz",o=null,i=null,A(),modelSelect.value="-1",a(),H.volumes[0]&&opacitySlider0.oninput())}const it=new Map;function bt(x){return we(this,null,function*(){if(it.has(x))return it.get(x);const L=yield(yield fetch(x)).json();return it.set(x,L),L})}function Le(x,F,L=1){let ue=0;for(let Q=0;Q<256;Q++)x[Q]>0&&ue++;return(!F||ue!==F.length)&&(t="Failed to Predict Some Labels - "),F.map((Q,Ue)=>{const me=Ue<256?x[Ue]:0,he=me>0?`${Ne(me*L)} cm3`:"Missing";return he==="Missing"&&(t+=`${Q}, `),`${Q}   ${he}`})}function Je(x,F,L){return we(this,null,function*(){var Be,ye;const ue=(Be=F.probabilityDisplayMin)!=null?Be:.005,{probabilityOverlayAlpha:Q=96,probabilityOverlayFloor:Ue=192}=F,me=(L==null?void 0:L.tint)||[255,255,255],he=`probability-light-${me.join("-")}-${Ue}-${Q}`;if(!H.hasColormap(he)){const[qe,je,Ce]=me.map(de=>Math.round(de*Ue/255));H.addColormap(he,{R:[qe,me[0]],G:[je,me[1]],B:[Ce,me[2]],A:[0,Q],I:[0,255]})}const Y=ns(H.volumes[0],x instanceof Float32Array?x:Float32Array.from(x),(ye=L==null?void 0:L.name)!=null?ye:H.volumes[0].name,{scl_inter:0,scl_slope:1,datatypeCode:16,numBitsPerVoxel:32,cal_min:0,cal_max:1,intent_code:1001},{calMin:ue,calMax:1,robustMin:ue,robustMax:1,globalMin:0,globalMax:1,colormapType:1,colormap:he,opacity:Number(opacitySlider1.value),modulateAlpha:1});return Y.modulationImage=Y.id,yield H.model.addVolume(Y),H.volumes.at(-1)})}function ot(x,F,L,ue){return we(this,null,function*(){var qe,je,Ce;if(U(),W(),n=null,s=null,o=L,i=L.type==="Brain_Extraction"&&ue||null,L.outputType==="probability"){const de=Array.isArray(x)?x:[x],V=[];for(let oe=0;oe<de.length;oe++)V.push(yield Je(de[oe],L,(qe=L.probabilityTissues)==null?void 0:qe[oe]));L.probabilityPostprocess==="cat-lite"&&V.length===3&&(g=V),A(L),yield H.updateGLVolume();return}const Q=x instanceof Uint8Array?x:new Uint8Array(x.buffer,x.byteOffset||0,x.byteLength);let Ue,me=null,he=0,Y={calMin:0,calMax:255,robustMin:0,robustMax:255,globalMin:0,globalMax:255};if(L.type==="Brain_Masking"){const de=["Background","Brain Mask"];n=de.slice();const V=[0,217],oe=[0,119],ge=[0,33];s={R:V,G:oe,B:ge};const De={R:V,G:oe,B:ge,labels:de},lt="brainchop-label-mask";H.addColormap(lt,De),Ue=lt,me=Ss(De),he=1002,Y={calMin:0,calMax:1,robustMin:0,robustMax:1,globalMin:0,globalMax:1}}else if(L.colormapPath){const de=rs(Q),V=yield bt(L.colormapPath);n=V.labels?V.labels.slice():null,s={R:V.R,G:V.G,B:V.B};const oe=H.volumes[0].hdr.pixDims||[],ge=oe[1]&&oe[2]&&oe[3]?oe[1]*oe[2]*oe[3]:1,De=V.labels?Le(de,V.labels,ge):[],lt=Rt($t($t({R:V.R,G:V.G,B:V.B},V.I?{I:V.I}:{}),V.A?{A:V.A}:{}),{labels:De}),Oe=`brainchop-label-${L.id}`;H.addColormap(Oe,lt),Ue=Oe,me=Ss(lt);const Ie=Math.max(1,((Ce=(je=V.R)==null?void 0:je.length)!=null?Ce:256)-1);he=1002,Y={calMin:0,calMax:Ie,robustMin:0,robustMax:Ie,globalMin:0,globalMax:Ie}}else{const de=rs(Q);Y=Ma(de),Ue=F.atlasSelectedColorTable.toLowerCase(),L.type==="Brain_Extraction"&&(Ue="copper2"),H.hasColormap(Ue)||(Ue="actc")}const Be=ns(H.volumes[0],Q,H.volumes[0].name,{datatypeCode:2,numBitsPerVoxel:8,scl_inter:0,scl_slope:1,cal_min:Y.calMin,cal_max:Y.calMax,intent_code:he},Rt($t(Rt($t({},Y),{colormap:Ue}),me?{colormapLabel:me}:{}),{opacity:Number(opacitySlider1.value)}));yield H.model.addVolume(Be);const ye=H.volumes.at(-1);me&&ye&&!ye.colormapLabel&&(ye.colormapLabel=me),A(L),yield H.updateGLVolume()})}function pt(x){return we(this,null,function*(){var F;if(typeof x=="string")try{x=JSON.parse(x)}catch(L){console.error("Failed to parse telemetry data",L);return}x=yield pa(x,(F=H.view)==null?void 0:F.gl),e=`:: Diagnostics https://github.com/neuroneural/brainchop/issues ::
`;for(const L in x)x[L]!==null&&x[L]!==void 0&&(e+=`${L}: ${x[L]}
`)})}function mt(x){const F=String(x).split(" · ").map(L=>L.trim()).filter(L=>L!=="");return F.length<=1?tn(String(x)):F.map((L,ue)=>`<span class="loc-seg"${ue>=2?' style="opacity:.75"':""}>${tn(L)}</span>`).join('<span class="loc-sep">&middot;</span>')}function ht(x="",F=-1,L="",ue=[]){if(x){console.log(x);const Q=document.getElementById("location");Q&&(Q.innerHTML=mt(x))}if(isNaN(F)){const Q=document.getElementById("memstatusItem");Q&&(Q.hidden=!1),memstatus.style.color="#ef4444",memstatus.textContent="Memory Issue"}else F>=0&&(modelProgress.value=F*modelProgress.max);L&&(Tn?(Nn.push(String(L)),console.warn("[backend]",L)):Jt("Message",tn(String(L)).replace(/\n/g,"<br>"))),ue&&Object.keys(ue).length>0&&pt(ue)}function Gt(x){k=x.vox,document.getElementById("location").innerHTML=x.string.split("   ").map(F=>F.trim()).filter(F=>F!=="").map(F=>`<span class="loc-seg">${tn(F)}</span>`).join('<span class="loc-sep">&middot;</span>')}const Ct=new URLSearchParams(window.location.search).get("viewer")==="webgpu"?"webgpu":"webgl2",H=new zo({backend:Ct,matcaps:{Shiny:Fo}});yield H.attachTo("gl1"),console.info("NiiVue viewer backend:",H.backend),H.backgroundColor=[0,0,0,1],H.is3DCrosshairVisible=!0,H.clipPlaneColor=[.7,0,.7,.5],H.gamma=1,H.registerVolumeTransform(Ro),H.isLegendVisible=!1,H.addEventListener("locationChange",x=>Gt(x.detail)),H.canvas.addEventListener("click",j),window.addEventListener("keydown",x=>{x.key==="Escape"&&(document.querySelector("dialog[open]")||(l!==null?(l=null,ee()):f!==null&&(f=null,M())))});const Nt=H.drawScene.bind(H);H.drawScene=function(x){const F=Nt(x);try{q()}catch(L){console.warn("isolation HUD draw failed",L)}return F},H.primaryDragMode=$s.crosshair,H.secondaryDragMode=$s.slicer3D,H.showRender=Lo.ALWAYS,H.isYoked3DTo2DZoom=!0,H.crosshairGap=11;{const x=document.getElementById("dragSegmented");x&&x.querySelectorAll("button").forEach(F=>F.classList.toggle("active",parseInt(F.dataset.drag,10)===H.secondaryDragMode))}H.volumeIsNearestInterpolation=!0,yield H.loadVolumes([{url:"./t1_crop.nii.gz"}]),modelSelect.innerHTML="";const Ut=document.createElement("option");Ut.text="Run Segmentation Model",Ut.value="-1",Ut.disabled=!0,Ut.selected=!0,Ut.hidden=!0,modelSelect.appendChild(Ut);for(let x=0;x<wn.length;x++){console.log(`Adding model option: ${wn[x].modelName}`);const F=document.createElement("option");F.text=wn[x].modelName,F.value=x,wn[x].type==="Divider"&&(F.disabled=!0),modelSelect.appendChild(F)}H.addEventListener("volumeLoaded",at),at(),ka(H),ya(H),modelSelect.value="-1",a(),z(-1),yield Hs();const zt=new URLSearchParams(window.location.search).get("model");zt!==null&&zt!==""&&Number(zt)>=0&&Number(zt)<wn.length?(modelSelect.value=String(Number(zt)),a(),$e()):dn&&on&&(window.requestIdleCallback?F=>window.requestIdleCallback(F,{timeout:600}):F=>setTimeout(F,200))(()=>Zr(on))})}function tn(e){return String(e).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Ca(e){const n=(Nn.length?Nn:[e&&e.message?e.message:String(e||"unknown error")]).map(s=>`<li>${tn(s)}</li>`).join("");Jt("Segmentation failed",`<p>No available backend could run this model on this device.</p>
     <ul style="margin:0 0 4px 1.1em;padding:0;font-size:0.92em;line-height:1.45">${n}</ul>
     <p style="font-size:0.88em;color:#9aa4af">Full details are in the browser console and under Diagnostics.</p>`)}function Jt(e,t,n={}){const s=document.getElementById("appDialog"),o=document.getElementById("dialogTitle"),i=document.getElementById("dialogMessage"),r=document.getElementById("dialogCloseBtn");if(!s)return;o.textContent=e,i.innerHTML=t,r.style.display=n.hideClose?"none":"",r.onclick=()=>s.close(),s.classList.toggle("dialog-save",!!n.saveMode),s.classList.toggle("dialog-stats",!!n.statsMode);const a=document.getElementById("dialogXBtn");a&&(a.onclick=()=>s.close()),s.showModal()}function za(){return we(this,null,function*(){try{const t=yield(yield fetch("https://api.github.com/repos/neuroneural/brainchop")).json();document.getElementById("star-count").textContent=t.stargazers_count}catch(e){console.error("Error fetching star count:",e)}})}(function(){return we(this,null,function*(){yield Ba(),yield za()})})();export{Zs as a,Ks as d,Ys as p};
