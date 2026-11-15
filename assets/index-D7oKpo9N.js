const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./dkatlas24_int8_v3_runner-BKb9nnmz.js","./vendor-niivue-BztUWqGV.js","./vendor-CKvLRpOF.js","./vendor-math-oqRZD8Fx.js"])))=>i.map(i=>d[i]);
var Oo=Object.defineProperty,No=Object.defineProperties;var Eo=Object.getOwnPropertyDescriptors;var gn=Object.getOwnPropertySymbols;var En=Object.prototype.hasOwnProperty,Dn=Object.prototype.propertyIsEnumerable;var zt=Math.pow,Nn=(t,e,n)=>e in t?Oo(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,dt=(t,e)=>{for(var n in e||(e={}))En.call(e,n)&&Nn(t,n,e[n]);if(gn)for(var n of gn(e))Dn.call(e,n)&&Nn(t,n,e[n]);return t},St=(t,e)=>No(t,Eo(e));var Vn=(t,e)=>{var n={};for(var o in t)En.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(t!=null&&gn)for(var o of gn(t))e.indexOf(o)<0&&Dn.call(t,o)&&(n[o]=t[o]);return n};var ce=(t,e,n)=>new Promise((o,s)=>{var i=c=>{try{a(n.next(c))}catch(l){s(l)}},r=c=>{try{a(n.throw(c))}catch(l){s(l)}},a=c=>c.done?o(c.value):Promise.resolve(c.value).then(i,r);a((n=n.apply(t,e)).next())});import{z as un,$ as Do,t as Vo,L as jn,Y as jo,M as Hn,a as Ho,_ as Xo}from"./vendor-niivue-BztUWqGV.js";import{g as Yo}from"./vendor-CKvLRpOF.js";import{l as Ko,n as Zo,p as Qo}from"./vendor-math-oqRZD8Fx.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const Jo="modulepreload",es=function(t,e){return new URL(t,e).href},Xn={},st=function(e,n,o){let s=Promise.resolve();if(n&&n.length>0){let l=function(f){return Promise.all(f.map(g=>Promise.resolve(g).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};const r=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),c=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=l(n.map(f=>{if(f=es(f,o),f in Xn)return;Xn[f]=!0;const g=f.endsWith(".css"),d=g?'[rel="stylesheet"]':"";if(o)for(let p=r.length-1;p>=0;p--){const m=r[p];if(m.href===f&&(!g||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${d}`))return;const u=document.createElement("link");if(u.rel=g?"stylesheet":Jo,g||(u.as="script"),u.crossOrigin="",u.href=f,c&&u.setAttribute("nonce",c),document.head.appendChild(u),g)return new Promise((p,m)=>{u.addEventListener("load",p),u.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${f}`)))})}))}function i(r){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=r,window.dispatchEvent(a),!a.defaultPrevented)throw r}return s.then(r=>{for(const a of r||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})},jt=new WeakMap;class ts{getLabelMeta(e){return jt.get(e)||null}idx(e,n,o,s){return o*s[0]*s[1]+n*s[0]+e}check_previous_slice(e,n,o,s,i,r,a,c,l,f){let g=0;if(!i)return 0;const d=e[this.idx(o,s,i,r)];if(a>=6){const u=this.idx(o,s,i-1,r);d===e[u]&&(l[g++]=n[u])}if(a>=18){if(o){const u=this.idx(o-1,s,i-1,r);d===e[u]&&(l[g++]=n[u])}if(s){const u=this.idx(o,s-1,i-1,r);d===e[u]&&(l[g++]=n[u])}if(o<r[0]-1){const u=this.idx(o+1,s,i-1,r);d===e[u]&&(l[g++]=n[u])}if(s<r[1]-1){const u=this.idx(o,s+1,i-1,r);d===e[u]&&(l[g++]=n[u])}}if(a===26){if(o&&s){const u=this.idx(o-1,s-1,i-1,r);d===e[u]&&(l[g++]=n[u])}if(o<r[0]-1&&s){const u=this.idx(o+1,s-1,i-1,r);d===e[u]&&(l[g++]=n[u])}if(o&&s<r[1]-1){const u=this.idx(o-1,s+1,i-1,r);d===e[u]&&(l[g++]=n[u])}if(o<r[0]-1&&s<r[1]-1){const u=this.idx(o+1,s+1,i-1,r);d===e[u]&&(l[g++]=n[u])}}return g?(this.fill_tratab(c,l,g,f),l[0]):0}do_initial_labelling(e,n,o,s=null){const i=n[0]|0,r=n[1]|0,a=n[2]|0,c=i*r,l=c*a;let f=1;const g=8192;let d=g,u=new Uint32Array(d),p;if(o===6&&s&&s.il&&s.il.length===l){if(p=s.il,s.dirty)p.fill(0);else if(s.runs&&s.runLen>0){const _=s.runs,h=s.runLen;for(let v=0;v<h;v+=2)p.fill(0,_[v],_[v+1])}}else p=new Uint32Array(l),o===6&&s&&(s.il=p,s.runs=null,s.runLen=0,s.dirty=!1);if(o===6){s&&(s.dirty=!0);const _=(e instanceof Uint8Array||e instanceof Uint8ClampedArray)&&(e.byteOffset&3)===0&&(i&3)===0&&e.length>=l?new Uint32Array(e.buffer,e.byteOffset,l>>2):null;let h=s&&s.runs?s.runs:new Uint32Array(8192),v=h.length,x=0,w=0,$=0,M=0,b=-1,B=-1,T=a,k=-1;for(let P=0;P<a;P++){const L=P*c;for(let W=0;W<r;W++){const z=L+W*i;let Y=0;if(_){const Q=z+i>>2;let j=z>>2;for(;j<Q&&_[j]===0;)j++;if(j===Q)continue;Y=(j<<2)-z}let R=!1;for(;Y<i;Y++){const Q=z+Y;if(_&&!R&&(Y&3)===0&&_[Q>>2]===0){Y+=3;continue}const j=e[Q];if(j===0){R&&(h[x++]=Q,R=!1);continue}if(!R){if(x+2>v){v<<=1;const F=new Uint32Array(v);F.set(h),h=F}h[x++]=Q,R=!0}b<0&&(b=Q,T=P),B=Q,k=P;let G=0;if(P>0&&e[Q-c]===j&&(w=p[Q-c],G=1),Y>0&&e[Q-1]===j){const F=p[Q-1];G===0?w=F:G===1?$=F:M=F,G++}if(W>0&&e[Q-i]===j){const F=p[Q-i];G===0?w=F:G===1?$=F:M=F,G++}if(G===0){if(p[Q]=f,f>=d){d+=g;const F=new Uint32Array(d);F.set(u),u=F}u[f-1]=f,f++}else if(p[Q]=w,G===2&&$!==w){let F=w;for(;u[F-1]!==F;)F=u[F-1];let H=$;for(;u[H-1]!==H;)H=u[H-1];const X=F<H?F:H;u[F-1]=X,u[H-1]=X}else if(G===3&&($!==w||M!==w)){let F=w;for(;u[F-1]!==F;)F=u[F-1];let H=$;for(;u[H-1]!==H;)H=u[H-1];let X=M;for(;u[X-1]!==X;)X=u[X-1];let I=F<H?F:H;X<I&&(I=X),u[F-1]=I,u[H-1]=I,u[X-1]=I}}R&&(h[x++]=z+i)}}for(let P=0;P<f-1;P++){let L=P;for(;u[L]!==L+1;)L=u[L]-1;u[P]=L+1}return s&&(s.runs=h,s.runLen=x,s.dirty=!1),this._lastInitialRange={conn:6,fgStart:b,fgEnd:B,minSl:T,maxSl:k,runs:h,runLen:x},[f-1,u,p]}const m=new Uint32Array(32),S=new Uint32Array(32),A=new Uint32Array(27);for(let _=0;_<a;_++)for(let h=0;h<r;h++)for(let v=0;v<i;v++){let x=0;const w=e[this.idx(v,h,_,n)];if(w!==0){if(A[0]=this.check_previous_slice(e,p,v,h,_,n,o,u,m,S),A[0]&&(x+=1),o>=6){if(v){const $=this.idx(v-1,h,_,n);w===e[$]&&(A[x++]=p[$])}if(h){const $=this.idx(v,h-1,_,n);w===e[$]&&(A[x++]=p[$])}}if(o>=18){if(h&&v){const $=this.idx(v-1,h-1,_,n);w===e[$]&&(A[x++]=p[$])}if(h&&v<i-1){const $=this.idx(v+1,h-1,_,n);w===e[$]&&(A[x++]=p[$])}}if(x)p[this.idx(v,h,_,n)]=A[0],this.fill_tratab(u,A,x,S);else{if(p[this.idx(v,h,_,n)]=f,f>=d){d+=g;const $=new Uint32Array(d);$.set(u),u=$}u[f-1]=f,f++}}}for(let _=0;_<f-1;_++){let h=_;for(;u[h]!==h+1;)h=u[h]-1;u[_]=h+1}return this._lastInitialRange=null,[f-1,u,p]}fill_tratab(e,n,o,s){let r=2147483647;for(let a=0;a<o;a++){let c=n[a];for(;e[c-1]!==c;)c=e[c-1];s[a]=c,r=Math.min(r,c)}for(let a=0;a<o;a++)e[s[a]-1]=r}translate_labels(e,n,o,s,i=null,r=null){const a=n[0]*n[1]*n[2];if(r&&(s===0||r.fgStart<0))return i&&(this._lastMeta={conn:r.conn,cl:0,fgStart:0,fgEnd:-1,minSl:0,maxSl:-1,ls2bw:new Uint32Array(1),sumls:new Uint32Array(1),distinctFgClasses:0,bw:i}),[0,e];let c=0;for(let m=0;m<s;m++)o[m]>c&&(c=o[m]);const l=new Uint32Array(c+1),f=i&&r?new Uint32Array(s+1):null,g=i&&r?new Uint32Array(s+1):null,d=r?r.fgStart:0,u=r?r.fgEnd:a-1;let p=0;if(r&&r.runs){const m=r.runs,S=r.runLen;for(let A=0;A<S;A+=2){const _=m[A],h=m[A+1];for(let v=_;v<h;v++){const x=o[e[v]-1];let w=l[x];w||(p+=1,w=p,l[x]=w,f&&(f[w]=i[v])),e[v]=w,g&&g[w]++}}}else for(let m=d;m<=u;m++){const S=e[m];if(S){const A=o[S-1];let _=l[A];_||(p+=1,_=p,l[A]=_,f&&(f[_]=i[m])),e[m]=_,g&&g[_]++}}if(i&&r){const m=f.slice(0,p+1),S=g.slice(0,p+1);let A=0;if(p>0){const _=m[1];A=1;for(let h=2;h<=p;h++)if(m[h]!==_){A=2;break}}this._lastMeta={conn:r.conn,cl:p,fgStart:r.fgStart,fgEnd:r.fgEnd,minSl:r.minSl,maxSl:r.maxSl,runs:r.runs,runLen:r.runLen,ls2bw:m,sumls:S,distinctFgClasses:A,bw:i}}return[p,e]}neighbor_winners(e,n,o,s,i=null,r=null){const a=n[0],c=n[1],l=n[2],f=a*c,g=!!(r&&i);let d=!1;for(let v=1;v<=s;v++)if(!o[v]){d=!0;break}if(!d)return g&&console.log("[relabel] 0/0 suppressed components resolved within their own class family (0 fell back to the unrestricted neighbour vote)"),new Uint32Array(s+1);const u=g?new Int32Array(s+1).fill(-1):null,p=new Map,m=(v,x)=>{let w=p.get(v);w||(w=new Map,p.set(v,w)),w.set(x,(w.get(x)||0)+1)},S=jt.get(e),A=S&&S.cl===s&&e.length===f*l;if(A&&S.runs){const v=S.runs,x=S.runLen;for(let w=0;w<x;w+=2){const $=v[w],M=v[w+1],b=$/f|0,B=$-b*f,T=B/a|0;let k=B-T*a;for(let P=$;P<M;P++,k++){const L=e[P];if(o[L])continue;g&&u[L]<0&&(u[L]=r(i[P]));let W;k>0&&(W=o[e[P-1]])&&m(L,W),k<a-1&&(W=o[e[P+1]])&&m(L,W),T>0&&(W=o[e[P-a]])&&m(L,W),T<c-1&&(W=o[e[P+a]])&&m(L,W),b>0&&(W=o[e[P-f]])&&m(L,W),b<l-1&&(W=o[e[P+f]])&&m(L,W)}}}else{const v=A?S.minSl:0,x=A?S.maxSl:l-1;let w=v*f;for(let $=v;$<=x;$++)for(let M=0;M<c;M++)for(let b=0;b<a;b++,w++){const B=e[w];if(B===0||o[B])continue;g&&u[B]<0&&(u[B]=r(i[w]));let T;b>0&&(T=o[e[w-1]])&&m(B,T),b<a-1&&(T=o[e[w+1]])&&m(B,T),M>0&&(T=o[e[w-a]])&&m(B,T),M<c-1&&(T=o[e[w+a]])&&m(B,T),$>0&&(T=o[e[w-f]])&&m(B,T),$<l-1&&(T=o[e[w+f]])&&m(B,T)}}const _=new Uint32Array(s+1).fill(0);let h=0;for(const[v,x]of p){const w=g?u[v]:0;let $=0,M=0;if(w>0){for(const[b,B]of x)r(b)===w&&(B>M||B===M&&($===0||b<$))&&(M=B,$=b);$&&h++}if(!$)for(const[b,B]of x)(B>M||B===M&&($===0||b<$))&&(M=B,$=b);_[v]=$}return g&&console.log(`[relabel] ${h}/${p.size} suppressed components resolved within their own class family (${p.size-h} fell back to the unrestricted neighbour vote)`),_}finalize_volume(e,n,o,s,i,r=null,a=null,c=!1){const l=e.length,f=i?this.neighbor_winners(e,n,o,s,r,a):null,g=f?new Uint32Array(s+1):o;let d=0;for(let _=1;_<=s;_++){let h=o[_];f&&(h||(h=f[_]),g[_]=h),h>d&&(d=h)}const u=jt.get(e),p=u&&u.cl===s&&u.ls2bw.length===s+1&&u.fgEnd<l;let m=0;if(p&&u.runs){const _=u.runs,h=u.runLen;for(let w=1;w<=s;w++)u.sumls[w]>0&&g[w]>m&&(m=g[w]);if(u.bw===r&&r instanceof Uint8Array&&d<=255){const w=new Uint8Array(s+1);let $=!1;for(let b=1;b<=s;b++)u.sumls[b]>0&&g[b]!==u.ls2bw[b]&&(w[b]=1,$=!0);const M=c?r:r.slice();if($)for(let b=0;b<h;b+=2){const B=_[b],T=_[b+1];for(let k=B;k<T;k++){const P=e[k];w[P]&&(M[k]=g[P])}}return[m,M]}const x=r instanceof Uint8Array&&d<=255?new Uint8Array(l):new Uint32Array(l);for(let w=0;w<h;w+=2){const $=_[w],M=_[w+1];for(let b=$;b<M;b++){const B=g[e[b]];B&&(x[b]=B)}}return[m,x]}const A=r instanceof Uint8Array&&d<=255?new Uint8Array(l):new Uint32Array(l);if(p){if(u.fgStart>=0&&u.fgEnd>=u.fgStart)for(let _=u.fgStart;_<=u.fgEnd;_++){const h=e[_];if(h!==0){const v=g[h];v&&(A[_]=v,v>m&&(m=v))}}}else for(let _=0;_<l;_++){const h=e[_];if(h!==0){const v=g[h];v&&(A[_]=v,v>m&&(m=v))}}return[m,A]}diagnose_components(e,n,o,s,i={}){var b,B,T;const r=(b=i.topN)!=null?b:50,a=(B=i.minSize)!=null?B:1,c=(T=i.label)!=null?T:"diag",l=s[0],f=s[1],g=s[2],d=l*f,u=new Uint32Array(n+1),p=new Uint32Array(n+1);for(let k=0;k<e.length;k++){const P=o[k];P&&(u[P]=e[k],p[P]++)}const m=new Map,S=new Uint32Array(n+1),A=new Uint32Array(n+1),_=(k,P)=>{let L=m.get(k);L||(L=new Map,m.set(k,L)),L.set(P,(L.get(P)||0)+1)};for(let k=0;k<g;k++)for(let P=0;P<f;P++)for(let L=0;L<l;L++){const W=k*d+P*l+L,z=o[W];if(!z)continue;const Y=u[z],R=Q=>{const j=o[Q];if(j===z)return;A[z]++;const G=j?u[j]:0;G===0?S[z]++:G!==Y&&_(z,G)};L>0&&R(W-1),L<l-1&&R(W+1),P>0&&R(W-l),P<f-1&&R(W+l),k>0&&R(W-d),k<g-1&&R(W+d)}const h=new Map,v=new Map;for(let k=1;k<=n;k++){const P=u[k];h.set(P,(h.get(P)||0)+1),(!v.has(P)||p[k]>v.get(P))&&v.set(P,p[k])}const x=[];for(let k=1;k<=n;k++){if(p[k]<a)continue;const P=u[k],L=m.get(k);let W=0,z=0,Y=0;if(L)for(const[Q,j]of L)Y+=j,j>z&&(z=j,W=Q);const R=A[k]||1;x.push({comp:k,class:P,size:p[k],largestOfClass:p[k]===v.get(P)?"Y":"n",compsInClass:h.get(P),domNeighbor:W,domFracForeign:Y?+(z/Y).toFixed(2):0,domFracBoundary:+(z/R).toFixed(2),bgFrac:+(S[k]/R).toFixed(2)})}x.sort((k,P)=>P.domFracForeign-k.domFracForeign||P.size-k.size);const w=(k,P)=>{const L=P.map(z=>Math.max(z.h.length,...k.map(Y=>String(Y[z.k]).length))),W=z=>z.map((Y,R)=>String(Y).padStart(L[R])).join("  ");return[W(P.map(z=>z.h)),...k.map(z=>W(P.map(Y=>z[Y.k])))].join(`
`)},$=[{k:"comp",h:"comp"},{k:"class",h:"class"},{k:"size",h:"size"},{k:"largestOfClass",h:"lrg"},{k:"compsInClass",h:"nComp"},{k:"domNeighbor",h:"domNbr"},{k:"domFracForeign",h:"encF"},{k:"domFracBoundary",h:"encB"},{k:"bgFrac",h:"bgF"}];console.log(`[${c}] total components=${n}, distinct classes=${h.size}
[${c}] island candidates (encF≈1 + small size + lrg=n ⇒ swallowed island):
`+w(x.slice(0,r),$));const M=[...h.entries()].map(([k,P])=>({class:k,components:P,maxCompSize:v.get(k)})).sort((k,P)=>P.components-k.components);return console.log(`[${c}] per-class component counts (components=1 ⇒ fully connected):
`+w(M.slice(0,30),[{k:"class",h:"class"},{k:"components",h:"comps"},{k:"maxCompSize",h:"maxSize"}])),x}_collectComponentStats(e,n,o){const s=jt.get(o);if(s&&s.cl===n&&s.bw===e&&o.length===e.length)return[s.ls2bw,s.sumls];const i=e.length,r=new Uint32Array(n+1),a=new Uint32Array(n+1);for(let c=0;c<i;c++){const l=o[c];l>0&&(r[l]=e[c],a[l]++)}return[r,a]}_buildKeptMap(e,n,o,s,i){const r=new Uint32Array(o+1);let a=0;for(let l=1;l<=o;l++)e[l]>a&&(a=e[l]);const c=s==="all";if(a<=65535){const l=new Uint32Array(a+1),f=new Uint32Array(a+1);for(let g=1;g<=o;g++){const d=e[g];if(d!==0)if(c||s&&s.has&&s.has(d)){const u=n[g];(!f[d]||(i?u>=l[d]:u>l[d]))&&(l[d]=u,f[d]=g)}else r[g]=d}for(let g=1;g<=a;g++){const d=f[g];d>0&&(r[d]=g)}}else{const l=new Map;for(let f=1;f<=o;f++){const g=e[f];if(g!==0)if(c||s&&s.has&&s.has(g)){const d=n[f],u=l.get(g);(!u||(i?d>=u.sz:d>u.sz))&&l.set(g,{c:f,sz:d})}else r[f]=g}for(const[f,{c:g}]of l)r[g]=f}return r}largest_original_cluster_labels(e,n,o,s=null,i=!1,r=null,a=!1){const[c,l]=this._collectComponentStats(e,n,o),f=this._buildKeptMap(c,l,n,"all",!0);return this.finalize_volume(o,s,f,n,i,e,r,a)}filter_clusters(e,n,o,s,i=null,r=!1,a=null,c=!1){const[l,f]=this._collectComponentStats(e,n,o),g=this._buildKeptMap(l,f,n,s,!1);return this.finalize_volume(o,i,g,n,r,e,a,c)}filter_clusters_by_ratio(e,n,o,s,i=null,r=!1,a=null){const c=e.length,l=new Uint32Array(n+1).fill(0),f=new Uint32Array(n+1).fill(0);for(let p=0;p<c;p++){const m=o[p];m>0&&(l[m]===0&&(l[m]=e[p]),f[m]++)}const g=new Map;for(let p=1;p<=n;p++){const m=l[p],S=f[p];(!g.has(m)||S>g.get(m))&&g.set(m,S)}const d=new Uint8Array(n+1).fill(0);for(let p=1;p<=n;p++){const m=l[p],S=f[p],A=g.get(m)||0;S>=A*s&&(d[p]=1)}const u=new Uint32Array(n+1).fill(0);for(let p=1;p<=n;p++)d[p]&&(u[p]=l[p]);return this.finalize_volume(o,i,u,n,r,e,a)}_binaryComponentsFromLabels(e,n,o,s,i=!1){const r=s[0]|0,a=s[1]|0,c=s[2]|0,l=r*a,f=jt.get(o),g=f&&f.cl===n&&o.length===l*c&&(!i||f.bw===e);if(g&&f.conn===6&&f.distinctFgClasses<=1){const _=new Uint32Array(n+1);let h=0,v=0;for(let x=1;x<=n;x++){_[x]=x;const w=f.sumls[x];w>0&&w>=v&&(v=w,h=x)}return{parent:_,compSize:f.sumls,compClass:i?f.ls2bw:null,bestRoot:h}}const d=g?f.sumls:new Uint32Array(n+1),u=g?i?f.ls2bw:null:i?new Uint32Array(n+1):null,p=new Uint32Array(n+1);for(let _=1;_<=n;_++)p[_]=_;if(g&&f.conn===6&&f.runs&&f.bw===e){const _=(x,w)=>{for(;p[x]!==x;)p[x]=p[p[x]],x=p[x];for(;p[w]!==w;)p[w]=p[p[w]],w=p[w];x!==w&&(x<w?p[w]=x:p[x]=w)},h=f.runs,v=f.runLen;for(let x=0;x<v;x+=2){const w=h[x],$=h[x+1],M=w/l|0,b=w-M*l,B=b/r|0;let T=b-B*r;for(let k=w;k<$;k++,T++){const P=e[k];let L=0;if(M>0){const W=e[k-l];W!==0&&W!==P&&(L=o[k],_(L,o[k-l]))}if(B>0){const W=e[k-r];W!==0&&W!==P&&(L||(L=o[k]),_(L,o[k-r]))}if(T>0){const W=e[k-1];W!==0&&W!==P&&(L||(L=o[k]),_(L,o[k-1]))}}}}else{const _=g?f.minSl:0,h=g?f.maxSl:c-1;let v=_*l;for(let x=_;x<=h;x++)for(let w=0;w<a;w++)for(let $=0;$<r;$++,v++){const M=o[v];if(M===0)continue;g||(d[M]++,u&&u[M]===0&&(u[M]=e[v]));let b=M;for(;p[b]!==b;)p[b]=p[p[b]],b=p[b];if(x>0){const B=o[v-l];if(B!==0&&B!==M){let T=B;for(;p[T]!==T;)p[T]=p[p[T]],T=p[T];b!==T&&(b<T?p[T]=b:(p[b]=T,b=T))}}if(w>0){const B=o[v-r];if(B!==0&&B!==M){let T=B;for(;p[T]!==T;)p[T]=p[p[T]],T=p[T];b!==T&&(b<T?p[T]=b:(p[b]=T,b=T))}}if($>0){const B=o[v-1];if(B!==0&&B!==M){let T=B;for(;p[T]!==T;)p[T]=p[p[T]],T=p[T];b!==T&&(b<T?p[T]=b:p[b]=T)}}}}const m=new Uint32Array(n+1);for(let _=1;_<=n;_++){let h=_;for(;p[h]!==h;)h=p[h];p[_]=h,m[h]+=d[_]}let S=0,A=0;for(let _=1;_<=n;_++){const h=m[_];h>0&&h>=A&&(A=h,S=_)}return{parent:p,compSize:d,compClass:u,bestRoot:S}}applyLargestBinaryMaskInPlace(e,n,o,s){const i=e.length;if(n===0)return e.fill(0),e;const r=jt.get(o),a=r&&r.cl===n&&o.length===i;if(a&&r.conn===6&&r.distinctFgClasses<=1){let f=0,g=0;for(let d=1;d<=n;d++){const u=r.sumls[d];u>0&&u>=g&&(g=u,f=d)}if(r.runs&&r.bw===e){if(n>1){const d=r.runs,u=r.runLen;for(let p=0;p<u;p+=2){const m=d[p],S=d[p+1];for(let A=m;A<S;A++)o[A]!==f&&(e[A]=0)}}return e}if(r.fgStart>0&&e.fill(0,0,r.fgStart),r.fgEnd>=r.fgStart){for(let d=r.fgStart;d<=r.fgEnd;d++)o[d]!==f&&(e[d]=0);r.fgEnd+1<i&&e.fill(0,r.fgEnd+1)}else e.fill(0);return e}const{parent:c,bestRoot:l}=this._binaryComponentsFromLabels(e,n,o,s,!1);if(a&&r.runs&&r.bw===e){const f=r.runs,g=r.runLen;for(let d=0;d<g;d+=2){const u=f[d],p=f[d+1];for(let m=u;m<p;m++)c[o[m]]!==l&&(e[m]=0)}return e}if(a&&r.fgEnd>=r.fgStart){r.fgStart>0&&e.fill(0,0,r.fgStart);for(let f=r.fgStart;f<=r.fgEnd;f++){const g=o[f];(g===0||c[g]!==l)&&(e[f]=0)}r.fgEnd+1<i&&e.fill(0,r.fgEnd+1)}else for(let f=0;f<i;f++){const g=o[f];(g===0||c[g]!==l)&&(e[f]=0)}return e}filter18ClassFromLabels(e,n,o,s,i,r=!1,a=null,c=!1){if(n===0)return[0,new Uint8Array(e.length)];const{parent:l,compSize:f,compClass:g,bestRoot:d}=this._binaryComponentsFromLabels(e,n,o,s,!0),u=new Uint32Array(n+1);for(let m=1;m<=n;m++)l[m]===d&&(u[m]=g[m]);const p=this._buildKeptMap(u,f,n,i,!1);return this.finalize_volume(o,s,p,n,r,e,a,c)}bwlabel(e,n,o=26,s=!1,i=!1,r=null){const a=Date.now(),c=n[0]*n[1]*n[2];if(![6,18,26].includes(o))return console.log("bwlabel: conn must be 6, 18 or 26."),[0,new Uint32Array(c)];if(n[0]<2||n[1]<2||n[2]<1)return console.log("bwlabel: img must be 2 or 3-dimensional"),[0,new Uint32Array(c)];let l;if(s){l=new Uint8Array(c);for(let m=0;m<c;m++)e[m]!==0&&(l[m]=1)}else e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Uint16Array||e instanceof Uint32Array||e instanceof Int8Array||e instanceof Int16Array||e instanceof Int32Array?e.length===c?l=e:(l=new Uint32Array(c),l.set(e.subarray(0,c))):(l=new Uint32Array(c),l.set(e));this._lastInitialRange=null,this._lastMeta=null;let[f,g,d]=this.do_initial_labelling(l,n,o,r);g===void 0&&(g=new Uint32Array(0));const[u,p]=this.translate_labels(d,n,g,f,l,this._lastInitialRange);if(this._lastMeta&&jt.set(p,this._lastMeta),console.log(o+" neighbor clustering into "+u+" regions in "+(Date.now()-a)+"ms"),i){const[m,S]=this.largest_original_cluster_labels(l,u,p);return[m,S]}return[u,p]}filter_clusters_by_rank(e,n,o,s,i=0,r=null,a=!1,c=null,l=!1,f=null){const g=e.length,d=new Uint32Array(n+1).fill(0),u=new Uint32Array(n+1).fill(0),p=c!=null&&Array.isArray(r)&&r.length===3,m=p?r[0]:0,S=p?r[1]:0,A=p?new Int32Array(n+1).fill(2147483647):null,_=p?new Int32Array(n+1).fill(-1):null,h=p?new Int32Array(n+1).fill(2147483647):null,v=p?new Int32Array(n+1).fill(-1):null,x=p?new Int32Array(n+1).fill(2147483647):null,w=p?new Int32Array(n+1).fill(-1):null;for(let k=0;k<g;k++){const P=o[k];if(P>0&&(d[P]===0&&(d[P]=e[k]),u[P]++,p)){const L=k%m,W=k/m|0,z=W%S,Y=W/S|0;L<A[P]&&(A[P]=L),L>_[P]&&(_[P]=L),z<h[P]&&(h[P]=z),z>v[P]&&(v[P]=z),Y<x[P]&&(x[P]=Y),Y>w[P]&&(w[P]=Y)}}let $=null,M=0;if(p){let k=-1;for(let R=1;R<=n;R++)u[R]>k&&(k=u[R],M=R);const P=Math.max(2,Math.ceil(c)+4),L=m*S,W=new Int16Array(g).fill(-1);let z=[];for(let R=0;R<g;R++)o[R]===M&&(W[R]=0,z.push(R));for(let R=1;R<=P&&z.length;R++){const Q=[];for(let j=0;j<z.length;j++){const G=z[j],F=G%m,X=(G/m|0)%S;F>0&&W[G-1]===-1&&(W[G-1]=R,Q.push(G-1)),F<m-1&&W[G+1]===-1&&(W[G+1]=R,Q.push(G+1)),X>0&&W[G-m]===-1&&(W[G-m]=R,Q.push(G-m)),X<S-1&&W[G+m]===-1&&(W[G+m]=R,Q.push(G+m)),G-L>=0&&W[G-L]===-1&&(W[G-L]=R,Q.push(G-L)),G+L<g&&W[G+L]===-1&&(W[G+L]=R,Q.push(G+L))}z=Q}const Y=P+1;$=new Float64Array(n+1).fill(Y);for(let R=0;R<g;R++){const Q=o[R];if(Q>0&&Q!==M){const j=W[R]>=0?W[R]:Y;j<$[Q]&&($[Q]=j)}}l&&console.log(`[rank-filter] brain comp=${M} size=${k} bbox A[${A[M]},${_[M]}] B[${h[M]},${v[M]}] C[${x[M]},${w[M]}] | maxGap=${c} scan=${P}`)}const b=new Map;for(let k=1;k<=n;k++){const P=d[k],L=u[k];b.has(P)||b.set(P,[]),b.get(P).push({i:k,size:L})}const B=new Uint8Array(n+1).fill(0);for(const[k,P]of b.entries()){P.sort((Y,R)=>R.size-Y.size);const L=P.length?P[0].size:0,W=i>0?L*i:0,z=Math.min(P.length,s);for(let Y=0;Y<z;Y++){const R=P[Y];if(R.size<W){l&&Y>0&&console.log(`[rank-filter] class ${k} #${Y}: size=${R.size} DROP (below ${(i*100).toFixed(0)}% floor)`);break}if(Y>0&&p){const Q=$[R.i],j=Q<=c;if(l&&console.log(`[rank-filter] class ${k} #${Y}: size=${R.size} surfDist=${Q} -> ${j?"KEEP":"DROP (too far)"}`),!j)continue}B[R.i]=1}}const T=new Uint32Array(n+1).fill(0);for(let k=1;k<=n;k++)B[k]&&(T[k]=d[k]);return this.finalize_volume(o,r,T,n,a,e,f)}}function ns(t){if(!(t!=null&&t.length))throw new Error("Segmentation volume is empty.");let e=0;if((t instanceof Uint8Array||t instanceof Uint8ClampedArray)&&(t.byteOffset&3)===0&&t.length>=4){const n=t.length>>2,o=new Uint32Array(t.buffer,t.byteOffset,n);for(let s=0;s<n;s++){const i=o[s];i!==0&&(i&255&&e++,i&65280&&e++,i&16711680&&e++,i&4278190080&&e++)}for(let s=n<<2;s<t.length;s++)t[s]!==0&&e++}else if(t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Uint16Array||t instanceof Uint32Array)for(let n=0;n<t.length;n++)t[n]!==0&&e++;else for(let n=0;n<t.length;n++){const o=t[n];if(!Number.isFinite(o)||o<0)throw new Error(`Segmentation contains an invalid label at voxel ${n}: ${o}.`);o!==0&&e++}if(e===0)throw new Error("Segmentation volume contains no foreground labels.");if(e>t.length*.95)throw new Error(`Segmentation fills ${(100*e/t.length).toFixed(1)}% of the volume; GPU output is unusable.`)}const os={il:null,runs:null,runLen:0,dirty:!1};function ss(t,e=.05,n=.95){const o=t.length,s=Math.min(1e5,o),i=Math.floor(s*e),r=Math.ceil(s*n)-1;if(t instanceof Uint8Array||t instanceof Uint8ClampedArray){if(s===0)return{qmin:0,qmax:0};const c=new Uint32Array(256);if(s>=o)for(let u=0;u<o;u++)c[t[u]]++;else for(let u=0;u<s;u++)c[t[Math.floor(Math.random()*o)]]++;let l=0,f=0,g=0,d=!1;for(let u=0;u<256;u++){const p=c[u];if(p!==0&&(l+=p,!d&&l>i&&(f=u,d=!0),l>r)){g=u;break}}return{qmin:f,qmax:g}}const a=new Float64Array(s);if(s>=o)a.set(t);else for(let c=0;c<s;c++){const l=Math.floor(Math.random()*o);a[c]=t[l]}return a.sort(),{qmin:a[i],qmax:a[r]}}function rs(t){const e=t.length;if(e===0)return{min:0,max:0};let n=t[0],o=t[0];if(t instanceof Uint8Array||t instanceof Uint8ClampedArray){for(let s=1;s<e;s++){const i=t[s];if(i<n?n=i:i>o&&(o=i),n===0&&o===255)break}return{min:n,max:o}}for(let s=1;s<e;s++){const i=t[s];i<n&&(n=i),i>o&&(o=i)}return{min:n,max:o}}function Yn(t,e,n){const o=t.length,s=new Float32Array(o);if(t instanceof Uint8Array||t instanceof Uint8ClampedArray){const i=new Float32Array(256);for(let r=0;r<256;r++)i[r]=(r-e)/n;for(let r=0;r<o;r++)s[r]=i[t[r]];return s}for(let i=0;i<o;i++)s[i]=(t[i]-e)/n;return s}function go(t,e,n,o){const s=e[0]|0,i=e[1]|0,r=e[2]|0,a=s*i*r,c=new o(a);if(n[0]===2&&n[1]===1&&n[2]===0&&a===t.length){const S=i*r,A=i*s,_=16;for(let h=0;h<i;h++){const v=h*r,x=h*s;for(let w=0;w<s;w+=_){const $=Math.min(w+_,s);for(let M=0;M<r;M+=_){const b=Math.min(M+_,r);for(let B=w;B<$;B++){let T=B*S+v+M,k=M*A+x+B;for(let P=M;P<b;P++,T++,k+=A)c[k]=t[T]}}}}return c}const l=[s,i,r],f=[l[n[0]],l[n[1]],l[n[2]]],g=[i*r,r,1],d=g[n[0]],u=g[n[1]],p=g[n[2]];let m=0;for(let S=0;S<f[0];S++){const A=S*d;for(let _=0;_<f[1];_++){const h=A+_*u;for(let v=0;v<f[2];v++,m++)c[m]=t[h+v*p]}}return c}function nn(t,e=[256,256,256],n=[2,1,0]){return go(t,e,n,Float32Array)}function as(t,e=[256,256,256],n=[2,1,0]){return go(t,e,n,Uint8Array)}function Bn(t){const e=new Uint32Array(256);for(let n=0;n<t.length;n++)e[t[n]]++;return e}function is(t){const e=Bn(t);let n=0;for(let o=0;o<256;o++)e[o]>0&&n++;return n}function Kn(t,e=!1,n="output"){let o=0,s=1/0,i=-1/0;if(!e&&(t instanceof Uint8Array||t instanceof Uint8ClampedArray)){if(t.length>0){let r=255,a=0,c=0;if((t.byteOffset&3)===0&&t.length>=4){const l=t.length>>2,f=new Uint32Array(t.buffer,t.byteOffset,l);for(let g=0;g<l;g++){const d=f[g];if(d===0){r=0;continue}const u=d&255,p=d>>>8&255,m=d>>>16&255,S=d>>>24;o+=u+p+m+S,u<r&&(r=u),u>a&&(a=u),p<r&&(r=p),p>a&&(a=p),m<r&&(r=m),m>a&&(a=m),S<r&&(r=S),S>a&&(a=S)}c=l<<2}for(let l=c;l<t.length;l++){const f=t[l];o+=f,f<r&&(r=f),f>a&&(a=f)}s=r,i=a}}else for(let r=0;r<t.length;r++){const a=t[r];if(!Number.isFinite(a))throw new Error(`Model ${n} contains NaN or Inf values.`);o+=a,a<s&&(s=a),a>i&&(i=a)}if(console.log(`${e?"Probability":"Segmentation"} volume sum: ${o}`),o===0)throw new Error(e?"Model probability output is all zeros. This may indicate an issue with WebGPU shaders or input data.":"Model produced an empty segmentation (all zeros). This may indicate an issue with WebGPU shaders or input data.");if(e&&(s<-1e-6||i>1+1e-6))throw new Error(`Probability output values out of range [0, 1]: min=${s.toFixed(4)}, max=${i.toFixed(4)}`);return{sum:o,min:s,max:i}}function ls(t,e,n,o,s=null,i=null){return ce(this,null,function*(){const r=!!(t&&typeof t.data=="function");let a,c;r?(console.log("Downloading segmentation data from GPU to CPU..."),a=yield t.data(),c=t.shape||i||[256,256,256],console.log("Data download complete. Starting CPU processing.")):(a=t,c=i||[256,256,256]),ns(a);let l,f=!1;if(a instanceof Uint8Array)l=a,f=!r;else{let d=0;for(let u=0;u<a.length;u++)a[u]>d&&(d=a[u]);l=d<=255?new Uint8Array(a):new Uint32Array(a),f=!0}let g=null;if(o.isPostProcessEnable){console.log("Applying CPU-based connected-component labeling...");const d=performance.now(),u=new ts,p=[5,14,15,58,59,60,598,608],m=!!o.fillSuppressedWithNeighborLabel||p.includes(n.id),S=[5,14,15,58,59,60,598,608],A=M=>M>=1&&M<=34?1:M>=35&&M<=68?2:0,_=S.includes(n.id)?A:null,h=c[0]*c[1]*c[2],v=Math.max(1e5,Math.floor(h*.01)),[x,w]=u.bwlabel(l,c,6,!1,!1,os);if(g=u.getLabelMeta(w),x>v){const M=`Segmentation produced noise: ${x.toLocaleString()} disconnected regions (cap ${v.toLocaleString()}). The model output is unusable, so post-processing was aborted. Try re-running, switching backend (WebGPU/WebGL2), or another model.`;console.error("[postprocess] "+M);const b=new Error(M);throw b.code="SEGMENTATION_NOISE",b}if([1,7].includes(n.id)){const[T,k]=u.filter_clusters_by_rank(l,x,w,2,.02,c,m,8,!1,_);l=k,f=!0}else if([3,8,9,21,38,218].includes(n.id)){const M=new Set([1,2,5,6,13]),[b,B]=u.filter18ClassFromLabels(l,x,w,c,M,m,_,f);l=B,f=!0}else if([5,14,15,58,59,60,598,608].includes(n.id)){o.diagnoseEnclosedComponents&&u.diagnose_components(l,x,w,c,{label:`model${n.id}`,topN:60});const[M,b]=u.largest_original_cluster_labels(l,x,w,c,m,_,f);l=b,f=!0}else f||(l=l.slice(),f=!0),u.applyLargestBinaryMaskInPlace(l,x,w,c);const $=((performance.now()-d)/1e3).toFixed(4);console.log(`Connected-component labeling took: ${$} seconds.`)}switch(n.type){case"Brain_Masking":{const d=new Uint8Array(l.length);if(g&&g.runs){const u=g.runs,p=g.runLen;for(let m=0;m<p;m+=2){const S=u[m],A=u[m+1];for(let _=S;_<A;_++)l[_]!==0&&(d[_]=1)}}else for(let u=0;u<l.length;u++)d[u]=l[u]!==0?1:0;return d}case"Brain_Extraction":{const d=new Uint8Array(l.length),u=s?new Uint8Array(l.length):null;if(g&&g.runs){const p=g.runs,m=g.runLen;for(let S=0;S<m;S+=2){const A=p[S],_=p[S+1];for(let h=A;h<_;h++)l[h]!==0&&(d[h]=e[h],u&&(u[h]=1))}}else for(let p=0;p<l.length;p++){const m=l[p]!==0?1:0;d[p]=e[p]*m,u&&(u[p]=m)}return s&&(s.mask=u),d}default:return l instanceof Uint8Array?l:new Uint8Array(l)}})}const us={WEBGPU:"webgpu"};function cs(t,e){return{startTime:Date.now(),Model_Name:(t==null?void 0:t.modelName)||"Unknown",Execution_Mode:e,TF_Backend:"webgpu",isModelFullVol:null,No_SubVolumes:1,Brainchop_Ver:"FullVolume",Input_Shape:null,Output_Shape:null,Channel_Last:null,Model_Param:null,Model_Layers:null,Actual_Labels:null,Expect_Labels:null,NumLabels_Match:null,Missing_Labels:null,Preprocess_t:null,Setup_t:null,Inference_t:null,Postprocess_t:null,Display_t:null,Status:null,Error_Type:null,Extra_Err_Info:null}}function fs(t,e,n,o=null){t.Expect_Labels=e,t.Actual_Labels=n,t.NumLabels_Match=e===n,o&&o.length>0&&(t.Missing_Labels=o.join(", "))}function ps(t,e,n,o=null){t.Inference_t=e,t.Postprocess_t=n,o&&(o.Preprocess_t!==void 0&&(t.Preprocess_t=o.Preprocess_t),o.Setup_t!==void 0&&(t.Setup_t=o.Setup_t),o.Display_t!==void 0&&(t.Display_t=o.Display_t)),t.Status="OK"}function ms(t,e,n=null){t.Inference_t=1/0,t.Postprocess_t=1/0,t.Status="Fail",t.Error_Type=(e==null?void 0:e.message)||String(e),n&&(t.Extra_Err_Info=n)}const At=1e-8,ds=[256,256,256];function Wt(t,e,n){return Math.max(e,Math.min(n,t))}function gs(t){return t.outputType==="probability"&&t.probabilityPostprocess==="cat-lite"}function _s(t,e,n){const[o,s,i]=t,r=o.length,a=new Uint8Array(r);let c=0;for(let v=0;v<r;v++)Math.max(0,o[v])+Math.max(0,s[v])+Math.max(0,i[v])>=n&&(a[v]=1,c++);const[l,f,g]=e;if(l<2||f<2||g<1)return{componentCount:0,removedVoxels:0,supportMask:a};const d=l===256&&f===256,u=new Uint32Array(c),p=l*f;let m=0,S=0,A=0,_=0;for(let v=0;v<r;v++){if(a[v]!==1)continue;_++;const x=m;u[m++]=v,a[v]=2;for(let w=x;w<m;w++){const $=u[w],M=d?$&255:$%l,b=d?$>>>8&255:Math.floor($/l)%f;M>0&&a[$-1]===1&&(a[$-1]=2,u[m++]=$-1),M+1<l&&a[$+1]===1&&(a[$+1]=2,u[m++]=$+1),b>0&&a[$-l]===1&&(a[$-l]=2,u[m++]=$-l),b+1<f&&a[$+l]===1&&(a[$+l]=2,u[m++]=$+l),$>=p&&a[$-p]===1&&(a[$-p]=2,u[m++]=$-p),$+p<r&&a[$+p]===1&&(a[$+p]=2,u[m++]=$+p)}m-x>=A-S&&(S=x,A=m)}let h=0;if(_>1)for(let v=0;v<m;v++){if(v>=S&&v<A)continue;const x=u[v];o[x]=0,s[x]=0,i[x]=0,a[x]=0,h++}return{componentCount:_,removedVoxels:h,supportMask:a}}function bs([t,e,n],o,{minSupport:s,priorPower:i},r=null){const a=!!(r&&s>0&&s<=1);let c=0;for(let m=0;m<o.length;m++){if(a&&r[m]!==2)continue;const S=Math.max(0,t[m])+Math.max(0,e[m])+Math.max(0,n[m]);Math.min(S,1)>=s&&Number.isFinite(o[m])&&c++}const l=new Uint32Array(c),f=new Float64Array(c),g=c*36<=192*zt(2,20)?c:0,d=new Float64Array(g),u=new Float64Array(g),p=new Float64Array(g);for(let m=0,S=0;m<o.length;m++){if(a&&r[m]!==2)continue;const A=Math.max(0,t[m]),_=Math.max(0,e[m]),h=Math.max(0,n[m]),v=A+_+h,x=Math.min(v,1);!(x>=s)||!Number.isFinite(o[m])||(l[S]=m,f[S]=o[m]-0,g&&(d[S]=x*Math.pow(h/v,i),u[S]=x*Math.pow(A/v,i),p[S]=x*Math.pow(_/v,i)),S++)}return{indices:l,values:f,weightCsf:d,weightGm:u,weightWm:p,volumes:[t,e,n]}}function Zn([t,e,n],o,s,i){const r=Math.max(0,t[o]),a=Math.max(0,e[o]),c=Math.max(0,n[o]),l=r+a+c,f=Math.min(l,1);i[0]=f*Math.pow(c/l,s),i[1]=f*Math.pow(r/l,s),i[2]=f*Math.pow(a/l,s)}function Qn({indices:t,values:e,weightCsf:n,weightGm:o,weightWm:s,volumes:i},{minSeparation:r,sigmaFloor:a,priorPower:c},l=!1){const f=n.length===0?new Float64Array(3):null,g=new Float64Array(3),d=new Float64Array(3);for(let S=0;S<e.length;S++){const A=e[S];f&&Zn(i,t[S],c,f);const _=f?f[0]:n[S],h=f?f[1]:o[S],v=f?f[2]:s[S];g[0]+=_*A,d[0]+=_,g[1]+=h*A,d[1]+=h,g[2]+=v*A,d[2]+=v}if(d.some(S=>S<100))return{applied:!1,reason:"too few high-confidence tissue voxels"};const u=Array.from(g,(S,A)=>S/d[A]);if(!(u[0]+r<u[1]&&u[1]+r<u[2]))return{applied:!1,reason:`implausible T1 tissue ordering (${u.map(S=>S.toFixed(3)).join(", ")})`};if(l)return{applied:!0,means:u};const p=new Float64Array(3);for(let S=0;S<e.length;S++){const A=e[S];f&&Zn(i,t[S],c,f);const _=f?f[0]:n[S],h=f?f[1]:o[S],v=f?f[2]:s[S],x=A-u[0],w=A-u[1],$=A-u[2];p[0]+=_*x*x,p[1]+=h*w*w,p[2]+=v*$*$}const m=Array.from(p,(S,A)=>Math.sqrt(Math.max(a*a,S/d[A])));return{applied:!0,means:u,sigmas:m}}function ws(t,e,n,o,{minSupport:s,block:i,smoothingPasses:r},a=null){const[c,l,f]=t,[g,d,u]=n,p=!!(a&&s>0&&s<=1),m=Math.ceil(g/i),S=Math.ceil(d/i),A=Math.ceil(u/i),_=m*S*A,h=new Float64Array(_),v=new Float64Array(_),[x,w,$]=o,M=g*d;for(let z=0;z<u;z++){const Y=Math.floor(z/i);for(let R=0;R<d;R++){const Q=Math.floor(R/i);let j=z*M+R*g;const G=(Y*S+Q)*m;for(let F=0;F<g;F++,j++){if(p&&a[j]!==2)continue;const H=Math.max(0,c[j]),X=Math.max(0,l[j]),I=Math.max(0,f[j]),Z=H+X+I,be=Math.min(Z,1);if(!(be>=s)||!Number.isFinite(e[j]))continue;const V=H/Z,oe=X/Z,Pe=I/Z,N=Pe*x+V*w+oe*$,D=be*(Pe*Pe+V*V+oe*oe),J=G+Math.floor(F/i);h[J]+=D*(e[j]-N),v[J]+=D}}}let b=new Float32Array(_),B=new Uint8Array(_);for(let z=0;z<_;z++)v[z]>1&&(b[z]=h[z]/v[z],B[z]=1);for(let z=0;z<r;z++){const Y=new Float32Array(_),R=new Uint8Array(_);for(let Q=0;Q<A;Q++)for(let j=0;j<S;j++)for(let G=0;G<m;G++){let F=0,H=0;for(let I=-1;I<=1;I++){const Z=Q+I;if(!(Z<0||Z>=A))for(let be=-1;be<=1;be++){const V=j+be;if(!(V<0||V>=S))for(let oe=-1;oe<=1;oe++){const Pe=G+oe;if(Pe<0||Pe>=m)continue;const N=(Z*S+V)*m+Pe;B[N]&&(F+=b[N],H++)}}}const X=(Q*S+j)*m+G;H>0&&(Y[X]=F/H,R[X]=1)}b=Y,B=R}const T=(z,Y)=>{const R=new Int32Array(z),Q=new Int32Array(z),j=new Float32Array(z);for(let G=0;G<z;G++){const F=Wt((G+.5)/i-.5,0,Y-1);R[G]=Math.floor(F),Q[G]=Math.min(R[G]+1,Y-1),j[G]=F-R[G]}return{low:R,high:Q,t:j}},k=T(g,m),P=T(d,S),L=T(u,A),W=g===256&&d===256;return z=>{let Y,R,Q;if(W)Q=z>>>16,R=z>>>8&255,Y=z&255;else{Q=Math.floor(z/M);const se=z-Q*M;R=Math.floor(se/g),Y=se-R*g}const j=k.low[Y],G=k.high[Y],F=k.t[Y],H=(L.low[Q]*S+P.low[R])*m,X=(L.low[Q]*S+P.high[R])*m,I=(L.high[Q]*S+P.low[R])*m,Z=(L.high[Q]*S+P.high[R])*m,be=b[H+j]+(b[H+G]-b[H+j])*F,V=b[X+j]+(b[X+G]-b[X+j])*F,oe=b[I+j]+(b[I+G]-b[I+j])*F,Pe=b[Z+j]+(b[Z+G]-b[Z+j])*F,N=P.t[R],D=be+(V-be)*N,J=oe+(Pe-oe)*N;return D+(J-D)*L.t[Q]}}function en(t,e,n,o){const s=(t-e)/n;return-.5*s*s-o}function hs(t,e,n,o={}){const{catLiteMinSupport:s=.03,catLitePurePriorPower:i=3,catLiteMinMeanSeparation:r=.035,catLiteSigmaFloor:a=.025,catLiteBiasBlockSize:c=16,catLiteBiasSmoothPasses:l=3,catLitePriorStrength:f=.8,catLiteIntensityStrength:g=.75,catLiteMixelPrior:d=.35,catLiteCsfWmMixelPrior:u=6,catLiteSpatialWeight:p=.25}=o,m={priorPower:i,minSupport:s,minSeparation:r,sigmaFloor:a},[S,A,_]=n,h=e.length,v=s>0&&s<=1,{componentCount:x,removedVoxels:w,supportMask:$}=_s(t,n,s),M={componentCount:x,removedVoxels:w},b=bs(t,e,m,$),B=Qn(b,m,!0);if(!B.applied)return{tissues:t,stats:B};const T=ws(t,e,n,B.means,{minSupport:s,block:c,smoothingPasses:l},$);for(let E=0;E<b.indices.length;E++){const le=b.indices[E];b.values[E]=e[le]-T(le)}const k=Qn(b,m);if(!k.applied)return{tissues:t,stats:k};b.indices=b.weightCsf=b.weightGm=b.weightWm=null;const[P,L,W]=k.means,[z,Y,R]=k.sigmas,[Q,j,G]=t,F=new Float32Array(h),H=new Float32Array(h),X=new Float32Array(h),I=S*A,Z=.5*(P+L),be=.5*(L+W),V=.5*(P+W),oe=Math.sqrt(zt(L-P,2)/12+.5*(zt(z,2)+zt(Y,2))),Pe=Math.sqrt(zt(W-L,2)/12+.5*(zt(Y,2)+zt(R,2))),N=Math.sqrt(zt(W-P,2)/12+.5*(zt(z,2)+zt(R,2))),D=Math.log(z),J=Math.log(Y),se=Math.log(R),K=Math.log(oe),ie=Math.log(Pe),xe=Math.log(N);let ze=0;for(let E=0;E<_;E++)for(let le=0;le<A;le++){let _e=E*I+le*S;for(let Me=0;Me<S;Me++,_e++){if(v&&$[_e]!==2)continue;const ne=Math.max(0,Q[_e]),Be=Math.max(0,j[_e]),je=Math.max(0,G[_e]),We=ne+Be+je,Ye=Math.min(We,1);if(!(Ye>=s)||!Number.isFinite(e[_e]))continue;let Ke=ne/We,ke=Be/We,Ne=je/We;if(p>0){let Se=0,Ie=0,ue=0,Ae=0;if(Me>0){const ye=_e-1,Ue=Math.max(0,Q[ye]),Ee=Math.max(0,j[ye]),re=Math.max(0,G[ye]),pe=Ue+Ee+re;pe>At&&(Se+=Ue/pe,Ie+=Ee/pe,ue+=re/pe,Ae++)}if(Me+1<S){const ye=_e+1,Ue=Math.max(0,Q[ye]),Ee=Math.max(0,j[ye]),re=Math.max(0,G[ye]),pe=Ue+Ee+re;pe>At&&(Se+=Ue/pe,Ie+=Ee/pe,ue+=re/pe,Ae++)}if(le>0){const ye=_e-S,Ue=Math.max(0,Q[ye]),Ee=Math.max(0,j[ye]),re=Math.max(0,G[ye]),pe=Ue+Ee+re;pe>At&&(Se+=Ue/pe,Ie+=Ee/pe,ue+=re/pe,Ae++)}if(le+1<A){const ye=_e+S,Ue=Math.max(0,Q[ye]),Ee=Math.max(0,j[ye]),re=Math.max(0,G[ye]),pe=Ue+Ee+re;pe>At&&(Se+=Ue/pe,Ie+=Ee/pe,ue+=re/pe,Ae++)}if(E>0){const ye=_e-I,Ue=Math.max(0,Q[ye]),Ee=Math.max(0,j[ye]),re=Math.max(0,G[ye]),pe=Ue+Ee+re;pe>At&&(Se+=Ue/pe,Ie+=Ee/pe,ue+=re/pe,Ae++)}if(E+1<_){const ye=_e+I,Ue=Math.max(0,Q[ye]),Ee=Math.max(0,j[ye]),re=Math.max(0,G[ye]),pe=Ue+Ee+re;pe>At&&(Se+=Ue/pe,Ie+=Ee/pe,ue+=re/pe,Ae++)}if(Ae){const ye=1-p;Ke=ye*Ke+p*Se/Ae,ke=ye*ke+p*Ie/Ae,Ne=ye*Ne+p*ue/Ae}}const Re=b.values[ze++],Qe=f*Math.log(Ne+At)+g*en(Re,P,z,D),at=f*Math.log(Ke+At)+g*en(Re,L,Y,J),kt=f*Math.log(ke+At)+g*en(Re,W,R,se),mt=f*Math.log(d*2*Math.sqrt(Ne*Ke)+At)+g*en(Re,Z,oe,K),xt=f*Math.log(d*2*Math.sqrt(Ke*ke)+At)+g*en(Re,be,Pe,ie),Ft=f*Math.log(u*2*Math.sqrt(Ne*ke)*zt(1-Ke,2)+At)+g*en(Re,V,N,xe),O=Math.max(Qe,at,kt,mt,xt,Ft),wt=Math.exp(Qe-O),bt=Math.exp(at-O),Mt=Math.exp(kt-O),ht=Math.exp(mt-O),y=Math.exp(xt-O),C=Math.exp(Ft-O),q=wt+bt+Mt+ht+y+C,me=Wt((Re-P)/(L-P),0,1),de=Wt((W-Re)/(W-L),0,1),ee=Wt((Re-P)/(W-P),0,1),$e=(bt+ht*me+y*de)/q,fe=(Mt+y*(1-de)+C*ee)/q,we=(wt+ht*(1-me)+C*(1-ee))/q,te=Math.min(Ne,ke),ve=Wt((te-Ke)/(te+At),0,1),Ce=Wt(4*Ne*ke,0,1),Ze=zt(1-Ce*ve,2);F[_e]=Wt($e*Ye*Ze,0,1);const De=(1-$e*Ze)/Math.max(fe+we,At);H[_e]=Wt(fe*De*Ye,0,1),X[_e]=Wt(we*De*Ye,0,1)}}return{tissues:[F,H,X],stats:{applied:!0,tissueMeans:{csf:P,gray:L,white:W},tissueSigmas:{csf:z,gray:Y,white:R},supportCleanup:M}}}const Jn=({csf:t,gray:e,white:n})=>`CSF=${t.toFixed(3)} GM=${e.toFixed(3)} WM=${n.toFixed(3)}`;function vs(t,e,n,o,s){return ce(this,null,function*(){var c;const i=[];for(let l=0;l<3;l++)i.push(yield s(t[l],l)),t[l]=null;const{tissues:r,stats:a}=hs(i,e,ds,n);if(o.Output_Type="Continuous tissue probability",o.Tissue="GM/WM/CSF",o.Softmax_Temperature=(c=n.softmaxTemperature)!=null?c:1,a.applied){o.Partial_Volume="CAT-lite mixed-class PVE",o.CAT_Lite_Tissue_Means=Jn(a.tissueMeans),o.CAT_Lite_Tissue_Sigmas=Jn(a.tissueSigmas);const{componentCount:l,removedVoxels:f}=a.supportCleanup;console.log(`[CAT-lite] means ${o.CAT_Lite_Tissue_Means}; sigmas ${o.CAT_Lite_Tissue_Sigmas}; removed ${f} voxels outside the largest of ${l} support components`)}else o.Partial_Volume=`Skipped: ${a.reason}`,console.warn(`[CAT-lite] skipped: ${a.reason}`);return r})}const Rt=[1,3,5,7,13,19,31,19,13,7,5,3,1],ys=[16,8,4,2,1,16,8,4,2,1,16,8,4,2,1,16,8,4,2,1,16,8,4,2,1],xs={model16chan18cls:{dilations:Rt,activation:"gelu_tanh",fullVolume:!0},model24chan18cls_gdice_prio:{dilations:Rt,activation:"gelu_tanh",fullVolume:!0},model6chan3cls:{dilations:Rt,activation:"gelu_tanh",fullVolume:!0},model24chan104cls_synth:{dilations:Rt,activation:"gelu_tanh",fullVolume:!0},model24chan104cls_infant_refit_synth:{dilations:Rt,activation:"gelu_tanh",fullVolume:!0},model24chan104cls_v3_repbn:{dilations:Rt,activation:"gelu_tanh",fullVolume:!0},model24chan104cls_v3_omnimodal:{dilations:Rt,activation:"gelu_tanh",fullVolume:!0},model32chan18cls:{dilations:Rt,activation:"gelu_tanh",fullVolume:!1},mindgrab:{dilations:ys,activation:"gelu_tanh",fullVolume:!0},model5_gw_ae:{dilations:[1,2,4,8,16,8,4,2,1],activation:"relu",fullVolume:!0},model11_gw_ae:{dilations:[1,2,4,8,4,2,2,1],activation:"relu",noSafetensors:!0,fullVolume:!0},model30chan18cls:{dilations:[1,2,4,8,16,8,4,2,1],activation:"elu",fullVolume:!0},model30chan50cls:{dilations:[1,2,4,8,16,8,4,2,1],activation:"elu",fullVolume:!0}};function $s(t){const e=String(t.path||"").match(/\/models\/([^/]+)\//);return e?e[1]:null}function Gn(t){const e=$s(t);if(!e)return null;const n=xs[e];return!n||n.noSafetensors?null:dt({name:e},n)}function Ss(t){const e=t&32768?-1:1,n=(t&31744)>>10,o=t&1023;return n===0?e*Math.pow(2,-14)*(o/1024):n===31?o?NaN:e*(1/0):e*Math.pow(2,n-15)*(1+o/1024)}function _o(t){const e=new DataView(t),n=Number(e.getBigUint64(0,!0)),o=JSON.parse(new TextDecoder().decode(new Uint8Array(t,8,n))),s=8+n,i={};for(const[r,a]of Object.entries(o)){if(r==="__metadata__"){i.__metadata__=a;continue}const[c,l]=a.data_offsets,f=a.shape.reduce((d,u)=>d*u,1);let g;if(a.dtype==="F32")g=new Float32Array(t.slice(s+c,s+l));else if(a.dtype==="F16"){const d=new Uint16Array(t.slice(s+c,s+l));g=new Float32Array(f);for(let u=0;u<f;u++)g[u]=Ss(d[u])}else if(a.dtype==="BF16"){const d=new Uint16Array(t.slice(s+c,s+l));g=new Float32Array(f);const u=new Uint32Array(1),p=new Float32Array(u.buffer);for(let m=0;m<f;m++)u[0]=d[m]<<16,g[m]=p[0]}else throw new Error(`safetensors: unsupported dtype ${a.dtype} for tensor '${r}'`);if(g.length!==f)throw new Error(`safetensors: tensor '${r}' has ${g.length} values, shape says ${f}`);i[r]={dtype:a.dtype,shape:a.shape,data:g}}return i}function bo(t){const e=[],n=[],o=[];for(const[i,r]of Object.entries(t)){if(i==="__metadata__")continue;const a=i.match(/^m\.model\.(\d+)\.(weight|bias)$/);if(!a)continue;const c=Number(a[1]),l=a[2]==="weight";if(r.shape.length===5){const[f,g,d,u,p]=r.shape,S={idx:c,outC:f,inC:g,kd:d,kh:u,kw:p,is1x1:d===1&&u===1&&p===1,w:r.data,bias:null},A=e.find(_=>_.idx===c);A?Object.assign(A,S):e.push(S)}else r.shape.length===1&&o.push({idx:c,isW:l,data:r.data,len:r.shape[0]})}e.sort((i,r)=>i.idx-r.idx);for(const i of o){const r=e.find(c=>c.idx===i.idx);if(r&&!i.isW){r.bias=i.data;continue}if(r&&i.isW)continue;let a=n.find(c=>c.idx===i.idx);a||(a={idx:i.idx,scale:null,bias:null},n.push(a)),i.isW?a.scale=i.data:a.bias=i.data}n.sort((i,r)=>i.idx-r.idx);let s=null;return e.length&&e[e.length-1].is1x1&&(s=e.pop()),{convs:e,affines:n,classifier:s}}function As(t,e){var n;if(e==null)return t;if(e.length!==((n=t.classifier)==null?void 0:n.outC)||!Array.from(e).every(Number.isFinite))throw new Error("Classifier bias must contain one finite value per exported class");return t.classifier.bias=Float32Array.from(e),t}function Ps(t,e){const n=e.cs,o=e.chan,{convs:s,affines:i,classifier:r}=t,a=u=>27*u*n;let c=0;const l=[];s.forEach((u,p)=>{const m=p===0?1:n,S={wq:c/4,inCS:m};c+=a(m),u.bias&&(S.biasQ=c/4,c+=n),l.push(S)}),i.forEach((u,p)=>{l[p]=l[p]||{},l[p].affQ=c/4,c+=n,l[p].affBiasQ=c/4,c+=n});let f=-1,g=-1;r&&(f=c,c+=o*e.nclass,c=Math.ceil(c/4)*4,r.bias&&(g=c,c+=e.nclass),c=Math.ceil(c/4)*4);const d=new Float32Array(c);if(s.forEach((u,p)=>{const m=l[p],S=m.inCS,A=m.wq*4,_=u.kd*u.kh*u.kw;if(u.outC>o||p>0&&u.inC>o)throw new Error(`layer ${p}: shape ${u.outC}x${u.inC} exceeds CHAN ${o}`);for(let h=0;h<u.outC;h++){for(let v=0;v<u.inC;v++)for(let x=0;x<u.kd;x++)for(let w=0;w<u.kh;w++)for(let $=0;$<u.kw;$++){const M=u.kd===3?x*9+w*3+$:0,b=(((h*u.inC+v)*u.kd+x)*u.kh+w)*u.kw+$;d[A+(M*S+v)*n+h]=u.w[b]}u.bias&&(d[m.biasQ*4+h]=u.bias[h])}if(_!==27&&_!==1)throw new Error(`layer ${p}: kernel ${u.kd}x${u.kh}x${u.kw} unsupported`)}),i.forEach((u,p)=>{const m=l[p];for(let S=0;S<o;S++)d[m.affQ*4+S]=u.scale?u.scale[S]:0,d[m.affBiasQ*4+S]=u.bias?u.bias[S]:0}),r)for(let u=0;u<e.nclass;u++){for(let p=0;p<o;p++)d[f+p*e.nclass+u]=r.w[u*r.inC+p];r.bias&&(d[g+u]=r.bias[u])}return{data:d,offsets:{layers:l,clsFloat:f,clsBiasFloat:g}}}function wo(t,e={}){const{convs:n,affines:o,classifier:s}=t,i=n[0].outC,r=Math.ceil(i/4)*4,a=n.some(l=>l.bias),c=dt({chan:i,cs:r,planes:r/4,nclass:s?s.outC:0,nhidden:n.length-1,norm:o.length?"gn":a?"none":"gn",affine:o.length>0,convBias:a,classifierBias:!!(s&&s.bias),centeredVariance:!1,eps:1e-5},e);if(c.nclass>256)throw new Error(`classifier has ${c.nclass} classes; the RGBA8 label texture holds at most 256`);if(!c.activation)throw new Error("descriptor needs an explicit `activation`");if(!c.dilations)throw new Error("descriptor needs an explicit `dilations` array");if(c.dilations.length!==n.length)throw new Error(`descriptor has ${c.dilations.length} dilations for ${n.length} convs`);return c}const yn=(t,e)=>Array.from({length:t},(n,o)=>e(o)).join(""),eo=["x","y","z","w"];function ks(t){const e=`fn act4(x : vec4<f32>) -> vec4<f32> {
  return vec4<f32>(act(x.x), act(x.y), act(x.z), act(x.w));
}
`;switch(t){case"gelu_tanh":return`fn act(x : f32) -> f32 {
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
`+e;case"gelu_exp2_approx":return`fn mn_fast_exp2(x_in : f32) -> f32 {
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
`+e;case"relu":return`fn act(x : f32) -> f32 { return max(x, 0.0); }
fn act4(x : vec4<f32>) -> vec4<f32> { return max(x, vec4<f32>(0.0)); }
`;case"elu":return`fn act(x : f32) -> f32 { return select(exp(x) - 1.0, x, x > 0.0); }
fn act4(x : vec4<f32>) -> vec4<f32> {
  return select(exp(x) - vec4<f32>(1.0), x, x > vec4<f32>(0.0));
}
`;default:throw new Error(`webgpu-native: unknown activation '${t}'; add it deliberately`)}}function Ms(t,e,n){const o=t.cs/4,s=l=>yn(n,l),i=l=>yn(o,l),r=i(l=>`          let w${l} = vec4<f32>(wts4[wq + ${l}u]);
`),a=l=>`        { let wq = wq0 + ((tap * cin) + ic4 * 4u + ${l}u) * (CS / 4u);
`+r+s(f=>i(g=>`          a${f}${g} = fma(w${g}, vec4<f32>(s${f}.${eo[l]}), a${f}${g});
`))+`        }
`,c=(t.convBias?i(l=>`  let b${l} = vec4<f32>(wts4[params.bias_off / 4u + ${l}u]);
`)+s(l=>i(f=>`  a${l}${f} = a${l}${f} + b${f};
`)):"")+(t.norm==="none"?s(l=>i(f=>`  a${l}${f} = act4(a${l}${f});
`)):"");return`@compute @workgroup_size(${e}, 1, 1)
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
`+s(l=>i(f=>`  var a${l}${f} = vec4<f32>(0.0);
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
`+i(f=>`          a${l}${f} = fma(w${f}, s, a${l}${f});
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
`+c+`  let obase = (u32(z) * u32(NY) + u32(y)) * u32(NX) + u32(x0);
`+s(l=>`  { let o = (obase + ${l}u) * CS;
`+i(f=>yn(4,g=>`    dst[o + ${4*f+g}u] = f16(a${l}${f}.${eo[g]});
`))+`  }
`)+`}
`}function zs(t){return`var<workgroup> wg_sum : array<f32, ${t} * CS>;
var<workgroup> wg_sq : array<f32, ${t} * CS>;
@compute @workgroup_size(${t}, 1, 1)
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
    for (var l : u32 = 0u; l < ${t}u; l = l + 1u) {
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
`}function Bs(t){return`@compute @workgroup_size(${t}, 1, 1)
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
`}function Cs(t){return`@group(0) @binding(5) var<storage, read_write> labels : array<u32>;
@compute @workgroup_size(${t}, 1, 1)
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
`}function Fs(t,e){var i;const{localX:n,vox:o,momLX:s}=e;if(t.cs%4!==0||t.cs>256)throw new Error(`webgpu-native: channel stride ${t.cs} unsupported`);if(t.nx%(n*o)||t.nx%n||t.nx%s)throw new Error(`webgpu-native: preset ${n}x${o}/${s} does not tile a ${t.nx}-voxel row`);if(s<t.cs)throw new Error(`webgpu-native: moments workgroup ${s} < ${t.cs} channels`);return`enable f16;
const NX : i32 = ${t.nx};
const NY : i32 = ${t.ny};
const NZ : i32 = ${t.nz};
const CS : u32 = ${t.cs}u;
const CHAN : u32 = ${t.chan}u;
const NCLASS : u32 = ${t.nclass}u;
const HAS_AFFINE : bool = ${!!t.affine};
const CLASSIFIER_BIAS : bool = ${!!t.classifierBias};
const EPS : f32 = ${Number((i=t.eps)!=null?i:1e-5).toExponential()};
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
`+ks(t.activation)+Ms(t,n,o)+(t.norm==="gn"?zs(s)+Bs(n):"")+Cs(n)}const xn={amd:{localX:256,vox:1},apple:{localX:64,vox:2},default:{localX:64,vox:2}};function Us(){var t;try{const e=new URLSearchParams(((t=globalThis.location)==null?void 0:t.search)||"").get("wgPreset"),n=e&&/^(\d+)x([124])$/.exec(e);return n?{localX:Number(n[1]),vox:Number(n[2]),source:"url"}:null}catch(e){return null}}function Ls(t,e){var a;const n=String(((a=t.adapterInfo)==null?void 0:a.vendor)||"").toLowerCase(),o=t.limits,s=c=>c.localX<=o.maxComputeInvocationsPerWorkgroup&&c.localX<=o.maxComputeWorkgroupSizeX&&e.nx%(c.localX*c.vox)===0;let i=Us()||St(dt({},xn[n]||xn.default),{source:n||"default"});s(i)||(console.warn(`[WebGPU-native] preset ${i.localX}x${i.vox} does not fit this device; using the default`),i=St(dt({},xn.default),{source:"fallback"}));let r=0;for(const c of[256,128,64,32])if(c<=i.localX&&c>=e.cs&&e.nx%c===0&&c<=o.maxComputeInvocationsPerWorkgroup&&c*e.cs*8<=o.maxComputeWorkgroupStorageSize){r=c;break}if(!r)throw new Error(`webgpu-native: no moments workgroup fits ${e.cs} channels on this device`);return St(dt({},i),{momLX:r,vendor:n||"unknown"})}const gt=256;function to(t){if(typeof Float16Array!="undefined")return new Uint16Array(new Float16Array(t).buffer);const e=new Uint16Array(t.length),n=new Float32Array(1),o=new Uint32Array(n.buffer);for(let s=0;s<t.length;s++){n[0]=t[s];const i=o[0],r=i>>>16&32768,a=i>>>23&255,c=i&8388607;if(a===255){e[s]=r|31744|(c?512:0);continue}const l=a-127+15;if(l>=31){e[s]=r|31744;continue}if(l<=0){if(l<-10){e[s]=r;continue}const d=c|8388608,u=14-l;let p=d>>>u;const m=d&(1<<u)-1,S=1<<u-1;(m>S||m===S&&p&1)&&p++,e[s]=r|p;continue}let f=l<<10|c>>>13;const g=c&8191;(g>4096||g===4096&&f&1)&&f++,e[s]=r|f}return e}function Ws(t,e){var n;return e.quantize8Bit?"8-bit quantized V4 runner requested":(n=t.features)!=null&&n.has("shader-f16")?e.outputType==="probability"?"probability output (CAT-lite) is not ported yet":e.enableTTA?"test-time augmentation uses the tinygrad TTA runner":e.forceFP32?"model entry forces fp32":e.webgpu_safetensor?Gn(e)?null:"no descriptor in webgl2_runners/descriptors.js":"no safetensors weights":"device lacks shader-f16"}function Gs(t,e){const n=t.nx*t.ny*t.nz,o=t.nx/e*t.ny*t.nz;return 2*n*t.cs*2+n*2+2*n*4+(o+1)*t.cs*2*4}const no=new WeakMap;function Ts(t,e,n){return ce(this,null,function*(){let o=no.get(t);o||(o=new Map,no.set(t,o));const s=`${e.chan}|${e.cs}|${e.nclass}|${e.norm}|${e.affine}|${e.convBias}|${e.clsBias}|${e.activation}|${e.eps}|${n.localX}x${n.vox}x${n.momLX}`;let i=o.get(s);return i||(i=ce(null,null,function*(){const r=t.createShaderModule({code:Fs(e,n)}),a=["read-only-storage","storage","read-only-storage","uniform","storage","storage","read-only-storage","read-only-storage"],c=t.createBindGroupLayout({entries:a.map((d,u)=>({binding:u,visibility:GPUShaderStage.COMPUTE,buffer:{type:d}}))}),l=t.createPipelineLayout({bindGroupLayouts:[c]}),f=["conv","classify",...e.norm==="gn"?["moments","moments_finish","norm"]:[]],g=Object.fromEntries(yield Promise.all(f.map(d=>ce(null,null,function*(){return[d,yield t.createComputePipelineAsync({layout:l,compute:{module:r,entryPoint:d}})]}))));return{bgl:c,pipelines:g}}).catch(r=>{throw o.delete(s),r}),o.set(s,i)),i})}function Rs(t,e,n,o){return ce(this,null,function*(){const s=Gn(o);if(!s)throw new Error(`webgpu-native: no descriptor for ${o.path}`);const i=e instanceof Uint8Array?e:new Uint8Array(e),r=As(bo(_o(i.buffer.slice(i.byteOffset,i.byteOffset+i.byteLength))),o.classifierBias),a=wo(r,{nx:gt,ny:gt,nz:gt,activation:s.activation,dilations:s.dilations});if(!a.nclass)throw new Error("webgpu-native: model has no classifier");if(a.convBias&&a.affine)throw new Error("webgpu-native: conv bias together with a GroupNorm affine is not supported");const c=Ls(t,a),l=gt*gt*gt,f=l*a.cs*2,g=t.limits;if(f>g.maxStorageBufferBindingSize||f>g.maxBufferSize)throw new Error(`webgpu-native: a ${f>>>20} MiB activation exceeds this device's buffer limits`);console.log(`[WebGPU-native] ${s.name}: ${a.chan}ch (stride ${a.cs}) ${a.nclass}cls norm=${a.norm} affine=${a.affine} act=${a.activation} | preset ${c.localX}x${c.vox} (moments ${c.momLX}, ${c.source}) | ~${Math.round(Gs(a,c.momLX)/1048576)} MiB`);const d=Ps(r,a),{layers:u,clsFloat:p,clsBiasFloat:m}=d.offsets;t.pushErrorScope("validation"),t.pushErrorScope("out-of-memory");let S=2;try{const{bgl:A,pipelines:_}=yield Ts(t,a,c),h=(I,Z)=>t.createBuffer({size:I,usage:Z}),v=GPUBufferUsage.STORAGE,x=gt/c.momLX*gt*gt,w=to(d.data),$=h(l*2,v|GPUBufferUsage.COPY_DST),M=h(f,v),b=h(f,v),B=h(Math.ceil(w.byteLength/16)*16,v|GPUBufferUsage.COPY_DST),T=h((x+1)*a.cs*2*4,v),k=h(l*4,v|GPUBufferUsage.COPY_SRC),P=h(l*4,GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST);t.queue.writeBuffer(B,0,w);const L=(I,Z,be)=>{const V=h(32,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST);return t.queue.writeBuffer(V,0,be),t.createBindGroup({layout:A,entries:[{binding:0,resource:{buffer:I}},{binding:1,resource:{buffer:Z}},{binding:2,resource:{buffer:B}},{binding:3,resource:{buffer:V}},{binding:4,resource:{buffer:T}},{binding:5,resource:{buffer:k}},{binding:6,resource:{buffer:B}},{binding:7,resource:{buffer:I}}]})},W=I=>{const Z=new Uint32Array(8);return Z[0]=I.dilation|0,Z[1]=I.weightOff>>>0,Z[2]=I.affineOff>>>0,Z[3]=I.biasOff>>>0,Z[4]=I.inChannels>>>0,Z[5]=I.inStride>>>0,Z[6]=x,Z},z=[];let Y=$,R=M;u.forEach((I,Z)=>{const be=Z===0;z.push(L(Y,R,W({dilation:a.dilations[Z],weightOff:I.wq*4,affineOff:I.affQ!==void 0?I.affQ*4:0,biasOff:I.biasQ!==void 0?I.biasQ*4:I.affBiasQ!==void 0?I.affBiasQ*4:0,inChannels:be?1:a.cs,inStride:be?1:a.cs}))),Y=R,R=R===M?b:M});const Q=L(Y,R,W({weightOff:p,biasOff:m>=0?m:0}));S=0;const j=yield t.popErrorScope(),G=yield t.popErrorScope();if(j||G)throw new Error(`webgpu-native setup failed: ${(j||G).message}`);const F=gt/(c.localX*c.vox),H=gt/c.localX,X=gt/c.momLX;return function(Z){return ce(this,null,function*(){if(Z.length!==l)throw new Error(`webgpu-native: input has ${Z.length} voxels, expected ${l}`);t.pushErrorScope("validation"),t.queue.writeBuffer($,0,to(Z));for(const N of z){const D=t.createCommandEncoder(),J=D.beginComputePass();J.setBindGroup(0,N),J.setPipeline(_.conv),J.dispatchWorkgroups(F,gt,gt),a.norm==="gn"&&(J.setPipeline(_.moments),J.dispatchWorkgroups(X,gt,gt),J.setPipeline(_.moments_finish),J.dispatchWorkgroups(1,1,1),J.setPipeline(_.norm),J.dispatchWorkgroups(H,gt,gt)),J.end(),t.queue.submit([D.finish()])}const be=t.createCommandEncoder(),V=be.beginComputePass();V.setBindGroup(0,Q),V.setPipeline(_.classify),V.dispatchWorkgroups(H,gt,gt),V.end(),be.copyBufferToBuffer(k,0,P,0,l*4),t.queue.submit([be.finish()]),yield P.mapAsync(GPUMapMode.READ);const oe=new Float32Array(new Uint32Array(P.getMappedRange()));P.unmap();const Pe=yield t.popErrorScope();if(Pe)throw new Error(`webgpu-native inference failed: ${Pe.message}`);return[oe]})}}finally{for(;S-- >0;)yield t.popErrorScope().catch(()=>{})}})}const Is={grayMatter:[2,6,7,8,9,10,14,15,16,17],whiteMatter:[1,5],csf:[3,4,11,12]};function on(t,e,n,o,s){var r;const i=Number((r=t[e])!=null?r:n);if(!Number.isFinite(i)||i<o||i>s)throw new Error(`${e} must be between ${o} and ${s}, got ${t[e]}`);return i}function $n(t,e,n){let o=0;for(const s of t||[]){if(!Number.isInteger(s)||s<0||s>=e||s>=32)throw new Error(`Invalid ${n} tissue label ${s} for ${e} classes`);o=(o|1<<s)>>>0}return o}function qs(t,e){if(!Number.isInteger(e)||e<2||e>32)throw new Error(`Native WebGL2 grouped probabilities require 2..32 classes, got ${e}`);const n=dt(dt({},Is),t.probabilityGroups||{});return{temperature:on(t,"softmaxTemperature",1,1e-6,1e6),supportTemperature:on(t,"brainSupportTemperature",1,1e-6,1e6),supportPower:on(t,"brainSupportPower",1,1e-6,1e6),sigma:on(t,"partialVolumeSigma",0,0,2),grayMask:$n(n.grayMatter,e,"gray-matter"),whiteMask:$n(n.whiteMatter,e,"white-matter"),csfMask:$n(n.csf,e,"CSF")}}function Sn(t,e,n,o,s,i){const[r,a,c]=n,l=r*a,f=s.length-1>>1;for(let g=0;g<c;g++)for(let d=0;d<a;d++)for(let u=0;u<r;u++){const p=g*l+d*r+u,m=o===1?u:o===r?d:g,S=o===1?r:o===r?a:c;let A=0;for(let _=-f;_<=f;_++){const h=m+_;h<0||h>=S||(A+=s[_+f]*t[p+_*o])}e[p]=A/i}}function Os(t,e,n,o){const[s,i,r]=n,a=s*i*r;if(!Array.isArray(t)||t.length!==3||t.some(u=>u.length!==a)||e.length!==a)throw new Error("Native WebGL2 tissue-prior dimensions do not match");const c=on(o,"partialVolumeSigma",0,0,2),l=on(o,"brainSupportPower",1,1e-6,1e6);let f=null,g=null,d=1;if(c>0){const u=Math.max(1,Math.round(3*c));g=new Float32Array(u*2+1),d=0;for(let p=-u;p<=u;p++){const m=Math.exp(-.5*p*p/(c*c));g[p+u]=m,d+=m}f=new Float32Array(a)}for(const u of t){let p=u;g&&(Sn(u,f,n,1,g,d),Sn(f,u,n,s,g,d),Sn(u,f,n,s*i,g,d),p=f);for(let m=0;m<a;m++){const S=Math.pow(Math.max(0,Math.min(1,e[m])),l);u[m]=Math.max(0,Math.min(1,p[m]*S))}}return t}const U=256,pt=64,Ct=8,rt=pt+2*Ct,Nt=rt*4,Ve=U*64,dn=U*U*2,wn=9216,ho=wn*8,vo=[1,3,5,7,13,19,31,19,13,7,5,3,1],yt=(t,e)=>Array.from({length:t},(n,o)=>e(o)).join(""),yo=new Float32Array(1),Ns=new Uint32Array(yo.buffer);function Cn(t){yo[0]=t;const e=Ns[0],n=e>>>16&32768,o=e>>>23&255;let s=e&8388607;if(o===255)return n|31744|(s?512:0);let i=o-127+15;return i<=0?i<-10?n:(s=(s|8388608)>>>1-i,n|s+4096>>>13):i>=31?n|31744:n|Math.min(31744,(i<<10)+(s+4096>>>13))}function Es(t){const e=new Uint16Array(t.length);for(let n=0;n<t.length;n++)e[n]=Cn(t[n]);return e}const It=new Map,Ds=12,xo=new WeakMap,Vs=new WeakMap;function js(t){let e=2166136261,n=2654435769;const o=t.byteLength>>>2;if((t.byteOffset&3)===0){const s=new Uint32Array(t.buffer,t.byteOffset,o);for(let i=0;i<s.length;i++){const r=s[i];e=Math.imul(e^r,16777619)>>>0,n=Math.imul(n^(r<<13|r>>>19),2246822507)>>>0}}else for(let s=0;s<o*4;s+=4){const i=t[s]|t[s+1]<<8|t[s+2]<<16|t[s+3]<<24;e=Math.imul(e^i,16777619)>>>0,n=Math.imul(n^(i<<13|i>>>19),2246822507)>>>0}for(let s=o*4;s<t.byteLength;s++)e=Math.imul(e^t[s],16777619)>>>0;return`${t.byteLength}_${e.toString(16)}_${n.toString(16)}`}function Hs(t,e,n,o){const s=o!=null&&o.classifierBias?JSON.stringify(o.classifierBias):"",i=`${js(t)}|${n.chan}|${n.cs}|${n.nclass}|${n.norm}|${n.eps}|${s}`;if(It.has(i)){const a=It.get(i);return It.delete(i),It.set(i,a),a}const r=Zs(e,n);if(It.size>=Ds){const a=It.keys().next().value;It.delete(a)}return It.set(i,r),r}function Tn(t,e){let n=t.get(e);return n||(n=new Map,t.set(e,n)),n}function Bt(t,e,n){let o=t.get(e);return o||(o=n().catch(s=>{throw t.delete(e),s}),t.set(e,o)),o}function hn(t,e){let n=0;return{alloc:(s,i)=>{const r=Math.max(16,Math.ceil(s/16)*16),a=t.createBuffer({size:r,usage:i});return e.push(a),n+=r,a},getBytes:()=>n,resetBytes:()=>{n=0}}}const Tt=new WeakMap;function Qt(t){const e=t?Tt.get(t):null;if(e){Tt.delete(t),e.inUse=!1;for(const n of e.buffers)n.destroy();e.buffers.length=0}}function $o(t,e,n){const o=Tt.get(t);if(o){if(o.key===e&&!o.inUse)return o.inUse=!0,o;if(o.inUse){const r=n();return St(dt({key:e},r),{inUse:!0,pooled:!1})}Tt.delete(t);for(const r of o.buffers)r.destroy();o.buffers.length=0}const s=n(),i=St(dt({key:e},s),{inUse:!0,pooled:!0});return Tt.set(t,i),i}function Pt(t,e,n){return t.createShaderModule({label:e,code:n})}function Rn(t,e,n,o,s){return ce(this,null,function*(){const i=t.createBindGroupLayout({entries:s.map((r,a)=>typeof r=="string"?{binding:a,visibility:GPUShaderStage.COMPUTE,buffer:{type:r}}:{binding:a,visibility:GPUShaderStage.COMPUTE,buffer:r})});try{const r=yield t.createComputePipelineAsync({label:e,layout:t.createPipelineLayout({bindGroupLayouts:[i]}),compute:{module:n,entryPoint:o}});return{bgl:i,pipe:r}}catch(r){if(n!=null&&n.getCompilationInfo){const a=yield n.getCompilationInfo().catch(()=>null),c=a?a.messages.filter(l=>l.type==="error"):[];if(c.length)throw new Error(`meshnet_fast_v4 [${e}] WGSL error: `+c.map(l=>`L${l.lineNum}:${l.linePos} ${l.message}`).join(" | "))}throw r}})}function Fn(t,e){const n=e?`enable f16;
`:"",o=e?"f16":"f32",s=`vec4<${o}>`;return t?`${n}
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
  let dstX4 = ${Ct}u + wid.x * 8u + x4Loc;
  for (var s : u32 = 0u; s < 4u; s = s + 1u) {
    let zLoc = s * 8u + zOff;
    let r = zLoc * 33u + xBase;
    inp_4[((Z0 + zLoc) * 256u + Y) * ${rt}u + dstX4] =
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
  let dstX4 = ${Ct}u + wid.x * 8u + x4Loc;
  for (var s : u32 = 0u; s < 4u; s = s + 1u) {
    let zl = s * 8u + zOff;
    let r = zl * 33u + xBase;
    inp_4[((Z0 + zl) * 256u + Y) * ${rt}u + dstX4] =
      ${s}(${o}(sh[r]), ${o}(sh[r + 1u]), ${o}(sh[r + 2u]), ${o}(sh[r + 3u]));
  }
}`}function So(){return`
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
}`}function Xs(){return`
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
}`}function Ys(){return`
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
}`}function oo(){return`
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
}`}function Gt(t,e,n,o,s){return ce(this,null,function*(){const i=Tn(Vs,t);let r=i.get(e);return r||(r=ce(null,null,function*(){const a=Pt(t,e,n());return Rn(t,e,a,o,s)}).catch(a=>{throw i.delete(e),a}),i.set(e,r)),r})}function so(t,e,n,o,s){e.fill(0);const i=U*U*U;if(!(s&&t[0]===o&&t[i-1]===o))return{hasBgSkip:!1};if(n.fill(0),(t instanceof Uint8Array||t instanceof Uint8ClampedArray)&&(t.byteOffset&3)===0&&Number.isInteger(o)&&o>=0&&o<=255){const c=new Uint32Array(t.buffer,t.byteOffset,i>>>2),l=new Uint32Array(n.buffer,n.byteOffset,U*U>>>2),f=(o&255)*16843009>>>0;let g=0;for(let d=0;d<U;d++)for(let u=0;u<16384;u++)l[u]|=c[g++]^f}else{let c=0;const l=U*U;for(let f=0;f<U;f++)for(let g=0;g<l;g++,c++)t[c]!==o&&(n[g]=1)}let a=0;for(let c=0;c<U;c++){const l=c*U;for(let f=0;f<U;f++)n[l+f]!==0&&(e[f*U+c]=1,a++)}return a===0||a>=6e4?{hasBgSkip:!1}:{hasBgSkip:!0}}function Ao(t){return t?`${t.grayMask}_${t.whiteMask}_${t.csfMask}_${t.temperature}_${t.supportTemperature}`:"seg"}function Po(l,f,g,d,u,p,m,S){return ce(this,arguments,function*(t,e,n,o,s,i,r,a,{includeCls:c=!0}={}){var se;const A=Tn(xo,t),_=o?1:0,h=s?1:0,v=r.useUniformWeff?1:0,x=(K,ie,xe,ze)=>Rn(t,K,ie,xe,ze),w=["storage","storage","storage","storage"],$=["read-only-storage","storage","storage","storage","storage","storage","read-only-storage","storage","uniform","uniform","uniform"],M=["read-only-storage","read-only-storage","storage","storage","read-only-storage","uniform"],b=["storage","storage","storage","storage","read-only-storage","read-only-storage",{type:"uniform",hasDynamicOffset:!0,minBindingSize:32}],B=["storage","storage","storage","storage","read-only-storage","read-only-storage","read-only-storage","uniform"],T=["read-only-storage","read-only-storage","read-only-storage","read-only-storage","storage","storage",r.useUniformWeff?"uniform":"read-only-storage","read-only-storage",{type:"uniform",hasDynamicOffset:!0,minBindingSize:32}],k=["read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","storage","uniform","uniform","uniform"],P=`128|init|${e.cs}|${e.activation}|${_}`,L=`128|conv0|${e.cs}|${e.dilations[0]}|${e.norm}|${_}|${h}`,W=`128|prep|${e.chan}|${e.cs}|${e.activation}|${e.norm}|${_}`,z=`128|flush|${e.cs}|${_}`,Y=`128|norm|${e.cs}|${e.activation}|${e.norm}|${_}`,R=`128|cls|${e.chan}|${e.cs}|${e.nclass}|${(se=n==null?void 0:n.clsK4)!=null?se:0}|${r.numConvs}|${e.activation}|${e.norm}|${_}|${Ao(i)}`,Q=Bt(A,P,()=>{const K=Pt(t,"init_act8_128",r.initActWgsl());return x("init_act8_128",K,"main",w)}),j=Bt(A,L,()=>ce(null,null,function*(){const K=Pt(t,"conv0_128",r.conv0Wgsl()),ie=yield Promise.all(r.halfPass0?[x("conv0_128_lo",K,"main_lo",$),x("conv0_128_hi",K,"main_hi",$),x("conv0_128_bg_lo",K,"main_bg_lo",$),x("conv0_128_bg_hi",K,"main_bg_hi",$)]:[x("conv0_128",K,"main",$),x("conv0_128_bg",K,"main_bg",$)]);return r.halfPass0?{lo:ie[0],hi:ie[1],bgLo:ie[2],bgHi:ie[3]}:{main:ie[0],bg:ie[1]}})),G=Bt(A,W,()=>ce(null,null,function*(){const K=Pt(t,"prep_128",r.prepWgsl()),[ie,xe]=yield Promise.all([x("moments_finish_128",K,"moments_finish",M),x("prep_weff_128",K,"prep_weff",M)]);return{pMomFin:ie,pPrepW:xe}})),F=Bt(A,z,()=>{const K=Pt(t,"flush_128",r.flushWgsl());return x("flush_stage_128",K,"main",b)}),H=Bt(A,Y,()=>ce(null,null,function*(){const K=Pt(t,"norm_128",r.normWgsl()),[ie,xe]=yield Promise.all([x("norm_quant8_128",K,"main",B),x("norm_halo_fill_128",K,"norm_halo_fill",B)]);return{pNorm:ie,pNormHalo:xe}})),X=c?Bt(A,R,()=>{const K=Pt(t,"cls_128",r.clsWgsl());return x("classify_v4_128",K,"main",k)}):Promise.resolve(null),I=a.map(K=>Bt(A,`128|conv|${e.chan}|${e.cs}|${K}|${e.activation}|${e.norm}|${v}|${_}|${h}`,()=>ce(null,null,function*(){const ie=Pt(t,`conv_128_d${K}`,r.getConvWgsl(K));if(r.halfPassConv){const[le,_e,Me,ne,Be,je]=yield Promise.all([x(`conv_128_d${K}_lo`,ie,"main_lo",T),x(`conv_128_d${K}_hi`,ie,"main_hi",T),x(`conv_128_d${K}_ext_lo`,ie,"main_ext_lo",T),x(`conv_128_d${K}_ext_hi`,ie,"main_ext_hi",T),x(`conv_128_d${K}_bg_lo`,ie,"main_bg_lo",T),x(`conv_128_d${K}_bg_hi`,ie,"main_bg_hi",T)]);return{lo:le,hi:_e,extLo:Me,extHi:ne,bgLo:Be,bgHi:je}}const[xe,ze,E]=yield Promise.all([x(`conv_128_d${K}`,ie,"main",T),x(`conv_128_d${K}_ext`,ie,"main_ext",T),x(`conv_128_d${K}_bg`,ie,"main_bg",T)]);return{main:xe,ext:ze,bg:E}}))),[Z,be,V,oe,Pe,N,...D]=yield Promise.all([Q,j,G,F,H,X,...I]),J={};return a.forEach((K,ie)=>{J[K]=D[ie]}),{pInit:Z,pMomFin:V.pMomFin,pPrepW:V.pPrepW,pFlush:oe,pNorm:Pe.pNorm,pNormHalo:Pe.pNormHalo,pCls:N,pConv0:be,convPipes:J}})}function ko(f,g,d,u,p,m,S,A,_){return ce(this,arguments,function*(t,e,n,o,s,i,r,a,c,{includeCls:l=!0}={}){var J;const h=Tn(xo,t),v=o?1:0,x=s?1:0,w=i?1:0,$=a.useUniformWeff?1:0,M=(se,K,ie,xe)=>Rn(t,se,K,ie,xe),b=["storage","storage"],B=["read-only-storage","storage","storage","read-only-storage","read-only-storage","storage","storage","read-only-storage","uniform"],T=["read-only-storage","read-only-storage","storage","storage","storage","storage","read-only-storage","uniform"],k=["storage","storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","uniform"],P=["read-only-storage","read-only-storage","storage","storage","storage","storage",a.useUniformWeff?"uniform":"read-only-storage","read-only-storage","uniform"],L=["read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","storage","read-only-storage","uniform"],W=`std|init|${e.cs}|${e.activation}|${v}|${w}`,z=`std|conv0|${e.cs}|${e.dilations[0]}|${e.norm}|${v}|${x}|${w}`,Y=`std|prep|${e.chan}|${e.cs}|${e.activation}|${e.norm}|${v}|${w}`,R=`std|norm|${e.cs}|${e.activation}|${e.norm}|${v}|${w}`,Q=`std|cls|${e.chan}|${e.cs}|${e.nclass}|${(J=n==null?void 0:n.clsK4)!=null?J:0}|${e.activation}|${e.norm}|${v}|${w}|${Ao(r)}`,j=Bt(h,W,()=>{const se=Pt(t,"init_act8",a.initActWgsl());return M("init_act8",se,"main",b)}),G=Bt(h,z,()=>ce(null,null,function*(){const se=Pt(t,"conv0",a.conv0Wgsl()),K=yield Promise.all(a.halfPass0?[M("conv0_lo",se,"main_lo",B),M("conv0_hi",se,"main_hi",B),M("conv0_bg_lo",se,"main_bg_lo",B),M("conv0_bg_hi",se,"main_bg_hi",B)]:[M("conv0",se,"main",B),M("conv0_bg",se,"main_bg",B)]);return a.halfPass0?{lo:K[0],hi:K[1],bgLo:K[2],bgHi:K[3]}:{main:K[0],bg:K[1]}})),F=Bt(h,Y,()=>ce(null,null,function*(){const se=Pt(t,"prep",a.prepWgsl()),[K,ie]=yield Promise.all([M("moments_finish",se,"moments_finish",T),M("prep_weff",se,"prep_weff",T)]);return{pMomFin:K,pPrepW:ie}})),H=Bt(h,R,()=>ce(null,null,function*(){const se=Pt(t,"norm",a.normWgsl()),[K,ie]=yield Promise.all([M("norm_quant8",se,"main",k),M("norm_halo_fill",se,"norm_halo_fill",k)]);return{pNorm:K,pNormHalo:ie}})),X=l?Bt(h,Q,()=>{const se=Pt(t,"cls",a.clsWgsl());return M("classify_v4",se,"main",L)}):Promise.resolve(null),I=c.map(se=>Bt(h,`std|conv|${e.chan}|${e.cs}|${se}|${e.activation}|${e.norm}|${$}|${v}|${x}|${w}`,()=>ce(null,null,function*(){const K=Pt(t,`conv_d${se}`,a.getConvWgsl(se));if(a.halfPassConv){const[ze,E,le,_e]=yield Promise.all([M(`conv_d${se}_lo`,K,"main_lo",P),M(`conv_d${se}_hi`,K,"main_hi",P),M(`conv_d${se}_ext_lo`,K,"main_ext_lo",P),M(`conv_d${se}_ext_hi`,K,"main_ext_hi",P)]);return{lo:ze,hi:E,extLo:le,extHi:_e}}const[ie,xe]=yield Promise.all([M(`conv_d${se}`,K,"main",P),M(`conv_d${se}_ext`,K,"main_ext",P)]);return{main:ie,ext:xe}}))),[Z,be,V,oe,Pe,...N]=yield Promise.all([j,G,F,H,X,...I]),D={};return c.forEach((se,K)=>{D[se]=N[K]}),{pInit:Z,pMomFin:V.pMomFin,pPrepW:V.pPrepW,pNorm:oe.pNorm,pNormHalo:oe.pNormHalo,pCls:Pe,pConv0:be,convPipes:D}})}function ro(t,e,n,o,s){n.fill(0);const i=s&&t[0]===0&&t[t.length-1]===0;let r=0,a=0;if(!i){if(o)for(let c=0;c<U;c++){const l=c*U*Nt;for(let f=0;f<U;f++){let g=l+f*Nt+32;for(let d=0;d<U;d++,a++,g++){const u=t[a];e[g]=u===0?0:Cn(u)}}}else for(let c=0;c<U;c++){const l=c*U*Nt;for(let f=0;f<U;f++){const g=c*U*U+f*U;e.set(t.subarray(g,g+U),l+f*Nt+32)}}return{hasBgSkip:!1}}for(let c=0;c<U;c++){const l=c*U*Nt;for(let f=0;f<U;f++){let g=!1,d=l+f*Nt+32;for(let u=0;u<U;u++,a++,d++){const p=t[a];p!==0?(e[d]=o?Cn(p):p,g=!0):e[d]=0}g&&(n[c*U+f]=1,r++)}}return r===0||r>=6e4?{hasBgSkip:!1}:{hasBgSkip:!0}}function cn(t,e){const n=new Uint8Array(U*U);for(let o=0;o<U;o++){const s=o*U,i=o-e,r=o+e;for(let a=0;a<U;a++){if(!t[s+a])continue;const c=a-e,l=a+e;if(i>=0){const f=i*U;c>=0&&(n[f+c]=1),n[f+a]=1,l<U&&(n[f+l]=1)}if(c>=0&&(n[s+c]=1),n[s+a]=1,l<U&&(n[s+l]=1),r>=0&&r<U){const f=r*U;c>=0&&(n[f+c]=1),n[f+a]=1,l<U&&(n[f+l]=1)}}}return n}function Ks(t,e){const n=new Uint8Array(U*U),o=new Uint8Array(U*U),s=new Int32Array(U+1);for(let i=0;i<U;i++){const r=i*U;for(let a=0;a<U;a++)s[a+1]=s[a]+t[r+a];for(let a=0;a<U;a++)s[Math.min(U-1,a+e)+1]-s[Math.max(0,a-e)]>0&&(n[r+a]=1)}for(let i=0;i<U;i++){for(let r=0;r<U;r++)s[r+1]=s[r]+n[r*U+i];for(let r=0;r<U;r++)s[Math.min(U-1,r+e)+1]-s[Math.max(0,r-e)]>0&&(o[r*U+i]=1)}return o}function An(t){const e=new Uint8Array(Ve);for(let n=0;n<U;n++){const o=n*U,s=n*64;for(let i=0;i<64;i++){const r=o+(i<<2);t[r]|t[r+1]|t[r+2]|t[r+3]&&(e[s+i]=1)}}return e}function _n(t){const e=new Uint8Array(U*U);for(let n=0;n<U;n++){const o=n*U,s=n*64;for(let i=0;i<64;i++)if(t[s+i]){const r=o+(i<<2);e[r]=1,e[r+1]=1,e[r+2]=1,e[r+3]=1}}return e}function bn(t){let e=0;for(let s=0;s<Ve;s++)e+=t[s];const n=new Uint32Array(e);let o=0;for(let s=0;s<U;s++){const i=s*64;for(let r=0;r<64;r++)t[i+r]&&(n[o++]=s<<8|r)}return n}function qt(t){let e=0;for(let n=0;n<t.length;n++)e+=t[n];return e}function ao(t){const e=new Uint8Array(Ve);if(t===1024)for(let n=0;n<32;n++)for(let o=0;o<32;o++){const s=n*8+(n*3+o*5&7),i=o*2+(n+o&1);e[s*64+i]=1}else if(t===512)for(let n=0;n<32;n++)for(let o=0;o<16;o++){const s=n*8+(n*3+o*5&7),i=o*4+(n+o*3&3);e[s*64+i]=1}else for(let n=0;n<16;n++)for(let o=0;o<16;o++){const s=n*16+(n*7+o*3&15),i=o*4+(n+o*3&3);e[s*64+i]=1}return e}function Mo(t,e,n,o){const s=n.length,i=()=>({isFull:!0,mode:"full",writtenMask:null,computedMask:null,mainStrips:null,extStrips:null,nMomExt:0,normStrips:null,haloRows:null,bgStrip:null,extWeight:0});if(!o||!e.hasBgSkip)return{clsSkipped:!1,clsStrips:null,layers:Array.from({length:s},i)};const r=An(Ks(t,3)),a=qt(r)<15800,c=a?bn(r):null,l=new Array(s);let f=null;for(let _=0;_<s;_++){const h=n[_],v=cn(_===0?t:f,h);if(_>0)for(let w=0;w<U;w++){const $=w<h||w>=U-h,M=w*U;for(let b=0;b<U;b++)($||b<h||b>=U-h)&&(v[M+b]=1)}f=v;const x=new Uint8Array(Ve);for(let w=0;w<U;w++){const $=w*U,M=w*64;for(let b=0;b<64;b++){const B=$+(b<<2);v[B]|v[B+1]|v[B+2]|v[B+3]||(x[M+b]=1)}}l[_]=x}const g=new Array(s);g[s-1]=r;for(let _=s-2;_>=0;_--)g[_]=An(cn(_n(g[_+1]),n[_+1]));const d=a&&s>=4&&n[s-1]<=2&&n[s-2]<=4&&n[s-3]<=6,u=Math.max(1,s-3),p=new Array(s).fill(null),m=new Array(s).fill(null),S=new Array(s).fill(null);if(d){const h=(Ve-qt(g[s-1]))/Ve>=.52?256:512,v=1024,x=ao(h),w=ao(v),$=g[s-1],M=new Uint8Array(Ve);let b=0;for(let B=0;B<Ve;B++)x[B]&&!$[B]&&(M[B]=1,b++);if(b>0&&b<=wn&&qt($)+b<=15360){p[s-1]=M,m[s-1]=new Uint8Array(Ve),S[s-1]=x;for(let B=s-2;B>=u;B--){const T=new Uint8Array(Ve),k=g[B+1],P=p[B+1];for(let G=0;G<Ve;G++)T[G]=k[G]|P[G];const L=An(cn(_n(T),n[B+1])),W=new Uint8Array(Ve),z=g[B];for(let G=0;G<Ve;G++)L[G]&&!z[G]&&(W[G]=1);const Y=B===u?w:x,R=new Uint8Array(Ve);let Q=0,j=0;for(let G=0;G<Ve;G++)(W[G]||Y[G])&&!z[G]&&(R[G]=1,Q++,Y[G]&&j++);if(j===0||Q>wn||qt(z)+Q>15360){const G=B+1,F=g[G],H=m[G],X=new Uint8Array(Ve);let I=0;for(let Z=0;Z<Ve;Z++)(H[Z]||w[Z])&&!F[Z]&&(X[Z]=1,I++);I<=wn&&qt(F)+I<=15360&&(p[G]=X,S[G]=w);break}m[B]=W,p[B]=R,S[B]=Y}}}const A=new Array(s);for(let _=0;_<s;_++){const h=qt(l[_]),v=Ve-h,x=p[_]!==null,w=x?qt(g[_])+qt(p[_]):1/0;if(h>=512&&v<=w){const $=new Uint8Array(Ve);let M=-1;for(let k=0;k<Ve;k++)l[_][k]?M<0&&(M=k):$[k]=1;const b=$.slice();b[M]=1;const B={z:M>>>6,yWg:M&63,packed:M>>>6<<8|M&63},T=bn($);A[_]={isFull:!1,mode:"rpure",writtenMask:$,computedMask:b,mainStrips:T,extStrips:_===0?null:new Uint32Array([B.packed]),nMomExt:_===0?0:1,normStrips:T,haloRows:null,bgStrip:B,extWeight:h}}else if(x&&w<=15360){const $=g[_],M=p[_],b=m[_],B=S[_],T=bn($),k=[],P=[];for(let R=0;R<U;R++){const Q=R*64;for(let j=0;j<64;j++){const G=Q+j;if(!M[G])continue;const F=R<<8|j;B[G]?k.push(F):P.push(F)}}const L=k.length;if(L===0){A[_]=i();continue}const W=new Uint32Array(k.length+P.length);W.set(k,0),W.set(P,k.length);const z=new Uint8Array(Ve),Y=new Uint8Array(Ve);for(let R=0;R<Ve;R++)z[R]=$[R]|b[R],Y[R]=$[R]|M[R];A[_]={isFull:!1,mode:"bwd",writtenMask:z,computedMask:Y,mainStrips:T,extStrips:W,nMomExt:L,normStrips:_+1<s?bn(z):null,haloRows:null,bgStrip:null,extWeight:(Ve-T.length)/L}}else A[_]=i()}for(let _=s-2;_>=0;_--)A[_].mode==="bwd"&&A[_+1].mode!=="bwd"&&(A[_]=i());for(let _=0;_<s-1;_++){const h=A[_];if(h.mode!=="rpure")continue;const v=A[_+1],x=v.isFull?new Uint8Array(U*U).fill(1):cn(_n(v.computedMask),n[_+1]),w=_n(h.writtenMask),$=[];for(let M=0;M<U;M++){const b=M*U;for(let B=0;B<U;B++)x[b+B]&&!w[b+B]&&$.push(M<<8|B)}$.length>0&&(h.haloRows=new Uint32Array($))}return{clsSkipped:a,clsStrips:c,layers:A}}function Zs(t,e){const n=e.chan,o=e.cs,s=o/4,i=e.nclass,r=Math.ceil(i/4),{convs:a,affines:c,classifier:l}=t,f=a.length,g=27*s,d=9*o*3*s,u=o*r,p=(g+(f-1)*d+u)*4,m=new Float32Array(p),S=4*o,A=f*S,_=new Float32Array(A+r*4),h=(w,$,M)=>{if(e.norm!=="gn"||$>=n)return 1;const b=a[w],B=M*27,T=$*B;let k=0;for(let P=0;P<B;P++)k+=Math.abs(b.w[T+P]);return Math.max(k/16,1e-6)};for(let w=0;w<a[0].outC;w++){const $=h(0,w,a[0].inC),M=1/$;for(let b=0;b<27;b++)m[b*o+w]=a[0].w[w*27+b]*M;_[2*o+w]=e.eps/($*$),a[0].bias&&(_[3*o+w]=a[0].bias[w])}for(let w=a[0].outC;w<o;w++)_[2*o+w]=e.eps;for(let w=1;w<f;w++){const $=a[w],M=(g+(w-1)*d)*4,b=w*S;for(let B=0;B<$.outC;B++){const T=h(w,B,$.inC),k=1/T,P=B>>>2,L=B&3;for(let W=0;W<9;W++)for(let z=0;z<$.inC;z++)for(let Y=0;Y<3;Y++){const R=W*3+Y,Q=M+(((W*o+z)*3+Y)*s+P)*4+L;m[Q]=$.w[(B*$.inC+z)*27+R]*k}_[b+2*o+B]=e.eps/(T*T),$.bias&&(_[b+3*o+B]=$.bias[B])}for(let B=$.outC;B<o;B++)_[b+2*o+B]=e.eps}for(let w=0;w<f;w++){const $=w*S,M=c[w];for(let b=0;b<n;b++)e.norm==="gn"?(_[$+b]=M!=null&&M.scale?M.scale[b]:1,_[$+o+b]=M!=null&&M.bias?M.bias[b]:0):(_[$+b]=1,_[$+o+b]=0)}const v=g+(f-1)*d,x=v*4;for(let w=0;w<n;w++)for(let $=0;$<i;$++)m[x+w*r*4+$]=l.w[$*l.inC+w];for(let w=0;w<r*4;w++)_[A+w]=w<i?l.bias?l.bias[w]:0:-1e30;return{wF32:m,wF16:Es(m),qmetaF32:_,w0Vec4s:g,hiddenVec4PerLayer:d,clsVec4Off:v,clsBiasOff:A,metaStride:S,clsK4:r}}function sn(t){if(t==="gelu_tanh")return`fn act(x : f32) -> f32 {
  let u = clamp(0.7978845608028654 * (x + 0.044715 * x * x * x), -9.0, 9.0);
  return 0.5 * x * (1.0 + tanh(u));
}`;if(t==="relu")return"fn act(x : f32) -> f32 { return max(x, 0.0); }";if(t==="elu")return"fn act(x : f32) -> f32 { return select(exp(clamp(x, -20.0, 0.0)) - 1.0, x, x >= 0.0); }";throw new Error(`meshnet_fast_v4: unsupported activation '${t}'`)}function zo(t){return t==="gelu_tanh"?{uZeroInt:7,uZeroFloat:7/255,uZeroWord:117901063,sterbenzSub:"1.02734375h",zeroBin:7}:t==="relu"?{uZeroInt:0,uZeroFloat:0,uZeroWord:0,sterbenzSub:"1.0h",zeroBin:0}:{uZeroInt:32,uZeroFloat:32/255,uZeroWord:538976288,sterbenzSub:"1.125h",zeroBin:32}}function Bo({chan:t,clsK4:e,nclass:n,V4:o,suf:s,readBiasStmt:i,biasExpr:r,probCfg:a}){const c=`    var acc0 = ${o}(0.0${s});
    var acc1 = ${o}(0.0${s});
    var acc2 = ${o}(0.0${s});
    var acc3 = ${o}(0.0${s});
    for (var c : u32 = 0u; c < ${t}u; c = c + 1u) {
      let wv = w16_4[w_cls + c * ${e}u + k4];
      let f = feat[c];
      acc0 = fma(f, ${o}(wv.x), acc0);
      acc1 = fma(f, ${o}(wv.y), acc1);
      acc2 = fma(f, ${o}(wv.z), acc2);
      acc3 = fma(f, ${o}(wv.w), acc3);
    }
    let k_base = k4 * 4u;
${i}`;if(!a)return`  var best_v = vec4<f32>(-1.0e29);
  var best_k = vec4<u32>(0u);

  for (var k4 : u32 = 0u; k4 < ${e}u; k4 = k4 + 1u) {
${c}
${yt(4,d=>`    let l${d} = vec4<f32>(acc${d}) + vec4<f32>(${r(d)});
    let m${d} = l${d} > best_v;
    best_v = select(best_v, l${d}, m${d});
    best_k = select(best_k, vec4<u32>(k_base + ${d}u), m${d});
`)}  }

  labels8[row_idx * ${pt}u + x4] = best_k.x | (best_k.y << 8u) | (best_k.z << 16u) | (best_k.w << 24u);`;const l=`f32(${(1/Math.max(a.temperature,1e-6)).toExponential(8)})`,f=`f32(${(1/Math.max(a.supportTemperature,1e-6)).toExponential(8)})`,g=a.temperature===a.supportTemperature;return`  var max_v = vec4<f32>(-1.0e29);
  for (var k4 : u32 = 0u; k4 < ${e}u; k4 = k4 + 1u) {
${c}
${yt(4,d=>`    if (k_base + ${d}u < ${n}u) {
      max_v = max(max_v, vec4<f32>(acc${d}) + vec4<f32>(${r(d)}));
    }
`)}  }

  var denom = vec4<f32>(0.0);
  var sup_denom = vec4<f32>(0.0);
  var bg_w = vec4<f32>(0.0);
  var gm_num = vec4<f32>(0.0);
  var wm_num = vec4<f32>(0.0);
  var csf_num = vec4<f32>(0.0);
  for (var k4 : u32 = 0u; k4 < ${e}u; k4 = k4 + 1u) {
${c}
${yt(4,d=>`    let k${d} = k_base + ${d}u;
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
  let vox_base = row_idx * ${U}u + x4 * 4u;
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
  }`}function Co({device:t,hasF16:e,nvox:n,outBufBytes:o,inpBuf:s,act8_0:i,labels8Buf:r,readbackBuf:a,pInit:c,bgInit:l,pCls:f,bgCls:g,clsUbo:d,packed:u,modelEntry:p,probCfg:m,canGpuProb:S,probSlots:A,ownedBuffers:_,mkBuf:h}){let v=!1,x=!1,w=!1,$=!1;const M=new Uint8Array(U*U);let b=null,B=null,T=null,k=null;const P=(F,H)=>t.createBindGroup({layout:F,entries:H.map((X,I)=>({binding:I,resource:X&&X.buffer?X:{buffer:X}}))});function L(){if(!b){const F=e?"prep_in_u8_f16":"prep_in_u8_f32";b=ce(null,null,function*(){const{bgl:H,pipe:X}=yield Gt(t,F,()=>Fn(!0,e),"main",["read-only-storage","storage","uniform"]);if($)return null;const I=h(256*4,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST),Z=new Float32Array(256),be=P(H,[{buffer:r,offset:0,size:n},s,I]);return{pipe:X,ubo:I,lutF32:Z,bg:be}}).catch(H=>{throw b=null,H})}return b}function W(){if(!B){const F=e?"prep_in_f32_f16":"prep_in_f32_f32";B=ce(null,null,function*(){const{bgl:H,pipe:X}=yield Gt(t,F,()=>Fn(!1,e),"main",["read-only-storage","storage","uniform"]);if($)return null;const I=h(16,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST),Z=new Float32Array(4),be=o>=n*4?P(H,[{buffer:r,offset:0,size:n*4},s,I]):null,V=i.size>=n*4?P(H,[{buffer:i,offset:0,size:n*4},s,I]):null;return{pipe:X,ubo:I,f32Tmp:Z,bgLabels:be,bgAct0:V}}).catch(H=>{throw B=null,H})}return B}function z(){return T||(T=ce(null,null,function*(){const{bgl:F,pipe:H}=yield Gt(t,"transpose_u8_v4",So,"main",["read-only-storage","storage"]);if($)return null;const X=P(F,[{buffer:r,offset:0,size:n},{buffer:s,offset:0,size:n}]);return{pipe:H,bg:X}}).catch(F=>{throw T=null,F})),T}function Y(){return k||(k=ce(null,null,function*(){const[F,H,X,I]=yield Promise.all([Gt(t,"prob_unpack_two",Ys,"main",["read-only-storage","storage","storage"]),Gt(t,"prob_blur_axis",oo,"blur_axis",["read-only-storage","storage","read-only-storage","uniform"]),Gt(t,"prob_blur_z_gate",oo,"blur_z_gate",["read-only-storage","storage","read-only-storage","uniform"]),Gt(t,"transpose_f32",Xs,"main",["read-only-storage","storage"])]);if($)return null;const Z=GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST,be=144,V=h(be,Z),oe=h(be,Z),Pe=h(be,Z),N=K=>({buffer:K,offset:0,size:o}),D=P(F.bgl,[N(A.pass0HoldBuf),N(A.y0),N(A.y1)]),J=P(F.bgl,[N(r),N(A.b),N(A.sup)]),se=[A.y0,A.y1,A.b].map(K=>({buf:K,bgBlurX:P(H.bgl,[N(K),N(r),N(A.sup),V]),bgBlurY:P(H.bgl,[N(r),N(K),N(A.sup),oe]),bgBlurZ:P(X.bgl,[N(K),N(r),N(A.sup),Pe]),bgTranspose:P(I.bgl,[N(r),N(K)])}));return{pUnpack:F.pipe,pBlurAxis:H.pipe,pBlurZGate:X.pipe,pTransposeF32:I.pipe,bgUnpack0:D,bgUnpack1:J,tissues:se,uboX:V,uboY:oe,uboZ:Pe,uboScratch:new ArrayBuffer(be),lastBlurKey:null}}).catch(F=>{throw k=null,F})),k}function R(){m?S&&Y().catch(()=>{}):(L().catch(()=>{}),z().catch(()=>{}))}function Q(){$=!0}function j(V){return ce(this,arguments,function*({volume:F,ioOpts:H,useCone:X,padInputHost:I,headRowHost:Z,hasF16Flag:be}){var Pe;if(H!=null&&H.gpuNativeInput){const N=(Pe=H.normOffset)!=null?Pe:0,D=H.normRange||1,J=F instanceof Uint8Array||F instanceof Uint8ClampedArray,se=o>=n*4||i.size>=n*4;if(J){const ze=so(F,Z,M,N,X),E=yield L();for(let le=0;le<256;le++)E.lutF32[le]=le===N?0:(le-N)/D;return t.queue.writeBuffer(E.ubo,0,E.lutF32),t.queue.writeBuffer(r,0,F,0,n),{info:ze,runPrePasses(le,_e){(!x||w)&&(le.clearBuffer(s),x=!0,w=!1);const Me=le.beginComputePass();if(Me.setPipeline(E.pipe),Me.setBindGroup(0,E.bg),Me.dispatchWorkgroups(8,U,8),Me.end(),_e.push("preprocess"),v){const ne=le.beginComputePass();ne.setPipeline(c.pipe),ne.setBindGroup(0,l),ne.dispatchWorkgroups(1,U,U),ne.end(),_e.push("preprocess"),v=!1}}}}if(se){const ze=so(F,Z,M,N,X),E=yield W(),le=!(o>=n*4),_e=le?i:r,Me=le?E.bgAct0:E.bgLabels,ne=F instanceof Float32Array?F:Float32Array.from(F);return E.f32Tmp[0]=N,E.f32Tmp[1]=D,E.f32Tmp[2]=0,E.f32Tmp[3]=0,t.queue.writeBuffer(E.ubo,0,E.f32Tmp),t.queue.writeBuffer(_e,0,ne,0,n),{info:ze,runPrePasses(Be,je){(!x||w)&&(Be.clearBuffer(s),x=!0,w=!1);const We=Be.beginComputePass();if(We.setPipeline(E.pipe),We.setBindGroup(0,Me),We.dispatchWorkgroups(8,U,8),We.end(),je.push("preprocess"),v||le){const Ye=Be.beginComputePass();Ye.setPipeline(c.pipe),Ye.setBindGroup(0,l),Ye.dispatchWorkgroups(1,U,U),Ye.end(),je.push("preprocess"),v=!1}}}}const K=new Float32Array(n);for(let ze=0;ze<n;ze++){const E=F[ze];K[ze]=E===N?0:(E-N)/D}const ie=nn(K,[U,U,U],[2,1,0]),xe=ro(ie,I,Z,be,X);return t.queue.writeBuffer(s,0,I),x=!0,w=!1,{info:xe,runPrePasses(ze,E){if(v){const le=ze.beginComputePass();le.setPipeline(c.pipe),le.setBindGroup(0,l),le.dispatchWorkgroups(1,U,U),le.end(),E.push("preprocess"),v=!1}}}}const oe=ro(F,I,Z,be,X);return t.queue.writeBuffer(s,0,I),x=!0,w=!1,{info:oe,runPrePasses(N,D){if(v){const J=N.beginComputePass();J.setPipeline(c.pipe),J.setBindGroup(0,l),J.dispatchWorkgroups(1,U,U),J.end(),D.push("preprocess"),v=!1}}}})}function G(be){return ce(this,arguments,function*({enc:F,schedule:H,passCategories:X,u4Tmp:I,ioOpts:Z}){const V=H.clsSkipped?H.clsStrips.length:U;if(!m){I[0]=u.clsVec4Off,I[1]=u.clsBiasOff,I[2]=H.clsSkipped?0:1,I[3]=0,t.queue.writeBuffer(d,0,I);{const _e=F.beginComputePass();_e.setPipeline(f.pipe),_e.setBindGroup(0,g),V>0&&_e.dispatchWorkgroups(1,H.clsSkipped?1:64,V),_e.end(),X.push("classify")}if(Z!=null&&Z.gpuNativeOutput){const _e=yield z(),Me=F.beginComputePass();Me.setPipeline(_e.pipe),Me.setBindGroup(0,_e.bg),Me.dispatchWorkgroups(8,U,8),Me.end(),X.push("postprocess"),w=!0,F.copyBufferToBuffer(s,0,a,0,n),t.queue.submit([F.finish()]),yield a.mapAsync(GPUMapMode.READ);const ne=new Uint8Array(a.getMappedRange()).slice();return a.unmap(),[ne]}F.copyBufferToBuffer(r,0,a,0,o),t.queue.submit([F.finish()]),yield a.mapAsync(GPUMapMode.READ);const E=new Uint8Array(a.getMappedRange()),le=new Float32Array(n);for(let _e=0;_e<n;_e++)le[_e]=E[_e];return a.unmap(),[le]}if(S){const E=yield Y();I[0]=u.clsVec4Off,I[1]=u.clsBiasOff,I[2]=H.clsSkipped?0:1,I[3]=0,t.queue.writeBuffer(d,0,I),I[3]=1,t.queue.writeBuffer(A.clsUbo1,0,I);{const ke=F.beginComputePass();ke.setPipeline(f.pipe),ke.setBindGroup(0,g),V>0&&ke.dispatchWorkgroups(1,H.clsSkipped?1:64,V),ke.end(),X.push("classify")}F.copyBufferToBuffer(r,0,A.pass0HoldBuf,0,o),H.clsSkipped&&F.clearBuffer(r,0,o);{const ke=F.beginComputePass();ke.setPipeline(f.pipe),ke.setBindGroup(0,A.bgCls1),V>0&&ke.dispatchWorkgroups(1,H.clsSkipped?1:64,V),ke.end(),X.push("classify")}v=!0;const le=`${m.sigma}|${m.supportPower}`,_e=m.sigma>0,Me=_e?Math.max(1,Math.round(3*m.sigma)):0;if(E.lastBlurKey!==le){const ke=new Uint32Array(E.uboScratch),Ne=new Float32Array(E.uboScratch);Ne.fill(0);let Re=1;if(_e){Re=0;for(let Qe=-Me;Qe<=Me;Qe++){const at=Math.exp(-.5*Qe*Qe/(m.sigma*m.sigma));Ne[4+Qe+Me]=at,Re+=at}}else Ne[4]=1;ke[1]=Me,Ne[2]=Re,ke[0]=0,Ne[3]=1,t.queue.writeBuffer(E.uboX,0,E.uboScratch),ke[0]=1,t.queue.writeBuffer(E.uboY,0,E.uboScratch),ke[0]=2,Ne[3]=m.supportPower,t.queue.writeBuffer(E.uboZ,0,E.uboScratch),E.lastBlurKey=le}{const ke=F.beginComputePass();ke.setPipeline(E.pUnpack),ke.setBindGroup(0,E.bgUnpack0),ke.dispatchWorkgroups(256,256,1),ke.end(),X.push("postprocess");const Ne=F.beginComputePass();Ne.setPipeline(E.pUnpack),Ne.setBindGroup(0,E.bgUnpack1),Ne.dispatchWorkgroups(256,256,1),Ne.end(),X.push("postprocess")}const ne=!!(Z!=null&&Z.gpuNativeOutput);for(let ke=0;ke<3;ke++){const Ne=E.tissues[ke];if(_e){const Qe=F.beginComputePass();Qe.setPipeline(E.pBlurAxis),Qe.setBindGroup(0,Ne.bgBlurX),Qe.dispatchWorkgroups(4,64,U),Qe.end(),X.push("postprocess");const at=F.beginComputePass();at.setPipeline(E.pBlurAxis),at.setBindGroup(0,Ne.bgBlurY),at.dispatchWorkgroups(4,64,U),at.end(),X.push("postprocess")}const Re=F.beginComputePass();if(Re.setPipeline(E.pBlurZGate),Re.setBindGroup(0,Ne.bgBlurZ),Re.dispatchWorkgroups(4,64,U),Re.end(),X.push("postprocess"),ne){const Qe=F.beginComputePass();Qe.setPipeline(E.pTransposeF32),Qe.setBindGroup(0,Ne.bgTranspose),Qe.dispatchWorkgroups(8,U,8),Qe.end(),X.push("postprocess")}else ke<2&&F.copyBufferToBuffer(r,0,Ne.buf,0,o)}const Be=ne?[A.y0,A.y1,A.b]:[A.y0,A.y1,r];F.copyBufferToBuffer(Be[0],0,a,0,o),t.queue.submit([F.finish()]),yield a.mapAsync(GPUMapMode.READ);const je=new Float32Array(a.getMappedRange()).slice();a.unmap();const We=ke=>ce(null,null,function*(){const Ne=t.createCommandEncoder();Ne.copyBufferToBuffer(ke,0,a,0,o),t.queue.submit([Ne.finish()]),yield a.mapAsync(GPUMapMode.READ);const Re=new Float32Array(a.getMappedRange()).slice();return a.unmap(),Re}),Ye=yield We(Be[1]),Ke=yield We(Be[2]);return[je,Ye,Ke]}I[0]=u.clsVec4Off,I[1]=u.clsBiasOff,I[2]=H.clsSkipped?0:1,I[3]=0,t.queue.writeBuffer(d,0,I);{const E=F.beginComputePass();E.setPipeline(f.pipe),E.setBindGroup(0,g),V>0&&E.dispatchWorkgroups(1,H.clsSkipped?1:64,V),E.end(),X.push("classify"),F.copyBufferToBuffer(r,0,a,0,o)}t.queue.submit([F.finish()]),yield a.mapAsync(GPUMapMode.READ);const oe=1/65535,Pe=new Uint16Array(a.getMappedRange()),N=new Float32Array(n),D=new Float32Array(n);for(let E=0;E<n;E++)N[E]=Pe[E*2]*oe,D[E]=Pe[E*2+1]*oe;a.unmap(),I[3]=1,t.queue.writeBuffer(d,0,I);const J=t.createCommandEncoder();H.clsSkipped&&J.clearBuffer(r,0,o);const se=J.beginComputePass();se.setPipeline(f.pipe),se.setBindGroup(0,g),V>0&&se.dispatchWorkgroups(1,H.clsSkipped?1:64,V),se.end(),X.push("classify"),J.copyBufferToBuffer(r,0,a,0,o),t.queue.submit([J.finish()]),yield a.mapAsync(GPUMapMode.READ);const K=new Uint16Array(a.getMappedRange()),ie=new Float32Array(n),xe=new Float32Array(n);for(let E=0;E<n;E++)ie[E]=K[E*2]*oe,xe[E]=K[E*2+1]*oe;a.unmap();const ze=Os([N,D,ie],xe,[U,U,U],p);return Z!=null&&Z.gpuNativeOutput?ze.map(E=>nn(E,[U,U,U],[2,1,0])):ze})}return{prepareInput:j,finishAndReadback:G,warmupIoPipelines:R,dispose:Q}}function Fo(t){const{cs:e,chan:n,nclass:o,clsK4:s,dilations:i,activation:r,norm:a,hasF16:c,hasSubgroups32:l,splitHalves:f,probCfg:g}=t,d=e/4,u=f?e/2:e,p=u*rt,m=u*pt,S=9*e*3*d,A=S,_=S+d,h=c&&d%2===0&&_*8<=65536,v=zo(r),x=c?`enable f16;
`:"",w=l?`enable subgroups;
`:"",$=c?"f16":"f32",M=c?"h":"f",b=`vec4<${$}>`,B=c?256:255,T=({cStart:j,cEnd:G,hrExpr:F,yRowExpr:H,isPermuted:X,momBinding:I,alsoWriteMomMain:Z=!1,writeY8Expr:be="true"})=>{const V=X?".xzyw":"",oe=(N,D)=>f&&N>=u?`y8_1[${H} + ${(N-u)*pt}u] = ${D};`:`y8_0[${H} + ${N*pt}u] = ${D};`;if(c&&l)return yt(G-j,N=>{const D=j+N;return`  {
    let f = vec4<f32>(a_${D}${V});
    let ls = subgroupAdd(f.x + f.y + f.z + f.w);
    let lq = subgroupAdd(dot(f, f));
    let lmn = subgroupMin(min(min(f.x, f.y), min(f.z, f.w)));
    let lmx = subgroupMax(max(max(f.x, f.y), max(f.z, f.w)));
    let sp = lmx - lmn;
    let inv = select(0.0, 1.0 / sp, sp > 1e-7);
    if (${be}) {
      ${oe(D,"pack4x8unorm((f - vec4<f32>(lmn)) * inv)")}
    }
    if (slane == 0u) {
      let mv = vec4<f32>(ls, lq, lmn, sp);
      ${I}[(${F}) * ${e}u + ${D}u] = mv;
      ${Z?`mom_main[(row_idx * 2u + sg) * ${e}u + ${D}u] = mv;`:""}
    }
  }
`});let Pe="";for(let N=j;N<G;N+=2){const D=N,J=N+1;Pe+=`  {
    let f0 = vec4<f32>(a_${D}${V});
    let f1 = vec4<f32>(a_${J}${V});
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
        ${I}[(${F}) * ${e}u + ${D}u] = mv0;
        ${Z?`mom_main[(row_idx * 2u + sg) * ${e}u + ${D}u] = mv0;`:""}
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
        ${I}[(${F}) * ${e}u + ${J}u] = mv1;
        ${Z?`mom_main[(row_idx * 2u + sg) * ${e}u + ${J}u] = mv1;`:""}
      }
    }
    workgroupBarrier();
    let p_mn0  = sh_res_mn[hslot];
    let p_inv0 = sh_res_inv[hslot];
    let p_mn1  = sh_res_mn[hslot + 1u];
    let p_inv1 = sh_res_inv[hslot + 1u];
    if (${be}) {
      ${oe(D,"pack4x8unorm((f0 - vec4<f32>(p_mn0)) * p_inv0)")}
      ${oe(J,"pack4x8unorm((f1 - vec4<f32>(p_mn1)) * p_inv1)")}
    }
    workgroupBarrier();
  }
`}return Pe},k=c&&l?"":`var<workgroup> sh_s       : array<vec2<f32>, 256>;
var<workgroup> sh_q       : array<vec2<f32>, 256>;
var<workgroup> sh_mn      : array<vec2<f32>, 256>;
var<workgroup> sh_mx      : array<vec2<f32>, 256>;
var<workgroup> sh_res_mn  : array<f32, 16>;
var<workgroup> sh_res_inv : array<f32, 16>;
`,P=()=>`
@group(0) @binding(0) var<storage, read_write> act0 : array<u32>;
@group(0) @binding(1) var<storage, read_write> act1 : array<u32>;
@compute @workgroup_size(${rt}, 1, 1)
fn main(@builtin(local_invocation_id) lid : vec3<u32>,
        @builtin(workgroup_id) wid : vec3<u32>) {
  let row_base = (wid.z * 256u + wid.y) * ${p}u + lid.x;
  let val = ${v.uZeroWord}u;
  for (var c : u32 = 0u; c < ${u}u; c = c + 1u) {
    let idx = row_base + c * ${rt}u;
    act0[idx] = val;
    ${f?"act1[idx] = val;":""}
  }
}`,L=i[0];return{initActWgsl:P,conv0Wgsl:()=>{const j=!c&&f,G=(be,V)=>{const oe=be/4,Pe=V/4;return yt(Pe-oe,N=>{const D=oe+N,J=D*4;return`          {
            let w0 = w16_4[wb + ${D}u];
            let w1 = w16_4[wb + ${d+D}u];
            let w2 = w16_4[wb + ${2*d+D}u];
            a_${J}     = fma(vn, ${b}(w0.x), fma(vc, ${b}(w1.x), fma(vp, ${b}(w2.x), a_${J})));
            a_${J+1} = fma(vn, ${b}(w0.y), fma(vc, ${b}(w1.y), fma(vp, ${b}(w2.y), a_${J+1})));
            a_${J+2} = fma(vn, ${b}(w0.z), fma(vc, ${b}(w1.z), fma(vp, ${b}(w2.z), a_${J+2})));
            a_${J+3} = fma(vn, ${b}(w0.w), fma(vc, ${b}(w1.w), fma(vp, ${b}(w2.w), a_${J+3})));
          }
`})},F=Math.floor(L/4),H=L%4;let X="";H===0?X=`
        let vn = inp_4[base - ${F}u];
        let vc = inp_4[base];
        let vp = inp_4[base + ${F}u];`:F===0&&H===1?X=`
        let vL = inp_4[base - 1u];
        let vc = inp_4[base];
        let vR = inp_4[base + 1u];
        let vn = ${b}(vL.w, vc.xyz);
        let vp = ${b}(vc.yzw, vR.x);`:H===1?X=`
        let vL = inp_4[base - ${F+1}u];
        let vN = inp_4[base - ${F}u];
        let vc = inp_4[base];
        let vP = inp_4[base + ${F}u];
        let vR = inp_4[base + ${F+1}u];
        let vn = ${b}(vL.w, vN.xyz);
        let vp = ${b}(vP.yzw, vR.x);`:H===2?X=`
        let vL = inp_4[base - ${F+1}u];
        let vN = ${F===0?"inp_4[base]":`inp_4[base - ${F}u]`};
        let vc = ${F===0?"vN":"inp_4[base]"};
        let vP = ${F===0?"vN":`inp_4[base + ${F}u]`};
        let vR = inp_4[base + ${F+1}u];
        let vn = ${b}(vL.zw, vN.xy);
        let vp = ${b}(vP.zw, vR.xy);`:X=`
        let vL = inp_4[base - ${F+1}u];
        let vN = ${F===0?"inp_4[base]":`inp_4[base - ${F}u]`};
        let vc = ${F===0?"vN":"inp_4[base]"};
        let vP = ${F===0?"vN":`inp_4[base + ${F}u]`};
        let vR = inp_4[base + ${F+1}u];
        let vn = ${b}(vL.yzw, vN.x);
        let vp = ${b}(vP.w, vR.xyz);`;const I=(be,V,oe,Pe)=>{const N=yt(oe-V,K=>{const ie=V+K;return a==="none"?`  var a_${ie} = ${b}(${$}(qmeta[${3*e+ie}u]));
`:`  var a_${ie} = ${b}(0.0${M});
`}),D=Pe?`  let y = i32(p0.bg_y0 + lid.y);
  let z = i32(p0.bg_z0);`:`  var y : i32;
  var z : i32;
  if (p0.is_full != 0u) {
    y = i32(wid.y * 4u + lid.y);
    z = i32(wid.z);
  } else {
    let pk = strips0[wid.z];
    y = i32((pk & 255u) * 4u + lid.y);
    z = i32(pk >> 8u);
  }`,J=Pe?"lid.y * 2u + sg":"row_idx * 2u + sg",se=Pe?"mom_ext":"mom_main";return`
@compute @workgroup_size(64, 4, 1)
fn ${be}(@builtin(local_invocation_id) lid : vec3<u32>,
             @builtin(workgroup_id) wid : vec3<u32>) {
  let sg = lid.x >> 5u;
  let slane = lid.x & 31u;
${c&&l?"":`  let hbase = (lid.y * 2u + sg) * 32u;
  let tid = hbase + slane;
  let hslot = (lid.y * 2u + sg) * 2u;
`}
  let x_pad = lid.x + ${Ct}u;
${D}
${N}
  var tap_yz : u32 = 0u;
  for (var dz : i32 = -1; dz <= 1; dz = dz + 1) {
    let sz = z + dz * ${L};
    for (var dy : i32 = -1; dy <= 1; dy = dy + 1) {
      let sy = y + dy * ${L};
      if (sz >= 0 && sz < 256 && sy >= 0 && sy < 256) {
        let base = (u32(sz) * 256u + u32(sy)) * ${rt}u + x_pad;
${X}
        let wb = tap_yz * ${3*d}u;
${G(V,oe)}
      }
      tap_yz = tap_yz + 1u;
    }
  }
  let row_idx = u32(z) * 256u + u32(y);
  let y_row_base = row_idx * ${m}u + lid.x;
${T({cStart:V,cEnd:oe,hrExpr:J,yRowExpr:"y_row_base",isPermuted:!1,momBinding:se})}}`},Z=j?I("main_lo",0,u,!1)+I("main_hi",u,e,!1)+I("main_bg_lo",0,u,!0)+I("main_bg_hi",u,e,!0):I("main",0,e,!1)+I("main_bg",0,e,!0);return`${x}${w}
struct Params0 {
  is_full : u32,
  bg_y0 : u32,
  bg_z0 : u32,
  pad0 : u32,
};
@group(0) @binding(0) var<storage, read> inp_4 : array<${b}>;
@group(0) @binding(1) var<storage, read_write> y8_0 : array<u32>;
@group(0) @binding(2) var<storage, read_write> y8_1 : array<u32>;
@group(0) @binding(3) var<storage, read> w16_4 : array<${b}>;
@group(0) @binding(4) var<storage, read> qmeta : array<f32>;
@group(0) @binding(5) var<storage, read_write> mom_main : array<vec4<f32>>;
@group(0) @binding(6) var<storage, read_write> mom_ext : array<vec4<f32>>;
@group(0) @binding(7) var<storage, read> strips0 : array<u32>;
@group(0) @binding(8) var<uniform> p0 : Params0;
${k}${Z}`},prepWgsl:()=>`${x}
${sn(r)}
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
@group(0) @binding(0) var<storage, read> w16_4 : array<${b}>;
@group(0) @binding(1) var<storage, read> qmeta : array<f32>;
@group(0) @binding(2) var<storage, read_write> mom_main : array<vec4<f32>>;
@group(0) @binding(3) var<storage, read_write> mom_ext : array<vec4<f32>>;
@group(0) @binding(4) var<storage, read_write> mom_stats : array<vec4<f32>>;
@group(0) @binding(5) var<storage, read_write> w_eff : array<${b}>;
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
    for (var hr : u32 = lid; hr < ${dn}u; hr = hr + 256u) {
      let v = mom_main[hr * ${e}u + c];
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
        let v = mom_main[(base_hr + h) * ${e}u + c];
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
        let v = mom_ext[e * ${e}u + c];
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
    let beta  = qmeta[mbase + ${e}u + c];
    let eps_base = qmeta[mbase + ${2*e}u + c];
    let q_prev = select(mom_stats[${e*2}u].x, 1.0, pp.is_first != 0u);
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
    q_ref = max(q_ref, ${B.toFixed(1)} * qs);
  }
  ${a==="none"?"q_ref = 1.0;":""}
  if (lid == 0u) {
    mom_stats[${e*2}u] = vec4<f32>(q_ref, 0.0, 0.0, 0.0);
  }
  let scale_num = ${B.toFixed(1)} / q_ref;
  for (var idx : u32 = lid; idx < ${S}u; idx = idx + 256u) {
    let ic = (idx / ${3*d}u) % ${e}u;
    let qs = mom_stats[ic * 2u].z;
    w_eff[idx] = w16_4[pp.next_w_vec4_off + idx] * ${$}(qs * scale_num);
  }
  if (lid < ${d}u) {
    ${a==="none"?`
    let mb = pp.next_meta_off + ${3*e}u + lid * 4u;
    w_eff[${A}u + lid] = ${b}(${$}(qmeta[mb]), ${$}(qmeta[mb + 1u]), ${$}(qmeta[mb + 2u]), ${$}(qmeta[mb + 3u]));
    `:`
    w_eff[${A}u + lid] = ${b}(0.0${M});
    `}
  }
}`,normWgsl:()=>`${sn(r)}
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
  let x_pad = x4 + ${Ct}u;
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
  let y_base = row_idx * ${m}u + x4;
  let a_base = row_idx * ${p}u + x_pad;
  let mom_base = hr * ${e}u;

  for (var c : u32 = 0u; c < ${u}u; c = c + 1u) {
    let inv_qs = mom_stats[c * 2u].w;
    let st = mom_stats[c * 2u + 1u];
    let rm = mom_main[mom_base + c];
    let yv = unpack4x8unorm(y8_0[y_base + c * ${pt}u]) * rm.w + vec4<f32>(rm.z);
    let a = vec4<f32>(
      act(yv.x * st.x + st.y),
      act(yv.y * st.x + st.y),
      act(yv.z * st.x + st.y),
      act(yv.w * st.x + st.y)
    );
    act8_0[a_base + c * ${rt}u] = pack4x8unorm((a * inv_qs + vec4<f32>(${v.zeroBin.toFixed(1)})) * (1.0 / 255.0));
  }
  ${f?`
  for (var c : u32 = 0u; c < ${u}u; c = c + 1u) {
    let cg = ${u}u + c;
    let inv_qs = mom_stats[cg * 2u].w;
    let st = mom_stats[cg * 2u + 1u];
    let rm = mom_main[mom_base + cg];
    let yv = unpack4x8unorm(y8_1[y_base + c * ${pt}u]) * rm.w + vec4<f32>(rm.z);
    let a = vec4<f32>(
      act(yv.x * st.x + st.y),
      act(yv.y * st.x + st.y),
      act(yv.z * st.x + st.y),
      act(yv.w * st.x + st.y)
    );
    act8_1[a_base + c * ${rt}u] = pack4x8unorm((a * inv_qs + vec4<f32>(${v.zeroBin.toFixed(1)})) * (1.0 / 255.0));
  }`:""}
}

@compute @workgroup_size(64, 4, 1)
fn norm_halo_fill(@builtin(local_invocation_id) lid : vec3<u32>,
                  @builtin(workgroup_id) wid : vec3<u32>) {
  let idx = wid.y * 4u + lid.y;
  if (idx >= np.n_halo) { return; }
  let x4 = lid.x;
  let sg = x4 >> 5u;
  let x_pad = x4 + ${Ct}u;
  let y_base = np.bg_row * ${m}u + x4;
  let mom_base = sg * ${e}u;
  let dst_row = norm_aux[np.halo_off + idx];
  let a_base = dst_row * ${p}u + x_pad;

  for (var c : u32 = 0u; c < ${u}u; c = c + 1u) {
    let inv_qs = mom_stats[c * 2u].w;
    let st = mom_stats[c * 2u + 1u];
    let rm = mom_ext[mom_base + c];
    let yv = unpack4x8unorm(y8_0[y_base + c * ${pt}u]) * rm.w + vec4<f32>(rm.z);
    let a = vec4<f32>(
      act(yv.x * st.x + st.y),
      act(yv.y * st.x + st.y),
      act(yv.z * st.x + st.y),
      act(yv.w * st.x + st.y)
    );
    act8_0[a_base + c * ${rt}u] = pack4x8unorm((a * inv_qs + vec4<f32>(${v.zeroBin.toFixed(1)})) * (1.0 / 255.0));
  }
  ${f?`
  for (var c : u32 = 0u; c < ${u}u; c = c + 1u) {
    let cg = ${u}u + c;
    let inv_qs = mom_stats[cg * 2u].w;
    let st = mom_stats[cg * 2u + 1u];
    let rm = mom_ext[mom_base + cg];
    let yv = unpack4x8unorm(y8_1[y_base + c * ${pt}u]) * rm.w + vec4<f32>(rm.z);
    let a = vec4<f32>(
      act(yv.x * st.x + st.y),
      act(yv.y * st.x + st.y),
      act(yv.z * st.x + st.y),
      act(yv.w * st.x + st.y)
    );
    act8_1[a_base + c * ${rt}u] = pack4x8unorm((a * inv_qs + vec4<f32>(${v.zeroBin.toFixed(1)})) * (1.0 / 255.0));
  }`:""}
}`,getConvWgsl:j=>{const G=Math.floor(j/4),H=j%4*8,X=!c&&f,I=(N,D)=>c?`
          let ${N} = vec4<f16>(vec2<f16>(unpack2x16float(((${D} & 0x00FF00FFu) << 2u) | 0x3C003C00u)), vec2<f16>(unpack2x16float(((${D} >> 6u) & 0x03FC03FCu) | 0x3C003C00u))) - vec4<f16>(${v.sterbenzSub});`:`
          let ${N} = unpack4x8unorm(${D}) - vec4<f32>(${v.uZeroFloat});`,Z=N=>{if(H===0)return`
          let u_neg = ${N}[base - ${G}u];
          let uC    = ${N}[base];
          let u_pos = ${N}[base + ${G}u];`+I("vn","u_neg")+I("vc","uC")+I("vp","u_pos");const D=32-H;return G===0?`
          let uL = ${N}[base - 1u];
          let uC = ${N}[base];
          let uR = ${N}[base + 1u];
          let u_neg = (uL >> ${D}u) | (uC << ${H}u);
          let u_pos = (uC >> ${H}u) | (uR << ${D}u);`+I("vn","u_neg")+I("vc","uC")+I("vp","u_pos"):`
          let uL = ${N}[base - ${G+1}u];
          let uN = ${N}[base - ${G}u];
          let uC = ${N}[base];
          let uP = ${N}[base + ${G}u];
          let uR = ${N}[base + ${G+1}u];
          let u_neg = (uL >> ${D}u) | (uN << ${H}u);
          let u_pos = (uP >> ${H}u) | (uR << ${D}u);`+I("vn","u_neg")+I("vc","uC")+I("vp","u_pos")},be=(N,D)=>{const J=N/4,se=D/4;if(h){const K=d/2,ie=d;let xe="";for(let ze=J;ze<se;ze+=2){const E=ze*4,le=ze/2;xe+=`          {
            let wp0 = w_eff_u[wbu + ${le}u];
            let wp1 = w_eff_u[wbu + ${K+le}u];
            let wp2 = w_eff_u[wbu + ${ie+le}u];
            let w0a = wp0[0];
            let w0b = wp0[1];
            let w1a = wp1[0];
            let w1b = wp1[1];
            let w2a = wp2[0];
            let w2b = wp2[1];
            a_${E}     = fma(vn, vec4<f16>(w0a.x), fma(vc, vec4<f16>(w1a.x), fma(vp, vec4<f16>(w2a.x), a_${E})));
            a_${E+1} = fma(vn, vec4<f16>(w0a.y), fma(vc, vec4<f16>(w1a.y), fma(vp, vec4<f16>(w2a.y), a_${E+1})));
            a_${E+2} = fma(vn, vec4<f16>(w0a.z), fma(vc, vec4<f16>(w1a.z), fma(vp, vec4<f16>(w2a.z), a_${E+2})));
            a_${E+3} = fma(vn, vec4<f16>(w0a.w), fma(vc, vec4<f16>(w1a.w), fma(vp, vec4<f16>(w2a.w), a_${E+3})));
            a_${E+4} = fma(vn, vec4<f16>(w0b.x), fma(vc, vec4<f16>(w1b.x), fma(vp, vec4<f16>(w2b.x), a_${E+4})));
            a_${E+5} = fma(vn, vec4<f16>(w0b.y), fma(vc, vec4<f16>(w1b.y), fma(vp, vec4<f16>(w2b.y), a_${E+5})));
            a_${E+6} = fma(vn, vec4<f16>(w0b.z), fma(vc, vec4<f16>(w1b.z), fma(vp, vec4<f16>(w2b.z), a_${E+6})));
            a_${E+7} = fma(vn, vec4<f16>(w0b.w), fma(vc, vec4<f16>(w1b.w), fma(vp, vec4<f16>(w2b.w), a_${E+7})));
          }
`}return xe}return yt(se-J,K=>{const ie=J+K,xe=ie*4;return`          {
            let w0 = w_eff[wb + ${ie}u];
            let w1 = w_eff[wb + ${d+ie}u];
            let w2 = w_eff[wb + ${2*d+ie}u];
            a_${xe}     = fma(vn, ${b}(w0.x), fma(vc, ${b}(w1.x), fma(vp, ${b}(w2.x), a_${xe})));
            a_${xe+1} = fma(vn, ${b}(w0.y), fma(vc, ${b}(w1.y), fma(vp, ${b}(w2.y), a_${xe+1})));
            a_${xe+2} = fma(vn, ${b}(w0.z), fma(vc, ${b}(w1.z), fma(vp, ${b}(w2.z), a_${xe+2})));
            a_${xe+3} = fma(vn, ${b}(w0.w), fma(vc, ${b}(w1.w), fma(vp, ${b}(w2.w), a_${xe+3})));
          }
`})},V=(N,D,J,se)=>{const K=yt(J-D,ne=>{const Be=D+ne;if(a==="none"){const je=Be>>>2,We=["x","y","z","w"][Be&3];if(h){const Ye=A+je>>>1,Ke=A+je&1;return`  var a_${Be} = ${b}(w_eff_u[${Ye}u][${Ke}].${We});
`}return`  var a_${Be} = ${b}(w_eff[${A+je}u].${We});
`}return`  var a_${Be} = ${b}(0.0${M});
`}),ie=se?`
  let pk = strips[cp.ext_off + wid.z];
  let y = i32((pk & 255u) * 4u + lid.y);
  let z = i32(pk >> 8u);`:`
  var y : i32;
  var z : i32;
  if (cp.is_full != 0u) {
    y = i32(wid.y * 4u + lid.y);
    z = i32(wid.z);
  } else {
    let pk = strips[wid.z];
    y = i32((pk & 255u) * 4u + lid.y);
    z = i32(pk >> 8u);
  }`,xe=se?"wid.z * 8u + lid.y * 2u + sg":"row_idx * 2u + sg",ze=se?"mom_ext":"mom_main",E=se?"(cp.write_ext_y8 != 0u)":"true",le=u<=8?`(${u}u + cp.pad0)`:`${u}u`,_e=h?`        let wbu_tap = tap_yz * ${e*3*d/2}u;
        for (var ic : u32 = 0u; ic < ${le}; ic = ic + 1u) {
          let base = row_off + ic * ${rt}u;
${Z("act8_0")}
          let wbu = wbu_tap + ic * ${3*d/2}u;
${be(D,J)}
        }`:`        let wb_tap = tap_yz * ${e*3*d}u;
        for (var ic : u32 = 0u; ic < ${le}; ic = ic + 1u) {
          let base = row_off + ic * ${rt}u;
${Z("act8_0")}
          let wb = wb_tap + ic * ${3*d}u;
${be(D,J)}
        }`,Me=h?`        for (var ic : u32 = 0u; ic < ${le}; ic = ic + 1u) {
          let base = row_off + ic * ${rt}u;
${Z("act8_1")}
          let wbu = wbu_tap + (${u}u + ic) * ${3*d/2}u;
${be(D,J)}
        }`:`        for (var ic : u32 = 0u; ic < ${le}; ic = ic + 1u) {
          let base = row_off + ic * ${rt}u;
${Z("act8_1")}
          let wb = wb_tap + (${u}u + ic) * ${3*d}u;
${be(D,J)}
        }`;return`
@compute @workgroup_size(64, 4, 1)
fn ${N}(@builtin(local_invocation_id) lid : vec3<u32>,
             @builtin(workgroup_id) wid : vec3<u32>) {
  let x4 = lid.x;
  let sg = x4 >> 5u;
  let slane = x4 & 31u;
${c&&l?"":`  let hbase = (lid.y * 2u + sg) * 32u;
  let tid = hbase + slane;
  let hslot = (lid.y * 2u + sg) * 2u;
`}
  let x_pad = x4 + ${Ct}u;
${ie}
${K}
  var tap_yz : u32 = 0u;
  for (var dz : i32 = -1; dz <= 1; dz = dz + 1) {
    let sz = z + dz * ${j};
    for (var dy : i32 = -1; dy <= 1; dy = dy + 1) {
      let sy = y + dy * ${j};
      if (sz >= 0 && sz < 256 && sy >= 0 && sy < 256) {
        let row_off = (u32(sz) * 256u + u32(sy)) * ${p}u + x_pad;
${_e}
        ${f?Me:""}
      }
      tap_yz = tap_yz + 1u;
    }
  }
  let row_idx = u32(z) * 256u + u32(y);
  let y_row_base = row_idx * ${m}u + x4;
${T({cStart:D,cEnd:J,hrExpr:xe,yRowExpr:"y_row_base",isPermuted:c,momBinding:ze,alsoWriteMomMain:se,writeY8Expr:E})}}`},oe=X?V("main_lo",0,u,!1)+V("main_hi",u,e,!1)+V("main_ext_lo",0,u,!0)+V("main_ext_hi",u,e,!0):V("main",0,e,!1)+V("main_ext",0,e,!0),Pe=h?`@group(0) @binding(6) var<uniform> w_eff_u : array<mat2x4<f16>, ${Math.ceil(_/2)}>;`:`@group(0) @binding(6) var<storage, read> w_eff : array<${b}>;`;return`${x}${w}
struct ConvParams {
  is_full : u32,
  ext_off : u32,
  write_ext_y8 : u32,
  pad0 : u32,
};
@group(0) @binding(0) var<storage, read> act8_0 : array<u32>;
@group(0) @binding(1) var<storage, read> act8_1 : array<u32>;
@group(0) @binding(2) var<storage, read_write> y8_0 : array<u32>;
@group(0) @binding(3) var<storage, read_write> y8_1 : array<u32>;
@group(0) @binding(4) var<storage, read_write> mom_main : array<vec4<f32>>;
@group(0) @binding(5) var<storage, read_write> mom_ext : array<vec4<f32>>;
${Pe}
@group(0) @binding(7) var<storage, read> strips : array<u32>;
@group(0) @binding(8) var<uniform> cp : ConvParams;
${k}${oe}`},clsWgsl:()=>`${x}
${sn(r)}
struct ClsParams {
  w_vec4_off : u32,
  bias_off : u32,
  is_full : u32,
  pad0 : u32,
};
@group(0) @binding(0) var<storage, read> y8_0 : array<u32>;
@group(0) @binding(1) var<storage, read> y8_1 : array<u32>;
@group(0) @binding(2) var<storage, read> w16_4 : array<${b}>;
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
  let y_base = row_idx * ${m}u + x4;
  let mom_base = hr * ${e}u;

  var feat : array<${b}, ${n}>;
  for (var c : u32 = 0u; c < ${n}u; c = c + 1u) {
    let st = mom_stats[c * 2u + 1u];
    let rm = mom_main[mom_base + c];
    ${f?`
    let in_hi = c >= ${u}u;
    let c_loc = select(c, c - ${u}u, in_hi);
    let idx4 = y_base + c_loc * ${pt}u;
    let q_word = select(y8_0[idx4], y8_1[idx4], in_hi);
    `:`
    let q_word = y8_0[y_base + c * ${pt}u];
    `}
    let yv = unpack4x8unorm(q_word) * rm.w + vec4<f32>(rm.z);
    let fv = vec4<f32>(
      act(yv.x * st.x + st.y),
      act(yv.y * st.x + st.y),
      act(yv.z * st.x + st.y),
      act(yv.w * st.x + st.y)
    );
    feat[c] = ${b}(fv);
  }

  let w_cls = cp.w_vec4_off;
  let m_cls = cp.bias_off;
${Bo({chan:n,clsK4:s,nclass:o,V4:b,suf:M,readBiasStmt:"",biasExpr:j=>`qmeta[m_cls + k_base + ${j}u]`,probCfg:g})}
}`,totalWEffVec4s:_,useUniformWeff:h,csHalf:u,halfPass0:!c&&f,halfPassConv:!c&&f}}function Uo(t){const{cs:e,chan:n,nclass:o,clsK4:s,dilations:i,activation:r,norm:a,hasF16:c,hasSubgroups32:l,numConvs:f,probCfg:g}=t,d=e/4,u=e/2,p=e/4,m=d*rt,S=16384,A=e*pt,h=e*2+4,v=h+dn*e,x=4*e,w=(f*x+s*4)/4,$=9*e*3*p,M=$,b=$+p,B=c&&p%2===0&&b*8<=65536,T=zo(r),k=c?`enable f16;
`:"",P=l?`enable subgroups;
`:"",L=c?"f16":"f32",W=c?"h":"f",z=`vec4<${L}>`,Y=c?256:255,R=c&&l?"":`var<workgroup> sh_s       : array<vec2<f32>, 256>;
var<workgroup> sh_q       : array<vec2<f32>, 256>;
var<workgroup> sh_mn      : array<vec2<f32>, 256>;
var<workgroup> sh_mx      : array<vec2<f32>, 256>;
var<workgroup> sh_res_mn  : array<f32, 16>;
var<workgroup> sh_res_inv : array<f32, 16>;
`,Q=({cStart:N,cEnd:D,hrExpr:J,storeMode:se,isPermuted:K,momOffExpr:ie,alsoWriteMomMain:xe=!1,writeY8Expr:ze="true"})=>{const E=K?".xzyw":"",le=(Me,ne)=>{if(se==="stage_bg")return`stage[s_bg_base + ${Me*pt}u] = ${ne};`;if(se==="stage")return`stage[s_row_base + ${Me*pt}u] = ${ne};`;const Be=Math.floor(Me/d),je=Me%d;return`if (use_act) { act8_${Be}[a_row_base + ${je*rt}u] = ${ne}; } else { stage[s_row_base + ${Me*pt}u] = ${ne}; }`};if(c&&l)return yt(D-N,Me=>{const ne=N+Me;return`  {
    let f = vec4<f32>(a_${ne}${E});
    let ls = subgroupAdd(f.x + f.y + f.z + f.w);
    let lq = subgroupAdd(dot(f, f));
    let lmn = subgroupMin(min(min(f.x, f.y), min(f.z, f.w)));
    let lmx = subgroupMax(max(max(f.x, f.y), max(f.z, f.w)));
    let sp = lmx - lmn;
    let inv = select(0.0, 1.0 / sp, sp > 1e-7);
    if (${ze}) {
      ${le(ne,"pack4x8unorm((f - vec4<f32>(lmn)) * inv)")}
    }
    if (slane == 0u) {
      let mv = vec4<f32>(ls, lq, lmn, sp);
      mom[${ie} + (${J}) * ${e}u + ${ne}u] = mv;
      ${xe?`mom[${h}u + (row_idx * 2u + sg) * ${e}u + ${ne}u] = mv;`:""}
    }
  }
`});let _e="";for(let Me=N;Me<D;Me+=2){const ne=Me,Be=Me+1;_e+=`  {
    let f0 = vec4<f32>(a_${ne}${E});
    let f1 = vec4<f32>(a_${Be}${E});
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
        mom[${ie} + (${J}) * ${e}u + ${ne}u] = mv0;
        ${xe?`mom[${h}u + (row_idx * 2u + sg) * ${e}u + ${ne}u] = mv0;`:""}
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
        mom[${ie} + (${J}) * ${e}u + ${Be}u] = mv1;
        ${xe?`mom[${h}u + (row_idx * 2u + sg) * ${e}u + ${Be}u] = mv1;`:""}
      }
    }
    workgroupBarrier();
    let p_mn0  = sh_res_mn[hslot];
    let p_inv0 = sh_res_inv[hslot];
    let p_mn1  = sh_res_mn[hslot + 1u];
    let p_inv1 = sh_res_inv[hslot + 1u];
    if (${ze}) {
      ${le(ne,"pack4x8unorm((f0 - vec4<f32>(p_mn0)) * p_inv0)")}
      ${le(Be,"pack4x8unorm((f1 - vec4<f32>(p_mn1)) * p_inv1)")}
    }
    workgroupBarrier();
  }
`}return _e},j=()=>`
@group(0) @binding(0) var<storage, read_write> act0 : array<u32>;
@group(0) @binding(1) var<storage, read_write> act1 : array<u32>;
@group(0) @binding(2) var<storage, read_write> act2 : array<u32>;
@group(0) @binding(3) var<storage, read_write> act3 : array<u32>;
@compute @workgroup_size(${rt}, 1, 1)
fn main(@builtin(local_invocation_id) lid : vec3<u32>,
        @builtin(workgroup_id) wid : vec3<u32>) {
  let row_base = (wid.z * 256u + wid.y) * ${m}u + lid.x;
  let val = ${T.uZeroWord}u;
  for (var c : u32 = 0u; c < ${d}u; c = c + 1u) {
    let idx = row_base + c * ${rt}u;
    act0[idx] = val;
    act1[idx] = val;
    act2[idx] = val;
    act3[idx] = val;
  }
}`,G=i[0],F=!c&&e>=16,H=()=>{const N=(xe,ze)=>{const E=xe/4,le=ze/4;return yt(le-E,_e=>{const Me=E+_e,ne=Me*4;return`          {
            let w0 = w16_4[wb + ${Me}u];
            let w1 = w16_4[wb + ${p+Me}u];
            let w2 = w16_4[wb + ${2*p+Me}u];
            a_${ne}     = fma(vn, ${z}(w0.x), fma(vc, ${z}(w1.x), fma(vp, ${z}(w2.x), a_${ne})));
            a_${ne+1} = fma(vn, ${z}(w0.y), fma(vc, ${z}(w1.y), fma(vp, ${z}(w2.y), a_${ne+1})));
            a_${ne+2} = fma(vn, ${z}(w0.z), fma(vc, ${z}(w1.z), fma(vp, ${z}(w2.z), a_${ne+2})));
            a_${ne+3} = fma(vn, ${z}(w0.w), fma(vc, ${z}(w1.w), fma(vp, ${z}(w2.w), a_${ne+3})));
          }
`})},D=Math.floor(G/4),J=G%4;let se="";J===0?se=`
        let vn = inp_4[base - ${D}u];
        let vc = inp_4[base];
        let vp = inp_4[base + ${D}u];`:D===0&&J===1?se=`
        let vL = inp_4[base - 1u];
        let vc = inp_4[base];
        let vR = inp_4[base + 1u];
        let vn = ${z}(vL.w, vc.xyz);
        let vp = ${z}(vc.yzw, vR.x);`:J===1?se=`
        let vL = inp_4[base - ${D+1}u];
        let vN = inp_4[base - ${D}u];
        let vc = inp_4[base];
        let vP = inp_4[base + ${D}u];
        let vR = inp_4[base + ${D+1}u];
        let vn = ${z}(vL.w, vN.xyz);
        let vp = ${z}(vP.yzw, vR.x);`:J===2?se=`
        let vL = inp_4[base - ${D+1}u];
        let vN = ${D===0?"inp_4[base]":`inp_4[base - ${D}u]`};
        let vc = ${D===0?"vN":"inp_4[base]"};
        let vP = ${D===0?"vN":`inp_4[base + ${D}u]`};
        let vR = inp_4[base + ${D+1}u];
        let vn = ${z}(vL.zw, vN.xy);
        let vp = ${z}(vP.zw, vR.xy);`:se=`
        let vL = inp_4[base - ${D+1}u];
        let vN = ${D===0?"inp_4[base]":`inp_4[base - ${D}u]`};
        let vc = ${D===0?"vN":"inp_4[base]"};
        let vP = ${D===0?"vN":`inp_4[base + ${D}u]`};
        let vR = inp_4[base + ${D+1}u];
        let vn = ${z}(vL.yzw, vN.x);
        let vp = ${z}(vP.w, vR.xyz);`;const K=(xe,ze,E,le)=>{const _e=yt(E-ze,We=>{const Ye=ze+We;if(a==="none"){const Ke=3*e+Ye;return`  var a_${Ye} = ${z}(${L}(qmeta_u[${Ke>>>2}u][${Ke&3}u]));
`}return`  var a_${Ye} = ${z}(0.0${W});
`}),Me=le?`  let y = i32(p0.bg_y0 + lid.y);
  let z = i32(p0.bg_z0);`:`  var y : i32;
  var z : i32;
  if (p0.is_full != 0u) {
    y = i32(wid.y * 4u + lid.y);
    z = i32(wid.z);
  } else {
    let pk = strips0_u[wid.z >> 2u][wid.z & 3u];
    y = i32((pk & 255u) * 4u + lid.y);
    z = i32(pk >> 8u);
  }`,ne=le?"lid.y * 2u + sg":"row_idx * 2u + sg",Be=le?`${v}u`:`${h}u`,je=le?`  let s_bg_base = (${S}u + lid.y) * ${A}u + lid.x;`:`  let row_idx = u32(z) * 256u + u32(y);
  let use_act = u32(z) < 192u;
  let a_row_base = row_idx * ${m}u + x_pad;
  let s_row_base = ((u32(z) & 63u) * 256u + u32(y)) * ${A}u + lid.x;`;return`
@compute @workgroup_size(64, 4, 1)
fn ${xe}(@builtin(local_invocation_id) lid : vec3<u32>,
             @builtin(workgroup_id) wid : vec3<u32>) {
  let sg = lid.x >> 5u;
  let slane = lid.x & 31u;
${c&&l?"":`  let hbase = (lid.y * 2u + sg) * 32u;
  let tid = hbase + slane;
  let hslot = (lid.y * 2u + sg) * 2u;
`}
  let x_pad = lid.x + ${Ct}u;
${Me}
${_e}
  var tap_yz : u32 = 0u;
  for (var dz : i32 = -1; dz <= 1; dz = dz + 1) {
    let sz = z + dz * ${G};
    for (var dy : i32 = -1; dy <= 1; dy = dy + 1) {
      let sy = y + dy * ${G};
      if (sz >= 0 && sz < 256 && sy >= 0 && sy < 256) {
        let base = (u32(sz) * 256u + u32(sy)) * ${rt}u + x_pad;
${se}
        let wb = tap_yz * ${3*p}u;
${N(ze,E)}
      }
      tap_yz = tap_yz + 1u;
    }
  }
${je}
${Q({cStart:ze,cEnd:E,hrExpr:ne,storeMode:le?"stage_bg":"conv0_split",isPermuted:!1,momOffExpr:Be})}}`},ie=F?K("main_lo",0,u,!1)+K("main_hi",u,e,!1)+K("main_bg_lo",0,u,!0)+K("main_bg_hi",u,e,!0):K("main",0,e,!1)+K("main_bg",0,e,!0);return`${k}${P}
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
@group(0) @binding(8) var<uniform> qmeta_u : array<vec4<f32>, ${e}>;
@group(0) @binding(9) var<uniform> strips0_u : array<vec4<u32>, 4096>;
@group(0) @binding(10) var<uniform> p0 : Params0;
${R}${ie}`},X=()=>`${k}
${sn(r)}
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
    for (var hr : u32 = lid; hr < ${dn}u; hr = hr + 256u) {
      let v = mom[${h}u + hr * ${e}u + c];
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
        let v = mom[${h}u + (base_hr + h) * ${e}u + c];
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
        let v = mom[${v}u + e * ${e}u + c];
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
    let beta  = qmeta[mbase + ${e}u + c];
    let eps_base = qmeta[mbase + ${2*e}u + c];
    let q_prev = select(mom[${e*2}u].x, 1.0, pp.is_first != 0u);
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
    q_ref = max(q_ref, ${Y.toFixed(1)} * qs);
  }
  ${a==="none"?"q_ref = 1.0;":""}
  if (lid == 0u) {
    mom[${e*2}u] = vec4<f32>(q_ref, 0.0, 0.0, 0.0);
  }
  let scale_num = ${Y.toFixed(1)} / q_ref;
  for (var idx : u32 = lid; idx < ${$}u; idx = idx + 256u) {
    let ic = (idx / ${3*p}u) % ${e}u;
    let qs = mom[ic * 2u].z;
    w_eff[idx] = w16_4[pp.next_w_vec4_off + idx] * ${L}(qs * scale_num);
  }
  if (lid < ${p}u) {
    ${a==="none"?`
    let mb = pp.next_meta_off + ${3*e}u + lid * 4u;
    w_eff[${M}u + lid] = ${z}(${L}(qmeta[mb]), ${L}(qmeta[mb + 1u]), ${L}(qmeta[mb + 2u]), ${L}(qmeta[mb + 3u]));
    `:`
    w_eff[${M}u + lid] = ${z}(0.0${W});
    `}
  }
}`,I=()=>`
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
  let x_pad = x4 + ${Ct}u;
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
    let a_off = a_base + c * ${rt}u;
    act8_0[a_off] = stage[s_base + c * ${pt}u];
    act8_1[a_off] = stage[s_base + (${d}u + c) * ${pt}u];
    act8_2[a_off] = stage[s_base + (${2*d}u + c) * ${pt}u];
    act8_3[a_off] = stage[s_base + (${3*d}u + c) * ${pt}u];
  }
}`,Z=(N,D)=>{const J=N*d;return`
  for (var cl : u32 = 0u; cl < ${d}u; cl = cl + 1u) {
    let c = ${J}u + cl;
    let inv_qs = mom[c * 2u].w;
    let st = mom[c * 2u + 1u];
    let rm = mom[mom_base + c];
    let q_word = ${D?`stage[s_bg_base + c * ${pt}u]`:`select(stage[s_base + c * ${pt}u], act8_${N}[a_base + cl * ${rt}u], use_act)`};
    let yv = unpack4x8unorm(q_word) * rm.w + vec4<f32>(rm.z);
    let a = vec4<f32>(
      act(yv.x * st.x + st.y),
      act(yv.y * st.x + st.y),
      act(yv.z * st.x + st.y),
      act(yv.w * st.x + st.y)
    );
    act8_${N}[a_base + cl * ${rt}u] = pack4x8unorm((a * inv_qs + vec4<f32>(${T.zeroBin.toFixed(1)})) * (1.0 / 255.0));
  }`},be=()=>`${sn(r)}
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
  let x_pad = x4 + ${Ct}u;
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
  let mom_base = ${h}u + (row_idx * 2u + sg) * ${e}u;
${yt(4,N=>Z(N,!1))}
}

@compute @workgroup_size(64, 4, 1)
fn norm_halo_fill(@builtin(local_invocation_id) lid : vec3<u32>,
                  @builtin(workgroup_id) wid : vec3<u32>) {
  let idx = wid.y * 4u + lid.y;
  if (idx >= np.n_halo) { return; }
  let x4 = lid.x;
  let sg = x4 >> 5u;
  let x_pad = x4 + ${Ct}u;
  let s_bg_base = ${S}u * ${A}u + x4;
  let mom_base = ${v}u + sg * ${e}u;
  let dst_row = norm_aux[np.halo_off + idx];
  let a_base = dst_row * ${m}u + x_pad;
${yt(4,N=>Z(N,!0))}
}`,V=N=>{const D=Math.floor(N/4),se=N%4*8,K=!c&&e>=16,ie=(ne,Be)=>c?`
          let ${ne} = vec4<f16>(vec2<f16>(unpack2x16float(((${Be} & 0x00FF00FFu) << 2u) | 0x3C003C00u)), vec2<f16>(unpack2x16float(((${Be} >> 6u) & 0x03FC03FCu) | 0x3C003C00u))) - vec4<f16>(${T.sterbenzSub});`:`
          let ${ne} = unpack4x8unorm(${Be}) - vec4<f32>(${T.uZeroFloat});`,xe=ne=>{if(se===0)return`
          let u_neg = ${ne}[base - ${D}u];
          let uC    = ${ne}[base];
          let u_pos = ${ne}[base + ${D}u];`+ie("vn","u_neg")+ie("vc","uC")+ie("vp","u_pos");const Be=32-se;return D===0?`
          let uL = ${ne}[base - 1u];
          let uC = ${ne}[base];
          let uR = ${ne}[base + 1u];
          let u_neg = (uL >> ${Be}u) | (uC << ${se}u);
          let u_pos = (uC >> ${se}u) | (uR << ${Be}u);`+ie("vn","u_neg")+ie("vc","uC")+ie("vp","u_pos"):`
          let uL = ${ne}[base - ${D+1}u];
          let uN = ${ne}[base - ${D}u];
          let uC = ${ne}[base];
          let uP = ${ne}[base + ${D}u];
          let uR = ${ne}[base + ${D+1}u];
          let u_neg = (uL >> ${Be}u) | (uN << ${se}u);
          let u_pos = (uP >> ${se}u) | (uR << ${Be}u);`+ie("vn","u_neg")+ie("vc","uC")+ie("vp","u_pos")},ze=(ne,Be)=>{const je=ne/4,We=Be/4;if(B){const Ye=p/2,Ke=p;let ke="";for(let Ne=je;Ne<We;Ne+=2){const Re=Ne*4,Qe=Ne/2;ke+=`          {
            let wp0 = w_eff_u[wbu + ${Qe}u];
            let wp1 = w_eff_u[wbu + ${Ye+Qe}u];
            let wp2 = w_eff_u[wbu + ${Ke+Qe}u];
            let w0a = wp0[0];
            let w0b = wp0[1];
            let w1a = wp1[0];
            let w1b = wp1[1];
            let w2a = wp2[0];
            let w2b = wp2[1];
            a_${Re}     = fma(vn, vec4<f16>(w0a.x), fma(vc, vec4<f16>(w1a.x), fma(vp, vec4<f16>(w2a.x), a_${Re})));
            a_${Re+1} = fma(vn, vec4<f16>(w0a.y), fma(vc, vec4<f16>(w1a.y), fma(vp, vec4<f16>(w2a.y), a_${Re+1})));
            a_${Re+2} = fma(vn, vec4<f16>(w0a.z), fma(vc, vec4<f16>(w1a.z), fma(vp, vec4<f16>(w2a.z), a_${Re+2})));
            a_${Re+3} = fma(vn, vec4<f16>(w0a.w), fma(vc, vec4<f16>(w1a.w), fma(vp, vec4<f16>(w2a.w), a_${Re+3})));
            a_${Re+4} = fma(vn, vec4<f16>(w0b.x), fma(vc, vec4<f16>(w1b.x), fma(vp, vec4<f16>(w2b.x), a_${Re+4})));
            a_${Re+5} = fma(vn, vec4<f16>(w0b.y), fma(vc, vec4<f16>(w1b.y), fma(vp, vec4<f16>(w2b.y), a_${Re+5})));
            a_${Re+6} = fma(vn, vec4<f16>(w0b.z), fma(vc, vec4<f16>(w1b.z), fma(vp, vec4<f16>(w2b.z), a_${Re+6})));
            a_${Re+7} = fma(vn, vec4<f16>(w0b.w), fma(vc, vec4<f16>(w1b.w), fma(vp, vec4<f16>(w2b.w), a_${Re+7})));
          }
`}return ke}return yt(We-je,Ye=>{const Ke=je+Ye,ke=Ke*4;return`          {
            let w0 = w_eff[wb + ${Ke}u];
            let w1 = w_eff[wb + ${p+Ke}u];
            let w2 = w_eff[wb + ${2*p+Ke}u];
            a_${ke}     = fma(vn, ${z}(w0.x), fma(vc, ${z}(w1.x), fma(vp, ${z}(w2.x), a_${ke})));
            a_${ke+1} = fma(vn, ${z}(w0.y), fma(vc, ${z}(w1.y), fma(vp, ${z}(w2.y), a_${ke+1})));
            a_${ke+2} = fma(vn, ${z}(w0.z), fma(vc, ${z}(w1.z), fma(vp, ${z}(w2.z), a_${ke+2})));
            a_${ke+3} = fma(vn, ${z}(w0.w), fma(vc, ${z}(w1.w), fma(vp, ${z}(w2.w), a_${ke+3})));
          }
`})},E=(ne,Be,je)=>{const We=ne*d,Ye=`(${d}u + cp.pad0)`;return B?`        for (var ic : u32 = 0u; ic < ${Ye}; ic = ic + 1u) {
          let base = row_off + ic * ${rt}u;
${xe(`act8_${ne}`)}
          let wbu = wbu_tap + ${We?`(${We}u + ic)`:"ic"} * ${3*p/2}u;
${ze(Be,je)}
        }
`:`        for (var ic : u32 = 0u; ic < ${Ye}; ic = ic + 1u) {
          let base = row_off + ic * ${rt}u;
${xe(`act8_${ne}`)}
          let wb = wb_tap + ${We?`(${We}u + ic)`:"ic"} * ${3*p}u;
${ze(Be,je)}
        }
`},le=(ne,Be,je,We)=>{const Ye=yt(je-Be,mt=>{const xt=Be+mt;if(a==="none"){const Ft=xt>>>2,O=["x","y","z","w"][xt&3];if(B){const wt=M+Ft>>>1,bt=M+Ft&1;return`  var a_${xt} = ${z}(w_eff_u[${wt}u][${bt}].${O});
`}return`  var a_${xt} = ${z}(w_eff[${M+Ft}u].${O});
`}return`  var a_${xt} = ${z}(0.0${W});
`});let Ke="";We==="bg"?Ke=`
  let y = i32(cp.bg_y0 + lid.y);
  let z = i32(cp.bg_z0);`:We==="ext"?Ke=`
  let pk_full = strips[cp.ext_off + wid.z];
  let ext_orig = pk_full >> 16u;
  let pk = pk_full & 0xFFFFu;
  let y = i32((pk & 255u) * 4u + lid.y);
  let z = i32(pk >> 8u);`:Ke=`
  var y : i32;
  var z : i32;
  if (cp.is_full != 0u) {
    y = i32(wid.y * 4u + lid.y);
    z = i32(cp.z_start + wid.z);
  } else {
    let pk = strips[cp.strip_off + wid.z] & 0xFFFFu;
    y = i32((pk & 255u) * 4u + lid.y);
    z = i32(pk >> 8u);
  }`;const ke=We==="bg"?"lid.y * 2u + sg":We==="ext"?"ext_orig * 8u + lid.y * 2u + sg":"row_idx * 2u + sg",Ne=We==="main"?`${h}u`:`${v}u`,Re=We==="bg"?"stage_bg":"stage",Qe=We==="main"?"true":"(cp.write_ext_y8 != 0u)",at=We==="bg"?`  let row_idx = u32(z) * 256u + u32(y);
  let s_bg_base = (${S}u + lid.y) * ${A}u + x4;`:`  let row_idx = u32(z) * 256u + u32(y);
  let s_row_base = ((u32(z) & 63u) * 256u + u32(y)) * ${A}u + x4;`,kt=B?`        let wbu_tap = tap_yz * ${e*3*p/2}u;
`:`        let wb_tap = tap_yz * ${e*3*p}u;
`;return`
@compute @workgroup_size(64, 4, 1)
fn ${ne}(@builtin(local_invocation_id) lid : vec3<u32>,
             @builtin(workgroup_id) wid : vec3<u32>) {
  let x4 = lid.x;
  let sg = x4 >> 5u;
  let slane = x4 & 31u;
${c&&l?"":`  let hbase = (lid.y * 2u + sg) * 32u;
  let tid = hbase + slane;
  let hslot = (lid.y * 2u + sg) * 2u;
`}
  let x_pad = x4 + ${Ct}u;
${Ke}
${Ye}
  var tap_yz : u32 = 0u;
  for (var dz : i32 = -1; dz <= 1; dz = dz + 1) {
    let sz = z + dz * ${N};
    for (var dy : i32 = -1; dy <= 1; dy = dy + 1) {
      let sy = y + dy * ${N};
      if (sz >= 0 && sz < 256 && sy >= 0 && sy < 256) {
        let row_off = (u32(sz) * 256u + u32(sy)) * ${m}u + x_pad;
${kt}${yt(4,mt=>E(mt,Be,je))}
      }
      tap_yz = tap_yz + 1u;
    }
  }
${at}
${Q({cStart:Be,cEnd:je,hrExpr:ke,storeMode:Re,isPermuted:c,momOffExpr:Ne,alsoWriteMomMain:We!=="main",writeY8Expr:Qe})}}`},_e=K?le("main_lo",0,u,"main")+le("main_hi",u,e,"main")+le("main_ext_lo",0,u,"ext")+le("main_ext_hi",u,e,"ext")+le("main_bg_lo",0,u,"bg")+le("main_bg_hi",u,e,"bg"):le("main",0,e,"main")+le("main_ext",0,e,"ext")+le("main_bg",0,e,"bg"),Me=B?`@group(0) @binding(6) var<uniform> w_eff_u : array<mat2x4<f16>, ${Math.ceil(b/2)}>;`:`@group(0) @binding(6) var<storage, read> w_eff : array<${z}>;`;return`${k}${P}
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
${Me}
@group(0) @binding(7) var<storage, read> strips : array<u32>;
@group(0) @binding(8) var<uniform> cp : BandConvParams;
${R}${_e}`},oe=N=>{const D=N*d;return`
  for (var cl : u32 = 0u; cl < ${d}u; cl = cl + 1u) {
    let c = ${D}u + cl;
    if (c < ${n}u) {
      let st = mom[c * 2u + 1u];
      let rm = mom[mom_base + c];
      let q_word = select(stage[s_base + c * ${pt}u], act8_${N}[a_base + cl * ${rt}u], use_act);
      let yv = unpack4x8unorm(q_word) * rm.w + vec4<f32>(rm.z);
      let fv = vec4<f32>(
        act(yv.x * st.x + st.y),
        act(yv.y * st.x + st.y),
        act(yv.z * st.x + st.y),
        act(yv.w * st.x + st.y)
      );
      feat[c] = ${z}(fv);
    }
  }`};return{initActWgsl:j,conv0Wgsl:H,prepWgsl:X,flushWgsl:I,normWgsl:be,getConvWgsl:V,clsWgsl:()=>`${k}
${sn(r)}
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
@group(0) @binding(8) var<uniform> qmeta_u : array<vec4<f32>, ${w}>;
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
  let a_base = row_idx * ${m}u + x4 + ${Ct}u;
  let s_base = ((z & 63u) * 256u + y) * ${A}u + x4;
  let mom_base = ${h}u + (row_idx * 2u + sg) * ${e}u;

  var feat : array<${z}, ${n}>;
${yt(4,N=>oe(N))}

  let w_cls = cp.w_vec4_off;
  let b_vec4 = cp.bias_off >> 2u;
${Bo({chan:n,clsK4:s,nclass:o,V4:z,suf:W,readBiasStmt:"    let bv = qmeta_u[b_vec4 + k4];",biasExpr:N=>`bv.${["x","y","z","w"][N]}`,probCfg:g})}
}`,qmetaVec4Len:w,numConvs:f,totalWEffVec4s:b,useUniformWeff:B,csQ:d,halfPass0:F,halfPassConv:!c&&e>=16}}function Qs(t,e,n,o,s,i,r){return ce(this,null,function*(){var Se,Ie;const a=U*U*U,c=r?a*4:a,l=e.dilations.length,f=e.cs/4,g=U*U*f*rt*4,u=(64*U+4)*e.cs*pt*4,m=(e.cs*2+4+(dn+ho)*e.cs)*16,S=t.limits||{},A=Math.min((Se=S.maxStorageBufferBindingSize)!=null?Se:1/0,(Ie=S.maxBufferSize)!=null?Ie:1/0);if(g>A||u>A||m>A||c>A){const ue=Math.ceil(Math.max(g,u,m,c)/1048576);throw new Error(`meshnet_fast_v4: LowMem128 max buffer (${ue} MiB) exceeds device limit (${A>>>20} MiB)`)}const _=Uo({cs:e.cs,chan:e.chan,nclass:e.nclass,clsK4:n.clsK4,dilations:e.dilations,activation:e.activation,norm:e.norm,hasF16:o,hasSubgroups32:s,numConvs:l,probCfg:r});console.log(`[WebGPU-V4-128M] ${e.chan}ch(cs=${e.cs})/${e.nclass}cls (${l} convs, ${e.activation}, norm=${e.norm}${r?", prob=3":""}) | ${o?"f16+sterbenz":"f32"} | ${s?"subgroups32":"shared-8KiB"} | ZYCX-4Q+64slice | maxBuf=${(Math.max(g,u,m,c)/1048576).toFixed(1)} MiB`);const h=GPUBufferUsage.STORAGE,v=GPUBufferUsage.UNIFORM,x=GPUBufferUsage.COPY_DST,w=GPUBufferUsage.COPY_SRC,$=U*U*Nt,M=$*(o?2:4),b=o?Math.ceil(_.totalWEffVec4s/2)*16:_.totalWEffVec4s*16,B=!!(r&&g>=c),T=`128|${e.cs}|${o?1:0}|${c}|${B?1:0}`,k=$o(t,T,()=>{const ue=[],Ae=hn(t,ue),ye=Ae.alloc,Ue={inpBuf:ye(M,h|x|w),act8_0:ye(g,h|x|w),act8_1:ye(g,h|x|w),act8_2:ye(g,h|x|w),act8_3:ye(g,h|x|w),stageBuf:ye(u,h),momBuf:ye(m,h),labels8Buf:ye(c,h|x|w),readbackBuf:ye(c,GPUBufferUsage.MAP_READ|x),probPackTmpBuf:B?ye(c,h|x|w):null};return{buffers:ue,named:Ue,bytes:Ae.getBytes()}}),{inpBuf:P,act8_0:L,act8_1:W,act8_2:z,act8_3:Y,stageBuf:R,momBuf:Q,labels8Buf:j,readbackBuf:G,probPackTmpBuf:F}=k.named,H=[],X=hn(t,H),I=X.alloc,Z=I(o?n.wF16.byteLength:n.wF32.byteLength,h|x),be=I(n.qmetaF32.byteLength,h|v|x),V=I(b,_.useUniformWeff?h|v:h),oe=e.norm==="gn"&&!(i!=null&&i.disableConeSkip),Pe=I(Ve*4,v|x),N=I(Ve*4,v|x),D=Array.from({length:l},()=>I(oe?Ve*4:16,h|x)),J=Array.from({length:l-1},()=>I(oe?(Ve+U*U)*4:16,h|x)),se=I(16,v|x),K=I(16,v|x),ie=Array.from({length:l},()=>I(48,v|x)),xe=Array.from({length:l-1},()=>I(16,v|x)),ze=Math.max(256,S.minUniformBufferOffsetAlignment||256),E=ze>>>2,le=20,_e=Math.max(1,(l-1)*le),Me=I(_e*ze,v|x),ne=new Uint32Array(_e*E);t.queue.writeBuffer(Z,0,o?n.wF16:n.wF32),t.queue.writeBuffer(be,0,n.qmetaF32);const Be=Array.from(new Set(e.dilations.slice(1)));let je;try{je=yield Po(t,e,n,o,s,r,_,Be)}catch(ue){for(const Ae of H)Ae.destroy();if(H.length=0,k.pooled)Tt.get(t)===k&&Qt(t);else{for(const Ae of k.buffers)Ae.destroy();k.buffers.length=0}throw ue}const{pInit:We,pMomFin:Ye,pPrepW:Ke,pFlush:ke,pNorm:Ne,pNormHalo:Re,pCls:Qe,pConv0:at,convPipes:kt}=je,mt=(ue,Ae)=>t.createBindGroup({layout:ue,entries:Ae.map((ye,Ue)=>({binding:Ue,resource:ye&&ye.buffer?ye:{buffer:ye}}))}),xt=mt(We.bgl,[L,W,z,Y]);{const ue=t.createCommandEncoder(),Ae=ue.beginComputePass();Ae.setPipeline(We.pipe),Ae.setBindGroup(0,xt),Ae.dispatchWorkgroups(1,U,U),Ae.end(),t.queue.submit([ue.finish()])}const Ft=(_.halfPass0?at.lo:at.main).bgl,O=mt(Ft,[P,L,W,z,Y,R,Z,Q,{buffer:be,offset:0,size:e.cs*16},Pe,se]),wt=mt(Qe.bgl,[L,W,z,Y,R,Z,Q,j,be,N,K]),bt=B?I(16,v|x):null,Mt=B?mt(Qe.bgl,[L,W,z,Y,R,Z,Q,j,be,N,bt]):null,ht=Co({device:t,hasF16:o,nvox:a,outBufBytes:c,inpBuf:P,act8_0:L,labels8Buf:j,readbackBuf:G,pInit:We,bgInit:xt,pCls:Qe,bgCls:wt,clsUbo:K,packed:n,modelEntry:i,probCfg:r,canGpuProb:B,probSlots:B?{clsUbo1:bt,bgCls1:Mt,pass0HoldBuf:F,y0:L,y1:W,b:z,sup:Y}:null,ownedBuffers:H,mkBuf:I}),y=ie.map((ue,Ae)=>mt(Ye.bgl,[Z,be,Q,V,D[Ae],ue])),C=xe.map((ue,Ae)=>mt(Ne.bgl,[L,W,z,Y,R,Q,J[Ae],ue])),q={buffer:Me,offset:0,size:32},me=Array.from({length:l},(ue,Ae)=>Ae===0?null:mt(ke.bgl,[L,W,z,Y,R,D[Ae],q])),de=Array.from({length:l},(ue,Ae)=>{if(Ae===0)return null;const ye=e.dilations[Ae],Ue=_.halfPassConv?kt[ye].lo:kt[ye].main;return mt(Ue.bgl,[L,W,z,Y,R,Q,V,D[Ae],q])}),ee=o?new Uint16Array($):new Float32Array($),$e=new Uint8Array(U*U),fe=new Uint32Array(Ve),we=new Uint32Array(Ve+U*U),te=new Uint32Array(12),ve=new Float32Array(te.buffer),Ce=new Uint32Array(4),Ze=(ue,Ae,ye,Ue,Ee,re,pe,it)=>{const Fe=ue*E;ne[Fe]=Ae?1:0,ne[Fe+1]=ye,ne[Fe+2]=Ue,ne[Fe+3]=Ee,ne[Fe+4]=re?1:0,ne[Fe+5]=pe,ne[Fe+6]=it,ne[Fe+7]=0};function De(ue,Ae){return ce(this,null,function*(){if(ue.length!==a)throw new Error(`meshnet_fast_v4 expected ${a} voxels, got ${ue.length}`);const ye=e.norm==="gn"&&!(i!=null&&i.disableConeSkip),Ue=yield ht.prepareInput({volume:ue,ioOpts:Ae,useCone:ye,padInputHost:ee,headRowHost:$e,hasF16Flag:o}),Ee=Ue.info,re=Mo($e,Ee,e.dilations,ye),pe=new Array(l);for(let he=0;he<l;he++){const Le=re.layers[he],ge=Le.isFull?Ve:Le.mainStrips.length,Je=Le.isFull||!Le.extStrips?0:Le.extStrips.length,Xe=Le.haloRows?Le.haloRows.length:0;if(he===0){!Le.isFull&&ge>0&&(fe.set(Le.mainStrips,0),t.queue.writeBuffer(Pe,0,fe.subarray(0,ge)),t.queue.writeBuffer(D[0],0,fe.subarray(0,ge))),pe[0]={L:Le,nMain:ge,nExt:Je,nHalo:Xe};continue}const nt=new Uint32Array(8),He=new Uint32Array(8),Oe=new Uint32Array(8),ae=new Uint32Array(8);if(!Le.isFull){if(ge>0){fe.set(Le.mainStrips,0);for(let ut=0;ut<ge;ut++)He[Le.mainStrips[ut]>>>13]++;let qe=0;for(let ut=0;ut<8;ut++)nt[ut]=qe,qe+=He[ut]}if(Le.mode==="bwd"&&Je>0){const qe=Array.from({length:8},()=>[]);for(let et=0;et<Je;et++){const Te=Le.extStrips[et];qe[Te>>>13].push((et&65535)<<16|Te)}let ut=ge;for(let et=0;et<8;et++){Oe[et]=ut;const Te=qe[et];ae[et]=Te.length;for(let vt=0;vt<Te.length;vt++)fe[ut++]=Te[vt]}t.queue.writeBuffer(D[he],0,fe.subarray(0,ge+Je))}else ge>0&&t.queue.writeBuffer(D[he],0,fe.subarray(0,ge))}const Ge=Le.mode==="rpure"&&Xe>0||Le.mode==="bwd"&&he+1<l,lt=(he-1)*le,ot=Le.bgStrip?Le.bgStrip.yWg*4:0,ft=Le.bgStrip?Le.bgStrip.z:0;for(let qe=0;qe<8;qe++)Ze(lt+qe,Le.isFull,qe*32,nt[qe],Oe[qe],Ge,ot,ft);for(let qe=0;qe<6;qe++)Ze(lt+8+qe,Le.isFull,qe*32,nt[qe],0,!1,0,0),Ze(lt+14+qe,!1,qe*32,Oe[qe],0,!1,0,0);pe[he]={L:Le,nMain:ge,nExt:Je,nHalo:Xe,mainCount:He,extCount:ae,layerBaseSlot:lt}}l>1&&t.queue.writeBuffer(Me,0,ne);const it=t.createCommandEncoder(),Fe=[];Ue.runPrePasses(it,Fe),re.clsSkipped&&(it.clearBuffer(j,0,c),re.clsStrips.length>0&&t.queue.writeBuffer(N,0,re.clsStrips));for(let he=0;he<l;he++){const Le=pe[he],{L:ge,nMain:Je,nHalo:Xe}=Le,nt=ge.nMomExt||0,He=ge.isFull?Ve:ge.normStrips?ge.normStrips.length:0;if(he===0){const ae=ge.isFull?64:1,Ge=ge.isFull?U:Je,lt=!!(ge.bgStrip&&Xe>0);if(Ce[0]=ge.isFull?1:0,Ce[1]=ge.bgStrip?ge.bgStrip.yWg*4:0,Ce[2]=ge.bgStrip?ge.bgStrip.z:0,Ce[3]=0,t.queue.writeBuffer(se,0,Ce),_.halfPass0)for(const[ot,ft]of[[at.lo,at.bgLo],[at.hi,at.bgHi]]){const qe=it.beginComputePass();qe.setBindGroup(0,O),Ge>0&&(qe.setPipeline(ot.pipe),qe.dispatchWorkgroups(1,ae,Ge)),lt&&(qe.setPipeline(ft.pipe),qe.dispatchWorkgroups(1,1,1)),qe.end(),Fe.push("conv0")}else{const ot=it.beginComputePass();ot.setBindGroup(0,O),Ge>0&&(ot.setPipeline(at.main.pipe),ot.dispatchWorkgroups(1,ae,Ge)),lt&&(ot.setPipeline(at.bg.pipe),ot.dispatchWorkgroups(1,1,1)),ot.end(),Fe.push("conv0")}}else{const ae=e.dilations[he],Ge=kt[ae],lt=de[he],ot=me[he],{mainCount:ft,extCount:qe,layerBaseSlot:ut}=Le,et=ge.mode==="rpure"&&!!ge.bgStrip;for(let Te=0;Te<8;Te++){if(Te>=2){const _t=Te-2,Vt=ge.isFull||ft[_t]>0,Jt=!ge.isFull&&ge.mode==="bwd"&&qe[_t]>0;if(Vt||Jt){const $t=it.beginComputePass();$t.setPipeline(ke.pipe),Vt&&($t.setBindGroup(0,ot,[(ut+8+_t)*ze]),$t.dispatchWorkgroups(1,ge.isFull?64:1,ge.isFull?32:ft[_t])),Jt&&($t.setBindGroup(0,ot,[(ut+14+_t)*ze]),$t.dispatchWorkgroups(1,1,qe[_t])),$t.end(),Fe.push("flushStage")}}const vt=ge.isFull||ft[Te]>0,tt=!ge.isFull&&ge.mode==="bwd"&&qe[Te]>0,Ut=Te===0&&et;if(!vt&&!tt&&!Ut)continue;const Dt=[(ut+Te)*ze],ct=ge.isFull?64:1,ln=ge.isFull?32:ft[Te];if(_.halfPassConv)for(const[_t,Vt,Jt]of[[Ge.lo,Ge.extLo,Ge.bgLo],[Ge.hi,Ge.extHi,Ge.bgHi]]){const $t=it.beginComputePass();$t.setBindGroup(0,lt,Dt),vt&&($t.setPipeline(_t.pipe),$t.dispatchWorkgroups(1,ct,ln)),tt&&($t.setPipeline(Vt.pipe),$t.dispatchWorkgroups(1,1,qe[Te])),Ut&&($t.setPipeline(Jt.pipe),$t.dispatchWorkgroups(1,1,1)),$t.end(),Fe.push("convHidden")}else{const _t=it.beginComputePass();_t.setBindGroup(0,lt,Dt),vt&&(_t.setPipeline(Ge.main.pipe),_t.dispatchWorkgroups(1,ct,ln)),tt&&(_t.setPipeline(Ge.ext.pipe),_t.dispatchWorkgroups(1,1,qe[Te])),Ut&&(_t.setPipeline(Ge.bg.pipe),_t.dispatchWorkgroups(1,1,1)),_t.end(),Fe.push("convHidden")}}}const Oe=he+1<l?n.w0Vec4s+he*n.hiddenVec4PerLayer:0;te[0]=he*n.metaStride,te[1]=Oe,te[2]=(he+1)*n.metaStride,te[3]=he+1<l?1:0,te[4]=he===0?1:0,te[5]=ge.isFull?1:0,te[6]=Je,te[7]=nt*8,ve[8]=ge.extWeight||0,te[9]=0,te[10]=0,te[11]=0,t.queue.writeBuffer(ie[he],0,te);{const ae=it.beginComputePass();ae.setBindGroup(0,y[he]),ae.setPipeline(Ye.pipe),ae.dispatchWorkgroups(e.cs,1,1),ae.end(),Fe.push("momentsPrep")}if(he+1<l){{const Ge=it.beginComputePass();Ge.setBindGroup(0,y[he]),Ge.setPipeline(Ke.pipe),Ge.dispatchWorkgroups(1,1,1),Ge.end(),Fe.push("momentsPrep")}const ae=ge.isFull?0:He;if((ae>0||Xe>0)&&(ae>0&&we.set(ge.normStrips,0),Xe>0&&we.set(ge.haloRows,ae),t.queue.writeBuffer(J[he],0,we.subarray(0,ae+Xe))),Ce[0]=ge.isFull?1:0,Ce[1]=ge.bgStrip?ge.bgStrip.z*U+ge.bgStrip.yWg*4:0,Ce[2]=ae,Ce[3]=Xe,t.queue.writeBuffer(xe[he],0,Ce),ge.isFull||He>0||Xe>0){const Ge=it.beginComputePass();Ge.setBindGroup(0,C[he]),(ge.isFull||He>0)&&(Ge.setPipeline(Ne.pipe),Ge.dispatchWorkgroups(1,ge.isFull?64:1,ge.isFull?U:He)),Xe>0&&(Ge.setPipeline(Re.pipe),Ge.dispatchWorkgroups(1,Math.ceil(Xe/4),1)),Ge.end(),Fe.push("normHalo")}}}return De.__passCategories=Fe,ht.finishAndReadback({enc:it,schedule:re,passCategories:Fe,u4Tmp:Ce,ioOpts:Ae})})}return ht.warmupIoPipelines(),De.dispose=({keepSharedWorkspace:ue=!1}={})=>{ht.dispose();for(const Ae of H)Ae.destroy();if(H.length=0,X.resetBytes(),k.pooled)ue?k.inUse=!1:Tt.get(t)===k&&Qt(t);else{for(const Ae of k.buffers)Ae.destroy();k.buffers.length=0}},De.gpuBytes=()=>k.bytes+X.getBytes(),De.__passCategories=[],De.__coneInfo=()=>({paddedVox:$,actMiB:g/1048576,mode:"LowMem128"}),De.kernels="v4-int8",De})}const Lo=!0;function In(s,i,r){return ce(this,arguments,function*(t,e,n,o={}){var ye,Ue,Ee,re,pe,it;const a=e instanceof Uint8Array?e:new Uint8Array(e),c=_o(a.buffer.slice(a.byteOffset,a.byteOffset+a.byteLength)),l=bo(c);o!=null&&o.classifierBias&&l.classifier&&(l.classifier.bias=Float32Array.from(o.classifierBias));const f=Gn(o),g=(o==null?void 0:o.dilations)||(f==null?void 0:f.dilations)||(l.convs.length===25?[16,8,4,2,1,16,8,4,2,1,16,8,4,2,1,16,8,4,2,1,16,8,4,2,1]:l.convs.length===9?[1,2,4,8,16,8,4,2,1]:vo),d=(o==null?void 0:o.activation)||(f==null?void 0:f.activation)||(l.affines.length||l.convs.length>=13?"gelu_tanh":"relu"),u=l.convs[0].outC,p=u>8?Math.ceil(u/8)*8:Math.ceil(u/4)*4,m=wo(l,{nx:U,ny:U,nz:U,cs:p,activation:d,dilations:g}),S=Hs(a,l,m,o),A=(o==null?void 0:o.outputType)==="probability"?qs(o,m.nclass):null,_=!!((Ue=(ye=t.features)==null?void 0:ye.has)!=null&&Ue.call(ye,"shader-f16"))&&!(o!=null&&o.disableF16),h=t.__adapterInfo||t.adapterInfo||{},v=!!((re=(Ee=t.features)==null?void 0:Ee.has)!=null&&re.call(Ee,"subgroups"))&&h.subgroupMinSize===32&&h.subgroupMaxSize===32&&!(o!=null&&o.disableSubgroups),x=U*U*U,w=A?x*4:x,$=m.cs>=16,M=$?m.cs/2:m.cs,b=U*U*M*rt*4,B=U*U*M*pt*4,T=t.limits||{},k=Math.min((pe=T.maxStorageBufferBindingSize)!=null?pe:1/0,(it=T.maxBufferSize)!=null?it:1/0);if((o!=null&&o.forceLowMem128||b>k||w>k)&&m.cs>=8&&m.cs%4===0)return Qs(t,m,S,_,v,o,A);if(b>k||w>k){const Fe=Math.max(b,w)>>>20;throw new Error(`meshnet_fast_v4: buffer (${Fe} MiB) exceeds device limit (${k>>>20} MiB)`)}const P=Fo({cs:m.cs,chan:m.chan,nclass:m.nclass,clsK4:S.clsK4,dilations:m.dilations,activation:m.activation,norm:m.norm,hasF16:_,hasSubgroups32:v,splitHalves:$,probCfg:A});console.log(`[WebGPU-V4] ${m.chan}ch(cs=${m.cs})/${m.nclass}cls (${m.dilations.length} convs, ${m.activation}, norm=${m.norm}${A?", prob=3":""}) | ${_?"f16+sterbenz":"f32"} | ${v?"subgroups32":"shared-8KiB"} | ZYCX-pad80 | maxBuf=${(Math.max(b,w)/1048576).toFixed(1)} MiB`);const L=GPUBufferUsage.STORAGE,W=GPUBufferUsage.COPY_DST,z=GPUBufferUsage.COPY_SRC,Y=U*U*Nt,R=Y*(_?2:4),Q=dn*m.cs*16,j=ho*m.cs*16,G=(m.cs*2+4)*16,F=_?Math.ceil(P.totalWEffVec4s/2)*16:P.totalWEffVec4s*16,H=`std|${m.cs}|${$?1:0}|${_?1:0}|${w}`,X=$o(t,H,()=>{const Fe=[],he=hn(t,Fe),Le=he.alloc,ge={inpBuf:Le(R,L|W|z),act8_0:Le(b,L|W|z),act8_1:Le($?b:16,L|W|z),y8_0:Le(B,L|W|z),y8_1:Le($?B:16,L|W|z),momMainBuf:Le(Q,L),momExtBuf:Le(j,L),momStatsBuf:Le(G,L),labels8Buf:Le(w,L|W|z),readbackBuf:Le(w,GPUBufferUsage.MAP_READ|W)};return{buffers:Fe,named:ge,bytes:he.getBytes()}}),{inpBuf:I,act8_0:Z,act8_1:be,y8_0:V,y8_1:oe,momMainBuf:Pe,momExtBuf:N,momStatsBuf:D,labels8Buf:J,readbackBuf:se}=X.named,K=[],ie=hn(t,K),xe=ie.alloc,ze=xe(_?S.wF16.byteLength:S.wF32.byteLength,L|W),E=xe(S.qmetaF32.byteLength,L|W),le=xe(F,P.useUniformWeff?L|GPUBufferUsage.UNIFORM:L),_e=m.dilations.length,Me=m.norm==="gn"&&!(o!=null&&o.disableConeSkip),ne=Array.from({length:_e},()=>xe(Me?Ve*4:16,L|W)),Be=Array.from({length:_e-1},()=>xe(Me?(Ve+U*U)*4:16,L|W)),je=xe(Me?Ve*4:16,L|W),We=xe(16,GPUBufferUsage.UNIFORM|W),Ye=xe(16,GPUBufferUsage.UNIFORM|W),Ke=Array.from({length:_e},()=>xe(48,GPUBufferUsage.UNIFORM|W)),ke=Array.from({length:_e-1},()=>xe(16,GPUBufferUsage.UNIFORM|W)),Ne=Array.from({length:_e},()=>xe(16,GPUBufferUsage.UNIFORM|W));t.queue.writeBuffer(ze,0,_?S.wF16:S.wF32),t.queue.writeBuffer(E,0,S.qmetaF32);const Re=Array.from(new Set(m.dilations.slice(1)));let Qe;try{Qe=yield ko(t,m,S,_,v,$,A,P,Re)}catch(Fe){for(const he of K)he.destroy();if(K.length=0,X.pooled)Tt.get(t)===X&&Qt(t);else{for(const he of X.buffers)he.destroy();X.buffers.length=0}throw Fe}const{pInit:at,pMomFin:kt,pPrepW:mt,pNorm:xt,pNormHalo:Ft,pCls:O,pConv0:wt,convPipes:bt}=Qe,Mt=(Fe,he)=>t.createBindGroup({layout:Fe,entries:he.map((Le,ge)=>({binding:ge,resource:{buffer:Le}}))}),ht=Mt(at.bgl,[Z,be]);{const Fe=t.createCommandEncoder(),he=Fe.beginComputePass();he.setPipeline(at.pipe),he.setBindGroup(0,ht),he.dispatchWorkgroups(1,U,U),he.end(),t.queue.submit([Fe.finish()])}const y=(P.halfPass0?wt.lo:wt.main).bgl,C=Mt(y,[I,V,oe,ze,E,Pe,N,ne[0],We]),q=Mt(O.bgl,[V,oe,ze,E,Pe,D,J,je,Ye]),me=!!(A&&$&&b>=w&&B>=w),de=me?xe(16,GPUBufferUsage.UNIFORM|W):null,ee=me?Mt(O.bgl,[V,oe,ze,E,Pe,D,J,je,de]):null,$e=Co({device:t,hasF16:_,nvox:x,outBufBytes:w,inpBuf:I,act8_0:Z,labels8Buf:J,readbackBuf:se,pInit:at,bgInit:ht,pCls:O,bgCls:q,clsUbo:Ye,packed:S,modelEntry:o,probCfg:A,canGpuProb:me,probSlots:me?{clsUbo1:de,bgCls1:ee,pass0HoldBuf:Z,y0:V,y1:oe,b:be,sup:Z}:null,ownedBuffers:K,mkBuf:xe}),fe=Ke.map((Fe,he)=>Mt(kt.bgl,[ze,E,Pe,N,D,le,ne[he],Fe])),we=ke.map((Fe,he)=>Mt(xt.bgl,[Z,be,V,oe,Pe,N,D,Be[he],Fe])),te=Ne.map((Fe,he)=>{if(he===0)return null;const Le=m.dilations[he],ge=P.halfPassConv?bt[Le].lo:bt[Le].main;return Mt(ge.bgl,[Z,be,V,oe,Pe,N,le,ne[he],Fe])}),ve=_?new Uint16Array(Y):new Float32Array(Y),Ce=new Uint8Array(U*U),Ze=new Uint32Array(Ve),De=new Uint32Array(Ve+U*U),Se=new Uint32Array(12),Ie=new Float32Array(Se.buffer),ue=new Uint32Array(4);function Ae(Fe,he){return ce(this,null,function*(){if(Fe.length!==x)throw new Error(`meshnet_fast_v4 expected ${x} voxels, got ${Fe.length}`);const Le=m.norm==="gn"&&!(o!=null&&o.disableConeSkip),ge=yield $e.prepareInput({volume:Fe,ioOpts:he,useCone:Le,padInputHost:ve,headRowHost:Ce,hasF16Flag:_}),Je=ge.info,Xe=Mo(Ce,Je,m.dilations,Le),nt=t.createCommandEncoder(),He=[];ge.runPrePasses(nt,He),Xe.clsSkipped&&(nt.clearBuffer(J,0,w),Xe.clsStrips.length>0&&t.queue.writeBuffer(je,0,Xe.clsStrips));for(let Oe=0;Oe<_e;Oe++){const ae=Xe.layers[Oe],Ge=ae.isFull?Ve:ae.mainStrips.length,lt=ae.isFull||!ae.extStrips?0:ae.extStrips.length,ot=ae.nMomExt||0,ft=ae.haloRows?ae.haloRows.length:0,qe=ae.isFull?Ve:ae.normStrips?ae.normStrips.length:0;if(!ae.isFull&&(Ge>0||lt>0)&&(Ge>0&&Ze.set(ae.mainStrips,0),lt>0&&Ze.set(ae.extStrips,Ge),t.queue.writeBuffer(ne[Oe],0,Ze.subarray(0,Ge+lt))),Oe===0){const et=ae.isFull?64:1,Te=ae.isFull?U:Ge,vt=!!(ae.bgStrip&&ft>0);if(ue[0]=ae.isFull?1:0,ue[1]=ae.bgStrip?ae.bgStrip.yWg*4:0,ue[2]=ae.bgStrip?ae.bgStrip.z:0,ue[3]=0,t.queue.writeBuffer(We,0,ue),P.halfPass0){{const tt=nt.beginComputePass();tt.setBindGroup(0,C),Te>0&&(tt.setPipeline(wt.lo.pipe),tt.dispatchWorkgroups(1,et,Te)),vt&&(tt.setPipeline(wt.bgLo.pipe),tt.dispatchWorkgroups(1,1,1)),tt.end(),He.push("conv0")}{const tt=nt.beginComputePass();tt.setBindGroup(0,C),Te>0&&(tt.setPipeline(wt.hi.pipe),tt.dispatchWorkgroups(1,et,Te)),vt&&(tt.setPipeline(wt.bgHi.pipe),tt.dispatchWorkgroups(1,1,1)),tt.end(),He.push("conv0")}}else{const tt=nt.beginComputePass();tt.setBindGroup(0,C),Te>0&&(tt.setPipeline(wt.main.pipe),tt.dispatchWorkgroups(1,et,Te)),vt&&(tt.setPipeline(wt.bg.pipe),tt.dispatchWorkgroups(1,1,1)),tt.end(),He.push("conv0")}}else{const et=m.dilations[Oe],Te=bt[et],vt=te[Oe],tt=ae.isFull?64:1,Ut=ae.isFull?U:Ge,Dt=ae.mode==="rpure"&&ft>0||ae.mode==="bwd"&&Oe+1<_e;if(ue[0]=ae.isFull?1:0,ue[1]=Ge,ue[2]=Dt?1:0,ue[3]=0,t.queue.writeBuffer(Ne[Oe],0,ue),P.halfPassConv){{const ct=nt.beginComputePass();ct.setBindGroup(0,vt),Ut>0&&(ct.setPipeline(Te.lo.pipe),ct.dispatchWorkgroups(1,tt,Ut)),lt>0&&(ct.setPipeline(Te.extLo.pipe),ct.dispatchWorkgroups(1,1,lt)),ct.end(),He.push("convHidden")}{const ct=nt.beginComputePass();ct.setBindGroup(0,vt),Ut>0&&(ct.setPipeline(Te.hi.pipe),ct.dispatchWorkgroups(1,tt,Ut)),lt>0&&(ct.setPipeline(Te.extHi.pipe),ct.dispatchWorkgroups(1,1,lt)),ct.end(),He.push("convHidden")}}else{const ct=nt.beginComputePass();ct.setBindGroup(0,vt),Ut>0&&(ct.setPipeline(Te.main.pipe),ct.dispatchWorkgroups(1,tt,Ut)),lt>0&&(ct.setPipeline(Te.ext.pipe),ct.dispatchWorkgroups(1,1,lt)),ct.end(),He.push("convHidden")}}const ut=Oe+1<_e?S.w0Vec4s+Oe*S.hiddenVec4PerLayer:0;Se[0]=Oe*S.metaStride,Se[1]=ut,Se[2]=(Oe+1)*S.metaStride,Se[3]=Oe+1<_e?1:0,Se[4]=Oe===0?1:0,Se[5]=ae.isFull?1:0,Se[6]=Ge,Se[7]=ot*8,Ie[8]=ae.extWeight||0,Se[9]=0,Se[10]=0,Se[11]=0,t.queue.writeBuffer(Ke[Oe],0,Se);{const et=nt.beginComputePass();et.setBindGroup(0,fe[Oe]),et.setPipeline(kt.pipe),et.dispatchWorkgroups(m.cs,1,1),et.end(),He.push("momentsPrep")}if(Oe+1<_e){{const Te=nt.beginComputePass();Te.setBindGroup(0,fe[Oe]),Te.setPipeline(mt.pipe),Te.dispatchWorkgroups(1,1,1),Te.end(),He.push("momentsPrep")}const et=ae.isFull?0:qe;if((et>0||ft>0)&&(et>0&&De.set(ae.normStrips,0),ft>0&&De.set(ae.haloRows,et),t.queue.writeBuffer(Be[Oe],0,De.subarray(0,et+ft))),ue[0]=ae.isFull?1:0,ue[1]=ae.bgStrip?ae.bgStrip.z*U+ae.bgStrip.yWg*4:0,ue[2]=et,ue[3]=ft,t.queue.writeBuffer(ke[Oe],0,ue),ae.isFull||qe>0||ft>0){const Te=nt.beginComputePass();Te.setBindGroup(0,we[Oe]),(ae.isFull||qe>0)&&(Te.setPipeline(xt.pipe),Te.dispatchWorkgroups(1,ae.isFull?64:1,ae.isFull?U:qe)),ft>0&&(Te.setPipeline(Ft.pipe),Te.dispatchWorkgroups(1,Math.ceil(ft/4),1)),Te.end(),He.push("normHalo")}}}return Ae.__passCategories=He,$e.finishAndReadback({enc:nt,schedule:Xe,passCategories:He,u4Tmp:ue,ioOpts:he})})}return $e.warmupIoPipelines(),Ae.dispose=({keepSharedWorkspace:Fe=!1}={})=>{$e.dispose();for(const he of K)he.destroy();if(K.length=0,ie.resetBytes(),X.pooled)Fe?X.inUse=!1:Tt.get(t)===X&&Qt(t);else{for(const he of X.buffers)he.destroy();X.buffers.length=0}},Ae.gpuBytes=()=>X.bytes+ie.getBytes(),Ae.__passCategories=[],Ae.__coneInfo=()=>({paddedVox:Y,actMiB:b/1048576}),Ae.kernels="v4-int8",Ae})}function qn(t){return ce(this,null,function*(){var c,l,f,g,d,u;if(!t)return;const e=!!((l=(c=t.features)==null?void 0:c.has)!=null&&l.call(c,"shader-f16")),n=t.__adapterInfo||t.adapterInfo||{},o=!!((g=(f=t.features)==null?void 0:f.has)!=null&&g.call(f,"subgroups"))&&n.subgroupMinSize===32&&n.subgroupMaxSize===32,s=t.limits||{},i=Math.min((d=s.maxStorageBufferBindingSize)!=null?d:1/0,(u=s.maxBufferSize)!=null?u:1/0),r=[{chan:24,cs:24,nclass:0,dilations:vo,activation:"gelu_tanh",norm:"gn"},{chan:16,cs:16,nclass:0,dilations:[16,8,4,2,1],activation:"gelu_tanh",norm:"gn"}],a=[Gt(t,e?"prep_in_u8_f16":"prep_in_u8_f32",()=>Fn(!0,e),"main",["read-only-storage","storage","uniform"]),Gt(t,"transpose_u8_v4",So,"main",["read-only-storage","storage"])];for(const p of r){const m=p.cs>=16,S=m?p.cs/2:p.cs,_=U*U*S*rt*4>i,h=Array.from(new Set(p.dilations.slice(1)));if(_){const v=Uo({cs:p.cs,chan:p.chan,nclass:0,clsK4:0,dilations:p.dilations,activation:p.activation,norm:p.norm,hasF16:e,hasSubgroups32:o,numConvs:p.dilations.length,probCfg:null});a.push(Po(t,p,null,e,o,null,v,h,{includeCls:!1}))}else{const v=Fo({cs:p.cs,chan:p.chan,nclass:0,clsK4:0,dilations:p.dilations,activation:p.activation,norm:p.norm,hasF16:e,hasSubgroups32:o,splitHalves:m,probCfg:null});a.push(ko(t,p,null,e,o,m,null,v,h,{includeCls:!1}))}}yield Promise.all(a)})}const Js=(t,e)=>ce(null,null,function*(){const n=yield fetch(e).then(o=>o.arrayBuffer());return In(t,new Uint8Array(n))}),Wo=!0,er={load:Js,setupNet:In,warmupV4CorePipelines:qn,supportsF32Fallback:Lo,supportsGpuNativeIO:Wo},Un=Object.freeze(Object.defineProperty({__proto__:null,default:er,releaseV4Workspace:Qt,setupNet:In,supportsF32Fallback:Lo,supportsGpuNativeIO:Wo,warmupV4CorePipelines:qn},Symbol.toStringTag,{value:"Module"}));function tr(){var t;try{if(new URLSearchParams(((t=globalThis.location)==null?void 0:t.search)||"").get("webgpuKernels")==="tinygrad")return"disabled by ?webgpuKernels=tinygrad"}catch(e){}return null}const an=new Set(["meshnet_fast_v4","dkatlas24_int8","mindmap24_int8","model16chan18cls_int8","mindgrab_int8"]);function nr(t){return an.has(t)}const Kt=Object.assign({"./webgpu_runners/dkatlas24_f32_runner.js":()=>st(()=>import("./dkatlas24_f32_runner-CdBMa7VZ.js"),[],import.meta.url),"./webgpu_runners/dkatlas24_int8_v3_runner.js":()=>st(()=>import("./dkatlas24_int8_v3_runner-BKb9nnmz.js"),__vite__mapDeps([0,1,2,3]),import.meta.url),"./webgpu_runners/dkatlas24_runner.js":()=>st(()=>import("./dkatlas24_runner-BkVMX0Bk.js"),[],import.meta.url),"./webgpu_runners/dkatlas24_synth_f32_runner.js":()=>st(()=>import("./dkatlas24_synth_f32_runner-Bb7lxqr0.js"),[],import.meta.url),"./webgpu_runners/dkatlas24_synth_runner.js":()=>st(()=>import("./dkatlas24_synth_runner-5rLWbXWF.js"),[],import.meta.url),"./webgpu_runners/manual_mindgrab_runner.js":()=>st(()=>import("./manual_mindgrab_runner-DDusGIor.js"),[],import.meta.url),"./webgpu_runners/mindgrab_runner.js":()=>st(()=>import("./mindgrab_runner-B-UQtXej.js"),[],import.meta.url),"./webgpu_runners/mindgrab_tta_runner.js":()=>st(()=>import("./mindgrab_tta_runner-Ct42O8D2.js"),[],import.meta.url),"./webgpu_runners/model16chan18cls_f32_runner.js":()=>st(()=>import("./model16chan18cls_f32_runner-B5FaUMez.js"),[],import.meta.url),"./webgpu_runners/model16chan18cls_runner.js":()=>st(()=>import("./model16chan18cls_runner-aMK3m7Gj.js"),[],import.meta.url),"./webgpu_runners/model21_104class_runner.js":()=>st(()=>import("./model21_104class_runner-DuOJ6qrl.js"),[],import.meta.url),"./webgpu_runners/model21_f32_runner.js":()=>st(()=>import("./model21_f32_runner-yTUV9LXd.js"),[],import.meta.url),"./webgpu_runners/model21_tta_runner.js":()=>st(()=>import("./model21_tta_runner-e7-76trO.js"),[],import.meta.url),"./webgpu_runners/model21chan18cls_runner.js":()=>st(()=>import("./model21chan18cls_runner-DvLOnZMy.js"),[],import.meta.url),"./webgpu_runners/model24chan18cls_gdice_prio_probability_runner.js":()=>st(()=>import("./model24chan18cls_gdice_prio_probability_runner-BHqpfuCi.js"),[],import.meta.url),"./webgpu_runners/model24chan18cls_gdice_prio_runner.js":()=>st(()=>import("./model24chan18cls_gdice_prio_runner-B5cN26gD.js"),[],import.meta.url),"./webgpu_runners/model30chan18cls_runner.js":()=>st(()=>import("./model30chan18cls_runner-C2mBz0G4.js"),[],import.meta.url),"./webgpu_runners/model30chan18cls_tta_runner.js":()=>st(()=>import("./model30chan18cls_tta_runner-v8CMqLh5.js"),[],import.meta.url),"./webgpu_runners/model30chan50cls_f32_runner.js":()=>st(()=>import("./model30chan50cls_f32_runner-DQ53FZ3-.js"),[],import.meta.url),"./webgpu_runners/model30chan50cls_runner.js":()=>st(()=>import("./model30chan50cls_runner-D72-rlcG.js"),[],import.meta.url),"./webgpu_runners/model30chan50cls_tta_runner.js":()=>st(()=>import("./model30chan50cls_tta_runner-CliMlbAZ.js"),[],import.meta.url),"./webgpu_runners/model32chan18cls_runner.js":()=>st(()=>import("./model32chan18cls_runner-cowyou29.js"),[],import.meta.url),"./webgpu_runners/model5_gw_ae_runner.js":()=>st(()=>import("./model5_gw_ae_runner-jI57fGIB.js"),[],import.meta.url),"./webgpu_runners/model5_runner.js":()=>st(()=>import("./model5_runner-BiUlzJBp.js"),[],import.meta.url),"./webgpu_runners/model5_tta_runner.js":()=>st(()=>import("./model5_tta_runner-DjIMLwlR.js"),[],import.meta.url),"./webgpu_runners/model6chan3cls_runner.js":()=>st(()=>import("./model6chan3cls_runner-wSGRZpe5.js"),[],import.meta.url),"./webgpu_runners/robust_subcortical_runner.js":()=>st(()=>import("./robust_subcortical_runner-D74Uw6At.js"),[],import.meta.url),"./webgpu_runners/robust_subcortical_tta_runner.js":()=>st(()=>import("./robust_subcortical_tta_runner-CkwA2dHP.js"),[],import.meta.url)});function or(){const t=Object.keys(Kt).map(e=>{const n=e.match(/\/([^\/]+)_runner\.js$/);return n?n[1]:null}).filter(Boolean);return Array.from(new Set([...an,...t]))}function sr(t){if(an.has(t))return()=>ce(null,null,function*(){return Un});const e=`./webgpu_runners/${t}_runner.js`;if(Kt[e])return Kt[e];const n=t.toLowerCase();for(const o of an)if(o.toLowerCase()===n)return()=>ce(null,null,function*(){return Un});for(const[o,s]of Object.entries(Kt))if(o.toLowerCase().includes(`/${n}_runner.js`))return s;for(const[o,s]of Object.entries(Kt))if(o.includes(t))return s;return null}function rr(t){if(an.has(t))return!0;const e=`./webgpu_runners/${t}_runner.js`;if(Kt[e])return!0;const n=t.toLowerCase();for(const s of an)if(s.toLowerCase()===n)return!0;const o=`/${n}_runner.js`;return Object.keys(Kt).some(s=>s.toLowerCase().endsWith(o))}function ar(t,e){if(typeof Float16Array=="undefined")throw new Error("Float16Array unavailable: cannot cast fp32 master weights to fp16.");const n=new DataView(t.buffer,t.byteOffset,t.byteLength),o=Number(n.getBigUint64(0,!0)),s=JSON.parse(new TextDecoder("utf8").decode(t.subarray(8,8+o))),i=8+o;if(!Object.entries(s).some(([p,m])=>p!=="__metadata__"&&m.dtype==="F32"))return t;const a={},c=[];let l=0;for(const[p,m]of Object.entries(s)){if(p==="__metadata__"){a[p]=m;continue}const[S,A]=m.data_offsets,_=t.subarray(i+S,i+A);let h,v;if(m.dtype==="F32"){const x=new Float32Array(_.slice().buffer),w=new Float16Array(x);h=new Uint8Array(w.buffer),v="F16"}else h=_,v=m.dtype;a[p]={dtype:v,shape:m.shape,data_offsets:[l,l+h.byteLength]},c.push(h),l+=h.byteLength}const f=new TextEncoder().encode(JSON.stringify(a)),g=(8-f.byteLength%8)%8,d=new Uint8Array(8+f.byteLength+g+l);new DataView(d.buffer).setBigUint64(0,BigInt(f.byteLength+g),!0),d.set(f,8),d.fill(32,8+f.byteLength,8+f.byteLength+g);let u=8+f.byteLength+g;for(const p of c)d.set(p,u),u+=p.byteLength;return e&&e("Cast fp32 master weights -> fp16 for WebGPU.",.05),d}function ir(t,e){try{const n=r=>!!(t.features&&t.features.has&&t.features.has(r)),o=t.limits||{},s=typeof navigator!="undefined"&&navigator.userAgent||"unknown",i=/Safari/.test(s)&&!/Chrome|Chromium|Android/.test(s);console.log("[SAFARI-DEBUG] ===== WebGPU device capabilities ====="),console.log("[SAFARI-DEBUG] model:",(e==null?void 0:e.modelName)||(e==null?void 0:e.webgpu_runner)||"(unknown)"),console.log("[SAFARI-DEBUG] userAgent:",s,"| classified Safari:",i),console.log("[SAFARI-DEBUG] shader-f16:",n("shader-f16")),console.log("[SAFARI-DEBUG] features:",t.features?Array.from(t.features):"(none)"),console.log("[SAFARI-DEBUG] limits:",{maxBufferSize:o.maxBufferSize,maxStorageBufferBindingSize:o.maxStorageBufferBindingSize,maxComputeInvocationsPerWorkgroup:o.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:o.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:o.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:o.maxComputeWorkgroupSizeZ,maxComputeWorkgroupsPerDimension:o.maxComputeWorkgroupsPerDimension}),console.log("[SAFARI-DEBUG] BC_WEBGPU_DEBUG (logits readback):",typeof window!="undefined"&&!!window.BC_WEBGPU_DEBUG),console.log("[SAFARI-DEBUG] =======================================")}catch(n){console.warn("[SAFARI-DEBUG] capability dump failed:",n==null?void 0:n.message)}}function Go(){return typeof requestAnimationFrame!="function"?new Promise(t=>setTimeout(t,0)):new Promise(t=>{let e=!1;const n=()=>{e||(e=!0,t())},o=setTimeout(n,25);requestAnimationFrame(()=>{clearTimeout(o),setTimeout(n,0)})})}const lr=6,ur=4,Ht=new Map,Pn=new Map,Xt=new Map,Et=new WeakMap,kn=new WeakSet;function cr(t){return ce(this,null,function*(){if(!(!t||kn.has(t))){kn.add(t);try{yield qn(t)}catch(e){kn.delete(t),console.debug("[WebGPU] Background pipeline warmup skipped:",(e==null?void 0:e.message)||e)}}})}function To(t,{keepSharedWorkspace:e=!1}={}){var n;if(t)try{if(typeof((n=t.execute)==null?void 0:n.dispose)=="function")t.execute.dispose({keepSharedWorkspace:e});else if(t.ownedBuffers)for(const o of t.ownedBuffers)o.destroy()}catch(o){console.warn("[WebGPU] Failed to dispose cached runner buffers:",o)}}function fr(t,e,n,o){var s,i,r,a,c,l,f,g,d,u,p,m,S,A,_,h,v,x;return JSON.stringify([t,e,n,(s=o.id)!=null?s:null,(i=o.numClasses)!=null?i:null,(r=o.outputType)!=null?r:null,(a=o.dilations)!=null?a:null,(c=o.activation)!=null?c:null,(l=o.quantize8Bit)!=null?l:null,(f=o.forceFP32)!=null?f:null,(g=o.disableF16)!=null?g:null,(d=o.disableSubgroups)!=null?d:null,(u=o.disableConeSkip)!=null?u:null,(p=o.forceLowMem128)!=null?p:null,(m=o.softmaxTemperature)!=null?m:null,(S=o.brainSupportTemperature)!=null?S:null,(A=o.brainSupportPower)!=null?A:null,(_=o.partialVolumeSigma)!=null?_:null,(h=o.probabilityGroups)!=null?h:null,(v=o.probabilityDisplay)!=null?v:null,(x=o.classifierBias)!=null?x:null])}function io(t){const e=Ht.get(t);if(e)return Ht.delete(t),Ht.set(t,e),Promise.resolve(e);const n=Pn.get(t);if(n)return n;const o=ce(null,null,function*(){let s;try{const r=yield fetch(t);if(!r.ok)throw new Error(`HTTP ${r.status}: ${r.statusText}`);s=yield r.arrayBuffer()}catch(r){throw new Error(`Failed to load weights from '${t}': ${r.message}`)}const i=new Uint8Array(s);for(Ht.set(t,i);Ht.size>lr;){const r=Ht.keys().next().value;Ht.delete(r)}return i}).finally(()=>{Pn.delete(t)});return Pn.set(t,o),o}function pr(t,e,n,o){if(!n)return t;const s=Xt.get(e);if(s)return Xt.delete(e),Xt.set(e,s),s;const i=ar(t,o);for(Xt.set(e,i);Xt.size>ur;){const r=Xt.keys().next().value;Xt.delete(r)}return i}function Ln(t,e){return ce(this,null,function*(){const n=[],o=t.createBuffer.bind(t);t.createBuffer=s=>{const i=o(s);return n.push(i),i};try{return{result:yield e(),buffers:n}}finally{t.createBuffer=o}})}function Wn(t){let e=0;for(const n of t)e+=Number(n==null?void 0:n.size)||0;return e}function Mn(t){for(const e of t)try{e.destroy()}catch(n){}}function mr(t,e,n){return ce(this,null,function*(){var x,w,$,M,b,B,T;const o=(x=tr())!=null?x:Ws(t,e);let s=e.webgpu_runner,i=e.webgpu_safetensor;const r=!!(t.features&&t.features.has&&t.features.has("shader-f16"));let a=!1;o&&(e.forceFP32?(a=!0,console.log("[WebGPU] forceFP32: using fp32 runner and weights.")):!r&&rr(`${s}_f32`)&&(a=!0,console.log("[WebGPU] shader-f16 not supported on this device -> auto-selecting fp32 runner and weights."),n("fp16 not supported - using fp32 WebGPU runner.",.05)),a&&(s=`${s}_f32`,i=i.replace(".safetensors","_f32.safetensors")),e.enableTTA&&e.webgpuTTArunner&&(console.log("[WebGPU] TTA Enabled: Switching to TTA runner and weights."),s=`${s}_tta`,i=i.replace(".safetensors","_tta.safetensors")));const l=fr(o?"runner":"native",o?s:"webgpu_native",i,e),f=Et.get(t);if(f&&f.runnerKey===l)return St(dt({},f),{cacheHit:!0});const g=!!(o&&nr(s));if(n("Loading model runner...",.1),f&&(Et.delete(t),To(f,{keepSharedWorkspace:g})),g||Qt(t),ir(t,e),o)console.log(`[WebGPU-native] not used for ${e.modelName||e.webgpu_runner}: ${o}`);else{let k=[];try{const P=yield io(i),L=yield Ln(t,()=>Rs(t,P,n,e));k=L.buffers;const W=L.result;W.kernels="hand-written";const z={runnerKey:l,runnerName:"webgpu_native",weightsPath:i,execute:W,supportsGpuNativeIO:!1,ownedBuffers:k,gpuBytes:Wn(k)};return Et.set(t,z),n("Using hand-written WebGPU kernels.",.2),St(dt({},z),{cacheHit:!1})}catch(P){Mn(k),console.warn("[WebGPU-native] falling back to the tinygrad runner:",(P==null?void 0:P.message)||P)}}const d=g?()=>ce(null,null,function*(){return Un}):sr(s);if(!d){const k=or();throw new Error(`Runner '${s}' not found. Available runners: ${k.join(", ")||"none"}. Looking in: ./webgpu_runners/`)}const[u,p]=yield Promise.all([d(),io(i)]);if(!u.setupNet&&!((w=u.default)!=null&&w.setupNet))throw new Error(`Runner module '${s}' doesn't export 'setupNet'. Exported keys: ${Object.keys(u).join(", ")}`);const m=!!((M=u.supportsF32Fallback)!=null?M:($=u.default)!=null&&$.supportsF32Fallback),S=!!((B=u.supportsGpuNativeIO)!=null?B:(b=u.default)!=null&&b.supportsGpuNativeIO);!a&&!r&&!m&&console.warn(`[WebGPU] shader-f16 not supported and no fp32 runner ('${s}_f32') available; the fp16 runner will likely fail and fall back to WebGL2.`);const _=pr(p,i,!a&&!m,n),h=u.setupNet||((T=u.default)==null?void 0:T.setupNet);let v=[];try{const k=yield Ln(t,()=>h(t,_,n,e));v=k.buffers;const P=k.result;if(typeof P!="function")throw Mn(v),new Error(`setupNet for '${s}' didn't return a function. Returned type: ${typeof P}`);const L={runnerKey:l,runnerName:s,weightsPath:i,execute:P,supportsGpuNativeIO:S,ownedBuffers:typeof P.dispose=="function"?null:v,gpuBytes:typeof P.gpuBytes=="function"?P.gpuBytes():Wn(v)};return Et.set(t,L),St(dt({},L),{cacheHit:!1})}catch(k){throw g&&Qt(t),Mn(v),new Error(`Failed to setup network for '${s}': ${k.message}`)}})}function dr(t,e,n,o,s,i,r){return ce(this,null,function*(){var g,d,u;r("Starting WebGPU inference...",0);const a=cs(n,us.WEBGPU);a.isModelFullVol=!0;let c=!1,l=null;const f=gs(n);try{if(!t)throw new Error("WebGPU device is required but not provided");if(!(n!=null&&n.webgpu_runner))throw new Error("Model entry must specify webgpu_runner property");if(!(n!=null&&n.webgpu_safetensor))throw new Error("Model entry must specify webgpu_safetensor property");const p=n.webgpuStorageSize||335544320;if(t.limits){const V=N=>(N/1048576).toFixed(0),oe=(g=t.limits.maxStorageBufferBindingSize)!=null?g:1/0,Pe=(d=t.limits.maxBufferSize)!=null?d:1/0;if(oe<p||Pe<p){const N=V(Math.min(oe,Pe)),D=V(p),J=`[WebGPU] Device buffer limit (${N} MB) is below the ${D} MB this model needs - using WebGL2 fallback.`;throw console.warn(J),r(J,.1),new Error(J)}}t.pushErrorScope("out-of-memory"),c=!0;const m=performance.now();l=yield mr(t,n,r);const S=((performance.now()-m)/1e3).toFixed(4),A=performance.now();r("Preparing input data...",.25);const _=[256,256,256],h=l.supportsGpuNativeIO&&!!n.enableTranspose&&!n.inputPermutation,v=l.supportsGpuNativeIO&&!!n.enableTranspose&&!n.outputPermutation;let x,w;if(n.enableQuantileNorm){const{qmin:V,qmax:oe}=ss(s);x=V,w=oe-V}else{const{min:V,max:oe}=rs(s);x=V,w=oe-V}const $=w===0?1:w;let M=null,b,B=_;if(h)f&&(M=Yn(s,x,$)),b=s;else{const V=Yn(s,x,$);if(f&&(M=V),n.inputPermutation){console.log(`[WebGPU] Permuting Input: ${n.inputPermutation}`);const oe=n.inputPermutation;B=[_[oe[0]],_[oe[1]],_[oe[2]]],b=nn(V,_,oe)}else n.enableTranspose?b=nn(V,_,[2,1,0]):b=V}const T=((performance.now()-A)/1e3).toFixed(4);r("Input data prepared (full volume).",.4),r("Running inference...",.5),yield Go();const k=performance.now(),P=h||v?{gpuNativeInput:h,gpuNativeOutput:v,normOffset:x,normRange:$}:void 0,L=yield Ln(t,()=>P?l.execute(b,P):l.execute(b)),W=L.result;if(typeof l.execute.gpuBytes=="function"){l.gpuBytes=l.execute.gpuBytes();const V=Et.get(t);V&&V.runnerKey===l.runnerKey&&(V.gpuBytes=l.gpuBytes)}else if(L.buffers.length>0){l.gpuBytes=(l.gpuBytes||0)+Wn(L.buffers),l.ownedBuffers&&l.ownedBuffers.push(...L.buffers);const V=Et.get(t);V&&V.runnerKey===l.runnerKey&&(V.gpuBytes=l.gpuBytes)}c=!1;const z=yield t.popErrorScope();if(z)throw new Error(`WebGPU out of memory (${z.message||"allocation failed"}) - falling back to WebGL2.`);if(!W||!Array.isArray(W))throw new Error(`Inference didn't return expected array format. Returned: ${typeof W}`);const Y=((performance.now()-k)/1e3).toFixed(4),R=(l.gpuBytes||0)/1048576;a.GPU_Memory_MiB=Math.round(R),a.WebGPU_Kernels=l.execute.kernels||"tinygrad";const Q=R>=1024?`${(R/1024).toFixed(2)} GiB`:`${Math.round(R)} MiB`;r(`WebGPU inference took ${Y}s (${a.WebGPU_Kernels} kernels, ${Q} GPU memory).`,.9),console.log("Inference result shapes:",W.map(V=>V==null?void 0:V.length));const j=n.outputType==="probability",G=n.outputPermutation||(n.enableTranspose?[2,1,0]:null),F=performance.now();let H;const X={};if(f){if(W.length!==3)throw new Error(`CAT-lite expected three tissue maps; received ${W.length}.`);r("CAT-lite: fitting GM/WM/CSF and partial-volume classes...",.92),H=yield vs(W,M,n,a,v?oe=>oe:oe=>G?nn(oe,B,G):oe instanceof Float32Array?oe:Float32Array.from(oe))}else if(j){const V=W[0];H=v?V:G?nn(V,B,G):V instanceof Float32Array?V:Float32Array.from(V),Kn(H,!0,"probability")}else{const V=W[0];let oe;v?oe=V instanceof Uint8Array?V:new Uint8Array(V):G?oe=as(V,B,G):oe=V instanceof Uint8Array?V:new Uint8Array(V),Kn(oe,!1,"segmentation"),H=yield ls(oe,s,n,e,X,_)}const I=((performance.now()-F)/1e3).toFixed(4),Z=performance.now();yield i(H,e,n,X.mask);const be=((performance.now()-Z)/1e3).toFixed(4);if(j)f||(a.Output_Type="Continuous tissue probability",a.Tissue=n.probabilityDisplay||"grayMatter",a.Softmax_Temperature=(u=n.softmaxTemperature)!=null?u:1);else{const V=is(H),oe=n.numClasses||V;fs(a,oe,V)}ps(a,Y,I,{Preprocess_t:T,Setup_t:S,Display_t:be}),console.log(`[Timing] WebGPU | ${n.modelName} | setup=${(Number(S)*1e3).toFixed(1)}ms prep=${(Number(T)*1e3).toFixed(1)}ms infer=${(Number(Y)*1e3).toFixed(1)}ms post=${(Number(I)*1e3).toFixed(1)}ms disp=${(Number(be)*1e3).toFixed(1)}ms cache=${l.cacheHit?"hit":"miss"}`),r(n.modelName+(j?"<br>Probability map finished.":"<br>Segmentation finished.")+` Inference ${Number(Y).toFixed(2)} s · ${Q} GPU memory (${a.WebGPU_Kernels} kernels).`,1,"",a)}catch(p){if(console.error("WebGPU Inference Error:",p),l&&(Et.get(t)===l&&Et.delete(t),To(l),l=null),c&&t){c=!1;try{yield t.popErrorScope()}catch(S){}}let m=p.message;throw p.message.includes("not found")?m+=". Check that the runner file exists and the name matches.":p.message.includes("fetch")?m+=". Check network connection and file paths.":p.message.includes("binding size")&&(m+=". GPU memory limit exceeded."),ms(a,m,"WebGPU inference failed"),r("",-1,`WebGPU Error: ${m}`,a),p}})}const gr={batchSize:1,numOfChan:1,isColorEnable:!0,isAutoColors:!0,bgLabelValue:0,drawBoundingVolume:!1,isGPU:!0,isBrainCropMaskBased:!0,showPhase1Output:!1,isPostProcessEnable:!0,fillSuppressedWithNeighborLabel:!1,diagnoseEnclosedComponents:!1,isContoursViewEnable:!1,browserArrayBufferMaxZDim:30,telemetryFlag:!1,chartXaxisStepPercent:10,uiSampleName:"BC_UI_Sample",atlasSelectedColorTable:"Fire"};function _r(t,e=!0){if(!t||!e||!t.turbo)return t;const s=t,{turbo:n}=s,o=Vn(s,["turbo"]);return St(dt(dt({},o),n),{isTurboActive:!0})}const Yt=[{id:2,type:"Brain_Extraction",path:"/models/mindgrab/model.json",modelName:"🪓🌐 omnimodal Skull Stripping",webgpu_safetensor:"./models/mindgrab/model.safetensors",webgpu_runner:"mindgrab",classifierBias:[1.525439739227295,-1.5258055925369263],webgpuTTArunner:!1,forceFP32:!1,webgpuStorageSize:503316480,numClasses:2,turbo:{webgpu_runner:"mindgrab_int8",quantize8Bit:!0,forceFP32:!1,webgpuTTArunner:!1,webgpuStorageSize:83886080,warning:"8-bit V4 accelerated MindGrab (~4.2s on M1 WebGPU, ~2.8x faster than fp16, auto-scales from 160 MiB down to 80 MiB max buffer on mobile WebGPU)."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,isPostProcessEnable:!0,enableCrop:!0,cropPadding:20,autoThreshold:.5,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!1,textureSize:0,warning:"This model may need dedicated graphics card.  For more info please check with Browser Resources <i class='fa fa-cogs'></i>.",inferenceDelay:100,description:"The omnimodal skull stripping model delivers high-accuracy brain extraction across T1, T2, FLAIR, DWI, EPI, MRA, PDw, qT1, CT, and PET. With Turbo ON (default), uses the V4 8-bit WebGPU engine (auto 80 MiB mobile / 160 MiB desktop max buffer, 3-tier f16/f32 portability) and RGBA8 on WebGL2 (~2.8x faster than fp16 with >99.9% foreground agreement)."},{id:21,type:"Atlas",path:"/models/model24chan18cls_gdice_prio/model.json",modelName:"🪓 Subcortical + GWM",colormapPath:"./models/model24chan18cls_gdice_prio/colormap.json",webgpu_safetensor:"./models/model24chan18cls_gdice_prio/model.safetensors",webgpu_runner:"model24chan18cls_gdice_prio",forceFP32:!1,webgpuStorageSize:1610612736,numClasses:18,turbo:{webgpu_runner:"mindmap24_int8",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:125829120,warning:"8-bit V4 accelerated MindMap v2 (~3.0s on M1 WebGPU, ~2.9x faster than fp16, auto-scales from 240 MiB down to 120 MiB max buffer on mobile WebGPU)."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,cropPadding:20,autoThreshold:0,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!0,textureSize:0,warning:"WebGPU requires a device with 1.5 GiB storage-buffer support and may need a dedicated graphics card. For more info please check with Browser Resources <i class='fa fa-cogs'></i>.",inferenceDelay:100,description:"Parcellation of the brain into 17 regions (gray and white matter plus subcortical structures) via a deep 24-channel gridding-free MeshNet. With Turbo ON (default), runs the 8-bit V4 WebGPU engine (auto 120 MiB mobile / 240 MiB desktop max buffer, ~2.9x faster than fp16, >99.2% foreground agreement) or RGBA8 on WebGL2."},{id:23,type:"Probability_Map",path:"/models/model24chan18cls_gdice_prio/model.json",modelName:"⅔🧠 Tissue fraction maps (GM/WM/CSF)",webgpu_safetensor:"./models/model24chan18cls_gdice_prio/model.safetensors",webgpu_runner:"model24chan18cls_gdice_prio_probability",forceFP32:!1,webgpuStorageSize:1610612736,numClasses:18,turbo:{webgpu_runner:"mindmap24_int8",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:125829120,warning:"8-bit V4 accelerated CAT-lite tissue fraction estimate (~3.5s on M1 WebGPU, auto-scales from 240 MiB down to 120 MiB max buffer on mobile WebGPU)."},outputType:"probability",probabilityPostprocess:"cat-lite",softmaxTemperature:2,brainSupportTemperature:1,brainSupportPower:1,partialVolumeSigma:.65,probabilityDisplay:"grayMatter",probabilityTissues:[{name:"gm",tint:[255,64,64]},{name:"wm",tint:[255,255,255]},{name:"csf",tint:[64,128,255]}],probabilityOverlayFloor:128,probabilityOverlayAlpha:48,probabilityDisplayMin:.03,probabilityUnderlayOpacity:.1,probabilityGroups:{grayMatter:[2,6,7,8,9,10,14,15,16,17],whiteMatter:[1,5],csf:[3,4,11,12]},catLitePurePriorPower:3,catLitePriorStrength:.8,catLiteIntensityStrength:.75,catLiteMixelPrior:.35,catLiteCsfWmMixelPrior:6,catLiteSpatialWeight:.25,catLiteMinSupport:.03,catLiteSigmaFloor:.025,catLiteBiasBlockSize:16,catLiteBiasSmoothPasses:3,preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,enableQuantileNorm:!0,enableFovRecenter:!1,enableFovInflate:!1,warning:"Experimental neural-assisted mixed-class partial-volume estimate, not CAT12. Keep ⚡ ON for 120-240 MiB WebGPU & cross-browser support (FP16 reference mode requires ~1.5 GiB of graphics memory).",inferenceDelay:100,description:"CAT-inspired GM/WM/CSF partial-volume estimate. The 24-channel model supplies joint GM/WM/CSF priors; normalized T1 intensity, a coarse local bias estimate, spatial regularization, and explicit GM-CSF/GM-WM mixture classes produce continuous GM, WM and CSF fractions. With ⚡ ON (default), runs via the V4 8-bit WebGPU engine or RGBA8 WebGL2. Experimental and not a CAT12 result."},{id:5,type:"Atlas",path:"/models/model24chan104cls_v3_repbn/model.json",modelName:"🪓🔪 Aparc+Aseg 104",colormapPath:"./models/model24chan104cls_v3_repbn/colormap.json",webgpu_safetensor:"./models/model24chan104cls_v3_repbn/model.safetensors",webgpu_runner:"dkatlas24_synth",forceFP32:!1,webgpuStorageSize:1610612736,numClasses:104,turbo:{webgpu_runner:"dkatlas24_int8",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:125829120,warning:"8-bit V4 accelerated Aparc+Aseg 104 (~3.3s on M1 WebGPU, ~3.4x faster than fp16, auto-scales from 240 MiB down to 120 MiB max buffer on mobile WebGPU)."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,cropPadding:20,autoThreshold:0,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!0,textureSize:0,warning:"FP16 mode requires 1.5 GiB WebGPU buffer support; keep ⚡ Turbo ON for 120-240 MiB WebGPU and Safari/Firefox support.",inferenceDelay:100,description:"Primary 104-region Desikan-Killiany atlas parcellation (cortical + subcortical, MindSnap v3-RepBN) for standard T1-weighted MRI. With Turbo ON (default), runs via the V4 8-bit WebGPU engine (~3.3s on M1, auto 120 MiB mobile / 240 MiB desktop max buffer, 3-tier f16/f32 portability) and RGBA8 on WebGL2."},{id:60,type:"Atlas",path:"/models/model24chan104cls_v3_omnimodal/model.json",modelName:"🪓🌐 Aparc+Aseg 104 (Omnimodal / Clinical)",colormapPath:"./models/model24chan104cls_v3_omnimodal/colormap.json",webgpu_safetensor:"./models/model24chan104cls_v3_omnimodal/model.safetensors",webgpu_runner:"dkatlas24_synth",forceFP32:!1,webgpuStorageSize:1610612736,numClasses:104,turbo:{webgpu_runner:"dkatlas24_int8",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:125829120,warning:"8-bit V4 accelerated Omnimodal/Clinical Aparc+Aseg 104 (~3.4s on M1 WebGPU, ~3.4x faster than fp16, auto-scales down to 120 MiB max buffer on mobile WebGPU)."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,cropPadding:20,autoThreshold:0,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!0,textureSize:0,warning:"FP16 mode requires 1.5 GiB WebGPU buffer support; keep ⚡ Turbo ON for 120-240 MiB WebGPU and Safari/Firefox support.",inferenceDelay:100,description:"Contrast-agnostic & clinical-degradation-robust 104-region Desikan-Killiany parcellation (MindSnap v3-Omnimodal, outperforming SynthSeg Robust across multimodal & thick-slice benchmarks). Use instead of standard Aparc+Aseg 104 for T2w, FLAIR, CT, thick clinical slices (2-5 mm), high noise, strong bias fields, and skull-stripped scans."},{id:4,type:"Atlas",path:"/models/model30chan50cls/model.json",modelName:"🔪 Aparc+Aseg 50",colormapPath:"./models/model30chan50cls/colormap.json",webgpu_safetensor:"./models/model30chan50cls/model.safetensors",webgpu_runner:"model30chan50cls",webgpuTTArunner:!0,preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:200,enableTranspose:!0,enableCrop:!0,cropPadding:0,autoThreshold:0,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!1,textureSize:0,warning:"This model may need dedicated graphics card.  For more info please check with Browser Resources <i class='fa fa-cogs'></i>.",inferenceDelay:100,description:"This is a 50-class model, that segments the brain into the Aparc+Aseg Freesurfer Atlas but one where cortical homologues are merged into a single class."},{id:6,type:"Divider",modelName:"-----------------",path:null},{id:3,type:"Atlas",path:"/models/model16chan18cls/model.json",modelName:"⚡🪓 Subcortical + GWM (fast)",colormapPath:"./models/model16chan18cls/colormap.json",webgpu_safetensor:"./models/model16chan18cls/model.safetensors",webgpu_runner:"model16chan18cls",forceFP32:!1,webgpuStorageSize:536870912,numClasses:18,turbo:{webgpu_runner:"model16chan18cls_int8",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:83886080,warning:"8-bit V4 accelerated 16-channel MindMap (~2.0s on M1 WebGPU, ~2.8x faster than fp16, auto-scales from 160 MiB down to 80 MiB max buffer on mobile WebGPU)."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,cropPadding:20,autoThreshold:0,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!0,textureSize:0,warning:"This model may need dedicated graphics card.  For more info please check with Browser Resources <i class='fa fa-cogs'></i>.",inferenceDelay:100,description:"Parcellation of the brain into 17 regions: gray and white matter plus subcortical areas. A deep 16-channel gridding-free MeshNet (affine GroupNorm + GELU), synth-trained for robustness across data quality including varying saturation and clinical scans. With Turbo ON (default), runs the V4 8-bit WebGPU engine (auto 80 MiB mobile / 160 MiB desktop max buffer, ~2.8x faster than fp16, >99.1% foreground agreement) or RGBA8 on WebGL2."},{id:14,type:"Atlas",path:"/models/model24chan104cls_synth/model.json",modelName:"🪓🔪 Aparc+Aseg 104 (lesion scans)",colormapPath:"./models/model24chan104cls_synth/colormap.json",webgpu_safetensor:"./models/model24chan104cls_synth/model.safetensors",webgpu_runner:"dkatlas24_synth",forceFP32:!1,webgpuStorageSize:1610612736,numClasses:104,turbo:{webgpu_runner:"dkatlas24_int8",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:125829120,warning:"8-bit V4 Turbo Aparc+Aseg 104 for lesion scans (~3.3s on M1 WebGPU, ~3.4x faster than fp16, auto-scales down to 120 MiB max buffer on mobile WebGPU)."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,cropPadding:20,autoThreshold:0,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!0,textureSize:0,warning:"This model may need a dedicated graphics card.  For more info please check with Browser Resources <i class='fa fa-cogs'></i>.",inferenceDelay:100,description:"Desikan-Killiany atlas parcellation into 104 regions (cortical + subcortical). A deep 24-channel gridding-free MeshNet with affine GroupNorm and GELU, synth-trained for robustness across data quality. Runs on WebGL2 and WebGPU (fp16 default, fp32 selectable)."}];function On(){return ce(this,null,function*(){return navigator.userAgent.indexOf("OPR/")>-1?"Opera":navigator.userAgent.indexOf("Edg/")>-1?"Edge":navigator.userAgent.indexOf("Falkon/")>-1?"Falkon":navigator.userAgent.indexOf("Chrome/")>-1?"Chrome":navigator.userAgent.indexOf("Firefox/")>-1?"Firefox":navigator.userAgent.indexOf("Safari/")>-1?"Safari":navigator.userAgent.indexOf("MSIE/")>-1||navigator.userAgent.indexOf("rv:")>-1?"IExplorer":"Unknown"})}function br(){return ce(this,null,function*(){return navigator.userAgent.indexOf("OPR/")>-1?parseInt(navigator.userAgent.split("OPR/")[1]):navigator.userAgent.indexOf("Edg/")>-1?parseInt(navigator.userAgent.split("Edg/")[1]):navigator.userAgent.indexOf("Falkon/")>-1?parseInt(navigator.userAgent.split("Falkon/")[1]):navigator.userAgent.indexOf("Chrome/")>-1?parseInt(navigator.userAgent.split("Chrome/")[1]):navigator.userAgent.indexOf("Firefox/")>-1?parseInt(navigator.userAgent.split("Firefox/")[1]):navigator.userAgent.indexOf("Safari/")>-1?parseInt(navigator.userAgent.split("Safari/")[1]):navigator.userAgent.indexOf("MSIE/")>-1||navigator.userAgent.indexOf("rv:")>-1?parseInt(navigator.userAgent.split("MSIE/")[1]):1/0})}function wr(){return ce(this,null,function*(){return navigator.userAgent.indexOf("Win")>-1?"Windows":navigator.userAgent.indexOf("Mac")>-1?"MacOS":navigator.userAgent.indexOf("Linux")>-1?"Linux":navigator.userAgent.indexOf("UNIX")>-1?"UNIX":"Unknown"})}function hr(t){return ce(this,null,function*(){return t?(console.log("WebGl2 is enabled"),!0):(console.log(typeof WebGL2RenderingContext!="undefined"?"WebGL2 may be disabled. Please try updating video card drivers":"WebGL2 is not supported"),!1)})}function vr(t){return ce(this,null,function*(){let e;if(t&&(e=t.getExtension("WEBGL_debug_renderer_info"),e)){const n=t.getParameter(e.UNMASKED_VENDOR_WEBGL);return n.indexOf("(")>-1&&n.indexOf(")")>-1?n.substring(n.indexOf("(")+1,n.indexOf(")")):n}return null})}function yr(t){return ce(this,null,function*(){if(t){const e=t.getExtension("WEBGL_debug_renderer_info");return e?t.getParameter(e.UNMASKED_VENDOR_WEBGL):null}else return null})}function xr(t){return ce(this,null,function*(){if(t){if(On()==="Firefox")return t.getParameter(t.RENDERER);const e=t.getExtension("WEBGL_debug_renderer_info");return e?t.getParameter(e.UNMASKED_RENDERER_WEBGL):null}else return null})}function $r(t){return ce(this,null,function*(){let e;if(t){if(On()==="Firefox")return t.getParameter(t.RENDERER);if(e=t.getExtension("WEBGL_debug_renderer_info"),e){let n=t.getParameter(e.UNMASKED_RENDERER_WEBGL);return n.indexOf("(")>-1&&n.indexOf(")")>-1&&n.indexOf("(R)")===-1&&(n=n.substring(n.indexOf("(")+1,n.indexOf(")")),n.split(",").length===3)?n.split(",")[1].trim():n}}return null})}function Sr(){return ce(this,null,function*(){return navigator.hardwareConcurrency})}function Ar(){return ce(this,null,function*(){return/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)})}function Pr(t,e=null){return ce(this,null,function*(){const n=new Date;if(t.isModelFullVol?t.Brainchop_Ver="FullVolume":t.Brainchop_Ver="SubVolumes",t.Total_t=(Date.now()-t.startTime)/1e3,delete t.startTime,t.Date=parseInt(n.getMonth()+1)+"/"+n.getDate()+"/"+n.getFullYear(),t.Browser=yield On(),t.Browser_Ver=yield br(),t.OS=yield wr(),t.WebGL2=yield hr(e),t.GPU_Vendor=yield vr(e),t.GPU_Card=yield $r(e),t.GPU_Vendor_Full=yield yr(e),t.GPU_Card_Full=yield xr(e),t.CPU_Cores=yield Sr(),t.Which_Brainchop="latest",(yield Ar())&&(t.Heap_Size_MB=window.performance.memory.totalJSHeapSize/(1024*1024).toFixed(2),t.Used_Heap_MB=window.performance.memory.usedJSHeapSize/(1024*1024).toFixed(2),t.Heap_Limit_MB=window.performance.memory.jsHeapSizeLimit/(1024*1024).toFixed(2)),e){console.log("MAX_TEXTURE_SIZE :",e.getParameter(e.MAX_TEXTURE_SIZE)),console.log("MAX_RENDERBUFFER_SIZE :",e.getParameter(e.MAX_RENDERBUFFER_SIZE));const o=e.getExtension("WEBGL_debug_renderer_info");console.log("VENDOR WEBGL:",e.getParameter(o.UNMASKED_VENDOR_WEBGL)),t.Texture_Size=e.getParameter(e.MAX_TEXTURE_SIZE)}else t.Texture_Size=null;return t})}const lo=.5,uo=8,co=(t,e,n)=>Math.min(n,Math.max(e,t)),fo=t=>Math.hypot(t[0].clientX-t[1].clientX,t[0].clientY-t[1].clientY);function Ro(t){t&&(t.pan2Dxyzmm=Float32Array.from([0,0,0,1]),t.scaleMultiplier=1),kr()}function kr(){const t=document.querySelector('meta[name="viewport"]');if(!t)return;const e=t.getAttribute("content")||"width=device-width, initial-scale=1.0";/maximum-scale/.test(e)||(t.setAttribute("content",`${e}, maximum-scale=1, user-scalable=no`),requestAnimationFrame(()=>requestAnimationFrame(()=>t.setAttribute("content",e))))}function Mr(){const t=e=>e.preventDefault();for(const e of["gesturestart","gesturechange","gestureend"])document.addEventListener(e,t,{passive:!1});document.addEventListener("touchmove",e=>{e.touches.length>1&&e.preventDefault()},{passive:!1})}function zr(t){const e=new Set,n=s=>{e.size>1&&s.stopPropagation()},o=s=>e.delete(s.pointerId);window.addEventListener("pointerdown",s=>{s.pointerType==="touch"&&s.target===t&&e.add(s.pointerId),n(s)},!0),window.addEventListener("pointermove",n,!0),window.addEventListener("pointerup",o,!0),window.addEventListener("pointercancel",o,!0)}function Br(t,e,n,o,s){const i=t[3]/e;return[0,1,2].map(r=>{const a=n[r]-(o[r]+s[r])/2;return i*(a+t[r])-a})}function Cr(t){const e=t.canvas;if(!e)return;zr(e);let n=null;const o=r=>{var g,d,u;if(r.touches.length!==2){n=null;return}const a=e.getBoundingClientRect(),c=window.devicePixelRatio||1,l=((r.touches[0].clientX+r.touches[1].clientX)/2-a.left)*c,f=((r.touches[0].clientY+r.touches[1].clientY)/2-a.top)*c;n={dist:Math.max(1,fo(r.touches)),pan:Array.from(t.pan2Dxyzmm),scale3d:t.scaleMultiplier||1,inRender:(u=(d=(g=t.view)==null?void 0:g.hitTest(l,f))==null?void 0:d.isRender)!=null?u:!1}},s=()=>{n=null},i=r=>{if(!n||r.touches.length!==2)return;const a=fo(r.touches)/n.dist;if(!isFinite(a)||a<=0)return;if(n.inRender){t.scaleMultiplier=co(n.scale3d*a,lo,uo);return}const c=co(n.pan[3]*a,lo,uo),l=Br(n.pan,c,t.getCrosshairPos(),t.model.extentsMin,t.model.extentsMax);t.pan2Dxyzmm=Float32Array.from([l[0],l[1],l[2],c]),t.isYoked3DTo2DZoom?t.scaleMultiplier=c:t.drawScene()};e.addEventListener("touchstart",o,{passive:!0}),e.addEventListener("touchmove",i,{passive:!0}),e.addEventListener("touchend",s,{passive:!0}),e.addEventListener("touchcancel",s,{passive:!0})}function Fr(t){return Mr(),Cr(t),{resetView:()=>Ro(t)}}const Ur=720,Lr=860;function Wr(){var s,i,r,a,c,l;const t=window.visualViewport,e=Math.round((i=(s=t==null?void 0:t.width)!=null?s:window.innerWidth)!=null?i:0),n=Math.round((a=(r=t==null?void 0:t.height)!=null?r:window.innerHeight)!=null?a:0);return e>0&&e<=Ur?!0:!!((l=(c=window.matchMedia)==null?void 0:c.call(window,"(pointer: coarse)"))==null?void 0:l.matches)&&Math.min(e,n)<=Lr}const rn=[{id:"multi",label:"All",title:"All planes",type:un.MULTIPLANAR},{id:"axial",label:"A",title:"Axial only",type:un.AXIAL},{id:"coronal",label:"C",title:"Coronal only",type:un.CORONAL},{id:"sagittal",label:"S",title:"Sagittal only",type:un.SAGITTAL},{id:"render",label:"3D",title:"3D render only",type:un.RENDER}];function Io(t,e,n){const o=rn.find(s=>s.id===n)||rn[0];t.sliceType=o.type,e.querySelectorAll("button").forEach(s=>s.classList.toggle("active",s.dataset.pane===o.id))}function Gr(t,e){const n=document.createElement("div");n.id="paneSwitcher",n.className="pane-switcher",n.setAttribute("role","group"),n.setAttribute("aria-label","Visible planes");for(const s of rn){const i=document.createElement("button");i.type="button",i.dataset.pane=s.id,i.textContent=s.label,i.title=s.title,i.setAttribute("aria-label",s.title),i.addEventListener("click",()=>Io(t,n,s.id)),n.appendChild(i)}const o=document.createElement("button");return o.type="button",o.className="pane-reset",o.textContent="⟲",o.title="Reset zoom and pan",o.setAttribute("aria-label","Reset zoom and pan"),o.addEventListener("click",()=>Ro(t)),n.appendChild(o),e.appendChild(n),n}function Tr(t){var s;const e=document.getElementById("canvas-container")||document.body,n=Gr(t,e);n.querySelector('button[data-pane="multi"]').classList.add("active"),window.addEventListener("keydown",i=>{if(i.key!=="v"&&i.key!=="V"||i.altKey||i.ctrlKey||i.metaKey||i.repeat)return;const r=i.target;if(r instanceof HTMLElement&&(r.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(r.tagName)))return;i.preventDefault(),i.stopImmediatePropagation();const a=rn.findIndex(c=>c.type===t.sliceType);Io(t,n,rn[(a+1)%rn.length].id)},!0);const o=()=>document.body.classList.toggle("nv-narrow",Wr());window.addEventListener("resize",o),window.addEventListener("orientationchange",o),(s=window.visualViewport)==null||s.addEventListener("resize",o),o()}function po(t,e=t.img.slice(),n=t.name){const o=Object.assign(Object.create(Object.getPrototypeOf(t.hdr)),t.hdr),s=Xo(o,e,n);return s.id=crypto.randomUUID(),s}const Lt=t=>t&&typeof t.slice=="function"?t.slice():t;function mo(t,e,n=t.name,o={},s={}){var c;const i=Object.assign(Object.create(Object.getPrototypeOf(t.hdr)),t.hdr,dt({dims:[...t.hdr.dims],pixDims:[...t.hdr.pixDims],affine:t.hdr.affine.map(l=>[...l])},o)),r=t.dims?t.dims.slice(0,4):i.dims.slice(0,4),a=(c=t.nVox3D)!=null?c:r[1]*r[2]*r[3];return dt({img:e,hdr:i,originalAffine:i.affine.map(l=>[...l]),dims:r,nVox3D:a,extentsMin:Lt(t.extentsMin),extentsMax:Lt(t.extentsMax),mm000:Lt(t.mm000),mm100:Lt(t.mm100),mm010:Lt(t.mm010),mm001:Lt(t.mm001),dimsRAS:t.dimsRAS?[...t.dimsRAS]:void 0,pixDimsRAS:t.pixDimsRAS?[...t.pixDimsRAS]:void 0,permRAS:t.permRAS?[...t.permRAS]:void 0,toRAS:Lt(t.toRAS),toRASvox:Lt(t.toRASvox),matRAS:Lt(t.matRAS),obliqueRAS:Lt(t.obliqueRAS),oblique_angle:t.oblique_angle,frac2mm:Lt(t.frac2mm),frac2mmOrtho:Lt(t.frac2mmOrtho),img2RASstep:t.img2RASstep?[...t.img2RASstep]:void 0,img2RASstart:t.img2RASstart?[...t.img2RASstart]:void 0,volScale:t.volScale?[...t.volScale]:void 0,name:n,id:crypto.randomUUID(),calMin:0,calMax:255,robustMin:0,robustMax:255,globalMin:0,globalMax:255,frame4D:0,nFrame4D:1,nTotalFrame4D:1,isLegendVisible:!1},s)}function Rr(t){let e=256,n=-1,o=0;for(let l=0;l<256;l++){const f=t[l];f>0&&(l<e&&(e=l),n=l,l!==0&&(o+=f))}if(e>n)return{calMin:0,calMax:255,robustMin:0,robustMax:255,globalMin:0,globalMax:255};if(e===n)return{calMin:e,calMax:n,robustMin:e,robustMax:n,globalMin:e,globalMax:n};const s=Math.round(o*.02),i=Math.round(o*.02);let r=0,a=e;for(let l=e;l<=n;l++){if(l===0&&t[0]>s){a=0;break}if(r+=t[l],r>=s){a=l;break}}r=0;let c=n;for(let l=n;l>=e;l--)if(r+=t[l],r>=i){c=Math.min(n,l+1);break}return a>=c&&(a=e,c=n),{calMin:a,calMax:c,robustMin:a,robustMax:c,globalMin:e,globalMax:n}}function zn(t,[e,n,o]){const s=t.dimsRAS,i=t.img2RASstart,r=t.img2RASstep;return!s||!i||!r||e<0||e>=s[1]||n<0||n>=s[2]||o<0||o>=s[3]?null:i[0]+e*r[0]+i[1]+n*r[1]+i[2]+o*r[2]}function fn(t,e){return ce(this,null,function*(){const n=t.img,o=yield Ho(e,t.hdr,n.buffer.byteLength===n.byteLength?n.buffer:n.buffer.slice(n.byteOffset,n.byteOffset+n.byteLength)),s=URL.createObjectURL(new Blob([o]));Object.assign(document.createElement("a"),{href:s,download:e}).click(),URL.revokeObjectURL(s)})}let mn=null,Zt=!1,pn=!1,vn=[];const qo=/Safari/.test(navigator.userAgent)&&!/Chrome|Chromium|CriOS|FxiOS|Edg|Android/.test(navigator.userAgent),Ir=qo&&new URLSearchParams(window.location.search).get("inference")!=="webgpu";function qr(){return ce(this,null,function*(){const t={secureContext:window.isSecureContext,navigatorGpuExists:"gpu"in navigator,adapterObtained:!1,deviceObtained:!1,f16Support:!1,error:null};if(window.isSecureContext||(console.warn("WebGPU requires a secure context (HTTPS or localhost)."),console.warn("Current origin:",window.location.origin)),"gpu"in navigator)try{console.log("Requesting WebGPU adapter...");const e=yield navigator.gpu.requestAdapter();if(e){t.adapterObtained=!0,console.log("WebGPU adapter obtained:",e),e.info&&console.log("Adapter info:",e.info),console.log("Adapter limits:",{maxBufferSize:e.limits.maxBufferSize,maxStorageBufferBindingSize:e.limits.maxStorageBufferBindingSize,maxComputeWorkgroupsPerDimension:e.limits.maxComputeWorkgroupsPerDimension});const n={maxBufferSize:e.limits.maxBufferSize,maxStorageBufferBindingSize:e.limits.maxStorageBufferBindingSize,maxStorageBuffersPerShaderStage:e.limits.maxStorageBuffersPerShaderStage,maxUniformBufferBindingSize:e.limits.maxUniformBufferBindingSize,maxComputeInvocationsPerWorkgroup:e.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:e.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:e.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:e.limits.maxComputeWorkgroupSizeZ,maxComputeWorkgroupStorageSize:e.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:e.limits.maxComputeWorkgroupsPerDimension},o=e.features.has("shader-f16"),s=e.features.has("subgroups");t.f16Support=o,t.subgroupsSupport=s;const i=[];o&&i.push("shader-f16"),s&&i.push("subgroups"),mn=yield e.requestDevice({requiredLimits:n,requiredFeatures:i}),mn.__adapterInfo=e.info||null,t.deviceObtained=!0,Zt=!0,console.log(`✓ WebGPU initialized successfully. F16: ${o?"enabled":"not available"}, Subgroups: ${s?"enabled":"not available"}`)}else console.warn("WebGPU adapter request returned null."),console.warn("This typically means:"),console.warn("  - Safari: WebGPU feature flags not enabled in Settings > Feature Flags"),console.warn("  - Unsupported GPU hardware"),console.warn("  - GPU drivers need updating"),t.error="Adapter returned null"}catch(e){t.error=e.message,console.error("WebGPU initialization error:",e),navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")&&(console.warn("Safari detected. To enable WebGPU:"),console.warn("  1. Open Safari Settings/Preferences"),console.warn('  2. Go to Advanced tab, enable "Show features for web developers"'),console.warn("  3. Go to Feature Flags tab"),console.warn("  4. Enable: WebGPU, GPU Process: DOM Rendering, GPU Process: Canvas Rendering"),console.warn("  5. Restart Safari"))}else console.warn("navigator.gpu not found. WebGPU API is not available in this browser."),t.error="navigator.gpu not found",navigator.userAgent.includes("Firefox")&&(console.warn("Firefox detected. To enable WebGPU in about:config:"),console.warn("  1. Set dom.webgpu.enabled = true"),console.warn("  2. Set gfx.webgpu.ignore-blocklist = true"),console.warn("  3. Restart Firefox"));return Or(Zt,t),Zt||console.log("Falling back to WebGL backend."),window.webgpuDiagnostics=t,t})}function Or(t,e){const n=document.getElementById("backendStatus");if(!n){console.log("Backend status element not found in DOM");return}if(t){const o=e.f16Support?" (F16)":"";n.textContent=`WebGPU${o}`,n.style.color="#4CAF50",n.title="WebGPU backend active - fastest performance"}else{n.textContent="WebGL",n.style.color="#FF9800";let o="WebGL backend (fallback)";e.error&&(o+=`
Reason: ${e.error}`),e.secureContext||(o+=`
⚠ Not a secure context (HTTPS required)`),qo&&(o+=`

To enable WebGPU in Safari:
1. Settings > Feature Flags
2. Enable WebGPU flags
3. Restart Safari`),navigator.userAgent.includes("Firefox")&&(o+=`

To enable WebGPU in Firefox:
1. about:config > dom.webgpu.enabled = true
2. gfx.webgpu.ignore-blocklist = true
3. Restart Firefox`),n.title=o}}function Nr(){return ce(this,null,function*(){let t="",e="",n=null,o=null,s=null,i=null;const r=document.getElementById("turboToggle"),a=new URLSearchParams(window.location.search).get("turbo");let c=!["0","false","off"].includes(String(a||"").toLowerCase());function l(){const y=modelSelect.value;return y==="-1"||modelSelect.selectedIndex<0?null:Yt[y]||null}function f(){if(!r)return;const y=l(),C=!!(y&&y.type!=="Divider"&&!y.turbo);r.classList.toggle("active",c),r.classList.toggle("turbo-na",C),r.setAttribute("aria-checked",c?"true":"false"),C?r.title=`${y.modelName} has no 8-bit Turbo variant; it runs in standard mode while keeping your global Turbo (${c?"ON":"OFF"}) setting.`:c?r.title="Turbo ON: 8-bit V4 WebGPU / RGBA8 WebGL2 acceleration (~3x faster, mobile and cross-browser friendly). Click to run FP16 reference mode.":r.title="Turbo OFF: FP16 reference WebGPU / WebGL2 mode (requires large WebGPU buffers on desktop). Click to turn Turbo ON.",modelSelect.title=(y==null?void 0:y.description)||"Choose a segmentation model to run"}const g="altKey";let d=null,u=null,p=null,m=null,S=null,A=null,_=null,h="input.nii.gz",v=null;const x=document.getElementById("dragSegmented");x&&x.querySelectorAll("button").forEach(y=>{y.onclick=()=>{O.secondaryDragMode=parseInt(y.dataset.drag,10),x.querySelectorAll("button").forEach(C=>C.classList.toggle("active",C===y))}});const w=document.getElementById("drawBtn"),$=document.getElementById("drawPopover"),M=document.getElementById("penRow"),b=document.getElementById("drawApplyRow");function B(y){$&&($.hidden=!y,w&&w.setAttribute("aria-expanded",String(y)))}function T(y){O.drawIsEnabled=y>=0,y>=0&&(!O.drawingVolume&&O.volumes.length&&O.createEmptyDrawing(),O.drawPenValue=y&7,O.drawPenFilled=y>7),M&&M.querySelectorAll(".chip").forEach(C=>C.classList.toggle("active",parseInt(C.dataset.pen,10)===y))}function k(y){return ce(this,null,function*(){var fe;if(O.volumes.length<2){window.alert("No segmentation open (run a model first).");return}if(y===0){O.drawUndo();return}const C=(fe=O.drawingVolume)==null?void 0:fe.img;if(!C){window.alert("Nothing drawn yet — pick a pen and draw on the image first.");return}const q=O.volumes[1].img;if(q instanceof Float32Array){window.alert("Drawing edits label segmentations, not probability maps.");return}const me=O.volumes[1],de=me.dimsRAS;if(!de||C.length!==de[1]*de[2]*de[3]){window.alert("The drawing does not match the current image — redraw it.");return}const ee=y===1?1:0;let $e=0;for(let we=0;we<de[3];we++)for(let te=0;te<de[2];te++)for(let ve=0;ve<de[1];ve++,$e++)C[$e]>0&&(q[zn(me,[ve,te,we])]=ee);O.closeDrawing(),yield O.updateGLVolume(),O.drawIsEnabled=!1,T(-1)})}w&&(w.onclick=y=>{y.stopPropagation(),B($.hidden)}),M&&M.querySelectorAll(".chip").forEach(y=>{y.onclick=()=>T(parseInt(y.dataset.pen,10))}),b&&b.querySelectorAll(".chip").forEach(y=>{y.onclick=()=>k(parseInt(y.dataset.apply,10))}),document.addEventListener("click",y=>{!$||$.hidden||y.target.closest(".popover-wrap")||B(!1)}),document.addEventListener("keydown",y=>{y.key==="Escape"&&B(!1)});const P=document.getElementById("appDialog");P&&P.addEventListener("click",y=>{y.target===P&&P.close()}),aboutBtn.onclick=function(){Ot("About BrainChop",`
      <div style="text-align: left; font-size: 0.95em;">
        <p><strong>🔒 Privacy First</strong><br>
        BrainChop runs entirely <strong>locally in your browser</strong>. Your imaging data never leaves your device, and no server-side processing is involved.</p>

        <p><strong>⌨️ Controls</strong><br>
        • <strong>Drag & Drop</strong> any NIfTI file to open.
        • Press <strong>C</strong> to toggle/cycle the clip-plane.
        • Press <strong>V</strong> repeatedly to cycle through views.
        • <strong>Option/Alt-click</strong> a segmentation label or CAT-lite tissue to show it alone in all panels + 3D. Click it again, click the background, or press Esc to restore all overlays.</p>

        <p><strong>🧠 AI Models</strong><br>
        <strong>⚡ (toolbar switch, default ON):</strong> Global 8-bit V4 WebGPU &amp; RGBA8 WebGL2 acceleration (~3× faster, fits mobile/phone WebGPU limits, cross-browser across Chrome, Firefox &amp; Safari). Turn OFF for FP16 reference mode.<br>
        <strong>🪓🌐 Omnimodal / Clinical:</strong> <em>omnimodal Skull Stripping</em> (MindGrab) and <em>Aparc+Aseg 104 (Omnimodal / Clinical)</em> (MindSnap v3-Omnimodal) for T2w, FLAIR, DWI, CT, thick clinical slices (2–5 mm), noise/bias, and skull-stripped scans.<br>
        <strong>🪓🔪 / 🔪 Cortical + Subcortical Parcellation:</strong> <em>Aparc+Aseg 104</em> (MindSnap v3-RepBN) for standard T1-like MRIs; <em>Aparc+Aseg 104 (lesion scans)</em> after the divider for focal lesions; <em>Aparc+Aseg 50</em> for merged cortical homologues.<br>
        <strong>⅔🧠 Tissue Fractions:</strong> <em>Tissue fraction maps (GM/WM/CSF)</em> for CAT-inspired continuous partial-volume estimation (Turbo-accelerated when ⚡ is ON).<br>
        <strong>🪓 Subcortical &amp; Tissue:</strong> <em>Subcortical + GWM</em> and <em>Subcortical + GWM (fast)</em> for robust subcortical/tissue segmentation.</p>
        
        <p><em>Note: Models may run slower on limited devices to ensure memory safety.</em></p>
      </div>
    `)};const L=document.getElementById("shadingBtn");L.onclick=()=>{const y=L.classList.toggle("active");L.setAttribute("aria-pressed",String(y)),O.volumeIllumination=y?.5:0},diagnosticsBtn.onclick=function(){let y=t;if(y.length<1&&window.webgpuDiagnostics){const q=window.webgpuDiagnostics;y=`:: Startup Diagnostics ::
`,y+=`Secure Context: ${q.secureContext}
`,y+=`WebGPU Enabled: ${Zt}
`,y+=`F16 Support: ${q.f16Support}
`,q.error&&(y+=`Error: ${q.error}
`),y+=`User Agent: ${navigator.userAgent}
`}if(y.length<1){Ot("Diagnostics","No diagnostic string generated: run a model to create diagnostics");return}let C=y;e=e.slice(0,-2),e!==""&&C.includes("Status: OK")&&(C=C.replace("Status: OK",`Status: ${e}`)),e="",navigator.clipboard.writeText(C).then(()=>{Ot("Diagnostics",`<p>Diagnostics copied to clipboard</p><pre style="white-space: pre-wrap; font-family: monospace; font-size: 0.9em; overflow-x: auto;">${C}</pre>`)}).catch(q=>{Ot("Diagnostics",`<p>Failed to copy to clipboard.</p><pre style="white-space: pre-wrap; font-family: monospace; font-size: 0.9em; overflow-x: auto;">${C}</pre>`)})},opacitySlider0.oninput=()=>{O.volumes[0]&&(O.volumes[0].opacity=Number(opacitySlider0.value)),O.updateGLVolume()};function W(){const y=Number(opacitySlider1.value);O.volumes.slice(1).forEach((C,q)=>{C.opacity=(p==null?void 0:p[q])===C&&u!==null&&q!==u?0:y}),O.updateGLVolume()}opacitySlider1.oninput=W;function z(y=null){const C=y==null?void 0:y.probabilityUnderlayOpacity;C!==void 0?(_===null&&(_=opacitySlider0.value),opacitySlider0.value=C,O.volumes[0]&&(O.volumes[0].opacity=Number(C))):_!==null&&(opacitySlider0.value=_,_=null,O.volumes[0]&&(O.volumes[0].opacity=Number(opacitySlider0.value)))}function Y(){return ce(this,null,function*(){const y=O.volumes[0];let C=y.dims[1]===256&&y.dims[2]===256&&y.dims[3]===256&&y.img instanceof Uint8Array&&y.img.length===256*256*256;if((y.permRAS[0]!==-1||y.permRAS[1]!==3||y.permRAS[2]!==-2)&&(C=!1),C)return;mt("Conforming input volume to 256³...",.05),yield Go(),yield Q();const q=yield O.volumeTransform.conform(y,{toRAS:!1}),[me,de]=[A,h],ee=modelSelect.value;yield O.removeVolume(0),yield O.addVolume(q),[A,h]=[me,de],modelSelect.value=ee,f()})}function R(){for(u=null,p=null;O.model.volumes.length>1;)O.model.removeVolume(O.model.volumes.length-1)}function Q(){return ce(this,null,function*(){R(),yield O.updateGLVolume()})}function j(){return O.volumes.length>=2&&O.volumes[1].colormapLabel?O.volumes[1]:null}function G(){d=null,m=null,S=null,X&&(X.style.display="none")}function F(){const y=j();if(y){if(m===null&&(m=y.img),d===null)y.img=m,S=null;else{const C=m,q=new C.constructor(C.length);for(let me=0;me<C.length;me++)q[me]=C[me]===d?d:0;y.img=q,S=H(d)}O.updateGLVolume(),I()}}function H(y){const C=O.volumes[0],q=m||O.volumes[1]&&O.volumes[1].img;if(!C||!q)return null;const me=C.hdr.pixDims||[],de=me[1]&&me[2]&&me[3]?me[1]*me[2]*me[3]:1,ee=ne(C.img,q,de),$e=ee.reduce((Ce,Ze)=>Ce+Ze.volume_mm3,0),fe=ee.find(Ce=>Ce.label===y);if(!fe)return null;const we=$e>0?fe.volume_mm3/$e*100:0,te=[fe.name,`${We(fe.volume_mm3)} cm3   (${we.toFixed(1)}% of brain)`,`${fe.voxels.toLocaleString()} voxels`,`intensity  ${fe.mean.toFixed(0)} +/- ${fe.stdev.toFixed(0)}`];let ve=[1,1,1,1];if(o&&o.R&&o.R[y]!=null){const Ce=Ze=>Math.min(255,Ze*.55+130)/255;ve=[Ce(o.R[y]),Ce(o.G[y]),Ce(o.B[y]),1]}return{lines:te,color:ve}}let X=null;function I(){var fe,we;X||(X=document.createElement("div"),X.style.cssText="position:absolute;pointer-events:none;font:13px/1.55 system-ui,sans-serif;text-shadow:0 1px 2px #000;white-space:pre;color:#ebebeb",O.canvas.parentElement.appendChild(X));const y=(we=(fe=O.view)==null?void 0:fe.screenSlices)==null?void 0:we.find(te=>te.axCorSag===4);if(d===null||!S||!j()||!y){X.style.display="none";return}const C=window.devicePixelRatio||1,[q,me]=y.leftTopWidthHeight;Object.assign(X.style,{left:`${q/C+8}px`,top:`${me/C+8}px`});const{lines:de,color:ee}=S,$e=ee.slice(0,3).map(te=>Math.round(te*255)).join(",");X.innerHTML=`<span style="color:rgb(${$e})">${tn(de[0])}</span>
`+de.slice(1).map(tn).join(`
`),X.style.display="block"}function Z(){const y=j();if(!y||!v)return null;const C=zn(y,v);if(C===null)return null;const q=(m||y.img)[C];return q===void 0?null:Math.round(q*y.hdr.scl_slope+y.hdr.scl_inter)}function be(y){j()&&(d=y===0||y===d?null:y,F())}function V(){if(!p||!v||p.some((q,me)=>O.volumes[me+1]!==q))return;let y=null,C=0;for(let q=0;q<p.length;q++){const me=p[q],de=zn(me,v);if(de===null)return;const ee=me.img[de];Number.isFinite(ee)&&ee>C&&(C=ee,y=q)}return y}function oe(y){if(y[g]){if(j()){const C=Z();if(C===null||Number.isNaN(C))return;be(C)}else{const C=V();if(C===void 0)return;const q=C===u?null:C;q!==u&&(u=q,W())}y.preventDefault()}}function Pe(){return ce(this,null,function*(){if(!pn){pn=!0,vn=[];try{yield N()}finally{pn=!1,modelSelect.value="-1",f()}}})}function N(){return ce(this,null,function*(){const y=modelSelect.value;if(y==="-1"||modelSelect.selectedIndex<0)return;G(),yield Y();const C=Yt[y],q=_r(C,c),me=dt({},gr),de=new URL("./",window.location.href).href;me.rootURL=de.endsWith("/")?de.slice(0,-1):de;const ee=O.volumes[0].img;let $e=null;const fe=Ir&&!q.quantize8Bit,we=fe;if(fe&&Zt&&q.webgpu_safetensor&&console.info("Safari WebGPU legacy gate active for non-V4 model; routing to native WebGL2."),Zt&&!we&&q.webgpu_safetensor){console.log("Attempting WebGPU backend...");const te=St(dt({},q),{enableTTA:!1});try{yield dr(mn,me,te,O.volumes[0].hdr,ee,at,mt);return}catch(ve){$e=ve,console.error("WebGPU inference failed, falling back to native WebGL2.",ve)}}if(q.webgpu_safetensor)try{const{runInferenceWebGl2:te,nativeWebgl2Available:ve}=yield st(()=>ce(null,null,function*(){const{runInferenceWebGl2:Ce,nativeWebgl2Available:Ze}=yield import("./inference-webgl2-VF3_cxPe.js");return{runInferenceWebGl2:Ce,nativeWebgl2Available:Ze}}),[],import.meta.url);if(ve()){console.log("Attempting native WebGL2 runner..."),yield te(me,q,O.volumes[0].hdr,ee,at,mt);return}$e=new Error("Native WebGL2 unavailable (no OffscreenCanvas WebGL2 context)."),console.warn($e.message)}catch(te){$e=te,console.error("Native WebGL2 failed.",te)}Er($e||new Error(`No available backend could run ${q.modelName}.`))})}modelSelect.onchange=()=>(f(),Pe()),r&&(r.onclick=()=>ce(null,null,function*(){if(pn)return;c=!c,f();const y=l();y&&y.turbo&&(yield Pe())})),f();function D(y){return ce(this,null,function*(){const C=j(),q=d!==null&&C&&m;q&&(C.img=m);try{return yield y()}finally{q&&F()}})}function J(){const y=O.volumes[1],C=(s==null?void 0:s.type)==="Brain_Extraction"?i:d!==null&&m?m:y.img;if(!C||C.length!==y.img.length)throw new Error("The segmentation mask is unavailable. Run the model again.");const q=new Uint8Array(C.length);for(let de=0;de<C.length;de++)q[de]=C[de]!==0?1:0;const me=po(y,q,"brain_mask");return Object.assign(me.hdr,{datatypeCode:2,numBitsPerVoxel:8,scl_slope:1,scl_inter:0,cal_min:0,cal_max:1,intent_code:1002}),me}function se(y=!1){return ce(this,null,function*(){if(O.volumes.length<2){window.alert("No segmentation to save (run a model first).");return}const C=O.volumes.slice(1);yield D(()=>ce(null,null,function*(){for(const q of C)yield fn(q,K(q,C.length,""));y&&(yield fn(J(),"binary_mask.nii.gz"))}))})}function K(y,C,q){return C>1?`segmentation_${y.name}${q}.nii.gz`:`segmentation${q}.nii.gz`}function ie(){if(O.volumes.length<1){window.alert("No image loaded.");return}fn(O.volumes[0],"conformed_input.nii.gz")}function xe(){return ce(this,null,function*(){if(O.volumes.length<1){window.alert("No image loaded.");return}yield D(()=>ce(null,null,function*(){yield O.saveDocument("brainchop.nvd")}))})}function ze(y=!1){return ce(this,null,function*(){if(O.volumes.length<2){window.alert("No segmentation to save (run a model first).");return}if(!A||!A.hdr||!A.hdr.affine){window.alert("Original input grid is unavailable — reload the image and try again.");return}mt("Reslicing to native space…",0),yield new Promise(C=>setTimeout(C,30));try{const C=O.volumes.slice(1);for(const q of C){const me=yield D(()=>E(q));yield fn(me,K(q,C.length,"_native"))}if(y){const q=E(J());yield fn(q,"binary_mask_native.nii.gz")}mt("Saved native-space segmentation.",1)}catch(C){console.error("Native-space reslice failed:",C),window.alert("Native-space export failed: "+(C&&C.message?C.message:C))}})}function E(y){const C=y.img,q=A.hdr.affine,me=A.hdr.dims[1],de=A.hdr.dims[2],ee=A.hdr.dims[3],$e=y.hdr.dims[1],fe=y.hdr.dims[2],we=y.hdr.dims[3],te=(re,pe)=>[re[0][0]*pe[0]+re[0][1]*pe[1]+re[0][2]*pe[2]+re[0][3],re[1][0]*pe[0]+re[1][1]*pe[1]+re[1][2]*pe[2]+re[1][3],re[2][0]*pe[0]+re[2][1]*pe[1]+re[2][2]*pe[2]+re[2][3]],ve=Ko();if(!Zo(ve,Qo(...y.hdr.affine[0],...y.hdr.affine[1],...y.hdr.affine[2],...y.hdr.affine[3])))throw new Error("Segmentation affine is not invertible");const Ce=(re,pe)=>[re[0]*pe[0]+re[1]*pe[1]+re[2]*pe[2]+re[3],re[4]*pe[0]+re[5]*pe[1]+re[6]*pe[2]+re[7],re[8]*pe[0]+re[9]*pe[1]+re[10]*pe[2]+re[11]],Ze=re=>Ce(ve,te(q,re)),De=Ze([0,0,0]),Se=Ze([1,0,0]).map((re,pe)=>re-De[pe]),Ie=Ze([0,1,0]).map((re,pe)=>re-De[pe]),ue=Ze([0,0,1]).map((re,pe)=>re-De[pe]),Ae=!!y.colormapLabel||y.hdr.intent_code===1002,ye=me*de*ee,Ue=po(A),Ee=(re,pe,it)=>re>=0&&re<$e&&pe>=0&&pe<fe&&it>=0&&it<we?C[re+pe*$e+it*$e*fe]:0;if(Ae){const re=[];for(const ge of[-.25,.25])for(const Je of[-.25,.25])for(const Xe of[-.25,.25])re.push([ge*Se[0]+Je*Ie[0]+Xe*ue[0],ge*Se[1]+Je*Ie[1]+Xe*ue[1],ge*Se[2]+Je*Ie[2]+Xe*ue[2]]);const pe=new Int16Array(ye);let it=0;const Fe=new Int32Array(8),he=new Int32Array(8);let Le=0;for(let ge=0;ge<ee;ge++)for(let Je=0;Je<de;Je++){let Xe=De[0]+Je*Ie[0]+ge*ue[0],nt=De[1]+Je*Ie[1]+ge*ue[1],He=De[2]+Je*Ie[2]+ge*ue[2];for(let Oe=0;Oe<me;Oe++){let ae=0;for(let ot=0;ot<8;ot++){const ft=Ee(Math.round(Xe+re[ot][0]),Math.round(nt+re[ot][1]),Math.round(He+re[ot][2]));let qe=-1;for(let ut=0;ut<ae;ut++)if(Fe[ut]===ft){qe=ut;break}qe<0?(Fe[ae]=ft,he[ae]=1,ae++):he[qe]++}let Ge=Fe[0],lt=he[0];for(let ot=1;ot<ae;ot++)he[ot]>lt&&(lt=he[ot],Ge=Fe[ot]);Ge>it&&(it=Ge),pe[Le++]=Ge,Xe+=Se[0],nt+=Se[1],He+=Se[2]}}Ue.hdr.datatypeCode=4,Ue.hdr.numBitsPerVoxel=16,Ue.hdr.scl_slope=1,Ue.hdr.scl_inter=0,Ue.hdr.cal_min=0,Ue.hdr.cal_max=it,Ue.hdr.intent_code=1002,Ue.img=pe}else{const re=y.img instanceof Float32Array,pe=re?255:1,it=re?.5:0,Fe=re?new Uint8Array(ye):Ue.img;Fe.fill(0),re&&(Object.assign(Ue.hdr,{datatypeCode:2,numBitsPerVoxel:8,cal_min:0,cal_max:1}),Ue.img=Fe),Ue.hdr.scl_slope=1/pe,Ue.hdr.scl_inter=0;const Le=re?(Je,Xe,nt)=>{const He=Math.floor(Je),Oe=Math.floor(Xe),ae=Math.floor(nt),Ge=Je-He,lt=Xe-Oe,ot=nt-ae,ft=Ee(He,Oe,ae),qe=Ee(He+1,Oe,ae),ut=Ee(He,Oe+1,ae),et=Ee(He+1,Oe+1,ae),Te=Ee(He,Oe,ae+1),vt=Ee(He+1,Oe,ae+1),tt=Ee(He,Oe+1,ae+1),Ut=Ee(He+1,Oe+1,ae+1),Dt=ft+Ge*(qe-ft),ct=ut+Ge*(et-ut),ln=Te+Ge*(vt-Te),_t=tt+Ge*(Ut-tt),Vt=Dt+lt*(ct-Dt),Jt=ln+lt*(_t-ln);return Vt+ot*(Jt-Vt)}:(Je,Xe,nt)=>Ee(Math.round(Je),Math.round(Xe),Math.round(nt));let ge=0;for(let Je=0;Je<ee;Je++)for(let Xe=0;Xe<de;Xe++){let nt=De[0]+Xe*Ie[0]+Je*ue[0],He=De[1]+Xe*Ie[1]+Je*ue[1],Oe=De[2]+Xe*Ie[2]+Je*ue[2];for(let ae=0;ae<me;ae++)Fe[ge++]=Le(nt,He,Oe)*pe+it,nt+=Se[0],He+=Se[1],Oe+=Se[2]}}return Ue}const le=[{act:se,title:"Segmentation: conformed",sub:"256³ · 1 mm iso",need:"seg"},{act:ze,title:"Segmentation: native space",sub:"resampled to the input grid",need:"seg"},{act:ie,title:"Conformed input volume",sub:"the resampled T1 (256³ · 1 mm)",need:"img"},{act:xe,title:"Scene",sub:"everything, as a .nvd document",need:"img"}];function _e(){const y=O.volumes.length>=1,C=O.volumes.length>=2,q=C&&s&&s.outputType!=="probability"&&(s.type!=="Brain_Extraction"||!!i),me=fe=>fe==="seg"?C:y,de=le.map((fe,we)=>{const te=me(fe.need)?"":" disabled";return`<button type="button" class="save-opt${te}" data-i="${we}"${te?" disabled":""}>
        <span class="save-opt-title">${fe.title}</span>
        <span class="save-opt-sub">${fe.sub}</span>
      </button>`}).join("");Ot("Save",`<div class="save-options">${de}</div>${q?'<label class="save-mask-option"><input type="checkbox" id="saveBinaryMask"><span><strong>Also save binary mask</strong><small>Foreground 1 · background 0</small></span></label>':""}`,{hideClose:!0,saveMode:!0});const $e=document.getElementById("dialogMessage");$e&&$e.querySelectorAll(".save-opt:not(.disabled)").forEach(fe=>{fe.onclick=()=>{var Ce;const we=le[parseInt(fe.dataset.i,10)],te=we.need==="seg"&&!!((Ce=$e.querySelector("#saveBinaryMask"))!=null&&Ce.checked),ve=document.getElementById("appDialog");ve&&ve.open&&ve.close(),we.act(te)}})}const Me=document.getElementById("saveBtn");Me&&(Me.onclick=_e);function ne(y,C,q){const de=new Map,ee=C.length;for(let we=0;we<ee;we++){const te=C[we];if(te===0)continue;let ve=de.get(te);ve||(ve={count:0,sum:0,sumSq:0,hist:new Float64Array(256)},de.set(te,ve));const Ce=y[we];ve.count++,ve.sum+=Ce,ve.sumSq+=Ce*Ce,ve.hist[Ce]++}const $e=(we,te,ve)=>{const Ce=ve*te;let Ze=0;for(let De=0;De<we.length;De++)if(Ze+=we[De],Ze>=Ce)return De;return we.length-1},fe=[];for(const[we,te]of[...de.entries()].sort((ve,Ce)=>ve[0]-Ce[0])){const ve=te.sum/te.count,Ce=Math.max(0,te.sumSq/te.count-ve*ve);let Ze=0,De=0;for(let Se=0;Se<te.hist.length;Se++)if(te.hist[Se]>0){Ze=Se;break}for(let Se=te.hist.length-1;Se>=0;Se--)if(te.hist[Se]>0){De=Se;break}fe.push({label:we,name:n&&n[we]!=null?n[we]:`label_${we}`,voxels:te.count,volume_mm3:te.count*q,min:Ze,max:De,q1:$e(te.hist,te.count,.25),median:$e(te.hist,te.count,.5),q3:$e(te.hist,te.count,.75),mean:ve,stdev:Math.sqrt(Ce)})}return fe}function Be(y){const C=["label","name","voxels","volume_mm3","min","max","q1","median","q3","mean","stdev"],q=ee=>Number.isInteger(ee)?String(ee):ee.toFixed(6),me=ee=>/[",\n]/.test(ee)?`"${String(ee).replace(/"/g,'""')}"`:String(ee),de=[C.join(",")];for(const ee of y)de.push([ee.label,me(ee.name),ee.voxels,q(ee.volume_mm3),ee.min,ee.max,ee.q1,ee.median,ee.q3,q(ee.mean),q(ee.stdev)].join(","));return de.join(`
`)+`
`}function je(y){const C=new Blob([Be(y)],{type:"text/csv"}),q=URL.createObjectURL(C),me=document.createElement("a");me.href=q,me.download="mask_stats.csv",document.body.appendChild(me),me.click(),me.remove(),URL.revokeObjectURL(q)}const We=y=>{const C=y/1e3;return C>=10?Math.round(C).toLocaleString():C.toFixed(1)};function Ye(y,C){const q=Math.max(...y.map(ee=>ee.volume_mm3)),me=ee=>o&&o.R&&o.R[ee.label]!=null?`rgb(${o.R[ee.label]},${o.G[ee.label]},${o.B[ee.label]})`:"#6b9bd1";let de="";for(const ee of y){const $e=C>0?ee.volume_mm3/C*100:0,fe=q>0?ee.volume_mm3/q*100:0,we=`<span class="stat-val" data-cm3="${We(ee.volume_mm3)}" data-pct="${$e.toFixed(1)}%">${We(ee.volume_mm3)}</span>`,te=`<span class="stat-bar" style="width:${fe.toFixed(2)}%;background:${me(ee)}" data-w-abs="${fe.toFixed(2)}" data-w-pct="${$e.toFixed(2)}"></span>`,ve=(Ze,De)=>`<div><span class="k">${Ze}</span><span class="v">${De}</span></div>`,Ce=ve("min",ee.min)+ve("max",ee.max)+ve("Q1",ee.q1)+ve("Q3",ee.q3)+ve("median",ee.median)+ve("mean",ee.mean.toFixed(2))+ve("SD",ee.stdev.toFixed(2))+ve("voxels",ee.voxels.toLocaleString());de+=`
        <div class="stat-row" role="button" tabindex="0" data-label="${ee.label}" style="cursor:pointer">
          <div class="stat-line">
            <span class="stat-name">${tn(ee.name)}</span>
            <span class="stat-track">${te}</span>
            ${we}
            <button type="button" class="stat-iso" title="Show only this region in the viewer">isolate</button>
          </div>
          <div class="stat-detail" style="display:none">${Ce}</div>
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
          <span class="stat-total" id="statsUnitLabel">total ${We(C)} cm³</span>
        </div>
        <div class="stat-toggle">
          <button type="button" data-mode="cm3" class="active">cm³</button>
          <button type="button" data-mode="pct">% of total</button>
        </div>
        <div id="statsRows">${de}</div>
        <div class="stat-actions">
          <button type="button" id="statsDownloadBtn">Download CSV</button>
        </div>
      </div>`}saveStatsBtn.onclick=function(){if(O.volumes.length<2){window.alert("No segmentation to measure (run a model first).");return}if(O.volumes[1].img instanceof Float32Array){window.alert("Stats need a label segmentation, not probability maps.");return}const y=O.volumes[0].img,C=m||O.volumes[1].img;if(!y||!C||y.length!==C.length){window.alert("Input and segmentation grids do not match.");return}const q=O.volumes[0].hdr.pixDims||[],me=q[1]&&q[2]&&q[3]?q[1]*q[2]*q[3]:1;let de=ne(y,C,me);if(de.length===0){window.alert("No non-background labels found in the segmentation.");return}de=de.slice().sort((fe,we)=>we.volume_mm3-fe.volume_mm3);const ee=de.reduce((fe,we)=>fe+we.volume_mm3,0);Ot("Region volumes",Ye(de,ee));const $e=document.getElementById("statsPanel");$e&&($e.querySelectorAll(".stat-toggle button").forEach(fe=>{fe.onclick=()=>{const we=fe.dataset.mode;$e.querySelectorAll(".stat-toggle button").forEach(te=>te.classList.toggle("active",te===fe)),document.getElementById("statsUnitLabel").textContent=we==="pct"?"100% of segmented volume":`total ${We(ee)} cm³`,$e.querySelectorAll(".stat-row").forEach(te=>{const ve=te.querySelector(".stat-val"),Ce=te.querySelector(".stat-bar");ve.textContent=we==="pct"?ve.dataset.pct:ve.dataset.cm3,Ce.style.width=(we==="pct"?Ce.dataset.wPct:Ce.dataset.wAbs)+"%"})}}),$e.querySelectorAll(".stat-row").forEach(fe=>{const we=()=>{const te=fe.querySelector(".stat-detail");te.style.display=te.style.display==="none"?"grid":"none"};fe.onclick=we,fe.onkeydown=te=>{(te.key==="Enter"||te.key===" ")&&(te.preventDefault(),we())}}),$e.querySelectorAll(".stat-iso").forEach(fe=>{fe.onclick=we=>{we.stopPropagation();const te=parseInt(fe.closest(".stat-row").dataset.label,10);Number.isNaN(te)||be(te);const ve=document.getElementById("appDialog");ve&&ve.open&&ve.close()}}),document.getElementById("statsDownloadBtn").onclick=()=>je(de))};function Ke(){O.volumes.length<=1&&(A=O.volumes[0]||null,h=A&&A.name?A.name:"input.nii.gz",s=null,i=null,z(),modelSelect.value="-1",f(),O.volumes[0]&&opacitySlider0.oninput())}const ke=new Map;function Ne(y){return ce(this,null,function*(){if(ke.has(y))return ke.get(y);const q=yield(yield fetch(y)).json();return ke.set(y,q),q})}function Re(y,C,q=1){let me=0;for(let de=0;de<256;de++)y[de]>0&&me++;return(!C||me!==C.length)&&(e="Failed to Predict Some Labels - "),C.map((de,ee)=>{const $e=ee<256?y[ee]:0,fe=$e>0?`${We($e*q)} cm3`:"Missing";return fe==="Missing"&&(e+=`${de}, `),`${de}   ${fe}`})}function Qe(y,C,q){return ce(this,null,function*(){var te,ve;const me=(te=C.probabilityDisplayMin)!=null?te:.005,{probabilityOverlayAlpha:de=96,probabilityOverlayFloor:ee=192}=C,$e=(q==null?void 0:q.tint)||[255,255,255],fe=`probability-light-${$e.join("-")}-${ee}-${de}`;if(!O.hasColormap(fe)){const[Ce,Ze,De]=$e.map(Se=>Math.round(Se*ee/255));O.addColormap(fe,{R:[Ce,$e[0]],G:[Ze,$e[1]],B:[De,$e[2]],A:[0,de],I:[0,255]})}const we=mo(O.volumes[0],y instanceof Float32Array?y:Float32Array.from(y),(ve=q==null?void 0:q.name)!=null?ve:O.volumes[0].name,{scl_inter:0,scl_slope:1,datatypeCode:16,numBitsPerVoxel:32,cal_min:0,cal_max:1,intent_code:1001},{calMin:me,calMax:1,robustMin:me,robustMax:1,globalMin:0,globalMax:1,colormapType:1,colormap:fe,opacity:Number(opacitySlider1.value),modulateAlpha:1});return we.modulationImage=we.id,yield O.model.addVolume(we),O.volumes.at(-1)})}function at(y,C,q,me){return ce(this,null,function*(){var Ce,Ze,De;if(R(),G(),n=null,o=null,s=q,i=q.type==="Brain_Extraction"&&me||null,q.outputType==="probability"){const Se=Array.isArray(y)?y:[y],Ie=[];for(let ue=0;ue<Se.length;ue++)Ie.push(yield Qe(Se[ue],q,(Ce=q.probabilityTissues)==null?void 0:Ce[ue]));q.probabilityPostprocess==="cat-lite"&&Ie.length===3&&(p=Ie),z(q),yield O.updateGLVolume();return}const de=y instanceof Uint8Array?y:new Uint8Array(y.buffer,y.byteOffset||0,y.byteLength);let ee,$e=null,fe=0,we={calMin:0,calMax:255,robustMin:0,robustMax:255,globalMin:0,globalMax:255};if(q.type==="Brain_Masking"){const Se=["Background","Brain Mask"];n=Se.slice();const Ie=[0,217],ue=[0,119],Ae=[0,33];o={R:Ie,G:ue,B:Ae};const ye={R:Ie,G:ue,B:Ae,labels:Se},Ue="brainchop-label-mask";O.addColormap(Ue,ye),ee=Ue,$e=Hn(ye),fe=1002,we={calMin:0,calMax:1,robustMin:0,robustMax:1,globalMin:0,globalMax:1}}else if(q.colormapPath){const Se=Bn(de),Ie=yield Ne(q.colormapPath);n=Ie.labels?Ie.labels.slice():null,o={R:Ie.R,G:Ie.G,B:Ie.B};const ue=O.volumes[0].hdr.pixDims||[],Ae=ue[1]&&ue[2]&&ue[3]?ue[1]*ue[2]*ue[3]:1,ye=Ie.labels?Re(Se,Ie.labels,Ae):[],Ue=St(dt(dt({R:Ie.R,G:Ie.G,B:Ie.B},Ie.I?{I:Ie.I}:{}),Ie.A?{A:Ie.A}:{}),{labels:ye}),Ee=`brainchop-label-${q.id}`;O.addColormap(Ee,Ue),ee=Ee,$e=Hn(Ue);const re=Math.max(1,((De=(Ze=Ie.R)==null?void 0:Ze.length)!=null?De:256)-1);fe=1002,we={calMin:0,calMax:re,robustMin:0,robustMax:re,globalMin:0,globalMax:re}}else{const Se=Bn(de);we=Rr(Se),ee=C.atlasSelectedColorTable.toLowerCase(),q.type==="Brain_Extraction"&&(ee="copper2"),O.hasColormap(ee)||(ee="actc")}const te=mo(O.volumes[0],de,O.volumes[0].name,{datatypeCode:2,numBitsPerVoxel:8,scl_inter:0,scl_slope:1,cal_min:we.calMin,cal_max:we.calMax,intent_code:fe},St(dt(St(dt({},we),{colormap:ee}),$e?{colormapLabel:$e}:{}),{opacity:Number(opacitySlider1.value)}));yield O.model.addVolume(te);const ve=O.volumes.at(-1);if($e&&ve&&!ve.colormapLabel&&(ve.colormapLabel=$e),z(q),yield O.updateGLVolume(),j()&&n&&n.length>2){const Se=document.getElementById("location");Se&&(Se.innerHTML='<p style="font-size:14px;margin:0;opacity:.75;">Tip: Option/Alt-click a region to show only it — Esc restores all</p>')}})}function kt(y){return ce(this,null,function*(){var C;if(typeof y=="string")try{y=JSON.parse(y)}catch(q){console.error("Failed to parse telemetry data",q);return}y=yield Pr(y,(C=O.view)==null?void 0:C.gl),t=`:: Diagnostics https://github.com/neuroneural/brainchop/issues ::
`;for(const q in y)y[q]!==null&&y[q]!==void 0&&(t+=`${q}: ${y[q]}
`)})}function mt(y="",C=-1,q="",me=[]){y&&(console.log(y),document.getElementById("location").innerHTML=y),isNaN(C)?(memstatus.style.color="red",memstatus.innerHTML="Memory Issue"):C>=0&&(modelProgress.value=C*modelProgress.max),q&&(pn?(vn.push(String(q)),console.warn("[backend]",q)):Ot("Message",tn(String(q)).replace(/\n/g,"<br>"))),me&&Object.keys(me).length>0&&kt(me)}function xt(y){v=y.vox,document.getElementById("location").innerHTML=y.string.split("   ").map(C=>C.trim()).filter(C=>C!=="").map(C=>`<span class="loc-seg">${tn(C)}</span>`).join('<span class="loc-sep">&middot;</span>')}const Ft=new URLSearchParams(window.location.search).get("viewer")==="webgpu"?"webgpu":"webgl2",O=new Do({backend:Ft,matcaps:{Shiny:Vo}});yield O.attachTo("gl1"),console.info("NiiVue viewer backend:",O.backend),O.backgroundColor=[0,0,0,1],O.is3DCrosshairVisible=!0,O.clipPlaneColor=[.7,0,.7,.5],O.gamma=1,O.registerVolumeTransform(Yo),O.isLegendVisible=!1,O.addEventListener("locationChange",y=>xt(y.detail)),O.canvas.addEventListener("click",oe),window.addEventListener("keydown",y=>{y.key==="Escape"&&(document.querySelector("dialog[open]")||(d!==null?(d=null,F()):u!==null&&(u=null,W())))});const wt=O.drawScene.bind(O);O.drawScene=function(y){const C=wt(y);try{I()}catch(q){console.warn("isolation HUD draw failed",q)}return C},O.primaryDragMode=jn.crosshair,O.secondaryDragMode=jn.slicer3D,O.showRender=jo.ALWAYS,O.isYoked3DTo2DZoom=!0,O.crosshairGap=11;{const y=document.getElementById("dragSegmented");y&&y.querySelectorAll("button").forEach(C=>C.classList.toggle("active",parseInt(C.dataset.drag,10)===O.secondaryDragMode))}O.volumeIsNearestInterpolation=!0,yield O.loadVolumes([{url:"./t1_crop.nii.gz"}]),modelSelect.innerHTML="";const bt=document.createElement("option");bt.text="Run Segmentation Model",bt.value="-1",bt.disabled=!0,bt.selected=!0,bt.hidden=!0,modelSelect.appendChild(bt);for(let y=0;y<Yt.length;y++){console.log(`Adding model option: ${Yt[y].modelName}`);const C=document.createElement("option");C.text=Yt[y].modelName,C.value=y,Yt[y].type==="Divider"&&(C.disabled=!0),modelSelect.appendChild(C)}O.addEventListener("volumeLoaded",Ke),Ke(),Tr(O),Fr(O),modelSelect.value="-1",f(),T(-1),yield qr();const ht=new URLSearchParams(window.location.search).get("model");ht!==null&&ht!==""&&Number(ht)>=0&&Number(ht)<Yt.length?(modelSelect.value=String(Number(ht)),f(),Pe()):Zt&&mn&&(window.requestIdleCallback?C=>window.requestIdleCallback(C,{timeout:600}):C=>setTimeout(C,200))(()=>cr(mn))})}function tn(t){return String(t).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function Er(t){const n=(vn.length?vn:[t&&t.message?t.message:String(t||"unknown error")]).map(o=>`<li>${tn(o)}</li>`).join("");Ot("Segmentation failed",`<p>No available backend could run this model on this device.</p>
     <ul style="margin:0 0 4px 1.1em;padding:0;font-size:0.92em;line-height:1.45">${n}</ul>
     <p style="font-size:0.88em;color:#9aa4af">Full details are in the browser console and under Diagnostics.</p>`)}function Ot(t,e,n={}){const o=document.getElementById("appDialog"),s=document.getElementById("dialogTitle"),i=document.getElementById("dialogMessage"),r=document.getElementById("dialogCloseBtn");if(!o)return;s.textContent=t,i.innerHTML=e,r.style.display=n.hideClose?"none":"",r.onclick=()=>o.close(),o.classList.toggle("dialog-save",!!n.saveMode);const a=document.getElementById("dialogXBtn");a&&(a.onclick=()=>o.close()),o.showModal()}function Dr(){return ce(this,null,function*(){try{const e=yield(yield fetch("https://api.github.com/repos/neuroneural/brainchop")).json();document.getElementById("star-count").textContent=e.stargazers_count}catch(t){console.error("Error fetching star count:",t)}})}(function(){return ce(this,null,function*(){yield Nr(),yield Dr()})})();export{wo as a,bo as d,_o as p};
