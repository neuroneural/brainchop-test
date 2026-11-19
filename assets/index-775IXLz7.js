const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./dkatlas24_int8_v3_runner-qYLKbQ8-.js","./vendor-niivue-Cvdr5q4M.js","./vendor-FBY2Vxgc.js","./vendor-math-oqRZD8Fx.js"])))=>i.map(i=>d[i]);
var Ho=Object.defineProperty,jo=Object.defineProperties;var Xo=Object.getOwnPropertyDescriptors;var Gn=Object.getOwnPropertySymbols;var Cs=Object.prototype.hasOwnProperty,Bs=Object.prototype.propertyIsEnumerable;var Et=Math.pow,zs=(e,t,n)=>t in e?Ho(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ot=(e,t)=>{for(var n in t||(t={}))Cs.call(t,n)&&zs(e,n,t[n]);if(Gn)for(var n of Gn(t))Bs.call(t,n)&&zs(e,n,t[n]);return e},$t=(e,t)=>jo(e,Xo(t));var Fs=(e,t)=>{var n={};for(var s in e)Cs.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&Gn)for(var s of Gn(e))t.indexOf(s)<0&&Bs.call(e,s)&&(n[s]=e[s]);return n};var Be=(e,t,n)=>new Promise((s,o)=>{var a=f=>{try{i(n.next(f))}catch(l){o(l)}},r=f=>{try{i(n.throw(f))}catch(l){o(l)}},i=f=>f.done?s(f.value):Promise.resolve(f.value).then(a,r);i((n=n.apply(e,t)).next())});import{z as Wn,$ as Yo,t as Ko,L as Ls,Y as Zo,M as Us,a as Qo,_ as Jo}from"./vendor-niivue-Cvdr5q4M.js";import{l as er,n as tr,p as nr}from"./vendor-math-oqRZD8Fx.js";import"./vendor-FBY2Vxgc.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();const sr="modulepreload",or=function(e,t){return new URL(e,t).href},Ws={},lt=function(t,n,s){let o=Promise.resolve();if(n&&n.length>0){let l=function(u){return Promise.all(u.map(d=>Promise.resolve(d).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};const r=document.getElementsByTagName("link"),i=document.querySelector("meta[property=csp-nonce]"),f=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));o=l(n.map(u=>{if(u=or(u,s),u in Ws)return;Ws[u]=!0;const d=u.endsWith(".css"),g=d?'[rel="stylesheet"]':"";if(s)for(let p=r.length-1;p>=0;p--){const m=r[p];if(m.href===u&&(!d||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${g}`))return;const c=document.createElement("link");if(c.rel=d?"stylesheet":sr,d||(c.as="script"),c.crossOrigin="",c.href=u,f&&c.setAttribute("nonce",f),document.head.appendChild(c),d)return new Promise((p,m)=>{c.addEventListener("load",p),c.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${u}`)))})}))}function a(r){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=r,window.dispatchEvent(i),!i.defaultPrevented)throw r}return o.then(r=>{for(const i of r||[])i.status==="rejected"&&a(i.reason);return t().catch(a)})};function rr(e){return new Worker(""+new URL("conform-worker-CLIpQIO-.js",import.meta.url).href,{name:e==null?void 0:e.name})}const St=256,Nn=St*St*St;function ar(e,t){if(!(e instanceof ArrayBuffer))return e;switch(t){case 2:return new Uint8Array(e);case 4:return new Int16Array(e);case 8:return new Int32Array(e);case 16:return new Float32Array(e);case 64:return new Float64Array(e);case 256:return new Int8Array(e);case 512:return new Uint16Array(e);case 768:return new Uint32Array(e);case 1024:return new BigInt64Array(e);case 1280:return new BigUint64Array(e);default:return new Float32Array(e)}}function ir(e){return e[0]*(e[5]*e[10]-e[6]*e[9])-e[1]*(e[4]*e[10]-e[6]*e[8])+e[2]*(e[4]*e[9]-e[5]*e[8])}function lr(e){if(!e||e.length<16)return!1;for(let t=0;t<16;t++)if(!Number.isFinite(e[t]))return!1;return Math.abs(ir(e))>=1e-6}function ur(e){const t=e[0],n=e[1],s=e[2],o=e[3],a=e[4],r=e[5],i=e[6],f=e[7],l=e[8],u=e[9],d=e[10],g=e[11],c=r*d-i*u,p=-(a*d-i*l),m=a*u-r*l,h=t*c+n*p+s*m;if(!Number.isFinite(h)||Math.abs(h)<1e-12)throw new Error("Cannot conform volume: singular affine transform.");const M=1/h,_=c*M,w=-(n*d-s*u)*M,y=(n*i-s*r)*M,$=p*M,x=(t*d-s*l)*M,S=-(t*i-s*a)*M,C=m*M,v=-(t*u-n*l)*M,A=(t*r-n*a)*M,k=-(_*o+w*f+y*g),U=-($*o+x*f+S*g),F=-(C*o+v*f+A*g);return[_,w,y,k,$,x,S,U,C,v,A,F,0,0,0,1]}function cr(e,t){const n=new Array(16);for(let s=0;s<3;s++){const o=s*4,a=e[o],r=e[o+1],i=e[o+2],f=e[o+3];n[o]=a*t[0]+r*t[4]+i*t[8],n[o+1]=a*t[1]+r*t[5]+i*t[9],n[o+2]=a*t[2]+r*t[6]+i*t[10],n[o+3]=a*t[3]+r*t[7]+i*t[11]+f}return n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function fr(e,t,n,s,o=!1){const a=e*.5,r=t*.5,i=n*.5,f=s[0]*a+s[1]*r+s[2]*i+s[3],l=s[4]*a+s[5]*r+s[6]*i+s[7],u=s[8]*a+s[9]*r+s[10]*i+s[11],d=St*.5;return o?[1,0,0,f-d,0,1,0,l-d,0,0,1,u-d,0,0,0,1]:[-1,0,0,f+d,0,0,1,l-d,0,-1,0,u+d,0,0,0,1]}function pr(e,t=.999){const n=e.length;if(n===0)return{srcMin:0,srcMax:0,scale:1,flooredNegative:!1};let s=1/0,o=-1/0,a=0,r=0;for(let m=0;m<n;m++){let h=e[m];Number.isFinite(h)||(h=0,e[m]=0),h<s&&(s=h),h>o&&(o=h),(h>=1e-15||h<=-1e-15)&&a++,h<0&&r++}let i=!1;s<0&&100*r/n<2&&(s=0,i=!0);const f=Math.fround((o-s)/1e3);if(!(f>0)){for(let m=0;m<n;m++){const h=e[m];e[m]=h<=0?0:h>=255?255:h}return{srcMin:s,srcMax:o,scale:1,flooredNegative:i}}const l=new Uint32Array(1e3);for(let m=0;m<n;m++){const h=Math.fround((e[m]-s)/f),M=h<=0?0:h>=999?999:Math.trunc(h);l[M]++}const u=Math.max(0,Math.min(1,1-t)),d=n-Math.floor(u*a);let g=0,c=0;for(;c<999&&(g+=l[c],!(g+l[c+1]>=d));c++);o=Math.fround(c*f+s);const p=s!==o?Math.fround(255/(o-s)):1;for(let m=0;m<n;m++){const h=p*(e[m]-s);e[m]=h<=0?0:h>=255?255:h}return{srcMin:s,srcMax:o,scale:p,flooredNegative:i}}function mr({img:e,datatypeCode:t,dims:n,affine:s,sclSlope:o=1,sclInter:a=0,toRAS:r=!1,isLinear:i=!0,asFloat32:f=!1,fHigh:l=.999}){const u=n[1]|0,d=n[2]|0,g=n[3]|0;if(u<1||d<1||g<1)throw new Error(`Invalid input volume dimensions: [${u}, ${d}, ${g}]`);const c=Array.isArray(s[0])?s.flat():Array.from(s);if(!lr(c))throw new Error("Cannot conform volume: invalid or singular affine matrix.");const p=ar(e,t),m=u*d*g;if(!p||p.length<m)throw new Error(`Input buffer length (${p?p.length:0}) is smaller than ${u}x${d}x${g}`);const h=Number.isFinite(o)&&o!==0?o:1,M=Number.isFinite(a)?a:0,_=new Float32Array(m),w=p instanceof BigInt64Array||p instanceof BigUint64Array;let y=0;if(w)for(let A=0;A<m;A++){const k=Number(p[A])*h+M;Number.isFinite(k)?(_[A]=k,y++):_[A]=0}else if(h===1&&M===0)for(let A=0;A<m;A++){const k=p[A];Number.isFinite(k)?(_[A]=k,y++):_[A]=0}else for(let A=0;A<m;A++){const k=p[A]*h+M;Number.isFinite(k)?(_[A]=k,y++):_[A]=0}if(y===0)throw new Error("Input volume contains no finite voxel values.");pr(_,l);const $=fr(u,d,g,c,r),x=ur(c),S=cr(x,$);let C=u===St&&d===St&&g===St;for(let A=0;A<3&&C;A++){const k=A*4;let U=Math.abs(S[k+3]);for(let F=0;F<3;F++)U+=Math.abs(S[k+F]-(A===F?1:0))*(St-1);C=U<.001}const v=f?new Float32Array(Nn):new Uint8Array(Nn);if(C)if(f)for(let A=0;A<Nn;A++)v[A]=_[A]*(1/255);else for(let A=0;A<Nn;A++){const k=_[A];v[A]=k<=0?0:k>=255?255:Math.round(k)}else{let A=_[0];for(let we=1;we<m;we++)_[we]<A&&(A=_[we]);A!==0&&v.fill(f?A*(1/255):Math.min(255,Math.max(0,Math.round(A))));const k=S[0],U=S[1],F=S[2],G=S[3],V=S[4],X=S[5],W=S[6],D=S[7],T=S[8],Y=S[9],E=S[10],L=S[11],N=u*d,Z=u-1,O=d-1,ce=g-1,fe=1/255;let ye=0;if(i)for(let we=0;we<St;we++){const _e=we*F+G,K=we*W+D,ae=we*E+L;for(let z=0;z<St;z++){const oe=z*U+_e,R=z*X+K,ue=z*Y+ae;for(let te=0;te<St;te++,ye++){const Q=te*k+oe,H=te*V+R,J=te*T+ue,q=Math.floor(Q),ke=Math.floor(H),be=Math.floor(J);if(q<0||ke<0||be<0||q>=Z||ke>=O||be>=ce)continue;const Le=Q-q,Ce=H-ke,Ee=J-be,Ie=1-Le,He=1-Ce,Ne=1-Ee,Ue=q+ke*u+be*N,Pe=_[Ue]*Ie+_[Ue+1]*Le,De=_[Ue+u]*Ie+_[Ue+u+1]*Le,rt=_[Ue+N]*Ie+_[Ue+N+1]*Le,et=_[Ue+u+N]*Ie+_[Ue+u+N+1]*Le,tt=(Pe*He+De*Ce)*Ne+(rt*He+et*Ce)*Ee;if(f)v[ye]=tt<=0?0:tt>=255?1:tt*fe;else{const Bt=Math.fround(tt);v[ye]=Bt<=0?0:Bt>=255?255:Math.floor(Bt+.5)}}}}else for(let we=0;we<St;we++){const _e=we*F+G,K=we*W+D,ae=we*E+L;for(let z=0;z<St;z++){const oe=z*U+_e,R=z*X+K,ue=z*Y+ae;for(let te=0;te<St;te++,ye++){const Q=Math.round(te*k+oe),H=Math.round(te*V+R),J=Math.round(te*T+ue);if(Q<0||H<0||J<0||Q>=u||H>=d||J>=g)continue;const q=_[Q+H*u+J*N];f?v[ye]=q<=0?0:q>=255?1:q*fe:v[ye]=q<=0?0:q>=255?255:Math.floor(q+.5)}}}}return{img:v,dims:[3,St,St,St,1,1,1,1],pixDims:[1,1,1,1,1,0,0,0],affine:$,datatypeCode:f?16:2,bitsPerVoxel:f?32:8,sclSlope:1,sclInter:0,calMin:0,calMax:0}}let An=null,dr=1;const Cn=new Map;function gr(e){An&&(An.terminate(),An=null);for(const{reject:t}of Cn.values())t(e);Cn.clear()}function _r(){if(An)return An;const e=new rr({});return e.onmessage=t=>{const{id:n,result:s,error:o}=t.data,a=Cn.get(n);a&&(Cn.delete(n),o?a.reject(new Error(o)):a.resolve(s))},e.onerror=t=>{const n=(t==null?void 0:t.message)||"Conform worker crashed";gr(new Error(n))},An=e,e}function br(e){return typeof Worker=="undefined"?Promise.resolve(mr(e)):new Promise((t,n)=>{const s=dr++;Cn.set(s,{resolve:t,reject:n});try{_r().postMessage({id:s,payload:e})}catch(o){Cn.delete(s),n(o)}})}function hr(e,t){const n=Object.assign(Object.create(Object.getPrototypeOf(e)||Object.prototype),JSON.parse(JSON.stringify(e)));return n.datatypeCode=t.datatypeCode,n.numBitsPerVoxel=t.bitsPerVoxel,n.scl_slope=t.sclSlope,n.scl_inter=t.sclInter,n.cal_min=t.calMin,n.cal_max=t.calMax,n.dims=t.dims,n.pixDims=t.pixDims,n.affine=[[t.affine[0],t.affine[1],t.affine[2],t.affine[3]],[t.affine[4],t.affine[5],t.affine[6],t.affine[7]],[t.affine[8],t.affine[9],t.affine[10],t.affine[11]],[0,0,0,1]],n.sform_code=1,n.qform_code=0,n}const Rs={name:"conform",description:"Reslice to 256×256×256 isotropic 1 mm volume with negative-ringing floor and 0–99.9% intensity scaling",options:[{name:"toRAS",type:"checkbox",label:"Output RAS orientation",default:!1},{name:"isLinear",type:"checkbox",label:"Linear interpolation",default:!0},{name:"asFloat32",type:"checkbox",label:"Output as Float32",default:!1}],apply(s,o){return Be(this,arguments,function*(e,t,n={}){var i,f,l,u;const a={img:t,datatypeCode:e.datatypeCode,dims:[...e.dims],affine:Array.isArray(e.affine[0])?e.affine.flat():[...e.affine],sclSlope:e.scl_slope||1,sclInter:e.scl_inter||0,toRAS:(i=n.toRAS)!=null?i:!1,isLinear:(f=n.isLinear)!=null?f:!0,asFloat32:(l=n.asFloat32)!=null?l:!1,fHigh:(u=n.fHigh)!=null?u:.999},r=yield br(a);return{hdr:hr(e,r),img:r.img}})}},_n=new WeakMap;class wr{getLabelMeta(t){return _n.get(t)||null}idx(t,n,s,o){return s*o[0]*o[1]+n*o[0]+t}check_previous_slice(t,n,s,o,a,r,i,f,l,u){let d=0;if(!a)return 0;const g=t[this.idx(s,o,a,r)];if(i>=6){const c=this.idx(s,o,a-1,r);g===t[c]&&(l[d++]=n[c])}if(i>=18){if(s){const c=this.idx(s-1,o,a-1,r);g===t[c]&&(l[d++]=n[c])}if(o){const c=this.idx(s,o-1,a-1,r);g===t[c]&&(l[d++]=n[c])}if(s<r[0]-1){const c=this.idx(s+1,o,a-1,r);g===t[c]&&(l[d++]=n[c])}if(o<r[1]-1){const c=this.idx(s,o+1,a-1,r);g===t[c]&&(l[d++]=n[c])}}if(i===26){if(s&&o){const c=this.idx(s-1,o-1,a-1,r);g===t[c]&&(l[d++]=n[c])}if(s<r[0]-1&&o){const c=this.idx(s+1,o-1,a-1,r);g===t[c]&&(l[d++]=n[c])}if(s&&o<r[1]-1){const c=this.idx(s-1,o+1,a-1,r);g===t[c]&&(l[d++]=n[c])}if(s<r[0]-1&&o<r[1]-1){const c=this.idx(s+1,o+1,a-1,r);g===t[c]&&(l[d++]=n[c])}}return d?(this.fill_tratab(f,l,d,u),l[0]):0}do_initial_labelling(t,n,s,o=null){const a=n[0]|0,r=n[1]|0,i=n[2]|0,f=a*r,l=f*i;let u=1;const d=8192;let g=d,c=new Uint32Array(g),p;if(s===6&&o&&o.il&&o.il.length===l){if(p=o.il,o.dirty)p.fill(0);else if(o.runs&&o.runLen>0){const _=o.runs,w=o.runLen;for(let y=0;y<w;y+=2)p.fill(0,_[y],_[y+1])}}else p=new Uint32Array(l),s===6&&o&&(o.il=p,o.runs=null,o.runLen=0,o.dirty=!1);if(s===6){o&&(o.dirty=!0);const _=(t instanceof Uint8Array||t instanceof Uint8ClampedArray)&&(t.byteOffset&3)===0&&(a&3)===0&&t.length>=l?new Uint32Array(t.buffer,t.byteOffset,l>>2):null;let w=o&&o.runs?o.runs:new Uint32Array(8192),y=w.length,$=0,x=0,S=0,C=0,v=-1,A=-1,k=i,U=-1;for(let F=0;F<i;F++){const G=F*f;for(let V=0;V<r;V++){const X=G+V*a;let W=0;if(_){const T=X+a>>2;let Y=X>>2;for(;Y<T&&_[Y]===0;)Y++;if(Y===T)continue;W=(Y<<2)-X}let D=!1;for(;W<a;W++){const T=X+W;if(_&&!D&&(W&3)===0&&_[T>>2]===0){W+=3;continue}const Y=t[T];if(Y===0){D&&(w[$++]=T,D=!1);continue}if(!D){if($+2>y){y<<=1;const L=new Uint32Array(y);L.set(w),w=L}w[$++]=T,D=!0}v<0&&(v=T,k=F),A=T,U=F;let E=0;if(F>0&&t[T-f]===Y&&(x=p[T-f],E=1),W>0&&t[T-1]===Y){const L=p[T-1];E===0?x=L:E===1?S=L:C=L,E++}if(V>0&&t[T-a]===Y){const L=p[T-a];E===0?x=L:E===1?S=L:C=L,E++}if(E===0){if(p[T]=u,u>=g){g+=d;const L=new Uint32Array(g);L.set(c),c=L}c[u-1]=u,u++}else if(p[T]=x,E===2&&S!==x){let L=x;for(;c[L-1]!==L;)L=c[L-1];let N=S;for(;c[N-1]!==N;)N=c[N-1];const Z=L<N?L:N;c[L-1]=Z,c[N-1]=Z}else if(E===3&&(S!==x||C!==x)){let L=x;for(;c[L-1]!==L;)L=c[L-1];let N=S;for(;c[N-1]!==N;)N=c[N-1];let Z=C;for(;c[Z-1]!==Z;)Z=c[Z-1];let O=L<N?L:N;Z<O&&(O=Z),c[L-1]=O,c[N-1]=O,c[Z-1]=O}}D&&(w[$++]=X+a)}}for(let F=0;F<u-1;F++){let G=F;for(;c[G]!==G+1;)G=c[G]-1;c[F]=G+1}return o&&(o.runs=w,o.runLen=$,o.dirty=!1),this._lastInitialRange={conn:6,fgStart:v,fgEnd:A,minSl:k,maxSl:U,runs:w,runLen:$},[u-1,c,p]}const m=new Uint32Array(32),h=new Uint32Array(32),M=new Uint32Array(27);for(let _=0;_<i;_++)for(let w=0;w<r;w++)for(let y=0;y<a;y++){let $=0;const x=t[this.idx(y,w,_,n)];if(x!==0){if(M[0]=this.check_previous_slice(t,p,y,w,_,n,s,c,m,h),M[0]&&($+=1),s>=6){if(y){const S=this.idx(y-1,w,_,n);x===t[S]&&(M[$++]=p[S])}if(w){const S=this.idx(y,w-1,_,n);x===t[S]&&(M[$++]=p[S])}}if(s>=18){if(w&&y){const S=this.idx(y-1,w-1,_,n);x===t[S]&&(M[$++]=p[S])}if(w&&y<a-1){const S=this.idx(y+1,w-1,_,n);x===t[S]&&(M[$++]=p[S])}}if($)p[this.idx(y,w,_,n)]=M[0],this.fill_tratab(c,M,$,h);else{if(p[this.idx(y,w,_,n)]=u,u>=g){g+=d;const S=new Uint32Array(g);S.set(c),c=S}c[u-1]=u,u++}}}for(let _=0;_<u-1;_++){let w=_;for(;c[w]!==w+1;)w=c[w]-1;c[_]=w+1}return this._lastInitialRange=null,[u-1,c,p]}fill_tratab(t,n,s,o){let r=2147483647;for(let i=0;i<s;i++){let f=n[i];for(;t[f-1]!==f;)f=t[f-1];o[i]=f,r=Math.min(r,f)}for(let i=0;i<s;i++)t[o[i]-1]=r}translate_labels(t,n,s,o,a=null,r=null){const i=n[0]*n[1]*n[2];if(r&&(o===0||r.fgStart<0))return a&&(this._lastMeta={conn:r.conn,cl:0,fgStart:0,fgEnd:-1,minSl:0,maxSl:-1,ls2bw:new Uint32Array(1),sumls:new Uint32Array(1),distinctFgClasses:0,bw:a}),[0,t];let f=0;for(let m=0;m<o;m++)s[m]>f&&(f=s[m]);const l=new Uint32Array(f+1),u=a&&r?new Uint32Array(o+1):null,d=a&&r?new Uint32Array(o+1):null,g=r?r.fgStart:0,c=r?r.fgEnd:i-1;let p=0;if(r&&r.runs){const m=r.runs,h=r.runLen;for(let M=0;M<h;M+=2){const _=m[M],w=m[M+1];for(let y=_;y<w;y++){const $=s[t[y]-1];let x=l[$];x||(p+=1,x=p,l[$]=x,u&&(u[x]=a[y])),t[y]=x,d&&d[x]++}}}else for(let m=g;m<=c;m++){const h=t[m];if(h){const M=s[h-1];let _=l[M];_||(p+=1,_=p,l[M]=_,u&&(u[_]=a[m])),t[m]=_,d&&d[_]++}}if(a&&r){const m=u.slice(0,p+1),h=d.slice(0,p+1);let M=0;if(p>0){const _=m[1];M=1;for(let w=2;w<=p;w++)if(m[w]!==_){M=2;break}}this._lastMeta={conn:r.conn,cl:p,fgStart:r.fgStart,fgEnd:r.fgEnd,minSl:r.minSl,maxSl:r.maxSl,runs:r.runs,runLen:r.runLen,ls2bw:m,sumls:h,distinctFgClasses:M,bw:a}}return[p,t]}neighbor_winners(t,n,s,o,a=null,r=null){const i=n[0],f=n[1],l=n[2],u=i*f,d=!!(r&&a);let g=!1;for(let y=1;y<=o;y++)if(!s[y]){g=!0;break}if(!g)return d&&console.log("[relabel] 0/0 suppressed components resolved within their own class family (0 fell back to the unrestricted neighbour vote)"),new Uint32Array(o+1);const c=d?new Int32Array(o+1).fill(-1):null,p=new Map,m=(y,$)=>{let x=p.get(y);x||(x=new Map,p.set(y,x)),x.set($,(x.get($)||0)+1)},h=_n.get(t),M=h&&h.cl===o&&t.length===u*l;if(M&&h.runs){const y=h.runs,$=h.runLen;for(let x=0;x<$;x+=2){const S=y[x],C=y[x+1],v=S/u|0,A=S-v*u,k=A/i|0;let U=A-k*i;for(let F=S;F<C;F++,U++){const G=t[F];if(s[G])continue;d&&c[G]<0&&(c[G]=r(a[F]));let V;U>0&&(V=s[t[F-1]])&&m(G,V),U<i-1&&(V=s[t[F+1]])&&m(G,V),k>0&&(V=s[t[F-i]])&&m(G,V),k<f-1&&(V=s[t[F+i]])&&m(G,V),v>0&&(V=s[t[F-u]])&&m(G,V),v<l-1&&(V=s[t[F+u]])&&m(G,V)}}}else{const y=M?h.minSl:0,$=M?h.maxSl:l-1;let x=y*u;for(let S=y;S<=$;S++)for(let C=0;C<f;C++)for(let v=0;v<i;v++,x++){const A=t[x];if(A===0||s[A])continue;d&&c[A]<0&&(c[A]=r(a[x]));let k;v>0&&(k=s[t[x-1]])&&m(A,k),v<i-1&&(k=s[t[x+1]])&&m(A,k),C>0&&(k=s[t[x-i]])&&m(A,k),C<f-1&&(k=s[t[x+i]])&&m(A,k),S>0&&(k=s[t[x-u]])&&m(A,k),S<l-1&&(k=s[t[x+u]])&&m(A,k)}}const _=new Uint32Array(o+1).fill(0);let w=0;for(const[y,$]of p){const x=d?c[y]:0;let S=0,C=0;if(x>0){for(const[v,A]of $)r(v)===x&&(A>C||A===C&&(S===0||v<S))&&(C=A,S=v);S&&w++}if(!S)for(const[v,A]of $)(A>C||A===C&&(S===0||v<S))&&(C=A,S=v);_[y]=S}return d&&console.log(`[relabel] ${w}/${p.size} suppressed components resolved within their own class family (${p.size-w} fell back to the unrestricted neighbour vote)`),_}finalize_volume(t,n,s,o,a,r=null,i=null,f=!1){const l=t.length,u=a?this.neighbor_winners(t,n,s,o,r,i):null,d=u?new Uint32Array(o+1):s;let g=0;for(let _=1;_<=o;_++){let w=s[_];u&&(w||(w=u[_]),d[_]=w),w>g&&(g=w)}const c=_n.get(t),p=c&&c.cl===o&&c.ls2bw.length===o+1&&c.fgEnd<l;let m=0;if(p&&c.runs){const _=c.runs,w=c.runLen;for(let x=1;x<=o;x++)c.sumls[x]>0&&d[x]>m&&(m=d[x]);if(c.bw===r&&r instanceof Uint8Array&&g<=255){const x=new Uint8Array(o+1);let S=!1;for(let v=1;v<=o;v++)c.sumls[v]>0&&d[v]!==c.ls2bw[v]&&(x[v]=1,S=!0);const C=f?r:r.slice();if(S)for(let v=0;v<w;v+=2){const A=_[v],k=_[v+1];for(let U=A;U<k;U++){const F=t[U];x[F]&&(C[U]=d[F])}}return[m,C]}const $=r instanceof Uint8Array&&g<=255?new Uint8Array(l):new Uint32Array(l);for(let x=0;x<w;x+=2){const S=_[x],C=_[x+1];for(let v=S;v<C;v++){const A=d[t[v]];A&&($[v]=A)}}return[m,$]}const M=r instanceof Uint8Array&&g<=255?new Uint8Array(l):new Uint32Array(l);if(p){if(c.fgStart>=0&&c.fgEnd>=c.fgStart)for(let _=c.fgStart;_<=c.fgEnd;_++){const w=t[_];if(w!==0){const y=d[w];y&&(M[_]=y,y>m&&(m=y))}}}else for(let _=0;_<l;_++){const w=t[_];if(w!==0){const y=d[w];y&&(M[_]=y,y>m&&(m=y))}}return[m,M]}diagnose_components(t,n,s,o,a={}){var v,A,k;const r=(v=a.topN)!=null?v:50,i=(A=a.minSize)!=null?A:1,f=(k=a.label)!=null?k:"diag",l=o[0],u=o[1],d=o[2],g=l*u,c=new Uint32Array(n+1),p=new Uint32Array(n+1);for(let U=0;U<t.length;U++){const F=s[U];F&&(c[F]=t[U],p[F]++)}const m=new Map,h=new Uint32Array(n+1),M=new Uint32Array(n+1),_=(U,F)=>{let G=m.get(U);G||(G=new Map,m.set(U,G)),G.set(F,(G.get(F)||0)+1)};for(let U=0;U<d;U++)for(let F=0;F<u;F++)for(let G=0;G<l;G++){const V=U*g+F*l+G,X=s[V];if(!X)continue;const W=c[X],D=T=>{const Y=s[T];if(Y===X)return;M[X]++;const E=Y?c[Y]:0;E===0?h[X]++:E!==W&&_(X,E)};G>0&&D(V-1),G<l-1&&D(V+1),F>0&&D(V-l),F<u-1&&D(V+l),U>0&&D(V-g),U<d-1&&D(V+g)}const w=new Map,y=new Map;for(let U=1;U<=n;U++){const F=c[U];w.set(F,(w.get(F)||0)+1),(!y.has(F)||p[U]>y.get(F))&&y.set(F,p[U])}const $=[];for(let U=1;U<=n;U++){if(p[U]<i)continue;const F=c[U],G=m.get(U);let V=0,X=0,W=0;if(G)for(const[T,Y]of G)W+=Y,Y>X&&(X=Y,V=T);const D=M[U]||1;$.push({comp:U,class:F,size:p[U],largestOfClass:p[U]===y.get(F)?"Y":"n",compsInClass:w.get(F),domNeighbor:V,domFracForeign:W?+(X/W).toFixed(2):0,domFracBoundary:+(X/D).toFixed(2),bgFrac:+(h[U]/D).toFixed(2)})}$.sort((U,F)=>F.domFracForeign-U.domFracForeign||F.size-U.size);const x=(U,F)=>{const G=F.map(X=>Math.max(X.h.length,...U.map(W=>String(W[X.k]).length))),V=X=>X.map((W,D)=>String(W).padStart(G[D])).join("  ");return[V(F.map(X=>X.h)),...U.map(X=>V(F.map(W=>X[W.k])))].join(`
`)},S=[{k:"comp",h:"comp"},{k:"class",h:"class"},{k:"size",h:"size"},{k:"largestOfClass",h:"lrg"},{k:"compsInClass",h:"nComp"},{k:"domNeighbor",h:"domNbr"},{k:"domFracForeign",h:"encF"},{k:"domFracBoundary",h:"encB"},{k:"bgFrac",h:"bgF"}];console.log(`[${f}] total components=${n}, distinct classes=${w.size}
[${f}] island candidates (encF≈1 + small size + lrg=n ⇒ swallowed island):
`+x($.slice(0,r),S));const C=[...w.entries()].map(([U,F])=>({class:U,components:F,maxCompSize:y.get(U)})).sort((U,F)=>F.components-U.components);return console.log(`[${f}] per-class component counts (components=1 ⇒ fully connected):
`+x(C.slice(0,30),[{k:"class",h:"class"},{k:"components",h:"comps"},{k:"maxCompSize",h:"maxSize"}])),$}_collectComponentStats(t,n,s){const o=_n.get(s);if(o&&o.cl===n&&o.bw===t&&s.length===t.length)return[o.ls2bw,o.sumls];const a=t.length,r=new Uint32Array(n+1),i=new Uint32Array(n+1);for(let f=0;f<a;f++){const l=s[f];l>0&&(r[l]=t[f],i[l]++)}return[r,i]}_buildKeptMap(t,n,s,o,a){const r=new Uint32Array(s+1);let i=0;for(let l=1;l<=s;l++)t[l]>i&&(i=t[l]);const f=o==="all";if(i<=65535){const l=new Uint32Array(i+1),u=new Uint32Array(i+1);for(let d=1;d<=s;d++){const g=t[d];if(g!==0)if(f||o&&o.has&&o.has(g)){const c=n[d];(!u[g]||(a?c>=l[g]:c>l[g]))&&(l[g]=c,u[g]=d)}else r[d]=g}for(let d=1;d<=i;d++){const g=u[d];g>0&&(r[g]=d)}}else{const l=new Map;for(let u=1;u<=s;u++){const d=t[u];if(d!==0)if(f||o&&o.has&&o.has(d)){const g=n[u],c=l.get(d);(!c||(a?g>=c.sz:g>c.sz))&&l.set(d,{c:u,sz:g})}else r[u]=d}for(const[u,{c:d}]of l)r[d]=u}return r}largest_original_cluster_labels(t,n,s,o=null,a=!1,r=null,i=!1){const[f,l]=this._collectComponentStats(t,n,s),u=this._buildKeptMap(f,l,n,"all",!0);return this.finalize_volume(s,o,u,n,a,t,r,i)}filter_clusters(t,n,s,o,a=null,r=!1,i=null,f=!1){const[l,u]=this._collectComponentStats(t,n,s),d=this._buildKeptMap(l,u,n,o,!1);return this.finalize_volume(s,a,d,n,r,t,i,f)}filter_clusters_by_ratio(t,n,s,o,a=null,r=!1,i=null){const f=t.length,l=new Uint32Array(n+1).fill(0),u=new Uint32Array(n+1).fill(0);for(let p=0;p<f;p++){const m=s[p];m>0&&(l[m]===0&&(l[m]=t[p]),u[m]++)}const d=new Map;for(let p=1;p<=n;p++){const m=l[p],h=u[p];(!d.has(m)||h>d.get(m))&&d.set(m,h)}const g=new Uint8Array(n+1).fill(0);for(let p=1;p<=n;p++){const m=l[p],h=u[p],M=d.get(m)||0;h>=M*o&&(g[p]=1)}const c=new Uint32Array(n+1).fill(0);for(let p=1;p<=n;p++)g[p]&&(c[p]=l[p]);return this.finalize_volume(s,a,c,n,r,t,i)}_binaryComponentsFromLabels(t,n,s,o,a=!1){const r=o[0]|0,i=o[1]|0,f=o[2]|0,l=r*i,u=_n.get(s),d=u&&u.cl===n&&s.length===l*f&&(!a||u.bw===t);if(d&&u.conn===6&&u.distinctFgClasses<=1){const _=new Uint32Array(n+1);let w=0,y=0;for(let $=1;$<=n;$++){_[$]=$;const x=u.sumls[$];x>0&&x>=y&&(y=x,w=$)}return{parent:_,compSize:u.sumls,compClass:a?u.ls2bw:null,bestRoot:w}}const g=d?u.sumls:new Uint32Array(n+1),c=d?a?u.ls2bw:null:a?new Uint32Array(n+1):null,p=new Uint32Array(n+1);for(let _=1;_<=n;_++)p[_]=_;if(d&&u.conn===6&&u.runs&&u.bw===t){const _=($,x)=>{for(;p[$]!==$;)p[$]=p[p[$]],$=p[$];for(;p[x]!==x;)p[x]=p[p[x]],x=p[x];$!==x&&($<x?p[x]=$:p[$]=x)},w=u.runs,y=u.runLen;for(let $=0;$<y;$+=2){const x=w[$],S=w[$+1],C=x/l|0,v=x-C*l,A=v/r|0;let k=v-A*r;for(let U=x;U<S;U++,k++){const F=t[U];let G=0;if(C>0){const V=t[U-l];V!==0&&V!==F&&(G=s[U],_(G,s[U-l]))}if(A>0){const V=t[U-r];V!==0&&V!==F&&(G||(G=s[U]),_(G,s[U-r]))}if(k>0){const V=t[U-1];V!==0&&V!==F&&(G||(G=s[U]),_(G,s[U-1]))}}}}else{const _=d?u.minSl:0,w=d?u.maxSl:f-1;let y=_*l;for(let $=_;$<=w;$++)for(let x=0;x<i;x++)for(let S=0;S<r;S++,y++){const C=s[y];if(C===0)continue;d||(g[C]++,c&&c[C]===0&&(c[C]=t[y]));let v=C;for(;p[v]!==v;)p[v]=p[p[v]],v=p[v];if($>0){const A=s[y-l];if(A!==0&&A!==C){let k=A;for(;p[k]!==k;)p[k]=p[p[k]],k=p[k];v!==k&&(v<k?p[k]=v:(p[v]=k,v=k))}}if(x>0){const A=s[y-r];if(A!==0&&A!==C){let k=A;for(;p[k]!==k;)p[k]=p[p[k]],k=p[k];v!==k&&(v<k?p[k]=v:(p[v]=k,v=k))}}if(S>0){const A=s[y-1];if(A!==0&&A!==C){let k=A;for(;p[k]!==k;)p[k]=p[p[k]],k=p[k];v!==k&&(v<k?p[k]=v:p[v]=k)}}}}const m=new Uint32Array(n+1);for(let _=1;_<=n;_++){let w=_;for(;p[w]!==w;)w=p[w];p[_]=w,m[w]+=g[_]}let h=0,M=0;for(let _=1;_<=n;_++){const w=m[_];w>0&&w>=M&&(M=w,h=_)}return{parent:p,compSize:g,compClass:c,bestRoot:h}}applyLargestBinaryMaskInPlace(t,n,s,o){const a=t.length;if(n===0)return t.fill(0),t;const r=_n.get(s),i=r&&r.cl===n&&s.length===a;if(i&&r.conn===6&&r.distinctFgClasses<=1){let u=0,d=0;for(let g=1;g<=n;g++){const c=r.sumls[g];c>0&&c>=d&&(d=c,u=g)}if(r.runs&&r.bw===t){if(n>1){const g=r.runs,c=r.runLen;for(let p=0;p<c;p+=2){const m=g[p],h=g[p+1];for(let M=m;M<h;M++)s[M]!==u&&(t[M]=0)}}return t}if(r.fgStart>0&&t.fill(0,0,r.fgStart),r.fgEnd>=r.fgStart){for(let g=r.fgStart;g<=r.fgEnd;g++)s[g]!==u&&(t[g]=0);r.fgEnd+1<a&&t.fill(0,r.fgEnd+1)}else t.fill(0);return t}const{parent:f,bestRoot:l}=this._binaryComponentsFromLabels(t,n,s,o,!1);if(i&&r.runs&&r.bw===t){const u=r.runs,d=r.runLen;for(let g=0;g<d;g+=2){const c=u[g],p=u[g+1];for(let m=c;m<p;m++)f[s[m]]!==l&&(t[m]=0)}return t}if(i&&r.fgEnd>=r.fgStart){r.fgStart>0&&t.fill(0,0,r.fgStart);for(let u=r.fgStart;u<=r.fgEnd;u++){const d=s[u];(d===0||f[d]!==l)&&(t[u]=0)}r.fgEnd+1<a&&t.fill(0,r.fgEnd+1)}else for(let u=0;u<a;u++){const d=s[u];(d===0||f[d]!==l)&&(t[u]=0)}return t}filterHierarchicalFromLabels(t,n,s,o,a="all",r=!0,i=!1,f=null,l=!1){if(n===0)return[0,t instanceof Uint8Array?l?t:new Uint8Array(t.length):new Uint32Array(t.length)];const{parent:u,compSize:d,compClass:g,bestRoot:c}=this._binaryComponentsFromLabels(t,n,s,o,!0),p=new Uint32Array(n+1);for(let h=1;h<=n;h++)u[h]===c&&(p[h]=g[h]);const m=this._buildKeptMap(p,d,n,a,r);return this.finalize_volume(s,o,m,n,i,t,f,l)}filter18ClassFromLabels(t,n,s,o,a,r=!1,i=null,f=!1){return this.filterHierarchicalFromLabels(t,n,s,o,a,!1,r,i,f)}bwlabel(t,n,s=26,o=!1,a=!1,r=null){const i=Date.now(),f=n[0]*n[1]*n[2];if(![6,18,26].includes(s))return console.log("bwlabel: conn must be 6, 18 or 26."),[0,new Uint32Array(f)];if(n[0]<2||n[1]<2||n[2]<1)return console.log("bwlabel: img must be 2 or 3-dimensional"),[0,new Uint32Array(f)];let l;if(o){l=new Uint8Array(f);for(let m=0;m<f;m++)t[m]!==0&&(l[m]=1)}else t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Uint16Array||t instanceof Uint32Array||t instanceof Int8Array||t instanceof Int16Array||t instanceof Int32Array?t.length===f?l=t:(l=new Uint32Array(f),l.set(t.subarray(0,f))):(l=new Uint32Array(f),l.set(t));this._lastInitialRange=null,this._lastMeta=null;let[u,d,g]=this.do_initial_labelling(l,n,s,r);d===void 0&&(d=new Uint32Array(0));const[c,p]=this.translate_labels(g,n,d,u,l,this._lastInitialRange);if(this._lastMeta&&_n.set(p,this._lastMeta),console.log(s+" neighbor clustering into "+c+" regions in "+(Date.now()-i)+"ms"),a){const[m,h]=this.largest_original_cluster_labels(l,c,p);return[m,h]}return[c,p]}filter_clusters_by_rank(t,n,s,o,a=0,r=null,i=!1,f=null,l=!1,u=null){const d=t.length,g=new Uint32Array(n+1).fill(0),c=new Uint32Array(n+1).fill(0),p=f!=null&&Array.isArray(r)&&r.length===3,m=p?r[0]:0,h=p?r[1]:0,M=p?new Int32Array(n+1).fill(2147483647):null,_=p?new Int32Array(n+1).fill(-1):null,w=p?new Int32Array(n+1).fill(2147483647):null,y=p?new Int32Array(n+1).fill(-1):null,$=p?new Int32Array(n+1).fill(2147483647):null,x=p?new Int32Array(n+1).fill(-1):null;for(let U=0;U<d;U++){const F=s[U];if(F>0&&(g[F]===0&&(g[F]=t[U]),c[F]++,p)){const G=U%m,V=U/m|0,X=V%h,W=V/h|0;G<M[F]&&(M[F]=G),G>_[F]&&(_[F]=G),X<w[F]&&(w[F]=X),X>y[F]&&(y[F]=X),W<$[F]&&($[F]=W),W>x[F]&&(x[F]=W)}}let S=null,C=0;if(p){let U=-1;for(let D=1;D<=n;D++)c[D]>U&&(U=c[D],C=D);const F=Math.max(2,Math.ceil(f)+4),G=m*h,V=new Int16Array(d).fill(-1);let X=[];for(let D=0;D<d;D++)s[D]===C&&(V[D]=0,X.push(D));for(let D=1;D<=F&&X.length;D++){const T=[];for(let Y=0;Y<X.length;Y++){const E=X[Y],L=E%m,Z=(E/m|0)%h;L>0&&V[E-1]===-1&&(V[E-1]=D,T.push(E-1)),L<m-1&&V[E+1]===-1&&(V[E+1]=D,T.push(E+1)),Z>0&&V[E-m]===-1&&(V[E-m]=D,T.push(E-m)),Z<h-1&&V[E+m]===-1&&(V[E+m]=D,T.push(E+m)),E-G>=0&&V[E-G]===-1&&(V[E-G]=D,T.push(E-G)),E+G<d&&V[E+G]===-1&&(V[E+G]=D,T.push(E+G))}X=T}const W=F+1;S=new Float64Array(n+1).fill(W);for(let D=0;D<d;D++){const T=s[D];if(T>0&&T!==C){const Y=V[D]>=0?V[D]:W;Y<S[T]&&(S[T]=Y)}}l&&console.log(`[rank-filter] brain comp=${C} size=${U} bbox A[${M[C]},${_[C]}] B[${w[C]},${y[C]}] C[${$[C]},${x[C]}] | maxGap=${f} scan=${F}`)}const v=new Map;for(let U=1;U<=n;U++){const F=g[U],G=c[U];v.has(F)||v.set(F,[]),v.get(F).push({i:U,size:G})}const A=new Uint8Array(n+1).fill(0);for(const[U,F]of v.entries()){F.sort((W,D)=>D.size-W.size);const G=F.length?F[0].size:0,V=a>0?G*a:0,X=Math.min(F.length,o);for(let W=0;W<X;W++){const D=F[W];if(D.size<V){l&&W>0&&console.log(`[rank-filter] class ${U} #${W}: size=${D.size} DROP (below ${(a*100).toFixed(0)}% floor)`);break}if(W>0&&p){const T=S[D.i],Y=T<=f;if(l&&console.log(`[rank-filter] class ${U} #${W}: size=${D.size} surfDist=${T} -> ${Y?"KEEP":"DROP (too far)"}`),!Y)continue}A[D.i]=1}}const k=new Uint32Array(n+1).fill(0);for(let U=1;U<=n;U++)A[U]&&(k[U]=g[U]);return this.finalize_volume(s,r,k,n,i,t,u)}}function vr(e){if(!(e!=null&&e.length))throw new Error("Segmentation volume is empty.");let t=0;if((e instanceof Uint8Array||e instanceof Uint8ClampedArray)&&(e.byteOffset&3)===0&&e.length>=4){const n=e.length>>2,s=new Uint32Array(e.buffer,e.byteOffset,n);for(let o=0;o<n;o++){const a=s[o];a!==0&&(a&255&&t++,a&65280&&t++,a&16711680&&t++,a&4278190080&&t++)}for(let o=n<<2;o<e.length;o++)e[o]!==0&&t++}else if(e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Uint16Array||e instanceof Uint32Array)for(let n=0;n<e.length;n++)e[n]!==0&&t++;else for(let n=0;n<e.length;n++){const s=e[n];if(!Number.isFinite(s)||s<0)throw new Error(`Segmentation contains an invalid label at voxel ${n}: ${s}.`);s!==0&&t++}if(t===0)throw new Error("Segmentation volume contains no foreground labels.");if(t>e.length*.95)throw new Error(`Segmentation fills ${(100*t/e.length).toFixed(1)}% of the volume; GPU output is unusable.`)}const xr={il:null,runs:null,runLen:0,dirty:!1};function yr(e,t=.05,n=.95){const s=e.length;if(s===0)return{qmin:0,qmax:0};if(e instanceof Uint8Array||e instanceof Uint8ClampedArray){const f=Math.max(0,Math.min(s-1,Math.floor(s*t))),l=Math.max(0,Math.min(s-1,Math.ceil(s*n)-1)),u=new Uint32Array(256);for(let h=0;h<s;h++)u[e[h]]++;let d=0,g=0,c=0,p=!1,m=!1;for(let h=0;h<256;h++){const M=u[h];if(M!==0&&(d+=M,!p&&d>f&&(g=h,p=!0),!m&&d>l&&(c=h,m=!0),p&&m))break}return{qmin:g,qmax:c}}const o=Math.min(1e5,s),a=Math.max(0,Math.min(o-1,Math.floor(o*t))),r=Math.max(0,Math.min(o-1,Math.ceil(o*n)-1)),i=new Float64Array(o);if(o>=s)i.set(e);else{const f=.6180339887498949;let l=.5;for(let u=0;u<o;u++)l+=f,l>=1&&(l-=1),i[u]=e[Math.floor(l*s)]}return i.sort(),{qmin:i[a],qmax:i[r]}}function $r(e){const t=e.length;if(t===0)return{min:0,max:0};let n=e[0],s=e[0];if(e instanceof Uint8Array||e instanceof Uint8ClampedArray){for(let o=1;o<t;o++){const a=e[o];if(a<n?n=a:a>s&&(s=a),n===0&&s===255)break}return{min:n,max:s}}for(let o=1;o<t;o++){const a=e[o];a<n&&(n=a),a>s&&(s=a)}return{min:n,max:s}}function qs(e,t,n){const s=e.length,o=new Float32Array(s);if(e instanceof Uint8Array||e instanceof Uint8ClampedArray){const a=new Float32Array(256);for(let r=0;r<256;r++)a[r]=(r-t)/n;for(let r=0;r<s;r++)o[r]=a[e[r]];return o}for(let a=0;a<s;a++)o[a]=(e[a]-t)/n;return o}function ro(e,t,n,s){const o=t[0]|0,a=t[1]|0,r=t[2]|0,i=o*a*r,f=new s(i);if(n[0]===2&&n[1]===1&&n[2]===0&&i===e.length){const h=a*r,M=a*o,_=16;for(let w=0;w<a;w++){const y=w*r,$=w*o;for(let x=0;x<o;x+=_){const S=Math.min(x+_,o);for(let C=0;C<r;C+=_){const v=Math.min(C+_,r);for(let A=x;A<S;A++){let k=A*h+y+C,U=C*M+$+A;for(let F=C;F<v;F++,k++,U+=M)f[U]=e[k]}}}}return f}const l=[o,a,r],u=[l[n[0]],l[n[1]],l[n[2]]],d=[a*r,r,1],g=d[n[0]],c=d[n[1]],p=d[n[2]];let m=0;for(let h=0;h<u[0];h++){const M=h*g;for(let _=0;_<u[1];_++){const w=M+_*c;for(let y=0;y<u[2];y++,m++)f[m]=e[w+y*p]}}return f}function kn(e,t=[256,256,256],n=[2,1,0]){return ro(e,t,n,Float32Array)}function Sr(e,t=[256,256,256],n=[2,1,0]){return ro(e,t,n,Uint8Array)}function cs(e){const t=new Uint32Array(256);for(let n=0;n<e.length;n++)t[e[n]]++;return t}function kr(e){const t=cs(e);let n=0;for(let s=0;s<256;s++)t[s]>0&&n++;return n}function Is(e,t=!1,n="output"){let s=0,o=1/0,a=-1/0;if(!t&&(e instanceof Uint8Array||e instanceof Uint8ClampedArray)){if(e.length>0){let r=255,i=0,f=0;if((e.byteOffset&3)===0&&e.length>=4){const l=e.length>>2,u=new Uint32Array(e.buffer,e.byteOffset,l);for(let d=0;d<l;d++){const g=u[d];if(g===0){r=0;continue}const c=g&255,p=g>>>8&255,m=g>>>16&255,h=g>>>24;s+=c+p+m+h,c<r&&(r=c),c>i&&(i=c),p<r&&(r=p),p>i&&(i=p),m<r&&(r=m),m>i&&(i=m),h<r&&(r=h),h>i&&(i=h)}f=l<<2}for(let l=f;l<e.length;l++){const u=e[l];s+=u,u<r&&(r=u),u>i&&(i=u)}o=r,a=i}}else for(let r=0;r<e.length;r++){const i=e[r];if(!Number.isFinite(i))throw new Error(`Model ${n} contains NaN or Inf values.`);s+=i,i<o&&(o=i),i>a&&(a=i)}if(console.log(`${t?"Probability":"Segmentation"} volume sum: ${s}`),s===0)throw new Error(t?"Model probability output is all zeros. This may indicate an issue with WebGPU shaders or input data.":"Model produced an empty segmentation (all zeros). This may indicate an issue with WebGPU shaders or input data.");if(t&&(o<-1e-6||a>1+1e-6))throw new Error(`Probability output values out of range [0, 1]: min=${o.toFixed(4)}, max=${a.toFixed(4)}`);return{sum:s,min:o,max:a}}function Mr(e,t,n,s,o=null,a=null){return Be(this,null,function*(){const r=!!(e&&typeof e.data=="function");let i,f;r?(console.log("Downloading segmentation data from GPU to CPU..."),i=yield e.data(),f=e.shape||a||[256,256,256],console.log("Data download complete. Starting CPU processing.")):(i=e,f=a||[256,256,256]),vr(i);let l,u=!1;if(i instanceof Uint8Array)l=i,u=!r;else{let g=0;for(let c=0;c<i.length;c++)i[c]>g&&(g=i[c]);l=g<=255?new Uint8Array(i):new Uint32Array(i),u=!0}let d=null;if(s.isPostProcessEnable){console.log("Applying CPU-based connected-component labeling...");const g=performance.now(),c=new wr,p=[5,14,15,58,59,60,598,608],m=!!s.fillSuppressedWithNeighborLabel||p.includes(n.id),h=[5,14,15,58,59,60,598,608],M=C=>C>=1&&C<=34?1:C>=35&&C<=68?2:0,_=h.includes(n.id)?M:null,w=f[0]*f[1]*f[2],y=Math.max(1e5,Math.floor(w*.01)),[$,x]=c.bwlabel(l,f,6,!1,!1,xr);if(d=c.getLabelMeta(x),$>y){const C=`Segmentation produced noise: ${$.toLocaleString()} disconnected regions (cap ${y.toLocaleString()}). The model output is unusable, so post-processing was aborted. Try re-running, switching backend (WebGPU/WebGL2), or another model.`;console.error("[postprocess] "+C);const v=new Error(C);throw v.code="SEGMENTATION_NOISE",v}if([1,7].includes(n.id)){const[k,U]=c.filter_clusters_by_rank(l,$,x,2,.02,f,m,8,!1,_);l=U,u=!0}else if([3,8,9,21,38,218].includes(n.id)){const C=new Set([1,2,5,6,13]),[v,A]=c.filter18ClassFromLabels(l,$,x,f,C,m,_,u);l=A,u=!0}else if([5,14,15,58,59,60,598,608].includes(n.id)){s.diagnoseEnclosedComponents&&c.diagnose_components(l,$,x,f,{label:`model${n.id}`,topN:60});const[C,v]=c.filterHierarchicalFromLabels(l,$,x,f,"all",!0,m,_,u);l=v,u=!0}else u||(l=l.slice(),u=!0),c.applyLargestBinaryMaskInPlace(l,$,x,f);const S=((performance.now()-g)/1e3).toFixed(4);console.log(`Connected-component labeling took: ${S} seconds.`)}switch(n.type){case"Brain_Masking":{const g=new Uint8Array(l.length);if(d&&d.runs){const c=d.runs,p=d.runLen;for(let m=0;m<p;m+=2){const h=c[m],M=c[m+1];for(let _=h;_<M;_++)l[_]!==0&&(g[_]=1)}}else for(let c=0;c<l.length;c++)g[c]=l[c]!==0?1:0;return g}case"Brain_Extraction":{const g=new Uint8Array(l.length),c=o?new Uint8Array(l.length):null;if(d&&d.runs){const p=d.runs,m=d.runLen;for(let h=0;h<m;h+=2){const M=p[h],_=p[h+1];for(let w=M;w<_;w++)l[w]!==0&&(g[w]=t[w],c&&(c[w]=1))}}else for(let p=0;p<l.length;p++){const m=l[p]!==0?1:0;g[p]=t[p]*m,c&&(c[p]=m)}return o&&(o.mask=c),g}default:return l instanceof Uint8Array?l:new Uint8Array(l)}})}const Ar={WEBGPU:"webgpu"};function Pr(e,t){return{startTime:Date.now(),Model_Name:(e==null?void 0:e.modelName)||"Unknown",Execution_Mode:t,TF_Backend:"webgpu",isModelFullVol:null,No_SubVolumes:1,Brainchop_Ver:"FullVolume",Input_Shape:null,Output_Shape:null,Channel_Last:null,Model_Param:null,Model_Layers:null,Actual_Labels:null,Expect_Labels:null,NumLabels_Match:null,Missing_Labels:null,Preprocess_t:null,Setup_t:null,Inference_t:null,Postprocess_t:null,Display_t:null,Status:null,Error_Type:null,Extra_Err_Info:null}}function zr(e,t,n,s=null){e.Expect_Labels=t,e.Actual_Labels=n,e.NumLabels_Match=t===n,s&&s.length>0&&(e.Missing_Labels=s.join(", "))}function Cr(e,t,n,s=null){e.Inference_t=t,e.Postprocess_t=n,s&&(s.Preprocess_t!==void 0&&(e.Preprocess_t=s.Preprocess_t),s.Setup_t!==void 0&&(e.Setup_t=s.Setup_t),s.Display_t!==void 0&&(e.Display_t=s.Display_t)),e.Status="OK"}function Br(e,t,n=null){e.Inference_t=1/0,e.Postprocess_t=1/0,e.Status="Fail",e.Error_Type=(t==null?void 0:t.message)||String(t),n&&(e.Extra_Err_Info=n)}const Tt=1e-8;function sn(e,t,n){return Math.max(t,Math.min(n,e))}function Fr(e){return e.outputType==="probability"&&e.probabilityPostprocess==="cat-lite"}function Lr(e,t,n){const[s,o,a]=e,r=s.length,i=new Uint8Array(r);let f=0;for(let y=0;y<r;y++)Math.max(0,s[y])+Math.max(0,o[y])+Math.max(0,a[y])>=n&&(i[y]=1,f++);const[l,u,d]=t;if(l<2||u<2||d<1)return{componentCount:0,removedVoxels:0,supportMask:i};const g=l===256&&u===256,c=new Uint32Array(f),p=l*u;let m=0,h=0,M=0,_=0;for(let y=0;y<r;y++){if(i[y]!==1)continue;_++;const $=m;c[m++]=y,i[y]=2;for(let x=$;x<m;x++){const S=c[x],C=g?S&255:S%l,v=g?S>>>8&255:Math.floor(S/l)%u;C>0&&i[S-1]===1&&(i[S-1]=2,c[m++]=S-1),C+1<l&&i[S+1]===1&&(i[S+1]=2,c[m++]=S+1),v>0&&i[S-l]===1&&(i[S-l]=2,c[m++]=S-l),v+1<u&&i[S+l]===1&&(i[S+l]=2,c[m++]=S+l),S>=p&&i[S-p]===1&&(i[S-p]=2,c[m++]=S-p),S+p<r&&i[S+p]===1&&(i[S+p]=2,c[m++]=S+p)}m-$>=M-h&&(h=$,M=m)}let w=0;if(_>1)for(let y=0;y<m;y++){if(y>=h&&y<M)continue;const $=c[y];s[$]=0,o[$]=0,a[$]=0,i[$]=0,w++}return{componentCount:_,removedVoxels:w,supportMask:i}}function Ur([e,t,n],s,{minSupport:o,priorPower:a},r=null){const i=!!(r&&o>0&&o<=1);let f=0;for(let m=0;m<s.length;m++){if(i&&r[m]!==2)continue;const h=Math.max(0,e[m])+Math.max(0,t[m])+Math.max(0,n[m]);Math.min(h,1)>=o&&Number.isFinite(s[m])&&f++}const l=new Uint32Array(f),u=new Float64Array(f),d=f*36<=192*Et(2,20)?f:0,g=new Float64Array(d),c=new Float64Array(d),p=new Float64Array(d);for(let m=0,h=0;m<s.length;m++){if(i&&r[m]!==2)continue;const M=Math.max(0,e[m]),_=Math.max(0,t[m]),w=Math.max(0,n[m]),y=M+_+w,$=Math.min(y,1);!($>=o)||!Number.isFinite(s[m])||(l[h]=m,u[h]=s[m]-0,d&&(g[h]=$*Math.pow(w/y,a),c[h]=$*Math.pow(M/y,a),p[h]=$*Math.pow(_/y,a)),h++)}return{indices:l,values:u,weightCsf:g,weightGm:c,weightWm:p,volumes:[e,t,n]}}function Ts([e,t,n],s,o,a){const r=Math.max(0,e[s]),i=Math.max(0,t[s]),f=Math.max(0,n[s]),l=r+i+f,u=Math.min(l,1);a[0]=u*Math.pow(f/l,o),a[1]=u*Math.pow(r/l,o),a[2]=u*Math.pow(i/l,o)}function Gs({indices:e,values:t,weightCsf:n,weightGm:s,weightWm:o,volumes:a},{minSeparation:r,sigmaFloor:i,priorPower:f},l=!1){const u=n.length===0?new Float64Array(3):null,d=new Float64Array(3),g=new Float64Array(3);for(let h=0;h<t.length;h++){const M=t[h];u&&Ts(a,e[h],f,u);const _=u?u[0]:n[h],w=u?u[1]:s[h],y=u?u[2]:o[h];d[0]+=_*M,g[0]+=_,d[1]+=w*M,g[1]+=w,d[2]+=y*M,g[2]+=y}if(g.some(h=>h<100))return{applied:!1,reason:"too few high-confidence tissue voxels"};const c=Array.from(d,(h,M)=>h/g[M]);if(!(c[0]+r<c[1]&&c[1]+r<c[2]))return{applied:!1,reason:`implausible T1 tissue ordering (${c.map(h=>h.toFixed(3)).join(", ")})`};if(l)return{applied:!0,means:c};const p=new Float64Array(3);for(let h=0;h<t.length;h++){const M=t[h];u&&Ts(a,e[h],f,u);const _=u?u[0]:n[h],w=u?u[1]:s[h],y=u?u[2]:o[h],$=M-c[0],x=M-c[1],S=M-c[2];p[0]+=_*$*$,p[1]+=w*x*x,p[2]+=y*S*S}const m=Array.from(p,(h,M)=>Math.sqrt(Math.max(i*i,h/g[M])));return{applied:!0,means:c,sigmas:m}}function Wr(e,t,n,s,{minSupport:o,block:a,smoothingPasses:r},i=null){const[f,l,u]=e,[d,g,c]=n,p=!!(i&&o>0&&o<=1),m=Math.ceil(d/a),h=Math.ceil(g/a),M=Math.ceil(c/a),_=m*h*M,w=new Float64Array(_),y=new Float64Array(_),[$,x,S]=s,C=d*g;for(let X=0;X<c;X++){const W=Math.floor(X/a);for(let D=0;D<g;D++){const T=Math.floor(D/a);let Y=X*C+D*d;const E=(W*h+T)*m;for(let L=0;L<d;L++,Y++){if(p&&i[Y]!==2)continue;const N=Math.max(0,f[Y]),Z=Math.max(0,l[Y]),O=Math.max(0,u[Y]),ce=N+Z+O,fe=Math.min(ce,1);if(!(fe>=o)||!Number.isFinite(t[Y]))continue;const ye=N/ce,we=Z/ce,_e=O/ce,K=_e*$+ye*x+we*S,ae=fe*(_e*_e+ye*ye+we*we),z=E+Math.floor(L/a);w[z]+=ae*(t[Y]-K),y[z]+=ae}}}let v=new Float32Array(_),A=new Uint8Array(_);for(let X=0;X<_;X++)y[X]>1&&(v[X]=w[X]/y[X],A[X]=1);for(let X=0;X<r;X++){const W=new Float32Array(_),D=new Uint8Array(_);for(let T=0;T<M;T++)for(let Y=0;Y<h;Y++)for(let E=0;E<m;E++){let L=0,N=0;for(let O=-1;O<=1;O++){const ce=T+O;if(!(ce<0||ce>=M))for(let fe=-1;fe<=1;fe++){const ye=Y+fe;if(!(ye<0||ye>=h))for(let we=-1;we<=1;we++){const _e=E+we;if(_e<0||_e>=m)continue;const K=(ce*h+ye)*m+_e;A[K]&&(L+=v[K],N++)}}}const Z=(T*h+Y)*m+E;N>0&&(W[Z]=L/N,D[Z]=1)}v=W,A=D}const k=(X,W)=>{const D=new Int32Array(X),T=new Int32Array(X),Y=new Float32Array(X);for(let E=0;E<X;E++){const L=sn((E+.5)/a-.5,0,W-1);D[E]=Math.floor(L),T[E]=Math.min(D[E]+1,W-1),Y[E]=L-D[E]}return{low:D,high:T,t:Y}},U=k(d,m),F=k(g,h),G=k(c,M),V=d===256&&g===256;return X=>{let W,D,T;if(V)T=X>>>16,D=X>>>8&255,W=X&255;else{T=Math.floor(X/C);const oe=X-T*C;D=Math.floor(oe/d),W=oe-D*d}const Y=U.low[W],E=U.high[W],L=U.t[W],N=(G.low[T]*h+F.low[D])*m,Z=(G.low[T]*h+F.high[D])*m,O=(G.high[T]*h+F.low[D])*m,ce=(G.high[T]*h+F.high[D])*m,fe=v[N+Y]+(v[N+E]-v[N+Y])*L,ye=v[Z+Y]+(v[Z+E]-v[Z+Y])*L,we=v[O+Y]+(v[O+E]-v[O+Y])*L,_e=v[ce+Y]+(v[ce+E]-v[ce+Y])*L,K=F.t[D],ae=fe+(ye-fe)*K,z=we+(_e-we)*K;return ae+(z-ae)*G.t[T]}}function $n(e,t,n,s){const o=(e-t)/n;return-.5*o*o-s}function Rr(e,t,n,s={}){const{catLiteMinSupport:o=.03,catLitePurePriorPower:a=3,catLiteMinMeanSeparation:r=.035,catLiteSigmaFloor:i=.025,catLiteBiasBlockSize:f=16,catLiteBiasSmoothPasses:l=3,catLitePriorStrength:u=.8,catLiteIntensityStrength:d=.75,catLiteMixelPrior:g=.35,catLiteCsfWmMixelPrior:c=6,catLiteSpatialWeight:p=.25}=s,m={priorPower:a,minSupport:o,minSeparation:r,sigmaFloor:i},[h,M,_]=n,w=t.length,y=o>0&&o<=1,{componentCount:$,removedVoxels:x,supportMask:S}=Lr(e,n,o),C={componentCount:$,removedVoxels:x},v=Ur(e,t,m,S),A=Gs(v,m,!0);if(!A.applied)return{tissues:e,stats:A};const k=Wr(e,t,n,A.means,{minSupport:o,block:f,smoothingPasses:l},S);for(let H=0;H<v.indices.length;H++){const J=v.indices[H];v.values[H]=t[J]-k(J)}const U=Gs(v,m);if(!U.applied)return{tissues:e,stats:U};v.indices=v.weightCsf=v.weightGm=v.weightWm=null;const[F,G,V]=U.means,[X,W,D]=U.sigmas,[T,Y,E]=e,L=new Float32Array(w),N=new Float32Array(w),Z=new Float32Array(w),O=h*M,ce=.5*(F+G),fe=.5*(G+V),ye=.5*(F+V),we=Math.sqrt(Et(G-F,2)/12+.5*(Et(X,2)+Et(W,2))),_e=Math.sqrt(Et(V-G,2)/12+.5*(Et(W,2)+Et(D,2))),K=Math.sqrt(Et(V-F,2)/12+.5*(Et(X,2)+Et(D,2))),ae=Math.log(X),z=Math.log(W),oe=Math.log(D),R=Math.log(we),ue=Math.log(_e),te=Math.log(K);let Q=0;for(let H=0;H<_;H++)for(let J=0;J<M;J++){let q=H*O+J*h;for(let ke=0;ke<h;ke++,q++){if(y&&S[q]!==2)continue;const be=Math.max(0,T[q]),Le=Math.max(0,Y[q]),Ce=Math.max(0,E[q]),Ee=be+Le+Ce,Ie=Math.min(Ee,1);if(!(Ie>=o)||!Number.isFinite(t[q]))continue;let He=be/Ee,Ne=Le/Ee,Ue=Ce/Ee;if(p>0){let xt=0,Ct=0,b=0,P=0;if(ke>0){const B=q-1,ne=Math.max(0,T[B]),j=Math.max(0,Y[B]),pe=Math.max(0,E[B]),ie=ne+j+pe;ie>Tt&&(xt+=ne/ie,Ct+=j/ie,b+=pe/ie,P++)}if(ke+1<h){const B=q+1,ne=Math.max(0,T[B]),j=Math.max(0,Y[B]),pe=Math.max(0,E[B]),ie=ne+j+pe;ie>Tt&&(xt+=ne/ie,Ct+=j/ie,b+=pe/ie,P++)}if(J>0){const B=q-h,ne=Math.max(0,T[B]),j=Math.max(0,Y[B]),pe=Math.max(0,E[B]),ie=ne+j+pe;ie>Tt&&(xt+=ne/ie,Ct+=j/ie,b+=pe/ie,P++)}if(J+1<M){const B=q+h,ne=Math.max(0,T[B]),j=Math.max(0,Y[B]),pe=Math.max(0,E[B]),ie=ne+j+pe;ie>Tt&&(xt+=ne/ie,Ct+=j/ie,b+=pe/ie,P++)}if(H>0){const B=q-O,ne=Math.max(0,T[B]),j=Math.max(0,Y[B]),pe=Math.max(0,E[B]),ie=ne+j+pe;ie>Tt&&(xt+=ne/ie,Ct+=j/ie,b+=pe/ie,P++)}if(H+1<_){const B=q+O,ne=Math.max(0,T[B]),j=Math.max(0,Y[B]),pe=Math.max(0,E[B]),ie=ne+j+pe;ie>Tt&&(xt+=ne/ie,Ct+=j/ie,b+=pe/ie,P++)}if(P){const B=1-p;He=B*He+p*xt/P,Ne=B*Ne+p*Ct/P,Ue=B*Ue+p*b/P}}const Pe=v.values[Q++],De=u*Math.log(Ue+Tt)+d*$n(Pe,F,X,ae),rt=u*Math.log(He+Tt)+d*$n(Pe,G,W,z),et=u*Math.log(Ne+Tt)+d*$n(Pe,V,D,oe),tt=u*Math.log(g*2*Math.sqrt(Ue*He)+Tt)+d*$n(Pe,ce,we,R),Bt=u*Math.log(g*2*Math.sqrt(He*Ne)+Tt)+d*$n(Pe,fe,_e,ue),jt=u*Math.log(c*2*Math.sqrt(Ue*Ne)*Et(1-He,2)+Tt)+d*$n(Pe,ye,K,te),At=Math.max(De,rt,et,tt,Bt,jt),Zt=Math.exp(De-At),kt=Math.exp(rt-At),Ft=Math.exp(et-At),Lt=Math.exp(tt-At),Ut=Math.exp(Bt-At),mt=Math.exp(jt-At),Pt=Zt+kt+Ft+Lt+Ut+mt,Wt=sn((Pe-F)/(G-F),0,1),Qt=sn((V-Pe)/(V-G),0,1),ln=sn((Pe-F)/(V-F),0,1),Rt=(kt+Lt*Wt+Ut*Qt)/Pt,gt=(Ft+Ut*(1-Qt)+mt*ln)/Pt,Mt=(Zt+Lt*(1-Wt)+mt*(1-ln))/Pt,nt=Math.min(Ue,Ne),le=sn((nt-He)/(nt+Tt),0,1),st=sn(4*Ue*Ne,0,1),vt=Et(1-st*le,2);L[q]=sn(Rt*Ie*vt,0,1);const zt=(1-Rt*vt)/Math.max(gt+Mt,Tt);N[q]=sn(gt*zt*Ie,0,1),Z[q]=sn(Mt*zt*Ie,0,1)}}return{tissues:[L,N,Z],stats:{applied:!0,tissueMeans:{csf:F,gray:G,white:V},tissueSigmas:{csf:X,gray:W,white:D},supportCleanup:C}}}const qr={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Ir({srcImg:e,srcDims:t,srcAffine:n,dstDims:s,dstAffine:o,isLabel:a,isProbability:r=!1,dstTypedArrayKind:i="Uint8Array",labelLut:f=null}){const[l,u,d]=s,[g,c,p]=t,m=o,h=(T,Y)=>[T[0][0]*Y[0]+T[0][1]*Y[1]+T[0][2]*Y[2]+T[0][3],T[1][0]*Y[0]+T[1][1]*Y[1]+T[1][2]*Y[2]+T[1][3],T[2][0]*Y[0]+T[2][1]*Y[1]+T[2][2]*Y[2]+T[2][3]],M=er();if(!tr(M,nr(...n[0],...n[1],...n[2],...n[3])))throw new Error("Segmentation affine is not invertible");const _=(T,Y)=>[T[0]*Y[0]+T[1]*Y[1]+T[2]*Y[2]+T[3],T[4]*Y[0]+T[5]*Y[1]+T[6]*Y[2]+T[7],T[8]*Y[0]+T[9]*Y[1]+T[10]*Y[2]+T[11]],w=T=>_(M,h(m,T)),y=w([0,0,0]),$=w([1,0,0]).map((T,Y)=>T-y[Y]),x=w([0,1,0]).map((T,Y)=>T-y[Y]),S=w([0,0,1]).map((T,Y)=>T-y[Y]),C=l*u*d,v=g*c,A=(T,Y,E)=>T>=0&&T<g&&Y>=0&&Y<c&&E>=0&&E<p?e[T+Y*g+E*v]:0;if(a){const T=[];for(const ce of[-.25,.25])for(const fe of[-.25,.25])for(const ye of[-.25,.25])T.push([ce*$[0]+fe*x[0]+ye*S[0],ce*$[1]+fe*x[1]+ye*S[1],ce*$[2]+fe*x[2]+ye*S[2]]);const Y=new Int16Array(C),E=f?f.length:0;let L=0;const N=new Int32Array(8),Z=new Int32Array(8);let O=0;for(let ce=0;ce<d;ce++)for(let fe=0;fe<u;fe++){let ye=y[0]+fe*x[0]+ce*S[0],we=y[1]+fe*x[1]+ce*S[1],_e=y[2]+fe*x[2]+ce*S[2];for(let K=0;K<l;K++){let ae=0;for(let R=0;R<8;R++){const ue=A(Math.round(ye+T[R][0]),Math.round(we+T[R][1]),Math.round(_e+T[R][2]));let te=-1;for(let Q=0;Q<ae;Q++)if(N[Q]===ue){te=Q;break}te<0?(N[ae]=ue,Z[ae]=1,ae++):Z[te]++}let z=N[0],oe=Z[0];for(let R=1;R<ae;R++)Z[R]>oe&&(oe=Z[R],z=N[R]);f&&z>=0&&z<E&&(z=f[z]),z>L&&(L=z),Y[O++]=z,ye+=$[0],we+=$[1],_e+=$[2]}}return{img:Y,hdrPatch:{datatypeCode:4,numBitsPerVoxel:16,scl_slope:1,scl_inter:0,cal_min:0,cal_max:L,intent_code:1002}}}const k=qr[i]||Uint8Array,U=r?255:1,F=r?.5:0,G=r?new Uint8Array(C):new k(C),X=r?(T,Y,E)=>{const L=Math.floor(T),N=Math.floor(Y),Z=Math.floor(E),O=T-L,ce=Y-N,fe=E-Z,ye=A(L,N,Z),we=A(L+1,N,Z),_e=A(L,N+1,Z),K=A(L+1,N+1,Z),ae=A(L,N,Z+1),z=A(L+1,N,Z+1),oe=A(L,N+1,Z+1),R=A(L+1,N+1,Z+1),ue=ye+O*(we-ye),te=_e+O*(K-_e),Q=ae+O*(z-ae),H=oe+O*(R-oe),J=ue+ce*(te-ue),q=Q+ce*(H-Q);return J+fe*(q-J)}:(T,Y,E)=>A(Math.round(T),Math.round(Y),Math.round(E));let W=0;for(let T=0;T<d;T++)for(let Y=0;Y<u;Y++){let E=y[0]+Y*x[0]+T*S[0],L=y[1]+Y*x[1]+T*S[1],N=y[2]+Y*x[2]+T*S[2];for(let Z=0;Z<l;Z++)G[W++]=X(E,L,N)*U+F,E+=$[0],L+=$[1],N+=$[2]}const D=r?{datatypeCode:2,numBitsPerVoxel:8,cal_min:0,cal_max:1,scl_slope:1/U,scl_inter:0}:{scl_slope:1,scl_inter:0};return{img:G,hdrPatch:D}}function Tr(e){return new Worker(""+new URL("postprocess-worker-CugCC9CK.js",import.meta.url).href,{name:e==null?void 0:e.name})}let rn=null,Gr=1;const Bn=new Map;function Nr(e){for(const{reject:t}of Bn.values())t(e);Bn.clear()}function Ns(e){if(rn){try{rn.terminate()}catch(t){}rn=null}e&&Nr(e)}function Or(){return typeof Worker=="undefined"?null:(rn||(rn=new Tr({}),rn.onmessage=e=>{const{id:t,ok:n,result:s,error:o}=e.data||{},a=Bn.get(t);if(a)if(Bn.delete(t),n)a.resolve(s);else{const r=new Error((o==null?void 0:o.message)||"Postprocessing worker failed");o!=null&&o.code&&(r.code=o.code),a.reject(r)}},rn.onerror=e=>{const t=(e==null?void 0:e.message)||"Postprocessing worker crashed";Ns(new Error(t))},rn.onmessageerror=()=>{Ns(new Error("Postprocessing worker message deserialization failed"))}),rn)}function ws(e,t,n=[]){const s=Or();if(!s)return null;const o=Gr++;return new Promise((a,r)=>{Bn.set(o,{resolve:a,reject:r});try{s.postMessage({id:o,cmd:e,payload:t},n)}catch(i){Bn.delete(o),r(i)}})}function ao(e){return e&&ArrayBuffer.isView(e)&&e.buffer instanceof ArrayBuffer&&e.byteOffset===0&&e.byteLength===e.buffer.byteLength}function Er(i,f,l,u){return Be(this,arguments,function*(e,t,n,s,o=null,a=null,{transferLabels:r=!1}={}){if(typeof Worker=="undefined")return Mr(e,t,n,s,o,a);const d=(n==null?void 0:n.type)==="Brain_Extraction",g={nativeLabels:e,niftiImage:d?t:null,modelEntry:{id:n==null?void 0:n.id,type:n==null?void 0:n.type},opts:{isPostProcessEnable:!!(s!=null&&s.isPostProcessEnable),fillSuppressedWithNeighborLabel:!!(s!=null&&s.fillSuppressedWithNeighborLabel),diagnoseEnclosedComponents:!!(s!=null&&s.diagnoseEnclosedComponents)},wantMask:!!o,shape:a||[256,256,256]},c=r&&ao(e)?[e.buffer]:[],p=yield ws("processSegmentation",g,c);return o&&p.mask&&(o.mask=p.mask),p.outImg})}function Dr(e){return Be(this,null,function*(){return typeof Worker=="undefined"?Ir(e):ws("resliceToNative",e,[])})}const Os=({csf:e,gray:t,white:n})=>`CSF=${e.toFixed(3)} GM=${t.toFixed(3)} WM=${n.toFixed(3)}`;function Vr(r,i,f,l,u){return Be(this,arguments,function*(e,t,n,s,o,a=[256,256,256]){var m;const d=[];for(let h=0;h<3;h++)d.push(yield o(e[h],h)),e[h]=null;const g={catLitePurePriorPower:n==null?void 0:n.catLitePurePriorPower,catLitePriorStrength:n==null?void 0:n.catLitePriorStrength,catLiteIntensityStrength:n==null?void 0:n.catLiteIntensityStrength,catLiteMixelPrior:n==null?void 0:n.catLiteMixelPrior,catLiteCsfWmMixelPrior:n==null?void 0:n.catLiteCsfWmMixelPrior,catLiteSpatialWeight:n==null?void 0:n.catLiteSpatialWeight,catLiteMinSupport:n==null?void 0:n.catLiteMinSupport,catLiteSigmaFloor:n==null?void 0:n.catLiteSigmaFloor,catLiteBiasBlockSize:n==null?void 0:n.catLiteBiasBlockSize,catLiteBiasSmoothPasses:n==null?void 0:n.catLiteBiasSmoothPasses,catLiteMinMeanSeparation:n==null?void 0:n.catLiteMinMeanSeparation,catLiteMinPureVoxels:n==null?void 0:n.catLiteMinPureVoxels};let c,p;if(typeof Worker=="undefined")({tissues:c,stats:p}=Rr(d,t,a,g));else{const h=new Set,M=[];for(const _ of[...d,t])ao(_)&&!h.has(_.buffer)&&(h.add(_.buffer),M.push(_.buffer));({tissues:c,stats:p}=yield ws("catLite",{priors:d,intensity:t,shape:a,options:g},M))}if(s.Output_Type="Continuous tissue probability",s.Tissue="GM/WM/CSF",s.Softmax_Temperature=(m=n==null?void 0:n.softmaxTemperature)!=null?m:1,p.applied){s.Partial_Volume="CAT-lite mixed-class PVE",s.CAT_Lite_Tissue_Means=Os(p.tissueMeans),s.CAT_Lite_Tissue_Sigmas=Os(p.tissueSigmas);const{componentCount:h,removedVoxels:M}=p.supportCleanup;console.log(`[CAT-lite] means ${s.CAT_Lite_Tissue_Means}; sigmas ${s.CAT_Lite_Tissue_Sigmas}; removed ${M} voxels outside the largest of ${h} support components`)}else s.Partial_Volume=`Skipped: ${p.reason}`,console.warn(`[CAT-lite] skipped: ${p.reason}`);return c})}const un=[1,3,5,7,13,19,31,19,13,7,5,3,1],Hr=[16,8,4,2,1,16,8,4,2,1,16,8,4,2,1,16,8,4,2,1,16,8,4,2,1],jr={model16chan18cls:{dilations:un,activation:"gelu_tanh",fullVolume:!0},model24chan18cls_gdice_prio:{dilations:un,activation:"gelu_tanh",fullVolume:!0},model6chan3cls:{dilations:un,activation:"gelu_tanh",fullVolume:!0},model24chan104cls_synth:{dilations:un,activation:"gelu_tanh",fullVolume:!0},model24chan104cls_infant_refit_synth:{dilations:un,activation:"gelu_tanh",fullVolume:!0},model24chan104cls_v3_repbn:{dilations:un,activation:"gelu_tanh",fullVolume:!0},model24chan50cls:{dilations:un,activation:"gelu_tanh",fullVolume:!0},model32chan18cls:{dilations:un,activation:"gelu_tanh",fullVolume:!1},mindgrab:{dilations:Hr,activation:"gelu_tanh",fullVolume:!0},model5_gw_ae:{dilations:[1,2,4,8,16,8,4,2,1],activation:"relu",fullVolume:!0},model11_gw_ae:{dilations:[1,2,4,8,4,2,2,1],activation:"relu",noSafetensors:!0,fullVolume:!0},model30chan18cls:{dilations:[1,2,4,8,16,8,4,2,1],activation:"elu",fullVolume:!0},model30chan50cls:{dilations:[1,2,4,8,16,8,4,2,1],activation:"elu",fullVolume:!0}};function Xr(e){const t=String(e.path||"").match(/\/models\/([^/]+)\//);return t?t[1]:null}function vs(e){const t=Xr(e);if(!t)return null;const n=jr[t];return!n||n.noSafetensors?null:ot({name:t},n)}function Yr(e){const t=e&32768?-1:1,n=(e&31744)>>10,s=e&1023;return n===0?t*Math.pow(2,-14)*(s/1024):n===31?s?NaN:t*(1/0):t*Math.pow(2,n-15)*(1+s/1024)}function io(e){const t=new DataView(e),n=Number(t.getBigUint64(0,!0)),s=JSON.parse(new TextDecoder().decode(new Uint8Array(e,8,n))),o=8+n,a={};for(const[r,i]of Object.entries(s)){if(r==="__metadata__"){a.__metadata__=i;continue}const[f,l]=i.data_offsets,u=i.shape.reduce((g,c)=>g*c,1);let d;if(i.dtype==="F32")d=new Float32Array(e.slice(o+f,o+l));else if(i.dtype==="F16"){const g=new Uint16Array(e.slice(o+f,o+l));d=new Float32Array(u);for(let c=0;c<u;c++)d[c]=Yr(g[c])}else if(i.dtype==="BF16"){const g=new Uint16Array(e.slice(o+f,o+l));d=new Float32Array(u);const c=new Uint32Array(1),p=new Float32Array(c.buffer);for(let m=0;m<u;m++)c[0]=g[m]<<16,d[m]=p[0]}else throw new Error(`safetensors: unsupported dtype ${i.dtype} for tensor '${r}'`);if(d.length!==u)throw new Error(`safetensors: tensor '${r}' has ${d.length} values, shape says ${u}`);a[r]={dtype:i.dtype,shape:i.shape,data:d}}return a}function lo(e){const t=[],n=[],s=[];for(const[a,r]of Object.entries(e)){if(a==="__metadata__")continue;const i=a.match(/^m\.model\.(\d+)\.(weight|bias)$/);if(!i)continue;const f=Number(i[1]),l=i[2]==="weight";if(r.shape.length===5){const[u,d,g,c,p]=r.shape,h={idx:f,outC:u,inC:d,kd:g,kh:c,kw:p,is1x1:g===1&&c===1&&p===1,w:r.data,bias:null},M=t.find(_=>_.idx===f);M?Object.assign(M,h):t.push(h)}else r.shape.length===1&&s.push({idx:f,isW:l,data:r.data,len:r.shape[0]})}t.sort((a,r)=>a.idx-r.idx);for(const a of s){const r=t.find(f=>f.idx===a.idx);if(r&&!a.isW){r.bias=a.data;continue}if(r&&a.isW)continue;let i=n.find(f=>f.idx===a.idx);i||(i={idx:a.idx,scale:null,bias:null},n.push(i)),a.isW?i.scale=a.data:i.bias=a.data}n.sort((a,r)=>a.idx-r.idx);let o=null;return t.length&&t[t.length-1].is1x1&&(o=t.pop()),{convs:t,affines:n,classifier:o}}function Kr(e,t){var n;if(t==null)return e;if(t.length!==((n=e.classifier)==null?void 0:n.outC)||!Array.from(t).every(Number.isFinite))throw new Error("Classifier bias must contain one finite value per exported class");return e.classifier.bias=Float32Array.from(t),e}function Zr(e,t){const n=t.cs,s=t.chan,{convs:o,affines:a,classifier:r}=e,i=c=>27*c*n;let f=0;const l=[];o.forEach((c,p)=>{const m=p===0?1:n,h={wq:f/4,inCS:m};f+=i(m),c.bias&&(h.biasQ=f/4,f+=n),l.push(h)}),a.forEach((c,p)=>{l[p]=l[p]||{},l[p].affQ=f/4,f+=n,l[p].affBiasQ=f/4,f+=n});let u=-1,d=-1;r&&(u=f,f+=s*t.nclass,f=Math.ceil(f/4)*4,r.bias&&(d=f,f+=t.nclass),f=Math.ceil(f/4)*4);const g=new Float32Array(f);if(o.forEach((c,p)=>{const m=l[p],h=m.inCS,M=m.wq*4,_=c.kd*c.kh*c.kw;if(c.outC>s||p>0&&c.inC>s)throw new Error(`layer ${p}: shape ${c.outC}x${c.inC} exceeds CHAN ${s}`);for(let w=0;w<c.outC;w++){for(let y=0;y<c.inC;y++)for(let $=0;$<c.kd;$++)for(let x=0;x<c.kh;x++)for(let S=0;S<c.kw;S++){const C=c.kd===3?$*9+x*3+S:0,v=(((w*c.inC+y)*c.kd+$)*c.kh+x)*c.kw+S;g[M+(C*h+y)*n+w]=c.w[v]}c.bias&&(g[m.biasQ*4+w]=c.bias[w])}if(_!==27&&_!==1)throw new Error(`layer ${p}: kernel ${c.kd}x${c.kh}x${c.kw} unsupported`)}),a.forEach((c,p)=>{const m=l[p];for(let h=0;h<s;h++)g[m.affQ*4+h]=c.scale?c.scale[h]:0,g[m.affBiasQ*4+h]=c.bias?c.bias[h]:0}),r)for(let c=0;c<t.nclass;c++){for(let p=0;p<s;p++)g[u+p*t.nclass+c]=r.w[c*r.inC+p];r.bias&&(g[d+c]=r.bias[c])}return{data:g,offsets:{layers:l,clsFloat:u,clsBiasFloat:d}}}function uo(e,t={}){const{convs:n,affines:s,classifier:o}=e,a=n[0].outC,r=Math.ceil(a/4)*4,i=n.some(l=>l.bias),f=ot({chan:a,cs:r,planes:r/4,nclass:o?o.outC:0,nhidden:n.length-1,norm:s.length?"gn":i?"none":"gn",affine:s.length>0,convBias:i,classifierBias:!!(o&&o.bias),centeredVariance:!1,eps:1e-5},t);if(f.nclass>256)throw new Error(`classifier has ${f.nclass} classes; the RGBA8 label texture holds at most 256`);if(!f.activation)throw new Error("descriptor needs an explicit `activation`");if(!f.dilations)throw new Error("descriptor needs an explicit `dilations` array");if(f.dilations.length!==n.length)throw new Error(`descriptor has ${f.dilations.length} dilations for ${n.length} convs`);return f}const Qn=(e,t)=>Array.from({length:e},(n,s)=>t(s)).join(""),Es=["x","y","z","w"];function Qr(e){const t=`fn act4(x : vec4<f32>) -> vec4<f32> {
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
`;default:throw new Error(`webgpu-native: unknown activation '${e}'; add it deliberately`)}}function Jr(e,t,n){const s=e.cs/4,o=l=>Qn(n,l),a=l=>Qn(s,l),r=a(l=>`          let w${l} = vec4<f32>(wts4[wq + ${l}u]);
`),i=l=>`        { let wq = wq0 + ((tap * cin) + ic4 * 4u + ${l}u) * (CS / 4u);
`+r+o(u=>a(d=>`          a${u}${d} = fma(w${d}, vec4<f32>(s${u}.${Es[l]}), a${u}${d});
`))+`        }
`,f=(e.convBias?a(l=>`  let b${l} = vec4<f32>(wts4[params.bias_off / 4u + ${l}u]);
`)+o(l=>a(u=>`  a${l}${u} = a${l}${u} + b${u};
`)):"")+(e.norm==="none"?o(l=>a(u=>`  a${l}${u} = act4(a${l}${u});
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
`+o(l=>a(u=>`  var a${l}${u} = vec4<f32>(0.0);
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
`+a(u=>`          a${l}${u} = fma(w${u}, s, a${l}${u});
`)+`        }
`)+`      } else {
      for (var ic4 : u32 = 0u; ic4 < cin4; ic4 = ic4 + 1u) {
`+o(l=>`        { let sx = x0 + ${l} + dxd;
          let q = vec4<f32>(src4[(plane + u32(clamp(sx, 0, NX - 1))) * st4 + ic4]);
          s${l} = select(vec4<f32>(0.0), q, sx >= 0 && sx < NX); }
`)+i(0)+i(1)+i(2)+i(3)+`      }
      }
    }
    tap = tap + 1u;
  }}}
`+f+`  let obase = (u32(z) * u32(NY) + u32(y)) * u32(NX) + u32(x0);
`+o(l=>`  { let o = (obase + ${l}u) * CS;
`+a(u=>Qn(4,d=>`    dst[o + ${4*u+d}u] = f16(a${l}${u}.${Es[d]});
`))+`  }
`)+`}
`}function ea(e){return`var<workgroup> wg_sum : array<f32, ${e} * CS>;
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
`}function ta(e){return`@compute @workgroup_size(${e}, 1, 1)
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
`}function na(e){return`@group(0) @binding(5) var<storage, read_write> labels : array<u32>;
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
`}function sa(e,t){var a;const{localX:n,vox:s,momLX:o}=t;if(e.cs%4!==0||e.cs>256)throw new Error(`webgpu-native: channel stride ${e.cs} unsupported`);if(e.nx%(n*s)||e.nx%n||e.nx%o)throw new Error(`webgpu-native: preset ${n}x${s}/${o} does not tile a ${e.nx}-voxel row`);if(o<e.cs)throw new Error(`webgpu-native: moments workgroup ${o} < ${e.cs} channels`);return`enable f16;
const NX : i32 = ${e.nx};
const NY : i32 = ${e.ny};
const NZ : i32 = ${e.nz};
const CS : u32 = ${e.cs}u;
const CHAN : u32 = ${e.chan}u;
const NCLASS : u32 = ${e.nclass}u;
const HAS_AFFINE : bool = ${!!e.affine};
const CLASSIFIER_BIAS : bool = ${!!e.classifierBias};
const EPS : f32 = ${Number((a=e.eps)!=null?a:1e-5).toExponential()};
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
`+Qr(e.activation)+Jr(e,n,s)+(e.norm==="gn"?ea(o)+ta(n):"")+na(n)}const Jn={amd:{localX:256,vox:1},apple:{localX:64,vox:2},default:{localX:64,vox:2}};function oa(){var e;try{const t=new URLSearchParams(((e=globalThis.location)==null?void 0:e.search)||"").get("wgPreset"),n=t&&/^(\d+)x([124])$/.exec(t);return n?{localX:Number(n[1]),vox:Number(n[2]),source:"url"}:null}catch(t){return null}}function ra(e,t){var i;const n=String(((i=e.adapterInfo)==null?void 0:i.vendor)||"").toLowerCase(),s=e.limits,o=f=>f.localX<=s.maxComputeInvocationsPerWorkgroup&&f.localX<=s.maxComputeWorkgroupSizeX&&t.nx%(f.localX*f.vox)===0;let a=oa()||$t(ot({},Jn[n]||Jn.default),{source:n||"default"});o(a)||(console.warn(`[WebGPU-native] preset ${a.localX}x${a.vox} does not fit this device; using the default`),a=$t(ot({},Jn.default),{source:"fallback"}));let r=0;for(const f of[256,128,64,32])if(f<=a.localX&&f>=t.cs&&t.nx%f===0&&f<=s.maxComputeInvocationsPerWorkgroup&&f*t.cs*8<=s.maxComputeWorkgroupStorageSize){r=f;break}if(!r)throw new Error(`webgpu-native: no moments workgroup fits ${t.cs} channels on this device`);return $t(ot({},a),{momLX:r,vendor:n||"unknown"})}const bt=256;function Ds(e){if(typeof Float16Array!="undefined")return new Uint16Array(new Float16Array(e).buffer);const t=new Uint16Array(e.length),n=new Float32Array(1),s=new Uint32Array(n.buffer);for(let o=0;o<e.length;o++){n[0]=e[o];const a=s[0],r=a>>>16&32768,i=a>>>23&255,f=a&8388607;if(i===255){t[o]=r|31744|(f?512:0);continue}const l=i-127+15;if(l>=31){t[o]=r|31744;continue}if(l<=0){if(l<-10){t[o]=r;continue}const g=f|8388608,c=14-l;let p=g>>>c;const m=g&(1<<c)-1,h=1<<c-1;(m>h||m===h&&p&1)&&p++,t[o]=r|p;continue}let u=l<<10|f>>>13;const d=f&8191;(d>4096||d===4096&&u&1)&&u++,t[o]=r|u}return t}function aa(e,t){var n;return t.quantize8Bit?"8-bit quantized V4 runner requested":(n=e.features)!=null&&n.has("shader-f16")?t.outputType==="probability"?"probability output (CAT-lite) is not ported yet":t.enableTTA?"test-time augmentation uses the tinygrad TTA runner":t.forceFP32?"model entry forces fp32":t.webgpu_safetensor?vs(t)?null:"no descriptor in webgl2_runners/descriptors.js":"no safetensors weights":"device lacks shader-f16"}function ia(e,t){const n=e.nx*e.ny*e.nz,s=e.nx/t*e.ny*e.nz;return 2*n*e.cs*2+n*2+2*n*4+(s+1)*e.cs*2*4}const Vs=new WeakMap;function la(e,t,n){return Be(this,null,function*(){let s=Vs.get(e);s||(s=new Map,Vs.set(e,s));const o=`${t.chan}|${t.cs}|${t.nclass}|${t.norm}|${t.affine}|${t.convBias}|${t.clsBias}|${t.activation}|${t.eps}|${n.localX}x${n.vox}x${n.momLX}`;let a=s.get(o);return a||(a=Be(null,null,function*(){const r=e.createShaderModule({code:sa(t,n)}),i=["read-only-storage","storage","read-only-storage","uniform","storage","storage","read-only-storage","read-only-storage"],f=e.createBindGroupLayout({entries:i.map((g,c)=>({binding:c,visibility:GPUShaderStage.COMPUTE,buffer:{type:g}}))}),l=e.createPipelineLayout({bindGroupLayouts:[f]}),u=["conv","classify",...t.norm==="gn"?["moments","moments_finish","norm"]:[]],d=Object.fromEntries(yield Promise.all(u.map(g=>Be(null,null,function*(){return[g,yield e.createComputePipelineAsync({layout:l,compute:{module:r,entryPoint:g}})]}))));return{bgl:f,pipelines:d}}).catch(r=>{throw s.delete(o),r}),s.set(o,a)),a})}function ua(e,t,n,s){return Be(this,null,function*(){const o=vs(s);if(!o)throw new Error(`webgpu-native: no descriptor for ${s.path}`);const a=t instanceof Uint8Array?t:new Uint8Array(t),r=Kr(lo(io(a.buffer.slice(a.byteOffset,a.byteOffset+a.byteLength))),s.classifierBias),i=uo(r,{nx:bt,ny:bt,nz:bt,activation:o.activation,dilations:o.dilations});if(!i.nclass)throw new Error("webgpu-native: model has no classifier");if(i.convBias&&i.affine)throw new Error("webgpu-native: conv bias together with a GroupNorm affine is not supported");const f=ra(e,i),l=bt*bt*bt,u=l*i.cs*2,d=e.limits;if(u>d.maxStorageBufferBindingSize||u>d.maxBufferSize)throw new Error(`webgpu-native: a ${u>>>20} MiB activation exceeds this device's buffer limits`);console.log(`[WebGPU-native] ${o.name}: ${i.chan}ch (stride ${i.cs}) ${i.nclass}cls norm=${i.norm} affine=${i.affine} act=${i.activation} | preset ${f.localX}x${f.vox} (moments ${f.momLX}, ${f.source}) | ~${Math.round(ia(i,f.momLX)/1048576)} MiB`);const g=Zr(r,i),{layers:c,clsFloat:p,clsBiasFloat:m}=g.offsets;e.pushErrorScope("validation"),e.pushErrorScope("out-of-memory");let h=2;try{const{bgl:M,pipelines:_}=yield la(e,i,f),w=(O,ce)=>e.createBuffer({size:O,usage:ce}),y=GPUBufferUsage.STORAGE,$=bt/f.momLX*bt*bt,x=Ds(g.data),S=w(l*2,y|GPUBufferUsage.COPY_DST),C=w(u,y),v=w(u,y),A=w(Math.ceil(x.byteLength/16)*16,y|GPUBufferUsage.COPY_DST),k=w(($+1)*i.cs*2*4,y),U=w(l*4,y|GPUBufferUsage.COPY_SRC),F=w(l*4,GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST);e.queue.writeBuffer(A,0,x);const G=(O,ce,fe)=>{const ye=w(32,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST);return e.queue.writeBuffer(ye,0,fe),e.createBindGroup({layout:M,entries:[{binding:0,resource:{buffer:O}},{binding:1,resource:{buffer:ce}},{binding:2,resource:{buffer:A}},{binding:3,resource:{buffer:ye}},{binding:4,resource:{buffer:k}},{binding:5,resource:{buffer:U}},{binding:6,resource:{buffer:A}},{binding:7,resource:{buffer:O}}]})},V=O=>{const ce=new Uint32Array(8);return ce[0]=O.dilation|0,ce[1]=O.weightOff>>>0,ce[2]=O.affineOff>>>0,ce[3]=O.biasOff>>>0,ce[4]=O.inChannels>>>0,ce[5]=O.inStride>>>0,ce[6]=$,ce},X=[];let W=S,D=C;c.forEach((O,ce)=>{const fe=ce===0;X.push(G(W,D,V({dilation:i.dilations[ce],weightOff:O.wq*4,affineOff:O.affQ!==void 0?O.affQ*4:0,biasOff:O.biasQ!==void 0?O.biasQ*4:O.affBiasQ!==void 0?O.affBiasQ*4:0,inChannels:fe?1:i.cs,inStride:fe?1:i.cs}))),W=D,D=D===C?v:C});const T=G(W,D,V({weightOff:p,biasOff:m>=0?m:0}));h=0;const Y=yield e.popErrorScope(),E=yield e.popErrorScope();if(Y||E)throw new Error(`webgpu-native setup failed: ${(Y||E).message}`);const L=bt/(f.localX*f.vox),N=bt/f.localX,Z=bt/f.momLX;return function(ce){return Be(this,null,function*(){if(ce.length!==l)throw new Error(`webgpu-native: input has ${ce.length} voxels, expected ${l}`);e.pushErrorScope("validation"),e.queue.writeBuffer(S,0,Ds(ce));for(const K of X){const ae=e.createCommandEncoder(),z=ae.beginComputePass();z.setBindGroup(0,K),z.setPipeline(_.conv),z.dispatchWorkgroups(L,bt,bt),i.norm==="gn"&&(z.setPipeline(_.moments),z.dispatchWorkgroups(Z,bt,bt),z.setPipeline(_.moments_finish),z.dispatchWorkgroups(1,1,1),z.setPipeline(_.norm),z.dispatchWorkgroups(N,bt,bt)),z.end(),e.queue.submit([ae.finish()])}const fe=e.createCommandEncoder(),ye=fe.beginComputePass();ye.setBindGroup(0,T),ye.setPipeline(_.classify),ye.dispatchWorkgroups(N,bt,bt),ye.end(),fe.copyBufferToBuffer(U,0,F,0,l*4),e.queue.submit([fe.finish()]),yield F.mapAsync(GPUMapMode.READ);const we=new Float32Array(new Uint32Array(F.getMappedRange()));F.unmap();const _e=yield e.popErrorScope();if(_e)throw new Error(`webgpu-native inference failed: ${_e.message}`);return[we]})}}finally{for(;h-- >0;)yield e.popErrorScope().catch(()=>{})}})}const ca={grayMatter:[2,6,7,8,9,10,14,15,16,17],whiteMatter:[1,5],csf:[3,4,11,12]};function Mn(e,t,n,s,o){var r;const a=Number((r=e[t])!=null?r:n);if(!Number.isFinite(a)||a<s||a>o)throw new Error(`${t} must be between ${s} and ${o}, got ${e[t]}`);return a}function es(e,t,n){let s=0;for(const o of e||[]){if(!Number.isInteger(o)||o<0||o>=t||o>=32)throw new Error(`Invalid ${n} tissue label ${o} for ${t} classes`);s=(s|1<<o)>>>0}return s}function fa(e,t){if(!Number.isInteger(t)||t<2||t>32)throw new Error(`Native WebGL2 grouped probabilities require 2..32 classes, got ${t}`);const n=ot(ot({},ca),e.probabilityGroups||{});return{temperature:Mn(e,"softmaxTemperature",1,1e-6,1e6),supportTemperature:Mn(e,"brainSupportTemperature",1,1e-6,1e6),supportPower:Mn(e,"brainSupportPower",1,1e-6,1e6),sigma:Mn(e,"partialVolumeSigma",0,0,2),grayMask:es(n.grayMatter,t,"gray-matter"),whiteMask:es(n.whiteMatter,t,"white-matter"),csfMask:es(n.csf,t,"CSF")}}function ts(e,t,n,s,o,a){const[r,i,f]=n,l=r*i,u=o.length-1>>1;for(let d=0;d<f;d++)for(let g=0;g<i;g++)for(let c=0;c<r;c++){const p=d*l+g*r+c,m=s===1?c:s===r?g:d,h=s===1?r:s===r?i:f;let M=0;for(let _=-u;_<=u;_++){const w=m+_;w<0||w>=h||(M+=o[_+u]*e[p+_*s])}t[p]=M/a}}function pa(e,t,n,s){const[o,a,r]=n,i=o*a*r;if(!Array.isArray(e)||e.length!==3||e.some(c=>c.length!==i)||t.length!==i)throw new Error("Native WebGL2 tissue-prior dimensions do not match");const f=Mn(s,"partialVolumeSigma",0,0,2),l=Mn(s,"brainSupportPower",1,1e-6,1e6);let u=null,d=null,g=1;if(f>0){const c=Math.max(1,Math.round(3*f));d=new Float32Array(c*2+1),g=0;for(let p=-c;p<=c;p++){const m=Math.exp(-.5*p*p/(f*f));d[p+c]=m,g+=m}u=new Float32Array(i)}for(const c of e){let p=c;d&&(ts(c,u,n,1,d,g),ts(u,c,n,o,d,g),ts(c,u,n,o*a,d,g),p=u);for(let m=0;m<i;m++){const h=Math.pow(Math.max(0,Math.min(1,t[m])),l);c[m]=Math.max(0,Math.min(1,p[m]*h))}}return e}const I=256,pt=64,Ht=8,ct=pt+2*Ht,pn=ct*4,Ke=I*64,In=I*I*2,jn=9216,co=jn*8,fs=[1,3,5,7,13,19,31,19,13,7,5,3,1],ut=(e,t)=>Array.from({length:e},(n,s)=>t(s)).join(""),fo=280,po=150,ma=55,ns=112;let ps=0;function ms(e,t){const n=Math.floor(e/4),s=e%4,o=s===0?n:n+1,a=n,r=s*8,i=s===0?0:32-r;return(e&63|(o&15)<<6|(a&15)<<10|(r&31)<<14|(i&31)<<19|(t?1:0)<<24)>>>0}function mo(e){var t;if(e!=null&&e.webgpuExecMode)return String(e.webgpuExecMode).toLowerCase();try{const n=new URLSearchParams(((t=globalThis.location)==null?void 0:t.search)||"").get("webgpuExec");if(n)return n.toLowerCase()}catch(n){}return""}function da(e){var n,s;if(!e)return"";if(typeof e.__glRenderer=="string")return e.__glRenderer;let t="";try{const o=typeof navigator!="undefined"&&/Firefox/i.test(navigator.userAgent||""),a=typeof OffscreenCanvas!="undefined"?new OffscreenCanvas(1,1):typeof document!="undefined"?document.createElement("canvas"):null,r=(n=a==null?void 0:a.getContext)==null?void 0:n.call(a,"webgl2",{powerPreference:"high-performance"});if(r){if(o)t=String(r.getParameter(r.RENDERER)||"");else{const i=r.getExtension("WEBGL_debug_renderer_info");t=String((i?r.getParameter(i.UNMASKED_RENDERER_WEBGL):r.getParameter(r.RENDERER))||"")}(s=r.getExtension("WEBGL_lose_context"))==null||s.loseContext()}}catch(o){}return e.__glRenderer=t,t}function Tn(e){var g;const t=(e==null?void 0:e.__adapterInfo)||(e==null?void 0:e.adapterInfo)||{},n=String(t.vendor||"").toLowerCase(),s=String(t.architecture||"").toLowerCase(),o=typeof navigator!="undefined"&&navigator.userAgent||"",a=typeof navigator!="undefined"&&(((g=navigator.userAgentData)==null?void 0:g.platform)||navigator.platform||"")||"",r=n==="apple"||/Mac|iPhone|iPad|iPod/i.test(`${a} ${o}`)&&!["intel","amd","nvidia","microsoft"].includes(n),i=!r&&(/Win/i.test(a)||/Windows/i.test(o)),f=i&&!n?da(e):String((e==null?void 0:e.__glRenderer)||""),l=`${t.device||""} ${t.description||""} ${f}`,u=n||(/\bintel\b/i.test(f)?"intel":/\bmicrosoft\b|\bbasic render\b/i.test(f)?"microsoft":""),d=i&&(u==="microsoft"||u==="intel"&&!/\bArc\b/i.test(l)&&(/^gen-(9|11|12lp)/i.test(s)||/(?:UHD|HD)\s+Graphics|Iris(?:\(R\))?\s*(?:Plus|Xe)|Pentium|Celeron/i.test(l)));return{vendor:u,arch:s,desc:l,isApple:r,isWindows:i,isWindowsSharedIgpu:d}}function go(e,t){const n=mo(t);if(n==="single"||n==="pipelined"||n==="paced"||n==="calibrate")return n;if(n==="chunked")return"paced";const s=Tn(e);return s.isApple?"single":s.isWindows?e!=null&&e.__v4WinCalibrated?e.__v4WinFast?"pipelined":"paced":"calibrate":"pipelined"}function _o(e,t){const n=mo(t);return n==="single"?!1:n==="paced"||n==="chunked"||n==="calibrate"?!0:n==="pipelined"?!1:Tn(e).isWindows}function bo(e,t,n){return(n==null?void 0:n.forceLowMem128)===!1?!1:Tn(e).isWindowsSharedIgpu&&t.cs>=24&&t.cs%4===0}function ho(e,t){var a,r;if(!((r=(a=e==null?void 0:e.features)==null?void 0:a.has)!=null&&r.call(a,"subgroups"))||t!=null&&t.disableSubgroups)return"none";if(t!=null&&t.forceSubgroupMode)return t.forceSubgroupMode;const n=e.__adapterInfo||e.adapterInfo||{},s=n.subgroupMinSize|0,o=n.subgroupMaxSize|0;return s===32&&o===32?"sg32":s===64&&o===64?"sg64":s>=32&&o<=64?"sg32_64":s>=8&&o<=32?"sg_small":"none"}function wo(e){switch(e){case"sg32":return"subgroups32";case"sg64":return"subgroups64-bf";case"sg32_64":return"subgroups32-64";case"sg_small":return"subgroups8-32";default:return"shared-8KiB"}}function vo(){return typeof requestAnimationFrame!="function"?new Promise(e=>setTimeout(e,0)):new Promise(e=>{let t=!1;const n=()=>{t||(t=!0,e())},s=setTimeout(n,16);requestAnimationFrame(()=>{clearTimeout(s),setTimeout(n,0)})})}function xo(e,t,n){let s=t,o=null,a=null,r=performance.now(),i=performance.now();function f(m,h,M){return Be(this,arguments,function*(u,d,g,{forceUiYield:c=!1,emitTick:p=!0}={}){o&&(yield o,o=null);const _=performance.now();e.queue.submit([u.finish()]);const w=e.createCommandEncoder(),y=e.queue.onSubmittedWorkDone().then(()=>{const x=performance.now(),S=Math.max(_,r),C=Math.max(0,x-S);x>r&&(r=x),d>=256&&C>.2&&(s=Math.max(.005,Math.min(2,.7*s+.3*(C/d))),e.__v4MsPerStrip=s)});o=a,a=y,p&&n&&n(g);const $=performance.now();return(c||$-i>=ma)&&(yield vo(),i=performance.now()),w})}function l(){return Be(this,null,function*(){o&&(yield o,o=null)})}return{submitChunk:f,waitBeforeFinalSubmit:l,getMsPerStrip:()=>s,setMsPerStrip:u=>{s=Math.max(.005,Math.min(2,u)),e.__v4MsPerStrip=s,r=performance.now()}}}function xs(e,t,n){const s=e.isFull?Ke:e.mainStrips.length,o=e.isFull||!e.extStrips?0:e.extStrips.length,a=t+1<n?e.isFull?Ke:e.normStrips?e.normStrips.length:0:0,r=Math.max(16,Math.round(a*.12));return t===0?{convWork:Math.max(64,Math.round(s*.12)),normWork:r}:{convWork:s+o,normWork:r}}function yo(e,t){let n=0;for(let o=0;o<t;o++){const a=xs(e.layers[o],o,t);n+=a.convWork+a.normWork}const s=e.clsSkipped?e.clsStrips.length:Ke;return n+=Math.max(64,Math.round(s*.2)),Math.max(1,n)}const $o=new Float32Array(1),ga=new Uint32Array($o.buffer);function ds(e){$o[0]=e;const t=ga[0],n=t>>>16&32768,s=t>>>23&255;let o=t&8388607;if(s===255)return n|31744|(o?512:0);let a=s-127+15;return a<=0?a<-10?n:(o=(o|8388608)>>>1-a,n|o+4096>>>13):a>=31?n|31744:n|Math.min(31744,(a<<10)+(o+4096>>>13))}function _a(e){const t=new Uint16Array(e.length);for(let n=0;n<e.length;n++)t[n]=ds(e[n]);return t}const cn=new Map,ba=12,So=new WeakMap,ha=new WeakMap;function wa(e){let t=2166136261,n=2654435769;const s=e.byteLength>>>2;if((e.byteOffset&3)===0){const o=new Uint32Array(e.buffer,e.byteOffset,s);for(let a=0;a<o.length;a++){const r=o[a];t=Math.imul(t^r,16777619)>>>0,n=Math.imul(n^(r<<13|r>>>19),2246822507)>>>0}}else for(let o=0;o<s*4;o+=4){const a=e[o]|e[o+1]<<8|e[o+2]<<16|e[o+3]<<24;t=Math.imul(t^a,16777619)>>>0,n=Math.imul(n^(a<<13|a>>>19),2246822507)>>>0}for(let o=s*4;o<e.byteLength;o++)t=Math.imul(t^e[o],16777619)>>>0;return`${e.byteLength}_${t.toString(16)}_${n.toString(16)}`}function va(e,t,n,s){const o=s!=null&&s.classifierBias?JSON.stringify(s.classifierBias):"",a=`${wa(e)}|${n.chan}|${n.cs}|${n.nclass}|${n.norm}|${n.eps}|${o}`;if(cn.has(a)){const i=cn.get(a);return cn.delete(a),cn.set(a,i),i}const r=Sa(t,n);if(cn.size>=ba){const i=cn.keys().next().value;cn.delete(i)}return cn.set(a,r),r}function ys(e,t){let n=e.get(t);return n||(n=new Map,e.set(t,n)),n}function Vt(e,t,n){let s=e.get(t);return s||(s=n().catch(o=>{throw e.delete(t),o}),e.set(t,s)),s}function Xn(e,t){let n=0;return{alloc:(o,a)=>{const r=Math.max(16,Math.ceil(o/16)*16),i=e.createBuffer({size:r,usage:a});return t.push(i),n+=r,i},getBytes:()=>n,resetBytes:()=>{n=0}}}const an=new WeakMap;function xn(e){const t=e?an.get(e):null;if(t){an.delete(e),t.inUse=!1;for(const n of t.buffers)n.destroy();t.buffers.length=0}}function ko(e,t,n){const s=an.get(e);if(s){if(s.key===t&&!s.inUse)return s.inUse=!0,s;if(s.inUse){const r=n();return $t(ot({key:t},r),{inUse:!0,pooled:!1})}an.delete(e);for(const r of s.buffers)r.destroy();s.buffers.length=0}const o=n(),a=$t(ot({key:t},o),{inUse:!0,pooled:!0});return an.set(e,a),a}function Nt(e,t,n){return e.createShaderModule({label:t,code:n})}function $s(e,t,n,s,o){return Be(this,null,function*(){const a=e.createBindGroupLayout({entries:o.map((r,i)=>typeof r=="string"?{binding:i,visibility:GPUShaderStage.COMPUTE,buffer:{type:r}}:{binding:i,visibility:GPUShaderStage.COMPUTE,buffer:r})});try{const r=yield e.createComputePipelineAsync({label:t,layout:e.createPipelineLayout({bindGroupLayouts:[a]}),compute:{module:n,entryPoint:s}});return{bgl:a,pipe:r}}catch(r){if(n!=null&&n.getCompilationInfo){const i=yield n.getCompilationInfo().catch(()=>null),f=i?i.messages.filter(l=>l.type==="error"):[];if(f.length)throw new Error(`meshnet_fast_v4 [${t}] WGSL error: `+f.map(l=>`L${l.lineNum}:${l.linePos} ${l.message}`).join(" | "))}throw r}})}function gs(e,t){const n=t?`enable f16;
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
    inp_4[((Z0 + zLoc) * 256u + Y) * ${ct}u + dstX4] =
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
    inp_4[((Z0 + zl) * 256u + Y) * ${ct}u + dstX4] =
      ${o}(${s}(sh[r]), ${s}(sh[r + 1u]), ${s}(sh[r + 2u]), ${s}(sh[r + 3u]));
  }
}`}function Mo(){return`
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
}`}function xa(){return`
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
}`}function ya(){return`
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
}`}function Hs(){return`
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
}`}function on(e,t,n,s,o){return Be(this,null,function*(){const a=ys(ha,e);let r=a.get(t);return r||(r=Be(null,null,function*(){const i=Nt(e,t,n());return $s(e,t,i,s,o)}).catch(i=>{throw a.delete(t),i}),a.set(t,r)),r})}function js(e,t,n,s,o){t.fill(0);const a=I*I*I;if(!(o&&e[0]===s&&e[a-1]===s))return{hasBgSkip:!1};if(n.fill(0),(e instanceof Uint8Array||e instanceof Uint8ClampedArray)&&(e.byteOffset&3)===0&&Number.isInteger(s)&&s>=0&&s<=255){const f=new Uint32Array(e.buffer,e.byteOffset,a>>>2),l=new Uint32Array(n.buffer,n.byteOffset,I*I>>>2),u=(s&255)*16843009>>>0;let d=0;for(let g=0;g<I;g++)for(let c=0;c<16384;c++)l[c]|=f[d++]^u}else{let f=0;const l=I*I;for(let u=0;u<I;u++)for(let d=0;d<l;d++,f++)e[f]!==s&&(n[d]=1)}let i=0;for(let f=0;f<I;f++){const l=f*I;for(let u=0;u<I;u++)n[l+u]!==0&&(t[u*I+f]=1,i++)}return i===0||i>=6e4?{hasBgSkip:!1}:{hasBgSkip:!0}}function Ao(e){return e?`${e.grayMask}_${e.whiteMask}_${e.csfMask}_${e.temperature}_${e.supportTemperature}`:"seg"}function Po(u,d,g,c,p,m,h){return Be(this,arguments,function*(e,t,n,s,o,a,r,{includeCls:i=!0,sequential:f=!1,shouldAbort:l=null}={}){var oe;const M=ys(So,e),_=s?1:0,w=o||"none",y=r.useUniformWeff?1:0,$=(R,ue,te,Q)=>$s(e,R,ue,te,Q),x=["storage","storage","storage","storage"],S=["read-only-storage","storage","storage","storage","storage","storage","read-only-storage","storage","uniform","uniform","uniform"],C=["read-only-storage","read-only-storage","storage","storage","read-only-storage","uniform"],v=["storage","storage","storage","storage","read-only-storage","read-only-storage",{type:"uniform",hasDynamicOffset:!0,minBindingSize:32}],A=["storage","storage","storage","storage","read-only-storage","read-only-storage","read-only-storage","uniform"],k=["read-only-storage","read-only-storage","read-only-storage","read-only-storage","storage","storage",r.useUniformWeff?"uniform":"read-only-storage","read-only-storage",{type:"uniform",hasDynamicOffset:!0,minBindingSize:32}],U=["read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","storage","uniform","uniform","uniform"],F=`128|init|${t.cs}|${t.activation}|${_}`,G=`128|conv0|${t.cs}|${t.dilations[0]}|${t.norm}|${_}|${w}`,V=`128|prep|${t.chan}|${t.cs}|${t.activation}|${t.norm}|${_}`,X=`128|flush|${t.cs}|${_}`,W=`128|norm|${t.cs}|${t.activation}|${t.norm}|${_}`,D=`128|conv|${t.chan}|${t.cs}|${t.activation}|${t.norm}|${y}|${_}|${w}`,T=`128|cls|${t.chan}|${t.cs}|${t.nclass}|${(oe=n==null?void 0:n.clsK4)!=null?oe:0}|${r.numConvs}|${t.activation}|${t.norm}|${_}|${Ao(a)}`,Y=()=>Vt(M,F,()=>{const R=Nt(e,"init_act8_128",r.initActWgsl());return $("init_act8_128",R,"main",x)}),E=()=>Vt(M,G,()=>Be(null,null,function*(){const R=Nt(e,"conv0_128",r.conv0Wgsl()),ue=yield Promise.all(r.halfPass0?[$("conv0_128_lo",R,"main_lo",S),$("conv0_128_hi",R,"main_hi",S),$("conv0_128_bg_lo",R,"main_bg_lo",S),$("conv0_128_bg_hi",R,"main_bg_hi",S)]:[$("conv0_128",R,"main",S),$("conv0_128_bg",R,"main_bg",S)]);return r.halfPass0?{lo:ue[0],hi:ue[1],bgLo:ue[2],bgHi:ue[3]}:{main:ue[0],bg:ue[1]}})),L=()=>Vt(M,V,()=>Be(null,null,function*(){const R=Nt(e,"prep_128",r.prepWgsl()),[ue,te]=yield Promise.all([$("moments_finish_128",R,"moments_finish",C),$("prep_weff_128",R,"prep_weff",C)]);return{pMomFin:ue,pPrepW:te}})),N=()=>Vt(M,X,()=>{const R=Nt(e,"flush_128",r.flushWgsl());return $("flush_stage_128",R,"main",v)}),Z=()=>Vt(M,W,()=>Be(null,null,function*(){const R=Nt(e,"norm_128",r.normWgsl()),[ue,te]=yield Promise.all([$("norm_quant8_128",R,"main",A),$("norm_halo_fill_128",R,"norm_halo_fill",A)]);return{pNorm:ue,pNormHalo:te}})),O=()=>i?Vt(M,T,()=>{const R=Nt(e,"cls_128",r.clsWgsl());return $("classify_v4_128",R,"main",U)}):Promise.resolve(null),ce=()=>Vt(M,D,()=>Be(null,null,function*(){const R=Nt(e,"conv_128",r.convWgsl());if(r.halfPassConv){const[H,J,q,ke,be,Le]=yield Promise.all([$("conv_128_lo",R,"main_lo",k),$("conv_128_hi",R,"main_hi",k),$("conv_128_ext_lo",R,"main_ext_lo",k),$("conv_128_ext_hi",R,"main_ext_hi",k),$("conv_128_bg_lo",R,"main_bg_lo",k),$("conv_128_bg_hi",R,"main_bg_hi",k)]);return{lo:H,hi:J,extLo:q,extHi:ke,bgLo:be,bgHi:Le}}const[ue,te,Q]=yield Promise.all([$("conv_128",R,"main",k),$("conv_128_ext",R,"main_ext",k),$("conv_128_bg",R,"main_bg",k)]);return{main:ue,ext:te,bg:Q}}));if(f){for(const R of[Y,L,N,Z,E,ce,O]){if(l!=null&&l())return null;yield R()}return null}const[fe,ye,we,_e,K,ae,z]=yield Promise.all([Y(),E(),L(),N(),Z(),O(),ce()]);return{pInit:fe,pMomFin:we.pMomFin,pPrepW:we.pPrepW,pFlush:_e,pNorm:K.pNorm,pNormHalo:K.pNormHalo,pCls:ae,pConv0:ye,pConv:z}})}function zo(d,g,c,p,m,h,M,_){return Be(this,arguments,function*(e,t,n,s,o,a,r,i,{includeCls:f=!0,sequential:l=!1,shouldAbort:u=null}={}){var oe;const w=ys(So,e),y=s?1:0,$=o||"none",x=a?1:0,S=i.useUniformWeff?1:0,C=i.chunkableStd?1:0,v=(R,ue,te,Q)=>$s(e,R,ue,te,Q),A=["storage","storage"],k=["read-only-storage","storage","storage","read-only-storage","read-only-storage","storage","storage","read-only-storage","uniform"],U=["read-only-storage","read-only-storage","storage","storage","storage","storage","read-only-storage","uniform"],F=["storage","storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","uniform"],G=["read-only-storage","read-only-storage","storage","storage","storage","storage",i.useUniformWeff?"uniform":"read-only-storage","read-only-storage",i.chunkableStd?{type:"uniform",hasDynamicOffset:!0,minBindingSize:32}:"uniform"],V=["read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","storage","read-only-storage","uniform"],X=`std|init|${t.cs}|${t.activation}|${y}|${x}`,W=`std|conv0|${t.cs}|${t.dilations[0]}|${t.norm}|${y}|${$}|${x}`,D=`std|prep|${t.chan}|${t.cs}|${t.activation}|${t.norm}|${y}|${x}`,T=`std|norm|${t.cs}|${t.activation}|${t.norm}|${y}|${x}`,Y=`std|conv|${t.chan}|${t.cs}|${t.activation}|${t.norm}|${S}|${y}|${$}|${x}${C?"|chk1":""}`,E=`std|cls|${t.chan}|${t.cs}|${t.nclass}|${(oe=n==null?void 0:n.clsK4)!=null?oe:0}|${t.activation}|${t.norm}|${y}|${x}|${Ao(r)}`,L=()=>Vt(w,X,()=>{const R=Nt(e,"init_act8",i.initActWgsl());return v("init_act8",R,"main",A)}),N=()=>Vt(w,W,()=>Be(null,null,function*(){const R=Nt(e,"conv0",i.conv0Wgsl()),ue=yield Promise.all(i.halfPass0?[v("conv0_lo",R,"main_lo",k),v("conv0_hi",R,"main_hi",k),v("conv0_bg_lo",R,"main_bg_lo",k),v("conv0_bg_hi",R,"main_bg_hi",k)]:[v("conv0",R,"main",k),v("conv0_bg",R,"main_bg",k)]);return i.halfPass0?{lo:ue[0],hi:ue[1],bgLo:ue[2],bgHi:ue[3]}:{main:ue[0],bg:ue[1]}})),Z=()=>Vt(w,D,()=>Be(null,null,function*(){const R=Nt(e,"prep",i.prepWgsl()),[ue,te]=yield Promise.all([v("moments_finish",R,"moments_finish",U),v("prep_weff",R,"prep_weff",U)]);return{pMomFin:ue,pPrepW:te}})),O=()=>Vt(w,T,()=>Be(null,null,function*(){const R=Nt(e,"norm",i.normWgsl()),[ue,te]=yield Promise.all([v("norm_quant8",R,"main",F),v("norm_halo_fill",R,"norm_halo_fill",F)]);return{pNorm:ue,pNormHalo:te}})),ce=()=>f?Vt(w,E,()=>{const R=Nt(e,"cls",i.clsWgsl());return v("classify_v4",R,"main",V)}):Promise.resolve(null),fe=()=>Vt(w,Y,()=>Be(null,null,function*(){const R=Nt(e,"conv",i.convWgsl());if(i.halfPassConv){const[Q,H,J,q]=yield Promise.all([v("conv_lo",R,"main_lo",G),v("conv_hi",R,"main_hi",G),v("conv_ext_lo",R,"main_ext_lo",G),v("conv_ext_hi",R,"main_ext_hi",G)]);return{lo:Q,hi:H,extLo:J,extHi:q}}const[ue,te]=yield Promise.all([v("conv",R,"main",G),v("conv_ext",R,"main_ext",G)]);return{main:ue,ext:te}}));if(l){for(const R of[L,Z,O,N,fe,ce]){if(u!=null&&u())return null;yield R()}return null}const[ye,we,_e,K,ae,z]=yield Promise.all([L(),N(),Z(),O(),ce(),fe()]);return{pInit:ye,pMomFin:_e.pMomFin,pPrepW:_e.pPrepW,pNorm:K.pNorm,pNormHalo:K.pNormHalo,pCls:ae,pConv0:we,pConv:z}})}function Xs(e,t,n,s,o){n.fill(0);const a=o&&e[0]===0&&e[e.length-1]===0;let r=0,i=0;if(!a){if(s)for(let f=0;f<I;f++){const l=f*I*pn;for(let u=0;u<I;u++){let d=l+u*pn+32;for(let g=0;g<I;g++,i++,d++){const c=e[i];t[d]=c===0?0:ds(c)}}}else for(let f=0;f<I;f++){const l=f*I*pn;for(let u=0;u<I;u++){const d=f*I*I+u*I;t.set(e.subarray(d,d+I),l+u*pn+32)}}return{hasBgSkip:!1}}for(let f=0;f<I;f++){const l=f*I*pn;for(let u=0;u<I;u++){let d=!1,g=l+u*pn+32;for(let c=0;c<I;c++,i++,g++){const p=e[i];p!==0?(t[g]=s?ds(p):p,d=!0):t[g]=0}d&&(n[f*I+u]=1,r++)}}return r===0||r>=6e4?{hasBgSkip:!1}:{hasBgSkip:!0}}function Rn(e,t){const n=new Uint8Array(I*I);for(let s=0;s<I;s++){const o=s*I,a=s-t,r=s+t;for(let i=0;i<I;i++){if(!e[o+i])continue;const f=i-t,l=i+t;if(a>=0){const u=a*I;f>=0&&(n[u+f]=1),n[u+i]=1,l<I&&(n[u+l]=1)}if(f>=0&&(n[o+f]=1),n[o+i]=1,l<I&&(n[o+l]=1),r>=0&&r<I){const u=r*I;f>=0&&(n[u+f]=1),n[u+i]=1,l<I&&(n[u+l]=1)}}}return n}function $a(e,t){const n=new Uint8Array(I*I),s=new Uint8Array(I*I),o=new Int32Array(I+1);for(let a=0;a<I;a++){const r=a*I;for(let i=0;i<I;i++)o[i+1]=o[i]+e[r+i];for(let i=0;i<I;i++)o[Math.min(I-1,i+t)+1]-o[Math.max(0,i-t)]>0&&(n[r+i]=1)}for(let a=0;a<I;a++){for(let r=0;r<I;r++)o[r+1]=o[r]+n[r*I+a];for(let r=0;r<I;r++)o[Math.min(I-1,r+t)+1]-o[Math.max(0,r-t)]>0&&(s[r*I+a]=1)}return s}function ss(e){const t=new Uint8Array(Ke);for(let n=0;n<I;n++){const s=n*I,o=n*64;for(let a=0;a<64;a++){const r=s+(a<<2);e[r]|e[r+1]|e[r+2]|e[r+3]&&(t[o+a]=1)}}return t}function On(e){const t=new Uint8Array(I*I);for(let n=0;n<I;n++){const s=n*I,o=n*64;for(let a=0;a<64;a++)if(e[o+a]){const r=s+(a<<2);t[r]=1,t[r+1]=1,t[r+2]=1,t[r+3]=1}}return t}function En(e){let t=0;for(let o=0;o<Ke;o++)t+=e[o];const n=new Uint32Array(t);let s=0;for(let o=0;o<I;o++){const a=o*64;for(let r=0;r<64;r++)e[a+r]&&(n[s++]=o<<8|r)}return n}function fn(e){let t=0;for(let n=0;n<e.length;n++)t+=e[n];return t}function Ys(e){const t=new Uint8Array(Ke);if(e===1024)for(let n=0;n<32;n++)for(let s=0;s<32;s++){const o=n*8+(n*3+s*5&7),a=s*2+(n+s&1);t[o*64+a]=1}else if(e===512)for(let n=0;n<32;n++)for(let s=0;s<16;s++){const o=n*8+(n*3+s*5&7),a=s*4+(n+s*3&3);t[o*64+a]=1}else for(let n=0;n<16;n++)for(let s=0;s<16;s++){const o=n*16+(n*7+s*3&15),a=s*4+(n+s*3&3);t[o*64+a]=1}return t}function Co(e,t,n,s){const o=n.length,a=()=>({isFull:!0,mode:"full",writtenMask:null,computedMask:null,mainStrips:null,extStrips:null,nMomExt:0,normStrips:null,haloRows:null,bgStrip:null,extWeight:0});if(!s||!t.hasBgSkip)return{clsSkipped:!1,clsStrips:null,layers:Array.from({length:o},a)};const r=ss($a(e,3)),i=fn(r)<15800,f=i?En(r):null,l=new Array(o);let u=null;for(let _=0;_<o;_++){const w=n[_],y=Rn(_===0?e:u,w);if(_>0)for(let x=0;x<I;x++){const S=x<w||x>=I-w,C=x*I;for(let v=0;v<I;v++)(S||v<w||v>=I-w)&&(y[C+v]=1)}u=y;const $=new Uint8Array(Ke);for(let x=0;x<I;x++){const S=x*I,C=x*64;for(let v=0;v<64;v++){const A=S+(v<<2);y[A]|y[A+1]|y[A+2]|y[A+3]||($[C+v]=1)}}l[_]=$}const d=new Array(o);d[o-1]=r;for(let _=o-2;_>=0;_--)d[_]=ss(Rn(On(d[_+1]),n[_+1]));const g=i&&o>=4&&n[o-1]<=2&&n[o-2]<=4&&n[o-3]<=6,c=Math.max(1,o-3),p=new Array(o).fill(null),m=new Array(o).fill(null),h=new Array(o).fill(null);if(g){const w=(Ke-fn(d[o-1]))/Ke>=.52?256:512,y=1024,$=Ys(w),x=Ys(y),S=d[o-1],C=new Uint8Array(Ke);let v=0;for(let A=0;A<Ke;A++)$[A]&&!S[A]&&(C[A]=1,v++);if(v>0&&v<=jn&&fn(S)+v<=15360){p[o-1]=C,m[o-1]=new Uint8Array(Ke),h[o-1]=$;for(let A=o-2;A>=c;A--){const k=new Uint8Array(Ke),U=d[A+1],F=p[A+1];for(let E=0;E<Ke;E++)k[E]=U[E]|F[E];const G=ss(Rn(On(k),n[A+1])),V=new Uint8Array(Ke),X=d[A];for(let E=0;E<Ke;E++)G[E]&&!X[E]&&(V[E]=1);const W=A===c?x:$,D=new Uint8Array(Ke);let T=0,Y=0;for(let E=0;E<Ke;E++)(V[E]||W[E])&&!X[E]&&(D[E]=1,T++,W[E]&&Y++);if(Y===0||T>jn||fn(X)+T>15360){const E=A+1,L=d[E],N=m[E],Z=new Uint8Array(Ke);let O=0;for(let ce=0;ce<Ke;ce++)(N[ce]||x[ce])&&!L[ce]&&(Z[ce]=1,O++);O<=jn&&fn(L)+O<=15360&&(p[E]=Z,h[E]=x);break}m[A]=V,p[A]=D,h[A]=W}}}const M=new Array(o);for(let _=0;_<o;_++){const w=fn(l[_]),y=Ke-w,$=p[_]!==null,x=$?fn(d[_])+fn(p[_]):1/0;if(w>=512&&y<=x){const S=new Uint8Array(Ke);let C=-1;for(let U=0;U<Ke;U++)l[_][U]?C<0&&(C=U):S[U]=1;const v=S.slice();v[C]=1;const A={z:C>>>6,yWg:C&63,packed:C>>>6<<8|C&63},k=En(S);M[_]={isFull:!1,mode:"rpure",writtenMask:S,computedMask:v,mainStrips:k,extStrips:_===0?null:new Uint32Array([A.packed]),nMomExt:_===0?0:1,normStrips:k,haloRows:null,bgStrip:A,extWeight:w}}else if($&&x<=15360){const S=d[_],C=p[_],v=m[_],A=h[_],k=En(S),U=[],F=[];for(let D=0;D<I;D++){const T=D*64;for(let Y=0;Y<64;Y++){const E=T+Y;if(!C[E])continue;const L=D<<8|Y;A[E]?U.push(L):F.push(L)}}const G=U.length;if(G===0){M[_]=a();continue}const V=new Uint32Array(U.length+F.length);V.set(U,0),V.set(F,U.length);const X=new Uint8Array(Ke),W=new Uint8Array(Ke);for(let D=0;D<Ke;D++)X[D]=S[D]|v[D],W[D]=S[D]|C[D];M[_]={isFull:!1,mode:"bwd",writtenMask:X,computedMask:W,mainStrips:k,extStrips:V,nMomExt:G,normStrips:_+1<o?En(X):null,haloRows:null,bgStrip:null,extWeight:(Ke-k.length)/G}}else M[_]=a()}for(let _=o-2;_>=0;_--)M[_].mode==="bwd"&&M[_+1].mode!=="bwd"&&(M[_]=a());for(let _=0;_<o-1;_++){const w=M[_];if(w.mode!=="rpure")continue;const y=M[_+1],$=y.isFull?new Uint8Array(I*I).fill(1):Rn(On(y.computedMask),n[_+1]),x=On(w.writtenMask),S=[];for(let C=0;C<I;C++){const v=C*I;for(let A=0;A<I;A++)$[v+A]&&!x[v+A]&&S.push(C<<8|A)}S.length>0&&(w.haloRows=new Uint32Array(S))}return{clsSkipped:i,clsStrips:f,layers:M}}function Sa(e,t){const n=t.chan,s=t.cs,o=s/4,a=t.nclass,r=Math.ceil(a/4),{convs:i,affines:f,classifier:l}=e,u=i.length,d=27*o,g=9*s*3*o,c=s*r,p=(d+(u-1)*g+c)*4,m=new Float32Array(p),h=4*s,M=u*h,_=new Float32Array(M+r*4),w=(x,S,C)=>{if(t.norm!=="gn"||S>=n)return 1;const v=i[x],A=C*27,k=S*A;let U=0;for(let F=0;F<A;F++)U+=Math.abs(v.w[k+F]);return Math.max(U/16,1e-6)};for(let x=0;x<i[0].outC;x++){const S=w(0,x,i[0].inC),C=1/S;for(let v=0;v<27;v++)m[v*s+x]=i[0].w[x*27+v]*C;_[2*s+x]=t.eps/(S*S),i[0].bias&&(_[3*s+x]=i[0].bias[x])}for(let x=i[0].outC;x<s;x++)_[2*s+x]=t.eps;for(let x=1;x<u;x++){const S=i[x],C=(d+(x-1)*g)*4,v=x*h;for(let A=0;A<S.outC;A++){const k=w(x,A,S.inC),U=1/k,F=A>>>2,G=A&3;for(let V=0;V<9;V++)for(let X=0;X<S.inC;X++)for(let W=0;W<3;W++){const D=V*3+W,T=C+(((V*s+X)*3+W)*o+F)*4+G;m[T]=S.w[(A*S.inC+X)*27+D]*U}_[v+2*s+A]=t.eps/(k*k),S.bias&&(_[v+3*s+A]=S.bias[A])}for(let A=S.outC;A<s;A++)_[v+2*s+A]=t.eps}for(let x=0;x<u;x++){const S=x*h,C=f[x];for(let v=0;v<n;v++)t.norm==="gn"?(_[S+v]=C!=null&&C.scale?C.scale[v]:1,_[S+s+v]=C!=null&&C.bias?C.bias[v]:0):(_[S+v]=1,_[S+s+v]=0)}const y=d+(u-1)*g,$=y*4;for(let x=0;x<n;x++)for(let S=0;S<a;S++)m[$+x*r*4+S]=l.w[S*l.inC+x];for(let x=0;x<r*4;x++)_[M+x]=x<a?l.bias?l.bias[x]:0:-1e30;return{wF32:m,wF16:_a(m),qmetaF32:_,w0Vec4s:d,hiddenVec4PerLayer:g,clsVec4Off:y,clsBiasOff:M,metaStride:h,clsK4:r}}function Pn(e){if(e==="gelu_tanh")return`fn act(x : f32) -> f32 {
  let u = clamp(0.7978845608028654 * (x + 0.044715 * x * x * x), -9.0, 9.0);
  return 0.5 * x * (1.0 + tanh(u));
}`;if(e==="relu")return"fn act(x : f32) -> f32 { return max(x, 0.0); }";if(e==="elu")return"fn act(x : f32) -> f32 { return select(exp(clamp(x, -20.0, 0.0)) - 1.0, x, x >= 0.0); }";throw new Error(`meshnet_fast_v4: unsupported activation '${e}'`)}function Bo(e){return e==="gelu_tanh"?{uZeroInt:7,uZeroFloat:7/255,uZeroWord:117901063,sterbenzSub:"1.02734375h",zeroBin:7}:e==="relu"?{uZeroInt:0,uZeroFloat:0,uZeroWord:0,sterbenzSub:"1.0h",zeroBin:0}:{uZeroInt:32,uZeroFloat:32/255,uZeroWord:538976288,sterbenzSub:"1.125h",zeroBin:32}}function Fo({chan:e,clsK4:t,nclass:n,V4:s,suf:o,readBiasStmt:a,biasExpr:r,probCfg:i}){const f=`    var acc0 = ${s}(0.0${o});
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
${a}`;if(!i)return`  var best_v = vec4<f32>(-1.0e29);
  var best_k = vec4<u32>(0u);

  for (var k4 : u32 = 0u; k4 < ${t}u; k4 = k4 + 1u) {
${f}
${ut(4,g=>`    let l${g} = vec4<f32>(acc${g}) + vec4<f32>(${r(g)});
    let m${g} = l${g} > best_v;
    best_v = select(best_v, l${g}, m${g});
    best_k = select(best_k, vec4<u32>(k_base + ${g}u), m${g});
`)}  }

  labels8[row_idx * ${pt}u + x4] = best_k.x | (best_k.y << 8u) | (best_k.z << 16u) | (best_k.w << 24u);`;const l=`f32(${(1/Math.max(i.temperature,1e-6)).toExponential(8)})`,u=`f32(${(1/Math.max(i.supportTemperature,1e-6)).toExponential(8)})`,d=i.temperature===i.supportTemperature;return`  var max_v = vec4<f32>(-1.0e29);
  for (var k4 : u32 = 0u; k4 < ${t}u; k4 = k4 + 1u) {
${f}
${ut(4,g=>`    if (k_base + ${g}u < ${n}u) {
      max_v = max(max_v, vec4<f32>(acc${g}) + vec4<f32>(${r(g)}));
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
${ut(4,g=>`    let k${g} = k_base + ${g}u;
    if (k${g} < ${n}u) {
      let l${g} = vec4<f32>(acc${g}) + vec4<f32>(${r(g)});
      let v${g} = exp(clamp((l${g} - max_v) * ${l}, vec4<f32>(-80.0), vec4<f32>(0.0)));
      let s${g} = ${d?`v${g}`:`exp(clamp((l${g} - max_v) * ${u}, vec4<f32>(-80.0), vec4<f32>(0.0)))`};
      denom = denom + v${g};
      sup_denom = sup_denom + s${g};
      if (k${g} == 0u) { bg_w = s${g}; }
      let bit${g} = 1u << k${g};
      if ((${i.grayMask}u & bit${g}) != 0u) { gm_num = gm_num + v${g}; }
      if ((${i.whiteMask}u & bit${g}) != 0u) { wm_num = wm_num + v${g}; }
      if ((${i.csfMask}u & bit${g}) != 0u) { csf_num = csf_num + v${g}; }
    }
`)}  }

  let inv_den = vec4<f32>(1.0) / max(denom, vec4<f32>(1.0e-20));
  let gm = clamp(gm_num * inv_den, vec4<f32>(0.0), vec4<f32>(1.0));
  let wm = clamp(wm_num * inv_den, vec4<f32>(0.0), vec4<f32>(1.0));
  let csf = clamp(csf_num * inv_den, vec4<f32>(0.0), vec4<f32>(1.0));
  let sup = clamp(vec4<f32>(1.0) - bg_w / max(sup_denom, vec4<f32>(1.0e-20)), vec4<f32>(0.0), vec4<f32>(1.0));
  let vox_base = row_idx * ${I}u + x4 * 4u;
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
  }`}function Lo({device:e,hasF16:t,nvox:n,outBufBytes:s,inpBuf:o,act8_0:a,labels8Buf:r,readbackBuf:i,pInit:f,bgInit:l,pCls:u,bgCls:d,clsUbo:g,packed:c,modelEntry:p,probCfg:m,canGpuProb:h,probSlots:M,ownedBuffers:_,mkBuf:w}){let y=!1,$=!1,x=!1,S=!1;const C=new Uint8Array(I*I);let v=null,A=null,k=null,U=null;const F=(L,N)=>e.createBindGroup({layout:L,entries:N.map((Z,O)=>({binding:O,resource:Z&&Z.buffer?Z:{buffer:Z}}))});function G(){if(!v){const L=t?"prep_in_u8_f16":"prep_in_u8_f32";v=Be(null,null,function*(){const{bgl:N,pipe:Z}=yield on(e,L,()=>gs(!0,t),"main",["read-only-storage","storage","uniform"]);if(S)return null;const O=w(256*4,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST),ce=new Float32Array(256),fe=F(N,[{buffer:r,offset:0,size:n},o,O]);return{pipe:Z,ubo:O,lutF32:ce,bg:fe}}).catch(N=>{throw v=null,N})}return v}function V(){if(!A){const L=t?"prep_in_f32_f16":"prep_in_f32_f32";A=Be(null,null,function*(){const{bgl:N,pipe:Z}=yield on(e,L,()=>gs(!1,t),"main",["read-only-storage","storage","uniform"]);if(S)return null;const O=w(16,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST),ce=new Float32Array(4),fe=s>=n*4?F(N,[{buffer:r,offset:0,size:n*4},o,O]):null,ye=a.size>=n*4?F(N,[{buffer:a,offset:0,size:n*4},o,O]):null;return{pipe:Z,ubo:O,f32Tmp:ce,bgLabels:fe,bgAct0:ye}}).catch(N=>{throw A=null,N})}return A}function X(){return k||(k=Be(null,null,function*(){const{bgl:L,pipe:N}=yield on(e,"transpose_u8_v4",Mo,"main",["read-only-storage","storage"]);if(S)return null;const Z=F(L,[{buffer:r,offset:0,size:n},{buffer:o,offset:0,size:n}]);return{pipe:N,bg:Z}}).catch(L=>{throw k=null,L})),k}function W(){return U||(U=Be(null,null,function*(){const[L,N,Z,O]=yield Promise.all([on(e,"prob_unpack_two",ya,"main",["read-only-storage","storage","storage"]),on(e,"prob_blur_axis",Hs,"blur_axis",["read-only-storage","storage","read-only-storage","uniform"]),on(e,"prob_blur_z_gate",Hs,"blur_z_gate",["read-only-storage","storage","read-only-storage","uniform"]),on(e,"transpose_f32",xa,"main",["read-only-storage","storage"])]);if(S)return null;const ce=GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST,fe=144,ye=w(fe,ce),we=w(fe,ce),_e=w(fe,ce),K=R=>({buffer:R,offset:0,size:s}),ae=F(L.bgl,[K(M.pass0HoldBuf),K(M.y0),K(M.y1)]),z=F(L.bgl,[K(r),K(M.b),K(M.sup)]),oe=[M.y0,M.y1,M.b].map(R=>({buf:R,bgBlurX:F(N.bgl,[K(R),K(r),K(M.sup),ye]),bgBlurY:F(N.bgl,[K(r),K(R),K(M.sup),we]),bgBlurZ:F(Z.bgl,[K(R),K(r),K(M.sup),_e]),bgTranspose:F(O.bgl,[K(r),K(R)])}));return{pUnpack:L.pipe,pBlurAxis:N.pipe,pBlurZGate:Z.pipe,pTransposeF32:O.pipe,bgUnpack0:ae,bgUnpack1:z,tissues:oe,uboX:ye,uboY:we,uboZ:_e,uboScratch:new ArrayBuffer(fe),lastBlurKey:null}}).catch(L=>{throw U=null,L})),U}function D(){m?h&&W().catch(()=>{}):(G().catch(()=>{}),X().catch(()=>{}))}function T(){S=!0}function Y(ye){return Be(this,arguments,function*({volume:L,ioOpts:N,useCone:Z,padInputHost:O,headRowHost:ce,hasF16Flag:fe}){var _e;if(N!=null&&N.gpuNativeInput){const K=(_e=N.normOffset)!=null?_e:0,ae=N.normRange||1,z=L instanceof Uint8Array||L instanceof Uint8ClampedArray,oe=s>=n*4||a.size>=n*4;if(z){const Q=js(L,ce,C,K,Z),H=yield G();for(let J=0;J<256;J++)H.lutF32[J]=J===K?0:(J-K)/ae;return e.queue.writeBuffer(H.ubo,0,H.lutF32),e.queue.writeBuffer(r,0,L,0,n),{info:Q,runPrePasses(J,q){(!$||x)&&(J.clearBuffer(o),$=!0,x=!1);const ke=J.beginComputePass();if(ke.setPipeline(H.pipe),ke.setBindGroup(0,H.bg),ke.dispatchWorkgroups(8,I,8),ke.end(),q.push("preprocess"),y){const be=J.beginComputePass();be.setPipeline(f.pipe),be.setBindGroup(0,l),be.dispatchWorkgroups(1,I,I),be.end(),q.push("preprocess"),y=!1}}}}if(oe){const Q=js(L,ce,C,K,Z),H=yield V(),J=!(s>=n*4),q=J?a:r,ke=J?H.bgAct0:H.bgLabels,be=L instanceof Float32Array?L:Float32Array.from(L);return H.f32Tmp[0]=K,H.f32Tmp[1]=ae,H.f32Tmp[2]=0,H.f32Tmp[3]=0,e.queue.writeBuffer(H.ubo,0,H.f32Tmp),e.queue.writeBuffer(q,0,be,0,n),{info:Q,runPrePasses(Le,Ce){(!$||x)&&(Le.clearBuffer(o),$=!0,x=!1);const Ee=Le.beginComputePass();if(Ee.setPipeline(H.pipe),Ee.setBindGroup(0,ke),Ee.dispatchWorkgroups(8,I,8),Ee.end(),Ce.push("preprocess"),y||J){const Ie=Le.beginComputePass();Ie.setPipeline(f.pipe),Ie.setBindGroup(0,l),Ie.dispatchWorkgroups(1,I,I),Ie.end(),Ce.push("preprocess"),y=!1}}}}const R=new Float32Array(n);for(let Q=0;Q<n;Q++){const H=L[Q];R[Q]=H===K?0:(H-K)/ae}const ue=kn(R,[I,I,I],[2,1,0]),te=Xs(ue,O,ce,fe,Z);return e.queue.writeBuffer(o,0,O),$=!0,x=!1,{info:te,runPrePasses(Q,H){if(y){const J=Q.beginComputePass();J.setPipeline(f.pipe),J.setBindGroup(0,l),J.dispatchWorkgroups(1,I,I),J.end(),H.push("preprocess"),y=!1}}}}const we=Xs(L,O,ce,fe,Z);return e.queue.writeBuffer(o,0,O),$=!0,x=!1,{info:we,runPrePasses(K,ae){if(y){const z=K.beginComputePass();z.setPipeline(f.pipe),z.setBindGroup(0,l),z.dispatchWorkgroups(1,I,I),z.end(),ae.push("preprocess"),y=!1}}}})}function E(we){return Be(this,arguments,function*({enc:L,schedule:N,passCategories:Z,u4Tmp:O,ioOpts:ce,paced:fe=!1,onProgress:ye=null}){const _e=N.clsSkipped?N.clsStrips.length:I;if(!m){O[0]=c.clsVec4Off,O[1]=c.clsBiasOff,O[2]=N.clsSkipped?0:1,O[3]=0,e.queue.writeBuffer(g,0,O);{const be=L.beginComputePass();be.setPipeline(u.pipe),be.setBindGroup(0,d),_e>0&&be.dispatchWorkgroups(1,N.clsSkipped?1:64,_e),be.end(),Z.push("classify")}if(ce!=null&&ce.gpuNativeOutput){const be=yield X(),Le=L.beginComputePass();Le.setPipeline(be.pipe),Le.setBindGroup(0,be.bg),Le.dispatchWorkgroups(8,I,8),Le.end(),Z.push("postprocess"),x=!0,L.copyBufferToBuffer(o,0,i,0,n),e.queue.submit([L.finish()]),yield i.mapAsync(GPUMapMode.READ);const Ce=new Uint8Array(i.getMappedRange()).slice();return i.unmap(),fe&&ye&&ye(1,""),[Ce]}L.copyBufferToBuffer(r,0,i,0,s),e.queue.submit([L.finish()]),yield i.mapAsync(GPUMapMode.READ);const q=new Uint8Array(i.getMappedRange()),ke=new Float32Array(n);for(let be=0;be<n;be++)ke[be]=q[be];return i.unmap(),fe&&ye&&ye(1,""),[ke]}if(h){const q=yield W();O[0]=c.clsVec4Off,O[1]=c.clsBiasOff,O[2]=N.clsSkipped?0:1,O[3]=0,e.queue.writeBuffer(g,0,O),O[3]=1,e.queue.writeBuffer(M.clsUbo1,0,O);{const Pe=L.beginComputePass();Pe.setPipeline(u.pipe),Pe.setBindGroup(0,d),_e>0&&Pe.dispatchWorkgroups(1,N.clsSkipped?1:64,_e),Pe.end(),Z.push("classify")}L.copyBufferToBuffer(r,0,M.pass0HoldBuf,0,s),N.clsSkipped&&L.clearBuffer(r,0,s);{const Pe=L.beginComputePass();Pe.setPipeline(u.pipe),Pe.setBindGroup(0,M.bgCls1),_e>0&&Pe.dispatchWorkgroups(1,N.clsSkipped?1:64,_e),Pe.end(),Z.push("classify")}y=!0;const ke=`${m.sigma}|${m.supportPower}`,be=m.sigma>0,Le=be?Math.max(1,Math.round(3*m.sigma)):0;if(q.lastBlurKey!==ke){const Pe=new Uint32Array(q.uboScratch),De=new Float32Array(q.uboScratch);De.fill(0);let rt=1;if(be){rt=0;for(let et=-Le;et<=Le;et++){const tt=Math.exp(-.5*et*et/(m.sigma*m.sigma));De[4+et+Le]=tt,rt+=tt}}else De[4]=1;Pe[1]=Le,De[2]=rt,Pe[0]=0,De[3]=1,e.queue.writeBuffer(q.uboX,0,q.uboScratch),Pe[0]=1,e.queue.writeBuffer(q.uboY,0,q.uboScratch),Pe[0]=2,De[3]=m.supportPower,e.queue.writeBuffer(q.uboZ,0,q.uboScratch),q.lastBlurKey=ke}{const Pe=L.beginComputePass();Pe.setPipeline(q.pUnpack),Pe.setBindGroup(0,q.bgUnpack0),Pe.dispatchWorkgroups(256,256,1),Pe.end(),Z.push("postprocess");const De=L.beginComputePass();De.setPipeline(q.pUnpack),De.setBindGroup(0,q.bgUnpack1),De.dispatchWorkgroups(256,256,1),De.end(),Z.push("postprocess")}fe&&(e.queue.submit([L.finish()]),yield e.queue.onSubmittedWorkDone(),ye&&ye(.992,""),yield vo(),L=e.createCommandEncoder());const Ce=!!(ce!=null&&ce.gpuNativeOutput);for(let Pe=0;Pe<3;Pe++){const De=q.tissues[Pe];if(be){const et=L.beginComputePass();et.setPipeline(q.pBlurAxis),et.setBindGroup(0,De.bgBlurX),et.dispatchWorkgroups(4,64,I),et.end(),Z.push("postprocess");const tt=L.beginComputePass();tt.setPipeline(q.pBlurAxis),tt.setBindGroup(0,De.bgBlurY),tt.dispatchWorkgroups(4,64,I),tt.end(),Z.push("postprocess")}const rt=L.beginComputePass();if(rt.setPipeline(q.pBlurZGate),rt.setBindGroup(0,De.bgBlurZ),rt.dispatchWorkgroups(4,64,I),rt.end(),Z.push("postprocess"),Ce){const et=L.beginComputePass();et.setPipeline(q.pTransposeF32),et.setBindGroup(0,De.bgTranspose),et.dispatchWorkgroups(8,I,8),et.end(),Z.push("postprocess")}else Pe<2&&L.copyBufferToBuffer(r,0,De.buf,0,s)}const Ee=Ce?[M.y0,M.y1,M.b]:[M.y0,M.y1,r];L.copyBufferToBuffer(Ee[0],0,i,0,s),e.queue.submit([L.finish()]),yield i.mapAsync(GPUMapMode.READ);const Ie=new Float32Array(i.getMappedRange()).slice();i.unmap();const He=Pe=>Be(null,null,function*(){const De=e.createCommandEncoder();De.copyBufferToBuffer(Pe,0,i,0,s),e.queue.submit([De.finish()]),yield i.mapAsync(GPUMapMode.READ);const rt=new Float32Array(i.getMappedRange()).slice();return i.unmap(),rt}),Ne=yield He(Ee[1]),Ue=yield He(Ee[2]);return fe&&ye&&ye(1,""),[Ie,Ne,Ue]}O[0]=c.clsVec4Off,O[1]=c.clsBiasOff,O[2]=N.clsSkipped?0:1,O[3]=0,e.queue.writeBuffer(g,0,O);{const q=L.beginComputePass();q.setPipeline(u.pipe),q.setBindGroup(0,d),_e>0&&q.dispatchWorkgroups(1,N.clsSkipped?1:64,_e),q.end(),Z.push("classify"),L.copyBufferToBuffer(r,0,i,0,s)}e.queue.submit([L.finish()]),yield i.mapAsync(GPUMapMode.READ);const K=1/65535,ae=new Uint16Array(i.getMappedRange()),z=new Float32Array(n),oe=new Float32Array(n);for(let q=0;q<n;q++)z[q]=ae[q*2]*K,oe[q]=ae[q*2+1]*K;i.unmap(),O[3]=1,e.queue.writeBuffer(g,0,O);const R=e.createCommandEncoder();N.clsSkipped&&R.clearBuffer(r,0,s);const ue=R.beginComputePass();ue.setPipeline(u.pipe),ue.setBindGroup(0,d),_e>0&&ue.dispatchWorkgroups(1,N.clsSkipped?1:64,_e),ue.end(),Z.push("classify"),R.copyBufferToBuffer(r,0,i,0,s),e.queue.submit([R.finish()]),yield i.mapAsync(GPUMapMode.READ);const te=new Uint16Array(i.getMappedRange()),Q=new Float32Array(n),H=new Float32Array(n);for(let q=0;q<n;q++)Q[q]=te[q*2]*K,H[q]=te[q*2+1]*K;i.unmap();const J=pa([z,oe,Q],H,[I,I,I],p);return ce!=null&&ce.gpuNativeOutput?J.map(q=>kn(q,[I,I,I],[2,1,0])):J})}return{prepareInput:Y,finishAndReadback:E,warmupIoPipelines:D,dispose:T}}function Uo(e,t){if(e==="sg32")return{decls:"",entryArgs:"",add:o=>`subgroupAdd(${o})`,min:o=>`subgroupMin(${o})`,max:o=>`subgroupMax(${o})`};const n=(o,a)=>{const r=f=>o==="+"?`  x = x + subgroupShuffleXor(x, ${f}u);`:`  x = ${o}(x, subgroupShuffleXor(x, ${f}u));`;return e==="sg64"?`fn ${a}(v : f32) -> f32 {
  var x = v;
${r(16)}
${r(8)}
${r(4)}
${r(2)}
${r(1)}
  return x;
}
`:`fn ${a}(v : f32, sg_size : u32) -> f32 {
  if (sg_size == 32u) { return ${o==="+"?"subgroupAdd":o==="min"?"subgroupMin":"subgroupMax"}(v); }
  var x = v;
${r(16)}
${r(8)}
${r(4)}
${r(2)}
${r(1)}
  return x;
}
`},s=(t==="none"?"":n("+","sg32_add"))+n("min","sg32_min")+n("max","sg32_max");return e==="sg64"?{decls:s,entryArgs:"",add:o=>`sg32_add(${o})`,min:o=>`sg32_min(${o})`,max:o=>`sg32_max(${o})`}:{decls:s,entryArgs:`,
             @builtin(subgroup_size) sg_size : u32`,add:o=>`sg32_add(${o}, sg_size)`,min:o=>`sg32_min(${o}, sg_size)`,max:o=>`sg32_max(${o}, sg_size)`}}function Wo({V4:e,sw:t,norm:n,writeMomFn:s,momParams:o,momArgs:a}){const r=n==="none",i=r?"vec2<f32>":"vec4<f32>",f=r?`fn sg32_pack1(a : ${e}, slane : u32, c_out : u32, ${o}) -> u32 {
  let f = vec4<f32>(a${t});
  let mn = subgroupMin(min(min(f.x, f.y), min(f.z, f.w)));
  let mx = subgroupMax(max(max(f.x, f.y), max(f.z, f.w)));
  let sp = mx - mn;
  if (slane == 0u) {
    write_mom(c_out, vec4<f32>(0.0, 0.0, mn, sp), ${a});
  }
  return pack4x8unorm((f - vec4<f32>(mn)) * select(0.0, 1.0 / sp, sp > 1e-7));
}
`:`fn sg32_pack1(a : ${e}, slane : u32, c_out : u32, ${o}) -> u32 {
  let f = vec4<f32>(a${t});
  let s = subgroupAdd(f.x + f.y + f.z + f.w);
  let q = subgroupAdd(dot(f, f));
  let mn = subgroupMin(min(min(f.x, f.y), min(f.z, f.w)));
  let mx = subgroupMax(max(max(f.x, f.y), max(f.z, f.w)));
  let sp = mx - mn;
  if (slane == 0u) {
    write_mom(c_out, vec4<f32>(s, q, mn, sp), ${a});
  }
  return pack4x8unorm((f - vec4<f32>(mn)) * select(0.0, 1.0 / sp, sp > 1e-7));
}
`,l=r?`fn sg_sub_store(a : ${e}, slot : u32, sg_id : u32) {
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
`,u=r?`      let p0 = sh_sg[rb];
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
      write_mom(c_base + slane, vec4<f32>(0.0, 0.0, rmn, sp), ${a});`:`      let p0 = sh_sg[rb];
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
      write_mom(c_base + slane, vec4<f32>(rs, rq, rmn, sp), ${a});`;return`var<workgroup> sh_sg  : array<${i}, 128>;
var<workgroup> sh_res : array<vec2<f32>, 32>;
${s}${f}${l}fn reduce_pack4_sg(
  a0 : ${e}, a1 : ${e}, a2 : ${e}, a3 : ${e},
  h : u32, slane : u32, sg_size : u32, sg_id : u32,
  c_base : u32, ${o}
) -> vec4<u32> {
  var out_q : vec4<u32>;
  if (sg_size == 32u) {
    out_q = vec4<u32>(
      sg32_pack1(a0, slane, c_base + 0u, ${a}),
      sg32_pack1(a1, slane, c_base + 1u, ${a}),
      sg32_pack1(a2, slane, c_base + 2u, ${a}),
      sg32_pack1(a3, slane, c_base + 3u, ${a})
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
${u}
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
`}function Ro(e){const{cs:t,chan:n,nclass:s,clsK4:o,dilations:a,activation:r,norm:i,hasF16:f,subgroupMode:l="none",splitHalves:u,probCfg:d,chunkableStd:g=!1}=e,c=t/4,p=u?t/2:t,m=p*ct,h=p*pt,M=9*t*3*c,_=M,w=M+c,y=f&&c%2===0&&w*8<=65536,$=Bo(r),x=f?`enable f16;
`:"",S=f&&l!=="none",C=S?`enable subgroups;
`:"",v=f?"f16":"f32",A=f?"h":"f",k=`vec4<${v}>`,U=f?256:255,F=E=>{const L=E?".xzyw":"",N=(fe,ye,we)=>u&&ye>=p?`y8_1[${fe} + ${(ye-p)*pt}u] = ${we};`:`y8_0[${fe} + ${ye*pt}u] = ${we};`;if(S&&(l==="sg32"||l==="sg64"||l==="sg32_64")){const fe=Uo(l,i);return{decls:fe.decls,entryArgs:fe.entryArgs,localHeader:"",emit:({accVar:ye,cStart:we,cEnd:_e,hrExpr:K,yRowExpr:ae,momMode:z,writeY8Expr:oe="true"})=>ut(_e-we,R=>{const ue=we+R,te=z==="ext_and_main"?`mom_ext[(${K}) * ${t}u + ${ue}u] = mv;
      mom_main[(row_idx * 2u + sg) * ${t}u + ${ue}u] = mv;`:z==="ext_only"?`mom_ext[(${K}) * ${t}u + ${ue}u] = mv;`:`mom_main[(${K}) * ${t}u + ${ue}u] = mv;`;return i==="none"?`  {
    let f = vec4<f32>(${ye}.v_${R}${L});
    let lmn = ${fe.min("min(min(f.x, f.y), min(f.z, f.w))")};
    let lmx = ${fe.max("max(max(f.x, f.y), max(f.z, f.w))")};
    let sp = lmx - lmn;
    let inv = select(0.0, 1.0 / sp, sp > 1e-7);
    if (${oe}) {
      ${N(ae,ue,"pack4x8unorm((f - vec4<f32>(lmn)) * inv)")}
    }
    if (slane == 0u) {
      let mv = vec4<f32>(0.0, 0.0, lmn, sp);
      ${te}
    }
  }
`:`  {
    let f = vec4<f32>(${ye}.v_${R}${L});
    let ls = ${fe.add("f.x + f.y + f.z + f.w")};
    let lq = ${fe.add("dot(f, f)")};
    let lmn = ${fe.min("min(min(f.x, f.y), min(f.z, f.w))")};
    let lmx = ${fe.max("max(max(f.x, f.y), max(f.z, f.w))")};
    let sp = lmx - lmn;
    let inv = select(0.0, 1.0 / sp, sp > 1e-7);
    if (${oe}) {
      ${N(ae,ue,"pack4x8unorm((f - vec4<f32>(lmn)) * inv)")}
    }
    if (slane == 0u) {
      let mv = vec4<f32>(ls, lq, lmn, sp);
      ${te}
    }
  }
`})}}if(S&&l==="sg_small")return{decls:Wo({V4:k,sw:L,norm:i,writeMomFn:`fn write_mom(c_out : u32, mv : vec4<f32>, ext_off : u32, main_off : u32, mom_mode : u32) {
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
`,emit:({accVar:we,cStart:_e,cEnd:K,hrExpr:ae,yRowExpr:z,momMode:oe,writeY8Expr:R="true"})=>{const ue=oe==="ext_and_main"?"1u":oe==="ext_only"?"2u":"0u",te=oe==="main"?"0u":`(${ae}) * ${t}u`,Q=oe==="ext_only"?"0u":`(row_idx * 2u + sg) * ${t}u`;let H=`  let ep_ext_off = ${te};
  let ep_main_off = ${Q};
`;for(let J=0;J<K-_e;J+=4){const q=_e+J;H+=`  {
    let qw = reduce_pack4_sg(${we}.v_${J}, ${we}.v_${J+1}, ${we}.v_${J+2}, ${we}.v_${J+3}, h, slane, sg_size, sg_id, ${q}u, ep_ext_off, ep_main_off, ${ue});
    if (${R}) {
      ${N(z,q,"qw.x")}
      ${N(z,q+1,"qw.y")}
      ${N(z,q+2,"qw.z")}
      ${N(z,q+3,"qw.w")}
    }
  }
`}return H}};const Z=`    let c_out = c_base + slane;
    if (mom_mode == 0u) {
      mom_main[main_off + c_out] = mv;
    } else if (mom_mode == 1u) {
      mom_ext[ext_off + c_out] = mv;
      mom_main[main_off + c_out] = mv;
    } else {
      mom_ext[ext_off + c_out] = mv;
    }`;if(i==="none"&&f){const fe=ut(31,we=>`    {
      let m = sh_mm[rb + ${we+1}u];
      rmn = min(rmn, m.x);
      rmx = max(rmx, m.y);
    }
`);return{decls:`var<workgroup> sh_mm  : array<vec2<f16>, 1024>;
var<workgroup> sh_res : array<vec2<f32>, 32>;
fn vec_mm16(a : vec4<f16>) -> vec2<f16> {
  return vec2<f16>(min(min(a.x, a.y), min(a.z, a.w)), max(max(a.x, a.y), max(a.z, a.w)));
}
fn reduce_pack4(
  a0 : ${k}, a1 : ${k}, a2 : ${k}, a3 : ${k},
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
${fe}    let fmn = f32(rmn);
    let sp = f32(rmx) - fmn;
    sh_res[h * 4u + slane] = vec2<f32>(fmn, select(0.0, 1.0 / sp, sp > 1e-7));
    let mv = vec4<f32>(0.0, 0.0, fmn, sp);
${Z}
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
`,emit:({accVar:we,cStart:_e,cEnd:K,hrExpr:ae,yRowExpr:z,momMode:oe,writeY8Expr:R="true"})=>{const ue=oe==="ext_and_main"?"1u":oe==="ext_only"?"2u":"0u",te=oe==="main"?"0u":`(${ae}) * ${t}u`,Q=oe==="ext_only"?"0u":`(row_idx * 2u + sg) * ${t}u`;let H=`  let ep_ext_off = ${te};
  let ep_main_off = ${Q};
`;for(let J=0;J<K-_e;J+=4){const q=_e+J;H+=`  {
    let qw = reduce_pack4(${we}.v_${J}, ${we}.v_${J+1}, ${we}.v_${J+2}, ${we}.v_${J+3}, h, slane, ${q}u, ep_ext_off, ep_main_off, ${ue});
    if (${R}) {
      ${N(z,q,"qw.x")}
      ${N(z,q+1,"qw.y")}
      ${N(z,q+2,"qw.z")}
      ${N(z,q+3,"qw.w")}
    }
  }
`}return H}}}if(i==="none"){const fe=ut(32,we=>`    {
      let m = sh_mm[rb + ${we}u];
      rmn = min(rmn, m.x);
      rmx = max(rmx, m.y);
    }
`);return{decls:`var<workgroup> sh_mm  : array<vec2<f32>, 1024>;
var<workgroup> sh_res : array<vec2<f32>, 32>;
fn vec_mm(f : vec4<f32>) -> vec2<f32> {
  return vec2<f32>(min(min(f.x, f.y), min(f.z, f.w)), max(max(f.x, f.y), max(f.z, f.w)));
}
fn reduce_pack4(
  a0 : ${k}, a1 : ${k}, a2 : ${k}, a3 : ${k},
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
${fe}    let sp = rmx - rmn;
    sh_res[h * 4u + slane] = vec2<f32>(rmn, select(0.0, 1.0 / sp, sp > 1e-7));
    let mv = vec4<f32>(0.0, 0.0, rmn, sp);
${Z}
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
`,emit:({accVar:we,cStart:_e,cEnd:K,hrExpr:ae,yRowExpr:z,momMode:oe,writeY8Expr:R="true"})=>{const ue=oe==="ext_and_main"?"1u":oe==="ext_only"?"2u":"0u",te=oe==="main"?"0u":`(${ae}) * ${t}u`,Q=oe==="ext_only"?"0u":`(row_idx * 2u + sg) * ${t}u`;let H=`  let ep_ext_off = ${te};
  let ep_main_off = ${Q};
`;for(let J=0;J<K-_e;J+=4){const q=_e+J;H+=`  {
    let qw = reduce_pack4(${we}.v_${J}, ${we}.v_${J+1}, ${we}.v_${J+2}, ${we}.v_${J+3}, h, slane, ${q}u, ep_ext_off, ep_main_off, ${ue});
    if (${R}) {
      ${N(z,q,"qw.x")}
      ${N(z,q+1,"qw.y")}
      ${N(z,q+2,"qw.z")}
      ${N(z,q+3,"qw.w")}
    }
  }
`}return H}}}if(f){const fe=ut(31,we=>{const _e=we+1;return`    {
      let s = sh_sq[rb + ${_e}u];
      let m = sh_mm[rb + ${_e}u];
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
  a0 : ${k}, a1 : ${k}, a2 : ${k}, a3 : ${k},
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
${fe}    let fmn = f32(rmn);
    let sp = f32(rmx) - fmn;
    sh_res[h * 4u + slane] = vec2<f32>(fmn, select(0.0, 1.0 / sp, sp > 1e-7));
    let mv = vec4<f32>(rs, rq, fmn, sp);
${Z}
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
`,emit:({accVar:we,cStart:_e,cEnd:K,hrExpr:ae,yRowExpr:z,momMode:oe,writeY8Expr:R="true"})=>{const ue=oe==="ext_and_main"?"1u":oe==="ext_only"?"2u":"0u",te=oe==="main"?"0u":`(${ae}) * ${t}u`,Q=oe==="ext_only"?"0u":`(row_idx * 2u + sg) * ${t}u`;let H=`  let ep_ext_off = ${te};
  let ep_main_off = ${Q};
`;for(let J=0;J<K-_e;J+=4){const q=_e+J;H+=`  {
    let qw = reduce_pack4(${we}.v_${J}, ${we}.v_${J+1}, ${we}.v_${J+2}, ${we}.v_${J+3}, h, slane, ${q}u, ep_ext_off, ep_main_off, ${ue});
    if (${R}) {
      ${N(z,q,"qw.x")}
      ${N(z,q+1,"qw.y")}
      ${N(z,q+2,"qw.z")}
      ${N(z,q+3,"qw.w")}
    }
  }
`}return H}}}const O=ut(32,fe=>`    {
      let s = sh_sq[rb + ${fe}u];
      let m = sh_mm[rb + ${fe}u];
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
  a0 : ${k}, a1 : ${k},
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
${O}    let sp = rmx - rmn;
    sh_res[h * 2u + slane] = vec2<f32>(rmn, select(0.0, 1.0 / sp, sp > 1e-7));
    let mv = vec4<f32>(rs, rq, rmn, sp);
${Z}
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
`,emit:({accVar:fe,cStart:ye,cEnd:we,hrExpr:_e,yRowExpr:K,momMode:ae,writeY8Expr:z="true"})=>{const oe=ae==="ext_and_main"?"1u":ae==="ext_only"?"2u":"0u",R=ae==="main"?"0u":`(${_e}) * ${t}u`,ue=ae==="ext_only"?"0u":`(row_idx * 2u + sg) * ${t}u`;let te=`  let ep_ext_off = ${R};
  let ep_main_off = ${ue};
`;for(let Q=0;Q<we-ye;Q+=2){const H=ye+Q;te+=`  {
    let qw = reduce_pack2(${fe}.v_${Q}, ${fe}.v_${Q+1}, h, slane, ${H}u, ep_ext_off, ep_main_off, ${oe});
    if (${z}) {
      ${N(K,H,"qw.x")}
      ${N(K,H+1,"qw.y")}
    }
  }
`}return te}}},G=()=>`
@group(0) @binding(0) var<storage, read_write> act0 : array<u32>;
@group(0) @binding(1) var<storage, read_write> act1 : array<u32>;
@compute @workgroup_size(${ct}, 1, 1)
fn main(@builtin(local_invocation_id) lid : vec3<u32>,
        @builtin(workgroup_id) wid : vec3<u32>) {
  let row_base = (wid.z * 256u + wid.y) * ${m}u + lid.x;
  let val = ${$.uZeroWord}u;
  for (var c : u32 = 0u; c < ${p}u; c = c + 1u) {
    let idx = row_base + c * ${ct}u;
    act0[idx] = val;
    ${u?"act1[idx] = val;":""}
  }
}`,V=a[0];return{initActWgsl:G,conv0Wgsl:()=>{const E=!f&&u,L=F(!1),N=(_e,K)=>{const ae=_e/4,z=K/4;return ut(z-ae,oe=>{const R=ae+oe,ue=R*4;return`          {
            let w0 = w16_4[wb + ${R}u];
            let w1 = w16_4[wb + ${c+R}u];
            let w2 = w16_4[wb + ${2*c+R}u];
            a_${ue}     = fma(vn, ${k}(w0.x), fma(vc, ${k}(w1.x), fma(vp, ${k}(w2.x), a_${ue})));
            a_${ue+1} = fma(vn, ${k}(w0.y), fma(vc, ${k}(w1.y), fma(vp, ${k}(w2.y), a_${ue+1})));
            a_${ue+2} = fma(vn, ${k}(w0.z), fma(vc, ${k}(w1.z), fma(vp, ${k}(w2.z), a_${ue+2})));
            a_${ue+3} = fma(vn, ${k}(w0.w), fma(vc, ${k}(w1.w), fma(vp, ${k}(w2.w), a_${ue+3})));
          }
`})},Z=Math.floor(V/4),O=V%4;let ce="";O===0?ce=`
        let vn = inp_4[base - ${Z}u];
        let vc = inp_4[base];
        let vp = inp_4[base + ${Z}u];`:Z===0&&O===1?ce=`
        let vL = inp_4[base - 1u];
        let vc = inp_4[base];
        let vR = inp_4[base + 1u];
        let vn = ${k}(vL.w, vc.xyz);
        let vp = ${k}(vc.yzw, vR.x);`:O===1?ce=`
        let vL = inp_4[base - ${Z+1}u];
        let vN = inp_4[base - ${Z}u];
        let vc = inp_4[base];
        let vP = inp_4[base + ${Z}u];
        let vR = inp_4[base + ${Z+1}u];
        let vn = ${k}(vL.w, vN.xyz);
        let vp = ${k}(vP.yzw, vR.x);`:O===2?ce=`
        let vL = inp_4[base - ${Z+1}u];
        let vN = ${Z===0?"inp_4[base]":`inp_4[base - ${Z}u]`};
        let vc = ${Z===0?"vN":"inp_4[base]"};
        let vP = ${Z===0?"vN":`inp_4[base + ${Z}u]`};
        let vR = inp_4[base + ${Z+1}u];
        let vn = ${k}(vL.zw, vN.xy);
        let vp = ${k}(vP.zw, vR.xy);`:ce=`
        let vL = inp_4[base - ${Z+1}u];
        let vN = ${Z===0?"inp_4[base]":`inp_4[base - ${Z}u]`};
        let vc = ${Z===0?"vN":"inp_4[base]"};
        let vP = ${Z===0?"vN":`inp_4[base + ${Z}u]`};
        let vR = inp_4[base + ${Z+1}u];
        let vn = ${k}(vL.yzw, vN.x);
        let vp = ${k}(vP.w, vR.xyz);`;const fe=(_e,K,ae,z)=>{const oe=z-ae,R=ut(oe,Q=>`  v_${Q} : ${k},
`),ue=ut(oe,Q=>{const H=ae+Q;return i==="none"?`  var a_${H} = ${k}(${v}(qmeta[${3*t+H}u]));
`:`  var a_${H} = ${k}(0.0${A});
`}),te=Array.from({length:oe},(Q,H)=>`a_${ae+H}`).join(", ");return`struct ${K} {
${R}};
fn ${_e}(y : i32, z : i32, x_pad : u32) -> ${K} {
${ue}  var tap_yz : u32 = 0u;
  for (var dz : i32 = -1; dz <= 1; dz = dz + 1) {
    let sz = z + dz * ${V};
    for (var dy : i32 = -1; dy <= 1; dy = dy + 1) {
      let sy = y + dy * ${V};
      if ((u32(sz) | u32(sy)) < 256u) {
        let base = (u32(sz) * 256u + u32(sy)) * ${ct}u + x_pad;
${ce}
        let wb = tap_yz * ${3*c}u;
${N(ae,z)}
      }
      tap_yz = tap_yz + 1u;
    }
  }
  return ${K}(${te});
}
`},ye=(_e,K,ae,z,oe)=>{const R=oe?`  let y = i32(p0.bg_y0 + lid.y);
  let z = i32(p0.bg_z0);`:`  var y : i32;
  var z : i32;
  if (p0.is_full != 0u) {
    y = i32(wid.y * 4u + lid.y);
    z = i32(wid.z);
  } else {
    let pk = strips0[wid.z];
    y = i32((pk & 255u) * 4u + lid.y);
    z = i32(pk >> 8u);
  }`,ue=oe?"lid.y * 2u + sg":"row_idx * 2u + sg";return`
@compute @workgroup_size(64, 4, 1)
fn ${_e}(@builtin(local_invocation_id) lid : vec3<u32>,
             @builtin(workgroup_id) wid : vec3<u32>${L.entryArgs||""}) {
  let sg = lid.x >> 5u;
  let slane = lid.x & 31u;
${L.localHeader}  let x_pad = lid.x + ${Ht}u;
${R}
  let acc = ${K}(y, z, x_pad);
  let row_idx = u32(z) * 256u + u32(y);
  let y_row_base = row_idx * ${h}u + lid.x;
${L.emit({accVar:"acc",cStart:ae,cEnd:z,hrExpr:ue,yRowExpr:"y_row_base",momMode:oe?"ext_only":"main"})}}`},we=E?fe("run_conv0_lo","Conv0AccLo",0,p)+fe("run_conv0_hi","Conv0AccHi",p,t)+ye("main_lo","run_conv0_lo",0,p,!1)+ye("main_hi","run_conv0_hi",p,t,!1)+ye("main_bg_lo","run_conv0_lo",0,p,!0)+ye("main_bg_hi","run_conv0_hi",p,t,!0):fe("run_conv0","Conv0Acc",0,t)+ye("main","run_conv0",0,t,!1)+ye("main_bg","run_conv0",0,t,!0);return`${x}${C}
struct Params0 {
  is_full : u32,
  bg_y0 : u32,
  bg_z0 : u32,
  pad0 : u32,
};
@group(0) @binding(0) var<storage, read> inp_4 : array<${k}>;
@group(0) @binding(1) var<storage, read_write> y8_0 : array<u32>;
@group(0) @binding(2) var<storage, read_write> y8_1 : array<u32>;
@group(0) @binding(3) var<storage, read> w16_4 : array<${k}>;
@group(0) @binding(4) var<storage, read> qmeta : array<f32>;
@group(0) @binding(5) var<storage, read_write> mom_main : array<vec4<f32>>;
@group(0) @binding(6) var<storage, read_write> mom_ext : array<vec4<f32>>;
@group(0) @binding(7) var<storage, read> strips0 : array<u32>;
@group(0) @binding(8) var<uniform> p0 : Params0;
${L.decls}${we}`},prepWgsl:()=>`${x}
${Pn(r)}
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
@group(0) @binding(0) var<storage, read> w16_4 : array<${k}>;
@group(0) @binding(1) var<storage, read> qmeta : array<f32>;
@group(0) @binding(2) var<storage, read_write> mom_main : array<vec4<f32>>;
@group(0) @binding(3) var<storage, read_write> mom_ext : array<vec4<f32>>;
@group(0) @binding(4) var<storage, read_write> mom_stats : array<vec4<f32>>;
@group(0) @binding(5) var<storage, read_write> w_eff : array<${k}>;
@group(0) @binding(6) var<storage, read> main_strips : array<u32>;
@group(0) @binding(7) var<uniform> pp : PrepParams;

${i==="gn"?`var<workgroup> fin_s  : array<f32, 256>;
var<workgroup> fin_q  : array<f32, 256>;
var<workgroup> fin_es : array<f32, 256>;
var<workgroup> fin_eq : array<f32, 256>;
`:""}var<workgroup> fin_mn : array<f32, 256>;
var<workgroup> fin_mx : array<f32, 256>;

@compute @workgroup_size(256, 1, 1)
fn moments_finish(@builtin(local_invocation_index) lid : u32,
                  @builtin(workgroup_id) wid : vec3<u32>) {
  let c = wid.x;
${i==="gn"?`  var s : f32 = 0.0;
  var q : f32 = 0.0;
  var es : f32 = 0.0;
  var eq : f32 = 0.0;
`:""}  var mn : f32 = 3.0e38;
  var mx : f32 = -3.0e38;
  if (pp.is_full != 0u) {
    for (var hr : u32 = lid; hr < ${In}u; hr = hr + 256u) {
      let v = mom_main[hr * ${t}u + c];
${i==="gn"?`      s  += v.x;
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
${i==="gn"?`        s  += v.x;
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
${i==="gn"?`        es += v.x;
        eq += v.y;
`:""}        mn  = min(mn, v.z);
        mx  = max(mx, v.z + v.w);
      }
    }
  }
${i==="gn"?`  fin_s[lid]  = s;
  fin_q[lid]  = q;
  fin_es[lid] = es;
  fin_eq[lid] = eq;
`:""}  fin_mn[lid] = mn;
  fin_mx[lid] = mx;
  workgroupBarrier();
  for (var stride : u32 = 128u; stride > 0u; stride = stride >> 1u) {
    if (lid < stride) {
${i==="gn"?`      fin_s[lid]  += fin_s[lid + stride];
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
${i==="gn"?`    let total_s = fin_s[0] + pp.ext_weight * fin_es[0];
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
    q_ref = max(q_ref, ${U.toFixed(1)} * qs);
  }
  ${i==="none"?"q_ref = 1.0;":""}
  if (lid == 0u) {
    mom_stats[${t*2}u] = vec4<f32>(q_ref, 0.0, 0.0, 0.0);
  }
  let scale_num = ${U.toFixed(1)} / q_ref;
  for (var idx : u32 = lid; idx < ${M}u; idx = idx + 256u) {
    let ic = (idx / ${3*c}u) % ${t}u;
    let qs = mom_stats[ic * 2u].z;
    w_eff[idx] = w16_4[pp.next_w_vec4_off + idx] * ${v}(qs * scale_num);
  }
  if (lid < ${c}u) {
    ${i==="none"?`
    let mb = pp.next_meta_off + ${3*t}u + lid * 4u;
    w_eff[${_}u + lid] = ${k}(${v}(qmeta[mb]), ${v}(qmeta[mb + 1u]), ${v}(qmeta[mb + 2u]), ${v}(qmeta[mb + 3u]));
    `:`
    w_eff[${_}u + lid] = ${k}(0.0${A});
    `}
  }
}`,normWgsl:()=>`${Pn(r)}
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
  let y_base = row_idx * ${h}u + x4;
  let a_base = row_idx * ${m}u + x_pad;
  let mom_base = hr * ${t}u;

  for (var c : u32 = 0u; c < ${p}u; c = c + 1u) {
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
    act8_0[a_base + c * ${ct}u] = pack4x8unorm((a * inv_qs + vec4<f32>(${$.zeroBin.toFixed(1)})) * (1.0 / 255.0));
  }
  ${u?`
  for (var c : u32 = 0u; c < ${p}u; c = c + 1u) {
    let cg = ${p}u + c;
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
    act8_1[a_base + c * ${ct}u] = pack4x8unorm((a * inv_qs + vec4<f32>(${$.zeroBin.toFixed(1)})) * (1.0 / 255.0));
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
  let y_base = np.bg_row * ${h}u + x4;
  let mom_base = sg * ${t}u;
  let dst_row = norm_aux[np.halo_off + idx];
  let a_base = dst_row * ${m}u + x_pad;

  for (var c : u32 = 0u; c < ${p}u; c = c + 1u) {
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
    act8_0[a_base + c * ${ct}u] = pack4x8unorm((a * inv_qs + vec4<f32>(${$.zeroBin.toFixed(1)})) * (1.0 / 255.0));
  }
  ${u?`
  for (var c : u32 = 0u; c < ${p}u; c = c + 1u) {
    let cg = ${p}u + c;
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
    act8_1[a_base + c * ${ct}u] = pack4x8unorm((a * inv_qs + vec4<f32>(${$.zeroBin.toFixed(1)})) * (1.0 / 255.0));
  }`:""}
}`,convWgsl:()=>{const E=!f&&u,L=F(f),N=(K,ae)=>f?`
          let ${K} = vec4<f16>(vec2<f16>(unpack2x16float(((${ae} & 0x00FF00FFu) << 2u) | 0x3C003C00u)), vec2<f16>(unpack2x16float(((${ae} >> 6u) & 0x03FC03FCu) | 0x3C003C00u))) - vec4<f16>(${$.sterbenzSub});`:`
          let ${K} = unpack4x8unorm(${ae}) - vec4<f32>(${$.uZeroFloat});`,Z=K=>`
          let uL = ${K}[base - off0];
          let uN = ${K}[base - off1];
          let uC = ${K}[base];
          let uP = ${K}[base + off1];
          let uR = ${K}[base + off0];
          let u_neg = (uL >> sh_l) | (uN << sh_r);
          let u_pos = (uP >> sh_r) | (uR << sh_l);`+N("vn","u_neg")+N("vc","uC")+N("vp","u_pos"),O=(K,ae)=>{const z=K/4,oe=ae/4;if(y){const R=c/2,ue=c;let te="";for(let Q=z;Q<oe;Q+=2){const H=Q*4,J=Q/2;te+=`          {
            let wp0 = w_eff_u[wbu + ${J}u];
            let wp1 = w_eff_u[wbu + ${R+J}u];
            let wp2 = w_eff_u[wbu + ${ue+J}u];
            let w0a = u4_lo(wp0);
            let w0b = u4_hi(wp0);
            let w1a = u4_lo(wp1);
            let w1b = u4_hi(wp1);
            let w2a = u4_lo(wp2);
            let w2b = u4_hi(wp2);
            a_${H}     = fma(vn, vec4<f16>(w0a.x), fma(vc, vec4<f16>(w1a.x), fma(vp, vec4<f16>(w2a.x), a_${H})));
            a_${H+1} = fma(vn, vec4<f16>(w0a.y), fma(vc, vec4<f16>(w1a.y), fma(vp, vec4<f16>(w2a.y), a_${H+1})));
            a_${H+2} = fma(vn, vec4<f16>(w0a.z), fma(vc, vec4<f16>(w1a.z), fma(vp, vec4<f16>(w2a.z), a_${H+2})));
            a_${H+3} = fma(vn, vec4<f16>(w0a.w), fma(vc, vec4<f16>(w1a.w), fma(vp, vec4<f16>(w2a.w), a_${H+3})));
            a_${H+4} = fma(vn, vec4<f16>(w0b.x), fma(vc, vec4<f16>(w1b.x), fma(vp, vec4<f16>(w2b.x), a_${H+4})));
            a_${H+5} = fma(vn, vec4<f16>(w0b.y), fma(vc, vec4<f16>(w1b.y), fma(vp, vec4<f16>(w2b.y), a_${H+5})));
            a_${H+6} = fma(vn, vec4<f16>(w0b.z), fma(vc, vec4<f16>(w1b.z), fma(vp, vec4<f16>(w2b.z), a_${H+6})));
            a_${H+7} = fma(vn, vec4<f16>(w0b.w), fma(vc, vec4<f16>(w1b.w), fma(vp, vec4<f16>(w2b.w), a_${H+7})));
          }
`}return te}return ut(oe-z,R=>{const ue=z+R,te=ue*4;return`          {
            let w0 = w_eff[wb + ${ue}u];
            let w1 = w_eff[wb + ${c+ue}u];
            let w2 = w_eff[wb + ${2*c+ue}u];
            a_${te}     = fma(vn, ${k}(w0.x), fma(vc, ${k}(w1.x), fma(vp, ${k}(w2.x), a_${te})));
            a_${te+1} = fma(vn, ${k}(w0.y), fma(vc, ${k}(w1.y), fma(vp, ${k}(w2.y), a_${te+1})));
            a_${te+2} = fma(vn, ${k}(w0.z), fma(vc, ${k}(w1.z), fma(vp, ${k}(w2.z), a_${te+2})));
            a_${te+3} = fma(vn, ${k}(w0.w), fma(vc, ${k}(w1.w), fma(vp, ${k}(w2.w), a_${te+3})));
          }
`})},ce=(K,ae,z,oe)=>{const R=oe-z,ue=ut(R,ke=>`  v_${ke} : ${k},
`),te=ut(R,ke=>{const be=z+ke;if(i==="none"){const Le=be>>>2,Ce=["x","y","z","w"][be&3];if(y){const Ee=_+Le>>>1,Ie=_+Le&1?"u4_hi":"u4_lo";return`  var a_${be} = ${k}(${Ie}(w_eff_u[${Ee}u]).${Ce});
`}return`  var a_${be} = ${k}(w_eff[${_+Le}u].${Ce});
`}return`  var a_${be} = ${k}(0.0${A});
`}),Q=p<=8?`(${p}u + cp.pad0)`:`${p}u`,H=y?`        let wbu_tap = tap_yz * ${t*3*c/2}u;
        for (var ic : u32 = 0u; ic < ${Q}; ic = ic + 1u) {
          let base = row_off + ic * ${ct}u;
${Z("act8_0")}
          let wbu = wbu_tap + ic * ${3*c/2}u;
${O(z,oe)}
        }`:`        let wb_tap = tap_yz * ${t*3*c}u;
        for (var ic : u32 = 0u; ic < ${Q}; ic = ic + 1u) {
          let base = row_off + ic * ${ct}u;
${Z("act8_0")}
          let wb = wb_tap + ic * ${3*c}u;
${O(z,oe)}
        }`,J=y?`        for (var ic : u32 = 0u; ic < ${Q}; ic = ic + 1u) {
          let base = row_off + ic * ${ct}u;
${Z("act8_1")}
          let wbu = wbu_tap + (${p}u + ic) * ${3*c/2}u;
${O(z,oe)}
        }`:`        for (var ic : u32 = 0u; ic < ${Q}; ic = ic + 1u) {
          let base = row_off + ic * ${ct}u;
${Z("act8_1")}
          let wb = wb_tap + (${p}u + ic) * ${3*c}u;
${O(z,oe)}
        }`,q=Array.from({length:R},(ke,be)=>`a_${z+be}`).join(", ");return`struct ${ae} {
${ue}};
fn ${K}(y : i32, z : i32, x_pad : u32, dp : u32) -> ${ae} {
${te}  let d_step = i32(dp & 63u);
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
${H}
        ${u?J:""}
      }
      tap_yz = tap_yz + 1u;
    }
  }
  return ${ae}(${q});
}
`},fe=(K,ae,z,oe,R)=>{const ue=R?g?`
  let ext_i = cp.ext_base + wid.z;
  let pk = strips[cp.ext_off + ext_i];
  let y = i32((pk & 255u) * 4u + lid.y);
  let z = i32(pk >> 8u);`:`
  let pk = strips[cp.ext_off + wid.z];
  let y = i32((pk & 255u) * 4u + lid.y);
  let z = i32(pk >> 8u);`:g?`
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
  }`,te=R?g?"ext_i * 8u + lid.y * 2u + sg":"wid.z * 8u + lid.y * 2u + sg":"row_idx * 2u + sg",Q=R?"(((dp >> 24u) & 1u) != 0u)":"true";return`
@compute @workgroup_size(64, 4, 1)
fn ${K}(@builtin(local_invocation_id) lid : vec3<u32>,
             @builtin(workgroup_id) wid : vec3<u32>${L.entryArgs||""}) {
  let x4 = lid.x;
  let sg = x4 >> 5u;
  let slane = x4 & 31u;
${L.localHeader}  let x_pad = x4 + ${Ht}u;
${ue}
  let dp = cp.d_pack;
  let acc = ${ae}(y, z, x_pad, dp);
  let row_idx = u32(z) * 256u + u32(y);
  let y_row_base = row_idx * ${h}u + x4;
${L.emit({accVar:"acc",cStart:z,cEnd:oe,hrExpr:te,yRowExpr:"y_row_base",momMode:R?"ext_and_main":"main",writeY8Expr:Q})}}`},ye=E?ce("run_conv_lo","ConvAccLo",0,p)+ce("run_conv_hi","ConvAccHi",p,t)+fe("main_lo","run_conv_lo",0,p,!1)+fe("main_hi","run_conv_hi",p,t,!1)+fe("main_ext_lo","run_conv_lo",0,p,!0)+fe("main_ext_hi","run_conv_hi",p,t,!0):ce("run_conv","ConvAcc",0,t)+fe("main","run_conv",0,t,!1)+fe("main_ext","run_conv",0,t,!0),we=y?`fn u4_lo(u : vec4<u32>) -> vec4<f16> {
  return vec4<f16>(vec2<f16>(unpack2x16float(u.x)), vec2<f16>(unpack2x16float(u.y)));
}
fn u4_hi(u : vec4<u32>) -> vec4<f16> {
  return vec4<f16>(vec2<f16>(unpack2x16float(u.z)), vec2<f16>(unpack2x16float(u.w)));
}
@group(0) @binding(6) var<uniform> w_eff_u : array<vec4<u32>, ${Math.ceil(w/2)}>;`:`@group(0) @binding(6) var<storage, read> w_eff : array<${k}>;`;return`${x}${C}
${g?`struct ConvParams {
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
${we}
@group(0) @binding(7) var<storage, read> strips : array<u32>;
@group(0) @binding(8) var<uniform> cp : ConvParams;
${L.decls}${ye}`},clsWgsl:()=>`${x}
${Pn(r)}
struct ClsParams {
  w_vec4_off : u32,
  bias_off : u32,
  is_full : u32,
  pad0 : u32,
};
@group(0) @binding(0) var<storage, read> y8_0 : array<u32>;
@group(0) @binding(1) var<storage, read> y8_1 : array<u32>;
@group(0) @binding(2) var<storage, read> w16_4 : array<${k}>;
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
  let y_base = row_idx * ${h}u + x4;
  let mom_base = hr * ${t}u;

  var feat : array<${k}, ${n}>;
  for (var c : u32 = 0u; c < ${n}u; c = c + 1u) {
    let st = mom_stats[c * 2u + 1u];
    let rm = mom_main[mom_base + c];
    ${u?`
    let in_hi = c >= ${p}u;
    let c_loc = select(c, c - ${p}u, in_hi);
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
    feat[c] = ${k}(fv);
  }

  let w_cls = cp.w_vec4_off;
  let m_cls = cp.bias_off;
${Fo({chan:n,clsK4:o,nclass:s,V4:k,suf:A,readBiasStmt:"",biasExpr:E=>`qmeta[m_cls + k_base + ${E}u]`,probCfg:d})}
}`,totalWEffVec4s:w,useUniformWeff:y,csHalf:p,chunkableStd:g,halfPass0:!f&&u,halfPassConv:!f&&u}}function qo(e){const{cs:t,chan:n,nclass:s,clsK4:o,dilations:a,activation:r,norm:i,hasF16:f,subgroupMode:l="none",numConvs:u,probCfg:d}=e,g=t/4,c=t/2,p=t/4,m=g*ct,h=16384,M=t*pt,w=t*2+4,y=w+In*t,$=4*t,x=(u*$+o*4)/4,S=9*t*3*p,C=S,v=S+p,A=f&&p%2===0&&v*8<=65536,k=Bo(r),U=f?`enable f16;
`:"",F=f&&l!=="none",G=F?`enable subgroups;
`:"",V=f?"f16":"f32",X=f?"h":"f",W=`vec4<${V}>`,D=f?256:255,T=K=>{const ae=K?".xzyw":"",z=(te,Q,H)=>{if(te==="stage_bg")return`stage[s_bg_base + ${Q*pt}u] = ${H};`;if(te==="stage")return`stage[s_row_base + ${Q*pt}u] = ${H};`;const J=Math.floor(Q/g),q=Q%g;return`if (use_act) { act8_${J}[a_row_base + ${q*ct}u] = ${H}; } else { stage[s_row_base + ${Q*pt}u] = ${H}; }`};if(F&&(l==="sg32"||l==="sg64"||l==="sg32_64")){const te=Uo(l,i);return{decls:te.decls,entryArgs:te.entryArgs,localHeader:"",emit:({accVar:Q,cStart:H,cEnd:J,hrExpr:q,storeMode:ke,momOffExpr:be,alsoWriteMomMain:Le=!1,writeY8Expr:Ce="true"})=>ut(J-H,Ee=>{const Ie=H+Ee;return i==="none"?`  {
    let f = vec4<f32>(${Q}.v_${Ee}${ae});
    let lmn = ${te.min("min(min(f.x, f.y), min(f.z, f.w))")};
    let lmx = ${te.max("max(max(f.x, f.y), max(f.z, f.w))")};
    let sp = lmx - lmn;
    let inv = select(0.0, 1.0 / sp, sp > 1e-7);
    if (${Ce}) {
      ${z(ke,Ie,"pack4x8unorm((f - vec4<f32>(lmn)) * inv)")}
    }
    if (slane == 0u) {
      let mv = vec4<f32>(0.0, 0.0, lmn, sp);
      mom[${be} + (${q}) * ${t}u + ${Ie}u] = mv;
      ${Le?`mom[${w}u + (row_idx * 2u + sg) * ${t}u + ${Ie}u] = mv;`:""}
    }
  }
`:`  {
    let f = vec4<f32>(${Q}.v_${Ee}${ae});
    let ls = ${te.add("f.x + f.y + f.z + f.w")};
    let lq = ${te.add("dot(f, f)")};
    let lmn = ${te.min("min(min(f.x, f.y), min(f.z, f.w))")};
    let lmx = ${te.max("max(max(f.x, f.y), max(f.z, f.w))")};
    let sp = lmx - lmn;
    let inv = select(0.0, 1.0 / sp, sp > 1e-7);
    if (${Ce}) {
      ${z(ke,Ie,"pack4x8unorm((f - vec4<f32>(lmn)) * inv)")}
    }
    if (slane == 0u) {
      let mv = vec4<f32>(ls, lq, lmn, sp);
      mom[${be} + (${q}) * ${t}u + ${Ie}u] = mv;
      ${Le?`mom[${w}u + (row_idx * 2u + sg) * ${t}u + ${Ie}u] = mv;`:""}
    }
  }
`})}}if(F&&l==="sg_small")return{decls:Wo({V4:W,sw:ae,norm:i,writeMomFn:`fn write_mom(c_out : u32, mv : vec4<f32>, mom_off : u32, main_off : u32, also_main : bool) {
  mom[mom_off + c_out] = mv;
  if (also_main) {
    mom[main_off + c_out] = mv;
  }
}
`,momParams:"mom_off : u32, main_off : u32, also_main : bool",momArgs:"mom_off, main_off, also_main"}),entryArgs:`,
             @builtin(subgroup_size) sg_size : u32,
             @builtin(subgroup_invocation_id) sg_id : u32`,localHeader:`  let h = lid.y * 2u + sg;
`,emit:({accVar:H,cStart:J,cEnd:q,hrExpr:ke,storeMode:be,momOffExpr:Le,alsoWriteMomMain:Ce=!1,writeY8Expr:Ee="true"})=>{const Ie=`${Le} + (${ke}) * ${t}u`,He=Ce?`${w}u + (row_idx * 2u + sg) * ${t}u`:"0u";let Ne=`  let ep_mom_off = ${Ie};
  let ep_main_off = ${He};
`;for(let Ue=0;Ue<q-J;Ue+=4){const Pe=J+Ue;Ne+=`  {
    let qw = reduce_pack4_sg(${H}.v_${Ue}, ${H}.v_${Ue+1}, ${H}.v_${Ue+2}, ${H}.v_${Ue+3}, h, slane, sg_size, sg_id, ${Pe}u, ep_mom_off, ep_main_off, ${Ce});
    if (${Ee}) {
      ${z(be,Pe,"qw.x")}
      ${z(be,Pe+1,"qw.y")}
      ${z(be,Pe+2,"qw.z")}
      ${z(be,Pe+3,"qw.w")}
    }
  }
`}return Ne}};const oe=`    let c_out = c_base + slane;
    mom[mom_off + c_out] = mv;
    if (also_main) {
      mom[main_off + c_out] = mv;
    }`;if(i==="none"&&f){const te=ut(31,H=>`    {
      let m = sh_mm[rb + ${H+1}u];
      rmn = min(rmn, m.x);
      rmx = max(rmx, m.y);
    }
`);return{decls:`var<workgroup> sh_mm  : array<vec2<f16>, 1024>;
var<workgroup> sh_res : array<vec2<f32>, 32>;
fn vec_mm16(a : vec4<f16>) -> vec2<f16> {
  return vec2<f16>(min(min(a.x, a.y), min(a.z, a.w)), max(max(a.x, a.y), max(a.z, a.w)));
}
fn reduce_pack4(
  a0 : ${W}, a1 : ${W}, a2 : ${W}, a3 : ${W},
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
${te}    let fmn = f32(rmn);
    let sp = f32(rmx) - fmn;
    sh_res[h * 4u + slane] = vec2<f32>(fmn, select(0.0, 1.0 / sp, sp > 1e-7));
    let mv = vec4<f32>(0.0, 0.0, fmn, sp);
${oe}
  }
  workgroupBarrier();
  let f0 = vec4<f32>(a0${ae});
  let f1 = vec4<f32>(a1${ae});
  let f2 = vec4<f32>(a2${ae});
  let f3 = vec4<f32>(a3${ae});
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
`,emit:({accVar:H,cStart:J,cEnd:q,hrExpr:ke,storeMode:be,momOffExpr:Le,alsoWriteMomMain:Ce=!1,writeY8Expr:Ee="true"})=>{const Ie=`${Le} + (${ke}) * ${t}u`,He=Ce?`${w}u + (row_idx * 2u + sg) * ${t}u`:"0u";let Ne=`  let ep_mom_off = ${Ie};
  let ep_main_off = ${He};
`;for(let Ue=0;Ue<q-J;Ue+=4){const Pe=J+Ue;Ne+=`  {
    let qw = reduce_pack4(${H}.v_${Ue}, ${H}.v_${Ue+1}, ${H}.v_${Ue+2}, ${H}.v_${Ue+3}, h, slane, ${Pe}u, ep_mom_off, ep_main_off, ${Ce});
    if (${Ee}) {
      ${z(be,Pe,"qw.x")}
      ${z(be,Pe+1,"qw.y")}
      ${z(be,Pe+2,"qw.z")}
      ${z(be,Pe+3,"qw.w")}
    }
  }
`}return Ne}}}if(i==="none"){const te=ut(32,H=>`    {
      let m = sh_mm[rb + ${H}u];
      rmn = min(rmn, m.x);
      rmx = max(rmx, m.y);
    }
`);return{decls:`var<workgroup> sh_mm  : array<vec2<f32>, 1024>;
var<workgroup> sh_res : array<vec2<f32>, 32>;
fn vec_mm(f : vec4<f32>) -> vec2<f32> {
  return vec2<f32>(min(min(f.x, f.y), min(f.z, f.w)), max(max(f.x, f.y), max(f.z, f.w)));
}
fn reduce_pack4(
  a0 : ${W}, a1 : ${W}, a2 : ${W}, a3 : ${W},
  h : u32, slane : u32, c_base : u32, mom_off : u32, main_off : u32, also_main : bool
) -> vec4<u32> {
  let f0 = vec4<f32>(a0${ae});
  let f1 = vec4<f32>(a1${ae});
  let f2 = vec4<f32>(a2${ae});
  let f3 = vec4<f32>(a3${ae});
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
${te}    let sp = rmx - rmn;
    sh_res[h * 4u + slane] = vec2<f32>(rmn, select(0.0, 1.0 / sp, sp > 1e-7));
    let mv = vec4<f32>(0.0, 0.0, rmn, sp);
${oe}
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
`,emit:({accVar:H,cStart:J,cEnd:q,hrExpr:ke,storeMode:be,momOffExpr:Le,alsoWriteMomMain:Ce=!1,writeY8Expr:Ee="true"})=>{const Ie=`${Le} + (${ke}) * ${t}u`,He=Ce?`${w}u + (row_idx * 2u + sg) * ${t}u`:"0u";let Ne=`  let ep_mom_off = ${Ie};
  let ep_main_off = ${He};
`;for(let Ue=0;Ue<q-J;Ue+=4){const Pe=J+Ue;Ne+=`  {
    let qw = reduce_pack4(${H}.v_${Ue}, ${H}.v_${Ue+1}, ${H}.v_${Ue+2}, ${H}.v_${Ue+3}, h, slane, ${Pe}u, ep_mom_off, ep_main_off, ${Ce});
    if (${Ee}) {
      ${z(be,Pe,"qw.x")}
      ${z(be,Pe+1,"qw.y")}
      ${z(be,Pe+2,"qw.z")}
      ${z(be,Pe+3,"qw.w")}
    }
  }
`}return Ne}}}if(f){const te=ut(31,H=>{const J=H+1;return`    {
      let s = sh_sq[rb + ${J}u];
      let m = sh_mm[rb + ${J}u];
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
  a0 : ${W}, a1 : ${W}, a2 : ${W}, a3 : ${W},
  h : u32, slane : u32, c_base : u32, mom_off : u32, main_off : u32, also_main : bool
) -> vec4<u32> {
  let f0 = vec4<f32>(a0${ae});
  let f1 = vec4<f32>(a1${ae});
  let f2 = vec4<f32>(a2${ae});
  let f3 = vec4<f32>(a3${ae});
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
${te}    let fmn = f32(rmn);
    let sp = f32(rmx) - fmn;
    sh_res[h * 4u + slane] = vec2<f32>(fmn, select(0.0, 1.0 / sp, sp > 1e-7));
    let mv = vec4<f32>(rs, rq, fmn, sp);
${oe}
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
`,emit:({accVar:H,cStart:J,cEnd:q,hrExpr:ke,storeMode:be,momOffExpr:Le,alsoWriteMomMain:Ce=!1,writeY8Expr:Ee="true"})=>{const Ie=`${Le} + (${ke}) * ${t}u`,He=Ce?`${w}u + (row_idx * 2u + sg) * ${t}u`:"0u";let Ne=`  let ep_mom_off = ${Ie};
  let ep_main_off = ${He};
`;for(let Ue=0;Ue<q-J;Ue+=4){const Pe=J+Ue;Ne+=`  {
    let qw = reduce_pack4(${H}.v_${Ue}, ${H}.v_${Ue+1}, ${H}.v_${Ue+2}, ${H}.v_${Ue+3}, h, slane, ${Pe}u, ep_mom_off, ep_main_off, ${Ce});
    if (${Ee}) {
      ${z(be,Pe,"qw.x")}
      ${z(be,Pe+1,"qw.y")}
      ${z(be,Pe+2,"qw.z")}
      ${z(be,Pe+3,"qw.w")}
    }
  }
`}return Ne}}}const R=ut(32,te=>`    {
      let s = sh_sq[rb + ${te}u];
      let m = sh_mm[rb + ${te}u];
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
  a0 : ${W}, a1 : ${W},
  h : u32, slane : u32, c_base : u32, mom_off : u32, main_off : u32, also_main : bool
) -> vec2<u32> {
  let f0 = vec4<f32>(a0${ae});
  let f1 = vec4<f32>(a1${ae});
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
${R}    let sp = rmx - rmn;
    sh_res[h * 2u + slane] = vec2<f32>(rmn, select(0.0, 1.0 / sp, sp > 1e-7));
    let mv = vec4<f32>(rs, rq, rmn, sp);
${oe}
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
`,emit:({accVar:te,cStart:Q,cEnd:H,hrExpr:J,storeMode:q,momOffExpr:ke,alsoWriteMomMain:be=!1,writeY8Expr:Le="true"})=>{const Ce=`${ke} + (${J}) * ${t}u`,Ee=be?`${w}u + (row_idx * 2u + sg) * ${t}u`:"0u";let Ie=`  let ep_mom_off = ${Ce};
  let ep_main_off = ${Ee};
`;for(let He=0;He<H-Q;He+=2){const Ne=Q+He;Ie+=`  {
    let qw = reduce_pack2(${te}.v_${He}, ${te}.v_${He+1}, h, slane, ${Ne}u, ep_mom_off, ep_main_off, ${be});
    if (${Le}) {
      ${z(q,Ne,"qw.x")}
      ${z(q,Ne+1,"qw.y")}
    }
  }
`}return Ie}}},Y=()=>`
@group(0) @binding(0) var<storage, read_write> act0 : array<u32>;
@group(0) @binding(1) var<storage, read_write> act1 : array<u32>;
@group(0) @binding(2) var<storage, read_write> act2 : array<u32>;
@group(0) @binding(3) var<storage, read_write> act3 : array<u32>;
@compute @workgroup_size(${ct}, 1, 1)
fn main(@builtin(local_invocation_id) lid : vec3<u32>,
        @builtin(workgroup_id) wid : vec3<u32>) {
  let row_base = (wid.z * 256u + wid.y) * ${m}u + lid.x;
  let val = ${k.uZeroWord}u;
  for (var c : u32 = 0u; c < ${g}u; c = c + 1u) {
    let idx = row_base + c * ${ct}u;
    act0[idx] = val;
    act1[idx] = val;
    act2[idx] = val;
    act3[idx] = val;
  }
}`,E=a[0],L=!f&&t>=16,N=()=>{const K=T(!1),ae=(H,J)=>{const q=H/4,ke=J/4;return ut(ke-q,be=>{const Le=q+be,Ce=Le*4;return`          {
            let w0 = w16_4[wb + ${Le}u];
            let w1 = w16_4[wb + ${p+Le}u];
            let w2 = w16_4[wb + ${2*p+Le}u];
            a_${Ce}     = fma(vn, ${W}(w0.x), fma(vc, ${W}(w1.x), fma(vp, ${W}(w2.x), a_${Ce})));
            a_${Ce+1} = fma(vn, ${W}(w0.y), fma(vc, ${W}(w1.y), fma(vp, ${W}(w2.y), a_${Ce+1})));
            a_${Ce+2} = fma(vn, ${W}(w0.z), fma(vc, ${W}(w1.z), fma(vp, ${W}(w2.z), a_${Ce+2})));
            a_${Ce+3} = fma(vn, ${W}(w0.w), fma(vc, ${W}(w1.w), fma(vp, ${W}(w2.w), a_${Ce+3})));
          }
`})},z=Math.floor(E/4),oe=E%4;let R="";oe===0?R=`
        let vn = inp_4[base - ${z}u];
        let vc = inp_4[base];
        let vp = inp_4[base + ${z}u];`:z===0&&oe===1?R=`
        let vL = inp_4[base - 1u];
        let vc = inp_4[base];
        let vR = inp_4[base + 1u];
        let vn = ${W}(vL.w, vc.xyz);
        let vp = ${W}(vc.yzw, vR.x);`:oe===1?R=`
        let vL = inp_4[base - ${z+1}u];
        let vN = inp_4[base - ${z}u];
        let vc = inp_4[base];
        let vP = inp_4[base + ${z}u];
        let vR = inp_4[base + ${z+1}u];
        let vn = ${W}(vL.w, vN.xyz);
        let vp = ${W}(vP.yzw, vR.x);`:oe===2?R=`
        let vL = inp_4[base - ${z+1}u];
        let vN = ${z===0?"inp_4[base]":`inp_4[base - ${z}u]`};
        let vc = ${z===0?"vN":"inp_4[base]"};
        let vP = ${z===0?"vN":`inp_4[base + ${z}u]`};
        let vR = inp_4[base + ${z+1}u];
        let vn = ${W}(vL.zw, vN.xy);
        let vp = ${W}(vP.zw, vR.xy);`:R=`
        let vL = inp_4[base - ${z+1}u];
        let vN = ${z===0?"inp_4[base]":`inp_4[base - ${z}u]`};
        let vc = ${z===0?"vN":"inp_4[base]"};
        let vP = ${z===0?"vN":`inp_4[base + ${z}u]`};
        let vR = inp_4[base + ${z+1}u];
        let vn = ${W}(vL.yzw, vN.x);
        let vp = ${W}(vP.w, vR.xyz);`;const ue=(H,J,q,ke)=>{const be=ke-q,Le=ut(be,Ie=>`  v_${Ie} : ${W},
`),Ce=ut(be,Ie=>{const He=q+Ie;if(i==="none"){const Ne=3*t+He;return`  var a_${He} = ${W}(${V}(qmeta_u[${Ne>>>2}u][${Ne&3}u]));
`}return`  var a_${He} = ${W}(0.0${X});
`}),Ee=Array.from({length:be},(Ie,He)=>`a_${q+He}`).join(", ");return`struct ${J} {
${Le}};
fn ${H}(y : i32, z : i32, x_pad : u32) -> ${J} {
${Ce}  var tap_yz : u32 = 0u;
  for (var dz : i32 = -1; dz <= 1; dz = dz + 1) {
    let sz = z + dz * ${E};
    for (var dy : i32 = -1; dy <= 1; dy = dy + 1) {
      let sy = y + dy * ${E};
      if ((u32(sz) | u32(sy)) < 256u) {
        let base = (u32(sz) * 256u + u32(sy)) * ${ct}u + x_pad;
${R}
        let wb = tap_yz * ${3*p}u;
${ae(q,ke)}
      }
      tap_yz = tap_yz + 1u;
    }
  }
  return ${J}(${Ee});
}
`},te=(H,J,q,ke,be)=>{const Le=be?`  let y = i32(p0.bg_y0 + lid.y);
  let z = i32(p0.bg_z0);`:`  var y : i32;
  var z : i32;
  if (p0.is_full != 0u) {
    y = i32(wid.y * 4u + lid.y);
    z = i32(wid.z);
  } else {
    let pk = strips0_u[wid.z >> 2u][wid.z & 3u];
    y = i32((pk & 255u) * 4u + lid.y);
    z = i32(pk >> 8u);
  }`,Ce=be?"lid.y * 2u + sg":"row_idx * 2u + sg",Ee=be?`${y}u`:`${w}u`,Ie=be?`  let s_bg_base = (${h}u + lid.y) * ${M}u + lid.x;`:`  let row_idx = u32(z) * 256u + u32(y);
  let use_act = u32(z) < 192u;
  let a_row_base = row_idx * ${m}u + x_pad;
  let s_row_base = ((u32(z) & 63u) * 256u + u32(y)) * ${M}u + lid.x;`;return`
@compute @workgroup_size(64, 4, 1)
fn ${H}(@builtin(local_invocation_id) lid : vec3<u32>,
             @builtin(workgroup_id) wid : vec3<u32>${K.entryArgs||""}) {
  let sg = lid.x >> 5u;
  let slane = lid.x & 31u;
${K.localHeader}  let x_pad = lid.x + ${Ht}u;
${Le}
  let acc = ${J}(y, z, x_pad);
${Ie}
${K.emit({accVar:"acc",cStart:q,cEnd:ke,hrExpr:Ce,storeMode:be?"stage_bg":"conv0_split",momOffExpr:Ee})}}`},Q=L?ue("run_conv0_lo","Conv0AccLo",0,c)+ue("run_conv0_hi","Conv0AccHi",c,t)+te("main_lo","run_conv0_lo",0,c,!1)+te("main_hi","run_conv0_hi",c,t,!1)+te("main_bg_lo","run_conv0_lo",0,c,!0)+te("main_bg_hi","run_conv0_hi",c,t,!0):ue("run_conv0","Conv0Acc",0,t)+te("main","run_conv0",0,t,!1)+te("main_bg","run_conv0",0,t,!0);return`${U}${G}
struct Params0 {
  is_full : u32,
  bg_y0 : u32,
  bg_z0 : u32,
  pad0 : u32,
};
@group(0) @binding(0) var<storage, read> inp_4 : array<${W}>;
@group(0) @binding(1) var<storage, read_write> act8_0 : array<u32>;
@group(0) @binding(2) var<storage, read_write> act8_1 : array<u32>;
@group(0) @binding(3) var<storage, read_write> act8_2 : array<u32>;
@group(0) @binding(4) var<storage, read_write> act8_3 : array<u32>;
@group(0) @binding(5) var<storage, read_write> stage : array<u32>;
@group(0) @binding(6) var<storage, read> w16_4 : array<${W}>;
@group(0) @binding(7) var<storage, read_write> mom : array<vec4<f32>>;
@group(0) @binding(8) var<uniform> qmeta_u : array<vec4<f32>, ${t}>;
@group(0) @binding(9) var<uniform> strips0_u : array<vec4<u32>, 4096>;
@group(0) @binding(10) var<uniform> p0 : Params0;
${K.decls}${Q}`},Z=()=>`${U}
${Pn(r)}
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
@group(0) @binding(0) var<storage, read> w16_4 : array<${W}>;
@group(0) @binding(1) var<storage, read> qmeta : array<f32>;
@group(0) @binding(2) var<storage, read_write> mom : array<vec4<f32>>;
@group(0) @binding(3) var<storage, read_write> w_eff : array<${W}>;
@group(0) @binding(4) var<storage, read> main_strips : array<u32>;
@group(0) @binding(5) var<uniform> pp : PrepParams;

${i==="gn"?`var<workgroup> fin_s  : array<f32, 256>;
var<workgroup> fin_q  : array<f32, 256>;
var<workgroup> fin_es : array<f32, 256>;
var<workgroup> fin_eq : array<f32, 256>;
`:""}var<workgroup> fin_mn : array<f32, 256>;
var<workgroup> fin_mx : array<f32, 256>;

@compute @workgroup_size(256, 1, 1)
fn moments_finish(@builtin(local_invocation_index) lid : u32,
                  @builtin(workgroup_id) wid : vec3<u32>) {
  let c = wid.x;
${i==="gn"?`  var s : f32 = 0.0;
  var q : f32 = 0.0;
  var es : f32 = 0.0;
  var eq : f32 = 0.0;
`:""}  var mn : f32 = 3.0e38;
  var mx : f32 = -3.0e38;
  if (pp.is_full != 0u) {
    for (var hr : u32 = lid; hr < ${In}u; hr = hr + 256u) {
      let v = mom[${w}u + hr * ${t}u + c];
${i==="gn"?`      s  += v.x;
      q  += v.y;
`:""}      mn  = min(mn, v.z);
      mx  = max(mx, v.z + v.w);
    }
  } else {
    for (var si : u32 = lid; si < pp.n_main_strips; si = si + 256u) {
      let pk = main_strips[si];
      let base_hr = ((pk >> 8u) * 256u + (pk & 255u) * 4u) * 2u;
      for (var h : u32 = 0u; h < 8u; h = h + 1u) {
        let v = mom[${w}u + (base_hr + h) * ${t}u + c];
${i==="gn"?`        s  += v.x;
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
        let v = mom[${y}u + e * ${t}u + c];
${i==="gn"?`        es += v.x;
        eq += v.y;
`:""}        mn  = min(mn, v.z);
        mx  = max(mx, v.z + v.w);
      }
    }
  }
${i==="gn"?`  fin_s[lid]  = s;
  fin_q[lid]  = q;
  fin_es[lid] = es;
  fin_eq[lid] = eq;
`:""}  fin_mn[lid] = mn;
  fin_mx[lid] = mx;
  workgroupBarrier();
  for (var stride : u32 = 128u; stride > 0u; stride = stride >> 1u) {
    if (lid < stride) {
${i==="gn"?`      fin_s[lid]  += fin_s[lid + stride];
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
${i==="gn"?`    let total_s = fin_s[0] + pp.ext_weight * fin_es[0];
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
    q_ref = max(q_ref, ${D.toFixed(1)} * qs);
  }
  ${i==="none"?"q_ref = 1.0;":""}
  if (lid == 0u) {
    mom[${t*2}u] = vec4<f32>(q_ref, 0.0, 0.0, 0.0);
  }
  let scale_num = ${D.toFixed(1)} / q_ref;
  for (var idx : u32 = lid; idx < ${S}u; idx = idx + 256u) {
    let ic = (idx / ${3*p}u) % ${t}u;
    let qs = mom[ic * 2u].z;
    w_eff[idx] = w16_4[pp.next_w_vec4_off + idx] * ${V}(qs * scale_num);
  }
  if (lid < ${p}u) {
    ${i==="none"?`
    let mb = pp.next_meta_off + ${3*t}u + lid * 4u;
    w_eff[${C}u + lid] = ${W}(${V}(qmeta[mb]), ${V}(qmeta[mb + 1u]), ${V}(qmeta[mb + 2u]), ${V}(qmeta[mb + 3u]));
    `:`
    w_eff[${C}u + lid] = ${W}(0.0${X});
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
  let s_base = ((z & 63u) * 256u + y) * ${M}u + x4;
  for (var c : u32 = 0u; c < ${g}u; c = c + 1u) {
    let a_off = a_base + c * ${ct}u;
    act8_0[a_off] = stage[s_base + c * ${pt}u];
    act8_1[a_off] = stage[s_base + (${g}u + c) * ${pt}u];
    act8_2[a_off] = stage[s_base + (${2*g}u + c) * ${pt}u];
    act8_3[a_off] = stage[s_base + (${3*g}u + c) * ${pt}u];
  }
}`,ce=(K,ae)=>{const z=K*g;return`
  for (var cl : u32 = 0u; cl < ${g}u; cl = cl + 1u) {
    let c = ${z}u + cl;
    let inv_qs = mom[c * 2u].w;
    let st = mom[c * 2u + 1u];
    let rm = mom[mom_base + c];
    let q_word = ${ae?`stage[s_bg_base + c * ${pt}u]`:`select(stage[s_base + c * ${pt}u], act8_${K}[a_base + cl * ${ct}u], use_act)`};
    let yv = unpack4x8unorm(q_word) * rm.w + vec4<f32>(rm.z);
    let a = vec4<f32>(
      act(yv.x * st.x + st.y),
      act(yv.y * st.x + st.y),
      act(yv.z * st.x + st.y),
      act(yv.w * st.x + st.y)
    );
    act8_${K}[a_base + cl * ${ct}u] = pack4x8unorm((a * inv_qs + vec4<f32>(${k.zeroBin.toFixed(1)})) * (1.0 / 255.0));
  }`},fe=()=>`${Pn(r)}
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
  let s_base = ((z & 63u) * 256u + y) * ${M}u + x4;
  let mom_base = ${w}u + (row_idx * 2u + sg) * ${t}u;
${ut(4,K=>ce(K,!1))}
}

@compute @workgroup_size(64, 4, 1)
fn norm_halo_fill(@builtin(local_invocation_id) lid : vec3<u32>,
                  @builtin(workgroup_id) wid : vec3<u32>) {
  let idx = wid.y * 4u + lid.y;
  if (idx >= np.n_halo) { return; }
  let x4 = lid.x;
  let sg = x4 >> 5u;
  let x_pad = x4 + ${Ht}u;
  let s_bg_base = ${h}u * ${M}u + x4;
  let mom_base = ${y}u + sg * ${t}u;
  let dst_row = norm_aux[np.halo_off + idx];
  let a_base = dst_row * ${m}u + x_pad;
${ut(4,K=>ce(K,!0))}
}`,ye=()=>{const K=!f&&t>=16,ae=T(f),z=(q,ke)=>f?`
          let ${q} = vec4<f16>(vec2<f16>(unpack2x16float(((${ke} & 0x00FF00FFu) << 2u) | 0x3C003C00u)), vec2<f16>(unpack2x16float(((${ke} >> 6u) & 0x03FC03FCu) | 0x3C003C00u))) - vec4<f16>(${k.sterbenzSub});`:`
          let ${q} = unpack4x8unorm(${ke}) - vec4<f32>(${k.uZeroFloat});`,oe=q=>`
          let uL = ${q}[base - off0];
          let uN = ${q}[base - off1];
          let uC = ${q}[base];
          let uP = ${q}[base + off1];
          let uR = ${q}[base + off0];
          let u_neg = (uL >> sh_l) | (uN << sh_r);
          let u_pos = (uP >> sh_r) | (uR << sh_l);`+z("vn","u_neg")+z("vc","uC")+z("vp","u_pos"),R=(q,ke)=>{const be=q/4,Le=ke/4;if(A){const Ce=p/2,Ee=p;let Ie="";for(let He=be;He<Le;He+=2){const Ne=He*4,Ue=He/2;Ie+=`          {
            let wp0 = w_eff_u[wbu + ${Ue}u];
            let wp1 = w_eff_u[wbu + ${Ce+Ue}u];
            let wp2 = w_eff_u[wbu + ${Ee+Ue}u];
            let w0a = u4_lo(wp0);
            let w0b = u4_hi(wp0);
            let w1a = u4_lo(wp1);
            let w1b = u4_hi(wp1);
            let w2a = u4_lo(wp2);
            let w2b = u4_hi(wp2);
            a_${Ne}     = fma(vn, vec4<f16>(w0a.x), fma(vc, vec4<f16>(w1a.x), fma(vp, vec4<f16>(w2a.x), a_${Ne})));
            a_${Ne+1} = fma(vn, vec4<f16>(w0a.y), fma(vc, vec4<f16>(w1a.y), fma(vp, vec4<f16>(w2a.y), a_${Ne+1})));
            a_${Ne+2} = fma(vn, vec4<f16>(w0a.z), fma(vc, vec4<f16>(w1a.z), fma(vp, vec4<f16>(w2a.z), a_${Ne+2})));
            a_${Ne+3} = fma(vn, vec4<f16>(w0a.w), fma(vc, vec4<f16>(w1a.w), fma(vp, vec4<f16>(w2a.w), a_${Ne+3})));
            a_${Ne+4} = fma(vn, vec4<f16>(w0b.x), fma(vc, vec4<f16>(w1b.x), fma(vp, vec4<f16>(w2b.x), a_${Ne+4})));
            a_${Ne+5} = fma(vn, vec4<f16>(w0b.y), fma(vc, vec4<f16>(w1b.y), fma(vp, vec4<f16>(w2b.y), a_${Ne+5})));
            a_${Ne+6} = fma(vn, vec4<f16>(w0b.z), fma(vc, vec4<f16>(w1b.z), fma(vp, vec4<f16>(w2b.z), a_${Ne+6})));
            a_${Ne+7} = fma(vn, vec4<f16>(w0b.w), fma(vc, vec4<f16>(w1b.w), fma(vp, vec4<f16>(w2b.w), a_${Ne+7})));
          }
`}return Ie}return ut(Le-be,Ce=>{const Ee=be+Ce,Ie=Ee*4;return`          {
            let w0 = w_eff[wb + ${Ee}u];
            let w1 = w_eff[wb + ${p+Ee}u];
            let w2 = w_eff[wb + ${2*p+Ee}u];
            a_${Ie}     = fma(vn, ${W}(w0.x), fma(vc, ${W}(w1.x), fma(vp, ${W}(w2.x), a_${Ie})));
            a_${Ie+1} = fma(vn, ${W}(w0.y), fma(vc, ${W}(w1.y), fma(vp, ${W}(w2.y), a_${Ie+1})));
            a_${Ie+2} = fma(vn, ${W}(w0.z), fma(vc, ${W}(w1.z), fma(vp, ${W}(w2.z), a_${Ie+2})));
            a_${Ie+3} = fma(vn, ${W}(w0.w), fma(vc, ${W}(w1.w), fma(vp, ${W}(w2.w), a_${Ie+3})));
          }
`})},ue=(q,ke,be)=>{const Le=q*g,Ce=`(${g}u + cp.pad0)`;return A?`        for (var ic : u32 = 0u; ic < ${Ce}; ic = ic + 1u) {
          let base = row_off + ic * ${ct}u;
${oe(`act8_${q}`)}
          let wbu = wbu_tap + ${Le?`(${Le}u + ic)`:"ic"} * ${3*p/2}u;
${R(ke,be)}
        }
`:`        for (var ic : u32 = 0u; ic < ${Ce}; ic = ic + 1u) {
          let base = row_off + ic * ${ct}u;
${oe(`act8_${q}`)}
          let wb = wb_tap + ${Le?`(${Le}u + ic)`:"ic"} * ${3*p}u;
${R(ke,be)}
        }
`},te=(q,ke,be,Le)=>{const Ce=Le-be,Ee=ut(Ce,Ue=>`  v_${Ue} : ${W},
`),Ie=ut(Ce,Ue=>{const Pe=be+Ue;if(i==="none"){const De=Pe>>>2,rt=["x","y","z","w"][Pe&3];if(A){const et=C+De>>>1,tt=C+De&1?"u4_hi":"u4_lo";return`  var a_${Pe} = ${W}(${tt}(w_eff_u[${et}u]).${rt});
`}return`  var a_${Pe} = ${W}(w_eff[${C+De}u].${rt});
`}return`  var a_${Pe} = ${W}(0.0${X});
`}),He=A?`        let wbu_tap = tap_yz * ${t*3*p/2}u;
`:`        let wb_tap = tap_yz * ${t*3*p}u;
`,Ne=Array.from({length:Ce},(Ue,Pe)=>`a_${be+Pe}`).join(", ");return`struct ${ke} {
${Ee}};
fn ${q}(y : i32, z : i32, x_pad : u32, dp : u32) -> ${ke} {
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
        let row_off = (u32(sz) * 256u + u32(sy)) * ${m}u + x_pad;
${He}${ut(4,Ue=>ue(Ue,be,Le))}      }
      tap_yz = tap_yz + 1u;
    }
  }
  return ${ke}(${Ne});
}
`},Q=(q,ke,be,Le,Ce)=>{let Ee="";Ce==="bg"?Ee=`
  let y = i32(cp.bg_y0 + lid.y);
  let z = i32(cp.bg_z0);`:Ce==="ext"?Ee=`
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
  }`;const Ie=Ce==="bg"?"lid.y * 2u + sg":Ce==="ext"?"ext_orig * 8u + lid.y * 2u + sg":"row_idx * 2u + sg",He=Ce==="main"?`${w}u`:`${y}u`,Ne=Ce==="bg"?"stage_bg":"stage",Ue=Ce==="main"?"true":"(((dp >> 24u) & 1u) != 0u)",Pe=Ce==="bg"?`  let row_idx = u32(z) * 256u + u32(y);
  let s_bg_base = (${h}u + lid.y) * ${M}u + x4;`:`  let row_idx = u32(z) * 256u + u32(y);
  let s_row_base = ((u32(z) & 63u) * 256u + u32(y)) * ${M}u + x4;`;return`
@compute @workgroup_size(64, 4, 1)
fn ${q}(@builtin(local_invocation_id) lid : vec3<u32>,
             @builtin(workgroup_id) wid : vec3<u32>${ae.entryArgs||""}) {
  let x4 = lid.x;
  let sg = x4 >> 5u;
  let slane = x4 & 31u;
${ae.localHeader}  let x_pad = x4 + ${Ht}u;
${Ee}
  let dp = cp.d_pack;
  let acc = ${ke}(y, z, x_pad, dp);
${Pe}
${ae.emit({accVar:"acc",cStart:be,cEnd:Le,hrExpr:Ie,storeMode:Ne,momOffExpr:He,alsoWriteMomMain:Ce!=="main",writeY8Expr:Ue})}}`},H=K?te("run_conv_lo","ConvAccLo",0,c)+te("run_conv_hi","ConvAccHi",c,t)+Q("main_lo","run_conv_lo",0,c,"main")+Q("main_hi","run_conv_hi",c,t,"main")+Q("main_ext_lo","run_conv_lo",0,c,"ext")+Q("main_ext_hi","run_conv_hi",c,t,"ext")+Q("main_bg_lo","run_conv_lo",0,c,"bg")+Q("main_bg_hi","run_conv_hi",c,t,"bg"):te("run_conv","ConvAcc",0,t)+Q("main","run_conv",0,t,"main")+Q("main_ext","run_conv",0,t,"ext")+Q("main_bg","run_conv",0,t,"bg"),J=A?`fn u4_lo(u : vec4<u32>) -> vec4<f16> {
  return vec4<f16>(vec2<f16>(unpack2x16float(u.x)), vec2<f16>(unpack2x16float(u.y)));
}
fn u4_hi(u : vec4<u32>) -> vec4<f16> {
  return vec4<f16>(vec2<f16>(unpack2x16float(u.z)), vec2<f16>(unpack2x16float(u.w)));
}
@group(0) @binding(6) var<uniform> w_eff_u : array<vec4<u32>, ${Math.ceil(v/2)}>;`:`@group(0) @binding(6) var<storage, read> w_eff : array<${W}>;`;return`${U}${G}
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
${J}
@group(0) @binding(7) var<storage, read> strips : array<u32>;
@group(0) @binding(8) var<uniform> cp : BandConvParams;
${ae.decls}${H}`},we=K=>{const ae=K*g;return`
  for (var cl : u32 = 0u; cl < ${g}u; cl = cl + 1u) {
    let c = ${ae}u + cl;
    if (c < ${n}u) {
      let st = mom[c * 2u + 1u];
      let rm = mom[mom_base + c];
      let q_word = select(stage[s_base + c * ${pt}u], act8_${K}[a_base + cl * ${ct}u], use_act);
      let yv = unpack4x8unorm(q_word) * rm.w + vec4<f32>(rm.z);
      let fv = vec4<f32>(
        act(yv.x * st.x + st.y),
        act(yv.y * st.x + st.y),
        act(yv.z * st.x + st.y),
        act(yv.w * st.x + st.y)
      );
      feat[c] = ${W}(fv);
    }
  }`};return{initActWgsl:Y,conv0Wgsl:N,prepWgsl:Z,flushWgsl:O,normWgsl:fe,convWgsl:ye,clsWgsl:()=>`${U}
${Pn(r)}
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
@group(0) @binding(5) var<storage, read> w16_4 : array<${W}>;
@group(0) @binding(6) var<storage, read> mom : array<vec4<f32>>;
@group(0) @binding(7) var<storage, read_write> labels8 : array<u32>;
@group(0) @binding(8) var<uniform> qmeta_u : array<vec4<f32>, ${x}>;
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
  let s_base = ((z & 63u) * 256u + y) * ${M}u + x4;
  let mom_base = ${w}u + (row_idx * 2u + sg) * ${t}u;

  var feat : array<${W}, ${n}>;
${ut(4,K=>we(K))}

  let w_cls = cp.w_vec4_off;
  let b_vec4 = cp.bias_off >> 2u;
${Fo({chan:n,clsK4:o,nclass:s,V4:W,suf:X,readBiasStmt:"    let bv = qmeta_u[b_vec4 + k4];",biasExpr:K=>`bv.${["x","y","z","w"][K]}`,probCfg:d})}
}`,qmetaVec4Len:x,numConvs:u,totalWEffVec4s:v,useUniformWeff:A,csQ:g,halfPass0:L,halfPassConv:!f&&t>=16}}function ka(e,t,n,s,o,a,r){return Be(this,null,function*(){var xt,Ct;const i=I*I*I,f=r?i*4:i,l=t.dilations.length,u=t.cs/4,d=I*I*u*ct*4,c=(64*I+4)*t.cs*pt*4,m=(t.cs*2+4+(In+co)*t.cs)*16,h=e.limits||{},M=Math.min((xt=h.maxStorageBufferBindingSize)!=null?xt:1/0,(Ct=h.maxBufferSize)!=null?Ct:1/0);if(d>M||c>M||m>M||f>M){const b=Math.ceil(Math.max(d,c,m,f)/1048576);throw new Error(`meshnet_fast_v4: LowMem128 max buffer (${b} MiB) exceeds device limit (${M>>>20} MiB)`)}const _=qo({cs:t.cs,chan:t.chan,nclass:t.nclass,clsK4:n.clsK4,dilations:t.dilations,activation:t.activation,norm:t.norm,hasF16:s,subgroupMode:o,numConvs:l,probCfg:r});console.log(`[WebGPU-V4-128M] ${t.chan}ch(cs=${t.cs})/${t.nclass}cls (${l} convs, ${t.activation}, norm=${t.norm}${r?", prob=3":""}) | ${s?"f16+sterbenz":"f32"} | ${wo(o)} | ZYCX-4Q+64slice | maxBuf=${(Math.max(d,c,m,f)/1048576).toFixed(1)} MiB`);const w=GPUBufferUsage.STORAGE,y=GPUBufferUsage.UNIFORM,$=GPUBufferUsage.COPY_DST,x=GPUBufferUsage.COPY_SRC,S=I*I*pn,C=S*(s?2:4),v=s?Math.ceil(_.totalWEffVec4s/2)*16:_.totalWEffVec4s*16,A=!!(r&&d>=f),k=`128|${t.cs}|${s?1:0}|${f}|${A?1:0}`,U=ko(e,k,()=>{const b=[],P=Xn(e,b),B=P.alloc,ne={inpBuf:B(C,w|$|x),act8_0:B(d,w|$|x),act8_1:B(d,w|$|x),act8_2:B(d,w|$|x),act8_3:B(d,w|$|x),stageBuf:B(c,w),momBuf:B(m,w),labels8Buf:B(f,w|$|x),readbackBuf:B(f,GPUBufferUsage.MAP_READ|$),probPackTmpBuf:A?B(f,w|$|x):null};return{buffers:b,named:ne,bytes:P.getBytes()}}),{inpBuf:F,act8_0:G,act8_1:V,act8_2:X,act8_3:W,stageBuf:D,momBuf:T,labels8Buf:Y,readbackBuf:E,probPackTmpBuf:L}=U.named,N=[],Z=Xn(e,N),O=Z.alloc,ce=O(s?n.wF16.byteLength:n.wF32.byteLength,w|$),fe=O(n.qmetaF32.byteLength,w|y|$),ye=O(v,_.useUniformWeff?w|y:w),we=t.norm==="gn"&&!(a!=null&&a.disableConeSkip),_e=O(Ke*4,y|$),K=O(Ke*4,y|$),ae=Array.from({length:l},()=>O(we?Ke*4:16,w|$)),z=Array.from({length:l-1},()=>O(we?(Ke+I*I)*4:16,w|$)),oe=O(16,y|$),R=O(16,y|$),ue=Array.from({length:l},()=>O(48,y|$)),te=Array.from({length:l-1},()=>O(16,y|$)),Q=Math.max(256,h.minUniformBufferOffsetAlignment||256),H=Q>>>2,J=20,q=Math.max(1,(l-1)*J),ke=O(q*Q,y|$),be=new Uint32Array(q*H);e.queue.writeBuffer(ce,0,s?n.wF16:n.wF32),e.queue.writeBuffer(fe,0,n.qmetaF32);let Le;try{Le=yield Po(e,t,n,s,o,r,_)}catch(b){for(const P of N)P.destroy();if(N.length=0,U.pooled)an.get(e)===U&&xn(e);else{for(const P of U.buffers)P.destroy();U.buffers.length=0}throw b}const{pInit:Ce,pMomFin:Ee,pPrepW:Ie,pFlush:He,pNorm:Ne,pNormHalo:Ue,pCls:Pe,pConv0:De,pConv:rt}=Le,et=(b,P)=>e.createBindGroup({layout:b,entries:P.map((B,ne)=>({binding:ne,resource:B&&B.buffer?B:{buffer:B}}))}),tt=et(Ce.bgl,[G,V,X,W]);{const b=e.createCommandEncoder(),P=b.beginComputePass();P.setPipeline(Ce.pipe),P.setBindGroup(0,tt),P.dispatchWorkgroups(1,I,I),P.end(),e.queue.submit([b.finish()])}const Bt=(_.halfPass0?De.lo:De.main).bgl,jt=et(Bt,[F,G,V,X,W,D,ce,T,{buffer:fe,offset:0,size:t.cs*16},_e,oe]),At=et(Pe.bgl,[G,V,X,W,D,ce,T,Y,fe,K,R]),Zt=A?O(16,y|$):null,kt=A?et(Pe.bgl,[G,V,X,W,D,ce,T,Y,fe,K,Zt]):null,Ft=Lo({device:e,hasF16:s,nvox:i,outBufBytes:f,inpBuf:F,act8_0:G,labels8Buf:Y,readbackBuf:E,pInit:Ce,bgInit:tt,pCls:Pe,bgCls:At,clsUbo:R,packed:n,modelEntry:a,probCfg:r,canGpuProb:A,probSlots:A?{clsUbo1:Zt,bgCls1:kt,pass0HoldBuf:L,y0:G,y1:V,b:X,sup:W}:null,ownedBuffers:N,mkBuf:O}),Lt=ue.map((b,P)=>et(Ee.bgl,[ce,fe,T,ye,ae[P],b])),Ut=te.map((b,P)=>et(Ne.bgl,[G,V,X,W,D,T,z[P],b])),mt={buffer:ke,offset:0,size:32},Pt=Array.from({length:l},(b,P)=>P===0?null:et(He.bgl,[G,V,X,W,D,ae[P],mt])),Wt=_.halfPassConv?rt.lo:rt.main,Qt=Array.from({length:l},(b,P)=>P===0?null:et(Wt.bgl,[G,V,X,W,D,T,ye,ae[P],mt])),ln=s?new Uint16Array(S):new Float32Array(S),Rt=new Uint8Array(I*I),gt=new Uint32Array(Ke),Mt=new Uint32Array(Ke+I*I),nt=new Uint32Array(12),le=new Float32Array(nt.buffer),st=new Uint32Array(4),vt=(b,P,B,ne,j,pe,ie,ge)=>{const xe=b*H;be[xe]=P?1:0,be[xe+1]=B,be[xe+2]=ne,be[xe+3]=j,be[xe+4]=pe,be[xe+5]=ie,be[xe+6]=ge,be[xe+7]=0};function zt(b,P){return Be(this,null,function*(){if(b.length!==i)throw new Error(`meshnet_fast_v4 expected ${i} voxels, got ${b.length}`);const B=t.norm==="gn"&&!(a!=null&&a.disableConeSkip),ne=yield Ft.prepareInput({volume:b,ioOpts:P,useCone:B,padInputHost:ln,headRowHost:Rt,hasF16Flag:s}),j=ne.info,pe=Co(Rt,j,t.dilations,B),ie=new Array(l);for(let se=0;se<l;se++){const de=pe.layers[se],ee=de.isFull?Ke:de.mainStrips.length,me=de.isFull||!de.extStrips?0:de.extStrips.length,Se=de.haloRows?de.haloRows.length:0;if(se===0){!de.isFull&&ee>0&&(gt.set(de.mainStrips,0),e.queue.writeBuffer(_e,0,gt.subarray(0,ee)),e.queue.writeBuffer(ae[0],0,gt.subarray(0,ee))),ie[0]={L:de,nMain:ee,nExt:me,nHalo:Se};continue}const Re=new Uint32Array(8),Ye=new Uint32Array(8),at=new Uint32Array(8),yt=new Uint32Array(8);if(!de.isFull){if(ee>0){gt.set(de.mainStrips,0);for(let ze=0;ze<ee;ze++)Ye[de.mainStrips[ze]>>>13]++;let Me=0;for(let ze=0;ze<8;ze++)Re[ze]=Me,Me+=Ye[ze]}if(de.mode==="bwd"&&me>0){const Me=Array.from({length:8},()=>[]);for(let $e=0;$e<me;$e++){const Qe=de.extStrips[$e];Me[Qe>>>13].push(($e&65535)<<16|Qe)}let ze=ee;for(let $e=0;$e<8;$e++){at[$e]=ze;const Qe=Me[$e];yt[$e]=Qe.length;for(let ht=0;ht<Qe.length;ht++)gt[ze++]=Qe[ht]}e.queue.writeBuffer(ae[se],0,gt.subarray(0,ee+me))}else ee>0&&e.queue.writeBuffer(ae[se],0,gt.subarray(0,ee))}const Oe=de.mode==="rpure"&&Se>0||de.mode==="bwd"&&se+1<l,Xe=ms(t.dilations[se],Oe),it=(se-1)*J,Ze=de.bgStrip?de.bgStrip.yWg*4:0,je=de.bgStrip?de.bgStrip.z:0;for(let Me=0;Me<8;Me++)vt(it+Me,de.isFull,Me*32,Re[Me],at[Me],Xe,Ze,je);for(let Me=0;Me<6;Me++)vt(it+8+Me,de.isFull,Me*32,Re[Me],0,0,0,0),vt(it+14+Me,!1,Me*32,at[Me],0,0,0,0);ie[se]={L:de,nMain:ee,nExt:me,nHalo:Se,mainCount:Ye,extCount:yt,layerBaseSlot:it}}l>1&&e.queue.writeBuffer(ke,0,be);let ge=go(e,a);const xe=[];if(ge==="single"){const se=e.createCommandEncoder();ne.runPrePasses(se,xe),pe.clsSkipped&&(se.clearBuffer(Y,0,f),pe.clsStrips.length>0&&e.queue.writeBuffer(K,0,pe.clsStrips));for(let de=0;de<l;de++){const ee=ie[de],{L:me,nMain:Se,nHalo:Re}=ee,Ye=me.nMomExt||0,at=me.isFull?Ke:me.normStrips?me.normStrips.length:0;if(de===0){const Oe=me.isFull?64:1,Xe=me.isFull?I:Se,it=!!(me.bgStrip&&Re>0);if(st[0]=me.isFull?1:0,st[1]=me.bgStrip?me.bgStrip.yWg*4:0,st[2]=me.bgStrip?me.bgStrip.z:0,st[3]=0,e.queue.writeBuffer(oe,0,st),_.halfPass0)for(const[Ze,je]of[[De.lo,De.bgLo],[De.hi,De.bgHi]]){const Me=se.beginComputePass();Me.setBindGroup(0,jt),Xe>0&&(Me.setPipeline(Ze.pipe),Me.dispatchWorkgroups(1,Oe,Xe)),it&&(Me.setPipeline(je.pipe),Me.dispatchWorkgroups(1,1,1)),Me.end(),xe.push("conv0")}else{const Ze=se.beginComputePass();Ze.setBindGroup(0,jt),Xe>0&&(Ze.setPipeline(De.main.pipe),Ze.dispatchWorkgroups(1,Oe,Xe)),it&&(Ze.setPipeline(De.bg.pipe),Ze.dispatchWorkgroups(1,1,1)),Ze.end(),xe.push("conv0")}}else{const Oe=rt,Xe=Qt[de],it=Pt[de],{mainCount:Ze,extCount:je,layerBaseSlot:Me}=ee,ze=me.mode==="rpure"&&!!me.bgStrip;for(let $e=0;$e<8;$e++){if($e>=2){const Ge=$e-2,qe=me.isFull||Ze[Ge]>0,wt=!me.isFull&&me.mode==="bwd"&&je[Ge]>0;if(qe||wt){const Te=se.beginComputePass();Te.setPipeline(He.pipe),qe&&(Te.setBindGroup(0,it,[(Me+8+Ge)*Q]),Te.dispatchWorkgroups(1,me.isFull?64:1,me.isFull?32:Ze[Ge])),wt&&(Te.setBindGroup(0,it,[(Me+14+Ge)*Q]),Te.dispatchWorkgroups(1,1,je[Ge])),Te.end(),xe.push("flushStage")}}const Qe=me.isFull||Ze[$e]>0,ht=!me.isFull&&me.mode==="bwd"&&je[$e]>0,_t=$e===0&&ze;if(!Qe&&!ht&&!_t)continue;const dt=[(Me+$e)*Q],ft=me.isFull?64:1,qt=me.isFull?32:Ze[$e];if(_.halfPassConv)for(const[Ge,qe,wt]of[[Oe.lo,Oe.extLo,Oe.bgLo],[Oe.hi,Oe.extHi,Oe.bgHi]]){const Te=se.beginComputePass();Te.setBindGroup(0,Xe,dt),Qe&&(Te.setPipeline(Ge.pipe),Te.dispatchWorkgroups(1,ft,qt)),ht&&(Te.setPipeline(qe.pipe),Te.dispatchWorkgroups(1,1,je[$e])),_t&&(Te.setPipeline(wt.pipe),Te.dispatchWorkgroups(1,1,1)),Te.end(),xe.push("convHidden")}else{const Ge=se.beginComputePass();Ge.setBindGroup(0,Xe,dt),Qe&&(Ge.setPipeline(Oe.main.pipe),Ge.dispatchWorkgroups(1,ft,qt)),ht&&(Ge.setPipeline(Oe.ext.pipe),Ge.dispatchWorkgroups(1,1,je[$e])),_t&&(Ge.setPipeline(Oe.bg.pipe),Ge.dispatchWorkgroups(1,1,1)),Ge.end(),xe.push("convHidden")}}}const yt=de+1<l?n.w0Vec4s+de*n.hiddenVec4PerLayer:0;nt[0]=de*n.metaStride,nt[1]=yt,nt[2]=(de+1)*n.metaStride,nt[3]=de+1<l?1:0,nt[4]=de===0?1:0,nt[5]=me.isFull?1:0,nt[6]=Se,nt[7]=Ye*8,le[8]=me.extWeight||0,nt[9]=0,nt[10]=0,nt[11]=0,e.queue.writeBuffer(ue[de],0,nt);{const Oe=se.beginComputePass();Oe.setBindGroup(0,Lt[de]),Oe.setPipeline(Ee.pipe),Oe.dispatchWorkgroups(t.cs,1,1),Oe.end(),xe.push("momentsPrep")}if(de+1<l){{const Xe=se.beginComputePass();Xe.setBindGroup(0,Lt[de]),Xe.setPipeline(Ie.pipe),Xe.dispatchWorkgroups(1,1,1),Xe.end(),xe.push("momentsPrep")}const Oe=me.isFull?0:at;if((Oe>0||Re>0)&&(Oe>0&&Mt.set(me.normStrips,0),Re>0&&Mt.set(me.haloRows,Oe),e.queue.writeBuffer(z[de],0,Mt.subarray(0,Oe+Re))),st[0]=me.isFull?1:0,st[1]=me.bgStrip?me.bgStrip.z*I+me.bgStrip.yWg*4:0,st[2]=Oe,st[3]=Re,e.queue.writeBuffer(te[de],0,st),me.isFull||at>0||Re>0){const Xe=se.beginComputePass();Xe.setBindGroup(0,Ut[de]),(me.isFull||at>0)&&(Xe.setPipeline(Ne.pipe),Xe.dispatchWorkgroups(1,me.isFull?64:1,me.isFull?I:at)),Re>0&&(Xe.setPipeline(Ue.pipe),Xe.dispatchWorkgroups(1,Math.ceil(Re/4),1)),Xe.end(),xe.push("normHalo")}}}return zt.__passCategories=xe,Ft.finishAndReadback({enc:se,schedule:pe,passCategories:xe,u4Tmp:st,ioOpts:P})}const Ae=Tn(e),Ve=typeof(P==null?void 0:P.onProgress)=="function"?P.onProgress:null,Je=yo(pe,l);let ve=0,We=-1;const Fe=se=>{if(!Ve)return;const de=Math.min(.99,ve/Je);let ee="";se>=0&&se!==We&&(We=se,ee=`Layer ${se+1}/${l}`),Ve(de,ee)},re=xo(e,e.__v4MsPerStrip||.12,Fe);let he=e.createCommandEncoder();ne.runPrePasses(he,xe),pe.clsSkipped&&(he.clearBuffer(Y,0,f),pe.clsStrips.length>0&&e.queue.writeBuffer(K,0,pe.clsStrips));for(let se=0;se<l;se++){const de=ie[se],{L:ee,nMain:me,nHalo:Se}=de,Re=ee.nMomExt||0,Ye=ee.isFull?Ke:ee.normStrips?ee.normStrips.length:0,at=xs(ee,se,l);if(se===0){const Oe=ee.isFull?64:1,Xe=ee.isFull?I:me,it=!!(ee.bgStrip&&Se>0);if(st[0]=ee.isFull?1:0,st[1]=ee.bgStrip?ee.bgStrip.yWg*4:0,st[2]=ee.bgStrip?ee.bgStrip.z:0,st[3]=0,e.queue.writeBuffer(oe,0,st),_.halfPass0)for(const[Ze,je]of[[De.lo,De.bgLo],[De.hi,De.bgHi]]){const Me=he.beginComputePass();Me.setBindGroup(0,jt),Xe>0&&(Me.setPipeline(Ze.pipe),Me.dispatchWorkgroups(1,Oe,Xe)),it&&(Me.setPipeline(je.pipe),Me.dispatchWorkgroups(1,1,1)),Me.end(),xe.push("conv0")}else{const Ze=he.beginComputePass();Ze.setBindGroup(0,jt),Xe>0&&(Ze.setPipeline(De.main.pipe),Ze.dispatchWorkgroups(1,Oe,Xe)),it&&(Ze.setPipeline(De.bg.pipe),Ze.dispatchWorkgroups(1,1,1)),Ze.end(),xe.push("conv0")}ge==="calibrate"?(e.queue.submit([he.finish()]),he=e.createCommandEncoder()):ge==="paced"&&(ve+=at.convWork,he=yield re.submitChunk(he,at.convWork,0,{forceUiYield:!0}))}else{const Oe=rt,Xe=Qt[se],it=Pt[se],{mainCount:Ze,extCount:je,layerBaseSlot:Me}=de,ze=ee.mode==="rpure"&&!!ee.bgStrip;let $e=0;for(let Qe=0;Qe<8;Qe++){if(Qe>=2){const ft=Qe-2,qt=ee.isFull||Ze[ft]>0,Ge=!ee.isFull&&ee.mode==="bwd"&&je[ft]>0;if(qt||Ge){const qe=he.beginComputePass();qe.setPipeline(He.pipe),qt&&(qe.setBindGroup(0,it,[(Me+8+ft)*Q]),qe.dispatchWorkgroups(1,ee.isFull?64:1,ee.isFull?32:Ze[ft])),Ge&&(qe.setBindGroup(0,it,[(Me+14+ft)*Q]),qe.dispatchWorkgroups(1,1,je[ft])),qe.end(),xe.push("flushStage")}}const ht=ee.isFull||Ze[Qe]>0,_t=!ee.isFull&&ee.mode==="bwd"&&je[Qe]>0,dt=Qe===0&&ze;if(ht||_t||dt){const ft=[(Me+Qe)*Q],qt=ee.isFull?64:1,Ge=ee.isFull?32:Ze[Qe];if(_.halfPassConv)for(const[qe,wt,Te]of[[Oe.lo,Oe.extLo,Oe.bgLo],[Oe.hi,Oe.extHi,Oe.bgHi]]){const Xt=he.beginComputePass();Xt.setBindGroup(0,Xe,ft),ht&&(Xt.setPipeline(qe.pipe),Xt.dispatchWorkgroups(1,qt,Ge)),_t&&(Xt.setPipeline(wt.pipe),Xt.dispatchWorkgroups(1,1,je[Qe])),dt&&(Xt.setPipeline(Te.pipe),Xt.dispatchWorkgroups(1,1,1)),Xt.end(),xe.push("convHidden")}else{const qe=he.beginComputePass();qe.setBindGroup(0,Xe,ft),ht&&(qe.setPipeline(Oe.main.pipe),qe.dispatchWorkgroups(1,qt,Ge)),_t&&(qe.setPipeline(Oe.ext.pipe),qe.dispatchWorkgroups(1,1,je[Qe])),dt&&(qe.setPipeline(Oe.bg.pipe),qe.dispatchWorkgroups(1,1,1)),qe.end(),xe.push("convHidden")}$e+=(ht?ee.isFull?2048:Ze[Qe]:0)+(_t?je[Qe]:0)}if(ge==="calibrate"&&($e>=512||Qe===7&&$e>0)){const ft=performance.now();e.queue.submit([he.finish()]),yield e.queue.onSubmittedWorkDone();const qt=performance.now()-ft;if(he=e.createCommandEncoder(),ve+=$e,$e>=512){const Ge=qt/$e,qe=Ge*Ke;e.__v4WinCalibrated=!0,re.setMsPerStrip(Ge),!Ae.isWindowsSharedIgpu&&qe<fo?(e.__v4WinFast=!0,ge="pipelined",console.log(`[WebGPU-V4-128M] Windows GPU calibration: estFullLayer=${qe.toFixed(1)}ms -> unthrottled pipelined mode`)):(e.__v4WinFast=!1,ge="paced",console.log(`[WebGPU-V4-128M] Windows GPU calibration: estFullLayer=${qe.toFixed(1)}ms -> TDR-safe 2-in-flight paced mode`),Fe(se))}$e=0}else ge==="paced"&&$e>0&&($e*re.getMsPerStrip()>=po*.75||Qe===7)&&(ve+=$e,he=yield re.submitChunk(he,$e,se),$e=0)}}const yt=se+1<l?n.w0Vec4s+se*n.hiddenVec4PerLayer:0;nt[0]=se*n.metaStride,nt[1]=yt,nt[2]=(se+1)*n.metaStride,nt[3]=se+1<l?1:0,nt[4]=se===0?1:0,nt[5]=ee.isFull?1:0,nt[6]=me,nt[7]=Re*8,le[8]=ee.extWeight||0,nt[9]=0,nt[10]=0,nt[11]=0,e.queue.writeBuffer(ue[se],0,nt);{const Oe=he.beginComputePass();Oe.setBindGroup(0,Lt[se]),Oe.setPipeline(Ee.pipe),Oe.dispatchWorkgroups(t.cs,1,1),Oe.end(),xe.push("momentsPrep")}if(se+1<l){{const Xe=he.beginComputePass();Xe.setBindGroup(0,Lt[se]),Xe.setPipeline(Ie.pipe),Xe.dispatchWorkgroups(1,1,1),Xe.end(),xe.push("momentsPrep")}const Oe=ee.isFull?0:Ye;if((Oe>0||Se>0)&&(Oe>0&&Mt.set(ee.normStrips,0),Se>0&&Mt.set(ee.haloRows,Oe),e.queue.writeBuffer(z[se],0,Mt.subarray(0,Oe+Se))),st[0]=ee.isFull?1:0,st[1]=ee.bgStrip?ee.bgStrip.z*I+ee.bgStrip.yWg*4:0,st[2]=Oe,st[3]=Se,e.queue.writeBuffer(te[se],0,st),ee.isFull||Ye>0||Se>0){const Xe=he.beginComputePass();Xe.setBindGroup(0,Ut[se]),(ee.isFull||Ye>0)&&(Xe.setPipeline(Ne.pipe),Xe.dispatchWorkgroups(1,ee.isFull?64:1,ee.isFull?I:Ye)),Se>0&&(Xe.setPipeline(Ue.pipe),Xe.dispatchWorkgroups(1,Math.ceil(Se/4),1)),Xe.end(),xe.push("normHalo")}}ge==="pipelined"?(e.queue.submit([he.finish()]),he=e.createCommandEncoder()):ge==="calibrate"?(e.queue.submit([he.finish()]),yield e.queue.onSubmittedWorkDone(),he=e.createCommandEncoder(),ve+=(se===0?at.convWork:0)+at.normWork,se===l-1&&!e.__v4WinCalibrated&&(e.__v4WinCalibrated=!0,e.__v4WinFast=!Ae.isWindowsSharedIgpu)):(ve+=at.normWork,he=yield re.submitChunk(he,at.normWork,se))}return ge==="paced"&&(yield re.waitBeforeFinalSubmit()),zt.__passCategories=xe,Ft.finishAndReadback({enc:he,schedule:pe,passCategories:xe,u4Tmp:st,ioOpts:P,paced:ge==="paced",onProgress:Ve})})}return Ft.warmupIoPipelines(),zt.dispose=({keepSharedWorkspace:b=!1}={})=>{Ft.dispose();for(const P of N)P.destroy();if(N.length=0,Z.resetBytes(),U.pooled)b?U.inUse=!1:an.get(e)===U&&xn(e);else{for(const P of U.buffers)P.destroy();U.buffers.length=0}},zt.gpuBytes=()=>U.bytes+Z.getBytes(),zt.__passCategories=[],zt.__coneInfo=()=>({paddedVox:S,actMiB:d/1048576,mode:"LowMem128"}),zt.kernels="v4-int8",zt})}const Io=!0;function Ss(o,a,r){return Be(this,arguments,function*(e,t,n,s={}){ps++;try{return yield Ma(e,t,n,s)}finally{ps--}})}function Ma(o,a,r){return Be(this,arguments,function*(e,t,n,s={}){var Je,ve,We,Fe;const i=t instanceof Uint8Array?t:new Uint8Array(t),f=io(i.buffer.slice(i.byteOffset,i.byteOffset+i.byteLength)),l=lo(f);s!=null&&s.classifierBias&&l.classifier&&(l.classifier.bias=Float32Array.from(s.classifierBias));const u=vs(s),d=(s==null?void 0:s.dilations)||(u==null?void 0:u.dilations)||(l.convs.length===25?[16,8,4,2,1,16,8,4,2,1,16,8,4,2,1,16,8,4,2,1,16,8,4,2,1]:l.convs.length===9?[1,2,4,8,16,8,4,2,1]:fs),g=(s==null?void 0:s.activation)||(u==null?void 0:u.activation)||(l.affines.length||l.convs.length>=13?"gelu_tanh":"relu"),c=l.convs[0].outC,p=c>8?Math.ceil(c/8)*8:Math.ceil(c/4)*4,m=uo(l,{nx:I,ny:I,nz:I,cs:p,activation:g,dilations:d}),h=va(i,l,m,s),M=(s==null?void 0:s.outputType)==="probability"?fa(s,m.nclass):null,_=!!((ve=(Je=e.features)==null?void 0:Je.has)!=null&&ve.call(Je,"shader-f16"))&&!(s!=null&&s.disableF16),w=ho(e,s),y=I*I*I,$=M?y*4:y,x=m.cs>=16,S=x?m.cs/2:m.cs,C=I*I*S*ct*4,v=I*I*S*pt*4,A=e.limits||{},k=Math.min((We=A.maxStorageBufferBindingSize)!=null?We:1/0,(Fe=A.maxBufferSize)!=null?Fe:1/0),U=bo(e,m,s);if((s!=null&&s.forceLowMem128||U||C>k||$>k)&&m.cs>=8&&m.cs%4===0)return ka(e,m,h,_,w,s,M);if(C>k||$>k){const re=Math.max(C,$)>>>20;throw new Error(`meshnet_fast_v4: buffer (${re} MiB) exceeds device limit (${k>>>20} MiB)`)}const F=_o(e,s),G=Ro({cs:m.cs,chan:m.chan,nclass:m.nclass,clsK4:h.clsK4,dilations:m.dilations,activation:m.activation,norm:m.norm,hasF16:_,subgroupMode:w,splitHalves:x,probCfg:M,chunkableStd:F});console.log(`[WebGPU-V4] ${m.chan}ch(cs=${m.cs})/${m.nclass}cls (${m.dilations.length} convs, ${m.activation}, norm=${m.norm}${M?", prob=3":""}) | ${_?"f16+sterbenz":"f32"} | ${wo(w)} | ZYCX-pad80 | maxBuf=${(Math.max(C,$)/1048576).toFixed(1)} MiB`);const V=GPUBufferUsage.STORAGE,X=GPUBufferUsage.COPY_DST,W=GPUBufferUsage.COPY_SRC,D=I*I*pn,T=D*(_?2:4),Y=In*m.cs*16,E=co*m.cs*16,L=(m.cs*2+4)*16,N=_?Math.ceil(G.totalWEffVec4s/2)*16:G.totalWEffVec4s*16,Z=`std|${m.cs}|${x?1:0}|${_?1:0}|${$}`,O=ko(e,Z,()=>{const re=[],he=Xn(e,re),se=he.alloc,de={inpBuf:se(T,V|X|W),act8_0:se(C,V|X|W),act8_1:se(x?C:16,V|X|W),y8_0:se(v,V|X|W),y8_1:se(x?v:16,V|X|W),momMainBuf:se(Y,V),momExtBuf:se(E,V),momStatsBuf:se(L,V),labels8Buf:se($,V|X|W),readbackBuf:se($,GPUBufferUsage.MAP_READ|X)};return{buffers:re,named:de,bytes:he.getBytes()}}),{inpBuf:ce,act8_0:fe,act8_1:ye,y8_0:we,y8_1:_e,momMainBuf:K,momExtBuf:ae,momStatsBuf:z,labels8Buf:oe,readbackBuf:R}=O.named,ue=[],te=Xn(e,ue),Q=te.alloc,H=Q(_?h.wF16.byteLength:h.wF32.byteLength,V|X),J=Q(h.qmetaF32.byteLength,V|X),q=Q(N,G.useUniformWeff?V|GPUBufferUsage.UNIFORM:V),ke=m.dilations.length,be=m.norm==="gn"&&!(s!=null&&s.disableConeSkip),Le=Array.from({length:ke},()=>Q(be?Ke*4:16,V|X)),Ce=Array.from({length:ke-1},()=>Q(be?(Ke+I*I)*4:16,V|X)),Ee=Q(be?Ke*4:16,V|X),Ie=Q(16,GPUBufferUsage.UNIFORM|X),He=Q(16,GPUBufferUsage.UNIFORM|X),Ne=Array.from({length:ke},()=>Q(48,GPUBufferUsage.UNIFORM|X)),Ue=Array.from({length:ke-1},()=>Q(16,GPUBufferUsage.UNIFORM|X)),Pe=Math.max(256,A.minUniformBufferOffsetAlignment||256),De=Pe>>>2,rt=G.chunkableStd?Math.max(1,(ke-1)*ns):0,et=G.chunkableStd?Q(rt*Pe,GPUBufferUsage.UNIFORM|X):null,tt=G.chunkableStd?new Uint32Array(rt*De):null,Bt=G.chunkableStd?null:Array.from({length:ke},()=>Q(16,GPUBufferUsage.UNIFORM|X));e.queue.writeBuffer(H,0,_?h.wF16:h.wF32),e.queue.writeBuffer(J,0,h.qmetaF32);let jt;try{jt=yield zo(e,m,h,_,w,x,M,G)}catch(re){for(const he of ue)he.destroy();if(ue.length=0,O.pooled)an.get(e)===O&&xn(e);else{for(const he of O.buffers)he.destroy();O.buffers.length=0}throw re}const{pInit:At,pMomFin:Zt,pPrepW:kt,pNorm:Ft,pNormHalo:Lt,pCls:Ut,pConv0:mt,pConv:Pt}=jt,Wt=(re,he)=>e.createBindGroup({layout:re,entries:he.map((se,de)=>({binding:de,resource:se&&se.buffer?se:{buffer:se}}))}),Qt=Wt(At.bgl,[fe,ye]);{const re=e.createCommandEncoder(),he=re.beginComputePass();he.setPipeline(At.pipe),he.setBindGroup(0,Qt),he.dispatchWorkgroups(1,I,I),he.end(),e.queue.submit([re.finish()])}const ln=(G.halfPass0?mt.lo:mt.main).bgl,Rt=Wt(ln,[ce,we,_e,H,J,K,ae,Le[0],Ie]),gt=Wt(Ut.bgl,[we,_e,H,J,K,z,oe,Ee,He]),Mt=!!(M&&x&&C>=$&&v>=$),nt=Mt?Q(16,GPUBufferUsage.UNIFORM|X):null,le=Mt?Wt(Ut.bgl,[we,_e,H,J,K,z,oe,Ee,nt]):null,st=Lo({device:e,hasF16:_,nvox:y,outBufBytes:$,inpBuf:ce,act8_0:fe,labels8Buf:oe,readbackBuf:R,pInit:At,bgInit:Qt,pCls:Ut,bgCls:gt,clsUbo:He,packed:h,modelEntry:s,probCfg:M,canGpuProb:Mt,probSlots:Mt?{clsUbo1:nt,bgCls1:le,pass0HoldBuf:fe,y0:we,y1:_e,b:ye,sup:fe}:null,ownedBuffers:ue,mkBuf:Q}),vt=Ne.map((re,he)=>Wt(Zt.bgl,[H,J,K,ae,z,q,Le[he],re])),zt=Ue.map((re,he)=>Wt(Ft.bgl,[fe,ye,we,_e,K,ae,z,Ce[he],re])),xt=G.chunkableStd?{buffer:et,offset:0,size:32}:null,Ct=G.halfPassConv?Pt.lo:Pt.main,b=Array.from({length:ke},(re,he)=>he===0?null:Wt(Ct.bgl,[fe,ye,we,_e,K,ae,q,Le[he],G.chunkableStd?xt:Bt[he]])),P=(re,he,se,de,ee,me)=>{const Se=re*De;tt[Se]=he?1:0,tt[Se+1]=se,tt[Se+2]=de,tt[Se+3]=0,tt[Se+4]=ee,tt[Se+5]=me,tt[Se+6]=0,tt[Se+7]=0},B=(re,he,se,de,ee,me,Se,Re)=>{if(!(me<=0&&Se<=0))if(G.halfPassConv){{const Ye=re.beginComputePass();de?Ye.setBindGroup(0,se,de):Ye.setBindGroup(0,se),me>0&&(Ye.setPipeline(he.lo.pipe),Ye.dispatchWorkgroups(1,ee,me)),Se>0&&(Ye.setPipeline(he.extLo.pipe),Ye.dispatchWorkgroups(1,1,Se)),Ye.end(),Re.push("convHidden")}{const Ye=re.beginComputePass();de?Ye.setBindGroup(0,se,de):Ye.setBindGroup(0,se),me>0&&(Ye.setPipeline(he.hi.pipe),Ye.dispatchWorkgroups(1,ee,me)),Se>0&&(Ye.setPipeline(he.extHi.pipe),Ye.dispatchWorkgroups(1,1,Se)),Ye.end(),Re.push("convHidden")}}else{const Ye=re.beginComputePass();de?Ye.setBindGroup(0,se,de):Ye.setBindGroup(0,se),me>0&&(Ye.setPipeline(he.main.pipe),Ye.dispatchWorkgroups(1,ee,me)),Se>0&&(Ye.setPipeline(he.ext.pipe),Ye.dispatchWorkgroups(1,1,Se)),Ye.end(),Re.push("convHidden")}},ne=_?new Uint16Array(D):new Float32Array(D),j=new Uint8Array(I*I),pe=new Uint32Array(Ke),ie=new Uint32Array(Ke+I*I),ge=new Uint32Array(12),xe=new Float32Array(ge.buffer),Ae=new Uint32Array(4);function Ve(re,he){return Be(this,null,function*(){if(re.length!==y)throw new Error(`meshnet_fast_v4 expected ${y} voxels, got ${re.length}`);const se=m.norm==="gn"&&!(s!=null&&s.disableConeSkip),de=yield st.prepareInput({volume:re,ioOpts:he,useCone:se,padInputHost:ne,headRowHost:j,hasF16Flag:_}),ee=de.info,me=Co(j,ee,m.dilations,se);let Se=go(e,s);const Re=[];if(Se==="single"&&!G.chunkableStd){const Me=e.createCommandEncoder();de.runPrePasses(Me,Re),me.clsSkipped&&(Me.clearBuffer(oe,0,$),me.clsStrips.length>0&&e.queue.writeBuffer(Ee,0,me.clsStrips));for(let ze=0;ze<ke;ze++){const $e=me.layers[ze],Qe=$e.isFull?Ke:$e.mainStrips.length,ht=$e.isFull||!$e.extStrips?0:$e.extStrips.length,_t=$e.nMomExt||0,dt=$e.haloRows?$e.haloRows.length:0,ft=$e.isFull?Ke:$e.normStrips?$e.normStrips.length:0;if(!$e.isFull&&(Qe>0||ht>0)&&(Qe>0&&pe.set($e.mainStrips,0),ht>0&&pe.set($e.extStrips,Qe),e.queue.writeBuffer(Le[ze],0,pe.subarray(0,Qe+ht))),ze===0){const Ge=$e.isFull?64:1,qe=$e.isFull?I:Qe,wt=!!($e.bgStrip&&dt>0);if(Ae[0]=$e.isFull?1:0,Ae[1]=$e.bgStrip?$e.bgStrip.yWg*4:0,Ae[2]=$e.bgStrip?$e.bgStrip.z:0,Ae[3]=0,e.queue.writeBuffer(Ie,0,Ae),G.halfPass0){{const Te=Me.beginComputePass();Te.setBindGroup(0,Rt),qe>0&&(Te.setPipeline(mt.lo.pipe),Te.dispatchWorkgroups(1,Ge,qe)),wt&&(Te.setPipeline(mt.bgLo.pipe),Te.dispatchWorkgroups(1,1,1)),Te.end(),Re.push("conv0")}{const Te=Me.beginComputePass();Te.setBindGroup(0,Rt),qe>0&&(Te.setPipeline(mt.hi.pipe),Te.dispatchWorkgroups(1,Ge,qe)),wt&&(Te.setPipeline(mt.bgHi.pipe),Te.dispatchWorkgroups(1,1,1)),Te.end(),Re.push("conv0")}}else{const Te=Me.beginComputePass();Te.setBindGroup(0,Rt),qe>0&&(Te.setPipeline(mt.main.pipe),Te.dispatchWorkgroups(1,Ge,qe)),wt&&(Te.setPipeline(mt.bg.pipe),Te.dispatchWorkgroups(1,1,1)),Te.end(),Re.push("conv0")}}else{const Ge=m.dilations[ze],qe=b[ze],wt=$e.isFull?64:1,Te=$e.isFull?I:Qe,Xt=$e.mode==="rpure"&&dt>0||$e.mode==="bwd"&&ze+1<ke;Ae[0]=$e.isFull?1:0,Ae[1]=Qe,Ae[2]=ms(Ge,Xt),Ae[3]=0,e.queue.writeBuffer(Bt[ze],0,Ae),B(Me,Pt,qe,null,wt,Te,ht,Re)}const qt=ze+1<ke?h.w0Vec4s+ze*h.hiddenVec4PerLayer:0;ge[0]=ze*h.metaStride,ge[1]=qt,ge[2]=(ze+1)*h.metaStride,ge[3]=ze+1<ke?1:0,ge[4]=ze===0?1:0,ge[5]=$e.isFull?1:0,ge[6]=Qe,ge[7]=_t*8,xe[8]=$e.extWeight||0,ge[9]=0,ge[10]=0,ge[11]=0,e.queue.writeBuffer(Ne[ze],0,ge);{const Ge=Me.beginComputePass();Ge.setBindGroup(0,vt[ze]),Ge.setPipeline(Zt.pipe),Ge.dispatchWorkgroups(m.cs,1,1),Ge.end(),Re.push("momentsPrep")}if(ze+1<ke){{const qe=Me.beginComputePass();qe.setBindGroup(0,vt[ze]),qe.setPipeline(kt.pipe),qe.dispatchWorkgroups(1,1,1),qe.end(),Re.push("momentsPrep")}const Ge=$e.isFull?0:ft;if((Ge>0||dt>0)&&(Ge>0&&ie.set($e.normStrips,0),dt>0&&ie.set($e.haloRows,Ge),e.queue.writeBuffer(Ce[ze],0,ie.subarray(0,Ge+dt))),Ae[0]=$e.isFull?1:0,Ae[1]=$e.bgStrip?$e.bgStrip.z*I+$e.bgStrip.yWg*4:0,Ae[2]=Ge,Ae[3]=dt,e.queue.writeBuffer(Ue[ze],0,Ae),$e.isFull||ft>0||dt>0){const qe=Me.beginComputePass();qe.setBindGroup(0,zt[ze]),($e.isFull||ft>0)&&(qe.setPipeline(Ft.pipe),qe.dispatchWorkgroups(1,$e.isFull?64:1,$e.isFull?I:ft)),dt>0&&(qe.setPipeline(Lt.pipe),qe.dispatchWorkgroups(1,Math.ceil(dt/4),1)),qe.end(),Re.push("normHalo")}}}return Ve.__passCategories=Re,st.finishAndReadback({enc:Me,schedule:me,passCategories:Re,u4Tmp:Ae,ioOpts:he})}const Ye=Tn(e),at=typeof(he==null?void 0:he.onProgress)=="function"?he.onProgress:null,yt=yo(me,ke);let Oe=0,Xe=-1;const it=Me=>{if(!at)return;const ze=Math.min(.99,Oe/yt);let $e="";Me>=0&&Me!==Xe&&(Xe=Me,$e=`Layer ${Me+1}/${ke}`),at(ze,$e)},Ze=xo(e,e.__v4MsPerStrip||.12,it);let je=e.createCommandEncoder();de.runPrePasses(je,Re),me.clsSkipped&&(je.clearBuffer(oe,0,$),me.clsStrips.length>0&&e.queue.writeBuffer(Ee,0,me.clsStrips));for(let Me=0;Me<ke;Me++){const ze=me.layers[Me],$e=ze.isFull?Ke:ze.mainStrips.length,Qe=ze.isFull||!ze.extStrips?0:ze.extStrips.length,ht=ze.nMomExt||0,_t=ze.haloRows?ze.haloRows.length:0,dt=ze.isFull?Ke:ze.normStrips?ze.normStrips.length:0,ft=xs(ze,Me,ke);if(!ze.isFull&&($e>0||Qe>0)&&($e>0&&pe.set(ze.mainStrips,0),Qe>0&&pe.set(ze.extStrips,$e),e.queue.writeBuffer(Le[Me],0,pe.subarray(0,$e+Qe))),Me===0){const Ge=ze.isFull?64:1,qe=ze.isFull?I:$e,wt=!!(ze.bgStrip&&_t>0);if(Ae[0]=ze.isFull?1:0,Ae[1]=ze.bgStrip?ze.bgStrip.yWg*4:0,Ae[2]=ze.bgStrip?ze.bgStrip.z:0,Ae[3]=0,e.queue.writeBuffer(Ie,0,Ae),G.halfPass0){{const Te=je.beginComputePass();Te.setBindGroup(0,Rt),qe>0&&(Te.setPipeline(mt.lo.pipe),Te.dispatchWorkgroups(1,Ge,qe)),wt&&(Te.setPipeline(mt.bgLo.pipe),Te.dispatchWorkgroups(1,1,1)),Te.end(),Re.push("conv0")}{const Te=je.beginComputePass();Te.setBindGroup(0,Rt),qe>0&&(Te.setPipeline(mt.hi.pipe),Te.dispatchWorkgroups(1,Ge,qe)),wt&&(Te.setPipeline(mt.bgHi.pipe),Te.dispatchWorkgroups(1,1,1)),Te.end(),Re.push("conv0")}}else{const Te=je.beginComputePass();Te.setBindGroup(0,Rt),qe>0&&(Te.setPipeline(mt.main.pipe),Te.dispatchWorkgroups(1,Ge,qe)),wt&&(Te.setPipeline(mt.bg.pipe),Te.dispatchWorkgroups(1,1,1)),Te.end(),Re.push("conv0")}Se==="calibrate"?(e.queue.submit([je.finish()]),je=e.createCommandEncoder()):Se==="paced"&&(Oe+=ft.convWork,je=yield Ze.submitChunk(je,ft.convWork,0,{forceUiYield:!0}))}else{const Ge=m.dilations[Me],qe=b[Me],wt=ze.isFull?64:1,Te=ze.isFull?I:$e,Xt=ze.mode==="rpure"&&_t>0||ze.mode==="bwd"&&Me+1<ke,Ln=ms(Ge,Xt);if(!G.chunkableStd)Ae[0]=ze.isFull?1:0,Ae[1]=$e,Ae[2]=Ln,Ae[3]=0,e.queue.writeBuffer(Bt[Me],0,Ae),B(je,Pt,qe,null,wt,Te,Qe,Re);else if(Se==="pipelined"||Se==="single"){const Yt=(Me-1)*ns;P(Yt,ze.isFull,$e,Ln,0,0),e.queue.writeBuffer(et,Yt*Pe,tt.subarray(Yt*De,(Yt+1)*De)),B(je,Pt,qe,[Yt*Pe],wt,Te,Qe,Re)}else{const Yt=(Me-1)*ns,Kn=Se==="calibrate"?1024:Math.max(256,Math.min(4096,Math.round(po/Math.max(.005,Ze.getMsPerStrip())))),yn=[];let Un=0;if(ze.isFull){const en=Math.max(4,Math.min(64,Math.round(Kn/64)));for(let Ot=0;Ot<I;Ot+=en){const It=Math.min(en,I-Ot),tn=Yt+Un++;P(tn,!0,$e,Ln,Ot,0),yn.push({slotIdx:tn,mainY:64,mainCountZ:It,extCountZ:0,strips:It*64})}}else{const en=Math.max(256,Kn);for(let It=0;It<$e;It+=en){const tn=Math.min(en,$e-It),gn=Yt+Un++;P(gn,!1,$e,Ln,It,0),yn.push({slotIdx:gn,mainY:1,mainCountZ:tn,extCountZ:0,strips:tn})}const Ot=Math.max(256,Kn);for(let It=0;It<Qe;It+=Ot){const tn=Math.min(Ot,Qe-It),gn=Yt+Un++;P(gn,!1,$e,Ln,0,It),yn.push({slotIdx:gn,mainY:1,mainCountZ:0,extCountZ:tn,strips:tn})}}Un>0&&e.queue.writeBuffer(et,Yt*Pe,tt.subarray(Yt*De,(Yt+Un)*De));let Jt=0;for(let en=0;en<yn.length;en++){const Ot=yn[en];if(B(je,Pt,qe,[Ot.slotIdx*Pe],Ot.mainY,Ot.mainCountZ,Ot.extCountZ,Re),Se==="pipelined")continue;Jt+=Ot.strips;const It=en===yn.length-1;if(Se==="calibrate"&&(Jt>=512||It&&Jt>0)){const tn=performance.now();e.queue.submit([je.finish()]),yield e.queue.onSubmittedWorkDone();const gn=performance.now()-tn;if(je=e.createCommandEncoder(),Oe+=Jt,Jt>=512){const Ps=gn/Jt,Zn=Ps*Ke;e.__v4WinCalibrated=!0,Ze.setMsPerStrip(Ps),!Ye.isWindowsSharedIgpu&&Zn<fo?(e.__v4WinFast=!0,Se="pipelined",console.log(`[WebGPU-V4] Windows GPU calibration: estFullLayer=${Zn.toFixed(1)}ms -> unthrottled pipelined mode`)):(e.__v4WinFast=!1,Se="paced",console.log(`[WebGPU-V4] Windows GPU calibration: estFullLayer=${Zn.toFixed(1)}ms -> TDR-safe 2-in-flight paced mode`),it(Me))}Jt=0}else Se==="paced"&&(Oe+=Jt,je=yield Ze.submitChunk(je,Jt,Me),Jt=0)}}}const qt=Me+1<ke?h.w0Vec4s+Me*h.hiddenVec4PerLayer:0;ge[0]=Me*h.metaStride,ge[1]=qt,ge[2]=(Me+1)*h.metaStride,ge[3]=Me+1<ke?1:0,ge[4]=Me===0?1:0,ge[5]=ze.isFull?1:0,ge[6]=$e,ge[7]=ht*8,xe[8]=ze.extWeight||0,ge[9]=0,ge[10]=0,ge[11]=0,e.queue.writeBuffer(Ne[Me],0,ge);{const Ge=je.beginComputePass();Ge.setBindGroup(0,vt[Me]),Ge.setPipeline(Zt.pipe),Ge.dispatchWorkgroups(m.cs,1,1),Ge.end(),Re.push("momentsPrep")}if(Me+1<ke){{const qe=je.beginComputePass();qe.setBindGroup(0,vt[Me]),qe.setPipeline(kt.pipe),qe.dispatchWorkgroups(1,1,1),qe.end(),Re.push("momentsPrep")}const Ge=ze.isFull?0:dt;if((Ge>0||_t>0)&&(Ge>0&&ie.set(ze.normStrips,0),_t>0&&ie.set(ze.haloRows,Ge),e.queue.writeBuffer(Ce[Me],0,ie.subarray(0,Ge+_t))),Ae[0]=ze.isFull?1:0,Ae[1]=ze.bgStrip?ze.bgStrip.z*I+ze.bgStrip.yWg*4:0,Ae[2]=Ge,Ae[3]=_t,e.queue.writeBuffer(Ue[Me],0,Ae),ze.isFull||dt>0||_t>0){const qe=je.beginComputePass();qe.setBindGroup(0,zt[Me]),(ze.isFull||dt>0)&&(qe.setPipeline(Ft.pipe),qe.dispatchWorkgroups(1,ze.isFull?64:1,ze.isFull?I:dt)),_t>0&&(qe.setPipeline(Lt.pipe),qe.dispatchWorkgroups(1,Math.ceil(_t/4),1)),qe.end(),Re.push("normHalo")}}if(Se==="pipelined")e.queue.submit([je.finish()]),je=e.createCommandEncoder();else if(Se==="calibrate")e.queue.submit([je.finish()]),yield e.queue.onSubmittedWorkDone(),je=e.createCommandEncoder(),Oe+=(Me===0||!G.chunkableStd?ft.convWork:0)+ft.normWork,Me===ke-1&&!e.__v4WinCalibrated&&(e.__v4WinCalibrated=!0,e.__v4WinFast=!Ye.isWindowsSharedIgpu);else if(Se!=="single"){const Ge=(!G.chunkableStd&&Me>0?ft.convWork:0)+ft.normWork;Oe+=Ge,je=yield Ze.submitChunk(je,Ge,Me)}}return Se==="paced"&&(yield Ze.waitBeforeFinalSubmit()),Ve.__passCategories=Re,st.finishAndReadback({enc:je,schedule:me,passCategories:Re,u4Tmp:Ae,ioOpts:he,paced:Se==="paced",onProgress:at})})}return st.warmupIoPipelines(),Ve.dispose=({keepSharedWorkspace:re=!1}={})=>{st.dispose();for(const he of ue)he.destroy();if(ue.length=0,te.resetBytes(),O.pooled)re?O.inUse=!1:an.get(e)===O&&xn(e);else{for(const he of O.buffers)he.destroy();O.buffers.length=0}},Ve.gpuBytes=()=>O.bytes+te.getBytes(),Ve.__passCategories=[],Ve.__coneInfo=()=>({paddedVox:D,actMiB:C/1048576}),Ve.kernels="v4-int8",Ve})}function ks(e){return Be(this,null,function*(){var i,f,l,u;if(!e)return;const t=()=>ps>0||!!e.__isLost;if(t())return;const n=!!((f=(i=e.features)==null?void 0:i.has)!=null&&f.call(i,"shader-f16")),s=ho(e,null),o=e.limits||{},a=Math.min((l=o.maxStorageBufferBindingSize)!=null?l:1/0,(u=o.maxBufferSize)!=null?u:1/0);if(yield on(e,n?"prep_in_u8_f16":"prep_in_u8_f32",()=>gs(!0,n),"main",["read-only-storage","storage","uniform"]),t()||(yield on(e,"transpose_u8_v4",Mo,"main",["read-only-storage","storage"]),t()))return;const r=[{chan:24,cs:24,nclass:0,dilations:fs,activation:"gelu_tanh",norm:"gn"},{chan:15,cs:16,nclass:0,dilations:[16,8,4,2,1],activation:"gelu_tanh",norm:"gn"},{chan:16,cs:16,nclass:0,dilations:fs,activation:"gelu_tanh",norm:"gn"}];for(const d of r){if(t())return;const g=d.cs>=16,c=g?d.cs/2:d.cs;if(I*I*c*ct*4>a||bo(e,d,null)){const h=qo({cs:d.cs,chan:d.chan,nclass:0,clsK4:0,dilations:d.dilations,activation:d.activation,norm:d.norm,hasF16:n,subgroupMode:s,numConvs:d.dilations.length,probCfg:null});yield Po(e,d,null,n,s,null,h,{includeCls:!1,sequential:!0,shouldAbort:t})}else{const h=_o(e,null),M=Ro({cs:d.cs,chan:d.chan,nclass:0,clsK4:0,dilations:d.dilations,activation:d.activation,norm:d.norm,hasF16:n,subgroupMode:s,splitHalves:g,probCfg:null,chunkableStd:h});yield zo(e,d,null,n,s,g,null,M,{includeCls:!1,sequential:!0,shouldAbort:t})}}})}const Aa=(e,t)=>Be(null,null,function*(){const n=yield fetch(t).then(s=>s.arrayBuffer());return Ss(e,new Uint8Array(n))}),To=!0,Pa={load:Aa,setupNet:Ss,warmupV4CorePipelines:ks,supportsF32Fallback:Io,supportsGpuNativeIO:To},_s=Object.freeze(Object.defineProperty({__proto__:null,default:Pa,releaseV4Workspace:xn,setupNet:Ss,supportsF32Fallback:Io,supportsGpuNativeIO:To,warmupV4CorePipelines:ks},Symbol.toStringTag,{value:"Module"}));function za(){var e;try{if(new URLSearchParams(((e=globalThis.location)==null?void 0:e.search)||"").get("webgpuKernels")==="tinygrad")return"disabled by ?webgpuKernels=tinygrad"}catch(t){}return null}const Fn=new Set(["meshnet_fast_v4","dkatlas24_int8","mindmap24_int8","model16chan18cls_int8","mindgrab_int8"]);function Ca(e){return Fn.has(e)}const vn=Object.assign({"./webgpu_runners/dkatlas24_f32_runner.js":()=>lt(()=>import("./dkatlas24_f32_runner-CdBMa7VZ.js"),[],import.meta.url),"./webgpu_runners/dkatlas24_int8_v3_runner.js":()=>lt(()=>import("./dkatlas24_int8_v3_runner-qYLKbQ8-.js"),__vite__mapDeps([0,1,2,3]),import.meta.url),"./webgpu_runners/dkatlas24_runner.js":()=>lt(()=>import("./dkatlas24_runner-BkVMX0Bk.js"),[],import.meta.url),"./webgpu_runners/dkatlas24_synth_f32_runner.js":()=>lt(()=>import("./dkatlas24_synth_f32_runner-Bb7lxqr0.js"),[],import.meta.url),"./webgpu_runners/dkatlas24_synth_runner.js":()=>lt(()=>import("./dkatlas24_synth_runner-5rLWbXWF.js"),[],import.meta.url),"./webgpu_runners/manual_mindgrab_runner.js":()=>lt(()=>import("./manual_mindgrab_runner-DDusGIor.js"),[],import.meta.url),"./webgpu_runners/mindgrab_runner.js":()=>lt(()=>import("./mindgrab_runner-B-UQtXej.js"),[],import.meta.url),"./webgpu_runners/mindgrab_tta_runner.js":()=>lt(()=>import("./mindgrab_tta_runner-Ct42O8D2.js"),[],import.meta.url),"./webgpu_runners/model16chan18cls_f32_runner.js":()=>lt(()=>import("./model16chan18cls_f32_runner-B5FaUMez.js"),[],import.meta.url),"./webgpu_runners/model16chan18cls_runner.js":()=>lt(()=>import("./model16chan18cls_runner-aMK3m7Gj.js"),[],import.meta.url),"./webgpu_runners/model21_104class_runner.js":()=>lt(()=>import("./model21_104class_runner-DuOJ6qrl.js"),[],import.meta.url),"./webgpu_runners/model21_f32_runner.js":()=>lt(()=>import("./model21_f32_runner-yTUV9LXd.js"),[],import.meta.url),"./webgpu_runners/model21_tta_runner.js":()=>lt(()=>import("./model21_tta_runner-e7-76trO.js"),[],import.meta.url),"./webgpu_runners/model21chan18cls_runner.js":()=>lt(()=>import("./model21chan18cls_runner-DvLOnZMy.js"),[],import.meta.url),"./webgpu_runners/model24chan18cls_gdice_prio_probability_runner.js":()=>lt(()=>import("./model24chan18cls_gdice_prio_probability_runner-BHqpfuCi.js"),[],import.meta.url),"./webgpu_runners/model24chan18cls_gdice_prio_runner.js":()=>lt(()=>import("./model24chan18cls_gdice_prio_runner-B5cN26gD.js"),[],import.meta.url),"./webgpu_runners/model30chan18cls_runner.js":()=>lt(()=>import("./model30chan18cls_runner-C2mBz0G4.js"),[],import.meta.url),"./webgpu_runners/model30chan18cls_tta_runner.js":()=>lt(()=>import("./model30chan18cls_tta_runner-v8CMqLh5.js"),[],import.meta.url),"./webgpu_runners/model30chan50cls_f32_runner.js":()=>lt(()=>import("./model30chan50cls_f32_runner-DQ53FZ3-.js"),[],import.meta.url),"./webgpu_runners/model30chan50cls_runner.js":()=>lt(()=>import("./model30chan50cls_runner-D72-rlcG.js"),[],import.meta.url),"./webgpu_runners/model30chan50cls_tta_runner.js":()=>lt(()=>import("./model30chan50cls_tta_runner-CliMlbAZ.js"),[],import.meta.url),"./webgpu_runners/model32chan18cls_runner.js":()=>lt(()=>import("./model32chan18cls_runner-cowyou29.js"),[],import.meta.url),"./webgpu_runners/model5_gw_ae_runner.js":()=>lt(()=>import("./model5_gw_ae_runner-jI57fGIB.js"),[],import.meta.url),"./webgpu_runners/model5_runner.js":()=>lt(()=>import("./model5_runner-BiUlzJBp.js"),[],import.meta.url),"./webgpu_runners/model5_tta_runner.js":()=>lt(()=>import("./model5_tta_runner-DjIMLwlR.js"),[],import.meta.url),"./webgpu_runners/model6chan3cls_runner.js":()=>lt(()=>import("./model6chan3cls_runner-wSGRZpe5.js"),[],import.meta.url),"./webgpu_runners/robust_subcortical_runner.js":()=>lt(()=>import("./robust_subcortical_runner-D74Uw6At.js"),[],import.meta.url),"./webgpu_runners/robust_subcortical_tta_runner.js":()=>lt(()=>import("./robust_subcortical_tta_runner-CkwA2dHP.js"),[],import.meta.url)});function Ba(){const e=Object.keys(vn).map(t=>{const n=t.match(/\/([^\/]+)_runner\.js$/);return n?n[1]:null}).filter(Boolean);return Array.from(new Set([...Fn,...e]))}function Fa(e){if(Fn.has(e))return()=>Be(null,null,function*(){return _s});const t=`./webgpu_runners/${e}_runner.js`;if(vn[t])return vn[t];const n=e.toLowerCase();for(const s of Fn)if(s.toLowerCase()===n)return()=>Be(null,null,function*(){return _s});for(const[s,o]of Object.entries(vn))if(s.toLowerCase().includes(`/${n}_runner.js`))return o;for(const[s,o]of Object.entries(vn))if(s.includes(e))return o;return null}function La(e){if(Fn.has(e))return!0;const t=`./webgpu_runners/${e}_runner.js`;if(vn[t])return!0;const n=e.toLowerCase();for(const o of Fn)if(o.toLowerCase()===n)return!0;const s=`/${n}_runner.js`;return Object.keys(vn).some(o=>o.toLowerCase().endsWith(s))}function Ua(e,t){if(typeof Float16Array=="undefined")throw new Error("Float16Array unavailable: cannot cast fp32 master weights to fp16.");const n=new DataView(e.buffer,e.byteOffset,e.byteLength),s=Number(n.getBigUint64(0,!0)),o=JSON.parse(new TextDecoder("utf8").decode(e.subarray(8,8+s))),a=8+s;if(!Object.entries(o).some(([p,m])=>p!=="__metadata__"&&m.dtype==="F32"))return e;const i={},f=[];let l=0;for(const[p,m]of Object.entries(o)){if(p==="__metadata__"){i[p]=m;continue}const[h,M]=m.data_offsets,_=e.subarray(a+h,a+M);let w,y;if(m.dtype==="F32"){const $=new Float32Array(_.slice().buffer),x=new Float16Array($);w=new Uint8Array(x.buffer),y="F16"}else w=_,y=m.dtype;i[p]={dtype:y,shape:m.shape,data_offsets:[l,l+w.byteLength]},f.push(w),l+=w.byteLength}const u=new TextEncoder().encode(JSON.stringify(i)),d=(8-u.byteLength%8)%8,g=new Uint8Array(8+u.byteLength+d+l);new DataView(g.buffer).setBigUint64(0,BigInt(u.byteLength+d),!0),g.set(u,8),g.fill(32,8+u.byteLength,8+u.byteLength+d);let c=8+u.byteLength+d;for(const p of f)g.set(p,c),c+=p.byteLength;return console.log("[WebGPU] Cast fp32 master weights -> fp16."),g}function Wa(e,t){try{const n=r=>!!(e.features&&e.features.has&&e.features.has(r)),s=e.limits||{},o=typeof navigator!="undefined"&&navigator.userAgent||"unknown",a=/Safari/.test(o)&&!/Chrome|Chromium|Android/.test(o);console.log("[SAFARI-DEBUG] ===== WebGPU device capabilities ====="),console.log("[SAFARI-DEBUG] model:",(t==null?void 0:t.modelName)||(t==null?void 0:t.webgpu_runner)||"(unknown)"),console.log("[SAFARI-DEBUG] userAgent:",o,"| classified Safari:",a),console.log("[SAFARI-DEBUG] shader-f16:",n("shader-f16")),console.log("[SAFARI-DEBUG] features:",e.features?Array.from(e.features):"(none)"),console.log("[SAFARI-DEBUG] limits:",{maxBufferSize:s.maxBufferSize,maxStorageBufferBindingSize:s.maxStorageBufferBindingSize,maxComputeInvocationsPerWorkgroup:s.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:s.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:s.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:s.maxComputeWorkgroupSizeZ,maxComputeWorkgroupsPerDimension:s.maxComputeWorkgroupsPerDimension}),console.log("[SAFARI-DEBUG] BC_WEBGPU_DEBUG (logits readback):",typeof window!="undefined"&&!!window.BC_WEBGPU_DEBUG),console.log("[SAFARI-DEBUG] =======================================")}catch(n){console.warn("[SAFARI-DEBUG] capability dump failed:",n==null?void 0:n.message)}}function Go(){return typeof requestAnimationFrame!="function"?new Promise(e=>setTimeout(e,0)):new Promise(e=>{let t=!1;const n=()=>{t||(t=!0,e())},s=setTimeout(n,25);requestAnimationFrame(()=>{clearTimeout(s),setTimeout(n,0)})})}const Ra=6,qa=4,bn=new Map,os=new Map,hn=new Map,mn=new WeakMap,rs=new WeakSet;function Ia(e){return Be(this,null,function*(){if(!(!e||rs.has(e))){rs.add(e);try{yield ks(e)}catch(t){rs.delete(e),console.debug("[WebGPU] Background pipeline warmup skipped:",(t==null?void 0:t.message)||t)}}})}function No(e,{keepSharedWorkspace:t=!1}={}){var n;if(e)try{if(typeof((n=e.execute)==null?void 0:n.dispose)=="function")e.execute.dispose({keepSharedWorkspace:t});else if(e.ownedBuffers)for(const s of e.ownedBuffers)s.destroy()}catch(s){console.warn("[WebGPU] Failed to dispose cached runner buffers:",s)}}function Ta(e,t,n,s){var o,a,r,i,f,l,u,d,g,c,p,m,h,M,_,w,y,$,x;return JSON.stringify([e,t,n,(o=s.id)!=null?o:null,(a=s.numClasses)!=null?a:null,(r=s.outputType)!=null?r:null,(i=s.dilations)!=null?i:null,(f=s.activation)!=null?f:null,(l=s.quantize8Bit)!=null?l:null,(u=s.forceFP32)!=null?u:null,(d=s.disableF16)!=null?d:null,(g=s.disableSubgroups)!=null?g:null,(c=s.disableConeSkip)!=null?c:null,(p=s.forceLowMem128)!=null?p:null,(m=s.webgpuExecMode)!=null?m:null,(h=s.softmaxTemperature)!=null?h:null,(M=s.brainSupportTemperature)!=null?M:null,(_=s.brainSupportPower)!=null?_:null,(w=s.partialVolumeSigma)!=null?w:null,(y=s.probabilityGroups)!=null?y:null,($=s.probabilityDisplay)!=null?$:null,(x=s.classifierBias)!=null?x:null])}function Ks(e){const t=bn.get(e);if(t)return bn.delete(e),bn.set(e,t),Promise.resolve(t);const n=os.get(e);if(n)return n;const s=Be(null,null,function*(){let o;try{const r=yield fetch(e);if(!r.ok)throw new Error(`HTTP ${r.status}: ${r.statusText}`);o=yield r.arrayBuffer()}catch(r){throw new Error(`Failed to load weights from '${e}': ${r.message}`)}const a=new Uint8Array(o);for(bn.set(e,a);bn.size>Ra;){const r=bn.keys().next().value;bn.delete(r)}return a}).finally(()=>{os.delete(e)});return os.set(e,s),s}function Ga(e,t,n,s){if(!n)return e;const o=hn.get(t);if(o)return hn.delete(t),hn.set(t,o),o;const a=Ua(e);for(hn.set(t,a);hn.size>qa;){const r=hn.keys().next().value;hn.delete(r)}return a}function bs(e,t){return Be(this,null,function*(){const n=[],s=e.createBuffer.bind(e);e.createBuffer=o=>{const a=s(o);return n.push(a),a};try{return{result:yield t(),buffers:n}}finally{e.createBuffer=s}})}function hs(e){let t=0;for(const n of e)t+=Number(n==null?void 0:n.size)||0;return t}function as(e){for(const t of e)try{t.destroy()}catch(n){}}function Na(e,t,n){return Be(this,null,function*(){var $,x,S,C,v,A,k;const s=($=za())!=null?$:aa(e,t);let o=t.webgpu_runner,a=t.webgpu_safetensor;const r=!!(e.features&&e.features.has&&e.features.has("shader-f16"));let i=!1;s&&(t.forceFP32?(i=!0,console.log("[WebGPU] forceFP32: using fp32 runner and weights.")):!r&&La(`${o}_f32`)&&(i=!0,console.log("[WebGPU] shader-f16 not supported on this device -> auto-selecting fp32 runner and weights.")),i&&(o=`${o}_f32`,a=a.replace(".safetensors","_f32.safetensors")),t.enableTTA&&t.webgpuTTArunner&&(console.log("[WebGPU] TTA Enabled: Switching to TTA runner and weights."),o=`${o}_tta`,a=a.replace(".safetensors","_tta.safetensors")));const l=Ta(s?"runner":"native",s?o:"webgpu_native",a,t),u=mn.get(e);if(u&&u.runnerKey===l)return $t(ot({},u),{cacheHit:!0});const d=!!(s&&Ca(o));if(n("Loading model…",.1),u&&(mn.delete(e),No(u,{keepSharedWorkspace:d})),d||xn(e),Wa(e,t),s)console.log(`[WebGPU-native] not used for ${t.modelName||t.webgpu_runner}: ${s}`);else{let U=[];try{const F=yield Ks(a),G=yield bs(e,()=>ua(e,F,n,t));U=G.buffers;const V=G.result;V.kernels="hand-written";const X={runnerKey:l,runnerName:"webgpu_native",weightsPath:a,execute:V,supportsGpuNativeIO:!1,ownedBuffers:U,gpuBytes:hs(U)};return mn.set(e,X),console.log("[WebGPU-native] Using hand-written WebGPU kernels."),$t(ot({},X),{cacheHit:!1})}catch(F){as(U),console.warn("[WebGPU-native] falling back to the tinygrad runner:",(F==null?void 0:F.message)||F)}}const g=d?()=>Be(null,null,function*(){return _s}):Fa(o);if(!g){const U=Ba();throw new Error(`Runner '${o}' not found. Available runners: ${U.join(", ")||"none"}. Looking in: ./webgpu_runners/`)}const[c,p]=yield Promise.all([g(),Ks(a)]);if(!c.setupNet&&!((x=c.default)!=null&&x.setupNet))throw new Error(`Runner module '${o}' doesn't export 'setupNet'. Exported keys: ${Object.keys(c).join(", ")}`);const m=!!((C=c.supportsF32Fallback)!=null?C:(S=c.default)!=null&&S.supportsF32Fallback),h=!!((A=c.supportsGpuNativeIO)!=null?A:(v=c.default)!=null&&v.supportsGpuNativeIO);!i&&!r&&!m&&console.warn(`[WebGPU] shader-f16 not supported and no fp32 runner ('${o}_f32') available; the fp16 runner will likely fail and fall back to WebGL2.`);const _=Ga(p,a,!i&&!m),w=c.setupNet||((k=c.default)==null?void 0:k.setupNet);let y=[];try{const U=yield bs(e,()=>w(e,_,n,t));y=U.buffers;const F=U.result;if(typeof F!="function")throw as(y),new Error(`setupNet for '${o}' didn't return a function. Returned type: ${typeof F}`);const G={runnerKey:l,runnerName:o,weightsPath:a,execute:F,supportsGpuNativeIO:h,ownedBuffers:typeof F.dispose=="function"?null:y,gpuBytes:typeof F.gpuBytes=="function"?F.gpuBytes():hs(y)};return mn.set(e,G),$t(ot({},G),{cacheHit:!1})}catch(U){throw d&&xn(e),as(y),new Error(`Failed to setup network for '${o}': ${U.message}`)}})}function Oa(e,t,n,s,o,a,r){return Be(this,null,function*(){var g,c,p,m;const i=n.outputType==="probability";console.log("Starting WebGPU inference..."),r(i?"Starting tissue estimation…":"Starting segmentation…",0);const f=Pr(n,Ar.WEBGPU);f.isModelFullVol=!0;let l=!1,u=null;const d=Fr(n);try{if(!e)throw new Error("WebGPU device is required but not provided");if(!(n!=null&&n.webgpu_runner))throw new Error("Model entry must specify webgpu_runner property");if(!(n!=null&&n.webgpu_safetensor))throw new Error("Model entry must specify webgpu_safetensor property");const h=n.webgpuStorageSize||335544320;if(e.limits){const z=ue=>(ue/1048576).toFixed(0),oe=(g=e.limits.maxStorageBufferBindingSize)!=null?g:1/0,R=(c=e.limits.maxBufferSize)!=null?c:1/0;if(oe<h||R<h){const ue=z(Math.min(oe,R)),te=z(h),Q=`[WebGPU] Device buffer limit (${ue} MB) is below the ${te} MB this model needs - using WebGL2 fallback.`;throw console.warn(Q),new Error(Q)}}e.pushErrorScope("out-of-memory"),l=!0;const M=performance.now();u=yield Na(e,n,r);const _=((performance.now()-M)/1e3).toFixed(4),w=performance.now();r("Preparing volume…",.25);const y=[256,256,256],$=u.supportsGpuNativeIO&&!!n.enableTranspose&&!n.inputPermutation,x=u.supportsGpuNativeIO&&!!n.enableTranspose&&!n.outputPermutation;let S,C;if(n.enableQuantileNorm){const{qmin:z,qmax:oe}=yr(o);S=z,C=oe-z}else{const{min:z,max:oe}=$r(o);S=z,C=oe-z}const v=C===0?1:C;let A=null,k,U=y;if($)d&&(A=qs(o,S,v)),k=o;else{const z=qs(o,S,v);if(d&&(A=z),n.inputPermutation){console.log(`[WebGPU] Permuting Input: ${n.inputPermutation}`);const oe=n.inputPermutation;U=[y[oe[0]],y[oe[1]],y[oe[2]]],k=kn(z,y,oe)}else n.enableTranspose?k=kn(z,y,[2,1,0]):k=z}const F=((performance.now()-w)/1e3).toFixed(4);r("",.3),r(i?"Estimating tissue maps…":"Segmenting…",.3),yield Go();const G=performance.now(),V=u.supportsGpuNativeIO?z=>{const oe=Math.max(0,Math.min(1,Number(z)||0));r("",.3+.6*oe)}:void 0,X=$||x||V?{gpuNativeInput:$,gpuNativeOutput:x,normOffset:S,normRange:v,onProgress:V}:void 0,W=yield bs(e,()=>X?u.execute(k,X):u.execute(k)),D=W.result;if(typeof u.execute.gpuBytes=="function"){u.gpuBytes=u.execute.gpuBytes();const z=mn.get(e);z&&z.runnerKey===u.runnerKey&&(z.gpuBytes=u.gpuBytes)}else if(W.buffers.length>0){u.gpuBytes=(u.gpuBytes||0)+hs(W.buffers),u.ownedBuffers&&u.ownedBuffers.push(...W.buffers);const z=mn.get(e);z&&z.runnerKey===u.runnerKey&&(z.gpuBytes=u.gpuBytes)}l=!1;const T=yield e.popErrorScope();if(T)throw new Error(`WebGPU out of memory (${T.message||"allocation failed"}) - falling back to WebGL2.`);if(!D||!Array.isArray(D))throw new Error(`Inference didn't return expected array format. Returned: ${typeof D}`);const Y=((performance.now()-G)/1e3).toFixed(4),E=(u.gpuBytes||0)/1048576;f.GPU_Memory_MiB=Math.round(E),f.WebGPU_Kernels=u.execute.kernels||"tinygrad";const L=E>=1024?`${(E/1024).toFixed(2)} GiB`:`${Math.round(E)} MiB`;console.log(`WebGPU inference took ${Y}s (${f.WebGPU_Kernels} kernels, ${L} GPU memory).`),r("Finishing up…",.9),console.log("Inference result shapes:",D.map(z=>z==null?void 0:z.length));const N=n.outputPermutation||(n.enableTranspose?[2,1,0]:null),Z=performance.now();let O;const ce={};if(d){if(D.length!==3)throw new Error(`CAT-lite expected three tissue maps; received ${D.length}.`);r("Refining tissue fractions…",.92),O=yield Vr(D,A,n,f,x?oe=>oe:oe=>N?kn(oe,U,N):oe instanceof Float32Array?oe:Float32Array.from(oe),y),A=null}else if(i){const z=D[0];O=x?z:N?kn(z,U,N):z instanceof Float32Array?z:Float32Array.from(z),Is(O,!0,"probability")}else{const z=D[0];D[0]=null;let oe;x?oe=z instanceof Uint8Array?z:new Uint8Array(z):N?oe=Sr(z,U,N):oe=z instanceof Uint8Array?z:new Uint8Array(z),Is(oe,!1,"segmentation"),O=yield Er(oe,o,n,t,ce,y,{transferLabels:!0})}const fe=((performance.now()-Z)/1e3).toFixed(4),ye=performance.now();yield a(O,t,n,ce.mask);const we=((performance.now()-ye)/1e3).toFixed(4);if(i)d||(f.Output_Type="Continuous tissue probability",f.Tissue=n.probabilityDisplay||"grayMatter",f.Softmax_Temperature=(p=n.softmaxTemperature)!=null?p:1);else{const z=kr(O),oe=n.numClasses||z;zr(f,oe,z)}Cr(f,Y,fe,{Preprocess_t:F,Setup_t:_,Display_t:we}),console.log(`[Timing] WebGPU | ${n.modelName} | setup=${(Number(_)*1e3).toFixed(1)}ms prep=${(Number(F)*1e3).toFixed(1)}ms infer=${(Number(Y)*1e3).toFixed(1)}ms post=${(Number(fe)*1e3).toFixed(1)}ms disp=${(Number(we)*1e3).toFixed(1)}ms cache=${u.cacheHit?"hit":"miss"}`);const _e=`${Number(Y).toFixed(1)} s`,K=i?`Tissue maps finished (${_e})`:`Segmentation finished (${_e})`,ae=!i&&((m=n.numClasses)!=null?m:0)>2?t!=null&&t.isTouchPrimary?" · Open Stats to isolate a region":" · Option/Alt-click a region to isolate":"";r(`${K}${ae}`,1,"",f)}catch(h){if(console.error("WebGPU Inference Error:",h),u&&(mn.get(e)===u&&mn.delete(e),No(u),u=null),l&&e){l=!1;try{yield e.popErrorScope()}catch(_){}}let M=h.message;throw h.message.includes("not found")?M+=". Check that the runner file exists and the name matches.":h.message.includes("fetch")?M+=". Check network connection and file paths.":h.message.includes("binding size")&&(M+=". GPU memory limit exceeded."),Br(f,M,"WebGPU inference failed"),r("",-1,`WebGPU Error: ${M}`,f),h}})}const Ea={batchSize:1,numOfChan:1,isColorEnable:!0,isAutoColors:!0,bgLabelValue:0,drawBoundingVolume:!1,isGPU:!0,isBrainCropMaskBased:!0,showPhase1Output:!1,isPostProcessEnable:!0,fillSuppressedWithNeighborLabel:!1,diagnoseEnclosedComponents:!1,isContoursViewEnable:!1,browserArrayBufferMaxZDim:30,telemetryFlag:!1,chartXaxisStepPercent:10,uiSampleName:"BC_UI_Sample",atlasSelectedColorTable:"Fire"};function Zs(e,t=!0){if(!e)return e;const o=e,{turbo:n}=o,s=Fs(o,["turbo"]);return!t||!n?s:$t(ot(ot({},s),n),{isTurboActive:!0})}const wn=[{id:2,type:"Brain_Extraction",path:"/models/mindgrab/model.json",modelName:"🪓🧠 Omnimodal Skull Stripping",webgpu_safetensor:"./models/mindgrab/model.safetensors",webgpu_runner:"mindgrab",classifierBias:[1.525439739227295,-1.5258055925369263],webgpuTTArunner:!1,forceFP32:!1,webgpuStorageSize:503316480,numClasses:2,turbo:{webgpu_runner:"mindgrab_int8",quantize8Bit:!0,forceFP32:!1,webgpuTTArunner:!1,webgpuStorageSize:83886080,warning:"Runs via the 8-bit V4 WebGPU engine (~3.7s on M1 WebGPU, auto-scaling from 160 MiB down to 80 MiB max buffer on mobile) or native WebGL2."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,isPostProcessEnable:!0,enableCrop:!0,cropPadding:20,autoThreshold:.5,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!1,textureSize:0,warning:"This model may need dedicated graphics card.  For more info please check with Browser Resources <i class='fa fa-cogs'></i>.",inferenceDelay:100,description:"Omnimodal skull stripping (MindGrab) delivering high-accuracy brain extraction across T1, T2, FLAIR, DWI, EPI, MRA, PDw, qT1, CT, and PET via the 8-bit V4 WebGPU engine (80 MiB mobile / 160 MiB desktop max buffer) or native WebGL2."},{id:21,type:"Atlas",path:"/models/model24chan18cls_gdice_prio/model.json",modelName:"🪓 Subcortical + Tissue",colormapPath:"./models/model24chan18cls_gdice_prio/colormap.json",webgpu_safetensor:"./models/model24chan18cls_gdice_prio/model.safetensors",webgpu_runner:"model24chan18cls_gdice_prio",forceFP32:!1,webgpuStorageSize:1610612736,numClasses:18,turbo:{webgpu_runner:"mindmap24_int8",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:125829120,warning:"Runs via the 8-bit V4 WebGPU engine (~3.0s on M1 WebGPU, auto-scaling from 240 MiB down to 120 MiB max buffer on mobile) or native WebGL2."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,cropPadding:20,autoThreshold:0,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!0,textureSize:0,warning:"Runs via the 8-bit V4 WebGPU engine (120–240 MiB max buffer) or native WebGL2.",inferenceDelay:100,description:"Primary T1w brain parcellation into 17 regions (gray and white matter plus subcortical structures) via a 24-channel gridding-free MeshNet (MindMap v3.5 Unified: sharp sulci, intact occipital ribbon, and clinical slice/noise/bias robustness), accelerated by the 8-bit V4 WebGPU engine (120 MiB mobile / 240 MiB desktop max buffer)."},{id:23,type:"Probability_Map",path:"/models/model24chan18cls_gdice_prio/model.json",modelName:"⅔🧠 Tissue fraction maps (GM/WM/CSF)",webgpu_safetensor:"./models/model24chan18cls_gdice_prio/model.safetensors",webgpu_runner:"model24chan18cls_gdice_prio_probability",forceFP32:!1,webgpuStorageSize:1610612736,numClasses:18,turbo:{webgpu_runner:"mindmap24_int8",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:125829120,warning:"Experimental neural-assisted partial-volume estimate (~3.5s on M1 WebGPU, auto-scaling from 240 MiB down to 120 MiB max buffer on mobile)."},outputType:"probability",probabilityPostprocess:"cat-lite",softmaxTemperature:2,brainSupportTemperature:1,brainSupportPower:1,partialVolumeSigma:.65,probabilityDisplay:"grayMatter",probabilityTissues:[{name:"gm",tint:[255,64,64]},{name:"wm",tint:[255,255,255]},{name:"csf",tint:[64,128,255]}],probabilityOverlayFloor:128,probabilityOverlayAlpha:48,probabilityDisplayMin:.03,probabilityUnderlayOpacity:.1,probabilityGroups:{grayMatter:[2,6,7,8,9,10,14,15,16,17],whiteMatter:[1,5],csf:[3,4,11,12]},catLitePurePriorPower:3,catLitePriorStrength:.8,catLiteIntensityStrength:.75,catLiteMixelPrior:.35,catLiteCsfWmMixelPrior:6,catLiteSpatialWeight:.25,catLiteMinSupport:.03,catLiteSigmaFloor:.025,catLiteBiasBlockSize:16,catLiteBiasSmoothPasses:3,preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,enableQuantileNorm:!0,enableFovRecenter:!1,enableFovInflate:!1,warning:"Experimental neural-assisted mixed-class partial-volume estimate, not CAT12.",inferenceDelay:100,description:"CAT-inspired GM/WM/CSF partial-volume estimate. The 24-channel model supplies joint GM/WM/CSF priors; normalized T1 intensity, a coarse local bias estimate, spatial regularization, and explicit GM-CSF/GM-WM mixture classes produce continuous GM, WM and CSF fractions. Experimental and not a CAT12 result."},{id:5,type:"Atlas",path:"/models/model24chan104cls_v3_repbn/model.json",modelName:"🪓🔪 Desikan-Killiany Atlas",colormapPath:"./models/model24chan104cls_v3_repbn/colormap.json",webgpu_safetensor:"./models/model24chan104cls_v3_repbn/model.safetensors",webgpu_runner:"dkatlas24_synth",forceFP32:!1,webgpuStorageSize:1610612736,numClasses:104,turbo:{webgpu_runner:"dkatlas24_int8",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:125829120,warning:"Runs via the 8-bit V4 WebGPU engine (~3.0s on M1 WebGPU, auto-scaling from 240 MiB down to 120 MiB max buffer on mobile) or native WebGL2."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,cropPadding:20,autoThreshold:0,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!0,textureSize:0,warning:"Runs via the 8-bit V4 WebGPU engine (120–240 MiB max buffer) or native WebGL2.",inferenceDelay:100,description:"Primary 104-region Desikan-Killiany atlas parcellation (cortical + subcortical + 5-part corpus callosum) for research and clinical T1-weighted MRI, running via the 8-bit V4 WebGPU engine (~3.0s on M1, 120 MiB mobile / 240 MiB desktop max buffer) or native WebGL2."},{id:4,type:"Atlas",path:"/models/model24chan50cls/model.json",modelName:"🪓🔪 Desikan-Killiany 50",colormapPath:"./models/model24chan50cls/colormap.json",webgpu_safetensor:"./models/model24chan50cls/model.safetensors",webgpu_runner:"meshnet_fast_v4",forceFP32:!1,webgpuStorageSize:805306368,numClasses:50,turbo:{webgpu_runner:"meshnet_fast_v4",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:125829120,warning:"Runs via the 8-bit V4 WebGPU engine (~3.0s on M1 WebGPU, auto-scaling from 240 MiB down to 120 MiB max buffer on mobile) or native WebGL2."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,cropPadding:20,autoThreshold:0,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!0,textureSize:0,warning:"Runs via the 8-bit V4 WebGPU engine (120–240 MiB max buffer) or native WebGL2.",inferenceDelay:100,description:"Bilateral 50-region Desikan-Killiany cortical + subcortical + corpus callosum parcellation with built-in skull stripping (MindSnap-50 v3.5), running via the 8-bit V4 WebGPU engine (~3.0s on M1, 120 MiB mobile / 240 MiB desktop max buffer) or native WebGL2."},{id:6,type:"Divider",modelName:"-----------------",path:null},{id:3,type:"Atlas",path:"/models/model16chan18cls/model.json",modelName:"⚡🪓 Subcortical + Tissue",colormapPath:"./models/model16chan18cls/colormap.json",webgpu_safetensor:"./models/model16chan18cls/model.safetensors",webgpu_runner:"model16chan18cls",forceFP32:!1,webgpuStorageSize:536870912,numClasses:18,turbo:{webgpu_runner:"model16chan18cls_int8",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:83886080,warning:"Ultra-fast 16-channel MindMap v3.5 (~1.7s on M1 WebGPU, auto-scaling from 160 MiB down to 80 MiB max buffer on mobile)."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,cropPadding:20,autoThreshold:0,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!0,textureSize:0,warning:"Runs via the 8-bit V4 WebGPU engine (80–160 MiB max buffer) or native WebGL2.",inferenceDelay:100,description:"Ultra-fast 17-region brain parcellation (gray and white matter plus subcortical structures) via our 84K-parameter 16-channel MeshNet (MindMap-16ch v3.5), running in ~1.7s on M1 WebGPU with an 80 MiB mobile / 160 MiB desktop buffer footprint."},{id:14,type:"Atlas",path:"/models/model24chan104cls_synth/model.json",modelName:"🪓🔪 Desikan-Killiany (lesion scans)",colormapPath:"./models/model24chan104cls_synth/colormap.json",webgpu_safetensor:"./models/model24chan104cls_synth/model.safetensors",webgpu_runner:"dkatlas24_synth",forceFP32:!1,webgpuStorageSize:1610612736,numClasses:104,turbo:{webgpu_runner:"dkatlas24_int8",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:125829120,warning:"Runs via the 8-bit V4 WebGPU engine (~3.0s on M1 WebGPU, auto-scaling from 240 MiB down to 120 MiB max buffer on mobile) or native WebGL2."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,cropPadding:20,autoThreshold:0,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!0,textureSize:0,warning:"Runs via the 8-bit V4 WebGPU engine (120–240 MiB max buffer) or native WebGL2.",inferenceDelay:100,description:"Desikan-Killiany 104-region parcellation variant retained for scans with large focal lesions, running via the 8-bit V4 WebGPU engine (120–240 MiB max buffer) or native WebGL2."}];function Ms(){return Be(this,null,function*(){return navigator.userAgent.indexOf("OPR/")>-1?"Opera":navigator.userAgent.indexOf("Edg/")>-1?"Edge":navigator.userAgent.indexOf("Falkon/")>-1?"Falkon":navigator.userAgent.indexOf("Chrome/")>-1?"Chrome":navigator.userAgent.indexOf("Firefox/")>-1?"Firefox":navigator.userAgent.indexOf("Safari/")>-1?"Safari":navigator.userAgent.indexOf("MSIE/")>-1||navigator.userAgent.indexOf("rv:")>-1?"IExplorer":"Unknown"})}function Da(){return Be(this,null,function*(){return navigator.userAgent.indexOf("OPR/")>-1?parseInt(navigator.userAgent.split("OPR/")[1]):navigator.userAgent.indexOf("Edg/")>-1?parseInt(navigator.userAgent.split("Edg/")[1]):navigator.userAgent.indexOf("Falkon/")>-1?parseInt(navigator.userAgent.split("Falkon/")[1]):navigator.userAgent.indexOf("Chrome/")>-1?parseInt(navigator.userAgent.split("Chrome/")[1]):navigator.userAgent.indexOf("Firefox/")>-1?parseInt(navigator.userAgent.split("Firefox/")[1]):navigator.userAgent.indexOf("Safari/")>-1?parseInt(navigator.userAgent.split("Safari/")[1]):navigator.userAgent.indexOf("MSIE/")>-1||navigator.userAgent.indexOf("rv:")>-1?parseInt(navigator.userAgent.split("MSIE/")[1]):1/0})}function Va(){return Be(this,null,function*(){return navigator.userAgent.indexOf("Win")>-1?"Windows":navigator.userAgent.indexOf("Mac")>-1?"MacOS":navigator.userAgent.indexOf("Linux")>-1?"Linux":navigator.userAgent.indexOf("UNIX")>-1?"UNIX":"Unknown"})}function Ha(e){return Be(this,null,function*(){return e?(console.log("WebGl2 is enabled"),!0):(console.log(typeof WebGL2RenderingContext!="undefined"?"WebGL2 may be disabled. Please try updating video card drivers":"WebGL2 is not supported"),!1)})}function ja(e){return Be(this,null,function*(){let t;if(e&&(t=e.getExtension("WEBGL_debug_renderer_info"),t)){const n=e.getParameter(t.UNMASKED_VENDOR_WEBGL);return n.indexOf("(")>-1&&n.indexOf(")")>-1?n.substring(n.indexOf("(")+1,n.indexOf(")")):n}return null})}function Xa(e){return Be(this,null,function*(){if(e){const t=e.getExtension("WEBGL_debug_renderer_info");return t?e.getParameter(t.UNMASKED_VENDOR_WEBGL):null}else return null})}function Ya(e){return Be(this,null,function*(){if(e){if(Ms()==="Firefox")return e.getParameter(e.RENDERER);const t=e.getExtension("WEBGL_debug_renderer_info");return t?e.getParameter(t.UNMASKED_RENDERER_WEBGL):null}else return null})}function Ka(e){return Be(this,null,function*(){let t;if(e){if(Ms()==="Firefox")return e.getParameter(e.RENDERER);if(t=e.getExtension("WEBGL_debug_renderer_info"),t){let n=e.getParameter(t.UNMASKED_RENDERER_WEBGL);return n.indexOf("(")>-1&&n.indexOf(")")>-1&&n.indexOf("(R)")===-1&&(n=n.substring(n.indexOf("(")+1,n.indexOf(")")),n.split(",").length===3)?n.split(",")[1].trim():n}}return null})}function Za(){return Be(this,null,function*(){return navigator.hardwareConcurrency})}function Qa(){return Be(this,null,function*(){return/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)})}function Ja(e,t=null){return Be(this,null,function*(){const n=new Date;if(e.isModelFullVol?e.Brainchop_Ver="FullVolume":e.Brainchop_Ver="SubVolumes",e.Total_t=(Date.now()-e.startTime)/1e3,delete e.startTime,e.Date=parseInt(n.getMonth()+1)+"/"+n.getDate()+"/"+n.getFullYear(),e.Browser=yield Ms(),e.Browser_Ver=yield Da(),e.OS=yield Va(),e.WebGL2=yield Ha(t),e.GPU_Vendor=yield ja(t),e.GPU_Card=yield Ka(t),e.GPU_Vendor_Full=yield Xa(t),e.GPU_Card_Full=yield Ya(t),e.CPU_Cores=yield Za(),e.Which_Brainchop="latest",(yield Qa())&&(e.Heap_Size_MB=window.performance.memory.totalJSHeapSize/(1024*1024).toFixed(2),e.Used_Heap_MB=window.performance.memory.usedJSHeapSize/(1024*1024).toFixed(2),e.Heap_Limit_MB=window.performance.memory.jsHeapSizeLimit/(1024*1024).toFixed(2)),t){console.log("MAX_TEXTURE_SIZE :",t.getParameter(t.MAX_TEXTURE_SIZE)),console.log("MAX_RENDERBUFFER_SIZE :",t.getParameter(t.MAX_RENDERBUFFER_SIZE));const s=t.getExtension("WEBGL_debug_renderer_info");console.log("VENDOR WEBGL:",t.getParameter(s.UNMASKED_VENDOR_WEBGL)),e.Texture_Size=t.getParameter(t.MAX_TEXTURE_SIZE)}else e.Texture_Size=null;return e})}const is={bankssts:1,caudalanteriorcingulate:2,caudalmiddlefrontal:3,cuneus:5,entorhinal:6,fusiform:7,inferiorparietal:8,inferiortemporal:9,isthmuscingulate:10,lateraloccipital:11,lateralorbitofrontal:12,lingual:13,medialorbitofrontal:14,middletemporal:15,parahippocampal:16,paracentral:17,parsopercularis:18,parsorbitalis:19,parstriangularis:20,pericalcarine:21,postcentral:22,posteriorcingulate:23,precentral:24,precuneus:25,rostralanteriorcingulate:26,rostralmiddlefrontal:27,superiorfrontal:28,superiorparietal:29,superiortemporal:30,supramarginal:31,frontalpole:32,temporalpole:33,transversetemporal:34,insula:35},ei=new Set(["BG","Unknown","background","Background"]),Qs={"Left-Cerebral-White-Matter":2,"Right-Cerebral-White-Matter":41,"Left-Cerebral-Cortex":3,"Right-Cerebral-Cortex":42,"Left-Lateral-Ventricle":4,"Right-Lateral-Ventricle":43,"Left-Inf-Lat-Vent":5,"Right-Inf-Lat-Vent":44,"Left-Cerebellum-White-Matter":7,"Right-Cerebellum-White-Matter":46,"Left-Cerebellum-Cortex":8,"Right-Cerebellum-Cortex":47,"Left-Thalamus":10,"Left-Thalamus-Proper":10,"Left-Thalamus-Proper*":10,"Right-Thalamus":49,"Right-Thalamus-Proper":49,"Right-Thalamus-Proper*":49,"Left-Caudate":11,"Right-Caudate":50,"Left-Putamen":12,"Right-Putamen":51,"Left-Pallidum":13,"Right-Pallidum":52,"Left-Hippocampus":17,"Right-Hippocampus":53,"Left-Amygdala":18,"Right-Amygdala":54,"Left-Accumbens":26,"Left-Accumbens-area":26,"Right-Accumbens":58,"Right-Accumbens-area":58,"Left-VentralDC":28,"Right-VentralDC":60,"3rd-Ventricle":14,"4th-Ventricle":15,"Brain-Stem":16,CSF:24,CC_Posterior:251,CC_Mid_Posterior:252,CC_Central:253,CC_Mid_Anterior:254,CC_Anterior:255,"Cerebral-White-Matter":2,"White Matter":2,"Cerebral-Cortex":3,"Grey Matter":3,"Gray Matter":3,"Lateral-Ventricle":4,Ventricle:4,"Inferior-Lateral-Ventricle":5,"Cerebellum-White-Matter":7,"Cerebellum-Cortex":8,Cerebellum:8,Thalamus:10,"Thalamus-Proper":10,"Thalamus-Proper*":10,Caudate:11,Putamen:12,Pallidum:13,Hippocampus:17,Amygdala:18,"Accumbens-area":26,Accumbens:26,VentralDC:28,"Corpus callosum":253,Corpus_Callosum:253};function ti(e){if(typeof e!="string")return null;const t=e.trim();if(ei.has(t))return 0;if(Object.hasOwn(Qs,t))return Qs[t];if(t.startsWith("ctx-lh-")){const n=is[t.slice(7)];return n?1e3+n:null}if(t.startsWith("ctx-rh-")){const n=is[t.slice(7)];return n?2e3+n:null}if(t.startsWith("ctx-")){const n=is[t.slice(4)];return n?1e3+n:null}return null}function Dn(e){if(!Array.isArray(e)||e.length<3)return null;const t=new Int16Array(e.length);for(let n=0;n<e.length;n++){const s=ti(e[n]);if(s===null||(n===0?s!==0:s<=0))return null;t[n]=s}return t}function ni(e,t){const n=e.length,s=new Int16Array(n),o=t.length;let a=0;for(let r=0;r<n;r++){const i=e[r],f=i>=0&&i<o?t[i]:i;s[r]=f,f>a&&(a=f)}return{img:s,maxLabel:a}}const si=110,oi=10;function As(e){var t;if(e){e.pan2Dxyzmm=Float32Array.from([0,0,0,1]),e.renderPan=[0,0],e.azimuth=si,e.elevation=oi,e.scaleMultiplier=1;const n=(t=e.volumes)==null?void 0:t[0];n&&Number.isFinite(n.robustMin)&&Number.isFinite(n.robustMax)&&n.robustMax>n.robustMin&&(n.calMin!==n.robustMin||n.calMax!==n.robustMax)&&(n.calMin=n.robustMin,n.calMax=n.robustMax,e.updateGLVolume())}ri()}function ri(){const e=document.querySelector('meta[name="viewport"]');if(!e)return;const t=e.getAttribute("content")||"width=device-width, initial-scale=1.0";/maximum-scale/.test(t)||(e.setAttribute("content",`${t}, maximum-scale=1, user-scalable=no`),requestAnimationFrame(()=>requestAnimationFrame(()=>e.setAttribute("content",t))))}function ai(e){const t=n=>n.preventDefault();for(const n of["gesturestart","gesturechange","gestureend"])document.addEventListener(n,t,{passive:!1});document.addEventListener("touchmove",n=>{n.touches.length>1&&n.target!==e&&n.preventDefault()},{passive:!1})}function ii(e){return ai((e==null?void 0:e.canvas)||null),{resetView:()=>As(e)}}const li=720,ui=860;function ci(){var o,a,r,i,f,l;const e=window.visualViewport,t=Math.round((a=(o=e==null?void 0:e.width)!=null?o:window.innerWidth)!=null?a:0),n=Math.round((i=(r=e==null?void 0:e.height)!=null?r:window.innerHeight)!=null?i:0);return t>0&&t<=li?!0:!!((l=(f=window.matchMedia)==null?void 0:f.call(window,"(pointer: coarse)"))==null?void 0:l.matches)&&Math.min(t,n)<=ui}const zn=[{id:"multi",label:"All",title:"All planes",type:Wn.MULTIPLANAR},{id:"axial",label:"A",title:"Axial only",type:Wn.AXIAL},{id:"coronal",label:"C",title:"Coronal only",type:Wn.CORONAL},{id:"sagittal",label:"S",title:"Sagittal only",type:Wn.SAGITTAL},{id:"render",label:"3D",title:"3D render only",type:Wn.RENDER}];function Oo(e,t,n){const s=zn.find(o=>o.id===n)||zn[0];e.sliceType=s.type,t.querySelectorAll("button").forEach(o=>o.classList.toggle("active",o.dataset.pane===s.id))}function fi(e,t){const n=document.createElement("div");n.id="paneSwitcher",n.className="pane-switcher",n.setAttribute("role","group"),n.setAttribute("aria-label","Visible planes");for(const o of zn){const a=document.createElement("button");a.type="button",a.dataset.pane=o.id,a.textContent=o.label,a.title=o.title,a.setAttribute("aria-label",o.title),a.addEventListener("click",()=>Oo(e,n,o.id)),n.appendChild(a)}const s=document.createElement("button");return s.type="button",s.className="pane-reset",s.textContent="⟲",s.title="Reset zoom and pan",s.setAttribute("aria-label","Reset zoom and pan"),s.addEventListener("click",()=>As(e)),n.appendChild(s),t.appendChild(n),n}function pi(e){var o;const t=document.getElementById("canvas-container")||document.body,n=fi(e,t);n.querySelector('button[data-pane="multi"]').classList.add("active"),window.addEventListener("keydown",a=>{if(a.key!=="v"&&a.key!=="V"||a.altKey||a.ctrlKey||a.metaKey||a.repeat)return;const r=a.target;if(r instanceof HTMLElement&&(r.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(r.tagName)))return;a.preventDefault(),a.stopImmediatePropagation();const i=zn.findIndex(f=>f.type===e.sliceType);Oo(e,n,zn[(i+1)%zn.length].id)},!0);const s=()=>document.body.classList.toggle("nv-narrow",ci());window.addEventListener("resize",s),window.addEventListener("orientationchange",s),(o=window.visualViewport)==null||o.addEventListener("resize",s),s()}const ls=[{name:"gm",displayName:"Gray Matter",tint:[255,64,64]},{name:"wm",displayName:"White Matter",tint:[255,255,255]},{name:"csf",displayName:"CSF",tint:[64,128,255]}],mi={gm:"Gray Matter",wm:"White Matter",csf:"CSF"};function Eo(e){return(Array.isArray(e==null?void 0:e.probabilityTissues)&&e.probabilityTissues.length===3?e.probabilityTissues:ls).map((n,s)=>{const o=String((n==null?void 0:n.name)||ls[s].name).toLowerCase();return{index:s,name:o,displayName:mi[o]||o.toUpperCase(),tint:Array.isArray(n==null?void 0:n.tint)&&n.tint.length>=3?n.tint:ls[s].tint}})}function Js(e,t,n=null,s=1,o=null){var Y,E;const[a,r,i]=e,f=a.length,l=(Y=t==null?void 0:t.probabilityDisplayMin)!=null?Y:.03,u=1/Math.max(1e-6,1-l),d=((E=t==null?void 0:t.probabilityOverlayFloor)!=null?E:128)/255,g=1-d,c=Eo(t),[p,m,h]=c[0].tint,[M,_,w]=c[1].tint,[y,$,x]=c[2].tint,S=n===null||n===0,C=n===null||n===1,v=n===null||n===2,A=Math.max(0,Math.min(1,Number(s)||0)),k=Math.round(A*256),U=!!(o&&o.dimsRAS&&o.img2RASstart&&o.img2RASstep&&o.dimsRAS[1]*o.dimsRAS[2]*o.dimsRAS[3]===f),F=new Uint8Array(f*4);let G=0;for(let L=0;L<f;L++){const N=S?a[L]:0,Z=C?r[L]:0,O=v?i[L]:0;(N>=l||Z>=l||O>=l)&&G++}const V=new Uint32Array(G),X=new Uint8Array(G);let W=0;const D=2/256,T=(L,N)=>{const Z=S?a[L]:0,O=C?r[L]:0,ce=v?i[L]:0;if(Z<l&&O<l&&ce<l)return;let fe=0,ye=0,we=0,_e=0;if(Z>=l){const te=Z>1?1:Z,Q=(te-l)*u,H=te>D?te:D,J=(d+g*H)*Q;fe+=p*J,ye+=m*J,we+=h*J,Q>_e&&(_e=Q)}if(O>=l){const te=O>1?1:O,Q=(te-l)*u,H=te>D?te:D,J=(d+g*H)*Q;fe+=M*J,ye+=_*J,we+=w*J,Q>_e&&(_e=Q)}if(ce>=l){const te=ce>1?1:ce,Q=(te-l)*u,H=te>D?te:D,J=(d+g*H)*Q;fe+=y*J,ye+=$*J,we+=x*J,Q>_e&&(_e=Q)}if(_e<=0)return;const K=1/_e,ae=fe*K,z=ye*K,oe=we*K,R=Math.min(255,Math.round(_e*255)),ue=N*4;F[ue]=ae>=255?255:Math.round(ae),F[ue+1]=z>=255?255:Math.round(z),F[ue+2]=oe>=255?255:Math.round(oe),F[ue+3]=R*k+128>>8,V[W]=ue+3,X[W]=R,W++};if(U){const[,L,N,Z]=o.dimsRAS,[O,ce,fe]=o.img2RASstart,[ye,we,_e]=o.img2RASstep,K=O+ce+fe;let ae=0;for(let z=0;z<Z;z++){const oe=K+z*_e;for(let R=0;R<N;R++){let ue=oe+R*we;for(let te=0;te<L;te++,ae++,ue+=ye)T(ue,ae)}}}else for(let L=0;L<f;L++)T(L,L);return{rgba:F,activeAlphaOffsets:W===G?V:V.subarray(0,W),activeBaseAlpha:W===G?X:X.subarray(0,W),tissues:c,isRasOrdered:U}}function di(e,t,n,s){const o=Math.max(0,Math.min(1,Number(s)||0)),a=Math.round(o*256),r=t.length;for(let i=0;i<r;i++)e[t[i]]=n[i]*a+128>>8}function eo(e,t,n,s,o){var M;const a=Eo(o),r=(M=o==null?void 0:o.probabilityDisplayMin)!=null?M:.03,[i,f,l]=s,[u,d,g]=t,c=a.map(()=>({fracSum:0,supportVoxels:0,wSum:0,wSumSq:0,sumX:0,sumY:0,sumZ:0,coreMin:1/0,coreMax:-1/0,anyMin:1/0,anyMax:-1/0}));let p=0;for(let _=0;_<l;_++)for(let w=0;w<f;w++)for(let y=0;y<i;y++,p++){const $=u[p],x=d[p],S=g[p];if($<=0&&x<=0&&S<=0)continue;const C=e[p];if($>0&&Number.isFinite($)){const v=c[0];v.fracSum+=$,$>=r&&v.supportVoxels++,v.wSum+=$*C,v.wSumSq+=$*C*C,v.sumX+=$*y,v.sumY+=$*w,v.sumZ+=$*_,C<v.anyMin&&(v.anyMin=C),C>v.anyMax&&(v.anyMax=C),$>=.5&&(C<v.coreMin&&(v.coreMin=C),C>v.coreMax&&(v.coreMax=C))}if(x>0&&Number.isFinite(x)){const v=c[1];v.fracSum+=x,x>=r&&v.supportVoxels++,v.wSum+=x*C,v.wSumSq+=x*C*C,v.sumX+=x*y,v.sumY+=x*w,v.sumZ+=x*_,C<v.anyMin&&(v.anyMin=C),C>v.anyMax&&(v.anyMax=C),x>=.5&&(C<v.coreMin&&(v.coreMin=C),C>v.coreMax&&(v.coreMax=C))}if(S>0&&Number.isFinite(S)){const v=c[2];v.fracSum+=S,S>=r&&v.supportVoxels++,v.wSum+=S*C,v.wSumSq+=S*C*C,v.sumX+=S*y,v.sumY+=S*w,v.sumZ+=S*_,C<v.anyMin&&(v.anyMin=C),C>v.anyMax&&(v.anyMax=C),S>=.5&&(C<v.coreMin&&(v.coreMin=C),C>v.coreMax&&(v.coreMax=C))}}const m=[];for(let _=0;_<3;_++){const w=c[_];if(w.fracSum<=0)continue;const y=w.wSum/w.fracSum,$=Math.max(0,w.wSumSq/w.fracSum-y*y),x=Number.isFinite(w.coreMin)?w.coreMin:Number.isFinite(w.anyMin)?w.anyMin:0,S=Number.isFinite(w.coreMax)?w.coreMax:Number.isFinite(w.anyMax)?w.anyMax:0,[C,v,A]=a[_].tint;m.push({label:_,tissueIndex:_,tissueKey:a[_].name,name:a[_].displayName,voxels:Math.round(w.fracSum),effectiveVoxels:w.fracSum,supportVoxels:w.supportVoxels,volume_mm3:w.fracSum*n,mean:y,stdev:Math.sqrt($),min:x,max:S,centroidVox:[w.sumX/w.fracSum,w.sumY/w.fracSum,w.sumZ/w.fracSum],colorCss:`rgb(${C},${v},${A})`,tint:a[_].tint})}const h=m.reduce((_,w)=>_+w.volume_mm3,0);return{rows:m,icvMm3:h}}function gi(e,t){const n=["tissue","name","volume_mm3","volume_cm3","pct_icv","effective_voxels","support_voxels","weighted_mean","weighted_stdev","min","max"],s=a=>/[",\n]/.test(a)?`"${String(a).replace(/"/g,'""')}"`:String(a),o=[n.join(",")];for(const a of e){const r=t>0?a.volume_mm3/t*100:0;o.push([s(a.tissueKey),s(a.name),a.volume_mm3.toFixed(3),(a.volume_mm3/1e3).toFixed(3),r.toFixed(3),a.effectiveVoxels.toFixed(3),a.supportVoxels,a.mean.toFixed(4),a.stdev.toFixed(4),a.min,a.max].join(","))}return o.join(`
`)+`
`}function Do(){if(typeof crypto!="undefined"){if(typeof crypto.randomUUID=="function")return crypto.randomUUID();if(typeof crypto.getRandomValues=="function"){const e=new Uint8Array(16);crypto.getRandomValues(e),e[6]=e[6]&15|64,e[8]=e[8]&63|128;const t=Array.from(e,n=>n.toString(16).padStart(2,"0")).join("");return`${t.slice(0,8)}-${t.slice(8,12)}-${t.slice(12,16)}-${t.slice(16,20)}-${t.slice(20)}`}}return`vol-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}function _i(){var e,t,n,s;return!!((t=(e=window.matchMedia)==null?void 0:e.call(window,"(pointer: coarse)"))!=null&&t.matches&&!((s=(n=window.matchMedia)==null?void 0:n.call(window,"(pointer: fine)"))!=null&&s.matches))}function to(e,t=e.img.slice(),n=e.name){const s=Object.assign(Object.create(Object.getPrototypeOf(e.hdr)),e.hdr),o=Jo(s,t,n);return o.id=Do(),o}const Kt=e=>e&&typeof e.slice=="function"?e.slice():e;function qn(e,t,n=e.name,s={},o={}){var f;const a=Object.assign(Object.create(Object.getPrototypeOf(e.hdr)),e.hdr,ot({dims:[...e.hdr.dims],pixDims:[...e.hdr.pixDims],affine:e.hdr.affine.map(l=>[...l])},s)),r=e.dims?e.dims.slice(0,4):a.dims.slice(0,4),i=(f=e.nVox3D)!=null?f:r[1]*r[2]*r[3];return ot({img:t,hdr:a,originalAffine:a.affine.map(l=>[...l]),dims:r,nVox3D:i,extentsMin:Kt(e.extentsMin),extentsMax:Kt(e.extentsMax),mm000:Kt(e.mm000),mm100:Kt(e.mm100),mm010:Kt(e.mm010),mm001:Kt(e.mm001),dimsRAS:e.dimsRAS?[...e.dimsRAS]:void 0,pixDimsRAS:e.pixDimsRAS?[...e.pixDimsRAS]:void 0,permRAS:e.permRAS?[...e.permRAS]:void 0,toRAS:Kt(e.toRAS),toRASvox:Kt(e.toRASvox),matRAS:Kt(e.matRAS),obliqueRAS:Kt(e.obliqueRAS),oblique_angle:e.oblique_angle,frac2mm:Kt(e.frac2mm),frac2mmOrtho:Kt(e.frac2mmOrtho),img2RASstep:e.img2RASstep?[...e.img2RASstep]:void 0,img2RASstart:e.img2RASstart?[...e.img2RASstart]:void 0,volScale:e.volScale?[...e.volScale]:void 0,name:n,id:Do(),calMin:0,calMax:255,robustMin:0,robustMax:255,globalMin:0,globalMax:255,frame4D:0,nFrame4D:1,nTotalFrame4D:1,isLegendVisible:!1},o)}function bi(e){let t=256,n=-1,s=0;for(let l=0;l<256;l++){const u=e[l];u>0&&(l<t&&(t=l),n=l,l!==0&&(s+=u))}if(t>n)return{calMin:0,calMax:255,robustMin:0,robustMax:255,globalMin:0,globalMax:255};if(t===n)return{calMin:t,calMax:n,robustMin:t,robustMax:n,globalMin:t,globalMax:n};const o=Math.round(s*.02),a=Math.round(s*.02);let r=0,i=t;for(let l=t;l<=n;l++){if(l===0&&e[0]>o){i=0;break}if(r+=e[l],r>=o){i=l;break}}r=0;let f=n;for(let l=n;l>=t;l--)if(r+=e[l],r>=a){f=Math.min(n,l+1);break}return i>=f&&(i=t,f=n),{calMin:i,calMax:f,robustMin:i,robustMax:f,globalMin:t,globalMax:n}}function Vn(e,[t,n,s]){const o=e.dimsRAS,a=e.img2RASstart,r=e.img2RASstep;return!o||!a||!r||t<0||t>=o[1]||n<0||n>=o[2]||s<0||s>=o[3]?null:a[0]+t*r[0]+a[1]+n*r[1]+a[2]+s*r[2]}function Sn(e,t){return Be(this,null,function*(){const n=e.img,s=yield Qo(t,e.hdr,n.buffer.byteLength===n.byteLength?n.buffer:n.buffer.slice(n.byteOffset,n.byteOffset+n.byteLength)),o=URL.createObjectURL(new Blob([s]));Object.assign(document.createElement("a"),{href:o,download:t}).click(),URL.revokeObjectURL(o)})}let nn=null,dn=!1,us=0,Hn=!1,Yn=[];const Vo=/Safari/.test(navigator.userAgent)&&!/Chrome|Chromium|CriOS|FxiOS|Edg|Android/.test(navigator.userAgent),hi=Vo&&new URLSearchParams(window.location.search).get("inference")!=="webgpu";function no(e=null){return Be(this,null,function*(){const t={secureContext:window.isSecureContext,navigatorGpuExists:"gpu"in navigator,adapterObtained:!1,deviceObtained:!1,f16Support:!1,error:null};if(window.isSecureContext||(console.warn("WebGPU requires a secure context (HTTPS or localhost)."),console.warn("Current origin:",window.location.origin)),"gpu"in navigator)try{console.log("Requesting WebGPU adapter...");const n=yield navigator.gpu.requestAdapter();if(n){t.adapterObtained=!0,console.log("WebGPU adapter obtained:",n),n.info&&console.log("Adapter info:",n.info),console.log("Adapter limits:",{maxBufferSize:n.limits.maxBufferSize,maxStorageBufferBindingSize:n.limits.maxStorageBufferBindingSize,maxComputeWorkgroupsPerDimension:n.limits.maxComputeWorkgroupsPerDimension});const s={maxBufferSize:n.limits.maxBufferSize,maxStorageBufferBindingSize:n.limits.maxStorageBufferBindingSize,maxStorageBuffersPerShaderStage:n.limits.maxStorageBuffersPerShaderStage,maxUniformBufferBindingSize:n.limits.maxUniformBufferBindingSize,maxComputeInvocationsPerWorkgroup:n.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:n.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:n.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:n.limits.maxComputeWorkgroupSizeZ,maxComputeWorkgroupStorageSize:n.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:n.limits.maxComputeWorkgroupsPerDimension},o=n.features.has("shader-f16"),a=n.features.has("subgroups");t.f16Support=o,t.subgroupsSupport=a;const r=[];o&&r.push("shader-f16"),a&&r.push("subgroups");const i=yield n.requestDevice({requiredLimits:s,requiredFeatures:r});if(i.__adapterInfo=n.info||null,e&&typeof e.getParameter=="function")try{if(/Firefox/i.test(navigator.userAgent||""))i.__glRenderer=String(e.getParameter(e.RENDERER)||"");else{const l=e.getExtension("WEBGL_debug_renderer_info");i.__glRenderer=String((l?e.getParameter(l.UNMASKED_RENDERER_WEBGL):e.getParameter(e.RENDERER))||"")}}catch(l){}i.__isLost=!1,i.lost&&typeof i.lost.then=="function"&&i.lost.then(l=>{i.__isLost=!0,(l==null?void 0:l.reason)!=="destroyed"&&(console.warn(`[WebGPU] Device was lost (${(l==null?void 0:l.reason)||"unknown"}): ${(l==null?void 0:l.message)||""}`),nn===i&&(nn=null,dn=!1,t.deviceObtained=!1,t.error=(l==null?void 0:l.message)||"WebGPU device lost",so(!1,t)))}),nn=i,t.deviceObtained=!0,dn=!0,console.log(`✓ WebGPU initialized successfully. F16: ${o?"enabled":"not available"}, Subgroups: ${a?"enabled":"not available"}`)}else console.warn("WebGPU adapter request returned null."),console.warn("This typically means:"),console.warn("  - Safari: WebGPU feature flags not enabled in Settings > Feature Flags"),console.warn("  - Unsupported GPU hardware"),console.warn("  - GPU drivers need updating"),t.error="Adapter returned null"}catch(n){t.error=n.message,console.error("WebGPU initialization error:",n),navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")&&(console.warn("Safari detected. To enable WebGPU:"),console.warn("  1. Open Safari Settings/Preferences"),console.warn('  2. Go to Advanced tab, enable "Show features for web developers"'),console.warn("  3. Go to Feature Flags tab"),console.warn("  4. Enable: WebGPU, GPU Process: DOM Rendering, GPU Process: Canvas Rendering"),console.warn("  5. Restart Safari"))}else console.warn("navigator.gpu not found. WebGPU API is not available in this browser."),t.error="navigator.gpu not found",navigator.userAgent.includes("Firefox")&&(console.warn("Firefox detected. To enable WebGPU in about:config:"),console.warn("  1. Set dom.webgpu.enabled = true"),console.warn("  2. Set gfx.webgpu.ignore-blocklist = true"),console.warn("  3. Restart Firefox"));return so(dn,t),dn||console.log("Falling back to WebGL backend."),window.webgpuDiagnostics=t,t})}function so(e,t){const n=document.getElementById("backendStatus"),s=document.getElementById("backendStatusItem");if(!n){console.log("Backend status element not found in DOM");return}if(s&&(s.hidden=!1),e){const o=t.f16Support?" (F16)":"";n.textContent=`WebGPU${o}`,n.style.color="#4CAF50",n.title="WebGPU backend active - fastest performance"}else{n.textContent="WebGL",n.style.color="#FF9800";let o="WebGL backend (fallback)";t.error&&(o+=`
Reason: ${t.error}`),t.secureContext||(o+=`
⚠ Not a secure context (HTTPS required)`),Vo&&(o+=`

To enable WebGPU in Safari:
1. Settings > Feature Flags
2. Enable WebGPU flags
3. Restart Safari`),navigator.userAgent.includes("Firefox")&&(o+=`

To enable WebGPU in Firefox:
1. about:config > dom.webgpu.enabled = true
2. gfx.webgpu.ignore-blocklist = true
3. Restart Firefox`),n.title=o}}function wi(){return Be(this,null,function*(){var Ct;let e="",t="",n=null,s=null,o=null,a=null;function r(){const b=modelSelect.value;return b==="-1"||modelSelect.selectedIndex<0?null:wn[b]||null}function i(){const b=r();modelSelect.title=(b==null?void 0:b.description)||"Choose a segmentation model to run"}const f=document.getElementById("activeModelItem"),l=document.getElementById("activeModelBadge");function u(b){var B;if(!f||!l)return;const P=(B=b==null?void 0:b.modelName)==null?void 0:B.trim();if(!P){f.hidden=!0,l.textContent="",l.removeAttribute("title");return}l.textContent=P,l.title=`Active model: ${P}`,f.hidden=!1}const d="altKey";let g=null,c=null,p=null,m=null,h=null,M=null,_=null,w="input.nii.gz",y=null;const $=document.getElementById("dragSegmented");$&&$.querySelectorAll("button").forEach(b=>{b.onclick=()=>{le.secondaryDragMode=parseInt(b.dataset.drag,10),$.querySelectorAll("button").forEach(P=>{const B=P===b;P.classList.toggle("active",B),P.setAttribute("aria-pressed",String(B))})}});const x=document.getElementById("drawBtn"),S=document.getElementById("drawPopover"),C=document.getElementById("penRow"),v=document.getElementById("drawApplyRow");function A(b){S&&(S.hidden=!b,x&&x.setAttribute("aria-expanded",String(b)))}function k(b){le.drawIsEnabled=b>=0,b>=0&&(!le.drawingVolume&&le.volumes.length&&le.createEmptyDrawing(),le.drawPenValue=b&7,le.drawPenFilled=b>7),C&&C.querySelectorAll(".chip").forEach(P=>P.classList.toggle("active",parseInt(P.dataset.pen,10)===b))}function U(b){return Be(this,null,function*(){var ge;if(le.volumes.length<2){window.alert("No segmentation open (run a model first).");return}if(b===0){le.drawUndo();return}const P=(ge=le.drawingVolume)==null?void 0:ge.img;if(!P){window.alert("Nothing drawn yet — pick a pen and draw on the image first.");return}const B=le.volumes[1].img;if(p||B instanceof Float32Array){window.alert("Drawing edits label segmentations, not probability maps.");return}const ne=le.volumes[1],j=ne.dimsRAS;if(!j||P.length!==j[1]*j[2]*j[3]){window.alert("The drawing does not match the current image — redraw it.");return}const pe=b===1?1:0;let ie=0;for(let xe=0;xe<j[3];xe++)for(let Ae=0;Ae<j[2];Ae++)for(let Ve=0;Ve<j[1];Ve++,ie++)P[ie]>0&&(B[Vn(ne,[Ve,Ae,xe])]=pe);le.closeDrawing(),yield le.updateGLVolume(),le.drawIsEnabled=!1,k(-1)})}x&&(x.onclick=b=>{b.stopPropagation(),A(S.hidden)}),C&&C.querySelectorAll(".chip").forEach(b=>{b.onclick=()=>k(parseInt(b.dataset.pen,10))}),v&&v.querySelectorAll(".chip").forEach(b=>{b.onclick=()=>U(parseInt(b.dataset.apply,10))}),document.addEventListener("click",b=>{!S||S.hidden||b.target.closest(".popover-wrap")||A(!1)}),document.addEventListener("keydown",b=>{b.key==="Escape"&&A(!1)});const F=document.getElementById("appDialog");if(F&&!("closedBy"in HTMLDialogElement.prototype)){let b=!1;const P=B=>{const ne=F.getBoundingClientRect();return B.clientX<ne.left||B.clientX>ne.right||B.clientY<ne.top||B.clientY>ne.bottom};F.addEventListener("pointerdown",B=>{b=B.target===F&&P(B)}),F.addEventListener("pointerup",B=>{b&&B.target===F&&P(B)&&F.close(),b=!1})}aboutBtn.onclick=function(){Dt("About BrainChop",`
      <div style="text-align: left; font-size: 0.95em;">
        <p><strong>🔒 Privacy First</strong><br>
        BrainChop runs entirely <strong>locally in your browser</strong>. Your imaging data never leaves your device, and no server-side processing is involved.</p>

        <p><strong>⌨️ Controls</strong><br>
        • <strong>Drag & Drop</strong> any NIfTI file to open.
        • Press <strong>C</strong> to toggle/cycle the clip-plane.
        • Press <strong>V</strong> repeatedly to cycle through views.
        • <strong>Option/Alt-click</strong> a segmentation label or CAT-lite tissue (or use <strong>Stats → isolate</strong> on touch screens) to show it alone in all panels + 3D. Click it again, click the background, or press Esc to restore all overlays.
        • Click <strong>Reset view</strong> (or <strong>⟲</strong> on mobile) to restore default zoom, pan, 3D angle, and contrast.</p>

        <p><strong>🧠 AI Models</strong><br>
        <strong>🪓🧠 Omnimodal Skull Stripping:</strong> <em>Omnimodal Skull Stripping</em> (MindGrab) extracts the brain across T1, T2, FLAIR, DWI, EPI, MRA, PDw, qT1, CT, and PET.<br>
        <strong>🪓 / ⚡🪓 Subcortical + Tissue:</strong> <em>Subcortical + Tissue</em> (MindMap 24-channel) and <em>⚡🪓 Subcortical + Tissue</em> (MindMap 16-channel) for sub-3s research and clinical T1w parcellation.<br>
        <strong>⅔🧠 Tissue Fractions:</strong> <em>Tissue fraction maps (GM/WM/CSF)</em> for CAT-inspired continuous partial-volume estimation.<br>
        <strong>🪓🔪 Cortical + Subcortical Parcellation:</strong> <em>Desikan-Killiany Atlas</em> (104-region cortical + subcortical + 5-part corpus callosum) for standard and clinical T1w MRIs; <em>Desikan-Killiany (lesion scans)</em> for large focal lesions; <em>Desikan-Killiany 50</em> for merged bilateral cortical homologues.</p>
        
        <p><em>Note: Models may run slower on limited devices to ensure memory safety.</em></p>
      </div>
    `)};const G=document.getElementById("shadingBtn");G.onclick=()=>{const b=G.classList.toggle("active");G.setAttribute("aria-pressed",String(b)),le.volumeIllumination=b?.5:0};const V=document.getElementById("resetViewBtn");V&&(V.onclick=()=>As(le)),diagnosticsBtn.onclick=function(){let b=e;if(b.length<1&&window.webgpuDiagnostics){const B=window.webgpuDiagnostics;b=`:: Startup Diagnostics ::
`,b+=`Secure Context: ${B.secureContext}
`,b+=`WebGPU Enabled: ${dn}
`,b+=`F16 Support: ${B.f16Support}
`,B.error&&(b+=`Error: ${B.error}
`),b+=`User Agent: ${navigator.userAgent}
`}if(b.length<1){Dt("Diagnostics","No diagnostic string generated: run a model to create diagnostics");return}let P=b;t=t.slice(0,-2),t!==""&&P.includes("Status: OK")&&(P=P.replace("Status: OK",`Status: ${t}`)),t="",navigator.clipboard.writeText(P).then(()=>{Dt("Diagnostics",`<p>Diagnostics copied to clipboard</p><pre style="white-space: pre-wrap; font-family: monospace; font-size: 0.9em; overflow-x: auto;">${P}</pre>`)}).catch(B=>{Dt("Diagnostics",`<p>Failed to copy to clipboard.</p><pre style="white-space: pre-wrap; font-family: monospace; font-size: 0.9em; overflow-x: auto;">${P}</pre>`)})},opacitySlider0.oninput=()=>{le.volumes[0]&&(le.volumes[0].opacity=Number(opacitySlider0.value)),le.updateGLVolume()};function X(){const b=Number(opacitySlider1.value);if(p&&le.volumes[1]===p.overlay){di(p.rgba,p.activeAlphaOffsets,p.activeBaseAlpha,b),p.overlay.opacity=b,p.overlay._dataVersion=(p.overlay._dataVersion||0)+1,le.updateGLVolume();return}le.volumes.slice(1).forEach(P=>{P.opacity=b}),le.updateGLVolume()}opacitySlider1.oninput=X;function W(b=null){const P=b==null?void 0:b.probabilityUnderlayOpacity;P!==void 0?(_===null&&(_=opacitySlider0.value),opacitySlider0.value=P,le.volumes[0]&&(le.volumes[0].opacity=Number(P))):_!==null&&(opacitySlider0.value=_,_=null,le.volumes[0]&&(le.volumes[0].opacity=Number(opacitySlider0.value)))}function D(){return Be(this,null,function*(){var Je,ve,We;const b=le.volumes[0],P=(Je=b.hdr)==null?void 0:Je.pixDims,B=!P||Math.abs(Math.abs(P[1])-1)<.001&&Math.abs(Math.abs(P[2])-1)<.001&&Math.abs(Math.abs(P[3])-1)<.001,ne=(ve=b.hdr)==null?void 0:ve.scl_slope,j=(We=b.hdr)==null?void 0:We.scl_inter,pe=(ne===void 0||ne===0||Math.abs(ne-1)<1e-6)&&(j===void 0||Math.abs(j)<1e-6);let ie=b.dims[1]===256&&b.dims[2]===256&&b.dims[3]===256&&b.img instanceof Uint8Array&&b.img.length===256*256*256&&B&&pe;if((b.permRAS[0]!==-1||b.permRAS[1]!==3||b.permRAS[2]!==-2)&&(ie=!1),ie)return;gt("Conforming input volume to 256³...",.05),yield Go(),yield Y();const ge=yield le.volumeTransform.conform(b,{toRAS:!1}),[xe,Ae]=[M,w],Ve=modelSelect.value;yield le.removeVolume(0),yield le.addVolume(ge),[M,w]=[xe,Ae],modelSelect.value=Ve,i()})}function T(){for(c=null,p=null,m=null;le.model.volumes.length>1;)le.model.removeVolume(le.model.volumes.length-1)}function Y(){return Be(this,null,function*(){T(),N(),u(null),yield le.updateGLVolume()})}function E(){return le.volumes.length>=2&&le.volumes[1].colormapLabel?le.volumes[1]:null}function L(){return p&&le.volumes.length>=2&&le.volumes[1]===p.overlay?p:null}function N(){g=null,c=null,h=null,_e&&(_e.style.display="none")}function Z(b,P){var j;const B=new Uint8ClampedArray(b.lut.length),ne=P-((j=b.min)!=null?j:0);if(ne>=0&&ne*4+3<b.lut.length){const pe=ne*4;B[pe]=b.lut[pe],B[pe+1]=b.lut[pe+1],B[pe+2]=b.lut[pe+2],B[pe+3]=b.lut[pe+3]}return ot({lut:B,min:b.min,max:b.max},b.labels?{labels:b.labels}:{})}function O(){const b=E();b&&(m||(m=b.colormapLabel),g===null?(b.colormapLabel=m,h=null):(b.colormapLabel=Z(m,g),h=ce(g)),le.updateGLVolume(),ae())}function ce(b){const P=le.volumes[0],B=E(),ne=B==null?void 0:B.img;if(!P||!ne)return null;const j=P.hdr.pixDims||[],pe=j[1]&&j[2]&&j[3]?j[1]*j[2]*j[3]:1,ie=B.hdr.dims.slice(1,4),ge=et(P.img,ne,pe,ie),xe=ge.reduce((We,Fe)=>We+Fe.volume_mm3,0),Ae=ge.find(We=>We.label===b);if(!Ae)return null;const Ve=xe>0?Ae.volume_mm3/xe*100:0,Je=[Ae.name,`${kt(Ae.volume_mm3)} cm3   (${Ve.toFixed(1)}% of brain)`,`${Ae.voxels.toLocaleString()} voxels`,`intensity  ${Ae.mean.toFixed(0)} +/- ${Ae.stdev.toFixed(0)}`];let ve=[1,1,1,1];if(s&&s.R&&s.R[b]!=null){const We=Fe=>Math.min(255,Fe*.55+130)/255;ve=[We(s.R[b]),We(s.G[b]),We(s.B[b]),1]}return{lines:Je,color:ve}}function fe(b){const P=L(),B=le.volumes[0];if(!P||!B)return null;const ne=B.hdr.pixDims||[],j=ne[1]&&ne[2]&&ne[3]?ne[1]*ne[2]*ne[3]:1,pe=B.hdr.dims.slice(1,4),{rows:ie,icvMm3:ge}=eo(B.img,P.maps,j,pe,P.modelEntry),xe=ie.find(Je=>Je.tissueIndex===b);if(!xe)return null;const Ae=ge>0?xe.volume_mm3/ge*100:0,Ve=Je=>Math.min(255,Je*.55+130)/255;return{lines:[xe.name,`${kt(xe.volume_mm3)} cm3   (${Ae.toFixed(1)}% of ICV)`,`${Math.round(xe.effectiveVoxels).toLocaleString()} equiv. voxels`,`intensity  ${xe.mean.toFixed(0)} +/- ${xe.stdev.toFixed(0)}`],color:[Ve(xe.tint[0]),Ve(xe.tint[1]),Ve(xe.tint[2]),1]}}function ye(){const b=L();if(!b)return;const P=Number(opacitySlider1.value),B=Js(b.maps,b.modelEntry,c,P,b.rasLayout);b.rgba=B.rgba,b.activeAlphaOffsets=B.activeAlphaOffsets,b.activeBaseAlpha=B.activeBaseAlpha,b.overlay.img=B.rgba,b.overlay.opacity=P,b.overlay._dataVersion=(b.overlay._dataVersion||0)+1,h=c===null?null:fe(c),le.updateGLVolume(),ae()}function we(b){L()&&(c=b===null||b===c?null:b,ye())}let _e=null,K=!1;function ae(){var xe,Ae;_e||(_e=document.createElement("div"),_e.style.cssText="position:absolute;pointer-events:none;font:13px/1.55 system-ui,sans-serif;text-shadow:0 1px 2px #000;white-space:pre;color:#ebebeb",le.canvas.parentElement.appendChild(_e));const b=g!==null&&!!E()||c!==null&&!!L(),P=(Ae=(xe=le.view)==null?void 0:xe.screenSlices)==null?void 0:Ae.find(Ve=>Ve.axCorSag===4);if(!b||!h||!P){_e.style.display="none";return}const B=window.devicePixelRatio||1,[ne,j]=P.leftTopWidthHeight;Object.assign(_e.style,{left:`${ne/B+8}px`,top:`${j/B+8}px`});const{lines:pe,color:ie}=h,ge=ie.slice(0,3).map(Ve=>Math.round(Ve*255)).join(",");_e.innerHTML=`<span style="color:rgb(${ge})">${Gt(pe[0])}</span>
`+pe.slice(1).map(Gt).join(`
`),_e.style.display="block"}function z(){K||g===null&&c===null||(K=!0,requestAnimationFrame(()=>{K=!1,ae()}))}function oe(){const b=E();if(!b||!y)return null;const P=Vn(b,y);if(P===null)return null;const B=b.img[P];return B===void 0?null:Math.round(B*b.hdr.scl_slope+b.hdr.scl_inter)}function R(b){E()&&(g=b===0||b===g?null:b,O())}function ue(){const b=L(),P=le.volumes[0];if(!b||!P||!y)return;const B=Vn(P,y);if(B===null)return;let ne=null,j=0;for(let pe=0;pe<b.maps.length;pe++){const ie=b.maps[pe][B];Number.isFinite(ie)&&ie>j&&(j=ie,ne=pe)}return ne}function te(b){if(b[d]){if(E()){const P=oe();if(P===null||Number.isNaN(P))return;R(P)}else if(L()){const P=ue();if(P===void 0)return;we(P)}b.preventDefault()}}function Q(){return Be(this,null,function*(){if(!Hn){Hn=!0,Yn=[];try{yield H()}finally{Hn=!1,modelProgress.classList.remove("is-busy"),modelSelect.value="-1",i()}}})}function H(){return Be(this,null,function*(){var ve,We;const b=modelSelect.value;if(b==="-1"||modelSelect.selectedIndex<0)return;const P=document.getElementById("memstatusItem");P&&(P.hidden=!0),N(),yield D();const B=wn[b],ne=(new URLSearchParams(window.location.search).get("precision")||"").toLowerCase(),pe=ot(ot({},Zs(B,ne!=="fp16"&&ne!=="fp32")),ne==="fp32"?{forceFP32:!0}:{}),ie=$t(ot({},Ea),{isTouchPrimary:_i()}),ge=new URL("./",window.location.href).href;ie.rootURL=ge.endsWith("/")?ge.slice(0,-1):ge;const xe=le.volumes[0].img;let Ae=null;const Ve=hi&&!pe.quantize8Bit,Je=Ve;if(Ve&&dn&&pe.webgpu_safetensor&&console.info("Safari WebGPU legacy gate active for non-V4 model; routing to native WebGL2."),!Je&&(!nn||nn.__isLost)&&"gpu"in navigator&&us<2&&(ve=window.webgpuDiagnostics)!=null&&ve.adapterObtained&&(us++,console.info(`[WebGPU] Re-initializing device after prior loss (attempt ${us})...`),yield no((We=le.view)==null?void 0:We.gl)),dn&&nn&&!nn.__isLost&&!Je&&pe.webgpu_safetensor){console.log("Attempting WebGPU backend...");const Fe=$t(ot({},pe),{enableTTA:!1});try{yield Oa(nn,ie,Fe,le.volumes[0].hdr,xe,Qt,gt);return}catch(re){Ae=re,console.error("WebGPU inference failed, falling back to native WebGL2.",re)}}if(B.webgpu_safetensor){const Fe=ne==="int8"||ne==="rgba8",re=$t(ot({},Zs(B,!1)),{quantize8Bit:Fe,autoQuantize8BitFallback:!Fe&&!!B.turbo});try{const{runInferenceWebGl2:he,nativeWebgl2Available:se}=yield lt(()=>Be(null,null,function*(){const{runInferenceWebGl2:de,nativeWebgl2Available:ee}=yield import("./inference-webgl2-BseBPG7U.js");return{runInferenceWebGl2:de,nativeWebgl2Available:ee}}),[],import.meta.url);if(se()){console.log("Attempting native WebGL2 runner..."),yield he(ie,re,le.volumes[0].hdr,xe,Qt,gt);return}Ae=new Error("Native WebGL2 unavailable (no OffscreenCanvas WebGL2 context)."),console.warn(Ae.message)}catch(he){Ae=he,console.error("Native WebGL2 failed.",he)}}vi(Ae||new Error(`No available backend could run ${pe.modelName}.`))})}modelSelect.onchange=()=>(i(),Q()),i();function J(){const b=L();return b?b.maps.map((P,B)=>qn(le.volumes[0],P,b.tissues[B].name,{scl_inter:0,scl_slope:1,datatypeCode:16,numBitsPerVoxel:32,cal_min:0,cal_max:1,intent_code:1001})):le.volumes.slice(1)}function q(){const b=le.volumes[1],P=(o==null?void 0:o.type)==="Brain_Extraction"?a:b.img;if(!P||P.length!==b.img.length)throw new Error("The segmentation mask is unavailable. Run the model again.");const B=new Uint8Array(P.length);for(let j=0;j<P.length;j++)B[j]=P[j]!==0?1:0;const ne=to(b,B,"brain_mask");return Object.assign(ne.hdr,{datatypeCode:2,numBitsPerVoxel:8,scl_slope:1,scl_inter:0,cal_min:0,cal_max:1,intent_code:1002}),ne}function ke(){return Be(this,arguments,function*({includeMask:b=!1,useFreeSurfer:P=!1}={}){if(le.volumes.length<2){window.alert("No segmentation to save (run a model first).");return}const B=P?Dn(n):null,ne=J();for(const j of ne){const pe=!!j.colormapLabel||j.hdr.intent_code===1002;if(B&&pe){const{img:ie,maxLabel:ge}=ni(j.img,B),xe=qn(j,ie,j.name,{datatypeCode:4,numBitsPerVoxel:16,scl_slope:1,scl_inter:0,cal_min:0,cal_max:ge,intent_code:1002});yield Sn(xe,be(j,ne.length,"_fs"))}else yield Sn(j,be(j,ne.length,""))}b&&(yield Sn(q(),"binary_mask.nii.gz"))})}function be(b,P,B){return P>1?`segmentation_${b.name}${B}.nii.gz`:`segmentation${B}.nii.gz`}function Le(){if(le.volumes.length<1){window.alert("No image loaded.");return}Sn(le.volumes[0],"conformed_input.nii.gz")}function Ce(){return Be(this,null,function*(){if(le.volumes.length<1){window.alert("No image loaded.");return}const b=E(),P=g!==null&&b&&m?b.colormapLabel:null;P&&(b.colormapLabel=m);try{yield le.saveDocument("brainchop.nvd")}finally{P&&b&&(b.colormapLabel=P)}})}function Ee(){return Be(this,arguments,function*({includeMask:b=!1,useFreeSurfer:P=!1}={}){if(le.volumes.length<2){window.alert("No segmentation to save (run a model first).");return}if(!M||!M.hdr||!M.hdr.affine){window.alert("Original input grid is unavailable — reload the image and try again.");return}const B=P?Dn(n):null;gt("Reslicing to native space…",.15);try{const ne=J();for(let j=0;j<ne.length;j++){const pe=ne[j],ie=!!pe.colormapLabel||pe.hdr.intent_code===1002,ge=B&&ie?B:null,xe=yield Ie(pe,ge);yield Sn(xe,be(pe,ne.length,ge?"_fs_native":"_native")),ne.length>1&&gt("Reslicing to native space…",.15+(j+1)/ne.length*.75)}if(b){const j=yield Ie(q());yield Sn(j,"binary_mask_native.nii.gz")}gt("Saved native-space segmentation.",1)}catch(ne){gt("",0),console.error("Native-space reslice failed:",ne),window.alert("Native-space export failed: "+(ne&&ne.message?ne.message:ne))}})}function Ie(b,P=null){return Be(this,null,function*(){var xe,Ae;const B=!!b.colormapLabel||b.hdr.intent_code===1002,ne=!B&&b.img instanceof Float32Array,j=((Ae=(xe=M.img)==null?void 0:xe.constructor)==null?void 0:Ae.name)||"Uint8Array",{img:pe,hdrPatch:ie}=yield Dr({srcImg:b.img,srcDims:[b.hdr.dims[1],b.hdr.dims[2],b.hdr.dims[3]],srcAffine:b.hdr.affine,dstDims:[M.hdr.dims[1],M.hdr.dims[2],M.hdr.dims[3]],dstAffine:M.hdr.affine,isLabel:B,isProbability:ne,dstTypedArrayKind:j,labelLut:P}),ge=to(M,pe);return Object.assign(ge.hdr,ie),ge})}let He=!1,Ne=!1;const Ue={cube:'<svg viewBox="0 0 24 24" class="save-opt-ico" aria-hidden="true"><path d="M12 2.75l8.25 4.75v9L12 21.25 3.75 16.5v-9z"/><path d="M12 12v9.25M3.75 7.5L12 12l8.25-4.5"/></svg>',grid:'<svg viewBox="0 0 24 24" class="save-opt-ico" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="2.5"/><path d="M3.5 9.5h17M3.5 14.5h17M9.5 3.5v17M14.5 3.5v17"/></svg>',volume:'<svg viewBox="0 0 24 24" class="save-opt-ico" aria-hidden="true"><path d="M12 3.5l8.5 4.5-8.5 4.5L3.5 8z"/><path d="M3.5 12l8.5 4.5 8.5-4.5M3.5 16l8.5 4.5 8.5-4.5"/></svg>',scene:'<svg viewBox="0 0 24 24" class="save-opt-ico" aria-hidden="true"><rect x="3.5" y="4.5" width="17" height="15" rx="2.5"/><path d="M3.5 9.5h17M9.5 9.5v10"/></svg>',arrow:'<svg viewBox="0 0 24 24" class="save-opt-arrow" aria-hidden="true"><path d="M12 4.5v11"/><path d="M7.5 11.5L12 16l4.5-4.5"/><path d="M5 19.5h14"/></svg>'},Pe=[{act:ke,group:"seg",icon:"cube",title:"Conformed space",sub:"256³ · 1 mm isotropic",need:"seg"},{act:Ee,group:"seg",icon:"grid",title:"Native space",sub:"Resampled to the input grid",need:"seg"},{act:Le,group:"vol",icon:"volume",title:"Conformed input volume",sub:"Resampled T1 · 256³ · 1 mm",need:"img"},{act:Ce,group:"vol",icon:"scene",title:"Scene (.nvd)",sub:"Full viewer state document",need:"img"}];function De(){const b=le.volumes.length>=1,P=le.volumes.length>=2,B=P&&o&&o.outputType!=="probability"&&(o.type!=="Brain_Extraction"||!!a),ne=P&&o&&o.outputType!=="probability"&&o.type!=="Brain_Extraction"&&!!Dn(n),j=Fe=>Fe==="seg"?P:b;let pe=!1;const ie=Fe=>Pe.map((re,he)=>({o:re,i:he})).filter(({o:re})=>re.group===Fe).map(({o:re,i:he})=>{const se=j(re.need),de=se&&!pe?(pe=!0," autofocus"):"";return`<button type="button" class="save-opt${se?"":" disabled"}" data-i="${he}"${se?"":" disabled"}${de}>
          ${Ue[re.icon]}
          <span class="save-opt-copy">
            <span class="save-opt-title">${re.title}</span>
            <span class="save-opt-sub">${re.sub}</span>
          </span>
          ${Ue.arrow}
        </button>`}).join(""),ge=[];ne&&ge.push(`
        <label class="save-check-row" for="saveFreeSurfer">
          <input type="checkbox" id="saveFreeSurfer" class="save-checkbox"${He?" checked":""}>
          <span class="save-check-copy">
            <span class="save-check-title">FreeSurfer label IDs <span class="save-badge">Freeview</span></span>
            <span class="save-check-sub">FreeSurferColorLUT numbering · open directly with :colormap=lut</span>
          </span>
        </label>`),B&&ge.push(`
        <label class="save-check-row" for="saveBinaryMask">
          <input type="checkbox" id="saveBinaryMask" class="save-checkbox"${Ne?" checked":""}>
          <span class="save-check-copy">
            <span class="save-check-title">Also save binary mask</span>
            <span class="save-check-sub">Foreground 1 · background 0</span>
          </span>
        </label>`);const xe=ge.length?`<div class="save-modifiers" role="group" aria-label="Segmentation export options">${ge.join("")}</div>`:"",Ve=`
      <div class="save-sheet">
        <section class="save-section">
          <div class="save-section-head">
            <span class="save-section-label">Segmentation</span>
            ${P?"":'<span class="save-section-hint">Run a model first</span>'}
          </div>
          <div class="save-options">${ie("seg")}</div>
          ${xe}
        </section>
        <section class="save-section save-section-divider">
          <div class="save-section-head">
            <span class="save-section-label">Volume &amp; Scene</span>
          </div>
          <div class="save-options">${ie("vol")}</div>
        </section>
      </div>`;Dt("Save",Ve,{hideClose:!0,saveMode:!0});const Je=document.getElementById("dialogMessage");if(!Je)return;const ve=Je.querySelector("#saveFreeSurfer");ve&&(ve.onchange=()=>{He=ve.checked});const We=Je.querySelector("#saveBinaryMask");We&&(We.onchange=()=>{Ne=We.checked}),Je.querySelectorAll(".save-opt:not(.disabled)").forEach(Fe=>{Fe.onclick=()=>{var ee,me;const re=Pe[parseInt(Fe.dataset.i,10)],he=re.need==="seg"&&!!((ee=Je.querySelector("#saveBinaryMask"))!=null&&ee.checked),se=re.need==="seg"&&ne&&!!((me=Je.querySelector("#saveFreeSurfer"))!=null&&me.checked),de=document.getElementById("appDialog");de&&de.open&&de.close(),re.need==="seg"?re.act({includeMask:he,useFreeSurfer:se}):re.act()}})}const rt=document.getElementById("saveBtn");rt&&(rt.onclick=De);function et(b,P,B,ne=[256,256,256]){const pe=new Map,[ie,ge,xe]=ne,Ae=P.length;if(ie*ge*xe===Ae){let ve=0;for(let We=0;We<xe;We++)for(let Fe=0;Fe<ge;Fe++)for(let re=0;re<ie;re++,ve++){const he=P[ve];if(he===0)continue;let se=pe.get(he);se||(se={count:0,sum:0,sumSq:0,sumX:0,sumY:0,sumZ:0,hist:new Float64Array(256)},pe.set(he,se));const de=b[ve];se.count++,se.sum+=de,se.sumSq+=de*de,se.sumX+=re,se.sumY+=Fe,se.sumZ+=We,se.hist[de]++}}else for(let ve=0;ve<Ae;ve++){const We=P[ve];if(We===0)continue;let Fe=pe.get(We);Fe||(Fe={count:0,sum:0,sumSq:0,sumX:0,sumY:0,sumZ:0,hist:new Float64Array(256)},pe.set(We,Fe));const re=b[ve];Fe.count++,Fe.sum+=re,Fe.sumSq+=re*re,Fe.hist[re]++}const Ve=(ve,We,Fe)=>{const re=Fe*We;let he=0;for(let se=0;se<ve.length;se++)if(he+=ve[se],he>=re)return se;return ve.length-1},Je=[];for(const[ve,We]of[...pe.entries()].sort((Fe,re)=>Fe[0]-re[0])){const Fe=We.sum/We.count,re=Math.max(0,We.sumSq/We.count-Fe*Fe);let he=0,se=0;for(let de=0;de<We.hist.length;de++)if(We.hist[de]>0){he=de;break}for(let de=We.hist.length-1;de>=0;de--)if(We.hist[de]>0){se=de;break}Je.push({label:ve,name:n&&n[ve]!=null?n[ve]:`label_${ve}`,voxels:We.count,volume_mm3:We.count*B,min:he,max:se,q1:Ve(We.hist,We.count,.25),median:Ve(We.hist,We.count,.5),q3:Ve(We.hist,We.count,.75),mean:Fe,stdev:Math.sqrt(re),centroidVox:[We.sumX/We.count,We.sumY/We.count,We.sumZ/We.count]})}return Je}function tt(b,{vol:P,labelArr:B=null,probMap:ne=null}={}){var he;if(!(b!=null&&b.centroidVox)||!((he=P==null?void 0:P.hdr)!=null&&he.affine))return;const[j,pe,ie]=P.hdr.dims.slice(1,4);let[ge,xe,Ae]=b.centroidVox;const Ve=Math.max(0,Math.min(j-1,Math.round(ge))),Je=Math.max(0,Math.min(pe-1,Math.round(xe))),ve=Math.max(0,Math.min(ie-1,Math.round(Ae))),We=Ve+Je*j+ve*j*pe;if(B&&B[We]!==b.label){let se=1/0,de=Ve,ee=Je,me=ve,Se=0;for(let Re=0;Re<ie;Re++){const Ye=Re-Ae,at=Ye*Ye;for(let yt=0;yt<pe;yt++){const Oe=yt-xe,Xe=Oe*Oe+at;for(let it=0;it<j;it++,Se++){if(B[Se]!==b.label)continue;const Ze=it-ge,je=Ze*Ze+Xe;je<se&&(se=je,de=it,ee=yt,me=Re)}}}Number.isFinite(se)&&(ge=de,xe=ee,Ae=me)}else if(ne&&!(ne[We]>=.5)){let se=1/0,de=Ve,ee=Je,me=ve,Se=0;for(let Re=0;Re<ie;Re++){const Ye=Re-Ae,at=Ye*Ye;for(let yt=0;yt<pe;yt++){const Oe=yt-xe,Xe=Oe*Oe+at;for(let it=0;it<j;it++,Se++){if(!(ne[Se]>=.5))continue;const Ze=it-ge,je=Ze*Ze+Xe;je<se&&(se=je,de=it,ee=yt,me=Re)}}}Number.isFinite(se)&&(ge=de,xe=ee,Ae=me)}const Fe=P.hdr.affine,re=[Fe[0][0]*ge+Fe[0][1]*xe+Fe[0][2]*Ae+Fe[0][3],Fe[1][0]*ge+Fe[1][1]*xe+Fe[1][2]*Ae+Fe[1][3],Fe[2][0]*ge+Fe[2][1]*xe+Fe[2][2]*Ae+Fe[2][3]];le.setCrosshairPos(re)}const Bt='<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="5.5"/><path d="M12 2.5v4M12 17.5v4M2.5 12h4M17.5 12h4"/></svg>';function jt(b,P=null){const B=P?["label","fs_label","name","voxels","volume_mm3","min","max","q1","median","q3","mean","stdev"]:["label","name","voxels","volume_mm3","min","max","q1","median","q3","mean","stdev"],ne=ie=>Number.isInteger(ie)?String(ie):ie.toFixed(6),j=ie=>/[",\n]/.test(ie)?`"${String(ie).replace(/"/g,'""')}"`:String(ie),pe=[B.join(",")];for(const ie of b){const ge=P?[ie.label,ie.label<P.length?P[ie.label]:ie.label,j(ie.name)]:[ie.label,j(ie.name)];ge.push(ie.voxels,ne(ie.volume_mm3),ie.min,ie.max,ie.q1,ie.median,ie.q3,ne(ie.mean),ne(ie.stdev)),pe.push(ge.join(","))}return pe.join(`
`)+`
`}function At(b,P="mask_stats.csv"){const B=new Blob([b],{type:"text/csv"}),ne=URL.createObjectURL(B),j=document.createElement("a");j.href=ne,j.download=P,document.body.appendChild(j),j.click(),j.remove(),URL.revokeObjectURL(ne)}function Zt(b,P=null){At(jt(b,P),"mask_stats.csv")}const kt=b=>{const P=b/1e3;return P>=10?Math.round(P).toLocaleString():P.toFixed(1)};function Ft(b,P,B=null,{isCatLiteMode:ne=!1}={}){const j=Math.max(...b.map(ve=>ve.volume_mm3)),pe=ve=>ve.colorCss?ve.colorCss:s&&s.R&&s.R[ve.label]!=null?`rgb(${s.R[ve.label]},${s.G[ve.label]},${s.B[ve.label]})`:"#6b9bd1",ie=ne||!!E();let ge="";for(const ve of b){const We=P>0?ve.volume_mm3/P*100:0,Fe=j>0?ve.volume_mm3/j*100:0,re=ne?c===ve.tissueIndex:g===ve.label,he=!ne&&B&&ve.label<B.length?B[ve.label]:null,se=`<span class="stat-val" data-cm3="${kt(ve.volume_mm3)}" data-pct="${We.toFixed(1)}%">${kt(ve.volume_mm3)}</span>`,de=`<span class="stat-bar" style="width:${Fe.toFixed(2)}%;background:${pe(ve)}" data-w-abs="${Fe.toFixed(2)}" data-w-pct="${We.toFixed(2)}"></span>`,ee=(Ye,at)=>`<div class="stat-kv"><span class="k">${Ye}</span><span class="v">${at}</span></div>`,me=ne?ee("% ICV",`${We.toFixed(1)}%`)+ee("cm³",kt(ve.volume_mm3))+ee("mean",ve.mean.toFixed(2))+ee("SD",ve.stdev.toFixed(2))+ee("min",ve.min)+ee("max",ve.max)+ee("equiv. vox",Math.round(ve.effectiveVoxels).toLocaleString())+ee("support",ve.supportVoxels.toLocaleString()):ee("min",ve.min)+ee("max",ve.max)+ee("Q1",ve.q1)+ee("Q3",ve.q3)+ee("median",ve.median)+ee("mean",ve.mean.toFixed(2))+ee("SD",ve.stdev.toFixed(2))+ee("voxels",ve.voxels.toLocaleString()),Se=ne?`<span class="stat-id-chip">${Gt(ve.tissueKey.toUpperCase())}</span>`:`<span class="stat-id-chip">ID ${ve.label}</span>`,Re=ie?`<button type="button" class="stat-iso${re?" active":""}" aria-pressed="${re}" aria-label="${re?"Isolated":"Isolate"} ${Gt(ve.name)}">${re?"isolated":"isolate"}</button>`:"";ge+=`
        <div class="stat-row${re?" is-isolated":""}" data-label="${ve.label}" data-name="${Gt(ve.name.toLowerCase())}">
          <div class="stat-line">
            <button type="button" class="stat-trigger" aria-expanded="false">
              <span class="stat-chevron" aria-hidden="true"></span>
              <span class="stat-swatch" style="background:${pe(ve)}" aria-hidden="true"></span>
              <span class="stat-name">${Gt(ve.name)}</span>
              <span class="stat-track" aria-hidden="true">${de}</span>
              ${se}
            </button>
            <span class="stat-actions">
              <button type="button" class="stat-locate" aria-label="Locate ${Gt(ve.name)}" title="Jump crosshair to ${Gt(ve.name)}">${Bt}</button>
              ${Re}
            </span>
          </div>
          <div class="stat-detail" hidden>
            <div class="stat-detail-meta">
              <span class="stat-detail-fullname">${Gt(ve.name)}</span>
              <span class="stat-detail-badges">
                ${Se}
                ${he?`<span class="save-badge">FS ${he}</span>`:""}
              </span>
            </div>
            <div class="stat-detail-grid">${me}</div>
          </div>
        </div>`}const xe=ne?b.length===1?"tissue":"tissues":b.length===1?"region":"regions",Ae=ne?" cm³ ICV":" cm³",Ve=ne?"% of ICV":"% of total",Je=b.length>8?`<search class="stat-search">
           <input type="search" id="statsFilterInput" class="stat-filter" placeholder="Filter regions…" aria-label="Filter regions" autocorrect="off" autocapitalize="none" spellcheck="false">
         </search>`:"";return`
      <div id="statsPanel">
        <div class="stat-toolbar">
          <div class="stat-toggle" role="group" aria-label="Volume display unit">
            <button type="button" data-mode="cm3" class="active" aria-pressed="true">cm³</button>
            <button type="button" data-mode="pct" aria-pressed="false">${Ve}</button>
          </div>
          <span class="stat-total" id="statsUnitLabel">${b.length} ${xe} &middot; ${kt(P)}${Ae}</span>
          ${Je}
        </div>
        <div id="statsRows">
          ${ge}
          <p id="statsEmpty" class="stat-empty" hidden>No matching regions</p>
        </div>
        <div class="stat-footer">
          <span class="stat-footer-hint">Select a row for stats &middot; Crosshair jumps &middot; Isolate solos in 3D</span>
          <button type="button" id="statsDownloadBtn" class="stat-csv-btn">
            ${Ue.arrow}
            <span>Download CSV</span>
          </button>
        </div>
      </div>`}saveStatsBtn.onclick=function(){if(le.volumes.length<2){Dt("Region volumes","<p>No segmentation to measure — run a model first.</p>");return}const b=le.volumes[0].img,P=le.volumes[0].hdr.pixDims||[],B=P[1]&&P[2]&&P[3]?P[1]*P[2]*P[3]:1,ne=L();let j,pe,ie=null,ge=!1,xe=null;const Ae=le.volumes[1];if(ne){ge=!0;const ee=le.volumes[0].hdr.dims.slice(1,4),me=eo(b,ne.maps,B,ee,ne.modelEntry);if(j=me.rows,pe=me.icvMm3,j.length===0){Dt("Tissue volumes","<p>No non-zero tissue fractions found.</p>");return}j=j.slice().sort((Se,Re)=>Re.volume_mm3-Se.volume_mm3)}else if(Ae.img instanceof Float32Array){Dt("Region volumes","<p>Region statistics require a discrete label segmentation or CAT-lite GM/WM/CSF tissue maps.</p>");return}else{if(xe=Ae.img,!b||!xe||b.length!==xe.length){Dt("Region volumes","<p>Input and segmentation grids do not match.</p>");return}const ee=Ae.hdr.dims.slice(1,4);if(j=et(b,xe,B,ee),j.length===0){Dt("Region volumes","<p>No non-background labels found in the segmentation.</p>");return}j=j.slice().sort((me,Se)=>Se.volume_mm3-me.volume_mm3),pe=j.reduce((me,Se)=>me+Se.volume_mm3,0),ie=o&&o.type!=="Brain_Extraction"?Dn(n):null}const Ve=new Map(j.map(ee=>[ee.label,ee]));Dt(ge?"Tissue volumes":"Region volumes",Ft(j,pe,ie,{isCatLiteMode:ge}),{hideClose:!0,statsMode:!0});const ve=document.getElementById("statsPanel");if(!ve)return;let We="cm3",Fe=j.length;const re=ge?j.length===1?"tissue":"tissues":j.length===1?"region":"regions",he=()=>{const ee=document.getElementById("statsUnitLabel");if(!ee)return;const me=Fe===j.length?`${j.length} ${re}`:`${Fe} of ${j.length} ${re}`,Se=We==="pct"?ge?"100% of ICV":"100% of volume":`${kt(pe)}${ge?" cm³ ICV":" cm³"}`;ee.innerHTML=`${me} &middot; ${Se}`};ve.querySelectorAll(".stat-toggle button").forEach(ee=>{ee.onclick=()=>{We=ee.dataset.mode,ve.querySelectorAll(".stat-toggle button").forEach(me=>{const Se=me===ee;me.classList.toggle("active",Se),me.setAttribute("aria-pressed",String(Se))}),he(),ve.querySelectorAll(".stat-row").forEach(me=>{const Se=me.querySelector(".stat-val"),Re=me.querySelector(".stat-bar");Se.textContent=We==="pct"?Se.dataset.pct:Se.dataset.cm3,Re.style.width=(We==="pct"?Re.dataset.wPct:Re.dataset.wAbs)+"%"})}});const se=document.getElementById("statsFilterInput"),de=document.getElementById("statsEmpty");if(se){const ee=()=>{const me=se.value.trim().toLowerCase();Fe=0,ve.querySelectorAll(".stat-row").forEach(Se=>{const Re=!me||Se.dataset.name.includes(me)||Se.dataset.label===me;Se.hidden=!Re,Re&&Fe++}),de&&(de.hidden=Fe>0),he()};se.oninput=ee,se.addEventListener("keydown",me=>{me.key==="Escape"&&se.value!==""&&(me.preventDefault(),me.stopPropagation(),se.value="",ee())})}ve.querySelectorAll(".stat-trigger").forEach(ee=>{ee.onclick=()=>{const me=ee.closest(".stat-row"),Se=me.querySelector(".stat-detail"),Re=Se.hidden;Se.hidden=!Re,me.classList.toggle("is-expanded",Re),ee.setAttribute("aria-expanded",String(Re))}}),ve.querySelectorAll(".stat-locate").forEach(ee=>{ee.onclick=()=>{const me=parseInt(ee.closest(".stat-row").dataset.label,10),Se=Ve.get(me);Se&&tt(Se,{vol:ge?le.volumes[0]:Ae,labelArr:ge?null:xe,probMap:ge?ne.maps[Se.tissueIndex]:null});const Re=document.getElementById("appDialog");Re&&Re.open&&Re.close()}}),ve.querySelectorAll(".stat-iso").forEach(ee=>{ee.onclick=()=>{const me=parseInt(ee.closest(".stat-row").dataset.label,10);Number.isNaN(me)||(ge?we(me):R(me));const Se=document.getElementById("appDialog");Se&&Se.open&&Se.close()}}),document.getElementById("statsDownloadBtn").onclick=()=>{ge?At(gi(j,pe),"tissue_stats.csv"):Zt(j,ie)}};function Lt(){le.volumes.length<=1&&(M=le.volumes[0]||null,w=M&&M.name?M.name:"input.nii.gz",o=null,a=null,u(null),W(),modelSelect.value="-1",i(),le.volumes[0]&&opacitySlider0.oninput())}const Ut=new Map;function mt(b){return Be(this,null,function*(){if(Ut.has(b))return Ut.get(b);const B=yield(yield fetch(b)).json();return Ut.set(b,B),B})}function Pt(b,P,B=1){let ne=0;for(let j=0;j<256;j++)b[j]>0&&ne++;return(!P||ne!==P.length)&&(t="Failed to Predict Some Labels - "),P.map((j,pe)=>{const ie=pe<256?b[pe]:0,ge=ie>0?`${kt(ie*B)} cm3`:"Missing";return ge==="Missing"&&(t+=`${j}, `),`${j}   ${ge}`})}function Wt(b,P,B){return Be(this,null,function*(){var Ae,Ve;const ne=(Ae=P.probabilityDisplayMin)!=null?Ae:.005,{probabilityOverlayAlpha:j=96,probabilityOverlayFloor:pe=192}=P,ie=(B==null?void 0:B.tint)||[255,255,255],ge=`probability-light-${ie.join("-")}-${pe}-${j}`;if(!le.hasColormap(ge)){const[Je,ve,We]=ie.map(Fe=>Math.round(Fe*pe/255));le.addColormap(ge,{R:[Je,ie[0]],G:[ve,ie[1]],B:[We,ie[2]],A:[0,j],I:[0,255]})}const xe=qn(le.volumes[0],b instanceof Float32Array?b:Float32Array.from(b),(Ve=B==null?void 0:B.name)!=null?Ve:le.volumes[0].name,{scl_inter:0,scl_slope:1,datatypeCode:16,numBitsPerVoxel:32,cal_min:0,cal_max:1,intent_code:1001},{calMin:ne,calMax:1,robustMin:ne,robustMax:1,globalMin:0,globalMax:1,colormapType:1,colormap:ge,opacity:Number(opacitySlider1.value),modulateAlpha:1});return xe.modulationImage=xe.id,yield le.model.addVolume(xe),le.volumes.at(-1)})}function Qt(b,P,B,ne){return Be(this,null,function*(){var Je,ve,We;if(T(),N(),n=null,s=null,o=B,a=B.type==="Brain_Extraction"&&ne||null,u(B),B.outputType==="probability"){const Fe=Array.isArray(b)?b:[b];if(B.probabilityPostprocess==="cat-lite"&&Fe.length===3){const re=le.volumes[0],he=Fe.map(at=>at instanceof Float32Array?at:Float32Array.from(at)),se=Number(opacitySlider1.value),de=re.dimsRAS&&re.img2RASstart&&re.img2RASstep?{dimsRAS:[...re.dimsRAS],img2RASstart:[...re.img2RASstart],img2RASstep:[...re.img2RASstep]}:null,ee=Js(he,B,null,se,de),me=ee.isRasOrdered?{dims:[...de.dimsRAS],permRAS:[1,2,3],img2RASstart:[0,0,0],img2RASstep:[1,de.dimsRAS[1],de.dimsRAS[1]*de.dimsRAS[2]]}:{},Se=ee.isRasOrdered?ot({dims:[3,de.dimsRAS[1],de.dimsRAS[2],de.dimsRAS[3],1,1,1,1]},re.matRAS&&re.matRAS.length>=16?{affine:[[re.matRAS[0],re.matRAS[4],re.matRAS[8],re.matRAS[12]],[re.matRAS[1],re.matRAS[5],re.matRAS[9],re.matRAS[13]],[re.matRAS[2],re.matRAS[6],re.matRAS[10],re.matRAS[14]],[re.matRAS[3],re.matRAS[7],re.matRAS[11],re.matRAS[15]]]}:{}):{},Re=qn(re,ee.rgba,"cat_lite_tissues",$t(ot({},Se),{scl_inter:0,scl_slope:1,datatypeCode:2304,numBitsPerVoxel:32,cal_min:0,cal_max:255,intent_code:1001}),$t(ot({},me),{calMin:0,calMax:255,robustMin:0,robustMax:255,globalMin:0,globalMax:255,opacity:se}));yield le.model.addVolume(Re);const Ye=le.volumes.at(-1);p={maps:he,tissues:ee.tissues,modelEntry:B,rasLayout:ee.isRasOrdered?de:null,rgba:ee.rgba,activeAlphaOffsets:ee.activeAlphaOffsets,activeBaseAlpha:ee.activeBaseAlpha,overlay:Ye}}else for(let re=0;re<Fe.length;re++)yield Wt(Fe[re],B,(Je=B.probabilityTissues)==null?void 0:Je[re]);W(B),yield le.updateGLVolume();return}const j=b instanceof Uint8Array?b:new Uint8Array(b.buffer,b.byteOffset||0,b.byteLength);let pe,ie=null,ge=0,xe={calMin:0,calMax:255,robustMin:0,robustMax:255,globalMin:0,globalMax:255};if(B.type==="Brain_Masking"){const Fe=["Background","Brain Mask"];n=Fe.slice();const re=[0,217],he=[0,119],se=[0,33];s={R:re,G:he,B:se};const de={R:re,G:he,B:se,labels:Fe},ee="brainchop-label-mask";le.addColormap(ee,de),pe=ee,ie=Us(de),ge=1002,xe={calMin:0,calMax:1,robustMin:0,robustMax:1,globalMin:0,globalMax:1}}else if(B.colormapPath){const Fe=cs(j),re=yield mt(B.colormapPath);n=re.labels?re.labels.slice():null,s={R:re.R,G:re.G,B:re.B};const he=le.volumes[0].hdr.pixDims||[],se=he[1]&&he[2]&&he[3]?he[1]*he[2]*he[3]:1,de=re.labels?Pt(Fe,re.labels,se):[],ee=$t(ot(ot({R:re.R,G:re.G,B:re.B},re.I?{I:re.I}:{}),re.A?{A:re.A}:{}),{labels:de}),me=`brainchop-label-${B.id}`;le.addColormap(me,ee),pe=me,ie=Us(ee);const Se=Math.max(1,((We=(ve=re.R)==null?void 0:ve.length)!=null?We:256)-1);ge=1002,xe={calMin:0,calMax:Se,robustMin:0,robustMax:Se,globalMin:0,globalMax:Se}}else{const Fe=cs(j);xe=bi(Fe),pe=P.atlasSelectedColorTable.toLowerCase(),B.type==="Brain_Extraction"&&(pe="copper2"),le.hasColormap(pe)||(pe="actc")}const Ae=qn(le.volumes[0],j,le.volumes[0].name,{datatypeCode:2,numBitsPerVoxel:8,scl_inter:0,scl_slope:1,cal_min:xe.calMin,cal_max:xe.calMax,intent_code:ge},$t(ot($t(ot({},xe),{colormap:pe}),ie?{colormapLabel:ie}:{}),{opacity:Number(opacitySlider1.value)}));yield le.model.addVolume(Ae);const Ve=le.volumes.at(-1);ie&&Ve&&!Ve.colormapLabel&&(Ve.colormapLabel=ie),m=ie?Ve.colormapLabel:null,W(B),yield le.updateGLVolume()})}function ln(b){return Be(this,null,function*(){var P;if(typeof b=="string")try{b=JSON.parse(b)}catch(B){console.error("Failed to parse telemetry data",B);return}b=yield Ja(b,(P=le.view)==null?void 0:P.gl),e=`:: Diagnostics https://github.com/neuroneural/brainchop/issues ::
`;for(const B in b)b[B]!==null&&b[B]!==void 0&&(e+=`${B}: ${b[B]}
`)})}function Rt(b){const P=String(b).split(" · ").map(B=>B.trim()).filter(B=>B!=="");return P.length<=1?Gt(String(b)):P.map((B,ne)=>`<span class="loc-seg"${ne>=2?' style="opacity:.75"':""}>${Gt(B)}</span>`).join('<span class="loc-sep">&middot;</span>')}function gt(b="",P=-1,B="",ne=[]){if(b){console.log(b);const j=document.getElementById("location");j&&(j.innerHTML=Rt(b))}if(isNaN(P)){modelProgress.classList.remove("is-busy");const j=document.getElementById("memstatusItem");j&&(j.hidden=!1),memstatus.style.color="#ef4444",memstatus.textContent="Memory Issue"}else P>=0&&(modelProgress.value=P*modelProgress.max,modelProgress.classList.toggle("is-busy",P>0&&P<1));B&&(Hn?(Yn.push(String(B)),console.warn("[backend]",B)):Dt("Message",Gt(String(B)).replace(/\n/g,"<br>"))),ne&&Object.keys(ne).length>0&&ln(ne)}function Mt(b){y=b.vox;const P=b.string.split("   ").map(j=>j.trim()).filter(j=>j!==""),B=L(),ne=le.volumes[0];if(B&&ne&&y){P.length>1&&P.pop();const j=Vn(ne,y);if(j!==null){const pe=B.maps[0][j]||0,ie=B.maps[1][j]||0,ge=B.maps[2][j]||0;pe+ie+ge>=.005&&P.push(`GM ${pe.toFixed(2)} WM ${ie.toFixed(2)} CSF ${ge.toFixed(2)}`)}}document.getElementById("location").innerHTML=P.map(j=>`<span class="loc-seg">${Gt(j)}</span>`).join('<span class="loc-sep">&middot;</span>')}const nt=new URLSearchParams(window.location.search).get("viewer")==="webgpu"?"webgpu":"webgl2",le=new Yo({backend:nt,matcaps:{Shiny:Ko}});yield le.attachTo("gl1"),console.info("NiiVue viewer backend:",le.backend),le.backgroundColor=[0,0,0,1],le.is3DCrosshairVisible=!0,le.clipPlaneColor=[.7,0,.7,.5],le.gamma=1,le.volumeTransforms.includes(Rs.name)||le.registerVolumeTransform(Rs),le.isLegendVisible=!1,le.addEventListener("locationChange",b=>Mt(b.detail)),le.canvas.addEventListener("click",te),window.addEventListener("keydown",b=>{b.key==="Escape"&&(document.querySelector("dialog[open]")||(g!==null?(g=null,O()):c!==null&&(c=null,ye())))});const st=le.drawScene.bind(le);le.drawScene=function(b){const P=st(b);try{ae(),z()}catch(B){console.warn("isolation HUD draw failed",B)}return P},window.addEventListener("resize",z),le.primaryDragMode=Ls.crosshair,le.secondaryDragMode=Ls.slicer3D,le.showRender=Zo.ALWAYS,le.isYoked3DTo2DZoom=!1,le.crosshairGap=11;{const b=document.getElementById("dragSegmented");b&&b.querySelectorAll("button").forEach(P=>P.classList.toggle("active",parseInt(P.dataset.drag,10)===le.secondaryDragMode))}le.volumeIsNearestInterpolation=!0,yield le.loadVolumes([{url:"./t1_crop.nii.gz"}]),modelSelect.innerHTML="";const vt=document.createElement("option");vt.text="Run Segmentation Model",vt.value="-1",vt.disabled=!0,vt.selected=!0,vt.hidden=!0,modelSelect.appendChild(vt);for(let b=0;b<wn.length;b++){console.log(`Adding model option: ${wn[b].modelName}`);const P=document.createElement("option");P.text=wn[b].modelName,P.value=b,wn[b].type==="Divider"&&(P.disabled=!0),modelSelect.appendChild(P)}le.addEventListener("volumeLoaded",Lt),Lt(),pi(le),ii(le),modelSelect.value="-1",i(),k(-1),yield no((Ct=le.view)==null?void 0:Ct.gl);const xt=new URLSearchParams(window.location.search).get("model");xt!==null&&xt!==""&&Number(xt)>=0&&Number(xt)<wn.length?(modelSelect.value=String(Number(xt)),i(),Q()):dn&&nn&&(window.requestIdleCallback?P=>window.requestIdleCallback(P,{timeout:600}):P=>setTimeout(P,200))(()=>Ia(nn))})}function Gt(e){return String(e).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function vi(e){const n=(Yn.length?Yn:[e&&e.message?e.message:String(e||"unknown error")]).map(s=>`<li>${Gt(s)}</li>`).join("");Dt("Segmentation failed",`<p>No available backend could run this model on this device.</p>
     <ul style="margin:0 0 4px 1.1em;padding:0;font-size:0.92em;line-height:1.45">${n}</ul>
     <p style="font-size:0.88em;color:#9aa4af">Full details are in the browser console and under Diagnostics.</p>`)}function Dt(e,t,n={}){const s=document.getElementById("appDialog"),o=document.getElementById("dialogTitle"),a=document.getElementById("dialogMessage"),r=document.getElementById("dialogCloseBtn");if(!s)return;o.textContent=e,a.innerHTML=t,r.style.display=n.hideClose?"none":"",r.onclick=()=>s.close(),s.classList.toggle("dialog-save",!!n.saveMode),s.classList.toggle("dialog-stats",!!n.statsMode);const i=document.getElementById("dialogXBtn");i&&(i.onclick=()=>s.close()),s.showModal()}const oo="brainchop:gh-stars:v1",xi=360*60*1e3;function yi(){return Be(this,null,function*(){var n,s;const e=document.getElementById("star-count");if(!e)return;let t=null;try{const o=(n=window.localStorage)==null?void 0:n.getItem(oo);if(o){const a=JSON.parse(o);a&&typeof a.count=="number"&&Number.isFinite(a.count)&&(t=a,e.textContent=String(a.count))}}catch(o){}if(!(t&&typeof t.ts=="number"&&Date.now()-t.ts<xi))try{const o=yield fetch("https://api.github.com/repos/neuroneural/brainchop");if(!o.ok)return;const a=yield o.json();if(typeof(a==null?void 0:a.stargazers_count)=="number"&&Number.isFinite(a.stargazers_count)){e.textContent=String(a.stargazers_count);try{(s=window.localStorage)==null||s.setItem(oo,JSON.stringify({count:a.stargazers_count,ts:Date.now()}))}catch(r){}}}catch(o){console.error("Error fetching star count:",o)}})}(function(){return Be(this,null,function*(){yield wi(),yield yi()})})();export{uo as a,lo as d,io as p};
