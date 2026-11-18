const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./dkatlas24_int8_v3_runner-75F31Su0.js","./vendor-niivue-BztUWqGV.js","./vendor-CKvLRpOF.js","./vendor-math-oqRZD8Fx.js"])))=>i.map(i=>d[i]);
var Ao=Object.defineProperty,Bo=Object.defineProperties;var Co=Object.getOwnPropertyDescriptors;var Rn=Object.getOwnPropertySymbols;var vs=Object.prototype.hasOwnProperty,ys=Object.prototype.propertyIsEnumerable;var Vt=Math.pow,ws=(e,t,n)=>t in e?Ao(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,$t=(e,t)=>{for(var n in t||(t={}))vs.call(t,n)&&ws(e,n,t[n]);if(Rn)for(var n of Rn(t))ys.call(t,n)&&ws(e,n,t[n]);return e},Rt=(e,t)=>Bo(e,Co(t));var xs=(e,t)=>{var n={};for(var s in e)vs.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&Rn)for(var s of Rn(e))t.indexOf(s)<0&&ys.call(e,s)&&(n[s]=e[s]);return n};var ve=(e,t,n)=>new Promise((s,o)=>{var i=f=>{try{a(n.next(f))}catch(l){o(l)}},r=f=>{try{a(n.throw(f))}catch(l){o(l)}},a=f=>f.done?s(f.value):Promise.resolve(f.value).then(i,r);a((n=n.apply(e,t)).next())});import{z as Fn,$ as zo,t as Fo,L as $s,Y as Lo,M as Ss,a as Uo,_ as Wo}from"./vendor-niivue-BztUWqGV.js";import{g as Ro}from"./vendor-CKvLRpOF.js";import{l as Go,n as Eo,p as Io}from"./vendor-math-oqRZD8Fx.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();const qo="modulepreload",To=function(e,t){return new URL(e,t).href},Ps={},gt=function(t,n,s){let o=Promise.resolve();if(n&&n.length>0){let l=function(c){return Promise.all(c.map(g=>Promise.resolve(g).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};const r=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),f=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));o=l(n.map(c=>{if(c=To(c,s),c in Ps)return;Ps[c]=!0;const g=c.endsWith(".css"),d=g?'[rel="stylesheet"]':"";if(s)for(let p=r.length-1;p>=0;p--){const m=r[p];if(m.href===c&&(!g||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${d}`))return;const u=document.createElement("link");if(u.rel=g?"stylesheet":qo,g||(u.as="script"),u.crossOrigin="",u.href=c,f&&u.setAttribute("nonce",f),document.head.appendChild(u),g)return new Promise((p,m)=>{u.addEventListener("load",p),u.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(r){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=r,window.dispatchEvent(a),!a.defaultPrevented)throw r}return o.then(r=>{for(const a of r||[])a.status==="rejected"&&i(a.reason);return t().catch(i)})},_n=new WeakMap;class No{getLabelMeta(t){return _n.get(t)||null}idx(t,n,s,o){return s*o[0]*o[1]+n*o[0]+t}check_previous_slice(t,n,s,o,i,r,a,f,l,c){let g=0;if(!i)return 0;const d=t[this.idx(s,o,i,r)];if(a>=6){const u=this.idx(s,o,i-1,r);d===t[u]&&(l[g++]=n[u])}if(a>=18){if(s){const u=this.idx(s-1,o,i-1,r);d===t[u]&&(l[g++]=n[u])}if(o){const u=this.idx(s,o-1,i-1,r);d===t[u]&&(l[g++]=n[u])}if(s<r[0]-1){const u=this.idx(s+1,o,i-1,r);d===t[u]&&(l[g++]=n[u])}if(o<r[1]-1){const u=this.idx(s,o+1,i-1,r);d===t[u]&&(l[g++]=n[u])}}if(a===26){if(s&&o){const u=this.idx(s-1,o-1,i-1,r);d===t[u]&&(l[g++]=n[u])}if(s<r[0]-1&&o){const u=this.idx(s+1,o-1,i-1,r);d===t[u]&&(l[g++]=n[u])}if(s&&o<r[1]-1){const u=this.idx(s-1,o+1,i-1,r);d===t[u]&&(l[g++]=n[u])}if(s<r[0]-1&&o<r[1]-1){const u=this.idx(s+1,o+1,i-1,r);d===t[u]&&(l[g++]=n[u])}}return g?(this.fill_tratab(f,l,g,c),l[0]):0}do_initial_labelling(t,n,s,o=null){const i=n[0]|0,r=n[1]|0,a=n[2]|0,f=i*r,l=f*a;let c=1;const g=8192;let d=g,u=new Uint32Array(d),p;if(s===6&&o&&o.il&&o.il.length===l){if(p=o.il,o.dirty)p.fill(0);else if(o.runs&&o.runLen>0){const _=o.runs,h=o.runLen;for(let w=0;w<h;w+=2)p.fill(0,_[w],_[w+1])}}else p=new Uint32Array(l),s===6&&o&&(o.il=p,o.runs=null,o.runLen=0,o.dirty=!1);if(s===6){o&&(o.dirty=!0);const _=(t instanceof Uint8Array||t instanceof Uint8ClampedArray)&&(t.byteOffset&3)===0&&(i&3)===0&&t.length>=l?new Uint32Array(t.buffer,t.byteOffset,l>>2):null;let h=o&&o.runs?o.runs:new Uint32Array(8192),w=h.length,S=0,b=0,P=0,F=0,$=-1,x=-1,G=a,M=-1;for(let A=0;A<a;A++){const T=A*f;for(let L=0;L<r;L++){const B=T+L*i;let N=0;if(_){const te=B+i>>2;let le=B>>2;for(;le<te&&_[le]===0;)le++;if(le===te)continue;N=(le<<2)-B}let U=!1;for(;N<i;N++){const te=B+N;if(_&&!U&&(N&3)===0&&_[te>>2]===0){N+=3;continue}const le=t[te];if(le===0){U&&(h[S++]=te,U=!1);continue}if(!U){if(S+2>w){w<<=1;const I=new Uint32Array(w);I.set(h),h=I}h[S++]=te,U=!0}$<0&&($=te,G=A),x=te,M=A;let E=0;if(A>0&&t[te-f]===le&&(b=p[te-f],E=1),N>0&&t[te-1]===le){const I=p[te-1];E===0?b=I:E===1?P=I:F=I,E++}if(L>0&&t[te-i]===le){const I=p[te-i];E===0?b=I:E===1?P=I:F=I,E++}if(E===0){if(p[te]=c,c>=d){d+=g;const I=new Uint32Array(d);I.set(u),u=I}u[c-1]=c,c++}else if(p[te]=b,E===2&&P!==b){let I=b;for(;u[I-1]!==I;)I=u[I-1];let D=P;for(;u[D-1]!==D;)D=u[D-1];const ue=I<D?I:D;u[I-1]=ue,u[D-1]=ue}else if(E===3&&(P!==b||F!==b)){let I=b;for(;u[I-1]!==I;)I=u[I-1];let D=P;for(;u[D-1]!==D;)D=u[D-1];let ue=F;for(;u[ue-1]!==ue;)ue=u[ue-1];let O=I<D?I:D;ue<O&&(O=ue),u[I-1]=O,u[D-1]=O,u[ue-1]=O}}U&&(h[S++]=B+i)}}for(let A=0;A<c-1;A++){let T=A;for(;u[T]!==T+1;)T=u[T]-1;u[A]=T+1}return o&&(o.runs=h,o.runLen=S,o.dirty=!1),this._lastInitialRange={conn:6,fgStart:$,fgEnd:x,minSl:G,maxSl:M,runs:h,runLen:S},[c-1,u,p]}const m=new Uint32Array(32),v=new Uint32Array(32),k=new Uint32Array(27);for(let _=0;_<a;_++)for(let h=0;h<r;h++)for(let w=0;w<i;w++){let S=0;const b=t[this.idx(w,h,_,n)];if(b!==0){if(k[0]=this.check_previous_slice(t,p,w,h,_,n,s,u,m,v),k[0]&&(S+=1),s>=6){if(w){const P=this.idx(w-1,h,_,n);b===t[P]&&(k[S++]=p[P])}if(h){const P=this.idx(w,h-1,_,n);b===t[P]&&(k[S++]=p[P])}}if(s>=18){if(h&&w){const P=this.idx(w-1,h-1,_,n);b===t[P]&&(k[S++]=p[P])}if(h&&w<i-1){const P=this.idx(w+1,h-1,_,n);b===t[P]&&(k[S++]=p[P])}}if(S)p[this.idx(w,h,_,n)]=k[0],this.fill_tratab(u,k,S,v);else{if(p[this.idx(w,h,_,n)]=c,c>=d){d+=g;const P=new Uint32Array(d);P.set(u),u=P}u[c-1]=c,c++}}}for(let _=0;_<c-1;_++){let h=_;for(;u[h]!==h+1;)h=u[h]-1;u[_]=h+1}return this._lastInitialRange=null,[c-1,u,p]}fill_tratab(t,n,s,o){let r=2147483647;for(let a=0;a<s;a++){let f=n[a];for(;t[f-1]!==f;)f=t[f-1];o[a]=f,r=Math.min(r,f)}for(let a=0;a<s;a++)t[o[a]-1]=r}translate_labels(t,n,s,o,i=null,r=null){const a=n[0]*n[1]*n[2];if(r&&(o===0||r.fgStart<0))return i&&(this._lastMeta={conn:r.conn,cl:0,fgStart:0,fgEnd:-1,minSl:0,maxSl:-1,ls2bw:new Uint32Array(1),sumls:new Uint32Array(1),distinctFgClasses:0,bw:i}),[0,t];let f=0;for(let m=0;m<o;m++)s[m]>f&&(f=s[m]);const l=new Uint32Array(f+1),c=i&&r?new Uint32Array(o+1):null,g=i&&r?new Uint32Array(o+1):null,d=r?r.fgStart:0,u=r?r.fgEnd:a-1;let p=0;if(r&&r.runs){const m=r.runs,v=r.runLen;for(let k=0;k<v;k+=2){const _=m[k],h=m[k+1];for(let w=_;w<h;w++){const S=s[t[w]-1];let b=l[S];b||(p+=1,b=p,l[S]=b,c&&(c[b]=i[w])),t[w]=b,g&&g[b]++}}}else for(let m=d;m<=u;m++){const v=t[m];if(v){const k=s[v-1];let _=l[k];_||(p+=1,_=p,l[k]=_,c&&(c[_]=i[m])),t[m]=_,g&&g[_]++}}if(i&&r){const m=c.slice(0,p+1),v=g.slice(0,p+1);let k=0;if(p>0){const _=m[1];k=1;for(let h=2;h<=p;h++)if(m[h]!==_){k=2;break}}this._lastMeta={conn:r.conn,cl:p,fgStart:r.fgStart,fgEnd:r.fgEnd,minSl:r.minSl,maxSl:r.maxSl,runs:r.runs,runLen:r.runLen,ls2bw:m,sumls:v,distinctFgClasses:k,bw:i}}return[p,t]}neighbor_winners(t,n,s,o,i=null,r=null){const a=n[0],f=n[1],l=n[2],c=a*f,g=!!(r&&i);let d=!1;for(let w=1;w<=o;w++)if(!s[w]){d=!0;break}if(!d)return g&&console.log("[relabel] 0/0 suppressed components resolved within their own class family (0 fell back to the unrestricted neighbour vote)"),new Uint32Array(o+1);const u=g?new Int32Array(o+1).fill(-1):null,p=new Map,m=(w,S)=>{let b=p.get(w);b||(b=new Map,p.set(w,b)),b.set(S,(b.get(S)||0)+1)},v=_n.get(t),k=v&&v.cl===o&&t.length===c*l;if(k&&v.runs){const w=v.runs,S=v.runLen;for(let b=0;b<S;b+=2){const P=w[b],F=w[b+1],$=P/c|0,x=P-$*c,G=x/a|0;let M=x-G*a;for(let A=P;A<F;A++,M++){const T=t[A];if(s[T])continue;g&&u[T]<0&&(u[T]=r(i[A]));let L;M>0&&(L=s[t[A-1]])&&m(T,L),M<a-1&&(L=s[t[A+1]])&&m(T,L),G>0&&(L=s[t[A-a]])&&m(T,L),G<f-1&&(L=s[t[A+a]])&&m(T,L),$>0&&(L=s[t[A-c]])&&m(T,L),$<l-1&&(L=s[t[A+c]])&&m(T,L)}}}else{const w=k?v.minSl:0,S=k?v.maxSl:l-1;let b=w*c;for(let P=w;P<=S;P++)for(let F=0;F<f;F++)for(let $=0;$<a;$++,b++){const x=t[b];if(x===0||s[x])continue;g&&u[x]<0&&(u[x]=r(i[b]));let G;$>0&&(G=s[t[b-1]])&&m(x,G),$<a-1&&(G=s[t[b+1]])&&m(x,G),F>0&&(G=s[t[b-a]])&&m(x,G),F<f-1&&(G=s[t[b+a]])&&m(x,G),P>0&&(G=s[t[b-c]])&&m(x,G),P<l-1&&(G=s[t[b+c]])&&m(x,G)}}const _=new Uint32Array(o+1).fill(0);let h=0;for(const[w,S]of p){const b=g?u[w]:0;let P=0,F=0;if(b>0){for(const[$,x]of S)r($)===b&&(x>F||x===F&&(P===0||$<P))&&(F=x,P=$);P&&h++}if(!P)for(const[$,x]of S)(x>F||x===F&&(P===0||$<P))&&(F=x,P=$);_[w]=P}return g&&console.log(`[relabel] ${h}/${p.size} suppressed components resolved within their own class family (${p.size-h} fell back to the unrestricted neighbour vote)`),_}finalize_volume(t,n,s,o,i,r=null,a=null,f=!1){const l=t.length,c=i?this.neighbor_winners(t,n,s,o,r,a):null,g=c?new Uint32Array(o+1):s;let d=0;for(let _=1;_<=o;_++){let h=s[_];c&&(h||(h=c[_]),g[_]=h),h>d&&(d=h)}const u=_n.get(t),p=u&&u.cl===o&&u.ls2bw.length===o+1&&u.fgEnd<l;let m=0;if(p&&u.runs){const _=u.runs,h=u.runLen;for(let b=1;b<=o;b++)u.sumls[b]>0&&g[b]>m&&(m=g[b]);if(u.bw===r&&r instanceof Uint8Array&&d<=255){const b=new Uint8Array(o+1);let P=!1;for(let $=1;$<=o;$++)u.sumls[$]>0&&g[$]!==u.ls2bw[$]&&(b[$]=1,P=!0);const F=f?r:r.slice();if(P)for(let $=0;$<h;$+=2){const x=_[$],G=_[$+1];for(let M=x;M<G;M++){const A=t[M];b[A]&&(F[M]=g[A])}}return[m,F]}const S=r instanceof Uint8Array&&d<=255?new Uint8Array(l):new Uint32Array(l);for(let b=0;b<h;b+=2){const P=_[b],F=_[b+1];for(let $=P;$<F;$++){const x=g[t[$]];x&&(S[$]=x)}}return[m,S]}const k=r instanceof Uint8Array&&d<=255?new Uint8Array(l):new Uint32Array(l);if(p){if(u.fgStart>=0&&u.fgEnd>=u.fgStart)for(let _=u.fgStart;_<=u.fgEnd;_++){const h=t[_];if(h!==0){const w=g[h];w&&(k[_]=w,w>m&&(m=w))}}}else for(let _=0;_<l;_++){const h=t[_];if(h!==0){const w=g[h];w&&(k[_]=w,w>m&&(m=w))}}return[m,k]}diagnose_components(t,n,s,o,i={}){var $,x,G;const r=($=i.topN)!=null?$:50,a=(x=i.minSize)!=null?x:1,f=(G=i.label)!=null?G:"diag",l=o[0],c=o[1],g=o[2],d=l*c,u=new Uint32Array(n+1),p=new Uint32Array(n+1);for(let M=0;M<t.length;M++){const A=s[M];A&&(u[A]=t[M],p[A]++)}const m=new Map,v=new Uint32Array(n+1),k=new Uint32Array(n+1),_=(M,A)=>{let T=m.get(M);T||(T=new Map,m.set(M,T)),T.set(A,(T.get(A)||0)+1)};for(let M=0;M<g;M++)for(let A=0;A<c;A++)for(let T=0;T<l;T++){const L=M*d+A*l+T,B=s[L];if(!B)continue;const N=u[B],U=te=>{const le=s[te];if(le===B)return;k[B]++;const E=le?u[le]:0;E===0?v[B]++:E!==N&&_(B,E)};T>0&&U(L-1),T<l-1&&U(L+1),A>0&&U(L-l),A<c-1&&U(L+l),M>0&&U(L-d),M<g-1&&U(L+d)}const h=new Map,w=new Map;for(let M=1;M<=n;M++){const A=u[M];h.set(A,(h.get(A)||0)+1),(!w.has(A)||p[M]>w.get(A))&&w.set(A,p[M])}const S=[];for(let M=1;M<=n;M++){if(p[M]<a)continue;const A=u[M],T=m.get(M);let L=0,B=0,N=0;if(T)for(const[te,le]of T)N+=le,le>B&&(B=le,L=te);const U=k[M]||1;S.push({comp:M,class:A,size:p[M],largestOfClass:p[M]===w.get(A)?"Y":"n",compsInClass:h.get(A),domNeighbor:L,domFracForeign:N?+(B/N).toFixed(2):0,domFracBoundary:+(B/U).toFixed(2),bgFrac:+(v[M]/U).toFixed(2)})}S.sort((M,A)=>A.domFracForeign-M.domFracForeign||A.size-M.size);const b=(M,A)=>{const T=A.map(B=>Math.max(B.h.length,...M.map(N=>String(N[B.k]).length))),L=B=>B.map((N,U)=>String(N).padStart(T[U])).join("  ");return[L(A.map(B=>B.h)),...M.map(B=>L(A.map(N=>B[N.k])))].join(`
`)},P=[{k:"comp",h:"comp"},{k:"class",h:"class"},{k:"size",h:"size"},{k:"largestOfClass",h:"lrg"},{k:"compsInClass",h:"nComp"},{k:"domNeighbor",h:"domNbr"},{k:"domFracForeign",h:"encF"},{k:"domFracBoundary",h:"encB"},{k:"bgFrac",h:"bgF"}];console.log(`[${f}] total components=${n}, distinct classes=${h.size}
[${f}] island candidates (encF≈1 + small size + lrg=n ⇒ swallowed island):
`+b(S.slice(0,r),P));const F=[...h.entries()].map(([M,A])=>({class:M,components:A,maxCompSize:w.get(M)})).sort((M,A)=>A.components-M.components);return console.log(`[${f}] per-class component counts (components=1 ⇒ fully connected):
`+b(F.slice(0,30),[{k:"class",h:"class"},{k:"components",h:"comps"},{k:"maxCompSize",h:"maxSize"}])),S}_collectComponentStats(t,n,s){const o=_n.get(s);if(o&&o.cl===n&&o.bw===t&&s.length===t.length)return[o.ls2bw,o.sumls];const i=t.length,r=new Uint32Array(n+1),a=new Uint32Array(n+1);for(let f=0;f<i;f++){const l=s[f];l>0&&(r[l]=t[f],a[l]++)}return[r,a]}_buildKeptMap(t,n,s,o,i){const r=new Uint32Array(s+1);let a=0;for(let l=1;l<=s;l++)t[l]>a&&(a=t[l]);const f=o==="all";if(a<=65535){const l=new Uint32Array(a+1),c=new Uint32Array(a+1);for(let g=1;g<=s;g++){const d=t[g];if(d!==0)if(f||o&&o.has&&o.has(d)){const u=n[g];(!c[d]||(i?u>=l[d]:u>l[d]))&&(l[d]=u,c[d]=g)}else r[g]=d}for(let g=1;g<=a;g++){const d=c[g];d>0&&(r[d]=g)}}else{const l=new Map;for(let c=1;c<=s;c++){const g=t[c];if(g!==0)if(f||o&&o.has&&o.has(g)){const d=n[c],u=l.get(g);(!u||(i?d>=u.sz:d>u.sz))&&l.set(g,{c,sz:d})}else r[c]=g}for(const[c,{c:g}]of l)r[g]=c}return r}largest_original_cluster_labels(t,n,s,o=null,i=!1,r=null,a=!1){const[f,l]=this._collectComponentStats(t,n,s),c=this._buildKeptMap(f,l,n,"all",!0);return this.finalize_volume(s,o,c,n,i,t,r,a)}filter_clusters(t,n,s,o,i=null,r=!1,a=null,f=!1){const[l,c]=this._collectComponentStats(t,n,s),g=this._buildKeptMap(l,c,n,o,!1);return this.finalize_volume(s,i,g,n,r,t,a,f)}filter_clusters_by_ratio(t,n,s,o,i=null,r=!1,a=null){const f=t.length,l=new Uint32Array(n+1).fill(0),c=new Uint32Array(n+1).fill(0);for(let p=0;p<f;p++){const m=s[p];m>0&&(l[m]===0&&(l[m]=t[p]),c[m]++)}const g=new Map;for(let p=1;p<=n;p++){const m=l[p],v=c[p];(!g.has(m)||v>g.get(m))&&g.set(m,v)}const d=new Uint8Array(n+1).fill(0);for(let p=1;p<=n;p++){const m=l[p],v=c[p],k=g.get(m)||0;v>=k*o&&(d[p]=1)}const u=new Uint32Array(n+1).fill(0);for(let p=1;p<=n;p++)d[p]&&(u[p]=l[p]);return this.finalize_volume(s,i,u,n,r,t,a)}_binaryComponentsFromLabels(t,n,s,o,i=!1){const r=o[0]|0,a=o[1]|0,f=o[2]|0,l=r*a,c=_n.get(s),g=c&&c.cl===n&&s.length===l*f&&(!i||c.bw===t);if(g&&c.conn===6&&c.distinctFgClasses<=1){const _=new Uint32Array(n+1);let h=0,w=0;for(let S=1;S<=n;S++){_[S]=S;const b=c.sumls[S];b>0&&b>=w&&(w=b,h=S)}return{parent:_,compSize:c.sumls,compClass:i?c.ls2bw:null,bestRoot:h}}const d=g?c.sumls:new Uint32Array(n+1),u=g?i?c.ls2bw:null:i?new Uint32Array(n+1):null,p=new Uint32Array(n+1);for(let _=1;_<=n;_++)p[_]=_;if(g&&c.conn===6&&c.runs&&c.bw===t){const _=(S,b)=>{for(;p[S]!==S;)p[S]=p[p[S]],S=p[S];for(;p[b]!==b;)p[b]=p[p[b]],b=p[b];S!==b&&(S<b?p[b]=S:p[S]=b)},h=c.runs,w=c.runLen;for(let S=0;S<w;S+=2){const b=h[S],P=h[S+1],F=b/l|0,$=b-F*l,x=$/r|0;let G=$-x*r;for(let M=b;M<P;M++,G++){const A=t[M];let T=0;if(F>0){const L=t[M-l];L!==0&&L!==A&&(T=s[M],_(T,s[M-l]))}if(x>0){const L=t[M-r];L!==0&&L!==A&&(T||(T=s[M]),_(T,s[M-r]))}if(G>0){const L=t[M-1];L!==0&&L!==A&&(T||(T=s[M]),_(T,s[M-1]))}}}}else{const _=g?c.minSl:0,h=g?c.maxSl:f-1;let w=_*l;for(let S=_;S<=h;S++)for(let b=0;b<a;b++)for(let P=0;P<r;P++,w++){const F=s[w];if(F===0)continue;g||(d[F]++,u&&u[F]===0&&(u[F]=t[w]));let $=F;for(;p[$]!==$;)p[$]=p[p[$]],$=p[$];if(S>0){const x=s[w-l];if(x!==0&&x!==F){let G=x;for(;p[G]!==G;)p[G]=p[p[G]],G=p[G];$!==G&&($<G?p[G]=$:(p[$]=G,$=G))}}if(b>0){const x=s[w-r];if(x!==0&&x!==F){let G=x;for(;p[G]!==G;)p[G]=p[p[G]],G=p[G];$!==G&&($<G?p[G]=$:(p[$]=G,$=G))}}if(P>0){const x=s[w-1];if(x!==0&&x!==F){let G=x;for(;p[G]!==G;)p[G]=p[p[G]],G=p[G];$!==G&&($<G?p[G]=$:p[$]=G)}}}}const m=new Uint32Array(n+1);for(let _=1;_<=n;_++){let h=_;for(;p[h]!==h;)h=p[h];p[_]=h,m[h]+=d[_]}let v=0,k=0;for(let _=1;_<=n;_++){const h=m[_];h>0&&h>=k&&(k=h,v=_)}return{parent:p,compSize:d,compClass:u,bestRoot:v}}applyLargestBinaryMaskInPlace(t,n,s,o){const i=t.length;if(n===0)return t.fill(0),t;const r=_n.get(s),a=r&&r.cl===n&&s.length===i;if(a&&r.conn===6&&r.distinctFgClasses<=1){let c=0,g=0;for(let d=1;d<=n;d++){const u=r.sumls[d];u>0&&u>=g&&(g=u,c=d)}if(r.runs&&r.bw===t){if(n>1){const d=r.runs,u=r.runLen;for(let p=0;p<u;p+=2){const m=d[p],v=d[p+1];for(let k=m;k<v;k++)s[k]!==c&&(t[k]=0)}}return t}if(r.fgStart>0&&t.fill(0,0,r.fgStart),r.fgEnd>=r.fgStart){for(let d=r.fgStart;d<=r.fgEnd;d++)s[d]!==c&&(t[d]=0);r.fgEnd+1<i&&t.fill(0,r.fgEnd+1)}else t.fill(0);return t}const{parent:f,bestRoot:l}=this._binaryComponentsFromLabels(t,n,s,o,!1);if(a&&r.runs&&r.bw===t){const c=r.runs,g=r.runLen;for(let d=0;d<g;d+=2){const u=c[d],p=c[d+1];for(let m=u;m<p;m++)f[s[m]]!==l&&(t[m]=0)}return t}if(a&&r.fgEnd>=r.fgStart){r.fgStart>0&&t.fill(0,0,r.fgStart);for(let c=r.fgStart;c<=r.fgEnd;c++){const g=s[c];(g===0||f[g]!==l)&&(t[c]=0)}r.fgEnd+1<i&&t.fill(0,r.fgEnd+1)}else for(let c=0;c<i;c++){const g=s[c];(g===0||f[g]!==l)&&(t[c]=0)}return t}filterHierarchicalFromLabels(t,n,s,o,i="all",r=!0,a=!1,f=null,l=!1){if(n===0)return[0,t instanceof Uint8Array?l?t:new Uint8Array(t.length):new Uint32Array(t.length)];const{parent:c,compSize:g,compClass:d,bestRoot:u}=this._binaryComponentsFromLabels(t,n,s,o,!0),p=new Uint32Array(n+1);for(let v=1;v<=n;v++)c[v]===u&&(p[v]=d[v]);const m=this._buildKeptMap(p,g,n,i,r);return this.finalize_volume(s,o,m,n,a,t,f,l)}filter18ClassFromLabels(t,n,s,o,i,r=!1,a=null,f=!1){return this.filterHierarchicalFromLabels(t,n,s,o,i,!1,r,a,f)}bwlabel(t,n,s=26,o=!1,i=!1,r=null){const a=Date.now(),f=n[0]*n[1]*n[2];if(![6,18,26].includes(s))return console.log("bwlabel: conn must be 6, 18 or 26."),[0,new Uint32Array(f)];if(n[0]<2||n[1]<2||n[2]<1)return console.log("bwlabel: img must be 2 or 3-dimensional"),[0,new Uint32Array(f)];let l;if(o){l=new Uint8Array(f);for(let m=0;m<f;m++)t[m]!==0&&(l[m]=1)}else t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Uint16Array||t instanceof Uint32Array||t instanceof Int8Array||t instanceof Int16Array||t instanceof Int32Array?t.length===f?l=t:(l=new Uint32Array(f),l.set(t.subarray(0,f))):(l=new Uint32Array(f),l.set(t));this._lastInitialRange=null,this._lastMeta=null;let[c,g,d]=this.do_initial_labelling(l,n,s,r);g===void 0&&(g=new Uint32Array(0));const[u,p]=this.translate_labels(d,n,g,c,l,this._lastInitialRange);if(this._lastMeta&&_n.set(p,this._lastMeta),console.log(s+" neighbor clustering into "+u+" regions in "+(Date.now()-a)+"ms"),i){const[m,v]=this.largest_original_cluster_labels(l,u,p);return[m,v]}return[u,p]}filter_clusters_by_rank(t,n,s,o,i=0,r=null,a=!1,f=null,l=!1,c=null){const g=t.length,d=new Uint32Array(n+1).fill(0),u=new Uint32Array(n+1).fill(0),p=f!=null&&Array.isArray(r)&&r.length===3,m=p?r[0]:0,v=p?r[1]:0,k=p?new Int32Array(n+1).fill(2147483647):null,_=p?new Int32Array(n+1).fill(-1):null,h=p?new Int32Array(n+1).fill(2147483647):null,w=p?new Int32Array(n+1).fill(-1):null,S=p?new Int32Array(n+1).fill(2147483647):null,b=p?new Int32Array(n+1).fill(-1):null;for(let M=0;M<g;M++){const A=s[M];if(A>0&&(d[A]===0&&(d[A]=t[M]),u[A]++,p)){const T=M%m,L=M/m|0,B=L%v,N=L/v|0;T<k[A]&&(k[A]=T),T>_[A]&&(_[A]=T),B<h[A]&&(h[A]=B),B>w[A]&&(w[A]=B),N<S[A]&&(S[A]=N),N>b[A]&&(b[A]=N)}}let P=null,F=0;if(p){let M=-1;for(let U=1;U<=n;U++)u[U]>M&&(M=u[U],F=U);const A=Math.max(2,Math.ceil(f)+4),T=m*v,L=new Int16Array(g).fill(-1);let B=[];for(let U=0;U<g;U++)s[U]===F&&(L[U]=0,B.push(U));for(let U=1;U<=A&&B.length;U++){const te=[];for(let le=0;le<B.length;le++){const E=B[le],I=E%m,ue=(E/m|0)%v;I>0&&L[E-1]===-1&&(L[E-1]=U,te.push(E-1)),I<m-1&&L[E+1]===-1&&(L[E+1]=U,te.push(E+1)),ue>0&&L[E-m]===-1&&(L[E-m]=U,te.push(E-m)),ue<v-1&&L[E+m]===-1&&(L[E+m]=U,te.push(E+m)),E-T>=0&&L[E-T]===-1&&(L[E-T]=U,te.push(E-T)),E+T<g&&L[E+T]===-1&&(L[E+T]=U,te.push(E+T))}B=te}const N=A+1;P=new Float64Array(n+1).fill(N);for(let U=0;U<g;U++){const te=s[U];if(te>0&&te!==F){const le=L[U]>=0?L[U]:N;le<P[te]&&(P[te]=le)}}l&&console.log(`[rank-filter] brain comp=${F} size=${M} bbox A[${k[F]},${_[F]}] B[${h[F]},${w[F]}] C[${S[F]},${b[F]}] | maxGap=${f} scan=${A}`)}const $=new Map;for(let M=1;M<=n;M++){const A=d[M],T=u[M];$.has(A)||$.set(A,[]),$.get(A).push({i:M,size:T})}const x=new Uint8Array(n+1).fill(0);for(const[M,A]of $.entries()){A.sort((N,U)=>U.size-N.size);const T=A.length?A[0].size:0,L=i>0?T*i:0,B=Math.min(A.length,o);for(let N=0;N<B;N++){const U=A[N];if(U.size<L){l&&N>0&&console.log(`[rank-filter] class ${M} #${N}: size=${U.size} DROP (below ${(i*100).toFixed(0)}% floor)`);break}if(N>0&&p){const te=P[U.i],le=te<=f;if(l&&console.log(`[rank-filter] class ${M} #${N}: size=${U.size} surfDist=${te} -> ${le?"KEEP":"DROP (too far)"}`),!le)continue}x[U.i]=1}}const G=new Uint32Array(n+1).fill(0);for(let M=1;M<=n;M++)x[M]&&(G[M]=d[M]);return this.finalize_volume(s,r,G,n,a,t,c)}}function Oo(e){if(!(e!=null&&e.length))throw new Error("Segmentation volume is empty.");let t=0;if((e instanceof Uint8Array||e instanceof Uint8ClampedArray)&&(e.byteOffset&3)===0&&e.length>=4){const n=e.length>>2,s=new Uint32Array(e.buffer,e.byteOffset,n);for(let o=0;o<n;o++){const i=s[o];i!==0&&(i&255&&t++,i&65280&&t++,i&16711680&&t++,i&4278190080&&t++)}for(let o=n<<2;o<e.length;o++)e[o]!==0&&t++}else if(e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Uint16Array||e instanceof Uint32Array)for(let n=0;n<e.length;n++)e[n]!==0&&t++;else for(let n=0;n<e.length;n++){const s=e[n];if(!Number.isFinite(s)||s<0)throw new Error(`Segmentation contains an invalid label at voxel ${n}: ${s}.`);s!==0&&t++}if(t===0)throw new Error("Segmentation volume contains no foreground labels.");if(t>e.length*.95)throw new Error(`Segmentation fills ${(100*t/e.length).toFixed(1)}% of the volume; GPU output is unusable.`)}const Do={il:null,runs:null,runLen:0,dirty:!1};function Vo(e,t=.05,n=.95){const s=e.length,o=Math.min(1e5,s),i=Math.floor(o*t),r=Math.ceil(o*n)-1;if(e instanceof Uint8Array||e instanceof Uint8ClampedArray){if(o===0)return{qmin:0,qmax:0};const f=new Uint32Array(256);if(o>=s)for(let u=0;u<s;u++)f[e[u]]++;else for(let u=0;u<o;u++)f[e[Math.floor(Math.random()*s)]]++;let l=0,c=0,g=0,d=!1;for(let u=0;u<256;u++){const p=f[u];if(p!==0&&(l+=p,!d&&l>i&&(c=u,d=!0),l>r)){g=u;break}}return{qmin:c,qmax:g}}const a=new Float64Array(o);if(o>=s)a.set(e);else for(let f=0;f<o;f++){const l=Math.floor(Math.random()*s);a[f]=e[l]}return a.sort(),{qmin:a[i],qmax:a[r]}}function Ho(e){const t=e.length;if(t===0)return{min:0,max:0};let n=e[0],s=e[0];if(e instanceof Uint8Array||e instanceof Uint8ClampedArray){for(let o=1;o<t;o++){const i=e[o];if(i<n?n=i:i>s&&(s=i),n===0&&s===255)break}return{min:n,max:s}}for(let o=1;o<t;o++){const i=e[o];i<n&&(n=i),i>s&&(s=i)}return{min:n,max:s}}function ks(e,t,n){const s=e.length,o=new Float32Array(s);if(e instanceof Uint8Array||e instanceof Uint8ClampedArray){const i=new Float32Array(256);for(let r=0;r<256;r++)i[r]=(r-t)/n;for(let r=0;r<s;r++)o[r]=i[e[r]];return o}for(let i=0;i<s;i++)o[i]=(e[i]-t)/n;return o}function Xs(e,t,n,s){const o=t[0]|0,i=t[1]|0,r=t[2]|0,a=o*i*r,f=new s(a);if(n[0]===2&&n[1]===1&&n[2]===0&&a===e.length){const v=i*r,k=i*o,_=16;for(let h=0;h<i;h++){const w=h*r,S=h*o;for(let b=0;b<o;b+=_){const P=Math.min(b+_,o);for(let F=0;F<r;F+=_){const $=Math.min(F+_,r);for(let x=b;x<P;x++){let G=x*v+w+F,M=F*k+S+x;for(let A=F;A<$;A++,G++,M+=k)f[M]=e[G]}}}}return f}const l=[o,i,r],c=[l[n[0]],l[n[1]],l[n[2]]],g=[i*r,r,1],d=g[n[0]],u=g[n[1]],p=g[n[2]];let m=0;for(let v=0;v<c[0];v++){const k=v*d;for(let _=0;_<c[1];_++){const h=k+_*u;for(let w=0;w<c[2];w++,m++)f[m]=e[h+w*p]}}return f}function kn(e,t=[256,256,256],n=[2,1,0]){return Xs(e,t,n,Float32Array)}function jo(e,t=[256,256,256],n=[2,1,0]){return Xs(e,t,n,Uint8Array)}function rs(e){const t=new Uint32Array(256);for(let n=0;n<e.length;n++)t[e[n]]++;return t}function Xo(e){const t=rs(e);let n=0;for(let s=0;s<256;s++)t[s]>0&&n++;return n}function Ms(e,t=!1,n="output"){let s=0,o=1/0,i=-1/0;if(!t&&(e instanceof Uint8Array||e instanceof Uint8ClampedArray)){if(e.length>0){let r=255,a=0,f=0;if((e.byteOffset&3)===0&&e.length>=4){const l=e.length>>2,c=new Uint32Array(e.buffer,e.byteOffset,l);for(let g=0;g<l;g++){const d=c[g];if(d===0){r=0;continue}const u=d&255,p=d>>>8&255,m=d>>>16&255,v=d>>>24;s+=u+p+m+v,u<r&&(r=u),u>a&&(a=u),p<r&&(r=p),p>a&&(a=p),m<r&&(r=m),m>a&&(a=m),v<r&&(r=v),v>a&&(a=v)}f=l<<2}for(let l=f;l<e.length;l++){const c=e[l];s+=c,c<r&&(r=c),c>a&&(a=c)}o=r,i=a}}else for(let r=0;r<e.length;r++){const a=e[r];if(!Number.isFinite(a))throw new Error(`Model ${n} contains NaN or Inf values.`);s+=a,a<o&&(o=a),a>i&&(i=a)}if(console.log(`${t?"Probability":"Segmentation"} volume sum: ${s}`),s===0)throw new Error(t?"Model probability output is all zeros. This may indicate an issue with WebGPU shaders or input data.":"Model produced an empty segmentation (all zeros). This may indicate an issue with WebGPU shaders or input data.");if(t&&(o<-1e-6||i>1+1e-6))throw new Error(`Probability output values out of range [0, 1]: min=${o.toFixed(4)}, max=${i.toFixed(4)}`);return{sum:s,min:o,max:i}}function Yo(e,t,n,s,o=null,i=null){return ve(this,null,function*(){const r=!!(e&&typeof e.data=="function");let a,f;r?(console.log("Downloading segmentation data from GPU to CPU..."),a=yield e.data(),f=e.shape||i||[256,256,256],console.log("Data download complete. Starting CPU processing.")):(a=e,f=i||[256,256,256]),Oo(a);let l,c=!1;if(a instanceof Uint8Array)l=a,c=!r;else{let d=0;for(let u=0;u<a.length;u++)a[u]>d&&(d=a[u]);l=d<=255?new Uint8Array(a):new Uint32Array(a),c=!0}let g=null;if(s.isPostProcessEnable){console.log("Applying CPU-based connected-component labeling...");const d=performance.now(),u=new No,p=[5,14,15,58,59,60,598,608],m=!!s.fillSuppressedWithNeighborLabel||p.includes(n.id),v=[5,14,15,58,59,60,598,608],k=F=>F>=1&&F<=34?1:F>=35&&F<=68?2:0,_=v.includes(n.id)?k:null,h=f[0]*f[1]*f[2],w=Math.max(1e5,Math.floor(h*.01)),[S,b]=u.bwlabel(l,f,6,!1,!1,Do);if(g=u.getLabelMeta(b),S>w){const F=`Segmentation produced noise: ${S.toLocaleString()} disconnected regions (cap ${w.toLocaleString()}). The model output is unusable, so post-processing was aborted. Try re-running, switching backend (WebGPU/WebGL2), or another model.`;console.error("[postprocess] "+F);const $=new Error(F);throw $.code="SEGMENTATION_NOISE",$}if([1,7].includes(n.id)){const[G,M]=u.filter_clusters_by_rank(l,S,b,2,.02,f,m,8,!1,_);l=M,c=!0}else if([3,8,9,21,38,218].includes(n.id)){const F=new Set([1,2,5,6,13]),[$,x]=u.filter18ClassFromLabels(l,S,b,f,F,m,_,c);l=x,c=!0}else if([5,14,15,58,59,60,598,608].includes(n.id)){s.diagnoseEnclosedComponents&&u.diagnose_components(l,S,b,f,{label:`model${n.id}`,topN:60});const[F,$]=u.filterHierarchicalFromLabels(l,S,b,f,"all",!0,m,_,c);l=$,c=!0}else c||(l=l.slice(),c=!0),u.applyLargestBinaryMaskInPlace(l,S,b,f);const P=((performance.now()-d)/1e3).toFixed(4);console.log(`Connected-component labeling took: ${P} seconds.`)}switch(n.type){case"Brain_Masking":{const d=new Uint8Array(l.length);if(g&&g.runs){const u=g.runs,p=g.runLen;for(let m=0;m<p;m+=2){const v=u[m],k=u[m+1];for(let _=v;_<k;_++)l[_]!==0&&(d[_]=1)}}else for(let u=0;u<l.length;u++)d[u]=l[u]!==0?1:0;return d}case"Brain_Extraction":{const d=new Uint8Array(l.length),u=o?new Uint8Array(l.length):null;if(g&&g.runs){const p=g.runs,m=g.runLen;for(let v=0;v<m;v+=2){const k=p[v],_=p[v+1];for(let h=k;h<_;h++)l[h]!==0&&(d[h]=t[h],u&&(u[h]=1))}}else for(let p=0;p<l.length;p++){const m=l[p]!==0?1:0;d[p]=t[p]*m,u&&(u[p]=m)}return o&&(o.mask=u),d}default:return l instanceof Uint8Array?l:new Uint8Array(l)}})}const Ko={WEBGPU:"webgpu"};function Zo(e,t){return{startTime:Date.now(),Model_Name:(e==null?void 0:e.modelName)||"Unknown",Execution_Mode:t,TF_Backend:"webgpu",isModelFullVol:null,No_SubVolumes:1,Brainchop_Ver:"FullVolume",Input_Shape:null,Output_Shape:null,Channel_Last:null,Model_Param:null,Model_Layers:null,Actual_Labels:null,Expect_Labels:null,NumLabels_Match:null,Missing_Labels:null,Preprocess_t:null,Setup_t:null,Inference_t:null,Postprocess_t:null,Display_t:null,Status:null,Error_Type:null,Extra_Err_Info:null}}function Qo(e,t,n,s=null){e.Expect_Labels=t,e.Actual_Labels=n,e.NumLabels_Match=t===n,s&&s.length>0&&(e.Missing_Labels=s.join(", "))}function Jo(e,t,n,s=null){e.Inference_t=t,e.Postprocess_t=n,s&&(s.Preprocess_t!==void 0&&(e.Preprocess_t=s.Preprocess_t),s.Setup_t!==void 0&&(e.Setup_t=s.Setup_t),s.Display_t!==void 0&&(e.Display_t=s.Display_t)),e.Status="OK"}function er(e,t,n=null){e.Inference_t=1/0,e.Postprocess_t=1/0,e.Status="Fail",e.Error_Type=(t==null?void 0:t.message)||String(t),n&&(e.Extra_Err_Info=n)}const It=1e-8,tr=[256,256,256];function rn(e,t,n){return Math.max(t,Math.min(n,e))}function nr(e){return e.outputType==="probability"&&e.probabilityPostprocess==="cat-lite"}function sr(e,t,n){const[s,o,i]=e,r=s.length,a=new Uint8Array(r);let f=0;for(let w=0;w<r;w++)Math.max(0,s[w])+Math.max(0,o[w])+Math.max(0,i[w])>=n&&(a[w]=1,f++);const[l,c,g]=t;if(l<2||c<2||g<1)return{componentCount:0,removedVoxels:0,supportMask:a};const d=l===256&&c===256,u=new Uint32Array(f),p=l*c;let m=0,v=0,k=0,_=0;for(let w=0;w<r;w++){if(a[w]!==1)continue;_++;const S=m;u[m++]=w,a[w]=2;for(let b=S;b<m;b++){const P=u[b],F=d?P&255:P%l,$=d?P>>>8&255:Math.floor(P/l)%c;F>0&&a[P-1]===1&&(a[P-1]=2,u[m++]=P-1),F+1<l&&a[P+1]===1&&(a[P+1]=2,u[m++]=P+1),$>0&&a[P-l]===1&&(a[P-l]=2,u[m++]=P-l),$+1<c&&a[P+l]===1&&(a[P+l]=2,u[m++]=P+l),P>=p&&a[P-p]===1&&(a[P-p]=2,u[m++]=P-p),P+p<r&&a[P+p]===1&&(a[P+p]=2,u[m++]=P+p)}m-S>=k-v&&(v=S,k=m)}let h=0;if(_>1)for(let w=0;w<m;w++){if(w>=v&&w<k)continue;const S=u[w];s[S]=0,o[S]=0,i[S]=0,a[S]=0,h++}return{componentCount:_,removedVoxels:h,supportMask:a}}function or([e,t,n],s,{minSupport:o,priorPower:i},r=null){const a=!!(r&&o>0&&o<=1);let f=0;for(let m=0;m<s.length;m++){if(a&&r[m]!==2)continue;const v=Math.max(0,e[m])+Math.max(0,t[m])+Math.max(0,n[m]);Math.min(v,1)>=o&&Number.isFinite(s[m])&&f++}const l=new Uint32Array(f),c=new Float64Array(f),g=f*36<=192*Vt(2,20)?f:0,d=new Float64Array(g),u=new Float64Array(g),p=new Float64Array(g);for(let m=0,v=0;m<s.length;m++){if(a&&r[m]!==2)continue;const k=Math.max(0,e[m]),_=Math.max(0,t[m]),h=Math.max(0,n[m]),w=k+_+h,S=Math.min(w,1);!(S>=o)||!Number.isFinite(s[m])||(l[v]=m,c[v]=s[m]-0,g&&(d[v]=S*Math.pow(h/w,i),u[v]=S*Math.pow(k/w,i),p[v]=S*Math.pow(_/w,i)),v++)}return{indices:l,values:c,weightCsf:d,weightGm:u,weightWm:p,volumes:[e,t,n]}}function As([e,t,n],s,o,i){const r=Math.max(0,e[s]),a=Math.max(0,t[s]),f=Math.max(0,n[s]),l=r+a+f,c=Math.min(l,1);i[0]=c*Math.pow(f/l,o),i[1]=c*Math.pow(r/l,o),i[2]=c*Math.pow(a/l,o)}function Bs({indices:e,values:t,weightCsf:n,weightGm:s,weightWm:o,volumes:i},{minSeparation:r,sigmaFloor:a,priorPower:f},l=!1){const c=n.length===0?new Float64Array(3):null,g=new Float64Array(3),d=new Float64Array(3);for(let v=0;v<t.length;v++){const k=t[v];c&&As(i,e[v],f,c);const _=c?c[0]:n[v],h=c?c[1]:s[v],w=c?c[2]:o[v];g[0]+=_*k,d[0]+=_,g[1]+=h*k,d[1]+=h,g[2]+=w*k,d[2]+=w}if(d.some(v=>v<100))return{applied:!1,reason:"too few high-confidence tissue voxels"};const u=Array.from(g,(v,k)=>v/d[k]);if(!(u[0]+r<u[1]&&u[1]+r<u[2]))return{applied:!1,reason:`implausible T1 tissue ordering (${u.map(v=>v.toFixed(3)).join(", ")})`};if(l)return{applied:!0,means:u};const p=new Float64Array(3);for(let v=0;v<t.length;v++){const k=t[v];c&&As(i,e[v],f,c);const _=c?c[0]:n[v],h=c?c[1]:s[v],w=c?c[2]:o[v],S=k-u[0],b=k-u[1],P=k-u[2];p[0]+=_*S*S,p[1]+=h*b*b,p[2]+=w*P*P}const m=Array.from(p,(v,k)=>Math.sqrt(Math.max(a*a,v/d[k])));return{applied:!0,means:u,sigmas:m}}function rr(e,t,n,s,{minSupport:o,block:i,smoothingPasses:r},a=null){const[f,l,c]=e,[g,d,u]=n,p=!!(a&&o>0&&o<=1),m=Math.ceil(g/i),v=Math.ceil(d/i),k=Math.ceil(u/i),_=m*v*k,h=new Float64Array(_),w=new Float64Array(_),[S,b,P]=s,F=g*d;for(let B=0;B<u;B++){const N=Math.floor(B/i);for(let U=0;U<d;U++){const te=Math.floor(U/i);let le=B*F+U*g;const E=(N*v+te)*m;for(let I=0;I<g;I++,le++){if(p&&a[le]!==2)continue;const D=Math.max(0,f[le]),ue=Math.max(0,l[le]),O=Math.max(0,c[le]),j=D+ue+O,ye=Math.min(j,1);if(!(ye>=o)||!Number.isFinite(t[le]))continue;const Me=D/j,Re=ue/j,$e=O/j,ne=$e*S+Me*b+Re*P,re=ye*($e*$e+Me*Me+Re*Re),W=E+Math.floor(I/i);h[W]+=re*(t[le]-ne),w[W]+=re}}}let $=new Float32Array(_),x=new Uint8Array(_);for(let B=0;B<_;B++)w[B]>1&&($[B]=h[B]/w[B],x[B]=1);for(let B=0;B<r;B++){const N=new Float32Array(_),U=new Uint8Array(_);for(let te=0;te<k;te++)for(let le=0;le<v;le++)for(let E=0;E<m;E++){let I=0,D=0;for(let O=-1;O<=1;O++){const j=te+O;if(!(j<0||j>=k))for(let ye=-1;ye<=1;ye++){const Me=le+ye;if(!(Me<0||Me>=v))for(let Re=-1;Re<=1;Re++){const $e=E+Re;if($e<0||$e>=m)continue;const ne=(j*v+Me)*m+$e;x[ne]&&(I+=$[ne],D++)}}}const ue=(te*v+le)*m+E;D>0&&(N[ue]=I/D,U[ue]=1)}$=N,x=U}const G=(B,N)=>{const U=new Int32Array(B),te=new Int32Array(B),le=new Float32Array(B);for(let E=0;E<B;E++){const I=rn((E+.5)/i-.5,0,N-1);U[E]=Math.floor(I),te[E]=Math.min(U[E]+1,N-1),le[E]=I-U[E]}return{low:U,high:te,t:le}},M=G(g,m),A=G(d,v),T=G(u,k),L=g===256&&d===256;return B=>{let N,U,te;if(L)te=B>>>16,U=B>>>8&255,N=B&255;else{te=Math.floor(B/F);const Y=B-te*F;U=Math.floor(Y/g),N=Y-U*g}const le=M.low[N],E=M.high[N],I=M.t[N],D=(T.low[te]*v+A.low[U])*m,ue=(T.low[te]*v+A.high[U])*m,O=(T.high[te]*v+A.low[U])*m,j=(T.high[te]*v+A.high[U])*m,ye=$[D+le]+($[D+E]-$[D+le])*I,Me=$[ue+le]+($[ue+E]-$[ue+le])*I,Re=$[O+le]+($[O+E]-$[O+le])*I,$e=$[j+le]+($[j+E]-$[j+le])*I,ne=A.t[U],re=ye+(Me-ye)*ne,W=Re+($e-Re)*ne;return re+(W-re)*T.t[te]}}function Sn(e,t,n,s){const o=(e-t)/n;return-.5*o*o-s}function ar(e,t,n,s={}){const{catLiteMinSupport:o=.03,catLitePurePriorPower:i=3,catLiteMinMeanSeparation:r=.035,catLiteSigmaFloor:a=.025,catLiteBiasBlockSize:f=16,catLiteBiasSmoothPasses:l=3,catLitePriorStrength:c=.8,catLiteIntensityStrength:g=.75,catLiteMixelPrior:d=.35,catLiteCsfWmMixelPrior:u=6,catLiteSpatialWeight:p=.25}=s,m={priorPower:i,minSupport:o,minSeparation:r,sigmaFloor:a},[v,k,_]=n,h=t.length,w=o>0&&o<=1,{componentCount:S,removedVoxels:b,supportMask:P}=sr(e,n,o),F={componentCount:S,removedVoxels:b},$=or(e,t,m,P),x=Bs($,m,!0);if(!x.applied)return{tissues:e,stats:x};const G=rr(e,t,n,x.means,{minSupport:o,block:f,smoothingPasses:l},P);for(let ge=0;ge<$.indices.length;ge++){const we=$.indices[ge];$.values[ge]=t[we]-G(we)}const M=Bs($,m);if(!M.applied)return{tissues:e,stats:M};$.indices=$.weightCsf=$.weightGm=$.weightWm=null;const[A,T,L]=M.means,[B,N,U]=M.sigmas,[te,le,E]=e,I=new Float32Array(h),D=new Float32Array(h),ue=new Float32Array(h),O=v*k,j=.5*(A+T),ye=.5*(T+L),Me=.5*(A+L),Re=Math.sqrt(Vt(T-A,2)/12+.5*(Vt(B,2)+Vt(N,2))),$e=Math.sqrt(Vt(L-T,2)/12+.5*(Vt(N,2)+Vt(U,2))),ne=Math.sqrt(Vt(L-A,2)/12+.5*(Vt(B,2)+Vt(U,2))),re=Math.log(B),W=Math.log(N),Y=Math.log(U),V=Math.log(Re),ce=Math.log($e),Ge=Math.log(ne);let ze=0;for(let ge=0;ge<_;ge++)for(let we=0;we<k;we++){let Z=ge*O+we*v;for(let Ue=0;Ue<v;Ue++,Z++){if(w&&P[Z]!==2)continue;const X=Math.max(0,te[Z]),Ie=Math.max(0,le[Z]),tt=Math.max(0,E[Z]),qe=X+Ie+tt,ot=Math.min(qe,1);if(!(ot>=o)||!Number.isFinite(t[Z]))continue;let rt=X/qe,it=Ie/qe,bt=tt/qe;if(p>0){let je=0,We=0,K=0,q=0;if(Ue>0){const ee=Z-1,Ee=Math.max(0,te[ee]),st=Math.max(0,le[ee]),De=Math.max(0,E[ee]),Be=Ee+st+De;Be>It&&(je+=Ee/Be,We+=st/Be,K+=De/Be,q++)}if(Ue+1<v){const ee=Z+1,Ee=Math.max(0,te[ee]),st=Math.max(0,le[ee]),De=Math.max(0,E[ee]),Be=Ee+st+De;Be>It&&(je+=Ee/Be,We+=st/Be,K+=De/Be,q++)}if(we>0){const ee=Z-v,Ee=Math.max(0,te[ee]),st=Math.max(0,le[ee]),De=Math.max(0,E[ee]),Be=Ee+st+De;Be>It&&(je+=Ee/Be,We+=st/Be,K+=De/Be,q++)}if(we+1<k){const ee=Z+v,Ee=Math.max(0,te[ee]),st=Math.max(0,le[ee]),De=Math.max(0,E[ee]),Be=Ee+st+De;Be>It&&(je+=Ee/Be,We+=st/Be,K+=De/Be,q++)}if(ge>0){const ee=Z-O,Ee=Math.max(0,te[ee]),st=Math.max(0,le[ee]),De=Math.max(0,E[ee]),Be=Ee+st+De;Be>It&&(je+=Ee/Be,We+=st/Be,K+=De/Be,q++)}if(ge+1<_){const ee=Z+O,Ee=Math.max(0,te[ee]),st=Math.max(0,le[ee]),De=Math.max(0,E[ee]),Be=Ee+st+De;Be>It&&(je+=Ee/Be,We+=st/Be,K+=De/Be,q++)}if(q){const ee=1-p;rt=ee*rt+p*je/q,it=ee*it+p*We/q,bt=ee*bt+p*K/q}}const Fe=$.values[ze++],Ke=c*Math.log(bt+It)+g*Sn(Fe,A,B,re),nt=c*Math.log(rt+It)+g*Sn(Fe,T,N,W),pt=c*Math.log(it+It)+g*Sn(Fe,L,U,Y),dt=c*Math.log(d*2*Math.sqrt(bt*rt)+It)+g*Sn(Fe,j,Re,V),ht=c*Math.log(d*2*Math.sqrt(rt*it)+It)+g*Sn(Fe,ye,$e,ce),Gt=c*Math.log(u*2*Math.sqrt(bt*it)*Vt(1-rt,2)+It)+g*Sn(Fe,Me,ne,Ge),Ct=Math.max(Ke,nt,pt,dt,ht,Gt),H=Math.exp(Ke-Ct),Tt=Math.exp(nt-Ct),Ut=Math.exp(pt-Ct),Nt=Math.exp(dt-Ct),zt=Math.exp(ht-Ct),Xt=Math.exp(Gt-Ct),y=H+Tt+Ut+Nt+zt+Xt,C=rn((Fe-A)/(T-A),0,1),R=rn((L-Fe)/(L-T),0,1),ae=rn((Fe-A)/(L-A),0,1),se=(Tt+Nt*C+zt*R)/y,Pe=(Ut+zt*(1-R)+Xt*ae)/y,pe=(H+Nt*(1-C)+Xt*(1-ae))/y,de=Math.min(bt,it),me=rn((de-rt)/(de+It),0,1),_e=rn(4*bt*it,0,1),Ne=Vt(1-_e*me,2);I[Z]=rn(se*ot*Ne,0,1);const Ae=(1-se*Ne)/Math.max(Pe+pe,It);D[Z]=rn(Pe*Ae*ot,0,1),ue[Z]=rn(pe*Ae*ot,0,1)}}return{tissues:[I,D,ue],stats:{applied:!0,tissueMeans:{csf:A,gray:T,white:L},tissueSigmas:{csf:B,gray:N,white:U},supportCleanup:F}}}const Cs=({csf:e,gray:t,white:n})=>`CSF=${e.toFixed(3)} GM=${t.toFixed(3)} WM=${n.toFixed(3)}`;function ir(e,t,n,s,o){return ve(this,null,function*(){var f;const i=[];for(let l=0;l<3;l++)i.push(yield o(e[l],l)),e[l]=null;const{tissues:r,stats:a}=ar(i,t,tr,n);if(s.Output_Type="Continuous tissue probability",s.Tissue="GM/WM/CSF",s.Softmax_Temperature=(f=n.softmaxTemperature)!=null?f:1,a.applied){s.Partial_Volume="CAT-lite mixed-class PVE",s.CAT_Lite_Tissue_Means=Cs(a.tissueMeans),s.CAT_Lite_Tissue_Sigmas=Cs(a.tissueSigmas);const{componentCount:l,removedVoxels:c}=a.supportCleanup;console.log(`[CAT-lite] means ${s.CAT_Lite_Tissue_Means}; sigmas ${s.CAT_Lite_Tissue_Sigmas}; removed ${c} voxels outside the largest of ${l} support components`)}else s.Partial_Volume=`Skipped: ${a.reason}`,console.warn(`[CAT-lite] skipped: ${a.reason}`);return r})}const un=[1,3,5,7,13,19,31,19,13,7,5,3,1],lr=[16,8,4,2,1,16,8,4,2,1,16,8,4,2,1,16,8,4,2,1,16,8,4,2,1],ur={model16chan18cls:{dilations:un,activation:"gelu_tanh",fullVolume:!0},model24chan18cls_gdice_prio:{dilations:un,activation:"gelu_tanh",fullVolume:!0},model6chan3cls:{dilations:un,activation:"gelu_tanh",fullVolume:!0},model24chan104cls_synth:{dilations:un,activation:"gelu_tanh",fullVolume:!0},model24chan104cls_infant_refit_synth:{dilations:un,activation:"gelu_tanh",fullVolume:!0},model24chan104cls_v3_repbn:{dilations:un,activation:"gelu_tanh",fullVolume:!0},model24chan50cls:{dilations:un,activation:"gelu_tanh",fullVolume:!0},model32chan18cls:{dilations:un,activation:"gelu_tanh",fullVolume:!1},mindgrab:{dilations:lr,activation:"gelu_tanh",fullVolume:!0},model5_gw_ae:{dilations:[1,2,4,8,16,8,4,2,1],activation:"relu",fullVolume:!0},model11_gw_ae:{dilations:[1,2,4,8,4,2,2,1],activation:"relu",noSafetensors:!0,fullVolume:!0},model30chan18cls:{dilations:[1,2,4,8,16,8,4,2,1],activation:"elu",fullVolume:!0},model30chan50cls:{dilations:[1,2,4,8,16,8,4,2,1],activation:"elu",fullVolume:!0}};function cr(e){const t=String(e.path||"").match(/\/models\/([^/]+)\//);return t?t[1]:null}function fs(e){const t=cr(e);if(!t)return null;const n=ur[t];return!n||n.noSafetensors?null:$t({name:t},n)}function fr(e){const t=e&32768?-1:1,n=(e&31744)>>10,s=e&1023;return n===0?t*Math.pow(2,-14)*(s/1024):n===31?s?NaN:t*(1/0):t*Math.pow(2,n-15)*(1+s/1024)}function Ys(e){const t=new DataView(e),n=Number(t.getBigUint64(0,!0)),s=JSON.parse(new TextDecoder().decode(new Uint8Array(e,8,n))),o=8+n,i={};for(const[r,a]of Object.entries(s)){if(r==="__metadata__"){i.__metadata__=a;continue}const[f,l]=a.data_offsets,c=a.shape.reduce((d,u)=>d*u,1);let g;if(a.dtype==="F32")g=new Float32Array(e.slice(o+f,o+l));else if(a.dtype==="F16"){const d=new Uint16Array(e.slice(o+f,o+l));g=new Float32Array(c);for(let u=0;u<c;u++)g[u]=fr(d[u])}else if(a.dtype==="BF16"){const d=new Uint16Array(e.slice(o+f,o+l));g=new Float32Array(c);const u=new Uint32Array(1),p=new Float32Array(u.buffer);for(let m=0;m<c;m++)u[0]=d[m]<<16,g[m]=p[0]}else throw new Error(`safetensors: unsupported dtype ${a.dtype} for tensor '${r}'`);if(g.length!==c)throw new Error(`safetensors: tensor '${r}' has ${g.length} values, shape says ${c}`);i[r]={dtype:a.dtype,shape:a.shape,data:g}}return i}function Ks(e){const t=[],n=[],s=[];for(const[i,r]of Object.entries(e)){if(i==="__metadata__")continue;const a=i.match(/^m\.model\.(\d+)\.(weight|bias)$/);if(!a)continue;const f=Number(a[1]),l=a[2]==="weight";if(r.shape.length===5){const[c,g,d,u,p]=r.shape,v={idx:f,outC:c,inC:g,kd:d,kh:u,kw:p,is1x1:d===1&&u===1&&p===1,w:r.data,bias:null},k=t.find(_=>_.idx===f);k?Object.assign(k,v):t.push(v)}else r.shape.length===1&&s.push({idx:f,isW:l,data:r.data,len:r.shape[0]})}t.sort((i,r)=>i.idx-r.idx);for(const i of s){const r=t.find(f=>f.idx===i.idx);if(r&&!i.isW){r.bias=i.data;continue}if(r&&i.isW)continue;let a=n.find(f=>f.idx===i.idx);a||(a={idx:i.idx,scale:null,bias:null},n.push(a)),i.isW?a.scale=i.data:a.bias=i.data}n.sort((i,r)=>i.idx-r.idx);let o=null;return t.length&&t[t.length-1].is1x1&&(o=t.pop()),{convs:t,affines:n,classifier:o}}function pr(e,t){var n;if(t==null)return e;if(t.length!==((n=e.classifier)==null?void 0:n.outC)||!Array.from(t).every(Number.isFinite))throw new Error("Classifier bias must contain one finite value per exported class");return e.classifier.bias=Float32Array.from(t),e}function mr(e,t){const n=t.cs,s=t.chan,{convs:o,affines:i,classifier:r}=e,a=u=>27*u*n;let f=0;const l=[];o.forEach((u,p)=>{const m=p===0?1:n,v={wq:f/4,inCS:m};f+=a(m),u.bias&&(v.biasQ=f/4,f+=n),l.push(v)}),i.forEach((u,p)=>{l[p]=l[p]||{},l[p].affQ=f/4,f+=n,l[p].affBiasQ=f/4,f+=n});let c=-1,g=-1;r&&(c=f,f+=s*t.nclass,f=Math.ceil(f/4)*4,r.bias&&(g=f,f+=t.nclass),f=Math.ceil(f/4)*4);const d=new Float32Array(f);if(o.forEach((u,p)=>{const m=l[p],v=m.inCS,k=m.wq*4,_=u.kd*u.kh*u.kw;if(u.outC>s||p>0&&u.inC>s)throw new Error(`layer ${p}: shape ${u.outC}x${u.inC} exceeds CHAN ${s}`);for(let h=0;h<u.outC;h++){for(let w=0;w<u.inC;w++)for(let S=0;S<u.kd;S++)for(let b=0;b<u.kh;b++)for(let P=0;P<u.kw;P++){const F=u.kd===3?S*9+b*3+P:0,$=(((h*u.inC+w)*u.kd+S)*u.kh+b)*u.kw+P;d[k+(F*v+w)*n+h]=u.w[$]}u.bias&&(d[m.biasQ*4+h]=u.bias[h])}if(_!==27&&_!==1)throw new Error(`layer ${p}: kernel ${u.kd}x${u.kh}x${u.kw} unsupported`)}),i.forEach((u,p)=>{const m=l[p];for(let v=0;v<s;v++)d[m.affQ*4+v]=u.scale?u.scale[v]:0,d[m.affBiasQ*4+v]=u.bias?u.bias[v]:0}),r)for(let u=0;u<t.nclass;u++){for(let p=0;p<s;p++)d[c+p*t.nclass+u]=r.w[u*r.inC+p];r.bias&&(d[g+u]=r.bias[u])}return{data:d,offsets:{layers:l,clsFloat:c,clsBiasFloat:g}}}function Zs(e,t={}){const{convs:n,affines:s,classifier:o}=e,i=n[0].outC,r=Math.ceil(i/4)*4,a=n.some(l=>l.bias),f=$t({chan:i,cs:r,planes:r/4,nclass:o?o.outC:0,nhidden:n.length-1,norm:s.length?"gn":a?"none":"gn",affine:s.length>0,convBias:a,classifierBias:!!(o&&o.bias),centeredVariance:!1,eps:1e-5},t);if(f.nclass>256)throw new Error(`classifier has ${f.nclass} classes; the RGBA8 label texture holds at most 256`);if(!f.activation)throw new Error("descriptor needs an explicit `activation`");if(!f.dilations)throw new Error("descriptor needs an explicit `dilations` array");if(f.dilations.length!==n.length)throw new Error(`descriptor has ${f.dilations.length} dilations for ${n.length} convs`);return f}const Hn=(e,t)=>Array.from({length:e},(n,s)=>t(s)).join(""),zs=["x","y","z","w"];function dr(e){const t=`fn act4(x : vec4<f32>) -> vec4<f32> {
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
`+r+o(c=>i(g=>`          a${c}${g} = fma(w${g}, vec4<f32>(s${c}.${zs[l]}), a${c}${g});
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
`+i(c=>Hn(4,g=>`    dst[o + ${4*c+g}u] = f16(a${l}${c}.${zs[g]});
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
`+dr(e.activation)+gr(e,n,s)+(e.norm==="gn"?_r(o)+br(n):"")+hr(n)}const jn={amd:{localX:256,vox:1},apple:{localX:64,vox:2},default:{localX:64,vox:2}};function vr(){var e;try{const t=new URLSearchParams(((e=globalThis.location)==null?void 0:e.search)||"").get("wgPreset"),n=t&&/^(\d+)x([124])$/.exec(t);return n?{localX:Number(n[1]),vox:Number(n[2]),source:"url"}:null}catch(t){return null}}function yr(e,t){var a;const n=String(((a=e.adapterInfo)==null?void 0:a.vendor)||"").toLowerCase(),s=e.limits,o=f=>f.localX<=s.maxComputeInvocationsPerWorkgroup&&f.localX<=s.maxComputeWorkgroupSizeX&&t.nx%(f.localX*f.vox)===0;let i=vr()||Rt($t({},jn[n]||jn.default),{source:n||"default"});o(i)||(console.warn(`[WebGPU-native] preset ${i.localX}x${i.vox} does not fit this device; using the default`),i=Rt($t({},jn.default),{source:"fallback"}));let r=0;for(const f of[256,128,64,32])if(f<=i.localX&&f>=t.cs&&t.nx%f===0&&f<=s.maxComputeInvocationsPerWorkgroup&&f*t.cs*8<=s.maxComputeWorkgroupStorageSize){r=f;break}if(!r)throw new Error(`webgpu-native: no moments workgroup fits ${t.cs} channels on this device`);return Rt($t({},i),{momLX:r,vendor:n||"unknown"})}const Bt=256;function Fs(e){if(typeof Float16Array!="undefined")return new Uint16Array(new Float16Array(e).buffer);const t=new Uint16Array(e.length),n=new Float32Array(1),s=new Uint32Array(n.buffer);for(let o=0;o<e.length;o++){n[0]=e[o];const i=s[0],r=i>>>16&32768,a=i>>>23&255,f=i&8388607;if(a===255){t[o]=r|31744|(f?512:0);continue}const l=a-127+15;if(l>=31){t[o]=r|31744;continue}if(l<=0){if(l<-10){t[o]=r;continue}const d=f|8388608,u=14-l;let p=d>>>u;const m=d&(1<<u)-1,v=1<<u-1;(m>v||m===v&&p&1)&&p++,t[o]=r|p;continue}let c=l<<10|f>>>13;const g=f&8191;(g>4096||g===4096&&c&1)&&c++,t[o]=r|c}return t}function xr(e,t){var n;return t.quantize8Bit?"8-bit quantized V4 runner requested":(n=e.features)!=null&&n.has("shader-f16")?t.outputType==="probability"?"probability output (CAT-lite) is not ported yet":t.enableTTA?"test-time augmentation uses the tinygrad TTA runner":t.forceFP32?"model entry forces fp32":t.webgpu_safetensor?fs(t)?null:"no descriptor in webgl2_runners/descriptors.js":"no safetensors weights":"device lacks shader-f16"}function $r(e,t){const n=e.nx*e.ny*e.nz,s=e.nx/t*e.ny*e.nz;return 2*n*e.cs*2+n*2+2*n*4+(s+1)*e.cs*2*4}const Ls=new WeakMap;function Sr(e,t,n){return ve(this,null,function*(){let s=Ls.get(e);s||(s=new Map,Ls.set(e,s));const o=`${t.chan}|${t.cs}|${t.nclass}|${t.norm}|${t.affine}|${t.convBias}|${t.clsBias}|${t.activation}|${t.eps}|${n.localX}x${n.vox}x${n.momLX}`;let i=s.get(o);return i||(i=ve(null,null,function*(){const r=e.createShaderModule({code:wr(t,n)}),a=["read-only-storage","storage","read-only-storage","uniform","storage","storage","read-only-storage","read-only-storage"],f=e.createBindGroupLayout({entries:a.map((d,u)=>({binding:u,visibility:GPUShaderStage.COMPUTE,buffer:{type:d}}))}),l=e.createPipelineLayout({bindGroupLayouts:[f]}),c=["conv","classify",...t.norm==="gn"?["moments","moments_finish","norm"]:[]],g=Object.fromEntries(yield Promise.all(c.map(d=>ve(null,null,function*(){return[d,yield e.createComputePipelineAsync({layout:l,compute:{module:r,entryPoint:d}})]}))));return{bgl:f,pipelines:g}}).catch(r=>{throw s.delete(o),r}),s.set(o,i)),i})}function Pr(e,t,n,s){return ve(this,null,function*(){const o=fs(s);if(!o)throw new Error(`webgpu-native: no descriptor for ${s.path}`);const i=t instanceof Uint8Array?t:new Uint8Array(t),r=pr(Ks(Ys(i.buffer.slice(i.byteOffset,i.byteOffset+i.byteLength))),s.classifierBias),a=Zs(r,{nx:Bt,ny:Bt,nz:Bt,activation:o.activation,dilations:o.dilations});if(!a.nclass)throw new Error("webgpu-native: model has no classifier");if(a.convBias&&a.affine)throw new Error("webgpu-native: conv bias together with a GroupNorm affine is not supported");const f=yr(e,a),l=Bt*Bt*Bt,c=l*a.cs*2,g=e.limits;if(c>g.maxStorageBufferBindingSize||c>g.maxBufferSize)throw new Error(`webgpu-native: a ${c>>>20} MiB activation exceeds this device's buffer limits`);console.log(`[WebGPU-native] ${o.name}: ${a.chan}ch (stride ${a.cs}) ${a.nclass}cls norm=${a.norm} affine=${a.affine} act=${a.activation} | preset ${f.localX}x${f.vox} (moments ${f.momLX}, ${f.source}) | ~${Math.round($r(a,f.momLX)/1048576)} MiB`);const d=mr(r,a),{layers:u,clsFloat:p,clsBiasFloat:m}=d.offsets;e.pushErrorScope("validation"),e.pushErrorScope("out-of-memory");let v=2;try{const{bgl:k,pipelines:_}=yield Sr(e,a,f),h=(O,j)=>e.createBuffer({size:O,usage:j}),w=GPUBufferUsage.STORAGE,S=Bt/f.momLX*Bt*Bt,b=Fs(d.data),P=h(l*2,w|GPUBufferUsage.COPY_DST),F=h(c,w),$=h(c,w),x=h(Math.ceil(b.byteLength/16)*16,w|GPUBufferUsage.COPY_DST),G=h((S+1)*a.cs*2*4,w),M=h(l*4,w|GPUBufferUsage.COPY_SRC),A=h(l*4,GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST);e.queue.writeBuffer(x,0,b);const T=(O,j,ye)=>{const Me=h(32,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST);return e.queue.writeBuffer(Me,0,ye),e.createBindGroup({layout:k,entries:[{binding:0,resource:{buffer:O}},{binding:1,resource:{buffer:j}},{binding:2,resource:{buffer:x}},{binding:3,resource:{buffer:Me}},{binding:4,resource:{buffer:G}},{binding:5,resource:{buffer:M}},{binding:6,resource:{buffer:x}},{binding:7,resource:{buffer:O}}]})},L=O=>{const j=new Uint32Array(8);return j[0]=O.dilation|0,j[1]=O.weightOff>>>0,j[2]=O.affineOff>>>0,j[3]=O.biasOff>>>0,j[4]=O.inChannels>>>0,j[5]=O.inStride>>>0,j[6]=S,j},B=[];let N=P,U=F;u.forEach((O,j)=>{const ye=j===0;B.push(T(N,U,L({dilation:a.dilations[j],weightOff:O.wq*4,affineOff:O.affQ!==void 0?O.affQ*4:0,biasOff:O.biasQ!==void 0?O.biasQ*4:O.affBiasQ!==void 0?O.affBiasQ*4:0,inChannels:ye?1:a.cs,inStride:ye?1:a.cs}))),N=U,U=U===F?$:F});const te=T(N,U,L({weightOff:p,biasOff:m>=0?m:0}));v=0;const le=yield e.popErrorScope(),E=yield e.popErrorScope();if(le||E)throw new Error(`webgpu-native setup failed: ${(le||E).message}`);const I=Bt/(f.localX*f.vox),D=Bt/f.localX,ue=Bt/f.momLX;return function(j){return ve(this,null,function*(){if(j.length!==l)throw new Error(`webgpu-native: input has ${j.length} voxels, expected ${l}`);e.pushErrorScope("validation"),e.queue.writeBuffer(P,0,Fs(j));for(const ne of B){const re=e.createCommandEncoder(),W=re.beginComputePass();W.setBindGroup(0,ne),W.setPipeline(_.conv),W.dispatchWorkgroups(I,Bt,Bt),a.norm==="gn"&&(W.setPipeline(_.moments),W.dispatchWorkgroups(ue,Bt,Bt),W.setPipeline(_.moments_finish),W.dispatchWorkgroups(1,1,1),W.setPipeline(_.norm),W.dispatchWorkgroups(D,Bt,Bt)),W.end(),e.queue.submit([re.finish()])}const ye=e.createCommandEncoder(),Me=ye.beginComputePass();Me.setBindGroup(0,te),Me.setPipeline(_.classify),Me.dispatchWorkgroups(D,Bt,Bt),Me.end(),ye.copyBufferToBuffer(M,0,A,0,l*4),e.queue.submit([ye.finish()]),yield A.mapAsync(GPUMapMode.READ);const Re=new Float32Array(new Uint32Array(A.getMappedRange()));A.unmap();const $e=yield e.popErrorScope();if($e)throw new Error(`webgpu-native inference failed: ${$e.message}`);return[Re]})}}finally{for(;v-- >0;)yield e.popErrorScope().catch(()=>{})}})}const kr={grayMatter:[2,6,7,8,9,10,14,15,16,17],whiteMatter:[1,5],csf:[3,4,11,12]};function Mn(e,t,n,s,o){var r;const i=Number((r=e[t])!=null?r:n);if(!Number.isFinite(i)||i<s||i>o)throw new Error(`${t} must be between ${s} and ${o}, got ${e[t]}`);return i}function Xn(e,t,n){let s=0;for(const o of e||[]){if(!Number.isInteger(o)||o<0||o>=t||o>=32)throw new Error(`Invalid ${n} tissue label ${o} for ${t} classes`);s=(s|1<<o)>>>0}return s}function Mr(e,t){if(!Number.isInteger(t)||t<2||t>32)throw new Error(`Native WebGL2 grouped probabilities require 2..32 classes, got ${t}`);const n=$t($t({},kr),e.probabilityGroups||{});return{temperature:Mn(e,"softmaxTemperature",1,1e-6,1e6),supportTemperature:Mn(e,"brainSupportTemperature",1,1e-6,1e6),supportPower:Mn(e,"brainSupportPower",1,1e-6,1e6),sigma:Mn(e,"partialVolumeSigma",0,0,2),grayMask:Xn(n.grayMatter,t,"gray-matter"),whiteMask:Xn(n.whiteMatter,t,"white-matter"),csfMask:Xn(n.csf,t,"CSF")}}function Yn(e,t,n,s,o,i){const[r,a,f]=n,l=r*a,c=o.length-1>>1;for(let g=0;g<f;g++)for(let d=0;d<a;d++)for(let u=0;u<r;u++){const p=g*l+d*r+u,m=s===1?u:s===r?d:g,v=s===1?r:s===r?a:f;let k=0;for(let _=-c;_<=c;_++){const h=m+_;h<0||h>=v||(k+=o[_+c]*e[p+_*s])}t[p]=k/i}}function Ar(e,t,n,s){const[o,i,r]=n,a=o*i*r;if(!Array.isArray(e)||e.length!==3||e.some(u=>u.length!==a)||t.length!==a)throw new Error("Native WebGL2 tissue-prior dimensions do not match");const f=Mn(s,"partialVolumeSigma",0,0,2),l=Mn(s,"brainSupportPower",1,1e-6,1e6);let c=null,g=null,d=1;if(f>0){const u=Math.max(1,Math.round(3*f));g=new Float32Array(u*2+1),d=0;for(let p=-u;p<=u;p++){const m=Math.exp(-.5*p*p/(f*f));g[p+u]=m,d+=m}c=new Float32Array(a)}for(const u of e){let p=u;g&&(Yn(u,c,n,1,g,d),Yn(c,u,n,o,g,d),Yn(u,c,n,o*i,g,d),p=c);for(let m=0;m<a;m++){const v=Math.pow(Math.max(0,Math.min(1,t[m])),l);u[m]=Math.max(0,Math.min(1,p[m]*v))}}return e}const z=256,Pt=64,jt=8,_t=Pt+2*jt,pn=_t*4,Ve=z*64,Un=z*z*2,Tn=9216,Qs=Tn*8,Js=[1,3,5,7,13,19,31,19,13,7,5,3,1],Lt=(e,t)=>Array.from({length:e},(n,s)=>t(s)).join(""),eo=280,to=180,Kn=112;function no(e){var t;if(e!=null&&e.webgpuExecMode)return String(e.webgpuExecMode).toLowerCase();try{const n=new URLSearchParams(((t=globalThis.location)==null?void 0:t.search)||"").get("webgpuExec");if(n)return n.toLowerCase()}catch(n){}return""}function Br(e){var n,s;if(!e)return"";if(typeof e.__glRenderer=="string")return e.__glRenderer;let t="";try{const o=typeof navigator!="undefined"&&/Firefox/i.test(navigator.userAgent||""),i=typeof OffscreenCanvas!="undefined"?new OffscreenCanvas(1,1):typeof document!="undefined"?document.createElement("canvas"):null,r=(n=i==null?void 0:i.getContext)==null?void 0:n.call(i,"webgl2",{powerPreference:"high-performance"});if(r){if(o)t=String(r.getParameter(r.RENDERER)||"");else{const a=r.getExtension("WEBGL_debug_renderer_info");t=String((a?r.getParameter(a.UNMASKED_RENDERER_WEBGL):r.getParameter(r.RENDERER))||"")}(s=r.getExtension("WEBGL_lose_context"))==null||s.loseContext()}}catch(o){}return e.__glRenderer=t,t}function ps(e){var d;const t=(e==null?void 0:e.__adapterInfo)||(e==null?void 0:e.adapterInfo)||{},n=String(t.vendor||"").toLowerCase(),s=String(t.architecture||"").toLowerCase(),o=typeof navigator!="undefined"&&navigator.userAgent||"",i=typeof navigator!="undefined"&&(((d=navigator.userAgentData)==null?void 0:d.platform)||navigator.platform||"")||"",r=n==="apple"||/Mac|iPhone|iPad|iPod/i.test(`${i} ${o}`)&&!["intel","amd","nvidia","microsoft"].includes(n),a=!r&&(/Win/i.test(i)||/Windows/i.test(o)),f=a&&!n?Br(e):String((e==null?void 0:e.__glRenderer)||""),l=`${t.device||""} ${t.description||""} ${f}`,c=n||(/\bintel\b/i.test(f)?"intel":/\bmicrosoft\b|\bbasic render\b/i.test(f)?"microsoft":""),g=a&&(c==="microsoft"||c==="intel"&&!/\bArc\b/i.test(l)&&(/^gen-(9|11|12lp)/i.test(s)||/(?:UHD|HD)\s+Graphics|Iris(?:\(R\))?\s*(?:Plus|Xe)|Pentium|Celeron/i.test(l)));return{vendor:c,arch:s,desc:l,isApple:r,isWindows:a,isWindowsSharedIgpu:g}}function so(e,t){const n=no(t);if(n==="single"||n==="pipelined"||n==="paced"||n==="calibrate")return n;if(n==="chunked")return"paced";const s=ps(e);return s.isApple?"single":s.isWindows?e!=null&&e.__v4WinCalibrated?e.__v4WinFast?"pipelined":"paced":"calibrate":"pipelined"}function oo(e,t){const n=no(t);return n==="single"?!1:n==="paced"||n==="chunked"||n==="calibrate"?!0:n==="pipelined"?!1:ps(e).isWindows}function ro(e,t,n){return(n==null?void 0:n.forceLowMem128)===!1?!1:ps(e).isWindowsSharedIgpu&&t.cs>=24&&t.cs%4===0}function yn(){return typeof requestAnimationFrame!="function"?new Promise(e=>setTimeout(e,0)):new Promise(e=>{let t=!1;const n=()=>{t||(t=!0,e())},s=setTimeout(n,16);requestAnimationFrame(()=>{clearTimeout(s),setTimeout(n,0)})})}function ms(e,t,n){const s=e.isFull?Ve:e.mainStrips.length,o=e.isFull||!e.extStrips?0:e.extStrips.length,i=t+1<n?e.isFull?Ve:e.normStrips?e.normStrips.length:0:0,r=Math.max(16,Math.round(i*.12));return t===0?{convWork:Math.max(64,Math.round(s*.12)),normWork:r}:{convWork:s+o,normWork:r}}function ao(e,t){let n=0;for(let o=0;o<t;o++){const i=ms(e.layers[o],o,t);n+=i.convWork+i.normWork}const s=e.clsSkipped?e.clsStrips.length:Ve;return n+=Math.max(64,Math.round(s*.2)),Math.max(1,n)}const io=new Float32Array(1),Cr=new Uint32Array(io.buffer);function as(e){io[0]=e;const t=Cr[0],n=t>>>16&32768,s=t>>>23&255;let o=t&8388607;if(s===255)return n|31744|(o?512:0);let i=s-127+15;return i<=0?i<-10?n:(o=(o|8388608)>>>1-i,n|o+4096>>>13):i>=31?n|31744:n|Math.min(31744,(i<<10)+(o+4096>>>13))}function zr(e){const t=new Uint16Array(e.length);for(let n=0;n<e.length;n++)t[n]=as(e[n]);return t}const cn=new Map,Fr=12,lo=new WeakMap,Lr=new WeakMap;function Ur(e){let t=2166136261,n=2654435769;const s=e.byteLength>>>2;if((e.byteOffset&3)===0){const o=new Uint32Array(e.buffer,e.byteOffset,s);for(let i=0;i<o.length;i++){const r=o[i];t=Math.imul(t^r,16777619)>>>0,n=Math.imul(n^(r<<13|r>>>19),2246822507)>>>0}}else for(let o=0;o<s*4;o+=4){const i=e[o]|e[o+1]<<8|e[o+2]<<16|e[o+3]<<24;t=Math.imul(t^i,16777619)>>>0,n=Math.imul(n^(i<<13|i>>>19),2246822507)>>>0}for(let o=s*4;o<e.byteLength;o++)t=Math.imul(t^e[o],16777619)>>>0;return`${e.byteLength}_${t.toString(16)}_${n.toString(16)}`}function Wr(e,t,n,s){const o=s!=null&&s.classifierBias?JSON.stringify(s.classifierBias):"",i=`${Ur(e)}|${n.chan}|${n.cs}|${n.nclass}|${n.norm}|${n.eps}|${o}`;if(cn.has(i)){const a=cn.get(i);return cn.delete(i),cn.set(i,a),a}const r=Ir(t,n);if(cn.size>=Fr){const a=cn.keys().next().value;cn.delete(a)}return cn.set(i,r),r}function ds(e,t){let n=e.get(t);return n||(n=new Map,e.set(t,n)),n}function Ht(e,t,n){let s=e.get(t);return s||(s=n().catch(o=>{throw e.delete(t),o}),e.set(t,s)),s}function Nn(e,t){let n=0;return{alloc:(o,i)=>{const r=Math.max(16,Math.ceil(o/16)*16),a=e.createBuffer({size:r,usage:i});return t.push(a),n+=r,a},getBytes:()=>n,resetBytes:()=>{n=0}}}const ln=new WeakMap;function xn(e){const t=e?ln.get(e):null;if(t){ln.delete(e),t.inUse=!1;for(const n of t.buffers)n.destroy();t.buffers.length=0}}function uo(e,t,n){const s=ln.get(e);if(s){if(s.key===t&&!s.inUse)return s.inUse=!0,s;if(s.inUse){const r=n();return Rt($t({key:t},r),{inUse:!0,pooled:!1})}ln.delete(e);for(const r of s.buffers)r.destroy();s.buffers.length=0}const o=n(),i=Rt($t({key:t},o),{inUse:!0,pooled:!0});return ln.set(e,i),i}function qt(e,t,n){return e.createShaderModule({label:t,code:n})}function gs(e,t,n,s,o){return ve(this,null,function*(){const i=e.createBindGroupLayout({entries:o.map((r,a)=>typeof r=="string"?{binding:a,visibility:GPUShaderStage.COMPUTE,buffer:{type:r}}:{binding:a,visibility:GPUShaderStage.COMPUTE,buffer:r})});try{const r=yield e.createComputePipelineAsync({label:t,layout:e.createPipelineLayout({bindGroupLayouts:[i]}),compute:{module:n,entryPoint:s}});return{bgl:i,pipe:r}}catch(r){if(n!=null&&n.getCompilationInfo){const a=yield n.getCompilationInfo().catch(()=>null),f=a?a.messages.filter(l=>l.type==="error"):[];if(f.length)throw new Error(`meshnet_fast_v4 [${t}] WGSL error: `+f.map(l=>`L${l.lineNum}:${l.linePos} ${l.message}`).join(" | "))}throw r}})}function is(e,t){const n=t?`enable f16;
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
  let dstX4 = ${jt}u + wid.x * 8u + x4Loc;
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
  let dstX4 = ${jt}u + wid.x * 8u + x4Loc;
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
}`}function Rr(){return`
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
}`}function Gr(){return`
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
}`}function an(e,t,n,s,o){return ve(this,null,function*(){const i=ds(Lr,e);let r=i.get(t);return r||(r=ve(null,null,function*(){const a=qt(e,t,n());return gs(e,t,a,s,o)}).catch(a=>{throw i.delete(t),a}),i.set(t,r)),r})}function Ws(e,t,n,s,o){t.fill(0);const i=z*z*z;if(!(o&&e[0]===s&&e[i-1]===s))return{hasBgSkip:!1};if(n.fill(0),(e instanceof Uint8Array||e instanceof Uint8ClampedArray)&&(e.byteOffset&3)===0&&Number.isInteger(s)&&s>=0&&s<=255){const f=new Uint32Array(e.buffer,e.byteOffset,i>>>2),l=new Uint32Array(n.buffer,n.byteOffset,z*z>>>2),c=(s&255)*16843009>>>0;let g=0;for(let d=0;d<z;d++)for(let u=0;u<16384;u++)l[u]|=f[g++]^c}else{let f=0;const l=z*z;for(let c=0;c<z;c++)for(let g=0;g<l;g++,f++)e[f]!==s&&(n[g]=1)}let a=0;for(let f=0;f<z;f++){const l=f*z;for(let c=0;c<z;c++)n[l+c]!==0&&(t[c*z+f]=1,a++)}return a===0||a>=6e4?{hasBgSkip:!1}:{hasBgSkip:!0}}function fo(e){return e?`${e.grayMask}_${e.whiteMask}_${e.csfMask}_${e.temperature}_${e.supportTemperature}`:"seg"}function po(l,c,g,d,u,p,m,v){return ve(this,arguments,function*(e,t,n,s,o,i,r,a,{includeCls:f=!0}={}){var Y;const k=ds(lo,e),_=s?1:0,h=o?1:0,w=r.useUniformWeff?1:0,S=(V,ce,Ge,ze)=>gs(e,V,ce,Ge,ze),b=["storage","storage","storage","storage"],P=["read-only-storage","storage","storage","storage","storage","storage","read-only-storage","storage","uniform","uniform","uniform"],F=["read-only-storage","read-only-storage","storage","storage","read-only-storage","uniform"],$=["storage","storage","storage","storage","read-only-storage","read-only-storage",{type:"uniform",hasDynamicOffset:!0,minBindingSize:32}],x=["storage","storage","storage","storage","read-only-storage","read-only-storage","read-only-storage","uniform"],G=["read-only-storage","read-only-storage","read-only-storage","read-only-storage","storage","storage",r.useUniformWeff?"uniform":"read-only-storage","read-only-storage",{type:"uniform",hasDynamicOffset:!0,minBindingSize:32}],M=["read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","storage","uniform","uniform","uniform"],A=`128|init|${t.cs}|${t.activation}|${_}`,T=`128|conv0|${t.cs}|${t.dilations[0]}|${t.norm}|${_}|${h}`,L=`128|prep|${t.chan}|${t.cs}|${t.activation}|${t.norm}|${_}`,B=`128|flush|${t.cs}|${_}`,N=`128|norm|${t.cs}|${t.activation}|${t.norm}|${_}`,U=`128|cls|${t.chan}|${t.cs}|${t.nclass}|${(Y=n==null?void 0:n.clsK4)!=null?Y:0}|${r.numConvs}|${t.activation}|${t.norm}|${_}|${fo(i)}`,te=Ht(k,A,()=>{const V=qt(e,"init_act8_128",r.initActWgsl());return S("init_act8_128",V,"main",b)}),le=Ht(k,T,()=>ve(null,null,function*(){const V=qt(e,"conv0_128",r.conv0Wgsl()),ce=yield Promise.all(r.halfPass0?[S("conv0_128_lo",V,"main_lo",P),S("conv0_128_hi",V,"main_hi",P),S("conv0_128_bg_lo",V,"main_bg_lo",P),S("conv0_128_bg_hi",V,"main_bg_hi",P)]:[S("conv0_128",V,"main",P),S("conv0_128_bg",V,"main_bg",P)]);return r.halfPass0?{lo:ce[0],hi:ce[1],bgLo:ce[2],bgHi:ce[3]}:{main:ce[0],bg:ce[1]}})),E=Ht(k,L,()=>ve(null,null,function*(){const V=qt(e,"prep_128",r.prepWgsl()),[ce,Ge]=yield Promise.all([S("moments_finish_128",V,"moments_finish",F),S("prep_weff_128",V,"prep_weff",F)]);return{pMomFin:ce,pPrepW:Ge}})),I=Ht(k,B,()=>{const V=qt(e,"flush_128",r.flushWgsl());return S("flush_stage_128",V,"main",$)}),D=Ht(k,N,()=>ve(null,null,function*(){const V=qt(e,"norm_128",r.normWgsl()),[ce,Ge]=yield Promise.all([S("norm_quant8_128",V,"main",x),S("norm_halo_fill_128",V,"norm_halo_fill",x)]);return{pNorm:ce,pNormHalo:Ge}})),ue=f?Ht(k,U,()=>{const V=qt(e,"cls_128",r.clsWgsl());return S("classify_v4_128",V,"main",M)}):Promise.resolve(null),O=a.map(V=>Ht(k,`128|conv|${t.chan}|${t.cs}|${V}|${t.activation}|${t.norm}|${w}|${_}|${h}`,()=>ve(null,null,function*(){const ce=qt(e,`conv_128_d${V}`,r.getConvWgsl(V));if(r.halfPassConv){const[we,Z,Ue,X,Ie,tt]=yield Promise.all([S(`conv_128_d${V}_lo`,ce,"main_lo",G),S(`conv_128_d${V}_hi`,ce,"main_hi",G),S(`conv_128_d${V}_ext_lo`,ce,"main_ext_lo",G),S(`conv_128_d${V}_ext_hi`,ce,"main_ext_hi",G),S(`conv_128_d${V}_bg_lo`,ce,"main_bg_lo",G),S(`conv_128_d${V}_bg_hi`,ce,"main_bg_hi",G)]);return{lo:we,hi:Z,extLo:Ue,extHi:X,bgLo:Ie,bgHi:tt}}const[Ge,ze,ge]=yield Promise.all([S(`conv_128_d${V}`,ce,"main",G),S(`conv_128_d${V}_ext`,ce,"main_ext",G),S(`conv_128_d${V}_bg`,ce,"main_bg",G)]);return{main:Ge,ext:ze,bg:ge}}))),[j,ye,Me,Re,$e,ne,...re]=yield Promise.all([te,le,E,I,D,ue,...O]),W={};return a.forEach((V,ce)=>{W[V]=re[ce]}),{pInit:j,pMomFin:Me.pMomFin,pPrepW:Me.pPrepW,pFlush:Re,pNorm:$e.pNorm,pNormHalo:$e.pNormHalo,pCls:ne,pConv0:ye,convPipes:W}})}function mo(c,g,d,u,p,m,v,k,_){return ve(this,arguments,function*(e,t,n,s,o,i,r,a,f,{includeCls:l=!0}={}){var Y;const h=ds(lo,e),w=s?1:0,S=o?1:0,b=i?1:0,P=a.useUniformWeff?1:0,F=a.chunkableStd?1:0,$=(V,ce,Ge,ze)=>gs(e,V,ce,Ge,ze),x=["storage","storage"],G=["read-only-storage","storage","storage","read-only-storage","read-only-storage","storage","storage","read-only-storage","uniform"],M=["read-only-storage","read-only-storage","storage","storage","storage","storage","read-only-storage","uniform"],A=["storage","storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","uniform"],T=["read-only-storage","read-only-storage","storage","storage","storage","storage",a.useUniformWeff?"uniform":"read-only-storage","read-only-storage",a.chunkableStd?{type:"uniform",hasDynamicOffset:!0,minBindingSize:32}:"uniform"],L=["read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","storage","read-only-storage","uniform"],B=`std|init|${t.cs}|${t.activation}|${w}|${b}`,N=`std|conv0|${t.cs}|${t.dilations[0]}|${t.norm}|${w}|${S}|${b}`,U=`std|prep|${t.chan}|${t.cs}|${t.activation}|${t.norm}|${w}|${b}`,te=`std|norm|${t.cs}|${t.activation}|${t.norm}|${w}|${b}`,le=`std|cls|${t.chan}|${t.cs}|${t.nclass}|${(Y=n==null?void 0:n.clsK4)!=null?Y:0}|${t.activation}|${t.norm}|${w}|${b}|${fo(r)}`,E=Ht(h,B,()=>{const V=qt(e,"init_act8",a.initActWgsl());return $("init_act8",V,"main",x)}),I=Ht(h,N,()=>ve(null,null,function*(){const V=qt(e,"conv0",a.conv0Wgsl()),ce=yield Promise.all(a.halfPass0?[$("conv0_lo",V,"main_lo",G),$("conv0_hi",V,"main_hi",G),$("conv0_bg_lo",V,"main_bg_lo",G),$("conv0_bg_hi",V,"main_bg_hi",G)]:[$("conv0",V,"main",G),$("conv0_bg",V,"main_bg",G)]);return a.halfPass0?{lo:ce[0],hi:ce[1],bgLo:ce[2],bgHi:ce[3]}:{main:ce[0],bg:ce[1]}})),D=Ht(h,U,()=>ve(null,null,function*(){const V=qt(e,"prep",a.prepWgsl()),[ce,Ge]=yield Promise.all([$("moments_finish",V,"moments_finish",M),$("prep_weff",V,"prep_weff",M)]);return{pMomFin:ce,pPrepW:Ge}})),ue=Ht(h,te,()=>ve(null,null,function*(){const V=qt(e,"norm",a.normWgsl()),[ce,Ge]=yield Promise.all([$("norm_quant8",V,"main",A),$("norm_halo_fill",V,"norm_halo_fill",A)]);return{pNorm:ce,pNormHalo:Ge}})),O=l?Ht(h,le,()=>{const V=qt(e,"cls",a.clsWgsl());return $("classify_v4",V,"main",L)}):Promise.resolve(null),j=f.map(V=>Ht(h,`std|conv|${t.chan}|${t.cs}|${V}|${t.activation}|${t.norm}|${P}|${w}|${S}|${b}${F?"|chk1":""}`,()=>ve(null,null,function*(){const ce=qt(e,`conv_d${V}`,a.getConvWgsl(V));if(a.halfPassConv){const[ge,we,Z,Ue]=yield Promise.all([$(`conv_d${V}_lo`,ce,"main_lo",T),$(`conv_d${V}_hi`,ce,"main_hi",T),$(`conv_d${V}_ext_lo`,ce,"main_ext_lo",T),$(`conv_d${V}_ext_hi`,ce,"main_ext_hi",T)]);return{lo:ge,hi:we,extLo:Z,extHi:Ue}}const[Ge,ze]=yield Promise.all([$(`conv_d${V}`,ce,"main",T),$(`conv_d${V}_ext`,ce,"main_ext",T)]);return{main:Ge,ext:ze}}))),[ye,Me,Re,$e,ne,...re]=yield Promise.all([E,I,D,ue,O,...j]),W={};return f.forEach((V,ce)=>{W[V]=re[ce]}),{pInit:ye,pMomFin:Re.pMomFin,pPrepW:Re.pPrepW,pNorm:$e.pNorm,pNormHalo:$e.pNormHalo,pCls:ne,pConv0:Me,convPipes:W}})}function Rs(e,t,n,s,o){n.fill(0);const i=o&&e[0]===0&&e[e.length-1]===0;let r=0,a=0;if(!i){if(s)for(let f=0;f<z;f++){const l=f*z*pn;for(let c=0;c<z;c++){let g=l+c*pn+32;for(let d=0;d<z;d++,a++,g++){const u=e[a];t[g]=u===0?0:as(u)}}}else for(let f=0;f<z;f++){const l=f*z*pn;for(let c=0;c<z;c++){const g=f*z*z+c*z;t.set(e.subarray(g,g+z),l+c*pn+32)}}return{hasBgSkip:!1}}for(let f=0;f<z;f++){const l=f*z*pn;for(let c=0;c<z;c++){let g=!1,d=l+c*pn+32;for(let u=0;u<z;u++,a++,d++){const p=e[a];p!==0?(t[d]=s?as(p):p,g=!0):t[d]=0}g&&(n[f*z+c]=1,r++)}}return r===0||r>=6e4?{hasBgSkip:!1}:{hasBgSkip:!0}}function Ln(e,t){const n=new Uint8Array(z*z);for(let s=0;s<z;s++){const o=s*z,i=s-t,r=s+t;for(let a=0;a<z;a++){if(!e[o+a])continue;const f=a-t,l=a+t;if(i>=0){const c=i*z;f>=0&&(n[c+f]=1),n[c+a]=1,l<z&&(n[c+l]=1)}if(f>=0&&(n[o+f]=1),n[o+a]=1,l<z&&(n[o+l]=1),r>=0&&r<z){const c=r*z;f>=0&&(n[c+f]=1),n[c+a]=1,l<z&&(n[c+l]=1)}}}return n}function Er(e,t){const n=new Uint8Array(z*z),s=new Uint8Array(z*z),o=new Int32Array(z+1);for(let i=0;i<z;i++){const r=i*z;for(let a=0;a<z;a++)o[a+1]=o[a]+e[r+a];for(let a=0;a<z;a++)o[Math.min(z-1,a+t)+1]-o[Math.max(0,a-t)]>0&&(n[r+a]=1)}for(let i=0;i<z;i++){for(let r=0;r<z;r++)o[r+1]=o[r]+n[r*z+i];for(let r=0;r<z;r++)o[Math.min(z-1,r+t)+1]-o[Math.max(0,r-t)]>0&&(s[r*z+i]=1)}return s}function Zn(e){const t=new Uint8Array(Ve);for(let n=0;n<z;n++){const s=n*z,o=n*64;for(let i=0;i<64;i++){const r=s+(i<<2);e[r]|e[r+1]|e[r+2]|e[r+3]&&(t[o+i]=1)}}return t}function Gn(e){const t=new Uint8Array(z*z);for(let n=0;n<z;n++){const s=n*z,o=n*64;for(let i=0;i<64;i++)if(e[o+i]){const r=s+(i<<2);t[r]=1,t[r+1]=1,t[r+2]=1,t[r+3]=1}}return t}function En(e){let t=0;for(let o=0;o<Ve;o++)t+=e[o];const n=new Uint32Array(t);let s=0;for(let o=0;o<z;o++){const i=o*64;for(let r=0;r<64;r++)e[i+r]&&(n[s++]=o<<8|r)}return n}function fn(e){let t=0;for(let n=0;n<e.length;n++)t+=e[n];return t}function Gs(e){const t=new Uint8Array(Ve);if(e===1024)for(let n=0;n<32;n++)for(let s=0;s<32;s++){const o=n*8+(n*3+s*5&7),i=s*2+(n+s&1);t[o*64+i]=1}else if(e===512)for(let n=0;n<32;n++)for(let s=0;s<16;s++){const o=n*8+(n*3+s*5&7),i=s*4+(n+s*3&3);t[o*64+i]=1}else for(let n=0;n<16;n++)for(let s=0;s<16;s++){const o=n*16+(n*7+s*3&15),i=s*4+(n+s*3&3);t[o*64+i]=1}return t}function go(e,t,n,s){const o=n.length,i=()=>({isFull:!0,mode:"full",writtenMask:null,computedMask:null,mainStrips:null,extStrips:null,nMomExt:0,normStrips:null,haloRows:null,bgStrip:null,extWeight:0});if(!s||!t.hasBgSkip)return{clsSkipped:!1,clsStrips:null,layers:Array.from({length:o},i)};const r=Zn(Er(e,3)),a=fn(r)<15800,f=a?En(r):null,l=new Array(o);let c=null;for(let _=0;_<o;_++){const h=n[_],w=Ln(_===0?e:c,h);if(_>0)for(let b=0;b<z;b++){const P=b<h||b>=z-h,F=b*z;for(let $=0;$<z;$++)(P||$<h||$>=z-h)&&(w[F+$]=1)}c=w;const S=new Uint8Array(Ve);for(let b=0;b<z;b++){const P=b*z,F=b*64;for(let $=0;$<64;$++){const x=P+($<<2);w[x]|w[x+1]|w[x+2]|w[x+3]||(S[F+$]=1)}}l[_]=S}const g=new Array(o);g[o-1]=r;for(let _=o-2;_>=0;_--)g[_]=Zn(Ln(Gn(g[_+1]),n[_+1]));const d=a&&o>=4&&n[o-1]<=2&&n[o-2]<=4&&n[o-3]<=6,u=Math.max(1,o-3),p=new Array(o).fill(null),m=new Array(o).fill(null),v=new Array(o).fill(null);if(d){const h=(Ve-fn(g[o-1]))/Ve>=.52?256:512,w=1024,S=Gs(h),b=Gs(w),P=g[o-1],F=new Uint8Array(Ve);let $=0;for(let x=0;x<Ve;x++)S[x]&&!P[x]&&(F[x]=1,$++);if($>0&&$<=Tn&&fn(P)+$<=15360){p[o-1]=F,m[o-1]=new Uint8Array(Ve),v[o-1]=S;for(let x=o-2;x>=u;x--){const G=new Uint8Array(Ve),M=g[x+1],A=p[x+1];for(let E=0;E<Ve;E++)G[E]=M[E]|A[E];const T=Zn(Ln(Gn(G),n[x+1])),L=new Uint8Array(Ve),B=g[x];for(let E=0;E<Ve;E++)T[E]&&!B[E]&&(L[E]=1);const N=x===u?b:S,U=new Uint8Array(Ve);let te=0,le=0;for(let E=0;E<Ve;E++)(L[E]||N[E])&&!B[E]&&(U[E]=1,te++,N[E]&&le++);if(le===0||te>Tn||fn(B)+te>15360){const E=x+1,I=g[E],D=m[E],ue=new Uint8Array(Ve);let O=0;for(let j=0;j<Ve;j++)(D[j]||b[j])&&!I[j]&&(ue[j]=1,O++);O<=Tn&&fn(I)+O<=15360&&(p[E]=ue,v[E]=b);break}m[x]=L,p[x]=U,v[x]=N}}}const k=new Array(o);for(let _=0;_<o;_++){const h=fn(l[_]),w=Ve-h,S=p[_]!==null,b=S?fn(g[_])+fn(p[_]):1/0;if(h>=512&&w<=b){const P=new Uint8Array(Ve);let F=-1;for(let M=0;M<Ve;M++)l[_][M]?F<0&&(F=M):P[M]=1;const $=P.slice();$[F]=1;const x={z:F>>>6,yWg:F&63,packed:F>>>6<<8|F&63},G=En(P);k[_]={isFull:!1,mode:"rpure",writtenMask:P,computedMask:$,mainStrips:G,extStrips:_===0?null:new Uint32Array([x.packed]),nMomExt:_===0?0:1,normStrips:G,haloRows:null,bgStrip:x,extWeight:h}}else if(S&&b<=15360){const P=g[_],F=p[_],$=m[_],x=v[_],G=En(P),M=[],A=[];for(let U=0;U<z;U++){const te=U*64;for(let le=0;le<64;le++){const E=te+le;if(!F[E])continue;const I=U<<8|le;x[E]?M.push(I):A.push(I)}}const T=M.length;if(T===0){k[_]=i();continue}const L=new Uint32Array(M.length+A.length);L.set(M,0),L.set(A,M.length);const B=new Uint8Array(Ve),N=new Uint8Array(Ve);for(let U=0;U<Ve;U++)B[U]=P[U]|$[U],N[U]=P[U]|F[U];k[_]={isFull:!1,mode:"bwd",writtenMask:B,computedMask:N,mainStrips:G,extStrips:L,nMomExt:T,normStrips:_+1<o?En(B):null,haloRows:null,bgStrip:null,extWeight:(Ve-G.length)/T}}else k[_]=i()}for(let _=o-2;_>=0;_--)k[_].mode==="bwd"&&k[_+1].mode!=="bwd"&&(k[_]=i());for(let _=0;_<o-1;_++){const h=k[_];if(h.mode!=="rpure")continue;const w=k[_+1],S=w.isFull?new Uint8Array(z*z).fill(1):Ln(Gn(w.computedMask),n[_+1]),b=Gn(h.writtenMask),P=[];for(let F=0;F<z;F++){const $=F*z;for(let x=0;x<z;x++)S[$+x]&&!b[$+x]&&P.push(F<<8|x)}P.length>0&&(h.haloRows=new Uint32Array(P))}return{clsSkipped:a,clsStrips:f,layers:k}}function Ir(e,t){const n=t.chan,s=t.cs,o=s/4,i=t.nclass,r=Math.ceil(i/4),{convs:a,affines:f,classifier:l}=e,c=a.length,g=27*o,d=9*s*3*o,u=s*r,p=(g+(c-1)*d+u)*4,m=new Float32Array(p),v=4*s,k=c*v,_=new Float32Array(k+r*4),h=(b,P,F)=>{if(t.norm!=="gn"||P>=n)return 1;const $=a[b],x=F*27,G=P*x;let M=0;for(let A=0;A<x;A++)M+=Math.abs($.w[G+A]);return Math.max(M/16,1e-6)};for(let b=0;b<a[0].outC;b++){const P=h(0,b,a[0].inC),F=1/P;for(let $=0;$<27;$++)m[$*s+b]=a[0].w[b*27+$]*F;_[2*s+b]=t.eps/(P*P),a[0].bias&&(_[3*s+b]=a[0].bias[b])}for(let b=a[0].outC;b<s;b++)_[2*s+b]=t.eps;for(let b=1;b<c;b++){const P=a[b],F=(g+(b-1)*d)*4,$=b*v;for(let x=0;x<P.outC;x++){const G=h(b,x,P.inC),M=1/G,A=x>>>2,T=x&3;for(let L=0;L<9;L++)for(let B=0;B<P.inC;B++)for(let N=0;N<3;N++){const U=L*3+N,te=F+(((L*s+B)*3+N)*o+A)*4+T;m[te]=P.w[(x*P.inC+B)*27+U]*M}_[$+2*s+x]=t.eps/(G*G),P.bias&&(_[$+3*s+x]=P.bias[x])}for(let x=P.outC;x<s;x++)_[$+2*s+x]=t.eps}for(let b=0;b<c;b++){const P=b*v,F=f[b];for(let $=0;$<n;$++)t.norm==="gn"?(_[P+$]=F!=null&&F.scale?F.scale[$]:1,_[P+s+$]=F!=null&&F.bias?F.bias[$]:0):(_[P+$]=1,_[P+s+$]=0)}const w=g+(c-1)*d,S=w*4;for(let b=0;b<n;b++)for(let P=0;P<i;P++)m[S+b*r*4+P]=l.w[P*l.inC+b];for(let b=0;b<r*4;b++)_[k+b]=b<i?l.bias?l.bias[b]:0:-1e30;return{wF32:m,wF16:zr(m),qmetaF32:_,w0Vec4s:g,hiddenVec4PerLayer:d,clsVec4Off:w,clsBiasOff:k,metaStride:v,clsK4:r}}function An(e){if(e==="gelu_tanh")return`fn act(x : f32) -> f32 {
  let u = clamp(0.7978845608028654 * (x + 0.044715 * x * x * x), -9.0, 9.0);
  return 0.5 * x * (1.0 + tanh(u));
}`;if(e==="relu")return"fn act(x : f32) -> f32 { return max(x, 0.0); }";if(e==="elu")return"fn act(x : f32) -> f32 { return select(exp(clamp(x, -20.0, 0.0)) - 1.0, x, x >= 0.0); }";throw new Error(`meshnet_fast_v4: unsupported activation '${e}'`)}function _o(e){return e==="gelu_tanh"?{uZeroInt:7,uZeroFloat:7/255,uZeroWord:117901063,sterbenzSub:"1.02734375h",zeroBin:7}:e==="relu"?{uZeroInt:0,uZeroFloat:0,uZeroWord:0,sterbenzSub:"1.0h",zeroBin:0}:{uZeroInt:32,uZeroFloat:32/255,uZeroWord:538976288,sterbenzSub:"1.125h",zeroBin:32}}function bo({chan:e,clsK4:t,nclass:n,V4:s,suf:o,readBiasStmt:i,biasExpr:r,probCfg:a}){const f=`    var acc0 = ${s}(0.0${o});
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
${Lt(4,d=>`    let l${d} = vec4<f32>(acc${d}) + vec4<f32>(${r(d)});
    let m${d} = l${d} > best_v;
    best_v = select(best_v, l${d}, m${d});
    best_k = select(best_k, vec4<u32>(k_base + ${d}u), m${d});
`)}  }

  labels8[row_idx * ${Pt}u + x4] = best_k.x | (best_k.y << 8u) | (best_k.z << 16u) | (best_k.w << 24u);`;const l=`f32(${(1/Math.max(a.temperature,1e-6)).toExponential(8)})`,c=`f32(${(1/Math.max(a.supportTemperature,1e-6)).toExponential(8)})`,g=a.temperature===a.supportTemperature;return`  var max_v = vec4<f32>(-1.0e29);
  for (var k4 : u32 = 0u; k4 < ${t}u; k4 = k4 + 1u) {
${f}
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
${f}
${Lt(4,d=>`    let k${d} = k_base + ${d}u;
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
  }`}function ho({device:e,hasF16:t,nvox:n,outBufBytes:s,inpBuf:o,act8_0:i,labels8Buf:r,readbackBuf:a,pInit:f,bgInit:l,pCls:c,bgCls:g,clsUbo:d,packed:u,modelEntry:p,probCfg:m,canGpuProb:v,probSlots:k,ownedBuffers:_,mkBuf:h}){let w=!1,S=!1,b=!1,P=!1;const F=new Uint8Array(z*z);let $=null,x=null,G=null,M=null;const A=(I,D)=>e.createBindGroup({layout:I,entries:D.map((ue,O)=>({binding:O,resource:ue&&ue.buffer?ue:{buffer:ue}}))});function T(){if(!$){const I=t?"prep_in_u8_f16":"prep_in_u8_f32";$=ve(null,null,function*(){const{bgl:D,pipe:ue}=yield an(e,I,()=>is(!0,t),"main",["read-only-storage","storage","uniform"]);if(P)return null;const O=h(256*4,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST),j=new Float32Array(256),ye=A(D,[{buffer:r,offset:0,size:n},o,O]);return{pipe:ue,ubo:O,lutF32:j,bg:ye}}).catch(D=>{throw $=null,D})}return $}function L(){if(!x){const I=t?"prep_in_f32_f16":"prep_in_f32_f32";x=ve(null,null,function*(){const{bgl:D,pipe:ue}=yield an(e,I,()=>is(!1,t),"main",["read-only-storage","storage","uniform"]);if(P)return null;const O=h(16,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST),j=new Float32Array(4),ye=s>=n*4?A(D,[{buffer:r,offset:0,size:n*4},o,O]):null,Me=i.size>=n*4?A(D,[{buffer:i,offset:0,size:n*4},o,O]):null;return{pipe:ue,ubo:O,f32Tmp:j,bgLabels:ye,bgAct0:Me}}).catch(D=>{throw x=null,D})}return x}function B(){return G||(G=ve(null,null,function*(){const{bgl:I,pipe:D}=yield an(e,"transpose_u8_v4",co,"main",["read-only-storage","storage"]);if(P)return null;const ue=A(I,[{buffer:r,offset:0,size:n},{buffer:o,offset:0,size:n}]);return{pipe:D,bg:ue}}).catch(I=>{throw G=null,I})),G}function N(){return M||(M=ve(null,null,function*(){const[I,D,ue,O]=yield Promise.all([an(e,"prob_unpack_two",Gr,"main",["read-only-storage","storage","storage"]),an(e,"prob_blur_axis",Us,"blur_axis",["read-only-storage","storage","read-only-storage","uniform"]),an(e,"prob_blur_z_gate",Us,"blur_z_gate",["read-only-storage","storage","read-only-storage","uniform"]),an(e,"transpose_f32",Rr,"main",["read-only-storage","storage"])]);if(P)return null;const j=GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST,ye=144,Me=h(ye,j),Re=h(ye,j),$e=h(ye,j),ne=V=>({buffer:V,offset:0,size:s}),re=A(I.bgl,[ne(k.pass0HoldBuf),ne(k.y0),ne(k.y1)]),W=A(I.bgl,[ne(r),ne(k.b),ne(k.sup)]),Y=[k.y0,k.y1,k.b].map(V=>({buf:V,bgBlurX:A(D.bgl,[ne(V),ne(r),ne(k.sup),Me]),bgBlurY:A(D.bgl,[ne(r),ne(V),ne(k.sup),Re]),bgBlurZ:A(ue.bgl,[ne(V),ne(r),ne(k.sup),$e]),bgTranspose:A(O.bgl,[ne(r),ne(V)])}));return{pUnpack:I.pipe,pBlurAxis:D.pipe,pBlurZGate:ue.pipe,pTransposeF32:O.pipe,bgUnpack0:re,bgUnpack1:W,tissues:Y,uboX:Me,uboY:Re,uboZ:$e,uboScratch:new ArrayBuffer(ye),lastBlurKey:null}}).catch(I=>{throw M=null,I})),M}function U(){m?v&&N().catch(()=>{}):(T().catch(()=>{}),B().catch(()=>{}))}function te(){P=!0}function le(Me){return ve(this,arguments,function*({volume:I,ioOpts:D,useCone:ue,padInputHost:O,headRowHost:j,hasF16Flag:ye}){var $e;if(D!=null&&D.gpuNativeInput){const ne=($e=D.normOffset)!=null?$e:0,re=D.normRange||1,W=I instanceof Uint8Array||I instanceof Uint8ClampedArray,Y=s>=n*4||i.size>=n*4;if(W){const ze=Ws(I,j,F,ne,ue),ge=yield T();for(let we=0;we<256;we++)ge.lutF32[we]=we===ne?0:(we-ne)/re;return e.queue.writeBuffer(ge.ubo,0,ge.lutF32),e.queue.writeBuffer(r,0,I,0,n),{info:ze,runPrePasses(we,Z){(!S||b)&&(we.clearBuffer(o),S=!0,b=!1);const Ue=we.beginComputePass();if(Ue.setPipeline(ge.pipe),Ue.setBindGroup(0,ge.bg),Ue.dispatchWorkgroups(8,z,8),Ue.end(),Z.push("preprocess"),w){const X=we.beginComputePass();X.setPipeline(f.pipe),X.setBindGroup(0,l),X.dispatchWorkgroups(1,z,z),X.end(),Z.push("preprocess"),w=!1}}}}if(Y){const ze=Ws(I,j,F,ne,ue),ge=yield L(),we=!(s>=n*4),Z=we?i:r,Ue=we?ge.bgAct0:ge.bgLabels,X=I instanceof Float32Array?I:Float32Array.from(I);return ge.f32Tmp[0]=ne,ge.f32Tmp[1]=re,ge.f32Tmp[2]=0,ge.f32Tmp[3]=0,e.queue.writeBuffer(ge.ubo,0,ge.f32Tmp),e.queue.writeBuffer(Z,0,X,0,n),{info:ze,runPrePasses(Ie,tt){(!S||b)&&(Ie.clearBuffer(o),S=!0,b=!1);const qe=Ie.beginComputePass();if(qe.setPipeline(ge.pipe),qe.setBindGroup(0,Ue),qe.dispatchWorkgroups(8,z,8),qe.end(),tt.push("preprocess"),w||we){const ot=Ie.beginComputePass();ot.setPipeline(f.pipe),ot.setBindGroup(0,l),ot.dispatchWorkgroups(1,z,z),ot.end(),tt.push("preprocess"),w=!1}}}}const V=new Float32Array(n);for(let ze=0;ze<n;ze++){const ge=I[ze];V[ze]=ge===ne?0:(ge-ne)/re}const ce=kn(V,[z,z,z],[2,1,0]),Ge=Rs(ce,O,j,ye,ue);return e.queue.writeBuffer(o,0,O),S=!0,b=!1,{info:Ge,runPrePasses(ze,ge){if(w){const we=ze.beginComputePass();we.setPipeline(f.pipe),we.setBindGroup(0,l),we.dispatchWorkgroups(1,z,z),we.end(),ge.push("preprocess"),w=!1}}}}const Re=Rs(I,O,j,ye,ue);return e.queue.writeBuffer(o,0,O),S=!0,b=!1,{info:Re,runPrePasses(ne,re){if(w){const W=ne.beginComputePass();W.setPipeline(f.pipe),W.setBindGroup(0,l),W.dispatchWorkgroups(1,z,z),W.end(),re.push("preprocess"),w=!1}}}})}function E(Re){return ve(this,arguments,function*({enc:I,schedule:D,passCategories:ue,u4Tmp:O,ioOpts:j,paced:ye=!1,onProgress:Me=null}){const $e=D.clsSkipped?D.clsStrips.length:z;if(!m){O[0]=u.clsVec4Off,O[1]=u.clsBiasOff,O[2]=D.clsSkipped?0:1,O[3]=0,e.queue.writeBuffer(d,0,O);{const X=I.beginComputePass();X.setPipeline(c.pipe),X.setBindGroup(0,g),$e>0&&X.dispatchWorkgroups(1,D.clsSkipped?1:64,$e),X.end(),ue.push("classify")}if(j!=null&&j.gpuNativeOutput){const X=yield B(),Ie=I.beginComputePass();Ie.setPipeline(X.pipe),Ie.setBindGroup(0,X.bg),Ie.dispatchWorkgroups(8,z,8),Ie.end(),ue.push("postprocess"),b=!0,I.copyBufferToBuffer(o,0,a,0,n),e.queue.submit([I.finish()]),yield a.mapAsync(GPUMapMode.READ);const tt=new Uint8Array(a.getMappedRange()).slice();return a.unmap(),ye&&Me&&Me(1,""),[tt]}I.copyBufferToBuffer(r,0,a,0,s),e.queue.submit([I.finish()]),yield a.mapAsync(GPUMapMode.READ);const Z=new Uint8Array(a.getMappedRange()),Ue=new Float32Array(n);for(let X=0;X<n;X++)Ue[X]=Z[X];return a.unmap(),ye&&Me&&Me(1,""),[Ue]}if(v){const Z=yield N();O[0]=u.clsVec4Off,O[1]=u.clsBiasOff,O[2]=D.clsSkipped?0:1,O[3]=0,e.queue.writeBuffer(d,0,O),O[3]=1,e.queue.writeBuffer(k.clsUbo1,0,O);{const Fe=I.beginComputePass();Fe.setPipeline(c.pipe),Fe.setBindGroup(0,g),$e>0&&Fe.dispatchWorkgroups(1,D.clsSkipped?1:64,$e),Fe.end(),ue.push("classify")}I.copyBufferToBuffer(r,0,k.pass0HoldBuf,0,s),D.clsSkipped&&I.clearBuffer(r,0,s);{const Fe=I.beginComputePass();Fe.setPipeline(c.pipe),Fe.setBindGroup(0,k.bgCls1),$e>0&&Fe.dispatchWorkgroups(1,D.clsSkipped?1:64,$e),Fe.end(),ue.push("classify")}w=!0;const Ue=`${m.sigma}|${m.supportPower}`,X=m.sigma>0,Ie=X?Math.max(1,Math.round(3*m.sigma)):0;if(Z.lastBlurKey!==Ue){const Fe=new Uint32Array(Z.uboScratch),Ke=new Float32Array(Z.uboScratch);Ke.fill(0);let nt=1;if(X){nt=0;for(let pt=-Ie;pt<=Ie;pt++){const dt=Math.exp(-.5*pt*pt/(m.sigma*m.sigma));Ke[4+pt+Ie]=dt,nt+=dt}}else Ke[4]=1;Fe[1]=Ie,Ke[2]=nt,Fe[0]=0,Ke[3]=1,e.queue.writeBuffer(Z.uboX,0,Z.uboScratch),Fe[0]=1,e.queue.writeBuffer(Z.uboY,0,Z.uboScratch),Fe[0]=2,Ke[3]=m.supportPower,e.queue.writeBuffer(Z.uboZ,0,Z.uboScratch),Z.lastBlurKey=Ue}{const Fe=I.beginComputePass();Fe.setPipeline(Z.pUnpack),Fe.setBindGroup(0,Z.bgUnpack0),Fe.dispatchWorkgroups(256,256,1),Fe.end(),ue.push("postprocess");const Ke=I.beginComputePass();Ke.setPipeline(Z.pUnpack),Ke.setBindGroup(0,Z.bgUnpack1),Ke.dispatchWorkgroups(256,256,1),Ke.end(),ue.push("postprocess")}ye&&(e.queue.submit([I.finish()]),yield e.queue.onSubmittedWorkDone(),Me&&Me(.992,""),yield yn(),I=e.createCommandEncoder());const tt=!!(j!=null&&j.gpuNativeOutput);for(let Fe=0;Fe<3;Fe++){const Ke=Z.tissues[Fe];if(X){const pt=I.beginComputePass();pt.setPipeline(Z.pBlurAxis),pt.setBindGroup(0,Ke.bgBlurX),pt.dispatchWorkgroups(4,64,z),pt.end(),ue.push("postprocess");const dt=I.beginComputePass();dt.setPipeline(Z.pBlurAxis),dt.setBindGroup(0,Ke.bgBlurY),dt.dispatchWorkgroups(4,64,z),dt.end(),ue.push("postprocess")}const nt=I.beginComputePass();if(nt.setPipeline(Z.pBlurZGate),nt.setBindGroup(0,Ke.bgBlurZ),nt.dispatchWorkgroups(4,64,z),nt.end(),ue.push("postprocess"),tt){const pt=I.beginComputePass();pt.setPipeline(Z.pTransposeF32),pt.setBindGroup(0,Ke.bgTranspose),pt.dispatchWorkgroups(8,z,8),pt.end(),ue.push("postprocess")}else Fe<2&&I.copyBufferToBuffer(r,0,Ke.buf,0,s)}const qe=tt?[k.y0,k.y1,k.b]:[k.y0,k.y1,r];I.copyBufferToBuffer(qe[0],0,a,0,s),e.queue.submit([I.finish()]),yield a.mapAsync(GPUMapMode.READ);const ot=new Float32Array(a.getMappedRange()).slice();a.unmap();const rt=Fe=>ve(null,null,function*(){const Ke=e.createCommandEncoder();Ke.copyBufferToBuffer(Fe,0,a,0,s),e.queue.submit([Ke.finish()]),yield a.mapAsync(GPUMapMode.READ);const nt=new Float32Array(a.getMappedRange()).slice();return a.unmap(),nt}),it=yield rt(qe[1]),bt=yield rt(qe[2]);return ye&&Me&&Me(1,""),[ot,it,bt]}O[0]=u.clsVec4Off,O[1]=u.clsBiasOff,O[2]=D.clsSkipped?0:1,O[3]=0,e.queue.writeBuffer(d,0,O);{const Z=I.beginComputePass();Z.setPipeline(c.pipe),Z.setBindGroup(0,g),$e>0&&Z.dispatchWorkgroups(1,D.clsSkipped?1:64,$e),Z.end(),ue.push("classify"),I.copyBufferToBuffer(r,0,a,0,s)}e.queue.submit([I.finish()]),yield a.mapAsync(GPUMapMode.READ);const ne=1/65535,re=new Uint16Array(a.getMappedRange()),W=new Float32Array(n),Y=new Float32Array(n);for(let Z=0;Z<n;Z++)W[Z]=re[Z*2]*ne,Y[Z]=re[Z*2+1]*ne;a.unmap(),O[3]=1,e.queue.writeBuffer(d,0,O);const V=e.createCommandEncoder();D.clsSkipped&&V.clearBuffer(r,0,s);const ce=V.beginComputePass();ce.setPipeline(c.pipe),ce.setBindGroup(0,g),$e>0&&ce.dispatchWorkgroups(1,D.clsSkipped?1:64,$e),ce.end(),ue.push("classify"),V.copyBufferToBuffer(r,0,a,0,s),e.queue.submit([V.finish()]),yield a.mapAsync(GPUMapMode.READ);const Ge=new Uint16Array(a.getMappedRange()),ze=new Float32Array(n),ge=new Float32Array(n);for(let Z=0;Z<n;Z++)ze[Z]=Ge[Z*2]*ne,ge[Z]=Ge[Z*2+1]*ne;a.unmap();const we=Ar([W,Y,ze],ge,[z,z,z],p);return j!=null&&j.gpuNativeOutput?we.map(Z=>kn(Z,[z,z,z],[2,1,0])):we})}return{prepareInput:le,finishAndReadback:E,warmupIoPipelines:U,dispose:te}}function wo(e){const{cs:t,chan:n,nclass:s,clsK4:o,dilations:i,activation:r,norm:a,hasF16:f,hasSubgroups32:l,splitHalves:c,probCfg:g,chunkableStd:d=!1}=e,u=t/4,p=c?t/2:t,m=p*_t,v=p*Pt,k=9*t*3*u,_=k,h=k+u,w=f&&u%2===0&&h*8<=65536,S=_o(r),b=f?`enable f16;
`:"",P=l?`enable subgroups;
`:"",F=f?"f16":"f32",$=f?"h":"f",x=`vec4<${F}>`,G=f?256:255,M=({cStart:E,cEnd:I,hrExpr:D,yRowExpr:ue,isPermuted:O,momBinding:j,alsoWriteMomMain:ye=!1,writeY8Expr:Me="true"})=>{const Re=O?".xzyw":"",$e=(re,W)=>c&&re>=p?`y8_1[${ue} + ${(re-p)*Pt}u] = ${W};`:`y8_0[${ue} + ${re*Pt}u] = ${W};`;if(f&&l)return Lt(I-E,re=>{const W=E+re;return`  {
    let f = vec4<f32>(a_${W}${Re});
    let ls = subgroupAdd(f.x + f.y + f.z + f.w);
    let lq = subgroupAdd(dot(f, f));
    let lmn = subgroupMin(min(min(f.x, f.y), min(f.z, f.w)));
    let lmx = subgroupMax(max(max(f.x, f.y), max(f.z, f.w)));
    let sp = lmx - lmn;
    let inv = select(0.0, 1.0 / sp, sp > 1e-7);
    if (${Me}) {
      ${$e(W,"pack4x8unorm((f - vec4<f32>(lmn)) * inv)")}
    }
    if (slane == 0u) {
      let mv = vec4<f32>(ls, lq, lmn, sp);
      ${j}[(${D}) * ${t}u + ${W}u] = mv;
      ${ye?`mom_main[(row_idx * 2u + sg) * ${t}u + ${W}u] = mv;`:""}
    }
  }
`});let ne="";for(let re=E;re<I;re+=2){const W=re,Y=re+1;ne+=`  {
    let f0 = vec4<f32>(a_${W}${Re});
    let f1 = vec4<f32>(a_${Y}${Re});
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
        ${ye?`mom_main[(row_idx * 2u + sg) * ${t}u + ${W}u] = mv0;`:""}
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
        ${j}[(${D}) * ${t}u + ${Y}u] = mv1;
        ${ye?`mom_main[(row_idx * 2u + sg) * ${t}u + ${Y}u] = mv1;`:""}
      }
    }
    workgroupBarrier();
    let p_mn0  = sh_res_mn[hslot];
    let p_inv0 = sh_res_inv[hslot];
    let p_mn1  = sh_res_mn[hslot + 1u];
    let p_inv1 = sh_res_inv[hslot + 1u];
    if (${Me}) {
      ${$e(W,"pack4x8unorm((f0 - vec4<f32>(p_mn0)) * p_inv0)")}
      ${$e(Y,"pack4x8unorm((f1 - vec4<f32>(p_mn1)) * p_inv1)")}
    }
    workgroupBarrier();
  }
`}return ne},A=f&&l?"":`var<workgroup> sh_s       : array<vec2<f32>, 256>;
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
    ${c?"act1[idx] = val;":""}
  }
}`,L=i[0];return{initActWgsl:T,conv0Wgsl:()=>{const E=!f&&c,I=(Me,Re)=>{const $e=Me/4,ne=Re/4;return Lt(ne-$e,re=>{const W=$e+re,Y=W*4;return`          {
            let w0 = w16_4[wb + ${W}u];
            let w1 = w16_4[wb + ${u+W}u];
            let w2 = w16_4[wb + ${2*u+W}u];
            a_${Y}     = fma(vn, ${x}(w0.x), fma(vc, ${x}(w1.x), fma(vp, ${x}(w2.x), a_${Y})));
            a_${Y+1} = fma(vn, ${x}(w0.y), fma(vc, ${x}(w1.y), fma(vp, ${x}(w2.y), a_${Y+1})));
            a_${Y+2} = fma(vn, ${x}(w0.z), fma(vc, ${x}(w1.z), fma(vp, ${x}(w2.z), a_${Y+2})));
            a_${Y+3} = fma(vn, ${x}(w0.w), fma(vc, ${x}(w1.w), fma(vp, ${x}(w2.w), a_${Y+3})));
          }
`})},D=Math.floor(L/4),ue=L%4;let O="";ue===0?O=`
        let vn = inp_4[base - ${D}u];
        let vc = inp_4[base];
        let vp = inp_4[base + ${D}u];`:D===0&&ue===1?O=`
        let vL = inp_4[base - 1u];
        let vc = inp_4[base];
        let vR = inp_4[base + 1u];
        let vn = ${x}(vL.w, vc.xyz);
        let vp = ${x}(vc.yzw, vR.x);`:ue===1?O=`
        let vL = inp_4[base - ${D+1}u];
        let vN = inp_4[base - ${D}u];
        let vc = inp_4[base];
        let vP = inp_4[base + ${D}u];
        let vR = inp_4[base + ${D+1}u];
        let vn = ${x}(vL.w, vN.xyz);
        let vp = ${x}(vP.yzw, vR.x);`:ue===2?O=`
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
        let vp = ${x}(vP.w, vR.xyz);`;const j=(Me,Re,$e,ne)=>{const re=Lt($e-Re,ce=>{const Ge=Re+ce;return a==="none"?`  var a_${Ge} = ${x}(${F}(qmeta[${3*t+Ge}u]));
`:`  var a_${Ge} = ${x}(0.0${$});
`}),W=ne?`  let y = i32(p0.bg_y0 + lid.y);
  let z = i32(p0.bg_z0);`:`  var y : i32;
  var z : i32;
  if (p0.is_full != 0u) {
    y = i32(wid.y * 4u + lid.y);
    z = i32(wid.z);
  } else {
    let pk = strips0[wid.z];
    y = i32((pk & 255u) * 4u + lid.y);
    z = i32(pk >> 8u);
  }`,Y=ne?"lid.y * 2u + sg":"row_idx * 2u + sg",V=ne?"mom_ext":"mom_main";return`
@compute @workgroup_size(64, 4, 1)
fn ${Me}(@builtin(local_invocation_id) lid : vec3<u32>,
             @builtin(workgroup_id) wid : vec3<u32>) {
  let sg = lid.x >> 5u;
  let slane = lid.x & 31u;
${f&&l?"":`  let hbase = (lid.y * 2u + sg) * 32u;
  let tid = hbase + slane;
  let hslot = (lid.y * 2u + sg) * 2u;
`}
  let x_pad = lid.x + ${jt}u;
${W}
${re}
  var tap_yz : u32 = 0u;
  for (var dz : i32 = -1; dz <= 1; dz = dz + 1) {
    let sz = z + dz * ${L};
    for (var dy : i32 = -1; dy <= 1; dy = dy + 1) {
      let sy = y + dy * ${L};
      if (sz >= 0 && sz < 256 && sy >= 0 && sy < 256) {
        let base = (u32(sz) * 256u + u32(sy)) * ${_t}u + x_pad;
${O}
        let wb = tap_yz * ${3*u}u;
${I(Re,$e)}
      }
      tap_yz = tap_yz + 1u;
    }
  }
  let row_idx = u32(z) * 256u + u32(y);
  let y_row_base = row_idx * ${v}u + lid.x;
${M({cStart:Re,cEnd:$e,hrExpr:Y,yRowExpr:"y_row_base",isPermuted:!1,momBinding:V})}}`},ye=E?j("main_lo",0,p,!1)+j("main_hi",p,t,!1)+j("main_bg_lo",0,p,!0)+j("main_bg_hi",p,t,!0):j("main",0,t,!1)+j("main_bg",0,t,!0);return`${b}${P}
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
${A}${ye}`},prepWgsl:()=>`${b}
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
    w_eff[idx] = w16_4[pp.next_w_vec4_off + idx] * ${F}(qs * scale_num);
  }
  if (lid < ${u}u) {
    ${a==="none"?`
    let mb = pp.next_meta_off + ${3*t}u + lid * 4u;
    w_eff[${_}u + lid] = ${x}(${F}(qmeta[mb]), ${F}(qmeta[mb + 1u]), ${F}(qmeta[mb + 2u]), ${F}(qmeta[mb + 3u]));
    `:`
    w_eff[${_}u + lid] = ${x}(0.0${$});
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
  let x_pad = x4 + ${jt}u;
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
  ${c?`
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
  let x_pad = x4 + ${jt}u;
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
  ${c?`
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
}`,getConvWgsl:E=>{const I=Math.floor(E/4),ue=E%4*8,O=!f&&c,j=(W,Y)=>f?`
          let ${W} = vec4<f16>(vec2<f16>(unpack2x16float(((${Y} & 0x00FF00FFu) << 2u) | 0x3C003C00u)), vec2<f16>(unpack2x16float(((${Y} >> 6u) & 0x03FC03FCu) | 0x3C003C00u))) - vec4<f16>(${S.sterbenzSub});`:`
          let ${W} = unpack4x8unorm(${Y}) - vec4<f32>(${S.uZeroFloat});`,ye=W=>{if(ue===0)return`
          let u_neg = ${W}[base - ${I}u];
          let uC    = ${W}[base];
          let u_pos = ${W}[base + ${I}u];`+j("vn","u_neg")+j("vc","uC")+j("vp","u_pos");const Y=32-ue;return I===0?`
          let uL = ${W}[base - 1u];
          let uC = ${W}[base];
          let uR = ${W}[base + 1u];
          let u_neg = (uL >> ${Y}u) | (uC << ${ue}u);
          let u_pos = (uC >> ${ue}u) | (uR << ${Y}u);`+j("vn","u_neg")+j("vc","uC")+j("vp","u_pos"):`
          let uL = ${W}[base - ${I+1}u];
          let uN = ${W}[base - ${I}u];
          let uC = ${W}[base];
          let uP = ${W}[base + ${I}u];
          let uR = ${W}[base + ${I+1}u];
          let u_neg = (uL >> ${Y}u) | (uN << ${ue}u);
          let u_pos = (uP >> ${ue}u) | (uR << ${Y}u);`+j("vn","u_neg")+j("vc","uC")+j("vp","u_pos")},Me=(W,Y)=>{const V=W/4,ce=Y/4;if(w){const Ge=u/2,ze=u;let ge="";for(let we=V;we<ce;we+=2){const Z=we*4,Ue=we/2;ge+=`          {
            let wp0 = w_eff_u[wbu + ${Ue}u];
            let wp1 = w_eff_u[wbu + ${Ge+Ue}u];
            let wp2 = w_eff_u[wbu + ${ze+Ue}u];
            let w0a = u4_lo(wp0);
            let w0b = u4_hi(wp0);
            let w1a = u4_lo(wp1);
            let w1b = u4_hi(wp1);
            let w2a = u4_lo(wp2);
            let w2b = u4_hi(wp2);
            a_${Z}     = fma(vn, vec4<f16>(w0a.x), fma(vc, vec4<f16>(w1a.x), fma(vp, vec4<f16>(w2a.x), a_${Z})));
            a_${Z+1} = fma(vn, vec4<f16>(w0a.y), fma(vc, vec4<f16>(w1a.y), fma(vp, vec4<f16>(w2a.y), a_${Z+1})));
            a_${Z+2} = fma(vn, vec4<f16>(w0a.z), fma(vc, vec4<f16>(w1a.z), fma(vp, vec4<f16>(w2a.z), a_${Z+2})));
            a_${Z+3} = fma(vn, vec4<f16>(w0a.w), fma(vc, vec4<f16>(w1a.w), fma(vp, vec4<f16>(w2a.w), a_${Z+3})));
            a_${Z+4} = fma(vn, vec4<f16>(w0b.x), fma(vc, vec4<f16>(w1b.x), fma(vp, vec4<f16>(w2b.x), a_${Z+4})));
            a_${Z+5} = fma(vn, vec4<f16>(w0b.y), fma(vc, vec4<f16>(w1b.y), fma(vp, vec4<f16>(w2b.y), a_${Z+5})));
            a_${Z+6} = fma(vn, vec4<f16>(w0b.z), fma(vc, vec4<f16>(w1b.z), fma(vp, vec4<f16>(w2b.z), a_${Z+6})));
            a_${Z+7} = fma(vn, vec4<f16>(w0b.w), fma(vc, vec4<f16>(w1b.w), fma(vp, vec4<f16>(w2b.w), a_${Z+7})));
          }
`}return ge}return Lt(ce-V,Ge=>{const ze=V+Ge,ge=ze*4;return`          {
            let w0 = w_eff[wb + ${ze}u];
            let w1 = w_eff[wb + ${u+ze}u];
            let w2 = w_eff[wb + ${2*u+ze}u];
            a_${ge}     = fma(vn, ${x}(w0.x), fma(vc, ${x}(w1.x), fma(vp, ${x}(w2.x), a_${ge})));
            a_${ge+1} = fma(vn, ${x}(w0.y), fma(vc, ${x}(w1.y), fma(vp, ${x}(w2.y), a_${ge+1})));
            a_${ge+2} = fma(vn, ${x}(w0.z), fma(vc, ${x}(w1.z), fma(vp, ${x}(w2.z), a_${ge+2})));
            a_${ge+3} = fma(vn, ${x}(w0.w), fma(vc, ${x}(w1.w), fma(vp, ${x}(w2.w), a_${ge+3})));
          }
`})},Re=(W,Y,V,ce)=>{const Ge=Lt(V-Y,tt=>{const qe=Y+tt;if(a==="none"){const ot=qe>>>2,rt=["x","y","z","w"][qe&3];if(w){const it=_+ot>>>1,bt=_+ot&1?"u4_hi":"u4_lo";return`  var a_${qe} = ${x}(${bt}(w_eff_u[${it}u]).${rt});
`}return`  var a_${qe} = ${x}(w_eff[${_+ot}u].${rt});
`}return`  var a_${qe} = ${x}(0.0${$});
`}),ze=ce?d?`
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
  }`,ge=ce?d?"ext_i * 8u + lid.y * 2u + sg":"wid.z * 8u + lid.y * 2u + sg":"row_idx * 2u + sg",we=ce?"mom_ext":"mom_main",Z=ce?"(cp.write_ext_y8 != 0u)":"true",Ue=p<=8?`(${p}u + cp.pad0)`:`${p}u`,X=w?`        let wbu_tap = tap_yz * ${t*3*u/2}u;
        for (var ic : u32 = 0u; ic < ${Ue}; ic = ic + 1u) {
          let base = row_off + ic * ${_t}u;
${ye("act8_0")}
          let wbu = wbu_tap + ic * ${3*u/2}u;
${Me(Y,V)}
        }`:`        let wb_tap = tap_yz * ${t*3*u}u;
        for (var ic : u32 = 0u; ic < ${Ue}; ic = ic + 1u) {
          let base = row_off + ic * ${_t}u;
${ye("act8_0")}
          let wb = wb_tap + ic * ${3*u}u;
${Me(Y,V)}
        }`,Ie=w?`        for (var ic : u32 = 0u; ic < ${Ue}; ic = ic + 1u) {
          let base = row_off + ic * ${_t}u;
${ye("act8_1")}
          let wbu = wbu_tap + (${p}u + ic) * ${3*u/2}u;
${Me(Y,V)}
        }`:`        for (var ic : u32 = 0u; ic < ${Ue}; ic = ic + 1u) {
          let base = row_off + ic * ${_t}u;
${ye("act8_1")}
          let wb = wb_tap + (${p}u + ic) * ${3*u}u;
${Me(Y,V)}
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
  let x_pad = x4 + ${jt}u;
${ze}
${Ge}
  var tap_yz : u32 = 0u;
  for (var dz : i32 = -1; dz <= 1; dz = dz + 1) {
    let sz = z + dz * ${E};
    for (var dy : i32 = -1; dy <= 1; dy = dy + 1) {
      let sy = y + dy * ${E};
      if (sz >= 0 && sz < 256 && sy >= 0 && sy < 256) {
        let row_off = (u32(sz) * 256u + u32(sy)) * ${m}u + x_pad;
${X}
        ${c?Ie:""}
      }
      tap_yz = tap_yz + 1u;
    }
  }
  let row_idx = u32(z) * 256u + u32(y);
  let y_row_base = row_idx * ${v}u + x4;
${M({cStart:Y,cEnd:V,hrExpr:ge,yRowExpr:"y_row_base",isPermuted:f,momBinding:we,alsoWriteMomMain:ce,writeY8Expr:Z})}}`},$e=O?Re("main_lo",0,p,!1)+Re("main_hi",p,t,!1)+Re("main_ext_lo",0,p,!0)+Re("main_ext_hi",p,t,!0):Re("main",0,t,!1)+Re("main_ext",0,t,!0),ne=w?`fn u4_lo(u : vec4<u32>) -> vec4<f16> {
  return vec4<f16>(vec2<f16>(unpack2x16float(u.x)), vec2<f16>(unpack2x16float(u.y)));
}
fn u4_hi(u : vec4<u32>) -> vec4<f16> {
  return vec4<f16>(vec2<f16>(unpack2x16float(u.z)), vec2<f16>(unpack2x16float(u.w)));
}
@group(0) @binding(6) var<uniform> w_eff_u : array<vec4<u32>, ${Math.ceil(h/2)}>;`:`@group(0) @binding(6) var<storage, read> w_eff : array<${x}>;`;return`${b}${P}
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
${ne}
@group(0) @binding(7) var<storage, read> strips : array<u32>;
@group(0) @binding(8) var<uniform> cp : ConvParams;
${A}${$e}`},clsWgsl:()=>`${b}
${An(r)}
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
  let y_base = row_idx * ${v}u + x4;
  let mom_base = hr * ${t}u;

  var feat : array<${x}, ${n}>;
  for (var c : u32 = 0u; c < ${n}u; c = c + 1u) {
    let st = mom_stats[c * 2u + 1u];
    let rm = mom_main[mom_base + c];
    ${c?`
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
    feat[c] = ${x}(fv);
  }

  let w_cls = cp.w_vec4_off;
  let m_cls = cp.bias_off;
${bo({chan:n,clsK4:o,nclass:s,V4:x,suf:$,readBiasStmt:"",biasExpr:E=>`qmeta[m_cls + k_base + ${E}u]`,probCfg:g})}
}`,totalWEffVec4s:h,useUniformWeff:w,csHalf:p,chunkableStd:d,halfPass0:!f&&c,halfPassConv:!f&&c}}function vo(e){const{cs:t,chan:n,nclass:s,clsK4:o,dilations:i,activation:r,norm:a,hasF16:f,hasSubgroups32:l,numConvs:c,probCfg:g}=e,d=t/4,u=t/2,p=t/4,m=d*_t,v=16384,k=t*Pt,h=t*2+4,w=h+Un*t,S=4*t,b=(c*S+o*4)/4,P=9*t*3*p,F=P,$=P+p,x=f&&p%2===0&&$*8<=65536,G=_o(r),M=f?`enable f16;
`:"",A=l?`enable subgroups;
`:"",T=f?"f16":"f32",L=f?"h":"f",B=`vec4<${T}>`,N=f?256:255,U=f&&l?"":`var<workgroup> sh_s       : array<vec2<f32>, 256>;
var<workgroup> sh_q       : array<vec2<f32>, 256>;
var<workgroup> sh_mn      : array<vec2<f32>, 256>;
var<workgroup> sh_mx      : array<vec2<f32>, 256>;
var<workgroup> sh_res_mn  : array<f32, 16>;
var<workgroup> sh_res_inv : array<f32, 16>;
`,te=({cStart:ne,cEnd:re,hrExpr:W,storeMode:Y,isPermuted:V,momOffExpr:ce,alsoWriteMomMain:Ge=!1,writeY8Expr:ze="true"})=>{const ge=V?".xzyw":"",we=(Ue,X)=>{if(Y==="stage_bg")return`stage[s_bg_base + ${Ue*Pt}u] = ${X};`;if(Y==="stage")return`stage[s_row_base + ${Ue*Pt}u] = ${X};`;const Ie=Math.floor(Ue/d),tt=Ue%d;return`if (use_act) { act8_${Ie}[a_row_base + ${tt*_t}u] = ${X}; } else { stage[s_row_base + ${Ue*Pt}u] = ${X}; }`};if(f&&l)return Lt(re-ne,Ue=>{const X=ne+Ue;return`  {
    let f = vec4<f32>(a_${X}${ge});
    let ls = subgroupAdd(f.x + f.y + f.z + f.w);
    let lq = subgroupAdd(dot(f, f));
    let lmn = subgroupMin(min(min(f.x, f.y), min(f.z, f.w)));
    let lmx = subgroupMax(max(max(f.x, f.y), max(f.z, f.w)));
    let sp = lmx - lmn;
    let inv = select(0.0, 1.0 / sp, sp > 1e-7);
    if (${ze}) {
      ${we(X,"pack4x8unorm((f - vec4<f32>(lmn)) * inv)")}
    }
    if (slane == 0u) {
      let mv = vec4<f32>(ls, lq, lmn, sp);
      mom[${ce} + (${W}) * ${t}u + ${X}u] = mv;
      ${Ge?`mom[${h}u + (row_idx * 2u + sg) * ${t}u + ${X}u] = mv;`:""}
    }
  }
`});let Z="";for(let Ue=ne;Ue<re;Ue+=2){const X=Ue,Ie=Ue+1;Z+=`  {
    let f0 = vec4<f32>(a_${X}${ge});
    let f1 = vec4<f32>(a_${Ie}${ge});
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
        mom[${ce} + (${W}) * ${t}u + ${X}u] = mv0;
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
        mom[${ce} + (${W}) * ${t}u + ${Ie}u] = mv1;
        ${Ge?`mom[${h}u + (row_idx * 2u + sg) * ${t}u + ${Ie}u] = mv1;`:""}
      }
    }
    workgroupBarrier();
    let p_mn0  = sh_res_mn[hslot];
    let p_inv0 = sh_res_inv[hslot];
    let p_mn1  = sh_res_mn[hslot + 1u];
    let p_inv1 = sh_res_inv[hslot + 1u];
    if (${ze}) {
      ${we(X,"pack4x8unorm((f0 - vec4<f32>(p_mn0)) * p_inv0)")}
      ${we(Ie,"pack4x8unorm((f1 - vec4<f32>(p_mn1)) * p_inv1)")}
    }
    workgroupBarrier();
  }
`}return Z},le=()=>`
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
}`,E=i[0],I=!f&&t>=16,D=()=>{const ne=(Ge,ze)=>{const ge=Ge/4,we=ze/4;return Lt(we-ge,Z=>{const Ue=ge+Z,X=Ue*4;return`          {
            let w0 = w16_4[wb + ${Ue}u];
            let w1 = w16_4[wb + ${p+Ue}u];
            let w2 = w16_4[wb + ${2*p+Ue}u];
            a_${X}     = fma(vn, ${B}(w0.x), fma(vc, ${B}(w1.x), fma(vp, ${B}(w2.x), a_${X})));
            a_${X+1} = fma(vn, ${B}(w0.y), fma(vc, ${B}(w1.y), fma(vp, ${B}(w2.y), a_${X+1})));
            a_${X+2} = fma(vn, ${B}(w0.z), fma(vc, ${B}(w1.z), fma(vp, ${B}(w2.z), a_${X+2})));
            a_${X+3} = fma(vn, ${B}(w0.w), fma(vc, ${B}(w1.w), fma(vp, ${B}(w2.w), a_${X+3})));
          }
`})},re=Math.floor(E/4),W=E%4;let Y="";W===0?Y=`
        let vn = inp_4[base - ${re}u];
        let vc = inp_4[base];
        let vp = inp_4[base + ${re}u];`:re===0&&W===1?Y=`
        let vL = inp_4[base - 1u];
        let vc = inp_4[base];
        let vR = inp_4[base + 1u];
        let vn = ${B}(vL.w, vc.xyz);
        let vp = ${B}(vc.yzw, vR.x);`:W===1?Y=`
        let vL = inp_4[base - ${re+1}u];
        let vN = inp_4[base - ${re}u];
        let vc = inp_4[base];
        let vP = inp_4[base + ${re}u];
        let vR = inp_4[base + ${re+1}u];
        let vn = ${B}(vL.w, vN.xyz);
        let vp = ${B}(vP.yzw, vR.x);`:W===2?Y=`
        let vL = inp_4[base - ${re+1}u];
        let vN = ${re===0?"inp_4[base]":`inp_4[base - ${re}u]`};
        let vc = ${re===0?"vN":"inp_4[base]"};
        let vP = ${re===0?"vN":`inp_4[base + ${re}u]`};
        let vR = inp_4[base + ${re+1}u];
        let vn = ${B}(vL.zw, vN.xy);
        let vp = ${B}(vP.zw, vR.xy);`:Y=`
        let vL = inp_4[base - ${re+1}u];
        let vN = ${re===0?"inp_4[base]":`inp_4[base - ${re}u]`};
        let vc = ${re===0?"vN":"inp_4[base]"};
        let vP = ${re===0?"vN":`inp_4[base + ${re}u]`};
        let vR = inp_4[base + ${re+1}u];
        let vn = ${B}(vL.yzw, vN.x);
        let vp = ${B}(vP.w, vR.xyz);`;const V=(Ge,ze,ge,we)=>{const Z=Lt(ge-ze,qe=>{const ot=ze+qe;if(a==="none"){const rt=3*t+ot;return`  var a_${ot} = ${B}(${T}(qmeta_u[${rt>>>2}u][${rt&3}u]));
`}return`  var a_${ot} = ${B}(0.0${L});
`}),Ue=we?`  let y = i32(p0.bg_y0 + lid.y);
  let z = i32(p0.bg_z0);`:`  var y : i32;
  var z : i32;
  if (p0.is_full != 0u) {
    y = i32(wid.y * 4u + lid.y);
    z = i32(wid.z);
  } else {
    let pk = strips0_u[wid.z >> 2u][wid.z & 3u];
    y = i32((pk & 255u) * 4u + lid.y);
    z = i32(pk >> 8u);
  }`,X=we?"lid.y * 2u + sg":"row_idx * 2u + sg",Ie=we?`${w}u`:`${h}u`,tt=we?`  let s_bg_base = (${v}u + lid.y) * ${k}u + lid.x;`:`  let row_idx = u32(z) * 256u + u32(y);
  let use_act = u32(z) < 192u;
  let a_row_base = row_idx * ${m}u + x_pad;
  let s_row_base = ((u32(z) & 63u) * 256u + u32(y)) * ${k}u + lid.x;`;return`
@compute @workgroup_size(64, 4, 1)
fn ${Ge}(@builtin(local_invocation_id) lid : vec3<u32>,
             @builtin(workgroup_id) wid : vec3<u32>) {
  let sg = lid.x >> 5u;
  let slane = lid.x & 31u;
${f&&l?"":`  let hbase = (lid.y * 2u + sg) * 32u;
  let tid = hbase + slane;
  let hslot = (lid.y * 2u + sg) * 2u;
`}
  let x_pad = lid.x + ${jt}u;
${Ue}
${Z}
  var tap_yz : u32 = 0u;
  for (var dz : i32 = -1; dz <= 1; dz = dz + 1) {
    let sz = z + dz * ${E};
    for (var dy : i32 = -1; dy <= 1; dy = dy + 1) {
      let sy = y + dy * ${E};
      if (sz >= 0 && sz < 256 && sy >= 0 && sy < 256) {
        let base = (u32(sz) * 256u + u32(sy)) * ${_t}u + x_pad;
${Y}
        let wb = tap_yz * ${3*p}u;
${ne(ze,ge)}
      }
      tap_yz = tap_yz + 1u;
    }
  }
${tt}
${te({cStart:ze,cEnd:ge,hrExpr:X,storeMode:we?"stage_bg":"conv0_split",isPermuted:!1,momOffExpr:Ie})}}`},ce=I?V("main_lo",0,u,!1)+V("main_hi",u,t,!1)+V("main_bg_lo",0,u,!0)+V("main_bg_hi",u,t,!0):V("main",0,t,!1)+V("main_bg",0,t,!0);return`${M}${A}
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
${U}${ce}`},ue=()=>`${M}
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
    w_eff[${F}u + lid] = ${B}(${T}(qmeta[mb]), ${T}(qmeta[mb + 1u]), ${T}(qmeta[mb + 2u]), ${T}(qmeta[mb + 3u]));
    `:`
    w_eff[${F}u + lid] = ${B}(0.0${L});
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
  let x_pad = x4 + ${jt}u;
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
}`,j=(ne,re)=>{const W=ne*d;return`
  for (var cl : u32 = 0u; cl < ${d}u; cl = cl + 1u) {
    let c = ${W}u + cl;
    let inv_qs = mom[c * 2u].w;
    let st = mom[c * 2u + 1u];
    let rm = mom[mom_base + c];
    let q_word = ${re?`stage[s_bg_base + c * ${Pt}u]`:`select(stage[s_base + c * ${Pt}u], act8_${ne}[a_base + cl * ${_t}u], use_act)`};
    let yv = unpack4x8unorm(q_word) * rm.w + vec4<f32>(rm.z);
    let a = vec4<f32>(
      act(yv.x * st.x + st.y),
      act(yv.y * st.x + st.y),
      act(yv.z * st.x + st.y),
      act(yv.w * st.x + st.y)
    );
    act8_${ne}[a_base + cl * ${_t}u] = pack4x8unorm((a * inv_qs + vec4<f32>(${G.zeroBin.toFixed(1)})) * (1.0 / 255.0));
  }`},ye=()=>`${An(r)}
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
  let x_pad = x4 + ${jt}u;
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
${Lt(4,ne=>j(ne,!1))}
}

@compute @workgroup_size(64, 4, 1)
fn norm_halo_fill(@builtin(local_invocation_id) lid : vec3<u32>,
                  @builtin(workgroup_id) wid : vec3<u32>) {
  let idx = wid.y * 4u + lid.y;
  if (idx >= np.n_halo) { return; }
  let x4 = lid.x;
  let sg = x4 >> 5u;
  let x_pad = x4 + ${jt}u;
  let s_bg_base = ${v}u * ${k}u + x4;
  let mom_base = ${w}u + sg * ${t}u;
  let dst_row = norm_aux[np.halo_off + idx];
  let a_base = dst_row * ${m}u + x_pad;
${Lt(4,ne=>j(ne,!0))}
}`,Me=ne=>{const re=Math.floor(ne/4),Y=ne%4*8,V=!f&&t>=16,ce=(X,Ie)=>f?`
          let ${X} = vec4<f16>(vec2<f16>(unpack2x16float(((${Ie} & 0x00FF00FFu) << 2u) | 0x3C003C00u)), vec2<f16>(unpack2x16float(((${Ie} >> 6u) & 0x03FC03FCu) | 0x3C003C00u))) - vec4<f16>(${G.sterbenzSub});`:`
          let ${X} = unpack4x8unorm(${Ie}) - vec4<f32>(${G.uZeroFloat});`,Ge=X=>{if(Y===0)return`
          let u_neg = ${X}[base - ${re}u];
          let uC    = ${X}[base];
          let u_pos = ${X}[base + ${re}u];`+ce("vn","u_neg")+ce("vc","uC")+ce("vp","u_pos");const Ie=32-Y;return re===0?`
          let uL = ${X}[base - 1u];
          let uC = ${X}[base];
          let uR = ${X}[base + 1u];
          let u_neg = (uL >> ${Ie}u) | (uC << ${Y}u);
          let u_pos = (uC >> ${Y}u) | (uR << ${Ie}u);`+ce("vn","u_neg")+ce("vc","uC")+ce("vp","u_pos"):`
          let uL = ${X}[base - ${re+1}u];
          let uN = ${X}[base - ${re}u];
          let uC = ${X}[base];
          let uP = ${X}[base + ${re}u];
          let uR = ${X}[base + ${re+1}u];
          let u_neg = (uL >> ${Ie}u) | (uN << ${Y}u);
          let u_pos = (uP >> ${Y}u) | (uR << ${Ie}u);`+ce("vn","u_neg")+ce("vc","uC")+ce("vp","u_pos")},ze=(X,Ie)=>{const tt=X/4,qe=Ie/4;if(x){const ot=p/2,rt=p;let it="";for(let bt=tt;bt<qe;bt+=2){const Fe=bt*4,Ke=bt/2;it+=`          {
            let wp0 = w_eff_u[wbu + ${Ke}u];
            let wp1 = w_eff_u[wbu + ${ot+Ke}u];
            let wp2 = w_eff_u[wbu + ${rt+Ke}u];
            let w0a = u4_lo(wp0);
            let w0b = u4_hi(wp0);
            let w1a = u4_lo(wp1);
            let w1b = u4_hi(wp1);
            let w2a = u4_lo(wp2);
            let w2b = u4_hi(wp2);
            a_${Fe}     = fma(vn, vec4<f16>(w0a.x), fma(vc, vec4<f16>(w1a.x), fma(vp, vec4<f16>(w2a.x), a_${Fe})));
            a_${Fe+1} = fma(vn, vec4<f16>(w0a.y), fma(vc, vec4<f16>(w1a.y), fma(vp, vec4<f16>(w2a.y), a_${Fe+1})));
            a_${Fe+2} = fma(vn, vec4<f16>(w0a.z), fma(vc, vec4<f16>(w1a.z), fma(vp, vec4<f16>(w2a.z), a_${Fe+2})));
            a_${Fe+3} = fma(vn, vec4<f16>(w0a.w), fma(vc, vec4<f16>(w1a.w), fma(vp, vec4<f16>(w2a.w), a_${Fe+3})));
            a_${Fe+4} = fma(vn, vec4<f16>(w0b.x), fma(vc, vec4<f16>(w1b.x), fma(vp, vec4<f16>(w2b.x), a_${Fe+4})));
            a_${Fe+5} = fma(vn, vec4<f16>(w0b.y), fma(vc, vec4<f16>(w1b.y), fma(vp, vec4<f16>(w2b.y), a_${Fe+5})));
            a_${Fe+6} = fma(vn, vec4<f16>(w0b.z), fma(vc, vec4<f16>(w1b.z), fma(vp, vec4<f16>(w2b.z), a_${Fe+6})));
            a_${Fe+7} = fma(vn, vec4<f16>(w0b.w), fma(vc, vec4<f16>(w1b.w), fma(vp, vec4<f16>(w2b.w), a_${Fe+7})));
          }
`}return it}return Lt(qe-tt,ot=>{const rt=tt+ot,it=rt*4;return`          {
            let w0 = w_eff[wb + ${rt}u];
            let w1 = w_eff[wb + ${p+rt}u];
            let w2 = w_eff[wb + ${2*p+rt}u];
            a_${it}     = fma(vn, ${B}(w0.x), fma(vc, ${B}(w1.x), fma(vp, ${B}(w2.x), a_${it})));
            a_${it+1} = fma(vn, ${B}(w0.y), fma(vc, ${B}(w1.y), fma(vp, ${B}(w2.y), a_${it+1})));
            a_${it+2} = fma(vn, ${B}(w0.z), fma(vc, ${B}(w1.z), fma(vp, ${B}(w2.z), a_${it+2})));
            a_${it+3} = fma(vn, ${B}(w0.w), fma(vc, ${B}(w1.w), fma(vp, ${B}(w2.w), a_${it+3})));
          }
`})},ge=(X,Ie,tt)=>{const qe=X*d,ot=`(${d}u + cp.pad0)`;return x?`        for (var ic : u32 = 0u; ic < ${ot}; ic = ic + 1u) {
          let base = row_off + ic * ${_t}u;
${Ge(`act8_${X}`)}
          let wbu = wbu_tap + ${qe?`(${qe}u + ic)`:"ic"} * ${3*p/2}u;
${ze(Ie,tt)}
        }
`:`        for (var ic : u32 = 0u; ic < ${ot}; ic = ic + 1u) {
          let base = row_off + ic * ${_t}u;
${Ge(`act8_${X}`)}
          let wb = wb_tap + ${qe?`(${qe}u + ic)`:"ic"} * ${3*p}u;
${ze(Ie,tt)}
        }
`},we=(X,Ie,tt,qe)=>{const ot=Lt(tt-Ie,dt=>{const ht=Ie+dt;if(a==="none"){const Gt=ht>>>2,Ct=["x","y","z","w"][ht&3];if(x){const H=F+Gt>>>1,Tt=F+Gt&1?"u4_hi":"u4_lo";return`  var a_${ht} = ${B}(${Tt}(w_eff_u[${H}u]).${Ct});
`}return`  var a_${ht} = ${B}(w_eff[${F+Gt}u].${Ct});
`}return`  var a_${ht} = ${B}(0.0${L});
`});let rt="";qe==="bg"?rt=`
  let y = i32(cp.bg_y0 + lid.y);
  let z = i32(cp.bg_z0);`:qe==="ext"?rt=`
  let pk_full = strips[cp.ext_off + wid.z];
  let ext_orig = pk_full >> 16u;
  let pk = pk_full & 0xFFFFu;
  let y = i32((pk & 255u) * 4u + lid.y);
  let z = i32(pk >> 8u);`:rt=`
  var y : i32;
  var z : i32;
  if (cp.is_full != 0u) {
    y = i32(wid.y * 4u + lid.y);
    z = i32(cp.z_start + wid.z);
  } else {
    let pk = strips[cp.strip_off + wid.z] & 0xFFFFu;
    y = i32((pk & 255u) * 4u + lid.y);
    z = i32(pk >> 8u);
  }`;const it=qe==="bg"?"lid.y * 2u + sg":qe==="ext"?"ext_orig * 8u + lid.y * 2u + sg":"row_idx * 2u + sg",bt=qe==="main"?`${h}u`:`${w}u`,Fe=qe==="bg"?"stage_bg":"stage",Ke=qe==="main"?"true":"(cp.write_ext_y8 != 0u)",nt=qe==="bg"?`  let row_idx = u32(z) * 256u + u32(y);
  let s_bg_base = (${v}u + lid.y) * ${k}u + x4;`:`  let row_idx = u32(z) * 256u + u32(y);
  let s_row_base = ((u32(z) & 63u) * 256u + u32(y)) * ${k}u + x4;`,pt=x?`        let wbu_tap = tap_yz * ${t*3*p/2}u;
`:`        let wb_tap = tap_yz * ${t*3*p}u;
`;return`
@compute @workgroup_size(64, 4, 1)
fn ${X}(@builtin(local_invocation_id) lid : vec3<u32>,
             @builtin(workgroup_id) wid : vec3<u32>) {
  let x4 = lid.x;
  let sg = x4 >> 5u;
  let slane = x4 & 31u;
${f&&l?"":`  let hbase = (lid.y * 2u + sg) * 32u;
  let tid = hbase + slane;
  let hslot = (lid.y * 2u + sg) * 2u;
`}
  let x_pad = x4 + ${jt}u;
${rt}
${ot}
  var tap_yz : u32 = 0u;
  for (var dz : i32 = -1; dz <= 1; dz = dz + 1) {
    let sz = z + dz * ${ne};
    for (var dy : i32 = -1; dy <= 1; dy = dy + 1) {
      let sy = y + dy * ${ne};
      if (sz >= 0 && sz < 256 && sy >= 0 && sy < 256) {
        let row_off = (u32(sz) * 256u + u32(sy)) * ${m}u + x_pad;
${pt}${Lt(4,dt=>ge(dt,Ie,tt))}
      }
      tap_yz = tap_yz + 1u;
    }
  }
${nt}
${te({cStart:Ie,cEnd:tt,hrExpr:it,storeMode:Fe,isPermuted:f,momOffExpr:bt,alsoWriteMomMain:qe!=="main",writeY8Expr:Ke})}}`},Z=V?we("main_lo",0,u,"main")+we("main_hi",u,t,"main")+we("main_ext_lo",0,u,"ext")+we("main_ext_hi",u,t,"ext")+we("main_bg_lo",0,u,"bg")+we("main_bg_hi",u,t,"bg"):we("main",0,t,"main")+we("main_ext",0,t,"ext")+we("main_bg",0,t,"bg"),Ue=x?`fn u4_lo(u : vec4<u32>) -> vec4<f16> {
  return vec4<f16>(vec2<f16>(unpack2x16float(u.x)), vec2<f16>(unpack2x16float(u.y)));
}
fn u4_hi(u : vec4<u32>) -> vec4<f16> {
  return vec4<f16>(vec2<f16>(unpack2x16float(u.z)), vec2<f16>(unpack2x16float(u.w)));
}
@group(0) @binding(6) var<uniform> w_eff_u : array<vec4<u32>, ${Math.ceil($/2)}>;`:`@group(0) @binding(6) var<storage, read> w_eff : array<${B}>;`;return`${M}${A}
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
${Ue}
@group(0) @binding(7) var<storage, read> strips : array<u32>;
@group(0) @binding(8) var<uniform> cp : BandConvParams;
${U}${Z}`},Re=ne=>{const re=ne*d;return`
  for (var cl : u32 = 0u; cl < ${d}u; cl = cl + 1u) {
    let c = ${re}u + cl;
    if (c < ${n}u) {
      let st = mom[c * 2u + 1u];
      let rm = mom[mom_base + c];
      let q_word = select(stage[s_base + c * ${Pt}u], act8_${ne}[a_base + cl * ${_t}u], use_act);
      let yv = unpack4x8unorm(q_word) * rm.w + vec4<f32>(rm.z);
      let fv = vec4<f32>(
        act(yv.x * st.x + st.y),
        act(yv.y * st.x + st.y),
        act(yv.z * st.x + st.y),
        act(yv.w * st.x + st.y)
      );
      feat[c] = ${B}(fv);
    }
  }`};return{initActWgsl:le,conv0Wgsl:D,prepWgsl:ue,flushWgsl:O,normWgsl:ye,getConvWgsl:Me,clsWgsl:()=>`${M}
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
  let a_base = row_idx * ${m}u + x4 + ${jt}u;
  let s_base = ((z & 63u) * 256u + y) * ${k}u + x4;
  let mom_base = ${h}u + (row_idx * 2u + sg) * ${t}u;

  var feat : array<${B}, ${n}>;
${Lt(4,ne=>Re(ne))}

  let w_cls = cp.w_vec4_off;
  let b_vec4 = cp.bias_off >> 2u;
${bo({chan:n,clsK4:o,nclass:s,V4:B,suf:L,readBiasStmt:"    let bv = qmeta_u[b_vec4 + k4];",biasExpr:ne=>`bv.${["x","y","z","w"][ne]}`,probCfg:g})}
}`,qmetaVec4Len:b,numConvs:c,totalWEffVec4s:$,useUniformWeff:x,csQ:d,halfPass0:I,halfPassConv:!f&&t>=16}}function qr(e,t,n,s,o,i,r){return ve(this,null,function*(){var je,We;const a=z*z*z,f=r?a*4:a,l=t.dilations.length,c=t.cs/4,g=z*z*c*_t*4,u=(64*z+4)*t.cs*Pt*4,m=(t.cs*2+4+(Un+Qs)*t.cs)*16,v=e.limits||{},k=Math.min((je=v.maxStorageBufferBindingSize)!=null?je:1/0,(We=v.maxBufferSize)!=null?We:1/0);if(g>k||u>k||m>k||f>k){const K=Math.ceil(Math.max(g,u,m,f)/1048576);throw new Error(`meshnet_fast_v4: LowMem128 max buffer (${K} MiB) exceeds device limit (${k>>>20} MiB)`)}const _=vo({cs:t.cs,chan:t.chan,nclass:t.nclass,clsK4:n.clsK4,dilations:t.dilations,activation:t.activation,norm:t.norm,hasF16:s,hasSubgroups32:o,numConvs:l,probCfg:r});console.log(`[WebGPU-V4-128M] ${t.chan}ch(cs=${t.cs})/${t.nclass}cls (${l} convs, ${t.activation}, norm=${t.norm}${r?", prob=3":""}) | ${s?"f16+sterbenz":"f32"} | ${o?"subgroups32":"shared-8KiB"} | ZYCX-4Q+64slice | maxBuf=${(Math.max(g,u,m,f)/1048576).toFixed(1)} MiB`);const h=GPUBufferUsage.STORAGE,w=GPUBufferUsage.UNIFORM,S=GPUBufferUsage.COPY_DST,b=GPUBufferUsage.COPY_SRC,P=z*z*pn,F=P*(s?2:4),$=s?Math.ceil(_.totalWEffVec4s/2)*16:_.totalWEffVec4s*16,x=!!(r&&g>=f),G=`128|${t.cs}|${s?1:0}|${f}|${x?1:0}`,M=uo(e,G,()=>{const K=[],q=Nn(e,K),ee=q.alloc,Ee={inpBuf:ee(F,h|S|b),act8_0:ee(g,h|S|b),act8_1:ee(g,h|S|b),act8_2:ee(g,h|S|b),act8_3:ee(g,h|S|b),stageBuf:ee(u,h),momBuf:ee(m,h),labels8Buf:ee(f,h|S|b),readbackBuf:ee(f,GPUBufferUsage.MAP_READ|S),probPackTmpBuf:x?ee(f,h|S|b):null};return{buffers:K,named:Ee,bytes:q.getBytes()}}),{inpBuf:A,act8_0:T,act8_1:L,act8_2:B,act8_3:N,stageBuf:U,momBuf:te,labels8Buf:le,readbackBuf:E,probPackTmpBuf:I}=M.named,D=[],ue=Nn(e,D),O=ue.alloc,j=O(s?n.wF16.byteLength:n.wF32.byteLength,h|S),ye=O(n.qmetaF32.byteLength,h|w|S),Me=O($,_.useUniformWeff?h|w:h),Re=t.norm==="gn"&&!(i!=null&&i.disableConeSkip),$e=O(Ve*4,w|S),ne=O(Ve*4,w|S),re=Array.from({length:l},()=>O(Re?Ve*4:16,h|S)),W=Array.from({length:l-1},()=>O(Re?(Ve+z*z)*4:16,h|S)),Y=O(16,w|S),V=O(16,w|S),ce=Array.from({length:l},()=>O(48,w|S)),Ge=Array.from({length:l-1},()=>O(16,w|S)),ze=Math.max(256,v.minUniformBufferOffsetAlignment||256),ge=ze>>>2,we=20,Z=Math.max(1,(l-1)*we),Ue=O(Z*ze,w|S),X=new Uint32Array(Z*ge);e.queue.writeBuffer(j,0,s?n.wF16:n.wF32),e.queue.writeBuffer(ye,0,n.qmetaF32);const Ie=Array.from(new Set(t.dilations.slice(1)));let tt;try{tt=yield po(e,t,n,s,o,r,_,Ie)}catch(K){for(const q of D)q.destroy();if(D.length=0,M.pooled)ln.get(e)===M&&xn(e);else{for(const q of M.buffers)q.destroy();M.buffers.length=0}throw K}const{pInit:qe,pMomFin:ot,pPrepW:rt,pFlush:it,pNorm:bt,pNormHalo:Fe,pCls:Ke,pConv0:nt,convPipes:pt}=tt,dt=(K,q)=>e.createBindGroup({layout:K,entries:q.map((ee,Ee)=>({binding:Ee,resource:ee&&ee.buffer?ee:{buffer:ee}}))}),ht=dt(qe.bgl,[T,L,B,N]);{const K=e.createCommandEncoder(),q=K.beginComputePass();q.setPipeline(qe.pipe),q.setBindGroup(0,ht),q.dispatchWorkgroups(1,z,z),q.end(),e.queue.submit([K.finish()])}const Gt=(_.halfPass0?nt.lo:nt.main).bgl,Ct=dt(Gt,[A,T,L,B,N,U,j,te,{buffer:ye,offset:0,size:t.cs*16},$e,Y]),H=dt(Ke.bgl,[T,L,B,N,U,j,te,le,ye,ne,V]),Tt=x?O(16,w|S):null,Ut=x?dt(Ke.bgl,[T,L,B,N,U,j,te,le,ye,ne,Tt]):null,Nt=ho({device:e,hasF16:s,nvox:a,outBufBytes:f,inpBuf:A,act8_0:T,labels8Buf:le,readbackBuf:E,pInit:qe,bgInit:ht,pCls:Ke,bgCls:H,clsUbo:V,packed:n,modelEntry:i,probCfg:r,canGpuProb:x,probSlots:x?{clsUbo1:Tt,bgCls1:Ut,pass0HoldBuf:I,y0:T,y1:L,b:B,sup:N}:null,ownedBuffers:D,mkBuf:O}),zt=ce.map((K,q)=>dt(ot.bgl,[j,ye,te,Me,re[q],K])),Xt=Ge.map((K,q)=>dt(bt.bgl,[T,L,B,N,U,te,W[q],K])),y={buffer:Ue,offset:0,size:32},C=Array.from({length:l},(K,q)=>q===0?null:dt(it.bgl,[T,L,B,N,U,re[q],y])),R=Array.from({length:l},(K,q)=>{if(q===0)return null;const ee=t.dilations[q],Ee=_.halfPassConv?pt[ee].lo:pt[ee].main;return dt(Ee.bgl,[T,L,B,N,U,te,Me,re[q],y])}),ae=s?new Uint16Array(P):new Float32Array(P),se=new Uint8Array(z*z),Pe=new Uint32Array(Ve),pe=new Uint32Array(Ve+z*z),de=new Uint32Array(12),me=new Float32Array(de.buffer),_e=new Uint32Array(4),Ne=(K,q,ee,Ee,st,De,Be,ut)=>{const Q=K*ge;X[Q]=q?1:0,X[Q+1]=ee,X[Q+2]=Ee,X[Q+3]=st,X[Q+4]=De?1:0,X[Q+5]=Be,X[Q+6]=ut,X[Q+7]=0};function Ae(K,q){return ve(this,null,function*(){if(K.length!==a)throw new Error(`meshnet_fast_v4 expected ${a} voxels, got ${K.length}`);const ee=t.norm==="gn"&&!(i!=null&&i.disableConeSkip),Ee=yield Nt.prepareInput({volume:K,ioOpts:q,useCone:ee,padInputHost:ae,headRowHost:se,hasF16Flag:s}),st=Ee.info,De=go(se,st,t.dilations,ee),Be=new Array(l);for(let he=0;he<l;he++){const Se=De.layers[he],oe=Se.isFull?Ve:Se.mainStrips.length,J=Se.isFull||!Se.extStrips?0:Se.extStrips.length,Le=Se.haloRows?Se.haloRows.length:0;if(he===0){!Se.isFull&&oe>0&&(Pe.set(Se.mainStrips,0),e.queue.writeBuffer($e,0,Pe.subarray(0,oe)),e.queue.writeBuffer(re[0],0,Pe.subarray(0,oe))),Be[0]={L:Se,nMain:oe,nExt:J,nHalo:Le};continue}const Xe=new Uint32Array(8),mt=new Uint32Array(8),at=new Uint32Array(8),Te=new Uint32Array(8);if(!Se.isFull){if(oe>0){Pe.set(Se.mainStrips,0);for(let Oe=0;Oe<oe;Oe++)mt[Se.mainStrips[Oe]>>>13]++;let et=0;for(let Oe=0;Oe<8;Oe++)Xe[Oe]=et,et+=mt[Oe]}if(Se.mode==="bwd"&&J>0){const et=Array.from({length:8},()=>[]);for(let St=0;St<J;St++){const ct=Se.extStrips[St];et[ct>>>13].push((St&65535)<<16|ct)}let Oe=oe;for(let St=0;St<8;St++){at[St]=Oe;const ct=et[St];Te[St]=ct.length;for(let be=0;be<ct.length;be++)Pe[Oe++]=ct[be]}e.queue.writeBuffer(re[he],0,Pe.subarray(0,oe+J))}else oe>0&&e.queue.writeBuffer(re[he],0,Pe.subarray(0,oe))}const ke=Se.mode==="rpure"&&Le>0||Se.mode==="bwd"&&he+1<l,ie=(he-1)*we,kt=Se.bgStrip?Se.bgStrip.yWg*4:0,ft=Se.bgStrip?Se.bgStrip.z:0;for(let et=0;et<8;et++)Ne(ie+et,Se.isFull,et*32,Xe[et],at[et],ke,kt,ft);for(let et=0;et<6;et++)Ne(ie+8+et,Se.isFull,et*32,Xe[et],0,!1,0,0),Ne(ie+14+et,!1,et*32,at[et],0,!1,0,0);Be[he]={L:Se,nMain:oe,nExt:J,nHalo:Le,mainCount:mt,extCount:Te,layerBaseSlot:ie}}l>1&&e.queue.writeBuffer(Ue,0,X);let ut=so(e,i);const Q=[];if(ut==="single"){const he=e.createCommandEncoder();Ee.runPrePasses(he,Q),De.clsSkipped&&(he.clearBuffer(le,0,f),De.clsStrips.length>0&&e.queue.writeBuffer(ne,0,De.clsStrips));for(let Se=0;Se<l;Se++){const oe=Be[Se],{L:J,nMain:Le,nHalo:Xe}=oe,mt=J.nMomExt||0,at=J.isFull?Ve:J.normStrips?J.normStrips.length:0;if(Se===0){const ke=J.isFull?64:1,ie=J.isFull?z:Le,kt=!!(J.bgStrip&&Xe>0);if(_e[0]=J.isFull?1:0,_e[1]=J.bgStrip?J.bgStrip.yWg*4:0,_e[2]=J.bgStrip?J.bgStrip.z:0,_e[3]=0,e.queue.writeBuffer(Y,0,_e),_.halfPass0)for(const[ft,et]of[[nt.lo,nt.bgLo],[nt.hi,nt.bgHi]]){const Oe=he.beginComputePass();Oe.setBindGroup(0,Ct),ie>0&&(Oe.setPipeline(ft.pipe),Oe.dispatchWorkgroups(1,ke,ie)),kt&&(Oe.setPipeline(et.pipe),Oe.dispatchWorkgroups(1,1,1)),Oe.end(),Q.push("conv0")}else{const ft=he.beginComputePass();ft.setBindGroup(0,Ct),ie>0&&(ft.setPipeline(nt.main.pipe),ft.dispatchWorkgroups(1,ke,ie)),kt&&(ft.setPipeline(nt.bg.pipe),ft.dispatchWorkgroups(1,1,1)),ft.end(),Q.push("conv0")}}else{const ke=t.dilations[Se],ie=pt[ke],kt=R[Se],ft=C[Se],{mainCount:et,extCount:Oe,layerBaseSlot:St}=oe,ct=J.mode==="rpure"&&!!J.bgStrip;for(let be=0;be<8;be++){if(be>=2){const lt=be-2,xt=J.isFull||et[lt]>0,Je=!J.isFull&&J.mode==="bwd"&&Oe[lt]>0;if(xt||Je){const Ce=he.beginComputePass();Ce.setPipeline(it.pipe),xt&&(Ce.setBindGroup(0,ft,[(St+8+lt)*ze]),Ce.dispatchWorkgroups(1,J.isFull?64:1,J.isFull?32:et[lt])),Je&&(Ce.setBindGroup(0,ft,[(St+14+lt)*ze]),Ce.dispatchWorkgroups(1,1,Oe[lt])),Ce.end(),Q.push("flushStage")}}const fe=J.isFull||et[be]>0,xe=!J.isFull&&J.mode==="bwd"&&Oe[be]>0,wt=be===0&&ct;if(!fe&&!xe&&!wt)continue;const Wt=[(St+be)*ze],vt=J.isFull?64:1,yt=J.isFull?32:et[be];if(_.halfPassConv)for(const[lt,xt,Je]of[[ie.lo,ie.extLo,ie.bgLo],[ie.hi,ie.extHi,ie.bgHi]]){const Ce=he.beginComputePass();Ce.setBindGroup(0,kt,Wt),fe&&(Ce.setPipeline(lt.pipe),Ce.dispatchWorkgroups(1,vt,yt)),xe&&(Ce.setPipeline(xt.pipe),Ce.dispatchWorkgroups(1,1,Oe[be])),wt&&(Ce.setPipeline(Je.pipe),Ce.dispatchWorkgroups(1,1,1)),Ce.end(),Q.push("convHidden")}else{const lt=he.beginComputePass();lt.setBindGroup(0,kt,Wt),fe&&(lt.setPipeline(ie.main.pipe),lt.dispatchWorkgroups(1,vt,yt)),xe&&(lt.setPipeline(ie.ext.pipe),lt.dispatchWorkgroups(1,1,Oe[be])),wt&&(lt.setPipeline(ie.bg.pipe),lt.dispatchWorkgroups(1,1,1)),lt.end(),Q.push("convHidden")}}}const Te=Se+1<l?n.w0Vec4s+Se*n.hiddenVec4PerLayer:0;de[0]=Se*n.metaStride,de[1]=Te,de[2]=(Se+1)*n.metaStride,de[3]=Se+1<l?1:0,de[4]=Se===0?1:0,de[5]=J.isFull?1:0,de[6]=Le,de[7]=mt*8,me[8]=J.extWeight||0,de[9]=0,de[10]=0,de[11]=0,e.queue.writeBuffer(ce[Se],0,de);{const ke=he.beginComputePass();ke.setBindGroup(0,zt[Se]),ke.setPipeline(ot.pipe),ke.dispatchWorkgroups(t.cs,1,1),ke.end(),Q.push("momentsPrep")}if(Se+1<l){{const ie=he.beginComputePass();ie.setBindGroup(0,zt[Se]),ie.setPipeline(rt.pipe),ie.dispatchWorkgroups(1,1,1),ie.end(),Q.push("momentsPrep")}const ke=J.isFull?0:at;if((ke>0||Xe>0)&&(ke>0&&pe.set(J.normStrips,0),Xe>0&&pe.set(J.haloRows,ke),e.queue.writeBuffer(W[Se],0,pe.subarray(0,ke+Xe))),_e[0]=J.isFull?1:0,_e[1]=J.bgStrip?J.bgStrip.z*z+J.bgStrip.yWg*4:0,_e[2]=ke,_e[3]=Xe,e.queue.writeBuffer(Ge[Se],0,_e),J.isFull||at>0||Xe>0){const ie=he.beginComputePass();ie.setBindGroup(0,Xt[Se]),(J.isFull||at>0)&&(ie.setPipeline(bt.pipe),ie.dispatchWorkgroups(1,J.isFull?64:1,J.isFull?z:at)),Xe>0&&(ie.setPipeline(Fe.pipe),ie.dispatchWorkgroups(1,Math.ceil(Xe/4),1)),ie.end(),Q.push("normHalo")}}}return Ae.__passCategories=Q,Nt.finishAndReadback({enc:he,schedule:De,passCategories:Q,u4Tmp:_e,ioOpts:q})}const Ze=typeof(q==null?void 0:q.onProgress)=="function"?q.onProgress:null,Qe=ao(De,l);let At=0,Ot=-1,Ft=e.__v4MsPerStrip||.12;const Yt=he=>{if(!Ze)return;const Se=Math.min(.99,At/Qe);let oe="";he>=0&&he!==Ot&&(Ot=he,oe=`Layer ${he+1}/${l}`),Ze(Se,oe)};let Ye=e.createCommandEncoder();Ee.runPrePasses(Ye,Q),De.clsSkipped&&(Ye.clearBuffer(le,0,f),De.clsStrips.length>0&&e.queue.writeBuffer(ne,0,De.clsStrips));for(let he=0;he<l;he++){const Se=Be[he],{L:oe,nMain:J,nHalo:Le}=Se,Xe=oe.nMomExt||0,mt=oe.isFull?Ve:oe.normStrips?oe.normStrips.length:0,at=ms(oe,he,l);if(he===0){const ke=oe.isFull?64:1,ie=oe.isFull?z:J,kt=!!(oe.bgStrip&&Le>0);if(_e[0]=oe.isFull?1:0,_e[1]=oe.bgStrip?oe.bgStrip.yWg*4:0,_e[2]=oe.bgStrip?oe.bgStrip.z:0,_e[3]=0,e.queue.writeBuffer(Y,0,_e),_.halfPass0)for(const[ft,et]of[[nt.lo,nt.bgLo],[nt.hi,nt.bgHi]]){const Oe=Ye.beginComputePass();Oe.setBindGroup(0,Ct),ie>0&&(Oe.setPipeline(ft.pipe),Oe.dispatchWorkgroups(1,ke,ie)),kt&&(Oe.setPipeline(et.pipe),Oe.dispatchWorkgroups(1,1,1)),Oe.end(),Q.push("conv0")}else{const ft=Ye.beginComputePass();ft.setBindGroup(0,Ct),ie>0&&(ft.setPipeline(nt.main.pipe),ft.dispatchWorkgroups(1,ke,ie)),kt&&(ft.setPipeline(nt.bg.pipe),ft.dispatchWorkgroups(1,1,1)),ft.end(),Q.push("conv0")}}else{const ke=t.dilations[he],ie=pt[ke],kt=R[he],ft=C[he],{mainCount:et,extCount:Oe,layerBaseSlot:St}=Se,ct=oe.mode==="rpure"&&!!oe.bgStrip;let be=0;for(let fe=0;fe<8;fe++){if(fe>=2){const vt=fe-2,yt=oe.isFull||et[vt]>0,lt=!oe.isFull&&oe.mode==="bwd"&&Oe[vt]>0;if(yt||lt){const xt=Ye.beginComputePass();xt.setPipeline(it.pipe),yt&&(xt.setBindGroup(0,ft,[(St+8+vt)*ze]),xt.dispatchWorkgroups(1,oe.isFull?64:1,oe.isFull?32:et[vt])),lt&&(xt.setBindGroup(0,ft,[(St+14+vt)*ze]),xt.dispatchWorkgroups(1,1,Oe[vt])),xt.end(),Q.push("flushStage")}}const xe=oe.isFull||et[fe]>0,wt=!oe.isFull&&oe.mode==="bwd"&&Oe[fe]>0,Wt=fe===0&&ct;if(xe||wt||Wt){const vt=[(St+fe)*ze],yt=oe.isFull?64:1,lt=oe.isFull?32:et[fe];if(_.halfPassConv)for(const[xt,Je,Ce]of[[ie.lo,ie.extLo,ie.bgLo],[ie.hi,ie.extHi,ie.bgHi]]){const Mt=Ye.beginComputePass();Mt.setBindGroup(0,kt,vt),xe&&(Mt.setPipeline(xt.pipe),Mt.dispatchWorkgroups(1,yt,lt)),wt&&(Mt.setPipeline(Je.pipe),Mt.dispatchWorkgroups(1,1,Oe[fe])),Wt&&(Mt.setPipeline(Ce.pipe),Mt.dispatchWorkgroups(1,1,1)),Mt.end(),Q.push("convHidden")}else{const xt=Ye.beginComputePass();xt.setBindGroup(0,kt,vt),xe&&(xt.setPipeline(ie.main.pipe),xt.dispatchWorkgroups(1,yt,lt)),wt&&(xt.setPipeline(ie.ext.pipe),xt.dispatchWorkgroups(1,1,Oe[fe])),Wt&&(xt.setPipeline(ie.bg.pipe),xt.dispatchWorkgroups(1,1,1)),xt.end(),Q.push("convHidden")}be+=(xe?oe.isFull?2048:et[fe]:0)+(wt?Oe[fe]:0)}if(ut==="calibrate"&&(be>=512||fe===7&&be>0)){const vt=performance.now();e.queue.submit([Ye.finish()]),yield e.queue.onSubmittedWorkDone();const yt=performance.now()-vt;if(Ye=e.createCommandEncoder(),At+=be,be>=512){Ft=yt/be;const lt=Ft*Ve;e.__v4WinCalibrated=!0,e.__v4MsPerStrip=Ft,lt<eo?(e.__v4WinFast=!0,ut="pipelined",console.log(`[WebGPU-V4-128M] Windows GPU calibration: estFullLayer=${lt.toFixed(1)}ms -> unthrottled pipelined mode`)):(e.__v4WinFast=!1,ut="paced",console.log(`[WebGPU-V4-128M] Windows GPU calibration: estFullLayer=${lt.toFixed(1)}ms -> TDR-safe paced mode`),Yt(he),yield yn())}be=0}else if(ut==="paced"&&be>0&&(be*Ft>=to*.75||fe===7)){const vt=performance.now();e.queue.submit([Ye.finish()]),yield e.queue.onSubmittedWorkDone();const yt=performance.now()-vt;Ye=e.createCommandEncoder(),be>=256&&yt>.2&&(Ft=.7*Ft+.3*(yt/be),e.__v4MsPerStrip=Ft),At+=be,be=0,Yt(he),yield yn()}}}const Te=he+1<l?n.w0Vec4s+he*n.hiddenVec4PerLayer:0;de[0]=he*n.metaStride,de[1]=Te,de[2]=(he+1)*n.metaStride,de[3]=he+1<l?1:0,de[4]=he===0?1:0,de[5]=oe.isFull?1:0,de[6]=J,de[7]=Xe*8,me[8]=oe.extWeight||0,de[9]=0,de[10]=0,de[11]=0,e.queue.writeBuffer(ce[he],0,de);{const ke=Ye.beginComputePass();ke.setBindGroup(0,zt[he]),ke.setPipeline(ot.pipe),ke.dispatchWorkgroups(t.cs,1,1),ke.end(),Q.push("momentsPrep")}if(he+1<l){{const ie=Ye.beginComputePass();ie.setBindGroup(0,zt[he]),ie.setPipeline(rt.pipe),ie.dispatchWorkgroups(1,1,1),ie.end(),Q.push("momentsPrep")}const ke=oe.isFull?0:mt;if((ke>0||Le>0)&&(ke>0&&pe.set(oe.normStrips,0),Le>0&&pe.set(oe.haloRows,ke),e.queue.writeBuffer(W[he],0,pe.subarray(0,ke+Le))),_e[0]=oe.isFull?1:0,_e[1]=oe.bgStrip?oe.bgStrip.z*z+oe.bgStrip.yWg*4:0,_e[2]=ke,_e[3]=Le,e.queue.writeBuffer(Ge[he],0,_e),oe.isFull||mt>0||Le>0){const ie=Ye.beginComputePass();ie.setBindGroup(0,Xt[he]),(oe.isFull||mt>0)&&(ie.setPipeline(bt.pipe),ie.dispatchWorkgroups(1,oe.isFull?64:1,oe.isFull?z:mt)),Le>0&&(ie.setPipeline(Fe.pipe),ie.dispatchWorkgroups(1,Math.ceil(Le/4),1)),ie.end(),Q.push("normHalo")}}if(ut==="pipelined")e.queue.submit([Ye.finish()]),Ye=e.createCommandEncoder();else{const ke=performance.now();e.queue.submit([Ye.finish()]),yield e.queue.onSubmittedWorkDone();const ie=performance.now()-ke;Ye=e.createCommandEncoder(),At+=(he===0?at.convWork:0)+at.normWork,he===0&&ut==="calibrate"&&ie>=90&&(e.__v4WinCalibrated=!0,e.__v4WinFast=!1,ut="paced",console.log(`[WebGPU-V4-128M] Windows GPU calibration (conv0=${ie.toFixed(1)}ms) -> TDR-safe paced mode`)),ut==="paced"&&(Yt(he),(he===0||ie>=30)&&(yield yn()))}}return Ae.__passCategories=Q,Nt.finishAndReadback({enc:Ye,schedule:De,passCategories:Q,u4Tmp:_e,ioOpts:q,paced:ut==="paced",onProgress:Ze})})}return Nt.warmupIoPipelines(),Ae.dispose=({keepSharedWorkspace:K=!1}={})=>{Nt.dispose();for(const q of D)q.destroy();if(D.length=0,ue.resetBytes(),M.pooled)K?M.inUse=!1:ln.get(e)===M&&xn(e);else{for(const q of M.buffers)q.destroy();M.buffers.length=0}},Ae.gpuBytes=()=>M.bytes+ue.getBytes(),Ae.__passCategories=[],Ae.__coneInfo=()=>({paddedVox:P,actMiB:g/1048576,mode:"LowMem128"}),Ae.kernels="v4-int8",Ae})}const yo=!0;function _s(o,i,r){return ve(this,arguments,function*(e,t,n,s={}){var Ot,Ft,Yt,Ye,he,Se;const a=t instanceof Uint8Array?t:new Uint8Array(t),f=Ys(a.buffer.slice(a.byteOffset,a.byteOffset+a.byteLength)),l=Ks(f);s!=null&&s.classifierBias&&l.classifier&&(l.classifier.bias=Float32Array.from(s.classifierBias));const c=fs(s),g=(s==null?void 0:s.dilations)||(c==null?void 0:c.dilations)||(l.convs.length===25?[16,8,4,2,1,16,8,4,2,1,16,8,4,2,1,16,8,4,2,1,16,8,4,2,1]:l.convs.length===9?[1,2,4,8,16,8,4,2,1]:Js),d=(s==null?void 0:s.activation)||(c==null?void 0:c.activation)||(l.affines.length||l.convs.length>=13?"gelu_tanh":"relu"),u=l.convs[0].outC,p=u>8?Math.ceil(u/8)*8:Math.ceil(u/4)*4,m=Zs(l,{nx:z,ny:z,nz:z,cs:p,activation:d,dilations:g}),v=Wr(a,l,m,s),k=(s==null?void 0:s.outputType)==="probability"?Mr(s,m.nclass):null,_=!!((Ft=(Ot=e.features)==null?void 0:Ot.has)!=null&&Ft.call(Ot,"shader-f16"))&&!(s!=null&&s.disableF16),h=e.__adapterInfo||e.adapterInfo||{},w=!!((Ye=(Yt=e.features)==null?void 0:Yt.has)!=null&&Ye.call(Yt,"subgroups"))&&h.subgroupMinSize===32&&h.subgroupMaxSize===32&&!(s!=null&&s.disableSubgroups),S=z*z*z,b=k?S*4:S,P=m.cs>=16,F=P?m.cs/2:m.cs,$=z*z*F*_t*4,x=z*z*F*Pt*4,G=e.limits||{},M=Math.min((he=G.maxStorageBufferBindingSize)!=null?he:1/0,(Se=G.maxBufferSize)!=null?Se:1/0),A=ro(e,m,s);if((s!=null&&s.forceLowMem128||A||$>M||b>M)&&m.cs>=8&&m.cs%4===0)return qr(e,m,v,_,w,s,k);if($>M||b>M){const oe=Math.max($,b)>>>20;throw new Error(`meshnet_fast_v4: buffer (${oe} MiB) exceeds device limit (${M>>>20} MiB)`)}const T=oo(e,s),L=wo({cs:m.cs,chan:m.chan,nclass:m.nclass,clsK4:v.clsK4,dilations:m.dilations,activation:m.activation,norm:m.norm,hasF16:_,hasSubgroups32:w,splitHalves:P,probCfg:k,chunkableStd:T});console.log(`[WebGPU-V4] ${m.chan}ch(cs=${m.cs})/${m.nclass}cls (${m.dilations.length} convs, ${m.activation}, norm=${m.norm}${k?", prob=3":""}) | ${_?"f16+sterbenz":"f32"} | ${w?"subgroups32":"shared-8KiB"} | ZYCX-pad80 | maxBuf=${(Math.max($,b)/1048576).toFixed(1)} MiB`);const B=GPUBufferUsage.STORAGE,N=GPUBufferUsage.COPY_DST,U=GPUBufferUsage.COPY_SRC,te=z*z*pn,le=te*(_?2:4),E=Un*m.cs*16,I=Qs*m.cs*16,D=(m.cs*2+4)*16,ue=_?Math.ceil(L.totalWEffVec4s/2)*16:L.totalWEffVec4s*16,O=`std|${m.cs}|${P?1:0}|${_?1:0}|${b}`,j=uo(e,O,()=>{const oe=[],J=Nn(e,oe),Le=J.alloc,Xe={inpBuf:Le(le,B|N|U),act8_0:Le($,B|N|U),act8_1:Le(P?$:16,B|N|U),y8_0:Le(x,B|N|U),y8_1:Le(P?x:16,B|N|U),momMainBuf:Le(E,B),momExtBuf:Le(I,B),momStatsBuf:Le(D,B),labels8Buf:Le(b,B|N|U),readbackBuf:Le(b,GPUBufferUsage.MAP_READ|N)};return{buffers:oe,named:Xe,bytes:J.getBytes()}}),{inpBuf:ye,act8_0:Me,act8_1:Re,y8_0:$e,y8_1:ne,momMainBuf:re,momExtBuf:W,momStatsBuf:Y,labels8Buf:V,readbackBuf:ce}=j.named,Ge=[],ze=Nn(e,Ge),ge=ze.alloc,we=ge(_?v.wF16.byteLength:v.wF32.byteLength,B|N),Z=ge(v.qmetaF32.byteLength,B|N),Ue=ge(ue,L.useUniformWeff?B|GPUBufferUsage.UNIFORM:B),X=m.dilations.length,Ie=m.norm==="gn"&&!(s!=null&&s.disableConeSkip),tt=Array.from({length:X},()=>ge(Ie?Ve*4:16,B|N)),qe=Array.from({length:X-1},()=>ge(Ie?(Ve+z*z)*4:16,B|N)),ot=ge(Ie?Ve*4:16,B|N),rt=ge(16,GPUBufferUsage.UNIFORM|N),it=ge(16,GPUBufferUsage.UNIFORM|N),bt=Array.from({length:X},()=>ge(48,GPUBufferUsage.UNIFORM|N)),Fe=Array.from({length:X-1},()=>ge(16,GPUBufferUsage.UNIFORM|N)),Ke=Math.max(256,G.minUniformBufferOffsetAlignment||256),nt=Ke>>>2,pt=L.chunkableStd?Math.max(1,(X-1)*Kn):0,dt=L.chunkableStd?ge(pt*Ke,GPUBufferUsage.UNIFORM|N):null,ht=L.chunkableStd?new Uint32Array(pt*nt):null,Gt=L.chunkableStd?null:Array.from({length:X},()=>ge(16,GPUBufferUsage.UNIFORM|N));e.queue.writeBuffer(we,0,_?v.wF16:v.wF32),e.queue.writeBuffer(Z,0,v.qmetaF32);const Ct=Array.from(new Set(m.dilations.slice(1)));let H;try{H=yield mo(e,m,v,_,w,P,k,L,Ct)}catch(oe){for(const J of Ge)J.destroy();if(Ge.length=0,j.pooled)ln.get(e)===j&&xn(e);else{for(const J of j.buffers)J.destroy();j.buffers.length=0}throw oe}const{pInit:Tt,pMomFin:Ut,pPrepW:Nt,pNorm:zt,pNormHalo:Xt,pCls:y,pConv0:C,convPipes:R}=H,ae=(oe,J)=>e.createBindGroup({layout:oe,entries:J.map((Le,Xe)=>({binding:Xe,resource:Le&&Le.buffer?Le:{buffer:Le}}))}),se=ae(Tt.bgl,[Me,Re]);{const oe=e.createCommandEncoder(),J=oe.beginComputePass();J.setPipeline(Tt.pipe),J.setBindGroup(0,se),J.dispatchWorkgroups(1,z,z),J.end(),e.queue.submit([oe.finish()])}const Pe=(L.halfPass0?C.lo:C.main).bgl,pe=ae(Pe,[ye,$e,ne,we,Z,re,W,tt[0],rt]),de=ae(y.bgl,[$e,ne,we,Z,re,Y,V,ot,it]),me=!!(k&&P&&$>=b&&x>=b),_e=me?ge(16,GPUBufferUsage.UNIFORM|N):null,Ne=me?ae(y.bgl,[$e,ne,we,Z,re,Y,V,ot,_e]):null,Ae=ho({device:e,hasF16:_,nvox:S,outBufBytes:b,inpBuf:ye,act8_0:Me,labels8Buf:V,readbackBuf:ce,pInit:Tt,bgInit:se,pCls:y,bgCls:de,clsUbo:it,packed:v,modelEntry:s,probCfg:k,canGpuProb:me,probSlots:me?{clsUbo1:_e,bgCls1:Ne,pass0HoldBuf:Me,y0:$e,y1:ne,b:Re,sup:Me}:null,ownedBuffers:Ge,mkBuf:ge}),je=bt.map((oe,J)=>ae(Ut.bgl,[we,Z,re,W,Y,Ue,tt[J],oe])),We=Fe.map((oe,J)=>ae(zt.bgl,[Me,Re,$e,ne,re,W,Y,qe[J],oe])),K=L.chunkableStd?{buffer:dt,offset:0,size:32}:null,q=Array.from({length:X},(oe,J)=>{if(J===0)return null;const Le=m.dilations[J],Xe=L.halfPassConv?R[Le].lo:R[Le].main;return ae(Xe.bgl,[Me,Re,$e,ne,re,W,Ue,tt[J],L.chunkableStd?K:Gt[J]])}),ee=(oe,J,Le,Xe,mt,at)=>{const Te=oe*nt;ht[Te]=J?1:0,ht[Te+1]=Le,ht[Te+2]=Xe?1:0,ht[Te+3]=0,ht[Te+4]=mt,ht[Te+5]=at,ht[Te+6]=0,ht[Te+7]=0},Ee=(oe,J,Le,Xe,mt,at,Te,ke)=>{if(!(at<=0&&Te<=0))if(L.halfPassConv){{const ie=oe.beginComputePass();Xe?ie.setBindGroup(0,Le,Xe):ie.setBindGroup(0,Le),at>0&&(ie.setPipeline(J.lo.pipe),ie.dispatchWorkgroups(1,mt,at)),Te>0&&(ie.setPipeline(J.extLo.pipe),ie.dispatchWorkgroups(1,1,Te)),ie.end(),ke.push("convHidden")}{const ie=oe.beginComputePass();Xe?ie.setBindGroup(0,Le,Xe):ie.setBindGroup(0,Le),at>0&&(ie.setPipeline(J.hi.pipe),ie.dispatchWorkgroups(1,mt,at)),Te>0&&(ie.setPipeline(J.extHi.pipe),ie.dispatchWorkgroups(1,1,Te)),ie.end(),ke.push("convHidden")}}else{const ie=oe.beginComputePass();Xe?ie.setBindGroup(0,Le,Xe):ie.setBindGroup(0,Le),at>0&&(ie.setPipeline(J.main.pipe),ie.dispatchWorkgroups(1,mt,at)),Te>0&&(ie.setPipeline(J.ext.pipe),ie.dispatchWorkgroups(1,1,Te)),ie.end(),ke.push("convHidden")}},st=_?new Uint16Array(te):new Float32Array(te),De=new Uint8Array(z*z),Be=new Uint32Array(Ve),ut=new Uint32Array(Ve+z*z),Q=new Uint32Array(12),Ze=new Float32Array(Q.buffer),Qe=new Uint32Array(4);function At(oe,J){return ve(this,null,function*(){if(oe.length!==S)throw new Error(`meshnet_fast_v4 expected ${S} voxels, got ${oe.length}`);const Le=m.norm==="gn"&&!(s!=null&&s.disableConeSkip),Xe=yield Ae.prepareInput({volume:oe,ioOpts:J,useCone:Le,padInputHost:st,headRowHost:De,hasF16Flag:_}),mt=Xe.info,at=go(De,mt,m.dilations,Le);let Te=so(e,s);const ke=[];if(Te==="single"&&!L.chunkableStd){const be=e.createCommandEncoder();Xe.runPrePasses(be,ke),at.clsSkipped&&(be.clearBuffer(V,0,b),at.clsStrips.length>0&&e.queue.writeBuffer(ot,0,at.clsStrips));for(let fe=0;fe<X;fe++){const xe=at.layers[fe],wt=xe.isFull?Ve:xe.mainStrips.length,Wt=xe.isFull||!xe.extStrips?0:xe.extStrips.length,vt=xe.nMomExt||0,yt=xe.haloRows?xe.haloRows.length:0,lt=xe.isFull?Ve:xe.normStrips?xe.normStrips.length:0;if(!xe.isFull&&(wt>0||Wt>0)&&(wt>0&&Be.set(xe.mainStrips,0),Wt>0&&Be.set(xe.extStrips,wt),e.queue.writeBuffer(tt[fe],0,Be.subarray(0,wt+Wt))),fe===0){const Je=xe.isFull?64:1,Ce=xe.isFull?z:wt,Mt=!!(xe.bgStrip&&yt>0);if(Qe[0]=xe.isFull?1:0,Qe[1]=xe.bgStrip?xe.bgStrip.yWg*4:0,Qe[2]=xe.bgStrip?xe.bgStrip.z:0,Qe[3]=0,e.queue.writeBuffer(rt,0,Qe),L.halfPass0){{const He=be.beginComputePass();He.setBindGroup(0,pe),Ce>0&&(He.setPipeline(C.lo.pipe),He.dispatchWorkgroups(1,Je,Ce)),Mt&&(He.setPipeline(C.bgLo.pipe),He.dispatchWorkgroups(1,1,1)),He.end(),ke.push("conv0")}{const He=be.beginComputePass();He.setBindGroup(0,pe),Ce>0&&(He.setPipeline(C.hi.pipe),He.dispatchWorkgroups(1,Je,Ce)),Mt&&(He.setPipeline(C.bgHi.pipe),He.dispatchWorkgroups(1,1,1)),He.end(),ke.push("conv0")}}else{const He=be.beginComputePass();He.setBindGroup(0,pe),Ce>0&&(He.setPipeline(C.main.pipe),He.dispatchWorkgroups(1,Je,Ce)),Mt&&(He.setPipeline(C.bg.pipe),He.dispatchWorkgroups(1,1,1)),He.end(),ke.push("conv0")}}else{const Je=m.dilations[fe],Ce=R[Je],Mt=q[fe],He=xe.isFull?64:1,Wn=xe.isFull?z:wt,gn=xe.mode==="rpure"&&yt>0||xe.mode==="bwd"&&fe+1<X;Qe[0]=xe.isFull?1:0,Qe[1]=wt,Qe[2]=gn?1:0,Qe[3]=0,e.queue.writeBuffer(Gt[fe],0,Qe),Ee(be,Ce,Mt,null,He,Wn,Wt,ke)}const xt=fe+1<X?v.w0Vec4s+fe*v.hiddenVec4PerLayer:0;Q[0]=fe*v.metaStride,Q[1]=xt,Q[2]=(fe+1)*v.metaStride,Q[3]=fe+1<X?1:0,Q[4]=fe===0?1:0,Q[5]=xe.isFull?1:0,Q[6]=wt,Q[7]=vt*8,Ze[8]=xe.extWeight||0,Q[9]=0,Q[10]=0,Q[11]=0,e.queue.writeBuffer(bt[fe],0,Q);{const Je=be.beginComputePass();Je.setBindGroup(0,je[fe]),Je.setPipeline(Ut.pipe),Je.dispatchWorkgroups(m.cs,1,1),Je.end(),ke.push("momentsPrep")}if(fe+1<X){{const Ce=be.beginComputePass();Ce.setBindGroup(0,je[fe]),Ce.setPipeline(Nt.pipe),Ce.dispatchWorkgroups(1,1,1),Ce.end(),ke.push("momentsPrep")}const Je=xe.isFull?0:lt;if((Je>0||yt>0)&&(Je>0&&ut.set(xe.normStrips,0),yt>0&&ut.set(xe.haloRows,Je),e.queue.writeBuffer(qe[fe],0,ut.subarray(0,Je+yt))),Qe[0]=xe.isFull?1:0,Qe[1]=xe.bgStrip?xe.bgStrip.z*z+xe.bgStrip.yWg*4:0,Qe[2]=Je,Qe[3]=yt,e.queue.writeBuffer(Fe[fe],0,Qe),xe.isFull||lt>0||yt>0){const Ce=be.beginComputePass();Ce.setBindGroup(0,We[fe]),(xe.isFull||lt>0)&&(Ce.setPipeline(zt.pipe),Ce.dispatchWorkgroups(1,xe.isFull?64:1,xe.isFull?z:lt)),yt>0&&(Ce.setPipeline(Xt.pipe),Ce.dispatchWorkgroups(1,Math.ceil(yt/4),1)),Ce.end(),ke.push("normHalo")}}}return At.__passCategories=ke,Ae.finishAndReadback({enc:be,schedule:at,passCategories:ke,u4Tmp:Qe,ioOpts:J})}const ie=typeof(J==null?void 0:J.onProgress)=="function"?J.onProgress:null,kt=ao(at,X);let ft=0,et=-1,Oe=e.__v4MsPerStrip||.12;const St=be=>{if(!ie)return;const fe=Math.min(.99,ft/kt);let xe="";be>=0&&be!==et&&(et=be,xe=`Layer ${be+1}/${X}`),ie(fe,xe)};let ct=e.createCommandEncoder();Xe.runPrePasses(ct,ke),at.clsSkipped&&(ct.clearBuffer(V,0,b),at.clsStrips.length>0&&e.queue.writeBuffer(ot,0,at.clsStrips));for(let be=0;be<X;be++){const fe=at.layers[be],xe=fe.isFull?Ve:fe.mainStrips.length,wt=fe.isFull||!fe.extStrips?0:fe.extStrips.length,Wt=fe.nMomExt||0,vt=fe.haloRows?fe.haloRows.length:0,yt=fe.isFull?Ve:fe.normStrips?fe.normStrips.length:0,lt=ms(fe,be,X);if(!fe.isFull&&(xe>0||wt>0)&&(xe>0&&Be.set(fe.mainStrips,0),wt>0&&Be.set(fe.extStrips,xe),e.queue.writeBuffer(tt[be],0,Be.subarray(0,xe+wt))),be===0){const Je=fe.isFull?64:1,Ce=fe.isFull?z:xe,Mt=!!(fe.bgStrip&&vt>0);if(Qe[0]=fe.isFull?1:0,Qe[1]=fe.bgStrip?fe.bgStrip.yWg*4:0,Qe[2]=fe.bgStrip?fe.bgStrip.z:0,Qe[3]=0,e.queue.writeBuffer(rt,0,Qe),L.halfPass0){{const He=ct.beginComputePass();He.setBindGroup(0,pe),Ce>0&&(He.setPipeline(C.lo.pipe),He.dispatchWorkgroups(1,Je,Ce)),Mt&&(He.setPipeline(C.bgLo.pipe),He.dispatchWorkgroups(1,1,1)),He.end(),ke.push("conv0")}{const He=ct.beginComputePass();He.setBindGroup(0,pe),Ce>0&&(He.setPipeline(C.hi.pipe),He.dispatchWorkgroups(1,Je,Ce)),Mt&&(He.setPipeline(C.bgHi.pipe),He.dispatchWorkgroups(1,1,1)),He.end(),ke.push("conv0")}}else{const He=ct.beginComputePass();He.setBindGroup(0,pe),Ce>0&&(He.setPipeline(C.main.pipe),He.dispatchWorkgroups(1,Je,Ce)),Mt&&(He.setPipeline(C.bg.pipe),He.dispatchWorkgroups(1,1,1)),He.end(),ke.push("conv0")}}else{const Je=m.dilations[be],Ce=R[Je],Mt=q[be],He=fe.isFull?64:1,Wn=fe.isFull?z:xe,gn=fe.mode==="rpure"&&vt>0||fe.mode==="bwd"&&be+1<X;if(!L.chunkableStd)Qe[0]=fe.isFull?1:0,Qe[1]=xe,Qe[2]=gn?1:0,Qe[3]=0,e.queue.writeBuffer(Gt[be],0,Qe),Ee(ct,Ce,Mt,null,He,Wn,wt,ke);else if(Te==="pipelined"||Te==="single"){const Kt=(be-1)*Kn;ee(Kt,fe.isFull,xe,gn,0,0),e.queue.writeBuffer(dt,Kt*Ke,ht.subarray(Kt*nt,(Kt+1)*nt)),Ee(ct,Ce,Mt,[Kt*Ke],He,Wn,wt,ke)}else{const Kt=(be-1)*Kn,Dn=Te==="calibrate"?1024:Math.max(256,Math.min(4096,Math.round(to/Math.max(.005,Oe)))),$n=[];let zn=0;if(fe.isFull){const nn=Math.max(4,Math.min(64,Math.round(Dn/64)));for(let Dt=0;Dt<z;Dt+=nn){const Et=Math.min(nn,z-Dt),Zt=Kt+zn++;ee(Zt,!0,xe,gn,Dt,0),$n.push({slotIdx:Zt,mainY:64,mainCountZ:Et,extCountZ:0,strips:Et*64})}}else{const nn=Math.max(256,Dn);for(let Et=0;Et<xe;Et+=nn){const Zt=Math.min(nn,xe-Et),sn=Kt+zn++;ee(sn,!1,xe,gn,Et,0),$n.push({slotIdx:sn,mainY:1,mainCountZ:Zt,extCountZ:0,strips:Zt})}const Dt=Math.max(256,Dn);for(let Et=0;Et<wt;Et+=Dt){const Zt=Math.min(Dt,wt-Et),sn=Kt+zn++;ee(sn,!1,xe,gn,0,Et),$n.push({slotIdx:sn,mainY:1,mainCountZ:0,extCountZ:Zt,strips:Zt})}}zn>0&&e.queue.writeBuffer(dt,Kt*Ke,ht.subarray(Kt*nt,(Kt+zn)*nt));let en=0;for(let nn=0;nn<$n.length;nn++){const Dt=$n[nn];if(Ee(ct,Ce,Mt,[Dt.slotIdx*Ke],Dt.mainY,Dt.mainCountZ,Dt.extCountZ,ke),Te==="pipelined")continue;en+=Dt.strips;const Et=nn===$n.length-1;if(Te==="calibrate"&&(en>=512||Et&&en>0)){const Zt=performance.now();e.queue.submit([ct.finish()]),yield e.queue.onSubmittedWorkDone();const sn=performance.now()-Zt;if(ct=e.createCommandEncoder(),ft+=en,en>=512){Oe=sn/en;const Vn=Oe*Ve;e.__v4WinCalibrated=!0,e.__v4MsPerStrip=Oe,Vn<eo?(e.__v4WinFast=!0,Te="pipelined",console.log(`[WebGPU-V4] Windows GPU calibration: estFullLayer=${Vn.toFixed(1)}ms -> unthrottled pipelined mode`)):(e.__v4WinFast=!1,Te="paced",console.log(`[WebGPU-V4] Windows GPU calibration: estFullLayer=${Vn.toFixed(1)}ms -> TDR-safe paced mode`),St(be),yield yn())}en=0}else if(Te==="paced"){const Zt=performance.now();e.queue.submit([ct.finish()]),yield e.queue.onSubmittedWorkDone();const sn=performance.now()-Zt;ct=e.createCommandEncoder(),en>=256&&sn>.2&&(Oe=.7*Oe+.3*(sn/en),e.__v4MsPerStrip=Oe),ft+=en,en=0,St(be),yield yn()}}}}const xt=be+1<X?v.w0Vec4s+be*v.hiddenVec4PerLayer:0;Q[0]=be*v.metaStride,Q[1]=xt,Q[2]=(be+1)*v.metaStride,Q[3]=be+1<X?1:0,Q[4]=be===0?1:0,Q[5]=fe.isFull?1:0,Q[6]=xe,Q[7]=Wt*8,Ze[8]=fe.extWeight||0,Q[9]=0,Q[10]=0,Q[11]=0,e.queue.writeBuffer(bt[be],0,Q);{const Je=ct.beginComputePass();Je.setBindGroup(0,je[be]),Je.setPipeline(Ut.pipe),Je.dispatchWorkgroups(m.cs,1,1),Je.end(),ke.push("momentsPrep")}if(be+1<X){{const Ce=ct.beginComputePass();Ce.setBindGroup(0,je[be]),Ce.setPipeline(Nt.pipe),Ce.dispatchWorkgroups(1,1,1),Ce.end(),ke.push("momentsPrep")}const Je=fe.isFull?0:yt;if((Je>0||vt>0)&&(Je>0&&ut.set(fe.normStrips,0),vt>0&&ut.set(fe.haloRows,Je),e.queue.writeBuffer(qe[be],0,ut.subarray(0,Je+vt))),Qe[0]=fe.isFull?1:0,Qe[1]=fe.bgStrip?fe.bgStrip.z*z+fe.bgStrip.yWg*4:0,Qe[2]=Je,Qe[3]=vt,e.queue.writeBuffer(Fe[be],0,Qe),fe.isFull||yt>0||vt>0){const Ce=ct.beginComputePass();Ce.setBindGroup(0,We[be]),(fe.isFull||yt>0)&&(Ce.setPipeline(zt.pipe),Ce.dispatchWorkgroups(1,fe.isFull?64:1,fe.isFull?z:yt)),vt>0&&(Ce.setPipeline(Xt.pipe),Ce.dispatchWorkgroups(1,Math.ceil(vt/4),1)),Ce.end(),ke.push("normHalo")}}if(Te==="pipelined")e.queue.submit([ct.finish()]),ct=e.createCommandEncoder();else if(Te!=="single"){const Je=performance.now();e.queue.submit([ct.finish()]),yield e.queue.onSubmittedWorkDone();const Ce=performance.now()-Je;ct=e.createCommandEncoder(),ft+=(be===0||!L.chunkableStd?lt.convWork:0)+lt.normWork,be===0&&Te==="calibrate"&&Ce>=90&&(e.__v4WinCalibrated=!0,e.__v4WinFast=!1,Te="paced",console.log(`[WebGPU-V4] Windows GPU calibration (conv0=${Ce.toFixed(1)}ms) -> TDR-safe paced mode`)),Te==="paced"&&(St(be),(be===0||!L.chunkableStd||Ce>=30)&&(yield yn()))}}return At.__passCategories=ke,Ae.finishAndReadback({enc:ct,schedule:at,passCategories:ke,u4Tmp:Qe,ioOpts:J,paced:Te==="paced",onProgress:ie})})}return Ae.warmupIoPipelines(),At.dispose=({keepSharedWorkspace:oe=!1}={})=>{Ae.dispose();for(const J of Ge)J.destroy();if(Ge.length=0,ze.resetBytes(),j.pooled)oe?j.inUse=!1:ln.get(e)===j&&xn(e);else{for(const J of j.buffers)J.destroy();j.buffers.length=0}},At.gpuBytes=()=>j.bytes+ze.getBytes(),At.__passCategories=[],At.__coneInfo=()=>({paddedVox:te,actMiB:$/1048576}),At.kernels="v4-int8",At})}function bs(e){return ve(this,null,function*(){var f,l,c,g,d,u;if(!e)return;const t=!!((l=(f=e.features)==null?void 0:f.has)!=null&&l.call(f,"shader-f16")),n=e.__adapterInfo||e.adapterInfo||{},s=!!((g=(c=e.features)==null?void 0:c.has)!=null&&g.call(c,"subgroups"))&&n.subgroupMinSize===32&&n.subgroupMaxSize===32,o=e.limits||{},i=Math.min((d=o.maxStorageBufferBindingSize)!=null?d:1/0,(u=o.maxBufferSize)!=null?u:1/0),r=[{chan:24,cs:24,nclass:0,dilations:Js,activation:"gelu_tanh",norm:"gn"},{chan:16,cs:16,nclass:0,dilations:[16,8,4,2,1],activation:"gelu_tanh",norm:"gn"}],a=[an(e,t?"prep_in_u8_f16":"prep_in_u8_f32",()=>is(!0,t),"main",["read-only-storage","storage","uniform"]),an(e,"transpose_u8_v4",co,"main",["read-only-storage","storage"])];for(const p of r){const m=p.cs>=16,v=m?p.cs/2:p.cs,_=z*z*v*_t*4>i||ro(e,p,null),h=Array.from(new Set(p.dilations.slice(1)));if(_){const w=vo({cs:p.cs,chan:p.chan,nclass:0,clsK4:0,dilations:p.dilations,activation:p.activation,norm:p.norm,hasF16:t,hasSubgroups32:s,numConvs:p.dilations.length,probCfg:null});a.push(po(e,p,null,t,s,null,w,h,{includeCls:!1}))}else{const w=oo(e,null),S=wo({cs:p.cs,chan:p.chan,nclass:0,clsK4:0,dilations:p.dilations,activation:p.activation,norm:p.norm,hasF16:t,hasSubgroups32:s,splitHalves:m,probCfg:null,chunkableStd:w});a.push(mo(e,p,null,t,s,m,null,S,h,{includeCls:!1}))}}yield Promise.all(a)})}const Tr=(e,t)=>ve(null,null,function*(){const n=yield fetch(t).then(s=>s.arrayBuffer());return _s(e,new Uint8Array(n))}),xo=!0,Nr={load:Tr,setupNet:_s,warmupV4CorePipelines:bs,supportsF32Fallback:yo,supportsGpuNativeIO:xo},ls=Object.freeze(Object.defineProperty({__proto__:null,default:Nr,releaseV4Workspace:xn,setupNet:_s,supportsF32Fallback:yo,supportsGpuNativeIO:xo,warmupV4CorePipelines:bs},Symbol.toStringTag,{value:"Module"}));function Or(){var e;try{if(new URLSearchParams(((e=globalThis.location)==null?void 0:e.search)||"").get("webgpuKernels")==="tinygrad")return"disabled by ?webgpuKernels=tinygrad"}catch(t){}return null}const Cn=new Set(["meshnet_fast_v4","dkatlas24_int8","mindmap24_int8","model16chan18cls_int8","mindgrab_int8"]);function Dr(e){return Cn.has(e)}const vn=Object.assign({"./webgpu_runners/dkatlas24_f32_runner.js":()=>gt(()=>import("./dkatlas24_f32_runner-CdBMa7VZ.js"),[],import.meta.url),"./webgpu_runners/dkatlas24_int8_v3_runner.js":()=>gt(()=>import("./dkatlas24_int8_v3_runner-75F31Su0.js"),__vite__mapDeps([0,1,2,3]),import.meta.url),"./webgpu_runners/dkatlas24_runner.js":()=>gt(()=>import("./dkatlas24_runner-BkVMX0Bk.js"),[],import.meta.url),"./webgpu_runners/dkatlas24_synth_f32_runner.js":()=>gt(()=>import("./dkatlas24_synth_f32_runner-Bb7lxqr0.js"),[],import.meta.url),"./webgpu_runners/dkatlas24_synth_runner.js":()=>gt(()=>import("./dkatlas24_synth_runner-5rLWbXWF.js"),[],import.meta.url),"./webgpu_runners/manual_mindgrab_runner.js":()=>gt(()=>import("./manual_mindgrab_runner-DDusGIor.js"),[],import.meta.url),"./webgpu_runners/mindgrab_runner.js":()=>gt(()=>import("./mindgrab_runner-B-UQtXej.js"),[],import.meta.url),"./webgpu_runners/mindgrab_tta_runner.js":()=>gt(()=>import("./mindgrab_tta_runner-Ct42O8D2.js"),[],import.meta.url),"./webgpu_runners/model16chan18cls_f32_runner.js":()=>gt(()=>import("./model16chan18cls_f32_runner-B5FaUMez.js"),[],import.meta.url),"./webgpu_runners/model16chan18cls_runner.js":()=>gt(()=>import("./model16chan18cls_runner-aMK3m7Gj.js"),[],import.meta.url),"./webgpu_runners/model21_104class_runner.js":()=>gt(()=>import("./model21_104class_runner-DuOJ6qrl.js"),[],import.meta.url),"./webgpu_runners/model21_f32_runner.js":()=>gt(()=>import("./model21_f32_runner-yTUV9LXd.js"),[],import.meta.url),"./webgpu_runners/model21_tta_runner.js":()=>gt(()=>import("./model21_tta_runner-e7-76trO.js"),[],import.meta.url),"./webgpu_runners/model21chan18cls_runner.js":()=>gt(()=>import("./model21chan18cls_runner-DvLOnZMy.js"),[],import.meta.url),"./webgpu_runners/model24chan18cls_gdice_prio_probability_runner.js":()=>gt(()=>import("./model24chan18cls_gdice_prio_probability_runner-BHqpfuCi.js"),[],import.meta.url),"./webgpu_runners/model24chan18cls_gdice_prio_runner.js":()=>gt(()=>import("./model24chan18cls_gdice_prio_runner-B5cN26gD.js"),[],import.meta.url),"./webgpu_runners/model30chan18cls_runner.js":()=>gt(()=>import("./model30chan18cls_runner-C2mBz0G4.js"),[],import.meta.url),"./webgpu_runners/model30chan18cls_tta_runner.js":()=>gt(()=>import("./model30chan18cls_tta_runner-v8CMqLh5.js"),[],import.meta.url),"./webgpu_runners/model30chan50cls_f32_runner.js":()=>gt(()=>import("./model30chan50cls_f32_runner-DQ53FZ3-.js"),[],import.meta.url),"./webgpu_runners/model30chan50cls_runner.js":()=>gt(()=>import("./model30chan50cls_runner-D72-rlcG.js"),[],import.meta.url),"./webgpu_runners/model30chan50cls_tta_runner.js":()=>gt(()=>import("./model30chan50cls_tta_runner-CliMlbAZ.js"),[],import.meta.url),"./webgpu_runners/model32chan18cls_runner.js":()=>gt(()=>import("./model32chan18cls_runner-cowyou29.js"),[],import.meta.url),"./webgpu_runners/model5_gw_ae_runner.js":()=>gt(()=>import("./model5_gw_ae_runner-jI57fGIB.js"),[],import.meta.url),"./webgpu_runners/model5_runner.js":()=>gt(()=>import("./model5_runner-BiUlzJBp.js"),[],import.meta.url),"./webgpu_runners/model5_tta_runner.js":()=>gt(()=>import("./model5_tta_runner-DjIMLwlR.js"),[],import.meta.url),"./webgpu_runners/model6chan3cls_runner.js":()=>gt(()=>import("./model6chan3cls_runner-wSGRZpe5.js"),[],import.meta.url),"./webgpu_runners/robust_subcortical_runner.js":()=>gt(()=>import("./robust_subcortical_runner-D74Uw6At.js"),[],import.meta.url),"./webgpu_runners/robust_subcortical_tta_runner.js":()=>gt(()=>import("./robust_subcortical_tta_runner-CkwA2dHP.js"),[],import.meta.url)});function Vr(){const e=Object.keys(vn).map(t=>{const n=t.match(/\/([^\/]+)_runner\.js$/);return n?n[1]:null}).filter(Boolean);return Array.from(new Set([...Cn,...e]))}function Hr(e){if(Cn.has(e))return()=>ve(null,null,function*(){return ls});const t=`./webgpu_runners/${e}_runner.js`;if(vn[t])return vn[t];const n=e.toLowerCase();for(const s of Cn)if(s.toLowerCase()===n)return()=>ve(null,null,function*(){return ls});for(const[s,o]of Object.entries(vn))if(s.toLowerCase().includes(`/${n}_runner.js`))return o;for(const[s,o]of Object.entries(vn))if(s.includes(e))return o;return null}function jr(e){if(Cn.has(e))return!0;const t=`./webgpu_runners/${e}_runner.js`;if(vn[t])return!0;const n=e.toLowerCase();for(const o of Cn)if(o.toLowerCase()===n)return!0;const s=`/${n}_runner.js`;return Object.keys(vn).some(o=>o.toLowerCase().endsWith(s))}function Xr(e,t){if(typeof Float16Array=="undefined")throw new Error("Float16Array unavailable: cannot cast fp32 master weights to fp16.");const n=new DataView(e.buffer,e.byteOffset,e.byteLength),s=Number(n.getBigUint64(0,!0)),o=JSON.parse(new TextDecoder("utf8").decode(e.subarray(8,8+s))),i=8+s;if(!Object.entries(o).some(([p,m])=>p!=="__metadata__"&&m.dtype==="F32"))return e;const a={},f=[];let l=0;for(const[p,m]of Object.entries(o)){if(p==="__metadata__"){a[p]=m;continue}const[v,k]=m.data_offsets,_=e.subarray(i+v,i+k);let h,w;if(m.dtype==="F32"){const S=new Float32Array(_.slice().buffer),b=new Float16Array(S);h=new Uint8Array(b.buffer),w="F16"}else h=_,w=m.dtype;a[p]={dtype:w,shape:m.shape,data_offsets:[l,l+h.byteLength]},f.push(h),l+=h.byteLength}const c=new TextEncoder().encode(JSON.stringify(a)),g=(8-c.byteLength%8)%8,d=new Uint8Array(8+c.byteLength+g+l);new DataView(d.buffer).setBigUint64(0,BigInt(c.byteLength+g),!0),d.set(c,8),d.fill(32,8+c.byteLength,8+c.byteLength+g);let u=8+c.byteLength+g;for(const p of f)d.set(p,u),u+=p.byteLength;return console.log("[WebGPU] Cast fp32 master weights -> fp16."),d}function Yr(e,t){try{const n=r=>!!(e.features&&e.features.has&&e.features.has(r)),s=e.limits||{},o=typeof navigator!="undefined"&&navigator.userAgent||"unknown",i=/Safari/.test(o)&&!/Chrome|Chromium|Android/.test(o);console.log("[SAFARI-DEBUG] ===== WebGPU device capabilities ====="),console.log("[SAFARI-DEBUG] model:",(t==null?void 0:t.modelName)||(t==null?void 0:t.webgpu_runner)||"(unknown)"),console.log("[SAFARI-DEBUG] userAgent:",o,"| classified Safari:",i),console.log("[SAFARI-DEBUG] shader-f16:",n("shader-f16")),console.log("[SAFARI-DEBUG] features:",e.features?Array.from(e.features):"(none)"),console.log("[SAFARI-DEBUG] limits:",{maxBufferSize:s.maxBufferSize,maxStorageBufferBindingSize:s.maxStorageBufferBindingSize,maxComputeInvocationsPerWorkgroup:s.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:s.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:s.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:s.maxComputeWorkgroupSizeZ,maxComputeWorkgroupsPerDimension:s.maxComputeWorkgroupsPerDimension}),console.log("[SAFARI-DEBUG] BC_WEBGPU_DEBUG (logits readback):",typeof window!="undefined"&&!!window.BC_WEBGPU_DEBUG),console.log("[SAFARI-DEBUG] =======================================")}catch(n){console.warn("[SAFARI-DEBUG] capability dump failed:",n==null?void 0:n.message)}}function $o(){return typeof requestAnimationFrame!="function"?new Promise(e=>setTimeout(e,0)):new Promise(e=>{let t=!1;const n=()=>{t||(t=!0,e())},s=setTimeout(n,25);requestAnimationFrame(()=>{clearTimeout(s),setTimeout(n,0)})})}const Kr=6,Zr=4,bn=new Map,Qn=new Map,hn=new Map,mn=new WeakMap,Jn=new WeakSet;function Qr(e){return ve(this,null,function*(){if(!(!e||Jn.has(e))){Jn.add(e);try{yield bs(e)}catch(t){Jn.delete(e),console.debug("[WebGPU] Background pipeline warmup skipped:",(t==null?void 0:t.message)||t)}}})}function So(e,{keepSharedWorkspace:t=!1}={}){var n;if(e)try{if(typeof((n=e.execute)==null?void 0:n.dispose)=="function")e.execute.dispose({keepSharedWorkspace:t});else if(e.ownedBuffers)for(const s of e.ownedBuffers)s.destroy()}catch(s){console.warn("[WebGPU] Failed to dispose cached runner buffers:",s)}}function Jr(e,t,n,s){var o,i,r,a,f,l,c,g,d,u,p,m,v,k,_,h,w,S,b;return JSON.stringify([e,t,n,(o=s.id)!=null?o:null,(i=s.numClasses)!=null?i:null,(r=s.outputType)!=null?r:null,(a=s.dilations)!=null?a:null,(f=s.activation)!=null?f:null,(l=s.quantize8Bit)!=null?l:null,(c=s.forceFP32)!=null?c:null,(g=s.disableF16)!=null?g:null,(d=s.disableSubgroups)!=null?d:null,(u=s.disableConeSkip)!=null?u:null,(p=s.forceLowMem128)!=null?p:null,(m=s.webgpuExecMode)!=null?m:null,(v=s.softmaxTemperature)!=null?v:null,(k=s.brainSupportTemperature)!=null?k:null,(_=s.brainSupportPower)!=null?_:null,(h=s.partialVolumeSigma)!=null?h:null,(w=s.probabilityGroups)!=null?w:null,(S=s.probabilityDisplay)!=null?S:null,(b=s.classifierBias)!=null?b:null])}function Es(e){const t=bn.get(e);if(t)return bn.delete(e),bn.set(e,t),Promise.resolve(t);const n=Qn.get(e);if(n)return n;const s=ve(null,null,function*(){let o;try{const r=yield fetch(e);if(!r.ok)throw new Error(`HTTP ${r.status}: ${r.statusText}`);o=yield r.arrayBuffer()}catch(r){throw new Error(`Failed to load weights from '${e}': ${r.message}`)}const i=new Uint8Array(o);for(bn.set(e,i);bn.size>Kr;){const r=bn.keys().next().value;bn.delete(r)}return i}).finally(()=>{Qn.delete(e)});return Qn.set(e,s),s}function ea(e,t,n,s){if(!n)return e;const o=hn.get(t);if(o)return hn.delete(t),hn.set(t,o),o;const i=Xr(e);for(hn.set(t,i);hn.size>Zr;){const r=hn.keys().next().value;hn.delete(r)}return i}function us(e,t){return ve(this,null,function*(){const n=[],s=e.createBuffer.bind(e);e.createBuffer=o=>{const i=s(o);return n.push(i),i};try{return{result:yield t(),buffers:n}}finally{e.createBuffer=s}})}function cs(e){let t=0;for(const n of e)t+=Number(n==null?void 0:n.size)||0;return t}function es(e){for(const t of e)try{t.destroy()}catch(n){}}function ta(e,t,n){return ve(this,null,function*(){var S,b,P,F,$,x,G;const s=(S=Or())!=null?S:xr(e,t);let o=t.webgpu_runner,i=t.webgpu_safetensor;const r=!!(e.features&&e.features.has&&e.features.has("shader-f16"));let a=!1;s&&(t.forceFP32?(a=!0,console.log("[WebGPU] forceFP32: using fp32 runner and weights.")):!r&&jr(`${o}_f32`)&&(a=!0,console.log("[WebGPU] shader-f16 not supported on this device -> auto-selecting fp32 runner and weights.")),a&&(o=`${o}_f32`,i=i.replace(".safetensors","_f32.safetensors")),t.enableTTA&&t.webgpuTTArunner&&(console.log("[WebGPU] TTA Enabled: Switching to TTA runner and weights."),o=`${o}_tta`,i=i.replace(".safetensors","_tta.safetensors")));const l=Jr(s?"runner":"native",s?o:"webgpu_native",i,t),c=mn.get(e);if(c&&c.runnerKey===l)return Rt($t({},c),{cacheHit:!0});const g=!!(s&&Dr(o));if(n("Loading model…",.1),c&&(mn.delete(e),So(c,{keepSharedWorkspace:g})),g||xn(e),Yr(e,t),s)console.log(`[WebGPU-native] not used for ${t.modelName||t.webgpu_runner}: ${s}`);else{let M=[];try{const A=yield Es(i),T=yield us(e,()=>Pr(e,A,n,t));M=T.buffers;const L=T.result;L.kernels="hand-written";const B={runnerKey:l,runnerName:"webgpu_native",weightsPath:i,execute:L,supportsGpuNativeIO:!1,ownedBuffers:M,gpuBytes:cs(M)};return mn.set(e,B),console.log("[WebGPU-native] Using hand-written WebGPU kernels."),Rt($t({},B),{cacheHit:!1})}catch(A){es(M),console.warn("[WebGPU-native] falling back to the tinygrad runner:",(A==null?void 0:A.message)||A)}}const d=g?()=>ve(null,null,function*(){return ls}):Hr(o);if(!d){const M=Vr();throw new Error(`Runner '${o}' not found. Available runners: ${M.join(", ")||"none"}. Looking in: ./webgpu_runners/`)}const[u,p]=yield Promise.all([d(),Es(i)]);if(!u.setupNet&&!((b=u.default)!=null&&b.setupNet))throw new Error(`Runner module '${o}' doesn't export 'setupNet'. Exported keys: ${Object.keys(u).join(", ")}`);const m=!!((F=u.supportsF32Fallback)!=null?F:(P=u.default)!=null&&P.supportsF32Fallback),v=!!((x=u.supportsGpuNativeIO)!=null?x:($=u.default)!=null&&$.supportsGpuNativeIO);!a&&!r&&!m&&console.warn(`[WebGPU] shader-f16 not supported and no fp32 runner ('${o}_f32') available; the fp16 runner will likely fail and fall back to WebGL2.`);const _=ea(p,i,!a&&!m),h=u.setupNet||((G=u.default)==null?void 0:G.setupNet);let w=[];try{const M=yield us(e,()=>h(e,_,n,t));w=M.buffers;const A=M.result;if(typeof A!="function")throw es(w),new Error(`setupNet for '${o}' didn't return a function. Returned type: ${typeof A}`);const T={runnerKey:l,runnerName:o,weightsPath:i,execute:A,supportsGpuNativeIO:v,ownedBuffers:typeof A.dispose=="function"?null:w,gpuBytes:typeof A.gpuBytes=="function"?A.gpuBytes():cs(w)};return mn.set(e,T),Rt($t({},T),{cacheHit:!1})}catch(M){throw g&&xn(e),es(w),new Error(`Failed to setup network for '${o}': ${M.message}`)}})}function na(e,t,n,s,o,i,r){return ve(this,null,function*(){var d,u,p,m;const a=n.outputType==="probability";console.log("Starting WebGPU inference..."),r(a?"Starting tissue estimation…":"Starting segmentation…",0);const f=Zo(n,Ko.WEBGPU);f.isModelFullVol=!0;let l=!1,c=null;const g=nr(n);try{if(!e)throw new Error("WebGPU device is required but not provided");if(!(n!=null&&n.webgpu_runner))throw new Error("Model entry must specify webgpu_runner property");if(!(n!=null&&n.webgpu_safetensor))throw new Error("Model entry must specify webgpu_safetensor property");const v=n.webgpuStorageSize||335544320;if(e.limits){const W=ce=>(ce/1048576).toFixed(0),Y=(d=e.limits.maxStorageBufferBindingSize)!=null?d:1/0,V=(u=e.limits.maxBufferSize)!=null?u:1/0;if(Y<v||V<v){const ce=W(Math.min(Y,V)),Ge=W(v),ze=`[WebGPU] Device buffer limit (${ce} MB) is below the ${Ge} MB this model needs - using WebGL2 fallback.`;throw console.warn(ze),new Error(ze)}}e.pushErrorScope("out-of-memory"),l=!0;const k=performance.now();c=yield ta(e,n,r);const _=((performance.now()-k)/1e3).toFixed(4),h=performance.now();r("Preparing volume…",.25);const w=[256,256,256],S=c.supportsGpuNativeIO&&!!n.enableTranspose&&!n.inputPermutation,b=c.supportsGpuNativeIO&&!!n.enableTranspose&&!n.outputPermutation;let P,F;if(n.enableQuantileNorm){const{qmin:W,qmax:Y}=Vo(o);P=W,F=Y-W}else{const{min:W,max:Y}=Ho(o);P=W,F=Y-W}const $=F===0?1:F;let x=null,G,M=w;if(S)g&&(x=ks(o,P,$)),G=o;else{const W=ks(o,P,$);if(g&&(x=W),n.inputPermutation){console.log(`[WebGPU] Permuting Input: ${n.inputPermutation}`);const Y=n.inputPermutation;M=[w[Y[0]],w[Y[1]],w[Y[2]]],G=kn(W,w,Y)}else n.enableTranspose?G=kn(W,w,[2,1,0]):G=W}const A=((performance.now()-h)/1e3).toFixed(4);r("",.3),r(a?"Estimating tissue maps…":"Segmenting…",.3),yield $o();const T=performance.now(),L=c.supportsGpuNativeIO?W=>{const Y=Math.max(0,Math.min(1,Number(W)||0));r("",.3+.6*Y)}:void 0,B=S||b||L?{gpuNativeInput:S,gpuNativeOutput:b,normOffset:P,normRange:$,onProgress:L}:void 0,N=yield us(e,()=>B?c.execute(G,B):c.execute(G)),U=N.result;if(typeof c.execute.gpuBytes=="function"){c.gpuBytes=c.execute.gpuBytes();const W=mn.get(e);W&&W.runnerKey===c.runnerKey&&(W.gpuBytes=c.gpuBytes)}else if(N.buffers.length>0){c.gpuBytes=(c.gpuBytes||0)+cs(N.buffers),c.ownedBuffers&&c.ownedBuffers.push(...N.buffers);const W=mn.get(e);W&&W.runnerKey===c.runnerKey&&(W.gpuBytes=c.gpuBytes)}l=!1;const te=yield e.popErrorScope();if(te)throw new Error(`WebGPU out of memory (${te.message||"allocation failed"}) - falling back to WebGL2.`);if(!U||!Array.isArray(U))throw new Error(`Inference didn't return expected array format. Returned: ${typeof U}`);const le=((performance.now()-T)/1e3).toFixed(4),E=(c.gpuBytes||0)/1048576;f.GPU_Memory_MiB=Math.round(E),f.WebGPU_Kernels=c.execute.kernels||"tinygrad";const I=E>=1024?`${(E/1024).toFixed(2)} GiB`:`${Math.round(E)} MiB`;console.log(`WebGPU inference took ${le}s (${f.WebGPU_Kernels} kernels, ${I} GPU memory).`),r("Finishing up…",.9),console.log("Inference result shapes:",U.map(W=>W==null?void 0:W.length));const D=n.outputPermutation||(n.enableTranspose?[2,1,0]:null),ue=performance.now();let O;const j={};if(g){if(U.length!==3)throw new Error(`CAT-lite expected three tissue maps; received ${U.length}.`);r("Refining tissue fractions…",.92),O=yield ir(U,x,n,f,b?Y=>Y:Y=>D?kn(Y,M,D):Y instanceof Float32Array?Y:Float32Array.from(Y))}else if(a){const W=U[0];O=b?W:D?kn(W,M,D):W instanceof Float32Array?W:Float32Array.from(W),Ms(O,!0,"probability")}else{const W=U[0];let Y;b?Y=W instanceof Uint8Array?W:new Uint8Array(W):D?Y=jo(W,M,D):Y=W instanceof Uint8Array?W:new Uint8Array(W),Ms(Y,!1,"segmentation"),O=yield Yo(Y,o,n,t,j,w)}const ye=((performance.now()-ue)/1e3).toFixed(4),Me=performance.now();yield i(O,t,n,j.mask);const Re=((performance.now()-Me)/1e3).toFixed(4);if(a)g||(f.Output_Type="Continuous tissue probability",f.Tissue=n.probabilityDisplay||"grayMatter",f.Softmax_Temperature=(p=n.softmaxTemperature)!=null?p:1);else{const W=Xo(O),Y=n.numClasses||W;Qo(f,Y,W)}Jo(f,le,ye,{Preprocess_t:A,Setup_t:_,Display_t:Re}),console.log(`[Timing] WebGPU | ${n.modelName} | setup=${(Number(_)*1e3).toFixed(1)}ms prep=${(Number(A)*1e3).toFixed(1)}ms infer=${(Number(le)*1e3).toFixed(1)}ms post=${(Number(ye)*1e3).toFixed(1)}ms disp=${(Number(Re)*1e3).toFixed(1)}ms cache=${c.cacheHit?"hit":"miss"}`);const $e=`${Number(le).toFixed(1)} s`,ne=a?`Tissue maps finished (${$e})`:`Segmentation finished (${$e})`,re=!a&&((m=n.numClasses)!=null?m:0)>2?" · Option/Alt-click a region to isolate":"";r(`${n.modelName} · ${ne}${re}`,1,"",f)}catch(v){if(console.error("WebGPU Inference Error:",v),c&&(mn.get(e)===c&&mn.delete(e),So(c),c=null),l&&e){l=!1;try{yield e.popErrorScope()}catch(_){}}let k=v.message;throw v.message.includes("not found")?k+=". Check that the runner file exists and the name matches.":v.message.includes("fetch")?k+=". Check network connection and file paths.":v.message.includes("binding size")&&(k+=". GPU memory limit exceeded."),er(f,k,"WebGPU inference failed"),r("",-1,`WebGPU Error: ${k}`,f),v}})}const sa={batchSize:1,numOfChan:1,isColorEnable:!0,isAutoColors:!0,bgLabelValue:0,drawBoundingVolume:!1,isGPU:!0,isBrainCropMaskBased:!0,showPhase1Output:!1,isPostProcessEnable:!0,fillSuppressedWithNeighborLabel:!1,diagnoseEnclosedComponents:!1,isContoursViewEnable:!1,browserArrayBufferMaxZDim:30,telemetryFlag:!1,chartXaxisStepPercent:10,uiSampleName:"BC_UI_Sample",atlasSelectedColorTable:"Fire"};function Is(e,t=!0){if(!e)return e;const o=e,{turbo:n}=o,s=xs(o,["turbo"]);return!t||!n?s:Rt($t($t({},s),n),{isTurboActive:!0})}const wn=[{id:2,type:"Brain_Extraction",path:"/models/mindgrab/model.json",modelName:"🪓🧠 Omnimodal Skull Stripping",webgpu_safetensor:"./models/mindgrab/model.safetensors",webgpu_runner:"mindgrab",classifierBias:[1.525439739227295,-1.5258055925369263],webgpuTTArunner:!1,forceFP32:!1,webgpuStorageSize:503316480,numClasses:2,turbo:{webgpu_runner:"mindgrab_int8",quantize8Bit:!0,forceFP32:!1,webgpuTTArunner:!1,webgpuStorageSize:83886080,warning:"Runs via the 8-bit V4 WebGPU engine (~3.7s on M1 WebGPU, auto-scaling from 160 MiB down to 80 MiB max buffer on mobile) or native WebGL2."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,isPostProcessEnable:!0,enableCrop:!0,cropPadding:20,autoThreshold:.5,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!1,textureSize:0,warning:"This model may need dedicated graphics card.  For more info please check with Browser Resources <i class='fa fa-cogs'></i>.",inferenceDelay:100,description:"Omnimodal skull stripping (MindGrab) delivering high-accuracy brain extraction across T1, T2, FLAIR, DWI, EPI, MRA, PDw, qT1, CT, and PET via the 8-bit V4 WebGPU engine (80 MiB mobile / 160 MiB desktop max buffer) or native WebGL2."},{id:21,type:"Atlas",path:"/models/model24chan18cls_gdice_prio/model.json",modelName:"🪓 Subcortical + Tissue",colormapPath:"./models/model24chan18cls_gdice_prio/colormap.json",webgpu_safetensor:"./models/model24chan18cls_gdice_prio/model.safetensors",webgpu_runner:"model24chan18cls_gdice_prio",forceFP32:!1,webgpuStorageSize:1610612736,numClasses:18,turbo:{webgpu_runner:"mindmap24_int8",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:125829120,warning:"Runs via the 8-bit V4 WebGPU engine (~3.0s on M1 WebGPU, auto-scaling from 240 MiB down to 120 MiB max buffer on mobile) or native WebGL2."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,cropPadding:20,autoThreshold:0,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!0,textureSize:0,warning:"Runs via the 8-bit V4 WebGPU engine (120–240 MiB max buffer) or native WebGL2.",inferenceDelay:100,description:"Primary T1w brain parcellation into 17 regions (gray and white matter plus subcortical structures) via a 24-channel gridding-free MeshNet (MindMap v3.5 Unified: sharp sulci, intact occipital ribbon, and clinical slice/noise/bias robustness), accelerated by the 8-bit V4 WebGPU engine (120 MiB mobile / 240 MiB desktop max buffer)."},{id:23,type:"Probability_Map",path:"/models/model24chan18cls_gdice_prio/model.json",modelName:"⅔🧠 Tissue fraction maps (GM/WM/CSF)",webgpu_safetensor:"./models/model24chan18cls_gdice_prio/model.safetensors",webgpu_runner:"model24chan18cls_gdice_prio_probability",forceFP32:!1,webgpuStorageSize:1610612736,numClasses:18,turbo:{webgpu_runner:"mindmap24_int8",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:125829120,warning:"Experimental neural-assisted partial-volume estimate (~3.5s on M1 WebGPU, auto-scaling from 240 MiB down to 120 MiB max buffer on mobile)."},outputType:"probability",probabilityPostprocess:"cat-lite",softmaxTemperature:2,brainSupportTemperature:1,brainSupportPower:1,partialVolumeSigma:.65,probabilityDisplay:"grayMatter",probabilityTissues:[{name:"gm",tint:[255,64,64]},{name:"wm",tint:[255,255,255]},{name:"csf",tint:[64,128,255]}],probabilityOverlayFloor:128,probabilityOverlayAlpha:48,probabilityDisplayMin:.03,probabilityUnderlayOpacity:.1,probabilityGroups:{grayMatter:[2,6,7,8,9,10,14,15,16,17],whiteMatter:[1,5],csf:[3,4,11,12]},catLitePurePriorPower:3,catLitePriorStrength:.8,catLiteIntensityStrength:.75,catLiteMixelPrior:.35,catLiteCsfWmMixelPrior:6,catLiteSpatialWeight:.25,catLiteMinSupport:.03,catLiteSigmaFloor:.025,catLiteBiasBlockSize:16,catLiteBiasSmoothPasses:3,preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,enableQuantileNorm:!0,enableFovRecenter:!1,enableFovInflate:!1,warning:"Experimental neural-assisted mixed-class partial-volume estimate, not CAT12.",inferenceDelay:100,description:"CAT-inspired GM/WM/CSF partial-volume estimate. The 24-channel model supplies joint GM/WM/CSF priors; normalized T1 intensity, a coarse local bias estimate, spatial regularization, and explicit GM-CSF/GM-WM mixture classes produce continuous GM, WM and CSF fractions. Experimental and not a CAT12 result."},{id:5,type:"Atlas",path:"/models/model24chan104cls_v3_repbn/model.json",modelName:"🪓🔪 Desikan-Killiany Atlas",colormapPath:"./models/model24chan104cls_v3_repbn/colormap.json",webgpu_safetensor:"./models/model24chan104cls_v3_repbn/model.safetensors",webgpu_runner:"dkatlas24_synth",forceFP32:!1,webgpuStorageSize:1610612736,numClasses:104,turbo:{webgpu_runner:"dkatlas24_int8",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:125829120,warning:"Runs via the 8-bit V4 WebGPU engine (~3.0s on M1 WebGPU, auto-scaling from 240 MiB down to 120 MiB max buffer on mobile) or native WebGL2."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,cropPadding:20,autoThreshold:0,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!0,textureSize:0,warning:"Runs via the 8-bit V4 WebGPU engine (120–240 MiB max buffer) or native WebGL2.",inferenceDelay:100,description:"Primary 104-region Desikan-Killiany atlas parcellation (cortical + subcortical + 5-part corpus callosum) for research and clinical T1-weighted MRI, running via the 8-bit V4 WebGPU engine (~3.0s on M1, 120 MiB mobile / 240 MiB desktop max buffer) or native WebGL2."},{id:4,type:"Atlas",path:"/models/model24chan50cls/model.json",modelName:"🪓🔪 Desikan-Killiany 50",colormapPath:"./models/model24chan50cls/colormap.json",webgpu_safetensor:"./models/model24chan50cls/model.safetensors",webgpu_runner:"meshnet_fast_v4",forceFP32:!1,webgpuStorageSize:805306368,numClasses:50,turbo:{webgpu_runner:"meshnet_fast_v4",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:125829120,warning:"Runs via the 8-bit V4 WebGPU engine (~3.0s on M1 WebGPU, auto-scaling from 240 MiB down to 120 MiB max buffer on mobile) or native WebGL2."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,cropPadding:20,autoThreshold:0,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!0,textureSize:0,warning:"Runs via the 8-bit V4 WebGPU engine (120–240 MiB max buffer) or native WebGL2.",inferenceDelay:100,description:"Bilateral 50-region Desikan-Killiany cortical + subcortical + corpus callosum parcellation with built-in skull stripping (MindSnap-50 v3.5), running via the 8-bit V4 WebGPU engine (~3.0s on M1, 120 MiB mobile / 240 MiB desktop max buffer) or native WebGL2."},{id:6,type:"Divider",modelName:"-----------------",path:null},{id:3,type:"Atlas",path:"/models/model16chan18cls/model.json",modelName:"⚡🪓 Subcortical + Tissue",colormapPath:"./models/model16chan18cls/colormap.json",webgpu_safetensor:"./models/model16chan18cls/model.safetensors",webgpu_runner:"model16chan18cls",forceFP32:!1,webgpuStorageSize:536870912,numClasses:18,turbo:{webgpu_runner:"model16chan18cls_int8",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:83886080,warning:"Ultra-fast 16-channel MindMap v3.5 (~1.7s on M1 WebGPU, auto-scaling from 160 MiB down to 80 MiB max buffer on mobile)."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,cropPadding:20,autoThreshold:0,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!0,textureSize:0,warning:"Runs via the 8-bit V4 WebGPU engine (80–160 MiB max buffer) or native WebGL2.",inferenceDelay:100,description:"Ultra-fast 17-region brain parcellation (gray and white matter plus subcortical structures) via our 84K-parameter 16-channel MeshNet (MindMap-16ch v3.5), running in ~1.7s on M1 WebGPU with an 80 MiB mobile / 160 MiB desktop buffer footprint."},{id:14,type:"Atlas",path:"/models/model24chan104cls_synth/model.json",modelName:"🪓🔪 Desikan-Killiany (lesion scans)",colormapPath:"./models/model24chan104cls_synth/colormap.json",webgpu_safetensor:"./models/model24chan104cls_synth/model.safetensors",webgpu_runner:"dkatlas24_synth",forceFP32:!1,webgpuStorageSize:1610612736,numClasses:104,turbo:{webgpu_runner:"dkatlas24_int8",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:125829120,warning:"Runs via the 8-bit V4 WebGPU engine (~3.0s on M1 WebGPU, auto-scaling from 240 MiB down to 120 MiB max buffer on mobile) or native WebGL2."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,cropPadding:20,autoThreshold:0,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!0,textureSize:0,warning:"Runs via the 8-bit V4 WebGPU engine (120–240 MiB max buffer) or native WebGL2.",inferenceDelay:100,description:"Desikan-Killiany 104-region parcellation variant retained for scans with large focal lesions, running via the 8-bit V4 WebGPU engine (120–240 MiB max buffer) or native WebGL2."}];function hs(){return ve(this,null,function*(){return navigator.userAgent.indexOf("OPR/")>-1?"Opera":navigator.userAgent.indexOf("Edg/")>-1?"Edge":navigator.userAgent.indexOf("Falkon/")>-1?"Falkon":navigator.userAgent.indexOf("Chrome/")>-1?"Chrome":navigator.userAgent.indexOf("Firefox/")>-1?"Firefox":navigator.userAgent.indexOf("Safari/")>-1?"Safari":navigator.userAgent.indexOf("MSIE/")>-1||navigator.userAgent.indexOf("rv:")>-1?"IExplorer":"Unknown"})}function oa(){return ve(this,null,function*(){return navigator.userAgent.indexOf("OPR/")>-1?parseInt(navigator.userAgent.split("OPR/")[1]):navigator.userAgent.indexOf("Edg/")>-1?parseInt(navigator.userAgent.split("Edg/")[1]):navigator.userAgent.indexOf("Falkon/")>-1?parseInt(navigator.userAgent.split("Falkon/")[1]):navigator.userAgent.indexOf("Chrome/")>-1?parseInt(navigator.userAgent.split("Chrome/")[1]):navigator.userAgent.indexOf("Firefox/")>-1?parseInt(navigator.userAgent.split("Firefox/")[1]):navigator.userAgent.indexOf("Safari/")>-1?parseInt(navigator.userAgent.split("Safari/")[1]):navigator.userAgent.indexOf("MSIE/")>-1||navigator.userAgent.indexOf("rv:")>-1?parseInt(navigator.userAgent.split("MSIE/")[1]):1/0})}function ra(){return ve(this,null,function*(){return navigator.userAgent.indexOf("Win")>-1?"Windows":navigator.userAgent.indexOf("Mac")>-1?"MacOS":navigator.userAgent.indexOf("Linux")>-1?"Linux":navigator.userAgent.indexOf("UNIX")>-1?"UNIX":"Unknown"})}function aa(e){return ve(this,null,function*(){return e?(console.log("WebGl2 is enabled"),!0):(console.log(typeof WebGL2RenderingContext!="undefined"?"WebGL2 may be disabled. Please try updating video card drivers":"WebGL2 is not supported"),!1)})}function ia(e){return ve(this,null,function*(){let t;if(e&&(t=e.getExtension("WEBGL_debug_renderer_info"),t)){const n=e.getParameter(t.UNMASKED_VENDOR_WEBGL);return n.indexOf("(")>-1&&n.indexOf(")")>-1?n.substring(n.indexOf("(")+1,n.indexOf(")")):n}return null})}function la(e){return ve(this,null,function*(){if(e){const t=e.getExtension("WEBGL_debug_renderer_info");return t?e.getParameter(t.UNMASKED_VENDOR_WEBGL):null}else return null})}function ua(e){return ve(this,null,function*(){if(e){if(hs()==="Firefox")return e.getParameter(e.RENDERER);const t=e.getExtension("WEBGL_debug_renderer_info");return t?e.getParameter(t.UNMASKED_RENDERER_WEBGL):null}else return null})}function ca(e){return ve(this,null,function*(){let t;if(e){if(hs()==="Firefox")return e.getParameter(e.RENDERER);if(t=e.getExtension("WEBGL_debug_renderer_info"),t){let n=e.getParameter(t.UNMASKED_RENDERER_WEBGL);return n.indexOf("(")>-1&&n.indexOf(")")>-1&&n.indexOf("(R)")===-1&&(n=n.substring(n.indexOf("(")+1,n.indexOf(")")),n.split(",").length===3)?n.split(",")[1].trim():n}}return null})}function fa(){return ve(this,null,function*(){return navigator.hardwareConcurrency})}function pa(){return ve(this,null,function*(){return/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)})}function ma(e,t=null){return ve(this,null,function*(){const n=new Date;if(e.isModelFullVol?e.Brainchop_Ver="FullVolume":e.Brainchop_Ver="SubVolumes",e.Total_t=(Date.now()-e.startTime)/1e3,delete e.startTime,e.Date=parseInt(n.getMonth()+1)+"/"+n.getDate()+"/"+n.getFullYear(),e.Browser=yield hs(),e.Browser_Ver=yield oa(),e.OS=yield ra(),e.WebGL2=yield aa(t),e.GPU_Vendor=yield ia(t),e.GPU_Card=yield ca(t),e.GPU_Vendor_Full=yield la(t),e.GPU_Card_Full=yield ua(t),e.CPU_Cores=yield fa(),e.Which_Brainchop="latest",(yield pa())&&(e.Heap_Size_MB=window.performance.memory.totalJSHeapSize/(1024*1024).toFixed(2),e.Used_Heap_MB=window.performance.memory.usedJSHeapSize/(1024*1024).toFixed(2),e.Heap_Limit_MB=window.performance.memory.jsHeapSizeLimit/(1024*1024).toFixed(2)),t){console.log("MAX_TEXTURE_SIZE :",t.getParameter(t.MAX_TEXTURE_SIZE)),console.log("MAX_RENDERBUFFER_SIZE :",t.getParameter(t.MAX_RENDERBUFFER_SIZE));const s=t.getExtension("WEBGL_debug_renderer_info");console.log("VENDOR WEBGL:",t.getParameter(s.UNMASKED_VENDOR_WEBGL)),e.Texture_Size=t.getParameter(t.MAX_TEXTURE_SIZE)}else e.Texture_Size=null;return e})}const ts={bankssts:1,caudalanteriorcingulate:2,caudalmiddlefrontal:3,cuneus:5,entorhinal:6,fusiform:7,inferiorparietal:8,inferiortemporal:9,isthmuscingulate:10,lateraloccipital:11,lateralorbitofrontal:12,lingual:13,medialorbitofrontal:14,middletemporal:15,parahippocampal:16,paracentral:17,parsopercularis:18,parsorbitalis:19,parstriangularis:20,pericalcarine:21,postcentral:22,posteriorcingulate:23,precentral:24,precuneus:25,rostralanteriorcingulate:26,rostralmiddlefrontal:27,superiorfrontal:28,superiorparietal:29,superiortemporal:30,supramarginal:31,frontalpole:32,temporalpole:33,transversetemporal:34,insula:35},da=new Set(["BG","Unknown","background","Background"]),qs={"Left-Cerebral-White-Matter":2,"Right-Cerebral-White-Matter":41,"Left-Cerebral-Cortex":3,"Right-Cerebral-Cortex":42,"Left-Lateral-Ventricle":4,"Right-Lateral-Ventricle":43,"Left-Inf-Lat-Vent":5,"Right-Inf-Lat-Vent":44,"Left-Cerebellum-White-Matter":7,"Right-Cerebellum-White-Matter":46,"Left-Cerebellum-Cortex":8,"Right-Cerebellum-Cortex":47,"Left-Thalamus":10,"Left-Thalamus-Proper":10,"Left-Thalamus-Proper*":10,"Right-Thalamus":49,"Right-Thalamus-Proper":49,"Right-Thalamus-Proper*":49,"Left-Caudate":11,"Right-Caudate":50,"Left-Putamen":12,"Right-Putamen":51,"Left-Pallidum":13,"Right-Pallidum":52,"Left-Hippocampus":17,"Right-Hippocampus":53,"Left-Amygdala":18,"Right-Amygdala":54,"Left-Accumbens":26,"Left-Accumbens-area":26,"Right-Accumbens":58,"Right-Accumbens-area":58,"Left-VentralDC":28,"Right-VentralDC":60,"3rd-Ventricle":14,"4th-Ventricle":15,"Brain-Stem":16,CSF:24,CC_Posterior:251,CC_Mid_Posterior:252,CC_Central:253,CC_Mid_Anterior:254,CC_Anterior:255,"Cerebral-White-Matter":2,"White Matter":2,"Cerebral-Cortex":3,"Grey Matter":3,"Gray Matter":3,"Lateral-Ventricle":4,Ventricle:4,"Inferior-Lateral-Ventricle":5,"Cerebellum-White-Matter":7,"Cerebellum-Cortex":8,Cerebellum:8,Thalamus:10,"Thalamus-Proper":10,"Thalamus-Proper*":10,Caudate:11,Putamen:12,Pallidum:13,Hippocampus:17,Amygdala:18,"Accumbens-area":26,Accumbens:26,VentralDC:28,"Corpus callosum":253,Corpus_Callosum:253};function ga(e){if(typeof e!="string")return null;const t=e.trim();if(da.has(t))return 0;if(Object.hasOwn(qs,t))return qs[t];if(t.startsWith("ctx-lh-")){const n=ts[t.slice(7)];return n?1e3+n:null}if(t.startsWith("ctx-rh-")){const n=ts[t.slice(7)];return n?2e3+n:null}if(t.startsWith("ctx-")){const n=ts[t.slice(4)];return n?1e3+n:null}return null}function In(e){if(!Array.isArray(e)||e.length<3)return null;const t=new Int16Array(e.length);for(let n=0;n<e.length;n++){const s=ga(e[n]);if(s===null||(n===0?s!==0:s<=0))return null;t[n]=s}return t}function _a(e,t){const n=e.length,s=new Int16Array(n),o=t.length;let i=0;for(let r=0;r<n;r++){const a=e[r],f=a>=0&&a<o?t[a]:a;s[r]=f,f>i&&(i=f)}return{img:s,maxLabel:i}}const Ts=.5,Ns=8,Os=(e,t,n)=>Math.min(n,Math.max(t,e)),Ds=e=>Math.hypot(e[0].clientX-e[1].clientX,e[0].clientY-e[1].clientY);function Po(e){e&&(e.pan2Dxyzmm=Float32Array.from([0,0,0,1]),e.scaleMultiplier=1),ba()}function ba(){const e=document.querySelector('meta[name="viewport"]');if(!e)return;const t=e.getAttribute("content")||"width=device-width, initial-scale=1.0";/maximum-scale/.test(t)||(e.setAttribute("content",`${t}, maximum-scale=1, user-scalable=no`),requestAnimationFrame(()=>requestAnimationFrame(()=>e.setAttribute("content",t))))}function ha(){const e=t=>t.preventDefault();for(const t of["gesturestart","gesturechange","gestureend"])document.addEventListener(t,e,{passive:!1});document.addEventListener("touchmove",t=>{t.touches.length>1&&t.preventDefault()},{passive:!1})}function wa(e){const t=new Set,n=o=>{t.size>1&&o.stopPropagation()},s=o=>t.delete(o.pointerId);window.addEventListener("pointerdown",o=>{o.pointerType==="touch"&&o.target===e&&t.add(o.pointerId),n(o)},!0),window.addEventListener("pointermove",n,!0),window.addEventListener("pointerup",s,!0),window.addEventListener("pointercancel",s,!0)}function va(e,t,n,s,o){const i=e[3]/t;return[0,1,2].map(r=>{const a=n[r]-(s[r]+o[r])/2;return i*(a+e[r])-a})}function ya(e){const t=e.canvas;if(!t)return;wa(t);let n=null;const s=r=>{var g,d,u;if(r.touches.length!==2){n=null;return}const a=t.getBoundingClientRect(),f=window.devicePixelRatio||1,l=((r.touches[0].clientX+r.touches[1].clientX)/2-a.left)*f,c=((r.touches[0].clientY+r.touches[1].clientY)/2-a.top)*f;n={dist:Math.max(1,Ds(r.touches)),pan:Array.from(e.pan2Dxyzmm),scale3d:e.scaleMultiplier||1,inRender:(u=(d=(g=e.view)==null?void 0:g.hitTest(l,c))==null?void 0:d.isRender)!=null?u:!1}},o=()=>{n=null},i=r=>{if(!n||r.touches.length!==2)return;const a=Ds(r.touches)/n.dist;if(!isFinite(a)||a<=0)return;if(n.inRender){e.scaleMultiplier=Os(n.scale3d*a,Ts,Ns);return}const f=Os(n.pan[3]*a,Ts,Ns),l=va(n.pan,f,e.getCrosshairPos(),e.model.extentsMin,e.model.extentsMax);e.pan2Dxyzmm=Float32Array.from([l[0],l[1],l[2],f]),e.isYoked3DTo2DZoom?e.scaleMultiplier=f:e.drawScene()};t.addEventListener("touchstart",s,{passive:!0}),t.addEventListener("touchmove",i,{passive:!0}),t.addEventListener("touchend",o,{passive:!0}),t.addEventListener("touchcancel",o,{passive:!0})}function xa(e){return ha(),ya(e),{resetView:()=>Po(e)}}const $a=720,Sa=860;function Pa(){var o,i,r,a,f,l;const e=window.visualViewport,t=Math.round((i=(o=e==null?void 0:e.width)!=null?o:window.innerWidth)!=null?i:0),n=Math.round((a=(r=e==null?void 0:e.height)!=null?r:window.innerHeight)!=null?a:0);return t>0&&t<=$a?!0:!!((l=(f=window.matchMedia)==null?void 0:f.call(window,"(pointer: coarse)"))==null?void 0:l.matches)&&Math.min(t,n)<=Sa}const Bn=[{id:"multi",label:"All",title:"All planes",type:Fn.MULTIPLANAR},{id:"axial",label:"A",title:"Axial only",type:Fn.AXIAL},{id:"coronal",label:"C",title:"Coronal only",type:Fn.CORONAL},{id:"sagittal",label:"S",title:"Sagittal only",type:Fn.SAGITTAL},{id:"render",label:"3D",title:"3D render only",type:Fn.RENDER}];function ko(e,t,n){const s=Bn.find(o=>o.id===n)||Bn[0];e.sliceType=s.type,t.querySelectorAll("button").forEach(o=>o.classList.toggle("active",o.dataset.pane===s.id))}function ka(e,t){const n=document.createElement("div");n.id="paneSwitcher",n.className="pane-switcher",n.setAttribute("role","group"),n.setAttribute("aria-label","Visible planes");for(const o of Bn){const i=document.createElement("button");i.type="button",i.dataset.pane=o.id,i.textContent=o.label,i.title=o.title,i.setAttribute("aria-label",o.title),i.addEventListener("click",()=>ko(e,n,o.id)),n.appendChild(i)}const s=document.createElement("button");return s.type="button",s.className="pane-reset",s.textContent="⟲",s.title="Reset zoom and pan",s.setAttribute("aria-label","Reset zoom and pan"),s.addEventListener("click",()=>Po(e)),n.appendChild(s),t.appendChild(n),n}function Ma(e){var o;const t=document.getElementById("canvas-container")||document.body,n=ka(e,t);n.querySelector('button[data-pane="multi"]').classList.add("active"),window.addEventListener("keydown",i=>{if(i.key!=="v"&&i.key!=="V"||i.altKey||i.ctrlKey||i.metaKey||i.repeat)return;const r=i.target;if(r instanceof HTMLElement&&(r.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(r.tagName)))return;i.preventDefault(),i.stopImmediatePropagation();const a=Bn.findIndex(f=>f.type===e.sliceType);ko(e,n,Bn[(a+1)%Bn.length].id)},!0);const s=()=>document.body.classList.toggle("nv-narrow",Pa());window.addEventListener("resize",s),window.addEventListener("orientationchange",s),(o=window.visualViewport)==null||o.addEventListener("resize",s),s()}function Vs(e,t=e.img.slice(),n=e.name){const s=Object.assign(Object.create(Object.getPrototypeOf(e.hdr)),e.hdr),o=Wo(s,t,n);return o.id=crypto.randomUUID(),o}const Qt=e=>e&&typeof e.slice=="function"?e.slice():e;function ns(e,t,n=e.name,s={},o={}){var f;const i=Object.assign(Object.create(Object.getPrototypeOf(e.hdr)),e.hdr,$t({dims:[...e.hdr.dims],pixDims:[...e.hdr.pixDims],affine:e.hdr.affine.map(l=>[...l])},s)),r=e.dims?e.dims.slice(0,4):i.dims.slice(0,4),a=(f=e.nVox3D)!=null?f:r[1]*r[2]*r[3];return $t({img:t,hdr:i,originalAffine:i.affine.map(l=>[...l]),dims:r,nVox3D:a,extentsMin:Qt(e.extentsMin),extentsMax:Qt(e.extentsMax),mm000:Qt(e.mm000),mm100:Qt(e.mm100),mm010:Qt(e.mm010),mm001:Qt(e.mm001),dimsRAS:e.dimsRAS?[...e.dimsRAS]:void 0,pixDimsRAS:e.pixDimsRAS?[...e.pixDimsRAS]:void 0,permRAS:e.permRAS?[...e.permRAS]:void 0,toRAS:Qt(e.toRAS),toRASvox:Qt(e.toRASvox),matRAS:Qt(e.matRAS),obliqueRAS:Qt(e.obliqueRAS),oblique_angle:e.oblique_angle,frac2mm:Qt(e.frac2mm),frac2mmOrtho:Qt(e.frac2mmOrtho),img2RASstep:e.img2RASstep?[...e.img2RASstep]:void 0,img2RASstart:e.img2RASstart?[...e.img2RASstart]:void 0,volScale:e.volScale?[...e.volScale]:void 0,name:n,id:crypto.randomUUID(),calMin:0,calMax:255,robustMin:0,robustMax:255,globalMin:0,globalMax:255,frame4D:0,nFrame4D:1,nTotalFrame4D:1,isLegendVisible:!1},o)}function Aa(e){let t=256,n=-1,s=0;for(let l=0;l<256;l++){const c=e[l];c>0&&(l<t&&(t=l),n=l,l!==0&&(s+=c))}if(t>n)return{calMin:0,calMax:255,robustMin:0,robustMax:255,globalMin:0,globalMax:255};if(t===n)return{calMin:t,calMax:n,robustMin:t,robustMax:n,globalMin:t,globalMax:n};const o=Math.round(s*.02),i=Math.round(s*.02);let r=0,a=t;for(let l=t;l<=n;l++){if(l===0&&e[0]>o){a=0;break}if(r+=e[l],r>=o){a=l;break}}r=0;let f=n;for(let l=n;l>=t;l--)if(r+=e[l],r>=i){f=Math.min(n,l+1);break}return a>=f&&(a=t,f=n),{calMin:a,calMax:f,robustMin:a,robustMax:f,globalMin:t,globalMax:n}}function ss(e,[t,n,s]){const o=e.dimsRAS,i=e.img2RASstart,r=e.img2RASstep;return!o||!i||!r||t<0||t>=o[1]||n<0||n>=o[2]||s<0||s>=o[3]?null:i[0]+t*r[0]+i[1]+n*r[1]+i[2]+s*r[2]}function Pn(e,t){return ve(this,null,function*(){const n=e.img,s=yield Uo(t,e.hdr,n.buffer.byteLength===n.byteLength?n.buffer:n.buffer.slice(n.byteOffset,n.byteOffset+n.byteLength)),o=URL.createObjectURL(new Blob([s]));Object.assign(document.createElement("a"),{href:o,download:t}).click(),URL.revokeObjectURL(o)})}let on=null,dn=!1,os=0,qn=!1,On=[];const Mo=/Safari/.test(navigator.userAgent)&&!/Chrome|Chromium|CriOS|FxiOS|Edg|Android/.test(navigator.userAgent),Ba=Mo&&new URLSearchParams(window.location.search).get("inference")!=="webgpu";function Hs(e=null){return ve(this,null,function*(){const t={secureContext:window.isSecureContext,navigatorGpuExists:"gpu"in navigator,adapterObtained:!1,deviceObtained:!1,f16Support:!1,error:null};if(window.isSecureContext||(console.warn("WebGPU requires a secure context (HTTPS or localhost)."),console.warn("Current origin:",window.location.origin)),"gpu"in navigator)try{console.log("Requesting WebGPU adapter...");const n=yield navigator.gpu.requestAdapter();if(n){t.adapterObtained=!0,console.log("WebGPU adapter obtained:",n),n.info&&console.log("Adapter info:",n.info),console.log("Adapter limits:",{maxBufferSize:n.limits.maxBufferSize,maxStorageBufferBindingSize:n.limits.maxStorageBufferBindingSize,maxComputeWorkgroupsPerDimension:n.limits.maxComputeWorkgroupsPerDimension});const s={maxBufferSize:n.limits.maxBufferSize,maxStorageBufferBindingSize:n.limits.maxStorageBufferBindingSize,maxStorageBuffersPerShaderStage:n.limits.maxStorageBuffersPerShaderStage,maxUniformBufferBindingSize:n.limits.maxUniformBufferBindingSize,maxComputeInvocationsPerWorkgroup:n.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:n.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:n.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:n.limits.maxComputeWorkgroupSizeZ,maxComputeWorkgroupStorageSize:n.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:n.limits.maxComputeWorkgroupsPerDimension},o=n.features.has("shader-f16"),i=n.features.has("subgroups");t.f16Support=o,t.subgroupsSupport=i;const r=[];o&&r.push("shader-f16"),i&&r.push("subgroups");const a=yield n.requestDevice({requiredLimits:s,requiredFeatures:r});if(a.__adapterInfo=n.info||null,e&&typeof e.getParameter=="function")try{if(/Firefox/i.test(navigator.userAgent||""))a.__glRenderer=String(e.getParameter(e.RENDERER)||"");else{const l=e.getExtension("WEBGL_debug_renderer_info");a.__glRenderer=String((l?e.getParameter(l.UNMASKED_RENDERER_WEBGL):e.getParameter(e.RENDERER))||"")}}catch(l){}a.__isLost=!1,a.lost&&typeof a.lost.then=="function"&&a.lost.then(l=>{a.__isLost=!0,(l==null?void 0:l.reason)!=="destroyed"&&(console.warn(`[WebGPU] Device was lost (${(l==null?void 0:l.reason)||"unknown"}): ${(l==null?void 0:l.message)||""}`),on===a&&(on=null,dn=!1,t.deviceObtained=!1,t.error=(l==null?void 0:l.message)||"WebGPU device lost",js(!1,t)))}),on=a,t.deviceObtained=!0,dn=!0,console.log(`✓ WebGPU initialized successfully. F16: ${o?"enabled":"not available"}, Subgroups: ${i?"enabled":"not available"}`)}else console.warn("WebGPU adapter request returned null."),console.warn("This typically means:"),console.warn("  - Safari: WebGPU feature flags not enabled in Settings > Feature Flags"),console.warn("  - Unsupported GPU hardware"),console.warn("  - GPU drivers need updating"),t.error="Adapter returned null"}catch(n){t.error=n.message,console.error("WebGPU initialization error:",n),navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")&&(console.warn("Safari detected. To enable WebGPU:"),console.warn("  1. Open Safari Settings/Preferences"),console.warn('  2. Go to Advanced tab, enable "Show features for web developers"'),console.warn("  3. Go to Feature Flags tab"),console.warn("  4. Enable: WebGPU, GPU Process: DOM Rendering, GPU Process: Canvas Rendering"),console.warn("  5. Restart Safari"))}else console.warn("navigator.gpu not found. WebGPU API is not available in this browser."),t.error="navigator.gpu not found",navigator.userAgent.includes("Firefox")&&(console.warn("Firefox detected. To enable WebGPU in about:config:"),console.warn("  1. Set dom.webgpu.enabled = true"),console.warn("  2. Set gfx.webgpu.ignore-blocklist = true"),console.warn("  3. Restart Firefox"));return js(dn,t),dn||console.log("Falling back to WebGL backend."),window.webgpuDiagnostics=t,t})}function js(e,t){const n=document.getElementById("backendStatus");if(!n){console.log("Backend status element not found in DOM");return}if(e){const s=t.f16Support?" (F16)":"";n.textContent=`WebGPU${s}`,n.style.color="#4CAF50",n.title="WebGPU backend active - fastest performance"}else{n.textContent="WebGL",n.style.color="#FF9800";let s="WebGL backend (fallback)";t.error&&(s+=`
Reason: ${t.error}`),t.secureContext||(s+=`
⚠ Not a secure context (HTTPS required)`),Mo&&(s+=`

To enable WebGPU in Safari:
1. Settings > Feature Flags
2. Enable WebGPU flags
3. Restart Safari`),navigator.userAgent.includes("Firefox")&&(s+=`

To enable WebGPU in Firefox:
1. about:config > dom.webgpu.enabled = true
2. gfx.webgpu.ignore-blocklist = true
3. Restart Firefox`),n.title=s}}function Ca(){return ve(this,null,function*(){var Xt;let e="",t="",n=null,s=null,o=null,i=null;function r(){const y=modelSelect.value;return y==="-1"||modelSelect.selectedIndex<0?null:wn[y]||null}function a(){const y=r();modelSelect.title=(y==null?void 0:y.description)||"Choose a segmentation model to run"}const f="altKey";let l=null,c=null,g=null,d=null,u=null,p=null,m=null,v="input.nii.gz",k=null;const _=document.getElementById("dragSegmented");_&&_.querySelectorAll("button").forEach(y=>{y.onclick=()=>{H.secondaryDragMode=parseInt(y.dataset.drag,10),_.querySelectorAll("button").forEach(C=>C.classList.toggle("active",C===y))}});const h=document.getElementById("drawBtn"),w=document.getElementById("drawPopover"),S=document.getElementById("penRow"),b=document.getElementById("drawApplyRow");function P(y){w&&(w.hidden=!y,h&&h.setAttribute("aria-expanded",String(y)))}function F(y){H.drawIsEnabled=y>=0,y>=0&&(!H.drawingVolume&&H.volumes.length&&H.createEmptyDrawing(),H.drawPenValue=y&7,H.drawPenFilled=y>7),S&&S.querySelectorAll(".chip").forEach(C=>C.classList.toggle("active",parseInt(C.dataset.pen,10)===y))}function $(y){return ve(this,null,function*(){var de;if(H.volumes.length<2){window.alert("No segmentation open (run a model first).");return}if(y===0){H.drawUndo();return}const C=(de=H.drawingVolume)==null?void 0:de.img;if(!C){window.alert("Nothing drawn yet — pick a pen and draw on the image first.");return}const R=H.volumes[1].img;if(R instanceof Float32Array){window.alert("Drawing edits label segmentations, not probability maps.");return}const ae=H.volumes[1],se=ae.dimsRAS;if(!se||C.length!==se[1]*se[2]*se[3]){window.alert("The drawing does not match the current image — redraw it.");return}const Pe=y===1?1:0;let pe=0;for(let me=0;me<se[3];me++)for(let _e=0;_e<se[2];_e++)for(let Ne=0;Ne<se[1];Ne++,pe++)C[pe]>0&&(R[ss(ae,[Ne,_e,me])]=Pe);H.closeDrawing(),yield H.updateGLVolume(),H.drawIsEnabled=!1,F(-1)})}h&&(h.onclick=y=>{y.stopPropagation(),P(w.hidden)}),S&&S.querySelectorAll(".chip").forEach(y=>{y.onclick=()=>F(parseInt(y.dataset.pen,10))}),b&&b.querySelectorAll(".chip").forEach(y=>{y.onclick=()=>$(parseInt(y.dataset.apply,10))}),document.addEventListener("click",y=>{!w||w.hidden||y.target.closest(".popover-wrap")||P(!1)}),document.addEventListener("keydown",y=>{y.key==="Escape"&&P(!1)});const x=document.getElementById("appDialog");if(x&&!("closedBy"in HTMLDialogElement.prototype)){let y=!1;const C=R=>{const ae=x.getBoundingClientRect();return R.clientX<ae.left||R.clientX>ae.right||R.clientY<ae.top||R.clientY>ae.bottom};x.addEventListener("pointerdown",R=>{y=R.target===x&&C(R)}),x.addEventListener("pointerup",R=>{y&&R.target===x&&C(R)&&x.close(),y=!1})}aboutBtn.onclick=function(){Jt("About BrainChop",`
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
    `)};const G=document.getElementById("shadingBtn");G.onclick=()=>{const y=G.classList.toggle("active");G.setAttribute("aria-pressed",String(y)),H.volumeIllumination=y?.5:0},diagnosticsBtn.onclick=function(){let y=e;if(y.length<1&&window.webgpuDiagnostics){const R=window.webgpuDiagnostics;y=`:: Startup Diagnostics ::
`,y+=`Secure Context: ${R.secureContext}
`,y+=`WebGPU Enabled: ${dn}
`,y+=`F16 Support: ${R.f16Support}
`,R.error&&(y+=`Error: ${R.error}
`),y+=`User Agent: ${navigator.userAgent}
`}if(y.length<1){Jt("Diagnostics","No diagnostic string generated: run a model to create diagnostics");return}let C=y;t=t.slice(0,-2),t!==""&&C.includes("Status: OK")&&(C=C.replace("Status: OK",`Status: ${t}`)),t="",navigator.clipboard.writeText(C).then(()=>{Jt("Diagnostics",`<p>Diagnostics copied to clipboard</p><pre style="white-space: pre-wrap; font-family: monospace; font-size: 0.9em; overflow-x: auto;">${C}</pre>`)}).catch(R=>{Jt("Diagnostics",`<p>Failed to copy to clipboard.</p><pre style="white-space: pre-wrap; font-family: monospace; font-size: 0.9em; overflow-x: auto;">${C}</pre>`)})},opacitySlider0.oninput=()=>{H.volumes[0]&&(H.volumes[0].opacity=Number(opacitySlider0.value)),H.updateGLVolume()};function M(){const y=Number(opacitySlider1.value);H.volumes.slice(1).forEach((C,R)=>{C.opacity=(g==null?void 0:g[R])===C&&c!==null&&R!==c?0:y}),H.updateGLVolume()}opacitySlider1.oninput=M;function A(y=null){const C=y==null?void 0:y.probabilityUnderlayOpacity;C!==void 0?(m===null&&(m=opacitySlider0.value),opacitySlider0.value=C,H.volumes[0]&&(H.volumes[0].opacity=Number(C))):m!==null&&(opacitySlider0.value=m,m=null,H.volumes[0]&&(H.volumes[0].opacity=Number(opacitySlider0.value)))}function T(){return ve(this,null,function*(){const y=H.volumes[0];let C=y.dims[1]===256&&y.dims[2]===256&&y.dims[3]===256&&y.img instanceof Uint8Array&&y.img.length===256*256*256;if((y.permRAS[0]!==-1||y.permRAS[1]!==3||y.permRAS[2]!==-2)&&(C=!1),C)return;ht("Conforming input volume to 256³...",.05),yield $o(),yield B();const R=yield H.volumeTransform.conform(y,{toRAS:!1}),[ae,se]=[p,v],Pe=modelSelect.value;yield H.removeVolume(0),yield H.addVolume(R),[p,v]=[ae,se],modelSelect.value=Pe,a()})}function L(){for(c=null,g=null;H.model.volumes.length>1;)H.model.removeVolume(H.model.volumes.length-1)}function B(){return ve(this,null,function*(){L(),yield H.updateGLVolume()})}function N(){return H.volumes.length>=2&&H.volumes[1].colormapLabel?H.volumes[1]:null}function U(){l=null,d=null,u=null,E&&(E.style.display="none")}function te(){const y=N();if(y){if(d===null&&(d=y.img),l===null)y.img=d,u=null;else{const C=d,R=new C.constructor(C.length);for(let ae=0;ae<C.length;ae++)R[ae]=C[ae]===l?l:0;y.img=R,u=le(l)}H.updateGLVolume(),I()}}function le(y){const C=H.volumes[0],R=d||H.volumes[1]&&H.volumes[1].img;if(!C||!R)return null;const ae=C.hdr.pixDims||[],se=ae[1]&&ae[2]&&ae[3]?ae[1]*ae[2]*ae[3]:1,Pe=X(C.img,R,se),pe=Pe.reduce((Ae,je)=>Ae+je.volume_mm3,0),de=Pe.find(Ae=>Ae.label===y);if(!de)return null;const me=pe>0?de.volume_mm3/pe*100:0,_e=[de.name,`${qe(de.volume_mm3)} cm3   (${me.toFixed(1)}% of brain)`,`${de.voxels.toLocaleString()} voxels`,`intensity  ${de.mean.toFixed(0)} +/- ${de.stdev.toFixed(0)}`];let Ne=[1,1,1,1];if(s&&s.R&&s.R[y]!=null){const Ae=je=>Math.min(255,je*.55+130)/255;Ne=[Ae(s.R[y]),Ae(s.G[y]),Ae(s.B[y]),1]}return{lines:_e,color:Ne}}let E=null;function I(){var de,me;E||(E=document.createElement("div"),E.style.cssText="position:absolute;pointer-events:none;font:13px/1.55 system-ui,sans-serif;text-shadow:0 1px 2px #000;white-space:pre;color:#ebebeb",H.canvas.parentElement.appendChild(E));const y=(me=(de=H.view)==null?void 0:de.screenSlices)==null?void 0:me.find(_e=>_e.axCorSag===4);if(l===null||!u||!N()||!y){E.style.display="none";return}const C=window.devicePixelRatio||1,[R,ae]=y.leftTopWidthHeight;Object.assign(E.style,{left:`${R/C+8}px`,top:`${ae/C+8}px`});const{lines:se,color:Pe}=u,pe=Pe.slice(0,3).map(_e=>Math.round(_e*255)).join(",");E.innerHTML=`<span style="color:rgb(${pe})">${tn(se[0])}</span>
`+se.slice(1).map(tn).join(`
`),E.style.display="block"}function D(){const y=N();if(!y||!k)return null;const C=ss(y,k);if(C===null)return null;const R=(d||y.img)[C];return R===void 0?null:Math.round(R*y.hdr.scl_slope+y.hdr.scl_inter)}function ue(y){N()&&(l=y===0||y===l?null:y,te())}function O(){if(!g||!k||g.some((R,ae)=>H.volumes[ae+1]!==R))return;let y=null,C=0;for(let R=0;R<g.length;R++){const ae=g[R],se=ss(ae,k);if(se===null)return;const Pe=ae.img[se];Number.isFinite(Pe)&&Pe>C&&(C=Pe,y=R)}return y}function j(y){if(y[f]){if(N()){const C=D();if(C===null||Number.isNaN(C))return;ue(C)}else{const C=O();if(C===void 0)return;const R=C===c?null:C;R!==c&&(c=R,M())}y.preventDefault()}}function ye(){return ve(this,null,function*(){if(!qn){qn=!0,On=[];try{yield Me()}finally{qn=!1,modelSelect.value="-1",a()}}})}function Me(){return ve(this,null,function*(){var je,We;const y=modelSelect.value;if(y==="-1"||modelSelect.selectedIndex<0)return;const C=document.getElementById("memstatusItem");C&&(C.hidden=!0),U(),yield T();const R=wn[y],ae=(new URLSearchParams(window.location.search).get("precision")||"").toLowerCase(),Pe=$t($t({},Is(R,ae!=="fp16"&&ae!=="fp32")),ae==="fp32"?{forceFP32:!0}:{}),pe=$t({},sa),de=new URL("./",window.location.href).href;pe.rootURL=de.endsWith("/")?de.slice(0,-1):de;const me=H.volumes[0].img;let _e=null;const Ne=Ba&&!Pe.quantize8Bit,Ae=Ne;if(Ne&&dn&&Pe.webgpu_safetensor&&console.info("Safari WebGPU legacy gate active for non-V4 model; routing to native WebGL2."),!Ae&&(!on||on.__isLost)&&"gpu"in navigator&&os<2&&(je=window.webgpuDiagnostics)!=null&&je.adapterObtained&&(os++,console.info(`[WebGPU] Re-initializing device after prior loss (attempt ${os})...`),yield Hs((We=H.view)==null?void 0:We.gl)),dn&&on&&!on.__isLost&&!Ae&&Pe.webgpu_safetensor){console.log("Attempting WebGPU backend...");const K=Rt($t({},Pe),{enableTTA:!1});try{yield na(on,pe,K,H.volumes[0].hdr,me,nt,ht);return}catch(q){_e=q,console.error("WebGPU inference failed, falling back to native WebGL2.",q)}}if(R.webgpu_safetensor){const K=ae==="int8"||ae==="rgba8",q=Rt($t({},Is(R,!1)),{quantize8Bit:K,autoQuantize8BitFallback:!K&&!!R.turbo});try{const{runInferenceWebGl2:ee,nativeWebgl2Available:Ee}=yield gt(()=>ve(null,null,function*(){const{runInferenceWebGl2:st,nativeWebgl2Available:De}=yield import("./inference-webgl2-IAboq3wV.js");return{runInferenceWebGl2:st,nativeWebgl2Available:De}}),[],import.meta.url);if(Ee()){console.log("Attempting native WebGL2 runner..."),yield ee(pe,q,H.volumes[0].hdr,me,nt,ht);return}_e=new Error("Native WebGL2 unavailable (no OffscreenCanvas WebGL2 context)."),console.warn(_e.message)}catch(ee){_e=ee,console.error("Native WebGL2 failed.",ee)}}za(_e||new Error(`No available backend could run ${Pe.modelName}.`))})}modelSelect.onchange=()=>(a(),ye()),a();function Re(y){return ve(this,null,function*(){const C=N(),R=l!==null&&C&&d;R&&(C.img=d);try{return yield y()}finally{R&&te()}})}function $e(){const y=H.volumes[1],C=(o==null?void 0:o.type)==="Brain_Extraction"?i:l!==null&&d?d:y.img;if(!C||C.length!==y.img.length)throw new Error("The segmentation mask is unavailable. Run the model again.");const R=new Uint8Array(C.length);for(let se=0;se<C.length;se++)R[se]=C[se]!==0?1:0;const ae=Vs(y,R,"brain_mask");return Object.assign(ae.hdr,{datatypeCode:2,numBitsPerVoxel:8,scl_slope:1,scl_inter:0,cal_min:0,cal_max:1,intent_code:1002}),ae}function ne(){return ve(this,arguments,function*({includeMask:y=!1,useFreeSurfer:C=!1}={}){if(H.volumes.length<2){window.alert("No segmentation to save (run a model first).");return}const R=C?In(n):null,ae=H.volumes.slice(1);yield Re(()=>ve(null,null,function*(){for(const se of ae){const Pe=!!se.colormapLabel||se.hdr.intent_code===1002;if(R&&Pe){const{img:pe,maxLabel:de}=_a(se.img,R),me=ns(se,pe,se.name,{datatypeCode:4,numBitsPerVoxel:16,scl_slope:1,scl_inter:0,cal_min:0,cal_max:de,intent_code:1002});yield Pn(me,re(se,ae.length,"_fs"))}else yield Pn(se,re(se,ae.length,""))}y&&(yield Pn($e(),"binary_mask.nii.gz"))}))})}function re(y,C,R){return C>1?`segmentation_${y.name}${R}.nii.gz`:`segmentation${R}.nii.gz`}function W(){if(H.volumes.length<1){window.alert("No image loaded.");return}Pn(H.volumes[0],"conformed_input.nii.gz")}function Y(){return ve(this,null,function*(){if(H.volumes.length<1){window.alert("No image loaded.");return}yield Re(()=>ve(null,null,function*(){yield H.saveDocument("brainchop.nvd")}))})}function V(){return ve(this,arguments,function*({includeMask:y=!1,useFreeSurfer:C=!1}={}){if(H.volumes.length<2){window.alert("No segmentation to save (run a model first).");return}if(!p||!p.hdr||!p.hdr.affine){window.alert("Original input grid is unavailable — reload the image and try again.");return}const R=C?In(n):null;ht("Reslicing to native space…",0),yield new Promise(ae=>setTimeout(ae,30));try{const ae=H.volumes.slice(1);for(const se of ae){const Pe=!!se.colormapLabel||se.hdr.intent_code===1002,pe=R&&Pe?R:null,de=yield Re(()=>ce(se,pe));yield Pn(de,re(se,ae.length,pe?"_fs_native":"_native"))}if(y){const se=ce($e());yield Pn(se,"binary_mask_native.nii.gz")}ht("Saved native-space segmentation.",1)}catch(ae){console.error("Native-space reslice failed:",ae),window.alert("Native-space export failed: "+(ae&&ae.message?ae.message:ae))}})}function ce(y,C=null){const R=y.img,ae=p.hdr.affine,se=p.hdr.dims[1],Pe=p.hdr.dims[2],pe=p.hdr.dims[3],de=y.hdr.dims[1],me=y.hdr.dims[2],_e=y.hdr.dims[3],Ne=(Q,Ze)=>[Q[0][0]*Ze[0]+Q[0][1]*Ze[1]+Q[0][2]*Ze[2]+Q[0][3],Q[1][0]*Ze[0]+Q[1][1]*Ze[1]+Q[1][2]*Ze[2]+Q[1][3],Q[2][0]*Ze[0]+Q[2][1]*Ze[1]+Q[2][2]*Ze[2]+Q[2][3]],Ae=Go();if(!Eo(Ae,Io(...y.hdr.affine[0],...y.hdr.affine[1],...y.hdr.affine[2],...y.hdr.affine[3])))throw new Error("Segmentation affine is not invertible");const je=(Q,Ze)=>[Q[0]*Ze[0]+Q[1]*Ze[1]+Q[2]*Ze[2]+Q[3],Q[4]*Ze[0]+Q[5]*Ze[1]+Q[6]*Ze[2]+Q[7],Q[8]*Ze[0]+Q[9]*Ze[1]+Q[10]*Ze[2]+Q[11]],We=Q=>je(Ae,Ne(ae,Q)),K=We([0,0,0]),q=We([1,0,0]).map((Q,Ze)=>Q-K[Ze]),ee=We([0,1,0]).map((Q,Ze)=>Q-K[Ze]),Ee=We([0,0,1]).map((Q,Ze)=>Q-K[Ze]),st=!!y.colormapLabel||y.hdr.intent_code===1002,De=se*Pe*pe,Be=Vs(p),ut=(Q,Ze,Qe)=>Q>=0&&Q<de&&Ze>=0&&Ze<me&&Qe>=0&&Qe<_e?R[Q+Ze*de+Qe*de*me]:0;if(st){const Q=[];for(const Ye of[-.25,.25])for(const he of[-.25,.25])for(const Se of[-.25,.25])Q.push([Ye*q[0]+he*ee[0]+Se*Ee[0],Ye*q[1]+he*ee[1]+Se*Ee[1],Ye*q[2]+he*ee[2]+Se*Ee[2]]);const Ze=new Int16Array(De),Qe=C?C.length:0;let At=0;const Ot=new Int32Array(8),Ft=new Int32Array(8);let Yt=0;for(let Ye=0;Ye<pe;Ye++)for(let he=0;he<Pe;he++){let Se=K[0]+he*ee[0]+Ye*Ee[0],oe=K[1]+he*ee[1]+Ye*Ee[1],J=K[2]+he*ee[2]+Ye*Ee[2];for(let Le=0;Le<se;Le++){let Xe=0;for(let Te=0;Te<8;Te++){const ke=ut(Math.round(Se+Q[Te][0]),Math.round(oe+Q[Te][1]),Math.round(J+Q[Te][2]));let ie=-1;for(let kt=0;kt<Xe;kt++)if(Ot[kt]===ke){ie=kt;break}ie<0?(Ot[Xe]=ke,Ft[Xe]=1,Xe++):Ft[ie]++}let mt=Ot[0],at=Ft[0];for(let Te=1;Te<Xe;Te++)Ft[Te]>at&&(at=Ft[Te],mt=Ot[Te]);C&&mt>=0&&mt<Qe&&(mt=C[mt]),mt>At&&(At=mt),Ze[Yt++]=mt,Se+=q[0],oe+=q[1],J+=q[2]}}Be.hdr.datatypeCode=4,Be.hdr.numBitsPerVoxel=16,Be.hdr.scl_slope=1,Be.hdr.scl_inter=0,Be.hdr.cal_min=0,Be.hdr.cal_max=At,Be.hdr.intent_code=1002,Be.img=Ze}else{const Q=y.img instanceof Float32Array,Ze=Q?255:1,Qe=Q?.5:0,At=Q?new Uint8Array(De):Be.img;At.fill(0),Q&&(Object.assign(Be.hdr,{datatypeCode:2,numBitsPerVoxel:8,cal_min:0,cal_max:1}),Be.img=At),Be.hdr.scl_slope=1/Ze,Be.hdr.scl_inter=0;const Ft=Q?(Ye,he,Se)=>{const oe=Math.floor(Ye),J=Math.floor(he),Le=Math.floor(Se),Xe=Ye-oe,mt=he-J,at=Se-Le,Te=ut(oe,J,Le),ke=ut(oe+1,J,Le),ie=ut(oe,J+1,Le),kt=ut(oe+1,J+1,Le),ft=ut(oe,J,Le+1),et=ut(oe+1,J,Le+1),Oe=ut(oe,J+1,Le+1),St=ut(oe+1,J+1,Le+1),ct=Te+Xe*(ke-Te),be=ie+Xe*(kt-ie),fe=ft+Xe*(et-ft),xe=Oe+Xe*(St-Oe),wt=ct+mt*(be-ct),Wt=fe+mt*(xe-fe);return wt+at*(Wt-wt)}:(Ye,he,Se)=>ut(Math.round(Ye),Math.round(he),Math.round(Se));let Yt=0;for(let Ye=0;Ye<pe;Ye++)for(let he=0;he<Pe;he++){let Se=K[0]+he*ee[0]+Ye*Ee[0],oe=K[1]+he*ee[1]+Ye*Ee[1],J=K[2]+he*ee[2]+Ye*Ee[2];for(let Le=0;Le<se;Le++)At[Yt++]=Ft(Se,oe,J)*Ze+Qe,Se+=q[0],oe+=q[1],J+=q[2]}}return Be}let Ge=!1,ze=!1;const ge={cube:'<svg viewBox="0 0 24 24" class="save-opt-ico" aria-hidden="true"><path d="M12 2.75l8.25 4.75v9L12 21.25 3.75 16.5v-9z"/><path d="M12 12v9.25M3.75 7.5L12 12l8.25-4.5"/></svg>',grid:'<svg viewBox="0 0 24 24" class="save-opt-ico" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="2.5"/><path d="M3.5 9.5h17M3.5 14.5h17M9.5 3.5v17M14.5 3.5v17"/></svg>',volume:'<svg viewBox="0 0 24 24" class="save-opt-ico" aria-hidden="true"><path d="M12 3.5l8.5 4.5-8.5 4.5L3.5 8z"/><path d="M3.5 12l8.5 4.5 8.5-4.5M3.5 16l8.5 4.5 8.5-4.5"/></svg>',scene:'<svg viewBox="0 0 24 24" class="save-opt-ico" aria-hidden="true"><rect x="3.5" y="4.5" width="17" height="15" rx="2.5"/><path d="M3.5 9.5h17M9.5 9.5v10"/></svg>',arrow:'<svg viewBox="0 0 24 24" class="save-opt-arrow" aria-hidden="true"><path d="M12 4.5v11"/><path d="M7.5 11.5L12 16l4.5-4.5"/><path d="M5 19.5h14"/></svg>'},we=[{act:ne,group:"seg",icon:"cube",title:"Conformed space",sub:"256³ · 1 mm isotropic",need:"seg"},{act:V,group:"seg",icon:"grid",title:"Native space",sub:"Resampled to the input grid",need:"seg"},{act:W,group:"vol",icon:"volume",title:"Conformed input volume",sub:"Resampled T1 · 256³ · 1 mm",need:"img"},{act:Y,group:"vol",icon:"scene",title:"Scene (.nvd)",sub:"Full viewer state document",need:"img"}];function Z(){const y=H.volumes.length>=1,C=H.volumes.length>=2,R=C&&o&&o.outputType!=="probability"&&(o.type!=="Brain_Extraction"||!!i),ae=C&&o&&o.outputType!=="probability"&&o.type!=="Brain_Extraction"&&!!In(n),se=K=>K==="seg"?C:y;let Pe=!1;const pe=K=>we.map((q,ee)=>({o:q,i:ee})).filter(({o:q})=>q.group===K).map(({o:q,i:ee})=>{const Ee=se(q.need),st=Ee&&!Pe?(Pe=!0," autofocus"):"";return`<button type="button" class="save-opt${Ee?"":" disabled"}" data-i="${ee}"${Ee?"":" disabled"}${st}>
          ${ge[q.icon]}
          <span class="save-opt-copy">
            <span class="save-opt-title">${q.title}</span>
            <span class="save-opt-sub">${q.sub}</span>
          </span>
          ${ge.arrow}
        </button>`}).join(""),de=[];ae&&de.push(`
        <label class="save-check-row" for="saveFreeSurfer">
          <input type="checkbox" id="saveFreeSurfer" class="save-checkbox"${Ge?" checked":""}>
          <span class="save-check-copy">
            <span class="save-check-title">FreeSurfer label IDs <span class="save-badge">Freeview</span></span>
            <span class="save-check-sub">FreeSurferColorLUT numbering · open directly with :colormap=lut</span>
          </span>
        </label>`),R&&de.push(`
        <label class="save-check-row" for="saveBinaryMask">
          <input type="checkbox" id="saveBinaryMask" class="save-checkbox"${ze?" checked":""}>
          <span class="save-check-copy">
            <span class="save-check-title">Also save binary mask</span>
            <span class="save-check-sub">Foreground 1 · background 0</span>
          </span>
        </label>`);const me=de.length?`<div class="save-modifiers" role="group" aria-label="Segmentation export options">${de.join("")}</div>`:"",Ne=`
      <div class="save-sheet">
        <section class="save-section">
          <div class="save-section-head">
            <span class="save-section-label">Segmentation</span>
            ${C?"":'<span class="save-section-hint">Run a model first</span>'}
          </div>
          <div class="save-options">${pe("seg")}</div>
          ${me}
        </section>
        <section class="save-section save-section-divider">
          <div class="save-section-head">
            <span class="save-section-label">Volume &amp; Scene</span>
          </div>
          <div class="save-options">${pe("vol")}</div>
        </section>
      </div>`;Jt("Save",Ne,{hideClose:!0,saveMode:!0});const Ae=document.getElementById("dialogMessage");if(!Ae)return;const je=Ae.querySelector("#saveFreeSurfer");je&&(je.onchange=()=>{Ge=je.checked});const We=Ae.querySelector("#saveBinaryMask");We&&(We.onchange=()=>{ze=We.checked}),Ae.querySelectorAll(".save-opt:not(.disabled)").forEach(K=>{K.onclick=()=>{var De,Be;const q=we[parseInt(K.dataset.i,10)],ee=q.need==="seg"&&!!((De=Ae.querySelector("#saveBinaryMask"))!=null&&De.checked),Ee=q.need==="seg"&&ae&&!!((Be=Ae.querySelector("#saveFreeSurfer"))!=null&&Be.checked),st=document.getElementById("appDialog");st&&st.open&&st.close(),q.need==="seg"?q.act({includeMask:ee,useFreeSurfer:Ee}):q.act()}})}const Ue=document.getElementById("saveBtn");Ue&&(Ue.onclick=Z);function X(y,C,R){const se=new Map,Pe=C.length;for(let me=0;me<Pe;me++){const _e=C[me];if(_e===0)continue;let Ne=se.get(_e);Ne||(Ne={count:0,sum:0,sumSq:0,hist:new Float64Array(256)},se.set(_e,Ne));const Ae=y[me];Ne.count++,Ne.sum+=Ae,Ne.sumSq+=Ae*Ae,Ne.hist[Ae]++}const pe=(me,_e,Ne)=>{const Ae=Ne*_e;let je=0;for(let We=0;We<me.length;We++)if(je+=me[We],je>=Ae)return We;return me.length-1},de=[];for(const[me,_e]of[...se.entries()].sort((Ne,Ae)=>Ne[0]-Ae[0])){const Ne=_e.sum/_e.count,Ae=Math.max(0,_e.sumSq/_e.count-Ne*Ne);let je=0,We=0;for(let K=0;K<_e.hist.length;K++)if(_e.hist[K]>0){je=K;break}for(let K=_e.hist.length-1;K>=0;K--)if(_e.hist[K]>0){We=K;break}de.push({label:me,name:n&&n[me]!=null?n[me]:`label_${me}`,voxels:_e.count,volume_mm3:_e.count*R,min:je,max:We,q1:pe(_e.hist,_e.count,.25),median:pe(_e.hist,_e.count,.5),q3:pe(_e.hist,_e.count,.75),mean:Ne,stdev:Math.sqrt(Ae)})}return de}function Ie(y,C=null){const R=C?["label","fs_label","name","voxels","volume_mm3","min","max","q1","median","q3","mean","stdev"]:["label","name","voxels","volume_mm3","min","max","q1","median","q3","mean","stdev"],ae=pe=>Number.isInteger(pe)?String(pe):pe.toFixed(6),se=pe=>/[",\n]/.test(pe)?`"${String(pe).replace(/"/g,'""')}"`:String(pe),Pe=[R.join(",")];for(const pe of y){const de=C?[pe.label,pe.label<C.length?C[pe.label]:pe.label,se(pe.name)]:[pe.label,se(pe.name)];de.push(pe.voxels,ae(pe.volume_mm3),pe.min,pe.max,pe.q1,pe.median,pe.q3,ae(pe.mean),ae(pe.stdev)),Pe.push(de.join(","))}return Pe.join(`
`)+`
`}function tt(y,C=null){const R=new Blob([Ie(y,C)],{type:"text/csv"}),ae=URL.createObjectURL(R),se=document.createElement("a");se.href=ae,se.download="mask_stats.csv",document.body.appendChild(se),se.click(),se.remove(),URL.revokeObjectURL(ae)}const qe=y=>{const C=y/1e3;return C>=10?Math.round(C).toLocaleString():C.toFixed(1)};function ot(y,C,R=null){const ae=Math.max(...y.map(me=>me.volume_mm3)),se=me=>s&&s.R&&s.R[me.label]!=null?`rgb(${s.R[me.label]},${s.G[me.label]},${s.B[me.label]})`:"#6b9bd1";let Pe="";for(const me of y){const _e=C>0?me.volume_mm3/C*100:0,Ne=ae>0?me.volume_mm3/ae*100:0,Ae=l===me.label,je=R&&me.label<R.length?R[me.label]:null,We=`<span class="stat-val" data-cm3="${qe(me.volume_mm3)}" data-pct="${_e.toFixed(1)}%">${qe(me.volume_mm3)}</span>`,K=`<span class="stat-bar" style="width:${Ne.toFixed(2)}%;background:${se(me)}" data-w-abs="${Ne.toFixed(2)}" data-w-pct="${_e.toFixed(2)}"></span>`,q=(Ee,st)=>`<div class="stat-kv"><span class="k">${Ee}</span><span class="v">${st}</span></div>`,ee=q("min",me.min)+q("max",me.max)+q("Q1",me.q1)+q("Q3",me.q3)+q("median",me.median)+q("mean",me.mean.toFixed(2))+q("SD",me.stdev.toFixed(2))+q("voxels",me.voxels.toLocaleString());Pe+=`
        <div class="stat-row${Ae?" is-isolated":""}" data-label="${me.label}" data-name="${tn(me.name.toLowerCase())}">
          <div class="stat-line">
            <button type="button" class="stat-trigger" aria-expanded="false">
              <span class="stat-chevron" aria-hidden="true"></span>
              <span class="stat-swatch" style="background:${se(me)}" aria-hidden="true"></span>
              <span class="stat-name">${tn(me.name)}</span>
              <span class="stat-track" aria-hidden="true">${K}</span>
              ${We}
            </button>
            <button type="button" class="stat-iso${Ae?" active":""}" aria-pressed="${Ae}" aria-label="Isolate ${tn(me.name)}">${Ae?"isolated":"isolate"}</button>
          </div>
          <div class="stat-detail" hidden>
            <div class="stat-detail-meta">
              <span class="stat-detail-fullname">${tn(me.name)}</span>
              <span class="stat-detail-badges">
                <span class="stat-id-chip">ID ${me.label}</span>
                ${je?`<span class="save-badge">FS ${je}</span>`:""}
              </span>
            </div>
            <div class="stat-detail-grid">${ee}</div>
          </div>
        </div>`}const pe=y.length===1?"region":"regions",de=y.length>8?`<search class="stat-search">
           <input type="search" id="statsFilterInput" class="stat-filter" placeholder="Filter regions…" aria-label="Filter regions" autocorrect="off" autocapitalize="none" spellcheck="false">
         </search>`:"";return`
      <div id="statsPanel">
        <div class="stat-toolbar">
          <div class="stat-toggle" role="group" aria-label="Volume display unit">
            <button type="button" data-mode="cm3" class="active" aria-pressed="true">cm³</button>
            <button type="button" data-mode="pct" aria-pressed="false">% of total</button>
          </div>
          <span class="stat-total" id="statsUnitLabel">${y.length} ${pe} &middot; ${qe(C)} cm³</span>
          ${de}
        </div>
        <div id="statsRows">
          ${Pe}
          <p id="statsEmpty" class="stat-empty" hidden>No matching regions</p>
        </div>
        <div class="stat-footer">
          <span class="stat-footer-hint">Select a row for intensity stats &middot; Isolate solos in 3D</span>
          <button type="button" id="statsDownloadBtn" class="stat-csv-btn">
            ${ge.arrow}
            <span>Download CSV</span>
          </button>
        </div>
      </div>`}saveStatsBtn.onclick=function(){if(H.volumes.length<2){Jt("Region volumes","<p>No segmentation to measure — run a model first.</p>");return}if(H.volumes[1].img instanceof Float32Array){Jt("Region volumes","<p>Region statistics require a discrete label segmentation, not continuous probability maps.</p>");return}const y=H.volumes[0].img,C=d||H.volumes[1].img;if(!y||!C||y.length!==C.length){Jt("Region volumes","<p>Input and segmentation grids do not match.</p>");return}const R=H.volumes[0].hdr.pixDims||[],ae=R[1]&&R[2]&&R[3]?R[1]*R[2]*R[3]:1;let se=X(y,C,ae);if(se.length===0){Jt("Region volumes","<p>No non-background labels found in the segmentation.</p>");return}se=se.slice().sort((We,K)=>K.volume_mm3-We.volume_mm3);const Pe=se.reduce((We,K)=>We+K.volume_mm3,0),pe=o&&o.type!=="Brain_Extraction"?In(n):null;Jt("Region volumes",ot(se,Pe,pe),{hideClose:!0,statsMode:!0});const de=document.getElementById("statsPanel");if(!de)return;let me="cm3",_e=se.length;const Ne=()=>{const We=document.getElementById("statsUnitLabel");if(!We)return;const K=_e===se.length?`${se.length} ${se.length===1?"region":"regions"}`:`${_e} of ${se.length} regions`,q=me==="pct"?"100% of volume":`${qe(Pe)} cm³`;We.innerHTML=`${K} &middot; ${q}`};de.querySelectorAll(".stat-toggle button").forEach(We=>{We.onclick=()=>{me=We.dataset.mode,de.querySelectorAll(".stat-toggle button").forEach(K=>{const q=K===We;K.classList.toggle("active",q),K.setAttribute("aria-pressed",String(q))}),Ne(),de.querySelectorAll(".stat-row").forEach(K=>{const q=K.querySelector(".stat-val"),ee=K.querySelector(".stat-bar");q.textContent=me==="pct"?q.dataset.pct:q.dataset.cm3,ee.style.width=(me==="pct"?ee.dataset.wPct:ee.dataset.wAbs)+"%"})}});const Ae=document.getElementById("statsFilterInput"),je=document.getElementById("statsEmpty");if(Ae){const We=()=>{const K=Ae.value.trim().toLowerCase();_e=0,de.querySelectorAll(".stat-row").forEach(q=>{const ee=!K||q.dataset.name.includes(K)||q.dataset.label===K;q.hidden=!ee,ee&&_e++}),je&&(je.hidden=_e>0),Ne()};Ae.oninput=We,Ae.addEventListener("keydown",K=>{K.key==="Escape"&&Ae.value!==""&&(K.preventDefault(),K.stopPropagation(),Ae.value="",We())})}de.querySelectorAll(".stat-trigger").forEach(We=>{We.onclick=()=>{const K=We.closest(".stat-row"),q=K.querySelector(".stat-detail"),ee=q.hidden;q.hidden=!ee,K.classList.toggle("is-expanded",ee),We.setAttribute("aria-expanded",String(ee))}}),de.querySelectorAll(".stat-iso").forEach(We=>{We.onclick=()=>{const K=parseInt(We.closest(".stat-row").dataset.label,10);Number.isNaN(K)||ue(K);const q=document.getElementById("appDialog");q&&q.open&&q.close()}}),document.getElementById("statsDownloadBtn").onclick=()=>tt(se,pe)};function rt(){H.volumes.length<=1&&(p=H.volumes[0]||null,v=p&&p.name?p.name:"input.nii.gz",o=null,i=null,A(),modelSelect.value="-1",a(),H.volumes[0]&&opacitySlider0.oninput())}const it=new Map;function bt(y){return ve(this,null,function*(){if(it.has(y))return it.get(y);const R=yield(yield fetch(y)).json();return it.set(y,R),R})}function Fe(y,C,R=1){let ae=0;for(let se=0;se<256;se++)y[se]>0&&ae++;return(!C||ae!==C.length)&&(t="Failed to Predict Some Labels - "),C.map((se,Pe)=>{const pe=Pe<256?y[Pe]:0,de=pe>0?`${qe(pe*R)} cm3`:"Missing";return de==="Missing"&&(t+=`${se}, `),`${se}   ${de}`})}function Ke(y,C,R){return ve(this,null,function*(){var _e,Ne;const ae=(_e=C.probabilityDisplayMin)!=null?_e:.005,{probabilityOverlayAlpha:se=96,probabilityOverlayFloor:Pe=192}=C,pe=(R==null?void 0:R.tint)||[255,255,255],de=`probability-light-${pe.join("-")}-${Pe}-${se}`;if(!H.hasColormap(de)){const[Ae,je,We]=pe.map(K=>Math.round(K*Pe/255));H.addColormap(de,{R:[Ae,pe[0]],G:[je,pe[1]],B:[We,pe[2]],A:[0,se],I:[0,255]})}const me=ns(H.volumes[0],y instanceof Float32Array?y:Float32Array.from(y),(Ne=R==null?void 0:R.name)!=null?Ne:H.volumes[0].name,{scl_inter:0,scl_slope:1,datatypeCode:16,numBitsPerVoxel:32,cal_min:0,cal_max:1,intent_code:1001},{calMin:ae,calMax:1,robustMin:ae,robustMax:1,globalMin:0,globalMax:1,colormapType:1,colormap:de,opacity:Number(opacitySlider1.value),modulateAlpha:1});return me.modulationImage=me.id,yield H.model.addVolume(me),H.volumes.at(-1)})}function nt(y,C,R,ae){return ve(this,null,function*(){var Ae,je,We;if(L(),U(),n=null,s=null,o=R,i=R.type==="Brain_Extraction"&&ae||null,R.outputType==="probability"){const K=Array.isArray(y)?y:[y],q=[];for(let ee=0;ee<K.length;ee++)q.push(yield Ke(K[ee],R,(Ae=R.probabilityTissues)==null?void 0:Ae[ee]));R.probabilityPostprocess==="cat-lite"&&q.length===3&&(g=q),A(R),yield H.updateGLVolume();return}const se=y instanceof Uint8Array?y:new Uint8Array(y.buffer,y.byteOffset||0,y.byteLength);let Pe,pe=null,de=0,me={calMin:0,calMax:255,robustMin:0,robustMax:255,globalMin:0,globalMax:255};if(R.type==="Brain_Masking"){const K=["Background","Brain Mask"];n=K.slice();const q=[0,217],ee=[0,119],Ee=[0,33];s={R:q,G:ee,B:Ee};const st={R:q,G:ee,B:Ee,labels:K},De="brainchop-label-mask";H.addColormap(De,st),Pe=De,pe=Ss(st),de=1002,me={calMin:0,calMax:1,robustMin:0,robustMax:1,globalMin:0,globalMax:1}}else if(R.colormapPath){const K=rs(se),q=yield bt(R.colormapPath);n=q.labels?q.labels.slice():null,s={R:q.R,G:q.G,B:q.B};const ee=H.volumes[0].hdr.pixDims||[],Ee=ee[1]&&ee[2]&&ee[3]?ee[1]*ee[2]*ee[3]:1,st=q.labels?Fe(K,q.labels,Ee):[],De=Rt($t($t({R:q.R,G:q.G,B:q.B},q.I?{I:q.I}:{}),q.A?{A:q.A}:{}),{labels:st}),Be=`brainchop-label-${R.id}`;H.addColormap(Be,De),Pe=Be,pe=Ss(De);const ut=Math.max(1,((We=(je=q.R)==null?void 0:je.length)!=null?We:256)-1);de=1002,me={calMin:0,calMax:ut,robustMin:0,robustMax:ut,globalMin:0,globalMax:ut}}else{const K=rs(se);me=Aa(K),Pe=C.atlasSelectedColorTable.toLowerCase(),R.type==="Brain_Extraction"&&(Pe="copper2"),H.hasColormap(Pe)||(Pe="actc")}const _e=ns(H.volumes[0],se,H.volumes[0].name,{datatypeCode:2,numBitsPerVoxel:8,scl_inter:0,scl_slope:1,cal_min:me.calMin,cal_max:me.calMax,intent_code:de},Rt($t(Rt($t({},me),{colormap:Pe}),pe?{colormapLabel:pe}:{}),{opacity:Number(opacitySlider1.value)}));yield H.model.addVolume(_e);const Ne=H.volumes.at(-1);pe&&Ne&&!Ne.colormapLabel&&(Ne.colormapLabel=pe),A(R),yield H.updateGLVolume()})}function pt(y){return ve(this,null,function*(){var C;if(typeof y=="string")try{y=JSON.parse(y)}catch(R){console.error("Failed to parse telemetry data",R);return}y=yield ma(y,(C=H.view)==null?void 0:C.gl),e=`:: Diagnostics https://github.com/neuroneural/brainchop/issues ::
`;for(const R in y)y[R]!==null&&y[R]!==void 0&&(e+=`${R}: ${y[R]}
`)})}function dt(y){const C=String(y).split(" · ").map(R=>R.trim()).filter(R=>R!=="");return C.length<=1?tn(String(y)):C.map((R,ae)=>`<span class="loc-seg"${ae>=2?' style="opacity:.75"':""}>${tn(R)}</span>`).join('<span class="loc-sep">&middot;</span>')}function ht(y="",C=-1,R="",ae=[]){if(y){console.log(y);const se=document.getElementById("location");se&&(se.innerHTML=dt(y))}if(isNaN(C)){const se=document.getElementById("memstatusItem");se&&(se.hidden=!1),memstatus.style.color="#ef4444",memstatus.textContent="Memory Issue"}else C>=0&&(modelProgress.value=C*modelProgress.max);R&&(qn?(On.push(String(R)),console.warn("[backend]",R)):Jt("Message",tn(String(R)).replace(/\n/g,"<br>"))),ae&&Object.keys(ae).length>0&&pt(ae)}function Gt(y){k=y.vox,document.getElementById("location").innerHTML=y.string.split("   ").map(C=>C.trim()).filter(C=>C!=="").map(C=>`<span class="loc-seg">${tn(C)}</span>`).join('<span class="loc-sep">&middot;</span>')}const Ct=new URLSearchParams(window.location.search).get("viewer")==="webgpu"?"webgpu":"webgl2",H=new zo({backend:Ct,matcaps:{Shiny:Fo}});yield H.attachTo("gl1"),console.info("NiiVue viewer backend:",H.backend),H.backgroundColor=[0,0,0,1],H.is3DCrosshairVisible=!0,H.clipPlaneColor=[.7,0,.7,.5],H.gamma=1,H.registerVolumeTransform(Ro),H.isLegendVisible=!1,H.addEventListener("locationChange",y=>Gt(y.detail)),H.canvas.addEventListener("click",j),window.addEventListener("keydown",y=>{y.key==="Escape"&&(document.querySelector("dialog[open]")||(l!==null?(l=null,te()):c!==null&&(c=null,M())))});const Tt=H.drawScene.bind(H);H.drawScene=function(y){const C=Tt(y);try{I()}catch(R){console.warn("isolation HUD draw failed",R)}return C},H.primaryDragMode=$s.crosshair,H.secondaryDragMode=$s.slicer3D,H.showRender=Lo.ALWAYS,H.isYoked3DTo2DZoom=!0,H.crosshairGap=11;{const y=document.getElementById("dragSegmented");y&&y.querySelectorAll("button").forEach(C=>C.classList.toggle("active",parseInt(C.dataset.drag,10)===H.secondaryDragMode))}H.volumeIsNearestInterpolation=!0,yield H.loadVolumes([{url:"./t1_crop.nii.gz"}]),modelSelect.innerHTML="";const Ut=document.createElement("option");Ut.text="Run Segmentation Model",Ut.value="-1",Ut.disabled=!0,Ut.selected=!0,Ut.hidden=!0,modelSelect.appendChild(Ut);for(let y=0;y<wn.length;y++){console.log(`Adding model option: ${wn[y].modelName}`);const C=document.createElement("option");C.text=wn[y].modelName,C.value=y,wn[y].type==="Divider"&&(C.disabled=!0),modelSelect.appendChild(C)}H.addEventListener("volumeLoaded",rt),rt(),Ma(H),xa(H),modelSelect.value="-1",a(),F(-1),yield Hs((Xt=H.view)==null?void 0:Xt.gl);const zt=new URLSearchParams(window.location.search).get("model");zt!==null&&zt!==""&&Number(zt)>=0&&Number(zt)<wn.length?(modelSelect.value=String(Number(zt)),a(),ye()):dn&&on&&(window.requestIdleCallback?C=>window.requestIdleCallback(C,{timeout:600}):C=>setTimeout(C,200))(()=>Qr(on))})}function tn(e){return String(e).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function za(e){const n=(On.length?On:[e&&e.message?e.message:String(e||"unknown error")]).map(s=>`<li>${tn(s)}</li>`).join("");Jt("Segmentation failed",`<p>No available backend could run this model on this device.</p>
     <ul style="margin:0 0 4px 1.1em;padding:0;font-size:0.92em;line-height:1.45">${n}</ul>
     <p style="font-size:0.88em;color:#9aa4af">Full details are in the browser console and under Diagnostics.</p>`)}function Jt(e,t,n={}){const s=document.getElementById("appDialog"),o=document.getElementById("dialogTitle"),i=document.getElementById("dialogMessage"),r=document.getElementById("dialogCloseBtn");if(!s)return;o.textContent=e,i.innerHTML=t,r.style.display=n.hideClose?"none":"",r.onclick=()=>s.close(),s.classList.toggle("dialog-save",!!n.saveMode),s.classList.toggle("dialog-stats",!!n.statsMode);const a=document.getElementById("dialogXBtn");a&&(a.onclick=()=>s.close()),s.showModal()}function Fa(){return ve(this,null,function*(){try{const t=yield(yield fetch("https://api.github.com/repos/neuroneural/brainchop")).json();document.getElementById("star-count").textContent=t.stargazers_count}catch(e){console.error("Error fetching star count:",e)}})}(function(){return ve(this,null,function*(){yield Ca(),yield Fa()})})();export{Zs as a,Ks as d,Ys as p};
