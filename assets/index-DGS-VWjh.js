const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./dkatlas24_int8_v3_runner-6KL_UNmh.js","./vendor-niivue-Cvdr5q4M.js","./vendor-FBY2Vxgc.js","./vendor-math-oqRZD8Fx.js"])))=>i.map(i=>d[i]);
var Rr=Object.defineProperty,Ir=Object.defineProperties;var Gr=Object.getOwnPropertyDescriptors;var Rn=Object.getOwnPropertySymbols;var ks=Object.prototype.hasOwnProperty,Ms=Object.prototype.propertyIsEnumerable;var Ot=Math.pow,Ss=(e,t,n)=>t in e?Rr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,bt=(e,t)=>{for(var n in t||(t={}))ks.call(t,n)&&Ss(e,n,t[n]);if(Rn)for(var n of Rn(t))Ms.call(t,n)&&Ss(e,n,t[n]);return e},Ft=(e,t)=>Ir(e,Gr(t));var Ps=(e,t)=>{var n={};for(var s in e)ks.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&Rn)for(var s of Rn(e))t.indexOf(s)<0&&Ms.call(e,s)&&(n[s]=e[s]);return n};var Be=(e,t,n)=>new Promise((s,r)=>{var i=f=>{try{a(n.next(f))}catch(l){r(l)}},o=f=>{try{a(n.throw(f))}catch(l){r(l)}},a=f=>f.done?s(f.value):Promise.resolve(f.value).then(i,o);a((n=n.apply(e,t)).next())});import{z as Ln,$ as Er,t as Tr,L as As,Y as Or,M as zs,a as Nr,_ as Dr}from"./vendor-niivue-Cvdr5q4M.js";import{l as Vr,n as Hr,p as jr}from"./vendor-math-oqRZD8Fx.js";import"./vendor-FBY2Vxgc.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();const Xr="modulepreload",Yr=function(e,t){return new URL(e,t).href},Cs={},mt=function(t,n,s){let r=Promise.resolve();if(n&&n.length>0){let l=function(u){return Promise.all(u.map(m=>Promise.resolve(m).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),f=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=l(n.map(u=>{if(u=Yr(u,s),u in Cs)return;Cs[u]=!0;const m=u.endsWith(".css"),g=m?'[rel="stylesheet"]':"";if(s)for(let p=o.length-1;p>=0;p--){const d=o[p];if(d.href===u&&(!m||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${g}`))return;const c=document.createElement("link");if(c.rel=m?"stylesheet":Xr,m||(c.as="script"),c.crossOrigin="",c.href=u,f&&c.setAttribute("nonce",f),document.head.appendChild(c),m)return new Promise((p,d)=>{c.addEventListener("load",p),c.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return t().catch(i)})};function Kr(e){return new Worker(""+new URL("conform-worker-CLIpQIO-.js",import.meta.url).href,{name:e==null?void 0:e.name})}const zt=256,In=zt*zt*zt;function Zr(e,t){if(!(e instanceof ArrayBuffer))return e;switch(t){case 2:return new Uint8Array(e);case 4:return new Int16Array(e);case 8:return new Int32Array(e);case 16:return new Float32Array(e);case 64:return new Float64Array(e);case 256:return new Int8Array(e);case 512:return new Uint16Array(e);case 768:return new Uint32Array(e);case 1024:return new BigInt64Array(e);case 1280:return new BigUint64Array(e);default:return new Float32Array(e)}}function Qr(e){return e[0]*(e[5]*e[10]-e[6]*e[9])-e[1]*(e[4]*e[10]-e[6]*e[8])+e[2]*(e[4]*e[9]-e[5]*e[8])}function Jr(e){if(!e||e.length<16)return!1;for(let t=0;t<16;t++)if(!Number.isFinite(e[t]))return!1;return Math.abs(Qr(e))>=1e-6}function eo(e){const t=e[0],n=e[1],s=e[2],r=e[3],i=e[4],o=e[5],a=e[6],f=e[7],l=e[8],u=e[9],m=e[10],g=e[11],c=o*m-a*u,p=-(i*m-a*l),d=i*u-o*l,b=t*c+n*p+s*d;if(!Number.isFinite(b)||Math.abs(b)<1e-12)throw new Error("Cannot conform volume: singular affine transform.");const P=1/b,_=c*P,w=-(n*m-s*u)*P,v=(n*a-s*o)*P,y=p*P,h=(t*m-s*l)*P,k=-(t*a-s*i)*P,F=d*P,$=-(t*u-n*l)*P,M=(t*o-n*i)*P,x=-(_*r+w*f+v*g),C=-(y*r+h*f+k*g),z=-(F*r+$*f+M*g);return[_,w,v,x,y,h,k,C,F,$,M,z,0,0,0,1]}function to(e,t){const n=new Array(16);for(let s=0;s<3;s++){const r=s*4,i=e[r],o=e[r+1],a=e[r+2],f=e[r+3];n[r]=i*t[0]+o*t[4]+a*t[8],n[r+1]=i*t[1]+o*t[5]+a*t[9],n[r+2]=i*t[2]+o*t[6]+a*t[10],n[r+3]=i*t[3]+o*t[7]+a*t[11]+f}return n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function no(e,t,n,s,r=!1){const i=e*.5,o=t*.5,a=n*.5,f=s[0]*i+s[1]*o+s[2]*a+s[3],l=s[4]*i+s[5]*o+s[6]*a+s[7],u=s[8]*i+s[9]*o+s[10]*a+s[11],m=zt*.5;return r?[1,0,0,f-m,0,1,0,l-m,0,0,1,u-m,0,0,0,1]:[-1,0,0,f+m,0,0,1,l-m,0,-1,0,u+m,0,0,0,1]}function so(e,t=.999){const n=e.length;if(n===0)return{srcMin:0,srcMax:0,scale:1,flooredNegative:!1};let s=1/0,r=-1/0,i=0,o=0;for(let d=0;d<n;d++){let b=e[d];Number.isFinite(b)||(b=0,e[d]=0),b<s&&(s=b),b>r&&(r=b),(b>=1e-15||b<=-1e-15)&&i++,b<0&&o++}let a=!1;s<0&&100*o/n<2&&(s=0,a=!0);const f=Math.fround((r-s)/1e3);if(!(f>0)){for(let d=0;d<n;d++){const b=e[d];e[d]=b<=0?0:b>=255?255:b}return{srcMin:s,srcMax:r,scale:1,flooredNegative:a}}const l=new Uint32Array(1e3);for(let d=0;d<n;d++){const b=Math.fround((e[d]-s)/f),P=b<=0?0:b>=999?999:Math.trunc(b);l[P]++}const u=Math.max(0,Math.min(1,1-t)),m=n-Math.floor(u*i);let g=0,c=0;for(;c<999&&(g+=l[c],!(g+l[c+1]>=m));c++);r=Math.fround(c*f+s);const p=s!==r?Math.fround(255/(r-s)):1;for(let d=0;d<n;d++){const b=p*(e[d]-s);e[d]=b<=0?0:b>=255?255:b}return{srcMin:s,srcMax:r,scale:p,flooredNegative:a}}function ro({img:e,datatypeCode:t,dims:n,affine:s,sclSlope:r=1,sclInter:i=0,toRAS:o=!1,isLinear:a=!0,asFloat32:f=!1,fHigh:l=.999}){const u=n[1]|0,m=n[2]|0,g=n[3]|0;if(u<1||m<1||g<1)throw new Error(`Invalid input volume dimensions: [${u}, ${m}, ${g}]`);const c=Array.isArray(s[0])?s.flat():Array.from(s);if(!Jr(c))throw new Error("Cannot conform volume: invalid or singular affine matrix.");const p=Zr(e,t),d=u*m*g;if(!p||p.length<d)throw new Error(`Input buffer length (${p?p.length:0}) is smaller than ${u}x${m}x${g}`);const b=Number.isFinite(r)&&r!==0?r:1,P=Number.isFinite(i)?i:0,_=new Float32Array(d),w=p instanceof BigInt64Array||p instanceof BigUint64Array;let v=0;if(w)for(let M=0;M<d;M++){const x=Number(p[M])*b+P;Number.isFinite(x)?(_[M]=x,v++):_[M]=0}else if(b===1&&P===0)for(let M=0;M<d;M++){const x=p[M];Number.isFinite(x)?(_[M]=x,v++):_[M]=0}else for(let M=0;M<d;M++){const x=p[M]*b+P;Number.isFinite(x)?(_[M]=x,v++):_[M]=0}if(v===0)throw new Error("Input volume contains no finite voxel values.");so(_,l);const y=no(u,m,g,c,o),h=eo(c),k=to(h,y);let F=u===zt&&m===zt&&g===zt;for(let M=0;M<3&&F;M++){const x=M*4;let C=Math.abs(k[x+3]);for(let z=0;z<3;z++)C+=Math.abs(k[x+z]-(M===z?1:0))*(zt-1);F=C<.001}const $=f?new Float32Array(In):new Uint8Array(In);if(F)if(f)for(let M=0;M<In;M++)$[M]=_[M]*(1/255);else for(let M=0;M<In;M++){const x=_[M];$[M]=x<=0?0:x>=255?255:Math.round(x)}else{let M=_[0];for(let fe=1;fe<d;fe++)_[fe]<M&&(M=_[fe]);M!==0&&$.fill(f?M*(1/255):Math.min(255,Math.max(0,Math.round(M))));const x=k[0],C=k[1],z=k[2],R=k[3],I=k[4],T=k[5],B=k[6],G=k[7],ae=k[8],ce=k[9],N=k[10],W=k[11],X=u*m,J=u-1,D=m-1,ue=g-1,ie=1/255;let Ae=0;if(a)for(let fe=0;fe<zt;fe++){const $e=fe*z+R,j=fe*B+G,te=fe*N+W;for(let A=0;A<zt;A++){const K=A*C+$e,V=A*T+j,re=A*ce+te;for(let ee=0;ee<zt;ee++,Ae++){const Z=ee*x+K,E=ee*I+V,Y=ee*ae+re,q=Math.floor(Z),_e=Math.floor(E),ne=Math.floor(Y);if(q<0||_e<0||ne<0||q>=J||_e>=D||ne>=ue)continue;const Fe=Z-q,Ce=E-_e,Ie=Y-ne,qe=1-Fe,Je=1-Ce,Oe=1-Ie,Le=q+_e*u+ne*X,Se=_[Le]*qe+_[Le+1]*Fe,Ze=_[Le+u]*qe+_[Le+u+1]*Fe,pt=_[Le+X]*qe+_[Le+X+1]*Fe,ut=_[Le+u+X]*qe+_[Le+u+X+1]*Fe,ft=(Se*Je+Ze*Ce)*Oe+(pt*Je+ut*Ce)*Ie;if(f)$[Ae]=ft<=0?0:ft>=255?1:ft*ie;else{const At=Math.fround(ft);$[Ae]=At<=0?0:At>=255?255:Math.floor(At+.5)}}}}else for(let fe=0;fe<zt;fe++){const $e=fe*z+R,j=fe*B+G,te=fe*N+W;for(let A=0;A<zt;A++){const K=A*C+$e,V=A*T+j,re=A*ce+te;for(let ee=0;ee<zt;ee++,Ae++){const Z=Math.round(ee*x+K),E=Math.round(ee*I+V),Y=Math.round(ee*ae+re);if(Z<0||E<0||Y<0||Z>=u||E>=m||Y>=g)continue;const q=_[Z+E*u+Y*X];f?$[Ae]=q<=0?0:q>=255?1:q*ie:$[Ae]=q<=0?0:q>=255?255:Math.floor(q+.5)}}}}return{img:$,dims:[3,zt,zt,zt,1,1,1,1],pixDims:[1,1,1,1,1,0,0,0],affine:y,datatypeCode:f?16:2,bitsPerVoxel:f?32:8,sclSlope:1,sclInter:0,calMin:0,calMax:0}}let Mn=null,oo=1;const zn=new Map;function ao(e){Mn&&(Mn.terminate(),Mn=null);for(const{reject:t}of zn.values())t(e);zn.clear()}function io(){if(Mn)return Mn;const e=new Kr({});return e.onmessage=t=>{const{id:n,result:s,error:r}=t.data,i=zn.get(n);i&&(zn.delete(n),r?i.reject(new Error(r)):i.resolve(s))},e.onerror=t=>{const n=(t==null?void 0:t.message)||"Conform worker crashed";ao(new Error(n))},Mn=e,e}function lo(e){return typeof Worker=="undefined"?Promise.resolve(ro(e)):new Promise((t,n)=>{const s=oo++;zn.set(s,{resolve:t,reject:n});try{io().postMessage({id:s,payload:e})}catch(r){zn.delete(s),n(r)}})}function uo(e,t){const n=Object.assign(Object.create(Object.getPrototypeOf(e)||Object.prototype),JSON.parse(JSON.stringify(e)));return n.datatypeCode=t.datatypeCode,n.numBitsPerVoxel=t.bitsPerVoxel,n.scl_slope=t.sclSlope,n.scl_inter=t.sclInter,n.cal_min=t.calMin,n.cal_max=t.calMax,n.dims=t.dims,n.pixDims=t.pixDims,n.affine=[[t.affine[0],t.affine[1],t.affine[2],t.affine[3]],[t.affine[4],t.affine[5],t.affine[6],t.affine[7]],[t.affine[8],t.affine[9],t.affine[10],t.affine[11]],[0,0,0,1]],n.sform_code=1,n.qform_code=0,n}const co={name:"conform",description:"Reslice to 256×256×256 isotropic 1 mm volume with negative-ringing floor and 0–99.9% intensity scaling",options:[{name:"toRAS",type:"checkbox",label:"Output RAS orientation",default:!1},{name:"isLinear",type:"checkbox",label:"Linear interpolation",default:!0},{name:"asFloat32",type:"checkbox",label:"Output as Float32",default:!1}],apply(s,r){return Be(this,arguments,function*(e,t,n={}){var a,f,l,u;const i={img:t,datatypeCode:e.datatypeCode,dims:[...e.dims],affine:Array.isArray(e.affine[0])?e.affine.flat():[...e.affine],sclSlope:e.scl_slope||1,sclInter:e.scl_inter||0,toRAS:(a=n.toRAS)!=null?a:!1,isLinear:(f=n.isLinear)!=null?f:!0,asFloat32:(l=n.asFloat32)!=null?l:!1,fHigh:(u=n.fHigh)!=null?u:.999},o=yield lo(i);return{hdr:uo(e,o),img:o.img}})}},gn=new WeakMap;class fo{getLabelMeta(t){return gn.get(t)||null}idx(t,n,s,r){return s*r[0]*r[1]+n*r[0]+t}check_previous_slice(t,n,s,r,i,o,a,f,l,u){let m=0;if(!i)return 0;const g=t[this.idx(s,r,i,o)];if(a>=6){const c=this.idx(s,r,i-1,o);g===t[c]&&(l[m++]=n[c])}if(a>=18){if(s){const c=this.idx(s-1,r,i-1,o);g===t[c]&&(l[m++]=n[c])}if(r){const c=this.idx(s,r-1,i-1,o);g===t[c]&&(l[m++]=n[c])}if(s<o[0]-1){const c=this.idx(s+1,r,i-1,o);g===t[c]&&(l[m++]=n[c])}if(r<o[1]-1){const c=this.idx(s,r+1,i-1,o);g===t[c]&&(l[m++]=n[c])}}if(a===26){if(s&&r){const c=this.idx(s-1,r-1,i-1,o);g===t[c]&&(l[m++]=n[c])}if(s<o[0]-1&&r){const c=this.idx(s+1,r-1,i-1,o);g===t[c]&&(l[m++]=n[c])}if(s&&r<o[1]-1){const c=this.idx(s-1,r+1,i-1,o);g===t[c]&&(l[m++]=n[c])}if(s<o[0]-1&&r<o[1]-1){const c=this.idx(s+1,r+1,i-1,o);g===t[c]&&(l[m++]=n[c])}}return m?(this.fill_tratab(f,l,m,u),l[0]):0}do_initial_labelling(t,n,s,r=null){const i=n[0]|0,o=n[1]|0,a=n[2]|0,f=i*o,l=f*a;let u=1;const m=8192;let g=m,c=new Uint32Array(g),p;if(s===6&&r&&r.il&&r.il.length===l){if(p=r.il,r.dirty)p.fill(0);else if(r.runs&&r.runLen>0){const _=r.runs,w=r.runLen;for(let v=0;v<w;v+=2)p.fill(0,_[v],_[v+1])}}else p=new Uint32Array(l),s===6&&r&&(r.il=p,r.runs=null,r.runLen=0,r.dirty=!1);if(s===6){r&&(r.dirty=!0);const _=(t instanceof Uint8Array||t instanceof Uint8ClampedArray)&&(t.byteOffset&3)===0&&(i&3)===0&&t.length>=l?new Uint32Array(t.buffer,t.byteOffset,l>>2):null;let w=r&&r.runs?r.runs:new Uint32Array(8192),v=w.length,y=0,h=0,k=0,F=0,$=-1,M=-1,x=a,C=-1;for(let z=0;z<a;z++){const R=z*f;for(let I=0;I<o;I++){const T=R+I*i;let B=0;if(_){const ae=T+i>>2;let ce=T>>2;for(;ce<ae&&_[ce]===0;)ce++;if(ce===ae)continue;B=(ce<<2)-T}let G=!1;for(;B<i;B++){const ae=T+B;if(_&&!G&&(B&3)===0&&_[ae>>2]===0){B+=3;continue}const ce=t[ae];if(ce===0){G&&(w[y++]=ae,G=!1);continue}if(!G){if(y+2>v){v<<=1;const W=new Uint32Array(v);W.set(w),w=W}w[y++]=ae,G=!0}$<0&&($=ae,x=z),M=ae,C=z;let N=0;if(z>0&&t[ae-f]===ce&&(h=p[ae-f],N=1),B>0&&t[ae-1]===ce){const W=p[ae-1];N===0?h=W:N===1?k=W:F=W,N++}if(I>0&&t[ae-i]===ce){const W=p[ae-i];N===0?h=W:N===1?k=W:F=W,N++}if(N===0){if(p[ae]=u,u>=g){g+=m;const W=new Uint32Array(g);W.set(c),c=W}c[u-1]=u,u++}else if(p[ae]=h,N===2&&k!==h){let W=h;for(;c[W-1]!==W;)W=c[W-1];let X=k;for(;c[X-1]!==X;)X=c[X-1];const J=W<X?W:X;c[W-1]=J,c[X-1]=J}else if(N===3&&(k!==h||F!==h)){let W=h;for(;c[W-1]!==W;)W=c[W-1];let X=k;for(;c[X-1]!==X;)X=c[X-1];let J=F;for(;c[J-1]!==J;)J=c[J-1];let D=W<X?W:X;J<D&&(D=J),c[W-1]=D,c[X-1]=D,c[J-1]=D}}G&&(w[y++]=T+i)}}for(let z=0;z<u-1;z++){let R=z;for(;c[R]!==R+1;)R=c[R]-1;c[z]=R+1}return r&&(r.runs=w,r.runLen=y,r.dirty=!1),this._lastInitialRange={conn:6,fgStart:$,fgEnd:M,minSl:x,maxSl:C,runs:w,runLen:y},[u-1,c,p]}const d=new Uint32Array(32),b=new Uint32Array(32),P=new Uint32Array(27);for(let _=0;_<a;_++)for(let w=0;w<o;w++)for(let v=0;v<i;v++){let y=0;const h=t[this.idx(v,w,_,n)];if(h!==0){if(P[0]=this.check_previous_slice(t,p,v,w,_,n,s,c,d,b),P[0]&&(y+=1),s>=6){if(v){const k=this.idx(v-1,w,_,n);h===t[k]&&(P[y++]=p[k])}if(w){const k=this.idx(v,w-1,_,n);h===t[k]&&(P[y++]=p[k])}}if(s>=18){if(w&&v){const k=this.idx(v-1,w-1,_,n);h===t[k]&&(P[y++]=p[k])}if(w&&v<i-1){const k=this.idx(v+1,w-1,_,n);h===t[k]&&(P[y++]=p[k])}}if(y)p[this.idx(v,w,_,n)]=P[0],this.fill_tratab(c,P,y,b);else{if(p[this.idx(v,w,_,n)]=u,u>=g){g+=m;const k=new Uint32Array(g);k.set(c),c=k}c[u-1]=u,u++}}}for(let _=0;_<u-1;_++){let w=_;for(;c[w]!==w+1;)w=c[w]-1;c[_]=w+1}return this._lastInitialRange=null,[u-1,c,p]}fill_tratab(t,n,s,r){let o=2147483647;for(let a=0;a<s;a++){let f=n[a];for(;t[f-1]!==f;)f=t[f-1];r[a]=f,o=Math.min(o,f)}for(let a=0;a<s;a++)t[r[a]-1]=o}translate_labels(t,n,s,r,i=null,o=null){const a=n[0]*n[1]*n[2];if(o&&(r===0||o.fgStart<0))return i&&(this._lastMeta={conn:o.conn,cl:0,fgStart:0,fgEnd:-1,minSl:0,maxSl:-1,ls2bw:new Uint32Array(1),sumls:new Uint32Array(1),distinctFgClasses:0,bw:i}),[0,t];let f=0;for(let d=0;d<r;d++)s[d]>f&&(f=s[d]);const l=new Uint32Array(f+1),u=i&&o?new Uint32Array(r+1):null,m=i&&o?new Uint32Array(r+1):null,g=o?o.fgStart:0,c=o?o.fgEnd:a-1;let p=0;if(o&&o.runs){const d=o.runs,b=o.runLen;for(let P=0;P<b;P+=2){const _=d[P],w=d[P+1];for(let v=_;v<w;v++){const y=s[t[v]-1];let h=l[y];h||(p+=1,h=p,l[y]=h,u&&(u[h]=i[v])),t[v]=h,m&&m[h]++}}}else for(let d=g;d<=c;d++){const b=t[d];if(b){const P=s[b-1];let _=l[P];_||(p+=1,_=p,l[P]=_,u&&(u[_]=i[d])),t[d]=_,m&&m[_]++}}if(i&&o){const d=u.slice(0,p+1),b=m.slice(0,p+1);let P=0;if(p>0){const _=d[1];P=1;for(let w=2;w<=p;w++)if(d[w]!==_){P=2;break}}this._lastMeta={conn:o.conn,cl:p,fgStart:o.fgStart,fgEnd:o.fgEnd,minSl:o.minSl,maxSl:o.maxSl,runs:o.runs,runLen:o.runLen,ls2bw:d,sumls:b,distinctFgClasses:P,bw:i}}return[p,t]}neighbor_winners(t,n,s,r,i=null,o=null){const a=n[0],f=n[1],l=n[2],u=a*f,m=!!(o&&i);let g=!1;for(let v=1;v<=r;v++)if(!s[v]){g=!0;break}if(!g)return m&&console.log("[relabel] 0/0 suppressed components resolved within their own class family (0 fell back to the unrestricted neighbour vote)"),new Uint32Array(r+1);const c=m?new Int32Array(r+1).fill(-1):null,p=new Map,d=(v,y)=>{let h=p.get(v);h||(h=new Map,p.set(v,h)),h.set(y,(h.get(y)||0)+1)},b=gn.get(t),P=b&&b.cl===r&&t.length===u*l;if(P&&b.runs){const v=b.runs,y=b.runLen;for(let h=0;h<y;h+=2){const k=v[h],F=v[h+1],$=k/u|0,M=k-$*u,x=M/a|0;let C=M-x*a;for(let z=k;z<F;z++,C++){const R=t[z];if(s[R])continue;m&&c[R]<0&&(c[R]=o(i[z]));let I;C>0&&(I=s[t[z-1]])&&d(R,I),C<a-1&&(I=s[t[z+1]])&&d(R,I),x>0&&(I=s[t[z-a]])&&d(R,I),x<f-1&&(I=s[t[z+a]])&&d(R,I),$>0&&(I=s[t[z-u]])&&d(R,I),$<l-1&&(I=s[t[z+u]])&&d(R,I)}}}else{const v=P?b.minSl:0,y=P?b.maxSl:l-1;let h=v*u;for(let k=v;k<=y;k++)for(let F=0;F<f;F++)for(let $=0;$<a;$++,h++){const M=t[h];if(M===0||s[M])continue;m&&c[M]<0&&(c[M]=o(i[h]));let x;$>0&&(x=s[t[h-1]])&&d(M,x),$<a-1&&(x=s[t[h+1]])&&d(M,x),F>0&&(x=s[t[h-a]])&&d(M,x),F<f-1&&(x=s[t[h+a]])&&d(M,x),k>0&&(x=s[t[h-u]])&&d(M,x),k<l-1&&(x=s[t[h+u]])&&d(M,x)}}const _=new Uint32Array(r+1).fill(0);let w=0;for(const[v,y]of p){const h=m?c[v]:0;let k=0,F=0;if(h>0){for(const[$,M]of y)o($)===h&&(M>F||M===F&&(k===0||$<k))&&(F=M,k=$);k&&w++}if(!k)for(const[$,M]of y)(M>F||M===F&&(k===0||$<k))&&(F=M,k=$);_[v]=k}return m&&console.log(`[relabel] ${w}/${p.size} suppressed components resolved within their own class family (${p.size-w} fell back to the unrestricted neighbour vote)`),_}finalize_volume(t,n,s,r,i,o=null,a=null,f=!1){const l=t.length,u=i?this.neighbor_winners(t,n,s,r,o,a):null,m=u?new Uint32Array(r+1):s;let g=0;for(let _=1;_<=r;_++){let w=s[_];u&&(w||(w=u[_]),m[_]=w),w>g&&(g=w)}const c=gn.get(t),p=c&&c.cl===r&&c.ls2bw.length===r+1&&c.fgEnd<l;let d=0;if(p&&c.runs){const _=c.runs,w=c.runLen;for(let h=1;h<=r;h++)c.sumls[h]>0&&m[h]>d&&(d=m[h]);if(c.bw===o&&o instanceof Uint8Array&&g<=255){const h=new Uint8Array(r+1);let k=!1;for(let $=1;$<=r;$++)c.sumls[$]>0&&m[$]!==c.ls2bw[$]&&(h[$]=1,k=!0);const F=f?o:o.slice();if(k)for(let $=0;$<w;$+=2){const M=_[$],x=_[$+1];for(let C=M;C<x;C++){const z=t[C];h[z]&&(F[C]=m[z])}}return[d,F]}const y=o instanceof Uint8Array&&g<=255?new Uint8Array(l):new Uint32Array(l);for(let h=0;h<w;h+=2){const k=_[h],F=_[h+1];for(let $=k;$<F;$++){const M=m[t[$]];M&&(y[$]=M)}}return[d,y]}const P=o instanceof Uint8Array&&g<=255?new Uint8Array(l):new Uint32Array(l);if(p){if(c.fgStart>=0&&c.fgEnd>=c.fgStart)for(let _=c.fgStart;_<=c.fgEnd;_++){const w=t[_];if(w!==0){const v=m[w];v&&(P[_]=v,v>d&&(d=v))}}}else for(let _=0;_<l;_++){const w=t[_];if(w!==0){const v=m[w];v&&(P[_]=v,v>d&&(d=v))}}return[d,P]}diagnose_components(t,n,s,r,i={}){var $,M,x;const o=($=i.topN)!=null?$:50,a=(M=i.minSize)!=null?M:1,f=(x=i.label)!=null?x:"diag",l=r[0],u=r[1],m=r[2],g=l*u,c=new Uint32Array(n+1),p=new Uint32Array(n+1);for(let C=0;C<t.length;C++){const z=s[C];z&&(c[z]=t[C],p[z]++)}const d=new Map,b=new Uint32Array(n+1),P=new Uint32Array(n+1),_=(C,z)=>{let R=d.get(C);R||(R=new Map,d.set(C,R)),R.set(z,(R.get(z)||0)+1)};for(let C=0;C<m;C++)for(let z=0;z<u;z++)for(let R=0;R<l;R++){const I=C*g+z*l+R,T=s[I];if(!T)continue;const B=c[T],G=ae=>{const ce=s[ae];if(ce===T)return;P[T]++;const N=ce?c[ce]:0;N===0?b[T]++:N!==B&&_(T,N)};R>0&&G(I-1),R<l-1&&G(I+1),z>0&&G(I-l),z<u-1&&G(I+l),C>0&&G(I-g),C<m-1&&G(I+g)}const w=new Map,v=new Map;for(let C=1;C<=n;C++){const z=c[C];w.set(z,(w.get(z)||0)+1),(!v.has(z)||p[C]>v.get(z))&&v.set(z,p[C])}const y=[];for(let C=1;C<=n;C++){if(p[C]<a)continue;const z=c[C],R=d.get(C);let I=0,T=0,B=0;if(R)for(const[ae,ce]of R)B+=ce,ce>T&&(T=ce,I=ae);const G=P[C]||1;y.push({comp:C,class:z,size:p[C],largestOfClass:p[C]===v.get(z)?"Y":"n",compsInClass:w.get(z),domNeighbor:I,domFracForeign:B?+(T/B).toFixed(2):0,domFracBoundary:+(T/G).toFixed(2),bgFrac:+(b[C]/G).toFixed(2)})}y.sort((C,z)=>z.domFracForeign-C.domFracForeign||z.size-C.size);const h=(C,z)=>{const R=z.map(T=>Math.max(T.h.length,...C.map(B=>String(B[T.k]).length))),I=T=>T.map((B,G)=>String(B).padStart(R[G])).join("  ");return[I(z.map(T=>T.h)),...C.map(T=>I(z.map(B=>T[B.k])))].join(`
`)},k=[{k:"comp",h:"comp"},{k:"class",h:"class"},{k:"size",h:"size"},{k:"largestOfClass",h:"lrg"},{k:"compsInClass",h:"nComp"},{k:"domNeighbor",h:"domNbr"},{k:"domFracForeign",h:"encF"},{k:"domFracBoundary",h:"encB"},{k:"bgFrac",h:"bgF"}];console.log(`[${f}] total components=${n}, distinct classes=${w.size}
[${f}] island candidates (encF≈1 + small size + lrg=n ⇒ swallowed island):
`+h(y.slice(0,o),k));const F=[...w.entries()].map(([C,z])=>({class:C,components:z,maxCompSize:v.get(C)})).sort((C,z)=>z.components-C.components);return console.log(`[${f}] per-class component counts (components=1 ⇒ fully connected):
`+h(F.slice(0,30),[{k:"class",h:"class"},{k:"components",h:"comps"},{k:"maxCompSize",h:"maxSize"}])),y}_collectComponentStats(t,n,s){const r=gn.get(s);if(r&&r.cl===n&&r.bw===t&&s.length===t.length)return[r.ls2bw,r.sumls];const i=t.length,o=new Uint32Array(n+1),a=new Uint32Array(n+1);for(let f=0;f<i;f++){const l=s[f];l>0&&(o[l]=t[f],a[l]++)}return[o,a]}_buildKeptMap(t,n,s,r,i){const o=new Uint32Array(s+1);let a=0;for(let l=1;l<=s;l++)t[l]>a&&(a=t[l]);const f=r==="all";if(a<=65535){const l=new Uint32Array(a+1),u=new Uint32Array(a+1);for(let m=1;m<=s;m++){const g=t[m];if(g!==0)if(f||r&&r.has&&r.has(g)){const c=n[m];(!u[g]||(i?c>=l[g]:c>l[g]))&&(l[g]=c,u[g]=m)}else o[m]=g}for(let m=1;m<=a;m++){const g=u[m];g>0&&(o[g]=m)}}else{const l=new Map;for(let u=1;u<=s;u++){const m=t[u];if(m!==0)if(f||r&&r.has&&r.has(m)){const g=n[u],c=l.get(m);(!c||(i?g>=c.sz:g>c.sz))&&l.set(m,{c:u,sz:g})}else o[u]=m}for(const[u,{c:m}]of l)o[m]=u}return o}largest_original_cluster_labels(t,n,s,r=null,i=!1,o=null,a=!1){const[f,l]=this._collectComponentStats(t,n,s),u=this._buildKeptMap(f,l,n,"all",!0);return this.finalize_volume(s,r,u,n,i,t,o,a)}filter_clusters(t,n,s,r,i=null,o=!1,a=null,f=!1){const[l,u]=this._collectComponentStats(t,n,s),m=this._buildKeptMap(l,u,n,r,!1);return this.finalize_volume(s,i,m,n,o,t,a,f)}filter_clusters_by_ratio(t,n,s,r,i=null,o=!1,a=null){const f=t.length,l=new Uint32Array(n+1).fill(0),u=new Uint32Array(n+1).fill(0);for(let p=0;p<f;p++){const d=s[p];d>0&&(l[d]===0&&(l[d]=t[p]),u[d]++)}const m=new Map;for(let p=1;p<=n;p++){const d=l[p],b=u[p];(!m.has(d)||b>m.get(d))&&m.set(d,b)}const g=new Uint8Array(n+1).fill(0);for(let p=1;p<=n;p++){const d=l[p],b=u[p],P=m.get(d)||0;b>=P*r&&(g[p]=1)}const c=new Uint32Array(n+1).fill(0);for(let p=1;p<=n;p++)g[p]&&(c[p]=l[p]);return this.finalize_volume(s,i,c,n,o,t,a)}_binaryComponentsFromLabels(t,n,s,r,i=!1){const o=r[0]|0,a=r[1]|0,f=r[2]|0,l=o*a,u=gn.get(s),m=u&&u.cl===n&&s.length===l*f&&(!i||u.bw===t);if(m&&u.conn===6&&u.distinctFgClasses<=1){const _=new Uint32Array(n+1);let w=0,v=0;for(let y=1;y<=n;y++){_[y]=y;const h=u.sumls[y];h>0&&h>=v&&(v=h,w=y)}return{parent:_,compSize:u.sumls,compClass:i?u.ls2bw:null,bestRoot:w}}const g=m?u.sumls:new Uint32Array(n+1),c=m?i?u.ls2bw:null:i?new Uint32Array(n+1):null,p=new Uint32Array(n+1);for(let _=1;_<=n;_++)p[_]=_;if(m&&u.conn===6&&u.runs&&u.bw===t){const _=(y,h)=>{for(;p[y]!==y;)p[y]=p[p[y]],y=p[y];for(;p[h]!==h;)p[h]=p[p[h]],h=p[h];y!==h&&(y<h?p[h]=y:p[y]=h)},w=u.runs,v=u.runLen;for(let y=0;y<v;y+=2){const h=w[y],k=w[y+1],F=h/l|0,$=h-F*l,M=$/o|0;let x=$-M*o;for(let C=h;C<k;C++,x++){const z=t[C];let R=0;if(F>0){const I=t[C-l];I!==0&&I!==z&&(R=s[C],_(R,s[C-l]))}if(M>0){const I=t[C-o];I!==0&&I!==z&&(R||(R=s[C]),_(R,s[C-o]))}if(x>0){const I=t[C-1];I!==0&&I!==z&&(R||(R=s[C]),_(R,s[C-1]))}}}}else{const _=m?u.minSl:0,w=m?u.maxSl:f-1;let v=_*l;for(let y=_;y<=w;y++)for(let h=0;h<a;h++)for(let k=0;k<o;k++,v++){const F=s[v];if(F===0)continue;m||(g[F]++,c&&c[F]===0&&(c[F]=t[v]));let $=F;for(;p[$]!==$;)p[$]=p[p[$]],$=p[$];if(y>0){const M=s[v-l];if(M!==0&&M!==F){let x=M;for(;p[x]!==x;)p[x]=p[p[x]],x=p[x];$!==x&&($<x?p[x]=$:(p[$]=x,$=x))}}if(h>0){const M=s[v-o];if(M!==0&&M!==F){let x=M;for(;p[x]!==x;)p[x]=p[p[x]],x=p[x];$!==x&&($<x?p[x]=$:(p[$]=x,$=x))}}if(k>0){const M=s[v-1];if(M!==0&&M!==F){let x=M;for(;p[x]!==x;)p[x]=p[p[x]],x=p[x];$!==x&&($<x?p[x]=$:p[$]=x)}}}}const d=new Uint32Array(n+1);for(let _=1;_<=n;_++){let w=_;for(;p[w]!==w;)w=p[w];p[_]=w,d[w]+=g[_]}let b=0,P=0;for(let _=1;_<=n;_++){const w=d[_];w>0&&w>=P&&(P=w,b=_)}return{parent:p,compSize:g,compClass:c,bestRoot:b}}applyLargestBinaryMaskInPlace(t,n,s,r){const i=t.length;if(n===0)return t.fill(0),t;const o=gn.get(s),a=o&&o.cl===n&&s.length===i;if(a&&o.conn===6&&o.distinctFgClasses<=1){let u=0,m=0;for(let g=1;g<=n;g++){const c=o.sumls[g];c>0&&c>=m&&(m=c,u=g)}if(o.runs&&o.bw===t){if(n>1){const g=o.runs,c=o.runLen;for(let p=0;p<c;p+=2){const d=g[p],b=g[p+1];for(let P=d;P<b;P++)s[P]!==u&&(t[P]=0)}}return t}if(o.fgStart>0&&t.fill(0,0,o.fgStart),o.fgEnd>=o.fgStart){for(let g=o.fgStart;g<=o.fgEnd;g++)s[g]!==u&&(t[g]=0);o.fgEnd+1<i&&t.fill(0,o.fgEnd+1)}else t.fill(0);return t}const{parent:f,bestRoot:l}=this._binaryComponentsFromLabels(t,n,s,r,!1);if(a&&o.runs&&o.bw===t){const u=o.runs,m=o.runLen;for(let g=0;g<m;g+=2){const c=u[g],p=u[g+1];for(let d=c;d<p;d++)f[s[d]]!==l&&(t[d]=0)}return t}if(a&&o.fgEnd>=o.fgStart){o.fgStart>0&&t.fill(0,0,o.fgStart);for(let u=o.fgStart;u<=o.fgEnd;u++){const m=s[u];(m===0||f[m]!==l)&&(t[u]=0)}o.fgEnd+1<i&&t.fill(0,o.fgEnd+1)}else for(let u=0;u<i;u++){const m=s[u];(m===0||f[m]!==l)&&(t[u]=0)}return t}filterHierarchicalFromLabels(t,n,s,r,i="all",o=!0,a=!1,f=null,l=!1){if(n===0)return[0,t instanceof Uint8Array?l?t:new Uint8Array(t.length):new Uint32Array(t.length)];const{parent:u,compSize:m,compClass:g,bestRoot:c}=this._binaryComponentsFromLabels(t,n,s,r,!0),p=new Uint32Array(n+1);for(let b=1;b<=n;b++)u[b]===c&&(p[b]=g[b]);const d=this._buildKeptMap(p,m,n,i,o);return this.finalize_volume(s,r,d,n,a,t,f,l)}filter18ClassFromLabels(t,n,s,r,i,o=!1,a=null,f=!1){return this.filterHierarchicalFromLabels(t,n,s,r,i,!1,o,a,f)}bwlabel(t,n,s=26,r=!1,i=!1,o=null){const a=Date.now(),f=n[0]*n[1]*n[2];if(![6,18,26].includes(s))return console.log("bwlabel: conn must be 6, 18 or 26."),[0,new Uint32Array(f)];if(n[0]<2||n[1]<2||n[2]<1)return console.log("bwlabel: img must be 2 or 3-dimensional"),[0,new Uint32Array(f)];let l;if(r){l=new Uint8Array(f);for(let d=0;d<f;d++)t[d]!==0&&(l[d]=1)}else t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Uint16Array||t instanceof Uint32Array||t instanceof Int8Array||t instanceof Int16Array||t instanceof Int32Array?t.length===f?l=t:(l=new Uint32Array(f),l.set(t.subarray(0,f))):(l=new Uint32Array(f),l.set(t));this._lastInitialRange=null,this._lastMeta=null;let[u,m,g]=this.do_initial_labelling(l,n,s,o);m===void 0&&(m=new Uint32Array(0));const[c,p]=this.translate_labels(g,n,m,u,l,this._lastInitialRange);if(this._lastMeta&&gn.set(p,this._lastMeta),console.log(s+" neighbor clustering into "+c+" regions in "+(Date.now()-a)+"ms"),i){const[d,b]=this.largest_original_cluster_labels(l,c,p);return[d,b]}return[c,p]}filter_clusters_by_rank(t,n,s,r,i=0,o=null,a=!1,f=null,l=!1,u=null){const m=t.length,g=new Uint32Array(n+1).fill(0),c=new Uint32Array(n+1).fill(0),p=f!=null&&Array.isArray(o)&&o.length===3,d=p?o[0]:0,b=p?o[1]:0,P=p?new Int32Array(n+1).fill(2147483647):null,_=p?new Int32Array(n+1).fill(-1):null,w=p?new Int32Array(n+1).fill(2147483647):null,v=p?new Int32Array(n+1).fill(-1):null,y=p?new Int32Array(n+1).fill(2147483647):null,h=p?new Int32Array(n+1).fill(-1):null;for(let C=0;C<m;C++){const z=s[C];if(z>0&&(g[z]===0&&(g[z]=t[C]),c[z]++,p)){const R=C%d,I=C/d|0,T=I%b,B=I/b|0;R<P[z]&&(P[z]=R),R>_[z]&&(_[z]=R),T<w[z]&&(w[z]=T),T>v[z]&&(v[z]=T),B<y[z]&&(y[z]=B),B>h[z]&&(h[z]=B)}}let k=null,F=0;if(p){let C=-1;for(let G=1;G<=n;G++)c[G]>C&&(C=c[G],F=G);const z=Math.max(2,Math.ceil(f)+4),R=d*b,I=new Int16Array(m).fill(-1);let T=[];for(let G=0;G<m;G++)s[G]===F&&(I[G]=0,T.push(G));for(let G=1;G<=z&&T.length;G++){const ae=[];for(let ce=0;ce<T.length;ce++){const N=T[ce],W=N%d,J=(N/d|0)%b;W>0&&I[N-1]===-1&&(I[N-1]=G,ae.push(N-1)),W<d-1&&I[N+1]===-1&&(I[N+1]=G,ae.push(N+1)),J>0&&I[N-d]===-1&&(I[N-d]=G,ae.push(N-d)),J<b-1&&I[N+d]===-1&&(I[N+d]=G,ae.push(N+d)),N-R>=0&&I[N-R]===-1&&(I[N-R]=G,ae.push(N-R)),N+R<m&&I[N+R]===-1&&(I[N+R]=G,ae.push(N+R))}T=ae}const B=z+1;k=new Float64Array(n+1).fill(B);for(let G=0;G<m;G++){const ae=s[G];if(ae>0&&ae!==F){const ce=I[G]>=0?I[G]:B;ce<k[ae]&&(k[ae]=ce)}}l&&console.log(`[rank-filter] brain comp=${F} size=${C} bbox A[${P[F]},${_[F]}] B[${w[F]},${v[F]}] C[${y[F]},${h[F]}] | maxGap=${f} scan=${z}`)}const $=new Map;for(let C=1;C<=n;C++){const z=g[C],R=c[C];$.has(z)||$.set(z,[]),$.get(z).push({i:C,size:R})}const M=new Uint8Array(n+1).fill(0);for(const[C,z]of $.entries()){z.sort((B,G)=>G.size-B.size);const R=z.length?z[0].size:0,I=i>0?R*i:0,T=Math.min(z.length,r);for(let B=0;B<T;B++){const G=z[B];if(G.size<I){l&&B>0&&console.log(`[rank-filter] class ${C} #${B}: size=${G.size} DROP (below ${(i*100).toFixed(0)}% floor)`);break}if(B>0&&p){const ae=k[G.i],ce=ae<=f;if(l&&console.log(`[rank-filter] class ${C} #${B}: size=${G.size} surfDist=${ae} -> ${ce?"KEEP":"DROP (too far)"}`),!ce)continue}M[G.i]=1}}const x=new Uint32Array(n+1).fill(0);for(let C=1;C<=n;C++)M[C]&&(x[C]=g[C]);return this.finalize_volume(s,o,x,n,a,t,u)}}function po(e){if(!(e!=null&&e.length))throw new Error("Segmentation volume is empty.");let t=0;if((e instanceof Uint8Array||e instanceof Uint8ClampedArray)&&(e.byteOffset&3)===0&&e.length>=4){const n=e.length>>2,s=new Uint32Array(e.buffer,e.byteOffset,n);for(let r=0;r<n;r++){const i=s[r];i!==0&&(i&255&&t++,i&65280&&t++,i&16711680&&t++,i&4278190080&&t++)}for(let r=n<<2;r<e.length;r++)e[r]!==0&&t++}else if(e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Uint16Array||e instanceof Uint32Array)for(let n=0;n<e.length;n++)e[n]!==0&&t++;else for(let n=0;n<e.length;n++){const s=e[n];if(!Number.isFinite(s)||s<0)throw new Error(`Segmentation contains an invalid label at voxel ${n}: ${s}.`);s!==0&&t++}if(t===0)throw new Error("Segmentation volume contains no foreground labels.");if(t>e.length*.95)throw new Error(`Segmentation fills ${(100*t/e.length).toFixed(1)}% of the volume; GPU output is unusable.`)}const mo={il:null,runs:null,runLen:0,dirty:!1};function go(e,t=.05,n=.95){const s=e.length;if(s===0)return{qmin:0,qmax:0};if(e instanceof Uint8Array||e instanceof Uint8ClampedArray){const f=Math.max(0,Math.min(s-1,Math.floor(s*t))),l=Math.max(0,Math.min(s-1,Math.ceil(s*n)-1)),u=new Uint32Array(256);for(let b=0;b<s;b++)u[e[b]]++;let m=0,g=0,c=0,p=!1,d=!1;for(let b=0;b<256;b++){const P=u[b];if(P!==0&&(m+=P,!p&&m>f&&(g=b,p=!0),!d&&m>l&&(c=b,d=!0),p&&d))break}return{qmin:g,qmax:c}}const r=Math.min(1e5,s),i=Math.max(0,Math.min(r-1,Math.floor(r*t))),o=Math.max(0,Math.min(r-1,Math.ceil(r*n)-1)),a=new Float64Array(r);if(r>=s)a.set(e);else{const f=.6180339887498949;let l=.5;for(let u=0;u<r;u++)l+=f,l>=1&&(l-=1),a[u]=e[Math.floor(l*s)]}return a.sort(),{qmin:a[i],qmax:a[o]}}function _o(e){const t=e.length;if(t===0)return{min:0,max:0};let n=e[0],s=e[0];if(e instanceof Uint8Array||e instanceof Uint8ClampedArray){for(let r=1;r<t;r++){const i=e[r];if(i<n?n=i:i>s&&(s=i),n===0&&s===255)break}return{min:n,max:s}}for(let r=1;r<t;r++){const i=e[r];i<n&&(n=i),i>s&&(s=i)}return{min:n,max:s}}function Bs(e,t,n){const s=e.length,r=new Float32Array(s);if(e instanceof Uint8Array||e instanceof Uint8ClampedArray){const i=new Float32Array(256);for(let o=0;o<256;o++)i[o]=(o-t)/n;for(let o=0;o<s;o++)r[o]=i[e[o]];return r}for(let i=0;i<s;i++)r[i]=(e[i]-t)/n;return r}function Js(e,t,n,s){const r=t[0]|0,i=t[1]|0,o=t[2]|0,a=r*i*o,f=new s(a);if(n[0]===2&&n[1]===1&&n[2]===0&&a===e.length){const b=i*o,P=i*r,_=16;for(let w=0;w<i;w++){const v=w*o,y=w*r;for(let h=0;h<r;h+=_){const k=Math.min(h+_,r);for(let F=0;F<o;F+=_){const $=Math.min(F+_,o);for(let M=h;M<k;M++){let x=M*b+v+F,C=F*P+y+M;for(let z=F;z<$;z++,x++,C+=P)f[C]=e[x]}}}}return f}const l=[r,i,o],u=[l[n[0]],l[n[1]],l[n[2]]],m=[i*o,o,1],g=m[n[0]],c=m[n[1]],p=m[n[2]];let d=0;for(let b=0;b<u[0];b++){const P=b*g;for(let _=0;_<u[1];_++){const w=P+_*c;for(let v=0;v<u[2];v++,d++)f[d]=e[w+v*p]}}return f}function Sn(e,t=[256,256,256],n=[2,1,0]){return Js(e,t,n,Float32Array)}function bo(e,t=[256,256,256],n=[2,1,0]){return Js(e,t,n,Uint8Array)}function is(e){const t=new Uint32Array(256);for(let n=0;n<e.length;n++)t[e[n]]++;return t}function ho(e){const t=is(e);let n=0;for(let s=0;s<256;s++)t[s]>0&&n++;return n}function Fs(e,t=!1,n="output"){let s=0,r=1/0,i=-1/0;if(!t&&(e instanceof Uint8Array||e instanceof Uint8ClampedArray)){if(e.length>0){let o=255,a=0,f=0;if((e.byteOffset&3)===0&&e.length>=4){const l=e.length>>2,u=new Uint32Array(e.buffer,e.byteOffset,l);for(let m=0;m<l;m++){const g=u[m];if(g===0){o=0;continue}const c=g&255,p=g>>>8&255,d=g>>>16&255,b=g>>>24;s+=c+p+d+b,c<o&&(o=c),c>a&&(a=c),p<o&&(o=p),p>a&&(a=p),d<o&&(o=d),d>a&&(a=d),b<o&&(o=b),b>a&&(a=b)}f=l<<2}for(let l=f;l<e.length;l++){const u=e[l];s+=u,u<o&&(o=u),u>a&&(a=u)}r=o,i=a}}else for(let o=0;o<e.length;o++){const a=e[o];if(!Number.isFinite(a))throw new Error(`Model ${n} contains NaN or Inf values.`);s+=a,a<r&&(r=a),a>i&&(i=a)}if(console.log(`${t?"Probability":"Segmentation"} volume sum: ${s}`),s===0)throw new Error(t?"Model probability output is all zeros. This may indicate an issue with WebGPU shaders or input data.":"Model produced an empty segmentation (all zeros). This may indicate an issue with WebGPU shaders or input data.");if(t&&(r<-1e-6||i>1+1e-6))throw new Error(`Probability output values out of range [0, 1]: min=${r.toFixed(4)}, max=${i.toFixed(4)}`);return{sum:s,min:r,max:i}}function wo(e,t,n,s,r=null,i=null){return Be(this,null,function*(){const o=!!(e&&typeof e.data=="function");let a,f;o?(console.log("Downloading segmentation data from GPU to CPU..."),a=yield e.data(),f=e.shape||i||[256,256,256],console.log("Data download complete. Starting CPU processing.")):(a=e,f=i||[256,256,256]),po(a);let l,u=!1;if(a instanceof Uint8Array)l=a,u=!o;else{let g=0;for(let c=0;c<a.length;c++)a[c]>g&&(g=a[c]);l=g<=255?new Uint8Array(a):new Uint32Array(a),u=!0}let m=null;if(s.isPostProcessEnable){console.log("Applying CPU-based connected-component labeling...");const g=performance.now(),c=new fo,p=[5,14,15,58,59,60,598,608],d=!!s.fillSuppressedWithNeighborLabel||p.includes(n.id),b=[5,14,15,58,59,60,598,608],P=F=>F>=1&&F<=34?1:F>=35&&F<=68?2:0,_=b.includes(n.id)?P:null,w=f[0]*f[1]*f[2],v=Math.max(1e5,Math.floor(w*.01)),[y,h]=c.bwlabel(l,f,6,!1,!1,mo);if(m=c.getLabelMeta(h),y>v){const F=`Segmentation produced noise: ${y.toLocaleString()} disconnected regions (cap ${v.toLocaleString()}). The model output is unusable, so post-processing was aborted. Try re-running, switching backend (WebGPU/WebGL2), or another model.`;console.error("[postprocess] "+F);const $=new Error(F);throw $.code="SEGMENTATION_NOISE",$}if([1,7].includes(n.id)){const[x,C]=c.filter_clusters_by_rank(l,y,h,2,.02,f,d,8,!1,_);l=C,u=!0}else if([3,8,9,21,38,218].includes(n.id)){const F=new Set([1,2,5,6,13]),[$,M]=c.filter18ClassFromLabels(l,y,h,f,F,d,_,u);l=M,u=!0}else if([5,14,15,58,59,60,598,608].includes(n.id)){s.diagnoseEnclosedComponents&&c.diagnose_components(l,y,h,f,{label:`model${n.id}`,topN:60});const[F,$]=c.filterHierarchicalFromLabels(l,y,h,f,"all",!0,d,_,u);l=$,u=!0}else u||(l=l.slice(),u=!0),c.applyLargestBinaryMaskInPlace(l,y,h,f);const k=((performance.now()-g)/1e3).toFixed(4);console.log(`Connected-component labeling took: ${k} seconds.`)}switch(n.type){case"Brain_Masking":{const g=new Uint8Array(l.length);if(m&&m.runs){const c=m.runs,p=m.runLen;for(let d=0;d<p;d+=2){const b=c[d],P=c[d+1];for(let _=b;_<P;_++)l[_]!==0&&(g[_]=1)}}else for(let c=0;c<l.length;c++)g[c]=l[c]!==0?1:0;return g}case"Brain_Extraction":{const g=new Uint8Array(l.length),c=r?new Uint8Array(l.length):null;if(m&&m.runs){const p=m.runs,d=m.runLen;for(let b=0;b<d;b+=2){const P=p[b],_=p[b+1];for(let w=P;w<_;w++)l[w]!==0&&(g[w]=t[w],c&&(c[w]=1))}}else for(let p=0;p<l.length;p++){const d=l[p]!==0?1:0;g[p]=t[p]*d,c&&(c[p]=d)}return r&&(r.mask=c),g}default:return l instanceof Uint8Array?l:new Uint8Array(l)}})}const vo={WEBGPU:"webgpu"};function xo(e,t){return{startTime:Date.now(),Model_Name:(e==null?void 0:e.modelName)||"Unknown",Execution_Mode:t,TF_Backend:"webgpu",isModelFullVol:null,No_SubVolumes:1,Brainchop_Ver:"FullVolume",Input_Shape:null,Output_Shape:null,Channel_Last:null,Model_Param:null,Model_Layers:null,Actual_Labels:null,Expect_Labels:null,NumLabels_Match:null,Missing_Labels:null,Preprocess_t:null,Setup_t:null,Inference_t:null,Postprocess_t:null,Display_t:null,Status:null,Error_Type:null,Extra_Err_Info:null}}function yo(e,t,n,s=null){e.Expect_Labels=t,e.Actual_Labels=n,e.NumLabels_Match=t===n,s&&s.length>0&&(e.Missing_Labels=s.join(", "))}function $o(e,t,n,s=null){e.Inference_t=t,e.Postprocess_t=n,s&&(s.Preprocess_t!==void 0&&(e.Preprocess_t=s.Preprocess_t),s.Setup_t!==void 0&&(e.Setup_t=s.Setup_t),s.Display_t!==void 0&&(e.Display_t=s.Display_t)),e.Status="OK"}function So(e,t,n=null){e.Inference_t=1/0,e.Postprocess_t=1/0,e.Status="Fail",e.Error_Type=(t==null?void 0:t.message)||String(t),n&&(e.Extra_Err_Info=n)}const Rt=1e-8,ko=[256,256,256];function rn(e,t,n){return Math.max(t,Math.min(n,e))}function Mo(e){return e.outputType==="probability"&&e.probabilityPostprocess==="cat-lite"}function Po(e,t,n){const[s,r,i]=e,o=s.length,a=new Uint8Array(o);let f=0;for(let v=0;v<o;v++)Math.max(0,s[v])+Math.max(0,r[v])+Math.max(0,i[v])>=n&&(a[v]=1,f++);const[l,u,m]=t;if(l<2||u<2||m<1)return{componentCount:0,removedVoxels:0,supportMask:a};const g=l===256&&u===256,c=new Uint32Array(f),p=l*u;let d=0,b=0,P=0,_=0;for(let v=0;v<o;v++){if(a[v]!==1)continue;_++;const y=d;c[d++]=v,a[v]=2;for(let h=y;h<d;h++){const k=c[h],F=g?k&255:k%l,$=g?k>>>8&255:Math.floor(k/l)%u;F>0&&a[k-1]===1&&(a[k-1]=2,c[d++]=k-1),F+1<l&&a[k+1]===1&&(a[k+1]=2,c[d++]=k+1),$>0&&a[k-l]===1&&(a[k-l]=2,c[d++]=k-l),$+1<u&&a[k+l]===1&&(a[k+l]=2,c[d++]=k+l),k>=p&&a[k-p]===1&&(a[k-p]=2,c[d++]=k-p),k+p<o&&a[k+p]===1&&(a[k+p]=2,c[d++]=k+p)}d-y>=P-b&&(b=y,P=d)}let w=0;if(_>1)for(let v=0;v<d;v++){if(v>=b&&v<P)continue;const y=c[v];s[y]=0,r[y]=0,i[y]=0,a[y]=0,w++}return{componentCount:_,removedVoxels:w,supportMask:a}}function Ao([e,t,n],s,{minSupport:r,priorPower:i},o=null){const a=!!(o&&r>0&&r<=1);let f=0;for(let d=0;d<s.length;d++){if(a&&o[d]!==2)continue;const b=Math.max(0,e[d])+Math.max(0,t[d])+Math.max(0,n[d]);Math.min(b,1)>=r&&Number.isFinite(s[d])&&f++}const l=new Uint32Array(f),u=new Float64Array(f),m=f*36<=192*Ot(2,20)?f:0,g=new Float64Array(m),c=new Float64Array(m),p=new Float64Array(m);for(let d=0,b=0;d<s.length;d++){if(a&&o[d]!==2)continue;const P=Math.max(0,e[d]),_=Math.max(0,t[d]),w=Math.max(0,n[d]),v=P+_+w,y=Math.min(v,1);!(y>=r)||!Number.isFinite(s[d])||(l[b]=d,u[b]=s[d]-0,m&&(g[b]=y*Math.pow(w/v,i),c[b]=y*Math.pow(P/v,i),p[b]=y*Math.pow(_/v,i)),b++)}return{indices:l,values:u,weightCsf:g,weightGm:c,weightWm:p,volumes:[e,t,n]}}function Ls([e,t,n],s,r,i){const o=Math.max(0,e[s]),a=Math.max(0,t[s]),f=Math.max(0,n[s]),l=o+a+f,u=Math.min(l,1);i[0]=u*Math.pow(f/l,r),i[1]=u*Math.pow(o/l,r),i[2]=u*Math.pow(a/l,r)}function Us({indices:e,values:t,weightCsf:n,weightGm:s,weightWm:r,volumes:i},{minSeparation:o,sigmaFloor:a,priorPower:f},l=!1){const u=n.length===0?new Float64Array(3):null,m=new Float64Array(3),g=new Float64Array(3);for(let b=0;b<t.length;b++){const P=t[b];u&&Ls(i,e[b],f,u);const _=u?u[0]:n[b],w=u?u[1]:s[b],v=u?u[2]:r[b];m[0]+=_*P,g[0]+=_,m[1]+=w*P,g[1]+=w,m[2]+=v*P,g[2]+=v}if(g.some(b=>b<100))return{applied:!1,reason:"too few high-confidence tissue voxels"};const c=Array.from(m,(b,P)=>b/g[P]);if(!(c[0]+o<c[1]&&c[1]+o<c[2]))return{applied:!1,reason:`implausible T1 tissue ordering (${c.map(b=>b.toFixed(3)).join(", ")})`};if(l)return{applied:!0,means:c};const p=new Float64Array(3);for(let b=0;b<t.length;b++){const P=t[b];u&&Ls(i,e[b],f,u);const _=u?u[0]:n[b],w=u?u[1]:s[b],v=u?u[2]:r[b],y=P-c[0],h=P-c[1],k=P-c[2];p[0]+=_*y*y,p[1]+=w*h*h,p[2]+=v*k*k}const d=Array.from(p,(b,P)=>Math.sqrt(Math.max(a*a,b/g[P])));return{applied:!0,means:c,sigmas:d}}function zo(e,t,n,s,{minSupport:r,block:i,smoothingPasses:o},a=null){const[f,l,u]=e,[m,g,c]=n,p=!!(a&&r>0&&r<=1),d=Math.ceil(m/i),b=Math.ceil(g/i),P=Math.ceil(c/i),_=d*b*P,w=new Float64Array(_),v=new Float64Array(_),[y,h,k]=s,F=m*g;for(let T=0;T<c;T++){const B=Math.floor(T/i);for(let G=0;G<g;G++){const ae=Math.floor(G/i);let ce=T*F+G*m;const N=(B*b+ae)*d;for(let W=0;W<m;W++,ce++){if(p&&a[ce]!==2)continue;const X=Math.max(0,f[ce]),J=Math.max(0,l[ce]),D=Math.max(0,u[ce]),ue=X+J+D,ie=Math.min(ue,1);if(!(ie>=r)||!Number.isFinite(t[ce]))continue;const Ae=X/ue,fe=J/ue,$e=D/ue,j=$e*y+Ae*h+fe*k,te=ie*($e*$e+Ae*Ae+fe*fe),A=N+Math.floor(W/i);w[A]+=te*(t[ce]-j),v[A]+=te}}}let $=new Float32Array(_),M=new Uint8Array(_);for(let T=0;T<_;T++)v[T]>1&&($[T]=w[T]/v[T],M[T]=1);for(let T=0;T<o;T++){const B=new Float32Array(_),G=new Uint8Array(_);for(let ae=0;ae<P;ae++)for(let ce=0;ce<b;ce++)for(let N=0;N<d;N++){let W=0,X=0;for(let D=-1;D<=1;D++){const ue=ae+D;if(!(ue<0||ue>=P))for(let ie=-1;ie<=1;ie++){const Ae=ce+ie;if(!(Ae<0||Ae>=b))for(let fe=-1;fe<=1;fe++){const $e=N+fe;if($e<0||$e>=d)continue;const j=(ue*b+Ae)*d+$e;M[j]&&(W+=$[j],X++)}}}const J=(ae*b+ce)*d+N;X>0&&(B[J]=W/X,G[J]=1)}$=B,M=G}const x=(T,B)=>{const G=new Int32Array(T),ae=new Int32Array(T),ce=new Float32Array(T);for(let N=0;N<T;N++){const W=rn((N+.5)/i-.5,0,B-1);G[N]=Math.floor(W),ae[N]=Math.min(G[N]+1,B-1),ce[N]=W-G[N]}return{low:G,high:ae,t:ce}},C=x(m,d),z=x(g,b),R=x(c,P),I=m===256&&g===256;return T=>{let B,G,ae;if(I)ae=T>>>16,G=T>>>8&255,B=T&255;else{ae=Math.floor(T/F);const K=T-ae*F;G=Math.floor(K/m),B=K-G*m}const ce=C.low[B],N=C.high[B],W=C.t[B],X=(R.low[ae]*b+z.low[G])*d,J=(R.low[ae]*b+z.high[G])*d,D=(R.high[ae]*b+z.low[G])*d,ue=(R.high[ae]*b+z.high[G])*d,ie=$[X+ce]+($[X+N]-$[X+ce])*W,Ae=$[J+ce]+($[J+N]-$[J+ce])*W,fe=$[D+ce]+($[D+N]-$[D+ce])*W,$e=$[ue+ce]+($[ue+N]-$[ue+ce])*W,j=z.t[G],te=ie+(Ae-ie)*j,A=fe+($e-fe)*j;return te+(A-te)*R.t[ae]}}function yn(e,t,n,s){const r=(e-t)/n;return-.5*r*r-s}function Co(e,t,n,s={}){const{catLiteMinSupport:r=.03,catLitePurePriorPower:i=3,catLiteMinMeanSeparation:o=.035,catLiteSigmaFloor:a=.025,catLiteBiasBlockSize:f=16,catLiteBiasSmoothPasses:l=3,catLitePriorStrength:u=.8,catLiteIntensityStrength:m=.75,catLiteMixelPrior:g=.35,catLiteCsfWmMixelPrior:c=6,catLiteSpatialWeight:p=.25}=s,d={priorPower:i,minSupport:r,minSeparation:o,sigmaFloor:a},[b,P,_]=n,w=t.length,v=r>0&&r<=1,{componentCount:y,removedVoxels:h,supportMask:k}=Po(e,n,r),F={componentCount:y,removedVoxels:h},$=Ao(e,t,d,k),M=Us($,d,!0);if(!M.applied)return{tissues:e,stats:M};const x=zo(e,t,n,M.means,{minSupport:r,block:f,smoothingPasses:l},k);for(let E=0;E<$.indices.length;E++){const Y=$.indices[E];$.values[E]=t[Y]-x(Y)}const C=Us($,d);if(!C.applied)return{tissues:e,stats:C};$.indices=$.weightCsf=$.weightGm=$.weightWm=null;const[z,R,I]=C.means,[T,B,G]=C.sigmas,[ae,ce,N]=e,W=new Float32Array(w),X=new Float32Array(w),J=new Float32Array(w),D=b*P,ue=.5*(z+R),ie=.5*(R+I),Ae=.5*(z+I),fe=Math.sqrt(Ot(R-z,2)/12+.5*(Ot(T,2)+Ot(B,2))),$e=Math.sqrt(Ot(I-R,2)/12+.5*(Ot(B,2)+Ot(G,2))),j=Math.sqrt(Ot(I-z,2)/12+.5*(Ot(T,2)+Ot(G,2))),te=Math.log(T),A=Math.log(B),K=Math.log(G),V=Math.log(fe),re=Math.log($e),ee=Math.log(j);let Z=0;for(let E=0;E<_;E++)for(let Y=0;Y<P;Y++){let q=E*D+Y*b;for(let _e=0;_e<b;_e++,q++){if(v&&k[q]!==2)continue;const ne=Math.max(0,ae[q]),Fe=Math.max(0,ce[q]),Ce=Math.max(0,N[q]),Ie=ne+Fe+Ce,qe=Math.min(Ie,1);if(!(qe>=r)||!Number.isFinite(t[q]))continue;let Je=ne/Ie,Oe=Fe/Ie,Le=Ce/Ie;if(p>0){let ot=0,Ne=0,se=0,H=0;if(_e>0){const le=q-1,Ye=Math.max(0,ae[le]),it=Math.max(0,ce[le]),et=Math.max(0,N[le]),Ee=Ye+it+et;Ee>Rt&&(ot+=Ye/Ee,Ne+=it/Ee,se+=et/Ee,H++)}if(_e+1<b){const le=q+1,Ye=Math.max(0,ae[le]),it=Math.max(0,ce[le]),et=Math.max(0,N[le]),Ee=Ye+it+et;Ee>Rt&&(ot+=Ye/Ee,Ne+=it/Ee,se+=et/Ee,H++)}if(Y>0){const le=q-b,Ye=Math.max(0,ae[le]),it=Math.max(0,ce[le]),et=Math.max(0,N[le]),Ee=Ye+it+et;Ee>Rt&&(ot+=Ye/Ee,Ne+=it/Ee,se+=et/Ee,H++)}if(Y+1<P){const le=q+b,Ye=Math.max(0,ae[le]),it=Math.max(0,ce[le]),et=Math.max(0,N[le]),Ee=Ye+it+et;Ee>Rt&&(ot+=Ye/Ee,Ne+=it/Ee,se+=et/Ee,H++)}if(E>0){const le=q-D,Ye=Math.max(0,ae[le]),it=Math.max(0,ce[le]),et=Math.max(0,N[le]),Ee=Ye+it+et;Ee>Rt&&(ot+=Ye/Ee,Ne+=it/Ee,se+=et/Ee,H++)}if(E+1<_){const le=q+D,Ye=Math.max(0,ae[le]),it=Math.max(0,ce[le]),et=Math.max(0,N[le]),Ee=Ye+it+et;Ee>Rt&&(ot+=Ye/Ee,Ne+=it/Ee,se+=et/Ee,H++)}if(H){const le=1-p;Je=le*Je+p*ot/H,Oe=le*Oe+p*Ne/H,Le=le*Le+p*se/H}}const Se=$.values[Z++],Ze=u*Math.log(Le+Rt)+m*yn(Se,z,T,te),pt=u*Math.log(Je+Rt)+m*yn(Se,R,B,A),ut=u*Math.log(Oe+Rt)+m*yn(Se,I,G,K),ft=u*Math.log(g*2*Math.sqrt(Le*Je)+Rt)+m*yn(Se,ue,fe,V),At=u*Math.log(g*2*Math.sqrt(Je*Oe)+Rt)+m*yn(Se,ie,$e,re),Vt=u*Math.log(c*2*Math.sqrt(Le*Oe)*Ot(1-Je,2)+Rt)+m*yn(Se,Ae,j,ee),Lt=Math.max(Ze,pt,ut,ft,At,Vt),Q=Math.exp(Ze-Lt),nn=Math.exp(pt-Lt),Mt=Math.exp(ut-Lt),Ht=Math.exp(ft-Lt),Ct=Math.exp(At-Lt),ht=Math.exp(Vt-Lt),S=Q+nn+Mt+Ht+Ct+ht,U=rn((Se-z)/(R-z),0,1),O=rn((I-Se)/(I-R),0,1),de=rn((Se-z)/(I-z),0,1),oe=(nn+Ht*U+Ct*O)/S,Re=(Mt+Ct*(1-O)+ht*de)/S,be=(Q+Ht*(1-U)+ht*(1-de))/S,he=Math.min(Le,Oe),ve=rn((he-Je)/(he+Rt),0,1),xe=rn(4*Le*Oe,0,1),je=Ot(1-xe*ve,2);W[q]=rn(oe*qe*je,0,1);const Ge=(1-oe*je)/Math.max(Re+be,Rt);X[q]=rn(Re*Ge*qe,0,1),J[q]=rn(be*Ge*qe,0,1)}}return{tissues:[W,X,J],stats:{applied:!0,tissueMeans:{csf:z,gray:R,white:I},tissueSigmas:{csf:T,gray:B,white:G},supportCleanup:F}}}const Ws=({csf:e,gray:t,white:n})=>`CSF=${e.toFixed(3)} GM=${t.toFixed(3)} WM=${n.toFixed(3)}`;function Bo(e,t,n,s,r){return Be(this,null,function*(){var f;const i=[];for(let l=0;l<3;l++)i.push(yield r(e[l],l)),e[l]=null;const{tissues:o,stats:a}=Co(i,t,ko,n);if(s.Output_Type="Continuous tissue probability",s.Tissue="GM/WM/CSF",s.Softmax_Temperature=(f=n.softmaxTemperature)!=null?f:1,a.applied){s.Partial_Volume="CAT-lite mixed-class PVE",s.CAT_Lite_Tissue_Means=Ws(a.tissueMeans),s.CAT_Lite_Tissue_Sigmas=Ws(a.tissueSigmas);const{componentCount:l,removedVoxels:u}=a.supportCleanup;console.log(`[CAT-lite] means ${s.CAT_Lite_Tissue_Means}; sigmas ${s.CAT_Lite_Tissue_Sigmas}; removed ${u} voxels outside the largest of ${l} support components`)}else s.Partial_Volume=`Skipped: ${a.reason}`,console.warn(`[CAT-lite] skipped: ${a.reason}`);return o})}const ln=[1,3,5,7,13,19,31,19,13,7,5,3,1],Fo=[16,8,4,2,1,16,8,4,2,1,16,8,4,2,1,16,8,4,2,1,16,8,4,2,1],Lo={model16chan18cls:{dilations:ln,activation:"gelu_tanh",fullVolume:!0},model24chan18cls_gdice_prio:{dilations:ln,activation:"gelu_tanh",fullVolume:!0},model6chan3cls:{dilations:ln,activation:"gelu_tanh",fullVolume:!0},model24chan104cls_synth:{dilations:ln,activation:"gelu_tanh",fullVolume:!0},model24chan104cls_infant_refit_synth:{dilations:ln,activation:"gelu_tanh",fullVolume:!0},model24chan104cls_v3_repbn:{dilations:ln,activation:"gelu_tanh",fullVolume:!0},model24chan50cls:{dilations:ln,activation:"gelu_tanh",fullVolume:!0},model32chan18cls:{dilations:ln,activation:"gelu_tanh",fullVolume:!1},mindgrab:{dilations:Fo,activation:"gelu_tanh",fullVolume:!0},model5_gw_ae:{dilations:[1,2,4,8,16,8,4,2,1],activation:"relu",fullVolume:!0},model11_gw_ae:{dilations:[1,2,4,8,4,2,2,1],activation:"relu",noSafetensors:!0,fullVolume:!0},model30chan18cls:{dilations:[1,2,4,8,16,8,4,2,1],activation:"elu",fullVolume:!0},model30chan50cls:{dilations:[1,2,4,8,16,8,4,2,1],activation:"elu",fullVolume:!0}};function Uo(e){const t=String(e.path||"").match(/\/models\/([^/]+)\//);return t?t[1]:null}function _s(e){const t=Uo(e);if(!t)return null;const n=Lo[t];return!n||n.noSafetensors?null:bt({name:t},n)}function Wo(e){const t=e&32768?-1:1,n=(e&31744)>>10,s=e&1023;return n===0?t*Math.pow(2,-14)*(s/1024):n===31?s?NaN:t*(1/0):t*Math.pow(2,n-15)*(1+s/1024)}function er(e){const t=new DataView(e),n=Number(t.getBigUint64(0,!0)),s=JSON.parse(new TextDecoder().decode(new Uint8Array(e,8,n))),r=8+n,i={};for(const[o,a]of Object.entries(s)){if(o==="__metadata__"){i.__metadata__=a;continue}const[f,l]=a.data_offsets,u=a.shape.reduce((g,c)=>g*c,1);let m;if(a.dtype==="F32")m=new Float32Array(e.slice(r+f,r+l));else if(a.dtype==="F16"){const g=new Uint16Array(e.slice(r+f,r+l));m=new Float32Array(u);for(let c=0;c<u;c++)m[c]=Wo(g[c])}else if(a.dtype==="BF16"){const g=new Uint16Array(e.slice(r+f,r+l));m=new Float32Array(u);const c=new Uint32Array(1),p=new Float32Array(c.buffer);for(let d=0;d<u;d++)c[0]=g[d]<<16,m[d]=p[0]}else throw new Error(`safetensors: unsupported dtype ${a.dtype} for tensor '${o}'`);if(m.length!==u)throw new Error(`safetensors: tensor '${o}' has ${m.length} values, shape says ${u}`);i[o]={dtype:a.dtype,shape:a.shape,data:m}}return i}function tr(e){const t=[],n=[],s=[];for(const[i,o]of Object.entries(e)){if(i==="__metadata__")continue;const a=i.match(/^m\.model\.(\d+)\.(weight|bias)$/);if(!a)continue;const f=Number(a[1]),l=a[2]==="weight";if(o.shape.length===5){const[u,m,g,c,p]=o.shape,b={idx:f,outC:u,inC:m,kd:g,kh:c,kw:p,is1x1:g===1&&c===1&&p===1,w:o.data,bias:null},P=t.find(_=>_.idx===f);P?Object.assign(P,b):t.push(b)}else o.shape.length===1&&s.push({idx:f,isW:l,data:o.data,len:o.shape[0]})}t.sort((i,o)=>i.idx-o.idx);for(const i of s){const o=t.find(f=>f.idx===i.idx);if(o&&!i.isW){o.bias=i.data;continue}if(o&&i.isW)continue;let a=n.find(f=>f.idx===i.idx);a||(a={idx:i.idx,scale:null,bias:null},n.push(a)),i.isW?a.scale=i.data:a.bias=i.data}n.sort((i,o)=>i.idx-o.idx);let r=null;return t.length&&t[t.length-1].is1x1&&(r=t.pop()),{convs:t,affines:n,classifier:r}}function qo(e,t){var n;if(t==null)return e;if(t.length!==((n=e.classifier)==null?void 0:n.outC)||!Array.from(t).every(Number.isFinite))throw new Error("Classifier bias must contain one finite value per exported class");return e.classifier.bias=Float32Array.from(t),e}function Ro(e,t){const n=t.cs,s=t.chan,{convs:r,affines:i,classifier:o}=e,a=c=>27*c*n;let f=0;const l=[];r.forEach((c,p)=>{const d=p===0?1:n,b={wq:f/4,inCS:d};f+=a(d),c.bias&&(b.biasQ=f/4,f+=n),l.push(b)}),i.forEach((c,p)=>{l[p]=l[p]||{},l[p].affQ=f/4,f+=n,l[p].affBiasQ=f/4,f+=n});let u=-1,m=-1;o&&(u=f,f+=s*t.nclass,f=Math.ceil(f/4)*4,o.bias&&(m=f,f+=t.nclass),f=Math.ceil(f/4)*4);const g=new Float32Array(f);if(r.forEach((c,p)=>{const d=l[p],b=d.inCS,P=d.wq*4,_=c.kd*c.kh*c.kw;if(c.outC>s||p>0&&c.inC>s)throw new Error(`layer ${p}: shape ${c.outC}x${c.inC} exceeds CHAN ${s}`);for(let w=0;w<c.outC;w++){for(let v=0;v<c.inC;v++)for(let y=0;y<c.kd;y++)for(let h=0;h<c.kh;h++)for(let k=0;k<c.kw;k++){const F=c.kd===3?y*9+h*3+k:0,$=(((w*c.inC+v)*c.kd+y)*c.kh+h)*c.kw+k;g[P+(F*b+v)*n+w]=c.w[$]}c.bias&&(g[d.biasQ*4+w]=c.bias[w])}if(_!==27&&_!==1)throw new Error(`layer ${p}: kernel ${c.kd}x${c.kh}x${c.kw} unsupported`)}),i.forEach((c,p)=>{const d=l[p];for(let b=0;b<s;b++)g[d.affQ*4+b]=c.scale?c.scale[b]:0,g[d.affBiasQ*4+b]=c.bias?c.bias[b]:0}),o)for(let c=0;c<t.nclass;c++){for(let p=0;p<s;p++)g[u+p*t.nclass+c]=o.w[c*o.inC+p];o.bias&&(g[m+c]=o.bias[c])}return{data:g,offsets:{layers:l,clsFloat:u,clsBiasFloat:m}}}function nr(e,t={}){const{convs:n,affines:s,classifier:r}=e,i=n[0].outC,o=Math.ceil(i/4)*4,a=n.some(l=>l.bias),f=bt({chan:i,cs:o,planes:o/4,nclass:r?r.outC:0,nhidden:n.length-1,norm:s.length?"gn":a?"none":"gn",affine:s.length>0,convBias:a,classifierBias:!!(r&&r.bias),centeredVariance:!1,eps:1e-5},t);if(f.nclass>256)throw new Error(`classifier has ${f.nclass} classes; the RGBA8 label texture holds at most 256`);if(!f.activation)throw new Error("descriptor needs an explicit `activation`");if(!f.dilations)throw new Error("descriptor needs an explicit `dilations` array");if(f.dilations.length!==n.length)throw new Error(`descriptor has ${f.dilations.length} dilations for ${n.length} convs`);return f}const Xn=(e,t)=>Array.from({length:e},(n,s)=>t(s)).join(""),qs=["x","y","z","w"];function Io(e){const t=`fn act4(x : vec4<f32>) -> vec4<f32> {
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
`;default:throw new Error(`webgpu-native: unknown activation '${e}'; add it deliberately`)}}function Go(e,t,n){const s=e.cs/4,r=l=>Xn(n,l),i=l=>Xn(s,l),o=i(l=>`          let w${l} = vec4<f32>(wts4[wq + ${l}u]);
`),a=l=>`        { let wq = wq0 + ((tap * cin) + ic4 * 4u + ${l}u) * (CS / 4u);
`+o+r(u=>i(m=>`          a${u}${m} = fma(w${m}, vec4<f32>(s${u}.${qs[l]}), a${u}${m});
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
`+i(u=>Xn(4,m=>`    dst[o + ${4*u+m}u] = f16(a${l}${u}.${qs[m]});
`))+`  }
`)+`}
`}function Eo(e){return`var<workgroup> wg_sum : array<f32, ${e} * CS>;
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
`}function To(e){return`@compute @workgroup_size(${e}, 1, 1)
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
`}function Oo(e){return`@group(0) @binding(5) var<storage, read_write> labels : array<u32>;
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
`}function No(e,t){var i;const{localX:n,vox:s,momLX:r}=t;if(e.cs%4!==0||e.cs>256)throw new Error(`webgpu-native: channel stride ${e.cs} unsupported`);if(e.nx%(n*s)||e.nx%n||e.nx%r)throw new Error(`webgpu-native: preset ${n}x${s}/${r} does not tile a ${e.nx}-voxel row`);if(r<e.cs)throw new Error(`webgpu-native: moments workgroup ${r} < ${e.cs} channels`);return`enable f16;
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
`+Io(e.activation)+Go(e,n,s)+(e.norm==="gn"?Eo(r)+To(n):"")+Oo(n)}const Yn={amd:{localX:256,vox:1},apple:{localX:64,vox:2},default:{localX:64,vox:2}};function Do(){var e;try{const t=new URLSearchParams(((e=globalThis.location)==null?void 0:e.search)||"").get("wgPreset"),n=t&&/^(\d+)x([124])$/.exec(t);return n?{localX:Number(n[1]),vox:Number(n[2]),source:"url"}:null}catch(t){return null}}function Vo(e,t){var a;const n=String(((a=e.adapterInfo)==null?void 0:a.vendor)||"").toLowerCase(),s=e.limits,r=f=>f.localX<=s.maxComputeInvocationsPerWorkgroup&&f.localX<=s.maxComputeWorkgroupSizeX&&t.nx%(f.localX*f.vox)===0;let i=Do()||Ft(bt({},Yn[n]||Yn.default),{source:n||"default"});r(i)||(console.warn(`[WebGPU-native] preset ${i.localX}x${i.vox} does not fit this device; using the default`),i=Ft(bt({},Yn.default),{source:"fallback"}));let o=0;for(const f of[256,128,64,32])if(f<=i.localX&&f>=t.cs&&t.nx%f===0&&f<=s.maxComputeInvocationsPerWorkgroup&&f*t.cs*8<=s.maxComputeWorkgroupStorageSize){o=f;break}if(!o)throw new Error(`webgpu-native: no moments workgroup fits ${t.cs} channels on this device`);return Ft(bt({},i),{momLX:o,vendor:n||"unknown"})}const kt=256;function Rs(e){if(typeof Float16Array!="undefined")return new Uint16Array(new Float16Array(e).buffer);const t=new Uint16Array(e.length),n=new Float32Array(1),s=new Uint32Array(n.buffer);for(let r=0;r<e.length;r++){n[0]=e[r];const i=s[0],o=i>>>16&32768,a=i>>>23&255,f=i&8388607;if(a===255){t[r]=o|31744|(f?512:0);continue}const l=a-127+15;if(l>=31){t[r]=o|31744;continue}if(l<=0){if(l<-10){t[r]=o;continue}const g=f|8388608,c=14-l;let p=g>>>c;const d=g&(1<<c)-1,b=1<<c-1;(d>b||d===b&&p&1)&&p++,t[r]=o|p;continue}let u=l<<10|f>>>13;const m=f&8191;(m>4096||m===4096&&u&1)&&u++,t[r]=o|u}return t}function Ho(e,t){var n;return t.quantize8Bit?"8-bit quantized V4 runner requested":(n=e.features)!=null&&n.has("shader-f16")?t.outputType==="probability"?"probability output (CAT-lite) is not ported yet":t.enableTTA?"test-time augmentation uses the tinygrad TTA runner":t.forceFP32?"model entry forces fp32":t.webgpu_safetensor?_s(t)?null:"no descriptor in webgl2_runners/descriptors.js":"no safetensors weights":"device lacks shader-f16"}function jo(e,t){const n=e.nx*e.ny*e.nz,s=e.nx/t*e.ny*e.nz;return 2*n*e.cs*2+n*2+2*n*4+(s+1)*e.cs*2*4}const Is=new WeakMap;function Xo(e,t,n){return Be(this,null,function*(){let s=Is.get(e);s||(s=new Map,Is.set(e,s));const r=`${t.chan}|${t.cs}|${t.nclass}|${t.norm}|${t.affine}|${t.convBias}|${t.clsBias}|${t.activation}|${t.eps}|${n.localX}x${n.vox}x${n.momLX}`;let i=s.get(r);return i||(i=Be(null,null,function*(){const o=e.createShaderModule({code:No(t,n)}),a=["read-only-storage","storage","read-only-storage","uniform","storage","storage","read-only-storage","read-only-storage"],f=e.createBindGroupLayout({entries:a.map((g,c)=>({binding:c,visibility:GPUShaderStage.COMPUTE,buffer:{type:g}}))}),l=e.createPipelineLayout({bindGroupLayouts:[f]}),u=["conv","classify",...t.norm==="gn"?["moments","moments_finish","norm"]:[]],m=Object.fromEntries(yield Promise.all(u.map(g=>Be(null,null,function*(){return[g,yield e.createComputePipelineAsync({layout:l,compute:{module:o,entryPoint:g}})]}))));return{bgl:f,pipelines:m}}).catch(o=>{throw s.delete(r),o}),s.set(r,i)),i})}function Yo(e,t,n,s){return Be(this,null,function*(){const r=_s(s);if(!r)throw new Error(`webgpu-native: no descriptor for ${s.path}`);const i=t instanceof Uint8Array?t:new Uint8Array(t),o=qo(tr(er(i.buffer.slice(i.byteOffset,i.byteOffset+i.byteLength))),s.classifierBias),a=nr(o,{nx:kt,ny:kt,nz:kt,activation:r.activation,dilations:r.dilations});if(!a.nclass)throw new Error("webgpu-native: model has no classifier");if(a.convBias&&a.affine)throw new Error("webgpu-native: conv bias together with a GroupNorm affine is not supported");const f=Vo(e,a),l=kt*kt*kt,u=l*a.cs*2,m=e.limits;if(u>m.maxStorageBufferBindingSize||u>m.maxBufferSize)throw new Error(`webgpu-native: a ${u>>>20} MiB activation exceeds this device's buffer limits`);console.log(`[WebGPU-native] ${r.name}: ${a.chan}ch (stride ${a.cs}) ${a.nclass}cls norm=${a.norm} affine=${a.affine} act=${a.activation} | preset ${f.localX}x${f.vox} (moments ${f.momLX}, ${f.source}) | ~${Math.round(jo(a,f.momLX)/1048576)} MiB`);const g=Ro(o,a),{layers:c,clsFloat:p,clsBiasFloat:d}=g.offsets;e.pushErrorScope("validation"),e.pushErrorScope("out-of-memory");let b=2;try{const{bgl:P,pipelines:_}=yield Xo(e,a,f),w=(D,ue)=>e.createBuffer({size:D,usage:ue}),v=GPUBufferUsage.STORAGE,y=kt/f.momLX*kt*kt,h=Rs(g.data),k=w(l*2,v|GPUBufferUsage.COPY_DST),F=w(u,v),$=w(u,v),M=w(Math.ceil(h.byteLength/16)*16,v|GPUBufferUsage.COPY_DST),x=w((y+1)*a.cs*2*4,v),C=w(l*4,v|GPUBufferUsage.COPY_SRC),z=w(l*4,GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST);e.queue.writeBuffer(M,0,h);const R=(D,ue,ie)=>{const Ae=w(32,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST);return e.queue.writeBuffer(Ae,0,ie),e.createBindGroup({layout:P,entries:[{binding:0,resource:{buffer:D}},{binding:1,resource:{buffer:ue}},{binding:2,resource:{buffer:M}},{binding:3,resource:{buffer:Ae}},{binding:4,resource:{buffer:x}},{binding:5,resource:{buffer:C}},{binding:6,resource:{buffer:M}},{binding:7,resource:{buffer:D}}]})},I=D=>{const ue=new Uint32Array(8);return ue[0]=D.dilation|0,ue[1]=D.weightOff>>>0,ue[2]=D.affineOff>>>0,ue[3]=D.biasOff>>>0,ue[4]=D.inChannels>>>0,ue[5]=D.inStride>>>0,ue[6]=y,ue},T=[];let B=k,G=F;c.forEach((D,ue)=>{const ie=ue===0;T.push(R(B,G,I({dilation:a.dilations[ue],weightOff:D.wq*4,affineOff:D.affQ!==void 0?D.affQ*4:0,biasOff:D.biasQ!==void 0?D.biasQ*4:D.affBiasQ!==void 0?D.affBiasQ*4:0,inChannels:ie?1:a.cs,inStride:ie?1:a.cs}))),B=G,G=G===F?$:F});const ae=R(B,G,I({weightOff:p,biasOff:d>=0?d:0}));b=0;const ce=yield e.popErrorScope(),N=yield e.popErrorScope();if(ce||N)throw new Error(`webgpu-native setup failed: ${(ce||N).message}`);const W=kt/(f.localX*f.vox),X=kt/f.localX,J=kt/f.momLX;return function(ue){return Be(this,null,function*(){if(ue.length!==l)throw new Error(`webgpu-native: input has ${ue.length} voxels, expected ${l}`);e.pushErrorScope("validation"),e.queue.writeBuffer(k,0,Rs(ue));for(const j of T){const te=e.createCommandEncoder(),A=te.beginComputePass();A.setBindGroup(0,j),A.setPipeline(_.conv),A.dispatchWorkgroups(W,kt,kt),a.norm==="gn"&&(A.setPipeline(_.moments),A.dispatchWorkgroups(J,kt,kt),A.setPipeline(_.moments_finish),A.dispatchWorkgroups(1,1,1),A.setPipeline(_.norm),A.dispatchWorkgroups(X,kt,kt)),A.end(),e.queue.submit([te.finish()])}const ie=e.createCommandEncoder(),Ae=ie.beginComputePass();Ae.setBindGroup(0,ae),Ae.setPipeline(_.classify),Ae.dispatchWorkgroups(X,kt,kt),Ae.end(),ie.copyBufferToBuffer(C,0,z,0,l*4),e.queue.submit([ie.finish()]),yield z.mapAsync(GPUMapMode.READ);const fe=new Float32Array(new Uint32Array(z.getMappedRange()));z.unmap();const $e=yield e.popErrorScope();if($e)throw new Error(`webgpu-native inference failed: ${$e.message}`);return[fe]})}}finally{for(;b-- >0;)yield e.popErrorScope().catch(()=>{})}})}const Ko={grayMatter:[2,6,7,8,9,10,14,15,16,17],whiteMatter:[1,5],csf:[3,4,11,12]};function kn(e,t,n,s,r){var o;const i=Number((o=e[t])!=null?o:n);if(!Number.isFinite(i)||i<s||i>r)throw new Error(`${t} must be between ${s} and ${r}, got ${e[t]}`);return i}function Kn(e,t,n){let s=0;for(const r of e||[]){if(!Number.isInteger(r)||r<0||r>=t||r>=32)throw new Error(`Invalid ${n} tissue label ${r} for ${t} classes`);s=(s|1<<r)>>>0}return s}function Zo(e,t){if(!Number.isInteger(t)||t<2||t>32)throw new Error(`Native WebGL2 grouped probabilities require 2..32 classes, got ${t}`);const n=bt(bt({},Ko),e.probabilityGroups||{});return{temperature:kn(e,"softmaxTemperature",1,1e-6,1e6),supportTemperature:kn(e,"brainSupportTemperature",1,1e-6,1e6),supportPower:kn(e,"brainSupportPower",1,1e-6,1e6),sigma:kn(e,"partialVolumeSigma",0,0,2),grayMask:Kn(n.grayMatter,t,"gray-matter"),whiteMask:Kn(n.whiteMatter,t,"white-matter"),csfMask:Kn(n.csf,t,"CSF")}}function Zn(e,t,n,s,r,i){const[o,a,f]=n,l=o*a,u=r.length-1>>1;for(let m=0;m<f;m++)for(let g=0;g<a;g++)for(let c=0;c<o;c++){const p=m*l+g*o+c,d=s===1?c:s===o?g:m,b=s===1?o:s===o?a:f;let P=0;for(let _=-u;_<=u;_++){const w=d+_;w<0||w>=b||(P+=r[_+u]*e[p+_*s])}t[p]=P/i}}function Qo(e,t,n,s){const[r,i,o]=n,a=r*i*o;if(!Array.isArray(e)||e.length!==3||e.some(c=>c.length!==a)||t.length!==a)throw new Error("Native WebGL2 tissue-prior dimensions do not match");const f=kn(s,"partialVolumeSigma",0,0,2),l=kn(s,"brainSupportPower",1,1e-6,1e6);let u=null,m=null,g=1;if(f>0){const c=Math.max(1,Math.round(3*f));m=new Float32Array(c*2+1),g=0;for(let p=-c;p<=c;p++){const d=Math.exp(-.5*p*p/(f*f));m[p+c]=d,g+=d}u=new Float32Array(a)}for(const c of e){let p=c;m&&(Zn(c,u,n,1,m,g),Zn(u,c,n,r,m,g),Zn(c,u,n,r*i,m,g),p=u);for(let d=0;d<a;d++){const b=Math.pow(Math.max(0,Math.min(1,t[d])),l);c[d]=Math.max(0,Math.min(1,p[d]*b))}}return e}const L=256,wt=64,Dt=8,gt=wt+2*Dt,fn=gt*4,st=L*64,Wn=L*L*2,Nn=9216,sr=Nn*8,ls=[1,3,5,7,13,19,31,19,13,7,5,3,1],dt=(e,t)=>Array.from({length:e},(n,s)=>t(s)).join(""),rr=280,or=150,Jo=55,Qn=112;let us=0;function cs(e,t){const n=Math.floor(e/4),s=e%4,r=s===0?n:n+1,i=n,o=s*8,a=s===0?0:32-o;return(e&63|(r&15)<<6|(i&15)<<10|(o&31)<<14|(a&31)<<19|(t?1:0)<<24)>>>0}function ar(e){var t;if(e!=null&&e.webgpuExecMode)return String(e.webgpuExecMode).toLowerCase();try{const n=new URLSearchParams(((t=globalThis.location)==null?void 0:t.search)||"").get("webgpuExec");if(n)return n.toLowerCase()}catch(n){}return""}function ea(e){var n,s;if(!e)return"";if(typeof e.__glRenderer=="string")return e.__glRenderer;let t="";try{const r=typeof navigator!="undefined"&&/Firefox/i.test(navigator.userAgent||""),i=typeof OffscreenCanvas!="undefined"?new OffscreenCanvas(1,1):typeof document!="undefined"?document.createElement("canvas"):null,o=(n=i==null?void 0:i.getContext)==null?void 0:n.call(i,"webgl2",{powerPreference:"high-performance"});if(o){if(r)t=String(o.getParameter(o.RENDERER)||"");else{const a=o.getExtension("WEBGL_debug_renderer_info");t=String((a?o.getParameter(a.UNMASKED_RENDERER_WEBGL):o.getParameter(o.RENDERER))||"")}(s=o.getExtension("WEBGL_lose_context"))==null||s.loseContext()}}catch(r){}return e.__glRenderer=t,t}function qn(e){var g;const t=(e==null?void 0:e.__adapterInfo)||(e==null?void 0:e.adapterInfo)||{},n=String(t.vendor||"").toLowerCase(),s=String(t.architecture||"").toLowerCase(),r=typeof navigator!="undefined"&&navigator.userAgent||"",i=typeof navigator!="undefined"&&(((g=navigator.userAgentData)==null?void 0:g.platform)||navigator.platform||"")||"",o=n==="apple"||/Mac|iPhone|iPad|iPod/i.test(`${i} ${r}`)&&!["intel","amd","nvidia","microsoft"].includes(n),a=!o&&(/Win/i.test(i)||/Windows/i.test(r)),f=a&&!n?ea(e):String((e==null?void 0:e.__glRenderer)||""),l=`${t.device||""} ${t.description||""} ${f}`,u=n||(/\bintel\b/i.test(f)?"intel":/\bmicrosoft\b|\bbasic render\b/i.test(f)?"microsoft":""),m=a&&(u==="microsoft"||u==="intel"&&!/\bArc\b/i.test(l)&&(/^gen-(9|11|12lp)/i.test(s)||/(?:UHD|HD)\s+Graphics|Iris(?:\(R\))?\s*(?:Plus|Xe)|Pentium|Celeron/i.test(l)));return{vendor:u,arch:s,desc:l,isApple:o,isWindows:a,isWindowsSharedIgpu:m}}function ir(e,t){const n=ar(t);if(n==="single"||n==="pipelined"||n==="paced"||n==="calibrate")return n;if(n==="chunked")return"paced";const s=qn(e);return s.isApple?"single":s.isWindows?e!=null&&e.__v4WinCalibrated?e.__v4WinFast?"pipelined":"paced":"calibrate":"pipelined"}function lr(e,t){const n=ar(t);return n==="single"?!1:n==="paced"||n==="chunked"||n==="calibrate"?!0:n==="pipelined"?!1:qn(e).isWindows}function ur(e,t,n){return(n==null?void 0:n.forceLowMem128)===!1?!1:qn(e).isWindowsSharedIgpu&&t.cs>=24&&t.cs%4===0}function cr(e,t){var i,o;if(!((o=(i=e==null?void 0:e.features)==null?void 0:i.has)!=null&&o.call(i,"subgroups"))||t!=null&&t.disableSubgroups)return"none";if(t!=null&&t.forceSubgroupMode)return t.forceSubgroupMode;const n=e.__adapterInfo||e.adapterInfo||{},s=n.subgroupMinSize|0,r=n.subgroupMaxSize|0;return s===32&&r===32?"sg32":s===64&&r===64?"sg64":s>=32&&r<=64?"sg32_64":s>=8&&r<=32?"sg_small":"none"}function fr(e){switch(e){case"sg32":return"subgroups32";case"sg64":return"subgroups64-bf";case"sg32_64":return"subgroups32-64";case"sg_small":return"subgroups8-32";default:return"shared-8KiB"}}function pr(){return typeof requestAnimationFrame!="function"?new Promise(e=>setTimeout(e,0)):new Promise(e=>{let t=!1;const n=()=>{t||(t=!0,e())},s=setTimeout(n,16);requestAnimationFrame(()=>{clearTimeout(s),setTimeout(n,0)})})}function mr(e,t,n){let s=t,r=null,i=null,o=performance.now(),a=performance.now();function f(d,b,P){return Be(this,arguments,function*(u,m,g,{forceUiYield:c=!1,emitTick:p=!0}={}){r&&(yield r,r=null);const _=performance.now();e.queue.submit([u.finish()]);const w=e.createCommandEncoder(),v=e.queue.onSubmittedWorkDone().then(()=>{const h=performance.now(),k=Math.max(_,o),F=Math.max(0,h-k);h>o&&(o=h),m>=256&&F>.2&&(s=Math.max(.005,Math.min(2,.7*s+.3*(F/m))),e.__v4MsPerStrip=s)});r=i,i=v,p&&n&&n(g);const y=performance.now();return(c||y-a>=Jo)&&(yield pr(),a=performance.now()),w})}function l(){return Be(this,null,function*(){r&&(yield r,r=null)})}return{submitChunk:f,waitBeforeFinalSubmit:l,getMsPerStrip:()=>s,setMsPerStrip:u=>{s=Math.max(.005,Math.min(2,u)),e.__v4MsPerStrip=s,o=performance.now()}}}function bs(e,t,n){const s=e.isFull?st:e.mainStrips.length,r=e.isFull||!e.extStrips?0:e.extStrips.length,i=t+1<n?e.isFull?st:e.normStrips?e.normStrips.length:0:0,o=Math.max(16,Math.round(i*.12));return t===0?{convWork:Math.max(64,Math.round(s*.12)),normWork:o}:{convWork:s+r,normWork:o}}function dr(e,t){let n=0;for(let r=0;r<t;r++){const i=bs(e.layers[r],r,t);n+=i.convWork+i.normWork}const s=e.clsSkipped?e.clsStrips.length:st;return n+=Math.max(64,Math.round(s*.2)),Math.max(1,n)}const gr=new Float32Array(1),ta=new Uint32Array(gr.buffer);function fs(e){gr[0]=e;const t=ta[0],n=t>>>16&32768,s=t>>>23&255;let r=t&8388607;if(s===255)return n|31744|(r?512:0);let i=s-127+15;return i<=0?i<-10?n:(r=(r|8388608)>>>1-i,n|r+4096>>>13):i>=31?n|31744:n|Math.min(31744,(i<<10)+(r+4096>>>13))}function na(e){const t=new Uint16Array(e.length);for(let n=0;n<e.length;n++)t[n]=fs(e[n]);return t}const un=new Map,sa=12,_r=new WeakMap,ra=new WeakMap;function oa(e){let t=2166136261,n=2654435769;const s=e.byteLength>>>2;if((e.byteOffset&3)===0){const r=new Uint32Array(e.buffer,e.byteOffset,s);for(let i=0;i<r.length;i++){const o=r[i];t=Math.imul(t^o,16777619)>>>0,n=Math.imul(n^(o<<13|o>>>19),2246822507)>>>0}}else for(let r=0;r<s*4;r+=4){const i=e[r]|e[r+1]<<8|e[r+2]<<16|e[r+3]<<24;t=Math.imul(t^i,16777619)>>>0,n=Math.imul(n^(i<<13|i>>>19),2246822507)>>>0}for(let r=s*4;r<e.byteLength;r++)t=Math.imul(t^e[r],16777619)>>>0;return`${e.byteLength}_${t.toString(16)}_${n.toString(16)}`}function aa(e,t,n,s){const r=s!=null&&s.classifierBias?JSON.stringify(s.classifierBias):"",i=`${oa(e)}|${n.chan}|${n.cs}|${n.nclass}|${n.norm}|${n.eps}|${r}`;if(un.has(i)){const a=un.get(i);return un.delete(i),un.set(i,a),a}const o=ca(t,n);if(un.size>=sa){const a=un.keys().next().value;un.delete(a)}return un.set(i,o),o}function hs(e,t){let n=e.get(t);return n||(n=new Map,e.set(t,n)),n}function Nt(e,t,n){let s=e.get(t);return s||(s=n().catch(r=>{throw e.delete(t),r}),e.set(t,s)),s}function Dn(e,t){let n=0;return{alloc:(r,i)=>{const o=Math.max(16,Math.ceil(r/16)*16),a=e.createBuffer({size:o,usage:i});return t.push(a),n+=o,a},getBytes:()=>n,resetBytes:()=>{n=0}}}const an=new WeakMap;function vn(e){const t=e?an.get(e):null;if(t){an.delete(e),t.inUse=!1;for(const n of t.buffers)n.destroy();t.buffers.length=0}}function br(e,t,n){const s=an.get(e);if(s){if(s.key===t&&!s.inUse)return s.inUse=!0,s;if(s.inUse){const o=n();return Ft(bt({key:t},o),{inUse:!0,pooled:!1})}an.delete(e);for(const o of s.buffers)o.destroy();s.buffers.length=0}const r=n(),i=Ft(bt({key:t},r),{inUse:!0,pooled:!0});return an.set(e,i),i}function It(e,t,n){return e.createShaderModule({label:t,code:n})}function ws(e,t,n,s,r){return Be(this,null,function*(){const i=e.createBindGroupLayout({entries:r.map((o,a)=>typeof o=="string"?{binding:a,visibility:GPUShaderStage.COMPUTE,buffer:{type:o}}:{binding:a,visibility:GPUShaderStage.COMPUTE,buffer:o})});try{const o=yield e.createComputePipelineAsync({label:t,layout:e.createPipelineLayout({bindGroupLayouts:[i]}),compute:{module:n,entryPoint:s}});return{bgl:i,pipe:o}}catch(o){if(n!=null&&n.getCompilationInfo){const a=yield n.getCompilationInfo().catch(()=>null),f=a?a.messages.filter(l=>l.type==="error"):[];if(f.length)throw new Error(`meshnet_fast_v4 [${t}] WGSL error: `+f.map(l=>`L${l.lineNum}:${l.linePos} ${l.message}`).join(" | "))}throw o}})}function ps(e,t){const n=t?`enable f16;
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
  let dstX4 = ${Dt}u + wid.x * 8u + x4Loc;
  for (var s : u32 = 0u; s < 4u; s = s + 1u) {
    let zLoc = s * 8u + zOff;
    let r = zLoc * 33u + xBase;
    inp_4[((Z0 + zLoc) * 256u + Y) * ${gt}u + dstX4] =
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
  let dstX4 = ${Dt}u + wid.x * 8u + x4Loc;
  for (var s : u32 = 0u; s < 4u; s = s + 1u) {
    let zl = s * 8u + zOff;
    let r = zl * 33u + xBase;
    inp_4[((Z0 + zl) * 256u + Y) * ${gt}u + dstX4] =
      ${r}(${s}(sh[r]), ${s}(sh[r + 1u]), ${s}(sh[r + 2u]), ${s}(sh[r + 3u]));
  }
}`}function hr(){return`
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
}`}function ia(){return`
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
}`}function la(){return`
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
}`}function on(e,t,n,s,r){return Be(this,null,function*(){const i=hs(ra,e);let o=i.get(t);return o||(o=Be(null,null,function*(){const a=It(e,t,n());return ws(e,t,a,s,r)}).catch(a=>{throw i.delete(t),a}),i.set(t,o)),o})}function Es(e,t,n,s,r){t.fill(0);const i=L*L*L;if(!(r&&e[0]===s&&e[i-1]===s))return{hasBgSkip:!1};if(n.fill(0),(e instanceof Uint8Array||e instanceof Uint8ClampedArray)&&(e.byteOffset&3)===0&&Number.isInteger(s)&&s>=0&&s<=255){const f=new Uint32Array(e.buffer,e.byteOffset,i>>>2),l=new Uint32Array(n.buffer,n.byteOffset,L*L>>>2),u=(s&255)*16843009>>>0;let m=0;for(let g=0;g<L;g++)for(let c=0;c<16384;c++)l[c]|=f[m++]^u}else{let f=0;const l=L*L;for(let u=0;u<L;u++)for(let m=0;m<l;m++,f++)e[f]!==s&&(n[m]=1)}let a=0;for(let f=0;f<L;f++){const l=f*L;for(let u=0;u<L;u++)n[l+u]!==0&&(t[u*L+f]=1,a++)}return a===0||a>=6e4?{hasBgSkip:!1}:{hasBgSkip:!0}}function wr(e){return e?`${e.grayMask}_${e.whiteMask}_${e.csfMask}_${e.temperature}_${e.supportTemperature}`:"seg"}function vr(u,m,g,c,p,d,b){return Be(this,arguments,function*(e,t,n,s,r,i,o,{includeCls:a=!0,sequential:f=!1,shouldAbort:l=null}={}){var K;const P=hs(_r,e),_=s?1:0,w=r||"none",v=o.useUniformWeff?1:0,y=(V,re,ee,Z)=>ws(e,V,re,ee,Z),h=["storage","storage","storage","storage"],k=["read-only-storage","storage","storage","storage","storage","storage","read-only-storage","storage","uniform","uniform","uniform"],F=["read-only-storage","read-only-storage","storage","storage","read-only-storage","uniform"],$=["storage","storage","storage","storage","read-only-storage","read-only-storage",{type:"uniform",hasDynamicOffset:!0,minBindingSize:32}],M=["storage","storage","storage","storage","read-only-storage","read-only-storage","read-only-storage","uniform"],x=["read-only-storage","read-only-storage","read-only-storage","read-only-storage","storage","storage",o.useUniformWeff?"uniform":"read-only-storage","read-only-storage",{type:"uniform",hasDynamicOffset:!0,minBindingSize:32}],C=["read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","storage","uniform","uniform","uniform"],z=`128|init|${t.cs}|${t.activation}|${_}`,R=`128|conv0|${t.cs}|${t.dilations[0]}|${t.norm}|${_}|${w}`,I=`128|prep|${t.chan}|${t.cs}|${t.activation}|${t.norm}|${_}`,T=`128|flush|${t.cs}|${_}`,B=`128|norm|${t.cs}|${t.activation}|${t.norm}|${_}`,G=`128|conv|${t.chan}|${t.cs}|${t.activation}|${t.norm}|${v}|${_}|${w}`,ae=`128|cls|${t.chan}|${t.cs}|${t.nclass}|${(K=n==null?void 0:n.clsK4)!=null?K:0}|${o.numConvs}|${t.activation}|${t.norm}|${_}|${wr(i)}`,ce=()=>Nt(P,z,()=>{const V=It(e,"init_act8_128",o.initActWgsl());return y("init_act8_128",V,"main",h)}),N=()=>Nt(P,R,()=>Be(null,null,function*(){const V=It(e,"conv0_128",o.conv0Wgsl()),re=yield Promise.all(o.halfPass0?[y("conv0_128_lo",V,"main_lo",k),y("conv0_128_hi",V,"main_hi",k),y("conv0_128_bg_lo",V,"main_bg_lo",k),y("conv0_128_bg_hi",V,"main_bg_hi",k)]:[y("conv0_128",V,"main",k),y("conv0_128_bg",V,"main_bg",k)]);return o.halfPass0?{lo:re[0],hi:re[1],bgLo:re[2],bgHi:re[3]}:{main:re[0],bg:re[1]}})),W=()=>Nt(P,I,()=>Be(null,null,function*(){const V=It(e,"prep_128",o.prepWgsl()),[re,ee]=yield Promise.all([y("moments_finish_128",V,"moments_finish",F),y("prep_weff_128",V,"prep_weff",F)]);return{pMomFin:re,pPrepW:ee}})),X=()=>Nt(P,T,()=>{const V=It(e,"flush_128",o.flushWgsl());return y("flush_stage_128",V,"main",$)}),J=()=>Nt(P,B,()=>Be(null,null,function*(){const V=It(e,"norm_128",o.normWgsl()),[re,ee]=yield Promise.all([y("norm_quant8_128",V,"main",M),y("norm_halo_fill_128",V,"norm_halo_fill",M)]);return{pNorm:re,pNormHalo:ee}})),D=()=>a?Nt(P,ae,()=>{const V=It(e,"cls_128",o.clsWgsl());return y("classify_v4_128",V,"main",C)}):Promise.resolve(null),ue=()=>Nt(P,G,()=>Be(null,null,function*(){const V=It(e,"conv_128",o.convWgsl());if(o.halfPassConv){const[E,Y,q,_e,ne,Fe]=yield Promise.all([y("conv_128_lo",V,"main_lo",x),y("conv_128_hi",V,"main_hi",x),y("conv_128_ext_lo",V,"main_ext_lo",x),y("conv_128_ext_hi",V,"main_ext_hi",x),y("conv_128_bg_lo",V,"main_bg_lo",x),y("conv_128_bg_hi",V,"main_bg_hi",x)]);return{lo:E,hi:Y,extLo:q,extHi:_e,bgLo:ne,bgHi:Fe}}const[re,ee,Z]=yield Promise.all([y("conv_128",V,"main",x),y("conv_128_ext",V,"main_ext",x),y("conv_128_bg",V,"main_bg",x)]);return{main:re,ext:ee,bg:Z}}));if(f){for(const V of[ce,W,X,J,N,ue,D]){if(l!=null&&l())return null;yield V()}return null}const[ie,Ae,fe,$e,j,te,A]=yield Promise.all([ce(),N(),W(),X(),J(),D(),ue()]);return{pInit:ie,pMomFin:fe.pMomFin,pPrepW:fe.pPrepW,pFlush:$e,pNorm:j.pNorm,pNormHalo:j.pNormHalo,pCls:te,pConv0:Ae,pConv:A}})}function xr(m,g,c,p,d,b,P,_){return Be(this,arguments,function*(e,t,n,s,r,i,o,a,{includeCls:f=!0,sequential:l=!1,shouldAbort:u=null}={}){var K;const w=hs(_r,e),v=s?1:0,y=r||"none",h=i?1:0,k=a.useUniformWeff?1:0,F=a.chunkableStd?1:0,$=(V,re,ee,Z)=>ws(e,V,re,ee,Z),M=["storage","storage"],x=["read-only-storage","storage","storage","read-only-storage","read-only-storage","storage","storage","read-only-storage","uniform"],C=["read-only-storage","read-only-storage","storage","storage","storage","storage","read-only-storage","uniform"],z=["storage","storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","uniform"],R=["read-only-storage","read-only-storage","storage","storage","storage","storage",a.useUniformWeff?"uniform":"read-only-storage","read-only-storage",a.chunkableStd?{type:"uniform",hasDynamicOffset:!0,minBindingSize:32}:"uniform"],I=["read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","storage","read-only-storage","uniform"],T=`std|init|${t.cs}|${t.activation}|${v}|${h}`,B=`std|conv0|${t.cs}|${t.dilations[0]}|${t.norm}|${v}|${y}|${h}`,G=`std|prep|${t.chan}|${t.cs}|${t.activation}|${t.norm}|${v}|${h}`,ae=`std|norm|${t.cs}|${t.activation}|${t.norm}|${v}|${h}`,ce=`std|conv|${t.chan}|${t.cs}|${t.activation}|${t.norm}|${k}|${v}|${y}|${h}${F?"|chk1":""}`,N=`std|cls|${t.chan}|${t.cs}|${t.nclass}|${(K=n==null?void 0:n.clsK4)!=null?K:0}|${t.activation}|${t.norm}|${v}|${h}|${wr(o)}`,W=()=>Nt(w,T,()=>{const V=It(e,"init_act8",a.initActWgsl());return $("init_act8",V,"main",M)}),X=()=>Nt(w,B,()=>Be(null,null,function*(){const V=It(e,"conv0",a.conv0Wgsl()),re=yield Promise.all(a.halfPass0?[$("conv0_lo",V,"main_lo",x),$("conv0_hi",V,"main_hi",x),$("conv0_bg_lo",V,"main_bg_lo",x),$("conv0_bg_hi",V,"main_bg_hi",x)]:[$("conv0",V,"main",x),$("conv0_bg",V,"main_bg",x)]);return a.halfPass0?{lo:re[0],hi:re[1],bgLo:re[2],bgHi:re[3]}:{main:re[0],bg:re[1]}})),J=()=>Nt(w,G,()=>Be(null,null,function*(){const V=It(e,"prep",a.prepWgsl()),[re,ee]=yield Promise.all([$("moments_finish",V,"moments_finish",C),$("prep_weff",V,"prep_weff",C)]);return{pMomFin:re,pPrepW:ee}})),D=()=>Nt(w,ae,()=>Be(null,null,function*(){const V=It(e,"norm",a.normWgsl()),[re,ee]=yield Promise.all([$("norm_quant8",V,"main",z),$("norm_halo_fill",V,"norm_halo_fill",z)]);return{pNorm:re,pNormHalo:ee}})),ue=()=>f?Nt(w,N,()=>{const V=It(e,"cls",a.clsWgsl());return $("classify_v4",V,"main",I)}):Promise.resolve(null),ie=()=>Nt(w,ce,()=>Be(null,null,function*(){const V=It(e,"conv",a.convWgsl());if(a.halfPassConv){const[Z,E,Y,q]=yield Promise.all([$("conv_lo",V,"main_lo",R),$("conv_hi",V,"main_hi",R),$("conv_ext_lo",V,"main_ext_lo",R),$("conv_ext_hi",V,"main_ext_hi",R)]);return{lo:Z,hi:E,extLo:Y,extHi:q}}const[re,ee]=yield Promise.all([$("conv",V,"main",R),$("conv_ext",V,"main_ext",R)]);return{main:re,ext:ee}}));if(l){for(const V of[W,J,D,X,ie,ue]){if(u!=null&&u())return null;yield V()}return null}const[Ae,fe,$e,j,te,A]=yield Promise.all([W(),X(),J(),D(),ue(),ie()]);return{pInit:Ae,pMomFin:$e.pMomFin,pPrepW:$e.pPrepW,pNorm:j.pNorm,pNormHalo:j.pNormHalo,pCls:te,pConv0:fe,pConv:A}})}function Ts(e,t,n,s,r){n.fill(0);const i=r&&e[0]===0&&e[e.length-1]===0;let o=0,a=0;if(!i){if(s)for(let f=0;f<L;f++){const l=f*L*fn;for(let u=0;u<L;u++){let m=l+u*fn+32;for(let g=0;g<L;g++,a++,m++){const c=e[a];t[m]=c===0?0:fs(c)}}}else for(let f=0;f<L;f++){const l=f*L*fn;for(let u=0;u<L;u++){const m=f*L*L+u*L;t.set(e.subarray(m,m+L),l+u*fn+32)}}return{hasBgSkip:!1}}for(let f=0;f<L;f++){const l=f*L*fn;for(let u=0;u<L;u++){let m=!1,g=l+u*fn+32;for(let c=0;c<L;c++,a++,g++){const p=e[a];p!==0?(t[g]=s?fs(p):p,m=!0):t[g]=0}m&&(n[f*L+u]=1,o++)}}return o===0||o>=6e4?{hasBgSkip:!1}:{hasBgSkip:!0}}function Un(e,t){const n=new Uint8Array(L*L);for(let s=0;s<L;s++){const r=s*L,i=s-t,o=s+t;for(let a=0;a<L;a++){if(!e[r+a])continue;const f=a-t,l=a+t;if(i>=0){const u=i*L;f>=0&&(n[u+f]=1),n[u+a]=1,l<L&&(n[u+l]=1)}if(f>=0&&(n[r+f]=1),n[r+a]=1,l<L&&(n[r+l]=1),o>=0&&o<L){const u=o*L;f>=0&&(n[u+f]=1),n[u+a]=1,l<L&&(n[u+l]=1)}}}return n}function ua(e,t){const n=new Uint8Array(L*L),s=new Uint8Array(L*L),r=new Int32Array(L+1);for(let i=0;i<L;i++){const o=i*L;for(let a=0;a<L;a++)r[a+1]=r[a]+e[o+a];for(let a=0;a<L;a++)r[Math.min(L-1,a+t)+1]-r[Math.max(0,a-t)]>0&&(n[o+a]=1)}for(let i=0;i<L;i++){for(let o=0;o<L;o++)r[o+1]=r[o]+n[o*L+i];for(let o=0;o<L;o++)r[Math.min(L-1,o+t)+1]-r[Math.max(0,o-t)]>0&&(s[o*L+i]=1)}return s}function Jn(e){const t=new Uint8Array(st);for(let n=0;n<L;n++){const s=n*L,r=n*64;for(let i=0;i<64;i++){const o=s+(i<<2);e[o]|e[o+1]|e[o+2]|e[o+3]&&(t[r+i]=1)}}return t}function Gn(e){const t=new Uint8Array(L*L);for(let n=0;n<L;n++){const s=n*L,r=n*64;for(let i=0;i<64;i++)if(e[r+i]){const o=s+(i<<2);t[o]=1,t[o+1]=1,t[o+2]=1,t[o+3]=1}}return t}function En(e){let t=0;for(let r=0;r<st;r++)t+=e[r];const n=new Uint32Array(t);let s=0;for(let r=0;r<L;r++){const i=r*64;for(let o=0;o<64;o++)e[i+o]&&(n[s++]=r<<8|o)}return n}function cn(e){let t=0;for(let n=0;n<e.length;n++)t+=e[n];return t}function Os(e){const t=new Uint8Array(st);if(e===1024)for(let n=0;n<32;n++)for(let s=0;s<32;s++){const r=n*8+(n*3+s*5&7),i=s*2+(n+s&1);t[r*64+i]=1}else if(e===512)for(let n=0;n<32;n++)for(let s=0;s<16;s++){const r=n*8+(n*3+s*5&7),i=s*4+(n+s*3&3);t[r*64+i]=1}else for(let n=0;n<16;n++)for(let s=0;s<16;s++){const r=n*16+(n*7+s*3&15),i=s*4+(n+s*3&3);t[r*64+i]=1}return t}function yr(e,t,n,s){const r=n.length,i=()=>({isFull:!0,mode:"full",writtenMask:null,computedMask:null,mainStrips:null,extStrips:null,nMomExt:0,normStrips:null,haloRows:null,bgStrip:null,extWeight:0});if(!s||!t.hasBgSkip)return{clsSkipped:!1,clsStrips:null,layers:Array.from({length:r},i)};const o=Jn(ua(e,3)),a=cn(o)<15800,f=a?En(o):null,l=new Array(r);let u=null;for(let _=0;_<r;_++){const w=n[_],v=Un(_===0?e:u,w);if(_>0)for(let h=0;h<L;h++){const k=h<w||h>=L-w,F=h*L;for(let $=0;$<L;$++)(k||$<w||$>=L-w)&&(v[F+$]=1)}u=v;const y=new Uint8Array(st);for(let h=0;h<L;h++){const k=h*L,F=h*64;for(let $=0;$<64;$++){const M=k+($<<2);v[M]|v[M+1]|v[M+2]|v[M+3]||(y[F+$]=1)}}l[_]=y}const m=new Array(r);m[r-1]=o;for(let _=r-2;_>=0;_--)m[_]=Jn(Un(Gn(m[_+1]),n[_+1]));const g=a&&r>=4&&n[r-1]<=2&&n[r-2]<=4&&n[r-3]<=6,c=Math.max(1,r-3),p=new Array(r).fill(null),d=new Array(r).fill(null),b=new Array(r).fill(null);if(g){const w=(st-cn(m[r-1]))/st>=.52?256:512,v=1024,y=Os(w),h=Os(v),k=m[r-1],F=new Uint8Array(st);let $=0;for(let M=0;M<st;M++)y[M]&&!k[M]&&(F[M]=1,$++);if($>0&&$<=Nn&&cn(k)+$<=15360){p[r-1]=F,d[r-1]=new Uint8Array(st),b[r-1]=y;for(let M=r-2;M>=c;M--){const x=new Uint8Array(st),C=m[M+1],z=p[M+1];for(let N=0;N<st;N++)x[N]=C[N]|z[N];const R=Jn(Un(Gn(x),n[M+1])),I=new Uint8Array(st),T=m[M];for(let N=0;N<st;N++)R[N]&&!T[N]&&(I[N]=1);const B=M===c?h:y,G=new Uint8Array(st);let ae=0,ce=0;for(let N=0;N<st;N++)(I[N]||B[N])&&!T[N]&&(G[N]=1,ae++,B[N]&&ce++);if(ce===0||ae>Nn||cn(T)+ae>15360){const N=M+1,W=m[N],X=d[N],J=new Uint8Array(st);let D=0;for(let ue=0;ue<st;ue++)(X[ue]||h[ue])&&!W[ue]&&(J[ue]=1,D++);D<=Nn&&cn(W)+D<=15360&&(p[N]=J,b[N]=h);break}d[M]=I,p[M]=G,b[M]=B}}}const P=new Array(r);for(let _=0;_<r;_++){const w=cn(l[_]),v=st-w,y=p[_]!==null,h=y?cn(m[_])+cn(p[_]):1/0;if(w>=512&&v<=h){const k=new Uint8Array(st);let F=-1;for(let C=0;C<st;C++)l[_][C]?F<0&&(F=C):k[C]=1;const $=k.slice();$[F]=1;const M={z:F>>>6,yWg:F&63,packed:F>>>6<<8|F&63},x=En(k);P[_]={isFull:!1,mode:"rpure",writtenMask:k,computedMask:$,mainStrips:x,extStrips:_===0?null:new Uint32Array([M.packed]),nMomExt:_===0?0:1,normStrips:x,haloRows:null,bgStrip:M,extWeight:w}}else if(y&&h<=15360){const k=m[_],F=p[_],$=d[_],M=b[_],x=En(k),C=[],z=[];for(let G=0;G<L;G++){const ae=G*64;for(let ce=0;ce<64;ce++){const N=ae+ce;if(!F[N])continue;const W=G<<8|ce;M[N]?C.push(W):z.push(W)}}const R=C.length;if(R===0){P[_]=i();continue}const I=new Uint32Array(C.length+z.length);I.set(C,0),I.set(z,C.length);const T=new Uint8Array(st),B=new Uint8Array(st);for(let G=0;G<st;G++)T[G]=k[G]|$[G],B[G]=k[G]|F[G];P[_]={isFull:!1,mode:"bwd",writtenMask:T,computedMask:B,mainStrips:x,extStrips:I,nMomExt:R,normStrips:_+1<r?En(T):null,haloRows:null,bgStrip:null,extWeight:(st-x.length)/R}}else P[_]=i()}for(let _=r-2;_>=0;_--)P[_].mode==="bwd"&&P[_+1].mode!=="bwd"&&(P[_]=i());for(let _=0;_<r-1;_++){const w=P[_];if(w.mode!=="rpure")continue;const v=P[_+1],y=v.isFull?new Uint8Array(L*L).fill(1):Un(Gn(v.computedMask),n[_+1]),h=Gn(w.writtenMask),k=[];for(let F=0;F<L;F++){const $=F*L;for(let M=0;M<L;M++)y[$+M]&&!h[$+M]&&k.push(F<<8|M)}k.length>0&&(w.haloRows=new Uint32Array(k))}return{clsSkipped:a,clsStrips:f,layers:P}}function ca(e,t){const n=t.chan,s=t.cs,r=s/4,i=t.nclass,o=Math.ceil(i/4),{convs:a,affines:f,classifier:l}=e,u=a.length,m=27*r,g=9*s*3*r,c=s*o,p=(m+(u-1)*g+c)*4,d=new Float32Array(p),b=4*s,P=u*b,_=new Float32Array(P+o*4),w=(h,k,F)=>{if(t.norm!=="gn"||k>=n)return 1;const $=a[h],M=F*27,x=k*M;let C=0;for(let z=0;z<M;z++)C+=Math.abs($.w[x+z]);return Math.max(C/16,1e-6)};for(let h=0;h<a[0].outC;h++){const k=w(0,h,a[0].inC),F=1/k;for(let $=0;$<27;$++)d[$*s+h]=a[0].w[h*27+$]*F;_[2*s+h]=t.eps/(k*k),a[0].bias&&(_[3*s+h]=a[0].bias[h])}for(let h=a[0].outC;h<s;h++)_[2*s+h]=t.eps;for(let h=1;h<u;h++){const k=a[h],F=(m+(h-1)*g)*4,$=h*b;for(let M=0;M<k.outC;M++){const x=w(h,M,k.inC),C=1/x,z=M>>>2,R=M&3;for(let I=0;I<9;I++)for(let T=0;T<k.inC;T++)for(let B=0;B<3;B++){const G=I*3+B,ae=F+(((I*s+T)*3+B)*r+z)*4+R;d[ae]=k.w[(M*k.inC+T)*27+G]*C}_[$+2*s+M]=t.eps/(x*x),k.bias&&(_[$+3*s+M]=k.bias[M])}for(let M=k.outC;M<s;M++)_[$+2*s+M]=t.eps}for(let h=0;h<u;h++){const k=h*b,F=f[h];for(let $=0;$<n;$++)t.norm==="gn"?(_[k+$]=F!=null&&F.scale?F.scale[$]:1,_[k+s+$]=F!=null&&F.bias?F.bias[$]:0):(_[k+$]=1,_[k+s+$]=0)}const v=m+(u-1)*g,y=v*4;for(let h=0;h<n;h++)for(let k=0;k<i;k++)d[y+h*o*4+k]=l.w[k*l.inC+h];for(let h=0;h<o*4;h++)_[P+h]=h<i?l.bias?l.bias[h]:0:-1e30;return{wF32:d,wF16:na(d),qmetaF32:_,w0Vec4s:m,hiddenVec4PerLayer:g,clsVec4Off:v,clsBiasOff:P,metaStride:b,clsK4:o}}function Pn(e){if(e==="gelu_tanh")return`fn act(x : f32) -> f32 {
  let u = clamp(0.7978845608028654 * (x + 0.044715 * x * x * x), -9.0, 9.0);
  return 0.5 * x * (1.0 + tanh(u));
}`;if(e==="relu")return"fn act(x : f32) -> f32 { return max(x, 0.0); }";if(e==="elu")return"fn act(x : f32) -> f32 { return select(exp(clamp(x, -20.0, 0.0)) - 1.0, x, x >= 0.0); }";throw new Error(`meshnet_fast_v4: unsupported activation '${e}'`)}function $r(e){return e==="gelu_tanh"?{uZeroInt:7,uZeroFloat:7/255,uZeroWord:117901063,sterbenzSub:"1.02734375h",zeroBin:7}:e==="relu"?{uZeroInt:0,uZeroFloat:0,uZeroWord:0,sterbenzSub:"1.0h",zeroBin:0}:{uZeroInt:32,uZeroFloat:32/255,uZeroWord:538976288,sterbenzSub:"1.125h",zeroBin:32}}function Sr({chan:e,clsK4:t,nclass:n,V4:s,suf:r,readBiasStmt:i,biasExpr:o,probCfg:a}){const f=`    var acc0 = ${s}(0.0${r});
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
${dt(4,g=>`    let l${g} = vec4<f32>(acc${g}) + vec4<f32>(${o(g)});
    let m${g} = l${g} > best_v;
    best_v = select(best_v, l${g}, m${g});
    best_k = select(best_k, vec4<u32>(k_base + ${g}u), m${g});
`)}  }

  labels8[row_idx * ${wt}u + x4] = best_k.x | (best_k.y << 8u) | (best_k.z << 16u) | (best_k.w << 24u);`;const l=`f32(${(1/Math.max(a.temperature,1e-6)).toExponential(8)})`,u=`f32(${(1/Math.max(a.supportTemperature,1e-6)).toExponential(8)})`,m=a.temperature===a.supportTemperature;return`  var max_v = vec4<f32>(-1.0e29);
  for (var k4 : u32 = 0u; k4 < ${t}u; k4 = k4 + 1u) {
${f}
${dt(4,g=>`    if (k_base + ${g}u < ${n}u) {
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
${dt(4,g=>`    let k${g} = k_base + ${g}u;
    if (k${g} < ${n}u) {
      let l${g} = vec4<f32>(acc${g}) + vec4<f32>(${o(g)});
      let v${g} = exp(clamp((l${g} - max_v) * ${l}, vec4<f32>(-80.0), vec4<f32>(0.0)));
      let s${g} = ${m?`v${g}`:`exp(clamp((l${g} - max_v) * ${u}, vec4<f32>(-80.0), vec4<f32>(0.0)))`};
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
  }`}function kr({device:e,hasF16:t,nvox:n,outBufBytes:s,inpBuf:r,act8_0:i,labels8Buf:o,readbackBuf:a,pInit:f,bgInit:l,pCls:u,bgCls:m,clsUbo:g,packed:c,modelEntry:p,probCfg:d,canGpuProb:b,probSlots:P,ownedBuffers:_,mkBuf:w}){let v=!1,y=!1,h=!1,k=!1;const F=new Uint8Array(L*L);let $=null,M=null,x=null,C=null;const z=(W,X)=>e.createBindGroup({layout:W,entries:X.map((J,D)=>({binding:D,resource:J&&J.buffer?J:{buffer:J}}))});function R(){if(!$){const W=t?"prep_in_u8_f16":"prep_in_u8_f32";$=Be(null,null,function*(){const{bgl:X,pipe:J}=yield on(e,W,()=>ps(!0,t),"main",["read-only-storage","storage","uniform"]);if(k)return null;const D=w(256*4,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST),ue=new Float32Array(256),ie=z(X,[{buffer:o,offset:0,size:n},r,D]);return{pipe:J,ubo:D,lutF32:ue,bg:ie}}).catch(X=>{throw $=null,X})}return $}function I(){if(!M){const W=t?"prep_in_f32_f16":"prep_in_f32_f32";M=Be(null,null,function*(){const{bgl:X,pipe:J}=yield on(e,W,()=>ps(!1,t),"main",["read-only-storage","storage","uniform"]);if(k)return null;const D=w(16,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST),ue=new Float32Array(4),ie=s>=n*4?z(X,[{buffer:o,offset:0,size:n*4},r,D]):null,Ae=i.size>=n*4?z(X,[{buffer:i,offset:0,size:n*4},r,D]):null;return{pipe:J,ubo:D,f32Tmp:ue,bgLabels:ie,bgAct0:Ae}}).catch(X=>{throw M=null,X})}return M}function T(){return x||(x=Be(null,null,function*(){const{bgl:W,pipe:X}=yield on(e,"transpose_u8_v4",hr,"main",["read-only-storage","storage"]);if(k)return null;const J=z(W,[{buffer:o,offset:0,size:n},{buffer:r,offset:0,size:n}]);return{pipe:X,bg:J}}).catch(W=>{throw x=null,W})),x}function B(){return C||(C=Be(null,null,function*(){const[W,X,J,D]=yield Promise.all([on(e,"prob_unpack_two",la,"main",["read-only-storage","storage","storage"]),on(e,"prob_blur_axis",Gs,"blur_axis",["read-only-storage","storage","read-only-storage","uniform"]),on(e,"prob_blur_z_gate",Gs,"blur_z_gate",["read-only-storage","storage","read-only-storage","uniform"]),on(e,"transpose_f32",ia,"main",["read-only-storage","storage"])]);if(k)return null;const ue=GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST,ie=144,Ae=w(ie,ue),fe=w(ie,ue),$e=w(ie,ue),j=V=>({buffer:V,offset:0,size:s}),te=z(W.bgl,[j(P.pass0HoldBuf),j(P.y0),j(P.y1)]),A=z(W.bgl,[j(o),j(P.b),j(P.sup)]),K=[P.y0,P.y1,P.b].map(V=>({buf:V,bgBlurX:z(X.bgl,[j(V),j(o),j(P.sup),Ae]),bgBlurY:z(X.bgl,[j(o),j(V),j(P.sup),fe]),bgBlurZ:z(J.bgl,[j(V),j(o),j(P.sup),$e]),bgTranspose:z(D.bgl,[j(o),j(V)])}));return{pUnpack:W.pipe,pBlurAxis:X.pipe,pBlurZGate:J.pipe,pTransposeF32:D.pipe,bgUnpack0:te,bgUnpack1:A,tissues:K,uboX:Ae,uboY:fe,uboZ:$e,uboScratch:new ArrayBuffer(ie),lastBlurKey:null}}).catch(W=>{throw C=null,W})),C}function G(){d?b&&B().catch(()=>{}):(R().catch(()=>{}),T().catch(()=>{}))}function ae(){k=!0}function ce(Ae){return Be(this,arguments,function*({volume:W,ioOpts:X,useCone:J,padInputHost:D,headRowHost:ue,hasF16Flag:ie}){var $e;if(X!=null&&X.gpuNativeInput){const j=($e=X.normOffset)!=null?$e:0,te=X.normRange||1,A=W instanceof Uint8Array||W instanceof Uint8ClampedArray,K=s>=n*4||i.size>=n*4;if(A){const Z=Es(W,ue,F,j,J),E=yield R();for(let Y=0;Y<256;Y++)E.lutF32[Y]=Y===j?0:(Y-j)/te;return e.queue.writeBuffer(E.ubo,0,E.lutF32),e.queue.writeBuffer(o,0,W,0,n),{info:Z,runPrePasses(Y,q){(!y||h)&&(Y.clearBuffer(r),y=!0,h=!1);const _e=Y.beginComputePass();if(_e.setPipeline(E.pipe),_e.setBindGroup(0,E.bg),_e.dispatchWorkgroups(8,L,8),_e.end(),q.push("preprocess"),v){const ne=Y.beginComputePass();ne.setPipeline(f.pipe),ne.setBindGroup(0,l),ne.dispatchWorkgroups(1,L,L),ne.end(),q.push("preprocess"),v=!1}}}}if(K){const Z=Es(W,ue,F,j,J),E=yield I(),Y=!(s>=n*4),q=Y?i:o,_e=Y?E.bgAct0:E.bgLabels,ne=W instanceof Float32Array?W:Float32Array.from(W);return E.f32Tmp[0]=j,E.f32Tmp[1]=te,E.f32Tmp[2]=0,E.f32Tmp[3]=0,e.queue.writeBuffer(E.ubo,0,E.f32Tmp),e.queue.writeBuffer(q,0,ne,0,n),{info:Z,runPrePasses(Fe,Ce){(!y||h)&&(Fe.clearBuffer(r),y=!0,h=!1);const Ie=Fe.beginComputePass();if(Ie.setPipeline(E.pipe),Ie.setBindGroup(0,_e),Ie.dispatchWorkgroups(8,L,8),Ie.end(),Ce.push("preprocess"),v||Y){const qe=Fe.beginComputePass();qe.setPipeline(f.pipe),qe.setBindGroup(0,l),qe.dispatchWorkgroups(1,L,L),qe.end(),Ce.push("preprocess"),v=!1}}}}const V=new Float32Array(n);for(let Z=0;Z<n;Z++){const E=W[Z];V[Z]=E===j?0:(E-j)/te}const re=Sn(V,[L,L,L],[2,1,0]),ee=Ts(re,D,ue,ie,J);return e.queue.writeBuffer(r,0,D),y=!0,h=!1,{info:ee,runPrePasses(Z,E){if(v){const Y=Z.beginComputePass();Y.setPipeline(f.pipe),Y.setBindGroup(0,l),Y.dispatchWorkgroups(1,L,L),Y.end(),E.push("preprocess"),v=!1}}}}const fe=Ts(W,D,ue,ie,J);return e.queue.writeBuffer(r,0,D),y=!0,h=!1,{info:fe,runPrePasses(j,te){if(v){const A=j.beginComputePass();A.setPipeline(f.pipe),A.setBindGroup(0,l),A.dispatchWorkgroups(1,L,L),A.end(),te.push("preprocess"),v=!1}}}})}function N(fe){return Be(this,arguments,function*({enc:W,schedule:X,passCategories:J,u4Tmp:D,ioOpts:ue,paced:ie=!1,onProgress:Ae=null}){const $e=X.clsSkipped?X.clsStrips.length:L;if(!d){D[0]=c.clsVec4Off,D[1]=c.clsBiasOff,D[2]=X.clsSkipped?0:1,D[3]=0,e.queue.writeBuffer(g,0,D);{const ne=W.beginComputePass();ne.setPipeline(u.pipe),ne.setBindGroup(0,m),$e>0&&ne.dispatchWorkgroups(1,X.clsSkipped?1:64,$e),ne.end(),J.push("classify")}if(ue!=null&&ue.gpuNativeOutput){const ne=yield T(),Fe=W.beginComputePass();Fe.setPipeline(ne.pipe),Fe.setBindGroup(0,ne.bg),Fe.dispatchWorkgroups(8,L,8),Fe.end(),J.push("postprocess"),h=!0,W.copyBufferToBuffer(r,0,a,0,n),e.queue.submit([W.finish()]),yield a.mapAsync(GPUMapMode.READ);const Ce=new Uint8Array(a.getMappedRange()).slice();return a.unmap(),ie&&Ae&&Ae(1,""),[Ce]}W.copyBufferToBuffer(o,0,a,0,s),e.queue.submit([W.finish()]),yield a.mapAsync(GPUMapMode.READ);const q=new Uint8Array(a.getMappedRange()),_e=new Float32Array(n);for(let ne=0;ne<n;ne++)_e[ne]=q[ne];return a.unmap(),ie&&Ae&&Ae(1,""),[_e]}if(b){const q=yield B();D[0]=c.clsVec4Off,D[1]=c.clsBiasOff,D[2]=X.clsSkipped?0:1,D[3]=0,e.queue.writeBuffer(g,0,D),D[3]=1,e.queue.writeBuffer(P.clsUbo1,0,D);{const Se=W.beginComputePass();Se.setPipeline(u.pipe),Se.setBindGroup(0,m),$e>0&&Se.dispatchWorkgroups(1,X.clsSkipped?1:64,$e),Se.end(),J.push("classify")}W.copyBufferToBuffer(o,0,P.pass0HoldBuf,0,s),X.clsSkipped&&W.clearBuffer(o,0,s);{const Se=W.beginComputePass();Se.setPipeline(u.pipe),Se.setBindGroup(0,P.bgCls1),$e>0&&Se.dispatchWorkgroups(1,X.clsSkipped?1:64,$e),Se.end(),J.push("classify")}v=!0;const _e=`${d.sigma}|${d.supportPower}`,ne=d.sigma>0,Fe=ne?Math.max(1,Math.round(3*d.sigma)):0;if(q.lastBlurKey!==_e){const Se=new Uint32Array(q.uboScratch),Ze=new Float32Array(q.uboScratch);Ze.fill(0);let pt=1;if(ne){pt=0;for(let ut=-Fe;ut<=Fe;ut++){const ft=Math.exp(-.5*ut*ut/(d.sigma*d.sigma));Ze[4+ut+Fe]=ft,pt+=ft}}else Ze[4]=1;Se[1]=Fe,Ze[2]=pt,Se[0]=0,Ze[3]=1,e.queue.writeBuffer(q.uboX,0,q.uboScratch),Se[0]=1,e.queue.writeBuffer(q.uboY,0,q.uboScratch),Se[0]=2,Ze[3]=d.supportPower,e.queue.writeBuffer(q.uboZ,0,q.uboScratch),q.lastBlurKey=_e}{const Se=W.beginComputePass();Se.setPipeline(q.pUnpack),Se.setBindGroup(0,q.bgUnpack0),Se.dispatchWorkgroups(256,256,1),Se.end(),J.push("postprocess");const Ze=W.beginComputePass();Ze.setPipeline(q.pUnpack),Ze.setBindGroup(0,q.bgUnpack1),Ze.dispatchWorkgroups(256,256,1),Ze.end(),J.push("postprocess")}ie&&(e.queue.submit([W.finish()]),yield e.queue.onSubmittedWorkDone(),Ae&&Ae(.992,""),yield pr(),W=e.createCommandEncoder());const Ce=!!(ue!=null&&ue.gpuNativeOutput);for(let Se=0;Se<3;Se++){const Ze=q.tissues[Se];if(ne){const ut=W.beginComputePass();ut.setPipeline(q.pBlurAxis),ut.setBindGroup(0,Ze.bgBlurX),ut.dispatchWorkgroups(4,64,L),ut.end(),J.push("postprocess");const ft=W.beginComputePass();ft.setPipeline(q.pBlurAxis),ft.setBindGroup(0,Ze.bgBlurY),ft.dispatchWorkgroups(4,64,L),ft.end(),J.push("postprocess")}const pt=W.beginComputePass();if(pt.setPipeline(q.pBlurZGate),pt.setBindGroup(0,Ze.bgBlurZ),pt.dispatchWorkgroups(4,64,L),pt.end(),J.push("postprocess"),Ce){const ut=W.beginComputePass();ut.setPipeline(q.pTransposeF32),ut.setBindGroup(0,Ze.bgTranspose),ut.dispatchWorkgroups(8,L,8),ut.end(),J.push("postprocess")}else Se<2&&W.copyBufferToBuffer(o,0,Ze.buf,0,s)}const Ie=Ce?[P.y0,P.y1,P.b]:[P.y0,P.y1,o];W.copyBufferToBuffer(Ie[0],0,a,0,s),e.queue.submit([W.finish()]),yield a.mapAsync(GPUMapMode.READ);const qe=new Float32Array(a.getMappedRange()).slice();a.unmap();const Je=Se=>Be(null,null,function*(){const Ze=e.createCommandEncoder();Ze.copyBufferToBuffer(Se,0,a,0,s),e.queue.submit([Ze.finish()]),yield a.mapAsync(GPUMapMode.READ);const pt=new Float32Array(a.getMappedRange()).slice();return a.unmap(),pt}),Oe=yield Je(Ie[1]),Le=yield Je(Ie[2]);return ie&&Ae&&Ae(1,""),[qe,Oe,Le]}D[0]=c.clsVec4Off,D[1]=c.clsBiasOff,D[2]=X.clsSkipped?0:1,D[3]=0,e.queue.writeBuffer(g,0,D);{const q=W.beginComputePass();q.setPipeline(u.pipe),q.setBindGroup(0,m),$e>0&&q.dispatchWorkgroups(1,X.clsSkipped?1:64,$e),q.end(),J.push("classify"),W.copyBufferToBuffer(o,0,a,0,s)}e.queue.submit([W.finish()]),yield a.mapAsync(GPUMapMode.READ);const j=1/65535,te=new Uint16Array(a.getMappedRange()),A=new Float32Array(n),K=new Float32Array(n);for(let q=0;q<n;q++)A[q]=te[q*2]*j,K[q]=te[q*2+1]*j;a.unmap(),D[3]=1,e.queue.writeBuffer(g,0,D);const V=e.createCommandEncoder();X.clsSkipped&&V.clearBuffer(o,0,s);const re=V.beginComputePass();re.setPipeline(u.pipe),re.setBindGroup(0,m),$e>0&&re.dispatchWorkgroups(1,X.clsSkipped?1:64,$e),re.end(),J.push("classify"),V.copyBufferToBuffer(o,0,a,0,s),e.queue.submit([V.finish()]),yield a.mapAsync(GPUMapMode.READ);const ee=new Uint16Array(a.getMappedRange()),Z=new Float32Array(n),E=new Float32Array(n);for(let q=0;q<n;q++)Z[q]=ee[q*2]*j,E[q]=ee[q*2+1]*j;a.unmap();const Y=Qo([A,K,Z],E,[L,L,L],p);return ue!=null&&ue.gpuNativeOutput?Y.map(q=>Sn(q,[L,L,L],[2,1,0])):Y})}return{prepareInput:ce,finishAndReadback:N,warmupIoPipelines:G,dispose:ae}}function Mr(e,t){if(e==="sg32")return{decls:"",entryArgs:"",add:r=>`subgroupAdd(${r})`,min:r=>`subgroupMin(${r})`,max:r=>`subgroupMax(${r})`};const n=(r,i)=>{const o=f=>r==="+"?`  x = x + subgroupShuffleXor(x, ${f}u);`:`  x = ${r}(x, subgroupShuffleXor(x, ${f}u));`;return e==="sg64"?`fn ${i}(v : f32) -> f32 {
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
             @builtin(subgroup_size) sg_size : u32`,add:r=>`sg32_add(${r}, sg_size)`,min:r=>`sg32_min(${r}, sg_size)`,max:r=>`sg32_max(${r}, sg_size)`}}function Pr({V4:e,sw:t,norm:n,writeMomFn:s,momParams:r,momArgs:i}){const o=n==="none",a=o?"vec2<f32>":"vec4<f32>",f=o?`fn sg32_pack1(a : ${e}, slane : u32, c_out : u32, ${r}) -> u32 {
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
`}function Ar(e){const{cs:t,chan:n,nclass:s,clsK4:r,dilations:i,activation:o,norm:a,hasF16:f,subgroupMode:l="none",splitHalves:u,probCfg:m,chunkableStd:g=!1}=e,c=t/4,p=u?t/2:t,d=p*gt,b=p*wt,P=9*t*3*c,_=P,w=P+c,v=f&&c%2===0&&w*8<=65536,y=$r(o),h=f?`enable f16;
`:"",k=f&&l!=="none",F=k?`enable subgroups;
`:"",$=f?"f16":"f32",M=f?"h":"f",x=`vec4<${$}>`,C=f?256:255,z=N=>{const W=N?".xzyw":"",X=(ie,Ae,fe)=>u&&Ae>=p?`y8_1[${ie} + ${(Ae-p)*wt}u] = ${fe};`:`y8_0[${ie} + ${Ae*wt}u] = ${fe};`;if(k&&(l==="sg32"||l==="sg64"||l==="sg32_64")){const ie=Mr(l,a);return{decls:ie.decls,entryArgs:ie.entryArgs,localHeader:"",emit:({accVar:Ae,cStart:fe,cEnd:$e,hrExpr:j,yRowExpr:te,momMode:A,writeY8Expr:K="true"})=>dt($e-fe,V=>{const re=fe+V,ee=A==="ext_and_main"?`mom_ext[(${j}) * ${t}u + ${re}u] = mv;
      mom_main[(row_idx * 2u + sg) * ${t}u + ${re}u] = mv;`:A==="ext_only"?`mom_ext[(${j}) * ${t}u + ${re}u] = mv;`:`mom_main[(${j}) * ${t}u + ${re}u] = mv;`;return a==="none"?`  {
    let f = vec4<f32>(${Ae}.v_${V}${W});
    let lmn = ${ie.min("min(min(f.x, f.y), min(f.z, f.w))")};
    let lmx = ${ie.max("max(max(f.x, f.y), max(f.z, f.w))")};
    let sp = lmx - lmn;
    let inv = select(0.0, 1.0 / sp, sp > 1e-7);
    if (${K}) {
      ${X(te,re,"pack4x8unorm((f - vec4<f32>(lmn)) * inv)")}
    }
    if (slane == 0u) {
      let mv = vec4<f32>(0.0, 0.0, lmn, sp);
      ${ee}
    }
  }
`:`  {
    let f = vec4<f32>(${Ae}.v_${V}${W});
    let ls = ${ie.add("f.x + f.y + f.z + f.w")};
    let lq = ${ie.add("dot(f, f)")};
    let lmn = ${ie.min("min(min(f.x, f.y), min(f.z, f.w))")};
    let lmx = ${ie.max("max(max(f.x, f.y), max(f.z, f.w))")};
    let sp = lmx - lmn;
    let inv = select(0.0, 1.0 / sp, sp > 1e-7);
    if (${K}) {
      ${X(te,re,"pack4x8unorm((f - vec4<f32>(lmn)) * inv)")}
    }
    if (slane == 0u) {
      let mv = vec4<f32>(ls, lq, lmn, sp);
      ${ee}
    }
  }
`})}}if(k&&l==="sg_small")return{decls:Pr({V4:x,sw:W,norm:a,writeMomFn:`fn write_mom(c_out : u32, mv : vec4<f32>, ext_off : u32, main_off : u32, mom_mode : u32) {
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
`,emit:({accVar:fe,cStart:$e,cEnd:j,hrExpr:te,yRowExpr:A,momMode:K,writeY8Expr:V="true"})=>{const re=K==="ext_and_main"?"1u":K==="ext_only"?"2u":"0u",ee=K==="main"?"0u":`(${te}) * ${t}u`,Z=K==="ext_only"?"0u":`(row_idx * 2u + sg) * ${t}u`;let E=`  let ep_ext_off = ${ee};
  let ep_main_off = ${Z};
`;for(let Y=0;Y<j-$e;Y+=4){const q=$e+Y;E+=`  {
    let qw = reduce_pack4_sg(${fe}.v_${Y}, ${fe}.v_${Y+1}, ${fe}.v_${Y+2}, ${fe}.v_${Y+3}, h, slane, sg_size, sg_id, ${q}u, ep_ext_off, ep_main_off, ${re});
    if (${V}) {
      ${X(A,q,"qw.x")}
      ${X(A,q+1,"qw.y")}
      ${X(A,q+2,"qw.z")}
      ${X(A,q+3,"qw.w")}
    }
  }
`}return E}};const J=`    let c_out = c_base + slane;
    if (mom_mode == 0u) {
      mom_main[main_off + c_out] = mv;
    } else if (mom_mode == 1u) {
      mom_ext[ext_off + c_out] = mv;
      mom_main[main_off + c_out] = mv;
    } else {
      mom_ext[ext_off + c_out] = mv;
    }`;if(a==="none"&&f){const ie=dt(31,fe=>`    {
      let m = sh_mm[rb + ${fe+1}u];
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
${ie}    let fmn = f32(rmn);
    let sp = f32(rmx) - fmn;
    sh_res[h * 4u + slane] = vec2<f32>(fmn, select(0.0, 1.0 / sp, sp > 1e-7));
    let mv = vec4<f32>(0.0, 0.0, fmn, sp);
${J}
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
`,emit:({accVar:fe,cStart:$e,cEnd:j,hrExpr:te,yRowExpr:A,momMode:K,writeY8Expr:V="true"})=>{const re=K==="ext_and_main"?"1u":K==="ext_only"?"2u":"0u",ee=K==="main"?"0u":`(${te}) * ${t}u`,Z=K==="ext_only"?"0u":`(row_idx * 2u + sg) * ${t}u`;let E=`  let ep_ext_off = ${ee};
  let ep_main_off = ${Z};
`;for(let Y=0;Y<j-$e;Y+=4){const q=$e+Y;E+=`  {
    let qw = reduce_pack4(${fe}.v_${Y}, ${fe}.v_${Y+1}, ${fe}.v_${Y+2}, ${fe}.v_${Y+3}, h, slane, ${q}u, ep_ext_off, ep_main_off, ${re});
    if (${V}) {
      ${X(A,q,"qw.x")}
      ${X(A,q+1,"qw.y")}
      ${X(A,q+2,"qw.z")}
      ${X(A,q+3,"qw.w")}
    }
  }
`}return E}}}if(a==="none"){const ie=dt(32,fe=>`    {
      let m = sh_mm[rb + ${fe}u];
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
${ie}    let sp = rmx - rmn;
    sh_res[h * 4u + slane] = vec2<f32>(rmn, select(0.0, 1.0 / sp, sp > 1e-7));
    let mv = vec4<f32>(0.0, 0.0, rmn, sp);
${J}
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
`,emit:({accVar:fe,cStart:$e,cEnd:j,hrExpr:te,yRowExpr:A,momMode:K,writeY8Expr:V="true"})=>{const re=K==="ext_and_main"?"1u":K==="ext_only"?"2u":"0u",ee=K==="main"?"0u":`(${te}) * ${t}u`,Z=K==="ext_only"?"0u":`(row_idx * 2u + sg) * ${t}u`;let E=`  let ep_ext_off = ${ee};
  let ep_main_off = ${Z};
`;for(let Y=0;Y<j-$e;Y+=4){const q=$e+Y;E+=`  {
    let qw = reduce_pack4(${fe}.v_${Y}, ${fe}.v_${Y+1}, ${fe}.v_${Y+2}, ${fe}.v_${Y+3}, h, slane, ${q}u, ep_ext_off, ep_main_off, ${re});
    if (${V}) {
      ${X(A,q,"qw.x")}
      ${X(A,q+1,"qw.y")}
      ${X(A,q+2,"qw.z")}
      ${X(A,q+3,"qw.w")}
    }
  }
`}return E}}}if(f){const ie=dt(31,fe=>{const $e=fe+1;return`    {
      let s = sh_sq[rb + ${$e}u];
      let m = sh_mm[rb + ${$e}u];
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
${ie}    let fmn = f32(rmn);
    let sp = f32(rmx) - fmn;
    sh_res[h * 4u + slane] = vec2<f32>(fmn, select(0.0, 1.0 / sp, sp > 1e-7));
    let mv = vec4<f32>(rs, rq, fmn, sp);
${J}
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
`,emit:({accVar:fe,cStart:$e,cEnd:j,hrExpr:te,yRowExpr:A,momMode:K,writeY8Expr:V="true"})=>{const re=K==="ext_and_main"?"1u":K==="ext_only"?"2u":"0u",ee=K==="main"?"0u":`(${te}) * ${t}u`,Z=K==="ext_only"?"0u":`(row_idx * 2u + sg) * ${t}u`;let E=`  let ep_ext_off = ${ee};
  let ep_main_off = ${Z};
`;for(let Y=0;Y<j-$e;Y+=4){const q=$e+Y;E+=`  {
    let qw = reduce_pack4(${fe}.v_${Y}, ${fe}.v_${Y+1}, ${fe}.v_${Y+2}, ${fe}.v_${Y+3}, h, slane, ${q}u, ep_ext_off, ep_main_off, ${re});
    if (${V}) {
      ${X(A,q,"qw.x")}
      ${X(A,q+1,"qw.y")}
      ${X(A,q+2,"qw.z")}
      ${X(A,q+3,"qw.w")}
    }
  }
`}return E}}}const D=dt(32,ie=>`    {
      let s = sh_sq[rb + ${ie}u];
      let m = sh_mm[rb + ${ie}u];
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
${D}    let sp = rmx - rmn;
    sh_res[h * 2u + slane] = vec2<f32>(rmn, select(0.0, 1.0 / sp, sp > 1e-7));
    let mv = vec4<f32>(rs, rq, rmn, sp);
${J}
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
`,emit:({accVar:ie,cStart:Ae,cEnd:fe,hrExpr:$e,yRowExpr:j,momMode:te,writeY8Expr:A="true"})=>{const K=te==="ext_and_main"?"1u":te==="ext_only"?"2u":"0u",V=te==="main"?"0u":`(${$e}) * ${t}u`,re=te==="ext_only"?"0u":`(row_idx * 2u + sg) * ${t}u`;let ee=`  let ep_ext_off = ${V};
  let ep_main_off = ${re};
`;for(let Z=0;Z<fe-Ae;Z+=2){const E=Ae+Z;ee+=`  {
    let qw = reduce_pack2(${ie}.v_${Z}, ${ie}.v_${Z+1}, h, slane, ${E}u, ep_ext_off, ep_main_off, ${K});
    if (${A}) {
      ${X(j,E,"qw.x")}
      ${X(j,E+1,"qw.y")}
    }
  }
`}return ee}}},R=()=>`
@group(0) @binding(0) var<storage, read_write> act0 : array<u32>;
@group(0) @binding(1) var<storage, read_write> act1 : array<u32>;
@compute @workgroup_size(${gt}, 1, 1)
fn main(@builtin(local_invocation_id) lid : vec3<u32>,
        @builtin(workgroup_id) wid : vec3<u32>) {
  let row_base = (wid.z * 256u + wid.y) * ${d}u + lid.x;
  let val = ${y.uZeroWord}u;
  for (var c : u32 = 0u; c < ${p}u; c = c + 1u) {
    let idx = row_base + c * ${gt}u;
    act0[idx] = val;
    ${u?"act1[idx] = val;":""}
  }
}`,I=i[0];return{initActWgsl:R,conv0Wgsl:()=>{const N=!f&&u,W=z(!1),X=($e,j)=>{const te=$e/4,A=j/4;return dt(A-te,K=>{const V=te+K,re=V*4;return`          {
            let w0 = w16_4[wb + ${V}u];
            let w1 = w16_4[wb + ${c+V}u];
            let w2 = w16_4[wb + ${2*c+V}u];
            a_${re}     = fma(vn, ${x}(w0.x), fma(vc, ${x}(w1.x), fma(vp, ${x}(w2.x), a_${re})));
            a_${re+1} = fma(vn, ${x}(w0.y), fma(vc, ${x}(w1.y), fma(vp, ${x}(w2.y), a_${re+1})));
            a_${re+2} = fma(vn, ${x}(w0.z), fma(vc, ${x}(w1.z), fma(vp, ${x}(w2.z), a_${re+2})));
            a_${re+3} = fma(vn, ${x}(w0.w), fma(vc, ${x}(w1.w), fma(vp, ${x}(w2.w), a_${re+3})));
          }
`})},J=Math.floor(I/4),D=I%4;let ue="";D===0?ue=`
        let vn = inp_4[base - ${J}u];
        let vc = inp_4[base];
        let vp = inp_4[base + ${J}u];`:J===0&&D===1?ue=`
        let vL = inp_4[base - 1u];
        let vc = inp_4[base];
        let vR = inp_4[base + 1u];
        let vn = ${x}(vL.w, vc.xyz);
        let vp = ${x}(vc.yzw, vR.x);`:D===1?ue=`
        let vL = inp_4[base - ${J+1}u];
        let vN = inp_4[base - ${J}u];
        let vc = inp_4[base];
        let vP = inp_4[base + ${J}u];
        let vR = inp_4[base + ${J+1}u];
        let vn = ${x}(vL.w, vN.xyz);
        let vp = ${x}(vP.yzw, vR.x);`:D===2?ue=`
        let vL = inp_4[base - ${J+1}u];
        let vN = ${J===0?"inp_4[base]":`inp_4[base - ${J}u]`};
        let vc = ${J===0?"vN":"inp_4[base]"};
        let vP = ${J===0?"vN":`inp_4[base + ${J}u]`};
        let vR = inp_4[base + ${J+1}u];
        let vn = ${x}(vL.zw, vN.xy);
        let vp = ${x}(vP.zw, vR.xy);`:ue=`
        let vL = inp_4[base - ${J+1}u];
        let vN = ${J===0?"inp_4[base]":`inp_4[base - ${J}u]`};
        let vc = ${J===0?"vN":"inp_4[base]"};
        let vP = ${J===0?"vN":`inp_4[base + ${J}u]`};
        let vR = inp_4[base + ${J+1}u];
        let vn = ${x}(vL.yzw, vN.x);
        let vp = ${x}(vP.w, vR.xyz);`;const ie=($e,j,te,A)=>{const K=A-te,V=dt(K,Z=>`  v_${Z} : ${x},
`),re=dt(K,Z=>{const E=te+Z;return a==="none"?`  var a_${E} = ${x}(${$}(qmeta[${3*t+E}u]));
`:`  var a_${E} = ${x}(0.0${M});
`}),ee=Array.from({length:K},(Z,E)=>`a_${te+E}`).join(", ");return`struct ${j} {
${V}};
fn ${$e}(y : i32, z : i32, x_pad : u32) -> ${j} {
${re}  var tap_yz : u32 = 0u;
  for (var dz : i32 = -1; dz <= 1; dz = dz + 1) {
    let sz = z + dz * ${I};
    for (var dy : i32 = -1; dy <= 1; dy = dy + 1) {
      let sy = y + dy * ${I};
      if ((u32(sz) | u32(sy)) < 256u) {
        let base = (u32(sz) * 256u + u32(sy)) * ${gt}u + x_pad;
${ue}
        let wb = tap_yz * ${3*c}u;
${X(te,A)}
      }
      tap_yz = tap_yz + 1u;
    }
  }
  return ${j}(${ee});
}
`},Ae=($e,j,te,A,K)=>{const V=K?`  let y = i32(p0.bg_y0 + lid.y);
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
fn ${$e}(@builtin(local_invocation_id) lid : vec3<u32>,
             @builtin(workgroup_id) wid : vec3<u32>${W.entryArgs||""}) {
  let sg = lid.x >> 5u;
  let slane = lid.x & 31u;
${W.localHeader}  let x_pad = lid.x + ${Dt}u;
${V}
  let acc = ${j}(y, z, x_pad);
  let row_idx = u32(z) * 256u + u32(y);
  let y_row_base = row_idx * ${b}u + lid.x;
${W.emit({accVar:"acc",cStart:te,cEnd:A,hrExpr:re,yRowExpr:"y_row_base",momMode:K?"ext_only":"main"})}}`},fe=N?ie("run_conv0_lo","Conv0AccLo",0,p)+ie("run_conv0_hi","Conv0AccHi",p,t)+Ae("main_lo","run_conv0_lo",0,p,!1)+Ae("main_hi","run_conv0_hi",p,t,!1)+Ae("main_bg_lo","run_conv0_lo",0,p,!0)+Ae("main_bg_hi","run_conv0_hi",p,t,!0):ie("run_conv0","Conv0Acc",0,t)+Ae("main","run_conv0",0,t,!1)+Ae("main_bg","run_conv0",0,t,!0);return`${h}${F}
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
${W.decls}${fe}`},prepWgsl:()=>`${h}
${Pn(o)}
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
  for (var idx : u32 = lid; idx < ${P}u; idx = idx + 256u) {
    let ic = (idx / ${3*c}u) % ${t}u;
    let qs = mom_stats[ic * 2u].z;
    w_eff[idx] = w16_4[pp.next_w_vec4_off + idx] * ${$}(qs * scale_num);
  }
  if (lid < ${c}u) {
    ${a==="none"?`
    let mb = pp.next_meta_off + ${3*t}u + lid * 4u;
    w_eff[${_}u + lid] = ${x}(${$}(qmeta[mb]), ${$}(qmeta[mb + 1u]), ${$}(qmeta[mb + 2u]), ${$}(qmeta[mb + 3u]));
    `:`
    w_eff[${_}u + lid] = ${x}(0.0${M});
    `}
  }
}`,normWgsl:()=>`${Pn(o)}
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
  let x_pad = x4 + ${Dt}u;
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
  let a_base = row_idx * ${d}u + x_pad;
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
    act8_0[a_base + c * ${gt}u] = pack4x8unorm((a * inv_qs + vec4<f32>(${y.zeroBin.toFixed(1)})) * (1.0 / 255.0));
  }
  ${u?`
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
    act8_1[a_base + c * ${gt}u] = pack4x8unorm((a * inv_qs + vec4<f32>(${y.zeroBin.toFixed(1)})) * (1.0 / 255.0));
  }`:""}
}

@compute @workgroup_size(64, 4, 1)
fn norm_halo_fill(@builtin(local_invocation_id) lid : vec3<u32>,
                  @builtin(workgroup_id) wid : vec3<u32>) {
  let idx = wid.y * 4u + lid.y;
  if (idx >= np.n_halo) { return; }
  let x4 = lid.x;
  let sg = x4 >> 5u;
  let x_pad = x4 + ${Dt}u;
  let y_base = np.bg_row * ${b}u + x4;
  let mom_base = sg * ${t}u;
  let dst_row = norm_aux[np.halo_off + idx];
  let a_base = dst_row * ${d}u + x_pad;

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
    act8_0[a_base + c * ${gt}u] = pack4x8unorm((a * inv_qs + vec4<f32>(${y.zeroBin.toFixed(1)})) * (1.0 / 255.0));
  }
  ${u?`
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
    act8_1[a_base + c * ${gt}u] = pack4x8unorm((a * inv_qs + vec4<f32>(${y.zeroBin.toFixed(1)})) * (1.0 / 255.0));
  }`:""}
}`,convWgsl:()=>{const N=!f&&u,W=z(f),X=(j,te)=>f?`
          let ${j} = vec4<f16>(vec2<f16>(unpack2x16float(((${te} & 0x00FF00FFu) << 2u) | 0x3C003C00u)), vec2<f16>(unpack2x16float(((${te} >> 6u) & 0x03FC03FCu) | 0x3C003C00u))) - vec4<f16>(${y.sterbenzSub});`:`
          let ${j} = unpack4x8unorm(${te}) - vec4<f32>(${y.uZeroFloat});`,J=j=>`
          let uL = ${j}[base - off0];
          let uN = ${j}[base - off1];
          let uC = ${j}[base];
          let uP = ${j}[base + off1];
          let uR = ${j}[base + off0];
          let u_neg = (uL >> sh_l) | (uN << sh_r);
          let u_pos = (uP >> sh_r) | (uR << sh_l);`+X("vn","u_neg")+X("vc","uC")+X("vp","u_pos"),D=(j,te)=>{const A=j/4,K=te/4;if(v){const V=c/2,re=c;let ee="";for(let Z=A;Z<K;Z+=2){const E=Z*4,Y=Z/2;ee+=`          {
            let wp0 = w_eff_u[wbu + ${Y}u];
            let wp1 = w_eff_u[wbu + ${V+Y}u];
            let wp2 = w_eff_u[wbu + ${re+Y}u];
            let w0a = u4_lo(wp0);
            let w0b = u4_hi(wp0);
            let w1a = u4_lo(wp1);
            let w1b = u4_hi(wp1);
            let w2a = u4_lo(wp2);
            let w2b = u4_hi(wp2);
            a_${E}     = fma(vn, vec4<f16>(w0a.x), fma(vc, vec4<f16>(w1a.x), fma(vp, vec4<f16>(w2a.x), a_${E})));
            a_${E+1} = fma(vn, vec4<f16>(w0a.y), fma(vc, vec4<f16>(w1a.y), fma(vp, vec4<f16>(w2a.y), a_${E+1})));
            a_${E+2} = fma(vn, vec4<f16>(w0a.z), fma(vc, vec4<f16>(w1a.z), fma(vp, vec4<f16>(w2a.z), a_${E+2})));
            a_${E+3} = fma(vn, vec4<f16>(w0a.w), fma(vc, vec4<f16>(w1a.w), fma(vp, vec4<f16>(w2a.w), a_${E+3})));
            a_${E+4} = fma(vn, vec4<f16>(w0b.x), fma(vc, vec4<f16>(w1b.x), fma(vp, vec4<f16>(w2b.x), a_${E+4})));
            a_${E+5} = fma(vn, vec4<f16>(w0b.y), fma(vc, vec4<f16>(w1b.y), fma(vp, vec4<f16>(w2b.y), a_${E+5})));
            a_${E+6} = fma(vn, vec4<f16>(w0b.z), fma(vc, vec4<f16>(w1b.z), fma(vp, vec4<f16>(w2b.z), a_${E+6})));
            a_${E+7} = fma(vn, vec4<f16>(w0b.w), fma(vc, vec4<f16>(w1b.w), fma(vp, vec4<f16>(w2b.w), a_${E+7})));
          }
`}return ee}return dt(K-A,V=>{const re=A+V,ee=re*4;return`          {
            let w0 = w_eff[wb + ${re}u];
            let w1 = w_eff[wb + ${c+re}u];
            let w2 = w_eff[wb + ${2*c+re}u];
            a_${ee}     = fma(vn, ${x}(w0.x), fma(vc, ${x}(w1.x), fma(vp, ${x}(w2.x), a_${ee})));
            a_${ee+1} = fma(vn, ${x}(w0.y), fma(vc, ${x}(w1.y), fma(vp, ${x}(w2.y), a_${ee+1})));
            a_${ee+2} = fma(vn, ${x}(w0.z), fma(vc, ${x}(w1.z), fma(vp, ${x}(w2.z), a_${ee+2})));
            a_${ee+3} = fma(vn, ${x}(w0.w), fma(vc, ${x}(w1.w), fma(vp, ${x}(w2.w), a_${ee+3})));
          }
`})},ue=(j,te,A,K)=>{const V=K-A,re=dt(V,_e=>`  v_${_e} : ${x},
`),ee=dt(V,_e=>{const ne=A+_e;if(a==="none"){const Fe=ne>>>2,Ce=["x","y","z","w"][ne&3];if(v){const Ie=_+Fe>>>1,qe=_+Fe&1?"u4_hi":"u4_lo";return`  var a_${ne} = ${x}(${qe}(w_eff_u[${Ie}u]).${Ce});
`}return`  var a_${ne} = ${x}(w_eff[${_+Fe}u].${Ce});
`}return`  var a_${ne} = ${x}(0.0${M});
`}),Z=p<=8?`(${p}u + cp.pad0)`:`${p}u`,E=v?`        let wbu_tap = tap_yz * ${t*3*c/2}u;
        for (var ic : u32 = 0u; ic < ${Z}; ic = ic + 1u) {
          let base = row_off + ic * ${gt}u;
${J("act8_0")}
          let wbu = wbu_tap + ic * ${3*c/2}u;
${D(A,K)}
        }`:`        let wb_tap = tap_yz * ${t*3*c}u;
        for (var ic : u32 = 0u; ic < ${Z}; ic = ic + 1u) {
          let base = row_off + ic * ${gt}u;
${J("act8_0")}
          let wb = wb_tap + ic * ${3*c}u;
${D(A,K)}
        }`,Y=v?`        for (var ic : u32 = 0u; ic < ${Z}; ic = ic + 1u) {
          let base = row_off + ic * ${gt}u;
${J("act8_1")}
          let wbu = wbu_tap + (${p}u + ic) * ${3*c/2}u;
${D(A,K)}
        }`:`        for (var ic : u32 = 0u; ic < ${Z}; ic = ic + 1u) {
          let base = row_off + ic * ${gt}u;
${J("act8_1")}
          let wb = wb_tap + (${p}u + ic) * ${3*c}u;
${D(A,K)}
        }`,q=Array.from({length:V},(_e,ne)=>`a_${A+ne}`).join(", ");return`struct ${te} {
${re}};
fn ${j}(y : i32, z : i32, x_pad : u32, dp : u32) -> ${te} {
${ee}  let d_step = i32(dp & 63u);
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
        let row_off = (u32(sz) * 256u + u32(sy)) * ${d}u + x_pad;
${E}
        ${u?Y:""}
      }
      tap_yz = tap_yz + 1u;
    }
  }
  return ${te}(${q});
}
`},ie=(j,te,A,K,V)=>{const re=V?g?`
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
  }`,ee=V?g?"ext_i * 8u + lid.y * 2u + sg":"wid.z * 8u + lid.y * 2u + sg":"row_idx * 2u + sg",Z=V?"(((dp >> 24u) & 1u) != 0u)":"true";return`
@compute @workgroup_size(64, 4, 1)
fn ${j}(@builtin(local_invocation_id) lid : vec3<u32>,
             @builtin(workgroup_id) wid : vec3<u32>${W.entryArgs||""}) {
  let x4 = lid.x;
  let sg = x4 >> 5u;
  let slane = x4 & 31u;
${W.localHeader}  let x_pad = x4 + ${Dt}u;
${re}
  let dp = cp.d_pack;
  let acc = ${te}(y, z, x_pad, dp);
  let row_idx = u32(z) * 256u + u32(y);
  let y_row_base = row_idx * ${b}u + x4;
${W.emit({accVar:"acc",cStart:A,cEnd:K,hrExpr:ee,yRowExpr:"y_row_base",momMode:V?"ext_and_main":"main",writeY8Expr:Z})}}`},Ae=N?ue("run_conv_lo","ConvAccLo",0,p)+ue("run_conv_hi","ConvAccHi",p,t)+ie("main_lo","run_conv_lo",0,p,!1)+ie("main_hi","run_conv_hi",p,t,!1)+ie("main_ext_lo","run_conv_lo",0,p,!0)+ie("main_ext_hi","run_conv_hi",p,t,!0):ue("run_conv","ConvAcc",0,t)+ie("main","run_conv",0,t,!1)+ie("main_ext","run_conv",0,t,!0),fe=v?`fn u4_lo(u : vec4<u32>) -> vec4<f16> {
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
${fe}
@group(0) @binding(7) var<storage, read> strips : array<u32>;
@group(0) @binding(8) var<uniform> cp : ConvParams;
${W.decls}${Ae}`},clsWgsl:()=>`${h}
${Pn(o)}
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
    feat[c] = ${x}(fv);
  }

  let w_cls = cp.w_vec4_off;
  let m_cls = cp.bias_off;
${Sr({chan:n,clsK4:r,nclass:s,V4:x,suf:M,readBiasStmt:"",biasExpr:N=>`qmeta[m_cls + k_base + ${N}u]`,probCfg:m})}
}`,totalWEffVec4s:w,useUniformWeff:v,csHalf:p,chunkableStd:g,halfPass0:!f&&u,halfPassConv:!f&&u}}function zr(e){const{cs:t,chan:n,nclass:s,clsK4:r,dilations:i,activation:o,norm:a,hasF16:f,subgroupMode:l="none",numConvs:u,probCfg:m}=e,g=t/4,c=t/2,p=t/4,d=g*gt,b=16384,P=t*wt,w=t*2+4,v=w+Wn*t,y=4*t,h=(u*y+r*4)/4,k=9*t*3*p,F=k,$=k+p,M=f&&p%2===0&&$*8<=65536,x=$r(o),C=f?`enable f16;
`:"",z=f&&l!=="none",R=z?`enable subgroups;
`:"",I=f?"f16":"f32",T=f?"h":"f",B=`vec4<${I}>`,G=f?256:255,ae=j=>{const te=j?".xzyw":"",A=(ee,Z,E)=>{if(ee==="stage_bg")return`stage[s_bg_base + ${Z*wt}u] = ${E};`;if(ee==="stage")return`stage[s_row_base + ${Z*wt}u] = ${E};`;const Y=Math.floor(Z/g),q=Z%g;return`if (use_act) { act8_${Y}[a_row_base + ${q*gt}u] = ${E}; } else { stage[s_row_base + ${Z*wt}u] = ${E}; }`};if(z&&(l==="sg32"||l==="sg64"||l==="sg32_64")){const ee=Mr(l,a);return{decls:ee.decls,entryArgs:ee.entryArgs,localHeader:"",emit:({accVar:Z,cStart:E,cEnd:Y,hrExpr:q,storeMode:_e,momOffExpr:ne,alsoWriteMomMain:Fe=!1,writeY8Expr:Ce="true"})=>dt(Y-E,Ie=>{const qe=E+Ie;return a==="none"?`  {
    let f = vec4<f32>(${Z}.v_${Ie}${te});
    let lmn = ${ee.min("min(min(f.x, f.y), min(f.z, f.w))")};
    let lmx = ${ee.max("max(max(f.x, f.y), max(f.z, f.w))")};
    let sp = lmx - lmn;
    let inv = select(0.0, 1.0 / sp, sp > 1e-7);
    if (${Ce}) {
      ${A(_e,qe,"pack4x8unorm((f - vec4<f32>(lmn)) * inv)")}
    }
    if (slane == 0u) {
      let mv = vec4<f32>(0.0, 0.0, lmn, sp);
      mom[${ne} + (${q}) * ${t}u + ${qe}u] = mv;
      ${Fe?`mom[${w}u + (row_idx * 2u + sg) * ${t}u + ${qe}u] = mv;`:""}
    }
  }
`:`  {
    let f = vec4<f32>(${Z}.v_${Ie}${te});
    let ls = ${ee.add("f.x + f.y + f.z + f.w")};
    let lq = ${ee.add("dot(f, f)")};
    let lmn = ${ee.min("min(min(f.x, f.y), min(f.z, f.w))")};
    let lmx = ${ee.max("max(max(f.x, f.y), max(f.z, f.w))")};
    let sp = lmx - lmn;
    let inv = select(0.0, 1.0 / sp, sp > 1e-7);
    if (${Ce}) {
      ${A(_e,qe,"pack4x8unorm((f - vec4<f32>(lmn)) * inv)")}
    }
    if (slane == 0u) {
      let mv = vec4<f32>(ls, lq, lmn, sp);
      mom[${ne} + (${q}) * ${t}u + ${qe}u] = mv;
      ${Fe?`mom[${w}u + (row_idx * 2u + sg) * ${t}u + ${qe}u] = mv;`:""}
    }
  }
`})}}if(z&&l==="sg_small")return{decls:Pr({V4:B,sw:te,norm:a,writeMomFn:`fn write_mom(c_out : u32, mv : vec4<f32>, mom_off : u32, main_off : u32, also_main : bool) {
  mom[mom_off + c_out] = mv;
  if (also_main) {
    mom[main_off + c_out] = mv;
  }
}
`,momParams:"mom_off : u32, main_off : u32, also_main : bool",momArgs:"mom_off, main_off, also_main"}),entryArgs:`,
             @builtin(subgroup_size) sg_size : u32,
             @builtin(subgroup_invocation_id) sg_id : u32`,localHeader:`  let h = lid.y * 2u + sg;
`,emit:({accVar:E,cStart:Y,cEnd:q,hrExpr:_e,storeMode:ne,momOffExpr:Fe,alsoWriteMomMain:Ce=!1,writeY8Expr:Ie="true"})=>{const qe=`${Fe} + (${_e}) * ${t}u`,Je=Ce?`${w}u + (row_idx * 2u + sg) * ${t}u`:"0u";let Oe=`  let ep_mom_off = ${qe};
  let ep_main_off = ${Je};
`;for(let Le=0;Le<q-Y;Le+=4){const Se=Y+Le;Oe+=`  {
    let qw = reduce_pack4_sg(${E}.v_${Le}, ${E}.v_${Le+1}, ${E}.v_${Le+2}, ${E}.v_${Le+3}, h, slane, sg_size, sg_id, ${Se}u, ep_mom_off, ep_main_off, ${Ce});
    if (${Ie}) {
      ${A(ne,Se,"qw.x")}
      ${A(ne,Se+1,"qw.y")}
      ${A(ne,Se+2,"qw.z")}
      ${A(ne,Se+3,"qw.w")}
    }
  }
`}return Oe}};const K=`    let c_out = c_base + slane;
    mom[mom_off + c_out] = mv;
    if (also_main) {
      mom[main_off + c_out] = mv;
    }`;if(a==="none"&&f){const ee=dt(31,E=>`    {
      let m = sh_mm[rb + ${E+1}u];
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
${ee}    let fmn = f32(rmn);
    let sp = f32(rmx) - fmn;
    sh_res[h * 4u + slane] = vec2<f32>(fmn, select(0.0, 1.0 / sp, sp > 1e-7));
    let mv = vec4<f32>(0.0, 0.0, fmn, sp);
${K}
  }
  workgroupBarrier();
  let f0 = vec4<f32>(a0${te});
  let f1 = vec4<f32>(a1${te});
  let f2 = vec4<f32>(a2${te});
  let f3 = vec4<f32>(a3${te});
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
`,emit:({accVar:E,cStart:Y,cEnd:q,hrExpr:_e,storeMode:ne,momOffExpr:Fe,alsoWriteMomMain:Ce=!1,writeY8Expr:Ie="true"})=>{const qe=`${Fe} + (${_e}) * ${t}u`,Je=Ce?`${w}u + (row_idx * 2u + sg) * ${t}u`:"0u";let Oe=`  let ep_mom_off = ${qe};
  let ep_main_off = ${Je};
`;for(let Le=0;Le<q-Y;Le+=4){const Se=Y+Le;Oe+=`  {
    let qw = reduce_pack4(${E}.v_${Le}, ${E}.v_${Le+1}, ${E}.v_${Le+2}, ${E}.v_${Le+3}, h, slane, ${Se}u, ep_mom_off, ep_main_off, ${Ce});
    if (${Ie}) {
      ${A(ne,Se,"qw.x")}
      ${A(ne,Se+1,"qw.y")}
      ${A(ne,Se+2,"qw.z")}
      ${A(ne,Se+3,"qw.w")}
    }
  }
`}return Oe}}}if(a==="none"){const ee=dt(32,E=>`    {
      let m = sh_mm[rb + ${E}u];
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
  let f0 = vec4<f32>(a0${te});
  let f1 = vec4<f32>(a1${te});
  let f2 = vec4<f32>(a2${te});
  let f3 = vec4<f32>(a3${te});
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
${ee}    let sp = rmx - rmn;
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
`,emit:({accVar:E,cStart:Y,cEnd:q,hrExpr:_e,storeMode:ne,momOffExpr:Fe,alsoWriteMomMain:Ce=!1,writeY8Expr:Ie="true"})=>{const qe=`${Fe} + (${_e}) * ${t}u`,Je=Ce?`${w}u + (row_idx * 2u + sg) * ${t}u`:"0u";let Oe=`  let ep_mom_off = ${qe};
  let ep_main_off = ${Je};
`;for(let Le=0;Le<q-Y;Le+=4){const Se=Y+Le;Oe+=`  {
    let qw = reduce_pack4(${E}.v_${Le}, ${E}.v_${Le+1}, ${E}.v_${Le+2}, ${E}.v_${Le+3}, h, slane, ${Se}u, ep_mom_off, ep_main_off, ${Ce});
    if (${Ie}) {
      ${A(ne,Se,"qw.x")}
      ${A(ne,Se+1,"qw.y")}
      ${A(ne,Se+2,"qw.z")}
      ${A(ne,Se+3,"qw.w")}
    }
  }
`}return Oe}}}if(f){const ee=dt(31,E=>{const Y=E+1;return`    {
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
  a0 : ${B}, a1 : ${B}, a2 : ${B}, a3 : ${B},
  h : u32, slane : u32, c_base : u32, mom_off : u32, main_off : u32, also_main : bool
) -> vec4<u32> {
  let f0 = vec4<f32>(a0${te});
  let f1 = vec4<f32>(a1${te});
  let f2 = vec4<f32>(a2${te});
  let f3 = vec4<f32>(a3${te});
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
${ee}    let fmn = f32(rmn);
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
`,emit:({accVar:E,cStart:Y,cEnd:q,hrExpr:_e,storeMode:ne,momOffExpr:Fe,alsoWriteMomMain:Ce=!1,writeY8Expr:Ie="true"})=>{const qe=`${Fe} + (${_e}) * ${t}u`,Je=Ce?`${w}u + (row_idx * 2u + sg) * ${t}u`:"0u";let Oe=`  let ep_mom_off = ${qe};
  let ep_main_off = ${Je};
`;for(let Le=0;Le<q-Y;Le+=4){const Se=Y+Le;Oe+=`  {
    let qw = reduce_pack4(${E}.v_${Le}, ${E}.v_${Le+1}, ${E}.v_${Le+2}, ${E}.v_${Le+3}, h, slane, ${Se}u, ep_mom_off, ep_main_off, ${Ce});
    if (${Ie}) {
      ${A(ne,Se,"qw.x")}
      ${A(ne,Se+1,"qw.y")}
      ${A(ne,Se+2,"qw.z")}
      ${A(ne,Se+3,"qw.w")}
    }
  }
`}return Oe}}}const V=dt(32,ee=>`    {
      let s = sh_sq[rb + ${ee}u];
      let m = sh_mm[rb + ${ee}u];
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
  let f0 = vec4<f32>(a0${te});
  let f1 = vec4<f32>(a1${te});
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
${V}    let sp = rmx - rmn;
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
`,emit:({accVar:ee,cStart:Z,cEnd:E,hrExpr:Y,storeMode:q,momOffExpr:_e,alsoWriteMomMain:ne=!1,writeY8Expr:Fe="true"})=>{const Ce=`${_e} + (${Y}) * ${t}u`,Ie=ne?`${w}u + (row_idx * 2u + sg) * ${t}u`:"0u";let qe=`  let ep_mom_off = ${Ce};
  let ep_main_off = ${Ie};
`;for(let Je=0;Je<E-Z;Je+=2){const Oe=Z+Je;qe+=`  {
    let qw = reduce_pack2(${ee}.v_${Je}, ${ee}.v_${Je+1}, h, slane, ${Oe}u, ep_mom_off, ep_main_off, ${ne});
    if (${Fe}) {
      ${A(q,Oe,"qw.x")}
      ${A(q,Oe+1,"qw.y")}
    }
  }
`}return qe}}},ce=()=>`
@group(0) @binding(0) var<storage, read_write> act0 : array<u32>;
@group(0) @binding(1) var<storage, read_write> act1 : array<u32>;
@group(0) @binding(2) var<storage, read_write> act2 : array<u32>;
@group(0) @binding(3) var<storage, read_write> act3 : array<u32>;
@compute @workgroup_size(${gt}, 1, 1)
fn main(@builtin(local_invocation_id) lid : vec3<u32>,
        @builtin(workgroup_id) wid : vec3<u32>) {
  let row_base = (wid.z * 256u + wid.y) * ${d}u + lid.x;
  let val = ${x.uZeroWord}u;
  for (var c : u32 = 0u; c < ${g}u; c = c + 1u) {
    let idx = row_base + c * ${gt}u;
    act0[idx] = val;
    act1[idx] = val;
    act2[idx] = val;
    act3[idx] = val;
  }
}`,N=i[0],W=!f&&t>=16,X=()=>{const j=ae(!1),te=(E,Y)=>{const q=E/4,_e=Y/4;return dt(_e-q,ne=>{const Fe=q+ne,Ce=Fe*4;return`          {
            let w0 = w16_4[wb + ${Fe}u];
            let w1 = w16_4[wb + ${p+Fe}u];
            let w2 = w16_4[wb + ${2*p+Fe}u];
            a_${Ce}     = fma(vn, ${B}(w0.x), fma(vc, ${B}(w1.x), fma(vp, ${B}(w2.x), a_${Ce})));
            a_${Ce+1} = fma(vn, ${B}(w0.y), fma(vc, ${B}(w1.y), fma(vp, ${B}(w2.y), a_${Ce+1})));
            a_${Ce+2} = fma(vn, ${B}(w0.z), fma(vc, ${B}(w1.z), fma(vp, ${B}(w2.z), a_${Ce+2})));
            a_${Ce+3} = fma(vn, ${B}(w0.w), fma(vc, ${B}(w1.w), fma(vp, ${B}(w2.w), a_${Ce+3})));
          }
`})},A=Math.floor(N/4),K=N%4;let V="";K===0?V=`
        let vn = inp_4[base - ${A}u];
        let vc = inp_4[base];
        let vp = inp_4[base + ${A}u];`:A===0&&K===1?V=`
        let vL = inp_4[base - 1u];
        let vc = inp_4[base];
        let vR = inp_4[base + 1u];
        let vn = ${B}(vL.w, vc.xyz);
        let vp = ${B}(vc.yzw, vR.x);`:K===1?V=`
        let vL = inp_4[base - ${A+1}u];
        let vN = inp_4[base - ${A}u];
        let vc = inp_4[base];
        let vP = inp_4[base + ${A}u];
        let vR = inp_4[base + ${A+1}u];
        let vn = ${B}(vL.w, vN.xyz);
        let vp = ${B}(vP.yzw, vR.x);`:K===2?V=`
        let vL = inp_4[base - ${A+1}u];
        let vN = ${A===0?"inp_4[base]":`inp_4[base - ${A}u]`};
        let vc = ${A===0?"vN":"inp_4[base]"};
        let vP = ${A===0?"vN":`inp_4[base + ${A}u]`};
        let vR = inp_4[base + ${A+1}u];
        let vn = ${B}(vL.zw, vN.xy);
        let vp = ${B}(vP.zw, vR.xy);`:V=`
        let vL = inp_4[base - ${A+1}u];
        let vN = ${A===0?"inp_4[base]":`inp_4[base - ${A}u]`};
        let vc = ${A===0?"vN":"inp_4[base]"};
        let vP = ${A===0?"vN":`inp_4[base + ${A}u]`};
        let vR = inp_4[base + ${A+1}u];
        let vn = ${B}(vL.yzw, vN.x);
        let vp = ${B}(vP.w, vR.xyz);`;const re=(E,Y,q,_e)=>{const ne=_e-q,Fe=dt(ne,qe=>`  v_${qe} : ${B},
`),Ce=dt(ne,qe=>{const Je=q+qe;if(a==="none"){const Oe=3*t+Je;return`  var a_${Je} = ${B}(${I}(qmeta_u[${Oe>>>2}u][${Oe&3}u]));
`}return`  var a_${Je} = ${B}(0.0${T});
`}),Ie=Array.from({length:ne},(qe,Je)=>`a_${q+Je}`).join(", ");return`struct ${Y} {
${Fe}};
fn ${E}(y : i32, z : i32, x_pad : u32) -> ${Y} {
${Ce}  var tap_yz : u32 = 0u;
  for (var dz : i32 = -1; dz <= 1; dz = dz + 1) {
    let sz = z + dz * ${N};
    for (var dy : i32 = -1; dy <= 1; dy = dy + 1) {
      let sy = y + dy * ${N};
      if ((u32(sz) | u32(sy)) < 256u) {
        let base = (u32(sz) * 256u + u32(sy)) * ${gt}u + x_pad;
${V}
        let wb = tap_yz * ${3*p}u;
${te(q,_e)}
      }
      tap_yz = tap_yz + 1u;
    }
  }
  return ${Y}(${Ie});
}
`},ee=(E,Y,q,_e,ne)=>{const Fe=ne?`  let y = i32(p0.bg_y0 + lid.y);
  let z = i32(p0.bg_z0);`:`  var y : i32;
  var z : i32;
  if (p0.is_full != 0u) {
    y = i32(wid.y * 4u + lid.y);
    z = i32(wid.z);
  } else {
    let pk = strips0_u[wid.z >> 2u][wid.z & 3u];
    y = i32((pk & 255u) * 4u + lid.y);
    z = i32(pk >> 8u);
  }`,Ce=ne?"lid.y * 2u + sg":"row_idx * 2u + sg",Ie=ne?`${v}u`:`${w}u`,qe=ne?`  let s_bg_base = (${b}u + lid.y) * ${P}u + lid.x;`:`  let row_idx = u32(z) * 256u + u32(y);
  let use_act = u32(z) < 192u;
  let a_row_base = row_idx * ${d}u + x_pad;
  let s_row_base = ((u32(z) & 63u) * 256u + u32(y)) * ${P}u + lid.x;`;return`
@compute @workgroup_size(64, 4, 1)
fn ${E}(@builtin(local_invocation_id) lid : vec3<u32>,
             @builtin(workgroup_id) wid : vec3<u32>${j.entryArgs||""}) {
  let sg = lid.x >> 5u;
  let slane = lid.x & 31u;
${j.localHeader}  let x_pad = lid.x + ${Dt}u;
${Fe}
  let acc = ${Y}(y, z, x_pad);
${qe}
${j.emit({accVar:"acc",cStart:q,cEnd:_e,hrExpr:Ce,storeMode:ne?"stage_bg":"conv0_split",momOffExpr:Ie})}}`},Z=W?re("run_conv0_lo","Conv0AccLo",0,c)+re("run_conv0_hi","Conv0AccHi",c,t)+ee("main_lo","run_conv0_lo",0,c,!1)+ee("main_hi","run_conv0_hi",c,t,!1)+ee("main_bg_lo","run_conv0_lo",0,c,!0)+ee("main_bg_hi","run_conv0_hi",c,t,!0):re("run_conv0","Conv0Acc",0,t)+ee("main","run_conv0",0,t,!1)+ee("main_bg","run_conv0",0,t,!0);return`${C}${R}
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
${j.decls}${Z}`},J=()=>`${C}
${Pn(o)}
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
    q_ref = max(q_ref, ${G.toFixed(1)} * qs);
  }
  ${a==="none"?"q_ref = 1.0;":""}
  if (lid == 0u) {
    mom[${t*2}u] = vec4<f32>(q_ref, 0.0, 0.0, 0.0);
  }
  let scale_num = ${G.toFixed(1)} / q_ref;
  for (var idx : u32 = lid; idx < ${k}u; idx = idx + 256u) {
    let ic = (idx / ${3*p}u) % ${t}u;
    let qs = mom[ic * 2u].z;
    w_eff[idx] = w16_4[pp.next_w_vec4_off + idx] * ${I}(qs * scale_num);
  }
  if (lid < ${p}u) {
    ${a==="none"?`
    let mb = pp.next_meta_off + ${3*t}u + lid * 4u;
    w_eff[${F}u + lid] = ${B}(${I}(qmeta[mb]), ${I}(qmeta[mb + 1u]), ${I}(qmeta[mb + 2u]), ${I}(qmeta[mb + 3u]));
    `:`
    w_eff[${F}u + lid] = ${B}(0.0${T});
    `}
  }
}`,D=()=>`
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
  let x_pad = x4 + ${Dt}u;
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
  let a_base = (z * 256u + y) * ${d}u + x_pad;
  let s_base = ((z & 63u) * 256u + y) * ${P}u + x4;
  for (var c : u32 = 0u; c < ${g}u; c = c + 1u) {
    let a_off = a_base + c * ${gt}u;
    act8_0[a_off] = stage[s_base + c * ${wt}u];
    act8_1[a_off] = stage[s_base + (${g}u + c) * ${wt}u];
    act8_2[a_off] = stage[s_base + (${2*g}u + c) * ${wt}u];
    act8_3[a_off] = stage[s_base + (${3*g}u + c) * ${wt}u];
  }
}`,ue=(j,te)=>{const A=j*g;return`
  for (var cl : u32 = 0u; cl < ${g}u; cl = cl + 1u) {
    let c = ${A}u + cl;
    let inv_qs = mom[c * 2u].w;
    let st = mom[c * 2u + 1u];
    let rm = mom[mom_base + c];
    let q_word = ${te?`stage[s_bg_base + c * ${wt}u]`:`select(stage[s_base + c * ${wt}u], act8_${j}[a_base + cl * ${gt}u], use_act)`};
    let yv = unpack4x8unorm(q_word) * rm.w + vec4<f32>(rm.z);
    let a = vec4<f32>(
      act(yv.x * st.x + st.y),
      act(yv.y * st.x + st.y),
      act(yv.z * st.x + st.y),
      act(yv.w * st.x + st.y)
    );
    act8_${j}[a_base + cl * ${gt}u] = pack4x8unorm((a * inv_qs + vec4<f32>(${x.zeroBin.toFixed(1)})) * (1.0 / 255.0));
  }`},ie=()=>`${Pn(o)}
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
  let x_pad = x4 + ${Dt}u;
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
  let a_base = row_idx * ${d}u + x_pad;
  let s_base = ((z & 63u) * 256u + y) * ${P}u + x4;
  let mom_base = ${w}u + (row_idx * 2u + sg) * ${t}u;
${dt(4,j=>ue(j,!1))}
}

@compute @workgroup_size(64, 4, 1)
fn norm_halo_fill(@builtin(local_invocation_id) lid : vec3<u32>,
                  @builtin(workgroup_id) wid : vec3<u32>) {
  let idx = wid.y * 4u + lid.y;
  if (idx >= np.n_halo) { return; }
  let x4 = lid.x;
  let sg = x4 >> 5u;
  let x_pad = x4 + ${Dt}u;
  let s_bg_base = ${b}u * ${P}u + x4;
  let mom_base = ${v}u + sg * ${t}u;
  let dst_row = norm_aux[np.halo_off + idx];
  let a_base = dst_row * ${d}u + x_pad;
${dt(4,j=>ue(j,!0))}
}`,Ae=()=>{const j=!f&&t>=16,te=ae(f),A=(q,_e)=>f?`
          let ${q} = vec4<f16>(vec2<f16>(unpack2x16float(((${_e} & 0x00FF00FFu) << 2u) | 0x3C003C00u)), vec2<f16>(unpack2x16float(((${_e} >> 6u) & 0x03FC03FCu) | 0x3C003C00u))) - vec4<f16>(${x.sterbenzSub});`:`
          let ${q} = unpack4x8unorm(${_e}) - vec4<f32>(${x.uZeroFloat});`,K=q=>`
          let uL = ${q}[base - off0];
          let uN = ${q}[base - off1];
          let uC = ${q}[base];
          let uP = ${q}[base + off1];
          let uR = ${q}[base + off0];
          let u_neg = (uL >> sh_l) | (uN << sh_r);
          let u_pos = (uP >> sh_r) | (uR << sh_l);`+A("vn","u_neg")+A("vc","uC")+A("vp","u_pos"),V=(q,_e)=>{const ne=q/4,Fe=_e/4;if(M){const Ce=p/2,Ie=p;let qe="";for(let Je=ne;Je<Fe;Je+=2){const Oe=Je*4,Le=Je/2;qe+=`          {
            let wp0 = w_eff_u[wbu + ${Le}u];
            let wp1 = w_eff_u[wbu + ${Ce+Le}u];
            let wp2 = w_eff_u[wbu + ${Ie+Le}u];
            let w0a = u4_lo(wp0);
            let w0b = u4_hi(wp0);
            let w1a = u4_lo(wp1);
            let w1b = u4_hi(wp1);
            let w2a = u4_lo(wp2);
            let w2b = u4_hi(wp2);
            a_${Oe}     = fma(vn, vec4<f16>(w0a.x), fma(vc, vec4<f16>(w1a.x), fma(vp, vec4<f16>(w2a.x), a_${Oe})));
            a_${Oe+1} = fma(vn, vec4<f16>(w0a.y), fma(vc, vec4<f16>(w1a.y), fma(vp, vec4<f16>(w2a.y), a_${Oe+1})));
            a_${Oe+2} = fma(vn, vec4<f16>(w0a.z), fma(vc, vec4<f16>(w1a.z), fma(vp, vec4<f16>(w2a.z), a_${Oe+2})));
            a_${Oe+3} = fma(vn, vec4<f16>(w0a.w), fma(vc, vec4<f16>(w1a.w), fma(vp, vec4<f16>(w2a.w), a_${Oe+3})));
            a_${Oe+4} = fma(vn, vec4<f16>(w0b.x), fma(vc, vec4<f16>(w1b.x), fma(vp, vec4<f16>(w2b.x), a_${Oe+4})));
            a_${Oe+5} = fma(vn, vec4<f16>(w0b.y), fma(vc, vec4<f16>(w1b.y), fma(vp, vec4<f16>(w2b.y), a_${Oe+5})));
            a_${Oe+6} = fma(vn, vec4<f16>(w0b.z), fma(vc, vec4<f16>(w1b.z), fma(vp, vec4<f16>(w2b.z), a_${Oe+6})));
            a_${Oe+7} = fma(vn, vec4<f16>(w0b.w), fma(vc, vec4<f16>(w1b.w), fma(vp, vec4<f16>(w2b.w), a_${Oe+7})));
          }
`}return qe}return dt(Fe-ne,Ce=>{const Ie=ne+Ce,qe=Ie*4;return`          {
            let w0 = w_eff[wb + ${Ie}u];
            let w1 = w_eff[wb + ${p+Ie}u];
            let w2 = w_eff[wb + ${2*p+Ie}u];
            a_${qe}     = fma(vn, ${B}(w0.x), fma(vc, ${B}(w1.x), fma(vp, ${B}(w2.x), a_${qe})));
            a_${qe+1} = fma(vn, ${B}(w0.y), fma(vc, ${B}(w1.y), fma(vp, ${B}(w2.y), a_${qe+1})));
            a_${qe+2} = fma(vn, ${B}(w0.z), fma(vc, ${B}(w1.z), fma(vp, ${B}(w2.z), a_${qe+2})));
            a_${qe+3} = fma(vn, ${B}(w0.w), fma(vc, ${B}(w1.w), fma(vp, ${B}(w2.w), a_${qe+3})));
          }
`})},re=(q,_e,ne)=>{const Fe=q*g,Ce=`(${g}u + cp.pad0)`;return M?`        for (var ic : u32 = 0u; ic < ${Ce}; ic = ic + 1u) {
          let base = row_off + ic * ${gt}u;
${K(`act8_${q}`)}
          let wbu = wbu_tap + ${Fe?`(${Fe}u + ic)`:"ic"} * ${3*p/2}u;
${V(_e,ne)}
        }
`:`        for (var ic : u32 = 0u; ic < ${Ce}; ic = ic + 1u) {
          let base = row_off + ic * ${gt}u;
${K(`act8_${q}`)}
          let wb = wb_tap + ${Fe?`(${Fe}u + ic)`:"ic"} * ${3*p}u;
${V(_e,ne)}
        }
`},ee=(q,_e,ne,Fe)=>{const Ce=Fe-ne,Ie=dt(Ce,Le=>`  v_${Le} : ${B},
`),qe=dt(Ce,Le=>{const Se=ne+Le;if(a==="none"){const Ze=Se>>>2,pt=["x","y","z","w"][Se&3];if(M){const ut=F+Ze>>>1,ft=F+Ze&1?"u4_hi":"u4_lo";return`  var a_${Se} = ${B}(${ft}(w_eff_u[${ut}u]).${pt});
`}return`  var a_${Se} = ${B}(w_eff[${F+Ze}u].${pt});
`}return`  var a_${Se} = ${B}(0.0${T});
`}),Je=M?`        let wbu_tap = tap_yz * ${t*3*p/2}u;
`:`        let wb_tap = tap_yz * ${t*3*p}u;
`,Oe=Array.from({length:Ce},(Le,Se)=>`a_${ne+Se}`).join(", ");return`struct ${_e} {
${Ie}};
fn ${q}(y : i32, z : i32, x_pad : u32, dp : u32) -> ${_e} {
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
        let row_off = (u32(sz) * 256u + u32(sy)) * ${d}u + x_pad;
${Je}${dt(4,Le=>re(Le,ne,Fe))}      }
      tap_yz = tap_yz + 1u;
    }
  }
  return ${_e}(${Oe});
}
`},Z=(q,_e,ne,Fe,Ce)=>{let Ie="";Ce==="bg"?Ie=`
  let y = i32(cp.bg_y0 + lid.y);
  let z = i32(cp.bg_z0);`:Ce==="ext"?Ie=`
  let pk_full = strips[cp.ext_off + wid.z];
  let ext_orig = pk_full >> 16u;
  let pk = pk_full & 0xFFFFu;
  let y = i32((pk & 255u) * 4u + lid.y);
  let z = i32(pk >> 8u);`:Ie=`
  var y : i32;
  var z : i32;
  if (cp.is_full != 0u) {
    y = i32(wid.y * 4u + lid.y);
    z = i32(cp.z_start + wid.z);
  } else {
    let pk = strips[cp.strip_off + wid.z] & 0xFFFFu;
    y = i32((pk & 255u) * 4u + lid.y);
    z = i32(pk >> 8u);
  }`;const qe=Ce==="bg"?"lid.y * 2u + sg":Ce==="ext"?"ext_orig * 8u + lid.y * 2u + sg":"row_idx * 2u + sg",Je=Ce==="main"?`${w}u`:`${v}u`,Oe=Ce==="bg"?"stage_bg":"stage",Le=Ce==="main"?"true":"(((dp >> 24u) & 1u) != 0u)",Se=Ce==="bg"?`  let row_idx = u32(z) * 256u + u32(y);
  let s_bg_base = (${b}u + lid.y) * ${P}u + x4;`:`  let row_idx = u32(z) * 256u + u32(y);
  let s_row_base = ((u32(z) & 63u) * 256u + u32(y)) * ${P}u + x4;`;return`
@compute @workgroup_size(64, 4, 1)
fn ${q}(@builtin(local_invocation_id) lid : vec3<u32>,
             @builtin(workgroup_id) wid : vec3<u32>${te.entryArgs||""}) {
  let x4 = lid.x;
  let sg = x4 >> 5u;
  let slane = x4 & 31u;
${te.localHeader}  let x_pad = x4 + ${Dt}u;
${Ie}
  let dp = cp.d_pack;
  let acc = ${_e}(y, z, x_pad, dp);
${Se}
${te.emit({accVar:"acc",cStart:ne,cEnd:Fe,hrExpr:qe,storeMode:Oe,momOffExpr:Je,alsoWriteMomMain:Ce!=="main",writeY8Expr:Le})}}`},E=j?ee("run_conv_lo","ConvAccLo",0,c)+ee("run_conv_hi","ConvAccHi",c,t)+Z("main_lo","run_conv_lo",0,c,"main")+Z("main_hi","run_conv_hi",c,t,"main")+Z("main_ext_lo","run_conv_lo",0,c,"ext")+Z("main_ext_hi","run_conv_hi",c,t,"ext")+Z("main_bg_lo","run_conv_lo",0,c,"bg")+Z("main_bg_hi","run_conv_hi",c,t,"bg"):ee("run_conv","ConvAcc",0,t)+Z("main","run_conv",0,t,"main")+Z("main_ext","run_conv",0,t,"ext")+Z("main_bg","run_conv",0,t,"bg"),Y=M?`fn u4_lo(u : vec4<u32>) -> vec4<f16> {
  return vec4<f16>(vec2<f16>(unpack2x16float(u.x)), vec2<f16>(unpack2x16float(u.y)));
}
fn u4_hi(u : vec4<u32>) -> vec4<f16> {
  return vec4<f16>(vec2<f16>(unpack2x16float(u.z)), vec2<f16>(unpack2x16float(u.w)));
}
@group(0) @binding(6) var<uniform> w_eff_u : array<vec4<u32>, ${Math.ceil($/2)}>;`:`@group(0) @binding(6) var<storage, read> w_eff : array<${B}>;`;return`${C}${R}
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
${te.decls}${E}`},fe=j=>{const te=j*g;return`
  for (var cl : u32 = 0u; cl < ${g}u; cl = cl + 1u) {
    let c = ${te}u + cl;
    if (c < ${n}u) {
      let st = mom[c * 2u + 1u];
      let rm = mom[mom_base + c];
      let q_word = select(stage[s_base + c * ${wt}u], act8_${j}[a_base + cl * ${gt}u], use_act);
      let yv = unpack4x8unorm(q_word) * rm.w + vec4<f32>(rm.z);
      let fv = vec4<f32>(
        act(yv.x * st.x + st.y),
        act(yv.y * st.x + st.y),
        act(yv.z * st.x + st.y),
        act(yv.w * st.x + st.y)
      );
      feat[c] = ${B}(fv);
    }
  }`};return{initActWgsl:ce,conv0Wgsl:X,prepWgsl:J,flushWgsl:D,normWgsl:ie,convWgsl:Ae,clsWgsl:()=>`${C}
${Pn(o)}
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
  let a_base = row_idx * ${d}u + x4 + ${Dt}u;
  let s_base = ((z & 63u) * 256u + y) * ${P}u + x4;
  let mom_base = ${w}u + (row_idx * 2u + sg) * ${t}u;

  var feat : array<${B}, ${n}>;
${dt(4,j=>fe(j))}

  let w_cls = cp.w_vec4_off;
  let b_vec4 = cp.bias_off >> 2u;
${Sr({chan:n,clsK4:r,nclass:s,V4:B,suf:T,readBiasStmt:"    let bv = qmeta_u[b_vec4 + k4];",biasExpr:j=>`bv.${["x","y","z","w"][j]}`,probCfg:m})}
}`,qmetaVec4Len:h,numConvs:u,totalWEffVec4s:$,useUniformWeff:M,csQ:g,halfPass0:W,halfPassConv:!f&&t>=16}}function fa(e,t,n,s,r,i,o){return Be(this,null,function*(){var ot,Ne;const a=L*L*L,f=o?a*4:a,l=t.dilations.length,u=t.cs/4,m=L*L*u*gt*4,c=(64*L+4)*t.cs*wt*4,d=(t.cs*2+4+(Wn+sr)*t.cs)*16,b=e.limits||{},P=Math.min((ot=b.maxStorageBufferBindingSize)!=null?ot:1/0,(Ne=b.maxBufferSize)!=null?Ne:1/0);if(m>P||c>P||d>P||f>P){const se=Math.ceil(Math.max(m,c,d,f)/1048576);throw new Error(`meshnet_fast_v4: LowMem128 max buffer (${se} MiB) exceeds device limit (${P>>>20} MiB)`)}const _=zr({cs:t.cs,chan:t.chan,nclass:t.nclass,clsK4:n.clsK4,dilations:t.dilations,activation:t.activation,norm:t.norm,hasF16:s,subgroupMode:r,numConvs:l,probCfg:o});console.log(`[WebGPU-V4-128M] ${t.chan}ch(cs=${t.cs})/${t.nclass}cls (${l} convs, ${t.activation}, norm=${t.norm}${o?", prob=3":""}) | ${s?"f16+sterbenz":"f32"} | ${fr(r)} | ZYCX-4Q+64slice | maxBuf=${(Math.max(m,c,d,f)/1048576).toFixed(1)} MiB`);const w=GPUBufferUsage.STORAGE,v=GPUBufferUsage.UNIFORM,y=GPUBufferUsage.COPY_DST,h=GPUBufferUsage.COPY_SRC,k=L*L*fn,F=k*(s?2:4),$=s?Math.ceil(_.totalWEffVec4s/2)*16:_.totalWEffVec4s*16,M=!!(o&&m>=f),x=`128|${t.cs}|${s?1:0}|${f}|${M?1:0}`,C=br(e,x,()=>{const se=[],H=Dn(e,se),le=H.alloc,Ye={inpBuf:le(F,w|y|h),act8_0:le(m,w|y|h),act8_1:le(m,w|y|h),act8_2:le(m,w|y|h),act8_3:le(m,w|y|h),stageBuf:le(c,w),momBuf:le(d,w),labels8Buf:le(f,w|y|h),readbackBuf:le(f,GPUBufferUsage.MAP_READ|y),probPackTmpBuf:M?le(f,w|y|h):null};return{buffers:se,named:Ye,bytes:H.getBytes()}}),{inpBuf:z,act8_0:R,act8_1:I,act8_2:T,act8_3:B,stageBuf:G,momBuf:ae,labels8Buf:ce,readbackBuf:N,probPackTmpBuf:W}=C.named,X=[],J=Dn(e,X),D=J.alloc,ue=D(s?n.wF16.byteLength:n.wF32.byteLength,w|y),ie=D(n.qmetaF32.byteLength,w|v|y),Ae=D($,_.useUniformWeff?w|v:w),fe=t.norm==="gn"&&!(i!=null&&i.disableConeSkip),$e=D(st*4,v|y),j=D(st*4,v|y),te=Array.from({length:l},()=>D(fe?st*4:16,w|y)),A=Array.from({length:l-1},()=>D(fe?(st+L*L)*4:16,w|y)),K=D(16,v|y),V=D(16,v|y),re=Array.from({length:l},()=>D(48,v|y)),ee=Array.from({length:l-1},()=>D(16,v|y)),Z=Math.max(256,b.minUniformBufferOffsetAlignment||256),E=Z>>>2,Y=20,q=Math.max(1,(l-1)*Y),_e=D(q*Z,v|y),ne=new Uint32Array(q*E);e.queue.writeBuffer(ue,0,s?n.wF16:n.wF32),e.queue.writeBuffer(ie,0,n.qmetaF32);let Fe;try{Fe=yield vr(e,t,n,s,r,o,_)}catch(se){for(const H of X)H.destroy();if(X.length=0,C.pooled)an.get(e)===C&&vn(e);else{for(const H of C.buffers)H.destroy();C.buffers.length=0}throw se}const{pInit:Ce,pMomFin:Ie,pPrepW:qe,pFlush:Je,pNorm:Oe,pNormHalo:Le,pCls:Se,pConv0:Ze,pConv:pt}=Fe,ut=(se,H)=>e.createBindGroup({layout:se,entries:H.map((le,Ye)=>({binding:Ye,resource:le&&le.buffer?le:{buffer:le}}))}),ft=ut(Ce.bgl,[R,I,T,B]);{const se=e.createCommandEncoder(),H=se.beginComputePass();H.setPipeline(Ce.pipe),H.setBindGroup(0,ft),H.dispatchWorkgroups(1,L,L),H.end(),e.queue.submit([se.finish()])}const At=(_.halfPass0?Ze.lo:Ze.main).bgl,Vt=ut(At,[z,R,I,T,B,G,ue,ae,{buffer:ie,offset:0,size:t.cs*16},$e,K]),Lt=ut(Se.bgl,[R,I,T,B,G,ue,ae,ce,ie,j,V]),Q=M?D(16,v|y):null,nn=M?ut(Se.bgl,[R,I,T,B,G,ue,ae,ce,ie,j,Q]):null,Mt=kr({device:e,hasF16:s,nvox:a,outBufBytes:f,inpBuf:z,act8_0:R,labels8Buf:ce,readbackBuf:N,pInit:Ce,bgInit:ft,pCls:Se,bgCls:Lt,clsUbo:V,packed:n,modelEntry:i,probCfg:o,canGpuProb:M,probSlots:M?{clsUbo1:Q,bgCls1:nn,pass0HoldBuf:W,y0:R,y1:I,b:T,sup:B}:null,ownedBuffers:X,mkBuf:D}),Ht=re.map((se,H)=>ut(Ie.bgl,[ue,ie,ae,Ae,te[H],se])),Ct=ee.map((se,H)=>ut(Oe.bgl,[R,I,T,B,G,ae,A[H],se])),ht={buffer:_e,offset:0,size:32},S=Array.from({length:l},(se,H)=>H===0?null:ut(Je.bgl,[R,I,T,B,G,te[H],ht])),U=_.halfPassConv?pt.lo:pt.main,O=Array.from({length:l},(se,H)=>H===0?null:ut(U.bgl,[R,I,T,B,G,ae,Ae,te[H],ht])),de=s?new Uint16Array(k):new Float32Array(k),oe=new Uint8Array(L*L),Re=new Uint32Array(st),be=new Uint32Array(st+L*L),he=new Uint32Array(12),ve=new Float32Array(he.buffer),xe=new Uint32Array(4),je=(se,H,le,Ye,it,et,Ee,Ke)=>{const Me=se*E;ne[Me]=H?1:0,ne[Me+1]=le,ne[Me+2]=Ye,ne[Me+3]=it,ne[Me+4]=et,ne[Me+5]=Ee,ne[Me+6]=Ke,ne[Me+7]=0};function Ge(se,H){return Be(this,null,function*(){if(se.length!==a)throw new Error(`meshnet_fast_v4 expected ${a} voxels, got ${se.length}`);const le=t.norm==="gn"&&!(i!=null&&i.disableConeSkip),Ye=yield Mt.prepareInput({volume:se,ioOpts:H,useCone:le,padInputHost:de,headRowHost:oe,hasF16Flag:s}),it=Ye.info,et=yr(oe,it,t.dilations,le),Ee=new Array(l);for(let pe=0;pe<l;pe++){const Pe=et.layers[pe],ze=Pe.isFull?st:Pe.mainStrips.length,ke=Pe.isFull||!Pe.extStrips?0:Pe.extStrips.length,He=Pe.haloRows?Pe.haloRows.length:0;if(pe===0){!Pe.isFull&&ze>0&&(Re.set(Pe.mainStrips,0),e.queue.writeBuffer($e,0,Re.subarray(0,ze)),e.queue.writeBuffer(te[0],0,Re.subarray(0,ze))),Ee[0]={L:Pe,nMain:ze,nExt:ke,nHalo:He};continue}const Qe=new Uint32Array(8),at=new Uint32Array(8),ct=new Uint32Array(8),Et=new Uint32Array(8);if(!Pe.isFull){if(ze>0){Re.set(Pe.mainStrips,0);for(let ye=0;ye<ze;ye++)at[Pe.mainStrips[ye]>>>13]++;let ge=0;for(let ye=0;ye<8;ye++)Qe[ye]=ge,ge+=at[ye]}if(Pe.mode==="bwd"&&ke>0){const ge=Array.from({length:8},()=>[]);for(let me=0;me<ke;me++){const rt=Pe.extStrips[me];ge[rt>>>13].push((me&65535)<<16|rt)}let ye=ze;for(let me=0;me<8;me++){ct[me]=ye;const rt=ge[me];Et[me]=rt.length;for(let $t=0;$t<rt.length;$t++)Re[ye++]=rt[$t]}e.queue.writeBuffer(te[pe],0,Re.subarray(0,ze+ke))}else ze>0&&e.queue.writeBuffer(te[pe],0,Re.subarray(0,ze))}const De=Pe.mode==="rpure"&&He>0||Pe.mode==="bwd"&&pe+1<l,tt=cs(t.dilations[pe],De),yt=(pe-1)*Y,lt=Pe.bgStrip?Pe.bgStrip.yWg*4:0,nt=Pe.bgStrip?Pe.bgStrip.z:0;for(let ge=0;ge<8;ge++)je(yt+ge,Pe.isFull,ge*32,Qe[ge],ct[ge],tt,lt,nt);for(let ge=0;ge<6;ge++)je(yt+8+ge,Pe.isFull,ge*32,Qe[ge],0,0,0,0),je(yt+14+ge,!1,ge*32,ct[ge],0,0,0,0);Ee[pe]={L:Pe,nMain:ze,nExt:ke,nHalo:He,mainCount:at,extCount:Et,layerBaseSlot:yt}}l>1&&e.queue.writeBuffer(_e,0,ne);let Ke=ir(e,i);const Me=[];if(Ke==="single"){const pe=e.createCommandEncoder();Ye.runPrePasses(pe,Me),et.clsSkipped&&(pe.clearBuffer(ce,0,f),et.clsStrips.length>0&&e.queue.writeBuffer(j,0,et.clsStrips));for(let Pe=0;Pe<l;Pe++){const ze=Ee[Pe],{L:ke,nMain:He,nHalo:Qe}=ze,at=ke.nMomExt||0,ct=ke.isFull?st:ke.normStrips?ke.normStrips.length:0;if(Pe===0){const De=ke.isFull?64:1,tt=ke.isFull?L:He,yt=!!(ke.bgStrip&&Qe>0);if(xe[0]=ke.isFull?1:0,xe[1]=ke.bgStrip?ke.bgStrip.yWg*4:0,xe[2]=ke.bgStrip?ke.bgStrip.z:0,xe[3]=0,e.queue.writeBuffer(K,0,xe),_.halfPass0)for(const[lt,nt]of[[Ze.lo,Ze.bgLo],[Ze.hi,Ze.bgHi]]){const ge=pe.beginComputePass();ge.setBindGroup(0,Vt),tt>0&&(ge.setPipeline(lt.pipe),ge.dispatchWorkgroups(1,De,tt)),yt&&(ge.setPipeline(nt.pipe),ge.dispatchWorkgroups(1,1,1)),ge.end(),Me.push("conv0")}else{const lt=pe.beginComputePass();lt.setBindGroup(0,Vt),tt>0&&(lt.setPipeline(Ze.main.pipe),lt.dispatchWorkgroups(1,De,tt)),yt&&(lt.setPipeline(Ze.bg.pipe),lt.dispatchWorkgroups(1,1,1)),lt.end(),Me.push("conv0")}}else{const De=pt,tt=O[Pe],yt=S[Pe],{mainCount:lt,extCount:nt,layerBaseSlot:ge}=ze,ye=ke.mode==="rpure"&&!!ke.bgStrip;for(let me=0;me<8;me++){if(me>=2){const Ve=me-2,We=ke.isFull||lt[Ve]>0,Pt=!ke.isFull&&ke.mode==="bwd"&&nt[Ve]>0;if(We||Pt){const Te=pe.beginComputePass();Te.setPipeline(Je.pipe),We&&(Te.setBindGroup(0,yt,[(ge+8+Ve)*Z]),Te.dispatchWorkgroups(1,ke.isFull?64:1,ke.isFull?32:lt[Ve])),Pt&&(Te.setBindGroup(0,yt,[(ge+14+Ve)*Z]),Te.dispatchWorkgroups(1,1,nt[Ve])),Te.end(),Me.push("flushStage")}}const rt=ke.isFull||lt[me]>0,$t=!ke.isFull&&ke.mode==="bwd"&&nt[me]>0,vt=me===0&&ye;if(!rt&&!$t&&!vt)continue;const xt=[(ge+me)*Z],_t=ke.isFull?64:1,Wt=ke.isFull?32:lt[me];if(_.halfPassConv)for(const[Ve,We,Pt]of[[De.lo,De.extLo,De.bgLo],[De.hi,De.extHi,De.bgHi]]){const Te=pe.beginComputePass();Te.setBindGroup(0,tt,xt),rt&&(Te.setPipeline(Ve.pipe),Te.dispatchWorkgroups(1,_t,Wt)),$t&&(Te.setPipeline(We.pipe),Te.dispatchWorkgroups(1,1,nt[me])),vt&&(Te.setPipeline(Pt.pipe),Te.dispatchWorkgroups(1,1,1)),Te.end(),Me.push("convHidden")}else{const Ve=pe.beginComputePass();Ve.setBindGroup(0,tt,xt),rt&&(Ve.setPipeline(De.main.pipe),Ve.dispatchWorkgroups(1,_t,Wt)),$t&&(Ve.setPipeline(De.ext.pipe),Ve.dispatchWorkgroups(1,1,nt[me])),vt&&(Ve.setPipeline(De.bg.pipe),Ve.dispatchWorkgroups(1,1,1)),Ve.end(),Me.push("convHidden")}}}const Et=Pe+1<l?n.w0Vec4s+Pe*n.hiddenVec4PerLayer:0;he[0]=Pe*n.metaStride,he[1]=Et,he[2]=(Pe+1)*n.metaStride,he[3]=Pe+1<l?1:0,he[4]=Pe===0?1:0,he[5]=ke.isFull?1:0,he[6]=He,he[7]=at*8,ve[8]=ke.extWeight||0,he[9]=0,he[10]=0,he[11]=0,e.queue.writeBuffer(re[Pe],0,he);{const De=pe.beginComputePass();De.setBindGroup(0,Ht[Pe]),De.setPipeline(Ie.pipe),De.dispatchWorkgroups(t.cs,1,1),De.end(),Me.push("momentsPrep")}if(Pe+1<l){{const tt=pe.beginComputePass();tt.setBindGroup(0,Ht[Pe]),tt.setPipeline(qe.pipe),tt.dispatchWorkgroups(1,1,1),tt.end(),Me.push("momentsPrep")}const De=ke.isFull?0:ct;if((De>0||Qe>0)&&(De>0&&be.set(ke.normStrips,0),Qe>0&&be.set(ke.haloRows,De),e.queue.writeBuffer(A[Pe],0,be.subarray(0,De+Qe))),xe[0]=ke.isFull?1:0,xe[1]=ke.bgStrip?ke.bgStrip.z*L+ke.bgStrip.yWg*4:0,xe[2]=De,xe[3]=Qe,e.queue.writeBuffer(ee[Pe],0,xe),ke.isFull||ct>0||Qe>0){const tt=pe.beginComputePass();tt.setBindGroup(0,Ct[Pe]),(ke.isFull||ct>0)&&(tt.setPipeline(Oe.pipe),tt.dispatchWorkgroups(1,ke.isFull?64:1,ke.isFull?L:ct)),Qe>0&&(tt.setPipeline(Le.pipe),tt.dispatchWorkgroups(1,Math.ceil(Qe/4),1)),tt.end(),Me.push("normHalo")}}}return Ge.__passCategories=Me,Mt.finishAndReadback({enc:pe,schedule:et,passCategories:Me,u4Tmp:xe,ioOpts:H})}const Ue=qn(e),St=typeof(H==null?void 0:H.onProgress)=="function"?H.onProgress:null,Ut=dr(et,l);let Bt=0,Gt=-1;const sn=pe=>{if(!St)return;const Pe=Math.min(.99,Bt/Ut);let ze="";pe>=0&&pe!==Gt&&(Gt=pe,ze=`Layer ${pe+1}/${l}`),St(Pe,ze)},Xe=mr(e,e.__v4MsPerStrip||.12,sn);let we=e.createCommandEncoder();Ye.runPrePasses(we,Me),et.clsSkipped&&(we.clearBuffer(ce,0,f),et.clsStrips.length>0&&e.queue.writeBuffer(j,0,et.clsStrips));for(let pe=0;pe<l;pe++){const Pe=Ee[pe],{L:ze,nMain:ke,nHalo:He}=Pe,Qe=ze.nMomExt||0,at=ze.isFull?st:ze.normStrips?ze.normStrips.length:0,ct=bs(ze,pe,l);if(pe===0){const De=ze.isFull?64:1,tt=ze.isFull?L:ke,yt=!!(ze.bgStrip&&He>0);if(xe[0]=ze.isFull?1:0,xe[1]=ze.bgStrip?ze.bgStrip.yWg*4:0,xe[2]=ze.bgStrip?ze.bgStrip.z:0,xe[3]=0,e.queue.writeBuffer(K,0,xe),_.halfPass0)for(const[lt,nt]of[[Ze.lo,Ze.bgLo],[Ze.hi,Ze.bgHi]]){const ge=we.beginComputePass();ge.setBindGroup(0,Vt),tt>0&&(ge.setPipeline(lt.pipe),ge.dispatchWorkgroups(1,De,tt)),yt&&(ge.setPipeline(nt.pipe),ge.dispatchWorkgroups(1,1,1)),ge.end(),Me.push("conv0")}else{const lt=we.beginComputePass();lt.setBindGroup(0,Vt),tt>0&&(lt.setPipeline(Ze.main.pipe),lt.dispatchWorkgroups(1,De,tt)),yt&&(lt.setPipeline(Ze.bg.pipe),lt.dispatchWorkgroups(1,1,1)),lt.end(),Me.push("conv0")}Ke==="calibrate"?(e.queue.submit([we.finish()]),we=e.createCommandEncoder()):Ke==="paced"&&(Bt+=ct.convWork,we=yield Xe.submitChunk(we,ct.convWork,0,{forceUiYield:!0}))}else{const De=pt,tt=O[pe],yt=S[pe],{mainCount:lt,extCount:nt,layerBaseSlot:ge}=Pe,ye=ze.mode==="rpure"&&!!ze.bgStrip;let me=0;for(let rt=0;rt<8;rt++){if(rt>=2){const _t=rt-2,Wt=ze.isFull||lt[_t]>0,Ve=!ze.isFull&&ze.mode==="bwd"&&nt[_t]>0;if(Wt||Ve){const We=we.beginComputePass();We.setPipeline(Je.pipe),Wt&&(We.setBindGroup(0,yt,[(ge+8+_t)*Z]),We.dispatchWorkgroups(1,ze.isFull?64:1,ze.isFull?32:lt[_t])),Ve&&(We.setBindGroup(0,yt,[(ge+14+_t)*Z]),We.dispatchWorkgroups(1,1,nt[_t])),We.end(),Me.push("flushStage")}}const $t=ze.isFull||lt[rt]>0,vt=!ze.isFull&&ze.mode==="bwd"&&nt[rt]>0,xt=rt===0&&ye;if($t||vt||xt){const _t=[(ge+rt)*Z],Wt=ze.isFull?64:1,Ve=ze.isFull?32:lt[rt];if(_.halfPassConv)for(const[We,Pt,Te]of[[De.lo,De.extLo,De.bgLo],[De.hi,De.extHi,De.bgHi]]){const jt=we.beginComputePass();jt.setBindGroup(0,tt,_t),$t&&(jt.setPipeline(We.pipe),jt.dispatchWorkgroups(1,Wt,Ve)),vt&&(jt.setPipeline(Pt.pipe),jt.dispatchWorkgroups(1,1,nt[rt])),xt&&(jt.setPipeline(Te.pipe),jt.dispatchWorkgroups(1,1,1)),jt.end(),Me.push("convHidden")}else{const We=we.beginComputePass();We.setBindGroup(0,tt,_t),$t&&(We.setPipeline(De.main.pipe),We.dispatchWorkgroups(1,Wt,Ve)),vt&&(We.setPipeline(De.ext.pipe),We.dispatchWorkgroups(1,1,nt[rt])),xt&&(We.setPipeline(De.bg.pipe),We.dispatchWorkgroups(1,1,1)),We.end(),Me.push("convHidden")}me+=($t?ze.isFull?2048:lt[rt]:0)+(vt?nt[rt]:0)}if(Ke==="calibrate"&&(me>=512||rt===7&&me>0)){const _t=performance.now();e.queue.submit([we.finish()]),yield e.queue.onSubmittedWorkDone();const Wt=performance.now()-_t;if(we=e.createCommandEncoder(),Bt+=me,me>=512){const Ve=Wt/me,We=Ve*st;e.__v4WinCalibrated=!0,Xe.setMsPerStrip(Ve),!Ue.isWindowsSharedIgpu&&We<rr?(e.__v4WinFast=!0,Ke="pipelined",console.log(`[WebGPU-V4-128M] Windows GPU calibration: estFullLayer=${We.toFixed(1)}ms -> unthrottled pipelined mode`)):(e.__v4WinFast=!1,Ke="paced",console.log(`[WebGPU-V4-128M] Windows GPU calibration: estFullLayer=${We.toFixed(1)}ms -> TDR-safe 2-in-flight paced mode`),sn(pe))}me=0}else Ke==="paced"&&me>0&&(me*Xe.getMsPerStrip()>=or*.75||rt===7)&&(Bt+=me,we=yield Xe.submitChunk(we,me,pe),me=0)}}const Et=pe+1<l?n.w0Vec4s+pe*n.hiddenVec4PerLayer:0;he[0]=pe*n.metaStride,he[1]=Et,he[2]=(pe+1)*n.metaStride,he[3]=pe+1<l?1:0,he[4]=pe===0?1:0,he[5]=ze.isFull?1:0,he[6]=ke,he[7]=Qe*8,ve[8]=ze.extWeight||0,he[9]=0,he[10]=0,he[11]=0,e.queue.writeBuffer(re[pe],0,he);{const De=we.beginComputePass();De.setBindGroup(0,Ht[pe]),De.setPipeline(Ie.pipe),De.dispatchWorkgroups(t.cs,1,1),De.end(),Me.push("momentsPrep")}if(pe+1<l){{const tt=we.beginComputePass();tt.setBindGroup(0,Ht[pe]),tt.setPipeline(qe.pipe),tt.dispatchWorkgroups(1,1,1),tt.end(),Me.push("momentsPrep")}const De=ze.isFull?0:at;if((De>0||He>0)&&(De>0&&be.set(ze.normStrips,0),He>0&&be.set(ze.haloRows,De),e.queue.writeBuffer(A[pe],0,be.subarray(0,De+He))),xe[0]=ze.isFull?1:0,xe[1]=ze.bgStrip?ze.bgStrip.z*L+ze.bgStrip.yWg*4:0,xe[2]=De,xe[3]=He,e.queue.writeBuffer(ee[pe],0,xe),ze.isFull||at>0||He>0){const tt=we.beginComputePass();tt.setBindGroup(0,Ct[pe]),(ze.isFull||at>0)&&(tt.setPipeline(Oe.pipe),tt.dispatchWorkgroups(1,ze.isFull?64:1,ze.isFull?L:at)),He>0&&(tt.setPipeline(Le.pipe),tt.dispatchWorkgroups(1,Math.ceil(He/4),1)),tt.end(),Me.push("normHalo")}}Ke==="pipelined"?(e.queue.submit([we.finish()]),we=e.createCommandEncoder()):Ke==="calibrate"?(e.queue.submit([we.finish()]),yield e.queue.onSubmittedWorkDone(),we=e.createCommandEncoder(),Bt+=(pe===0?ct.convWork:0)+ct.normWork,pe===l-1&&!e.__v4WinCalibrated&&(e.__v4WinCalibrated=!0,e.__v4WinFast=!Ue.isWindowsSharedIgpu)):(Bt+=ct.normWork,we=yield Xe.submitChunk(we,ct.normWork,pe))}return Ke==="paced"&&(yield Xe.waitBeforeFinalSubmit()),Ge.__passCategories=Me,Mt.finishAndReadback({enc:we,schedule:et,passCategories:Me,u4Tmp:xe,ioOpts:H,paced:Ke==="paced",onProgress:St})})}return Mt.warmupIoPipelines(),Ge.dispose=({keepSharedWorkspace:se=!1}={})=>{Mt.dispose();for(const H of X)H.destroy();if(X.length=0,J.resetBytes(),C.pooled)se?C.inUse=!1:an.get(e)===C&&vn(e);else{for(const H of C.buffers)H.destroy();C.buffers.length=0}},Ge.gpuBytes=()=>C.bytes+J.getBytes(),Ge.__passCategories=[],Ge.__coneInfo=()=>({paddedVox:k,actMiB:m/1048576,mode:"LowMem128"}),Ge.kernels="v4-int8",Ge})}const Cr=!0;function vs(r,i,o){return Be(this,arguments,function*(e,t,n,s={}){us++;try{return yield pa(e,t,n,s)}finally{us--}})}function pa(r,i,o){return Be(this,arguments,function*(e,t,n,s={}){var Ut,Bt,Gt,sn;const a=t instanceof Uint8Array?t:new Uint8Array(t),f=er(a.buffer.slice(a.byteOffset,a.byteOffset+a.byteLength)),l=tr(f);s!=null&&s.classifierBias&&l.classifier&&(l.classifier.bias=Float32Array.from(s.classifierBias));const u=_s(s),m=(s==null?void 0:s.dilations)||(u==null?void 0:u.dilations)||(l.convs.length===25?[16,8,4,2,1,16,8,4,2,1,16,8,4,2,1,16,8,4,2,1,16,8,4,2,1]:l.convs.length===9?[1,2,4,8,16,8,4,2,1]:ls),g=(s==null?void 0:s.activation)||(u==null?void 0:u.activation)||(l.affines.length||l.convs.length>=13?"gelu_tanh":"relu"),c=l.convs[0].outC,p=c>8?Math.ceil(c/8)*8:Math.ceil(c/4)*4,d=nr(l,{nx:L,ny:L,nz:L,cs:p,activation:g,dilations:m}),b=aa(a,l,d,s),P=(s==null?void 0:s.outputType)==="probability"?Zo(s,d.nclass):null,_=!!((Bt=(Ut=e.features)==null?void 0:Ut.has)!=null&&Bt.call(Ut,"shader-f16"))&&!(s!=null&&s.disableF16),w=cr(e,s),v=L*L*L,y=P?v*4:v,h=d.cs>=16,k=h?d.cs/2:d.cs,F=L*L*k*gt*4,$=L*L*k*wt*4,M=e.limits||{},x=Math.min((Gt=M.maxStorageBufferBindingSize)!=null?Gt:1/0,(sn=M.maxBufferSize)!=null?sn:1/0),C=ur(e,d,s);if((s!=null&&s.forceLowMem128||C||F>x||y>x)&&d.cs>=8&&d.cs%4===0)return fa(e,d,b,_,w,s,P);if(F>x||y>x){const Xe=Math.max(F,y)>>>20;throw new Error(`meshnet_fast_v4: buffer (${Xe} MiB) exceeds device limit (${x>>>20} MiB)`)}const z=lr(e,s),R=Ar({cs:d.cs,chan:d.chan,nclass:d.nclass,clsK4:b.clsK4,dilations:d.dilations,activation:d.activation,norm:d.norm,hasF16:_,subgroupMode:w,splitHalves:h,probCfg:P,chunkableStd:z});console.log(`[WebGPU-V4] ${d.chan}ch(cs=${d.cs})/${d.nclass}cls (${d.dilations.length} convs, ${d.activation}, norm=${d.norm}${P?", prob=3":""}) | ${_?"f16+sterbenz":"f32"} | ${fr(w)} | ZYCX-pad80 | maxBuf=${(Math.max(F,y)/1048576).toFixed(1)} MiB`);const I=GPUBufferUsage.STORAGE,T=GPUBufferUsage.COPY_DST,B=GPUBufferUsage.COPY_SRC,G=L*L*fn,ae=G*(_?2:4),ce=Wn*d.cs*16,N=sr*d.cs*16,W=(d.cs*2+4)*16,X=_?Math.ceil(R.totalWEffVec4s/2)*16:R.totalWEffVec4s*16,J=`std|${d.cs}|${h?1:0}|${_?1:0}|${y}`,D=br(e,J,()=>{const Xe=[],we=Dn(e,Xe),pe=we.alloc,Pe={inpBuf:pe(ae,I|T|B),act8_0:pe(F,I|T|B),act8_1:pe(h?F:16,I|T|B),y8_0:pe($,I|T|B),y8_1:pe(h?$:16,I|T|B),momMainBuf:pe(ce,I),momExtBuf:pe(N,I),momStatsBuf:pe(W,I),labels8Buf:pe(y,I|T|B),readbackBuf:pe(y,GPUBufferUsage.MAP_READ|T)};return{buffers:Xe,named:Pe,bytes:we.getBytes()}}),{inpBuf:ue,act8_0:ie,act8_1:Ae,y8_0:fe,y8_1:$e,momMainBuf:j,momExtBuf:te,momStatsBuf:A,labels8Buf:K,readbackBuf:V}=D.named,re=[],ee=Dn(e,re),Z=ee.alloc,E=Z(_?b.wF16.byteLength:b.wF32.byteLength,I|T),Y=Z(b.qmetaF32.byteLength,I|T),q=Z(X,R.useUniformWeff?I|GPUBufferUsage.UNIFORM:I),_e=d.dilations.length,ne=d.norm==="gn"&&!(s!=null&&s.disableConeSkip),Fe=Array.from({length:_e},()=>Z(ne?st*4:16,I|T)),Ce=Array.from({length:_e-1},()=>Z(ne?(st+L*L)*4:16,I|T)),Ie=Z(ne?st*4:16,I|T),qe=Z(16,GPUBufferUsage.UNIFORM|T),Je=Z(16,GPUBufferUsage.UNIFORM|T),Oe=Array.from({length:_e},()=>Z(48,GPUBufferUsage.UNIFORM|T)),Le=Array.from({length:_e-1},()=>Z(16,GPUBufferUsage.UNIFORM|T)),Se=Math.max(256,M.minUniformBufferOffsetAlignment||256),Ze=Se>>>2,pt=R.chunkableStd?Math.max(1,(_e-1)*Qn):0,ut=R.chunkableStd?Z(pt*Se,GPUBufferUsage.UNIFORM|T):null,ft=R.chunkableStd?new Uint32Array(pt*Ze):null,At=R.chunkableStd?null:Array.from({length:_e},()=>Z(16,GPUBufferUsage.UNIFORM|T));e.queue.writeBuffer(E,0,_?b.wF16:b.wF32),e.queue.writeBuffer(Y,0,b.qmetaF32);let Vt;try{Vt=yield xr(e,d,b,_,w,h,P,R)}catch(Xe){for(const we of re)we.destroy();if(re.length=0,D.pooled)an.get(e)===D&&vn(e);else{for(const we of D.buffers)we.destroy();D.buffers.length=0}throw Xe}const{pInit:Lt,pMomFin:Q,pPrepW:nn,pNorm:Mt,pNormHalo:Ht,pCls:Ct,pConv0:ht,pConv:S}=Vt,U=(Xe,we)=>e.createBindGroup({layout:Xe,entries:we.map((pe,Pe)=>({binding:Pe,resource:pe&&pe.buffer?pe:{buffer:pe}}))}),O=U(Lt.bgl,[ie,Ae]);{const Xe=e.createCommandEncoder(),we=Xe.beginComputePass();we.setPipeline(Lt.pipe),we.setBindGroup(0,O),we.dispatchWorkgroups(1,L,L),we.end(),e.queue.submit([Xe.finish()])}const de=(R.halfPass0?ht.lo:ht.main).bgl,oe=U(de,[ue,fe,$e,E,Y,j,te,Fe[0],qe]),Re=U(Ct.bgl,[fe,$e,E,Y,j,A,K,Ie,Je]),be=!!(P&&h&&F>=y&&$>=y),he=be?Z(16,GPUBufferUsage.UNIFORM|T):null,ve=be?U(Ct.bgl,[fe,$e,E,Y,j,A,K,Ie,he]):null,xe=kr({device:e,hasF16:_,nvox:v,outBufBytes:y,inpBuf:ue,act8_0:ie,labels8Buf:K,readbackBuf:V,pInit:Lt,bgInit:O,pCls:Ct,bgCls:Re,clsUbo:Je,packed:b,modelEntry:s,probCfg:P,canGpuProb:be,probSlots:be?{clsUbo1:he,bgCls1:ve,pass0HoldBuf:ie,y0:fe,y1:$e,b:Ae,sup:ie}:null,ownedBuffers:re,mkBuf:Z}),je=Oe.map((Xe,we)=>U(Q.bgl,[E,Y,j,te,A,q,Fe[we],Xe])),Ge=Le.map((Xe,we)=>U(Mt.bgl,[ie,Ae,fe,$e,j,te,A,Ce[we],Xe])),ot=R.chunkableStd?{buffer:ut,offset:0,size:32}:null,Ne=R.halfPassConv?S.lo:S.main,se=Array.from({length:_e},(Xe,we)=>we===0?null:U(Ne.bgl,[ie,Ae,fe,$e,j,te,q,Fe[we],R.chunkableStd?ot:At[we]])),H=(Xe,we,pe,Pe,ze,ke)=>{const He=Xe*Ze;ft[He]=we?1:0,ft[He+1]=pe,ft[He+2]=Pe,ft[He+3]=0,ft[He+4]=ze,ft[He+5]=ke,ft[He+6]=0,ft[He+7]=0},le=(Xe,we,pe,Pe,ze,ke,He,Qe)=>{if(!(ke<=0&&He<=0))if(R.halfPassConv){{const at=Xe.beginComputePass();Pe?at.setBindGroup(0,pe,Pe):at.setBindGroup(0,pe),ke>0&&(at.setPipeline(we.lo.pipe),at.dispatchWorkgroups(1,ze,ke)),He>0&&(at.setPipeline(we.extLo.pipe),at.dispatchWorkgroups(1,1,He)),at.end(),Qe.push("convHidden")}{const at=Xe.beginComputePass();Pe?at.setBindGroup(0,pe,Pe):at.setBindGroup(0,pe),ke>0&&(at.setPipeline(we.hi.pipe),at.dispatchWorkgroups(1,ze,ke)),He>0&&(at.setPipeline(we.extHi.pipe),at.dispatchWorkgroups(1,1,He)),at.end(),Qe.push("convHidden")}}else{const at=Xe.beginComputePass();Pe?at.setBindGroup(0,pe,Pe):at.setBindGroup(0,pe),ke>0&&(at.setPipeline(we.main.pipe),at.dispatchWorkgroups(1,ze,ke)),He>0&&(at.setPipeline(we.ext.pipe),at.dispatchWorkgroups(1,1,He)),at.end(),Qe.push("convHidden")}},Ye=_?new Uint16Array(G):new Float32Array(G),it=new Uint8Array(L*L),et=new Uint32Array(st),Ee=new Uint32Array(st+L*L),Ke=new Uint32Array(12),Me=new Float32Array(Ke.buffer),Ue=new Uint32Array(4);function St(Xe,we){return Be(this,null,function*(){if(Xe.length!==v)throw new Error(`meshnet_fast_v4 expected ${v} voxels, got ${Xe.length}`);const pe=d.norm==="gn"&&!(s!=null&&s.disableConeSkip),Pe=yield xe.prepareInput({volume:Xe,ioOpts:we,useCone:pe,padInputHost:Ye,headRowHost:it,hasF16Flag:_}),ze=Pe.info,ke=yr(it,ze,d.dilations,pe);let He=ir(e,s);const Qe=[];if(He==="single"&&!R.chunkableStd){const ge=e.createCommandEncoder();Pe.runPrePasses(ge,Qe),ke.clsSkipped&&(ge.clearBuffer(K,0,y),ke.clsStrips.length>0&&e.queue.writeBuffer(Ie,0,ke.clsStrips));for(let ye=0;ye<_e;ye++){const me=ke.layers[ye],rt=me.isFull?st:me.mainStrips.length,$t=me.isFull||!me.extStrips?0:me.extStrips.length,vt=me.nMomExt||0,xt=me.haloRows?me.haloRows.length:0,_t=me.isFull?st:me.normStrips?me.normStrips.length:0;if(!me.isFull&&(rt>0||$t>0)&&(rt>0&&et.set(me.mainStrips,0),$t>0&&et.set(me.extStrips,rt),e.queue.writeBuffer(Fe[ye],0,et.subarray(0,rt+$t))),ye===0){const Ve=me.isFull?64:1,We=me.isFull?L:rt,Pt=!!(me.bgStrip&&xt>0);if(Ue[0]=me.isFull?1:0,Ue[1]=me.bgStrip?me.bgStrip.yWg*4:0,Ue[2]=me.bgStrip?me.bgStrip.z:0,Ue[3]=0,e.queue.writeBuffer(qe,0,Ue),R.halfPass0){{const Te=ge.beginComputePass();Te.setBindGroup(0,oe),We>0&&(Te.setPipeline(ht.lo.pipe),Te.dispatchWorkgroups(1,Ve,We)),Pt&&(Te.setPipeline(ht.bgLo.pipe),Te.dispatchWorkgroups(1,1,1)),Te.end(),Qe.push("conv0")}{const Te=ge.beginComputePass();Te.setBindGroup(0,oe),We>0&&(Te.setPipeline(ht.hi.pipe),Te.dispatchWorkgroups(1,Ve,We)),Pt&&(Te.setPipeline(ht.bgHi.pipe),Te.dispatchWorkgroups(1,1,1)),Te.end(),Qe.push("conv0")}}else{const Te=ge.beginComputePass();Te.setBindGroup(0,oe),We>0&&(Te.setPipeline(ht.main.pipe),Te.dispatchWorkgroups(1,Ve,We)),Pt&&(Te.setPipeline(ht.bg.pipe),Te.dispatchWorkgroups(1,1,1)),Te.end(),Qe.push("conv0")}}else{const Ve=d.dilations[ye],We=se[ye],Pt=me.isFull?64:1,Te=me.isFull?L:rt,jt=me.mode==="rpure"&&xt>0||me.mode==="bwd"&&ye+1<_e;Ue[0]=me.isFull?1:0,Ue[1]=rt,Ue[2]=cs(Ve,jt),Ue[3]=0,e.queue.writeBuffer(At[ye],0,Ue),le(ge,S,We,null,Pt,Te,$t,Qe)}const Wt=ye+1<_e?b.w0Vec4s+ye*b.hiddenVec4PerLayer:0;Ke[0]=ye*b.metaStride,Ke[1]=Wt,Ke[2]=(ye+1)*b.metaStride,Ke[3]=ye+1<_e?1:0,Ke[4]=ye===0?1:0,Ke[5]=me.isFull?1:0,Ke[6]=rt,Ke[7]=vt*8,Me[8]=me.extWeight||0,Ke[9]=0,Ke[10]=0,Ke[11]=0,e.queue.writeBuffer(Oe[ye],0,Ke);{const Ve=ge.beginComputePass();Ve.setBindGroup(0,je[ye]),Ve.setPipeline(Q.pipe),Ve.dispatchWorkgroups(d.cs,1,1),Ve.end(),Qe.push("momentsPrep")}if(ye+1<_e){{const We=ge.beginComputePass();We.setBindGroup(0,je[ye]),We.setPipeline(nn.pipe),We.dispatchWorkgroups(1,1,1),We.end(),Qe.push("momentsPrep")}const Ve=me.isFull?0:_t;if((Ve>0||xt>0)&&(Ve>0&&Ee.set(me.normStrips,0),xt>0&&Ee.set(me.haloRows,Ve),e.queue.writeBuffer(Ce[ye],0,Ee.subarray(0,Ve+xt))),Ue[0]=me.isFull?1:0,Ue[1]=me.bgStrip?me.bgStrip.z*L+me.bgStrip.yWg*4:0,Ue[2]=Ve,Ue[3]=xt,e.queue.writeBuffer(Le[ye],0,Ue),me.isFull||_t>0||xt>0){const We=ge.beginComputePass();We.setBindGroup(0,Ge[ye]),(me.isFull||_t>0)&&(We.setPipeline(Mt.pipe),We.dispatchWorkgroups(1,me.isFull?64:1,me.isFull?L:_t)),xt>0&&(We.setPipeline(Ht.pipe),We.dispatchWorkgroups(1,Math.ceil(xt/4),1)),We.end(),Qe.push("normHalo")}}}return St.__passCategories=Qe,xe.finishAndReadback({enc:ge,schedule:ke,passCategories:Qe,u4Tmp:Ue,ioOpts:we})}const at=qn(e),ct=typeof(we==null?void 0:we.onProgress)=="function"?we.onProgress:null,Et=dr(ke,_e);let De=0,tt=-1;const yt=ge=>{if(!ct)return;const ye=Math.min(.99,De/Et);let me="";ge>=0&&ge!==tt&&(tt=ge,me=`Layer ${ge+1}/${_e}`),ct(ye,me)},lt=mr(e,e.__v4MsPerStrip||.12,yt);let nt=e.createCommandEncoder();Pe.runPrePasses(nt,Qe),ke.clsSkipped&&(nt.clearBuffer(K,0,y),ke.clsStrips.length>0&&e.queue.writeBuffer(Ie,0,ke.clsStrips));for(let ge=0;ge<_e;ge++){const ye=ke.layers[ge],me=ye.isFull?st:ye.mainStrips.length,rt=ye.isFull||!ye.extStrips?0:ye.extStrips.length,$t=ye.nMomExt||0,vt=ye.haloRows?ye.haloRows.length:0,xt=ye.isFull?st:ye.normStrips?ye.normStrips.length:0,_t=bs(ye,ge,_e);if(!ye.isFull&&(me>0||rt>0)&&(me>0&&et.set(ye.mainStrips,0),rt>0&&et.set(ye.extStrips,me),e.queue.writeBuffer(Fe[ge],0,et.subarray(0,me+rt))),ge===0){const Ve=ye.isFull?64:1,We=ye.isFull?L:me,Pt=!!(ye.bgStrip&&vt>0);if(Ue[0]=ye.isFull?1:0,Ue[1]=ye.bgStrip?ye.bgStrip.yWg*4:0,Ue[2]=ye.bgStrip?ye.bgStrip.z:0,Ue[3]=0,e.queue.writeBuffer(qe,0,Ue),R.halfPass0){{const Te=nt.beginComputePass();Te.setBindGroup(0,oe),We>0&&(Te.setPipeline(ht.lo.pipe),Te.dispatchWorkgroups(1,Ve,We)),Pt&&(Te.setPipeline(ht.bgLo.pipe),Te.dispatchWorkgroups(1,1,1)),Te.end(),Qe.push("conv0")}{const Te=nt.beginComputePass();Te.setBindGroup(0,oe),We>0&&(Te.setPipeline(ht.hi.pipe),Te.dispatchWorkgroups(1,Ve,We)),Pt&&(Te.setPipeline(ht.bgHi.pipe),Te.dispatchWorkgroups(1,1,1)),Te.end(),Qe.push("conv0")}}else{const Te=nt.beginComputePass();Te.setBindGroup(0,oe),We>0&&(Te.setPipeline(ht.main.pipe),Te.dispatchWorkgroups(1,Ve,We)),Pt&&(Te.setPipeline(ht.bg.pipe),Te.dispatchWorkgroups(1,1,1)),Te.end(),Qe.push("conv0")}He==="calibrate"?(e.queue.submit([nt.finish()]),nt=e.createCommandEncoder()):He==="paced"&&(De+=_t.convWork,nt=yield lt.submitChunk(nt,_t.convWork,0,{forceUiYield:!0}))}else{const Ve=d.dilations[ge],We=se[ge],Pt=ye.isFull?64:1,Te=ye.isFull?L:me,jt=ye.mode==="rpure"&&vt>0||ye.mode==="bwd"&&ge+1<_e,Bn=cs(Ve,jt);if(!R.chunkableStd)Ue[0]=ye.isFull?1:0,Ue[1]=me,Ue[2]=Bn,Ue[3]=0,e.queue.writeBuffer(At[ge],0,Ue),le(nt,S,We,null,Pt,Te,rt,Qe);else if(He==="pipelined"||He==="single"){const Xt=(ge-1)*Qn;H(Xt,ye.isFull,me,Bn,0,0),e.queue.writeBuffer(ut,Xt*Se,ft.subarray(Xt*Ze,(Xt+1)*Ze)),le(nt,S,We,[Xt*Se],Pt,Te,rt,Qe)}else{const Xt=(ge-1)*Qn,Hn=He==="calibrate"?1024:Math.max(256,Math.min(4096,Math.round(or/Math.max(.005,lt.getMsPerStrip())))),xn=[];let Fn=0;if(ye.isFull){const Jt=Math.max(4,Math.min(64,Math.round(Hn/64)));for(let Tt=0;Tt<L;Tt+=Jt){const qt=Math.min(Jt,L-Tt),en=Xt+Fn++;H(en,!0,me,Bn,Tt,0),xn.push({slotIdx:en,mainY:64,mainCountZ:qt,extCountZ:0,strips:qt*64})}}else{const Jt=Math.max(256,Hn);for(let qt=0;qt<me;qt+=Jt){const en=Math.min(Jt,me-qt),dn=Xt+Fn++;H(dn,!1,me,Bn,qt,0),xn.push({slotIdx:dn,mainY:1,mainCountZ:en,extCountZ:0,strips:en})}const Tt=Math.max(256,Hn);for(let qt=0;qt<rt;qt+=Tt){const en=Math.min(Tt,rt-qt),dn=Xt+Fn++;H(dn,!1,me,Bn,0,qt),xn.push({slotIdx:dn,mainY:1,mainCountZ:0,extCountZ:en,strips:en})}}Fn>0&&e.queue.writeBuffer(ut,Xt*Se,ft.subarray(Xt*Ze,(Xt+Fn)*Ze));let Qt=0;for(let Jt=0;Jt<xn.length;Jt++){const Tt=xn[Jt];if(le(nt,S,We,[Tt.slotIdx*Se],Tt.mainY,Tt.mainCountZ,Tt.extCountZ,Qe),He==="pipelined")continue;Qt+=Tt.strips;const qt=Jt===xn.length-1;if(He==="calibrate"&&(Qt>=512||qt&&Qt>0)){const en=performance.now();e.queue.submit([nt.finish()]),yield e.queue.onSubmittedWorkDone();const dn=performance.now()-en;if(nt=e.createCommandEncoder(),De+=Qt,Qt>=512){const $s=dn/Qt,jn=$s*st;e.__v4WinCalibrated=!0,lt.setMsPerStrip($s),!at.isWindowsSharedIgpu&&jn<rr?(e.__v4WinFast=!0,He="pipelined",console.log(`[WebGPU-V4] Windows GPU calibration: estFullLayer=${jn.toFixed(1)}ms -> unthrottled pipelined mode`)):(e.__v4WinFast=!1,He="paced",console.log(`[WebGPU-V4] Windows GPU calibration: estFullLayer=${jn.toFixed(1)}ms -> TDR-safe 2-in-flight paced mode`),yt(ge))}Qt=0}else He==="paced"&&(De+=Qt,nt=yield lt.submitChunk(nt,Qt,ge),Qt=0)}}}const Wt=ge+1<_e?b.w0Vec4s+ge*b.hiddenVec4PerLayer:0;Ke[0]=ge*b.metaStride,Ke[1]=Wt,Ke[2]=(ge+1)*b.metaStride,Ke[3]=ge+1<_e?1:0,Ke[4]=ge===0?1:0,Ke[5]=ye.isFull?1:0,Ke[6]=me,Ke[7]=$t*8,Me[8]=ye.extWeight||0,Ke[9]=0,Ke[10]=0,Ke[11]=0,e.queue.writeBuffer(Oe[ge],0,Ke);{const Ve=nt.beginComputePass();Ve.setBindGroup(0,je[ge]),Ve.setPipeline(Q.pipe),Ve.dispatchWorkgroups(d.cs,1,1),Ve.end(),Qe.push("momentsPrep")}if(ge+1<_e){{const We=nt.beginComputePass();We.setBindGroup(0,je[ge]),We.setPipeline(nn.pipe),We.dispatchWorkgroups(1,1,1),We.end(),Qe.push("momentsPrep")}const Ve=ye.isFull?0:xt;if((Ve>0||vt>0)&&(Ve>0&&Ee.set(ye.normStrips,0),vt>0&&Ee.set(ye.haloRows,Ve),e.queue.writeBuffer(Ce[ge],0,Ee.subarray(0,Ve+vt))),Ue[0]=ye.isFull?1:0,Ue[1]=ye.bgStrip?ye.bgStrip.z*L+ye.bgStrip.yWg*4:0,Ue[2]=Ve,Ue[3]=vt,e.queue.writeBuffer(Le[ge],0,Ue),ye.isFull||xt>0||vt>0){const We=nt.beginComputePass();We.setBindGroup(0,Ge[ge]),(ye.isFull||xt>0)&&(We.setPipeline(Mt.pipe),We.dispatchWorkgroups(1,ye.isFull?64:1,ye.isFull?L:xt)),vt>0&&(We.setPipeline(Ht.pipe),We.dispatchWorkgroups(1,Math.ceil(vt/4),1)),We.end(),Qe.push("normHalo")}}if(He==="pipelined")e.queue.submit([nt.finish()]),nt=e.createCommandEncoder();else if(He==="calibrate")e.queue.submit([nt.finish()]),yield e.queue.onSubmittedWorkDone(),nt=e.createCommandEncoder(),De+=(ge===0||!R.chunkableStd?_t.convWork:0)+_t.normWork,ge===_e-1&&!e.__v4WinCalibrated&&(e.__v4WinCalibrated=!0,e.__v4WinFast=!at.isWindowsSharedIgpu);else if(He!=="single"){const Ve=(!R.chunkableStd&&ge>0?_t.convWork:0)+_t.normWork;De+=Ve,nt=yield lt.submitChunk(nt,Ve,ge)}}return He==="paced"&&(yield lt.waitBeforeFinalSubmit()),St.__passCategories=Qe,xe.finishAndReadback({enc:nt,schedule:ke,passCategories:Qe,u4Tmp:Ue,ioOpts:we,paced:He==="paced",onProgress:ct})})}return xe.warmupIoPipelines(),St.dispose=({keepSharedWorkspace:Xe=!1}={})=>{xe.dispose();for(const we of re)we.destroy();if(re.length=0,ee.resetBytes(),D.pooled)Xe?D.inUse=!1:an.get(e)===D&&vn(e);else{for(const we of D.buffers)we.destroy();D.buffers.length=0}},St.gpuBytes=()=>D.bytes+ee.getBytes(),St.__passCategories=[],St.__coneInfo=()=>({paddedVox:G,actMiB:F/1048576}),St.kernels="v4-int8",St})}function xs(e){return Be(this,null,function*(){var a,f,l,u;if(!e)return;const t=()=>us>0||!!e.__isLost;if(t())return;const n=!!((f=(a=e.features)==null?void 0:a.has)!=null&&f.call(a,"shader-f16")),s=cr(e,null),r=e.limits||{},i=Math.min((l=r.maxStorageBufferBindingSize)!=null?l:1/0,(u=r.maxBufferSize)!=null?u:1/0);if(yield on(e,n?"prep_in_u8_f16":"prep_in_u8_f32",()=>ps(!0,n),"main",["read-only-storage","storage","uniform"]),t()||(yield on(e,"transpose_u8_v4",hr,"main",["read-only-storage","storage"]),t()))return;const o=[{chan:24,cs:24,nclass:0,dilations:ls,activation:"gelu_tanh",norm:"gn"},{chan:15,cs:16,nclass:0,dilations:[16,8,4,2,1],activation:"gelu_tanh",norm:"gn"},{chan:16,cs:16,nclass:0,dilations:ls,activation:"gelu_tanh",norm:"gn"}];for(const m of o){if(t())return;const g=m.cs>=16,c=g?m.cs/2:m.cs;if(L*L*c*gt*4>i||ur(e,m,null)){const b=zr({cs:m.cs,chan:m.chan,nclass:0,clsK4:0,dilations:m.dilations,activation:m.activation,norm:m.norm,hasF16:n,subgroupMode:s,numConvs:m.dilations.length,probCfg:null});yield vr(e,m,null,n,s,null,b,{includeCls:!1,sequential:!0,shouldAbort:t})}else{const b=lr(e,null),P=Ar({cs:m.cs,chan:m.chan,nclass:0,clsK4:0,dilations:m.dilations,activation:m.activation,norm:m.norm,hasF16:n,subgroupMode:s,splitHalves:g,probCfg:null,chunkableStd:b});yield xr(e,m,null,n,s,g,null,P,{includeCls:!1,sequential:!0,shouldAbort:t})}}})}const ma=(e,t)=>Be(null,null,function*(){const n=yield fetch(t).then(s=>s.arrayBuffer());return vs(e,new Uint8Array(n))}),Br=!0,da={load:ma,setupNet:vs,warmupV4CorePipelines:xs,supportsF32Fallback:Cr,supportsGpuNativeIO:Br},ms=Object.freeze(Object.defineProperty({__proto__:null,default:da,releaseV4Workspace:vn,setupNet:vs,supportsF32Fallback:Cr,supportsGpuNativeIO:Br,warmupV4CorePipelines:xs},Symbol.toStringTag,{value:"Module"}));function ga(){var e;try{if(new URLSearchParams(((e=globalThis.location)==null?void 0:e.search)||"").get("webgpuKernels")==="tinygrad")return"disabled by ?webgpuKernels=tinygrad"}catch(t){}return null}const Cn=new Set(["meshnet_fast_v4","dkatlas24_int8","mindmap24_int8","model16chan18cls_int8","mindgrab_int8"]);function _a(e){return Cn.has(e)}const wn=Object.assign({"./webgpu_runners/dkatlas24_f32_runner.js":()=>mt(()=>import("./dkatlas24_f32_runner-CdBMa7VZ.js"),[],import.meta.url),"./webgpu_runners/dkatlas24_int8_v3_runner.js":()=>mt(()=>import("./dkatlas24_int8_v3_runner-6KL_UNmh.js"),__vite__mapDeps([0,1,2,3]),import.meta.url),"./webgpu_runners/dkatlas24_runner.js":()=>mt(()=>import("./dkatlas24_runner-BkVMX0Bk.js"),[],import.meta.url),"./webgpu_runners/dkatlas24_synth_f32_runner.js":()=>mt(()=>import("./dkatlas24_synth_f32_runner-Bb7lxqr0.js"),[],import.meta.url),"./webgpu_runners/dkatlas24_synth_runner.js":()=>mt(()=>import("./dkatlas24_synth_runner-5rLWbXWF.js"),[],import.meta.url),"./webgpu_runners/manual_mindgrab_runner.js":()=>mt(()=>import("./manual_mindgrab_runner-DDusGIor.js"),[],import.meta.url),"./webgpu_runners/mindgrab_runner.js":()=>mt(()=>import("./mindgrab_runner-B-UQtXej.js"),[],import.meta.url),"./webgpu_runners/mindgrab_tta_runner.js":()=>mt(()=>import("./mindgrab_tta_runner-Ct42O8D2.js"),[],import.meta.url),"./webgpu_runners/model16chan18cls_f32_runner.js":()=>mt(()=>import("./model16chan18cls_f32_runner-B5FaUMez.js"),[],import.meta.url),"./webgpu_runners/model16chan18cls_runner.js":()=>mt(()=>import("./model16chan18cls_runner-aMK3m7Gj.js"),[],import.meta.url),"./webgpu_runners/model21_104class_runner.js":()=>mt(()=>import("./model21_104class_runner-DuOJ6qrl.js"),[],import.meta.url),"./webgpu_runners/model21_f32_runner.js":()=>mt(()=>import("./model21_f32_runner-yTUV9LXd.js"),[],import.meta.url),"./webgpu_runners/model21_tta_runner.js":()=>mt(()=>import("./model21_tta_runner-e7-76trO.js"),[],import.meta.url),"./webgpu_runners/model21chan18cls_runner.js":()=>mt(()=>import("./model21chan18cls_runner-DvLOnZMy.js"),[],import.meta.url),"./webgpu_runners/model24chan18cls_gdice_prio_probability_runner.js":()=>mt(()=>import("./model24chan18cls_gdice_prio_probability_runner-BHqpfuCi.js"),[],import.meta.url),"./webgpu_runners/model24chan18cls_gdice_prio_runner.js":()=>mt(()=>import("./model24chan18cls_gdice_prio_runner-B5cN26gD.js"),[],import.meta.url),"./webgpu_runners/model30chan18cls_runner.js":()=>mt(()=>import("./model30chan18cls_runner-C2mBz0G4.js"),[],import.meta.url),"./webgpu_runners/model30chan18cls_tta_runner.js":()=>mt(()=>import("./model30chan18cls_tta_runner-v8CMqLh5.js"),[],import.meta.url),"./webgpu_runners/model30chan50cls_f32_runner.js":()=>mt(()=>import("./model30chan50cls_f32_runner-DQ53FZ3-.js"),[],import.meta.url),"./webgpu_runners/model30chan50cls_runner.js":()=>mt(()=>import("./model30chan50cls_runner-D72-rlcG.js"),[],import.meta.url),"./webgpu_runners/model30chan50cls_tta_runner.js":()=>mt(()=>import("./model30chan50cls_tta_runner-CliMlbAZ.js"),[],import.meta.url),"./webgpu_runners/model32chan18cls_runner.js":()=>mt(()=>import("./model32chan18cls_runner-cowyou29.js"),[],import.meta.url),"./webgpu_runners/model5_gw_ae_runner.js":()=>mt(()=>import("./model5_gw_ae_runner-jI57fGIB.js"),[],import.meta.url),"./webgpu_runners/model5_runner.js":()=>mt(()=>import("./model5_runner-BiUlzJBp.js"),[],import.meta.url),"./webgpu_runners/model5_tta_runner.js":()=>mt(()=>import("./model5_tta_runner-DjIMLwlR.js"),[],import.meta.url),"./webgpu_runners/model6chan3cls_runner.js":()=>mt(()=>import("./model6chan3cls_runner-wSGRZpe5.js"),[],import.meta.url),"./webgpu_runners/robust_subcortical_runner.js":()=>mt(()=>import("./robust_subcortical_runner-D74Uw6At.js"),[],import.meta.url),"./webgpu_runners/robust_subcortical_tta_runner.js":()=>mt(()=>import("./robust_subcortical_tta_runner-CkwA2dHP.js"),[],import.meta.url)});function ba(){const e=Object.keys(wn).map(t=>{const n=t.match(/\/([^\/]+)_runner\.js$/);return n?n[1]:null}).filter(Boolean);return Array.from(new Set([...Cn,...e]))}function ha(e){if(Cn.has(e))return()=>Be(null,null,function*(){return ms});const t=`./webgpu_runners/${e}_runner.js`;if(wn[t])return wn[t];const n=e.toLowerCase();for(const s of Cn)if(s.toLowerCase()===n)return()=>Be(null,null,function*(){return ms});for(const[s,r]of Object.entries(wn))if(s.toLowerCase().includes(`/${n}_runner.js`))return r;for(const[s,r]of Object.entries(wn))if(s.includes(e))return r;return null}function wa(e){if(Cn.has(e))return!0;const t=`./webgpu_runners/${e}_runner.js`;if(wn[t])return!0;const n=e.toLowerCase();for(const r of Cn)if(r.toLowerCase()===n)return!0;const s=`/${n}_runner.js`;return Object.keys(wn).some(r=>r.toLowerCase().endsWith(s))}function va(e,t){if(typeof Float16Array=="undefined")throw new Error("Float16Array unavailable: cannot cast fp32 master weights to fp16.");const n=new DataView(e.buffer,e.byteOffset,e.byteLength),s=Number(n.getBigUint64(0,!0)),r=JSON.parse(new TextDecoder("utf8").decode(e.subarray(8,8+s))),i=8+s;if(!Object.entries(r).some(([p,d])=>p!=="__metadata__"&&d.dtype==="F32"))return e;const a={},f=[];let l=0;for(const[p,d]of Object.entries(r)){if(p==="__metadata__"){a[p]=d;continue}const[b,P]=d.data_offsets,_=e.subarray(i+b,i+P);let w,v;if(d.dtype==="F32"){const y=new Float32Array(_.slice().buffer),h=new Float16Array(y);w=new Uint8Array(h.buffer),v="F16"}else w=_,v=d.dtype;a[p]={dtype:v,shape:d.shape,data_offsets:[l,l+w.byteLength]},f.push(w),l+=w.byteLength}const u=new TextEncoder().encode(JSON.stringify(a)),m=(8-u.byteLength%8)%8,g=new Uint8Array(8+u.byteLength+m+l);new DataView(g.buffer).setBigUint64(0,BigInt(u.byteLength+m),!0),g.set(u,8),g.fill(32,8+u.byteLength,8+u.byteLength+m);let c=8+u.byteLength+m;for(const p of f)g.set(p,c),c+=p.byteLength;return console.log("[WebGPU] Cast fp32 master weights -> fp16."),g}function xa(e,t){try{const n=o=>!!(e.features&&e.features.has&&e.features.has(o)),s=e.limits||{},r=typeof navigator!="undefined"&&navigator.userAgent||"unknown",i=/Safari/.test(r)&&!/Chrome|Chromium|Android/.test(r);console.log("[SAFARI-DEBUG] ===== WebGPU device capabilities ====="),console.log("[SAFARI-DEBUG] model:",(t==null?void 0:t.modelName)||(t==null?void 0:t.webgpu_runner)||"(unknown)"),console.log("[SAFARI-DEBUG] userAgent:",r,"| classified Safari:",i),console.log("[SAFARI-DEBUG] shader-f16:",n("shader-f16")),console.log("[SAFARI-DEBUG] features:",e.features?Array.from(e.features):"(none)"),console.log("[SAFARI-DEBUG] limits:",{maxBufferSize:s.maxBufferSize,maxStorageBufferBindingSize:s.maxStorageBufferBindingSize,maxComputeInvocationsPerWorkgroup:s.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:s.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:s.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:s.maxComputeWorkgroupSizeZ,maxComputeWorkgroupsPerDimension:s.maxComputeWorkgroupsPerDimension}),console.log("[SAFARI-DEBUG] BC_WEBGPU_DEBUG (logits readback):",typeof window!="undefined"&&!!window.BC_WEBGPU_DEBUG),console.log("[SAFARI-DEBUG] =======================================")}catch(n){console.warn("[SAFARI-DEBUG] capability dump failed:",n==null?void 0:n.message)}}function Fr(){return typeof requestAnimationFrame!="function"?new Promise(e=>setTimeout(e,0)):new Promise(e=>{let t=!1;const n=()=>{t||(t=!0,e())},s=setTimeout(n,25);requestAnimationFrame(()=>{clearTimeout(s),setTimeout(n,0)})})}const ya=6,$a=4,_n=new Map,es=new Map,bn=new Map,pn=new WeakMap,ts=new WeakSet;function Sa(e){return Be(this,null,function*(){if(!(!e||ts.has(e))){ts.add(e);try{yield xs(e)}catch(t){ts.delete(e),console.debug("[WebGPU] Background pipeline warmup skipped:",(t==null?void 0:t.message)||t)}}})}function Lr(e,{keepSharedWorkspace:t=!1}={}){var n;if(e)try{if(typeof((n=e.execute)==null?void 0:n.dispose)=="function")e.execute.dispose({keepSharedWorkspace:t});else if(e.ownedBuffers)for(const s of e.ownedBuffers)s.destroy()}catch(s){console.warn("[WebGPU] Failed to dispose cached runner buffers:",s)}}function ka(e,t,n,s){var r,i,o,a,f,l,u,m,g,c,p,d,b,P,_,w,v,y,h;return JSON.stringify([e,t,n,(r=s.id)!=null?r:null,(i=s.numClasses)!=null?i:null,(o=s.outputType)!=null?o:null,(a=s.dilations)!=null?a:null,(f=s.activation)!=null?f:null,(l=s.quantize8Bit)!=null?l:null,(u=s.forceFP32)!=null?u:null,(m=s.disableF16)!=null?m:null,(g=s.disableSubgroups)!=null?g:null,(c=s.disableConeSkip)!=null?c:null,(p=s.forceLowMem128)!=null?p:null,(d=s.webgpuExecMode)!=null?d:null,(b=s.softmaxTemperature)!=null?b:null,(P=s.brainSupportTemperature)!=null?P:null,(_=s.brainSupportPower)!=null?_:null,(w=s.partialVolumeSigma)!=null?w:null,(v=s.probabilityGroups)!=null?v:null,(y=s.probabilityDisplay)!=null?y:null,(h=s.classifierBias)!=null?h:null])}function Ns(e){const t=_n.get(e);if(t)return _n.delete(e),_n.set(e,t),Promise.resolve(t);const n=es.get(e);if(n)return n;const s=Be(null,null,function*(){let r;try{const o=yield fetch(e);if(!o.ok)throw new Error(`HTTP ${o.status}: ${o.statusText}`);r=yield o.arrayBuffer()}catch(o){throw new Error(`Failed to load weights from '${e}': ${o.message}`)}const i=new Uint8Array(r);for(_n.set(e,i);_n.size>ya;){const o=_n.keys().next().value;_n.delete(o)}return i}).finally(()=>{es.delete(e)});return es.set(e,s),s}function Ma(e,t,n,s){if(!n)return e;const r=bn.get(t);if(r)return bn.delete(t),bn.set(t,r),r;const i=va(e);for(bn.set(t,i);bn.size>$a;){const o=bn.keys().next().value;bn.delete(o)}return i}function ds(e,t){return Be(this,null,function*(){const n=[],s=e.createBuffer.bind(e);e.createBuffer=r=>{const i=s(r);return n.push(i),i};try{return{result:yield t(),buffers:n}}finally{e.createBuffer=s}})}function gs(e){let t=0;for(const n of e)t+=Number(n==null?void 0:n.size)||0;return t}function ns(e){for(const t of e)try{t.destroy()}catch(n){}}function Pa(e,t,n){return Be(this,null,function*(){var y,h,k,F,$,M,x;const s=(y=ga())!=null?y:Ho(e,t);let r=t.webgpu_runner,i=t.webgpu_safetensor;const o=!!(e.features&&e.features.has&&e.features.has("shader-f16"));let a=!1;s&&(t.forceFP32?(a=!0,console.log("[WebGPU] forceFP32: using fp32 runner and weights.")):!o&&wa(`${r}_f32`)&&(a=!0,console.log("[WebGPU] shader-f16 not supported on this device -> auto-selecting fp32 runner and weights.")),a&&(r=`${r}_f32`,i=i.replace(".safetensors","_f32.safetensors")),t.enableTTA&&t.webgpuTTArunner&&(console.log("[WebGPU] TTA Enabled: Switching to TTA runner and weights."),r=`${r}_tta`,i=i.replace(".safetensors","_tta.safetensors")));const l=ka(s?"runner":"native",s?r:"webgpu_native",i,t),u=pn.get(e);if(u&&u.runnerKey===l)return Ft(bt({},u),{cacheHit:!0});const m=!!(s&&_a(r));if(n("Loading model…",.1),u&&(pn.delete(e),Lr(u,{keepSharedWorkspace:m})),m||vn(e),xa(e,t),s)console.log(`[WebGPU-native] not used for ${t.modelName||t.webgpu_runner}: ${s}`);else{let C=[];try{const z=yield Ns(i),R=yield ds(e,()=>Yo(e,z,n,t));C=R.buffers;const I=R.result;I.kernels="hand-written";const T={runnerKey:l,runnerName:"webgpu_native",weightsPath:i,execute:I,supportsGpuNativeIO:!1,ownedBuffers:C,gpuBytes:gs(C)};return pn.set(e,T),console.log("[WebGPU-native] Using hand-written WebGPU kernels."),Ft(bt({},T),{cacheHit:!1})}catch(z){ns(C),console.warn("[WebGPU-native] falling back to the tinygrad runner:",(z==null?void 0:z.message)||z)}}const g=m?()=>Be(null,null,function*(){return ms}):ha(r);if(!g){const C=ba();throw new Error(`Runner '${r}' not found. Available runners: ${C.join(", ")||"none"}. Looking in: ./webgpu_runners/`)}const[c,p]=yield Promise.all([g(),Ns(i)]);if(!c.setupNet&&!((h=c.default)!=null&&h.setupNet))throw new Error(`Runner module '${r}' doesn't export 'setupNet'. Exported keys: ${Object.keys(c).join(", ")}`);const d=!!((F=c.supportsF32Fallback)!=null?F:(k=c.default)!=null&&k.supportsF32Fallback),b=!!((M=c.supportsGpuNativeIO)!=null?M:($=c.default)!=null&&$.supportsGpuNativeIO);!a&&!o&&!d&&console.warn(`[WebGPU] shader-f16 not supported and no fp32 runner ('${r}_f32') available; the fp16 runner will likely fail and fall back to WebGL2.`);const _=Ma(p,i,!a&&!d),w=c.setupNet||((x=c.default)==null?void 0:x.setupNet);let v=[];try{const C=yield ds(e,()=>w(e,_,n,t));v=C.buffers;const z=C.result;if(typeof z!="function")throw ns(v),new Error(`setupNet for '${r}' didn't return a function. Returned type: ${typeof z}`);const R={runnerKey:l,runnerName:r,weightsPath:i,execute:z,supportsGpuNativeIO:b,ownedBuffers:typeof z.dispose=="function"?null:v,gpuBytes:typeof z.gpuBytes=="function"?z.gpuBytes():gs(v)};return pn.set(e,R),Ft(bt({},R),{cacheHit:!1})}catch(C){throw m&&vn(e),ns(v),new Error(`Failed to setup network for '${r}': ${C.message}`)}})}function Aa(e,t,n,s,r,i,o){return Be(this,null,function*(){var g,c,p,d;const a=n.outputType==="probability";console.log("Starting WebGPU inference..."),o(a?"Starting tissue estimation…":"Starting segmentation…",0);const f=xo(n,vo.WEBGPU);f.isModelFullVol=!0;let l=!1,u=null;const m=Mo(n);try{if(!e)throw new Error("WebGPU device is required but not provided");if(!(n!=null&&n.webgpu_runner))throw new Error("Model entry must specify webgpu_runner property");if(!(n!=null&&n.webgpu_safetensor))throw new Error("Model entry must specify webgpu_safetensor property");const b=n.webgpuStorageSize||335544320;if(e.limits){const A=re=>(re/1048576).toFixed(0),K=(g=e.limits.maxStorageBufferBindingSize)!=null?g:1/0,V=(c=e.limits.maxBufferSize)!=null?c:1/0;if(K<b||V<b){const re=A(Math.min(K,V)),ee=A(b),Z=`[WebGPU] Device buffer limit (${re} MB) is below the ${ee} MB this model needs - using WebGL2 fallback.`;throw console.warn(Z),new Error(Z)}}e.pushErrorScope("out-of-memory"),l=!0;const P=performance.now();u=yield Pa(e,n,o);const _=((performance.now()-P)/1e3).toFixed(4),w=performance.now();o("Preparing volume…",.25);const v=[256,256,256],y=u.supportsGpuNativeIO&&!!n.enableTranspose&&!n.inputPermutation,h=u.supportsGpuNativeIO&&!!n.enableTranspose&&!n.outputPermutation;let k,F;if(n.enableQuantileNorm){const{qmin:A,qmax:K}=go(r);k=A,F=K-A}else{const{min:A,max:K}=_o(r);k=A,F=K-A}const $=F===0?1:F;let M=null,x,C=v;if(y)m&&(M=Bs(r,k,$)),x=r;else{const A=Bs(r,k,$);if(m&&(M=A),n.inputPermutation){console.log(`[WebGPU] Permuting Input: ${n.inputPermutation}`);const K=n.inputPermutation;C=[v[K[0]],v[K[1]],v[K[2]]],x=Sn(A,v,K)}else n.enableTranspose?x=Sn(A,v,[2,1,0]):x=A}const z=((performance.now()-w)/1e3).toFixed(4);o("",.3),o(a?"Estimating tissue maps…":"Segmenting…",.3),yield Fr();const R=performance.now(),I=u.supportsGpuNativeIO?A=>{const K=Math.max(0,Math.min(1,Number(A)||0));o("",.3+.6*K)}:void 0,T=y||h||I?{gpuNativeInput:y,gpuNativeOutput:h,normOffset:k,normRange:$,onProgress:I}:void 0,B=yield ds(e,()=>T?u.execute(x,T):u.execute(x)),G=B.result;if(typeof u.execute.gpuBytes=="function"){u.gpuBytes=u.execute.gpuBytes();const A=pn.get(e);A&&A.runnerKey===u.runnerKey&&(A.gpuBytes=u.gpuBytes)}else if(B.buffers.length>0){u.gpuBytes=(u.gpuBytes||0)+gs(B.buffers),u.ownedBuffers&&u.ownedBuffers.push(...B.buffers);const A=pn.get(e);A&&A.runnerKey===u.runnerKey&&(A.gpuBytes=u.gpuBytes)}l=!1;const ae=yield e.popErrorScope();if(ae)throw new Error(`WebGPU out of memory (${ae.message||"allocation failed"}) - falling back to WebGL2.`);if(!G||!Array.isArray(G))throw new Error(`Inference didn't return expected array format. Returned: ${typeof G}`);const ce=((performance.now()-R)/1e3).toFixed(4),N=(u.gpuBytes||0)/1048576;f.GPU_Memory_MiB=Math.round(N),f.WebGPU_Kernels=u.execute.kernels||"tinygrad";const W=N>=1024?`${(N/1024).toFixed(2)} GiB`:`${Math.round(N)} MiB`;console.log(`WebGPU inference took ${ce}s (${f.WebGPU_Kernels} kernels, ${W} GPU memory).`),o("Finishing up…",.9),console.log("Inference result shapes:",G.map(A=>A==null?void 0:A.length));const X=n.outputPermutation||(n.enableTranspose?[2,1,0]:null),J=performance.now();let D;const ue={};if(m){if(G.length!==3)throw new Error(`CAT-lite expected three tissue maps; received ${G.length}.`);o("Refining tissue fractions…",.92),D=yield Bo(G,M,n,f,h?K=>K:K=>X?Sn(K,C,X):K instanceof Float32Array?K:Float32Array.from(K))}else if(a){const A=G[0];D=h?A:X?Sn(A,C,X):A instanceof Float32Array?A:Float32Array.from(A),Fs(D,!0,"probability")}else{const A=G[0];let K;h?K=A instanceof Uint8Array?A:new Uint8Array(A):X?K=bo(A,C,X):K=A instanceof Uint8Array?A:new Uint8Array(A),Fs(K,!1,"segmentation"),D=yield wo(K,r,n,t,ue,v)}const ie=((performance.now()-J)/1e3).toFixed(4),Ae=performance.now();yield i(D,t,n,ue.mask);const fe=((performance.now()-Ae)/1e3).toFixed(4);if(a)m||(f.Output_Type="Continuous tissue probability",f.Tissue=n.probabilityDisplay||"grayMatter",f.Softmax_Temperature=(p=n.softmaxTemperature)!=null?p:1);else{const A=ho(D),K=n.numClasses||A;yo(f,K,A)}$o(f,ce,ie,{Preprocess_t:z,Setup_t:_,Display_t:fe}),console.log(`[Timing] WebGPU | ${n.modelName} | setup=${(Number(_)*1e3).toFixed(1)}ms prep=${(Number(z)*1e3).toFixed(1)}ms infer=${(Number(ce)*1e3).toFixed(1)}ms post=${(Number(ie)*1e3).toFixed(1)}ms disp=${(Number(fe)*1e3).toFixed(1)}ms cache=${u.cacheHit?"hit":"miss"}`);const $e=`${Number(ce).toFixed(1)} s`,j=a?`Tissue maps finished (${$e})`:`Segmentation finished (${$e})`,te=!a&&((d=n.numClasses)!=null?d:0)>2?" · Option/Alt-click a region to isolate":"";o(`${n.modelName} · ${j}${te}`,1,"",f)}catch(b){if(console.error("WebGPU Inference Error:",b),u&&(pn.get(e)===u&&pn.delete(e),Lr(u),u=null),l&&e){l=!1;try{yield e.popErrorScope()}catch(_){}}let P=b.message;throw b.message.includes("not found")?P+=". Check that the runner file exists and the name matches.":b.message.includes("fetch")?P+=". Check network connection and file paths.":b.message.includes("binding size")&&(P+=". GPU memory limit exceeded."),So(f,P,"WebGPU inference failed"),o("",-1,`WebGPU Error: ${P}`,f),b}})}const za={batchSize:1,numOfChan:1,isColorEnable:!0,isAutoColors:!0,bgLabelValue:0,drawBoundingVolume:!1,isGPU:!0,isBrainCropMaskBased:!0,showPhase1Output:!1,isPostProcessEnable:!0,fillSuppressedWithNeighborLabel:!1,diagnoseEnclosedComponents:!1,isContoursViewEnable:!1,browserArrayBufferMaxZDim:30,telemetryFlag:!1,chartXaxisStepPercent:10,uiSampleName:"BC_UI_Sample",atlasSelectedColorTable:"Fire"};function Ds(e,t=!0){if(!e)return e;const r=e,{turbo:n}=r,s=Ps(r,["turbo"]);return!t||!n?s:Ft(bt(bt({},s),n),{isTurboActive:!0})}const hn=[{id:2,type:"Brain_Extraction",path:"/models/mindgrab/model.json",modelName:"🪓🧠 Omnimodal Skull Stripping",webgpu_safetensor:"./models/mindgrab/model.safetensors",webgpu_runner:"mindgrab",classifierBias:[1.525439739227295,-1.5258055925369263],webgpuTTArunner:!1,forceFP32:!1,webgpuStorageSize:503316480,numClasses:2,turbo:{webgpu_runner:"mindgrab_int8",quantize8Bit:!0,forceFP32:!1,webgpuTTArunner:!1,webgpuStorageSize:83886080,warning:"Runs via the 8-bit V4 WebGPU engine (~3.7s on M1 WebGPU, auto-scaling from 160 MiB down to 80 MiB max buffer on mobile) or native WebGL2."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,isPostProcessEnable:!0,enableCrop:!0,cropPadding:20,autoThreshold:.5,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!1,textureSize:0,warning:"This model may need dedicated graphics card.  For more info please check with Browser Resources <i class='fa fa-cogs'></i>.",inferenceDelay:100,description:"Omnimodal skull stripping (MindGrab) delivering high-accuracy brain extraction across T1, T2, FLAIR, DWI, EPI, MRA, PDw, qT1, CT, and PET via the 8-bit V4 WebGPU engine (80 MiB mobile / 160 MiB desktop max buffer) or native WebGL2."},{id:21,type:"Atlas",path:"/models/model24chan18cls_gdice_prio/model.json",modelName:"🪓 Subcortical + Tissue",colormapPath:"./models/model24chan18cls_gdice_prio/colormap.json",webgpu_safetensor:"./models/model24chan18cls_gdice_prio/model.safetensors",webgpu_runner:"model24chan18cls_gdice_prio",forceFP32:!1,webgpuStorageSize:1610612736,numClasses:18,turbo:{webgpu_runner:"mindmap24_int8",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:125829120,warning:"Runs via the 8-bit V4 WebGPU engine (~3.0s on M1 WebGPU, auto-scaling from 240 MiB down to 120 MiB max buffer on mobile) or native WebGL2."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,cropPadding:20,autoThreshold:0,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!0,textureSize:0,warning:"Runs via the 8-bit V4 WebGPU engine (120–240 MiB max buffer) or native WebGL2.",inferenceDelay:100,description:"Primary T1w brain parcellation into 17 regions (gray and white matter plus subcortical structures) via a 24-channel gridding-free MeshNet (MindMap v3.5 Unified: sharp sulci, intact occipital ribbon, and clinical slice/noise/bias robustness), accelerated by the 8-bit V4 WebGPU engine (120 MiB mobile / 240 MiB desktop max buffer)."},{id:23,type:"Probability_Map",path:"/models/model24chan18cls_gdice_prio/model.json",modelName:"⅔🧠 Tissue fraction maps (GM/WM/CSF)",webgpu_safetensor:"./models/model24chan18cls_gdice_prio/model.safetensors",webgpu_runner:"model24chan18cls_gdice_prio_probability",forceFP32:!1,webgpuStorageSize:1610612736,numClasses:18,turbo:{webgpu_runner:"mindmap24_int8",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:125829120,warning:"Experimental neural-assisted partial-volume estimate (~3.5s on M1 WebGPU, auto-scaling from 240 MiB down to 120 MiB max buffer on mobile)."},outputType:"probability",probabilityPostprocess:"cat-lite",softmaxTemperature:2,brainSupportTemperature:1,brainSupportPower:1,partialVolumeSigma:.65,probabilityDisplay:"grayMatter",probabilityTissues:[{name:"gm",tint:[255,64,64]},{name:"wm",tint:[255,255,255]},{name:"csf",tint:[64,128,255]}],probabilityOverlayFloor:128,probabilityOverlayAlpha:48,probabilityDisplayMin:.03,probabilityUnderlayOpacity:.1,probabilityGroups:{grayMatter:[2,6,7,8,9,10,14,15,16,17],whiteMatter:[1,5],csf:[3,4,11,12]},catLitePurePriorPower:3,catLitePriorStrength:.8,catLiteIntensityStrength:.75,catLiteMixelPrior:.35,catLiteCsfWmMixelPrior:6,catLiteSpatialWeight:.25,catLiteMinSupport:.03,catLiteSigmaFloor:.025,catLiteBiasBlockSize:16,catLiteBiasSmoothPasses:3,preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,enableQuantileNorm:!0,enableFovRecenter:!1,enableFovInflate:!1,warning:"Experimental neural-assisted mixed-class partial-volume estimate, not CAT12.",inferenceDelay:100,description:"CAT-inspired GM/WM/CSF partial-volume estimate. The 24-channel model supplies joint GM/WM/CSF priors; normalized T1 intensity, a coarse local bias estimate, spatial regularization, and explicit GM-CSF/GM-WM mixture classes produce continuous GM, WM and CSF fractions. Experimental and not a CAT12 result."},{id:5,type:"Atlas",path:"/models/model24chan104cls_v3_repbn/model.json",modelName:"🪓🔪 Desikan-Killiany Atlas",colormapPath:"./models/model24chan104cls_v3_repbn/colormap.json",webgpu_safetensor:"./models/model24chan104cls_v3_repbn/model.safetensors",webgpu_runner:"dkatlas24_synth",forceFP32:!1,webgpuStorageSize:1610612736,numClasses:104,turbo:{webgpu_runner:"dkatlas24_int8",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:125829120,warning:"Runs via the 8-bit V4 WebGPU engine (~3.0s on M1 WebGPU, auto-scaling from 240 MiB down to 120 MiB max buffer on mobile) or native WebGL2."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,cropPadding:20,autoThreshold:0,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!0,textureSize:0,warning:"Runs via the 8-bit V4 WebGPU engine (120–240 MiB max buffer) or native WebGL2.",inferenceDelay:100,description:"Primary 104-region Desikan-Killiany atlas parcellation (cortical + subcortical + 5-part corpus callosum) for research and clinical T1-weighted MRI, running via the 8-bit V4 WebGPU engine (~3.0s on M1, 120 MiB mobile / 240 MiB desktop max buffer) or native WebGL2."},{id:4,type:"Atlas",path:"/models/model24chan50cls/model.json",modelName:"🪓🔪 Desikan-Killiany 50",colormapPath:"./models/model24chan50cls/colormap.json",webgpu_safetensor:"./models/model24chan50cls/model.safetensors",webgpu_runner:"meshnet_fast_v4",forceFP32:!1,webgpuStorageSize:805306368,numClasses:50,turbo:{webgpu_runner:"meshnet_fast_v4",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:125829120,warning:"Runs via the 8-bit V4 WebGPU engine (~3.0s on M1 WebGPU, auto-scaling from 240 MiB down to 120 MiB max buffer on mobile) or native WebGL2."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,cropPadding:20,autoThreshold:0,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!0,textureSize:0,warning:"Runs via the 8-bit V4 WebGPU engine (120–240 MiB max buffer) or native WebGL2.",inferenceDelay:100,description:"Bilateral 50-region Desikan-Killiany cortical + subcortical + corpus callosum parcellation with built-in skull stripping (MindSnap-50 v3.5), running via the 8-bit V4 WebGPU engine (~3.0s on M1, 120 MiB mobile / 240 MiB desktop max buffer) or native WebGL2."},{id:6,type:"Divider",modelName:"-----------------",path:null},{id:3,type:"Atlas",path:"/models/model16chan18cls/model.json",modelName:"⚡🪓 Subcortical + Tissue",colormapPath:"./models/model16chan18cls/colormap.json",webgpu_safetensor:"./models/model16chan18cls/model.safetensors",webgpu_runner:"model16chan18cls",forceFP32:!1,webgpuStorageSize:536870912,numClasses:18,turbo:{webgpu_runner:"model16chan18cls_int8",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:83886080,warning:"Ultra-fast 16-channel MindMap v3.5 (~1.7s on M1 WebGPU, auto-scaling from 160 MiB down to 80 MiB max buffer on mobile)."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,cropPadding:20,autoThreshold:0,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!0,textureSize:0,warning:"Runs via the 8-bit V4 WebGPU engine (80–160 MiB max buffer) or native WebGL2.",inferenceDelay:100,description:"Ultra-fast 17-region brain parcellation (gray and white matter plus subcortical structures) via our 84K-parameter 16-channel MeshNet (MindMap-16ch v3.5), running in ~1.7s on M1 WebGPU with an 80 MiB mobile / 160 MiB desktop buffer footprint."},{id:14,type:"Atlas",path:"/models/model24chan104cls_synth/model.json",modelName:"🪓🔪 Desikan-Killiany (lesion scans)",colormapPath:"./models/model24chan104cls_synth/colormap.json",webgpu_safetensor:"./models/model24chan104cls_synth/model.safetensors",webgpu_runner:"dkatlas24_synth",forceFP32:!1,webgpuStorageSize:1610612736,numClasses:104,turbo:{webgpu_runner:"dkatlas24_int8",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:125829120,warning:"Runs via the 8-bit V4 WebGPU engine (~3.0s on M1 WebGPU, auto-scaling from 240 MiB down to 120 MiB max buffer on mobile) or native WebGL2."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,cropPadding:20,autoThreshold:0,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!0,textureSize:0,warning:"Runs via the 8-bit V4 WebGPU engine (120–240 MiB max buffer) or native WebGL2.",inferenceDelay:100,description:"Desikan-Killiany 104-region parcellation variant retained for scans with large focal lesions, running via the 8-bit V4 WebGPU engine (120–240 MiB max buffer) or native WebGL2."}];function ys(){return Be(this,null,function*(){return navigator.userAgent.indexOf("OPR/")>-1?"Opera":navigator.userAgent.indexOf("Edg/")>-1?"Edge":navigator.userAgent.indexOf("Falkon/")>-1?"Falkon":navigator.userAgent.indexOf("Chrome/")>-1?"Chrome":navigator.userAgent.indexOf("Firefox/")>-1?"Firefox":navigator.userAgent.indexOf("Safari/")>-1?"Safari":navigator.userAgent.indexOf("MSIE/")>-1||navigator.userAgent.indexOf("rv:")>-1?"IExplorer":"Unknown"})}function Ca(){return Be(this,null,function*(){return navigator.userAgent.indexOf("OPR/")>-1?parseInt(navigator.userAgent.split("OPR/")[1]):navigator.userAgent.indexOf("Edg/")>-1?parseInt(navigator.userAgent.split("Edg/")[1]):navigator.userAgent.indexOf("Falkon/")>-1?parseInt(navigator.userAgent.split("Falkon/")[1]):navigator.userAgent.indexOf("Chrome/")>-1?parseInt(navigator.userAgent.split("Chrome/")[1]):navigator.userAgent.indexOf("Firefox/")>-1?parseInt(navigator.userAgent.split("Firefox/")[1]):navigator.userAgent.indexOf("Safari/")>-1?parseInt(navigator.userAgent.split("Safari/")[1]):navigator.userAgent.indexOf("MSIE/")>-1||navigator.userAgent.indexOf("rv:")>-1?parseInt(navigator.userAgent.split("MSIE/")[1]):1/0})}function Ba(){return Be(this,null,function*(){return navigator.userAgent.indexOf("Win")>-1?"Windows":navigator.userAgent.indexOf("Mac")>-1?"MacOS":navigator.userAgent.indexOf("Linux")>-1?"Linux":navigator.userAgent.indexOf("UNIX")>-1?"UNIX":"Unknown"})}function Fa(e){return Be(this,null,function*(){return e?(console.log("WebGl2 is enabled"),!0):(console.log(typeof WebGL2RenderingContext!="undefined"?"WebGL2 may be disabled. Please try updating video card drivers":"WebGL2 is not supported"),!1)})}function La(e){return Be(this,null,function*(){let t;if(e&&(t=e.getExtension("WEBGL_debug_renderer_info"),t)){const n=e.getParameter(t.UNMASKED_VENDOR_WEBGL);return n.indexOf("(")>-1&&n.indexOf(")")>-1?n.substring(n.indexOf("(")+1,n.indexOf(")")):n}return null})}function Ua(e){return Be(this,null,function*(){if(e){const t=e.getExtension("WEBGL_debug_renderer_info");return t?e.getParameter(t.UNMASKED_VENDOR_WEBGL):null}else return null})}function Wa(e){return Be(this,null,function*(){if(e){if(ys()==="Firefox")return e.getParameter(e.RENDERER);const t=e.getExtension("WEBGL_debug_renderer_info");return t?e.getParameter(t.UNMASKED_RENDERER_WEBGL):null}else return null})}function qa(e){return Be(this,null,function*(){let t;if(e){if(ys()==="Firefox")return e.getParameter(e.RENDERER);if(t=e.getExtension("WEBGL_debug_renderer_info"),t){let n=e.getParameter(t.UNMASKED_RENDERER_WEBGL);return n.indexOf("(")>-1&&n.indexOf(")")>-1&&n.indexOf("(R)")===-1&&(n=n.substring(n.indexOf("(")+1,n.indexOf(")")),n.split(",").length===3)?n.split(",")[1].trim():n}}return null})}function Ra(){return Be(this,null,function*(){return navigator.hardwareConcurrency})}function Ia(){return Be(this,null,function*(){return/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)})}function Ga(e,t=null){return Be(this,null,function*(){const n=new Date;if(e.isModelFullVol?e.Brainchop_Ver="FullVolume":e.Brainchop_Ver="SubVolumes",e.Total_t=(Date.now()-e.startTime)/1e3,delete e.startTime,e.Date=parseInt(n.getMonth()+1)+"/"+n.getDate()+"/"+n.getFullYear(),e.Browser=yield ys(),e.Browser_Ver=yield Ca(),e.OS=yield Ba(),e.WebGL2=yield Fa(t),e.GPU_Vendor=yield La(t),e.GPU_Card=yield qa(t),e.GPU_Vendor_Full=yield Ua(t),e.GPU_Card_Full=yield Wa(t),e.CPU_Cores=yield Ra(),e.Which_Brainchop="latest",(yield Ia())&&(e.Heap_Size_MB=window.performance.memory.totalJSHeapSize/(1024*1024).toFixed(2),e.Used_Heap_MB=window.performance.memory.usedJSHeapSize/(1024*1024).toFixed(2),e.Heap_Limit_MB=window.performance.memory.jsHeapSizeLimit/(1024*1024).toFixed(2)),t){console.log("MAX_TEXTURE_SIZE :",t.getParameter(t.MAX_TEXTURE_SIZE)),console.log("MAX_RENDERBUFFER_SIZE :",t.getParameter(t.MAX_RENDERBUFFER_SIZE));const s=t.getExtension("WEBGL_debug_renderer_info");console.log("VENDOR WEBGL:",t.getParameter(s.UNMASKED_VENDOR_WEBGL)),e.Texture_Size=t.getParameter(t.MAX_TEXTURE_SIZE)}else e.Texture_Size=null;return e})}const ss={bankssts:1,caudalanteriorcingulate:2,caudalmiddlefrontal:3,cuneus:5,entorhinal:6,fusiform:7,inferiorparietal:8,inferiortemporal:9,isthmuscingulate:10,lateraloccipital:11,lateralorbitofrontal:12,lingual:13,medialorbitofrontal:14,middletemporal:15,parahippocampal:16,paracentral:17,parsopercularis:18,parsorbitalis:19,parstriangularis:20,pericalcarine:21,postcentral:22,posteriorcingulate:23,precentral:24,precuneus:25,rostralanteriorcingulate:26,rostralmiddlefrontal:27,superiorfrontal:28,superiorparietal:29,superiortemporal:30,supramarginal:31,frontalpole:32,temporalpole:33,transversetemporal:34,insula:35},Ea=new Set(["BG","Unknown","background","Background"]),Vs={"Left-Cerebral-White-Matter":2,"Right-Cerebral-White-Matter":41,"Left-Cerebral-Cortex":3,"Right-Cerebral-Cortex":42,"Left-Lateral-Ventricle":4,"Right-Lateral-Ventricle":43,"Left-Inf-Lat-Vent":5,"Right-Inf-Lat-Vent":44,"Left-Cerebellum-White-Matter":7,"Right-Cerebellum-White-Matter":46,"Left-Cerebellum-Cortex":8,"Right-Cerebellum-Cortex":47,"Left-Thalamus":10,"Left-Thalamus-Proper":10,"Left-Thalamus-Proper*":10,"Right-Thalamus":49,"Right-Thalamus-Proper":49,"Right-Thalamus-Proper*":49,"Left-Caudate":11,"Right-Caudate":50,"Left-Putamen":12,"Right-Putamen":51,"Left-Pallidum":13,"Right-Pallidum":52,"Left-Hippocampus":17,"Right-Hippocampus":53,"Left-Amygdala":18,"Right-Amygdala":54,"Left-Accumbens":26,"Left-Accumbens-area":26,"Right-Accumbens":58,"Right-Accumbens-area":58,"Left-VentralDC":28,"Right-VentralDC":60,"3rd-Ventricle":14,"4th-Ventricle":15,"Brain-Stem":16,CSF:24,CC_Posterior:251,CC_Mid_Posterior:252,CC_Central:253,CC_Mid_Anterior:254,CC_Anterior:255,"Cerebral-White-Matter":2,"White Matter":2,"Cerebral-Cortex":3,"Grey Matter":3,"Gray Matter":3,"Lateral-Ventricle":4,Ventricle:4,"Inferior-Lateral-Ventricle":5,"Cerebellum-White-Matter":7,"Cerebellum-Cortex":8,Cerebellum:8,Thalamus:10,"Thalamus-Proper":10,"Thalamus-Proper*":10,Caudate:11,Putamen:12,Pallidum:13,Hippocampus:17,Amygdala:18,"Accumbens-area":26,Accumbens:26,VentralDC:28,"Corpus callosum":253,Corpus_Callosum:253};function Ta(e){if(typeof e!="string")return null;const t=e.trim();if(Ea.has(t))return 0;if(Object.hasOwn(Vs,t))return Vs[t];if(t.startsWith("ctx-lh-")){const n=ss[t.slice(7)];return n?1e3+n:null}if(t.startsWith("ctx-rh-")){const n=ss[t.slice(7)];return n?2e3+n:null}if(t.startsWith("ctx-")){const n=ss[t.slice(4)];return n?1e3+n:null}return null}function Tn(e){if(!Array.isArray(e)||e.length<3)return null;const t=new Int16Array(e.length);for(let n=0;n<e.length;n++){const s=Ta(e[n]);if(s===null||(n===0?s!==0:s<=0))return null;t[n]=s}return t}function Oa(e,t){const n=e.length,s=new Int16Array(n),r=t.length;let i=0;for(let o=0;o<n;o++){const a=e[o],f=a>=0&&a<r?t[a]:a;s[o]=f,f>i&&(i=f)}return{img:s,maxLabel:i}}const Hs=.5,js=8,Xs=(e,t,n)=>Math.min(n,Math.max(t,e)),Ys=e=>Math.hypot(e[0].clientX-e[1].clientX,e[0].clientY-e[1].clientY);function Ur(e){e&&(e.pan2Dxyzmm=Float32Array.from([0,0,0,1]),e.scaleMultiplier=1),Na()}function Na(){const e=document.querySelector('meta[name="viewport"]');if(!e)return;const t=e.getAttribute("content")||"width=device-width, initial-scale=1.0";/maximum-scale/.test(t)||(e.setAttribute("content",`${t}, maximum-scale=1, user-scalable=no`),requestAnimationFrame(()=>requestAnimationFrame(()=>e.setAttribute("content",t))))}function Da(){const e=t=>t.preventDefault();for(const t of["gesturestart","gesturechange","gestureend"])document.addEventListener(t,e,{passive:!1});document.addEventListener("touchmove",t=>{t.touches.length>1&&t.preventDefault()},{passive:!1})}function Va(e){const t=new Set,n=r=>{t.size>1&&r.stopPropagation()},s=r=>t.delete(r.pointerId);window.addEventListener("pointerdown",r=>{r.pointerType==="touch"&&r.target===e&&t.add(r.pointerId),n(r)},!0),window.addEventListener("pointermove",n,!0),window.addEventListener("pointerup",s,!0),window.addEventListener("pointercancel",s,!0)}function Ha(e,t,n,s,r){const i=e[3]/t;return[0,1,2].map(o=>{const a=n[o]-(s[o]+r[o])/2;return i*(a+e[o])-a})}function ja(e){const t=e.canvas;if(!t)return;Va(t);let n=null;const s=o=>{var m,g,c;if(o.touches.length!==2){n=null;return}const a=t.getBoundingClientRect(),f=window.devicePixelRatio||1,l=((o.touches[0].clientX+o.touches[1].clientX)/2-a.left)*f,u=((o.touches[0].clientY+o.touches[1].clientY)/2-a.top)*f;n={dist:Math.max(1,Ys(o.touches)),pan:Array.from(e.pan2Dxyzmm),scale3d:e.scaleMultiplier||1,inRender:(c=(g=(m=e.view)==null?void 0:m.hitTest(l,u))==null?void 0:g.isRender)!=null?c:!1}},r=()=>{n=null},i=o=>{if(!n||o.touches.length!==2)return;const a=Ys(o.touches)/n.dist;if(!isFinite(a)||a<=0)return;if(n.inRender){e.scaleMultiplier=Xs(n.scale3d*a,Hs,js);return}const f=Xs(n.pan[3]*a,Hs,js),l=Ha(n.pan,f,e.getCrosshairPos(),e.model.extentsMin,e.model.extentsMax);e.pan2Dxyzmm=Float32Array.from([l[0],l[1],l[2],f]),e.isYoked3DTo2DZoom?e.scaleMultiplier=f:e.drawScene()};t.addEventListener("touchstart",s,{passive:!0}),t.addEventListener("touchmove",i,{passive:!0}),t.addEventListener("touchend",r,{passive:!0}),t.addEventListener("touchcancel",r,{passive:!0})}function Xa(e){return Da(),ja(e),{resetView:()=>Ur(e)}}const Ya=720,Ka=860;function Za(){var r,i,o,a,f,l;const e=window.visualViewport,t=Math.round((i=(r=e==null?void 0:e.width)!=null?r:window.innerWidth)!=null?i:0),n=Math.round((a=(o=e==null?void 0:e.height)!=null?o:window.innerHeight)!=null?a:0);return t>0&&t<=Ya?!0:!!((l=(f=window.matchMedia)==null?void 0:f.call(window,"(pointer: coarse)"))==null?void 0:l.matches)&&Math.min(t,n)<=Ka}const An=[{id:"multi",label:"All",title:"All planes",type:Ln.MULTIPLANAR},{id:"axial",label:"A",title:"Axial only",type:Ln.AXIAL},{id:"coronal",label:"C",title:"Coronal only",type:Ln.CORONAL},{id:"sagittal",label:"S",title:"Sagittal only",type:Ln.SAGITTAL},{id:"render",label:"3D",title:"3D render only",type:Ln.RENDER}];function Wr(e,t,n){const s=An.find(r=>r.id===n)||An[0];e.sliceType=s.type,t.querySelectorAll("button").forEach(r=>r.classList.toggle("active",r.dataset.pane===s.id))}function Qa(e,t){const n=document.createElement("div");n.id="paneSwitcher",n.className="pane-switcher",n.setAttribute("role","group"),n.setAttribute("aria-label","Visible planes");for(const r of An){const i=document.createElement("button");i.type="button",i.dataset.pane=r.id,i.textContent=r.label,i.title=r.title,i.setAttribute("aria-label",r.title),i.addEventListener("click",()=>Wr(e,n,r.id)),n.appendChild(i)}const s=document.createElement("button");return s.type="button",s.className="pane-reset",s.textContent="⟲",s.title="Reset zoom and pan",s.setAttribute("aria-label","Reset zoom and pan"),s.addEventListener("click",()=>Ur(e)),n.appendChild(s),t.appendChild(n),n}function Ja(e){var r;const t=document.getElementById("canvas-container")||document.body,n=Qa(e,t);n.querySelector('button[data-pane="multi"]').classList.add("active"),window.addEventListener("keydown",i=>{if(i.key!=="v"&&i.key!=="V"||i.altKey||i.ctrlKey||i.metaKey||i.repeat)return;const o=i.target;if(o instanceof HTMLElement&&(o.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(o.tagName)))return;i.preventDefault(),i.stopImmediatePropagation();const a=An.findIndex(f=>f.type===e.sliceType);Wr(e,n,An[(a+1)%An.length].id)},!0);const s=()=>document.body.classList.toggle("nv-narrow",Za());window.addEventListener("resize",s),window.addEventListener("orientationchange",s),(r=window.visualViewport)==null||r.addEventListener("resize",s),s()}function Ks(e,t=e.img.slice(),n=e.name){const s=Object.assign(Object.create(Object.getPrototypeOf(e.hdr)),e.hdr),r=Dr(s,t,n);return r.id=crypto.randomUUID(),r}const Yt=e=>e&&typeof e.slice=="function"?e.slice():e;function rs(e,t,n=e.name,s={},r={}){var f;const i=Object.assign(Object.create(Object.getPrototypeOf(e.hdr)),e.hdr,bt({dims:[...e.hdr.dims],pixDims:[...e.hdr.pixDims],affine:e.hdr.affine.map(l=>[...l])},s)),o=e.dims?e.dims.slice(0,4):i.dims.slice(0,4),a=(f=e.nVox3D)!=null?f:o[1]*o[2]*o[3];return bt({img:t,hdr:i,originalAffine:i.affine.map(l=>[...l]),dims:o,nVox3D:a,extentsMin:Yt(e.extentsMin),extentsMax:Yt(e.extentsMax),mm000:Yt(e.mm000),mm100:Yt(e.mm100),mm010:Yt(e.mm010),mm001:Yt(e.mm001),dimsRAS:e.dimsRAS?[...e.dimsRAS]:void 0,pixDimsRAS:e.pixDimsRAS?[...e.pixDimsRAS]:void 0,permRAS:e.permRAS?[...e.permRAS]:void 0,toRAS:Yt(e.toRAS),toRASvox:Yt(e.toRASvox),matRAS:Yt(e.matRAS),obliqueRAS:Yt(e.obliqueRAS),oblique_angle:e.oblique_angle,frac2mm:Yt(e.frac2mm),frac2mmOrtho:Yt(e.frac2mmOrtho),img2RASstep:e.img2RASstep?[...e.img2RASstep]:void 0,img2RASstart:e.img2RASstart?[...e.img2RASstart]:void 0,volScale:e.volScale?[...e.volScale]:void 0,name:n,id:crypto.randomUUID(),calMin:0,calMax:255,robustMin:0,robustMax:255,globalMin:0,globalMax:255,frame4D:0,nFrame4D:1,nTotalFrame4D:1,isLegendVisible:!1},r)}function ei(e){let t=256,n=-1,s=0;for(let l=0;l<256;l++){const u=e[l];u>0&&(l<t&&(t=l),n=l,l!==0&&(s+=u))}if(t>n)return{calMin:0,calMax:255,robustMin:0,robustMax:255,globalMin:0,globalMax:255};if(t===n)return{calMin:t,calMax:n,robustMin:t,robustMax:n,globalMin:t,globalMax:n};const r=Math.round(s*.02),i=Math.round(s*.02);let o=0,a=t;for(let l=t;l<=n;l++){if(l===0&&e[0]>r){a=0;break}if(o+=e[l],o>=r){a=l;break}}o=0;let f=n;for(let l=n;l>=t;l--)if(o+=e[l],o>=i){f=Math.min(n,l+1);break}return a>=f&&(a=t,f=n),{calMin:a,calMax:f,robustMin:a,robustMax:f,globalMin:t,globalMax:n}}function os(e,[t,n,s]){const r=e.dimsRAS,i=e.img2RASstart,o=e.img2RASstep;return!r||!i||!o||t<0||t>=r[1]||n<0||n>=r[2]||s<0||s>=r[3]?null:i[0]+t*o[0]+i[1]+n*o[1]+i[2]+s*o[2]}function $n(e,t){return Be(this,null,function*(){const n=e.img,s=yield Nr(t,e.hdr,n.buffer.byteLength===n.byteLength?n.buffer:n.buffer.slice(n.byteOffset,n.byteOffset+n.byteLength)),r=URL.createObjectURL(new Blob([s]));Object.assign(document.createElement("a"),{href:r,download:t}).click(),URL.revokeObjectURL(r)})}let tn=null,mn=!1,as=0,On=!1,Vn=[];const qr=/Safari/.test(navigator.userAgent)&&!/Chrome|Chromium|CriOS|FxiOS|Edg|Android/.test(navigator.userAgent),ti=qr&&new URLSearchParams(window.location.search).get("inference")!=="webgpu";function Zs(e=null){return Be(this,null,function*(){const t={secureContext:window.isSecureContext,navigatorGpuExists:"gpu"in navigator,adapterObtained:!1,deviceObtained:!1,f16Support:!1,error:null};if(window.isSecureContext||(console.warn("WebGPU requires a secure context (HTTPS or localhost)."),console.warn("Current origin:",window.location.origin)),"gpu"in navigator)try{console.log("Requesting WebGPU adapter...");const n=yield navigator.gpu.requestAdapter();if(n){t.adapterObtained=!0,console.log("WebGPU adapter obtained:",n),n.info&&console.log("Adapter info:",n.info),console.log("Adapter limits:",{maxBufferSize:n.limits.maxBufferSize,maxStorageBufferBindingSize:n.limits.maxStorageBufferBindingSize,maxComputeWorkgroupsPerDimension:n.limits.maxComputeWorkgroupsPerDimension});const s={maxBufferSize:n.limits.maxBufferSize,maxStorageBufferBindingSize:n.limits.maxStorageBufferBindingSize,maxStorageBuffersPerShaderStage:n.limits.maxStorageBuffersPerShaderStage,maxUniformBufferBindingSize:n.limits.maxUniformBufferBindingSize,maxComputeInvocationsPerWorkgroup:n.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:n.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:n.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:n.limits.maxComputeWorkgroupSizeZ,maxComputeWorkgroupStorageSize:n.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:n.limits.maxComputeWorkgroupsPerDimension},r=n.features.has("shader-f16"),i=n.features.has("subgroups");t.f16Support=r,t.subgroupsSupport=i;const o=[];r&&o.push("shader-f16"),i&&o.push("subgroups");const a=yield n.requestDevice({requiredLimits:s,requiredFeatures:o});if(a.__adapterInfo=n.info||null,e&&typeof e.getParameter=="function")try{if(/Firefox/i.test(navigator.userAgent||""))a.__glRenderer=String(e.getParameter(e.RENDERER)||"");else{const l=e.getExtension("WEBGL_debug_renderer_info");a.__glRenderer=String((l?e.getParameter(l.UNMASKED_RENDERER_WEBGL):e.getParameter(e.RENDERER))||"")}}catch(l){}a.__isLost=!1,a.lost&&typeof a.lost.then=="function"&&a.lost.then(l=>{a.__isLost=!0,(l==null?void 0:l.reason)!=="destroyed"&&(console.warn(`[WebGPU] Device was lost (${(l==null?void 0:l.reason)||"unknown"}): ${(l==null?void 0:l.message)||""}`),tn===a&&(tn=null,mn=!1,t.deviceObtained=!1,t.error=(l==null?void 0:l.message)||"WebGPU device lost",Qs(!1,t)))}),tn=a,t.deviceObtained=!0,mn=!0,console.log(`✓ WebGPU initialized successfully. F16: ${r?"enabled":"not available"}, Subgroups: ${i?"enabled":"not available"}`)}else console.warn("WebGPU adapter request returned null."),console.warn("This typically means:"),console.warn("  - Safari: WebGPU feature flags not enabled in Settings > Feature Flags"),console.warn("  - Unsupported GPU hardware"),console.warn("  - GPU drivers need updating"),t.error="Adapter returned null"}catch(n){t.error=n.message,console.error("WebGPU initialization error:",n),navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")&&(console.warn("Safari detected. To enable WebGPU:"),console.warn("  1. Open Safari Settings/Preferences"),console.warn('  2. Go to Advanced tab, enable "Show features for web developers"'),console.warn("  3. Go to Feature Flags tab"),console.warn("  4. Enable: WebGPU, GPU Process: DOM Rendering, GPU Process: Canvas Rendering"),console.warn("  5. Restart Safari"))}else console.warn("navigator.gpu not found. WebGPU API is not available in this browser."),t.error="navigator.gpu not found",navigator.userAgent.includes("Firefox")&&(console.warn("Firefox detected. To enable WebGPU in about:config:"),console.warn("  1. Set dom.webgpu.enabled = true"),console.warn("  2. Set gfx.webgpu.ignore-blocklist = true"),console.warn("  3. Restart Firefox"));return Qs(mn,t),mn||console.log("Falling back to WebGL backend."),window.webgpuDiagnostics=t,t})}function Qs(e,t){const n=document.getElementById("backendStatus");if(!n){console.log("Backend status element not found in DOM");return}if(e){const s=t.f16Support?" (F16)":"";n.textContent=`WebGPU${s}`,n.style.color="#4CAF50",n.title="WebGPU backend active - fastest performance"}else{n.textContent="WebGL",n.style.color="#FF9800";let s="WebGL backend (fallback)";t.error&&(s+=`
Reason: ${t.error}`),t.secureContext||(s+=`
⚠ Not a secure context (HTTPS required)`),qr&&(s+=`

To enable WebGPU in Safari:
1. Settings > Feature Flags
2. Enable WebGPU flags
3. Restart Safari`),navigator.userAgent.includes("Firefox")&&(s+=`

To enable WebGPU in Firefox:
1. about:config > dom.webgpu.enabled = true
2. gfx.webgpu.ignore-blocklist = true
3. Restart Firefox`),n.title=s}}function ni(){return Be(this,null,function*(){var ht;let e="",t="",n=null,s=null,r=null,i=null;function o(){const S=modelSelect.value;return S==="-1"||modelSelect.selectedIndex<0?null:hn[S]||null}function a(){const S=o();modelSelect.title=(S==null?void 0:S.description)||"Choose a segmentation model to run"}const f="altKey";let l=null,u=null,m=null,g=null,c=null,p=null,d=null,b="input.nii.gz",P=null;const _=document.getElementById("dragSegmented");_&&_.querySelectorAll("button").forEach(S=>{S.onclick=()=>{Q.secondaryDragMode=parseInt(S.dataset.drag,10),_.querySelectorAll("button").forEach(U=>U.classList.toggle("active",U===S))}});const w=document.getElementById("drawBtn"),v=document.getElementById("drawPopover"),y=document.getElementById("penRow"),h=document.getElementById("drawApplyRow");function k(S){v&&(v.hidden=!S,w&&w.setAttribute("aria-expanded",String(S)))}function F(S){Q.drawIsEnabled=S>=0,S>=0&&(!Q.drawingVolume&&Q.volumes.length&&Q.createEmptyDrawing(),Q.drawPenValue=S&7,Q.drawPenFilled=S>7),y&&y.querySelectorAll(".chip").forEach(U=>U.classList.toggle("active",parseInt(U.dataset.pen,10)===S))}function $(S){return Be(this,null,function*(){var he;if(Q.volumes.length<2){window.alert("No segmentation open (run a model first).");return}if(S===0){Q.drawUndo();return}const U=(he=Q.drawingVolume)==null?void 0:he.img;if(!U){window.alert("Nothing drawn yet — pick a pen and draw on the image first.");return}const O=Q.volumes[1].img;if(O instanceof Float32Array){window.alert("Drawing edits label segmentations, not probability maps.");return}const de=Q.volumes[1],oe=de.dimsRAS;if(!oe||U.length!==oe[1]*oe[2]*oe[3]){window.alert("The drawing does not match the current image — redraw it.");return}const Re=S===1?1:0;let be=0;for(let ve=0;ve<oe[3];ve++)for(let xe=0;xe<oe[2];xe++)for(let je=0;je<oe[1];je++,be++)U[be]>0&&(O[os(de,[je,xe,ve])]=Re);Q.closeDrawing(),yield Q.updateGLVolume(),Q.drawIsEnabled=!1,F(-1)})}w&&(w.onclick=S=>{S.stopPropagation(),k(v.hidden)}),y&&y.querySelectorAll(".chip").forEach(S=>{S.onclick=()=>F(parseInt(S.dataset.pen,10))}),h&&h.querySelectorAll(".chip").forEach(S=>{S.onclick=()=>$(parseInt(S.dataset.apply,10))}),document.addEventListener("click",S=>{!v||v.hidden||S.target.closest(".popover-wrap")||k(!1)}),document.addEventListener("keydown",S=>{S.key==="Escape"&&k(!1)});const M=document.getElementById("appDialog");if(M&&!("closedBy"in HTMLDialogElement.prototype)){let S=!1;const U=O=>{const de=M.getBoundingClientRect();return O.clientX<de.left||O.clientX>de.right||O.clientY<de.top||O.clientY>de.bottom};M.addEventListener("pointerdown",O=>{S=O.target===M&&U(O)}),M.addEventListener("pointerup",O=>{S&&O.target===M&&U(O)&&M.close(),S=!1})}aboutBtn.onclick=function(){Kt("About BrainChop",`
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
    `)};const x=document.getElementById("shadingBtn");x.onclick=()=>{const S=x.classList.toggle("active");x.setAttribute("aria-pressed",String(S)),Q.volumeIllumination=S?.5:0},diagnosticsBtn.onclick=function(){let S=e;if(S.length<1&&window.webgpuDiagnostics){const O=window.webgpuDiagnostics;S=`:: Startup Diagnostics ::
`,S+=`Secure Context: ${O.secureContext}
`,S+=`WebGPU Enabled: ${mn}
`,S+=`F16 Support: ${O.f16Support}
`,O.error&&(S+=`Error: ${O.error}
`),S+=`User Agent: ${navigator.userAgent}
`}if(S.length<1){Kt("Diagnostics","No diagnostic string generated: run a model to create diagnostics");return}let U=S;t=t.slice(0,-2),t!==""&&U.includes("Status: OK")&&(U=U.replace("Status: OK",`Status: ${t}`)),t="",navigator.clipboard.writeText(U).then(()=>{Kt("Diagnostics",`<p>Diagnostics copied to clipboard</p><pre style="white-space: pre-wrap; font-family: monospace; font-size: 0.9em; overflow-x: auto;">${U}</pre>`)}).catch(O=>{Kt("Diagnostics",`<p>Failed to copy to clipboard.</p><pre style="white-space: pre-wrap; font-family: monospace; font-size: 0.9em; overflow-x: auto;">${U}</pre>`)})},opacitySlider0.oninput=()=>{Q.volumes[0]&&(Q.volumes[0].opacity=Number(opacitySlider0.value)),Q.updateGLVolume()};function C(){const S=Number(opacitySlider1.value);Q.volumes.slice(1).forEach((U,O)=>{U.opacity=(m==null?void 0:m[O])===U&&u!==null&&O!==u?0:S}),Q.updateGLVolume()}opacitySlider1.oninput=C;function z(S=null){const U=S==null?void 0:S.probabilityUnderlayOpacity;U!==void 0?(d===null&&(d=opacitySlider0.value),opacitySlider0.value=U,Q.volumes[0]&&(Q.volumes[0].opacity=Number(U))):d!==null&&(opacitySlider0.value=d,d=null,Q.volumes[0]&&(Q.volumes[0].opacity=Number(opacitySlider0.value)))}function R(){return Be(this,null,function*(){var Ge,ot,Ne;const S=Q.volumes[0],U=(Ge=S.hdr)==null?void 0:Ge.pixDims,O=!U||Math.abs(Math.abs(U[1])-1)<.001&&Math.abs(Math.abs(U[2])-1)<.001&&Math.abs(Math.abs(U[3])-1)<.001,de=(ot=S.hdr)==null?void 0:ot.scl_slope,oe=(Ne=S.hdr)==null?void 0:Ne.scl_inter,Re=(de===void 0||de===0||Math.abs(de-1)<1e-6)&&(oe===void 0||Math.abs(oe)<1e-6);let be=S.dims[1]===256&&S.dims[2]===256&&S.dims[3]===256&&S.img instanceof Uint8Array&&S.img.length===256*256*256&&O&&Re;if((S.permRAS[0]!==-1||S.permRAS[1]!==3||S.permRAS[2]!==-2)&&(be=!1),be)return;At("Conforming input volume to 256³...",.05),yield Fr(),yield T();const he=yield Q.volumeTransform.conform(S,{toRAS:!1}),[ve,xe]=[p,b],je=modelSelect.value;yield Q.removeVolume(0),yield Q.addVolume(he),[p,b]=[ve,xe],modelSelect.value=je,a()})}function I(){for(u=null,m=null;Q.model.volumes.length>1;)Q.model.removeVolume(Q.model.volumes.length-1)}function T(){return Be(this,null,function*(){I(),yield Q.updateGLVolume()})}function B(){return Q.volumes.length>=2&&Q.volumes[1].colormapLabel?Q.volumes[1]:null}function G(){l=null,g=null,c=null,N&&(N.style.display="none")}function ae(){const S=B();if(S){if(g===null&&(g=S.img),l===null)S.img=g,c=null;else{const U=g,O=new U.constructor(U.length);for(let de=0;de<U.length;de++)O[de]=U[de]===l?l:0;S.img=O,c=ce(l)}Q.updateGLVolume(),W()}}function ce(S){const U=Q.volumes[0],O=g||Q.volumes[1]&&Q.volumes[1].img;if(!U||!O)return null;const de=U.hdr.pixDims||[],oe=de[1]&&de[2]&&de[3]?de[1]*de[2]*de[3]:1,Re=ne(U.img,O,oe),be=Re.reduce((Ge,ot)=>Ge+ot.volume_mm3,0),he=Re.find(Ge=>Ge.label===S);if(!he)return null;const ve=be>0?he.volume_mm3/be*100:0,xe=[he.name,`${Ie(he.volume_mm3)} cm3   (${ve.toFixed(1)}% of brain)`,`${he.voxels.toLocaleString()} voxels`,`intensity  ${he.mean.toFixed(0)} +/- ${he.stdev.toFixed(0)}`];let je=[1,1,1,1];if(s&&s.R&&s.R[S]!=null){const Ge=ot=>Math.min(255,ot*.55+130)/255;je=[Ge(s.R[S]),Ge(s.G[S]),Ge(s.B[S]),1]}return{lines:xe,color:je}}let N=null;function W(){var he,ve;N||(N=document.createElement("div"),N.style.cssText="position:absolute;pointer-events:none;font:13px/1.55 system-ui,sans-serif;text-shadow:0 1px 2px #000;white-space:pre;color:#ebebeb",Q.canvas.parentElement.appendChild(N));const S=(ve=(he=Q.view)==null?void 0:he.screenSlices)==null?void 0:ve.find(xe=>xe.axCorSag===4);if(l===null||!c||!B()||!S){N.style.display="none";return}const U=window.devicePixelRatio||1,[O,de]=S.leftTopWidthHeight;Object.assign(N.style,{left:`${O/U+8}px`,top:`${de/U+8}px`});const{lines:oe,color:Re}=c,be=Re.slice(0,3).map(xe=>Math.round(xe*255)).join(",");N.innerHTML=`<span style="color:rgb(${be})">${Zt(oe[0])}</span>
`+oe.slice(1).map(Zt).join(`
`),N.style.display="block"}function X(){const S=B();if(!S||!P)return null;const U=os(S,P);if(U===null)return null;const O=(g||S.img)[U];return O===void 0?null:Math.round(O*S.hdr.scl_slope+S.hdr.scl_inter)}function J(S){B()&&(l=S===0||S===l?null:S,ae())}function D(){if(!m||!P||m.some((O,de)=>Q.volumes[de+1]!==O))return;let S=null,U=0;for(let O=0;O<m.length;O++){const de=m[O],oe=os(de,P);if(oe===null)return;const Re=de.img[oe];Number.isFinite(Re)&&Re>U&&(U=Re,S=O)}return S}function ue(S){if(S[f]){if(B()){const U=X();if(U===null||Number.isNaN(U))return;J(U)}else{const U=D();if(U===void 0)return;const O=U===u?null:U;O!==u&&(u=O,C())}S.preventDefault()}}function ie(){return Be(this,null,function*(){if(!On){On=!0,Vn=[];try{yield Ae()}finally{On=!1,modelSelect.value="-1",a()}}})}function Ae(){return Be(this,null,function*(){var ot,Ne;const S=modelSelect.value;if(S==="-1"||modelSelect.selectedIndex<0)return;const U=document.getElementById("memstatusItem");U&&(U.hidden=!0),G(),yield R();const O=hn[S],de=(new URLSearchParams(window.location.search).get("precision")||"").toLowerCase(),Re=bt(bt({},Ds(O,de!=="fp16"&&de!=="fp32")),de==="fp32"?{forceFP32:!0}:{}),be=bt({},za),he=new URL("./",window.location.href).href;be.rootURL=he.endsWith("/")?he.slice(0,-1):he;const ve=Q.volumes[0].img;let xe=null;const je=ti&&!Re.quantize8Bit,Ge=je;if(je&&mn&&Re.webgpu_safetensor&&console.info("Safari WebGPU legacy gate active for non-V4 model; routing to native WebGL2."),!Ge&&(!tn||tn.__isLost)&&"gpu"in navigator&&as<2&&(ot=window.webgpuDiagnostics)!=null&&ot.adapterObtained&&(as++,console.info(`[WebGPU] Re-initializing device after prior loss (attempt ${as})...`),yield Zs((Ne=Q.view)==null?void 0:Ne.gl)),mn&&tn&&!tn.__isLost&&!Ge&&Re.webgpu_safetensor){console.log("Attempting WebGPU backend...");const se=Ft(bt({},Re),{enableTTA:!1});try{yield Aa(tn,be,se,Q.volumes[0].hdr,ve,pt,At);return}catch(H){xe=H,console.error("WebGPU inference failed, falling back to native WebGL2.",H)}}if(O.webgpu_safetensor){const se=de==="int8"||de==="rgba8",H=Ft(bt({},Ds(O,!1)),{quantize8Bit:se,autoQuantize8BitFallback:!se&&!!O.turbo});try{const{runInferenceWebGl2:le,nativeWebgl2Available:Ye}=yield mt(()=>Be(null,null,function*(){const{runInferenceWebGl2:it,nativeWebgl2Available:et}=yield import("./inference-webgl2-h0UxVHqI.js");return{runInferenceWebGl2:it,nativeWebgl2Available:et}}),[],import.meta.url);if(Ye()){console.log("Attempting native WebGL2 runner..."),yield le(be,H,Q.volumes[0].hdr,ve,pt,At);return}xe=new Error("Native WebGL2 unavailable (no OffscreenCanvas WebGL2 context)."),console.warn(xe.message)}catch(le){xe=le,console.error("Native WebGL2 failed.",le)}}si(xe||new Error(`No available backend could run ${Re.modelName}.`))})}modelSelect.onchange=()=>(a(),ie()),a();function fe(S){return Be(this,null,function*(){const U=B(),O=l!==null&&U&&g;O&&(U.img=g);try{return yield S()}finally{O&&ae()}})}function $e(){const S=Q.volumes[1],U=(r==null?void 0:r.type)==="Brain_Extraction"?i:l!==null&&g?g:S.img;if(!U||U.length!==S.img.length)throw new Error("The segmentation mask is unavailable. Run the model again.");const O=new Uint8Array(U.length);for(let oe=0;oe<U.length;oe++)O[oe]=U[oe]!==0?1:0;const de=Ks(S,O,"brain_mask");return Object.assign(de.hdr,{datatypeCode:2,numBitsPerVoxel:8,scl_slope:1,scl_inter:0,cal_min:0,cal_max:1,intent_code:1002}),de}function j(){return Be(this,arguments,function*({includeMask:S=!1,useFreeSurfer:U=!1}={}){if(Q.volumes.length<2){window.alert("No segmentation to save (run a model first).");return}const O=U?Tn(n):null,de=Q.volumes.slice(1);yield fe(()=>Be(null,null,function*(){for(const oe of de){const Re=!!oe.colormapLabel||oe.hdr.intent_code===1002;if(O&&Re){const{img:be,maxLabel:he}=Oa(oe.img,O),ve=rs(oe,be,oe.name,{datatypeCode:4,numBitsPerVoxel:16,scl_slope:1,scl_inter:0,cal_min:0,cal_max:he,intent_code:1002});yield $n(ve,te(oe,de.length,"_fs"))}else yield $n(oe,te(oe,de.length,""))}S&&(yield $n($e(),"binary_mask.nii.gz"))}))})}function te(S,U,O){return U>1?`segmentation_${S.name}${O}.nii.gz`:`segmentation${O}.nii.gz`}function A(){if(Q.volumes.length<1){window.alert("No image loaded.");return}$n(Q.volumes[0],"conformed_input.nii.gz")}function K(){return Be(this,null,function*(){if(Q.volumes.length<1){window.alert("No image loaded.");return}yield fe(()=>Be(null,null,function*(){yield Q.saveDocument("brainchop.nvd")}))})}function V(){return Be(this,arguments,function*({includeMask:S=!1,useFreeSurfer:U=!1}={}){if(Q.volumes.length<2){window.alert("No segmentation to save (run a model first).");return}if(!p||!p.hdr||!p.hdr.affine){window.alert("Original input grid is unavailable — reload the image and try again.");return}const O=U?Tn(n):null;At("Reslicing to native space…",0),yield new Promise(de=>setTimeout(de,30));try{const de=Q.volumes.slice(1);for(const oe of de){const Re=!!oe.colormapLabel||oe.hdr.intent_code===1002,be=O&&Re?O:null,he=yield fe(()=>re(oe,be));yield $n(he,te(oe,de.length,be?"_fs_native":"_native"))}if(S){const oe=re($e());yield $n(oe,"binary_mask_native.nii.gz")}At("Saved native-space segmentation.",1)}catch(de){console.error("Native-space reslice failed:",de),window.alert("Native-space export failed: "+(de&&de.message?de.message:de))}})}function re(S,U=null){const O=S.img,de=p.hdr.affine,oe=p.hdr.dims[1],Re=p.hdr.dims[2],be=p.hdr.dims[3],he=S.hdr.dims[1],ve=S.hdr.dims[2],xe=S.hdr.dims[3],je=(Me,Ue)=>[Me[0][0]*Ue[0]+Me[0][1]*Ue[1]+Me[0][2]*Ue[2]+Me[0][3],Me[1][0]*Ue[0]+Me[1][1]*Ue[1]+Me[1][2]*Ue[2]+Me[1][3],Me[2][0]*Ue[0]+Me[2][1]*Ue[1]+Me[2][2]*Ue[2]+Me[2][3]],Ge=Vr();if(!Hr(Ge,jr(...S.hdr.affine[0],...S.hdr.affine[1],...S.hdr.affine[2],...S.hdr.affine[3])))throw new Error("Segmentation affine is not invertible");const ot=(Me,Ue)=>[Me[0]*Ue[0]+Me[1]*Ue[1]+Me[2]*Ue[2]+Me[3],Me[4]*Ue[0]+Me[5]*Ue[1]+Me[6]*Ue[2]+Me[7],Me[8]*Ue[0]+Me[9]*Ue[1]+Me[10]*Ue[2]+Me[11]],Ne=Me=>ot(Ge,je(de,Me)),se=Ne([0,0,0]),H=Ne([1,0,0]).map((Me,Ue)=>Me-se[Ue]),le=Ne([0,1,0]).map((Me,Ue)=>Me-se[Ue]),Ye=Ne([0,0,1]).map((Me,Ue)=>Me-se[Ue]),it=!!S.colormapLabel||S.hdr.intent_code===1002,et=oe*Re*be,Ee=Ks(p),Ke=(Me,Ue,St)=>Me>=0&&Me<he&&Ue>=0&&Ue<ve&&St>=0&&St<xe?O[Me+Ue*he+St*he*ve]:0;if(it){const Me=[];for(const Xe of[-.25,.25])for(const we of[-.25,.25])for(const pe of[-.25,.25])Me.push([Xe*H[0]+we*le[0]+pe*Ye[0],Xe*H[1]+we*le[1]+pe*Ye[1],Xe*H[2]+we*le[2]+pe*Ye[2]]);const Ue=new Int16Array(et),St=U?U.length:0;let Ut=0;const Bt=new Int32Array(8),Gt=new Int32Array(8);let sn=0;for(let Xe=0;Xe<be;Xe++)for(let we=0;we<Re;we++){let pe=se[0]+we*le[0]+Xe*Ye[0],Pe=se[1]+we*le[1]+Xe*Ye[1],ze=se[2]+we*le[2]+Xe*Ye[2];for(let ke=0;ke<oe;ke++){let He=0;for(let ct=0;ct<8;ct++){const Et=Ke(Math.round(pe+Me[ct][0]),Math.round(Pe+Me[ct][1]),Math.round(ze+Me[ct][2]));let De=-1;for(let tt=0;tt<He;tt++)if(Bt[tt]===Et){De=tt;break}De<0?(Bt[He]=Et,Gt[He]=1,He++):Gt[De]++}let Qe=Bt[0],at=Gt[0];for(let ct=1;ct<He;ct++)Gt[ct]>at&&(at=Gt[ct],Qe=Bt[ct]);U&&Qe>=0&&Qe<St&&(Qe=U[Qe]),Qe>Ut&&(Ut=Qe),Ue[sn++]=Qe,pe+=H[0],Pe+=H[1],ze+=H[2]}}Ee.hdr.datatypeCode=4,Ee.hdr.numBitsPerVoxel=16,Ee.hdr.scl_slope=1,Ee.hdr.scl_inter=0,Ee.hdr.cal_min=0,Ee.hdr.cal_max=Ut,Ee.hdr.intent_code=1002,Ee.img=Ue}else{const Me=S.img instanceof Float32Array,Ue=Me?255:1,St=Me?.5:0,Ut=Me?new Uint8Array(et):Ee.img;Ut.fill(0),Me&&(Object.assign(Ee.hdr,{datatypeCode:2,numBitsPerVoxel:8,cal_min:0,cal_max:1}),Ee.img=Ut),Ee.hdr.scl_slope=1/Ue,Ee.hdr.scl_inter=0;const Gt=Me?(Xe,we,pe)=>{const Pe=Math.floor(Xe),ze=Math.floor(we),ke=Math.floor(pe),He=Xe-Pe,Qe=we-ze,at=pe-ke,ct=Ke(Pe,ze,ke),Et=Ke(Pe+1,ze,ke),De=Ke(Pe,ze+1,ke),tt=Ke(Pe+1,ze+1,ke),yt=Ke(Pe,ze,ke+1),lt=Ke(Pe+1,ze,ke+1),nt=Ke(Pe,ze+1,ke+1),ge=Ke(Pe+1,ze+1,ke+1),ye=ct+He*(Et-ct),me=De+He*(tt-De),rt=yt+He*(lt-yt),$t=nt+He*(ge-nt),vt=ye+Qe*(me-ye),xt=rt+Qe*($t-rt);return vt+at*(xt-vt)}:(Xe,we,pe)=>Ke(Math.round(Xe),Math.round(we),Math.round(pe));let sn=0;for(let Xe=0;Xe<be;Xe++)for(let we=0;we<Re;we++){let pe=se[0]+we*le[0]+Xe*Ye[0],Pe=se[1]+we*le[1]+Xe*Ye[1],ze=se[2]+we*le[2]+Xe*Ye[2];for(let ke=0;ke<oe;ke++)Ut[sn++]=Gt(pe,Pe,ze)*Ue+St,pe+=H[0],Pe+=H[1],ze+=H[2]}}return Ee}let ee=!1,Z=!1;const E={cube:'<svg viewBox="0 0 24 24" class="save-opt-ico" aria-hidden="true"><path d="M12 2.75l8.25 4.75v9L12 21.25 3.75 16.5v-9z"/><path d="M12 12v9.25M3.75 7.5L12 12l8.25-4.5"/></svg>',grid:'<svg viewBox="0 0 24 24" class="save-opt-ico" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="2.5"/><path d="M3.5 9.5h17M3.5 14.5h17M9.5 3.5v17M14.5 3.5v17"/></svg>',volume:'<svg viewBox="0 0 24 24" class="save-opt-ico" aria-hidden="true"><path d="M12 3.5l8.5 4.5-8.5 4.5L3.5 8z"/><path d="M3.5 12l8.5 4.5 8.5-4.5M3.5 16l8.5 4.5 8.5-4.5"/></svg>',scene:'<svg viewBox="0 0 24 24" class="save-opt-ico" aria-hidden="true"><rect x="3.5" y="4.5" width="17" height="15" rx="2.5"/><path d="M3.5 9.5h17M9.5 9.5v10"/></svg>',arrow:'<svg viewBox="0 0 24 24" class="save-opt-arrow" aria-hidden="true"><path d="M12 4.5v11"/><path d="M7.5 11.5L12 16l4.5-4.5"/><path d="M5 19.5h14"/></svg>'},Y=[{act:j,group:"seg",icon:"cube",title:"Conformed space",sub:"256³ · 1 mm isotropic",need:"seg"},{act:V,group:"seg",icon:"grid",title:"Native space",sub:"Resampled to the input grid",need:"seg"},{act:A,group:"vol",icon:"volume",title:"Conformed input volume",sub:"Resampled T1 · 256³ · 1 mm",need:"img"},{act:K,group:"vol",icon:"scene",title:"Scene (.nvd)",sub:"Full viewer state document",need:"img"}];function q(){const S=Q.volumes.length>=1,U=Q.volumes.length>=2,O=U&&r&&r.outputType!=="probability"&&(r.type!=="Brain_Extraction"||!!i),de=U&&r&&r.outputType!=="probability"&&r.type!=="Brain_Extraction"&&!!Tn(n),oe=se=>se==="seg"?U:S;let Re=!1;const be=se=>Y.map((H,le)=>({o:H,i:le})).filter(({o:H})=>H.group===se).map(({o:H,i:le})=>{const Ye=oe(H.need),it=Ye&&!Re?(Re=!0," autofocus"):"";return`<button type="button" class="save-opt${Ye?"":" disabled"}" data-i="${le}"${Ye?"":" disabled"}${it}>
          ${E[H.icon]}
          <span class="save-opt-copy">
            <span class="save-opt-title">${H.title}</span>
            <span class="save-opt-sub">${H.sub}</span>
          </span>
          ${E.arrow}
        </button>`}).join(""),he=[];de&&he.push(`
        <label class="save-check-row" for="saveFreeSurfer">
          <input type="checkbox" id="saveFreeSurfer" class="save-checkbox"${ee?" checked":""}>
          <span class="save-check-copy">
            <span class="save-check-title">FreeSurfer label IDs <span class="save-badge">Freeview</span></span>
            <span class="save-check-sub">FreeSurferColorLUT numbering · open directly with :colormap=lut</span>
          </span>
        </label>`),O&&he.push(`
        <label class="save-check-row" for="saveBinaryMask">
          <input type="checkbox" id="saveBinaryMask" class="save-checkbox"${Z?" checked":""}>
          <span class="save-check-copy">
            <span class="save-check-title">Also save binary mask</span>
            <span class="save-check-sub">Foreground 1 · background 0</span>
          </span>
        </label>`);const ve=he.length?`<div class="save-modifiers" role="group" aria-label="Segmentation export options">${he.join("")}</div>`:"",je=`
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
      </div>`;Kt("Save",je,{hideClose:!0,saveMode:!0});const Ge=document.getElementById("dialogMessage");if(!Ge)return;const ot=Ge.querySelector("#saveFreeSurfer");ot&&(ot.onchange=()=>{ee=ot.checked});const Ne=Ge.querySelector("#saveBinaryMask");Ne&&(Ne.onchange=()=>{Z=Ne.checked}),Ge.querySelectorAll(".save-opt:not(.disabled)").forEach(se=>{se.onclick=()=>{var et,Ee;const H=Y[parseInt(se.dataset.i,10)],le=H.need==="seg"&&!!((et=Ge.querySelector("#saveBinaryMask"))!=null&&et.checked),Ye=H.need==="seg"&&de&&!!((Ee=Ge.querySelector("#saveFreeSurfer"))!=null&&Ee.checked),it=document.getElementById("appDialog");it&&it.open&&it.close(),H.need==="seg"?H.act({includeMask:le,useFreeSurfer:Ye}):H.act()}})}const _e=document.getElementById("saveBtn");_e&&(_e.onclick=q);function ne(S,U,O){const oe=new Map,Re=U.length;for(let ve=0;ve<Re;ve++){const xe=U[ve];if(xe===0)continue;let je=oe.get(xe);je||(je={count:0,sum:0,sumSq:0,hist:new Float64Array(256)},oe.set(xe,je));const Ge=S[ve];je.count++,je.sum+=Ge,je.sumSq+=Ge*Ge,je.hist[Ge]++}const be=(ve,xe,je)=>{const Ge=je*xe;let ot=0;for(let Ne=0;Ne<ve.length;Ne++)if(ot+=ve[Ne],ot>=Ge)return Ne;return ve.length-1},he=[];for(const[ve,xe]of[...oe.entries()].sort((je,Ge)=>je[0]-Ge[0])){const je=xe.sum/xe.count,Ge=Math.max(0,xe.sumSq/xe.count-je*je);let ot=0,Ne=0;for(let se=0;se<xe.hist.length;se++)if(xe.hist[se]>0){ot=se;break}for(let se=xe.hist.length-1;se>=0;se--)if(xe.hist[se]>0){Ne=se;break}he.push({label:ve,name:n&&n[ve]!=null?n[ve]:`label_${ve}`,voxels:xe.count,volume_mm3:xe.count*O,min:ot,max:Ne,q1:be(xe.hist,xe.count,.25),median:be(xe.hist,xe.count,.5),q3:be(xe.hist,xe.count,.75),mean:je,stdev:Math.sqrt(Ge)})}return he}function Fe(S,U=null){const O=U?["label","fs_label","name","voxels","volume_mm3","min","max","q1","median","q3","mean","stdev"]:["label","name","voxels","volume_mm3","min","max","q1","median","q3","mean","stdev"],de=be=>Number.isInteger(be)?String(be):be.toFixed(6),oe=be=>/[",\n]/.test(be)?`"${String(be).replace(/"/g,'""')}"`:String(be),Re=[O.join(",")];for(const be of S){const he=U?[be.label,be.label<U.length?U[be.label]:be.label,oe(be.name)]:[be.label,oe(be.name)];he.push(be.voxels,de(be.volume_mm3),be.min,be.max,be.q1,be.median,be.q3,de(be.mean),de(be.stdev)),Re.push(he.join(","))}return Re.join(`
`)+`
`}function Ce(S,U=null){const O=new Blob([Fe(S,U)],{type:"text/csv"}),de=URL.createObjectURL(O),oe=document.createElement("a");oe.href=de,oe.download="mask_stats.csv",document.body.appendChild(oe),oe.click(),oe.remove(),URL.revokeObjectURL(de)}const Ie=S=>{const U=S/1e3;return U>=10?Math.round(U).toLocaleString():U.toFixed(1)};function qe(S,U,O=null){const de=Math.max(...S.map(ve=>ve.volume_mm3)),oe=ve=>s&&s.R&&s.R[ve.label]!=null?`rgb(${s.R[ve.label]},${s.G[ve.label]},${s.B[ve.label]})`:"#6b9bd1";let Re="";for(const ve of S){const xe=U>0?ve.volume_mm3/U*100:0,je=de>0?ve.volume_mm3/de*100:0,Ge=l===ve.label,ot=O&&ve.label<O.length?O[ve.label]:null,Ne=`<span class="stat-val" data-cm3="${Ie(ve.volume_mm3)}" data-pct="${xe.toFixed(1)}%">${Ie(ve.volume_mm3)}</span>`,se=`<span class="stat-bar" style="width:${je.toFixed(2)}%;background:${oe(ve)}" data-w-abs="${je.toFixed(2)}" data-w-pct="${xe.toFixed(2)}"></span>`,H=(Ye,it)=>`<div class="stat-kv"><span class="k">${Ye}</span><span class="v">${it}</span></div>`,le=H("min",ve.min)+H("max",ve.max)+H("Q1",ve.q1)+H("Q3",ve.q3)+H("median",ve.median)+H("mean",ve.mean.toFixed(2))+H("SD",ve.stdev.toFixed(2))+H("voxels",ve.voxels.toLocaleString());Re+=`
        <div class="stat-row${Ge?" is-isolated":""}" data-label="${ve.label}" data-name="${Zt(ve.name.toLowerCase())}">
          <div class="stat-line">
            <button type="button" class="stat-trigger" aria-expanded="false">
              <span class="stat-chevron" aria-hidden="true"></span>
              <span class="stat-swatch" style="background:${oe(ve)}" aria-hidden="true"></span>
              <span class="stat-name">${Zt(ve.name)}</span>
              <span class="stat-track" aria-hidden="true">${se}</span>
              ${Ne}
            </button>
            <button type="button" class="stat-iso${Ge?" active":""}" aria-pressed="${Ge}" aria-label="Isolate ${Zt(ve.name)}">${Ge?"isolated":"isolate"}</button>
          </div>
          <div class="stat-detail" hidden>
            <div class="stat-detail-meta">
              <span class="stat-detail-fullname">${Zt(ve.name)}</span>
              <span class="stat-detail-badges">
                <span class="stat-id-chip">ID ${ve.label}</span>
                ${ot?`<span class="save-badge">FS ${ot}</span>`:""}
              </span>
            </div>
            <div class="stat-detail-grid">${le}</div>
          </div>
        </div>`}const be=S.length===1?"region":"regions",he=S.length>8?`<search class="stat-search">
           <input type="search" id="statsFilterInput" class="stat-filter" placeholder="Filter regions…" aria-label="Filter regions" autocorrect="off" autocapitalize="none" spellcheck="false">
         </search>`:"";return`
      <div id="statsPanel">
        <div class="stat-toolbar">
          <div class="stat-toggle" role="group" aria-label="Volume display unit">
            <button type="button" data-mode="cm3" class="active" aria-pressed="true">cm³</button>
            <button type="button" data-mode="pct" aria-pressed="false">% of total</button>
          </div>
          <span class="stat-total" id="statsUnitLabel">${S.length} ${be} &middot; ${Ie(U)} cm³</span>
          ${he}
        </div>
        <div id="statsRows">
          ${Re}
          <p id="statsEmpty" class="stat-empty" hidden>No matching regions</p>
        </div>
        <div class="stat-footer">
          <span class="stat-footer-hint">Select a row for intensity stats &middot; Isolate solos in 3D</span>
          <button type="button" id="statsDownloadBtn" class="stat-csv-btn">
            ${E.arrow}
            <span>Download CSV</span>
          </button>
        </div>
      </div>`}saveStatsBtn.onclick=function(){if(Q.volumes.length<2){Kt("Region volumes","<p>No segmentation to measure — run a model first.</p>");return}if(Q.volumes[1].img instanceof Float32Array){Kt("Region volumes","<p>Region statistics require a discrete label segmentation, not continuous probability maps.</p>");return}const S=Q.volumes[0].img,U=g||Q.volumes[1].img;if(!S||!U||S.length!==U.length){Kt("Region volumes","<p>Input and segmentation grids do not match.</p>");return}const O=Q.volumes[0].hdr.pixDims||[],de=O[1]&&O[2]&&O[3]?O[1]*O[2]*O[3]:1;let oe=ne(S,U,de);if(oe.length===0){Kt("Region volumes","<p>No non-background labels found in the segmentation.</p>");return}oe=oe.slice().sort((Ne,se)=>se.volume_mm3-Ne.volume_mm3);const Re=oe.reduce((Ne,se)=>Ne+se.volume_mm3,0),be=r&&r.type!=="Brain_Extraction"?Tn(n):null;Kt("Region volumes",qe(oe,Re,be),{hideClose:!0,statsMode:!0});const he=document.getElementById("statsPanel");if(!he)return;let ve="cm3",xe=oe.length;const je=()=>{const Ne=document.getElementById("statsUnitLabel");if(!Ne)return;const se=xe===oe.length?`${oe.length} ${oe.length===1?"region":"regions"}`:`${xe} of ${oe.length} regions`,H=ve==="pct"?"100% of volume":`${Ie(Re)} cm³`;Ne.innerHTML=`${se} &middot; ${H}`};he.querySelectorAll(".stat-toggle button").forEach(Ne=>{Ne.onclick=()=>{ve=Ne.dataset.mode,he.querySelectorAll(".stat-toggle button").forEach(se=>{const H=se===Ne;se.classList.toggle("active",H),se.setAttribute("aria-pressed",String(H))}),je(),he.querySelectorAll(".stat-row").forEach(se=>{const H=se.querySelector(".stat-val"),le=se.querySelector(".stat-bar");H.textContent=ve==="pct"?H.dataset.pct:H.dataset.cm3,le.style.width=(ve==="pct"?le.dataset.wPct:le.dataset.wAbs)+"%"})}});const Ge=document.getElementById("statsFilterInput"),ot=document.getElementById("statsEmpty");if(Ge){const Ne=()=>{const se=Ge.value.trim().toLowerCase();xe=0,he.querySelectorAll(".stat-row").forEach(H=>{const le=!se||H.dataset.name.includes(se)||H.dataset.label===se;H.hidden=!le,le&&xe++}),ot&&(ot.hidden=xe>0),je()};Ge.oninput=Ne,Ge.addEventListener("keydown",se=>{se.key==="Escape"&&Ge.value!==""&&(se.preventDefault(),se.stopPropagation(),Ge.value="",Ne())})}he.querySelectorAll(".stat-trigger").forEach(Ne=>{Ne.onclick=()=>{const se=Ne.closest(".stat-row"),H=se.querySelector(".stat-detail"),le=H.hidden;H.hidden=!le,se.classList.toggle("is-expanded",le),Ne.setAttribute("aria-expanded",String(le))}}),he.querySelectorAll(".stat-iso").forEach(Ne=>{Ne.onclick=()=>{const se=parseInt(Ne.closest(".stat-row").dataset.label,10);Number.isNaN(se)||J(se);const H=document.getElementById("appDialog");H&&H.open&&H.close()}}),document.getElementById("statsDownloadBtn").onclick=()=>Ce(oe,be)};function Je(){Q.volumes.length<=1&&(p=Q.volumes[0]||null,b=p&&p.name?p.name:"input.nii.gz",r=null,i=null,z(),modelSelect.value="-1",a(),Q.volumes[0]&&opacitySlider0.oninput())}const Oe=new Map;function Le(S){return Be(this,null,function*(){if(Oe.has(S))return Oe.get(S);const O=yield(yield fetch(S)).json();return Oe.set(S,O),O})}function Se(S,U,O=1){let de=0;for(let oe=0;oe<256;oe++)S[oe]>0&&de++;return(!U||de!==U.length)&&(t="Failed to Predict Some Labels - "),U.map((oe,Re)=>{const be=Re<256?S[Re]:0,he=be>0?`${Ie(be*O)} cm3`:"Missing";return he==="Missing"&&(t+=`${oe}, `),`${oe}   ${he}`})}function Ze(S,U,O){return Be(this,null,function*(){var xe,je;const de=(xe=U.probabilityDisplayMin)!=null?xe:.005,{probabilityOverlayAlpha:oe=96,probabilityOverlayFloor:Re=192}=U,be=(O==null?void 0:O.tint)||[255,255,255],he=`probability-light-${be.join("-")}-${Re}-${oe}`;if(!Q.hasColormap(he)){const[Ge,ot,Ne]=be.map(se=>Math.round(se*Re/255));Q.addColormap(he,{R:[Ge,be[0]],G:[ot,be[1]],B:[Ne,be[2]],A:[0,oe],I:[0,255]})}const ve=rs(Q.volumes[0],S instanceof Float32Array?S:Float32Array.from(S),(je=O==null?void 0:O.name)!=null?je:Q.volumes[0].name,{scl_inter:0,scl_slope:1,datatypeCode:16,numBitsPerVoxel:32,cal_min:0,cal_max:1,intent_code:1001},{calMin:de,calMax:1,robustMin:de,robustMax:1,globalMin:0,globalMax:1,colormapType:1,colormap:he,opacity:Number(opacitySlider1.value),modulateAlpha:1});return ve.modulationImage=ve.id,yield Q.model.addVolume(ve),Q.volumes.at(-1)})}function pt(S,U,O,de){return Be(this,null,function*(){var Ge,ot,Ne;if(I(),G(),n=null,s=null,r=O,i=O.type==="Brain_Extraction"&&de||null,O.outputType==="probability"){const se=Array.isArray(S)?S:[S],H=[];for(let le=0;le<se.length;le++)H.push(yield Ze(se[le],O,(Ge=O.probabilityTissues)==null?void 0:Ge[le]));O.probabilityPostprocess==="cat-lite"&&H.length===3&&(m=H),z(O),yield Q.updateGLVolume();return}const oe=S instanceof Uint8Array?S:new Uint8Array(S.buffer,S.byteOffset||0,S.byteLength);let Re,be=null,he=0,ve={calMin:0,calMax:255,robustMin:0,robustMax:255,globalMin:0,globalMax:255};if(O.type==="Brain_Masking"){const se=["Background","Brain Mask"];n=se.slice();const H=[0,217],le=[0,119],Ye=[0,33];s={R:H,G:le,B:Ye};const it={R:H,G:le,B:Ye,labels:se},et="brainchop-label-mask";Q.addColormap(et,it),Re=et,be=zs(it),he=1002,ve={calMin:0,calMax:1,robustMin:0,robustMax:1,globalMin:0,globalMax:1}}else if(O.colormapPath){const se=is(oe),H=yield Le(O.colormapPath);n=H.labels?H.labels.slice():null,s={R:H.R,G:H.G,B:H.B};const le=Q.volumes[0].hdr.pixDims||[],Ye=le[1]&&le[2]&&le[3]?le[1]*le[2]*le[3]:1,it=H.labels?Se(se,H.labels,Ye):[],et=Ft(bt(bt({R:H.R,G:H.G,B:H.B},H.I?{I:H.I}:{}),H.A?{A:H.A}:{}),{labels:it}),Ee=`brainchop-label-${O.id}`;Q.addColormap(Ee,et),Re=Ee,be=zs(et);const Ke=Math.max(1,((Ne=(ot=H.R)==null?void 0:ot.length)!=null?Ne:256)-1);he=1002,ve={calMin:0,calMax:Ke,robustMin:0,robustMax:Ke,globalMin:0,globalMax:Ke}}else{const se=is(oe);ve=ei(se),Re=U.atlasSelectedColorTable.toLowerCase(),O.type==="Brain_Extraction"&&(Re="copper2"),Q.hasColormap(Re)||(Re="actc")}const xe=rs(Q.volumes[0],oe,Q.volumes[0].name,{datatypeCode:2,numBitsPerVoxel:8,scl_inter:0,scl_slope:1,cal_min:ve.calMin,cal_max:ve.calMax,intent_code:he},Ft(bt(Ft(bt({},ve),{colormap:Re}),be?{colormapLabel:be}:{}),{opacity:Number(opacitySlider1.value)}));yield Q.model.addVolume(xe);const je=Q.volumes.at(-1);be&&je&&!je.colormapLabel&&(je.colormapLabel=be),z(O),yield Q.updateGLVolume()})}function ut(S){return Be(this,null,function*(){var U;if(typeof S=="string")try{S=JSON.parse(S)}catch(O){console.error("Failed to parse telemetry data",O);return}S=yield Ga(S,(U=Q.view)==null?void 0:U.gl),e=`:: Diagnostics https://github.com/neuroneural/brainchop/issues ::
`;for(const O in S)S[O]!==null&&S[O]!==void 0&&(e+=`${O}: ${S[O]}
`)})}function ft(S){const U=String(S).split(" · ").map(O=>O.trim()).filter(O=>O!=="");return U.length<=1?Zt(String(S)):U.map((O,de)=>`<span class="loc-seg"${de>=2?' style="opacity:.75"':""}>${Zt(O)}</span>`).join('<span class="loc-sep">&middot;</span>')}function At(S="",U=-1,O="",de=[]){if(S){console.log(S);const oe=document.getElementById("location");oe&&(oe.innerHTML=ft(S))}if(isNaN(U)){const oe=document.getElementById("memstatusItem");oe&&(oe.hidden=!1),memstatus.style.color="#ef4444",memstatus.textContent="Memory Issue"}else U>=0&&(modelProgress.value=U*modelProgress.max);O&&(On?(Vn.push(String(O)),console.warn("[backend]",O)):Kt("Message",Zt(String(O)).replace(/\n/g,"<br>"))),de&&Object.keys(de).length>0&&ut(de)}function Vt(S){P=S.vox,document.getElementById("location").innerHTML=S.string.split("   ").map(U=>U.trim()).filter(U=>U!=="").map(U=>`<span class="loc-seg">${Zt(U)}</span>`).join('<span class="loc-sep">&middot;</span>')}const Lt=new URLSearchParams(window.location.search).get("viewer")==="webgpu"?"webgpu":"webgl2",Q=new Er({backend:Lt,matcaps:{Shiny:Tr}});yield Q.attachTo("gl1"),console.info("NiiVue viewer backend:",Q.backend),Q.backgroundColor=[0,0,0,1],Q.is3DCrosshairVisible=!0,Q.clipPlaneColor=[.7,0,.7,.5],Q.gamma=1,Q.registerVolumeTransform(co),Q.isLegendVisible=!1,Q.addEventListener("locationChange",S=>Vt(S.detail)),Q.canvas.addEventListener("click",ue),window.addEventListener("keydown",S=>{S.key==="Escape"&&(document.querySelector("dialog[open]")||(l!==null?(l=null,ae()):u!==null&&(u=null,C())))});const nn=Q.drawScene.bind(Q);Q.drawScene=function(S){const U=nn(S);try{W()}catch(O){console.warn("isolation HUD draw failed",O)}return U},Q.primaryDragMode=As.crosshair,Q.secondaryDragMode=As.slicer3D,Q.showRender=Or.ALWAYS,Q.isYoked3DTo2DZoom=!1,Q.crosshairGap=11;{const S=document.getElementById("dragSegmented");S&&S.querySelectorAll("button").forEach(U=>U.classList.toggle("active",parseInt(U.dataset.drag,10)===Q.secondaryDragMode))}Q.volumeIsNearestInterpolation=!0,yield Q.loadVolumes([{url:"./t1_crop.nii.gz"}]),modelSelect.innerHTML="";const Mt=document.createElement("option");Mt.text="Run Segmentation Model",Mt.value="-1",Mt.disabled=!0,Mt.selected=!0,Mt.hidden=!0,modelSelect.appendChild(Mt);for(let S=0;S<hn.length;S++){console.log(`Adding model option: ${hn[S].modelName}`);const U=document.createElement("option");U.text=hn[S].modelName,U.value=S,hn[S].type==="Divider"&&(U.disabled=!0),modelSelect.appendChild(U)}Q.addEventListener("volumeLoaded",Je),Je(),Ja(Q),Xa(Q),modelSelect.value="-1",a(),F(-1),yield Zs((ht=Q.view)==null?void 0:ht.gl);const Ct=new URLSearchParams(window.location.search).get("model");Ct!==null&&Ct!==""&&Number(Ct)>=0&&Number(Ct)<hn.length?(modelSelect.value=String(Number(Ct)),a(),ie()):mn&&tn&&(window.requestIdleCallback?U=>window.requestIdleCallback(U,{timeout:600}):U=>setTimeout(U,200))(()=>Sa(tn))})}function Zt(e){return String(e).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function si(e){const n=(Vn.length?Vn:[e&&e.message?e.message:String(e||"unknown error")]).map(s=>`<li>${Zt(s)}</li>`).join("");Kt("Segmentation failed",`<p>No available backend could run this model on this device.</p>
     <ul style="margin:0 0 4px 1.1em;padding:0;font-size:0.92em;line-height:1.45">${n}</ul>
     <p style="font-size:0.88em;color:#9aa4af">Full details are in the browser console and under Diagnostics.</p>`)}function Kt(e,t,n={}){const s=document.getElementById("appDialog"),r=document.getElementById("dialogTitle"),i=document.getElementById("dialogMessage"),o=document.getElementById("dialogCloseBtn");if(!s)return;r.textContent=e,i.innerHTML=t,o.style.display=n.hideClose?"none":"",o.onclick=()=>s.close(),s.classList.toggle("dialog-save",!!n.saveMode),s.classList.toggle("dialog-stats",!!n.statsMode);const a=document.getElementById("dialogXBtn");a&&(a.onclick=()=>s.close()),s.showModal()}function ri(){return Be(this,null,function*(){try{const t=yield(yield fetch("https://api.github.com/repos/neuroneural/brainchop")).json();document.getElementById("star-count").textContent=t.stargazers_count}catch(e){console.error("Error fetching star count:",e)}})}(function(){return Be(this,null,function*(){yield ni(),yield ri()})})();export{nr as a,tr as d,er as p};
