const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./dkatlas24_int8_v3_runner-GLlR3ye9.js","./vendor-niivue-BztUWqGV.js","./vendor-CKvLRpOF.js","./vendor-math-oqRZD8Fx.js"])))=>i.map(i=>d[i]);
var Lo=Object.defineProperty,Uo=Object.defineProperties;var Wo=Object.getOwnPropertyDescriptors;var qn=Object.getOwnPropertySymbols;var Ss=Object.prototype.hasOwnProperty,ks=Object.prototype.propertyIsEnumerable;var Dt=Math.pow,$s=(e,t,n)=>t in e?Lo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,wt=(e,t)=>{for(var n in t||(t={}))Ss.call(t,n)&&$s(e,n,t[n]);if(qn)for(var n of qn(t))ks.call(t,n)&&$s(e,n,t[n]);return e},Ut=(e,t)=>Uo(e,Wo(t));var Ps=(e,t)=>{var n={};for(var s in e)Ss.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&qn)for(var s of qn(e))t.indexOf(s)<0&&ks.call(e,s)&&(n[s]=e[s]);return n};var Ae=(e,t,n)=>new Promise((s,o)=>{var i=f=>{try{a(n.next(f))}catch(l){o(l)}},r=f=>{try{a(n.throw(f))}catch(l){o(l)}},a=f=>f.done?s(f.value):Promise.resolve(f.value).then(i,r);a((n=n.apply(e,t)).next())});import{z as Fn,$ as qo,t as Ro,L as As,Y as Go,M as Ms,a as Eo,_ as Io}from"./vendor-niivue-BztUWqGV.js";import{g as To}from"./vendor-CKvLRpOF.js";import{l as Oo,n as No,p as Do}from"./vendor-math-oqRZD8Fx.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();const Vo="modulepreload",Ho=function(e,t){return new URL(e,t).href},Cs={},_t=function(t,n,s){let o=Promise.resolve();if(n&&n.length>0){let l=function(c){return Promise.all(c.map(g=>Promise.resolve(g).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};const r=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),f=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));o=l(n.map(c=>{if(c=Ho(c,s),c in Cs)return;Cs[c]=!0;const g=c.endsWith(".css"),d=g?'[rel="stylesheet"]':"";if(s)for(let p=r.length-1;p>=0;p--){const m=r[p];if(m.href===c&&(!g||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${d}`))return;const u=document.createElement("link");if(u.rel=g?"stylesheet":Vo,g||(u.as="script"),u.crossOrigin="",u.href=c,f&&u.setAttribute("nonce",f),document.head.appendChild(u),g)return new Promise((p,m)=>{u.addEventListener("load",p),u.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(r){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=r,window.dispatchEvent(a),!a.defaultPrevented)throw r}return o.then(r=>{for(const a of r||[])a.status==="rejected"&&i(a.reason);return t().catch(i)})},_n=new WeakMap;class jo{getLabelMeta(t){return _n.get(t)||null}idx(t,n,s,o){return s*o[0]*o[1]+n*o[0]+t}check_previous_slice(t,n,s,o,i,r,a,f,l,c){let g=0;if(!i)return 0;const d=t[this.idx(s,o,i,r)];if(a>=6){const u=this.idx(s,o,i-1,r);d===t[u]&&(l[g++]=n[u])}if(a>=18){if(s){const u=this.idx(s-1,o,i-1,r);d===t[u]&&(l[g++]=n[u])}if(o){const u=this.idx(s,o-1,i-1,r);d===t[u]&&(l[g++]=n[u])}if(s<r[0]-1){const u=this.idx(s+1,o,i-1,r);d===t[u]&&(l[g++]=n[u])}if(o<r[1]-1){const u=this.idx(s,o+1,i-1,r);d===t[u]&&(l[g++]=n[u])}}if(a===26){if(s&&o){const u=this.idx(s-1,o-1,i-1,r);d===t[u]&&(l[g++]=n[u])}if(s<r[0]-1&&o){const u=this.idx(s+1,o-1,i-1,r);d===t[u]&&(l[g++]=n[u])}if(s&&o<r[1]-1){const u=this.idx(s-1,o+1,i-1,r);d===t[u]&&(l[g++]=n[u])}if(s<r[0]-1&&o<r[1]-1){const u=this.idx(s+1,o+1,i-1,r);d===t[u]&&(l[g++]=n[u])}}return g?(this.fill_tratab(f,l,g,c),l[0]):0}do_initial_labelling(t,n,s,o=null){const i=n[0]|0,r=n[1]|0,a=n[2]|0,f=i*r,l=f*a;let c=1;const g=8192;let d=g,u=new Uint32Array(d),p;if(s===6&&o&&o.il&&o.il.length===l){if(p=o.il,o.dirty)p.fill(0);else if(o.runs&&o.runLen>0){const _=o.runs,h=o.runLen;for(let v=0;v<h;v+=2)p.fill(0,_[v],_[v+1])}}else p=new Uint32Array(l),s===6&&o&&(o.il=p,o.runs=null,o.runLen=0,o.dirty=!1);if(s===6){o&&(o.dirty=!0);const _=(t instanceof Uint8Array||t instanceof Uint8ClampedArray)&&(t.byteOffset&3)===0&&(i&3)===0&&t.length>=l?new Uint32Array(t.buffer,t.byteOffset,l>>2):null;let h=o&&o.runs?o.runs:new Uint32Array(8192),v=h.length,S=0,b=0,k=0,B=0,$=-1,w=-1,G=a,M=-1;for(let C=0;C<a;C++){const I=C*f;for(let E=0;E<r;E++){const P=I+E*i;let j=0;if(_){const ie=P+i>>2;let se=P>>2;for(;se<ie&&_[se]===0;)se++;if(se===ie)continue;j=(se<<2)-P}let R=!1;for(;j<i;j++){const ie=P+j;if(_&&!R&&(j&3)===0&&_[ie>>2]===0){j+=3;continue}const se=t[ie];if(se===0){R&&(h[S++]=ie,R=!1);continue}if(!R){if(S+2>v){v<<=1;const U=new Uint32Array(v);U.set(h),h=U}h[S++]=ie,R=!0}$<0&&($=ie,G=C),w=ie,M=C;let L=0;if(C>0&&t[ie-f]===se&&(b=p[ie-f],L=1),j>0&&t[ie-1]===se){const U=p[ie-1];L===0?b=U:L===1?k=U:B=U,L++}if(E>0&&t[ie-i]===se){const U=p[ie-i];L===0?b=U:L===1?k=U:B=U,L++}if(L===0){if(p[ie]=c,c>=d){d+=g;const U=new Uint32Array(d);U.set(u),u=U}u[c-1]=c,c++}else if(p[ie]=b,L===2&&k!==b){let U=b;for(;u[U-1]!==U;)U=u[U-1];let V=k;for(;u[V-1]!==V;)V=u[V-1];const fe=U<V?U:V;u[U-1]=fe,u[V-1]=fe}else if(L===3&&(k!==b||B!==b)){let U=b;for(;u[U-1]!==U;)U=u[U-1];let V=k;for(;u[V-1]!==V;)V=u[V-1];let fe=B;for(;u[fe-1]!==fe;)fe=u[fe-1];let H=U<V?U:V;fe<H&&(H=fe),u[U-1]=H,u[V-1]=H,u[fe-1]=H}}R&&(h[S++]=P+i)}}for(let C=0;C<c-1;C++){let I=C;for(;u[I]!==I+1;)I=u[I]-1;u[C]=I+1}return o&&(o.runs=h,o.runLen=S,o.dirty=!1),this._lastInitialRange={conn:6,fgStart:$,fgEnd:w,minSl:G,maxSl:M,runs:h,runLen:S},[c-1,u,p]}const m=new Uint32Array(32),x=new Uint32Array(32),A=new Uint32Array(27);for(let _=0;_<a;_++)for(let h=0;h<r;h++)for(let v=0;v<i;v++){let S=0;const b=t[this.idx(v,h,_,n)];if(b!==0){if(A[0]=this.check_previous_slice(t,p,v,h,_,n,s,u,m,x),A[0]&&(S+=1),s>=6){if(v){const k=this.idx(v-1,h,_,n);b===t[k]&&(A[S++]=p[k])}if(h){const k=this.idx(v,h-1,_,n);b===t[k]&&(A[S++]=p[k])}}if(s>=18){if(h&&v){const k=this.idx(v-1,h-1,_,n);b===t[k]&&(A[S++]=p[k])}if(h&&v<i-1){const k=this.idx(v+1,h-1,_,n);b===t[k]&&(A[S++]=p[k])}}if(S)p[this.idx(v,h,_,n)]=A[0],this.fill_tratab(u,A,S,x);else{if(p[this.idx(v,h,_,n)]=c,c>=d){d+=g;const k=new Uint32Array(d);k.set(u),u=k}u[c-1]=c,c++}}}for(let _=0;_<c-1;_++){let h=_;for(;u[h]!==h+1;)h=u[h]-1;u[_]=h+1}return this._lastInitialRange=null,[c-1,u,p]}fill_tratab(t,n,s,o){let r=2147483647;for(let a=0;a<s;a++){let f=n[a];for(;t[f-1]!==f;)f=t[f-1];o[a]=f,r=Math.min(r,f)}for(let a=0;a<s;a++)t[o[a]-1]=r}translate_labels(t,n,s,o,i=null,r=null){const a=n[0]*n[1]*n[2];if(r&&(o===0||r.fgStart<0))return i&&(this._lastMeta={conn:r.conn,cl:0,fgStart:0,fgEnd:-1,minSl:0,maxSl:-1,ls2bw:new Uint32Array(1),sumls:new Uint32Array(1),distinctFgClasses:0,bw:i}),[0,t];let f=0;for(let m=0;m<o;m++)s[m]>f&&(f=s[m]);const l=new Uint32Array(f+1),c=i&&r?new Uint32Array(o+1):null,g=i&&r?new Uint32Array(o+1):null,d=r?r.fgStart:0,u=r?r.fgEnd:a-1;let p=0;if(r&&r.runs){const m=r.runs,x=r.runLen;for(let A=0;A<x;A+=2){const _=m[A],h=m[A+1];for(let v=_;v<h;v++){const S=s[t[v]-1];let b=l[S];b||(p+=1,b=p,l[S]=b,c&&(c[b]=i[v])),t[v]=b,g&&g[b]++}}}else for(let m=d;m<=u;m++){const x=t[m];if(x){const A=s[x-1];let _=l[A];_||(p+=1,_=p,l[A]=_,c&&(c[_]=i[m])),t[m]=_,g&&g[_]++}}if(i&&r){const m=c.slice(0,p+1),x=g.slice(0,p+1);let A=0;if(p>0){const _=m[1];A=1;for(let h=2;h<=p;h++)if(m[h]!==_){A=2;break}}this._lastMeta={conn:r.conn,cl:p,fgStart:r.fgStart,fgEnd:r.fgEnd,minSl:r.minSl,maxSl:r.maxSl,runs:r.runs,runLen:r.runLen,ls2bw:m,sumls:x,distinctFgClasses:A,bw:i}}return[p,t]}neighbor_winners(t,n,s,o,i=null,r=null){const a=n[0],f=n[1],l=n[2],c=a*f,g=!!(r&&i);let d=!1;for(let v=1;v<=o;v++)if(!s[v]){d=!0;break}if(!d)return g&&console.log("[relabel] 0/0 suppressed components resolved within their own class family (0 fell back to the unrestricted neighbour vote)"),new Uint32Array(o+1);const u=g?new Int32Array(o+1).fill(-1):null,p=new Map,m=(v,S)=>{let b=p.get(v);b||(b=new Map,p.set(v,b)),b.set(S,(b.get(S)||0)+1)},x=_n.get(t),A=x&&x.cl===o&&t.length===c*l;if(A&&x.runs){const v=x.runs,S=x.runLen;for(let b=0;b<S;b+=2){const k=v[b],B=v[b+1],$=k/c|0,w=k-$*c,G=w/a|0;let M=w-G*a;for(let C=k;C<B;C++,M++){const I=t[C];if(s[I])continue;g&&u[I]<0&&(u[I]=r(i[C]));let E;M>0&&(E=s[t[C-1]])&&m(I,E),M<a-1&&(E=s[t[C+1]])&&m(I,E),G>0&&(E=s[t[C-a]])&&m(I,E),G<f-1&&(E=s[t[C+a]])&&m(I,E),$>0&&(E=s[t[C-c]])&&m(I,E),$<l-1&&(E=s[t[C+c]])&&m(I,E)}}}else{const v=A?x.minSl:0,S=A?x.maxSl:l-1;let b=v*c;for(let k=v;k<=S;k++)for(let B=0;B<f;B++)for(let $=0;$<a;$++,b++){const w=t[b];if(w===0||s[w])continue;g&&u[w]<0&&(u[w]=r(i[b]));let G;$>0&&(G=s[t[b-1]])&&m(w,G),$<a-1&&(G=s[t[b+1]])&&m(w,G),B>0&&(G=s[t[b-a]])&&m(w,G),B<f-1&&(G=s[t[b+a]])&&m(w,G),k>0&&(G=s[t[b-c]])&&m(w,G),k<l-1&&(G=s[t[b+c]])&&m(w,G)}}const _=new Uint32Array(o+1).fill(0);let h=0;for(const[v,S]of p){const b=g?u[v]:0;let k=0,B=0;if(b>0){for(const[$,w]of S)r($)===b&&(w>B||w===B&&(k===0||$<k))&&(B=w,k=$);k&&h++}if(!k)for(const[$,w]of S)(w>B||w===B&&(k===0||$<k))&&(B=w,k=$);_[v]=k}return g&&console.log(`[relabel] ${h}/${p.size} suppressed components resolved within their own class family (${p.size-h} fell back to the unrestricted neighbour vote)`),_}finalize_volume(t,n,s,o,i,r=null,a=null,f=!1){const l=t.length,c=i?this.neighbor_winners(t,n,s,o,r,a):null,g=c?new Uint32Array(o+1):s;let d=0;for(let _=1;_<=o;_++){let h=s[_];c&&(h||(h=c[_]),g[_]=h),h>d&&(d=h)}const u=_n.get(t),p=u&&u.cl===o&&u.ls2bw.length===o+1&&u.fgEnd<l;let m=0;if(p&&u.runs){const _=u.runs,h=u.runLen;for(let b=1;b<=o;b++)u.sumls[b]>0&&g[b]>m&&(m=g[b]);if(u.bw===r&&r instanceof Uint8Array&&d<=255){const b=new Uint8Array(o+1);let k=!1;for(let $=1;$<=o;$++)u.sumls[$]>0&&g[$]!==u.ls2bw[$]&&(b[$]=1,k=!0);const B=f?r:r.slice();if(k)for(let $=0;$<h;$+=2){const w=_[$],G=_[$+1];for(let M=w;M<G;M++){const C=t[M];b[C]&&(B[M]=g[C])}}return[m,B]}const S=r instanceof Uint8Array&&d<=255?new Uint8Array(l):new Uint32Array(l);for(let b=0;b<h;b+=2){const k=_[b],B=_[b+1];for(let $=k;$<B;$++){const w=g[t[$]];w&&(S[$]=w)}}return[m,S]}const A=r instanceof Uint8Array&&d<=255?new Uint8Array(l):new Uint32Array(l);if(p){if(u.fgStart>=0&&u.fgEnd>=u.fgStart)for(let _=u.fgStart;_<=u.fgEnd;_++){const h=t[_];if(h!==0){const v=g[h];v&&(A[_]=v,v>m&&(m=v))}}}else for(let _=0;_<l;_++){const h=t[_];if(h!==0){const v=g[h];v&&(A[_]=v,v>m&&(m=v))}}return[m,A]}diagnose_components(t,n,s,o,i={}){var $,w,G;const r=($=i.topN)!=null?$:50,a=(w=i.minSize)!=null?w:1,f=(G=i.label)!=null?G:"diag",l=o[0],c=o[1],g=o[2],d=l*c,u=new Uint32Array(n+1),p=new Uint32Array(n+1);for(let M=0;M<t.length;M++){const C=s[M];C&&(u[C]=t[M],p[C]++)}const m=new Map,x=new Uint32Array(n+1),A=new Uint32Array(n+1),_=(M,C)=>{let I=m.get(M);I||(I=new Map,m.set(M,I)),I.set(C,(I.get(C)||0)+1)};for(let M=0;M<g;M++)for(let C=0;C<c;C++)for(let I=0;I<l;I++){const E=M*d+C*l+I,P=s[E];if(!P)continue;const j=u[P],R=ie=>{const se=s[ie];if(se===P)return;A[P]++;const L=se?u[se]:0;L===0?x[P]++:L!==j&&_(P,L)};I>0&&R(E-1),I<l-1&&R(E+1),C>0&&R(E-l),C<c-1&&R(E+l),M>0&&R(E-d),M<g-1&&R(E+d)}const h=new Map,v=new Map;for(let M=1;M<=n;M++){const C=u[M];h.set(C,(h.get(C)||0)+1),(!v.has(C)||p[M]>v.get(C))&&v.set(C,p[M])}const S=[];for(let M=1;M<=n;M++){if(p[M]<a)continue;const C=u[M],I=m.get(M);let E=0,P=0,j=0;if(I)for(const[ie,se]of I)j+=se,se>P&&(P=se,E=ie);const R=A[M]||1;S.push({comp:M,class:C,size:p[M],largestOfClass:p[M]===v.get(C)?"Y":"n",compsInClass:h.get(C),domNeighbor:E,domFracForeign:j?+(P/j).toFixed(2):0,domFracBoundary:+(P/R).toFixed(2),bgFrac:+(x[M]/R).toFixed(2)})}S.sort((M,C)=>C.domFracForeign-M.domFracForeign||C.size-M.size);const b=(M,C)=>{const I=C.map(P=>Math.max(P.h.length,...M.map(j=>String(j[P.k]).length))),E=P=>P.map((j,R)=>String(j).padStart(I[R])).join("  ");return[E(C.map(P=>P.h)),...M.map(P=>E(C.map(j=>P[j.k])))].join(`
`)},k=[{k:"comp",h:"comp"},{k:"class",h:"class"},{k:"size",h:"size"},{k:"largestOfClass",h:"lrg"},{k:"compsInClass",h:"nComp"},{k:"domNeighbor",h:"domNbr"},{k:"domFracForeign",h:"encF"},{k:"domFracBoundary",h:"encB"},{k:"bgFrac",h:"bgF"}];console.log(`[${f}] total components=${n}, distinct classes=${h.size}
[${f}] island candidates (encF≈1 + small size + lrg=n ⇒ swallowed island):
`+b(S.slice(0,r),k));const B=[...h.entries()].map(([M,C])=>({class:M,components:C,maxCompSize:v.get(M)})).sort((M,C)=>C.components-M.components);return console.log(`[${f}] per-class component counts (components=1 ⇒ fully connected):
`+b(B.slice(0,30),[{k:"class",h:"class"},{k:"components",h:"comps"},{k:"maxCompSize",h:"maxSize"}])),S}_collectComponentStats(t,n,s){const o=_n.get(s);if(o&&o.cl===n&&o.bw===t&&s.length===t.length)return[o.ls2bw,o.sumls];const i=t.length,r=new Uint32Array(n+1),a=new Uint32Array(n+1);for(let f=0;f<i;f++){const l=s[f];l>0&&(r[l]=t[f],a[l]++)}return[r,a]}_buildKeptMap(t,n,s,o,i){const r=new Uint32Array(s+1);let a=0;for(let l=1;l<=s;l++)t[l]>a&&(a=t[l]);const f=o==="all";if(a<=65535){const l=new Uint32Array(a+1),c=new Uint32Array(a+1);for(let g=1;g<=s;g++){const d=t[g];if(d!==0)if(f||o&&o.has&&o.has(d)){const u=n[g];(!c[d]||(i?u>=l[d]:u>l[d]))&&(l[d]=u,c[d]=g)}else r[g]=d}for(let g=1;g<=a;g++){const d=c[g];d>0&&(r[d]=g)}}else{const l=new Map;for(let c=1;c<=s;c++){const g=t[c];if(g!==0)if(f||o&&o.has&&o.has(g)){const d=n[c],u=l.get(g);(!u||(i?d>=u.sz:d>u.sz))&&l.set(g,{c,sz:d})}else r[c]=g}for(const[c,{c:g}]of l)r[g]=c}return r}largest_original_cluster_labels(t,n,s,o=null,i=!1,r=null,a=!1){const[f,l]=this._collectComponentStats(t,n,s),c=this._buildKeptMap(f,l,n,"all",!0);return this.finalize_volume(s,o,c,n,i,t,r,a)}filter_clusters(t,n,s,o,i=null,r=!1,a=null,f=!1){const[l,c]=this._collectComponentStats(t,n,s),g=this._buildKeptMap(l,c,n,o,!1);return this.finalize_volume(s,i,g,n,r,t,a,f)}filter_clusters_by_ratio(t,n,s,o,i=null,r=!1,a=null){const f=t.length,l=new Uint32Array(n+1).fill(0),c=new Uint32Array(n+1).fill(0);for(let p=0;p<f;p++){const m=s[p];m>0&&(l[m]===0&&(l[m]=t[p]),c[m]++)}const g=new Map;for(let p=1;p<=n;p++){const m=l[p],x=c[p];(!g.has(m)||x>g.get(m))&&g.set(m,x)}const d=new Uint8Array(n+1).fill(0);for(let p=1;p<=n;p++){const m=l[p],x=c[p],A=g.get(m)||0;x>=A*o&&(d[p]=1)}const u=new Uint32Array(n+1).fill(0);for(let p=1;p<=n;p++)d[p]&&(u[p]=l[p]);return this.finalize_volume(s,i,u,n,r,t,a)}_binaryComponentsFromLabels(t,n,s,o,i=!1){const r=o[0]|0,a=o[1]|0,f=o[2]|0,l=r*a,c=_n.get(s),g=c&&c.cl===n&&s.length===l*f&&(!i||c.bw===t);if(g&&c.conn===6&&c.distinctFgClasses<=1){const _=new Uint32Array(n+1);let h=0,v=0;for(let S=1;S<=n;S++){_[S]=S;const b=c.sumls[S];b>0&&b>=v&&(v=b,h=S)}return{parent:_,compSize:c.sumls,compClass:i?c.ls2bw:null,bestRoot:h}}const d=g?c.sumls:new Uint32Array(n+1),u=g?i?c.ls2bw:null:i?new Uint32Array(n+1):null,p=new Uint32Array(n+1);for(let _=1;_<=n;_++)p[_]=_;if(g&&c.conn===6&&c.runs&&c.bw===t){const _=(S,b)=>{for(;p[S]!==S;)p[S]=p[p[S]],S=p[S];for(;p[b]!==b;)p[b]=p[p[b]],b=p[b];S!==b&&(S<b?p[b]=S:p[S]=b)},h=c.runs,v=c.runLen;for(let S=0;S<v;S+=2){const b=h[S],k=h[S+1],B=b/l|0,$=b-B*l,w=$/r|0;let G=$-w*r;for(let M=b;M<k;M++,G++){const C=t[M];let I=0;if(B>0){const E=t[M-l];E!==0&&E!==C&&(I=s[M],_(I,s[M-l]))}if(w>0){const E=t[M-r];E!==0&&E!==C&&(I||(I=s[M]),_(I,s[M-r]))}if(G>0){const E=t[M-1];E!==0&&E!==C&&(I||(I=s[M]),_(I,s[M-1]))}}}}else{const _=g?c.minSl:0,h=g?c.maxSl:f-1;let v=_*l;for(let S=_;S<=h;S++)for(let b=0;b<a;b++)for(let k=0;k<r;k++,v++){const B=s[v];if(B===0)continue;g||(d[B]++,u&&u[B]===0&&(u[B]=t[v]));let $=B;for(;p[$]!==$;)p[$]=p[p[$]],$=p[$];if(S>0){const w=s[v-l];if(w!==0&&w!==B){let G=w;for(;p[G]!==G;)p[G]=p[p[G]],G=p[G];$!==G&&($<G?p[G]=$:(p[$]=G,$=G))}}if(b>0){const w=s[v-r];if(w!==0&&w!==B){let G=w;for(;p[G]!==G;)p[G]=p[p[G]],G=p[G];$!==G&&($<G?p[G]=$:(p[$]=G,$=G))}}if(k>0){const w=s[v-1];if(w!==0&&w!==B){let G=w;for(;p[G]!==G;)p[G]=p[p[G]],G=p[G];$!==G&&($<G?p[G]=$:p[$]=G)}}}}const m=new Uint32Array(n+1);for(let _=1;_<=n;_++){let h=_;for(;p[h]!==h;)h=p[h];p[_]=h,m[h]+=d[_]}let x=0,A=0;for(let _=1;_<=n;_++){const h=m[_];h>0&&h>=A&&(A=h,x=_)}return{parent:p,compSize:d,compClass:u,bestRoot:x}}applyLargestBinaryMaskInPlace(t,n,s,o){const i=t.length;if(n===0)return t.fill(0),t;const r=_n.get(s),a=r&&r.cl===n&&s.length===i;if(a&&r.conn===6&&r.distinctFgClasses<=1){let c=0,g=0;for(let d=1;d<=n;d++){const u=r.sumls[d];u>0&&u>=g&&(g=u,c=d)}if(r.runs&&r.bw===t){if(n>1){const d=r.runs,u=r.runLen;for(let p=0;p<u;p+=2){const m=d[p],x=d[p+1];for(let A=m;A<x;A++)s[A]!==c&&(t[A]=0)}}return t}if(r.fgStart>0&&t.fill(0,0,r.fgStart),r.fgEnd>=r.fgStart){for(let d=r.fgStart;d<=r.fgEnd;d++)s[d]!==c&&(t[d]=0);r.fgEnd+1<i&&t.fill(0,r.fgEnd+1)}else t.fill(0);return t}const{parent:f,bestRoot:l}=this._binaryComponentsFromLabels(t,n,s,o,!1);if(a&&r.runs&&r.bw===t){const c=r.runs,g=r.runLen;for(let d=0;d<g;d+=2){const u=c[d],p=c[d+1];for(let m=u;m<p;m++)f[s[m]]!==l&&(t[m]=0)}return t}if(a&&r.fgEnd>=r.fgStart){r.fgStart>0&&t.fill(0,0,r.fgStart);for(let c=r.fgStart;c<=r.fgEnd;c++){const g=s[c];(g===0||f[g]!==l)&&(t[c]=0)}r.fgEnd+1<i&&t.fill(0,r.fgEnd+1)}else for(let c=0;c<i;c++){const g=s[c];(g===0||f[g]!==l)&&(t[c]=0)}return t}filterHierarchicalFromLabels(t,n,s,o,i="all",r=!0,a=!1,f=null,l=!1){if(n===0)return[0,t instanceof Uint8Array?l?t:new Uint8Array(t.length):new Uint32Array(t.length)];const{parent:c,compSize:g,compClass:d,bestRoot:u}=this._binaryComponentsFromLabels(t,n,s,o,!0),p=new Uint32Array(n+1);for(let x=1;x<=n;x++)c[x]===u&&(p[x]=d[x]);const m=this._buildKeptMap(p,g,n,i,r);return this.finalize_volume(s,o,m,n,a,t,f,l)}filter18ClassFromLabels(t,n,s,o,i,r=!1,a=null,f=!1){return this.filterHierarchicalFromLabels(t,n,s,o,i,!1,r,a,f)}bwlabel(t,n,s=26,o=!1,i=!1,r=null){const a=Date.now(),f=n[0]*n[1]*n[2];if(![6,18,26].includes(s))return console.log("bwlabel: conn must be 6, 18 or 26."),[0,new Uint32Array(f)];if(n[0]<2||n[1]<2||n[2]<1)return console.log("bwlabel: img must be 2 or 3-dimensional"),[0,new Uint32Array(f)];let l;if(o){l=new Uint8Array(f);for(let m=0;m<f;m++)t[m]!==0&&(l[m]=1)}else t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Uint16Array||t instanceof Uint32Array||t instanceof Int8Array||t instanceof Int16Array||t instanceof Int32Array?t.length===f?l=t:(l=new Uint32Array(f),l.set(t.subarray(0,f))):(l=new Uint32Array(f),l.set(t));this._lastInitialRange=null,this._lastMeta=null;let[c,g,d]=this.do_initial_labelling(l,n,s,r);g===void 0&&(g=new Uint32Array(0));const[u,p]=this.translate_labels(d,n,g,c,l,this._lastInitialRange);if(this._lastMeta&&_n.set(p,this._lastMeta),console.log(s+" neighbor clustering into "+u+" regions in "+(Date.now()-a)+"ms"),i){const[m,x]=this.largest_original_cluster_labels(l,u,p);return[m,x]}return[u,p]}filter_clusters_by_rank(t,n,s,o,i=0,r=null,a=!1,f=null,l=!1,c=null){const g=t.length,d=new Uint32Array(n+1).fill(0),u=new Uint32Array(n+1).fill(0),p=f!=null&&Array.isArray(r)&&r.length===3,m=p?r[0]:0,x=p?r[1]:0,A=p?new Int32Array(n+1).fill(2147483647):null,_=p?new Int32Array(n+1).fill(-1):null,h=p?new Int32Array(n+1).fill(2147483647):null,v=p?new Int32Array(n+1).fill(-1):null,S=p?new Int32Array(n+1).fill(2147483647):null,b=p?new Int32Array(n+1).fill(-1):null;for(let M=0;M<g;M++){const C=s[M];if(C>0&&(d[C]===0&&(d[C]=t[M]),u[C]++,p)){const I=M%m,E=M/m|0,P=E%x,j=E/x|0;I<A[C]&&(A[C]=I),I>_[C]&&(_[C]=I),P<h[C]&&(h[C]=P),P>v[C]&&(v[C]=P),j<S[C]&&(S[C]=j),j>b[C]&&(b[C]=j)}}let k=null,B=0;if(p){let M=-1;for(let R=1;R<=n;R++)u[R]>M&&(M=u[R],B=R);const C=Math.max(2,Math.ceil(f)+4),I=m*x,E=new Int16Array(g).fill(-1);let P=[];for(let R=0;R<g;R++)s[R]===B&&(E[R]=0,P.push(R));for(let R=1;R<=C&&P.length;R++){const ie=[];for(let se=0;se<P.length;se++){const L=P[se],U=L%m,fe=(L/m|0)%x;U>0&&E[L-1]===-1&&(E[L-1]=R,ie.push(L-1)),U<m-1&&E[L+1]===-1&&(E[L+1]=R,ie.push(L+1)),fe>0&&E[L-m]===-1&&(E[L-m]=R,ie.push(L-m)),fe<x-1&&E[L+m]===-1&&(E[L+m]=R,ie.push(L+m)),L-I>=0&&E[L-I]===-1&&(E[L-I]=R,ie.push(L-I)),L+I<g&&E[L+I]===-1&&(E[L+I]=R,ie.push(L+I))}P=ie}const j=C+1;k=new Float64Array(n+1).fill(j);for(let R=0;R<g;R++){const ie=s[R];if(ie>0&&ie!==B){const se=E[R]>=0?E[R]:j;se<k[ie]&&(k[ie]=se)}}l&&console.log(`[rank-filter] brain comp=${B} size=${M} bbox A[${A[B]},${_[B]}] B[${h[B]},${v[B]}] C[${S[B]},${b[B]}] | maxGap=${f} scan=${C}`)}const $=new Map;for(let M=1;M<=n;M++){const C=d[M],I=u[M];$.has(C)||$.set(C,[]),$.get(C).push({i:M,size:I})}const w=new Uint8Array(n+1).fill(0);for(const[M,C]of $.entries()){C.sort((j,R)=>R.size-j.size);const I=C.length?C[0].size:0,E=i>0?I*i:0,P=Math.min(C.length,o);for(let j=0;j<P;j++){const R=C[j];if(R.size<E){l&&j>0&&console.log(`[rank-filter] class ${M} #${j}: size=${R.size} DROP (below ${(i*100).toFixed(0)}% floor)`);break}if(j>0&&p){const ie=k[R.i],se=ie<=f;if(l&&console.log(`[rank-filter] class ${M} #${j}: size=${R.size} surfDist=${ie} -> ${se?"KEEP":"DROP (too far)"}`),!se)continue}w[R.i]=1}}const G=new Uint32Array(n+1).fill(0);for(let M=1;M<=n;M++)w[M]&&(G[M]=d[M]);return this.finalize_volume(s,r,G,n,a,t,c)}}function Xo(e){if(!(e!=null&&e.length))throw new Error("Segmentation volume is empty.");let t=0;if((e instanceof Uint8Array||e instanceof Uint8ClampedArray)&&(e.byteOffset&3)===0&&e.length>=4){const n=e.length>>2,s=new Uint32Array(e.buffer,e.byteOffset,n);for(let o=0;o<n;o++){const i=s[o];i!==0&&(i&255&&t++,i&65280&&t++,i&16711680&&t++,i&4278190080&&t++)}for(let o=n<<2;o<e.length;o++)e[o]!==0&&t++}else if(e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Uint16Array||e instanceof Uint32Array)for(let n=0;n<e.length;n++)e[n]!==0&&t++;else for(let n=0;n<e.length;n++){const s=e[n];if(!Number.isFinite(s)||s<0)throw new Error(`Segmentation contains an invalid label at voxel ${n}: ${s}.`);s!==0&&t++}if(t===0)throw new Error("Segmentation volume contains no foreground labels.");if(t>e.length*.95)throw new Error(`Segmentation fills ${(100*t/e.length).toFixed(1)}% of the volume; GPU output is unusable.`)}const Yo={il:null,runs:null,runLen:0,dirty:!1};function Ko(e,t=.05,n=.95){const s=e.length,o=Math.min(1e5,s),i=Math.floor(o*t),r=Math.ceil(o*n)-1;if(e instanceof Uint8Array||e instanceof Uint8ClampedArray){if(o===0)return{qmin:0,qmax:0};const f=new Uint32Array(256);if(o>=s)for(let u=0;u<s;u++)f[e[u]]++;else for(let u=0;u<o;u++)f[e[Math.floor(Math.random()*s)]]++;let l=0,c=0,g=0,d=!1;for(let u=0;u<256;u++){const p=f[u];if(p!==0&&(l+=p,!d&&l>i&&(c=u,d=!0),l>r)){g=u;break}}return{qmin:c,qmax:g}}const a=new Float64Array(o);if(o>=s)a.set(e);else for(let f=0;f<o;f++){const l=Math.floor(Math.random()*s);a[f]=e[l]}return a.sort(),{qmin:a[i],qmax:a[r]}}function Zo(e){const t=e.length;if(t===0)return{min:0,max:0};let n=e[0],s=e[0];if(e instanceof Uint8Array||e instanceof Uint8ClampedArray){for(let o=1;o<t;o++){const i=e[o];if(i<n?n=i:i>s&&(s=i),n===0&&s===255)break}return{min:n,max:s}}for(let o=1;o<t;o++){const i=e[o];i<n&&(n=i),i>s&&(s=i)}return{min:n,max:s}}function Bs(e,t,n){const s=e.length,o=new Float32Array(s);if(e instanceof Uint8Array||e instanceof Uint8ClampedArray){const i=new Float32Array(256);for(let r=0;r<256;r++)i[r]=(r-t)/n;for(let r=0;r<s;r++)o[r]=i[e[r]];return o}for(let i=0;i<s;i++)o[i]=(e[i]-t)/n;return o}function Qs(e,t,n,s){const o=t[0]|0,i=t[1]|0,r=t[2]|0,a=o*i*r,f=new s(a);if(n[0]===2&&n[1]===1&&n[2]===0&&a===e.length){const x=i*r,A=i*o,_=16;for(let h=0;h<i;h++){const v=h*r,S=h*o;for(let b=0;b<o;b+=_){const k=Math.min(b+_,o);for(let B=0;B<r;B+=_){const $=Math.min(B+_,r);for(let w=b;w<k;w++){let G=w*x+v+B,M=B*A+S+w;for(let C=B;C<$;C++,G++,M+=A)f[M]=e[G]}}}}return f}const l=[o,i,r],c=[l[n[0]],l[n[1]],l[n[2]]],g=[i*r,r,1],d=g[n[0]],u=g[n[1]],p=g[n[2]];let m=0;for(let x=0;x<c[0];x++){const A=x*d;for(let _=0;_<c[1];_++){const h=A+_*u;for(let v=0;v<c[2];v++,m++)f[m]=e[h+v*p]}}return f}function kn(e,t=[256,256,256],n=[2,1,0]){return Qs(e,t,n,Float32Array)}function Qo(e,t=[256,256,256],n=[2,1,0]){return Qs(e,t,n,Uint8Array)}function as(e){const t=new Uint32Array(256);for(let n=0;n<e.length;n++)t[e[n]]++;return t}function Jo(e){const t=as(e);let n=0;for(let s=0;s<256;s++)t[s]>0&&n++;return n}function zs(e,t=!1,n="output"){let s=0,o=1/0,i=-1/0;if(!t&&(e instanceof Uint8Array||e instanceof Uint8ClampedArray)){if(e.length>0){let r=255,a=0,f=0;if((e.byteOffset&3)===0&&e.length>=4){const l=e.length>>2,c=new Uint32Array(e.buffer,e.byteOffset,l);for(let g=0;g<l;g++){const d=c[g];if(d===0){r=0;continue}const u=d&255,p=d>>>8&255,m=d>>>16&255,x=d>>>24;s+=u+p+m+x,u<r&&(r=u),u>a&&(a=u),p<r&&(r=p),p>a&&(a=p),m<r&&(r=m),m>a&&(a=m),x<r&&(r=x),x>a&&(a=x)}f=l<<2}for(let l=f;l<e.length;l++){const c=e[l];s+=c,c<r&&(r=c),c>a&&(a=c)}o=r,i=a}}else for(let r=0;r<e.length;r++){const a=e[r];if(!Number.isFinite(a))throw new Error(`Model ${n} contains NaN or Inf values.`);s+=a,a<o&&(o=a),a>i&&(i=a)}if(console.log(`${t?"Probability":"Segmentation"} volume sum: ${s}`),s===0)throw new Error(t?"Model probability output is all zeros. This may indicate an issue with WebGPU shaders or input data.":"Model produced an empty segmentation (all zeros). This may indicate an issue with WebGPU shaders or input data.");if(t&&(o<-1e-6||i>1+1e-6))throw new Error(`Probability output values out of range [0, 1]: min=${o.toFixed(4)}, max=${i.toFixed(4)}`);return{sum:s,min:o,max:i}}function er(e,t,n,s,o=null,i=null){return Ae(this,null,function*(){const r=!!(e&&typeof e.data=="function");let a,f;r?(console.log("Downloading segmentation data from GPU to CPU..."),a=yield e.data(),f=e.shape||i||[256,256,256],console.log("Data download complete. Starting CPU processing.")):(a=e,f=i||[256,256,256]),Xo(a);let l,c=!1;if(a instanceof Uint8Array)l=a,c=!r;else{let d=0;for(let u=0;u<a.length;u++)a[u]>d&&(d=a[u]);l=d<=255?new Uint8Array(a):new Uint32Array(a),c=!0}let g=null;if(s.isPostProcessEnable){console.log("Applying CPU-based connected-component labeling...");const d=performance.now(),u=new jo,p=[5,14,15,58,59,60,598,608],m=!!s.fillSuppressedWithNeighborLabel||p.includes(n.id),x=[5,14,15,58,59,60,598,608],A=B=>B>=1&&B<=34?1:B>=35&&B<=68?2:0,_=x.includes(n.id)?A:null,h=f[0]*f[1]*f[2],v=Math.max(1e5,Math.floor(h*.01)),[S,b]=u.bwlabel(l,f,6,!1,!1,Yo);if(g=u.getLabelMeta(b),S>v){const B=`Segmentation produced noise: ${S.toLocaleString()} disconnected regions (cap ${v.toLocaleString()}). The model output is unusable, so post-processing was aborted. Try re-running, switching backend (WebGPU/WebGL2), or another model.`;console.error("[postprocess] "+B);const $=new Error(B);throw $.code="SEGMENTATION_NOISE",$}if([1,7].includes(n.id)){const[G,M]=u.filter_clusters_by_rank(l,S,b,2,.02,f,m,8,!1,_);l=M,c=!0}else if([3,8,9,21,38,218].includes(n.id)){const B=new Set([1,2,5,6,13]),[$,w]=u.filter18ClassFromLabels(l,S,b,f,B,m,_,c);l=w,c=!0}else if([5,14,15,58,59,60,598,608].includes(n.id)){s.diagnoseEnclosedComponents&&u.diagnose_components(l,S,b,f,{label:`model${n.id}`,topN:60});const[B,$]=u.filterHierarchicalFromLabels(l,S,b,f,"all",!0,m,_,c);l=$,c=!0}else c||(l=l.slice(),c=!0),u.applyLargestBinaryMaskInPlace(l,S,b,f);const k=((performance.now()-d)/1e3).toFixed(4);console.log(`Connected-component labeling took: ${k} seconds.`)}switch(n.type){case"Brain_Masking":{const d=new Uint8Array(l.length);if(g&&g.runs){const u=g.runs,p=g.runLen;for(let m=0;m<p;m+=2){const x=u[m],A=u[m+1];for(let _=x;_<A;_++)l[_]!==0&&(d[_]=1)}}else for(let u=0;u<l.length;u++)d[u]=l[u]!==0?1:0;return d}case"Brain_Extraction":{const d=new Uint8Array(l.length),u=o?new Uint8Array(l.length):null;if(g&&g.runs){const p=g.runs,m=g.runLen;for(let x=0;x<m;x+=2){const A=p[x],_=p[x+1];for(let h=A;h<_;h++)l[h]!==0&&(d[h]=t[h],u&&(u[h]=1))}}else for(let p=0;p<l.length;p++){const m=l[p]!==0?1:0;d[p]=t[p]*m,u&&(u[p]=m)}return o&&(o.mask=u),d}default:return l instanceof Uint8Array?l:new Uint8Array(l)}})}const tr={WEBGPU:"webgpu"};function nr(e,t){return{startTime:Date.now(),Model_Name:(e==null?void 0:e.modelName)||"Unknown",Execution_Mode:t,TF_Backend:"webgpu",isModelFullVol:null,No_SubVolumes:1,Brainchop_Ver:"FullVolume",Input_Shape:null,Output_Shape:null,Channel_Last:null,Model_Param:null,Model_Layers:null,Actual_Labels:null,Expect_Labels:null,NumLabels_Match:null,Missing_Labels:null,Preprocess_t:null,Setup_t:null,Inference_t:null,Postprocess_t:null,Display_t:null,Status:null,Error_Type:null,Extra_Err_Info:null}}function sr(e,t,n,s=null){e.Expect_Labels=t,e.Actual_Labels=n,e.NumLabels_Match=t===n,s&&s.length>0&&(e.Missing_Labels=s.join(", "))}function or(e,t,n,s=null){e.Inference_t=t,e.Postprocess_t=n,s&&(s.Preprocess_t!==void 0&&(e.Preprocess_t=s.Preprocess_t),s.Setup_t!==void 0&&(e.Setup_t=s.Setup_t),s.Display_t!==void 0&&(e.Display_t=s.Display_t)),e.Status="OK"}function rr(e,t,n=null){e.Inference_t=1/0,e.Postprocess_t=1/0,e.Status="Fail",e.Error_Type=(t==null?void 0:t.message)||String(t),n&&(e.Extra_Err_Info=n)}const qt=1e-8,ar=[256,256,256];function rn(e,t,n){return Math.max(t,Math.min(n,e))}function ir(e){return e.outputType==="probability"&&e.probabilityPostprocess==="cat-lite"}function lr(e,t,n){const[s,o,i]=e,r=s.length,a=new Uint8Array(r);let f=0;for(let v=0;v<r;v++)Math.max(0,s[v])+Math.max(0,o[v])+Math.max(0,i[v])>=n&&(a[v]=1,f++);const[l,c,g]=t;if(l<2||c<2||g<1)return{componentCount:0,removedVoxels:0,supportMask:a};const d=l===256&&c===256,u=new Uint32Array(f),p=l*c;let m=0,x=0,A=0,_=0;for(let v=0;v<r;v++){if(a[v]!==1)continue;_++;const S=m;u[m++]=v,a[v]=2;for(let b=S;b<m;b++){const k=u[b],B=d?k&255:k%l,$=d?k>>>8&255:Math.floor(k/l)%c;B>0&&a[k-1]===1&&(a[k-1]=2,u[m++]=k-1),B+1<l&&a[k+1]===1&&(a[k+1]=2,u[m++]=k+1),$>0&&a[k-l]===1&&(a[k-l]=2,u[m++]=k-l),$+1<c&&a[k+l]===1&&(a[k+l]=2,u[m++]=k+l),k>=p&&a[k-p]===1&&(a[k-p]=2,u[m++]=k-p),k+p<r&&a[k+p]===1&&(a[k+p]=2,u[m++]=k+p)}m-S>=A-x&&(x=S,A=m)}let h=0;if(_>1)for(let v=0;v<m;v++){if(v>=x&&v<A)continue;const S=u[v];s[S]=0,o[S]=0,i[S]=0,a[S]=0,h++}return{componentCount:_,removedVoxels:h,supportMask:a}}function ur([e,t,n],s,{minSupport:o,priorPower:i},r=null){const a=!!(r&&o>0&&o<=1);let f=0;for(let m=0;m<s.length;m++){if(a&&r[m]!==2)continue;const x=Math.max(0,e[m])+Math.max(0,t[m])+Math.max(0,n[m]);Math.min(x,1)>=o&&Number.isFinite(s[m])&&f++}const l=new Uint32Array(f),c=new Float64Array(f),g=f*36<=192*Dt(2,20)?f:0,d=new Float64Array(g),u=new Float64Array(g),p=new Float64Array(g);for(let m=0,x=0;m<s.length;m++){if(a&&r[m]!==2)continue;const A=Math.max(0,e[m]),_=Math.max(0,t[m]),h=Math.max(0,n[m]),v=A+_+h,S=Math.min(v,1);!(S>=o)||!Number.isFinite(s[m])||(l[x]=m,c[x]=s[m]-0,g&&(d[x]=S*Math.pow(h/v,i),u[x]=S*Math.pow(A/v,i),p[x]=S*Math.pow(_/v,i)),x++)}return{indices:l,values:c,weightCsf:d,weightGm:u,weightWm:p,volumes:[e,t,n]}}function Fs([e,t,n],s,o,i){const r=Math.max(0,e[s]),a=Math.max(0,t[s]),f=Math.max(0,n[s]),l=r+a+f,c=Math.min(l,1);i[0]=c*Math.pow(f/l,o),i[1]=c*Math.pow(r/l,o),i[2]=c*Math.pow(a/l,o)}function Ls({indices:e,values:t,weightCsf:n,weightGm:s,weightWm:o,volumes:i},{minSeparation:r,sigmaFloor:a,priorPower:f},l=!1){const c=n.length===0?new Float64Array(3):null,g=new Float64Array(3),d=new Float64Array(3);for(let x=0;x<t.length;x++){const A=t[x];c&&Fs(i,e[x],f,c);const _=c?c[0]:n[x],h=c?c[1]:s[x],v=c?c[2]:o[x];g[0]+=_*A,d[0]+=_,g[1]+=h*A,d[1]+=h,g[2]+=v*A,d[2]+=v}if(d.some(x=>x<100))return{applied:!1,reason:"too few high-confidence tissue voxels"};const u=Array.from(g,(x,A)=>x/d[A]);if(!(u[0]+r<u[1]&&u[1]+r<u[2]))return{applied:!1,reason:`implausible T1 tissue ordering (${u.map(x=>x.toFixed(3)).join(", ")})`};if(l)return{applied:!0,means:u};const p=new Float64Array(3);for(let x=0;x<t.length;x++){const A=t[x];c&&Fs(i,e[x],f,c);const _=c?c[0]:n[x],h=c?c[1]:s[x],v=c?c[2]:o[x],S=A-u[0],b=A-u[1],k=A-u[2];p[0]+=_*S*S,p[1]+=h*b*b,p[2]+=v*k*k}const m=Array.from(p,(x,A)=>Math.sqrt(Math.max(a*a,x/d[A])));return{applied:!0,means:u,sigmas:m}}function cr(e,t,n,s,{minSupport:o,block:i,smoothingPasses:r},a=null){const[f,l,c]=e,[g,d,u]=n,p=!!(a&&o>0&&o<=1),m=Math.ceil(g/i),x=Math.ceil(d/i),A=Math.ceil(u/i),_=m*x*A,h=new Float64Array(_),v=new Float64Array(_),[S,b,k]=s,B=g*d;for(let P=0;P<u;P++){const j=Math.floor(P/i);for(let R=0;R<d;R++){const ie=Math.floor(R/i);let se=P*B+R*g;const L=(j*x+ie)*m;for(let U=0;U<g;U++,se++){if(p&&a[se]!==2)continue;const V=Math.max(0,f[se]),fe=Math.max(0,l[se]),H=Math.max(0,c[se]),X=V+fe+H,Se=Math.min(X,1);if(!(Se>=o)||!Number.isFinite(t[se]))continue;const he=V/X,ze=fe/X,ee=H/X,D=ee*S+he*b+ze*k,N=Se*(ee*ee+he*he+ze*ze),q=L+Math.floor(U/i);h[q]+=N*(t[se]-D),v[q]+=N}}}let $=new Float32Array(_),w=new Uint8Array(_);for(let P=0;P<_;P++)v[P]>1&&($[P]=h[P]/v[P],w[P]=1);for(let P=0;P<r;P++){const j=new Float32Array(_),R=new Uint8Array(_);for(let ie=0;ie<A;ie++)for(let se=0;se<x;se++)for(let L=0;L<m;L++){let U=0,V=0;for(let H=-1;H<=1;H++){const X=ie+H;if(!(X<0||X>=A))for(let Se=-1;Se<=1;Se++){const he=se+Se;if(!(he<0||he>=x))for(let ze=-1;ze<=1;ze++){const ee=L+ze;if(ee<0||ee>=m)continue;const D=(X*x+he)*m+ee;w[D]&&(U+=$[D],V++)}}}const fe=(ie*x+se)*m+L;V>0&&(j[fe]=U/V,R[fe]=1)}$=j,w=R}const G=(P,j)=>{const R=new Int32Array(P),ie=new Int32Array(P),se=new Float32Array(P);for(let L=0;L<P;L++){const U=rn((L+.5)/i-.5,0,j-1);R[L]=Math.floor(U),ie[L]=Math.min(R[L]+1,j-1),se[L]=U-R[L]}return{low:R,high:ie,t:se}},M=G(g,m),C=G(d,x),I=G(u,A),E=g===256&&d===256;return P=>{let j,R,ie;if(E)ie=P>>>16,R=P>>>8&255,j=P&255;else{ie=Math.floor(P/B);const re=P-ie*B;R=Math.floor(re/g),j=re-R*g}const se=M.low[j],L=M.high[j],U=M.t[j],V=(I.low[ie]*x+C.low[R])*m,fe=(I.low[ie]*x+C.high[R])*m,H=(I.high[ie]*x+C.low[R])*m,X=(I.high[ie]*x+C.high[R])*m,Se=$[V+se]+($[V+L]-$[V+se])*U,he=$[fe+se]+($[fe+L]-$[fe+se])*U,ze=$[H+se]+($[H+L]-$[H+se])*U,ee=$[X+se]+($[X+L]-$[X+se])*U,D=C.t[R],N=Se+(he-Se)*D,q=ze+(ee-ze)*D;return N+(q-N)*I.t[ie]}}function $n(e,t,n,s){const o=(e-t)/n;return-.5*o*o-s}function fr(e,t,n,s={}){const{catLiteMinSupport:o=.03,catLitePurePriorPower:i=3,catLiteMinMeanSeparation:r=.035,catLiteSigmaFloor:a=.025,catLiteBiasBlockSize:f=16,catLiteBiasSmoothPasses:l=3,catLitePriorStrength:c=.8,catLiteIntensityStrength:g=.75,catLiteMixelPrior:d=.35,catLiteCsfWmMixelPrior:u=6,catLiteSpatialWeight:p=.25}=s,m={priorPower:i,minSupport:o,minSeparation:r,sigmaFloor:a},[x,A,_]=n,h=t.length,v=o>0&&o<=1,{componentCount:S,removedVoxels:b,supportMask:k}=lr(e,n,o),B={componentCount:S,removedVoxels:b},$=ur(e,t,m,k),w=Ls($,m,!0);if(!w.applied)return{tissues:e,stats:w};const G=cr(e,t,n,w.means,{minSupport:o,block:f,smoothingPasses:l},k);for(let Y=0;Y<$.indices.length;Y++){const te=$.indices[Y];$.values[Y]=t[te]-G(te)}const M=Ls($,m);if(!M.applied)return{tissues:e,stats:M};$.indices=$.weightCsf=$.weightGm=$.weightWm=null;const[C,I,E]=M.means,[P,j,R]=M.sigmas,[ie,se,L]=e,U=new Float32Array(h),V=new Float32Array(h),fe=new Float32Array(h),H=x*A,X=.5*(C+I),Se=.5*(I+E),he=.5*(C+E),ze=Math.sqrt(Dt(I-C,2)/12+.5*(Dt(P,2)+Dt(j,2))),ee=Math.sqrt(Dt(E-I,2)/12+.5*(Dt(j,2)+Dt(R,2))),D=Math.sqrt(Dt(E-C,2)/12+.5*(Dt(P,2)+Dt(R,2))),N=Math.log(P),q=Math.log(j),re=Math.log(R),T=Math.log(ze),oe=Math.log(ee),pe=Math.log(D);let K=0;for(let Y=0;Y<_;Y++)for(let te=0;te<A;te++){let Q=Y*H+te*x;for(let ve=0;ve<x;ve++,Q++){if(v&&k[Q]!==2)continue;const ce=Math.max(0,ie[Q]),ke=Math.max(0,se[Q]),Ee=Math.max(0,L[Q]),qe=ce+ke+Ee,Ye=Math.min(qe,1);if(!(Ye>=o)||!Number.isFinite(t[Q]))continue;let Ge=ce/qe,Ie=ke/qe,Je=Ee/qe;if(p>0){let nt=0,Re=0,ne=0,O=0;if(ve>0){const le=Q-1,Te=Math.max(0,ie[le]),at=Math.max(0,se[le]),Ke=Math.max(0,L[le]),Le=Te+at+Ke;Le>qt&&(nt+=Te/Le,Re+=at/Le,ne+=Ke/Le,O++)}if(ve+1<x){const le=Q+1,Te=Math.max(0,ie[le]),at=Math.max(0,se[le]),Ke=Math.max(0,L[le]),Le=Te+at+Ke;Le>qt&&(nt+=Te/Le,Re+=at/Le,ne+=Ke/Le,O++)}if(te>0){const le=Q-x,Te=Math.max(0,ie[le]),at=Math.max(0,se[le]),Ke=Math.max(0,L[le]),Le=Te+at+Ke;Le>qt&&(nt+=Te/Le,Re+=at/Le,ne+=Ke/Le,O++)}if(te+1<A){const le=Q+x,Te=Math.max(0,ie[le]),at=Math.max(0,se[le]),Ke=Math.max(0,L[le]),Le=Te+at+Ke;Le>qt&&(nt+=Te/Le,Re+=at/Le,ne+=Ke/Le,O++)}if(Y>0){const le=Q-H,Te=Math.max(0,ie[le]),at=Math.max(0,se[le]),Ke=Math.max(0,L[le]),Le=Te+at+Ke;Le>qt&&(nt+=Te/Le,Re+=at/Le,ne+=Ke/Le,O++)}if(Y+1<_){const le=Q+H,Te=Math.max(0,ie[le]),at=Math.max(0,se[le]),Ke=Math.max(0,L[le]),Le=Te+at+Ke;Le>qt&&(nt+=Te/Le,Re+=at/Le,ne+=Ke/Le,O++)}if(O){const le=1-p;Ge=le*Ge+p*nt/O,Ie=le*Ie+p*Re/O,Je=le*Je+p*ne/O}}const He=$.values[K++],je=c*Math.log(Je+qt)+g*$n(He,C,P,N),dt=c*Math.log(Ge+qt)+g*$n(He,I,j,q),pt=c*Math.log(Ie+qt)+g*$n(He,E,R,re),Ct=c*Math.log(d*2*Math.sqrt(Je*Ge)+qt)+g*$n(He,X,ze,T),kt=c*Math.log(d*2*Math.sqrt(Ge*Ie)+qt)+g*$n(He,Se,ee,oe),Gt=c*Math.log(u*2*Math.sqrt(Je*Ie)*Dt(1-Ge,2)+qt)+g*$n(He,he,D,pe),Et=Math.max(je,dt,pt,Ct,kt,Gt),Z=Math.exp(je-Et),Jt=Math.exp(dt-Et),Bt=Math.exp(pt-Et),It=Math.exp(Ct-Et),Lt=Math.exp(kt-Et),Tt=Math.exp(Gt-Et),y=Z+Jt+Bt+It+Lt+Tt,F=rn((He-C)/(I-C),0,1),W=rn((E-He)/(E-I),0,1),de=rn((He-C)/(E-C),0,1),ue=(Jt+It*F+Lt*W)/y,Me=(Bt+Lt*(1-W)+Tt*de)/y,we=(Z+It*(1-F)+Tt*(1-de))/y,ge=Math.min(Je,Ie),be=rn((ge-Ge)/(ge+qt),0,1),$e=rn(4*Je*Ie,0,1),Oe=Dt(1-$e*be,2);U[Q]=rn(ue*Ye*Oe,0,1);const Fe=(1-ue*Oe)/Math.max(Me+we,qt);V[Q]=rn(Me*Fe*Ye,0,1),fe[Q]=rn(we*Fe*Ye,0,1)}}return{tissues:[U,V,fe],stats:{applied:!0,tissueMeans:{csf:C,gray:I,white:E},tissueSigmas:{csf:P,gray:j,white:R},supportCleanup:B}}}const Us=({csf:e,gray:t,white:n})=>`CSF=${e.toFixed(3)} GM=${t.toFixed(3)} WM=${n.toFixed(3)}`;function pr(e,t,n,s,o){return Ae(this,null,function*(){var f;const i=[];for(let l=0;l<3;l++)i.push(yield o(e[l],l)),e[l]=null;const{tissues:r,stats:a}=fr(i,t,ar,n);if(s.Output_Type="Continuous tissue probability",s.Tissue="GM/WM/CSF",s.Softmax_Temperature=(f=n.softmaxTemperature)!=null?f:1,a.applied){s.Partial_Volume="CAT-lite mixed-class PVE",s.CAT_Lite_Tissue_Means=Us(a.tissueMeans),s.CAT_Lite_Tissue_Sigmas=Us(a.tissueSigmas);const{componentCount:l,removedVoxels:c}=a.supportCleanup;console.log(`[CAT-lite] means ${s.CAT_Lite_Tissue_Means}; sigmas ${s.CAT_Lite_Tissue_Sigmas}; removed ${c} voxels outside the largest of ${l} support components`)}else s.Partial_Volume=`Skipped: ${a.reason}`,console.warn(`[CAT-lite] skipped: ${a.reason}`);return r})}const un=[1,3,5,7,13,19,31,19,13,7,5,3,1],mr=[16,8,4,2,1,16,8,4,2,1,16,8,4,2,1,16,8,4,2,1,16,8,4,2,1],dr={model16chan18cls:{dilations:un,activation:"gelu_tanh",fullVolume:!0},model24chan18cls_gdice_prio:{dilations:un,activation:"gelu_tanh",fullVolume:!0},model6chan3cls:{dilations:un,activation:"gelu_tanh",fullVolume:!0},model24chan104cls_synth:{dilations:un,activation:"gelu_tanh",fullVolume:!0},model24chan104cls_infant_refit_synth:{dilations:un,activation:"gelu_tanh",fullVolume:!0},model24chan104cls_v3_repbn:{dilations:un,activation:"gelu_tanh",fullVolume:!0},model24chan50cls:{dilations:un,activation:"gelu_tanh",fullVolume:!0},model32chan18cls:{dilations:un,activation:"gelu_tanh",fullVolume:!1},mindgrab:{dilations:mr,activation:"gelu_tanh",fullVolume:!0},model5_gw_ae:{dilations:[1,2,4,8,16,8,4,2,1],activation:"relu",fullVolume:!0},model11_gw_ae:{dilations:[1,2,4,8,4,2,2,1],activation:"relu",noSafetensors:!0,fullVolume:!0},model30chan18cls:{dilations:[1,2,4,8,16,8,4,2,1],activation:"elu",fullVolume:!0},model30chan50cls:{dilations:[1,2,4,8,16,8,4,2,1],activation:"elu",fullVolume:!0}};function gr(e){const t=String(e.path||"").match(/\/models\/([^/]+)\//);return t?t[1]:null}function gs(e){const t=gr(e);if(!t)return null;const n=dr[t];return!n||n.noSafetensors?null:wt({name:t},n)}function _r(e){const t=e&32768?-1:1,n=(e&31744)>>10,s=e&1023;return n===0?t*Math.pow(2,-14)*(s/1024):n===31?s?NaN:t*(1/0):t*Math.pow(2,n-15)*(1+s/1024)}function Js(e){const t=new DataView(e),n=Number(t.getBigUint64(0,!0)),s=JSON.parse(new TextDecoder().decode(new Uint8Array(e,8,n))),o=8+n,i={};for(const[r,a]of Object.entries(s)){if(r==="__metadata__"){i.__metadata__=a;continue}const[f,l]=a.data_offsets,c=a.shape.reduce((d,u)=>d*u,1);let g;if(a.dtype==="F32")g=new Float32Array(e.slice(o+f,o+l));else if(a.dtype==="F16"){const d=new Uint16Array(e.slice(o+f,o+l));g=new Float32Array(c);for(let u=0;u<c;u++)g[u]=_r(d[u])}else if(a.dtype==="BF16"){const d=new Uint16Array(e.slice(o+f,o+l));g=new Float32Array(c);const u=new Uint32Array(1),p=new Float32Array(u.buffer);for(let m=0;m<c;m++)u[0]=d[m]<<16,g[m]=p[0]}else throw new Error(`safetensors: unsupported dtype ${a.dtype} for tensor '${r}'`);if(g.length!==c)throw new Error(`safetensors: tensor '${r}' has ${g.length} values, shape says ${c}`);i[r]={dtype:a.dtype,shape:a.shape,data:g}}return i}function eo(e){const t=[],n=[],s=[];for(const[i,r]of Object.entries(e)){if(i==="__metadata__")continue;const a=i.match(/^m\.model\.(\d+)\.(weight|bias)$/);if(!a)continue;const f=Number(a[1]),l=a[2]==="weight";if(r.shape.length===5){const[c,g,d,u,p]=r.shape,x={idx:f,outC:c,inC:g,kd:d,kh:u,kw:p,is1x1:d===1&&u===1&&p===1,w:r.data,bias:null},A=t.find(_=>_.idx===f);A?Object.assign(A,x):t.push(x)}else r.shape.length===1&&s.push({idx:f,isW:l,data:r.data,len:r.shape[0]})}t.sort((i,r)=>i.idx-r.idx);for(const i of s){const r=t.find(f=>f.idx===i.idx);if(r&&!i.isW){r.bias=i.data;continue}if(r&&i.isW)continue;let a=n.find(f=>f.idx===i.idx);a||(a={idx:i.idx,scale:null,bias:null},n.push(a)),i.isW?a.scale=i.data:a.bias=i.data}n.sort((i,r)=>i.idx-r.idx);let o=null;return t.length&&t[t.length-1].is1x1&&(o=t.pop()),{convs:t,affines:n,classifier:o}}function br(e,t){var n;if(t==null)return e;if(t.length!==((n=e.classifier)==null?void 0:n.outC)||!Array.from(t).every(Number.isFinite))throw new Error("Classifier bias must contain one finite value per exported class");return e.classifier.bias=Float32Array.from(t),e}function hr(e,t){const n=t.cs,s=t.chan,{convs:o,affines:i,classifier:r}=e,a=u=>27*u*n;let f=0;const l=[];o.forEach((u,p)=>{const m=p===0?1:n,x={wq:f/4,inCS:m};f+=a(m),u.bias&&(x.biasQ=f/4,f+=n),l.push(x)}),i.forEach((u,p)=>{l[p]=l[p]||{},l[p].affQ=f/4,f+=n,l[p].affBiasQ=f/4,f+=n});let c=-1,g=-1;r&&(c=f,f+=s*t.nclass,f=Math.ceil(f/4)*4,r.bias&&(g=f,f+=t.nclass),f=Math.ceil(f/4)*4);const d=new Float32Array(f);if(o.forEach((u,p)=>{const m=l[p],x=m.inCS,A=m.wq*4,_=u.kd*u.kh*u.kw;if(u.outC>s||p>0&&u.inC>s)throw new Error(`layer ${p}: shape ${u.outC}x${u.inC} exceeds CHAN ${s}`);for(let h=0;h<u.outC;h++){for(let v=0;v<u.inC;v++)for(let S=0;S<u.kd;S++)for(let b=0;b<u.kh;b++)for(let k=0;k<u.kw;k++){const B=u.kd===3?S*9+b*3+k:0,$=(((h*u.inC+v)*u.kd+S)*u.kh+b)*u.kw+k;d[A+(B*x+v)*n+h]=u.w[$]}u.bias&&(d[m.biasQ*4+h]=u.bias[h])}if(_!==27&&_!==1)throw new Error(`layer ${p}: kernel ${u.kd}x${u.kh}x${u.kw} unsupported`)}),i.forEach((u,p)=>{const m=l[p];for(let x=0;x<s;x++)d[m.affQ*4+x]=u.scale?u.scale[x]:0,d[m.affBiasQ*4+x]=u.bias?u.bias[x]:0}),r)for(let u=0;u<t.nclass;u++){for(let p=0;p<s;p++)d[c+p*t.nclass+u]=r.w[u*r.inC+p];r.bias&&(d[g+u]=r.bias[u])}return{data:d,offsets:{layers:l,clsFloat:c,clsBiasFloat:g}}}function to(e,t={}){const{convs:n,affines:s,classifier:o}=e,i=n[0].outC,r=Math.ceil(i/4)*4,a=n.some(l=>l.bias),f=wt({chan:i,cs:r,planes:r/4,nclass:o?o.outC:0,nhidden:n.length-1,norm:s.length?"gn":a?"none":"gn",affine:s.length>0,convBias:a,classifierBias:!!(o&&o.bias),centeredVariance:!1,eps:1e-5},t);if(f.nclass>256)throw new Error(`classifier has ${f.nclass} classes; the RGBA8 label texture holds at most 256`);if(!f.activation)throw new Error("descriptor needs an explicit `activation`");if(!f.dilations)throw new Error("descriptor needs an explicit `dilations` array");if(f.dilations.length!==n.length)throw new Error(`descriptor has ${f.dilations.length} dilations for ${n.length} convs`);return f}const jn=(e,t)=>Array.from({length:e},(n,s)=>t(s)).join(""),Ws=["x","y","z","w"];function wr(e){const t=`fn act4(x : vec4<f32>) -> vec4<f32> {
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
`;default:throw new Error(`webgpu-native: unknown activation '${e}'; add it deliberately`)}}function vr(e,t,n){const s=e.cs/4,o=l=>jn(n,l),i=l=>jn(s,l),r=i(l=>`          let w${l} = vec4<f32>(wts4[wq + ${l}u]);
`),a=l=>`        { let wq = wq0 + ((tap * cin) + ic4 * 4u + ${l}u) * (CS / 4u);
`+r+o(c=>i(g=>`          a${c}${g} = fma(w${g}, vec4<f32>(s${c}.${Ws[l]}), a${c}${g});
`))+`        }
`,f=(e.convBias?i(l=>`  let b${l} = vec4<f32>(wts4[params.bias_off / 4u + ${l}u]);
`)+o(l=>i(c=>`  a${l}${c} = a${l}${c} + b${c};
`)):"")+(e.norm==="none"?o(l=>i(c=>`  a${l}${c} = act4(a${l}${c});
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
`+o(l=>i(c=>`  var a${l}${c} = vec4<f32>(0.0);
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
`+i(c=>`          a${l}${c} = fma(w${c}, s, a${l}${c});
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
`+f+`  let obase = (u32(z) * u32(NY) + u32(y)) * u32(NX) + u32(x0);
`+o(l=>`  { let o = (obase + ${l}u) * CS;
`+i(c=>jn(4,g=>`    dst[o + ${4*c+g}u] = f16(a${l}${c}.${Ws[g]});
`))+`  }
`)+`}
`}function yr(e){return`var<workgroup> wg_sum : array<f32, ${e} * CS>;
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
`}function xr(e){return`@compute @workgroup_size(${e}, 1, 1)
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
`}function $r(e){return`@group(0) @binding(5) var<storage, read_write> labels : array<u32>;
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
`}function Sr(e,t){var i;const{localX:n,vox:s,momLX:o}=t;if(e.cs%4!==0||e.cs>256)throw new Error(`webgpu-native: channel stride ${e.cs} unsupported`);if(e.nx%(n*s)||e.nx%n||e.nx%o)throw new Error(`webgpu-native: preset ${n}x${s}/${o} does not tile a ${e.nx}-voxel row`);if(o<e.cs)throw new Error(`webgpu-native: moments workgroup ${o} < ${e.cs} channels`);return`enable f16;
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
`+wr(e.activation)+vr(e,n,s)+(e.norm==="gn"?yr(o)+xr(n):"")+$r(n)}const Xn={amd:{localX:256,vox:1},apple:{localX:64,vox:2},default:{localX:64,vox:2}};function kr(){var e;try{const t=new URLSearchParams(((e=globalThis.location)==null?void 0:e.search)||"").get("wgPreset"),n=t&&/^(\d+)x([124])$/.exec(t);return n?{localX:Number(n[1]),vox:Number(n[2]),source:"url"}:null}catch(t){return null}}function Pr(e,t){var a;const n=String(((a=e.adapterInfo)==null?void 0:a.vendor)||"").toLowerCase(),s=e.limits,o=f=>f.localX<=s.maxComputeInvocationsPerWorkgroup&&f.localX<=s.maxComputeWorkgroupSizeX&&t.nx%(f.localX*f.vox)===0;let i=kr()||Ut(wt({},Xn[n]||Xn.default),{source:n||"default"});o(i)||(console.warn(`[WebGPU-native] preset ${i.localX}x${i.vox} does not fit this device; using the default`),i=Ut(wt({},Xn.default),{source:"fallback"}));let r=0;for(const f of[256,128,64,32])if(f<=i.localX&&f>=t.cs&&t.nx%f===0&&f<=s.maxComputeInvocationsPerWorkgroup&&f*t.cs*8<=s.maxComputeWorkgroupStorageSize){r=f;break}if(!r)throw new Error(`webgpu-native: no moments workgroup fits ${t.cs} channels on this device`);return Ut(wt({},i),{momLX:r,vendor:n||"unknown"})}const Mt=256;function qs(e){if(typeof Float16Array!="undefined")return new Uint16Array(new Float16Array(e).buffer);const t=new Uint16Array(e.length),n=new Float32Array(1),s=new Uint32Array(n.buffer);for(let o=0;o<e.length;o++){n[0]=e[o];const i=s[0],r=i>>>16&32768,a=i>>>23&255,f=i&8388607;if(a===255){t[o]=r|31744|(f?512:0);continue}const l=a-127+15;if(l>=31){t[o]=r|31744;continue}if(l<=0){if(l<-10){t[o]=r;continue}const d=f|8388608,u=14-l;let p=d>>>u;const m=d&(1<<u)-1,x=1<<u-1;(m>x||m===x&&p&1)&&p++,t[o]=r|p;continue}let c=l<<10|f>>>13;const g=f&8191;(g>4096||g===4096&&c&1)&&c++,t[o]=r|c}return t}function Ar(e,t){var n;return t.quantize8Bit?"8-bit quantized V4 runner requested":(n=e.features)!=null&&n.has("shader-f16")?t.outputType==="probability"?"probability output (CAT-lite) is not ported yet":t.enableTTA?"test-time augmentation uses the tinygrad TTA runner":t.forceFP32?"model entry forces fp32":t.webgpu_safetensor?gs(t)?null:"no descriptor in webgl2_runners/descriptors.js":"no safetensors weights":"device lacks shader-f16"}function Mr(e,t){const n=e.nx*e.ny*e.nz,s=e.nx/t*e.ny*e.nz;return 2*n*e.cs*2+n*2+2*n*4+(s+1)*e.cs*2*4}const Rs=new WeakMap;function Cr(e,t,n){return Ae(this,null,function*(){let s=Rs.get(e);s||(s=new Map,Rs.set(e,s));const o=`${t.chan}|${t.cs}|${t.nclass}|${t.norm}|${t.affine}|${t.convBias}|${t.clsBias}|${t.activation}|${t.eps}|${n.localX}x${n.vox}x${n.momLX}`;let i=s.get(o);return i||(i=Ae(null,null,function*(){const r=e.createShaderModule({code:Sr(t,n)}),a=["read-only-storage","storage","read-only-storage","uniform","storage","storage","read-only-storage","read-only-storage"],f=e.createBindGroupLayout({entries:a.map((d,u)=>({binding:u,visibility:GPUShaderStage.COMPUTE,buffer:{type:d}}))}),l=e.createPipelineLayout({bindGroupLayouts:[f]}),c=["conv","classify",...t.norm==="gn"?["moments","moments_finish","norm"]:[]],g=Object.fromEntries(yield Promise.all(c.map(d=>Ae(null,null,function*(){return[d,yield e.createComputePipelineAsync({layout:l,compute:{module:r,entryPoint:d}})]}))));return{bgl:f,pipelines:g}}).catch(r=>{throw s.delete(o),r}),s.set(o,i)),i})}function Br(e,t,n,s){return Ae(this,null,function*(){const o=gs(s);if(!o)throw new Error(`webgpu-native: no descriptor for ${s.path}`);const i=t instanceof Uint8Array?t:new Uint8Array(t),r=br(eo(Js(i.buffer.slice(i.byteOffset,i.byteOffset+i.byteLength))),s.classifierBias),a=to(r,{nx:Mt,ny:Mt,nz:Mt,activation:o.activation,dilations:o.dilations});if(!a.nclass)throw new Error("webgpu-native: model has no classifier");if(a.convBias&&a.affine)throw new Error("webgpu-native: conv bias together with a GroupNorm affine is not supported");const f=Pr(e,a),l=Mt*Mt*Mt,c=l*a.cs*2,g=e.limits;if(c>g.maxStorageBufferBindingSize||c>g.maxBufferSize)throw new Error(`webgpu-native: a ${c>>>20} MiB activation exceeds this device's buffer limits`);console.log(`[WebGPU-native] ${o.name}: ${a.chan}ch (stride ${a.cs}) ${a.nclass}cls norm=${a.norm} affine=${a.affine} act=${a.activation} | preset ${f.localX}x${f.vox} (moments ${f.momLX}, ${f.source}) | ~${Math.round(Mr(a,f.momLX)/1048576)} MiB`);const d=hr(r,a),{layers:u,clsFloat:p,clsBiasFloat:m}=d.offsets;e.pushErrorScope("validation"),e.pushErrorScope("out-of-memory");let x=2;try{const{bgl:A,pipelines:_}=yield Cr(e,a,f),h=(H,X)=>e.createBuffer({size:H,usage:X}),v=GPUBufferUsage.STORAGE,S=Mt/f.momLX*Mt*Mt,b=qs(d.data),k=h(l*2,v|GPUBufferUsage.COPY_DST),B=h(c,v),$=h(c,v),w=h(Math.ceil(b.byteLength/16)*16,v|GPUBufferUsage.COPY_DST),G=h((S+1)*a.cs*2*4,v),M=h(l*4,v|GPUBufferUsage.COPY_SRC),C=h(l*4,GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST);e.queue.writeBuffer(w,0,b);const I=(H,X,Se)=>{const he=h(32,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST);return e.queue.writeBuffer(he,0,Se),e.createBindGroup({layout:A,entries:[{binding:0,resource:{buffer:H}},{binding:1,resource:{buffer:X}},{binding:2,resource:{buffer:w}},{binding:3,resource:{buffer:he}},{binding:4,resource:{buffer:G}},{binding:5,resource:{buffer:M}},{binding:6,resource:{buffer:w}},{binding:7,resource:{buffer:H}}]})},E=H=>{const X=new Uint32Array(8);return X[0]=H.dilation|0,X[1]=H.weightOff>>>0,X[2]=H.affineOff>>>0,X[3]=H.biasOff>>>0,X[4]=H.inChannels>>>0,X[5]=H.inStride>>>0,X[6]=S,X},P=[];let j=k,R=B;u.forEach((H,X)=>{const Se=X===0;P.push(I(j,R,E({dilation:a.dilations[X],weightOff:H.wq*4,affineOff:H.affQ!==void 0?H.affQ*4:0,biasOff:H.biasQ!==void 0?H.biasQ*4:H.affBiasQ!==void 0?H.affBiasQ*4:0,inChannels:Se?1:a.cs,inStride:Se?1:a.cs}))),j=R,R=R===B?$:B});const ie=I(j,R,E({weightOff:p,biasOff:m>=0?m:0}));x=0;const se=yield e.popErrorScope(),L=yield e.popErrorScope();if(se||L)throw new Error(`webgpu-native setup failed: ${(se||L).message}`);const U=Mt/(f.localX*f.vox),V=Mt/f.localX,fe=Mt/f.momLX;return function(X){return Ae(this,null,function*(){if(X.length!==l)throw new Error(`webgpu-native: input has ${X.length} voxels, expected ${l}`);e.pushErrorScope("validation"),e.queue.writeBuffer(k,0,qs(X));for(const D of P){const N=e.createCommandEncoder(),q=N.beginComputePass();q.setBindGroup(0,D),q.setPipeline(_.conv),q.dispatchWorkgroups(U,Mt,Mt),a.norm==="gn"&&(q.setPipeline(_.moments),q.dispatchWorkgroups(fe,Mt,Mt),q.setPipeline(_.moments_finish),q.dispatchWorkgroups(1,1,1),q.setPipeline(_.norm),q.dispatchWorkgroups(V,Mt,Mt)),q.end(),e.queue.submit([N.finish()])}const Se=e.createCommandEncoder(),he=Se.beginComputePass();he.setBindGroup(0,ie),he.setPipeline(_.classify),he.dispatchWorkgroups(V,Mt,Mt),he.end(),Se.copyBufferToBuffer(M,0,C,0,l*4),e.queue.submit([Se.finish()]),yield C.mapAsync(GPUMapMode.READ);const ze=new Float32Array(new Uint32Array(C.getMappedRange()));C.unmap();const ee=yield e.popErrorScope();if(ee)throw new Error(`webgpu-native inference failed: ${ee.message}`);return[ze]})}}finally{for(;x-- >0;)yield e.popErrorScope().catch(()=>{})}})}const zr={grayMatter:[2,6,7,8,9,10,14,15,16,17],whiteMatter:[1,5],csf:[3,4,11,12]};function Pn(e,t,n,s,o){var r;const i=Number((r=e[t])!=null?r:n);if(!Number.isFinite(i)||i<s||i>o)throw new Error(`${t} must be between ${s} and ${o}, got ${e[t]}`);return i}function Yn(e,t,n){let s=0;for(const o of e||[]){if(!Number.isInteger(o)||o<0||o>=t||o>=32)throw new Error(`Invalid ${n} tissue label ${o} for ${t} classes`);s=(s|1<<o)>>>0}return s}function Fr(e,t){if(!Number.isInteger(t)||t<2||t>32)throw new Error(`Native WebGL2 grouped probabilities require 2..32 classes, got ${t}`);const n=wt(wt({},zr),e.probabilityGroups||{});return{temperature:Pn(e,"softmaxTemperature",1,1e-6,1e6),supportTemperature:Pn(e,"brainSupportTemperature",1,1e-6,1e6),supportPower:Pn(e,"brainSupportPower",1,1e-6,1e6),sigma:Pn(e,"partialVolumeSigma",0,0,2),grayMask:Yn(n.grayMatter,t,"gray-matter"),whiteMask:Yn(n.whiteMatter,t,"white-matter"),csfMask:Yn(n.csf,t,"CSF")}}function Kn(e,t,n,s,o,i){const[r,a,f]=n,l=r*a,c=o.length-1>>1;for(let g=0;g<f;g++)for(let d=0;d<a;d++)for(let u=0;u<r;u++){const p=g*l+d*r+u,m=s===1?u:s===r?d:g,x=s===1?r:s===r?a:f;let A=0;for(let _=-c;_<=c;_++){const h=m+_;h<0||h>=x||(A+=o[_+c]*e[p+_*s])}t[p]=A/i}}function Lr(e,t,n,s){const[o,i,r]=n,a=o*i*r;if(!Array.isArray(e)||e.length!==3||e.some(u=>u.length!==a)||t.length!==a)throw new Error("Native WebGL2 tissue-prior dimensions do not match");const f=Pn(s,"partialVolumeSigma",0,0,2),l=Pn(s,"brainSupportPower",1,1e-6,1e6);let c=null,g=null,d=1;if(f>0){const u=Math.max(1,Math.round(3*f));g=new Float32Array(u*2+1),d=0;for(let p=-u;p<=u;p++){const m=Math.exp(-.5*p*p/(f*f));g[p+u]=m,d+=m}c=new Float32Array(a)}for(const u of e){let p=u;g&&(Kn(u,c,n,1,g,d),Kn(c,u,n,o,g,d),Kn(u,c,n,o*i,g,d),p=c);for(let m=0;m<a;m++){const x=Math.pow(Math.max(0,Math.min(1,t[m])),l);u[m]=Math.max(0,Math.min(1,p[m]*x))}}return e}const z=256,$t=64,Ht=8,ht=$t+2*Ht,pn=ht*4,Qe=z*64,Un=z*z*2,Tn=9216,no=Tn*8,is=[1,3,5,7,13,19,31,19,13,7,5,3,1],bt=(e,t)=>Array.from({length:e},(n,s)=>t(s)).join(""),so=280,oo=150,Ur=55,Zn=112;let ls=0;function us(e,t){const n=Math.floor(e/4),s=e%4,o=s===0?n:n+1,i=n,r=s*8,a=s===0?0:32-r;return(e&63|(o&15)<<6|(i&15)<<10|(r&31)<<14|(a&31)<<19|(t?1:0)<<24)>>>0}function ro(e){var t;if(e!=null&&e.webgpuExecMode)return String(e.webgpuExecMode).toLowerCase();try{const n=new URLSearchParams(((t=globalThis.location)==null?void 0:t.search)||"").get("webgpuExec");if(n)return n.toLowerCase()}catch(n){}return""}function Wr(e){var n,s;if(!e)return"";if(typeof e.__glRenderer=="string")return e.__glRenderer;let t="";try{const o=typeof navigator!="undefined"&&/Firefox/i.test(navigator.userAgent||""),i=typeof OffscreenCanvas!="undefined"?new OffscreenCanvas(1,1):typeof document!="undefined"?document.createElement("canvas"):null,r=(n=i==null?void 0:i.getContext)==null?void 0:n.call(i,"webgl2",{powerPreference:"high-performance"});if(r){if(o)t=String(r.getParameter(r.RENDERER)||"");else{const a=r.getExtension("WEBGL_debug_renderer_info");t=String((a?r.getParameter(a.UNMASKED_RENDERER_WEBGL):r.getParameter(r.RENDERER))||"")}(s=r.getExtension("WEBGL_lose_context"))==null||s.loseContext()}}catch(o){}return e.__glRenderer=t,t}function Wn(e){var d;const t=(e==null?void 0:e.__adapterInfo)||(e==null?void 0:e.adapterInfo)||{},n=String(t.vendor||"").toLowerCase(),s=String(t.architecture||"").toLowerCase(),o=typeof navigator!="undefined"&&navigator.userAgent||"",i=typeof navigator!="undefined"&&(((d=navigator.userAgentData)==null?void 0:d.platform)||navigator.platform||"")||"",r=n==="apple"||/Mac|iPhone|iPad|iPod/i.test(`${i} ${o}`)&&!["intel","amd","nvidia","microsoft"].includes(n),a=!r&&(/Win/i.test(i)||/Windows/i.test(o)),f=a&&!n?Wr(e):String((e==null?void 0:e.__glRenderer)||""),l=`${t.device||""} ${t.description||""} ${f}`,c=n||(/\bintel\b/i.test(f)?"intel":/\bmicrosoft\b|\bbasic render\b/i.test(f)?"microsoft":""),g=a&&(c==="microsoft"||c==="intel"&&!/\bArc\b/i.test(l)&&(/^gen-(9|11|12lp)/i.test(s)||/(?:UHD|HD)\s+Graphics|Iris(?:\(R\))?\s*(?:Plus|Xe)|Pentium|Celeron/i.test(l)));return{vendor:c,arch:s,desc:l,isApple:r,isWindows:a,isWindowsSharedIgpu:g}}function ao(e,t){const n=ro(t);if(n==="single"||n==="pipelined"||n==="paced"||n==="calibrate")return n;if(n==="chunked")return"paced";const s=Wn(e);return s.isApple?"single":s.isWindows?e!=null&&e.__v4WinCalibrated?e.__v4WinFast?"pipelined":"paced":"calibrate":"pipelined"}function io(e,t){const n=ro(t);return n==="single"?!1:n==="paced"||n==="chunked"||n==="calibrate"?!0:n==="pipelined"?!1:Wn(e).isWindows}function lo(e,t,n){return(n==null?void 0:n.forceLowMem128)===!1?!1:Wn(e).isWindowsSharedIgpu&&t.cs>=24&&t.cs%4===0}function uo(){return typeof requestAnimationFrame!="function"?new Promise(e=>setTimeout(e,0)):new Promise(e=>{let t=!1;const n=()=>{t||(t=!0,e())},s=setTimeout(n,16);requestAnimationFrame(()=>{clearTimeout(s),setTimeout(n,0)})})}function co(e,t,n){let s=t,o=null,i=null,r=performance.now(),a=performance.now();function f(m,x,A){return Ae(this,arguments,function*(c,g,d,{forceUiYield:u=!1,emitTick:p=!0}={}){o&&(yield o,o=null);const _=performance.now();e.queue.submit([c.finish()]);const h=e.createCommandEncoder(),v=e.queue.onSubmittedWorkDone().then(()=>{const b=performance.now(),k=Math.max(_,r),B=Math.max(0,b-k);b>r&&(r=b),g>=256&&B>.2&&(s=Math.max(.005,Math.min(2,.7*s+.3*(B/g))),e.__v4MsPerStrip=s)});o=i,i=v,p&&n&&n(d);const S=performance.now();return(u||S-a>=Ur)&&(yield uo(),a=performance.now()),h})}function l(){return Ae(this,null,function*(){o&&(yield o,o=null)})}return{submitChunk:f,waitBeforeFinalSubmit:l,getMsPerStrip:()=>s,setMsPerStrip:c=>{s=Math.max(.005,Math.min(2,c)),e.__v4MsPerStrip=s,r=performance.now()}}}function _s(e,t,n){const s=e.isFull?Qe:e.mainStrips.length,o=e.isFull||!e.extStrips?0:e.extStrips.length,i=t+1<n?e.isFull?Qe:e.normStrips?e.normStrips.length:0:0,r=Math.max(16,Math.round(i*.12));return t===0?{convWork:Math.max(64,Math.round(s*.12)),normWork:r}:{convWork:s+o,normWork:r}}function fo(e,t){let n=0;for(let o=0;o<t;o++){const i=_s(e.layers[o],o,t);n+=i.convWork+i.normWork}const s=e.clsSkipped?e.clsStrips.length:Qe;return n+=Math.max(64,Math.round(s*.2)),Math.max(1,n)}const po=new Float32Array(1),qr=new Uint32Array(po.buffer);function cs(e){po[0]=e;const t=qr[0],n=t>>>16&32768,s=t>>>23&255;let o=t&8388607;if(s===255)return n|31744|(o?512:0);let i=s-127+15;return i<=0?i<-10?n:(o=(o|8388608)>>>1-i,n|o+4096>>>13):i>=31?n|31744:n|Math.min(31744,(i<<10)+(o+4096>>>13))}function Rr(e){const t=new Uint16Array(e.length);for(let n=0;n<e.length;n++)t[n]=cs(e[n]);return t}const cn=new Map,Gr=12,mo=new WeakMap,Er=new WeakMap;function Ir(e){let t=2166136261,n=2654435769;const s=e.byteLength>>>2;if((e.byteOffset&3)===0){const o=new Uint32Array(e.buffer,e.byteOffset,s);for(let i=0;i<o.length;i++){const r=o[i];t=Math.imul(t^r,16777619)>>>0,n=Math.imul(n^(r<<13|r>>>19),2246822507)>>>0}}else for(let o=0;o<s*4;o+=4){const i=e[o]|e[o+1]<<8|e[o+2]<<16|e[o+3]<<24;t=Math.imul(t^i,16777619)>>>0,n=Math.imul(n^(i<<13|i>>>19),2246822507)>>>0}for(let o=s*4;o<e.byteLength;o++)t=Math.imul(t^e[o],16777619)>>>0;return`${e.byteLength}_${t.toString(16)}_${n.toString(16)}`}function Tr(e,t,n,s){const o=s!=null&&s.classifierBias?JSON.stringify(s.classifierBias):"",i=`${Ir(e)}|${n.chan}|${n.cs}|${n.nclass}|${n.norm}|${n.eps}|${o}`;if(cn.has(i)){const a=cn.get(i);return cn.delete(i),cn.set(i,a),a}const r=Vr(t,n);if(cn.size>=Gr){const a=cn.keys().next().value;cn.delete(a)}return cn.set(i,r),r}function bs(e,t){let n=e.get(t);return n||(n=new Map,e.set(t,n)),n}function Vt(e,t,n){let s=e.get(t);return s||(s=n().catch(o=>{throw e.delete(t),o}),e.set(t,s)),s}function On(e,t){let n=0;return{alloc:(o,i)=>{const r=Math.max(16,Math.ceil(o/16)*16),a=e.createBuffer({size:r,usage:i});return t.push(a),n+=r,a},getBytes:()=>n,resetBytes:()=>{n=0}}}const ln=new WeakMap;function yn(e){const t=e?ln.get(e):null;if(t){ln.delete(e),t.inUse=!1;for(const n of t.buffers)n.destroy();t.buffers.length=0}}function go(e,t,n){const s=ln.get(e);if(s){if(s.key===t&&!s.inUse)return s.inUse=!0,s;if(s.inUse){const r=n();return Ut(wt({key:t},r),{inUse:!0,pooled:!1})}ln.delete(e);for(const r of s.buffers)r.destroy();s.buffers.length=0}const o=n(),i=Ut(wt({key:t},o),{inUse:!0,pooled:!0});return ln.set(e,i),i}function Rt(e,t,n){return e.createShaderModule({label:t,code:n})}function hs(e,t,n,s,o){return Ae(this,null,function*(){const i=e.createBindGroupLayout({entries:o.map((r,a)=>typeof r=="string"?{binding:a,visibility:GPUShaderStage.COMPUTE,buffer:{type:r}}:{binding:a,visibility:GPUShaderStage.COMPUTE,buffer:r})});try{const r=yield e.createComputePipelineAsync({label:t,layout:e.createPipelineLayout({bindGroupLayouts:[i]}),compute:{module:n,entryPoint:s}});return{bgl:i,pipe:r}}catch(r){if(n!=null&&n.getCompilationInfo){const a=yield n.getCompilationInfo().catch(()=>null),f=a?a.messages.filter(l=>l.type==="error"):[];if(f.length)throw new Error(`meshnet_fast_v4 [${t}] WGSL error: `+f.map(l=>`L${l.lineNum}:${l.linePos} ${l.message}`).join(" | "))}throw r}})}function fs(e,t){const n=t?`enable f16;
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
  let dstX4 = ${Ht}u + wid.x * 8u + x4Loc;
  for (var s : u32 = 0u; s < 4u; s = s + 1u) {
    let zLoc = s * 8u + zOff;
    let r = zLoc * 33u + xBase;
    inp_4[((Z0 + zLoc) * 256u + Y) * ${ht}u + dstX4] =
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
  let dstX4 = ${Ht}u + wid.x * 8u + x4Loc;
  for (var s : u32 = 0u; s < 4u; s = s + 1u) {
    let zl = s * 8u + zOff;
    let r = zl * 33u + xBase;
    inp_4[((Z0 + zl) * 256u + Y) * ${ht}u + dstX4] =
      ${o}(${s}(sh[r]), ${s}(sh[r + 1u]), ${s}(sh[r + 2u]), ${s}(sh[r + 3u]));
  }
}`}function _o(){return`
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
}`}function Or(){return`
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
}`}function Nr(){return`
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
}`}function Gs(){return`
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
}`}function an(e,t,n,s,o){return Ae(this,null,function*(){const i=bs(Er,e);let r=i.get(t);return r||(r=Ae(null,null,function*(){const a=Rt(e,t,n());return hs(e,t,a,s,o)}).catch(a=>{throw i.delete(t),a}),i.set(t,r)),r})}function Es(e,t,n,s,o){t.fill(0);const i=z*z*z;if(!(o&&e[0]===s&&e[i-1]===s))return{hasBgSkip:!1};if(n.fill(0),(e instanceof Uint8Array||e instanceof Uint8ClampedArray)&&(e.byteOffset&3)===0&&Number.isInteger(s)&&s>=0&&s<=255){const f=new Uint32Array(e.buffer,e.byteOffset,i>>>2),l=new Uint32Array(n.buffer,n.byteOffset,z*z>>>2),c=(s&255)*16843009>>>0;let g=0;for(let d=0;d<z;d++)for(let u=0;u<16384;u++)l[u]|=f[g++]^c}else{let f=0;const l=z*z;for(let c=0;c<z;c++)for(let g=0;g<l;g++,f++)e[f]!==s&&(n[g]=1)}let a=0;for(let f=0;f<z;f++){const l=f*z;for(let c=0;c<z;c++)n[l+c]!==0&&(t[c*z+f]=1,a++)}return a===0||a>=6e4?{hasBgSkip:!1}:{hasBgSkip:!0}}function bo(e){return e?`${e.grayMask}_${e.whiteMask}_${e.csfMask}_${e.temperature}_${e.supportTemperature}`:"seg"}function ho(c,g,d,u,p,m,x){return Ae(this,arguments,function*(e,t,n,s,o,i,r,{includeCls:a=!0,sequential:f=!1,shouldAbort:l=null}={}){var re;const A=bs(mo,e),_=s?1:0,h=o?1:0,v=r.useUniformWeff?1:0,S=(T,oe,pe,K)=>hs(e,T,oe,pe,K),b=["storage","storage","storage","storage"],k=["read-only-storage","storage","storage","storage","storage","storage","read-only-storage","storage","uniform","uniform","uniform"],B=["read-only-storage","read-only-storage","storage","storage","read-only-storage","uniform"],$=["storage","storage","storage","storage","read-only-storage","read-only-storage",{type:"uniform",hasDynamicOffset:!0,minBindingSize:32}],w=["storage","storage","storage","storage","read-only-storage","read-only-storage","read-only-storage","uniform"],G=["read-only-storage","read-only-storage","read-only-storage","read-only-storage","storage","storage",r.useUniformWeff?"uniform":"read-only-storage","read-only-storage",{type:"uniform",hasDynamicOffset:!0,minBindingSize:32}],M=["read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","storage","uniform","uniform","uniform"],C=`128|init|${t.cs}|${t.activation}|${_}`,I=`128|conv0|${t.cs}|${t.dilations[0]}|${t.norm}|${_}|${h}`,E=`128|prep|${t.chan}|${t.cs}|${t.activation}|${t.norm}|${_}`,P=`128|flush|${t.cs}|${_}`,j=`128|norm|${t.cs}|${t.activation}|${t.norm}|${_}`,R=`128|conv|${t.chan}|${t.cs}|${t.activation}|${t.norm}|${v}|${_}|${h}`,ie=`128|cls|${t.chan}|${t.cs}|${t.nclass}|${(re=n==null?void 0:n.clsK4)!=null?re:0}|${r.numConvs}|${t.activation}|${t.norm}|${_}|${bo(i)}`,se=()=>Vt(A,C,()=>{const T=Rt(e,"init_act8_128",r.initActWgsl());return S("init_act8_128",T,"main",b)}),L=()=>Vt(A,I,()=>Ae(null,null,function*(){const T=Rt(e,"conv0_128",r.conv0Wgsl()),oe=yield Promise.all(r.halfPass0?[S("conv0_128_lo",T,"main_lo",k),S("conv0_128_hi",T,"main_hi",k),S("conv0_128_bg_lo",T,"main_bg_lo",k),S("conv0_128_bg_hi",T,"main_bg_hi",k)]:[S("conv0_128",T,"main",k),S("conv0_128_bg",T,"main_bg",k)]);return r.halfPass0?{lo:oe[0],hi:oe[1],bgLo:oe[2],bgHi:oe[3]}:{main:oe[0],bg:oe[1]}})),U=()=>Vt(A,E,()=>Ae(null,null,function*(){const T=Rt(e,"prep_128",r.prepWgsl()),[oe,pe]=yield Promise.all([S("moments_finish_128",T,"moments_finish",B),S("prep_weff_128",T,"prep_weff",B)]);return{pMomFin:oe,pPrepW:pe}})),V=()=>Vt(A,P,()=>{const T=Rt(e,"flush_128",r.flushWgsl());return S("flush_stage_128",T,"main",$)}),fe=()=>Vt(A,j,()=>Ae(null,null,function*(){const T=Rt(e,"norm_128",r.normWgsl()),[oe,pe]=yield Promise.all([S("norm_quant8_128",T,"main",w),S("norm_halo_fill_128",T,"norm_halo_fill",w)]);return{pNorm:oe,pNormHalo:pe}})),H=()=>a?Vt(A,ie,()=>{const T=Rt(e,"cls_128",r.clsWgsl());return S("classify_v4_128",T,"main",M)}):Promise.resolve(null),X=()=>Vt(A,R,()=>Ae(null,null,function*(){const T=Rt(e,"conv_128",r.convWgsl());if(r.halfPassConv){const[Y,te,Q,ve,ce,ke]=yield Promise.all([S("conv_128_lo",T,"main_lo",G),S("conv_128_hi",T,"main_hi",G),S("conv_128_ext_lo",T,"main_ext_lo",G),S("conv_128_ext_hi",T,"main_ext_hi",G),S("conv_128_bg_lo",T,"main_bg_lo",G),S("conv_128_bg_hi",T,"main_bg_hi",G)]);return{lo:Y,hi:te,extLo:Q,extHi:ve,bgLo:ce,bgHi:ke}}const[oe,pe,K]=yield Promise.all([S("conv_128",T,"main",G),S("conv_128_ext",T,"main_ext",G),S("conv_128_bg",T,"main_bg",G)]);return{main:oe,ext:pe,bg:K}}));if(f){for(const T of[se,U,V,fe,L,X,H]){if(l!=null&&l())return null;yield T()}return null}const[Se,he,ze,ee,D,N,q]=yield Promise.all([se(),L(),U(),V(),fe(),H(),X()]);return{pInit:Se,pMomFin:ze.pMomFin,pPrepW:ze.pPrepW,pFlush:ee,pNorm:D.pNorm,pNormHalo:D.pNormHalo,pCls:N,pConv0:he,pConv:q}})}function wo(g,d,u,p,m,x,A,_){return Ae(this,arguments,function*(e,t,n,s,o,i,r,a,{includeCls:f=!0,sequential:l=!1,shouldAbort:c=null}={}){var re;const h=bs(mo,e),v=s?1:0,S=o?1:0,b=i?1:0,k=a.useUniformWeff?1:0,B=a.chunkableStd?1:0,$=(T,oe,pe,K)=>hs(e,T,oe,pe,K),w=["storage","storage"],G=["read-only-storage","storage","storage","read-only-storage","read-only-storage","storage","storage","read-only-storage","uniform"],M=["read-only-storage","read-only-storage","storage","storage","storage","storage","read-only-storage","uniform"],C=["storage","storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","uniform"],I=["read-only-storage","read-only-storage","storage","storage","storage","storage",a.useUniformWeff?"uniform":"read-only-storage","read-only-storage",a.chunkableStd?{type:"uniform",hasDynamicOffset:!0,minBindingSize:32}:"uniform"],E=["read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","storage","read-only-storage","uniform"],P=`std|init|${t.cs}|${t.activation}|${v}|${b}`,j=`std|conv0|${t.cs}|${t.dilations[0]}|${t.norm}|${v}|${S}|${b}`,R=`std|prep|${t.chan}|${t.cs}|${t.activation}|${t.norm}|${v}|${b}`,ie=`std|norm|${t.cs}|${t.activation}|${t.norm}|${v}|${b}`,se=`std|conv|${t.chan}|${t.cs}|${t.activation}|${t.norm}|${k}|${v}|${S}|${b}${B?"|chk1":""}`,L=`std|cls|${t.chan}|${t.cs}|${t.nclass}|${(re=n==null?void 0:n.clsK4)!=null?re:0}|${t.activation}|${t.norm}|${v}|${b}|${bo(r)}`,U=()=>Vt(h,P,()=>{const T=Rt(e,"init_act8",a.initActWgsl());return $("init_act8",T,"main",w)}),V=()=>Vt(h,j,()=>Ae(null,null,function*(){const T=Rt(e,"conv0",a.conv0Wgsl()),oe=yield Promise.all(a.halfPass0?[$("conv0_lo",T,"main_lo",G),$("conv0_hi",T,"main_hi",G),$("conv0_bg_lo",T,"main_bg_lo",G),$("conv0_bg_hi",T,"main_bg_hi",G)]:[$("conv0",T,"main",G),$("conv0_bg",T,"main_bg",G)]);return a.halfPass0?{lo:oe[0],hi:oe[1],bgLo:oe[2],bgHi:oe[3]}:{main:oe[0],bg:oe[1]}})),fe=()=>Vt(h,R,()=>Ae(null,null,function*(){const T=Rt(e,"prep",a.prepWgsl()),[oe,pe]=yield Promise.all([$("moments_finish",T,"moments_finish",M),$("prep_weff",T,"prep_weff",M)]);return{pMomFin:oe,pPrepW:pe}})),H=()=>Vt(h,ie,()=>Ae(null,null,function*(){const T=Rt(e,"norm",a.normWgsl()),[oe,pe]=yield Promise.all([$("norm_quant8",T,"main",C),$("norm_halo_fill",T,"norm_halo_fill",C)]);return{pNorm:oe,pNormHalo:pe}})),X=()=>f?Vt(h,L,()=>{const T=Rt(e,"cls",a.clsWgsl());return $("classify_v4",T,"main",E)}):Promise.resolve(null),Se=()=>Vt(h,se,()=>Ae(null,null,function*(){const T=Rt(e,"conv",a.convWgsl());if(a.halfPassConv){const[K,Y,te,Q]=yield Promise.all([$("conv_lo",T,"main_lo",I),$("conv_hi",T,"main_hi",I),$("conv_ext_lo",T,"main_ext_lo",I),$("conv_ext_hi",T,"main_ext_hi",I)]);return{lo:K,hi:Y,extLo:te,extHi:Q}}const[oe,pe]=yield Promise.all([$("conv",T,"main",I),$("conv_ext",T,"main_ext",I)]);return{main:oe,ext:pe}}));if(l){for(const T of[U,fe,H,V,Se,X]){if(c!=null&&c())return null;yield T()}return null}const[he,ze,ee,D,N,q]=yield Promise.all([U(),V(),fe(),H(),X(),Se()]);return{pInit:he,pMomFin:ee.pMomFin,pPrepW:ee.pPrepW,pNorm:D.pNorm,pNormHalo:D.pNormHalo,pCls:N,pConv0:ze,pConv:q}})}function Is(e,t,n,s,o){n.fill(0);const i=o&&e[0]===0&&e[e.length-1]===0;let r=0,a=0;if(!i){if(s)for(let f=0;f<z;f++){const l=f*z*pn;for(let c=0;c<z;c++){let g=l+c*pn+32;for(let d=0;d<z;d++,a++,g++){const u=e[a];t[g]=u===0?0:cs(u)}}}else for(let f=0;f<z;f++){const l=f*z*pn;for(let c=0;c<z;c++){const g=f*z*z+c*z;t.set(e.subarray(g,g+z),l+c*pn+32)}}return{hasBgSkip:!1}}for(let f=0;f<z;f++){const l=f*z*pn;for(let c=0;c<z;c++){let g=!1,d=l+c*pn+32;for(let u=0;u<z;u++,a++,d++){const p=e[a];p!==0?(t[d]=s?cs(p):p,g=!0):t[d]=0}g&&(n[f*z+c]=1,r++)}}return r===0||r>=6e4?{hasBgSkip:!1}:{hasBgSkip:!0}}function Ln(e,t){const n=new Uint8Array(z*z);for(let s=0;s<z;s++){const o=s*z,i=s-t,r=s+t;for(let a=0;a<z;a++){if(!e[o+a])continue;const f=a-t,l=a+t;if(i>=0){const c=i*z;f>=0&&(n[c+f]=1),n[c+a]=1,l<z&&(n[c+l]=1)}if(f>=0&&(n[o+f]=1),n[o+a]=1,l<z&&(n[o+l]=1),r>=0&&r<z){const c=r*z;f>=0&&(n[c+f]=1),n[c+a]=1,l<z&&(n[c+l]=1)}}}return n}function Dr(e,t){const n=new Uint8Array(z*z),s=new Uint8Array(z*z),o=new Int32Array(z+1);for(let i=0;i<z;i++){const r=i*z;for(let a=0;a<z;a++)o[a+1]=o[a]+e[r+a];for(let a=0;a<z;a++)o[Math.min(z-1,a+t)+1]-o[Math.max(0,a-t)]>0&&(n[r+a]=1)}for(let i=0;i<z;i++){for(let r=0;r<z;r++)o[r+1]=o[r]+n[r*z+i];for(let r=0;r<z;r++)o[Math.min(z-1,r+t)+1]-o[Math.max(0,r-t)]>0&&(s[r*z+i]=1)}return s}function Qn(e){const t=new Uint8Array(Qe);for(let n=0;n<z;n++){const s=n*z,o=n*64;for(let i=0;i<64;i++){const r=s+(i<<2);e[r]|e[r+1]|e[r+2]|e[r+3]&&(t[o+i]=1)}}return t}function Rn(e){const t=new Uint8Array(z*z);for(let n=0;n<z;n++){const s=n*z,o=n*64;for(let i=0;i<64;i++)if(e[o+i]){const r=s+(i<<2);t[r]=1,t[r+1]=1,t[r+2]=1,t[r+3]=1}}return t}function Gn(e){let t=0;for(let o=0;o<Qe;o++)t+=e[o];const n=new Uint32Array(t);let s=0;for(let o=0;o<z;o++){const i=o*64;for(let r=0;r<64;r++)e[i+r]&&(n[s++]=o<<8|r)}return n}function fn(e){let t=0;for(let n=0;n<e.length;n++)t+=e[n];return t}function Ts(e){const t=new Uint8Array(Qe);if(e===1024)for(let n=0;n<32;n++)for(let s=0;s<32;s++){const o=n*8+(n*3+s*5&7),i=s*2+(n+s&1);t[o*64+i]=1}else if(e===512)for(let n=0;n<32;n++)for(let s=0;s<16;s++){const o=n*8+(n*3+s*5&7),i=s*4+(n+s*3&3);t[o*64+i]=1}else for(let n=0;n<16;n++)for(let s=0;s<16;s++){const o=n*16+(n*7+s*3&15),i=s*4+(n+s*3&3);t[o*64+i]=1}return t}function vo(e,t,n,s){const o=n.length,i=()=>({isFull:!0,mode:"full",writtenMask:null,computedMask:null,mainStrips:null,extStrips:null,nMomExt:0,normStrips:null,haloRows:null,bgStrip:null,extWeight:0});if(!s||!t.hasBgSkip)return{clsSkipped:!1,clsStrips:null,layers:Array.from({length:o},i)};const r=Qn(Dr(e,3)),a=fn(r)<15800,f=a?Gn(r):null,l=new Array(o);let c=null;for(let _=0;_<o;_++){const h=n[_],v=Ln(_===0?e:c,h);if(_>0)for(let b=0;b<z;b++){const k=b<h||b>=z-h,B=b*z;for(let $=0;$<z;$++)(k||$<h||$>=z-h)&&(v[B+$]=1)}c=v;const S=new Uint8Array(Qe);for(let b=0;b<z;b++){const k=b*z,B=b*64;for(let $=0;$<64;$++){const w=k+($<<2);v[w]|v[w+1]|v[w+2]|v[w+3]||(S[B+$]=1)}}l[_]=S}const g=new Array(o);g[o-1]=r;for(let _=o-2;_>=0;_--)g[_]=Qn(Ln(Rn(g[_+1]),n[_+1]));const d=a&&o>=4&&n[o-1]<=2&&n[o-2]<=4&&n[o-3]<=6,u=Math.max(1,o-3),p=new Array(o).fill(null),m=new Array(o).fill(null),x=new Array(o).fill(null);if(d){const h=(Qe-fn(g[o-1]))/Qe>=.52?256:512,v=1024,S=Ts(h),b=Ts(v),k=g[o-1],B=new Uint8Array(Qe);let $=0;for(let w=0;w<Qe;w++)S[w]&&!k[w]&&(B[w]=1,$++);if($>0&&$<=Tn&&fn(k)+$<=15360){p[o-1]=B,m[o-1]=new Uint8Array(Qe),x[o-1]=S;for(let w=o-2;w>=u;w--){const G=new Uint8Array(Qe),M=g[w+1],C=p[w+1];for(let L=0;L<Qe;L++)G[L]=M[L]|C[L];const I=Qn(Ln(Rn(G),n[w+1])),E=new Uint8Array(Qe),P=g[w];for(let L=0;L<Qe;L++)I[L]&&!P[L]&&(E[L]=1);const j=w===u?b:S,R=new Uint8Array(Qe);let ie=0,se=0;for(let L=0;L<Qe;L++)(E[L]||j[L])&&!P[L]&&(R[L]=1,ie++,j[L]&&se++);if(se===0||ie>Tn||fn(P)+ie>15360){const L=w+1,U=g[L],V=m[L],fe=new Uint8Array(Qe);let H=0;for(let X=0;X<Qe;X++)(V[X]||b[X])&&!U[X]&&(fe[X]=1,H++);H<=Tn&&fn(U)+H<=15360&&(p[L]=fe,x[L]=b);break}m[w]=E,p[w]=R,x[w]=j}}}const A=new Array(o);for(let _=0;_<o;_++){const h=fn(l[_]),v=Qe-h,S=p[_]!==null,b=S?fn(g[_])+fn(p[_]):1/0;if(h>=512&&v<=b){const k=new Uint8Array(Qe);let B=-1;for(let M=0;M<Qe;M++)l[_][M]?B<0&&(B=M):k[M]=1;const $=k.slice();$[B]=1;const w={z:B>>>6,yWg:B&63,packed:B>>>6<<8|B&63},G=Gn(k);A[_]={isFull:!1,mode:"rpure",writtenMask:k,computedMask:$,mainStrips:G,extStrips:_===0?null:new Uint32Array([w.packed]),nMomExt:_===0?0:1,normStrips:G,haloRows:null,bgStrip:w,extWeight:h}}else if(S&&b<=15360){const k=g[_],B=p[_],$=m[_],w=x[_],G=Gn(k),M=[],C=[];for(let R=0;R<z;R++){const ie=R*64;for(let se=0;se<64;se++){const L=ie+se;if(!B[L])continue;const U=R<<8|se;w[L]?M.push(U):C.push(U)}}const I=M.length;if(I===0){A[_]=i();continue}const E=new Uint32Array(M.length+C.length);E.set(M,0),E.set(C,M.length);const P=new Uint8Array(Qe),j=new Uint8Array(Qe);for(let R=0;R<Qe;R++)P[R]=k[R]|$[R],j[R]=k[R]|B[R];A[_]={isFull:!1,mode:"bwd",writtenMask:P,computedMask:j,mainStrips:G,extStrips:E,nMomExt:I,normStrips:_+1<o?Gn(P):null,haloRows:null,bgStrip:null,extWeight:(Qe-G.length)/I}}else A[_]=i()}for(let _=o-2;_>=0;_--)A[_].mode==="bwd"&&A[_+1].mode!=="bwd"&&(A[_]=i());for(let _=0;_<o-1;_++){const h=A[_];if(h.mode!=="rpure")continue;const v=A[_+1],S=v.isFull?new Uint8Array(z*z).fill(1):Ln(Rn(v.computedMask),n[_+1]),b=Rn(h.writtenMask),k=[];for(let B=0;B<z;B++){const $=B*z;for(let w=0;w<z;w++)S[$+w]&&!b[$+w]&&k.push(B<<8|w)}k.length>0&&(h.haloRows=new Uint32Array(k))}return{clsSkipped:a,clsStrips:f,layers:A}}function Vr(e,t){const n=t.chan,s=t.cs,o=s/4,i=t.nclass,r=Math.ceil(i/4),{convs:a,affines:f,classifier:l}=e,c=a.length,g=27*o,d=9*s*3*o,u=s*r,p=(g+(c-1)*d+u)*4,m=new Float32Array(p),x=4*s,A=c*x,_=new Float32Array(A+r*4),h=(b,k,B)=>{if(t.norm!=="gn"||k>=n)return 1;const $=a[b],w=B*27,G=k*w;let M=0;for(let C=0;C<w;C++)M+=Math.abs($.w[G+C]);return Math.max(M/16,1e-6)};for(let b=0;b<a[0].outC;b++){const k=h(0,b,a[0].inC),B=1/k;for(let $=0;$<27;$++)m[$*s+b]=a[0].w[b*27+$]*B;_[2*s+b]=t.eps/(k*k),a[0].bias&&(_[3*s+b]=a[0].bias[b])}for(let b=a[0].outC;b<s;b++)_[2*s+b]=t.eps;for(let b=1;b<c;b++){const k=a[b],B=(g+(b-1)*d)*4,$=b*x;for(let w=0;w<k.outC;w++){const G=h(b,w,k.inC),M=1/G,C=w>>>2,I=w&3;for(let E=0;E<9;E++)for(let P=0;P<k.inC;P++)for(let j=0;j<3;j++){const R=E*3+j,ie=B+(((E*s+P)*3+j)*o+C)*4+I;m[ie]=k.w[(w*k.inC+P)*27+R]*M}_[$+2*s+w]=t.eps/(G*G),k.bias&&(_[$+3*s+w]=k.bias[w])}for(let w=k.outC;w<s;w++)_[$+2*s+w]=t.eps}for(let b=0;b<c;b++){const k=b*x,B=f[b];for(let $=0;$<n;$++)t.norm==="gn"?(_[k+$]=B!=null&&B.scale?B.scale[$]:1,_[k+s+$]=B!=null&&B.bias?B.bias[$]:0):(_[k+$]=1,_[k+s+$]=0)}const v=g+(c-1)*d,S=v*4;for(let b=0;b<n;b++)for(let k=0;k<i;k++)m[S+b*r*4+k]=l.w[k*l.inC+b];for(let b=0;b<r*4;b++)_[A+b]=b<i?l.bias?l.bias[b]:0:-1e30;return{wF32:m,wF16:Rr(m),qmetaF32:_,w0Vec4s:g,hiddenVec4PerLayer:d,clsVec4Off:v,clsBiasOff:A,metaStride:x,clsK4:r}}function An(e){if(e==="gelu_tanh")return`fn act(x : f32) -> f32 {
  let u = clamp(0.7978845608028654 * (x + 0.044715 * x * x * x), -9.0, 9.0);
  return 0.5 * x * (1.0 + tanh(u));
}`;if(e==="relu")return"fn act(x : f32) -> f32 { return max(x, 0.0); }";if(e==="elu")return"fn act(x : f32) -> f32 { return select(exp(clamp(x, -20.0, 0.0)) - 1.0, x, x >= 0.0); }";throw new Error(`meshnet_fast_v4: unsupported activation '${e}'`)}function yo(e){return e==="gelu_tanh"?{uZeroInt:7,uZeroFloat:7/255,uZeroWord:117901063,sterbenzSub:"1.02734375h",zeroBin:7}:e==="relu"?{uZeroInt:0,uZeroFloat:0,uZeroWord:0,sterbenzSub:"1.0h",zeroBin:0}:{uZeroInt:32,uZeroFloat:32/255,uZeroWord:538976288,sterbenzSub:"1.125h",zeroBin:32}}function xo({chan:e,clsK4:t,nclass:n,V4:s,suf:o,readBiasStmt:i,biasExpr:r,probCfg:a}){const f=`    var acc0 = ${s}(0.0${o});
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
${f}
${bt(4,d=>`    let l${d} = vec4<f32>(acc${d}) + vec4<f32>(${r(d)});
    let m${d} = l${d} > best_v;
    best_v = select(best_v, l${d}, m${d});
    best_k = select(best_k, vec4<u32>(k_base + ${d}u), m${d});
`)}  }

  labels8[row_idx * ${$t}u + x4] = best_k.x | (best_k.y << 8u) | (best_k.z << 16u) | (best_k.w << 24u);`;const l=`f32(${(1/Math.max(a.temperature,1e-6)).toExponential(8)})`,c=`f32(${(1/Math.max(a.supportTemperature,1e-6)).toExponential(8)})`,g=a.temperature===a.supportTemperature;return`  var max_v = vec4<f32>(-1.0e29);
  for (var k4 : u32 = 0u; k4 < ${t}u; k4 = k4 + 1u) {
${f}
${bt(4,d=>`    if (k_base + ${d}u < ${n}u) {
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
${bt(4,d=>`    let k${d} = k_base + ${d}u;
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
  let vox_base = row_idx * ${z}u + x4 * 4u;
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
  }`}function $o({device:e,hasF16:t,nvox:n,outBufBytes:s,inpBuf:o,act8_0:i,labels8Buf:r,readbackBuf:a,pInit:f,bgInit:l,pCls:c,bgCls:g,clsUbo:d,packed:u,modelEntry:p,probCfg:m,canGpuProb:x,probSlots:A,ownedBuffers:_,mkBuf:h}){let v=!1,S=!1,b=!1,k=!1;const B=new Uint8Array(z*z);let $=null,w=null,G=null,M=null;const C=(U,V)=>e.createBindGroup({layout:U,entries:V.map((fe,H)=>({binding:H,resource:fe&&fe.buffer?fe:{buffer:fe}}))});function I(){if(!$){const U=t?"prep_in_u8_f16":"prep_in_u8_f32";$=Ae(null,null,function*(){const{bgl:V,pipe:fe}=yield an(e,U,()=>fs(!0,t),"main",["read-only-storage","storage","uniform"]);if(k)return null;const H=h(256*4,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST),X=new Float32Array(256),Se=C(V,[{buffer:r,offset:0,size:n},o,H]);return{pipe:fe,ubo:H,lutF32:X,bg:Se}}).catch(V=>{throw $=null,V})}return $}function E(){if(!w){const U=t?"prep_in_f32_f16":"prep_in_f32_f32";w=Ae(null,null,function*(){const{bgl:V,pipe:fe}=yield an(e,U,()=>fs(!1,t),"main",["read-only-storage","storage","uniform"]);if(k)return null;const H=h(16,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST),X=new Float32Array(4),Se=s>=n*4?C(V,[{buffer:r,offset:0,size:n*4},o,H]):null,he=i.size>=n*4?C(V,[{buffer:i,offset:0,size:n*4},o,H]):null;return{pipe:fe,ubo:H,f32Tmp:X,bgLabels:Se,bgAct0:he}}).catch(V=>{throw w=null,V})}return w}function P(){return G||(G=Ae(null,null,function*(){const{bgl:U,pipe:V}=yield an(e,"transpose_u8_v4",_o,"main",["read-only-storage","storage"]);if(k)return null;const fe=C(U,[{buffer:r,offset:0,size:n},{buffer:o,offset:0,size:n}]);return{pipe:V,bg:fe}}).catch(U=>{throw G=null,U})),G}function j(){return M||(M=Ae(null,null,function*(){const[U,V,fe,H]=yield Promise.all([an(e,"prob_unpack_two",Nr,"main",["read-only-storage","storage","storage"]),an(e,"prob_blur_axis",Gs,"blur_axis",["read-only-storage","storage","read-only-storage","uniform"]),an(e,"prob_blur_z_gate",Gs,"blur_z_gate",["read-only-storage","storage","read-only-storage","uniform"]),an(e,"transpose_f32",Or,"main",["read-only-storage","storage"])]);if(k)return null;const X=GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST,Se=144,he=h(Se,X),ze=h(Se,X),ee=h(Se,X),D=T=>({buffer:T,offset:0,size:s}),N=C(U.bgl,[D(A.pass0HoldBuf),D(A.y0),D(A.y1)]),q=C(U.bgl,[D(r),D(A.b),D(A.sup)]),re=[A.y0,A.y1,A.b].map(T=>({buf:T,bgBlurX:C(V.bgl,[D(T),D(r),D(A.sup),he]),bgBlurY:C(V.bgl,[D(r),D(T),D(A.sup),ze]),bgBlurZ:C(fe.bgl,[D(T),D(r),D(A.sup),ee]),bgTranspose:C(H.bgl,[D(r),D(T)])}));return{pUnpack:U.pipe,pBlurAxis:V.pipe,pBlurZGate:fe.pipe,pTransposeF32:H.pipe,bgUnpack0:N,bgUnpack1:q,tissues:re,uboX:he,uboY:ze,uboZ:ee,uboScratch:new ArrayBuffer(Se),lastBlurKey:null}}).catch(U=>{throw M=null,U})),M}function R(){m?x&&j().catch(()=>{}):(I().catch(()=>{}),P().catch(()=>{}))}function ie(){k=!0}function se(he){return Ae(this,arguments,function*({volume:U,ioOpts:V,useCone:fe,padInputHost:H,headRowHost:X,hasF16Flag:Se}){var ee;if(V!=null&&V.gpuNativeInput){const D=(ee=V.normOffset)!=null?ee:0,N=V.normRange||1,q=U instanceof Uint8Array||U instanceof Uint8ClampedArray,re=s>=n*4||i.size>=n*4;if(q){const K=Es(U,X,B,D,fe),Y=yield I();for(let te=0;te<256;te++)Y.lutF32[te]=te===D?0:(te-D)/N;return e.queue.writeBuffer(Y.ubo,0,Y.lutF32),e.queue.writeBuffer(r,0,U,0,n),{info:K,runPrePasses(te,Q){(!S||b)&&(te.clearBuffer(o),S=!0,b=!1);const ve=te.beginComputePass();if(ve.setPipeline(Y.pipe),ve.setBindGroup(0,Y.bg),ve.dispatchWorkgroups(8,z,8),ve.end(),Q.push("preprocess"),v){const ce=te.beginComputePass();ce.setPipeline(f.pipe),ce.setBindGroup(0,l),ce.dispatchWorkgroups(1,z,z),ce.end(),Q.push("preprocess"),v=!1}}}}if(re){const K=Es(U,X,B,D,fe),Y=yield E(),te=!(s>=n*4),Q=te?i:r,ve=te?Y.bgAct0:Y.bgLabels,ce=U instanceof Float32Array?U:Float32Array.from(U);return Y.f32Tmp[0]=D,Y.f32Tmp[1]=N,Y.f32Tmp[2]=0,Y.f32Tmp[3]=0,e.queue.writeBuffer(Y.ubo,0,Y.f32Tmp),e.queue.writeBuffer(Q,0,ce,0,n),{info:K,runPrePasses(ke,Ee){(!S||b)&&(ke.clearBuffer(o),S=!0,b=!1);const qe=ke.beginComputePass();if(qe.setPipeline(Y.pipe),qe.setBindGroup(0,ve),qe.dispatchWorkgroups(8,z,8),qe.end(),Ee.push("preprocess"),v||te){const Ye=ke.beginComputePass();Ye.setPipeline(f.pipe),Ye.setBindGroup(0,l),Ye.dispatchWorkgroups(1,z,z),Ye.end(),Ee.push("preprocess"),v=!1}}}}const T=new Float32Array(n);for(let K=0;K<n;K++){const Y=U[K];T[K]=Y===D?0:(Y-D)/N}const oe=kn(T,[z,z,z],[2,1,0]),pe=Is(oe,H,X,Se,fe);return e.queue.writeBuffer(o,0,H),S=!0,b=!1,{info:pe,runPrePasses(K,Y){if(v){const te=K.beginComputePass();te.setPipeline(f.pipe),te.setBindGroup(0,l),te.dispatchWorkgroups(1,z,z),te.end(),Y.push("preprocess"),v=!1}}}}const ze=Is(U,H,X,Se,fe);return e.queue.writeBuffer(o,0,H),S=!0,b=!1,{info:ze,runPrePasses(D,N){if(v){const q=D.beginComputePass();q.setPipeline(f.pipe),q.setBindGroup(0,l),q.dispatchWorkgroups(1,z,z),q.end(),N.push("preprocess"),v=!1}}}})}function L(ze){return Ae(this,arguments,function*({enc:U,schedule:V,passCategories:fe,u4Tmp:H,ioOpts:X,paced:Se=!1,onProgress:he=null}){const ee=V.clsSkipped?V.clsStrips.length:z;if(!m){H[0]=u.clsVec4Off,H[1]=u.clsBiasOff,H[2]=V.clsSkipped?0:1,H[3]=0,e.queue.writeBuffer(d,0,H);{const ce=U.beginComputePass();ce.setPipeline(c.pipe),ce.setBindGroup(0,g),ee>0&&ce.dispatchWorkgroups(1,V.clsSkipped?1:64,ee),ce.end(),fe.push("classify")}if(X!=null&&X.gpuNativeOutput){const ce=yield P(),ke=U.beginComputePass();ke.setPipeline(ce.pipe),ke.setBindGroup(0,ce.bg),ke.dispatchWorkgroups(8,z,8),ke.end(),fe.push("postprocess"),b=!0,U.copyBufferToBuffer(o,0,a,0,n),e.queue.submit([U.finish()]),yield a.mapAsync(GPUMapMode.READ);const Ee=new Uint8Array(a.getMappedRange()).slice();return a.unmap(),Se&&he&&he(1,""),[Ee]}U.copyBufferToBuffer(r,0,a,0,s),e.queue.submit([U.finish()]),yield a.mapAsync(GPUMapMode.READ);const Q=new Uint8Array(a.getMappedRange()),ve=new Float32Array(n);for(let ce=0;ce<n;ce++)ve[ce]=Q[ce];return a.unmap(),Se&&he&&he(1,""),[ve]}if(x){const Q=yield j();H[0]=u.clsVec4Off,H[1]=u.clsBiasOff,H[2]=V.clsSkipped?0:1,H[3]=0,e.queue.writeBuffer(d,0,H),H[3]=1,e.queue.writeBuffer(A.clsUbo1,0,H);{const He=U.beginComputePass();He.setPipeline(c.pipe),He.setBindGroup(0,g),ee>0&&He.dispatchWorkgroups(1,V.clsSkipped?1:64,ee),He.end(),fe.push("classify")}U.copyBufferToBuffer(r,0,A.pass0HoldBuf,0,s),V.clsSkipped&&U.clearBuffer(r,0,s);{const He=U.beginComputePass();He.setPipeline(c.pipe),He.setBindGroup(0,A.bgCls1),ee>0&&He.dispatchWorkgroups(1,V.clsSkipped?1:64,ee),He.end(),fe.push("classify")}v=!0;const ve=`${m.sigma}|${m.supportPower}`,ce=m.sigma>0,ke=ce?Math.max(1,Math.round(3*m.sigma)):0;if(Q.lastBlurKey!==ve){const He=new Uint32Array(Q.uboScratch),je=new Float32Array(Q.uboScratch);je.fill(0);let dt=1;if(ce){dt=0;for(let pt=-ke;pt<=ke;pt++){const Ct=Math.exp(-.5*pt*pt/(m.sigma*m.sigma));je[4+pt+ke]=Ct,dt+=Ct}}else je[4]=1;He[1]=ke,je[2]=dt,He[0]=0,je[3]=1,e.queue.writeBuffer(Q.uboX,0,Q.uboScratch),He[0]=1,e.queue.writeBuffer(Q.uboY,0,Q.uboScratch),He[0]=2,je[3]=m.supportPower,e.queue.writeBuffer(Q.uboZ,0,Q.uboScratch),Q.lastBlurKey=ve}{const He=U.beginComputePass();He.setPipeline(Q.pUnpack),He.setBindGroup(0,Q.bgUnpack0),He.dispatchWorkgroups(256,256,1),He.end(),fe.push("postprocess");const je=U.beginComputePass();je.setPipeline(Q.pUnpack),je.setBindGroup(0,Q.bgUnpack1),je.dispatchWorkgroups(256,256,1),je.end(),fe.push("postprocess")}Se&&(e.queue.submit([U.finish()]),yield e.queue.onSubmittedWorkDone(),he&&he(.992,""),yield uo(),U=e.createCommandEncoder());const Ee=!!(X!=null&&X.gpuNativeOutput);for(let He=0;He<3;He++){const je=Q.tissues[He];if(ce){const pt=U.beginComputePass();pt.setPipeline(Q.pBlurAxis),pt.setBindGroup(0,je.bgBlurX),pt.dispatchWorkgroups(4,64,z),pt.end(),fe.push("postprocess");const Ct=U.beginComputePass();Ct.setPipeline(Q.pBlurAxis),Ct.setBindGroup(0,je.bgBlurY),Ct.dispatchWorkgroups(4,64,z),Ct.end(),fe.push("postprocess")}const dt=U.beginComputePass();if(dt.setPipeline(Q.pBlurZGate),dt.setBindGroup(0,je.bgBlurZ),dt.dispatchWorkgroups(4,64,z),dt.end(),fe.push("postprocess"),Ee){const pt=U.beginComputePass();pt.setPipeline(Q.pTransposeF32),pt.setBindGroup(0,je.bgTranspose),pt.dispatchWorkgroups(8,z,8),pt.end(),fe.push("postprocess")}else He<2&&U.copyBufferToBuffer(r,0,je.buf,0,s)}const qe=Ee?[A.y0,A.y1,A.b]:[A.y0,A.y1,r];U.copyBufferToBuffer(qe[0],0,a,0,s),e.queue.submit([U.finish()]),yield a.mapAsync(GPUMapMode.READ);const Ye=new Float32Array(a.getMappedRange()).slice();a.unmap();const Ge=He=>Ae(null,null,function*(){const je=e.createCommandEncoder();je.copyBufferToBuffer(He,0,a,0,s),e.queue.submit([je.finish()]),yield a.mapAsync(GPUMapMode.READ);const dt=new Float32Array(a.getMappedRange()).slice();return a.unmap(),dt}),Ie=yield Ge(qe[1]),Je=yield Ge(qe[2]);return Se&&he&&he(1,""),[Ye,Ie,Je]}H[0]=u.clsVec4Off,H[1]=u.clsBiasOff,H[2]=V.clsSkipped?0:1,H[3]=0,e.queue.writeBuffer(d,0,H);{const Q=U.beginComputePass();Q.setPipeline(c.pipe),Q.setBindGroup(0,g),ee>0&&Q.dispatchWorkgroups(1,V.clsSkipped?1:64,ee),Q.end(),fe.push("classify"),U.copyBufferToBuffer(r,0,a,0,s)}e.queue.submit([U.finish()]),yield a.mapAsync(GPUMapMode.READ);const D=1/65535,N=new Uint16Array(a.getMappedRange()),q=new Float32Array(n),re=new Float32Array(n);for(let Q=0;Q<n;Q++)q[Q]=N[Q*2]*D,re[Q]=N[Q*2+1]*D;a.unmap(),H[3]=1,e.queue.writeBuffer(d,0,H);const T=e.createCommandEncoder();V.clsSkipped&&T.clearBuffer(r,0,s);const oe=T.beginComputePass();oe.setPipeline(c.pipe),oe.setBindGroup(0,g),ee>0&&oe.dispatchWorkgroups(1,V.clsSkipped?1:64,ee),oe.end(),fe.push("classify"),T.copyBufferToBuffer(r,0,a,0,s),e.queue.submit([T.finish()]),yield a.mapAsync(GPUMapMode.READ);const pe=new Uint16Array(a.getMappedRange()),K=new Float32Array(n),Y=new Float32Array(n);for(let Q=0;Q<n;Q++)K[Q]=pe[Q*2]*D,Y[Q]=pe[Q*2+1]*D;a.unmap();const te=Lr([q,re,K],Y,[z,z,z],p);return X!=null&&X.gpuNativeOutput?te.map(Q=>kn(Q,[z,z,z],[2,1,0])):te})}return{prepareInput:se,finishAndReadback:L,warmupIoPipelines:R,dispose:ie}}function So(e){const{cs:t,chan:n,nclass:s,clsK4:o,dilations:i,activation:r,norm:a,hasF16:f,hasSubgroups32:l,splitHalves:c,probCfg:g,chunkableStd:d=!1}=e,u=t/4,p=c?t/2:t,m=p*ht,x=p*$t,A=9*t*3*u,_=A,h=A+u,v=f&&u%2===0&&h*8<=65536,S=yo(r),b=f?`enable f16;
`:"",k=l?`enable subgroups;
`:"",B=f?"f16":"f32",$=f?"h":"f",w=`vec4<${B}>`,G=f?256:255,M=se=>{const L=se?".xzyw":"",U=(X,Se,he)=>c&&Se>=p?`y8_1[${X} + ${(Se-p)*$t}u] = ${he};`:`y8_0[${X} + ${Se*$t}u] = ${he};`;if(f&&l)return{decls:"",localHeader:"",emit:({accVar:X,cStart:Se,cEnd:he,hrExpr:ze,yRowExpr:ee,momMode:D,writeY8Expr:N="true"})=>bt(he-Se,q=>{const re=Se+q,T=D==="ext_and_main"?`mom_ext[(${ze}) * ${t}u + ${re}u] = mv;
      mom_main[(row_idx * 2u + sg) * ${t}u + ${re}u] = mv;`:D==="ext_only"?`mom_ext[(${ze}) * ${t}u + ${re}u] = mv;`:`mom_main[(${ze}) * ${t}u + ${re}u] = mv;`;return a==="none"?`  {
    let f = vec4<f32>(${X}.v_${q}${L});
    let lmn = subgroupMin(min(min(f.x, f.y), min(f.z, f.w)));
    let lmx = subgroupMax(max(max(f.x, f.y), max(f.z, f.w)));
    let sp = lmx - lmn;
    let inv = select(0.0, 1.0 / sp, sp > 1e-7);
    if (${N}) {
      ${U(ee,re,"pack4x8unorm((f - vec4<f32>(lmn)) * inv)")}
    }
    if (slane == 0u) {
      let mv = vec4<f32>(0.0, 0.0, lmn, sp);
      ${T}
    }
  }
`:`  {
    let f = vec4<f32>(${X}.v_${q}${L});
    let ls = subgroupAdd(f.x + f.y + f.z + f.w);
    let lq = subgroupAdd(dot(f, f));
    let lmn = subgroupMin(min(min(f.x, f.y), min(f.z, f.w)));
    let lmx = subgroupMax(max(max(f.x, f.y), max(f.z, f.w)));
    let sp = lmx - lmn;
    let inv = select(0.0, 1.0 / sp, sp > 1e-7);
    if (${N}) {
      ${U(ee,re,"pack4x8unorm((f - vec4<f32>(lmn)) * inv)")}
    }
    if (slane == 0u) {
      let mv = vec4<f32>(ls, lq, lmn, sp);
      ${T}
    }
  }
`})};const V=`    let c_out = c_base + slane;
    if (mom_mode == 0u) {
      mom_main[main_off + c_out] = mv;
    } else if (mom_mode == 1u) {
      mom_ext[ext_off + c_out] = mv;
      mom_main[main_off + c_out] = mv;
    } else {
      mom_ext[ext_off + c_out] = mv;
    }`;if(a==="none"&&f){const X=bt(31,he=>`    {
      let m = sh_mm[rb + ${he+1}u];
      rmn = min(rmn, m.x);
      rmx = max(rmx, m.y);
    }
`);return{decls:`var<workgroup> sh_mm  : array<vec2<f16>, 1024>;
var<workgroup> sh_res : array<vec2<f32>, 32>;
fn vec_mm16(a : vec4<f16>) -> vec2<f16> {
  return vec2<f16>(min(min(a.x, a.y), min(a.z, a.w)), max(max(a.x, a.y), max(a.z, a.w)));
}
fn reduce_pack4(
  a0 : ${w}, a1 : ${w}, a2 : ${w}, a3 : ${w},
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
${X}    let fmn = f32(rmn);
    let sp = f32(rmx) - fmn;
    sh_res[h * 4u + slane] = vec2<f32>(fmn, select(0.0, 1.0 / sp, sp > 1e-7));
    let mv = vec4<f32>(0.0, 0.0, fmn, sp);
${V}
  }
  workgroupBarrier();
  let f0 = vec4<f32>(a0${L});
  let f1 = vec4<f32>(a1${L});
  let f2 = vec4<f32>(a2${L});
  let f3 = vec4<f32>(a3${L});
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
`,emit:({accVar:he,cStart:ze,cEnd:ee,hrExpr:D,yRowExpr:N,momMode:q,writeY8Expr:re="true"})=>{const T=q==="ext_and_main"?"1u":q==="ext_only"?"2u":"0u",oe=q==="main"?"0u":`(${D}) * ${t}u`,pe=q==="ext_only"?"0u":`(row_idx * 2u + sg) * ${t}u`;let K=`  let ep_ext_off = ${oe};
  let ep_main_off = ${pe};
`;for(let Y=0;Y<ee-ze;Y+=4){const te=ze+Y;K+=`  {
    let qw = reduce_pack4(${he}.v_${Y}, ${he}.v_${Y+1}, ${he}.v_${Y+2}, ${he}.v_${Y+3}, h, slane, ${te}u, ep_ext_off, ep_main_off, ${T});
    if (${re}) {
      ${U(N,te,"qw.x")}
      ${U(N,te+1,"qw.y")}
      ${U(N,te+2,"qw.z")}
      ${U(N,te+3,"qw.w")}
    }
  }
`}return K}}}if(a==="none"){const X=bt(32,he=>`    {
      let m = sh_mm[rb + ${he}u];
      rmn = min(rmn, m.x);
      rmx = max(rmx, m.y);
    }
`);return{decls:`var<workgroup> sh_mm  : array<vec2<f32>, 1024>;
var<workgroup> sh_res : array<vec2<f32>, 32>;
fn vec_mm(f : vec4<f32>) -> vec2<f32> {
  return vec2<f32>(min(min(f.x, f.y), min(f.z, f.w)), max(max(f.x, f.y), max(f.z, f.w)));
}
fn reduce_pack4(
  a0 : ${w}, a1 : ${w}, a2 : ${w}, a3 : ${w},
  h : u32, slane : u32, c_base : u32, ext_off : u32, main_off : u32, mom_mode : u32
) -> vec4<u32> {
  let f0 = vec4<f32>(a0${L});
  let f1 = vec4<f32>(a1${L});
  let f2 = vec4<f32>(a2${L});
  let f3 = vec4<f32>(a3${L});
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
${X}    let sp = rmx - rmn;
    sh_res[h * 4u + slane] = vec2<f32>(rmn, select(0.0, 1.0 / sp, sp > 1e-7));
    let mv = vec4<f32>(0.0, 0.0, rmn, sp);
${V}
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
`,emit:({accVar:he,cStart:ze,cEnd:ee,hrExpr:D,yRowExpr:N,momMode:q,writeY8Expr:re="true"})=>{const T=q==="ext_and_main"?"1u":q==="ext_only"?"2u":"0u",oe=q==="main"?"0u":`(${D}) * ${t}u`,pe=q==="ext_only"?"0u":`(row_idx * 2u + sg) * ${t}u`;let K=`  let ep_ext_off = ${oe};
  let ep_main_off = ${pe};
`;for(let Y=0;Y<ee-ze;Y+=4){const te=ze+Y;K+=`  {
    let qw = reduce_pack4(${he}.v_${Y}, ${he}.v_${Y+1}, ${he}.v_${Y+2}, ${he}.v_${Y+3}, h, slane, ${te}u, ep_ext_off, ep_main_off, ${T});
    if (${re}) {
      ${U(N,te,"qw.x")}
      ${U(N,te+1,"qw.y")}
      ${U(N,te+2,"qw.z")}
      ${U(N,te+3,"qw.w")}
    }
  }
`}return K}}}if(f){const X=bt(31,he=>{const ze=he+1;return`    {
      let s = sh_sq[rb + ${ze}u];
      let m = sh_mm[rb + ${ze}u];
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
  a0 : ${w}, a1 : ${w}, a2 : ${w}, a3 : ${w},
  h : u32, slane : u32, c_base : u32, ext_off : u32, main_off : u32, mom_mode : u32
) -> vec4<u32> {
  let f0 = vec4<f32>(a0${L});
  let f1 = vec4<f32>(a1${L});
  let f2 = vec4<f32>(a2${L});
  let f3 = vec4<f32>(a3${L});
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
${X}    let fmn = f32(rmn);
    let sp = f32(rmx) - fmn;
    sh_res[h * 4u + slane] = vec2<f32>(fmn, select(0.0, 1.0 / sp, sp > 1e-7));
    let mv = vec4<f32>(rs, rq, fmn, sp);
${V}
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
`,emit:({accVar:he,cStart:ze,cEnd:ee,hrExpr:D,yRowExpr:N,momMode:q,writeY8Expr:re="true"})=>{const T=q==="ext_and_main"?"1u":q==="ext_only"?"2u":"0u",oe=q==="main"?"0u":`(${D}) * ${t}u`,pe=q==="ext_only"?"0u":`(row_idx * 2u + sg) * ${t}u`;let K=`  let ep_ext_off = ${oe};
  let ep_main_off = ${pe};
`;for(let Y=0;Y<ee-ze;Y+=4){const te=ze+Y;K+=`  {
    let qw = reduce_pack4(${he}.v_${Y}, ${he}.v_${Y+1}, ${he}.v_${Y+2}, ${he}.v_${Y+3}, h, slane, ${te}u, ep_ext_off, ep_main_off, ${T});
    if (${re}) {
      ${U(N,te,"qw.x")}
      ${U(N,te+1,"qw.y")}
      ${U(N,te+2,"qw.z")}
      ${U(N,te+3,"qw.w")}
    }
  }
`}return K}}}const fe=bt(32,X=>`    {
      let s = sh_sq[rb + ${X}u];
      let m = sh_mm[rb + ${X}u];
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
  a0 : ${w}, a1 : ${w},
  h : u32, slane : u32, c_base : u32, ext_off : u32, main_off : u32, mom_mode : u32
) -> vec2<u32> {
  let f0 = vec4<f32>(a0${L});
  let f1 = vec4<f32>(a1${L});
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
${fe}    let sp = rmx - rmn;
    sh_res[h * 2u + slane] = vec2<f32>(rmn, select(0.0, 1.0 / sp, sp > 1e-7));
    let mv = vec4<f32>(rs, rq, rmn, sp);
${V}
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
`,emit:({accVar:X,cStart:Se,cEnd:he,hrExpr:ze,yRowExpr:ee,momMode:D,writeY8Expr:N="true"})=>{const q=D==="ext_and_main"?"1u":D==="ext_only"?"2u":"0u",re=D==="main"?"0u":`(${ze}) * ${t}u`,T=D==="ext_only"?"0u":`(row_idx * 2u + sg) * ${t}u`;let oe=`  let ep_ext_off = ${re};
  let ep_main_off = ${T};
`;for(let pe=0;pe<he-Se;pe+=2){const K=Se+pe;oe+=`  {
    let qw = reduce_pack2(${X}.v_${pe}, ${X}.v_${pe+1}, h, slane, ${K}u, ep_ext_off, ep_main_off, ${q});
    if (${N}) {
      ${U(ee,K,"qw.x")}
      ${U(ee,K+1,"qw.y")}
    }
  }
`}return oe}}},C=()=>`
@group(0) @binding(0) var<storage, read_write> act0 : array<u32>;
@group(0) @binding(1) var<storage, read_write> act1 : array<u32>;
@compute @workgroup_size(${ht}, 1, 1)
fn main(@builtin(local_invocation_id) lid : vec3<u32>,
        @builtin(workgroup_id) wid : vec3<u32>) {
  let row_base = (wid.z * 256u + wid.y) * ${m}u + lid.x;
  let val = ${S.uZeroWord}u;
  for (var c : u32 = 0u; c < ${p}u; c = c + 1u) {
    let idx = row_base + c * ${ht}u;
    act0[idx] = val;
    ${c?"act1[idx] = val;":""}
  }
}`,I=i[0];return{initActWgsl:C,conv0Wgsl:()=>{const se=!f&&c,L=M(!1),U=(ze,ee)=>{const D=ze/4,N=ee/4;return bt(N-D,q=>{const re=D+q,T=re*4;return`          {
            let w0 = w16_4[wb + ${re}u];
            let w1 = w16_4[wb + ${u+re}u];
            let w2 = w16_4[wb + ${2*u+re}u];
            a_${T}     = fma(vn, ${w}(w0.x), fma(vc, ${w}(w1.x), fma(vp, ${w}(w2.x), a_${T})));
            a_${T+1} = fma(vn, ${w}(w0.y), fma(vc, ${w}(w1.y), fma(vp, ${w}(w2.y), a_${T+1})));
            a_${T+2} = fma(vn, ${w}(w0.z), fma(vc, ${w}(w1.z), fma(vp, ${w}(w2.z), a_${T+2})));
            a_${T+3} = fma(vn, ${w}(w0.w), fma(vc, ${w}(w1.w), fma(vp, ${w}(w2.w), a_${T+3})));
          }
`})},V=Math.floor(I/4),fe=I%4;let H="";fe===0?H=`
        let vn = inp_4[base - ${V}u];
        let vc = inp_4[base];
        let vp = inp_4[base + ${V}u];`:V===0&&fe===1?H=`
        let vL = inp_4[base - 1u];
        let vc = inp_4[base];
        let vR = inp_4[base + 1u];
        let vn = ${w}(vL.w, vc.xyz);
        let vp = ${w}(vc.yzw, vR.x);`:fe===1?H=`
        let vL = inp_4[base - ${V+1}u];
        let vN = inp_4[base - ${V}u];
        let vc = inp_4[base];
        let vP = inp_4[base + ${V}u];
        let vR = inp_4[base + ${V+1}u];
        let vn = ${w}(vL.w, vN.xyz);
        let vp = ${w}(vP.yzw, vR.x);`:fe===2?H=`
        let vL = inp_4[base - ${V+1}u];
        let vN = ${V===0?"inp_4[base]":`inp_4[base - ${V}u]`};
        let vc = ${V===0?"vN":"inp_4[base]"};
        let vP = ${V===0?"vN":`inp_4[base + ${V}u]`};
        let vR = inp_4[base + ${V+1}u];
        let vn = ${w}(vL.zw, vN.xy);
        let vp = ${w}(vP.zw, vR.xy);`:H=`
        let vL = inp_4[base - ${V+1}u];
        let vN = ${V===0?"inp_4[base]":`inp_4[base - ${V}u]`};
        let vc = ${V===0?"vN":"inp_4[base]"};
        let vP = ${V===0?"vN":`inp_4[base + ${V}u]`};
        let vR = inp_4[base + ${V+1}u];
        let vn = ${w}(vL.yzw, vN.x);
        let vp = ${w}(vP.w, vR.xyz);`;const X=(ze,ee,D,N)=>{const q=N-D,re=bt(q,pe=>`  v_${pe} : ${w},
`),T=bt(q,pe=>{const K=D+pe;return a==="none"?`  var a_${K} = ${w}(${B}(qmeta[${3*t+K}u]));
`:`  var a_${K} = ${w}(0.0${$});
`}),oe=Array.from({length:q},(pe,K)=>`a_${D+K}`).join(", ");return`struct ${ee} {
${re}};
fn ${ze}(y : i32, z : i32, x_pad : u32) -> ${ee} {
${T}  var tap_yz : u32 = 0u;
  for (var dz : i32 = -1; dz <= 1; dz = dz + 1) {
    let sz = z + dz * ${I};
    for (var dy : i32 = -1; dy <= 1; dy = dy + 1) {
      let sy = y + dy * ${I};
      if ((u32(sz) | u32(sy)) < 256u) {
        let base = (u32(sz) * 256u + u32(sy)) * ${ht}u + x_pad;
${H}
        let wb = tap_yz * ${3*u}u;
${U(D,N)}
      }
      tap_yz = tap_yz + 1u;
    }
  }
  return ${ee}(${oe});
}
`},Se=(ze,ee,D,N,q)=>{const re=q?`  let y = i32(p0.bg_y0 + lid.y);
  let z = i32(p0.bg_z0);`:`  var y : i32;
  var z : i32;
  if (p0.is_full != 0u) {
    y = i32(wid.y * 4u + lid.y);
    z = i32(wid.z);
  } else {
    let pk = strips0[wid.z];
    y = i32((pk & 255u) * 4u + lid.y);
    z = i32(pk >> 8u);
  }`,T=q?"lid.y * 2u + sg":"row_idx * 2u + sg";return`
@compute @workgroup_size(64, 4, 1)
fn ${ze}(@builtin(local_invocation_id) lid : vec3<u32>,
             @builtin(workgroup_id) wid : vec3<u32>) {
  let sg = lid.x >> 5u;
  let slane = lid.x & 31u;
${L.localHeader}  let x_pad = lid.x + ${Ht}u;
${re}
  let acc = ${ee}(y, z, x_pad);
  let row_idx = u32(z) * 256u + u32(y);
  let y_row_base = row_idx * ${x}u + lid.x;
${L.emit({accVar:"acc",cStart:D,cEnd:N,hrExpr:T,yRowExpr:"y_row_base",momMode:q?"ext_only":"main"})}}`},he=se?X("run_conv0_lo","Conv0AccLo",0,p)+X("run_conv0_hi","Conv0AccHi",p,t)+Se("main_lo","run_conv0_lo",0,p,!1)+Se("main_hi","run_conv0_hi",p,t,!1)+Se("main_bg_lo","run_conv0_lo",0,p,!0)+Se("main_bg_hi","run_conv0_hi",p,t,!0):X("run_conv0","Conv0Acc",0,t)+Se("main","run_conv0",0,t,!1)+Se("main_bg","run_conv0",0,t,!0);return`${b}${k}
struct Params0 {
  is_full : u32,
  bg_y0 : u32,
  bg_z0 : u32,
  pad0 : u32,
};
@group(0) @binding(0) var<storage, read> inp_4 : array<${w}>;
@group(0) @binding(1) var<storage, read_write> y8_0 : array<u32>;
@group(0) @binding(2) var<storage, read_write> y8_1 : array<u32>;
@group(0) @binding(3) var<storage, read> w16_4 : array<${w}>;
@group(0) @binding(4) var<storage, read> qmeta : array<f32>;
@group(0) @binding(5) var<storage, read_write> mom_main : array<vec4<f32>>;
@group(0) @binding(6) var<storage, read_write> mom_ext : array<vec4<f32>>;
@group(0) @binding(7) var<storage, read> strips0 : array<u32>;
@group(0) @binding(8) var<uniform> p0 : Params0;
${L.decls}${he}`},prepWgsl:()=>`${b}
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
@group(0) @binding(0) var<storage, read> w16_4 : array<${w}>;
@group(0) @binding(1) var<storage, read> qmeta : array<f32>;
@group(0) @binding(2) var<storage, read_write> mom_main : array<vec4<f32>>;
@group(0) @binding(3) var<storage, read_write> mom_ext : array<vec4<f32>>;
@group(0) @binding(4) var<storage, read_write> mom_stats : array<vec4<f32>>;
@group(0) @binding(5) var<storage, read_write> w_eff : array<${w}>;
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
    for (var hr : u32 = lid; hr < ${Un}u; hr = hr + 256u) {
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
  for (var idx : u32 = lid; idx < ${A}u; idx = idx + 256u) {
    let ic = (idx / ${3*u}u) % ${t}u;
    let qs = mom_stats[ic * 2u].z;
    w_eff[idx] = w16_4[pp.next_w_vec4_off + idx] * ${B}(qs * scale_num);
  }
  if (lid < ${u}u) {
    ${a==="none"?`
    let mb = pp.next_meta_off + ${3*t}u + lid * 4u;
    w_eff[${_}u + lid] = ${w}(${B}(qmeta[mb]), ${B}(qmeta[mb + 1u]), ${B}(qmeta[mb + 2u]), ${B}(qmeta[mb + 3u]));
    `:`
    w_eff[${_}u + lid] = ${w}(0.0${$});
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
  let x_pad = x4 + ${Ht}u;
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
  let y_base = row_idx * ${x}u + x4;
  let a_base = row_idx * ${m}u + x_pad;
  let mom_base = hr * ${t}u;

  for (var c : u32 = 0u; c < ${p}u; c = c + 1u) {
    let inv_qs = mom_stats[c * 2u].w;
    let st = mom_stats[c * 2u + 1u];
    let rm = mom_main[mom_base + c];
    let yv = unpack4x8unorm(y8_0[y_base + c * ${$t}u]) * rm.w + vec4<f32>(rm.z);
    let a = vec4<f32>(
      act(yv.x * st.x + st.y),
      act(yv.y * st.x + st.y),
      act(yv.z * st.x + st.y),
      act(yv.w * st.x + st.y)
    );
    act8_0[a_base + c * ${ht}u] = pack4x8unorm((a * inv_qs + vec4<f32>(${S.zeroBin.toFixed(1)})) * (1.0 / 255.0));
  }
  ${c?`
  for (var c : u32 = 0u; c < ${p}u; c = c + 1u) {
    let cg = ${p}u + c;
    let inv_qs = mom_stats[cg * 2u].w;
    let st = mom_stats[cg * 2u + 1u];
    let rm = mom_main[mom_base + cg];
    let yv = unpack4x8unorm(y8_1[y_base + c * ${$t}u]) * rm.w + vec4<f32>(rm.z);
    let a = vec4<f32>(
      act(yv.x * st.x + st.y),
      act(yv.y * st.x + st.y),
      act(yv.z * st.x + st.y),
      act(yv.w * st.x + st.y)
    );
    act8_1[a_base + c * ${ht}u] = pack4x8unorm((a * inv_qs + vec4<f32>(${S.zeroBin.toFixed(1)})) * (1.0 / 255.0));
  }`:""}
}

@compute @workgroup_size(64, 4, 1)
fn norm_halo_fill(@builtin(local_invocation_id) lid : vec3<u32>,
                  @builtin(workgroup_id) wid : vec3<u32>) {
  let idx = wid.y * 4u + lid.y;
  if (idx >= np.n_halo) { return; }
  let x4 = lid.x;
  let sg = x4 >> 5u;
  let x_pad = x4 + ${Ht}u;
  let y_base = np.bg_row * ${x}u + x4;
  let mom_base = sg * ${t}u;
  let dst_row = norm_aux[np.halo_off + idx];
  let a_base = dst_row * ${m}u + x_pad;

  for (var c : u32 = 0u; c < ${p}u; c = c + 1u) {
    let inv_qs = mom_stats[c * 2u].w;
    let st = mom_stats[c * 2u + 1u];
    let rm = mom_ext[mom_base + c];
    let yv = unpack4x8unorm(y8_0[y_base + c * ${$t}u]) * rm.w + vec4<f32>(rm.z);
    let a = vec4<f32>(
      act(yv.x * st.x + st.y),
      act(yv.y * st.x + st.y),
      act(yv.z * st.x + st.y),
      act(yv.w * st.x + st.y)
    );
    act8_0[a_base + c * ${ht}u] = pack4x8unorm((a * inv_qs + vec4<f32>(${S.zeroBin.toFixed(1)})) * (1.0 / 255.0));
  }
  ${c?`
  for (var c : u32 = 0u; c < ${p}u; c = c + 1u) {
    let cg = ${p}u + c;
    let inv_qs = mom_stats[cg * 2u].w;
    let st = mom_stats[cg * 2u + 1u];
    let rm = mom_ext[mom_base + cg];
    let yv = unpack4x8unorm(y8_1[y_base + c * ${$t}u]) * rm.w + vec4<f32>(rm.z);
    let a = vec4<f32>(
      act(yv.x * st.x + st.y),
      act(yv.y * st.x + st.y),
      act(yv.z * st.x + st.y),
      act(yv.w * st.x + st.y)
    );
    act8_1[a_base + c * ${ht}u] = pack4x8unorm((a * inv_qs + vec4<f32>(${S.zeroBin.toFixed(1)})) * (1.0 / 255.0));
  }`:""}
}`,convWgsl:()=>{const se=!f&&c,L=M(f),U=(ee,D)=>f?`
          let ${ee} = vec4<f16>(vec2<f16>(unpack2x16float(((${D} & 0x00FF00FFu) << 2u) | 0x3C003C00u)), vec2<f16>(unpack2x16float(((${D} >> 6u) & 0x03FC03FCu) | 0x3C003C00u))) - vec4<f16>(${S.sterbenzSub});`:`
          let ${ee} = unpack4x8unorm(${D}) - vec4<f32>(${S.uZeroFloat});`,V=ee=>`
          let uL = ${ee}[base - off0];
          let uN = ${ee}[base - off1];
          let uC = ${ee}[base];
          let uP = ${ee}[base + off1];
          let uR = ${ee}[base + off0];
          let u_neg = (uL >> sh_l) | (uN << sh_r);
          let u_pos = (uP >> sh_r) | (uR << sh_l);`+U("vn","u_neg")+U("vc","uC")+U("vp","u_pos"),fe=(ee,D)=>{const N=ee/4,q=D/4;if(v){const re=u/2,T=u;let oe="";for(let pe=N;pe<q;pe+=2){const K=pe*4,Y=pe/2;oe+=`          {
            let wp0 = w_eff_u[wbu + ${Y}u];
            let wp1 = w_eff_u[wbu + ${re+Y}u];
            let wp2 = w_eff_u[wbu + ${T+Y}u];
            let w0a = u4_lo(wp0);
            let w0b = u4_hi(wp0);
            let w1a = u4_lo(wp1);
            let w1b = u4_hi(wp1);
            let w2a = u4_lo(wp2);
            let w2b = u4_hi(wp2);
            a_${K}     = fma(vn, vec4<f16>(w0a.x), fma(vc, vec4<f16>(w1a.x), fma(vp, vec4<f16>(w2a.x), a_${K})));
            a_${K+1} = fma(vn, vec4<f16>(w0a.y), fma(vc, vec4<f16>(w1a.y), fma(vp, vec4<f16>(w2a.y), a_${K+1})));
            a_${K+2} = fma(vn, vec4<f16>(w0a.z), fma(vc, vec4<f16>(w1a.z), fma(vp, vec4<f16>(w2a.z), a_${K+2})));
            a_${K+3} = fma(vn, vec4<f16>(w0a.w), fma(vc, vec4<f16>(w1a.w), fma(vp, vec4<f16>(w2a.w), a_${K+3})));
            a_${K+4} = fma(vn, vec4<f16>(w0b.x), fma(vc, vec4<f16>(w1b.x), fma(vp, vec4<f16>(w2b.x), a_${K+4})));
            a_${K+5} = fma(vn, vec4<f16>(w0b.y), fma(vc, vec4<f16>(w1b.y), fma(vp, vec4<f16>(w2b.y), a_${K+5})));
            a_${K+6} = fma(vn, vec4<f16>(w0b.z), fma(vc, vec4<f16>(w1b.z), fma(vp, vec4<f16>(w2b.z), a_${K+6})));
            a_${K+7} = fma(vn, vec4<f16>(w0b.w), fma(vc, vec4<f16>(w1b.w), fma(vp, vec4<f16>(w2b.w), a_${K+7})));
          }
`}return oe}return bt(q-N,re=>{const T=N+re,oe=T*4;return`          {
            let w0 = w_eff[wb + ${T}u];
            let w1 = w_eff[wb + ${u+T}u];
            let w2 = w_eff[wb + ${2*u+T}u];
            a_${oe}     = fma(vn, ${w}(w0.x), fma(vc, ${w}(w1.x), fma(vp, ${w}(w2.x), a_${oe})));
            a_${oe+1} = fma(vn, ${w}(w0.y), fma(vc, ${w}(w1.y), fma(vp, ${w}(w2.y), a_${oe+1})));
            a_${oe+2} = fma(vn, ${w}(w0.z), fma(vc, ${w}(w1.z), fma(vp, ${w}(w2.z), a_${oe+2})));
            a_${oe+3} = fma(vn, ${w}(w0.w), fma(vc, ${w}(w1.w), fma(vp, ${w}(w2.w), a_${oe+3})));
          }
`})},H=(ee,D,N,q)=>{const re=q-N,T=bt(re,Q=>`  v_${Q} : ${w},
`),oe=bt(re,Q=>{const ve=N+Q;if(a==="none"){const ce=ve>>>2,ke=["x","y","z","w"][ve&3];if(v){const Ee=_+ce>>>1,qe=_+ce&1?"u4_hi":"u4_lo";return`  var a_${ve} = ${w}(${qe}(w_eff_u[${Ee}u]).${ke});
`}return`  var a_${ve} = ${w}(w_eff[${_+ce}u].${ke});
`}return`  var a_${ve} = ${w}(0.0${$});
`}),pe=p<=8?`(${p}u + cp.pad0)`:`${p}u`,K=v?`        let wbu_tap = tap_yz * ${t*3*u/2}u;
        for (var ic : u32 = 0u; ic < ${pe}; ic = ic + 1u) {
          let base = row_off + ic * ${ht}u;
${V("act8_0")}
          let wbu = wbu_tap + ic * ${3*u/2}u;
${fe(N,q)}
        }`:`        let wb_tap = tap_yz * ${t*3*u}u;
        for (var ic : u32 = 0u; ic < ${pe}; ic = ic + 1u) {
          let base = row_off + ic * ${ht}u;
${V("act8_0")}
          let wb = wb_tap + ic * ${3*u}u;
${fe(N,q)}
        }`,Y=v?`        for (var ic : u32 = 0u; ic < ${pe}; ic = ic + 1u) {
          let base = row_off + ic * ${ht}u;
${V("act8_1")}
          let wbu = wbu_tap + (${p}u + ic) * ${3*u/2}u;
${fe(N,q)}
        }`:`        for (var ic : u32 = 0u; ic < ${pe}; ic = ic + 1u) {
          let base = row_off + ic * ${ht}u;
${V("act8_1")}
          let wb = wb_tap + (${p}u + ic) * ${3*u}u;
${fe(N,q)}
        }`,te=Array.from({length:re},(Q,ve)=>`a_${N+ve}`).join(", ");return`struct ${D} {
${T}};
fn ${ee}(y : i32, z : i32, x_pad : u32, dp : u32) -> ${D} {
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
        let row_off = (u32(sz) * 256u + u32(sy)) * ${m}u + x_pad;
${K}
        ${c?Y:""}
      }
      tap_yz = tap_yz + 1u;
    }
  }
  return ${D}(${te});
}
`},X=(ee,D,N,q,re)=>{const T=re?d?`
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
  }`,oe=re?d?"ext_i * 8u + lid.y * 2u + sg":"wid.z * 8u + lid.y * 2u + sg":"row_idx * 2u + sg",pe=re?"(((dp >> 24u) & 1u) != 0u)":"true";return`
@compute @workgroup_size(64, 4, 1)
fn ${ee}(@builtin(local_invocation_id) lid : vec3<u32>,
             @builtin(workgroup_id) wid : vec3<u32>) {
  let x4 = lid.x;
  let sg = x4 >> 5u;
  let slane = x4 & 31u;
${L.localHeader}  let x_pad = x4 + ${Ht}u;
${T}
  let dp = cp.d_pack;
  let acc = ${D}(y, z, x_pad, dp);
  let row_idx = u32(z) * 256u + u32(y);
  let y_row_base = row_idx * ${x}u + x4;
${L.emit({accVar:"acc",cStart:N,cEnd:q,hrExpr:oe,yRowExpr:"y_row_base",momMode:re?"ext_and_main":"main",writeY8Expr:pe})}}`},Se=se?H("run_conv_lo","ConvAccLo",0,p)+H("run_conv_hi","ConvAccHi",p,t)+X("main_lo","run_conv_lo",0,p,!1)+X("main_hi","run_conv_hi",p,t,!1)+X("main_ext_lo","run_conv_lo",0,p,!0)+X("main_ext_hi","run_conv_hi",p,t,!0):H("run_conv","ConvAcc",0,t)+X("main","run_conv",0,t,!1)+X("main_ext","run_conv",0,t,!0),he=v?`fn u4_lo(u : vec4<u32>) -> vec4<f16> {
  return vec4<f16>(vec2<f16>(unpack2x16float(u.x)), vec2<f16>(unpack2x16float(u.y)));
}
fn u4_hi(u : vec4<u32>) -> vec4<f16> {
  return vec4<f16>(vec2<f16>(unpack2x16float(u.z)), vec2<f16>(unpack2x16float(u.w)));
}
@group(0) @binding(6) var<uniform> w_eff_u : array<vec4<u32>, ${Math.ceil(h/2)}>;`:`@group(0) @binding(6) var<storage, read> w_eff : array<${w}>;`;return`${b}${k}
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
${he}
@group(0) @binding(7) var<storage, read> strips : array<u32>;
@group(0) @binding(8) var<uniform> cp : ConvParams;
${L.decls}${Se}`},clsWgsl:()=>`${b}
${An(r)}
struct ClsParams {
  w_vec4_off : u32,
  bias_off : u32,
  is_full : u32,
  pad0 : u32,
};
@group(0) @binding(0) var<storage, read> y8_0 : array<u32>;
@group(0) @binding(1) var<storage, read> y8_1 : array<u32>;
@group(0) @binding(2) var<storage, read> w16_4 : array<${w}>;
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
  let y_base = row_idx * ${x}u + x4;
  let mom_base = hr * ${t}u;

  var feat : array<${w}, ${n}>;
  for (var c : u32 = 0u; c < ${n}u; c = c + 1u) {
    let st = mom_stats[c * 2u + 1u];
    let rm = mom_main[mom_base + c];
    ${c?`
    let in_hi = c >= ${p}u;
    let c_loc = select(c, c - ${p}u, in_hi);
    let idx4 = y_base + c_loc * ${$t}u;
    let q_word = select(y8_0[idx4], y8_1[idx4], in_hi);
    `:`
    let q_word = y8_0[y_base + c * ${$t}u];
    `}
    let yv = unpack4x8unorm(q_word) * rm.w + vec4<f32>(rm.z);
    let fv = vec4<f32>(
      act(yv.x * st.x + st.y),
      act(yv.y * st.x + st.y),
      act(yv.z * st.x + st.y),
      act(yv.w * st.x + st.y)
    );
    feat[c] = ${w}(fv);
  }

  let w_cls = cp.w_vec4_off;
  let m_cls = cp.bias_off;
${xo({chan:n,clsK4:o,nclass:s,V4:w,suf:$,readBiasStmt:"",biasExpr:se=>`qmeta[m_cls + k_base + ${se}u]`,probCfg:g})}
}`,totalWEffVec4s:h,useUniformWeff:v,csHalf:p,chunkableStd:d,halfPass0:!f&&c,halfPassConv:!f&&c}}function ko(e){const{cs:t,chan:n,nclass:s,clsK4:o,dilations:i,activation:r,norm:a,hasF16:f,hasSubgroups32:l,numConvs:c,probCfg:g}=e,d=t/4,u=t/2,p=t/4,m=d*ht,x=16384,A=t*$t,h=t*2+4,v=h+Un*t,S=4*t,b=(c*S+o*4)/4,k=9*t*3*p,B=k,$=k+p,w=f&&p%2===0&&$*8<=65536,G=yo(r),M=f?`enable f16;
`:"",C=l?`enable subgroups;
`:"",I=f?"f16":"f32",E=f?"h":"f",P=`vec4<${I}>`,j=f?256:255,R=ee=>{const D=ee?".xzyw":"",N=(oe,pe,K)=>{if(oe==="stage_bg")return`stage[s_bg_base + ${pe*$t}u] = ${K};`;if(oe==="stage")return`stage[s_row_base + ${pe*$t}u] = ${K};`;const Y=Math.floor(pe/d),te=pe%d;return`if (use_act) { act8_${Y}[a_row_base + ${te*ht}u] = ${K}; } else { stage[s_row_base + ${pe*$t}u] = ${K}; }`};if(f&&l)return{decls:"",localHeader:"",emit:({accVar:oe,cStart:pe,cEnd:K,hrExpr:Y,storeMode:te,momOffExpr:Q,alsoWriteMomMain:ve=!1,writeY8Expr:ce="true"})=>bt(K-pe,ke=>{const Ee=pe+ke;return a==="none"?`  {
    let f = vec4<f32>(${oe}.v_${ke}${D});
    let lmn = subgroupMin(min(min(f.x, f.y), min(f.z, f.w)));
    let lmx = subgroupMax(max(max(f.x, f.y), max(f.z, f.w)));
    let sp = lmx - lmn;
    let inv = select(0.0, 1.0 / sp, sp > 1e-7);
    if (${ce}) {
      ${N(te,Ee,"pack4x8unorm((f - vec4<f32>(lmn)) * inv)")}
    }
    if (slane == 0u) {
      let mv = vec4<f32>(0.0, 0.0, lmn, sp);
      mom[${Q} + (${Y}) * ${t}u + ${Ee}u] = mv;
      ${ve?`mom[${h}u + (row_idx * 2u + sg) * ${t}u + ${Ee}u] = mv;`:""}
    }
  }
`:`  {
    let f = vec4<f32>(${oe}.v_${ke}${D});
    let ls = subgroupAdd(f.x + f.y + f.z + f.w);
    let lq = subgroupAdd(dot(f, f));
    let lmn = subgroupMin(min(min(f.x, f.y), min(f.z, f.w)));
    let lmx = subgroupMax(max(max(f.x, f.y), max(f.z, f.w)));
    let sp = lmx - lmn;
    let inv = select(0.0, 1.0 / sp, sp > 1e-7);
    if (${ce}) {
      ${N(te,Ee,"pack4x8unorm((f - vec4<f32>(lmn)) * inv)")}
    }
    if (slane == 0u) {
      let mv = vec4<f32>(ls, lq, lmn, sp);
      mom[${Q} + (${Y}) * ${t}u + ${Ee}u] = mv;
      ${ve?`mom[${h}u + (row_idx * 2u + sg) * ${t}u + ${Ee}u] = mv;`:""}
    }
  }
`})};const q=`    let c_out = c_base + slane;
    mom[mom_off + c_out] = mv;
    if (also_main) {
      mom[main_off + c_out] = mv;
    }`;if(a==="none"&&f){const oe=bt(31,K=>`    {
      let m = sh_mm[rb + ${K+1}u];
      rmn = min(rmn, m.x);
      rmx = max(rmx, m.y);
    }
`);return{decls:`var<workgroup> sh_mm  : array<vec2<f16>, 1024>;
var<workgroup> sh_res : array<vec2<f32>, 32>;
fn vec_mm16(a : vec4<f16>) -> vec2<f16> {
  return vec2<f16>(min(min(a.x, a.y), min(a.z, a.w)), max(max(a.x, a.y), max(a.z, a.w)));
}
fn reduce_pack4(
  a0 : ${P}, a1 : ${P}, a2 : ${P}, a3 : ${P},
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
${q}
  }
  workgroupBarrier();
  let f0 = vec4<f32>(a0${D});
  let f1 = vec4<f32>(a1${D});
  let f2 = vec4<f32>(a2${D});
  let f3 = vec4<f32>(a3${D});
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
`,emit:({accVar:K,cStart:Y,cEnd:te,hrExpr:Q,storeMode:ve,momOffExpr:ce,alsoWriteMomMain:ke=!1,writeY8Expr:Ee="true"})=>{const qe=`${ce} + (${Q}) * ${t}u`,Ye=ke?`${h}u + (row_idx * 2u + sg) * ${t}u`:"0u";let Ge=`  let ep_mom_off = ${qe};
  let ep_main_off = ${Ye};
`;for(let Ie=0;Ie<te-Y;Ie+=4){const Je=Y+Ie;Ge+=`  {
    let qw = reduce_pack4(${K}.v_${Ie}, ${K}.v_${Ie+1}, ${K}.v_${Ie+2}, ${K}.v_${Ie+3}, h, slane, ${Je}u, ep_mom_off, ep_main_off, ${ke});
    if (${Ee}) {
      ${N(ve,Je,"qw.x")}
      ${N(ve,Je+1,"qw.y")}
      ${N(ve,Je+2,"qw.z")}
      ${N(ve,Je+3,"qw.w")}
    }
  }
`}return Ge}}}if(a==="none"){const oe=bt(32,K=>`    {
      let m = sh_mm[rb + ${K}u];
      rmn = min(rmn, m.x);
      rmx = max(rmx, m.y);
    }
`);return{decls:`var<workgroup> sh_mm  : array<vec2<f32>, 1024>;
var<workgroup> sh_res : array<vec2<f32>, 32>;
fn vec_mm(f : vec4<f32>) -> vec2<f32> {
  return vec2<f32>(min(min(f.x, f.y), min(f.z, f.w)), max(max(f.x, f.y), max(f.z, f.w)));
}
fn reduce_pack4(
  a0 : ${P}, a1 : ${P}, a2 : ${P}, a3 : ${P},
  h : u32, slane : u32, c_base : u32, mom_off : u32, main_off : u32, also_main : bool
) -> vec4<u32> {
  let f0 = vec4<f32>(a0${D});
  let f1 = vec4<f32>(a1${D});
  let f2 = vec4<f32>(a2${D});
  let f3 = vec4<f32>(a3${D});
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
${q}
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
`,emit:({accVar:K,cStart:Y,cEnd:te,hrExpr:Q,storeMode:ve,momOffExpr:ce,alsoWriteMomMain:ke=!1,writeY8Expr:Ee="true"})=>{const qe=`${ce} + (${Q}) * ${t}u`,Ye=ke?`${h}u + (row_idx * 2u + sg) * ${t}u`:"0u";let Ge=`  let ep_mom_off = ${qe};
  let ep_main_off = ${Ye};
`;for(let Ie=0;Ie<te-Y;Ie+=4){const Je=Y+Ie;Ge+=`  {
    let qw = reduce_pack4(${K}.v_${Ie}, ${K}.v_${Ie+1}, ${K}.v_${Ie+2}, ${K}.v_${Ie+3}, h, slane, ${Je}u, ep_mom_off, ep_main_off, ${ke});
    if (${Ee}) {
      ${N(ve,Je,"qw.x")}
      ${N(ve,Je+1,"qw.y")}
      ${N(ve,Je+2,"qw.z")}
      ${N(ve,Je+3,"qw.w")}
    }
  }
`}return Ge}}}if(f){const oe=bt(31,K=>{const Y=K+1;return`    {
      let s = sh_sq[rb + ${Y}u];
      let m = sh_mm[rb + ${Y}u];
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
  a0 : ${P}, a1 : ${P}, a2 : ${P}, a3 : ${P},
  h : u32, slane : u32, c_base : u32, mom_off : u32, main_off : u32, also_main : bool
) -> vec4<u32> {
  let f0 = vec4<f32>(a0${D});
  let f1 = vec4<f32>(a1${D});
  let f2 = vec4<f32>(a2${D});
  let f3 = vec4<f32>(a3${D});
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
${q}
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
`,emit:({accVar:K,cStart:Y,cEnd:te,hrExpr:Q,storeMode:ve,momOffExpr:ce,alsoWriteMomMain:ke=!1,writeY8Expr:Ee="true"})=>{const qe=`${ce} + (${Q}) * ${t}u`,Ye=ke?`${h}u + (row_idx * 2u + sg) * ${t}u`:"0u";let Ge=`  let ep_mom_off = ${qe};
  let ep_main_off = ${Ye};
`;for(let Ie=0;Ie<te-Y;Ie+=4){const Je=Y+Ie;Ge+=`  {
    let qw = reduce_pack4(${K}.v_${Ie}, ${K}.v_${Ie+1}, ${K}.v_${Ie+2}, ${K}.v_${Ie+3}, h, slane, ${Je}u, ep_mom_off, ep_main_off, ${ke});
    if (${Ee}) {
      ${N(ve,Je,"qw.x")}
      ${N(ve,Je+1,"qw.y")}
      ${N(ve,Je+2,"qw.z")}
      ${N(ve,Je+3,"qw.w")}
    }
  }
`}return Ge}}}const re=bt(32,oe=>`    {
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
  a0 : ${P}, a1 : ${P},
  h : u32, slane : u32, c_base : u32, mom_off : u32, main_off : u32, also_main : bool
) -> vec2<u32> {
  let f0 = vec4<f32>(a0${D});
  let f1 = vec4<f32>(a1${D});
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
${re}    let sp = rmx - rmn;
    sh_res[h * 2u + slane] = vec2<f32>(rmn, select(0.0, 1.0 / sp, sp > 1e-7));
    let mv = vec4<f32>(rs, rq, rmn, sp);
${q}
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
`,emit:({accVar:oe,cStart:pe,cEnd:K,hrExpr:Y,storeMode:te,momOffExpr:Q,alsoWriteMomMain:ve=!1,writeY8Expr:ce="true"})=>{const ke=`${Q} + (${Y}) * ${t}u`,Ee=ve?`${h}u + (row_idx * 2u + sg) * ${t}u`:"0u";let qe=`  let ep_mom_off = ${ke};
  let ep_main_off = ${Ee};
`;for(let Ye=0;Ye<K-pe;Ye+=2){const Ge=pe+Ye;qe+=`  {
    let qw = reduce_pack2(${oe}.v_${Ye}, ${oe}.v_${Ye+1}, h, slane, ${Ge}u, ep_mom_off, ep_main_off, ${ve});
    if (${ce}) {
      ${N(te,Ge,"qw.x")}
      ${N(te,Ge+1,"qw.y")}
    }
  }
`}return qe}}},ie=()=>`
@group(0) @binding(0) var<storage, read_write> act0 : array<u32>;
@group(0) @binding(1) var<storage, read_write> act1 : array<u32>;
@group(0) @binding(2) var<storage, read_write> act2 : array<u32>;
@group(0) @binding(3) var<storage, read_write> act3 : array<u32>;
@compute @workgroup_size(${ht}, 1, 1)
fn main(@builtin(local_invocation_id) lid : vec3<u32>,
        @builtin(workgroup_id) wid : vec3<u32>) {
  let row_base = (wid.z * 256u + wid.y) * ${m}u + lid.x;
  let val = ${G.uZeroWord}u;
  for (var c : u32 = 0u; c < ${d}u; c = c + 1u) {
    let idx = row_base + c * ${ht}u;
    act0[idx] = val;
    act1[idx] = val;
    act2[idx] = val;
    act3[idx] = val;
  }
}`,se=i[0],L=!f&&t>=16,U=()=>{const ee=R(!1),D=(K,Y)=>{const te=K/4,Q=Y/4;return bt(Q-te,ve=>{const ce=te+ve,ke=ce*4;return`          {
            let w0 = w16_4[wb + ${ce}u];
            let w1 = w16_4[wb + ${p+ce}u];
            let w2 = w16_4[wb + ${2*p+ce}u];
            a_${ke}     = fma(vn, ${P}(w0.x), fma(vc, ${P}(w1.x), fma(vp, ${P}(w2.x), a_${ke})));
            a_${ke+1} = fma(vn, ${P}(w0.y), fma(vc, ${P}(w1.y), fma(vp, ${P}(w2.y), a_${ke+1})));
            a_${ke+2} = fma(vn, ${P}(w0.z), fma(vc, ${P}(w1.z), fma(vp, ${P}(w2.z), a_${ke+2})));
            a_${ke+3} = fma(vn, ${P}(w0.w), fma(vc, ${P}(w1.w), fma(vp, ${P}(w2.w), a_${ke+3})));
          }
`})},N=Math.floor(se/4),q=se%4;let re="";q===0?re=`
        let vn = inp_4[base - ${N}u];
        let vc = inp_4[base];
        let vp = inp_4[base + ${N}u];`:N===0&&q===1?re=`
        let vL = inp_4[base - 1u];
        let vc = inp_4[base];
        let vR = inp_4[base + 1u];
        let vn = ${P}(vL.w, vc.xyz);
        let vp = ${P}(vc.yzw, vR.x);`:q===1?re=`
        let vL = inp_4[base - ${N+1}u];
        let vN = inp_4[base - ${N}u];
        let vc = inp_4[base];
        let vP = inp_4[base + ${N}u];
        let vR = inp_4[base + ${N+1}u];
        let vn = ${P}(vL.w, vN.xyz);
        let vp = ${P}(vP.yzw, vR.x);`:q===2?re=`
        let vL = inp_4[base - ${N+1}u];
        let vN = ${N===0?"inp_4[base]":`inp_4[base - ${N}u]`};
        let vc = ${N===0?"vN":"inp_4[base]"};
        let vP = ${N===0?"vN":`inp_4[base + ${N}u]`};
        let vR = inp_4[base + ${N+1}u];
        let vn = ${P}(vL.zw, vN.xy);
        let vp = ${P}(vP.zw, vR.xy);`:re=`
        let vL = inp_4[base - ${N+1}u];
        let vN = ${N===0?"inp_4[base]":`inp_4[base - ${N}u]`};
        let vc = ${N===0?"vN":"inp_4[base]"};
        let vP = ${N===0?"vN":`inp_4[base + ${N}u]`};
        let vR = inp_4[base + ${N+1}u];
        let vn = ${P}(vL.yzw, vN.x);
        let vp = ${P}(vP.w, vR.xyz);`;const T=(K,Y,te,Q)=>{const ve=Q-te,ce=bt(ve,qe=>`  v_${qe} : ${P},
`),ke=bt(ve,qe=>{const Ye=te+qe;if(a==="none"){const Ge=3*t+Ye;return`  var a_${Ye} = ${P}(${I}(qmeta_u[${Ge>>>2}u][${Ge&3}u]));
`}return`  var a_${Ye} = ${P}(0.0${E});
`}),Ee=Array.from({length:ve},(qe,Ye)=>`a_${te+Ye}`).join(", ");return`struct ${Y} {
${ce}};
fn ${K}(y : i32, z : i32, x_pad : u32) -> ${Y} {
${ke}  var tap_yz : u32 = 0u;
  for (var dz : i32 = -1; dz <= 1; dz = dz + 1) {
    let sz = z + dz * ${se};
    for (var dy : i32 = -1; dy <= 1; dy = dy + 1) {
      let sy = y + dy * ${se};
      if ((u32(sz) | u32(sy)) < 256u) {
        let base = (u32(sz) * 256u + u32(sy)) * ${ht}u + x_pad;
${re}
        let wb = tap_yz * ${3*p}u;
${D(te,Q)}
      }
      tap_yz = tap_yz + 1u;
    }
  }
  return ${Y}(${Ee});
}
`},oe=(K,Y,te,Q,ve)=>{const ce=ve?`  let y = i32(p0.bg_y0 + lid.y);
  let z = i32(p0.bg_z0);`:`  var y : i32;
  var z : i32;
  if (p0.is_full != 0u) {
    y = i32(wid.y * 4u + lid.y);
    z = i32(wid.z);
  } else {
    let pk = strips0_u[wid.z >> 2u][wid.z & 3u];
    y = i32((pk & 255u) * 4u + lid.y);
    z = i32(pk >> 8u);
  }`,ke=ve?"lid.y * 2u + sg":"row_idx * 2u + sg",Ee=ve?`${v}u`:`${h}u`,qe=ve?`  let s_bg_base = (${x}u + lid.y) * ${A}u + lid.x;`:`  let row_idx = u32(z) * 256u + u32(y);
  let use_act = u32(z) < 192u;
  let a_row_base = row_idx * ${m}u + x_pad;
  let s_row_base = ((u32(z) & 63u) * 256u + u32(y)) * ${A}u + lid.x;`;return`
@compute @workgroup_size(64, 4, 1)
fn ${K}(@builtin(local_invocation_id) lid : vec3<u32>,
             @builtin(workgroup_id) wid : vec3<u32>) {
  let sg = lid.x >> 5u;
  let slane = lid.x & 31u;
${ee.localHeader}  let x_pad = lid.x + ${Ht}u;
${ce}
  let acc = ${Y}(y, z, x_pad);
${qe}
${ee.emit({accVar:"acc",cStart:te,cEnd:Q,hrExpr:ke,storeMode:ve?"stage_bg":"conv0_split",momOffExpr:Ee})}}`},pe=L?T("run_conv0_lo","Conv0AccLo",0,u)+T("run_conv0_hi","Conv0AccHi",u,t)+oe("main_lo","run_conv0_lo",0,u,!1)+oe("main_hi","run_conv0_hi",u,t,!1)+oe("main_bg_lo","run_conv0_lo",0,u,!0)+oe("main_bg_hi","run_conv0_hi",u,t,!0):T("run_conv0","Conv0Acc",0,t)+oe("main","run_conv0",0,t,!1)+oe("main_bg","run_conv0",0,t,!0);return`${M}${C}
struct Params0 {
  is_full : u32,
  bg_y0 : u32,
  bg_z0 : u32,
  pad0 : u32,
};
@group(0) @binding(0) var<storage, read> inp_4 : array<${P}>;
@group(0) @binding(1) var<storage, read_write> act8_0 : array<u32>;
@group(0) @binding(2) var<storage, read_write> act8_1 : array<u32>;
@group(0) @binding(3) var<storage, read_write> act8_2 : array<u32>;
@group(0) @binding(4) var<storage, read_write> act8_3 : array<u32>;
@group(0) @binding(5) var<storage, read_write> stage : array<u32>;
@group(0) @binding(6) var<storage, read> w16_4 : array<${P}>;
@group(0) @binding(7) var<storage, read_write> mom : array<vec4<f32>>;
@group(0) @binding(8) var<uniform> qmeta_u : array<vec4<f32>, ${t}>;
@group(0) @binding(9) var<uniform> strips0_u : array<vec4<u32>, 4096>;
@group(0) @binding(10) var<uniform> p0 : Params0;
${ee.decls}${pe}`},V=()=>`${M}
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
@group(0) @binding(0) var<storage, read> w16_4 : array<${P}>;
@group(0) @binding(1) var<storage, read> qmeta : array<f32>;
@group(0) @binding(2) var<storage, read_write> mom : array<vec4<f32>>;
@group(0) @binding(3) var<storage, read_write> w_eff : array<${P}>;
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
    for (var hr : u32 = lid; hr < ${Un}u; hr = hr + 256u) {
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
        let v = mom[${v}u + e * ${t}u + c];
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
    q_ref = max(q_ref, ${j.toFixed(1)} * qs);
  }
  ${a==="none"?"q_ref = 1.0;":""}
  if (lid == 0u) {
    mom[${t*2}u] = vec4<f32>(q_ref, 0.0, 0.0, 0.0);
  }
  let scale_num = ${j.toFixed(1)} / q_ref;
  for (var idx : u32 = lid; idx < ${k}u; idx = idx + 256u) {
    let ic = (idx / ${3*p}u) % ${t}u;
    let qs = mom[ic * 2u].z;
    w_eff[idx] = w16_4[pp.next_w_vec4_off + idx] * ${I}(qs * scale_num);
  }
  if (lid < ${p}u) {
    ${a==="none"?`
    let mb = pp.next_meta_off + ${3*t}u + lid * 4u;
    w_eff[${B}u + lid] = ${P}(${I}(qmeta[mb]), ${I}(qmeta[mb + 1u]), ${I}(qmeta[mb + 2u]), ${I}(qmeta[mb + 3u]));
    `:`
    w_eff[${B}u + lid] = ${P}(0.0${E});
    `}
  }
}`,fe=()=>`
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
  let x_pad = x4 + ${Ht}u;
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
  let s_base = ((z & 63u) * 256u + y) * ${A}u + x4;
  for (var c : u32 = 0u; c < ${d}u; c = c + 1u) {
    let a_off = a_base + c * ${ht}u;
    act8_0[a_off] = stage[s_base + c * ${$t}u];
    act8_1[a_off] = stage[s_base + (${d}u + c) * ${$t}u];
    act8_2[a_off] = stage[s_base + (${2*d}u + c) * ${$t}u];
    act8_3[a_off] = stage[s_base + (${3*d}u + c) * ${$t}u];
  }
}`,H=(ee,D)=>{const N=ee*d;return`
  for (var cl : u32 = 0u; cl < ${d}u; cl = cl + 1u) {
    let c = ${N}u + cl;
    let inv_qs = mom[c * 2u].w;
    let st = mom[c * 2u + 1u];
    let rm = mom[mom_base + c];
    let q_word = ${D?`stage[s_bg_base + c * ${$t}u]`:`select(stage[s_base + c * ${$t}u], act8_${ee}[a_base + cl * ${ht}u], use_act)`};
    let yv = unpack4x8unorm(q_word) * rm.w + vec4<f32>(rm.z);
    let a = vec4<f32>(
      act(yv.x * st.x + st.y),
      act(yv.y * st.x + st.y),
      act(yv.z * st.x + st.y),
      act(yv.w * st.x + st.y)
    );
    act8_${ee}[a_base + cl * ${ht}u] = pack4x8unorm((a * inv_qs + vec4<f32>(${G.zeroBin.toFixed(1)})) * (1.0 / 255.0));
  }`},X=()=>`${An(r)}
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
  let x_pad = x4 + ${Ht}u;
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
  let s_base = ((z & 63u) * 256u + y) * ${A}u + x4;
  let mom_base = ${h}u + (row_idx * 2u + sg) * ${t}u;
${bt(4,ee=>H(ee,!1))}
}

@compute @workgroup_size(64, 4, 1)
fn norm_halo_fill(@builtin(local_invocation_id) lid : vec3<u32>,
                  @builtin(workgroup_id) wid : vec3<u32>) {
  let idx = wid.y * 4u + lid.y;
  if (idx >= np.n_halo) { return; }
  let x4 = lid.x;
  let sg = x4 >> 5u;
  let x_pad = x4 + ${Ht}u;
  let s_bg_base = ${x}u * ${A}u + x4;
  let mom_base = ${v}u + sg * ${t}u;
  let dst_row = norm_aux[np.halo_off + idx];
  let a_base = dst_row * ${m}u + x_pad;
${bt(4,ee=>H(ee,!0))}
}`,Se=()=>{const ee=!f&&t>=16,D=R(f),N=(te,Q)=>f?`
          let ${te} = vec4<f16>(vec2<f16>(unpack2x16float(((${Q} & 0x00FF00FFu) << 2u) | 0x3C003C00u)), vec2<f16>(unpack2x16float(((${Q} >> 6u) & 0x03FC03FCu) | 0x3C003C00u))) - vec4<f16>(${G.sterbenzSub});`:`
          let ${te} = unpack4x8unorm(${Q}) - vec4<f32>(${G.uZeroFloat});`,q=te=>`
          let uL = ${te}[base - off0];
          let uN = ${te}[base - off1];
          let uC = ${te}[base];
          let uP = ${te}[base + off1];
          let uR = ${te}[base + off0];
          let u_neg = (uL >> sh_l) | (uN << sh_r);
          let u_pos = (uP >> sh_r) | (uR << sh_l);`+N("vn","u_neg")+N("vc","uC")+N("vp","u_pos"),re=(te,Q)=>{const ve=te/4,ce=Q/4;if(w){const ke=p/2,Ee=p;let qe="";for(let Ye=ve;Ye<ce;Ye+=2){const Ge=Ye*4,Ie=Ye/2;qe+=`          {
            let wp0 = w_eff_u[wbu + ${Ie}u];
            let wp1 = w_eff_u[wbu + ${ke+Ie}u];
            let wp2 = w_eff_u[wbu + ${Ee+Ie}u];
            let w0a = u4_lo(wp0);
            let w0b = u4_hi(wp0);
            let w1a = u4_lo(wp1);
            let w1b = u4_hi(wp1);
            let w2a = u4_lo(wp2);
            let w2b = u4_hi(wp2);
            a_${Ge}     = fma(vn, vec4<f16>(w0a.x), fma(vc, vec4<f16>(w1a.x), fma(vp, vec4<f16>(w2a.x), a_${Ge})));
            a_${Ge+1} = fma(vn, vec4<f16>(w0a.y), fma(vc, vec4<f16>(w1a.y), fma(vp, vec4<f16>(w2a.y), a_${Ge+1})));
            a_${Ge+2} = fma(vn, vec4<f16>(w0a.z), fma(vc, vec4<f16>(w1a.z), fma(vp, vec4<f16>(w2a.z), a_${Ge+2})));
            a_${Ge+3} = fma(vn, vec4<f16>(w0a.w), fma(vc, vec4<f16>(w1a.w), fma(vp, vec4<f16>(w2a.w), a_${Ge+3})));
            a_${Ge+4} = fma(vn, vec4<f16>(w0b.x), fma(vc, vec4<f16>(w1b.x), fma(vp, vec4<f16>(w2b.x), a_${Ge+4})));
            a_${Ge+5} = fma(vn, vec4<f16>(w0b.y), fma(vc, vec4<f16>(w1b.y), fma(vp, vec4<f16>(w2b.y), a_${Ge+5})));
            a_${Ge+6} = fma(vn, vec4<f16>(w0b.z), fma(vc, vec4<f16>(w1b.z), fma(vp, vec4<f16>(w2b.z), a_${Ge+6})));
            a_${Ge+7} = fma(vn, vec4<f16>(w0b.w), fma(vc, vec4<f16>(w1b.w), fma(vp, vec4<f16>(w2b.w), a_${Ge+7})));
          }
`}return qe}return bt(ce-ve,ke=>{const Ee=ve+ke,qe=Ee*4;return`          {
            let w0 = w_eff[wb + ${Ee}u];
            let w1 = w_eff[wb + ${p+Ee}u];
            let w2 = w_eff[wb + ${2*p+Ee}u];
            a_${qe}     = fma(vn, ${P}(w0.x), fma(vc, ${P}(w1.x), fma(vp, ${P}(w2.x), a_${qe})));
            a_${qe+1} = fma(vn, ${P}(w0.y), fma(vc, ${P}(w1.y), fma(vp, ${P}(w2.y), a_${qe+1})));
            a_${qe+2} = fma(vn, ${P}(w0.z), fma(vc, ${P}(w1.z), fma(vp, ${P}(w2.z), a_${qe+2})));
            a_${qe+3} = fma(vn, ${P}(w0.w), fma(vc, ${P}(w1.w), fma(vp, ${P}(w2.w), a_${qe+3})));
          }
`})},T=(te,Q,ve)=>{const ce=te*d,ke=`(${d}u + cp.pad0)`;return w?`        for (var ic : u32 = 0u; ic < ${ke}; ic = ic + 1u) {
          let base = row_off + ic * ${ht}u;
${q(`act8_${te}`)}
          let wbu = wbu_tap + ${ce?`(${ce}u + ic)`:"ic"} * ${3*p/2}u;
${re(Q,ve)}
        }
`:`        for (var ic : u32 = 0u; ic < ${ke}; ic = ic + 1u) {
          let base = row_off + ic * ${ht}u;
${q(`act8_${te}`)}
          let wb = wb_tap + ${ce?`(${ce}u + ic)`:"ic"} * ${3*p}u;
${re(Q,ve)}
        }
`},oe=(te,Q,ve,ce)=>{const ke=ce-ve,Ee=bt(ke,Ie=>`  v_${Ie} : ${P},
`),qe=bt(ke,Ie=>{const Je=ve+Ie;if(a==="none"){const He=Je>>>2,je=["x","y","z","w"][Je&3];if(w){const dt=B+He>>>1,pt=B+He&1?"u4_hi":"u4_lo";return`  var a_${Je} = ${P}(${pt}(w_eff_u[${dt}u]).${je});
`}return`  var a_${Je} = ${P}(w_eff[${B+He}u].${je});
`}return`  var a_${Je} = ${P}(0.0${E});
`}),Ye=w?`        let wbu_tap = tap_yz * ${t*3*p/2}u;
`:`        let wb_tap = tap_yz * ${t*3*p}u;
`,Ge=Array.from({length:ke},(Ie,Je)=>`a_${ve+Je}`).join(", ");return`struct ${Q} {
${Ee}};
fn ${te}(y : i32, z : i32, x_pad : u32, dp : u32) -> ${Q} {
${qe}  let d_step = i32(dp & 63u);
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
        let row_off = (u32(sz) * 256u + u32(sy)) * ${m}u + x_pad;
${Ye}${bt(4,Ie=>T(Ie,ve,ce))}      }
      tap_yz = tap_yz + 1u;
    }
  }
  return ${Q}(${Ge});
}
`},pe=(te,Q,ve,ce,ke)=>{let Ee="";ke==="bg"?Ee=`
  let y = i32(cp.bg_y0 + lid.y);
  let z = i32(cp.bg_z0);`:ke==="ext"?Ee=`
  let pk_full = strips[cp.ext_off + wid.z];
  let ext_orig = pk_full >> 16u;
  let pk = pk_full & 0xFFFFu;
  let y = i32((pk & 255u) * 4u + lid.y);
  let z = i32(pk >> 8u);`:Ee=`
  var y : i32;
  var z : i32;
  if (cp.is_full != 0u) {
    y = i32(wid.y * 4u + lid.y);
    z = i32(cp.z_start + wid.z);
  } else {
    let pk = strips[cp.strip_off + wid.z] & 0xFFFFu;
    y = i32((pk & 255u) * 4u + lid.y);
    z = i32(pk >> 8u);
  }`;const qe=ke==="bg"?"lid.y * 2u + sg":ke==="ext"?"ext_orig * 8u + lid.y * 2u + sg":"row_idx * 2u + sg",Ye=ke==="main"?`${h}u`:`${v}u`,Ge=ke==="bg"?"stage_bg":"stage",Ie=ke==="main"?"true":"(((dp >> 24u) & 1u) != 0u)",Je=ke==="bg"?`  let row_idx = u32(z) * 256u + u32(y);
  let s_bg_base = (${x}u + lid.y) * ${A}u + x4;`:`  let row_idx = u32(z) * 256u + u32(y);
  let s_row_base = ((u32(z) & 63u) * 256u + u32(y)) * ${A}u + x4;`;return`
@compute @workgroup_size(64, 4, 1)
fn ${te}(@builtin(local_invocation_id) lid : vec3<u32>,
             @builtin(workgroup_id) wid : vec3<u32>) {
  let x4 = lid.x;
  let sg = x4 >> 5u;
  let slane = x4 & 31u;
${D.localHeader}  let x_pad = x4 + ${Ht}u;
${Ee}
  let dp = cp.d_pack;
  let acc = ${Q}(y, z, x_pad, dp);
${Je}
${D.emit({accVar:"acc",cStart:ve,cEnd:ce,hrExpr:qe,storeMode:Ge,momOffExpr:Ye,alsoWriteMomMain:ke!=="main",writeY8Expr:Ie})}}`},K=ee?oe("run_conv_lo","ConvAccLo",0,u)+oe("run_conv_hi","ConvAccHi",u,t)+pe("main_lo","run_conv_lo",0,u,"main")+pe("main_hi","run_conv_hi",u,t,"main")+pe("main_ext_lo","run_conv_lo",0,u,"ext")+pe("main_ext_hi","run_conv_hi",u,t,"ext")+pe("main_bg_lo","run_conv_lo",0,u,"bg")+pe("main_bg_hi","run_conv_hi",u,t,"bg"):oe("run_conv","ConvAcc",0,t)+pe("main","run_conv",0,t,"main")+pe("main_ext","run_conv",0,t,"ext")+pe("main_bg","run_conv",0,t,"bg"),Y=w?`fn u4_lo(u : vec4<u32>) -> vec4<f16> {
  return vec4<f16>(vec2<f16>(unpack2x16float(u.x)), vec2<f16>(unpack2x16float(u.y)));
}
fn u4_hi(u : vec4<u32>) -> vec4<f16> {
  return vec4<f16>(vec2<f16>(unpack2x16float(u.z)), vec2<f16>(unpack2x16float(u.w)));
}
@group(0) @binding(6) var<uniform> w_eff_u : array<vec4<u32>, ${Math.ceil($/2)}>;`:`@group(0) @binding(6) var<storage, read> w_eff : array<${P}>;`;return`${M}${C}
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
${Y}
@group(0) @binding(7) var<storage, read> strips : array<u32>;
@group(0) @binding(8) var<uniform> cp : BandConvParams;
${D.decls}${K}`},he=ee=>{const D=ee*d;return`
  for (var cl : u32 = 0u; cl < ${d}u; cl = cl + 1u) {
    let c = ${D}u + cl;
    if (c < ${n}u) {
      let st = mom[c * 2u + 1u];
      let rm = mom[mom_base + c];
      let q_word = select(stage[s_base + c * ${$t}u], act8_${ee}[a_base + cl * ${ht}u], use_act);
      let yv = unpack4x8unorm(q_word) * rm.w + vec4<f32>(rm.z);
      let fv = vec4<f32>(
        act(yv.x * st.x + st.y),
        act(yv.y * st.x + st.y),
        act(yv.z * st.x + st.y),
        act(yv.w * st.x + st.y)
      );
      feat[c] = ${P}(fv);
    }
  }`};return{initActWgsl:ie,conv0Wgsl:U,prepWgsl:V,flushWgsl:fe,normWgsl:X,convWgsl:Se,clsWgsl:()=>`${M}
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
@group(0) @binding(5) var<storage, read> w16_4 : array<${P}>;
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
  let a_base = row_idx * ${m}u + x4 + ${Ht}u;
  let s_base = ((z & 63u) * 256u + y) * ${A}u + x4;
  let mom_base = ${h}u + (row_idx * 2u + sg) * ${t}u;

  var feat : array<${P}, ${n}>;
${bt(4,ee=>he(ee))}

  let w_cls = cp.w_vec4_off;
  let b_vec4 = cp.bias_off >> 2u;
${xo({chan:n,clsK4:o,nclass:s,V4:P,suf:E,readBiasStmt:"    let bv = qmeta_u[b_vec4 + k4];",biasExpr:ee=>`bv.${["x","y","z","w"][ee]}`,probCfg:g})}
}`,qmetaVec4Len:b,numConvs:c,totalWEffVec4s:$,useUniformWeff:w,csQ:d,halfPass0:L,halfPassConv:!f&&t>=16}}function Hr(e,t,n,s,o,i,r){return Ae(this,null,function*(){var nt,Re;const a=z*z*z,f=r?a*4:a,l=t.dilations.length,c=t.cs/4,g=z*z*c*ht*4,u=(64*z+4)*t.cs*$t*4,m=(t.cs*2+4+(Un+no)*t.cs)*16,x=e.limits||{},A=Math.min((nt=x.maxStorageBufferBindingSize)!=null?nt:1/0,(Re=x.maxBufferSize)!=null?Re:1/0);if(g>A||u>A||m>A||f>A){const ne=Math.ceil(Math.max(g,u,m,f)/1048576);throw new Error(`meshnet_fast_v4: LowMem128 max buffer (${ne} MiB) exceeds device limit (${A>>>20} MiB)`)}const _=ko({cs:t.cs,chan:t.chan,nclass:t.nclass,clsK4:n.clsK4,dilations:t.dilations,activation:t.activation,norm:t.norm,hasF16:s,hasSubgroups32:o,numConvs:l,probCfg:r});console.log(`[WebGPU-V4-128M] ${t.chan}ch(cs=${t.cs})/${t.nclass}cls (${l} convs, ${t.activation}, norm=${t.norm}${r?", prob=3":""}) | ${s?"f16+sterbenz":"f32"} | ${o?"subgroups32":"shared-8KiB"} | ZYCX-4Q+64slice | maxBuf=${(Math.max(g,u,m,f)/1048576).toFixed(1)} MiB`);const h=GPUBufferUsage.STORAGE,v=GPUBufferUsage.UNIFORM,S=GPUBufferUsage.COPY_DST,b=GPUBufferUsage.COPY_SRC,k=z*z*pn,B=k*(s?2:4),$=s?Math.ceil(_.totalWEffVec4s/2)*16:_.totalWEffVec4s*16,w=!!(r&&g>=f),G=`128|${t.cs}|${s?1:0}|${f}|${w?1:0}`,M=go(e,G,()=>{const ne=[],O=On(e,ne),le=O.alloc,Te={inpBuf:le(B,h|S|b),act8_0:le(g,h|S|b),act8_1:le(g,h|S|b),act8_2:le(g,h|S|b),act8_3:le(g,h|S|b),stageBuf:le(u,h),momBuf:le(m,h),labels8Buf:le(f,h|S|b),readbackBuf:le(f,GPUBufferUsage.MAP_READ|S),probPackTmpBuf:w?le(f,h|S|b):null};return{buffers:ne,named:Te,bytes:O.getBytes()}}),{inpBuf:C,act8_0:I,act8_1:E,act8_2:P,act8_3:j,stageBuf:R,momBuf:ie,labels8Buf:se,readbackBuf:L,probPackTmpBuf:U}=M.named,V=[],fe=On(e,V),H=fe.alloc,X=H(s?n.wF16.byteLength:n.wF32.byteLength,h|S),Se=H(n.qmetaF32.byteLength,h|v|S),he=H($,_.useUniformWeff?h|v:h),ze=t.norm==="gn"&&!(i!=null&&i.disableConeSkip),ee=H(Qe*4,v|S),D=H(Qe*4,v|S),N=Array.from({length:l},()=>H(ze?Qe*4:16,h|S)),q=Array.from({length:l-1},()=>H(ze?(Qe+z*z)*4:16,h|S)),re=H(16,v|S),T=H(16,v|S),oe=Array.from({length:l},()=>H(48,v|S)),pe=Array.from({length:l-1},()=>H(16,v|S)),K=Math.max(256,x.minUniformBufferOffsetAlignment||256),Y=K>>>2,te=20,Q=Math.max(1,(l-1)*te),ve=H(Q*K,v|S),ce=new Uint32Array(Q*Y);e.queue.writeBuffer(X,0,s?n.wF16:n.wF32),e.queue.writeBuffer(Se,0,n.qmetaF32);let ke;try{ke=yield ho(e,t,n,s,o,r,_)}catch(ne){for(const O of V)O.destroy();if(V.length=0,M.pooled)ln.get(e)===M&&yn(e);else{for(const O of M.buffers)O.destroy();M.buffers.length=0}throw ne}const{pInit:Ee,pMomFin:qe,pPrepW:Ye,pFlush:Ge,pNorm:Ie,pNormHalo:Je,pCls:He,pConv0:je,pConv:dt}=ke,pt=(ne,O)=>e.createBindGroup({layout:ne,entries:O.map((le,Te)=>({binding:Te,resource:le&&le.buffer?le:{buffer:le}}))}),Ct=pt(Ee.bgl,[I,E,P,j]);{const ne=e.createCommandEncoder(),O=ne.beginComputePass();O.setPipeline(Ee.pipe),O.setBindGroup(0,Ct),O.dispatchWorkgroups(1,z,z),O.end(),e.queue.submit([ne.finish()])}const kt=(_.halfPass0?je.lo:je.main).bgl,Gt=pt(kt,[C,I,E,P,j,R,X,ie,{buffer:Se,offset:0,size:t.cs*16},ee,re]),Et=pt(He.bgl,[I,E,P,j,R,X,ie,se,Se,D,T]),Z=w?H(16,v|S):null,Jt=w?pt(He.bgl,[I,E,P,j,R,X,ie,se,Se,D,Z]):null,Bt=$o({device:e,hasF16:s,nvox:a,outBufBytes:f,inpBuf:C,act8_0:I,labels8Buf:se,readbackBuf:L,pInit:Ee,bgInit:Ct,pCls:He,bgCls:Et,clsUbo:T,packed:n,modelEntry:i,probCfg:r,canGpuProb:w,probSlots:w?{clsUbo1:Z,bgCls1:Jt,pass0HoldBuf:U,y0:I,y1:E,b:P,sup:j}:null,ownedBuffers:V,mkBuf:H}),It=oe.map((ne,O)=>pt(qe.bgl,[X,Se,ie,he,N[O],ne])),Lt=pe.map((ne,O)=>pt(Ie.bgl,[I,E,P,j,R,ie,q[O],ne])),Tt={buffer:ve,offset:0,size:32},y=Array.from({length:l},(ne,O)=>O===0?null:pt(Ge.bgl,[I,E,P,j,R,N[O],Tt])),F=_.halfPassConv?dt.lo:dt.main,W=Array.from({length:l},(ne,O)=>O===0?null:pt(F.bgl,[I,E,P,j,R,ie,he,N[O],Tt])),de=s?new Uint16Array(k):new Float32Array(k),ue=new Uint8Array(z*z),Me=new Uint32Array(Qe),we=new Uint32Array(Qe+z*z),ge=new Uint32Array(12),be=new Float32Array(ge.buffer),$e=new Uint32Array(4),Oe=(ne,O,le,Te,at,Ke,Le,ft)=>{const ae=ne*Y;ce[ae]=O?1:0,ce[ae+1]=le,ce[ae+2]=Te,ce[ae+3]=at,ce[ae+4]=Ke,ce[ae+5]=Le,ce[ae+6]=ft,ce[ae+7]=0};function Fe(ne,O){return Ae(this,null,function*(){if(ne.length!==a)throw new Error(`meshnet_fast_v4 expected ${a} voxels, got ${ne.length}`);const le=t.norm==="gn"&&!(i!=null&&i.disableConeSkip),Te=yield Bt.prepareInput({volume:ne,ioOpts:O,useCone:le,padInputHost:de,headRowHost:ue,hasF16Flag:s}),at=Te.info,Ke=vo(ue,at,t.dilations,le),Le=new Array(l);for(let Ce=0;Ce<l;Ce++){const me=Ke.layers[Ce],J=me.isFull?Qe:me.mainStrips.length,_e=me.isFull||!me.extStrips?0:me.extStrips.length,st=me.haloRows?me.haloRows.length:0;if(Ce===0){!me.isFull&&J>0&&(Me.set(me.mainStrips,0),e.queue.writeBuffer(ee,0,Me.subarray(0,J)),e.queue.writeBuffer(N[0],0,Me.subarray(0,J))),Le[0]={L:me,nMain:J,nExt:_e,nHalo:st};continue}const mt=new Uint32Array(8),ct=new Uint32Array(8),Ue=new Uint32Array(8),lt=new Uint32Array(8);if(!me.isFull){if(J>0){Me.set(me.mainStrips,0);for(let vt=0;vt<J;vt++)ct[me.mainStrips[vt]>>>13]++;let Ze=0;for(let vt=0;vt<8;vt++)mt[vt]=Ze,Ze+=ct[vt]}if(me.mode==="bwd"&&_e>0){const Ze=Array.from({length:8},()=>[]);for(let We=0;We<_e;We++){const Pe=me.extStrips[We];Ze[Pe>>>13].push((We&65535)<<16|Pe)}let vt=J;for(let We=0;We<8;We++){Ue[We]=vt;const Pe=Ze[We];lt[We]=Pe.length;for(let xe=0;xe<Pe.length;xe++)Me[vt++]=Pe[xe]}e.queue.writeBuffer(N[Ce],0,Me.subarray(0,J+_e))}else J>0&&e.queue.writeBuffer(N[Ce],0,Me.subarray(0,J))}const ye=me.mode==="rpure"&&st>0||me.mode==="bwd"&&Ce+1<l,De=us(t.dilations[Ce],ye),Pt=(Ce-1)*te,it=me.bgStrip?me.bgStrip.yWg*4:0,xt=me.bgStrip?me.bgStrip.z:0;for(let Ze=0;Ze<8;Ze++)Oe(Pt+Ze,me.isFull,Ze*32,mt[Ze],Ue[Ze],De,it,xt);for(let Ze=0;Ze<6;Ze++)Oe(Pt+8+Ze,me.isFull,Ze*32,mt[Ze],0,0,0,0),Oe(Pt+14+Ze,!1,Ze*32,Ue[Ze],0,0,0,0);Le[Ce]={L:me,nMain:J,nExt:_e,nHalo:st,mainCount:ct,extCount:lt,layerBaseSlot:Pt}}l>1&&e.queue.writeBuffer(ve,0,ce);let ft=ao(e,i);const ae=[];if(ft==="single"){const Ce=e.createCommandEncoder();Te.runPrePasses(Ce,ae),Ke.clsSkipped&&(Ce.clearBuffer(se,0,f),Ke.clsStrips.length>0&&e.queue.writeBuffer(D,0,Ke.clsStrips));for(let me=0;me<l;me++){const J=Le[me],{L:_e,nMain:st,nHalo:mt}=J,ct=_e.nMomExt||0,Ue=_e.isFull?Qe:_e.normStrips?_e.normStrips.length:0;if(me===0){const ye=_e.isFull?64:1,De=_e.isFull?z:st,Pt=!!(_e.bgStrip&&mt>0);if($e[0]=_e.isFull?1:0,$e[1]=_e.bgStrip?_e.bgStrip.yWg*4:0,$e[2]=_e.bgStrip?_e.bgStrip.z:0,$e[3]=0,e.queue.writeBuffer(re,0,$e),_.halfPass0)for(const[it,xt]of[[je.lo,je.bgLo],[je.hi,je.bgHi]]){const Ze=Ce.beginComputePass();Ze.setBindGroup(0,Gt),De>0&&(Ze.setPipeline(it.pipe),Ze.dispatchWorkgroups(1,ye,De)),Pt&&(Ze.setPipeline(xt.pipe),Ze.dispatchWorkgroups(1,1,1)),Ze.end(),ae.push("conv0")}else{const it=Ce.beginComputePass();it.setBindGroup(0,Gt),De>0&&(it.setPipeline(je.main.pipe),it.dispatchWorkgroups(1,ye,De)),Pt&&(it.setPipeline(je.bg.pipe),it.dispatchWorkgroups(1,1,1)),it.end(),ae.push("conv0")}}else{const ye=dt,De=W[me],Pt=y[me],{mainCount:it,extCount:xt,layerBaseSlot:Ze}=J,vt=_e.mode==="rpure"&&!!_e.bgStrip;for(let We=0;We<8;We++){if(We>=2){const rt=We-2,ut=_e.isFull||it[rt]>0,en=!_e.isFull&&_e.mode==="bwd"&&xt[rt]>0;if(ut||en){const Ne=Ce.beginComputePass();Ne.setPipeline(Ge.pipe),ut&&(Ne.setBindGroup(0,Pt,[(Ze+8+rt)*K]),Ne.dispatchWorkgroups(1,_e.isFull?64:1,_e.isFull?32:it[rt])),en&&(Ne.setBindGroup(0,Pt,[(Ze+14+rt)*K]),Ne.dispatchWorkgroups(1,1,xt[rt])),Ne.end(),ae.push("flushStage")}}const Pe=_e.isFull||it[We]>0,xe=!_e.isFull&&_e.mode==="bwd"&&xt[We]>0,Be=We===0&&vt;if(!Pe&&!xe&&!Be)continue;const yt=[(Ze+We)*K],At=_e.isFull?64:1,St=_e.isFull?32:it[We];if(_.halfPassConv)for(const[rt,ut,en]of[[ye.lo,ye.extLo,ye.bgLo],[ye.hi,ye.extHi,ye.bgHi]]){const Ne=Ce.beginComputePass();Ne.setBindGroup(0,De,yt),Pe&&(Ne.setPipeline(rt.pipe),Ne.dispatchWorkgroups(1,At,St)),xe&&(Ne.setPipeline(ut.pipe),Ne.dispatchWorkgroups(1,1,xt[We])),Be&&(Ne.setPipeline(en.pipe),Ne.dispatchWorkgroups(1,1,1)),Ne.end(),ae.push("convHidden")}else{const rt=Ce.beginComputePass();rt.setBindGroup(0,De,yt),Pe&&(rt.setPipeline(ye.main.pipe),rt.dispatchWorkgroups(1,At,St)),xe&&(rt.setPipeline(ye.ext.pipe),rt.dispatchWorkgroups(1,1,xt[We])),Be&&(rt.setPipeline(ye.bg.pipe),rt.dispatchWorkgroups(1,1,1)),rt.end(),ae.push("convHidden")}}}const lt=me+1<l?n.w0Vec4s+me*n.hiddenVec4PerLayer:0;ge[0]=me*n.metaStride,ge[1]=lt,ge[2]=(me+1)*n.metaStride,ge[3]=me+1<l?1:0,ge[4]=me===0?1:0,ge[5]=_e.isFull?1:0,ge[6]=st,ge[7]=ct*8,be[8]=_e.extWeight||0,ge[9]=0,ge[10]=0,ge[11]=0,e.queue.writeBuffer(oe[me],0,ge);{const ye=Ce.beginComputePass();ye.setBindGroup(0,It[me]),ye.setPipeline(qe.pipe),ye.dispatchWorkgroups(t.cs,1,1),ye.end(),ae.push("momentsPrep")}if(me+1<l){{const De=Ce.beginComputePass();De.setBindGroup(0,It[me]),De.setPipeline(Ye.pipe),De.dispatchWorkgroups(1,1,1),De.end(),ae.push("momentsPrep")}const ye=_e.isFull?0:Ue;if((ye>0||mt>0)&&(ye>0&&we.set(_e.normStrips,0),mt>0&&we.set(_e.haloRows,ye),e.queue.writeBuffer(q[me],0,we.subarray(0,ye+mt))),$e[0]=_e.isFull?1:0,$e[1]=_e.bgStrip?_e.bgStrip.z*z+_e.bgStrip.yWg*4:0,$e[2]=ye,$e[3]=mt,e.queue.writeBuffer(pe[me],0,$e),_e.isFull||Ue>0||mt>0){const De=Ce.beginComputePass();De.setBindGroup(0,Lt[me]),(_e.isFull||Ue>0)&&(De.setPipeline(Ie.pipe),De.dispatchWorkgroups(1,_e.isFull?64:1,_e.isFull?z:Ue)),mt>0&&(De.setPipeline(Je.pipe),De.dispatchWorkgroups(1,Math.ceil(mt/4),1)),De.end(),ae.push("normHalo")}}}return Fe.__passCategories=ae,Bt.finishAndReadback({enc:Ce,schedule:Ke,passCategories:ae,u4Tmp:$e,ioOpts:O})}const ot=Wn(e),tt=typeof(O==null?void 0:O.onProgress)=="function"?O.onProgress:null,zt=fo(Ke,l);let Ft=0,Ot=-1;const Zt=Ce=>{if(!tt)return;const me=Math.min(.99,Ft/zt);let J="";Ce>=0&&Ce!==Ot&&(Ot=Ce,J=`Layer ${Ce+1}/${l}`),tt(me,J)},gt=co(e,e.__v4MsPerStrip||.12,Zt);let Xe=e.createCommandEncoder();Te.runPrePasses(Xe,ae),Ke.clsSkipped&&(Xe.clearBuffer(se,0,f),Ke.clsStrips.length>0&&e.queue.writeBuffer(D,0,Ke.clsStrips));for(let Ce=0;Ce<l;Ce++){const me=Le[Ce],{L:J,nMain:_e,nHalo:st}=me,mt=J.nMomExt||0,ct=J.isFull?Qe:J.normStrips?J.normStrips.length:0,Ue=_s(J,Ce,l);if(Ce===0){const ye=J.isFull?64:1,De=J.isFull?z:_e,Pt=!!(J.bgStrip&&st>0);if($e[0]=J.isFull?1:0,$e[1]=J.bgStrip?J.bgStrip.yWg*4:0,$e[2]=J.bgStrip?J.bgStrip.z:0,$e[3]=0,e.queue.writeBuffer(re,0,$e),_.halfPass0)for(const[it,xt]of[[je.lo,je.bgLo],[je.hi,je.bgHi]]){const Ze=Xe.beginComputePass();Ze.setBindGroup(0,Gt),De>0&&(Ze.setPipeline(it.pipe),Ze.dispatchWorkgroups(1,ye,De)),Pt&&(Ze.setPipeline(xt.pipe),Ze.dispatchWorkgroups(1,1,1)),Ze.end(),ae.push("conv0")}else{const it=Xe.beginComputePass();it.setBindGroup(0,Gt),De>0&&(it.setPipeline(je.main.pipe),it.dispatchWorkgroups(1,ye,De)),Pt&&(it.setPipeline(je.bg.pipe),it.dispatchWorkgroups(1,1,1)),it.end(),ae.push("conv0")}ft==="calibrate"?(e.queue.submit([Xe.finish()]),Xe=e.createCommandEncoder()):ft==="paced"&&(Ft+=Ue.convWork,Xe=yield gt.submitChunk(Xe,Ue.convWork,0,{forceUiYield:!0}))}else{const ye=dt,De=W[Ce],Pt=y[Ce],{mainCount:it,extCount:xt,layerBaseSlot:Ze}=me,vt=J.mode==="rpure"&&!!J.bgStrip;let We=0;for(let Pe=0;Pe<8;Pe++){if(Pe>=2){const At=Pe-2,St=J.isFull||it[At]>0,rt=!J.isFull&&J.mode==="bwd"&&xt[At]>0;if(St||rt){const ut=Xe.beginComputePass();ut.setPipeline(Ge.pipe),St&&(ut.setBindGroup(0,Pt,[(Ze+8+At)*K]),ut.dispatchWorkgroups(1,J.isFull?64:1,J.isFull?32:it[At])),rt&&(ut.setBindGroup(0,Pt,[(Ze+14+At)*K]),ut.dispatchWorkgroups(1,1,xt[At])),ut.end(),ae.push("flushStage")}}const xe=J.isFull||it[Pe]>0,Be=!J.isFull&&J.mode==="bwd"&&xt[Pe]>0,yt=Pe===0&&vt;if(xe||Be||yt){const At=[(Ze+Pe)*K],St=J.isFull?64:1,rt=J.isFull?32:it[Pe];if(_.halfPassConv)for(const[ut,en,Ne]of[[ye.lo,ye.extLo,ye.bgLo],[ye.hi,ye.extHi,ye.bgHi]]){const Ve=Xe.beginComputePass();Ve.setBindGroup(0,De,At),xe&&(Ve.setPipeline(ut.pipe),Ve.dispatchWorkgroups(1,St,rt)),Be&&(Ve.setPipeline(en.pipe),Ve.dispatchWorkgroups(1,1,xt[Pe])),yt&&(Ve.setPipeline(Ne.pipe),Ve.dispatchWorkgroups(1,1,1)),Ve.end(),ae.push("convHidden")}else{const ut=Xe.beginComputePass();ut.setBindGroup(0,De,At),xe&&(ut.setPipeline(ye.main.pipe),ut.dispatchWorkgroups(1,St,rt)),Be&&(ut.setPipeline(ye.ext.pipe),ut.dispatchWorkgroups(1,1,xt[Pe])),yt&&(ut.setPipeline(ye.bg.pipe),ut.dispatchWorkgroups(1,1,1)),ut.end(),ae.push("convHidden")}We+=(xe?J.isFull?2048:it[Pe]:0)+(Be?xt[Pe]:0)}if(ft==="calibrate"&&(We>=512||Pe===7&&We>0)){const At=performance.now();e.queue.submit([Xe.finish()]),yield e.queue.onSubmittedWorkDone();const St=performance.now()-At;if(Xe=e.createCommandEncoder(),Ft+=We,We>=512){const rt=St/We,ut=rt*Qe;e.__v4WinCalibrated=!0,gt.setMsPerStrip(rt),!ot.isWindowsSharedIgpu&&ut<so?(e.__v4WinFast=!0,ft="pipelined",console.log(`[WebGPU-V4-128M] Windows GPU calibration: estFullLayer=${ut.toFixed(1)}ms -> unthrottled pipelined mode`)):(e.__v4WinFast=!1,ft="paced",console.log(`[WebGPU-V4-128M] Windows GPU calibration: estFullLayer=${ut.toFixed(1)}ms -> TDR-safe 2-in-flight paced mode`),Zt(Ce))}We=0}else ft==="paced"&&We>0&&(We*gt.getMsPerStrip()>=oo*.75||Pe===7)&&(Ft+=We,Xe=yield gt.submitChunk(Xe,We,Ce),We=0)}}const lt=Ce+1<l?n.w0Vec4s+Ce*n.hiddenVec4PerLayer:0;ge[0]=Ce*n.metaStride,ge[1]=lt,ge[2]=(Ce+1)*n.metaStride,ge[3]=Ce+1<l?1:0,ge[4]=Ce===0?1:0,ge[5]=J.isFull?1:0,ge[6]=_e,ge[7]=mt*8,be[8]=J.extWeight||0,ge[9]=0,ge[10]=0,ge[11]=0,e.queue.writeBuffer(oe[Ce],0,ge);{const ye=Xe.beginComputePass();ye.setBindGroup(0,It[Ce]),ye.setPipeline(qe.pipe),ye.dispatchWorkgroups(t.cs,1,1),ye.end(),ae.push("momentsPrep")}if(Ce+1<l){{const De=Xe.beginComputePass();De.setBindGroup(0,It[Ce]),De.setPipeline(Ye.pipe),De.dispatchWorkgroups(1,1,1),De.end(),ae.push("momentsPrep")}const ye=J.isFull?0:ct;if((ye>0||st>0)&&(ye>0&&we.set(J.normStrips,0),st>0&&we.set(J.haloRows,ye),e.queue.writeBuffer(q[Ce],0,we.subarray(0,ye+st))),$e[0]=J.isFull?1:0,$e[1]=J.bgStrip?J.bgStrip.z*z+J.bgStrip.yWg*4:0,$e[2]=ye,$e[3]=st,e.queue.writeBuffer(pe[Ce],0,$e),J.isFull||ct>0||st>0){const De=Xe.beginComputePass();De.setBindGroup(0,Lt[Ce]),(J.isFull||ct>0)&&(De.setPipeline(Ie.pipe),De.dispatchWorkgroups(1,J.isFull?64:1,J.isFull?z:ct)),st>0&&(De.setPipeline(Je.pipe),De.dispatchWorkgroups(1,Math.ceil(st/4),1)),De.end(),ae.push("normHalo")}}ft==="pipelined"?(e.queue.submit([Xe.finish()]),Xe=e.createCommandEncoder()):ft==="calibrate"?(e.queue.submit([Xe.finish()]),yield e.queue.onSubmittedWorkDone(),Xe=e.createCommandEncoder(),Ft+=(Ce===0?Ue.convWork:0)+Ue.normWork,Ce===l-1&&!e.__v4WinCalibrated&&(e.__v4WinCalibrated=!0,e.__v4WinFast=!ot.isWindowsSharedIgpu)):(Ft+=Ue.normWork,Xe=yield gt.submitChunk(Xe,Ue.normWork,Ce))}return ft==="paced"&&(yield gt.waitBeforeFinalSubmit()),Fe.__passCategories=ae,Bt.finishAndReadback({enc:Xe,schedule:Ke,passCategories:ae,u4Tmp:$e,ioOpts:O,paced:ft==="paced",onProgress:tt})})}return Bt.warmupIoPipelines(),Fe.dispose=({keepSharedWorkspace:ne=!1}={})=>{Bt.dispose();for(const O of V)O.destroy();if(V.length=0,fe.resetBytes(),M.pooled)ne?M.inUse=!1:ln.get(e)===M&&yn(e);else{for(const O of M.buffers)O.destroy();M.buffers.length=0}},Fe.gpuBytes=()=>M.bytes+fe.getBytes(),Fe.__passCategories=[],Fe.__coneInfo=()=>({paddedVox:k,actMiB:g/1048576,mode:"LowMem128"}),Fe.kernels="v4-int8",Fe})}const Po=!0;function ws(o,i,r){return Ae(this,arguments,function*(e,t,n,s={}){ls++;try{return yield jr(e,t,n,s)}finally{ls--}})}function jr(o,i,r){return Ae(this,arguments,function*(e,t,n,s={}){var Ft,Ot,Zt,gt,Xe,Ce;const a=t instanceof Uint8Array?t:new Uint8Array(t),f=Js(a.buffer.slice(a.byteOffset,a.byteOffset+a.byteLength)),l=eo(f);s!=null&&s.classifierBias&&l.classifier&&(l.classifier.bias=Float32Array.from(s.classifierBias));const c=gs(s),g=(s==null?void 0:s.dilations)||(c==null?void 0:c.dilations)||(l.convs.length===25?[16,8,4,2,1,16,8,4,2,1,16,8,4,2,1,16,8,4,2,1,16,8,4,2,1]:l.convs.length===9?[1,2,4,8,16,8,4,2,1]:is),d=(s==null?void 0:s.activation)||(c==null?void 0:c.activation)||(l.affines.length||l.convs.length>=13?"gelu_tanh":"relu"),u=l.convs[0].outC,p=u>8?Math.ceil(u/8)*8:Math.ceil(u/4)*4,m=to(l,{nx:z,ny:z,nz:z,cs:p,activation:d,dilations:g}),x=Tr(a,l,m,s),A=(s==null?void 0:s.outputType)==="probability"?Fr(s,m.nclass):null,_=!!((Ot=(Ft=e.features)==null?void 0:Ft.has)!=null&&Ot.call(Ft,"shader-f16"))&&!(s!=null&&s.disableF16),h=e.__adapterInfo||e.adapterInfo||{},v=!!((gt=(Zt=e.features)==null?void 0:Zt.has)!=null&&gt.call(Zt,"subgroups"))&&h.subgroupMinSize===32&&h.subgroupMaxSize===32&&!(s!=null&&s.disableSubgroups),S=z*z*z,b=A?S*4:S,k=m.cs>=16,B=k?m.cs/2:m.cs,$=z*z*B*ht*4,w=z*z*B*$t*4,G=e.limits||{},M=Math.min((Xe=G.maxStorageBufferBindingSize)!=null?Xe:1/0,(Ce=G.maxBufferSize)!=null?Ce:1/0),C=lo(e,m,s);if((s!=null&&s.forceLowMem128||C||$>M||b>M)&&m.cs>=8&&m.cs%4===0)return Hr(e,m,x,_,v,s,A);if($>M||b>M){const me=Math.max($,b)>>>20;throw new Error(`meshnet_fast_v4: buffer (${me} MiB) exceeds device limit (${M>>>20} MiB)`)}const I=io(e,s),E=So({cs:m.cs,chan:m.chan,nclass:m.nclass,clsK4:x.clsK4,dilations:m.dilations,activation:m.activation,norm:m.norm,hasF16:_,hasSubgroups32:v,splitHalves:k,probCfg:A,chunkableStd:I});console.log(`[WebGPU-V4] ${m.chan}ch(cs=${m.cs})/${m.nclass}cls (${m.dilations.length} convs, ${m.activation}, norm=${m.norm}${A?", prob=3":""}) | ${_?"f16+sterbenz":"f32"} | ${v?"subgroups32":"shared-8KiB"} | ZYCX-pad80 | maxBuf=${(Math.max($,b)/1048576).toFixed(1)} MiB`);const P=GPUBufferUsage.STORAGE,j=GPUBufferUsage.COPY_DST,R=GPUBufferUsage.COPY_SRC,ie=z*z*pn,se=ie*(_?2:4),L=Un*m.cs*16,U=no*m.cs*16,V=(m.cs*2+4)*16,fe=_?Math.ceil(E.totalWEffVec4s/2)*16:E.totalWEffVec4s*16,H=`std|${m.cs}|${k?1:0}|${_?1:0}|${b}`,X=go(e,H,()=>{const me=[],J=On(e,me),_e=J.alloc,st={inpBuf:_e(se,P|j|R),act8_0:_e($,P|j|R),act8_1:_e(k?$:16,P|j|R),y8_0:_e(w,P|j|R),y8_1:_e(k?w:16,P|j|R),momMainBuf:_e(L,P),momExtBuf:_e(U,P),momStatsBuf:_e(V,P),labels8Buf:_e(b,P|j|R),readbackBuf:_e(b,GPUBufferUsage.MAP_READ|j)};return{buffers:me,named:st,bytes:J.getBytes()}}),{inpBuf:Se,act8_0:he,act8_1:ze,y8_0:ee,y8_1:D,momMainBuf:N,momExtBuf:q,momStatsBuf:re,labels8Buf:T,readbackBuf:oe}=X.named,pe=[],K=On(e,pe),Y=K.alloc,te=Y(_?x.wF16.byteLength:x.wF32.byteLength,P|j),Q=Y(x.qmetaF32.byteLength,P|j),ve=Y(fe,E.useUniformWeff?P|GPUBufferUsage.UNIFORM:P),ce=m.dilations.length,ke=m.norm==="gn"&&!(s!=null&&s.disableConeSkip),Ee=Array.from({length:ce},()=>Y(ke?Qe*4:16,P|j)),qe=Array.from({length:ce-1},()=>Y(ke?(Qe+z*z)*4:16,P|j)),Ye=Y(ke?Qe*4:16,P|j),Ge=Y(16,GPUBufferUsage.UNIFORM|j),Ie=Y(16,GPUBufferUsage.UNIFORM|j),Je=Array.from({length:ce},()=>Y(48,GPUBufferUsage.UNIFORM|j)),He=Array.from({length:ce-1},()=>Y(16,GPUBufferUsage.UNIFORM|j)),je=Math.max(256,G.minUniformBufferOffsetAlignment||256),dt=je>>>2,pt=E.chunkableStd?Math.max(1,(ce-1)*Zn):0,Ct=E.chunkableStd?Y(pt*je,GPUBufferUsage.UNIFORM|j):null,kt=E.chunkableStd?new Uint32Array(pt*dt):null,Gt=E.chunkableStd?null:Array.from({length:ce},()=>Y(16,GPUBufferUsage.UNIFORM|j));e.queue.writeBuffer(te,0,_?x.wF16:x.wF32),e.queue.writeBuffer(Q,0,x.qmetaF32);let Et;try{Et=yield wo(e,m,x,_,v,k,A,E)}catch(me){for(const J of pe)J.destroy();if(pe.length=0,X.pooled)ln.get(e)===X&&yn(e);else{for(const J of X.buffers)J.destroy();X.buffers.length=0}throw me}const{pInit:Z,pMomFin:Jt,pPrepW:Bt,pNorm:It,pNormHalo:Lt,pCls:Tt,pConv0:y,pConv:F}=Et,W=(me,J)=>e.createBindGroup({layout:me,entries:J.map((_e,st)=>({binding:st,resource:_e&&_e.buffer?_e:{buffer:_e}}))}),de=W(Z.bgl,[he,ze]);{const me=e.createCommandEncoder(),J=me.beginComputePass();J.setPipeline(Z.pipe),J.setBindGroup(0,de),J.dispatchWorkgroups(1,z,z),J.end(),e.queue.submit([me.finish()])}const ue=(E.halfPass0?y.lo:y.main).bgl,Me=W(ue,[Se,ee,D,te,Q,N,q,Ee[0],Ge]),we=W(Tt.bgl,[ee,D,te,Q,N,re,T,Ye,Ie]),ge=!!(A&&k&&$>=b&&w>=b),be=ge?Y(16,GPUBufferUsage.UNIFORM|j):null,$e=ge?W(Tt.bgl,[ee,D,te,Q,N,re,T,Ye,be]):null,Oe=$o({device:e,hasF16:_,nvox:S,outBufBytes:b,inpBuf:Se,act8_0:he,labels8Buf:T,readbackBuf:oe,pInit:Z,bgInit:de,pCls:Tt,bgCls:we,clsUbo:Ie,packed:x,modelEntry:s,probCfg:A,canGpuProb:ge,probSlots:ge?{clsUbo1:be,bgCls1:$e,pass0HoldBuf:he,y0:ee,y1:D,b:ze,sup:he}:null,ownedBuffers:pe,mkBuf:Y}),Fe=Je.map((me,J)=>W(Jt.bgl,[te,Q,N,q,re,ve,Ee[J],me])),nt=He.map((me,J)=>W(It.bgl,[he,ze,ee,D,N,q,re,qe[J],me])),Re=E.chunkableStd?{buffer:Ct,offset:0,size:32}:null,ne=E.halfPassConv?F.lo:F.main,O=Array.from({length:ce},(me,J)=>J===0?null:W(ne.bgl,[he,ze,ee,D,N,q,ve,Ee[J],E.chunkableStd?Re:Gt[J]])),le=(me,J,_e,st,mt,ct)=>{const Ue=me*dt;kt[Ue]=J?1:0,kt[Ue+1]=_e,kt[Ue+2]=st,kt[Ue+3]=0,kt[Ue+4]=mt,kt[Ue+5]=ct,kt[Ue+6]=0,kt[Ue+7]=0},Te=(me,J,_e,st,mt,ct,Ue,lt)=>{if(!(ct<=0&&Ue<=0))if(E.halfPassConv){{const ye=me.beginComputePass();st?ye.setBindGroup(0,_e,st):ye.setBindGroup(0,_e),ct>0&&(ye.setPipeline(J.lo.pipe),ye.dispatchWorkgroups(1,mt,ct)),Ue>0&&(ye.setPipeline(J.extLo.pipe),ye.dispatchWorkgroups(1,1,Ue)),ye.end(),lt.push("convHidden")}{const ye=me.beginComputePass();st?ye.setBindGroup(0,_e,st):ye.setBindGroup(0,_e),ct>0&&(ye.setPipeline(J.hi.pipe),ye.dispatchWorkgroups(1,mt,ct)),Ue>0&&(ye.setPipeline(J.extHi.pipe),ye.dispatchWorkgroups(1,1,Ue)),ye.end(),lt.push("convHidden")}}else{const ye=me.beginComputePass();st?ye.setBindGroup(0,_e,st):ye.setBindGroup(0,_e),ct>0&&(ye.setPipeline(J.main.pipe),ye.dispatchWorkgroups(1,mt,ct)),Ue>0&&(ye.setPipeline(J.ext.pipe),ye.dispatchWorkgroups(1,1,Ue)),ye.end(),lt.push("convHidden")}},at=_?new Uint16Array(ie):new Float32Array(ie),Ke=new Uint8Array(z*z),Le=new Uint32Array(Qe),ft=new Uint32Array(Qe+z*z),ae=new Uint32Array(12),ot=new Float32Array(ae.buffer),tt=new Uint32Array(4);function zt(me,J){return Ae(this,null,function*(){if(me.length!==S)throw new Error(`meshnet_fast_v4 expected ${S} voxels, got ${me.length}`);const _e=m.norm==="gn"&&!(s!=null&&s.disableConeSkip),st=yield Oe.prepareInput({volume:me,ioOpts:J,useCone:_e,padInputHost:at,headRowHost:Ke,hasF16Flag:_}),mt=st.info,ct=vo(Ke,mt,m.dilations,_e);let Ue=ao(e,s);const lt=[];if(Ue==="single"&&!E.chunkableStd){const Pe=e.createCommandEncoder();st.runPrePasses(Pe,lt),ct.clsSkipped&&(Pe.clearBuffer(T,0,b),ct.clsStrips.length>0&&e.queue.writeBuffer(Ye,0,ct.clsStrips));for(let xe=0;xe<ce;xe++){const Be=ct.layers[xe],yt=Be.isFull?Qe:Be.mainStrips.length,At=Be.isFull||!Be.extStrips?0:Be.extStrips.length,St=Be.nMomExt||0,rt=Be.haloRows?Be.haloRows.length:0,ut=Be.isFull?Qe:Be.normStrips?Be.normStrips.length:0;if(!Be.isFull&&(yt>0||At>0)&&(yt>0&&Le.set(Be.mainStrips,0),At>0&&Le.set(Be.extStrips,yt),e.queue.writeBuffer(Ee[xe],0,Le.subarray(0,yt+At))),xe===0){const Ne=Be.isFull?64:1,Ve=Be.isFull?z:yt,jt=!!(Be.bgStrip&&rt>0);if(tt[0]=Be.isFull?1:0,tt[1]=Be.bgStrip?Be.bgStrip.yWg*4:0,tt[2]=Be.bgStrip?Be.bgStrip.z:0,tt[3]=0,e.queue.writeBuffer(Ge,0,tt),E.halfPass0){{const et=Pe.beginComputePass();et.setBindGroup(0,Me),Ve>0&&(et.setPipeline(y.lo.pipe),et.dispatchWorkgroups(1,Ne,Ve)),jt&&(et.setPipeline(y.bgLo.pipe),et.dispatchWorkgroups(1,1,1)),et.end(),lt.push("conv0")}{const et=Pe.beginComputePass();et.setBindGroup(0,Me),Ve>0&&(et.setPipeline(y.hi.pipe),et.dispatchWorkgroups(1,Ne,Ve)),jt&&(et.setPipeline(y.bgHi.pipe),et.dispatchWorkgroups(1,1,1)),et.end(),lt.push("conv0")}}else{const et=Pe.beginComputePass();et.setBindGroup(0,Me),Ve>0&&(et.setPipeline(y.main.pipe),et.dispatchWorkgroups(1,Ne,Ve)),jt&&(et.setPipeline(y.bg.pipe),et.dispatchWorkgroups(1,1,1)),et.end(),lt.push("conv0")}}else{const Ne=m.dilations[xe],Ve=O[xe],jt=Be.isFull?64:1,et=Be.isFull?z:yt,Dn=Be.mode==="rpure"&&rt>0||Be.mode==="bwd"&&xe+1<ce;tt[0]=Be.isFull?1:0,tt[1]=yt,tt[2]=us(Ne,Dn),tt[3]=0,e.queue.writeBuffer(Gt[xe],0,tt),Te(Pe,F,Ve,null,jt,et,At,lt)}const en=xe+1<ce?x.w0Vec4s+xe*x.hiddenVec4PerLayer:0;ae[0]=xe*x.metaStride,ae[1]=en,ae[2]=(xe+1)*x.metaStride,ae[3]=xe+1<ce?1:0,ae[4]=xe===0?1:0,ae[5]=Be.isFull?1:0,ae[6]=yt,ae[7]=St*8,ot[8]=Be.extWeight||0,ae[9]=0,ae[10]=0,ae[11]=0,e.queue.writeBuffer(Je[xe],0,ae);{const Ne=Pe.beginComputePass();Ne.setBindGroup(0,Fe[xe]),Ne.setPipeline(Jt.pipe),Ne.dispatchWorkgroups(m.cs,1,1),Ne.end(),lt.push("momentsPrep")}if(xe+1<ce){{const Ve=Pe.beginComputePass();Ve.setBindGroup(0,Fe[xe]),Ve.setPipeline(Bt.pipe),Ve.dispatchWorkgroups(1,1,1),Ve.end(),lt.push("momentsPrep")}const Ne=Be.isFull?0:ut;if((Ne>0||rt>0)&&(Ne>0&&ft.set(Be.normStrips,0),rt>0&&ft.set(Be.haloRows,Ne),e.queue.writeBuffer(qe[xe],0,ft.subarray(0,Ne+rt))),tt[0]=Be.isFull?1:0,tt[1]=Be.bgStrip?Be.bgStrip.z*z+Be.bgStrip.yWg*4:0,tt[2]=Ne,tt[3]=rt,e.queue.writeBuffer(He[xe],0,tt),Be.isFull||ut>0||rt>0){const Ve=Pe.beginComputePass();Ve.setBindGroup(0,nt[xe]),(Be.isFull||ut>0)&&(Ve.setPipeline(It.pipe),Ve.dispatchWorkgroups(1,Be.isFull?64:1,Be.isFull?z:ut)),rt>0&&(Ve.setPipeline(Lt.pipe),Ve.dispatchWorkgroups(1,Math.ceil(rt/4),1)),Ve.end(),lt.push("normHalo")}}}return zt.__passCategories=lt,Oe.finishAndReadback({enc:Pe,schedule:ct,passCategories:lt,u4Tmp:tt,ioOpts:J})}const ye=Wn(e),De=typeof(J==null?void 0:J.onProgress)=="function"?J.onProgress:null,Pt=fo(ct,ce);let it=0,xt=-1;const Ze=Pe=>{if(!De)return;const xe=Math.min(.99,it/Pt);let Be="";Pe>=0&&Pe!==xt&&(xt=Pe,Be=`Layer ${Pe+1}/${ce}`),De(xe,Be)},vt=co(e,e.__v4MsPerStrip||.12,Ze);let We=e.createCommandEncoder();st.runPrePasses(We,lt),ct.clsSkipped&&(We.clearBuffer(T,0,b),ct.clsStrips.length>0&&e.queue.writeBuffer(Ye,0,ct.clsStrips));for(let Pe=0;Pe<ce;Pe++){const xe=ct.layers[Pe],Be=xe.isFull?Qe:xe.mainStrips.length,yt=xe.isFull||!xe.extStrips?0:xe.extStrips.length,At=xe.nMomExt||0,St=xe.haloRows?xe.haloRows.length:0,rt=xe.isFull?Qe:xe.normStrips?xe.normStrips.length:0,ut=_s(xe,Pe,ce);if(!xe.isFull&&(Be>0||yt>0)&&(Be>0&&Le.set(xe.mainStrips,0),yt>0&&Le.set(xe.extStrips,Be),e.queue.writeBuffer(Ee[Pe],0,Le.subarray(0,Be+yt))),Pe===0){const Ne=xe.isFull?64:1,Ve=xe.isFull?z:Be,jt=!!(xe.bgStrip&&St>0);if(tt[0]=xe.isFull?1:0,tt[1]=xe.bgStrip?xe.bgStrip.yWg*4:0,tt[2]=xe.bgStrip?xe.bgStrip.z:0,tt[3]=0,e.queue.writeBuffer(Ge,0,tt),E.halfPass0){{const et=We.beginComputePass();et.setBindGroup(0,Me),Ve>0&&(et.setPipeline(y.lo.pipe),et.dispatchWorkgroups(1,Ne,Ve)),jt&&(et.setPipeline(y.bgLo.pipe),et.dispatchWorkgroups(1,1,1)),et.end(),lt.push("conv0")}{const et=We.beginComputePass();et.setBindGroup(0,Me),Ve>0&&(et.setPipeline(y.hi.pipe),et.dispatchWorkgroups(1,Ne,Ve)),jt&&(et.setPipeline(y.bgHi.pipe),et.dispatchWorkgroups(1,1,1)),et.end(),lt.push("conv0")}}else{const et=We.beginComputePass();et.setBindGroup(0,Me),Ve>0&&(et.setPipeline(y.main.pipe),et.dispatchWorkgroups(1,Ne,Ve)),jt&&(et.setPipeline(y.bg.pipe),et.dispatchWorkgroups(1,1,1)),et.end(),lt.push("conv0")}Ue==="calibrate"?(e.queue.submit([We.finish()]),We=e.createCommandEncoder()):Ue==="paced"&&(it+=ut.convWork,We=yield vt.submitChunk(We,ut.convWork,0,{forceUiYield:!0}))}else{const Ne=m.dilations[Pe],Ve=O[Pe],jt=xe.isFull?64:1,et=xe.isFull?z:Be,Dn=xe.mode==="rpure"&&St>0||xe.mode==="bwd"&&Pe+1<ce,Bn=us(Ne,Dn);if(!E.chunkableStd)tt[0]=xe.isFull?1:0,tt[1]=Be,tt[2]=Bn,tt[3]=0,e.queue.writeBuffer(Gt[Pe],0,tt),Te(We,F,Ve,null,jt,et,yt,lt);else if(Ue==="pipelined"||Ue==="single"){const Xt=(Pe-1)*Zn;le(Xt,xe.isFull,Be,Bn,0,0),e.queue.writeBuffer(Ct,Xt*je,kt.subarray(Xt*dt,(Xt+1)*dt)),Te(We,F,Ve,[Xt*je],jt,et,yt,lt)}else{const Xt=(Pe-1)*Zn,Vn=Ue==="calibrate"?1024:Math.max(256,Math.min(4096,Math.round(oo/Math.max(.005,vt.getMsPerStrip())))),xn=[];let zn=0;if(xe.isFull){const nn=Math.max(4,Math.min(64,Math.round(Vn/64)));for(let Nt=0;Nt<z;Nt+=nn){const Wt=Math.min(nn,z-Nt),sn=Xt+zn++;le(sn,!0,Be,Bn,Nt,0),xn.push({slotIdx:sn,mainY:64,mainCountZ:Wt,extCountZ:0,strips:Wt*64})}}else{const nn=Math.max(256,Vn);for(let Wt=0;Wt<Be;Wt+=nn){const sn=Math.min(nn,Be-Wt),gn=Xt+zn++;le(gn,!1,Be,Bn,Wt,0),xn.push({slotIdx:gn,mainY:1,mainCountZ:sn,extCountZ:0,strips:sn})}const Nt=Math.max(256,Vn);for(let Wt=0;Wt<yt;Wt+=Nt){const sn=Math.min(Nt,yt-Wt),gn=Xt+zn++;le(gn,!1,Be,Bn,0,Wt),xn.push({slotIdx:gn,mainY:1,mainCountZ:0,extCountZ:sn,strips:sn})}}zn>0&&e.queue.writeBuffer(Ct,Xt*je,kt.subarray(Xt*dt,(Xt+zn)*dt));let tn=0;for(let nn=0;nn<xn.length;nn++){const Nt=xn[nn];if(Te(We,F,Ve,[Nt.slotIdx*je],Nt.mainY,Nt.mainCountZ,Nt.extCountZ,lt),Ue==="pipelined")continue;tn+=Nt.strips;const Wt=nn===xn.length-1;if(Ue==="calibrate"&&(tn>=512||Wt&&tn>0)){const sn=performance.now();e.queue.submit([We.finish()]),yield e.queue.onSubmittedWorkDone();const gn=performance.now()-sn;if(We=e.createCommandEncoder(),it+=tn,tn>=512){const xs=gn/tn,Hn=xs*Qe;e.__v4WinCalibrated=!0,vt.setMsPerStrip(xs),!ye.isWindowsSharedIgpu&&Hn<so?(e.__v4WinFast=!0,Ue="pipelined",console.log(`[WebGPU-V4] Windows GPU calibration: estFullLayer=${Hn.toFixed(1)}ms -> unthrottled pipelined mode`)):(e.__v4WinFast=!1,Ue="paced",console.log(`[WebGPU-V4] Windows GPU calibration: estFullLayer=${Hn.toFixed(1)}ms -> TDR-safe 2-in-flight paced mode`),Ze(Pe))}tn=0}else Ue==="paced"&&(it+=tn,We=yield vt.submitChunk(We,tn,Pe),tn=0)}}}const en=Pe+1<ce?x.w0Vec4s+Pe*x.hiddenVec4PerLayer:0;ae[0]=Pe*x.metaStride,ae[1]=en,ae[2]=(Pe+1)*x.metaStride,ae[3]=Pe+1<ce?1:0,ae[4]=Pe===0?1:0,ae[5]=xe.isFull?1:0,ae[6]=Be,ae[7]=At*8,ot[8]=xe.extWeight||0,ae[9]=0,ae[10]=0,ae[11]=0,e.queue.writeBuffer(Je[Pe],0,ae);{const Ne=We.beginComputePass();Ne.setBindGroup(0,Fe[Pe]),Ne.setPipeline(Jt.pipe),Ne.dispatchWorkgroups(m.cs,1,1),Ne.end(),lt.push("momentsPrep")}if(Pe+1<ce){{const Ve=We.beginComputePass();Ve.setBindGroup(0,Fe[Pe]),Ve.setPipeline(Bt.pipe),Ve.dispatchWorkgroups(1,1,1),Ve.end(),lt.push("momentsPrep")}const Ne=xe.isFull?0:rt;if((Ne>0||St>0)&&(Ne>0&&ft.set(xe.normStrips,0),St>0&&ft.set(xe.haloRows,Ne),e.queue.writeBuffer(qe[Pe],0,ft.subarray(0,Ne+St))),tt[0]=xe.isFull?1:0,tt[1]=xe.bgStrip?xe.bgStrip.z*z+xe.bgStrip.yWg*4:0,tt[2]=Ne,tt[3]=St,e.queue.writeBuffer(He[Pe],0,tt),xe.isFull||rt>0||St>0){const Ve=We.beginComputePass();Ve.setBindGroup(0,nt[Pe]),(xe.isFull||rt>0)&&(Ve.setPipeline(It.pipe),Ve.dispatchWorkgroups(1,xe.isFull?64:1,xe.isFull?z:rt)),St>0&&(Ve.setPipeline(Lt.pipe),Ve.dispatchWorkgroups(1,Math.ceil(St/4),1)),Ve.end(),lt.push("normHalo")}}if(Ue==="pipelined")e.queue.submit([We.finish()]),We=e.createCommandEncoder();else if(Ue==="calibrate")e.queue.submit([We.finish()]),yield e.queue.onSubmittedWorkDone(),We=e.createCommandEncoder(),it+=(Pe===0||!E.chunkableStd?ut.convWork:0)+ut.normWork,Pe===ce-1&&!e.__v4WinCalibrated&&(e.__v4WinCalibrated=!0,e.__v4WinFast=!ye.isWindowsSharedIgpu);else if(Ue!=="single"){const Ne=(!E.chunkableStd&&Pe>0?ut.convWork:0)+ut.normWork;it+=Ne,We=yield vt.submitChunk(We,Ne,Pe)}}return Ue==="paced"&&(yield vt.waitBeforeFinalSubmit()),zt.__passCategories=lt,Oe.finishAndReadback({enc:We,schedule:ct,passCategories:lt,u4Tmp:tt,ioOpts:J,paced:Ue==="paced",onProgress:De})})}return Oe.warmupIoPipelines(),zt.dispose=({keepSharedWorkspace:me=!1}={})=>{Oe.dispose();for(const J of pe)J.destroy();if(pe.length=0,K.resetBytes(),X.pooled)me?X.inUse=!1:ln.get(e)===X&&yn(e);else{for(const J of X.buffers)J.destroy();X.buffers.length=0}},zt.gpuBytes=()=>X.bytes+K.getBytes(),zt.__passCategories=[],zt.__coneInfo=()=>({paddedVox:ie,actMiB:$/1048576}),zt.kernels="v4-int8",zt})}function vs(e){return Ae(this,null,function*(){var f,l,c,g,d,u;if(!e)return;const t=()=>ls>0||!!e.__isLost;if(t())return;const n=!!((l=(f=e.features)==null?void 0:f.has)!=null&&l.call(f,"shader-f16")),s=e.__adapterInfo||e.adapterInfo||{},o=!!((g=(c=e.features)==null?void 0:c.has)!=null&&g.call(c,"subgroups"))&&s.subgroupMinSize===32&&s.subgroupMaxSize===32,i=e.limits||{},r=Math.min((d=i.maxStorageBufferBindingSize)!=null?d:1/0,(u=i.maxBufferSize)!=null?u:1/0);if(yield an(e,n?"prep_in_u8_f16":"prep_in_u8_f32",()=>fs(!0,n),"main",["read-only-storage","storage","uniform"]),t()||(yield an(e,"transpose_u8_v4",_o,"main",["read-only-storage","storage"]),t()))return;const a=[{chan:24,cs:24,nclass:0,dilations:is,activation:"gelu_tanh",norm:"gn"},{chan:15,cs:16,nclass:0,dilations:[16,8,4,2,1],activation:"gelu_tanh",norm:"gn"},{chan:16,cs:16,nclass:0,dilations:is,activation:"gelu_tanh",norm:"gn"}];for(const p of a){if(t())return;const m=p.cs>=16,x=m?p.cs/2:p.cs;if(z*z*x*ht*4>r||lo(e,p,null)){const h=ko({cs:p.cs,chan:p.chan,nclass:0,clsK4:0,dilations:p.dilations,activation:p.activation,norm:p.norm,hasF16:n,hasSubgroups32:o,numConvs:p.dilations.length,probCfg:null});yield ho(e,p,null,n,o,null,h,{includeCls:!1,sequential:!0,shouldAbort:t})}else{const h=io(e,null),v=So({cs:p.cs,chan:p.chan,nclass:0,clsK4:0,dilations:p.dilations,activation:p.activation,norm:p.norm,hasF16:n,hasSubgroups32:o,splitHalves:m,probCfg:null,chunkableStd:h});yield wo(e,p,null,n,o,m,null,v,{includeCls:!1,sequential:!0,shouldAbort:t})}}})}const Xr=(e,t)=>Ae(null,null,function*(){const n=yield fetch(t).then(s=>s.arrayBuffer());return ws(e,new Uint8Array(n))}),Ao=!0,Yr={load:Xr,setupNet:ws,warmupV4CorePipelines:vs,supportsF32Fallback:Po,supportsGpuNativeIO:Ao},ps=Object.freeze(Object.defineProperty({__proto__:null,default:Yr,releaseV4Workspace:yn,setupNet:ws,supportsF32Fallback:Po,supportsGpuNativeIO:Ao,warmupV4CorePipelines:vs},Symbol.toStringTag,{value:"Module"}));function Kr(){var e;try{if(new URLSearchParams(((e=globalThis.location)==null?void 0:e.search)||"").get("webgpuKernels")==="tinygrad")return"disabled by ?webgpuKernels=tinygrad"}catch(t){}return null}const Cn=new Set(["meshnet_fast_v4","dkatlas24_int8","mindmap24_int8","model16chan18cls_int8","mindgrab_int8"]);function Zr(e){return Cn.has(e)}const vn=Object.assign({"./webgpu_runners/dkatlas24_f32_runner.js":()=>_t(()=>import("./dkatlas24_f32_runner-CdBMa7VZ.js"),[],import.meta.url),"./webgpu_runners/dkatlas24_int8_v3_runner.js":()=>_t(()=>import("./dkatlas24_int8_v3_runner-GLlR3ye9.js"),__vite__mapDeps([0,1,2,3]),import.meta.url),"./webgpu_runners/dkatlas24_runner.js":()=>_t(()=>import("./dkatlas24_runner-BkVMX0Bk.js"),[],import.meta.url),"./webgpu_runners/dkatlas24_synth_f32_runner.js":()=>_t(()=>import("./dkatlas24_synth_f32_runner-Bb7lxqr0.js"),[],import.meta.url),"./webgpu_runners/dkatlas24_synth_runner.js":()=>_t(()=>import("./dkatlas24_synth_runner-5rLWbXWF.js"),[],import.meta.url),"./webgpu_runners/manual_mindgrab_runner.js":()=>_t(()=>import("./manual_mindgrab_runner-DDusGIor.js"),[],import.meta.url),"./webgpu_runners/mindgrab_runner.js":()=>_t(()=>import("./mindgrab_runner-B-UQtXej.js"),[],import.meta.url),"./webgpu_runners/mindgrab_tta_runner.js":()=>_t(()=>import("./mindgrab_tta_runner-Ct42O8D2.js"),[],import.meta.url),"./webgpu_runners/model16chan18cls_f32_runner.js":()=>_t(()=>import("./model16chan18cls_f32_runner-B5FaUMez.js"),[],import.meta.url),"./webgpu_runners/model16chan18cls_runner.js":()=>_t(()=>import("./model16chan18cls_runner-aMK3m7Gj.js"),[],import.meta.url),"./webgpu_runners/model21_104class_runner.js":()=>_t(()=>import("./model21_104class_runner-DuOJ6qrl.js"),[],import.meta.url),"./webgpu_runners/model21_f32_runner.js":()=>_t(()=>import("./model21_f32_runner-yTUV9LXd.js"),[],import.meta.url),"./webgpu_runners/model21_tta_runner.js":()=>_t(()=>import("./model21_tta_runner-e7-76trO.js"),[],import.meta.url),"./webgpu_runners/model21chan18cls_runner.js":()=>_t(()=>import("./model21chan18cls_runner-DvLOnZMy.js"),[],import.meta.url),"./webgpu_runners/model24chan18cls_gdice_prio_probability_runner.js":()=>_t(()=>import("./model24chan18cls_gdice_prio_probability_runner-BHqpfuCi.js"),[],import.meta.url),"./webgpu_runners/model24chan18cls_gdice_prio_runner.js":()=>_t(()=>import("./model24chan18cls_gdice_prio_runner-B5cN26gD.js"),[],import.meta.url),"./webgpu_runners/model30chan18cls_runner.js":()=>_t(()=>import("./model30chan18cls_runner-C2mBz0G4.js"),[],import.meta.url),"./webgpu_runners/model30chan18cls_tta_runner.js":()=>_t(()=>import("./model30chan18cls_tta_runner-v8CMqLh5.js"),[],import.meta.url),"./webgpu_runners/model30chan50cls_f32_runner.js":()=>_t(()=>import("./model30chan50cls_f32_runner-DQ53FZ3-.js"),[],import.meta.url),"./webgpu_runners/model30chan50cls_runner.js":()=>_t(()=>import("./model30chan50cls_runner-D72-rlcG.js"),[],import.meta.url),"./webgpu_runners/model30chan50cls_tta_runner.js":()=>_t(()=>import("./model30chan50cls_tta_runner-CliMlbAZ.js"),[],import.meta.url),"./webgpu_runners/model32chan18cls_runner.js":()=>_t(()=>import("./model32chan18cls_runner-cowyou29.js"),[],import.meta.url),"./webgpu_runners/model5_gw_ae_runner.js":()=>_t(()=>import("./model5_gw_ae_runner-jI57fGIB.js"),[],import.meta.url),"./webgpu_runners/model5_runner.js":()=>_t(()=>import("./model5_runner-BiUlzJBp.js"),[],import.meta.url),"./webgpu_runners/model5_tta_runner.js":()=>_t(()=>import("./model5_tta_runner-DjIMLwlR.js"),[],import.meta.url),"./webgpu_runners/model6chan3cls_runner.js":()=>_t(()=>import("./model6chan3cls_runner-wSGRZpe5.js"),[],import.meta.url),"./webgpu_runners/robust_subcortical_runner.js":()=>_t(()=>import("./robust_subcortical_runner-D74Uw6At.js"),[],import.meta.url),"./webgpu_runners/robust_subcortical_tta_runner.js":()=>_t(()=>import("./robust_subcortical_tta_runner-CkwA2dHP.js"),[],import.meta.url)});function Qr(){const e=Object.keys(vn).map(t=>{const n=t.match(/\/([^\/]+)_runner\.js$/);return n?n[1]:null}).filter(Boolean);return Array.from(new Set([...Cn,...e]))}function Jr(e){if(Cn.has(e))return()=>Ae(null,null,function*(){return ps});const t=`./webgpu_runners/${e}_runner.js`;if(vn[t])return vn[t];const n=e.toLowerCase();for(const s of Cn)if(s.toLowerCase()===n)return()=>Ae(null,null,function*(){return ps});for(const[s,o]of Object.entries(vn))if(s.toLowerCase().includes(`/${n}_runner.js`))return o;for(const[s,o]of Object.entries(vn))if(s.includes(e))return o;return null}function ea(e){if(Cn.has(e))return!0;const t=`./webgpu_runners/${e}_runner.js`;if(vn[t])return!0;const n=e.toLowerCase();for(const o of Cn)if(o.toLowerCase()===n)return!0;const s=`/${n}_runner.js`;return Object.keys(vn).some(o=>o.toLowerCase().endsWith(s))}function ta(e,t){if(typeof Float16Array=="undefined")throw new Error("Float16Array unavailable: cannot cast fp32 master weights to fp16.");const n=new DataView(e.buffer,e.byteOffset,e.byteLength),s=Number(n.getBigUint64(0,!0)),o=JSON.parse(new TextDecoder("utf8").decode(e.subarray(8,8+s))),i=8+s;if(!Object.entries(o).some(([p,m])=>p!=="__metadata__"&&m.dtype==="F32"))return e;const a={},f=[];let l=0;for(const[p,m]of Object.entries(o)){if(p==="__metadata__"){a[p]=m;continue}const[x,A]=m.data_offsets,_=e.subarray(i+x,i+A);let h,v;if(m.dtype==="F32"){const S=new Float32Array(_.slice().buffer),b=new Float16Array(S);h=new Uint8Array(b.buffer),v="F16"}else h=_,v=m.dtype;a[p]={dtype:v,shape:m.shape,data_offsets:[l,l+h.byteLength]},f.push(h),l+=h.byteLength}const c=new TextEncoder().encode(JSON.stringify(a)),g=(8-c.byteLength%8)%8,d=new Uint8Array(8+c.byteLength+g+l);new DataView(d.buffer).setBigUint64(0,BigInt(c.byteLength+g),!0),d.set(c,8),d.fill(32,8+c.byteLength,8+c.byteLength+g);let u=8+c.byteLength+g;for(const p of f)d.set(p,u),u+=p.byteLength;return console.log("[WebGPU] Cast fp32 master weights -> fp16."),d}function na(e,t){try{const n=r=>!!(e.features&&e.features.has&&e.features.has(r)),s=e.limits||{},o=typeof navigator!="undefined"&&navigator.userAgent||"unknown",i=/Safari/.test(o)&&!/Chrome|Chromium|Android/.test(o);console.log("[SAFARI-DEBUG] ===== WebGPU device capabilities ====="),console.log("[SAFARI-DEBUG] model:",(t==null?void 0:t.modelName)||(t==null?void 0:t.webgpu_runner)||"(unknown)"),console.log("[SAFARI-DEBUG] userAgent:",o,"| classified Safari:",i),console.log("[SAFARI-DEBUG] shader-f16:",n("shader-f16")),console.log("[SAFARI-DEBUG] features:",e.features?Array.from(e.features):"(none)"),console.log("[SAFARI-DEBUG] limits:",{maxBufferSize:s.maxBufferSize,maxStorageBufferBindingSize:s.maxStorageBufferBindingSize,maxComputeInvocationsPerWorkgroup:s.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:s.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:s.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:s.maxComputeWorkgroupSizeZ,maxComputeWorkgroupsPerDimension:s.maxComputeWorkgroupsPerDimension}),console.log("[SAFARI-DEBUG] BC_WEBGPU_DEBUG (logits readback):",typeof window!="undefined"&&!!window.BC_WEBGPU_DEBUG),console.log("[SAFARI-DEBUG] =======================================")}catch(n){console.warn("[SAFARI-DEBUG] capability dump failed:",n==null?void 0:n.message)}}function Mo(){return typeof requestAnimationFrame!="function"?new Promise(e=>setTimeout(e,0)):new Promise(e=>{let t=!1;const n=()=>{t||(t=!0,e())},s=setTimeout(n,25);requestAnimationFrame(()=>{clearTimeout(s),setTimeout(n,0)})})}const sa=6,oa=4,bn=new Map,Jn=new Map,hn=new Map,mn=new WeakMap,es=new WeakSet;function ra(e){return Ae(this,null,function*(){if(!(!e||es.has(e))){es.add(e);try{yield vs(e)}catch(t){es.delete(e),console.debug("[WebGPU] Background pipeline warmup skipped:",(t==null?void 0:t.message)||t)}}})}function Co(e,{keepSharedWorkspace:t=!1}={}){var n;if(e)try{if(typeof((n=e.execute)==null?void 0:n.dispose)=="function")e.execute.dispose({keepSharedWorkspace:t});else if(e.ownedBuffers)for(const s of e.ownedBuffers)s.destroy()}catch(s){console.warn("[WebGPU] Failed to dispose cached runner buffers:",s)}}function aa(e,t,n,s){var o,i,r,a,f,l,c,g,d,u,p,m,x,A,_,h,v,S,b;return JSON.stringify([e,t,n,(o=s.id)!=null?o:null,(i=s.numClasses)!=null?i:null,(r=s.outputType)!=null?r:null,(a=s.dilations)!=null?a:null,(f=s.activation)!=null?f:null,(l=s.quantize8Bit)!=null?l:null,(c=s.forceFP32)!=null?c:null,(g=s.disableF16)!=null?g:null,(d=s.disableSubgroups)!=null?d:null,(u=s.disableConeSkip)!=null?u:null,(p=s.forceLowMem128)!=null?p:null,(m=s.webgpuExecMode)!=null?m:null,(x=s.softmaxTemperature)!=null?x:null,(A=s.brainSupportTemperature)!=null?A:null,(_=s.brainSupportPower)!=null?_:null,(h=s.partialVolumeSigma)!=null?h:null,(v=s.probabilityGroups)!=null?v:null,(S=s.probabilityDisplay)!=null?S:null,(b=s.classifierBias)!=null?b:null])}function Os(e){const t=bn.get(e);if(t)return bn.delete(e),bn.set(e,t),Promise.resolve(t);const n=Jn.get(e);if(n)return n;const s=Ae(null,null,function*(){let o;try{const r=yield fetch(e);if(!r.ok)throw new Error(`HTTP ${r.status}: ${r.statusText}`);o=yield r.arrayBuffer()}catch(r){throw new Error(`Failed to load weights from '${e}': ${r.message}`)}const i=new Uint8Array(o);for(bn.set(e,i);bn.size>sa;){const r=bn.keys().next().value;bn.delete(r)}return i}).finally(()=>{Jn.delete(e)});return Jn.set(e,s),s}function ia(e,t,n,s){if(!n)return e;const o=hn.get(t);if(o)return hn.delete(t),hn.set(t,o),o;const i=ta(e);for(hn.set(t,i);hn.size>oa;){const r=hn.keys().next().value;hn.delete(r)}return i}function ms(e,t){return Ae(this,null,function*(){const n=[],s=e.createBuffer.bind(e);e.createBuffer=o=>{const i=s(o);return n.push(i),i};try{return{result:yield t(),buffers:n}}finally{e.createBuffer=s}})}function ds(e){let t=0;for(const n of e)t+=Number(n==null?void 0:n.size)||0;return t}function ts(e){for(const t of e)try{t.destroy()}catch(n){}}function la(e,t,n){return Ae(this,null,function*(){var S,b,k,B,$,w,G;const s=(S=Kr())!=null?S:Ar(e,t);let o=t.webgpu_runner,i=t.webgpu_safetensor;const r=!!(e.features&&e.features.has&&e.features.has("shader-f16"));let a=!1;s&&(t.forceFP32?(a=!0,console.log("[WebGPU] forceFP32: using fp32 runner and weights.")):!r&&ea(`${o}_f32`)&&(a=!0,console.log("[WebGPU] shader-f16 not supported on this device -> auto-selecting fp32 runner and weights.")),a&&(o=`${o}_f32`,i=i.replace(".safetensors","_f32.safetensors")),t.enableTTA&&t.webgpuTTArunner&&(console.log("[WebGPU] TTA Enabled: Switching to TTA runner and weights."),o=`${o}_tta`,i=i.replace(".safetensors","_tta.safetensors")));const l=aa(s?"runner":"native",s?o:"webgpu_native",i,t),c=mn.get(e);if(c&&c.runnerKey===l)return Ut(wt({},c),{cacheHit:!0});const g=!!(s&&Zr(o));if(n("Loading model…",.1),c&&(mn.delete(e),Co(c,{keepSharedWorkspace:g})),g||yn(e),na(e,t),s)console.log(`[WebGPU-native] not used for ${t.modelName||t.webgpu_runner}: ${s}`);else{let M=[];try{const C=yield Os(i),I=yield ms(e,()=>Br(e,C,n,t));M=I.buffers;const E=I.result;E.kernels="hand-written";const P={runnerKey:l,runnerName:"webgpu_native",weightsPath:i,execute:E,supportsGpuNativeIO:!1,ownedBuffers:M,gpuBytes:ds(M)};return mn.set(e,P),console.log("[WebGPU-native] Using hand-written WebGPU kernels."),Ut(wt({},P),{cacheHit:!1})}catch(C){ts(M),console.warn("[WebGPU-native] falling back to the tinygrad runner:",(C==null?void 0:C.message)||C)}}const d=g?()=>Ae(null,null,function*(){return ps}):Jr(o);if(!d){const M=Qr();throw new Error(`Runner '${o}' not found. Available runners: ${M.join(", ")||"none"}. Looking in: ./webgpu_runners/`)}const[u,p]=yield Promise.all([d(),Os(i)]);if(!u.setupNet&&!((b=u.default)!=null&&b.setupNet))throw new Error(`Runner module '${o}' doesn't export 'setupNet'. Exported keys: ${Object.keys(u).join(", ")}`);const m=!!((B=u.supportsF32Fallback)!=null?B:(k=u.default)!=null&&k.supportsF32Fallback),x=!!((w=u.supportsGpuNativeIO)!=null?w:($=u.default)!=null&&$.supportsGpuNativeIO);!a&&!r&&!m&&console.warn(`[WebGPU] shader-f16 not supported and no fp32 runner ('${o}_f32') available; the fp16 runner will likely fail and fall back to WebGL2.`);const _=ia(p,i,!a&&!m),h=u.setupNet||((G=u.default)==null?void 0:G.setupNet);let v=[];try{const M=yield ms(e,()=>h(e,_,n,t));v=M.buffers;const C=M.result;if(typeof C!="function")throw ts(v),new Error(`setupNet for '${o}' didn't return a function. Returned type: ${typeof C}`);const I={runnerKey:l,runnerName:o,weightsPath:i,execute:C,supportsGpuNativeIO:x,ownedBuffers:typeof C.dispose=="function"?null:v,gpuBytes:typeof C.gpuBytes=="function"?C.gpuBytes():ds(v)};return mn.set(e,I),Ut(wt({},I),{cacheHit:!1})}catch(M){throw g&&yn(e),ts(v),new Error(`Failed to setup network for '${o}': ${M.message}`)}})}function ua(e,t,n,s,o,i,r){return Ae(this,null,function*(){var d,u,p,m;const a=n.outputType==="probability";console.log("Starting WebGPU inference..."),r(a?"Starting tissue estimation…":"Starting segmentation…",0);const f=nr(n,tr.WEBGPU);f.isModelFullVol=!0;let l=!1,c=null;const g=ir(n);try{if(!e)throw new Error("WebGPU device is required but not provided");if(!(n!=null&&n.webgpu_runner))throw new Error("Model entry must specify webgpu_runner property");if(!(n!=null&&n.webgpu_safetensor))throw new Error("Model entry must specify webgpu_safetensor property");const x=n.webgpuStorageSize||335544320;if(e.limits){const q=oe=>(oe/1048576).toFixed(0),re=(d=e.limits.maxStorageBufferBindingSize)!=null?d:1/0,T=(u=e.limits.maxBufferSize)!=null?u:1/0;if(re<x||T<x){const oe=q(Math.min(re,T)),pe=q(x),K=`[WebGPU] Device buffer limit (${oe} MB) is below the ${pe} MB this model needs - using WebGL2 fallback.`;throw console.warn(K),new Error(K)}}e.pushErrorScope("out-of-memory"),l=!0;const A=performance.now();c=yield la(e,n,r);const _=((performance.now()-A)/1e3).toFixed(4),h=performance.now();r("Preparing volume…",.25);const v=[256,256,256],S=c.supportsGpuNativeIO&&!!n.enableTranspose&&!n.inputPermutation,b=c.supportsGpuNativeIO&&!!n.enableTranspose&&!n.outputPermutation;let k,B;if(n.enableQuantileNorm){const{qmin:q,qmax:re}=Ko(o);k=q,B=re-q}else{const{min:q,max:re}=Zo(o);k=q,B=re-q}const $=B===0?1:B;let w=null,G,M=v;if(S)g&&(w=Bs(o,k,$)),G=o;else{const q=Bs(o,k,$);if(g&&(w=q),n.inputPermutation){console.log(`[WebGPU] Permuting Input: ${n.inputPermutation}`);const re=n.inputPermutation;M=[v[re[0]],v[re[1]],v[re[2]]],G=kn(q,v,re)}else n.enableTranspose?G=kn(q,v,[2,1,0]):G=q}const C=((performance.now()-h)/1e3).toFixed(4);r("",.3),r(a?"Estimating tissue maps…":"Segmenting…",.3),yield Mo();const I=performance.now(),E=c.supportsGpuNativeIO?q=>{const re=Math.max(0,Math.min(1,Number(q)||0));r("",.3+.6*re)}:void 0,P=S||b||E?{gpuNativeInput:S,gpuNativeOutput:b,normOffset:k,normRange:$,onProgress:E}:void 0,j=yield ms(e,()=>P?c.execute(G,P):c.execute(G)),R=j.result;if(typeof c.execute.gpuBytes=="function"){c.gpuBytes=c.execute.gpuBytes();const q=mn.get(e);q&&q.runnerKey===c.runnerKey&&(q.gpuBytes=c.gpuBytes)}else if(j.buffers.length>0){c.gpuBytes=(c.gpuBytes||0)+ds(j.buffers),c.ownedBuffers&&c.ownedBuffers.push(...j.buffers);const q=mn.get(e);q&&q.runnerKey===c.runnerKey&&(q.gpuBytes=c.gpuBytes)}l=!1;const ie=yield e.popErrorScope();if(ie)throw new Error(`WebGPU out of memory (${ie.message||"allocation failed"}) - falling back to WebGL2.`);if(!R||!Array.isArray(R))throw new Error(`Inference didn't return expected array format. Returned: ${typeof R}`);const se=((performance.now()-I)/1e3).toFixed(4),L=(c.gpuBytes||0)/1048576;f.GPU_Memory_MiB=Math.round(L),f.WebGPU_Kernels=c.execute.kernels||"tinygrad";const U=L>=1024?`${(L/1024).toFixed(2)} GiB`:`${Math.round(L)} MiB`;console.log(`WebGPU inference took ${se}s (${f.WebGPU_Kernels} kernels, ${U} GPU memory).`),r("Finishing up…",.9),console.log("Inference result shapes:",R.map(q=>q==null?void 0:q.length));const V=n.outputPermutation||(n.enableTranspose?[2,1,0]:null),fe=performance.now();let H;const X={};if(g){if(R.length!==3)throw new Error(`CAT-lite expected three tissue maps; received ${R.length}.`);r("Refining tissue fractions…",.92),H=yield pr(R,w,n,f,b?re=>re:re=>V?kn(re,M,V):re instanceof Float32Array?re:Float32Array.from(re))}else if(a){const q=R[0];H=b?q:V?kn(q,M,V):q instanceof Float32Array?q:Float32Array.from(q),zs(H,!0,"probability")}else{const q=R[0];let re;b?re=q instanceof Uint8Array?q:new Uint8Array(q):V?re=Qo(q,M,V):re=q instanceof Uint8Array?q:new Uint8Array(q),zs(re,!1,"segmentation"),H=yield er(re,o,n,t,X,v)}const Se=((performance.now()-fe)/1e3).toFixed(4),he=performance.now();yield i(H,t,n,X.mask);const ze=((performance.now()-he)/1e3).toFixed(4);if(a)g||(f.Output_Type="Continuous tissue probability",f.Tissue=n.probabilityDisplay||"grayMatter",f.Softmax_Temperature=(p=n.softmaxTemperature)!=null?p:1);else{const q=Jo(H),re=n.numClasses||q;sr(f,re,q)}or(f,se,Se,{Preprocess_t:C,Setup_t:_,Display_t:ze}),console.log(`[Timing] WebGPU | ${n.modelName} | setup=${(Number(_)*1e3).toFixed(1)}ms prep=${(Number(C)*1e3).toFixed(1)}ms infer=${(Number(se)*1e3).toFixed(1)}ms post=${(Number(Se)*1e3).toFixed(1)}ms disp=${(Number(ze)*1e3).toFixed(1)}ms cache=${c.cacheHit?"hit":"miss"}`);const ee=`${Number(se).toFixed(1)} s`,D=a?`Tissue maps finished (${ee})`:`Segmentation finished (${ee})`,N=!a&&((m=n.numClasses)!=null?m:0)>2?" · Option/Alt-click a region to isolate":"";r(`${n.modelName} · ${D}${N}`,1,"",f)}catch(x){if(console.error("WebGPU Inference Error:",x),c&&(mn.get(e)===c&&mn.delete(e),Co(c),c=null),l&&e){l=!1;try{yield e.popErrorScope()}catch(_){}}let A=x.message;throw x.message.includes("not found")?A+=". Check that the runner file exists and the name matches.":x.message.includes("fetch")?A+=". Check network connection and file paths.":x.message.includes("binding size")&&(A+=". GPU memory limit exceeded."),rr(f,A,"WebGPU inference failed"),r("",-1,`WebGPU Error: ${A}`,f),x}})}const ca={batchSize:1,numOfChan:1,isColorEnable:!0,isAutoColors:!0,bgLabelValue:0,drawBoundingVolume:!1,isGPU:!0,isBrainCropMaskBased:!0,showPhase1Output:!1,isPostProcessEnable:!0,fillSuppressedWithNeighborLabel:!1,diagnoseEnclosedComponents:!1,isContoursViewEnable:!1,browserArrayBufferMaxZDim:30,telemetryFlag:!1,chartXaxisStepPercent:10,uiSampleName:"BC_UI_Sample",atlasSelectedColorTable:"Fire"};function Ns(e,t=!0){if(!e)return e;const o=e,{turbo:n}=o,s=Ps(o,["turbo"]);return!t||!n?s:Ut(wt(wt({},s),n),{isTurboActive:!0})}const wn=[{id:2,type:"Brain_Extraction",path:"/models/mindgrab/model.json",modelName:"🪓🧠 Omnimodal Skull Stripping",webgpu_safetensor:"./models/mindgrab/model.safetensors",webgpu_runner:"mindgrab",classifierBias:[1.525439739227295,-1.5258055925369263],webgpuTTArunner:!1,forceFP32:!1,webgpuStorageSize:503316480,numClasses:2,turbo:{webgpu_runner:"mindgrab_int8",quantize8Bit:!0,forceFP32:!1,webgpuTTArunner:!1,webgpuStorageSize:83886080,warning:"Runs via the 8-bit V4 WebGPU engine (~3.7s on M1 WebGPU, auto-scaling from 160 MiB down to 80 MiB max buffer on mobile) or native WebGL2."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,isPostProcessEnable:!0,enableCrop:!0,cropPadding:20,autoThreshold:.5,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!1,textureSize:0,warning:"This model may need dedicated graphics card.  For more info please check with Browser Resources <i class='fa fa-cogs'></i>.",inferenceDelay:100,description:"Omnimodal skull stripping (MindGrab) delivering high-accuracy brain extraction across T1, T2, FLAIR, DWI, EPI, MRA, PDw, qT1, CT, and PET via the 8-bit V4 WebGPU engine (80 MiB mobile / 160 MiB desktop max buffer) or native WebGL2."},{id:21,type:"Atlas",path:"/models/model24chan18cls_gdice_prio/model.json",modelName:"🪓 Subcortical + Tissue",colormapPath:"./models/model24chan18cls_gdice_prio/colormap.json",webgpu_safetensor:"./models/model24chan18cls_gdice_prio/model.safetensors",webgpu_runner:"model24chan18cls_gdice_prio",forceFP32:!1,webgpuStorageSize:1610612736,numClasses:18,turbo:{webgpu_runner:"mindmap24_int8",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:125829120,warning:"Runs via the 8-bit V4 WebGPU engine (~3.0s on M1 WebGPU, auto-scaling from 240 MiB down to 120 MiB max buffer on mobile) or native WebGL2."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,cropPadding:20,autoThreshold:0,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!0,textureSize:0,warning:"Runs via the 8-bit V4 WebGPU engine (120–240 MiB max buffer) or native WebGL2.",inferenceDelay:100,description:"Primary T1w brain parcellation into 17 regions (gray and white matter plus subcortical structures) via a 24-channel gridding-free MeshNet (MindMap v3.5 Unified: sharp sulci, intact occipital ribbon, and clinical slice/noise/bias robustness), accelerated by the 8-bit V4 WebGPU engine (120 MiB mobile / 240 MiB desktop max buffer)."},{id:23,type:"Probability_Map",path:"/models/model24chan18cls_gdice_prio/model.json",modelName:"⅔🧠 Tissue fraction maps (GM/WM/CSF)",webgpu_safetensor:"./models/model24chan18cls_gdice_prio/model.safetensors",webgpu_runner:"model24chan18cls_gdice_prio_probability",forceFP32:!1,webgpuStorageSize:1610612736,numClasses:18,turbo:{webgpu_runner:"mindmap24_int8",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:125829120,warning:"Experimental neural-assisted partial-volume estimate (~3.5s on M1 WebGPU, auto-scaling from 240 MiB down to 120 MiB max buffer on mobile)."},outputType:"probability",probabilityPostprocess:"cat-lite",softmaxTemperature:2,brainSupportTemperature:1,brainSupportPower:1,partialVolumeSigma:.65,probabilityDisplay:"grayMatter",probabilityTissues:[{name:"gm",tint:[255,64,64]},{name:"wm",tint:[255,255,255]},{name:"csf",tint:[64,128,255]}],probabilityOverlayFloor:128,probabilityOverlayAlpha:48,probabilityDisplayMin:.03,probabilityUnderlayOpacity:.1,probabilityGroups:{grayMatter:[2,6,7,8,9,10,14,15,16,17],whiteMatter:[1,5],csf:[3,4,11,12]},catLitePurePriorPower:3,catLitePriorStrength:.8,catLiteIntensityStrength:.75,catLiteMixelPrior:.35,catLiteCsfWmMixelPrior:6,catLiteSpatialWeight:.25,catLiteMinSupport:.03,catLiteSigmaFloor:.025,catLiteBiasBlockSize:16,catLiteBiasSmoothPasses:3,preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,enableQuantileNorm:!0,enableFovRecenter:!1,enableFovInflate:!1,warning:"Experimental neural-assisted mixed-class partial-volume estimate, not CAT12.",inferenceDelay:100,description:"CAT-inspired GM/WM/CSF partial-volume estimate. The 24-channel model supplies joint GM/WM/CSF priors; normalized T1 intensity, a coarse local bias estimate, spatial regularization, and explicit GM-CSF/GM-WM mixture classes produce continuous GM, WM and CSF fractions. Experimental and not a CAT12 result."},{id:5,type:"Atlas",path:"/models/model24chan104cls_v3_repbn/model.json",modelName:"🪓🔪 Desikan-Killiany Atlas",colormapPath:"./models/model24chan104cls_v3_repbn/colormap.json",webgpu_safetensor:"./models/model24chan104cls_v3_repbn/model.safetensors",webgpu_runner:"dkatlas24_synth",forceFP32:!1,webgpuStorageSize:1610612736,numClasses:104,turbo:{webgpu_runner:"dkatlas24_int8",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:125829120,warning:"Runs via the 8-bit V4 WebGPU engine (~3.0s on M1 WebGPU, auto-scaling from 240 MiB down to 120 MiB max buffer on mobile) or native WebGL2."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,cropPadding:20,autoThreshold:0,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!0,textureSize:0,warning:"Runs via the 8-bit V4 WebGPU engine (120–240 MiB max buffer) or native WebGL2.",inferenceDelay:100,description:"Primary 104-region Desikan-Killiany atlas parcellation (cortical + subcortical + 5-part corpus callosum) for research and clinical T1-weighted MRI, running via the 8-bit V4 WebGPU engine (~3.0s on M1, 120 MiB mobile / 240 MiB desktop max buffer) or native WebGL2."},{id:4,type:"Atlas",path:"/models/model24chan50cls/model.json",modelName:"🪓🔪 Desikan-Killiany 50",colormapPath:"./models/model24chan50cls/colormap.json",webgpu_safetensor:"./models/model24chan50cls/model.safetensors",webgpu_runner:"meshnet_fast_v4",forceFP32:!1,webgpuStorageSize:805306368,numClasses:50,turbo:{webgpu_runner:"meshnet_fast_v4",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:125829120,warning:"Runs via the 8-bit V4 WebGPU engine (~3.0s on M1 WebGPU, auto-scaling from 240 MiB down to 120 MiB max buffer on mobile) or native WebGL2."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,cropPadding:20,autoThreshold:0,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!0,textureSize:0,warning:"Runs via the 8-bit V4 WebGPU engine (120–240 MiB max buffer) or native WebGL2.",inferenceDelay:100,description:"Bilateral 50-region Desikan-Killiany cortical + subcortical + corpus callosum parcellation with built-in skull stripping (MindSnap-50 v3.5), running via the 8-bit V4 WebGPU engine (~3.0s on M1, 120 MiB mobile / 240 MiB desktop max buffer) or native WebGL2."},{id:6,type:"Divider",modelName:"-----------------",path:null},{id:3,type:"Atlas",path:"/models/model16chan18cls/model.json",modelName:"⚡🪓 Subcortical + Tissue",colormapPath:"./models/model16chan18cls/colormap.json",webgpu_safetensor:"./models/model16chan18cls/model.safetensors",webgpu_runner:"model16chan18cls",forceFP32:!1,webgpuStorageSize:536870912,numClasses:18,turbo:{webgpu_runner:"model16chan18cls_int8",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:83886080,warning:"Ultra-fast 16-channel MindMap v3.5 (~1.7s on M1 WebGPU, auto-scaling from 160 MiB down to 80 MiB max buffer on mobile)."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,cropPadding:20,autoThreshold:0,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!0,textureSize:0,warning:"Runs via the 8-bit V4 WebGPU engine (80–160 MiB max buffer) or native WebGL2.",inferenceDelay:100,description:"Ultra-fast 17-region brain parcellation (gray and white matter plus subcortical structures) via our 84K-parameter 16-channel MeshNet (MindMap-16ch v3.5), running in ~1.7s on M1 WebGPU with an 80 MiB mobile / 160 MiB desktop buffer footprint."},{id:14,type:"Atlas",path:"/models/model24chan104cls_synth/model.json",modelName:"🪓🔪 Desikan-Killiany (lesion scans)",colormapPath:"./models/model24chan104cls_synth/colormap.json",webgpu_safetensor:"./models/model24chan104cls_synth/model.safetensors",webgpu_runner:"dkatlas24_synth",forceFP32:!1,webgpuStorageSize:1610612736,numClasses:104,turbo:{webgpu_runner:"dkatlas24_int8",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:125829120,warning:"Runs via the 8-bit V4 WebGPU engine (~3.0s on M1 WebGPU, auto-scaling from 240 MiB down to 120 MiB max buffer on mobile) or native WebGL2."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,cropPadding:20,autoThreshold:0,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!0,textureSize:0,warning:"Runs via the 8-bit V4 WebGPU engine (120–240 MiB max buffer) or native WebGL2.",inferenceDelay:100,description:"Desikan-Killiany 104-region parcellation variant retained for scans with large focal lesions, running via the 8-bit V4 WebGPU engine (120–240 MiB max buffer) or native WebGL2."}];function ys(){return Ae(this,null,function*(){return navigator.userAgent.indexOf("OPR/")>-1?"Opera":navigator.userAgent.indexOf("Edg/")>-1?"Edge":navigator.userAgent.indexOf("Falkon/")>-1?"Falkon":navigator.userAgent.indexOf("Chrome/")>-1?"Chrome":navigator.userAgent.indexOf("Firefox/")>-1?"Firefox":navigator.userAgent.indexOf("Safari/")>-1?"Safari":navigator.userAgent.indexOf("MSIE/")>-1||navigator.userAgent.indexOf("rv:")>-1?"IExplorer":"Unknown"})}function fa(){return Ae(this,null,function*(){return navigator.userAgent.indexOf("OPR/")>-1?parseInt(navigator.userAgent.split("OPR/")[1]):navigator.userAgent.indexOf("Edg/")>-1?parseInt(navigator.userAgent.split("Edg/")[1]):navigator.userAgent.indexOf("Falkon/")>-1?parseInt(navigator.userAgent.split("Falkon/")[1]):navigator.userAgent.indexOf("Chrome/")>-1?parseInt(navigator.userAgent.split("Chrome/")[1]):navigator.userAgent.indexOf("Firefox/")>-1?parseInt(navigator.userAgent.split("Firefox/")[1]):navigator.userAgent.indexOf("Safari/")>-1?parseInt(navigator.userAgent.split("Safari/")[1]):navigator.userAgent.indexOf("MSIE/")>-1||navigator.userAgent.indexOf("rv:")>-1?parseInt(navigator.userAgent.split("MSIE/")[1]):1/0})}function pa(){return Ae(this,null,function*(){return navigator.userAgent.indexOf("Win")>-1?"Windows":navigator.userAgent.indexOf("Mac")>-1?"MacOS":navigator.userAgent.indexOf("Linux")>-1?"Linux":navigator.userAgent.indexOf("UNIX")>-1?"UNIX":"Unknown"})}function ma(e){return Ae(this,null,function*(){return e?(console.log("WebGl2 is enabled"),!0):(console.log(typeof WebGL2RenderingContext!="undefined"?"WebGL2 may be disabled. Please try updating video card drivers":"WebGL2 is not supported"),!1)})}function da(e){return Ae(this,null,function*(){let t;if(e&&(t=e.getExtension("WEBGL_debug_renderer_info"),t)){const n=e.getParameter(t.UNMASKED_VENDOR_WEBGL);return n.indexOf("(")>-1&&n.indexOf(")")>-1?n.substring(n.indexOf("(")+1,n.indexOf(")")):n}return null})}function ga(e){return Ae(this,null,function*(){if(e){const t=e.getExtension("WEBGL_debug_renderer_info");return t?e.getParameter(t.UNMASKED_VENDOR_WEBGL):null}else return null})}function _a(e){return Ae(this,null,function*(){if(e){if(ys()==="Firefox")return e.getParameter(e.RENDERER);const t=e.getExtension("WEBGL_debug_renderer_info");return t?e.getParameter(t.UNMASKED_RENDERER_WEBGL):null}else return null})}function ba(e){return Ae(this,null,function*(){let t;if(e){if(ys()==="Firefox")return e.getParameter(e.RENDERER);if(t=e.getExtension("WEBGL_debug_renderer_info"),t){let n=e.getParameter(t.UNMASKED_RENDERER_WEBGL);return n.indexOf("(")>-1&&n.indexOf(")")>-1&&n.indexOf("(R)")===-1&&(n=n.substring(n.indexOf("(")+1,n.indexOf(")")),n.split(",").length===3)?n.split(",")[1].trim():n}}return null})}function ha(){return Ae(this,null,function*(){return navigator.hardwareConcurrency})}function wa(){return Ae(this,null,function*(){return/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)})}function va(e,t=null){return Ae(this,null,function*(){const n=new Date;if(e.isModelFullVol?e.Brainchop_Ver="FullVolume":e.Brainchop_Ver="SubVolumes",e.Total_t=(Date.now()-e.startTime)/1e3,delete e.startTime,e.Date=parseInt(n.getMonth()+1)+"/"+n.getDate()+"/"+n.getFullYear(),e.Browser=yield ys(),e.Browser_Ver=yield fa(),e.OS=yield pa(),e.WebGL2=yield ma(t),e.GPU_Vendor=yield da(t),e.GPU_Card=yield ba(t),e.GPU_Vendor_Full=yield ga(t),e.GPU_Card_Full=yield _a(t),e.CPU_Cores=yield ha(),e.Which_Brainchop="latest",(yield wa())&&(e.Heap_Size_MB=window.performance.memory.totalJSHeapSize/(1024*1024).toFixed(2),e.Used_Heap_MB=window.performance.memory.usedJSHeapSize/(1024*1024).toFixed(2),e.Heap_Limit_MB=window.performance.memory.jsHeapSizeLimit/(1024*1024).toFixed(2)),t){console.log("MAX_TEXTURE_SIZE :",t.getParameter(t.MAX_TEXTURE_SIZE)),console.log("MAX_RENDERBUFFER_SIZE :",t.getParameter(t.MAX_RENDERBUFFER_SIZE));const s=t.getExtension("WEBGL_debug_renderer_info");console.log("VENDOR WEBGL:",t.getParameter(s.UNMASKED_VENDOR_WEBGL)),e.Texture_Size=t.getParameter(t.MAX_TEXTURE_SIZE)}else e.Texture_Size=null;return e})}const ns={bankssts:1,caudalanteriorcingulate:2,caudalmiddlefrontal:3,cuneus:5,entorhinal:6,fusiform:7,inferiorparietal:8,inferiortemporal:9,isthmuscingulate:10,lateraloccipital:11,lateralorbitofrontal:12,lingual:13,medialorbitofrontal:14,middletemporal:15,parahippocampal:16,paracentral:17,parsopercularis:18,parsorbitalis:19,parstriangularis:20,pericalcarine:21,postcentral:22,posteriorcingulate:23,precentral:24,precuneus:25,rostralanteriorcingulate:26,rostralmiddlefrontal:27,superiorfrontal:28,superiorparietal:29,superiortemporal:30,supramarginal:31,frontalpole:32,temporalpole:33,transversetemporal:34,insula:35},ya=new Set(["BG","Unknown","background","Background"]),Ds={"Left-Cerebral-White-Matter":2,"Right-Cerebral-White-Matter":41,"Left-Cerebral-Cortex":3,"Right-Cerebral-Cortex":42,"Left-Lateral-Ventricle":4,"Right-Lateral-Ventricle":43,"Left-Inf-Lat-Vent":5,"Right-Inf-Lat-Vent":44,"Left-Cerebellum-White-Matter":7,"Right-Cerebellum-White-Matter":46,"Left-Cerebellum-Cortex":8,"Right-Cerebellum-Cortex":47,"Left-Thalamus":10,"Left-Thalamus-Proper":10,"Left-Thalamus-Proper*":10,"Right-Thalamus":49,"Right-Thalamus-Proper":49,"Right-Thalamus-Proper*":49,"Left-Caudate":11,"Right-Caudate":50,"Left-Putamen":12,"Right-Putamen":51,"Left-Pallidum":13,"Right-Pallidum":52,"Left-Hippocampus":17,"Right-Hippocampus":53,"Left-Amygdala":18,"Right-Amygdala":54,"Left-Accumbens":26,"Left-Accumbens-area":26,"Right-Accumbens":58,"Right-Accumbens-area":58,"Left-VentralDC":28,"Right-VentralDC":60,"3rd-Ventricle":14,"4th-Ventricle":15,"Brain-Stem":16,CSF:24,CC_Posterior:251,CC_Mid_Posterior:252,CC_Central:253,CC_Mid_Anterior:254,CC_Anterior:255,"Cerebral-White-Matter":2,"White Matter":2,"Cerebral-Cortex":3,"Grey Matter":3,"Gray Matter":3,"Lateral-Ventricle":4,Ventricle:4,"Inferior-Lateral-Ventricle":5,"Cerebellum-White-Matter":7,"Cerebellum-Cortex":8,Cerebellum:8,Thalamus:10,"Thalamus-Proper":10,"Thalamus-Proper*":10,Caudate:11,Putamen:12,Pallidum:13,Hippocampus:17,Amygdala:18,"Accumbens-area":26,Accumbens:26,VentralDC:28,"Corpus callosum":253,Corpus_Callosum:253};function xa(e){if(typeof e!="string")return null;const t=e.trim();if(ya.has(t))return 0;if(Object.hasOwn(Ds,t))return Ds[t];if(t.startsWith("ctx-lh-")){const n=ns[t.slice(7)];return n?1e3+n:null}if(t.startsWith("ctx-rh-")){const n=ns[t.slice(7)];return n?2e3+n:null}if(t.startsWith("ctx-")){const n=ns[t.slice(4)];return n?1e3+n:null}return null}function En(e){if(!Array.isArray(e)||e.length<3)return null;const t=new Int16Array(e.length);for(let n=0;n<e.length;n++){const s=xa(e[n]);if(s===null||(n===0?s!==0:s<=0))return null;t[n]=s}return t}function $a(e,t){const n=e.length,s=new Int16Array(n),o=t.length;let i=0;for(let r=0;r<n;r++){const a=e[r],f=a>=0&&a<o?t[a]:a;s[r]=f,f>i&&(i=f)}return{img:s,maxLabel:i}}const Vs=.5,Hs=8,js=(e,t,n)=>Math.min(n,Math.max(t,e)),Xs=e=>Math.hypot(e[0].clientX-e[1].clientX,e[0].clientY-e[1].clientY);function Bo(e){e&&(e.pan2Dxyzmm=Float32Array.from([0,0,0,1]),e.scaleMultiplier=1),Sa()}function Sa(){const e=document.querySelector('meta[name="viewport"]');if(!e)return;const t=e.getAttribute("content")||"width=device-width, initial-scale=1.0";/maximum-scale/.test(t)||(e.setAttribute("content",`${t}, maximum-scale=1, user-scalable=no`),requestAnimationFrame(()=>requestAnimationFrame(()=>e.setAttribute("content",t))))}function ka(){const e=t=>t.preventDefault();for(const t of["gesturestart","gesturechange","gestureend"])document.addEventListener(t,e,{passive:!1});document.addEventListener("touchmove",t=>{t.touches.length>1&&t.preventDefault()},{passive:!1})}function Pa(e){const t=new Set,n=o=>{t.size>1&&o.stopPropagation()},s=o=>t.delete(o.pointerId);window.addEventListener("pointerdown",o=>{o.pointerType==="touch"&&o.target===e&&t.add(o.pointerId),n(o)},!0),window.addEventListener("pointermove",n,!0),window.addEventListener("pointerup",s,!0),window.addEventListener("pointercancel",s,!0)}function Aa(e,t,n,s,o){const i=e[3]/t;return[0,1,2].map(r=>{const a=n[r]-(s[r]+o[r])/2;return i*(a+e[r])-a})}function Ma(e){const t=e.canvas;if(!t)return;Pa(t);let n=null;const s=r=>{var g,d,u;if(r.touches.length!==2){n=null;return}const a=t.getBoundingClientRect(),f=window.devicePixelRatio||1,l=((r.touches[0].clientX+r.touches[1].clientX)/2-a.left)*f,c=((r.touches[0].clientY+r.touches[1].clientY)/2-a.top)*f;n={dist:Math.max(1,Xs(r.touches)),pan:Array.from(e.pan2Dxyzmm),scale3d:e.scaleMultiplier||1,inRender:(u=(d=(g=e.view)==null?void 0:g.hitTest(l,c))==null?void 0:d.isRender)!=null?u:!1}},o=()=>{n=null},i=r=>{if(!n||r.touches.length!==2)return;const a=Xs(r.touches)/n.dist;if(!isFinite(a)||a<=0)return;if(n.inRender){e.scaleMultiplier=js(n.scale3d*a,Vs,Hs);return}const f=js(n.pan[3]*a,Vs,Hs),l=Aa(n.pan,f,e.getCrosshairPos(),e.model.extentsMin,e.model.extentsMax);e.pan2Dxyzmm=Float32Array.from([l[0],l[1],l[2],f]),e.isYoked3DTo2DZoom?e.scaleMultiplier=f:e.drawScene()};t.addEventListener("touchstart",s,{passive:!0}),t.addEventListener("touchmove",i,{passive:!0}),t.addEventListener("touchend",o,{passive:!0}),t.addEventListener("touchcancel",o,{passive:!0})}function Ca(e){return ka(),Ma(e),{resetView:()=>Bo(e)}}const Ba=720,za=860;function Fa(){var o,i,r,a,f,l;const e=window.visualViewport,t=Math.round((i=(o=e==null?void 0:e.width)!=null?o:window.innerWidth)!=null?i:0),n=Math.round((a=(r=e==null?void 0:e.height)!=null?r:window.innerHeight)!=null?a:0);return t>0&&t<=Ba?!0:!!((l=(f=window.matchMedia)==null?void 0:f.call(window,"(pointer: coarse)"))==null?void 0:l.matches)&&Math.min(t,n)<=za}const Mn=[{id:"multi",label:"All",title:"All planes",type:Fn.MULTIPLANAR},{id:"axial",label:"A",title:"Axial only",type:Fn.AXIAL},{id:"coronal",label:"C",title:"Coronal only",type:Fn.CORONAL},{id:"sagittal",label:"S",title:"Sagittal only",type:Fn.SAGITTAL},{id:"render",label:"3D",title:"3D render only",type:Fn.RENDER}];function zo(e,t,n){const s=Mn.find(o=>o.id===n)||Mn[0];e.sliceType=s.type,t.querySelectorAll("button").forEach(o=>o.classList.toggle("active",o.dataset.pane===s.id))}function La(e,t){const n=document.createElement("div");n.id="paneSwitcher",n.className="pane-switcher",n.setAttribute("role","group"),n.setAttribute("aria-label","Visible planes");for(const o of Mn){const i=document.createElement("button");i.type="button",i.dataset.pane=o.id,i.textContent=o.label,i.title=o.title,i.setAttribute("aria-label",o.title),i.addEventListener("click",()=>zo(e,n,o.id)),n.appendChild(i)}const s=document.createElement("button");return s.type="button",s.className="pane-reset",s.textContent="⟲",s.title="Reset zoom and pan",s.setAttribute("aria-label","Reset zoom and pan"),s.addEventListener("click",()=>Bo(e)),n.appendChild(s),t.appendChild(n),n}function Ua(e){var o;const t=document.getElementById("canvas-container")||document.body,n=La(e,t);n.querySelector('button[data-pane="multi"]').classList.add("active"),window.addEventListener("keydown",i=>{if(i.key!=="v"&&i.key!=="V"||i.altKey||i.ctrlKey||i.metaKey||i.repeat)return;const r=i.target;if(r instanceof HTMLElement&&(r.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(r.tagName)))return;i.preventDefault(),i.stopImmediatePropagation();const a=Mn.findIndex(f=>f.type===e.sliceType);zo(e,n,Mn[(a+1)%Mn.length].id)},!0);const s=()=>document.body.classList.toggle("nv-narrow",Fa());window.addEventListener("resize",s),window.addEventListener("orientationchange",s),(o=window.visualViewport)==null||o.addEventListener("resize",s),s()}function Ys(e,t=e.img.slice(),n=e.name){const s=Object.assign(Object.create(Object.getPrototypeOf(e.hdr)),e.hdr),o=Io(s,t,n);return o.id=crypto.randomUUID(),o}const Yt=e=>e&&typeof e.slice=="function"?e.slice():e;function ss(e,t,n=e.name,s={},o={}){var f;const i=Object.assign(Object.create(Object.getPrototypeOf(e.hdr)),e.hdr,wt({dims:[...e.hdr.dims],pixDims:[...e.hdr.pixDims],affine:e.hdr.affine.map(l=>[...l])},s)),r=e.dims?e.dims.slice(0,4):i.dims.slice(0,4),a=(f=e.nVox3D)!=null?f:r[1]*r[2]*r[3];return wt({img:t,hdr:i,originalAffine:i.affine.map(l=>[...l]),dims:r,nVox3D:a,extentsMin:Yt(e.extentsMin),extentsMax:Yt(e.extentsMax),mm000:Yt(e.mm000),mm100:Yt(e.mm100),mm010:Yt(e.mm010),mm001:Yt(e.mm001),dimsRAS:e.dimsRAS?[...e.dimsRAS]:void 0,pixDimsRAS:e.pixDimsRAS?[...e.pixDimsRAS]:void 0,permRAS:e.permRAS?[...e.permRAS]:void 0,toRAS:Yt(e.toRAS),toRASvox:Yt(e.toRASvox),matRAS:Yt(e.matRAS),obliqueRAS:Yt(e.obliqueRAS),oblique_angle:e.oblique_angle,frac2mm:Yt(e.frac2mm),frac2mmOrtho:Yt(e.frac2mmOrtho),img2RASstep:e.img2RASstep?[...e.img2RASstep]:void 0,img2RASstart:e.img2RASstart?[...e.img2RASstart]:void 0,volScale:e.volScale?[...e.volScale]:void 0,name:n,id:crypto.randomUUID(),calMin:0,calMax:255,robustMin:0,robustMax:255,globalMin:0,globalMax:255,frame4D:0,nFrame4D:1,nTotalFrame4D:1,isLegendVisible:!1},o)}function Wa(e){let t=256,n=-1,s=0;for(let l=0;l<256;l++){const c=e[l];c>0&&(l<t&&(t=l),n=l,l!==0&&(s+=c))}if(t>n)return{calMin:0,calMax:255,robustMin:0,robustMax:255,globalMin:0,globalMax:255};if(t===n)return{calMin:t,calMax:n,robustMin:t,robustMax:n,globalMin:t,globalMax:n};const o=Math.round(s*.02),i=Math.round(s*.02);let r=0,a=t;for(let l=t;l<=n;l++){if(l===0&&e[0]>o){a=0;break}if(r+=e[l],r>=o){a=l;break}}r=0;let f=n;for(let l=n;l>=t;l--)if(r+=e[l],r>=i){f=Math.min(n,l+1);break}return a>=f&&(a=t,f=n),{calMin:a,calMax:f,robustMin:a,robustMax:f,globalMin:t,globalMax:n}}function os(e,[t,n,s]){const o=e.dimsRAS,i=e.img2RASstart,r=e.img2RASstep;return!o||!i||!r||t<0||t>=o[1]||n<0||n>=o[2]||s<0||s>=o[3]?null:i[0]+t*r[0]+i[1]+n*r[1]+i[2]+s*r[2]}function Sn(e,t){return Ae(this,null,function*(){const n=e.img,s=yield Eo(t,e.hdr,n.buffer.byteLength===n.byteLength?n.buffer:n.buffer.slice(n.byteOffset,n.byteOffset+n.byteLength)),o=URL.createObjectURL(new Blob([s]));Object.assign(document.createElement("a"),{href:o,download:t}).click(),URL.revokeObjectURL(o)})}let on=null,dn=!1,rs=0,In=!1,Nn=[];const Fo=/Safari/.test(navigator.userAgent)&&!/Chrome|Chromium|CriOS|FxiOS|Edg|Android/.test(navigator.userAgent),qa=Fo&&new URLSearchParams(window.location.search).get("inference")!=="webgpu";function Ks(e=null){return Ae(this,null,function*(){const t={secureContext:window.isSecureContext,navigatorGpuExists:"gpu"in navigator,adapterObtained:!1,deviceObtained:!1,f16Support:!1,error:null};if(window.isSecureContext||(console.warn("WebGPU requires a secure context (HTTPS or localhost)."),console.warn("Current origin:",window.location.origin)),"gpu"in navigator)try{console.log("Requesting WebGPU adapter...");const n=yield navigator.gpu.requestAdapter();if(n){t.adapterObtained=!0,console.log("WebGPU adapter obtained:",n),n.info&&console.log("Adapter info:",n.info),console.log("Adapter limits:",{maxBufferSize:n.limits.maxBufferSize,maxStorageBufferBindingSize:n.limits.maxStorageBufferBindingSize,maxComputeWorkgroupsPerDimension:n.limits.maxComputeWorkgroupsPerDimension});const s={maxBufferSize:n.limits.maxBufferSize,maxStorageBufferBindingSize:n.limits.maxStorageBufferBindingSize,maxStorageBuffersPerShaderStage:n.limits.maxStorageBuffersPerShaderStage,maxUniformBufferBindingSize:n.limits.maxUniformBufferBindingSize,maxComputeInvocationsPerWorkgroup:n.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:n.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:n.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:n.limits.maxComputeWorkgroupSizeZ,maxComputeWorkgroupStorageSize:n.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:n.limits.maxComputeWorkgroupsPerDimension},o=n.features.has("shader-f16"),i=n.features.has("subgroups");t.f16Support=o,t.subgroupsSupport=i;const r=[];o&&r.push("shader-f16"),i&&r.push("subgroups");const a=yield n.requestDevice({requiredLimits:s,requiredFeatures:r});if(a.__adapterInfo=n.info||null,e&&typeof e.getParameter=="function")try{if(/Firefox/i.test(navigator.userAgent||""))a.__glRenderer=String(e.getParameter(e.RENDERER)||"");else{const l=e.getExtension("WEBGL_debug_renderer_info");a.__glRenderer=String((l?e.getParameter(l.UNMASKED_RENDERER_WEBGL):e.getParameter(e.RENDERER))||"")}}catch(l){}a.__isLost=!1,a.lost&&typeof a.lost.then=="function"&&a.lost.then(l=>{a.__isLost=!0,(l==null?void 0:l.reason)!=="destroyed"&&(console.warn(`[WebGPU] Device was lost (${(l==null?void 0:l.reason)||"unknown"}): ${(l==null?void 0:l.message)||""}`),on===a&&(on=null,dn=!1,t.deviceObtained=!1,t.error=(l==null?void 0:l.message)||"WebGPU device lost",Zs(!1,t)))}),on=a,t.deviceObtained=!0,dn=!0,console.log(`✓ WebGPU initialized successfully. F16: ${o?"enabled":"not available"}, Subgroups: ${i?"enabled":"not available"}`)}else console.warn("WebGPU adapter request returned null."),console.warn("This typically means:"),console.warn("  - Safari: WebGPU feature flags not enabled in Settings > Feature Flags"),console.warn("  - Unsupported GPU hardware"),console.warn("  - GPU drivers need updating"),t.error="Adapter returned null"}catch(n){t.error=n.message,console.error("WebGPU initialization error:",n),navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")&&(console.warn("Safari detected. To enable WebGPU:"),console.warn("  1. Open Safari Settings/Preferences"),console.warn('  2. Go to Advanced tab, enable "Show features for web developers"'),console.warn("  3. Go to Feature Flags tab"),console.warn("  4. Enable: WebGPU, GPU Process: DOM Rendering, GPU Process: Canvas Rendering"),console.warn("  5. Restart Safari"))}else console.warn("navigator.gpu not found. WebGPU API is not available in this browser."),t.error="navigator.gpu not found",navigator.userAgent.includes("Firefox")&&(console.warn("Firefox detected. To enable WebGPU in about:config:"),console.warn("  1. Set dom.webgpu.enabled = true"),console.warn("  2. Set gfx.webgpu.ignore-blocklist = true"),console.warn("  3. Restart Firefox"));return Zs(dn,t),dn||console.log("Falling back to WebGL backend."),window.webgpuDiagnostics=t,t})}function Zs(e,t){const n=document.getElementById("backendStatus");if(!n){console.log("Backend status element not found in DOM");return}if(e){const s=t.f16Support?" (F16)":"";n.textContent=`WebGPU${s}`,n.style.color="#4CAF50",n.title="WebGPU backend active - fastest performance"}else{n.textContent="WebGL",n.style.color="#FF9800";let s="WebGL backend (fallback)";t.error&&(s+=`
Reason: ${t.error}`),t.secureContext||(s+=`
⚠ Not a secure context (HTTPS required)`),Fo&&(s+=`

To enable WebGPU in Safari:
1. Settings > Feature Flags
2. Enable WebGPU flags
3. Restart Safari`),navigator.userAgent.includes("Firefox")&&(s+=`

To enable WebGPU in Firefox:
1. about:config > dom.webgpu.enabled = true
2. gfx.webgpu.ignore-blocklist = true
3. Restart Firefox`),n.title=s}}function Ra(){return Ae(this,null,function*(){var Tt;let e="",t="",n=null,s=null,o=null,i=null;function r(){const y=modelSelect.value;return y==="-1"||modelSelect.selectedIndex<0?null:wn[y]||null}function a(){const y=r();modelSelect.title=(y==null?void 0:y.description)||"Choose a segmentation model to run"}const f="altKey";let l=null,c=null,g=null,d=null,u=null,p=null,m=null,x="input.nii.gz",A=null;const _=document.getElementById("dragSegmented");_&&_.querySelectorAll("button").forEach(y=>{y.onclick=()=>{Z.secondaryDragMode=parseInt(y.dataset.drag,10),_.querySelectorAll("button").forEach(F=>F.classList.toggle("active",F===y))}});const h=document.getElementById("drawBtn"),v=document.getElementById("drawPopover"),S=document.getElementById("penRow"),b=document.getElementById("drawApplyRow");function k(y){v&&(v.hidden=!y,h&&h.setAttribute("aria-expanded",String(y)))}function B(y){Z.drawIsEnabled=y>=0,y>=0&&(!Z.drawingVolume&&Z.volumes.length&&Z.createEmptyDrawing(),Z.drawPenValue=y&7,Z.drawPenFilled=y>7),S&&S.querySelectorAll(".chip").forEach(F=>F.classList.toggle("active",parseInt(F.dataset.pen,10)===y))}function $(y){return Ae(this,null,function*(){var ge;if(Z.volumes.length<2){window.alert("No segmentation open (run a model first).");return}if(y===0){Z.drawUndo();return}const F=(ge=Z.drawingVolume)==null?void 0:ge.img;if(!F){window.alert("Nothing drawn yet — pick a pen and draw on the image first.");return}const W=Z.volumes[1].img;if(W instanceof Float32Array){window.alert("Drawing edits label segmentations, not probability maps.");return}const de=Z.volumes[1],ue=de.dimsRAS;if(!ue||F.length!==ue[1]*ue[2]*ue[3]){window.alert("The drawing does not match the current image — redraw it.");return}const Me=y===1?1:0;let we=0;for(let be=0;be<ue[3];be++)for(let $e=0;$e<ue[2];$e++)for(let Oe=0;Oe<ue[1];Oe++,we++)F[we]>0&&(W[os(de,[Oe,$e,be])]=Me);Z.closeDrawing(),yield Z.updateGLVolume(),Z.drawIsEnabled=!1,B(-1)})}h&&(h.onclick=y=>{y.stopPropagation(),k(v.hidden)}),S&&S.querySelectorAll(".chip").forEach(y=>{y.onclick=()=>B(parseInt(y.dataset.pen,10))}),b&&b.querySelectorAll(".chip").forEach(y=>{y.onclick=()=>$(parseInt(y.dataset.apply,10))}),document.addEventListener("click",y=>{!v||v.hidden||y.target.closest(".popover-wrap")||k(!1)}),document.addEventListener("keydown",y=>{y.key==="Escape"&&k(!1)});const w=document.getElementById("appDialog");if(w&&!("closedBy"in HTMLDialogElement.prototype)){let y=!1;const F=W=>{const de=w.getBoundingClientRect();return W.clientX<de.left||W.clientX>de.right||W.clientY<de.top||W.clientY>de.bottom};w.addEventListener("pointerdown",W=>{y=W.target===w&&F(W)}),w.addEventListener("pointerup",W=>{y&&W.target===w&&F(W)&&w.close(),y=!1})}aboutBtn.onclick=function(){Kt("About BrainChop",`
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
    `)};const G=document.getElementById("shadingBtn");G.onclick=()=>{const y=G.classList.toggle("active");G.setAttribute("aria-pressed",String(y)),Z.volumeIllumination=y?.5:0},diagnosticsBtn.onclick=function(){let y=e;if(y.length<1&&window.webgpuDiagnostics){const W=window.webgpuDiagnostics;y=`:: Startup Diagnostics ::
`,y+=`Secure Context: ${W.secureContext}
`,y+=`WebGPU Enabled: ${dn}
`,y+=`F16 Support: ${W.f16Support}
`,W.error&&(y+=`Error: ${W.error}
`),y+=`User Agent: ${navigator.userAgent}
`}if(y.length<1){Kt("Diagnostics","No diagnostic string generated: run a model to create diagnostics");return}let F=y;t=t.slice(0,-2),t!==""&&F.includes("Status: OK")&&(F=F.replace("Status: OK",`Status: ${t}`)),t="",navigator.clipboard.writeText(F).then(()=>{Kt("Diagnostics",`<p>Diagnostics copied to clipboard</p><pre style="white-space: pre-wrap; font-family: monospace; font-size: 0.9em; overflow-x: auto;">${F}</pre>`)}).catch(W=>{Kt("Diagnostics",`<p>Failed to copy to clipboard.</p><pre style="white-space: pre-wrap; font-family: monospace; font-size: 0.9em; overflow-x: auto;">${F}</pre>`)})},opacitySlider0.oninput=()=>{Z.volumes[0]&&(Z.volumes[0].opacity=Number(opacitySlider0.value)),Z.updateGLVolume()};function M(){const y=Number(opacitySlider1.value);Z.volumes.slice(1).forEach((F,W)=>{F.opacity=(g==null?void 0:g[W])===F&&c!==null&&W!==c?0:y}),Z.updateGLVolume()}opacitySlider1.oninput=M;function C(y=null){const F=y==null?void 0:y.probabilityUnderlayOpacity;F!==void 0?(m===null&&(m=opacitySlider0.value),opacitySlider0.value=F,Z.volumes[0]&&(Z.volumes[0].opacity=Number(F))):m!==null&&(opacitySlider0.value=m,m=null,Z.volumes[0]&&(Z.volumes[0].opacity=Number(opacitySlider0.value)))}function I(){return Ae(this,null,function*(){const y=Z.volumes[0];let F=y.dims[1]===256&&y.dims[2]===256&&y.dims[3]===256&&y.img instanceof Uint8Array&&y.img.length===256*256*256;if((y.permRAS[0]!==-1||y.permRAS[1]!==3||y.permRAS[2]!==-2)&&(F=!1),F)return;kt("Conforming input volume to 256³...",.05),yield Mo(),yield P();const W=yield Z.volumeTransform.conform(y,{toRAS:!1}),[de,ue]=[p,x],Me=modelSelect.value;yield Z.removeVolume(0),yield Z.addVolume(W),[p,x]=[de,ue],modelSelect.value=Me,a()})}function E(){for(c=null,g=null;Z.model.volumes.length>1;)Z.model.removeVolume(Z.model.volumes.length-1)}function P(){return Ae(this,null,function*(){E(),yield Z.updateGLVolume()})}function j(){return Z.volumes.length>=2&&Z.volumes[1].colormapLabel?Z.volumes[1]:null}function R(){l=null,d=null,u=null,L&&(L.style.display="none")}function ie(){const y=j();if(y){if(d===null&&(d=y.img),l===null)y.img=d,u=null;else{const F=d,W=new F.constructor(F.length);for(let de=0;de<F.length;de++)W[de]=F[de]===l?l:0;y.img=W,u=se(l)}Z.updateGLVolume(),U()}}function se(y){const F=Z.volumes[0],W=d||Z.volumes[1]&&Z.volumes[1].img;if(!F||!W)return null;const de=F.hdr.pixDims||[],ue=de[1]&&de[2]&&de[3]?de[1]*de[2]*de[3]:1,Me=ce(F.img,W,ue),we=Me.reduce((Fe,nt)=>Fe+nt.volume_mm3,0),ge=Me.find(Fe=>Fe.label===y);if(!ge)return null;const be=we>0?ge.volume_mm3/we*100:0,$e=[ge.name,`${qe(ge.volume_mm3)} cm3   (${be.toFixed(1)}% of brain)`,`${ge.voxels.toLocaleString()} voxels`,`intensity  ${ge.mean.toFixed(0)} +/- ${ge.stdev.toFixed(0)}`];let Oe=[1,1,1,1];if(s&&s.R&&s.R[y]!=null){const Fe=nt=>Math.min(255,nt*.55+130)/255;Oe=[Fe(s.R[y]),Fe(s.G[y]),Fe(s.B[y]),1]}return{lines:$e,color:Oe}}let L=null;function U(){var ge,be;L||(L=document.createElement("div"),L.style.cssText="position:absolute;pointer-events:none;font:13px/1.55 system-ui,sans-serif;text-shadow:0 1px 2px #000;white-space:pre;color:#ebebeb",Z.canvas.parentElement.appendChild(L));const y=(be=(ge=Z.view)==null?void 0:ge.screenSlices)==null?void 0:be.find($e=>$e.axCorSag===4);if(l===null||!u||!j()||!y){L.style.display="none";return}const F=window.devicePixelRatio||1,[W,de]=y.leftTopWidthHeight;Object.assign(L.style,{left:`${W/F+8}px`,top:`${de/F+8}px`});const{lines:ue,color:Me}=u,we=Me.slice(0,3).map($e=>Math.round($e*255)).join(",");L.innerHTML=`<span style="color:rgb(${we})">${Qt(ue[0])}</span>
`+ue.slice(1).map(Qt).join(`
`),L.style.display="block"}function V(){const y=j();if(!y||!A)return null;const F=os(y,A);if(F===null)return null;const W=(d||y.img)[F];return W===void 0?null:Math.round(W*y.hdr.scl_slope+y.hdr.scl_inter)}function fe(y){j()&&(l=y===0||y===l?null:y,ie())}function H(){if(!g||!A||g.some((W,de)=>Z.volumes[de+1]!==W))return;let y=null,F=0;for(let W=0;W<g.length;W++){const de=g[W],ue=os(de,A);if(ue===null)return;const Me=de.img[ue];Number.isFinite(Me)&&Me>F&&(F=Me,y=W)}return y}function X(y){if(y[f]){if(j()){const F=V();if(F===null||Number.isNaN(F))return;fe(F)}else{const F=H();if(F===void 0)return;const W=F===c?null:F;W!==c&&(c=W,M())}y.preventDefault()}}function Se(){return Ae(this,null,function*(){if(!In){In=!0,Nn=[];try{yield he()}finally{In=!1,modelSelect.value="-1",a()}}})}function he(){return Ae(this,null,function*(){var nt,Re;const y=modelSelect.value;if(y==="-1"||modelSelect.selectedIndex<0)return;const F=document.getElementById("memstatusItem");F&&(F.hidden=!0),R(),yield I();const W=wn[y],de=(new URLSearchParams(window.location.search).get("precision")||"").toLowerCase(),Me=wt(wt({},Ns(W,de!=="fp16"&&de!=="fp32")),de==="fp32"?{forceFP32:!0}:{}),we=wt({},ca),ge=new URL("./",window.location.href).href;we.rootURL=ge.endsWith("/")?ge.slice(0,-1):ge;const be=Z.volumes[0].img;let $e=null;const Oe=qa&&!Me.quantize8Bit,Fe=Oe;if(Oe&&dn&&Me.webgpu_safetensor&&console.info("Safari WebGPU legacy gate active for non-V4 model; routing to native WebGL2."),!Fe&&(!on||on.__isLost)&&"gpu"in navigator&&rs<2&&(nt=window.webgpuDiagnostics)!=null&&nt.adapterObtained&&(rs++,console.info(`[WebGPU] Re-initializing device after prior loss (attempt ${rs})...`),yield Ks((Re=Z.view)==null?void 0:Re.gl)),dn&&on&&!on.__isLost&&!Fe&&Me.webgpu_safetensor){console.log("Attempting WebGPU backend...");const ne=Ut(wt({},Me),{enableTTA:!1});try{yield ua(on,we,ne,Z.volumes[0].hdr,be,dt,kt);return}catch(O){$e=O,console.error("WebGPU inference failed, falling back to native WebGL2.",O)}}if(W.webgpu_safetensor){const ne=de==="int8"||de==="rgba8",O=Ut(wt({},Ns(W,!1)),{quantize8Bit:ne,autoQuantize8BitFallback:!ne&&!!W.turbo});try{const{runInferenceWebGl2:le,nativeWebgl2Available:Te}=yield _t(()=>Ae(null,null,function*(){const{runInferenceWebGl2:at,nativeWebgl2Available:Ke}=yield import("./inference-webgl2-IAboq3wV.js");return{runInferenceWebGl2:at,nativeWebgl2Available:Ke}}),[],import.meta.url);if(Te()){console.log("Attempting native WebGL2 runner..."),yield le(we,O,Z.volumes[0].hdr,be,dt,kt);return}$e=new Error("Native WebGL2 unavailable (no OffscreenCanvas WebGL2 context)."),console.warn($e.message)}catch(le){$e=le,console.error("Native WebGL2 failed.",le)}}Ga($e||new Error(`No available backend could run ${Me.modelName}.`))})}modelSelect.onchange=()=>(a(),Se()),a();function ze(y){return Ae(this,null,function*(){const F=j(),W=l!==null&&F&&d;W&&(F.img=d);try{return yield y()}finally{W&&ie()}})}function ee(){const y=Z.volumes[1],F=(o==null?void 0:o.type)==="Brain_Extraction"?i:l!==null&&d?d:y.img;if(!F||F.length!==y.img.length)throw new Error("The segmentation mask is unavailable. Run the model again.");const W=new Uint8Array(F.length);for(let ue=0;ue<F.length;ue++)W[ue]=F[ue]!==0?1:0;const de=Ys(y,W,"brain_mask");return Object.assign(de.hdr,{datatypeCode:2,numBitsPerVoxel:8,scl_slope:1,scl_inter:0,cal_min:0,cal_max:1,intent_code:1002}),de}function D(){return Ae(this,arguments,function*({includeMask:y=!1,useFreeSurfer:F=!1}={}){if(Z.volumes.length<2){window.alert("No segmentation to save (run a model first).");return}const W=F?En(n):null,de=Z.volumes.slice(1);yield ze(()=>Ae(null,null,function*(){for(const ue of de){const Me=!!ue.colormapLabel||ue.hdr.intent_code===1002;if(W&&Me){const{img:we,maxLabel:ge}=$a(ue.img,W),be=ss(ue,we,ue.name,{datatypeCode:4,numBitsPerVoxel:16,scl_slope:1,scl_inter:0,cal_min:0,cal_max:ge,intent_code:1002});yield Sn(be,N(ue,de.length,"_fs"))}else yield Sn(ue,N(ue,de.length,""))}y&&(yield Sn(ee(),"binary_mask.nii.gz"))}))})}function N(y,F,W){return F>1?`segmentation_${y.name}${W}.nii.gz`:`segmentation${W}.nii.gz`}function q(){if(Z.volumes.length<1){window.alert("No image loaded.");return}Sn(Z.volumes[0],"conformed_input.nii.gz")}function re(){return Ae(this,null,function*(){if(Z.volumes.length<1){window.alert("No image loaded.");return}yield ze(()=>Ae(null,null,function*(){yield Z.saveDocument("brainchop.nvd")}))})}function T(){return Ae(this,arguments,function*({includeMask:y=!1,useFreeSurfer:F=!1}={}){if(Z.volumes.length<2){window.alert("No segmentation to save (run a model first).");return}if(!p||!p.hdr||!p.hdr.affine){window.alert("Original input grid is unavailable — reload the image and try again.");return}const W=F?En(n):null;kt("Reslicing to native space…",0),yield new Promise(de=>setTimeout(de,30));try{const de=Z.volumes.slice(1);for(const ue of de){const Me=!!ue.colormapLabel||ue.hdr.intent_code===1002,we=W&&Me?W:null,ge=yield ze(()=>oe(ue,we));yield Sn(ge,N(ue,de.length,we?"_fs_native":"_native"))}if(y){const ue=oe(ee());yield Sn(ue,"binary_mask_native.nii.gz")}kt("Saved native-space segmentation.",1)}catch(de){console.error("Native-space reslice failed:",de),window.alert("Native-space export failed: "+(de&&de.message?de.message:de))}})}function oe(y,F=null){const W=y.img,de=p.hdr.affine,ue=p.hdr.dims[1],Me=p.hdr.dims[2],we=p.hdr.dims[3],ge=y.hdr.dims[1],be=y.hdr.dims[2],$e=y.hdr.dims[3],Oe=(ae,ot)=>[ae[0][0]*ot[0]+ae[0][1]*ot[1]+ae[0][2]*ot[2]+ae[0][3],ae[1][0]*ot[0]+ae[1][1]*ot[1]+ae[1][2]*ot[2]+ae[1][3],ae[2][0]*ot[0]+ae[2][1]*ot[1]+ae[2][2]*ot[2]+ae[2][3]],Fe=Oo();if(!No(Fe,Do(...y.hdr.affine[0],...y.hdr.affine[1],...y.hdr.affine[2],...y.hdr.affine[3])))throw new Error("Segmentation affine is not invertible");const nt=(ae,ot)=>[ae[0]*ot[0]+ae[1]*ot[1]+ae[2]*ot[2]+ae[3],ae[4]*ot[0]+ae[5]*ot[1]+ae[6]*ot[2]+ae[7],ae[8]*ot[0]+ae[9]*ot[1]+ae[10]*ot[2]+ae[11]],Re=ae=>nt(Fe,Oe(de,ae)),ne=Re([0,0,0]),O=Re([1,0,0]).map((ae,ot)=>ae-ne[ot]),le=Re([0,1,0]).map((ae,ot)=>ae-ne[ot]),Te=Re([0,0,1]).map((ae,ot)=>ae-ne[ot]),at=!!y.colormapLabel||y.hdr.intent_code===1002,Ke=ue*Me*we,Le=Ys(p),ft=(ae,ot,tt)=>ae>=0&&ae<ge&&ot>=0&&ot<be&&tt>=0&&tt<$e?W[ae+ot*ge+tt*ge*be]:0;if(at){const ae=[];for(const gt of[-.25,.25])for(const Xe of[-.25,.25])for(const Ce of[-.25,.25])ae.push([gt*O[0]+Xe*le[0]+Ce*Te[0],gt*O[1]+Xe*le[1]+Ce*Te[1],gt*O[2]+Xe*le[2]+Ce*Te[2]]);const ot=new Int16Array(Ke),tt=F?F.length:0;let zt=0;const Ft=new Int32Array(8),Ot=new Int32Array(8);let Zt=0;for(let gt=0;gt<we;gt++)for(let Xe=0;Xe<Me;Xe++){let Ce=ne[0]+Xe*le[0]+gt*Te[0],me=ne[1]+Xe*le[1]+gt*Te[1],J=ne[2]+Xe*le[2]+gt*Te[2];for(let _e=0;_e<ue;_e++){let st=0;for(let Ue=0;Ue<8;Ue++){const lt=ft(Math.round(Ce+ae[Ue][0]),Math.round(me+ae[Ue][1]),Math.round(J+ae[Ue][2]));let ye=-1;for(let De=0;De<st;De++)if(Ft[De]===lt){ye=De;break}ye<0?(Ft[st]=lt,Ot[st]=1,st++):Ot[ye]++}let mt=Ft[0],ct=Ot[0];for(let Ue=1;Ue<st;Ue++)Ot[Ue]>ct&&(ct=Ot[Ue],mt=Ft[Ue]);F&&mt>=0&&mt<tt&&(mt=F[mt]),mt>zt&&(zt=mt),ot[Zt++]=mt,Ce+=O[0],me+=O[1],J+=O[2]}}Le.hdr.datatypeCode=4,Le.hdr.numBitsPerVoxel=16,Le.hdr.scl_slope=1,Le.hdr.scl_inter=0,Le.hdr.cal_min=0,Le.hdr.cal_max=zt,Le.hdr.intent_code=1002,Le.img=ot}else{const ae=y.img instanceof Float32Array,ot=ae?255:1,tt=ae?.5:0,zt=ae?new Uint8Array(Ke):Le.img;zt.fill(0),ae&&(Object.assign(Le.hdr,{datatypeCode:2,numBitsPerVoxel:8,cal_min:0,cal_max:1}),Le.img=zt),Le.hdr.scl_slope=1/ot,Le.hdr.scl_inter=0;const Ot=ae?(gt,Xe,Ce)=>{const me=Math.floor(gt),J=Math.floor(Xe),_e=Math.floor(Ce),st=gt-me,mt=Xe-J,ct=Ce-_e,Ue=ft(me,J,_e),lt=ft(me+1,J,_e),ye=ft(me,J+1,_e),De=ft(me+1,J+1,_e),Pt=ft(me,J,_e+1),it=ft(me+1,J,_e+1),xt=ft(me,J+1,_e+1),Ze=ft(me+1,J+1,_e+1),vt=Ue+st*(lt-Ue),We=ye+st*(De-ye),Pe=Pt+st*(it-Pt),xe=xt+st*(Ze-xt),Be=vt+mt*(We-vt),yt=Pe+mt*(xe-Pe);return Be+ct*(yt-Be)}:(gt,Xe,Ce)=>ft(Math.round(gt),Math.round(Xe),Math.round(Ce));let Zt=0;for(let gt=0;gt<we;gt++)for(let Xe=0;Xe<Me;Xe++){let Ce=ne[0]+Xe*le[0]+gt*Te[0],me=ne[1]+Xe*le[1]+gt*Te[1],J=ne[2]+Xe*le[2]+gt*Te[2];for(let _e=0;_e<ue;_e++)zt[Zt++]=Ot(Ce,me,J)*ot+tt,Ce+=O[0],me+=O[1],J+=O[2]}}return Le}let pe=!1,K=!1;const Y={cube:'<svg viewBox="0 0 24 24" class="save-opt-ico" aria-hidden="true"><path d="M12 2.75l8.25 4.75v9L12 21.25 3.75 16.5v-9z"/><path d="M12 12v9.25M3.75 7.5L12 12l8.25-4.5"/></svg>',grid:'<svg viewBox="0 0 24 24" class="save-opt-ico" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="2.5"/><path d="M3.5 9.5h17M3.5 14.5h17M9.5 3.5v17M14.5 3.5v17"/></svg>',volume:'<svg viewBox="0 0 24 24" class="save-opt-ico" aria-hidden="true"><path d="M12 3.5l8.5 4.5-8.5 4.5L3.5 8z"/><path d="M3.5 12l8.5 4.5 8.5-4.5M3.5 16l8.5 4.5 8.5-4.5"/></svg>',scene:'<svg viewBox="0 0 24 24" class="save-opt-ico" aria-hidden="true"><rect x="3.5" y="4.5" width="17" height="15" rx="2.5"/><path d="M3.5 9.5h17M9.5 9.5v10"/></svg>',arrow:'<svg viewBox="0 0 24 24" class="save-opt-arrow" aria-hidden="true"><path d="M12 4.5v11"/><path d="M7.5 11.5L12 16l4.5-4.5"/><path d="M5 19.5h14"/></svg>'},te=[{act:D,group:"seg",icon:"cube",title:"Conformed space",sub:"256³ · 1 mm isotropic",need:"seg"},{act:T,group:"seg",icon:"grid",title:"Native space",sub:"Resampled to the input grid",need:"seg"},{act:q,group:"vol",icon:"volume",title:"Conformed input volume",sub:"Resampled T1 · 256³ · 1 mm",need:"img"},{act:re,group:"vol",icon:"scene",title:"Scene (.nvd)",sub:"Full viewer state document",need:"img"}];function Q(){const y=Z.volumes.length>=1,F=Z.volumes.length>=2,W=F&&o&&o.outputType!=="probability"&&(o.type!=="Brain_Extraction"||!!i),de=F&&o&&o.outputType!=="probability"&&o.type!=="Brain_Extraction"&&!!En(n),ue=ne=>ne==="seg"?F:y;let Me=!1;const we=ne=>te.map((O,le)=>({o:O,i:le})).filter(({o:O})=>O.group===ne).map(({o:O,i:le})=>{const Te=ue(O.need),at=Te&&!Me?(Me=!0," autofocus"):"";return`<button type="button" class="save-opt${Te?"":" disabled"}" data-i="${le}"${Te?"":" disabled"}${at}>
          ${Y[O.icon]}
          <span class="save-opt-copy">
            <span class="save-opt-title">${O.title}</span>
            <span class="save-opt-sub">${O.sub}</span>
          </span>
          ${Y.arrow}
        </button>`}).join(""),ge=[];de&&ge.push(`
        <label class="save-check-row" for="saveFreeSurfer">
          <input type="checkbox" id="saveFreeSurfer" class="save-checkbox"${pe?" checked":""}>
          <span class="save-check-copy">
            <span class="save-check-title">FreeSurfer label IDs <span class="save-badge">Freeview</span></span>
            <span class="save-check-sub">FreeSurferColorLUT numbering · open directly with :colormap=lut</span>
          </span>
        </label>`),W&&ge.push(`
        <label class="save-check-row" for="saveBinaryMask">
          <input type="checkbox" id="saveBinaryMask" class="save-checkbox"${K?" checked":""}>
          <span class="save-check-copy">
            <span class="save-check-title">Also save binary mask</span>
            <span class="save-check-sub">Foreground 1 · background 0</span>
          </span>
        </label>`);const be=ge.length?`<div class="save-modifiers" role="group" aria-label="Segmentation export options">${ge.join("")}</div>`:"",Oe=`
      <div class="save-sheet">
        <section class="save-section">
          <div class="save-section-head">
            <span class="save-section-label">Segmentation</span>
            ${F?"":'<span class="save-section-hint">Run a model first</span>'}
          </div>
          <div class="save-options">${we("seg")}</div>
          ${be}
        </section>
        <section class="save-section save-section-divider">
          <div class="save-section-head">
            <span class="save-section-label">Volume &amp; Scene</span>
          </div>
          <div class="save-options">${we("vol")}</div>
        </section>
      </div>`;Kt("Save",Oe,{hideClose:!0,saveMode:!0});const Fe=document.getElementById("dialogMessage");if(!Fe)return;const nt=Fe.querySelector("#saveFreeSurfer");nt&&(nt.onchange=()=>{pe=nt.checked});const Re=Fe.querySelector("#saveBinaryMask");Re&&(Re.onchange=()=>{K=Re.checked}),Fe.querySelectorAll(".save-opt:not(.disabled)").forEach(ne=>{ne.onclick=()=>{var Ke,Le;const O=te[parseInt(ne.dataset.i,10)],le=O.need==="seg"&&!!((Ke=Fe.querySelector("#saveBinaryMask"))!=null&&Ke.checked),Te=O.need==="seg"&&de&&!!((Le=Fe.querySelector("#saveFreeSurfer"))!=null&&Le.checked),at=document.getElementById("appDialog");at&&at.open&&at.close(),O.need==="seg"?O.act({includeMask:le,useFreeSurfer:Te}):O.act()}})}const ve=document.getElementById("saveBtn");ve&&(ve.onclick=Q);function ce(y,F,W){const ue=new Map,Me=F.length;for(let be=0;be<Me;be++){const $e=F[be];if($e===0)continue;let Oe=ue.get($e);Oe||(Oe={count:0,sum:0,sumSq:0,hist:new Float64Array(256)},ue.set($e,Oe));const Fe=y[be];Oe.count++,Oe.sum+=Fe,Oe.sumSq+=Fe*Fe,Oe.hist[Fe]++}const we=(be,$e,Oe)=>{const Fe=Oe*$e;let nt=0;for(let Re=0;Re<be.length;Re++)if(nt+=be[Re],nt>=Fe)return Re;return be.length-1},ge=[];for(const[be,$e]of[...ue.entries()].sort((Oe,Fe)=>Oe[0]-Fe[0])){const Oe=$e.sum/$e.count,Fe=Math.max(0,$e.sumSq/$e.count-Oe*Oe);let nt=0,Re=0;for(let ne=0;ne<$e.hist.length;ne++)if($e.hist[ne]>0){nt=ne;break}for(let ne=$e.hist.length-1;ne>=0;ne--)if($e.hist[ne]>0){Re=ne;break}ge.push({label:be,name:n&&n[be]!=null?n[be]:`label_${be}`,voxels:$e.count,volume_mm3:$e.count*W,min:nt,max:Re,q1:we($e.hist,$e.count,.25),median:we($e.hist,$e.count,.5),q3:we($e.hist,$e.count,.75),mean:Oe,stdev:Math.sqrt(Fe)})}return ge}function ke(y,F=null){const W=F?["label","fs_label","name","voxels","volume_mm3","min","max","q1","median","q3","mean","stdev"]:["label","name","voxels","volume_mm3","min","max","q1","median","q3","mean","stdev"],de=we=>Number.isInteger(we)?String(we):we.toFixed(6),ue=we=>/[",\n]/.test(we)?`"${String(we).replace(/"/g,'""')}"`:String(we),Me=[W.join(",")];for(const we of y){const ge=F?[we.label,we.label<F.length?F[we.label]:we.label,ue(we.name)]:[we.label,ue(we.name)];ge.push(we.voxels,de(we.volume_mm3),we.min,we.max,we.q1,we.median,we.q3,de(we.mean),de(we.stdev)),Me.push(ge.join(","))}return Me.join(`
`)+`
`}function Ee(y,F=null){const W=new Blob([ke(y,F)],{type:"text/csv"}),de=URL.createObjectURL(W),ue=document.createElement("a");ue.href=de,ue.download="mask_stats.csv",document.body.appendChild(ue),ue.click(),ue.remove(),URL.revokeObjectURL(de)}const qe=y=>{const F=y/1e3;return F>=10?Math.round(F).toLocaleString():F.toFixed(1)};function Ye(y,F,W=null){const de=Math.max(...y.map(be=>be.volume_mm3)),ue=be=>s&&s.R&&s.R[be.label]!=null?`rgb(${s.R[be.label]},${s.G[be.label]},${s.B[be.label]})`:"#6b9bd1";let Me="";for(const be of y){const $e=F>0?be.volume_mm3/F*100:0,Oe=de>0?be.volume_mm3/de*100:0,Fe=l===be.label,nt=W&&be.label<W.length?W[be.label]:null,Re=`<span class="stat-val" data-cm3="${qe(be.volume_mm3)}" data-pct="${$e.toFixed(1)}%">${qe(be.volume_mm3)}</span>`,ne=`<span class="stat-bar" style="width:${Oe.toFixed(2)}%;background:${ue(be)}" data-w-abs="${Oe.toFixed(2)}" data-w-pct="${$e.toFixed(2)}"></span>`,O=(Te,at)=>`<div class="stat-kv"><span class="k">${Te}</span><span class="v">${at}</span></div>`,le=O("min",be.min)+O("max",be.max)+O("Q1",be.q1)+O("Q3",be.q3)+O("median",be.median)+O("mean",be.mean.toFixed(2))+O("SD",be.stdev.toFixed(2))+O("voxels",be.voxels.toLocaleString());Me+=`
        <div class="stat-row${Fe?" is-isolated":""}" data-label="${be.label}" data-name="${Qt(be.name.toLowerCase())}">
          <div class="stat-line">
            <button type="button" class="stat-trigger" aria-expanded="false">
              <span class="stat-chevron" aria-hidden="true"></span>
              <span class="stat-swatch" style="background:${ue(be)}" aria-hidden="true"></span>
              <span class="stat-name">${Qt(be.name)}</span>
              <span class="stat-track" aria-hidden="true">${ne}</span>
              ${Re}
            </button>
            <button type="button" class="stat-iso${Fe?" active":""}" aria-pressed="${Fe}" aria-label="Isolate ${Qt(be.name)}">${Fe?"isolated":"isolate"}</button>
          </div>
          <div class="stat-detail" hidden>
            <div class="stat-detail-meta">
              <span class="stat-detail-fullname">${Qt(be.name)}</span>
              <span class="stat-detail-badges">
                <span class="stat-id-chip">ID ${be.label}</span>
                ${nt?`<span class="save-badge">FS ${nt}</span>`:""}
              </span>
            </div>
            <div class="stat-detail-grid">${le}</div>
          </div>
        </div>`}const we=y.length===1?"region":"regions",ge=y.length>8?`<search class="stat-search">
           <input type="search" id="statsFilterInput" class="stat-filter" placeholder="Filter regions…" aria-label="Filter regions" autocorrect="off" autocapitalize="none" spellcheck="false">
         </search>`:"";return`
      <div id="statsPanel">
        <div class="stat-toolbar">
          <div class="stat-toggle" role="group" aria-label="Volume display unit">
            <button type="button" data-mode="cm3" class="active" aria-pressed="true">cm³</button>
            <button type="button" data-mode="pct" aria-pressed="false">% of total</button>
          </div>
          <span class="stat-total" id="statsUnitLabel">${y.length} ${we} &middot; ${qe(F)} cm³</span>
          ${ge}
        </div>
        <div id="statsRows">
          ${Me}
          <p id="statsEmpty" class="stat-empty" hidden>No matching regions</p>
        </div>
        <div class="stat-footer">
          <span class="stat-footer-hint">Select a row for intensity stats &middot; Isolate solos in 3D</span>
          <button type="button" id="statsDownloadBtn" class="stat-csv-btn">
            ${Y.arrow}
            <span>Download CSV</span>
          </button>
        </div>
      </div>`}saveStatsBtn.onclick=function(){if(Z.volumes.length<2){Kt("Region volumes","<p>No segmentation to measure — run a model first.</p>");return}if(Z.volumes[1].img instanceof Float32Array){Kt("Region volumes","<p>Region statistics require a discrete label segmentation, not continuous probability maps.</p>");return}const y=Z.volumes[0].img,F=d||Z.volumes[1].img;if(!y||!F||y.length!==F.length){Kt("Region volumes","<p>Input and segmentation grids do not match.</p>");return}const W=Z.volumes[0].hdr.pixDims||[],de=W[1]&&W[2]&&W[3]?W[1]*W[2]*W[3]:1;let ue=ce(y,F,de);if(ue.length===0){Kt("Region volumes","<p>No non-background labels found in the segmentation.</p>");return}ue=ue.slice().sort((Re,ne)=>ne.volume_mm3-Re.volume_mm3);const Me=ue.reduce((Re,ne)=>Re+ne.volume_mm3,0),we=o&&o.type!=="Brain_Extraction"?En(n):null;Kt("Region volumes",Ye(ue,Me,we),{hideClose:!0,statsMode:!0});const ge=document.getElementById("statsPanel");if(!ge)return;let be="cm3",$e=ue.length;const Oe=()=>{const Re=document.getElementById("statsUnitLabel");if(!Re)return;const ne=$e===ue.length?`${ue.length} ${ue.length===1?"region":"regions"}`:`${$e} of ${ue.length} regions`,O=be==="pct"?"100% of volume":`${qe(Me)} cm³`;Re.innerHTML=`${ne} &middot; ${O}`};ge.querySelectorAll(".stat-toggle button").forEach(Re=>{Re.onclick=()=>{be=Re.dataset.mode,ge.querySelectorAll(".stat-toggle button").forEach(ne=>{const O=ne===Re;ne.classList.toggle("active",O),ne.setAttribute("aria-pressed",String(O))}),Oe(),ge.querySelectorAll(".stat-row").forEach(ne=>{const O=ne.querySelector(".stat-val"),le=ne.querySelector(".stat-bar");O.textContent=be==="pct"?O.dataset.pct:O.dataset.cm3,le.style.width=(be==="pct"?le.dataset.wPct:le.dataset.wAbs)+"%"})}});const Fe=document.getElementById("statsFilterInput"),nt=document.getElementById("statsEmpty");if(Fe){const Re=()=>{const ne=Fe.value.trim().toLowerCase();$e=0,ge.querySelectorAll(".stat-row").forEach(O=>{const le=!ne||O.dataset.name.includes(ne)||O.dataset.label===ne;O.hidden=!le,le&&$e++}),nt&&(nt.hidden=$e>0),Oe()};Fe.oninput=Re,Fe.addEventListener("keydown",ne=>{ne.key==="Escape"&&Fe.value!==""&&(ne.preventDefault(),ne.stopPropagation(),Fe.value="",Re())})}ge.querySelectorAll(".stat-trigger").forEach(Re=>{Re.onclick=()=>{const ne=Re.closest(".stat-row"),O=ne.querySelector(".stat-detail"),le=O.hidden;O.hidden=!le,ne.classList.toggle("is-expanded",le),Re.setAttribute("aria-expanded",String(le))}}),ge.querySelectorAll(".stat-iso").forEach(Re=>{Re.onclick=()=>{const ne=parseInt(Re.closest(".stat-row").dataset.label,10);Number.isNaN(ne)||fe(ne);const O=document.getElementById("appDialog");O&&O.open&&O.close()}}),document.getElementById("statsDownloadBtn").onclick=()=>Ee(ue,we)};function Ge(){Z.volumes.length<=1&&(p=Z.volumes[0]||null,x=p&&p.name?p.name:"input.nii.gz",o=null,i=null,C(),modelSelect.value="-1",a(),Z.volumes[0]&&opacitySlider0.oninput())}const Ie=new Map;function Je(y){return Ae(this,null,function*(){if(Ie.has(y))return Ie.get(y);const W=yield(yield fetch(y)).json();return Ie.set(y,W),W})}function He(y,F,W=1){let de=0;for(let ue=0;ue<256;ue++)y[ue]>0&&de++;return(!F||de!==F.length)&&(t="Failed to Predict Some Labels - "),F.map((ue,Me)=>{const we=Me<256?y[Me]:0,ge=we>0?`${qe(we*W)} cm3`:"Missing";return ge==="Missing"&&(t+=`${ue}, `),`${ue}   ${ge}`})}function je(y,F,W){return Ae(this,null,function*(){var $e,Oe;const de=($e=F.probabilityDisplayMin)!=null?$e:.005,{probabilityOverlayAlpha:ue=96,probabilityOverlayFloor:Me=192}=F,we=(W==null?void 0:W.tint)||[255,255,255],ge=`probability-light-${we.join("-")}-${Me}-${ue}`;if(!Z.hasColormap(ge)){const[Fe,nt,Re]=we.map(ne=>Math.round(ne*Me/255));Z.addColormap(ge,{R:[Fe,we[0]],G:[nt,we[1]],B:[Re,we[2]],A:[0,ue],I:[0,255]})}const be=ss(Z.volumes[0],y instanceof Float32Array?y:Float32Array.from(y),(Oe=W==null?void 0:W.name)!=null?Oe:Z.volumes[0].name,{scl_inter:0,scl_slope:1,datatypeCode:16,numBitsPerVoxel:32,cal_min:0,cal_max:1,intent_code:1001},{calMin:de,calMax:1,robustMin:de,robustMax:1,globalMin:0,globalMax:1,colormapType:1,colormap:ge,opacity:Number(opacitySlider1.value),modulateAlpha:1});return be.modulationImage=be.id,yield Z.model.addVolume(be),Z.volumes.at(-1)})}function dt(y,F,W,de){return Ae(this,null,function*(){var Fe,nt,Re;if(E(),R(),n=null,s=null,o=W,i=W.type==="Brain_Extraction"&&de||null,W.outputType==="probability"){const ne=Array.isArray(y)?y:[y],O=[];for(let le=0;le<ne.length;le++)O.push(yield je(ne[le],W,(Fe=W.probabilityTissues)==null?void 0:Fe[le]));W.probabilityPostprocess==="cat-lite"&&O.length===3&&(g=O),C(W),yield Z.updateGLVolume();return}const ue=y instanceof Uint8Array?y:new Uint8Array(y.buffer,y.byteOffset||0,y.byteLength);let Me,we=null,ge=0,be={calMin:0,calMax:255,robustMin:0,robustMax:255,globalMin:0,globalMax:255};if(W.type==="Brain_Masking"){const ne=["Background","Brain Mask"];n=ne.slice();const O=[0,217],le=[0,119],Te=[0,33];s={R:O,G:le,B:Te};const at={R:O,G:le,B:Te,labels:ne},Ke="brainchop-label-mask";Z.addColormap(Ke,at),Me=Ke,we=Ms(at),ge=1002,be={calMin:0,calMax:1,robustMin:0,robustMax:1,globalMin:0,globalMax:1}}else if(W.colormapPath){const ne=as(ue),O=yield Je(W.colormapPath);n=O.labels?O.labels.slice():null,s={R:O.R,G:O.G,B:O.B};const le=Z.volumes[0].hdr.pixDims||[],Te=le[1]&&le[2]&&le[3]?le[1]*le[2]*le[3]:1,at=O.labels?He(ne,O.labels,Te):[],Ke=Ut(wt(wt({R:O.R,G:O.G,B:O.B},O.I?{I:O.I}:{}),O.A?{A:O.A}:{}),{labels:at}),Le=`brainchop-label-${W.id}`;Z.addColormap(Le,Ke),Me=Le,we=Ms(Ke);const ft=Math.max(1,((Re=(nt=O.R)==null?void 0:nt.length)!=null?Re:256)-1);ge=1002,be={calMin:0,calMax:ft,robustMin:0,robustMax:ft,globalMin:0,globalMax:ft}}else{const ne=as(ue);be=Wa(ne),Me=F.atlasSelectedColorTable.toLowerCase(),W.type==="Brain_Extraction"&&(Me="copper2"),Z.hasColormap(Me)||(Me="actc")}const $e=ss(Z.volumes[0],ue,Z.volumes[0].name,{datatypeCode:2,numBitsPerVoxel:8,scl_inter:0,scl_slope:1,cal_min:be.calMin,cal_max:be.calMax,intent_code:ge},Ut(wt(Ut(wt({},be),{colormap:Me}),we?{colormapLabel:we}:{}),{opacity:Number(opacitySlider1.value)}));yield Z.model.addVolume($e);const Oe=Z.volumes.at(-1);we&&Oe&&!Oe.colormapLabel&&(Oe.colormapLabel=we),C(W),yield Z.updateGLVolume()})}function pt(y){return Ae(this,null,function*(){var F;if(typeof y=="string")try{y=JSON.parse(y)}catch(W){console.error("Failed to parse telemetry data",W);return}y=yield va(y,(F=Z.view)==null?void 0:F.gl),e=`:: Diagnostics https://github.com/neuroneural/brainchop/issues ::
`;for(const W in y)y[W]!==null&&y[W]!==void 0&&(e+=`${W}: ${y[W]}
`)})}function Ct(y){const F=String(y).split(" · ").map(W=>W.trim()).filter(W=>W!=="");return F.length<=1?Qt(String(y)):F.map((W,de)=>`<span class="loc-seg"${de>=2?' style="opacity:.75"':""}>${Qt(W)}</span>`).join('<span class="loc-sep">&middot;</span>')}function kt(y="",F=-1,W="",de=[]){if(y){console.log(y);const ue=document.getElementById("location");ue&&(ue.innerHTML=Ct(y))}if(isNaN(F)){const ue=document.getElementById("memstatusItem");ue&&(ue.hidden=!1),memstatus.style.color="#ef4444",memstatus.textContent="Memory Issue"}else F>=0&&(modelProgress.value=F*modelProgress.max);W&&(In?(Nn.push(String(W)),console.warn("[backend]",W)):Kt("Message",Qt(String(W)).replace(/\n/g,"<br>"))),de&&Object.keys(de).length>0&&pt(de)}function Gt(y){A=y.vox,document.getElementById("location").innerHTML=y.string.split("   ").map(F=>F.trim()).filter(F=>F!=="").map(F=>`<span class="loc-seg">${Qt(F)}</span>`).join('<span class="loc-sep">&middot;</span>')}const Et=new URLSearchParams(window.location.search).get("viewer")==="webgpu"?"webgpu":"webgl2",Z=new qo({backend:Et,matcaps:{Shiny:Ro}});yield Z.attachTo("gl1"),console.info("NiiVue viewer backend:",Z.backend),Z.backgroundColor=[0,0,0,1],Z.is3DCrosshairVisible=!0,Z.clipPlaneColor=[.7,0,.7,.5],Z.gamma=1,Z.registerVolumeTransform(To),Z.isLegendVisible=!1,Z.addEventListener("locationChange",y=>Gt(y.detail)),Z.canvas.addEventListener("click",X),window.addEventListener("keydown",y=>{y.key==="Escape"&&(document.querySelector("dialog[open]")||(l!==null?(l=null,ie()):c!==null&&(c=null,M())))});const Jt=Z.drawScene.bind(Z);Z.drawScene=function(y){const F=Jt(y);try{U()}catch(W){console.warn("isolation HUD draw failed",W)}return F},Z.primaryDragMode=As.crosshair,Z.secondaryDragMode=As.slicer3D,Z.showRender=Go.ALWAYS,Z.isYoked3DTo2DZoom=!0,Z.crosshairGap=11;{const y=document.getElementById("dragSegmented");y&&y.querySelectorAll("button").forEach(F=>F.classList.toggle("active",parseInt(F.dataset.drag,10)===Z.secondaryDragMode))}Z.volumeIsNearestInterpolation=!0,yield Z.loadVolumes([{url:"./t1_crop.nii.gz"}]),modelSelect.innerHTML="";const Bt=document.createElement("option");Bt.text="Run Segmentation Model",Bt.value="-1",Bt.disabled=!0,Bt.selected=!0,Bt.hidden=!0,modelSelect.appendChild(Bt);for(let y=0;y<wn.length;y++){console.log(`Adding model option: ${wn[y].modelName}`);const F=document.createElement("option");F.text=wn[y].modelName,F.value=y,wn[y].type==="Divider"&&(F.disabled=!0),modelSelect.appendChild(F)}Z.addEventListener("volumeLoaded",Ge),Ge(),Ua(Z),Ca(Z),modelSelect.value="-1",a(),B(-1),yield Ks((Tt=Z.view)==null?void 0:Tt.gl);const Lt=new URLSearchParams(window.location.search).get("model");Lt!==null&&Lt!==""&&Number(Lt)>=0&&Number(Lt)<wn.length?(modelSelect.value=String(Number(Lt)),a(),Se()):dn&&on&&(window.requestIdleCallback?F=>window.requestIdleCallback(F,{timeout:600}):F=>setTimeout(F,200))(()=>ra(on))})}function Qt(e){return String(e).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Ga(e){const n=(Nn.length?Nn:[e&&e.message?e.message:String(e||"unknown error")]).map(s=>`<li>${Qt(s)}</li>`).join("");Kt("Segmentation failed",`<p>No available backend could run this model on this device.</p>
     <ul style="margin:0 0 4px 1.1em;padding:0;font-size:0.92em;line-height:1.45">${n}</ul>
     <p style="font-size:0.88em;color:#9aa4af">Full details are in the browser console and under Diagnostics.</p>`)}function Kt(e,t,n={}){const s=document.getElementById("appDialog"),o=document.getElementById("dialogTitle"),i=document.getElementById("dialogMessage"),r=document.getElementById("dialogCloseBtn");if(!s)return;o.textContent=e,i.innerHTML=t,r.style.display=n.hideClose?"none":"",r.onclick=()=>s.close(),s.classList.toggle("dialog-save",!!n.saveMode),s.classList.toggle("dialog-stats",!!n.statsMode);const a=document.getElementById("dialogXBtn");a&&(a.onclick=()=>s.close()),s.showModal()}function Ea(){return Ae(this,null,function*(){try{const t=yield(yield fetch("https://api.github.com/repos/neuroneural/brainchop")).json();document.getElementById("star-count").textContent=t.stargazers_count}catch(e){console.error("Error fetching star count:",e)}})}(function(){return Ae(this,null,function*(){yield Ra(),yield Ea()})})();export{to as a,eo as d,Js as p};
