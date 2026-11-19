const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./dkatlas24_int8_v3_runner-DFvZj3Cm.js","./vendor-niivue-BztUWqGV.js","./vendor-CKvLRpOF.js","./vendor-math-oqRZD8Fx.js"])))=>i.map(i=>d[i]);
var Lr=Object.defineProperty,Ur=Object.defineProperties;var Wr=Object.getOwnPropertyDescriptors;var Un=Object.getOwnPropertySymbols;var xs=Object.prototype.hasOwnProperty,ys=Object.prototype.propertyIsEnumerable;var Tt=Math.pow,vs=(e,t,n)=>t in e?Lr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,bt=(e,t)=>{for(var n in t||(t={}))xs.call(t,n)&&vs(e,n,t[n]);if(Un)for(var n of Un(t))ys.call(t,n)&&vs(e,n,t[n]);return e},Ct=(e,t)=>Ur(e,Wr(t));var $s=(e,t)=>{var n={};for(var s in e)xs.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&Un)for(var s of Un(e))t.indexOf(s)<0&&ys.call(e,s)&&(n[s]=e[s]);return n};var ze=(e,t,n)=>new Promise((s,r)=>{var i=f=>{try{a(n.next(f))}catch(l){r(l)}},o=f=>{try{a(n.throw(f))}catch(l){r(l)}},a=f=>f.done?s(f.value):Promise.resolve(f.value).then(i,o);a((n=n.apply(e,t)).next())});import{z as Cn,$ as qr,t as Rr,L as Ss,Y as Gr,M as ks,a as Ir,_ as Er}from"./vendor-niivue-BztUWqGV.js";import{g as Tr}from"./vendor-CKvLRpOF.js";import{l as Or,n as Nr,p as Dr}from"./vendor-math-oqRZD8Fx.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();const Vr="modulepreload",Hr=function(e,t){return new URL(e,t).href},Ps={},ft=function(t,n,s){let r=Promise.resolve();if(n&&n.length>0){let l=function(c){return Promise.all(c.map(m=>Promise.resolve(m).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),f=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=l(n.map(c=>{if(c=Hr(c,s),c in Ps)return;Ps[c]=!0;const m=c.endsWith(".css"),d=m?'[rel="stylesheet"]':"";if(s)for(let p=o.length-1;p>=0;p--){const g=o[p];if(g.href===c&&(!m||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${d}`))return;const u=document.createElement("link");if(u.rel=m?"stylesheet":Vr,m||(u.as="script"),u.crossOrigin="",u.href=c,f&&u.setAttribute("nonce",f),document.head.appendChild(u),m)return new Promise((p,g)=>{u.addEventListener("load",p),u.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return t().catch(i)})},dn=new WeakMap;class jr{getLabelMeta(t){return dn.get(t)||null}idx(t,n,s,r){return s*r[0]*r[1]+n*r[0]+t}check_previous_slice(t,n,s,r,i,o,a,f,l,c){let m=0;if(!i)return 0;const d=t[this.idx(s,r,i,o)];if(a>=6){const u=this.idx(s,r,i-1,o);d===t[u]&&(l[m++]=n[u])}if(a>=18){if(s){const u=this.idx(s-1,r,i-1,o);d===t[u]&&(l[m++]=n[u])}if(r){const u=this.idx(s,r-1,i-1,o);d===t[u]&&(l[m++]=n[u])}if(s<o[0]-1){const u=this.idx(s+1,r,i-1,o);d===t[u]&&(l[m++]=n[u])}if(r<o[1]-1){const u=this.idx(s,r+1,i-1,o);d===t[u]&&(l[m++]=n[u])}}if(a===26){if(s&&r){const u=this.idx(s-1,r-1,i-1,o);d===t[u]&&(l[m++]=n[u])}if(s<o[0]-1&&r){const u=this.idx(s+1,r-1,i-1,o);d===t[u]&&(l[m++]=n[u])}if(s&&r<o[1]-1){const u=this.idx(s-1,r+1,i-1,o);d===t[u]&&(l[m++]=n[u])}if(s<o[0]-1&&r<o[1]-1){const u=this.idx(s+1,r+1,i-1,o);d===t[u]&&(l[m++]=n[u])}}return m?(this.fill_tratab(f,l,m,c),l[0]):0}do_initial_labelling(t,n,s,r=null){const i=n[0]|0,o=n[1]|0,a=n[2]|0,f=i*o,l=f*a;let c=1;const m=8192;let d=m,u=new Uint32Array(d),p;if(s===6&&r&&r.il&&r.il.length===l){if(p=r.il,r.dirty)p.fill(0);else if(r.runs&&r.runLen>0){const _=r.runs,h=r.runLen;for(let w=0;w<h;w+=2)p.fill(0,_[w],_[w+1])}}else p=new Uint32Array(l),s===6&&r&&(r.il=p,r.runs=null,r.runLen=0,r.dirty=!1);if(s===6){r&&(r.dirty=!0);const _=(t instanceof Uint8Array||t instanceof Uint8ClampedArray)&&(t.byteOffset&3)===0&&(i&3)===0&&t.length>=l?new Uint32Array(t.buffer,t.byteOffset,l>>2):null;let h=r&&r.runs?r.runs:new Uint32Array(8192),w=h.length,y=0,b=0,k=0,F=0,$=-1,B=-1,S=a,M=-1;for(let z=0;z<a;z++){const R=z*f;for(let G=0;G<o;G++){const T=R+G*i;let C=0;if(_){const ie=T+i>>2;let ce=T>>2;for(;ce<ie&&_[ce]===0;)ce++;if(ce===ie)continue;C=(ce<<2)-T}let I=!1;for(;C<i;C++){const ie=T+C;if(_&&!I&&(C&3)===0&&_[ie>>2]===0){C+=3;continue}const ce=t[ie];if(ce===0){I&&(h[y++]=ie,I=!1);continue}if(!I){if(y+2>w){w<<=1;const W=new Uint32Array(w);W.set(h),h=W}h[y++]=ie,I=!0}$<0&&($=ie,S=z),B=ie,M=z;let N=0;if(z>0&&t[ie-f]===ce&&(b=p[ie-f],N=1),C>0&&t[ie-1]===ce){const W=p[ie-1];N===0?b=W:N===1?k=W:F=W,N++}if(G>0&&t[ie-i]===ce){const W=p[ie-i];N===0?b=W:N===1?k=W:F=W,N++}if(N===0){if(p[ie]=c,c>=d){d+=m;const W=new Uint32Array(d);W.set(u),u=W}u[c-1]=c,c++}else if(p[ie]=b,N===2&&k!==b){let W=b;for(;u[W-1]!==W;)W=u[W-1];let X=k;for(;u[X-1]!==X;)X=u[X-1];const Q=W<X?W:X;u[W-1]=Q,u[X-1]=Q}else if(N===3&&(k!==b||F!==b)){let W=b;for(;u[W-1]!==W;)W=u[W-1];let X=k;for(;u[X-1]!==X;)X=u[X-1];let Q=F;for(;u[Q-1]!==Q;)Q=u[Q-1];let O=W<X?W:X;Q<O&&(O=Q),u[W-1]=O,u[X-1]=O,u[Q-1]=O}}I&&(h[y++]=T+i)}}for(let z=0;z<c-1;z++){let R=z;for(;u[R]!==R+1;)R=u[R]-1;u[z]=R+1}return r&&(r.runs=h,r.runLen=y,r.dirty=!1),this._lastInitialRange={conn:6,fgStart:$,fgEnd:B,minSl:S,maxSl:M,runs:h,runLen:y},[c-1,u,p]}const g=new Uint32Array(32),v=new Uint32Array(32),P=new Uint32Array(27);for(let _=0;_<a;_++)for(let h=0;h<o;h++)for(let w=0;w<i;w++){let y=0;const b=t[this.idx(w,h,_,n)];if(b!==0){if(P[0]=this.check_previous_slice(t,p,w,h,_,n,s,u,g,v),P[0]&&(y+=1),s>=6){if(w){const k=this.idx(w-1,h,_,n);b===t[k]&&(P[y++]=p[k])}if(h){const k=this.idx(w,h-1,_,n);b===t[k]&&(P[y++]=p[k])}}if(s>=18){if(h&&w){const k=this.idx(w-1,h-1,_,n);b===t[k]&&(P[y++]=p[k])}if(h&&w<i-1){const k=this.idx(w+1,h-1,_,n);b===t[k]&&(P[y++]=p[k])}}if(y)p[this.idx(w,h,_,n)]=P[0],this.fill_tratab(u,P,y,v);else{if(p[this.idx(w,h,_,n)]=c,c>=d){d+=m;const k=new Uint32Array(d);k.set(u),u=k}u[c-1]=c,c++}}}for(let _=0;_<c-1;_++){let h=_;for(;u[h]!==h+1;)h=u[h]-1;u[_]=h+1}return this._lastInitialRange=null,[c-1,u,p]}fill_tratab(t,n,s,r){let o=2147483647;for(let a=0;a<s;a++){let f=n[a];for(;t[f-1]!==f;)f=t[f-1];r[a]=f,o=Math.min(o,f)}for(let a=0;a<s;a++)t[r[a]-1]=o}translate_labels(t,n,s,r,i=null,o=null){const a=n[0]*n[1]*n[2];if(o&&(r===0||o.fgStart<0))return i&&(this._lastMeta={conn:o.conn,cl:0,fgStart:0,fgEnd:-1,minSl:0,maxSl:-1,ls2bw:new Uint32Array(1),sumls:new Uint32Array(1),distinctFgClasses:0,bw:i}),[0,t];let f=0;for(let g=0;g<r;g++)s[g]>f&&(f=s[g]);const l=new Uint32Array(f+1),c=i&&o?new Uint32Array(r+1):null,m=i&&o?new Uint32Array(r+1):null,d=o?o.fgStart:0,u=o?o.fgEnd:a-1;let p=0;if(o&&o.runs){const g=o.runs,v=o.runLen;for(let P=0;P<v;P+=2){const _=g[P],h=g[P+1];for(let w=_;w<h;w++){const y=s[t[w]-1];let b=l[y];b||(p+=1,b=p,l[y]=b,c&&(c[b]=i[w])),t[w]=b,m&&m[b]++}}}else for(let g=d;g<=u;g++){const v=t[g];if(v){const P=s[v-1];let _=l[P];_||(p+=1,_=p,l[P]=_,c&&(c[_]=i[g])),t[g]=_,m&&m[_]++}}if(i&&o){const g=c.slice(0,p+1),v=m.slice(0,p+1);let P=0;if(p>0){const _=g[1];P=1;for(let h=2;h<=p;h++)if(g[h]!==_){P=2;break}}this._lastMeta={conn:o.conn,cl:p,fgStart:o.fgStart,fgEnd:o.fgEnd,minSl:o.minSl,maxSl:o.maxSl,runs:o.runs,runLen:o.runLen,ls2bw:g,sumls:v,distinctFgClasses:P,bw:i}}return[p,t]}neighbor_winners(t,n,s,r,i=null,o=null){const a=n[0],f=n[1],l=n[2],c=a*f,m=!!(o&&i);let d=!1;for(let w=1;w<=r;w++)if(!s[w]){d=!0;break}if(!d)return m&&console.log("[relabel] 0/0 suppressed components resolved within their own class family (0 fell back to the unrestricted neighbour vote)"),new Uint32Array(r+1);const u=m?new Int32Array(r+1).fill(-1):null,p=new Map,g=(w,y)=>{let b=p.get(w);b||(b=new Map,p.set(w,b)),b.set(y,(b.get(y)||0)+1)},v=dn.get(t),P=v&&v.cl===r&&t.length===c*l;if(P&&v.runs){const w=v.runs,y=v.runLen;for(let b=0;b<y;b+=2){const k=w[b],F=w[b+1],$=k/c|0,B=k-$*c,S=B/a|0;let M=B-S*a;for(let z=k;z<F;z++,M++){const R=t[z];if(s[R])continue;m&&u[R]<0&&(u[R]=o(i[z]));let G;M>0&&(G=s[t[z-1]])&&g(R,G),M<a-1&&(G=s[t[z+1]])&&g(R,G),S>0&&(G=s[t[z-a]])&&g(R,G),S<f-1&&(G=s[t[z+a]])&&g(R,G),$>0&&(G=s[t[z-c]])&&g(R,G),$<l-1&&(G=s[t[z+c]])&&g(R,G)}}}else{const w=P?v.minSl:0,y=P?v.maxSl:l-1;let b=w*c;for(let k=w;k<=y;k++)for(let F=0;F<f;F++)for(let $=0;$<a;$++,b++){const B=t[b];if(B===0||s[B])continue;m&&u[B]<0&&(u[B]=o(i[b]));let S;$>0&&(S=s[t[b-1]])&&g(B,S),$<a-1&&(S=s[t[b+1]])&&g(B,S),F>0&&(S=s[t[b-a]])&&g(B,S),F<f-1&&(S=s[t[b+a]])&&g(B,S),k>0&&(S=s[t[b-c]])&&g(B,S),k<l-1&&(S=s[t[b+c]])&&g(B,S)}}const _=new Uint32Array(r+1).fill(0);let h=0;for(const[w,y]of p){const b=m?u[w]:0;let k=0,F=0;if(b>0){for(const[$,B]of y)o($)===b&&(B>F||B===F&&(k===0||$<k))&&(F=B,k=$);k&&h++}if(!k)for(const[$,B]of y)(B>F||B===F&&(k===0||$<k))&&(F=B,k=$);_[w]=k}return m&&console.log(`[relabel] ${h}/${p.size} suppressed components resolved within their own class family (${p.size-h} fell back to the unrestricted neighbour vote)`),_}finalize_volume(t,n,s,r,i,o=null,a=null,f=!1){const l=t.length,c=i?this.neighbor_winners(t,n,s,r,o,a):null,m=c?new Uint32Array(r+1):s;let d=0;for(let _=1;_<=r;_++){let h=s[_];c&&(h||(h=c[_]),m[_]=h),h>d&&(d=h)}const u=dn.get(t),p=u&&u.cl===r&&u.ls2bw.length===r+1&&u.fgEnd<l;let g=0;if(p&&u.runs){const _=u.runs,h=u.runLen;for(let b=1;b<=r;b++)u.sumls[b]>0&&m[b]>g&&(g=m[b]);if(u.bw===o&&o instanceof Uint8Array&&d<=255){const b=new Uint8Array(r+1);let k=!1;for(let $=1;$<=r;$++)u.sumls[$]>0&&m[$]!==u.ls2bw[$]&&(b[$]=1,k=!0);const F=f?o:o.slice();if(k)for(let $=0;$<h;$+=2){const B=_[$],S=_[$+1];for(let M=B;M<S;M++){const z=t[M];b[z]&&(F[M]=m[z])}}return[g,F]}const y=o instanceof Uint8Array&&d<=255?new Uint8Array(l):new Uint32Array(l);for(let b=0;b<h;b+=2){const k=_[b],F=_[b+1];for(let $=k;$<F;$++){const B=m[t[$]];B&&(y[$]=B)}}return[g,y]}const P=o instanceof Uint8Array&&d<=255?new Uint8Array(l):new Uint32Array(l);if(p){if(u.fgStart>=0&&u.fgEnd>=u.fgStart)for(let _=u.fgStart;_<=u.fgEnd;_++){const h=t[_];if(h!==0){const w=m[h];w&&(P[_]=w,w>g&&(g=w))}}}else for(let _=0;_<l;_++){const h=t[_];if(h!==0){const w=m[h];w&&(P[_]=w,w>g&&(g=w))}}return[g,P]}diagnose_components(t,n,s,r,i={}){var $,B,S;const o=($=i.topN)!=null?$:50,a=(B=i.minSize)!=null?B:1,f=(S=i.label)!=null?S:"diag",l=r[0],c=r[1],m=r[2],d=l*c,u=new Uint32Array(n+1),p=new Uint32Array(n+1);for(let M=0;M<t.length;M++){const z=s[M];z&&(u[z]=t[M],p[z]++)}const g=new Map,v=new Uint32Array(n+1),P=new Uint32Array(n+1),_=(M,z)=>{let R=g.get(M);R||(R=new Map,g.set(M,R)),R.set(z,(R.get(z)||0)+1)};for(let M=0;M<m;M++)for(let z=0;z<c;z++)for(let R=0;R<l;R++){const G=M*d+z*l+R,T=s[G];if(!T)continue;const C=u[T],I=ie=>{const ce=s[ie];if(ce===T)return;P[T]++;const N=ce?u[ce]:0;N===0?v[T]++:N!==C&&_(T,N)};R>0&&I(G-1),R<l-1&&I(G+1),z>0&&I(G-l),z<c-1&&I(G+l),M>0&&I(G-d),M<m-1&&I(G+d)}const h=new Map,w=new Map;for(let M=1;M<=n;M++){const z=u[M];h.set(z,(h.get(z)||0)+1),(!w.has(z)||p[M]>w.get(z))&&w.set(z,p[M])}const y=[];for(let M=1;M<=n;M++){if(p[M]<a)continue;const z=u[M],R=g.get(M);let G=0,T=0,C=0;if(R)for(const[ie,ce]of R)C+=ce,ce>T&&(T=ce,G=ie);const I=P[M]||1;y.push({comp:M,class:z,size:p[M],largestOfClass:p[M]===w.get(z)?"Y":"n",compsInClass:h.get(z),domNeighbor:G,domFracForeign:C?+(T/C).toFixed(2):0,domFracBoundary:+(T/I).toFixed(2),bgFrac:+(v[M]/I).toFixed(2)})}y.sort((M,z)=>z.domFracForeign-M.domFracForeign||z.size-M.size);const b=(M,z)=>{const R=z.map(T=>Math.max(T.h.length,...M.map(C=>String(C[T.k]).length))),G=T=>T.map((C,I)=>String(C).padStart(R[I])).join("  ");return[G(z.map(T=>T.h)),...M.map(T=>G(z.map(C=>T[C.k])))].join(`
`)},k=[{k:"comp",h:"comp"},{k:"class",h:"class"},{k:"size",h:"size"},{k:"largestOfClass",h:"lrg"},{k:"compsInClass",h:"nComp"},{k:"domNeighbor",h:"domNbr"},{k:"domFracForeign",h:"encF"},{k:"domFracBoundary",h:"encB"},{k:"bgFrac",h:"bgF"}];console.log(`[${f}] total components=${n}, distinct classes=${h.size}
[${f}] island candidates (encF≈1 + small size + lrg=n ⇒ swallowed island):
`+b(y.slice(0,o),k));const F=[...h.entries()].map(([M,z])=>({class:M,components:z,maxCompSize:w.get(M)})).sort((M,z)=>z.components-M.components);return console.log(`[${f}] per-class component counts (components=1 ⇒ fully connected):
`+b(F.slice(0,30),[{k:"class",h:"class"},{k:"components",h:"comps"},{k:"maxCompSize",h:"maxSize"}])),y}_collectComponentStats(t,n,s){const r=dn.get(s);if(r&&r.cl===n&&r.bw===t&&s.length===t.length)return[r.ls2bw,r.sumls];const i=t.length,o=new Uint32Array(n+1),a=new Uint32Array(n+1);for(let f=0;f<i;f++){const l=s[f];l>0&&(o[l]=t[f],a[l]++)}return[o,a]}_buildKeptMap(t,n,s,r,i){const o=new Uint32Array(s+1);let a=0;for(let l=1;l<=s;l++)t[l]>a&&(a=t[l]);const f=r==="all";if(a<=65535){const l=new Uint32Array(a+1),c=new Uint32Array(a+1);for(let m=1;m<=s;m++){const d=t[m];if(d!==0)if(f||r&&r.has&&r.has(d)){const u=n[m];(!c[d]||(i?u>=l[d]:u>l[d]))&&(l[d]=u,c[d]=m)}else o[m]=d}for(let m=1;m<=a;m++){const d=c[m];d>0&&(o[d]=m)}}else{const l=new Map;for(let c=1;c<=s;c++){const m=t[c];if(m!==0)if(f||r&&r.has&&r.has(m)){const d=n[c],u=l.get(m);(!u||(i?d>=u.sz:d>u.sz))&&l.set(m,{c,sz:d})}else o[c]=m}for(const[c,{c:m}]of l)o[m]=c}return o}largest_original_cluster_labels(t,n,s,r=null,i=!1,o=null,a=!1){const[f,l]=this._collectComponentStats(t,n,s),c=this._buildKeptMap(f,l,n,"all",!0);return this.finalize_volume(s,r,c,n,i,t,o,a)}filter_clusters(t,n,s,r,i=null,o=!1,a=null,f=!1){const[l,c]=this._collectComponentStats(t,n,s),m=this._buildKeptMap(l,c,n,r,!1);return this.finalize_volume(s,i,m,n,o,t,a,f)}filter_clusters_by_ratio(t,n,s,r,i=null,o=!1,a=null){const f=t.length,l=new Uint32Array(n+1).fill(0),c=new Uint32Array(n+1).fill(0);for(let p=0;p<f;p++){const g=s[p];g>0&&(l[g]===0&&(l[g]=t[p]),c[g]++)}const m=new Map;for(let p=1;p<=n;p++){const g=l[p],v=c[p];(!m.has(g)||v>m.get(g))&&m.set(g,v)}const d=new Uint8Array(n+1).fill(0);for(let p=1;p<=n;p++){const g=l[p],v=c[p],P=m.get(g)||0;v>=P*r&&(d[p]=1)}const u=new Uint32Array(n+1).fill(0);for(let p=1;p<=n;p++)d[p]&&(u[p]=l[p]);return this.finalize_volume(s,i,u,n,o,t,a)}_binaryComponentsFromLabels(t,n,s,r,i=!1){const o=r[0]|0,a=r[1]|0,f=r[2]|0,l=o*a,c=dn.get(s),m=c&&c.cl===n&&s.length===l*f&&(!i||c.bw===t);if(m&&c.conn===6&&c.distinctFgClasses<=1){const _=new Uint32Array(n+1);let h=0,w=0;for(let y=1;y<=n;y++){_[y]=y;const b=c.sumls[y];b>0&&b>=w&&(w=b,h=y)}return{parent:_,compSize:c.sumls,compClass:i?c.ls2bw:null,bestRoot:h}}const d=m?c.sumls:new Uint32Array(n+1),u=m?i?c.ls2bw:null:i?new Uint32Array(n+1):null,p=new Uint32Array(n+1);for(let _=1;_<=n;_++)p[_]=_;if(m&&c.conn===6&&c.runs&&c.bw===t){const _=(y,b)=>{for(;p[y]!==y;)p[y]=p[p[y]],y=p[y];for(;p[b]!==b;)p[b]=p[p[b]],b=p[b];y!==b&&(y<b?p[b]=y:p[y]=b)},h=c.runs,w=c.runLen;for(let y=0;y<w;y+=2){const b=h[y],k=h[y+1],F=b/l|0,$=b-F*l,B=$/o|0;let S=$-B*o;for(let M=b;M<k;M++,S++){const z=t[M];let R=0;if(F>0){const G=t[M-l];G!==0&&G!==z&&(R=s[M],_(R,s[M-l]))}if(B>0){const G=t[M-o];G!==0&&G!==z&&(R||(R=s[M]),_(R,s[M-o]))}if(S>0){const G=t[M-1];G!==0&&G!==z&&(R||(R=s[M]),_(R,s[M-1]))}}}}else{const _=m?c.minSl:0,h=m?c.maxSl:f-1;let w=_*l;for(let y=_;y<=h;y++)for(let b=0;b<a;b++)for(let k=0;k<o;k++,w++){const F=s[w];if(F===0)continue;m||(d[F]++,u&&u[F]===0&&(u[F]=t[w]));let $=F;for(;p[$]!==$;)p[$]=p[p[$]],$=p[$];if(y>0){const B=s[w-l];if(B!==0&&B!==F){let S=B;for(;p[S]!==S;)p[S]=p[p[S]],S=p[S];$!==S&&($<S?p[S]=$:(p[$]=S,$=S))}}if(b>0){const B=s[w-o];if(B!==0&&B!==F){let S=B;for(;p[S]!==S;)p[S]=p[p[S]],S=p[S];$!==S&&($<S?p[S]=$:(p[$]=S,$=S))}}if(k>0){const B=s[w-1];if(B!==0&&B!==F){let S=B;for(;p[S]!==S;)p[S]=p[p[S]],S=p[S];$!==S&&($<S?p[S]=$:p[$]=S)}}}}const g=new Uint32Array(n+1);for(let _=1;_<=n;_++){let h=_;for(;p[h]!==h;)h=p[h];p[_]=h,g[h]+=d[_]}let v=0,P=0;for(let _=1;_<=n;_++){const h=g[_];h>0&&h>=P&&(P=h,v=_)}return{parent:p,compSize:d,compClass:u,bestRoot:v}}applyLargestBinaryMaskInPlace(t,n,s,r){const i=t.length;if(n===0)return t.fill(0),t;const o=dn.get(s),a=o&&o.cl===n&&s.length===i;if(a&&o.conn===6&&o.distinctFgClasses<=1){let c=0,m=0;for(let d=1;d<=n;d++){const u=o.sumls[d];u>0&&u>=m&&(m=u,c=d)}if(o.runs&&o.bw===t){if(n>1){const d=o.runs,u=o.runLen;for(let p=0;p<u;p+=2){const g=d[p],v=d[p+1];for(let P=g;P<v;P++)s[P]!==c&&(t[P]=0)}}return t}if(o.fgStart>0&&t.fill(0,0,o.fgStart),o.fgEnd>=o.fgStart){for(let d=o.fgStart;d<=o.fgEnd;d++)s[d]!==c&&(t[d]=0);o.fgEnd+1<i&&t.fill(0,o.fgEnd+1)}else t.fill(0);return t}const{parent:f,bestRoot:l}=this._binaryComponentsFromLabels(t,n,s,r,!1);if(a&&o.runs&&o.bw===t){const c=o.runs,m=o.runLen;for(let d=0;d<m;d+=2){const u=c[d],p=c[d+1];for(let g=u;g<p;g++)f[s[g]]!==l&&(t[g]=0)}return t}if(a&&o.fgEnd>=o.fgStart){o.fgStart>0&&t.fill(0,0,o.fgStart);for(let c=o.fgStart;c<=o.fgEnd;c++){const m=s[c];(m===0||f[m]!==l)&&(t[c]=0)}o.fgEnd+1<i&&t.fill(0,o.fgEnd+1)}else for(let c=0;c<i;c++){const m=s[c];(m===0||f[m]!==l)&&(t[c]=0)}return t}filterHierarchicalFromLabels(t,n,s,r,i="all",o=!0,a=!1,f=null,l=!1){if(n===0)return[0,t instanceof Uint8Array?l?t:new Uint8Array(t.length):new Uint32Array(t.length)];const{parent:c,compSize:m,compClass:d,bestRoot:u}=this._binaryComponentsFromLabels(t,n,s,r,!0),p=new Uint32Array(n+1);for(let v=1;v<=n;v++)c[v]===u&&(p[v]=d[v]);const g=this._buildKeptMap(p,m,n,i,o);return this.finalize_volume(s,r,g,n,a,t,f,l)}filter18ClassFromLabels(t,n,s,r,i,o=!1,a=null,f=!1){return this.filterHierarchicalFromLabels(t,n,s,r,i,!1,o,a,f)}bwlabel(t,n,s=26,r=!1,i=!1,o=null){const a=Date.now(),f=n[0]*n[1]*n[2];if(![6,18,26].includes(s))return console.log("bwlabel: conn must be 6, 18 or 26."),[0,new Uint32Array(f)];if(n[0]<2||n[1]<2||n[2]<1)return console.log("bwlabel: img must be 2 or 3-dimensional"),[0,new Uint32Array(f)];let l;if(r){l=new Uint8Array(f);for(let g=0;g<f;g++)t[g]!==0&&(l[g]=1)}else t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Uint16Array||t instanceof Uint32Array||t instanceof Int8Array||t instanceof Int16Array||t instanceof Int32Array?t.length===f?l=t:(l=new Uint32Array(f),l.set(t.subarray(0,f))):(l=new Uint32Array(f),l.set(t));this._lastInitialRange=null,this._lastMeta=null;let[c,m,d]=this.do_initial_labelling(l,n,s,o);m===void 0&&(m=new Uint32Array(0));const[u,p]=this.translate_labels(d,n,m,c,l,this._lastInitialRange);if(this._lastMeta&&dn.set(p,this._lastMeta),console.log(s+" neighbor clustering into "+u+" regions in "+(Date.now()-a)+"ms"),i){const[g,v]=this.largest_original_cluster_labels(l,u,p);return[g,v]}return[u,p]}filter_clusters_by_rank(t,n,s,r,i=0,o=null,a=!1,f=null,l=!1,c=null){const m=t.length,d=new Uint32Array(n+1).fill(0),u=new Uint32Array(n+1).fill(0),p=f!=null&&Array.isArray(o)&&o.length===3,g=p?o[0]:0,v=p?o[1]:0,P=p?new Int32Array(n+1).fill(2147483647):null,_=p?new Int32Array(n+1).fill(-1):null,h=p?new Int32Array(n+1).fill(2147483647):null,w=p?new Int32Array(n+1).fill(-1):null,y=p?new Int32Array(n+1).fill(2147483647):null,b=p?new Int32Array(n+1).fill(-1):null;for(let M=0;M<m;M++){const z=s[M];if(z>0&&(d[z]===0&&(d[z]=t[M]),u[z]++,p)){const R=M%g,G=M/g|0,T=G%v,C=G/v|0;R<P[z]&&(P[z]=R),R>_[z]&&(_[z]=R),T<h[z]&&(h[z]=T),T>w[z]&&(w[z]=T),C<y[z]&&(y[z]=C),C>b[z]&&(b[z]=C)}}let k=null,F=0;if(p){let M=-1;for(let I=1;I<=n;I++)u[I]>M&&(M=u[I],F=I);const z=Math.max(2,Math.ceil(f)+4),R=g*v,G=new Int16Array(m).fill(-1);let T=[];for(let I=0;I<m;I++)s[I]===F&&(G[I]=0,T.push(I));for(let I=1;I<=z&&T.length;I++){const ie=[];for(let ce=0;ce<T.length;ce++){const N=T[ce],W=N%g,Q=(N/g|0)%v;W>0&&G[N-1]===-1&&(G[N-1]=I,ie.push(N-1)),W<g-1&&G[N+1]===-1&&(G[N+1]=I,ie.push(N+1)),Q>0&&G[N-g]===-1&&(G[N-g]=I,ie.push(N-g)),Q<v-1&&G[N+g]===-1&&(G[N+g]=I,ie.push(N+g)),N-R>=0&&G[N-R]===-1&&(G[N-R]=I,ie.push(N-R)),N+R<m&&G[N+R]===-1&&(G[N+R]=I,ie.push(N+R))}T=ie}const C=z+1;k=new Float64Array(n+1).fill(C);for(let I=0;I<m;I++){const ie=s[I];if(ie>0&&ie!==F){const ce=G[I]>=0?G[I]:C;ce<k[ie]&&(k[ie]=ce)}}l&&console.log(`[rank-filter] brain comp=${F} size=${M} bbox A[${P[F]},${_[F]}] B[${h[F]},${w[F]}] C[${y[F]},${b[F]}] | maxGap=${f} scan=${z}`)}const $=new Map;for(let M=1;M<=n;M++){const z=d[M],R=u[M];$.has(z)||$.set(z,[]),$.get(z).push({i:M,size:R})}const B=new Uint8Array(n+1).fill(0);for(const[M,z]of $.entries()){z.sort((C,I)=>I.size-C.size);const R=z.length?z[0].size:0,G=i>0?R*i:0,T=Math.min(z.length,r);for(let C=0;C<T;C++){const I=z[C];if(I.size<G){l&&C>0&&console.log(`[rank-filter] class ${M} #${C}: size=${I.size} DROP (below ${(i*100).toFixed(0)}% floor)`);break}if(C>0&&p){const ie=k[I.i],ce=ie<=f;if(l&&console.log(`[rank-filter] class ${M} #${C}: size=${I.size} surfDist=${ie} -> ${ce?"KEEP":"DROP (too far)"}`),!ce)continue}B[I.i]=1}}const S=new Uint32Array(n+1).fill(0);for(let M=1;M<=n;M++)B[M]&&(S[M]=d[M]);return this.finalize_volume(s,o,S,n,a,t,c)}}function Xr(e){if(!(e!=null&&e.length))throw new Error("Segmentation volume is empty.");let t=0;if((e instanceof Uint8Array||e instanceof Uint8ClampedArray)&&(e.byteOffset&3)===0&&e.length>=4){const n=e.length>>2,s=new Uint32Array(e.buffer,e.byteOffset,n);for(let r=0;r<n;r++){const i=s[r];i!==0&&(i&255&&t++,i&65280&&t++,i&16711680&&t++,i&4278190080&&t++)}for(let r=n<<2;r<e.length;r++)e[r]!==0&&t++}else if(e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Uint16Array||e instanceof Uint32Array)for(let n=0;n<e.length;n++)e[n]!==0&&t++;else for(let n=0;n<e.length;n++){const s=e[n];if(!Number.isFinite(s)||s<0)throw new Error(`Segmentation contains an invalid label at voxel ${n}: ${s}.`);s!==0&&t++}if(t===0)throw new Error("Segmentation volume contains no foreground labels.");if(t>e.length*.95)throw new Error(`Segmentation fills ${(100*t/e.length).toFixed(1)}% of the volume; GPU output is unusable.`)}const Yr={il:null,runs:null,runLen:0,dirty:!1};function Kr(e,t=.05,n=.95){const s=e.length,r=Math.min(1e5,s),i=Math.floor(r*t),o=Math.ceil(r*n)-1;if(e instanceof Uint8Array||e instanceof Uint8ClampedArray){if(r===0)return{qmin:0,qmax:0};const f=new Uint32Array(256);if(r>=s)for(let u=0;u<s;u++)f[e[u]]++;else for(let u=0;u<r;u++)f[e[Math.floor(Math.random()*s)]]++;let l=0,c=0,m=0,d=!1;for(let u=0;u<256;u++){const p=f[u];if(p!==0&&(l+=p,!d&&l>i&&(c=u,d=!0),l>o)){m=u;break}}return{qmin:c,qmax:m}}const a=new Float64Array(r);if(r>=s)a.set(e);else for(let f=0;f<r;f++){const l=Math.floor(Math.random()*s);a[f]=e[l]}return a.sort(),{qmin:a[i],qmax:a[o]}}function Zr(e){const t=e.length;if(t===0)return{min:0,max:0};let n=e[0],s=e[0];if(e instanceof Uint8Array||e instanceof Uint8ClampedArray){for(let r=1;r<t;r++){const i=e[r];if(i<n?n=i:i>s&&(s=i),n===0&&s===255)break}return{min:n,max:s}}for(let r=1;r<t;r++){const i=e[r];i<n&&(n=i),i>s&&(s=i)}return{min:n,max:s}}function As(e,t,n){const s=e.length,r=new Float32Array(s);if(e instanceof Uint8Array||e instanceof Uint8ClampedArray){const i=new Float32Array(256);for(let o=0;o<256;o++)i[o]=(o-t)/n;for(let o=0;o<s;o++)r[o]=i[e[o]];return r}for(let i=0;i<s;i++)r[i]=(e[i]-t)/n;return r}function Ys(e,t,n,s){const r=t[0]|0,i=t[1]|0,o=t[2]|0,a=r*i*o,f=new s(a);if(n[0]===2&&n[1]===1&&n[2]===0&&a===e.length){const v=i*o,P=i*r,_=16;for(let h=0;h<i;h++){const w=h*o,y=h*r;for(let b=0;b<r;b+=_){const k=Math.min(b+_,r);for(let F=0;F<o;F+=_){const $=Math.min(F+_,o);for(let B=b;B<k;B++){let S=B*v+w+F,M=F*P+y+B;for(let z=F;z<$;z++,S++,M+=P)f[M]=e[S]}}}}return f}const l=[r,i,o],c=[l[n[0]],l[n[1]],l[n[2]]],m=[i*o,o,1],d=m[n[0]],u=m[n[1]],p=m[n[2]];let g=0;for(let v=0;v<c[0];v++){const P=v*d;for(let _=0;_<c[1];_++){const h=P+_*u;for(let w=0;w<c[2];w++,g++)f[g]=e[h+w*p]}}return f}function $n(e,t=[256,256,256],n=[2,1,0]){return Ys(e,t,n,Float32Array)}function Qr(e,t=[256,256,256],n=[2,1,0]){return Ys(e,t,n,Uint8Array)}function ss(e){const t=new Uint32Array(256);for(let n=0;n<e.length;n++)t[e[n]]++;return t}function Jr(e){const t=ss(e);let n=0;for(let s=0;s<256;s++)t[s]>0&&n++;return n}function Ms(e,t=!1,n="output"){let s=0,r=1/0,i=-1/0;if(!t&&(e instanceof Uint8Array||e instanceof Uint8ClampedArray)){if(e.length>0){let o=255,a=0,f=0;if((e.byteOffset&3)===0&&e.length>=4){const l=e.length>>2,c=new Uint32Array(e.buffer,e.byteOffset,l);for(let m=0;m<l;m++){const d=c[m];if(d===0){o=0;continue}const u=d&255,p=d>>>8&255,g=d>>>16&255,v=d>>>24;s+=u+p+g+v,u<o&&(o=u),u>a&&(a=u),p<o&&(o=p),p>a&&(a=p),g<o&&(o=g),g>a&&(a=g),v<o&&(o=v),v>a&&(a=v)}f=l<<2}for(let l=f;l<e.length;l++){const c=e[l];s+=c,c<o&&(o=c),c>a&&(a=c)}r=o,i=a}}else for(let o=0;o<e.length;o++){const a=e[o];if(!Number.isFinite(a))throw new Error(`Model ${n} contains NaN or Inf values.`);s+=a,a<r&&(r=a),a>i&&(i=a)}if(console.log(`${t?"Probability":"Segmentation"} volume sum: ${s}`),s===0)throw new Error(t?"Model probability output is all zeros. This may indicate an issue with WebGPU shaders or input data.":"Model produced an empty segmentation (all zeros). This may indicate an issue with WebGPU shaders or input data.");if(t&&(r<-1e-6||i>1+1e-6))throw new Error(`Probability output values out of range [0, 1]: min=${r.toFixed(4)}, max=${i.toFixed(4)}`);return{sum:s,min:r,max:i}}function eo(e,t,n,s,r=null,i=null){return ze(this,null,function*(){const o=!!(e&&typeof e.data=="function");let a,f;o?(console.log("Downloading segmentation data from GPU to CPU..."),a=yield e.data(),f=e.shape||i||[256,256,256],console.log("Data download complete. Starting CPU processing.")):(a=e,f=i||[256,256,256]),Xr(a);let l,c=!1;if(a instanceof Uint8Array)l=a,c=!o;else{let d=0;for(let u=0;u<a.length;u++)a[u]>d&&(d=a[u]);l=d<=255?new Uint8Array(a):new Uint32Array(a),c=!0}let m=null;if(s.isPostProcessEnable){console.log("Applying CPU-based connected-component labeling...");const d=performance.now(),u=new jr,p=[5,14,15,58,59,60,598,608],g=!!s.fillSuppressedWithNeighborLabel||p.includes(n.id),v=[5,14,15,58,59,60,598,608],P=F=>F>=1&&F<=34?1:F>=35&&F<=68?2:0,_=v.includes(n.id)?P:null,h=f[0]*f[1]*f[2],w=Math.max(1e5,Math.floor(h*.01)),[y,b]=u.bwlabel(l,f,6,!1,!1,Yr);if(m=u.getLabelMeta(b),y>w){const F=`Segmentation produced noise: ${y.toLocaleString()} disconnected regions (cap ${w.toLocaleString()}). The model output is unusable, so post-processing was aborted. Try re-running, switching backend (WebGPU/WebGL2), or another model.`;console.error("[postprocess] "+F);const $=new Error(F);throw $.code="SEGMENTATION_NOISE",$}if([1,7].includes(n.id)){const[S,M]=u.filter_clusters_by_rank(l,y,b,2,.02,f,g,8,!1,_);l=M,c=!0}else if([3,8,9,21,38,218].includes(n.id)){const F=new Set([1,2,5,6,13]),[$,B]=u.filter18ClassFromLabels(l,y,b,f,F,g,_,c);l=B,c=!0}else if([5,14,15,58,59,60,598,608].includes(n.id)){s.diagnoseEnclosedComponents&&u.diagnose_components(l,y,b,f,{label:`model${n.id}`,topN:60});const[F,$]=u.filterHierarchicalFromLabels(l,y,b,f,"all",!0,g,_,c);l=$,c=!0}else c||(l=l.slice(),c=!0),u.applyLargestBinaryMaskInPlace(l,y,b,f);const k=((performance.now()-d)/1e3).toFixed(4);console.log(`Connected-component labeling took: ${k} seconds.`)}switch(n.type){case"Brain_Masking":{const d=new Uint8Array(l.length);if(m&&m.runs){const u=m.runs,p=m.runLen;for(let g=0;g<p;g+=2){const v=u[g],P=u[g+1];for(let _=v;_<P;_++)l[_]!==0&&(d[_]=1)}}else for(let u=0;u<l.length;u++)d[u]=l[u]!==0?1:0;return d}case"Brain_Extraction":{const d=new Uint8Array(l.length),u=r?new Uint8Array(l.length):null;if(m&&m.runs){const p=m.runs,g=m.runLen;for(let v=0;v<g;v+=2){const P=p[v],_=p[v+1];for(let h=P;h<_;h++)l[h]!==0&&(d[h]=t[h],u&&(u[h]=1))}}else for(let p=0;p<l.length;p++){const g=l[p]!==0?1:0;d[p]=t[p]*g,u&&(u[p]=g)}return r&&(r.mask=u),d}default:return l instanceof Uint8Array?l:new Uint8Array(l)}})}const to={WEBGPU:"webgpu"};function no(e,t){return{startTime:Date.now(),Model_Name:(e==null?void 0:e.modelName)||"Unknown",Execution_Mode:t,TF_Backend:"webgpu",isModelFullVol:null,No_SubVolumes:1,Brainchop_Ver:"FullVolume",Input_Shape:null,Output_Shape:null,Channel_Last:null,Model_Param:null,Model_Layers:null,Actual_Labels:null,Expect_Labels:null,NumLabels_Match:null,Missing_Labels:null,Preprocess_t:null,Setup_t:null,Inference_t:null,Postprocess_t:null,Display_t:null,Status:null,Error_Type:null,Extra_Err_Info:null}}function so(e,t,n,s=null){e.Expect_Labels=t,e.Actual_Labels=n,e.NumLabels_Match=t===n,s&&s.length>0&&(e.Missing_Labels=s.join(", "))}function ro(e,t,n,s=null){e.Inference_t=t,e.Postprocess_t=n,s&&(s.Preprocess_t!==void 0&&(e.Preprocess_t=s.Preprocess_t),s.Setup_t!==void 0&&(e.Setup_t=s.Setup_t),s.Display_t!==void 0&&(e.Display_t=s.Display_t)),e.Status="OK"}function oo(e,t,n=null){e.Inference_t=1/0,e.Postprocess_t=1/0,e.Status="Fail",e.Error_Type=(t==null?void 0:t.message)||String(t),n&&(e.Extra_Err_Info=n)}const qt=1e-8,ao=[256,256,256];function sn(e,t,n){return Math.max(t,Math.min(n,e))}function io(e){return e.outputType==="probability"&&e.probabilityPostprocess==="cat-lite"}function lo(e,t,n){const[s,r,i]=e,o=s.length,a=new Uint8Array(o);let f=0;for(let w=0;w<o;w++)Math.max(0,s[w])+Math.max(0,r[w])+Math.max(0,i[w])>=n&&(a[w]=1,f++);const[l,c,m]=t;if(l<2||c<2||m<1)return{componentCount:0,removedVoxels:0,supportMask:a};const d=l===256&&c===256,u=new Uint32Array(f),p=l*c;let g=0,v=0,P=0,_=0;for(let w=0;w<o;w++){if(a[w]!==1)continue;_++;const y=g;u[g++]=w,a[w]=2;for(let b=y;b<g;b++){const k=u[b],F=d?k&255:k%l,$=d?k>>>8&255:Math.floor(k/l)%c;F>0&&a[k-1]===1&&(a[k-1]=2,u[g++]=k-1),F+1<l&&a[k+1]===1&&(a[k+1]=2,u[g++]=k+1),$>0&&a[k-l]===1&&(a[k-l]=2,u[g++]=k-l),$+1<c&&a[k+l]===1&&(a[k+l]=2,u[g++]=k+l),k>=p&&a[k-p]===1&&(a[k-p]=2,u[g++]=k-p),k+p<o&&a[k+p]===1&&(a[k+p]=2,u[g++]=k+p)}g-y>=P-v&&(v=y,P=g)}let h=0;if(_>1)for(let w=0;w<g;w++){if(w>=v&&w<P)continue;const y=u[w];s[y]=0,r[y]=0,i[y]=0,a[y]=0,h++}return{componentCount:_,removedVoxels:h,supportMask:a}}function uo([e,t,n],s,{minSupport:r,priorPower:i},o=null){const a=!!(o&&r>0&&r<=1);let f=0;for(let g=0;g<s.length;g++){if(a&&o[g]!==2)continue;const v=Math.max(0,e[g])+Math.max(0,t[g])+Math.max(0,n[g]);Math.min(v,1)>=r&&Number.isFinite(s[g])&&f++}const l=new Uint32Array(f),c=new Float64Array(f),m=f*36<=192*Tt(2,20)?f:0,d=new Float64Array(m),u=new Float64Array(m),p=new Float64Array(m);for(let g=0,v=0;g<s.length;g++){if(a&&o[g]!==2)continue;const P=Math.max(0,e[g]),_=Math.max(0,t[g]),h=Math.max(0,n[g]),w=P+_+h,y=Math.min(w,1);!(y>=r)||!Number.isFinite(s[g])||(l[v]=g,c[v]=s[g]-0,m&&(d[v]=y*Math.pow(h/w,i),u[v]=y*Math.pow(P/w,i),p[v]=y*Math.pow(_/w,i)),v++)}return{indices:l,values:c,weightCsf:d,weightGm:u,weightWm:p,volumes:[e,t,n]}}function zs([e,t,n],s,r,i){const o=Math.max(0,e[s]),a=Math.max(0,t[s]),f=Math.max(0,n[s]),l=o+a+f,c=Math.min(l,1);i[0]=c*Math.pow(f/l,r),i[1]=c*Math.pow(o/l,r),i[2]=c*Math.pow(a/l,r)}function Cs({indices:e,values:t,weightCsf:n,weightGm:s,weightWm:r,volumes:i},{minSeparation:o,sigmaFloor:a,priorPower:f},l=!1){const c=n.length===0?new Float64Array(3):null,m=new Float64Array(3),d=new Float64Array(3);for(let v=0;v<t.length;v++){const P=t[v];c&&zs(i,e[v],f,c);const _=c?c[0]:n[v],h=c?c[1]:s[v],w=c?c[2]:r[v];m[0]+=_*P,d[0]+=_,m[1]+=h*P,d[1]+=h,m[2]+=w*P,d[2]+=w}if(d.some(v=>v<100))return{applied:!1,reason:"too few high-confidence tissue voxels"};const u=Array.from(m,(v,P)=>v/d[P]);if(!(u[0]+o<u[1]&&u[1]+o<u[2]))return{applied:!1,reason:`implausible T1 tissue ordering (${u.map(v=>v.toFixed(3)).join(", ")})`};if(l)return{applied:!0,means:u};const p=new Float64Array(3);for(let v=0;v<t.length;v++){const P=t[v];c&&zs(i,e[v],f,c);const _=c?c[0]:n[v],h=c?c[1]:s[v],w=c?c[2]:r[v],y=P-u[0],b=P-u[1],k=P-u[2];p[0]+=_*y*y,p[1]+=h*b*b,p[2]+=w*k*k}const g=Array.from(p,(v,P)=>Math.sqrt(Math.max(a*a,v/d[P])));return{applied:!0,means:u,sigmas:g}}function co(e,t,n,s,{minSupport:r,block:i,smoothingPasses:o},a=null){const[f,l,c]=e,[m,d,u]=n,p=!!(a&&r>0&&r<=1),g=Math.ceil(m/i),v=Math.ceil(d/i),P=Math.ceil(u/i),_=g*v*P,h=new Float64Array(_),w=new Float64Array(_),[y,b,k]=s,F=m*d;for(let T=0;T<u;T++){const C=Math.floor(T/i);for(let I=0;I<d;I++){const ie=Math.floor(I/i);let ce=T*F+I*m;const N=(C*v+ie)*g;for(let W=0;W<m;W++,ce++){if(p&&a[ce]!==2)continue;const X=Math.max(0,f[ce]),Q=Math.max(0,l[ce]),O=Math.max(0,c[ce]),le=X+Q+O,ue=Math.min(le,1);if(!(ue>=r)||!Number.isFinite(t[ce]))continue;const Ce=X/le,ke=Q/le,Ae=O/le,j=Ae*y+Ce*b+ke*k,ee=ue*(Ae*Ae+Ce*Ce+ke*ke),A=N+Math.floor(W/i);h[A]+=ee*(t[ce]-j),w[A]+=ee}}}let $=new Float32Array(_),B=new Uint8Array(_);for(let T=0;T<_;T++)w[T]>1&&($[T]=h[T]/w[T],B[T]=1);for(let T=0;T<o;T++){const C=new Float32Array(_),I=new Uint8Array(_);for(let ie=0;ie<P;ie++)for(let ce=0;ce<v;ce++)for(let N=0;N<g;N++){let W=0,X=0;for(let O=-1;O<=1;O++){const le=ie+O;if(!(le<0||le>=P))for(let ue=-1;ue<=1;ue++){const Ce=ce+ue;if(!(Ce<0||Ce>=v))for(let ke=-1;ke<=1;ke++){const Ae=N+ke;if(Ae<0||Ae>=g)continue;const j=(le*v+Ce)*g+Ae;B[j]&&(W+=$[j],X++)}}}const Q=(ie*v+ce)*g+N;X>0&&(C[Q]=W/X,I[Q]=1)}$=C,B=I}const S=(T,C)=>{const I=new Int32Array(T),ie=new Int32Array(T),ce=new Float32Array(T);for(let N=0;N<T;N++){const W=sn((N+.5)/i-.5,0,C-1);I[N]=Math.floor(W),ie[N]=Math.min(I[N]+1,C-1),ce[N]=W-I[N]}return{low:I,high:ie,t:ce}},M=S(m,g),z=S(d,v),R=S(u,P),G=m===256&&d===256;return T=>{let C,I,ie;if(G)ie=T>>>16,I=T>>>8&255,C=T&255;else{ie=Math.floor(T/F);const K=T-ie*F;I=Math.floor(K/m),C=K-I*m}const ce=M.low[C],N=M.high[C],W=M.t[C],X=(R.low[ie]*v+z.low[I])*g,Q=(R.low[ie]*v+z.high[I])*g,O=(R.high[ie]*v+z.low[I])*g,le=(R.high[ie]*v+z.high[I])*g,ue=$[X+ce]+($[X+N]-$[X+ce])*W,Ce=$[Q+ce]+($[Q+N]-$[Q+ce])*W,ke=$[O+ce]+($[O+N]-$[O+ce])*W,Ae=$[le+ce]+($[le+N]-$[le+ce])*W,j=z.t[I],ee=ue+(Ce-ue)*j,A=ke+(Ae-ke)*j;return ee+(A-ee)*R.t[ie]}}function xn(e,t,n,s){const r=(e-t)/n;return-.5*r*r-s}function fo(e,t,n,s={}){const{catLiteMinSupport:r=.03,catLitePurePriorPower:i=3,catLiteMinMeanSeparation:o=.035,catLiteSigmaFloor:a=.025,catLiteBiasBlockSize:f=16,catLiteBiasSmoothPasses:l=3,catLitePriorStrength:c=.8,catLiteIntensityStrength:m=.75,catLiteMixelPrior:d=.35,catLiteCsfWmMixelPrior:u=6,catLiteSpatialWeight:p=.25}=s,g={priorPower:i,minSupport:r,minSeparation:o,sigmaFloor:a},[v,P,_]=n,h=t.length,w=r>0&&r<=1,{componentCount:y,removedVoxels:b,supportMask:k}=lo(e,n,r),F={componentCount:y,removedVoxels:b},$=uo(e,t,g,k),B=Cs($,g,!0);if(!B.applied)return{tissues:e,stats:B};const S=co(e,t,n,B.means,{minSupport:r,block:f,smoothingPasses:l},k);for(let V=0;V<$.indices.length;V++){const Z=$.indices[V];$.values[V]=t[Z]-S(Z)}const M=Cs($,g);if(!M.applied)return{tissues:e,stats:M};$.indices=$.weightCsf=$.weightGm=$.weightWm=null;const[z,R,G]=M.means,[T,C,I]=M.sigmas,[ie,ce,N]=e,W=new Float32Array(h),X=new Float32Array(h),Q=new Float32Array(h),O=v*P,le=.5*(z+R),ue=.5*(R+G),Ce=.5*(z+G),ke=Math.sqrt(Tt(R-z,2)/12+.5*(Tt(T,2)+Tt(C,2))),Ae=Math.sqrt(Tt(G-R,2)/12+.5*(Tt(C,2)+Tt(I,2))),j=Math.sqrt(Tt(G-z,2)/12+.5*(Tt(T,2)+Tt(I,2))),ee=Math.log(T),A=Math.log(C),K=Math.log(I),D=Math.log(ke),re=Math.log(Ae),oe=Math.log(j);let J=0;for(let V=0;V<_;V++)for(let Z=0;Z<P;Z++){let q=V*O+Z*v;for(let he=0;he<v;he++,q++){if(w&&k[q]!==2)continue;const se=Math.max(0,ie[q]),Ue=Math.max(0,ce[q]),Be=Math.max(0,N[q]),Ge=se+Ue+Be,Ie=Math.min(Ge,1);if(!(Ie>=r)||!Number.isFinite(t[q]))continue;let tt=se/Ge,De=Ue/Ge,Ee=Be/Ge;if(p>0){let ot=0,Ve=0,te=0,H=0;if(he>0){const ae=q-1,Ye=Math.max(0,ie[ae]),it=Math.max(0,ce[ae]),Qe=Math.max(0,N[ae]),qe=Ye+it+Qe;qe>qt&&(ot+=Ye/qe,Ve+=it/qe,te+=Qe/qe,H++)}if(he+1<v){const ae=q+1,Ye=Math.max(0,ie[ae]),it=Math.max(0,ce[ae]),Qe=Math.max(0,N[ae]),qe=Ye+it+Qe;qe>qt&&(ot+=Ye/qe,Ve+=it/qe,te+=Qe/qe,H++)}if(Z>0){const ae=q-v,Ye=Math.max(0,ie[ae]),it=Math.max(0,ce[ae]),Qe=Math.max(0,N[ae]),qe=Ye+it+Qe;qe>qt&&(ot+=Ye/qe,Ve+=it/qe,te+=Qe/qe,H++)}if(Z+1<P){const ae=q+v,Ye=Math.max(0,ie[ae]),it=Math.max(0,ce[ae]),Qe=Math.max(0,N[ae]),qe=Ye+it+Qe;qe>qt&&(ot+=Ye/qe,Ve+=it/qe,te+=Qe/qe,H++)}if(V>0){const ae=q-O,Ye=Math.max(0,ie[ae]),it=Math.max(0,ce[ae]),Qe=Math.max(0,N[ae]),qe=Ye+it+Qe;qe>qt&&(ot+=Ye/qe,Ve+=it/qe,te+=Qe/qe,H++)}if(V+1<_){const ae=q+O,Ye=Math.max(0,ie[ae]),it=Math.max(0,ce[ae]),Qe=Math.max(0,N[ae]),qe=Ye+it+Qe;qe>qt&&(ot+=Ye/qe,Ve+=it/qe,te+=Qe/qe,H++)}if(H){const ae=1-p;tt=ae*tt+p*ot/H,De=ae*De+p*Ve/H,Ee=ae*Ee+p*te/H}}const $e=$.values[J++],Je=c*Math.log(Ee+qt)+m*xn($e,z,T,ee),gt=c*Math.log(tt+qt)+m*xn($e,R,C,A),ut=c*Math.log(De+qt)+m*xn($e,G,I,K),dt=c*Math.log(d*2*Math.sqrt(Ee*tt)+qt)+m*xn($e,le,ke,D),Bt=c*Math.log(d*2*Math.sqrt(tt*De)+qt)+m*xn($e,ue,Ae,re),Dt=c*Math.log(u*2*Math.sqrt(Ee*De)*Tt(1-tt,2)+qt)+m*xn($e,Ce,j,oe),Ft=Math.max(Je,gt,ut,dt,Bt,Dt),Y=Math.exp(Je-Ft),tn=Math.exp(gt-Ft),Pt=Math.exp(ut-Ft),Vt=Math.exp(dt-Ft),Mt=Math.exp(Bt-Ft),ht=Math.exp(Dt-Ft),x=Y+tn+Pt+Vt+Mt+ht,U=sn(($e-z)/(R-z),0,1),E=sn((G-$e)/(G-R),0,1),de=sn(($e-z)/(G-z),0,1),ne=(tn+Vt*U+Mt*E)/x,We=(Pt+Mt*(1-E)+ht*de)/x,be=(Y+Vt*(1-U)+ht*(1-de))/x,ge=Math.min(Ee,De),ve=sn((ge-tt)/(ge+qt),0,1),xe=sn(4*Ee*De,0,1),Xe=Tt(1-xe*ve,2);W[q]=sn(ne*Ie*Xe,0,1);const Te=(1-ne*Xe)/Math.max(We+be,qt);X[q]=sn(We*Te*Ie,0,1),Q[q]=sn(be*Te*Ie,0,1)}}return{tissues:[W,X,Q],stats:{applied:!0,tissueMeans:{csf:z,gray:R,white:G},tissueSigmas:{csf:T,gray:C,white:I},supportCleanup:F}}}const Bs=({csf:e,gray:t,white:n})=>`CSF=${e.toFixed(3)} GM=${t.toFixed(3)} WM=${n.toFixed(3)}`;function po(e,t,n,s,r){return ze(this,null,function*(){var f;const i=[];for(let l=0;l<3;l++)i.push(yield r(e[l],l)),e[l]=null;const{tissues:o,stats:a}=fo(i,t,ao,n);if(s.Output_Type="Continuous tissue probability",s.Tissue="GM/WM/CSF",s.Softmax_Temperature=(f=n.softmaxTemperature)!=null?f:1,a.applied){s.Partial_Volume="CAT-lite mixed-class PVE",s.CAT_Lite_Tissue_Means=Bs(a.tissueMeans),s.CAT_Lite_Tissue_Sigmas=Bs(a.tissueSigmas);const{componentCount:l,removedVoxels:c}=a.supportCleanup;console.log(`[CAT-lite] means ${s.CAT_Lite_Tissue_Means}; sigmas ${s.CAT_Lite_Tissue_Sigmas}; removed ${c} voxels outside the largest of ${l} support components`)}else s.Partial_Volume=`Skipped: ${a.reason}`,console.warn(`[CAT-lite] skipped: ${a.reason}`);return o})}const an=[1,3,5,7,13,19,31,19,13,7,5,3,1],mo=[16,8,4,2,1,16,8,4,2,1,16,8,4,2,1,16,8,4,2,1,16,8,4,2,1],go={model16chan18cls:{dilations:an,activation:"gelu_tanh",fullVolume:!0},model24chan18cls_gdice_prio:{dilations:an,activation:"gelu_tanh",fullVolume:!0},model6chan3cls:{dilations:an,activation:"gelu_tanh",fullVolume:!0},model24chan104cls_synth:{dilations:an,activation:"gelu_tanh",fullVolume:!0},model24chan104cls_infant_refit_synth:{dilations:an,activation:"gelu_tanh",fullVolume:!0},model24chan104cls_v3_repbn:{dilations:an,activation:"gelu_tanh",fullVolume:!0},model24chan50cls:{dilations:an,activation:"gelu_tanh",fullVolume:!0},model32chan18cls:{dilations:an,activation:"gelu_tanh",fullVolume:!1},mindgrab:{dilations:mo,activation:"gelu_tanh",fullVolume:!0},model5_gw_ae:{dilations:[1,2,4,8,16,8,4,2,1],activation:"relu",fullVolume:!0},model11_gw_ae:{dilations:[1,2,4,8,4,2,2,1],activation:"relu",noSafetensors:!0,fullVolume:!0},model30chan18cls:{dilations:[1,2,4,8,16,8,4,2,1],activation:"elu",fullVolume:!0},model30chan50cls:{dilations:[1,2,4,8,16,8,4,2,1],activation:"elu",fullVolume:!0}};function _o(e){const t=String(e.path||"").match(/\/models\/([^/]+)\//);return t?t[1]:null}function ps(e){const t=_o(e);if(!t)return null;const n=go[t];return!n||n.noSafetensors?null:bt({name:t},n)}function bo(e){const t=e&32768?-1:1,n=(e&31744)>>10,s=e&1023;return n===0?t*Math.pow(2,-14)*(s/1024):n===31?s?NaN:t*(1/0):t*Math.pow(2,n-15)*(1+s/1024)}function Ks(e){const t=new DataView(e),n=Number(t.getBigUint64(0,!0)),s=JSON.parse(new TextDecoder().decode(new Uint8Array(e,8,n))),r=8+n,i={};for(const[o,a]of Object.entries(s)){if(o==="__metadata__"){i.__metadata__=a;continue}const[f,l]=a.data_offsets,c=a.shape.reduce((d,u)=>d*u,1);let m;if(a.dtype==="F32")m=new Float32Array(e.slice(r+f,r+l));else if(a.dtype==="F16"){const d=new Uint16Array(e.slice(r+f,r+l));m=new Float32Array(c);for(let u=0;u<c;u++)m[u]=bo(d[u])}else if(a.dtype==="BF16"){const d=new Uint16Array(e.slice(r+f,r+l));m=new Float32Array(c);const u=new Uint32Array(1),p=new Float32Array(u.buffer);for(let g=0;g<c;g++)u[0]=d[g]<<16,m[g]=p[0]}else throw new Error(`safetensors: unsupported dtype ${a.dtype} for tensor '${o}'`);if(m.length!==c)throw new Error(`safetensors: tensor '${o}' has ${m.length} values, shape says ${c}`);i[o]={dtype:a.dtype,shape:a.shape,data:m}}return i}function Zs(e){const t=[],n=[],s=[];for(const[i,o]of Object.entries(e)){if(i==="__metadata__")continue;const a=i.match(/^m\.model\.(\d+)\.(weight|bias)$/);if(!a)continue;const f=Number(a[1]),l=a[2]==="weight";if(o.shape.length===5){const[c,m,d,u,p]=o.shape,v={idx:f,outC:c,inC:m,kd:d,kh:u,kw:p,is1x1:d===1&&u===1&&p===1,w:o.data,bias:null},P=t.find(_=>_.idx===f);P?Object.assign(P,v):t.push(v)}else o.shape.length===1&&s.push({idx:f,isW:l,data:o.data,len:o.shape[0]})}t.sort((i,o)=>i.idx-o.idx);for(const i of s){const o=t.find(f=>f.idx===i.idx);if(o&&!i.isW){o.bias=i.data;continue}if(o&&i.isW)continue;let a=n.find(f=>f.idx===i.idx);a||(a={idx:i.idx,scale:null,bias:null},n.push(a)),i.isW?a.scale=i.data:a.bias=i.data}n.sort((i,o)=>i.idx-o.idx);let r=null;return t.length&&t[t.length-1].is1x1&&(r=t.pop()),{convs:t,affines:n,classifier:r}}function ho(e,t){var n;if(t==null)return e;if(t.length!==((n=e.classifier)==null?void 0:n.outC)||!Array.from(t).every(Number.isFinite))throw new Error("Classifier bias must contain one finite value per exported class");return e.classifier.bias=Float32Array.from(t),e}function wo(e,t){const n=t.cs,s=t.chan,{convs:r,affines:i,classifier:o}=e,a=u=>27*u*n;let f=0;const l=[];r.forEach((u,p)=>{const g=p===0?1:n,v={wq:f/4,inCS:g};f+=a(g),u.bias&&(v.biasQ=f/4,f+=n),l.push(v)}),i.forEach((u,p)=>{l[p]=l[p]||{},l[p].affQ=f/4,f+=n,l[p].affBiasQ=f/4,f+=n});let c=-1,m=-1;o&&(c=f,f+=s*t.nclass,f=Math.ceil(f/4)*4,o.bias&&(m=f,f+=t.nclass),f=Math.ceil(f/4)*4);const d=new Float32Array(f);if(r.forEach((u,p)=>{const g=l[p],v=g.inCS,P=g.wq*4,_=u.kd*u.kh*u.kw;if(u.outC>s||p>0&&u.inC>s)throw new Error(`layer ${p}: shape ${u.outC}x${u.inC} exceeds CHAN ${s}`);for(let h=0;h<u.outC;h++){for(let w=0;w<u.inC;w++)for(let y=0;y<u.kd;y++)for(let b=0;b<u.kh;b++)for(let k=0;k<u.kw;k++){const F=u.kd===3?y*9+b*3+k:0,$=(((h*u.inC+w)*u.kd+y)*u.kh+b)*u.kw+k;d[P+(F*v+w)*n+h]=u.w[$]}u.bias&&(d[g.biasQ*4+h]=u.bias[h])}if(_!==27&&_!==1)throw new Error(`layer ${p}: kernel ${u.kd}x${u.kh}x${u.kw} unsupported`)}),i.forEach((u,p)=>{const g=l[p];for(let v=0;v<s;v++)d[g.affQ*4+v]=u.scale?u.scale[v]:0,d[g.affBiasQ*4+v]=u.bias?u.bias[v]:0}),o)for(let u=0;u<t.nclass;u++){for(let p=0;p<s;p++)d[c+p*t.nclass+u]=o.w[u*o.inC+p];o.bias&&(d[m+u]=o.bias[u])}return{data:d,offsets:{layers:l,clsFloat:c,clsBiasFloat:m}}}function Qs(e,t={}){const{convs:n,affines:s,classifier:r}=e,i=n[0].outC,o=Math.ceil(i/4)*4,a=n.some(l=>l.bias),f=bt({chan:i,cs:o,planes:o/4,nclass:r?r.outC:0,nhidden:n.length-1,norm:s.length?"gn":a?"none":"gn",affine:s.length>0,convBias:a,classifierBias:!!(r&&r.bias),centeredVariance:!1,eps:1e-5},t);if(f.nclass>256)throw new Error(`classifier has ${f.nclass} classes; the RGBA8 label texture holds at most 256`);if(!f.activation)throw new Error("descriptor needs an explicit `activation`");if(!f.dilations)throw new Error("descriptor needs an explicit `dilations` array");if(f.dilations.length!==n.length)throw new Error(`descriptor has ${f.dilations.length} dilations for ${n.length} convs`);return f}const Dn=(e,t)=>Array.from({length:e},(n,s)=>t(s)).join(""),Fs=["x","y","z","w"];function vo(e){const t=`fn act4(x : vec4<f32>) -> vec4<f32> {
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
`;default:throw new Error(`webgpu-native: unknown activation '${e}'; add it deliberately`)}}function xo(e,t,n){const s=e.cs/4,r=l=>Dn(n,l),i=l=>Dn(s,l),o=i(l=>`          let w${l} = vec4<f32>(wts4[wq + ${l}u]);
`),a=l=>`        { let wq = wq0 + ((tap * cin) + ic4 * 4u + ${l}u) * (CS / 4u);
`+o+r(c=>i(m=>`          a${c}${m} = fma(w${m}, vec4<f32>(s${c}.${Fs[l]}), a${c}${m});
`))+`        }
`,f=(e.convBias?i(l=>`  let b${l} = vec4<f32>(wts4[params.bias_off / 4u + ${l}u]);
`)+r(l=>i(c=>`  a${l}${c} = a${l}${c} + b${c};
`)):"")+(e.norm==="none"?r(l=>i(c=>`  a${l}${c} = act4(a${l}${c});
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
`+r(l=>i(c=>`  var a${l}${c} = vec4<f32>(0.0);
`))+r(l=>`  var s${l} = vec4<f32>(0.0);
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
`+o.replace(/^ {10}/gm,"        ")+r(l=>`        { let sx = x0 + ${l} + dxd;
          let sv = f32(src[plane + u32(clamp(sx, 0, NX - 1))]);
          let s = vec4<f32>(select(0.0, sv, sx >= 0 && sx < NX));
`+i(c=>`          a${l}${c} = fma(w${c}, s, a${l}${c});
`)+`        }
`)+`      } else {
      for (var ic4 : u32 = 0u; ic4 < cin4; ic4 = ic4 + 1u) {
`+r(l=>`        { let sx = x0 + ${l} + dxd;
          let q = vec4<f32>(src4[(plane + u32(clamp(sx, 0, NX - 1))) * st4 + ic4]);
          s${l} = select(vec4<f32>(0.0), q, sx >= 0 && sx < NX); }
`)+a(0)+a(1)+a(2)+a(3)+`      }
      }
    }
    tap = tap + 1u;
  }}}
`+f+`  let obase = (u32(z) * u32(NY) + u32(y)) * u32(NX) + u32(x0);
`+r(l=>`  { let o = (obase + ${l}u) * CS;
`+i(c=>Dn(4,m=>`    dst[o + ${4*c+m}u] = f16(a${l}${c}.${Fs[m]});
`))+`  }
`)+`}
`}function yo(e){return`var<workgroup> wg_sum : array<f32, ${e} * CS>;
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
`}function $o(e){return`@compute @workgroup_size(${e}, 1, 1)
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
`}function So(e){return`@group(0) @binding(5) var<storage, read_write> labels : array<u32>;
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
`}function ko(e,t){var i;const{localX:n,vox:s,momLX:r}=t;if(e.cs%4!==0||e.cs>256)throw new Error(`webgpu-native: channel stride ${e.cs} unsupported`);if(e.nx%(n*s)||e.nx%n||e.nx%r)throw new Error(`webgpu-native: preset ${n}x${s}/${r} does not tile a ${e.nx}-voxel row`);if(r<e.cs)throw new Error(`webgpu-native: moments workgroup ${r} < ${e.cs} channels`);return`enable f16;
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
`+vo(e.activation)+xo(e,n,s)+(e.norm==="gn"?yo(r)+$o(n):"")+So(n)}const Vn={amd:{localX:256,vox:1},apple:{localX:64,vox:2},default:{localX:64,vox:2}};function Po(){var e;try{const t=new URLSearchParams(((e=globalThis.location)==null?void 0:e.search)||"").get("wgPreset"),n=t&&/^(\d+)x([124])$/.exec(t);return n?{localX:Number(n[1]),vox:Number(n[2]),source:"url"}:null}catch(t){return null}}function Ao(e,t){var a;const n=String(((a=e.adapterInfo)==null?void 0:a.vendor)||"").toLowerCase(),s=e.limits,r=f=>f.localX<=s.maxComputeInvocationsPerWorkgroup&&f.localX<=s.maxComputeWorkgroupSizeX&&t.nx%(f.localX*f.vox)===0;let i=Po()||Ct(bt({},Vn[n]||Vn.default),{source:n||"default"});r(i)||(console.warn(`[WebGPU-native] preset ${i.localX}x${i.vox} does not fit this device; using the default`),i=Ct(bt({},Vn.default),{source:"fallback"}));let o=0;for(const f of[256,128,64,32])if(f<=i.localX&&f>=t.cs&&t.nx%f===0&&f<=s.maxComputeInvocationsPerWorkgroup&&f*t.cs*8<=s.maxComputeWorkgroupStorageSize){o=f;break}if(!o)throw new Error(`webgpu-native: no moments workgroup fits ${t.cs} channels on this device`);return Ct(bt({},i),{momLX:o,vendor:n||"unknown"})}const kt=256;function Ls(e){if(typeof Float16Array!="undefined")return new Uint16Array(new Float16Array(e).buffer);const t=new Uint16Array(e.length),n=new Float32Array(1),s=new Uint32Array(n.buffer);for(let r=0;r<e.length;r++){n[0]=e[r];const i=s[0],o=i>>>16&32768,a=i>>>23&255,f=i&8388607;if(a===255){t[r]=o|31744|(f?512:0);continue}const l=a-127+15;if(l>=31){t[r]=o|31744;continue}if(l<=0){if(l<-10){t[r]=o;continue}const d=f|8388608,u=14-l;let p=d>>>u;const g=d&(1<<u)-1,v=1<<u-1;(g>v||g===v&&p&1)&&p++,t[r]=o|p;continue}let c=l<<10|f>>>13;const m=f&8191;(m>4096||m===4096&&c&1)&&c++,t[r]=o|c}return t}function Mo(e,t){var n;return t.quantize8Bit?"8-bit quantized V4 runner requested":(n=e.features)!=null&&n.has("shader-f16")?t.outputType==="probability"?"probability output (CAT-lite) is not ported yet":t.enableTTA?"test-time augmentation uses the tinygrad TTA runner":t.forceFP32?"model entry forces fp32":t.webgpu_safetensor?ps(t)?null:"no descriptor in webgl2_runners/descriptors.js":"no safetensors weights":"device lacks shader-f16"}function zo(e,t){const n=e.nx*e.ny*e.nz,s=e.nx/t*e.ny*e.nz;return 2*n*e.cs*2+n*2+2*n*4+(s+1)*e.cs*2*4}const Us=new WeakMap;function Co(e,t,n){return ze(this,null,function*(){let s=Us.get(e);s||(s=new Map,Us.set(e,s));const r=`${t.chan}|${t.cs}|${t.nclass}|${t.norm}|${t.affine}|${t.convBias}|${t.clsBias}|${t.activation}|${t.eps}|${n.localX}x${n.vox}x${n.momLX}`;let i=s.get(r);return i||(i=ze(null,null,function*(){const o=e.createShaderModule({code:ko(t,n)}),a=["read-only-storage","storage","read-only-storage","uniform","storage","storage","read-only-storage","read-only-storage"],f=e.createBindGroupLayout({entries:a.map((d,u)=>({binding:u,visibility:GPUShaderStage.COMPUTE,buffer:{type:d}}))}),l=e.createPipelineLayout({bindGroupLayouts:[f]}),c=["conv","classify",...t.norm==="gn"?["moments","moments_finish","norm"]:[]],m=Object.fromEntries(yield Promise.all(c.map(d=>ze(null,null,function*(){return[d,yield e.createComputePipelineAsync({layout:l,compute:{module:o,entryPoint:d}})]}))));return{bgl:f,pipelines:m}}).catch(o=>{throw s.delete(r),o}),s.set(r,i)),i})}function Bo(e,t,n,s){return ze(this,null,function*(){const r=ps(s);if(!r)throw new Error(`webgpu-native: no descriptor for ${s.path}`);const i=t instanceof Uint8Array?t:new Uint8Array(t),o=ho(Zs(Ks(i.buffer.slice(i.byteOffset,i.byteOffset+i.byteLength))),s.classifierBias),a=Qs(o,{nx:kt,ny:kt,nz:kt,activation:r.activation,dilations:r.dilations});if(!a.nclass)throw new Error("webgpu-native: model has no classifier");if(a.convBias&&a.affine)throw new Error("webgpu-native: conv bias together with a GroupNorm affine is not supported");const f=Ao(e,a),l=kt*kt*kt,c=l*a.cs*2,m=e.limits;if(c>m.maxStorageBufferBindingSize||c>m.maxBufferSize)throw new Error(`webgpu-native: a ${c>>>20} MiB activation exceeds this device's buffer limits`);console.log(`[WebGPU-native] ${r.name}: ${a.chan}ch (stride ${a.cs}) ${a.nclass}cls norm=${a.norm} affine=${a.affine} act=${a.activation} | preset ${f.localX}x${f.vox} (moments ${f.momLX}, ${f.source}) | ~${Math.round(zo(a,f.momLX)/1048576)} MiB`);const d=wo(o,a),{layers:u,clsFloat:p,clsBiasFloat:g}=d.offsets;e.pushErrorScope("validation"),e.pushErrorScope("out-of-memory");let v=2;try{const{bgl:P,pipelines:_}=yield Co(e,a,f),h=(O,le)=>e.createBuffer({size:O,usage:le}),w=GPUBufferUsage.STORAGE,y=kt/f.momLX*kt*kt,b=Ls(d.data),k=h(l*2,w|GPUBufferUsage.COPY_DST),F=h(c,w),$=h(c,w),B=h(Math.ceil(b.byteLength/16)*16,w|GPUBufferUsage.COPY_DST),S=h((y+1)*a.cs*2*4,w),M=h(l*4,w|GPUBufferUsage.COPY_SRC),z=h(l*4,GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST);e.queue.writeBuffer(B,0,b);const R=(O,le,ue)=>{const Ce=h(32,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST);return e.queue.writeBuffer(Ce,0,ue),e.createBindGroup({layout:P,entries:[{binding:0,resource:{buffer:O}},{binding:1,resource:{buffer:le}},{binding:2,resource:{buffer:B}},{binding:3,resource:{buffer:Ce}},{binding:4,resource:{buffer:S}},{binding:5,resource:{buffer:M}},{binding:6,resource:{buffer:B}},{binding:7,resource:{buffer:O}}]})},G=O=>{const le=new Uint32Array(8);return le[0]=O.dilation|0,le[1]=O.weightOff>>>0,le[2]=O.affineOff>>>0,le[3]=O.biasOff>>>0,le[4]=O.inChannels>>>0,le[5]=O.inStride>>>0,le[6]=y,le},T=[];let C=k,I=F;u.forEach((O,le)=>{const ue=le===0;T.push(R(C,I,G({dilation:a.dilations[le],weightOff:O.wq*4,affineOff:O.affQ!==void 0?O.affQ*4:0,biasOff:O.biasQ!==void 0?O.biasQ*4:O.affBiasQ!==void 0?O.affBiasQ*4:0,inChannels:ue?1:a.cs,inStride:ue?1:a.cs}))),C=I,I=I===F?$:F});const ie=R(C,I,G({weightOff:p,biasOff:g>=0?g:0}));v=0;const ce=yield e.popErrorScope(),N=yield e.popErrorScope();if(ce||N)throw new Error(`webgpu-native setup failed: ${(ce||N).message}`);const W=kt/(f.localX*f.vox),X=kt/f.localX,Q=kt/f.momLX;return function(le){return ze(this,null,function*(){if(le.length!==l)throw new Error(`webgpu-native: input has ${le.length} voxels, expected ${l}`);e.pushErrorScope("validation"),e.queue.writeBuffer(k,0,Ls(le));for(const j of T){const ee=e.createCommandEncoder(),A=ee.beginComputePass();A.setBindGroup(0,j),A.setPipeline(_.conv),A.dispatchWorkgroups(W,kt,kt),a.norm==="gn"&&(A.setPipeline(_.moments),A.dispatchWorkgroups(Q,kt,kt),A.setPipeline(_.moments_finish),A.dispatchWorkgroups(1,1,1),A.setPipeline(_.norm),A.dispatchWorkgroups(X,kt,kt)),A.end(),e.queue.submit([ee.finish()])}const ue=e.createCommandEncoder(),Ce=ue.beginComputePass();Ce.setBindGroup(0,ie),Ce.setPipeline(_.classify),Ce.dispatchWorkgroups(X,kt,kt),Ce.end(),ue.copyBufferToBuffer(M,0,z,0,l*4),e.queue.submit([ue.finish()]),yield z.mapAsync(GPUMapMode.READ);const ke=new Float32Array(new Uint32Array(z.getMappedRange()));z.unmap();const Ae=yield e.popErrorScope();if(Ae)throw new Error(`webgpu-native inference failed: ${Ae.message}`);return[ke]})}}finally{for(;v-- >0;)yield e.popErrorScope().catch(()=>{})}})}const Fo={grayMatter:[2,6,7,8,9,10,14,15,16,17],whiteMatter:[1,5],csf:[3,4,11,12]};function Sn(e,t,n,s,r){var o;const i=Number((o=e[t])!=null?o:n);if(!Number.isFinite(i)||i<s||i>r)throw new Error(`${t} must be between ${s} and ${r}, got ${e[t]}`);return i}function Hn(e,t,n){let s=0;for(const r of e||[]){if(!Number.isInteger(r)||r<0||r>=t||r>=32)throw new Error(`Invalid ${n} tissue label ${r} for ${t} classes`);s=(s|1<<r)>>>0}return s}function Lo(e,t){if(!Number.isInteger(t)||t<2||t>32)throw new Error(`Native WebGL2 grouped probabilities require 2..32 classes, got ${t}`);const n=bt(bt({},Fo),e.probabilityGroups||{});return{temperature:Sn(e,"softmaxTemperature",1,1e-6,1e6),supportTemperature:Sn(e,"brainSupportTemperature",1,1e-6,1e6),supportPower:Sn(e,"brainSupportPower",1,1e-6,1e6),sigma:Sn(e,"partialVolumeSigma",0,0,2),grayMask:Hn(n.grayMatter,t,"gray-matter"),whiteMask:Hn(n.whiteMatter,t,"white-matter"),csfMask:Hn(n.csf,t,"CSF")}}function jn(e,t,n,s,r,i){const[o,a,f]=n,l=o*a,c=r.length-1>>1;for(let m=0;m<f;m++)for(let d=0;d<a;d++)for(let u=0;u<o;u++){const p=m*l+d*o+u,g=s===1?u:s===o?d:m,v=s===1?o:s===o?a:f;let P=0;for(let _=-c;_<=c;_++){const h=g+_;h<0||h>=v||(P+=r[_+c]*e[p+_*s])}t[p]=P/i}}function Uo(e,t,n,s){const[r,i,o]=n,a=r*i*o;if(!Array.isArray(e)||e.length!==3||e.some(u=>u.length!==a)||t.length!==a)throw new Error("Native WebGL2 tissue-prior dimensions do not match");const f=Sn(s,"partialVolumeSigma",0,0,2),l=Sn(s,"brainSupportPower",1,1e-6,1e6);let c=null,m=null,d=1;if(f>0){const u=Math.max(1,Math.round(3*f));m=new Float32Array(u*2+1),d=0;for(let p=-u;p<=u;p++){const g=Math.exp(-.5*p*p/(f*f));m[p+u]=g,d+=g}c=new Float32Array(a)}for(const u of e){let p=u;m&&(jn(u,c,n,1,m,d),jn(c,u,n,r,m,d),jn(u,c,n,r*i,m,d),p=c);for(let g=0;g<a;g++){const v=Math.pow(Math.max(0,Math.min(1,t[g])),l);u[g]=Math.max(0,Math.min(1,p[g]*v))}}return e}const L=256,wt=64,Nt=8,mt=wt+2*Nt,cn=mt*4,st=L*64,Fn=L*L*2,In=9216,Js=In*8,rs=[1,3,5,7,13,19,31,19,13,7,5,3,1],pt=(e,t)=>Array.from({length:e},(n,s)=>t(s)).join(""),er=280,tr=150,Wo=55,Xn=112;let os=0;function as(e,t){const n=Math.floor(e/4),s=e%4,r=s===0?n:n+1,i=n,o=s*8,a=s===0?0:32-o;return(e&63|(r&15)<<6|(i&15)<<10|(o&31)<<14|(a&31)<<19|(t?1:0)<<24)>>>0}function nr(e){var t;if(e!=null&&e.webgpuExecMode)return String(e.webgpuExecMode).toLowerCase();try{const n=new URLSearchParams(((t=globalThis.location)==null?void 0:t.search)||"").get("webgpuExec");if(n)return n.toLowerCase()}catch(n){}return""}function qo(e){var n,s;if(!e)return"";if(typeof e.__glRenderer=="string")return e.__glRenderer;let t="";try{const r=typeof navigator!="undefined"&&/Firefox/i.test(navigator.userAgent||""),i=typeof OffscreenCanvas!="undefined"?new OffscreenCanvas(1,1):typeof document!="undefined"?document.createElement("canvas"):null,o=(n=i==null?void 0:i.getContext)==null?void 0:n.call(i,"webgl2",{powerPreference:"high-performance"});if(o){if(r)t=String(o.getParameter(o.RENDERER)||"");else{const a=o.getExtension("WEBGL_debug_renderer_info");t=String((a?o.getParameter(a.UNMASKED_RENDERER_WEBGL):o.getParameter(o.RENDERER))||"")}(s=o.getExtension("WEBGL_lose_context"))==null||s.loseContext()}}catch(r){}return e.__glRenderer=t,t}function Ln(e){var d;const t=(e==null?void 0:e.__adapterInfo)||(e==null?void 0:e.adapterInfo)||{},n=String(t.vendor||"").toLowerCase(),s=String(t.architecture||"").toLowerCase(),r=typeof navigator!="undefined"&&navigator.userAgent||"",i=typeof navigator!="undefined"&&(((d=navigator.userAgentData)==null?void 0:d.platform)||navigator.platform||"")||"",o=n==="apple"||/Mac|iPhone|iPad|iPod/i.test(`${i} ${r}`)&&!["intel","amd","nvidia","microsoft"].includes(n),a=!o&&(/Win/i.test(i)||/Windows/i.test(r)),f=a&&!n?qo(e):String((e==null?void 0:e.__glRenderer)||""),l=`${t.device||""} ${t.description||""} ${f}`,c=n||(/\bintel\b/i.test(f)?"intel":/\bmicrosoft\b|\bbasic render\b/i.test(f)?"microsoft":""),m=a&&(c==="microsoft"||c==="intel"&&!/\bArc\b/i.test(l)&&(/^gen-(9|11|12lp)/i.test(s)||/(?:UHD|HD)\s+Graphics|Iris(?:\(R\))?\s*(?:Plus|Xe)|Pentium|Celeron/i.test(l)));return{vendor:c,arch:s,desc:l,isApple:o,isWindows:a,isWindowsSharedIgpu:m}}function sr(e,t){const n=nr(t);if(n==="single"||n==="pipelined"||n==="paced"||n==="calibrate")return n;if(n==="chunked")return"paced";const s=Ln(e);return s.isApple?"single":s.isWindows?e!=null&&e.__v4WinCalibrated?e.__v4WinFast?"pipelined":"paced":"calibrate":"pipelined"}function rr(e,t){const n=nr(t);return n==="single"?!1:n==="paced"||n==="chunked"||n==="calibrate"?!0:n==="pipelined"?!1:Ln(e).isWindows}function or(e,t,n){return(n==null?void 0:n.forceLowMem128)===!1?!1:Ln(e).isWindowsSharedIgpu&&t.cs>=24&&t.cs%4===0}function ar(e,t){var i,o;if(!((o=(i=e==null?void 0:e.features)==null?void 0:i.has)!=null&&o.call(i,"subgroups"))||t!=null&&t.disableSubgroups)return"none";if(t!=null&&t.forceSubgroupMode)return t.forceSubgroupMode;const n=e.__adapterInfo||e.adapterInfo||{},s=n.subgroupMinSize|0,r=n.subgroupMaxSize|0;return s===32&&r===32?"sg32":s===64&&r===64?"sg64":s>=32&&r<=64?"sg32_64":s>=8&&r<=32?"sg_small":"none"}function ir(e){switch(e){case"sg32":return"subgroups32";case"sg64":return"subgroups64-bf";case"sg32_64":return"subgroups32-64";case"sg_small":return"subgroups8-32";default:return"shared-8KiB"}}function lr(){return typeof requestAnimationFrame!="function"?new Promise(e=>setTimeout(e,0)):new Promise(e=>{let t=!1;const n=()=>{t||(t=!0,e())},s=setTimeout(n,16);requestAnimationFrame(()=>{clearTimeout(s),setTimeout(n,0)})})}function ur(e,t,n){let s=t,r=null,i=null,o=performance.now(),a=performance.now();function f(g,v,P){return ze(this,arguments,function*(c,m,d,{forceUiYield:u=!1,emitTick:p=!0}={}){r&&(yield r,r=null);const _=performance.now();e.queue.submit([c.finish()]);const h=e.createCommandEncoder(),w=e.queue.onSubmittedWorkDone().then(()=>{const b=performance.now(),k=Math.max(_,o),F=Math.max(0,b-k);b>o&&(o=b),m>=256&&F>.2&&(s=Math.max(.005,Math.min(2,.7*s+.3*(F/m))),e.__v4MsPerStrip=s)});r=i,i=w,p&&n&&n(d);const y=performance.now();return(u||y-a>=Wo)&&(yield lr(),a=performance.now()),h})}function l(){return ze(this,null,function*(){r&&(yield r,r=null)})}return{submitChunk:f,waitBeforeFinalSubmit:l,getMsPerStrip:()=>s,setMsPerStrip:c=>{s=Math.max(.005,Math.min(2,c)),e.__v4MsPerStrip=s,o=performance.now()}}}function ms(e,t,n){const s=e.isFull?st:e.mainStrips.length,r=e.isFull||!e.extStrips?0:e.extStrips.length,i=t+1<n?e.isFull?st:e.normStrips?e.normStrips.length:0:0,o=Math.max(16,Math.round(i*.12));return t===0?{convWork:Math.max(64,Math.round(s*.12)),normWork:o}:{convWork:s+r,normWork:o}}function cr(e,t){let n=0;for(let r=0;r<t;r++){const i=ms(e.layers[r],r,t);n+=i.convWork+i.normWork}const s=e.clsSkipped?e.clsStrips.length:st;return n+=Math.max(64,Math.round(s*.2)),Math.max(1,n)}const fr=new Float32Array(1),Ro=new Uint32Array(fr.buffer);function is(e){fr[0]=e;const t=Ro[0],n=t>>>16&32768,s=t>>>23&255;let r=t&8388607;if(s===255)return n|31744|(r?512:0);let i=s-127+15;return i<=0?i<-10?n:(r=(r|8388608)>>>1-i,n|r+4096>>>13):i>=31?n|31744:n|Math.min(31744,(i<<10)+(r+4096>>>13))}function Go(e){const t=new Uint16Array(e.length);for(let n=0;n<e.length;n++)t[n]=is(e[n]);return t}const ln=new Map,Io=12,pr=new WeakMap,Eo=new WeakMap;function To(e){let t=2166136261,n=2654435769;const s=e.byteLength>>>2;if((e.byteOffset&3)===0){const r=new Uint32Array(e.buffer,e.byteOffset,s);for(let i=0;i<r.length;i++){const o=r[i];t=Math.imul(t^o,16777619)>>>0,n=Math.imul(n^(o<<13|o>>>19),2246822507)>>>0}}else for(let r=0;r<s*4;r+=4){const i=e[r]|e[r+1]<<8|e[r+2]<<16|e[r+3]<<24;t=Math.imul(t^i,16777619)>>>0,n=Math.imul(n^(i<<13|i>>>19),2246822507)>>>0}for(let r=s*4;r<e.byteLength;r++)t=Math.imul(t^e[r],16777619)>>>0;return`${e.byteLength}_${t.toString(16)}_${n.toString(16)}`}function Oo(e,t,n,s){const r=s!=null&&s.classifierBias?JSON.stringify(s.classifierBias):"",i=`${To(e)}|${n.chan}|${n.cs}|${n.nclass}|${n.norm}|${n.eps}|${r}`;if(ln.has(i)){const a=ln.get(i);return ln.delete(i),ln.set(i,a),a}const o=Ho(t,n);if(ln.size>=Io){const a=ln.keys().next().value;ln.delete(a)}return ln.set(i,o),o}function ds(e,t){let n=e.get(t);return n||(n=new Map,e.set(t,n)),n}function Ot(e,t,n){let s=e.get(t);return s||(s=n().catch(r=>{throw e.delete(t),r}),e.set(t,s)),s}function En(e,t){let n=0;return{alloc:(r,i)=>{const o=Math.max(16,Math.ceil(r/16)*16),a=e.createBuffer({size:o,usage:i});return t.push(a),n+=o,a},getBytes:()=>n,resetBytes:()=>{n=0}}}const on=new WeakMap;function wn(e){const t=e?on.get(e):null;if(t){on.delete(e),t.inUse=!1;for(const n of t.buffers)n.destroy();t.buffers.length=0}}function mr(e,t,n){const s=on.get(e);if(s){if(s.key===t&&!s.inUse)return s.inUse=!0,s;if(s.inUse){const o=n();return Ct(bt({key:t},o),{inUse:!0,pooled:!1})}on.delete(e);for(const o of s.buffers)o.destroy();s.buffers.length=0}const r=n(),i=Ct(bt({key:t},r),{inUse:!0,pooled:!0});return on.set(e,i),i}function Rt(e,t,n){return e.createShaderModule({label:t,code:n})}function gs(e,t,n,s,r){return ze(this,null,function*(){const i=e.createBindGroupLayout({entries:r.map((o,a)=>typeof o=="string"?{binding:a,visibility:GPUShaderStage.COMPUTE,buffer:{type:o}}:{binding:a,visibility:GPUShaderStage.COMPUTE,buffer:o})});try{const o=yield e.createComputePipelineAsync({label:t,layout:e.createPipelineLayout({bindGroupLayouts:[i]}),compute:{module:n,entryPoint:s}});return{bgl:i,pipe:o}}catch(o){if(n!=null&&n.getCompilationInfo){const a=yield n.getCompilationInfo().catch(()=>null),f=a?a.messages.filter(l=>l.type==="error"):[];if(f.length)throw new Error(`meshnet_fast_v4 [${t}] WGSL error: `+f.map(l=>`L${l.lineNum}:${l.linePos} ${l.message}`).join(" | "))}throw o}})}function ls(e,t){const n=t?`enable f16;
`:"",s=t?"f16":"f32",r=`vec4<${s}>`;return e?`${n}
@group(0) @binding(0) var<storage, read> raw_u32 : array<u32>;
@group(0) @binding(1) var<storage, read_write> inp_4 : array<${r}>;
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
  let dstX4 = ${Nt}u + wid.x * 8u + x4Loc;
  for (var s : u32 = 0u; s < 4u; s = s + 1u) {
    let zLoc = s * 8u + zOff;
    let r = zLoc * 33u + xBase;
    inp_4[((Z0 + zLoc) * 256u + Y) * ${mt}u + dstX4] =
      ${r}(${s}(sh[r]), ${s}(sh[r + 1u]), ${s}(sh[r + 2u]), ${s}(sh[r + 3u]));
  }
}`:`${n}
@group(0) @binding(0) var<storage, read> raw_f32 : array<f32>;
@group(0) @binding(1) var<storage, read_write> inp_4 : array<${r}>;
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
  let dstX4 = ${Nt}u + wid.x * 8u + x4Loc;
  for (var s : u32 = 0u; s < 4u; s = s + 1u) {
    let zl = s * 8u + zOff;
    let r = zl * 33u + xBase;
    inp_4[((Z0 + zl) * 256u + Y) * ${mt}u + dstX4] =
      ${r}(${s}(sh[r]), ${s}(sh[r + 1u]), ${s}(sh[r + 2u]), ${s}(sh[r + 3u]));
  }
}`}function dr(){return`
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
}`}function No(){return`
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
}`}function Do(){return`
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
}`}function Ws(){return`
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
}`}function rn(e,t,n,s,r){return ze(this,null,function*(){const i=ds(Eo,e);let o=i.get(t);return o||(o=ze(null,null,function*(){const a=Rt(e,t,n());return gs(e,t,a,s,r)}).catch(a=>{throw i.delete(t),a}),i.set(t,o)),o})}function qs(e,t,n,s,r){t.fill(0);const i=L*L*L;if(!(r&&e[0]===s&&e[i-1]===s))return{hasBgSkip:!1};if(n.fill(0),(e instanceof Uint8Array||e instanceof Uint8ClampedArray)&&(e.byteOffset&3)===0&&Number.isInteger(s)&&s>=0&&s<=255){const f=new Uint32Array(e.buffer,e.byteOffset,i>>>2),l=new Uint32Array(n.buffer,n.byteOffset,L*L>>>2),c=(s&255)*16843009>>>0;let m=0;for(let d=0;d<L;d++)for(let u=0;u<16384;u++)l[u]|=f[m++]^c}else{let f=0;const l=L*L;for(let c=0;c<L;c++)for(let m=0;m<l;m++,f++)e[f]!==s&&(n[m]=1)}let a=0;for(let f=0;f<L;f++){const l=f*L;for(let c=0;c<L;c++)n[l+c]!==0&&(t[c*L+f]=1,a++)}return a===0||a>=6e4?{hasBgSkip:!1}:{hasBgSkip:!0}}function gr(e){return e?`${e.grayMask}_${e.whiteMask}_${e.csfMask}_${e.temperature}_${e.supportTemperature}`:"seg"}function _r(c,m,d,u,p,g,v){return ze(this,arguments,function*(e,t,n,s,r,i,o,{includeCls:a=!0,sequential:f=!1,shouldAbort:l=null}={}){var K;const P=ds(pr,e),_=s?1:0,h=r||"none",w=o.useUniformWeff?1:0,y=(D,re,oe,J)=>gs(e,D,re,oe,J),b=["storage","storage","storage","storage"],k=["read-only-storage","storage","storage","storage","storage","storage","read-only-storage","storage","uniform","uniform","uniform"],F=["read-only-storage","read-only-storage","storage","storage","read-only-storage","uniform"],$=["storage","storage","storage","storage","read-only-storage","read-only-storage",{type:"uniform",hasDynamicOffset:!0,minBindingSize:32}],B=["storage","storage","storage","storage","read-only-storage","read-only-storage","read-only-storage","uniform"],S=["read-only-storage","read-only-storage","read-only-storage","read-only-storage","storage","storage",o.useUniformWeff?"uniform":"read-only-storage","read-only-storage",{type:"uniform",hasDynamicOffset:!0,minBindingSize:32}],M=["read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","storage","uniform","uniform","uniform"],z=`128|init|${t.cs}|${t.activation}|${_}`,R=`128|conv0|${t.cs}|${t.dilations[0]}|${t.norm}|${_}|${h}`,G=`128|prep|${t.chan}|${t.cs}|${t.activation}|${t.norm}|${_}`,T=`128|flush|${t.cs}|${_}`,C=`128|norm|${t.cs}|${t.activation}|${t.norm}|${_}`,I=`128|conv|${t.chan}|${t.cs}|${t.activation}|${t.norm}|${w}|${_}|${h}`,ie=`128|cls|${t.chan}|${t.cs}|${t.nclass}|${(K=n==null?void 0:n.clsK4)!=null?K:0}|${o.numConvs}|${t.activation}|${t.norm}|${_}|${gr(i)}`,ce=()=>Ot(P,z,()=>{const D=Rt(e,"init_act8_128",o.initActWgsl());return y("init_act8_128",D,"main",b)}),N=()=>Ot(P,R,()=>ze(null,null,function*(){const D=Rt(e,"conv0_128",o.conv0Wgsl()),re=yield Promise.all(o.halfPass0?[y("conv0_128_lo",D,"main_lo",k),y("conv0_128_hi",D,"main_hi",k),y("conv0_128_bg_lo",D,"main_bg_lo",k),y("conv0_128_bg_hi",D,"main_bg_hi",k)]:[y("conv0_128",D,"main",k),y("conv0_128_bg",D,"main_bg",k)]);return o.halfPass0?{lo:re[0],hi:re[1],bgLo:re[2],bgHi:re[3]}:{main:re[0],bg:re[1]}})),W=()=>Ot(P,G,()=>ze(null,null,function*(){const D=Rt(e,"prep_128",o.prepWgsl()),[re,oe]=yield Promise.all([y("moments_finish_128",D,"moments_finish",F),y("prep_weff_128",D,"prep_weff",F)]);return{pMomFin:re,pPrepW:oe}})),X=()=>Ot(P,T,()=>{const D=Rt(e,"flush_128",o.flushWgsl());return y("flush_stage_128",D,"main",$)}),Q=()=>Ot(P,C,()=>ze(null,null,function*(){const D=Rt(e,"norm_128",o.normWgsl()),[re,oe]=yield Promise.all([y("norm_quant8_128",D,"main",B),y("norm_halo_fill_128",D,"norm_halo_fill",B)]);return{pNorm:re,pNormHalo:oe}})),O=()=>a?Ot(P,ie,()=>{const D=Rt(e,"cls_128",o.clsWgsl());return y("classify_v4_128",D,"main",M)}):Promise.resolve(null),le=()=>Ot(P,I,()=>ze(null,null,function*(){const D=Rt(e,"conv_128",o.convWgsl());if(o.halfPassConv){const[V,Z,q,he,se,Ue]=yield Promise.all([y("conv_128_lo",D,"main_lo",S),y("conv_128_hi",D,"main_hi",S),y("conv_128_ext_lo",D,"main_ext_lo",S),y("conv_128_ext_hi",D,"main_ext_hi",S),y("conv_128_bg_lo",D,"main_bg_lo",S),y("conv_128_bg_hi",D,"main_bg_hi",S)]);return{lo:V,hi:Z,extLo:q,extHi:he,bgLo:se,bgHi:Ue}}const[re,oe,J]=yield Promise.all([y("conv_128",D,"main",S),y("conv_128_ext",D,"main_ext",S),y("conv_128_bg",D,"main_bg",S)]);return{main:re,ext:oe,bg:J}}));if(f){for(const D of[ce,W,X,Q,N,le,O]){if(l!=null&&l())return null;yield D()}return null}const[ue,Ce,ke,Ae,j,ee,A]=yield Promise.all([ce(),N(),W(),X(),Q(),O(),le()]);return{pInit:ue,pMomFin:ke.pMomFin,pPrepW:ke.pPrepW,pFlush:Ae,pNorm:j.pNorm,pNormHalo:j.pNormHalo,pCls:ee,pConv0:Ce,pConv:A}})}function br(m,d,u,p,g,v,P,_){return ze(this,arguments,function*(e,t,n,s,r,i,o,a,{includeCls:f=!0,sequential:l=!1,shouldAbort:c=null}={}){var K;const h=ds(pr,e),w=s?1:0,y=r||"none",b=i?1:0,k=a.useUniformWeff?1:0,F=a.chunkableStd?1:0,$=(D,re,oe,J)=>gs(e,D,re,oe,J),B=["storage","storage"],S=["read-only-storage","storage","storage","read-only-storage","read-only-storage","storage","storage","read-only-storage","uniform"],M=["read-only-storage","read-only-storage","storage","storage","storage","storage","read-only-storage","uniform"],z=["storage","storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","uniform"],R=["read-only-storage","read-only-storage","storage","storage","storage","storage",a.useUniformWeff?"uniform":"read-only-storage","read-only-storage",a.chunkableStd?{type:"uniform",hasDynamicOffset:!0,minBindingSize:32}:"uniform"],G=["read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","storage","read-only-storage","uniform"],T=`std|init|${t.cs}|${t.activation}|${w}|${b}`,C=`std|conv0|${t.cs}|${t.dilations[0]}|${t.norm}|${w}|${y}|${b}`,I=`std|prep|${t.chan}|${t.cs}|${t.activation}|${t.norm}|${w}|${b}`,ie=`std|norm|${t.cs}|${t.activation}|${t.norm}|${w}|${b}`,ce=`std|conv|${t.chan}|${t.cs}|${t.activation}|${t.norm}|${k}|${w}|${y}|${b}${F?"|chk1":""}`,N=`std|cls|${t.chan}|${t.cs}|${t.nclass}|${(K=n==null?void 0:n.clsK4)!=null?K:0}|${t.activation}|${t.norm}|${w}|${b}|${gr(o)}`,W=()=>Ot(h,T,()=>{const D=Rt(e,"init_act8",a.initActWgsl());return $("init_act8",D,"main",B)}),X=()=>Ot(h,C,()=>ze(null,null,function*(){const D=Rt(e,"conv0",a.conv0Wgsl()),re=yield Promise.all(a.halfPass0?[$("conv0_lo",D,"main_lo",S),$("conv0_hi",D,"main_hi",S),$("conv0_bg_lo",D,"main_bg_lo",S),$("conv0_bg_hi",D,"main_bg_hi",S)]:[$("conv0",D,"main",S),$("conv0_bg",D,"main_bg",S)]);return a.halfPass0?{lo:re[0],hi:re[1],bgLo:re[2],bgHi:re[3]}:{main:re[0],bg:re[1]}})),Q=()=>Ot(h,I,()=>ze(null,null,function*(){const D=Rt(e,"prep",a.prepWgsl()),[re,oe]=yield Promise.all([$("moments_finish",D,"moments_finish",M),$("prep_weff",D,"prep_weff",M)]);return{pMomFin:re,pPrepW:oe}})),O=()=>Ot(h,ie,()=>ze(null,null,function*(){const D=Rt(e,"norm",a.normWgsl()),[re,oe]=yield Promise.all([$("norm_quant8",D,"main",z),$("norm_halo_fill",D,"norm_halo_fill",z)]);return{pNorm:re,pNormHalo:oe}})),le=()=>f?Ot(h,N,()=>{const D=Rt(e,"cls",a.clsWgsl());return $("classify_v4",D,"main",G)}):Promise.resolve(null),ue=()=>Ot(h,ce,()=>ze(null,null,function*(){const D=Rt(e,"conv",a.convWgsl());if(a.halfPassConv){const[J,V,Z,q]=yield Promise.all([$("conv_lo",D,"main_lo",R),$("conv_hi",D,"main_hi",R),$("conv_ext_lo",D,"main_ext_lo",R),$("conv_ext_hi",D,"main_ext_hi",R)]);return{lo:J,hi:V,extLo:Z,extHi:q}}const[re,oe]=yield Promise.all([$("conv",D,"main",R),$("conv_ext",D,"main_ext",R)]);return{main:re,ext:oe}}));if(l){for(const D of[W,Q,O,X,ue,le]){if(c!=null&&c())return null;yield D()}return null}const[Ce,ke,Ae,j,ee,A]=yield Promise.all([W(),X(),Q(),O(),le(),ue()]);return{pInit:Ce,pMomFin:Ae.pMomFin,pPrepW:Ae.pPrepW,pNorm:j.pNorm,pNormHalo:j.pNormHalo,pCls:ee,pConv0:ke,pConv:A}})}function Rs(e,t,n,s,r){n.fill(0);const i=r&&e[0]===0&&e[e.length-1]===0;let o=0,a=0;if(!i){if(s)for(let f=0;f<L;f++){const l=f*L*cn;for(let c=0;c<L;c++){let m=l+c*cn+32;for(let d=0;d<L;d++,a++,m++){const u=e[a];t[m]=u===0?0:is(u)}}}else for(let f=0;f<L;f++){const l=f*L*cn;for(let c=0;c<L;c++){const m=f*L*L+c*L;t.set(e.subarray(m,m+L),l+c*cn+32)}}return{hasBgSkip:!1}}for(let f=0;f<L;f++){const l=f*L*cn;for(let c=0;c<L;c++){let m=!1,d=l+c*cn+32;for(let u=0;u<L;u++,a++,d++){const p=e[a];p!==0?(t[d]=s?is(p):p,m=!0):t[d]=0}m&&(n[f*L+c]=1,o++)}}return o===0||o>=6e4?{hasBgSkip:!1}:{hasBgSkip:!0}}function Bn(e,t){const n=new Uint8Array(L*L);for(let s=0;s<L;s++){const r=s*L,i=s-t,o=s+t;for(let a=0;a<L;a++){if(!e[r+a])continue;const f=a-t,l=a+t;if(i>=0){const c=i*L;f>=0&&(n[c+f]=1),n[c+a]=1,l<L&&(n[c+l]=1)}if(f>=0&&(n[r+f]=1),n[r+a]=1,l<L&&(n[r+l]=1),o>=0&&o<L){const c=o*L;f>=0&&(n[c+f]=1),n[c+a]=1,l<L&&(n[c+l]=1)}}}return n}function Vo(e,t){const n=new Uint8Array(L*L),s=new Uint8Array(L*L),r=new Int32Array(L+1);for(let i=0;i<L;i++){const o=i*L;for(let a=0;a<L;a++)r[a+1]=r[a]+e[o+a];for(let a=0;a<L;a++)r[Math.min(L-1,a+t)+1]-r[Math.max(0,a-t)]>0&&(n[o+a]=1)}for(let i=0;i<L;i++){for(let o=0;o<L;o++)r[o+1]=r[o]+n[o*L+i];for(let o=0;o<L;o++)r[Math.min(L-1,o+t)+1]-r[Math.max(0,o-t)]>0&&(s[o*L+i]=1)}return s}function Yn(e){const t=new Uint8Array(st);for(let n=0;n<L;n++){const s=n*L,r=n*64;for(let i=0;i<64;i++){const o=s+(i<<2);e[o]|e[o+1]|e[o+2]|e[o+3]&&(t[r+i]=1)}}return t}function Wn(e){const t=new Uint8Array(L*L);for(let n=0;n<L;n++){const s=n*L,r=n*64;for(let i=0;i<64;i++)if(e[r+i]){const o=s+(i<<2);t[o]=1,t[o+1]=1,t[o+2]=1,t[o+3]=1}}return t}function qn(e){let t=0;for(let r=0;r<st;r++)t+=e[r];const n=new Uint32Array(t);let s=0;for(let r=0;r<L;r++){const i=r*64;for(let o=0;o<64;o++)e[i+o]&&(n[s++]=r<<8|o)}return n}function un(e){let t=0;for(let n=0;n<e.length;n++)t+=e[n];return t}function Gs(e){const t=new Uint8Array(st);if(e===1024)for(let n=0;n<32;n++)for(let s=0;s<32;s++){const r=n*8+(n*3+s*5&7),i=s*2+(n+s&1);t[r*64+i]=1}else if(e===512)for(let n=0;n<32;n++)for(let s=0;s<16;s++){const r=n*8+(n*3+s*5&7),i=s*4+(n+s*3&3);t[r*64+i]=1}else for(let n=0;n<16;n++)for(let s=0;s<16;s++){const r=n*16+(n*7+s*3&15),i=s*4+(n+s*3&3);t[r*64+i]=1}return t}function hr(e,t,n,s){const r=n.length,i=()=>({isFull:!0,mode:"full",writtenMask:null,computedMask:null,mainStrips:null,extStrips:null,nMomExt:0,normStrips:null,haloRows:null,bgStrip:null,extWeight:0});if(!s||!t.hasBgSkip)return{clsSkipped:!1,clsStrips:null,layers:Array.from({length:r},i)};const o=Yn(Vo(e,3)),a=un(o)<15800,f=a?qn(o):null,l=new Array(r);let c=null;for(let _=0;_<r;_++){const h=n[_],w=Bn(_===0?e:c,h);if(_>0)for(let b=0;b<L;b++){const k=b<h||b>=L-h,F=b*L;for(let $=0;$<L;$++)(k||$<h||$>=L-h)&&(w[F+$]=1)}c=w;const y=new Uint8Array(st);for(let b=0;b<L;b++){const k=b*L,F=b*64;for(let $=0;$<64;$++){const B=k+($<<2);w[B]|w[B+1]|w[B+2]|w[B+3]||(y[F+$]=1)}}l[_]=y}const m=new Array(r);m[r-1]=o;for(let _=r-2;_>=0;_--)m[_]=Yn(Bn(Wn(m[_+1]),n[_+1]));const d=a&&r>=4&&n[r-1]<=2&&n[r-2]<=4&&n[r-3]<=6,u=Math.max(1,r-3),p=new Array(r).fill(null),g=new Array(r).fill(null),v=new Array(r).fill(null);if(d){const h=(st-un(m[r-1]))/st>=.52?256:512,w=1024,y=Gs(h),b=Gs(w),k=m[r-1],F=new Uint8Array(st);let $=0;for(let B=0;B<st;B++)y[B]&&!k[B]&&(F[B]=1,$++);if($>0&&$<=In&&un(k)+$<=15360){p[r-1]=F,g[r-1]=new Uint8Array(st),v[r-1]=y;for(let B=r-2;B>=u;B--){const S=new Uint8Array(st),M=m[B+1],z=p[B+1];for(let N=0;N<st;N++)S[N]=M[N]|z[N];const R=Yn(Bn(Wn(S),n[B+1])),G=new Uint8Array(st),T=m[B];for(let N=0;N<st;N++)R[N]&&!T[N]&&(G[N]=1);const C=B===u?b:y,I=new Uint8Array(st);let ie=0,ce=0;for(let N=0;N<st;N++)(G[N]||C[N])&&!T[N]&&(I[N]=1,ie++,C[N]&&ce++);if(ce===0||ie>In||un(T)+ie>15360){const N=B+1,W=m[N],X=g[N],Q=new Uint8Array(st);let O=0;for(let le=0;le<st;le++)(X[le]||b[le])&&!W[le]&&(Q[le]=1,O++);O<=In&&un(W)+O<=15360&&(p[N]=Q,v[N]=b);break}g[B]=G,p[B]=I,v[B]=C}}}const P=new Array(r);for(let _=0;_<r;_++){const h=un(l[_]),w=st-h,y=p[_]!==null,b=y?un(m[_])+un(p[_]):1/0;if(h>=512&&w<=b){const k=new Uint8Array(st);let F=-1;for(let M=0;M<st;M++)l[_][M]?F<0&&(F=M):k[M]=1;const $=k.slice();$[F]=1;const B={z:F>>>6,yWg:F&63,packed:F>>>6<<8|F&63},S=qn(k);P[_]={isFull:!1,mode:"rpure",writtenMask:k,computedMask:$,mainStrips:S,extStrips:_===0?null:new Uint32Array([B.packed]),nMomExt:_===0?0:1,normStrips:S,haloRows:null,bgStrip:B,extWeight:h}}else if(y&&b<=15360){const k=m[_],F=p[_],$=g[_],B=v[_],S=qn(k),M=[],z=[];for(let I=0;I<L;I++){const ie=I*64;for(let ce=0;ce<64;ce++){const N=ie+ce;if(!F[N])continue;const W=I<<8|ce;B[N]?M.push(W):z.push(W)}}const R=M.length;if(R===0){P[_]=i();continue}const G=new Uint32Array(M.length+z.length);G.set(M,0),G.set(z,M.length);const T=new Uint8Array(st),C=new Uint8Array(st);for(let I=0;I<st;I++)T[I]=k[I]|$[I],C[I]=k[I]|F[I];P[_]={isFull:!1,mode:"bwd",writtenMask:T,computedMask:C,mainStrips:S,extStrips:G,nMomExt:R,normStrips:_+1<r?qn(T):null,haloRows:null,bgStrip:null,extWeight:(st-S.length)/R}}else P[_]=i()}for(let _=r-2;_>=0;_--)P[_].mode==="bwd"&&P[_+1].mode!=="bwd"&&(P[_]=i());for(let _=0;_<r-1;_++){const h=P[_];if(h.mode!=="rpure")continue;const w=P[_+1],y=w.isFull?new Uint8Array(L*L).fill(1):Bn(Wn(w.computedMask),n[_+1]),b=Wn(h.writtenMask),k=[];for(let F=0;F<L;F++){const $=F*L;for(let B=0;B<L;B++)y[$+B]&&!b[$+B]&&k.push(F<<8|B)}k.length>0&&(h.haloRows=new Uint32Array(k))}return{clsSkipped:a,clsStrips:f,layers:P}}function Ho(e,t){const n=t.chan,s=t.cs,r=s/4,i=t.nclass,o=Math.ceil(i/4),{convs:a,affines:f,classifier:l}=e,c=a.length,m=27*r,d=9*s*3*r,u=s*o,p=(m+(c-1)*d+u)*4,g=new Float32Array(p),v=4*s,P=c*v,_=new Float32Array(P+o*4),h=(b,k,F)=>{if(t.norm!=="gn"||k>=n)return 1;const $=a[b],B=F*27,S=k*B;let M=0;for(let z=0;z<B;z++)M+=Math.abs($.w[S+z]);return Math.max(M/16,1e-6)};for(let b=0;b<a[0].outC;b++){const k=h(0,b,a[0].inC),F=1/k;for(let $=0;$<27;$++)g[$*s+b]=a[0].w[b*27+$]*F;_[2*s+b]=t.eps/(k*k),a[0].bias&&(_[3*s+b]=a[0].bias[b])}for(let b=a[0].outC;b<s;b++)_[2*s+b]=t.eps;for(let b=1;b<c;b++){const k=a[b],F=(m+(b-1)*d)*4,$=b*v;for(let B=0;B<k.outC;B++){const S=h(b,B,k.inC),M=1/S,z=B>>>2,R=B&3;for(let G=0;G<9;G++)for(let T=0;T<k.inC;T++)for(let C=0;C<3;C++){const I=G*3+C,ie=F+(((G*s+T)*3+C)*r+z)*4+R;g[ie]=k.w[(B*k.inC+T)*27+I]*M}_[$+2*s+B]=t.eps/(S*S),k.bias&&(_[$+3*s+B]=k.bias[B])}for(let B=k.outC;B<s;B++)_[$+2*s+B]=t.eps}for(let b=0;b<c;b++){const k=b*v,F=f[b];for(let $=0;$<n;$++)t.norm==="gn"?(_[k+$]=F!=null&&F.scale?F.scale[$]:1,_[k+s+$]=F!=null&&F.bias?F.bias[$]:0):(_[k+$]=1,_[k+s+$]=0)}const w=m+(c-1)*d,y=w*4;for(let b=0;b<n;b++)for(let k=0;k<i;k++)g[y+b*o*4+k]=l.w[k*l.inC+b];for(let b=0;b<o*4;b++)_[P+b]=b<i?l.bias?l.bias[b]:0:-1e30;return{wF32:g,wF16:Go(g),qmetaF32:_,w0Vec4s:m,hiddenVec4PerLayer:d,clsVec4Off:w,clsBiasOff:P,metaStride:v,clsK4:o}}function kn(e){if(e==="gelu_tanh")return`fn act(x : f32) -> f32 {
  let u = clamp(0.7978845608028654 * (x + 0.044715 * x * x * x), -9.0, 9.0);
  return 0.5 * x * (1.0 + tanh(u));
}`;if(e==="relu")return"fn act(x : f32) -> f32 { return max(x, 0.0); }";if(e==="elu")return"fn act(x : f32) -> f32 { return select(exp(clamp(x, -20.0, 0.0)) - 1.0, x, x >= 0.0); }";throw new Error(`meshnet_fast_v4: unsupported activation '${e}'`)}function wr(e){return e==="gelu_tanh"?{uZeroInt:7,uZeroFloat:7/255,uZeroWord:117901063,sterbenzSub:"1.02734375h",zeroBin:7}:e==="relu"?{uZeroInt:0,uZeroFloat:0,uZeroWord:0,sterbenzSub:"1.0h",zeroBin:0}:{uZeroInt:32,uZeroFloat:32/255,uZeroWord:538976288,sterbenzSub:"1.125h",zeroBin:32}}function vr({chan:e,clsK4:t,nclass:n,V4:s,suf:r,readBiasStmt:i,biasExpr:o,probCfg:a}){const f=`    var acc0 = ${s}(0.0${r});
    var acc1 = ${s}(0.0${r});
    var acc2 = ${s}(0.0${r});
    var acc3 = ${s}(0.0${r});
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
${f}
${pt(4,d=>`    let l${d} = vec4<f32>(acc${d}) + vec4<f32>(${o(d)});
    let m${d} = l${d} > best_v;
    best_v = select(best_v, l${d}, m${d});
    best_k = select(best_k, vec4<u32>(k_base + ${d}u), m${d});
`)}  }

  labels8[row_idx * ${wt}u + x4] = best_k.x | (best_k.y << 8u) | (best_k.z << 16u) | (best_k.w << 24u);`;const l=`f32(${(1/Math.max(a.temperature,1e-6)).toExponential(8)})`,c=`f32(${(1/Math.max(a.supportTemperature,1e-6)).toExponential(8)})`,m=a.temperature===a.supportTemperature;return`  var max_v = vec4<f32>(-1.0e29);
  for (var k4 : u32 = 0u; k4 < ${t}u; k4 = k4 + 1u) {
${f}
${pt(4,d=>`    if (k_base + ${d}u < ${n}u) {
      max_v = max(max_v, vec4<f32>(acc${d}) + vec4<f32>(${o(d)}));
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
${pt(4,d=>`    let k${d} = k_base + ${d}u;
    if (k${d} < ${n}u) {
      let l${d} = vec4<f32>(acc${d}) + vec4<f32>(${o(d)});
      let v${d} = exp(clamp((l${d} - max_v) * ${l}, vec4<f32>(-80.0), vec4<f32>(0.0)));
      let s${d} = ${m?`v${d}`:`exp(clamp((l${d} - max_v) * ${c}, vec4<f32>(-80.0), vec4<f32>(0.0)))`};
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
  let vox_base = row_idx * ${L}u + x4 * 4u;
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
  }`}function xr({device:e,hasF16:t,nvox:n,outBufBytes:s,inpBuf:r,act8_0:i,labels8Buf:o,readbackBuf:a,pInit:f,bgInit:l,pCls:c,bgCls:m,clsUbo:d,packed:u,modelEntry:p,probCfg:g,canGpuProb:v,probSlots:P,ownedBuffers:_,mkBuf:h}){let w=!1,y=!1,b=!1,k=!1;const F=new Uint8Array(L*L);let $=null,B=null,S=null,M=null;const z=(W,X)=>e.createBindGroup({layout:W,entries:X.map((Q,O)=>({binding:O,resource:Q&&Q.buffer?Q:{buffer:Q}}))});function R(){if(!$){const W=t?"prep_in_u8_f16":"prep_in_u8_f32";$=ze(null,null,function*(){const{bgl:X,pipe:Q}=yield rn(e,W,()=>ls(!0,t),"main",["read-only-storage","storage","uniform"]);if(k)return null;const O=h(256*4,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST),le=new Float32Array(256),ue=z(X,[{buffer:o,offset:0,size:n},r,O]);return{pipe:Q,ubo:O,lutF32:le,bg:ue}}).catch(X=>{throw $=null,X})}return $}function G(){if(!B){const W=t?"prep_in_f32_f16":"prep_in_f32_f32";B=ze(null,null,function*(){const{bgl:X,pipe:Q}=yield rn(e,W,()=>ls(!1,t),"main",["read-only-storage","storage","uniform"]);if(k)return null;const O=h(16,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST),le=new Float32Array(4),ue=s>=n*4?z(X,[{buffer:o,offset:0,size:n*4},r,O]):null,Ce=i.size>=n*4?z(X,[{buffer:i,offset:0,size:n*4},r,O]):null;return{pipe:Q,ubo:O,f32Tmp:le,bgLabels:ue,bgAct0:Ce}}).catch(X=>{throw B=null,X})}return B}function T(){return S||(S=ze(null,null,function*(){const{bgl:W,pipe:X}=yield rn(e,"transpose_u8_v4",dr,"main",["read-only-storage","storage"]);if(k)return null;const Q=z(W,[{buffer:o,offset:0,size:n},{buffer:r,offset:0,size:n}]);return{pipe:X,bg:Q}}).catch(W=>{throw S=null,W})),S}function C(){return M||(M=ze(null,null,function*(){const[W,X,Q,O]=yield Promise.all([rn(e,"prob_unpack_two",Do,"main",["read-only-storage","storage","storage"]),rn(e,"prob_blur_axis",Ws,"blur_axis",["read-only-storage","storage","read-only-storage","uniform"]),rn(e,"prob_blur_z_gate",Ws,"blur_z_gate",["read-only-storage","storage","read-only-storage","uniform"]),rn(e,"transpose_f32",No,"main",["read-only-storage","storage"])]);if(k)return null;const le=GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST,ue=144,Ce=h(ue,le),ke=h(ue,le),Ae=h(ue,le),j=D=>({buffer:D,offset:0,size:s}),ee=z(W.bgl,[j(P.pass0HoldBuf),j(P.y0),j(P.y1)]),A=z(W.bgl,[j(o),j(P.b),j(P.sup)]),K=[P.y0,P.y1,P.b].map(D=>({buf:D,bgBlurX:z(X.bgl,[j(D),j(o),j(P.sup),Ce]),bgBlurY:z(X.bgl,[j(o),j(D),j(P.sup),ke]),bgBlurZ:z(Q.bgl,[j(D),j(o),j(P.sup),Ae]),bgTranspose:z(O.bgl,[j(o),j(D)])}));return{pUnpack:W.pipe,pBlurAxis:X.pipe,pBlurZGate:Q.pipe,pTransposeF32:O.pipe,bgUnpack0:ee,bgUnpack1:A,tissues:K,uboX:Ce,uboY:ke,uboZ:Ae,uboScratch:new ArrayBuffer(ue),lastBlurKey:null}}).catch(W=>{throw M=null,W})),M}function I(){g?v&&C().catch(()=>{}):(R().catch(()=>{}),T().catch(()=>{}))}function ie(){k=!0}function ce(Ce){return ze(this,arguments,function*({volume:W,ioOpts:X,useCone:Q,padInputHost:O,headRowHost:le,hasF16Flag:ue}){var Ae;if(X!=null&&X.gpuNativeInput){const j=(Ae=X.normOffset)!=null?Ae:0,ee=X.normRange||1,A=W instanceof Uint8Array||W instanceof Uint8ClampedArray,K=s>=n*4||i.size>=n*4;if(A){const J=qs(W,le,F,j,Q),V=yield R();for(let Z=0;Z<256;Z++)V.lutF32[Z]=Z===j?0:(Z-j)/ee;return e.queue.writeBuffer(V.ubo,0,V.lutF32),e.queue.writeBuffer(o,0,W,0,n),{info:J,runPrePasses(Z,q){(!y||b)&&(Z.clearBuffer(r),y=!0,b=!1);const he=Z.beginComputePass();if(he.setPipeline(V.pipe),he.setBindGroup(0,V.bg),he.dispatchWorkgroups(8,L,8),he.end(),q.push("preprocess"),w){const se=Z.beginComputePass();se.setPipeline(f.pipe),se.setBindGroup(0,l),se.dispatchWorkgroups(1,L,L),se.end(),q.push("preprocess"),w=!1}}}}if(K){const J=qs(W,le,F,j,Q),V=yield G(),Z=!(s>=n*4),q=Z?i:o,he=Z?V.bgAct0:V.bgLabels,se=W instanceof Float32Array?W:Float32Array.from(W);return V.f32Tmp[0]=j,V.f32Tmp[1]=ee,V.f32Tmp[2]=0,V.f32Tmp[3]=0,e.queue.writeBuffer(V.ubo,0,V.f32Tmp),e.queue.writeBuffer(q,0,se,0,n),{info:J,runPrePasses(Ue,Be){(!y||b)&&(Ue.clearBuffer(r),y=!0,b=!1);const Ge=Ue.beginComputePass();if(Ge.setPipeline(V.pipe),Ge.setBindGroup(0,he),Ge.dispatchWorkgroups(8,L,8),Ge.end(),Be.push("preprocess"),w||Z){const Ie=Ue.beginComputePass();Ie.setPipeline(f.pipe),Ie.setBindGroup(0,l),Ie.dispatchWorkgroups(1,L,L),Ie.end(),Be.push("preprocess"),w=!1}}}}const D=new Float32Array(n);for(let J=0;J<n;J++){const V=W[J];D[J]=V===j?0:(V-j)/ee}const re=$n(D,[L,L,L],[2,1,0]),oe=Rs(re,O,le,ue,Q);return e.queue.writeBuffer(r,0,O),y=!0,b=!1,{info:oe,runPrePasses(J,V){if(w){const Z=J.beginComputePass();Z.setPipeline(f.pipe),Z.setBindGroup(0,l),Z.dispatchWorkgroups(1,L,L),Z.end(),V.push("preprocess"),w=!1}}}}const ke=Rs(W,O,le,ue,Q);return e.queue.writeBuffer(r,0,O),y=!0,b=!1,{info:ke,runPrePasses(j,ee){if(w){const A=j.beginComputePass();A.setPipeline(f.pipe),A.setBindGroup(0,l),A.dispatchWorkgroups(1,L,L),A.end(),ee.push("preprocess"),w=!1}}}})}function N(ke){return ze(this,arguments,function*({enc:W,schedule:X,passCategories:Q,u4Tmp:O,ioOpts:le,paced:ue=!1,onProgress:Ce=null}){const Ae=X.clsSkipped?X.clsStrips.length:L;if(!g){O[0]=u.clsVec4Off,O[1]=u.clsBiasOff,O[2]=X.clsSkipped?0:1,O[3]=0,e.queue.writeBuffer(d,0,O);{const se=W.beginComputePass();se.setPipeline(c.pipe),se.setBindGroup(0,m),Ae>0&&se.dispatchWorkgroups(1,X.clsSkipped?1:64,Ae),se.end(),Q.push("classify")}if(le!=null&&le.gpuNativeOutput){const se=yield T(),Ue=W.beginComputePass();Ue.setPipeline(se.pipe),Ue.setBindGroup(0,se.bg),Ue.dispatchWorkgroups(8,L,8),Ue.end(),Q.push("postprocess"),b=!0,W.copyBufferToBuffer(r,0,a,0,n),e.queue.submit([W.finish()]),yield a.mapAsync(GPUMapMode.READ);const Be=new Uint8Array(a.getMappedRange()).slice();return a.unmap(),ue&&Ce&&Ce(1,""),[Be]}W.copyBufferToBuffer(o,0,a,0,s),e.queue.submit([W.finish()]),yield a.mapAsync(GPUMapMode.READ);const q=new Uint8Array(a.getMappedRange()),he=new Float32Array(n);for(let se=0;se<n;se++)he[se]=q[se];return a.unmap(),ue&&Ce&&Ce(1,""),[he]}if(v){const q=yield C();O[0]=u.clsVec4Off,O[1]=u.clsBiasOff,O[2]=X.clsSkipped?0:1,O[3]=0,e.queue.writeBuffer(d,0,O),O[3]=1,e.queue.writeBuffer(P.clsUbo1,0,O);{const $e=W.beginComputePass();$e.setPipeline(c.pipe),$e.setBindGroup(0,m),Ae>0&&$e.dispatchWorkgroups(1,X.clsSkipped?1:64,Ae),$e.end(),Q.push("classify")}W.copyBufferToBuffer(o,0,P.pass0HoldBuf,0,s),X.clsSkipped&&W.clearBuffer(o,0,s);{const $e=W.beginComputePass();$e.setPipeline(c.pipe),$e.setBindGroup(0,P.bgCls1),Ae>0&&$e.dispatchWorkgroups(1,X.clsSkipped?1:64,Ae),$e.end(),Q.push("classify")}w=!0;const he=`${g.sigma}|${g.supportPower}`,se=g.sigma>0,Ue=se?Math.max(1,Math.round(3*g.sigma)):0;if(q.lastBlurKey!==he){const $e=new Uint32Array(q.uboScratch),Je=new Float32Array(q.uboScratch);Je.fill(0);let gt=1;if(se){gt=0;for(let ut=-Ue;ut<=Ue;ut++){const dt=Math.exp(-.5*ut*ut/(g.sigma*g.sigma));Je[4+ut+Ue]=dt,gt+=dt}}else Je[4]=1;$e[1]=Ue,Je[2]=gt,$e[0]=0,Je[3]=1,e.queue.writeBuffer(q.uboX,0,q.uboScratch),$e[0]=1,e.queue.writeBuffer(q.uboY,0,q.uboScratch),$e[0]=2,Je[3]=g.supportPower,e.queue.writeBuffer(q.uboZ,0,q.uboScratch),q.lastBlurKey=he}{const $e=W.beginComputePass();$e.setPipeline(q.pUnpack),$e.setBindGroup(0,q.bgUnpack0),$e.dispatchWorkgroups(256,256,1),$e.end(),Q.push("postprocess");const Je=W.beginComputePass();Je.setPipeline(q.pUnpack),Je.setBindGroup(0,q.bgUnpack1),Je.dispatchWorkgroups(256,256,1),Je.end(),Q.push("postprocess")}ue&&(e.queue.submit([W.finish()]),yield e.queue.onSubmittedWorkDone(),Ce&&Ce(.992,""),yield lr(),W=e.createCommandEncoder());const Be=!!(le!=null&&le.gpuNativeOutput);for(let $e=0;$e<3;$e++){const Je=q.tissues[$e];if(se){const ut=W.beginComputePass();ut.setPipeline(q.pBlurAxis),ut.setBindGroup(0,Je.bgBlurX),ut.dispatchWorkgroups(4,64,L),ut.end(),Q.push("postprocess");const dt=W.beginComputePass();dt.setPipeline(q.pBlurAxis),dt.setBindGroup(0,Je.bgBlurY),dt.dispatchWorkgroups(4,64,L),dt.end(),Q.push("postprocess")}const gt=W.beginComputePass();if(gt.setPipeline(q.pBlurZGate),gt.setBindGroup(0,Je.bgBlurZ),gt.dispatchWorkgroups(4,64,L),gt.end(),Q.push("postprocess"),Be){const ut=W.beginComputePass();ut.setPipeline(q.pTransposeF32),ut.setBindGroup(0,Je.bgTranspose),ut.dispatchWorkgroups(8,L,8),ut.end(),Q.push("postprocess")}else $e<2&&W.copyBufferToBuffer(o,0,Je.buf,0,s)}const Ge=Be?[P.y0,P.y1,P.b]:[P.y0,P.y1,o];W.copyBufferToBuffer(Ge[0],0,a,0,s),e.queue.submit([W.finish()]),yield a.mapAsync(GPUMapMode.READ);const Ie=new Float32Array(a.getMappedRange()).slice();a.unmap();const tt=$e=>ze(null,null,function*(){const Je=e.createCommandEncoder();Je.copyBufferToBuffer($e,0,a,0,s),e.queue.submit([Je.finish()]),yield a.mapAsync(GPUMapMode.READ);const gt=new Float32Array(a.getMappedRange()).slice();return a.unmap(),gt}),De=yield tt(Ge[1]),Ee=yield tt(Ge[2]);return ue&&Ce&&Ce(1,""),[Ie,De,Ee]}O[0]=u.clsVec4Off,O[1]=u.clsBiasOff,O[2]=X.clsSkipped?0:1,O[3]=0,e.queue.writeBuffer(d,0,O);{const q=W.beginComputePass();q.setPipeline(c.pipe),q.setBindGroup(0,m),Ae>0&&q.dispatchWorkgroups(1,X.clsSkipped?1:64,Ae),q.end(),Q.push("classify"),W.copyBufferToBuffer(o,0,a,0,s)}e.queue.submit([W.finish()]),yield a.mapAsync(GPUMapMode.READ);const j=1/65535,ee=new Uint16Array(a.getMappedRange()),A=new Float32Array(n),K=new Float32Array(n);for(let q=0;q<n;q++)A[q]=ee[q*2]*j,K[q]=ee[q*2+1]*j;a.unmap(),O[3]=1,e.queue.writeBuffer(d,0,O);const D=e.createCommandEncoder();X.clsSkipped&&D.clearBuffer(o,0,s);const re=D.beginComputePass();re.setPipeline(c.pipe),re.setBindGroup(0,m),Ae>0&&re.dispatchWorkgroups(1,X.clsSkipped?1:64,Ae),re.end(),Q.push("classify"),D.copyBufferToBuffer(o,0,a,0,s),e.queue.submit([D.finish()]),yield a.mapAsync(GPUMapMode.READ);const oe=new Uint16Array(a.getMappedRange()),J=new Float32Array(n),V=new Float32Array(n);for(let q=0;q<n;q++)J[q]=oe[q*2]*j,V[q]=oe[q*2+1]*j;a.unmap();const Z=Uo([A,K,J],V,[L,L,L],p);return le!=null&&le.gpuNativeOutput?Z.map(q=>$n(q,[L,L,L],[2,1,0])):Z})}return{prepareInput:ce,finishAndReadback:N,warmupIoPipelines:I,dispose:ie}}function yr(e,t){if(e==="sg32")return{decls:"",entryArgs:"",add:r=>`subgroupAdd(${r})`,min:r=>`subgroupMin(${r})`,max:r=>`subgroupMax(${r})`};const n=(r,i)=>{const o=f=>r==="+"?`  x = x + subgroupShuffleXor(x, ${f}u);`:`  x = ${r}(x, subgroupShuffleXor(x, ${f}u));`;return e==="sg64"?`fn ${i}(v : f32) -> f32 {
  var x = v;
${o(16)}
${o(8)}
${o(4)}
${o(2)}
${o(1)}
  return x;
}
`:`fn ${i}(v : f32, sg_size : u32) -> f32 {
  if (sg_size == 32u) { return ${r==="+"?"subgroupAdd":r==="min"?"subgroupMin":"subgroupMax"}(v); }
  var x = v;
${o(16)}
${o(8)}
${o(4)}
${o(2)}
${o(1)}
  return x;
}
`},s=(t==="none"?"":n("+","sg32_add"))+n("min","sg32_min")+n("max","sg32_max");return e==="sg64"?{decls:s,entryArgs:"",add:r=>`sg32_add(${r})`,min:r=>`sg32_min(${r})`,max:r=>`sg32_max(${r})`}:{decls:s,entryArgs:`,
             @builtin(subgroup_size) sg_size : u32`,add:r=>`sg32_add(${r}, sg_size)`,min:r=>`sg32_min(${r}, sg_size)`,max:r=>`sg32_max(${r}, sg_size)`}}function $r({V4:e,sw:t,norm:n,writeMomFn:s,momParams:r,momArgs:i}){const o=n==="none",a=o?"vec2<f32>":"vec4<f32>",f=o?`fn sg32_pack1(a : ${e}, slane : u32, c_out : u32, ${r}) -> u32 {
  let f = vec4<f32>(a${t});
  let mn = subgroupMin(min(min(f.x, f.y), min(f.z, f.w)));
  let mx = subgroupMax(max(max(f.x, f.y), max(f.z, f.w)));
  let sp = mx - mn;
  if (slane == 0u) {
    write_mom(c_out, vec4<f32>(0.0, 0.0, mn, sp), ${i});
  }
  return pack4x8unorm((f - vec4<f32>(mn)) * select(0.0, 1.0 / sp, sp > 1e-7));
}
`:`fn sg32_pack1(a : ${e}, slane : u32, c_out : u32, ${r}) -> u32 {
  let f = vec4<f32>(a${t});
  let s = subgroupAdd(f.x + f.y + f.z + f.w);
  let q = subgroupAdd(dot(f, f));
  let mn = subgroupMin(min(min(f.x, f.y), min(f.z, f.w)));
  let mx = subgroupMax(max(max(f.x, f.y), max(f.z, f.w)));
  let sp = mx - mn;
  if (slane == 0u) {
    write_mom(c_out, vec4<f32>(s, q, mn, sp), ${i});
  }
  return pack4x8unorm((f - vec4<f32>(mn)) * select(0.0, 1.0 / sp, sp > 1e-7));
}
`,l=o?`fn sg_sub_store(a : ${e}, slot : u32, sg_id : u32) {
  let f = vec4<f32>(a${t});
  let mn = subgroupMin(min(min(f.x, f.y), min(f.z, f.w)));
  let mx = subgroupMax(max(max(f.x, f.y), max(f.z, f.w)));
  if (sg_id == 0u) { sh_sg[slot] = vec2<f32>(mn, mx); }
}
`:`fn sg_sub_store(a : ${e}, slot : u32, sg_id : u32) {
  let f = vec4<f32>(a${t});
  let s = subgroupAdd(f.x + f.y + f.z + f.w);
  let q = subgroupAdd(dot(f, f));
  let mn = subgroupMin(min(min(f.x, f.y), min(f.z, f.w)));
  let mx = subgroupMax(max(max(f.x, f.y), max(f.z, f.w)));
  if (sg_id == 0u) { sh_sg[slot] = vec4<f32>(s, q, mn, mx); }
}
`,c=o?`      let p0 = sh_sg[rb];
      let p1 = sh_sg[rb + 1u];
      var rmn = min(p0.x, p1.x);
      var rmx = max(p0.y, p1.y);
      if (sg_size == 8u) {
        let p2 = sh_sg[rb + 2u];
        let p3 = sh_sg[rb + 3u];
        rmn = min(rmn, min(p2.x, p3.x));
        rmx = max(rmx, max(p2.y, p3.y));
      }
      let sp = rmx - rmn;
      sh_res[h * 4u + slane] = vec2<f32>(rmn, select(0.0, 1.0 / sp, sp > 1e-7));
      write_mom(c_base + slane, vec4<f32>(0.0, 0.0, rmn, sp), ${i});`:`      let p0 = sh_sg[rb];
      let p1 = sh_sg[rb + 1u];
      var rs = p0.x + p1.x;
      var rq = p0.y + p1.y;
      var rmn = min(p0.z, p1.z);
      var rmx = max(p0.w, p1.w);
      if (sg_size == 8u) {
        let p2 = sh_sg[rb + 2u];
        let p3 = sh_sg[rb + 3u];
        rs += p2.x + p3.x;
        rq += p2.y + p3.y;
        rmn = min(rmn, min(p2.z, p3.z));
        rmx = max(rmx, max(p2.w, p3.w));
      }
      let sp = rmx - rmn;
      sh_res[h * 4u + slane] = vec2<f32>(rmn, select(0.0, 1.0 / sp, sp > 1e-7));
      write_mom(c_base + slane, vec4<f32>(rs, rq, rmn, sp), ${i});`;return`var<workgroup> sh_sg  : array<${a}, 128>;
var<workgroup> sh_res : array<vec2<f32>, 32>;
${s}${f}${l}fn reduce_pack4_sg(
  a0 : ${e}, a1 : ${e}, a2 : ${e}, a3 : ${e},
  h : u32, slane : u32, sg_size : u32, sg_id : u32,
  c_base : u32, ${r}
) -> vec4<u32> {
  var out_q : vec4<u32>;
  if (sg_size == 32u) {
    out_q = vec4<u32>(
      sg32_pack1(a0, slane, c_base + 0u, ${i}),
      sg32_pack1(a1, slane, c_base + 1u, ${i}),
      sg32_pack1(a2, slane, c_base + 2u, ${i}),
      sg32_pack1(a3, slane, c_base + 3u, ${i})
    );
  } else {
    let b0 = (h * 4u) * 4u + (slane / sg_size);
    sg_sub_store(a0, b0 + 0u, sg_id);
    sg_sub_store(a1, b0 + 4u, sg_id);
    sg_sub_store(a2, b0 + 8u, sg_id);
    sg_sub_store(a3, b0 + 12u, sg_id);
    workgroupBarrier();
    if (slane < 4u) {
      let rb = (h * 4u + slane) * 4u;
${c}
    }
    workgroupBarrier();
    let r0 = sh_res[h * 4u + 0u];
    let r1 = sh_res[h * 4u + 1u];
    let r2 = sh_res[h * 4u + 2u];
    let r3 = sh_res[h * 4u + 3u];
    out_q = vec4<u32>(
      pack4x8unorm((vec4<f32>(a0${t}) - vec4<f32>(r0.x)) * r0.y),
      pack4x8unorm((vec4<f32>(a1${t}) - vec4<f32>(r1.x)) * r1.y),
      pack4x8unorm((vec4<f32>(a2${t}) - vec4<f32>(r2.x)) * r2.y),
      pack4x8unorm((vec4<f32>(a3${t}) - vec4<f32>(r3.x)) * r3.y)
    );
  }
  return out_q;
}
`}function Sr(e){const{cs:t,chan:n,nclass:s,clsK4:r,dilations:i,activation:o,norm:a,hasF16:f,subgroupMode:l="none",splitHalves:c,probCfg:m,chunkableStd:d=!1}=e,u=t/4,p=c?t/2:t,g=p*mt,v=p*wt,P=9*t*3*u,_=P,h=P+u,w=f&&u%2===0&&h*8<=65536,y=wr(o),b=f?`enable f16;
`:"",k=f&&l!=="none",F=k?`enable subgroups;
`:"",$=f?"f16":"f32",B=f?"h":"f",S=`vec4<${$}>`,M=f?256:255,z=N=>{const W=N?".xzyw":"",X=(ue,Ce,ke)=>c&&Ce>=p?`y8_1[${ue} + ${(Ce-p)*wt}u] = ${ke};`:`y8_0[${ue} + ${Ce*wt}u] = ${ke};`;if(k&&(l==="sg32"||l==="sg64"||l==="sg32_64")){const ue=yr(l,a);return{decls:ue.decls,entryArgs:ue.entryArgs,localHeader:"",emit:({accVar:Ce,cStart:ke,cEnd:Ae,hrExpr:j,yRowExpr:ee,momMode:A,writeY8Expr:K="true"})=>pt(Ae-ke,D=>{const re=ke+D,oe=A==="ext_and_main"?`mom_ext[(${j}) * ${t}u + ${re}u] = mv;
      mom_main[(row_idx * 2u + sg) * ${t}u + ${re}u] = mv;`:A==="ext_only"?`mom_ext[(${j}) * ${t}u + ${re}u] = mv;`:`mom_main[(${j}) * ${t}u + ${re}u] = mv;`;return a==="none"?`  {
    let f = vec4<f32>(${Ce}.v_${D}${W});
    let lmn = ${ue.min("min(min(f.x, f.y), min(f.z, f.w))")};
    let lmx = ${ue.max("max(max(f.x, f.y), max(f.z, f.w))")};
    let sp = lmx - lmn;
    let inv = select(0.0, 1.0 / sp, sp > 1e-7);
    if (${K}) {
      ${X(ee,re,"pack4x8unorm((f - vec4<f32>(lmn)) * inv)")}
    }
    if (slane == 0u) {
      let mv = vec4<f32>(0.0, 0.0, lmn, sp);
      ${oe}
    }
  }
`:`  {
    let f = vec4<f32>(${Ce}.v_${D}${W});
    let ls = ${ue.add("f.x + f.y + f.z + f.w")};
    let lq = ${ue.add("dot(f, f)")};
    let lmn = ${ue.min("min(min(f.x, f.y), min(f.z, f.w))")};
    let lmx = ${ue.max("max(max(f.x, f.y), max(f.z, f.w))")};
    let sp = lmx - lmn;
    let inv = select(0.0, 1.0 / sp, sp > 1e-7);
    if (${K}) {
      ${X(ee,re,"pack4x8unorm((f - vec4<f32>(lmn)) * inv)")}
    }
    if (slane == 0u) {
      let mv = vec4<f32>(ls, lq, lmn, sp);
      ${oe}
    }
  }
`})}}if(k&&l==="sg_small")return{decls:$r({V4:S,sw:W,norm:a,writeMomFn:`fn write_mom(c_out : u32, mv : vec4<f32>, ext_off : u32, main_off : u32, mom_mode : u32) {
  if (mom_mode == 0u) {
    mom_main[main_off + c_out] = mv;
  } else if (mom_mode == 1u) {
    mom_ext[ext_off + c_out] = mv;
    mom_main[main_off + c_out] = mv;
  } else {
    mom_ext[ext_off + c_out] = mv;
  }
}
`,momParams:"ext_off : u32, main_off : u32, mom_mode : u32",momArgs:"ext_off, main_off, mom_mode"}),entryArgs:`,
             @builtin(subgroup_size) sg_size : u32,
             @builtin(subgroup_invocation_id) sg_id : u32`,localHeader:`  let h = lid.y * 2u + sg;
`,emit:({accVar:ke,cStart:Ae,cEnd:j,hrExpr:ee,yRowExpr:A,momMode:K,writeY8Expr:D="true"})=>{const re=K==="ext_and_main"?"1u":K==="ext_only"?"2u":"0u",oe=K==="main"?"0u":`(${ee}) * ${t}u`,J=K==="ext_only"?"0u":`(row_idx * 2u + sg) * ${t}u`;let V=`  let ep_ext_off = ${oe};
  let ep_main_off = ${J};
`;for(let Z=0;Z<j-Ae;Z+=4){const q=Ae+Z;V+=`  {
    let qw = reduce_pack4_sg(${ke}.v_${Z}, ${ke}.v_${Z+1}, ${ke}.v_${Z+2}, ${ke}.v_${Z+3}, h, slane, sg_size, sg_id, ${q}u, ep_ext_off, ep_main_off, ${re});
    if (${D}) {
      ${X(A,q,"qw.x")}
      ${X(A,q+1,"qw.y")}
      ${X(A,q+2,"qw.z")}
      ${X(A,q+3,"qw.w")}
    }
  }
`}return V}};const Q=`    let c_out = c_base + slane;
    if (mom_mode == 0u) {
      mom_main[main_off + c_out] = mv;
    } else if (mom_mode == 1u) {
      mom_ext[ext_off + c_out] = mv;
      mom_main[main_off + c_out] = mv;
    } else {
      mom_ext[ext_off + c_out] = mv;
    }`;if(a==="none"&&f){const ue=pt(31,ke=>`    {
      let m = sh_mm[rb + ${ke+1}u];
      rmn = min(rmn, m.x);
      rmx = max(rmx, m.y);
    }
`);return{decls:`var<workgroup> sh_mm  : array<vec2<f16>, 1024>;
var<workgroup> sh_res : array<vec2<f32>, 32>;
fn vec_mm16(a : vec4<f16>) -> vec2<f16> {
  return vec2<f16>(min(min(a.x, a.y), min(a.z, a.w)), max(max(a.x, a.y), max(a.z, a.w)));
}
fn reduce_pack4(
  a0 : ${S}, a1 : ${S}, a2 : ${S}, a3 : ${S},
  h : u32, slane : u32, c_base : u32, ext_off : u32, main_off : u32, mom_mode : u32
) -> vec4<u32> {
  let b0 = (h * 4u) * 32u + slane;
  sh_mm[b0]       = vec_mm16(a0);
  sh_mm[b0 + 32u] = vec_mm16(a1);
  sh_mm[b0 + 64u] = vec_mm16(a2);
  sh_mm[b0 + 96u] = vec_mm16(a3);
  workgroupBarrier();
  if (slane < 4u) {
    let rb = (h * 4u + slane) * 32u;
    let m0 = sh_mm[rb];
    var rmn : f16 = m0.x;
    var rmx : f16 = m0.y;
${ue}    let fmn = f32(rmn);
    let sp = f32(rmx) - fmn;
    sh_res[h * 4u + slane] = vec2<f32>(fmn, select(0.0, 1.0 / sp, sp > 1e-7));
    let mv = vec4<f32>(0.0, 0.0, fmn, sp);
${Q}
  }
  workgroupBarrier();
  let f0 = vec4<f32>(a0${W});
  let f1 = vec4<f32>(a1${W});
  let f2 = vec4<f32>(a2${W});
  let f3 = vec4<f32>(a3${W});
  let r0 = sh_res[h * 4u + 0u];
  let r1 = sh_res[h * 4u + 1u];
  let r2 = sh_res[h * 4u + 2u];
  let r3 = sh_res[h * 4u + 3u];
  return vec4<u32>(
    pack4x8unorm((f0 - vec4<f32>(r0.x)) * r0.y),
    pack4x8unorm((f1 - vec4<f32>(r1.x)) * r1.y),
    pack4x8unorm((f2 - vec4<f32>(r2.x)) * r2.y),
    pack4x8unorm((f3 - vec4<f32>(r3.x)) * r3.y)
  );
}
`,localHeader:`  let h = lid.y * 2u + sg;
`,emit:({accVar:ke,cStart:Ae,cEnd:j,hrExpr:ee,yRowExpr:A,momMode:K,writeY8Expr:D="true"})=>{const re=K==="ext_and_main"?"1u":K==="ext_only"?"2u":"0u",oe=K==="main"?"0u":`(${ee}) * ${t}u`,J=K==="ext_only"?"0u":`(row_idx * 2u + sg) * ${t}u`;let V=`  let ep_ext_off = ${oe};
  let ep_main_off = ${J};
`;for(let Z=0;Z<j-Ae;Z+=4){const q=Ae+Z;V+=`  {
    let qw = reduce_pack4(${ke}.v_${Z}, ${ke}.v_${Z+1}, ${ke}.v_${Z+2}, ${ke}.v_${Z+3}, h, slane, ${q}u, ep_ext_off, ep_main_off, ${re});
    if (${D}) {
      ${X(A,q,"qw.x")}
      ${X(A,q+1,"qw.y")}
      ${X(A,q+2,"qw.z")}
      ${X(A,q+3,"qw.w")}
    }
  }
`}return V}}}if(a==="none"){const ue=pt(32,ke=>`    {
      let m = sh_mm[rb + ${ke}u];
      rmn = min(rmn, m.x);
      rmx = max(rmx, m.y);
    }
`);return{decls:`var<workgroup> sh_mm  : array<vec2<f32>, 1024>;
var<workgroup> sh_res : array<vec2<f32>, 32>;
fn vec_mm(f : vec4<f32>) -> vec2<f32> {
  return vec2<f32>(min(min(f.x, f.y), min(f.z, f.w)), max(max(f.x, f.y), max(f.z, f.w)));
}
fn reduce_pack4(
  a0 : ${S}, a1 : ${S}, a2 : ${S}, a3 : ${S},
  h : u32, slane : u32, c_base : u32, ext_off : u32, main_off : u32, mom_mode : u32
) -> vec4<u32> {
  let f0 = vec4<f32>(a0${W});
  let f1 = vec4<f32>(a1${W});
  let f2 = vec4<f32>(a2${W});
  let f3 = vec4<f32>(a3${W});
  let b0 = (h * 4u) * 32u + slane;
  sh_mm[b0]       = vec_mm(f0);
  sh_mm[b0 + 32u] = vec_mm(f1);
  sh_mm[b0 + 64u] = vec_mm(f2);
  sh_mm[b0 + 96u] = vec_mm(f3);
  workgroupBarrier();
  if (slane < 4u) {
    let rb = (h * 4u + slane) * 32u;
    var rmn : f32 = 3.0e38;
    var rmx : f32 = -3.0e38;
${ue}    let sp = rmx - rmn;
    sh_res[h * 4u + slane] = vec2<f32>(rmn, select(0.0, 1.0 / sp, sp > 1e-7));
    let mv = vec4<f32>(0.0, 0.0, rmn, sp);
${Q}
  }
  workgroupBarrier();
  let r0 = sh_res[h * 4u + 0u];
  let r1 = sh_res[h * 4u + 1u];
  let r2 = sh_res[h * 4u + 2u];
  let r3 = sh_res[h * 4u + 3u];
  return vec4<u32>(
    pack4x8unorm((f0 - vec4<f32>(r0.x)) * r0.y),
    pack4x8unorm((f1 - vec4<f32>(r1.x)) * r1.y),
    pack4x8unorm((f2 - vec4<f32>(r2.x)) * r2.y),
    pack4x8unorm((f3 - vec4<f32>(r3.x)) * r3.y)
  );
}
`,localHeader:`  let h = lid.y * 2u + sg;
`,emit:({accVar:ke,cStart:Ae,cEnd:j,hrExpr:ee,yRowExpr:A,momMode:K,writeY8Expr:D="true"})=>{const re=K==="ext_and_main"?"1u":K==="ext_only"?"2u":"0u",oe=K==="main"?"0u":`(${ee}) * ${t}u`,J=K==="ext_only"?"0u":`(row_idx * 2u + sg) * ${t}u`;let V=`  let ep_ext_off = ${oe};
  let ep_main_off = ${J};
`;for(let Z=0;Z<j-Ae;Z+=4){const q=Ae+Z;V+=`  {
    let qw = reduce_pack4(${ke}.v_${Z}, ${ke}.v_${Z+1}, ${ke}.v_${Z+2}, ${ke}.v_${Z+3}, h, slane, ${q}u, ep_ext_off, ep_main_off, ${re});
    if (${D}) {
      ${X(A,q,"qw.x")}
      ${X(A,q+1,"qw.y")}
      ${X(A,q+2,"qw.z")}
      ${X(A,q+3,"qw.w")}
    }
  }
`}return V}}}if(f){const ue=pt(31,ke=>{const Ae=ke+1;return`    {
      let s = sh_sq[rb + ${Ae}u];
      let m = sh_mm[rb + ${Ae}u];
      rs += s.x;
      rq += s.y;
      rmn = min(rmn, m.x);
      rmx = max(rmx, m.y);
    }
`});return{decls:`var<workgroup> sh_sq  : array<vec2<f32>, 1024>;
var<workgroup> sh_mm  : array<vec2<f16>, 1024>;
var<workgroup> sh_res : array<vec2<f32>, 32>;
fn vec_mm16(a : vec4<f16>) -> vec2<f16> {
  return vec2<f16>(min(min(a.x, a.y), min(a.z, a.w)), max(max(a.x, a.y), max(a.z, a.w)));
}
fn reduce_pack4(
  a0 : ${S}, a1 : ${S}, a2 : ${S}, a3 : ${S},
  h : u32, slane : u32, c_base : u32, ext_off : u32, main_off : u32, mom_mode : u32
) -> vec4<u32> {
  let f0 = vec4<f32>(a0${W});
  let f1 = vec4<f32>(a1${W});
  let f2 = vec4<f32>(a2${W});
  let f3 = vec4<f32>(a3${W});
  let b0 = (h * 4u) * 32u + slane;
  sh_sq[b0]       = vec2<f32>(f0.x + f0.y + f0.z + f0.w, dot(f0, f0));
  sh_sq[b0 + 32u] = vec2<f32>(f1.x + f1.y + f1.z + f1.w, dot(f1, f1));
  sh_sq[b0 + 64u] = vec2<f32>(f2.x + f2.y + f2.z + f2.w, dot(f2, f2));
  sh_sq[b0 + 96u] = vec2<f32>(f3.x + f3.y + f3.z + f3.w, dot(f3, f3));
  sh_mm[b0]       = vec_mm16(a0);
  sh_mm[b0 + 32u] = vec_mm16(a1);
  sh_mm[b0 + 64u] = vec_mm16(a2);
  sh_mm[b0 + 96u] = vec_mm16(a3);
  workgroupBarrier();
  if (slane < 4u) {
    let rb = (h * 4u + slane) * 32u;
    let s0 = sh_sq[rb];
    let m0 = sh_mm[rb];
    var rs : f32 = s0.x;
    var rq : f32 = s0.y;
    var rmn : f16 = m0.x;
    var rmx : f16 = m0.y;
${ue}    let fmn = f32(rmn);
    let sp = f32(rmx) - fmn;
    sh_res[h * 4u + slane] = vec2<f32>(fmn, select(0.0, 1.0 / sp, sp > 1e-7));
    let mv = vec4<f32>(rs, rq, fmn, sp);
${Q}
  }
  workgroupBarrier();
  let r0 = sh_res[h * 4u + 0u];
  let r1 = sh_res[h * 4u + 1u];
  let r2 = sh_res[h * 4u + 2u];
  let r3 = sh_res[h * 4u + 3u];
  return vec4<u32>(
    pack4x8unorm((f0 - vec4<f32>(r0.x)) * r0.y),
    pack4x8unorm((f1 - vec4<f32>(r1.x)) * r1.y),
    pack4x8unorm((f2 - vec4<f32>(r2.x)) * r2.y),
    pack4x8unorm((f3 - vec4<f32>(r3.x)) * r3.y)
  );
}
`,localHeader:`  let h = lid.y * 2u + sg;
`,emit:({accVar:ke,cStart:Ae,cEnd:j,hrExpr:ee,yRowExpr:A,momMode:K,writeY8Expr:D="true"})=>{const re=K==="ext_and_main"?"1u":K==="ext_only"?"2u":"0u",oe=K==="main"?"0u":`(${ee}) * ${t}u`,J=K==="ext_only"?"0u":`(row_idx * 2u + sg) * ${t}u`;let V=`  let ep_ext_off = ${oe};
  let ep_main_off = ${J};
`;for(let Z=0;Z<j-Ae;Z+=4){const q=Ae+Z;V+=`  {
    let qw = reduce_pack4(${ke}.v_${Z}, ${ke}.v_${Z+1}, ${ke}.v_${Z+2}, ${ke}.v_${Z+3}, h, slane, ${q}u, ep_ext_off, ep_main_off, ${re});
    if (${D}) {
      ${X(A,q,"qw.x")}
      ${X(A,q+1,"qw.y")}
      ${X(A,q+2,"qw.z")}
      ${X(A,q+3,"qw.w")}
    }
  }
`}return V}}}const O=pt(32,ue=>`    {
      let s = sh_sq[rb + ${ue}u];
      let m = sh_mm[rb + ${ue}u];
      rs += s.x;
      rq += s.y;
      rmn = min(rmn, m.x);
      rmx = max(rmx, m.y);
    }
`);return{decls:`var<workgroup> sh_sq  : array<vec2<f32>, 512>;
var<workgroup> sh_mm  : array<vec2<f32>, 512>;
var<workgroup> sh_res : array<vec2<f32>, 16>;
fn vec_mm(f : vec4<f32>) -> vec2<f32> {
  return vec2<f32>(min(min(f.x, f.y), min(f.z, f.w)), max(max(f.x, f.y), max(f.z, f.w)));
}
fn reduce_pack2(
  a0 : ${S}, a1 : ${S},
  h : u32, slane : u32, c_base : u32, ext_off : u32, main_off : u32, mom_mode : u32
) -> vec2<u32> {
  let f0 = vec4<f32>(a0${W});
  let f1 = vec4<f32>(a1${W});
  let b0 = (h * 2u) * 32u + slane;
  sh_sq[b0]       = vec2<f32>(f0.x + f0.y + f0.z + f0.w, dot(f0, f0));
  sh_sq[b0 + 32u] = vec2<f32>(f1.x + f1.y + f1.z + f1.w, dot(f1, f1));
  sh_mm[b0]       = vec_mm(f0);
  sh_mm[b0 + 32u] = vec_mm(f1);
  workgroupBarrier();
  if (slane < 2u) {
    let rb = (h * 2u + slane) * 32u;
    var rs : f32 = 0.0;
    var rq : f32 = 0.0;
    var rmn : f32 = 3.0e38;
    var rmx : f32 = -3.0e38;
${O}    let sp = rmx - rmn;
    sh_res[h * 2u + slane] = vec2<f32>(rmn, select(0.0, 1.0 / sp, sp > 1e-7));
    let mv = vec4<f32>(rs, rq, rmn, sp);
${Q}
  }
  workgroupBarrier();
  let r0 = sh_res[h * 2u + 0u];
  let r1 = sh_res[h * 2u + 1u];
  return vec2<u32>(
    pack4x8unorm((f0 - vec4<f32>(r0.x)) * r0.y),
    pack4x8unorm((f1 - vec4<f32>(r1.x)) * r1.y)
  );
}
`,localHeader:`  let h = lid.y * 2u + sg;
`,emit:({accVar:ue,cStart:Ce,cEnd:ke,hrExpr:Ae,yRowExpr:j,momMode:ee,writeY8Expr:A="true"})=>{const K=ee==="ext_and_main"?"1u":ee==="ext_only"?"2u":"0u",D=ee==="main"?"0u":`(${Ae}) * ${t}u`,re=ee==="ext_only"?"0u":`(row_idx * 2u + sg) * ${t}u`;let oe=`  let ep_ext_off = ${D};
  let ep_main_off = ${re};
`;for(let J=0;J<ke-Ce;J+=2){const V=Ce+J;oe+=`  {
    let qw = reduce_pack2(${ue}.v_${J}, ${ue}.v_${J+1}, h, slane, ${V}u, ep_ext_off, ep_main_off, ${K});
    if (${A}) {
      ${X(j,V,"qw.x")}
      ${X(j,V+1,"qw.y")}
    }
  }
`}return oe}}},R=()=>`
@group(0) @binding(0) var<storage, read_write> act0 : array<u32>;
@group(0) @binding(1) var<storage, read_write> act1 : array<u32>;
@compute @workgroup_size(${mt}, 1, 1)
fn main(@builtin(local_invocation_id) lid : vec3<u32>,
        @builtin(workgroup_id) wid : vec3<u32>) {
  let row_base = (wid.z * 256u + wid.y) * ${g}u + lid.x;
  let val = ${y.uZeroWord}u;
  for (var c : u32 = 0u; c < ${p}u; c = c + 1u) {
    let idx = row_base + c * ${mt}u;
    act0[idx] = val;
    ${c?"act1[idx] = val;":""}
  }
}`,G=i[0];return{initActWgsl:R,conv0Wgsl:()=>{const N=!f&&c,W=z(!1),X=(Ae,j)=>{const ee=Ae/4,A=j/4;return pt(A-ee,K=>{const D=ee+K,re=D*4;return`          {
            let w0 = w16_4[wb + ${D}u];
            let w1 = w16_4[wb + ${u+D}u];
            let w2 = w16_4[wb + ${2*u+D}u];
            a_${re}     = fma(vn, ${S}(w0.x), fma(vc, ${S}(w1.x), fma(vp, ${S}(w2.x), a_${re})));
            a_${re+1} = fma(vn, ${S}(w0.y), fma(vc, ${S}(w1.y), fma(vp, ${S}(w2.y), a_${re+1})));
            a_${re+2} = fma(vn, ${S}(w0.z), fma(vc, ${S}(w1.z), fma(vp, ${S}(w2.z), a_${re+2})));
            a_${re+3} = fma(vn, ${S}(w0.w), fma(vc, ${S}(w1.w), fma(vp, ${S}(w2.w), a_${re+3})));
          }
`})},Q=Math.floor(G/4),O=G%4;let le="";O===0?le=`
        let vn = inp_4[base - ${Q}u];
        let vc = inp_4[base];
        let vp = inp_4[base + ${Q}u];`:Q===0&&O===1?le=`
        let vL = inp_4[base - 1u];
        let vc = inp_4[base];
        let vR = inp_4[base + 1u];
        let vn = ${S}(vL.w, vc.xyz);
        let vp = ${S}(vc.yzw, vR.x);`:O===1?le=`
        let vL = inp_4[base - ${Q+1}u];
        let vN = inp_4[base - ${Q}u];
        let vc = inp_4[base];
        let vP = inp_4[base + ${Q}u];
        let vR = inp_4[base + ${Q+1}u];
        let vn = ${S}(vL.w, vN.xyz);
        let vp = ${S}(vP.yzw, vR.x);`:O===2?le=`
        let vL = inp_4[base - ${Q+1}u];
        let vN = ${Q===0?"inp_4[base]":`inp_4[base - ${Q}u]`};
        let vc = ${Q===0?"vN":"inp_4[base]"};
        let vP = ${Q===0?"vN":`inp_4[base + ${Q}u]`};
        let vR = inp_4[base + ${Q+1}u];
        let vn = ${S}(vL.zw, vN.xy);
        let vp = ${S}(vP.zw, vR.xy);`:le=`
        let vL = inp_4[base - ${Q+1}u];
        let vN = ${Q===0?"inp_4[base]":`inp_4[base - ${Q}u]`};
        let vc = ${Q===0?"vN":"inp_4[base]"};
        let vP = ${Q===0?"vN":`inp_4[base + ${Q}u]`};
        let vR = inp_4[base + ${Q+1}u];
        let vn = ${S}(vL.yzw, vN.x);
        let vp = ${S}(vP.w, vR.xyz);`;const ue=(Ae,j,ee,A)=>{const K=A-ee,D=pt(K,J=>`  v_${J} : ${S},
`),re=pt(K,J=>{const V=ee+J;return a==="none"?`  var a_${V} = ${S}(${$}(qmeta[${3*t+V}u]));
`:`  var a_${V} = ${S}(0.0${B});
`}),oe=Array.from({length:K},(J,V)=>`a_${ee+V}`).join(", ");return`struct ${j} {
${D}};
fn ${Ae}(y : i32, z : i32, x_pad : u32) -> ${j} {
${re}  var tap_yz : u32 = 0u;
  for (var dz : i32 = -1; dz <= 1; dz = dz + 1) {
    let sz = z + dz * ${G};
    for (var dy : i32 = -1; dy <= 1; dy = dy + 1) {
      let sy = y + dy * ${G};
      if ((u32(sz) | u32(sy)) < 256u) {
        let base = (u32(sz) * 256u + u32(sy)) * ${mt}u + x_pad;
${le}
        let wb = tap_yz * ${3*u}u;
${X(ee,A)}
      }
      tap_yz = tap_yz + 1u;
    }
  }
  return ${j}(${oe});
}
`},Ce=(Ae,j,ee,A,K)=>{const D=K?`  let y = i32(p0.bg_y0 + lid.y);
  let z = i32(p0.bg_z0);`:`  var y : i32;
  var z : i32;
  if (p0.is_full != 0u) {
    y = i32(wid.y * 4u + lid.y);
    z = i32(wid.z);
  } else {
    let pk = strips0[wid.z];
    y = i32((pk & 255u) * 4u + lid.y);
    z = i32(pk >> 8u);
  }`,re=K?"lid.y * 2u + sg":"row_idx * 2u + sg";return`
@compute @workgroup_size(64, 4, 1)
fn ${Ae}(@builtin(local_invocation_id) lid : vec3<u32>,
             @builtin(workgroup_id) wid : vec3<u32>${W.entryArgs||""}) {
  let sg = lid.x >> 5u;
  let slane = lid.x & 31u;
${W.localHeader}  let x_pad = lid.x + ${Nt}u;
${D}
  let acc = ${j}(y, z, x_pad);
  let row_idx = u32(z) * 256u + u32(y);
  let y_row_base = row_idx * ${v}u + lid.x;
${W.emit({accVar:"acc",cStart:ee,cEnd:A,hrExpr:re,yRowExpr:"y_row_base",momMode:K?"ext_only":"main"})}}`},ke=N?ue("run_conv0_lo","Conv0AccLo",0,p)+ue("run_conv0_hi","Conv0AccHi",p,t)+Ce("main_lo","run_conv0_lo",0,p,!1)+Ce("main_hi","run_conv0_hi",p,t,!1)+Ce("main_bg_lo","run_conv0_lo",0,p,!0)+Ce("main_bg_hi","run_conv0_hi",p,t,!0):ue("run_conv0","Conv0Acc",0,t)+Ce("main","run_conv0",0,t,!1)+Ce("main_bg","run_conv0",0,t,!0);return`${b}${F}
struct Params0 {
  is_full : u32,
  bg_y0 : u32,
  bg_z0 : u32,
  pad0 : u32,
};
@group(0) @binding(0) var<storage, read> inp_4 : array<${S}>;
@group(0) @binding(1) var<storage, read_write> y8_0 : array<u32>;
@group(0) @binding(2) var<storage, read_write> y8_1 : array<u32>;
@group(0) @binding(3) var<storage, read> w16_4 : array<${S}>;
@group(0) @binding(4) var<storage, read> qmeta : array<f32>;
@group(0) @binding(5) var<storage, read_write> mom_main : array<vec4<f32>>;
@group(0) @binding(6) var<storage, read_write> mom_ext : array<vec4<f32>>;
@group(0) @binding(7) var<storage, read> strips0 : array<u32>;
@group(0) @binding(8) var<uniform> p0 : Params0;
${W.decls}${ke}`},prepWgsl:()=>`${b}
${kn(o)}
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
@group(0) @binding(0) var<storage, read> w16_4 : array<${S}>;
@group(0) @binding(1) var<storage, read> qmeta : array<f32>;
@group(0) @binding(2) var<storage, read_write> mom_main : array<vec4<f32>>;
@group(0) @binding(3) var<storage, read_write> mom_ext : array<vec4<f32>>;
@group(0) @binding(4) var<storage, read_write> mom_stats : array<vec4<f32>>;
@group(0) @binding(5) var<storage, read_write> w_eff : array<${S}>;
@group(0) @binding(6) var<storage, read> main_strips : array<u32>;
@group(0) @binding(7) var<uniform> pp : PrepParams;

${a==="gn"?`var<workgroup> fin_s  : array<f32, 256>;
var<workgroup> fin_q  : array<f32, 256>;
var<workgroup> fin_es : array<f32, 256>;
var<workgroup> fin_eq : array<f32, 256>;
`:""}var<workgroup> fin_mn : array<f32, 256>;
var<workgroup> fin_mx : array<f32, 256>;

@compute @workgroup_size(256, 1, 1)
fn moments_finish(@builtin(local_invocation_index) lid : u32,
                  @builtin(workgroup_id) wid : vec3<u32>) {
  let c = wid.x;
${a==="gn"?`  var s : f32 = 0.0;
  var q : f32 = 0.0;
  var es : f32 = 0.0;
  var eq : f32 = 0.0;
`:""}  var mn : f32 = 3.0e38;
  var mx : f32 = -3.0e38;
  if (pp.is_full != 0u) {
    for (var hr : u32 = lid; hr < ${Fn}u; hr = hr + 256u) {
      let v = mom_main[hr * ${t}u + c];
${a==="gn"?`      s  += v.x;
      q  += v.y;
`:""}      mn  = min(mn, v.z);
      mx  = max(mx, v.z + v.w);
    }
  } else {
    for (var si : u32 = lid; si < pp.n_main_strips; si = si + 256u) {
      let pk = main_strips[si];
      let base_hr = ((pk >> 8u) * 256u + (pk & 255u) * 4u) * 2u;
      for (var h : u32 = 0u; h < 8u; h = h + 1u) {
        let v = mom_main[(base_hr + h) * ${t}u + c];
${a==="gn"?`        s  += v.x;
        q  += v.y;
`:""}        mn  = min(mn, v.z);
        mx  = max(mx, v.z + v.w);
      }
    }
    if (pp.is_first != 0u) {
      mn = min(mn, 0.0);
      mx = max(mx, 0.0);
    } else if (pp.n_ext_hr > 0u) {
      for (var e : u32 = lid; e < pp.n_ext_hr; e = e + 256u) {
        let v = mom_ext[e * ${t}u + c];
${a==="gn"?`        es += v.x;
        eq += v.y;
`:""}        mn  = min(mn, v.z);
        mx  = max(mx, v.z + v.w);
      }
    }
  }
${a==="gn"?`  fin_s[lid]  = s;
  fin_q[lid]  = q;
  fin_es[lid] = es;
  fin_eq[lid] = eq;
`:""}  fin_mn[lid] = mn;
  fin_mx[lid] = mx;
  workgroupBarrier();
  for (var stride : u32 = 128u; stride > 0u; stride = stride >> 1u) {
    if (lid < stride) {
${a==="gn"?`      fin_s[lid]  += fin_s[lid + stride];
      fin_q[lid]  += fin_q[lid + stride];
      fin_es[lid] += fin_es[lid + stride];
      fin_eq[lid] += fin_eq[lid + stride];
`:""}      fin_mn[lid]  = min(fin_mn[lid], fin_mn[lid + stride]);
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
${a==="gn"?`    let total_s = fin_s[0] + pp.ext_weight * fin_es[0];
    let total_q = fin_q[0] + pp.ext_weight * fin_eq[0];
    let mean = total_s / 16777216.0;
    let varr = max(total_q / 16777216.0 - mean * mean, 0.0);
    let inv_std = inverseSqrt(varr + eff_eps);
`:`    let mean : f32 = 0.0;
    let inv_std : f32 = 1.0;
`}    let scale = inv_std * gamma;
    let shift = beta - mean * scale;
    let u_lo = fin_mn[0] * scale + shift;
    let u_hi = fin_mx[0] * scale + shift;
    let vmax = max(0.25, max(act(u_lo), act(u_hi)));
    ${o==="gelu_tanh"?`
    let qs = select(max(vmax / 248.0, 0.1705 / 7.0), 1.0, c >= ${n}u);
    `:o==="relu"?`
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
    q_ref = max(q_ref, ${M.toFixed(1)} * qs);
  }
  ${a==="none"?"q_ref = 1.0;":""}
  if (lid == 0u) {
    mom_stats[${t*2}u] = vec4<f32>(q_ref, 0.0, 0.0, 0.0);
  }
  let scale_num = ${M.toFixed(1)} / q_ref;
  for (var idx : u32 = lid; idx < ${P}u; idx = idx + 256u) {
    let ic = (idx / ${3*u}u) % ${t}u;
    let qs = mom_stats[ic * 2u].z;
    w_eff[idx] = w16_4[pp.next_w_vec4_off + idx] * ${$}(qs * scale_num);
  }
  if (lid < ${u}u) {
    ${a==="none"?`
    let mb = pp.next_meta_off + ${3*t}u + lid * 4u;
    w_eff[${_}u + lid] = ${S}(${$}(qmeta[mb]), ${$}(qmeta[mb + 1u]), ${$}(qmeta[mb + 2u]), ${$}(qmeta[mb + 3u]));
    `:`
    w_eff[${_}u + lid] = ${S}(0.0${B});
    `}
  }
}`,normWgsl:()=>`${kn(o)}
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
  let x_pad = x4 + ${Nt}u;
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
  let a_base = row_idx * ${g}u + x_pad;
  let mom_base = hr * ${t}u;

  for (var c : u32 = 0u; c < ${p}u; c = c + 1u) {
    let inv_qs = mom_stats[c * 2u].w;
    let st = mom_stats[c * 2u + 1u];
    let rm = mom_main[mom_base + c];
    let yv = unpack4x8unorm(y8_0[y_base + c * ${wt}u]) * rm.w + vec4<f32>(rm.z);
    let a = vec4<f32>(
      act(yv.x * st.x + st.y),
      act(yv.y * st.x + st.y),
      act(yv.z * st.x + st.y),
      act(yv.w * st.x + st.y)
    );
    act8_0[a_base + c * ${mt}u] = pack4x8unorm((a * inv_qs + vec4<f32>(${y.zeroBin.toFixed(1)})) * (1.0 / 255.0));
  }
  ${c?`
  for (var c : u32 = 0u; c < ${p}u; c = c + 1u) {
    let cg = ${p}u + c;
    let inv_qs = mom_stats[cg * 2u].w;
    let st = mom_stats[cg * 2u + 1u];
    let rm = mom_main[mom_base + cg];
    let yv = unpack4x8unorm(y8_1[y_base + c * ${wt}u]) * rm.w + vec4<f32>(rm.z);
    let a = vec4<f32>(
      act(yv.x * st.x + st.y),
      act(yv.y * st.x + st.y),
      act(yv.z * st.x + st.y),
      act(yv.w * st.x + st.y)
    );
    act8_1[a_base + c * ${mt}u] = pack4x8unorm((a * inv_qs + vec4<f32>(${y.zeroBin.toFixed(1)})) * (1.0 / 255.0));
  }`:""}
}

@compute @workgroup_size(64, 4, 1)
fn norm_halo_fill(@builtin(local_invocation_id) lid : vec3<u32>,
                  @builtin(workgroup_id) wid : vec3<u32>) {
  let idx = wid.y * 4u + lid.y;
  if (idx >= np.n_halo) { return; }
  let x4 = lid.x;
  let sg = x4 >> 5u;
  let x_pad = x4 + ${Nt}u;
  let y_base = np.bg_row * ${v}u + x4;
  let mom_base = sg * ${t}u;
  let dst_row = norm_aux[np.halo_off + idx];
  let a_base = dst_row * ${g}u + x_pad;

  for (var c : u32 = 0u; c < ${p}u; c = c + 1u) {
    let inv_qs = mom_stats[c * 2u].w;
    let st = mom_stats[c * 2u + 1u];
    let rm = mom_ext[mom_base + c];
    let yv = unpack4x8unorm(y8_0[y_base + c * ${wt}u]) * rm.w + vec4<f32>(rm.z);
    let a = vec4<f32>(
      act(yv.x * st.x + st.y),
      act(yv.y * st.x + st.y),
      act(yv.z * st.x + st.y),
      act(yv.w * st.x + st.y)
    );
    act8_0[a_base + c * ${mt}u] = pack4x8unorm((a * inv_qs + vec4<f32>(${y.zeroBin.toFixed(1)})) * (1.0 / 255.0));
  }
  ${c?`
  for (var c : u32 = 0u; c < ${p}u; c = c + 1u) {
    let cg = ${p}u + c;
    let inv_qs = mom_stats[cg * 2u].w;
    let st = mom_stats[cg * 2u + 1u];
    let rm = mom_ext[mom_base + cg];
    let yv = unpack4x8unorm(y8_1[y_base + c * ${wt}u]) * rm.w + vec4<f32>(rm.z);
    let a = vec4<f32>(
      act(yv.x * st.x + st.y),
      act(yv.y * st.x + st.y),
      act(yv.z * st.x + st.y),
      act(yv.w * st.x + st.y)
    );
    act8_1[a_base + c * ${mt}u] = pack4x8unorm((a * inv_qs + vec4<f32>(${y.zeroBin.toFixed(1)})) * (1.0 / 255.0));
  }`:""}
}`,convWgsl:()=>{const N=!f&&c,W=z(f),X=(j,ee)=>f?`
          let ${j} = vec4<f16>(vec2<f16>(unpack2x16float(((${ee} & 0x00FF00FFu) << 2u) | 0x3C003C00u)), vec2<f16>(unpack2x16float(((${ee} >> 6u) & 0x03FC03FCu) | 0x3C003C00u))) - vec4<f16>(${y.sterbenzSub});`:`
          let ${j} = unpack4x8unorm(${ee}) - vec4<f32>(${y.uZeroFloat});`,Q=j=>`
          let uL = ${j}[base - off0];
          let uN = ${j}[base - off1];
          let uC = ${j}[base];
          let uP = ${j}[base + off1];
          let uR = ${j}[base + off0];
          let u_neg = (uL >> sh_l) | (uN << sh_r);
          let u_pos = (uP >> sh_r) | (uR << sh_l);`+X("vn","u_neg")+X("vc","uC")+X("vp","u_pos"),O=(j,ee)=>{const A=j/4,K=ee/4;if(w){const D=u/2,re=u;let oe="";for(let J=A;J<K;J+=2){const V=J*4,Z=J/2;oe+=`          {
            let wp0 = w_eff_u[wbu + ${Z}u];
            let wp1 = w_eff_u[wbu + ${D+Z}u];
            let wp2 = w_eff_u[wbu + ${re+Z}u];
            let w0a = u4_lo(wp0);
            let w0b = u4_hi(wp0);
            let w1a = u4_lo(wp1);
            let w1b = u4_hi(wp1);
            let w2a = u4_lo(wp2);
            let w2b = u4_hi(wp2);
            a_${V}     = fma(vn, vec4<f16>(w0a.x), fma(vc, vec4<f16>(w1a.x), fma(vp, vec4<f16>(w2a.x), a_${V})));
            a_${V+1} = fma(vn, vec4<f16>(w0a.y), fma(vc, vec4<f16>(w1a.y), fma(vp, vec4<f16>(w2a.y), a_${V+1})));
            a_${V+2} = fma(vn, vec4<f16>(w0a.z), fma(vc, vec4<f16>(w1a.z), fma(vp, vec4<f16>(w2a.z), a_${V+2})));
            a_${V+3} = fma(vn, vec4<f16>(w0a.w), fma(vc, vec4<f16>(w1a.w), fma(vp, vec4<f16>(w2a.w), a_${V+3})));
            a_${V+4} = fma(vn, vec4<f16>(w0b.x), fma(vc, vec4<f16>(w1b.x), fma(vp, vec4<f16>(w2b.x), a_${V+4})));
            a_${V+5} = fma(vn, vec4<f16>(w0b.y), fma(vc, vec4<f16>(w1b.y), fma(vp, vec4<f16>(w2b.y), a_${V+5})));
            a_${V+6} = fma(vn, vec4<f16>(w0b.z), fma(vc, vec4<f16>(w1b.z), fma(vp, vec4<f16>(w2b.z), a_${V+6})));
            a_${V+7} = fma(vn, vec4<f16>(w0b.w), fma(vc, vec4<f16>(w1b.w), fma(vp, vec4<f16>(w2b.w), a_${V+7})));
          }
`}return oe}return pt(K-A,D=>{const re=A+D,oe=re*4;return`          {
            let w0 = w_eff[wb + ${re}u];
            let w1 = w_eff[wb + ${u+re}u];
            let w2 = w_eff[wb + ${2*u+re}u];
            a_${oe}     = fma(vn, ${S}(w0.x), fma(vc, ${S}(w1.x), fma(vp, ${S}(w2.x), a_${oe})));
            a_${oe+1} = fma(vn, ${S}(w0.y), fma(vc, ${S}(w1.y), fma(vp, ${S}(w2.y), a_${oe+1})));
            a_${oe+2} = fma(vn, ${S}(w0.z), fma(vc, ${S}(w1.z), fma(vp, ${S}(w2.z), a_${oe+2})));
            a_${oe+3} = fma(vn, ${S}(w0.w), fma(vc, ${S}(w1.w), fma(vp, ${S}(w2.w), a_${oe+3})));
          }
`})},le=(j,ee,A,K)=>{const D=K-A,re=pt(D,he=>`  v_${he} : ${S},
`),oe=pt(D,he=>{const se=A+he;if(a==="none"){const Ue=se>>>2,Be=["x","y","z","w"][se&3];if(w){const Ge=_+Ue>>>1,Ie=_+Ue&1?"u4_hi":"u4_lo";return`  var a_${se} = ${S}(${Ie}(w_eff_u[${Ge}u]).${Be});
`}return`  var a_${se} = ${S}(w_eff[${_+Ue}u].${Be});
`}return`  var a_${se} = ${S}(0.0${B});
`}),J=p<=8?`(${p}u + cp.pad0)`:`${p}u`,V=w?`        let wbu_tap = tap_yz * ${t*3*u/2}u;
        for (var ic : u32 = 0u; ic < ${J}; ic = ic + 1u) {
          let base = row_off + ic * ${mt}u;
${Q("act8_0")}
          let wbu = wbu_tap + ic * ${3*u/2}u;
${O(A,K)}
        }`:`        let wb_tap = tap_yz * ${t*3*u}u;
        for (var ic : u32 = 0u; ic < ${J}; ic = ic + 1u) {
          let base = row_off + ic * ${mt}u;
${Q("act8_0")}
          let wb = wb_tap + ic * ${3*u}u;
${O(A,K)}
        }`,Z=w?`        for (var ic : u32 = 0u; ic < ${J}; ic = ic + 1u) {
          let base = row_off + ic * ${mt}u;
${Q("act8_1")}
          let wbu = wbu_tap + (${p}u + ic) * ${3*u/2}u;
${O(A,K)}
        }`:`        for (var ic : u32 = 0u; ic < ${J}; ic = ic + 1u) {
          let base = row_off + ic * ${mt}u;
${Q("act8_1")}
          let wb = wb_tap + (${p}u + ic) * ${3*u}u;
${O(A,K)}
        }`,q=Array.from({length:D},(he,se)=>`a_${A+se}`).join(", ");return`struct ${ee} {
${re}};
fn ${j}(y : i32, z : i32, x_pad : u32, dp : u32) -> ${ee} {
${oe}  let d_step = i32(dp & 63u);
  let off0 = (dp >> 6u) & 15u;
  let off1 = (dp >> 10u) & 15u;
  let sh_r = (dp >> 14u) & 31u;
  let sh_l = (dp >> 19u) & 31u;
  var tap_yz : u32 = 0u;
  for (var dz : i32 = -1; dz <= 1; dz = dz + 1) {
    let sz = z + dz * d_step;
    for (var dy : i32 = -1; dy <= 1; dy = dy + 1) {
      let sy = y + dy * d_step;
      if ((u32(sz) | u32(sy)) < 256u) {
        let row_off = (u32(sz) * 256u + u32(sy)) * ${g}u + x_pad;
${V}
        ${c?Z:""}
      }
      tap_yz = tap_yz + 1u;
    }
  }
  return ${ee}(${q});
}
`},ue=(j,ee,A,K,D)=>{const re=D?d?`
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
  }`,oe=D?d?"ext_i * 8u + lid.y * 2u + sg":"wid.z * 8u + lid.y * 2u + sg":"row_idx * 2u + sg",J=D?"(((dp >> 24u) & 1u) != 0u)":"true";return`
@compute @workgroup_size(64, 4, 1)
fn ${j}(@builtin(local_invocation_id) lid : vec3<u32>,
             @builtin(workgroup_id) wid : vec3<u32>${W.entryArgs||""}) {
  let x4 = lid.x;
  let sg = x4 >> 5u;
  let slane = x4 & 31u;
${W.localHeader}  let x_pad = x4 + ${Nt}u;
${re}
  let dp = cp.d_pack;
  let acc = ${ee}(y, z, x_pad, dp);
  let row_idx = u32(z) * 256u + u32(y);
  let y_row_base = row_idx * ${v}u + x4;
${W.emit({accVar:"acc",cStart:A,cEnd:K,hrExpr:oe,yRowExpr:"y_row_base",momMode:D?"ext_and_main":"main",writeY8Expr:J})}}`},Ce=N?le("run_conv_lo","ConvAccLo",0,p)+le("run_conv_hi","ConvAccHi",p,t)+ue("main_lo","run_conv_lo",0,p,!1)+ue("main_hi","run_conv_hi",p,t,!1)+ue("main_ext_lo","run_conv_lo",0,p,!0)+ue("main_ext_hi","run_conv_hi",p,t,!0):le("run_conv","ConvAcc",0,t)+ue("main","run_conv",0,t,!1)+ue("main_ext","run_conv",0,t,!0),ke=w?`fn u4_lo(u : vec4<u32>) -> vec4<f16> {
  return vec4<f16>(vec2<f16>(unpack2x16float(u.x)), vec2<f16>(unpack2x16float(u.y)));
}
fn u4_hi(u : vec4<u32>) -> vec4<f16> {
  return vec4<f16>(vec2<f16>(unpack2x16float(u.z)), vec2<f16>(unpack2x16float(u.w)));
}
@group(0) @binding(6) var<uniform> w_eff_u : array<vec4<u32>, ${Math.ceil(h/2)}>;`:`@group(0) @binding(6) var<storage, read> w_eff : array<${S}>;`;return`${b}${F}
${d?`struct ConvParams {
  is_full : u32,
  ext_off : u32,
  d_pack : u32,
  pad0 : u32,
  main_off : u32,
  ext_base : u32,
  pad1 : u32,
  pad2 : u32,
};`:`struct ConvParams {
  is_full : u32,
  ext_off : u32,
  d_pack : u32,
  pad0 : u32,
};`}
@group(0) @binding(0) var<storage, read> act8_0 : array<u32>;
@group(0) @binding(1) var<storage, read> act8_1 : array<u32>;
@group(0) @binding(2) var<storage, read_write> y8_0 : array<u32>;
@group(0) @binding(3) var<storage, read_write> y8_1 : array<u32>;
@group(0) @binding(4) var<storage, read_write> mom_main : array<vec4<f32>>;
@group(0) @binding(5) var<storage, read_write> mom_ext : array<vec4<f32>>;
${ke}
@group(0) @binding(7) var<storage, read> strips : array<u32>;
@group(0) @binding(8) var<uniform> cp : ConvParams;
${W.decls}${Ce}`},clsWgsl:()=>`${b}
${kn(o)}
struct ClsParams {
  w_vec4_off : u32,
  bias_off : u32,
  is_full : u32,
  pad0 : u32,
};
@group(0) @binding(0) var<storage, read> y8_0 : array<u32>;
@group(0) @binding(1) var<storage, read> y8_1 : array<u32>;
@group(0) @binding(2) var<storage, read> w16_4 : array<${S}>;
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

  var feat : array<${S}, ${n}>;
  for (var c : u32 = 0u; c < ${n}u; c = c + 1u) {
    let st = mom_stats[c * 2u + 1u];
    let rm = mom_main[mom_base + c];
    ${c?`
    let in_hi = c >= ${p}u;
    let c_loc = select(c, c - ${p}u, in_hi);
    let idx4 = y_base + c_loc * ${wt}u;
    let q_word = select(y8_0[idx4], y8_1[idx4], in_hi);
    `:`
    let q_word = y8_0[y_base + c * ${wt}u];
    `}
    let yv = unpack4x8unorm(q_word) * rm.w + vec4<f32>(rm.z);
    let fv = vec4<f32>(
      act(yv.x * st.x + st.y),
      act(yv.y * st.x + st.y),
      act(yv.z * st.x + st.y),
      act(yv.w * st.x + st.y)
    );
    feat[c] = ${S}(fv);
  }

  let w_cls = cp.w_vec4_off;
  let m_cls = cp.bias_off;
${vr({chan:n,clsK4:r,nclass:s,V4:S,suf:B,readBiasStmt:"",biasExpr:N=>`qmeta[m_cls + k_base + ${N}u]`,probCfg:m})}
}`,totalWEffVec4s:h,useUniformWeff:w,csHalf:p,chunkableStd:d,halfPass0:!f&&c,halfPassConv:!f&&c}}function kr(e){const{cs:t,chan:n,nclass:s,clsK4:r,dilations:i,activation:o,norm:a,hasF16:f,subgroupMode:l="none",numConvs:c,probCfg:m}=e,d=t/4,u=t/2,p=t/4,g=d*mt,v=16384,P=t*wt,h=t*2+4,w=h+Fn*t,y=4*t,b=(c*y+r*4)/4,k=9*t*3*p,F=k,$=k+p,B=f&&p%2===0&&$*8<=65536,S=wr(o),M=f?`enable f16;
`:"",z=f&&l!=="none",R=z?`enable subgroups;
`:"",G=f?"f16":"f32",T=f?"h":"f",C=`vec4<${G}>`,I=f?256:255,ie=j=>{const ee=j?".xzyw":"",A=(oe,J,V)=>{if(oe==="stage_bg")return`stage[s_bg_base + ${J*wt}u] = ${V};`;if(oe==="stage")return`stage[s_row_base + ${J*wt}u] = ${V};`;const Z=Math.floor(J/d),q=J%d;return`if (use_act) { act8_${Z}[a_row_base + ${q*mt}u] = ${V}; } else { stage[s_row_base + ${J*wt}u] = ${V}; }`};if(z&&(l==="sg32"||l==="sg64"||l==="sg32_64")){const oe=yr(l,a);return{decls:oe.decls,entryArgs:oe.entryArgs,localHeader:"",emit:({accVar:J,cStart:V,cEnd:Z,hrExpr:q,storeMode:he,momOffExpr:se,alsoWriteMomMain:Ue=!1,writeY8Expr:Be="true"})=>pt(Z-V,Ge=>{const Ie=V+Ge;return a==="none"?`  {
    let f = vec4<f32>(${J}.v_${Ge}${ee});
    let lmn = ${oe.min("min(min(f.x, f.y), min(f.z, f.w))")};
    let lmx = ${oe.max("max(max(f.x, f.y), max(f.z, f.w))")};
    let sp = lmx - lmn;
    let inv = select(0.0, 1.0 / sp, sp > 1e-7);
    if (${Be}) {
      ${A(he,Ie,"pack4x8unorm((f - vec4<f32>(lmn)) * inv)")}
    }
    if (slane == 0u) {
      let mv = vec4<f32>(0.0, 0.0, lmn, sp);
      mom[${se} + (${q}) * ${t}u + ${Ie}u] = mv;
      ${Ue?`mom[${h}u + (row_idx * 2u + sg) * ${t}u + ${Ie}u] = mv;`:""}
    }
  }
`:`  {
    let f = vec4<f32>(${J}.v_${Ge}${ee});
    let ls = ${oe.add("f.x + f.y + f.z + f.w")};
    let lq = ${oe.add("dot(f, f)")};
    let lmn = ${oe.min("min(min(f.x, f.y), min(f.z, f.w))")};
    let lmx = ${oe.max("max(max(f.x, f.y), max(f.z, f.w))")};
    let sp = lmx - lmn;
    let inv = select(0.0, 1.0 / sp, sp > 1e-7);
    if (${Be}) {
      ${A(he,Ie,"pack4x8unorm((f - vec4<f32>(lmn)) * inv)")}
    }
    if (slane == 0u) {
      let mv = vec4<f32>(ls, lq, lmn, sp);
      mom[${se} + (${q}) * ${t}u + ${Ie}u] = mv;
      ${Ue?`mom[${h}u + (row_idx * 2u + sg) * ${t}u + ${Ie}u] = mv;`:""}
    }
  }
`})}}if(z&&l==="sg_small")return{decls:$r({V4:C,sw:ee,norm:a,writeMomFn:`fn write_mom(c_out : u32, mv : vec4<f32>, mom_off : u32, main_off : u32, also_main : bool) {
  mom[mom_off + c_out] = mv;
  if (also_main) {
    mom[main_off + c_out] = mv;
  }
}
`,momParams:"mom_off : u32, main_off : u32, also_main : bool",momArgs:"mom_off, main_off, also_main"}),entryArgs:`,
             @builtin(subgroup_size) sg_size : u32,
             @builtin(subgroup_invocation_id) sg_id : u32`,localHeader:`  let h = lid.y * 2u + sg;
`,emit:({accVar:V,cStart:Z,cEnd:q,hrExpr:he,storeMode:se,momOffExpr:Ue,alsoWriteMomMain:Be=!1,writeY8Expr:Ge="true"})=>{const Ie=`${Ue} + (${he}) * ${t}u`,tt=Be?`${h}u + (row_idx * 2u + sg) * ${t}u`:"0u";let De=`  let ep_mom_off = ${Ie};
  let ep_main_off = ${tt};
`;for(let Ee=0;Ee<q-Z;Ee+=4){const $e=Z+Ee;De+=`  {
    let qw = reduce_pack4_sg(${V}.v_${Ee}, ${V}.v_${Ee+1}, ${V}.v_${Ee+2}, ${V}.v_${Ee+3}, h, slane, sg_size, sg_id, ${$e}u, ep_mom_off, ep_main_off, ${Be});
    if (${Ge}) {
      ${A(se,$e,"qw.x")}
      ${A(se,$e+1,"qw.y")}
      ${A(se,$e+2,"qw.z")}
      ${A(se,$e+3,"qw.w")}
    }
  }
`}return De}};const K=`    let c_out = c_base + slane;
    mom[mom_off + c_out] = mv;
    if (also_main) {
      mom[main_off + c_out] = mv;
    }`;if(a==="none"&&f){const oe=pt(31,V=>`    {
      let m = sh_mm[rb + ${V+1}u];
      rmn = min(rmn, m.x);
      rmx = max(rmx, m.y);
    }
`);return{decls:`var<workgroup> sh_mm  : array<vec2<f16>, 1024>;
var<workgroup> sh_res : array<vec2<f32>, 32>;
fn vec_mm16(a : vec4<f16>) -> vec2<f16> {
  return vec2<f16>(min(min(a.x, a.y), min(a.z, a.w)), max(max(a.x, a.y), max(a.z, a.w)));
}
fn reduce_pack4(
  a0 : ${C}, a1 : ${C}, a2 : ${C}, a3 : ${C},
  h : u32, slane : u32, c_base : u32, mom_off : u32, main_off : u32, also_main : bool
) -> vec4<u32> {
  let b0 = (h * 4u) * 32u + slane;
  sh_mm[b0]       = vec_mm16(a0);
  sh_mm[b0 + 32u] = vec_mm16(a1);
  sh_mm[b0 + 64u] = vec_mm16(a2);
  sh_mm[b0 + 96u] = vec_mm16(a3);
  workgroupBarrier();
  if (slane < 4u) {
    let rb = (h * 4u + slane) * 32u;
    let m0 = sh_mm[rb];
    var rmn : f16 = m0.x;
    var rmx : f16 = m0.y;
${oe}    let fmn = f32(rmn);
    let sp = f32(rmx) - fmn;
    sh_res[h * 4u + slane] = vec2<f32>(fmn, select(0.0, 1.0 / sp, sp > 1e-7));
    let mv = vec4<f32>(0.0, 0.0, fmn, sp);
${K}
  }
  workgroupBarrier();
  let f0 = vec4<f32>(a0${ee});
  let f1 = vec4<f32>(a1${ee});
  let f2 = vec4<f32>(a2${ee});
  let f3 = vec4<f32>(a3${ee});
  let r0 = sh_res[h * 4u + 0u];
  let r1 = sh_res[h * 4u + 1u];
  let r2 = sh_res[h * 4u + 2u];
  let r3 = sh_res[h * 4u + 3u];
  return vec4<u32>(
    pack4x8unorm((f0 - vec4<f32>(r0.x)) * r0.y),
    pack4x8unorm((f1 - vec4<f32>(r1.x)) * r1.y),
    pack4x8unorm((f2 - vec4<f32>(r2.x)) * r2.y),
    pack4x8unorm((f3 - vec4<f32>(r3.x)) * r3.y)
  );
}
`,localHeader:`  let h = lid.y * 2u + sg;
`,emit:({accVar:V,cStart:Z,cEnd:q,hrExpr:he,storeMode:se,momOffExpr:Ue,alsoWriteMomMain:Be=!1,writeY8Expr:Ge="true"})=>{const Ie=`${Ue} + (${he}) * ${t}u`,tt=Be?`${h}u + (row_idx * 2u + sg) * ${t}u`:"0u";let De=`  let ep_mom_off = ${Ie};
  let ep_main_off = ${tt};
`;for(let Ee=0;Ee<q-Z;Ee+=4){const $e=Z+Ee;De+=`  {
    let qw = reduce_pack4(${V}.v_${Ee}, ${V}.v_${Ee+1}, ${V}.v_${Ee+2}, ${V}.v_${Ee+3}, h, slane, ${$e}u, ep_mom_off, ep_main_off, ${Be});
    if (${Ge}) {
      ${A(se,$e,"qw.x")}
      ${A(se,$e+1,"qw.y")}
      ${A(se,$e+2,"qw.z")}
      ${A(se,$e+3,"qw.w")}
    }
  }
`}return De}}}if(a==="none"){const oe=pt(32,V=>`    {
      let m = sh_mm[rb + ${V}u];
      rmn = min(rmn, m.x);
      rmx = max(rmx, m.y);
    }
`);return{decls:`var<workgroup> sh_mm  : array<vec2<f32>, 1024>;
var<workgroup> sh_res : array<vec2<f32>, 32>;
fn vec_mm(f : vec4<f32>) -> vec2<f32> {
  return vec2<f32>(min(min(f.x, f.y), min(f.z, f.w)), max(max(f.x, f.y), max(f.z, f.w)));
}
fn reduce_pack4(
  a0 : ${C}, a1 : ${C}, a2 : ${C}, a3 : ${C},
  h : u32, slane : u32, c_base : u32, mom_off : u32, main_off : u32, also_main : bool
) -> vec4<u32> {
  let f0 = vec4<f32>(a0${ee});
  let f1 = vec4<f32>(a1${ee});
  let f2 = vec4<f32>(a2${ee});
  let f3 = vec4<f32>(a3${ee});
  let b0 = (h * 4u) * 32u + slane;
  sh_mm[b0]       = vec_mm(f0);
  sh_mm[b0 + 32u] = vec_mm(f1);
  sh_mm[b0 + 64u] = vec_mm(f2);
  sh_mm[b0 + 96u] = vec_mm(f3);
  workgroupBarrier();
  if (slane < 4u) {
    let rb = (h * 4u + slane) * 32u;
    var rmn : f32 = 3.0e38;
    var rmx : f32 = -3.0e38;
${oe}    let sp = rmx - rmn;
    sh_res[h * 4u + slane] = vec2<f32>(rmn, select(0.0, 1.0 / sp, sp > 1e-7));
    let mv = vec4<f32>(0.0, 0.0, rmn, sp);
${K}
  }
  workgroupBarrier();
  let r0 = sh_res[h * 4u + 0u];
  let r1 = sh_res[h * 4u + 1u];
  let r2 = sh_res[h * 4u + 2u];
  let r3 = sh_res[h * 4u + 3u];
  return vec4<u32>(
    pack4x8unorm((f0 - vec4<f32>(r0.x)) * r0.y),
    pack4x8unorm((f1 - vec4<f32>(r1.x)) * r1.y),
    pack4x8unorm((f2 - vec4<f32>(r2.x)) * r2.y),
    pack4x8unorm((f3 - vec4<f32>(r3.x)) * r3.y)
  );
}
`,localHeader:`  let h = lid.y * 2u + sg;
`,emit:({accVar:V,cStart:Z,cEnd:q,hrExpr:he,storeMode:se,momOffExpr:Ue,alsoWriteMomMain:Be=!1,writeY8Expr:Ge="true"})=>{const Ie=`${Ue} + (${he}) * ${t}u`,tt=Be?`${h}u + (row_idx * 2u + sg) * ${t}u`:"0u";let De=`  let ep_mom_off = ${Ie};
  let ep_main_off = ${tt};
`;for(let Ee=0;Ee<q-Z;Ee+=4){const $e=Z+Ee;De+=`  {
    let qw = reduce_pack4(${V}.v_${Ee}, ${V}.v_${Ee+1}, ${V}.v_${Ee+2}, ${V}.v_${Ee+3}, h, slane, ${$e}u, ep_mom_off, ep_main_off, ${Be});
    if (${Ge}) {
      ${A(se,$e,"qw.x")}
      ${A(se,$e+1,"qw.y")}
      ${A(se,$e+2,"qw.z")}
      ${A(se,$e+3,"qw.w")}
    }
  }
`}return De}}}if(f){const oe=pt(31,V=>{const Z=V+1;return`    {
      let s = sh_sq[rb + ${Z}u];
      let m = sh_mm[rb + ${Z}u];
      rs += s.x;
      rq += s.y;
      rmn = min(rmn, m.x);
      rmx = max(rmx, m.y);
    }
`});return{decls:`var<workgroup> sh_sq  : array<vec2<f32>, 1024>;
var<workgroup> sh_mm  : array<vec2<f16>, 1024>;
var<workgroup> sh_res : array<vec2<f32>, 32>;
fn vec_mm16(a : vec4<f16>) -> vec2<f16> {
  return vec2<f16>(min(min(a.x, a.y), min(a.z, a.w)), max(max(a.x, a.y), max(a.z, a.w)));
}
fn reduce_pack4(
  a0 : ${C}, a1 : ${C}, a2 : ${C}, a3 : ${C},
  h : u32, slane : u32, c_base : u32, mom_off : u32, main_off : u32, also_main : bool
) -> vec4<u32> {
  let f0 = vec4<f32>(a0${ee});
  let f1 = vec4<f32>(a1${ee});
  let f2 = vec4<f32>(a2${ee});
  let f3 = vec4<f32>(a3${ee});
  let b0 = (h * 4u) * 32u + slane;
  sh_sq[b0]       = vec2<f32>(f0.x + f0.y + f0.z + f0.w, dot(f0, f0));
  sh_sq[b0 + 32u] = vec2<f32>(f1.x + f1.y + f1.z + f1.w, dot(f1, f1));
  sh_sq[b0 + 64u] = vec2<f32>(f2.x + f2.y + f2.z + f2.w, dot(f2, f2));
  sh_sq[b0 + 96u] = vec2<f32>(f3.x + f3.y + f3.z + f3.w, dot(f3, f3));
  sh_mm[b0]       = vec_mm16(a0);
  sh_mm[b0 + 32u] = vec_mm16(a1);
  sh_mm[b0 + 64u] = vec_mm16(a2);
  sh_mm[b0 + 96u] = vec_mm16(a3);
  workgroupBarrier();
  if (slane < 4u) {
    let rb = (h * 4u + slane) * 32u;
    let s0 = sh_sq[rb];
    let m0 = sh_mm[rb];
    var rs : f32 = s0.x;
    var rq : f32 = s0.y;
    var rmn : f16 = m0.x;
    var rmx : f16 = m0.y;
${oe}    let fmn = f32(rmn);
    let sp = f32(rmx) - fmn;
    sh_res[h * 4u + slane] = vec2<f32>(fmn, select(0.0, 1.0 / sp, sp > 1e-7));
    let mv = vec4<f32>(rs, rq, fmn, sp);
${K}
  }
  workgroupBarrier();
  let r0 = sh_res[h * 4u + 0u];
  let r1 = sh_res[h * 4u + 1u];
  let r2 = sh_res[h * 4u + 2u];
  let r3 = sh_res[h * 4u + 3u];
  return vec4<u32>(
    pack4x8unorm((f0 - vec4<f32>(r0.x)) * r0.y),
    pack4x8unorm((f1 - vec4<f32>(r1.x)) * r1.y),
    pack4x8unorm((f2 - vec4<f32>(r2.x)) * r2.y),
    pack4x8unorm((f3 - vec4<f32>(r3.x)) * r3.y)
  );
}
`,localHeader:`  let h = lid.y * 2u + sg;
`,emit:({accVar:V,cStart:Z,cEnd:q,hrExpr:he,storeMode:se,momOffExpr:Ue,alsoWriteMomMain:Be=!1,writeY8Expr:Ge="true"})=>{const Ie=`${Ue} + (${he}) * ${t}u`,tt=Be?`${h}u + (row_idx * 2u + sg) * ${t}u`:"0u";let De=`  let ep_mom_off = ${Ie};
  let ep_main_off = ${tt};
`;for(let Ee=0;Ee<q-Z;Ee+=4){const $e=Z+Ee;De+=`  {
    let qw = reduce_pack4(${V}.v_${Ee}, ${V}.v_${Ee+1}, ${V}.v_${Ee+2}, ${V}.v_${Ee+3}, h, slane, ${$e}u, ep_mom_off, ep_main_off, ${Be});
    if (${Ge}) {
      ${A(se,$e,"qw.x")}
      ${A(se,$e+1,"qw.y")}
      ${A(se,$e+2,"qw.z")}
      ${A(se,$e+3,"qw.w")}
    }
  }
`}return De}}}const D=pt(32,oe=>`    {
      let s = sh_sq[rb + ${oe}u];
      let m = sh_mm[rb + ${oe}u];
      rs += s.x;
      rq += s.y;
      rmn = min(rmn, m.x);
      rmx = max(rmx, m.y);
    }
`);return{decls:`var<workgroup> sh_sq  : array<vec2<f32>, 512>;
var<workgroup> sh_mm  : array<vec2<f32>, 512>;
var<workgroup> sh_res : array<vec2<f32>, 16>;
fn vec_mm(f : vec4<f32>) -> vec2<f32> {
  return vec2<f32>(min(min(f.x, f.y), min(f.z, f.w)), max(max(f.x, f.y), max(f.z, f.w)));
}
fn reduce_pack2(
  a0 : ${C}, a1 : ${C},
  h : u32, slane : u32, c_base : u32, mom_off : u32, main_off : u32, also_main : bool
) -> vec2<u32> {
  let f0 = vec4<f32>(a0${ee});
  let f1 = vec4<f32>(a1${ee});
  let b0 = (h * 2u) * 32u + slane;
  sh_sq[b0]       = vec2<f32>(f0.x + f0.y + f0.z + f0.w, dot(f0, f0));
  sh_sq[b0 + 32u] = vec2<f32>(f1.x + f1.y + f1.z + f1.w, dot(f1, f1));
  sh_mm[b0]       = vec_mm(f0);
  sh_mm[b0 + 32u] = vec_mm(f1);
  workgroupBarrier();
  if (slane < 2u) {
    let rb = (h * 2u + slane) * 32u;
    var rs : f32 = 0.0;
    var rq : f32 = 0.0;
    var rmn : f32 = 3.0e38;
    var rmx : f32 = -3.0e38;
${D}    let sp = rmx - rmn;
    sh_res[h * 2u + slane] = vec2<f32>(rmn, select(0.0, 1.0 / sp, sp > 1e-7));
    let mv = vec4<f32>(rs, rq, rmn, sp);
${K}
  }
  workgroupBarrier();
  let r0 = sh_res[h * 2u + 0u];
  let r1 = sh_res[h * 2u + 1u];
  return vec2<u32>(
    pack4x8unorm((f0 - vec4<f32>(r0.x)) * r0.y),
    pack4x8unorm((f1 - vec4<f32>(r1.x)) * r1.y)
  );
}
`,localHeader:`  let h = lid.y * 2u + sg;
`,emit:({accVar:oe,cStart:J,cEnd:V,hrExpr:Z,storeMode:q,momOffExpr:he,alsoWriteMomMain:se=!1,writeY8Expr:Ue="true"})=>{const Be=`${he} + (${Z}) * ${t}u`,Ge=se?`${h}u + (row_idx * 2u + sg) * ${t}u`:"0u";let Ie=`  let ep_mom_off = ${Be};
  let ep_main_off = ${Ge};
`;for(let tt=0;tt<V-J;tt+=2){const De=J+tt;Ie+=`  {
    let qw = reduce_pack2(${oe}.v_${tt}, ${oe}.v_${tt+1}, h, slane, ${De}u, ep_mom_off, ep_main_off, ${se});
    if (${Ue}) {
      ${A(q,De,"qw.x")}
      ${A(q,De+1,"qw.y")}
    }
  }
`}return Ie}}},ce=()=>`
@group(0) @binding(0) var<storage, read_write> act0 : array<u32>;
@group(0) @binding(1) var<storage, read_write> act1 : array<u32>;
@group(0) @binding(2) var<storage, read_write> act2 : array<u32>;
@group(0) @binding(3) var<storage, read_write> act3 : array<u32>;
@compute @workgroup_size(${mt}, 1, 1)
fn main(@builtin(local_invocation_id) lid : vec3<u32>,
        @builtin(workgroup_id) wid : vec3<u32>) {
  let row_base = (wid.z * 256u + wid.y) * ${g}u + lid.x;
  let val = ${S.uZeroWord}u;
  for (var c : u32 = 0u; c < ${d}u; c = c + 1u) {
    let idx = row_base + c * ${mt}u;
    act0[idx] = val;
    act1[idx] = val;
    act2[idx] = val;
    act3[idx] = val;
  }
}`,N=i[0],W=!f&&t>=16,X=()=>{const j=ie(!1),ee=(V,Z)=>{const q=V/4,he=Z/4;return pt(he-q,se=>{const Ue=q+se,Be=Ue*4;return`          {
            let w0 = w16_4[wb + ${Ue}u];
            let w1 = w16_4[wb + ${p+Ue}u];
            let w2 = w16_4[wb + ${2*p+Ue}u];
            a_${Be}     = fma(vn, ${C}(w0.x), fma(vc, ${C}(w1.x), fma(vp, ${C}(w2.x), a_${Be})));
            a_${Be+1} = fma(vn, ${C}(w0.y), fma(vc, ${C}(w1.y), fma(vp, ${C}(w2.y), a_${Be+1})));
            a_${Be+2} = fma(vn, ${C}(w0.z), fma(vc, ${C}(w1.z), fma(vp, ${C}(w2.z), a_${Be+2})));
            a_${Be+3} = fma(vn, ${C}(w0.w), fma(vc, ${C}(w1.w), fma(vp, ${C}(w2.w), a_${Be+3})));
          }
`})},A=Math.floor(N/4),K=N%4;let D="";K===0?D=`
        let vn = inp_4[base - ${A}u];
        let vc = inp_4[base];
        let vp = inp_4[base + ${A}u];`:A===0&&K===1?D=`
        let vL = inp_4[base - 1u];
        let vc = inp_4[base];
        let vR = inp_4[base + 1u];
        let vn = ${C}(vL.w, vc.xyz);
        let vp = ${C}(vc.yzw, vR.x);`:K===1?D=`
        let vL = inp_4[base - ${A+1}u];
        let vN = inp_4[base - ${A}u];
        let vc = inp_4[base];
        let vP = inp_4[base + ${A}u];
        let vR = inp_4[base + ${A+1}u];
        let vn = ${C}(vL.w, vN.xyz);
        let vp = ${C}(vP.yzw, vR.x);`:K===2?D=`
        let vL = inp_4[base - ${A+1}u];
        let vN = ${A===0?"inp_4[base]":`inp_4[base - ${A}u]`};
        let vc = ${A===0?"vN":"inp_4[base]"};
        let vP = ${A===0?"vN":`inp_4[base + ${A}u]`};
        let vR = inp_4[base + ${A+1}u];
        let vn = ${C}(vL.zw, vN.xy);
        let vp = ${C}(vP.zw, vR.xy);`:D=`
        let vL = inp_4[base - ${A+1}u];
        let vN = ${A===0?"inp_4[base]":`inp_4[base - ${A}u]`};
        let vc = ${A===0?"vN":"inp_4[base]"};
        let vP = ${A===0?"vN":`inp_4[base + ${A}u]`};
        let vR = inp_4[base + ${A+1}u];
        let vn = ${C}(vL.yzw, vN.x);
        let vp = ${C}(vP.w, vR.xyz);`;const re=(V,Z,q,he)=>{const se=he-q,Ue=pt(se,Ie=>`  v_${Ie} : ${C},
`),Be=pt(se,Ie=>{const tt=q+Ie;if(a==="none"){const De=3*t+tt;return`  var a_${tt} = ${C}(${G}(qmeta_u[${De>>>2}u][${De&3}u]));
`}return`  var a_${tt} = ${C}(0.0${T});
`}),Ge=Array.from({length:se},(Ie,tt)=>`a_${q+tt}`).join(", ");return`struct ${Z} {
${Ue}};
fn ${V}(y : i32, z : i32, x_pad : u32) -> ${Z} {
${Be}  var tap_yz : u32 = 0u;
  for (var dz : i32 = -1; dz <= 1; dz = dz + 1) {
    let sz = z + dz * ${N};
    for (var dy : i32 = -1; dy <= 1; dy = dy + 1) {
      let sy = y + dy * ${N};
      if ((u32(sz) | u32(sy)) < 256u) {
        let base = (u32(sz) * 256u + u32(sy)) * ${mt}u + x_pad;
${D}
        let wb = tap_yz * ${3*p}u;
${ee(q,he)}
      }
      tap_yz = tap_yz + 1u;
    }
  }
  return ${Z}(${Ge});
}
`},oe=(V,Z,q,he,se)=>{const Ue=se?`  let y = i32(p0.bg_y0 + lid.y);
  let z = i32(p0.bg_z0);`:`  var y : i32;
  var z : i32;
  if (p0.is_full != 0u) {
    y = i32(wid.y * 4u + lid.y);
    z = i32(wid.z);
  } else {
    let pk = strips0_u[wid.z >> 2u][wid.z & 3u];
    y = i32((pk & 255u) * 4u + lid.y);
    z = i32(pk >> 8u);
  }`,Be=se?"lid.y * 2u + sg":"row_idx * 2u + sg",Ge=se?`${w}u`:`${h}u`,Ie=se?`  let s_bg_base = (${v}u + lid.y) * ${P}u + lid.x;`:`  let row_idx = u32(z) * 256u + u32(y);
  let use_act = u32(z) < 192u;
  let a_row_base = row_idx * ${g}u + x_pad;
  let s_row_base = ((u32(z) & 63u) * 256u + u32(y)) * ${P}u + lid.x;`;return`
@compute @workgroup_size(64, 4, 1)
fn ${V}(@builtin(local_invocation_id) lid : vec3<u32>,
             @builtin(workgroup_id) wid : vec3<u32>${j.entryArgs||""}) {
  let sg = lid.x >> 5u;
  let slane = lid.x & 31u;
${j.localHeader}  let x_pad = lid.x + ${Nt}u;
${Ue}
  let acc = ${Z}(y, z, x_pad);
${Ie}
${j.emit({accVar:"acc",cStart:q,cEnd:he,hrExpr:Be,storeMode:se?"stage_bg":"conv0_split",momOffExpr:Ge})}}`},J=W?re("run_conv0_lo","Conv0AccLo",0,u)+re("run_conv0_hi","Conv0AccHi",u,t)+oe("main_lo","run_conv0_lo",0,u,!1)+oe("main_hi","run_conv0_hi",u,t,!1)+oe("main_bg_lo","run_conv0_lo",0,u,!0)+oe("main_bg_hi","run_conv0_hi",u,t,!0):re("run_conv0","Conv0Acc",0,t)+oe("main","run_conv0",0,t,!1)+oe("main_bg","run_conv0",0,t,!0);return`${M}${R}
struct Params0 {
  is_full : u32,
  bg_y0 : u32,
  bg_z0 : u32,
  pad0 : u32,
};
@group(0) @binding(0) var<storage, read> inp_4 : array<${C}>;
@group(0) @binding(1) var<storage, read_write> act8_0 : array<u32>;
@group(0) @binding(2) var<storage, read_write> act8_1 : array<u32>;
@group(0) @binding(3) var<storage, read_write> act8_2 : array<u32>;
@group(0) @binding(4) var<storage, read_write> act8_3 : array<u32>;
@group(0) @binding(5) var<storage, read_write> stage : array<u32>;
@group(0) @binding(6) var<storage, read> w16_4 : array<${C}>;
@group(0) @binding(7) var<storage, read_write> mom : array<vec4<f32>>;
@group(0) @binding(8) var<uniform> qmeta_u : array<vec4<f32>, ${t}>;
@group(0) @binding(9) var<uniform> strips0_u : array<vec4<u32>, 4096>;
@group(0) @binding(10) var<uniform> p0 : Params0;
${j.decls}${J}`},Q=()=>`${M}
${kn(o)}
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
@group(0) @binding(0) var<storage, read> w16_4 : array<${C}>;
@group(0) @binding(1) var<storage, read> qmeta : array<f32>;
@group(0) @binding(2) var<storage, read_write> mom : array<vec4<f32>>;
@group(0) @binding(3) var<storage, read_write> w_eff : array<${C}>;
@group(0) @binding(4) var<storage, read> main_strips : array<u32>;
@group(0) @binding(5) var<uniform> pp : PrepParams;

${a==="gn"?`var<workgroup> fin_s  : array<f32, 256>;
var<workgroup> fin_q  : array<f32, 256>;
var<workgroup> fin_es : array<f32, 256>;
var<workgroup> fin_eq : array<f32, 256>;
`:""}var<workgroup> fin_mn : array<f32, 256>;
var<workgroup> fin_mx : array<f32, 256>;

@compute @workgroup_size(256, 1, 1)
fn moments_finish(@builtin(local_invocation_index) lid : u32,
                  @builtin(workgroup_id) wid : vec3<u32>) {
  let c = wid.x;
${a==="gn"?`  var s : f32 = 0.0;
  var q : f32 = 0.0;
  var es : f32 = 0.0;
  var eq : f32 = 0.0;
`:""}  var mn : f32 = 3.0e38;
  var mx : f32 = -3.0e38;
  if (pp.is_full != 0u) {
    for (var hr : u32 = lid; hr < ${Fn}u; hr = hr + 256u) {
      let v = mom[${h}u + hr * ${t}u + c];
${a==="gn"?`      s  += v.x;
      q  += v.y;
`:""}      mn  = min(mn, v.z);
      mx  = max(mx, v.z + v.w);
    }
  } else {
    for (var si : u32 = lid; si < pp.n_main_strips; si = si + 256u) {
      let pk = main_strips[si];
      let base_hr = ((pk >> 8u) * 256u + (pk & 255u) * 4u) * 2u;
      for (var h : u32 = 0u; h < 8u; h = h + 1u) {
        let v = mom[${h}u + (base_hr + h) * ${t}u + c];
${a==="gn"?`        s  += v.x;
        q  += v.y;
`:""}        mn  = min(mn, v.z);
        mx  = max(mx, v.z + v.w);
      }
    }
    if (pp.is_first != 0u) {
      mn = min(mn, 0.0);
      mx = max(mx, 0.0);
    } else if (pp.n_ext_hr > 0u) {
      for (var e : u32 = lid; e < pp.n_ext_hr; e = e + 256u) {
        let v = mom[${w}u + e * ${t}u + c];
${a==="gn"?`        es += v.x;
        eq += v.y;
`:""}        mn  = min(mn, v.z);
        mx  = max(mx, v.z + v.w);
      }
    }
  }
${a==="gn"?`  fin_s[lid]  = s;
  fin_q[lid]  = q;
  fin_es[lid] = es;
  fin_eq[lid] = eq;
`:""}  fin_mn[lid] = mn;
  fin_mx[lid] = mx;
  workgroupBarrier();
  for (var stride : u32 = 128u; stride > 0u; stride = stride >> 1u) {
    if (lid < stride) {
${a==="gn"?`      fin_s[lid]  += fin_s[lid + stride];
      fin_q[lid]  += fin_q[lid + stride];
      fin_es[lid] += fin_es[lid + stride];
      fin_eq[lid] += fin_eq[lid + stride];
`:""}      fin_mn[lid]  = min(fin_mn[lid], fin_mn[lid + stride]);
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
${a==="gn"?`    let total_s = fin_s[0] + pp.ext_weight * fin_es[0];
    let total_q = fin_q[0] + pp.ext_weight * fin_eq[0];
    let mean = total_s / 16777216.0;
    let varr = max(total_q / 16777216.0 - mean * mean, 0.0);
    let inv_std = inverseSqrt(varr + eff_eps);
`:`    let mean : f32 = 0.0;
    let inv_std : f32 = 1.0;
`}    let scale = inv_std * gamma;
    let shift = beta - mean * scale;
    let u_lo = fin_mn[0] * scale + shift;
    let u_hi = fin_mx[0] * scale + shift;
    let vmax = max(0.25, max(act(u_lo), act(u_hi)));
    ${o==="gelu_tanh"?`
    let qs = select(max(vmax / 248.0, 0.1705 / 7.0), 1.0, c >= ${n}u);
    `:o==="relu"?`
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
    q_ref = max(q_ref, ${I.toFixed(1)} * qs);
  }
  ${a==="none"?"q_ref = 1.0;":""}
  if (lid == 0u) {
    mom[${t*2}u] = vec4<f32>(q_ref, 0.0, 0.0, 0.0);
  }
  let scale_num = ${I.toFixed(1)} / q_ref;
  for (var idx : u32 = lid; idx < ${k}u; idx = idx + 256u) {
    let ic = (idx / ${3*p}u) % ${t}u;
    let qs = mom[ic * 2u].z;
    w_eff[idx] = w16_4[pp.next_w_vec4_off + idx] * ${G}(qs * scale_num);
  }
  if (lid < ${p}u) {
    ${a==="none"?`
    let mb = pp.next_meta_off + ${3*t}u + lid * 4u;
    w_eff[${F}u + lid] = ${C}(${G}(qmeta[mb]), ${G}(qmeta[mb + 1u]), ${G}(qmeta[mb + 2u]), ${G}(qmeta[mb + 3u]));
    `:`
    w_eff[${F}u + lid] = ${C}(0.0${T});
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
  let x_pad = x4 + ${Nt}u;
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
  let a_base = (z * 256u + y) * ${g}u + x_pad;
  let s_base = ((z & 63u) * 256u + y) * ${P}u + x4;
  for (var c : u32 = 0u; c < ${d}u; c = c + 1u) {
    let a_off = a_base + c * ${mt}u;
    act8_0[a_off] = stage[s_base + c * ${wt}u];
    act8_1[a_off] = stage[s_base + (${d}u + c) * ${wt}u];
    act8_2[a_off] = stage[s_base + (${2*d}u + c) * ${wt}u];
    act8_3[a_off] = stage[s_base + (${3*d}u + c) * ${wt}u];
  }
}`,le=(j,ee)=>{const A=j*d;return`
  for (var cl : u32 = 0u; cl < ${d}u; cl = cl + 1u) {
    let c = ${A}u + cl;
    let inv_qs = mom[c * 2u].w;
    let st = mom[c * 2u + 1u];
    let rm = mom[mom_base + c];
    let q_word = ${ee?`stage[s_bg_base + c * ${wt}u]`:`select(stage[s_base + c * ${wt}u], act8_${j}[a_base + cl * ${mt}u], use_act)`};
    let yv = unpack4x8unorm(q_word) * rm.w + vec4<f32>(rm.z);
    let a = vec4<f32>(
      act(yv.x * st.x + st.y),
      act(yv.y * st.x + st.y),
      act(yv.z * st.x + st.y),
      act(yv.w * st.x + st.y)
    );
    act8_${j}[a_base + cl * ${mt}u] = pack4x8unorm((a * inv_qs + vec4<f32>(${S.zeroBin.toFixed(1)})) * (1.0 / 255.0));
  }`},ue=()=>`${kn(o)}
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
  let x_pad = x4 + ${Nt}u;
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
  let a_base = row_idx * ${g}u + x_pad;
  let s_base = ((z & 63u) * 256u + y) * ${P}u + x4;
  let mom_base = ${h}u + (row_idx * 2u + sg) * ${t}u;
${pt(4,j=>le(j,!1))}
}

@compute @workgroup_size(64, 4, 1)
fn norm_halo_fill(@builtin(local_invocation_id) lid : vec3<u32>,
                  @builtin(workgroup_id) wid : vec3<u32>) {
  let idx = wid.y * 4u + lid.y;
  if (idx >= np.n_halo) { return; }
  let x4 = lid.x;
  let sg = x4 >> 5u;
  let x_pad = x4 + ${Nt}u;
  let s_bg_base = ${v}u * ${P}u + x4;
  let mom_base = ${w}u + sg * ${t}u;
  let dst_row = norm_aux[np.halo_off + idx];
  let a_base = dst_row * ${g}u + x_pad;
${pt(4,j=>le(j,!0))}
}`,Ce=()=>{const j=!f&&t>=16,ee=ie(f),A=(q,he)=>f?`
          let ${q} = vec4<f16>(vec2<f16>(unpack2x16float(((${he} & 0x00FF00FFu) << 2u) | 0x3C003C00u)), vec2<f16>(unpack2x16float(((${he} >> 6u) & 0x03FC03FCu) | 0x3C003C00u))) - vec4<f16>(${S.sterbenzSub});`:`
          let ${q} = unpack4x8unorm(${he}) - vec4<f32>(${S.uZeroFloat});`,K=q=>`
          let uL = ${q}[base - off0];
          let uN = ${q}[base - off1];
          let uC = ${q}[base];
          let uP = ${q}[base + off1];
          let uR = ${q}[base + off0];
          let u_neg = (uL >> sh_l) | (uN << sh_r);
          let u_pos = (uP >> sh_r) | (uR << sh_l);`+A("vn","u_neg")+A("vc","uC")+A("vp","u_pos"),D=(q,he)=>{const se=q/4,Ue=he/4;if(B){const Be=p/2,Ge=p;let Ie="";for(let tt=se;tt<Ue;tt+=2){const De=tt*4,Ee=tt/2;Ie+=`          {
            let wp0 = w_eff_u[wbu + ${Ee}u];
            let wp1 = w_eff_u[wbu + ${Be+Ee}u];
            let wp2 = w_eff_u[wbu + ${Ge+Ee}u];
            let w0a = u4_lo(wp0);
            let w0b = u4_hi(wp0);
            let w1a = u4_lo(wp1);
            let w1b = u4_hi(wp1);
            let w2a = u4_lo(wp2);
            let w2b = u4_hi(wp2);
            a_${De}     = fma(vn, vec4<f16>(w0a.x), fma(vc, vec4<f16>(w1a.x), fma(vp, vec4<f16>(w2a.x), a_${De})));
            a_${De+1} = fma(vn, vec4<f16>(w0a.y), fma(vc, vec4<f16>(w1a.y), fma(vp, vec4<f16>(w2a.y), a_${De+1})));
            a_${De+2} = fma(vn, vec4<f16>(w0a.z), fma(vc, vec4<f16>(w1a.z), fma(vp, vec4<f16>(w2a.z), a_${De+2})));
            a_${De+3} = fma(vn, vec4<f16>(w0a.w), fma(vc, vec4<f16>(w1a.w), fma(vp, vec4<f16>(w2a.w), a_${De+3})));
            a_${De+4} = fma(vn, vec4<f16>(w0b.x), fma(vc, vec4<f16>(w1b.x), fma(vp, vec4<f16>(w2b.x), a_${De+4})));
            a_${De+5} = fma(vn, vec4<f16>(w0b.y), fma(vc, vec4<f16>(w1b.y), fma(vp, vec4<f16>(w2b.y), a_${De+5})));
            a_${De+6} = fma(vn, vec4<f16>(w0b.z), fma(vc, vec4<f16>(w1b.z), fma(vp, vec4<f16>(w2b.z), a_${De+6})));
            a_${De+7} = fma(vn, vec4<f16>(w0b.w), fma(vc, vec4<f16>(w1b.w), fma(vp, vec4<f16>(w2b.w), a_${De+7})));
          }
`}return Ie}return pt(Ue-se,Be=>{const Ge=se+Be,Ie=Ge*4;return`          {
            let w0 = w_eff[wb + ${Ge}u];
            let w1 = w_eff[wb + ${p+Ge}u];
            let w2 = w_eff[wb + ${2*p+Ge}u];
            a_${Ie}     = fma(vn, ${C}(w0.x), fma(vc, ${C}(w1.x), fma(vp, ${C}(w2.x), a_${Ie})));
            a_${Ie+1} = fma(vn, ${C}(w0.y), fma(vc, ${C}(w1.y), fma(vp, ${C}(w2.y), a_${Ie+1})));
            a_${Ie+2} = fma(vn, ${C}(w0.z), fma(vc, ${C}(w1.z), fma(vp, ${C}(w2.z), a_${Ie+2})));
            a_${Ie+3} = fma(vn, ${C}(w0.w), fma(vc, ${C}(w1.w), fma(vp, ${C}(w2.w), a_${Ie+3})));
          }
`})},re=(q,he,se)=>{const Ue=q*d,Be=`(${d}u + cp.pad0)`;return B?`        for (var ic : u32 = 0u; ic < ${Be}; ic = ic + 1u) {
          let base = row_off + ic * ${mt}u;
${K(`act8_${q}`)}
          let wbu = wbu_tap + ${Ue?`(${Ue}u + ic)`:"ic"} * ${3*p/2}u;
${D(he,se)}
        }
`:`        for (var ic : u32 = 0u; ic < ${Be}; ic = ic + 1u) {
          let base = row_off + ic * ${mt}u;
${K(`act8_${q}`)}
          let wb = wb_tap + ${Ue?`(${Ue}u + ic)`:"ic"} * ${3*p}u;
${D(he,se)}
        }
`},oe=(q,he,se,Ue)=>{const Be=Ue-se,Ge=pt(Be,Ee=>`  v_${Ee} : ${C},
`),Ie=pt(Be,Ee=>{const $e=se+Ee;if(a==="none"){const Je=$e>>>2,gt=["x","y","z","w"][$e&3];if(B){const ut=F+Je>>>1,dt=F+Je&1?"u4_hi":"u4_lo";return`  var a_${$e} = ${C}(${dt}(w_eff_u[${ut}u]).${gt});
`}return`  var a_${$e} = ${C}(w_eff[${F+Je}u].${gt});
`}return`  var a_${$e} = ${C}(0.0${T});
`}),tt=B?`        let wbu_tap = tap_yz * ${t*3*p/2}u;
`:`        let wb_tap = tap_yz * ${t*3*p}u;
`,De=Array.from({length:Be},(Ee,$e)=>`a_${se+$e}`).join(", ");return`struct ${he} {
${Ge}};
fn ${q}(y : i32, z : i32, x_pad : u32, dp : u32) -> ${he} {
${Ie}  let d_step = i32(dp & 63u);
  let off0 = (dp >> 6u) & 15u;
  let off1 = (dp >> 10u) & 15u;
  let sh_r = (dp >> 14u) & 31u;
  let sh_l = (dp >> 19u) & 31u;
  var tap_yz : u32 = 0u;
  for (var dz : i32 = -1; dz <= 1; dz = dz + 1) {
    let sz = z + dz * d_step;
    for (var dy : i32 = -1; dy <= 1; dy = dy + 1) {
      let sy = y + dy * d_step;
      if ((u32(sz) | u32(sy)) < 256u) {
        let row_off = (u32(sz) * 256u + u32(sy)) * ${g}u + x_pad;
${tt}${pt(4,Ee=>re(Ee,se,Ue))}      }
      tap_yz = tap_yz + 1u;
    }
  }
  return ${he}(${De});
}
`},J=(q,he,se,Ue,Be)=>{let Ge="";Be==="bg"?Ge=`
  let y = i32(cp.bg_y0 + lid.y);
  let z = i32(cp.bg_z0);`:Be==="ext"?Ge=`
  let pk_full = strips[cp.ext_off + wid.z];
  let ext_orig = pk_full >> 16u;
  let pk = pk_full & 0xFFFFu;
  let y = i32((pk & 255u) * 4u + lid.y);
  let z = i32(pk >> 8u);`:Ge=`
  var y : i32;
  var z : i32;
  if (cp.is_full != 0u) {
    y = i32(wid.y * 4u + lid.y);
    z = i32(cp.z_start + wid.z);
  } else {
    let pk = strips[cp.strip_off + wid.z] & 0xFFFFu;
    y = i32((pk & 255u) * 4u + lid.y);
    z = i32(pk >> 8u);
  }`;const Ie=Be==="bg"?"lid.y * 2u + sg":Be==="ext"?"ext_orig * 8u + lid.y * 2u + sg":"row_idx * 2u + sg",tt=Be==="main"?`${h}u`:`${w}u`,De=Be==="bg"?"stage_bg":"stage",Ee=Be==="main"?"true":"(((dp >> 24u) & 1u) != 0u)",$e=Be==="bg"?`  let row_idx = u32(z) * 256u + u32(y);
  let s_bg_base = (${v}u + lid.y) * ${P}u + x4;`:`  let row_idx = u32(z) * 256u + u32(y);
  let s_row_base = ((u32(z) & 63u) * 256u + u32(y)) * ${P}u + x4;`;return`
@compute @workgroup_size(64, 4, 1)
fn ${q}(@builtin(local_invocation_id) lid : vec3<u32>,
             @builtin(workgroup_id) wid : vec3<u32>${ee.entryArgs||""}) {
  let x4 = lid.x;
  let sg = x4 >> 5u;
  let slane = x4 & 31u;
${ee.localHeader}  let x_pad = x4 + ${Nt}u;
${Ge}
  let dp = cp.d_pack;
  let acc = ${he}(y, z, x_pad, dp);
${$e}
${ee.emit({accVar:"acc",cStart:se,cEnd:Ue,hrExpr:Ie,storeMode:De,momOffExpr:tt,alsoWriteMomMain:Be!=="main",writeY8Expr:Ee})}}`},V=j?oe("run_conv_lo","ConvAccLo",0,u)+oe("run_conv_hi","ConvAccHi",u,t)+J("main_lo","run_conv_lo",0,u,"main")+J("main_hi","run_conv_hi",u,t,"main")+J("main_ext_lo","run_conv_lo",0,u,"ext")+J("main_ext_hi","run_conv_hi",u,t,"ext")+J("main_bg_lo","run_conv_lo",0,u,"bg")+J("main_bg_hi","run_conv_hi",u,t,"bg"):oe("run_conv","ConvAcc",0,t)+J("main","run_conv",0,t,"main")+J("main_ext","run_conv",0,t,"ext")+J("main_bg","run_conv",0,t,"bg"),Z=B?`fn u4_lo(u : vec4<u32>) -> vec4<f16> {
  return vec4<f16>(vec2<f16>(unpack2x16float(u.x)), vec2<f16>(unpack2x16float(u.y)));
}
fn u4_hi(u : vec4<u32>) -> vec4<f16> {
  return vec4<f16>(vec2<f16>(unpack2x16float(u.z)), vec2<f16>(unpack2x16float(u.w)));
}
@group(0) @binding(6) var<uniform> w_eff_u : array<vec4<u32>, ${Math.ceil($/2)}>;`:`@group(0) @binding(6) var<storage, read> w_eff : array<${C}>;`;return`${M}${R}
struct BandConvParams {
  is_full : u32,
  z_start : u32,
  strip_off : u32,
  ext_off : u32,
  d_pack : u32,
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
${Z}
@group(0) @binding(7) var<storage, read> strips : array<u32>;
@group(0) @binding(8) var<uniform> cp : BandConvParams;
${ee.decls}${V}`},ke=j=>{const ee=j*d;return`
  for (var cl : u32 = 0u; cl < ${d}u; cl = cl + 1u) {
    let c = ${ee}u + cl;
    if (c < ${n}u) {
      let st = mom[c * 2u + 1u];
      let rm = mom[mom_base + c];
      let q_word = select(stage[s_base + c * ${wt}u], act8_${j}[a_base + cl * ${mt}u], use_act);
      let yv = unpack4x8unorm(q_word) * rm.w + vec4<f32>(rm.z);
      let fv = vec4<f32>(
        act(yv.x * st.x + st.y),
        act(yv.y * st.x + st.y),
        act(yv.z * st.x + st.y),
        act(yv.w * st.x + st.y)
      );
      feat[c] = ${C}(fv);
    }
  }`};return{initActWgsl:ce,conv0Wgsl:X,prepWgsl:Q,flushWgsl:O,normWgsl:ue,convWgsl:Ce,clsWgsl:()=>`${M}
${kn(o)}
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
@group(0) @binding(5) var<storage, read> w16_4 : array<${C}>;
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
  let a_base = row_idx * ${g}u + x4 + ${Nt}u;
  let s_base = ((z & 63u) * 256u + y) * ${P}u + x4;
  let mom_base = ${h}u + (row_idx * 2u + sg) * ${t}u;

  var feat : array<${C}, ${n}>;
${pt(4,j=>ke(j))}

  let w_cls = cp.w_vec4_off;
  let b_vec4 = cp.bias_off >> 2u;
${vr({chan:n,clsK4:r,nclass:s,V4:C,suf:T,readBiasStmt:"    let bv = qmeta_u[b_vec4 + k4];",biasExpr:j=>`bv.${["x","y","z","w"][j]}`,probCfg:m})}
}`,qmetaVec4Len:b,numConvs:c,totalWEffVec4s:$,useUniformWeff:B,csQ:d,halfPass0:W,halfPassConv:!f&&t>=16}}function jo(e,t,n,s,r,i,o){return ze(this,null,function*(){var ot,Ve;const a=L*L*L,f=o?a*4:a,l=t.dilations.length,c=t.cs/4,m=L*L*c*mt*4,u=(64*L+4)*t.cs*wt*4,g=(t.cs*2+4+(Fn+Js)*t.cs)*16,v=e.limits||{},P=Math.min((ot=v.maxStorageBufferBindingSize)!=null?ot:1/0,(Ve=v.maxBufferSize)!=null?Ve:1/0);if(m>P||u>P||g>P||f>P){const te=Math.ceil(Math.max(m,u,g,f)/1048576);throw new Error(`meshnet_fast_v4: LowMem128 max buffer (${te} MiB) exceeds device limit (${P>>>20} MiB)`)}const _=kr({cs:t.cs,chan:t.chan,nclass:t.nclass,clsK4:n.clsK4,dilations:t.dilations,activation:t.activation,norm:t.norm,hasF16:s,subgroupMode:r,numConvs:l,probCfg:o});console.log(`[WebGPU-V4-128M] ${t.chan}ch(cs=${t.cs})/${t.nclass}cls (${l} convs, ${t.activation}, norm=${t.norm}${o?", prob=3":""}) | ${s?"f16+sterbenz":"f32"} | ${ir(r)} | ZYCX-4Q+64slice | maxBuf=${(Math.max(m,u,g,f)/1048576).toFixed(1)} MiB`);const h=GPUBufferUsage.STORAGE,w=GPUBufferUsage.UNIFORM,y=GPUBufferUsage.COPY_DST,b=GPUBufferUsage.COPY_SRC,k=L*L*cn,F=k*(s?2:4),$=s?Math.ceil(_.totalWEffVec4s/2)*16:_.totalWEffVec4s*16,B=!!(o&&m>=f),S=`128|${t.cs}|${s?1:0}|${f}|${B?1:0}`,M=mr(e,S,()=>{const te=[],H=En(e,te),ae=H.alloc,Ye={inpBuf:ae(F,h|y|b),act8_0:ae(m,h|y|b),act8_1:ae(m,h|y|b),act8_2:ae(m,h|y|b),act8_3:ae(m,h|y|b),stageBuf:ae(u,h),momBuf:ae(g,h),labels8Buf:ae(f,h|y|b),readbackBuf:ae(f,GPUBufferUsage.MAP_READ|y),probPackTmpBuf:B?ae(f,h|y|b):null};return{buffers:te,named:Ye,bytes:H.getBytes()}}),{inpBuf:z,act8_0:R,act8_1:G,act8_2:T,act8_3:C,stageBuf:I,momBuf:ie,labels8Buf:ce,readbackBuf:N,probPackTmpBuf:W}=M.named,X=[],Q=En(e,X),O=Q.alloc,le=O(s?n.wF16.byteLength:n.wF32.byteLength,h|y),ue=O(n.qmetaF32.byteLength,h|w|y),Ce=O($,_.useUniformWeff?h|w:h),ke=t.norm==="gn"&&!(i!=null&&i.disableConeSkip),Ae=O(st*4,w|y),j=O(st*4,w|y),ee=Array.from({length:l},()=>O(ke?st*4:16,h|y)),A=Array.from({length:l-1},()=>O(ke?(st+L*L)*4:16,h|y)),K=O(16,w|y),D=O(16,w|y),re=Array.from({length:l},()=>O(48,w|y)),oe=Array.from({length:l-1},()=>O(16,w|y)),J=Math.max(256,v.minUniformBufferOffsetAlignment||256),V=J>>>2,Z=20,q=Math.max(1,(l-1)*Z),he=O(q*J,w|y),se=new Uint32Array(q*V);e.queue.writeBuffer(le,0,s?n.wF16:n.wF32),e.queue.writeBuffer(ue,0,n.qmetaF32);let Ue;try{Ue=yield _r(e,t,n,s,r,o,_)}catch(te){for(const H of X)H.destroy();if(X.length=0,M.pooled)on.get(e)===M&&wn(e);else{for(const H of M.buffers)H.destroy();M.buffers.length=0}throw te}const{pInit:Be,pMomFin:Ge,pPrepW:Ie,pFlush:tt,pNorm:De,pNormHalo:Ee,pCls:$e,pConv0:Je,pConv:gt}=Ue,ut=(te,H)=>e.createBindGroup({layout:te,entries:H.map((ae,Ye)=>({binding:Ye,resource:ae&&ae.buffer?ae:{buffer:ae}}))}),dt=ut(Be.bgl,[R,G,T,C]);{const te=e.createCommandEncoder(),H=te.beginComputePass();H.setPipeline(Be.pipe),H.setBindGroup(0,dt),H.dispatchWorkgroups(1,L,L),H.end(),e.queue.submit([te.finish()])}const Bt=(_.halfPass0?Je.lo:Je.main).bgl,Dt=ut(Bt,[z,R,G,T,C,I,le,ie,{buffer:ue,offset:0,size:t.cs*16},Ae,K]),Ft=ut($e.bgl,[R,G,T,C,I,le,ie,ce,ue,j,D]),Y=B?O(16,w|y):null,tn=B?ut($e.bgl,[R,G,T,C,I,le,ie,ce,ue,j,Y]):null,Pt=xr({device:e,hasF16:s,nvox:a,outBufBytes:f,inpBuf:z,act8_0:R,labels8Buf:ce,readbackBuf:N,pInit:Be,bgInit:dt,pCls:$e,bgCls:Ft,clsUbo:D,packed:n,modelEntry:i,probCfg:o,canGpuProb:B,probSlots:B?{clsUbo1:Y,bgCls1:tn,pass0HoldBuf:W,y0:R,y1:G,b:T,sup:C}:null,ownedBuffers:X,mkBuf:O}),Vt=re.map((te,H)=>ut(Ge.bgl,[le,ue,ie,Ce,ee[H],te])),Mt=oe.map((te,H)=>ut(De.bgl,[R,G,T,C,I,ie,A[H],te])),ht={buffer:he,offset:0,size:32},x=Array.from({length:l},(te,H)=>H===0?null:ut(tt.bgl,[R,G,T,C,I,ee[H],ht])),U=_.halfPassConv?gt.lo:gt.main,E=Array.from({length:l},(te,H)=>H===0?null:ut(U.bgl,[R,G,T,C,I,ie,Ce,ee[H],ht])),de=s?new Uint16Array(k):new Float32Array(k),ne=new Uint8Array(L*L),We=new Uint32Array(st),be=new Uint32Array(st+L*L),ge=new Uint32Array(12),ve=new Float32Array(ge.buffer),xe=new Uint32Array(4),Xe=(te,H,ae,Ye,it,Qe,qe,Ke)=>{const Se=te*V;se[Se]=H?1:0,se[Se+1]=ae,se[Se+2]=Ye,se[Se+3]=it,se[Se+4]=Qe,se[Se+5]=qe,se[Se+6]=Ke,se[Se+7]=0};function Te(te,H){return ze(this,null,function*(){if(te.length!==a)throw new Error(`meshnet_fast_v4 expected ${a} voxels, got ${te.length}`);const ae=t.norm==="gn"&&!(i!=null&&i.disableConeSkip),Ye=yield Pt.prepareInput({volume:te,ioOpts:H,useCone:ae,padInputHost:de,headRowHost:ne,hasF16Flag:s}),it=Ye.info,Qe=hr(ne,it,t.dilations,ae),qe=new Array(l);for(let fe=0;fe<l;fe++){const Pe=Qe.layers[fe],Me=Pe.isFull?st:Pe.mainStrips.length,ye=Pe.isFull||!Pe.extStrips?0:Pe.extStrips.length,He=Pe.haloRows?Pe.haloRows.length:0;if(fe===0){!Pe.isFull&&Me>0&&(We.set(Pe.mainStrips,0),e.queue.writeBuffer(Ae,0,We.subarray(0,Me)),e.queue.writeBuffer(ee[0],0,We.subarray(0,Me))),qe[0]={L:Pe,nMain:Me,nExt:ye,nHalo:He};continue}const Ze=new Uint32Array(8),at=new Uint32Array(8),ct=new Uint32Array(8),It=new Uint32Array(8);if(!Pe.isFull){if(Me>0){We.set(Pe.mainStrips,0);for(let we=0;we<Me;we++)at[Pe.mainStrips[we]>>>13]++;let me=0;for(let we=0;we<8;we++)Ze[we]=me,me+=at[we]}if(Pe.mode==="bwd"&&ye>0){const me=Array.from({length:8},()=>[]);for(let pe=0;pe<ye;pe++){const rt=Pe.extStrips[pe];me[rt>>>13].push((pe&65535)<<16|rt)}let we=Me;for(let pe=0;pe<8;pe++){ct[pe]=we;const rt=me[pe];It[pe]=rt.length;for(let $t=0;$t<rt.length;$t++)We[we++]=rt[$t]}e.queue.writeBuffer(ee[fe],0,We.subarray(0,Me+ye))}else Me>0&&e.queue.writeBuffer(ee[fe],0,We.subarray(0,Me))}const Oe=Pe.mode==="rpure"&&He>0||Pe.mode==="bwd"&&fe+1<l,et=as(t.dilations[fe],Oe),yt=(fe-1)*Z,lt=Pe.bgStrip?Pe.bgStrip.yWg*4:0,nt=Pe.bgStrip?Pe.bgStrip.z:0;for(let me=0;me<8;me++)Xe(yt+me,Pe.isFull,me*32,Ze[me],ct[me],et,lt,nt);for(let me=0;me<6;me++)Xe(yt+8+me,Pe.isFull,me*32,Ze[me],0,0,0,0),Xe(yt+14+me,!1,me*32,ct[me],0,0,0,0);qe[fe]={L:Pe,nMain:Me,nExt:ye,nHalo:He,mainCount:at,extCount:It,layerBaseSlot:yt}}l>1&&e.queue.writeBuffer(he,0,se);let Ke=sr(e,i);const Se=[];if(Ke==="single"){const fe=e.createCommandEncoder();Ye.runPrePasses(fe,Se),Qe.clsSkipped&&(fe.clearBuffer(ce,0,f),Qe.clsStrips.length>0&&e.queue.writeBuffer(j,0,Qe.clsStrips));for(let Pe=0;Pe<l;Pe++){const Me=qe[Pe],{L:ye,nMain:He,nHalo:Ze}=Me,at=ye.nMomExt||0,ct=ye.isFull?st:ye.normStrips?ye.normStrips.length:0;if(Pe===0){const Oe=ye.isFull?64:1,et=ye.isFull?L:He,yt=!!(ye.bgStrip&&Ze>0);if(xe[0]=ye.isFull?1:0,xe[1]=ye.bgStrip?ye.bgStrip.yWg*4:0,xe[2]=ye.bgStrip?ye.bgStrip.z:0,xe[3]=0,e.queue.writeBuffer(K,0,xe),_.halfPass0)for(const[lt,nt]of[[Je.lo,Je.bgLo],[Je.hi,Je.bgHi]]){const me=fe.beginComputePass();me.setBindGroup(0,Dt),et>0&&(me.setPipeline(lt.pipe),me.dispatchWorkgroups(1,Oe,et)),yt&&(me.setPipeline(nt.pipe),me.dispatchWorkgroups(1,1,1)),me.end(),Se.push("conv0")}else{const lt=fe.beginComputePass();lt.setBindGroup(0,Dt),et>0&&(lt.setPipeline(Je.main.pipe),lt.dispatchWorkgroups(1,Oe,et)),yt&&(lt.setPipeline(Je.bg.pipe),lt.dispatchWorkgroups(1,1,1)),lt.end(),Se.push("conv0")}}else{const Oe=gt,et=E[Pe],yt=x[Pe],{mainCount:lt,extCount:nt,layerBaseSlot:me}=Me,we=ye.mode==="rpure"&&!!ye.bgStrip;for(let pe=0;pe<8;pe++){if(pe>=2){const Ne=pe-2,Le=ye.isFull||lt[Ne]>0,At=!ye.isFull&&ye.mode==="bwd"&&nt[Ne]>0;if(Le||At){const Re=fe.beginComputePass();Re.setPipeline(tt.pipe),Le&&(Re.setBindGroup(0,yt,[(me+8+Ne)*J]),Re.dispatchWorkgroups(1,ye.isFull?64:1,ye.isFull?32:lt[Ne])),At&&(Re.setBindGroup(0,yt,[(me+14+Ne)*J]),Re.dispatchWorkgroups(1,1,nt[Ne])),Re.end(),Se.push("flushStage")}}const rt=ye.isFull||lt[pe]>0,$t=!ye.isFull&&ye.mode==="bwd"&&nt[pe]>0,vt=pe===0&&we;if(!rt&&!$t&&!vt)continue;const xt=[(me+pe)*J],_t=ye.isFull?64:1,Ut=ye.isFull?32:lt[pe];if(_.halfPassConv)for(const[Ne,Le,At]of[[Oe.lo,Oe.extLo,Oe.bgLo],[Oe.hi,Oe.extHi,Oe.bgHi]]){const Re=fe.beginComputePass();Re.setBindGroup(0,et,xt),rt&&(Re.setPipeline(Ne.pipe),Re.dispatchWorkgroups(1,_t,Ut)),$t&&(Re.setPipeline(Le.pipe),Re.dispatchWorkgroups(1,1,nt[pe])),vt&&(Re.setPipeline(At.pipe),Re.dispatchWorkgroups(1,1,1)),Re.end(),Se.push("convHidden")}else{const Ne=fe.beginComputePass();Ne.setBindGroup(0,et,xt),rt&&(Ne.setPipeline(Oe.main.pipe),Ne.dispatchWorkgroups(1,_t,Ut)),$t&&(Ne.setPipeline(Oe.ext.pipe),Ne.dispatchWorkgroups(1,1,nt[pe])),vt&&(Ne.setPipeline(Oe.bg.pipe),Ne.dispatchWorkgroups(1,1,1)),Ne.end(),Se.push("convHidden")}}}const It=Pe+1<l?n.w0Vec4s+Pe*n.hiddenVec4PerLayer:0;ge[0]=Pe*n.metaStride,ge[1]=It,ge[2]=(Pe+1)*n.metaStride,ge[3]=Pe+1<l?1:0,ge[4]=Pe===0?1:0,ge[5]=ye.isFull?1:0,ge[6]=He,ge[7]=at*8,ve[8]=ye.extWeight||0,ge[9]=0,ge[10]=0,ge[11]=0,e.queue.writeBuffer(re[Pe],0,ge);{const Oe=fe.beginComputePass();Oe.setBindGroup(0,Vt[Pe]),Oe.setPipeline(Ge.pipe),Oe.dispatchWorkgroups(t.cs,1,1),Oe.end(),Se.push("momentsPrep")}if(Pe+1<l){{const et=fe.beginComputePass();et.setBindGroup(0,Vt[Pe]),et.setPipeline(Ie.pipe),et.dispatchWorkgroups(1,1,1),et.end(),Se.push("momentsPrep")}const Oe=ye.isFull?0:ct;if((Oe>0||Ze>0)&&(Oe>0&&be.set(ye.normStrips,0),Ze>0&&be.set(ye.haloRows,Oe),e.queue.writeBuffer(A[Pe],0,be.subarray(0,Oe+Ze))),xe[0]=ye.isFull?1:0,xe[1]=ye.bgStrip?ye.bgStrip.z*L+ye.bgStrip.yWg*4:0,xe[2]=Oe,xe[3]=Ze,e.queue.writeBuffer(oe[Pe],0,xe),ye.isFull||ct>0||Ze>0){const et=fe.beginComputePass();et.setBindGroup(0,Mt[Pe]),(ye.isFull||ct>0)&&(et.setPipeline(De.pipe),et.dispatchWorkgroups(1,ye.isFull?64:1,ye.isFull?L:ct)),Ze>0&&(et.setPipeline(Ee.pipe),et.dispatchWorkgroups(1,Math.ceil(Ze/4),1)),et.end(),Se.push("normHalo")}}}return Te.__passCategories=Se,Pt.finishAndReadback({enc:fe,schedule:Qe,passCategories:Se,u4Tmp:xe,ioOpts:H})}const Fe=Ln(e),St=typeof(H==null?void 0:H.onProgress)=="function"?H.onProgress:null,Lt=cr(Qe,l);let zt=0,Gt=-1;const nn=fe=>{if(!St)return;const Pe=Math.min(.99,zt/Lt);let Me="";fe>=0&&fe!==Gt&&(Gt=fe,Me=`Layer ${fe+1}/${l}`),St(Pe,Me)},je=ur(e,e.__v4MsPerStrip||.12,nn);let _e=e.createCommandEncoder();Ye.runPrePasses(_e,Se),Qe.clsSkipped&&(_e.clearBuffer(ce,0,f),Qe.clsStrips.length>0&&e.queue.writeBuffer(j,0,Qe.clsStrips));for(let fe=0;fe<l;fe++){const Pe=qe[fe],{L:Me,nMain:ye,nHalo:He}=Pe,Ze=Me.nMomExt||0,at=Me.isFull?st:Me.normStrips?Me.normStrips.length:0,ct=ms(Me,fe,l);if(fe===0){const Oe=Me.isFull?64:1,et=Me.isFull?L:ye,yt=!!(Me.bgStrip&&He>0);if(xe[0]=Me.isFull?1:0,xe[1]=Me.bgStrip?Me.bgStrip.yWg*4:0,xe[2]=Me.bgStrip?Me.bgStrip.z:0,xe[3]=0,e.queue.writeBuffer(K,0,xe),_.halfPass0)for(const[lt,nt]of[[Je.lo,Je.bgLo],[Je.hi,Je.bgHi]]){const me=_e.beginComputePass();me.setBindGroup(0,Dt),et>0&&(me.setPipeline(lt.pipe),me.dispatchWorkgroups(1,Oe,et)),yt&&(me.setPipeline(nt.pipe),me.dispatchWorkgroups(1,1,1)),me.end(),Se.push("conv0")}else{const lt=_e.beginComputePass();lt.setBindGroup(0,Dt),et>0&&(lt.setPipeline(Je.main.pipe),lt.dispatchWorkgroups(1,Oe,et)),yt&&(lt.setPipeline(Je.bg.pipe),lt.dispatchWorkgroups(1,1,1)),lt.end(),Se.push("conv0")}Ke==="calibrate"?(e.queue.submit([_e.finish()]),_e=e.createCommandEncoder()):Ke==="paced"&&(zt+=ct.convWork,_e=yield je.submitChunk(_e,ct.convWork,0,{forceUiYield:!0}))}else{const Oe=gt,et=E[fe],yt=x[fe],{mainCount:lt,extCount:nt,layerBaseSlot:me}=Pe,we=Me.mode==="rpure"&&!!Me.bgStrip;let pe=0;for(let rt=0;rt<8;rt++){if(rt>=2){const _t=rt-2,Ut=Me.isFull||lt[_t]>0,Ne=!Me.isFull&&Me.mode==="bwd"&&nt[_t]>0;if(Ut||Ne){const Le=_e.beginComputePass();Le.setPipeline(tt.pipe),Ut&&(Le.setBindGroup(0,yt,[(me+8+_t)*J]),Le.dispatchWorkgroups(1,Me.isFull?64:1,Me.isFull?32:lt[_t])),Ne&&(Le.setBindGroup(0,yt,[(me+14+_t)*J]),Le.dispatchWorkgroups(1,1,nt[_t])),Le.end(),Se.push("flushStage")}}const $t=Me.isFull||lt[rt]>0,vt=!Me.isFull&&Me.mode==="bwd"&&nt[rt]>0,xt=rt===0&&we;if($t||vt||xt){const _t=[(me+rt)*J],Ut=Me.isFull?64:1,Ne=Me.isFull?32:lt[rt];if(_.halfPassConv)for(const[Le,At,Re]of[[Oe.lo,Oe.extLo,Oe.bgLo],[Oe.hi,Oe.extHi,Oe.bgHi]]){const Ht=_e.beginComputePass();Ht.setBindGroup(0,et,_t),$t&&(Ht.setPipeline(Le.pipe),Ht.dispatchWorkgroups(1,Ut,Ne)),vt&&(Ht.setPipeline(At.pipe),Ht.dispatchWorkgroups(1,1,nt[rt])),xt&&(Ht.setPipeline(Re.pipe),Ht.dispatchWorkgroups(1,1,1)),Ht.end(),Se.push("convHidden")}else{const Le=_e.beginComputePass();Le.setBindGroup(0,et,_t),$t&&(Le.setPipeline(Oe.main.pipe),Le.dispatchWorkgroups(1,Ut,Ne)),vt&&(Le.setPipeline(Oe.ext.pipe),Le.dispatchWorkgroups(1,1,nt[rt])),xt&&(Le.setPipeline(Oe.bg.pipe),Le.dispatchWorkgroups(1,1,1)),Le.end(),Se.push("convHidden")}pe+=($t?Me.isFull?2048:lt[rt]:0)+(vt?nt[rt]:0)}if(Ke==="calibrate"&&(pe>=512||rt===7&&pe>0)){const _t=performance.now();e.queue.submit([_e.finish()]),yield e.queue.onSubmittedWorkDone();const Ut=performance.now()-_t;if(_e=e.createCommandEncoder(),zt+=pe,pe>=512){const Ne=Ut/pe,Le=Ne*st;e.__v4WinCalibrated=!0,je.setMsPerStrip(Ne),!Fe.isWindowsSharedIgpu&&Le<er?(e.__v4WinFast=!0,Ke="pipelined",console.log(`[WebGPU-V4-128M] Windows GPU calibration: estFullLayer=${Le.toFixed(1)}ms -> unthrottled pipelined mode`)):(e.__v4WinFast=!1,Ke="paced",console.log(`[WebGPU-V4-128M] Windows GPU calibration: estFullLayer=${Le.toFixed(1)}ms -> TDR-safe 2-in-flight paced mode`),nn(fe))}pe=0}else Ke==="paced"&&pe>0&&(pe*je.getMsPerStrip()>=tr*.75||rt===7)&&(zt+=pe,_e=yield je.submitChunk(_e,pe,fe),pe=0)}}const It=fe+1<l?n.w0Vec4s+fe*n.hiddenVec4PerLayer:0;ge[0]=fe*n.metaStride,ge[1]=It,ge[2]=(fe+1)*n.metaStride,ge[3]=fe+1<l?1:0,ge[4]=fe===0?1:0,ge[5]=Me.isFull?1:0,ge[6]=ye,ge[7]=Ze*8,ve[8]=Me.extWeight||0,ge[9]=0,ge[10]=0,ge[11]=0,e.queue.writeBuffer(re[fe],0,ge);{const Oe=_e.beginComputePass();Oe.setBindGroup(0,Vt[fe]),Oe.setPipeline(Ge.pipe),Oe.dispatchWorkgroups(t.cs,1,1),Oe.end(),Se.push("momentsPrep")}if(fe+1<l){{const et=_e.beginComputePass();et.setBindGroup(0,Vt[fe]),et.setPipeline(Ie.pipe),et.dispatchWorkgroups(1,1,1),et.end(),Se.push("momentsPrep")}const Oe=Me.isFull?0:at;if((Oe>0||He>0)&&(Oe>0&&be.set(Me.normStrips,0),He>0&&be.set(Me.haloRows,Oe),e.queue.writeBuffer(A[fe],0,be.subarray(0,Oe+He))),xe[0]=Me.isFull?1:0,xe[1]=Me.bgStrip?Me.bgStrip.z*L+Me.bgStrip.yWg*4:0,xe[2]=Oe,xe[3]=He,e.queue.writeBuffer(oe[fe],0,xe),Me.isFull||at>0||He>0){const et=_e.beginComputePass();et.setBindGroup(0,Mt[fe]),(Me.isFull||at>0)&&(et.setPipeline(De.pipe),et.dispatchWorkgroups(1,Me.isFull?64:1,Me.isFull?L:at)),He>0&&(et.setPipeline(Ee.pipe),et.dispatchWorkgroups(1,Math.ceil(He/4),1)),et.end(),Se.push("normHalo")}}Ke==="pipelined"?(e.queue.submit([_e.finish()]),_e=e.createCommandEncoder()):Ke==="calibrate"?(e.queue.submit([_e.finish()]),yield e.queue.onSubmittedWorkDone(),_e=e.createCommandEncoder(),zt+=(fe===0?ct.convWork:0)+ct.normWork,fe===l-1&&!e.__v4WinCalibrated&&(e.__v4WinCalibrated=!0,e.__v4WinFast=!Fe.isWindowsSharedIgpu)):(zt+=ct.normWork,_e=yield je.submitChunk(_e,ct.normWork,fe))}return Ke==="paced"&&(yield je.waitBeforeFinalSubmit()),Te.__passCategories=Se,Pt.finishAndReadback({enc:_e,schedule:Qe,passCategories:Se,u4Tmp:xe,ioOpts:H,paced:Ke==="paced",onProgress:St})})}return Pt.warmupIoPipelines(),Te.dispose=({keepSharedWorkspace:te=!1}={})=>{Pt.dispose();for(const H of X)H.destroy();if(X.length=0,Q.resetBytes(),M.pooled)te?M.inUse=!1:on.get(e)===M&&wn(e);else{for(const H of M.buffers)H.destroy();M.buffers.length=0}},Te.gpuBytes=()=>M.bytes+Q.getBytes(),Te.__passCategories=[],Te.__coneInfo=()=>({paddedVox:k,actMiB:m/1048576,mode:"LowMem128"}),Te.kernels="v4-int8",Te})}const Pr=!0;function _s(r,i,o){return ze(this,arguments,function*(e,t,n,s={}){os++;try{return yield Xo(e,t,n,s)}finally{os--}})}function Xo(r,i,o){return ze(this,arguments,function*(e,t,n,s={}){var Lt,zt,Gt,nn;const a=t instanceof Uint8Array?t:new Uint8Array(t),f=Ks(a.buffer.slice(a.byteOffset,a.byteOffset+a.byteLength)),l=Zs(f);s!=null&&s.classifierBias&&l.classifier&&(l.classifier.bias=Float32Array.from(s.classifierBias));const c=ps(s),m=(s==null?void 0:s.dilations)||(c==null?void 0:c.dilations)||(l.convs.length===25?[16,8,4,2,1,16,8,4,2,1,16,8,4,2,1,16,8,4,2,1,16,8,4,2,1]:l.convs.length===9?[1,2,4,8,16,8,4,2,1]:rs),d=(s==null?void 0:s.activation)||(c==null?void 0:c.activation)||(l.affines.length||l.convs.length>=13?"gelu_tanh":"relu"),u=l.convs[0].outC,p=u>8?Math.ceil(u/8)*8:Math.ceil(u/4)*4,g=Qs(l,{nx:L,ny:L,nz:L,cs:p,activation:d,dilations:m}),v=Oo(a,l,g,s),P=(s==null?void 0:s.outputType)==="probability"?Lo(s,g.nclass):null,_=!!((zt=(Lt=e.features)==null?void 0:Lt.has)!=null&&zt.call(Lt,"shader-f16"))&&!(s!=null&&s.disableF16),h=ar(e,s),w=L*L*L,y=P?w*4:w,b=g.cs>=16,k=b?g.cs/2:g.cs,F=L*L*k*mt*4,$=L*L*k*wt*4,B=e.limits||{},S=Math.min((Gt=B.maxStorageBufferBindingSize)!=null?Gt:1/0,(nn=B.maxBufferSize)!=null?nn:1/0),M=or(e,g,s);if((s!=null&&s.forceLowMem128||M||F>S||y>S)&&g.cs>=8&&g.cs%4===0)return jo(e,g,v,_,h,s,P);if(F>S||y>S){const je=Math.max(F,y)>>>20;throw new Error(`meshnet_fast_v4: buffer (${je} MiB) exceeds device limit (${S>>>20} MiB)`)}const z=rr(e,s),R=Sr({cs:g.cs,chan:g.chan,nclass:g.nclass,clsK4:v.clsK4,dilations:g.dilations,activation:g.activation,norm:g.norm,hasF16:_,subgroupMode:h,splitHalves:b,probCfg:P,chunkableStd:z});console.log(`[WebGPU-V4] ${g.chan}ch(cs=${g.cs})/${g.nclass}cls (${g.dilations.length} convs, ${g.activation}, norm=${g.norm}${P?", prob=3":""}) | ${_?"f16+sterbenz":"f32"} | ${ir(h)} | ZYCX-pad80 | maxBuf=${(Math.max(F,y)/1048576).toFixed(1)} MiB`);const G=GPUBufferUsage.STORAGE,T=GPUBufferUsage.COPY_DST,C=GPUBufferUsage.COPY_SRC,I=L*L*cn,ie=I*(_?2:4),ce=Fn*g.cs*16,N=Js*g.cs*16,W=(g.cs*2+4)*16,X=_?Math.ceil(R.totalWEffVec4s/2)*16:R.totalWEffVec4s*16,Q=`std|${g.cs}|${b?1:0}|${_?1:0}|${y}`,O=mr(e,Q,()=>{const je=[],_e=En(e,je),fe=_e.alloc,Pe={inpBuf:fe(ie,G|T|C),act8_0:fe(F,G|T|C),act8_1:fe(b?F:16,G|T|C),y8_0:fe($,G|T|C),y8_1:fe(b?$:16,G|T|C),momMainBuf:fe(ce,G),momExtBuf:fe(N,G),momStatsBuf:fe(W,G),labels8Buf:fe(y,G|T|C),readbackBuf:fe(y,GPUBufferUsage.MAP_READ|T)};return{buffers:je,named:Pe,bytes:_e.getBytes()}}),{inpBuf:le,act8_0:ue,act8_1:Ce,y8_0:ke,y8_1:Ae,momMainBuf:j,momExtBuf:ee,momStatsBuf:A,labels8Buf:K,readbackBuf:D}=O.named,re=[],oe=En(e,re),J=oe.alloc,V=J(_?v.wF16.byteLength:v.wF32.byteLength,G|T),Z=J(v.qmetaF32.byteLength,G|T),q=J(X,R.useUniformWeff?G|GPUBufferUsage.UNIFORM:G),he=g.dilations.length,se=g.norm==="gn"&&!(s!=null&&s.disableConeSkip),Ue=Array.from({length:he},()=>J(se?st*4:16,G|T)),Be=Array.from({length:he-1},()=>J(se?(st+L*L)*4:16,G|T)),Ge=J(se?st*4:16,G|T),Ie=J(16,GPUBufferUsage.UNIFORM|T),tt=J(16,GPUBufferUsage.UNIFORM|T),De=Array.from({length:he},()=>J(48,GPUBufferUsage.UNIFORM|T)),Ee=Array.from({length:he-1},()=>J(16,GPUBufferUsage.UNIFORM|T)),$e=Math.max(256,B.minUniformBufferOffsetAlignment||256),Je=$e>>>2,gt=R.chunkableStd?Math.max(1,(he-1)*Xn):0,ut=R.chunkableStd?J(gt*$e,GPUBufferUsage.UNIFORM|T):null,dt=R.chunkableStd?new Uint32Array(gt*Je):null,Bt=R.chunkableStd?null:Array.from({length:he},()=>J(16,GPUBufferUsage.UNIFORM|T));e.queue.writeBuffer(V,0,_?v.wF16:v.wF32),e.queue.writeBuffer(Z,0,v.qmetaF32);let Dt;try{Dt=yield br(e,g,v,_,h,b,P,R)}catch(je){for(const _e of re)_e.destroy();if(re.length=0,O.pooled)on.get(e)===O&&wn(e);else{for(const _e of O.buffers)_e.destroy();O.buffers.length=0}throw je}const{pInit:Ft,pMomFin:Y,pPrepW:tn,pNorm:Pt,pNormHalo:Vt,pCls:Mt,pConv0:ht,pConv:x}=Dt,U=(je,_e)=>e.createBindGroup({layout:je,entries:_e.map((fe,Pe)=>({binding:Pe,resource:fe&&fe.buffer?fe:{buffer:fe}}))}),E=U(Ft.bgl,[ue,Ce]);{const je=e.createCommandEncoder(),_e=je.beginComputePass();_e.setPipeline(Ft.pipe),_e.setBindGroup(0,E),_e.dispatchWorkgroups(1,L,L),_e.end(),e.queue.submit([je.finish()])}const de=(R.halfPass0?ht.lo:ht.main).bgl,ne=U(de,[le,ke,Ae,V,Z,j,ee,Ue[0],Ie]),We=U(Mt.bgl,[ke,Ae,V,Z,j,A,K,Ge,tt]),be=!!(P&&b&&F>=y&&$>=y),ge=be?J(16,GPUBufferUsage.UNIFORM|T):null,ve=be?U(Mt.bgl,[ke,Ae,V,Z,j,A,K,Ge,ge]):null,xe=xr({device:e,hasF16:_,nvox:w,outBufBytes:y,inpBuf:le,act8_0:ue,labels8Buf:K,readbackBuf:D,pInit:Ft,bgInit:E,pCls:Mt,bgCls:We,clsUbo:tt,packed:v,modelEntry:s,probCfg:P,canGpuProb:be,probSlots:be?{clsUbo1:ge,bgCls1:ve,pass0HoldBuf:ue,y0:ke,y1:Ae,b:Ce,sup:ue}:null,ownedBuffers:re,mkBuf:J}),Xe=De.map((je,_e)=>U(Y.bgl,[V,Z,j,ee,A,q,Ue[_e],je])),Te=Ee.map((je,_e)=>U(Pt.bgl,[ue,Ce,ke,Ae,j,ee,A,Be[_e],je])),ot=R.chunkableStd?{buffer:ut,offset:0,size:32}:null,Ve=R.halfPassConv?x.lo:x.main,te=Array.from({length:he},(je,_e)=>_e===0?null:U(Ve.bgl,[ue,Ce,ke,Ae,j,ee,q,Ue[_e],R.chunkableStd?ot:Bt[_e]])),H=(je,_e,fe,Pe,Me,ye)=>{const He=je*Je;dt[He]=_e?1:0,dt[He+1]=fe,dt[He+2]=Pe,dt[He+3]=0,dt[He+4]=Me,dt[He+5]=ye,dt[He+6]=0,dt[He+7]=0},ae=(je,_e,fe,Pe,Me,ye,He,Ze)=>{if(!(ye<=0&&He<=0))if(R.halfPassConv){{const at=je.beginComputePass();Pe?at.setBindGroup(0,fe,Pe):at.setBindGroup(0,fe),ye>0&&(at.setPipeline(_e.lo.pipe),at.dispatchWorkgroups(1,Me,ye)),He>0&&(at.setPipeline(_e.extLo.pipe),at.dispatchWorkgroups(1,1,He)),at.end(),Ze.push("convHidden")}{const at=je.beginComputePass();Pe?at.setBindGroup(0,fe,Pe):at.setBindGroup(0,fe),ye>0&&(at.setPipeline(_e.hi.pipe),at.dispatchWorkgroups(1,Me,ye)),He>0&&(at.setPipeline(_e.extHi.pipe),at.dispatchWorkgroups(1,1,He)),at.end(),Ze.push("convHidden")}}else{const at=je.beginComputePass();Pe?at.setBindGroup(0,fe,Pe):at.setBindGroup(0,fe),ye>0&&(at.setPipeline(_e.main.pipe),at.dispatchWorkgroups(1,Me,ye)),He>0&&(at.setPipeline(_e.ext.pipe),at.dispatchWorkgroups(1,1,He)),at.end(),Ze.push("convHidden")}},Ye=_?new Uint16Array(I):new Float32Array(I),it=new Uint8Array(L*L),Qe=new Uint32Array(st),qe=new Uint32Array(st+L*L),Ke=new Uint32Array(12),Se=new Float32Array(Ke.buffer),Fe=new Uint32Array(4);function St(je,_e){return ze(this,null,function*(){if(je.length!==w)throw new Error(`meshnet_fast_v4 expected ${w} voxels, got ${je.length}`);const fe=g.norm==="gn"&&!(s!=null&&s.disableConeSkip),Pe=yield xe.prepareInput({volume:je,ioOpts:_e,useCone:fe,padInputHost:Ye,headRowHost:it,hasF16Flag:_}),Me=Pe.info,ye=hr(it,Me,g.dilations,fe);let He=sr(e,s);const Ze=[];if(He==="single"&&!R.chunkableStd){const me=e.createCommandEncoder();Pe.runPrePasses(me,Ze),ye.clsSkipped&&(me.clearBuffer(K,0,y),ye.clsStrips.length>0&&e.queue.writeBuffer(Ge,0,ye.clsStrips));for(let we=0;we<he;we++){const pe=ye.layers[we],rt=pe.isFull?st:pe.mainStrips.length,$t=pe.isFull||!pe.extStrips?0:pe.extStrips.length,vt=pe.nMomExt||0,xt=pe.haloRows?pe.haloRows.length:0,_t=pe.isFull?st:pe.normStrips?pe.normStrips.length:0;if(!pe.isFull&&(rt>0||$t>0)&&(rt>0&&Qe.set(pe.mainStrips,0),$t>0&&Qe.set(pe.extStrips,rt),e.queue.writeBuffer(Ue[we],0,Qe.subarray(0,rt+$t))),we===0){const Ne=pe.isFull?64:1,Le=pe.isFull?L:rt,At=!!(pe.bgStrip&&xt>0);if(Fe[0]=pe.isFull?1:0,Fe[1]=pe.bgStrip?pe.bgStrip.yWg*4:0,Fe[2]=pe.bgStrip?pe.bgStrip.z:0,Fe[3]=0,e.queue.writeBuffer(Ie,0,Fe),R.halfPass0){{const Re=me.beginComputePass();Re.setBindGroup(0,ne),Le>0&&(Re.setPipeline(ht.lo.pipe),Re.dispatchWorkgroups(1,Ne,Le)),At&&(Re.setPipeline(ht.bgLo.pipe),Re.dispatchWorkgroups(1,1,1)),Re.end(),Ze.push("conv0")}{const Re=me.beginComputePass();Re.setBindGroup(0,ne),Le>0&&(Re.setPipeline(ht.hi.pipe),Re.dispatchWorkgroups(1,Ne,Le)),At&&(Re.setPipeline(ht.bgHi.pipe),Re.dispatchWorkgroups(1,1,1)),Re.end(),Ze.push("conv0")}}else{const Re=me.beginComputePass();Re.setBindGroup(0,ne),Le>0&&(Re.setPipeline(ht.main.pipe),Re.dispatchWorkgroups(1,Ne,Le)),At&&(Re.setPipeline(ht.bg.pipe),Re.dispatchWorkgroups(1,1,1)),Re.end(),Ze.push("conv0")}}else{const Ne=g.dilations[we],Le=te[we],At=pe.isFull?64:1,Re=pe.isFull?L:rt,Ht=pe.mode==="rpure"&&xt>0||pe.mode==="bwd"&&we+1<he;Fe[0]=pe.isFull?1:0,Fe[1]=rt,Fe[2]=as(Ne,Ht),Fe[3]=0,e.queue.writeBuffer(Bt[we],0,Fe),ae(me,x,Le,null,At,Re,$t,Ze)}const Ut=we+1<he?v.w0Vec4s+we*v.hiddenVec4PerLayer:0;Ke[0]=we*v.metaStride,Ke[1]=Ut,Ke[2]=(we+1)*v.metaStride,Ke[3]=we+1<he?1:0,Ke[4]=we===0?1:0,Ke[5]=pe.isFull?1:0,Ke[6]=rt,Ke[7]=vt*8,Se[8]=pe.extWeight||0,Ke[9]=0,Ke[10]=0,Ke[11]=0,e.queue.writeBuffer(De[we],0,Ke);{const Ne=me.beginComputePass();Ne.setBindGroup(0,Xe[we]),Ne.setPipeline(Y.pipe),Ne.dispatchWorkgroups(g.cs,1,1),Ne.end(),Ze.push("momentsPrep")}if(we+1<he){{const Le=me.beginComputePass();Le.setBindGroup(0,Xe[we]),Le.setPipeline(tn.pipe),Le.dispatchWorkgroups(1,1,1),Le.end(),Ze.push("momentsPrep")}const Ne=pe.isFull?0:_t;if((Ne>0||xt>0)&&(Ne>0&&qe.set(pe.normStrips,0),xt>0&&qe.set(pe.haloRows,Ne),e.queue.writeBuffer(Be[we],0,qe.subarray(0,Ne+xt))),Fe[0]=pe.isFull?1:0,Fe[1]=pe.bgStrip?pe.bgStrip.z*L+pe.bgStrip.yWg*4:0,Fe[2]=Ne,Fe[3]=xt,e.queue.writeBuffer(Ee[we],0,Fe),pe.isFull||_t>0||xt>0){const Le=me.beginComputePass();Le.setBindGroup(0,Te[we]),(pe.isFull||_t>0)&&(Le.setPipeline(Pt.pipe),Le.dispatchWorkgroups(1,pe.isFull?64:1,pe.isFull?L:_t)),xt>0&&(Le.setPipeline(Vt.pipe),Le.dispatchWorkgroups(1,Math.ceil(xt/4),1)),Le.end(),Ze.push("normHalo")}}}return St.__passCategories=Ze,xe.finishAndReadback({enc:me,schedule:ye,passCategories:Ze,u4Tmp:Fe,ioOpts:_e})}const at=Ln(e),ct=typeof(_e==null?void 0:_e.onProgress)=="function"?_e.onProgress:null,It=cr(ye,he);let Oe=0,et=-1;const yt=me=>{if(!ct)return;const we=Math.min(.99,Oe/It);let pe="";me>=0&&me!==et&&(et=me,pe=`Layer ${me+1}/${he}`),ct(we,pe)},lt=ur(e,e.__v4MsPerStrip||.12,yt);let nt=e.createCommandEncoder();Pe.runPrePasses(nt,Ze),ye.clsSkipped&&(nt.clearBuffer(K,0,y),ye.clsStrips.length>0&&e.queue.writeBuffer(Ge,0,ye.clsStrips));for(let me=0;me<he;me++){const we=ye.layers[me],pe=we.isFull?st:we.mainStrips.length,rt=we.isFull||!we.extStrips?0:we.extStrips.length,$t=we.nMomExt||0,vt=we.haloRows?we.haloRows.length:0,xt=we.isFull?st:we.normStrips?we.normStrips.length:0,_t=ms(we,me,he);if(!we.isFull&&(pe>0||rt>0)&&(pe>0&&Qe.set(we.mainStrips,0),rt>0&&Qe.set(we.extStrips,pe),e.queue.writeBuffer(Ue[me],0,Qe.subarray(0,pe+rt))),me===0){const Ne=we.isFull?64:1,Le=we.isFull?L:pe,At=!!(we.bgStrip&&vt>0);if(Fe[0]=we.isFull?1:0,Fe[1]=we.bgStrip?we.bgStrip.yWg*4:0,Fe[2]=we.bgStrip?we.bgStrip.z:0,Fe[3]=0,e.queue.writeBuffer(Ie,0,Fe),R.halfPass0){{const Re=nt.beginComputePass();Re.setBindGroup(0,ne),Le>0&&(Re.setPipeline(ht.lo.pipe),Re.dispatchWorkgroups(1,Ne,Le)),At&&(Re.setPipeline(ht.bgLo.pipe),Re.dispatchWorkgroups(1,1,1)),Re.end(),Ze.push("conv0")}{const Re=nt.beginComputePass();Re.setBindGroup(0,ne),Le>0&&(Re.setPipeline(ht.hi.pipe),Re.dispatchWorkgroups(1,Ne,Le)),At&&(Re.setPipeline(ht.bgHi.pipe),Re.dispatchWorkgroups(1,1,1)),Re.end(),Ze.push("conv0")}}else{const Re=nt.beginComputePass();Re.setBindGroup(0,ne),Le>0&&(Re.setPipeline(ht.main.pipe),Re.dispatchWorkgroups(1,Ne,Le)),At&&(Re.setPipeline(ht.bg.pipe),Re.dispatchWorkgroups(1,1,1)),Re.end(),Ze.push("conv0")}He==="calibrate"?(e.queue.submit([nt.finish()]),nt=e.createCommandEncoder()):He==="paced"&&(Oe+=_t.convWork,nt=yield lt.submitChunk(nt,_t.convWork,0,{forceUiYield:!0}))}else{const Ne=g.dilations[me],Le=te[me],At=we.isFull?64:1,Re=we.isFull?L:pe,Ht=we.mode==="rpure"&&vt>0||we.mode==="bwd"&&me+1<he,Mn=as(Ne,Ht);if(!R.chunkableStd)Fe[0]=we.isFull?1:0,Fe[1]=pe,Fe[2]=Mn,Fe[3]=0,e.queue.writeBuffer(Bt[me],0,Fe),ae(nt,x,Le,null,At,Re,rt,Ze);else if(He==="pipelined"||He==="single"){const jt=(me-1)*Xn;H(jt,we.isFull,pe,Mn,0,0),e.queue.writeBuffer(ut,jt*$e,dt.subarray(jt*Je,(jt+1)*Je)),ae(nt,x,Le,[jt*$e],At,Re,rt,Ze)}else{const jt=(me-1)*Xn,On=He==="calibrate"?1024:Math.max(256,Math.min(4096,Math.round(tr/Math.max(.005,lt.getMsPerStrip())))),vn=[];let zn=0;if(we.isFull){const Qt=Math.max(4,Math.min(64,Math.round(On/64)));for(let Et=0;Et<L;Et+=Qt){const Wt=Math.min(Qt,L-Et),Jt=jt+zn++;H(Jt,!0,pe,Mn,Et,0),vn.push({slotIdx:Jt,mainY:64,mainCountZ:Wt,extCountZ:0,strips:Wt*64})}}else{const Qt=Math.max(256,On);for(let Wt=0;Wt<pe;Wt+=Qt){const Jt=Math.min(Qt,pe-Wt),mn=jt+zn++;H(mn,!1,pe,Mn,Wt,0),vn.push({slotIdx:mn,mainY:1,mainCountZ:Jt,extCountZ:0,strips:Jt})}const Et=Math.max(256,On);for(let Wt=0;Wt<rt;Wt+=Et){const Jt=Math.min(Et,rt-Wt),mn=jt+zn++;H(mn,!1,pe,Mn,0,Wt),vn.push({slotIdx:mn,mainY:1,mainCountZ:0,extCountZ:Jt,strips:Jt})}}zn>0&&e.queue.writeBuffer(ut,jt*$e,dt.subarray(jt*Je,(jt+zn)*Je));let Zt=0;for(let Qt=0;Qt<vn.length;Qt++){const Et=vn[Qt];if(ae(nt,x,Le,[Et.slotIdx*$e],Et.mainY,Et.mainCountZ,Et.extCountZ,Ze),He==="pipelined")continue;Zt+=Et.strips;const Wt=Qt===vn.length-1;if(He==="calibrate"&&(Zt>=512||Wt&&Zt>0)){const Jt=performance.now();e.queue.submit([nt.finish()]),yield e.queue.onSubmittedWorkDone();const mn=performance.now()-Jt;if(nt=e.createCommandEncoder(),Oe+=Zt,Zt>=512){const ws=mn/Zt,Nn=ws*st;e.__v4WinCalibrated=!0,lt.setMsPerStrip(ws),!at.isWindowsSharedIgpu&&Nn<er?(e.__v4WinFast=!0,He="pipelined",console.log(`[WebGPU-V4] Windows GPU calibration: estFullLayer=${Nn.toFixed(1)}ms -> unthrottled pipelined mode`)):(e.__v4WinFast=!1,He="paced",console.log(`[WebGPU-V4] Windows GPU calibration: estFullLayer=${Nn.toFixed(1)}ms -> TDR-safe 2-in-flight paced mode`),yt(me))}Zt=0}else He==="paced"&&(Oe+=Zt,nt=yield lt.submitChunk(nt,Zt,me),Zt=0)}}}const Ut=me+1<he?v.w0Vec4s+me*v.hiddenVec4PerLayer:0;Ke[0]=me*v.metaStride,Ke[1]=Ut,Ke[2]=(me+1)*v.metaStride,Ke[3]=me+1<he?1:0,Ke[4]=me===0?1:0,Ke[5]=we.isFull?1:0,Ke[6]=pe,Ke[7]=$t*8,Se[8]=we.extWeight||0,Ke[9]=0,Ke[10]=0,Ke[11]=0,e.queue.writeBuffer(De[me],0,Ke);{const Ne=nt.beginComputePass();Ne.setBindGroup(0,Xe[me]),Ne.setPipeline(Y.pipe),Ne.dispatchWorkgroups(g.cs,1,1),Ne.end(),Ze.push("momentsPrep")}if(me+1<he){{const Le=nt.beginComputePass();Le.setBindGroup(0,Xe[me]),Le.setPipeline(tn.pipe),Le.dispatchWorkgroups(1,1,1),Le.end(),Ze.push("momentsPrep")}const Ne=we.isFull?0:xt;if((Ne>0||vt>0)&&(Ne>0&&qe.set(we.normStrips,0),vt>0&&qe.set(we.haloRows,Ne),e.queue.writeBuffer(Be[me],0,qe.subarray(0,Ne+vt))),Fe[0]=we.isFull?1:0,Fe[1]=we.bgStrip?we.bgStrip.z*L+we.bgStrip.yWg*4:0,Fe[2]=Ne,Fe[3]=vt,e.queue.writeBuffer(Ee[me],0,Fe),we.isFull||xt>0||vt>0){const Le=nt.beginComputePass();Le.setBindGroup(0,Te[me]),(we.isFull||xt>0)&&(Le.setPipeline(Pt.pipe),Le.dispatchWorkgroups(1,we.isFull?64:1,we.isFull?L:xt)),vt>0&&(Le.setPipeline(Vt.pipe),Le.dispatchWorkgroups(1,Math.ceil(vt/4),1)),Le.end(),Ze.push("normHalo")}}if(He==="pipelined")e.queue.submit([nt.finish()]),nt=e.createCommandEncoder();else if(He==="calibrate")e.queue.submit([nt.finish()]),yield e.queue.onSubmittedWorkDone(),nt=e.createCommandEncoder(),Oe+=(me===0||!R.chunkableStd?_t.convWork:0)+_t.normWork,me===he-1&&!e.__v4WinCalibrated&&(e.__v4WinCalibrated=!0,e.__v4WinFast=!at.isWindowsSharedIgpu);else if(He!=="single"){const Ne=(!R.chunkableStd&&me>0?_t.convWork:0)+_t.normWork;Oe+=Ne,nt=yield lt.submitChunk(nt,Ne,me)}}return He==="paced"&&(yield lt.waitBeforeFinalSubmit()),St.__passCategories=Ze,xe.finishAndReadback({enc:nt,schedule:ye,passCategories:Ze,u4Tmp:Fe,ioOpts:_e,paced:He==="paced",onProgress:ct})})}return xe.warmupIoPipelines(),St.dispose=({keepSharedWorkspace:je=!1}={})=>{xe.dispose();for(const _e of re)_e.destroy();if(re.length=0,oe.resetBytes(),O.pooled)je?O.inUse=!1:on.get(e)===O&&wn(e);else{for(const _e of O.buffers)_e.destroy();O.buffers.length=0}},St.gpuBytes=()=>O.bytes+oe.getBytes(),St.__passCategories=[],St.__coneInfo=()=>({paddedVox:I,actMiB:F/1048576}),St.kernels="v4-int8",St})}function bs(e){return ze(this,null,function*(){var a,f,l,c;if(!e)return;const t=()=>os>0||!!e.__isLost;if(t())return;const n=!!((f=(a=e.features)==null?void 0:a.has)!=null&&f.call(a,"shader-f16")),s=ar(e,null),r=e.limits||{},i=Math.min((l=r.maxStorageBufferBindingSize)!=null?l:1/0,(c=r.maxBufferSize)!=null?c:1/0);if(yield rn(e,n?"prep_in_u8_f16":"prep_in_u8_f32",()=>ls(!0,n),"main",["read-only-storage","storage","uniform"]),t()||(yield rn(e,"transpose_u8_v4",dr,"main",["read-only-storage","storage"]),t()))return;const o=[{chan:24,cs:24,nclass:0,dilations:rs,activation:"gelu_tanh",norm:"gn"},{chan:15,cs:16,nclass:0,dilations:[16,8,4,2,1],activation:"gelu_tanh",norm:"gn"},{chan:16,cs:16,nclass:0,dilations:rs,activation:"gelu_tanh",norm:"gn"}];for(const m of o){if(t())return;const d=m.cs>=16,u=d?m.cs/2:m.cs;if(L*L*u*mt*4>i||or(e,m,null)){const v=kr({cs:m.cs,chan:m.chan,nclass:0,clsK4:0,dilations:m.dilations,activation:m.activation,norm:m.norm,hasF16:n,subgroupMode:s,numConvs:m.dilations.length,probCfg:null});yield _r(e,m,null,n,s,null,v,{includeCls:!1,sequential:!0,shouldAbort:t})}else{const v=rr(e,null),P=Sr({cs:m.cs,chan:m.chan,nclass:0,clsK4:0,dilations:m.dilations,activation:m.activation,norm:m.norm,hasF16:n,subgroupMode:s,splitHalves:d,probCfg:null,chunkableStd:v});yield br(e,m,null,n,s,d,null,P,{includeCls:!1,sequential:!0,shouldAbort:t})}}})}const Yo=(e,t)=>ze(null,null,function*(){const n=yield fetch(t).then(s=>s.arrayBuffer());return _s(e,new Uint8Array(n))}),Ar=!0,Ko={load:Yo,setupNet:_s,warmupV4CorePipelines:bs,supportsF32Fallback:Pr,supportsGpuNativeIO:Ar},us=Object.freeze(Object.defineProperty({__proto__:null,default:Ko,releaseV4Workspace:wn,setupNet:_s,supportsF32Fallback:Pr,supportsGpuNativeIO:Ar,warmupV4CorePipelines:bs},Symbol.toStringTag,{value:"Module"}));function Zo(){var e;try{if(new URLSearchParams(((e=globalThis.location)==null?void 0:e.search)||"").get("webgpuKernels")==="tinygrad")return"disabled by ?webgpuKernels=tinygrad"}catch(t){}return null}const An=new Set(["meshnet_fast_v4","dkatlas24_int8","mindmap24_int8","model16chan18cls_int8","mindgrab_int8"]);function Qo(e){return An.has(e)}const hn=Object.assign({"./webgpu_runners/dkatlas24_f32_runner.js":()=>ft(()=>import("./dkatlas24_f32_runner-CdBMa7VZ.js"),[],import.meta.url),"./webgpu_runners/dkatlas24_int8_v3_runner.js":()=>ft(()=>import("./dkatlas24_int8_v3_runner-DFvZj3Cm.js"),__vite__mapDeps([0,1,2,3]),import.meta.url),"./webgpu_runners/dkatlas24_runner.js":()=>ft(()=>import("./dkatlas24_runner-BkVMX0Bk.js"),[],import.meta.url),"./webgpu_runners/dkatlas24_synth_f32_runner.js":()=>ft(()=>import("./dkatlas24_synth_f32_runner-Bb7lxqr0.js"),[],import.meta.url),"./webgpu_runners/dkatlas24_synth_runner.js":()=>ft(()=>import("./dkatlas24_synth_runner-5rLWbXWF.js"),[],import.meta.url),"./webgpu_runners/manual_mindgrab_runner.js":()=>ft(()=>import("./manual_mindgrab_runner-DDusGIor.js"),[],import.meta.url),"./webgpu_runners/mindgrab_runner.js":()=>ft(()=>import("./mindgrab_runner-B-UQtXej.js"),[],import.meta.url),"./webgpu_runners/mindgrab_tta_runner.js":()=>ft(()=>import("./mindgrab_tta_runner-Ct42O8D2.js"),[],import.meta.url),"./webgpu_runners/model16chan18cls_f32_runner.js":()=>ft(()=>import("./model16chan18cls_f32_runner-B5FaUMez.js"),[],import.meta.url),"./webgpu_runners/model16chan18cls_runner.js":()=>ft(()=>import("./model16chan18cls_runner-aMK3m7Gj.js"),[],import.meta.url),"./webgpu_runners/model21_104class_runner.js":()=>ft(()=>import("./model21_104class_runner-DuOJ6qrl.js"),[],import.meta.url),"./webgpu_runners/model21_f32_runner.js":()=>ft(()=>import("./model21_f32_runner-yTUV9LXd.js"),[],import.meta.url),"./webgpu_runners/model21_tta_runner.js":()=>ft(()=>import("./model21_tta_runner-e7-76trO.js"),[],import.meta.url),"./webgpu_runners/model21chan18cls_runner.js":()=>ft(()=>import("./model21chan18cls_runner-DvLOnZMy.js"),[],import.meta.url),"./webgpu_runners/model24chan18cls_gdice_prio_probability_runner.js":()=>ft(()=>import("./model24chan18cls_gdice_prio_probability_runner-BHqpfuCi.js"),[],import.meta.url),"./webgpu_runners/model24chan18cls_gdice_prio_runner.js":()=>ft(()=>import("./model24chan18cls_gdice_prio_runner-B5cN26gD.js"),[],import.meta.url),"./webgpu_runners/model30chan18cls_runner.js":()=>ft(()=>import("./model30chan18cls_runner-C2mBz0G4.js"),[],import.meta.url),"./webgpu_runners/model30chan18cls_tta_runner.js":()=>ft(()=>import("./model30chan18cls_tta_runner-v8CMqLh5.js"),[],import.meta.url),"./webgpu_runners/model30chan50cls_f32_runner.js":()=>ft(()=>import("./model30chan50cls_f32_runner-DQ53FZ3-.js"),[],import.meta.url),"./webgpu_runners/model30chan50cls_runner.js":()=>ft(()=>import("./model30chan50cls_runner-D72-rlcG.js"),[],import.meta.url),"./webgpu_runners/model30chan50cls_tta_runner.js":()=>ft(()=>import("./model30chan50cls_tta_runner-CliMlbAZ.js"),[],import.meta.url),"./webgpu_runners/model32chan18cls_runner.js":()=>ft(()=>import("./model32chan18cls_runner-cowyou29.js"),[],import.meta.url),"./webgpu_runners/model5_gw_ae_runner.js":()=>ft(()=>import("./model5_gw_ae_runner-jI57fGIB.js"),[],import.meta.url),"./webgpu_runners/model5_runner.js":()=>ft(()=>import("./model5_runner-BiUlzJBp.js"),[],import.meta.url),"./webgpu_runners/model5_tta_runner.js":()=>ft(()=>import("./model5_tta_runner-DjIMLwlR.js"),[],import.meta.url),"./webgpu_runners/model6chan3cls_runner.js":()=>ft(()=>import("./model6chan3cls_runner-wSGRZpe5.js"),[],import.meta.url),"./webgpu_runners/robust_subcortical_runner.js":()=>ft(()=>import("./robust_subcortical_runner-D74Uw6At.js"),[],import.meta.url),"./webgpu_runners/robust_subcortical_tta_runner.js":()=>ft(()=>import("./robust_subcortical_tta_runner-CkwA2dHP.js"),[],import.meta.url)});function Jo(){const e=Object.keys(hn).map(t=>{const n=t.match(/\/([^\/]+)_runner\.js$/);return n?n[1]:null}).filter(Boolean);return Array.from(new Set([...An,...e]))}function ea(e){if(An.has(e))return()=>ze(null,null,function*(){return us});const t=`./webgpu_runners/${e}_runner.js`;if(hn[t])return hn[t];const n=e.toLowerCase();for(const s of An)if(s.toLowerCase()===n)return()=>ze(null,null,function*(){return us});for(const[s,r]of Object.entries(hn))if(s.toLowerCase().includes(`/${n}_runner.js`))return r;for(const[s,r]of Object.entries(hn))if(s.includes(e))return r;return null}function ta(e){if(An.has(e))return!0;const t=`./webgpu_runners/${e}_runner.js`;if(hn[t])return!0;const n=e.toLowerCase();for(const r of An)if(r.toLowerCase()===n)return!0;const s=`/${n}_runner.js`;return Object.keys(hn).some(r=>r.toLowerCase().endsWith(s))}function na(e,t){if(typeof Float16Array=="undefined")throw new Error("Float16Array unavailable: cannot cast fp32 master weights to fp16.");const n=new DataView(e.buffer,e.byteOffset,e.byteLength),s=Number(n.getBigUint64(0,!0)),r=JSON.parse(new TextDecoder("utf8").decode(e.subarray(8,8+s))),i=8+s;if(!Object.entries(r).some(([p,g])=>p!=="__metadata__"&&g.dtype==="F32"))return e;const a={},f=[];let l=0;for(const[p,g]of Object.entries(r)){if(p==="__metadata__"){a[p]=g;continue}const[v,P]=g.data_offsets,_=e.subarray(i+v,i+P);let h,w;if(g.dtype==="F32"){const y=new Float32Array(_.slice().buffer),b=new Float16Array(y);h=new Uint8Array(b.buffer),w="F16"}else h=_,w=g.dtype;a[p]={dtype:w,shape:g.shape,data_offsets:[l,l+h.byteLength]},f.push(h),l+=h.byteLength}const c=new TextEncoder().encode(JSON.stringify(a)),m=(8-c.byteLength%8)%8,d=new Uint8Array(8+c.byteLength+m+l);new DataView(d.buffer).setBigUint64(0,BigInt(c.byteLength+m),!0),d.set(c,8),d.fill(32,8+c.byteLength,8+c.byteLength+m);let u=8+c.byteLength+m;for(const p of f)d.set(p,u),u+=p.byteLength;return console.log("[WebGPU] Cast fp32 master weights -> fp16."),d}function sa(e,t){try{const n=o=>!!(e.features&&e.features.has&&e.features.has(o)),s=e.limits||{},r=typeof navigator!="undefined"&&navigator.userAgent||"unknown",i=/Safari/.test(r)&&!/Chrome|Chromium|Android/.test(r);console.log("[SAFARI-DEBUG] ===== WebGPU device capabilities ====="),console.log("[SAFARI-DEBUG] model:",(t==null?void 0:t.modelName)||(t==null?void 0:t.webgpu_runner)||"(unknown)"),console.log("[SAFARI-DEBUG] userAgent:",r,"| classified Safari:",i),console.log("[SAFARI-DEBUG] shader-f16:",n("shader-f16")),console.log("[SAFARI-DEBUG] features:",e.features?Array.from(e.features):"(none)"),console.log("[SAFARI-DEBUG] limits:",{maxBufferSize:s.maxBufferSize,maxStorageBufferBindingSize:s.maxStorageBufferBindingSize,maxComputeInvocationsPerWorkgroup:s.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:s.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:s.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:s.maxComputeWorkgroupSizeZ,maxComputeWorkgroupsPerDimension:s.maxComputeWorkgroupsPerDimension}),console.log("[SAFARI-DEBUG] BC_WEBGPU_DEBUG (logits readback):",typeof window!="undefined"&&!!window.BC_WEBGPU_DEBUG),console.log("[SAFARI-DEBUG] =======================================")}catch(n){console.warn("[SAFARI-DEBUG] capability dump failed:",n==null?void 0:n.message)}}function Mr(){return typeof requestAnimationFrame!="function"?new Promise(e=>setTimeout(e,0)):new Promise(e=>{let t=!1;const n=()=>{t||(t=!0,e())},s=setTimeout(n,25);requestAnimationFrame(()=>{clearTimeout(s),setTimeout(n,0)})})}const ra=6,oa=4,gn=new Map,Kn=new Map,_n=new Map,fn=new WeakMap,Zn=new WeakSet;function aa(e){return ze(this,null,function*(){if(!(!e||Zn.has(e))){Zn.add(e);try{yield bs(e)}catch(t){Zn.delete(e),console.debug("[WebGPU] Background pipeline warmup skipped:",(t==null?void 0:t.message)||t)}}})}function zr(e,{keepSharedWorkspace:t=!1}={}){var n;if(e)try{if(typeof((n=e.execute)==null?void 0:n.dispose)=="function")e.execute.dispose({keepSharedWorkspace:t});else if(e.ownedBuffers)for(const s of e.ownedBuffers)s.destroy()}catch(s){console.warn("[WebGPU] Failed to dispose cached runner buffers:",s)}}function ia(e,t,n,s){var r,i,o,a,f,l,c,m,d,u,p,g,v,P,_,h,w,y,b;return JSON.stringify([e,t,n,(r=s.id)!=null?r:null,(i=s.numClasses)!=null?i:null,(o=s.outputType)!=null?o:null,(a=s.dilations)!=null?a:null,(f=s.activation)!=null?f:null,(l=s.quantize8Bit)!=null?l:null,(c=s.forceFP32)!=null?c:null,(m=s.disableF16)!=null?m:null,(d=s.disableSubgroups)!=null?d:null,(u=s.disableConeSkip)!=null?u:null,(p=s.forceLowMem128)!=null?p:null,(g=s.webgpuExecMode)!=null?g:null,(v=s.softmaxTemperature)!=null?v:null,(P=s.brainSupportTemperature)!=null?P:null,(_=s.brainSupportPower)!=null?_:null,(h=s.partialVolumeSigma)!=null?h:null,(w=s.probabilityGroups)!=null?w:null,(y=s.probabilityDisplay)!=null?y:null,(b=s.classifierBias)!=null?b:null])}function Is(e){const t=gn.get(e);if(t)return gn.delete(e),gn.set(e,t),Promise.resolve(t);const n=Kn.get(e);if(n)return n;const s=ze(null,null,function*(){let r;try{const o=yield fetch(e);if(!o.ok)throw new Error(`HTTP ${o.status}: ${o.statusText}`);r=yield o.arrayBuffer()}catch(o){throw new Error(`Failed to load weights from '${e}': ${o.message}`)}const i=new Uint8Array(r);for(gn.set(e,i);gn.size>ra;){const o=gn.keys().next().value;gn.delete(o)}return i}).finally(()=>{Kn.delete(e)});return Kn.set(e,s),s}function la(e,t,n,s){if(!n)return e;const r=_n.get(t);if(r)return _n.delete(t),_n.set(t,r),r;const i=na(e);for(_n.set(t,i);_n.size>oa;){const o=_n.keys().next().value;_n.delete(o)}return i}function cs(e,t){return ze(this,null,function*(){const n=[],s=e.createBuffer.bind(e);e.createBuffer=r=>{const i=s(r);return n.push(i),i};try{return{result:yield t(),buffers:n}}finally{e.createBuffer=s}})}function fs(e){let t=0;for(const n of e)t+=Number(n==null?void 0:n.size)||0;return t}function Qn(e){for(const t of e)try{t.destroy()}catch(n){}}function ua(e,t,n){return ze(this,null,function*(){var y,b,k,F,$,B,S;const s=(y=Zo())!=null?y:Mo(e,t);let r=t.webgpu_runner,i=t.webgpu_safetensor;const o=!!(e.features&&e.features.has&&e.features.has("shader-f16"));let a=!1;s&&(t.forceFP32?(a=!0,console.log("[WebGPU] forceFP32: using fp32 runner and weights.")):!o&&ta(`${r}_f32`)&&(a=!0,console.log("[WebGPU] shader-f16 not supported on this device -> auto-selecting fp32 runner and weights.")),a&&(r=`${r}_f32`,i=i.replace(".safetensors","_f32.safetensors")),t.enableTTA&&t.webgpuTTArunner&&(console.log("[WebGPU] TTA Enabled: Switching to TTA runner and weights."),r=`${r}_tta`,i=i.replace(".safetensors","_tta.safetensors")));const l=ia(s?"runner":"native",s?r:"webgpu_native",i,t),c=fn.get(e);if(c&&c.runnerKey===l)return Ct(bt({},c),{cacheHit:!0});const m=!!(s&&Qo(r));if(n("Loading model…",.1),c&&(fn.delete(e),zr(c,{keepSharedWorkspace:m})),m||wn(e),sa(e,t),s)console.log(`[WebGPU-native] not used for ${t.modelName||t.webgpu_runner}: ${s}`);else{let M=[];try{const z=yield Is(i),R=yield cs(e,()=>Bo(e,z,n,t));M=R.buffers;const G=R.result;G.kernels="hand-written";const T={runnerKey:l,runnerName:"webgpu_native",weightsPath:i,execute:G,supportsGpuNativeIO:!1,ownedBuffers:M,gpuBytes:fs(M)};return fn.set(e,T),console.log("[WebGPU-native] Using hand-written WebGPU kernels."),Ct(bt({},T),{cacheHit:!1})}catch(z){Qn(M),console.warn("[WebGPU-native] falling back to the tinygrad runner:",(z==null?void 0:z.message)||z)}}const d=m?()=>ze(null,null,function*(){return us}):ea(r);if(!d){const M=Jo();throw new Error(`Runner '${r}' not found. Available runners: ${M.join(", ")||"none"}. Looking in: ./webgpu_runners/`)}const[u,p]=yield Promise.all([d(),Is(i)]);if(!u.setupNet&&!((b=u.default)!=null&&b.setupNet))throw new Error(`Runner module '${r}' doesn't export 'setupNet'. Exported keys: ${Object.keys(u).join(", ")}`);const g=!!((F=u.supportsF32Fallback)!=null?F:(k=u.default)!=null&&k.supportsF32Fallback),v=!!((B=u.supportsGpuNativeIO)!=null?B:($=u.default)!=null&&$.supportsGpuNativeIO);!a&&!o&&!g&&console.warn(`[WebGPU] shader-f16 not supported and no fp32 runner ('${r}_f32') available; the fp16 runner will likely fail and fall back to WebGL2.`);const _=la(p,i,!a&&!g),h=u.setupNet||((S=u.default)==null?void 0:S.setupNet);let w=[];try{const M=yield cs(e,()=>h(e,_,n,t));w=M.buffers;const z=M.result;if(typeof z!="function")throw Qn(w),new Error(`setupNet for '${r}' didn't return a function. Returned type: ${typeof z}`);const R={runnerKey:l,runnerName:r,weightsPath:i,execute:z,supportsGpuNativeIO:v,ownedBuffers:typeof z.dispose=="function"?null:w,gpuBytes:typeof z.gpuBytes=="function"?z.gpuBytes():fs(w)};return fn.set(e,R),Ct(bt({},R),{cacheHit:!1})}catch(M){throw m&&wn(e),Qn(w),new Error(`Failed to setup network for '${r}': ${M.message}`)}})}function ca(e,t,n,s,r,i,o){return ze(this,null,function*(){var d,u,p,g;const a=n.outputType==="probability";console.log("Starting WebGPU inference..."),o(a?"Starting tissue estimation…":"Starting segmentation…",0);const f=no(n,to.WEBGPU);f.isModelFullVol=!0;let l=!1,c=null;const m=io(n);try{if(!e)throw new Error("WebGPU device is required but not provided");if(!(n!=null&&n.webgpu_runner))throw new Error("Model entry must specify webgpu_runner property");if(!(n!=null&&n.webgpu_safetensor))throw new Error("Model entry must specify webgpu_safetensor property");const v=n.webgpuStorageSize||335544320;if(e.limits){const A=re=>(re/1048576).toFixed(0),K=(d=e.limits.maxStorageBufferBindingSize)!=null?d:1/0,D=(u=e.limits.maxBufferSize)!=null?u:1/0;if(K<v||D<v){const re=A(Math.min(K,D)),oe=A(v),J=`[WebGPU] Device buffer limit (${re} MB) is below the ${oe} MB this model needs - using WebGL2 fallback.`;throw console.warn(J),new Error(J)}}e.pushErrorScope("out-of-memory"),l=!0;const P=performance.now();c=yield ua(e,n,o);const _=((performance.now()-P)/1e3).toFixed(4),h=performance.now();o("Preparing volume…",.25);const w=[256,256,256],y=c.supportsGpuNativeIO&&!!n.enableTranspose&&!n.inputPermutation,b=c.supportsGpuNativeIO&&!!n.enableTranspose&&!n.outputPermutation;let k,F;if(n.enableQuantileNorm){const{qmin:A,qmax:K}=Kr(r);k=A,F=K-A}else{const{min:A,max:K}=Zr(r);k=A,F=K-A}const $=F===0?1:F;let B=null,S,M=w;if(y)m&&(B=As(r,k,$)),S=r;else{const A=As(r,k,$);if(m&&(B=A),n.inputPermutation){console.log(`[WebGPU] Permuting Input: ${n.inputPermutation}`);const K=n.inputPermutation;M=[w[K[0]],w[K[1]],w[K[2]]],S=$n(A,w,K)}else n.enableTranspose?S=$n(A,w,[2,1,0]):S=A}const z=((performance.now()-h)/1e3).toFixed(4);o("",.3),o(a?"Estimating tissue maps…":"Segmenting…",.3),yield Mr();const R=performance.now(),G=c.supportsGpuNativeIO?A=>{const K=Math.max(0,Math.min(1,Number(A)||0));o("",.3+.6*K)}:void 0,T=y||b||G?{gpuNativeInput:y,gpuNativeOutput:b,normOffset:k,normRange:$,onProgress:G}:void 0,C=yield cs(e,()=>T?c.execute(S,T):c.execute(S)),I=C.result;if(typeof c.execute.gpuBytes=="function"){c.gpuBytes=c.execute.gpuBytes();const A=fn.get(e);A&&A.runnerKey===c.runnerKey&&(A.gpuBytes=c.gpuBytes)}else if(C.buffers.length>0){c.gpuBytes=(c.gpuBytes||0)+fs(C.buffers),c.ownedBuffers&&c.ownedBuffers.push(...C.buffers);const A=fn.get(e);A&&A.runnerKey===c.runnerKey&&(A.gpuBytes=c.gpuBytes)}l=!1;const ie=yield e.popErrorScope();if(ie)throw new Error(`WebGPU out of memory (${ie.message||"allocation failed"}) - falling back to WebGL2.`);if(!I||!Array.isArray(I))throw new Error(`Inference didn't return expected array format. Returned: ${typeof I}`);const ce=((performance.now()-R)/1e3).toFixed(4),N=(c.gpuBytes||0)/1048576;f.GPU_Memory_MiB=Math.round(N),f.WebGPU_Kernels=c.execute.kernels||"tinygrad";const W=N>=1024?`${(N/1024).toFixed(2)} GiB`:`${Math.round(N)} MiB`;console.log(`WebGPU inference took ${ce}s (${f.WebGPU_Kernels} kernels, ${W} GPU memory).`),o("Finishing up…",.9),console.log("Inference result shapes:",I.map(A=>A==null?void 0:A.length));const X=n.outputPermutation||(n.enableTranspose?[2,1,0]:null),Q=performance.now();let O;const le={};if(m){if(I.length!==3)throw new Error(`CAT-lite expected three tissue maps; received ${I.length}.`);o("Refining tissue fractions…",.92),O=yield po(I,B,n,f,b?K=>K:K=>X?$n(K,M,X):K instanceof Float32Array?K:Float32Array.from(K))}else if(a){const A=I[0];O=b?A:X?$n(A,M,X):A instanceof Float32Array?A:Float32Array.from(A),Ms(O,!0,"probability")}else{const A=I[0];let K;b?K=A instanceof Uint8Array?A:new Uint8Array(A):X?K=Qr(A,M,X):K=A instanceof Uint8Array?A:new Uint8Array(A),Ms(K,!1,"segmentation"),O=yield eo(K,r,n,t,le,w)}const ue=((performance.now()-Q)/1e3).toFixed(4),Ce=performance.now();yield i(O,t,n,le.mask);const ke=((performance.now()-Ce)/1e3).toFixed(4);if(a)m||(f.Output_Type="Continuous tissue probability",f.Tissue=n.probabilityDisplay||"grayMatter",f.Softmax_Temperature=(p=n.softmaxTemperature)!=null?p:1);else{const A=Jr(O),K=n.numClasses||A;so(f,K,A)}ro(f,ce,ue,{Preprocess_t:z,Setup_t:_,Display_t:ke}),console.log(`[Timing] WebGPU | ${n.modelName} | setup=${(Number(_)*1e3).toFixed(1)}ms prep=${(Number(z)*1e3).toFixed(1)}ms infer=${(Number(ce)*1e3).toFixed(1)}ms post=${(Number(ue)*1e3).toFixed(1)}ms disp=${(Number(ke)*1e3).toFixed(1)}ms cache=${c.cacheHit?"hit":"miss"}`);const Ae=`${Number(ce).toFixed(1)} s`,j=a?`Tissue maps finished (${Ae})`:`Segmentation finished (${Ae})`,ee=!a&&((g=n.numClasses)!=null?g:0)>2?" · Option/Alt-click a region to isolate":"";o(`${n.modelName} · ${j}${ee}`,1,"",f)}catch(v){if(console.error("WebGPU Inference Error:",v),c&&(fn.get(e)===c&&fn.delete(e),zr(c),c=null),l&&e){l=!1;try{yield e.popErrorScope()}catch(_){}}let P=v.message;throw v.message.includes("not found")?P+=". Check that the runner file exists and the name matches.":v.message.includes("fetch")?P+=". Check network connection and file paths.":v.message.includes("binding size")&&(P+=". GPU memory limit exceeded."),oo(f,P,"WebGPU inference failed"),o("",-1,`WebGPU Error: ${P}`,f),v}})}const fa={batchSize:1,numOfChan:1,isColorEnable:!0,isAutoColors:!0,bgLabelValue:0,drawBoundingVolume:!1,isGPU:!0,isBrainCropMaskBased:!0,showPhase1Output:!1,isPostProcessEnable:!0,fillSuppressedWithNeighborLabel:!1,diagnoseEnclosedComponents:!1,isContoursViewEnable:!1,browserArrayBufferMaxZDim:30,telemetryFlag:!1,chartXaxisStepPercent:10,uiSampleName:"BC_UI_Sample",atlasSelectedColorTable:"Fire"};function Es(e,t=!0){if(!e)return e;const r=e,{turbo:n}=r,s=$s(r,["turbo"]);return!t||!n?s:Ct(bt(bt({},s),n),{isTurboActive:!0})}const bn=[{id:2,type:"Brain_Extraction",path:"/models/mindgrab/model.json",modelName:"🪓🧠 Omnimodal Skull Stripping",webgpu_safetensor:"./models/mindgrab/model.safetensors",webgpu_runner:"mindgrab",classifierBias:[1.525439739227295,-1.5258055925369263],webgpuTTArunner:!1,forceFP32:!1,webgpuStorageSize:503316480,numClasses:2,turbo:{webgpu_runner:"mindgrab_int8",quantize8Bit:!0,forceFP32:!1,webgpuTTArunner:!1,webgpuStorageSize:83886080,warning:"Runs via the 8-bit V4 WebGPU engine (~3.7s on M1 WebGPU, auto-scaling from 160 MiB down to 80 MiB max buffer on mobile) or native WebGL2."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,isPostProcessEnable:!0,enableCrop:!0,cropPadding:20,autoThreshold:.5,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!1,textureSize:0,warning:"This model may need dedicated graphics card.  For more info please check with Browser Resources <i class='fa fa-cogs'></i>.",inferenceDelay:100,description:"Omnimodal skull stripping (MindGrab) delivering high-accuracy brain extraction across T1, T2, FLAIR, DWI, EPI, MRA, PDw, qT1, CT, and PET via the 8-bit V4 WebGPU engine (80 MiB mobile / 160 MiB desktop max buffer) or native WebGL2."},{id:21,type:"Atlas",path:"/models/model24chan18cls_gdice_prio/model.json",modelName:"🪓 Subcortical + Tissue",colormapPath:"./models/model24chan18cls_gdice_prio/colormap.json",webgpu_safetensor:"./models/model24chan18cls_gdice_prio/model.safetensors",webgpu_runner:"model24chan18cls_gdice_prio",forceFP32:!1,webgpuStorageSize:1610612736,numClasses:18,turbo:{webgpu_runner:"mindmap24_int8",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:125829120,warning:"Runs via the 8-bit V4 WebGPU engine (~3.0s on M1 WebGPU, auto-scaling from 240 MiB down to 120 MiB max buffer on mobile) or native WebGL2."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,cropPadding:20,autoThreshold:0,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!0,textureSize:0,warning:"Runs via the 8-bit V4 WebGPU engine (120–240 MiB max buffer) or native WebGL2.",inferenceDelay:100,description:"Primary T1w brain parcellation into 17 regions (gray and white matter plus subcortical structures) via a 24-channel gridding-free MeshNet (MindMap v3.5 Unified: sharp sulci, intact occipital ribbon, and clinical slice/noise/bias robustness), accelerated by the 8-bit V4 WebGPU engine (120 MiB mobile / 240 MiB desktop max buffer)."},{id:23,type:"Probability_Map",path:"/models/model24chan18cls_gdice_prio/model.json",modelName:"⅔🧠 Tissue fraction maps (GM/WM/CSF)",webgpu_safetensor:"./models/model24chan18cls_gdice_prio/model.safetensors",webgpu_runner:"model24chan18cls_gdice_prio_probability",forceFP32:!1,webgpuStorageSize:1610612736,numClasses:18,turbo:{webgpu_runner:"mindmap24_int8",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:125829120,warning:"Experimental neural-assisted partial-volume estimate (~3.5s on M1 WebGPU, auto-scaling from 240 MiB down to 120 MiB max buffer on mobile)."},outputType:"probability",probabilityPostprocess:"cat-lite",softmaxTemperature:2,brainSupportTemperature:1,brainSupportPower:1,partialVolumeSigma:.65,probabilityDisplay:"grayMatter",probabilityTissues:[{name:"gm",tint:[255,64,64]},{name:"wm",tint:[255,255,255]},{name:"csf",tint:[64,128,255]}],probabilityOverlayFloor:128,probabilityOverlayAlpha:48,probabilityDisplayMin:.03,probabilityUnderlayOpacity:.1,probabilityGroups:{grayMatter:[2,6,7,8,9,10,14,15,16,17],whiteMatter:[1,5],csf:[3,4,11,12]},catLitePurePriorPower:3,catLitePriorStrength:.8,catLiteIntensityStrength:.75,catLiteMixelPrior:.35,catLiteCsfWmMixelPrior:6,catLiteSpatialWeight:.25,catLiteMinSupport:.03,catLiteSigmaFloor:.025,catLiteBiasBlockSize:16,catLiteBiasSmoothPasses:3,preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,enableQuantileNorm:!0,enableFovRecenter:!1,enableFovInflate:!1,warning:"Experimental neural-assisted mixed-class partial-volume estimate, not CAT12.",inferenceDelay:100,description:"CAT-inspired GM/WM/CSF partial-volume estimate. The 24-channel model supplies joint GM/WM/CSF priors; normalized T1 intensity, a coarse local bias estimate, spatial regularization, and explicit GM-CSF/GM-WM mixture classes produce continuous GM, WM and CSF fractions. Experimental and not a CAT12 result."},{id:5,type:"Atlas",path:"/models/model24chan104cls_v3_repbn/model.json",modelName:"🪓🔪 Desikan-Killiany Atlas",colormapPath:"./models/model24chan104cls_v3_repbn/colormap.json",webgpu_safetensor:"./models/model24chan104cls_v3_repbn/model.safetensors",webgpu_runner:"dkatlas24_synth",forceFP32:!1,webgpuStorageSize:1610612736,numClasses:104,turbo:{webgpu_runner:"dkatlas24_int8",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:125829120,warning:"Runs via the 8-bit V4 WebGPU engine (~3.0s on M1 WebGPU, auto-scaling from 240 MiB down to 120 MiB max buffer on mobile) or native WebGL2."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,cropPadding:20,autoThreshold:0,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!0,textureSize:0,warning:"Runs via the 8-bit V4 WebGPU engine (120–240 MiB max buffer) or native WebGL2.",inferenceDelay:100,description:"Primary 104-region Desikan-Killiany atlas parcellation (cortical + subcortical + 5-part corpus callosum) for research and clinical T1-weighted MRI, running via the 8-bit V4 WebGPU engine (~3.0s on M1, 120 MiB mobile / 240 MiB desktop max buffer) or native WebGL2."},{id:4,type:"Atlas",path:"/models/model24chan50cls/model.json",modelName:"🪓🔪 Desikan-Killiany 50",colormapPath:"./models/model24chan50cls/colormap.json",webgpu_safetensor:"./models/model24chan50cls/model.safetensors",webgpu_runner:"meshnet_fast_v4",forceFP32:!1,webgpuStorageSize:805306368,numClasses:50,turbo:{webgpu_runner:"meshnet_fast_v4",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:125829120,warning:"Runs via the 8-bit V4 WebGPU engine (~3.0s on M1 WebGPU, auto-scaling from 240 MiB down to 120 MiB max buffer on mobile) or native WebGL2."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,cropPadding:20,autoThreshold:0,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!0,textureSize:0,warning:"Runs via the 8-bit V4 WebGPU engine (120–240 MiB max buffer) or native WebGL2.",inferenceDelay:100,description:"Bilateral 50-region Desikan-Killiany cortical + subcortical + corpus callosum parcellation with built-in skull stripping (MindSnap-50 v3.5), running via the 8-bit V4 WebGPU engine (~3.0s on M1, 120 MiB mobile / 240 MiB desktop max buffer) or native WebGL2."},{id:6,type:"Divider",modelName:"-----------------",path:null},{id:3,type:"Atlas",path:"/models/model16chan18cls/model.json",modelName:"⚡🪓 Subcortical + Tissue",colormapPath:"./models/model16chan18cls/colormap.json",webgpu_safetensor:"./models/model16chan18cls/model.safetensors",webgpu_runner:"model16chan18cls",forceFP32:!1,webgpuStorageSize:536870912,numClasses:18,turbo:{webgpu_runner:"model16chan18cls_int8",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:83886080,warning:"Ultra-fast 16-channel MindMap v3.5 (~1.7s on M1 WebGPU, auto-scaling from 160 MiB down to 80 MiB max buffer on mobile)."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,cropPadding:20,autoThreshold:0,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!0,textureSize:0,warning:"Runs via the 8-bit V4 WebGPU engine (80–160 MiB max buffer) or native WebGL2.",inferenceDelay:100,description:"Ultra-fast 17-region brain parcellation (gray and white matter plus subcortical structures) via our 84K-parameter 16-channel MeshNet (MindMap-16ch v3.5), running in ~1.7s on M1 WebGPU with an 80 MiB mobile / 160 MiB desktop buffer footprint."},{id:14,type:"Atlas",path:"/models/model24chan104cls_synth/model.json",modelName:"🪓🔪 Desikan-Killiany (lesion scans)",colormapPath:"./models/model24chan104cls_synth/colormap.json",webgpu_safetensor:"./models/model24chan104cls_synth/model.safetensors",webgpu_runner:"dkatlas24_synth",forceFP32:!1,webgpuStorageSize:1610612736,numClasses:104,turbo:{webgpu_runner:"dkatlas24_int8",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:125829120,warning:"Runs via the 8-bit V4 WebGPU engine (~3.0s on M1 WebGPU, auto-scaling from 240 MiB down to 120 MiB max buffer on mobile) or native WebGL2."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,cropPadding:20,autoThreshold:0,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!0,textureSize:0,warning:"Runs via the 8-bit V4 WebGPU engine (120–240 MiB max buffer) or native WebGL2.",inferenceDelay:100,description:"Desikan-Killiany 104-region parcellation variant retained for scans with large focal lesions, running via the 8-bit V4 WebGPU engine (120–240 MiB max buffer) or native WebGL2."}];function hs(){return ze(this,null,function*(){return navigator.userAgent.indexOf("OPR/")>-1?"Opera":navigator.userAgent.indexOf("Edg/")>-1?"Edge":navigator.userAgent.indexOf("Falkon/")>-1?"Falkon":navigator.userAgent.indexOf("Chrome/")>-1?"Chrome":navigator.userAgent.indexOf("Firefox/")>-1?"Firefox":navigator.userAgent.indexOf("Safari/")>-1?"Safari":navigator.userAgent.indexOf("MSIE/")>-1||navigator.userAgent.indexOf("rv:")>-1?"IExplorer":"Unknown"})}function pa(){return ze(this,null,function*(){return navigator.userAgent.indexOf("OPR/")>-1?parseInt(navigator.userAgent.split("OPR/")[1]):navigator.userAgent.indexOf("Edg/")>-1?parseInt(navigator.userAgent.split("Edg/")[1]):navigator.userAgent.indexOf("Falkon/")>-1?parseInt(navigator.userAgent.split("Falkon/")[1]):navigator.userAgent.indexOf("Chrome/")>-1?parseInt(navigator.userAgent.split("Chrome/")[1]):navigator.userAgent.indexOf("Firefox/")>-1?parseInt(navigator.userAgent.split("Firefox/")[1]):navigator.userAgent.indexOf("Safari/")>-1?parseInt(navigator.userAgent.split("Safari/")[1]):navigator.userAgent.indexOf("MSIE/")>-1||navigator.userAgent.indexOf("rv:")>-1?parseInt(navigator.userAgent.split("MSIE/")[1]):1/0})}function ma(){return ze(this,null,function*(){return navigator.userAgent.indexOf("Win")>-1?"Windows":navigator.userAgent.indexOf("Mac")>-1?"MacOS":navigator.userAgent.indexOf("Linux")>-1?"Linux":navigator.userAgent.indexOf("UNIX")>-1?"UNIX":"Unknown"})}function da(e){return ze(this,null,function*(){return e?(console.log("WebGl2 is enabled"),!0):(console.log(typeof WebGL2RenderingContext!="undefined"?"WebGL2 may be disabled. Please try updating video card drivers":"WebGL2 is not supported"),!1)})}function ga(e){return ze(this,null,function*(){let t;if(e&&(t=e.getExtension("WEBGL_debug_renderer_info"),t)){const n=e.getParameter(t.UNMASKED_VENDOR_WEBGL);return n.indexOf("(")>-1&&n.indexOf(")")>-1?n.substring(n.indexOf("(")+1,n.indexOf(")")):n}return null})}function _a(e){return ze(this,null,function*(){if(e){const t=e.getExtension("WEBGL_debug_renderer_info");return t?e.getParameter(t.UNMASKED_VENDOR_WEBGL):null}else return null})}function ba(e){return ze(this,null,function*(){if(e){if(hs()==="Firefox")return e.getParameter(e.RENDERER);const t=e.getExtension("WEBGL_debug_renderer_info");return t?e.getParameter(t.UNMASKED_RENDERER_WEBGL):null}else return null})}function ha(e){return ze(this,null,function*(){let t;if(e){if(hs()==="Firefox")return e.getParameter(e.RENDERER);if(t=e.getExtension("WEBGL_debug_renderer_info"),t){let n=e.getParameter(t.UNMASKED_RENDERER_WEBGL);return n.indexOf("(")>-1&&n.indexOf(")")>-1&&n.indexOf("(R)")===-1&&(n=n.substring(n.indexOf("(")+1,n.indexOf(")")),n.split(",").length===3)?n.split(",")[1].trim():n}}return null})}function wa(){return ze(this,null,function*(){return navigator.hardwareConcurrency})}function va(){return ze(this,null,function*(){return/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)})}function xa(e,t=null){return ze(this,null,function*(){const n=new Date;if(e.isModelFullVol?e.Brainchop_Ver="FullVolume":e.Brainchop_Ver="SubVolumes",e.Total_t=(Date.now()-e.startTime)/1e3,delete e.startTime,e.Date=parseInt(n.getMonth()+1)+"/"+n.getDate()+"/"+n.getFullYear(),e.Browser=yield hs(),e.Browser_Ver=yield pa(),e.OS=yield ma(),e.WebGL2=yield da(t),e.GPU_Vendor=yield ga(t),e.GPU_Card=yield ha(t),e.GPU_Vendor_Full=yield _a(t),e.GPU_Card_Full=yield ba(t),e.CPU_Cores=yield wa(),e.Which_Brainchop="latest",(yield va())&&(e.Heap_Size_MB=window.performance.memory.totalJSHeapSize/(1024*1024).toFixed(2),e.Used_Heap_MB=window.performance.memory.usedJSHeapSize/(1024*1024).toFixed(2),e.Heap_Limit_MB=window.performance.memory.jsHeapSizeLimit/(1024*1024).toFixed(2)),t){console.log("MAX_TEXTURE_SIZE :",t.getParameter(t.MAX_TEXTURE_SIZE)),console.log("MAX_RENDERBUFFER_SIZE :",t.getParameter(t.MAX_RENDERBUFFER_SIZE));const s=t.getExtension("WEBGL_debug_renderer_info");console.log("VENDOR WEBGL:",t.getParameter(s.UNMASKED_VENDOR_WEBGL)),e.Texture_Size=t.getParameter(t.MAX_TEXTURE_SIZE)}else e.Texture_Size=null;return e})}const Jn={bankssts:1,caudalanteriorcingulate:2,caudalmiddlefrontal:3,cuneus:5,entorhinal:6,fusiform:7,inferiorparietal:8,inferiortemporal:9,isthmuscingulate:10,lateraloccipital:11,lateralorbitofrontal:12,lingual:13,medialorbitofrontal:14,middletemporal:15,parahippocampal:16,paracentral:17,parsopercularis:18,parsorbitalis:19,parstriangularis:20,pericalcarine:21,postcentral:22,posteriorcingulate:23,precentral:24,precuneus:25,rostralanteriorcingulate:26,rostralmiddlefrontal:27,superiorfrontal:28,superiorparietal:29,superiortemporal:30,supramarginal:31,frontalpole:32,temporalpole:33,transversetemporal:34,insula:35},ya=new Set(["BG","Unknown","background","Background"]),Ts={"Left-Cerebral-White-Matter":2,"Right-Cerebral-White-Matter":41,"Left-Cerebral-Cortex":3,"Right-Cerebral-Cortex":42,"Left-Lateral-Ventricle":4,"Right-Lateral-Ventricle":43,"Left-Inf-Lat-Vent":5,"Right-Inf-Lat-Vent":44,"Left-Cerebellum-White-Matter":7,"Right-Cerebellum-White-Matter":46,"Left-Cerebellum-Cortex":8,"Right-Cerebellum-Cortex":47,"Left-Thalamus":10,"Left-Thalamus-Proper":10,"Left-Thalamus-Proper*":10,"Right-Thalamus":49,"Right-Thalamus-Proper":49,"Right-Thalamus-Proper*":49,"Left-Caudate":11,"Right-Caudate":50,"Left-Putamen":12,"Right-Putamen":51,"Left-Pallidum":13,"Right-Pallidum":52,"Left-Hippocampus":17,"Right-Hippocampus":53,"Left-Amygdala":18,"Right-Amygdala":54,"Left-Accumbens":26,"Left-Accumbens-area":26,"Right-Accumbens":58,"Right-Accumbens-area":58,"Left-VentralDC":28,"Right-VentralDC":60,"3rd-Ventricle":14,"4th-Ventricle":15,"Brain-Stem":16,CSF:24,CC_Posterior:251,CC_Mid_Posterior:252,CC_Central:253,CC_Mid_Anterior:254,CC_Anterior:255,"Cerebral-White-Matter":2,"White Matter":2,"Cerebral-Cortex":3,"Grey Matter":3,"Gray Matter":3,"Lateral-Ventricle":4,Ventricle:4,"Inferior-Lateral-Ventricle":5,"Cerebellum-White-Matter":7,"Cerebellum-Cortex":8,Cerebellum:8,Thalamus:10,"Thalamus-Proper":10,"Thalamus-Proper*":10,Caudate:11,Putamen:12,Pallidum:13,Hippocampus:17,Amygdala:18,"Accumbens-area":26,Accumbens:26,VentralDC:28,"Corpus callosum":253,Corpus_Callosum:253};function $a(e){if(typeof e!="string")return null;const t=e.trim();if(ya.has(t))return 0;if(Object.hasOwn(Ts,t))return Ts[t];if(t.startsWith("ctx-lh-")){const n=Jn[t.slice(7)];return n?1e3+n:null}if(t.startsWith("ctx-rh-")){const n=Jn[t.slice(7)];return n?2e3+n:null}if(t.startsWith("ctx-")){const n=Jn[t.slice(4)];return n?1e3+n:null}return null}function Rn(e){if(!Array.isArray(e)||e.length<3)return null;const t=new Int16Array(e.length);for(let n=0;n<e.length;n++){const s=$a(e[n]);if(s===null||(n===0?s!==0:s<=0))return null;t[n]=s}return t}function Sa(e,t){const n=e.length,s=new Int16Array(n),r=t.length;let i=0;for(let o=0;o<n;o++){const a=e[o],f=a>=0&&a<r?t[a]:a;s[o]=f,f>i&&(i=f)}return{img:s,maxLabel:i}}const Os=.5,Ns=8,Ds=(e,t,n)=>Math.min(n,Math.max(t,e)),Vs=e=>Math.hypot(e[0].clientX-e[1].clientX,e[0].clientY-e[1].clientY);function Cr(e){e&&(e.pan2Dxyzmm=Float32Array.from([0,0,0,1]),e.scaleMultiplier=1),ka()}function ka(){const e=document.querySelector('meta[name="viewport"]');if(!e)return;const t=e.getAttribute("content")||"width=device-width, initial-scale=1.0";/maximum-scale/.test(t)||(e.setAttribute("content",`${t}, maximum-scale=1, user-scalable=no`),requestAnimationFrame(()=>requestAnimationFrame(()=>e.setAttribute("content",t))))}function Pa(){const e=t=>t.preventDefault();for(const t of["gesturestart","gesturechange","gestureend"])document.addEventListener(t,e,{passive:!1});document.addEventListener("touchmove",t=>{t.touches.length>1&&t.preventDefault()},{passive:!1})}function Aa(e){const t=new Set,n=r=>{t.size>1&&r.stopPropagation()},s=r=>t.delete(r.pointerId);window.addEventListener("pointerdown",r=>{r.pointerType==="touch"&&r.target===e&&t.add(r.pointerId),n(r)},!0),window.addEventListener("pointermove",n,!0),window.addEventListener("pointerup",s,!0),window.addEventListener("pointercancel",s,!0)}function Ma(e,t,n,s,r){const i=e[3]/t;return[0,1,2].map(o=>{const a=n[o]-(s[o]+r[o])/2;return i*(a+e[o])-a})}function za(e){const t=e.canvas;if(!t)return;Aa(t);let n=null;const s=o=>{var m,d,u;if(o.touches.length!==2){n=null;return}const a=t.getBoundingClientRect(),f=window.devicePixelRatio||1,l=((o.touches[0].clientX+o.touches[1].clientX)/2-a.left)*f,c=((o.touches[0].clientY+o.touches[1].clientY)/2-a.top)*f;n={dist:Math.max(1,Vs(o.touches)),pan:Array.from(e.pan2Dxyzmm),scale3d:e.scaleMultiplier||1,inRender:(u=(d=(m=e.view)==null?void 0:m.hitTest(l,c))==null?void 0:d.isRender)!=null?u:!1}},r=()=>{n=null},i=o=>{if(!n||o.touches.length!==2)return;const a=Vs(o.touches)/n.dist;if(!isFinite(a)||a<=0)return;if(n.inRender){e.scaleMultiplier=Ds(n.scale3d*a,Os,Ns);return}const f=Ds(n.pan[3]*a,Os,Ns),l=Ma(n.pan,f,e.getCrosshairPos(),e.model.extentsMin,e.model.extentsMax);e.pan2Dxyzmm=Float32Array.from([l[0],l[1],l[2],f]),e.isYoked3DTo2DZoom?e.scaleMultiplier=f:e.drawScene()};t.addEventListener("touchstart",s,{passive:!0}),t.addEventListener("touchmove",i,{passive:!0}),t.addEventListener("touchend",r,{passive:!0}),t.addEventListener("touchcancel",r,{passive:!0})}function Ca(e){return Pa(),za(e),{resetView:()=>Cr(e)}}const Ba=720,Fa=860;function La(){var r,i,o,a,f,l;const e=window.visualViewport,t=Math.round((i=(r=e==null?void 0:e.width)!=null?r:window.innerWidth)!=null?i:0),n=Math.round((a=(o=e==null?void 0:e.height)!=null?o:window.innerHeight)!=null?a:0);return t>0&&t<=Ba?!0:!!((l=(f=window.matchMedia)==null?void 0:f.call(window,"(pointer: coarse)"))==null?void 0:l.matches)&&Math.min(t,n)<=Fa}const Pn=[{id:"multi",label:"All",title:"All planes",type:Cn.MULTIPLANAR},{id:"axial",label:"A",title:"Axial only",type:Cn.AXIAL},{id:"coronal",label:"C",title:"Coronal only",type:Cn.CORONAL},{id:"sagittal",label:"S",title:"Sagittal only",type:Cn.SAGITTAL},{id:"render",label:"3D",title:"3D render only",type:Cn.RENDER}];function Br(e,t,n){const s=Pn.find(r=>r.id===n)||Pn[0];e.sliceType=s.type,t.querySelectorAll("button").forEach(r=>r.classList.toggle("active",r.dataset.pane===s.id))}function Ua(e,t){const n=document.createElement("div");n.id="paneSwitcher",n.className="pane-switcher",n.setAttribute("role","group"),n.setAttribute("aria-label","Visible planes");for(const r of Pn){const i=document.createElement("button");i.type="button",i.dataset.pane=r.id,i.textContent=r.label,i.title=r.title,i.setAttribute("aria-label",r.title),i.addEventListener("click",()=>Br(e,n,r.id)),n.appendChild(i)}const s=document.createElement("button");return s.type="button",s.className="pane-reset",s.textContent="⟲",s.title="Reset zoom and pan",s.setAttribute("aria-label","Reset zoom and pan"),s.addEventListener("click",()=>Cr(e)),n.appendChild(s),t.appendChild(n),n}function Wa(e){var r;const t=document.getElementById("canvas-container")||document.body,n=Ua(e,t);n.querySelector('button[data-pane="multi"]').classList.add("active"),window.addEventListener("keydown",i=>{if(i.key!=="v"&&i.key!=="V"||i.altKey||i.ctrlKey||i.metaKey||i.repeat)return;const o=i.target;if(o instanceof HTMLElement&&(o.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(o.tagName)))return;i.preventDefault(),i.stopImmediatePropagation();const a=Pn.findIndex(f=>f.type===e.sliceType);Br(e,n,Pn[(a+1)%Pn.length].id)},!0);const s=()=>document.body.classList.toggle("nv-narrow",La());window.addEventListener("resize",s),window.addEventListener("orientationchange",s),(r=window.visualViewport)==null||r.addEventListener("resize",s),s()}function Hs(e,t=e.img.slice(),n=e.name){const s=Object.assign(Object.create(Object.getPrototypeOf(e.hdr)),e.hdr),r=Er(s,t,n);return r.id=crypto.randomUUID(),r}const Xt=e=>e&&typeof e.slice=="function"?e.slice():e;function es(e,t,n=e.name,s={},r={}){var f;const i=Object.assign(Object.create(Object.getPrototypeOf(e.hdr)),e.hdr,bt({dims:[...e.hdr.dims],pixDims:[...e.hdr.pixDims],affine:e.hdr.affine.map(l=>[...l])},s)),o=e.dims?e.dims.slice(0,4):i.dims.slice(0,4),a=(f=e.nVox3D)!=null?f:o[1]*o[2]*o[3];return bt({img:t,hdr:i,originalAffine:i.affine.map(l=>[...l]),dims:o,nVox3D:a,extentsMin:Xt(e.extentsMin),extentsMax:Xt(e.extentsMax),mm000:Xt(e.mm000),mm100:Xt(e.mm100),mm010:Xt(e.mm010),mm001:Xt(e.mm001),dimsRAS:e.dimsRAS?[...e.dimsRAS]:void 0,pixDimsRAS:e.pixDimsRAS?[...e.pixDimsRAS]:void 0,permRAS:e.permRAS?[...e.permRAS]:void 0,toRAS:Xt(e.toRAS),toRASvox:Xt(e.toRASvox),matRAS:Xt(e.matRAS),obliqueRAS:Xt(e.obliqueRAS),oblique_angle:e.oblique_angle,frac2mm:Xt(e.frac2mm),frac2mmOrtho:Xt(e.frac2mmOrtho),img2RASstep:e.img2RASstep?[...e.img2RASstep]:void 0,img2RASstart:e.img2RASstart?[...e.img2RASstart]:void 0,volScale:e.volScale?[...e.volScale]:void 0,name:n,id:crypto.randomUUID(),calMin:0,calMax:255,robustMin:0,robustMax:255,globalMin:0,globalMax:255,frame4D:0,nFrame4D:1,nTotalFrame4D:1,isLegendVisible:!1},r)}function qa(e){let t=256,n=-1,s=0;for(let l=0;l<256;l++){const c=e[l];c>0&&(l<t&&(t=l),n=l,l!==0&&(s+=c))}if(t>n)return{calMin:0,calMax:255,robustMin:0,robustMax:255,globalMin:0,globalMax:255};if(t===n)return{calMin:t,calMax:n,robustMin:t,robustMax:n,globalMin:t,globalMax:n};const r=Math.round(s*.02),i=Math.round(s*.02);let o=0,a=t;for(let l=t;l<=n;l++){if(l===0&&e[0]>r){a=0;break}if(o+=e[l],o>=r){a=l;break}}o=0;let f=n;for(let l=n;l>=t;l--)if(o+=e[l],o>=i){f=Math.min(n,l+1);break}return a>=f&&(a=t,f=n),{calMin:a,calMax:f,robustMin:a,robustMax:f,globalMin:t,globalMax:n}}function ts(e,[t,n,s]){const r=e.dimsRAS,i=e.img2RASstart,o=e.img2RASstep;return!r||!i||!o||t<0||t>=r[1]||n<0||n>=r[2]||s<0||s>=r[3]?null:i[0]+t*o[0]+i[1]+n*o[1]+i[2]+s*o[2]}function yn(e,t){return ze(this,null,function*(){const n=e.img,s=yield Ir(t,e.hdr,n.buffer.byteLength===n.byteLength?n.buffer:n.buffer.slice(n.byteOffset,n.byteOffset+n.byteLength)),r=URL.createObjectURL(new Blob([s]));Object.assign(document.createElement("a"),{href:r,download:t}).click(),URL.revokeObjectURL(r)})}let en=null,pn=!1,ns=0,Gn=!1,Tn=[];const Fr=/Safari/.test(navigator.userAgent)&&!/Chrome|Chromium|CriOS|FxiOS|Edg|Android/.test(navigator.userAgent),Ra=Fr&&new URLSearchParams(window.location.search).get("inference")!=="webgpu";function js(e=null){return ze(this,null,function*(){const t={secureContext:window.isSecureContext,navigatorGpuExists:"gpu"in navigator,adapterObtained:!1,deviceObtained:!1,f16Support:!1,error:null};if(window.isSecureContext||(console.warn("WebGPU requires a secure context (HTTPS or localhost)."),console.warn("Current origin:",window.location.origin)),"gpu"in navigator)try{console.log("Requesting WebGPU adapter...");const n=yield navigator.gpu.requestAdapter();if(n){t.adapterObtained=!0,console.log("WebGPU adapter obtained:",n),n.info&&console.log("Adapter info:",n.info),console.log("Adapter limits:",{maxBufferSize:n.limits.maxBufferSize,maxStorageBufferBindingSize:n.limits.maxStorageBufferBindingSize,maxComputeWorkgroupsPerDimension:n.limits.maxComputeWorkgroupsPerDimension});const s={maxBufferSize:n.limits.maxBufferSize,maxStorageBufferBindingSize:n.limits.maxStorageBufferBindingSize,maxStorageBuffersPerShaderStage:n.limits.maxStorageBuffersPerShaderStage,maxUniformBufferBindingSize:n.limits.maxUniformBufferBindingSize,maxComputeInvocationsPerWorkgroup:n.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:n.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:n.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:n.limits.maxComputeWorkgroupSizeZ,maxComputeWorkgroupStorageSize:n.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:n.limits.maxComputeWorkgroupsPerDimension},r=n.features.has("shader-f16"),i=n.features.has("subgroups");t.f16Support=r,t.subgroupsSupport=i;const o=[];r&&o.push("shader-f16"),i&&o.push("subgroups");const a=yield n.requestDevice({requiredLimits:s,requiredFeatures:o});if(a.__adapterInfo=n.info||null,e&&typeof e.getParameter=="function")try{if(/Firefox/i.test(navigator.userAgent||""))a.__glRenderer=String(e.getParameter(e.RENDERER)||"");else{const l=e.getExtension("WEBGL_debug_renderer_info");a.__glRenderer=String((l?e.getParameter(l.UNMASKED_RENDERER_WEBGL):e.getParameter(e.RENDERER))||"")}}catch(l){}a.__isLost=!1,a.lost&&typeof a.lost.then=="function"&&a.lost.then(l=>{a.__isLost=!0,(l==null?void 0:l.reason)!=="destroyed"&&(console.warn(`[WebGPU] Device was lost (${(l==null?void 0:l.reason)||"unknown"}): ${(l==null?void 0:l.message)||""}`),en===a&&(en=null,pn=!1,t.deviceObtained=!1,t.error=(l==null?void 0:l.message)||"WebGPU device lost",Xs(!1,t)))}),en=a,t.deviceObtained=!0,pn=!0,console.log(`✓ WebGPU initialized successfully. F16: ${r?"enabled":"not available"}, Subgroups: ${i?"enabled":"not available"}`)}else console.warn("WebGPU adapter request returned null."),console.warn("This typically means:"),console.warn("  - Safari: WebGPU feature flags not enabled in Settings > Feature Flags"),console.warn("  - Unsupported GPU hardware"),console.warn("  - GPU drivers need updating"),t.error="Adapter returned null"}catch(n){t.error=n.message,console.error("WebGPU initialization error:",n),navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")&&(console.warn("Safari detected. To enable WebGPU:"),console.warn("  1. Open Safari Settings/Preferences"),console.warn('  2. Go to Advanced tab, enable "Show features for web developers"'),console.warn("  3. Go to Feature Flags tab"),console.warn("  4. Enable: WebGPU, GPU Process: DOM Rendering, GPU Process: Canvas Rendering"),console.warn("  5. Restart Safari"))}else console.warn("navigator.gpu not found. WebGPU API is not available in this browser."),t.error="navigator.gpu not found",navigator.userAgent.includes("Firefox")&&(console.warn("Firefox detected. To enable WebGPU in about:config:"),console.warn("  1. Set dom.webgpu.enabled = true"),console.warn("  2. Set gfx.webgpu.ignore-blocklist = true"),console.warn("  3. Restart Firefox"));return Xs(pn,t),pn||console.log("Falling back to WebGL backend."),window.webgpuDiagnostics=t,t})}function Xs(e,t){const n=document.getElementById("backendStatus");if(!n){console.log("Backend status element not found in DOM");return}if(e){const s=t.f16Support?" (F16)":"";n.textContent=`WebGPU${s}`,n.style.color="#4CAF50",n.title="WebGPU backend active - fastest performance"}else{n.textContent="WebGL",n.style.color="#FF9800";let s="WebGL backend (fallback)";t.error&&(s+=`
Reason: ${t.error}`),t.secureContext||(s+=`
⚠ Not a secure context (HTTPS required)`),Fr&&(s+=`

To enable WebGPU in Safari:
1. Settings > Feature Flags
2. Enable WebGPU flags
3. Restart Safari`),navigator.userAgent.includes("Firefox")&&(s+=`

To enable WebGPU in Firefox:
1. about:config > dom.webgpu.enabled = true
2. gfx.webgpu.ignore-blocklist = true
3. Restart Firefox`),n.title=s}}function Ga(){return ze(this,null,function*(){var ht;let e="",t="",n=null,s=null,r=null,i=null;function o(){const x=modelSelect.value;return x==="-1"||modelSelect.selectedIndex<0?null:bn[x]||null}function a(){const x=o();modelSelect.title=(x==null?void 0:x.description)||"Choose a segmentation model to run"}const f="altKey";let l=null,c=null,m=null,d=null,u=null,p=null,g=null,v="input.nii.gz",P=null;const _=document.getElementById("dragSegmented");_&&_.querySelectorAll("button").forEach(x=>{x.onclick=()=>{Y.secondaryDragMode=parseInt(x.dataset.drag,10),_.querySelectorAll("button").forEach(U=>U.classList.toggle("active",U===x))}});const h=document.getElementById("drawBtn"),w=document.getElementById("drawPopover"),y=document.getElementById("penRow"),b=document.getElementById("drawApplyRow");function k(x){w&&(w.hidden=!x,h&&h.setAttribute("aria-expanded",String(x)))}function F(x){Y.drawIsEnabled=x>=0,x>=0&&(!Y.drawingVolume&&Y.volumes.length&&Y.createEmptyDrawing(),Y.drawPenValue=x&7,Y.drawPenFilled=x>7),y&&y.querySelectorAll(".chip").forEach(U=>U.classList.toggle("active",parseInt(U.dataset.pen,10)===x))}function $(x){return ze(this,null,function*(){var ge;if(Y.volumes.length<2){window.alert("No segmentation open (run a model first).");return}if(x===0){Y.drawUndo();return}const U=(ge=Y.drawingVolume)==null?void 0:ge.img;if(!U){window.alert("Nothing drawn yet — pick a pen and draw on the image first.");return}const E=Y.volumes[1].img;if(E instanceof Float32Array){window.alert("Drawing edits label segmentations, not probability maps.");return}const de=Y.volumes[1],ne=de.dimsRAS;if(!ne||U.length!==ne[1]*ne[2]*ne[3]){window.alert("The drawing does not match the current image — redraw it.");return}const We=x===1?1:0;let be=0;for(let ve=0;ve<ne[3];ve++)for(let xe=0;xe<ne[2];xe++)for(let Xe=0;Xe<ne[1];Xe++,be++)U[be]>0&&(E[ts(de,[Xe,xe,ve])]=We);Y.closeDrawing(),yield Y.updateGLVolume(),Y.drawIsEnabled=!1,F(-1)})}h&&(h.onclick=x=>{x.stopPropagation(),k(w.hidden)}),y&&y.querySelectorAll(".chip").forEach(x=>{x.onclick=()=>F(parseInt(x.dataset.pen,10))}),b&&b.querySelectorAll(".chip").forEach(x=>{x.onclick=()=>$(parseInt(x.dataset.apply,10))}),document.addEventListener("click",x=>{!w||w.hidden||x.target.closest(".popover-wrap")||k(!1)}),document.addEventListener("keydown",x=>{x.key==="Escape"&&k(!1)});const B=document.getElementById("appDialog");if(B&&!("closedBy"in HTMLDialogElement.prototype)){let x=!1;const U=E=>{const de=B.getBoundingClientRect();return E.clientX<de.left||E.clientX>de.right||E.clientY<de.top||E.clientY>de.bottom};B.addEventListener("pointerdown",E=>{x=E.target===B&&U(E)}),B.addEventListener("pointerup",E=>{x&&E.target===B&&U(E)&&B.close(),x=!1})}aboutBtn.onclick=function(){Yt("About BrainChop",`
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
    `)};const S=document.getElementById("shadingBtn");S.onclick=()=>{const x=S.classList.toggle("active");S.setAttribute("aria-pressed",String(x)),Y.volumeIllumination=x?.5:0},diagnosticsBtn.onclick=function(){let x=e;if(x.length<1&&window.webgpuDiagnostics){const E=window.webgpuDiagnostics;x=`:: Startup Diagnostics ::
`,x+=`Secure Context: ${E.secureContext}
`,x+=`WebGPU Enabled: ${pn}
`,x+=`F16 Support: ${E.f16Support}
`,E.error&&(x+=`Error: ${E.error}
`),x+=`User Agent: ${navigator.userAgent}
`}if(x.length<1){Yt("Diagnostics","No diagnostic string generated: run a model to create diagnostics");return}let U=x;t=t.slice(0,-2),t!==""&&U.includes("Status: OK")&&(U=U.replace("Status: OK",`Status: ${t}`)),t="",navigator.clipboard.writeText(U).then(()=>{Yt("Diagnostics",`<p>Diagnostics copied to clipboard</p><pre style="white-space: pre-wrap; font-family: monospace; font-size: 0.9em; overflow-x: auto;">${U}</pre>`)}).catch(E=>{Yt("Diagnostics",`<p>Failed to copy to clipboard.</p><pre style="white-space: pre-wrap; font-family: monospace; font-size: 0.9em; overflow-x: auto;">${U}</pre>`)})},opacitySlider0.oninput=()=>{Y.volumes[0]&&(Y.volumes[0].opacity=Number(opacitySlider0.value)),Y.updateGLVolume()};function M(){const x=Number(opacitySlider1.value);Y.volumes.slice(1).forEach((U,E)=>{U.opacity=(m==null?void 0:m[E])===U&&c!==null&&E!==c?0:x}),Y.updateGLVolume()}opacitySlider1.oninput=M;function z(x=null){const U=x==null?void 0:x.probabilityUnderlayOpacity;U!==void 0?(g===null&&(g=opacitySlider0.value),opacitySlider0.value=U,Y.volumes[0]&&(Y.volumes[0].opacity=Number(U))):g!==null&&(opacitySlider0.value=g,g=null,Y.volumes[0]&&(Y.volumes[0].opacity=Number(opacitySlider0.value)))}function R(){return ze(this,null,function*(){const x=Y.volumes[0];let U=x.dims[1]===256&&x.dims[2]===256&&x.dims[3]===256&&x.img instanceof Uint8Array&&x.img.length===256*256*256;if((x.permRAS[0]!==-1||x.permRAS[1]!==3||x.permRAS[2]!==-2)&&(U=!1),U)return;Bt("Conforming input volume to 256³...",.05),yield Mr(),yield T();const E=yield Y.volumeTransform.conform(x,{toRAS:!1}),[de,ne]=[p,v],We=modelSelect.value;yield Y.removeVolume(0),yield Y.addVolume(E),[p,v]=[de,ne],modelSelect.value=We,a()})}function G(){for(c=null,m=null;Y.model.volumes.length>1;)Y.model.removeVolume(Y.model.volumes.length-1)}function T(){return ze(this,null,function*(){G(),yield Y.updateGLVolume()})}function C(){return Y.volumes.length>=2&&Y.volumes[1].colormapLabel?Y.volumes[1]:null}function I(){l=null,d=null,u=null,N&&(N.style.display="none")}function ie(){const x=C();if(x){if(d===null&&(d=x.img),l===null)x.img=d,u=null;else{const U=d,E=new U.constructor(U.length);for(let de=0;de<U.length;de++)E[de]=U[de]===l?l:0;x.img=E,u=ce(l)}Y.updateGLVolume(),W()}}function ce(x){const U=Y.volumes[0],E=d||Y.volumes[1]&&Y.volumes[1].img;if(!U||!E)return null;const de=U.hdr.pixDims||[],ne=de[1]&&de[2]&&de[3]?de[1]*de[2]*de[3]:1,We=se(U.img,E,ne),be=We.reduce((Te,ot)=>Te+ot.volume_mm3,0),ge=We.find(Te=>Te.label===x);if(!ge)return null;const ve=be>0?ge.volume_mm3/be*100:0,xe=[ge.name,`${Ge(ge.volume_mm3)} cm3   (${ve.toFixed(1)}% of brain)`,`${ge.voxels.toLocaleString()} voxels`,`intensity  ${ge.mean.toFixed(0)} +/- ${ge.stdev.toFixed(0)}`];let Xe=[1,1,1,1];if(s&&s.R&&s.R[x]!=null){const Te=ot=>Math.min(255,ot*.55+130)/255;Xe=[Te(s.R[x]),Te(s.G[x]),Te(s.B[x]),1]}return{lines:xe,color:Xe}}let N=null;function W(){var ge,ve;N||(N=document.createElement("div"),N.style.cssText="position:absolute;pointer-events:none;font:13px/1.55 system-ui,sans-serif;text-shadow:0 1px 2px #000;white-space:pre;color:#ebebeb",Y.canvas.parentElement.appendChild(N));const x=(ve=(ge=Y.view)==null?void 0:ge.screenSlices)==null?void 0:ve.find(xe=>xe.axCorSag===4);if(l===null||!u||!C()||!x){N.style.display="none";return}const U=window.devicePixelRatio||1,[E,de]=x.leftTopWidthHeight;Object.assign(N.style,{left:`${E/U+8}px`,top:`${de/U+8}px`});const{lines:ne,color:We}=u,be=We.slice(0,3).map(xe=>Math.round(xe*255)).join(",");N.innerHTML=`<span style="color:rgb(${be})">${Kt(ne[0])}</span>
`+ne.slice(1).map(Kt).join(`
`),N.style.display="block"}function X(){const x=C();if(!x||!P)return null;const U=ts(x,P);if(U===null)return null;const E=(d||x.img)[U];return E===void 0?null:Math.round(E*x.hdr.scl_slope+x.hdr.scl_inter)}function Q(x){C()&&(l=x===0||x===l?null:x,ie())}function O(){if(!m||!P||m.some((E,de)=>Y.volumes[de+1]!==E))return;let x=null,U=0;for(let E=0;E<m.length;E++){const de=m[E],ne=ts(de,P);if(ne===null)return;const We=de.img[ne];Number.isFinite(We)&&We>U&&(U=We,x=E)}return x}function le(x){if(x[f]){if(C()){const U=X();if(U===null||Number.isNaN(U))return;Q(U)}else{const U=O();if(U===void 0)return;const E=U===c?null:U;E!==c&&(c=E,M())}x.preventDefault()}}function ue(){return ze(this,null,function*(){if(!Gn){Gn=!0,Tn=[];try{yield Ce()}finally{Gn=!1,modelSelect.value="-1",a()}}})}function Ce(){return ze(this,null,function*(){var ot,Ve;const x=modelSelect.value;if(x==="-1"||modelSelect.selectedIndex<0)return;const U=document.getElementById("memstatusItem");U&&(U.hidden=!0),I(),yield R();const E=bn[x],de=(new URLSearchParams(window.location.search).get("precision")||"").toLowerCase(),We=bt(bt({},Es(E,de!=="fp16"&&de!=="fp32")),de==="fp32"?{forceFP32:!0}:{}),be=bt({},fa),ge=new URL("./",window.location.href).href;be.rootURL=ge.endsWith("/")?ge.slice(0,-1):ge;const ve=Y.volumes[0].img;let xe=null;const Xe=Ra&&!We.quantize8Bit,Te=Xe;if(Xe&&pn&&We.webgpu_safetensor&&console.info("Safari WebGPU legacy gate active for non-V4 model; routing to native WebGL2."),!Te&&(!en||en.__isLost)&&"gpu"in navigator&&ns<2&&(ot=window.webgpuDiagnostics)!=null&&ot.adapterObtained&&(ns++,console.info(`[WebGPU] Re-initializing device after prior loss (attempt ${ns})...`),yield js((Ve=Y.view)==null?void 0:Ve.gl)),pn&&en&&!en.__isLost&&!Te&&We.webgpu_safetensor){console.log("Attempting WebGPU backend...");const te=Ct(bt({},We),{enableTTA:!1});try{yield ca(en,be,te,Y.volumes[0].hdr,ve,gt,Bt);return}catch(H){xe=H,console.error("WebGPU inference failed, falling back to native WebGL2.",H)}}if(E.webgpu_safetensor){const te=de==="int8"||de==="rgba8",H=Ct(bt({},Es(E,!1)),{quantize8Bit:te,autoQuantize8BitFallback:!te&&!!E.turbo});try{const{runInferenceWebGl2:ae,nativeWebgl2Available:Ye}=yield ft(()=>ze(null,null,function*(){const{runInferenceWebGl2:it,nativeWebgl2Available:Qe}=yield import("./inference-webgl2-IAboq3wV.js");return{runInferenceWebGl2:it,nativeWebgl2Available:Qe}}),[],import.meta.url);if(Ye()){console.log("Attempting native WebGL2 runner..."),yield ae(be,H,Y.volumes[0].hdr,ve,gt,Bt);return}xe=new Error("Native WebGL2 unavailable (no OffscreenCanvas WebGL2 context)."),console.warn(xe.message)}catch(ae){xe=ae,console.error("Native WebGL2 failed.",ae)}}Ia(xe||new Error(`No available backend could run ${We.modelName}.`))})}modelSelect.onchange=()=>(a(),ue()),a();function ke(x){return ze(this,null,function*(){const U=C(),E=l!==null&&U&&d;E&&(U.img=d);try{return yield x()}finally{E&&ie()}})}function Ae(){const x=Y.volumes[1],U=(r==null?void 0:r.type)==="Brain_Extraction"?i:l!==null&&d?d:x.img;if(!U||U.length!==x.img.length)throw new Error("The segmentation mask is unavailable. Run the model again.");const E=new Uint8Array(U.length);for(let ne=0;ne<U.length;ne++)E[ne]=U[ne]!==0?1:0;const de=Hs(x,E,"brain_mask");return Object.assign(de.hdr,{datatypeCode:2,numBitsPerVoxel:8,scl_slope:1,scl_inter:0,cal_min:0,cal_max:1,intent_code:1002}),de}function j(){return ze(this,arguments,function*({includeMask:x=!1,useFreeSurfer:U=!1}={}){if(Y.volumes.length<2){window.alert("No segmentation to save (run a model first).");return}const E=U?Rn(n):null,de=Y.volumes.slice(1);yield ke(()=>ze(null,null,function*(){for(const ne of de){const We=!!ne.colormapLabel||ne.hdr.intent_code===1002;if(E&&We){const{img:be,maxLabel:ge}=Sa(ne.img,E),ve=es(ne,be,ne.name,{datatypeCode:4,numBitsPerVoxel:16,scl_slope:1,scl_inter:0,cal_min:0,cal_max:ge,intent_code:1002});yield yn(ve,ee(ne,de.length,"_fs"))}else yield yn(ne,ee(ne,de.length,""))}x&&(yield yn(Ae(),"binary_mask.nii.gz"))}))})}function ee(x,U,E){return U>1?`segmentation_${x.name}${E}.nii.gz`:`segmentation${E}.nii.gz`}function A(){if(Y.volumes.length<1){window.alert("No image loaded.");return}yn(Y.volumes[0],"conformed_input.nii.gz")}function K(){return ze(this,null,function*(){if(Y.volumes.length<1){window.alert("No image loaded.");return}yield ke(()=>ze(null,null,function*(){yield Y.saveDocument("brainchop.nvd")}))})}function D(){return ze(this,arguments,function*({includeMask:x=!1,useFreeSurfer:U=!1}={}){if(Y.volumes.length<2){window.alert("No segmentation to save (run a model first).");return}if(!p||!p.hdr||!p.hdr.affine){window.alert("Original input grid is unavailable — reload the image and try again.");return}const E=U?Rn(n):null;Bt("Reslicing to native space…",0),yield new Promise(de=>setTimeout(de,30));try{const de=Y.volumes.slice(1);for(const ne of de){const We=!!ne.colormapLabel||ne.hdr.intent_code===1002,be=E&&We?E:null,ge=yield ke(()=>re(ne,be));yield yn(ge,ee(ne,de.length,be?"_fs_native":"_native"))}if(x){const ne=re(Ae());yield yn(ne,"binary_mask_native.nii.gz")}Bt("Saved native-space segmentation.",1)}catch(de){console.error("Native-space reslice failed:",de),window.alert("Native-space export failed: "+(de&&de.message?de.message:de))}})}function re(x,U=null){const E=x.img,de=p.hdr.affine,ne=p.hdr.dims[1],We=p.hdr.dims[2],be=p.hdr.dims[3],ge=x.hdr.dims[1],ve=x.hdr.dims[2],xe=x.hdr.dims[3],Xe=(Se,Fe)=>[Se[0][0]*Fe[0]+Se[0][1]*Fe[1]+Se[0][2]*Fe[2]+Se[0][3],Se[1][0]*Fe[0]+Se[1][1]*Fe[1]+Se[1][2]*Fe[2]+Se[1][3],Se[2][0]*Fe[0]+Se[2][1]*Fe[1]+Se[2][2]*Fe[2]+Se[2][3]],Te=Or();if(!Nr(Te,Dr(...x.hdr.affine[0],...x.hdr.affine[1],...x.hdr.affine[2],...x.hdr.affine[3])))throw new Error("Segmentation affine is not invertible");const ot=(Se,Fe)=>[Se[0]*Fe[0]+Se[1]*Fe[1]+Se[2]*Fe[2]+Se[3],Se[4]*Fe[0]+Se[5]*Fe[1]+Se[6]*Fe[2]+Se[7],Se[8]*Fe[0]+Se[9]*Fe[1]+Se[10]*Fe[2]+Se[11]],Ve=Se=>ot(Te,Xe(de,Se)),te=Ve([0,0,0]),H=Ve([1,0,0]).map((Se,Fe)=>Se-te[Fe]),ae=Ve([0,1,0]).map((Se,Fe)=>Se-te[Fe]),Ye=Ve([0,0,1]).map((Se,Fe)=>Se-te[Fe]),it=!!x.colormapLabel||x.hdr.intent_code===1002,Qe=ne*We*be,qe=Hs(p),Ke=(Se,Fe,St)=>Se>=0&&Se<ge&&Fe>=0&&Fe<ve&&St>=0&&St<xe?E[Se+Fe*ge+St*ge*ve]:0;if(it){const Se=[];for(const je of[-.25,.25])for(const _e of[-.25,.25])for(const fe of[-.25,.25])Se.push([je*H[0]+_e*ae[0]+fe*Ye[0],je*H[1]+_e*ae[1]+fe*Ye[1],je*H[2]+_e*ae[2]+fe*Ye[2]]);const Fe=new Int16Array(Qe),St=U?U.length:0;let Lt=0;const zt=new Int32Array(8),Gt=new Int32Array(8);let nn=0;for(let je=0;je<be;je++)for(let _e=0;_e<We;_e++){let fe=te[0]+_e*ae[0]+je*Ye[0],Pe=te[1]+_e*ae[1]+je*Ye[1],Me=te[2]+_e*ae[2]+je*Ye[2];for(let ye=0;ye<ne;ye++){let He=0;for(let ct=0;ct<8;ct++){const It=Ke(Math.round(fe+Se[ct][0]),Math.round(Pe+Se[ct][1]),Math.round(Me+Se[ct][2]));let Oe=-1;for(let et=0;et<He;et++)if(zt[et]===It){Oe=et;break}Oe<0?(zt[He]=It,Gt[He]=1,He++):Gt[Oe]++}let Ze=zt[0],at=Gt[0];for(let ct=1;ct<He;ct++)Gt[ct]>at&&(at=Gt[ct],Ze=zt[ct]);U&&Ze>=0&&Ze<St&&(Ze=U[Ze]),Ze>Lt&&(Lt=Ze),Fe[nn++]=Ze,fe+=H[0],Pe+=H[1],Me+=H[2]}}qe.hdr.datatypeCode=4,qe.hdr.numBitsPerVoxel=16,qe.hdr.scl_slope=1,qe.hdr.scl_inter=0,qe.hdr.cal_min=0,qe.hdr.cal_max=Lt,qe.hdr.intent_code=1002,qe.img=Fe}else{const Se=x.img instanceof Float32Array,Fe=Se?255:1,St=Se?.5:0,Lt=Se?new Uint8Array(Qe):qe.img;Lt.fill(0),Se&&(Object.assign(qe.hdr,{datatypeCode:2,numBitsPerVoxel:8,cal_min:0,cal_max:1}),qe.img=Lt),qe.hdr.scl_slope=1/Fe,qe.hdr.scl_inter=0;const Gt=Se?(je,_e,fe)=>{const Pe=Math.floor(je),Me=Math.floor(_e),ye=Math.floor(fe),He=je-Pe,Ze=_e-Me,at=fe-ye,ct=Ke(Pe,Me,ye),It=Ke(Pe+1,Me,ye),Oe=Ke(Pe,Me+1,ye),et=Ke(Pe+1,Me+1,ye),yt=Ke(Pe,Me,ye+1),lt=Ke(Pe+1,Me,ye+1),nt=Ke(Pe,Me+1,ye+1),me=Ke(Pe+1,Me+1,ye+1),we=ct+He*(It-ct),pe=Oe+He*(et-Oe),rt=yt+He*(lt-yt),$t=nt+He*(me-nt),vt=we+Ze*(pe-we),xt=rt+Ze*($t-rt);return vt+at*(xt-vt)}:(je,_e,fe)=>Ke(Math.round(je),Math.round(_e),Math.round(fe));let nn=0;for(let je=0;je<be;je++)for(let _e=0;_e<We;_e++){let fe=te[0]+_e*ae[0]+je*Ye[0],Pe=te[1]+_e*ae[1]+je*Ye[1],Me=te[2]+_e*ae[2]+je*Ye[2];for(let ye=0;ye<ne;ye++)Lt[nn++]=Gt(fe,Pe,Me)*Fe+St,fe+=H[0],Pe+=H[1],Me+=H[2]}}return qe}let oe=!1,J=!1;const V={cube:'<svg viewBox="0 0 24 24" class="save-opt-ico" aria-hidden="true"><path d="M12 2.75l8.25 4.75v9L12 21.25 3.75 16.5v-9z"/><path d="M12 12v9.25M3.75 7.5L12 12l8.25-4.5"/></svg>',grid:'<svg viewBox="0 0 24 24" class="save-opt-ico" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="2.5"/><path d="M3.5 9.5h17M3.5 14.5h17M9.5 3.5v17M14.5 3.5v17"/></svg>',volume:'<svg viewBox="0 0 24 24" class="save-opt-ico" aria-hidden="true"><path d="M12 3.5l8.5 4.5-8.5 4.5L3.5 8z"/><path d="M3.5 12l8.5 4.5 8.5-4.5M3.5 16l8.5 4.5 8.5-4.5"/></svg>',scene:'<svg viewBox="0 0 24 24" class="save-opt-ico" aria-hidden="true"><rect x="3.5" y="4.5" width="17" height="15" rx="2.5"/><path d="M3.5 9.5h17M9.5 9.5v10"/></svg>',arrow:'<svg viewBox="0 0 24 24" class="save-opt-arrow" aria-hidden="true"><path d="M12 4.5v11"/><path d="M7.5 11.5L12 16l4.5-4.5"/><path d="M5 19.5h14"/></svg>'},Z=[{act:j,group:"seg",icon:"cube",title:"Conformed space",sub:"256³ · 1 mm isotropic",need:"seg"},{act:D,group:"seg",icon:"grid",title:"Native space",sub:"Resampled to the input grid",need:"seg"},{act:A,group:"vol",icon:"volume",title:"Conformed input volume",sub:"Resampled T1 · 256³ · 1 mm",need:"img"},{act:K,group:"vol",icon:"scene",title:"Scene (.nvd)",sub:"Full viewer state document",need:"img"}];function q(){const x=Y.volumes.length>=1,U=Y.volumes.length>=2,E=U&&r&&r.outputType!=="probability"&&(r.type!=="Brain_Extraction"||!!i),de=U&&r&&r.outputType!=="probability"&&r.type!=="Brain_Extraction"&&!!Rn(n),ne=te=>te==="seg"?U:x;let We=!1;const be=te=>Z.map((H,ae)=>({o:H,i:ae})).filter(({o:H})=>H.group===te).map(({o:H,i:ae})=>{const Ye=ne(H.need),it=Ye&&!We?(We=!0," autofocus"):"";return`<button type="button" class="save-opt${Ye?"":" disabled"}" data-i="${ae}"${Ye?"":" disabled"}${it}>
          ${V[H.icon]}
          <span class="save-opt-copy">
            <span class="save-opt-title">${H.title}</span>
            <span class="save-opt-sub">${H.sub}</span>
          </span>
          ${V.arrow}
        </button>`}).join(""),ge=[];de&&ge.push(`
        <label class="save-check-row" for="saveFreeSurfer">
          <input type="checkbox" id="saveFreeSurfer" class="save-checkbox"${oe?" checked":""}>
          <span class="save-check-copy">
            <span class="save-check-title">FreeSurfer label IDs <span class="save-badge">Freeview</span></span>
            <span class="save-check-sub">FreeSurferColorLUT numbering · open directly with :colormap=lut</span>
          </span>
        </label>`),E&&ge.push(`
        <label class="save-check-row" for="saveBinaryMask">
          <input type="checkbox" id="saveBinaryMask" class="save-checkbox"${J?" checked":""}>
          <span class="save-check-copy">
            <span class="save-check-title">Also save binary mask</span>
            <span class="save-check-sub">Foreground 1 · background 0</span>
          </span>
        </label>`);const ve=ge.length?`<div class="save-modifiers" role="group" aria-label="Segmentation export options">${ge.join("")}</div>`:"",Xe=`
      <div class="save-sheet">
        <section class="save-section">
          <div class="save-section-head">
            <span class="save-section-label">Segmentation</span>
            ${U?"":'<span class="save-section-hint">Run a model first</span>'}
          </div>
          <div class="save-options">${be("seg")}</div>
          ${ve}
        </section>
        <section class="save-section save-section-divider">
          <div class="save-section-head">
            <span class="save-section-label">Volume &amp; Scene</span>
          </div>
          <div class="save-options">${be("vol")}</div>
        </section>
      </div>`;Yt("Save",Xe,{hideClose:!0,saveMode:!0});const Te=document.getElementById("dialogMessage");if(!Te)return;const ot=Te.querySelector("#saveFreeSurfer");ot&&(ot.onchange=()=>{oe=ot.checked});const Ve=Te.querySelector("#saveBinaryMask");Ve&&(Ve.onchange=()=>{J=Ve.checked}),Te.querySelectorAll(".save-opt:not(.disabled)").forEach(te=>{te.onclick=()=>{var Qe,qe;const H=Z[parseInt(te.dataset.i,10)],ae=H.need==="seg"&&!!((Qe=Te.querySelector("#saveBinaryMask"))!=null&&Qe.checked),Ye=H.need==="seg"&&de&&!!((qe=Te.querySelector("#saveFreeSurfer"))!=null&&qe.checked),it=document.getElementById("appDialog");it&&it.open&&it.close(),H.need==="seg"?H.act({includeMask:ae,useFreeSurfer:Ye}):H.act()}})}const he=document.getElementById("saveBtn");he&&(he.onclick=q);function se(x,U,E){const ne=new Map,We=U.length;for(let ve=0;ve<We;ve++){const xe=U[ve];if(xe===0)continue;let Xe=ne.get(xe);Xe||(Xe={count:0,sum:0,sumSq:0,hist:new Float64Array(256)},ne.set(xe,Xe));const Te=x[ve];Xe.count++,Xe.sum+=Te,Xe.sumSq+=Te*Te,Xe.hist[Te]++}const be=(ve,xe,Xe)=>{const Te=Xe*xe;let ot=0;for(let Ve=0;Ve<ve.length;Ve++)if(ot+=ve[Ve],ot>=Te)return Ve;return ve.length-1},ge=[];for(const[ve,xe]of[...ne.entries()].sort((Xe,Te)=>Xe[0]-Te[0])){const Xe=xe.sum/xe.count,Te=Math.max(0,xe.sumSq/xe.count-Xe*Xe);let ot=0,Ve=0;for(let te=0;te<xe.hist.length;te++)if(xe.hist[te]>0){ot=te;break}for(let te=xe.hist.length-1;te>=0;te--)if(xe.hist[te]>0){Ve=te;break}ge.push({label:ve,name:n&&n[ve]!=null?n[ve]:`label_${ve}`,voxels:xe.count,volume_mm3:xe.count*E,min:ot,max:Ve,q1:be(xe.hist,xe.count,.25),median:be(xe.hist,xe.count,.5),q3:be(xe.hist,xe.count,.75),mean:Xe,stdev:Math.sqrt(Te)})}return ge}function Ue(x,U=null){const E=U?["label","fs_label","name","voxels","volume_mm3","min","max","q1","median","q3","mean","stdev"]:["label","name","voxels","volume_mm3","min","max","q1","median","q3","mean","stdev"],de=be=>Number.isInteger(be)?String(be):be.toFixed(6),ne=be=>/[",\n]/.test(be)?`"${String(be).replace(/"/g,'""')}"`:String(be),We=[E.join(",")];for(const be of x){const ge=U?[be.label,be.label<U.length?U[be.label]:be.label,ne(be.name)]:[be.label,ne(be.name)];ge.push(be.voxels,de(be.volume_mm3),be.min,be.max,be.q1,be.median,be.q3,de(be.mean),de(be.stdev)),We.push(ge.join(","))}return We.join(`
`)+`
`}function Be(x,U=null){const E=new Blob([Ue(x,U)],{type:"text/csv"}),de=URL.createObjectURL(E),ne=document.createElement("a");ne.href=de,ne.download="mask_stats.csv",document.body.appendChild(ne),ne.click(),ne.remove(),URL.revokeObjectURL(de)}const Ge=x=>{const U=x/1e3;return U>=10?Math.round(U).toLocaleString():U.toFixed(1)};function Ie(x,U,E=null){const de=Math.max(...x.map(ve=>ve.volume_mm3)),ne=ve=>s&&s.R&&s.R[ve.label]!=null?`rgb(${s.R[ve.label]},${s.G[ve.label]},${s.B[ve.label]})`:"#6b9bd1";let We="";for(const ve of x){const xe=U>0?ve.volume_mm3/U*100:0,Xe=de>0?ve.volume_mm3/de*100:0,Te=l===ve.label,ot=E&&ve.label<E.length?E[ve.label]:null,Ve=`<span class="stat-val" data-cm3="${Ge(ve.volume_mm3)}" data-pct="${xe.toFixed(1)}%">${Ge(ve.volume_mm3)}</span>`,te=`<span class="stat-bar" style="width:${Xe.toFixed(2)}%;background:${ne(ve)}" data-w-abs="${Xe.toFixed(2)}" data-w-pct="${xe.toFixed(2)}"></span>`,H=(Ye,it)=>`<div class="stat-kv"><span class="k">${Ye}</span><span class="v">${it}</span></div>`,ae=H("min",ve.min)+H("max",ve.max)+H("Q1",ve.q1)+H("Q3",ve.q3)+H("median",ve.median)+H("mean",ve.mean.toFixed(2))+H("SD",ve.stdev.toFixed(2))+H("voxels",ve.voxels.toLocaleString());We+=`
        <div class="stat-row${Te?" is-isolated":""}" data-label="${ve.label}" data-name="${Kt(ve.name.toLowerCase())}">
          <div class="stat-line">
            <button type="button" class="stat-trigger" aria-expanded="false">
              <span class="stat-chevron" aria-hidden="true"></span>
              <span class="stat-swatch" style="background:${ne(ve)}" aria-hidden="true"></span>
              <span class="stat-name">${Kt(ve.name)}</span>
              <span class="stat-track" aria-hidden="true">${te}</span>
              ${Ve}
            </button>
            <button type="button" class="stat-iso${Te?" active":""}" aria-pressed="${Te}" aria-label="Isolate ${Kt(ve.name)}">${Te?"isolated":"isolate"}</button>
          </div>
          <div class="stat-detail" hidden>
            <div class="stat-detail-meta">
              <span class="stat-detail-fullname">${Kt(ve.name)}</span>
              <span class="stat-detail-badges">
                <span class="stat-id-chip">ID ${ve.label}</span>
                ${ot?`<span class="save-badge">FS ${ot}</span>`:""}
              </span>
            </div>
            <div class="stat-detail-grid">${ae}</div>
          </div>
        </div>`}const be=x.length===1?"region":"regions",ge=x.length>8?`<search class="stat-search">
           <input type="search" id="statsFilterInput" class="stat-filter" placeholder="Filter regions…" aria-label="Filter regions" autocorrect="off" autocapitalize="none" spellcheck="false">
         </search>`:"";return`
      <div id="statsPanel">
        <div class="stat-toolbar">
          <div class="stat-toggle" role="group" aria-label="Volume display unit">
            <button type="button" data-mode="cm3" class="active" aria-pressed="true">cm³</button>
            <button type="button" data-mode="pct" aria-pressed="false">% of total</button>
          </div>
          <span class="stat-total" id="statsUnitLabel">${x.length} ${be} &middot; ${Ge(U)} cm³</span>
          ${ge}
        </div>
        <div id="statsRows">
          ${We}
          <p id="statsEmpty" class="stat-empty" hidden>No matching regions</p>
        </div>
        <div class="stat-footer">
          <span class="stat-footer-hint">Select a row for intensity stats &middot; Isolate solos in 3D</span>
          <button type="button" id="statsDownloadBtn" class="stat-csv-btn">
            ${V.arrow}
            <span>Download CSV</span>
          </button>
        </div>
      </div>`}saveStatsBtn.onclick=function(){if(Y.volumes.length<2){Yt("Region volumes","<p>No segmentation to measure — run a model first.</p>");return}if(Y.volumes[1].img instanceof Float32Array){Yt("Region volumes","<p>Region statistics require a discrete label segmentation, not continuous probability maps.</p>");return}const x=Y.volumes[0].img,U=d||Y.volumes[1].img;if(!x||!U||x.length!==U.length){Yt("Region volumes","<p>Input and segmentation grids do not match.</p>");return}const E=Y.volumes[0].hdr.pixDims||[],de=E[1]&&E[2]&&E[3]?E[1]*E[2]*E[3]:1;let ne=se(x,U,de);if(ne.length===0){Yt("Region volumes","<p>No non-background labels found in the segmentation.</p>");return}ne=ne.slice().sort((Ve,te)=>te.volume_mm3-Ve.volume_mm3);const We=ne.reduce((Ve,te)=>Ve+te.volume_mm3,0),be=r&&r.type!=="Brain_Extraction"?Rn(n):null;Yt("Region volumes",Ie(ne,We,be),{hideClose:!0,statsMode:!0});const ge=document.getElementById("statsPanel");if(!ge)return;let ve="cm3",xe=ne.length;const Xe=()=>{const Ve=document.getElementById("statsUnitLabel");if(!Ve)return;const te=xe===ne.length?`${ne.length} ${ne.length===1?"region":"regions"}`:`${xe} of ${ne.length} regions`,H=ve==="pct"?"100% of volume":`${Ge(We)} cm³`;Ve.innerHTML=`${te} &middot; ${H}`};ge.querySelectorAll(".stat-toggle button").forEach(Ve=>{Ve.onclick=()=>{ve=Ve.dataset.mode,ge.querySelectorAll(".stat-toggle button").forEach(te=>{const H=te===Ve;te.classList.toggle("active",H),te.setAttribute("aria-pressed",String(H))}),Xe(),ge.querySelectorAll(".stat-row").forEach(te=>{const H=te.querySelector(".stat-val"),ae=te.querySelector(".stat-bar");H.textContent=ve==="pct"?H.dataset.pct:H.dataset.cm3,ae.style.width=(ve==="pct"?ae.dataset.wPct:ae.dataset.wAbs)+"%"})}});const Te=document.getElementById("statsFilterInput"),ot=document.getElementById("statsEmpty");if(Te){const Ve=()=>{const te=Te.value.trim().toLowerCase();xe=0,ge.querySelectorAll(".stat-row").forEach(H=>{const ae=!te||H.dataset.name.includes(te)||H.dataset.label===te;H.hidden=!ae,ae&&xe++}),ot&&(ot.hidden=xe>0),Xe()};Te.oninput=Ve,Te.addEventListener("keydown",te=>{te.key==="Escape"&&Te.value!==""&&(te.preventDefault(),te.stopPropagation(),Te.value="",Ve())})}ge.querySelectorAll(".stat-trigger").forEach(Ve=>{Ve.onclick=()=>{const te=Ve.closest(".stat-row"),H=te.querySelector(".stat-detail"),ae=H.hidden;H.hidden=!ae,te.classList.toggle("is-expanded",ae),Ve.setAttribute("aria-expanded",String(ae))}}),ge.querySelectorAll(".stat-iso").forEach(Ve=>{Ve.onclick=()=>{const te=parseInt(Ve.closest(".stat-row").dataset.label,10);Number.isNaN(te)||Q(te);const H=document.getElementById("appDialog");H&&H.open&&H.close()}}),document.getElementById("statsDownloadBtn").onclick=()=>Be(ne,be)};function tt(){Y.volumes.length<=1&&(p=Y.volumes[0]||null,v=p&&p.name?p.name:"input.nii.gz",r=null,i=null,z(),modelSelect.value="-1",a(),Y.volumes[0]&&opacitySlider0.oninput())}const De=new Map;function Ee(x){return ze(this,null,function*(){if(De.has(x))return De.get(x);const E=yield(yield fetch(x)).json();return De.set(x,E),E})}function $e(x,U,E=1){let de=0;for(let ne=0;ne<256;ne++)x[ne]>0&&de++;return(!U||de!==U.length)&&(t="Failed to Predict Some Labels - "),U.map((ne,We)=>{const be=We<256?x[We]:0,ge=be>0?`${Ge(be*E)} cm3`:"Missing";return ge==="Missing"&&(t+=`${ne}, `),`${ne}   ${ge}`})}function Je(x,U,E){return ze(this,null,function*(){var xe,Xe;const de=(xe=U.probabilityDisplayMin)!=null?xe:.005,{probabilityOverlayAlpha:ne=96,probabilityOverlayFloor:We=192}=U,be=(E==null?void 0:E.tint)||[255,255,255],ge=`probability-light-${be.join("-")}-${We}-${ne}`;if(!Y.hasColormap(ge)){const[Te,ot,Ve]=be.map(te=>Math.round(te*We/255));Y.addColormap(ge,{R:[Te,be[0]],G:[ot,be[1]],B:[Ve,be[2]],A:[0,ne],I:[0,255]})}const ve=es(Y.volumes[0],x instanceof Float32Array?x:Float32Array.from(x),(Xe=E==null?void 0:E.name)!=null?Xe:Y.volumes[0].name,{scl_inter:0,scl_slope:1,datatypeCode:16,numBitsPerVoxel:32,cal_min:0,cal_max:1,intent_code:1001},{calMin:de,calMax:1,robustMin:de,robustMax:1,globalMin:0,globalMax:1,colormapType:1,colormap:ge,opacity:Number(opacitySlider1.value),modulateAlpha:1});return ve.modulationImage=ve.id,yield Y.model.addVolume(ve),Y.volumes.at(-1)})}function gt(x,U,E,de){return ze(this,null,function*(){var Te,ot,Ve;if(G(),I(),n=null,s=null,r=E,i=E.type==="Brain_Extraction"&&de||null,E.outputType==="probability"){const te=Array.isArray(x)?x:[x],H=[];for(let ae=0;ae<te.length;ae++)H.push(yield Je(te[ae],E,(Te=E.probabilityTissues)==null?void 0:Te[ae]));E.probabilityPostprocess==="cat-lite"&&H.length===3&&(m=H),z(E),yield Y.updateGLVolume();return}const ne=x instanceof Uint8Array?x:new Uint8Array(x.buffer,x.byteOffset||0,x.byteLength);let We,be=null,ge=0,ve={calMin:0,calMax:255,robustMin:0,robustMax:255,globalMin:0,globalMax:255};if(E.type==="Brain_Masking"){const te=["Background","Brain Mask"];n=te.slice();const H=[0,217],ae=[0,119],Ye=[0,33];s={R:H,G:ae,B:Ye};const it={R:H,G:ae,B:Ye,labels:te},Qe="brainchop-label-mask";Y.addColormap(Qe,it),We=Qe,be=ks(it),ge=1002,ve={calMin:0,calMax:1,robustMin:0,robustMax:1,globalMin:0,globalMax:1}}else if(E.colormapPath){const te=ss(ne),H=yield Ee(E.colormapPath);n=H.labels?H.labels.slice():null,s={R:H.R,G:H.G,B:H.B};const ae=Y.volumes[0].hdr.pixDims||[],Ye=ae[1]&&ae[2]&&ae[3]?ae[1]*ae[2]*ae[3]:1,it=H.labels?$e(te,H.labels,Ye):[],Qe=Ct(bt(bt({R:H.R,G:H.G,B:H.B},H.I?{I:H.I}:{}),H.A?{A:H.A}:{}),{labels:it}),qe=`brainchop-label-${E.id}`;Y.addColormap(qe,Qe),We=qe,be=ks(Qe);const Ke=Math.max(1,((Ve=(ot=H.R)==null?void 0:ot.length)!=null?Ve:256)-1);ge=1002,ve={calMin:0,calMax:Ke,robustMin:0,robustMax:Ke,globalMin:0,globalMax:Ke}}else{const te=ss(ne);ve=qa(te),We=U.atlasSelectedColorTable.toLowerCase(),E.type==="Brain_Extraction"&&(We="copper2"),Y.hasColormap(We)||(We="actc")}const xe=es(Y.volumes[0],ne,Y.volumes[0].name,{datatypeCode:2,numBitsPerVoxel:8,scl_inter:0,scl_slope:1,cal_min:ve.calMin,cal_max:ve.calMax,intent_code:ge},Ct(bt(Ct(bt({},ve),{colormap:We}),be?{colormapLabel:be}:{}),{opacity:Number(opacitySlider1.value)}));yield Y.model.addVolume(xe);const Xe=Y.volumes.at(-1);be&&Xe&&!Xe.colormapLabel&&(Xe.colormapLabel=be),z(E),yield Y.updateGLVolume()})}function ut(x){return ze(this,null,function*(){var U;if(typeof x=="string")try{x=JSON.parse(x)}catch(E){console.error("Failed to parse telemetry data",E);return}x=yield xa(x,(U=Y.view)==null?void 0:U.gl),e=`:: Diagnostics https://github.com/neuroneural/brainchop/issues ::
`;for(const E in x)x[E]!==null&&x[E]!==void 0&&(e+=`${E}: ${x[E]}
`)})}function dt(x){const U=String(x).split(" · ").map(E=>E.trim()).filter(E=>E!=="");return U.length<=1?Kt(String(x)):U.map((E,de)=>`<span class="loc-seg"${de>=2?' style="opacity:.75"':""}>${Kt(E)}</span>`).join('<span class="loc-sep">&middot;</span>')}function Bt(x="",U=-1,E="",de=[]){if(x){console.log(x);const ne=document.getElementById("location");ne&&(ne.innerHTML=dt(x))}if(isNaN(U)){const ne=document.getElementById("memstatusItem");ne&&(ne.hidden=!1),memstatus.style.color="#ef4444",memstatus.textContent="Memory Issue"}else U>=0&&(modelProgress.value=U*modelProgress.max);E&&(Gn?(Tn.push(String(E)),console.warn("[backend]",E)):Yt("Message",Kt(String(E)).replace(/\n/g,"<br>"))),de&&Object.keys(de).length>0&&ut(de)}function Dt(x){P=x.vox,document.getElementById("location").innerHTML=x.string.split("   ").map(U=>U.trim()).filter(U=>U!=="").map(U=>`<span class="loc-seg">${Kt(U)}</span>`).join('<span class="loc-sep">&middot;</span>')}const Ft=new URLSearchParams(window.location.search).get("viewer")==="webgpu"?"webgpu":"webgl2",Y=new qr({backend:Ft,matcaps:{Shiny:Rr}});yield Y.attachTo("gl1"),console.info("NiiVue viewer backend:",Y.backend),Y.backgroundColor=[0,0,0,1],Y.is3DCrosshairVisible=!0,Y.clipPlaneColor=[.7,0,.7,.5],Y.gamma=1,Y.registerVolumeTransform(Tr),Y.isLegendVisible=!1,Y.addEventListener("locationChange",x=>Dt(x.detail)),Y.canvas.addEventListener("click",le),window.addEventListener("keydown",x=>{x.key==="Escape"&&(document.querySelector("dialog[open]")||(l!==null?(l=null,ie()):c!==null&&(c=null,M())))});const tn=Y.drawScene.bind(Y);Y.drawScene=function(x){const U=tn(x);try{W()}catch(E){console.warn("isolation HUD draw failed",E)}return U},Y.primaryDragMode=Ss.crosshair,Y.secondaryDragMode=Ss.slicer3D,Y.showRender=Gr.ALWAYS,Y.isYoked3DTo2DZoom=!1,Y.crosshairGap=11;{const x=document.getElementById("dragSegmented");x&&x.querySelectorAll("button").forEach(U=>U.classList.toggle("active",parseInt(U.dataset.drag,10)===Y.secondaryDragMode))}Y.volumeIsNearestInterpolation=!0,yield Y.loadVolumes([{url:"./t1_crop.nii.gz"}]),modelSelect.innerHTML="";const Pt=document.createElement("option");Pt.text="Run Segmentation Model",Pt.value="-1",Pt.disabled=!0,Pt.selected=!0,Pt.hidden=!0,modelSelect.appendChild(Pt);for(let x=0;x<bn.length;x++){console.log(`Adding model option: ${bn[x].modelName}`);const U=document.createElement("option");U.text=bn[x].modelName,U.value=x,bn[x].type==="Divider"&&(U.disabled=!0),modelSelect.appendChild(U)}Y.addEventListener("volumeLoaded",tt),tt(),Wa(Y),Ca(Y),modelSelect.value="-1",a(),F(-1),yield js((ht=Y.view)==null?void 0:ht.gl);const Mt=new URLSearchParams(window.location.search).get("model");Mt!==null&&Mt!==""&&Number(Mt)>=0&&Number(Mt)<bn.length?(modelSelect.value=String(Number(Mt)),a(),ue()):pn&&en&&(window.requestIdleCallback?U=>window.requestIdleCallback(U,{timeout:600}):U=>setTimeout(U,200))(()=>aa(en))})}function Kt(e){return String(e).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Ia(e){const n=(Tn.length?Tn:[e&&e.message?e.message:String(e||"unknown error")]).map(s=>`<li>${Kt(s)}</li>`).join("");Yt("Segmentation failed",`<p>No available backend could run this model on this device.</p>
     <ul style="margin:0 0 4px 1.1em;padding:0;font-size:0.92em;line-height:1.45">${n}</ul>
     <p style="font-size:0.88em;color:#9aa4af">Full details are in the browser console and under Diagnostics.</p>`)}function Yt(e,t,n={}){const s=document.getElementById("appDialog"),r=document.getElementById("dialogTitle"),i=document.getElementById("dialogMessage"),o=document.getElementById("dialogCloseBtn");if(!s)return;r.textContent=e,i.innerHTML=t,o.style.display=n.hideClose?"none":"",o.onclick=()=>s.close(),s.classList.toggle("dialog-save",!!n.saveMode),s.classList.toggle("dialog-stats",!!n.statsMode);const a=document.getElementById("dialogXBtn");a&&(a.onclick=()=>s.close()),s.showModal()}function Ea(){return ze(this,null,function*(){try{const t=yield(yield fetch("https://api.github.com/repos/neuroneural/brainchop")).json();document.getElementById("star-count").textContent=t.stargazers_count}catch(e){console.error("Error fetching star count:",e)}})}(function(){return ze(this,null,function*(){yield Ga(),yield Ea()})})();export{Qs as a,Zs as d,Ks as p};
