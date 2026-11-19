const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./dkatlas24_int8_v3_runner-CdonE2Jv.js","./vendor-niivue-Cvdr5q4M.js","./vendor-FBY2Vxgc.js","./vendor-math-oqRZD8Fx.js"])))=>i.map(i=>d[i]);
var Wr=Object.defineProperty,qr=Object.defineProperties;var Rr=Object.getOwnPropertyDescriptors;var Rn=Object.getOwnPropertySymbols;var Ms=Object.prototype.hasOwnProperty,As=Object.prototype.propertyIsEnumerable;var Dt=Math.pow,ks=(e,t,n)=>t in e?Wr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,bt=(e,t)=>{for(var n in t||(t={}))Ms.call(t,n)&&ks(e,n,t[n]);if(Rn)for(var n of Rn(t))As.call(t,n)&&ks(e,n,t[n]);return e},Ct=(e,t)=>qr(e,Rr(t));var Ps=(e,t)=>{var n={};for(var s in e)Ms.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&Rn)for(var s of Rn(e))t.indexOf(s)<0&&As.call(e,s)&&(n[s]=e[s]);return n};var Be=(e,t,n)=>new Promise((s,r)=>{var i=f=>{try{a(n.next(f))}catch(l){r(l)}},o=f=>{try{a(n.throw(f))}catch(l){r(l)}},a=f=>f.done?s(f.value):Promise.resolve(f.value).then(i,o);a((n=n.apply(e,t)).next())});import{z as Ln,$ as Ir,t as Gr,L as zs,Y as Er,M as Cs,a as Tr,_ as Or}from"./vendor-niivue-Cvdr5q4M.js";import{l as Nr,n as Dr,p as Vr}from"./vendor-math-oqRZD8Fx.js";import"./vendor-FBY2Vxgc.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();const Hr="modulepreload",jr=function(e,t){return new URL(e,t).href},Bs={},dt=function(t,n,s){let r=Promise.resolve();if(n&&n.length>0){let l=function(u){return Promise.all(u.map(d=>Promise.resolve(d).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),f=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=l(n.map(u=>{if(u=jr(u,s),u in Bs)return;Bs[u]=!0;const d=u.endsWith(".css"),g=d?'[rel="stylesheet"]':"";if(s)for(let p=o.length-1;p>=0;p--){const m=o[p];if(m.href===u&&(!d||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${g}`))return;const c=document.createElement("link");if(c.rel=d?"stylesheet":Hr,d||(c.as="script"),c.crossOrigin="",c.href=u,f&&c.setAttribute("nonce",f),document.head.appendChild(c),d)return new Promise((p,m)=>{c.addEventListener("load",p),c.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return t().catch(i)})};function Xr(e){return new Worker(""+new URL("conform-worker-CLIpQIO-.js",import.meta.url).href,{name:e==null?void 0:e.name})}const Pt=256,In=Pt*Pt*Pt;function Yr(e,t){if(!(e instanceof ArrayBuffer))return e;switch(t){case 2:return new Uint8Array(e);case 4:return new Int16Array(e);case 8:return new Int32Array(e);case 16:return new Float32Array(e);case 64:return new Float64Array(e);case 256:return new Int8Array(e);case 512:return new Uint16Array(e);case 768:return new Uint32Array(e);case 1024:return new BigInt64Array(e);case 1280:return new BigUint64Array(e);default:return new Float32Array(e)}}function Kr(e){return e[0]*(e[5]*e[10]-e[6]*e[9])-e[1]*(e[4]*e[10]-e[6]*e[8])+e[2]*(e[4]*e[9]-e[5]*e[8])}function Zr(e){if(!e||e.length<16)return!1;for(let t=0;t<16;t++)if(!Number.isFinite(e[t]))return!1;return Math.abs(Kr(e))>=1e-6}function Qr(e){const t=e[0],n=e[1],s=e[2],r=e[3],i=e[4],o=e[5],a=e[6],f=e[7],l=e[8],u=e[9],d=e[10],g=e[11],c=o*d-a*u,p=-(i*d-a*l),m=i*u-o*l,b=t*c+n*p+s*m;if(!Number.isFinite(b)||Math.abs(b)<1e-12)throw new Error("Cannot conform volume: singular affine transform.");const M=1/b,_=c*M,w=-(n*d-s*u)*M,v=(n*a-s*o)*M,S=p*M,h=(t*d-s*l)*M,k=-(t*a-s*i)*M,F=m*M,$=-(t*u-n*l)*M,A=(t*o-n*i)*M,x=-(_*r+w*f+v*g),C=-(S*r+h*f+k*g),z=-(F*r+$*f+A*g);return[_,w,v,x,S,h,k,C,F,$,A,z,0,0,0,1]}function Jr(e,t){const n=new Array(16);for(let s=0;s<3;s++){const r=s*4,i=e[r],o=e[r+1],a=e[r+2],f=e[r+3];n[r]=i*t[0]+o*t[4]+a*t[8],n[r+1]=i*t[1]+o*t[5]+a*t[9],n[r+2]=i*t[2]+o*t[6]+a*t[10],n[r+3]=i*t[3]+o*t[7]+a*t[11]+f}return n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function eo(e,t,n,s,r=!1){const i=e*.5,o=t*.5,a=n*.5,f=s[0]*i+s[1]*o+s[2]*a+s[3],l=s[4]*i+s[5]*o+s[6]*a+s[7],u=s[8]*i+s[9]*o+s[10]*a+s[11],d=Pt*.5;return r?[1,0,0,f-d,0,1,0,l-d,0,0,1,u-d,0,0,0,1]:[-1,0,0,f+d,0,0,1,l-d,0,-1,0,u+d,0,0,0,1]}function to(e,t=.999){const n=e.length;if(n===0)return{srcMin:0,srcMax:0,scale:1,flooredNegative:!1};let s=1/0,r=-1/0,i=0,o=0;for(let m=0;m<n;m++){let b=e[m];Number.isFinite(b)||(b=0,e[m]=0),b<s&&(s=b),b>r&&(r=b),(b>=1e-15||b<=-1e-15)&&i++,b<0&&o++}let a=!1;s<0&&100*o/n<2&&(s=0,a=!0);const f=Math.fround((r-s)/1e3);if(!(f>0)){for(let m=0;m<n;m++){const b=e[m];e[m]=b<=0?0:b>=255?255:b}return{srcMin:s,srcMax:r,scale:1,flooredNegative:a}}const l=new Uint32Array(1e3);for(let m=0;m<n;m++){const b=Math.fround((e[m]-s)/f),M=b<=0?0:b>=999?999:Math.trunc(b);l[M]++}const u=Math.max(0,Math.min(1,1-t)),d=n-Math.floor(u*i);let g=0,c=0;for(;c<999&&(g+=l[c],!(g+l[c+1]>=d));c++);r=Math.fround(c*f+s);const p=s!==r?Math.fround(255/(r-s)):1;for(let m=0;m<n;m++){const b=p*(e[m]-s);e[m]=b<=0?0:b>=255?255:b}return{srcMin:s,srcMax:r,scale:p,flooredNegative:a}}function no({img:e,datatypeCode:t,dims:n,affine:s,sclSlope:r=1,sclInter:i=0,toRAS:o=!1,isLinear:a=!0,asFloat32:f=!1,fHigh:l=.999}){const u=n[1]|0,d=n[2]|0,g=n[3]|0;if(u<1||d<1||g<1)throw new Error(`Invalid input volume dimensions: [${u}, ${d}, ${g}]`);const c=Array.isArray(s[0])?s.flat():Array.from(s);if(!Zr(c))throw new Error("Cannot conform volume: invalid or singular affine matrix.");const p=Yr(e,t),m=u*d*g;if(!p||p.length<m)throw new Error(`Input buffer length (${p?p.length:0}) is smaller than ${u}x${d}x${g}`);const b=Number.isFinite(r)&&r!==0?r:1,M=Number.isFinite(i)?i:0,_=new Float32Array(m),w=p instanceof BigInt64Array||p instanceof BigUint64Array;let v=0;if(w)for(let A=0;A<m;A++){const x=Number(p[A])*b+M;Number.isFinite(x)?(_[A]=x,v++):_[A]=0}else if(b===1&&M===0)for(let A=0;A<m;A++){const x=p[A];Number.isFinite(x)?(_[A]=x,v++):_[A]=0}else for(let A=0;A<m;A++){const x=p[A]*b+M;Number.isFinite(x)?(_[A]=x,v++):_[A]=0}if(v===0)throw new Error("Input volume contains no finite voxel values.");to(_,l);const S=eo(u,d,g,c,o),h=Qr(c),k=Jr(h,S);let F=u===Pt&&d===Pt&&g===Pt;for(let A=0;A<3&&F;A++){const x=A*4;let C=Math.abs(k[x+3]);for(let z=0;z<3;z++)C+=Math.abs(k[x+z]-(A===z?1:0))*(Pt-1);F=C<.001}const $=f?new Float32Array(In):new Uint8Array(In);if(F)if(f)for(let A=0;A<In;A++)$[A]=_[A]*(1/255);else for(let A=0;A<In;A++){const x=_[A];$[A]=x<=0?0:x>=255?255:Math.round(x)}else{let A=_[0];for(let pe=1;pe<m;pe++)_[pe]<A&&(A=_[pe]);A!==0&&$.fill(f?A*(1/255):Math.min(255,Math.max(0,Math.round(A))));const x=k[0],C=k[1],z=k[2],I=k[3],E=k[4],T=k[5],B=k[6],O=k[7],ae=k[8],ce=k[9],V=k[10],W=k[11],j=u*d,ee=u-1,G=d-1,ie=g-1,le=1/255;let Ae=0;if(a)for(let pe=0;pe<Pt;pe++){const Me=pe*z+I,H=pe*B+O,ne=pe*V+W;for(let P=0;P<Pt;P++){const Y=P*C+Me,D=P*T+H,re=P*ce+ne;for(let te=0;te<Pt;te++,Ae++){const Q=te*x+Y,N=te*E+D,X=te*ae+re,q=Math.floor(Q),_e=Math.floor(N),se=Math.floor(X);if(q<0||_e<0||se<0||q>=ee||_e>=G||se>=ie)continue;const Le=Q-q,Ce=N-_e,Ve=X-se,Ge=1-Le,Qe=1-Ce,He=1-Ve,Fe=q+_e*u+se*j,Se=_[Fe]*Ge+_[Fe+1]*Le,Ye=_[Fe+u]*Ge+_[Fe+u+1]*Le,pt=_[Fe+j]*Ge+_[Fe+j+1]*Le,it=_[Fe+u+j]*Ge+_[Fe+u+j+1]*Le,ft=(Se*Qe+Ye*Ce)*He+(pt*Qe+it*Ce)*Ve;if(f)$[Ae]=ft<=0?0:ft>=255?1:ft*le;else{const Bt=Math.fround(ft);$[Ae]=Bt<=0?0:Bt>=255?255:Math.floor(Bt+.5)}}}}else for(let pe=0;pe<Pt;pe++){const Me=pe*z+I,H=pe*B+O,ne=pe*V+W;for(let P=0;P<Pt;P++){const Y=P*C+Me,D=P*T+H,re=P*ce+ne;for(let te=0;te<Pt;te++,Ae++){const Q=Math.round(te*x+Y),N=Math.round(te*E+D),X=Math.round(te*ae+re);if(Q<0||N<0||X<0||Q>=u||N>=d||X>=g)continue;const q=_[Q+N*u+X*j];f?$[Ae]=q<=0?0:q>=255?1:q*le:$[Ae]=q<=0?0:q>=255?255:Math.floor(q+.5)}}}}return{img:$,dims:[3,Pt,Pt,Pt,1,1,1,1],pixDims:[1,1,1,1,1,0,0,0],affine:S,datatypeCode:f?16:2,bitsPerVoxel:f?32:8,sclSlope:1,sclInter:0,calMin:0,calMax:0}}let Mn=null,so=1;const zn=new Map;function ro(e){Mn&&(Mn.terminate(),Mn=null);for(const{reject:t}of zn.values())t(e);zn.clear()}function oo(){if(Mn)return Mn;const e=new Xr({});return e.onmessage=t=>{const{id:n,result:s,error:r}=t.data,i=zn.get(n);i&&(zn.delete(n),r?i.reject(new Error(r)):i.resolve(s))},e.onerror=t=>{const n=(t==null?void 0:t.message)||"Conform worker crashed";ro(new Error(n))},Mn=e,e}function ao(e){return typeof Worker=="undefined"?Promise.resolve(no(e)):new Promise((t,n)=>{const s=so++;zn.set(s,{resolve:t,reject:n});try{oo().postMessage({id:s,payload:e})}catch(r){zn.delete(s),n(r)}})}function io(e,t){const n=Object.assign(Object.create(Object.getPrototypeOf(e)||Object.prototype),JSON.parse(JSON.stringify(e)));return n.datatypeCode=t.datatypeCode,n.numBitsPerVoxel=t.bitsPerVoxel,n.scl_slope=t.sclSlope,n.scl_inter=t.sclInter,n.cal_min=t.calMin,n.cal_max=t.calMax,n.dims=t.dims,n.pixDims=t.pixDims,n.affine=[[t.affine[0],t.affine[1],t.affine[2],t.affine[3]],[t.affine[4],t.affine[5],t.affine[6],t.affine[7]],[t.affine[8],t.affine[9],t.affine[10],t.affine[11]],[0,0,0,1]],n.sform_code=1,n.qform_code=0,n}const Fs={name:"conform",description:"Reslice to 256×256×256 isotropic 1 mm volume with negative-ringing floor and 0–99.9% intensity scaling",options:[{name:"toRAS",type:"checkbox",label:"Output RAS orientation",default:!1},{name:"isLinear",type:"checkbox",label:"Linear interpolation",default:!0},{name:"asFloat32",type:"checkbox",label:"Output as Float32",default:!1}],apply(s,r){return Be(this,arguments,function*(e,t,n={}){var a,f,l,u;const i={img:t,datatypeCode:e.datatypeCode,dims:[...e.dims],affine:Array.isArray(e.affine[0])?e.affine.flat():[...e.affine],sclSlope:e.scl_slope||1,sclInter:e.scl_inter||0,toRAS:(a=n.toRAS)!=null?a:!1,isLinear:(f=n.isLinear)!=null?f:!0,asFloat32:(l=n.asFloat32)!=null?l:!1,fHigh:(u=n.fHigh)!=null?u:.999},o=yield ao(i);return{hdr:io(e,o),img:o.img}})}},gn=new WeakMap;class lo{getLabelMeta(t){return gn.get(t)||null}idx(t,n,s,r){return s*r[0]*r[1]+n*r[0]+t}check_previous_slice(t,n,s,r,i,o,a,f,l,u){let d=0;if(!i)return 0;const g=t[this.idx(s,r,i,o)];if(a>=6){const c=this.idx(s,r,i-1,o);g===t[c]&&(l[d++]=n[c])}if(a>=18){if(s){const c=this.idx(s-1,r,i-1,o);g===t[c]&&(l[d++]=n[c])}if(r){const c=this.idx(s,r-1,i-1,o);g===t[c]&&(l[d++]=n[c])}if(s<o[0]-1){const c=this.idx(s+1,r,i-1,o);g===t[c]&&(l[d++]=n[c])}if(r<o[1]-1){const c=this.idx(s,r+1,i-1,o);g===t[c]&&(l[d++]=n[c])}}if(a===26){if(s&&r){const c=this.idx(s-1,r-1,i-1,o);g===t[c]&&(l[d++]=n[c])}if(s<o[0]-1&&r){const c=this.idx(s+1,r-1,i-1,o);g===t[c]&&(l[d++]=n[c])}if(s&&r<o[1]-1){const c=this.idx(s-1,r+1,i-1,o);g===t[c]&&(l[d++]=n[c])}if(s<o[0]-1&&r<o[1]-1){const c=this.idx(s+1,r+1,i-1,o);g===t[c]&&(l[d++]=n[c])}}return d?(this.fill_tratab(f,l,d,u),l[0]):0}do_initial_labelling(t,n,s,r=null){const i=n[0]|0,o=n[1]|0,a=n[2]|0,f=i*o,l=f*a;let u=1;const d=8192;let g=d,c=new Uint32Array(g),p;if(s===6&&r&&r.il&&r.il.length===l){if(p=r.il,r.dirty)p.fill(0);else if(r.runs&&r.runLen>0){const _=r.runs,w=r.runLen;for(let v=0;v<w;v+=2)p.fill(0,_[v],_[v+1])}}else p=new Uint32Array(l),s===6&&r&&(r.il=p,r.runs=null,r.runLen=0,r.dirty=!1);if(s===6){r&&(r.dirty=!0);const _=(t instanceof Uint8Array||t instanceof Uint8ClampedArray)&&(t.byteOffset&3)===0&&(i&3)===0&&t.length>=l?new Uint32Array(t.buffer,t.byteOffset,l>>2):null;let w=r&&r.runs?r.runs:new Uint32Array(8192),v=w.length,S=0,h=0,k=0,F=0,$=-1,A=-1,x=a,C=-1;for(let z=0;z<a;z++){const I=z*f;for(let E=0;E<o;E++){const T=I+E*i;let B=0;if(_){const ae=T+i>>2;let ce=T>>2;for(;ce<ae&&_[ce]===0;)ce++;if(ce===ae)continue;B=(ce<<2)-T}let O=!1;for(;B<i;B++){const ae=T+B;if(_&&!O&&(B&3)===0&&_[ae>>2]===0){B+=3;continue}const ce=t[ae];if(ce===0){O&&(w[S++]=ae,O=!1);continue}if(!O){if(S+2>v){v<<=1;const W=new Uint32Array(v);W.set(w),w=W}w[S++]=ae,O=!0}$<0&&($=ae,x=z),A=ae,C=z;let V=0;if(z>0&&t[ae-f]===ce&&(h=p[ae-f],V=1),B>0&&t[ae-1]===ce){const W=p[ae-1];V===0?h=W:V===1?k=W:F=W,V++}if(E>0&&t[ae-i]===ce){const W=p[ae-i];V===0?h=W:V===1?k=W:F=W,V++}if(V===0){if(p[ae]=u,u>=g){g+=d;const W=new Uint32Array(g);W.set(c),c=W}c[u-1]=u,u++}else if(p[ae]=h,V===2&&k!==h){let W=h;for(;c[W-1]!==W;)W=c[W-1];let j=k;for(;c[j-1]!==j;)j=c[j-1];const ee=W<j?W:j;c[W-1]=ee,c[j-1]=ee}else if(V===3&&(k!==h||F!==h)){let W=h;for(;c[W-1]!==W;)W=c[W-1];let j=k;for(;c[j-1]!==j;)j=c[j-1];let ee=F;for(;c[ee-1]!==ee;)ee=c[ee-1];let G=W<j?W:j;ee<G&&(G=ee),c[W-1]=G,c[j-1]=G,c[ee-1]=G}}O&&(w[S++]=T+i)}}for(let z=0;z<u-1;z++){let I=z;for(;c[I]!==I+1;)I=c[I]-1;c[z]=I+1}return r&&(r.runs=w,r.runLen=S,r.dirty=!1),this._lastInitialRange={conn:6,fgStart:$,fgEnd:A,minSl:x,maxSl:C,runs:w,runLen:S},[u-1,c,p]}const m=new Uint32Array(32),b=new Uint32Array(32),M=new Uint32Array(27);for(let _=0;_<a;_++)for(let w=0;w<o;w++)for(let v=0;v<i;v++){let S=0;const h=t[this.idx(v,w,_,n)];if(h!==0){if(M[0]=this.check_previous_slice(t,p,v,w,_,n,s,c,m,b),M[0]&&(S+=1),s>=6){if(v){const k=this.idx(v-1,w,_,n);h===t[k]&&(M[S++]=p[k])}if(w){const k=this.idx(v,w-1,_,n);h===t[k]&&(M[S++]=p[k])}}if(s>=18){if(w&&v){const k=this.idx(v-1,w-1,_,n);h===t[k]&&(M[S++]=p[k])}if(w&&v<i-1){const k=this.idx(v+1,w-1,_,n);h===t[k]&&(M[S++]=p[k])}}if(S)p[this.idx(v,w,_,n)]=M[0],this.fill_tratab(c,M,S,b);else{if(p[this.idx(v,w,_,n)]=u,u>=g){g+=d;const k=new Uint32Array(g);k.set(c),c=k}c[u-1]=u,u++}}}for(let _=0;_<u-1;_++){let w=_;for(;c[w]!==w+1;)w=c[w]-1;c[_]=w+1}return this._lastInitialRange=null,[u-1,c,p]}fill_tratab(t,n,s,r){let o=2147483647;for(let a=0;a<s;a++){let f=n[a];for(;t[f-1]!==f;)f=t[f-1];r[a]=f,o=Math.min(o,f)}for(let a=0;a<s;a++)t[r[a]-1]=o}translate_labels(t,n,s,r,i=null,o=null){const a=n[0]*n[1]*n[2];if(o&&(r===0||o.fgStart<0))return i&&(this._lastMeta={conn:o.conn,cl:0,fgStart:0,fgEnd:-1,minSl:0,maxSl:-1,ls2bw:new Uint32Array(1),sumls:new Uint32Array(1),distinctFgClasses:0,bw:i}),[0,t];let f=0;for(let m=0;m<r;m++)s[m]>f&&(f=s[m]);const l=new Uint32Array(f+1),u=i&&o?new Uint32Array(r+1):null,d=i&&o?new Uint32Array(r+1):null,g=o?o.fgStart:0,c=o?o.fgEnd:a-1;let p=0;if(o&&o.runs){const m=o.runs,b=o.runLen;for(let M=0;M<b;M+=2){const _=m[M],w=m[M+1];for(let v=_;v<w;v++){const S=s[t[v]-1];let h=l[S];h||(p+=1,h=p,l[S]=h,u&&(u[h]=i[v])),t[v]=h,d&&d[h]++}}}else for(let m=g;m<=c;m++){const b=t[m];if(b){const M=s[b-1];let _=l[M];_||(p+=1,_=p,l[M]=_,u&&(u[_]=i[m])),t[m]=_,d&&d[_]++}}if(i&&o){const m=u.slice(0,p+1),b=d.slice(0,p+1);let M=0;if(p>0){const _=m[1];M=1;for(let w=2;w<=p;w++)if(m[w]!==_){M=2;break}}this._lastMeta={conn:o.conn,cl:p,fgStart:o.fgStart,fgEnd:o.fgEnd,minSl:o.minSl,maxSl:o.maxSl,runs:o.runs,runLen:o.runLen,ls2bw:m,sumls:b,distinctFgClasses:M,bw:i}}return[p,t]}neighbor_winners(t,n,s,r,i=null,o=null){const a=n[0],f=n[1],l=n[2],u=a*f,d=!!(o&&i);let g=!1;for(let v=1;v<=r;v++)if(!s[v]){g=!0;break}if(!g)return d&&console.log("[relabel] 0/0 suppressed components resolved within their own class family (0 fell back to the unrestricted neighbour vote)"),new Uint32Array(r+1);const c=d?new Int32Array(r+1).fill(-1):null,p=new Map,m=(v,S)=>{let h=p.get(v);h||(h=new Map,p.set(v,h)),h.set(S,(h.get(S)||0)+1)},b=gn.get(t),M=b&&b.cl===r&&t.length===u*l;if(M&&b.runs){const v=b.runs,S=b.runLen;for(let h=0;h<S;h+=2){const k=v[h],F=v[h+1],$=k/u|0,A=k-$*u,x=A/a|0;let C=A-x*a;for(let z=k;z<F;z++,C++){const I=t[z];if(s[I])continue;d&&c[I]<0&&(c[I]=o(i[z]));let E;C>0&&(E=s[t[z-1]])&&m(I,E),C<a-1&&(E=s[t[z+1]])&&m(I,E),x>0&&(E=s[t[z-a]])&&m(I,E),x<f-1&&(E=s[t[z+a]])&&m(I,E),$>0&&(E=s[t[z-u]])&&m(I,E),$<l-1&&(E=s[t[z+u]])&&m(I,E)}}}else{const v=M?b.minSl:0,S=M?b.maxSl:l-1;let h=v*u;for(let k=v;k<=S;k++)for(let F=0;F<f;F++)for(let $=0;$<a;$++,h++){const A=t[h];if(A===0||s[A])continue;d&&c[A]<0&&(c[A]=o(i[h]));let x;$>0&&(x=s[t[h-1]])&&m(A,x),$<a-1&&(x=s[t[h+1]])&&m(A,x),F>0&&(x=s[t[h-a]])&&m(A,x),F<f-1&&(x=s[t[h+a]])&&m(A,x),k>0&&(x=s[t[h-u]])&&m(A,x),k<l-1&&(x=s[t[h+u]])&&m(A,x)}}const _=new Uint32Array(r+1).fill(0);let w=0;for(const[v,S]of p){const h=d?c[v]:0;let k=0,F=0;if(h>0){for(const[$,A]of S)o($)===h&&(A>F||A===F&&(k===0||$<k))&&(F=A,k=$);k&&w++}if(!k)for(const[$,A]of S)(A>F||A===F&&(k===0||$<k))&&(F=A,k=$);_[v]=k}return d&&console.log(`[relabel] ${w}/${p.size} suppressed components resolved within their own class family (${p.size-w} fell back to the unrestricted neighbour vote)`),_}finalize_volume(t,n,s,r,i,o=null,a=null,f=!1){const l=t.length,u=i?this.neighbor_winners(t,n,s,r,o,a):null,d=u?new Uint32Array(r+1):s;let g=0;for(let _=1;_<=r;_++){let w=s[_];u&&(w||(w=u[_]),d[_]=w),w>g&&(g=w)}const c=gn.get(t),p=c&&c.cl===r&&c.ls2bw.length===r+1&&c.fgEnd<l;let m=0;if(p&&c.runs){const _=c.runs,w=c.runLen;for(let h=1;h<=r;h++)c.sumls[h]>0&&d[h]>m&&(m=d[h]);if(c.bw===o&&o instanceof Uint8Array&&g<=255){const h=new Uint8Array(r+1);let k=!1;for(let $=1;$<=r;$++)c.sumls[$]>0&&d[$]!==c.ls2bw[$]&&(h[$]=1,k=!0);const F=f?o:o.slice();if(k)for(let $=0;$<w;$+=2){const A=_[$],x=_[$+1];for(let C=A;C<x;C++){const z=t[C];h[z]&&(F[C]=d[z])}}return[m,F]}const S=o instanceof Uint8Array&&g<=255?new Uint8Array(l):new Uint32Array(l);for(let h=0;h<w;h+=2){const k=_[h],F=_[h+1];for(let $=k;$<F;$++){const A=d[t[$]];A&&(S[$]=A)}}return[m,S]}const M=o instanceof Uint8Array&&g<=255?new Uint8Array(l):new Uint32Array(l);if(p){if(c.fgStart>=0&&c.fgEnd>=c.fgStart)for(let _=c.fgStart;_<=c.fgEnd;_++){const w=t[_];if(w!==0){const v=d[w];v&&(M[_]=v,v>m&&(m=v))}}}else for(let _=0;_<l;_++){const w=t[_];if(w!==0){const v=d[w];v&&(M[_]=v,v>m&&(m=v))}}return[m,M]}diagnose_components(t,n,s,r,i={}){var $,A,x;const o=($=i.topN)!=null?$:50,a=(A=i.minSize)!=null?A:1,f=(x=i.label)!=null?x:"diag",l=r[0],u=r[1],d=r[2],g=l*u,c=new Uint32Array(n+1),p=new Uint32Array(n+1);for(let C=0;C<t.length;C++){const z=s[C];z&&(c[z]=t[C],p[z]++)}const m=new Map,b=new Uint32Array(n+1),M=new Uint32Array(n+1),_=(C,z)=>{let I=m.get(C);I||(I=new Map,m.set(C,I)),I.set(z,(I.get(z)||0)+1)};for(let C=0;C<d;C++)for(let z=0;z<u;z++)for(let I=0;I<l;I++){const E=C*g+z*l+I,T=s[E];if(!T)continue;const B=c[T],O=ae=>{const ce=s[ae];if(ce===T)return;M[T]++;const V=ce?c[ce]:0;V===0?b[T]++:V!==B&&_(T,V)};I>0&&O(E-1),I<l-1&&O(E+1),z>0&&O(E-l),z<u-1&&O(E+l),C>0&&O(E-g),C<d-1&&O(E+g)}const w=new Map,v=new Map;for(let C=1;C<=n;C++){const z=c[C];w.set(z,(w.get(z)||0)+1),(!v.has(z)||p[C]>v.get(z))&&v.set(z,p[C])}const S=[];for(let C=1;C<=n;C++){if(p[C]<a)continue;const z=c[C],I=m.get(C);let E=0,T=0,B=0;if(I)for(const[ae,ce]of I)B+=ce,ce>T&&(T=ce,E=ae);const O=M[C]||1;S.push({comp:C,class:z,size:p[C],largestOfClass:p[C]===v.get(z)?"Y":"n",compsInClass:w.get(z),domNeighbor:E,domFracForeign:B?+(T/B).toFixed(2):0,domFracBoundary:+(T/O).toFixed(2),bgFrac:+(b[C]/O).toFixed(2)})}S.sort((C,z)=>z.domFracForeign-C.domFracForeign||z.size-C.size);const h=(C,z)=>{const I=z.map(T=>Math.max(T.h.length,...C.map(B=>String(B[T.k]).length))),E=T=>T.map((B,O)=>String(B).padStart(I[O])).join("  ");return[E(z.map(T=>T.h)),...C.map(T=>E(z.map(B=>T[B.k])))].join(`
`)},k=[{k:"comp",h:"comp"},{k:"class",h:"class"},{k:"size",h:"size"},{k:"largestOfClass",h:"lrg"},{k:"compsInClass",h:"nComp"},{k:"domNeighbor",h:"domNbr"},{k:"domFracForeign",h:"encF"},{k:"domFracBoundary",h:"encB"},{k:"bgFrac",h:"bgF"}];console.log(`[${f}] total components=${n}, distinct classes=${w.size}
[${f}] island candidates (encF≈1 + small size + lrg=n ⇒ swallowed island):
`+h(S.slice(0,o),k));const F=[...w.entries()].map(([C,z])=>({class:C,components:z,maxCompSize:v.get(C)})).sort((C,z)=>z.components-C.components);return console.log(`[${f}] per-class component counts (components=1 ⇒ fully connected):
`+h(F.slice(0,30),[{k:"class",h:"class"},{k:"components",h:"comps"},{k:"maxCompSize",h:"maxSize"}])),S}_collectComponentStats(t,n,s){const r=gn.get(s);if(r&&r.cl===n&&r.bw===t&&s.length===t.length)return[r.ls2bw,r.sumls];const i=t.length,o=new Uint32Array(n+1),a=new Uint32Array(n+1);for(let f=0;f<i;f++){const l=s[f];l>0&&(o[l]=t[f],a[l]++)}return[o,a]}_buildKeptMap(t,n,s,r,i){const o=new Uint32Array(s+1);let a=0;for(let l=1;l<=s;l++)t[l]>a&&(a=t[l]);const f=r==="all";if(a<=65535){const l=new Uint32Array(a+1),u=new Uint32Array(a+1);for(let d=1;d<=s;d++){const g=t[d];if(g!==0)if(f||r&&r.has&&r.has(g)){const c=n[d];(!u[g]||(i?c>=l[g]:c>l[g]))&&(l[g]=c,u[g]=d)}else o[d]=g}for(let d=1;d<=a;d++){const g=u[d];g>0&&(o[g]=d)}}else{const l=new Map;for(let u=1;u<=s;u++){const d=t[u];if(d!==0)if(f||r&&r.has&&r.has(d)){const g=n[u],c=l.get(d);(!c||(i?g>=c.sz:g>c.sz))&&l.set(d,{c:u,sz:g})}else o[u]=d}for(const[u,{c:d}]of l)o[d]=u}return o}largest_original_cluster_labels(t,n,s,r=null,i=!1,o=null,a=!1){const[f,l]=this._collectComponentStats(t,n,s),u=this._buildKeptMap(f,l,n,"all",!0);return this.finalize_volume(s,r,u,n,i,t,o,a)}filter_clusters(t,n,s,r,i=null,o=!1,a=null,f=!1){const[l,u]=this._collectComponentStats(t,n,s),d=this._buildKeptMap(l,u,n,r,!1);return this.finalize_volume(s,i,d,n,o,t,a,f)}filter_clusters_by_ratio(t,n,s,r,i=null,o=!1,a=null){const f=t.length,l=new Uint32Array(n+1).fill(0),u=new Uint32Array(n+1).fill(0);for(let p=0;p<f;p++){const m=s[p];m>0&&(l[m]===0&&(l[m]=t[p]),u[m]++)}const d=new Map;for(let p=1;p<=n;p++){const m=l[p],b=u[p];(!d.has(m)||b>d.get(m))&&d.set(m,b)}const g=new Uint8Array(n+1).fill(0);for(let p=1;p<=n;p++){const m=l[p],b=u[p],M=d.get(m)||0;b>=M*r&&(g[p]=1)}const c=new Uint32Array(n+1).fill(0);for(let p=1;p<=n;p++)g[p]&&(c[p]=l[p]);return this.finalize_volume(s,i,c,n,o,t,a)}_binaryComponentsFromLabels(t,n,s,r,i=!1){const o=r[0]|0,a=r[1]|0,f=r[2]|0,l=o*a,u=gn.get(s),d=u&&u.cl===n&&s.length===l*f&&(!i||u.bw===t);if(d&&u.conn===6&&u.distinctFgClasses<=1){const _=new Uint32Array(n+1);let w=0,v=0;for(let S=1;S<=n;S++){_[S]=S;const h=u.sumls[S];h>0&&h>=v&&(v=h,w=S)}return{parent:_,compSize:u.sumls,compClass:i?u.ls2bw:null,bestRoot:w}}const g=d?u.sumls:new Uint32Array(n+1),c=d?i?u.ls2bw:null:i?new Uint32Array(n+1):null,p=new Uint32Array(n+1);for(let _=1;_<=n;_++)p[_]=_;if(d&&u.conn===6&&u.runs&&u.bw===t){const _=(S,h)=>{for(;p[S]!==S;)p[S]=p[p[S]],S=p[S];for(;p[h]!==h;)p[h]=p[p[h]],h=p[h];S!==h&&(S<h?p[h]=S:p[S]=h)},w=u.runs,v=u.runLen;for(let S=0;S<v;S+=2){const h=w[S],k=w[S+1],F=h/l|0,$=h-F*l,A=$/o|0;let x=$-A*o;for(let C=h;C<k;C++,x++){const z=t[C];let I=0;if(F>0){const E=t[C-l];E!==0&&E!==z&&(I=s[C],_(I,s[C-l]))}if(A>0){const E=t[C-o];E!==0&&E!==z&&(I||(I=s[C]),_(I,s[C-o]))}if(x>0){const E=t[C-1];E!==0&&E!==z&&(I||(I=s[C]),_(I,s[C-1]))}}}}else{const _=d?u.minSl:0,w=d?u.maxSl:f-1;let v=_*l;for(let S=_;S<=w;S++)for(let h=0;h<a;h++)for(let k=0;k<o;k++,v++){const F=s[v];if(F===0)continue;d||(g[F]++,c&&c[F]===0&&(c[F]=t[v]));let $=F;for(;p[$]!==$;)p[$]=p[p[$]],$=p[$];if(S>0){const A=s[v-l];if(A!==0&&A!==F){let x=A;for(;p[x]!==x;)p[x]=p[p[x]],x=p[x];$!==x&&($<x?p[x]=$:(p[$]=x,$=x))}}if(h>0){const A=s[v-o];if(A!==0&&A!==F){let x=A;for(;p[x]!==x;)p[x]=p[p[x]],x=p[x];$!==x&&($<x?p[x]=$:(p[$]=x,$=x))}}if(k>0){const A=s[v-1];if(A!==0&&A!==F){let x=A;for(;p[x]!==x;)p[x]=p[p[x]],x=p[x];$!==x&&($<x?p[x]=$:p[$]=x)}}}}const m=new Uint32Array(n+1);for(let _=1;_<=n;_++){let w=_;for(;p[w]!==w;)w=p[w];p[_]=w,m[w]+=g[_]}let b=0,M=0;for(let _=1;_<=n;_++){const w=m[_];w>0&&w>=M&&(M=w,b=_)}return{parent:p,compSize:g,compClass:c,bestRoot:b}}applyLargestBinaryMaskInPlace(t,n,s,r){const i=t.length;if(n===0)return t.fill(0),t;const o=gn.get(s),a=o&&o.cl===n&&s.length===i;if(a&&o.conn===6&&o.distinctFgClasses<=1){let u=0,d=0;for(let g=1;g<=n;g++){const c=o.sumls[g];c>0&&c>=d&&(d=c,u=g)}if(o.runs&&o.bw===t){if(n>1){const g=o.runs,c=o.runLen;for(let p=0;p<c;p+=2){const m=g[p],b=g[p+1];for(let M=m;M<b;M++)s[M]!==u&&(t[M]=0)}}return t}if(o.fgStart>0&&t.fill(0,0,o.fgStart),o.fgEnd>=o.fgStart){for(let g=o.fgStart;g<=o.fgEnd;g++)s[g]!==u&&(t[g]=0);o.fgEnd+1<i&&t.fill(0,o.fgEnd+1)}else t.fill(0);return t}const{parent:f,bestRoot:l}=this._binaryComponentsFromLabels(t,n,s,r,!1);if(a&&o.runs&&o.bw===t){const u=o.runs,d=o.runLen;for(let g=0;g<d;g+=2){const c=u[g],p=u[g+1];for(let m=c;m<p;m++)f[s[m]]!==l&&(t[m]=0)}return t}if(a&&o.fgEnd>=o.fgStart){o.fgStart>0&&t.fill(0,0,o.fgStart);for(let u=o.fgStart;u<=o.fgEnd;u++){const d=s[u];(d===0||f[d]!==l)&&(t[u]=0)}o.fgEnd+1<i&&t.fill(0,o.fgEnd+1)}else for(let u=0;u<i;u++){const d=s[u];(d===0||f[d]!==l)&&(t[u]=0)}return t}filterHierarchicalFromLabels(t,n,s,r,i="all",o=!0,a=!1,f=null,l=!1){if(n===0)return[0,t instanceof Uint8Array?l?t:new Uint8Array(t.length):new Uint32Array(t.length)];const{parent:u,compSize:d,compClass:g,bestRoot:c}=this._binaryComponentsFromLabels(t,n,s,r,!0),p=new Uint32Array(n+1);for(let b=1;b<=n;b++)u[b]===c&&(p[b]=g[b]);const m=this._buildKeptMap(p,d,n,i,o);return this.finalize_volume(s,r,m,n,a,t,f,l)}filter18ClassFromLabels(t,n,s,r,i,o=!1,a=null,f=!1){return this.filterHierarchicalFromLabels(t,n,s,r,i,!1,o,a,f)}bwlabel(t,n,s=26,r=!1,i=!1,o=null){const a=Date.now(),f=n[0]*n[1]*n[2];if(![6,18,26].includes(s))return console.log("bwlabel: conn must be 6, 18 or 26."),[0,new Uint32Array(f)];if(n[0]<2||n[1]<2||n[2]<1)return console.log("bwlabel: img must be 2 or 3-dimensional"),[0,new Uint32Array(f)];let l;if(r){l=new Uint8Array(f);for(let m=0;m<f;m++)t[m]!==0&&(l[m]=1)}else t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Uint16Array||t instanceof Uint32Array||t instanceof Int8Array||t instanceof Int16Array||t instanceof Int32Array?t.length===f?l=t:(l=new Uint32Array(f),l.set(t.subarray(0,f))):(l=new Uint32Array(f),l.set(t));this._lastInitialRange=null,this._lastMeta=null;let[u,d,g]=this.do_initial_labelling(l,n,s,o);d===void 0&&(d=new Uint32Array(0));const[c,p]=this.translate_labels(g,n,d,u,l,this._lastInitialRange);if(this._lastMeta&&gn.set(p,this._lastMeta),console.log(s+" neighbor clustering into "+c+" regions in "+(Date.now()-a)+"ms"),i){const[m,b]=this.largest_original_cluster_labels(l,c,p);return[m,b]}return[c,p]}filter_clusters_by_rank(t,n,s,r,i=0,o=null,a=!1,f=null,l=!1,u=null){const d=t.length,g=new Uint32Array(n+1).fill(0),c=new Uint32Array(n+1).fill(0),p=f!=null&&Array.isArray(o)&&o.length===3,m=p?o[0]:0,b=p?o[1]:0,M=p?new Int32Array(n+1).fill(2147483647):null,_=p?new Int32Array(n+1).fill(-1):null,w=p?new Int32Array(n+1).fill(2147483647):null,v=p?new Int32Array(n+1).fill(-1):null,S=p?new Int32Array(n+1).fill(2147483647):null,h=p?new Int32Array(n+1).fill(-1):null;for(let C=0;C<d;C++){const z=s[C];if(z>0&&(g[z]===0&&(g[z]=t[C]),c[z]++,p)){const I=C%m,E=C/m|0,T=E%b,B=E/b|0;I<M[z]&&(M[z]=I),I>_[z]&&(_[z]=I),T<w[z]&&(w[z]=T),T>v[z]&&(v[z]=T),B<S[z]&&(S[z]=B),B>h[z]&&(h[z]=B)}}let k=null,F=0;if(p){let C=-1;for(let O=1;O<=n;O++)c[O]>C&&(C=c[O],F=O);const z=Math.max(2,Math.ceil(f)+4),I=m*b,E=new Int16Array(d).fill(-1);let T=[];for(let O=0;O<d;O++)s[O]===F&&(E[O]=0,T.push(O));for(let O=1;O<=z&&T.length;O++){const ae=[];for(let ce=0;ce<T.length;ce++){const V=T[ce],W=V%m,ee=(V/m|0)%b;W>0&&E[V-1]===-1&&(E[V-1]=O,ae.push(V-1)),W<m-1&&E[V+1]===-1&&(E[V+1]=O,ae.push(V+1)),ee>0&&E[V-m]===-1&&(E[V-m]=O,ae.push(V-m)),ee<b-1&&E[V+m]===-1&&(E[V+m]=O,ae.push(V+m)),V-I>=0&&E[V-I]===-1&&(E[V-I]=O,ae.push(V-I)),V+I<d&&E[V+I]===-1&&(E[V+I]=O,ae.push(V+I))}T=ae}const B=z+1;k=new Float64Array(n+1).fill(B);for(let O=0;O<d;O++){const ae=s[O];if(ae>0&&ae!==F){const ce=E[O]>=0?E[O]:B;ce<k[ae]&&(k[ae]=ce)}}l&&console.log(`[rank-filter] brain comp=${F} size=${C} bbox A[${M[F]},${_[F]}] B[${w[F]},${v[F]}] C[${S[F]},${h[F]}] | maxGap=${f} scan=${z}`)}const $=new Map;for(let C=1;C<=n;C++){const z=g[C],I=c[C];$.has(z)||$.set(z,[]),$.get(z).push({i:C,size:I})}const A=new Uint8Array(n+1).fill(0);for(const[C,z]of $.entries()){z.sort((B,O)=>O.size-B.size);const I=z.length?z[0].size:0,E=i>0?I*i:0,T=Math.min(z.length,r);for(let B=0;B<T;B++){const O=z[B];if(O.size<E){l&&B>0&&console.log(`[rank-filter] class ${C} #${B}: size=${O.size} DROP (below ${(i*100).toFixed(0)}% floor)`);break}if(B>0&&p){const ae=k[O.i],ce=ae<=f;if(l&&console.log(`[rank-filter] class ${C} #${B}: size=${O.size} surfDist=${ae} -> ${ce?"KEEP":"DROP (too far)"}`),!ce)continue}A[O.i]=1}}const x=new Uint32Array(n+1).fill(0);for(let C=1;C<=n;C++)A[C]&&(x[C]=g[C]);return this.finalize_volume(s,o,x,n,a,t,u)}}function uo(e){if(!(e!=null&&e.length))throw new Error("Segmentation volume is empty.");let t=0;if((e instanceof Uint8Array||e instanceof Uint8ClampedArray)&&(e.byteOffset&3)===0&&e.length>=4){const n=e.length>>2,s=new Uint32Array(e.buffer,e.byteOffset,n);for(let r=0;r<n;r++){const i=s[r];i!==0&&(i&255&&t++,i&65280&&t++,i&16711680&&t++,i&4278190080&&t++)}for(let r=n<<2;r<e.length;r++)e[r]!==0&&t++}else if(e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Uint16Array||e instanceof Uint32Array)for(let n=0;n<e.length;n++)e[n]!==0&&t++;else for(let n=0;n<e.length;n++){const s=e[n];if(!Number.isFinite(s)||s<0)throw new Error(`Segmentation contains an invalid label at voxel ${n}: ${s}.`);s!==0&&t++}if(t===0)throw new Error("Segmentation volume contains no foreground labels.");if(t>e.length*.95)throw new Error(`Segmentation fills ${(100*t/e.length).toFixed(1)}% of the volume; GPU output is unusable.`)}const co={il:null,runs:null,runLen:0,dirty:!1};function fo(e,t=.05,n=.95){const s=e.length;if(s===0)return{qmin:0,qmax:0};if(e instanceof Uint8Array||e instanceof Uint8ClampedArray){const f=Math.max(0,Math.min(s-1,Math.floor(s*t))),l=Math.max(0,Math.min(s-1,Math.ceil(s*n)-1)),u=new Uint32Array(256);for(let b=0;b<s;b++)u[e[b]]++;let d=0,g=0,c=0,p=!1,m=!1;for(let b=0;b<256;b++){const M=u[b];if(M!==0&&(d+=M,!p&&d>f&&(g=b,p=!0),!m&&d>l&&(c=b,m=!0),p&&m))break}return{qmin:g,qmax:c}}const r=Math.min(1e5,s),i=Math.max(0,Math.min(r-1,Math.floor(r*t))),o=Math.max(0,Math.min(r-1,Math.ceil(r*n)-1)),a=new Float64Array(r);if(r>=s)a.set(e);else{const f=.6180339887498949;let l=.5;for(let u=0;u<r;u++)l+=f,l>=1&&(l-=1),a[u]=e[Math.floor(l*s)]}return a.sort(),{qmin:a[i],qmax:a[o]}}function po(e){const t=e.length;if(t===0)return{min:0,max:0};let n=e[0],s=e[0];if(e instanceof Uint8Array||e instanceof Uint8ClampedArray){for(let r=1;r<t;r++){const i=e[r];if(i<n?n=i:i>s&&(s=i),n===0&&s===255)break}return{min:n,max:s}}for(let r=1;r<t;r++){const i=e[r];i<n&&(n=i),i>s&&(s=i)}return{min:n,max:s}}function Ls(e,t,n){const s=e.length,r=new Float32Array(s);if(e instanceof Uint8Array||e instanceof Uint8ClampedArray){const i=new Float32Array(256);for(let o=0;o<256;o++)i[o]=(o-t)/n;for(let o=0;o<s;o++)r[o]=i[e[o]];return r}for(let i=0;i<s;i++)r[i]=(e[i]-t)/n;return r}function Zs(e,t,n,s){const r=t[0]|0,i=t[1]|0,o=t[2]|0,a=r*i*o,f=new s(a);if(n[0]===2&&n[1]===1&&n[2]===0&&a===e.length){const b=i*o,M=i*r,_=16;for(let w=0;w<i;w++){const v=w*o,S=w*r;for(let h=0;h<r;h+=_){const k=Math.min(h+_,r);for(let F=0;F<o;F+=_){const $=Math.min(F+_,o);for(let A=h;A<k;A++){let x=A*b+v+F,C=F*M+S+A;for(let z=F;z<$;z++,x++,C+=M)f[C]=e[x]}}}}return f}const l=[r,i,o],u=[l[n[0]],l[n[1]],l[n[2]]],d=[i*o,o,1],g=d[n[0]],c=d[n[1]],p=d[n[2]];let m=0;for(let b=0;b<u[0];b++){const M=b*g;for(let _=0;_<u[1];_++){const w=M+_*c;for(let v=0;v<u[2];v++,m++)f[m]=e[w+v*p]}}return f}function Sn(e,t=[256,256,256],n=[2,1,0]){return Zs(e,t,n,Float32Array)}function mo(e,t=[256,256,256],n=[2,1,0]){return Zs(e,t,n,Uint8Array)}function is(e){const t=new Uint32Array(256);for(let n=0;n<e.length;n++)t[e[n]]++;return t}function go(e){const t=is(e);let n=0;for(let s=0;s<256;s++)t[s]>0&&n++;return n}function Us(e,t=!1,n="output"){let s=0,r=1/0,i=-1/0;if(!t&&(e instanceof Uint8Array||e instanceof Uint8ClampedArray)){if(e.length>0){let o=255,a=0,f=0;if((e.byteOffset&3)===0&&e.length>=4){const l=e.length>>2,u=new Uint32Array(e.buffer,e.byteOffset,l);for(let d=0;d<l;d++){const g=u[d];if(g===0){o=0;continue}const c=g&255,p=g>>>8&255,m=g>>>16&255,b=g>>>24;s+=c+p+m+b,c<o&&(o=c),c>a&&(a=c),p<o&&(o=p),p>a&&(a=p),m<o&&(o=m),m>a&&(a=m),b<o&&(o=b),b>a&&(a=b)}f=l<<2}for(let l=f;l<e.length;l++){const u=e[l];s+=u,u<o&&(o=u),u>a&&(a=u)}r=o,i=a}}else for(let o=0;o<e.length;o++){const a=e[o];if(!Number.isFinite(a))throw new Error(`Model ${n} contains NaN or Inf values.`);s+=a,a<r&&(r=a),a>i&&(i=a)}if(console.log(`${t?"Probability":"Segmentation"} volume sum: ${s}`),s===0)throw new Error(t?"Model probability output is all zeros. This may indicate an issue with WebGPU shaders or input data.":"Model produced an empty segmentation (all zeros). This may indicate an issue with WebGPU shaders or input data.");if(t&&(r<-1e-6||i>1+1e-6))throw new Error(`Probability output values out of range [0, 1]: min=${r.toFixed(4)}, max=${i.toFixed(4)}`);return{sum:s,min:r,max:i}}function _o(e,t,n,s,r=null,i=null){return Be(this,null,function*(){const o=!!(e&&typeof e.data=="function");let a,f;o?(console.log("Downloading segmentation data from GPU to CPU..."),a=yield e.data(),f=e.shape||i||[256,256,256],console.log("Data download complete. Starting CPU processing.")):(a=e,f=i||[256,256,256]),uo(a);let l,u=!1;if(a instanceof Uint8Array)l=a,u=!o;else{let g=0;for(let c=0;c<a.length;c++)a[c]>g&&(g=a[c]);l=g<=255?new Uint8Array(a):new Uint32Array(a),u=!0}let d=null;if(s.isPostProcessEnable){console.log("Applying CPU-based connected-component labeling...");const g=performance.now(),c=new lo,p=[5,14,15,58,59,60,598,608],m=!!s.fillSuppressedWithNeighborLabel||p.includes(n.id),b=[5,14,15,58,59,60,598,608],M=F=>F>=1&&F<=34?1:F>=35&&F<=68?2:0,_=b.includes(n.id)?M:null,w=f[0]*f[1]*f[2],v=Math.max(1e5,Math.floor(w*.01)),[S,h]=c.bwlabel(l,f,6,!1,!1,co);if(d=c.getLabelMeta(h),S>v){const F=`Segmentation produced noise: ${S.toLocaleString()} disconnected regions (cap ${v.toLocaleString()}). The model output is unusable, so post-processing was aborted. Try re-running, switching backend (WebGPU/WebGL2), or another model.`;console.error("[postprocess] "+F);const $=new Error(F);throw $.code="SEGMENTATION_NOISE",$}if([1,7].includes(n.id)){const[x,C]=c.filter_clusters_by_rank(l,S,h,2,.02,f,m,8,!1,_);l=C,u=!0}else if([3,8,9,21,38,218].includes(n.id)){const F=new Set([1,2,5,6,13]),[$,A]=c.filter18ClassFromLabels(l,S,h,f,F,m,_,u);l=A,u=!0}else if([5,14,15,58,59,60,598,608].includes(n.id)){s.diagnoseEnclosedComponents&&c.diagnose_components(l,S,h,f,{label:`model${n.id}`,topN:60});const[F,$]=c.filterHierarchicalFromLabels(l,S,h,f,"all",!0,m,_,u);l=$,u=!0}else u||(l=l.slice(),u=!0),c.applyLargestBinaryMaskInPlace(l,S,h,f);const k=((performance.now()-g)/1e3).toFixed(4);console.log(`Connected-component labeling took: ${k} seconds.`)}switch(n.type){case"Brain_Masking":{const g=new Uint8Array(l.length);if(d&&d.runs){const c=d.runs,p=d.runLen;for(let m=0;m<p;m+=2){const b=c[m],M=c[m+1];for(let _=b;_<M;_++)l[_]!==0&&(g[_]=1)}}else for(let c=0;c<l.length;c++)g[c]=l[c]!==0?1:0;return g}case"Brain_Extraction":{const g=new Uint8Array(l.length),c=r?new Uint8Array(l.length):null;if(d&&d.runs){const p=d.runs,m=d.runLen;for(let b=0;b<m;b+=2){const M=p[b],_=p[b+1];for(let w=M;w<_;w++)l[w]!==0&&(g[w]=t[w],c&&(c[w]=1))}}else for(let p=0;p<l.length;p++){const m=l[p]!==0?1:0;g[p]=t[p]*m,c&&(c[p]=m)}return r&&(r.mask=c),g}default:return l instanceof Uint8Array?l:new Uint8Array(l)}})}const bo={WEBGPU:"webgpu"};function ho(e,t){return{startTime:Date.now(),Model_Name:(e==null?void 0:e.modelName)||"Unknown",Execution_Mode:t,TF_Backend:"webgpu",isModelFullVol:null,No_SubVolumes:1,Brainchop_Ver:"FullVolume",Input_Shape:null,Output_Shape:null,Channel_Last:null,Model_Param:null,Model_Layers:null,Actual_Labels:null,Expect_Labels:null,NumLabels_Match:null,Missing_Labels:null,Preprocess_t:null,Setup_t:null,Inference_t:null,Postprocess_t:null,Display_t:null,Status:null,Error_Type:null,Extra_Err_Info:null}}function wo(e,t,n,s=null){e.Expect_Labels=t,e.Actual_Labels=n,e.NumLabels_Match=t===n,s&&s.length>0&&(e.Missing_Labels=s.join(", "))}function vo(e,t,n,s=null){e.Inference_t=t,e.Postprocess_t=n,s&&(s.Preprocess_t!==void 0&&(e.Preprocess_t=s.Preprocess_t),s.Setup_t!==void 0&&(e.Setup_t=s.Setup_t),s.Display_t!==void 0&&(e.Display_t=s.Display_t)),e.Status="OK"}function xo(e,t,n=null){e.Inference_t=1/0,e.Postprocess_t=1/0,e.Status="Fail",e.Error_Type=(t==null?void 0:t.message)||String(t),n&&(e.Extra_Err_Info=n)}const qt=1e-8,yo=[256,256,256];function rn(e,t,n){return Math.max(t,Math.min(n,e))}function $o(e){return e.outputType==="probability"&&e.probabilityPostprocess==="cat-lite"}function So(e,t,n){const[s,r,i]=e,o=s.length,a=new Uint8Array(o);let f=0;for(let v=0;v<o;v++)Math.max(0,s[v])+Math.max(0,r[v])+Math.max(0,i[v])>=n&&(a[v]=1,f++);const[l,u,d]=t;if(l<2||u<2||d<1)return{componentCount:0,removedVoxels:0,supportMask:a};const g=l===256&&u===256,c=new Uint32Array(f),p=l*u;let m=0,b=0,M=0,_=0;for(let v=0;v<o;v++){if(a[v]!==1)continue;_++;const S=m;c[m++]=v,a[v]=2;for(let h=S;h<m;h++){const k=c[h],F=g?k&255:k%l,$=g?k>>>8&255:Math.floor(k/l)%u;F>0&&a[k-1]===1&&(a[k-1]=2,c[m++]=k-1),F+1<l&&a[k+1]===1&&(a[k+1]=2,c[m++]=k+1),$>0&&a[k-l]===1&&(a[k-l]=2,c[m++]=k-l),$+1<u&&a[k+l]===1&&(a[k+l]=2,c[m++]=k+l),k>=p&&a[k-p]===1&&(a[k-p]=2,c[m++]=k-p),k+p<o&&a[k+p]===1&&(a[k+p]=2,c[m++]=k+p)}m-S>=M-b&&(b=S,M=m)}let w=0;if(_>1)for(let v=0;v<m;v++){if(v>=b&&v<M)continue;const S=c[v];s[S]=0,r[S]=0,i[S]=0,a[S]=0,w++}return{componentCount:_,removedVoxels:w,supportMask:a}}function ko([e,t,n],s,{minSupport:r,priorPower:i},o=null){const a=!!(o&&r>0&&r<=1);let f=0;for(let m=0;m<s.length;m++){if(a&&o[m]!==2)continue;const b=Math.max(0,e[m])+Math.max(0,t[m])+Math.max(0,n[m]);Math.min(b,1)>=r&&Number.isFinite(s[m])&&f++}const l=new Uint32Array(f),u=new Float64Array(f),d=f*36<=192*Dt(2,20)?f:0,g=new Float64Array(d),c=new Float64Array(d),p=new Float64Array(d);for(let m=0,b=0;m<s.length;m++){if(a&&o[m]!==2)continue;const M=Math.max(0,e[m]),_=Math.max(0,t[m]),w=Math.max(0,n[m]),v=M+_+w,S=Math.min(v,1);!(S>=r)||!Number.isFinite(s[m])||(l[b]=m,u[b]=s[m]-0,d&&(g[b]=S*Math.pow(w/v,i),c[b]=S*Math.pow(M/v,i),p[b]=S*Math.pow(_/v,i)),b++)}return{indices:l,values:u,weightCsf:g,weightGm:c,weightWm:p,volumes:[e,t,n]}}function Ws([e,t,n],s,r,i){const o=Math.max(0,e[s]),a=Math.max(0,t[s]),f=Math.max(0,n[s]),l=o+a+f,u=Math.min(l,1);i[0]=u*Math.pow(f/l,r),i[1]=u*Math.pow(o/l,r),i[2]=u*Math.pow(a/l,r)}function qs({indices:e,values:t,weightCsf:n,weightGm:s,weightWm:r,volumes:i},{minSeparation:o,sigmaFloor:a,priorPower:f},l=!1){const u=n.length===0?new Float64Array(3):null,d=new Float64Array(3),g=new Float64Array(3);for(let b=0;b<t.length;b++){const M=t[b];u&&Ws(i,e[b],f,u);const _=u?u[0]:n[b],w=u?u[1]:s[b],v=u?u[2]:r[b];d[0]+=_*M,g[0]+=_,d[1]+=w*M,g[1]+=w,d[2]+=v*M,g[2]+=v}if(g.some(b=>b<100))return{applied:!1,reason:"too few high-confidence tissue voxels"};const c=Array.from(d,(b,M)=>b/g[M]);if(!(c[0]+o<c[1]&&c[1]+o<c[2]))return{applied:!1,reason:`implausible T1 tissue ordering (${c.map(b=>b.toFixed(3)).join(", ")})`};if(l)return{applied:!0,means:c};const p=new Float64Array(3);for(let b=0;b<t.length;b++){const M=t[b];u&&Ws(i,e[b],f,u);const _=u?u[0]:n[b],w=u?u[1]:s[b],v=u?u[2]:r[b],S=M-c[0],h=M-c[1],k=M-c[2];p[0]+=_*S*S,p[1]+=w*h*h,p[2]+=v*k*k}const m=Array.from(p,(b,M)=>Math.sqrt(Math.max(a*a,b/g[M])));return{applied:!0,means:c,sigmas:m}}function Mo(e,t,n,s,{minSupport:r,block:i,smoothingPasses:o},a=null){const[f,l,u]=e,[d,g,c]=n,p=!!(a&&r>0&&r<=1),m=Math.ceil(d/i),b=Math.ceil(g/i),M=Math.ceil(c/i),_=m*b*M,w=new Float64Array(_),v=new Float64Array(_),[S,h,k]=s,F=d*g;for(let T=0;T<c;T++){const B=Math.floor(T/i);for(let O=0;O<g;O++){const ae=Math.floor(O/i);let ce=T*F+O*d;const V=(B*b+ae)*m;for(let W=0;W<d;W++,ce++){if(p&&a[ce]!==2)continue;const j=Math.max(0,f[ce]),ee=Math.max(0,l[ce]),G=Math.max(0,u[ce]),ie=j+ee+G,le=Math.min(ie,1);if(!(le>=r)||!Number.isFinite(t[ce]))continue;const Ae=j/ie,pe=ee/ie,Me=G/ie,H=Me*S+Ae*h+pe*k,ne=le*(Me*Me+Ae*Ae+pe*pe),P=V+Math.floor(W/i);w[P]+=ne*(t[ce]-H),v[P]+=ne}}}let $=new Float32Array(_),A=new Uint8Array(_);for(let T=0;T<_;T++)v[T]>1&&($[T]=w[T]/v[T],A[T]=1);for(let T=0;T<o;T++){const B=new Float32Array(_),O=new Uint8Array(_);for(let ae=0;ae<M;ae++)for(let ce=0;ce<b;ce++)for(let V=0;V<m;V++){let W=0,j=0;for(let G=-1;G<=1;G++){const ie=ae+G;if(!(ie<0||ie>=M))for(let le=-1;le<=1;le++){const Ae=ce+le;if(!(Ae<0||Ae>=b))for(let pe=-1;pe<=1;pe++){const Me=V+pe;if(Me<0||Me>=m)continue;const H=(ie*b+Ae)*m+Me;A[H]&&(W+=$[H],j++)}}}const ee=(ae*b+ce)*m+V;j>0&&(B[ee]=W/j,O[ee]=1)}$=B,A=O}const x=(T,B)=>{const O=new Int32Array(T),ae=new Int32Array(T),ce=new Float32Array(T);for(let V=0;V<T;V++){const W=rn((V+.5)/i-.5,0,B-1);O[V]=Math.floor(W),ae[V]=Math.min(O[V]+1,B-1),ce[V]=W-O[V]}return{low:O,high:ae,t:ce}},C=x(d,m),z=x(g,b),I=x(c,M),E=d===256&&g===256;return T=>{let B,O,ae;if(E)ae=T>>>16,O=T>>>8&255,B=T&255;else{ae=Math.floor(T/F);const Y=T-ae*F;O=Math.floor(Y/d),B=Y-O*d}const ce=C.low[B],V=C.high[B],W=C.t[B],j=(I.low[ae]*b+z.low[O])*m,ee=(I.low[ae]*b+z.high[O])*m,G=(I.high[ae]*b+z.low[O])*m,ie=(I.high[ae]*b+z.high[O])*m,le=$[j+ce]+($[j+V]-$[j+ce])*W,Ae=$[ee+ce]+($[ee+V]-$[ee+ce])*W,pe=$[G+ce]+($[G+V]-$[G+ce])*W,Me=$[ie+ce]+($[ie+V]-$[ie+ce])*W,H=z.t[O],ne=le+(Ae-le)*H,P=pe+(Me-pe)*H;return ne+(P-ne)*I.t[ae]}}function yn(e,t,n,s){const r=(e-t)/n;return-.5*r*r-s}function Ao(e,t,n,s={}){const{catLiteMinSupport:r=.03,catLitePurePriorPower:i=3,catLiteMinMeanSeparation:o=.035,catLiteSigmaFloor:a=.025,catLiteBiasBlockSize:f=16,catLiteBiasSmoothPasses:l=3,catLitePriorStrength:u=.8,catLiteIntensityStrength:d=.75,catLiteMixelPrior:g=.35,catLiteCsfWmMixelPrior:c=6,catLiteSpatialWeight:p=.25}=s,m={priorPower:i,minSupport:r,minSeparation:o,sigmaFloor:a},[b,M,_]=n,w=t.length,v=r>0&&r<=1,{componentCount:S,removedVoxels:h,supportMask:k}=So(e,n,r),F={componentCount:S,removedVoxels:h},$=ko(e,t,m,k),A=qs($,m,!0);if(!A.applied)return{tissues:e,stats:A};const x=Mo(e,t,n,A.means,{minSupport:r,block:f,smoothingPasses:l},k);for(let N=0;N<$.indices.length;N++){const X=$.indices[N];$.values[N]=t[X]-x(X)}const C=qs($,m);if(!C.applied)return{tissues:e,stats:C};$.indices=$.weightCsf=$.weightGm=$.weightWm=null;const[z,I,E]=C.means,[T,B,O]=C.sigmas,[ae,ce,V]=e,W=new Float32Array(w),j=new Float32Array(w),ee=new Float32Array(w),G=b*M,ie=.5*(z+I),le=.5*(I+E),Ae=.5*(z+E),pe=Math.sqrt(Dt(I-z,2)/12+.5*(Dt(T,2)+Dt(B,2))),Me=Math.sqrt(Dt(E-I,2)/12+.5*(Dt(B,2)+Dt(O,2))),H=Math.sqrt(Dt(E-z,2)/12+.5*(Dt(T,2)+Dt(O,2))),ne=Math.log(T),P=Math.log(B),Y=Math.log(O),D=Math.log(pe),re=Math.log(Me),te=Math.log(H);let Q=0;for(let N=0;N<_;N++)for(let X=0;X<M;X++){let q=N*G+X*b;for(let _e=0;_e<b;_e++,q++){if(v&&k[q]!==2)continue;const se=Math.max(0,ae[q]),Le=Math.max(0,ce[q]),Ce=Math.max(0,V[q]),Ve=se+Le+Ce,Ge=Math.min(Ve,1);if(!(Ge>=r)||!Number.isFinite(t[q]))continue;let Qe=se/Ve,He=Le/Ve,Fe=Ce/Ve;if(p>0){let ge=0,Re=0,Pe=0,oe=0;if(_e>0){const ye=q-1,ze=Math.max(0,ae[ye]),me=Math.max(0,ce[ye]),Z=Math.max(0,V[ye]),be=ze+me+Z;be>qt&&(ge+=ze/be,Re+=me/be,Pe+=Z/be,oe++)}if(_e+1<b){const ye=q+1,ze=Math.max(0,ae[ye]),me=Math.max(0,ce[ye]),Z=Math.max(0,V[ye]),be=ze+me+Z;be>qt&&(ge+=ze/be,Re+=me/be,Pe+=Z/be,oe++)}if(X>0){const ye=q-b,ze=Math.max(0,ae[ye]),me=Math.max(0,ce[ye]),Z=Math.max(0,V[ye]),be=ze+me+Z;be>qt&&(ge+=ze/be,Re+=me/be,Pe+=Z/be,oe++)}if(X+1<M){const ye=q+b,ze=Math.max(0,ae[ye]),me=Math.max(0,ce[ye]),Z=Math.max(0,V[ye]),be=ze+me+Z;be>qt&&(ge+=ze/be,Re+=me/be,Pe+=Z/be,oe++)}if(N>0){const ye=q-G,ze=Math.max(0,ae[ye]),me=Math.max(0,ce[ye]),Z=Math.max(0,V[ye]),be=ze+me+Z;be>qt&&(ge+=ze/be,Re+=me/be,Pe+=Z/be,oe++)}if(N+1<_){const ye=q+G,ze=Math.max(0,ae[ye]),me=Math.max(0,ce[ye]),Z=Math.max(0,V[ye]),be=ze+me+Z;be>qt&&(ge+=ze/be,Re+=me/be,Pe+=Z/be,oe++)}if(oe){const ye=1-p;Qe=ye*Qe+p*ge/oe,He=ye*He+p*Re/oe,Fe=ye*Fe+p*Pe/oe}}const Se=$.values[Q++],Ye=u*Math.log(Fe+qt)+d*yn(Se,z,T,ne),pt=u*Math.log(Qe+qt)+d*yn(Se,I,B,P),it=u*Math.log(He+qt)+d*yn(Se,E,O,Y),ft=u*Math.log(g*2*Math.sqrt(Fe*Qe)+qt)+d*yn(Se,ie,pe,D),Bt=u*Math.log(g*2*Math.sqrt(Qe*He)+qt)+d*yn(Se,le,Me,re),It=u*Math.log(c*2*Math.sqrt(Fe*He)*Dt(1-Qe,2)+qt)+d*yn(Se,Ae,H,te),Ft=Math.max(Ye,pt,it,ft,Bt,It),Zt=Math.exp(Ye-Ft),Gt=Math.exp(pt-Ft),Lt=Math.exp(it-Ft),Et=Math.exp(ft-Ft),K=Math.exp(Bt-Ft),wt=Math.exp(It-Ft),St=Zt+Gt+Lt+Et+K+wt,Tt=rn((Se-z)/(I-z),0,1),Ut=rn((E-Se)/(E-I),0,1),sn=rn((Se-z)/(E-z),0,1),y=(Gt+Et*Tt+K*Ut)/St,L=(Lt+K*(1-Ut)+wt*sn)/St,R=(Zt+Et*(1-Tt)+wt*(1-sn))/St,J=Math.min(Fe,He),ue=rn((J-Qe)/(J+qt),0,1),ke=rn(4*Fe*He,0,1),ve=Dt(1-ke*ue,2);W[q]=rn(y*Ge*ve,0,1);const Ue=(1-y*ve)/Math.max(L+R,qt);j[q]=rn(L*Ue*Ge,0,1),ee[q]=rn(R*Ue*Ge,0,1)}}return{tissues:[W,j,ee],stats:{applied:!0,tissueMeans:{csf:z,gray:I,white:E},tissueSigmas:{csf:T,gray:B,white:O},supportCleanup:F}}}const Rs=({csf:e,gray:t,white:n})=>`CSF=${e.toFixed(3)} GM=${t.toFixed(3)} WM=${n.toFixed(3)}`;function Po(e,t,n,s,r){return Be(this,null,function*(){var f;const i=[];for(let l=0;l<3;l++)i.push(yield r(e[l],l)),e[l]=null;const{tissues:o,stats:a}=Ao(i,t,yo,n);if(s.Output_Type="Continuous tissue probability",s.Tissue="GM/WM/CSF",s.Softmax_Temperature=(f=n.softmaxTemperature)!=null?f:1,a.applied){s.Partial_Volume="CAT-lite mixed-class PVE",s.CAT_Lite_Tissue_Means=Rs(a.tissueMeans),s.CAT_Lite_Tissue_Sigmas=Rs(a.tissueSigmas);const{componentCount:l,removedVoxels:u}=a.supportCleanup;console.log(`[CAT-lite] means ${s.CAT_Lite_Tissue_Means}; sigmas ${s.CAT_Lite_Tissue_Sigmas}; removed ${u} voxels outside the largest of ${l} support components`)}else s.Partial_Volume=`Skipped: ${a.reason}`,console.warn(`[CAT-lite] skipped: ${a.reason}`);return o})}const ln=[1,3,5,7,13,19,31,19,13,7,5,3,1],zo=[16,8,4,2,1,16,8,4,2,1,16,8,4,2,1,16,8,4,2,1,16,8,4,2,1],Co={model16chan18cls:{dilations:ln,activation:"gelu_tanh",fullVolume:!0},model24chan18cls_gdice_prio:{dilations:ln,activation:"gelu_tanh",fullVolume:!0},model6chan3cls:{dilations:ln,activation:"gelu_tanh",fullVolume:!0},model24chan104cls_synth:{dilations:ln,activation:"gelu_tanh",fullVolume:!0},model24chan104cls_infant_refit_synth:{dilations:ln,activation:"gelu_tanh",fullVolume:!0},model24chan104cls_v3_repbn:{dilations:ln,activation:"gelu_tanh",fullVolume:!0},model24chan50cls:{dilations:ln,activation:"gelu_tanh",fullVolume:!0},model32chan18cls:{dilations:ln,activation:"gelu_tanh",fullVolume:!1},mindgrab:{dilations:zo,activation:"gelu_tanh",fullVolume:!0},model5_gw_ae:{dilations:[1,2,4,8,16,8,4,2,1],activation:"relu",fullVolume:!0},model11_gw_ae:{dilations:[1,2,4,8,4,2,2,1],activation:"relu",noSafetensors:!0,fullVolume:!0},model30chan18cls:{dilations:[1,2,4,8,16,8,4,2,1],activation:"elu",fullVolume:!0},model30chan50cls:{dilations:[1,2,4,8,16,8,4,2,1],activation:"elu",fullVolume:!0}};function Bo(e){const t=String(e.path||"").match(/\/models\/([^/]+)\//);return t?t[1]:null}function _s(e){const t=Bo(e);if(!t)return null;const n=Co[t];return!n||n.noSafetensors?null:bt({name:t},n)}function Fo(e){const t=e&32768?-1:1,n=(e&31744)>>10,s=e&1023;return n===0?t*Math.pow(2,-14)*(s/1024):n===31?s?NaN:t*(1/0):t*Math.pow(2,n-15)*(1+s/1024)}function Qs(e){const t=new DataView(e),n=Number(t.getBigUint64(0,!0)),s=JSON.parse(new TextDecoder().decode(new Uint8Array(e,8,n))),r=8+n,i={};for(const[o,a]of Object.entries(s)){if(o==="__metadata__"){i.__metadata__=a;continue}const[f,l]=a.data_offsets,u=a.shape.reduce((g,c)=>g*c,1);let d;if(a.dtype==="F32")d=new Float32Array(e.slice(r+f,r+l));else if(a.dtype==="F16"){const g=new Uint16Array(e.slice(r+f,r+l));d=new Float32Array(u);for(let c=0;c<u;c++)d[c]=Fo(g[c])}else if(a.dtype==="BF16"){const g=new Uint16Array(e.slice(r+f,r+l));d=new Float32Array(u);const c=new Uint32Array(1),p=new Float32Array(c.buffer);for(let m=0;m<u;m++)c[0]=g[m]<<16,d[m]=p[0]}else throw new Error(`safetensors: unsupported dtype ${a.dtype} for tensor '${o}'`);if(d.length!==u)throw new Error(`safetensors: tensor '${o}' has ${d.length} values, shape says ${u}`);i[o]={dtype:a.dtype,shape:a.shape,data:d}}return i}function Js(e){const t=[],n=[],s=[];for(const[i,o]of Object.entries(e)){if(i==="__metadata__")continue;const a=i.match(/^m\.model\.(\d+)\.(weight|bias)$/);if(!a)continue;const f=Number(a[1]),l=a[2]==="weight";if(o.shape.length===5){const[u,d,g,c,p]=o.shape,b={idx:f,outC:u,inC:d,kd:g,kh:c,kw:p,is1x1:g===1&&c===1&&p===1,w:o.data,bias:null},M=t.find(_=>_.idx===f);M?Object.assign(M,b):t.push(b)}else o.shape.length===1&&s.push({idx:f,isW:l,data:o.data,len:o.shape[0]})}t.sort((i,o)=>i.idx-o.idx);for(const i of s){const o=t.find(f=>f.idx===i.idx);if(o&&!i.isW){o.bias=i.data;continue}if(o&&i.isW)continue;let a=n.find(f=>f.idx===i.idx);a||(a={idx:i.idx,scale:null,bias:null},n.push(a)),i.isW?a.scale=i.data:a.bias=i.data}n.sort((i,o)=>i.idx-o.idx);let r=null;return t.length&&t[t.length-1].is1x1&&(r=t.pop()),{convs:t,affines:n,classifier:r}}function Lo(e,t){var n;if(t==null)return e;if(t.length!==((n=e.classifier)==null?void 0:n.outC)||!Array.from(t).every(Number.isFinite))throw new Error("Classifier bias must contain one finite value per exported class");return e.classifier.bias=Float32Array.from(t),e}function Uo(e,t){const n=t.cs,s=t.chan,{convs:r,affines:i,classifier:o}=e,a=c=>27*c*n;let f=0;const l=[];r.forEach((c,p)=>{const m=p===0?1:n,b={wq:f/4,inCS:m};f+=a(m),c.bias&&(b.biasQ=f/4,f+=n),l.push(b)}),i.forEach((c,p)=>{l[p]=l[p]||{},l[p].affQ=f/4,f+=n,l[p].affBiasQ=f/4,f+=n});let u=-1,d=-1;o&&(u=f,f+=s*t.nclass,f=Math.ceil(f/4)*4,o.bias&&(d=f,f+=t.nclass),f=Math.ceil(f/4)*4);const g=new Float32Array(f);if(r.forEach((c,p)=>{const m=l[p],b=m.inCS,M=m.wq*4,_=c.kd*c.kh*c.kw;if(c.outC>s||p>0&&c.inC>s)throw new Error(`layer ${p}: shape ${c.outC}x${c.inC} exceeds CHAN ${s}`);for(let w=0;w<c.outC;w++){for(let v=0;v<c.inC;v++)for(let S=0;S<c.kd;S++)for(let h=0;h<c.kh;h++)for(let k=0;k<c.kw;k++){const F=c.kd===3?S*9+h*3+k:0,$=(((w*c.inC+v)*c.kd+S)*c.kh+h)*c.kw+k;g[M+(F*b+v)*n+w]=c.w[$]}c.bias&&(g[m.biasQ*4+w]=c.bias[w])}if(_!==27&&_!==1)throw new Error(`layer ${p}: kernel ${c.kd}x${c.kh}x${c.kw} unsupported`)}),i.forEach((c,p)=>{const m=l[p];for(let b=0;b<s;b++)g[m.affQ*4+b]=c.scale?c.scale[b]:0,g[m.affBiasQ*4+b]=c.bias?c.bias[b]:0}),o)for(let c=0;c<t.nclass;c++){for(let p=0;p<s;p++)g[u+p*t.nclass+c]=o.w[c*o.inC+p];o.bias&&(g[d+c]=o.bias[c])}return{data:g,offsets:{layers:l,clsFloat:u,clsBiasFloat:d}}}function er(e,t={}){const{convs:n,affines:s,classifier:r}=e,i=n[0].outC,o=Math.ceil(i/4)*4,a=n.some(l=>l.bias),f=bt({chan:i,cs:o,planes:o/4,nclass:r?r.outC:0,nhidden:n.length-1,norm:s.length?"gn":a?"none":"gn",affine:s.length>0,convBias:a,classifierBias:!!(r&&r.bias),centeredVariance:!1,eps:1e-5},t);if(f.nclass>256)throw new Error(`classifier has ${f.nclass} classes; the RGBA8 label texture holds at most 256`);if(!f.activation)throw new Error("descriptor needs an explicit `activation`");if(!f.dilations)throw new Error("descriptor needs an explicit `dilations` array");if(f.dilations.length!==n.length)throw new Error(`descriptor has ${f.dilations.length} dilations for ${n.length} convs`);return f}const Xn=(e,t)=>Array.from({length:e},(n,s)=>t(s)).join(""),Is=["x","y","z","w"];function Wo(e){const t=`fn act4(x : vec4<f32>) -> vec4<f32> {
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
`;default:throw new Error(`webgpu-native: unknown activation '${e}'; add it deliberately`)}}function qo(e,t,n){const s=e.cs/4,r=l=>Xn(n,l),i=l=>Xn(s,l),o=i(l=>`          let w${l} = vec4<f32>(wts4[wq + ${l}u]);
`),a=l=>`        { let wq = wq0 + ((tap * cin) + ic4 * 4u + ${l}u) * (CS / 4u);
`+o+r(u=>i(d=>`          a${u}${d} = fma(w${d}, vec4<f32>(s${u}.${Is[l]}), a${u}${d});
`))+`        }
`,f=(e.convBias?i(l=>`  let b${l} = vec4<f32>(wts4[params.bias_off / 4u + ${l}u]);
`)+r(l=>i(u=>`  a${l}${u} = a${l}${u} + b${u};
`)):"")+(e.norm==="none"?r(l=>i(u=>`  a${l}${u} = act4(a${l}${u});
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
`+r(l=>i(u=>`  var a${l}${u} = vec4<f32>(0.0);
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
`+i(u=>`          a${l}${u} = fma(w${u}, s, a${l}${u});
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
`+i(u=>Xn(4,d=>`    dst[o + ${4*u+d}u] = f16(a${l}${u}.${Is[d]});
`))+`  }
`)+`}
`}function Ro(e){return`var<workgroup> wg_sum : array<f32, ${e} * CS>;
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
`}function Io(e){return`@compute @workgroup_size(${e}, 1, 1)
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
`}function Go(e){return`@group(0) @binding(5) var<storage, read_write> labels : array<u32>;
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
`}function Eo(e,t){var i;const{localX:n,vox:s,momLX:r}=t;if(e.cs%4!==0||e.cs>256)throw new Error(`webgpu-native: channel stride ${e.cs} unsupported`);if(e.nx%(n*s)||e.nx%n||e.nx%r)throw new Error(`webgpu-native: preset ${n}x${s}/${r} does not tile a ${e.nx}-voxel row`);if(r<e.cs)throw new Error(`webgpu-native: moments workgroup ${r} < ${e.cs} channels`);return`enable f16;
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
`+Wo(e.activation)+qo(e,n,s)+(e.norm==="gn"?Ro(r)+Io(n):"")+Go(n)}const Yn={amd:{localX:256,vox:1},apple:{localX:64,vox:2},default:{localX:64,vox:2}};function To(){var e;try{const t=new URLSearchParams(((e=globalThis.location)==null?void 0:e.search)||"").get("wgPreset"),n=t&&/^(\d+)x([124])$/.exec(t);return n?{localX:Number(n[1]),vox:Number(n[2]),source:"url"}:null}catch(t){return null}}function Oo(e,t){var a;const n=String(((a=e.adapterInfo)==null?void 0:a.vendor)||"").toLowerCase(),s=e.limits,r=f=>f.localX<=s.maxComputeInvocationsPerWorkgroup&&f.localX<=s.maxComputeWorkgroupSizeX&&t.nx%(f.localX*f.vox)===0;let i=To()||Ct(bt({},Yn[n]||Yn.default),{source:n||"default"});r(i)||(console.warn(`[WebGPU-native] preset ${i.localX}x${i.vox} does not fit this device; using the default`),i=Ct(bt({},Yn.default),{source:"fallback"}));let o=0;for(const f of[256,128,64,32])if(f<=i.localX&&f>=t.cs&&t.nx%f===0&&f<=s.maxComputeInvocationsPerWorkgroup&&f*t.cs*8<=s.maxComputeWorkgroupStorageSize){o=f;break}if(!o)throw new Error(`webgpu-native: no moments workgroup fits ${t.cs} channels on this device`);return Ct(bt({},i),{momLX:o,vendor:n||"unknown"})}const kt=256;function Gs(e){if(typeof Float16Array!="undefined")return new Uint16Array(new Float16Array(e).buffer);const t=new Uint16Array(e.length),n=new Float32Array(1),s=new Uint32Array(n.buffer);for(let r=0;r<e.length;r++){n[0]=e[r];const i=s[0],o=i>>>16&32768,a=i>>>23&255,f=i&8388607;if(a===255){t[r]=o|31744|(f?512:0);continue}const l=a-127+15;if(l>=31){t[r]=o|31744;continue}if(l<=0){if(l<-10){t[r]=o;continue}const g=f|8388608,c=14-l;let p=g>>>c;const m=g&(1<<c)-1,b=1<<c-1;(m>b||m===b&&p&1)&&p++,t[r]=o|p;continue}let u=l<<10|f>>>13;const d=f&8191;(d>4096||d===4096&&u&1)&&u++,t[r]=o|u}return t}function No(e,t){var n;return t.quantize8Bit?"8-bit quantized V4 runner requested":(n=e.features)!=null&&n.has("shader-f16")?t.outputType==="probability"?"probability output (CAT-lite) is not ported yet":t.enableTTA?"test-time augmentation uses the tinygrad TTA runner":t.forceFP32?"model entry forces fp32":t.webgpu_safetensor?_s(t)?null:"no descriptor in webgl2_runners/descriptors.js":"no safetensors weights":"device lacks shader-f16"}function Do(e,t){const n=e.nx*e.ny*e.nz,s=e.nx/t*e.ny*e.nz;return 2*n*e.cs*2+n*2+2*n*4+(s+1)*e.cs*2*4}const Es=new WeakMap;function Vo(e,t,n){return Be(this,null,function*(){let s=Es.get(e);s||(s=new Map,Es.set(e,s));const r=`${t.chan}|${t.cs}|${t.nclass}|${t.norm}|${t.affine}|${t.convBias}|${t.clsBias}|${t.activation}|${t.eps}|${n.localX}x${n.vox}x${n.momLX}`;let i=s.get(r);return i||(i=Be(null,null,function*(){const o=e.createShaderModule({code:Eo(t,n)}),a=["read-only-storage","storage","read-only-storage","uniform","storage","storage","read-only-storage","read-only-storage"],f=e.createBindGroupLayout({entries:a.map((g,c)=>({binding:c,visibility:GPUShaderStage.COMPUTE,buffer:{type:g}}))}),l=e.createPipelineLayout({bindGroupLayouts:[f]}),u=["conv","classify",...t.norm==="gn"?["moments","moments_finish","norm"]:[]],d=Object.fromEntries(yield Promise.all(u.map(g=>Be(null,null,function*(){return[g,yield e.createComputePipelineAsync({layout:l,compute:{module:o,entryPoint:g}})]}))));return{bgl:f,pipelines:d}}).catch(o=>{throw s.delete(r),o}),s.set(r,i)),i})}function Ho(e,t,n,s){return Be(this,null,function*(){const r=_s(s);if(!r)throw new Error(`webgpu-native: no descriptor for ${s.path}`);const i=t instanceof Uint8Array?t:new Uint8Array(t),o=Lo(Js(Qs(i.buffer.slice(i.byteOffset,i.byteOffset+i.byteLength))),s.classifierBias),a=er(o,{nx:kt,ny:kt,nz:kt,activation:r.activation,dilations:r.dilations});if(!a.nclass)throw new Error("webgpu-native: model has no classifier");if(a.convBias&&a.affine)throw new Error("webgpu-native: conv bias together with a GroupNorm affine is not supported");const f=Oo(e,a),l=kt*kt*kt,u=l*a.cs*2,d=e.limits;if(u>d.maxStorageBufferBindingSize||u>d.maxBufferSize)throw new Error(`webgpu-native: a ${u>>>20} MiB activation exceeds this device's buffer limits`);console.log(`[WebGPU-native] ${r.name}: ${a.chan}ch (stride ${a.cs}) ${a.nclass}cls norm=${a.norm} affine=${a.affine} act=${a.activation} | preset ${f.localX}x${f.vox} (moments ${f.momLX}, ${f.source}) | ~${Math.round(Do(a,f.momLX)/1048576)} MiB`);const g=Uo(o,a),{layers:c,clsFloat:p,clsBiasFloat:m}=g.offsets;e.pushErrorScope("validation"),e.pushErrorScope("out-of-memory");let b=2;try{const{bgl:M,pipelines:_}=yield Vo(e,a,f),w=(G,ie)=>e.createBuffer({size:G,usage:ie}),v=GPUBufferUsage.STORAGE,S=kt/f.momLX*kt*kt,h=Gs(g.data),k=w(l*2,v|GPUBufferUsage.COPY_DST),F=w(u,v),$=w(u,v),A=w(Math.ceil(h.byteLength/16)*16,v|GPUBufferUsage.COPY_DST),x=w((S+1)*a.cs*2*4,v),C=w(l*4,v|GPUBufferUsage.COPY_SRC),z=w(l*4,GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST);e.queue.writeBuffer(A,0,h);const I=(G,ie,le)=>{const Ae=w(32,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST);return e.queue.writeBuffer(Ae,0,le),e.createBindGroup({layout:M,entries:[{binding:0,resource:{buffer:G}},{binding:1,resource:{buffer:ie}},{binding:2,resource:{buffer:A}},{binding:3,resource:{buffer:Ae}},{binding:4,resource:{buffer:x}},{binding:5,resource:{buffer:C}},{binding:6,resource:{buffer:A}},{binding:7,resource:{buffer:G}}]})},E=G=>{const ie=new Uint32Array(8);return ie[0]=G.dilation|0,ie[1]=G.weightOff>>>0,ie[2]=G.affineOff>>>0,ie[3]=G.biasOff>>>0,ie[4]=G.inChannels>>>0,ie[5]=G.inStride>>>0,ie[6]=S,ie},T=[];let B=k,O=F;c.forEach((G,ie)=>{const le=ie===0;T.push(I(B,O,E({dilation:a.dilations[ie],weightOff:G.wq*4,affineOff:G.affQ!==void 0?G.affQ*4:0,biasOff:G.biasQ!==void 0?G.biasQ*4:G.affBiasQ!==void 0?G.affBiasQ*4:0,inChannels:le?1:a.cs,inStride:le?1:a.cs}))),B=O,O=O===F?$:F});const ae=I(B,O,E({weightOff:p,biasOff:m>=0?m:0}));b=0;const ce=yield e.popErrorScope(),V=yield e.popErrorScope();if(ce||V)throw new Error(`webgpu-native setup failed: ${(ce||V).message}`);const W=kt/(f.localX*f.vox),j=kt/f.localX,ee=kt/f.momLX;return function(ie){return Be(this,null,function*(){if(ie.length!==l)throw new Error(`webgpu-native: input has ${ie.length} voxels, expected ${l}`);e.pushErrorScope("validation"),e.queue.writeBuffer(k,0,Gs(ie));for(const H of T){const ne=e.createCommandEncoder(),P=ne.beginComputePass();P.setBindGroup(0,H),P.setPipeline(_.conv),P.dispatchWorkgroups(W,kt,kt),a.norm==="gn"&&(P.setPipeline(_.moments),P.dispatchWorkgroups(ee,kt,kt),P.setPipeline(_.moments_finish),P.dispatchWorkgroups(1,1,1),P.setPipeline(_.norm),P.dispatchWorkgroups(j,kt,kt)),P.end(),e.queue.submit([ne.finish()])}const le=e.createCommandEncoder(),Ae=le.beginComputePass();Ae.setBindGroup(0,ae),Ae.setPipeline(_.classify),Ae.dispatchWorkgroups(j,kt,kt),Ae.end(),le.copyBufferToBuffer(C,0,z,0,l*4),e.queue.submit([le.finish()]),yield z.mapAsync(GPUMapMode.READ);const pe=new Float32Array(new Uint32Array(z.getMappedRange()));z.unmap();const Me=yield e.popErrorScope();if(Me)throw new Error(`webgpu-native inference failed: ${Me.message}`);return[pe]})}}finally{for(;b-- >0;)yield e.popErrorScope().catch(()=>{})}})}const jo={grayMatter:[2,6,7,8,9,10,14,15,16,17],whiteMatter:[1,5],csf:[3,4,11,12]};function kn(e,t,n,s,r){var o;const i=Number((o=e[t])!=null?o:n);if(!Number.isFinite(i)||i<s||i>r)throw new Error(`${t} must be between ${s} and ${r}, got ${e[t]}`);return i}function Kn(e,t,n){let s=0;for(const r of e||[]){if(!Number.isInteger(r)||r<0||r>=t||r>=32)throw new Error(`Invalid ${n} tissue label ${r} for ${t} classes`);s=(s|1<<r)>>>0}return s}function Xo(e,t){if(!Number.isInteger(t)||t<2||t>32)throw new Error(`Native WebGL2 grouped probabilities require 2..32 classes, got ${t}`);const n=bt(bt({},jo),e.probabilityGroups||{});return{temperature:kn(e,"softmaxTemperature",1,1e-6,1e6),supportTemperature:kn(e,"brainSupportTemperature",1,1e-6,1e6),supportPower:kn(e,"brainSupportPower",1,1e-6,1e6),sigma:kn(e,"partialVolumeSigma",0,0,2),grayMask:Kn(n.grayMatter,t,"gray-matter"),whiteMask:Kn(n.whiteMatter,t,"white-matter"),csfMask:Kn(n.csf,t,"CSF")}}function Zn(e,t,n,s,r,i){const[o,a,f]=n,l=o*a,u=r.length-1>>1;for(let d=0;d<f;d++)for(let g=0;g<a;g++)for(let c=0;c<o;c++){const p=d*l+g*o+c,m=s===1?c:s===o?g:d,b=s===1?o:s===o?a:f;let M=0;for(let _=-u;_<=u;_++){const w=m+_;w<0||w>=b||(M+=r[_+u]*e[p+_*s])}t[p]=M/i}}function Yo(e,t,n,s){const[r,i,o]=n,a=r*i*o;if(!Array.isArray(e)||e.length!==3||e.some(c=>c.length!==a)||t.length!==a)throw new Error("Native WebGL2 tissue-prior dimensions do not match");const f=kn(s,"partialVolumeSigma",0,0,2),l=kn(s,"brainSupportPower",1,1e-6,1e6);let u=null,d=null,g=1;if(f>0){const c=Math.max(1,Math.round(3*f));d=new Float32Array(c*2+1),g=0;for(let p=-c;p<=c;p++){const m=Math.exp(-.5*p*p/(f*f));d[p+c]=m,g+=m}u=new Float32Array(a)}for(const c of e){let p=c;d&&(Zn(c,u,n,1,d,g),Zn(u,c,n,r,d,g),Zn(c,u,n,r*i,d,g),p=u);for(let m=0;m<a;m++){const b=Math.pow(Math.max(0,Math.min(1,t[m])),l);c[m]=Math.max(0,Math.min(1,p[m]*b))}}return e}const U=256,ht=64,Ht=8,_t=ht+2*Ht,fn=_t*4,nt=U*64,Wn=U*U*2,Nn=9216,tr=Nn*8,ls=[1,3,5,7,13,19,31,19,13,7,5,3,1],gt=(e,t)=>Array.from({length:e},(n,s)=>t(s)).join(""),nr=280,sr=150,Ko=55,Qn=112;let us=0;function cs(e,t){const n=Math.floor(e/4),s=e%4,r=s===0?n:n+1,i=n,o=s*8,a=s===0?0:32-o;return(e&63|(r&15)<<6|(i&15)<<10|(o&31)<<14|(a&31)<<19|(t?1:0)<<24)>>>0}function rr(e){var t;if(e!=null&&e.webgpuExecMode)return String(e.webgpuExecMode).toLowerCase();try{const n=new URLSearchParams(((t=globalThis.location)==null?void 0:t.search)||"").get("webgpuExec");if(n)return n.toLowerCase()}catch(n){}return""}function Zo(e){var n,s;if(!e)return"";if(typeof e.__glRenderer=="string")return e.__glRenderer;let t="";try{const r=typeof navigator!="undefined"&&/Firefox/i.test(navigator.userAgent||""),i=typeof OffscreenCanvas!="undefined"?new OffscreenCanvas(1,1):typeof document!="undefined"?document.createElement("canvas"):null,o=(n=i==null?void 0:i.getContext)==null?void 0:n.call(i,"webgl2",{powerPreference:"high-performance"});if(o){if(r)t=String(o.getParameter(o.RENDERER)||"");else{const a=o.getExtension("WEBGL_debug_renderer_info");t=String((a?o.getParameter(a.UNMASKED_RENDERER_WEBGL):o.getParameter(o.RENDERER))||"")}(s=o.getExtension("WEBGL_lose_context"))==null||s.loseContext()}}catch(r){}return e.__glRenderer=t,t}function qn(e){var g;const t=(e==null?void 0:e.__adapterInfo)||(e==null?void 0:e.adapterInfo)||{},n=String(t.vendor||"").toLowerCase(),s=String(t.architecture||"").toLowerCase(),r=typeof navigator!="undefined"&&navigator.userAgent||"",i=typeof navigator!="undefined"&&(((g=navigator.userAgentData)==null?void 0:g.platform)||navigator.platform||"")||"",o=n==="apple"||/Mac|iPhone|iPad|iPod/i.test(`${i} ${r}`)&&!["intel","amd","nvidia","microsoft"].includes(n),a=!o&&(/Win/i.test(i)||/Windows/i.test(r)),f=a&&!n?Zo(e):String((e==null?void 0:e.__glRenderer)||""),l=`${t.device||""} ${t.description||""} ${f}`,u=n||(/\bintel\b/i.test(f)?"intel":/\bmicrosoft\b|\bbasic render\b/i.test(f)?"microsoft":""),d=a&&(u==="microsoft"||u==="intel"&&!/\bArc\b/i.test(l)&&(/^gen-(9|11|12lp)/i.test(s)||/(?:UHD|HD)\s+Graphics|Iris(?:\(R\))?\s*(?:Plus|Xe)|Pentium|Celeron/i.test(l)));return{vendor:u,arch:s,desc:l,isApple:o,isWindows:a,isWindowsSharedIgpu:d}}function or(e,t){const n=rr(t);if(n==="single"||n==="pipelined"||n==="paced"||n==="calibrate")return n;if(n==="chunked")return"paced";const s=qn(e);return s.isApple?"single":s.isWindows?e!=null&&e.__v4WinCalibrated?e.__v4WinFast?"pipelined":"paced":"calibrate":"pipelined"}function ar(e,t){const n=rr(t);return n==="single"?!1:n==="paced"||n==="chunked"||n==="calibrate"?!0:n==="pipelined"?!1:qn(e).isWindows}function ir(e,t,n){return(n==null?void 0:n.forceLowMem128)===!1?!1:qn(e).isWindowsSharedIgpu&&t.cs>=24&&t.cs%4===0}function lr(e,t){var i,o;if(!((o=(i=e==null?void 0:e.features)==null?void 0:i.has)!=null&&o.call(i,"subgroups"))||t!=null&&t.disableSubgroups)return"none";if(t!=null&&t.forceSubgroupMode)return t.forceSubgroupMode;const n=e.__adapterInfo||e.adapterInfo||{},s=n.subgroupMinSize|0,r=n.subgroupMaxSize|0;return s===32&&r===32?"sg32":s===64&&r===64?"sg64":s>=32&&r<=64?"sg32_64":s>=8&&r<=32?"sg_small":"none"}function ur(e){switch(e){case"sg32":return"subgroups32";case"sg64":return"subgroups64-bf";case"sg32_64":return"subgroups32-64";case"sg_small":return"subgroups8-32";default:return"shared-8KiB"}}function cr(){return typeof requestAnimationFrame!="function"?new Promise(e=>setTimeout(e,0)):new Promise(e=>{let t=!1;const n=()=>{t||(t=!0,e())},s=setTimeout(n,16);requestAnimationFrame(()=>{clearTimeout(s),setTimeout(n,0)})})}function fr(e,t,n){let s=t,r=null,i=null,o=performance.now(),a=performance.now();function f(m,b,M){return Be(this,arguments,function*(u,d,g,{forceUiYield:c=!1,emitTick:p=!0}={}){r&&(yield r,r=null);const _=performance.now();e.queue.submit([u.finish()]);const w=e.createCommandEncoder(),v=e.queue.onSubmittedWorkDone().then(()=>{const h=performance.now(),k=Math.max(_,o),F=Math.max(0,h-k);h>o&&(o=h),d>=256&&F>.2&&(s=Math.max(.005,Math.min(2,.7*s+.3*(F/d))),e.__v4MsPerStrip=s)});r=i,i=v,p&&n&&n(g);const S=performance.now();return(c||S-a>=Ko)&&(yield cr(),a=performance.now()),w})}function l(){return Be(this,null,function*(){r&&(yield r,r=null)})}return{submitChunk:f,waitBeforeFinalSubmit:l,getMsPerStrip:()=>s,setMsPerStrip:u=>{s=Math.max(.005,Math.min(2,u)),e.__v4MsPerStrip=s,o=performance.now()}}}function bs(e,t,n){const s=e.isFull?nt:e.mainStrips.length,r=e.isFull||!e.extStrips?0:e.extStrips.length,i=t+1<n?e.isFull?nt:e.normStrips?e.normStrips.length:0:0,o=Math.max(16,Math.round(i*.12));return t===0?{convWork:Math.max(64,Math.round(s*.12)),normWork:o}:{convWork:s+r,normWork:o}}function pr(e,t){let n=0;for(let r=0;r<t;r++){const i=bs(e.layers[r],r,t);n+=i.convWork+i.normWork}const s=e.clsSkipped?e.clsStrips.length:nt;return n+=Math.max(64,Math.round(s*.2)),Math.max(1,n)}const mr=new Float32Array(1),Qo=new Uint32Array(mr.buffer);function fs(e){mr[0]=e;const t=Qo[0],n=t>>>16&32768,s=t>>>23&255;let r=t&8388607;if(s===255)return n|31744|(r?512:0);let i=s-127+15;return i<=0?i<-10?n:(r=(r|8388608)>>>1-i,n|r+4096>>>13):i>=31?n|31744:n|Math.min(31744,(i<<10)+(r+4096>>>13))}function Jo(e){const t=new Uint16Array(e.length);for(let n=0;n<e.length;n++)t[n]=fs(e[n]);return t}const un=new Map,ea=12,dr=new WeakMap,ta=new WeakMap;function na(e){let t=2166136261,n=2654435769;const s=e.byteLength>>>2;if((e.byteOffset&3)===0){const r=new Uint32Array(e.buffer,e.byteOffset,s);for(let i=0;i<r.length;i++){const o=r[i];t=Math.imul(t^o,16777619)>>>0,n=Math.imul(n^(o<<13|o>>>19),2246822507)>>>0}}else for(let r=0;r<s*4;r+=4){const i=e[r]|e[r+1]<<8|e[r+2]<<16|e[r+3]<<24;t=Math.imul(t^i,16777619)>>>0,n=Math.imul(n^(i<<13|i>>>19),2246822507)>>>0}for(let r=s*4;r<e.byteLength;r++)t=Math.imul(t^e[r],16777619)>>>0;return`${e.byteLength}_${t.toString(16)}_${n.toString(16)}`}function sa(e,t,n,s){const r=s!=null&&s.classifierBias?JSON.stringify(s.classifierBias):"",i=`${na(e)}|${n.chan}|${n.cs}|${n.nclass}|${n.norm}|${n.eps}|${r}`;if(un.has(i)){const a=un.get(i);return un.delete(i),un.set(i,a),a}const o=ia(t,n);if(un.size>=ea){const a=un.keys().next().value;un.delete(a)}return un.set(i,o),o}function hs(e,t){let n=e.get(t);return n||(n=new Map,e.set(t,n)),n}function Vt(e,t,n){let s=e.get(t);return s||(s=n().catch(r=>{throw e.delete(t),r}),e.set(t,s)),s}function Dn(e,t){let n=0;return{alloc:(r,i)=>{const o=Math.max(16,Math.ceil(r/16)*16),a=e.createBuffer({size:o,usage:i});return t.push(a),n+=o,a},getBytes:()=>n,resetBytes:()=>{n=0}}}const an=new WeakMap;function vn(e){const t=e?an.get(e):null;if(t){an.delete(e),t.inUse=!1;for(const n of t.buffers)n.destroy();t.buffers.length=0}}function gr(e,t,n){const s=an.get(e);if(s){if(s.key===t&&!s.inUse)return s.inUse=!0,s;if(s.inUse){const o=n();return Ct(bt({key:t},o),{inUse:!0,pooled:!1})}an.delete(e);for(const o of s.buffers)o.destroy();s.buffers.length=0}const r=n(),i=Ct(bt({key:t},r),{inUse:!0,pooled:!0});return an.set(e,i),i}function Rt(e,t,n){return e.createShaderModule({label:t,code:n})}function ws(e,t,n,s,r){return Be(this,null,function*(){const i=e.createBindGroupLayout({entries:r.map((o,a)=>typeof o=="string"?{binding:a,visibility:GPUShaderStage.COMPUTE,buffer:{type:o}}:{binding:a,visibility:GPUShaderStage.COMPUTE,buffer:o})});try{const o=yield e.createComputePipelineAsync({label:t,layout:e.createPipelineLayout({bindGroupLayouts:[i]}),compute:{module:n,entryPoint:s}});return{bgl:i,pipe:o}}catch(o){if(n!=null&&n.getCompilationInfo){const a=yield n.getCompilationInfo().catch(()=>null),f=a?a.messages.filter(l=>l.type==="error"):[];if(f.length)throw new Error(`meshnet_fast_v4 [${t}] WGSL error: `+f.map(l=>`L${l.lineNum}:${l.linePos} ${l.message}`).join(" | "))}throw o}})}function ps(e,t){const n=t?`enable f16;
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
  let dstX4 = ${Ht}u + wid.x * 8u + x4Loc;
  for (var s : u32 = 0u; s < 4u; s = s + 1u) {
    let zLoc = s * 8u + zOff;
    let r = zLoc * 33u + xBase;
    inp_4[((Z0 + zLoc) * 256u + Y) * ${_t}u + dstX4] =
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
  let dstX4 = ${Ht}u + wid.x * 8u + x4Loc;
  for (var s : u32 = 0u; s < 4u; s = s + 1u) {
    let zl = s * 8u + zOff;
    let r = zl * 33u + xBase;
    inp_4[((Z0 + zl) * 256u + Y) * ${_t}u + dstX4] =
      ${r}(${s}(sh[r]), ${s}(sh[r + 1u]), ${s}(sh[r + 2u]), ${s}(sh[r + 3u]));
  }
}`}function _r(){return`
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
}`}function ra(){return`
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
}`}function oa(){return`
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
}`}function Ts(){return`
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
}`}function on(e,t,n,s,r){return Be(this,null,function*(){const i=hs(ta,e);let o=i.get(t);return o||(o=Be(null,null,function*(){const a=Rt(e,t,n());return ws(e,t,a,s,r)}).catch(a=>{throw i.delete(t),a}),i.set(t,o)),o})}function Os(e,t,n,s,r){t.fill(0);const i=U*U*U;if(!(r&&e[0]===s&&e[i-1]===s))return{hasBgSkip:!1};if(n.fill(0),(e instanceof Uint8Array||e instanceof Uint8ClampedArray)&&(e.byteOffset&3)===0&&Number.isInteger(s)&&s>=0&&s<=255){const f=new Uint32Array(e.buffer,e.byteOffset,i>>>2),l=new Uint32Array(n.buffer,n.byteOffset,U*U>>>2),u=(s&255)*16843009>>>0;let d=0;for(let g=0;g<U;g++)for(let c=0;c<16384;c++)l[c]|=f[d++]^u}else{let f=0;const l=U*U;for(let u=0;u<U;u++)for(let d=0;d<l;d++,f++)e[f]!==s&&(n[d]=1)}let a=0;for(let f=0;f<U;f++){const l=f*U;for(let u=0;u<U;u++)n[l+u]!==0&&(t[u*U+f]=1,a++)}return a===0||a>=6e4?{hasBgSkip:!1}:{hasBgSkip:!0}}function br(e){return e?`${e.grayMask}_${e.whiteMask}_${e.csfMask}_${e.temperature}_${e.supportTemperature}`:"seg"}function hr(u,d,g,c,p,m,b){return Be(this,arguments,function*(e,t,n,s,r,i,o,{includeCls:a=!0,sequential:f=!1,shouldAbort:l=null}={}){var Y;const M=hs(dr,e),_=s?1:0,w=r||"none",v=o.useUniformWeff?1:0,S=(D,re,te,Q)=>ws(e,D,re,te,Q),h=["storage","storage","storage","storage"],k=["read-only-storage","storage","storage","storage","storage","storage","read-only-storage","storage","uniform","uniform","uniform"],F=["read-only-storage","read-only-storage","storage","storage","read-only-storage","uniform"],$=["storage","storage","storage","storage","read-only-storage","read-only-storage",{type:"uniform",hasDynamicOffset:!0,minBindingSize:32}],A=["storage","storage","storage","storage","read-only-storage","read-only-storage","read-only-storage","uniform"],x=["read-only-storage","read-only-storage","read-only-storage","read-only-storage","storage","storage",o.useUniformWeff?"uniform":"read-only-storage","read-only-storage",{type:"uniform",hasDynamicOffset:!0,minBindingSize:32}],C=["read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","storage","uniform","uniform","uniform"],z=`128|init|${t.cs}|${t.activation}|${_}`,I=`128|conv0|${t.cs}|${t.dilations[0]}|${t.norm}|${_}|${w}`,E=`128|prep|${t.chan}|${t.cs}|${t.activation}|${t.norm}|${_}`,T=`128|flush|${t.cs}|${_}`,B=`128|norm|${t.cs}|${t.activation}|${t.norm}|${_}`,O=`128|conv|${t.chan}|${t.cs}|${t.activation}|${t.norm}|${v}|${_}|${w}`,ae=`128|cls|${t.chan}|${t.cs}|${t.nclass}|${(Y=n==null?void 0:n.clsK4)!=null?Y:0}|${o.numConvs}|${t.activation}|${t.norm}|${_}|${br(i)}`,ce=()=>Vt(M,z,()=>{const D=Rt(e,"init_act8_128",o.initActWgsl());return S("init_act8_128",D,"main",h)}),V=()=>Vt(M,I,()=>Be(null,null,function*(){const D=Rt(e,"conv0_128",o.conv0Wgsl()),re=yield Promise.all(o.halfPass0?[S("conv0_128_lo",D,"main_lo",k),S("conv0_128_hi",D,"main_hi",k),S("conv0_128_bg_lo",D,"main_bg_lo",k),S("conv0_128_bg_hi",D,"main_bg_hi",k)]:[S("conv0_128",D,"main",k),S("conv0_128_bg",D,"main_bg",k)]);return o.halfPass0?{lo:re[0],hi:re[1],bgLo:re[2],bgHi:re[3]}:{main:re[0],bg:re[1]}})),W=()=>Vt(M,E,()=>Be(null,null,function*(){const D=Rt(e,"prep_128",o.prepWgsl()),[re,te]=yield Promise.all([S("moments_finish_128",D,"moments_finish",F),S("prep_weff_128",D,"prep_weff",F)]);return{pMomFin:re,pPrepW:te}})),j=()=>Vt(M,T,()=>{const D=Rt(e,"flush_128",o.flushWgsl());return S("flush_stage_128",D,"main",$)}),ee=()=>Vt(M,B,()=>Be(null,null,function*(){const D=Rt(e,"norm_128",o.normWgsl()),[re,te]=yield Promise.all([S("norm_quant8_128",D,"main",A),S("norm_halo_fill_128",D,"norm_halo_fill",A)]);return{pNorm:re,pNormHalo:te}})),G=()=>a?Vt(M,ae,()=>{const D=Rt(e,"cls_128",o.clsWgsl());return S("classify_v4_128",D,"main",C)}):Promise.resolve(null),ie=()=>Vt(M,O,()=>Be(null,null,function*(){const D=Rt(e,"conv_128",o.convWgsl());if(o.halfPassConv){const[N,X,q,_e,se,Le]=yield Promise.all([S("conv_128_lo",D,"main_lo",x),S("conv_128_hi",D,"main_hi",x),S("conv_128_ext_lo",D,"main_ext_lo",x),S("conv_128_ext_hi",D,"main_ext_hi",x),S("conv_128_bg_lo",D,"main_bg_lo",x),S("conv_128_bg_hi",D,"main_bg_hi",x)]);return{lo:N,hi:X,extLo:q,extHi:_e,bgLo:se,bgHi:Le}}const[re,te,Q]=yield Promise.all([S("conv_128",D,"main",x),S("conv_128_ext",D,"main_ext",x),S("conv_128_bg",D,"main_bg",x)]);return{main:re,ext:te,bg:Q}}));if(f){for(const D of[ce,W,j,ee,V,ie,G]){if(l!=null&&l())return null;yield D()}return null}const[le,Ae,pe,Me,H,ne,P]=yield Promise.all([ce(),V(),W(),j(),ee(),G(),ie()]);return{pInit:le,pMomFin:pe.pMomFin,pPrepW:pe.pPrepW,pFlush:Me,pNorm:H.pNorm,pNormHalo:H.pNormHalo,pCls:ne,pConv0:Ae,pConv:P}})}function wr(d,g,c,p,m,b,M,_){return Be(this,arguments,function*(e,t,n,s,r,i,o,a,{includeCls:f=!0,sequential:l=!1,shouldAbort:u=null}={}){var Y;const w=hs(dr,e),v=s?1:0,S=r||"none",h=i?1:0,k=a.useUniformWeff?1:0,F=a.chunkableStd?1:0,$=(D,re,te,Q)=>ws(e,D,re,te,Q),A=["storage","storage"],x=["read-only-storage","storage","storage","read-only-storage","read-only-storage","storage","storage","read-only-storage","uniform"],C=["read-only-storage","read-only-storage","storage","storage","storage","storage","read-only-storage","uniform"],z=["storage","storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","uniform"],I=["read-only-storage","read-only-storage","storage","storage","storage","storage",a.useUniformWeff?"uniform":"read-only-storage","read-only-storage",a.chunkableStd?{type:"uniform",hasDynamicOffset:!0,minBindingSize:32}:"uniform"],E=["read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","storage","read-only-storage","uniform"],T=`std|init|${t.cs}|${t.activation}|${v}|${h}`,B=`std|conv0|${t.cs}|${t.dilations[0]}|${t.norm}|${v}|${S}|${h}`,O=`std|prep|${t.chan}|${t.cs}|${t.activation}|${t.norm}|${v}|${h}`,ae=`std|norm|${t.cs}|${t.activation}|${t.norm}|${v}|${h}`,ce=`std|conv|${t.chan}|${t.cs}|${t.activation}|${t.norm}|${k}|${v}|${S}|${h}${F?"|chk1":""}`,V=`std|cls|${t.chan}|${t.cs}|${t.nclass}|${(Y=n==null?void 0:n.clsK4)!=null?Y:0}|${t.activation}|${t.norm}|${v}|${h}|${br(o)}`,W=()=>Vt(w,T,()=>{const D=Rt(e,"init_act8",a.initActWgsl());return $("init_act8",D,"main",A)}),j=()=>Vt(w,B,()=>Be(null,null,function*(){const D=Rt(e,"conv0",a.conv0Wgsl()),re=yield Promise.all(a.halfPass0?[$("conv0_lo",D,"main_lo",x),$("conv0_hi",D,"main_hi",x),$("conv0_bg_lo",D,"main_bg_lo",x),$("conv0_bg_hi",D,"main_bg_hi",x)]:[$("conv0",D,"main",x),$("conv0_bg",D,"main_bg",x)]);return a.halfPass0?{lo:re[0],hi:re[1],bgLo:re[2],bgHi:re[3]}:{main:re[0],bg:re[1]}})),ee=()=>Vt(w,O,()=>Be(null,null,function*(){const D=Rt(e,"prep",a.prepWgsl()),[re,te]=yield Promise.all([$("moments_finish",D,"moments_finish",C),$("prep_weff",D,"prep_weff",C)]);return{pMomFin:re,pPrepW:te}})),G=()=>Vt(w,ae,()=>Be(null,null,function*(){const D=Rt(e,"norm",a.normWgsl()),[re,te]=yield Promise.all([$("norm_quant8",D,"main",z),$("norm_halo_fill",D,"norm_halo_fill",z)]);return{pNorm:re,pNormHalo:te}})),ie=()=>f?Vt(w,V,()=>{const D=Rt(e,"cls",a.clsWgsl());return $("classify_v4",D,"main",E)}):Promise.resolve(null),le=()=>Vt(w,ce,()=>Be(null,null,function*(){const D=Rt(e,"conv",a.convWgsl());if(a.halfPassConv){const[Q,N,X,q]=yield Promise.all([$("conv_lo",D,"main_lo",I),$("conv_hi",D,"main_hi",I),$("conv_ext_lo",D,"main_ext_lo",I),$("conv_ext_hi",D,"main_ext_hi",I)]);return{lo:Q,hi:N,extLo:X,extHi:q}}const[re,te]=yield Promise.all([$("conv",D,"main",I),$("conv_ext",D,"main_ext",I)]);return{main:re,ext:te}}));if(l){for(const D of[W,ee,G,j,le,ie]){if(u!=null&&u())return null;yield D()}return null}const[Ae,pe,Me,H,ne,P]=yield Promise.all([W(),j(),ee(),G(),ie(),le()]);return{pInit:Ae,pMomFin:Me.pMomFin,pPrepW:Me.pPrepW,pNorm:H.pNorm,pNormHalo:H.pNormHalo,pCls:ne,pConv0:pe,pConv:P}})}function Ns(e,t,n,s,r){n.fill(0);const i=r&&e[0]===0&&e[e.length-1]===0;let o=0,a=0;if(!i){if(s)for(let f=0;f<U;f++){const l=f*U*fn;for(let u=0;u<U;u++){let d=l+u*fn+32;for(let g=0;g<U;g++,a++,d++){const c=e[a];t[d]=c===0?0:fs(c)}}}else for(let f=0;f<U;f++){const l=f*U*fn;for(let u=0;u<U;u++){const d=f*U*U+u*U;t.set(e.subarray(d,d+U),l+u*fn+32)}}return{hasBgSkip:!1}}for(let f=0;f<U;f++){const l=f*U*fn;for(let u=0;u<U;u++){let d=!1,g=l+u*fn+32;for(let c=0;c<U;c++,a++,g++){const p=e[a];p!==0?(t[g]=s?fs(p):p,d=!0):t[g]=0}d&&(n[f*U+u]=1,o++)}}return o===0||o>=6e4?{hasBgSkip:!1}:{hasBgSkip:!0}}function Un(e,t){const n=new Uint8Array(U*U);for(let s=0;s<U;s++){const r=s*U,i=s-t,o=s+t;for(let a=0;a<U;a++){if(!e[r+a])continue;const f=a-t,l=a+t;if(i>=0){const u=i*U;f>=0&&(n[u+f]=1),n[u+a]=1,l<U&&(n[u+l]=1)}if(f>=0&&(n[r+f]=1),n[r+a]=1,l<U&&(n[r+l]=1),o>=0&&o<U){const u=o*U;f>=0&&(n[u+f]=1),n[u+a]=1,l<U&&(n[u+l]=1)}}}return n}function aa(e,t){const n=new Uint8Array(U*U),s=new Uint8Array(U*U),r=new Int32Array(U+1);for(let i=0;i<U;i++){const o=i*U;for(let a=0;a<U;a++)r[a+1]=r[a]+e[o+a];for(let a=0;a<U;a++)r[Math.min(U-1,a+t)+1]-r[Math.max(0,a-t)]>0&&(n[o+a]=1)}for(let i=0;i<U;i++){for(let o=0;o<U;o++)r[o+1]=r[o]+n[o*U+i];for(let o=0;o<U;o++)r[Math.min(U-1,o+t)+1]-r[Math.max(0,o-t)]>0&&(s[o*U+i]=1)}return s}function Jn(e){const t=new Uint8Array(nt);for(let n=0;n<U;n++){const s=n*U,r=n*64;for(let i=0;i<64;i++){const o=s+(i<<2);e[o]|e[o+1]|e[o+2]|e[o+3]&&(t[r+i]=1)}}return t}function Gn(e){const t=new Uint8Array(U*U);for(let n=0;n<U;n++){const s=n*U,r=n*64;for(let i=0;i<64;i++)if(e[r+i]){const o=s+(i<<2);t[o]=1,t[o+1]=1,t[o+2]=1,t[o+3]=1}}return t}function En(e){let t=0;for(let r=0;r<nt;r++)t+=e[r];const n=new Uint32Array(t);let s=0;for(let r=0;r<U;r++){const i=r*64;for(let o=0;o<64;o++)e[i+o]&&(n[s++]=r<<8|o)}return n}function cn(e){let t=0;for(let n=0;n<e.length;n++)t+=e[n];return t}function Ds(e){const t=new Uint8Array(nt);if(e===1024)for(let n=0;n<32;n++)for(let s=0;s<32;s++){const r=n*8+(n*3+s*5&7),i=s*2+(n+s&1);t[r*64+i]=1}else if(e===512)for(let n=0;n<32;n++)for(let s=0;s<16;s++){const r=n*8+(n*3+s*5&7),i=s*4+(n+s*3&3);t[r*64+i]=1}else for(let n=0;n<16;n++)for(let s=0;s<16;s++){const r=n*16+(n*7+s*3&15),i=s*4+(n+s*3&3);t[r*64+i]=1}return t}function vr(e,t,n,s){const r=n.length,i=()=>({isFull:!0,mode:"full",writtenMask:null,computedMask:null,mainStrips:null,extStrips:null,nMomExt:0,normStrips:null,haloRows:null,bgStrip:null,extWeight:0});if(!s||!t.hasBgSkip)return{clsSkipped:!1,clsStrips:null,layers:Array.from({length:r},i)};const o=Jn(aa(e,3)),a=cn(o)<15800,f=a?En(o):null,l=new Array(r);let u=null;for(let _=0;_<r;_++){const w=n[_],v=Un(_===0?e:u,w);if(_>0)for(let h=0;h<U;h++){const k=h<w||h>=U-w,F=h*U;for(let $=0;$<U;$++)(k||$<w||$>=U-w)&&(v[F+$]=1)}u=v;const S=new Uint8Array(nt);for(let h=0;h<U;h++){const k=h*U,F=h*64;for(let $=0;$<64;$++){const A=k+($<<2);v[A]|v[A+1]|v[A+2]|v[A+3]||(S[F+$]=1)}}l[_]=S}const d=new Array(r);d[r-1]=o;for(let _=r-2;_>=0;_--)d[_]=Jn(Un(Gn(d[_+1]),n[_+1]));const g=a&&r>=4&&n[r-1]<=2&&n[r-2]<=4&&n[r-3]<=6,c=Math.max(1,r-3),p=new Array(r).fill(null),m=new Array(r).fill(null),b=new Array(r).fill(null);if(g){const w=(nt-cn(d[r-1]))/nt>=.52?256:512,v=1024,S=Ds(w),h=Ds(v),k=d[r-1],F=new Uint8Array(nt);let $=0;for(let A=0;A<nt;A++)S[A]&&!k[A]&&(F[A]=1,$++);if($>0&&$<=Nn&&cn(k)+$<=15360){p[r-1]=F,m[r-1]=new Uint8Array(nt),b[r-1]=S;for(let A=r-2;A>=c;A--){const x=new Uint8Array(nt),C=d[A+1],z=p[A+1];for(let V=0;V<nt;V++)x[V]=C[V]|z[V];const I=Jn(Un(Gn(x),n[A+1])),E=new Uint8Array(nt),T=d[A];for(let V=0;V<nt;V++)I[V]&&!T[V]&&(E[V]=1);const B=A===c?h:S,O=new Uint8Array(nt);let ae=0,ce=0;for(let V=0;V<nt;V++)(E[V]||B[V])&&!T[V]&&(O[V]=1,ae++,B[V]&&ce++);if(ce===0||ae>Nn||cn(T)+ae>15360){const V=A+1,W=d[V],j=m[V],ee=new Uint8Array(nt);let G=0;for(let ie=0;ie<nt;ie++)(j[ie]||h[ie])&&!W[ie]&&(ee[ie]=1,G++);G<=Nn&&cn(W)+G<=15360&&(p[V]=ee,b[V]=h);break}m[A]=E,p[A]=O,b[A]=B}}}const M=new Array(r);for(let _=0;_<r;_++){const w=cn(l[_]),v=nt-w,S=p[_]!==null,h=S?cn(d[_])+cn(p[_]):1/0;if(w>=512&&v<=h){const k=new Uint8Array(nt);let F=-1;for(let C=0;C<nt;C++)l[_][C]?F<0&&(F=C):k[C]=1;const $=k.slice();$[F]=1;const A={z:F>>>6,yWg:F&63,packed:F>>>6<<8|F&63},x=En(k);M[_]={isFull:!1,mode:"rpure",writtenMask:k,computedMask:$,mainStrips:x,extStrips:_===0?null:new Uint32Array([A.packed]),nMomExt:_===0?0:1,normStrips:x,haloRows:null,bgStrip:A,extWeight:w}}else if(S&&h<=15360){const k=d[_],F=p[_],$=m[_],A=b[_],x=En(k),C=[],z=[];for(let O=0;O<U;O++){const ae=O*64;for(let ce=0;ce<64;ce++){const V=ae+ce;if(!F[V])continue;const W=O<<8|ce;A[V]?C.push(W):z.push(W)}}const I=C.length;if(I===0){M[_]=i();continue}const E=new Uint32Array(C.length+z.length);E.set(C,0),E.set(z,C.length);const T=new Uint8Array(nt),B=new Uint8Array(nt);for(let O=0;O<nt;O++)T[O]=k[O]|$[O],B[O]=k[O]|F[O];M[_]={isFull:!1,mode:"bwd",writtenMask:T,computedMask:B,mainStrips:x,extStrips:E,nMomExt:I,normStrips:_+1<r?En(T):null,haloRows:null,bgStrip:null,extWeight:(nt-x.length)/I}}else M[_]=i()}for(let _=r-2;_>=0;_--)M[_].mode==="bwd"&&M[_+1].mode!=="bwd"&&(M[_]=i());for(let _=0;_<r-1;_++){const w=M[_];if(w.mode!=="rpure")continue;const v=M[_+1],S=v.isFull?new Uint8Array(U*U).fill(1):Un(Gn(v.computedMask),n[_+1]),h=Gn(w.writtenMask),k=[];for(let F=0;F<U;F++){const $=F*U;for(let A=0;A<U;A++)S[$+A]&&!h[$+A]&&k.push(F<<8|A)}k.length>0&&(w.haloRows=new Uint32Array(k))}return{clsSkipped:a,clsStrips:f,layers:M}}function ia(e,t){const n=t.chan,s=t.cs,r=s/4,i=t.nclass,o=Math.ceil(i/4),{convs:a,affines:f,classifier:l}=e,u=a.length,d=27*r,g=9*s*3*r,c=s*o,p=(d+(u-1)*g+c)*4,m=new Float32Array(p),b=4*s,M=u*b,_=new Float32Array(M+o*4),w=(h,k,F)=>{if(t.norm!=="gn"||k>=n)return 1;const $=a[h],A=F*27,x=k*A;let C=0;for(let z=0;z<A;z++)C+=Math.abs($.w[x+z]);return Math.max(C/16,1e-6)};for(let h=0;h<a[0].outC;h++){const k=w(0,h,a[0].inC),F=1/k;for(let $=0;$<27;$++)m[$*s+h]=a[0].w[h*27+$]*F;_[2*s+h]=t.eps/(k*k),a[0].bias&&(_[3*s+h]=a[0].bias[h])}for(let h=a[0].outC;h<s;h++)_[2*s+h]=t.eps;for(let h=1;h<u;h++){const k=a[h],F=(d+(h-1)*g)*4,$=h*b;for(let A=0;A<k.outC;A++){const x=w(h,A,k.inC),C=1/x,z=A>>>2,I=A&3;for(let E=0;E<9;E++)for(let T=0;T<k.inC;T++)for(let B=0;B<3;B++){const O=E*3+B,ae=F+(((E*s+T)*3+B)*r+z)*4+I;m[ae]=k.w[(A*k.inC+T)*27+O]*C}_[$+2*s+A]=t.eps/(x*x),k.bias&&(_[$+3*s+A]=k.bias[A])}for(let A=k.outC;A<s;A++)_[$+2*s+A]=t.eps}for(let h=0;h<u;h++){const k=h*b,F=f[h];for(let $=0;$<n;$++)t.norm==="gn"?(_[k+$]=F!=null&&F.scale?F.scale[$]:1,_[k+s+$]=F!=null&&F.bias?F.bias[$]:0):(_[k+$]=1,_[k+s+$]=0)}const v=d+(u-1)*g,S=v*4;for(let h=0;h<n;h++)for(let k=0;k<i;k++)m[S+h*o*4+k]=l.w[k*l.inC+h];for(let h=0;h<o*4;h++)_[M+h]=h<i?l.bias?l.bias[h]:0:-1e30;return{wF32:m,wF16:Jo(m),qmetaF32:_,w0Vec4s:d,hiddenVec4PerLayer:g,clsVec4Off:v,clsBiasOff:M,metaStride:b,clsK4:o}}function An(e){if(e==="gelu_tanh")return`fn act(x : f32) -> f32 {
  let u = clamp(0.7978845608028654 * (x + 0.044715 * x * x * x), -9.0, 9.0);
  return 0.5 * x * (1.0 + tanh(u));
}`;if(e==="relu")return"fn act(x : f32) -> f32 { return max(x, 0.0); }";if(e==="elu")return"fn act(x : f32) -> f32 { return select(exp(clamp(x, -20.0, 0.0)) - 1.0, x, x >= 0.0); }";throw new Error(`meshnet_fast_v4: unsupported activation '${e}'`)}function xr(e){return e==="gelu_tanh"?{uZeroInt:7,uZeroFloat:7/255,uZeroWord:117901063,sterbenzSub:"1.02734375h",zeroBin:7}:e==="relu"?{uZeroInt:0,uZeroFloat:0,uZeroWord:0,sterbenzSub:"1.0h",zeroBin:0}:{uZeroInt:32,uZeroFloat:32/255,uZeroWord:538976288,sterbenzSub:"1.125h",zeroBin:32}}function yr({chan:e,clsK4:t,nclass:n,V4:s,suf:r,readBiasStmt:i,biasExpr:o,probCfg:a}){const f=`    var acc0 = ${s}(0.0${r});
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
${gt(4,g=>`    let l${g} = vec4<f32>(acc${g}) + vec4<f32>(${o(g)});
    let m${g} = l${g} > best_v;
    best_v = select(best_v, l${g}, m${g});
    best_k = select(best_k, vec4<u32>(k_base + ${g}u), m${g});
`)}  }

  labels8[row_idx * ${ht}u + x4] = best_k.x | (best_k.y << 8u) | (best_k.z << 16u) | (best_k.w << 24u);`;const l=`f32(${(1/Math.max(a.temperature,1e-6)).toExponential(8)})`,u=`f32(${(1/Math.max(a.supportTemperature,1e-6)).toExponential(8)})`,d=a.temperature===a.supportTemperature;return`  var max_v = vec4<f32>(-1.0e29);
  for (var k4 : u32 = 0u; k4 < ${t}u; k4 = k4 + 1u) {
${f}
${gt(4,g=>`    if (k_base + ${g}u < ${n}u) {
      max_v = max(max_v, vec4<f32>(acc${g}) + vec4<f32>(${o(g)}));
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
${gt(4,g=>`    let k${g} = k_base + ${g}u;
    if (k${g} < ${n}u) {
      let l${g} = vec4<f32>(acc${g}) + vec4<f32>(${o(g)});
      let v${g} = exp(clamp((l${g} - max_v) * ${l}, vec4<f32>(-80.0), vec4<f32>(0.0)));
      let s${g} = ${d?`v${g}`:`exp(clamp((l${g} - max_v) * ${u}, vec4<f32>(-80.0), vec4<f32>(0.0)))`};
      denom = denom + v${g};
      sup_denom = sup_denom + s${g};
      if (k${g} == 0u) { bg_w = s${g}; }
      let bit${g} = 1u << k${g};
      if ((${a.grayMask}u & bit${g}) != 0u) { gm_num = gm_num + v${g}; }
      if ((${a.whiteMask}u & bit${g}) != 0u) { wm_num = wm_num + v${g}; }
      if ((${a.csfMask}u & bit${g}) != 0u) { csf_num = csf_num + v${g}; }
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
  }`}function $r({device:e,hasF16:t,nvox:n,outBufBytes:s,inpBuf:r,act8_0:i,labels8Buf:o,readbackBuf:a,pInit:f,bgInit:l,pCls:u,bgCls:d,clsUbo:g,packed:c,modelEntry:p,probCfg:m,canGpuProb:b,probSlots:M,ownedBuffers:_,mkBuf:w}){let v=!1,S=!1,h=!1,k=!1;const F=new Uint8Array(U*U);let $=null,A=null,x=null,C=null;const z=(W,j)=>e.createBindGroup({layout:W,entries:j.map((ee,G)=>({binding:G,resource:ee&&ee.buffer?ee:{buffer:ee}}))});function I(){if(!$){const W=t?"prep_in_u8_f16":"prep_in_u8_f32";$=Be(null,null,function*(){const{bgl:j,pipe:ee}=yield on(e,W,()=>ps(!0,t),"main",["read-only-storage","storage","uniform"]);if(k)return null;const G=w(256*4,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST),ie=new Float32Array(256),le=z(j,[{buffer:o,offset:0,size:n},r,G]);return{pipe:ee,ubo:G,lutF32:ie,bg:le}}).catch(j=>{throw $=null,j})}return $}function E(){if(!A){const W=t?"prep_in_f32_f16":"prep_in_f32_f32";A=Be(null,null,function*(){const{bgl:j,pipe:ee}=yield on(e,W,()=>ps(!1,t),"main",["read-only-storage","storage","uniform"]);if(k)return null;const G=w(16,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST),ie=new Float32Array(4),le=s>=n*4?z(j,[{buffer:o,offset:0,size:n*4},r,G]):null,Ae=i.size>=n*4?z(j,[{buffer:i,offset:0,size:n*4},r,G]):null;return{pipe:ee,ubo:G,f32Tmp:ie,bgLabels:le,bgAct0:Ae}}).catch(j=>{throw A=null,j})}return A}function T(){return x||(x=Be(null,null,function*(){const{bgl:W,pipe:j}=yield on(e,"transpose_u8_v4",_r,"main",["read-only-storage","storage"]);if(k)return null;const ee=z(W,[{buffer:o,offset:0,size:n},{buffer:r,offset:0,size:n}]);return{pipe:j,bg:ee}}).catch(W=>{throw x=null,W})),x}function B(){return C||(C=Be(null,null,function*(){const[W,j,ee,G]=yield Promise.all([on(e,"prob_unpack_two",oa,"main",["read-only-storage","storage","storage"]),on(e,"prob_blur_axis",Ts,"blur_axis",["read-only-storage","storage","read-only-storage","uniform"]),on(e,"prob_blur_z_gate",Ts,"blur_z_gate",["read-only-storage","storage","read-only-storage","uniform"]),on(e,"transpose_f32",ra,"main",["read-only-storage","storage"])]);if(k)return null;const ie=GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST,le=144,Ae=w(le,ie),pe=w(le,ie),Me=w(le,ie),H=D=>({buffer:D,offset:0,size:s}),ne=z(W.bgl,[H(M.pass0HoldBuf),H(M.y0),H(M.y1)]),P=z(W.bgl,[H(o),H(M.b),H(M.sup)]),Y=[M.y0,M.y1,M.b].map(D=>({buf:D,bgBlurX:z(j.bgl,[H(D),H(o),H(M.sup),Ae]),bgBlurY:z(j.bgl,[H(o),H(D),H(M.sup),pe]),bgBlurZ:z(ee.bgl,[H(D),H(o),H(M.sup),Me]),bgTranspose:z(G.bgl,[H(o),H(D)])}));return{pUnpack:W.pipe,pBlurAxis:j.pipe,pBlurZGate:ee.pipe,pTransposeF32:G.pipe,bgUnpack0:ne,bgUnpack1:P,tissues:Y,uboX:Ae,uboY:pe,uboZ:Me,uboScratch:new ArrayBuffer(le),lastBlurKey:null}}).catch(W=>{throw C=null,W})),C}function O(){m?b&&B().catch(()=>{}):(I().catch(()=>{}),T().catch(()=>{}))}function ae(){k=!0}function ce(Ae){return Be(this,arguments,function*({volume:W,ioOpts:j,useCone:ee,padInputHost:G,headRowHost:ie,hasF16Flag:le}){var Me;if(j!=null&&j.gpuNativeInput){const H=(Me=j.normOffset)!=null?Me:0,ne=j.normRange||1,P=W instanceof Uint8Array||W instanceof Uint8ClampedArray,Y=s>=n*4||i.size>=n*4;if(P){const Q=Os(W,ie,F,H,ee),N=yield I();for(let X=0;X<256;X++)N.lutF32[X]=X===H?0:(X-H)/ne;return e.queue.writeBuffer(N.ubo,0,N.lutF32),e.queue.writeBuffer(o,0,W,0,n),{info:Q,runPrePasses(X,q){(!S||h)&&(X.clearBuffer(r),S=!0,h=!1);const _e=X.beginComputePass();if(_e.setPipeline(N.pipe),_e.setBindGroup(0,N.bg),_e.dispatchWorkgroups(8,U,8),_e.end(),q.push("preprocess"),v){const se=X.beginComputePass();se.setPipeline(f.pipe),se.setBindGroup(0,l),se.dispatchWorkgroups(1,U,U),se.end(),q.push("preprocess"),v=!1}}}}if(Y){const Q=Os(W,ie,F,H,ee),N=yield E(),X=!(s>=n*4),q=X?i:o,_e=X?N.bgAct0:N.bgLabels,se=W instanceof Float32Array?W:Float32Array.from(W);return N.f32Tmp[0]=H,N.f32Tmp[1]=ne,N.f32Tmp[2]=0,N.f32Tmp[3]=0,e.queue.writeBuffer(N.ubo,0,N.f32Tmp),e.queue.writeBuffer(q,0,se,0,n),{info:Q,runPrePasses(Le,Ce){(!S||h)&&(Le.clearBuffer(r),S=!0,h=!1);const Ve=Le.beginComputePass();if(Ve.setPipeline(N.pipe),Ve.setBindGroup(0,_e),Ve.dispatchWorkgroups(8,U,8),Ve.end(),Ce.push("preprocess"),v||X){const Ge=Le.beginComputePass();Ge.setPipeline(f.pipe),Ge.setBindGroup(0,l),Ge.dispatchWorkgroups(1,U,U),Ge.end(),Ce.push("preprocess"),v=!1}}}}const D=new Float32Array(n);for(let Q=0;Q<n;Q++){const N=W[Q];D[Q]=N===H?0:(N-H)/ne}const re=Sn(D,[U,U,U],[2,1,0]),te=Ns(re,G,ie,le,ee);return e.queue.writeBuffer(r,0,G),S=!0,h=!1,{info:te,runPrePasses(Q,N){if(v){const X=Q.beginComputePass();X.setPipeline(f.pipe),X.setBindGroup(0,l),X.dispatchWorkgroups(1,U,U),X.end(),N.push("preprocess"),v=!1}}}}const pe=Ns(W,G,ie,le,ee);return e.queue.writeBuffer(r,0,G),S=!0,h=!1,{info:pe,runPrePasses(H,ne){if(v){const P=H.beginComputePass();P.setPipeline(f.pipe),P.setBindGroup(0,l),P.dispatchWorkgroups(1,U,U),P.end(),ne.push("preprocess"),v=!1}}}})}function V(pe){return Be(this,arguments,function*({enc:W,schedule:j,passCategories:ee,u4Tmp:G,ioOpts:ie,paced:le=!1,onProgress:Ae=null}){const Me=j.clsSkipped?j.clsStrips.length:U;if(!m){G[0]=c.clsVec4Off,G[1]=c.clsBiasOff,G[2]=j.clsSkipped?0:1,G[3]=0,e.queue.writeBuffer(g,0,G);{const se=W.beginComputePass();se.setPipeline(u.pipe),se.setBindGroup(0,d),Me>0&&se.dispatchWorkgroups(1,j.clsSkipped?1:64,Me),se.end(),ee.push("classify")}if(ie!=null&&ie.gpuNativeOutput){const se=yield T(),Le=W.beginComputePass();Le.setPipeline(se.pipe),Le.setBindGroup(0,se.bg),Le.dispatchWorkgroups(8,U,8),Le.end(),ee.push("postprocess"),h=!0,W.copyBufferToBuffer(r,0,a,0,n),e.queue.submit([W.finish()]),yield a.mapAsync(GPUMapMode.READ);const Ce=new Uint8Array(a.getMappedRange()).slice();return a.unmap(),le&&Ae&&Ae(1,""),[Ce]}W.copyBufferToBuffer(o,0,a,0,s),e.queue.submit([W.finish()]),yield a.mapAsync(GPUMapMode.READ);const q=new Uint8Array(a.getMappedRange()),_e=new Float32Array(n);for(let se=0;se<n;se++)_e[se]=q[se];return a.unmap(),le&&Ae&&Ae(1,""),[_e]}if(b){const q=yield B();G[0]=c.clsVec4Off,G[1]=c.clsBiasOff,G[2]=j.clsSkipped?0:1,G[3]=0,e.queue.writeBuffer(g,0,G),G[3]=1,e.queue.writeBuffer(M.clsUbo1,0,G);{const Se=W.beginComputePass();Se.setPipeline(u.pipe),Se.setBindGroup(0,d),Me>0&&Se.dispatchWorkgroups(1,j.clsSkipped?1:64,Me),Se.end(),ee.push("classify")}W.copyBufferToBuffer(o,0,M.pass0HoldBuf,0,s),j.clsSkipped&&W.clearBuffer(o,0,s);{const Se=W.beginComputePass();Se.setPipeline(u.pipe),Se.setBindGroup(0,M.bgCls1),Me>0&&Se.dispatchWorkgroups(1,j.clsSkipped?1:64,Me),Se.end(),ee.push("classify")}v=!0;const _e=`${m.sigma}|${m.supportPower}`,se=m.sigma>0,Le=se?Math.max(1,Math.round(3*m.sigma)):0;if(q.lastBlurKey!==_e){const Se=new Uint32Array(q.uboScratch),Ye=new Float32Array(q.uboScratch);Ye.fill(0);let pt=1;if(se){pt=0;for(let it=-Le;it<=Le;it++){const ft=Math.exp(-.5*it*it/(m.sigma*m.sigma));Ye[4+it+Le]=ft,pt+=ft}}else Ye[4]=1;Se[1]=Le,Ye[2]=pt,Se[0]=0,Ye[3]=1,e.queue.writeBuffer(q.uboX,0,q.uboScratch),Se[0]=1,e.queue.writeBuffer(q.uboY,0,q.uboScratch),Se[0]=2,Ye[3]=m.supportPower,e.queue.writeBuffer(q.uboZ,0,q.uboScratch),q.lastBlurKey=_e}{const Se=W.beginComputePass();Se.setPipeline(q.pUnpack),Se.setBindGroup(0,q.bgUnpack0),Se.dispatchWorkgroups(256,256,1),Se.end(),ee.push("postprocess");const Ye=W.beginComputePass();Ye.setPipeline(q.pUnpack),Ye.setBindGroup(0,q.bgUnpack1),Ye.dispatchWorkgroups(256,256,1),Ye.end(),ee.push("postprocess")}le&&(e.queue.submit([W.finish()]),yield e.queue.onSubmittedWorkDone(),Ae&&Ae(.992,""),yield cr(),W=e.createCommandEncoder());const Ce=!!(ie!=null&&ie.gpuNativeOutput);for(let Se=0;Se<3;Se++){const Ye=q.tissues[Se];if(se){const it=W.beginComputePass();it.setPipeline(q.pBlurAxis),it.setBindGroup(0,Ye.bgBlurX),it.dispatchWorkgroups(4,64,U),it.end(),ee.push("postprocess");const ft=W.beginComputePass();ft.setPipeline(q.pBlurAxis),ft.setBindGroup(0,Ye.bgBlurY),ft.dispatchWorkgroups(4,64,U),ft.end(),ee.push("postprocess")}const pt=W.beginComputePass();if(pt.setPipeline(q.pBlurZGate),pt.setBindGroup(0,Ye.bgBlurZ),pt.dispatchWorkgroups(4,64,U),pt.end(),ee.push("postprocess"),Ce){const it=W.beginComputePass();it.setPipeline(q.pTransposeF32),it.setBindGroup(0,Ye.bgTranspose),it.dispatchWorkgroups(8,U,8),it.end(),ee.push("postprocess")}else Se<2&&W.copyBufferToBuffer(o,0,Ye.buf,0,s)}const Ve=Ce?[M.y0,M.y1,M.b]:[M.y0,M.y1,o];W.copyBufferToBuffer(Ve[0],0,a,0,s),e.queue.submit([W.finish()]),yield a.mapAsync(GPUMapMode.READ);const Ge=new Float32Array(a.getMappedRange()).slice();a.unmap();const Qe=Se=>Be(null,null,function*(){const Ye=e.createCommandEncoder();Ye.copyBufferToBuffer(Se,0,a,0,s),e.queue.submit([Ye.finish()]),yield a.mapAsync(GPUMapMode.READ);const pt=new Float32Array(a.getMappedRange()).slice();return a.unmap(),pt}),He=yield Qe(Ve[1]),Fe=yield Qe(Ve[2]);return le&&Ae&&Ae(1,""),[Ge,He,Fe]}G[0]=c.clsVec4Off,G[1]=c.clsBiasOff,G[2]=j.clsSkipped?0:1,G[3]=0,e.queue.writeBuffer(g,0,G);{const q=W.beginComputePass();q.setPipeline(u.pipe),q.setBindGroup(0,d),Me>0&&q.dispatchWorkgroups(1,j.clsSkipped?1:64,Me),q.end(),ee.push("classify"),W.copyBufferToBuffer(o,0,a,0,s)}e.queue.submit([W.finish()]),yield a.mapAsync(GPUMapMode.READ);const H=1/65535,ne=new Uint16Array(a.getMappedRange()),P=new Float32Array(n),Y=new Float32Array(n);for(let q=0;q<n;q++)P[q]=ne[q*2]*H,Y[q]=ne[q*2+1]*H;a.unmap(),G[3]=1,e.queue.writeBuffer(g,0,G);const D=e.createCommandEncoder();j.clsSkipped&&D.clearBuffer(o,0,s);const re=D.beginComputePass();re.setPipeline(u.pipe),re.setBindGroup(0,d),Me>0&&re.dispatchWorkgroups(1,j.clsSkipped?1:64,Me),re.end(),ee.push("classify"),D.copyBufferToBuffer(o,0,a,0,s),e.queue.submit([D.finish()]),yield a.mapAsync(GPUMapMode.READ);const te=new Uint16Array(a.getMappedRange()),Q=new Float32Array(n),N=new Float32Array(n);for(let q=0;q<n;q++)Q[q]=te[q*2]*H,N[q]=te[q*2+1]*H;a.unmap();const X=Yo([P,Y,Q],N,[U,U,U],p);return ie!=null&&ie.gpuNativeOutput?X.map(q=>Sn(q,[U,U,U],[2,1,0])):X})}return{prepareInput:ce,finishAndReadback:V,warmupIoPipelines:O,dispose:ae}}function Sr(e,t){if(e==="sg32")return{decls:"",entryArgs:"",add:r=>`subgroupAdd(${r})`,min:r=>`subgroupMin(${r})`,max:r=>`subgroupMax(${r})`};const n=(r,i)=>{const o=f=>r==="+"?`  x = x + subgroupShuffleXor(x, ${f}u);`:`  x = ${r}(x, subgroupShuffleXor(x, ${f}u));`;return e==="sg64"?`fn ${i}(v : f32) -> f32 {
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
             @builtin(subgroup_size) sg_size : u32`,add:r=>`sg32_add(${r}, sg_size)`,min:r=>`sg32_min(${r}, sg_size)`,max:r=>`sg32_max(${r}, sg_size)`}}function kr({V4:e,sw:t,norm:n,writeMomFn:s,momParams:r,momArgs:i}){const o=n==="none",a=o?"vec2<f32>":"vec4<f32>",f=o?`fn sg32_pack1(a : ${e}, slane : u32, c_out : u32, ${r}) -> u32 {
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
`,u=o?`      let p0 = sh_sg[rb];
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
`}function Mr(e){const{cs:t,chan:n,nclass:s,clsK4:r,dilations:i,activation:o,norm:a,hasF16:f,subgroupMode:l="none",splitHalves:u,probCfg:d,chunkableStd:g=!1}=e,c=t/4,p=u?t/2:t,m=p*_t,b=p*ht,M=9*t*3*c,_=M,w=M+c,v=f&&c%2===0&&w*8<=65536,S=xr(o),h=f?`enable f16;
`:"",k=f&&l!=="none",F=k?`enable subgroups;
`:"",$=f?"f16":"f32",A=f?"h":"f",x=`vec4<${$}>`,C=f?256:255,z=V=>{const W=V?".xzyw":"",j=(le,Ae,pe)=>u&&Ae>=p?`y8_1[${le} + ${(Ae-p)*ht}u] = ${pe};`:`y8_0[${le} + ${Ae*ht}u] = ${pe};`;if(k&&(l==="sg32"||l==="sg64"||l==="sg32_64")){const le=Sr(l,a);return{decls:le.decls,entryArgs:le.entryArgs,localHeader:"",emit:({accVar:Ae,cStart:pe,cEnd:Me,hrExpr:H,yRowExpr:ne,momMode:P,writeY8Expr:Y="true"})=>gt(Me-pe,D=>{const re=pe+D,te=P==="ext_and_main"?`mom_ext[(${H}) * ${t}u + ${re}u] = mv;
      mom_main[(row_idx * 2u + sg) * ${t}u + ${re}u] = mv;`:P==="ext_only"?`mom_ext[(${H}) * ${t}u + ${re}u] = mv;`:`mom_main[(${H}) * ${t}u + ${re}u] = mv;`;return a==="none"?`  {
    let f = vec4<f32>(${Ae}.v_${D}${W});
    let lmn = ${le.min("min(min(f.x, f.y), min(f.z, f.w))")};
    let lmx = ${le.max("max(max(f.x, f.y), max(f.z, f.w))")};
    let sp = lmx - lmn;
    let inv = select(0.0, 1.0 / sp, sp > 1e-7);
    if (${Y}) {
      ${j(ne,re,"pack4x8unorm((f - vec4<f32>(lmn)) * inv)")}
    }
    if (slane == 0u) {
      let mv = vec4<f32>(0.0, 0.0, lmn, sp);
      ${te}
    }
  }
`:`  {
    let f = vec4<f32>(${Ae}.v_${D}${W});
    let ls = ${le.add("f.x + f.y + f.z + f.w")};
    let lq = ${le.add("dot(f, f)")};
    let lmn = ${le.min("min(min(f.x, f.y), min(f.z, f.w))")};
    let lmx = ${le.max("max(max(f.x, f.y), max(f.z, f.w))")};
    let sp = lmx - lmn;
    let inv = select(0.0, 1.0 / sp, sp > 1e-7);
    if (${Y}) {
      ${j(ne,re,"pack4x8unorm((f - vec4<f32>(lmn)) * inv)")}
    }
    if (slane == 0u) {
      let mv = vec4<f32>(ls, lq, lmn, sp);
      ${te}
    }
  }
`})}}if(k&&l==="sg_small")return{decls:kr({V4:x,sw:W,norm:a,writeMomFn:`fn write_mom(c_out : u32, mv : vec4<f32>, ext_off : u32, main_off : u32, mom_mode : u32) {
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
`,emit:({accVar:pe,cStart:Me,cEnd:H,hrExpr:ne,yRowExpr:P,momMode:Y,writeY8Expr:D="true"})=>{const re=Y==="ext_and_main"?"1u":Y==="ext_only"?"2u":"0u",te=Y==="main"?"0u":`(${ne}) * ${t}u`,Q=Y==="ext_only"?"0u":`(row_idx * 2u + sg) * ${t}u`;let N=`  let ep_ext_off = ${te};
  let ep_main_off = ${Q};
`;for(let X=0;X<H-Me;X+=4){const q=Me+X;N+=`  {
    let qw = reduce_pack4_sg(${pe}.v_${X}, ${pe}.v_${X+1}, ${pe}.v_${X+2}, ${pe}.v_${X+3}, h, slane, sg_size, sg_id, ${q}u, ep_ext_off, ep_main_off, ${re});
    if (${D}) {
      ${j(P,q,"qw.x")}
      ${j(P,q+1,"qw.y")}
      ${j(P,q+2,"qw.z")}
      ${j(P,q+3,"qw.w")}
    }
  }
`}return N}};const ee=`    let c_out = c_base + slane;
    if (mom_mode == 0u) {
      mom_main[main_off + c_out] = mv;
    } else if (mom_mode == 1u) {
      mom_ext[ext_off + c_out] = mv;
      mom_main[main_off + c_out] = mv;
    } else {
      mom_ext[ext_off + c_out] = mv;
    }`;if(a==="none"&&f){const le=gt(31,pe=>`    {
      let m = sh_mm[rb + ${pe+1}u];
      rmn = min(rmn, m.x);
      rmx = max(rmx, m.y);
    }
`);return{decls:`var<workgroup> sh_mm  : array<vec2<f16>, 1024>;
var<workgroup> sh_res : array<vec2<f32>, 32>;
fn vec_mm16(a : vec4<f16>) -> vec2<f16> {
  return vec2<f16>(min(min(a.x, a.y), min(a.z, a.w)), max(max(a.x, a.y), max(a.z, a.w)));
}
fn reduce_pack4(
  a0 : ${x}, a1 : ${x}, a2 : ${x}, a3 : ${x},
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
${le}    let fmn = f32(rmn);
    let sp = f32(rmx) - fmn;
    sh_res[h * 4u + slane] = vec2<f32>(fmn, select(0.0, 1.0 / sp, sp > 1e-7));
    let mv = vec4<f32>(0.0, 0.0, fmn, sp);
${ee}
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
`,emit:({accVar:pe,cStart:Me,cEnd:H,hrExpr:ne,yRowExpr:P,momMode:Y,writeY8Expr:D="true"})=>{const re=Y==="ext_and_main"?"1u":Y==="ext_only"?"2u":"0u",te=Y==="main"?"0u":`(${ne}) * ${t}u`,Q=Y==="ext_only"?"0u":`(row_idx * 2u + sg) * ${t}u`;let N=`  let ep_ext_off = ${te};
  let ep_main_off = ${Q};
`;for(let X=0;X<H-Me;X+=4){const q=Me+X;N+=`  {
    let qw = reduce_pack4(${pe}.v_${X}, ${pe}.v_${X+1}, ${pe}.v_${X+2}, ${pe}.v_${X+3}, h, slane, ${q}u, ep_ext_off, ep_main_off, ${re});
    if (${D}) {
      ${j(P,q,"qw.x")}
      ${j(P,q+1,"qw.y")}
      ${j(P,q+2,"qw.z")}
      ${j(P,q+3,"qw.w")}
    }
  }
`}return N}}}if(a==="none"){const le=gt(32,pe=>`    {
      let m = sh_mm[rb + ${pe}u];
      rmn = min(rmn, m.x);
      rmx = max(rmx, m.y);
    }
`);return{decls:`var<workgroup> sh_mm  : array<vec2<f32>, 1024>;
var<workgroup> sh_res : array<vec2<f32>, 32>;
fn vec_mm(f : vec4<f32>) -> vec2<f32> {
  return vec2<f32>(min(min(f.x, f.y), min(f.z, f.w)), max(max(f.x, f.y), max(f.z, f.w)));
}
fn reduce_pack4(
  a0 : ${x}, a1 : ${x}, a2 : ${x}, a3 : ${x},
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
${le}    let sp = rmx - rmn;
    sh_res[h * 4u + slane] = vec2<f32>(rmn, select(0.0, 1.0 / sp, sp > 1e-7));
    let mv = vec4<f32>(0.0, 0.0, rmn, sp);
${ee}
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
`,emit:({accVar:pe,cStart:Me,cEnd:H,hrExpr:ne,yRowExpr:P,momMode:Y,writeY8Expr:D="true"})=>{const re=Y==="ext_and_main"?"1u":Y==="ext_only"?"2u":"0u",te=Y==="main"?"0u":`(${ne}) * ${t}u`,Q=Y==="ext_only"?"0u":`(row_idx * 2u + sg) * ${t}u`;let N=`  let ep_ext_off = ${te};
  let ep_main_off = ${Q};
`;for(let X=0;X<H-Me;X+=4){const q=Me+X;N+=`  {
    let qw = reduce_pack4(${pe}.v_${X}, ${pe}.v_${X+1}, ${pe}.v_${X+2}, ${pe}.v_${X+3}, h, slane, ${q}u, ep_ext_off, ep_main_off, ${re});
    if (${D}) {
      ${j(P,q,"qw.x")}
      ${j(P,q+1,"qw.y")}
      ${j(P,q+2,"qw.z")}
      ${j(P,q+3,"qw.w")}
    }
  }
`}return N}}}if(f){const le=gt(31,pe=>{const Me=pe+1;return`    {
      let s = sh_sq[rb + ${Me}u];
      let m = sh_mm[rb + ${Me}u];
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
  a0 : ${x}, a1 : ${x}, a2 : ${x}, a3 : ${x},
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
${le}    let fmn = f32(rmn);
    let sp = f32(rmx) - fmn;
    sh_res[h * 4u + slane] = vec2<f32>(fmn, select(0.0, 1.0 / sp, sp > 1e-7));
    let mv = vec4<f32>(rs, rq, fmn, sp);
${ee}
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
`,emit:({accVar:pe,cStart:Me,cEnd:H,hrExpr:ne,yRowExpr:P,momMode:Y,writeY8Expr:D="true"})=>{const re=Y==="ext_and_main"?"1u":Y==="ext_only"?"2u":"0u",te=Y==="main"?"0u":`(${ne}) * ${t}u`,Q=Y==="ext_only"?"0u":`(row_idx * 2u + sg) * ${t}u`;let N=`  let ep_ext_off = ${te};
  let ep_main_off = ${Q};
`;for(let X=0;X<H-Me;X+=4){const q=Me+X;N+=`  {
    let qw = reduce_pack4(${pe}.v_${X}, ${pe}.v_${X+1}, ${pe}.v_${X+2}, ${pe}.v_${X+3}, h, slane, ${q}u, ep_ext_off, ep_main_off, ${re});
    if (${D}) {
      ${j(P,q,"qw.x")}
      ${j(P,q+1,"qw.y")}
      ${j(P,q+2,"qw.z")}
      ${j(P,q+3,"qw.w")}
    }
  }
`}return N}}}const G=gt(32,le=>`    {
      let s = sh_sq[rb + ${le}u];
      let m = sh_mm[rb + ${le}u];
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
  a0 : ${x}, a1 : ${x},
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
${G}    let sp = rmx - rmn;
    sh_res[h * 2u + slane] = vec2<f32>(rmn, select(0.0, 1.0 / sp, sp > 1e-7));
    let mv = vec4<f32>(rs, rq, rmn, sp);
${ee}
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
`,emit:({accVar:le,cStart:Ae,cEnd:pe,hrExpr:Me,yRowExpr:H,momMode:ne,writeY8Expr:P="true"})=>{const Y=ne==="ext_and_main"?"1u":ne==="ext_only"?"2u":"0u",D=ne==="main"?"0u":`(${Me}) * ${t}u`,re=ne==="ext_only"?"0u":`(row_idx * 2u + sg) * ${t}u`;let te=`  let ep_ext_off = ${D};
  let ep_main_off = ${re};
`;for(let Q=0;Q<pe-Ae;Q+=2){const N=Ae+Q;te+=`  {
    let qw = reduce_pack2(${le}.v_${Q}, ${le}.v_${Q+1}, h, slane, ${N}u, ep_ext_off, ep_main_off, ${Y});
    if (${P}) {
      ${j(H,N,"qw.x")}
      ${j(H,N+1,"qw.y")}
    }
  }
`}return te}}},I=()=>`
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
    ${u?"act1[idx] = val;":""}
  }
}`,E=i[0];return{initActWgsl:I,conv0Wgsl:()=>{const V=!f&&u,W=z(!1),j=(Me,H)=>{const ne=Me/4,P=H/4;return gt(P-ne,Y=>{const D=ne+Y,re=D*4;return`          {
            let w0 = w16_4[wb + ${D}u];
            let w1 = w16_4[wb + ${c+D}u];
            let w2 = w16_4[wb + ${2*c+D}u];
            a_${re}     = fma(vn, ${x}(w0.x), fma(vc, ${x}(w1.x), fma(vp, ${x}(w2.x), a_${re})));
            a_${re+1} = fma(vn, ${x}(w0.y), fma(vc, ${x}(w1.y), fma(vp, ${x}(w2.y), a_${re+1})));
            a_${re+2} = fma(vn, ${x}(w0.z), fma(vc, ${x}(w1.z), fma(vp, ${x}(w2.z), a_${re+2})));
            a_${re+3} = fma(vn, ${x}(w0.w), fma(vc, ${x}(w1.w), fma(vp, ${x}(w2.w), a_${re+3})));
          }
`})},ee=Math.floor(E/4),G=E%4;let ie="";G===0?ie=`
        let vn = inp_4[base - ${ee}u];
        let vc = inp_4[base];
        let vp = inp_4[base + ${ee}u];`:ee===0&&G===1?ie=`
        let vL = inp_4[base - 1u];
        let vc = inp_4[base];
        let vR = inp_4[base + 1u];
        let vn = ${x}(vL.w, vc.xyz);
        let vp = ${x}(vc.yzw, vR.x);`:G===1?ie=`
        let vL = inp_4[base - ${ee+1}u];
        let vN = inp_4[base - ${ee}u];
        let vc = inp_4[base];
        let vP = inp_4[base + ${ee}u];
        let vR = inp_4[base + ${ee+1}u];
        let vn = ${x}(vL.w, vN.xyz);
        let vp = ${x}(vP.yzw, vR.x);`:G===2?ie=`
        let vL = inp_4[base - ${ee+1}u];
        let vN = ${ee===0?"inp_4[base]":`inp_4[base - ${ee}u]`};
        let vc = ${ee===0?"vN":"inp_4[base]"};
        let vP = ${ee===0?"vN":`inp_4[base + ${ee}u]`};
        let vR = inp_4[base + ${ee+1}u];
        let vn = ${x}(vL.zw, vN.xy);
        let vp = ${x}(vP.zw, vR.xy);`:ie=`
        let vL = inp_4[base - ${ee+1}u];
        let vN = ${ee===0?"inp_4[base]":`inp_4[base - ${ee}u]`};
        let vc = ${ee===0?"vN":"inp_4[base]"};
        let vP = ${ee===0?"vN":`inp_4[base + ${ee}u]`};
        let vR = inp_4[base + ${ee+1}u];
        let vn = ${x}(vL.yzw, vN.x);
        let vp = ${x}(vP.w, vR.xyz);`;const le=(Me,H,ne,P)=>{const Y=P-ne,D=gt(Y,Q=>`  v_${Q} : ${x},
`),re=gt(Y,Q=>{const N=ne+Q;return a==="none"?`  var a_${N} = ${x}(${$}(qmeta[${3*t+N}u]));
`:`  var a_${N} = ${x}(0.0${A});
`}),te=Array.from({length:Y},(Q,N)=>`a_${ne+N}`).join(", ");return`struct ${H} {
${D}};
fn ${Me}(y : i32, z : i32, x_pad : u32) -> ${H} {
${re}  var tap_yz : u32 = 0u;
  for (var dz : i32 = -1; dz <= 1; dz = dz + 1) {
    let sz = z + dz * ${E};
    for (var dy : i32 = -1; dy <= 1; dy = dy + 1) {
      let sy = y + dy * ${E};
      if ((u32(sz) | u32(sy)) < 256u) {
        let base = (u32(sz) * 256u + u32(sy)) * ${_t}u + x_pad;
${ie}
        let wb = tap_yz * ${3*c}u;
${j(ne,P)}
      }
      tap_yz = tap_yz + 1u;
    }
  }
  return ${H}(${te});
}
`},Ae=(Me,H,ne,P,Y)=>{const D=Y?`  let y = i32(p0.bg_y0 + lid.y);
  let z = i32(p0.bg_z0);`:`  var y : i32;
  var z : i32;
  if (p0.is_full != 0u) {
    y = i32(wid.y * 4u + lid.y);
    z = i32(wid.z);
  } else {
    let pk = strips0[wid.z];
    y = i32((pk & 255u) * 4u + lid.y);
    z = i32(pk >> 8u);
  }`,re=Y?"lid.y * 2u + sg":"row_idx * 2u + sg";return`
@compute @workgroup_size(64, 4, 1)
fn ${Me}(@builtin(local_invocation_id) lid : vec3<u32>,
             @builtin(workgroup_id) wid : vec3<u32>${W.entryArgs||""}) {
  let sg = lid.x >> 5u;
  let slane = lid.x & 31u;
${W.localHeader}  let x_pad = lid.x + ${Ht}u;
${D}
  let acc = ${H}(y, z, x_pad);
  let row_idx = u32(z) * 256u + u32(y);
  let y_row_base = row_idx * ${b}u + lid.x;
${W.emit({accVar:"acc",cStart:ne,cEnd:P,hrExpr:re,yRowExpr:"y_row_base",momMode:Y?"ext_only":"main"})}}`},pe=V?le("run_conv0_lo","Conv0AccLo",0,p)+le("run_conv0_hi","Conv0AccHi",p,t)+Ae("main_lo","run_conv0_lo",0,p,!1)+Ae("main_hi","run_conv0_hi",p,t,!1)+Ae("main_bg_lo","run_conv0_lo",0,p,!0)+Ae("main_bg_hi","run_conv0_hi",p,t,!0):le("run_conv0","Conv0Acc",0,t)+Ae("main","run_conv0",0,t,!1)+Ae("main_bg","run_conv0",0,t,!0);return`${h}${F}
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
${W.decls}${pe}`},prepWgsl:()=>`${h}
${An(o)}
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
    for (var hr : u32 = lid; hr < ${Wn}u; hr = hr + 256u) {
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
    q_ref = max(q_ref, ${C.toFixed(1)} * qs);
  }
  ${a==="none"?"q_ref = 1.0;":""}
  if (lid == 0u) {
    mom_stats[${t*2}u] = vec4<f32>(q_ref, 0.0, 0.0, 0.0);
  }
  let scale_num = ${C.toFixed(1)} / q_ref;
  for (var idx : u32 = lid; idx < ${M}u; idx = idx + 256u) {
    let ic = (idx / ${3*c}u) % ${t}u;
    let qs = mom_stats[ic * 2u].z;
    w_eff[idx] = w16_4[pp.next_w_vec4_off + idx] * ${$}(qs * scale_num);
  }
  if (lid < ${c}u) {
    ${a==="none"?`
    let mb = pp.next_meta_off + ${3*t}u + lid * 4u;
    w_eff[${_}u + lid] = ${x}(${$}(qmeta[mb]), ${$}(qmeta[mb + 1u]), ${$}(qmeta[mb + 2u]), ${$}(qmeta[mb + 3u]));
    `:`
    w_eff[${_}u + lid] = ${x}(0.0${A});
    `}
  }
}`,normWgsl:()=>`${An(o)}
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
  let y_base = row_idx * ${b}u + x4;
  let a_base = row_idx * ${m}u + x_pad;
  let mom_base = hr * ${t}u;

  for (var c : u32 = 0u; c < ${p}u; c = c + 1u) {
    let inv_qs = mom_stats[c * 2u].w;
    let st = mom_stats[c * 2u + 1u];
    let rm = mom_main[mom_base + c];
    let yv = unpack4x8unorm(y8_0[y_base + c * ${ht}u]) * rm.w + vec4<f32>(rm.z);
    let a = vec4<f32>(
      act(yv.x * st.x + st.y),
      act(yv.y * st.x + st.y),
      act(yv.z * st.x + st.y),
      act(yv.w * st.x + st.y)
    );
    act8_0[a_base + c * ${_t}u] = pack4x8unorm((a * inv_qs + vec4<f32>(${S.zeroBin.toFixed(1)})) * (1.0 / 255.0));
  }
  ${u?`
  for (var c : u32 = 0u; c < ${p}u; c = c + 1u) {
    let cg = ${p}u + c;
    let inv_qs = mom_stats[cg * 2u].w;
    let st = mom_stats[cg * 2u + 1u];
    let rm = mom_main[mom_base + cg];
    let yv = unpack4x8unorm(y8_1[y_base + c * ${ht}u]) * rm.w + vec4<f32>(rm.z);
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
  let x_pad = x4 + ${Ht}u;
  let y_base = np.bg_row * ${b}u + x4;
  let mom_base = sg * ${t}u;
  let dst_row = norm_aux[np.halo_off + idx];
  let a_base = dst_row * ${m}u + x_pad;

  for (var c : u32 = 0u; c < ${p}u; c = c + 1u) {
    let inv_qs = mom_stats[c * 2u].w;
    let st = mom_stats[c * 2u + 1u];
    let rm = mom_ext[mom_base + c];
    let yv = unpack4x8unorm(y8_0[y_base + c * ${ht}u]) * rm.w + vec4<f32>(rm.z);
    let a = vec4<f32>(
      act(yv.x * st.x + st.y),
      act(yv.y * st.x + st.y),
      act(yv.z * st.x + st.y),
      act(yv.w * st.x + st.y)
    );
    act8_0[a_base + c * ${_t}u] = pack4x8unorm((a * inv_qs + vec4<f32>(${S.zeroBin.toFixed(1)})) * (1.0 / 255.0));
  }
  ${u?`
  for (var c : u32 = 0u; c < ${p}u; c = c + 1u) {
    let cg = ${p}u + c;
    let inv_qs = mom_stats[cg * 2u].w;
    let st = mom_stats[cg * 2u + 1u];
    let rm = mom_ext[mom_base + cg];
    let yv = unpack4x8unorm(y8_1[y_base + c * ${ht}u]) * rm.w + vec4<f32>(rm.z);
    let a = vec4<f32>(
      act(yv.x * st.x + st.y),
      act(yv.y * st.x + st.y),
      act(yv.z * st.x + st.y),
      act(yv.w * st.x + st.y)
    );
    act8_1[a_base + c * ${_t}u] = pack4x8unorm((a * inv_qs + vec4<f32>(${S.zeroBin.toFixed(1)})) * (1.0 / 255.0));
  }`:""}
}`,convWgsl:()=>{const V=!f&&u,W=z(f),j=(H,ne)=>f?`
          let ${H} = vec4<f16>(vec2<f16>(unpack2x16float(((${ne} & 0x00FF00FFu) << 2u) | 0x3C003C00u)), vec2<f16>(unpack2x16float(((${ne} >> 6u) & 0x03FC03FCu) | 0x3C003C00u))) - vec4<f16>(${S.sterbenzSub});`:`
          let ${H} = unpack4x8unorm(${ne}) - vec4<f32>(${S.uZeroFloat});`,ee=H=>`
          let uL = ${H}[base - off0];
          let uN = ${H}[base - off1];
          let uC = ${H}[base];
          let uP = ${H}[base + off1];
          let uR = ${H}[base + off0];
          let u_neg = (uL >> sh_l) | (uN << sh_r);
          let u_pos = (uP >> sh_r) | (uR << sh_l);`+j("vn","u_neg")+j("vc","uC")+j("vp","u_pos"),G=(H,ne)=>{const P=H/4,Y=ne/4;if(v){const D=c/2,re=c;let te="";for(let Q=P;Q<Y;Q+=2){const N=Q*4,X=Q/2;te+=`          {
            let wp0 = w_eff_u[wbu + ${X}u];
            let wp1 = w_eff_u[wbu + ${D+X}u];
            let wp2 = w_eff_u[wbu + ${re+X}u];
            let w0a = u4_lo(wp0);
            let w0b = u4_hi(wp0);
            let w1a = u4_lo(wp1);
            let w1b = u4_hi(wp1);
            let w2a = u4_lo(wp2);
            let w2b = u4_hi(wp2);
            a_${N}     = fma(vn, vec4<f16>(w0a.x), fma(vc, vec4<f16>(w1a.x), fma(vp, vec4<f16>(w2a.x), a_${N})));
            a_${N+1} = fma(vn, vec4<f16>(w0a.y), fma(vc, vec4<f16>(w1a.y), fma(vp, vec4<f16>(w2a.y), a_${N+1})));
            a_${N+2} = fma(vn, vec4<f16>(w0a.z), fma(vc, vec4<f16>(w1a.z), fma(vp, vec4<f16>(w2a.z), a_${N+2})));
            a_${N+3} = fma(vn, vec4<f16>(w0a.w), fma(vc, vec4<f16>(w1a.w), fma(vp, vec4<f16>(w2a.w), a_${N+3})));
            a_${N+4} = fma(vn, vec4<f16>(w0b.x), fma(vc, vec4<f16>(w1b.x), fma(vp, vec4<f16>(w2b.x), a_${N+4})));
            a_${N+5} = fma(vn, vec4<f16>(w0b.y), fma(vc, vec4<f16>(w1b.y), fma(vp, vec4<f16>(w2b.y), a_${N+5})));
            a_${N+6} = fma(vn, vec4<f16>(w0b.z), fma(vc, vec4<f16>(w1b.z), fma(vp, vec4<f16>(w2b.z), a_${N+6})));
            a_${N+7} = fma(vn, vec4<f16>(w0b.w), fma(vc, vec4<f16>(w1b.w), fma(vp, vec4<f16>(w2b.w), a_${N+7})));
          }
`}return te}return gt(Y-P,D=>{const re=P+D,te=re*4;return`          {
            let w0 = w_eff[wb + ${re}u];
            let w1 = w_eff[wb + ${c+re}u];
            let w2 = w_eff[wb + ${2*c+re}u];
            a_${te}     = fma(vn, ${x}(w0.x), fma(vc, ${x}(w1.x), fma(vp, ${x}(w2.x), a_${te})));
            a_${te+1} = fma(vn, ${x}(w0.y), fma(vc, ${x}(w1.y), fma(vp, ${x}(w2.y), a_${te+1})));
            a_${te+2} = fma(vn, ${x}(w0.z), fma(vc, ${x}(w1.z), fma(vp, ${x}(w2.z), a_${te+2})));
            a_${te+3} = fma(vn, ${x}(w0.w), fma(vc, ${x}(w1.w), fma(vp, ${x}(w2.w), a_${te+3})));
          }
`})},ie=(H,ne,P,Y)=>{const D=Y-P,re=gt(D,_e=>`  v_${_e} : ${x},
`),te=gt(D,_e=>{const se=P+_e;if(a==="none"){const Le=se>>>2,Ce=["x","y","z","w"][se&3];if(v){const Ve=_+Le>>>1,Ge=_+Le&1?"u4_hi":"u4_lo";return`  var a_${se} = ${x}(${Ge}(w_eff_u[${Ve}u]).${Ce});
`}return`  var a_${se} = ${x}(w_eff[${_+Le}u].${Ce});
`}return`  var a_${se} = ${x}(0.0${A});
`}),Q=p<=8?`(${p}u + cp.pad0)`:`${p}u`,N=v?`        let wbu_tap = tap_yz * ${t*3*c/2}u;
        for (var ic : u32 = 0u; ic < ${Q}; ic = ic + 1u) {
          let base = row_off + ic * ${_t}u;
${ee("act8_0")}
          let wbu = wbu_tap + ic * ${3*c/2}u;
${G(P,Y)}
        }`:`        let wb_tap = tap_yz * ${t*3*c}u;
        for (var ic : u32 = 0u; ic < ${Q}; ic = ic + 1u) {
          let base = row_off + ic * ${_t}u;
${ee("act8_0")}
          let wb = wb_tap + ic * ${3*c}u;
${G(P,Y)}
        }`,X=v?`        for (var ic : u32 = 0u; ic < ${Q}; ic = ic + 1u) {
          let base = row_off + ic * ${_t}u;
${ee("act8_1")}
          let wbu = wbu_tap + (${p}u + ic) * ${3*c/2}u;
${G(P,Y)}
        }`:`        for (var ic : u32 = 0u; ic < ${Q}; ic = ic + 1u) {
          let base = row_off + ic * ${_t}u;
${ee("act8_1")}
          let wb = wb_tap + (${p}u + ic) * ${3*c}u;
${G(P,Y)}
        }`,q=Array.from({length:D},(_e,se)=>`a_${P+se}`).join(", ");return`struct ${ne} {
${re}};
fn ${H}(y : i32, z : i32, x_pad : u32, dp : u32) -> ${ne} {
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
${N}
        ${u?X:""}
      }
      tap_yz = tap_yz + 1u;
    }
  }
  return ${ne}(${q});
}
`},le=(H,ne,P,Y,D)=>{const re=D?g?`
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
  }`,te=D?g?"ext_i * 8u + lid.y * 2u + sg":"wid.z * 8u + lid.y * 2u + sg":"row_idx * 2u + sg",Q=D?"(((dp >> 24u) & 1u) != 0u)":"true";return`
@compute @workgroup_size(64, 4, 1)
fn ${H}(@builtin(local_invocation_id) lid : vec3<u32>,
             @builtin(workgroup_id) wid : vec3<u32>${W.entryArgs||""}) {
  let x4 = lid.x;
  let sg = x4 >> 5u;
  let slane = x4 & 31u;
${W.localHeader}  let x_pad = x4 + ${Ht}u;
${re}
  let dp = cp.d_pack;
  let acc = ${ne}(y, z, x_pad, dp);
  let row_idx = u32(z) * 256u + u32(y);
  let y_row_base = row_idx * ${b}u + x4;
${W.emit({accVar:"acc",cStart:P,cEnd:Y,hrExpr:te,yRowExpr:"y_row_base",momMode:D?"ext_and_main":"main",writeY8Expr:Q})}}`},Ae=V?ie("run_conv_lo","ConvAccLo",0,p)+ie("run_conv_hi","ConvAccHi",p,t)+le("main_lo","run_conv_lo",0,p,!1)+le("main_hi","run_conv_hi",p,t,!1)+le("main_ext_lo","run_conv_lo",0,p,!0)+le("main_ext_hi","run_conv_hi",p,t,!0):ie("run_conv","ConvAcc",0,t)+le("main","run_conv",0,t,!1)+le("main_ext","run_conv",0,t,!0),pe=v?`fn u4_lo(u : vec4<u32>) -> vec4<f16> {
  return vec4<f16>(vec2<f16>(unpack2x16float(u.x)), vec2<f16>(unpack2x16float(u.y)));
}
fn u4_hi(u : vec4<u32>) -> vec4<f16> {
  return vec4<f16>(vec2<f16>(unpack2x16float(u.z)), vec2<f16>(unpack2x16float(u.w)));
}
@group(0) @binding(6) var<uniform> w_eff_u : array<vec4<u32>, ${Math.ceil(w/2)}>;`:`@group(0) @binding(6) var<storage, read> w_eff : array<${x}>;`;return`${h}${F}
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
${pe}
@group(0) @binding(7) var<storage, read> strips : array<u32>;
@group(0) @binding(8) var<uniform> cp : ConvParams;
${W.decls}${Ae}`},clsWgsl:()=>`${h}
${An(o)}
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
  let y_base = row_idx * ${b}u + x4;
  let mom_base = hr * ${t}u;

  var feat : array<${x}, ${n}>;
  for (var c : u32 = 0u; c < ${n}u; c = c + 1u) {
    let st = mom_stats[c * 2u + 1u];
    let rm = mom_main[mom_base + c];
    ${u?`
    let in_hi = c >= ${p}u;
    let c_loc = select(c, c - ${p}u, in_hi);
    let idx4 = y_base + c_loc * ${ht}u;
    let q_word = select(y8_0[idx4], y8_1[idx4], in_hi);
    `:`
    let q_word = y8_0[y_base + c * ${ht}u];
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
${yr({chan:n,clsK4:r,nclass:s,V4:x,suf:A,readBiasStmt:"",biasExpr:V=>`qmeta[m_cls + k_base + ${V}u]`,probCfg:d})}
}`,totalWEffVec4s:w,useUniformWeff:v,csHalf:p,chunkableStd:g,halfPass0:!f&&u,halfPassConv:!f&&u}}function Ar(e){const{cs:t,chan:n,nclass:s,clsK4:r,dilations:i,activation:o,norm:a,hasF16:f,subgroupMode:l="none",numConvs:u,probCfg:d}=e,g=t/4,c=t/2,p=t/4,m=g*_t,b=16384,M=t*ht,w=t*2+4,v=w+Wn*t,S=4*t,h=(u*S+r*4)/4,k=9*t*3*p,F=k,$=k+p,A=f&&p%2===0&&$*8<=65536,x=xr(o),C=f?`enable f16;
`:"",z=f&&l!=="none",I=z?`enable subgroups;
`:"",E=f?"f16":"f32",T=f?"h":"f",B=`vec4<${E}>`,O=f?256:255,ae=H=>{const ne=H?".xzyw":"",P=(te,Q,N)=>{if(te==="stage_bg")return`stage[s_bg_base + ${Q*ht}u] = ${N};`;if(te==="stage")return`stage[s_row_base + ${Q*ht}u] = ${N};`;const X=Math.floor(Q/g),q=Q%g;return`if (use_act) { act8_${X}[a_row_base + ${q*_t}u] = ${N}; } else { stage[s_row_base + ${Q*ht}u] = ${N}; }`};if(z&&(l==="sg32"||l==="sg64"||l==="sg32_64")){const te=Sr(l,a);return{decls:te.decls,entryArgs:te.entryArgs,localHeader:"",emit:({accVar:Q,cStart:N,cEnd:X,hrExpr:q,storeMode:_e,momOffExpr:se,alsoWriteMomMain:Le=!1,writeY8Expr:Ce="true"})=>gt(X-N,Ve=>{const Ge=N+Ve;return a==="none"?`  {
    let f = vec4<f32>(${Q}.v_${Ve}${ne});
    let lmn = ${te.min("min(min(f.x, f.y), min(f.z, f.w))")};
    let lmx = ${te.max("max(max(f.x, f.y), max(f.z, f.w))")};
    let sp = lmx - lmn;
    let inv = select(0.0, 1.0 / sp, sp > 1e-7);
    if (${Ce}) {
      ${P(_e,Ge,"pack4x8unorm((f - vec4<f32>(lmn)) * inv)")}
    }
    if (slane == 0u) {
      let mv = vec4<f32>(0.0, 0.0, lmn, sp);
      mom[${se} + (${q}) * ${t}u + ${Ge}u] = mv;
      ${Le?`mom[${w}u + (row_idx * 2u + sg) * ${t}u + ${Ge}u] = mv;`:""}
    }
  }
`:`  {
    let f = vec4<f32>(${Q}.v_${Ve}${ne});
    let ls = ${te.add("f.x + f.y + f.z + f.w")};
    let lq = ${te.add("dot(f, f)")};
    let lmn = ${te.min("min(min(f.x, f.y), min(f.z, f.w))")};
    let lmx = ${te.max("max(max(f.x, f.y), max(f.z, f.w))")};
    let sp = lmx - lmn;
    let inv = select(0.0, 1.0 / sp, sp > 1e-7);
    if (${Ce}) {
      ${P(_e,Ge,"pack4x8unorm((f - vec4<f32>(lmn)) * inv)")}
    }
    if (slane == 0u) {
      let mv = vec4<f32>(ls, lq, lmn, sp);
      mom[${se} + (${q}) * ${t}u + ${Ge}u] = mv;
      ${Le?`mom[${w}u + (row_idx * 2u + sg) * ${t}u + ${Ge}u] = mv;`:""}
    }
  }
`})}}if(z&&l==="sg_small")return{decls:kr({V4:B,sw:ne,norm:a,writeMomFn:`fn write_mom(c_out : u32, mv : vec4<f32>, mom_off : u32, main_off : u32, also_main : bool) {
  mom[mom_off + c_out] = mv;
  if (also_main) {
    mom[main_off + c_out] = mv;
  }
}
`,momParams:"mom_off : u32, main_off : u32, also_main : bool",momArgs:"mom_off, main_off, also_main"}),entryArgs:`,
             @builtin(subgroup_size) sg_size : u32,
             @builtin(subgroup_invocation_id) sg_id : u32`,localHeader:`  let h = lid.y * 2u + sg;
`,emit:({accVar:N,cStart:X,cEnd:q,hrExpr:_e,storeMode:se,momOffExpr:Le,alsoWriteMomMain:Ce=!1,writeY8Expr:Ve="true"})=>{const Ge=`${Le} + (${_e}) * ${t}u`,Qe=Ce?`${w}u + (row_idx * 2u + sg) * ${t}u`:"0u";let He=`  let ep_mom_off = ${Ge};
  let ep_main_off = ${Qe};
`;for(let Fe=0;Fe<q-X;Fe+=4){const Se=X+Fe;He+=`  {
    let qw = reduce_pack4_sg(${N}.v_${Fe}, ${N}.v_${Fe+1}, ${N}.v_${Fe+2}, ${N}.v_${Fe+3}, h, slane, sg_size, sg_id, ${Se}u, ep_mom_off, ep_main_off, ${Ce});
    if (${Ve}) {
      ${P(se,Se,"qw.x")}
      ${P(se,Se+1,"qw.y")}
      ${P(se,Se+2,"qw.z")}
      ${P(se,Se+3,"qw.w")}
    }
  }
`}return He}};const Y=`    let c_out = c_base + slane;
    mom[mom_off + c_out] = mv;
    if (also_main) {
      mom[main_off + c_out] = mv;
    }`;if(a==="none"&&f){const te=gt(31,N=>`    {
      let m = sh_mm[rb + ${N+1}u];
      rmn = min(rmn, m.x);
      rmx = max(rmx, m.y);
    }
`);return{decls:`var<workgroup> sh_mm  : array<vec2<f16>, 1024>;
var<workgroup> sh_res : array<vec2<f32>, 32>;
fn vec_mm16(a : vec4<f16>) -> vec2<f16> {
  return vec2<f16>(min(min(a.x, a.y), min(a.z, a.w)), max(max(a.x, a.y), max(a.z, a.w)));
}
fn reduce_pack4(
  a0 : ${B}, a1 : ${B}, a2 : ${B}, a3 : ${B},
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
${Y}
  }
  workgroupBarrier();
  let f0 = vec4<f32>(a0${ne});
  let f1 = vec4<f32>(a1${ne});
  let f2 = vec4<f32>(a2${ne});
  let f3 = vec4<f32>(a3${ne});
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
`,emit:({accVar:N,cStart:X,cEnd:q,hrExpr:_e,storeMode:se,momOffExpr:Le,alsoWriteMomMain:Ce=!1,writeY8Expr:Ve="true"})=>{const Ge=`${Le} + (${_e}) * ${t}u`,Qe=Ce?`${w}u + (row_idx * 2u + sg) * ${t}u`:"0u";let He=`  let ep_mom_off = ${Ge};
  let ep_main_off = ${Qe};
`;for(let Fe=0;Fe<q-X;Fe+=4){const Se=X+Fe;He+=`  {
    let qw = reduce_pack4(${N}.v_${Fe}, ${N}.v_${Fe+1}, ${N}.v_${Fe+2}, ${N}.v_${Fe+3}, h, slane, ${Se}u, ep_mom_off, ep_main_off, ${Ce});
    if (${Ve}) {
      ${P(se,Se,"qw.x")}
      ${P(se,Se+1,"qw.y")}
      ${P(se,Se+2,"qw.z")}
      ${P(se,Se+3,"qw.w")}
    }
  }
`}return He}}}if(a==="none"){const te=gt(32,N=>`    {
      let m = sh_mm[rb + ${N}u];
      rmn = min(rmn, m.x);
      rmx = max(rmx, m.y);
    }
`);return{decls:`var<workgroup> sh_mm  : array<vec2<f32>, 1024>;
var<workgroup> sh_res : array<vec2<f32>, 32>;
fn vec_mm(f : vec4<f32>) -> vec2<f32> {
  return vec2<f32>(min(min(f.x, f.y), min(f.z, f.w)), max(max(f.x, f.y), max(f.z, f.w)));
}
fn reduce_pack4(
  a0 : ${B}, a1 : ${B}, a2 : ${B}, a3 : ${B},
  h : u32, slane : u32, c_base : u32, mom_off : u32, main_off : u32, also_main : bool
) -> vec4<u32> {
  let f0 = vec4<f32>(a0${ne});
  let f1 = vec4<f32>(a1${ne});
  let f2 = vec4<f32>(a2${ne});
  let f3 = vec4<f32>(a3${ne});
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
${Y}
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
`,emit:({accVar:N,cStart:X,cEnd:q,hrExpr:_e,storeMode:se,momOffExpr:Le,alsoWriteMomMain:Ce=!1,writeY8Expr:Ve="true"})=>{const Ge=`${Le} + (${_e}) * ${t}u`,Qe=Ce?`${w}u + (row_idx * 2u + sg) * ${t}u`:"0u";let He=`  let ep_mom_off = ${Ge};
  let ep_main_off = ${Qe};
`;for(let Fe=0;Fe<q-X;Fe+=4){const Se=X+Fe;He+=`  {
    let qw = reduce_pack4(${N}.v_${Fe}, ${N}.v_${Fe+1}, ${N}.v_${Fe+2}, ${N}.v_${Fe+3}, h, slane, ${Se}u, ep_mom_off, ep_main_off, ${Ce});
    if (${Ve}) {
      ${P(se,Se,"qw.x")}
      ${P(se,Se+1,"qw.y")}
      ${P(se,Se+2,"qw.z")}
      ${P(se,Se+3,"qw.w")}
    }
  }
`}return He}}}if(f){const te=gt(31,N=>{const X=N+1;return`    {
      let s = sh_sq[rb + ${X}u];
      let m = sh_mm[rb + ${X}u];
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
  a0 : ${B}, a1 : ${B}, a2 : ${B}, a3 : ${B},
  h : u32, slane : u32, c_base : u32, mom_off : u32, main_off : u32, also_main : bool
) -> vec4<u32> {
  let f0 = vec4<f32>(a0${ne});
  let f1 = vec4<f32>(a1${ne});
  let f2 = vec4<f32>(a2${ne});
  let f3 = vec4<f32>(a3${ne});
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
${Y}
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
`,emit:({accVar:N,cStart:X,cEnd:q,hrExpr:_e,storeMode:se,momOffExpr:Le,alsoWriteMomMain:Ce=!1,writeY8Expr:Ve="true"})=>{const Ge=`${Le} + (${_e}) * ${t}u`,Qe=Ce?`${w}u + (row_idx * 2u + sg) * ${t}u`:"0u";let He=`  let ep_mom_off = ${Ge};
  let ep_main_off = ${Qe};
`;for(let Fe=0;Fe<q-X;Fe+=4){const Se=X+Fe;He+=`  {
    let qw = reduce_pack4(${N}.v_${Fe}, ${N}.v_${Fe+1}, ${N}.v_${Fe+2}, ${N}.v_${Fe+3}, h, slane, ${Se}u, ep_mom_off, ep_main_off, ${Ce});
    if (${Ve}) {
      ${P(se,Se,"qw.x")}
      ${P(se,Se+1,"qw.y")}
      ${P(se,Se+2,"qw.z")}
      ${P(se,Se+3,"qw.w")}
    }
  }
`}return He}}}const D=gt(32,te=>`    {
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
  a0 : ${B}, a1 : ${B},
  h : u32, slane : u32, c_base : u32, mom_off : u32, main_off : u32, also_main : bool
) -> vec2<u32> {
  let f0 = vec4<f32>(a0${ne});
  let f1 = vec4<f32>(a1${ne});
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
${Y}
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
`,emit:({accVar:te,cStart:Q,cEnd:N,hrExpr:X,storeMode:q,momOffExpr:_e,alsoWriteMomMain:se=!1,writeY8Expr:Le="true"})=>{const Ce=`${_e} + (${X}) * ${t}u`,Ve=se?`${w}u + (row_idx * 2u + sg) * ${t}u`:"0u";let Ge=`  let ep_mom_off = ${Ce};
  let ep_main_off = ${Ve};
`;for(let Qe=0;Qe<N-Q;Qe+=2){const He=Q+Qe;Ge+=`  {
    let qw = reduce_pack2(${te}.v_${Qe}, ${te}.v_${Qe+1}, h, slane, ${He}u, ep_mom_off, ep_main_off, ${se});
    if (${Le}) {
      ${P(q,He,"qw.x")}
      ${P(q,He+1,"qw.y")}
    }
  }
`}return Ge}}},ce=()=>`
@group(0) @binding(0) var<storage, read_write> act0 : array<u32>;
@group(0) @binding(1) var<storage, read_write> act1 : array<u32>;
@group(0) @binding(2) var<storage, read_write> act2 : array<u32>;
@group(0) @binding(3) var<storage, read_write> act3 : array<u32>;
@compute @workgroup_size(${_t}, 1, 1)
fn main(@builtin(local_invocation_id) lid : vec3<u32>,
        @builtin(workgroup_id) wid : vec3<u32>) {
  let row_base = (wid.z * 256u + wid.y) * ${m}u + lid.x;
  let val = ${x.uZeroWord}u;
  for (var c : u32 = 0u; c < ${g}u; c = c + 1u) {
    let idx = row_base + c * ${_t}u;
    act0[idx] = val;
    act1[idx] = val;
    act2[idx] = val;
    act3[idx] = val;
  }
}`,V=i[0],W=!f&&t>=16,j=()=>{const H=ae(!1),ne=(N,X)=>{const q=N/4,_e=X/4;return gt(_e-q,se=>{const Le=q+se,Ce=Le*4;return`          {
            let w0 = w16_4[wb + ${Le}u];
            let w1 = w16_4[wb + ${p+Le}u];
            let w2 = w16_4[wb + ${2*p+Le}u];
            a_${Ce}     = fma(vn, ${B}(w0.x), fma(vc, ${B}(w1.x), fma(vp, ${B}(w2.x), a_${Ce})));
            a_${Ce+1} = fma(vn, ${B}(w0.y), fma(vc, ${B}(w1.y), fma(vp, ${B}(w2.y), a_${Ce+1})));
            a_${Ce+2} = fma(vn, ${B}(w0.z), fma(vc, ${B}(w1.z), fma(vp, ${B}(w2.z), a_${Ce+2})));
            a_${Ce+3} = fma(vn, ${B}(w0.w), fma(vc, ${B}(w1.w), fma(vp, ${B}(w2.w), a_${Ce+3})));
          }
`})},P=Math.floor(V/4),Y=V%4;let D="";Y===0?D=`
        let vn = inp_4[base - ${P}u];
        let vc = inp_4[base];
        let vp = inp_4[base + ${P}u];`:P===0&&Y===1?D=`
        let vL = inp_4[base - 1u];
        let vc = inp_4[base];
        let vR = inp_4[base + 1u];
        let vn = ${B}(vL.w, vc.xyz);
        let vp = ${B}(vc.yzw, vR.x);`:Y===1?D=`
        let vL = inp_4[base - ${P+1}u];
        let vN = inp_4[base - ${P}u];
        let vc = inp_4[base];
        let vP = inp_4[base + ${P}u];
        let vR = inp_4[base + ${P+1}u];
        let vn = ${B}(vL.w, vN.xyz);
        let vp = ${B}(vP.yzw, vR.x);`:Y===2?D=`
        let vL = inp_4[base - ${P+1}u];
        let vN = ${P===0?"inp_4[base]":`inp_4[base - ${P}u]`};
        let vc = ${P===0?"vN":"inp_4[base]"};
        let vP = ${P===0?"vN":`inp_4[base + ${P}u]`};
        let vR = inp_4[base + ${P+1}u];
        let vn = ${B}(vL.zw, vN.xy);
        let vp = ${B}(vP.zw, vR.xy);`:D=`
        let vL = inp_4[base - ${P+1}u];
        let vN = ${P===0?"inp_4[base]":`inp_4[base - ${P}u]`};
        let vc = ${P===0?"vN":"inp_4[base]"};
        let vP = ${P===0?"vN":`inp_4[base + ${P}u]`};
        let vR = inp_4[base + ${P+1}u];
        let vn = ${B}(vL.yzw, vN.x);
        let vp = ${B}(vP.w, vR.xyz);`;const re=(N,X,q,_e)=>{const se=_e-q,Le=gt(se,Ge=>`  v_${Ge} : ${B},
`),Ce=gt(se,Ge=>{const Qe=q+Ge;if(a==="none"){const He=3*t+Qe;return`  var a_${Qe} = ${B}(${E}(qmeta_u[${He>>>2}u][${He&3}u]));
`}return`  var a_${Qe} = ${B}(0.0${T});
`}),Ve=Array.from({length:se},(Ge,Qe)=>`a_${q+Qe}`).join(", ");return`struct ${X} {
${Le}};
fn ${N}(y : i32, z : i32, x_pad : u32) -> ${X} {
${Ce}  var tap_yz : u32 = 0u;
  for (var dz : i32 = -1; dz <= 1; dz = dz + 1) {
    let sz = z + dz * ${V};
    for (var dy : i32 = -1; dy <= 1; dy = dy + 1) {
      let sy = y + dy * ${V};
      if ((u32(sz) | u32(sy)) < 256u) {
        let base = (u32(sz) * 256u + u32(sy)) * ${_t}u + x_pad;
${D}
        let wb = tap_yz * ${3*p}u;
${ne(q,_e)}
      }
      tap_yz = tap_yz + 1u;
    }
  }
  return ${X}(${Ve});
}
`},te=(N,X,q,_e,se)=>{const Le=se?`  let y = i32(p0.bg_y0 + lid.y);
  let z = i32(p0.bg_z0);`:`  var y : i32;
  var z : i32;
  if (p0.is_full != 0u) {
    y = i32(wid.y * 4u + lid.y);
    z = i32(wid.z);
  } else {
    let pk = strips0_u[wid.z >> 2u][wid.z & 3u];
    y = i32((pk & 255u) * 4u + lid.y);
    z = i32(pk >> 8u);
  }`,Ce=se?"lid.y * 2u + sg":"row_idx * 2u + sg",Ve=se?`${v}u`:`${w}u`,Ge=se?`  let s_bg_base = (${b}u + lid.y) * ${M}u + lid.x;`:`  let row_idx = u32(z) * 256u + u32(y);
  let use_act = u32(z) < 192u;
  let a_row_base = row_idx * ${m}u + x_pad;
  let s_row_base = ((u32(z) & 63u) * 256u + u32(y)) * ${M}u + lid.x;`;return`
@compute @workgroup_size(64, 4, 1)
fn ${N}(@builtin(local_invocation_id) lid : vec3<u32>,
             @builtin(workgroup_id) wid : vec3<u32>${H.entryArgs||""}) {
  let sg = lid.x >> 5u;
  let slane = lid.x & 31u;
${H.localHeader}  let x_pad = lid.x + ${Ht}u;
${Le}
  let acc = ${X}(y, z, x_pad);
${Ge}
${H.emit({accVar:"acc",cStart:q,cEnd:_e,hrExpr:Ce,storeMode:se?"stage_bg":"conv0_split",momOffExpr:Ve})}}`},Q=W?re("run_conv0_lo","Conv0AccLo",0,c)+re("run_conv0_hi","Conv0AccHi",c,t)+te("main_lo","run_conv0_lo",0,c,!1)+te("main_hi","run_conv0_hi",c,t,!1)+te("main_bg_lo","run_conv0_lo",0,c,!0)+te("main_bg_hi","run_conv0_hi",c,t,!0):re("run_conv0","Conv0Acc",0,t)+te("main","run_conv0",0,t,!1)+te("main_bg","run_conv0",0,t,!0);return`${C}${I}
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
${H.decls}${Q}`},ee=()=>`${C}
${An(o)}
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
    for (var hr : u32 = lid; hr < ${Wn}u; hr = hr + 256u) {
      let v = mom[${w}u + hr * ${t}u + c];
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
        let v = mom[${w}u + (base_hr + h) * ${t}u + c];
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
    q_ref = max(q_ref, ${O.toFixed(1)} * qs);
  }
  ${a==="none"?"q_ref = 1.0;":""}
  if (lid == 0u) {
    mom[${t*2}u] = vec4<f32>(q_ref, 0.0, 0.0, 0.0);
  }
  let scale_num = ${O.toFixed(1)} / q_ref;
  for (var idx : u32 = lid; idx < ${k}u; idx = idx + 256u) {
    let ic = (idx / ${3*p}u) % ${t}u;
    let qs = mom[ic * 2u].z;
    w_eff[idx] = w16_4[pp.next_w_vec4_off + idx] * ${E}(qs * scale_num);
  }
  if (lid < ${p}u) {
    ${a==="none"?`
    let mb = pp.next_meta_off + ${3*t}u + lid * 4u;
    w_eff[${F}u + lid] = ${B}(${E}(qmeta[mb]), ${E}(qmeta[mb + 1u]), ${E}(qmeta[mb + 2u]), ${E}(qmeta[mb + 3u]));
    `:`
    w_eff[${F}u + lid] = ${B}(0.0${T});
    `}
  }
}`,G=()=>`
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
    let a_off = a_base + c * ${_t}u;
    act8_0[a_off] = stage[s_base + c * ${ht}u];
    act8_1[a_off] = stage[s_base + (${g}u + c) * ${ht}u];
    act8_2[a_off] = stage[s_base + (${2*g}u + c) * ${ht}u];
    act8_3[a_off] = stage[s_base + (${3*g}u + c) * ${ht}u];
  }
}`,ie=(H,ne)=>{const P=H*g;return`
  for (var cl : u32 = 0u; cl < ${g}u; cl = cl + 1u) {
    let c = ${P}u + cl;
    let inv_qs = mom[c * 2u].w;
    let st = mom[c * 2u + 1u];
    let rm = mom[mom_base + c];
    let q_word = ${ne?`stage[s_bg_base + c * ${ht}u]`:`select(stage[s_base + c * ${ht}u], act8_${H}[a_base + cl * ${_t}u], use_act)`};
    let yv = unpack4x8unorm(q_word) * rm.w + vec4<f32>(rm.z);
    let a = vec4<f32>(
      act(yv.x * st.x + st.y),
      act(yv.y * st.x + st.y),
      act(yv.z * st.x + st.y),
      act(yv.w * st.x + st.y)
    );
    act8_${H}[a_base + cl * ${_t}u] = pack4x8unorm((a * inv_qs + vec4<f32>(${x.zeroBin.toFixed(1)})) * (1.0 / 255.0));
  }`},le=()=>`${An(o)}
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
${gt(4,H=>ie(H,!1))}
}

@compute @workgroup_size(64, 4, 1)
fn norm_halo_fill(@builtin(local_invocation_id) lid : vec3<u32>,
                  @builtin(workgroup_id) wid : vec3<u32>) {
  let idx = wid.y * 4u + lid.y;
  if (idx >= np.n_halo) { return; }
  let x4 = lid.x;
  let sg = x4 >> 5u;
  let x_pad = x4 + ${Ht}u;
  let s_bg_base = ${b}u * ${M}u + x4;
  let mom_base = ${v}u + sg * ${t}u;
  let dst_row = norm_aux[np.halo_off + idx];
  let a_base = dst_row * ${m}u + x_pad;
${gt(4,H=>ie(H,!0))}
}`,Ae=()=>{const H=!f&&t>=16,ne=ae(f),P=(q,_e)=>f?`
          let ${q} = vec4<f16>(vec2<f16>(unpack2x16float(((${_e} & 0x00FF00FFu) << 2u) | 0x3C003C00u)), vec2<f16>(unpack2x16float(((${_e} >> 6u) & 0x03FC03FCu) | 0x3C003C00u))) - vec4<f16>(${x.sterbenzSub});`:`
          let ${q} = unpack4x8unorm(${_e}) - vec4<f32>(${x.uZeroFloat});`,Y=q=>`
          let uL = ${q}[base - off0];
          let uN = ${q}[base - off1];
          let uC = ${q}[base];
          let uP = ${q}[base + off1];
          let uR = ${q}[base + off0];
          let u_neg = (uL >> sh_l) | (uN << sh_r);
          let u_pos = (uP >> sh_r) | (uR << sh_l);`+P("vn","u_neg")+P("vc","uC")+P("vp","u_pos"),D=(q,_e)=>{const se=q/4,Le=_e/4;if(A){const Ce=p/2,Ve=p;let Ge="";for(let Qe=se;Qe<Le;Qe+=2){const He=Qe*4,Fe=Qe/2;Ge+=`          {
            let wp0 = w_eff_u[wbu + ${Fe}u];
            let wp1 = w_eff_u[wbu + ${Ce+Fe}u];
            let wp2 = w_eff_u[wbu + ${Ve+Fe}u];
            let w0a = u4_lo(wp0);
            let w0b = u4_hi(wp0);
            let w1a = u4_lo(wp1);
            let w1b = u4_hi(wp1);
            let w2a = u4_lo(wp2);
            let w2b = u4_hi(wp2);
            a_${He}     = fma(vn, vec4<f16>(w0a.x), fma(vc, vec4<f16>(w1a.x), fma(vp, vec4<f16>(w2a.x), a_${He})));
            a_${He+1} = fma(vn, vec4<f16>(w0a.y), fma(vc, vec4<f16>(w1a.y), fma(vp, vec4<f16>(w2a.y), a_${He+1})));
            a_${He+2} = fma(vn, vec4<f16>(w0a.z), fma(vc, vec4<f16>(w1a.z), fma(vp, vec4<f16>(w2a.z), a_${He+2})));
            a_${He+3} = fma(vn, vec4<f16>(w0a.w), fma(vc, vec4<f16>(w1a.w), fma(vp, vec4<f16>(w2a.w), a_${He+3})));
            a_${He+4} = fma(vn, vec4<f16>(w0b.x), fma(vc, vec4<f16>(w1b.x), fma(vp, vec4<f16>(w2b.x), a_${He+4})));
            a_${He+5} = fma(vn, vec4<f16>(w0b.y), fma(vc, vec4<f16>(w1b.y), fma(vp, vec4<f16>(w2b.y), a_${He+5})));
            a_${He+6} = fma(vn, vec4<f16>(w0b.z), fma(vc, vec4<f16>(w1b.z), fma(vp, vec4<f16>(w2b.z), a_${He+6})));
            a_${He+7} = fma(vn, vec4<f16>(w0b.w), fma(vc, vec4<f16>(w1b.w), fma(vp, vec4<f16>(w2b.w), a_${He+7})));
          }
`}return Ge}return gt(Le-se,Ce=>{const Ve=se+Ce,Ge=Ve*4;return`          {
            let w0 = w_eff[wb + ${Ve}u];
            let w1 = w_eff[wb + ${p+Ve}u];
            let w2 = w_eff[wb + ${2*p+Ve}u];
            a_${Ge}     = fma(vn, ${B}(w0.x), fma(vc, ${B}(w1.x), fma(vp, ${B}(w2.x), a_${Ge})));
            a_${Ge+1} = fma(vn, ${B}(w0.y), fma(vc, ${B}(w1.y), fma(vp, ${B}(w2.y), a_${Ge+1})));
            a_${Ge+2} = fma(vn, ${B}(w0.z), fma(vc, ${B}(w1.z), fma(vp, ${B}(w2.z), a_${Ge+2})));
            a_${Ge+3} = fma(vn, ${B}(w0.w), fma(vc, ${B}(w1.w), fma(vp, ${B}(w2.w), a_${Ge+3})));
          }
`})},re=(q,_e,se)=>{const Le=q*g,Ce=`(${g}u + cp.pad0)`;return A?`        for (var ic : u32 = 0u; ic < ${Ce}; ic = ic + 1u) {
          let base = row_off + ic * ${_t}u;
${Y(`act8_${q}`)}
          let wbu = wbu_tap + ${Le?`(${Le}u + ic)`:"ic"} * ${3*p/2}u;
${D(_e,se)}
        }
`:`        for (var ic : u32 = 0u; ic < ${Ce}; ic = ic + 1u) {
          let base = row_off + ic * ${_t}u;
${Y(`act8_${q}`)}
          let wb = wb_tap + ${Le?`(${Le}u + ic)`:"ic"} * ${3*p}u;
${D(_e,se)}
        }
`},te=(q,_e,se,Le)=>{const Ce=Le-se,Ve=gt(Ce,Fe=>`  v_${Fe} : ${B},
`),Ge=gt(Ce,Fe=>{const Se=se+Fe;if(a==="none"){const Ye=Se>>>2,pt=["x","y","z","w"][Se&3];if(A){const it=F+Ye>>>1,ft=F+Ye&1?"u4_hi":"u4_lo";return`  var a_${Se} = ${B}(${ft}(w_eff_u[${it}u]).${pt});
`}return`  var a_${Se} = ${B}(w_eff[${F+Ye}u].${pt});
`}return`  var a_${Se} = ${B}(0.0${T});
`}),Qe=A?`        let wbu_tap = tap_yz * ${t*3*p/2}u;
`:`        let wb_tap = tap_yz * ${t*3*p}u;
`,He=Array.from({length:Ce},(Fe,Se)=>`a_${se+Se}`).join(", ");return`struct ${_e} {
${Ve}};
fn ${q}(y : i32, z : i32, x_pad : u32, dp : u32) -> ${_e} {
${Ge}  let d_step = i32(dp & 63u);
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
${Qe}${gt(4,Fe=>re(Fe,se,Le))}      }
      tap_yz = tap_yz + 1u;
    }
  }
  return ${_e}(${He});
}
`},Q=(q,_e,se,Le,Ce)=>{let Ve="";Ce==="bg"?Ve=`
  let y = i32(cp.bg_y0 + lid.y);
  let z = i32(cp.bg_z0);`:Ce==="ext"?Ve=`
  let pk_full = strips[cp.ext_off + wid.z];
  let ext_orig = pk_full >> 16u;
  let pk = pk_full & 0xFFFFu;
  let y = i32((pk & 255u) * 4u + lid.y);
  let z = i32(pk >> 8u);`:Ve=`
  var y : i32;
  var z : i32;
  if (cp.is_full != 0u) {
    y = i32(wid.y * 4u + lid.y);
    z = i32(cp.z_start + wid.z);
  } else {
    let pk = strips[cp.strip_off + wid.z] & 0xFFFFu;
    y = i32((pk & 255u) * 4u + lid.y);
    z = i32(pk >> 8u);
  }`;const Ge=Ce==="bg"?"lid.y * 2u + sg":Ce==="ext"?"ext_orig * 8u + lid.y * 2u + sg":"row_idx * 2u + sg",Qe=Ce==="main"?`${w}u`:`${v}u`,He=Ce==="bg"?"stage_bg":"stage",Fe=Ce==="main"?"true":"(((dp >> 24u) & 1u) != 0u)",Se=Ce==="bg"?`  let row_idx = u32(z) * 256u + u32(y);
  let s_bg_base = (${b}u + lid.y) * ${M}u + x4;`:`  let row_idx = u32(z) * 256u + u32(y);
  let s_row_base = ((u32(z) & 63u) * 256u + u32(y)) * ${M}u + x4;`;return`
@compute @workgroup_size(64, 4, 1)
fn ${q}(@builtin(local_invocation_id) lid : vec3<u32>,
             @builtin(workgroup_id) wid : vec3<u32>${ne.entryArgs||""}) {
  let x4 = lid.x;
  let sg = x4 >> 5u;
  let slane = x4 & 31u;
${ne.localHeader}  let x_pad = x4 + ${Ht}u;
${Ve}
  let dp = cp.d_pack;
  let acc = ${_e}(y, z, x_pad, dp);
${Se}
${ne.emit({accVar:"acc",cStart:se,cEnd:Le,hrExpr:Ge,storeMode:He,momOffExpr:Qe,alsoWriteMomMain:Ce!=="main",writeY8Expr:Fe})}}`},N=H?te("run_conv_lo","ConvAccLo",0,c)+te("run_conv_hi","ConvAccHi",c,t)+Q("main_lo","run_conv_lo",0,c,"main")+Q("main_hi","run_conv_hi",c,t,"main")+Q("main_ext_lo","run_conv_lo",0,c,"ext")+Q("main_ext_hi","run_conv_hi",c,t,"ext")+Q("main_bg_lo","run_conv_lo",0,c,"bg")+Q("main_bg_hi","run_conv_hi",c,t,"bg"):te("run_conv","ConvAcc",0,t)+Q("main","run_conv",0,t,"main")+Q("main_ext","run_conv",0,t,"ext")+Q("main_bg","run_conv",0,t,"bg"),X=A?`fn u4_lo(u : vec4<u32>) -> vec4<f16> {
  return vec4<f16>(vec2<f16>(unpack2x16float(u.x)), vec2<f16>(unpack2x16float(u.y)));
}
fn u4_hi(u : vec4<u32>) -> vec4<f16> {
  return vec4<f16>(vec2<f16>(unpack2x16float(u.z)), vec2<f16>(unpack2x16float(u.w)));
}
@group(0) @binding(6) var<uniform> w_eff_u : array<vec4<u32>, ${Math.ceil($/2)}>;`:`@group(0) @binding(6) var<storage, read> w_eff : array<${B}>;`;return`${C}${I}
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
${X}
@group(0) @binding(7) var<storage, read> strips : array<u32>;
@group(0) @binding(8) var<uniform> cp : BandConvParams;
${ne.decls}${N}`},pe=H=>{const ne=H*g;return`
  for (var cl : u32 = 0u; cl < ${g}u; cl = cl + 1u) {
    let c = ${ne}u + cl;
    if (c < ${n}u) {
      let st = mom[c * 2u + 1u];
      let rm = mom[mom_base + c];
      let q_word = select(stage[s_base + c * ${ht}u], act8_${H}[a_base + cl * ${_t}u], use_act);
      let yv = unpack4x8unorm(q_word) * rm.w + vec4<f32>(rm.z);
      let fv = vec4<f32>(
        act(yv.x * st.x + st.y),
        act(yv.y * st.x + st.y),
        act(yv.z * st.x + st.y),
        act(yv.w * st.x + st.y)
      );
      feat[c] = ${B}(fv);
    }
  }`};return{initActWgsl:ce,conv0Wgsl:j,prepWgsl:ee,flushWgsl:G,normWgsl:le,convWgsl:Ae,clsWgsl:()=>`${C}
${An(o)}
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
@group(0) @binding(8) var<uniform> qmeta_u : array<vec4<f32>, ${h}>;
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

  var feat : array<${B}, ${n}>;
${gt(4,H=>pe(H))}

  let w_cls = cp.w_vec4_off;
  let b_vec4 = cp.bias_off >> 2u;
${yr({chan:n,clsK4:r,nclass:s,V4:B,suf:T,readBiasStmt:"    let bv = qmeta_u[b_vec4 + k4];",biasExpr:H=>`bv.${["x","y","z","w"][H]}`,probCfg:d})}
}`,qmetaVec4Len:h,numConvs:u,totalWEffVec4s:$,useUniformWeff:A,csQ:g,halfPass0:W,halfPassConv:!f&&t>=16}}function la(e,t,n,s,r,i,o){return Be(this,null,function*(){var ge,Re;const a=U*U*U,f=o?a*4:a,l=t.dilations.length,u=t.cs/4,d=U*U*u*_t*4,c=(64*U+4)*t.cs*ht*4,m=(t.cs*2+4+(Wn+tr)*t.cs)*16,b=e.limits||{},M=Math.min((ge=b.maxStorageBufferBindingSize)!=null?ge:1/0,(Re=b.maxBufferSize)!=null?Re:1/0);if(d>M||c>M||m>M||f>M){const Pe=Math.ceil(Math.max(d,c,m,f)/1048576);throw new Error(`meshnet_fast_v4: LowMem128 max buffer (${Pe} MiB) exceeds device limit (${M>>>20} MiB)`)}const _=Ar({cs:t.cs,chan:t.chan,nclass:t.nclass,clsK4:n.clsK4,dilations:t.dilations,activation:t.activation,norm:t.norm,hasF16:s,subgroupMode:r,numConvs:l,probCfg:o});console.log(`[WebGPU-V4-128M] ${t.chan}ch(cs=${t.cs})/${t.nclass}cls (${l} convs, ${t.activation}, norm=${t.norm}${o?", prob=3":""}) | ${s?"f16+sterbenz":"f32"} | ${ur(r)} | ZYCX-4Q+64slice | maxBuf=${(Math.max(d,c,m,f)/1048576).toFixed(1)} MiB`);const w=GPUBufferUsage.STORAGE,v=GPUBufferUsage.UNIFORM,S=GPUBufferUsage.COPY_DST,h=GPUBufferUsage.COPY_SRC,k=U*U*fn,F=k*(s?2:4),$=s?Math.ceil(_.totalWEffVec4s/2)*16:_.totalWEffVec4s*16,A=!!(o&&d>=f),x=`128|${t.cs}|${s?1:0}|${f}|${A?1:0}`,C=gr(e,x,()=>{const Pe=[],oe=Dn(e,Pe),ye=oe.alloc,ze={inpBuf:ye(F,w|S|h),act8_0:ye(d,w|S|h),act8_1:ye(d,w|S|h),act8_2:ye(d,w|S|h),act8_3:ye(d,w|S|h),stageBuf:ye(c,w),momBuf:ye(m,w),labels8Buf:ye(f,w|S|h),readbackBuf:ye(f,GPUBufferUsage.MAP_READ|S),probPackTmpBuf:A?ye(f,w|S|h):null};return{buffers:Pe,named:ze,bytes:oe.getBytes()}}),{inpBuf:z,act8_0:I,act8_1:E,act8_2:T,act8_3:B,stageBuf:O,momBuf:ae,labels8Buf:ce,readbackBuf:V,probPackTmpBuf:W}=C.named,j=[],ee=Dn(e,j),G=ee.alloc,ie=G(s?n.wF16.byteLength:n.wF32.byteLength,w|S),le=G(n.qmetaF32.byteLength,w|v|S),Ae=G($,_.useUniformWeff?w|v:w),pe=t.norm==="gn"&&!(i!=null&&i.disableConeSkip),Me=G(nt*4,v|S),H=G(nt*4,v|S),ne=Array.from({length:l},()=>G(pe?nt*4:16,w|S)),P=Array.from({length:l-1},()=>G(pe?(nt+U*U)*4:16,w|S)),Y=G(16,v|S),D=G(16,v|S),re=Array.from({length:l},()=>G(48,v|S)),te=Array.from({length:l-1},()=>G(16,v|S)),Q=Math.max(256,b.minUniformBufferOffsetAlignment||256),N=Q>>>2,X=20,q=Math.max(1,(l-1)*X),_e=G(q*Q,v|S),se=new Uint32Array(q*N);e.queue.writeBuffer(ie,0,s?n.wF16:n.wF32),e.queue.writeBuffer(le,0,n.qmetaF32);let Le;try{Le=yield hr(e,t,n,s,r,o,_)}catch(Pe){for(const oe of j)oe.destroy();if(j.length=0,C.pooled)an.get(e)===C&&vn(e);else{for(const oe of C.buffers)oe.destroy();C.buffers.length=0}throw Pe}const{pInit:Ce,pMomFin:Ve,pPrepW:Ge,pFlush:Qe,pNorm:He,pNormHalo:Fe,pCls:Se,pConv0:Ye,pConv:pt}=Le,it=(Pe,oe)=>e.createBindGroup({layout:Pe,entries:oe.map((ye,ze)=>({binding:ze,resource:ye&&ye.buffer?ye:{buffer:ye}}))}),ft=it(Ce.bgl,[I,E,T,B]);{const Pe=e.createCommandEncoder(),oe=Pe.beginComputePass();oe.setPipeline(Ce.pipe),oe.setBindGroup(0,ft),oe.dispatchWorkgroups(1,U,U),oe.end(),e.queue.submit([Pe.finish()])}const Bt=(_.halfPass0?Ye.lo:Ye.main).bgl,It=it(Bt,[z,I,E,T,B,O,ie,ae,{buffer:le,offset:0,size:t.cs*16},Me,Y]),Ft=it(Se.bgl,[I,E,T,B,O,ie,ae,ce,le,H,D]),Zt=A?G(16,v|S):null,Gt=A?it(Se.bgl,[I,E,T,B,O,ie,ae,ce,le,H,Zt]):null,Lt=$r({device:e,hasF16:s,nvox:a,outBufBytes:f,inpBuf:z,act8_0:I,labels8Buf:ce,readbackBuf:V,pInit:Ce,bgInit:ft,pCls:Se,bgCls:Ft,clsUbo:D,packed:n,modelEntry:i,probCfg:o,canGpuProb:A,probSlots:A?{clsUbo1:Zt,bgCls1:Gt,pass0HoldBuf:W,y0:I,y1:E,b:T,sup:B}:null,ownedBuffers:j,mkBuf:G}),Et=re.map((Pe,oe)=>it(Ve.bgl,[ie,le,ae,Ae,ne[oe],Pe])),K=te.map((Pe,oe)=>it(He.bgl,[I,E,T,B,O,ae,P[oe],Pe])),wt={buffer:_e,offset:0,size:32},St=Array.from({length:l},(Pe,oe)=>oe===0?null:it(Qe.bgl,[I,E,T,B,O,ne[oe],wt])),Tt=_.halfPassConv?pt.lo:pt.main,Ut=Array.from({length:l},(Pe,oe)=>oe===0?null:it(Tt.bgl,[I,E,T,B,O,ae,Ae,ne[oe],wt])),sn=s?new Uint16Array(k):new Float32Array(k),y=new Uint8Array(U*U),L=new Uint32Array(nt),R=new Uint32Array(nt+U*U),J=new Uint32Array(12),ue=new Float32Array(J.buffer),ke=new Uint32Array(4),ve=(Pe,oe,ye,ze,me,Z,be,Oe)=>{const Je=Pe*N;se[Je]=oe?1:0,se[Je+1]=ye,se[Je+2]=ze,se[Je+3]=me,se[Je+4]=Z,se[Je+5]=be,se[Je+6]=Oe,se[Je+7]=0};function Ue(Pe,oe){return Be(this,null,function*(){if(Pe.length!==a)throw new Error(`meshnet_fast_v4 expected ${a} voxels, got ${Pe.length}`);const ye=t.norm==="gn"&&!(i!=null&&i.disableConeSkip),ze=yield Lt.prepareInput({volume:Pe,ioOpts:oe,useCone:ye,padInputHost:sn,headRowHost:y,hasF16Flag:s}),me=ze.info,Z=vr(y,me,t.dilations,ye),be=new Array(l);for(let he=0;he<l;he++){const Ie=Z.layers[he],$e=Ie.isFull?nt:Ie.mainStrips.length,we=Ie.isFull||!Ie.extStrips?0:Ie.extStrips.length,Ne=Ie.haloRows?Ie.haloRows.length:0;if(he===0){!Ie.isFull&&$e>0&&(L.set(Ie.mainStrips,0),e.queue.writeBuffer(Me,0,L.subarray(0,$e)),e.queue.writeBuffer(ne[0],0,L.subarray(0,$e))),be[0]={L:Ie,nMain:$e,nExt:we,nHalo:Ne};continue}const Xe=new Uint32Array(8),Ke=new Uint32Array(8),lt=new Uint32Array(8),Mt=new Uint32Array(8);if(!Ie.isFull){if($e>0){L.set(Ie.mainStrips,0);for(let xe=0;xe<$e;xe++)Ke[Ie.mainStrips[xe]>>>13]++;let fe=0;for(let xe=0;xe<8;xe++)Xe[xe]=fe,fe+=Ke[xe]}if(Ie.mode==="bwd"&&we>0){const fe=Array.from({length:8},()=>[]);for(let de=0;de<we;de++){const st=Ie.extStrips[de];fe[st>>>13].push((de&65535)<<16|st)}let xe=$e;for(let de=0;de<8;de++){lt[de]=xe;const st=fe[de];Mt[de]=st.length;for(let $t=0;$t<st.length;$t++)L[xe++]=st[$t]}e.queue.writeBuffer(ne[he],0,L.subarray(0,$e+we))}else $e>0&&e.queue.writeBuffer(ne[he],0,L.subarray(0,$e))}const Ee=Ie.mode==="rpure"&&Ne>0||Ie.mode==="bwd"&&he+1<l,tt=cs(t.dilations[he],Ee),ct=(he-1)*X,ot=Ie.bgStrip?Ie.bgStrip.yWg*4:0,Ze=Ie.bgStrip?Ie.bgStrip.z:0;for(let fe=0;fe<8;fe++)ve(ct+fe,Ie.isFull,fe*32,Xe[fe],lt[fe],tt,ot,Ze);for(let fe=0;fe<6;fe++)ve(ct+8+fe,Ie.isFull,fe*32,Xe[fe],0,0,0,0),ve(ct+14+fe,!1,fe*32,lt[fe],0,0,0,0);be[he]={L:Ie,nMain:$e,nExt:we,nHalo:Ne,mainCount:Ke,extCount:Mt,layerBaseSlot:ct}}l>1&&e.queue.writeBuffer(_e,0,se);let Oe=or(e,i);const Je=[];if(Oe==="single"){const he=e.createCommandEncoder();ze.runPrePasses(he,Je),Z.clsSkipped&&(he.clearBuffer(ce,0,f),Z.clsStrips.length>0&&e.queue.writeBuffer(H,0,Z.clsStrips));for(let Ie=0;Ie<l;Ie++){const $e=be[Ie],{L:we,nMain:Ne,nHalo:Xe}=$e,Ke=we.nMomExt||0,lt=we.isFull?nt:we.normStrips?we.normStrips.length:0;if(Ie===0){const Ee=we.isFull?64:1,tt=we.isFull?U:Ne,ct=!!(we.bgStrip&&Xe>0);if(ke[0]=we.isFull?1:0,ke[1]=we.bgStrip?we.bgStrip.yWg*4:0,ke[2]=we.bgStrip?we.bgStrip.z:0,ke[3]=0,e.queue.writeBuffer(Y,0,ke),_.halfPass0)for(const[ot,Ze]of[[Ye.lo,Ye.bgLo],[Ye.hi,Ye.bgHi]]){const fe=he.beginComputePass();fe.setBindGroup(0,It),tt>0&&(fe.setPipeline(ot.pipe),fe.dispatchWorkgroups(1,Ee,tt)),ct&&(fe.setPipeline(Ze.pipe),fe.dispatchWorkgroups(1,1,1)),fe.end(),Je.push("conv0")}else{const ot=he.beginComputePass();ot.setBindGroup(0,It),tt>0&&(ot.setPipeline(Ye.main.pipe),ot.dispatchWorkgroups(1,Ee,tt)),ct&&(ot.setPipeline(Ye.bg.pipe),ot.dispatchWorkgroups(1,1,1)),ot.end(),Je.push("conv0")}}else{const Ee=pt,tt=Ut[Ie],ct=St[Ie],{mainCount:ot,extCount:Ze,layerBaseSlot:fe}=$e,xe=we.mode==="rpure"&&!!we.bgStrip;for(let de=0;de<8;de++){if(de>=2){const Te=de-2,qe=we.isFull||ot[Te]>0,At=!we.isFull&&we.mode==="bwd"&&Ze[Te]>0;if(qe||At){const De=he.beginComputePass();De.setPipeline(Qe.pipe),qe&&(De.setBindGroup(0,ct,[(fe+8+Te)*Q]),De.dispatchWorkgroups(1,we.isFull?64:1,we.isFull?32:ot[Te])),At&&(De.setBindGroup(0,ct,[(fe+14+Te)*Q]),De.dispatchWorkgroups(1,1,Ze[Te])),De.end(),Je.push("flushStage")}}const st=we.isFull||ot[de]>0,$t=!we.isFull&&we.mode==="bwd"&&Ze[de]>0,vt=de===0&&xe;if(!st&&!$t&&!vt)continue;const xt=[(fe+de)*Q],mt=we.isFull?64:1,zt=we.isFull?32:ot[de];if(_.halfPassConv)for(const[Te,qe,At]of[[Ee.lo,Ee.extLo,Ee.bgLo],[Ee.hi,Ee.extHi,Ee.bgHi]]){const De=he.beginComputePass();De.setBindGroup(0,tt,xt),st&&(De.setPipeline(Te.pipe),De.dispatchWorkgroups(1,mt,zt)),$t&&(De.setPipeline(qe.pipe),De.dispatchWorkgroups(1,1,Ze[de])),vt&&(De.setPipeline(At.pipe),De.dispatchWorkgroups(1,1,1)),De.end(),Je.push("convHidden")}else{const Te=he.beginComputePass();Te.setBindGroup(0,tt,xt),st&&(Te.setPipeline(Ee.main.pipe),Te.dispatchWorkgroups(1,mt,zt)),$t&&(Te.setPipeline(Ee.ext.pipe),Te.dispatchWorkgroups(1,1,Ze[de])),vt&&(Te.setPipeline(Ee.bg.pipe),Te.dispatchWorkgroups(1,1,1)),Te.end(),Je.push("convHidden")}}}const Mt=Ie+1<l?n.w0Vec4s+Ie*n.hiddenVec4PerLayer:0;J[0]=Ie*n.metaStride,J[1]=Mt,J[2]=(Ie+1)*n.metaStride,J[3]=Ie+1<l?1:0,J[4]=Ie===0?1:0,J[5]=we.isFull?1:0,J[6]=Ne,J[7]=Ke*8,ue[8]=we.extWeight||0,J[9]=0,J[10]=0,J[11]=0,e.queue.writeBuffer(re[Ie],0,J);{const Ee=he.beginComputePass();Ee.setBindGroup(0,Et[Ie]),Ee.setPipeline(Ve.pipe),Ee.dispatchWorkgroups(t.cs,1,1),Ee.end(),Je.push("momentsPrep")}if(Ie+1<l){{const tt=he.beginComputePass();tt.setBindGroup(0,Et[Ie]),tt.setPipeline(Ge.pipe),tt.dispatchWorkgroups(1,1,1),tt.end(),Je.push("momentsPrep")}const Ee=we.isFull?0:lt;if((Ee>0||Xe>0)&&(Ee>0&&R.set(we.normStrips,0),Xe>0&&R.set(we.haloRows,Ee),e.queue.writeBuffer(P[Ie],0,R.subarray(0,Ee+Xe))),ke[0]=we.isFull?1:0,ke[1]=we.bgStrip?we.bgStrip.z*U+we.bgStrip.yWg*4:0,ke[2]=Ee,ke[3]=Xe,e.queue.writeBuffer(te[Ie],0,ke),we.isFull||lt>0||Xe>0){const tt=he.beginComputePass();tt.setBindGroup(0,K[Ie]),(we.isFull||lt>0)&&(tt.setPipeline(He.pipe),tt.dispatchWorkgroups(1,we.isFull?64:1,we.isFull?U:lt)),Xe>0&&(tt.setPipeline(Fe.pipe),tt.dispatchWorkgroups(1,Math.ceil(Xe/4),1)),tt.end(),Je.push("normHalo")}}}return Ue.__passCategories=Je,Lt.finishAndReadback({enc:he,schedule:Z,passCategories:Je,u4Tmp:ke,ioOpts:oe})}const et=qn(e),ut=typeof(oe==null?void 0:oe.onProgress)=="function"?oe.onProgress:null,yt=pr(Z,l);let je=0,at=-1;const Ot=he=>{if(!ut)return;const Ie=Math.min(.99,je/yt);let $e="";he>=0&&he!==at&&(at=he,$e=`Layer ${he+1}/${l}`),ut(Ie,$e)},rt=fr(e,e.__v4MsPerStrip||.12,Ot);let We=e.createCommandEncoder();ze.runPrePasses(We,Je),Z.clsSkipped&&(We.clearBuffer(ce,0,f),Z.clsStrips.length>0&&e.queue.writeBuffer(H,0,Z.clsStrips));for(let he=0;he<l;he++){const Ie=be[he],{L:$e,nMain:we,nHalo:Ne}=Ie,Xe=$e.nMomExt||0,Ke=$e.isFull?nt:$e.normStrips?$e.normStrips.length:0,lt=bs($e,he,l);if(he===0){const Ee=$e.isFull?64:1,tt=$e.isFull?U:we,ct=!!($e.bgStrip&&Ne>0);if(ke[0]=$e.isFull?1:0,ke[1]=$e.bgStrip?$e.bgStrip.yWg*4:0,ke[2]=$e.bgStrip?$e.bgStrip.z:0,ke[3]=0,e.queue.writeBuffer(Y,0,ke),_.halfPass0)for(const[ot,Ze]of[[Ye.lo,Ye.bgLo],[Ye.hi,Ye.bgHi]]){const fe=We.beginComputePass();fe.setBindGroup(0,It),tt>0&&(fe.setPipeline(ot.pipe),fe.dispatchWorkgroups(1,Ee,tt)),ct&&(fe.setPipeline(Ze.pipe),fe.dispatchWorkgroups(1,1,1)),fe.end(),Je.push("conv0")}else{const ot=We.beginComputePass();ot.setBindGroup(0,It),tt>0&&(ot.setPipeline(Ye.main.pipe),ot.dispatchWorkgroups(1,Ee,tt)),ct&&(ot.setPipeline(Ye.bg.pipe),ot.dispatchWorkgroups(1,1,1)),ot.end(),Je.push("conv0")}Oe==="calibrate"?(e.queue.submit([We.finish()]),We=e.createCommandEncoder()):Oe==="paced"&&(je+=lt.convWork,We=yield rt.submitChunk(We,lt.convWork,0,{forceUiYield:!0}))}else{const Ee=pt,tt=Ut[he],ct=St[he],{mainCount:ot,extCount:Ze,layerBaseSlot:fe}=Ie,xe=$e.mode==="rpure"&&!!$e.bgStrip;let de=0;for(let st=0;st<8;st++){if(st>=2){const mt=st-2,zt=$e.isFull||ot[mt]>0,Te=!$e.isFull&&$e.mode==="bwd"&&Ze[mt]>0;if(zt||Te){const qe=We.beginComputePass();qe.setPipeline(Qe.pipe),zt&&(qe.setBindGroup(0,ct,[(fe+8+mt)*Q]),qe.dispatchWorkgroups(1,$e.isFull?64:1,$e.isFull?32:ot[mt])),Te&&(qe.setBindGroup(0,ct,[(fe+14+mt)*Q]),qe.dispatchWorkgroups(1,1,Ze[mt])),qe.end(),Je.push("flushStage")}}const $t=$e.isFull||ot[st]>0,vt=!$e.isFull&&$e.mode==="bwd"&&Ze[st]>0,xt=st===0&&xe;if($t||vt||xt){const mt=[(fe+st)*Q],zt=$e.isFull?64:1,Te=$e.isFull?32:ot[st];if(_.halfPassConv)for(const[qe,At,De]of[[Ee.lo,Ee.extLo,Ee.bgLo],[Ee.hi,Ee.extHi,Ee.bgHi]]){const jt=We.beginComputePass();jt.setBindGroup(0,tt,mt),$t&&(jt.setPipeline(qe.pipe),jt.dispatchWorkgroups(1,zt,Te)),vt&&(jt.setPipeline(At.pipe),jt.dispatchWorkgroups(1,1,Ze[st])),xt&&(jt.setPipeline(De.pipe),jt.dispatchWorkgroups(1,1,1)),jt.end(),Je.push("convHidden")}else{const qe=We.beginComputePass();qe.setBindGroup(0,tt,mt),$t&&(qe.setPipeline(Ee.main.pipe),qe.dispatchWorkgroups(1,zt,Te)),vt&&(qe.setPipeline(Ee.ext.pipe),qe.dispatchWorkgroups(1,1,Ze[st])),xt&&(qe.setPipeline(Ee.bg.pipe),qe.dispatchWorkgroups(1,1,1)),qe.end(),Je.push("convHidden")}de+=($t?$e.isFull?2048:ot[st]:0)+(vt?Ze[st]:0)}if(Oe==="calibrate"&&(de>=512||st===7&&de>0)){const mt=performance.now();e.queue.submit([We.finish()]),yield e.queue.onSubmittedWorkDone();const zt=performance.now()-mt;if(We=e.createCommandEncoder(),je+=de,de>=512){const Te=zt/de,qe=Te*nt;e.__v4WinCalibrated=!0,rt.setMsPerStrip(Te),!et.isWindowsSharedIgpu&&qe<nr?(e.__v4WinFast=!0,Oe="pipelined",console.log(`[WebGPU-V4-128M] Windows GPU calibration: estFullLayer=${qe.toFixed(1)}ms -> unthrottled pipelined mode`)):(e.__v4WinFast=!1,Oe="paced",console.log(`[WebGPU-V4-128M] Windows GPU calibration: estFullLayer=${qe.toFixed(1)}ms -> TDR-safe 2-in-flight paced mode`),Ot(he))}de=0}else Oe==="paced"&&de>0&&(de*rt.getMsPerStrip()>=sr*.75||st===7)&&(je+=de,We=yield rt.submitChunk(We,de,he),de=0)}}const Mt=he+1<l?n.w0Vec4s+he*n.hiddenVec4PerLayer:0;J[0]=he*n.metaStride,J[1]=Mt,J[2]=(he+1)*n.metaStride,J[3]=he+1<l?1:0,J[4]=he===0?1:0,J[5]=$e.isFull?1:0,J[6]=we,J[7]=Xe*8,ue[8]=$e.extWeight||0,J[9]=0,J[10]=0,J[11]=0,e.queue.writeBuffer(re[he],0,J);{const Ee=We.beginComputePass();Ee.setBindGroup(0,Et[he]),Ee.setPipeline(Ve.pipe),Ee.dispatchWorkgroups(t.cs,1,1),Ee.end(),Je.push("momentsPrep")}if(he+1<l){{const tt=We.beginComputePass();tt.setBindGroup(0,Et[he]),tt.setPipeline(Ge.pipe),tt.dispatchWorkgroups(1,1,1),tt.end(),Je.push("momentsPrep")}const Ee=$e.isFull?0:Ke;if((Ee>0||Ne>0)&&(Ee>0&&R.set($e.normStrips,0),Ne>0&&R.set($e.haloRows,Ee),e.queue.writeBuffer(P[he],0,R.subarray(0,Ee+Ne))),ke[0]=$e.isFull?1:0,ke[1]=$e.bgStrip?$e.bgStrip.z*U+$e.bgStrip.yWg*4:0,ke[2]=Ee,ke[3]=Ne,e.queue.writeBuffer(te[he],0,ke),$e.isFull||Ke>0||Ne>0){const tt=We.beginComputePass();tt.setBindGroup(0,K[he]),($e.isFull||Ke>0)&&(tt.setPipeline(He.pipe),tt.dispatchWorkgroups(1,$e.isFull?64:1,$e.isFull?U:Ke)),Ne>0&&(tt.setPipeline(Fe.pipe),tt.dispatchWorkgroups(1,Math.ceil(Ne/4),1)),tt.end(),Je.push("normHalo")}}Oe==="pipelined"?(e.queue.submit([We.finish()]),We=e.createCommandEncoder()):Oe==="calibrate"?(e.queue.submit([We.finish()]),yield e.queue.onSubmittedWorkDone(),We=e.createCommandEncoder(),je+=(he===0?lt.convWork:0)+lt.normWork,he===l-1&&!e.__v4WinCalibrated&&(e.__v4WinCalibrated=!0,e.__v4WinFast=!et.isWindowsSharedIgpu)):(je+=lt.normWork,We=yield rt.submitChunk(We,lt.normWork,he))}return Oe==="paced"&&(yield rt.waitBeforeFinalSubmit()),Ue.__passCategories=Je,Lt.finishAndReadback({enc:We,schedule:Z,passCategories:Je,u4Tmp:ke,ioOpts:oe,paced:Oe==="paced",onProgress:ut})})}return Lt.warmupIoPipelines(),Ue.dispose=({keepSharedWorkspace:Pe=!1}={})=>{Lt.dispose();for(const oe of j)oe.destroy();if(j.length=0,ee.resetBytes(),C.pooled)Pe?C.inUse=!1:an.get(e)===C&&vn(e);else{for(const oe of C.buffers)oe.destroy();C.buffers.length=0}},Ue.gpuBytes=()=>C.bytes+ee.getBytes(),Ue.__passCategories=[],Ue.__coneInfo=()=>({paddedVox:k,actMiB:d/1048576,mode:"LowMem128"}),Ue.kernels="v4-int8",Ue})}const Pr=!0;function vs(r,i,o){return Be(this,arguments,function*(e,t,n,s={}){us++;try{return yield ua(e,t,n,s)}finally{us--}})}function ua(r,i,o){return Be(this,arguments,function*(e,t,n,s={}){var yt,je,at,Ot;const a=t instanceof Uint8Array?t:new Uint8Array(t),f=Qs(a.buffer.slice(a.byteOffset,a.byteOffset+a.byteLength)),l=Js(f);s!=null&&s.classifierBias&&l.classifier&&(l.classifier.bias=Float32Array.from(s.classifierBias));const u=_s(s),d=(s==null?void 0:s.dilations)||(u==null?void 0:u.dilations)||(l.convs.length===25?[16,8,4,2,1,16,8,4,2,1,16,8,4,2,1,16,8,4,2,1,16,8,4,2,1]:l.convs.length===9?[1,2,4,8,16,8,4,2,1]:ls),g=(s==null?void 0:s.activation)||(u==null?void 0:u.activation)||(l.affines.length||l.convs.length>=13?"gelu_tanh":"relu"),c=l.convs[0].outC,p=c>8?Math.ceil(c/8)*8:Math.ceil(c/4)*4,m=er(l,{nx:U,ny:U,nz:U,cs:p,activation:g,dilations:d}),b=sa(a,l,m,s),M=(s==null?void 0:s.outputType)==="probability"?Xo(s,m.nclass):null,_=!!((je=(yt=e.features)==null?void 0:yt.has)!=null&&je.call(yt,"shader-f16"))&&!(s!=null&&s.disableF16),w=lr(e,s),v=U*U*U,S=M?v*4:v,h=m.cs>=16,k=h?m.cs/2:m.cs,F=U*U*k*_t*4,$=U*U*k*ht*4,A=e.limits||{},x=Math.min((at=A.maxStorageBufferBindingSize)!=null?at:1/0,(Ot=A.maxBufferSize)!=null?Ot:1/0),C=ir(e,m,s);if((s!=null&&s.forceLowMem128||C||F>x||S>x)&&m.cs>=8&&m.cs%4===0)return la(e,m,b,_,w,s,M);if(F>x||S>x){const rt=Math.max(F,S)>>>20;throw new Error(`meshnet_fast_v4: buffer (${rt} MiB) exceeds device limit (${x>>>20} MiB)`)}const z=ar(e,s),I=Mr({cs:m.cs,chan:m.chan,nclass:m.nclass,clsK4:b.clsK4,dilations:m.dilations,activation:m.activation,norm:m.norm,hasF16:_,subgroupMode:w,splitHalves:h,probCfg:M,chunkableStd:z});console.log(`[WebGPU-V4] ${m.chan}ch(cs=${m.cs})/${m.nclass}cls (${m.dilations.length} convs, ${m.activation}, norm=${m.norm}${M?", prob=3":""}) | ${_?"f16+sterbenz":"f32"} | ${ur(w)} | ZYCX-pad80 | maxBuf=${(Math.max(F,S)/1048576).toFixed(1)} MiB`);const E=GPUBufferUsage.STORAGE,T=GPUBufferUsage.COPY_DST,B=GPUBufferUsage.COPY_SRC,O=U*U*fn,ae=O*(_?2:4),ce=Wn*m.cs*16,V=tr*m.cs*16,W=(m.cs*2+4)*16,j=_?Math.ceil(I.totalWEffVec4s/2)*16:I.totalWEffVec4s*16,ee=`std|${m.cs}|${h?1:0}|${_?1:0}|${S}`,G=gr(e,ee,()=>{const rt=[],We=Dn(e,rt),he=We.alloc,Ie={inpBuf:he(ae,E|T|B),act8_0:he(F,E|T|B),act8_1:he(h?F:16,E|T|B),y8_0:he($,E|T|B),y8_1:he(h?$:16,E|T|B),momMainBuf:he(ce,E),momExtBuf:he(V,E),momStatsBuf:he(W,E),labels8Buf:he(S,E|T|B),readbackBuf:he(S,GPUBufferUsage.MAP_READ|T)};return{buffers:rt,named:Ie,bytes:We.getBytes()}}),{inpBuf:ie,act8_0:le,act8_1:Ae,y8_0:pe,y8_1:Me,momMainBuf:H,momExtBuf:ne,momStatsBuf:P,labels8Buf:Y,readbackBuf:D}=G.named,re=[],te=Dn(e,re),Q=te.alloc,N=Q(_?b.wF16.byteLength:b.wF32.byteLength,E|T),X=Q(b.qmetaF32.byteLength,E|T),q=Q(j,I.useUniformWeff?E|GPUBufferUsage.UNIFORM:E),_e=m.dilations.length,se=m.norm==="gn"&&!(s!=null&&s.disableConeSkip),Le=Array.from({length:_e},()=>Q(se?nt*4:16,E|T)),Ce=Array.from({length:_e-1},()=>Q(se?(nt+U*U)*4:16,E|T)),Ve=Q(se?nt*4:16,E|T),Ge=Q(16,GPUBufferUsage.UNIFORM|T),Qe=Q(16,GPUBufferUsage.UNIFORM|T),He=Array.from({length:_e},()=>Q(48,GPUBufferUsage.UNIFORM|T)),Fe=Array.from({length:_e-1},()=>Q(16,GPUBufferUsage.UNIFORM|T)),Se=Math.max(256,A.minUniformBufferOffsetAlignment||256),Ye=Se>>>2,pt=I.chunkableStd?Math.max(1,(_e-1)*Qn):0,it=I.chunkableStd?Q(pt*Se,GPUBufferUsage.UNIFORM|T):null,ft=I.chunkableStd?new Uint32Array(pt*Ye):null,Bt=I.chunkableStd?null:Array.from({length:_e},()=>Q(16,GPUBufferUsage.UNIFORM|T));e.queue.writeBuffer(N,0,_?b.wF16:b.wF32),e.queue.writeBuffer(X,0,b.qmetaF32);let It;try{It=yield wr(e,m,b,_,w,h,M,I)}catch(rt){for(const We of re)We.destroy();if(re.length=0,G.pooled)an.get(e)===G&&vn(e);else{for(const We of G.buffers)We.destroy();G.buffers.length=0}throw rt}const{pInit:Ft,pMomFin:Zt,pPrepW:Gt,pNorm:Lt,pNormHalo:Et,pCls:K,pConv0:wt,pConv:St}=It,Tt=(rt,We)=>e.createBindGroup({layout:rt,entries:We.map((he,Ie)=>({binding:Ie,resource:he&&he.buffer?he:{buffer:he}}))}),Ut=Tt(Ft.bgl,[le,Ae]);{const rt=e.createCommandEncoder(),We=rt.beginComputePass();We.setPipeline(Ft.pipe),We.setBindGroup(0,Ut),We.dispatchWorkgroups(1,U,U),We.end(),e.queue.submit([rt.finish()])}const sn=(I.halfPass0?wt.lo:wt.main).bgl,y=Tt(sn,[ie,pe,Me,N,X,H,ne,Le[0],Ge]),L=Tt(K.bgl,[pe,Me,N,X,H,P,Y,Ve,Qe]),R=!!(M&&h&&F>=S&&$>=S),J=R?Q(16,GPUBufferUsage.UNIFORM|T):null,ue=R?Tt(K.bgl,[pe,Me,N,X,H,P,Y,Ve,J]):null,ke=$r({device:e,hasF16:_,nvox:v,outBufBytes:S,inpBuf:ie,act8_0:le,labels8Buf:Y,readbackBuf:D,pInit:Ft,bgInit:Ut,pCls:K,bgCls:L,clsUbo:Qe,packed:b,modelEntry:s,probCfg:M,canGpuProb:R,probSlots:R?{clsUbo1:J,bgCls1:ue,pass0HoldBuf:le,y0:pe,y1:Me,b:Ae,sup:le}:null,ownedBuffers:re,mkBuf:Q}),ve=He.map((rt,We)=>Tt(Zt.bgl,[N,X,H,ne,P,q,Le[We],rt])),Ue=Fe.map((rt,We)=>Tt(Lt.bgl,[le,Ae,pe,Me,H,ne,P,Ce[We],rt])),ge=I.chunkableStd?{buffer:it,offset:0,size:32}:null,Re=I.halfPassConv?St.lo:St.main,Pe=Array.from({length:_e},(rt,We)=>We===0?null:Tt(Re.bgl,[le,Ae,pe,Me,H,ne,q,Le[We],I.chunkableStd?ge:Bt[We]])),oe=(rt,We,he,Ie,$e,we)=>{const Ne=rt*Ye;ft[Ne]=We?1:0,ft[Ne+1]=he,ft[Ne+2]=Ie,ft[Ne+3]=0,ft[Ne+4]=$e,ft[Ne+5]=we,ft[Ne+6]=0,ft[Ne+7]=0},ye=(rt,We,he,Ie,$e,we,Ne,Xe)=>{if(!(we<=0&&Ne<=0))if(I.halfPassConv){{const Ke=rt.beginComputePass();Ie?Ke.setBindGroup(0,he,Ie):Ke.setBindGroup(0,he),we>0&&(Ke.setPipeline(We.lo.pipe),Ke.dispatchWorkgroups(1,$e,we)),Ne>0&&(Ke.setPipeline(We.extLo.pipe),Ke.dispatchWorkgroups(1,1,Ne)),Ke.end(),Xe.push("convHidden")}{const Ke=rt.beginComputePass();Ie?Ke.setBindGroup(0,he,Ie):Ke.setBindGroup(0,he),we>0&&(Ke.setPipeline(We.hi.pipe),Ke.dispatchWorkgroups(1,$e,we)),Ne>0&&(Ke.setPipeline(We.extHi.pipe),Ke.dispatchWorkgroups(1,1,Ne)),Ke.end(),Xe.push("convHidden")}}else{const Ke=rt.beginComputePass();Ie?Ke.setBindGroup(0,he,Ie):Ke.setBindGroup(0,he),we>0&&(Ke.setPipeline(We.main.pipe),Ke.dispatchWorkgroups(1,$e,we)),Ne>0&&(Ke.setPipeline(We.ext.pipe),Ke.dispatchWorkgroups(1,1,Ne)),Ke.end(),Xe.push("convHidden")}},ze=_?new Uint16Array(O):new Float32Array(O),me=new Uint8Array(U*U),Z=new Uint32Array(nt),be=new Uint32Array(nt+U*U),Oe=new Uint32Array(12),Je=new Float32Array(Oe.buffer),et=new Uint32Array(4);function ut(rt,We){return Be(this,null,function*(){if(rt.length!==v)throw new Error(`meshnet_fast_v4 expected ${v} voxels, got ${rt.length}`);const he=m.norm==="gn"&&!(s!=null&&s.disableConeSkip),Ie=yield ke.prepareInput({volume:rt,ioOpts:We,useCone:he,padInputHost:ze,headRowHost:me,hasF16Flag:_}),$e=Ie.info,we=vr(me,$e,m.dilations,he);let Ne=or(e,s);const Xe=[];if(Ne==="single"&&!I.chunkableStd){const fe=e.createCommandEncoder();Ie.runPrePasses(fe,Xe),we.clsSkipped&&(fe.clearBuffer(Y,0,S),we.clsStrips.length>0&&e.queue.writeBuffer(Ve,0,we.clsStrips));for(let xe=0;xe<_e;xe++){const de=we.layers[xe],st=de.isFull?nt:de.mainStrips.length,$t=de.isFull||!de.extStrips?0:de.extStrips.length,vt=de.nMomExt||0,xt=de.haloRows?de.haloRows.length:0,mt=de.isFull?nt:de.normStrips?de.normStrips.length:0;if(!de.isFull&&(st>0||$t>0)&&(st>0&&Z.set(de.mainStrips,0),$t>0&&Z.set(de.extStrips,st),e.queue.writeBuffer(Le[xe],0,Z.subarray(0,st+$t))),xe===0){const Te=de.isFull?64:1,qe=de.isFull?U:st,At=!!(de.bgStrip&&xt>0);if(et[0]=de.isFull?1:0,et[1]=de.bgStrip?de.bgStrip.yWg*4:0,et[2]=de.bgStrip?de.bgStrip.z:0,et[3]=0,e.queue.writeBuffer(Ge,0,et),I.halfPass0){{const De=fe.beginComputePass();De.setBindGroup(0,y),qe>0&&(De.setPipeline(wt.lo.pipe),De.dispatchWorkgroups(1,Te,qe)),At&&(De.setPipeline(wt.bgLo.pipe),De.dispatchWorkgroups(1,1,1)),De.end(),Xe.push("conv0")}{const De=fe.beginComputePass();De.setBindGroup(0,y),qe>0&&(De.setPipeline(wt.hi.pipe),De.dispatchWorkgroups(1,Te,qe)),At&&(De.setPipeline(wt.bgHi.pipe),De.dispatchWorkgroups(1,1,1)),De.end(),Xe.push("conv0")}}else{const De=fe.beginComputePass();De.setBindGroup(0,y),qe>0&&(De.setPipeline(wt.main.pipe),De.dispatchWorkgroups(1,Te,qe)),At&&(De.setPipeline(wt.bg.pipe),De.dispatchWorkgroups(1,1,1)),De.end(),Xe.push("conv0")}}else{const Te=m.dilations[xe],qe=Pe[xe],At=de.isFull?64:1,De=de.isFull?U:st,jt=de.mode==="rpure"&&xt>0||de.mode==="bwd"&&xe+1<_e;et[0]=de.isFull?1:0,et[1]=st,et[2]=cs(Te,jt),et[3]=0,e.queue.writeBuffer(Bt[xe],0,et),ye(fe,St,qe,null,At,De,$t,Xe)}const zt=xe+1<_e?b.w0Vec4s+xe*b.hiddenVec4PerLayer:0;Oe[0]=xe*b.metaStride,Oe[1]=zt,Oe[2]=(xe+1)*b.metaStride,Oe[3]=xe+1<_e?1:0,Oe[4]=xe===0?1:0,Oe[5]=de.isFull?1:0,Oe[6]=st,Oe[7]=vt*8,Je[8]=de.extWeight||0,Oe[9]=0,Oe[10]=0,Oe[11]=0,e.queue.writeBuffer(He[xe],0,Oe);{const Te=fe.beginComputePass();Te.setBindGroup(0,ve[xe]),Te.setPipeline(Zt.pipe),Te.dispatchWorkgroups(m.cs,1,1),Te.end(),Xe.push("momentsPrep")}if(xe+1<_e){{const qe=fe.beginComputePass();qe.setBindGroup(0,ve[xe]),qe.setPipeline(Gt.pipe),qe.dispatchWorkgroups(1,1,1),qe.end(),Xe.push("momentsPrep")}const Te=de.isFull?0:mt;if((Te>0||xt>0)&&(Te>0&&be.set(de.normStrips,0),xt>0&&be.set(de.haloRows,Te),e.queue.writeBuffer(Ce[xe],0,be.subarray(0,Te+xt))),et[0]=de.isFull?1:0,et[1]=de.bgStrip?de.bgStrip.z*U+de.bgStrip.yWg*4:0,et[2]=Te,et[3]=xt,e.queue.writeBuffer(Fe[xe],0,et),de.isFull||mt>0||xt>0){const qe=fe.beginComputePass();qe.setBindGroup(0,Ue[xe]),(de.isFull||mt>0)&&(qe.setPipeline(Lt.pipe),qe.dispatchWorkgroups(1,de.isFull?64:1,de.isFull?U:mt)),xt>0&&(qe.setPipeline(Et.pipe),qe.dispatchWorkgroups(1,Math.ceil(xt/4),1)),qe.end(),Xe.push("normHalo")}}}return ut.__passCategories=Xe,ke.finishAndReadback({enc:fe,schedule:we,passCategories:Xe,u4Tmp:et,ioOpts:We})}const Ke=qn(e),lt=typeof(We==null?void 0:We.onProgress)=="function"?We.onProgress:null,Mt=pr(we,_e);let Ee=0,tt=-1;const ct=fe=>{if(!lt)return;const xe=Math.min(.99,Ee/Mt);let de="";fe>=0&&fe!==tt&&(tt=fe,de=`Layer ${fe+1}/${_e}`),lt(xe,de)},ot=fr(e,e.__v4MsPerStrip||.12,ct);let Ze=e.createCommandEncoder();Ie.runPrePasses(Ze,Xe),we.clsSkipped&&(Ze.clearBuffer(Y,0,S),we.clsStrips.length>0&&e.queue.writeBuffer(Ve,0,we.clsStrips));for(let fe=0;fe<_e;fe++){const xe=we.layers[fe],de=xe.isFull?nt:xe.mainStrips.length,st=xe.isFull||!xe.extStrips?0:xe.extStrips.length,$t=xe.nMomExt||0,vt=xe.haloRows?xe.haloRows.length:0,xt=xe.isFull?nt:xe.normStrips?xe.normStrips.length:0,mt=bs(xe,fe,_e);if(!xe.isFull&&(de>0||st>0)&&(de>0&&Z.set(xe.mainStrips,0),st>0&&Z.set(xe.extStrips,de),e.queue.writeBuffer(Le[fe],0,Z.subarray(0,de+st))),fe===0){const Te=xe.isFull?64:1,qe=xe.isFull?U:de,At=!!(xe.bgStrip&&vt>0);if(et[0]=xe.isFull?1:0,et[1]=xe.bgStrip?xe.bgStrip.yWg*4:0,et[2]=xe.bgStrip?xe.bgStrip.z:0,et[3]=0,e.queue.writeBuffer(Ge,0,et),I.halfPass0){{const De=Ze.beginComputePass();De.setBindGroup(0,y),qe>0&&(De.setPipeline(wt.lo.pipe),De.dispatchWorkgroups(1,Te,qe)),At&&(De.setPipeline(wt.bgLo.pipe),De.dispatchWorkgroups(1,1,1)),De.end(),Xe.push("conv0")}{const De=Ze.beginComputePass();De.setBindGroup(0,y),qe>0&&(De.setPipeline(wt.hi.pipe),De.dispatchWorkgroups(1,Te,qe)),At&&(De.setPipeline(wt.bgHi.pipe),De.dispatchWorkgroups(1,1,1)),De.end(),Xe.push("conv0")}}else{const De=Ze.beginComputePass();De.setBindGroup(0,y),qe>0&&(De.setPipeline(wt.main.pipe),De.dispatchWorkgroups(1,Te,qe)),At&&(De.setPipeline(wt.bg.pipe),De.dispatchWorkgroups(1,1,1)),De.end(),Xe.push("conv0")}Ne==="calibrate"?(e.queue.submit([Ze.finish()]),Ze=e.createCommandEncoder()):Ne==="paced"&&(Ee+=mt.convWork,Ze=yield ot.submitChunk(Ze,mt.convWork,0,{forceUiYield:!0}))}else{const Te=m.dilations[fe],qe=Pe[fe],At=xe.isFull?64:1,De=xe.isFull?U:de,jt=xe.mode==="rpure"&&vt>0||xe.mode==="bwd"&&fe+1<_e,Bn=cs(Te,jt);if(!I.chunkableStd)et[0]=xe.isFull?1:0,et[1]=de,et[2]=Bn,et[3]=0,e.queue.writeBuffer(Bt[fe],0,et),ye(Ze,St,qe,null,At,De,st,Xe);else if(Ne==="pipelined"||Ne==="single"){const Xt=(fe-1)*Qn;oe(Xt,xe.isFull,de,Bn,0,0),e.queue.writeBuffer(it,Xt*Se,ft.subarray(Xt*Ye,(Xt+1)*Ye)),ye(Ze,St,qe,[Xt*Se],At,De,st,Xe)}else{const Xt=(fe-1)*Qn,Hn=Ne==="calibrate"?1024:Math.max(256,Math.min(4096,Math.round(sr/Math.max(.005,ot.getMsPerStrip())))),xn=[];let Fn=0;if(xe.isFull){const en=Math.max(4,Math.min(64,Math.round(Hn/64)));for(let Nt=0;Nt<U;Nt+=en){const Wt=Math.min(en,U-Nt),tn=Xt+Fn++;oe(tn,!0,de,Bn,Nt,0),xn.push({slotIdx:tn,mainY:64,mainCountZ:Wt,extCountZ:0,strips:Wt*64})}}else{const en=Math.max(256,Hn);for(let Wt=0;Wt<de;Wt+=en){const tn=Math.min(en,de-Wt),dn=Xt+Fn++;oe(dn,!1,de,Bn,Wt,0),xn.push({slotIdx:dn,mainY:1,mainCountZ:tn,extCountZ:0,strips:tn})}const Nt=Math.max(256,Hn);for(let Wt=0;Wt<st;Wt+=Nt){const tn=Math.min(Nt,st-Wt),dn=Xt+Fn++;oe(dn,!1,de,Bn,0,Wt),xn.push({slotIdx:dn,mainY:1,mainCountZ:0,extCountZ:tn,strips:tn})}}Fn>0&&e.queue.writeBuffer(it,Xt*Se,ft.subarray(Xt*Ye,(Xt+Fn)*Ye));let Jt=0;for(let en=0;en<xn.length;en++){const Nt=xn[en];if(ye(Ze,St,qe,[Nt.slotIdx*Se],Nt.mainY,Nt.mainCountZ,Nt.extCountZ,Xe),Ne==="pipelined")continue;Jt+=Nt.strips;const Wt=en===xn.length-1;if(Ne==="calibrate"&&(Jt>=512||Wt&&Jt>0)){const tn=performance.now();e.queue.submit([Ze.finish()]),yield e.queue.onSubmittedWorkDone();const dn=performance.now()-tn;if(Ze=e.createCommandEncoder(),Ee+=Jt,Jt>=512){const Ss=dn/Jt,jn=Ss*nt;e.__v4WinCalibrated=!0,ot.setMsPerStrip(Ss),!Ke.isWindowsSharedIgpu&&jn<nr?(e.__v4WinFast=!0,Ne="pipelined",console.log(`[WebGPU-V4] Windows GPU calibration: estFullLayer=${jn.toFixed(1)}ms -> unthrottled pipelined mode`)):(e.__v4WinFast=!1,Ne="paced",console.log(`[WebGPU-V4] Windows GPU calibration: estFullLayer=${jn.toFixed(1)}ms -> TDR-safe 2-in-flight paced mode`),ct(fe))}Jt=0}else Ne==="paced"&&(Ee+=Jt,Ze=yield ot.submitChunk(Ze,Jt,fe),Jt=0)}}}const zt=fe+1<_e?b.w0Vec4s+fe*b.hiddenVec4PerLayer:0;Oe[0]=fe*b.metaStride,Oe[1]=zt,Oe[2]=(fe+1)*b.metaStride,Oe[3]=fe+1<_e?1:0,Oe[4]=fe===0?1:0,Oe[5]=xe.isFull?1:0,Oe[6]=de,Oe[7]=$t*8,Je[8]=xe.extWeight||0,Oe[9]=0,Oe[10]=0,Oe[11]=0,e.queue.writeBuffer(He[fe],0,Oe);{const Te=Ze.beginComputePass();Te.setBindGroup(0,ve[fe]),Te.setPipeline(Zt.pipe),Te.dispatchWorkgroups(m.cs,1,1),Te.end(),Xe.push("momentsPrep")}if(fe+1<_e){{const qe=Ze.beginComputePass();qe.setBindGroup(0,ve[fe]),qe.setPipeline(Gt.pipe),qe.dispatchWorkgroups(1,1,1),qe.end(),Xe.push("momentsPrep")}const Te=xe.isFull?0:xt;if((Te>0||vt>0)&&(Te>0&&be.set(xe.normStrips,0),vt>0&&be.set(xe.haloRows,Te),e.queue.writeBuffer(Ce[fe],0,be.subarray(0,Te+vt))),et[0]=xe.isFull?1:0,et[1]=xe.bgStrip?xe.bgStrip.z*U+xe.bgStrip.yWg*4:0,et[2]=Te,et[3]=vt,e.queue.writeBuffer(Fe[fe],0,et),xe.isFull||xt>0||vt>0){const qe=Ze.beginComputePass();qe.setBindGroup(0,Ue[fe]),(xe.isFull||xt>0)&&(qe.setPipeline(Lt.pipe),qe.dispatchWorkgroups(1,xe.isFull?64:1,xe.isFull?U:xt)),vt>0&&(qe.setPipeline(Et.pipe),qe.dispatchWorkgroups(1,Math.ceil(vt/4),1)),qe.end(),Xe.push("normHalo")}}if(Ne==="pipelined")e.queue.submit([Ze.finish()]),Ze=e.createCommandEncoder();else if(Ne==="calibrate")e.queue.submit([Ze.finish()]),yield e.queue.onSubmittedWorkDone(),Ze=e.createCommandEncoder(),Ee+=(fe===0||!I.chunkableStd?mt.convWork:0)+mt.normWork,fe===_e-1&&!e.__v4WinCalibrated&&(e.__v4WinCalibrated=!0,e.__v4WinFast=!Ke.isWindowsSharedIgpu);else if(Ne!=="single"){const Te=(!I.chunkableStd&&fe>0?mt.convWork:0)+mt.normWork;Ee+=Te,Ze=yield ot.submitChunk(Ze,Te,fe)}}return Ne==="paced"&&(yield ot.waitBeforeFinalSubmit()),ut.__passCategories=Xe,ke.finishAndReadback({enc:Ze,schedule:we,passCategories:Xe,u4Tmp:et,ioOpts:We,paced:Ne==="paced",onProgress:lt})})}return ke.warmupIoPipelines(),ut.dispose=({keepSharedWorkspace:rt=!1}={})=>{ke.dispose();for(const We of re)We.destroy();if(re.length=0,te.resetBytes(),G.pooled)rt?G.inUse=!1:an.get(e)===G&&vn(e);else{for(const We of G.buffers)We.destroy();G.buffers.length=0}},ut.gpuBytes=()=>G.bytes+te.getBytes(),ut.__passCategories=[],ut.__coneInfo=()=>({paddedVox:O,actMiB:F/1048576}),ut.kernels="v4-int8",ut})}function xs(e){return Be(this,null,function*(){var a,f,l,u;if(!e)return;const t=()=>us>0||!!e.__isLost;if(t())return;const n=!!((f=(a=e.features)==null?void 0:a.has)!=null&&f.call(a,"shader-f16")),s=lr(e,null),r=e.limits||{},i=Math.min((l=r.maxStorageBufferBindingSize)!=null?l:1/0,(u=r.maxBufferSize)!=null?u:1/0);if(yield on(e,n?"prep_in_u8_f16":"prep_in_u8_f32",()=>ps(!0,n),"main",["read-only-storage","storage","uniform"]),t()||(yield on(e,"transpose_u8_v4",_r,"main",["read-only-storage","storage"]),t()))return;const o=[{chan:24,cs:24,nclass:0,dilations:ls,activation:"gelu_tanh",norm:"gn"},{chan:15,cs:16,nclass:0,dilations:[16,8,4,2,1],activation:"gelu_tanh",norm:"gn"},{chan:16,cs:16,nclass:0,dilations:ls,activation:"gelu_tanh",norm:"gn"}];for(const d of o){if(t())return;const g=d.cs>=16,c=g?d.cs/2:d.cs;if(U*U*c*_t*4>i||ir(e,d,null)){const b=Ar({cs:d.cs,chan:d.chan,nclass:0,clsK4:0,dilations:d.dilations,activation:d.activation,norm:d.norm,hasF16:n,subgroupMode:s,numConvs:d.dilations.length,probCfg:null});yield hr(e,d,null,n,s,null,b,{includeCls:!1,sequential:!0,shouldAbort:t})}else{const b=ar(e,null),M=Mr({cs:d.cs,chan:d.chan,nclass:0,clsK4:0,dilations:d.dilations,activation:d.activation,norm:d.norm,hasF16:n,subgroupMode:s,splitHalves:g,probCfg:null,chunkableStd:b});yield wr(e,d,null,n,s,g,null,M,{includeCls:!1,sequential:!0,shouldAbort:t})}}})}const ca=(e,t)=>Be(null,null,function*(){const n=yield fetch(t).then(s=>s.arrayBuffer());return vs(e,new Uint8Array(n))}),zr=!0,fa={load:ca,setupNet:vs,warmupV4CorePipelines:xs,supportsF32Fallback:Pr,supportsGpuNativeIO:zr},ms=Object.freeze(Object.defineProperty({__proto__:null,default:fa,releaseV4Workspace:vn,setupNet:vs,supportsF32Fallback:Pr,supportsGpuNativeIO:zr,warmupV4CorePipelines:xs},Symbol.toStringTag,{value:"Module"}));function pa(){var e;try{if(new URLSearchParams(((e=globalThis.location)==null?void 0:e.search)||"").get("webgpuKernels")==="tinygrad")return"disabled by ?webgpuKernels=tinygrad"}catch(t){}return null}const Cn=new Set(["meshnet_fast_v4","dkatlas24_int8","mindmap24_int8","model16chan18cls_int8","mindgrab_int8"]);function ma(e){return Cn.has(e)}const wn=Object.assign({"./webgpu_runners/dkatlas24_f32_runner.js":()=>dt(()=>import("./dkatlas24_f32_runner-CdBMa7VZ.js"),[],import.meta.url),"./webgpu_runners/dkatlas24_int8_v3_runner.js":()=>dt(()=>import("./dkatlas24_int8_v3_runner-CdonE2Jv.js"),__vite__mapDeps([0,1,2,3]),import.meta.url),"./webgpu_runners/dkatlas24_runner.js":()=>dt(()=>import("./dkatlas24_runner-BkVMX0Bk.js"),[],import.meta.url),"./webgpu_runners/dkatlas24_synth_f32_runner.js":()=>dt(()=>import("./dkatlas24_synth_f32_runner-Bb7lxqr0.js"),[],import.meta.url),"./webgpu_runners/dkatlas24_synth_runner.js":()=>dt(()=>import("./dkatlas24_synth_runner-5rLWbXWF.js"),[],import.meta.url),"./webgpu_runners/manual_mindgrab_runner.js":()=>dt(()=>import("./manual_mindgrab_runner-DDusGIor.js"),[],import.meta.url),"./webgpu_runners/mindgrab_runner.js":()=>dt(()=>import("./mindgrab_runner-B-UQtXej.js"),[],import.meta.url),"./webgpu_runners/mindgrab_tta_runner.js":()=>dt(()=>import("./mindgrab_tta_runner-Ct42O8D2.js"),[],import.meta.url),"./webgpu_runners/model16chan18cls_f32_runner.js":()=>dt(()=>import("./model16chan18cls_f32_runner-B5FaUMez.js"),[],import.meta.url),"./webgpu_runners/model16chan18cls_runner.js":()=>dt(()=>import("./model16chan18cls_runner-aMK3m7Gj.js"),[],import.meta.url),"./webgpu_runners/model21_104class_runner.js":()=>dt(()=>import("./model21_104class_runner-DuOJ6qrl.js"),[],import.meta.url),"./webgpu_runners/model21_f32_runner.js":()=>dt(()=>import("./model21_f32_runner-yTUV9LXd.js"),[],import.meta.url),"./webgpu_runners/model21_tta_runner.js":()=>dt(()=>import("./model21_tta_runner-e7-76trO.js"),[],import.meta.url),"./webgpu_runners/model21chan18cls_runner.js":()=>dt(()=>import("./model21chan18cls_runner-DvLOnZMy.js"),[],import.meta.url),"./webgpu_runners/model24chan18cls_gdice_prio_probability_runner.js":()=>dt(()=>import("./model24chan18cls_gdice_prio_probability_runner-BHqpfuCi.js"),[],import.meta.url),"./webgpu_runners/model24chan18cls_gdice_prio_runner.js":()=>dt(()=>import("./model24chan18cls_gdice_prio_runner-B5cN26gD.js"),[],import.meta.url),"./webgpu_runners/model30chan18cls_runner.js":()=>dt(()=>import("./model30chan18cls_runner-C2mBz0G4.js"),[],import.meta.url),"./webgpu_runners/model30chan18cls_tta_runner.js":()=>dt(()=>import("./model30chan18cls_tta_runner-v8CMqLh5.js"),[],import.meta.url),"./webgpu_runners/model30chan50cls_f32_runner.js":()=>dt(()=>import("./model30chan50cls_f32_runner-DQ53FZ3-.js"),[],import.meta.url),"./webgpu_runners/model30chan50cls_runner.js":()=>dt(()=>import("./model30chan50cls_runner-D72-rlcG.js"),[],import.meta.url),"./webgpu_runners/model30chan50cls_tta_runner.js":()=>dt(()=>import("./model30chan50cls_tta_runner-CliMlbAZ.js"),[],import.meta.url),"./webgpu_runners/model32chan18cls_runner.js":()=>dt(()=>import("./model32chan18cls_runner-cowyou29.js"),[],import.meta.url),"./webgpu_runners/model5_gw_ae_runner.js":()=>dt(()=>import("./model5_gw_ae_runner-jI57fGIB.js"),[],import.meta.url),"./webgpu_runners/model5_runner.js":()=>dt(()=>import("./model5_runner-BiUlzJBp.js"),[],import.meta.url),"./webgpu_runners/model5_tta_runner.js":()=>dt(()=>import("./model5_tta_runner-DjIMLwlR.js"),[],import.meta.url),"./webgpu_runners/model6chan3cls_runner.js":()=>dt(()=>import("./model6chan3cls_runner-wSGRZpe5.js"),[],import.meta.url),"./webgpu_runners/robust_subcortical_runner.js":()=>dt(()=>import("./robust_subcortical_runner-D74Uw6At.js"),[],import.meta.url),"./webgpu_runners/robust_subcortical_tta_runner.js":()=>dt(()=>import("./robust_subcortical_tta_runner-CkwA2dHP.js"),[],import.meta.url)});function da(){const e=Object.keys(wn).map(t=>{const n=t.match(/\/([^\/]+)_runner\.js$/);return n?n[1]:null}).filter(Boolean);return Array.from(new Set([...Cn,...e]))}function ga(e){if(Cn.has(e))return()=>Be(null,null,function*(){return ms});const t=`./webgpu_runners/${e}_runner.js`;if(wn[t])return wn[t];const n=e.toLowerCase();for(const s of Cn)if(s.toLowerCase()===n)return()=>Be(null,null,function*(){return ms});for(const[s,r]of Object.entries(wn))if(s.toLowerCase().includes(`/${n}_runner.js`))return r;for(const[s,r]of Object.entries(wn))if(s.includes(e))return r;return null}function _a(e){if(Cn.has(e))return!0;const t=`./webgpu_runners/${e}_runner.js`;if(wn[t])return!0;const n=e.toLowerCase();for(const r of Cn)if(r.toLowerCase()===n)return!0;const s=`/${n}_runner.js`;return Object.keys(wn).some(r=>r.toLowerCase().endsWith(s))}function ba(e,t){if(typeof Float16Array=="undefined")throw new Error("Float16Array unavailable: cannot cast fp32 master weights to fp16.");const n=new DataView(e.buffer,e.byteOffset,e.byteLength),s=Number(n.getBigUint64(0,!0)),r=JSON.parse(new TextDecoder("utf8").decode(e.subarray(8,8+s))),i=8+s;if(!Object.entries(r).some(([p,m])=>p!=="__metadata__"&&m.dtype==="F32"))return e;const a={},f=[];let l=0;for(const[p,m]of Object.entries(r)){if(p==="__metadata__"){a[p]=m;continue}const[b,M]=m.data_offsets,_=e.subarray(i+b,i+M);let w,v;if(m.dtype==="F32"){const S=new Float32Array(_.slice().buffer),h=new Float16Array(S);w=new Uint8Array(h.buffer),v="F16"}else w=_,v=m.dtype;a[p]={dtype:v,shape:m.shape,data_offsets:[l,l+w.byteLength]},f.push(w),l+=w.byteLength}const u=new TextEncoder().encode(JSON.stringify(a)),d=(8-u.byteLength%8)%8,g=new Uint8Array(8+u.byteLength+d+l);new DataView(g.buffer).setBigUint64(0,BigInt(u.byteLength+d),!0),g.set(u,8),g.fill(32,8+u.byteLength,8+u.byteLength+d);let c=8+u.byteLength+d;for(const p of f)g.set(p,c),c+=p.byteLength;return console.log("[WebGPU] Cast fp32 master weights -> fp16."),g}function ha(e,t){try{const n=o=>!!(e.features&&e.features.has&&e.features.has(o)),s=e.limits||{},r=typeof navigator!="undefined"&&navigator.userAgent||"unknown",i=/Safari/.test(r)&&!/Chrome|Chromium|Android/.test(r);console.log("[SAFARI-DEBUG] ===== WebGPU device capabilities ====="),console.log("[SAFARI-DEBUG] model:",(t==null?void 0:t.modelName)||(t==null?void 0:t.webgpu_runner)||"(unknown)"),console.log("[SAFARI-DEBUG] userAgent:",r,"| classified Safari:",i),console.log("[SAFARI-DEBUG] shader-f16:",n("shader-f16")),console.log("[SAFARI-DEBUG] features:",e.features?Array.from(e.features):"(none)"),console.log("[SAFARI-DEBUG] limits:",{maxBufferSize:s.maxBufferSize,maxStorageBufferBindingSize:s.maxStorageBufferBindingSize,maxComputeInvocationsPerWorkgroup:s.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:s.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:s.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:s.maxComputeWorkgroupSizeZ,maxComputeWorkgroupsPerDimension:s.maxComputeWorkgroupsPerDimension}),console.log("[SAFARI-DEBUG] BC_WEBGPU_DEBUG (logits readback):",typeof window!="undefined"&&!!window.BC_WEBGPU_DEBUG),console.log("[SAFARI-DEBUG] =======================================")}catch(n){console.warn("[SAFARI-DEBUG] capability dump failed:",n==null?void 0:n.message)}}function Cr(){return typeof requestAnimationFrame!="function"?new Promise(e=>setTimeout(e,0)):new Promise(e=>{let t=!1;const n=()=>{t||(t=!0,e())},s=setTimeout(n,25);requestAnimationFrame(()=>{clearTimeout(s),setTimeout(n,0)})})}const wa=6,va=4,_n=new Map,es=new Map,bn=new Map,pn=new WeakMap,ts=new WeakSet;function xa(e){return Be(this,null,function*(){if(!(!e||ts.has(e))){ts.add(e);try{yield xs(e)}catch(t){ts.delete(e),console.debug("[WebGPU] Background pipeline warmup skipped:",(t==null?void 0:t.message)||t)}}})}function Br(e,{keepSharedWorkspace:t=!1}={}){var n;if(e)try{if(typeof((n=e.execute)==null?void 0:n.dispose)=="function")e.execute.dispose({keepSharedWorkspace:t});else if(e.ownedBuffers)for(const s of e.ownedBuffers)s.destroy()}catch(s){console.warn("[WebGPU] Failed to dispose cached runner buffers:",s)}}function ya(e,t,n,s){var r,i,o,a,f,l,u,d,g,c,p,m,b,M,_,w,v,S,h;return JSON.stringify([e,t,n,(r=s.id)!=null?r:null,(i=s.numClasses)!=null?i:null,(o=s.outputType)!=null?o:null,(a=s.dilations)!=null?a:null,(f=s.activation)!=null?f:null,(l=s.quantize8Bit)!=null?l:null,(u=s.forceFP32)!=null?u:null,(d=s.disableF16)!=null?d:null,(g=s.disableSubgroups)!=null?g:null,(c=s.disableConeSkip)!=null?c:null,(p=s.forceLowMem128)!=null?p:null,(m=s.webgpuExecMode)!=null?m:null,(b=s.softmaxTemperature)!=null?b:null,(M=s.brainSupportTemperature)!=null?M:null,(_=s.brainSupportPower)!=null?_:null,(w=s.partialVolumeSigma)!=null?w:null,(v=s.probabilityGroups)!=null?v:null,(S=s.probabilityDisplay)!=null?S:null,(h=s.classifierBias)!=null?h:null])}function Vs(e){const t=_n.get(e);if(t)return _n.delete(e),_n.set(e,t),Promise.resolve(t);const n=es.get(e);if(n)return n;const s=Be(null,null,function*(){let r;try{const o=yield fetch(e);if(!o.ok)throw new Error(`HTTP ${o.status}: ${o.statusText}`);r=yield o.arrayBuffer()}catch(o){throw new Error(`Failed to load weights from '${e}': ${o.message}`)}const i=new Uint8Array(r);for(_n.set(e,i);_n.size>wa;){const o=_n.keys().next().value;_n.delete(o)}return i}).finally(()=>{es.delete(e)});return es.set(e,s),s}function $a(e,t,n,s){if(!n)return e;const r=bn.get(t);if(r)return bn.delete(t),bn.set(t,r),r;const i=ba(e);for(bn.set(t,i);bn.size>va;){const o=bn.keys().next().value;bn.delete(o)}return i}function ds(e,t){return Be(this,null,function*(){const n=[],s=e.createBuffer.bind(e);e.createBuffer=r=>{const i=s(r);return n.push(i),i};try{return{result:yield t(),buffers:n}}finally{e.createBuffer=s}})}function gs(e){let t=0;for(const n of e)t+=Number(n==null?void 0:n.size)||0;return t}function ns(e){for(const t of e)try{t.destroy()}catch(n){}}function Sa(e,t,n){return Be(this,null,function*(){var S,h,k,F,$,A,x;const s=(S=pa())!=null?S:No(e,t);let r=t.webgpu_runner,i=t.webgpu_safetensor;const o=!!(e.features&&e.features.has&&e.features.has("shader-f16"));let a=!1;s&&(t.forceFP32?(a=!0,console.log("[WebGPU] forceFP32: using fp32 runner and weights.")):!o&&_a(`${r}_f32`)&&(a=!0,console.log("[WebGPU] shader-f16 not supported on this device -> auto-selecting fp32 runner and weights.")),a&&(r=`${r}_f32`,i=i.replace(".safetensors","_f32.safetensors")),t.enableTTA&&t.webgpuTTArunner&&(console.log("[WebGPU] TTA Enabled: Switching to TTA runner and weights."),r=`${r}_tta`,i=i.replace(".safetensors","_tta.safetensors")));const l=ya(s?"runner":"native",s?r:"webgpu_native",i,t),u=pn.get(e);if(u&&u.runnerKey===l)return Ct(bt({},u),{cacheHit:!0});const d=!!(s&&ma(r));if(n("Loading model…",.1),u&&(pn.delete(e),Br(u,{keepSharedWorkspace:d})),d||vn(e),ha(e,t),s)console.log(`[WebGPU-native] not used for ${t.modelName||t.webgpu_runner}: ${s}`);else{let C=[];try{const z=yield Vs(i),I=yield ds(e,()=>Ho(e,z,n,t));C=I.buffers;const E=I.result;E.kernels="hand-written";const T={runnerKey:l,runnerName:"webgpu_native",weightsPath:i,execute:E,supportsGpuNativeIO:!1,ownedBuffers:C,gpuBytes:gs(C)};return pn.set(e,T),console.log("[WebGPU-native] Using hand-written WebGPU kernels."),Ct(bt({},T),{cacheHit:!1})}catch(z){ns(C),console.warn("[WebGPU-native] falling back to the tinygrad runner:",(z==null?void 0:z.message)||z)}}const g=d?()=>Be(null,null,function*(){return ms}):ga(r);if(!g){const C=da();throw new Error(`Runner '${r}' not found. Available runners: ${C.join(", ")||"none"}. Looking in: ./webgpu_runners/`)}const[c,p]=yield Promise.all([g(),Vs(i)]);if(!c.setupNet&&!((h=c.default)!=null&&h.setupNet))throw new Error(`Runner module '${r}' doesn't export 'setupNet'. Exported keys: ${Object.keys(c).join(", ")}`);const m=!!((F=c.supportsF32Fallback)!=null?F:(k=c.default)!=null&&k.supportsF32Fallback),b=!!((A=c.supportsGpuNativeIO)!=null?A:($=c.default)!=null&&$.supportsGpuNativeIO);!a&&!o&&!m&&console.warn(`[WebGPU] shader-f16 not supported and no fp32 runner ('${r}_f32') available; the fp16 runner will likely fail and fall back to WebGL2.`);const _=$a(p,i,!a&&!m),w=c.setupNet||((x=c.default)==null?void 0:x.setupNet);let v=[];try{const C=yield ds(e,()=>w(e,_,n,t));v=C.buffers;const z=C.result;if(typeof z!="function")throw ns(v),new Error(`setupNet for '${r}' didn't return a function. Returned type: ${typeof z}`);const I={runnerKey:l,runnerName:r,weightsPath:i,execute:z,supportsGpuNativeIO:b,ownedBuffers:typeof z.dispose=="function"?null:v,gpuBytes:typeof z.gpuBytes=="function"?z.gpuBytes():gs(v)};return pn.set(e,I),Ct(bt({},I),{cacheHit:!1})}catch(C){throw d&&vn(e),ns(v),new Error(`Failed to setup network for '${r}': ${C.message}`)}})}function ka(e,t,n,s,r,i,o){return Be(this,null,function*(){var g,c,p,m;const a=n.outputType==="probability";console.log("Starting WebGPU inference..."),o(a?"Starting tissue estimation…":"Starting segmentation…",0);const f=ho(n,bo.WEBGPU);f.isModelFullVol=!0;let l=!1,u=null;const d=$o(n);try{if(!e)throw new Error("WebGPU device is required but not provided");if(!(n!=null&&n.webgpu_runner))throw new Error("Model entry must specify webgpu_runner property");if(!(n!=null&&n.webgpu_safetensor))throw new Error("Model entry must specify webgpu_safetensor property");const b=n.webgpuStorageSize||335544320;if(e.limits){const P=re=>(re/1048576).toFixed(0),Y=(g=e.limits.maxStorageBufferBindingSize)!=null?g:1/0,D=(c=e.limits.maxBufferSize)!=null?c:1/0;if(Y<b||D<b){const re=P(Math.min(Y,D)),te=P(b),Q=`[WebGPU] Device buffer limit (${re} MB) is below the ${te} MB this model needs - using WebGL2 fallback.`;throw console.warn(Q),new Error(Q)}}e.pushErrorScope("out-of-memory"),l=!0;const M=performance.now();u=yield Sa(e,n,o);const _=((performance.now()-M)/1e3).toFixed(4),w=performance.now();o("Preparing volume…",.25);const v=[256,256,256],S=u.supportsGpuNativeIO&&!!n.enableTranspose&&!n.inputPermutation,h=u.supportsGpuNativeIO&&!!n.enableTranspose&&!n.outputPermutation;let k,F;if(n.enableQuantileNorm){const{qmin:P,qmax:Y}=fo(r);k=P,F=Y-P}else{const{min:P,max:Y}=po(r);k=P,F=Y-P}const $=F===0?1:F;let A=null,x,C=v;if(S)d&&(A=Ls(r,k,$)),x=r;else{const P=Ls(r,k,$);if(d&&(A=P),n.inputPermutation){console.log(`[WebGPU] Permuting Input: ${n.inputPermutation}`);const Y=n.inputPermutation;C=[v[Y[0]],v[Y[1]],v[Y[2]]],x=Sn(P,v,Y)}else n.enableTranspose?x=Sn(P,v,[2,1,0]):x=P}const z=((performance.now()-w)/1e3).toFixed(4);o("",.3),o(a?"Estimating tissue maps…":"Segmenting…",.3),yield Cr();const I=performance.now(),E=u.supportsGpuNativeIO?P=>{const Y=Math.max(0,Math.min(1,Number(P)||0));o("",.3+.6*Y)}:void 0,T=S||h||E?{gpuNativeInput:S,gpuNativeOutput:h,normOffset:k,normRange:$,onProgress:E}:void 0,B=yield ds(e,()=>T?u.execute(x,T):u.execute(x)),O=B.result;if(typeof u.execute.gpuBytes=="function"){u.gpuBytes=u.execute.gpuBytes();const P=pn.get(e);P&&P.runnerKey===u.runnerKey&&(P.gpuBytes=u.gpuBytes)}else if(B.buffers.length>0){u.gpuBytes=(u.gpuBytes||0)+gs(B.buffers),u.ownedBuffers&&u.ownedBuffers.push(...B.buffers);const P=pn.get(e);P&&P.runnerKey===u.runnerKey&&(P.gpuBytes=u.gpuBytes)}l=!1;const ae=yield e.popErrorScope();if(ae)throw new Error(`WebGPU out of memory (${ae.message||"allocation failed"}) - falling back to WebGL2.`);if(!O||!Array.isArray(O))throw new Error(`Inference didn't return expected array format. Returned: ${typeof O}`);const ce=((performance.now()-I)/1e3).toFixed(4),V=(u.gpuBytes||0)/1048576;f.GPU_Memory_MiB=Math.round(V),f.WebGPU_Kernels=u.execute.kernels||"tinygrad";const W=V>=1024?`${(V/1024).toFixed(2)} GiB`:`${Math.round(V)} MiB`;console.log(`WebGPU inference took ${ce}s (${f.WebGPU_Kernels} kernels, ${W} GPU memory).`),o("Finishing up…",.9),console.log("Inference result shapes:",O.map(P=>P==null?void 0:P.length));const j=n.outputPermutation||(n.enableTranspose?[2,1,0]:null),ee=performance.now();let G;const ie={};if(d){if(O.length!==3)throw new Error(`CAT-lite expected three tissue maps; received ${O.length}.`);o("Refining tissue fractions…",.92),G=yield Po(O,A,n,f,h?Y=>Y:Y=>j?Sn(Y,C,j):Y instanceof Float32Array?Y:Float32Array.from(Y))}else if(a){const P=O[0];G=h?P:j?Sn(P,C,j):P instanceof Float32Array?P:Float32Array.from(P),Us(G,!0,"probability")}else{const P=O[0];let Y;h?Y=P instanceof Uint8Array?P:new Uint8Array(P):j?Y=mo(P,C,j):Y=P instanceof Uint8Array?P:new Uint8Array(P),Us(Y,!1,"segmentation"),G=yield _o(Y,r,n,t,ie,v)}const le=((performance.now()-ee)/1e3).toFixed(4),Ae=performance.now();yield i(G,t,n,ie.mask);const pe=((performance.now()-Ae)/1e3).toFixed(4);if(a)d||(f.Output_Type="Continuous tissue probability",f.Tissue=n.probabilityDisplay||"grayMatter",f.Softmax_Temperature=(p=n.softmaxTemperature)!=null?p:1);else{const P=go(G),Y=n.numClasses||P;wo(f,Y,P)}vo(f,ce,le,{Preprocess_t:z,Setup_t:_,Display_t:pe}),console.log(`[Timing] WebGPU | ${n.modelName} | setup=${(Number(_)*1e3).toFixed(1)}ms prep=${(Number(z)*1e3).toFixed(1)}ms infer=${(Number(ce)*1e3).toFixed(1)}ms post=${(Number(le)*1e3).toFixed(1)}ms disp=${(Number(pe)*1e3).toFixed(1)}ms cache=${u.cacheHit?"hit":"miss"}`);const Me=`${Number(ce).toFixed(1)} s`,H=a?`Tissue maps finished (${Me})`:`Segmentation finished (${Me})`,ne=!a&&((m=n.numClasses)!=null?m:0)>2?t!=null&&t.isTouchPrimary?" · Open Stats to isolate a region":" · Option/Alt-click a region to isolate":"";o(`${H}${ne}`,1,"",f)}catch(b){if(console.error("WebGPU Inference Error:",b),u&&(pn.get(e)===u&&pn.delete(e),Br(u),u=null),l&&e){l=!1;try{yield e.popErrorScope()}catch(_){}}let M=b.message;throw b.message.includes("not found")?M+=". Check that the runner file exists and the name matches.":b.message.includes("fetch")?M+=". Check network connection and file paths.":b.message.includes("binding size")&&(M+=". GPU memory limit exceeded."),xo(f,M,"WebGPU inference failed"),o("",-1,`WebGPU Error: ${M}`,f),b}})}const Ma={batchSize:1,numOfChan:1,isColorEnable:!0,isAutoColors:!0,bgLabelValue:0,drawBoundingVolume:!1,isGPU:!0,isBrainCropMaskBased:!0,showPhase1Output:!1,isPostProcessEnable:!0,fillSuppressedWithNeighborLabel:!1,diagnoseEnclosedComponents:!1,isContoursViewEnable:!1,browserArrayBufferMaxZDim:30,telemetryFlag:!1,chartXaxisStepPercent:10,uiSampleName:"BC_UI_Sample",atlasSelectedColorTable:"Fire"};function Hs(e,t=!0){if(!e)return e;const r=e,{turbo:n}=r,s=Ps(r,["turbo"]);return!t||!n?s:Ct(bt(bt({},s),n),{isTurboActive:!0})}const hn=[{id:2,type:"Brain_Extraction",path:"/models/mindgrab/model.json",modelName:"🪓🧠 Omnimodal Skull Stripping",webgpu_safetensor:"./models/mindgrab/model.safetensors",webgpu_runner:"mindgrab",classifierBias:[1.525439739227295,-1.5258055925369263],webgpuTTArunner:!1,forceFP32:!1,webgpuStorageSize:503316480,numClasses:2,turbo:{webgpu_runner:"mindgrab_int8",quantize8Bit:!0,forceFP32:!1,webgpuTTArunner:!1,webgpuStorageSize:83886080,warning:"Runs via the 8-bit V4 WebGPU engine (~3.7s on M1 WebGPU, auto-scaling from 160 MiB down to 80 MiB max buffer on mobile) or native WebGL2."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,isPostProcessEnable:!0,enableCrop:!0,cropPadding:20,autoThreshold:.5,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!1,textureSize:0,warning:"This model may need dedicated graphics card.  For more info please check with Browser Resources <i class='fa fa-cogs'></i>.",inferenceDelay:100,description:"Omnimodal skull stripping (MindGrab) delivering high-accuracy brain extraction across T1, T2, FLAIR, DWI, EPI, MRA, PDw, qT1, CT, and PET via the 8-bit V4 WebGPU engine (80 MiB mobile / 160 MiB desktop max buffer) or native WebGL2."},{id:21,type:"Atlas",path:"/models/model24chan18cls_gdice_prio/model.json",modelName:"🪓 Subcortical + Tissue",colormapPath:"./models/model24chan18cls_gdice_prio/colormap.json",webgpu_safetensor:"./models/model24chan18cls_gdice_prio/model.safetensors",webgpu_runner:"model24chan18cls_gdice_prio",forceFP32:!1,webgpuStorageSize:1610612736,numClasses:18,turbo:{webgpu_runner:"mindmap24_int8",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:125829120,warning:"Runs via the 8-bit V4 WebGPU engine (~3.0s on M1 WebGPU, auto-scaling from 240 MiB down to 120 MiB max buffer on mobile) or native WebGL2."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,cropPadding:20,autoThreshold:0,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!0,textureSize:0,warning:"Runs via the 8-bit V4 WebGPU engine (120–240 MiB max buffer) or native WebGL2.",inferenceDelay:100,description:"Primary T1w brain parcellation into 17 regions (gray and white matter plus subcortical structures) via a 24-channel gridding-free MeshNet (MindMap v3.5 Unified: sharp sulci, intact occipital ribbon, and clinical slice/noise/bias robustness), accelerated by the 8-bit V4 WebGPU engine (120 MiB mobile / 240 MiB desktop max buffer)."},{id:23,type:"Probability_Map",path:"/models/model24chan18cls_gdice_prio/model.json",modelName:"⅔🧠 Tissue fraction maps (GM/WM/CSF)",webgpu_safetensor:"./models/model24chan18cls_gdice_prio/model.safetensors",webgpu_runner:"model24chan18cls_gdice_prio_probability",forceFP32:!1,webgpuStorageSize:1610612736,numClasses:18,turbo:{webgpu_runner:"mindmap24_int8",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:125829120,warning:"Experimental neural-assisted partial-volume estimate (~3.5s on M1 WebGPU, auto-scaling from 240 MiB down to 120 MiB max buffer on mobile)."},outputType:"probability",probabilityPostprocess:"cat-lite",softmaxTemperature:2,brainSupportTemperature:1,brainSupportPower:1,partialVolumeSigma:.65,probabilityDisplay:"grayMatter",probabilityTissues:[{name:"gm",tint:[255,64,64]},{name:"wm",tint:[255,255,255]},{name:"csf",tint:[64,128,255]}],probabilityOverlayFloor:128,probabilityOverlayAlpha:48,probabilityDisplayMin:.03,probabilityUnderlayOpacity:.1,probabilityGroups:{grayMatter:[2,6,7,8,9,10,14,15,16,17],whiteMatter:[1,5],csf:[3,4,11,12]},catLitePurePriorPower:3,catLitePriorStrength:.8,catLiteIntensityStrength:.75,catLiteMixelPrior:.35,catLiteCsfWmMixelPrior:6,catLiteSpatialWeight:.25,catLiteMinSupport:.03,catLiteSigmaFloor:.025,catLiteBiasBlockSize:16,catLiteBiasSmoothPasses:3,preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,enableQuantileNorm:!0,enableFovRecenter:!1,enableFovInflate:!1,warning:"Experimental neural-assisted mixed-class partial-volume estimate, not CAT12.",inferenceDelay:100,description:"CAT-inspired GM/WM/CSF partial-volume estimate. The 24-channel model supplies joint GM/WM/CSF priors; normalized T1 intensity, a coarse local bias estimate, spatial regularization, and explicit GM-CSF/GM-WM mixture classes produce continuous GM, WM and CSF fractions. Experimental and not a CAT12 result."},{id:5,type:"Atlas",path:"/models/model24chan104cls_v3_repbn/model.json",modelName:"🪓🔪 Desikan-Killiany Atlas",colormapPath:"./models/model24chan104cls_v3_repbn/colormap.json",webgpu_safetensor:"./models/model24chan104cls_v3_repbn/model.safetensors",webgpu_runner:"dkatlas24_synth",forceFP32:!1,webgpuStorageSize:1610612736,numClasses:104,turbo:{webgpu_runner:"dkatlas24_int8",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:125829120,warning:"Runs via the 8-bit V4 WebGPU engine (~3.0s on M1 WebGPU, auto-scaling from 240 MiB down to 120 MiB max buffer on mobile) or native WebGL2."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,cropPadding:20,autoThreshold:0,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!0,textureSize:0,warning:"Runs via the 8-bit V4 WebGPU engine (120–240 MiB max buffer) or native WebGL2.",inferenceDelay:100,description:"Primary 104-region Desikan-Killiany atlas parcellation (cortical + subcortical + 5-part corpus callosum) for research and clinical T1-weighted MRI, running via the 8-bit V4 WebGPU engine (~3.0s on M1, 120 MiB mobile / 240 MiB desktop max buffer) or native WebGL2."},{id:4,type:"Atlas",path:"/models/model24chan50cls/model.json",modelName:"🪓🔪 Desikan-Killiany 50",colormapPath:"./models/model24chan50cls/colormap.json",webgpu_safetensor:"./models/model24chan50cls/model.safetensors",webgpu_runner:"meshnet_fast_v4",forceFP32:!1,webgpuStorageSize:805306368,numClasses:50,turbo:{webgpu_runner:"meshnet_fast_v4",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:125829120,warning:"Runs via the 8-bit V4 WebGPU engine (~3.0s on M1 WebGPU, auto-scaling from 240 MiB down to 120 MiB max buffer on mobile) or native WebGL2."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,cropPadding:20,autoThreshold:0,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!0,textureSize:0,warning:"Runs via the 8-bit V4 WebGPU engine (120–240 MiB max buffer) or native WebGL2.",inferenceDelay:100,description:"Bilateral 50-region Desikan-Killiany cortical + subcortical + corpus callosum parcellation with built-in skull stripping (MindSnap-50 v3.5), running via the 8-bit V4 WebGPU engine (~3.0s on M1, 120 MiB mobile / 240 MiB desktop max buffer) or native WebGL2."},{id:6,type:"Divider",modelName:"-----------------",path:null},{id:3,type:"Atlas",path:"/models/model16chan18cls/model.json",modelName:"⚡🪓 Subcortical + Tissue",colormapPath:"./models/model16chan18cls/colormap.json",webgpu_safetensor:"./models/model16chan18cls/model.safetensors",webgpu_runner:"model16chan18cls",forceFP32:!1,webgpuStorageSize:536870912,numClasses:18,turbo:{webgpu_runner:"model16chan18cls_int8",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:83886080,warning:"Ultra-fast 16-channel MindMap v3.5 (~1.7s on M1 WebGPU, auto-scaling from 160 MiB down to 80 MiB max buffer on mobile)."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,cropPadding:20,autoThreshold:0,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!0,textureSize:0,warning:"Runs via the 8-bit V4 WebGPU engine (80–160 MiB max buffer) or native WebGL2.",inferenceDelay:100,description:"Ultra-fast 17-region brain parcellation (gray and white matter plus subcortical structures) via our 84K-parameter 16-channel MeshNet (MindMap-16ch v3.5), running in ~1.7s on M1 WebGPU with an 80 MiB mobile / 160 MiB desktop buffer footprint."},{id:14,type:"Atlas",path:"/models/model24chan104cls_synth/model.json",modelName:"🪓🔪 Desikan-Killiany (lesion scans)",colormapPath:"./models/model24chan104cls_synth/colormap.json",webgpu_safetensor:"./models/model24chan104cls_synth/model.safetensors",webgpu_runner:"dkatlas24_synth",forceFP32:!1,webgpuStorageSize:1610612736,numClasses:104,turbo:{webgpu_runner:"dkatlas24_int8",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:125829120,warning:"Runs via the 8-bit V4 WebGPU engine (~3.0s on M1 WebGPU, auto-scaling from 240 MiB down to 120 MiB max buffer on mobile) or native WebGL2."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,cropPadding:20,autoThreshold:0,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!0,textureSize:0,warning:"Runs via the 8-bit V4 WebGPU engine (120–240 MiB max buffer) or native WebGL2.",inferenceDelay:100,description:"Desikan-Killiany 104-region parcellation variant retained for scans with large focal lesions, running via the 8-bit V4 WebGPU engine (120–240 MiB max buffer) or native WebGL2."}];function ys(){return Be(this,null,function*(){return navigator.userAgent.indexOf("OPR/")>-1?"Opera":navigator.userAgent.indexOf("Edg/")>-1?"Edge":navigator.userAgent.indexOf("Falkon/")>-1?"Falkon":navigator.userAgent.indexOf("Chrome/")>-1?"Chrome":navigator.userAgent.indexOf("Firefox/")>-1?"Firefox":navigator.userAgent.indexOf("Safari/")>-1?"Safari":navigator.userAgent.indexOf("MSIE/")>-1||navigator.userAgent.indexOf("rv:")>-1?"IExplorer":"Unknown"})}function Aa(){return Be(this,null,function*(){return navigator.userAgent.indexOf("OPR/")>-1?parseInt(navigator.userAgent.split("OPR/")[1]):navigator.userAgent.indexOf("Edg/")>-1?parseInt(navigator.userAgent.split("Edg/")[1]):navigator.userAgent.indexOf("Falkon/")>-1?parseInt(navigator.userAgent.split("Falkon/")[1]):navigator.userAgent.indexOf("Chrome/")>-1?parseInt(navigator.userAgent.split("Chrome/")[1]):navigator.userAgent.indexOf("Firefox/")>-1?parseInt(navigator.userAgent.split("Firefox/")[1]):navigator.userAgent.indexOf("Safari/")>-1?parseInt(navigator.userAgent.split("Safari/")[1]):navigator.userAgent.indexOf("MSIE/")>-1||navigator.userAgent.indexOf("rv:")>-1?parseInt(navigator.userAgent.split("MSIE/")[1]):1/0})}function Pa(){return Be(this,null,function*(){return navigator.userAgent.indexOf("Win")>-1?"Windows":navigator.userAgent.indexOf("Mac")>-1?"MacOS":navigator.userAgent.indexOf("Linux")>-1?"Linux":navigator.userAgent.indexOf("UNIX")>-1?"UNIX":"Unknown"})}function za(e){return Be(this,null,function*(){return e?(console.log("WebGl2 is enabled"),!0):(console.log(typeof WebGL2RenderingContext!="undefined"?"WebGL2 may be disabled. Please try updating video card drivers":"WebGL2 is not supported"),!1)})}function Ca(e){return Be(this,null,function*(){let t;if(e&&(t=e.getExtension("WEBGL_debug_renderer_info"),t)){const n=e.getParameter(t.UNMASKED_VENDOR_WEBGL);return n.indexOf("(")>-1&&n.indexOf(")")>-1?n.substring(n.indexOf("(")+1,n.indexOf(")")):n}return null})}function Ba(e){return Be(this,null,function*(){if(e){const t=e.getExtension("WEBGL_debug_renderer_info");return t?e.getParameter(t.UNMASKED_VENDOR_WEBGL):null}else return null})}function Fa(e){return Be(this,null,function*(){if(e){if(ys()==="Firefox")return e.getParameter(e.RENDERER);const t=e.getExtension("WEBGL_debug_renderer_info");return t?e.getParameter(t.UNMASKED_RENDERER_WEBGL):null}else return null})}function La(e){return Be(this,null,function*(){let t;if(e){if(ys()==="Firefox")return e.getParameter(e.RENDERER);if(t=e.getExtension("WEBGL_debug_renderer_info"),t){let n=e.getParameter(t.UNMASKED_RENDERER_WEBGL);return n.indexOf("(")>-1&&n.indexOf(")")>-1&&n.indexOf("(R)")===-1&&(n=n.substring(n.indexOf("(")+1,n.indexOf(")")),n.split(",").length===3)?n.split(",")[1].trim():n}}return null})}function Ua(){return Be(this,null,function*(){return navigator.hardwareConcurrency})}function Wa(){return Be(this,null,function*(){return/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)})}function qa(e,t=null){return Be(this,null,function*(){const n=new Date;if(e.isModelFullVol?e.Brainchop_Ver="FullVolume":e.Brainchop_Ver="SubVolumes",e.Total_t=(Date.now()-e.startTime)/1e3,delete e.startTime,e.Date=parseInt(n.getMonth()+1)+"/"+n.getDate()+"/"+n.getFullYear(),e.Browser=yield ys(),e.Browser_Ver=yield Aa(),e.OS=yield Pa(),e.WebGL2=yield za(t),e.GPU_Vendor=yield Ca(t),e.GPU_Card=yield La(t),e.GPU_Vendor_Full=yield Ba(t),e.GPU_Card_Full=yield Fa(t),e.CPU_Cores=yield Ua(),e.Which_Brainchop="latest",(yield Wa())&&(e.Heap_Size_MB=window.performance.memory.totalJSHeapSize/(1024*1024).toFixed(2),e.Used_Heap_MB=window.performance.memory.usedJSHeapSize/(1024*1024).toFixed(2),e.Heap_Limit_MB=window.performance.memory.jsHeapSizeLimit/(1024*1024).toFixed(2)),t){console.log("MAX_TEXTURE_SIZE :",t.getParameter(t.MAX_TEXTURE_SIZE)),console.log("MAX_RENDERBUFFER_SIZE :",t.getParameter(t.MAX_RENDERBUFFER_SIZE));const s=t.getExtension("WEBGL_debug_renderer_info");console.log("VENDOR WEBGL:",t.getParameter(s.UNMASKED_VENDOR_WEBGL)),e.Texture_Size=t.getParameter(t.MAX_TEXTURE_SIZE)}else e.Texture_Size=null;return e})}const ss={bankssts:1,caudalanteriorcingulate:2,caudalmiddlefrontal:3,cuneus:5,entorhinal:6,fusiform:7,inferiorparietal:8,inferiortemporal:9,isthmuscingulate:10,lateraloccipital:11,lateralorbitofrontal:12,lingual:13,medialorbitofrontal:14,middletemporal:15,parahippocampal:16,paracentral:17,parsopercularis:18,parsorbitalis:19,parstriangularis:20,pericalcarine:21,postcentral:22,posteriorcingulate:23,precentral:24,precuneus:25,rostralanteriorcingulate:26,rostralmiddlefrontal:27,superiorfrontal:28,superiorparietal:29,superiortemporal:30,supramarginal:31,frontalpole:32,temporalpole:33,transversetemporal:34,insula:35},Ra=new Set(["BG","Unknown","background","Background"]),js={"Left-Cerebral-White-Matter":2,"Right-Cerebral-White-Matter":41,"Left-Cerebral-Cortex":3,"Right-Cerebral-Cortex":42,"Left-Lateral-Ventricle":4,"Right-Lateral-Ventricle":43,"Left-Inf-Lat-Vent":5,"Right-Inf-Lat-Vent":44,"Left-Cerebellum-White-Matter":7,"Right-Cerebellum-White-Matter":46,"Left-Cerebellum-Cortex":8,"Right-Cerebellum-Cortex":47,"Left-Thalamus":10,"Left-Thalamus-Proper":10,"Left-Thalamus-Proper*":10,"Right-Thalamus":49,"Right-Thalamus-Proper":49,"Right-Thalamus-Proper*":49,"Left-Caudate":11,"Right-Caudate":50,"Left-Putamen":12,"Right-Putamen":51,"Left-Pallidum":13,"Right-Pallidum":52,"Left-Hippocampus":17,"Right-Hippocampus":53,"Left-Amygdala":18,"Right-Amygdala":54,"Left-Accumbens":26,"Left-Accumbens-area":26,"Right-Accumbens":58,"Right-Accumbens-area":58,"Left-VentralDC":28,"Right-VentralDC":60,"3rd-Ventricle":14,"4th-Ventricle":15,"Brain-Stem":16,CSF:24,CC_Posterior:251,CC_Mid_Posterior:252,CC_Central:253,CC_Mid_Anterior:254,CC_Anterior:255,"Cerebral-White-Matter":2,"White Matter":2,"Cerebral-Cortex":3,"Grey Matter":3,"Gray Matter":3,"Lateral-Ventricle":4,Ventricle:4,"Inferior-Lateral-Ventricle":5,"Cerebellum-White-Matter":7,"Cerebellum-Cortex":8,Cerebellum:8,Thalamus:10,"Thalamus-Proper":10,"Thalamus-Proper*":10,Caudate:11,Putamen:12,Pallidum:13,Hippocampus:17,Amygdala:18,"Accumbens-area":26,Accumbens:26,VentralDC:28,"Corpus callosum":253,Corpus_Callosum:253};function Ia(e){if(typeof e!="string")return null;const t=e.trim();if(Ra.has(t))return 0;if(Object.hasOwn(js,t))return js[t];if(t.startsWith("ctx-lh-")){const n=ss[t.slice(7)];return n?1e3+n:null}if(t.startsWith("ctx-rh-")){const n=ss[t.slice(7)];return n?2e3+n:null}if(t.startsWith("ctx-")){const n=ss[t.slice(4)];return n?1e3+n:null}return null}function Tn(e){if(!Array.isArray(e)||e.length<3)return null;const t=new Int16Array(e.length);for(let n=0;n<e.length;n++){const s=Ia(e[n]);if(s===null||(n===0?s!==0:s<=0))return null;t[n]=s}return t}function Ga(e,t){const n=e.length,s=new Int16Array(n),r=t.length;let i=0;for(let o=0;o<n;o++){const a=e[o],f=a>=0&&a<r?t[a]:a;s[o]=f,f>i&&(i=f)}return{img:s,maxLabel:i}}const Ea=110,Ta=10;function $s(e){var t;if(e){e.pan2Dxyzmm=Float32Array.from([0,0,0,1]),e.renderPan=[0,0],e.azimuth=Ea,e.elevation=Ta,e.scaleMultiplier=1;const n=(t=e.volumes)==null?void 0:t[0];n&&Number.isFinite(n.robustMin)&&Number.isFinite(n.robustMax)&&n.robustMax>n.robustMin&&(n.calMin!==n.robustMin||n.calMax!==n.robustMax)&&(n.calMin=n.robustMin,n.calMax=n.robustMax,e.updateGLVolume())}Oa()}function Oa(){const e=document.querySelector('meta[name="viewport"]');if(!e)return;const t=e.getAttribute("content")||"width=device-width, initial-scale=1.0";/maximum-scale/.test(t)||(e.setAttribute("content",`${t}, maximum-scale=1, user-scalable=no`),requestAnimationFrame(()=>requestAnimationFrame(()=>e.setAttribute("content",t))))}function Na(e){const t=n=>n.preventDefault();for(const n of["gesturestart","gesturechange","gestureend"])document.addEventListener(n,t,{passive:!1});document.addEventListener("touchmove",n=>{n.touches.length>1&&n.target!==e&&n.preventDefault()},{passive:!1})}function Da(e){return Na((e==null?void 0:e.canvas)||null),{resetView:()=>$s(e)}}const Va=720,Ha=860;function ja(){var r,i,o,a,f,l;const e=window.visualViewport,t=Math.round((i=(r=e==null?void 0:e.width)!=null?r:window.innerWidth)!=null?i:0),n=Math.round((a=(o=e==null?void 0:e.height)!=null?o:window.innerHeight)!=null?a:0);return t>0&&t<=Va?!0:!!((l=(f=window.matchMedia)==null?void 0:f.call(window,"(pointer: coarse)"))==null?void 0:l.matches)&&Math.min(t,n)<=Ha}const Pn=[{id:"multi",label:"All",title:"All planes",type:Ln.MULTIPLANAR},{id:"axial",label:"A",title:"Axial only",type:Ln.AXIAL},{id:"coronal",label:"C",title:"Coronal only",type:Ln.CORONAL},{id:"sagittal",label:"S",title:"Sagittal only",type:Ln.SAGITTAL},{id:"render",label:"3D",title:"3D render only",type:Ln.RENDER}];function Fr(e,t,n){const s=Pn.find(r=>r.id===n)||Pn[0];e.sliceType=s.type,t.querySelectorAll("button").forEach(r=>r.classList.toggle("active",r.dataset.pane===s.id))}function Xa(e,t){const n=document.createElement("div");n.id="paneSwitcher",n.className="pane-switcher",n.setAttribute("role","group"),n.setAttribute("aria-label","Visible planes");for(const r of Pn){const i=document.createElement("button");i.type="button",i.dataset.pane=r.id,i.textContent=r.label,i.title=r.title,i.setAttribute("aria-label",r.title),i.addEventListener("click",()=>Fr(e,n,r.id)),n.appendChild(i)}const s=document.createElement("button");return s.type="button",s.className="pane-reset",s.textContent="⟲",s.title="Reset zoom and pan",s.setAttribute("aria-label","Reset zoom and pan"),s.addEventListener("click",()=>$s(e)),n.appendChild(s),t.appendChild(n),n}function Ya(e){var r;const t=document.getElementById("canvas-container")||document.body,n=Xa(e,t);n.querySelector('button[data-pane="multi"]').classList.add("active"),window.addEventListener("keydown",i=>{if(i.key!=="v"&&i.key!=="V"||i.altKey||i.ctrlKey||i.metaKey||i.repeat)return;const o=i.target;if(o instanceof HTMLElement&&(o.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(o.tagName)))return;i.preventDefault(),i.stopImmediatePropagation();const a=Pn.findIndex(f=>f.type===e.sliceType);Fr(e,n,Pn[(a+1)%Pn.length].id)},!0);const s=()=>document.body.classList.toggle("nv-narrow",ja());window.addEventListener("resize",s),window.addEventListener("orientationchange",s),(r=window.visualViewport)==null||r.addEventListener("resize",s),s()}function Lr(){if(typeof crypto!="undefined"){if(typeof crypto.randomUUID=="function")return crypto.randomUUID();if(typeof crypto.getRandomValues=="function"){const e=new Uint8Array(16);crypto.getRandomValues(e),e[6]=e[6]&15|64,e[8]=e[8]&63|128;const t=Array.from(e,n=>n.toString(16).padStart(2,"0")).join("");return`${t.slice(0,8)}-${t.slice(8,12)}-${t.slice(12,16)}-${t.slice(16,20)}-${t.slice(20)}`}}return`vol-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}function Ka(){var e,t,n,s;return!!((t=(e=window.matchMedia)==null?void 0:e.call(window,"(pointer: coarse)"))!=null&&t.matches&&!((s=(n=window.matchMedia)==null?void 0:n.call(window,"(pointer: fine)"))!=null&&s.matches))}function Xs(e,t=e.img.slice(),n=e.name){const s=Object.assign(Object.create(Object.getPrototypeOf(e.hdr)),e.hdr),r=Or(s,t,n);return r.id=Lr(),r}const Yt=e=>e&&typeof e.slice=="function"?e.slice():e;function rs(e,t,n=e.name,s={},r={}){var f;const i=Object.assign(Object.create(Object.getPrototypeOf(e.hdr)),e.hdr,bt({dims:[...e.hdr.dims],pixDims:[...e.hdr.pixDims],affine:e.hdr.affine.map(l=>[...l])},s)),o=e.dims?e.dims.slice(0,4):i.dims.slice(0,4),a=(f=e.nVox3D)!=null?f:o[1]*o[2]*o[3];return bt({img:t,hdr:i,originalAffine:i.affine.map(l=>[...l]),dims:o,nVox3D:a,extentsMin:Yt(e.extentsMin),extentsMax:Yt(e.extentsMax),mm000:Yt(e.mm000),mm100:Yt(e.mm100),mm010:Yt(e.mm010),mm001:Yt(e.mm001),dimsRAS:e.dimsRAS?[...e.dimsRAS]:void 0,pixDimsRAS:e.pixDimsRAS?[...e.pixDimsRAS]:void 0,permRAS:e.permRAS?[...e.permRAS]:void 0,toRAS:Yt(e.toRAS),toRASvox:Yt(e.toRASvox),matRAS:Yt(e.matRAS),obliqueRAS:Yt(e.obliqueRAS),oblique_angle:e.oblique_angle,frac2mm:Yt(e.frac2mm),frac2mmOrtho:Yt(e.frac2mmOrtho),img2RASstep:e.img2RASstep?[...e.img2RASstep]:void 0,img2RASstart:e.img2RASstart?[...e.img2RASstart]:void 0,volScale:e.volScale?[...e.volScale]:void 0,name:n,id:Lr(),calMin:0,calMax:255,robustMin:0,robustMax:255,globalMin:0,globalMax:255,frame4D:0,nFrame4D:1,nTotalFrame4D:1,isLegendVisible:!1},r)}function Za(e){let t=256,n=-1,s=0;for(let l=0;l<256;l++){const u=e[l];u>0&&(l<t&&(t=l),n=l,l!==0&&(s+=u))}if(t>n)return{calMin:0,calMax:255,robustMin:0,robustMax:255,globalMin:0,globalMax:255};if(t===n)return{calMin:t,calMax:n,robustMin:t,robustMax:n,globalMin:t,globalMax:n};const r=Math.round(s*.02),i=Math.round(s*.02);let o=0,a=t;for(let l=t;l<=n;l++){if(l===0&&e[0]>r){a=0;break}if(o+=e[l],o>=r){a=l;break}}o=0;let f=n;for(let l=n;l>=t;l--)if(o+=e[l],o>=i){f=Math.min(n,l+1);break}return a>=f&&(a=t,f=n),{calMin:a,calMax:f,robustMin:a,robustMax:f,globalMin:t,globalMax:n}}function os(e,[t,n,s]){const r=e.dimsRAS,i=e.img2RASstart,o=e.img2RASstep;return!r||!i||!o||t<0||t>=r[1]||n<0||n>=r[2]||s<0||s>=r[3]?null:i[0]+t*o[0]+i[1]+n*o[1]+i[2]+s*o[2]}function $n(e,t){return Be(this,null,function*(){const n=e.img,s=yield Tr(t,e.hdr,n.buffer.byteLength===n.byteLength?n.buffer:n.buffer.slice(n.byteOffset,n.byteOffset+n.byteLength)),r=URL.createObjectURL(new Blob([s]));Object.assign(document.createElement("a"),{href:r,download:t}).click(),URL.revokeObjectURL(r)})}let nn=null,mn=!1,as=0,On=!1,Vn=[];const Ur=/Safari/.test(navigator.userAgent)&&!/Chrome|Chromium|CriOS|FxiOS|Edg|Android/.test(navigator.userAgent),Qa=Ur&&new URLSearchParams(window.location.search).get("inference")!=="webgpu";function Ys(e=null){return Be(this,null,function*(){const t={secureContext:window.isSecureContext,navigatorGpuExists:"gpu"in navigator,adapterObtained:!1,deviceObtained:!1,f16Support:!1,error:null};if(window.isSecureContext||(console.warn("WebGPU requires a secure context (HTTPS or localhost)."),console.warn("Current origin:",window.location.origin)),"gpu"in navigator)try{console.log("Requesting WebGPU adapter...");const n=yield navigator.gpu.requestAdapter();if(n){t.adapterObtained=!0,console.log("WebGPU adapter obtained:",n),n.info&&console.log("Adapter info:",n.info),console.log("Adapter limits:",{maxBufferSize:n.limits.maxBufferSize,maxStorageBufferBindingSize:n.limits.maxStorageBufferBindingSize,maxComputeWorkgroupsPerDimension:n.limits.maxComputeWorkgroupsPerDimension});const s={maxBufferSize:n.limits.maxBufferSize,maxStorageBufferBindingSize:n.limits.maxStorageBufferBindingSize,maxStorageBuffersPerShaderStage:n.limits.maxStorageBuffersPerShaderStage,maxUniformBufferBindingSize:n.limits.maxUniformBufferBindingSize,maxComputeInvocationsPerWorkgroup:n.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:n.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:n.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:n.limits.maxComputeWorkgroupSizeZ,maxComputeWorkgroupStorageSize:n.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:n.limits.maxComputeWorkgroupsPerDimension},r=n.features.has("shader-f16"),i=n.features.has("subgroups");t.f16Support=r,t.subgroupsSupport=i;const o=[];r&&o.push("shader-f16"),i&&o.push("subgroups");const a=yield n.requestDevice({requiredLimits:s,requiredFeatures:o});if(a.__adapterInfo=n.info||null,e&&typeof e.getParameter=="function")try{if(/Firefox/i.test(navigator.userAgent||""))a.__glRenderer=String(e.getParameter(e.RENDERER)||"");else{const l=e.getExtension("WEBGL_debug_renderer_info");a.__glRenderer=String((l?e.getParameter(l.UNMASKED_RENDERER_WEBGL):e.getParameter(e.RENDERER))||"")}}catch(l){}a.__isLost=!1,a.lost&&typeof a.lost.then=="function"&&a.lost.then(l=>{a.__isLost=!0,(l==null?void 0:l.reason)!=="destroyed"&&(console.warn(`[WebGPU] Device was lost (${(l==null?void 0:l.reason)||"unknown"}): ${(l==null?void 0:l.message)||""}`),nn===a&&(nn=null,mn=!1,t.deviceObtained=!1,t.error=(l==null?void 0:l.message)||"WebGPU device lost",Ks(!1,t)))}),nn=a,t.deviceObtained=!0,mn=!0,console.log(`✓ WebGPU initialized successfully. F16: ${r?"enabled":"not available"}, Subgroups: ${i?"enabled":"not available"}`)}else console.warn("WebGPU adapter request returned null."),console.warn("This typically means:"),console.warn("  - Safari: WebGPU feature flags not enabled in Settings > Feature Flags"),console.warn("  - Unsupported GPU hardware"),console.warn("  - GPU drivers need updating"),t.error="Adapter returned null"}catch(n){t.error=n.message,console.error("WebGPU initialization error:",n),navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")&&(console.warn("Safari detected. To enable WebGPU:"),console.warn("  1. Open Safari Settings/Preferences"),console.warn('  2. Go to Advanced tab, enable "Show features for web developers"'),console.warn("  3. Go to Feature Flags tab"),console.warn("  4. Enable: WebGPU, GPU Process: DOM Rendering, GPU Process: Canvas Rendering"),console.warn("  5. Restart Safari"))}else console.warn("navigator.gpu not found. WebGPU API is not available in this browser."),t.error="navigator.gpu not found",navigator.userAgent.includes("Firefox")&&(console.warn("Firefox detected. To enable WebGPU in about:config:"),console.warn("  1. Set dom.webgpu.enabled = true"),console.warn("  2. Set gfx.webgpu.ignore-blocklist = true"),console.warn("  3. Restart Firefox"));return Ks(mn,t),mn||console.log("Falling back to WebGL backend."),window.webgpuDiagnostics=t,t})}function Ks(e,t){const n=document.getElementById("backendStatus");if(!n){console.log("Backend status element not found in DOM");return}if(e){const s=t.f16Support?" (F16)":"";n.textContent=`WebGPU${s}`,n.style.color="#4CAF50",n.title="WebGPU backend active - fastest performance"}else{n.textContent="WebGL",n.style.color="#FF9800";let s="WebGL backend (fallback)";t.error&&(s+=`
Reason: ${t.error}`),t.secureContext||(s+=`
⚠ Not a secure context (HTTPS required)`),Ur&&(s+=`

To enable WebGPU in Safari:
1. Settings > Feature Flags
2. Enable WebGPU flags
3. Restart Safari`),navigator.userAgent.includes("Firefox")&&(s+=`

To enable WebGPU in Firefox:
1. about:config > dom.webgpu.enabled = true
2. gfx.webgpu.ignore-blocklist = true
3. Restart Firefox`),n.title=s}}function Ja(){return Be(this,null,function*(){var sn;let e="",t="",n=null,s=null,r=null,i=null;function o(){const y=modelSelect.value;return y==="-1"||modelSelect.selectedIndex<0?null:hn[y]||null}function a(){const y=o();modelSelect.title=(y==null?void 0:y.description)||"Choose a segmentation model to run"}const f=document.getElementById("activeModelItem"),l=document.getElementById("activeModelBadge");function u(y){var R;if(!f||!l)return;const L=(R=y==null?void 0:y.modelName)==null?void 0:R.trim();if(!L){f.hidden=!0,l.textContent="",l.removeAttribute("title");return}l.textContent=L,l.title=`Active model: ${L}`,f.hidden=!1}const d="altKey";let g=null,c=null,p=null,m=null,b=null,M=null,_=null,w="input.nii.gz",v=null;const S=document.getElementById("dragSegmented");S&&S.querySelectorAll("button").forEach(y=>{y.onclick=()=>{K.secondaryDragMode=parseInt(y.dataset.drag,10),S.querySelectorAll("button").forEach(L=>{const R=L===y;L.classList.toggle("active",R),L.setAttribute("aria-pressed",String(R))})}});const h=document.getElementById("drawBtn"),k=document.getElementById("drawPopover"),F=document.getElementById("penRow"),$=document.getElementById("drawApplyRow");function A(y){k&&(k.hidden=!y,h&&h.setAttribute("aria-expanded",String(y)))}function x(y){K.drawIsEnabled=y>=0,y>=0&&(!K.drawingVolume&&K.volumes.length&&K.createEmptyDrawing(),K.drawPenValue=y&7,K.drawPenFilled=y>7),F&&F.querySelectorAll(".chip").forEach(L=>L.classList.toggle("active",parseInt(L.dataset.pen,10)===y))}function C(y){return Be(this,null,function*(){var Ue;if(K.volumes.length<2){window.alert("No segmentation open (run a model first).");return}if(y===0){K.drawUndo();return}const L=(Ue=K.drawingVolume)==null?void 0:Ue.img;if(!L){window.alert("Nothing drawn yet — pick a pen and draw on the image first.");return}const R=K.volumes[1].img;if(R instanceof Float32Array){window.alert("Drawing edits label segmentations, not probability maps.");return}const J=K.volumes[1],ue=J.dimsRAS;if(!ue||L.length!==ue[1]*ue[2]*ue[3]){window.alert("The drawing does not match the current image — redraw it.");return}const ke=y===1?1:0;let ve=0;for(let ge=0;ge<ue[3];ge++)for(let Re=0;Re<ue[2];Re++)for(let Pe=0;Pe<ue[1];Pe++,ve++)L[ve]>0&&(R[os(J,[Pe,Re,ge])]=ke);K.closeDrawing(),yield K.updateGLVolume(),K.drawIsEnabled=!1,x(-1)})}h&&(h.onclick=y=>{y.stopPropagation(),A(k.hidden)}),F&&F.querySelectorAll(".chip").forEach(y=>{y.onclick=()=>x(parseInt(y.dataset.pen,10))}),$&&$.querySelectorAll(".chip").forEach(y=>{y.onclick=()=>C(parseInt(y.dataset.apply,10))}),document.addEventListener("click",y=>{!k||k.hidden||y.target.closest(".popover-wrap")||A(!1)}),document.addEventListener("keydown",y=>{y.key==="Escape"&&A(!1)});const z=document.getElementById("appDialog");if(z&&!("closedBy"in HTMLDialogElement.prototype)){let y=!1;const L=R=>{const J=z.getBoundingClientRect();return R.clientX<J.left||R.clientX>J.right||R.clientY<J.top||R.clientY>J.bottom};z.addEventListener("pointerdown",R=>{y=R.target===z&&L(R)}),z.addEventListener("pointerup",R=>{y&&R.target===z&&L(R)&&z.close(),y=!1})}aboutBtn.onclick=function(){Kt("About BrainChop",`
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
        <strong>🪓🔪 / 🔪 Cortical + Subcortical Parcellation:</strong> <em>Desikan-Killiany Atlas</em> (104-region cortical + subcortical + 5-part corpus callosum) for standard and clinical T1w MRIs; <em>Desikan-Killiany (lesion scans)</em> for large focal lesions; <em>Desikan-Killiany 50</em> for merged bilateral cortical homologues.</p>
        
        <p><em>Note: Models may run slower on limited devices to ensure memory safety.</em></p>
      </div>
    `)};const I=document.getElementById("shadingBtn");I.onclick=()=>{const y=I.classList.toggle("active");I.setAttribute("aria-pressed",String(y)),K.volumeIllumination=y?.5:0};const E=document.getElementById("resetViewBtn");E&&(E.onclick=()=>$s(K)),diagnosticsBtn.onclick=function(){let y=e;if(y.length<1&&window.webgpuDiagnostics){const R=window.webgpuDiagnostics;y=`:: Startup Diagnostics ::
`,y+=`Secure Context: ${R.secureContext}
`,y+=`WebGPU Enabled: ${mn}
`,y+=`F16 Support: ${R.f16Support}
`,R.error&&(y+=`Error: ${R.error}
`),y+=`User Agent: ${navigator.userAgent}
`}if(y.length<1){Kt("Diagnostics","No diagnostic string generated: run a model to create diagnostics");return}let L=y;t=t.slice(0,-2),t!==""&&L.includes("Status: OK")&&(L=L.replace("Status: OK",`Status: ${t}`)),t="",navigator.clipboard.writeText(L).then(()=>{Kt("Diagnostics",`<p>Diagnostics copied to clipboard</p><pre style="white-space: pre-wrap; font-family: monospace; font-size: 0.9em; overflow-x: auto;">${L}</pre>`)}).catch(R=>{Kt("Diagnostics",`<p>Failed to copy to clipboard.</p><pre style="white-space: pre-wrap; font-family: monospace; font-size: 0.9em; overflow-x: auto;">${L}</pre>`)})},opacitySlider0.oninput=()=>{K.volumes[0]&&(K.volumes[0].opacity=Number(opacitySlider0.value)),K.updateGLVolume()};function T(){const y=Number(opacitySlider1.value);K.volumes.slice(1).forEach((L,R)=>{L.opacity=(p==null?void 0:p[R])===L&&c!==null&&R!==c?0:y}),K.updateGLVolume()}opacitySlider1.oninput=T;function B(y=null){const L=y==null?void 0:y.probabilityUnderlayOpacity;L!==void 0?(_===null&&(_=opacitySlider0.value),opacitySlider0.value=L,K.volumes[0]&&(K.volumes[0].opacity=Number(L))):_!==null&&(opacitySlider0.value=_,_=null,K.volumes[0]&&(K.volumes[0].opacity=Number(opacitySlider0.value)))}function O(){return Be(this,null,function*(){var oe,ye,ze;const y=K.volumes[0],L=(oe=y.hdr)==null?void 0:oe.pixDims,R=!L||Math.abs(Math.abs(L[1])-1)<.001&&Math.abs(Math.abs(L[2])-1)<.001&&Math.abs(Math.abs(L[3])-1)<.001,J=(ye=y.hdr)==null?void 0:ye.scl_slope,ue=(ze=y.hdr)==null?void 0:ze.scl_inter,ke=(J===void 0||J===0||Math.abs(J-1)<1e-6)&&(ue===void 0||Math.abs(ue)<1e-6);let ve=y.dims[1]===256&&y.dims[2]===256&&y.dims[3]===256&&y.img instanceof Uint8Array&&y.img.length===256*256*256&&R&&ke;if((y.permRAS[0]!==-1||y.permRAS[1]!==3||y.permRAS[2]!==-2)&&(ve=!1),ve)return;Gt("Conforming input volume to 256³...",.05),yield Cr(),yield ce();const Ue=yield K.volumeTransform.conform(y,{toRAS:!1}),[ge,Re]=[M,w],Pe=modelSelect.value;yield K.removeVolume(0),yield K.addVolume(Ue),[M,w]=[ge,Re],modelSelect.value=Pe,a()})}function ae(){for(c=null,p=null;K.model.volumes.length>1;)K.model.removeVolume(K.model.volumes.length-1)}function ce(){return Be(this,null,function*(){ae(),u(null),yield K.updateGLVolume()})}function V(){return K.volumes.length>=2&&K.volumes[1].colormapLabel?K.volumes[1]:null}function W(){g=null,m=null,b=null,G&&(G.style.display="none")}function j(){const y=V();if(y){if(m===null&&(m=y.img),g===null)y.img=m,b=null;else{const L=m,R=new L.constructor(L.length);for(let J=0;J<L.length;J++)R[J]=L[J]===g?g:0;y.img=R,b=ee(g)}K.updateGLVolume(),ie()}}function ee(y){const L=K.volumes[0],R=m||K.volumes[1]&&K.volumes[1].img;if(!L||!R)return null;const J=L.hdr.pixDims||[],ue=J[1]&&J[2]&&J[3]?J[1]*J[2]*J[3]:1,ke=Ge(L.img,R,ue),ve=ke.reduce((oe,ye)=>oe+ye.volume_mm3,0),Ue=ke.find(oe=>oe.label===y);if(!Ue)return null;const ge=ve>0?Ue.volume_mm3/ve*100:0,Re=[Ue.name,`${Fe(Ue.volume_mm3)} cm3   (${ge.toFixed(1)}% of brain)`,`${Ue.voxels.toLocaleString()} voxels`,`intensity  ${Ue.mean.toFixed(0)} +/- ${Ue.stdev.toFixed(0)}`];let Pe=[1,1,1,1];if(s&&s.R&&s.R[y]!=null){const oe=ye=>Math.min(255,ye*.55+130)/255;Pe=[oe(s.R[y]),oe(s.G[y]),oe(s.B[y]),1]}return{lines:Re,color:Pe}}let G=null;function ie(){var Ue,ge;G||(G=document.createElement("div"),G.style.cssText="position:absolute;pointer-events:none;font:13px/1.55 system-ui,sans-serif;text-shadow:0 1px 2px #000;white-space:pre;color:#ebebeb",K.canvas.parentElement.appendChild(G));const y=(ge=(Ue=K.view)==null?void 0:Ue.screenSlices)==null?void 0:ge.find(Re=>Re.axCorSag===4);if(g===null||!b||!V()||!y){G.style.display="none";return}const L=window.devicePixelRatio||1,[R,J]=y.leftTopWidthHeight;Object.assign(G.style,{left:`${R/L+8}px`,top:`${J/L+8}px`});const{lines:ue,color:ke}=b,ve=ke.slice(0,3).map(Re=>Math.round(Re*255)).join(",");G.innerHTML=`<span style="color:rgb(${ve})">${Qt(ue[0])}</span>
`+ue.slice(1).map(Qt).join(`
`),G.style.display="block"}function le(){const y=V();if(!y||!v)return null;const L=os(y,v);if(L===null)return null;const R=(m||y.img)[L];return R===void 0?null:Math.round(R*y.hdr.scl_slope+y.hdr.scl_inter)}function Ae(y){V()&&(g=y===0||y===g?null:y,j())}function pe(){if(!p||!v||p.some((R,J)=>K.volumes[J+1]!==R))return;let y=null,L=0;for(let R=0;R<p.length;R++){const J=p[R],ue=os(J,v);if(ue===null)return;const ke=J.img[ue];Number.isFinite(ke)&&ke>L&&(L=ke,y=R)}return y}function Me(y){if(y[d]){if(V()){const L=le();if(L===null||Number.isNaN(L))return;Ae(L)}else{const L=pe();if(L===void 0)return;const R=L===c?null:L;R!==c&&(c=R,T())}y.preventDefault()}}function H(){return Be(this,null,function*(){if(!On){On=!0,Vn=[];try{yield ne()}finally{On=!1,modelSelect.value="-1",a()}}})}function ne(){return Be(this,null,function*(){var ye,ze;const y=modelSelect.value;if(y==="-1"||modelSelect.selectedIndex<0)return;const L=document.getElementById("memstatusItem");L&&(L.hidden=!0),W(),yield O();const R=hn[y],J=(new URLSearchParams(window.location.search).get("precision")||"").toLowerCase(),ke=bt(bt({},Hs(R,J!=="fp16"&&J!=="fp32")),J==="fp32"?{forceFP32:!0}:{}),ve=Ct(bt({},Ma),{isTouchPrimary:Ka()}),Ue=new URL("./",window.location.href).href;ve.rootURL=Ue.endsWith("/")?Ue.slice(0,-1):Ue;const ge=K.volumes[0].img;let Re=null;const Pe=Qa&&!ke.quantize8Bit,oe=Pe;if(Pe&&mn&&ke.webgpu_safetensor&&console.info("Safari WebGPU legacy gate active for non-V4 model; routing to native WebGL2."),!oe&&(!nn||nn.__isLost)&&"gpu"in navigator&&as<2&&(ye=window.webgpuDiagnostics)!=null&&ye.adapterObtained&&(as++,console.info(`[WebGPU] Re-initializing device after prior loss (attempt ${as})...`),yield Ys((ze=K.view)==null?void 0:ze.gl)),mn&&nn&&!nn.__isLost&&!oe&&ke.webgpu_safetensor){console.log("Attempting WebGPU backend...");const me=Ct(bt({},ke),{enableTTA:!1});try{yield ka(nn,ve,me,K.volumes[0].hdr,ge,It,Gt);return}catch(Z){Re=Z,console.error("WebGPU inference failed, falling back to native WebGL2.",Z)}}if(R.webgpu_safetensor){const me=J==="int8"||J==="rgba8",Z=Ct(bt({},Hs(R,!1)),{quantize8Bit:me,autoQuantize8BitFallback:!me&&!!R.turbo});try{const{runInferenceWebGl2:be,nativeWebgl2Available:Oe}=yield dt(()=>Be(null,null,function*(){const{runInferenceWebGl2:Je,nativeWebgl2Available:et}=yield import("./inference-webgl2-BseBPG7U.js");return{runInferenceWebGl2:Je,nativeWebgl2Available:et}}),[],import.meta.url);if(Oe()){console.log("Attempting native WebGL2 runner..."),yield be(ve,Z,K.volumes[0].hdr,ge,It,Gt);return}Re=new Error("Native WebGL2 unavailable (no OffscreenCanvas WebGL2 context)."),console.warn(Re.message)}catch(be){Re=be,console.error("Native WebGL2 failed.",be)}}ei(Re||new Error(`No available backend could run ${ke.modelName}.`))})}modelSelect.onchange=()=>(a(),H()),a();function P(y){return Be(this,null,function*(){const L=V(),R=g!==null&&L&&m;R&&(L.img=m);try{return yield y()}finally{R&&j()}})}function Y(){const y=K.volumes[1],L=(r==null?void 0:r.type)==="Brain_Extraction"?i:g!==null&&m?m:y.img;if(!L||L.length!==y.img.length)throw new Error("The segmentation mask is unavailable. Run the model again.");const R=new Uint8Array(L.length);for(let ue=0;ue<L.length;ue++)R[ue]=L[ue]!==0?1:0;const J=Xs(y,R,"brain_mask");return Object.assign(J.hdr,{datatypeCode:2,numBitsPerVoxel:8,scl_slope:1,scl_inter:0,cal_min:0,cal_max:1,intent_code:1002}),J}function D(){return Be(this,arguments,function*({includeMask:y=!1,useFreeSurfer:L=!1}={}){if(K.volumes.length<2){window.alert("No segmentation to save (run a model first).");return}const R=L?Tn(n):null,J=K.volumes.slice(1);yield P(()=>Be(null,null,function*(){for(const ue of J){const ke=!!ue.colormapLabel||ue.hdr.intent_code===1002;if(R&&ke){const{img:ve,maxLabel:Ue}=Ga(ue.img,R),ge=rs(ue,ve,ue.name,{datatypeCode:4,numBitsPerVoxel:16,scl_slope:1,scl_inter:0,cal_min:0,cal_max:Ue,intent_code:1002});yield $n(ge,re(ue,J.length,"_fs"))}else yield $n(ue,re(ue,J.length,""))}y&&(yield $n(Y(),"binary_mask.nii.gz"))}))})}function re(y,L,R){return L>1?`segmentation_${y.name}${R}.nii.gz`:`segmentation${R}.nii.gz`}function te(){if(K.volumes.length<1){window.alert("No image loaded.");return}$n(K.volumes[0],"conformed_input.nii.gz")}function Q(){return Be(this,null,function*(){if(K.volumes.length<1){window.alert("No image loaded.");return}yield P(()=>Be(null,null,function*(){yield K.saveDocument("brainchop.nvd")}))})}function N(){return Be(this,arguments,function*({includeMask:y=!1,useFreeSurfer:L=!1}={}){if(K.volumes.length<2){window.alert("No segmentation to save (run a model first).");return}if(!M||!M.hdr||!M.hdr.affine){window.alert("Original input grid is unavailable — reload the image and try again.");return}const R=L?Tn(n):null;Gt("Reslicing to native space…",0),yield new Promise(J=>setTimeout(J,30));try{const J=K.volumes.slice(1);for(const ue of J){const ke=!!ue.colormapLabel||ue.hdr.intent_code===1002,ve=R&&ke?R:null,Ue=yield P(()=>X(ue,ve));yield $n(Ue,re(ue,J.length,ve?"_fs_native":"_native"))}if(y){const ue=X(Y());yield $n(ue,"binary_mask_native.nii.gz")}Gt("Saved native-space segmentation.",1)}catch(J){console.error("Native-space reslice failed:",J),window.alert("Native-space export failed: "+(J&&J.message?J.message:J))}})}function X(y,L=null){const R=y.img,J=M.hdr.affine,ue=M.hdr.dims[1],ke=M.hdr.dims[2],ve=M.hdr.dims[3],Ue=y.hdr.dims[1],ge=y.hdr.dims[2],Re=y.hdr.dims[3],Pe=(je,at)=>[je[0][0]*at[0]+je[0][1]*at[1]+je[0][2]*at[2]+je[0][3],je[1][0]*at[0]+je[1][1]*at[1]+je[1][2]*at[2]+je[1][3],je[2][0]*at[0]+je[2][1]*at[1]+je[2][2]*at[2]+je[2][3]],oe=Nr();if(!Dr(oe,Vr(...y.hdr.affine[0],...y.hdr.affine[1],...y.hdr.affine[2],...y.hdr.affine[3])))throw new Error("Segmentation affine is not invertible");const ye=(je,at)=>[je[0]*at[0]+je[1]*at[1]+je[2]*at[2]+je[3],je[4]*at[0]+je[5]*at[1]+je[6]*at[2]+je[7],je[8]*at[0]+je[9]*at[1]+je[10]*at[2]+je[11]],ze=je=>ye(oe,Pe(J,je)),me=ze([0,0,0]),Z=ze([1,0,0]).map((je,at)=>je-me[at]),be=ze([0,1,0]).map((je,at)=>je-me[at]),Oe=ze([0,0,1]).map((je,at)=>je-me[at]),Je=!!y.colormapLabel||y.hdr.intent_code===1002,et=ue*ke*ve,ut=Xs(M),yt=(je,at,Ot)=>je>=0&&je<Ue&&at>=0&&at<ge&&Ot>=0&&Ot<Re?R[je+at*Ue+Ot*Ue*ge]:0;if(Je){const je=[];for(const $e of[-.25,.25])for(const we of[-.25,.25])for(const Ne of[-.25,.25])je.push([$e*Z[0]+we*be[0]+Ne*Oe[0],$e*Z[1]+we*be[1]+Ne*Oe[1],$e*Z[2]+we*be[2]+Ne*Oe[2]]);const at=new Int16Array(et),Ot=L?L.length:0;let rt=0;const We=new Int32Array(8),he=new Int32Array(8);let Ie=0;for(let $e=0;$e<ve;$e++)for(let we=0;we<ke;we++){let Ne=me[0]+we*be[0]+$e*Oe[0],Xe=me[1]+we*be[1]+$e*Oe[1],Ke=me[2]+we*be[2]+$e*Oe[2];for(let lt=0;lt<ue;lt++){let Mt=0;for(let ct=0;ct<8;ct++){const ot=yt(Math.round(Ne+je[ct][0]),Math.round(Xe+je[ct][1]),Math.round(Ke+je[ct][2]));let Ze=-1;for(let fe=0;fe<Mt;fe++)if(We[fe]===ot){Ze=fe;break}Ze<0?(We[Mt]=ot,he[Mt]=1,Mt++):he[Ze]++}let Ee=We[0],tt=he[0];for(let ct=1;ct<Mt;ct++)he[ct]>tt&&(tt=he[ct],Ee=We[ct]);L&&Ee>=0&&Ee<Ot&&(Ee=L[Ee]),Ee>rt&&(rt=Ee),at[Ie++]=Ee,Ne+=Z[0],Xe+=Z[1],Ke+=Z[2]}}ut.hdr.datatypeCode=4,ut.hdr.numBitsPerVoxel=16,ut.hdr.scl_slope=1,ut.hdr.scl_inter=0,ut.hdr.cal_min=0,ut.hdr.cal_max=rt,ut.hdr.intent_code=1002,ut.img=at}else{const je=y.img instanceof Float32Array,at=je?255:1,Ot=je?.5:0,rt=je?new Uint8Array(et):ut.img;rt.fill(0),je&&(Object.assign(ut.hdr,{datatypeCode:2,numBitsPerVoxel:8,cal_min:0,cal_max:1}),ut.img=rt),ut.hdr.scl_slope=1/at,ut.hdr.scl_inter=0;const he=je?($e,we,Ne)=>{const Xe=Math.floor($e),Ke=Math.floor(we),lt=Math.floor(Ne),Mt=$e-Xe,Ee=we-Ke,tt=Ne-lt,ct=yt(Xe,Ke,lt),ot=yt(Xe+1,Ke,lt),Ze=yt(Xe,Ke+1,lt),fe=yt(Xe+1,Ke+1,lt),xe=yt(Xe,Ke,lt+1),de=yt(Xe+1,Ke,lt+1),st=yt(Xe,Ke+1,lt+1),$t=yt(Xe+1,Ke+1,lt+1),vt=ct+Mt*(ot-ct),xt=Ze+Mt*(fe-Ze),mt=xe+Mt*(de-xe),zt=st+Mt*($t-st),Te=vt+Ee*(xt-vt),qe=mt+Ee*(zt-mt);return Te+tt*(qe-Te)}:($e,we,Ne)=>yt(Math.round($e),Math.round(we),Math.round(Ne));let Ie=0;for(let $e=0;$e<ve;$e++)for(let we=0;we<ke;we++){let Ne=me[0]+we*be[0]+$e*Oe[0],Xe=me[1]+we*be[1]+$e*Oe[1],Ke=me[2]+we*be[2]+$e*Oe[2];for(let lt=0;lt<ue;lt++)rt[Ie++]=he(Ne,Xe,Ke)*at+Ot,Ne+=Z[0],Xe+=Z[1],Ke+=Z[2]}}return ut}let q=!1,_e=!1;const se={cube:'<svg viewBox="0 0 24 24" class="save-opt-ico" aria-hidden="true"><path d="M12 2.75l8.25 4.75v9L12 21.25 3.75 16.5v-9z"/><path d="M12 12v9.25M3.75 7.5L12 12l8.25-4.5"/></svg>',grid:'<svg viewBox="0 0 24 24" class="save-opt-ico" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="2.5"/><path d="M3.5 9.5h17M3.5 14.5h17M9.5 3.5v17M14.5 3.5v17"/></svg>',volume:'<svg viewBox="0 0 24 24" class="save-opt-ico" aria-hidden="true"><path d="M12 3.5l8.5 4.5-8.5 4.5L3.5 8z"/><path d="M3.5 12l8.5 4.5 8.5-4.5M3.5 16l8.5 4.5 8.5-4.5"/></svg>',scene:'<svg viewBox="0 0 24 24" class="save-opt-ico" aria-hidden="true"><rect x="3.5" y="4.5" width="17" height="15" rx="2.5"/><path d="M3.5 9.5h17M9.5 9.5v10"/></svg>',arrow:'<svg viewBox="0 0 24 24" class="save-opt-arrow" aria-hidden="true"><path d="M12 4.5v11"/><path d="M7.5 11.5L12 16l4.5-4.5"/><path d="M5 19.5h14"/></svg>'},Le=[{act:D,group:"seg",icon:"cube",title:"Conformed space",sub:"256³ · 1 mm isotropic",need:"seg"},{act:N,group:"seg",icon:"grid",title:"Native space",sub:"Resampled to the input grid",need:"seg"},{act:te,group:"vol",icon:"volume",title:"Conformed input volume",sub:"Resampled T1 · 256³ · 1 mm",need:"img"},{act:Q,group:"vol",icon:"scene",title:"Scene (.nvd)",sub:"Full viewer state document",need:"img"}];function Ce(){const y=K.volumes.length>=1,L=K.volumes.length>=2,R=L&&r&&r.outputType!=="probability"&&(r.type!=="Brain_Extraction"||!!i),J=L&&r&&r.outputType!=="probability"&&r.type!=="Brain_Extraction"&&!!Tn(n),ue=me=>me==="seg"?L:y;let ke=!1;const ve=me=>Le.map((Z,be)=>({o:Z,i:be})).filter(({o:Z})=>Z.group===me).map(({o:Z,i:be})=>{const Oe=ue(Z.need),Je=Oe&&!ke?(ke=!0," autofocus"):"";return`<button type="button" class="save-opt${Oe?"":" disabled"}" data-i="${be}"${Oe?"":" disabled"}${Je}>
          ${se[Z.icon]}
          <span class="save-opt-copy">
            <span class="save-opt-title">${Z.title}</span>
            <span class="save-opt-sub">${Z.sub}</span>
          </span>
          ${se.arrow}
        </button>`}).join(""),Ue=[];J&&Ue.push(`
        <label class="save-check-row" for="saveFreeSurfer">
          <input type="checkbox" id="saveFreeSurfer" class="save-checkbox"${q?" checked":""}>
          <span class="save-check-copy">
            <span class="save-check-title">FreeSurfer label IDs <span class="save-badge">Freeview</span></span>
            <span class="save-check-sub">FreeSurferColorLUT numbering · open directly with :colormap=lut</span>
          </span>
        </label>`),R&&Ue.push(`
        <label class="save-check-row" for="saveBinaryMask">
          <input type="checkbox" id="saveBinaryMask" class="save-checkbox"${_e?" checked":""}>
          <span class="save-check-copy">
            <span class="save-check-title">Also save binary mask</span>
            <span class="save-check-sub">Foreground 1 · background 0</span>
          </span>
        </label>`);const ge=Ue.length?`<div class="save-modifiers" role="group" aria-label="Segmentation export options">${Ue.join("")}</div>`:"",Pe=`
      <div class="save-sheet">
        <section class="save-section">
          <div class="save-section-head">
            <span class="save-section-label">Segmentation</span>
            ${L?"":'<span class="save-section-hint">Run a model first</span>'}
          </div>
          <div class="save-options">${ve("seg")}</div>
          ${ge}
        </section>
        <section class="save-section save-section-divider">
          <div class="save-section-head">
            <span class="save-section-label">Volume &amp; Scene</span>
          </div>
          <div class="save-options">${ve("vol")}</div>
        </section>
      </div>`;Kt("Save",Pe,{hideClose:!0,saveMode:!0});const oe=document.getElementById("dialogMessage");if(!oe)return;const ye=oe.querySelector("#saveFreeSurfer");ye&&(ye.onchange=()=>{q=ye.checked});const ze=oe.querySelector("#saveBinaryMask");ze&&(ze.onchange=()=>{_e=ze.checked}),oe.querySelectorAll(".save-opt:not(.disabled)").forEach(me=>{me.onclick=()=>{var et,ut;const Z=Le[parseInt(me.dataset.i,10)],be=Z.need==="seg"&&!!((et=oe.querySelector("#saveBinaryMask"))!=null&&et.checked),Oe=Z.need==="seg"&&J&&!!((ut=oe.querySelector("#saveFreeSurfer"))!=null&&ut.checked),Je=document.getElementById("appDialog");Je&&Je.open&&Je.close(),Z.need==="seg"?Z.act({includeMask:be,useFreeSurfer:Oe}):Z.act()}})}const Ve=document.getElementById("saveBtn");Ve&&(Ve.onclick=Ce);function Ge(y,L,R){const ue=new Map,ke=L.length;for(let ge=0;ge<ke;ge++){const Re=L[ge];if(Re===0)continue;let Pe=ue.get(Re);Pe||(Pe={count:0,sum:0,sumSq:0,hist:new Float64Array(256)},ue.set(Re,Pe));const oe=y[ge];Pe.count++,Pe.sum+=oe,Pe.sumSq+=oe*oe,Pe.hist[oe]++}const ve=(ge,Re,Pe)=>{const oe=Pe*Re;let ye=0;for(let ze=0;ze<ge.length;ze++)if(ye+=ge[ze],ye>=oe)return ze;return ge.length-1},Ue=[];for(const[ge,Re]of[...ue.entries()].sort((Pe,oe)=>Pe[0]-oe[0])){const Pe=Re.sum/Re.count,oe=Math.max(0,Re.sumSq/Re.count-Pe*Pe);let ye=0,ze=0;for(let me=0;me<Re.hist.length;me++)if(Re.hist[me]>0){ye=me;break}for(let me=Re.hist.length-1;me>=0;me--)if(Re.hist[me]>0){ze=me;break}Ue.push({label:ge,name:n&&n[ge]!=null?n[ge]:`label_${ge}`,voxels:Re.count,volume_mm3:Re.count*R,min:ye,max:ze,q1:ve(Re.hist,Re.count,.25),median:ve(Re.hist,Re.count,.5),q3:ve(Re.hist,Re.count,.75),mean:Pe,stdev:Math.sqrt(oe)})}return Ue}function Qe(y,L=null){const R=L?["label","fs_label","name","voxels","volume_mm3","min","max","q1","median","q3","mean","stdev"]:["label","name","voxels","volume_mm3","min","max","q1","median","q3","mean","stdev"],J=ve=>Number.isInteger(ve)?String(ve):ve.toFixed(6),ue=ve=>/[",\n]/.test(ve)?`"${String(ve).replace(/"/g,'""')}"`:String(ve),ke=[R.join(",")];for(const ve of y){const Ue=L?[ve.label,ve.label<L.length?L[ve.label]:ve.label,ue(ve.name)]:[ve.label,ue(ve.name)];Ue.push(ve.voxels,J(ve.volume_mm3),ve.min,ve.max,ve.q1,ve.median,ve.q3,J(ve.mean),J(ve.stdev)),ke.push(Ue.join(","))}return ke.join(`
`)+`
`}function He(y,L=null){const R=new Blob([Qe(y,L)],{type:"text/csv"}),J=URL.createObjectURL(R),ue=document.createElement("a");ue.href=J,ue.download="mask_stats.csv",document.body.appendChild(ue),ue.click(),ue.remove(),URL.revokeObjectURL(J)}const Fe=y=>{const L=y/1e3;return L>=10?Math.round(L).toLocaleString():L.toFixed(1)};function Se(y,L,R=null){const J=Math.max(...y.map(ge=>ge.volume_mm3)),ue=ge=>s&&s.R&&s.R[ge.label]!=null?`rgb(${s.R[ge.label]},${s.G[ge.label]},${s.B[ge.label]})`:"#6b9bd1";let ke="";for(const ge of y){const Re=L>0?ge.volume_mm3/L*100:0,Pe=J>0?ge.volume_mm3/J*100:0,oe=g===ge.label,ye=R&&ge.label<R.length?R[ge.label]:null,ze=`<span class="stat-val" data-cm3="${Fe(ge.volume_mm3)}" data-pct="${Re.toFixed(1)}%">${Fe(ge.volume_mm3)}</span>`,me=`<span class="stat-bar" style="width:${Pe.toFixed(2)}%;background:${ue(ge)}" data-w-abs="${Pe.toFixed(2)}" data-w-pct="${Re.toFixed(2)}"></span>`,Z=(Oe,Je)=>`<div class="stat-kv"><span class="k">${Oe}</span><span class="v">${Je}</span></div>`,be=Z("min",ge.min)+Z("max",ge.max)+Z("Q1",ge.q1)+Z("Q3",ge.q3)+Z("median",ge.median)+Z("mean",ge.mean.toFixed(2))+Z("SD",ge.stdev.toFixed(2))+Z("voxels",ge.voxels.toLocaleString());ke+=`
        <div class="stat-row${oe?" is-isolated":""}" data-label="${ge.label}" data-name="${Qt(ge.name.toLowerCase())}">
          <div class="stat-line">
            <button type="button" class="stat-trigger" aria-expanded="false">
              <span class="stat-chevron" aria-hidden="true"></span>
              <span class="stat-swatch" style="background:${ue(ge)}" aria-hidden="true"></span>
              <span class="stat-name">${Qt(ge.name)}</span>
              <span class="stat-track" aria-hidden="true">${me}</span>
              ${ze}
            </button>
            <button type="button" class="stat-iso${oe?" active":""}" aria-pressed="${oe}" aria-label="Isolate ${Qt(ge.name)}">${oe?"isolated":"isolate"}</button>
          </div>
          <div class="stat-detail" hidden>
            <div class="stat-detail-meta">
              <span class="stat-detail-fullname">${Qt(ge.name)}</span>
              <span class="stat-detail-badges">
                <span class="stat-id-chip">ID ${ge.label}</span>
                ${ye?`<span class="save-badge">FS ${ye}</span>`:""}
              </span>
            </div>
            <div class="stat-detail-grid">${be}</div>
          </div>
        </div>`}const ve=y.length===1?"region":"regions",Ue=y.length>8?`<search class="stat-search">
           <input type="search" id="statsFilterInput" class="stat-filter" placeholder="Filter regions…" aria-label="Filter regions" autocorrect="off" autocapitalize="none" spellcheck="false">
         </search>`:"";return`
      <div id="statsPanel">
        <div class="stat-toolbar">
          <div class="stat-toggle" role="group" aria-label="Volume display unit">
            <button type="button" data-mode="cm3" class="active" aria-pressed="true">cm³</button>
            <button type="button" data-mode="pct" aria-pressed="false">% of total</button>
          </div>
          <span class="stat-total" id="statsUnitLabel">${y.length} ${ve} &middot; ${Fe(L)} cm³</span>
          ${Ue}
        </div>
        <div id="statsRows">
          ${ke}
          <p id="statsEmpty" class="stat-empty" hidden>No matching regions</p>
        </div>
        <div class="stat-footer">
          <span class="stat-footer-hint">Select a row for intensity stats &middot; Isolate solos in 3D</span>
          <button type="button" id="statsDownloadBtn" class="stat-csv-btn">
            ${se.arrow}
            <span>Download CSV</span>
          </button>
        </div>
      </div>`}saveStatsBtn.onclick=function(){if(K.volumes.length<2){Kt("Region volumes","<p>No segmentation to measure — run a model first.</p>");return}if(K.volumes[1].img instanceof Float32Array){Kt("Region volumes","<p>Region statistics require a discrete label segmentation, not continuous probability maps.</p>");return}const y=K.volumes[0].img,L=m||K.volumes[1].img;if(!y||!L||y.length!==L.length){Kt("Region volumes","<p>Input and segmentation grids do not match.</p>");return}const R=K.volumes[0].hdr.pixDims||[],J=R[1]&&R[2]&&R[3]?R[1]*R[2]*R[3]:1;let ue=Ge(y,L,J);if(ue.length===0){Kt("Region volumes","<p>No non-background labels found in the segmentation.</p>");return}ue=ue.slice().sort((ze,me)=>me.volume_mm3-ze.volume_mm3);const ke=ue.reduce((ze,me)=>ze+me.volume_mm3,0),ve=r&&r.type!=="Brain_Extraction"?Tn(n):null;Kt("Region volumes",Se(ue,ke,ve),{hideClose:!0,statsMode:!0});const Ue=document.getElementById("statsPanel");if(!Ue)return;let ge="cm3",Re=ue.length;const Pe=()=>{const ze=document.getElementById("statsUnitLabel");if(!ze)return;const me=Re===ue.length?`${ue.length} ${ue.length===1?"region":"regions"}`:`${Re} of ${ue.length} regions`,Z=ge==="pct"?"100% of volume":`${Fe(ke)} cm³`;ze.innerHTML=`${me} &middot; ${Z}`};Ue.querySelectorAll(".stat-toggle button").forEach(ze=>{ze.onclick=()=>{ge=ze.dataset.mode,Ue.querySelectorAll(".stat-toggle button").forEach(me=>{const Z=me===ze;me.classList.toggle("active",Z),me.setAttribute("aria-pressed",String(Z))}),Pe(),Ue.querySelectorAll(".stat-row").forEach(me=>{const Z=me.querySelector(".stat-val"),be=me.querySelector(".stat-bar");Z.textContent=ge==="pct"?Z.dataset.pct:Z.dataset.cm3,be.style.width=(ge==="pct"?be.dataset.wPct:be.dataset.wAbs)+"%"})}});const oe=document.getElementById("statsFilterInput"),ye=document.getElementById("statsEmpty");if(oe){const ze=()=>{const me=oe.value.trim().toLowerCase();Re=0,Ue.querySelectorAll(".stat-row").forEach(Z=>{const be=!me||Z.dataset.name.includes(me)||Z.dataset.label===me;Z.hidden=!be,be&&Re++}),ye&&(ye.hidden=Re>0),Pe()};oe.oninput=ze,oe.addEventListener("keydown",me=>{me.key==="Escape"&&oe.value!==""&&(me.preventDefault(),me.stopPropagation(),oe.value="",ze())})}Ue.querySelectorAll(".stat-trigger").forEach(ze=>{ze.onclick=()=>{const me=ze.closest(".stat-row"),Z=me.querySelector(".stat-detail"),be=Z.hidden;Z.hidden=!be,me.classList.toggle("is-expanded",be),ze.setAttribute("aria-expanded",String(be))}}),Ue.querySelectorAll(".stat-iso").forEach(ze=>{ze.onclick=()=>{const me=parseInt(ze.closest(".stat-row").dataset.label,10);Number.isNaN(me)||Ae(me);const Z=document.getElementById("appDialog");Z&&Z.open&&Z.close()}}),document.getElementById("statsDownloadBtn").onclick=()=>He(ue,ve)};function Ye(){K.volumes.length<=1&&(M=K.volumes[0]||null,w=M&&M.name?M.name:"input.nii.gz",r=null,i=null,u(null),B(),modelSelect.value="-1",a(),K.volumes[0]&&opacitySlider0.oninput())}const pt=new Map;function it(y){return Be(this,null,function*(){if(pt.has(y))return pt.get(y);const R=yield(yield fetch(y)).json();return pt.set(y,R),R})}function ft(y,L,R=1){let J=0;for(let ue=0;ue<256;ue++)y[ue]>0&&J++;return(!L||J!==L.length)&&(t="Failed to Predict Some Labels - "),L.map((ue,ke)=>{const ve=ke<256?y[ke]:0,Ue=ve>0?`${Fe(ve*R)} cm3`:"Missing";return Ue==="Missing"&&(t+=`${ue}, `),`${ue}   ${Ue}`})}function Bt(y,L,R){return Be(this,null,function*(){var Re,Pe;const J=(Re=L.probabilityDisplayMin)!=null?Re:.005,{probabilityOverlayAlpha:ue=96,probabilityOverlayFloor:ke=192}=L,ve=(R==null?void 0:R.tint)||[255,255,255],Ue=`probability-light-${ve.join("-")}-${ke}-${ue}`;if(!K.hasColormap(Ue)){const[oe,ye,ze]=ve.map(me=>Math.round(me*ke/255));K.addColormap(Ue,{R:[oe,ve[0]],G:[ye,ve[1]],B:[ze,ve[2]],A:[0,ue],I:[0,255]})}const ge=rs(K.volumes[0],y instanceof Float32Array?y:Float32Array.from(y),(Pe=R==null?void 0:R.name)!=null?Pe:K.volumes[0].name,{scl_inter:0,scl_slope:1,datatypeCode:16,numBitsPerVoxel:32,cal_min:0,cal_max:1,intent_code:1001},{calMin:J,calMax:1,robustMin:J,robustMax:1,globalMin:0,globalMax:1,colormapType:1,colormap:Ue,opacity:Number(opacitySlider1.value),modulateAlpha:1});return ge.modulationImage=ge.id,yield K.model.addVolume(ge),K.volumes.at(-1)})}function It(y,L,R,J){return Be(this,null,function*(){var oe,ye,ze;if(ae(),W(),n=null,s=null,r=R,i=R.type==="Brain_Extraction"&&J||null,u(R),R.outputType==="probability"){const me=Array.isArray(y)?y:[y],Z=[];for(let be=0;be<me.length;be++)Z.push(yield Bt(me[be],R,(oe=R.probabilityTissues)==null?void 0:oe[be]));R.probabilityPostprocess==="cat-lite"&&Z.length===3&&(p=Z),B(R),yield K.updateGLVolume();return}const ue=y instanceof Uint8Array?y:new Uint8Array(y.buffer,y.byteOffset||0,y.byteLength);let ke,ve=null,Ue=0,ge={calMin:0,calMax:255,robustMin:0,robustMax:255,globalMin:0,globalMax:255};if(R.type==="Brain_Masking"){const me=["Background","Brain Mask"];n=me.slice();const Z=[0,217],be=[0,119],Oe=[0,33];s={R:Z,G:be,B:Oe};const Je={R:Z,G:be,B:Oe,labels:me},et="brainchop-label-mask";K.addColormap(et,Je),ke=et,ve=Cs(Je),Ue=1002,ge={calMin:0,calMax:1,robustMin:0,robustMax:1,globalMin:0,globalMax:1}}else if(R.colormapPath){const me=is(ue),Z=yield it(R.colormapPath);n=Z.labels?Z.labels.slice():null,s={R:Z.R,G:Z.G,B:Z.B};const be=K.volumes[0].hdr.pixDims||[],Oe=be[1]&&be[2]&&be[3]?be[1]*be[2]*be[3]:1,Je=Z.labels?ft(me,Z.labels,Oe):[],et=Ct(bt(bt({R:Z.R,G:Z.G,B:Z.B},Z.I?{I:Z.I}:{}),Z.A?{A:Z.A}:{}),{labels:Je}),ut=`brainchop-label-${R.id}`;K.addColormap(ut,et),ke=ut,ve=Cs(et);const yt=Math.max(1,((ze=(ye=Z.R)==null?void 0:ye.length)!=null?ze:256)-1);Ue=1002,ge={calMin:0,calMax:yt,robustMin:0,robustMax:yt,globalMin:0,globalMax:yt}}else{const me=is(ue);ge=Za(me),ke=L.atlasSelectedColorTable.toLowerCase(),R.type==="Brain_Extraction"&&(ke="copper2"),K.hasColormap(ke)||(ke="actc")}const Re=rs(K.volumes[0],ue,K.volumes[0].name,{datatypeCode:2,numBitsPerVoxel:8,scl_inter:0,scl_slope:1,cal_min:ge.calMin,cal_max:ge.calMax,intent_code:Ue},Ct(bt(Ct(bt({},ge),{colormap:ke}),ve?{colormapLabel:ve}:{}),{opacity:Number(opacitySlider1.value)}));yield K.model.addVolume(Re);const Pe=K.volumes.at(-1);ve&&Pe&&!Pe.colormapLabel&&(Pe.colormapLabel=ve),B(R),yield K.updateGLVolume()})}function Ft(y){return Be(this,null,function*(){var L;if(typeof y=="string")try{y=JSON.parse(y)}catch(R){console.error("Failed to parse telemetry data",R);return}y=yield qa(y,(L=K.view)==null?void 0:L.gl),e=`:: Diagnostics https://github.com/neuroneural/brainchop/issues ::
`;for(const R in y)y[R]!==null&&y[R]!==void 0&&(e+=`${R}: ${y[R]}
`)})}function Zt(y){const L=String(y).split(" · ").map(R=>R.trim()).filter(R=>R!=="");return L.length<=1?Qt(String(y)):L.map((R,J)=>`<span class="loc-seg"${J>=2?' style="opacity:.75"':""}>${Qt(R)}</span>`).join('<span class="loc-sep">&middot;</span>')}function Gt(y="",L=-1,R="",J=[]){if(y){console.log(y);const ue=document.getElementById("location");ue&&(ue.innerHTML=Zt(y))}if(isNaN(L)){const ue=document.getElementById("memstatusItem");ue&&(ue.hidden=!1),memstatus.style.color="#ef4444",memstatus.textContent="Memory Issue"}else L>=0&&(modelProgress.value=L*modelProgress.max);R&&(On?(Vn.push(String(R)),console.warn("[backend]",R)):Kt("Message",Qt(String(R)).replace(/\n/g,"<br>"))),J&&Object.keys(J).length>0&&Ft(J)}function Lt(y){v=y.vox,document.getElementById("location").innerHTML=y.string.split("   ").map(L=>L.trim()).filter(L=>L!=="").map(L=>`<span class="loc-seg">${Qt(L)}</span>`).join('<span class="loc-sep">&middot;</span>')}const Et=new URLSearchParams(window.location.search).get("viewer")==="webgpu"?"webgpu":"webgl2",K=new Ir({backend:Et,matcaps:{Shiny:Gr}});yield K.attachTo("gl1"),console.info("NiiVue viewer backend:",K.backend),K.backgroundColor=[0,0,0,1],K.is3DCrosshairVisible=!0,K.clipPlaneColor=[.7,0,.7,.5],K.gamma=1,K.volumeTransforms.includes(Fs.name)||K.registerVolumeTransform(Fs),K.isLegendVisible=!1,K.addEventListener("locationChange",y=>Lt(y.detail)),K.canvas.addEventListener("click",Me),window.addEventListener("keydown",y=>{y.key==="Escape"&&(document.querySelector("dialog[open]")||(g!==null?(g=null,j()):c!==null&&(c=null,T())))});const wt=K.drawScene.bind(K);K.drawScene=function(y){const L=wt(y);try{ie()}catch(R){console.warn("isolation HUD draw failed",R)}return L},K.primaryDragMode=zs.crosshair,K.secondaryDragMode=zs.slicer3D,K.showRender=Er.ALWAYS,K.isYoked3DTo2DZoom=!1,K.crosshairGap=11;{const y=document.getElementById("dragSegmented");y&&y.querySelectorAll("button").forEach(L=>L.classList.toggle("active",parseInt(L.dataset.drag,10)===K.secondaryDragMode))}K.volumeIsNearestInterpolation=!0,yield K.loadVolumes([{url:"./t1_crop.nii.gz"}]),modelSelect.innerHTML="";const St=document.createElement("option");St.text="Run Segmentation Model",St.value="-1",St.disabled=!0,St.selected=!0,St.hidden=!0,modelSelect.appendChild(St);for(let y=0;y<hn.length;y++){console.log(`Adding model option: ${hn[y].modelName}`);const L=document.createElement("option");L.text=hn[y].modelName,L.value=y,hn[y].type==="Divider"&&(L.disabled=!0),modelSelect.appendChild(L)}K.addEventListener("volumeLoaded",Ye),Ye(),Ya(K),Da(K),modelSelect.value="-1",a(),x(-1),yield Ys((sn=K.view)==null?void 0:sn.gl);const Ut=new URLSearchParams(window.location.search).get("model");Ut!==null&&Ut!==""&&Number(Ut)>=0&&Number(Ut)<hn.length?(modelSelect.value=String(Number(Ut)),a(),H()):mn&&nn&&(window.requestIdleCallback?L=>window.requestIdleCallback(L,{timeout:600}):L=>setTimeout(L,200))(()=>xa(nn))})}function Qt(e){return String(e).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function ei(e){const n=(Vn.length?Vn:[e&&e.message?e.message:String(e||"unknown error")]).map(s=>`<li>${Qt(s)}</li>`).join("");Kt("Segmentation failed",`<p>No available backend could run this model on this device.</p>
     <ul style="margin:0 0 4px 1.1em;padding:0;font-size:0.92em;line-height:1.45">${n}</ul>
     <p style="font-size:0.88em;color:#9aa4af">Full details are in the browser console and under Diagnostics.</p>`)}function Kt(e,t,n={}){const s=document.getElementById("appDialog"),r=document.getElementById("dialogTitle"),i=document.getElementById("dialogMessage"),o=document.getElementById("dialogCloseBtn");if(!s)return;r.textContent=e,i.innerHTML=t,o.style.display=n.hideClose?"none":"",o.onclick=()=>s.close(),s.classList.toggle("dialog-save",!!n.saveMode),s.classList.toggle("dialog-stats",!!n.statsMode);const a=document.getElementById("dialogXBtn");a&&(a.onclick=()=>s.close()),s.showModal()}function ti(){return Be(this,null,function*(){try{const t=yield(yield fetch("https://api.github.com/repos/neuroneural/brainchop")).json();document.getElementById("star-count").textContent=t.stargazers_count}catch(e){console.error("Error fetching star count:",e)}})}(function(){return Be(this,null,function*(){yield Ja(),yield ti()})})();export{er as a,Js as d,Qs as p};
