var Ar=Object.defineProperty,Cr=Object.defineProperties;var zr=Object.getOwnPropertyDescriptors;var Xn=Object.getOwnPropertySymbols;var so=Object.prototype.hasOwnProperty,oo=Object.prototype.propertyIsEnumerable;var Ot=Math.pow,no=(e,t,n)=>t in e?Ar(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,at=(e,t)=>{for(var n in t||(t={}))so.call(t,n)&&no(e,n,t[n]);if(Xn)for(var n of Xn(t))oo.call(t,n)&&no(e,n,t[n]);return e},vt=(e,t)=>Cr(e,zr(t));var ro=(e,t)=>{var n={};for(var s in e)so.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&Xn)for(var s of Xn(e))t.indexOf(s)<0&&oo.call(e,s)&&(n[s]=e[s]);return n};var Me=(e,t,n)=>new Promise((s,o)=>{var a=u=>{try{i(n.next(u))}catch(l){o(l)}},r=u=>{try{i(n.throw(u))}catch(l){o(l)}},i=u=>u.done?s(u.value):Promise.resolve(u.value).then(a,r);i((n=n.apply(e,t)).next())});import{z as Nn,$ as Br,t as Fr,L as ao,Y as Lr,M as io,a as Ur,_ as Wr}from"./vendor-niivue-Cvdr5q4M.js";import{l as Rr,n as qr,p as Ir}from"./vendor-math-oqRZD8Fx.js";import"./vendor-FBY2Vxgc.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();const Gr="modulepreload",Tr=function(e,t){return new URL(e,t).href},lo={},_n=function(t,n,s){let o=Promise.resolve();if(n&&n.length>0){let l=function(c){return Promise.all(c.map(g=>Promise.resolve(g).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};const r=document.getElementsByTagName("link"),i=document.querySelector("meta[property=csp-nonce]"),u=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));o=l(n.map(c=>{if(c=Tr(c,s),c in lo)return;lo[c]=!0;const g=c.endsWith(".css"),m=g?'[rel="stylesheet"]':"";if(s)for(let p=r.length-1;p>=0;p--){const d=r[p];if(d.href===c&&(!g||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${m}`))return;const f=document.createElement("link");if(f.rel=g?"stylesheet":Gr,g||(f.as="script"),f.crossOrigin="",f.href=c,u&&f.setAttribute("nonce",u),document.head.appendChild(f),g)return new Promise((p,d)=>{f.addEventListener("load",p),f.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${c}`)))})}))}function a(r){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=r,window.dispatchEvent(i),!i.defaultPrevented)throw r}return o.then(r=>{for(const i of r||[])i.status==="rejected"&&a(i.reason);return t().catch(a)})};function Or(e){return new Worker(""+new URL("conform-worker-CLIpQIO-.js",import.meta.url).href,{name:e==null?void 0:e.name})}const Pt=256,jn=Pt*Pt*Pt;function Nr(e,t){if(!(e instanceof ArrayBuffer))return e;switch(t){case 2:return new Uint8Array(e);case 4:return new Int16Array(e);case 8:return new Int32Array(e);case 16:return new Float32Array(e);case 64:return new Float64Array(e);case 256:return new Int8Array(e);case 512:return new Uint16Array(e);case 768:return new Uint32Array(e);case 1024:return new BigInt64Array(e);case 1280:return new BigUint64Array(e);default:return new Float32Array(e)}}function Er(e){return e[0]*(e[5]*e[10]-e[6]*e[9])-e[1]*(e[4]*e[10]-e[6]*e[8])+e[2]*(e[4]*e[9]-e[5]*e[8])}function Dr(e){if(!e||e.length<16)return!1;for(let t=0;t<16;t++)if(!Number.isFinite(e[t]))return!1;return Math.abs(Er(e))>=1e-6}function Vr(e){const t=e[0],n=e[1],s=e[2],o=e[3],a=e[4],r=e[5],i=e[6],u=e[7],l=e[8],c=e[9],g=e[10],m=e[11],f=r*g-i*c,p=-(a*g-i*l),d=a*c-r*l,b=t*f+n*p+s*d;if(!Number.isFinite(b)||Math.abs(b)<1e-12)throw new Error("Cannot conform volume: singular affine transform.");const M=1/b,_=f*M,$=-(n*g-s*c)*M,x=(n*i-s*r)*M,S=p*M,h=(t*g-s*l)*M,w=-(t*i-s*a)*M,A=d*M,y=-(t*c-n*l)*M,C=(t*r-n*a)*M,P=-(_*o+$*u+x*m),U=-(S*o+h*u+w*m),z=-(A*o+y*u+C*m);return[_,$,x,P,S,h,w,U,A,y,C,z,0,0,0,1]}function Hr(e,t){const n=new Array(16);for(let s=0;s<3;s++){const o=s*4,a=e[o],r=e[o+1],i=e[o+2],u=e[o+3];n[o]=a*t[0]+r*t[4]+i*t[8],n[o+1]=a*t[1]+r*t[5]+i*t[9],n[o+2]=a*t[2]+r*t[6]+i*t[10],n[o+3]=a*t[3]+r*t[7]+i*t[11]+u}return n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function Xr(e,t,n,s,o=!1){const a=e*.5,r=t*.5,i=n*.5,u=s[0]*a+s[1]*r+s[2]*i+s[3],l=s[4]*a+s[5]*r+s[6]*i+s[7],c=s[8]*a+s[9]*r+s[10]*i+s[11],g=Pt*.5;return o?[1,0,0,u-g,0,1,0,l-g,0,0,1,c-g,0,0,0,1]:[-1,0,0,u+g,0,0,1,l-g,0,-1,0,c+g,0,0,0,1]}function jr(e,t=.999){const n=e.length;if(n===0)return{srcMin:0,srcMax:0,scale:1,flooredNegative:!1};let s=1/0,o=-1/0,a=0,r=0;for(let d=0;d<n;d++){let b=e[d];Number.isFinite(b)||(b=0,e[d]=0),b<s&&(s=b),b>o&&(o=b),(b>=1e-15||b<=-1e-15)&&a++,b<0&&r++}let i=!1;s<0&&100*r/n<2&&(s=0,i=!0);const u=Math.fround((o-s)/1e3);if(!(u>0)){for(let d=0;d<n;d++){const b=e[d];e[d]=b<=0?0:b>=255?255:b}return{srcMin:s,srcMax:o,scale:1,flooredNegative:i}}const l=new Uint32Array(1e3);for(let d=0;d<n;d++){const b=Math.fround((e[d]-s)/u),M=b<=0?0:b>=999?999:Math.trunc(b);l[M]++}const c=Math.max(0,Math.min(1,1-t)),g=n-Math.floor(c*a);let m=0,f=0;for(;f<999&&(m+=l[f],!(m+l[f+1]>=g));f++);o=Math.fround(f*u+s);const p=s!==o?Math.fround(255/(o-s)):1;for(let d=0;d<n;d++){const b=p*(e[d]-s);e[d]=b<=0?0:b>=255?255:b}return{srcMin:s,srcMax:o,scale:p,flooredNegative:i}}function Yr({img:e,datatypeCode:t,dims:n,affine:s,sclSlope:o=1,sclInter:a=0,toRAS:r=!1,isLinear:i=!0,asFloat32:u=!1,fHigh:l=.999}){const c=n[1]|0,g=n[2]|0,m=n[3]|0;if(c<1||g<1||m<1)throw new Error(`Invalid input volume dimensions: [${c}, ${g}, ${m}]`);const f=Array.isArray(s[0])?s.flat():Array.from(s);if(!Dr(f))throw new Error("Cannot conform volume: invalid or singular affine matrix.");const p=Nr(e,t),d=c*g*m;if(!p||p.length<d)throw new Error(`Input buffer length (${p?p.length:0}) is smaller than ${c}x${g}x${m}`);const b=Number.isFinite(o)&&o!==0?o:1,M=Number.isFinite(a)?a:0,_=new Float32Array(d),$=p instanceof BigInt64Array||p instanceof BigUint64Array;let x=0;if($)for(let C=0;C<d;C++){const P=Number(p[C])*b+M;Number.isFinite(P)?(_[C]=P,x++):_[C]=0}else if(b===1&&M===0)for(let C=0;C<d;C++){const P=p[C];Number.isFinite(P)?(_[C]=P,x++):_[C]=0}else for(let C=0;C<d;C++){const P=p[C]*b+M;Number.isFinite(P)?(_[C]=P,x++):_[C]=0}if(x===0)throw new Error("Input volume contains no finite voxel values.");jr(_,l);const S=Xr(c,g,m,f,r),h=Vr(f),w=Hr(h,S);let A=c===Pt&&g===Pt&&m===Pt;for(let C=0;C<3&&A;C++){const P=C*4;let U=Math.abs(w[P+3]);for(let z=0;z<3;z++)U+=Math.abs(w[P+z]-(C===z?1:0))*(Pt-1);A=U<.001}const y=u?new Float32Array(jn):new Uint8Array(jn);if(A)if(u)for(let C=0;C<jn;C++)y[C]=_[C]*(1/255);else for(let C=0;C<jn;C++){const P=_[C];y[C]=P<=0?0:P>=255?255:Math.round(P)}else{let C=_[0];for(let fe=1;fe<d;fe++)_[fe]<C&&(C=_[fe]);C!==0&&y.fill(u?C*(1/255):Math.min(255,Math.max(0,Math.round(C))));const P=w[0],U=w[1],z=w[2],D=w[3],N=w[4],X=w[5],B=w[6],R=w[7],q=w[8],j=w[9],O=w[10],F=w[11],E=c*g,K=c-1,Y=g-1,Z=m-1,pe=1/255;let ve=0;if(i)for(let fe=0;fe<Pt;fe++){const be=fe*z+D,V=fe*B+R,ie=fe*O+F;for(let k=0;k<Pt;k++){const te=k*U+be,I=k*X+V,me=k*j+ie;for(let le=0;le<Pt;le++,ve++){const re=le*P+te,H=le*N+I,J=le*q+me,G=Math.floor(re),$e=Math.floor(H),ye=Math.floor(J);if(G<0||$e<0||ye<0||G>=K||$e>=Y||ye>=Z)continue;const Se=re-G,Ce=H-$e,Ge=J-ye,Re=1-Se,Xe=1-Ce,Ee=1-Ge,Be=G+$e*c+ye*E,ke=_[Be]*Re+_[Be+1]*Se,Qe=_[Be+c]*Re+_[Be+c+1]*Se,tt=_[Be+E]*Re+_[Be+E+1]*Se,rt=_[Be+c+E]*Re+_[Be+c+E+1]*Se,nt=(ke*Xe+Qe*Ce)*Ee+(tt*Xe+rt*Ce)*Ge;if(u)y[ve]=nt<=0?0:nt>=255?1:nt*pe;else{const At=Math.fround(nt);y[ve]=At<=0?0:At>=255?255:Math.floor(At+.5)}}}}else for(let fe=0;fe<Pt;fe++){const be=fe*z+D,V=fe*B+R,ie=fe*O+F;for(let k=0;k<Pt;k++){const te=k*U+be,I=k*X+V,me=k*j+ie;for(let le=0;le<Pt;le++,ve++){const re=Math.round(le*P+te),H=Math.round(le*N+I),J=Math.round(le*q+me);if(re<0||H<0||J<0||re>=c||H>=g||J>=m)continue;const G=_[re+H*c+J*E];u?y[ve]=G<=0?0:G>=255?1:G*pe:y[ve]=G<=0?0:G>=255?255:Math.floor(G+.5)}}}}return{img:y,dims:[3,Pt,Pt,Pt,1,1,1,1],pixDims:[1,1,1,1,1,0,0,0],affine:S,datatypeCode:u?16:2,bitsPerVoxel:u?32:8,sclSlope:1,sclInter:0,calMin:0,calMax:0}}let Wn=null,Kr=1;const In=new Map;function Zr(e){Wn&&(Wn.terminate(),Wn=null);for(const{reject:t}of In.values())t(e);In.clear()}function Qr(){if(Wn)return Wn;const e=new Or({});return e.onmessage=t=>{const{id:n,result:s,error:o}=t.data,a=In.get(n);a&&(In.delete(n),o?a.reject(new Error(o)):a.resolve(s))},e.onerror=t=>{const n=(t==null?void 0:t.message)||"Conform worker crashed";Zr(new Error(n))},Wn=e,e}function Jr(e){return typeof Worker=="undefined"?Promise.resolve(Yr(e)):new Promise((t,n)=>{const s=Kr++;In.set(s,{resolve:t,reject:n});try{Qr().postMessage({id:s,payload:e})}catch(o){In.delete(s),n(o)}})}function ea(e,t){const n=Object.assign(Object.create(Object.getPrototypeOf(e)||Object.prototype),JSON.parse(JSON.stringify(e)));return n.datatypeCode=t.datatypeCode,n.numBitsPerVoxel=t.bitsPerVoxel,n.scl_slope=t.sclSlope,n.scl_inter=t.sclInter,n.cal_min=t.calMin,n.cal_max=t.calMax,n.dims=t.dims,n.pixDims=t.pixDims,n.affine=[[t.affine[0],t.affine[1],t.affine[2],t.affine[3]],[t.affine[4],t.affine[5],t.affine[6],t.affine[7]],[t.affine[8],t.affine[9],t.affine[10],t.affine[11]],[0,0,0,1]],n.sform_code=1,n.qform_code=0,n}const uo={name:"conform",description:"Reslice to 256×256×256 isotropic 1 mm volume with negative-ringing floor and 0–99.9% intensity scaling",options:[{name:"toRAS",type:"checkbox",label:"Output RAS orientation",default:!1},{name:"isLinear",type:"checkbox",label:"Linear interpolation",default:!0},{name:"asFloat32",type:"checkbox",label:"Output as Float32",default:!1}],apply(s,o){return Me(this,arguments,function*(e,t,n={}){var i,u,l,c;const a={img:t,datatypeCode:e.datatypeCode,dims:[...e.dims],affine:Array.isArray(e.affine[0])?e.affine.flat():[...e.affine],sclSlope:e.scl_slope||1,sclInter:e.scl_inter||0,toRAS:(i=n.toRAS)!=null?i:!1,isLinear:(u=n.isLinear)!=null?u:!0,asFloat32:(l=n.asFloat32)!=null?l:!1,fHigh:(c=n.fHigh)!=null?c:.999},r=yield Jr(a);return{hdr:ea(e,r),img:r.img}})}},xn=new WeakMap;class ta{getLabelMeta(t){return xn.get(t)||null}idx(t,n,s,o){return s*o[0]*o[1]+n*o[0]+t}check_previous_slice(t,n,s,o,a,r,i,u,l,c){let g=0;if(!a)return 0;const m=t[this.idx(s,o,a,r)];if(i>=6){const f=this.idx(s,o,a-1,r);m===t[f]&&(l[g++]=n[f])}if(i>=18){if(s){const f=this.idx(s-1,o,a-1,r);m===t[f]&&(l[g++]=n[f])}if(o){const f=this.idx(s,o-1,a-1,r);m===t[f]&&(l[g++]=n[f])}if(s<r[0]-1){const f=this.idx(s+1,o,a-1,r);m===t[f]&&(l[g++]=n[f])}if(o<r[1]-1){const f=this.idx(s,o+1,a-1,r);m===t[f]&&(l[g++]=n[f])}}if(i===26){if(s&&o){const f=this.idx(s-1,o-1,a-1,r);m===t[f]&&(l[g++]=n[f])}if(s<r[0]-1&&o){const f=this.idx(s+1,o-1,a-1,r);m===t[f]&&(l[g++]=n[f])}if(s&&o<r[1]-1){const f=this.idx(s-1,o+1,a-1,r);m===t[f]&&(l[g++]=n[f])}if(s<r[0]-1&&o<r[1]-1){const f=this.idx(s+1,o+1,a-1,r);m===t[f]&&(l[g++]=n[f])}}return g?(this.fill_tratab(u,l,g,c),l[0]):0}do_initial_labelling(t,n,s,o=null){const a=n[0]|0,r=n[1]|0,i=n[2]|0,u=a*r,l=u*i;let c=1;const g=8192;let m=g,f=new Uint32Array(m),p;if(s===6&&o&&o.il&&o.il.length===l){if(p=o.il,o.dirty)p.fill(0);else if(o.runs&&o.runLen>0){const _=o.runs,$=o.runLen;for(let x=0;x<$;x+=2)p.fill(0,_[x],_[x+1])}}else p=new Uint32Array(l),s===6&&o&&(o.il=p,o.runs=null,o.runLen=0,o.dirty=!1);if(s===6){o&&(o.dirty=!0);const _=(t instanceof Uint8Array||t instanceof Uint8ClampedArray)&&(t.byteOffset&3)===0&&(a&3)===0&&t.length>=l?new Uint32Array(t.buffer,t.byteOffset,l>>2):null;let $=o&&o.runs?o.runs:new Uint32Array(8192),x=$.length,S=0,h=0,w=0,A=0,y=-1,C=-1,P=i,U=-1;for(let z=0;z<i;z++){const D=z*u;for(let N=0;N<r;N++){const X=D+N*a;let B=0;if(_){const q=X+a>>2;let j=X>>2;for(;j<q&&_[j]===0;)j++;if(j===q)continue;B=(j<<2)-X}let R=!1;for(;B<a;B++){const q=X+B;if(_&&!R&&(B&3)===0&&_[q>>2]===0){B+=3;continue}const j=t[q];if(j===0){R&&($[S++]=q,R=!1);continue}if(!R){if(S+2>x){x<<=1;const F=new Uint32Array(x);F.set($),$=F}$[S++]=q,R=!0}y<0&&(y=q,P=z),C=q,U=z;let O=0;if(z>0&&t[q-u]===j&&(h=p[q-u],O=1),B>0&&t[q-1]===j){const F=p[q-1];O===0?h=F:O===1?w=F:A=F,O++}if(N>0&&t[q-a]===j){const F=p[q-a];O===0?h=F:O===1?w=F:A=F,O++}if(O===0){if(p[q]=c,c>=m){m+=g;const F=new Uint32Array(m);F.set(f),f=F}f[c-1]=c,c++}else if(p[q]=h,O===2&&w!==h){let F=h;for(;f[F-1]!==F;)F=f[F-1];let E=w;for(;f[E-1]!==E;)E=f[E-1];const K=F<E?F:E;f[F-1]=K,f[E-1]=K}else if(O===3&&(w!==h||A!==h)){let F=h;for(;f[F-1]!==F;)F=f[F-1];let E=w;for(;f[E-1]!==E;)E=f[E-1];let K=A;for(;f[K-1]!==K;)K=f[K-1];let Y=F<E?F:E;K<Y&&(Y=K),f[F-1]=Y,f[E-1]=Y,f[K-1]=Y}}R&&($[S++]=X+a)}}for(let z=0;z<c-1;z++){let D=z;for(;f[D]!==D+1;)D=f[D]-1;f[z]=D+1}return o&&(o.runs=$,o.runLen=S,o.dirty=!1),this._lastInitialRange={conn:6,fgStart:y,fgEnd:C,minSl:P,maxSl:U,runs:$,runLen:S},[c-1,f,p]}const d=new Uint32Array(32),b=new Uint32Array(32),M=new Uint32Array(27);for(let _=0;_<i;_++)for(let $=0;$<r;$++)for(let x=0;x<a;x++){let S=0;const h=t[this.idx(x,$,_,n)];if(h!==0){if(M[0]=this.check_previous_slice(t,p,x,$,_,n,s,f,d,b),M[0]&&(S+=1),s>=6){if(x){const w=this.idx(x-1,$,_,n);h===t[w]&&(M[S++]=p[w])}if($){const w=this.idx(x,$-1,_,n);h===t[w]&&(M[S++]=p[w])}}if(s>=18){if($&&x){const w=this.idx(x-1,$-1,_,n);h===t[w]&&(M[S++]=p[w])}if($&&x<a-1){const w=this.idx(x+1,$-1,_,n);h===t[w]&&(M[S++]=p[w])}}if(S)p[this.idx(x,$,_,n)]=M[0],this.fill_tratab(f,M,S,b);else{if(p[this.idx(x,$,_,n)]=c,c>=m){m+=g;const w=new Uint32Array(m);w.set(f),f=w}f[c-1]=c,c++}}}for(let _=0;_<c-1;_++){let $=_;for(;f[$]!==$+1;)$=f[$]-1;f[_]=$+1}return this._lastInitialRange=null,[c-1,f,p]}fill_tratab(t,n,s,o){let r=2147483647;for(let i=0;i<s;i++){let u=n[i];for(;t[u-1]!==u;)u=t[u-1];o[i]=u,r=Math.min(r,u)}for(let i=0;i<s;i++)t[o[i]-1]=r}translate_labels(t,n,s,o,a=null,r=null){const i=n[0]*n[1]*n[2];if(r&&(o===0||r.fgStart<0))return a&&(this._lastMeta={conn:r.conn,cl:0,fgStart:0,fgEnd:-1,minSl:0,maxSl:-1,ls2bw:new Uint32Array(1),sumls:new Uint32Array(1),distinctFgClasses:0,bw:a}),[0,t];let u=0;for(let d=0;d<o;d++)s[d]>u&&(u=s[d]);const l=new Uint32Array(u+1),c=a&&r?new Uint32Array(o+1):null,g=a&&r?new Uint32Array(o+1):null,m=r?r.fgStart:0,f=r?r.fgEnd:i-1;let p=0;if(r&&r.runs){const d=r.runs,b=r.runLen;for(let M=0;M<b;M+=2){const _=d[M],$=d[M+1];for(let x=_;x<$;x++){const S=s[t[x]-1];let h=l[S];h||(p+=1,h=p,l[S]=h,c&&(c[h]=a[x])),t[x]=h,g&&g[h]++}}}else for(let d=m;d<=f;d++){const b=t[d];if(b){const M=s[b-1];let _=l[M];_||(p+=1,_=p,l[M]=_,c&&(c[_]=a[d])),t[d]=_,g&&g[_]++}}if(a&&r){const d=c.slice(0,p+1),b=g.slice(0,p+1);let M=0;if(p>0){const _=d[1];M=1;for(let $=2;$<=p;$++)if(d[$]!==_){M=2;break}}this._lastMeta={conn:r.conn,cl:p,fgStart:r.fgStart,fgEnd:r.fgEnd,minSl:r.minSl,maxSl:r.maxSl,runs:r.runs,runLen:r.runLen,ls2bw:d,sumls:b,distinctFgClasses:M,bw:a}}return[p,t]}neighbor_winners(t,n,s,o,a=null,r=null){const i=n[0],u=n[1],l=n[2],c=i*u,g=!!(r&&a);let m=!1;for(let x=1;x<=o;x++)if(!s[x]){m=!0;break}if(!m)return g&&console.log("[relabel] 0/0 suppressed components resolved within their own class family (0 fell back to the unrestricted neighbour vote)"),new Uint32Array(o+1);const f=g?new Int32Array(o+1).fill(-1):null,p=new Map,d=(x,S)=>{let h=p.get(x);h||(h=new Map,p.set(x,h)),h.set(S,(h.get(S)||0)+1)},b=xn.get(t),M=b&&b.cl===o&&t.length===c*l;if(M&&b.runs){const x=b.runs,S=b.runLen;for(let h=0;h<S;h+=2){const w=x[h],A=x[h+1],y=w/c|0,C=w-y*c,P=C/i|0;let U=C-P*i;for(let z=w;z<A;z++,U++){const D=t[z];if(s[D])continue;g&&f[D]<0&&(f[D]=r(a[z]));let N;U>0&&(N=s[t[z-1]])&&d(D,N),U<i-1&&(N=s[t[z+1]])&&d(D,N),P>0&&(N=s[t[z-i]])&&d(D,N),P<u-1&&(N=s[t[z+i]])&&d(D,N),y>0&&(N=s[t[z-c]])&&d(D,N),y<l-1&&(N=s[t[z+c]])&&d(D,N)}}}else{const x=M?b.minSl:0,S=M?b.maxSl:l-1;let h=x*c;for(let w=x;w<=S;w++)for(let A=0;A<u;A++)for(let y=0;y<i;y++,h++){const C=t[h];if(C===0||s[C])continue;g&&f[C]<0&&(f[C]=r(a[h]));let P;y>0&&(P=s[t[h-1]])&&d(C,P),y<i-1&&(P=s[t[h+1]])&&d(C,P),A>0&&(P=s[t[h-i]])&&d(C,P),A<u-1&&(P=s[t[h+i]])&&d(C,P),w>0&&(P=s[t[h-c]])&&d(C,P),w<l-1&&(P=s[t[h+c]])&&d(C,P)}}const _=new Uint32Array(o+1).fill(0);let $=0;for(const[x,S]of p){const h=g?f[x]:0;let w=0,A=0;if(h>0){for(const[y,C]of S)r(y)===h&&(C>A||C===A&&(w===0||y<w))&&(A=C,w=y);w&&$++}if(!w)for(const[y,C]of S)(C>A||C===A&&(w===0||y<w))&&(A=C,w=y);_[x]=w}return g&&console.log(`[relabel] ${$}/${p.size} suppressed components resolved within their own class family (${p.size-$} fell back to the unrestricted neighbour vote)`),_}finalize_volume(t,n,s,o,a,r=null,i=null,u=!1){const l=t.length,c=a?this.neighbor_winners(t,n,s,o,r,i):null,g=c?new Uint32Array(o+1):s;let m=0;for(let _=1;_<=o;_++){let $=s[_];c&&($||($=c[_]),g[_]=$),$>m&&(m=$)}const f=xn.get(t),p=f&&f.cl===o&&f.ls2bw.length===o+1&&f.fgEnd<l;let d=0;if(p&&f.runs){const _=f.runs,$=f.runLen;for(let h=1;h<=o;h++)f.sumls[h]>0&&g[h]>d&&(d=g[h]);if(f.bw===r&&r instanceof Uint8Array&&m<=255){const h=new Uint8Array(o+1);let w=!1;for(let y=1;y<=o;y++)f.sumls[y]>0&&g[y]!==f.ls2bw[y]&&(h[y]=1,w=!0);const A=u?r:r.slice();if(w)for(let y=0;y<$;y+=2){const C=_[y],P=_[y+1];for(let U=C;U<P;U++){const z=t[U];h[z]&&(A[U]=g[z])}}return[d,A]}const S=r instanceof Uint8Array&&m<=255?new Uint8Array(l):new Uint32Array(l);for(let h=0;h<$;h+=2){const w=_[h],A=_[h+1];for(let y=w;y<A;y++){const C=g[t[y]];C&&(S[y]=C)}}return[d,S]}const M=r instanceof Uint8Array&&m<=255?new Uint8Array(l):new Uint32Array(l);if(p){if(f.fgStart>=0&&f.fgEnd>=f.fgStart)for(let _=f.fgStart;_<=f.fgEnd;_++){const $=t[_];if($!==0){const x=g[$];x&&(M[_]=x,x>d&&(d=x))}}}else for(let _=0;_<l;_++){const $=t[_];if($!==0){const x=g[$];x&&(M[_]=x,x>d&&(d=x))}}return[d,M]}diagnose_components(t,n,s,o,a={}){var y,C,P;const r=(y=a.topN)!=null?y:50,i=(C=a.minSize)!=null?C:1,u=(P=a.label)!=null?P:"diag",l=o[0],c=o[1],g=o[2],m=l*c,f=new Uint32Array(n+1),p=new Uint32Array(n+1);for(let U=0;U<t.length;U++){const z=s[U];z&&(f[z]=t[U],p[z]++)}const d=new Map,b=new Uint32Array(n+1),M=new Uint32Array(n+1),_=(U,z)=>{let D=d.get(U);D||(D=new Map,d.set(U,D)),D.set(z,(D.get(z)||0)+1)};for(let U=0;U<g;U++)for(let z=0;z<c;z++)for(let D=0;D<l;D++){const N=U*m+z*l+D,X=s[N];if(!X)continue;const B=f[X],R=q=>{const j=s[q];if(j===X)return;M[X]++;const O=j?f[j]:0;O===0?b[X]++:O!==B&&_(X,O)};D>0&&R(N-1),D<l-1&&R(N+1),z>0&&R(N-l),z<c-1&&R(N+l),U>0&&R(N-m),U<g-1&&R(N+m)}const $=new Map,x=new Map;for(let U=1;U<=n;U++){const z=f[U];$.set(z,($.get(z)||0)+1),(!x.has(z)||p[U]>x.get(z))&&x.set(z,p[U])}const S=[];for(let U=1;U<=n;U++){if(p[U]<i)continue;const z=f[U],D=d.get(U);let N=0,X=0,B=0;if(D)for(const[q,j]of D)B+=j,j>X&&(X=j,N=q);const R=M[U]||1;S.push({comp:U,class:z,size:p[U],largestOfClass:p[U]===x.get(z)?"Y":"n",compsInClass:$.get(z),domNeighbor:N,domFracForeign:B?+(X/B).toFixed(2):0,domFracBoundary:+(X/R).toFixed(2),bgFrac:+(b[U]/R).toFixed(2)})}S.sort((U,z)=>z.domFracForeign-U.domFracForeign||z.size-U.size);const h=(U,z)=>{const D=z.map(X=>Math.max(X.h.length,...U.map(B=>String(B[X.k]).length))),N=X=>X.map((B,R)=>String(B).padStart(D[R])).join("  ");return[N(z.map(X=>X.h)),...U.map(X=>N(z.map(B=>X[B.k])))].join(`
`)},w=[{k:"comp",h:"comp"},{k:"class",h:"class"},{k:"size",h:"size"},{k:"largestOfClass",h:"lrg"},{k:"compsInClass",h:"nComp"},{k:"domNeighbor",h:"domNbr"},{k:"domFracForeign",h:"encF"},{k:"domFracBoundary",h:"encB"},{k:"bgFrac",h:"bgF"}];console.log(`[${u}] total components=${n}, distinct classes=${$.size}
[${u}] island candidates (encF≈1 + small size + lrg=n ⇒ swallowed island):
`+h(S.slice(0,r),w));const A=[...$.entries()].map(([U,z])=>({class:U,components:z,maxCompSize:x.get(U)})).sort((U,z)=>z.components-U.components);return console.log(`[${u}] per-class component counts (components=1 ⇒ fully connected):
`+h(A.slice(0,30),[{k:"class",h:"class"},{k:"components",h:"comps"},{k:"maxCompSize",h:"maxSize"}])),S}_collectComponentStats(t,n,s){const o=xn.get(s);if(o&&o.cl===n&&o.bw===t&&s.length===t.length)return[o.ls2bw,o.sumls];const a=t.length,r=new Uint32Array(n+1),i=new Uint32Array(n+1);for(let u=0;u<a;u++){const l=s[u];l>0&&(r[l]=t[u],i[l]++)}return[r,i]}_buildKeptMap(t,n,s,o,a){const r=new Uint32Array(s+1);let i=0;for(let l=1;l<=s;l++)t[l]>i&&(i=t[l]);const u=o==="all";if(i<=65535){const l=new Uint32Array(i+1),c=new Uint32Array(i+1);for(let g=1;g<=s;g++){const m=t[g];if(m!==0)if(u||o&&o.has&&o.has(m)){const f=n[g];(!c[m]||(a?f>=l[m]:f>l[m]))&&(l[m]=f,c[m]=g)}else r[g]=m}for(let g=1;g<=i;g++){const m=c[g];m>0&&(r[m]=g)}}else{const l=new Map;for(let c=1;c<=s;c++){const g=t[c];if(g!==0)if(u||o&&o.has&&o.has(g)){const m=n[c],f=l.get(g);(!f||(a?m>=f.sz:m>f.sz))&&l.set(g,{c,sz:m})}else r[c]=g}for(const[c,{c:g}]of l)r[g]=c}return r}largest_original_cluster_labels(t,n,s,o=null,a=!1,r=null,i=!1){const[u,l]=this._collectComponentStats(t,n,s),c=this._buildKeptMap(u,l,n,"all",!0);return this.finalize_volume(s,o,c,n,a,t,r,i)}filter_clusters(t,n,s,o,a=null,r=!1,i=null,u=!1){const[l,c]=this._collectComponentStats(t,n,s),g=this._buildKeptMap(l,c,n,o,!1);return this.finalize_volume(s,a,g,n,r,t,i,u)}filter_clusters_by_ratio(t,n,s,o,a=null,r=!1,i=null){const u=t.length,l=new Uint32Array(n+1).fill(0),c=new Uint32Array(n+1).fill(0);for(let p=0;p<u;p++){const d=s[p];d>0&&(l[d]===0&&(l[d]=t[p]),c[d]++)}const g=new Map;for(let p=1;p<=n;p++){const d=l[p],b=c[p];(!g.has(d)||b>g.get(d))&&g.set(d,b)}const m=new Uint8Array(n+1).fill(0);for(let p=1;p<=n;p++){const d=l[p],b=c[p],M=g.get(d)||0;b>=M*o&&(m[p]=1)}const f=new Uint32Array(n+1).fill(0);for(let p=1;p<=n;p++)m[p]&&(f[p]=l[p]);return this.finalize_volume(s,a,f,n,r,t,i)}_binaryComponentsFromLabels(t,n,s,o,a=!1){const r=o[0]|0,i=o[1]|0,u=o[2]|0,l=r*i,c=xn.get(s),g=c&&c.cl===n&&s.length===l*u&&(!a||c.bw===t);if(g&&c.conn===6&&c.distinctFgClasses<=1){const _=new Uint32Array(n+1);let $=0,x=0;for(let S=1;S<=n;S++){_[S]=S;const h=c.sumls[S];h>0&&h>=x&&(x=h,$=S)}return{parent:_,compSize:c.sumls,compClass:a?c.ls2bw:null,bestRoot:$}}const m=g?c.sumls:new Uint32Array(n+1),f=g?a?c.ls2bw:null:a?new Uint32Array(n+1):null,p=new Uint32Array(n+1);for(let _=1;_<=n;_++)p[_]=_;if(g&&c.conn===6&&c.runs&&c.bw===t){const _=(S,h)=>{for(;p[S]!==S;)p[S]=p[p[S]],S=p[S];for(;p[h]!==h;)p[h]=p[p[h]],h=p[h];S!==h&&(S<h?p[h]=S:p[S]=h)},$=c.runs,x=c.runLen;for(let S=0;S<x;S+=2){const h=$[S],w=$[S+1],A=h/l|0,y=h-A*l,C=y/r|0;let P=y-C*r;for(let U=h;U<w;U++,P++){const z=t[U];let D=0;if(A>0){const N=t[U-l];N!==0&&N!==z&&(D=s[U],_(D,s[U-l]))}if(C>0){const N=t[U-r];N!==0&&N!==z&&(D||(D=s[U]),_(D,s[U-r]))}if(P>0){const N=t[U-1];N!==0&&N!==z&&(D||(D=s[U]),_(D,s[U-1]))}}}}else{const _=g?c.minSl:0,$=g?c.maxSl:u-1;let x=_*l;for(let S=_;S<=$;S++)for(let h=0;h<i;h++)for(let w=0;w<r;w++,x++){const A=s[x];if(A===0)continue;g||(m[A]++,f&&f[A]===0&&(f[A]=t[x]));let y=A;for(;p[y]!==y;)p[y]=p[p[y]],y=p[y];if(S>0){const C=s[x-l];if(C!==0&&C!==A){let P=C;for(;p[P]!==P;)p[P]=p[p[P]],P=p[P];y!==P&&(y<P?p[P]=y:(p[y]=P,y=P))}}if(h>0){const C=s[x-r];if(C!==0&&C!==A){let P=C;for(;p[P]!==P;)p[P]=p[p[P]],P=p[P];y!==P&&(y<P?p[P]=y:(p[y]=P,y=P))}}if(w>0){const C=s[x-1];if(C!==0&&C!==A){let P=C;for(;p[P]!==P;)p[P]=p[p[P]],P=p[P];y!==P&&(y<P?p[P]=y:p[y]=P)}}}}const d=new Uint32Array(n+1);for(let _=1;_<=n;_++){let $=_;for(;p[$]!==$;)$=p[$];p[_]=$,d[$]+=m[_]}let b=0,M=0;for(let _=1;_<=n;_++){const $=d[_];$>0&&$>=M&&(M=$,b=_)}return{parent:p,compSize:m,compClass:f,bestRoot:b}}applyLargestBinaryMaskInPlace(t,n,s,o){const a=t.length;if(n===0)return t.fill(0),t;const r=xn.get(s),i=r&&r.cl===n&&s.length===a;if(i&&r.conn===6&&r.distinctFgClasses<=1){let c=0,g=0;for(let m=1;m<=n;m++){const f=r.sumls[m];f>0&&f>=g&&(g=f,c=m)}if(r.runs&&r.bw===t){if(n>1){const m=r.runs,f=r.runLen;for(let p=0;p<f;p+=2){const d=m[p],b=m[p+1];for(let M=d;M<b;M++)s[M]!==c&&(t[M]=0)}}return t}if(r.fgStart>0&&t.fill(0,0,r.fgStart),r.fgEnd>=r.fgStart){for(let m=r.fgStart;m<=r.fgEnd;m++)s[m]!==c&&(t[m]=0);r.fgEnd+1<a&&t.fill(0,r.fgEnd+1)}else t.fill(0);return t}const{parent:u,bestRoot:l}=this._binaryComponentsFromLabels(t,n,s,o,!1);if(i&&r.runs&&r.bw===t){const c=r.runs,g=r.runLen;for(let m=0;m<g;m+=2){const f=c[m],p=c[m+1];for(let d=f;d<p;d++)u[s[d]]!==l&&(t[d]=0)}return t}if(i&&r.fgEnd>=r.fgStart){r.fgStart>0&&t.fill(0,0,r.fgStart);for(let c=r.fgStart;c<=r.fgEnd;c++){const g=s[c];(g===0||u[g]!==l)&&(t[c]=0)}r.fgEnd+1<a&&t.fill(0,r.fgEnd+1)}else for(let c=0;c<a;c++){const g=s[c];(g===0||u[g]!==l)&&(t[c]=0)}return t}filterHierarchicalFromLabels(t,n,s,o,a="all",r=!0,i=!1,u=null,l=!1){if(n===0)return[0,t instanceof Uint8Array?l?t:new Uint8Array(t.length):new Uint32Array(t.length)];const{parent:c,compSize:g,compClass:m,bestRoot:f}=this._binaryComponentsFromLabels(t,n,s,o,!0),p=new Uint32Array(n+1);for(let b=1;b<=n;b++)c[b]===f&&(p[b]=m[b]);const d=this._buildKeptMap(p,g,n,a,r);return this.finalize_volume(s,o,d,n,i,t,u,l)}filter18ClassFromLabels(t,n,s,o,a,r=!1,i=null,u=!1){return this.filterHierarchicalFromLabels(t,n,s,o,a,!1,r,i,u)}bwlabel(t,n,s=26,o=!1,a=!1,r=null){const i=Date.now(),u=n[0]*n[1]*n[2];if(![6,18,26].includes(s))return console.log("bwlabel: conn must be 6, 18 or 26."),[0,new Uint32Array(u)];if(n[0]<2||n[1]<2||n[2]<1)return console.log("bwlabel: img must be 2 or 3-dimensional"),[0,new Uint32Array(u)];let l;if(o){l=new Uint8Array(u);for(let d=0;d<u;d++)t[d]!==0&&(l[d]=1)}else t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Uint16Array||t instanceof Uint32Array||t instanceof Int8Array||t instanceof Int16Array||t instanceof Int32Array?t.length===u?l=t:(l=new Uint32Array(u),l.set(t.subarray(0,u))):(l=new Uint32Array(u),l.set(t));this._lastInitialRange=null,this._lastMeta=null;let[c,g,m]=this.do_initial_labelling(l,n,s,r);g===void 0&&(g=new Uint32Array(0));const[f,p]=this.translate_labels(m,n,g,c,l,this._lastInitialRange);if(this._lastMeta&&xn.set(p,this._lastMeta),console.log(s+" neighbor clustering into "+f+" regions in "+(Date.now()-i)+"ms"),a){const[d,b]=this.largest_original_cluster_labels(l,f,p);return[d,b]}return[f,p]}filter_clusters_by_rank(t,n,s,o,a=0,r=null,i=!1,u=null,l=!1,c=null){const g=t.length,m=new Uint32Array(n+1).fill(0),f=new Uint32Array(n+1).fill(0),p=u!=null&&Array.isArray(r)&&r.length===3,d=p?r[0]:0,b=p?r[1]:0,M=p?new Int32Array(n+1).fill(2147483647):null,_=p?new Int32Array(n+1).fill(-1):null,$=p?new Int32Array(n+1).fill(2147483647):null,x=p?new Int32Array(n+1).fill(-1):null,S=p?new Int32Array(n+1).fill(2147483647):null,h=p?new Int32Array(n+1).fill(-1):null;for(let U=0;U<g;U++){const z=s[U];if(z>0&&(m[z]===0&&(m[z]=t[U]),f[z]++,p)){const D=U%d,N=U/d|0,X=N%b,B=N/b|0;D<M[z]&&(M[z]=D),D>_[z]&&(_[z]=D),X<$[z]&&($[z]=X),X>x[z]&&(x[z]=X),B<S[z]&&(S[z]=B),B>h[z]&&(h[z]=B)}}let w=null,A=0;if(p){let U=-1;for(let R=1;R<=n;R++)f[R]>U&&(U=f[R],A=R);const z=Math.max(2,Math.ceil(u)+4),D=d*b,N=new Int16Array(g).fill(-1);let X=[];for(let R=0;R<g;R++)s[R]===A&&(N[R]=0,X.push(R));for(let R=1;R<=z&&X.length;R++){const q=[];for(let j=0;j<X.length;j++){const O=X[j],F=O%d,K=(O/d|0)%b;F>0&&N[O-1]===-1&&(N[O-1]=R,q.push(O-1)),F<d-1&&N[O+1]===-1&&(N[O+1]=R,q.push(O+1)),K>0&&N[O-d]===-1&&(N[O-d]=R,q.push(O-d)),K<b-1&&N[O+d]===-1&&(N[O+d]=R,q.push(O+d)),O-D>=0&&N[O-D]===-1&&(N[O-D]=R,q.push(O-D)),O+D<g&&N[O+D]===-1&&(N[O+D]=R,q.push(O+D))}X=q}const B=z+1;w=new Float64Array(n+1).fill(B);for(let R=0;R<g;R++){const q=s[R];if(q>0&&q!==A){const j=N[R]>=0?N[R]:B;j<w[q]&&(w[q]=j)}}l&&console.log(`[rank-filter] brain comp=${A} size=${U} bbox A[${M[A]},${_[A]}] B[${$[A]},${x[A]}] C[${S[A]},${h[A]}] | maxGap=${u} scan=${z}`)}const y=new Map;for(let U=1;U<=n;U++){const z=m[U],D=f[U];y.has(z)||y.set(z,[]),y.get(z).push({i:U,size:D})}const C=new Uint8Array(n+1).fill(0);for(const[U,z]of y.entries()){z.sort((B,R)=>R.size-B.size);const D=z.length?z[0].size:0,N=a>0?D*a:0,X=Math.min(z.length,o);for(let B=0;B<X;B++){const R=z[B];if(R.size<N){l&&B>0&&console.log(`[rank-filter] class ${U} #${B}: size=${R.size} DROP (below ${(a*100).toFixed(0)}% floor)`);break}if(B>0&&p){const q=w[R.i],j=q<=u;if(l&&console.log(`[rank-filter] class ${U} #${B}: size=${R.size} surfDist=${q} -> ${j?"KEEP":"DROP (too far)"}`),!j)continue}C[R.i]=1}}const P=new Uint32Array(n+1).fill(0);for(let U=1;U<=n;U++)C[U]&&(P[U]=m[U]);return this.finalize_volume(s,r,P,n,i,t,c)}}function na(e){if(!(e!=null&&e.length))throw new Error("Segmentation volume is empty.");let t=0;if((e instanceof Uint8Array||e instanceof Uint8ClampedArray)&&(e.byteOffset&3)===0&&e.length>=4){const n=e.length>>2,s=new Uint32Array(e.buffer,e.byteOffset,n);for(let o=0;o<n;o++){const a=s[o];a!==0&&(a&255&&t++,a&65280&&t++,a&16711680&&t++,a&4278190080&&t++)}for(let o=n<<2;o<e.length;o++)e[o]!==0&&t++}else if(e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Uint16Array||e instanceof Uint32Array)for(let n=0;n<e.length;n++)e[n]!==0&&t++;else for(let n=0;n<e.length;n++){const s=e[n];if(!Number.isFinite(s)||s<0)throw new Error(`Segmentation contains an invalid label at voxel ${n}: ${s}.`);s!==0&&t++}if(t===0)throw new Error("Segmentation volume contains no foreground labels.");if(t>e.length*.95)throw new Error(`Segmentation fills ${(100*t/e.length).toFixed(1)}% of the volume; GPU output is unusable.`)}const sa={il:null,runs:null,runLen:0,dirty:!1};function oa(e,t=.05,n=.95){const s=e.length;if(s===0)return{qmin:0,qmax:0};if(e instanceof Uint8Array||e instanceof Uint8ClampedArray){const u=Math.max(0,Math.min(s-1,Math.floor(s*t))),l=Math.max(0,Math.min(s-1,Math.ceil(s*n)-1)),c=new Uint32Array(256);for(let b=0;b<s;b++)c[e[b]]++;let g=0,m=0,f=0,p=!1,d=!1;for(let b=0;b<256;b++){const M=c[b];if(M!==0&&(g+=M,!p&&g>u&&(m=b,p=!0),!d&&g>l&&(f=b,d=!0),p&&d))break}return{qmin:m,qmax:f}}const o=Math.min(1e5,s),a=Math.max(0,Math.min(o-1,Math.floor(o*t))),r=Math.max(0,Math.min(o-1,Math.ceil(o*n)-1)),i=new Float64Array(o);if(o>=s)i.set(e);else{const u=.6180339887498949;let l=.5;for(let c=0;c<o;c++)l+=u,l>=1&&(l-=1),i[c]=e[Math.floor(l*s)]}return i.sort(),{qmin:i[a],qmax:i[r]}}function ra(e){const t=e.length;if(t===0)return{min:0,max:0};let n=e[0],s=e[0];if(e instanceof Uint8Array||e instanceof Uint8ClampedArray){for(let o=1;o<t;o++){const a=e[o];if(a<n?n=a:a>s&&(s=a),n===0&&s===255)break}return{min:n,max:s}}for(let o=1;o<t;o++){const a=e[o];a<n&&(n=a),a>s&&(s=a)}return{min:n,max:s}}function co(e,t,n){const s=e.length,o=new Float32Array(s);if(e instanceof Uint8Array||e instanceof Uint8ClampedArray){const a=new Float32Array(256);for(let r=0;r<256;r++)a[r]=(r-t)/n;for(let r=0;r<s;r++)o[r]=a[e[r]];return o}for(let a=0;a<s;a++)o[a]=(e[a]-t)/n;return o}function qo(e,t,n,s){const o=t[0]|0,a=t[1]|0,r=t[2]|0,i=o*a*r,u=new s(i);if(n[0]===2&&n[1]===1&&n[2]===0&&i===e.length){const b=a*r,M=a*o,_=16;for(let $=0;$<a;$++){const x=$*r,S=$*o;for(let h=0;h<o;h+=_){const w=Math.min(h+_,o);for(let A=0;A<r;A+=_){const y=Math.min(A+_,r);for(let C=h;C<w;C++){let P=C*b+x+A,U=A*M+S+C;for(let z=A;z<y;z++,P++,U+=M)u[U]=e[P]}}}}return u}const l=[o,a,r],c=[l[n[0]],l[n[1]],l[n[2]]],g=[a*r,r,1],m=g[n[0]],f=g[n[1]],p=g[n[2]];let d=0;for(let b=0;b<c[0];b++){const M=b*m;for(let _=0;_<c[1];_++){const $=M+_*f;for(let x=0;x<c[2];x++,d++)u[d]=e[$+x*p]}}return u}function Fn(e,t=[256,256,256],n=[2,1,0]){return qo(e,t,n,Float32Array)}function aa(e,t=[256,256,256],n=[2,1,0]){return qo(e,t,n,Uint8Array)}function Ss(e){const t=new Uint32Array(256);for(let n=0;n<e.length;n++)t[e[n]]++;return t}function ia(e){const t=Ss(e);let n=0;for(let s=0;s<256;s++)t[s]>0&&n++;return n}function fo(e,t=!1,n="output"){let s=0,o=1/0,a=-1/0;if(!t&&(e instanceof Uint8Array||e instanceof Uint8ClampedArray)){if(e.length>0){let r=255,i=0,u=0;if((e.byteOffset&3)===0&&e.length>=4){const l=e.length>>2,c=new Uint32Array(e.buffer,e.byteOffset,l);for(let g=0;g<l;g++){const m=c[g];if(m===0){r=0;continue}const f=m&255,p=m>>>8&255,d=m>>>16&255,b=m>>>24;s+=f+p+d+b,f<r&&(r=f),f>i&&(i=f),p<r&&(r=p),p>i&&(i=p),d<r&&(r=d),d>i&&(i=d),b<r&&(r=b),b>i&&(i=b)}u=l<<2}for(let l=u;l<e.length;l++){const c=e[l];s+=c,c<r&&(r=c),c>i&&(i=c)}o=r,a=i}}else for(let r=0;r<e.length;r++){const i=e[r];if(!Number.isFinite(i))throw new Error(`Model ${n} contains NaN or Inf values.`);s+=i,i<o&&(o=i),i>a&&(a=i)}if(console.log(`${t?"Probability":"Segmentation"} volume sum: ${s}`),s===0)throw new Error(t?"Model probability output is all zeros. This may indicate an issue with WebGPU shaders or input data.":"Model produced an empty segmentation (all zeros). This may indicate an issue with WebGPU shaders or input data.");if(t&&(o<-1e-6||a>1+1e-6))throw new Error(`Probability output values out of range [0, 1]: min=${o.toFixed(4)}, max=${a.toFixed(4)}`);return{sum:s,min:o,max:a}}function la(e,t,n,s,o=null,a=null){return Me(this,null,function*(){const r=!!(e&&typeof e.data=="function");let i,u;r?(console.log("Downloading segmentation data from GPU to CPU..."),i=yield e.data(),u=e.shape||a||[256,256,256],console.log("Data download complete. Starting CPU processing.")):(i=e,u=a||[256,256,256]),na(i);let l,c=!1;if(i instanceof Uint8Array)l=i,c=!r;else{let m=0;for(let f=0;f<i.length;f++)i[f]>m&&(m=i[f]);l=m<=255?new Uint8Array(i):new Uint32Array(i),c=!0}let g=null;if(s.isPostProcessEnable){console.log("Applying CPU-based connected-component labeling...");const m=performance.now(),f=new ta,p=[3,5,8,9,14,15,21,38,58,59,60,218,598,608],d=!!s.fillSuppressedWithNeighborLabel||p.includes(n.id),b=[5,14,15,58,59,60,598,608],M=A=>A>=1&&A<=34?1:A>=35&&A<=68?2:0,_=b.includes(n.id)?M:null,$=u[0]*u[1]*u[2],x=Math.max(1e5,Math.floor($*.01)),[S,h]=f.bwlabel(l,u,6,!1,!1,sa);if(g=f.getLabelMeta(h),S>x){const A=`Segmentation produced noise: ${S.toLocaleString()} disconnected regions (cap ${x.toLocaleString()}). The model output is unusable, so post-processing was aborted. Try re-running, switching backend (WebGPU/WebGL2), or another model.`;console.error("[postprocess] "+A);const y=new Error(A);throw y.code="SEGMENTATION_NOISE",y}if([1,7].includes(n.id)){const[P,U]=f.filter_clusters_by_rank(l,S,h,2,.02,u,d,8,!1,_);l=U,c=!0}else if([3,8,9,21,38,218].includes(n.id)){const A=new Set([1,2,5,6,13]),[y,C]=f.filter18ClassFromLabels(l,S,h,u,A,d,_,c);l=C,c=!0}else if([5,14,15,58,59,60,598,608].includes(n.id)){s.diagnoseEnclosedComponents&&f.diagnose_components(l,S,h,u,{label:`model${n.id}`,topN:60});const[A,y]=f.filterHierarchicalFromLabels(l,S,h,u,"all",!0,d,_,c);l=y,c=!0}else c||(l=l.slice(),c=!0),f.applyLargestBinaryMaskInPlace(l,S,h,u);const w=((performance.now()-m)/1e3).toFixed(4);console.log(`Connected-component labeling took: ${w} seconds.`)}switch(n.type){case"Brain_Masking":{const m=new Uint8Array(l.length);if(g&&g.runs){const f=g.runs,p=g.runLen;for(let d=0;d<p;d+=2){const b=f[d],M=f[d+1];for(let _=b;_<M;_++)l[_]!==0&&(m[_]=1)}}else for(let f=0;f<l.length;f++)m[f]=l[f]!==0?1:0;return m}case"Brain_Extraction":{const m=new Uint8Array(l.length),f=o?new Uint8Array(l.length):null;if(g&&g.runs){const p=g.runs,d=g.runLen;for(let b=0;b<d;b+=2){const M=p[b],_=p[b+1];for(let $=M;$<_;$++)l[$]!==0&&(m[$]=t[$],f&&(f[$]=1))}}else for(let p=0;p<l.length;p++){const d=l[p]!==0?1:0;m[p]=t[p]*d,f&&(f[p]=d)}return o&&(o.mask=f),m}default:return l instanceof Uint8Array?l:new Uint8Array(l)}})}const ua={WEBGPU:"webgpu"};function ca(e,t){return{startTime:Date.now(),Model_Name:(e==null?void 0:e.modelName)||"Unknown",Execution_Mode:t,TF_Backend:"webgpu",isModelFullVol:null,No_SubVolumes:1,Brainchop_Ver:"FullVolume",Input_Shape:null,Output_Shape:null,Channel_Last:null,Model_Param:null,Model_Layers:null,Actual_Labels:null,Expect_Labels:null,NumLabels_Match:null,Missing_Labels:null,Preprocess_t:null,Setup_t:null,Inference_t:null,Postprocess_t:null,Display_t:null,Status:null,Error_Type:null,Extra_Err_Info:null}}function fa(e,t,n,s=null){e.Expect_Labels=t,e.Actual_Labels=n,e.NumLabels_Match=t===n,s&&s.length>0&&(e.Missing_Labels=s.join(", "))}function pa(e,t,n,s=null){e.Inference_t=t,e.Postprocess_t=n,s&&(s.Preprocess_t!==void 0&&(e.Preprocess_t=s.Preprocess_t),s.Setup_t!==void 0&&(e.Setup_t=s.Setup_t),s.Display_t!==void 0&&(e.Display_t=s.Display_t)),e.Status="OK"}function ma(e,t,n=null){e.Inference_t=1/0,e.Postprocess_t=1/0,e.Status="Fail",e.Error_Type=(t==null?void 0:t.message)||String(t),n&&(e.Extra_Err_Info=n)}const Wt=1e-8;function ln(e,t,n){return Math.max(t,Math.min(n,e))}function da(e){return e.outputType==="probability"&&e.probabilityPostprocess==="cat-lite"}function ga(e,t,n){const[s,o,a]=e,r=s.length,i=new Uint8Array(r);let u=0;for(let x=0;x<r;x++)Math.max(0,s[x])+Math.max(0,o[x])+Math.max(0,a[x])>=n&&(i[x]=1,u++);const[l,c,g]=t;if(l<2||c<2||g<1)return{componentCount:0,removedVoxels:0,supportMask:i};const m=l===256&&c===256,f=new Uint32Array(u),p=l*c;let d=0,b=0,M=0,_=0;for(let x=0;x<r;x++){if(i[x]!==1)continue;_++;const S=d;f[d++]=x,i[x]=2;for(let h=S;h<d;h++){const w=f[h],A=m?w&255:w%l,y=m?w>>>8&255:Math.floor(w/l)%c;A>0&&i[w-1]===1&&(i[w-1]=2,f[d++]=w-1),A+1<l&&i[w+1]===1&&(i[w+1]=2,f[d++]=w+1),y>0&&i[w-l]===1&&(i[w-l]=2,f[d++]=w-l),y+1<c&&i[w+l]===1&&(i[w+l]=2,f[d++]=w+l),w>=p&&i[w-p]===1&&(i[w-p]=2,f[d++]=w-p),w+p<r&&i[w+p]===1&&(i[w+p]=2,f[d++]=w+p)}d-S>=M-b&&(b=S,M=d)}let $=0;if(_>1)for(let x=0;x<d;x++){if(x>=b&&x<M)continue;const S=f[x];s[S]=0,o[S]=0,a[S]=0,i[S]=0,$++}return{componentCount:_,removedVoxels:$,supportMask:i}}function _a([e,t,n],s,{minSupport:o,priorPower:a},r=null){const i=!!(r&&o>0&&o<=1);let u=0;for(let d=0;d<s.length;d++){if(i&&r[d]!==2)continue;const b=Math.max(0,e[d])+Math.max(0,t[d])+Math.max(0,n[d]);Math.min(b,1)>=o&&Number.isFinite(s[d])&&u++}const l=new Uint32Array(u),c=new Float64Array(u),g=u*36<=192*Ot(2,20)?u:0,m=new Float64Array(g),f=new Float64Array(g),p=new Float64Array(g);for(let d=0,b=0;d<s.length;d++){if(i&&r[d]!==2)continue;const M=Math.max(0,e[d]),_=Math.max(0,t[d]),$=Math.max(0,n[d]),x=M+_+$,S=Math.min(x,1);!(S>=o)||!Number.isFinite(s[d])||(l[b]=d,c[b]=s[d]-0,g&&(m[b]=S*Math.pow($/x,a),f[b]=S*Math.pow(M/x,a),p[b]=S*Math.pow(_/x,a)),b++)}return{indices:l,values:c,weightCsf:m,weightGm:f,weightWm:p,volumes:[e,t,n]}}function po([e,t,n],s,o,a){const r=Math.max(0,e[s]),i=Math.max(0,t[s]),u=Math.max(0,n[s]),l=r+i+u,c=Math.min(l,1);a[0]=c*Math.pow(u/l,o),a[1]=c*Math.pow(r/l,o),a[2]=c*Math.pow(i/l,o)}function mo({indices:e,values:t,weightCsf:n,weightGm:s,weightWm:o,volumes:a},{minSeparation:r,sigmaFloor:i,priorPower:u},l=!1){const c=n.length===0?new Float64Array(3):null,g=new Float64Array(3),m=new Float64Array(3);for(let b=0;b<t.length;b++){const M=t[b];c&&po(a,e[b],u,c);const _=c?c[0]:n[b],$=c?c[1]:s[b],x=c?c[2]:o[b];g[0]+=_*M,m[0]+=_,g[1]+=$*M,m[1]+=$,g[2]+=x*M,m[2]+=x}if(m.some(b=>b<100))return{applied:!1,reason:"too few high-confidence tissue voxels"};const f=Array.from(g,(b,M)=>b/m[M]);if(!(f[0]+r<f[1]&&f[1]+r<f[2]))return{applied:!1,reason:`implausible T1 tissue ordering (${f.map(b=>b.toFixed(3)).join(", ")})`};if(l)return{applied:!0,means:f};const p=new Float64Array(3);for(let b=0;b<t.length;b++){const M=t[b];c&&po(a,e[b],u,c);const _=c?c[0]:n[b],$=c?c[1]:s[b],x=c?c[2]:o[b],S=M-f[0],h=M-f[1],w=M-f[2];p[0]+=_*S*S,p[1]+=$*h*h,p[2]+=x*w*w}const d=Array.from(p,(b,M)=>Math.sqrt(Math.max(i*i,b/m[M])));return{applied:!0,means:f,sigmas:d}}function ba(e,t,n,s,{minSupport:o,block:a,smoothingPasses:r},i=null){const[u,l,c]=e,[g,m,f]=n,p=!!(i&&o>0&&o<=1),d=Math.ceil(g/a),b=Math.ceil(m/a),M=Math.ceil(f/a),_=d*b*M,$=new Float64Array(_),x=new Float64Array(_),[S,h,w]=s,A=g*m;for(let X=0;X<f;X++){const B=Math.floor(X/a);for(let R=0;R<m;R++){const q=Math.floor(R/a);let j=X*A+R*g;const O=(B*b+q)*d;for(let F=0;F<g;F++,j++){if(p&&i[j]!==2)continue;const E=Math.max(0,u[j]),K=Math.max(0,l[j]),Y=Math.max(0,c[j]),Z=E+K+Y,pe=Math.min(Z,1);if(!(pe>=o)||!Number.isFinite(t[j]))continue;const ve=E/Z,fe=K/Z,be=Y/Z,V=be*S+ve*h+fe*w,ie=pe*(be*be+ve*ve+fe*fe),k=O+Math.floor(F/a);$[k]+=ie*(t[j]-V),x[k]+=ie}}}let y=new Float32Array(_),C=new Uint8Array(_);for(let X=0;X<_;X++)x[X]>1&&(y[X]=$[X]/x[X],C[X]=1);for(let X=0;X<r;X++){const B=new Float32Array(_),R=new Uint8Array(_);for(let q=0;q<M;q++)for(let j=0;j<b;j++)for(let O=0;O<d;O++){let F=0,E=0;for(let Y=-1;Y<=1;Y++){const Z=q+Y;if(!(Z<0||Z>=M))for(let pe=-1;pe<=1;pe++){const ve=j+pe;if(!(ve<0||ve>=b))for(let fe=-1;fe<=1;fe++){const be=O+fe;if(be<0||be>=d)continue;const V=(Z*b+ve)*d+be;C[V]&&(F+=y[V],E++)}}}const K=(q*b+j)*d+O;E>0&&(B[K]=F/E,R[K]=1)}y=B,C=R}const P=(X,B)=>{const R=new Int32Array(X),q=new Int32Array(X),j=new Float32Array(X);for(let O=0;O<X;O++){const F=ln((O+.5)/a-.5,0,B-1);R[O]=Math.floor(F),q[O]=Math.min(R[O]+1,B-1),j[O]=F-R[O]}return{low:R,high:q,t:j}},U=P(g,d),z=P(m,b),D=P(f,M),N=g===256&&m===256;return X=>{let B,R,q;if(N)q=X>>>16,R=X>>>8&255,B=X&255;else{q=Math.floor(X/A);const te=X-q*A;R=Math.floor(te/g),B=te-R*g}const j=U.low[B],O=U.high[B],F=U.t[B],E=(D.low[q]*b+z.low[R])*d,K=(D.low[q]*b+z.high[R])*d,Y=(D.high[q]*b+z.low[R])*d,Z=(D.high[q]*b+z.high[R])*d,pe=y[E+j]+(y[E+O]-y[E+j])*F,ve=y[K+j]+(y[K+O]-y[K+j])*F,fe=y[Y+j]+(y[Y+O]-y[Y+j])*F,be=y[Z+j]+(y[Z+O]-y[Z+j])*F,V=z.t[R],ie=pe+(ve-pe)*V,k=fe+(be-fe)*V;return ie+(k-ie)*D.t[q]}}function An(e,t,n,s){const o=(e-t)/n;return-.5*o*o-s}function ha(e,t,n,s={}){const{catLiteMinSupport:o=.03,catLitePurePriorPower:a=3,catLiteMinMeanSeparation:r=.035,catLiteSigmaFloor:i=.025,catLiteBiasBlockSize:u=16,catLiteBiasSmoothPasses:l=3,catLitePriorStrength:c=.8,catLiteIntensityStrength:g=.75,catLiteMixelPrior:m=.35,catLiteCsfWmMixelPrior:f=6,catLiteSpatialWeight:p=.25}=s,d={priorPower:a,minSupport:o,minSeparation:r,sigmaFloor:i},[b,M,_]=n,$=t.length,x=o>0&&o<=1,{componentCount:S,removedVoxels:h,supportMask:w}=ga(e,n,o),A={componentCount:S,removedVoxels:h},y=_a(e,t,d,w),C=mo(y,d,!0);if(!C.applied)return{tissues:e,stats:C};const P=ba(e,t,n,C.means,{minSupport:o,block:u,smoothingPasses:l},w);for(let H=0;H<y.indices.length;H++){const J=y.indices[H];y.values[H]=t[J]-P(J)}const U=mo(y,d);if(!U.applied)return{tissues:e,stats:U};y.indices=y.weightCsf=y.weightGm=y.weightWm=null;const[z,D,N]=U.means,[X,B,R]=U.sigmas,[q,j,O]=e,F=new Float32Array($),E=new Float32Array($),K=new Float32Array($),Y=b*M,Z=.5*(z+D),pe=.5*(D+N),ve=.5*(z+N),fe=Math.sqrt(Ot(D-z,2)/12+.5*(Ot(X,2)+Ot(B,2))),be=Math.sqrt(Ot(N-D,2)/12+.5*(Ot(B,2)+Ot(R,2))),V=Math.sqrt(Ot(N-z,2)/12+.5*(Ot(X,2)+Ot(R,2))),ie=Math.log(X),k=Math.log(B),te=Math.log(R),I=Math.log(fe),me=Math.log(be),le=Math.log(V);let re=0;for(let H=0;H<_;H++)for(let J=0;J<M;J++){let G=H*Y+J*b;for(let $e=0;$e<b;$e++,G++){if(x&&w[G]!==2)continue;const ye=Math.max(0,q[G]),Se=Math.max(0,j[G]),Ce=Math.max(0,O[G]),Ge=ye+Se+Ce,Re=Math.min(Ge,1);if(!(Re>=o)||!Number.isFinite(t[G]))continue;let Xe=ye/Ge,Ee=Se/Ge,Be=Ce/Ge;if(p>0){let bt=0,zt=0,wt=0,et=0;if($e>0){const ze=G-1,Je=Math.max(0,q[ze]),v=Math.max(0,j[ze]),W=Math.max(0,O[ze]),L=Je+v+W;L>Wt&&(bt+=Je/L,zt+=v/L,wt+=W/L,et++)}if($e+1<b){const ze=G+1,Je=Math.max(0,q[ze]),v=Math.max(0,j[ze]),W=Math.max(0,O[ze]),L=Je+v+W;L>Wt&&(bt+=Je/L,zt+=v/L,wt+=W/L,et++)}if(J>0){const ze=G-b,Je=Math.max(0,q[ze]),v=Math.max(0,j[ze]),W=Math.max(0,O[ze]),L=Je+v+W;L>Wt&&(bt+=Je/L,zt+=v/L,wt+=W/L,et++)}if(J+1<M){const ze=G+b,Je=Math.max(0,q[ze]),v=Math.max(0,j[ze]),W=Math.max(0,O[ze]),L=Je+v+W;L>Wt&&(bt+=Je/L,zt+=v/L,wt+=W/L,et++)}if(H>0){const ze=G-Y,Je=Math.max(0,q[ze]),v=Math.max(0,j[ze]),W=Math.max(0,O[ze]),L=Je+v+W;L>Wt&&(bt+=Je/L,zt+=v/L,wt+=W/L,et++)}if(H+1<_){const ze=G+Y,Je=Math.max(0,q[ze]),v=Math.max(0,j[ze]),W=Math.max(0,O[ze]),L=Je+v+W;L>Wt&&(bt+=Je/L,zt+=v/L,wt+=W/L,et++)}if(et){const ze=1-p;Xe=ze*Xe+p*bt/et,Ee=ze*Ee+p*zt/et,Be=ze*Be+p*wt/et}}const ke=y.values[re++],Qe=c*Math.log(Be+Wt)+g*An(ke,z,X,ie),tt=c*Math.log(Xe+Wt)+g*An(ke,D,B,k),rt=c*Math.log(Ee+Wt)+g*An(ke,N,R,te),nt=c*Math.log(m*2*Math.sqrt(Be*Xe)+Wt)+g*An(ke,Z,fe,I),At=c*Math.log(m*2*Math.sqrt(Xe*Ee)+Wt)+g*An(ke,pe,be,me),Kt=c*Math.log(f*2*Math.sqrt(Be*Ee)*Ot(1-Xe,2)+Wt)+g*An(ke,ve,V,le),St=Math.max(Qe,tt,rt,nt,At,Kt),Zt=Math.exp(Qe-St),Qt=Math.exp(tt-St),Yt=Math.exp(rt-St),Bt=Math.exp(nt-St),_t=Math.exp(At-St),dt=Math.exp(Kt-St),Ct=Zt+Qt+Yt+Bt+_t+dt,Mt=ln((ke-z)/(D-z),0,1),rn=ln((N-ke)/(N-D),0,1),an=ln((ke-z)/(N-z),0,1),Gt=(Qt+Bt*Mt+_t*rn)/Ct,Jt=(Yt+_t*(1-rn)+dt*an)/Ct,kt=(Zt+Bt*(1-Mt)+dt*(1-an))/Ct,Ft=Math.min(Be,Ee),ot=ln((Ft-Xe)/(Ft+Wt),0,1),Ht=ln(4*Be*Ee,0,1),ut=Ot(1-Ht*ot,2);F[G]=ln(Gt*Re*ut,0,1);const ue=(1-Gt*ut)/Math.max(Jt+kt,Wt);E[G]=ln(Jt*ue*Re,0,1),K[G]=ln(kt*ue*Re,0,1)}}return{tissues:[F,E,K],stats:{applied:!0,tissueMeans:{csf:z,gray:D,white:N},tissueSigmas:{csf:X,gray:B,white:R},supportCleanup:A}}}const wa={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function va({srcImg:e,srcDims:t,srcAffine:n,dstDims:s,dstAffine:o,isLabel:a,isProbability:r=!1,dstTypedArrayKind:i="Uint8Array",labelLut:u=null}){const[l,c,g]=s,[m,f,p]=t,d=o,b=(q,j)=>[q[0][0]*j[0]+q[0][1]*j[1]+q[0][2]*j[2]+q[0][3],q[1][0]*j[0]+q[1][1]*j[1]+q[1][2]*j[2]+q[1][3],q[2][0]*j[0]+q[2][1]*j[1]+q[2][2]*j[2]+q[2][3]],M=Rr();if(!qr(M,Ir(...n[0],...n[1],...n[2],...n[3])))throw new Error("Segmentation affine is not invertible");const _=(q,j)=>[q[0]*j[0]+q[1]*j[1]+q[2]*j[2]+q[3],q[4]*j[0]+q[5]*j[1]+q[6]*j[2]+q[7],q[8]*j[0]+q[9]*j[1]+q[10]*j[2]+q[11]],$=q=>_(M,b(d,q)),x=$([0,0,0]),S=$([1,0,0]).map((q,j)=>q-x[j]),h=$([0,1,0]).map((q,j)=>q-x[j]),w=$([0,0,1]).map((q,j)=>q-x[j]),A=l*c*g,y=m*f,C=(q,j,O)=>q>=0&&q<m&&j>=0&&j<f&&O>=0&&O<p?e[q+j*m+O*y]:0;if(a){const q=fe=>{const be=Math.sqrt(fe[0]*fe[0]+fe[1]*fe[1]+fe[2]*fe[2]);if(be<=1.5001)return[0];const V=be<=3.5001?4:be<=5.5001?6:8,ie=new Array(V);for(let k=0;k<V/2;k++){const te=(k+.5)/V;ie[2*k]=-te,ie[2*k+1]=te}return ie},j=q(S),O=q(h),F=q(w),E=[];for(const fe of j)for(const be of O)for(const V of F)E.push([fe*S[0]+be*h[0]+V*w[0],fe*S[1]+be*h[1]+V*w[1],fe*S[2]+be*h[2]+V*w[2]]);const K=new Int16Array(A),Y=u?u.length:0;let Z=0;const pe=E.length;let ve=0;if(pe===1)for(let fe=0;fe<g;fe++)for(let be=0;be<c;be++){let V=x[0]+be*h[0]+fe*w[0],ie=x[1]+be*h[1]+fe*w[1],k=x[2]+be*h[2]+fe*w[2];for(let te=0;te<l;te++){let I=C(Math.floor(V+.5),Math.floor(ie+.5),Math.floor(k+.5));u&&I>=0&&I<Y&&(I=u[I]),I>Z&&(Z=I),K[ve++]=I,V+=S[0],ie+=S[1],k+=S[2]}}else{const fe=new Int32Array(pe),be=new Int32Array(pe);for(let V=0;V<g;V++)for(let ie=0;ie<c;ie++){let k=x[0]+ie*h[0]+V*w[0],te=x[1]+ie*h[1]+V*w[1],I=x[2]+ie*h[2]+V*w[2];for(let me=0;me<l;me++){let le=0;for(let J=0;J<pe;J++){const G=E[J],$e=C(Math.floor(k+G[0]+.5),Math.floor(te+G[1]+.5),Math.floor(I+G[2]+.5));let ye=-1;for(let Se=0;Se<le;Se++)if(fe[Se]===$e){ye=Se;break}ye<0?(fe[le]=$e,be[le]=1,le++):be[ye]++}let re=fe[0],H=be[0];for(let J=1;J<le;J++)be[J]>H&&(H=be[J],re=fe[J]);u&&re>=0&&re<Y&&(re=u[re]),re>Z&&(Z=re),K[ve++]=re,k+=S[0],te+=S[1],I+=S[2]}}}return{img:K,hdrPatch:{datatypeCode:4,numBitsPerVoxel:16,scl_slope:1,scl_inter:0,cal_min:0,cal_max:Z,intent_code:1002}}}const P=wa[i]||Uint8Array,U=r?255:1,z=r?.5:0,D=r?new Uint8Array(A):new P(A),X=r?(q,j,O)=>{const F=Math.floor(q),E=Math.floor(j),K=Math.floor(O),Y=q-F,Z=j-E,pe=O-K,ve=C(F,E,K),fe=C(F+1,E,K),be=C(F,E+1,K),V=C(F+1,E+1,K),ie=C(F,E,K+1),k=C(F+1,E,K+1),te=C(F,E+1,K+1),I=C(F+1,E+1,K+1),me=ve+Y*(fe-ve),le=be+Y*(V-be),re=ie+Y*(k-ie),H=te+Y*(I-te),J=me+Z*(le-me),G=re+Z*(H-re);return J+pe*(G-J)}:(q,j,O)=>C(Math.round(q),Math.round(j),Math.round(O));let B=0;for(let q=0;q<g;q++)for(let j=0;j<c;j++){let O=x[0]+j*h[0]+q*w[0],F=x[1]+j*h[1]+q*w[1],E=x[2]+j*h[2]+q*w[2];for(let K=0;K<l;K++)D[B++]=X(O,F,E)*U+z,O+=S[0],F+=S[1],E+=S[2]}const R=r?{datatypeCode:2,numBitsPerVoxel:8,cal_min:0,cal_max:1,scl_slope:1/U,scl_inter:0}:{scl_slope:1,scl_inter:0};return{img:D,hdrPatch:R}}function xa(e){return new Worker(""+new URL("postprocess-worker-B3M6a4-n.js",import.meta.url).href,{name:e==null?void 0:e.name})}let fn=null,ya=1;const Gn=new Map;function $a(e){for(const{reject:t}of Gn.values())t(e);Gn.clear()}function go(e){if(fn){try{fn.terminate()}catch(t){}fn=null}e&&$a(e)}function Sa(){return typeof Worker=="undefined"?null:(fn||(fn=new xa({}),fn.onmessage=e=>{const{id:t,ok:n,result:s,error:o}=e.data||{},a=Gn.get(t);if(a)if(Gn.delete(t),n)a.resolve(s);else{const r=new Error((o==null?void 0:o.message)||"Postprocessing worker failed");o!=null&&o.code&&(r.code=o.code),a.reject(r)}},fn.onerror=e=>{const t=(e==null?void 0:e.message)||"Postprocessing worker crashed";go(new Error(t))},fn.onmessageerror=()=>{go(new Error("Postprocessing worker message deserialization failed"))}),fn)}function Ts(e,t,n=[]){const s=Sa();if(!s)return null;const o=ya++;return new Promise((a,r)=>{Gn.set(o,{resolve:a,reject:r});try{s.postMessage({id:o,cmd:e,payload:t},n)}catch(i){Gn.delete(o),r(i)}})}function Io(e){return e&&ArrayBuffer.isView(e)&&e.buffer instanceof ArrayBuffer&&e.byteOffset===0&&e.byteLength===e.buffer.byteLength}function Ma(i,u,l,c){return Me(this,arguments,function*(e,t,n,s,o=null,a=null,{transferLabels:r=!1}={}){if(typeof Worker=="undefined")return la(e,t,n,s,o,a);const g=(n==null?void 0:n.type)==="Brain_Extraction",m={nativeLabels:e,niftiImage:g?t:null,modelEntry:{id:n==null?void 0:n.id,type:n==null?void 0:n.type},opts:{isPostProcessEnable:!!(s!=null&&s.isPostProcessEnable),fillSuppressedWithNeighborLabel:!!(s!=null&&s.fillSuppressedWithNeighborLabel),diagnoseEnclosedComponents:!!(s!=null&&s.diagnoseEnclosedComponents)},wantMask:!!o,shape:a||[256,256,256]},f=r&&Io(e)?[e.buffer]:[],p=yield Ts("processSegmentation",m,f);return o&&p.mask&&(o.mask=p.mask),p.outImg})}function ka(e){return Me(this,null,function*(){return typeof Worker=="undefined"?va(e):Ts("resliceToNative",e,[])})}const _o=({csf:e,gray:t,white:n})=>`CSF=${e.toFixed(3)} GM=${t.toFixed(3)} WM=${n.toFixed(3)}`;function Pa(r,i,u,l,c){return Me(this,arguments,function*(e,t,n,s,o,a=[256,256,256]){var d;const g=[];for(let b=0;b<3;b++)g.push(yield o(e[b],b)),e[b]=null;const m={catLitePurePriorPower:n==null?void 0:n.catLitePurePriorPower,catLitePriorStrength:n==null?void 0:n.catLitePriorStrength,catLiteIntensityStrength:n==null?void 0:n.catLiteIntensityStrength,catLiteMixelPrior:n==null?void 0:n.catLiteMixelPrior,catLiteCsfWmMixelPrior:n==null?void 0:n.catLiteCsfWmMixelPrior,catLiteSpatialWeight:n==null?void 0:n.catLiteSpatialWeight,catLiteMinSupport:n==null?void 0:n.catLiteMinSupport,catLiteSigmaFloor:n==null?void 0:n.catLiteSigmaFloor,catLiteBiasBlockSize:n==null?void 0:n.catLiteBiasBlockSize,catLiteBiasSmoothPasses:n==null?void 0:n.catLiteBiasSmoothPasses,catLiteMinMeanSeparation:n==null?void 0:n.catLiteMinMeanSeparation,catLiteMinPureVoxels:n==null?void 0:n.catLiteMinPureVoxels};let f,p;if(typeof Worker=="undefined")({tissues:f,stats:p}=ha(g,t,a,m));else{const b=new Set,M=[];for(const _ of[...g,t])Io(_)&&!b.has(_.buffer)&&(b.add(_.buffer),M.push(_.buffer));({tissues:f,stats:p}=yield Ts("catLite",{priors:g,intensity:t,shape:a,options:m},M))}if(s.Output_Type="Continuous tissue probability",s.Tissue="GM/WM/CSF",s.Softmax_Temperature=(d=n==null?void 0:n.softmaxTemperature)!=null?d:1,p.applied){s.Partial_Volume="CAT-lite mixed-class PVE",s.CAT_Lite_Tissue_Means=_o(p.tissueMeans),s.CAT_Lite_Tissue_Sigmas=_o(p.tissueSigmas);const{componentCount:b,removedVoxels:M}=p.supportCleanup;console.log(`[CAT-lite] means ${s.CAT_Lite_Tissue_Means}; sigmas ${s.CAT_Lite_Tissue_Sigmas}; removed ${M} voxels outside the largest of ${b} support components`)}else s.Partial_Volume=`Skipped: ${p.reason}`,console.warn(`[CAT-lite] skipped: ${p.reason}`);return f})}const mn=[1,3,5,7,13,19,31,19,13,7,5,3,1],Aa=[16,8,4,2,1,16,8,4,2,1,16,8,4,2,1,16,8,4,2,1,16,8,4,2,1],Ca={model16chan18cls:{dilations:mn,activation:"gelu_tanh",fullVolume:!0},model24chan18cls_gdice_prio:{dilations:mn,activation:"gelu_tanh",fullVolume:!0},model6chan3cls:{dilations:mn,activation:"gelu_tanh",fullVolume:!0},model24chan104cls_synth:{dilations:mn,activation:"gelu_tanh",fullVolume:!0},model24chan104cls_infant_refit_synth:{dilations:mn,activation:"gelu_tanh",fullVolume:!0},model24chan104cls_v3_repbn:{dilations:mn,activation:"gelu_tanh",fullVolume:!0},model24chan50cls:{dilations:mn,activation:"gelu_tanh",fullVolume:!0},model32chan18cls:{dilations:mn,activation:"gelu_tanh",fullVolume:!1},mindgrab:{dilations:Aa,activation:"gelu_tanh",fullVolume:!0},model5_gw_ae:{dilations:[1,2,4,8,16,8,4,2,1],activation:"relu",fullVolume:!0},model11_gw_ae:{dilations:[1,2,4,8,4,2,2,1],activation:"relu",noSafetensors:!0,fullVolume:!0},model30chan18cls:{dilations:[1,2,4,8,16,8,4,2,1],activation:"elu",fullVolume:!0},model30chan50cls:{dilations:[1,2,4,8,16,8,4,2,1],activation:"elu",fullVolume:!0}};function za(e){const t=String(e.path||"").match(/\/models\/([^/]+)\//);return t?t[1]:null}function Os(e){const t=za(e);if(!t)return null;const n=Ca[t];return!n||n.noSafetensors?null:at({name:t},n)}function Ba(e){const t=e&32768?-1:1,n=(e&31744)>>10,s=e&1023;return n===0?t*Math.pow(2,-14)*(s/1024):n===31?s?NaN:t*(1/0):t*Math.pow(2,n-15)*(1+s/1024)}function Go(e){const t=new DataView(e),n=Number(t.getBigUint64(0,!0)),s=JSON.parse(new TextDecoder().decode(new Uint8Array(e,8,n))),o=8+n,a={};for(const[r,i]of Object.entries(s)){if(r==="__metadata__"){a.__metadata__=i;continue}const[u,l]=i.data_offsets,c=i.shape.reduce((m,f)=>m*f,1);let g;if(i.dtype==="F32")g=new Float32Array(e.slice(o+u,o+l));else if(i.dtype==="F16"){const m=new Uint16Array(e.slice(o+u,o+l));g=new Float32Array(c);for(let f=0;f<c;f++)g[f]=Ba(m[f])}else if(i.dtype==="BF16"){const m=new Uint16Array(e.slice(o+u,o+l));g=new Float32Array(c);const f=new Uint32Array(1),p=new Float32Array(f.buffer);for(let d=0;d<c;d++)f[0]=m[d]<<16,g[d]=p[0]}else throw new Error(`safetensors: unsupported dtype ${i.dtype} for tensor '${r}'`);if(g.length!==c)throw new Error(`safetensors: tensor '${r}' has ${g.length} values, shape says ${c}`);a[r]={dtype:i.dtype,shape:i.shape,data:g}}return a}function To(e){const t=[],n=[],s=[];for(const[a,r]of Object.entries(e)){if(a==="__metadata__")continue;const i=a.match(/^m\.model\.(\d+)\.(weight|bias)$/);if(!i)continue;const u=Number(i[1]),l=i[2]==="weight";if(r.shape.length===5){const[c,g,m,f,p]=r.shape,b={idx:u,outC:c,inC:g,kd:m,kh:f,kw:p,is1x1:m===1&&f===1&&p===1,w:r.data,bias:null},M=t.find(_=>_.idx===u);M?Object.assign(M,b):t.push(b)}else r.shape.length===1&&s.push({idx:u,isW:l,data:r.data,len:r.shape[0]})}t.sort((a,r)=>a.idx-r.idx);for(const a of s){const r=t.find(u=>u.idx===a.idx);if(r&&!a.isW){r.bias=a.data;continue}if(r&&a.isW)continue;let i=n.find(u=>u.idx===a.idx);i||(i={idx:a.idx,scale:null,bias:null},n.push(i)),a.isW?i.scale=a.data:i.bias=a.data}n.sort((a,r)=>a.idx-r.idx);let o=null;return t.length&&t[t.length-1].is1x1&&(o=t.pop()),{convs:t,affines:n,classifier:o}}function Fa(e,t){var n;if(t==null)return e;if(t.length!==((n=e.classifier)==null?void 0:n.outC)||!Array.from(t).every(Number.isFinite))throw new Error("Classifier bias must contain one finite value per exported class");return e.classifier.bias=Float32Array.from(t),e}function La(e,t){const n=t.cs,s=t.chan,{convs:o,affines:a,classifier:r}=e,i=f=>27*f*n;let u=0;const l=[];o.forEach((f,p)=>{const d=p===0?1:n,b={wq:u/4,inCS:d};u+=i(d),f.bias&&(b.biasQ=u/4,u+=n),l.push(b)}),a.forEach((f,p)=>{l[p]=l[p]||{},l[p].affQ=u/4,u+=n,l[p].affBiasQ=u/4,u+=n});let c=-1,g=-1;r&&(c=u,u+=s*t.nclass,u=Math.ceil(u/4)*4,r.bias&&(g=u,u+=t.nclass),u=Math.ceil(u/4)*4);const m=new Float32Array(u);if(o.forEach((f,p)=>{const d=l[p],b=d.inCS,M=d.wq*4,_=f.kd*f.kh*f.kw;if(f.outC>s||p>0&&f.inC>s)throw new Error(`layer ${p}: shape ${f.outC}x${f.inC} exceeds CHAN ${s}`);for(let $=0;$<f.outC;$++){for(let x=0;x<f.inC;x++)for(let S=0;S<f.kd;S++)for(let h=0;h<f.kh;h++)for(let w=0;w<f.kw;w++){const A=f.kd===3?S*9+h*3+w:0,y=((($*f.inC+x)*f.kd+S)*f.kh+h)*f.kw+w;m[M+(A*b+x)*n+$]=f.w[y]}f.bias&&(m[d.biasQ*4+$]=f.bias[$])}if(_!==27&&_!==1)throw new Error(`layer ${p}: kernel ${f.kd}x${f.kh}x${f.kw} unsupported`)}),a.forEach((f,p)=>{const d=l[p];for(let b=0;b<s;b++)m[d.affQ*4+b]=f.scale?f.scale[b]:0,m[d.affBiasQ*4+b]=f.bias?f.bias[b]:0}),r)for(let f=0;f<t.nclass;f++){for(let p=0;p<s;p++)m[c+p*t.nclass+f]=r.w[f*r.inC+p];r.bias&&(m[g+f]=r.bias[f])}return{data:m,offsets:{layers:l,clsFloat:c,clsBiasFloat:g}}}function Oo(e,t={}){const{convs:n,affines:s,classifier:o}=e,a=n[0].outC,r=Math.ceil(a/4)*4,i=n.some(l=>l.bias),u=at({chan:a,cs:r,planes:r/4,nclass:o?o.outC:0,nhidden:n.length-1,norm:s.length?"gn":i?"none":"gn",affine:s.length>0,convBias:i,classifierBias:!!(o&&o.bias),centeredVariance:!1,eps:1e-5},t);if(u.nclass>256)throw new Error(`classifier has ${u.nclass} classes; the RGBA8 label texture holds at most 256`);if(!u.activation)throw new Error("descriptor needs an explicit `activation`");if(!u.dilations)throw new Error("descriptor needs an explicit `dilations` array");if(u.dilations.length!==n.length)throw new Error(`descriptor has ${u.dilations.length} dilations for ${n.length} convs`);return u}const ls=(e,t)=>Array.from({length:e},(n,s)=>t(s)).join(""),bo=["x","y","z","w"];function Ua(e){const t=`fn act4(x : vec4<f32>) -> vec4<f32> {
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
`;default:throw new Error(`webgpu-native: unknown activation '${e}'; add it deliberately`)}}function Wa(e,t,n){const s=e.cs/4,o=l=>ls(n,l),a=l=>ls(s,l),r=a(l=>`          let w${l} = vec4<f32>(wts4[wq + ${l}u]);
`),i=l=>`        { let wq = wq0 + ((tap * cin) + ic4 * 4u + ${l}u) * (CS / 4u);
`+r+o(c=>a(g=>`          a${c}${g} = fma(w${g}, vec4<f32>(s${c}.${bo[l]}), a${c}${g});
`))+`        }
`,u=(e.convBias?a(l=>`  let b${l} = vec4<f32>(wts4[params.bias_off / 4u + ${l}u]);
`)+o(l=>a(c=>`  a${l}${c} = a${l}${c} + b${c};
`)):"")+(e.norm==="none"?o(l=>a(c=>`  a${l}${c} = act4(a${l}${c});
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
`+o(l=>a(c=>`  var a${l}${c} = vec4<f32>(0.0);
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
`+a(c=>`          a${l}${c} = fma(w${c}, s, a${l}${c});
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
`+u+`  let obase = (u32(z) * u32(NY) + u32(y)) * u32(NX) + u32(x0);
`+o(l=>`  { let o = (obase + ${l}u) * CS;
`+a(c=>ls(4,g=>`    dst[o + ${4*c+g}u] = f16(a${l}${c}.${bo[g]});
`))+`  }
`)+`}
`}function Ra(e){return`var<workgroup> wg_sum : array<f32, ${e} * CS>;
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
`}function qa(e){return`@compute @workgroup_size(${e}, 1, 1)
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
`}function Ia(e){return`@group(0) @binding(5) var<storage, read_write> labels : array<u32>;
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
`}function Ga(e,t){var a;const{localX:n,vox:s,momLX:o}=t;if(e.cs%4!==0||e.cs>256)throw new Error(`webgpu-native: channel stride ${e.cs} unsupported`);if(e.nx%(n*s)||e.nx%n||e.nx%o)throw new Error(`webgpu-native: preset ${n}x${s}/${o} does not tile a ${e.nx}-voxel row`);if(o<e.cs)throw new Error(`webgpu-native: moments workgroup ${o} < ${e.cs} channels`);return`enable f16;
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
`+Ua(e.activation)+Wa(e,n,s)+(e.norm==="gn"?Ra(o)+qa(n):"")+Ia(n)}const us={amd:{localX:256,vox:1},apple:{localX:64,vox:2},default:{localX:64,vox:2}};function Ta(){var e;try{const t=new URLSearchParams(((e=globalThis.location)==null?void 0:e.search)||"").get("wgPreset"),n=t&&/^(\d+)x([124])$/.exec(t);return n?{localX:Number(n[1]),vox:Number(n[2]),source:"url"}:null}catch(t){return null}}function Oa(e,t){var i;const n=String(((i=e.adapterInfo)==null?void 0:i.vendor)||"").toLowerCase(),s=e.limits,o=u=>u.localX<=s.maxComputeInvocationsPerWorkgroup&&u.localX<=s.maxComputeWorkgroupSizeX&&t.nx%(u.localX*u.vox)===0;let a=Ta()||vt(at({},us[n]||us.default),{source:n||"default"});o(a)||(console.warn(`[WebGPU-native] preset ${a.localX}x${a.vox} does not fit this device; using the default`),a=vt(at({},us.default),{source:"fallback"}));let r=0;for(const u of[256,128,64,32])if(u<=a.localX&&u>=t.cs&&t.nx%u===0&&u<=s.maxComputeInvocationsPerWorkgroup&&u*t.cs*8<=s.maxComputeWorkgroupStorageSize){r=u;break}if(!r)throw new Error(`webgpu-native: no moments workgroup fits ${t.cs} channels on this device`);return vt(at({},a),{momLX:r,vendor:n||"unknown"})}const xt=256;function ho(e){if(typeof Float16Array!="undefined")return new Uint16Array(new Float16Array(e).buffer);const t=new Uint16Array(e.length),n=new Float32Array(1),s=new Uint32Array(n.buffer);for(let o=0;o<e.length;o++){n[0]=e[o];const a=s[0],r=a>>>16&32768,i=a>>>23&255,u=a&8388607;if(i===255){t[o]=r|31744|(u?512:0);continue}const l=i-127+15;if(l>=31){t[o]=r|31744;continue}if(l<=0){if(l<-10){t[o]=r;continue}const m=u|8388608,f=14-l;let p=m>>>f;const d=m&(1<<f)-1,b=1<<f-1;(d>b||d===b&&p&1)&&p++,t[o]=r|p;continue}let c=l<<10|u>>>13;const g=u&8191;(g>4096||g===4096&&c&1)&&c++,t[o]=r|c}return t}function Na(e,t){var n;return t.quantize8Bit?"8-bit quantized V4 runner requested":(n=e.features)!=null&&n.has("shader-f16")?t.outputType==="probability"?"probability output (CAT-lite) is not ported yet":t.enableTTA?"test-time augmentation uses the tinygrad TTA runner":t.forceFP32?"model entry forces fp32":t.webgpu_safetensor?Os(t)?null:"no descriptor in webgl2_runners/descriptors.js":"no safetensors weights":"device lacks shader-f16"}function Ea(e,t){const n=e.nx*e.ny*e.nz,s=e.nx/t*e.ny*e.nz;return 2*n*e.cs*2+n*2+2*n*4+(s+1)*e.cs*2*4}const wo=new WeakMap;function Da(e,t,n){return Me(this,null,function*(){let s=wo.get(e);s||(s=new Map,wo.set(e,s));const o=`${t.chan}|${t.cs}|${t.nclass}|${t.norm}|${t.affine}|${t.convBias}|${t.clsBias}|${t.activation}|${t.eps}|${n.localX}x${n.vox}x${n.momLX}`;let a=s.get(o);return a||(a=Me(null,null,function*(){const r=e.createShaderModule({code:Ga(t,n)}),i=["read-only-storage","storage","read-only-storage","uniform","storage","storage","read-only-storage","read-only-storage"],u=e.createBindGroupLayout({entries:i.map((m,f)=>({binding:f,visibility:GPUShaderStage.COMPUTE,buffer:{type:m}}))}),l=e.createPipelineLayout({bindGroupLayouts:[u]}),c=["conv","classify",...t.norm==="gn"?["moments","moments_finish","norm"]:[]],g=Object.fromEntries(yield Promise.all(c.map(m=>Me(null,null,function*(){return[m,yield e.createComputePipelineAsync({layout:l,compute:{module:r,entryPoint:m}})]}))));return{bgl:u,pipelines:g}}).catch(r=>{throw s.delete(o),r}),s.set(o,a)),a})}function Va(e,t,n,s){return Me(this,null,function*(){const o=Os(s);if(!o)throw new Error(`webgpu-native: no descriptor for ${s.path}`);const a=t instanceof Uint8Array?t:new Uint8Array(t),r=Fa(To(Go(a.buffer.slice(a.byteOffset,a.byteOffset+a.byteLength))),s.classifierBias),i=Oo(r,{nx:xt,ny:xt,nz:xt,activation:o.activation,dilations:o.dilations});if(!i.nclass)throw new Error("webgpu-native: model has no classifier");if(i.convBias&&i.affine)throw new Error("webgpu-native: conv bias together with a GroupNorm affine is not supported");const u=Oa(e,i),l=xt*xt*xt,c=l*i.cs*2,g=e.limits;if(c>g.maxStorageBufferBindingSize||c>g.maxBufferSize)throw new Error(`webgpu-native: a ${c>>>20} MiB activation exceeds this device's buffer limits`);console.log(`[WebGPU-native] ${o.name}: ${i.chan}ch (stride ${i.cs}) ${i.nclass}cls norm=${i.norm} affine=${i.affine} act=${i.activation} | preset ${u.localX}x${u.vox} (moments ${u.momLX}, ${u.source}) | ~${Math.round(Ea(i,u.momLX)/1048576)} MiB`);const m=La(r,i),{layers:f,clsFloat:p,clsBiasFloat:d}=m.offsets;e.pushErrorScope("validation"),e.pushErrorScope("out-of-memory");let b=2;try{const{bgl:M,pipelines:_}=yield Da(e,i,u),$=(Y,Z)=>e.createBuffer({size:Y,usage:Z}),x=GPUBufferUsage.STORAGE,S=xt/u.momLX*xt*xt,h=ho(m.data),w=$(l*2,x|GPUBufferUsage.COPY_DST),A=$(c,x),y=$(c,x),C=$(Math.ceil(h.byteLength/16)*16,x|GPUBufferUsage.COPY_DST),P=$((S+1)*i.cs*2*4,x),U=$(l*4,x|GPUBufferUsage.COPY_SRC),z=$(l*4,GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST);e.queue.writeBuffer(C,0,h);const D=(Y,Z,pe)=>{const ve=$(32,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST);return e.queue.writeBuffer(ve,0,pe),e.createBindGroup({layout:M,entries:[{binding:0,resource:{buffer:Y}},{binding:1,resource:{buffer:Z}},{binding:2,resource:{buffer:C}},{binding:3,resource:{buffer:ve}},{binding:4,resource:{buffer:P}},{binding:5,resource:{buffer:U}},{binding:6,resource:{buffer:C}},{binding:7,resource:{buffer:Y}}]})},N=Y=>{const Z=new Uint32Array(8);return Z[0]=Y.dilation|0,Z[1]=Y.weightOff>>>0,Z[2]=Y.affineOff>>>0,Z[3]=Y.biasOff>>>0,Z[4]=Y.inChannels>>>0,Z[5]=Y.inStride>>>0,Z[6]=S,Z},X=[];let B=w,R=A;f.forEach((Y,Z)=>{const pe=Z===0;X.push(D(B,R,N({dilation:i.dilations[Z],weightOff:Y.wq*4,affineOff:Y.affQ!==void 0?Y.affQ*4:0,biasOff:Y.biasQ!==void 0?Y.biasQ*4:Y.affBiasQ!==void 0?Y.affBiasQ*4:0,inChannels:pe?1:i.cs,inStride:pe?1:i.cs}))),B=R,R=R===A?y:A});const q=D(B,R,N({weightOff:p,biasOff:d>=0?d:0}));b=0;const j=yield e.popErrorScope(),O=yield e.popErrorScope();if(j||O)throw new Error(`webgpu-native setup failed: ${(j||O).message}`);const F=xt/(u.localX*u.vox),E=xt/u.localX,K=xt/u.momLX;return function(Z){return Me(this,null,function*(){if(Z.length!==l)throw new Error(`webgpu-native: input has ${Z.length} voxels, expected ${l}`);e.pushErrorScope("validation"),e.queue.writeBuffer(w,0,ho(Z));for(const V of X){const ie=e.createCommandEncoder(),k=ie.beginComputePass();k.setBindGroup(0,V),k.setPipeline(_.conv),k.dispatchWorkgroups(F,xt,xt),i.norm==="gn"&&(k.setPipeline(_.moments),k.dispatchWorkgroups(K,xt,xt),k.setPipeline(_.moments_finish),k.dispatchWorkgroups(1,1,1),k.setPipeline(_.norm),k.dispatchWorkgroups(E,xt,xt)),k.end(),e.queue.submit([ie.finish()])}const pe=e.createCommandEncoder(),ve=pe.beginComputePass();ve.setBindGroup(0,q),ve.setPipeline(_.classify),ve.dispatchWorkgroups(E,xt,xt),ve.end(),pe.copyBufferToBuffer(U,0,z,0,l*4),e.queue.submit([pe.finish()]),yield z.mapAsync(GPUMapMode.READ);const fe=new Float32Array(new Uint32Array(z.getMappedRange()));z.unmap();const be=yield e.popErrorScope();if(be)throw new Error(`webgpu-native inference failed: ${be.message}`);return[fe]})}}finally{for(;b-- >0;)yield e.popErrorScope().catch(()=>{})}})}const Ns="v1",Ha="brainchop:webgpu-v4-profile:",Xa=720*60*60*1e3,Mn=256*64,sn=4,No=2,vo=sn*64*No,xo=16,ja=120,Ya=140,Ms=220,ks=550,Ka=450,Ln=64,Ps=8,ns=Ln+2*Ps,As=24,Et=12,Bn=6,Cs=9*As*3*Bn,zs=Cs/2,os=new Map,yo=new WeakMap,cs=new WeakMap,Za=/\b(?:nvidia|geforce|rtx|gtx|quadro|tesla|amd|radeon|ryzen|intel|arc|uhd|iris|apple|qualcomm|adreno|arm|mali|immortalis|powervr|microsoft|swiftshader|llvmpipe|mesa)\b/i;function Eo(e){var t;return(t=e==null?void 0:e.navigator)!=null?t:globalThis.navigator}function Es(e){var t;if(e&&"storage"in e)return e.storage;try{return(t=globalThis.localStorage)!=null?t:null}catch(n){return null}}function Do(e){var t;if(e&&typeof e.search=="string")return e.search;try{return((t=globalThis.location)==null?void 0:t.search)||""}catch(n){return""}}function Yn(e){var t;return typeof(e==null?void 0:e.now)=="function"?e.now():typeof((t=globalThis.performance)==null?void 0:t.now)=="function"?globalThis.performance.now():Date.now()}function Vo(e){return typeof(e==null?void 0:e.wallNow)=="function"?e.wallNow():Date.now()}function $o(e,t=void 0){var o,a,r,i,u;const n=String((u=(i=t!=null?t:(a=(o=globalThis.navigator)==null?void 0:o.userAgentData)==null?void 0:a.platform)!=null?i:(r=globalThis.navigator)==null?void 0:r.platform)!=null?u:""),s=String(e||"");return/Linux/i.test(n)&&!/Android/i.test(n)&&/\bMesa\b/i.test(s)&&/\bIntel\b/i.test(s)&&/\b(?:WHL|KBL|CFL|SKL|CML)\b/i.test(s)}function Ds(e){const t=String(e||"").trim().toLowerCase();return t==="single"||t==="pipelined"||t==="paced"||t==="calibrate"?t:t==="chunked"?"paced":""}function Vs(e=void 0){var s;let t=e;if(t===void 0)try{t=((s=globalThis.location)==null?void 0:s.search)||""}catch(o){t=""}const n={mode:"",exec:""};if(!t)return n;try{const o=new URLSearchParams(t),a=(o.get("webgpuMode")||"").trim().toLowerCase();a==="low-memory"||a==="lowmem"||a==="low_memory"||a==="128m"?n.mode="low-memory":a==="standard"||a==="std"?n.mode="standard":a==="recalibrate"||a==="reset"?n.mode="recalibrate":a==="probe"&&(n.mode="probe"),n.exec=Ds(o.get("webgpuExec"))}catch(o){}return n}function Qa(e,t=void 0){if(!e||!e.quantize8Bit)return e;const n=Vs(t);if(!n.mode&&!n.exec)return e;const s=at({},e);return n.mode==="low-memory"?(s.forceLowMem128=!0,s.webgpuExecMode=n.exec||"paced",s.__v4PlanReasonOverride="url-override"):n.mode==="standard"?(s.forceLowMem128=!1,n.exec&&(s.webgpuExecMode=n.exec),s.__v4PlanReasonOverride="url-override"):n.mode==="recalibrate"?(s.recalibrate=!0,n.exec&&(s.webgpuExecMode=n.exec)):n.mode==="probe"?(s.recalibrate=!0,s.forceProbe=!0,n.exec&&(s.webgpuExecMode=n.exec)):n.exec&&(s.webgpuExecMode=n.exec,s.__v4PlanReasonOverride="url-override"),s}function Ja(e,t=null){var s,o;if(!e)return"";if(typeof e.__glRenderer=="string")return e.__glRenderer;let n="";try{const a=Eo(t),r=!!(a&&/Firefox/i.test(a.userAgent||"")),i=typeof globalThis.OffscreenCanvas!="undefined"?new globalThis.OffscreenCanvas(1,1):typeof globalThis.document!="undefined"?globalThis.document.createElement("canvas"):null,u=(s=i==null?void 0:i.getContext)==null?void 0:s.call(i,"webgl2",{powerPreference:"high-performance"});if(u){if(r)n=String(u.getParameter(u.RENDERER)||"");else{const l=u.getExtension("WEBGL_debug_renderer_info");n=String((l?u.getParameter(l.UNMASKED_RENDERER_WEBGL):u.getParameter(u.RENDERER))||"")}(o=u.getExtension("WEBGL_lose_context"))==null||o.loseContext()}}catch(a){}return e.__glRenderer=n,n}function Hn(e,t=null){var x,S,h,w,A,y;const n=(e==null?void 0:e.__adapterInfo)||(e==null?void 0:e.adapterInfo)||{},s=String(n.vendor||"").trim().toLowerCase(),o=String(n.architecture||"").trim().toLowerCase(),a=Eo(t),r=String((S=(x=t==null?void 0:t.userAgent)!=null?x:a==null?void 0:a.userAgent)!=null?S:""),i=String((y=(A=(w=t==null?void 0:t.platform)!=null?w:(h=a==null?void 0:a.userAgentData)==null?void 0:h.platform)!=null?A:a==null?void 0:a.platform)!=null?y:""),u=/Android/i.test(r)||/Android/i.test(i),l=!u&&(s==="apple"||/Mac|iPhone|iPad|iPod/i.test(`${i} ${r}`)&&!["intel","amd","nvidia","microsoft"].includes(s)),c=!l&&!u&&(/Win/i.test(i)||/Windows/i.test(r)),g=!l&&!c&&!u&&(/Linux/i.test(i)||/Linux/i.test(r)),m=typeof(e==null?void 0:e.__glRenderer)=="string"?e.__glRenderer:!l&&!s&&!(t!=null&&t.skipGlProbe)?Ja(e,t):"",f=`${n.device||""} ${n.description||""} ${m}`.trim(),p=s||(/\bintel\b/i.test(m)?"intel":/\bmicrosoft\b|\bbasic render\b/i.test(m)?"microsoft":/\bnvidia\b/i.test(m)?"nvidia":/\bamd\b|\bradeon\b/i.test(m)?"amd":""),d=c&&(p==="microsoft"||p==="intel"&&!/\bArc\b/i.test(f)&&(/^gen-(9|11|12lp)/i.test(o)||/(?:UHD|HD)\s+Graphics|Iris(?:\(R\))?\s*(?:Plus|Xe)|Pentium|Celeron/i.test(f))),b=g&&(s==="intel"&&/^gen-9/i.test(o)||$o(m,i||"Linux")||$o(n.description||"",i||"Linux")||p==="intel"&&/\b(?:WHL|KBL|CFL|SKL|CML|UHD\s+Graphics\s+6[0-3]0|HD\s+Graphics\s+(?:5[0-3]0|6[0-3]0))\b/i.test(f)),M=`${s} ${o} ${n.device||""} ${n.description||""} ${m}`.trim(),_=!l&&(M===""||/^(?:brave|unknown|generic|webgl|webgpu|default|\s)+$/i.test(M)||!Za.test(M)&&!/^gen-\d/i.test(o));return{os:l?"apple":c?"windows":u?"android":g?"linux":"other",vendor:p,arch:o,desc:f,glRenderer:m,isApple:l,isWindows:c,isLinux:g,isAndroid:u,isWindowsSharedIgpu:d,isLinuxIntelGen9:b,isMaskedGpu:_}}function Hs(e,t=null,n=null){var f,p,d,b;const s=t||Hn(e,n),o=(e==null?void 0:e.limits)||{},a=(e==null?void 0:e.__adapterInfo)||(e==null?void 0:e.adapterInfo)||{},r=Number(o.maxStorageBufferBindingSize||0),i=Number(o.maxBufferSize||0),u=(p=(f=e==null?void 0:e.features)==null?void 0:f.has)!=null&&p.call(f,"shader-f16")?1:0,c=!!((b=(d=e==null?void 0:e.features)==null?void 0:d.has)!=null&&b.call(d,"subgroups"))?`${a.subgroupMinSize|0}-${a.subgroupMaxSize|0}`:"none",m=([a.vendor||"",a.architecture||"",a.device||"",a.description||"",s.glRenderer||""].map(M=>String(M).trim().toLowerCase().replace(/\s+/g," ")).filter(Boolean).join("/")||"masked").slice(0,96);return[Ns,s.os,`sb=${r}`,`mb=${i}`,`f16=${u}`,`sg=${c}`,m].join("|")}function Xs(e){return`${Ha}${e}`}function Ho(e){return e?(e.__v4Calib instanceof Map||(e.__v4Calib=new Map),e.__v4Calib):null}function fs(e,t){return!e||typeof e!="object"||e.version!==Ns||typeof e.ts!="number"||!Number.isFinite(e.ts)?!1:t-e.ts<=Xa}function Xo(e,t,n=null){const s=Vo(n),o=Ho(e),a=o==null?void 0:o.get(t);if(fs(a,s))return a;const r=Es(n);let i=!1;if(r&&typeof r.getItem=="function")try{const u=r.getItem(t);if(i=!0,u){const l=JSON.parse(u);if(fs(l,s))return o==null||o.set(t,l),l}}catch(u){}if(!i){const u=os.get(t);if(fs(u,s))return o==null||o.set(t,u),u}return null}function jo(e,t,n,s=null){var i;const o=at({version:Ns,ts:Vo(s)},n);(i=Ho(e))==null||i.set(t,o);const a=Es(s);let r=!1;if(a&&typeof a.setItem=="function")try{a.setItem(t,JSON.stringify(o)),r=!0}catch(u){}return r||os.set(t,o),o}function ei(e,t=null,n=null){const s=t||(e?Xs(Hs(e,null,n)):null);if(e&&(e.__v4Calib instanceof Map&&(s?e.__v4Calib.delete(s):e.__v4Calib.clear()),delete e.__v4WinCalibrated,delete e.__v4WinFast,delete e.__v4MsPerStrip,delete e.__v4Recalibrated,delete e.__v4ProbeDone),s){os.delete(s);const o=Es(n);if(o&&typeof o.removeItem=="function")try{o.removeItem(s)}catch(a){}}else os.clear()}function ti(e,t="device-lost",n=null){if(!e)return null;const s=Hn(e,n),o=Hs(e,s,n),a=Xs(o),r=Xo(e,a,n)||{};return jo(e,a,vt(at({},r),{safeMode:"low-memory-paced",safeModeReason:t}),n)}function So(e){return!Number.isFinite(e)||e>=ks?"very-slow":e>=Ms?"moderate":"fast"}function ni(e){const t=Et*ns,n=Et*Ln,s=(a,r)=>Array.from({length:a},(i,u)=>r(u)).join("");if(e){const a=()=>{let i="";for(let u=0;u<Bn;u+=2){const l=u*4,c=u/2;i+=`      {
        let wp0 = w_eff_u[wbu + ${c}u];
        let wp1 = w_eff_u[wbu + ${3+c}u];
        let wp2 = w_eff_u[wbu + ${6+c}u];
        let w0a = u4_lo(wp0);
        let w0b = u4_hi(wp0);
        let w1a = u4_lo(wp1);
        let w1b = u4_hi(wp1);
        let w2a = u4_lo(wp2);
        let w2b = u4_hi(wp2);
        a_${l}     = fma(vn, vec4<f16>(w0a.x), fma(vc, vec4<f16>(w1a.x), fma(vp, vec4<f16>(w2a.x), a_${l})));
        a_${l+1} = fma(vn, vec4<f16>(w0a.y), fma(vc, vec4<f16>(w1a.y), fma(vp, vec4<f16>(w2a.y), a_${l+1})));
        a_${l+2} = fma(vn, vec4<f16>(w0a.z), fma(vc, vec4<f16>(w1a.z), fma(vp, vec4<f16>(w2a.z), a_${l+2})));
        a_${l+3} = fma(vn, vec4<f16>(w0a.w), fma(vc, vec4<f16>(w1a.w), fma(vp, vec4<f16>(w2a.w), a_${l+3})));
        a_${l+4} = fma(vn, vec4<f16>(w0b.x), fma(vc, vec4<f16>(w1b.x), fma(vp, vec4<f16>(w2b.x), a_${l+4})));
        a_${l+5} = fma(vn, vec4<f16>(w0b.y), fma(vc, vec4<f16>(w1b.y), fma(vp, vec4<f16>(w2b.y), a_${l+5})));
        a_${l+6} = fma(vn, vec4<f16>(w0b.z), fma(vc, vec4<f16>(w1b.z), fma(vp, vec4<f16>(w2b.z), a_${l+6})));
        a_${l+7} = fma(vn, vec4<f16>(w0b.w), fma(vc, vec4<f16>(w1b.w), fma(vp, vec4<f16>(w2b.w), a_${l+7})));
      }
`}return i},r=(i,u)=>`    for (var ic : u32 = 0u; ic < ${Et}u; ic = ic + 1u) {
      let base = row_off + ic * ${ns}u;
      let uL = ${i}[base - 2u];
      let uN = ${i}[base - 1u];
      let uC = ${i}[base];
      let uP = ${i}[base + 1u];
      let uR = ${i}[base + 2u];
      let u_neg = (uL >> 24u) | (uN << 8u);
      let u_pos = (uP >> 8u) | (uR << 24u);
      let vn = vec4<f16>(vec2<f16>(unpack2x16float(((u_neg & 0x00FF00FFu) << 2u) | 0x3C003C00u)), vec2<f16>(unpack2x16float(((u_neg >> 6u) & 0x03FC03FCu) | 0x3C003C00u))) - vec4<f16>(1.02734375h);
      let vc = vec4<f16>(vec2<f16>(unpack2x16float(((uC & 0x00FF00FFu) << 2u) | 0x3C003C00u)), vec2<f16>(unpack2x16float(((uC >> 6u) & 0x03FC03FCu) | 0x3C003C00u))) - vec4<f16>(1.02734375h);
      let vp = vec4<f16>(vec2<f16>(unpack2x16float(((u_pos & 0x00FF00FFu) << 2u) | 0x3C003C00u)), vec2<f16>(unpack2x16float(((u_pos >> 6u) & 0x03FC03FCu) | 0x3C003C00u))) - vec4<f16>(1.02734375h);
      let wbu = wbu_tap + (${u}u + ic) * 9u;
${a()}    }
`;return`enable f16;
@group(0) @binding(0) var<storage, read> act8_0 : array<u32>;
@group(0) @binding(1) var<storage, read> act8_1 : array<u32>;
@group(0) @binding(2) var<storage, read_write> y8_0 : array<u32>;
@group(0) @binding(3) var<storage, read_write> y8_1 : array<u32>;
@group(0) @binding(4) var<uniform> w_eff_u : array<vec4<u32>, ${zs}>;

fn u4_lo(p : vec4<u32>) -> vec4<f16> {
  return vec4<f16>(vec2<f16>(unpack2x16float(p.x)), vec2<f16>(unpack2x16float(p.y)));
}
fn u4_hi(p : vec4<u32>) -> vec4<f16> {
  return vec4<f16>(vec2<f16>(unpack2x16float(p.z)), vec2<f16>(unpack2x16float(p.w)));
}

@compute @workgroup_size(64, 4, 1)
fn main(@builtin(local_invocation_id) lid : vec3<u32>,
        @builtin(workgroup_id) wid : vec3<u32>) {
  let x4 = lid.x;
  let x_pad = x4 + ${Ps}u;
  let y = (wid.y * 4u + lid.y) & 255u;
  let z = wid.z & ${sn-1}u;
${s(As,i=>`  var a_${i} = vec4<f16>(0.0h);
`)}
  for (var tap_yz : u32 = 0u; tap_yz < 9u; tap_yz = tap_yz + 1u) {
    let dz = tap_yz / 3u;
    let dy = tap_yz - dz * 3u;
    let z_src = (z + dz + ${sn-1}u) & ${sn-1}u;
    let y_src = (y + dy * 5u + 251u) & 255u;
    let row_off = (z_src * 256u + y_src) * ${t}u + x_pad;
    let wbu_tap = tap_yz * 216u;
${r("act8_0",0)}${r("act8_1",Et)}  }

  let y_base = (z * 256u + y) * ${n}u + x4;
${s(Et,i=>`  y8_0[y_base + ${i*Ln}u] = pack4x8unorm(vec4<f32>(a_${i}) * 0.5 + vec4<f32>(0.5));
`)}${s(Et,i=>`  y8_1[y_base + ${i*Ln}u] = pack4x8unorm(vec4<f32>(a_${i+Et}) * 0.5 + vec4<f32>(0.5));
`)}
}`}const o=(a,r,i)=>{const u=r*4,l=()=>s(3,g=>{const m=r+g,f=u+g*4;return`      {
        let w0 = w_eff[wb + ${m}u];
        let w1 = w_eff[wb + ${Bn+m}u];
        let w2 = w_eff[wb + ${2*Bn+m}u];
        a_${f}     = fma(vn, vec4<f32>(w0.x), fma(vc, vec4<f32>(w1.x), fma(vp, vec4<f32>(w2.x), a_${f})));
        a_${f+1} = fma(vn, vec4<f32>(w0.y), fma(vc, vec4<f32>(w1.y), fma(vp, vec4<f32>(w2.y), a_${f+1})));
        a_${f+2} = fma(vn, vec4<f32>(w0.z), fma(vc, vec4<f32>(w1.z), fma(vp, vec4<f32>(w2.z), a_${f+2})));
        a_${f+3} = fma(vn, vec4<f32>(w0.w), fma(vc, vec4<f32>(w1.w), fma(vp, vec4<f32>(w2.w), a_${f+3})));
      }
`}),c=(g,m)=>`    for (var ic : u32 = 0u; ic < ${Et}u; ic = ic + 1u) {
      let base = row_off + ic * ${ns}u;
      let uL = ${g}[base - 2u];
      let uN = ${g}[base - 1u];
      let uC = ${g}[base];
      let uP = ${g}[base + 1u];
      let uR = ${g}[base + 2u];
      let u_neg = (uL >> 24u) | (uN << 8u);
      let u_pos = (uP >> 8u) | (uR << 24u);
      let vn = unpack4x8unorm(u_neg) - vec4<f32>(0.02745098);
      let vc = unpack4x8unorm(uC) - vec4<f32>(0.02745098);
      let vp = unpack4x8unorm(u_pos) - vec4<f32>(0.02745098);
      let wb = wb_tap + (${m}u + ic) * ${3*Bn}u;
${l()}    }
`;return`@compute @workgroup_size(64, 4, 1)
fn ${a}(@builtin(local_invocation_id) lid : vec3<u32>,
                @builtin(workgroup_id) wid : vec3<u32>) {
  let x4 = lid.x;
  let x_pad = x4 + ${Ps}u;
  let y = (wid.y * 4u + lid.y) & 255u;
  let z = wid.z & ${sn-1}u;
${s(Et,g=>`  var a_${u+g} = vec4<f32>(0.0);
`)}
  for (var tap_yz : u32 = 0u; tap_yz < 9u; tap_yz = tap_yz + 1u) {
    let dz = tap_yz / 3u;
    let dy = tap_yz - dz * 3u;
    let z_src = (z + dz + ${sn-1}u) & ${sn-1}u;
    let y_src = (y + dy * 5u + 251u) & 255u;
    let row_off = (z_src * 256u + y_src) * ${t}u + x_pad;
    let wb_tap = tap_yz * ${As*3*Bn}u;
${c("act8_0",0)}${c("act8_1",Et)}  }

  let y_base = (z * 256u + y) * ${n}u + x4;
${s(Et,g=>`  ${i}[y_base + ${g*Ln}u] = pack4x8unorm(a_${u+g} * 0.5 + vec4<f32>(0.5));
`)}
}`};return`@group(0) @binding(0) var<storage, read> act8_0 : array<u32>;
@group(0) @binding(1) var<storage, read> act8_1 : array<u32>;
@group(0) @binding(2) var<storage, read_write> y8_0 : array<u32>;
@group(0) @binding(3) var<storage, read_write> y8_1 : array<u32>;
@group(0) @binding(4) var<storage, read> w_eff : array<vec4<f32>>;

${o("main_lo",0,"y8_0")}

${o("main_hi",3,"y8_1")}`}function si(e,t){return Me(this,null,function*(){let n=yo.get(e);n||(n=new Map,yo.set(e,n));const s=t?"f16":"f32";let o=n.get(s);return o||(o=Me(null,null,function*(){const a=ni(t),r=e.createShaderModule({code:a});if(t){const g=yield e.createComputePipelineAsync({layout:"auto",compute:{module:r,entryPoint:"main"}});return{main:g,bgl:g.getBindGroupLayout(0)}}const i=e.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]}),u=e.createPipelineLayout({bindGroupLayouts:[i]}),[l,c]=yield Promise.all([e.createComputePipelineAsync({layout:u,compute:{module:r,entryPoint:"main_lo"}}),e.createComputePipelineAsync({layout:u,compute:{module:r,entryPoint:"main_hi"}})]);return{lo:l,hi:c,bgl:i}}).catch(a=>{throw n.delete(s),a}),n.set(s,o)),o})}function oi(n){return Me(this,arguments,function*(e,t={}){var r,i;const s=(t==null?void 0:t.env)||null;if(typeof(t==null?void 0:t.runProbe)=="function"){const u=yield t.runProbe(e),l=Math.max(.1,Number((r=u==null?void 0:u.probeMs)!=null?r:u)||.1),c=Number.isFinite(u==null?void 0:u.estFullLayerMs)?u.estFullLayerMs:l*(Mn/vo),g=(u==null?void 0:u.tier)||So(c);return{probeMs:l,warmupMs:Number((i=u==null?void 0:u.warmupMs)!=null?i:0),estFullLayerMs:c,msPerStrip24:c/Mn,tier:g,abortedEarly:!!(u!=null&&u.abortedEarly)}}const o=cs.get(e);if(o)return o;const a=Me(null,null,function*(){var _,$;const u=t.hasF16!==void 0?!!t.hasF16:!!(($=(_=e==null?void 0:e.features)==null?void 0:_.has)!=null&&$.call(_,"shader-f16")),l=GPUBufferUsage.STORAGE,c=GPUBufferUsage.COPY_DST,g=GPUBufferUsage.UNIFORM,m=sn*256*Et*ns*4,f=sn*256*Et*Ln*4,p=u?zs*16:Cs*16,d=[],b=typeof e.pushErrorScope=="function"&&typeof e.popErrorScope=="function";let M=!1;b&&(e.pushErrorScope("out-of-memory"),M=!0);try{const x=yield si(e,u),S=(B,R)=>{const q=e.createBuffer({size:B,usage:R});return d.push(q),q},h=S(m,l),w=S(m,l),A=S(f,l),y=S(f,l),C=S(p,(u?g:l)|c);if(u){const B=new Uint32Array(zs*4);B.fill(2703171871),e.queue.writeBuffer(C,0,B)}else{const B=new Float32Array(Cs*4);for(let R=0;R<B.length;R++)B[R]=R&1?-.01:.01;e.queue.writeBuffer(C,0,B)}const P=e.createBindGroup({layout:x.bgl,entries:[{binding:0,resource:{buffer:h}},{binding:1,resource:{buffer:w}},{binding:2,resource:{buffer:A}},{binding:3,resource:{buffer:y}},{binding:4,resource:{buffer:C}}]}),U=(B,R,q,j)=>{for(let O=0;O<j;O++)if(u){const F=B.beginComputePass();F.setPipeline(x.main),F.setBindGroup(0,P),F.dispatchWorkgroups(1,R,q),F.end()}else{const F=B.beginComputePass();F.setPipeline(x.lo),F.setBindGroup(0,P),F.dispatchWorkgroups(1,R,q),F.end();const E=B.beginComputePass();E.setPipeline(x.hi),E.setBindGroup(0,P),E.dispatchWorkgroups(1,R,q),E.end()}},z=e.createCommandEncoder();U(z,xo,1,1);const D=Yn(s);e.queue.submit([z.finish()]),yield e.queue.onSubmittedWorkDone();const N=Math.max(.1,Yn(s)-D);let X;if(N>=ja){const B=N*(Mn/xo);X={probeMs:N,warmupMs:N,estFullLayerMs:B,msPerStrip24:B/Mn,tier:"very-slow",abortedEarly:!0}}else{const B=()=>Me(null,null,function*(){const E=e.createCommandEncoder();U(E,64,sn,No);const K=Yn(s);return e.queue.submit([E.finish()]),yield e.queue.onSubmittedWorkDone(),Math.max(.1,Yn(s)-K)}),R=yield B(),q=R>=Ya?R:yield B(),j=Math.min(R,q),O=j*(Mn/vo),F=So(O);X={probeMs:j,warmupMs:N,estFullLayerMs:O,msPerStrip24:O/Mn,tier:F,abortedEarly:!1}}if(M){M=!1;const B=yield e.popErrorScope();if(B){const R=new Error(`WebGPU micro-probe out of memory: ${B.message||"allocation failed"}`);throw R.oomError=B,R}}return X}finally{for(const x of d)try{x.destroy()}catch(S){}if(M){M=!1;try{yield e.popErrorScope()}catch(x){}}}}).finally(()=>{cs.delete(e)});return cs.set(e,a),a})}function Cn(e){const t=Math.floor(e/1048576);return t<=128?"limit<=128M":`limit<=${t}M`}function ps(e,t){const n=Math.max(8,Number(t)||24)/24,s=Math.max(.35,Math.min(1,n*n));return Math.max(.005,Math.min(2,e*s))}function ms(e){return e.chan===15||Array.isArray(e.dilations)&&e.dilations.length>=25}function Yo(o,a){return Me(this,arguments,function*(e,t,n=null,s={}){var N,X,B,R,q,j,O,F,E,K,Y;const r=(s==null?void 0:s.env)||null,i=Hn(e,r),u=Hs(e,i,r),l=Xs(u),c=(e==null?void 0:e.limits)||{},g=Math.min((N=c.maxStorageBufferBindingSize)!=null?N:1/0,(X=c.maxBufferSize)!=null?X:1/0),m=t.cs>=8&&t.cs%4===0,f=Number((B=s.actBytes)!=null?B:0),p=Number((R=s.outBufBytes)!=null?R:0),d=(f>g||p>g)&&m,b=Vs(Do(r)),M=Ds(n==null?void 0:n.webgpuExecMode)||b.exec,_=(n==null?void 0:n.forceLowMem128)===!0?!0:(n==null?void 0:n.forceLowMem128)===!1?!1:b.mode==="low-memory"?!0:b.mode==="standard"?!1:null,$=!!(b.mode==="low-memory"||b.mode==="standard"||b.exec||(n==null?void 0:n.__v4PlanReasonOverride)==="url-override"),x=(n==null?void 0:n.forceProbe)===!0||b.mode==="probe"&&!(e!=null&&e.__v4ProbeDone);(b.mode==="recalibrate"||b.mode==="probe"||(n==null?void 0:n.recalibrate)===!0)&&!(e!=null&&e.__v4Recalibrated)&&(ei(e,l,r),e&&(e.__v4Recalibrated=!0));const h=({layout:Z,execMode:pe,reason:ve,tier:fe=null,probeMs:be=null,estFullLayerMs:V=null,msPerStrip:ie=null,fromCache:k=!1,safeMode:te=!1})=>{const I=d||Z==="LowMem128"&&m?"LowMem128":"std",me=I==="std"&&(pe==="paced"||pe==="calibrate");return e&&Number.isFinite(ie)&&(e.__v4MsPerStrip=ie),{layout:I,execMode:pe,chunkableStd:me,reason:ve,tier:fe,probeMs:be,estFullLayerMs:V,msPerStrip:ie,fromCache:k,safeMode:te,fingerprint:u,storageKey:l,platform:i}};if((n==null?void 0:n.__v4PlanReasonOverride)==="safe-mode-retry")return h({layout:m?"LowMem128":"std",execMode:"paced",reason:"safe-mode-retry",safeMode:!0});const w=x?null:Xo(e,l,r);if(!x&&(_!==null||M!=="")){let Z="std",pe="";d?(Z="LowMem128",pe=Cn(g)):_===!0?Z=m?"LowMem128":"std":_===!1?Z="std":i.isWindowsSharedIgpu&&t.cs>=24&&m?(Z="LowMem128",pe="hint:win-igpu"):i.isLinuxIntelGen9&&ms(t)&&m?(Z="LowMem128",pe="hint:intel-gen9"):(w==null?void 0:w.safeMode)==="low-memory-paced"&&m?(Z="LowMem128",pe="cached-safe-mode"):(w==null?void 0:w.tier)==="very-slow"&&m&&(Z="LowMem128",pe="cached-probe");let ve=M;ve||(_===!0?ve="paced":i.isApple?ve="single":i.isWindowsSharedIgpu||i.isLinuxIntelGen9?ve="paced":ve="pipelined");const fe=d&&_===!1?Cn(g):$?"url-override":pe||"override";return h({layout:Z,execMode:ve,reason:fe,tier:(q=w==null?void 0:w.tier)!=null?q:null,probeMs:(j=w==null?void 0:w.probeMs)!=null?j:null,estFullLayerMs:(O=w==null?void 0:w.estFullLayerMs)!=null?O:null,msPerStrip:w!=null&&w.msPerStrip24?ps(w.msPerStrip24,t.cs):null,fromCache:!!w,safeMode:(w==null?void 0:w.safeMode)==="low-memory-paced"})}if(i.isApple&&!x)return(w==null?void 0:w.safeMode)==="low-memory-paced"?h({layout:m?"LowMem128":"std",execMode:"paced",reason:"cached-safe-mode",fromCache:!0,safeMode:!0}):h({layout:d?"LowMem128":"std",execMode:"single",reason:d?Cn(g):"apple"});if(!x&&(w==null?void 0:w.safeMode)==="low-memory-paced")return i.isWindows&&e&&(e.__v4WinCalibrated=!0,e.__v4WinFast=!1),h({layout:m?"LowMem128":"std",execMode:"paced",reason:"cached-safe-mode",tier:(F=w.tier)!=null?F:"very-slow",probeMs:(E=w.probeMs)!=null?E:null,estFullLayerMs:(K=w.estFullLayerMs)!=null?K:null,msPerStrip:w.msPerStrip24?ps(w.msPerStrip24,t.cs):null,fromCache:!0,safeMode:!0});if(!x&&i.isLinuxIntelGen9){const Z=d||ms(t)&&m;return h({layout:Z?"LowMem128":"std",execMode:"paced",reason:d?Cn(g):"hint:intel-gen9"})}if(!x&&i.isWindowsSharedIgpu){e&&(e.__v4WinCalibrated=!0,e.__v4WinFast=!1);const Z=d||t.cs>=24&&m;return h({layout:Z?"LowMem128":"std",execMode:"paced",reason:d?Cn(g):"hint:win-igpu"})}let A=!x&&w&&w.tier&&Number.isFinite(w.estFullLayerMs)?w:null,y=!!A;if(!A)try{const Z=yield oi(e,{hasF16:s.hasF16,runProbe:s.runProbe,env:r});A=jo(e,l,{tier:Z.tier,probeMs:Number(Z.probeMs.toFixed(2)),estFullLayerMs:Number(Z.estFullLayerMs.toFixed(1)),msPerStrip24:Z.msPerStrip24,safeMode:null,safeModeReason:null},r),e&&(e.__v4ProbeDone=!0),y=!1}catch(Z){const pe=Ko(Z,e,!!(e!=null&&e.__isLost));if(pe==="device-lost")throw Z;const ve=pe==="oom"?"very-slow":"moderate";A={tier:ve,probeMs:null,estFullLayerMs:ve==="very-slow"?ks:Ms,msPerStrip24:(ve==="very-slow"?ks:Ms)/Mn},y=!1}i.isWindows&&e&&(e.__v4WinCalibrated=!0,e.__v4WinFast=A.tier==="fast");const C=Number(A.estFullLayerMs),P=!!(i.isMaskedGpu&&A.tier==="moderate"&&C>=Ka&&(t.cs>=24||ms(t))),U=d||m&&(A.tier==="very-slow"||P),z=M||(A.tier==="fast"?"pipelined":"paced");let D;return d?D=Cn(g):y?D="cached-probe":Number.isFinite(A.probeMs)?D=`probe:${Number(A.probeMs).toFixed(1)}ms`:D="probe:fallback",h({layout:U?"LowMem128":"std",execMode:z,reason:D,tier:A.tier,probeMs:(Y=A.probeMs)!=null?Y:null,estFullLayerMs:Number.isFinite(C)?C:null,msPerStrip:Number.isFinite(A.msPerStrip24)?ps(A.msPerStrip24,t.cs):null,fromCache:y,safeMode:!1})})}function ri(e,t=null){var o,a;const n=t?` | ${t.chan}ch(cs=${t.cs})/${(a=(o=t.dilations)==null?void 0:o.length)!=null?a:"?"}L`:"",s=Number.isFinite(e==null?void 0:e.estFullLayerMs)?` | est24ch=${Math.round(e.estFullLayerMs)}ms(${e.tier})`:"";return`[WebGPU-V4] layout=${e.layout} exec=${e.execMode} reason=${e.reason}${s}${n}`}function ai(e,t=10){return Me(this,null,function*(){return e?e.__isLost?!0:!e.lost||typeof e.lost.then!="function"?!1:Promise.race([e.lost.then(n=>(e.__isLost=!0,(n==null?void 0:n.reason)!=="destroyed")),new Promise(n=>setTimeout(()=>n(!!e.__isLost),t))]):!1})}function Ko(e,t=null,n=!1){if(n||t!=null&&t.__isLost)return"device-lost";if(e!=null&&e.oomError)return"oom";const s=String((e==null?void 0:e.message)||e||"");return/\bdevice(?:\s+was|\s+is)?\s+lost\b|gpu\s+reset|engine\s+reset|\btdr\b|instance\s+dropped|device\s+destroyed/i.test(s)?"device-lost":/out[- ]of[- ]memory|\boom\b|allocation\s+failed|failed\s+to\s+allocate|exceeds\s+device\s+limit|binding\s+size|maxbuffersize|maxstoragebufferbinding/i.test(s)?"oom":null}function ii(r){return Me(this,arguments,function*({device:e,modelEntry:t,runAttempt:n,requestFreshDevice:s,onRetry:o=null,env:a=null}){var i;try{return yield n(e,t,{isRetry:!1})}catch(u){const l=!!(t!=null&&t.quantize8Bit),c=yield ai(e,(i=a==null?void 0:a.lostWaitMs)!=null?i:10),g=Ko(u,e,c),m=(e==null?void 0:e.__v4LastPlan)||null,f=(m==null?void 0:m.layout)==="LowMem128"&&(m==null?void 0:m.execMode)==="paced"||(t==null?void 0:t.forceLowMem128)===!0&&Ds(t==null?void 0:t.webgpuExecMode)==="paced",d=Vs(Do(a)).mode==="standard"||(t==null?void 0:t.forceLowMem128)===!1;if(!l||!g||f||d||typeof s!="function")throw u;ti(e,g,a);const b=yield s({failedDevice:e,failureKind:g,error:u});if(!b||b.__isLost){const _=new Error(`WebGPU safe-mode retry aborted: could not acquire fresh GPUDevice after ${g} (${(u==null?void 0:u.message)||u})`);throw _.priorWebGpuError=u,_}const M=vt(at({},t),{forceLowMem128:!0,webgpuExecMode:"paced",__v4PlanReasonOverride:"safe-mode-retry"});o==null||o({failureKind:g,error:u,retryEntry:M,freshDevice:b});try{return yield n(b,M,{isRetry:!0})}catch(_){throw _&&typeof _=="object"&&(_.priorWebGpuError=u),_}}})}const li={grayMatter:[2,6,7,8,9,10,14,15,16,17],whiteMatter:[1,5],csf:[3,4,11,12]};function Un(e,t,n,s,o){var r;const a=Number((r=e[t])!=null?r:n);if(!Number.isFinite(a)||a<s||a>o)throw new Error(`${t} must be between ${s} and ${o}, got ${e[t]}`);return a}function ds(e,t,n){let s=0;for(const o of e||[]){if(!Number.isInteger(o)||o<0||o>=t||o>=32)throw new Error(`Invalid ${n} tissue label ${o} for ${t} classes`);s=(s|1<<o)>>>0}return s}function ui(e,t){if(!Number.isInteger(t)||t<2||t>32)throw new Error(`Native WebGL2 grouped probabilities require 2..32 classes, got ${t}`);const n=at(at({},li),e.probabilityGroups||{});return{temperature:Un(e,"softmaxTemperature",1,1e-6,1e6),supportTemperature:Un(e,"brainSupportTemperature",1,1e-6,1e6),supportPower:Un(e,"brainSupportPower",1,1e-6,1e6),sigma:Un(e,"partialVolumeSigma",0,0,2),grayMask:ds(n.grayMatter,t,"gray-matter"),whiteMask:ds(n.whiteMatter,t,"white-matter"),csfMask:ds(n.csf,t,"CSF")}}function gs(e,t,n,s,o,a){const[r,i,u]=n,l=r*i,c=o.length-1>>1;for(let g=0;g<u;g++)for(let m=0;m<i;m++)for(let f=0;f<r;f++){const p=g*l+m*r+f,d=s===1?f:s===r?m:g,b=s===1?r:s===r?i:u;let M=0;for(let _=-c;_<=c;_++){const $=d+_;$<0||$>=b||(M+=o[_+c]*e[p+_*s])}t[p]=M/a}}function ci(e,t,n,s){const[o,a,r]=n,i=o*a*r;if(!Array.isArray(e)||e.length!==3||e.some(f=>f.length!==i)||t.length!==i)throw new Error("Native WebGL2 tissue-prior dimensions do not match");const u=Un(s,"partialVolumeSigma",0,0,2),l=Un(s,"brainSupportPower",1,1e-6,1e6);let c=null,g=null,m=1;if(u>0){const f=Math.max(1,Math.round(3*u));g=new Float32Array(f*2+1),m=0;for(let p=-f;p<=f;p++){const d=Math.exp(-.5*p*p/(u*u));g[p+f]=d,m+=d}c=new Float32Array(i)}for(const f of e){let p=f;g&&(gs(f,c,n,1,g,m),gs(c,f,n,o,g,m),gs(f,c,n,o*a,g,m),p=c);for(let d=0;d<i;d++){const b=Math.pow(Math.max(0,Math.min(1,t[d])),l);f[d]=Math.max(0,Math.min(1,p[d]*b))}}return e}const T=256,mt=64,Vt=8,ft=mt+2*Vt,bn=ft*4,Ke=T*64,Vn=T*T*2,ss=9216,Zo=ss*8,Bs=[1,3,5,7,13,19,31,19,13,7,5,3,1],ct=(e,t)=>Array.from({length:e},(n,s)=>t(s)).join(""),Qo=280,Jo=150,fi=55,_s=112;let Fs=0;function Ls(e,t){const n=Math.floor(e/4),s=e%4,o=s===0?n:n+1,a=n,r=s*8,i=s===0?0:32-r;return(e&63|(o&15)<<6|(a&15)<<10|(r&31)<<14|(i&31)<<19|(t?1:0)<<24)>>>0}function er(e,t){var a,r;if(!((r=(a=e==null?void 0:e.features)==null?void 0:a.has)!=null&&r.call(a,"subgroups"))||t!=null&&t.disableSubgroups)return"none";if(t!=null&&t.forceSubgroupMode)return t.forceSubgroupMode;const n=e.__adapterInfo||e.adapterInfo||{},s=n.subgroupMinSize|0,o=n.subgroupMaxSize|0;return s===32&&o===32?"sg32":s===64&&o===64?"sg64":s>=32&&o<=64?"sg32_64":s>=8&&o<=32?"sg_small":"none"}function tr(e){switch(e){case"sg32":return"subgroups32";case"sg64":return"subgroups64-bf";case"sg32_64":return"subgroups32-64";case"sg_small":return"subgroups8-32";default:return"shared-8KiB"}}function nr(){return typeof requestAnimationFrame!="function"?new Promise(e=>setTimeout(e,0)):new Promise(e=>{let t=!1;const n=()=>{t||(t=!0,e())},s=setTimeout(n,16);requestAnimationFrame(()=>{clearTimeout(s),setTimeout(n,0)})})}function sr(e,t,n){let s=t,o=null,a=null,r=performance.now(),i=performance.now();function u(d,b,M){return Me(this,arguments,function*(c,g,m,{forceUiYield:f=!1,emitTick:p=!0}={}){o&&(yield o,o=null);const _=performance.now();e.queue.submit([c.finish()]);const $=e.createCommandEncoder(),x=e.queue.onSubmittedWorkDone().then(()=>{const h=performance.now(),w=Math.max(_,r),A=Math.max(0,h-w);h>r&&(r=h),g>=256&&A>.2&&(s=Math.max(.005,Math.min(2,.7*s+.3*(A/g))),e.__v4MsPerStrip=s)});o=a,a=x,p&&n&&n(m);const S=performance.now();return(f||S-i>=fi)&&(yield nr(),i=performance.now()),$})}function l(){return Me(this,null,function*(){o&&(yield o,o=null)})}return{submitChunk:u,waitBeforeFinalSubmit:l,getMsPerStrip:()=>s,setMsPerStrip:c=>{s=Math.max(.005,Math.min(2,c)),e.__v4MsPerStrip=s,r=performance.now()}}}function js(e,t,n){const s=e.isFull?Ke:e.mainStrips.length,o=e.isFull||!e.extStrips?0:e.extStrips.length,a=t+1<n?e.isFull?Ke:e.normStrips?e.normStrips.length:0:0,r=Math.max(16,Math.round(a*.12));return t===0?{convWork:Math.max(64,Math.round(s*.12)),normWork:r}:{convWork:s+o,normWork:r}}function or(e,t){let n=0;for(let o=0;o<t;o++){const a=js(e.layers[o],o,t);n+=a.convWork+a.normWork}const s=e.clsSkipped?e.clsStrips.length:Ke;return n+=Math.max(64,Math.round(s*.2)),Math.max(1,n)}const rr=new Float32Array(1),pi=new Uint32Array(rr.buffer);function Us(e){rr[0]=e;const t=pi[0],n=t>>>16&32768,s=t>>>23&255;let o=t&8388607;if(s===255)return n|31744|(o?512:0);let a=s-127+15;return a<=0?a<-10?n:(o=(o|8388608)>>>1-a,n|o+4096>>>13):a>=31?n|31744:n|Math.min(31744,(a<<10)+(o+4096>>>13))}function mi(e){const t=new Uint16Array(e.length);for(let n=0;n<e.length;n++)t[n]=Us(e[n]);return t}const dn=new Map,di=12,ar=new WeakMap,gi=new WeakMap;function _i(e){let t=2166136261,n=2654435769;const s=e.byteLength>>>2;if((e.byteOffset&3)===0){const o=new Uint32Array(e.buffer,e.byteOffset,s);for(let a=0;a<o.length;a++){const r=o[a];t=Math.imul(t^r,16777619)>>>0,n=Math.imul(n^(r<<13|r>>>19),2246822507)>>>0}}else for(let o=0;o<s*4;o+=4){const a=e[o]|e[o+1]<<8|e[o+2]<<16|e[o+3]<<24;t=Math.imul(t^a,16777619)>>>0,n=Math.imul(n^(a<<13|a>>>19),2246822507)>>>0}for(let o=s*4;o<e.byteLength;o++)t=Math.imul(t^e[o],16777619)>>>0;return`${e.byteLength}_${t.toString(16)}_${n.toString(16)}`}function bi(e,t,n,s){const o=s!=null&&s.classifierBias?JSON.stringify(s.classifierBias):"",a=`${_i(e)}|${n.chan}|${n.cs}|${n.nclass}|${n.norm}|${n.eps}|${o}`;if(dn.has(a)){const i=dn.get(a);return dn.delete(a),dn.set(a,i),i}const r=xi(t,n);if(dn.size>=di){const i=dn.keys().next().value;dn.delete(i)}return dn.set(a,r),r}function Ys(e,t){let n=e.get(t);return n||(n=new Map,e.set(t,n)),n}function Dt(e,t,n){let s=e.get(t);return s||(s=n().catch(o=>{throw e.delete(t),o}),e.set(t,s)),s}function rs(e,t){let n=0;return{alloc:(o,a)=>{const r=Math.max(16,Math.ceil(o/16)*16),i=e.createBuffer({size:r,usage:a});return t.push(i),n+=r,i},getBytes:()=>n,resetBytes:()=>{n=0}}}const pn=new WeakMap;function wn(e){const t=e?pn.get(e):null;if(t){pn.delete(e),t.inUse=!1;for(const n of t.buffers)n.destroy();t.buffers.length=0}}function ir(e,t,n){const s=pn.get(e);if(s){if(s.key===t&&!s.inUse)return s.inUse=!0,s;if(s.inUse){const r=n();return vt(at({key:t},r),{inUse:!0,pooled:!1})}pn.delete(e);for(const r of s.buffers)r.destroy();s.buffers.length=0}const o=n(),a=vt(at({key:t},o),{inUse:!0,pooled:!0});return pn.set(e,a),a}function It(e,t,n){return e.createShaderModule({label:t,code:n})}function Ks(e,t,n,s,o){return Me(this,null,function*(){const a=e.createBindGroupLayout({entries:o.map((r,i)=>typeof r=="string"?{binding:i,visibility:GPUShaderStage.COMPUTE,buffer:{type:r}}:{binding:i,visibility:GPUShaderStage.COMPUTE,buffer:r})});try{const r=yield e.createComputePipelineAsync({label:t,layout:e.createPipelineLayout({bindGroupLayouts:[a]}),compute:{module:n,entryPoint:s}});return{bgl:a,pipe:r}}catch(r){if(n!=null&&n.getCompilationInfo){const i=yield n.getCompilationInfo().catch(()=>null),u=i?i.messages.filter(l=>l.type==="error"):[];if(u.length)throw new Error(`meshnet_fast_v4 [${t}] WGSL error: `+u.map(l=>`L${l.lineNum}:${l.linePos} ${l.message}`).join(" | "))}throw r}})}function Ws(e,t){const n=t?`enable f16;
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
  let dstX4 = ${Vt}u + wid.x * 8u + x4Loc;
  for (var s : u32 = 0u; s < 4u; s = s + 1u) {
    let zLoc = s * 8u + zOff;
    let r = zLoc * 33u + xBase;
    inp_4[((Z0 + zLoc) * 256u + Y) * ${ft}u + dstX4] =
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
  let dstX4 = ${Vt}u + wid.x * 8u + x4Loc;
  for (var s : u32 = 0u; s < 4u; s = s + 1u) {
    let zl = s * 8u + zOff;
    let r = zl * 33u + xBase;
    inp_4[((Z0 + zl) * 256u + Y) * ${ft}u + dstX4] =
      ${o}(${s}(sh[r]), ${s}(sh[r + 1u]), ${s}(sh[r + 2u]), ${s}(sh[r + 3u]));
  }
}`}function lr(){return`
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
}`}function hi(){return`
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
}`}function wi(){return`
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
}`}function Mo(){return`
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
}`}function un(e,t,n,s,o){return Me(this,null,function*(){const a=Ys(gi,e);let r=a.get(t);return r||(r=Me(null,null,function*(){const i=It(e,t,n());return Ks(e,t,i,s,o)}).catch(i=>{throw a.delete(t),i}),a.set(t,r)),r})}function ko(e,t,n,s,o){t.fill(0);const a=T*T*T;if(!(o&&e[0]===s&&e[a-1]===s))return{hasBgSkip:!1};if(n.fill(0),(e instanceof Uint8Array||e instanceof Uint8ClampedArray)&&(e.byteOffset&3)===0&&Number.isInteger(s)&&s>=0&&s<=255){const u=new Uint32Array(e.buffer,e.byteOffset,a>>>2),l=new Uint32Array(n.buffer,n.byteOffset,T*T>>>2),c=(s&255)*16843009>>>0;let g=0;for(let m=0;m<T;m++)for(let f=0;f<16384;f++)l[f]|=u[g++]^c}else{let u=0;const l=T*T;for(let c=0;c<T;c++)for(let g=0;g<l;g++,u++)e[u]!==s&&(n[g]=1)}let i=0;for(let u=0;u<T;u++){const l=u*T;for(let c=0;c<T;c++)n[l+c]!==0&&(t[c*T+u]=1,i++)}return i===0||i>=6e4?{hasBgSkip:!1}:{hasBgSkip:!0}}function ur(e){return e?`${e.grayMask}_${e.whiteMask}_${e.csfMask}_${e.temperature}_${e.supportTemperature}`:"seg"}function cr(c,g,m,f,p,d,b){return Me(this,arguments,function*(e,t,n,s,o,a,r,{includeCls:i=!0,sequential:u=!1,shouldAbort:l=null}={}){var te;const M=Ys(ar,e),_=s?1:0,$=o||"none",x=r.useUniformWeff?1:0,S=(I,me,le,re)=>Ks(e,I,me,le,re),h=["storage","storage","storage","storage"],w=["read-only-storage","storage","storage","storage","storage","storage","read-only-storage","storage","uniform","uniform","uniform"],A=["read-only-storage","read-only-storage","storage","storage","read-only-storage","uniform"],y=["storage","storage","storage","storage","read-only-storage","read-only-storage",{type:"uniform",hasDynamicOffset:!0,minBindingSize:32}],C=["storage","storage","storage","storage","read-only-storage","read-only-storage","read-only-storage","uniform"],P=["read-only-storage","read-only-storage","read-only-storage","read-only-storage","storage","storage",r.useUniformWeff?"uniform":"read-only-storage","read-only-storage",{type:"uniform",hasDynamicOffset:!0,minBindingSize:32}],U=["read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","storage","uniform","uniform","uniform"],z=`128|init|${t.cs}|${t.activation}|${_}`,D=`128|conv0|${t.cs}|${t.dilations[0]}|${t.norm}|${_}|${$}`,N=`128|prep|${t.chan}|${t.cs}|${t.activation}|${t.norm}|${_}`,X=`128|flush|${t.cs}|${_}`,B=`128|norm|${t.cs}|${t.activation}|${t.norm}|${_}`,R=`128|conv|${t.chan}|${t.cs}|${t.activation}|${t.norm}|${x}|${_}|${$}`,q=`128|cls|${t.chan}|${t.cs}|${t.nclass}|${(te=n==null?void 0:n.clsK4)!=null?te:0}|${r.numConvs}|${t.activation}|${t.norm}|${_}|${ur(a)}`,j=()=>Dt(M,z,()=>{const I=It(e,"init_act8_128",r.initActWgsl());return S("init_act8_128",I,"main",h)}),O=()=>Dt(M,D,()=>Me(null,null,function*(){const I=It(e,"conv0_128",r.conv0Wgsl()),me=yield Promise.all(r.halfPass0?[S("conv0_128_lo",I,"main_lo",w),S("conv0_128_hi",I,"main_hi",w),S("conv0_128_bg_lo",I,"main_bg_lo",w),S("conv0_128_bg_hi",I,"main_bg_hi",w)]:[S("conv0_128",I,"main",w),S("conv0_128_bg",I,"main_bg",w)]);return r.halfPass0?{lo:me[0],hi:me[1],bgLo:me[2],bgHi:me[3]}:{main:me[0],bg:me[1]}})),F=()=>Dt(M,N,()=>Me(null,null,function*(){const I=It(e,"prep_128",r.prepWgsl()),[me,le]=yield Promise.all([S("moments_finish_128",I,"moments_finish",A),S("prep_weff_128",I,"prep_weff",A)]);return{pMomFin:me,pPrepW:le}})),E=()=>Dt(M,X,()=>{const I=It(e,"flush_128",r.flushWgsl());return S("flush_stage_128",I,"main",y)}),K=()=>Dt(M,B,()=>Me(null,null,function*(){const I=It(e,"norm_128",r.normWgsl()),[me,le]=yield Promise.all([S("norm_quant8_128",I,"main",C),S("norm_halo_fill_128",I,"norm_halo_fill",C)]);return{pNorm:me,pNormHalo:le}})),Y=()=>i?Dt(M,q,()=>{const I=It(e,"cls_128",r.clsWgsl());return S("classify_v4_128",I,"main",U)}):Promise.resolve(null),Z=()=>Dt(M,R,()=>Me(null,null,function*(){const I=It(e,"conv_128",r.convWgsl());if(r.halfPassConv){const[H,J,G,$e,ye,Se]=yield Promise.all([S("conv_128_lo",I,"main_lo",P),S("conv_128_hi",I,"main_hi",P),S("conv_128_ext_lo",I,"main_ext_lo",P),S("conv_128_ext_hi",I,"main_ext_hi",P),S("conv_128_bg_lo",I,"main_bg_lo",P),S("conv_128_bg_hi",I,"main_bg_hi",P)]);return{lo:H,hi:J,extLo:G,extHi:$e,bgLo:ye,bgHi:Se}}const[me,le,re]=yield Promise.all([S("conv_128",I,"main",P),S("conv_128_ext",I,"main_ext",P),S("conv_128_bg",I,"main_bg",P)]);return{main:me,ext:le,bg:re}}));if(u){for(const I of[j,F,E,K,O,Z,Y]){if(l!=null&&l())return null;yield I()}return null}const[pe,ve,fe,be,V,ie,k]=yield Promise.all([j(),O(),F(),E(),K(),Y(),Z()]);return{pInit:pe,pMomFin:fe.pMomFin,pPrepW:fe.pPrepW,pFlush:be,pNorm:V.pNorm,pNormHalo:V.pNormHalo,pCls:ie,pConv0:ve,pConv:k}})}function fr(g,m,f,p,d,b,M,_){return Me(this,arguments,function*(e,t,n,s,o,a,r,i,{includeCls:u=!0,sequential:l=!1,shouldAbort:c=null}={}){var te;const $=Ys(ar,e),x=s?1:0,S=o||"none",h=a?1:0,w=i.useUniformWeff?1:0,A=i.chunkableStd?1:0,y=(I,me,le,re)=>Ks(e,I,me,le,re),C=["storage","storage"],P=["read-only-storage","storage","storage","read-only-storage","read-only-storage","storage","storage","read-only-storage","uniform"],U=["read-only-storage","read-only-storage","storage","storage","storage","storage","read-only-storage","uniform"],z=["storage","storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","uniform"],D=["read-only-storage","read-only-storage","storage","storage","storage","storage",i.useUniformWeff?"uniform":"read-only-storage","read-only-storage",i.chunkableStd?{type:"uniform",hasDynamicOffset:!0,minBindingSize:32}:"uniform"],N=["read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","storage","read-only-storage","uniform"],X=`std|init|${t.cs}|${t.activation}|${x}|${h}`,B=`std|conv0|${t.cs}|${t.dilations[0]}|${t.norm}|${x}|${S}|${h}`,R=`std|prep|${t.chan}|${t.cs}|${t.activation}|${t.norm}|${x}|${h}`,q=`std|norm|${t.cs}|${t.activation}|${t.norm}|${x}|${h}`,j=`std|conv|${t.chan}|${t.cs}|${t.activation}|${t.norm}|${w}|${x}|${S}|${h}${A?"|chk1":""}`,O=`std|cls|${t.chan}|${t.cs}|${t.nclass}|${(te=n==null?void 0:n.clsK4)!=null?te:0}|${t.activation}|${t.norm}|${x}|${h}|${ur(r)}`,F=()=>Dt($,X,()=>{const I=It(e,"init_act8",i.initActWgsl());return y("init_act8",I,"main",C)}),E=()=>Dt($,B,()=>Me(null,null,function*(){const I=It(e,"conv0",i.conv0Wgsl()),me=yield Promise.all(i.halfPass0?[y("conv0_lo",I,"main_lo",P),y("conv0_hi",I,"main_hi",P),y("conv0_bg_lo",I,"main_bg_lo",P),y("conv0_bg_hi",I,"main_bg_hi",P)]:[y("conv0",I,"main",P),y("conv0_bg",I,"main_bg",P)]);return i.halfPass0?{lo:me[0],hi:me[1],bgLo:me[2],bgHi:me[3]}:{main:me[0],bg:me[1]}})),K=()=>Dt($,R,()=>Me(null,null,function*(){const I=It(e,"prep",i.prepWgsl()),[me,le]=yield Promise.all([y("moments_finish",I,"moments_finish",U),y("prep_weff",I,"prep_weff",U)]);return{pMomFin:me,pPrepW:le}})),Y=()=>Dt($,q,()=>Me(null,null,function*(){const I=It(e,"norm",i.normWgsl()),[me,le]=yield Promise.all([y("norm_quant8",I,"main",z),y("norm_halo_fill",I,"norm_halo_fill",z)]);return{pNorm:me,pNormHalo:le}})),Z=()=>u?Dt($,O,()=>{const I=It(e,"cls",i.clsWgsl());return y("classify_v4",I,"main",N)}):Promise.resolve(null),pe=()=>Dt($,j,()=>Me(null,null,function*(){const I=It(e,"conv",i.convWgsl());if(i.halfPassConv){const[re,H,J,G]=yield Promise.all([y("conv_lo",I,"main_lo",D),y("conv_hi",I,"main_hi",D),y("conv_ext_lo",I,"main_ext_lo",D),y("conv_ext_hi",I,"main_ext_hi",D)]);return{lo:re,hi:H,extLo:J,extHi:G}}const[me,le]=yield Promise.all([y("conv",I,"main",D),y("conv_ext",I,"main_ext",D)]);return{main:me,ext:le}}));if(l){for(const I of[F,K,Y,E,pe,Z]){if(c!=null&&c())return null;yield I()}return null}const[ve,fe,be,V,ie,k]=yield Promise.all([F(),E(),K(),Y(),Z(),pe()]);return{pInit:ve,pMomFin:be.pMomFin,pPrepW:be.pPrepW,pNorm:V.pNorm,pNormHalo:V.pNormHalo,pCls:ie,pConv0:fe,pConv:k}})}function Po(e,t,n,s,o){n.fill(0);const a=o&&e[0]===0&&e[e.length-1]===0;let r=0,i=0;if(!a){if(s)for(let u=0;u<T;u++){const l=u*T*bn;for(let c=0;c<T;c++){let g=l+c*bn+32;for(let m=0;m<T;m++,i++,g++){const f=e[i];t[g]=f===0?0:Us(f)}}}else for(let u=0;u<T;u++){const l=u*T*bn;for(let c=0;c<T;c++){const g=u*T*T+c*T;t.set(e.subarray(g,g+T),l+c*bn+32)}}return{hasBgSkip:!1}}for(let u=0;u<T;u++){const l=u*T*bn;for(let c=0;c<T;c++){let g=!1,m=l+c*bn+32;for(let f=0;f<T;f++,i++,m++){const p=e[i];p!==0?(t[m]=s?Us(p):p,g=!0):t[m]=0}g&&(n[u*T+c]=1,r++)}}return r===0||r>=6e4?{hasBgSkip:!1}:{hasBgSkip:!0}}function En(e,t){const n=new Uint8Array(T*T);for(let s=0;s<T;s++){const o=s*T,a=s-t,r=s+t;for(let i=0;i<T;i++){if(!e[o+i])continue;const u=i-t,l=i+t;if(a>=0){const c=a*T;u>=0&&(n[c+u]=1),n[c+i]=1,l<T&&(n[c+l]=1)}if(u>=0&&(n[o+u]=1),n[o+i]=1,l<T&&(n[o+l]=1),r>=0&&r<T){const c=r*T;u>=0&&(n[c+u]=1),n[c+i]=1,l<T&&(n[c+l]=1)}}}return n}function vi(e,t){const n=new Uint8Array(T*T),s=new Uint8Array(T*T),o=new Int32Array(T+1);for(let a=0;a<T;a++){const r=a*T;for(let i=0;i<T;i++)o[i+1]=o[i]+e[r+i];for(let i=0;i<T;i++)o[Math.min(T-1,i+t)+1]-o[Math.max(0,i-t)]>0&&(n[r+i]=1)}for(let a=0;a<T;a++){for(let r=0;r<T;r++)o[r+1]=o[r]+n[r*T+a];for(let r=0;r<T;r++)o[Math.min(T-1,r+t)+1]-o[Math.max(0,r-t)]>0&&(s[r*T+a]=1)}return s}function bs(e){const t=new Uint8Array(Ke);for(let n=0;n<T;n++){const s=n*T,o=n*64;for(let a=0;a<64;a++){const r=s+(a<<2);e[r]|e[r+1]|e[r+2]|e[r+3]&&(t[o+a]=1)}}return t}function Kn(e){const t=new Uint8Array(T*T);for(let n=0;n<T;n++){const s=n*T,o=n*64;for(let a=0;a<64;a++)if(e[o+a]){const r=s+(a<<2);t[r]=1,t[r+1]=1,t[r+2]=1,t[r+3]=1}}return t}function Zn(e){let t=0;for(let o=0;o<Ke;o++)t+=e[o];const n=new Uint32Array(t);let s=0;for(let o=0;o<T;o++){const a=o*64;for(let r=0;r<64;r++)e[a+r]&&(n[s++]=o<<8|r)}return n}function gn(e){let t=0;for(let n=0;n<e.length;n++)t+=e[n];return t}function Ao(e){const t=new Uint8Array(Ke);if(e===1024)for(let n=0;n<32;n++)for(let s=0;s<32;s++){const o=n*8+(n*3+s*5&7),a=s*2+(n+s&1);t[o*64+a]=1}else if(e===512)for(let n=0;n<32;n++)for(let s=0;s<16;s++){const o=n*8+(n*3+s*5&7),a=s*4+(n+s*3&3);t[o*64+a]=1}else for(let n=0;n<16;n++)for(let s=0;s<16;s++){const o=n*16+(n*7+s*3&15),a=s*4+(n+s*3&3);t[o*64+a]=1}return t}function pr(e,t,n,s){const o=n.length,a=()=>({isFull:!0,mode:"full",writtenMask:null,computedMask:null,mainStrips:null,extStrips:null,nMomExt:0,normStrips:null,haloRows:null,bgStrip:null,extWeight:0});if(!s||!t.hasBgSkip)return{clsSkipped:!1,clsStrips:null,layers:Array.from({length:o},a)};const r=bs(vi(e,3)),i=gn(r)<15800,u=i?Zn(r):null,l=new Array(o);let c=null;for(let _=0;_<o;_++){const $=n[_],x=En(_===0?e:c,$);if(_>0)for(let h=0;h<T;h++){const w=h<$||h>=T-$,A=h*T;for(let y=0;y<T;y++)(w||y<$||y>=T-$)&&(x[A+y]=1)}c=x;const S=new Uint8Array(Ke);for(let h=0;h<T;h++){const w=h*T,A=h*64;for(let y=0;y<64;y++){const C=w+(y<<2);x[C]|x[C+1]|x[C+2]|x[C+3]||(S[A+y]=1)}}l[_]=S}const g=new Array(o);g[o-1]=r;for(let _=o-2;_>=0;_--)g[_]=bs(En(Kn(g[_+1]),n[_+1]));const m=i&&o>=4&&n[o-1]<=2&&n[o-2]<=4&&n[o-3]<=6,f=Math.max(1,o-3),p=new Array(o).fill(null),d=new Array(o).fill(null),b=new Array(o).fill(null);if(m){const $=(Ke-gn(g[o-1]))/Ke>=.52?256:512,x=1024,S=Ao($),h=Ao(x),w=g[o-1],A=new Uint8Array(Ke);let y=0;for(let C=0;C<Ke;C++)S[C]&&!w[C]&&(A[C]=1,y++);if(y>0&&y<=ss&&gn(w)+y<=15360){p[o-1]=A,d[o-1]=new Uint8Array(Ke),b[o-1]=S;for(let C=o-2;C>=f;C--){const P=new Uint8Array(Ke),U=g[C+1],z=p[C+1];for(let O=0;O<Ke;O++)P[O]=U[O]|z[O];const D=bs(En(Kn(P),n[C+1])),N=new Uint8Array(Ke),X=g[C];for(let O=0;O<Ke;O++)D[O]&&!X[O]&&(N[O]=1);const B=C===f?h:S,R=new Uint8Array(Ke);let q=0,j=0;for(let O=0;O<Ke;O++)(N[O]||B[O])&&!X[O]&&(R[O]=1,q++,B[O]&&j++);if(j===0||q>ss||gn(X)+q>15360){const O=C+1,F=g[O],E=d[O],K=new Uint8Array(Ke);let Y=0;for(let Z=0;Z<Ke;Z++)(E[Z]||h[Z])&&!F[Z]&&(K[Z]=1,Y++);Y<=ss&&gn(F)+Y<=15360&&(p[O]=K,b[O]=h);break}d[C]=N,p[C]=R,b[C]=B}}}const M=new Array(o);for(let _=0;_<o;_++){const $=gn(l[_]),x=Ke-$,S=p[_]!==null,h=S?gn(g[_])+gn(p[_]):1/0;if($>=512&&x<=h){const w=new Uint8Array(Ke);let A=-1;for(let U=0;U<Ke;U++)l[_][U]?A<0&&(A=U):w[U]=1;const y=w.slice();y[A]=1;const C={z:A>>>6,yWg:A&63,packed:A>>>6<<8|A&63},P=Zn(w);M[_]={isFull:!1,mode:"rpure",writtenMask:w,computedMask:y,mainStrips:P,extStrips:_===0?null:new Uint32Array([C.packed]),nMomExt:_===0?0:1,normStrips:P,haloRows:null,bgStrip:C,extWeight:$}}else if(S&&h<=15360){const w=g[_],A=p[_],y=d[_],C=b[_],P=Zn(w),U=[],z=[];for(let R=0;R<T;R++){const q=R*64;for(let j=0;j<64;j++){const O=q+j;if(!A[O])continue;const F=R<<8|j;C[O]?U.push(F):z.push(F)}}const D=U.length;if(D===0){M[_]=a();continue}const N=new Uint32Array(U.length+z.length);N.set(U,0),N.set(z,U.length);const X=new Uint8Array(Ke),B=new Uint8Array(Ke);for(let R=0;R<Ke;R++)X[R]=w[R]|y[R],B[R]=w[R]|A[R];M[_]={isFull:!1,mode:"bwd",writtenMask:X,computedMask:B,mainStrips:P,extStrips:N,nMomExt:D,normStrips:_+1<o?Zn(X):null,haloRows:null,bgStrip:null,extWeight:(Ke-P.length)/D}}else M[_]=a()}for(let _=o-2;_>=0;_--)M[_].mode==="bwd"&&M[_+1].mode!=="bwd"&&(M[_]=a());for(let _=0;_<o-1;_++){const $=M[_];if($.mode!=="rpure")continue;const x=M[_+1],S=x.isFull?new Uint8Array(T*T).fill(1):En(Kn(x.computedMask),n[_+1]),h=Kn($.writtenMask),w=[];for(let A=0;A<T;A++){const y=A*T;for(let C=0;C<T;C++)S[y+C]&&!h[y+C]&&w.push(A<<8|C)}w.length>0&&($.haloRows=new Uint32Array(w))}return{clsSkipped:i,clsStrips:u,layers:M}}function xi(e,t){const n=t.chan,s=t.cs,o=s/4,a=t.nclass,r=Math.ceil(a/4),{convs:i,affines:u,classifier:l}=e,c=i.length,g=27*o,m=9*s*3*o,f=s*r,p=(g+(c-1)*m+f)*4,d=new Float32Array(p),b=4*s,M=c*b,_=new Float32Array(M+r*4),$=(h,w,A)=>{if(t.norm!=="gn"||w>=n)return 1;const y=i[h],C=A*27,P=w*C;let U=0;for(let z=0;z<C;z++)U+=Math.abs(y.w[P+z]);return Math.max(U/16,1e-6)};for(let h=0;h<i[0].outC;h++){const w=$(0,h,i[0].inC),A=1/w;for(let y=0;y<27;y++)d[y*s+h]=i[0].w[h*27+y]*A;_[2*s+h]=t.eps/(w*w),i[0].bias&&(_[3*s+h]=i[0].bias[h])}for(let h=i[0].outC;h<s;h++)_[2*s+h]=t.eps;for(let h=1;h<c;h++){const w=i[h],A=(g+(h-1)*m)*4,y=h*b;for(let C=0;C<w.outC;C++){const P=$(h,C,w.inC),U=1/P,z=C>>>2,D=C&3;for(let N=0;N<9;N++)for(let X=0;X<w.inC;X++)for(let B=0;B<3;B++){const R=N*3+B,q=A+(((N*s+X)*3+B)*o+z)*4+D;d[q]=w.w[(C*w.inC+X)*27+R]*U}_[y+2*s+C]=t.eps/(P*P),w.bias&&(_[y+3*s+C]=w.bias[C])}for(let C=w.outC;C<s;C++)_[y+2*s+C]=t.eps}for(let h=0;h<c;h++){const w=h*b,A=u[h];for(let y=0;y<n;y++)t.norm==="gn"?(_[w+y]=A!=null&&A.scale?A.scale[y]:1,_[w+s+y]=A!=null&&A.bias?A.bias[y]:0):(_[w+y]=1,_[w+s+y]=0)}const x=g+(c-1)*m,S=x*4;for(let h=0;h<n;h++)for(let w=0;w<a;w++)d[S+h*r*4+w]=l.w[w*l.inC+h];for(let h=0;h<r*4;h++)_[M+h]=h<a?l.bias?l.bias[h]:0:-1e30;return{wF32:d,wF16:mi(d),qmetaF32:_,w0Vec4s:g,hiddenVec4PerLayer:m,clsVec4Off:x,clsBiasOff:M,metaStride:b,clsK4:r}}function Rn(e){if(e==="gelu_tanh")return`fn act(x : f32) -> f32 {
  let u = clamp(0.7978845608028654 * (x + 0.044715 * x * x * x), -9.0, 9.0);
  return 0.5 * x * (1.0 + tanh(u));
}`;if(e==="relu")return"fn act(x : f32) -> f32 { return max(x, 0.0); }";if(e==="elu")return"fn act(x : f32) -> f32 { return select(exp(clamp(x, -20.0, 0.0)) - 1.0, x, x >= 0.0); }";throw new Error(`meshnet_fast_v4: unsupported activation '${e}'`)}function mr(e){return e==="gelu_tanh"?{uZeroInt:7,uZeroFloat:7/255,uZeroWord:117901063,sterbenzSub:"1.02734375h",zeroBin:7}:e==="relu"?{uZeroInt:0,uZeroFloat:0,uZeroWord:0,sterbenzSub:"1.0h",zeroBin:0}:{uZeroInt:32,uZeroFloat:32/255,uZeroWord:538976288,sterbenzSub:"1.125h",zeroBin:32}}function dr({chan:e,clsK4:t,nclass:n,V4:s,suf:o,readBiasStmt:a,biasExpr:r,probCfg:i}){const u=`    var acc0 = ${s}(0.0${o});
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
${u}
${ct(4,m=>`    let l${m} = vec4<f32>(acc${m}) + vec4<f32>(${r(m)});
    let m${m} = l${m} > best_v;
    best_v = select(best_v, l${m}, m${m});
    best_k = select(best_k, vec4<u32>(k_base + ${m}u), m${m});
`)}  }

  labels8[row_idx * ${mt}u + x4] = best_k.x | (best_k.y << 8u) | (best_k.z << 16u) | (best_k.w << 24u);`;const l=`f32(${(1/Math.max(i.temperature,1e-6)).toExponential(8)})`,c=`f32(${(1/Math.max(i.supportTemperature,1e-6)).toExponential(8)})`,g=i.temperature===i.supportTemperature;return`  var max_v = vec4<f32>(-1.0e29);
  for (var k4 : u32 = 0u; k4 < ${t}u; k4 = k4 + 1u) {
${u}
${ct(4,m=>`    if (k_base + ${m}u < ${n}u) {
      max_v = max(max_v, vec4<f32>(acc${m}) + vec4<f32>(${r(m)}));
    }
`)}  }

  var denom = vec4<f32>(0.0);
  var sup_denom = vec4<f32>(0.0);
  var bg_w = vec4<f32>(0.0);
  var gm_num = vec4<f32>(0.0);
  var wm_num = vec4<f32>(0.0);
  var csf_num = vec4<f32>(0.0);
  for (var k4 : u32 = 0u; k4 < ${t}u; k4 = k4 + 1u) {
${u}
${ct(4,m=>`    let k${m} = k_base + ${m}u;
    if (k${m} < ${n}u) {
      let l${m} = vec4<f32>(acc${m}) + vec4<f32>(${r(m)});
      let v${m} = exp(clamp((l${m} - max_v) * ${l}, vec4<f32>(-80.0), vec4<f32>(0.0)));
      let s${m} = ${g?`v${m}`:`exp(clamp((l${m} - max_v) * ${c}, vec4<f32>(-80.0), vec4<f32>(0.0)))`};
      denom = denom + v${m};
      sup_denom = sup_denom + s${m};
      if (k${m} == 0u) { bg_w = s${m}; }
      let bit${m} = 1u << k${m};
      if ((${i.grayMask}u & bit${m}) != 0u) { gm_num = gm_num + v${m}; }
      if ((${i.whiteMask}u & bit${m}) != 0u) { wm_num = wm_num + v${m}; }
      if ((${i.csfMask}u & bit${m}) != 0u) { csf_num = csf_num + v${m}; }
    }
`)}  }

  let inv_den = vec4<f32>(1.0) / max(denom, vec4<f32>(1.0e-20));
  let gm = clamp(gm_num * inv_den, vec4<f32>(0.0), vec4<f32>(1.0));
  let wm = clamp(wm_num * inv_den, vec4<f32>(0.0), vec4<f32>(1.0));
  let csf = clamp(csf_num * inv_den, vec4<f32>(0.0), vec4<f32>(1.0));
  let sup = clamp(vec4<f32>(1.0) - bg_w / max(sup_denom, vec4<f32>(1.0e-20)), vec4<f32>(0.0), vec4<f32>(1.0));
  let vox_base = row_idx * ${T}u + x4 * 4u;
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
  }`}function gr({device:e,hasF16:t,nvox:n,outBufBytes:s,inpBuf:o,act8_0:a,labels8Buf:r,readbackBuf:i,pInit:u,bgInit:l,pCls:c,bgCls:g,clsUbo:m,packed:f,modelEntry:p,probCfg:d,canGpuProb:b,probSlots:M,ownedBuffers:_,mkBuf:$}){let x=!1,S=!1,h=!1,w=!1;const A=new Uint8Array(T*T);let y=null,C=null,P=null,U=null;const z=(F,E)=>e.createBindGroup({layout:F,entries:E.map((K,Y)=>({binding:Y,resource:K&&K.buffer?K:{buffer:K}}))});function D(){if(!y){const F=t?"prep_in_u8_f16":"prep_in_u8_f32";y=Me(null,null,function*(){const{bgl:E,pipe:K}=yield un(e,F,()=>Ws(!0,t),"main",["read-only-storage","storage","uniform"]);if(w)return null;const Y=$(256*4,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST),Z=new Float32Array(256),pe=z(E,[{buffer:r,offset:0,size:n},o,Y]);return{pipe:K,ubo:Y,lutF32:Z,bg:pe}}).catch(E=>{throw y=null,E})}return y}function N(){if(!C){const F=t?"prep_in_f32_f16":"prep_in_f32_f32";C=Me(null,null,function*(){const{bgl:E,pipe:K}=yield un(e,F,()=>Ws(!1,t),"main",["read-only-storage","storage","uniform"]);if(w)return null;const Y=$(16,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST),Z=new Float32Array(4),pe=s>=n*4?z(E,[{buffer:r,offset:0,size:n*4},o,Y]):null,ve=a.size>=n*4?z(E,[{buffer:a,offset:0,size:n*4},o,Y]):null;return{pipe:K,ubo:Y,f32Tmp:Z,bgLabels:pe,bgAct0:ve}}).catch(E=>{throw C=null,E})}return C}function X(){return P||(P=Me(null,null,function*(){const{bgl:F,pipe:E}=yield un(e,"transpose_u8_v4",lr,"main",["read-only-storage","storage"]);if(w)return null;const K=z(F,[{buffer:r,offset:0,size:n},{buffer:o,offset:0,size:n}]);return{pipe:E,bg:K}}).catch(F=>{throw P=null,F})),P}function B(){return U||(U=Me(null,null,function*(){const[F,E,K,Y]=yield Promise.all([un(e,"prob_unpack_two",wi,"main",["read-only-storage","storage","storage"]),un(e,"prob_blur_axis",Mo,"blur_axis",["read-only-storage","storage","read-only-storage","uniform"]),un(e,"prob_blur_z_gate",Mo,"blur_z_gate",["read-only-storage","storage","read-only-storage","uniform"]),un(e,"transpose_f32",hi,"main",["read-only-storage","storage"])]);if(w)return null;const Z=GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST,pe=144,ve=$(pe,Z),fe=$(pe,Z),be=$(pe,Z),V=I=>({buffer:I,offset:0,size:s}),ie=z(F.bgl,[V(M.pass0HoldBuf),V(M.y0),V(M.y1)]),k=z(F.bgl,[V(r),V(M.b),V(M.sup)]),te=[M.y0,M.y1,M.b].map(I=>({buf:I,bgBlurX:z(E.bgl,[V(I),V(r),V(M.sup),ve]),bgBlurY:z(E.bgl,[V(r),V(I),V(M.sup),fe]),bgBlurZ:z(K.bgl,[V(I),V(r),V(M.sup),be]),bgTranspose:z(Y.bgl,[V(r),V(I)])}));return{pUnpack:F.pipe,pBlurAxis:E.pipe,pBlurZGate:K.pipe,pTransposeF32:Y.pipe,bgUnpack0:ie,bgUnpack1:k,tissues:te,uboX:ve,uboY:fe,uboZ:be,uboScratch:new ArrayBuffer(pe),lastBlurKey:null}}).catch(F=>{throw U=null,F})),U}function R(){d?b&&B().catch(()=>{}):(D().catch(()=>{}),X().catch(()=>{}))}function q(){w=!0}function j(ve){return Me(this,arguments,function*({volume:F,ioOpts:E,useCone:K,padInputHost:Y,headRowHost:Z,hasF16Flag:pe}){var be;if(E!=null&&E.gpuNativeInput){const V=(be=E.normOffset)!=null?be:0,ie=E.normRange||1,k=F instanceof Uint8Array||F instanceof Uint8ClampedArray,te=s>=n*4||a.size>=n*4;if(k){const re=ko(F,Z,A,V,K),H=yield D();for(let J=0;J<256;J++)H.lutF32[J]=J===V?0:(J-V)/ie;return e.queue.writeBuffer(H.ubo,0,H.lutF32),e.queue.writeBuffer(r,0,F,0,n),{info:re,runPrePasses(J,G){(!S||h)&&(J.clearBuffer(o),S=!0,h=!1);const $e=J.beginComputePass();if($e.setPipeline(H.pipe),$e.setBindGroup(0,H.bg),$e.dispatchWorkgroups(8,T,8),$e.end(),G.push("preprocess"),x){const ye=J.beginComputePass();ye.setPipeline(u.pipe),ye.setBindGroup(0,l),ye.dispatchWorkgroups(1,T,T),ye.end(),G.push("preprocess"),x=!1}}}}if(te){const re=ko(F,Z,A,V,K),H=yield N(),J=!(s>=n*4),G=J?a:r,$e=J?H.bgAct0:H.bgLabels,ye=F instanceof Float32Array?F:Float32Array.from(F);return H.f32Tmp[0]=V,H.f32Tmp[1]=ie,H.f32Tmp[2]=0,H.f32Tmp[3]=0,e.queue.writeBuffer(H.ubo,0,H.f32Tmp),e.queue.writeBuffer(G,0,ye,0,n),{info:re,runPrePasses(Se,Ce){(!S||h)&&(Se.clearBuffer(o),S=!0,h=!1);const Ge=Se.beginComputePass();if(Ge.setPipeline(H.pipe),Ge.setBindGroup(0,$e),Ge.dispatchWorkgroups(8,T,8),Ge.end(),Ce.push("preprocess"),x||J){const Re=Se.beginComputePass();Re.setPipeline(u.pipe),Re.setBindGroup(0,l),Re.dispatchWorkgroups(1,T,T),Re.end(),Ce.push("preprocess"),x=!1}}}}const I=new Float32Array(n);for(let re=0;re<n;re++){const H=F[re];I[re]=H===V?0:(H-V)/ie}const me=Fn(I,[T,T,T],[2,1,0]),le=Po(me,Y,Z,pe,K);return e.queue.writeBuffer(o,0,Y),S=!0,h=!1,{info:le,runPrePasses(re,H){if(x){const J=re.beginComputePass();J.setPipeline(u.pipe),J.setBindGroup(0,l),J.dispatchWorkgroups(1,T,T),J.end(),H.push("preprocess"),x=!1}}}}const fe=Po(F,Y,Z,pe,K);return e.queue.writeBuffer(o,0,Y),S=!0,h=!1,{info:fe,runPrePasses(V,ie){if(x){const k=V.beginComputePass();k.setPipeline(u.pipe),k.setBindGroup(0,l),k.dispatchWorkgroups(1,T,T),k.end(),ie.push("preprocess"),x=!1}}}})}function O(fe){return Me(this,arguments,function*({enc:F,schedule:E,passCategories:K,u4Tmp:Y,ioOpts:Z,paced:pe=!1,onProgress:ve=null}){const be=E.clsSkipped?E.clsStrips.length:T;if(!d){Y[0]=f.clsVec4Off,Y[1]=f.clsBiasOff,Y[2]=E.clsSkipped?0:1,Y[3]=0,e.queue.writeBuffer(m,0,Y);{const ye=F.beginComputePass();ye.setPipeline(c.pipe),ye.setBindGroup(0,g),be>0&&ye.dispatchWorkgroups(1,E.clsSkipped?1:64,be),ye.end(),K.push("classify")}if(Z!=null&&Z.gpuNativeOutput){const ye=yield X(),Se=F.beginComputePass();Se.setPipeline(ye.pipe),Se.setBindGroup(0,ye.bg),Se.dispatchWorkgroups(8,T,8),Se.end(),K.push("postprocess"),h=!0,F.copyBufferToBuffer(o,0,i,0,n),e.queue.submit([F.finish()]),yield i.mapAsync(GPUMapMode.READ);const Ce=new Uint8Array(i.getMappedRange()).slice();return i.unmap(),pe&&ve&&ve(1,""),[Ce]}F.copyBufferToBuffer(r,0,i,0,s),e.queue.submit([F.finish()]),yield i.mapAsync(GPUMapMode.READ);const G=new Uint8Array(i.getMappedRange()),$e=new Float32Array(n);for(let ye=0;ye<n;ye++)$e[ye]=G[ye];return i.unmap(),pe&&ve&&ve(1,""),[$e]}if(b){const G=yield B();Y[0]=f.clsVec4Off,Y[1]=f.clsBiasOff,Y[2]=E.clsSkipped?0:1,Y[3]=0,e.queue.writeBuffer(m,0,Y),Y[3]=1,e.queue.writeBuffer(M.clsUbo1,0,Y);{const ke=F.beginComputePass();ke.setPipeline(c.pipe),ke.setBindGroup(0,g),be>0&&ke.dispatchWorkgroups(1,E.clsSkipped?1:64,be),ke.end(),K.push("classify")}F.copyBufferToBuffer(r,0,M.pass0HoldBuf,0,s),E.clsSkipped&&F.clearBuffer(r,0,s);{const ke=F.beginComputePass();ke.setPipeline(c.pipe),ke.setBindGroup(0,M.bgCls1),be>0&&ke.dispatchWorkgroups(1,E.clsSkipped?1:64,be),ke.end(),K.push("classify")}x=!0;const $e=`${d.sigma}|${d.supportPower}`,ye=d.sigma>0,Se=ye?Math.max(1,Math.round(3*d.sigma)):0;if(G.lastBlurKey!==$e){const ke=new Uint32Array(G.uboScratch),Qe=new Float32Array(G.uboScratch);Qe.fill(0);let tt=1;if(ye){tt=0;for(let rt=-Se;rt<=Se;rt++){const nt=Math.exp(-.5*rt*rt/(d.sigma*d.sigma));Qe[4+rt+Se]=nt,tt+=nt}}else Qe[4]=1;ke[1]=Se,Qe[2]=tt,ke[0]=0,Qe[3]=1,e.queue.writeBuffer(G.uboX,0,G.uboScratch),ke[0]=1,e.queue.writeBuffer(G.uboY,0,G.uboScratch),ke[0]=2,Qe[3]=d.supportPower,e.queue.writeBuffer(G.uboZ,0,G.uboScratch),G.lastBlurKey=$e}{const ke=F.beginComputePass();ke.setPipeline(G.pUnpack),ke.setBindGroup(0,G.bgUnpack0),ke.dispatchWorkgroups(256,256,1),ke.end(),K.push("postprocess");const Qe=F.beginComputePass();Qe.setPipeline(G.pUnpack),Qe.setBindGroup(0,G.bgUnpack1),Qe.dispatchWorkgroups(256,256,1),Qe.end(),K.push("postprocess")}pe&&(e.queue.submit([F.finish()]),yield e.queue.onSubmittedWorkDone(),ve&&ve(.992,""),yield nr(),F=e.createCommandEncoder());const Ce=!!(Z!=null&&Z.gpuNativeOutput);for(let ke=0;ke<3;ke++){const Qe=G.tissues[ke];if(ye){const rt=F.beginComputePass();rt.setPipeline(G.pBlurAxis),rt.setBindGroup(0,Qe.bgBlurX),rt.dispatchWorkgroups(4,64,T),rt.end(),K.push("postprocess");const nt=F.beginComputePass();nt.setPipeline(G.pBlurAxis),nt.setBindGroup(0,Qe.bgBlurY),nt.dispatchWorkgroups(4,64,T),nt.end(),K.push("postprocess")}const tt=F.beginComputePass();if(tt.setPipeline(G.pBlurZGate),tt.setBindGroup(0,Qe.bgBlurZ),tt.dispatchWorkgroups(4,64,T),tt.end(),K.push("postprocess"),Ce){const rt=F.beginComputePass();rt.setPipeline(G.pTransposeF32),rt.setBindGroup(0,Qe.bgTranspose),rt.dispatchWorkgroups(8,T,8),rt.end(),K.push("postprocess")}else ke<2&&F.copyBufferToBuffer(r,0,Qe.buf,0,s)}const Ge=Ce?[M.y0,M.y1,M.b]:[M.y0,M.y1,r];F.copyBufferToBuffer(Ge[0],0,i,0,s),e.queue.submit([F.finish()]),yield i.mapAsync(GPUMapMode.READ);const Re=new Float32Array(i.getMappedRange()).slice();i.unmap();const Xe=ke=>Me(null,null,function*(){const Qe=e.createCommandEncoder();Qe.copyBufferToBuffer(ke,0,i,0,s),e.queue.submit([Qe.finish()]),yield i.mapAsync(GPUMapMode.READ);const tt=new Float32Array(i.getMappedRange()).slice();return i.unmap(),tt}),Ee=yield Xe(Ge[1]),Be=yield Xe(Ge[2]);return pe&&ve&&ve(1,""),[Re,Ee,Be]}Y[0]=f.clsVec4Off,Y[1]=f.clsBiasOff,Y[2]=E.clsSkipped?0:1,Y[3]=0,e.queue.writeBuffer(m,0,Y);{const G=F.beginComputePass();G.setPipeline(c.pipe),G.setBindGroup(0,g),be>0&&G.dispatchWorkgroups(1,E.clsSkipped?1:64,be),G.end(),K.push("classify"),F.copyBufferToBuffer(r,0,i,0,s)}e.queue.submit([F.finish()]),yield i.mapAsync(GPUMapMode.READ);const V=1/65535,ie=new Uint16Array(i.getMappedRange()),k=new Float32Array(n),te=new Float32Array(n);for(let G=0;G<n;G++)k[G]=ie[G*2]*V,te[G]=ie[G*2+1]*V;i.unmap(),Y[3]=1,e.queue.writeBuffer(m,0,Y);const I=e.createCommandEncoder();E.clsSkipped&&I.clearBuffer(r,0,s);const me=I.beginComputePass();me.setPipeline(c.pipe),me.setBindGroup(0,g),be>0&&me.dispatchWorkgroups(1,E.clsSkipped?1:64,be),me.end(),K.push("classify"),I.copyBufferToBuffer(r,0,i,0,s),e.queue.submit([I.finish()]),yield i.mapAsync(GPUMapMode.READ);const le=new Uint16Array(i.getMappedRange()),re=new Float32Array(n),H=new Float32Array(n);for(let G=0;G<n;G++)re[G]=le[G*2]*V,H[G]=le[G*2+1]*V;i.unmap();const J=ci([k,te,re],H,[T,T,T],p);return Z!=null&&Z.gpuNativeOutput?J.map(G=>Fn(G,[T,T,T],[2,1,0])):J})}return{prepareInput:j,finishAndReadback:O,warmupIoPipelines:R,dispose:q}}function _r(e,t){if(e==="sg32")return{decls:"",entryArgs:"",add:o=>`subgroupAdd(${o})`,min:o=>`subgroupMin(${o})`,max:o=>`subgroupMax(${o})`};const n=(o,a)=>{const r=u=>o==="+"?`  x = x + subgroupShuffleXor(x, ${u}u);`:`  x = ${o}(x, subgroupShuffleXor(x, ${u}u));`;return e==="sg64"?`fn ${a}(v : f32) -> f32 {
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
             @builtin(subgroup_size) sg_size : u32`,add:o=>`sg32_add(${o}, sg_size)`,min:o=>`sg32_min(${o}, sg_size)`,max:o=>`sg32_max(${o}, sg_size)`}}function br({V4:e,sw:t,norm:n,writeMomFn:s,momParams:o,momArgs:a}){const r=n==="none",i=r?"vec2<f32>":"vec4<f32>",u=r?`fn sg32_pack1(a : ${e}, slane : u32, c_out : u32, ${o}) -> u32 {
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
`,c=r?`      let p0 = sh_sg[rb];
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
${s}${u}${l}fn reduce_pack4_sg(
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
`}function hr(e){const{cs:t,chan:n,nclass:s,clsK4:o,dilations:a,activation:r,norm:i,hasF16:u,subgroupMode:l="none",splitHalves:c,probCfg:g,chunkableStd:m=!1}=e,f=t/4,p=c?t/2:t,d=p*ft,b=p*mt,M=9*t*3*f,_=M,$=M+f,x=u&&f%2===0&&$*8<=65536,S=mr(r),h=u?`enable f16;
`:"",w=u&&l!=="none",A=w?`enable subgroups;
`:"",y=u?"f16":"f32",C=u?"h":"f",P=`vec4<${y}>`,U=u?256:255,z=O=>{const F=O?".xzyw":"",E=(pe,ve,fe)=>c&&ve>=p?`y8_1[${pe} + ${(ve-p)*mt}u] = ${fe};`:`y8_0[${pe} + ${ve*mt}u] = ${fe};`;if(w&&(l==="sg32"||l==="sg64"||l==="sg32_64")){const pe=_r(l,i);return{decls:pe.decls,entryArgs:pe.entryArgs,localHeader:"",emit:({accVar:ve,cStart:fe,cEnd:be,hrExpr:V,yRowExpr:ie,momMode:k,writeY8Expr:te="true"})=>ct(be-fe,I=>{const me=fe+I,le=k==="ext_and_main"?`mom_ext[(${V}) * ${t}u + ${me}u] = mv;
      mom_main[(row_idx * 2u + sg) * ${t}u + ${me}u] = mv;`:k==="ext_only"?`mom_ext[(${V}) * ${t}u + ${me}u] = mv;`:`mom_main[(${V}) * ${t}u + ${me}u] = mv;`;return i==="none"?`  {
    let f = vec4<f32>(${ve}.v_${I}${F});
    let lmn = ${pe.min("min(min(f.x, f.y), min(f.z, f.w))")};
    let lmx = ${pe.max("max(max(f.x, f.y), max(f.z, f.w))")};
    let sp = lmx - lmn;
    let inv = select(0.0, 1.0 / sp, sp > 1e-7);
    if (${te}) {
      ${E(ie,me,"pack4x8unorm((f - vec4<f32>(lmn)) * inv)")}
    }
    if (slane == 0u) {
      let mv = vec4<f32>(0.0, 0.0, lmn, sp);
      ${le}
    }
  }
`:`  {
    let f = vec4<f32>(${ve}.v_${I}${F});
    let ls = ${pe.add("f.x + f.y + f.z + f.w")};
    let lq = ${pe.add("dot(f, f)")};
    let lmn = ${pe.min("min(min(f.x, f.y), min(f.z, f.w))")};
    let lmx = ${pe.max("max(max(f.x, f.y), max(f.z, f.w))")};
    let sp = lmx - lmn;
    let inv = select(0.0, 1.0 / sp, sp > 1e-7);
    if (${te}) {
      ${E(ie,me,"pack4x8unorm((f - vec4<f32>(lmn)) * inv)")}
    }
    if (slane == 0u) {
      let mv = vec4<f32>(ls, lq, lmn, sp);
      ${le}
    }
  }
`})}}if(w&&l==="sg_small")return{decls:br({V4:P,sw:F,norm:i,writeMomFn:`fn write_mom(c_out : u32, mv : vec4<f32>, ext_off : u32, main_off : u32, mom_mode : u32) {
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
`,emit:({accVar:fe,cStart:be,cEnd:V,hrExpr:ie,yRowExpr:k,momMode:te,writeY8Expr:I="true"})=>{const me=te==="ext_and_main"?"1u":te==="ext_only"?"2u":"0u",le=te==="main"?"0u":`(${ie}) * ${t}u`,re=te==="ext_only"?"0u":`(row_idx * 2u + sg) * ${t}u`;let H=`  let ep_ext_off = ${le};
  let ep_main_off = ${re};
`;for(let J=0;J<V-be;J+=4){const G=be+J;H+=`  {
    let qw = reduce_pack4_sg(${fe}.v_${J}, ${fe}.v_${J+1}, ${fe}.v_${J+2}, ${fe}.v_${J+3}, h, slane, sg_size, sg_id, ${G}u, ep_ext_off, ep_main_off, ${me});
    if (${I}) {
      ${E(k,G,"qw.x")}
      ${E(k,G+1,"qw.y")}
      ${E(k,G+2,"qw.z")}
      ${E(k,G+3,"qw.w")}
    }
  }
`}return H}};const K=`    let c_out = c_base + slane;
    if (mom_mode == 0u) {
      mom_main[main_off + c_out] = mv;
    } else if (mom_mode == 1u) {
      mom_ext[ext_off + c_out] = mv;
      mom_main[main_off + c_out] = mv;
    } else {
      mom_ext[ext_off + c_out] = mv;
    }`;if(i==="none"&&u){const pe=ct(31,fe=>`    {
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
  a0 : ${P}, a1 : ${P}, a2 : ${P}, a3 : ${P},
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
${pe}    let fmn = f32(rmn);
    let sp = f32(rmx) - fmn;
    sh_res[h * 4u + slane] = vec2<f32>(fmn, select(0.0, 1.0 / sp, sp > 1e-7));
    let mv = vec4<f32>(0.0, 0.0, fmn, sp);
${K}
  }
  workgroupBarrier();
  let f0 = vec4<f32>(a0${F});
  let f1 = vec4<f32>(a1${F});
  let f2 = vec4<f32>(a2${F});
  let f3 = vec4<f32>(a3${F});
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
`,emit:({accVar:fe,cStart:be,cEnd:V,hrExpr:ie,yRowExpr:k,momMode:te,writeY8Expr:I="true"})=>{const me=te==="ext_and_main"?"1u":te==="ext_only"?"2u":"0u",le=te==="main"?"0u":`(${ie}) * ${t}u`,re=te==="ext_only"?"0u":`(row_idx * 2u + sg) * ${t}u`;let H=`  let ep_ext_off = ${le};
  let ep_main_off = ${re};
`;for(let J=0;J<V-be;J+=4){const G=be+J;H+=`  {
    let qw = reduce_pack4(${fe}.v_${J}, ${fe}.v_${J+1}, ${fe}.v_${J+2}, ${fe}.v_${J+3}, h, slane, ${G}u, ep_ext_off, ep_main_off, ${me});
    if (${I}) {
      ${E(k,G,"qw.x")}
      ${E(k,G+1,"qw.y")}
      ${E(k,G+2,"qw.z")}
      ${E(k,G+3,"qw.w")}
    }
  }
`}return H}}}if(i==="none"){const pe=ct(32,fe=>`    {
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
  a0 : ${P}, a1 : ${P}, a2 : ${P}, a3 : ${P},
  h : u32, slane : u32, c_base : u32, ext_off : u32, main_off : u32, mom_mode : u32
) -> vec4<u32> {
  let f0 = vec4<f32>(a0${F});
  let f1 = vec4<f32>(a1${F});
  let f2 = vec4<f32>(a2${F});
  let f3 = vec4<f32>(a3${F});
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
${pe}    let sp = rmx - rmn;
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
`,emit:({accVar:fe,cStart:be,cEnd:V,hrExpr:ie,yRowExpr:k,momMode:te,writeY8Expr:I="true"})=>{const me=te==="ext_and_main"?"1u":te==="ext_only"?"2u":"0u",le=te==="main"?"0u":`(${ie}) * ${t}u`,re=te==="ext_only"?"0u":`(row_idx * 2u + sg) * ${t}u`;let H=`  let ep_ext_off = ${le};
  let ep_main_off = ${re};
`;for(let J=0;J<V-be;J+=4){const G=be+J;H+=`  {
    let qw = reduce_pack4(${fe}.v_${J}, ${fe}.v_${J+1}, ${fe}.v_${J+2}, ${fe}.v_${J+3}, h, slane, ${G}u, ep_ext_off, ep_main_off, ${me});
    if (${I}) {
      ${E(k,G,"qw.x")}
      ${E(k,G+1,"qw.y")}
      ${E(k,G+2,"qw.z")}
      ${E(k,G+3,"qw.w")}
    }
  }
`}return H}}}if(u){const pe=ct(31,fe=>{const be=fe+1;return`    {
      let s = sh_sq[rb + ${be}u];
      let m = sh_mm[rb + ${be}u];
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
  h : u32, slane : u32, c_base : u32, ext_off : u32, main_off : u32, mom_mode : u32
) -> vec4<u32> {
  let f0 = vec4<f32>(a0${F});
  let f1 = vec4<f32>(a1${F});
  let f2 = vec4<f32>(a2${F});
  let f3 = vec4<f32>(a3${F});
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
${pe}    let fmn = f32(rmn);
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
`,emit:({accVar:fe,cStart:be,cEnd:V,hrExpr:ie,yRowExpr:k,momMode:te,writeY8Expr:I="true"})=>{const me=te==="ext_and_main"?"1u":te==="ext_only"?"2u":"0u",le=te==="main"?"0u":`(${ie}) * ${t}u`,re=te==="ext_only"?"0u":`(row_idx * 2u + sg) * ${t}u`;let H=`  let ep_ext_off = ${le};
  let ep_main_off = ${re};
`;for(let J=0;J<V-be;J+=4){const G=be+J;H+=`  {
    let qw = reduce_pack4(${fe}.v_${J}, ${fe}.v_${J+1}, ${fe}.v_${J+2}, ${fe}.v_${J+3}, h, slane, ${G}u, ep_ext_off, ep_main_off, ${me});
    if (${I}) {
      ${E(k,G,"qw.x")}
      ${E(k,G+1,"qw.y")}
      ${E(k,G+2,"qw.z")}
      ${E(k,G+3,"qw.w")}
    }
  }
`}return H}}}const Y=ct(32,pe=>`    {
      let s = sh_sq[rb + ${pe}u];
      let m = sh_mm[rb + ${pe}u];
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
  h : u32, slane : u32, c_base : u32, ext_off : u32, main_off : u32, mom_mode : u32
) -> vec2<u32> {
  let f0 = vec4<f32>(a0${F});
  let f1 = vec4<f32>(a1${F});
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
${Y}    let sp = rmx - rmn;
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
`,emit:({accVar:pe,cStart:ve,cEnd:fe,hrExpr:be,yRowExpr:V,momMode:ie,writeY8Expr:k="true"})=>{const te=ie==="ext_and_main"?"1u":ie==="ext_only"?"2u":"0u",I=ie==="main"?"0u":`(${be}) * ${t}u`,me=ie==="ext_only"?"0u":`(row_idx * 2u + sg) * ${t}u`;let le=`  let ep_ext_off = ${I};
  let ep_main_off = ${me};
`;for(let re=0;re<fe-ve;re+=2){const H=ve+re;le+=`  {
    let qw = reduce_pack2(${pe}.v_${re}, ${pe}.v_${re+1}, h, slane, ${H}u, ep_ext_off, ep_main_off, ${te});
    if (${k}) {
      ${E(V,H,"qw.x")}
      ${E(V,H+1,"qw.y")}
    }
  }
`}return le}}},D=()=>`
@group(0) @binding(0) var<storage, read_write> act0 : array<u32>;
@group(0) @binding(1) var<storage, read_write> act1 : array<u32>;
@compute @workgroup_size(${ft}, 1, 1)
fn main(@builtin(local_invocation_id) lid : vec3<u32>,
        @builtin(workgroup_id) wid : vec3<u32>) {
  let row_base = (wid.z * 256u + wid.y) * ${d}u + lid.x;
  let val = ${S.uZeroWord}u;
  for (var c : u32 = 0u; c < ${p}u; c = c + 1u) {
    let idx = row_base + c * ${ft}u;
    act0[idx] = val;
    ${c?"act1[idx] = val;":""}
  }
}`,N=a[0];return{initActWgsl:D,conv0Wgsl:()=>{const O=!u&&c,F=z(!1),E=(be,V)=>{const ie=be/4,k=V/4;return ct(k-ie,te=>{const I=ie+te,me=I*4;return`          {
            let w0 = w16_4[wb + ${I}u];
            let w1 = w16_4[wb + ${f+I}u];
            let w2 = w16_4[wb + ${2*f+I}u];
            a_${me}     = fma(vn, ${P}(w0.x), fma(vc, ${P}(w1.x), fma(vp, ${P}(w2.x), a_${me})));
            a_${me+1} = fma(vn, ${P}(w0.y), fma(vc, ${P}(w1.y), fma(vp, ${P}(w2.y), a_${me+1})));
            a_${me+2} = fma(vn, ${P}(w0.z), fma(vc, ${P}(w1.z), fma(vp, ${P}(w2.z), a_${me+2})));
            a_${me+3} = fma(vn, ${P}(w0.w), fma(vc, ${P}(w1.w), fma(vp, ${P}(w2.w), a_${me+3})));
          }
`})},K=Math.floor(N/4),Y=N%4;let Z="";Y===0?Z=`
        let vn = inp_4[base - ${K}u];
        let vc = inp_4[base];
        let vp = inp_4[base + ${K}u];`:K===0&&Y===1?Z=`
        let vL = inp_4[base - 1u];
        let vc = inp_4[base];
        let vR = inp_4[base + 1u];
        let vn = ${P}(vL.w, vc.xyz);
        let vp = ${P}(vc.yzw, vR.x);`:Y===1?Z=`
        let vL = inp_4[base - ${K+1}u];
        let vN = inp_4[base - ${K}u];
        let vc = inp_4[base];
        let vP = inp_4[base + ${K}u];
        let vR = inp_4[base + ${K+1}u];
        let vn = ${P}(vL.w, vN.xyz);
        let vp = ${P}(vP.yzw, vR.x);`:Y===2?Z=`
        let vL = inp_4[base - ${K+1}u];
        let vN = ${K===0?"inp_4[base]":`inp_4[base - ${K}u]`};
        let vc = ${K===0?"vN":"inp_4[base]"};
        let vP = ${K===0?"vN":`inp_4[base + ${K}u]`};
        let vR = inp_4[base + ${K+1}u];
        let vn = ${P}(vL.zw, vN.xy);
        let vp = ${P}(vP.zw, vR.xy);`:Z=`
        let vL = inp_4[base - ${K+1}u];
        let vN = ${K===0?"inp_4[base]":`inp_4[base - ${K}u]`};
        let vc = ${K===0?"vN":"inp_4[base]"};
        let vP = ${K===0?"vN":`inp_4[base + ${K}u]`};
        let vR = inp_4[base + ${K+1}u];
        let vn = ${P}(vL.yzw, vN.x);
        let vp = ${P}(vP.w, vR.xyz);`;const pe=(be,V,ie,k)=>{const te=k-ie,I=ct(te,re=>`  v_${re} : ${P},
`),me=ct(te,re=>{const H=ie+re;return i==="none"?`  var a_${H} = ${P}(${y}(qmeta[${3*t+H}u]));
`:`  var a_${H} = ${P}(0.0${C});
`}),le=Array.from({length:te},(re,H)=>`a_${ie+H}`).join(", ");return`struct ${V} {
${I}};
fn ${be}(y : i32, z : i32, x_pad : u32) -> ${V} {
${me}  var tap_yz : u32 = 0u;
  for (var dz : i32 = -1; dz <= 1; dz = dz + 1) {
    let sz = z + dz * ${N};
    for (var dy : i32 = -1; dy <= 1; dy = dy + 1) {
      let sy = y + dy * ${N};
      if ((u32(sz) | u32(sy)) < 256u) {
        let base = (u32(sz) * 256u + u32(sy)) * ${ft}u + x_pad;
${Z}
        let wb = tap_yz * ${3*f}u;
${E(ie,k)}
      }
      tap_yz = tap_yz + 1u;
    }
  }
  return ${V}(${le});
}
`},ve=(be,V,ie,k,te)=>{const I=te?`  let y = i32(p0.bg_y0 + lid.y);
  let z = i32(p0.bg_z0);`:`  var y : i32;
  var z : i32;
  if (p0.is_full != 0u) {
    y = i32(wid.y * 4u + lid.y);
    z = i32(wid.z);
  } else {
    let pk = strips0[wid.z];
    y = i32((pk & 255u) * 4u + lid.y);
    z = i32(pk >> 8u);
  }`,me=te?"lid.y * 2u + sg":"row_idx * 2u + sg";return`
@compute @workgroup_size(64, 4, 1)
fn ${be}(@builtin(local_invocation_id) lid : vec3<u32>,
             @builtin(workgroup_id) wid : vec3<u32>${F.entryArgs||""}) {
  let sg = lid.x >> 5u;
  let slane = lid.x & 31u;
${F.localHeader}  let x_pad = lid.x + ${Vt}u;
${I}
  let acc = ${V}(y, z, x_pad);
  let row_idx = u32(z) * 256u + u32(y);
  let y_row_base = row_idx * ${b}u + lid.x;
${F.emit({accVar:"acc",cStart:ie,cEnd:k,hrExpr:me,yRowExpr:"y_row_base",momMode:te?"ext_only":"main"})}}`},fe=O?pe("run_conv0_lo","Conv0AccLo",0,p)+pe("run_conv0_hi","Conv0AccHi",p,t)+ve("main_lo","run_conv0_lo",0,p,!1)+ve("main_hi","run_conv0_hi",p,t,!1)+ve("main_bg_lo","run_conv0_lo",0,p,!0)+ve("main_bg_hi","run_conv0_hi",p,t,!0):pe("run_conv0","Conv0Acc",0,t)+ve("main","run_conv0",0,t,!1)+ve("main_bg","run_conv0",0,t,!0);return`${h}${A}
struct Params0 {
  is_full : u32,
  bg_y0 : u32,
  bg_z0 : u32,
  pad0 : u32,
};
@group(0) @binding(0) var<storage, read> inp_4 : array<${P}>;
@group(0) @binding(1) var<storage, read_write> y8_0 : array<u32>;
@group(0) @binding(2) var<storage, read_write> y8_1 : array<u32>;
@group(0) @binding(3) var<storage, read> w16_4 : array<${P}>;
@group(0) @binding(4) var<storage, read> qmeta : array<f32>;
@group(0) @binding(5) var<storage, read_write> mom_main : array<vec4<f32>>;
@group(0) @binding(6) var<storage, read_write> mom_ext : array<vec4<f32>>;
@group(0) @binding(7) var<storage, read> strips0 : array<u32>;
@group(0) @binding(8) var<uniform> p0 : Params0;
${F.decls}${fe}`},prepWgsl:()=>`${h}
${Rn(r)}
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
@group(0) @binding(2) var<storage, read_write> mom_main : array<vec4<f32>>;
@group(0) @binding(3) var<storage, read_write> mom_ext : array<vec4<f32>>;
@group(0) @binding(4) var<storage, read_write> mom_stats : array<vec4<f32>>;
@group(0) @binding(5) var<storage, read_write> w_eff : array<${P}>;
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
    for (var hr : u32 = lid; hr < ${Vn}u; hr = hr + 256u) {
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
    let ic = (idx / ${3*f}u) % ${t}u;
    let qs = mom_stats[ic * 2u].z;
    w_eff[idx] = w16_4[pp.next_w_vec4_off + idx] * ${y}(qs * scale_num);
  }
  if (lid < ${f}u) {
    ${i==="none"?`
    let mb = pp.next_meta_off + ${3*t}u + lid * 4u;
    w_eff[${_}u + lid] = ${P}(${y}(qmeta[mb]), ${y}(qmeta[mb + 1u]), ${y}(qmeta[mb + 2u]), ${y}(qmeta[mb + 3u]));
    `:`
    w_eff[${_}u + lid] = ${P}(0.0${C});
    `}
  }
}`,normWgsl:()=>`${Rn(r)}
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
  let x_pad = x4 + ${Vt}u;
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
    let yv = unpack4x8unorm(y8_0[y_base + c * ${mt}u]) * rm.w + vec4<f32>(rm.z);
    let a = vec4<f32>(
      act(yv.x * st.x + st.y),
      act(yv.y * st.x + st.y),
      act(yv.z * st.x + st.y),
      act(yv.w * st.x + st.y)
    );
    act8_0[a_base + c * ${ft}u] = pack4x8unorm((a * inv_qs + vec4<f32>(${S.zeroBin.toFixed(1)})) * (1.0 / 255.0));
  }
  ${c?`
  for (var c : u32 = 0u; c < ${p}u; c = c + 1u) {
    let cg = ${p}u + c;
    let inv_qs = mom_stats[cg * 2u].w;
    let st = mom_stats[cg * 2u + 1u];
    let rm = mom_main[mom_base + cg];
    let yv = unpack4x8unorm(y8_1[y_base + c * ${mt}u]) * rm.w + vec4<f32>(rm.z);
    let a = vec4<f32>(
      act(yv.x * st.x + st.y),
      act(yv.y * st.x + st.y),
      act(yv.z * st.x + st.y),
      act(yv.w * st.x + st.y)
    );
    act8_1[a_base + c * ${ft}u] = pack4x8unorm((a * inv_qs + vec4<f32>(${S.zeroBin.toFixed(1)})) * (1.0 / 255.0));
  }`:""}
}

@compute @workgroup_size(64, 4, 1)
fn norm_halo_fill(@builtin(local_invocation_id) lid : vec3<u32>,
                  @builtin(workgroup_id) wid : vec3<u32>) {
  let idx = wid.y * 4u + lid.y;
  if (idx >= np.n_halo) { return; }
  let x4 = lid.x;
  let sg = x4 >> 5u;
  let x_pad = x4 + ${Vt}u;
  let y_base = np.bg_row * ${b}u + x4;
  let mom_base = sg * ${t}u;
  let dst_row = norm_aux[np.halo_off + idx];
  let a_base = dst_row * ${d}u + x_pad;

  for (var c : u32 = 0u; c < ${p}u; c = c + 1u) {
    let inv_qs = mom_stats[c * 2u].w;
    let st = mom_stats[c * 2u + 1u];
    let rm = mom_ext[mom_base + c];
    let yv = unpack4x8unorm(y8_0[y_base + c * ${mt}u]) * rm.w + vec4<f32>(rm.z);
    let a = vec4<f32>(
      act(yv.x * st.x + st.y),
      act(yv.y * st.x + st.y),
      act(yv.z * st.x + st.y),
      act(yv.w * st.x + st.y)
    );
    act8_0[a_base + c * ${ft}u] = pack4x8unorm((a * inv_qs + vec4<f32>(${S.zeroBin.toFixed(1)})) * (1.0 / 255.0));
  }
  ${c?`
  for (var c : u32 = 0u; c < ${p}u; c = c + 1u) {
    let cg = ${p}u + c;
    let inv_qs = mom_stats[cg * 2u].w;
    let st = mom_stats[cg * 2u + 1u];
    let rm = mom_ext[mom_base + cg];
    let yv = unpack4x8unorm(y8_1[y_base + c * ${mt}u]) * rm.w + vec4<f32>(rm.z);
    let a = vec4<f32>(
      act(yv.x * st.x + st.y),
      act(yv.y * st.x + st.y),
      act(yv.z * st.x + st.y),
      act(yv.w * st.x + st.y)
    );
    act8_1[a_base + c * ${ft}u] = pack4x8unorm((a * inv_qs + vec4<f32>(${S.zeroBin.toFixed(1)})) * (1.0 / 255.0));
  }`:""}
}`,convWgsl:()=>{const O=!u&&c,F=z(u),E=(V,ie)=>u?`
          let ${V} = vec4<f16>(vec2<f16>(unpack2x16float(((${ie} & 0x00FF00FFu) << 2u) | 0x3C003C00u)), vec2<f16>(unpack2x16float(((${ie} >> 6u) & 0x03FC03FCu) | 0x3C003C00u))) - vec4<f16>(${S.sterbenzSub});`:`
          let ${V} = unpack4x8unorm(${ie}) - vec4<f32>(${S.uZeroFloat});`,K=V=>`
          let uL = ${V}[base - off0];
          let uN = ${V}[base - off1];
          let uC = ${V}[base];
          let uP = ${V}[base + off1];
          let uR = ${V}[base + off0];
          let u_neg = (uL >> sh_l) | (uN << sh_r);
          let u_pos = (uP >> sh_r) | (uR << sh_l);`+E("vn","u_neg")+E("vc","uC")+E("vp","u_pos"),Y=(V,ie)=>{const k=V/4,te=ie/4;if(x){const I=f/2,me=f;let le="";for(let re=k;re<te;re+=2){const H=re*4,J=re/2;le+=`          {
            let wp0 = w_eff_u[wbu + ${J}u];
            let wp1 = w_eff_u[wbu + ${I+J}u];
            let wp2 = w_eff_u[wbu + ${me+J}u];
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
`}return le}return ct(te-k,I=>{const me=k+I,le=me*4;return`          {
            let w0 = w_eff[wb + ${me}u];
            let w1 = w_eff[wb + ${f+me}u];
            let w2 = w_eff[wb + ${2*f+me}u];
            a_${le}     = fma(vn, ${P}(w0.x), fma(vc, ${P}(w1.x), fma(vp, ${P}(w2.x), a_${le})));
            a_${le+1} = fma(vn, ${P}(w0.y), fma(vc, ${P}(w1.y), fma(vp, ${P}(w2.y), a_${le+1})));
            a_${le+2} = fma(vn, ${P}(w0.z), fma(vc, ${P}(w1.z), fma(vp, ${P}(w2.z), a_${le+2})));
            a_${le+3} = fma(vn, ${P}(w0.w), fma(vc, ${P}(w1.w), fma(vp, ${P}(w2.w), a_${le+3})));
          }
`})},Z=(V,ie,k,te)=>{const I=te-k,me=ct(I,$e=>`  v_${$e} : ${P},
`),le=ct(I,$e=>{const ye=k+$e;if(i==="none"){const Se=ye>>>2,Ce=["x","y","z","w"][ye&3];if(x){const Ge=_+Se>>>1,Re=_+Se&1?"u4_hi":"u4_lo";return`  var a_${ye} = ${P}(${Re}(w_eff_u[${Ge}u]).${Ce});
`}return`  var a_${ye} = ${P}(w_eff[${_+Se}u].${Ce});
`}return`  var a_${ye} = ${P}(0.0${C});
`}),re=p<=8?`(${p}u + cp.pad0)`:`${p}u`,H=x?`        let wbu_tap = tap_yz * ${t*3*f/2}u;
        for (var ic : u32 = 0u; ic < ${re}; ic = ic + 1u) {
          let base = row_off + ic * ${ft}u;
${K("act8_0")}
          let wbu = wbu_tap + ic * ${3*f/2}u;
${Y(k,te)}
        }`:`        let wb_tap = tap_yz * ${t*3*f}u;
        for (var ic : u32 = 0u; ic < ${re}; ic = ic + 1u) {
          let base = row_off + ic * ${ft}u;
${K("act8_0")}
          let wb = wb_tap + ic * ${3*f}u;
${Y(k,te)}
        }`,J=x?`        for (var ic : u32 = 0u; ic < ${re}; ic = ic + 1u) {
          let base = row_off + ic * ${ft}u;
${K("act8_1")}
          let wbu = wbu_tap + (${p}u + ic) * ${3*f/2}u;
${Y(k,te)}
        }`:`        for (var ic : u32 = 0u; ic < ${re}; ic = ic + 1u) {
          let base = row_off + ic * ${ft}u;
${K("act8_1")}
          let wb = wb_tap + (${p}u + ic) * ${3*f}u;
${Y(k,te)}
        }`,G=Array.from({length:I},($e,ye)=>`a_${k+ye}`).join(", ");return`struct ${ie} {
${me}};
fn ${V}(y : i32, z : i32, x_pad : u32, dp : u32) -> ${ie} {
${le}  let d_step = i32(dp & 63u);
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
${H}
        ${c?J:""}
      }
      tap_yz = tap_yz + 1u;
    }
  }
  return ${ie}(${G});
}
`},pe=(V,ie,k,te,I)=>{const me=I?m?`
  let ext_i = cp.ext_base + wid.z;
  let pk = strips[cp.ext_off + ext_i];
  let y = i32((pk & 255u) * 4u + lid.y);
  let z = i32(pk >> 8u);`:`
  let pk = strips[cp.ext_off + wid.z];
  let y = i32((pk & 255u) * 4u + lid.y);
  let z = i32(pk >> 8u);`:m?`
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
  }`,le=I?m?"ext_i * 8u + lid.y * 2u + sg":"wid.z * 8u + lid.y * 2u + sg":"row_idx * 2u + sg",re=I?"(((dp >> 24u) & 1u) != 0u)":"true";return`
@compute @workgroup_size(64, 4, 1)
fn ${V}(@builtin(local_invocation_id) lid : vec3<u32>,
             @builtin(workgroup_id) wid : vec3<u32>${F.entryArgs||""}) {
  let x4 = lid.x;
  let sg = x4 >> 5u;
  let slane = x4 & 31u;
${F.localHeader}  let x_pad = x4 + ${Vt}u;
${me}
  let dp = cp.d_pack;
  let acc = ${ie}(y, z, x_pad, dp);
  let row_idx = u32(z) * 256u + u32(y);
  let y_row_base = row_idx * ${b}u + x4;
${F.emit({accVar:"acc",cStart:k,cEnd:te,hrExpr:le,yRowExpr:"y_row_base",momMode:I?"ext_and_main":"main",writeY8Expr:re})}}`},ve=O?Z("run_conv_lo","ConvAccLo",0,p)+Z("run_conv_hi","ConvAccHi",p,t)+pe("main_lo","run_conv_lo",0,p,!1)+pe("main_hi","run_conv_hi",p,t,!1)+pe("main_ext_lo","run_conv_lo",0,p,!0)+pe("main_ext_hi","run_conv_hi",p,t,!0):Z("run_conv","ConvAcc",0,t)+pe("main","run_conv",0,t,!1)+pe("main_ext","run_conv",0,t,!0),fe=x?`fn u4_lo(u : vec4<u32>) -> vec4<f16> {
  return vec4<f16>(vec2<f16>(unpack2x16float(u.x)), vec2<f16>(unpack2x16float(u.y)));
}
fn u4_hi(u : vec4<u32>) -> vec4<f16> {
  return vec4<f16>(vec2<f16>(unpack2x16float(u.z)), vec2<f16>(unpack2x16float(u.w)));
}
@group(0) @binding(6) var<uniform> w_eff_u : array<vec4<u32>, ${Math.ceil($/2)}>;`:`@group(0) @binding(6) var<storage, read> w_eff : array<${P}>;`;return`${h}${A}
${m?`struct ConvParams {
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
${F.decls}${ve}`},clsWgsl:()=>`${h}
${Rn(r)}
struct ClsParams {
  w_vec4_off : u32,
  bias_off : u32,
  is_full : u32,
  pad0 : u32,
};
@group(0) @binding(0) var<storage, read> y8_0 : array<u32>;
@group(0) @binding(1) var<storage, read> y8_1 : array<u32>;
@group(0) @binding(2) var<storage, read> w16_4 : array<${P}>;
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

  var feat : array<${P}, ${n}>;
  for (var c : u32 = 0u; c < ${n}u; c = c + 1u) {
    let st = mom_stats[c * 2u + 1u];
    let rm = mom_main[mom_base + c];
    ${c?`
    let in_hi = c >= ${p}u;
    let c_loc = select(c, c - ${p}u, in_hi);
    let idx4 = y_base + c_loc * ${mt}u;
    let q_word = select(y8_0[idx4], y8_1[idx4], in_hi);
    `:`
    let q_word = y8_0[y_base + c * ${mt}u];
    `}
    let yv = unpack4x8unorm(q_word) * rm.w + vec4<f32>(rm.z);
    let fv = vec4<f32>(
      act(yv.x * st.x + st.y),
      act(yv.y * st.x + st.y),
      act(yv.z * st.x + st.y),
      act(yv.w * st.x + st.y)
    );
    feat[c] = ${P}(fv);
  }

  let w_cls = cp.w_vec4_off;
  let m_cls = cp.bias_off;
${dr({chan:n,clsK4:o,nclass:s,V4:P,suf:C,readBiasStmt:"",biasExpr:O=>`qmeta[m_cls + k_base + ${O}u]`,probCfg:g})}
}`,totalWEffVec4s:$,useUniformWeff:x,csHalf:p,chunkableStd:m,halfPass0:!u&&c,halfPassConv:!u&&c}}function wr(e){const{cs:t,chan:n,nclass:s,clsK4:o,dilations:a,activation:r,norm:i,hasF16:u,subgroupMode:l="none",numConvs:c,probCfg:g}=e,m=t/4,f=t/2,p=t/4,d=m*ft,b=16384,M=t*mt,$=t*2+4,x=$+Vn*t,S=4*t,h=(c*S+o*4)/4,w=9*t*3*p,A=w,y=w+p,C=u&&p%2===0&&y*8<=65536,P=mr(r),U=u?`enable f16;
`:"",z=u&&l!=="none",D=z?`enable subgroups;
`:"",N=u?"f16":"f32",X=u?"h":"f",B=`vec4<${N}>`,R=u?256:255,q=V=>{const ie=V?".xzyw":"",k=(le,re,H)=>{if(le==="stage_bg")return`stage[s_bg_base + ${re*mt}u] = ${H};`;if(le==="stage")return`stage[s_row_base + ${re*mt}u] = ${H};`;const J=Math.floor(re/m),G=re%m;return`if (use_act) { act8_${J}[a_row_base + ${G*ft}u] = ${H}; } else { stage[s_row_base + ${re*mt}u] = ${H}; }`};if(z&&(l==="sg32"||l==="sg64"||l==="sg32_64")){const le=_r(l,i);return{decls:le.decls,entryArgs:le.entryArgs,localHeader:"",emit:({accVar:re,cStart:H,cEnd:J,hrExpr:G,storeMode:$e,momOffExpr:ye,alsoWriteMomMain:Se=!1,writeY8Expr:Ce="true"})=>ct(J-H,Ge=>{const Re=H+Ge;return i==="none"?`  {
    let f = vec4<f32>(${re}.v_${Ge}${ie});
    let lmn = ${le.min("min(min(f.x, f.y), min(f.z, f.w))")};
    let lmx = ${le.max("max(max(f.x, f.y), max(f.z, f.w))")};
    let sp = lmx - lmn;
    let inv = select(0.0, 1.0 / sp, sp > 1e-7);
    if (${Ce}) {
      ${k($e,Re,"pack4x8unorm((f - vec4<f32>(lmn)) * inv)")}
    }
    if (slane == 0u) {
      let mv = vec4<f32>(0.0, 0.0, lmn, sp);
      mom[${ye} + (${G}) * ${t}u + ${Re}u] = mv;
      ${Se?`mom[${$}u + (row_idx * 2u + sg) * ${t}u + ${Re}u] = mv;`:""}
    }
  }
`:`  {
    let f = vec4<f32>(${re}.v_${Ge}${ie});
    let ls = ${le.add("f.x + f.y + f.z + f.w")};
    let lq = ${le.add("dot(f, f)")};
    let lmn = ${le.min("min(min(f.x, f.y), min(f.z, f.w))")};
    let lmx = ${le.max("max(max(f.x, f.y), max(f.z, f.w))")};
    let sp = lmx - lmn;
    let inv = select(0.0, 1.0 / sp, sp > 1e-7);
    if (${Ce}) {
      ${k($e,Re,"pack4x8unorm((f - vec4<f32>(lmn)) * inv)")}
    }
    if (slane == 0u) {
      let mv = vec4<f32>(ls, lq, lmn, sp);
      mom[${ye} + (${G}) * ${t}u + ${Re}u] = mv;
      ${Se?`mom[${$}u + (row_idx * 2u + sg) * ${t}u + ${Re}u] = mv;`:""}
    }
  }
`})}}if(z&&l==="sg_small")return{decls:br({V4:B,sw:ie,norm:i,writeMomFn:`fn write_mom(c_out : u32, mv : vec4<f32>, mom_off : u32, main_off : u32, also_main : bool) {
  mom[mom_off + c_out] = mv;
  if (also_main) {
    mom[main_off + c_out] = mv;
  }
}
`,momParams:"mom_off : u32, main_off : u32, also_main : bool",momArgs:"mom_off, main_off, also_main"}),entryArgs:`,
             @builtin(subgroup_size) sg_size : u32,
             @builtin(subgroup_invocation_id) sg_id : u32`,localHeader:`  let h = lid.y * 2u + sg;
`,emit:({accVar:H,cStart:J,cEnd:G,hrExpr:$e,storeMode:ye,momOffExpr:Se,alsoWriteMomMain:Ce=!1,writeY8Expr:Ge="true"})=>{const Re=`${Se} + (${$e}) * ${t}u`,Xe=Ce?`${$}u + (row_idx * 2u + sg) * ${t}u`:"0u";let Ee=`  let ep_mom_off = ${Re};
  let ep_main_off = ${Xe};
`;for(let Be=0;Be<G-J;Be+=4){const ke=J+Be;Ee+=`  {
    let qw = reduce_pack4_sg(${H}.v_${Be}, ${H}.v_${Be+1}, ${H}.v_${Be+2}, ${H}.v_${Be+3}, h, slane, sg_size, sg_id, ${ke}u, ep_mom_off, ep_main_off, ${Ce});
    if (${Ge}) {
      ${k(ye,ke,"qw.x")}
      ${k(ye,ke+1,"qw.y")}
      ${k(ye,ke+2,"qw.z")}
      ${k(ye,ke+3,"qw.w")}
    }
  }
`}return Ee}};const te=`    let c_out = c_base + slane;
    mom[mom_off + c_out] = mv;
    if (also_main) {
      mom[main_off + c_out] = mv;
    }`;if(i==="none"&&u){const le=ct(31,H=>`    {
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
${le}    let fmn = f32(rmn);
    let sp = f32(rmx) - fmn;
    sh_res[h * 4u + slane] = vec2<f32>(fmn, select(0.0, 1.0 / sp, sp > 1e-7));
    let mv = vec4<f32>(0.0, 0.0, fmn, sp);
${te}
  }
  workgroupBarrier();
  let f0 = vec4<f32>(a0${ie});
  let f1 = vec4<f32>(a1${ie});
  let f2 = vec4<f32>(a2${ie});
  let f3 = vec4<f32>(a3${ie});
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
`,emit:({accVar:H,cStart:J,cEnd:G,hrExpr:$e,storeMode:ye,momOffExpr:Se,alsoWriteMomMain:Ce=!1,writeY8Expr:Ge="true"})=>{const Re=`${Se} + (${$e}) * ${t}u`,Xe=Ce?`${$}u + (row_idx * 2u + sg) * ${t}u`:"0u";let Ee=`  let ep_mom_off = ${Re};
  let ep_main_off = ${Xe};
`;for(let Be=0;Be<G-J;Be+=4){const ke=J+Be;Ee+=`  {
    let qw = reduce_pack4(${H}.v_${Be}, ${H}.v_${Be+1}, ${H}.v_${Be+2}, ${H}.v_${Be+3}, h, slane, ${ke}u, ep_mom_off, ep_main_off, ${Ce});
    if (${Ge}) {
      ${k(ye,ke,"qw.x")}
      ${k(ye,ke+1,"qw.y")}
      ${k(ye,ke+2,"qw.z")}
      ${k(ye,ke+3,"qw.w")}
    }
  }
`}return Ee}}}if(i==="none"){const le=ct(32,H=>`    {
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
  a0 : ${B}, a1 : ${B}, a2 : ${B}, a3 : ${B},
  h : u32, slane : u32, c_base : u32, mom_off : u32, main_off : u32, also_main : bool
) -> vec4<u32> {
  let f0 = vec4<f32>(a0${ie});
  let f1 = vec4<f32>(a1${ie});
  let f2 = vec4<f32>(a2${ie});
  let f3 = vec4<f32>(a3${ie});
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
${te}
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
`,emit:({accVar:H,cStart:J,cEnd:G,hrExpr:$e,storeMode:ye,momOffExpr:Se,alsoWriteMomMain:Ce=!1,writeY8Expr:Ge="true"})=>{const Re=`${Se} + (${$e}) * ${t}u`,Xe=Ce?`${$}u + (row_idx * 2u + sg) * ${t}u`:"0u";let Ee=`  let ep_mom_off = ${Re};
  let ep_main_off = ${Xe};
`;for(let Be=0;Be<G-J;Be+=4){const ke=J+Be;Ee+=`  {
    let qw = reduce_pack4(${H}.v_${Be}, ${H}.v_${Be+1}, ${H}.v_${Be+2}, ${H}.v_${Be+3}, h, slane, ${ke}u, ep_mom_off, ep_main_off, ${Ce});
    if (${Ge}) {
      ${k(ye,ke,"qw.x")}
      ${k(ye,ke+1,"qw.y")}
      ${k(ye,ke+2,"qw.z")}
      ${k(ye,ke+3,"qw.w")}
    }
  }
`}return Ee}}}if(u){const le=ct(31,H=>{const J=H+1;return`    {
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
  a0 : ${B}, a1 : ${B}, a2 : ${B}, a3 : ${B},
  h : u32, slane : u32, c_base : u32, mom_off : u32, main_off : u32, also_main : bool
) -> vec4<u32> {
  let f0 = vec4<f32>(a0${ie});
  let f1 = vec4<f32>(a1${ie});
  let f2 = vec4<f32>(a2${ie});
  let f3 = vec4<f32>(a3${ie});
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
${te}
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
`,emit:({accVar:H,cStart:J,cEnd:G,hrExpr:$e,storeMode:ye,momOffExpr:Se,alsoWriteMomMain:Ce=!1,writeY8Expr:Ge="true"})=>{const Re=`${Se} + (${$e}) * ${t}u`,Xe=Ce?`${$}u + (row_idx * 2u + sg) * ${t}u`:"0u";let Ee=`  let ep_mom_off = ${Re};
  let ep_main_off = ${Xe};
`;for(let Be=0;Be<G-J;Be+=4){const ke=J+Be;Ee+=`  {
    let qw = reduce_pack4(${H}.v_${Be}, ${H}.v_${Be+1}, ${H}.v_${Be+2}, ${H}.v_${Be+3}, h, slane, ${ke}u, ep_mom_off, ep_main_off, ${Ce});
    if (${Ge}) {
      ${k(ye,ke,"qw.x")}
      ${k(ye,ke+1,"qw.y")}
      ${k(ye,ke+2,"qw.z")}
      ${k(ye,ke+3,"qw.w")}
    }
  }
`}return Ee}}}const I=ct(32,le=>`    {
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
  a0 : ${B}, a1 : ${B},
  h : u32, slane : u32, c_base : u32, mom_off : u32, main_off : u32, also_main : bool
) -> vec2<u32> {
  let f0 = vec4<f32>(a0${ie});
  let f1 = vec4<f32>(a1${ie});
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
${I}    let sp = rmx - rmn;
    sh_res[h * 2u + slane] = vec2<f32>(rmn, select(0.0, 1.0 / sp, sp > 1e-7));
    let mv = vec4<f32>(rs, rq, rmn, sp);
${te}
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
`,emit:({accVar:le,cStart:re,cEnd:H,hrExpr:J,storeMode:G,momOffExpr:$e,alsoWriteMomMain:ye=!1,writeY8Expr:Se="true"})=>{const Ce=`${$e} + (${J}) * ${t}u`,Ge=ye?`${$}u + (row_idx * 2u + sg) * ${t}u`:"0u";let Re=`  let ep_mom_off = ${Ce};
  let ep_main_off = ${Ge};
`;for(let Xe=0;Xe<H-re;Xe+=2){const Ee=re+Xe;Re+=`  {
    let qw = reduce_pack2(${le}.v_${Xe}, ${le}.v_${Xe+1}, h, slane, ${Ee}u, ep_mom_off, ep_main_off, ${ye});
    if (${Se}) {
      ${k(G,Ee,"qw.x")}
      ${k(G,Ee+1,"qw.y")}
    }
  }
`}return Re}}},j=()=>`
@group(0) @binding(0) var<storage, read_write> act0 : array<u32>;
@group(0) @binding(1) var<storage, read_write> act1 : array<u32>;
@group(0) @binding(2) var<storage, read_write> act2 : array<u32>;
@group(0) @binding(3) var<storage, read_write> act3 : array<u32>;
@compute @workgroup_size(${ft}, 1, 1)
fn main(@builtin(local_invocation_id) lid : vec3<u32>,
        @builtin(workgroup_id) wid : vec3<u32>) {
  let row_base = (wid.z * 256u + wid.y) * ${d}u + lid.x;
  let val = ${P.uZeroWord}u;
  for (var c : u32 = 0u; c < ${m}u; c = c + 1u) {
    let idx = row_base + c * ${ft}u;
    act0[idx] = val;
    act1[idx] = val;
    act2[idx] = val;
    act3[idx] = val;
  }
}`,O=a[0],F=!u&&t>=16,E=()=>{const V=q(!1),ie=(H,J)=>{const G=H/4,$e=J/4;return ct($e-G,ye=>{const Se=G+ye,Ce=Se*4;return`          {
            let w0 = w16_4[wb + ${Se}u];
            let w1 = w16_4[wb + ${p+Se}u];
            let w2 = w16_4[wb + ${2*p+Se}u];
            a_${Ce}     = fma(vn, ${B}(w0.x), fma(vc, ${B}(w1.x), fma(vp, ${B}(w2.x), a_${Ce})));
            a_${Ce+1} = fma(vn, ${B}(w0.y), fma(vc, ${B}(w1.y), fma(vp, ${B}(w2.y), a_${Ce+1})));
            a_${Ce+2} = fma(vn, ${B}(w0.z), fma(vc, ${B}(w1.z), fma(vp, ${B}(w2.z), a_${Ce+2})));
            a_${Ce+3} = fma(vn, ${B}(w0.w), fma(vc, ${B}(w1.w), fma(vp, ${B}(w2.w), a_${Ce+3})));
          }
`})},k=Math.floor(O/4),te=O%4;let I="";te===0?I=`
        let vn = inp_4[base - ${k}u];
        let vc = inp_4[base];
        let vp = inp_4[base + ${k}u];`:k===0&&te===1?I=`
        let vL = inp_4[base - 1u];
        let vc = inp_4[base];
        let vR = inp_4[base + 1u];
        let vn = ${B}(vL.w, vc.xyz);
        let vp = ${B}(vc.yzw, vR.x);`:te===1?I=`
        let vL = inp_4[base - ${k+1}u];
        let vN = inp_4[base - ${k}u];
        let vc = inp_4[base];
        let vP = inp_4[base + ${k}u];
        let vR = inp_4[base + ${k+1}u];
        let vn = ${B}(vL.w, vN.xyz);
        let vp = ${B}(vP.yzw, vR.x);`:te===2?I=`
        let vL = inp_4[base - ${k+1}u];
        let vN = ${k===0?"inp_4[base]":`inp_4[base - ${k}u]`};
        let vc = ${k===0?"vN":"inp_4[base]"};
        let vP = ${k===0?"vN":`inp_4[base + ${k}u]`};
        let vR = inp_4[base + ${k+1}u];
        let vn = ${B}(vL.zw, vN.xy);
        let vp = ${B}(vP.zw, vR.xy);`:I=`
        let vL = inp_4[base - ${k+1}u];
        let vN = ${k===0?"inp_4[base]":`inp_4[base - ${k}u]`};
        let vc = ${k===0?"vN":"inp_4[base]"};
        let vP = ${k===0?"vN":`inp_4[base + ${k}u]`};
        let vR = inp_4[base + ${k+1}u];
        let vn = ${B}(vL.yzw, vN.x);
        let vp = ${B}(vP.w, vR.xyz);`;const me=(H,J,G,$e)=>{const ye=$e-G,Se=ct(ye,Re=>`  v_${Re} : ${B},
`),Ce=ct(ye,Re=>{const Xe=G+Re;if(i==="none"){const Ee=3*t+Xe;return`  var a_${Xe} = ${B}(${N}(qmeta_u[${Ee>>>2}u][${Ee&3}u]));
`}return`  var a_${Xe} = ${B}(0.0${X});
`}),Ge=Array.from({length:ye},(Re,Xe)=>`a_${G+Xe}`).join(", ");return`struct ${J} {
${Se}};
fn ${H}(y : i32, z : i32, x_pad : u32) -> ${J} {
${Ce}  var tap_yz : u32 = 0u;
  for (var dz : i32 = -1; dz <= 1; dz = dz + 1) {
    let sz = z + dz * ${O};
    for (var dy : i32 = -1; dy <= 1; dy = dy + 1) {
      let sy = y + dy * ${O};
      if ((u32(sz) | u32(sy)) < 256u) {
        let base = (u32(sz) * 256u + u32(sy)) * ${ft}u + x_pad;
${I}
        let wb = tap_yz * ${3*p}u;
${ie(G,$e)}
      }
      tap_yz = tap_yz + 1u;
    }
  }
  return ${J}(${Ge});
}
`},le=(H,J,G,$e,ye)=>{const Se=ye?`  let y = i32(p0.bg_y0 + lid.y);
  let z = i32(p0.bg_z0);`:`  var y : i32;
  var z : i32;
  if (p0.is_full != 0u) {
    y = i32(wid.y * 4u + lid.y);
    z = i32(wid.z);
  } else {
    let pk = strips0_u[wid.z >> 2u][wid.z & 3u];
    y = i32((pk & 255u) * 4u + lid.y);
    z = i32(pk >> 8u);
  }`,Ce=ye?"lid.y * 2u + sg":"row_idx * 2u + sg",Ge=ye?`${x}u`:`${$}u`,Re=ye?`  let s_bg_base = (${b}u + lid.y) * ${M}u + lid.x;`:`  let row_idx = u32(z) * 256u + u32(y);
  let use_act = u32(z) < 192u;
  let a_row_base = row_idx * ${d}u + x_pad;
  let s_row_base = ((u32(z) & 63u) * 256u + u32(y)) * ${M}u + lid.x;`;return`
@compute @workgroup_size(64, 4, 1)
fn ${H}(@builtin(local_invocation_id) lid : vec3<u32>,
             @builtin(workgroup_id) wid : vec3<u32>${V.entryArgs||""}) {
  let sg = lid.x >> 5u;
  let slane = lid.x & 31u;
${V.localHeader}  let x_pad = lid.x + ${Vt}u;
${Se}
  let acc = ${J}(y, z, x_pad);
${Re}
${V.emit({accVar:"acc",cStart:G,cEnd:$e,hrExpr:Ce,storeMode:ye?"stage_bg":"conv0_split",momOffExpr:Ge})}}`},re=F?me("run_conv0_lo","Conv0AccLo",0,f)+me("run_conv0_hi","Conv0AccHi",f,t)+le("main_lo","run_conv0_lo",0,f,!1)+le("main_hi","run_conv0_hi",f,t,!1)+le("main_bg_lo","run_conv0_lo",0,f,!0)+le("main_bg_hi","run_conv0_hi",f,t,!0):me("run_conv0","Conv0Acc",0,t)+le("main","run_conv0",0,t,!1)+le("main_bg","run_conv0",0,t,!0);return`${U}${D}
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
${V.decls}${re}`},K=()=>`${U}
${Rn(r)}
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
    for (var hr : u32 = lid; hr < ${Vn}u; hr = hr + 256u) {
      let v = mom[${$}u + hr * ${t}u + c];
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
        let v = mom[${$}u + (base_hr + h) * ${t}u + c];
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
        let v = mom[${x}u + e * ${t}u + c];
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
    q_ref = max(q_ref, ${R.toFixed(1)} * qs);
  }
  ${i==="none"?"q_ref = 1.0;":""}
  if (lid == 0u) {
    mom[${t*2}u] = vec4<f32>(q_ref, 0.0, 0.0, 0.0);
  }
  let scale_num = ${R.toFixed(1)} / q_ref;
  for (var idx : u32 = lid; idx < ${w}u; idx = idx + 256u) {
    let ic = (idx / ${3*p}u) % ${t}u;
    let qs = mom[ic * 2u].z;
    w_eff[idx] = w16_4[pp.next_w_vec4_off + idx] * ${N}(qs * scale_num);
  }
  if (lid < ${p}u) {
    ${i==="none"?`
    let mb = pp.next_meta_off + ${3*t}u + lid * 4u;
    w_eff[${A}u + lid] = ${B}(${N}(qmeta[mb]), ${N}(qmeta[mb + 1u]), ${N}(qmeta[mb + 2u]), ${N}(qmeta[mb + 3u]));
    `:`
    w_eff[${A}u + lid] = ${B}(0.0${X});
    `}
  }
}`,Y=()=>`
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
  let x_pad = x4 + ${Vt}u;
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
  let s_base = ((z & 63u) * 256u + y) * ${M}u + x4;
  for (var c : u32 = 0u; c < ${m}u; c = c + 1u) {
    let a_off = a_base + c * ${ft}u;
    act8_0[a_off] = stage[s_base + c * ${mt}u];
    act8_1[a_off] = stage[s_base + (${m}u + c) * ${mt}u];
    act8_2[a_off] = stage[s_base + (${2*m}u + c) * ${mt}u];
    act8_3[a_off] = stage[s_base + (${3*m}u + c) * ${mt}u];
  }
}`,Z=(V,ie)=>{const k=V*m;return`
  for (var cl : u32 = 0u; cl < ${m}u; cl = cl + 1u) {
    let c = ${k}u + cl;
    let inv_qs = mom[c * 2u].w;
    let st = mom[c * 2u + 1u];
    let rm = mom[mom_base + c];
    let q_word = ${ie?`stage[s_bg_base + c * ${mt}u]`:`select(stage[s_base + c * ${mt}u], act8_${V}[a_base + cl * ${ft}u], use_act)`};
    let yv = unpack4x8unorm(q_word) * rm.w + vec4<f32>(rm.z);
    let a = vec4<f32>(
      act(yv.x * st.x + st.y),
      act(yv.y * st.x + st.y),
      act(yv.z * st.x + st.y),
      act(yv.w * st.x + st.y)
    );
    act8_${V}[a_base + cl * ${ft}u] = pack4x8unorm((a * inv_qs + vec4<f32>(${P.zeroBin.toFixed(1)})) * (1.0 / 255.0));
  }`},pe=()=>`${Rn(r)}
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
  let x_pad = x4 + ${Vt}u;
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
  let s_base = ((z & 63u) * 256u + y) * ${M}u + x4;
  let mom_base = ${$}u + (row_idx * 2u + sg) * ${t}u;
${ct(4,V=>Z(V,!1))}
}

@compute @workgroup_size(64, 4, 1)
fn norm_halo_fill(@builtin(local_invocation_id) lid : vec3<u32>,
                  @builtin(workgroup_id) wid : vec3<u32>) {
  let idx = wid.y * 4u + lid.y;
  if (idx >= np.n_halo) { return; }
  let x4 = lid.x;
  let sg = x4 >> 5u;
  let x_pad = x4 + ${Vt}u;
  let s_bg_base = ${b}u * ${M}u + x4;
  let mom_base = ${x}u + sg * ${t}u;
  let dst_row = norm_aux[np.halo_off + idx];
  let a_base = dst_row * ${d}u + x_pad;
${ct(4,V=>Z(V,!0))}
}`,ve=()=>{const V=!u&&t>=16,ie=q(u),k=(G,$e)=>u?`
          let ${G} = vec4<f16>(vec2<f16>(unpack2x16float(((${$e} & 0x00FF00FFu) << 2u) | 0x3C003C00u)), vec2<f16>(unpack2x16float(((${$e} >> 6u) & 0x03FC03FCu) | 0x3C003C00u))) - vec4<f16>(${P.sterbenzSub});`:`
          let ${G} = unpack4x8unorm(${$e}) - vec4<f32>(${P.uZeroFloat});`,te=G=>`
          let uL = ${G}[base - off0];
          let uN = ${G}[base - off1];
          let uC = ${G}[base];
          let uP = ${G}[base + off1];
          let uR = ${G}[base + off0];
          let u_neg = (uL >> sh_l) | (uN << sh_r);
          let u_pos = (uP >> sh_r) | (uR << sh_l);`+k("vn","u_neg")+k("vc","uC")+k("vp","u_pos"),I=(G,$e)=>{const ye=G/4,Se=$e/4;if(C){const Ce=p/2,Ge=p;let Re="";for(let Xe=ye;Xe<Se;Xe+=2){const Ee=Xe*4,Be=Xe/2;Re+=`          {
            let wp0 = w_eff_u[wbu + ${Be}u];
            let wp1 = w_eff_u[wbu + ${Ce+Be}u];
            let wp2 = w_eff_u[wbu + ${Ge+Be}u];
            let w0a = u4_lo(wp0);
            let w0b = u4_hi(wp0);
            let w1a = u4_lo(wp1);
            let w1b = u4_hi(wp1);
            let w2a = u4_lo(wp2);
            let w2b = u4_hi(wp2);
            a_${Ee}     = fma(vn, vec4<f16>(w0a.x), fma(vc, vec4<f16>(w1a.x), fma(vp, vec4<f16>(w2a.x), a_${Ee})));
            a_${Ee+1} = fma(vn, vec4<f16>(w0a.y), fma(vc, vec4<f16>(w1a.y), fma(vp, vec4<f16>(w2a.y), a_${Ee+1})));
            a_${Ee+2} = fma(vn, vec4<f16>(w0a.z), fma(vc, vec4<f16>(w1a.z), fma(vp, vec4<f16>(w2a.z), a_${Ee+2})));
            a_${Ee+3} = fma(vn, vec4<f16>(w0a.w), fma(vc, vec4<f16>(w1a.w), fma(vp, vec4<f16>(w2a.w), a_${Ee+3})));
            a_${Ee+4} = fma(vn, vec4<f16>(w0b.x), fma(vc, vec4<f16>(w1b.x), fma(vp, vec4<f16>(w2b.x), a_${Ee+4})));
            a_${Ee+5} = fma(vn, vec4<f16>(w0b.y), fma(vc, vec4<f16>(w1b.y), fma(vp, vec4<f16>(w2b.y), a_${Ee+5})));
            a_${Ee+6} = fma(vn, vec4<f16>(w0b.z), fma(vc, vec4<f16>(w1b.z), fma(vp, vec4<f16>(w2b.z), a_${Ee+6})));
            a_${Ee+7} = fma(vn, vec4<f16>(w0b.w), fma(vc, vec4<f16>(w1b.w), fma(vp, vec4<f16>(w2b.w), a_${Ee+7})));
          }
`}return Re}return ct(Se-ye,Ce=>{const Ge=ye+Ce,Re=Ge*4;return`          {
            let w0 = w_eff[wb + ${Ge}u];
            let w1 = w_eff[wb + ${p+Ge}u];
            let w2 = w_eff[wb + ${2*p+Ge}u];
            a_${Re}     = fma(vn, ${B}(w0.x), fma(vc, ${B}(w1.x), fma(vp, ${B}(w2.x), a_${Re})));
            a_${Re+1} = fma(vn, ${B}(w0.y), fma(vc, ${B}(w1.y), fma(vp, ${B}(w2.y), a_${Re+1})));
            a_${Re+2} = fma(vn, ${B}(w0.z), fma(vc, ${B}(w1.z), fma(vp, ${B}(w2.z), a_${Re+2})));
            a_${Re+3} = fma(vn, ${B}(w0.w), fma(vc, ${B}(w1.w), fma(vp, ${B}(w2.w), a_${Re+3})));
          }
`})},me=(G,$e,ye)=>{const Se=G*m,Ce=`(${m}u + cp.pad0)`;return C?`        for (var ic : u32 = 0u; ic < ${Ce}; ic = ic + 1u) {
          let base = row_off + ic * ${ft}u;
${te(`act8_${G}`)}
          let wbu = wbu_tap + ${Se?`(${Se}u + ic)`:"ic"} * ${3*p/2}u;
${I($e,ye)}
        }
`:`        for (var ic : u32 = 0u; ic < ${Ce}; ic = ic + 1u) {
          let base = row_off + ic * ${ft}u;
${te(`act8_${G}`)}
          let wb = wb_tap + ${Se?`(${Se}u + ic)`:"ic"} * ${3*p}u;
${I($e,ye)}
        }
`},le=(G,$e,ye,Se)=>{const Ce=Se-ye,Ge=ct(Ce,Be=>`  v_${Be} : ${B},
`),Re=ct(Ce,Be=>{const ke=ye+Be;if(i==="none"){const Qe=ke>>>2,tt=["x","y","z","w"][ke&3];if(C){const rt=A+Qe>>>1,nt=A+Qe&1?"u4_hi":"u4_lo";return`  var a_${ke} = ${B}(${nt}(w_eff_u[${rt}u]).${tt});
`}return`  var a_${ke} = ${B}(w_eff[${A+Qe}u].${tt});
`}return`  var a_${ke} = ${B}(0.0${X});
`}),Xe=C?`        let wbu_tap = tap_yz * ${t*3*p/2}u;
`:`        let wb_tap = tap_yz * ${t*3*p}u;
`,Ee=Array.from({length:Ce},(Be,ke)=>`a_${ye+ke}`).join(", ");return`struct ${$e} {
${Ge}};
fn ${G}(y : i32, z : i32, x_pad : u32, dp : u32) -> ${$e} {
${Re}  let d_step = i32(dp & 63u);
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
${Xe}${ct(4,Be=>me(Be,ye,Se))}      }
      tap_yz = tap_yz + 1u;
    }
  }
  return ${$e}(${Ee});
}
`},re=(G,$e,ye,Se,Ce)=>{let Ge="";Ce==="bg"?Ge=`
  let y = i32(cp.bg_y0 + lid.y);
  let z = i32(cp.bg_z0);`:Ce==="ext"?Ge=`
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
  }`;const Re=Ce==="bg"?"lid.y * 2u + sg":Ce==="ext"?"ext_orig * 8u + lid.y * 2u + sg":"row_idx * 2u + sg",Xe=Ce==="main"?`${$}u`:`${x}u`,Ee=Ce==="bg"?"stage_bg":"stage",Be=Ce==="main"?"true":"(((dp >> 24u) & 1u) != 0u)",ke=Ce==="bg"?`  let row_idx = u32(z) * 256u + u32(y);
  let s_bg_base = (${b}u + lid.y) * ${M}u + x4;`:`  let row_idx = u32(z) * 256u + u32(y);
  let s_row_base = ((u32(z) & 63u) * 256u + u32(y)) * ${M}u + x4;`;return`
@compute @workgroup_size(64, 4, 1)
fn ${G}(@builtin(local_invocation_id) lid : vec3<u32>,
             @builtin(workgroup_id) wid : vec3<u32>${ie.entryArgs||""}) {
  let x4 = lid.x;
  let sg = x4 >> 5u;
  let slane = x4 & 31u;
${ie.localHeader}  let x_pad = x4 + ${Vt}u;
${Ge}
  let dp = cp.d_pack;
  let acc = ${$e}(y, z, x_pad, dp);
${ke}
${ie.emit({accVar:"acc",cStart:ye,cEnd:Se,hrExpr:Re,storeMode:Ee,momOffExpr:Xe,alsoWriteMomMain:Ce!=="main",writeY8Expr:Be})}}`},H=V?le("run_conv_lo","ConvAccLo",0,f)+le("run_conv_hi","ConvAccHi",f,t)+re("main_lo","run_conv_lo",0,f,"main")+re("main_hi","run_conv_hi",f,t,"main")+re("main_ext_lo","run_conv_lo",0,f,"ext")+re("main_ext_hi","run_conv_hi",f,t,"ext")+re("main_bg_lo","run_conv_lo",0,f,"bg")+re("main_bg_hi","run_conv_hi",f,t,"bg"):le("run_conv","ConvAcc",0,t)+re("main","run_conv",0,t,"main")+re("main_ext","run_conv",0,t,"ext")+re("main_bg","run_conv",0,t,"bg"),J=C?`fn u4_lo(u : vec4<u32>) -> vec4<f16> {
  return vec4<f16>(vec2<f16>(unpack2x16float(u.x)), vec2<f16>(unpack2x16float(u.y)));
}
fn u4_hi(u : vec4<u32>) -> vec4<f16> {
  return vec4<f16>(vec2<f16>(unpack2x16float(u.z)), vec2<f16>(unpack2x16float(u.w)));
}
@group(0) @binding(6) var<uniform> w_eff_u : array<vec4<u32>, ${Math.ceil(y/2)}>;`:`@group(0) @binding(6) var<storage, read> w_eff : array<${B}>;`;return`${U}${D}
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
${ie.decls}${H}`},fe=V=>{const ie=V*m;return`
  for (var cl : u32 = 0u; cl < ${m}u; cl = cl + 1u) {
    let c = ${ie}u + cl;
    if (c < ${n}u) {
      let st = mom[c * 2u + 1u];
      let rm = mom[mom_base + c];
      let q_word = select(stage[s_base + c * ${mt}u], act8_${V}[a_base + cl * ${ft}u], use_act);
      let yv = unpack4x8unorm(q_word) * rm.w + vec4<f32>(rm.z);
      let fv = vec4<f32>(
        act(yv.x * st.x + st.y),
        act(yv.y * st.x + st.y),
        act(yv.z * st.x + st.y),
        act(yv.w * st.x + st.y)
      );
      feat[c] = ${B}(fv);
    }
  }`};return{initActWgsl:j,conv0Wgsl:E,prepWgsl:K,flushWgsl:Y,normWgsl:pe,convWgsl:ve,clsWgsl:()=>`${U}
${Rn(r)}
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
  let a_base = row_idx * ${d}u + x4 + ${Vt}u;
  let s_base = ((z & 63u) * 256u + y) * ${M}u + x4;
  let mom_base = ${$}u + (row_idx * 2u + sg) * ${t}u;

  var feat : array<${B}, ${n}>;
${ct(4,V=>fe(V))}

  let w_cls = cp.w_vec4_off;
  let b_vec4 = cp.bias_off >> 2u;
${dr({chan:n,clsK4:o,nclass:s,V4:B,suf:X,readBiasStmt:"    let bv = qmeta_u[b_vec4 + k4];",biasExpr:V=>`bv.${["x","y","z","w"][V]}`,probCfg:g})}
}`,qmetaVec4Len:h,numConvs:c,totalWEffVec4s:y,useUniformWeff:C,csQ:m,halfPass0:F,halfPassConv:!u&&t>=16}}function yi(e,t,n,s,o,a,r,i){return Me(this,null,function*(){var zt,wt;const u=T*T*T,l=r?u*4:u,c=t.dilations.length,g=t.cs/4,m=T*T*g*ft*4,p=(64*T+4)*t.cs*mt*4,b=(t.cs*2+4+(Vn+Zo)*t.cs)*16,M=e.limits||{},_=Math.min((zt=M.maxStorageBufferBindingSize)!=null?zt:1/0,(wt=M.maxBufferSize)!=null?wt:1/0);if(m>_||p>_||b>_||l>_){const et=Math.ceil(Math.max(m,p,b,l)/1048576);throw new Error(`meshnet_fast_v4: LowMem128 max buffer (${et} MiB) exceeds device limit (${_>>>20} MiB)`)}const $=wr({cs:t.cs,chan:t.chan,nclass:t.nclass,clsK4:n.clsK4,dilations:t.dilations,activation:t.activation,norm:t.norm,hasF16:s,subgroupMode:o,numConvs:c,probCfg:r});console.log(`[WebGPU-V4-128M] ${t.chan}ch(cs=${t.cs})/${t.nclass}cls (${c} convs, ${t.activation}, norm=${t.norm}${r?", prob=3":""}) | ${s?"f16+sterbenz":"f32"} | ${tr(o)} | ZYCX-4Q+64slice | maxBuf=${(Math.max(m,p,b,l)/1048576).toFixed(1)} MiB`);const x=GPUBufferUsage.STORAGE,S=GPUBufferUsage.UNIFORM,h=GPUBufferUsage.COPY_DST,w=GPUBufferUsage.COPY_SRC,A=T*T*bn,y=A*(s?2:4),C=s?Math.ceil($.totalWEffVec4s/2)*16:$.totalWEffVec4s*16,P=!!(r&&m>=l),U=`128|${t.cs}|${s?1:0}|${l}|${P?1:0}`,z=ir(e,U,()=>{const et=[],ze=rs(e,et),Je=ze.alloc,v={inpBuf:Je(y,x|h|w),act8_0:Je(m,x|h|w),act8_1:Je(m,x|h|w),act8_2:Je(m,x|h|w),act8_3:Je(m,x|h|w),stageBuf:Je(p,x),momBuf:Je(b,x),labels8Buf:Je(l,x|h|w),readbackBuf:Je(l,GPUBufferUsage.MAP_READ|h),probPackTmpBuf:P?Je(l,x|h|w):null};return{buffers:et,named:v,bytes:ze.getBytes()}}),{inpBuf:D,act8_0:N,act8_1:X,act8_2:B,act8_3:R,stageBuf:q,momBuf:j,labels8Buf:O,readbackBuf:F,probPackTmpBuf:E}=z.named,K=[],Y=rs(e,K),Z=Y.alloc,pe=Z(s?n.wF16.byteLength:n.wF32.byteLength,x|h),ve=Z(n.qmetaF32.byteLength,x|S|h),fe=Z(C,$.useUniformWeff?x|S:x),be=t.norm==="gn"&&!(a!=null&&a.disableConeSkip),V=Z(Ke*4,S|h),ie=Z(Ke*4,S|h),k=Array.from({length:c},()=>Z(be?Ke*4:16,x|h)),te=Array.from({length:c-1},()=>Z(be?(Ke+T*T)*4:16,x|h)),I=Z(16,S|h),me=Z(16,S|h),le=Array.from({length:c},()=>Z(48,S|h)),re=Array.from({length:c-1},()=>Z(16,S|h)),H=Math.max(256,M.minUniformBufferOffsetAlignment||256),J=H>>>2,G=20,$e=Math.max(1,(c-1)*G),ye=Z($e*H,S|h),Se=new Uint32Array($e*J);e.queue.writeBuffer(pe,0,s?n.wF16:n.wF32),e.queue.writeBuffer(ve,0,n.qmetaF32);let Ce;try{Ce=yield cr(e,t,n,s,o,r,$)}catch(et){for(const ze of K)ze.destroy();if(K.length=0,z.pooled)pn.get(e)===z&&wn(e);else{for(const ze of z.buffers)ze.destroy();z.buffers.length=0}throw et}const{pInit:Ge,pMomFin:Re,pPrepW:Xe,pFlush:Ee,pNorm:Be,pNormHalo:ke,pCls:Qe,pConv0:tt,pConv:rt}=Ce,nt=(et,ze)=>e.createBindGroup({layout:et,entries:ze.map((Je,v)=>({binding:v,resource:Je&&Je.buffer?Je:{buffer:Je}}))}),At=nt(Ge.bgl,[N,X,B,R]);{const et=e.createCommandEncoder(),ze=et.beginComputePass();ze.setPipeline(Ge.pipe),ze.setBindGroup(0,At),ze.dispatchWorkgroups(1,T,T),ze.end(),e.queue.submit([et.finish()])}const Kt=($.halfPass0?tt.lo:tt.main).bgl,St=nt(Kt,[D,N,X,B,R,q,pe,j,{buffer:ve,offset:0,size:t.cs*16},V,I]),Zt=nt(Qe.bgl,[N,X,B,R,q,pe,j,O,ve,ie,me]),Qt=P?Z(16,S|h):null,Yt=P?nt(Qe.bgl,[N,X,B,R,q,pe,j,O,ve,ie,Qt]):null,Bt=gr({device:e,hasF16:s,nvox:u,outBufBytes:l,inpBuf:D,act8_0:N,labels8Buf:O,readbackBuf:F,pInit:Ge,bgInit:At,pCls:Qe,bgCls:Zt,clsUbo:me,packed:n,modelEntry:a,probCfg:r,canGpuProb:P,probSlots:P?{clsUbo1:Qt,bgCls1:Yt,pass0HoldBuf:E,y0:N,y1:X,b:B,sup:R}:null,ownedBuffers:K,mkBuf:Z}),_t=le.map((et,ze)=>nt(Re.bgl,[pe,ve,j,fe,k[ze],et])),dt=re.map((et,ze)=>nt(Be.bgl,[N,X,B,R,q,j,te[ze],et])),Ct={buffer:ye,offset:0,size:32},Mt=Array.from({length:c},(et,ze)=>ze===0?null:nt(Ee.bgl,[N,X,B,R,q,k[ze],Ct])),rn=$.halfPassConv?rt.lo:rt.main,an=Array.from({length:c},(et,ze)=>ze===0?null:nt(rn.bgl,[N,X,B,R,q,j,fe,k[ze],Ct])),Gt=s?new Uint16Array(A):new Float32Array(A),Jt=new Uint8Array(T*T),kt=new Uint32Array(Ke),Ft=new Uint32Array(Ke+T*T),ot=new Uint32Array(12),Ht=new Float32Array(ot.buffer),ut=new Uint32Array(4),ue=(et,ze,Je,v,W,L,ae,oe)=>{const ee=et*J;Se[ee]=ze?1:0,Se[ee+1]=Je,Se[ee+2]=v,Se[ee+3]=W,Se[ee+4]=L,Se[ee+5]=ae,Se[ee+6]=oe,Se[ee+7]=0};function bt(et,ze){return Me(this,null,function*(){if(et.length!==u)throw new Error(`meshnet_fast_v4 expected ${u} voxels, got ${et.length}`);const Je=t.norm==="gn"&&!(a!=null&&a.disableConeSkip),v=yield Bt.prepareInput({volume:et,ioOpts:ze,useCone:Je,padInputHost:Gt,headRowHost:Jt,hasF16Flag:s}),W=v.info,L=pr(Jt,W,t.dilations,Je),ae=new Array(c);for(let se=0;se<c;se++){const Q=L.layers[se],de=Q.isFull?Ke:Q.mainStrips.length,ce=Q.isFull||!Q.extStrips?0:Q.extStrips.length,we=Q.haloRows?Q.haloRows.length:0;if(se===0){!Q.isFull&&de>0&&(kt.set(Q.mainStrips,0),e.queue.writeBuffer(V,0,kt.subarray(0,de)),e.queue.writeBuffer(k[0],0,kt.subarray(0,de))),ae[0]={L:Q,nMain:de,nExt:ce,nHalo:we};continue}const ge=new Uint32Array(8),Le=new Uint32Array(8),Ie=new Uint32Array(8),Ze=new Uint32Array(8);if(!Q.isFull){if(de>0){kt.set(Q.mainStrips,0);for(let Ae=0;Ae<de;Ae++)Le[Q.mainStrips[Ae]>>>13]++;let _e=0;for(let Ae=0;Ae<8;Ae++)ge[Ae]=_e,_e+=Le[Ae]}if(Q.mode==="bwd"&&ce>0){const _e=Array.from({length:8},()=>[]);for(let De=0;De<ce;De++){const lt=Q.extStrips[De];_e[lt>>>13].push((De&65535)<<16|lt)}let Ae=de;for(let De=0;De<8;De++){Ie[De]=Ae;const lt=_e[De];Ze[De]=lt.length;for(let pt=0;pt<lt.length;pt++)kt[Ae++]=lt[pt]}e.queue.writeBuffer(k[se],0,kt.subarray(0,de+ce))}else de>0&&e.queue.writeBuffer(k[se],0,kt.subarray(0,de))}const Ne=Q.mode==="rpure"&&we>0||Q.mode==="bwd"&&se+1<c,Ve=Ls(t.dilations[se],Ne),it=(se-1)*G,Te=Q.bgStrip?Q.bgStrip.yWg*4:0,Ue=Q.bgStrip?Q.bgStrip.z:0;for(let _e=0;_e<8;_e++)ue(it+_e,Q.isFull,_e*32,ge[_e],Ie[_e],Ve,Te,Ue);for(let _e=0;_e<6;_e++)ue(it+8+_e,Q.isFull,_e*32,ge[_e],0,0,0,0),ue(it+14+_e,!1,_e*32,Ie[_e],0,0,0,0);ae[se]={L:Q,nMain:de,nExt:ce,nHalo:we,mainCount:Le,extCount:Ze,layerBaseSlot:it}}c>1&&e.queue.writeBuffer(ye,0,Se);let oe=i.execMode==="calibrate"&&e.__v4WinCalibrated?e.__v4WinFast?"pipelined":"paced":i.execMode;const ee=[];if(oe==="single"){const se=e.createCommandEncoder();v.runPrePasses(se,ee),L.clsSkipped&&(se.clearBuffer(O,0,l),L.clsStrips.length>0&&e.queue.writeBuffer(ie,0,L.clsStrips));for(let Q=0;Q<c;Q++){const de=ae[Q],{L:ce,nMain:we,nHalo:ge}=de,Le=ce.nMomExt||0,Ie=ce.isFull?Ke:ce.normStrips?ce.normStrips.length:0;if(Q===0){const Ne=ce.isFull?64:1,Ve=ce.isFull?T:we,it=!!(ce.bgStrip&&ge>0);if(ut[0]=ce.isFull?1:0,ut[1]=ce.bgStrip?ce.bgStrip.yWg*4:0,ut[2]=ce.bgStrip?ce.bgStrip.z:0,ut[3]=0,e.queue.writeBuffer(I,0,ut),$.halfPass0)for(const[Te,Ue]of[[tt.lo,tt.bgLo],[tt.hi,tt.bgHi]]){const _e=se.beginComputePass();_e.setBindGroup(0,St),Ve>0&&(_e.setPipeline(Te.pipe),_e.dispatchWorkgroups(1,Ne,Ve)),it&&(_e.setPipeline(Ue.pipe),_e.dispatchWorkgroups(1,1,1)),_e.end(),ee.push("conv0")}else{const Te=se.beginComputePass();Te.setBindGroup(0,St),Ve>0&&(Te.setPipeline(tt.main.pipe),Te.dispatchWorkgroups(1,Ne,Ve)),it&&(Te.setPipeline(tt.bg.pipe),Te.dispatchWorkgroups(1,1,1)),Te.end(),ee.push("conv0")}}else{const Ne=rt,Ve=an[Q],it=Mt[Q],{mainCount:Te,extCount:Ue,layerBaseSlot:_e}=de,Ae=ce.mode==="rpure"&&!!ce.bgStrip;for(let De=0;De<8;De++){if(De>=2){const We=De-2,st=ce.isFull||Te[We]>0,He=!ce.isFull&&ce.mode==="bwd"&&Ue[We]>0;if(st||He){const ht=se.beginComputePass();ht.setPipeline(Ee.pipe),st&&(ht.setBindGroup(0,it,[(_e+8+We)*H]),ht.dispatchWorkgroups(1,ce.isFull?64:1,ce.isFull?32:Te[We])),He&&(ht.setBindGroup(0,it,[(_e+14+We)*H]),ht.dispatchWorkgroups(1,1,Ue[We])),ht.end(),ee.push("flushStage")}}const lt=ce.isFull||Te[De]>0,pt=!ce.isFull&&ce.mode==="bwd"&&Ue[De]>0,gt=De===0&&Ae;if(!lt&&!pt&&!gt)continue;const yt=[(_e+De)*H],$t=ce.isFull?64:1,Ye=ce.isFull?32:Te[De];if($.halfPassConv)for(const[We,st,He]of[[Ne.lo,Ne.extLo,Ne.bgLo],[Ne.hi,Ne.extHi,Ne.bgHi]]){const ht=se.beginComputePass();ht.setBindGroup(0,Ve,yt),lt&&(ht.setPipeline(We.pipe),ht.dispatchWorkgroups(1,$t,Ye)),pt&&(ht.setPipeline(st.pipe),ht.dispatchWorkgroups(1,1,Ue[De])),gt&&(ht.setPipeline(He.pipe),ht.dispatchWorkgroups(1,1,1)),ht.end(),ee.push("convHidden")}else{const We=se.beginComputePass();We.setBindGroup(0,Ve,yt),lt&&(We.setPipeline(Ne.main.pipe),We.dispatchWorkgroups(1,$t,Ye)),pt&&(We.setPipeline(Ne.ext.pipe),We.dispatchWorkgroups(1,1,Ue[De])),gt&&(We.setPipeline(Ne.bg.pipe),We.dispatchWorkgroups(1,1,1)),We.end(),ee.push("convHidden")}}}const Ze=Q+1<c?n.w0Vec4s+Q*n.hiddenVec4PerLayer:0;ot[0]=Q*n.metaStride,ot[1]=Ze,ot[2]=(Q+1)*n.metaStride,ot[3]=Q+1<c?1:0,ot[4]=Q===0?1:0,ot[5]=ce.isFull?1:0,ot[6]=we,ot[7]=Le*8,Ht[8]=ce.extWeight||0,ot[9]=0,ot[10]=0,ot[11]=0,e.queue.writeBuffer(le[Q],0,ot);{const Ne=se.beginComputePass();Ne.setBindGroup(0,_t[Q]),Ne.setPipeline(Re.pipe),Ne.dispatchWorkgroups(t.cs,1,1),Ne.end(),ee.push("momentsPrep")}if(Q+1<c){{const Ve=se.beginComputePass();Ve.setBindGroup(0,_t[Q]),Ve.setPipeline(Xe.pipe),Ve.dispatchWorkgroups(1,1,1),Ve.end(),ee.push("momentsPrep")}const Ne=ce.isFull?0:Ie;if((Ne>0||ge>0)&&(Ne>0&&Ft.set(ce.normStrips,0),ge>0&&Ft.set(ce.haloRows,Ne),e.queue.writeBuffer(te[Q],0,Ft.subarray(0,Ne+ge))),ut[0]=ce.isFull?1:0,ut[1]=ce.bgStrip?ce.bgStrip.z*T+ce.bgStrip.yWg*4:0,ut[2]=Ne,ut[3]=ge,e.queue.writeBuffer(re[Q],0,ut),ce.isFull||Ie>0||ge>0){const Ve=se.beginComputePass();Ve.setBindGroup(0,dt[Q]),(ce.isFull||Ie>0)&&(Ve.setPipeline(Be.pipe),Ve.dispatchWorkgroups(1,ce.isFull?64:1,ce.isFull?T:Ie)),ge>0&&(Ve.setPipeline(ke.pipe),Ve.dispatchWorkgroups(1,Math.ceil(ge/4),1)),Ve.end(),ee.push("normHalo")}}}return bt.__passCategories=ee,Bt.finishAndReadback({enc:se,schedule:L,passCategories:ee,u4Tmp:ut,ioOpts:ze})}const xe=Hn(e),Pe=typeof(ze==null?void 0:ze.onProgress)=="function"?ze.onProgress:null,Fe=or(L,c);let Oe=0,je=-1;const qe=se=>{if(!Pe)return;const Q=Math.min(.99,Oe/Fe);let de="";se>=0&&se!==je&&(je=se,de=`Layer ${se+1}/${c}`),Pe(Q,de)},ne=sr(e,i.msPerStrip||e.__v4MsPerStrip||.12,qe);let he=e.createCommandEncoder();v.runPrePasses(he,ee),L.clsSkipped&&(he.clearBuffer(O,0,l),L.clsStrips.length>0&&e.queue.writeBuffer(ie,0,L.clsStrips));for(let se=0;se<c;se++){const Q=ae[se],{L:de,nMain:ce,nHalo:we}=Q,ge=de.nMomExt||0,Le=de.isFull?Ke:de.normStrips?de.normStrips.length:0,Ie=js(de,se,c);if(se===0){const Ne=de.isFull?64:1,Ve=de.isFull?T:ce,it=!!(de.bgStrip&&we>0);if(ut[0]=de.isFull?1:0,ut[1]=de.bgStrip?de.bgStrip.yWg*4:0,ut[2]=de.bgStrip?de.bgStrip.z:0,ut[3]=0,e.queue.writeBuffer(I,0,ut),$.halfPass0)for(const[Te,Ue]of[[tt.lo,tt.bgLo],[tt.hi,tt.bgHi]]){const _e=he.beginComputePass();_e.setBindGroup(0,St),Ve>0&&(_e.setPipeline(Te.pipe),_e.dispatchWorkgroups(1,Ne,Ve)),it&&(_e.setPipeline(Ue.pipe),_e.dispatchWorkgroups(1,1,1)),_e.end(),ee.push("conv0")}else{const Te=he.beginComputePass();Te.setBindGroup(0,St),Ve>0&&(Te.setPipeline(tt.main.pipe),Te.dispatchWorkgroups(1,Ne,Ve)),it&&(Te.setPipeline(tt.bg.pipe),Te.dispatchWorkgroups(1,1,1)),Te.end(),ee.push("conv0")}oe==="calibrate"?(e.queue.submit([he.finish()]),he=e.createCommandEncoder()):oe==="paced"&&(Oe+=Ie.convWork,he=yield ne.submitChunk(he,Ie.convWork,0,{forceUiYield:!0}))}else{const Ne=rt,Ve=an[se],it=Mt[se],{mainCount:Te,extCount:Ue,layerBaseSlot:_e}=Q,Ae=de.mode==="rpure"&&!!de.bgStrip;let De=0;for(let lt=0;lt<8;lt++){if(lt>=2){const $t=lt-2,Ye=de.isFull||Te[$t]>0,We=!de.isFull&&de.mode==="bwd"&&Ue[$t]>0;if(Ye||We){const st=he.beginComputePass();st.setPipeline(Ee.pipe),Ye&&(st.setBindGroup(0,it,[(_e+8+$t)*H]),st.dispatchWorkgroups(1,de.isFull?64:1,de.isFull?32:Te[$t])),We&&(st.setBindGroup(0,it,[(_e+14+$t)*H]),st.dispatchWorkgroups(1,1,Ue[$t])),st.end(),ee.push("flushStage")}}const pt=de.isFull||Te[lt]>0,gt=!de.isFull&&de.mode==="bwd"&&Ue[lt]>0,yt=lt===0&&Ae;if(pt||gt||yt){const $t=[(_e+lt)*H],Ye=de.isFull?64:1,We=de.isFull?32:Te[lt];if($.halfPassConv)for(const[st,He,ht]of[[Ne.lo,Ne.extLo,Ne.bgLo],[Ne.hi,Ne.extHi,Ne.bgHi]]){const Lt=he.beginComputePass();Lt.setBindGroup(0,Ve,$t),pt&&(Lt.setPipeline(st.pipe),Lt.dispatchWorkgroups(1,Ye,We)),gt&&(Lt.setPipeline(He.pipe),Lt.dispatchWorkgroups(1,1,Ue[lt])),yt&&(Lt.setPipeline(ht.pipe),Lt.dispatchWorkgroups(1,1,1)),Lt.end(),ee.push("convHidden")}else{const st=he.beginComputePass();st.setBindGroup(0,Ve,$t),pt&&(st.setPipeline(Ne.main.pipe),st.dispatchWorkgroups(1,Ye,We)),gt&&(st.setPipeline(Ne.ext.pipe),st.dispatchWorkgroups(1,1,Ue[lt])),yt&&(st.setPipeline(Ne.bg.pipe),st.dispatchWorkgroups(1,1,1)),st.end(),ee.push("convHidden")}De+=(pt?de.isFull?2048:Te[lt]:0)+(gt?Ue[lt]:0)}if(oe==="calibrate"&&(De>=512||lt===7&&De>0)){const $t=performance.now();e.queue.submit([he.finish()]),yield e.queue.onSubmittedWorkDone();const Ye=performance.now()-$t;if(he=e.createCommandEncoder(),Oe+=De,De>=512){const We=Ye/De,st=We*Ke;e.__v4WinCalibrated=!0,ne.setMsPerStrip(We),!xe.isWindowsSharedIgpu&&st<Qo?(e.__v4WinFast=!0,oe="pipelined",console.log(`[WebGPU-V4-128M] Windows GPU calibration: estFullLayer=${st.toFixed(1)}ms -> unthrottled pipelined mode`)):(e.__v4WinFast=!1,oe="paced",console.log(`[WebGPU-V4-128M] Windows GPU calibration: estFullLayer=${st.toFixed(1)}ms -> TDR-safe 2-in-flight paced mode`),qe(se))}De=0}else oe==="paced"&&De>0&&(De*ne.getMsPerStrip()>=Jo*.75||lt===7)&&(Oe+=De,he=yield ne.submitChunk(he,De,se),De=0)}}const Ze=se+1<c?n.w0Vec4s+se*n.hiddenVec4PerLayer:0;ot[0]=se*n.metaStride,ot[1]=Ze,ot[2]=(se+1)*n.metaStride,ot[3]=se+1<c?1:0,ot[4]=se===0?1:0,ot[5]=de.isFull?1:0,ot[6]=ce,ot[7]=ge*8,Ht[8]=de.extWeight||0,ot[9]=0,ot[10]=0,ot[11]=0,e.queue.writeBuffer(le[se],0,ot);{const Ne=he.beginComputePass();Ne.setBindGroup(0,_t[se]),Ne.setPipeline(Re.pipe),Ne.dispatchWorkgroups(t.cs,1,1),Ne.end(),ee.push("momentsPrep")}if(se+1<c){{const Ve=he.beginComputePass();Ve.setBindGroup(0,_t[se]),Ve.setPipeline(Xe.pipe),Ve.dispatchWorkgroups(1,1,1),Ve.end(),ee.push("momentsPrep")}const Ne=de.isFull?0:Le;if((Ne>0||we>0)&&(Ne>0&&Ft.set(de.normStrips,0),we>0&&Ft.set(de.haloRows,Ne),e.queue.writeBuffer(te[se],0,Ft.subarray(0,Ne+we))),ut[0]=de.isFull?1:0,ut[1]=de.bgStrip?de.bgStrip.z*T+de.bgStrip.yWg*4:0,ut[2]=Ne,ut[3]=we,e.queue.writeBuffer(re[se],0,ut),de.isFull||Le>0||we>0){const Ve=he.beginComputePass();Ve.setBindGroup(0,dt[se]),(de.isFull||Le>0)&&(Ve.setPipeline(Be.pipe),Ve.dispatchWorkgroups(1,de.isFull?64:1,de.isFull?T:Le)),we>0&&(Ve.setPipeline(ke.pipe),Ve.dispatchWorkgroups(1,Math.ceil(we/4),1)),Ve.end(),ee.push("normHalo")}}oe==="pipelined"?(e.queue.submit([he.finish()]),he=e.createCommandEncoder()):oe==="calibrate"?(e.queue.submit([he.finish()]),yield e.queue.onSubmittedWorkDone(),he=e.createCommandEncoder(),Oe+=(se===0?Ie.convWork:0)+Ie.normWork,se===c-1&&!e.__v4WinCalibrated&&(e.__v4WinCalibrated=!0,e.__v4WinFast=!xe.isWindowsSharedIgpu)):(Oe+=Ie.normWork,he=yield ne.submitChunk(he,Ie.normWork,se))}return oe==="paced"&&(yield ne.waitBeforeFinalSubmit()),bt.__passCategories=ee,Bt.finishAndReadback({enc:he,schedule:L,passCategories:ee,u4Tmp:ut,ioOpts:ze,paced:oe==="paced",onProgress:Pe})})}return Bt.warmupIoPipelines(),bt.dispose=({keepSharedWorkspace:et=!1}={})=>{Bt.dispose();for(const ze of K)ze.destroy();if(K.length=0,Y.resetBytes(),z.pooled)et?z.inUse=!1:pn.get(e)===z&&wn(e);else{for(const ze of z.buffers)ze.destroy();z.buffers.length=0}},bt.gpuBytes=()=>z.bytes+Y.getBytes(),bt.__passCategories=[],bt.__coneInfo=()=>({paddedVox:A,actMiB:m/1048576,mode:"LowMem128"}),bt.__v4Plan=()=>i,bt.kernels="v4-int8",bt})}const vr=!0;function Zs(o,a,r){return Me(this,arguments,function*(e,t,n,s={}){Fs++;try{return yield $i(e,t,n,s)}finally{Fs--}})}function $i(o,a,r){return Me(this,arguments,function*(e,t,n,s={}){var Pe,Fe,Oe,je;const i=t instanceof Uint8Array?t:new Uint8Array(t),u=Go(i.buffer.slice(i.byteOffset,i.byteOffset+i.byteLength)),l=To(u);s!=null&&s.classifierBias&&l.classifier&&(l.classifier.bias=Float32Array.from(s.classifierBias));const c=Os(s),g=(s==null?void 0:s.dilations)||(c==null?void 0:c.dilations)||(l.convs.length===25?[16,8,4,2,1,16,8,4,2,1,16,8,4,2,1,16,8,4,2,1,16,8,4,2,1]:l.convs.length===9?[1,2,4,8,16,8,4,2,1]:Bs),m=(s==null?void 0:s.activation)||(c==null?void 0:c.activation)||(l.affines.length||l.convs.length>=13?"gelu_tanh":"relu"),f=l.convs[0].outC,p=f>8?Math.ceil(f/8)*8:Math.ceil(f/4)*4,d=Oo(l,{nx:T,ny:T,nz:T,cs:p,activation:m,dilations:g}),b=bi(i,l,d,s),M=(s==null?void 0:s.outputType)==="probability"?ui(s,d.nclass):null,_=!!((Fe=(Pe=e.features)==null?void 0:Pe.has)!=null&&Fe.call(Pe,"shader-f16"))&&!(s!=null&&s.disableF16),$=er(e,s),x=T*T*T,S=M?x*4:x,h=d.cs>=16,w=h?d.cs/2:d.cs,A=T*T*w*ft*4,y=T*T*w*mt*4,C=e.limits||{},P=Math.min((Oe=C.maxStorageBufferBindingSize)!=null?Oe:1/0,(je=C.maxBufferSize)!=null?je:1/0),U=yield Yo(e,d,s,{actBytes:A,outBufBytes:S,hasF16:_});if(e.__v4LastPlan=U,console.info(ri(U,d)),U.layout==="LowMem128"&&d.cs>=8&&d.cs%4===0)return yi(e,d,b,_,$,s,M,U);if(A>P||S>P){const qe=Math.max(A,S)>>>20;throw new Error(`meshnet_fast_v4: buffer (${qe} MiB) exceeds device limit (${P>>>20} MiB)`)}const z=U.chunkableStd,D=hr({cs:d.cs,chan:d.chan,nclass:d.nclass,clsK4:b.clsK4,dilations:d.dilations,activation:d.activation,norm:d.norm,hasF16:_,subgroupMode:$,splitHalves:h,probCfg:M,chunkableStd:z});console.log(`[WebGPU-V4] ${d.chan}ch(cs=${d.cs})/${d.nclass}cls (${d.dilations.length} convs, ${d.activation}, norm=${d.norm}${M?", prob=3":""}) | ${_?"f16+sterbenz":"f32"} | ${tr($)} | ZYCX-pad80 | maxBuf=${(Math.max(A,S)/1048576).toFixed(1)} MiB`);const N=GPUBufferUsage.STORAGE,X=GPUBufferUsage.COPY_DST,B=GPUBufferUsage.COPY_SRC,R=T*T*bn,q=R*(_?2:4),j=Vn*d.cs*16,O=Zo*d.cs*16,F=(d.cs*2+4)*16,E=_?Math.ceil(D.totalWEffVec4s/2)*16:D.totalWEffVec4s*16,K=`std|${d.cs}|${h?1:0}|${_?1:0}|${S}`,Y=ir(e,K,()=>{const qe=[],ne=rs(e,qe),he=ne.alloc,se={inpBuf:he(q,N|X|B),act8_0:he(A,N|X|B),act8_1:he(h?A:16,N|X|B),y8_0:he(y,N|X|B),y8_1:he(h?y:16,N|X|B),momMainBuf:he(j,N),momExtBuf:he(O,N),momStatsBuf:he(F,N),labels8Buf:he(S,N|X|B),readbackBuf:he(S,GPUBufferUsage.MAP_READ|X)};return{buffers:qe,named:se,bytes:ne.getBytes()}}),{inpBuf:Z,act8_0:pe,act8_1:ve,y8_0:fe,y8_1:be,momMainBuf:V,momExtBuf:ie,momStatsBuf:k,labels8Buf:te,readbackBuf:I}=Y.named,me=[],le=rs(e,me),re=le.alloc,H=re(_?b.wF16.byteLength:b.wF32.byteLength,N|X),J=re(b.qmetaF32.byteLength,N|X),G=re(E,D.useUniformWeff?N|GPUBufferUsage.UNIFORM:N),$e=d.dilations.length,ye=d.norm==="gn"&&!(s!=null&&s.disableConeSkip),Se=Array.from({length:$e},()=>re(ye?Ke*4:16,N|X)),Ce=Array.from({length:$e-1},()=>re(ye?(Ke+T*T)*4:16,N|X)),Ge=re(ye?Ke*4:16,N|X),Re=re(16,GPUBufferUsage.UNIFORM|X),Xe=re(16,GPUBufferUsage.UNIFORM|X),Ee=Array.from({length:$e},()=>re(48,GPUBufferUsage.UNIFORM|X)),Be=Array.from({length:$e-1},()=>re(16,GPUBufferUsage.UNIFORM|X)),ke=Math.max(256,C.minUniformBufferOffsetAlignment||256),Qe=ke>>>2,tt=D.chunkableStd?Math.max(1,($e-1)*_s):0,rt=D.chunkableStd?re(tt*ke,GPUBufferUsage.UNIFORM|X):null,nt=D.chunkableStd?new Uint32Array(tt*Qe):null,At=D.chunkableStd?null:Array.from({length:$e},()=>re(16,GPUBufferUsage.UNIFORM|X));e.queue.writeBuffer(H,0,_?b.wF16:b.wF32),e.queue.writeBuffer(J,0,b.qmetaF32);let Kt;try{Kt=yield fr(e,d,b,_,$,h,M,D)}catch(qe){for(const ne of me)ne.destroy();if(me.length=0,Y.pooled)pn.get(e)===Y&&wn(e);else{for(const ne of Y.buffers)ne.destroy();Y.buffers.length=0}throw qe}const{pInit:St,pMomFin:Zt,pPrepW:Qt,pNorm:Yt,pNormHalo:Bt,pCls:_t,pConv0:dt,pConv:Ct}=Kt,Mt=(qe,ne)=>e.createBindGroup({layout:qe,entries:ne.map((he,se)=>({binding:se,resource:he&&he.buffer?he:{buffer:he}}))}),rn=Mt(St.bgl,[pe,ve]);{const qe=e.createCommandEncoder(),ne=qe.beginComputePass();ne.setPipeline(St.pipe),ne.setBindGroup(0,rn),ne.dispatchWorkgroups(1,T,T),ne.end(),e.queue.submit([qe.finish()])}const an=(D.halfPass0?dt.lo:dt.main).bgl,Gt=Mt(an,[Z,fe,be,H,J,V,ie,Se[0],Re]),Jt=Mt(_t.bgl,[fe,be,H,J,V,k,te,Ge,Xe]),kt=!!(M&&h&&A>=S&&y>=S),Ft=kt?re(16,GPUBufferUsage.UNIFORM|X):null,ot=kt?Mt(_t.bgl,[fe,be,H,J,V,k,te,Ge,Ft]):null,Ht=gr({device:e,hasF16:_,nvox:x,outBufBytes:S,inpBuf:Z,act8_0:pe,labels8Buf:te,readbackBuf:I,pInit:St,bgInit:rn,pCls:_t,bgCls:Jt,clsUbo:Xe,packed:b,modelEntry:s,probCfg:M,canGpuProb:kt,probSlots:kt?{clsUbo1:Ft,bgCls1:ot,pass0HoldBuf:pe,y0:fe,y1:be,b:ve,sup:pe}:null,ownedBuffers:me,mkBuf:re}),ut=Ee.map((qe,ne)=>Mt(Zt.bgl,[H,J,V,ie,k,G,Se[ne],qe])),ue=Be.map((qe,ne)=>Mt(Yt.bgl,[pe,ve,fe,be,V,ie,k,Ce[ne],qe])),bt=D.chunkableStd?{buffer:rt,offset:0,size:32}:null,zt=D.halfPassConv?Ct.lo:Ct.main,wt=Array.from({length:$e},(qe,ne)=>ne===0?null:Mt(zt.bgl,[pe,ve,fe,be,V,ie,G,Se[ne],D.chunkableStd?bt:At[ne]])),et=(qe,ne,he,se,Q,de)=>{const ce=qe*Qe;nt[ce]=ne?1:0,nt[ce+1]=he,nt[ce+2]=se,nt[ce+3]=0,nt[ce+4]=Q,nt[ce+5]=de,nt[ce+6]=0,nt[ce+7]=0},ze=(qe,ne,he,se,Q,de,ce,we)=>{if(!(de<=0&&ce<=0))if(D.halfPassConv){{const ge=qe.beginComputePass();se?ge.setBindGroup(0,he,se):ge.setBindGroup(0,he),de>0&&(ge.setPipeline(ne.lo.pipe),ge.dispatchWorkgroups(1,Q,de)),ce>0&&(ge.setPipeline(ne.extLo.pipe),ge.dispatchWorkgroups(1,1,ce)),ge.end(),we.push("convHidden")}{const ge=qe.beginComputePass();se?ge.setBindGroup(0,he,se):ge.setBindGroup(0,he),de>0&&(ge.setPipeline(ne.hi.pipe),ge.dispatchWorkgroups(1,Q,de)),ce>0&&(ge.setPipeline(ne.extHi.pipe),ge.dispatchWorkgroups(1,1,ce)),ge.end(),we.push("convHidden")}}else{const ge=qe.beginComputePass();se?ge.setBindGroup(0,he,se):ge.setBindGroup(0,he),de>0&&(ge.setPipeline(ne.main.pipe),ge.dispatchWorkgroups(1,Q,de)),ce>0&&(ge.setPipeline(ne.ext.pipe),ge.dispatchWorkgroups(1,1,ce)),ge.end(),we.push("convHidden")}},Je=_?new Uint16Array(R):new Float32Array(R),v=new Uint8Array(T*T),W=new Uint32Array(Ke),L=new Uint32Array(Ke+T*T),ae=new Uint32Array(12),oe=new Float32Array(ae.buffer),ee=new Uint32Array(4);function xe(qe,ne){return Me(this,null,function*(){if(qe.length!==x)throw new Error(`meshnet_fast_v4 expected ${x} voxels, got ${qe.length}`);const he=d.norm==="gn"&&!(s!=null&&s.disableConeSkip),se=yield Ht.prepareInput({volume:qe,ioOpts:ne,useCone:he,padInputHost:Je,headRowHost:v,hasF16Flag:_}),Q=se.info,de=pr(v,Q,d.dilations,he);let ce=U.execMode==="calibrate"&&e.__v4WinCalibrated?e.__v4WinFast?"pipelined":"paced":U.execMode;const we=[];if(ce==="single"&&!D.chunkableStd){const Ue=e.createCommandEncoder();se.runPrePasses(Ue,we),de.clsSkipped&&(Ue.clearBuffer(te,0,S),de.clsStrips.length>0&&e.queue.writeBuffer(Ge,0,de.clsStrips));for(let _e=0;_e<$e;_e++){const Ae=de.layers[_e],De=Ae.isFull?Ke:Ae.mainStrips.length,lt=Ae.isFull||!Ae.extStrips?0:Ae.extStrips.length,pt=Ae.nMomExt||0,gt=Ae.haloRows?Ae.haloRows.length:0,yt=Ae.isFull?Ke:Ae.normStrips?Ae.normStrips.length:0;if(!Ae.isFull&&(De>0||lt>0)&&(De>0&&W.set(Ae.mainStrips,0),lt>0&&W.set(Ae.extStrips,De),e.queue.writeBuffer(Se[_e],0,W.subarray(0,De+lt))),_e===0){const Ye=Ae.isFull?64:1,We=Ae.isFull?T:De,st=!!(Ae.bgStrip&&gt>0);if(ee[0]=Ae.isFull?1:0,ee[1]=Ae.bgStrip?Ae.bgStrip.yWg*4:0,ee[2]=Ae.bgStrip?Ae.bgStrip.z:0,ee[3]=0,e.queue.writeBuffer(Re,0,ee),D.halfPass0){{const He=Ue.beginComputePass();He.setBindGroup(0,Gt),We>0&&(He.setPipeline(dt.lo.pipe),He.dispatchWorkgroups(1,Ye,We)),st&&(He.setPipeline(dt.bgLo.pipe),He.dispatchWorkgroups(1,1,1)),He.end(),we.push("conv0")}{const He=Ue.beginComputePass();He.setBindGroup(0,Gt),We>0&&(He.setPipeline(dt.hi.pipe),He.dispatchWorkgroups(1,Ye,We)),st&&(He.setPipeline(dt.bgHi.pipe),He.dispatchWorkgroups(1,1,1)),He.end(),we.push("conv0")}}else{const He=Ue.beginComputePass();He.setBindGroup(0,Gt),We>0&&(He.setPipeline(dt.main.pipe),He.dispatchWorkgroups(1,Ye,We)),st&&(He.setPipeline(dt.bg.pipe),He.dispatchWorkgroups(1,1,1)),He.end(),we.push("conv0")}}else{const Ye=d.dilations[_e],We=wt[_e],st=Ae.isFull?64:1,He=Ae.isFull?T:De,ht=Ae.mode==="rpure"&&gt>0||Ae.mode==="bwd"&&_e+1<$e;ee[0]=Ae.isFull?1:0,ee[1]=De,ee[2]=Ls(Ye,ht),ee[3]=0,e.queue.writeBuffer(At[_e],0,ee),ze(Ue,Ct,We,null,st,He,lt,we)}const $t=_e+1<$e?b.w0Vec4s+_e*b.hiddenVec4PerLayer:0;ae[0]=_e*b.metaStride,ae[1]=$t,ae[2]=(_e+1)*b.metaStride,ae[3]=_e+1<$e?1:0,ae[4]=_e===0?1:0,ae[5]=Ae.isFull?1:0,ae[6]=De,ae[7]=pt*8,oe[8]=Ae.extWeight||0,ae[9]=0,ae[10]=0,ae[11]=0,e.queue.writeBuffer(Ee[_e],0,ae);{const Ye=Ue.beginComputePass();Ye.setBindGroup(0,ut[_e]),Ye.setPipeline(Zt.pipe),Ye.dispatchWorkgroups(d.cs,1,1),Ye.end(),we.push("momentsPrep")}if(_e+1<$e){{const We=Ue.beginComputePass();We.setBindGroup(0,ut[_e]),We.setPipeline(Qt.pipe),We.dispatchWorkgroups(1,1,1),We.end(),we.push("momentsPrep")}const Ye=Ae.isFull?0:yt;if((Ye>0||gt>0)&&(Ye>0&&L.set(Ae.normStrips,0),gt>0&&L.set(Ae.haloRows,Ye),e.queue.writeBuffer(Ce[_e],0,L.subarray(0,Ye+gt))),ee[0]=Ae.isFull?1:0,ee[1]=Ae.bgStrip?Ae.bgStrip.z*T+Ae.bgStrip.yWg*4:0,ee[2]=Ye,ee[3]=gt,e.queue.writeBuffer(Be[_e],0,ee),Ae.isFull||yt>0||gt>0){const We=Ue.beginComputePass();We.setBindGroup(0,ue[_e]),(Ae.isFull||yt>0)&&(We.setPipeline(Yt.pipe),We.dispatchWorkgroups(1,Ae.isFull?64:1,Ae.isFull?T:yt)),gt>0&&(We.setPipeline(Bt.pipe),We.dispatchWorkgroups(1,Math.ceil(gt/4),1)),We.end(),we.push("normHalo")}}}return xe.__passCategories=we,Ht.finishAndReadback({enc:Ue,schedule:de,passCategories:we,u4Tmp:ee,ioOpts:ne})}const ge=Hn(e),Le=typeof(ne==null?void 0:ne.onProgress)=="function"?ne.onProgress:null,Ie=or(de,$e);let Ze=0,Ne=-1;const Ve=Ue=>{if(!Le)return;const _e=Math.min(.99,Ze/Ie);let Ae="";Ue>=0&&Ue!==Ne&&(Ne=Ue,Ae=`Layer ${Ue+1}/${$e}`),Le(_e,Ae)},it=sr(e,U.msPerStrip||e.__v4MsPerStrip||.12,Ve);let Te=e.createCommandEncoder();se.runPrePasses(Te,we),de.clsSkipped&&(Te.clearBuffer(te,0,S),de.clsStrips.length>0&&e.queue.writeBuffer(Ge,0,de.clsStrips));for(let Ue=0;Ue<$e;Ue++){const _e=de.layers[Ue],Ae=_e.isFull?Ke:_e.mainStrips.length,De=_e.isFull||!_e.extStrips?0:_e.extStrips.length,lt=_e.nMomExt||0,pt=_e.haloRows?_e.haloRows.length:0,gt=_e.isFull?Ke:_e.normStrips?_e.normStrips.length:0,yt=js(_e,Ue,$e);if(!_e.isFull&&(Ae>0||De>0)&&(Ae>0&&W.set(_e.mainStrips,0),De>0&&W.set(_e.extStrips,Ae),e.queue.writeBuffer(Se[Ue],0,W.subarray(0,Ae+De))),Ue===0){const Ye=_e.isFull?64:1,We=_e.isFull?T:Ae,st=!!(_e.bgStrip&&pt>0);if(ee[0]=_e.isFull?1:0,ee[1]=_e.bgStrip?_e.bgStrip.yWg*4:0,ee[2]=_e.bgStrip?_e.bgStrip.z:0,ee[3]=0,e.queue.writeBuffer(Re,0,ee),D.halfPass0){{const He=Te.beginComputePass();He.setBindGroup(0,Gt),We>0&&(He.setPipeline(dt.lo.pipe),He.dispatchWorkgroups(1,Ye,We)),st&&(He.setPipeline(dt.bgLo.pipe),He.dispatchWorkgroups(1,1,1)),He.end(),we.push("conv0")}{const He=Te.beginComputePass();He.setBindGroup(0,Gt),We>0&&(He.setPipeline(dt.hi.pipe),He.dispatchWorkgroups(1,Ye,We)),st&&(He.setPipeline(dt.bgHi.pipe),He.dispatchWorkgroups(1,1,1)),He.end(),we.push("conv0")}}else{const He=Te.beginComputePass();He.setBindGroup(0,Gt),We>0&&(He.setPipeline(dt.main.pipe),He.dispatchWorkgroups(1,Ye,We)),st&&(He.setPipeline(dt.bg.pipe),He.dispatchWorkgroups(1,1,1)),He.end(),we.push("conv0")}ce==="calibrate"?(e.queue.submit([Te.finish()]),Te=e.createCommandEncoder()):ce==="paced"&&(Ze+=yt.convWork,Te=yield it.submitChunk(Te,yt.convWork,0,{forceUiYield:!0}))}else{const Ye=d.dilations[Ue],We=wt[Ue],st=_e.isFull?64:1,He=_e.isFull?T:Ae,ht=_e.mode==="rpure"&&pt>0||_e.mode==="bwd"&&Ue+1<$e,Lt=Ls(Ye,ht);if(!D.chunkableStd)ee[0]=_e.isFull?1:0,ee[1]=Ae,ee[2]=Lt,ee[3]=0,e.queue.writeBuffer(At[Ue],0,ee),ze(Te,Ct,We,null,st,He,De,we);else if(ce==="pipelined"||ce==="single"){const Xt=(Ue-1)*_s;et(Xt,_e.isFull,Ae,Lt,0,0),e.queue.writeBuffer(rt,Xt*ke,nt.subarray(Xt*Qe,(Xt+1)*Qe)),ze(Te,Ct,We,[Xt*ke],st,He,De,we)}else{const Xt=(Ue-1)*_s,as=ce==="calibrate"?1024:Math.max(256,Math.min(4096,Math.round(Jo/Math.max(.005,it.getMsPerStrip())))),Pn=[];let On=0;if(_e.isFull){const tn=Math.max(4,Math.min(64,Math.round(as/64)));for(let Tt=0;Tt<T;Tt+=tn){const Ut=Math.min(tn,T-Tt),nn=Xt+On++;et(nn,!0,Ae,Lt,Tt,0),Pn.push({slotIdx:nn,mainY:64,mainCountZ:Ut,extCountZ:0,strips:Ut*64})}}else{const tn=Math.max(256,as);for(let Ut=0;Ut<Ae;Ut+=tn){const nn=Math.min(tn,Ae-Ut),vn=Xt+On++;et(vn,!1,Ae,Lt,Ut,0),Pn.push({slotIdx:vn,mainY:1,mainCountZ:nn,extCountZ:0,strips:nn})}const Tt=Math.max(256,as);for(let Ut=0;Ut<De;Ut+=Tt){const nn=Math.min(Tt,De-Ut),vn=Xt+On++;et(vn,!1,Ae,Lt,0,Ut),Pn.push({slotIdx:vn,mainY:1,mainCountZ:0,extCountZ:nn,strips:nn})}}On>0&&e.queue.writeBuffer(rt,Xt*ke,nt.subarray(Xt*Qe,(Xt+On)*Qe));let en=0;for(let tn=0;tn<Pn.length;tn++){const Tt=Pn[tn];if(ze(Te,Ct,We,[Tt.slotIdx*ke],Tt.mainY,Tt.mainCountZ,Tt.extCountZ,we),ce==="pipelined")continue;en+=Tt.strips;const Ut=tn===Pn.length-1;if(ce==="calibrate"&&(en>=512||Ut&&en>0)){const nn=performance.now();e.queue.submit([Te.finish()]),yield e.queue.onSubmittedWorkDone();const vn=performance.now()-nn;if(Te=e.createCommandEncoder(),Ze+=en,en>=512){const to=vn/en,is=to*Ke;e.__v4WinCalibrated=!0,it.setMsPerStrip(to),!ge.isWindowsSharedIgpu&&is<Qo?(e.__v4WinFast=!0,ce="pipelined",console.log(`[WebGPU-V4] Windows GPU calibration: estFullLayer=${is.toFixed(1)}ms -> unthrottled pipelined mode`)):(e.__v4WinFast=!1,ce="paced",console.log(`[WebGPU-V4] Windows GPU calibration: estFullLayer=${is.toFixed(1)}ms -> TDR-safe 2-in-flight paced mode`),Ve(Ue))}en=0}else ce==="paced"&&(Ze+=en,Te=yield it.submitChunk(Te,en,Ue),en=0)}}}const $t=Ue+1<$e?b.w0Vec4s+Ue*b.hiddenVec4PerLayer:0;ae[0]=Ue*b.metaStride,ae[1]=$t,ae[2]=(Ue+1)*b.metaStride,ae[3]=Ue+1<$e?1:0,ae[4]=Ue===0?1:0,ae[5]=_e.isFull?1:0,ae[6]=Ae,ae[7]=lt*8,oe[8]=_e.extWeight||0,ae[9]=0,ae[10]=0,ae[11]=0,e.queue.writeBuffer(Ee[Ue],0,ae);{const Ye=Te.beginComputePass();Ye.setBindGroup(0,ut[Ue]),Ye.setPipeline(Zt.pipe),Ye.dispatchWorkgroups(d.cs,1,1),Ye.end(),we.push("momentsPrep")}if(Ue+1<$e){{const We=Te.beginComputePass();We.setBindGroup(0,ut[Ue]),We.setPipeline(Qt.pipe),We.dispatchWorkgroups(1,1,1),We.end(),we.push("momentsPrep")}const Ye=_e.isFull?0:gt;if((Ye>0||pt>0)&&(Ye>0&&L.set(_e.normStrips,0),pt>0&&L.set(_e.haloRows,Ye),e.queue.writeBuffer(Ce[Ue],0,L.subarray(0,Ye+pt))),ee[0]=_e.isFull?1:0,ee[1]=_e.bgStrip?_e.bgStrip.z*T+_e.bgStrip.yWg*4:0,ee[2]=Ye,ee[3]=pt,e.queue.writeBuffer(Be[Ue],0,ee),_e.isFull||gt>0||pt>0){const We=Te.beginComputePass();We.setBindGroup(0,ue[Ue]),(_e.isFull||gt>0)&&(We.setPipeline(Yt.pipe),We.dispatchWorkgroups(1,_e.isFull?64:1,_e.isFull?T:gt)),pt>0&&(We.setPipeline(Bt.pipe),We.dispatchWorkgroups(1,Math.ceil(pt/4),1)),We.end(),we.push("normHalo")}}if(ce==="pipelined")e.queue.submit([Te.finish()]),Te=e.createCommandEncoder();else if(ce==="calibrate")e.queue.submit([Te.finish()]),yield e.queue.onSubmittedWorkDone(),Te=e.createCommandEncoder(),Ze+=(Ue===0||!D.chunkableStd?yt.convWork:0)+yt.normWork,Ue===$e-1&&!e.__v4WinCalibrated&&(e.__v4WinCalibrated=!0,e.__v4WinFast=!ge.isWindowsSharedIgpu);else if(ce!=="single"){const Ye=(!D.chunkableStd&&Ue>0?yt.convWork:0)+yt.normWork;Ze+=Ye,Te=yield it.submitChunk(Te,Ye,Ue)}}return ce==="paced"&&(yield it.waitBeforeFinalSubmit()),xe.__passCategories=we,Ht.finishAndReadback({enc:Te,schedule:de,passCategories:we,u4Tmp:ee,ioOpts:ne,paced:ce==="paced",onProgress:Le})})}return Ht.warmupIoPipelines(),xe.dispose=({keepSharedWorkspace:qe=!1}={})=>{Ht.dispose();for(const ne of me)ne.destroy();if(me.length=0,le.resetBytes(),Y.pooled)qe?Y.inUse=!1:pn.get(e)===Y&&wn(e);else{for(const ne of Y.buffers)ne.destroy();Y.buffers.length=0}},xe.gpuBytes=()=>Y.bytes+le.getBytes(),xe.__passCategories=[],xe.__coneInfo=()=>({paddedVox:R,actMiB:A/1048576}),xe.__v4Plan=()=>U,xe.kernels="v4-int8",xe})}function Qs(e){return Me(this,null,function*(){var a,r;if(!e)return;const t=()=>Fs>0||!!e.__isLost;if(t())return;const n=!!((r=(a=e.features)==null?void 0:a.has)!=null&&r.call(a,"shader-f16")),s=er(e,null);if(yield un(e,n?"prep_in_u8_f16":"prep_in_u8_f32",()=>Ws(!0,n),"main",["read-only-storage","storage","uniform"]),t()||(yield un(e,"transpose_u8_v4",lr,"main",["read-only-storage","storage"]),t()))return;const o=[{chan:24,cs:24,nclass:0,dilations:Bs,activation:"gelu_tanh",norm:"gn"},{chan:15,cs:16,nclass:0,dilations:[16,8,4,2,1],activation:"gelu_tanh",norm:"gn"},{chan:16,cs:16,nclass:0,dilations:Bs,activation:"gelu_tanh",norm:"gn"}];for(const i of o){if(t())return;const u=i.cs>=16,l=u?i.cs/2:i.cs,c=T*T*l*ft*4,g=yield Yo(e,i,null,{actBytes:c,outBufBytes:T*T*T,hasF16:n});if(t())return;if(g.layout==="LowMem128"){const m=wr({cs:i.cs,chan:i.chan,nclass:0,clsK4:0,dilations:i.dilations,activation:i.activation,norm:i.norm,hasF16:n,subgroupMode:s,numConvs:i.dilations.length,probCfg:null});yield cr(e,i,null,n,s,null,m,{includeCls:!1,sequential:!0,shouldAbort:t})}else{const m=g.chunkableStd,f=hr({cs:i.cs,chan:i.chan,nclass:0,clsK4:0,dilations:i.dilations,activation:i.activation,norm:i.norm,hasF16:n,subgroupMode:s,splitHalves:u,probCfg:null,chunkableStd:m});yield fr(e,i,null,n,s,u,null,f,{includeCls:!1,sequential:!0,shouldAbort:t})}}})}const Si=(e,t)=>Me(null,null,function*(){const n=yield fetch(t).then(s=>s.arrayBuffer());return Zs(e,new Uint8Array(n))}),xr=!0,Mi={load:Si,setupNet:Zs,warmupV4CorePipelines:Qs,supportsF32Fallback:vr,supportsGpuNativeIO:xr},Rs=Object.freeze(Object.defineProperty({__proto__:null,default:Mi,releaseV4Workspace:wn,setupNet:Zs,supportsF32Fallback:vr,supportsGpuNativeIO:xr,warmupV4CorePipelines:Qs},Symbol.toStringTag,{value:"Module"}));function ki(){var e;try{if(new URLSearchParams(((e=globalThis.location)==null?void 0:e.search)||"").get("webgpuKernels")==="tinygrad")return"disabled by ?webgpuKernels=tinygrad"}catch(t){}return null}const Tn=new Set(["meshnet_fast_v4","dkatlas24_int8","mindmap24_int8","model16chan18cls_int8","mindgrab_int8"]);function Pi(e){return Tn.has(e)}const kn=Object.assign({"./webgpu_runners/dkatlas24_synth_f32_runner.js":()=>_n(()=>import("./dkatlas24_synth_f32_runner-Bb7lxqr0.js"),[],import.meta.url),"./webgpu_runners/dkatlas24_synth_runner.js":()=>_n(()=>import("./dkatlas24_synth_runner-5rLWbXWF.js"),[],import.meta.url),"./webgpu_runners/mindgrab_runner.js":()=>_n(()=>import("./mindgrab_runner-B-UQtXej.js"),[],import.meta.url),"./webgpu_runners/model16chan18cls_f32_runner.js":()=>_n(()=>import("./model16chan18cls_f32_runner-B5FaUMez.js"),[],import.meta.url),"./webgpu_runners/model16chan18cls_runner.js":()=>_n(()=>import("./model16chan18cls_runner-aMK3m7Gj.js"),[],import.meta.url),"./webgpu_runners/model24chan18cls_gdice_prio_probability_runner.js":()=>_n(()=>import("./model24chan18cls_gdice_prio_probability_runner-BHqpfuCi.js"),[],import.meta.url),"./webgpu_runners/model24chan18cls_gdice_prio_runner.js":()=>_n(()=>import("./model24chan18cls_gdice_prio_runner-B5cN26gD.js"),[],import.meta.url)});function Ai(){const e=Object.keys(kn).map(t=>{const n=t.match(/\/([^\/]+)_runner\.js$/);return n?n[1]:null}).filter(Boolean);return Array.from(new Set([...Tn,...e]))}function Ci(e){if(Tn.has(e))return()=>Me(null,null,function*(){return Rs});const t=`./webgpu_runners/${e}_runner.js`;if(kn[t])return kn[t];const n=e.toLowerCase();for(const s of Tn)if(s.toLowerCase()===n)return()=>Me(null,null,function*(){return Rs});for(const[s,o]of Object.entries(kn))if(s.toLowerCase().includes(`/${n}_runner.js`))return o;for(const[s,o]of Object.entries(kn))if(s.includes(e))return o;return null}function zi(e){if(Tn.has(e))return!0;const t=`./webgpu_runners/${e}_runner.js`;if(kn[t])return!0;const n=e.toLowerCase();for(const o of Tn)if(o.toLowerCase()===n)return!0;const s=`/${n}_runner.js`;return Object.keys(kn).some(o=>o.toLowerCase().endsWith(s))}function Bi(e,t){if(typeof Float16Array=="undefined")throw new Error("Float16Array unavailable: cannot cast fp32 master weights to fp16.");const n=new DataView(e.buffer,e.byteOffset,e.byteLength),s=Number(n.getBigUint64(0,!0)),o=JSON.parse(new TextDecoder("utf8").decode(e.subarray(8,8+s))),a=8+s;if(!Object.entries(o).some(([p,d])=>p!=="__metadata__"&&d.dtype==="F32"))return e;const i={},u=[];let l=0;for(const[p,d]of Object.entries(o)){if(p==="__metadata__"){i[p]=d;continue}const[b,M]=d.data_offsets,_=e.subarray(a+b,a+M);let $,x;if(d.dtype==="F32"){const S=new Float32Array(_.slice().buffer),h=new Float16Array(S);$=new Uint8Array(h.buffer),x="F16"}else $=_,x=d.dtype;i[p]={dtype:x,shape:d.shape,data_offsets:[l,l+$.byteLength]},u.push($),l+=$.byteLength}const c=new TextEncoder().encode(JSON.stringify(i)),g=(8-c.byteLength%8)%8,m=new Uint8Array(8+c.byteLength+g+l);new DataView(m.buffer).setBigUint64(0,BigInt(c.byteLength+g),!0),m.set(c,8),m.fill(32,8+c.byteLength,8+c.byteLength+g);let f=8+c.byteLength+g;for(const p of u)m.set(p,f),f+=p.byteLength;return console.log("[WebGPU] Cast fp32 master weights -> fp16."),m}function Fi(e,t){try{const n=r=>!!(e.features&&e.features.has&&e.features.has(r)),s=e.limits||{},o=typeof navigator!="undefined"&&navigator.userAgent||"unknown",a=/Safari/.test(o)&&!/Chrome|Chromium|Android/.test(o);console.log("[SAFARI-DEBUG] ===== WebGPU device capabilities ====="),console.log("[SAFARI-DEBUG] model:",(t==null?void 0:t.modelName)||(t==null?void 0:t.webgpu_runner)||"(unknown)"),console.log("[SAFARI-DEBUG] userAgent:",o,"| classified Safari:",a),console.log("[SAFARI-DEBUG] shader-f16:",n("shader-f16")),console.log("[SAFARI-DEBUG] features:",e.features?Array.from(e.features):"(none)"),console.log("[SAFARI-DEBUG] limits:",{maxBufferSize:s.maxBufferSize,maxStorageBufferBindingSize:s.maxStorageBufferBindingSize,maxComputeInvocationsPerWorkgroup:s.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:s.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:s.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:s.maxComputeWorkgroupSizeZ,maxComputeWorkgroupsPerDimension:s.maxComputeWorkgroupsPerDimension}),console.log("[SAFARI-DEBUG] BC_WEBGPU_DEBUG (logits readback):",typeof window!="undefined"&&!!window.BC_WEBGPU_DEBUG),console.log("[SAFARI-DEBUG] =======================================")}catch(n){console.warn("[SAFARI-DEBUG] capability dump failed:",n==null?void 0:n.message)}}function yr(){return typeof requestAnimationFrame!="function"?new Promise(e=>setTimeout(e,0)):new Promise(e=>{let t=!1;const n=()=>{t||(t=!0,e())},s=setTimeout(n,25);requestAnimationFrame(()=>{clearTimeout(s),setTimeout(n,0)})})}const Li=6,Ui=4,yn=new Map,hs=new Map,$n=new Map,hn=new WeakMap,ws=new WeakSet;function Wi(e){wn(e)}function Ri(e){return Me(this,null,function*(){if(!(!e||ws.has(e))){ws.add(e);try{yield Qs(e)}catch(t){ws.delete(e),console.debug("[WebGPU] Background pipeline warmup skipped:",(t==null?void 0:t.message)||t)}}})}function $r(e,{keepSharedWorkspace:t=!1}={}){var n;if(e)try{if(typeof((n=e.execute)==null?void 0:n.dispose)=="function")e.execute.dispose({keepSharedWorkspace:t});else if(e.ownedBuffers)for(const s of e.ownedBuffers)s.destroy()}catch(s){console.warn("[WebGPU] Failed to dispose cached runner buffers:",s)}}function qi(e,t,n,s){var o,a,r,i,u,l,c,g,m,f,p,d,b,M,_,$,x,S,h;return JSON.stringify([e,t,n,(o=s.id)!=null?o:null,(a=s.numClasses)!=null?a:null,(r=s.outputType)!=null?r:null,(i=s.dilations)!=null?i:null,(u=s.activation)!=null?u:null,(l=s.quantize8Bit)!=null?l:null,(c=s.forceFP32)!=null?c:null,(g=s.disableF16)!=null?g:null,(m=s.disableSubgroups)!=null?m:null,(f=s.disableConeSkip)!=null?f:null,(p=s.forceLowMem128)!=null?p:null,(d=s.webgpuExecMode)!=null?d:null,(b=s.softmaxTemperature)!=null?b:null,(M=s.brainSupportTemperature)!=null?M:null,(_=s.brainSupportPower)!=null?_:null,($=s.partialVolumeSigma)!=null?$:null,(x=s.probabilityGroups)!=null?x:null,(S=s.probabilityDisplay)!=null?S:null,(h=s.classifierBias)!=null?h:null])}function Co(e){const t=yn.get(e);if(t)return yn.delete(e),yn.set(e,t),Promise.resolve(t);const n=hs.get(e);if(n)return n;const s=Me(null,null,function*(){let o;try{const r=yield fetch(e);if(!r.ok)throw new Error(`HTTP ${r.status}: ${r.statusText}`);o=yield r.arrayBuffer()}catch(r){throw new Error(`Failed to load weights from '${e}': ${r.message}`)}const a=new Uint8Array(o);for(yn.set(e,a);yn.size>Li;){const r=yn.keys().next().value;yn.delete(r)}return a}).finally(()=>{hs.delete(e)});return hs.set(e,s),s}function Ii(e,t,n,s){if(!n)return e;const o=$n.get(t);if(o)return $n.delete(t),$n.set(t,o),o;const a=Bi(e);for($n.set(t,a);$n.size>Ui;){const r=$n.keys().next().value;$n.delete(r)}return a}function qs(e,t){return Me(this,null,function*(){const n=[],s=e.createBuffer.bind(e);e.createBuffer=o=>{const a=s(o);return n.push(a),a};try{return{result:yield t(),buffers:n}}finally{e.createBuffer=s}})}function Is(e){let t=0;for(const n of e)t+=Number(n==null?void 0:n.size)||0;return t}function vs(e){for(const t of e)try{t.destroy()}catch(n){}}function Gi(e,t,n){return Me(this,null,function*(){var S,h,w,A,y,C,P;const s=(S=ki())!=null?S:Na(e,t);let o=t.webgpu_runner,a=t.webgpu_safetensor;const r=!!(e.features&&e.features.has&&e.features.has("shader-f16"));let i=!1;s&&(t.forceFP32?(i=!0,console.log("[WebGPU] forceFP32: using fp32 runner and weights.")):!r&&zi(`${o}_f32`)&&(i=!0,console.log("[WebGPU] shader-f16 not supported on this device -> auto-selecting fp32 runner and weights.")),i&&(o=`${o}_f32`,a=a.replace(".safetensors","_f32.safetensors")),t.enableTTA&&t.webgpuTTArunner&&(console.log("[WebGPU] TTA Enabled: Switching to TTA runner and weights."),o=`${o}_tta`,a=a.replace(".safetensors","_tta.safetensors")));const l=qi(s?"runner":"native",s?o:"webgpu_native",a,t),c=hn.get(e);if(c&&c.runnerKey===l)return vt(at({},c),{cacheHit:!0});const g=!!(s&&Pi(o));if(n("Loading model…",.1),c&&(hn.delete(e),$r(c,{keepSharedWorkspace:g})),g||wn(e),Fi(e,t),s)console.log(`[WebGPU-native] not used for ${t.modelName||t.webgpu_runner}: ${s}`);else{let U=[];try{const z=yield Co(a),D=yield qs(e,()=>Va(e,z,n,t));U=D.buffers;const N=D.result;N.kernels="hand-written";const X={runnerKey:l,runnerName:"webgpu_native",weightsPath:a,execute:N,supportsGpuNativeIO:!1,ownedBuffers:U,gpuBytes:Is(U)};return hn.set(e,X),console.log("[WebGPU-native] Using hand-written WebGPU kernels."),vt(at({},X),{cacheHit:!1})}catch(z){vs(U),console.warn("[WebGPU-native] falling back to the tinygrad runner:",(z==null?void 0:z.message)||z)}}const m=g?()=>Me(null,null,function*(){return Rs}):Ci(o);if(!m){const U=Ai();throw new Error(`Runner '${o}' not found. Available runners: ${U.join(", ")||"none"}. Looking in: ./webgpu_runners/`)}const[f,p]=yield Promise.all([m(),Co(a)]);if(!f.setupNet&&!((h=f.default)!=null&&h.setupNet))throw new Error(`Runner module '${o}' doesn't export 'setupNet'. Exported keys: ${Object.keys(f).join(", ")}`);const d=!!((A=f.supportsF32Fallback)!=null?A:(w=f.default)!=null&&w.supportsF32Fallback),b=!!((C=f.supportsGpuNativeIO)!=null?C:(y=f.default)!=null&&y.supportsGpuNativeIO);!i&&!r&&!d&&console.warn(`[WebGPU] shader-f16 not supported and no fp32 runner ('${o}_f32') available; the fp16 runner will likely fail and fall back to WebGL2.`);const _=Ii(p,a,!i&&!d),$=f.setupNet||((P=f.default)==null?void 0:P.setupNet);let x=[];try{const U=yield qs(e,()=>$(e,_,n,t));x=U.buffers;const z=U.result;if(typeof z!="function")throw vs(x),new Error(`setupNet for '${o}' didn't return a function. Returned type: ${typeof z}`);const D={runnerKey:l,runnerName:o,weightsPath:a,execute:z,supportsGpuNativeIO:b,ownedBuffers:typeof z.dispose=="function"?null:x,gpuBytes:typeof z.gpuBytes=="function"?z.gpuBytes():Is(x)};return hn.set(e,D),vt(at({},D),{cacheHit:!1})}catch(U){g&&wn(e),vs(x);const z=new Error(`Failed to setup network for '${o}': ${U.message}`,{cause:U});throw U!=null&&U.oomError&&(z.oomError=U.oomError),z}})}function Ti(e,t,n,s,o,a,r){return Me(this,null,function*(){var m,f,p,d;const i=n.outputType==="probability";console.log("Starting WebGPU inference..."),r(i?"Starting tissue estimation…":"Starting segmentation…",0);const u=ca(n,ua.WEBGPU);u.isModelFullVol=!0;let l=!1,c=null;const g=da(n);try{if(!e)throw new Error("WebGPU device is required but not provided");if(!(n!=null&&n.webgpu_runner))throw new Error("Model entry must specify webgpu_runner property");if(!(n!=null&&n.webgpu_safetensor))throw new Error("Model entry must specify webgpu_safetensor property");const b=n.webgpuStorageSize||335544320;if(e.limits){const k=me=>(me/1048576).toFixed(0),te=(m=e.limits.maxStorageBufferBindingSize)!=null?m:1/0,I=(f=e.limits.maxBufferSize)!=null?f:1/0;if(te<b||I<b){const me=k(Math.min(te,I)),le=k(b),re=`[WebGPU] Device buffer limit (${me} MB) is below the ${le} MB this model needs - using WebGL2 fallback.`;throw console.warn(re),new Error(re)}}e.pushErrorScope("out-of-memory"),l=!0;const M=performance.now();c=yield Gi(e,n,r);const _=((performance.now()-M)/1e3).toFixed(4),$=performance.now();r("Preparing volume…",.25);const x=[256,256,256],S=c.supportsGpuNativeIO&&!!n.enableTranspose&&!n.inputPermutation,h=c.supportsGpuNativeIO&&!!n.enableTranspose&&!n.outputPermutation;let w,A;if(n.enableQuantileNorm){const{qmin:k,qmax:te}=oa(o);w=k,A=te-k}else{const{min:k,max:te}=ra(o);w=k,A=te-k}const y=A===0?1:A;let C=null,P,U=x;if(S)g&&(C=co(o,w,y)),P=o;else{const k=co(o,w,y);if(g&&(C=k),n.inputPermutation){console.log(`[WebGPU] Permuting Input: ${n.inputPermutation}`);const te=n.inputPermutation;U=[x[te[0]],x[te[1]],x[te[2]]],P=Fn(k,x,te)}else n.enableTranspose?P=Fn(k,x,[2,1,0]):P=k}const z=((performance.now()-$)/1e3).toFixed(4);r("",.3),r(i?"Estimating tissue maps…":"Segmenting…",.3),yield yr();const D=performance.now(),N=c.supportsGpuNativeIO?(k,te)=>{const I=Math.max(0,Math.min(1,Number(k)||0));r(te?`Segmenting… · ${te}`:"",.3+.6*I)}:void 0,X=S||h||N?{gpuNativeInput:S,gpuNativeOutput:h,normOffset:w,normRange:y,onProgress:N}:void 0,B=yield qs(e,()=>X?c.execute(P,X):c.execute(P)),R=B.result;if(typeof c.execute.gpuBytes=="function"){c.gpuBytes=c.execute.gpuBytes();const k=hn.get(e);k&&k.runnerKey===c.runnerKey&&(k.gpuBytes=c.gpuBytes)}else if(B.buffers.length>0){c.gpuBytes=(c.gpuBytes||0)+Is(B.buffers),c.ownedBuffers&&c.ownedBuffers.push(...B.buffers);const k=hn.get(e);k&&k.runnerKey===c.runnerKey&&(k.gpuBytes=c.gpuBytes)}l=!1;const q=yield e.popErrorScope();if(q){const k=new Error(`WebGPU out of memory (${q.message||"allocation failed"})`);throw k.oomError=q,k}if(!R||!Array.isArray(R))throw new Error(`Inference didn't return expected array format. Returned: ${typeof R}`);const j=((performance.now()-D)/1e3).toFixed(4),O=(c.gpuBytes||0)/1048576;if(u.GPU_Memory_MiB=Math.round(O),u.WebGPU_Kernels=c.execute.kernels||"tinygrad",typeof c.execute.__v4Plan=="function"){const k=c.execute.__v4Plan();u.WebGPU_V4_Layout=k.layout,u.WebGPU_V4_Exec=k.execMode,u.WebGPU_V4_Reason=k.reason,Number.isFinite(k.probeMs)&&(u.WebGPU_V4_Probe_ms=Number(k.probeMs.toFixed(1))),typeof window!="undefined"&&window.webgpuDiagnostics&&(window.webgpuDiagnostics.v4Plan={layout:k.layout,execMode:k.execMode,reason:k.reason,tier:k.tier,probeMs:k.probeMs,estFullLayerMs:k.estFullLayerMs,fromCache:k.fromCache,safeMode:k.safeMode})}const F=O>=1024?`${(O/1024).toFixed(2)} GiB`:`${Math.round(O)} MiB`;console.log(`WebGPU inference took ${j}s (${u.WebGPU_Kernels} kernels, ${F} GPU memory).`),r("Finishing up…",.9),console.log("Inference result shapes:",R.map(k=>k==null?void 0:k.length));const E=n.outputPermutation||(n.enableTranspose?[2,1,0]:null),K=performance.now();let Y;const Z={};if(g){if(R.length!==3)throw new Error(`CAT-lite expected three tissue maps; received ${R.length}.`);r("Refining tissue fractions…",.92),Y=yield Pa(R,C,n,u,h?te=>te:te=>E?Fn(te,U,E):te instanceof Float32Array?te:Float32Array.from(te),x),C=null}else if(i){const k=R[0];Y=h?k:E?Fn(k,U,E):k instanceof Float32Array?k:Float32Array.from(k),fo(Y,!0,"probability")}else{const k=R[0];R[0]=null;let te;h?te=k instanceof Uint8Array?k:new Uint8Array(k):E?te=aa(k,U,E):te=k instanceof Uint8Array?k:new Uint8Array(k),fo(te,!1,"segmentation"),Y=yield Ma(te,o,n,t,Z,x,{transferLabels:!0})}const pe=((performance.now()-K)/1e3).toFixed(4),ve=performance.now();yield a(Y,t,n,Z.mask);const fe=((performance.now()-ve)/1e3).toFixed(4);if(i)g||(u.Output_Type="Continuous tissue probability",u.Tissue=n.probabilityDisplay||"grayMatter",u.Softmax_Temperature=(p=n.softmaxTemperature)!=null?p:1);else{const k=ia(Y),te=n.numClasses||k;fa(u,te,k)}pa(u,j,pe,{Preprocess_t:z,Setup_t:_,Display_t:fe}),console.log(`[Timing] WebGPU | ${n.modelName} | setup=${(Number(_)*1e3).toFixed(1)}ms prep=${(Number(z)*1e3).toFixed(1)}ms infer=${(Number(j)*1e3).toFixed(1)}ms post=${(Number(pe)*1e3).toFixed(1)}ms disp=${(Number(fe)*1e3).toFixed(1)}ms cache=${c.cacheHit?"hit":"miss"}`);const be=`${Number(j).toFixed(1)} s`,V=i?`Tissue maps finished (${be})`:`Segmentation finished (${be})`,ie=!i&&((d=n.numClasses)!=null?d:0)>2?t!=null&&t.isTouchPrimary?" · Open Stats to isolate a region":" · Option/Alt-click a region to isolate":"";r(`${V}${ie}`,1,"",u)}catch(b){if(console.error("WebGPU Inference Error:",b),c&&(hn.get(e)===c&&hn.delete(e),$r(c),c=null),l&&e){l=!1;try{const $=yield e.popErrorScope();$&&b&&typeof b=="object"&&!b.oomError&&(b.oomError=$)}catch($){}}let M=(b==null?void 0:b.message)||String(b);b!=null&&b.oomError&&!/out[- ]of[- ]memory|\boom\b/i.test(M)&&(M=`${M} (WebGPU out of memory: ${b.oomError.message||"allocation failed"})`),M.includes("not found")?M+=". Check that the runner file exists and the name matches.":M.includes("fetch")?M+=". Check network connection and file paths.":M.includes("binding size")&&(M+=". GPU memory limit exceeded."),ma(u,M,"WebGPU inference failed");const _=(n==null?void 0:n.__v4PlanReasonOverride)==="safe-mode-retry"?"WebGPU (low-memory retry) Error":"WebGPU Error";throw r("",-1,`${_}: ${M}`,u),b}})}const Oi={batchSize:1,numOfChan:1,isColorEnable:!0,isAutoColors:!0,bgLabelValue:0,drawBoundingVolume:!1,isGPU:!0,isBrainCropMaskBased:!0,showPhase1Output:!1,isPostProcessEnable:!0,fillSuppressedWithNeighborLabel:!1,diagnoseEnclosedComponents:!1,isContoursViewEnable:!1,browserArrayBufferMaxZDim:30,telemetryFlag:!1,chartXaxisStepPercent:10,uiSampleName:"BC_UI_Sample",atlasSelectedColorTable:"Fire"};function zo(e,t=!0){if(!e)return e;const o=e,{turbo:n}=o,s=ro(o,["turbo"]);return!t||!n?s:vt(at(at({},s),n),{isTurboActive:!0})}const Sn=[{id:2,type:"Brain_Extraction",path:"/models/mindgrab/model.json",modelName:"🪓🧠 Omnimodal Skull Stripping",webgpu_safetensor:"./models/mindgrab/model.safetensors",webgpu_runner:"mindgrab",classifierBias:[1.525439739227295,-1.5258055925369263],webgpuTTArunner:!1,forceFP32:!1,webgpuStorageSize:503316480,numClasses:2,turbo:{webgpu_runner:"mindgrab_int8",quantize8Bit:!0,forceFP32:!1,webgpuTTArunner:!1,webgpuStorageSize:83886080,warning:"Runs via the 8-bit V4 WebGPU engine (~3.7s on M1 WebGPU, auto-scaling from 160 MiB down to 80 MiB max buffer on mobile) or native WebGL2."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,isPostProcessEnable:!0,enableCrop:!0,cropPadding:20,autoThreshold:.5,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!1,textureSize:0,warning:"This model may need dedicated graphics card.  For more info please check with Browser Resources <i class='fa fa-cogs'></i>.",inferenceDelay:100,description:"Omnimodal skull stripping (MindGrab) delivering high-accuracy brain extraction across T1, T2, FLAIR, DWI, EPI, MRA, PDw, qT1, CT, and PET via the 8-bit V4 WebGPU engine (80 MiB mobile / 160 MiB desktop max buffer) or native WebGL2."},{id:21,type:"Atlas",path:"/models/model24chan18cls_gdice_prio/model.json",modelName:"🪓 Subcortical + Tissue",colormapPath:"./models/model24chan18cls_gdice_prio/colormap.json",webgpu_safetensor:"./models/model24chan18cls_gdice_prio/model.safetensors",webgpu_runner:"model24chan18cls_gdice_prio",forceFP32:!1,webgpuStorageSize:1610612736,numClasses:18,turbo:{webgpu_runner:"mindmap24_int8",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:125829120,warning:"Runs via the 8-bit V4 WebGPU engine (~3.0s on M1 WebGPU, auto-scaling from 240 MiB down to 120 MiB max buffer on mobile) or native WebGL2."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,cropPadding:20,autoThreshold:0,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!0,textureSize:0,warning:"Runs via the 8-bit V4 WebGPU engine (120–240 MiB max buffer) or native WebGL2.",inferenceDelay:100,description:"Primary T1w brain parcellation into 17 regions (gray and white matter plus subcortical structures) via a 24-channel gridding-free MeshNet (MindMap-18 v4.0: sharp sulci, clinical atrophy sensitivity, and slice/noise/bias robustness), accelerated by the 8-bit V4 WebGPU engine (120 MiB mobile / 240 MiB desktop max buffer)."},{id:23,type:"Probability_Map",path:"/models/model24chan18cls_gdice_prio/model.json",modelName:"⅔🧠 Tissue fraction maps (GM/WM/CSF)",webgpu_safetensor:"./models/model24chan18cls_gdice_prio/model.safetensors",webgpu_runner:"model24chan18cls_gdice_prio_probability",forceFP32:!1,webgpuStorageSize:1610612736,numClasses:18,turbo:{webgpu_runner:"mindmap24_int8",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:125829120,warning:"Experimental neural-assisted partial-volume estimate (~3.5s on M1 WebGPU, auto-scaling from 240 MiB down to 120 MiB max buffer on mobile)."},outputType:"probability",probabilityPostprocess:"cat-lite",softmaxTemperature:2,brainSupportTemperature:1,brainSupportPower:1,partialVolumeSigma:.65,probabilityDisplay:"grayMatter",probabilityTissues:[{name:"gm",tint:[255,64,64]},{name:"wm",tint:[255,255,255]},{name:"csf",tint:[64,128,255]}],probabilityOverlayFloor:128,probabilityOverlayAlpha:48,probabilityDisplayMin:.03,probabilityUnderlayOpacity:.1,probabilityGroups:{grayMatter:[2,6,7,8,9,10,14,15,16,17],whiteMatter:[1,5],csf:[3,4,11,12]},catLitePurePriorPower:3,catLitePriorStrength:.8,catLiteIntensityStrength:.75,catLiteMixelPrior:.35,catLiteCsfWmMixelPrior:6,catLiteSpatialWeight:.25,catLiteMinSupport:.03,catLiteSigmaFloor:.025,catLiteBiasBlockSize:16,catLiteBiasSmoothPasses:3,preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,enableQuantileNorm:!0,enableFovRecenter:!1,enableFovInflate:!1,warning:"Experimental neural-assisted mixed-class partial-volume estimate, not CAT12.",inferenceDelay:100,description:"CAT-inspired GM/WM/CSF partial-volume estimate. The 24-channel model supplies joint GM/WM/CSF priors; normalized T1 intensity, a coarse local bias estimate, spatial regularization, and explicit GM-CSF/GM-WM mixture classes produce continuous GM, WM and CSF fractions. Experimental and not a CAT12 result."},{id:5,type:"Atlas",path:"/models/model24chan104cls_v3_repbn/model.json",modelName:"🪓🔪 Desikan-Killiany Atlas",colormapPath:"./models/model24chan104cls_v3_repbn/colormap.json",webgpu_safetensor:"./models/model24chan104cls_v3_repbn/model.safetensors",webgpu_runner:"dkatlas24_synth",forceFP32:!1,webgpuStorageSize:1610612736,numClasses:104,turbo:{webgpu_runner:"dkatlas24_int8",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:125829120,warning:"Runs via the 8-bit V4 WebGPU engine (~3.0s on M1 WebGPU, auto-scaling from 240 MiB down to 120 MiB max buffer on mobile) or native WebGL2."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,cropPadding:20,autoThreshold:0,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!0,textureSize:0,warning:"Runs via the 8-bit V4 WebGPU engine (120–240 MiB max buffer) or native WebGL2.",inferenceDelay:100,description:"Primary 104-region Desikan-Killiany atlas parcellation (cortical + subcortical + 5-part corpus callosum) for research and clinical T1-weighted MRI (MindSnap-104 v4.0: sharp sulci, clinical atrophy sensitivity, spotless CSF/cerebellum), running via the 8-bit V4 WebGPU engine (~3.0s on M1, 120 MiB mobile / 240 MiB desktop max buffer) or native WebGL2."},{id:4,type:"Atlas",path:"/models/model24chan50cls/model.json",modelName:"🪓🔪 Desikan-Killiany 50",colormapPath:"./models/model24chan50cls/colormap.json",webgpu_safetensor:"./models/model24chan50cls/model.safetensors",webgpu_runner:"meshnet_fast_v4",forceFP32:!1,webgpuStorageSize:805306368,numClasses:50,turbo:{webgpu_runner:"meshnet_fast_v4",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:125829120,warning:"Runs via the 8-bit V4 WebGPU engine (~3.0s on M1 WebGPU, auto-scaling from 240 MiB down to 120 MiB max buffer on mobile) or native WebGL2."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,cropPadding:20,autoThreshold:0,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!0,textureSize:0,warning:"Runs via the 8-bit V4 WebGPU engine (120–240 MiB max buffer) or native WebGL2.",inferenceDelay:100,description:"Bilateral 50-region Desikan-Killiany cortical + subcortical + corpus callosum parcellation with built-in skull stripping (MindSnap-50 v4.0: sharp sulci and clinical atrophy sensitivity), running via the 8-bit V4 WebGPU engine (~3.0s on M1, 120 MiB mobile / 240 MiB desktop max buffer) or native WebGL2."},{id:6,type:"Divider",modelName:"-----------------",path:null},{id:3,type:"Atlas",path:"/models/model16chan18cls/model.json",modelName:"⚡🪓 Subcortical + Tissue",colormapPath:"./models/model16chan18cls/colormap.json",webgpu_safetensor:"./models/model16chan18cls/model.safetensors",webgpu_runner:"model16chan18cls",forceFP32:!1,webgpuStorageSize:536870912,numClasses:18,turbo:{webgpu_runner:"model16chan18cls_int8",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:83886080,warning:"Ultra-fast 16-channel MindMap v3.5 (~1.7s on M1 WebGPU, auto-scaling from 160 MiB down to 80 MiB max buffer on mobile)."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,cropPadding:20,autoThreshold:0,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!0,textureSize:0,warning:"Runs via the 8-bit V4 WebGPU engine (80–160 MiB max buffer) or native WebGL2.",inferenceDelay:100,description:"Ultra-fast 17-region brain parcellation (gray and white matter plus subcortical structures) via our 84K-parameter 16-channel MeshNet (MindMap-16ch v3.5), running in ~1.7s on M1 WebGPU with an 80 MiB mobile / 160 MiB desktop buffer footprint."},{id:14,type:"Atlas",path:"/models/model24chan104cls_synth/model.json",modelName:"🪓🔪 Desikan-Killiany (lesion scans)",colormapPath:"./models/model24chan104cls_synth/colormap.json",webgpu_safetensor:"./models/model24chan104cls_synth/model.safetensors",webgpu_runner:"dkatlas24_synth",forceFP32:!1,webgpuStorageSize:1610612736,numClasses:104,turbo:{webgpu_runner:"dkatlas24_int8",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:125829120,warning:"Runs via the 8-bit V4 WebGPU engine (~3.0s on M1 WebGPU, auto-scaling from 240 MiB down to 120 MiB max buffer on mobile) or native WebGL2."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,cropPadding:20,autoThreshold:0,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!0,textureSize:0,warning:"Runs via the 8-bit V4 WebGPU engine (120–240 MiB max buffer) or native WebGL2.",inferenceDelay:100,description:"Desikan-Killiany 104-region parcellation variant retained for scans with large focal lesions, running via the 8-bit V4 WebGPU engine (120–240 MiB max buffer) or native WebGL2."}];function Js(){return Me(this,null,function*(){return navigator.userAgent.indexOf("OPR/")>-1?"Opera":navigator.userAgent.indexOf("Edg/")>-1?"Edge":navigator.userAgent.indexOf("Falkon/")>-1?"Falkon":navigator.userAgent.indexOf("Chrome/")>-1?"Chrome":navigator.userAgent.indexOf("Firefox/")>-1?"Firefox":navigator.userAgent.indexOf("Safari/")>-1?"Safari":navigator.userAgent.indexOf("MSIE/")>-1||navigator.userAgent.indexOf("rv:")>-1?"IExplorer":"Unknown"})}function Ni(){return Me(this,null,function*(){return navigator.userAgent.indexOf("OPR/")>-1?parseInt(navigator.userAgent.split("OPR/")[1]):navigator.userAgent.indexOf("Edg/")>-1?parseInt(navigator.userAgent.split("Edg/")[1]):navigator.userAgent.indexOf("Falkon/")>-1?parseInt(navigator.userAgent.split("Falkon/")[1]):navigator.userAgent.indexOf("Chrome/")>-1?parseInt(navigator.userAgent.split("Chrome/")[1]):navigator.userAgent.indexOf("Firefox/")>-1?parseInt(navigator.userAgent.split("Firefox/")[1]):navigator.userAgent.indexOf("Safari/")>-1?parseInt(navigator.userAgent.split("Safari/")[1]):navigator.userAgent.indexOf("MSIE/")>-1||navigator.userAgent.indexOf("rv:")>-1?parseInt(navigator.userAgent.split("MSIE/")[1]):1/0})}function Ei(){return Me(this,null,function*(){return navigator.userAgent.indexOf("Win")>-1?"Windows":navigator.userAgent.indexOf("Mac")>-1?"MacOS":navigator.userAgent.indexOf("Linux")>-1?"Linux":navigator.userAgent.indexOf("UNIX")>-1?"UNIX":"Unknown"})}function Di(e){return Me(this,null,function*(){return e?(console.log("WebGl2 is enabled"),!0):(console.log(typeof WebGL2RenderingContext!="undefined"?"WebGL2 may be disabled. Please try updating video card drivers":"WebGL2 is not supported"),!1)})}function Vi(e){return Me(this,null,function*(){let t;if(e&&(t=e.getExtension("WEBGL_debug_renderer_info"),t)){const n=e.getParameter(t.UNMASKED_VENDOR_WEBGL);return n.indexOf("(")>-1&&n.indexOf(")")>-1?n.substring(n.indexOf("(")+1,n.indexOf(")")):n}return null})}function Hi(e){return Me(this,null,function*(){if(e){const t=e.getExtension("WEBGL_debug_renderer_info");return t?e.getParameter(t.UNMASKED_VENDOR_WEBGL):null}else return null})}function Xi(e){return Me(this,null,function*(){if(e){if(Js()==="Firefox")return e.getParameter(e.RENDERER);const t=e.getExtension("WEBGL_debug_renderer_info");return t?e.getParameter(t.UNMASKED_RENDERER_WEBGL):null}else return null})}function ji(e){return Me(this,null,function*(){let t;if(e){if(Js()==="Firefox")return e.getParameter(e.RENDERER);if(t=e.getExtension("WEBGL_debug_renderer_info"),t){let n=e.getParameter(t.UNMASKED_RENDERER_WEBGL);return n.indexOf("(")>-1&&n.indexOf(")")>-1&&n.indexOf("(R)")===-1&&(n=n.substring(n.indexOf("(")+1,n.indexOf(")")),n.split(",").length===3)?n.split(",")[1].trim():n}}return null})}function Yi(){return Me(this,null,function*(){return navigator.hardwareConcurrency})}function Ki(){return Me(this,null,function*(){return/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)})}function Zi(e,t=null){return Me(this,null,function*(){var s;const n=new Date;if(e.isModelFullVol?e.Brainchop_Ver="FullVolume":e.Brainchop_Ver="SubVolumes",e.Total_t=(Date.now()-e.startTime)/1e3,delete e.startTime,e.Date=parseInt(n.getMonth()+1)+"/"+n.getDate()+"/"+n.getFullYear(),e.Browser=yield Js(),e.Browser_Ver=yield Ni(),e.OS=yield Ei(),e.WebGL2=yield Di(t),e.GPU_Vendor=yield Vi(t),e.GPU_Card=yield ji(t),e.GPU_Vendor_Full=yield Hi(t),e.GPU_Card_Full=yield Xi(t),e.CPU_Cores=yield Yi(),e.Which_Brainchop="latest",(yield Ki())&&(e.Heap_Size_MB=window.performance.memory.totalJSHeapSize/(1024*1024).toFixed(2),e.Used_Heap_MB=window.performance.memory.usedJSHeapSize/(1024*1024).toFixed(2),e.Heap_Limit_MB=window.performance.memory.jsHeapSizeLimit/(1024*1024).toFixed(2)),t){console.log("MAX_TEXTURE_SIZE :",t.getParameter(t.MAX_TEXTURE_SIZE)),console.log("MAX_RENDERBUFFER_SIZE :",t.getParameter(t.MAX_RENDERBUFFER_SIZE));const o=t.getExtension("WEBGL_debug_renderer_info");console.log("VENDOR WEBGL:",t.getParameter((s=o==null?void 0:o.UNMASKED_VENDOR_WEBGL)!=null?s:t.VENDOR)),e.Texture_Size=t.getParameter(t.MAX_TEXTURE_SIZE)}else e.Texture_Size=null;return e})}const xs={bankssts:1,caudalanteriorcingulate:2,caudalmiddlefrontal:3,cuneus:5,entorhinal:6,fusiform:7,inferiorparietal:8,inferiortemporal:9,isthmuscingulate:10,lateraloccipital:11,lateralorbitofrontal:12,lingual:13,medialorbitofrontal:14,middletemporal:15,parahippocampal:16,paracentral:17,parsopercularis:18,parsorbitalis:19,parstriangularis:20,pericalcarine:21,postcentral:22,posteriorcingulate:23,precentral:24,precuneus:25,rostralanteriorcingulate:26,rostralmiddlefrontal:27,superiorfrontal:28,superiorparietal:29,superiortemporal:30,supramarginal:31,frontalpole:32,temporalpole:33,transversetemporal:34,insula:35},Qi=new Set(["BG","Unknown","background","Background"]),Bo={"Left-Cerebral-White-Matter":2,"Right-Cerebral-White-Matter":41,"Left-Cerebral-Cortex":3,"Right-Cerebral-Cortex":42,"Left-Lateral-Ventricle":4,"Right-Lateral-Ventricle":43,"Left-Inf-Lat-Vent":5,"Right-Inf-Lat-Vent":44,"Left-Cerebellum-White-Matter":7,"Right-Cerebellum-White-Matter":46,"Left-Cerebellum-Cortex":8,"Right-Cerebellum-Cortex":47,"Left-Thalamus":10,"Left-Thalamus-Proper":10,"Left-Thalamus-Proper*":10,"Right-Thalamus":49,"Right-Thalamus-Proper":49,"Right-Thalamus-Proper*":49,"Left-Caudate":11,"Right-Caudate":50,"Left-Putamen":12,"Right-Putamen":51,"Left-Pallidum":13,"Right-Pallidum":52,"Left-Hippocampus":17,"Right-Hippocampus":53,"Left-Amygdala":18,"Right-Amygdala":54,"Left-Accumbens":26,"Left-Accumbens-area":26,"Right-Accumbens":58,"Right-Accumbens-area":58,"Left-VentralDC":28,"Right-VentralDC":60,"3rd-Ventricle":14,"4th-Ventricle":15,"Brain-Stem":16,CSF:24,CC_Posterior:251,CC_Mid_Posterior:252,CC_Central:253,CC_Mid_Anterior:254,CC_Anterior:255,"Cerebral-White-Matter":2,"White Matter":2,"Cerebral-Cortex":3,"Grey Matter":3,"Gray Matter":3,"Lateral-Ventricle":4,Ventricle:4,"Inferior-Lateral-Ventricle":5,"Cerebellum-White-Matter":7,"Cerebellum-Cortex":8,Cerebellum:8,Thalamus:10,"Thalamus-Proper":10,"Thalamus-Proper*":10,Caudate:11,Putamen:12,Pallidum:13,Hippocampus:17,Amygdala:18,"Accumbens-area":26,Accumbens:26,VentralDC:28,"Corpus callosum":253,Corpus_Callosum:253};function Ji(e){if(typeof e!="string")return null;const t=e.trim();if(Qi.has(t))return 0;if(Object.hasOwn(Bo,t))return Bo[t];if(t.startsWith("ctx-lh-")){const n=xs[t.slice(7)];return n?1e3+n:null}if(t.startsWith("ctx-rh-")){const n=xs[t.slice(7)];return n?2e3+n:null}if(t.startsWith("ctx-")){const n=xs[t.slice(4)];return n?1e3+n:null}return null}function Qn(e){if(!Array.isArray(e)||e.length<3)return null;const t=new Int16Array(e.length);for(let n=0;n<e.length;n++){const s=Ji(e[n]);if(s===null||(n===0?s!==0:s<=0))return null;t[n]=s}return t}function el(e,t){const n=e.length,s=new Int16Array(n),o=t.length;let a=0;for(let r=0;r<n;r++){const i=e[r],u=i>=0&&i<o?t[i]:i;s[r]=u,u>a&&(a=u)}return{img:s,maxLabel:a}}const tl=110,nl=10;function eo(e){var t;if(e){e.pan2Dxyzmm=Float32Array.from([0,0,0,1]),e.renderPan=[0,0],e.azimuth=tl,e.elevation=nl,e.scaleMultiplier=1;const n=(t=e.volumes)==null?void 0:t[0];n&&Number.isFinite(n.robustMin)&&Number.isFinite(n.robustMax)&&n.robustMax>n.robustMin&&(n.calMin!==n.robustMin||n.calMax!==n.robustMax)&&(n.calMin=n.robustMin,n.calMax=n.robustMax,e.updateGLVolume())}sl()}function sl(){const e=document.querySelector('meta[name="viewport"]');if(!e)return;const t=e.getAttribute("content")||"width=device-width, initial-scale=1.0";/maximum-scale/.test(t)||(e.setAttribute("content",`${t}, maximum-scale=1, user-scalable=no`),requestAnimationFrame(()=>requestAnimationFrame(()=>e.setAttribute("content",t))))}function ol(e){const t=n=>n.preventDefault();for(const n of["gesturestart","gesturechange","gestureend"])document.addEventListener(n,t,{passive:!1});document.addEventListener("touchmove",n=>{n.touches.length>1&&n.target!==e&&n.preventDefault()},{passive:!1})}function rl(e){return ol((e==null?void 0:e.canvas)||null),{resetView:()=>eo(e)}}const al=720,il=860;function ll(){var o,a,r,i,u,l;const e=window.visualViewport,t=Math.round((a=(o=e==null?void 0:e.width)!=null?o:window.innerWidth)!=null?a:0),n=Math.round((i=(r=e==null?void 0:e.height)!=null?r:window.innerHeight)!=null?i:0);return t>0&&t<=al?!0:!!((l=(u=window.matchMedia)==null?void 0:u.call(window,"(pointer: coarse)"))==null?void 0:l.matches)&&Math.min(t,n)<=il}const qn=[{id:"multi",label:"All",title:"All planes",type:Nn.MULTIPLANAR},{id:"axial",label:"A",title:"Axial only",type:Nn.AXIAL},{id:"coronal",label:"C",title:"Coronal only",type:Nn.CORONAL},{id:"sagittal",label:"S",title:"Sagittal only",type:Nn.SAGITTAL},{id:"render",label:"3D",title:"3D render only",type:Nn.RENDER}];function Sr(e,t,n){const s=qn.find(o=>o.id===n)||qn[0];e.sliceType=s.type,t.querySelectorAll("button").forEach(o=>o.classList.toggle("active",o.dataset.pane===s.id))}function ul(e,t){const n=document.createElement("div");n.id="paneSwitcher",n.className="pane-switcher",n.setAttribute("role","group"),n.setAttribute("aria-label","Visible planes");for(const o of qn){const a=document.createElement("button");a.type="button",a.dataset.pane=o.id,a.textContent=o.label,a.title=o.title,a.setAttribute("aria-label",o.title),a.addEventListener("click",()=>Sr(e,n,o.id)),n.appendChild(a)}const s=document.createElement("button");return s.type="button",s.className="pane-reset",s.textContent="⟲",s.title="Reset zoom and pan",s.setAttribute("aria-label","Reset zoom and pan"),s.addEventListener("click",()=>eo(e)),n.appendChild(s),t.appendChild(n),n}function cl(e){var o;const t=document.getElementById("canvas-container")||document.body,n=ul(e,t);n.querySelector('button[data-pane="multi"]').classList.add("active"),window.addEventListener("keydown",a=>{if(a.key!=="v"&&a.key!=="V"||a.altKey||a.ctrlKey||a.metaKey||a.repeat)return;const r=a.target;if(r instanceof HTMLElement&&(r.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(r.tagName)))return;a.preventDefault(),a.stopImmediatePropagation();const i=qn.findIndex(u=>u.type===e.sliceType);Sr(e,n,qn[(i+1)%qn.length].id)},!0);const s=()=>document.body.classList.toggle("nv-narrow",ll());window.addEventListener("resize",s),window.addEventListener("orientationchange",s),(o=window.visualViewport)==null||o.addEventListener("resize",s),s()}const ys=[{name:"gm",displayName:"Gray Matter",tint:[255,64,64]},{name:"wm",displayName:"White Matter",tint:[255,255,255]},{name:"csf",displayName:"CSF",tint:[64,128,255]}],fl={gm:"Gray Matter",wm:"White Matter",csf:"CSF"};function Mr(e){return(Array.isArray(e==null?void 0:e.probabilityTissues)&&e.probabilityTissues.length===3?e.probabilityTissues:ys).map((n,s)=>{const o=String((n==null?void 0:n.name)||ys[s].name).toLowerCase();return{index:s,name:o,displayName:fl[o]||o.toUpperCase(),tint:Array.isArray(n==null?void 0:n.tint)&&n.tint.length>=3?n.tint:ys[s].tint}})}function Fo(e,t,n=null,s=1,o=null){var j,O;const[a,r,i]=e,u=a.length,l=(j=t==null?void 0:t.probabilityDisplayMin)!=null?j:.03,c=1/Math.max(1e-6,1-l),g=((O=t==null?void 0:t.probabilityOverlayFloor)!=null?O:128)/255,m=1-g,f=Mr(t),[p,d,b]=f[0].tint,[M,_,$]=f[1].tint,[x,S,h]=f[2].tint,w=n===null||n===0,A=n===null||n===1,y=n===null||n===2,C=Math.max(0,Math.min(1,Number(s)||0)),P=Math.round(C*256),U=!!(o&&o.dimsRAS&&o.img2RASstart&&o.img2RASstep&&o.dimsRAS[1]*o.dimsRAS[2]*o.dimsRAS[3]===u),z=new Uint8Array(u*4);let D=0;for(let F=0;F<u;F++){const E=w?a[F]:0,K=A?r[F]:0,Y=y?i[F]:0;(E>=l||K>=l||Y>=l)&&D++}const N=new Uint32Array(D),X=new Uint8Array(D);let B=0;const R=2/256,q=(F,E)=>{const K=w?a[F]:0,Y=A?r[F]:0,Z=y?i[F]:0;if(K<l&&Y<l&&Z<l)return;let pe=0,ve=0,fe=0,be=0;if(K>=l){const le=K>1?1:K,re=(le-l)*c,H=le>R?le:R,J=(g+m*H)*re;pe+=p*J,ve+=d*J,fe+=b*J,re>be&&(be=re)}if(Y>=l){const le=Y>1?1:Y,re=(le-l)*c,H=le>R?le:R,J=(g+m*H)*re;pe+=M*J,ve+=_*J,fe+=$*J,re>be&&(be=re)}if(Z>=l){const le=Z>1?1:Z,re=(le-l)*c,H=le>R?le:R,J=(g+m*H)*re;pe+=x*J,ve+=S*J,fe+=h*J,re>be&&(be=re)}if(be<=0)return;const V=1/be,ie=pe*V,k=ve*V,te=fe*V,I=Math.min(255,Math.round(be*255)),me=E*4;z[me]=ie>=255?255:Math.round(ie),z[me+1]=k>=255?255:Math.round(k),z[me+2]=te>=255?255:Math.round(te),z[me+3]=I*P+128>>8,N[B]=me+3,X[B]=I,B++};if(U){const[,F,E,K]=o.dimsRAS,[Y,Z,pe]=o.img2RASstart,[ve,fe,be]=o.img2RASstep,V=Y+Z+pe;let ie=0;for(let k=0;k<K;k++){const te=V+k*be;for(let I=0;I<E;I++){let me=te+I*fe;for(let le=0;le<F;le++,ie++,me+=ve)q(me,ie)}}}else for(let F=0;F<u;F++)q(F,F);return{rgba:z,activeAlphaOffsets:B===D?N:N.subarray(0,B),activeBaseAlpha:B===D?X:X.subarray(0,B),tissues:f,isRasOrdered:U}}function pl(e,t,n,s){const o=Math.max(0,Math.min(1,Number(s)||0)),a=Math.round(o*256),r=t.length;for(let i=0;i<r;i++)e[t[i]]=n[i]*a+128>>8}function Lo(e,t,n,s,o){var M;const a=Mr(o),r=(M=o==null?void 0:o.probabilityDisplayMin)!=null?M:.03,[i,u,l]=s,[c,g,m]=t,f=a.map(()=>({fracSum:0,supportVoxels:0,wSum:0,wSumSq:0,sumX:0,sumY:0,sumZ:0,coreMin:1/0,coreMax:-1/0,anyMin:1/0,anyMax:-1/0}));let p=0;for(let _=0;_<l;_++)for(let $=0;$<u;$++)for(let x=0;x<i;x++,p++){const S=c[p],h=g[p],w=m[p];if(S<=0&&h<=0&&w<=0)continue;const A=e[p];if(S>0&&Number.isFinite(S)){const y=f[0];y.fracSum+=S,S>=r&&y.supportVoxels++,y.wSum+=S*A,y.wSumSq+=S*A*A,y.sumX+=S*x,y.sumY+=S*$,y.sumZ+=S*_,A<y.anyMin&&(y.anyMin=A),A>y.anyMax&&(y.anyMax=A),S>=.5&&(A<y.coreMin&&(y.coreMin=A),A>y.coreMax&&(y.coreMax=A))}if(h>0&&Number.isFinite(h)){const y=f[1];y.fracSum+=h,h>=r&&y.supportVoxels++,y.wSum+=h*A,y.wSumSq+=h*A*A,y.sumX+=h*x,y.sumY+=h*$,y.sumZ+=h*_,A<y.anyMin&&(y.anyMin=A),A>y.anyMax&&(y.anyMax=A),h>=.5&&(A<y.coreMin&&(y.coreMin=A),A>y.coreMax&&(y.coreMax=A))}if(w>0&&Number.isFinite(w)){const y=f[2];y.fracSum+=w,w>=r&&y.supportVoxels++,y.wSum+=w*A,y.wSumSq+=w*A*A,y.sumX+=w*x,y.sumY+=w*$,y.sumZ+=w*_,A<y.anyMin&&(y.anyMin=A),A>y.anyMax&&(y.anyMax=A),w>=.5&&(A<y.coreMin&&(y.coreMin=A),A>y.coreMax&&(y.coreMax=A))}}const d=[];for(let _=0;_<3;_++){const $=f[_];if($.fracSum<=0)continue;const x=$.wSum/$.fracSum,S=Math.max(0,$.wSumSq/$.fracSum-x*x),h=Number.isFinite($.coreMin)?$.coreMin:Number.isFinite($.anyMin)?$.anyMin:0,w=Number.isFinite($.coreMax)?$.coreMax:Number.isFinite($.anyMax)?$.anyMax:0,[A,y,C]=a[_].tint;d.push({label:_,tissueIndex:_,tissueKey:a[_].name,name:a[_].displayName,voxels:Math.round($.fracSum),effectiveVoxels:$.fracSum,supportVoxels:$.supportVoxels,volume_mm3:$.fracSum*n,mean:x,stdev:Math.sqrt(S),min:h,max:w,centroidVox:[$.sumX/$.fracSum,$.sumY/$.fracSum,$.sumZ/$.fracSum],colorCss:`rgb(${A},${y},${C})`,tint:a[_].tint})}const b=d.reduce((_,$)=>_+$.volume_mm3,0);return{rows:d,icvMm3:b}}function ml(e,t){const n=["tissue","name","volume_mm3","volume_cm3","pct_icv","effective_voxels","support_voxels","weighted_mean","weighted_stdev","min","max"],s=a=>/[",\n]/.test(a)?`"${String(a).replace(/"/g,'""')}"`:String(a),o=[n.join(",")];for(const a of e){const r=t>0?a.volume_mm3/t*100:0;o.push([s(a.tissueKey),s(a.name),a.volume_mm3.toFixed(3),(a.volume_mm3/1e3).toFixed(3),r.toFixed(3),a.effectiveVoxels.toFixed(3),a.supportVoxels,a.mean.toFixed(4),a.stdev.toFixed(4),a.min,a.max].join(","))}return o.join(`
`)+`
`}function kr(){if(typeof crypto!="undefined"){if(typeof crypto.randomUUID=="function")return crypto.randomUUID();if(typeof crypto.getRandomValues=="function"){const e=new Uint8Array(16);crypto.getRandomValues(e),e[6]=e[6]&15|64,e[8]=e[8]&63|128;const t=Array.from(e,n=>n.toString(16).padStart(2,"0")).join("");return`${t.slice(0,8)}-${t.slice(8,12)}-${t.slice(12,16)}-${t.slice(16,20)}-${t.slice(20)}`}}return`vol-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}function dl(){var e,t,n,s;return!!((t=(e=window.matchMedia)==null?void 0:e.call(window,"(pointer: coarse)"))!=null&&t.matches&&!((s=(n=window.matchMedia)==null?void 0:n.call(window,"(pointer: fine)"))!=null&&s.matches))}function Uo(e,t=e.img.slice(),n=e.name){const s=Object.assign(Object.create(Object.getPrototypeOf(e.hdr)),e.hdr),o=Wr(s,t,n);return o.id=kr(),o}const jt=e=>e&&typeof e.slice=="function"?e.slice():e;function Dn(e,t,n=e.name,s={},o={}){var u;const a=Object.assign(Object.create(Object.getPrototypeOf(e.hdr)),e.hdr,at({dims:[...e.hdr.dims],pixDims:[...e.hdr.pixDims],affine:e.hdr.affine.map(l=>[...l])},s)),r=e.dims?e.dims.slice(0,4):a.dims.slice(0,4),i=(u=e.nVox3D)!=null?u:r[1]*r[2]*r[3];return at({img:t,hdr:a,originalAffine:a.affine.map(l=>[...l]),dims:r,nVox3D:i,extentsMin:jt(e.extentsMin),extentsMax:jt(e.extentsMax),mm000:jt(e.mm000),mm100:jt(e.mm100),mm010:jt(e.mm010),mm001:jt(e.mm001),dimsRAS:e.dimsRAS?[...e.dimsRAS]:void 0,pixDimsRAS:e.pixDimsRAS?[...e.pixDimsRAS]:void 0,permRAS:e.permRAS?[...e.permRAS]:void 0,toRAS:jt(e.toRAS),toRASvox:jt(e.toRASvox),matRAS:jt(e.matRAS),obliqueRAS:jt(e.obliqueRAS),oblique_angle:e.oblique_angle,frac2mm:jt(e.frac2mm),frac2mmOrtho:jt(e.frac2mmOrtho),img2RASstep:e.img2RASstep?[...e.img2RASstep]:void 0,img2RASstart:e.img2RASstart?[...e.img2RASstart]:void 0,volScale:e.volScale?[...e.volScale]:void 0,name:n,id:kr(),calMin:0,calMax:255,robustMin:0,robustMax:255,globalMin:0,globalMax:255,frame4D:0,nFrame4D:1,nTotalFrame4D:1,isLegendVisible:!1},o)}function gl(e){let t=256,n=-1,s=0;for(let l=0;l<256;l++){const c=e[l];c>0&&(l<t&&(t=l),n=l,l!==0&&(s+=c))}if(t>n)return{calMin:0,calMax:255,robustMin:0,robustMax:255,globalMin:0,globalMax:255};if(t===n)return{calMin:t,calMax:n,robustMin:t,robustMax:n,globalMin:t,globalMax:n};const o=Math.round(s*.02),a=Math.round(s*.02);let r=0,i=t;for(let l=t;l<=n;l++){if(l===0&&e[0]>o){i=0;break}if(r+=e[l],r>=o){i=l;break}}r=0;let u=n;for(let l=n;l>=t;l--)if(r+=e[l],r>=a){u=Math.min(n,l+1);break}return i>=u&&(i=t,u=n),{calMin:i,calMax:u,robustMin:i,robustMax:u,globalMin:t,globalMax:n}}function Jn(e,[t,n,s]){const o=e.dimsRAS,a=e.img2RASstart,r=e.img2RASstep;return!o||!a||!r||t<0||t>=o[1]||n<0||n>=o[2]||s<0||s>=o[3]?null:a[0]+t*r[0]+a[1]+n*r[1]+a[2]+s*r[2]}function zn(e,t){return Me(this,null,function*(){const n=e.img,s=yield Ur(t,e.hdr,n.buffer.byteLength===n.byteLength?n.buffer:n.buffer.slice(n.byteOffset,n.byteOffset+n.byteLength)),o=URL.createObjectURL(new Blob([s]));Object.assign(document.createElement("a"),{href:o,download:t}).click(),URL.revokeObjectURL(o)})}let qt=null,on=!1,es=0,ts=!1,cn=[];const Pr=/Safari/.test(navigator.userAgent)&&!/Chrome|Chromium|CriOS|FxiOS|Edg|Android/.test(navigator.userAgent),_l=Pr&&new URLSearchParams(window.location.search).get("inference")!=="webgpu",Gs=new URLSearchParams(window.location.search).get("inference")==="webgl2";function $s(e=null){return Me(this,null,function*(){const t={secureContext:window.isSecureContext,navigatorGpuExists:"gpu"in navigator,adapterObtained:!1,deviceObtained:!1,f16Support:!1,error:null};if(window.isSecureContext||(console.warn("WebGPU requires a secure context (HTTPS or localhost)."),console.warn("Current origin:",window.location.origin)),"gpu"in navigator)try{console.log("Requesting WebGPU adapter...");const n=yield navigator.gpu.requestAdapter();if(n){t.adapterObtained=!0,console.log("WebGPU adapter obtained:",n),n.info&&console.log("Adapter info:",n.info),console.log("Adapter limits:",{maxBufferSize:n.limits.maxBufferSize,maxStorageBufferBindingSize:n.limits.maxStorageBufferBindingSize,maxComputeWorkgroupsPerDimension:n.limits.maxComputeWorkgroupsPerDimension});const s={maxBufferSize:n.limits.maxBufferSize,maxStorageBufferBindingSize:n.limits.maxStorageBufferBindingSize,maxStorageBuffersPerShaderStage:n.limits.maxStorageBuffersPerShaderStage,maxUniformBufferBindingSize:n.limits.maxUniformBufferBindingSize,maxComputeInvocationsPerWorkgroup:n.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:n.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:n.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:n.limits.maxComputeWorkgroupSizeZ,maxComputeWorkgroupStorageSize:n.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:n.limits.maxComputeWorkgroupsPerDimension},o=n.features.has("shader-f16"),a=n.features.has("subgroups");t.f16Support=o,t.subgroupsSupport=a;const r=[];o&&r.push("shader-f16"),a&&r.push("subgroups");const i=yield n.requestDevice({requiredLimits:s,requiredFeatures:r});if(i.__adapterInfo=n.info||null,e&&typeof e.getParameter=="function")try{if(/Firefox/i.test(navigator.userAgent||""))i.__glRenderer=String(e.getParameter(e.RENDERER)||"");else{const l=e.getExtension("WEBGL_debug_renderer_info");i.__glRenderer=String((l?e.getParameter(l.UNMASKED_RENDERER_WEBGL):e.getParameter(e.RENDERER))||"")}}catch(l){}i.__isLost=!1,i.lost&&typeof i.lost.then=="function"&&i.lost.then(l=>{i.__isLost=!0,(l==null?void 0:l.reason)!=="destroyed"&&(console.warn(`[WebGPU] Device was lost (${(l==null?void 0:l.reason)||"unknown"}): ${(l==null?void 0:l.message)||""}`),qt===i&&(qt=null,on=!1,t.deviceObtained=!1,t.error=(l==null?void 0:l.message)||"WebGPU device lost",Wo(!1,t)))}),qt=i,t.deviceObtained=!0,on=!0,console.log(`✓ WebGPU initialized successfully. F16: ${o?"enabled":"not available"}, Subgroups: ${a?"enabled":"not available"}`)}else console.warn("WebGPU adapter request returned null."),console.warn("This typically means:"),console.warn("  - Safari: WebGPU feature flags not enabled in Settings > Feature Flags"),console.warn("  - Unsupported GPU hardware"),console.warn("  - GPU drivers need updating"),t.error="Adapter returned null"}catch(n){t.error=n.message,console.error("WebGPU initialization error:",n),navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")&&(console.warn("Safari detected. To enable WebGPU:"),console.warn("  1. Open Safari Settings/Preferences"),console.warn('  2. Go to Advanced tab, enable "Show features for web developers"'),console.warn("  3. Go to Feature Flags tab"),console.warn("  4. Enable: WebGPU, GPU Process: DOM Rendering, GPU Process: Canvas Rendering"),console.warn("  5. Restart Safari"))}else console.warn("navigator.gpu not found. WebGPU API is not available in this browser."),t.error="navigator.gpu not found",navigator.userAgent.includes("Firefox")&&(console.warn("Firefox detected. To enable WebGPU in about:config:"),console.warn("  1. Set dom.webgpu.enabled = true"),console.warn("  2. Set gfx.webgpu.ignore-blocklist = true"),console.warn("  3. Restart Firefox"));return Wo(on,t),on||console.log("Falling back to WebGL backend."),window.webgpuDiagnostics=t,t})}function Wo(e,t){const n=document.getElementById("backendStatus"),s=document.getElementById("backendStatusItem");if(!n){console.log("Backend status element not found in DOM");return}if(s&&(s.hidden=!1),e){const o=t.f16Support?" (F16)":"";n.textContent=`WebGPU${o}`,n.style.color="#4CAF50",n.title="WebGPU backend active - fastest performance"}else{n.textContent="WebGL",n.style.color="#FF9800";let o="WebGL backend (fallback)";t.error&&(o+=`
Reason: ${t.error}`),t.secureContext||(o+=`
⚠ Not a secure context (HTTPS required)`),Pr&&!Gs&&(o+=`

To enable WebGPU in Safari:
1. Settings > Feature Flags
2. Enable WebGPU flags
3. Restart Safari`),navigator.userAgent.includes("Firefox")&&(o+=`

To enable WebGPU in Firefox:
1. about:config > dom.webgpu.enabled = true
2. gfx.webgpu.ignore-blocklist = true
3. Restart Firefox`),n.title=o}}function bl(){return Me(this,null,function*(){var Je;let e="",t="",n=null,s=null,o=null,a=null;function r(){const v=modelSelect.value;return v==="-1"||modelSelect.selectedIndex<0?null:Sn[v]||null}function i(){const v=r();modelSelect.title=(v==null?void 0:v.description)||"Choose a segmentation model to run"}const u=document.getElementById("activeModelItem"),l=document.getElementById("activeModelBadge");function c(v){var L;if(!u||!l)return;const W=(L=v==null?void 0:v.modelName)==null?void 0:L.trim();if(!W){u.hidden=!0,l.textContent="",l.removeAttribute("title");return}l.textContent=W,l.title=`Active model: ${W}`,u.hidden=!1}const g="altKey";let m=null,f=null,p=null,d=null,b=null,M=null,_=null,$="input.nii.gz",x=null;const S=document.getElementById("dragSegmented");S&&S.querySelectorAll("button").forEach(v=>{v.onclick=()=>{ue.secondaryDragMode=parseInt(v.dataset.drag,10),S.querySelectorAll("button").forEach(W=>{const L=W===v;W.classList.toggle("active",L),W.setAttribute("aria-pressed",String(L))})}});const h=document.getElementById("drawBtn"),w=document.getElementById("drawPopover"),A=document.getElementById("penRow"),y=document.getElementById("drawApplyRow");function C(v){w&&(w.hidden=!v,h&&h.setAttribute("aria-expanded",String(v)))}function P(v){ue.drawIsEnabled=v>=0,v>=0&&(!ue.drawingVolume&&ue.volumes.length&&ue.createEmptyDrawing(),ue.drawPenValue=v&7,ue.drawPenFilled=v>7),A&&A.querySelectorAll(".chip").forEach(W=>W.classList.toggle("active",parseInt(W.dataset.pen,10)===v))}function U(v){return Me(this,null,function*(){var Pe;if(ue.volumes.length<2){window.alert("No segmentation open (run a model first).");return}if(v===0){ue.drawUndo();return}const W=(Pe=ue.drawingVolume)==null?void 0:Pe.img;if(!W){window.alert("Nothing drawn yet — pick a pen and draw on the image first.");return}const L=ue.volumes[1].img;if(p||L instanceof Float32Array){window.alert("Drawing edits label segmentations, not probability maps.");return}const ae=ue.volumes[1],oe=ae.dimsRAS;if(!oe||W.length!==oe[1]*oe[2]*oe[3]){window.alert("The drawing does not match the current image — redraw it.");return}const ee=v===1?1:0;let xe=0;for(let Fe=0;Fe<oe[3];Fe++)for(let Oe=0;Oe<oe[2];Oe++)for(let je=0;je<oe[1];je++,xe++)W[xe]>0&&(L[Jn(ae,[je,Oe,Fe])]=ee);ue.closeDrawing(),yield ue.updateGLVolume(),ue.drawIsEnabled=!1,P(-1)})}h&&(h.onclick=v=>{v.stopPropagation(),C(w.hidden)}),A&&A.querySelectorAll(".chip").forEach(v=>{v.onclick=()=>P(parseInt(v.dataset.pen,10))}),y&&y.querySelectorAll(".chip").forEach(v=>{v.onclick=()=>U(parseInt(v.dataset.apply,10))}),document.addEventListener("click",v=>{!w||w.hidden||v.target.closest(".popover-wrap")||C(!1)}),document.addEventListener("keydown",v=>{v.key==="Escape"&&C(!1)});const z=document.getElementById("appDialog");if(z&&!("closedBy"in HTMLDialogElement.prototype)){let v=!1;const W=L=>{const ae=z.getBoundingClientRect();return L.clientX<ae.left||L.clientX>ae.right||L.clientY<ae.top||L.clientY>ae.bottom};z.addEventListener("pointerdown",L=>{v=L.target===z&&W(L)}),z.addEventListener("pointerup",L=>{v&&L.target===z&&W(L)&&z.close(),v=!1})}aboutBtn.onclick=function(){Nt("About BrainChop",`
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
    `)};const D=document.getElementById("shadingBtn");D.onclick=()=>{const v=D.classList.toggle("active");D.setAttribute("aria-pressed",String(v)),ue.volumeIllumination=v?.5:0};const N=document.getElementById("resetViewBtn");N&&(N.onclick=()=>eo(ue)),diagnosticsBtn.onclick=function(){let v=e;if(v.length<1&&window.webgpuDiagnostics){const L=window.webgpuDiagnostics;v=`:: Startup Diagnostics ::
`,v+=`Secure Context: ${L.secureContext}
`,v+=`WebGPU Enabled: ${on}
`,v+=`F16 Support: ${L.f16Support}
`,L.error&&(v+=`Error: ${L.error}
`),v+=`User Agent: ${navigator.userAgent}
`}if(v.length<1){Nt("Diagnostics","No diagnostic string generated: run a model to create diagnostics");return}let W=v;t=t.slice(0,-2),t!==""&&W.includes("Status: OK")&&(W=W.replace("Status: OK",`Status: ${t}`)),t="",navigator.clipboard.writeText(W).then(()=>{Nt("Diagnostics",`<p>Diagnostics copied to clipboard</p><pre style="white-space: pre-wrap; font-family: monospace; font-size: 0.9em; overflow-x: auto;">${W}</pre>`)}).catch(L=>{Nt("Diagnostics",`<p>Failed to copy to clipboard.</p><pre style="white-space: pre-wrap; font-family: monospace; font-size: 0.9em; overflow-x: auto;">${W}</pre>`)})},opacitySlider0.oninput=()=>{ue.volumes[0]&&(ue.volumes[0].opacity=Number(opacitySlider0.value),ue.drawScene())};let X=Number(opacitySlider1.value),B=0;function R({dataChanged:v=!1,allowAffineFastPath:W=!0}={}){var ee;if(ue.volumes.length<2)return ue.updateGLVolume();const ae=(ee=ue.volumes[1].opacity)!=null?ee:1,oe=X===0!=(ae===0);return X=ae,W&&!v&&!oe&&ae>0&&ue.volumes.length===2&&typeof ue.updateVolumeAffineOnly=="function"?ue.updateVolumeAffineOnly():ue.volumes.length===2&&typeof ue.updateVolumeData=="function"?ue.updateVolumeData(1):ue.updateGLVolume()}function q(){const v=Number(opacitySlider1.value);if(p&&ue.volumes[1]===p.overlay){v>0&&pl(p.rgba,p.activeAlphaOffsets,p.activeBaseAlpha,v),p.overlay.opacity=v,R({dataChanged:!0,allowAffineFastPath:!1});return}ue.volumes.slice(1).forEach(W=>{W.opacity=v}),R({dataChanged:!1,allowAffineFastPath:!0})}opacitySlider1.oninput=()=>{B||(B=requestAnimationFrame(()=>{B=0,q()}))};function j(v=null){const W=(v==null?void 0:v.type)==="Brain_Extraction"?0:v==null?void 0:v.probabilityUnderlayOpacity;W!==void 0?(_===null&&(_=opacitySlider0.value),opacitySlider0.value=W,ue.volumes[0]&&(ue.volumes[0].opacity=Number(W))):_!==null&&(opacitySlider0.value=_,_=null,ue.volumes[0]&&(ue.volumes[0].opacity=Number(opacitySlider0.value)))}function O(){return Me(this,null,function*(){var qe,ne,he;const v=ue.volumes[0],W=(qe=v.hdr)==null?void 0:qe.pixDims,L=!W||Math.abs(Math.abs(W[1])-1)<.001&&Math.abs(Math.abs(W[2])-1)<.001&&Math.abs(Math.abs(W[3])-1)<.001,ae=(ne=v.hdr)==null?void 0:ne.scl_slope,oe=(he=v.hdr)==null?void 0:he.scl_inter,ee=(ae===void 0||ae===0||Math.abs(ae-1)<1e-6)&&(oe===void 0||Math.abs(oe)<1e-6);let xe=v.dims[1]===256&&v.dims[2]===256&&v.dims[3]===256&&v.img instanceof Uint8Array&&v.img.length===256*256*256&&L&&ee;if((v.permRAS[0]!==-1||v.permRAS[1]!==3||v.permRAS[2]!==-2)&&(xe=!1),xe)return;ot("Conforming input volume to 256³...",.05),yield yr(),yield E();const Pe=yield ue.volumeTransform.conform(v,{toRAS:!1}),[Fe,Oe]=[M,$],je=modelSelect.value;yield ue.removeVolume(0),yield ue.addVolume(Pe),[M,$]=[Fe,Oe],modelSelect.value=je,i()})}function F(){for(f=null,p=null,d=null;ue.model.volumes.length>1;)ue.model.removeVolume(ue.model.volumes.length-1)}function E(){return Me(this,null,function*(){F(),Z(),c(null),yield ue.updateGLVolume()})}function K(){return ue.volumes.length>=2&&ue.volumes[1].colormapLabel?ue.volumes[1]:null}function Y(){return p&&ue.volumes.length>=2&&ue.volumes[1]===p.overlay?p:null}function Z(){m=null,f=null,b=null,k&&(k.style.display="none")}function pe(v,W){var oe;const L=new Uint8ClampedArray(v.lut.length),ae=W-((oe=v.min)!=null?oe:0);if(ae>=0&&ae*4+3<v.lut.length){const ee=ae*4;L[ee]=v.lut[ee],L[ee+1]=v.lut[ee+1],L[ee+2]=v.lut[ee+2],L[ee+3]=v.lut[ee+3]}return at({lut:L,min:v.min,max:v.max},v.labels?{labels:v.labels}:{})}function ve(){const v=K();v&&(d||(d=v.colormapLabel),m===null?(v.colormapLabel=d,b=null):(v.colormapLabel=pe(d,m),b=fe(m)),R({dataChanged:!1,allowAffineFastPath:!0}),I())}function fe(v){const W=ue.volumes[0],L=K(),ae=L==null?void 0:L.img;if(!W||!ae)return null;const oe=W.hdr.pixDims||[],ee=oe[1]&&oe[2]&&oe[3]?oe[1]*oe[2]*oe[3]:1,xe=L.hdr.dims.slice(1,4),Pe=Kt(W.img,ae,ee,xe),Fe=Pe.reduce((he,se)=>he+se.volume_mm3,0),Oe=Pe.find(he=>he.label===v);if(!Oe)return null;const je=Fe>0?Oe.volume_mm3/Fe*100:0,qe=[Oe.name,`${_t(Oe.volume_mm3)} cm3   (${je.toFixed(1)}% of brain)`,`${Oe.voxels.toLocaleString()} voxels`,`intensity  ${Oe.mean.toFixed(0)} +/- ${Oe.stdev.toFixed(0)}`];let ne=[1,1,1,1];if(s&&s.R&&s.R[v]!=null){const he=se=>Math.min(255,se*.55+130)/255;ne=[he(s.R[v]),he(s.G[v]),he(s.B[v]),1]}return{lines:qe,color:ne}}function be(v){const W=Y(),L=ue.volumes[0];if(!W||!L)return null;const ae=L.hdr.pixDims||[],oe=ae[1]&&ae[2]&&ae[3]?ae[1]*ae[2]*ae[3]:1,ee=L.hdr.dims.slice(1,4),{rows:xe,icvMm3:Pe}=Lo(L.img,W.maps,oe,ee,W.modelEntry),Fe=xe.find(qe=>qe.tissueIndex===v);if(!Fe)return null;const Oe=Pe>0?Fe.volume_mm3/Pe*100:0,je=qe=>Math.min(255,qe*.55+130)/255;return{lines:[Fe.name,`${_t(Fe.volume_mm3)} cm3   (${Oe.toFixed(1)}% of ICV)`,`${Math.round(Fe.effectiveVoxels).toLocaleString()} equiv. voxels`,`intensity  ${Fe.mean.toFixed(0)} +/- ${Fe.stdev.toFixed(0)}`],color:[je(Fe.tint[0]),je(Fe.tint[1]),je(Fe.tint[2]),1]}}function V(){const v=Y();if(!v)return;const W=Number(opacitySlider1.value),L=Fo(v.maps,v.modelEntry,f,W,v.rasLayout);v.rgba=L.rgba,v.activeAlphaOffsets=L.activeAlphaOffsets,v.activeBaseAlpha=L.activeBaseAlpha,v.overlay.img=L.rgba,v.overlay.opacity=W,b=f===null?null:be(f),R({dataChanged:!0,allowAffineFastPath:!1}),I()}function ie(v){Y()&&(f=v===null||v===f?null:v,V())}let k=null,te=!1;function I(){var Fe,Oe;k||(k=document.createElement("div"),k.style.cssText="position:absolute;pointer-events:none;font:13px/1.55 system-ui,sans-serif;text-shadow:0 1px 2px #000;white-space:pre;color:#ebebeb",ue.canvas.parentElement.appendChild(k));const v=m!==null&&!!K()||f!==null&&!!Y(),W=(Oe=(Fe=ue.view)==null?void 0:Fe.screenSlices)==null?void 0:Oe.find(je=>je.axCorSag===4);if(!v||!b||!W){k.style.display="none";return}const L=window.devicePixelRatio||1,[ae,oe]=W.leftTopWidthHeight;Object.assign(k.style,{left:`${ae/L+8}px`,top:`${oe/L+8}px`});const{lines:ee,color:xe}=b,Pe=xe.slice(0,3).map(je=>Math.round(je*255)).join(",");k.innerHTML=`<span style="color:rgb(${Pe})">${Rt(ee[0])}</span>
`+ee.slice(1).map(Rt).join(`
`),k.style.display="block"}function me(){te||m===null&&f===null||(te=!0,requestAnimationFrame(()=>{te=!1,I()}))}function le(){const v=K();if(!v||!x)return null;const W=Jn(v,x);if(W===null)return null;const L=v.img[W];return L===void 0?null:Math.round(L*v.hdr.scl_slope+v.hdr.scl_inter)}function re(v){K()&&(m=v===0||v===m?null:v,ve())}function H(){const v=Y(),W=ue.volumes[0];if(!v||!W||!x)return;const L=Jn(W,x);if(L===null)return;let ae=null,oe=0;for(let ee=0;ee<v.maps.length;ee++){const xe=v.maps[ee][L];Number.isFinite(xe)&&xe>oe&&(oe=xe,ae=ee)}return ae}function J(v){if(v[g]){if(K()){const W=le();if(W===null||Number.isNaN(W))return;re(W)}else if(Y()){const W=H();if(W===void 0)return;ie(W)}v.preventDefault()}}function G(){return Me(this,null,function*(){if(!ts){ts=!0,cn=[];try{yield $e()}finally{ts=!1,modelProgress.classList.remove("is-busy"),modelSelect.value="-1",i()}}})}function $e(){return Me(this,null,function*(){var he,se,Q;const v=modelSelect.value;if(v==="-1"||modelSelect.selectedIndex<0)return;yield zt;const W=document.getElementById("memstatusItem");W&&(W.hidden=!0),Z(),yield O();const L=Sn[v],oe=(new URLSearchParams(window.location.search).get("precision")||"").toLowerCase(),xe=at(at({},zo(L,oe!=="fp16"&&oe!=="fp32")),oe==="fp32"?{forceFP32:!0}:{}),Pe=vt(at({},Oi),{isTouchPrimary:dl()}),Fe=new URL("./",window.location.href).href;Pe.rootURL=Fe.endsWith("/")?Fe.slice(0,-1):Fe;const Oe=ue.volumes[0].img;let je=null;const qe=_l&&!xe.quantize8Bit,ne=Gs||qe;if(qe&&on&&xe.webgpu_safetensor&&console.info("Safari WebGPU legacy gate active for non-V4 model; routing to native WebGL2."),!ne&&(!qt||qt.__isLost)&&"gpu"in navigator&&es<2&&(he=window.webgpuDiagnostics)!=null&&he.adapterObtained&&(es++,console.info(`[WebGPU] Re-initializing device after prior loss (attempt ${es})...`),yield $s((se=ue.view)==null?void 0:se.gl)),on&&qt&&!qt.__isLost&&!ne&&xe.webgpu_safetensor){console.log("Attempting WebGPU backend...");const de=Qa(vt(at({},xe),{enableTTA:!1}),window.location.search),ce=ge=>Me(null,[ge],function*({failedDevice:we}){var Le;if(we){try{Wi(we)}catch(Ie){}if(!we.__isLost)try{we.destroy()}catch(Ie){}}return qt=null,on=!1,yield $s((Le=ue.view)==null?void 0:Le.gl),on&&qt&&!qt.__isLost?qt:null});try{yield ii({device:qt,modelEntry:de,runAttempt:(we,ge)=>Ti(we,Pe,ge,ue.volumes[0].hdr,Oe,Jt,ot),requestFreshDevice:ce,onRetry:({failureKind:we,error:ge})=>{console.warn(`[WebGPU-V4] ${we} during standard run (${(ge==null?void 0:ge.message)||ge}); persisted low-memory safe mode and retrying once in LowMem128 + paced.`),ot("Retrying in low-memory WebGPU mode…",.05)}}),es=0;return}catch(we){je=we;const ge=(we==null?void 0:we.message)||String(we);cn.some(Le=>Le.includes(ge))||cn.push(`WebGPU: ${ge}`),console.error("WebGPU inference failed, falling back to native WebGL2.",we)}}else!ne&&xe.webgpu_safetensor&&cn.push(`WebGPU: ${((Q=window.webgpuDiagnostics)==null?void 0:Q.error)||"no usable adapter or device"}`);if(L.webgpu_safetensor){const de=oe==="int8"||oe==="rgba8",ce=vt(at({},zo(L,!1)),{quantize8Bit:de,autoQuantize8BitFallback:!de&&!!L.turbo});try{const{runInferenceWebGl2:we,nativeWebgl2Available:ge}=yield _n(()=>Me(null,null,function*(){const{runInferenceWebGl2:Le,nativeWebgl2Available:Ie}=yield import("./inference-webgl2-CTNbL1PZ.js");return{runInferenceWebGl2:Le,nativeWebgl2Available:Ie}}),[],import.meta.url);if(ge()){console.log("Attempting native WebGL2 runner..."),yield we(Pe,ce,ue.volumes[0].hdr,Oe,Jt,ot);return}je=new Error("Native WebGL2 unavailable (no OffscreenCanvas WebGL2 context)."),cn.push(je.message),console.warn(je.message)}catch(we){je=we,cn.push(`WebGL2: ${(we==null?void 0:we.message)||we}`),console.error("Native WebGL2 failed.",we)}}hl(je||new Error(`No available backend could run ${xe.modelName}.`))})}modelSelect.onchange=()=>(i(),G()),i();function ye(){const v=Y();return v?v.maps.map((W,L)=>Dn(ue.volumes[0],W,v.tissues[L].name,{scl_inter:0,scl_slope:1,datatypeCode:16,numBitsPerVoxel:32,cal_min:0,cal_max:1,intent_code:1001})):ue.volumes.slice(1)}function Se(){const v=ue.volumes[1],W=(o==null?void 0:o.type)==="Brain_Extraction"?a:v.img;if(!W||W.length!==v.img.length)throw new Error("The segmentation mask is unavailable. Run the model again.");const L=new Uint8Array(W.length);for(let oe=0;oe<W.length;oe++)L[oe]=W[oe]!==0?1:0;const ae=Uo(v,L,"brain_mask");return Object.assign(ae.hdr,{datatypeCode:2,numBitsPerVoxel:8,scl_slope:1,scl_inter:0,cal_min:0,cal_max:1,intent_code:1002}),ae}function Ce(){return Me(this,arguments,function*({includeMask:v=!1,useFreeSurfer:W=!1}={}){if(ue.volumes.length<2){window.alert("No segmentation to save (run a model first).");return}const L=W?Qn(n):null,ae=ye();for(const oe of ae){const ee=!!oe.colormapLabel||oe.hdr.intent_code===1002;if(L&&ee){const{img:xe,maxLabel:Pe}=el(oe.img,L),Fe=Dn(oe,xe,oe.name,{datatypeCode:4,numBitsPerVoxel:16,scl_slope:1,scl_inter:0,cal_min:0,cal_max:Pe,intent_code:1002});yield zn(Fe,Ge(oe,ae.length,"_fs"))}else yield zn(oe,Ge(oe,ae.length,""))}v&&(yield zn(Se(),"binary_mask.nii.gz"))})}function Ge(v,W,L){return W>1?`segmentation_${v.name}${L}.nii.gz`:`segmentation${L}.nii.gz`}function Re(){if(ue.volumes.length<1){window.alert("No image loaded.");return}zn(ue.volumes[0],"conformed_input.nii.gz")}function Xe(){return Me(this,null,function*(){if(ue.volumes.length<1){window.alert("No image loaded.");return}const v=K(),W=m!==null&&v&&d?v.colormapLabel:null;W&&(v.colormapLabel=d);try{yield ue.saveDocument("brainchop.nvd")}finally{W&&v&&(v.colormapLabel=W)}})}function Ee(){return Me(this,arguments,function*({includeMask:v=!1,useFreeSurfer:W=!1}={}){if(ue.volumes.length<2){window.alert("No segmentation to save (run a model first).");return}if(!M||!M.hdr||!M.hdr.affine){window.alert("Original input grid is unavailable — reload the image and try again.");return}const L=W?Qn(n):null;ot("Reslicing to native space…",.15);try{const ae=ye();for(let oe=0;oe<ae.length;oe++){const ee=ae[oe],xe=!!ee.colormapLabel||ee.hdr.intent_code===1002,Pe=L&&xe?L:null,Fe=yield Be(ee,Pe);yield zn(Fe,Ge(ee,ae.length,Pe?"_fs_native":"_native")),ae.length>1&&ot("Reslicing to native space…",.15+(oe+1)/ae.length*.75)}if(v){const oe=yield Be(Se());yield zn(oe,"binary_mask_native.nii.gz")}ot("Saved native-space segmentation.",1)}catch(ae){ot("",0),console.error("Native-space reslice failed:",ae),window.alert("Native-space export failed: "+(ae&&ae.message?ae.message:ae))}})}function Be(v,W=null){return Me(this,null,function*(){var Fe,Oe;const L=!!v.colormapLabel||v.hdr.intent_code===1002,ae=!L&&v.img instanceof Float32Array,oe=((Oe=(Fe=M.img)==null?void 0:Fe.constructor)==null?void 0:Oe.name)||"Uint8Array",{img:ee,hdrPatch:xe}=yield ka({srcImg:v.img,srcDims:[v.hdr.dims[1],v.hdr.dims[2],v.hdr.dims[3]],srcAffine:v.hdr.affine,dstDims:[M.hdr.dims[1],M.hdr.dims[2],M.hdr.dims[3]],dstAffine:M.hdr.affine,isLabel:L,isProbability:ae,dstTypedArrayKind:oe,labelLut:W}),Pe=Uo(M,ee);return Object.assign(Pe.hdr,xe),Pe})}let ke=!1,Qe=!1;const tt={cube:'<svg viewBox="0 0 24 24" class="save-opt-ico" aria-hidden="true"><path d="M12 2.75l8.25 4.75v9L12 21.25 3.75 16.5v-9z"/><path d="M12 12v9.25M3.75 7.5L12 12l8.25-4.5"/></svg>',grid:'<svg viewBox="0 0 24 24" class="save-opt-ico" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="2.5"/><path d="M3.5 9.5h17M3.5 14.5h17M9.5 3.5v17M14.5 3.5v17"/></svg>',volume:'<svg viewBox="0 0 24 24" class="save-opt-ico" aria-hidden="true"><path d="M12 3.5l8.5 4.5-8.5 4.5L3.5 8z"/><path d="M3.5 12l8.5 4.5 8.5-4.5M3.5 16l8.5 4.5 8.5-4.5"/></svg>',scene:'<svg viewBox="0 0 24 24" class="save-opt-ico" aria-hidden="true"><rect x="3.5" y="4.5" width="17" height="15" rx="2.5"/><path d="M3.5 9.5h17M9.5 9.5v10"/></svg>',arrow:'<svg viewBox="0 0 24 24" class="save-opt-arrow" aria-hidden="true"><path d="M12 4.5v11"/><path d="M7.5 11.5L12 16l4.5-4.5"/><path d="M5 19.5h14"/></svg>'},rt=[{act:Ce,group:"seg",icon:"cube",title:"Conformed space",sub:"256³ · 1 mm isotropic",need:"seg"},{act:Ee,group:"seg",icon:"grid",title:"Native space",sub:"Resampled to the input grid",need:"seg"},{act:Re,group:"vol",icon:"volume",title:"Conformed input volume",sub:"Resampled T1 · 256³ · 1 mm",need:"img"},{act:Xe,group:"vol",icon:"scene",title:"Scene (.nvd)",sub:"Full viewer state document",need:"img"}];function nt(){const v=ue.volumes.length>=1,W=ue.volumes.length>=2,L=W&&o&&o.outputType!=="probability"&&(o.type!=="Brain_Extraction"||!!a),ae=W&&o&&o.outputType!=="probability"&&o.type!=="Brain_Extraction"&&!!Qn(n),oe=se=>se==="seg"?W:v;let ee=!1;const xe=se=>rt.map((Q,de)=>({o:Q,i:de})).filter(({o:Q})=>Q.group===se).map(({o:Q,i:de})=>{const ce=oe(Q.need),we=ce&&!ee?(ee=!0," autofocus"):"";return`<button type="button" class="save-opt${ce?"":" disabled"}" data-i="${de}"${ce?"":" disabled"}${we}>
          ${tt[Q.icon]}
          <span class="save-opt-copy">
            <span class="save-opt-title">${Q.title}</span>
            <span class="save-opt-sub">${Q.sub}</span>
          </span>
          ${tt.arrow}
        </button>`}).join(""),Pe=[];ae&&Pe.push(`
        <label class="save-check-row" for="saveFreeSurfer">
          <input type="checkbox" id="saveFreeSurfer" class="save-checkbox"${ke?" checked":""}>
          <span class="save-check-copy">
            <span class="save-check-title">FreeSurfer label IDs <span class="save-badge">Freeview</span></span>
            <span class="save-check-sub">FreeSurferColorLUT numbering · open directly with :colormap=lut</span>
          </span>
        </label>`),L&&Pe.push(`
        <label class="save-check-row" for="saveBinaryMask">
          <input type="checkbox" id="saveBinaryMask" class="save-checkbox"${Qe?" checked":""}>
          <span class="save-check-copy">
            <span class="save-check-title">Also save binary mask</span>
            <span class="save-check-sub">Foreground 1 · background 0</span>
          </span>
        </label>`);const Fe=Pe.length?`<div class="save-modifiers" role="group" aria-label="Segmentation export options">${Pe.join("")}</div>`:"",je=`
      <div class="save-sheet">
        <section class="save-section">
          <div class="save-section-head">
            <span class="save-section-label">Segmentation</span>
            ${W?"":'<span class="save-section-hint">Run a model first</span>'}
          </div>
          <div class="save-options">${xe("seg")}</div>
          ${Fe}
        </section>
        <section class="save-section save-section-divider">
          <div class="save-section-head">
            <span class="save-section-label">Volume &amp; Scene</span>
          </div>
          <div class="save-options">${xe("vol")}</div>
        </section>
      </div>`;Nt("Save",je,{hideClose:!0,saveMode:!0});const qe=document.getElementById("dialogMessage");if(!qe)return;const ne=qe.querySelector("#saveFreeSurfer");ne&&(ne.onchange=()=>{ke=ne.checked});const he=qe.querySelector("#saveBinaryMask");he&&(he.onchange=()=>{Qe=he.checked}),qe.querySelectorAll(".save-opt:not(.disabled)").forEach(se=>{se.onclick=()=>{var ge,Le;const Q=rt[parseInt(se.dataset.i,10)],de=Q.need==="seg"&&!!((ge=qe.querySelector("#saveBinaryMask"))!=null&&ge.checked),ce=Q.need==="seg"&&ae&&!!((Le=qe.querySelector("#saveFreeSurfer"))!=null&&Le.checked),we=document.getElementById("appDialog");we&&we.open&&we.close(),Q.need==="seg"?Q.act({includeMask:de,useFreeSurfer:ce}):Q.act()}})}const At=document.getElementById("saveBtn");At&&(At.onclick=nt);function Kt(v,W,L,ae=[256,256,256]){const ee=new Map,[xe,Pe,Fe]=ae,Oe=W.length;if(xe*Pe*Fe===Oe){let ne=0;for(let he=0;he<Fe;he++)for(let se=0;se<Pe;se++)for(let Q=0;Q<xe;Q++,ne++){const de=W[ne];if(de===0)continue;let ce=ee.get(de);ce||(ce={count:0,sum:0,sumSq:0,sumX:0,sumY:0,sumZ:0,hist:new Float64Array(256)},ee.set(de,ce));const we=v[ne];ce.count++,ce.sum+=we,ce.sumSq+=we*we,ce.sumX+=Q,ce.sumY+=se,ce.sumZ+=he,ce.hist[we]++}}else for(let ne=0;ne<Oe;ne++){const he=W[ne];if(he===0)continue;let se=ee.get(he);se||(se={count:0,sum:0,sumSq:0,sumX:0,sumY:0,sumZ:0,hist:new Float64Array(256)},ee.set(he,se));const Q=v[ne];se.count++,se.sum+=Q,se.sumSq+=Q*Q,se.hist[Q]++}const je=(ne,he,se)=>{const Q=se*he;let de=0;for(let ce=0;ce<ne.length;ce++)if(de+=ne[ce],de>=Q)return ce;return ne.length-1},qe=[];for(const[ne,he]of[...ee.entries()].sort((se,Q)=>se[0]-Q[0])){const se=he.sum/he.count,Q=Math.max(0,he.sumSq/he.count-se*se);let de=0,ce=0;for(let we=0;we<he.hist.length;we++)if(he.hist[we]>0){de=we;break}for(let we=he.hist.length-1;we>=0;we--)if(he.hist[we]>0){ce=we;break}qe.push({label:ne,name:n&&n[ne]!=null?n[ne]:`label_${ne}`,voxels:he.count,volume_mm3:he.count*L,min:de,max:ce,q1:je(he.hist,he.count,.25),median:je(he.hist,he.count,.5),q3:je(he.hist,he.count,.75),mean:se,stdev:Math.sqrt(Q),centroidVox:[he.sumX/he.count,he.sumY/he.count,he.sumZ/he.count]})}return qe}function St(v,{vol:W,labelArr:L=null,probMap:ae=null}={}){var de;if(!(v!=null&&v.centroidVox)||!((de=W==null?void 0:W.hdr)!=null&&de.affine))return;const[oe,ee,xe]=W.hdr.dims.slice(1,4);let[Pe,Fe,Oe]=v.centroidVox;const je=Math.max(0,Math.min(oe-1,Math.round(Pe))),qe=Math.max(0,Math.min(ee-1,Math.round(Fe))),ne=Math.max(0,Math.min(xe-1,Math.round(Oe))),he=je+qe*oe+ne*oe*ee;if(L&&L[he]!==v.label){let ce=1/0,we=je,ge=qe,Le=ne,Ie=0;for(let Ze=0;Ze<xe;Ze++){const Ne=Ze-Oe,Ve=Ne*Ne;for(let it=0;it<ee;it++){const Te=it-Fe,Ue=Te*Te+Ve;for(let _e=0;_e<oe;_e++,Ie++){if(L[Ie]!==v.label)continue;const Ae=_e-Pe,De=Ae*Ae+Ue;De<ce&&(ce=De,we=_e,ge=it,Le=Ze)}}}Number.isFinite(ce)&&(Pe=we,Fe=ge,Oe=Le)}else if(ae&&!(ae[he]>=.5)){let ce=1/0,we=je,ge=qe,Le=ne,Ie=0;for(let Ze=0;Ze<xe;Ze++){const Ne=Ze-Oe,Ve=Ne*Ne;for(let it=0;it<ee;it++){const Te=it-Fe,Ue=Te*Te+Ve;for(let _e=0;_e<oe;_e++,Ie++){if(!(ae[Ie]>=.5))continue;const Ae=_e-Pe,De=Ae*Ae+Ue;De<ce&&(ce=De,we=_e,ge=it,Le=Ze)}}}Number.isFinite(ce)&&(Pe=we,Fe=ge,Oe=Le)}const se=W.hdr.affine,Q=[se[0][0]*Pe+se[0][1]*Fe+se[0][2]*Oe+se[0][3],se[1][0]*Pe+se[1][1]*Fe+se[1][2]*Oe+se[1][3],se[2][0]*Pe+se[2][1]*Fe+se[2][2]*Oe+se[2][3]];ue.setCrosshairPos(Q)}const Zt='<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="5.5"/><path d="M12 2.5v4M12 17.5v4M2.5 12h4M17.5 12h4"/></svg>';function Qt(v,W=null){const L=W?["label","fs_label","name","voxels","volume_mm3","min","max","q1","median","q3","mean","stdev"]:["label","name","voxels","volume_mm3","min","max","q1","median","q3","mean","stdev"],ae=xe=>Number.isInteger(xe)?String(xe):xe.toFixed(6),oe=xe=>/[",\n]/.test(xe)?`"${String(xe).replace(/"/g,'""')}"`:String(xe),ee=[L.join(",")];for(const xe of v){const Pe=W?[xe.label,xe.label<W.length?W[xe.label]:xe.label,oe(xe.name)]:[xe.label,oe(xe.name)];Pe.push(xe.voxels,ae(xe.volume_mm3),xe.min,xe.max,xe.q1,xe.median,xe.q3,ae(xe.mean),ae(xe.stdev)),ee.push(Pe.join(","))}return ee.join(`
`)+`
`}function Yt(v,W="mask_stats.csv"){const L=new Blob([v],{type:"text/csv"}),ae=URL.createObjectURL(L),oe=document.createElement("a");oe.href=ae,oe.download=W,document.body.appendChild(oe),oe.click(),oe.remove(),URL.revokeObjectURL(ae)}function Bt(v,W=null){Yt(Qt(v,W),"mask_stats.csv")}const _t=v=>{const W=v/1e3;return W>=10?Math.round(W).toLocaleString():W.toFixed(1)};function dt(v,W,L=null,{isCatLiteMode:ae=!1}={}){const oe=Math.max(...v.map(ne=>ne.volume_mm3)),ee=ne=>ne.colorCss?ne.colorCss:s&&s.R&&s.R[ne.label]!=null?`rgb(${s.R[ne.label]},${s.G[ne.label]},${s.B[ne.label]})`:"#6b9bd1",xe=ae||!!K();let Pe="";for(const ne of v){const he=W>0?ne.volume_mm3/W*100:0,se=oe>0?ne.volume_mm3/oe*100:0,Q=ae?f===ne.tissueIndex:m===ne.label,de=!ae&&L&&ne.label<L.length?L[ne.label]:null,ce=`<span class="stat-val" data-cm3="${_t(ne.volume_mm3)}" data-pct="${he.toFixed(1)}%">${_t(ne.volume_mm3)}</span>`,we=`<span class="stat-bar" style="width:${se.toFixed(2)}%;background:${ee(ne)}" data-w-abs="${se.toFixed(2)}" data-w-pct="${he.toFixed(2)}"></span>`,ge=(Ne,Ve)=>`<div class="stat-kv"><span class="k">${Ne}</span><span class="v">${Ve}</span></div>`,Le=ae?ge("% ICV",`${he.toFixed(1)}%`)+ge("cm³",_t(ne.volume_mm3))+ge("mean",ne.mean.toFixed(2))+ge("SD",ne.stdev.toFixed(2))+ge("min",ne.min)+ge("max",ne.max)+ge("equiv. vox",Math.round(ne.effectiveVoxels).toLocaleString())+ge("support",ne.supportVoxels.toLocaleString()):ge("min",ne.min)+ge("max",ne.max)+ge("Q1",ne.q1)+ge("Q3",ne.q3)+ge("median",ne.median)+ge("mean",ne.mean.toFixed(2))+ge("SD",ne.stdev.toFixed(2))+ge("voxels",ne.voxels.toLocaleString()),Ie=ae?`<span class="stat-id-chip">${Rt(ne.tissueKey.toUpperCase())}</span>`:`<span class="stat-id-chip">ID ${ne.label}</span>`,Ze=xe?`<button type="button" class="stat-iso${Q?" active":""}" aria-pressed="${Q}" aria-label="${Q?"Isolated":"Isolate"} ${Rt(ne.name)}">${Q?"isolated":"isolate"}</button>`:"";Pe+=`
        <div class="stat-row${Q?" is-isolated":""}" data-label="${ne.label}" data-name="${Rt(ne.name.toLowerCase())}">
          <div class="stat-line">
            <button type="button" class="stat-trigger" aria-expanded="false">
              <span class="stat-chevron" aria-hidden="true"></span>
              <span class="stat-swatch" style="background:${ee(ne)}" aria-hidden="true"></span>
              <span class="stat-name">${Rt(ne.name)}</span>
              <span class="stat-track" aria-hidden="true">${we}</span>
              ${ce}
            </button>
            <span class="stat-actions">
              <button type="button" class="stat-locate" aria-label="Locate ${Rt(ne.name)}" title="Jump crosshair to ${Rt(ne.name)}">${Zt}</button>
              ${Ze}
            </span>
          </div>
          <div class="stat-detail" hidden>
            <div class="stat-detail-meta">
              <span class="stat-detail-fullname">${Rt(ne.name)}</span>
              <span class="stat-detail-badges">
                ${Ie}
                ${de?`<span class="save-badge">FS ${de}</span>`:""}
              </span>
            </div>
            <div class="stat-detail-grid">${Le}</div>
          </div>
        </div>`}const Fe=ae?v.length===1?"tissue":"tissues":v.length===1?"region":"regions",Oe=ae?" cm³ ICV":" cm³",je=ae?"% of ICV":"% of total",qe=v.length>8?`<search class="stat-search">
           <input type="search" id="statsFilterInput" class="stat-filter" placeholder="Filter regions…" aria-label="Filter regions" autocorrect="off" autocapitalize="none" spellcheck="false">
         </search>`:"";return`
      <div id="statsPanel">
        <div class="stat-toolbar">
          <div class="stat-toggle" role="group" aria-label="Volume display unit">
            <button type="button" data-mode="cm3" class="active" aria-pressed="true">cm³</button>
            <button type="button" data-mode="pct" aria-pressed="false">${je}</button>
          </div>
          <span class="stat-total" id="statsUnitLabel">${v.length} ${Fe} &middot; ${_t(W)}${Oe}</span>
          ${qe}
        </div>
        <div id="statsRows">
          ${Pe}
          <p id="statsEmpty" class="stat-empty" hidden>No matching regions</p>
        </div>
        <div class="stat-footer">
          <span class="stat-footer-hint">Select a row for stats &middot; Crosshair jumps &middot; Isolate solos in 3D</span>
          <button type="button" id="statsDownloadBtn" class="stat-csv-btn">
            ${tt.arrow}
            <span>Download CSV</span>
          </button>
        </div>
      </div>`}saveStatsBtn.onclick=function(){if(ue.volumes.length<2){Nt("Region volumes","<p>No segmentation to measure — run a model first.</p>");return}const v=ue.volumes[0].img,W=ue.volumes[0].hdr.pixDims||[],L=W[1]&&W[2]&&W[3]?W[1]*W[2]*W[3]:1,ae=Y();let oe,ee,xe=null,Pe=!1,Fe=null;const Oe=ue.volumes[1];if(ae){Pe=!0;const ge=ue.volumes[0].hdr.dims.slice(1,4),Le=Lo(v,ae.maps,L,ge,ae.modelEntry);if(oe=Le.rows,ee=Le.icvMm3,oe.length===0){Nt("Tissue volumes","<p>No non-zero tissue fractions found.</p>");return}oe=oe.slice().sort((Ie,Ze)=>Ze.volume_mm3-Ie.volume_mm3)}else if(Oe.img instanceof Float32Array){Nt("Region volumes","<p>Region statistics require a discrete label segmentation or CAT-lite GM/WM/CSF tissue maps.</p>");return}else{if(Fe=Oe.img,!v||!Fe||v.length!==Fe.length){Nt("Region volumes","<p>Input and segmentation grids do not match.</p>");return}const ge=Oe.hdr.dims.slice(1,4);if(oe=Kt(v,Fe,L,ge),oe.length===0){Nt("Region volumes","<p>No non-background labels found in the segmentation.</p>");return}oe=oe.slice().sort((Le,Ie)=>Ie.volume_mm3-Le.volume_mm3),ee=oe.reduce((Le,Ie)=>Le+Ie.volume_mm3,0),xe=o&&o.type!=="Brain_Extraction"?Qn(n):null}const je=new Map(oe.map(ge=>[ge.label,ge]));Nt(Pe?"Tissue volumes":"Region volumes",dt(oe,ee,xe,{isCatLiteMode:Pe}),{hideClose:!0,statsMode:!0});const ne=document.getElementById("statsPanel");if(!ne)return;let he="cm3",se=oe.length;const Q=Pe?oe.length===1?"tissue":"tissues":oe.length===1?"region":"regions",de=()=>{const ge=document.getElementById("statsUnitLabel");if(!ge)return;const Le=se===oe.length?`${oe.length} ${Q}`:`${se} of ${oe.length} ${Q}`,Ie=he==="pct"?Pe?"100% of ICV":"100% of volume":`${_t(ee)}${Pe?" cm³ ICV":" cm³"}`;ge.innerHTML=`${Le} &middot; ${Ie}`};ne.querySelectorAll(".stat-toggle button").forEach(ge=>{ge.onclick=()=>{he=ge.dataset.mode,ne.querySelectorAll(".stat-toggle button").forEach(Le=>{const Ie=Le===ge;Le.classList.toggle("active",Ie),Le.setAttribute("aria-pressed",String(Ie))}),de(),ne.querySelectorAll(".stat-row").forEach(Le=>{const Ie=Le.querySelector(".stat-val"),Ze=Le.querySelector(".stat-bar");Ie.textContent=he==="pct"?Ie.dataset.pct:Ie.dataset.cm3,Ze.style.width=(he==="pct"?Ze.dataset.wPct:Ze.dataset.wAbs)+"%"})}});const ce=document.getElementById("statsFilterInput"),we=document.getElementById("statsEmpty");if(ce){const ge=()=>{const Le=ce.value.trim().toLowerCase();se=0,ne.querySelectorAll(".stat-row").forEach(Ie=>{const Ze=!Le||Ie.dataset.name.includes(Le)||Ie.dataset.label===Le;Ie.hidden=!Ze,Ze&&se++}),we&&(we.hidden=se>0),de()};ce.oninput=ge,ce.addEventListener("keydown",Le=>{Le.key==="Escape"&&ce.value!==""&&(Le.preventDefault(),Le.stopPropagation(),ce.value="",ge())})}ne.querySelectorAll(".stat-trigger").forEach(ge=>{ge.onclick=()=>{const Le=ge.closest(".stat-row"),Ie=Le.querySelector(".stat-detail"),Ze=Ie.hidden;Ie.hidden=!Ze,Le.classList.toggle("is-expanded",Ze),ge.setAttribute("aria-expanded",String(Ze))}}),ne.querySelectorAll(".stat-locate").forEach(ge=>{ge.onclick=()=>{const Le=parseInt(ge.closest(".stat-row").dataset.label,10),Ie=je.get(Le);Ie&&St(Ie,{vol:Pe?ue.volumes[0]:Oe,labelArr:Pe?null:Fe,probMap:Pe?ae.maps[Ie.tissueIndex]:null});const Ze=document.getElementById("appDialog");Ze&&Ze.open&&Ze.close()}}),ne.querySelectorAll(".stat-iso").forEach(ge=>{ge.onclick=()=>{const Le=parseInt(ge.closest(".stat-row").dataset.label,10);Number.isNaN(Le)||(Pe?ie(Le):re(Le));const Ie=document.getElementById("appDialog");Ie&&Ie.open&&Ie.close()}}),document.getElementById("statsDownloadBtn").onclick=()=>{Pe?Yt(ml(oe,ee),"tissue_stats.csv"):Bt(oe,xe)}};function Ct(){ue.volumes.length<=1&&(M=ue.volumes[0]||null,$=M&&M.name?M.name:"input.nii.gz",o=null,a=null,c(null),j(),modelSelect.value="-1",i(),ue.volumes[0]&&opacitySlider0.oninput())}const Mt=new Map;function rn(v){return Me(this,null,function*(){if(Mt.has(v))return Mt.get(v);const L=yield(yield fetch(v)).json();return Mt.set(v,L),L})}function an(v,W,L=1){let ae=0;for(let oe=0;oe<256;oe++)v[oe]>0&&ae++;return(!W||ae!==W.length)&&(t="Failed to Predict Some Labels - "),W.map((oe,ee)=>{const xe=ee<256?v[ee]:0,Pe=xe>0?`${_t(xe*L)} cm3`:"Missing";return Pe==="Missing"&&(t+=`${oe}, `),`${oe}   ${Pe}`})}function Gt(v,W,L){return Me(this,null,function*(){var Oe,je;const ae=(Oe=W.probabilityDisplayMin)!=null?Oe:.005,{probabilityOverlayAlpha:oe=96,probabilityOverlayFloor:ee=192}=W,xe=(L==null?void 0:L.tint)||[255,255,255],Pe=`probability-light-${xe.join("-")}-${ee}-${oe}`;if(!ue.hasColormap(Pe)){const[qe,ne,he]=xe.map(se=>Math.round(se*ee/255));ue.addColormap(Pe,{R:[qe,xe[0]],G:[ne,xe[1]],B:[he,xe[2]],A:[0,oe],I:[0,255]})}const Fe=Dn(ue.volumes[0],v instanceof Float32Array?v:Float32Array.from(v),(je=L==null?void 0:L.name)!=null?je:ue.volumes[0].name,{scl_inter:0,scl_slope:1,datatypeCode:16,numBitsPerVoxel:32,cal_min:0,cal_max:1,intent_code:1001},{calMin:ae,calMax:1,robustMin:ae,robustMax:1,globalMin:0,globalMax:1,colormapType:1,colormap:Pe,opacity:Number(opacitySlider1.value),modulateAlpha:1});return Fe.modulationImage=Fe.id,yield ue.model.addVolume(Fe),ue.volumes.at(-1)})}function Jt(v,W,L,ae){return Me(this,null,function*(){var qe,ne,he;if(F(),Z(),n=null,s=null,o=L,a=L.type==="Brain_Extraction"&&ae||null,c(L),L.outputType==="probability"){const se=Array.isArray(v)?v:[v];if(L.probabilityPostprocess==="cat-lite"&&se.length===3){const Q=ue.volumes[0],de=se.map(Ve=>Ve instanceof Float32Array?Ve:Float32Array.from(Ve)),ce=Number(opacitySlider1.value),we=Q.dimsRAS&&Q.img2RASstart&&Q.img2RASstep?{dimsRAS:[...Q.dimsRAS],img2RASstart:[...Q.img2RASstart],img2RASstep:[...Q.img2RASstep]}:null,ge=Fo(de,L,null,ce,we),Le=ge.isRasOrdered?{dims:[...we.dimsRAS],permRAS:[1,2,3],img2RASstart:[0,0,0],img2RASstep:[1,we.dimsRAS[1],we.dimsRAS[1]*we.dimsRAS[2]]}:{},Ie=ge.isRasOrdered?at({dims:[3,we.dimsRAS[1],we.dimsRAS[2],we.dimsRAS[3],1,1,1,1]},Q.matRAS&&Q.matRAS.length>=16?{affine:[[Q.matRAS[0],Q.matRAS[4],Q.matRAS[8],Q.matRAS[12]],[Q.matRAS[1],Q.matRAS[5],Q.matRAS[9],Q.matRAS[13]],[Q.matRAS[2],Q.matRAS[6],Q.matRAS[10],Q.matRAS[14]],[Q.matRAS[3],Q.matRAS[7],Q.matRAS[11],Q.matRAS[15]]]}:{}):{},Ze=Dn(Q,ge.rgba,"cat_lite_tissues",vt(at({},Ie),{scl_inter:0,scl_slope:1,datatypeCode:2304,numBitsPerVoxel:32,cal_min:0,cal_max:255,intent_code:1001}),vt(at({},Le),{calMin:0,calMax:255,robustMin:0,robustMax:255,globalMin:0,globalMax:255,opacity:ce}));yield ue.model.addVolume(Ze);const Ne=ue.volumes.at(-1);p={maps:de,tissues:ge.tissues,modelEntry:L,rasLayout:ge.isRasOrdered?we:null,rgba:ge.rgba,activeAlphaOffsets:ge.activeAlphaOffsets,activeBaseAlpha:ge.activeBaseAlpha,overlay:Ne}}else for(let Q=0;Q<se.length;Q++)yield Gt(se[Q],L,(qe=L.probabilityTissues)==null?void 0:qe[Q]);j(L),X=Number(opacitySlider1.value),yield ue.updateGLVolume();return}const oe=v instanceof Uint8Array?v:new Uint8Array(v.buffer,v.byteOffset||0,v.byteLength);let ee,xe=null,Pe=0,Fe={calMin:0,calMax:255,robustMin:0,robustMax:255,globalMin:0,globalMax:255};if(L.type==="Brain_Masking"){const se=["Background","Brain Mask"];n=se.slice();const Q=[0,217],de=[0,119],ce=[0,33];s={R:Q,G:de,B:ce};const we={R:Q,G:de,B:ce,labels:se},ge="brainchop-label-mask";ue.addColormap(ge,we),ee=ge,xe=io(we),Pe=1002,Fe={calMin:0,calMax:1,robustMin:0,robustMax:1,globalMin:0,globalMax:1}}else if(L.colormapPath){const se=Ss(oe),Q=yield rn(L.colormapPath);n=Q.labels?Q.labels.slice():null,s={R:Q.R,G:Q.G,B:Q.B};const de=ue.volumes[0].hdr.pixDims||[],ce=de[1]&&de[2]&&de[3]?de[1]*de[2]*de[3]:1,we=Q.labels?an(se,Q.labels,ce):[],ge=vt(at(at({R:Q.R,G:Q.G,B:Q.B},Q.I?{I:Q.I}:{}),Q.A?{A:Q.A}:{}),{labels:we}),Le=`brainchop-label-${L.id}`;ue.addColormap(Le,ge),ee=Le,xe=io(ge);const Ie=Math.max(1,((he=(ne=Q.R)==null?void 0:ne.length)!=null?he:256)-1);Pe=1002,Fe={calMin:0,calMax:Ie,robustMin:0,robustMax:Ie,globalMin:0,globalMax:Ie}}else{const se=Ss(oe);Fe=gl(se),ee=W.atlasSelectedColorTable.toLowerCase(),L.type==="Brain_Extraction"&&(ee="copper2"),ue.hasColormap(ee)||(ee="actc")}const Oe=Dn(ue.volumes[0],oe,ue.volumes[0].name,{datatypeCode:2,numBitsPerVoxel:8,scl_inter:0,scl_slope:1,cal_min:Fe.calMin,cal_max:Fe.calMax,intent_code:Pe},vt(at(vt(at({},Fe),{colormap:ee}),xe?{colormapLabel:xe}:{}),{opacity:Number(opacitySlider1.value)}));yield ue.model.addVolume(Oe);const je=ue.volumes.at(-1);xe&&je&&!je.colormapLabel&&(je.colormapLabel=xe),d=xe?je.colormapLabel:null,j(L),X=Number(opacitySlider1.value),yield ue.updateGLVolume()})}function kt(v){return Me(this,null,function*(){var W;if(typeof v=="string")try{v=JSON.parse(v)}catch(L){console.error("Failed to parse telemetry data",L);return}v=yield Zi(v,(W=ue.view)==null?void 0:W.gl),e=`:: Diagnostics https://github.com/neuroneural/brainchop/issues ::
`;for(const L in v)v[L]!==null&&v[L]!==void 0&&(e+=`${L}: ${v[L]}
`)})}function Ft(v){const W=String(v).split(" · ").map(L=>L.trim()).filter(L=>L!=="");return W.length<=1?Rt(String(v)):W.map((L,ae)=>`<span class="loc-seg"${ae>=2?' style="opacity:.75"':""}>${Rt(L)}</span>`).join('<span class="loc-sep">&middot;</span>')}function ot(v="",W=-1,L="",ae=[]){if(v){console.log(v);const oe=document.getElementById("location");oe&&(oe.innerHTML=Ft(v))}if(isNaN(W)){modelProgress.classList.remove("is-busy");const oe=document.getElementById("memstatusItem");oe&&(oe.hidden=!1),memstatus.style.color="#ef4444",memstatus.textContent="Memory Issue"}else W>=0&&(modelProgress.value=W*modelProgress.max,modelProgress.classList.toggle("is-busy",W>0&&W<1));L&&(ts?(cn.push(String(L)),console.warn("[backend]",L)):Nt("Message",Rt(String(L)).replace(/\n/g,"<br>"))),ae&&Object.keys(ae).length>0&&kt(ae)}function Ht(v){x=v.vox;const W=v.string.split("   ").map(xe=>xe.trim()).filter(xe=>xe!=="");let L="";const ae=Y(),oe=ue.volumes[0];if(ae&&oe&&x){W.length>1&&W.pop();const xe=Jn(oe,x);if(xe!==null){const Pe=ae.maps[0][xe]||0,Fe=ae.maps[1][xe]||0,Oe=ae.maps[2][xe]||0;Pe+Fe+Oe>=.005&&(L=`<span class="loc-seg loc-tissues"><span class="loc-k">GM</span> <span class="loc-v">${Pe.toFixed(2)}</span> <span class="loc-k">WM</span> <span class="loc-v">${Fe.toFixed(2)}</span> <span class="loc-k">CSF</span> <span class="loc-v">${Oe.toFixed(2)}</span></span>`)}}const ee=W.map(xe=>`<span class="loc-seg">${Rt(xe)}</span>`);L&&ee.push(L),document.getElementById("location").innerHTML=ee.join('<span class="loc-sep">&middot;</span>')}const ut=new URLSearchParams(window.location.search).get("viewer")==="webgpu"?"webgpu":"webgl2",ue=new Br({backend:ut,matcaps:{Shiny:Fr}});yield ue.attachTo("gl1"),console.info("NiiVue viewer backend:",ue.backend),ue.backgroundColor=[0,0,0,1],ue.is3DCrosshairVisible=!0,ue.clipPlaneColor=[.7,0,.7,.5],ue.gamma=1,ue.volumeTransforms.includes(uo.name)||ue.registerVolumeTransform(uo),ue.isLegendVisible=!1,ue.addEventListener("locationChange",v=>Ht(v.detail)),ue.canvas.addEventListener("click",J),window.addEventListener("keydown",v=>{v.key==="Escape"&&(document.querySelector("dialog[open]")||(m!==null?(m=null,ve()):f!==null&&(f=null,V())))});const bt=ue.drawScene.bind(ue);ue.drawScene=function(v){const W=bt(v);try{I(),me()}catch(L){console.warn("isolation HUD draw failed",L)}return W},window.addEventListener("resize",me),ue.primaryDragMode=ao.crosshair,ue.secondaryDragMode=ao.slicer3D,ue.showRender=Lr.ALWAYS,ue.isYoked3DTo2DZoom=!1,ue.crosshairGap=11;{const v=document.getElementById("dragSegmented");v&&v.querySelectorAll("button").forEach(W=>W.classList.toggle("active",parseInt(W.dataset.drag,10)===ue.secondaryDragMode))}ue.volumeIsNearestInterpolation=!0,yield ue.loadVolumes([{url:"./t1_crop.nii.gz"}]);const zt=$s((Je=ue.view)==null?void 0:Je.gl);modelSelect.innerHTML="";const wt=document.createElement("option");wt.text="Run Segmentation Model",wt.value="-1",wt.disabled=!0,wt.selected=!0,wt.hidden=!0,modelSelect.appendChild(wt);for(let v=0;v<Sn.length;v++){console.log(`Adding model option: ${Sn[v].modelName}`);const W=document.createElement("option");W.text=Sn[v].modelName,W.value=v,Sn[v].type==="Divider"&&(W.disabled=!0),modelSelect.appendChild(W)}ue.addEventListener("volumeLoaded",Ct),Ct(),cl(ue),rl(ue),modelSelect.value="-1",i(),P(-1),yield zt;const ze=new URLSearchParams(window.location.search).get("model");ze!==null&&ze!==""&&Number(ze)>=0&&Number(ze)<Sn.length?(modelSelect.value=String(Number(ze)),i(),G()):on&&!Gs&&qt&&(window.requestIdleCallback?W=>window.requestIdleCallback(W,{timeout:600}):W=>setTimeout(W,200))(()=>Ri(qt))})}function Rt(e){return String(e).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function hl(e){const n=(cn.length?cn:[e&&e.message?e.message:String(e||"unknown error")]).map(s=>`<li>${Rt(s)}</li>`).join("");Nt("Segmentation failed",`<p>No available backend could run this model on this device.</p>
     <ul style="margin:0 0 4px 1.1em;padding:0;font-size:0.92em;line-height:1.45">${n}</ul>
     <p style="font-size:0.88em;color:#9aa4af">Full details are in the browser console and under Diagnostics.</p>`)}function Nt(e,t,n={}){const s=document.getElementById("appDialog"),o=document.getElementById("dialogTitle"),a=document.getElementById("dialogMessage"),r=document.getElementById("dialogCloseBtn");if(!s)return;o.textContent=e,a.innerHTML=t,r.style.display=n.hideClose?"none":"",r.onclick=()=>s.close(),s.classList.toggle("dialog-save",!!n.saveMode),s.classList.toggle("dialog-stats",!!n.statsMode);const i=document.getElementById("dialogXBtn");i&&(i.onclick=()=>s.close()),s.showModal()}const Ro="brainchop:gh-stars:v1",wl=360*60*1e3;function vl(){return Me(this,null,function*(){var n,s;const e=document.getElementById("star-count");if(!e)return;let t=null;try{const o=(n=window.localStorage)==null?void 0:n.getItem(Ro);if(o){const a=JSON.parse(o);a&&typeof a.count=="number"&&Number.isFinite(a.count)&&(t=a,e.textContent=String(a.count))}}catch(o){}if(!(t&&typeof t.ts=="number"&&Date.now()-t.ts<wl))try{const o=yield fetch("https://api.github.com/repos/neuroneural/brainchop");if(!o.ok)return;const a=yield o.json();if(typeof(a==null?void 0:a.stargazers_count)=="number"&&Number.isFinite(a.stargazers_count)){e.textContent=String(a.stargazers_count);try{(s=window.localStorage)==null||s.setItem(Ro,JSON.stringify({count:a.stargazers_count,ts:Date.now()}))}catch(r){}}}catch(o){console.error("Error fetching star count:",o)}})}(function(){return Me(this,null,function*(){if(yield bl(),yield vl(),"serviceWorker"in navigator){const e=()=>{navigator.serviceWorker.register("./sw.js",{scope:"./"}).catch(t=>{console.warn("[PWA] Service Worker registration failed:",t)})};document.readyState==="complete"?e():window.addEventListener("load",e,{once:!0})}})})();
