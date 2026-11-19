var Xo=Object.defineProperty,jo=Object.defineProperties;var Yo=Object.getOwnPropertyDescriptors;var Tn=Object.getOwnPropertySymbols;var Bs=Object.prototype.hasOwnProperty,Fs=Object.prototype.propertyIsEnumerable;var Ot=Math.pow,Cs=(e,t,n)=>t in e?Xo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,it=(e,t)=>{for(var n in t||(t={}))Bs.call(t,n)&&Cs(e,n,t[n]);if(Tn)for(var n of Tn(t))Fs.call(t,n)&&Cs(e,n,t[n]);return e},xt=(e,t)=>jo(e,Yo(t));var Ls=(e,t)=>{var n={};for(var s in e)Bs.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&Tn)for(var s of Tn(e))t.indexOf(s)<0&&Fs.call(e,s)&&(n[s]=e[s]);return n};var Ce=(e,t,n)=>new Promise((s,o)=>{var a=f=>{try{i(n.next(f))}catch(l){o(l)}},r=f=>{try{i(n.throw(f))}catch(l){o(l)}},i=f=>f.done?s(f.value):Promise.resolve(f.value).then(a,r);i((n=n.apply(e,t)).next())});import{z as Wn,$ as Ko,t as Zo,L as Us,Y as Qo,M as Ws,a as Jo,_ as er}from"./vendor-niivue-Cvdr5q4M.js";import{l as tr,n as nr,p as sr}from"./vendor-math-oqRZD8Fx.js";import"./vendor-FBY2Vxgc.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();const or="modulepreload",rr=function(e,t){return new URL(e,t).href},qs={},fn=function(t,n,s){let o=Promise.resolve();if(n&&n.length>0){let l=function(u){return Promise.all(u.map(d=>Promise.resolve(d).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};const r=document.getElementsByTagName("link"),i=document.querySelector("meta[property=csp-nonce]"),f=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));o=l(n.map(u=>{if(u=rr(u,s),u in qs)return;qs[u]=!0;const d=u.endsWith(".css"),g=d?'[rel="stylesheet"]':"";if(s)for(let p=r.length-1;p>=0;p--){const m=r[p];if(m.href===u&&(!d||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${g}`))return;const c=document.createElement("link");if(c.rel=d?"stylesheet":or,d||(c.as="script"),c.crossOrigin="",c.href=u,f&&c.setAttribute("nonce",f),document.head.appendChild(c),d)return new Promise((p,m)=>{c.addEventListener("load",p),c.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${u}`)))})}))}function a(r){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=r,window.dispatchEvent(i),!i.defaultPrevented)throw r}return o.then(r=>{for(const i of r||[])i.status==="rejected"&&a(i.reason);return t().catch(a)})};function ar(e){return new Worker(""+new URL("conform-worker-CLIpQIO-.js",import.meta.url).href,{name:e==null?void 0:e.name})}const yt=256,Nn=yt*yt*yt;function ir(e,t){if(!(e instanceof ArrayBuffer))return e;switch(t){case 2:return new Uint8Array(e);case 4:return new Int16Array(e);case 8:return new Int32Array(e);case 16:return new Float32Array(e);case 64:return new Float64Array(e);case 256:return new Int8Array(e);case 512:return new Uint16Array(e);case 768:return new Uint32Array(e);case 1024:return new BigInt64Array(e);case 1280:return new BigUint64Array(e);default:return new Float32Array(e)}}function lr(e){return e[0]*(e[5]*e[10]-e[6]*e[9])-e[1]*(e[4]*e[10]-e[6]*e[8])+e[2]*(e[4]*e[9]-e[5]*e[8])}function ur(e){if(!e||e.length<16)return!1;for(let t=0;t<16;t++)if(!Number.isFinite(e[t]))return!1;return Math.abs(lr(e))>=1e-6}function cr(e){const t=e[0],n=e[1],s=e[2],o=e[3],a=e[4],r=e[5],i=e[6],f=e[7],l=e[8],u=e[9],d=e[10],g=e[11],c=r*d-i*u,p=-(a*d-i*l),m=a*u-r*l,h=t*c+n*p+s*m;if(!Number.isFinite(h)||Math.abs(h)<1e-12)throw new Error("Cannot conform volume: singular affine transform.");const M=1/h,_=c*M,w=-(n*d-s*u)*M,y=(n*i-s*r)*M,$=p*M,x=(t*d-s*l)*M,S=-(t*i-s*a)*M,z=m*M,v=-(t*u-n*l)*M,P=(t*r-n*a)*M,k=-(_*o+w*f+y*g),B=-($*o+x*f+S*g),C=-(z*o+v*f+P*g);return[_,w,y,k,$,x,S,B,z,v,P,C,0,0,0,1]}function fr(e,t){const n=new Array(16);for(let s=0;s<3;s++){const o=s*4,a=e[o],r=e[o+1],i=e[o+2],f=e[o+3];n[o]=a*t[0]+r*t[4]+i*t[8],n[o+1]=a*t[1]+r*t[5]+i*t[9],n[o+2]=a*t[2]+r*t[6]+i*t[10],n[o+3]=a*t[3]+r*t[7]+i*t[11]+f}return n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function pr(e,t,n,s,o=!1){const a=e*.5,r=t*.5,i=n*.5,f=s[0]*a+s[1]*r+s[2]*i+s[3],l=s[4]*a+s[5]*r+s[6]*i+s[7],u=s[8]*a+s[9]*r+s[10]*i+s[11],d=yt*.5;return o?[1,0,0,f-d,0,1,0,l-d,0,0,1,u-d,0,0,0,1]:[-1,0,0,f+d,0,0,1,l-d,0,-1,0,u+d,0,0,0,1]}function mr(e,t=.999){const n=e.length;if(n===0)return{srcMin:0,srcMax:0,scale:1,flooredNegative:!1};let s=1/0,o=-1/0,a=0,r=0;for(let m=0;m<n;m++){let h=e[m];Number.isFinite(h)||(h=0,e[m]=0),h<s&&(s=h),h>o&&(o=h),(h>=1e-15||h<=-1e-15)&&a++,h<0&&r++}let i=!1;s<0&&100*r/n<2&&(s=0,i=!0);const f=Math.fround((o-s)/1e3);if(!(f>0)){for(let m=0;m<n;m++){const h=e[m];e[m]=h<=0?0:h>=255?255:h}return{srcMin:s,srcMax:o,scale:1,flooredNegative:i}}const l=new Uint32Array(1e3);for(let m=0;m<n;m++){const h=Math.fround((e[m]-s)/f),M=h<=0?0:h>=999?999:Math.trunc(h);l[M]++}const u=Math.max(0,Math.min(1,1-t)),d=n-Math.floor(u*a);let g=0,c=0;for(;c<999&&(g+=l[c],!(g+l[c+1]>=d));c++);o=Math.fround(c*f+s);const p=s!==o?Math.fround(255/(o-s)):1;for(let m=0;m<n;m++){const h=p*(e[m]-s);e[m]=h<=0?0:h>=255?255:h}return{srcMin:s,srcMax:o,scale:p,flooredNegative:i}}function dr({img:e,datatypeCode:t,dims:n,affine:s,sclSlope:o=1,sclInter:a=0,toRAS:r=!1,isLinear:i=!0,asFloat32:f=!1,fHigh:l=.999}){const u=n[1]|0,d=n[2]|0,g=n[3]|0;if(u<1||d<1||g<1)throw new Error(`Invalid input volume dimensions: [${u}, ${d}, ${g}]`);const c=Array.isArray(s[0])?s.flat():Array.from(s);if(!ur(c))throw new Error("Cannot conform volume: invalid or singular affine matrix.");const p=ir(e,t),m=u*d*g;if(!p||p.length<m)throw new Error(`Input buffer length (${p?p.length:0}) is smaller than ${u}x${d}x${g}`);const h=Number.isFinite(o)&&o!==0?o:1,M=Number.isFinite(a)?a:0,_=new Float32Array(m),w=p instanceof BigInt64Array||p instanceof BigUint64Array;let y=0;if(w)for(let P=0;P<m;P++){const k=Number(p[P])*h+M;Number.isFinite(k)?(_[P]=k,y++):_[P]=0}else if(h===1&&M===0)for(let P=0;P<m;P++){const k=p[P];Number.isFinite(k)?(_[P]=k,y++):_[P]=0}else for(let P=0;P<m;P++){const k=p[P]*h+M;Number.isFinite(k)?(_[P]=k,y++):_[P]=0}if(y===0)throw new Error("Input volume contains no finite voxel values.");mr(_,l);const $=pr(u,d,g,c,r),x=cr(c),S=fr(x,$);let z=u===yt&&d===yt&&g===yt;for(let P=0;P<3&&z;P++){const k=P*4;let B=Math.abs(S[k+3]);for(let C=0;C<3;C++)B+=Math.abs(S[k+C]-(P===C?1:0))*(yt-1);z=B<.001}const v=f?new Float32Array(Nn):new Uint8Array(Nn);if(z)if(f)for(let P=0;P<Nn;P++)v[P]=_[P]*(1/255);else for(let P=0;P<Nn;P++){const k=_[P];v[P]=k<=0?0:k>=255?255:Math.round(k)}else{let P=_[0];for(let be=1;be<m;be++)_[be]<P&&(P=_[be]);P!==0&&v.fill(f?P*(1/255):Math.min(255,Math.max(0,Math.round(P))));const k=S[0],B=S[1],C=S[2],N=S[3],j=S[4],Y=S[5],W=S[6],D=S[7],O=S[8],Z=S[9],J=S[10],F=S[11],V=u*d,K=u-1,q=d-1,ce=g-1,pe=1/255;let ye=0;if(i)for(let be=0;be<yt;be++){const we=be*C+N,ee=be*W+D,le=be*J+F;for(let A=0;A<yt;A++){const ae=A*B+we,R=A*Y+ee,fe=A*Z+le;for(let re=0;re<yt;re++,ye++){const ne=re*k+ae,Q=re*j+R,se=re*O+fe,G=Math.floor(ne),Se=Math.floor(Q),_e=Math.floor(se);if(G<0||Se<0||_e<0||G>=K||Se>=q||_e>=ce)continue;const Be=ne-G,ze=Q-Se,Ge=se-_e,We=1-Be,Xe=1-ze,Oe=1-Ge,Le=G+Se*u+_e*V,Ae=_[Le]*We+_[Le+1]*Be,Ve=_[Le+u]*We+_[Le+u+1]*Be,at=_[Le+V]*We+_[Le+V+1]*Be,tt=_[Le+u+V]*We+_[Le+u+V+1]*Be,st=(Ae*Xe+Ve*ze)*Oe+(at*Xe+tt*ze)*Ge;if(f)v[ye]=st<=0?0:st>=255?1:st*pe;else{const Mt=Math.fround(st);v[ye]=Mt<=0?0:Mt>=255?255:Math.floor(Mt+.5)}}}}else for(let be=0;be<yt;be++){const we=be*C+N,ee=be*W+D,le=be*J+F;for(let A=0;A<yt;A++){const ae=A*B+we,R=A*Y+ee,fe=A*Z+le;for(let re=0;re<yt;re++,ye++){const ne=Math.round(re*k+ae),Q=Math.round(re*j+R),se=Math.round(re*O+fe);if(ne<0||Q<0||se<0||ne>=u||Q>=d||se>=g)continue;const G=_[ne+Q*u+se*V];f?v[ye]=G<=0?0:G>=255?1:G*pe:v[ye]=G<=0?0:G>=255?255:Math.floor(G+.5)}}}}return{img:v,dims:[3,yt,yt,yt,1,1,1,1],pixDims:[1,1,1,1,1,0,0,0],affine:$,datatypeCode:f?16:2,bitsPerVoxel:f?32:8,sclSlope:1,sclInter:0,calMin:0,calMax:0}}let An=null,gr=1;const Cn=new Map;function _r(e){An&&(An.terminate(),An=null);for(const{reject:t}of Cn.values())t(e);Cn.clear()}function br(){if(An)return An;const e=new ar({});return e.onmessage=t=>{const{id:n,result:s,error:o}=t.data,a=Cn.get(n);a&&(Cn.delete(n),o?a.reject(new Error(o)):a.resolve(s))},e.onerror=t=>{const n=(t==null?void 0:t.message)||"Conform worker crashed";_r(new Error(n))},An=e,e}function hr(e){return typeof Worker=="undefined"?Promise.resolve(dr(e)):new Promise((t,n)=>{const s=gr++;Cn.set(s,{resolve:t,reject:n});try{br().postMessage({id:s,payload:e})}catch(o){Cn.delete(s),n(o)}})}function wr(e,t){const n=Object.assign(Object.create(Object.getPrototypeOf(e)||Object.prototype),JSON.parse(JSON.stringify(e)));return n.datatypeCode=t.datatypeCode,n.numBitsPerVoxel=t.bitsPerVoxel,n.scl_slope=t.sclSlope,n.scl_inter=t.sclInter,n.cal_min=t.calMin,n.cal_max=t.calMax,n.dims=t.dims,n.pixDims=t.pixDims,n.affine=[[t.affine[0],t.affine[1],t.affine[2],t.affine[3]],[t.affine[4],t.affine[5],t.affine[6],t.affine[7]],[t.affine[8],t.affine[9],t.affine[10],t.affine[11]],[0,0,0,1]],n.sform_code=1,n.qform_code=0,n}const Rs={name:"conform",description:"Reslice to 256×256×256 isotropic 1 mm volume with negative-ringing floor and 0–99.9% intensity scaling",options:[{name:"toRAS",type:"checkbox",label:"Output RAS orientation",default:!1},{name:"isLinear",type:"checkbox",label:"Linear interpolation",default:!0},{name:"asFloat32",type:"checkbox",label:"Output as Float32",default:!1}],apply(s,o){return Ce(this,arguments,function*(e,t,n={}){var i,f,l,u;const a={img:t,datatypeCode:e.datatypeCode,dims:[...e.dims],affine:Array.isArray(e.affine[0])?e.affine.flat():[...e.affine],sclSlope:e.scl_slope||1,sclInter:e.scl_inter||0,toRAS:(i=n.toRAS)!=null?i:!1,isLinear:(f=n.isLinear)!=null?f:!0,asFloat32:(l=n.asFloat32)!=null?l:!1,fHigh:(u=n.fHigh)!=null?u:.999},r=yield hr(a);return{hdr:wr(e,r),img:r.img}})}},_n=new WeakMap;class vr{getLabelMeta(t){return _n.get(t)||null}idx(t,n,s,o){return s*o[0]*o[1]+n*o[0]+t}check_previous_slice(t,n,s,o,a,r,i,f,l,u){let d=0;if(!a)return 0;const g=t[this.idx(s,o,a,r)];if(i>=6){const c=this.idx(s,o,a-1,r);g===t[c]&&(l[d++]=n[c])}if(i>=18){if(s){const c=this.idx(s-1,o,a-1,r);g===t[c]&&(l[d++]=n[c])}if(o){const c=this.idx(s,o-1,a-1,r);g===t[c]&&(l[d++]=n[c])}if(s<r[0]-1){const c=this.idx(s+1,o,a-1,r);g===t[c]&&(l[d++]=n[c])}if(o<r[1]-1){const c=this.idx(s,o+1,a-1,r);g===t[c]&&(l[d++]=n[c])}}if(i===26){if(s&&o){const c=this.idx(s-1,o-1,a-1,r);g===t[c]&&(l[d++]=n[c])}if(s<r[0]-1&&o){const c=this.idx(s+1,o-1,a-1,r);g===t[c]&&(l[d++]=n[c])}if(s&&o<r[1]-1){const c=this.idx(s-1,o+1,a-1,r);g===t[c]&&(l[d++]=n[c])}if(s<r[0]-1&&o<r[1]-1){const c=this.idx(s+1,o+1,a-1,r);g===t[c]&&(l[d++]=n[c])}}return d?(this.fill_tratab(f,l,d,u),l[0]):0}do_initial_labelling(t,n,s,o=null){const a=n[0]|0,r=n[1]|0,i=n[2]|0,f=a*r,l=f*i;let u=1;const d=8192;let g=d,c=new Uint32Array(g),p;if(s===6&&o&&o.il&&o.il.length===l){if(p=o.il,o.dirty)p.fill(0);else if(o.runs&&o.runLen>0){const _=o.runs,w=o.runLen;for(let y=0;y<w;y+=2)p.fill(0,_[y],_[y+1])}}else p=new Uint32Array(l),s===6&&o&&(o.il=p,o.runs=null,o.runLen=0,o.dirty=!1);if(s===6){o&&(o.dirty=!0);const _=(t instanceof Uint8Array||t instanceof Uint8ClampedArray)&&(t.byteOffset&3)===0&&(a&3)===0&&t.length>=l?new Uint32Array(t.buffer,t.byteOffset,l>>2):null;let w=o&&o.runs?o.runs:new Uint32Array(8192),y=w.length,$=0,x=0,S=0,z=0,v=-1,P=-1,k=i,B=-1;for(let C=0;C<i;C++){const N=C*f;for(let j=0;j<r;j++){const Y=N+j*a;let W=0;if(_){const O=Y+a>>2;let Z=Y>>2;for(;Z<O&&_[Z]===0;)Z++;if(Z===O)continue;W=(Z<<2)-Y}let D=!1;for(;W<a;W++){const O=Y+W;if(_&&!D&&(W&3)===0&&_[O>>2]===0){W+=3;continue}const Z=t[O];if(Z===0){D&&(w[$++]=O,D=!1);continue}if(!D){if($+2>y){y<<=1;const F=new Uint32Array(y);F.set(w),w=F}w[$++]=O,D=!0}v<0&&(v=O,k=C),P=O,B=C;let J=0;if(C>0&&t[O-f]===Z&&(x=p[O-f],J=1),W>0&&t[O-1]===Z){const F=p[O-1];J===0?x=F:J===1?S=F:z=F,J++}if(j>0&&t[O-a]===Z){const F=p[O-a];J===0?x=F:J===1?S=F:z=F,J++}if(J===0){if(p[O]=u,u>=g){g+=d;const F=new Uint32Array(g);F.set(c),c=F}c[u-1]=u,u++}else if(p[O]=x,J===2&&S!==x){let F=x;for(;c[F-1]!==F;)F=c[F-1];let V=S;for(;c[V-1]!==V;)V=c[V-1];const K=F<V?F:V;c[F-1]=K,c[V-1]=K}else if(J===3&&(S!==x||z!==x)){let F=x;for(;c[F-1]!==F;)F=c[F-1];let V=S;for(;c[V-1]!==V;)V=c[V-1];let K=z;for(;c[K-1]!==K;)K=c[K-1];let q=F<V?F:V;K<q&&(q=K),c[F-1]=q,c[V-1]=q,c[K-1]=q}}D&&(w[$++]=Y+a)}}for(let C=0;C<u-1;C++){let N=C;for(;c[N]!==N+1;)N=c[N]-1;c[C]=N+1}return o&&(o.runs=w,o.runLen=$,o.dirty=!1),this._lastInitialRange={conn:6,fgStart:v,fgEnd:P,minSl:k,maxSl:B,runs:w,runLen:$},[u-1,c,p]}const m=new Uint32Array(32),h=new Uint32Array(32),M=new Uint32Array(27);for(let _=0;_<i;_++)for(let w=0;w<r;w++)for(let y=0;y<a;y++){let $=0;const x=t[this.idx(y,w,_,n)];if(x!==0){if(M[0]=this.check_previous_slice(t,p,y,w,_,n,s,c,m,h),M[0]&&($+=1),s>=6){if(y){const S=this.idx(y-1,w,_,n);x===t[S]&&(M[$++]=p[S])}if(w){const S=this.idx(y,w-1,_,n);x===t[S]&&(M[$++]=p[S])}}if(s>=18){if(w&&y){const S=this.idx(y-1,w-1,_,n);x===t[S]&&(M[$++]=p[S])}if(w&&y<a-1){const S=this.idx(y+1,w-1,_,n);x===t[S]&&(M[$++]=p[S])}}if($)p[this.idx(y,w,_,n)]=M[0],this.fill_tratab(c,M,$,h);else{if(p[this.idx(y,w,_,n)]=u,u>=g){g+=d;const S=new Uint32Array(g);S.set(c),c=S}c[u-1]=u,u++}}}for(let _=0;_<u-1;_++){let w=_;for(;c[w]!==w+1;)w=c[w]-1;c[_]=w+1}return this._lastInitialRange=null,[u-1,c,p]}fill_tratab(t,n,s,o){let r=2147483647;for(let i=0;i<s;i++){let f=n[i];for(;t[f-1]!==f;)f=t[f-1];o[i]=f,r=Math.min(r,f)}for(let i=0;i<s;i++)t[o[i]-1]=r}translate_labels(t,n,s,o,a=null,r=null){const i=n[0]*n[1]*n[2];if(r&&(o===0||r.fgStart<0))return a&&(this._lastMeta={conn:r.conn,cl:0,fgStart:0,fgEnd:-1,minSl:0,maxSl:-1,ls2bw:new Uint32Array(1),sumls:new Uint32Array(1),distinctFgClasses:0,bw:a}),[0,t];let f=0;for(let m=0;m<o;m++)s[m]>f&&(f=s[m]);const l=new Uint32Array(f+1),u=a&&r?new Uint32Array(o+1):null,d=a&&r?new Uint32Array(o+1):null,g=r?r.fgStart:0,c=r?r.fgEnd:i-1;let p=0;if(r&&r.runs){const m=r.runs,h=r.runLen;for(let M=0;M<h;M+=2){const _=m[M],w=m[M+1];for(let y=_;y<w;y++){const $=s[t[y]-1];let x=l[$];x||(p+=1,x=p,l[$]=x,u&&(u[x]=a[y])),t[y]=x,d&&d[x]++}}}else for(let m=g;m<=c;m++){const h=t[m];if(h){const M=s[h-1];let _=l[M];_||(p+=1,_=p,l[M]=_,u&&(u[_]=a[m])),t[m]=_,d&&d[_]++}}if(a&&r){const m=u.slice(0,p+1),h=d.slice(0,p+1);let M=0;if(p>0){const _=m[1];M=1;for(let w=2;w<=p;w++)if(m[w]!==_){M=2;break}}this._lastMeta={conn:r.conn,cl:p,fgStart:r.fgStart,fgEnd:r.fgEnd,minSl:r.minSl,maxSl:r.maxSl,runs:r.runs,runLen:r.runLen,ls2bw:m,sumls:h,distinctFgClasses:M,bw:a}}return[p,t]}neighbor_winners(t,n,s,o,a=null,r=null){const i=n[0],f=n[1],l=n[2],u=i*f,d=!!(r&&a);let g=!1;for(let y=1;y<=o;y++)if(!s[y]){g=!0;break}if(!g)return d&&console.log("[relabel] 0/0 suppressed components resolved within their own class family (0 fell back to the unrestricted neighbour vote)"),new Uint32Array(o+1);const c=d?new Int32Array(o+1).fill(-1):null,p=new Map,m=(y,$)=>{let x=p.get(y);x||(x=new Map,p.set(y,x)),x.set($,(x.get($)||0)+1)},h=_n.get(t),M=h&&h.cl===o&&t.length===u*l;if(M&&h.runs){const y=h.runs,$=h.runLen;for(let x=0;x<$;x+=2){const S=y[x],z=y[x+1],v=S/u|0,P=S-v*u,k=P/i|0;let B=P-k*i;for(let C=S;C<z;C++,B++){const N=t[C];if(s[N])continue;d&&c[N]<0&&(c[N]=r(a[C]));let j;B>0&&(j=s[t[C-1]])&&m(N,j),B<i-1&&(j=s[t[C+1]])&&m(N,j),k>0&&(j=s[t[C-i]])&&m(N,j),k<f-1&&(j=s[t[C+i]])&&m(N,j),v>0&&(j=s[t[C-u]])&&m(N,j),v<l-1&&(j=s[t[C+u]])&&m(N,j)}}}else{const y=M?h.minSl:0,$=M?h.maxSl:l-1;let x=y*u;for(let S=y;S<=$;S++)for(let z=0;z<f;z++)for(let v=0;v<i;v++,x++){const P=t[x];if(P===0||s[P])continue;d&&c[P]<0&&(c[P]=r(a[x]));let k;v>0&&(k=s[t[x-1]])&&m(P,k),v<i-1&&(k=s[t[x+1]])&&m(P,k),z>0&&(k=s[t[x-i]])&&m(P,k),z<f-1&&(k=s[t[x+i]])&&m(P,k),S>0&&(k=s[t[x-u]])&&m(P,k),S<l-1&&(k=s[t[x+u]])&&m(P,k)}}const _=new Uint32Array(o+1).fill(0);let w=0;for(const[y,$]of p){const x=d?c[y]:0;let S=0,z=0;if(x>0){for(const[v,P]of $)r(v)===x&&(P>z||P===z&&(S===0||v<S))&&(z=P,S=v);S&&w++}if(!S)for(const[v,P]of $)(P>z||P===z&&(S===0||v<S))&&(z=P,S=v);_[y]=S}return d&&console.log(`[relabel] ${w}/${p.size} suppressed components resolved within their own class family (${p.size-w} fell back to the unrestricted neighbour vote)`),_}finalize_volume(t,n,s,o,a,r=null,i=null,f=!1){const l=t.length,u=a?this.neighbor_winners(t,n,s,o,r,i):null,d=u?new Uint32Array(o+1):s;let g=0;for(let _=1;_<=o;_++){let w=s[_];u&&(w||(w=u[_]),d[_]=w),w>g&&(g=w)}const c=_n.get(t),p=c&&c.cl===o&&c.ls2bw.length===o+1&&c.fgEnd<l;let m=0;if(p&&c.runs){const _=c.runs,w=c.runLen;for(let x=1;x<=o;x++)c.sumls[x]>0&&d[x]>m&&(m=d[x]);if(c.bw===r&&r instanceof Uint8Array&&g<=255){const x=new Uint8Array(o+1);let S=!1;for(let v=1;v<=o;v++)c.sumls[v]>0&&d[v]!==c.ls2bw[v]&&(x[v]=1,S=!0);const z=f?r:r.slice();if(S)for(let v=0;v<w;v+=2){const P=_[v],k=_[v+1];for(let B=P;B<k;B++){const C=t[B];x[C]&&(z[B]=d[C])}}return[m,z]}const $=r instanceof Uint8Array&&g<=255?new Uint8Array(l):new Uint32Array(l);for(let x=0;x<w;x+=2){const S=_[x],z=_[x+1];for(let v=S;v<z;v++){const P=d[t[v]];P&&($[v]=P)}}return[m,$]}const M=r instanceof Uint8Array&&g<=255?new Uint8Array(l):new Uint32Array(l);if(p){if(c.fgStart>=0&&c.fgEnd>=c.fgStart)for(let _=c.fgStart;_<=c.fgEnd;_++){const w=t[_];if(w!==0){const y=d[w];y&&(M[_]=y,y>m&&(m=y))}}}else for(let _=0;_<l;_++){const w=t[_];if(w!==0){const y=d[w];y&&(M[_]=y,y>m&&(m=y))}}return[m,M]}diagnose_components(t,n,s,o,a={}){var v,P,k;const r=(v=a.topN)!=null?v:50,i=(P=a.minSize)!=null?P:1,f=(k=a.label)!=null?k:"diag",l=o[0],u=o[1],d=o[2],g=l*u,c=new Uint32Array(n+1),p=new Uint32Array(n+1);for(let B=0;B<t.length;B++){const C=s[B];C&&(c[C]=t[B],p[C]++)}const m=new Map,h=new Uint32Array(n+1),M=new Uint32Array(n+1),_=(B,C)=>{let N=m.get(B);N||(N=new Map,m.set(B,N)),N.set(C,(N.get(C)||0)+1)};for(let B=0;B<d;B++)for(let C=0;C<u;C++)for(let N=0;N<l;N++){const j=B*g+C*l+N,Y=s[j];if(!Y)continue;const W=c[Y],D=O=>{const Z=s[O];if(Z===Y)return;M[Y]++;const J=Z?c[Z]:0;J===0?h[Y]++:J!==W&&_(Y,J)};N>0&&D(j-1),N<l-1&&D(j+1),C>0&&D(j-l),C<u-1&&D(j+l),B>0&&D(j-g),B<d-1&&D(j+g)}const w=new Map,y=new Map;for(let B=1;B<=n;B++){const C=c[B];w.set(C,(w.get(C)||0)+1),(!y.has(C)||p[B]>y.get(C))&&y.set(C,p[B])}const $=[];for(let B=1;B<=n;B++){if(p[B]<i)continue;const C=c[B],N=m.get(B);let j=0,Y=0,W=0;if(N)for(const[O,Z]of N)W+=Z,Z>Y&&(Y=Z,j=O);const D=M[B]||1;$.push({comp:B,class:C,size:p[B],largestOfClass:p[B]===y.get(C)?"Y":"n",compsInClass:w.get(C),domNeighbor:j,domFracForeign:W?+(Y/W).toFixed(2):0,domFracBoundary:+(Y/D).toFixed(2),bgFrac:+(h[B]/D).toFixed(2)})}$.sort((B,C)=>C.domFracForeign-B.domFracForeign||C.size-B.size);const x=(B,C)=>{const N=C.map(Y=>Math.max(Y.h.length,...B.map(W=>String(W[Y.k]).length))),j=Y=>Y.map((W,D)=>String(W).padStart(N[D])).join("  ");return[j(C.map(Y=>Y.h)),...B.map(Y=>j(C.map(W=>Y[W.k])))].join(`
`)},S=[{k:"comp",h:"comp"},{k:"class",h:"class"},{k:"size",h:"size"},{k:"largestOfClass",h:"lrg"},{k:"compsInClass",h:"nComp"},{k:"domNeighbor",h:"domNbr"},{k:"domFracForeign",h:"encF"},{k:"domFracBoundary",h:"encB"},{k:"bgFrac",h:"bgF"}];console.log(`[${f}] total components=${n}, distinct classes=${w.size}
[${f}] island candidates (encF≈1 + small size + lrg=n ⇒ swallowed island):
`+x($.slice(0,r),S));const z=[...w.entries()].map(([B,C])=>({class:B,components:C,maxCompSize:y.get(B)})).sort((B,C)=>C.components-B.components);return console.log(`[${f}] per-class component counts (components=1 ⇒ fully connected):
`+x(z.slice(0,30),[{k:"class",h:"class"},{k:"components",h:"comps"},{k:"maxCompSize",h:"maxSize"}])),$}_collectComponentStats(t,n,s){const o=_n.get(s);if(o&&o.cl===n&&o.bw===t&&s.length===t.length)return[o.ls2bw,o.sumls];const a=t.length,r=new Uint32Array(n+1),i=new Uint32Array(n+1);for(let f=0;f<a;f++){const l=s[f];l>0&&(r[l]=t[f],i[l]++)}return[r,i]}_buildKeptMap(t,n,s,o,a){const r=new Uint32Array(s+1);let i=0;for(let l=1;l<=s;l++)t[l]>i&&(i=t[l]);const f=o==="all";if(i<=65535){const l=new Uint32Array(i+1),u=new Uint32Array(i+1);for(let d=1;d<=s;d++){const g=t[d];if(g!==0)if(f||o&&o.has&&o.has(g)){const c=n[d];(!u[g]||(a?c>=l[g]:c>l[g]))&&(l[g]=c,u[g]=d)}else r[d]=g}for(let d=1;d<=i;d++){const g=u[d];g>0&&(r[g]=d)}}else{const l=new Map;for(let u=1;u<=s;u++){const d=t[u];if(d!==0)if(f||o&&o.has&&o.has(d)){const g=n[u],c=l.get(d);(!c||(a?g>=c.sz:g>c.sz))&&l.set(d,{c:u,sz:g})}else r[u]=d}for(const[u,{c:d}]of l)r[d]=u}return r}largest_original_cluster_labels(t,n,s,o=null,a=!1,r=null,i=!1){const[f,l]=this._collectComponentStats(t,n,s),u=this._buildKeptMap(f,l,n,"all",!0);return this.finalize_volume(s,o,u,n,a,t,r,i)}filter_clusters(t,n,s,o,a=null,r=!1,i=null,f=!1){const[l,u]=this._collectComponentStats(t,n,s),d=this._buildKeptMap(l,u,n,o,!1);return this.finalize_volume(s,a,d,n,r,t,i,f)}filter_clusters_by_ratio(t,n,s,o,a=null,r=!1,i=null){const f=t.length,l=new Uint32Array(n+1).fill(0),u=new Uint32Array(n+1).fill(0);for(let p=0;p<f;p++){const m=s[p];m>0&&(l[m]===0&&(l[m]=t[p]),u[m]++)}const d=new Map;for(let p=1;p<=n;p++){const m=l[p],h=u[p];(!d.has(m)||h>d.get(m))&&d.set(m,h)}const g=new Uint8Array(n+1).fill(0);for(let p=1;p<=n;p++){const m=l[p],h=u[p],M=d.get(m)||0;h>=M*o&&(g[p]=1)}const c=new Uint32Array(n+1).fill(0);for(let p=1;p<=n;p++)g[p]&&(c[p]=l[p]);return this.finalize_volume(s,a,c,n,r,t,i)}_binaryComponentsFromLabels(t,n,s,o,a=!1){const r=o[0]|0,i=o[1]|0,f=o[2]|0,l=r*i,u=_n.get(s),d=u&&u.cl===n&&s.length===l*f&&(!a||u.bw===t);if(d&&u.conn===6&&u.distinctFgClasses<=1){const _=new Uint32Array(n+1);let w=0,y=0;for(let $=1;$<=n;$++){_[$]=$;const x=u.sumls[$];x>0&&x>=y&&(y=x,w=$)}return{parent:_,compSize:u.sumls,compClass:a?u.ls2bw:null,bestRoot:w}}const g=d?u.sumls:new Uint32Array(n+1),c=d?a?u.ls2bw:null:a?new Uint32Array(n+1):null,p=new Uint32Array(n+1);for(let _=1;_<=n;_++)p[_]=_;if(d&&u.conn===6&&u.runs&&u.bw===t){const _=($,x)=>{for(;p[$]!==$;)p[$]=p[p[$]],$=p[$];for(;p[x]!==x;)p[x]=p[p[x]],x=p[x];$!==x&&($<x?p[x]=$:p[$]=x)},w=u.runs,y=u.runLen;for(let $=0;$<y;$+=2){const x=w[$],S=w[$+1],z=x/l|0,v=x-z*l,P=v/r|0;let k=v-P*r;for(let B=x;B<S;B++,k++){const C=t[B];let N=0;if(z>0){const j=t[B-l];j!==0&&j!==C&&(N=s[B],_(N,s[B-l]))}if(P>0){const j=t[B-r];j!==0&&j!==C&&(N||(N=s[B]),_(N,s[B-r]))}if(k>0){const j=t[B-1];j!==0&&j!==C&&(N||(N=s[B]),_(N,s[B-1]))}}}}else{const _=d?u.minSl:0,w=d?u.maxSl:f-1;let y=_*l;for(let $=_;$<=w;$++)for(let x=0;x<i;x++)for(let S=0;S<r;S++,y++){const z=s[y];if(z===0)continue;d||(g[z]++,c&&c[z]===0&&(c[z]=t[y]));let v=z;for(;p[v]!==v;)p[v]=p[p[v]],v=p[v];if($>0){const P=s[y-l];if(P!==0&&P!==z){let k=P;for(;p[k]!==k;)p[k]=p[p[k]],k=p[k];v!==k&&(v<k?p[k]=v:(p[v]=k,v=k))}}if(x>0){const P=s[y-r];if(P!==0&&P!==z){let k=P;for(;p[k]!==k;)p[k]=p[p[k]],k=p[k];v!==k&&(v<k?p[k]=v:(p[v]=k,v=k))}}if(S>0){const P=s[y-1];if(P!==0&&P!==z){let k=P;for(;p[k]!==k;)p[k]=p[p[k]],k=p[k];v!==k&&(v<k?p[k]=v:p[v]=k)}}}}const m=new Uint32Array(n+1);for(let _=1;_<=n;_++){let w=_;for(;p[w]!==w;)w=p[w];p[_]=w,m[w]+=g[_]}let h=0,M=0;for(let _=1;_<=n;_++){const w=m[_];w>0&&w>=M&&(M=w,h=_)}return{parent:p,compSize:g,compClass:c,bestRoot:h}}applyLargestBinaryMaskInPlace(t,n,s,o){const a=t.length;if(n===0)return t.fill(0),t;const r=_n.get(s),i=r&&r.cl===n&&s.length===a;if(i&&r.conn===6&&r.distinctFgClasses<=1){let u=0,d=0;for(let g=1;g<=n;g++){const c=r.sumls[g];c>0&&c>=d&&(d=c,u=g)}if(r.runs&&r.bw===t){if(n>1){const g=r.runs,c=r.runLen;for(let p=0;p<c;p+=2){const m=g[p],h=g[p+1];for(let M=m;M<h;M++)s[M]!==u&&(t[M]=0)}}return t}if(r.fgStart>0&&t.fill(0,0,r.fgStart),r.fgEnd>=r.fgStart){for(let g=r.fgStart;g<=r.fgEnd;g++)s[g]!==u&&(t[g]=0);r.fgEnd+1<a&&t.fill(0,r.fgEnd+1)}else t.fill(0);return t}const{parent:f,bestRoot:l}=this._binaryComponentsFromLabels(t,n,s,o,!1);if(i&&r.runs&&r.bw===t){const u=r.runs,d=r.runLen;for(let g=0;g<d;g+=2){const c=u[g],p=u[g+1];for(let m=c;m<p;m++)f[s[m]]!==l&&(t[m]=0)}return t}if(i&&r.fgEnd>=r.fgStart){r.fgStart>0&&t.fill(0,0,r.fgStart);for(let u=r.fgStart;u<=r.fgEnd;u++){const d=s[u];(d===0||f[d]!==l)&&(t[u]=0)}r.fgEnd+1<a&&t.fill(0,r.fgEnd+1)}else for(let u=0;u<a;u++){const d=s[u];(d===0||f[d]!==l)&&(t[u]=0)}return t}filterHierarchicalFromLabels(t,n,s,o,a="all",r=!0,i=!1,f=null,l=!1){if(n===0)return[0,t instanceof Uint8Array?l?t:new Uint8Array(t.length):new Uint32Array(t.length)];const{parent:u,compSize:d,compClass:g,bestRoot:c}=this._binaryComponentsFromLabels(t,n,s,o,!0),p=new Uint32Array(n+1);for(let h=1;h<=n;h++)u[h]===c&&(p[h]=g[h]);const m=this._buildKeptMap(p,d,n,a,r);return this.finalize_volume(s,o,m,n,i,t,f,l)}filter18ClassFromLabels(t,n,s,o,a,r=!1,i=null,f=!1){return this.filterHierarchicalFromLabels(t,n,s,o,a,!1,r,i,f)}bwlabel(t,n,s=26,o=!1,a=!1,r=null){const i=Date.now(),f=n[0]*n[1]*n[2];if(![6,18,26].includes(s))return console.log("bwlabel: conn must be 6, 18 or 26."),[0,new Uint32Array(f)];if(n[0]<2||n[1]<2||n[2]<1)return console.log("bwlabel: img must be 2 or 3-dimensional"),[0,new Uint32Array(f)];let l;if(o){l=new Uint8Array(f);for(let m=0;m<f;m++)t[m]!==0&&(l[m]=1)}else t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Uint16Array||t instanceof Uint32Array||t instanceof Int8Array||t instanceof Int16Array||t instanceof Int32Array?t.length===f?l=t:(l=new Uint32Array(f),l.set(t.subarray(0,f))):(l=new Uint32Array(f),l.set(t));this._lastInitialRange=null,this._lastMeta=null;let[u,d,g]=this.do_initial_labelling(l,n,s,r);d===void 0&&(d=new Uint32Array(0));const[c,p]=this.translate_labels(g,n,d,u,l,this._lastInitialRange);if(this._lastMeta&&_n.set(p,this._lastMeta),console.log(s+" neighbor clustering into "+c+" regions in "+(Date.now()-i)+"ms"),a){const[m,h]=this.largest_original_cluster_labels(l,c,p);return[m,h]}return[c,p]}filter_clusters_by_rank(t,n,s,o,a=0,r=null,i=!1,f=null,l=!1,u=null){const d=t.length,g=new Uint32Array(n+1).fill(0),c=new Uint32Array(n+1).fill(0),p=f!=null&&Array.isArray(r)&&r.length===3,m=p?r[0]:0,h=p?r[1]:0,M=p?new Int32Array(n+1).fill(2147483647):null,_=p?new Int32Array(n+1).fill(-1):null,w=p?new Int32Array(n+1).fill(2147483647):null,y=p?new Int32Array(n+1).fill(-1):null,$=p?new Int32Array(n+1).fill(2147483647):null,x=p?new Int32Array(n+1).fill(-1):null;for(let B=0;B<d;B++){const C=s[B];if(C>0&&(g[C]===0&&(g[C]=t[B]),c[C]++,p)){const N=B%m,j=B/m|0,Y=j%h,W=j/h|0;N<M[C]&&(M[C]=N),N>_[C]&&(_[C]=N),Y<w[C]&&(w[C]=Y),Y>y[C]&&(y[C]=Y),W<$[C]&&($[C]=W),W>x[C]&&(x[C]=W)}}let S=null,z=0;if(p){let B=-1;for(let D=1;D<=n;D++)c[D]>B&&(B=c[D],z=D);const C=Math.max(2,Math.ceil(f)+4),N=m*h,j=new Int16Array(d).fill(-1);let Y=[];for(let D=0;D<d;D++)s[D]===z&&(j[D]=0,Y.push(D));for(let D=1;D<=C&&Y.length;D++){const O=[];for(let Z=0;Z<Y.length;Z++){const J=Y[Z],F=J%m,K=(J/m|0)%h;F>0&&j[J-1]===-1&&(j[J-1]=D,O.push(J-1)),F<m-1&&j[J+1]===-1&&(j[J+1]=D,O.push(J+1)),K>0&&j[J-m]===-1&&(j[J-m]=D,O.push(J-m)),K<h-1&&j[J+m]===-1&&(j[J+m]=D,O.push(J+m)),J-N>=0&&j[J-N]===-1&&(j[J-N]=D,O.push(J-N)),J+N<d&&j[J+N]===-1&&(j[J+N]=D,O.push(J+N))}Y=O}const W=C+1;S=new Float64Array(n+1).fill(W);for(let D=0;D<d;D++){const O=s[D];if(O>0&&O!==z){const Z=j[D]>=0?j[D]:W;Z<S[O]&&(S[O]=Z)}}l&&console.log(`[rank-filter] brain comp=${z} size=${B} bbox A[${M[z]},${_[z]}] B[${w[z]},${y[z]}] C[${$[z]},${x[z]}] | maxGap=${f} scan=${C}`)}const v=new Map;for(let B=1;B<=n;B++){const C=g[B],N=c[B];v.has(C)||v.set(C,[]),v.get(C).push({i:B,size:N})}const P=new Uint8Array(n+1).fill(0);for(const[B,C]of v.entries()){C.sort((W,D)=>D.size-W.size);const N=C.length?C[0].size:0,j=a>0?N*a:0,Y=Math.min(C.length,o);for(let W=0;W<Y;W++){const D=C[W];if(D.size<j){l&&W>0&&console.log(`[rank-filter] class ${B} #${W}: size=${D.size} DROP (below ${(a*100).toFixed(0)}% floor)`);break}if(W>0&&p){const O=S[D.i],Z=O<=f;if(l&&console.log(`[rank-filter] class ${B} #${W}: size=${D.size} surfDist=${O} -> ${Z?"KEEP":"DROP (too far)"}`),!Z)continue}P[D.i]=1}}const k=new Uint32Array(n+1).fill(0);for(let B=1;B<=n;B++)P[B]&&(k[B]=g[B]);return this.finalize_volume(s,r,k,n,i,t,u)}}function xr(e){if(!(e!=null&&e.length))throw new Error("Segmentation volume is empty.");let t=0;if((e instanceof Uint8Array||e instanceof Uint8ClampedArray)&&(e.byteOffset&3)===0&&e.length>=4){const n=e.length>>2,s=new Uint32Array(e.buffer,e.byteOffset,n);for(let o=0;o<n;o++){const a=s[o];a!==0&&(a&255&&t++,a&65280&&t++,a&16711680&&t++,a&4278190080&&t++)}for(let o=n<<2;o<e.length;o++)e[o]!==0&&t++}else if(e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Uint16Array||e instanceof Uint32Array)for(let n=0;n<e.length;n++)e[n]!==0&&t++;else for(let n=0;n<e.length;n++){const s=e[n];if(!Number.isFinite(s)||s<0)throw new Error(`Segmentation contains an invalid label at voxel ${n}: ${s}.`);s!==0&&t++}if(t===0)throw new Error("Segmentation volume contains no foreground labels.");if(t>e.length*.95)throw new Error(`Segmentation fills ${(100*t/e.length).toFixed(1)}% of the volume; GPU output is unusable.`)}const yr={il:null,runs:null,runLen:0,dirty:!1};function $r(e,t=.05,n=.95){const s=e.length;if(s===0)return{qmin:0,qmax:0};if(e instanceof Uint8Array||e instanceof Uint8ClampedArray){const f=Math.max(0,Math.min(s-1,Math.floor(s*t))),l=Math.max(0,Math.min(s-1,Math.ceil(s*n)-1)),u=new Uint32Array(256);for(let h=0;h<s;h++)u[e[h]]++;let d=0,g=0,c=0,p=!1,m=!1;for(let h=0;h<256;h++){const M=u[h];if(M!==0&&(d+=M,!p&&d>f&&(g=h,p=!0),!m&&d>l&&(c=h,m=!0),p&&m))break}return{qmin:g,qmax:c}}const o=Math.min(1e5,s),a=Math.max(0,Math.min(o-1,Math.floor(o*t))),r=Math.max(0,Math.min(o-1,Math.ceil(o*n)-1)),i=new Float64Array(o);if(o>=s)i.set(e);else{const f=.6180339887498949;let l=.5;for(let u=0;u<o;u++)l+=f,l>=1&&(l-=1),i[u]=e[Math.floor(l*s)]}return i.sort(),{qmin:i[a],qmax:i[r]}}function Sr(e){const t=e.length;if(t===0)return{min:0,max:0};let n=e[0],s=e[0];if(e instanceof Uint8Array||e instanceof Uint8ClampedArray){for(let o=1;o<t;o++){const a=e[o];if(a<n?n=a:a>s&&(s=a),n===0&&s===255)break}return{min:n,max:s}}for(let o=1;o<t;o++){const a=e[o];a<n&&(n=a),a>s&&(s=a)}return{min:n,max:s}}function Is(e,t,n){const s=e.length,o=new Float32Array(s);if(e instanceof Uint8Array||e instanceof Uint8ClampedArray){const a=new Float32Array(256);for(let r=0;r<256;r++)a[r]=(r-t)/n;for(let r=0;r<s;r++)o[r]=a[e[r]];return o}for(let a=0;a<s;a++)o[a]=(e[a]-t)/n;return o}function ao(e,t,n,s){const o=t[0]|0,a=t[1]|0,r=t[2]|0,i=o*a*r,f=new s(i);if(n[0]===2&&n[1]===1&&n[2]===0&&i===e.length){const h=a*r,M=a*o,_=16;for(let w=0;w<a;w++){const y=w*r,$=w*o;for(let x=0;x<o;x+=_){const S=Math.min(x+_,o);for(let z=0;z<r;z+=_){const v=Math.min(z+_,r);for(let P=x;P<S;P++){let k=P*h+y+z,B=z*M+$+P;for(let C=z;C<v;C++,k++,B+=M)f[B]=e[k]}}}}return f}const l=[o,a,r],u=[l[n[0]],l[n[1]],l[n[2]]],d=[a*r,r,1],g=d[n[0]],c=d[n[1]],p=d[n[2]];let m=0;for(let h=0;h<u[0];h++){const M=h*g;for(let _=0;_<u[1];_++){const w=M+_*c;for(let y=0;y<u[2];y++,m++)f[m]=e[w+y*p]}}return f}function kn(e,t=[256,256,256],n=[2,1,0]){return ao(e,t,n,Float32Array)}function kr(e,t=[256,256,256],n=[2,1,0]){return ao(e,t,n,Uint8Array)}function cs(e){const t=new Uint32Array(256);for(let n=0;n<e.length;n++)t[e[n]]++;return t}function Mr(e){const t=cs(e);let n=0;for(let s=0;s<256;s++)t[s]>0&&n++;return n}function Gs(e,t=!1,n="output"){let s=0,o=1/0,a=-1/0;if(!t&&(e instanceof Uint8Array||e instanceof Uint8ClampedArray)){if(e.length>0){let r=255,i=0,f=0;if((e.byteOffset&3)===0&&e.length>=4){const l=e.length>>2,u=new Uint32Array(e.buffer,e.byteOffset,l);for(let d=0;d<l;d++){const g=u[d];if(g===0){r=0;continue}const c=g&255,p=g>>>8&255,m=g>>>16&255,h=g>>>24;s+=c+p+m+h,c<r&&(r=c),c>i&&(i=c),p<r&&(r=p),p>i&&(i=p),m<r&&(r=m),m>i&&(i=m),h<r&&(r=h),h>i&&(i=h)}f=l<<2}for(let l=f;l<e.length;l++){const u=e[l];s+=u,u<r&&(r=u),u>i&&(i=u)}o=r,a=i}}else for(let r=0;r<e.length;r++){const i=e[r];if(!Number.isFinite(i))throw new Error(`Model ${n} contains NaN or Inf values.`);s+=i,i<o&&(o=i),i>a&&(a=i)}if(console.log(`${t?"Probability":"Segmentation"} volume sum: ${s}`),s===0)throw new Error(t?"Model probability output is all zeros. This may indicate an issue with WebGPU shaders or input data.":"Model produced an empty segmentation (all zeros). This may indicate an issue with WebGPU shaders or input data.");if(t&&(o<-1e-6||a>1+1e-6))throw new Error(`Probability output values out of range [0, 1]: min=${o.toFixed(4)}, max=${a.toFixed(4)}`);return{sum:s,min:o,max:a}}function Ar(e,t,n,s,o=null,a=null){return Ce(this,null,function*(){const r=!!(e&&typeof e.data=="function");let i,f;r?(console.log("Downloading segmentation data from GPU to CPU..."),i=yield e.data(),f=e.shape||a||[256,256,256],console.log("Data download complete. Starting CPU processing.")):(i=e,f=a||[256,256,256]),xr(i);let l,u=!1;if(i instanceof Uint8Array)l=i,u=!r;else{let g=0;for(let c=0;c<i.length;c++)i[c]>g&&(g=i[c]);l=g<=255?new Uint8Array(i):new Uint32Array(i),u=!0}let d=null;if(s.isPostProcessEnable){console.log("Applying CPU-based connected-component labeling...");const g=performance.now(),c=new vr,p=[5,14,15,58,59,60,598,608],m=!!s.fillSuppressedWithNeighborLabel||p.includes(n.id),h=[5,14,15,58,59,60,598,608],M=z=>z>=1&&z<=34?1:z>=35&&z<=68?2:0,_=h.includes(n.id)?M:null,w=f[0]*f[1]*f[2],y=Math.max(1e5,Math.floor(w*.01)),[$,x]=c.bwlabel(l,f,6,!1,!1,yr);if(d=c.getLabelMeta(x),$>y){const z=`Segmentation produced noise: ${$.toLocaleString()} disconnected regions (cap ${y.toLocaleString()}). The model output is unusable, so post-processing was aborted. Try re-running, switching backend (WebGPU/WebGL2), or another model.`;console.error("[postprocess] "+z);const v=new Error(z);throw v.code="SEGMENTATION_NOISE",v}if([1,7].includes(n.id)){const[k,B]=c.filter_clusters_by_rank(l,$,x,2,.02,f,m,8,!1,_);l=B,u=!0}else if([3,8,9,21,38,218].includes(n.id)){const z=new Set([1,2,5,6,13]),[v,P]=c.filter18ClassFromLabels(l,$,x,f,z,m,_,u);l=P,u=!0}else if([5,14,15,58,59,60,598,608].includes(n.id)){s.diagnoseEnclosedComponents&&c.diagnose_components(l,$,x,f,{label:`model${n.id}`,topN:60});const[z,v]=c.filterHierarchicalFromLabels(l,$,x,f,"all",!0,m,_,u);l=v,u=!0}else u||(l=l.slice(),u=!0),c.applyLargestBinaryMaskInPlace(l,$,x,f);const S=((performance.now()-g)/1e3).toFixed(4);console.log(`Connected-component labeling took: ${S} seconds.`)}switch(n.type){case"Brain_Masking":{const g=new Uint8Array(l.length);if(d&&d.runs){const c=d.runs,p=d.runLen;for(let m=0;m<p;m+=2){const h=c[m],M=c[m+1];for(let _=h;_<M;_++)l[_]!==0&&(g[_]=1)}}else for(let c=0;c<l.length;c++)g[c]=l[c]!==0?1:0;return g}case"Brain_Extraction":{const g=new Uint8Array(l.length),c=o?new Uint8Array(l.length):null;if(d&&d.runs){const p=d.runs,m=d.runLen;for(let h=0;h<m;h+=2){const M=p[h],_=p[h+1];for(let w=M;w<_;w++)l[w]!==0&&(g[w]=t[w],c&&(c[w]=1))}}else for(let p=0;p<l.length;p++){const m=l[p]!==0?1:0;g[p]=t[p]*m,c&&(c[p]=m)}return o&&(o.mask=c),g}default:return l instanceof Uint8Array?l:new Uint8Array(l)}})}const Pr={WEBGPU:"webgpu"};function zr(e,t){return{startTime:Date.now(),Model_Name:(e==null?void 0:e.modelName)||"Unknown",Execution_Mode:t,TF_Backend:"webgpu",isModelFullVol:null,No_SubVolumes:1,Brainchop_Ver:"FullVolume",Input_Shape:null,Output_Shape:null,Channel_Last:null,Model_Param:null,Model_Layers:null,Actual_Labels:null,Expect_Labels:null,NumLabels_Match:null,Missing_Labels:null,Preprocess_t:null,Setup_t:null,Inference_t:null,Postprocess_t:null,Display_t:null,Status:null,Error_Type:null,Extra_Err_Info:null}}function Cr(e,t,n,s=null){e.Expect_Labels=t,e.Actual_Labels=n,e.NumLabels_Match=t===n,s&&s.length>0&&(e.Missing_Labels=s.join(", "))}function Br(e,t,n,s=null){e.Inference_t=t,e.Postprocess_t=n,s&&(s.Preprocess_t!==void 0&&(e.Preprocess_t=s.Preprocess_t),s.Setup_t!==void 0&&(e.Setup_t=s.Setup_t),s.Display_t!==void 0&&(e.Display_t=s.Display_t)),e.Status="OK"}function Fr(e,t,n=null){e.Inference_t=1/0,e.Postprocess_t=1/0,e.Status="Fail",e.Error_Type=(t==null?void 0:t.message)||String(t),n&&(e.Extra_Err_Info=n)}const Wt=1e-8;function nn(e,t,n){return Math.max(t,Math.min(n,e))}function Lr(e){return e.outputType==="probability"&&e.probabilityPostprocess==="cat-lite"}function Ur(e,t,n){const[s,o,a]=e,r=s.length,i=new Uint8Array(r);let f=0;for(let y=0;y<r;y++)Math.max(0,s[y])+Math.max(0,o[y])+Math.max(0,a[y])>=n&&(i[y]=1,f++);const[l,u,d]=t;if(l<2||u<2||d<1)return{componentCount:0,removedVoxels:0,supportMask:i};const g=l===256&&u===256,c=new Uint32Array(f),p=l*u;let m=0,h=0,M=0,_=0;for(let y=0;y<r;y++){if(i[y]!==1)continue;_++;const $=m;c[m++]=y,i[y]=2;for(let x=$;x<m;x++){const S=c[x],z=g?S&255:S%l,v=g?S>>>8&255:Math.floor(S/l)%u;z>0&&i[S-1]===1&&(i[S-1]=2,c[m++]=S-1),z+1<l&&i[S+1]===1&&(i[S+1]=2,c[m++]=S+1),v>0&&i[S-l]===1&&(i[S-l]=2,c[m++]=S-l),v+1<u&&i[S+l]===1&&(i[S+l]=2,c[m++]=S+l),S>=p&&i[S-p]===1&&(i[S-p]=2,c[m++]=S-p),S+p<r&&i[S+p]===1&&(i[S+p]=2,c[m++]=S+p)}m-$>=M-h&&(h=$,M=m)}let w=0;if(_>1)for(let y=0;y<m;y++){if(y>=h&&y<M)continue;const $=c[y];s[$]=0,o[$]=0,a[$]=0,i[$]=0,w++}return{componentCount:_,removedVoxels:w,supportMask:i}}function Wr([e,t,n],s,{minSupport:o,priorPower:a},r=null){const i=!!(r&&o>0&&o<=1);let f=0;for(let m=0;m<s.length;m++){if(i&&r[m]!==2)continue;const h=Math.max(0,e[m])+Math.max(0,t[m])+Math.max(0,n[m]);Math.min(h,1)>=o&&Number.isFinite(s[m])&&f++}const l=new Uint32Array(f),u=new Float64Array(f),d=f*36<=192*Ot(2,20)?f:0,g=new Float64Array(d),c=new Float64Array(d),p=new Float64Array(d);for(let m=0,h=0;m<s.length;m++){if(i&&r[m]!==2)continue;const M=Math.max(0,e[m]),_=Math.max(0,t[m]),w=Math.max(0,n[m]),y=M+_+w,$=Math.min(y,1);!($>=o)||!Number.isFinite(s[m])||(l[h]=m,u[h]=s[m]-0,d&&(g[h]=$*Math.pow(w/y,a),c[h]=$*Math.pow(M/y,a),p[h]=$*Math.pow(_/y,a)),h++)}return{indices:l,values:u,weightCsf:g,weightGm:c,weightWm:p,volumes:[e,t,n]}}function Ts([e,t,n],s,o,a){const r=Math.max(0,e[s]),i=Math.max(0,t[s]),f=Math.max(0,n[s]),l=r+i+f,u=Math.min(l,1);a[0]=u*Math.pow(f/l,o),a[1]=u*Math.pow(r/l,o),a[2]=u*Math.pow(i/l,o)}function Ns({indices:e,values:t,weightCsf:n,weightGm:s,weightWm:o,volumes:a},{minSeparation:r,sigmaFloor:i,priorPower:f},l=!1){const u=n.length===0?new Float64Array(3):null,d=new Float64Array(3),g=new Float64Array(3);for(let h=0;h<t.length;h++){const M=t[h];u&&Ts(a,e[h],f,u);const _=u?u[0]:n[h],w=u?u[1]:s[h],y=u?u[2]:o[h];d[0]+=_*M,g[0]+=_,d[1]+=w*M,g[1]+=w,d[2]+=y*M,g[2]+=y}if(g.some(h=>h<100))return{applied:!1,reason:"too few high-confidence tissue voxels"};const c=Array.from(d,(h,M)=>h/g[M]);if(!(c[0]+r<c[1]&&c[1]+r<c[2]))return{applied:!1,reason:`implausible T1 tissue ordering (${c.map(h=>h.toFixed(3)).join(", ")})`};if(l)return{applied:!0,means:c};const p=new Float64Array(3);for(let h=0;h<t.length;h++){const M=t[h];u&&Ts(a,e[h],f,u);const _=u?u[0]:n[h],w=u?u[1]:s[h],y=u?u[2]:o[h],$=M-c[0],x=M-c[1],S=M-c[2];p[0]+=_*$*$,p[1]+=w*x*x,p[2]+=y*S*S}const m=Array.from(p,(h,M)=>Math.sqrt(Math.max(i*i,h/g[M])));return{applied:!0,means:c,sigmas:m}}function qr(e,t,n,s,{minSupport:o,block:a,smoothingPasses:r},i=null){const[f,l,u]=e,[d,g,c]=n,p=!!(i&&o>0&&o<=1),m=Math.ceil(d/a),h=Math.ceil(g/a),M=Math.ceil(c/a),_=m*h*M,w=new Float64Array(_),y=new Float64Array(_),[$,x,S]=s,z=d*g;for(let Y=0;Y<c;Y++){const W=Math.floor(Y/a);for(let D=0;D<g;D++){const O=Math.floor(D/a);let Z=Y*z+D*d;const J=(W*h+O)*m;for(let F=0;F<d;F++,Z++){if(p&&i[Z]!==2)continue;const V=Math.max(0,f[Z]),K=Math.max(0,l[Z]),q=Math.max(0,u[Z]),ce=V+K+q,pe=Math.min(ce,1);if(!(pe>=o)||!Number.isFinite(t[Z]))continue;const ye=V/ce,be=K/ce,we=q/ce,ee=we*$+ye*x+be*S,le=pe*(we*we+ye*ye+be*be),A=J+Math.floor(F/a);w[A]+=le*(t[Z]-ee),y[A]+=le}}}let v=new Float32Array(_),P=new Uint8Array(_);for(let Y=0;Y<_;Y++)y[Y]>1&&(v[Y]=w[Y]/y[Y],P[Y]=1);for(let Y=0;Y<r;Y++){const W=new Float32Array(_),D=new Uint8Array(_);for(let O=0;O<M;O++)for(let Z=0;Z<h;Z++)for(let J=0;J<m;J++){let F=0,V=0;for(let q=-1;q<=1;q++){const ce=O+q;if(!(ce<0||ce>=M))for(let pe=-1;pe<=1;pe++){const ye=Z+pe;if(!(ye<0||ye>=h))for(let be=-1;be<=1;be++){const we=J+be;if(we<0||we>=m)continue;const ee=(ce*h+ye)*m+we;P[ee]&&(F+=v[ee],V++)}}}const K=(O*h+Z)*m+J;V>0&&(W[K]=F/V,D[K]=1)}v=W,P=D}const k=(Y,W)=>{const D=new Int32Array(Y),O=new Int32Array(Y),Z=new Float32Array(Y);for(let J=0;J<Y;J++){const F=nn((J+.5)/a-.5,0,W-1);D[J]=Math.floor(F),O[J]=Math.min(D[J]+1,W-1),Z[J]=F-D[J]}return{low:D,high:O,t:Z}},B=k(d,m),C=k(g,h),N=k(c,M),j=d===256&&g===256;return Y=>{let W,D,O;if(j)O=Y>>>16,D=Y>>>8&255,W=Y&255;else{O=Math.floor(Y/z);const ae=Y-O*z;D=Math.floor(ae/d),W=ae-D*d}const Z=B.low[W],J=B.high[W],F=B.t[W],V=(N.low[O]*h+C.low[D])*m,K=(N.low[O]*h+C.high[D])*m,q=(N.high[O]*h+C.low[D])*m,ce=(N.high[O]*h+C.high[D])*m,pe=v[V+Z]+(v[V+J]-v[V+Z])*F,ye=v[K+Z]+(v[K+J]-v[K+Z])*F,be=v[q+Z]+(v[q+J]-v[q+Z])*F,we=v[ce+Z]+(v[ce+J]-v[ce+Z])*F,ee=C.t[D],le=pe+(ye-pe)*ee,A=be+(we-be)*ee;return le+(A-le)*N.t[O]}}function $n(e,t,n,s){const o=(e-t)/n;return-.5*o*o-s}function Rr(e,t,n,s={}){const{catLiteMinSupport:o=.03,catLitePurePriorPower:a=3,catLiteMinMeanSeparation:r=.035,catLiteSigmaFloor:i=.025,catLiteBiasBlockSize:f=16,catLiteBiasSmoothPasses:l=3,catLitePriorStrength:u=.8,catLiteIntensityStrength:d=.75,catLiteMixelPrior:g=.35,catLiteCsfWmMixelPrior:c=6,catLiteSpatialWeight:p=.25}=s,m={priorPower:a,minSupport:o,minSeparation:r,sigmaFloor:i},[h,M,_]=n,w=t.length,y=o>0&&o<=1,{componentCount:$,removedVoxels:x,supportMask:S}=Ur(e,n,o),z={componentCount:$,removedVoxels:x},v=Wr(e,t,m,S),P=Ns(v,m,!0);if(!P.applied)return{tissues:e,stats:P};const k=qr(e,t,n,P.means,{minSupport:o,block:f,smoothingPasses:l},S);for(let Q=0;Q<v.indices.length;Q++){const se=v.indices[Q];v.values[Q]=t[se]-k(se)}const B=Ns(v,m);if(!B.applied)return{tissues:e,stats:B};v.indices=v.weightCsf=v.weightGm=v.weightWm=null;const[C,N,j]=B.means,[Y,W,D]=B.sigmas,[O,Z,J]=e,F=new Float32Array(w),V=new Float32Array(w),K=new Float32Array(w),q=h*M,ce=.5*(C+N),pe=.5*(N+j),ye=.5*(C+j),be=Math.sqrt(Ot(N-C,2)/12+.5*(Ot(Y,2)+Ot(W,2))),we=Math.sqrt(Ot(j-N,2)/12+.5*(Ot(W,2)+Ot(D,2))),ee=Math.sqrt(Ot(j-C,2)/12+.5*(Ot(Y,2)+Ot(D,2))),le=Math.log(Y),A=Math.log(W),ae=Math.log(D),R=Math.log(be),fe=Math.log(we),re=Math.log(ee);let ne=0;for(let Q=0;Q<_;Q++)for(let se=0;se<M;se++){let G=Q*q+se*h;for(let Se=0;Se<h;Se++,G++){if(y&&S[G]!==2)continue;const _e=Math.max(0,O[G]),Be=Math.max(0,Z[G]),ze=Math.max(0,J[G]),Ge=_e+Be+ze,We=Math.min(Ge,1);if(!(We>=o)||!Number.isFinite(t[G]))continue;let Xe=_e/Ge,Oe=Be/Ge,Le=ze/Ge;if(p>0){let Ft=0,ht=0,nt=0,Ee=0;if(Se>0){const De=G-1,b=Math.max(0,O[De]),L=Math.max(0,Z[De]),U=Math.max(0,J[De]),H=b+L+U;H>Wt&&(Ft+=b/H,ht+=L/H,nt+=U/H,Ee++)}if(Se+1<h){const De=G+1,b=Math.max(0,O[De]),L=Math.max(0,Z[De]),U=Math.max(0,J[De]),H=b+L+U;H>Wt&&(Ft+=b/H,ht+=L/H,nt+=U/H,Ee++)}if(se>0){const De=G-h,b=Math.max(0,O[De]),L=Math.max(0,Z[De]),U=Math.max(0,J[De]),H=b+L+U;H>Wt&&(Ft+=b/H,ht+=L/H,nt+=U/H,Ee++)}if(se+1<M){const De=G+h,b=Math.max(0,O[De]),L=Math.max(0,Z[De]),U=Math.max(0,J[De]),H=b+L+U;H>Wt&&(Ft+=b/H,ht+=L/H,nt+=U/H,Ee++)}if(Q>0){const De=G-q,b=Math.max(0,O[De]),L=Math.max(0,Z[De]),U=Math.max(0,J[De]),H=b+L+U;H>Wt&&(Ft+=b/H,ht+=L/H,nt+=U/H,Ee++)}if(Q+1<_){const De=G+q,b=Math.max(0,O[De]),L=Math.max(0,Z[De]),U=Math.max(0,J[De]),H=b+L+U;H>Wt&&(Ft+=b/H,ht+=L/H,nt+=U/H,Ee++)}if(Ee){const De=1-p;Xe=De*Xe+p*Ft/Ee,Oe=De*Oe+p*ht/Ee,Le=De*Le+p*nt/Ee}}const Ae=v.values[ne++],Ve=u*Math.log(Le+Wt)+d*$n(Ae,C,Y,le),at=u*Math.log(Xe+Wt)+d*$n(Ae,N,W,A),tt=u*Math.log(Oe+Wt)+d*$n(Ae,j,D,ae),st=u*Math.log(g*2*Math.sqrt(Le*Xe)+Wt)+d*$n(Ae,ce,be,R),Mt=u*Math.log(g*2*Math.sqrt(Xe*Oe)+Wt)+d*$n(Ae,pe,we,fe),It=u*Math.log(c*2*Math.sqrt(Le*Oe)*Ot(1-Xe,2)+Wt)+d*$n(Ae,ye,ee,re),zt=Math.max(Ve,at,tt,st,Mt,It),Yt=Math.exp(Ve-zt),tn=Math.exp(at-zt),At=Math.exp(tt-zt),Gt=Math.exp(st-zt),bt=Math.exp(Mt-zt),mt=Math.exp(It-zt),$t=Yt+tn+At+Gt+bt+mt,St=nn((Ae-C)/(N-C),0,1),Kt=nn((j-Ae)/(j-N),0,1),an=nn((Ae-C)/(j-C),0,1),Ct=(tn+Gt*St+bt*Kt)/$t,Pt=(At+bt*(1-Kt)+mt*an)/$t,kt=(Yt+Gt*(1-St)+mt*(1-an))/$t,ot=Math.min(Le,Oe),Bt=nn((ot-Xe)/(ot+Wt),0,1),rt=nn(4*Le*Oe,0,1),Tt=Ot(1-rt*Bt,2);F[G]=nn(Ct*We*Tt,0,1);const te=(1-Ct*Tt)/Math.max(Pt+kt,Wt);V[G]=nn(Pt*te*We,0,1),K[G]=nn(kt*te*We,0,1)}}return{tissues:[F,V,K],stats:{applied:!0,tissueMeans:{csf:C,gray:N,white:j},tissueSigmas:{csf:Y,gray:W,white:D},supportCleanup:z}}}const Ir={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Gr({srcImg:e,srcDims:t,srcAffine:n,dstDims:s,dstAffine:o,isLabel:a,isProbability:r=!1,dstTypedArrayKind:i="Uint8Array",labelLut:f=null}){const[l,u,d]=s,[g,c,p]=t,m=o,h=(O,Z)=>[O[0][0]*Z[0]+O[0][1]*Z[1]+O[0][2]*Z[2]+O[0][3],O[1][0]*Z[0]+O[1][1]*Z[1]+O[1][2]*Z[2]+O[1][3],O[2][0]*Z[0]+O[2][1]*Z[1]+O[2][2]*Z[2]+O[2][3]],M=tr();if(!nr(M,sr(...n[0],...n[1],...n[2],...n[3])))throw new Error("Segmentation affine is not invertible");const _=(O,Z)=>[O[0]*Z[0]+O[1]*Z[1]+O[2]*Z[2]+O[3],O[4]*Z[0]+O[5]*Z[1]+O[6]*Z[2]+O[7],O[8]*Z[0]+O[9]*Z[1]+O[10]*Z[2]+O[11]],w=O=>_(M,h(m,O)),y=w([0,0,0]),$=w([1,0,0]).map((O,Z)=>O-y[Z]),x=w([0,1,0]).map((O,Z)=>O-y[Z]),S=w([0,0,1]).map((O,Z)=>O-y[Z]),z=l*u*d,v=g*c,P=(O,Z,J)=>O>=0&&O<g&&Z>=0&&Z<c&&J>=0&&J<p?e[O+Z*g+J*v]:0;if(a){const O=[];for(const ce of[-.25,.25])for(const pe of[-.25,.25])for(const ye of[-.25,.25])O.push([ce*$[0]+pe*x[0]+ye*S[0],ce*$[1]+pe*x[1]+ye*S[1],ce*$[2]+pe*x[2]+ye*S[2]]);const Z=new Int16Array(z),J=f?f.length:0;let F=0;const V=new Int32Array(8),K=new Int32Array(8);let q=0;for(let ce=0;ce<d;ce++)for(let pe=0;pe<u;pe++){let ye=y[0]+pe*x[0]+ce*S[0],be=y[1]+pe*x[1]+ce*S[1],we=y[2]+pe*x[2]+ce*S[2];for(let ee=0;ee<l;ee++){let le=0;for(let R=0;R<8;R++){const fe=P(Math.round(ye+O[R][0]),Math.round(be+O[R][1]),Math.round(we+O[R][2]));let re=-1;for(let ne=0;ne<le;ne++)if(V[ne]===fe){re=ne;break}re<0?(V[le]=fe,K[le]=1,le++):K[re]++}let A=V[0],ae=K[0];for(let R=1;R<le;R++)K[R]>ae&&(ae=K[R],A=V[R]);f&&A>=0&&A<J&&(A=f[A]),A>F&&(F=A),Z[q++]=A,ye+=$[0],be+=$[1],we+=$[2]}}return{img:Z,hdrPatch:{datatypeCode:4,numBitsPerVoxel:16,scl_slope:1,scl_inter:0,cal_min:0,cal_max:F,intent_code:1002}}}const k=Ir[i]||Uint8Array,B=r?255:1,C=r?.5:0,N=r?new Uint8Array(z):new k(z),Y=r?(O,Z,J)=>{const F=Math.floor(O),V=Math.floor(Z),K=Math.floor(J),q=O-F,ce=Z-V,pe=J-K,ye=P(F,V,K),be=P(F+1,V,K),we=P(F,V+1,K),ee=P(F+1,V+1,K),le=P(F,V,K+1),A=P(F+1,V,K+1),ae=P(F,V+1,K+1),R=P(F+1,V+1,K+1),fe=ye+q*(be-ye),re=we+q*(ee-we),ne=le+q*(A-le),Q=ae+q*(R-ae),se=fe+ce*(re-fe),G=ne+ce*(Q-ne);return se+pe*(G-se)}:(O,Z,J)=>P(Math.round(O),Math.round(Z),Math.round(J));let W=0;for(let O=0;O<d;O++)for(let Z=0;Z<u;Z++){let J=y[0]+Z*x[0]+O*S[0],F=y[1]+Z*x[1]+O*S[1],V=y[2]+Z*x[2]+O*S[2];for(let K=0;K<l;K++)N[W++]=Y(J,F,V)*B+C,J+=$[0],F+=$[1],V+=$[2]}const D=r?{datatypeCode:2,numBitsPerVoxel:8,cal_min:0,cal_max:1,scl_slope:1/B,scl_inter:0}:{scl_slope:1,scl_inter:0};return{img:N,hdrPatch:D}}function Tr(e){return new Worker(""+new URL("postprocess-worker-CugCC9CK.js",import.meta.url).href,{name:e==null?void 0:e.name})}let on=null,Nr=1;const Bn=new Map;function Or(e){for(const{reject:t}of Bn.values())t(e);Bn.clear()}function Os(e){if(on){try{on.terminate()}catch(t){}on=null}e&&Or(e)}function Er(){return typeof Worker=="undefined"?null:(on||(on=new Tr({}),on.onmessage=e=>{const{id:t,ok:n,result:s,error:o}=e.data||{},a=Bn.get(t);if(a)if(Bn.delete(t),n)a.resolve(s);else{const r=new Error((o==null?void 0:o.message)||"Postprocessing worker failed");o!=null&&o.code&&(r.code=o.code),a.reject(r)}},on.onerror=e=>{const t=(e==null?void 0:e.message)||"Postprocessing worker crashed";Os(new Error(t))},on.onmessageerror=()=>{Os(new Error("Postprocessing worker message deserialization failed"))}),on)}function vs(e,t,n=[]){const s=Er();if(!s)return null;const o=Nr++;return new Promise((a,r)=>{Bn.set(o,{resolve:a,reject:r});try{s.postMessage({id:o,cmd:e,payload:t},n)}catch(i){Bn.delete(o),r(i)}})}function io(e){return e&&ArrayBuffer.isView(e)&&e.buffer instanceof ArrayBuffer&&e.byteOffset===0&&e.byteLength===e.buffer.byteLength}function Dr(i,f,l,u){return Ce(this,arguments,function*(e,t,n,s,o=null,a=null,{transferLabels:r=!1}={}){if(typeof Worker=="undefined")return Ar(e,t,n,s,o,a);const d=(n==null?void 0:n.type)==="Brain_Extraction",g={nativeLabels:e,niftiImage:d?t:null,modelEntry:{id:n==null?void 0:n.id,type:n==null?void 0:n.type},opts:{isPostProcessEnable:!!(s!=null&&s.isPostProcessEnable),fillSuppressedWithNeighborLabel:!!(s!=null&&s.fillSuppressedWithNeighborLabel),diagnoseEnclosedComponents:!!(s!=null&&s.diagnoseEnclosedComponents)},wantMask:!!o,shape:a||[256,256,256]},c=r&&io(e)?[e.buffer]:[],p=yield vs("processSegmentation",g,c);return o&&p.mask&&(o.mask=p.mask),p.outImg})}function Vr(e){return Ce(this,null,function*(){return typeof Worker=="undefined"?Gr(e):vs("resliceToNative",e,[])})}const Es=({csf:e,gray:t,white:n})=>`CSF=${e.toFixed(3)} GM=${t.toFixed(3)} WM=${n.toFixed(3)}`;function Hr(r,i,f,l,u){return Ce(this,arguments,function*(e,t,n,s,o,a=[256,256,256]){var m;const d=[];for(let h=0;h<3;h++)d.push(yield o(e[h],h)),e[h]=null;const g={catLitePurePriorPower:n==null?void 0:n.catLitePurePriorPower,catLitePriorStrength:n==null?void 0:n.catLitePriorStrength,catLiteIntensityStrength:n==null?void 0:n.catLiteIntensityStrength,catLiteMixelPrior:n==null?void 0:n.catLiteMixelPrior,catLiteCsfWmMixelPrior:n==null?void 0:n.catLiteCsfWmMixelPrior,catLiteSpatialWeight:n==null?void 0:n.catLiteSpatialWeight,catLiteMinSupport:n==null?void 0:n.catLiteMinSupport,catLiteSigmaFloor:n==null?void 0:n.catLiteSigmaFloor,catLiteBiasBlockSize:n==null?void 0:n.catLiteBiasBlockSize,catLiteBiasSmoothPasses:n==null?void 0:n.catLiteBiasSmoothPasses,catLiteMinMeanSeparation:n==null?void 0:n.catLiteMinMeanSeparation,catLiteMinPureVoxels:n==null?void 0:n.catLiteMinPureVoxels};let c,p;if(typeof Worker=="undefined")({tissues:c,stats:p}=Rr(d,t,a,g));else{const h=new Set,M=[];for(const _ of[...d,t])io(_)&&!h.has(_.buffer)&&(h.add(_.buffer),M.push(_.buffer));({tissues:c,stats:p}=yield vs("catLite",{priors:d,intensity:t,shape:a,options:g},M))}if(s.Output_Type="Continuous tissue probability",s.Tissue="GM/WM/CSF",s.Softmax_Temperature=(m=n==null?void 0:n.softmaxTemperature)!=null?m:1,p.applied){s.Partial_Volume="CAT-lite mixed-class PVE",s.CAT_Lite_Tissue_Means=Es(p.tissueMeans),s.CAT_Lite_Tissue_Sigmas=Es(p.tissueSigmas);const{componentCount:h,removedVoxels:M}=p.supportCleanup;console.log(`[CAT-lite] means ${s.CAT_Lite_Tissue_Means}; sigmas ${s.CAT_Lite_Tissue_Sigmas}; removed ${M} voxels outside the largest of ${h} support components`)}else s.Partial_Volume=`Skipped: ${p.reason}`,console.warn(`[CAT-lite] skipped: ${p.reason}`);return c})}const ln=[1,3,5,7,13,19,31,19,13,7,5,3,1],Xr=[16,8,4,2,1,16,8,4,2,1,16,8,4,2,1,16,8,4,2,1,16,8,4,2,1],jr={model16chan18cls:{dilations:ln,activation:"gelu_tanh",fullVolume:!0},model24chan18cls_gdice_prio:{dilations:ln,activation:"gelu_tanh",fullVolume:!0},model6chan3cls:{dilations:ln,activation:"gelu_tanh",fullVolume:!0},model24chan104cls_synth:{dilations:ln,activation:"gelu_tanh",fullVolume:!0},model24chan104cls_infant_refit_synth:{dilations:ln,activation:"gelu_tanh",fullVolume:!0},model24chan104cls_v3_repbn:{dilations:ln,activation:"gelu_tanh",fullVolume:!0},model24chan50cls:{dilations:ln,activation:"gelu_tanh",fullVolume:!0},model32chan18cls:{dilations:ln,activation:"gelu_tanh",fullVolume:!1},mindgrab:{dilations:Xr,activation:"gelu_tanh",fullVolume:!0},model5_gw_ae:{dilations:[1,2,4,8,16,8,4,2,1],activation:"relu",fullVolume:!0},model11_gw_ae:{dilations:[1,2,4,8,4,2,2,1],activation:"relu",noSafetensors:!0,fullVolume:!0},model30chan18cls:{dilations:[1,2,4,8,16,8,4,2,1],activation:"elu",fullVolume:!0},model30chan50cls:{dilations:[1,2,4,8,16,8,4,2,1],activation:"elu",fullVolume:!0}};function Yr(e){const t=String(e.path||"").match(/\/models\/([^/]+)\//);return t?t[1]:null}function xs(e){const t=Yr(e);if(!t)return null;const n=jr[t];return!n||n.noSafetensors?null:it({name:t},n)}function Kr(e){const t=e&32768?-1:1,n=(e&31744)>>10,s=e&1023;return n===0?t*Math.pow(2,-14)*(s/1024):n===31?s?NaN:t*(1/0):t*Math.pow(2,n-15)*(1+s/1024)}function lo(e){const t=new DataView(e),n=Number(t.getBigUint64(0,!0)),s=JSON.parse(new TextDecoder().decode(new Uint8Array(e,8,n))),o=8+n,a={};for(const[r,i]of Object.entries(s)){if(r==="__metadata__"){a.__metadata__=i;continue}const[f,l]=i.data_offsets,u=i.shape.reduce((g,c)=>g*c,1);let d;if(i.dtype==="F32")d=new Float32Array(e.slice(o+f,o+l));else if(i.dtype==="F16"){const g=new Uint16Array(e.slice(o+f,o+l));d=new Float32Array(u);for(let c=0;c<u;c++)d[c]=Kr(g[c])}else if(i.dtype==="BF16"){const g=new Uint16Array(e.slice(o+f,o+l));d=new Float32Array(u);const c=new Uint32Array(1),p=new Float32Array(c.buffer);for(let m=0;m<u;m++)c[0]=g[m]<<16,d[m]=p[0]}else throw new Error(`safetensors: unsupported dtype ${i.dtype} for tensor '${r}'`);if(d.length!==u)throw new Error(`safetensors: tensor '${r}' has ${d.length} values, shape says ${u}`);a[r]={dtype:i.dtype,shape:i.shape,data:d}}return a}function uo(e){const t=[],n=[],s=[];for(const[a,r]of Object.entries(e)){if(a==="__metadata__")continue;const i=a.match(/^m\.model\.(\d+)\.(weight|bias)$/);if(!i)continue;const f=Number(i[1]),l=i[2]==="weight";if(r.shape.length===5){const[u,d,g,c,p]=r.shape,h={idx:f,outC:u,inC:d,kd:g,kh:c,kw:p,is1x1:g===1&&c===1&&p===1,w:r.data,bias:null},M=t.find(_=>_.idx===f);M?Object.assign(M,h):t.push(h)}else r.shape.length===1&&s.push({idx:f,isW:l,data:r.data,len:r.shape[0]})}t.sort((a,r)=>a.idx-r.idx);for(const a of s){const r=t.find(f=>f.idx===a.idx);if(r&&!a.isW){r.bias=a.data;continue}if(r&&a.isW)continue;let i=n.find(f=>f.idx===a.idx);i||(i={idx:a.idx,scale:null,bias:null},n.push(i)),a.isW?i.scale=a.data:i.bias=a.data}n.sort((a,r)=>a.idx-r.idx);let o=null;return t.length&&t[t.length-1].is1x1&&(o=t.pop()),{convs:t,affines:n,classifier:o}}function Zr(e,t){var n;if(t==null)return e;if(t.length!==((n=e.classifier)==null?void 0:n.outC)||!Array.from(t).every(Number.isFinite))throw new Error("Classifier bias must contain one finite value per exported class");return e.classifier.bias=Float32Array.from(t),e}function Qr(e,t){const n=t.cs,s=t.chan,{convs:o,affines:a,classifier:r}=e,i=c=>27*c*n;let f=0;const l=[];o.forEach((c,p)=>{const m=p===0?1:n,h={wq:f/4,inCS:m};f+=i(m),c.bias&&(h.biasQ=f/4,f+=n),l.push(h)}),a.forEach((c,p)=>{l[p]=l[p]||{},l[p].affQ=f/4,f+=n,l[p].affBiasQ=f/4,f+=n});let u=-1,d=-1;r&&(u=f,f+=s*t.nclass,f=Math.ceil(f/4)*4,r.bias&&(d=f,f+=t.nclass),f=Math.ceil(f/4)*4);const g=new Float32Array(f);if(o.forEach((c,p)=>{const m=l[p],h=m.inCS,M=m.wq*4,_=c.kd*c.kh*c.kw;if(c.outC>s||p>0&&c.inC>s)throw new Error(`layer ${p}: shape ${c.outC}x${c.inC} exceeds CHAN ${s}`);for(let w=0;w<c.outC;w++){for(let y=0;y<c.inC;y++)for(let $=0;$<c.kd;$++)for(let x=0;x<c.kh;x++)for(let S=0;S<c.kw;S++){const z=c.kd===3?$*9+x*3+S:0,v=(((w*c.inC+y)*c.kd+$)*c.kh+x)*c.kw+S;g[M+(z*h+y)*n+w]=c.w[v]}c.bias&&(g[m.biasQ*4+w]=c.bias[w])}if(_!==27&&_!==1)throw new Error(`layer ${p}: kernel ${c.kd}x${c.kh}x${c.kw} unsupported`)}),a.forEach((c,p)=>{const m=l[p];for(let h=0;h<s;h++)g[m.affQ*4+h]=c.scale?c.scale[h]:0,g[m.affBiasQ*4+h]=c.bias?c.bias[h]:0}),r)for(let c=0;c<t.nclass;c++){for(let p=0;p<s;p++)g[u+p*t.nclass+c]=r.w[c*r.inC+p];r.bias&&(g[d+c]=r.bias[c])}return{data:g,offsets:{layers:l,clsFloat:u,clsBiasFloat:d}}}function co(e,t={}){const{convs:n,affines:s,classifier:o}=e,a=n[0].outC,r=Math.ceil(a/4)*4,i=n.some(l=>l.bias),f=it({chan:a,cs:r,planes:r/4,nclass:o?o.outC:0,nhidden:n.length-1,norm:s.length?"gn":i?"none":"gn",affine:s.length>0,convBias:i,classifierBias:!!(o&&o.bias),centeredVariance:!1,eps:1e-5},t);if(f.nclass>256)throw new Error(`classifier has ${f.nclass} classes; the RGBA8 label texture holds at most 256`);if(!f.activation)throw new Error("descriptor needs an explicit `activation`");if(!f.dilations)throw new Error("descriptor needs an explicit `dilations` array");if(f.dilations.length!==n.length)throw new Error(`descriptor has ${f.dilations.length} dilations for ${n.length} convs`);return f}const Qn=(e,t)=>Array.from({length:e},(n,s)=>t(s)).join(""),Ds=["x","y","z","w"];function Jr(e){const t=`fn act4(x : vec4<f32>) -> vec4<f32> {
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
`;default:throw new Error(`webgpu-native: unknown activation '${e}'; add it deliberately`)}}function ea(e,t,n){const s=e.cs/4,o=l=>Qn(n,l),a=l=>Qn(s,l),r=a(l=>`          let w${l} = vec4<f32>(wts4[wq + ${l}u]);
`),i=l=>`        { let wq = wq0 + ((tap * cin) + ic4 * 4u + ${l}u) * (CS / 4u);
`+r+o(u=>a(d=>`          a${u}${d} = fma(w${d}, vec4<f32>(s${u}.${Ds[l]}), a${u}${d});
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
`+a(u=>Qn(4,d=>`    dst[o + ${4*u+d}u] = f16(a${l}${u}.${Ds[d]});
`))+`  }
`)+`}
`}function ta(e){return`var<workgroup> wg_sum : array<f32, ${e} * CS>;
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
`}function na(e){return`@compute @workgroup_size(${e}, 1, 1)
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
`}function sa(e){return`@group(0) @binding(5) var<storage, read_write> labels : array<u32>;
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
`}function oa(e,t){var a;const{localX:n,vox:s,momLX:o}=t;if(e.cs%4!==0||e.cs>256)throw new Error(`webgpu-native: channel stride ${e.cs} unsupported`);if(e.nx%(n*s)||e.nx%n||e.nx%o)throw new Error(`webgpu-native: preset ${n}x${s}/${o} does not tile a ${e.nx}-voxel row`);if(o<e.cs)throw new Error(`webgpu-native: moments workgroup ${o} < ${e.cs} channels`);return`enable f16;
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
`+Jr(e.activation)+ea(e,n,s)+(e.norm==="gn"?ta(o)+na(n):"")+sa(n)}const Jn={amd:{localX:256,vox:1},apple:{localX:64,vox:2},default:{localX:64,vox:2}};function ra(){var e;try{const t=new URLSearchParams(((e=globalThis.location)==null?void 0:e.search)||"").get("wgPreset"),n=t&&/^(\d+)x([124])$/.exec(t);return n?{localX:Number(n[1]),vox:Number(n[2]),source:"url"}:null}catch(t){return null}}function aa(e,t){var i;const n=String(((i=e.adapterInfo)==null?void 0:i.vendor)||"").toLowerCase(),s=e.limits,o=f=>f.localX<=s.maxComputeInvocationsPerWorkgroup&&f.localX<=s.maxComputeWorkgroupSizeX&&t.nx%(f.localX*f.vox)===0;let a=ra()||xt(it({},Jn[n]||Jn.default),{source:n||"default"});o(a)||(console.warn(`[WebGPU-native] preset ${a.localX}x${a.vox} does not fit this device; using the default`),a=xt(it({},Jn.default),{source:"fallback"}));let r=0;for(const f of[256,128,64,32])if(f<=a.localX&&f>=t.cs&&t.nx%f===0&&f<=s.maxComputeInvocationsPerWorkgroup&&f*t.cs*8<=s.maxComputeWorkgroupStorageSize){r=f;break}if(!r)throw new Error(`webgpu-native: no moments workgroup fits ${t.cs} channels on this device`);return xt(it({},a),{momLX:r,vendor:n||"unknown"})}const _t=256;function Vs(e){if(typeof Float16Array!="undefined")return new Uint16Array(new Float16Array(e).buffer);const t=new Uint16Array(e.length),n=new Float32Array(1),s=new Uint32Array(n.buffer);for(let o=0;o<e.length;o++){n[0]=e[o];const a=s[0],r=a>>>16&32768,i=a>>>23&255,f=a&8388607;if(i===255){t[o]=r|31744|(f?512:0);continue}const l=i-127+15;if(l>=31){t[o]=r|31744;continue}if(l<=0){if(l<-10){t[o]=r;continue}const g=f|8388608,c=14-l;let p=g>>>c;const m=g&(1<<c)-1,h=1<<c-1;(m>h||m===h&&p&1)&&p++,t[o]=r|p;continue}let u=l<<10|f>>>13;const d=f&8191;(d>4096||d===4096&&u&1)&&u++,t[o]=r|u}return t}function ia(e,t){var n;return t.quantize8Bit?"8-bit quantized V4 runner requested":(n=e.features)!=null&&n.has("shader-f16")?t.outputType==="probability"?"probability output (CAT-lite) is not ported yet":t.enableTTA?"test-time augmentation uses the tinygrad TTA runner":t.forceFP32?"model entry forces fp32":t.webgpu_safetensor?xs(t)?null:"no descriptor in webgl2_runners/descriptors.js":"no safetensors weights":"device lacks shader-f16"}function la(e,t){const n=e.nx*e.ny*e.nz,s=e.nx/t*e.ny*e.nz;return 2*n*e.cs*2+n*2+2*n*4+(s+1)*e.cs*2*4}const Hs=new WeakMap;function ua(e,t,n){return Ce(this,null,function*(){let s=Hs.get(e);s||(s=new Map,Hs.set(e,s));const o=`${t.chan}|${t.cs}|${t.nclass}|${t.norm}|${t.affine}|${t.convBias}|${t.clsBias}|${t.activation}|${t.eps}|${n.localX}x${n.vox}x${n.momLX}`;let a=s.get(o);return a||(a=Ce(null,null,function*(){const r=e.createShaderModule({code:oa(t,n)}),i=["read-only-storage","storage","read-only-storage","uniform","storage","storage","read-only-storage","read-only-storage"],f=e.createBindGroupLayout({entries:i.map((g,c)=>({binding:c,visibility:GPUShaderStage.COMPUTE,buffer:{type:g}}))}),l=e.createPipelineLayout({bindGroupLayouts:[f]}),u=["conv","classify",...t.norm==="gn"?["moments","moments_finish","norm"]:[]],d=Object.fromEntries(yield Promise.all(u.map(g=>Ce(null,null,function*(){return[g,yield e.createComputePipelineAsync({layout:l,compute:{module:r,entryPoint:g}})]}))));return{bgl:f,pipelines:d}}).catch(r=>{throw s.delete(o),r}),s.set(o,a)),a})}function ca(e,t,n,s){return Ce(this,null,function*(){const o=xs(s);if(!o)throw new Error(`webgpu-native: no descriptor for ${s.path}`);const a=t instanceof Uint8Array?t:new Uint8Array(t),r=Zr(uo(lo(a.buffer.slice(a.byteOffset,a.byteOffset+a.byteLength))),s.classifierBias),i=co(r,{nx:_t,ny:_t,nz:_t,activation:o.activation,dilations:o.dilations});if(!i.nclass)throw new Error("webgpu-native: model has no classifier");if(i.convBias&&i.affine)throw new Error("webgpu-native: conv bias together with a GroupNorm affine is not supported");const f=aa(e,i),l=_t*_t*_t,u=l*i.cs*2,d=e.limits;if(u>d.maxStorageBufferBindingSize||u>d.maxBufferSize)throw new Error(`webgpu-native: a ${u>>>20} MiB activation exceeds this device's buffer limits`);console.log(`[WebGPU-native] ${o.name}: ${i.chan}ch (stride ${i.cs}) ${i.nclass}cls norm=${i.norm} affine=${i.affine} act=${i.activation} | preset ${f.localX}x${f.vox} (moments ${f.momLX}, ${f.source}) | ~${Math.round(la(i,f.momLX)/1048576)} MiB`);const g=Qr(r,i),{layers:c,clsFloat:p,clsBiasFloat:m}=g.offsets;e.pushErrorScope("validation"),e.pushErrorScope("out-of-memory");let h=2;try{const{bgl:M,pipelines:_}=yield ua(e,i,f),w=(q,ce)=>e.createBuffer({size:q,usage:ce}),y=GPUBufferUsage.STORAGE,$=_t/f.momLX*_t*_t,x=Vs(g.data),S=w(l*2,y|GPUBufferUsage.COPY_DST),z=w(u,y),v=w(u,y),P=w(Math.ceil(x.byteLength/16)*16,y|GPUBufferUsage.COPY_DST),k=w(($+1)*i.cs*2*4,y),B=w(l*4,y|GPUBufferUsage.COPY_SRC),C=w(l*4,GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST);e.queue.writeBuffer(P,0,x);const N=(q,ce,pe)=>{const ye=w(32,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST);return e.queue.writeBuffer(ye,0,pe),e.createBindGroup({layout:M,entries:[{binding:0,resource:{buffer:q}},{binding:1,resource:{buffer:ce}},{binding:2,resource:{buffer:P}},{binding:3,resource:{buffer:ye}},{binding:4,resource:{buffer:k}},{binding:5,resource:{buffer:B}},{binding:6,resource:{buffer:P}},{binding:7,resource:{buffer:q}}]})},j=q=>{const ce=new Uint32Array(8);return ce[0]=q.dilation|0,ce[1]=q.weightOff>>>0,ce[2]=q.affineOff>>>0,ce[3]=q.biasOff>>>0,ce[4]=q.inChannels>>>0,ce[5]=q.inStride>>>0,ce[6]=$,ce},Y=[];let W=S,D=z;c.forEach((q,ce)=>{const pe=ce===0;Y.push(N(W,D,j({dilation:i.dilations[ce],weightOff:q.wq*4,affineOff:q.affQ!==void 0?q.affQ*4:0,biasOff:q.biasQ!==void 0?q.biasQ*4:q.affBiasQ!==void 0?q.affBiasQ*4:0,inChannels:pe?1:i.cs,inStride:pe?1:i.cs}))),W=D,D=D===z?v:z});const O=N(W,D,j({weightOff:p,biasOff:m>=0?m:0}));h=0;const Z=yield e.popErrorScope(),J=yield e.popErrorScope();if(Z||J)throw new Error(`webgpu-native setup failed: ${(Z||J).message}`);const F=_t/(f.localX*f.vox),V=_t/f.localX,K=_t/f.momLX;return function(ce){return Ce(this,null,function*(){if(ce.length!==l)throw new Error(`webgpu-native: input has ${ce.length} voxels, expected ${l}`);e.pushErrorScope("validation"),e.queue.writeBuffer(S,0,Vs(ce));for(const ee of Y){const le=e.createCommandEncoder(),A=le.beginComputePass();A.setBindGroup(0,ee),A.setPipeline(_.conv),A.dispatchWorkgroups(F,_t,_t),i.norm==="gn"&&(A.setPipeline(_.moments),A.dispatchWorkgroups(K,_t,_t),A.setPipeline(_.moments_finish),A.dispatchWorkgroups(1,1,1),A.setPipeline(_.norm),A.dispatchWorkgroups(V,_t,_t)),A.end(),e.queue.submit([le.finish()])}const pe=e.createCommandEncoder(),ye=pe.beginComputePass();ye.setBindGroup(0,O),ye.setPipeline(_.classify),ye.dispatchWorkgroups(V,_t,_t),ye.end(),pe.copyBufferToBuffer(B,0,C,0,l*4),e.queue.submit([pe.finish()]),yield C.mapAsync(GPUMapMode.READ);const be=new Float32Array(new Uint32Array(C.getMappedRange()));C.unmap();const we=yield e.popErrorScope();if(we)throw new Error(`webgpu-native inference failed: ${we.message}`);return[be]})}}finally{for(;h-- >0;)yield e.popErrorScope().catch(()=>{})}})}const fa={grayMatter:[2,6,7,8,9,10,14,15,16,17],whiteMatter:[1,5],csf:[3,4,11,12]};function Mn(e,t,n,s,o){var r;const a=Number((r=e[t])!=null?r:n);if(!Number.isFinite(a)||a<s||a>o)throw new Error(`${t} must be between ${s} and ${o}, got ${e[t]}`);return a}function es(e,t,n){let s=0;for(const o of e||[]){if(!Number.isInteger(o)||o<0||o>=t||o>=32)throw new Error(`Invalid ${n} tissue label ${o} for ${t} classes`);s=(s|1<<o)>>>0}return s}function pa(e,t){if(!Number.isInteger(t)||t<2||t>32)throw new Error(`Native WebGL2 grouped probabilities require 2..32 classes, got ${t}`);const n=it(it({},fa),e.probabilityGroups||{});return{temperature:Mn(e,"softmaxTemperature",1,1e-6,1e6),supportTemperature:Mn(e,"brainSupportTemperature",1,1e-6,1e6),supportPower:Mn(e,"brainSupportPower",1,1e-6,1e6),sigma:Mn(e,"partialVolumeSigma",0,0,2),grayMask:es(n.grayMatter,t,"gray-matter"),whiteMask:es(n.whiteMatter,t,"white-matter"),csfMask:es(n.csf,t,"CSF")}}function ts(e,t,n,s,o,a){const[r,i,f]=n,l=r*i,u=o.length-1>>1;for(let d=0;d<f;d++)for(let g=0;g<i;g++)for(let c=0;c<r;c++){const p=d*l+g*r+c,m=s===1?c:s===r?g:d,h=s===1?r:s===r?i:f;let M=0;for(let _=-u;_<=u;_++){const w=m+_;w<0||w>=h||(M+=o[_+u]*e[p+_*s])}t[p]=M/a}}function ma(e,t,n,s){const[o,a,r]=n,i=o*a*r;if(!Array.isArray(e)||e.length!==3||e.some(c=>c.length!==i)||t.length!==i)throw new Error("Native WebGL2 tissue-prior dimensions do not match");const f=Mn(s,"partialVolumeSigma",0,0,2),l=Mn(s,"brainSupportPower",1,1e-6,1e6);let u=null,d=null,g=1;if(f>0){const c=Math.max(1,Math.round(3*f));d=new Float32Array(c*2+1),g=0;for(let p=-c;p<=c;p++){const m=Math.exp(-.5*p*p/(f*f));d[p+c]=m,g+=m}u=new Float32Array(i)}for(const c of e){let p=c;d&&(ts(c,u,n,1,d,g),ts(u,c,n,o,d,g),ts(c,u,n,o*a,d,g),p=u);for(let m=0;m<i;m++){const h=Math.pow(Math.max(0,Math.min(1,t[m])),l);c[m]=Math.max(0,Math.min(1,p[m]*h))}}return e}const T=256,pt=64,Vt=8,ct=pt+2*Vt,pn=ct*4,Ye=T*64,In=T*T*2,Xn=9216,fo=Xn*8,fs=[1,3,5,7,13,19,31,19,13,7,5,3,1],ut=(e,t)=>Array.from({length:e},(n,s)=>t(s)).join(""),po=280,mo=150,da=55,ns=112;let ps=0;function ms(e,t){const n=Math.floor(e/4),s=e%4,o=s===0?n:n+1,a=n,r=s*8,i=s===0?0:32-r;return(e&63|(o&15)<<6|(a&15)<<10|(r&31)<<14|(i&31)<<19|(t?1:0)<<24)>>>0}function go(e){var t;if(e!=null&&e.webgpuExecMode)return String(e.webgpuExecMode).toLowerCase();try{const n=new URLSearchParams(((t=globalThis.location)==null?void 0:t.search)||"").get("webgpuExec");if(n)return n.toLowerCase()}catch(n){}return""}function ga(e){var n,s;if(!e)return"";if(typeof e.__glRenderer=="string")return e.__glRenderer;let t="";try{const o=typeof navigator!="undefined"&&/Firefox/i.test(navigator.userAgent||""),a=typeof OffscreenCanvas!="undefined"?new OffscreenCanvas(1,1):typeof document!="undefined"?document.createElement("canvas"):null,r=(n=a==null?void 0:a.getContext)==null?void 0:n.call(a,"webgl2",{powerPreference:"high-performance"});if(r){if(o)t=String(r.getParameter(r.RENDERER)||"");else{const i=r.getExtension("WEBGL_debug_renderer_info");t=String((i?r.getParameter(i.UNMASKED_RENDERER_WEBGL):r.getParameter(r.RENDERER))||"")}(s=r.getExtension("WEBGL_lose_context"))==null||s.loseContext()}}catch(o){}return e.__glRenderer=t,t}function Gn(e){var g;const t=(e==null?void 0:e.__adapterInfo)||(e==null?void 0:e.adapterInfo)||{},n=String(t.vendor||"").toLowerCase(),s=String(t.architecture||"").toLowerCase(),o=typeof navigator!="undefined"&&navigator.userAgent||"",a=typeof navigator!="undefined"&&(((g=navigator.userAgentData)==null?void 0:g.platform)||navigator.platform||"")||"",r=n==="apple"||/Mac|iPhone|iPad|iPod/i.test(`${a} ${o}`)&&!["intel","amd","nvidia","microsoft"].includes(n),i=!r&&(/Win/i.test(a)||/Windows/i.test(o)),f=i&&!n?ga(e):String((e==null?void 0:e.__glRenderer)||""),l=`${t.device||""} ${t.description||""} ${f}`,u=n||(/\bintel\b/i.test(f)?"intel":/\bmicrosoft\b|\bbasic render\b/i.test(f)?"microsoft":""),d=i&&(u==="microsoft"||u==="intel"&&!/\bArc\b/i.test(l)&&(/^gen-(9|11|12lp)/i.test(s)||/(?:UHD|HD)\s+Graphics|Iris(?:\(R\))?\s*(?:Plus|Xe)|Pentium|Celeron/i.test(l)));return{vendor:u,arch:s,desc:l,isApple:r,isWindows:i,isWindowsSharedIgpu:d}}function _o(e,t){const n=go(t);if(n==="single"||n==="pipelined"||n==="paced"||n==="calibrate")return n;if(n==="chunked")return"paced";const s=Gn(e);return s.isApple?"single":s.isWindows?e!=null&&e.__v4WinCalibrated?e.__v4WinFast?"pipelined":"paced":"calibrate":"pipelined"}function bo(e,t){const n=go(t);return n==="single"?!1:n==="paced"||n==="chunked"||n==="calibrate"?!0:n==="pipelined"?!1:Gn(e).isWindows}function ho(e,t,n){return(n==null?void 0:n.forceLowMem128)===!1?!1:Gn(e).isWindowsSharedIgpu&&t.cs>=24&&t.cs%4===0}function wo(e,t){var a,r;if(!((r=(a=e==null?void 0:e.features)==null?void 0:a.has)!=null&&r.call(a,"subgroups"))||t!=null&&t.disableSubgroups)return"none";if(t!=null&&t.forceSubgroupMode)return t.forceSubgroupMode;const n=e.__adapterInfo||e.adapterInfo||{},s=n.subgroupMinSize|0,o=n.subgroupMaxSize|0;return s===32&&o===32?"sg32":s===64&&o===64?"sg64":s>=32&&o<=64?"sg32_64":s>=8&&o<=32?"sg_small":"none"}function vo(e){switch(e){case"sg32":return"subgroups32";case"sg64":return"subgroups64-bf";case"sg32_64":return"subgroups32-64";case"sg_small":return"subgroups8-32";default:return"shared-8KiB"}}function xo(){return typeof requestAnimationFrame!="function"?new Promise(e=>setTimeout(e,0)):new Promise(e=>{let t=!1;const n=()=>{t||(t=!0,e())},s=setTimeout(n,16);requestAnimationFrame(()=>{clearTimeout(s),setTimeout(n,0)})})}function yo(e,t,n){let s=t,o=null,a=null,r=performance.now(),i=performance.now();function f(m,h,M){return Ce(this,arguments,function*(u,d,g,{forceUiYield:c=!1,emitTick:p=!0}={}){o&&(yield o,o=null);const _=performance.now();e.queue.submit([u.finish()]);const w=e.createCommandEncoder(),y=e.queue.onSubmittedWorkDone().then(()=>{const x=performance.now(),S=Math.max(_,r),z=Math.max(0,x-S);x>r&&(r=x),d>=256&&z>.2&&(s=Math.max(.005,Math.min(2,.7*s+.3*(z/d))),e.__v4MsPerStrip=s)});o=a,a=y,p&&n&&n(g);const $=performance.now();return(c||$-i>=da)&&(yield xo(),i=performance.now()),w})}function l(){return Ce(this,null,function*(){o&&(yield o,o=null)})}return{submitChunk:f,waitBeforeFinalSubmit:l,getMsPerStrip:()=>s,setMsPerStrip:u=>{s=Math.max(.005,Math.min(2,u)),e.__v4MsPerStrip=s,r=performance.now()}}}function ys(e,t,n){const s=e.isFull?Ye:e.mainStrips.length,o=e.isFull||!e.extStrips?0:e.extStrips.length,a=t+1<n?e.isFull?Ye:e.normStrips?e.normStrips.length:0:0,r=Math.max(16,Math.round(a*.12));return t===0?{convWork:Math.max(64,Math.round(s*.12)),normWork:r}:{convWork:s+o,normWork:r}}function $o(e,t){let n=0;for(let o=0;o<t;o++){const a=ys(e.layers[o],o,t);n+=a.convWork+a.normWork}const s=e.clsSkipped?e.clsStrips.length:Ye;return n+=Math.max(64,Math.round(s*.2)),Math.max(1,n)}const So=new Float32Array(1),_a=new Uint32Array(So.buffer);function ds(e){So[0]=e;const t=_a[0],n=t>>>16&32768,s=t>>>23&255;let o=t&8388607;if(s===255)return n|31744|(o?512:0);let a=s-127+15;return a<=0?a<-10?n:(o=(o|8388608)>>>1-a,n|o+4096>>>13):a>=31?n|31744:n|Math.min(31744,(a<<10)+(o+4096>>>13))}function ba(e){const t=new Uint16Array(e.length);for(let n=0;n<e.length;n++)t[n]=ds(e[n]);return t}const un=new Map,ha=12,ko=new WeakMap,wa=new WeakMap;function va(e){let t=2166136261,n=2654435769;const s=e.byteLength>>>2;if((e.byteOffset&3)===0){const o=new Uint32Array(e.buffer,e.byteOffset,s);for(let a=0;a<o.length;a++){const r=o[a];t=Math.imul(t^r,16777619)>>>0,n=Math.imul(n^(r<<13|r>>>19),2246822507)>>>0}}else for(let o=0;o<s*4;o+=4){const a=e[o]|e[o+1]<<8|e[o+2]<<16|e[o+3]<<24;t=Math.imul(t^a,16777619)>>>0,n=Math.imul(n^(a<<13|a>>>19),2246822507)>>>0}for(let o=s*4;o<e.byteLength;o++)t=Math.imul(t^e[o],16777619)>>>0;return`${e.byteLength}_${t.toString(16)}_${n.toString(16)}`}function xa(e,t,n,s){const o=s!=null&&s.classifierBias?JSON.stringify(s.classifierBias):"",a=`${va(e)}|${n.chan}|${n.cs}|${n.nclass}|${n.norm}|${n.eps}|${o}`;if(un.has(a)){const i=un.get(a);return un.delete(a),un.set(a,i),i}const r=ka(t,n);if(un.size>=ha){const i=un.keys().next().value;un.delete(i)}return un.set(a,r),r}function $s(e,t){let n=e.get(t);return n||(n=new Map,e.set(t,n)),n}function Dt(e,t,n){let s=e.get(t);return s||(s=n().catch(o=>{throw e.delete(t),o}),e.set(t,s)),s}function jn(e,t){let n=0;return{alloc:(o,a)=>{const r=Math.max(16,Math.ceil(o/16)*16),i=e.createBuffer({size:r,usage:a});return t.push(i),n+=r,i},getBytes:()=>n,resetBytes:()=>{n=0}}}const rn=new WeakMap;function xn(e){const t=e?rn.get(e):null;if(t){rn.delete(e),t.inUse=!1;for(const n of t.buffers)n.destroy();t.buffers.length=0}}function Mo(e,t,n){const s=rn.get(e);if(s){if(s.key===t&&!s.inUse)return s.inUse=!0,s;if(s.inUse){const r=n();return xt(it({key:t},r),{inUse:!0,pooled:!1})}rn.delete(e);for(const r of s.buffers)r.destroy();s.buffers.length=0}const o=n(),a=xt(it({key:t},o),{inUse:!0,pooled:!0});return rn.set(e,a),a}function Rt(e,t,n){return e.createShaderModule({label:t,code:n})}function Ss(e,t,n,s,o){return Ce(this,null,function*(){const a=e.createBindGroupLayout({entries:o.map((r,i)=>typeof r=="string"?{binding:i,visibility:GPUShaderStage.COMPUTE,buffer:{type:r}}:{binding:i,visibility:GPUShaderStage.COMPUTE,buffer:r})});try{const r=yield e.createComputePipelineAsync({label:t,layout:e.createPipelineLayout({bindGroupLayouts:[a]}),compute:{module:n,entryPoint:s}});return{bgl:a,pipe:r}}catch(r){if(n!=null&&n.getCompilationInfo){const i=yield n.getCompilationInfo().catch(()=>null),f=i?i.messages.filter(l=>l.type==="error"):[];if(f.length)throw new Error(`meshnet_fast_v4 [${t}] WGSL error: `+f.map(l=>`L${l.lineNum}:${l.linePos} ${l.message}`).join(" | "))}throw r}})}function gs(e,t){const n=t?`enable f16;
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
  let dstX4 = ${Vt}u + wid.x * 8u + x4Loc;
  for (var s : u32 = 0u; s < 4u; s = s + 1u) {
    let zl = s * 8u + zOff;
    let r = zl * 33u + xBase;
    inp_4[((Z0 + zl) * 256u + Y) * ${ct}u + dstX4] =
      ${o}(${s}(sh[r]), ${s}(sh[r + 1u]), ${s}(sh[r + 2u]), ${s}(sh[r + 3u]));
  }
}`}function Ao(){return`
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
}`}function ya(){return`
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
}`}function $a(){return`
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
}`}function Xs(){return`
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
}`}function sn(e,t,n,s,o){return Ce(this,null,function*(){const a=$s(wa,e);let r=a.get(t);return r||(r=Ce(null,null,function*(){const i=Rt(e,t,n());return Ss(e,t,i,s,o)}).catch(i=>{throw a.delete(t),i}),a.set(t,r)),r})}function js(e,t,n,s,o){t.fill(0);const a=T*T*T;if(!(o&&e[0]===s&&e[a-1]===s))return{hasBgSkip:!1};if(n.fill(0),(e instanceof Uint8Array||e instanceof Uint8ClampedArray)&&(e.byteOffset&3)===0&&Number.isInteger(s)&&s>=0&&s<=255){const f=new Uint32Array(e.buffer,e.byteOffset,a>>>2),l=new Uint32Array(n.buffer,n.byteOffset,T*T>>>2),u=(s&255)*16843009>>>0;let d=0;for(let g=0;g<T;g++)for(let c=0;c<16384;c++)l[c]|=f[d++]^u}else{let f=0;const l=T*T;for(let u=0;u<T;u++)for(let d=0;d<l;d++,f++)e[f]!==s&&(n[d]=1)}let i=0;for(let f=0;f<T;f++){const l=f*T;for(let u=0;u<T;u++)n[l+u]!==0&&(t[u*T+f]=1,i++)}return i===0||i>=6e4?{hasBgSkip:!1}:{hasBgSkip:!0}}function Po(e){return e?`${e.grayMask}_${e.whiteMask}_${e.csfMask}_${e.temperature}_${e.supportTemperature}`:"seg"}function zo(u,d,g,c,p,m,h){return Ce(this,arguments,function*(e,t,n,s,o,a,r,{includeCls:i=!0,sequential:f=!1,shouldAbort:l=null}={}){var ae;const M=$s(ko,e),_=s?1:0,w=o||"none",y=r.useUniformWeff?1:0,$=(R,fe,re,ne)=>Ss(e,R,fe,re,ne),x=["storage","storage","storage","storage"],S=["read-only-storage","storage","storage","storage","storage","storage","read-only-storage","storage","uniform","uniform","uniform"],z=["read-only-storage","read-only-storage","storage","storage","read-only-storage","uniform"],v=["storage","storage","storage","storage","read-only-storage","read-only-storage",{type:"uniform",hasDynamicOffset:!0,minBindingSize:32}],P=["storage","storage","storage","storage","read-only-storage","read-only-storage","read-only-storage","uniform"],k=["read-only-storage","read-only-storage","read-only-storage","read-only-storage","storage","storage",r.useUniformWeff?"uniform":"read-only-storage","read-only-storage",{type:"uniform",hasDynamicOffset:!0,minBindingSize:32}],B=["read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","storage","uniform","uniform","uniform"],C=`128|init|${t.cs}|${t.activation}|${_}`,N=`128|conv0|${t.cs}|${t.dilations[0]}|${t.norm}|${_}|${w}`,j=`128|prep|${t.chan}|${t.cs}|${t.activation}|${t.norm}|${_}`,Y=`128|flush|${t.cs}|${_}`,W=`128|norm|${t.cs}|${t.activation}|${t.norm}|${_}`,D=`128|conv|${t.chan}|${t.cs}|${t.activation}|${t.norm}|${y}|${_}|${w}`,O=`128|cls|${t.chan}|${t.cs}|${t.nclass}|${(ae=n==null?void 0:n.clsK4)!=null?ae:0}|${r.numConvs}|${t.activation}|${t.norm}|${_}|${Po(a)}`,Z=()=>Dt(M,C,()=>{const R=Rt(e,"init_act8_128",r.initActWgsl());return $("init_act8_128",R,"main",x)}),J=()=>Dt(M,N,()=>Ce(null,null,function*(){const R=Rt(e,"conv0_128",r.conv0Wgsl()),fe=yield Promise.all(r.halfPass0?[$("conv0_128_lo",R,"main_lo",S),$("conv0_128_hi",R,"main_hi",S),$("conv0_128_bg_lo",R,"main_bg_lo",S),$("conv0_128_bg_hi",R,"main_bg_hi",S)]:[$("conv0_128",R,"main",S),$("conv0_128_bg",R,"main_bg",S)]);return r.halfPass0?{lo:fe[0],hi:fe[1],bgLo:fe[2],bgHi:fe[3]}:{main:fe[0],bg:fe[1]}})),F=()=>Dt(M,j,()=>Ce(null,null,function*(){const R=Rt(e,"prep_128",r.prepWgsl()),[fe,re]=yield Promise.all([$("moments_finish_128",R,"moments_finish",z),$("prep_weff_128",R,"prep_weff",z)]);return{pMomFin:fe,pPrepW:re}})),V=()=>Dt(M,Y,()=>{const R=Rt(e,"flush_128",r.flushWgsl());return $("flush_stage_128",R,"main",v)}),K=()=>Dt(M,W,()=>Ce(null,null,function*(){const R=Rt(e,"norm_128",r.normWgsl()),[fe,re]=yield Promise.all([$("norm_quant8_128",R,"main",P),$("norm_halo_fill_128",R,"norm_halo_fill",P)]);return{pNorm:fe,pNormHalo:re}})),q=()=>i?Dt(M,O,()=>{const R=Rt(e,"cls_128",r.clsWgsl());return $("classify_v4_128",R,"main",B)}):Promise.resolve(null),ce=()=>Dt(M,D,()=>Ce(null,null,function*(){const R=Rt(e,"conv_128",r.convWgsl());if(r.halfPassConv){const[Q,se,G,Se,_e,Be]=yield Promise.all([$("conv_128_lo",R,"main_lo",k),$("conv_128_hi",R,"main_hi",k),$("conv_128_ext_lo",R,"main_ext_lo",k),$("conv_128_ext_hi",R,"main_ext_hi",k),$("conv_128_bg_lo",R,"main_bg_lo",k),$("conv_128_bg_hi",R,"main_bg_hi",k)]);return{lo:Q,hi:se,extLo:G,extHi:Se,bgLo:_e,bgHi:Be}}const[fe,re,ne]=yield Promise.all([$("conv_128",R,"main",k),$("conv_128_ext",R,"main_ext",k),$("conv_128_bg",R,"main_bg",k)]);return{main:fe,ext:re,bg:ne}}));if(f){for(const R of[Z,F,V,K,J,ce,q]){if(l!=null&&l())return null;yield R()}return null}const[pe,ye,be,we,ee,le,A]=yield Promise.all([Z(),J(),F(),V(),K(),q(),ce()]);return{pInit:pe,pMomFin:be.pMomFin,pPrepW:be.pPrepW,pFlush:we,pNorm:ee.pNorm,pNormHalo:ee.pNormHalo,pCls:le,pConv0:ye,pConv:A}})}function Co(d,g,c,p,m,h,M,_){return Ce(this,arguments,function*(e,t,n,s,o,a,r,i,{includeCls:f=!0,sequential:l=!1,shouldAbort:u=null}={}){var ae;const w=$s(ko,e),y=s?1:0,$=o||"none",x=a?1:0,S=i.useUniformWeff?1:0,z=i.chunkableStd?1:0,v=(R,fe,re,ne)=>Ss(e,R,fe,re,ne),P=["storage","storage"],k=["read-only-storage","storage","storage","read-only-storage","read-only-storage","storage","storage","read-only-storage","uniform"],B=["read-only-storage","read-only-storage","storage","storage","storage","storage","read-only-storage","uniform"],C=["storage","storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","uniform"],N=["read-only-storage","read-only-storage","storage","storage","storage","storage",i.useUniformWeff?"uniform":"read-only-storage","read-only-storage",i.chunkableStd?{type:"uniform",hasDynamicOffset:!0,minBindingSize:32}:"uniform"],j=["read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","storage","read-only-storage","uniform"],Y=`std|init|${t.cs}|${t.activation}|${y}|${x}`,W=`std|conv0|${t.cs}|${t.dilations[0]}|${t.norm}|${y}|${$}|${x}`,D=`std|prep|${t.chan}|${t.cs}|${t.activation}|${t.norm}|${y}|${x}`,O=`std|norm|${t.cs}|${t.activation}|${t.norm}|${y}|${x}`,Z=`std|conv|${t.chan}|${t.cs}|${t.activation}|${t.norm}|${S}|${y}|${$}|${x}${z?"|chk1":""}`,J=`std|cls|${t.chan}|${t.cs}|${t.nclass}|${(ae=n==null?void 0:n.clsK4)!=null?ae:0}|${t.activation}|${t.norm}|${y}|${x}|${Po(r)}`,F=()=>Dt(w,Y,()=>{const R=Rt(e,"init_act8",i.initActWgsl());return v("init_act8",R,"main",P)}),V=()=>Dt(w,W,()=>Ce(null,null,function*(){const R=Rt(e,"conv0",i.conv0Wgsl()),fe=yield Promise.all(i.halfPass0?[v("conv0_lo",R,"main_lo",k),v("conv0_hi",R,"main_hi",k),v("conv0_bg_lo",R,"main_bg_lo",k),v("conv0_bg_hi",R,"main_bg_hi",k)]:[v("conv0",R,"main",k),v("conv0_bg",R,"main_bg",k)]);return i.halfPass0?{lo:fe[0],hi:fe[1],bgLo:fe[2],bgHi:fe[3]}:{main:fe[0],bg:fe[1]}})),K=()=>Dt(w,D,()=>Ce(null,null,function*(){const R=Rt(e,"prep",i.prepWgsl()),[fe,re]=yield Promise.all([v("moments_finish",R,"moments_finish",B),v("prep_weff",R,"prep_weff",B)]);return{pMomFin:fe,pPrepW:re}})),q=()=>Dt(w,O,()=>Ce(null,null,function*(){const R=Rt(e,"norm",i.normWgsl()),[fe,re]=yield Promise.all([v("norm_quant8",R,"main",C),v("norm_halo_fill",R,"norm_halo_fill",C)]);return{pNorm:fe,pNormHalo:re}})),ce=()=>f?Dt(w,J,()=>{const R=Rt(e,"cls",i.clsWgsl());return v("classify_v4",R,"main",j)}):Promise.resolve(null),pe=()=>Dt(w,Z,()=>Ce(null,null,function*(){const R=Rt(e,"conv",i.convWgsl());if(i.halfPassConv){const[ne,Q,se,G]=yield Promise.all([v("conv_lo",R,"main_lo",N),v("conv_hi",R,"main_hi",N),v("conv_ext_lo",R,"main_ext_lo",N),v("conv_ext_hi",R,"main_ext_hi",N)]);return{lo:ne,hi:Q,extLo:se,extHi:G}}const[fe,re]=yield Promise.all([v("conv",R,"main",N),v("conv_ext",R,"main_ext",N)]);return{main:fe,ext:re}}));if(l){for(const R of[F,K,q,V,pe,ce]){if(u!=null&&u())return null;yield R()}return null}const[ye,be,we,ee,le,A]=yield Promise.all([F(),V(),K(),q(),ce(),pe()]);return{pInit:ye,pMomFin:we.pMomFin,pPrepW:we.pPrepW,pNorm:ee.pNorm,pNormHalo:ee.pNormHalo,pCls:le,pConv0:be,pConv:A}})}function Ys(e,t,n,s,o){n.fill(0);const a=o&&e[0]===0&&e[e.length-1]===0;let r=0,i=0;if(!a){if(s)for(let f=0;f<T;f++){const l=f*T*pn;for(let u=0;u<T;u++){let d=l+u*pn+32;for(let g=0;g<T;g++,i++,d++){const c=e[i];t[d]=c===0?0:ds(c)}}}else for(let f=0;f<T;f++){const l=f*T*pn;for(let u=0;u<T;u++){const d=f*T*T+u*T;t.set(e.subarray(d,d+T),l+u*pn+32)}}return{hasBgSkip:!1}}for(let f=0;f<T;f++){const l=f*T*pn;for(let u=0;u<T;u++){let d=!1,g=l+u*pn+32;for(let c=0;c<T;c++,i++,g++){const p=e[i];p!==0?(t[g]=s?ds(p):p,d=!0):t[g]=0}d&&(n[f*T+u]=1,r++)}}return r===0||r>=6e4?{hasBgSkip:!1}:{hasBgSkip:!0}}function qn(e,t){const n=new Uint8Array(T*T);for(let s=0;s<T;s++){const o=s*T,a=s-t,r=s+t;for(let i=0;i<T;i++){if(!e[o+i])continue;const f=i-t,l=i+t;if(a>=0){const u=a*T;f>=0&&(n[u+f]=1),n[u+i]=1,l<T&&(n[u+l]=1)}if(f>=0&&(n[o+f]=1),n[o+i]=1,l<T&&(n[o+l]=1),r>=0&&r<T){const u=r*T;f>=0&&(n[u+f]=1),n[u+i]=1,l<T&&(n[u+l]=1)}}}return n}function Sa(e,t){const n=new Uint8Array(T*T),s=new Uint8Array(T*T),o=new Int32Array(T+1);for(let a=0;a<T;a++){const r=a*T;for(let i=0;i<T;i++)o[i+1]=o[i]+e[r+i];for(let i=0;i<T;i++)o[Math.min(T-1,i+t)+1]-o[Math.max(0,i-t)]>0&&(n[r+i]=1)}for(let a=0;a<T;a++){for(let r=0;r<T;r++)o[r+1]=o[r]+n[r*T+a];for(let r=0;r<T;r++)o[Math.min(T-1,r+t)+1]-o[Math.max(0,r-t)]>0&&(s[r*T+a]=1)}return s}function ss(e){const t=new Uint8Array(Ye);for(let n=0;n<T;n++){const s=n*T,o=n*64;for(let a=0;a<64;a++){const r=s+(a<<2);e[r]|e[r+1]|e[r+2]|e[r+3]&&(t[o+a]=1)}}return t}function On(e){const t=new Uint8Array(T*T);for(let n=0;n<T;n++){const s=n*T,o=n*64;for(let a=0;a<64;a++)if(e[o+a]){const r=s+(a<<2);t[r]=1,t[r+1]=1,t[r+2]=1,t[r+3]=1}}return t}function En(e){let t=0;for(let o=0;o<Ye;o++)t+=e[o];const n=new Uint32Array(t);let s=0;for(let o=0;o<T;o++){const a=o*64;for(let r=0;r<64;r++)e[a+r]&&(n[s++]=o<<8|r)}return n}function cn(e){let t=0;for(let n=0;n<e.length;n++)t+=e[n];return t}function Ks(e){const t=new Uint8Array(Ye);if(e===1024)for(let n=0;n<32;n++)for(let s=0;s<32;s++){const o=n*8+(n*3+s*5&7),a=s*2+(n+s&1);t[o*64+a]=1}else if(e===512)for(let n=0;n<32;n++)for(let s=0;s<16;s++){const o=n*8+(n*3+s*5&7),a=s*4+(n+s*3&3);t[o*64+a]=1}else for(let n=0;n<16;n++)for(let s=0;s<16;s++){const o=n*16+(n*7+s*3&15),a=s*4+(n+s*3&3);t[o*64+a]=1}return t}function Bo(e,t,n,s){const o=n.length,a=()=>({isFull:!0,mode:"full",writtenMask:null,computedMask:null,mainStrips:null,extStrips:null,nMomExt:0,normStrips:null,haloRows:null,bgStrip:null,extWeight:0});if(!s||!t.hasBgSkip)return{clsSkipped:!1,clsStrips:null,layers:Array.from({length:o},a)};const r=ss(Sa(e,3)),i=cn(r)<15800,f=i?En(r):null,l=new Array(o);let u=null;for(let _=0;_<o;_++){const w=n[_],y=qn(_===0?e:u,w);if(_>0)for(let x=0;x<T;x++){const S=x<w||x>=T-w,z=x*T;for(let v=0;v<T;v++)(S||v<w||v>=T-w)&&(y[z+v]=1)}u=y;const $=new Uint8Array(Ye);for(let x=0;x<T;x++){const S=x*T,z=x*64;for(let v=0;v<64;v++){const P=S+(v<<2);y[P]|y[P+1]|y[P+2]|y[P+3]||($[z+v]=1)}}l[_]=$}const d=new Array(o);d[o-1]=r;for(let _=o-2;_>=0;_--)d[_]=ss(qn(On(d[_+1]),n[_+1]));const g=i&&o>=4&&n[o-1]<=2&&n[o-2]<=4&&n[o-3]<=6,c=Math.max(1,o-3),p=new Array(o).fill(null),m=new Array(o).fill(null),h=new Array(o).fill(null);if(g){const w=(Ye-cn(d[o-1]))/Ye>=.52?256:512,y=1024,$=Ks(w),x=Ks(y),S=d[o-1],z=new Uint8Array(Ye);let v=0;for(let P=0;P<Ye;P++)$[P]&&!S[P]&&(z[P]=1,v++);if(v>0&&v<=Xn&&cn(S)+v<=15360){p[o-1]=z,m[o-1]=new Uint8Array(Ye),h[o-1]=$;for(let P=o-2;P>=c;P--){const k=new Uint8Array(Ye),B=d[P+1],C=p[P+1];for(let J=0;J<Ye;J++)k[J]=B[J]|C[J];const N=ss(qn(On(k),n[P+1])),j=new Uint8Array(Ye),Y=d[P];for(let J=0;J<Ye;J++)N[J]&&!Y[J]&&(j[J]=1);const W=P===c?x:$,D=new Uint8Array(Ye);let O=0,Z=0;for(let J=0;J<Ye;J++)(j[J]||W[J])&&!Y[J]&&(D[J]=1,O++,W[J]&&Z++);if(Z===0||O>Xn||cn(Y)+O>15360){const J=P+1,F=d[J],V=m[J],K=new Uint8Array(Ye);let q=0;for(let ce=0;ce<Ye;ce++)(V[ce]||x[ce])&&!F[ce]&&(K[ce]=1,q++);q<=Xn&&cn(F)+q<=15360&&(p[J]=K,h[J]=x);break}m[P]=j,p[P]=D,h[P]=W}}}const M=new Array(o);for(let _=0;_<o;_++){const w=cn(l[_]),y=Ye-w,$=p[_]!==null,x=$?cn(d[_])+cn(p[_]):1/0;if(w>=512&&y<=x){const S=new Uint8Array(Ye);let z=-1;for(let B=0;B<Ye;B++)l[_][B]?z<0&&(z=B):S[B]=1;const v=S.slice();v[z]=1;const P={z:z>>>6,yWg:z&63,packed:z>>>6<<8|z&63},k=En(S);M[_]={isFull:!1,mode:"rpure",writtenMask:S,computedMask:v,mainStrips:k,extStrips:_===0?null:new Uint32Array([P.packed]),nMomExt:_===0?0:1,normStrips:k,haloRows:null,bgStrip:P,extWeight:w}}else if($&&x<=15360){const S=d[_],z=p[_],v=m[_],P=h[_],k=En(S),B=[],C=[];for(let D=0;D<T;D++){const O=D*64;for(let Z=0;Z<64;Z++){const J=O+Z;if(!z[J])continue;const F=D<<8|Z;P[J]?B.push(F):C.push(F)}}const N=B.length;if(N===0){M[_]=a();continue}const j=new Uint32Array(B.length+C.length);j.set(B,0),j.set(C,B.length);const Y=new Uint8Array(Ye),W=new Uint8Array(Ye);for(let D=0;D<Ye;D++)Y[D]=S[D]|v[D],W[D]=S[D]|z[D];M[_]={isFull:!1,mode:"bwd",writtenMask:Y,computedMask:W,mainStrips:k,extStrips:j,nMomExt:N,normStrips:_+1<o?En(Y):null,haloRows:null,bgStrip:null,extWeight:(Ye-k.length)/N}}else M[_]=a()}for(let _=o-2;_>=0;_--)M[_].mode==="bwd"&&M[_+1].mode!=="bwd"&&(M[_]=a());for(let _=0;_<o-1;_++){const w=M[_];if(w.mode!=="rpure")continue;const y=M[_+1],$=y.isFull?new Uint8Array(T*T).fill(1):qn(On(y.computedMask),n[_+1]),x=On(w.writtenMask),S=[];for(let z=0;z<T;z++){const v=z*T;for(let P=0;P<T;P++)$[v+P]&&!x[v+P]&&S.push(z<<8|P)}S.length>0&&(w.haloRows=new Uint32Array(S))}return{clsSkipped:i,clsStrips:f,layers:M}}function ka(e,t){const n=t.chan,s=t.cs,o=s/4,a=t.nclass,r=Math.ceil(a/4),{convs:i,affines:f,classifier:l}=e,u=i.length,d=27*o,g=9*s*3*o,c=s*r,p=(d+(u-1)*g+c)*4,m=new Float32Array(p),h=4*s,M=u*h,_=new Float32Array(M+r*4),w=(x,S,z)=>{if(t.norm!=="gn"||S>=n)return 1;const v=i[x],P=z*27,k=S*P;let B=0;for(let C=0;C<P;C++)B+=Math.abs(v.w[k+C]);return Math.max(B/16,1e-6)};for(let x=0;x<i[0].outC;x++){const S=w(0,x,i[0].inC),z=1/S;for(let v=0;v<27;v++)m[v*s+x]=i[0].w[x*27+v]*z;_[2*s+x]=t.eps/(S*S),i[0].bias&&(_[3*s+x]=i[0].bias[x])}for(let x=i[0].outC;x<s;x++)_[2*s+x]=t.eps;for(let x=1;x<u;x++){const S=i[x],z=(d+(x-1)*g)*4,v=x*h;for(let P=0;P<S.outC;P++){const k=w(x,P,S.inC),B=1/k,C=P>>>2,N=P&3;for(let j=0;j<9;j++)for(let Y=0;Y<S.inC;Y++)for(let W=0;W<3;W++){const D=j*3+W,O=z+(((j*s+Y)*3+W)*o+C)*4+N;m[O]=S.w[(P*S.inC+Y)*27+D]*B}_[v+2*s+P]=t.eps/(k*k),S.bias&&(_[v+3*s+P]=S.bias[P])}for(let P=S.outC;P<s;P++)_[v+2*s+P]=t.eps}for(let x=0;x<u;x++){const S=x*h,z=f[x];for(let v=0;v<n;v++)t.norm==="gn"?(_[S+v]=z!=null&&z.scale?z.scale[v]:1,_[S+s+v]=z!=null&&z.bias?z.bias[v]:0):(_[S+v]=1,_[S+s+v]=0)}const y=d+(u-1)*g,$=y*4;for(let x=0;x<n;x++)for(let S=0;S<a;S++)m[$+x*r*4+S]=l.w[S*l.inC+x];for(let x=0;x<r*4;x++)_[M+x]=x<a?l.bias?l.bias[x]:0:-1e30;return{wF32:m,wF16:ba(m),qmetaF32:_,w0Vec4s:d,hiddenVec4PerLayer:g,clsVec4Off:y,clsBiasOff:M,metaStride:h,clsK4:r}}function Pn(e){if(e==="gelu_tanh")return`fn act(x : f32) -> f32 {
  let u = clamp(0.7978845608028654 * (x + 0.044715 * x * x * x), -9.0, 9.0);
  return 0.5 * x * (1.0 + tanh(u));
}`;if(e==="relu")return"fn act(x : f32) -> f32 { return max(x, 0.0); }";if(e==="elu")return"fn act(x : f32) -> f32 { return select(exp(clamp(x, -20.0, 0.0)) - 1.0, x, x >= 0.0); }";throw new Error(`meshnet_fast_v4: unsupported activation '${e}'`)}function Fo(e){return e==="gelu_tanh"?{uZeroInt:7,uZeroFloat:7/255,uZeroWord:117901063,sterbenzSub:"1.02734375h",zeroBin:7}:e==="relu"?{uZeroInt:0,uZeroFloat:0,uZeroWord:0,sterbenzSub:"1.0h",zeroBin:0}:{uZeroInt:32,uZeroFloat:32/255,uZeroWord:538976288,sterbenzSub:"1.125h",zeroBin:32}}function Lo({chan:e,clsK4:t,nclass:n,V4:s,suf:o,readBiasStmt:a,biasExpr:r,probCfg:i}){const f=`    var acc0 = ${s}(0.0${o});
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
  }`}function Uo({device:e,hasF16:t,nvox:n,outBufBytes:s,inpBuf:o,act8_0:a,labels8Buf:r,readbackBuf:i,pInit:f,bgInit:l,pCls:u,bgCls:d,clsUbo:g,packed:c,modelEntry:p,probCfg:m,canGpuProb:h,probSlots:M,ownedBuffers:_,mkBuf:w}){let y=!1,$=!1,x=!1,S=!1;const z=new Uint8Array(T*T);let v=null,P=null,k=null,B=null;const C=(F,V)=>e.createBindGroup({layout:F,entries:V.map((K,q)=>({binding:q,resource:K&&K.buffer?K:{buffer:K}}))});function N(){if(!v){const F=t?"prep_in_u8_f16":"prep_in_u8_f32";v=Ce(null,null,function*(){const{bgl:V,pipe:K}=yield sn(e,F,()=>gs(!0,t),"main",["read-only-storage","storage","uniform"]);if(S)return null;const q=w(256*4,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST),ce=new Float32Array(256),pe=C(V,[{buffer:r,offset:0,size:n},o,q]);return{pipe:K,ubo:q,lutF32:ce,bg:pe}}).catch(V=>{throw v=null,V})}return v}function j(){if(!P){const F=t?"prep_in_f32_f16":"prep_in_f32_f32";P=Ce(null,null,function*(){const{bgl:V,pipe:K}=yield sn(e,F,()=>gs(!1,t),"main",["read-only-storage","storage","uniform"]);if(S)return null;const q=w(16,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST),ce=new Float32Array(4),pe=s>=n*4?C(V,[{buffer:r,offset:0,size:n*4},o,q]):null,ye=a.size>=n*4?C(V,[{buffer:a,offset:0,size:n*4},o,q]):null;return{pipe:K,ubo:q,f32Tmp:ce,bgLabels:pe,bgAct0:ye}}).catch(V=>{throw P=null,V})}return P}function Y(){return k||(k=Ce(null,null,function*(){const{bgl:F,pipe:V}=yield sn(e,"transpose_u8_v4",Ao,"main",["read-only-storage","storage"]);if(S)return null;const K=C(F,[{buffer:r,offset:0,size:n},{buffer:o,offset:0,size:n}]);return{pipe:V,bg:K}}).catch(F=>{throw k=null,F})),k}function W(){return B||(B=Ce(null,null,function*(){const[F,V,K,q]=yield Promise.all([sn(e,"prob_unpack_two",$a,"main",["read-only-storage","storage","storage"]),sn(e,"prob_blur_axis",Xs,"blur_axis",["read-only-storage","storage","read-only-storage","uniform"]),sn(e,"prob_blur_z_gate",Xs,"blur_z_gate",["read-only-storage","storage","read-only-storage","uniform"]),sn(e,"transpose_f32",ya,"main",["read-only-storage","storage"])]);if(S)return null;const ce=GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST,pe=144,ye=w(pe,ce),be=w(pe,ce),we=w(pe,ce),ee=R=>({buffer:R,offset:0,size:s}),le=C(F.bgl,[ee(M.pass0HoldBuf),ee(M.y0),ee(M.y1)]),A=C(F.bgl,[ee(r),ee(M.b),ee(M.sup)]),ae=[M.y0,M.y1,M.b].map(R=>({buf:R,bgBlurX:C(V.bgl,[ee(R),ee(r),ee(M.sup),ye]),bgBlurY:C(V.bgl,[ee(r),ee(R),ee(M.sup),be]),bgBlurZ:C(K.bgl,[ee(R),ee(r),ee(M.sup),we]),bgTranspose:C(q.bgl,[ee(r),ee(R)])}));return{pUnpack:F.pipe,pBlurAxis:V.pipe,pBlurZGate:K.pipe,pTransposeF32:q.pipe,bgUnpack0:le,bgUnpack1:A,tissues:ae,uboX:ye,uboY:be,uboZ:we,uboScratch:new ArrayBuffer(pe),lastBlurKey:null}}).catch(F=>{throw B=null,F})),B}function D(){m?h&&W().catch(()=>{}):(N().catch(()=>{}),Y().catch(()=>{}))}function O(){S=!0}function Z(ye){return Ce(this,arguments,function*({volume:F,ioOpts:V,useCone:K,padInputHost:q,headRowHost:ce,hasF16Flag:pe}){var we;if(V!=null&&V.gpuNativeInput){const ee=(we=V.normOffset)!=null?we:0,le=V.normRange||1,A=F instanceof Uint8Array||F instanceof Uint8ClampedArray,ae=s>=n*4||a.size>=n*4;if(A){const ne=js(F,ce,z,ee,K),Q=yield N();for(let se=0;se<256;se++)Q.lutF32[se]=se===ee?0:(se-ee)/le;return e.queue.writeBuffer(Q.ubo,0,Q.lutF32),e.queue.writeBuffer(r,0,F,0,n),{info:ne,runPrePasses(se,G){(!$||x)&&(se.clearBuffer(o),$=!0,x=!1);const Se=se.beginComputePass();if(Se.setPipeline(Q.pipe),Se.setBindGroup(0,Q.bg),Se.dispatchWorkgroups(8,T,8),Se.end(),G.push("preprocess"),y){const _e=se.beginComputePass();_e.setPipeline(f.pipe),_e.setBindGroup(0,l),_e.dispatchWorkgroups(1,T,T),_e.end(),G.push("preprocess"),y=!1}}}}if(ae){const ne=js(F,ce,z,ee,K),Q=yield j(),se=!(s>=n*4),G=se?a:r,Se=se?Q.bgAct0:Q.bgLabels,_e=F instanceof Float32Array?F:Float32Array.from(F);return Q.f32Tmp[0]=ee,Q.f32Tmp[1]=le,Q.f32Tmp[2]=0,Q.f32Tmp[3]=0,e.queue.writeBuffer(Q.ubo,0,Q.f32Tmp),e.queue.writeBuffer(G,0,_e,0,n),{info:ne,runPrePasses(Be,ze){(!$||x)&&(Be.clearBuffer(o),$=!0,x=!1);const Ge=Be.beginComputePass();if(Ge.setPipeline(Q.pipe),Ge.setBindGroup(0,Se),Ge.dispatchWorkgroups(8,T,8),Ge.end(),ze.push("preprocess"),y||se){const We=Be.beginComputePass();We.setPipeline(f.pipe),We.setBindGroup(0,l),We.dispatchWorkgroups(1,T,T),We.end(),ze.push("preprocess"),y=!1}}}}const R=new Float32Array(n);for(let ne=0;ne<n;ne++){const Q=F[ne];R[ne]=Q===ee?0:(Q-ee)/le}const fe=kn(R,[T,T,T],[2,1,0]),re=Ys(fe,q,ce,pe,K);return e.queue.writeBuffer(o,0,q),$=!0,x=!1,{info:re,runPrePasses(ne,Q){if(y){const se=ne.beginComputePass();se.setPipeline(f.pipe),se.setBindGroup(0,l),se.dispatchWorkgroups(1,T,T),se.end(),Q.push("preprocess"),y=!1}}}}const be=Ys(F,q,ce,pe,K);return e.queue.writeBuffer(o,0,q),$=!0,x=!1,{info:be,runPrePasses(ee,le){if(y){const A=ee.beginComputePass();A.setPipeline(f.pipe),A.setBindGroup(0,l),A.dispatchWorkgroups(1,T,T),A.end(),le.push("preprocess"),y=!1}}}})}function J(be){return Ce(this,arguments,function*({enc:F,schedule:V,passCategories:K,u4Tmp:q,ioOpts:ce,paced:pe=!1,onProgress:ye=null}){const we=V.clsSkipped?V.clsStrips.length:T;if(!m){q[0]=c.clsVec4Off,q[1]=c.clsBiasOff,q[2]=V.clsSkipped?0:1,q[3]=0,e.queue.writeBuffer(g,0,q);{const _e=F.beginComputePass();_e.setPipeline(u.pipe),_e.setBindGroup(0,d),we>0&&_e.dispatchWorkgroups(1,V.clsSkipped?1:64,we),_e.end(),K.push("classify")}if(ce!=null&&ce.gpuNativeOutput){const _e=yield Y(),Be=F.beginComputePass();Be.setPipeline(_e.pipe),Be.setBindGroup(0,_e.bg),Be.dispatchWorkgroups(8,T,8),Be.end(),K.push("postprocess"),x=!0,F.copyBufferToBuffer(o,0,i,0,n),e.queue.submit([F.finish()]),yield i.mapAsync(GPUMapMode.READ);const ze=new Uint8Array(i.getMappedRange()).slice();return i.unmap(),pe&&ye&&ye(1,""),[ze]}F.copyBufferToBuffer(r,0,i,0,s),e.queue.submit([F.finish()]),yield i.mapAsync(GPUMapMode.READ);const G=new Uint8Array(i.getMappedRange()),Se=new Float32Array(n);for(let _e=0;_e<n;_e++)Se[_e]=G[_e];return i.unmap(),pe&&ye&&ye(1,""),[Se]}if(h){const G=yield W();q[0]=c.clsVec4Off,q[1]=c.clsBiasOff,q[2]=V.clsSkipped?0:1,q[3]=0,e.queue.writeBuffer(g,0,q),q[3]=1,e.queue.writeBuffer(M.clsUbo1,0,q);{const Ae=F.beginComputePass();Ae.setPipeline(u.pipe),Ae.setBindGroup(0,d),we>0&&Ae.dispatchWorkgroups(1,V.clsSkipped?1:64,we),Ae.end(),K.push("classify")}F.copyBufferToBuffer(r,0,M.pass0HoldBuf,0,s),V.clsSkipped&&F.clearBuffer(r,0,s);{const Ae=F.beginComputePass();Ae.setPipeline(u.pipe),Ae.setBindGroup(0,M.bgCls1),we>0&&Ae.dispatchWorkgroups(1,V.clsSkipped?1:64,we),Ae.end(),K.push("classify")}y=!0;const Se=`${m.sigma}|${m.supportPower}`,_e=m.sigma>0,Be=_e?Math.max(1,Math.round(3*m.sigma)):0;if(G.lastBlurKey!==Se){const Ae=new Uint32Array(G.uboScratch),Ve=new Float32Array(G.uboScratch);Ve.fill(0);let at=1;if(_e){at=0;for(let tt=-Be;tt<=Be;tt++){const st=Math.exp(-.5*tt*tt/(m.sigma*m.sigma));Ve[4+tt+Be]=st,at+=st}}else Ve[4]=1;Ae[1]=Be,Ve[2]=at,Ae[0]=0,Ve[3]=1,e.queue.writeBuffer(G.uboX,0,G.uboScratch),Ae[0]=1,e.queue.writeBuffer(G.uboY,0,G.uboScratch),Ae[0]=2,Ve[3]=m.supportPower,e.queue.writeBuffer(G.uboZ,0,G.uboScratch),G.lastBlurKey=Se}{const Ae=F.beginComputePass();Ae.setPipeline(G.pUnpack),Ae.setBindGroup(0,G.bgUnpack0),Ae.dispatchWorkgroups(256,256,1),Ae.end(),K.push("postprocess");const Ve=F.beginComputePass();Ve.setPipeline(G.pUnpack),Ve.setBindGroup(0,G.bgUnpack1),Ve.dispatchWorkgroups(256,256,1),Ve.end(),K.push("postprocess")}pe&&(e.queue.submit([F.finish()]),yield e.queue.onSubmittedWorkDone(),ye&&ye(.992,""),yield xo(),F=e.createCommandEncoder());const ze=!!(ce!=null&&ce.gpuNativeOutput);for(let Ae=0;Ae<3;Ae++){const Ve=G.tissues[Ae];if(_e){const tt=F.beginComputePass();tt.setPipeline(G.pBlurAxis),tt.setBindGroup(0,Ve.bgBlurX),tt.dispatchWorkgroups(4,64,T),tt.end(),K.push("postprocess");const st=F.beginComputePass();st.setPipeline(G.pBlurAxis),st.setBindGroup(0,Ve.bgBlurY),st.dispatchWorkgroups(4,64,T),st.end(),K.push("postprocess")}const at=F.beginComputePass();if(at.setPipeline(G.pBlurZGate),at.setBindGroup(0,Ve.bgBlurZ),at.dispatchWorkgroups(4,64,T),at.end(),K.push("postprocess"),ze){const tt=F.beginComputePass();tt.setPipeline(G.pTransposeF32),tt.setBindGroup(0,Ve.bgTranspose),tt.dispatchWorkgroups(8,T,8),tt.end(),K.push("postprocess")}else Ae<2&&F.copyBufferToBuffer(r,0,Ve.buf,0,s)}const Ge=ze?[M.y0,M.y1,M.b]:[M.y0,M.y1,r];F.copyBufferToBuffer(Ge[0],0,i,0,s),e.queue.submit([F.finish()]),yield i.mapAsync(GPUMapMode.READ);const We=new Float32Array(i.getMappedRange()).slice();i.unmap();const Xe=Ae=>Ce(null,null,function*(){const Ve=e.createCommandEncoder();Ve.copyBufferToBuffer(Ae,0,i,0,s),e.queue.submit([Ve.finish()]),yield i.mapAsync(GPUMapMode.READ);const at=new Float32Array(i.getMappedRange()).slice();return i.unmap(),at}),Oe=yield Xe(Ge[1]),Le=yield Xe(Ge[2]);return pe&&ye&&ye(1,""),[We,Oe,Le]}q[0]=c.clsVec4Off,q[1]=c.clsBiasOff,q[2]=V.clsSkipped?0:1,q[3]=0,e.queue.writeBuffer(g,0,q);{const G=F.beginComputePass();G.setPipeline(u.pipe),G.setBindGroup(0,d),we>0&&G.dispatchWorkgroups(1,V.clsSkipped?1:64,we),G.end(),K.push("classify"),F.copyBufferToBuffer(r,0,i,0,s)}e.queue.submit([F.finish()]),yield i.mapAsync(GPUMapMode.READ);const ee=1/65535,le=new Uint16Array(i.getMappedRange()),A=new Float32Array(n),ae=new Float32Array(n);for(let G=0;G<n;G++)A[G]=le[G*2]*ee,ae[G]=le[G*2+1]*ee;i.unmap(),q[3]=1,e.queue.writeBuffer(g,0,q);const R=e.createCommandEncoder();V.clsSkipped&&R.clearBuffer(r,0,s);const fe=R.beginComputePass();fe.setPipeline(u.pipe),fe.setBindGroup(0,d),we>0&&fe.dispatchWorkgroups(1,V.clsSkipped?1:64,we),fe.end(),K.push("classify"),R.copyBufferToBuffer(r,0,i,0,s),e.queue.submit([R.finish()]),yield i.mapAsync(GPUMapMode.READ);const re=new Uint16Array(i.getMappedRange()),ne=new Float32Array(n),Q=new Float32Array(n);for(let G=0;G<n;G++)ne[G]=re[G*2]*ee,Q[G]=re[G*2+1]*ee;i.unmap();const se=ma([A,ae,ne],Q,[T,T,T],p);return ce!=null&&ce.gpuNativeOutput?se.map(G=>kn(G,[T,T,T],[2,1,0])):se})}return{prepareInput:Z,finishAndReadback:J,warmupIoPipelines:D,dispose:O}}function Wo(e,t){if(e==="sg32")return{decls:"",entryArgs:"",add:o=>`subgroupAdd(${o})`,min:o=>`subgroupMin(${o})`,max:o=>`subgroupMax(${o})`};const n=(o,a)=>{const r=f=>o==="+"?`  x = x + subgroupShuffleXor(x, ${f}u);`:`  x = ${o}(x, subgroupShuffleXor(x, ${f}u));`;return e==="sg64"?`fn ${a}(v : f32) -> f32 {
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
             @builtin(subgroup_size) sg_size : u32`,add:o=>`sg32_add(${o}, sg_size)`,min:o=>`sg32_min(${o}, sg_size)`,max:o=>`sg32_max(${o}, sg_size)`}}function qo({V4:e,sw:t,norm:n,writeMomFn:s,momParams:o,momArgs:a}){const r=n==="none",i=r?"vec2<f32>":"vec4<f32>",f=r?`fn sg32_pack1(a : ${e}, slane : u32, c_out : u32, ${o}) -> u32 {
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
`}function Ro(e){const{cs:t,chan:n,nclass:s,clsK4:o,dilations:a,activation:r,norm:i,hasF16:f,subgroupMode:l="none",splitHalves:u,probCfg:d,chunkableStd:g=!1}=e,c=t/4,p=u?t/2:t,m=p*ct,h=p*pt,M=9*t*3*c,_=M,w=M+c,y=f&&c%2===0&&w*8<=65536,$=Fo(r),x=f?`enable f16;
`:"",S=f&&l!=="none",z=S?`enable subgroups;
`:"",v=f?"f16":"f32",P=f?"h":"f",k=`vec4<${v}>`,B=f?256:255,C=J=>{const F=J?".xzyw":"",V=(pe,ye,be)=>u&&ye>=p?`y8_1[${pe} + ${(ye-p)*pt}u] = ${be};`:`y8_0[${pe} + ${ye*pt}u] = ${be};`;if(S&&(l==="sg32"||l==="sg64"||l==="sg32_64")){const pe=Wo(l,i);return{decls:pe.decls,entryArgs:pe.entryArgs,localHeader:"",emit:({accVar:ye,cStart:be,cEnd:we,hrExpr:ee,yRowExpr:le,momMode:A,writeY8Expr:ae="true"})=>ut(we-be,R=>{const fe=be+R,re=A==="ext_and_main"?`mom_ext[(${ee}) * ${t}u + ${fe}u] = mv;
      mom_main[(row_idx * 2u + sg) * ${t}u + ${fe}u] = mv;`:A==="ext_only"?`mom_ext[(${ee}) * ${t}u + ${fe}u] = mv;`:`mom_main[(${ee}) * ${t}u + ${fe}u] = mv;`;return i==="none"?`  {
    let f = vec4<f32>(${ye}.v_${R}${F});
    let lmn = ${pe.min("min(min(f.x, f.y), min(f.z, f.w))")};
    let lmx = ${pe.max("max(max(f.x, f.y), max(f.z, f.w))")};
    let sp = lmx - lmn;
    let inv = select(0.0, 1.0 / sp, sp > 1e-7);
    if (${ae}) {
      ${V(le,fe,"pack4x8unorm((f - vec4<f32>(lmn)) * inv)")}
    }
    if (slane == 0u) {
      let mv = vec4<f32>(0.0, 0.0, lmn, sp);
      ${re}
    }
  }
`:`  {
    let f = vec4<f32>(${ye}.v_${R}${F});
    let ls = ${pe.add("f.x + f.y + f.z + f.w")};
    let lq = ${pe.add("dot(f, f)")};
    let lmn = ${pe.min("min(min(f.x, f.y), min(f.z, f.w))")};
    let lmx = ${pe.max("max(max(f.x, f.y), max(f.z, f.w))")};
    let sp = lmx - lmn;
    let inv = select(0.0, 1.0 / sp, sp > 1e-7);
    if (${ae}) {
      ${V(le,fe,"pack4x8unorm((f - vec4<f32>(lmn)) * inv)")}
    }
    if (slane == 0u) {
      let mv = vec4<f32>(ls, lq, lmn, sp);
      ${re}
    }
  }
`})}}if(S&&l==="sg_small")return{decls:qo({V4:k,sw:F,norm:i,writeMomFn:`fn write_mom(c_out : u32, mv : vec4<f32>, ext_off : u32, main_off : u32, mom_mode : u32) {
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
`,emit:({accVar:be,cStart:we,cEnd:ee,hrExpr:le,yRowExpr:A,momMode:ae,writeY8Expr:R="true"})=>{const fe=ae==="ext_and_main"?"1u":ae==="ext_only"?"2u":"0u",re=ae==="main"?"0u":`(${le}) * ${t}u`,ne=ae==="ext_only"?"0u":`(row_idx * 2u + sg) * ${t}u`;let Q=`  let ep_ext_off = ${re};
  let ep_main_off = ${ne};
`;for(let se=0;se<ee-we;se+=4){const G=we+se;Q+=`  {
    let qw = reduce_pack4_sg(${be}.v_${se}, ${be}.v_${se+1}, ${be}.v_${se+2}, ${be}.v_${se+3}, h, slane, sg_size, sg_id, ${G}u, ep_ext_off, ep_main_off, ${fe});
    if (${R}) {
      ${V(A,G,"qw.x")}
      ${V(A,G+1,"qw.y")}
      ${V(A,G+2,"qw.z")}
      ${V(A,G+3,"qw.w")}
    }
  }
`}return Q}};const K=`    let c_out = c_base + slane;
    if (mom_mode == 0u) {
      mom_main[main_off + c_out] = mv;
    } else if (mom_mode == 1u) {
      mom_ext[ext_off + c_out] = mv;
      mom_main[main_off + c_out] = mv;
    } else {
      mom_ext[ext_off + c_out] = mv;
    }`;if(i==="none"&&f){const pe=ut(31,be=>`    {
      let m = sh_mm[rb + ${be+1}u];
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
`,emit:({accVar:be,cStart:we,cEnd:ee,hrExpr:le,yRowExpr:A,momMode:ae,writeY8Expr:R="true"})=>{const fe=ae==="ext_and_main"?"1u":ae==="ext_only"?"2u":"0u",re=ae==="main"?"0u":`(${le}) * ${t}u`,ne=ae==="ext_only"?"0u":`(row_idx * 2u + sg) * ${t}u`;let Q=`  let ep_ext_off = ${re};
  let ep_main_off = ${ne};
`;for(let se=0;se<ee-we;se+=4){const G=we+se;Q+=`  {
    let qw = reduce_pack4(${be}.v_${se}, ${be}.v_${se+1}, ${be}.v_${se+2}, ${be}.v_${se+3}, h, slane, ${G}u, ep_ext_off, ep_main_off, ${fe});
    if (${R}) {
      ${V(A,G,"qw.x")}
      ${V(A,G+1,"qw.y")}
      ${V(A,G+2,"qw.z")}
      ${V(A,G+3,"qw.w")}
    }
  }
`}return Q}}}if(i==="none"){const pe=ut(32,be=>`    {
      let m = sh_mm[rb + ${be}u];
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
`,emit:({accVar:be,cStart:we,cEnd:ee,hrExpr:le,yRowExpr:A,momMode:ae,writeY8Expr:R="true"})=>{const fe=ae==="ext_and_main"?"1u":ae==="ext_only"?"2u":"0u",re=ae==="main"?"0u":`(${le}) * ${t}u`,ne=ae==="ext_only"?"0u":`(row_idx * 2u + sg) * ${t}u`;let Q=`  let ep_ext_off = ${re};
  let ep_main_off = ${ne};
`;for(let se=0;se<ee-we;se+=4){const G=we+se;Q+=`  {
    let qw = reduce_pack4(${be}.v_${se}, ${be}.v_${se+1}, ${be}.v_${se+2}, ${be}.v_${se+3}, h, slane, ${G}u, ep_ext_off, ep_main_off, ${fe});
    if (${R}) {
      ${V(A,G,"qw.x")}
      ${V(A,G+1,"qw.y")}
      ${V(A,G+2,"qw.z")}
      ${V(A,G+3,"qw.w")}
    }
  }
`}return Q}}}if(f){const pe=ut(31,be=>{const we=be+1;return`    {
      let s = sh_sq[rb + ${we}u];
      let m = sh_mm[rb + ${we}u];
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
`,emit:({accVar:be,cStart:we,cEnd:ee,hrExpr:le,yRowExpr:A,momMode:ae,writeY8Expr:R="true"})=>{const fe=ae==="ext_and_main"?"1u":ae==="ext_only"?"2u":"0u",re=ae==="main"?"0u":`(${le}) * ${t}u`,ne=ae==="ext_only"?"0u":`(row_idx * 2u + sg) * ${t}u`;let Q=`  let ep_ext_off = ${re};
  let ep_main_off = ${ne};
`;for(let se=0;se<ee-we;se+=4){const G=we+se;Q+=`  {
    let qw = reduce_pack4(${be}.v_${se}, ${be}.v_${se+1}, ${be}.v_${se+2}, ${be}.v_${se+3}, h, slane, ${G}u, ep_ext_off, ep_main_off, ${fe});
    if (${R}) {
      ${V(A,G,"qw.x")}
      ${V(A,G+1,"qw.y")}
      ${V(A,G+2,"qw.z")}
      ${V(A,G+3,"qw.w")}
    }
  }
`}return Q}}}const q=ut(32,pe=>`    {
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
  a0 : ${k}, a1 : ${k},
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
${q}    let sp = rmx - rmn;
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
`,emit:({accVar:pe,cStart:ye,cEnd:be,hrExpr:we,yRowExpr:ee,momMode:le,writeY8Expr:A="true"})=>{const ae=le==="ext_and_main"?"1u":le==="ext_only"?"2u":"0u",R=le==="main"?"0u":`(${we}) * ${t}u`,fe=le==="ext_only"?"0u":`(row_idx * 2u + sg) * ${t}u`;let re=`  let ep_ext_off = ${R};
  let ep_main_off = ${fe};
`;for(let ne=0;ne<be-ye;ne+=2){const Q=ye+ne;re+=`  {
    let qw = reduce_pack2(${pe}.v_${ne}, ${pe}.v_${ne+1}, h, slane, ${Q}u, ep_ext_off, ep_main_off, ${ae});
    if (${A}) {
      ${V(ee,Q,"qw.x")}
      ${V(ee,Q+1,"qw.y")}
    }
  }
`}return re}}},N=()=>`
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
}`,j=a[0];return{initActWgsl:N,conv0Wgsl:()=>{const J=!f&&u,F=C(!1),V=(we,ee)=>{const le=we/4,A=ee/4;return ut(A-le,ae=>{const R=le+ae,fe=R*4;return`          {
            let w0 = w16_4[wb + ${R}u];
            let w1 = w16_4[wb + ${c+R}u];
            let w2 = w16_4[wb + ${2*c+R}u];
            a_${fe}     = fma(vn, ${k}(w0.x), fma(vc, ${k}(w1.x), fma(vp, ${k}(w2.x), a_${fe})));
            a_${fe+1} = fma(vn, ${k}(w0.y), fma(vc, ${k}(w1.y), fma(vp, ${k}(w2.y), a_${fe+1})));
            a_${fe+2} = fma(vn, ${k}(w0.z), fma(vc, ${k}(w1.z), fma(vp, ${k}(w2.z), a_${fe+2})));
            a_${fe+3} = fma(vn, ${k}(w0.w), fma(vc, ${k}(w1.w), fma(vp, ${k}(w2.w), a_${fe+3})));
          }
`})},K=Math.floor(j/4),q=j%4;let ce="";q===0?ce=`
        let vn = inp_4[base - ${K}u];
        let vc = inp_4[base];
        let vp = inp_4[base + ${K}u];`:K===0&&q===1?ce=`
        let vL = inp_4[base - 1u];
        let vc = inp_4[base];
        let vR = inp_4[base + 1u];
        let vn = ${k}(vL.w, vc.xyz);
        let vp = ${k}(vc.yzw, vR.x);`:q===1?ce=`
        let vL = inp_4[base - ${K+1}u];
        let vN = inp_4[base - ${K}u];
        let vc = inp_4[base];
        let vP = inp_4[base + ${K}u];
        let vR = inp_4[base + ${K+1}u];
        let vn = ${k}(vL.w, vN.xyz);
        let vp = ${k}(vP.yzw, vR.x);`:q===2?ce=`
        let vL = inp_4[base - ${K+1}u];
        let vN = ${K===0?"inp_4[base]":`inp_4[base - ${K}u]`};
        let vc = ${K===0?"vN":"inp_4[base]"};
        let vP = ${K===0?"vN":`inp_4[base + ${K}u]`};
        let vR = inp_4[base + ${K+1}u];
        let vn = ${k}(vL.zw, vN.xy);
        let vp = ${k}(vP.zw, vR.xy);`:ce=`
        let vL = inp_4[base - ${K+1}u];
        let vN = ${K===0?"inp_4[base]":`inp_4[base - ${K}u]`};
        let vc = ${K===0?"vN":"inp_4[base]"};
        let vP = ${K===0?"vN":`inp_4[base + ${K}u]`};
        let vR = inp_4[base + ${K+1}u];
        let vn = ${k}(vL.yzw, vN.x);
        let vp = ${k}(vP.w, vR.xyz);`;const pe=(we,ee,le,A)=>{const ae=A-le,R=ut(ae,ne=>`  v_${ne} : ${k},
`),fe=ut(ae,ne=>{const Q=le+ne;return i==="none"?`  var a_${Q} = ${k}(${v}(qmeta[${3*t+Q}u]));
`:`  var a_${Q} = ${k}(0.0${P});
`}),re=Array.from({length:ae},(ne,Q)=>`a_${le+Q}`).join(", ");return`struct ${ee} {
${R}};
fn ${we}(y : i32, z : i32, x_pad : u32) -> ${ee} {
${fe}  var tap_yz : u32 = 0u;
  for (var dz : i32 = -1; dz <= 1; dz = dz + 1) {
    let sz = z + dz * ${j};
    for (var dy : i32 = -1; dy <= 1; dy = dy + 1) {
      let sy = y + dy * ${j};
      if ((u32(sz) | u32(sy)) < 256u) {
        let base = (u32(sz) * 256u + u32(sy)) * ${ct}u + x_pad;
${ce}
        let wb = tap_yz * ${3*c}u;
${V(le,A)}
      }
      tap_yz = tap_yz + 1u;
    }
  }
  return ${ee}(${re});
}
`},ye=(we,ee,le,A,ae)=>{const R=ae?`  let y = i32(p0.bg_y0 + lid.y);
  let z = i32(p0.bg_z0);`:`  var y : i32;
  var z : i32;
  if (p0.is_full != 0u) {
    y = i32(wid.y * 4u + lid.y);
    z = i32(wid.z);
  } else {
    let pk = strips0[wid.z];
    y = i32((pk & 255u) * 4u + lid.y);
    z = i32(pk >> 8u);
  }`,fe=ae?"lid.y * 2u + sg":"row_idx * 2u + sg";return`
@compute @workgroup_size(64, 4, 1)
fn ${we}(@builtin(local_invocation_id) lid : vec3<u32>,
             @builtin(workgroup_id) wid : vec3<u32>${F.entryArgs||""}) {
  let sg = lid.x >> 5u;
  let slane = lid.x & 31u;
${F.localHeader}  let x_pad = lid.x + ${Vt}u;
${R}
  let acc = ${ee}(y, z, x_pad);
  let row_idx = u32(z) * 256u + u32(y);
  let y_row_base = row_idx * ${h}u + lid.x;
${F.emit({accVar:"acc",cStart:le,cEnd:A,hrExpr:fe,yRowExpr:"y_row_base",momMode:ae?"ext_only":"main"})}}`},be=J?pe("run_conv0_lo","Conv0AccLo",0,p)+pe("run_conv0_hi","Conv0AccHi",p,t)+ye("main_lo","run_conv0_lo",0,p,!1)+ye("main_hi","run_conv0_hi",p,t,!1)+ye("main_bg_lo","run_conv0_lo",0,p,!0)+ye("main_bg_hi","run_conv0_hi",p,t,!0):pe("run_conv0","Conv0Acc",0,t)+ye("main","run_conv0",0,t,!1)+ye("main_bg","run_conv0",0,t,!0);return`${x}${z}
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
${F.decls}${be}`},prepWgsl:()=>`${x}
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
    q_ref = max(q_ref, ${B.toFixed(1)} * qs);
  }
  ${i==="none"?"q_ref = 1.0;":""}
  if (lid == 0u) {
    mom_stats[${t*2}u] = vec4<f32>(q_ref, 0.0, 0.0, 0.0);
  }
  let scale_num = ${B.toFixed(1)} / q_ref;
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
    w_eff[${_}u + lid] = ${k}(0.0${P});
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
  let x_pad = x4 + ${Vt}u;
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
}`,convWgsl:()=>{const J=!f&&u,F=C(f),V=(ee,le)=>f?`
          let ${ee} = vec4<f16>(vec2<f16>(unpack2x16float(((${le} & 0x00FF00FFu) << 2u) | 0x3C003C00u)), vec2<f16>(unpack2x16float(((${le} >> 6u) & 0x03FC03FCu) | 0x3C003C00u))) - vec4<f16>(${$.sterbenzSub});`:`
          let ${ee} = unpack4x8unorm(${le}) - vec4<f32>(${$.uZeroFloat});`,K=ee=>`
          let uL = ${ee}[base - off0];
          let uN = ${ee}[base - off1];
          let uC = ${ee}[base];
          let uP = ${ee}[base + off1];
          let uR = ${ee}[base + off0];
          let u_neg = (uL >> sh_l) | (uN << sh_r);
          let u_pos = (uP >> sh_r) | (uR << sh_l);`+V("vn","u_neg")+V("vc","uC")+V("vp","u_pos"),q=(ee,le)=>{const A=ee/4,ae=le/4;if(y){const R=c/2,fe=c;let re="";for(let ne=A;ne<ae;ne+=2){const Q=ne*4,se=ne/2;re+=`          {
            let wp0 = w_eff_u[wbu + ${se}u];
            let wp1 = w_eff_u[wbu + ${R+se}u];
            let wp2 = w_eff_u[wbu + ${fe+se}u];
            let w0a = u4_lo(wp0);
            let w0b = u4_hi(wp0);
            let w1a = u4_lo(wp1);
            let w1b = u4_hi(wp1);
            let w2a = u4_lo(wp2);
            let w2b = u4_hi(wp2);
            a_${Q}     = fma(vn, vec4<f16>(w0a.x), fma(vc, vec4<f16>(w1a.x), fma(vp, vec4<f16>(w2a.x), a_${Q})));
            a_${Q+1} = fma(vn, vec4<f16>(w0a.y), fma(vc, vec4<f16>(w1a.y), fma(vp, vec4<f16>(w2a.y), a_${Q+1})));
            a_${Q+2} = fma(vn, vec4<f16>(w0a.z), fma(vc, vec4<f16>(w1a.z), fma(vp, vec4<f16>(w2a.z), a_${Q+2})));
            a_${Q+3} = fma(vn, vec4<f16>(w0a.w), fma(vc, vec4<f16>(w1a.w), fma(vp, vec4<f16>(w2a.w), a_${Q+3})));
            a_${Q+4} = fma(vn, vec4<f16>(w0b.x), fma(vc, vec4<f16>(w1b.x), fma(vp, vec4<f16>(w2b.x), a_${Q+4})));
            a_${Q+5} = fma(vn, vec4<f16>(w0b.y), fma(vc, vec4<f16>(w1b.y), fma(vp, vec4<f16>(w2b.y), a_${Q+5})));
            a_${Q+6} = fma(vn, vec4<f16>(w0b.z), fma(vc, vec4<f16>(w1b.z), fma(vp, vec4<f16>(w2b.z), a_${Q+6})));
            a_${Q+7} = fma(vn, vec4<f16>(w0b.w), fma(vc, vec4<f16>(w1b.w), fma(vp, vec4<f16>(w2b.w), a_${Q+7})));
          }
`}return re}return ut(ae-A,R=>{const fe=A+R,re=fe*4;return`          {
            let w0 = w_eff[wb + ${fe}u];
            let w1 = w_eff[wb + ${c+fe}u];
            let w2 = w_eff[wb + ${2*c+fe}u];
            a_${re}     = fma(vn, ${k}(w0.x), fma(vc, ${k}(w1.x), fma(vp, ${k}(w2.x), a_${re})));
            a_${re+1} = fma(vn, ${k}(w0.y), fma(vc, ${k}(w1.y), fma(vp, ${k}(w2.y), a_${re+1})));
            a_${re+2} = fma(vn, ${k}(w0.z), fma(vc, ${k}(w1.z), fma(vp, ${k}(w2.z), a_${re+2})));
            a_${re+3} = fma(vn, ${k}(w0.w), fma(vc, ${k}(w1.w), fma(vp, ${k}(w2.w), a_${re+3})));
          }
`})},ce=(ee,le,A,ae)=>{const R=ae-A,fe=ut(R,Se=>`  v_${Se} : ${k},
`),re=ut(R,Se=>{const _e=A+Se;if(i==="none"){const Be=_e>>>2,ze=["x","y","z","w"][_e&3];if(y){const Ge=_+Be>>>1,We=_+Be&1?"u4_hi":"u4_lo";return`  var a_${_e} = ${k}(${We}(w_eff_u[${Ge}u]).${ze});
`}return`  var a_${_e} = ${k}(w_eff[${_+Be}u].${ze});
`}return`  var a_${_e} = ${k}(0.0${P});
`}),ne=p<=8?`(${p}u + cp.pad0)`:`${p}u`,Q=y?`        let wbu_tap = tap_yz * ${t*3*c/2}u;
        for (var ic : u32 = 0u; ic < ${ne}; ic = ic + 1u) {
          let base = row_off + ic * ${ct}u;
${K("act8_0")}
          let wbu = wbu_tap + ic * ${3*c/2}u;
${q(A,ae)}
        }`:`        let wb_tap = tap_yz * ${t*3*c}u;
        for (var ic : u32 = 0u; ic < ${ne}; ic = ic + 1u) {
          let base = row_off + ic * ${ct}u;
${K("act8_0")}
          let wb = wb_tap + ic * ${3*c}u;
${q(A,ae)}
        }`,se=y?`        for (var ic : u32 = 0u; ic < ${ne}; ic = ic + 1u) {
          let base = row_off + ic * ${ct}u;
${K("act8_1")}
          let wbu = wbu_tap + (${p}u + ic) * ${3*c/2}u;
${q(A,ae)}
        }`:`        for (var ic : u32 = 0u; ic < ${ne}; ic = ic + 1u) {
          let base = row_off + ic * ${ct}u;
${K("act8_1")}
          let wb = wb_tap + (${p}u + ic) * ${3*c}u;
${q(A,ae)}
        }`,G=Array.from({length:R},(Se,_e)=>`a_${A+_e}`).join(", ");return`struct ${le} {
${fe}};
fn ${ee}(y : i32, z : i32, x_pad : u32, dp : u32) -> ${le} {
${re}  let d_step = i32(dp & 63u);
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
${Q}
        ${u?se:""}
      }
      tap_yz = tap_yz + 1u;
    }
  }
  return ${le}(${G});
}
`},pe=(ee,le,A,ae,R)=>{const fe=R?g?`
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
  }`,re=R?g?"ext_i * 8u + lid.y * 2u + sg":"wid.z * 8u + lid.y * 2u + sg":"row_idx * 2u + sg",ne=R?"(((dp >> 24u) & 1u) != 0u)":"true";return`
@compute @workgroup_size(64, 4, 1)
fn ${ee}(@builtin(local_invocation_id) lid : vec3<u32>,
             @builtin(workgroup_id) wid : vec3<u32>${F.entryArgs||""}) {
  let x4 = lid.x;
  let sg = x4 >> 5u;
  let slane = x4 & 31u;
${F.localHeader}  let x_pad = x4 + ${Vt}u;
${fe}
  let dp = cp.d_pack;
  let acc = ${le}(y, z, x_pad, dp);
  let row_idx = u32(z) * 256u + u32(y);
  let y_row_base = row_idx * ${h}u + x4;
${F.emit({accVar:"acc",cStart:A,cEnd:ae,hrExpr:re,yRowExpr:"y_row_base",momMode:R?"ext_and_main":"main",writeY8Expr:ne})}}`},ye=J?ce("run_conv_lo","ConvAccLo",0,p)+ce("run_conv_hi","ConvAccHi",p,t)+pe("main_lo","run_conv_lo",0,p,!1)+pe("main_hi","run_conv_hi",p,t,!1)+pe("main_ext_lo","run_conv_lo",0,p,!0)+pe("main_ext_hi","run_conv_hi",p,t,!0):ce("run_conv","ConvAcc",0,t)+pe("main","run_conv",0,t,!1)+pe("main_ext","run_conv",0,t,!0),be=y?`fn u4_lo(u : vec4<u32>) -> vec4<f16> {
  return vec4<f16>(vec2<f16>(unpack2x16float(u.x)), vec2<f16>(unpack2x16float(u.y)));
}
fn u4_hi(u : vec4<u32>) -> vec4<f16> {
  return vec4<f16>(vec2<f16>(unpack2x16float(u.z)), vec2<f16>(unpack2x16float(u.w)));
}
@group(0) @binding(6) var<uniform> w_eff_u : array<vec4<u32>, ${Math.ceil(w/2)}>;`:`@group(0) @binding(6) var<storage, read> w_eff : array<${k}>;`;return`${x}${z}
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
${be}
@group(0) @binding(7) var<storage, read> strips : array<u32>;
@group(0) @binding(8) var<uniform> cp : ConvParams;
${F.decls}${ye}`},clsWgsl:()=>`${x}
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
${Lo({chan:n,clsK4:o,nclass:s,V4:k,suf:P,readBiasStmt:"",biasExpr:J=>`qmeta[m_cls + k_base + ${J}u]`,probCfg:d})}
}`,totalWEffVec4s:w,useUniformWeff:y,csHalf:p,chunkableStd:g,halfPass0:!f&&u,halfPassConv:!f&&u}}function Io(e){const{cs:t,chan:n,nclass:s,clsK4:o,dilations:a,activation:r,norm:i,hasF16:f,subgroupMode:l="none",numConvs:u,probCfg:d}=e,g=t/4,c=t/2,p=t/4,m=g*ct,h=16384,M=t*pt,w=t*2+4,y=w+In*t,$=4*t,x=(u*$+o*4)/4,S=9*t*3*p,z=S,v=S+p,P=f&&p%2===0&&v*8<=65536,k=Fo(r),B=f?`enable f16;
`:"",C=f&&l!=="none",N=C?`enable subgroups;
`:"",j=f?"f16":"f32",Y=f?"h":"f",W=`vec4<${j}>`,D=f?256:255,O=ee=>{const le=ee?".xzyw":"",A=(re,ne,Q)=>{if(re==="stage_bg")return`stage[s_bg_base + ${ne*pt}u] = ${Q};`;if(re==="stage")return`stage[s_row_base + ${ne*pt}u] = ${Q};`;const se=Math.floor(ne/g),G=ne%g;return`if (use_act) { act8_${se}[a_row_base + ${G*ct}u] = ${Q}; } else { stage[s_row_base + ${ne*pt}u] = ${Q}; }`};if(C&&(l==="sg32"||l==="sg64"||l==="sg32_64")){const re=Wo(l,i);return{decls:re.decls,entryArgs:re.entryArgs,localHeader:"",emit:({accVar:ne,cStart:Q,cEnd:se,hrExpr:G,storeMode:Se,momOffExpr:_e,alsoWriteMomMain:Be=!1,writeY8Expr:ze="true"})=>ut(se-Q,Ge=>{const We=Q+Ge;return i==="none"?`  {
    let f = vec4<f32>(${ne}.v_${Ge}${le});
    let lmn = ${re.min("min(min(f.x, f.y), min(f.z, f.w))")};
    let lmx = ${re.max("max(max(f.x, f.y), max(f.z, f.w))")};
    let sp = lmx - lmn;
    let inv = select(0.0, 1.0 / sp, sp > 1e-7);
    if (${ze}) {
      ${A(Se,We,"pack4x8unorm((f - vec4<f32>(lmn)) * inv)")}
    }
    if (slane == 0u) {
      let mv = vec4<f32>(0.0, 0.0, lmn, sp);
      mom[${_e} + (${G}) * ${t}u + ${We}u] = mv;
      ${Be?`mom[${w}u + (row_idx * 2u + sg) * ${t}u + ${We}u] = mv;`:""}
    }
  }
`:`  {
    let f = vec4<f32>(${ne}.v_${Ge}${le});
    let ls = ${re.add("f.x + f.y + f.z + f.w")};
    let lq = ${re.add("dot(f, f)")};
    let lmn = ${re.min("min(min(f.x, f.y), min(f.z, f.w))")};
    let lmx = ${re.max("max(max(f.x, f.y), max(f.z, f.w))")};
    let sp = lmx - lmn;
    let inv = select(0.0, 1.0 / sp, sp > 1e-7);
    if (${ze}) {
      ${A(Se,We,"pack4x8unorm((f - vec4<f32>(lmn)) * inv)")}
    }
    if (slane == 0u) {
      let mv = vec4<f32>(ls, lq, lmn, sp);
      mom[${_e} + (${G}) * ${t}u + ${We}u] = mv;
      ${Be?`mom[${w}u + (row_idx * 2u + sg) * ${t}u + ${We}u] = mv;`:""}
    }
  }
`})}}if(C&&l==="sg_small")return{decls:qo({V4:W,sw:le,norm:i,writeMomFn:`fn write_mom(c_out : u32, mv : vec4<f32>, mom_off : u32, main_off : u32, also_main : bool) {
  mom[mom_off + c_out] = mv;
  if (also_main) {
    mom[main_off + c_out] = mv;
  }
}
`,momParams:"mom_off : u32, main_off : u32, also_main : bool",momArgs:"mom_off, main_off, also_main"}),entryArgs:`,
             @builtin(subgroup_size) sg_size : u32,
             @builtin(subgroup_invocation_id) sg_id : u32`,localHeader:`  let h = lid.y * 2u + sg;
`,emit:({accVar:Q,cStart:se,cEnd:G,hrExpr:Se,storeMode:_e,momOffExpr:Be,alsoWriteMomMain:ze=!1,writeY8Expr:Ge="true"})=>{const We=`${Be} + (${Se}) * ${t}u`,Xe=ze?`${w}u + (row_idx * 2u + sg) * ${t}u`:"0u";let Oe=`  let ep_mom_off = ${We};
  let ep_main_off = ${Xe};
`;for(let Le=0;Le<G-se;Le+=4){const Ae=se+Le;Oe+=`  {
    let qw = reduce_pack4_sg(${Q}.v_${Le}, ${Q}.v_${Le+1}, ${Q}.v_${Le+2}, ${Q}.v_${Le+3}, h, slane, sg_size, sg_id, ${Ae}u, ep_mom_off, ep_main_off, ${ze});
    if (${Ge}) {
      ${A(_e,Ae,"qw.x")}
      ${A(_e,Ae+1,"qw.y")}
      ${A(_e,Ae+2,"qw.z")}
      ${A(_e,Ae+3,"qw.w")}
    }
  }
`}return Oe}};const ae=`    let c_out = c_base + slane;
    mom[mom_off + c_out] = mv;
    if (also_main) {
      mom[main_off + c_out] = mv;
    }`;if(i==="none"&&f){const re=ut(31,Q=>`    {
      let m = sh_mm[rb + ${Q+1}u];
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
${re}    let fmn = f32(rmn);
    let sp = f32(rmx) - fmn;
    sh_res[h * 4u + slane] = vec2<f32>(fmn, select(0.0, 1.0 / sp, sp > 1e-7));
    let mv = vec4<f32>(0.0, 0.0, fmn, sp);
${ae}
  }
  workgroupBarrier();
  let f0 = vec4<f32>(a0${le});
  let f1 = vec4<f32>(a1${le});
  let f2 = vec4<f32>(a2${le});
  let f3 = vec4<f32>(a3${le});
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
`,emit:({accVar:Q,cStart:se,cEnd:G,hrExpr:Se,storeMode:_e,momOffExpr:Be,alsoWriteMomMain:ze=!1,writeY8Expr:Ge="true"})=>{const We=`${Be} + (${Se}) * ${t}u`,Xe=ze?`${w}u + (row_idx * 2u + sg) * ${t}u`:"0u";let Oe=`  let ep_mom_off = ${We};
  let ep_main_off = ${Xe};
`;for(let Le=0;Le<G-se;Le+=4){const Ae=se+Le;Oe+=`  {
    let qw = reduce_pack4(${Q}.v_${Le}, ${Q}.v_${Le+1}, ${Q}.v_${Le+2}, ${Q}.v_${Le+3}, h, slane, ${Ae}u, ep_mom_off, ep_main_off, ${ze});
    if (${Ge}) {
      ${A(_e,Ae,"qw.x")}
      ${A(_e,Ae+1,"qw.y")}
      ${A(_e,Ae+2,"qw.z")}
      ${A(_e,Ae+3,"qw.w")}
    }
  }
`}return Oe}}}if(i==="none"){const re=ut(32,Q=>`    {
      let m = sh_mm[rb + ${Q}u];
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
  let f0 = vec4<f32>(a0${le});
  let f1 = vec4<f32>(a1${le});
  let f2 = vec4<f32>(a2${le});
  let f3 = vec4<f32>(a3${le});
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
${re}    let sp = rmx - rmn;
    sh_res[h * 4u + slane] = vec2<f32>(rmn, select(0.0, 1.0 / sp, sp > 1e-7));
    let mv = vec4<f32>(0.0, 0.0, rmn, sp);
${ae}
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
`,emit:({accVar:Q,cStart:se,cEnd:G,hrExpr:Se,storeMode:_e,momOffExpr:Be,alsoWriteMomMain:ze=!1,writeY8Expr:Ge="true"})=>{const We=`${Be} + (${Se}) * ${t}u`,Xe=ze?`${w}u + (row_idx * 2u + sg) * ${t}u`:"0u";let Oe=`  let ep_mom_off = ${We};
  let ep_main_off = ${Xe};
`;for(let Le=0;Le<G-se;Le+=4){const Ae=se+Le;Oe+=`  {
    let qw = reduce_pack4(${Q}.v_${Le}, ${Q}.v_${Le+1}, ${Q}.v_${Le+2}, ${Q}.v_${Le+3}, h, slane, ${Ae}u, ep_mom_off, ep_main_off, ${ze});
    if (${Ge}) {
      ${A(_e,Ae,"qw.x")}
      ${A(_e,Ae+1,"qw.y")}
      ${A(_e,Ae+2,"qw.z")}
      ${A(_e,Ae+3,"qw.w")}
    }
  }
`}return Oe}}}if(f){const re=ut(31,Q=>{const se=Q+1;return`    {
      let s = sh_sq[rb + ${se}u];
      let m = sh_mm[rb + ${se}u];
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
  let f0 = vec4<f32>(a0${le});
  let f1 = vec4<f32>(a1${le});
  let f2 = vec4<f32>(a2${le});
  let f3 = vec4<f32>(a3${le});
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
${re}    let fmn = f32(rmn);
    let sp = f32(rmx) - fmn;
    sh_res[h * 4u + slane] = vec2<f32>(fmn, select(0.0, 1.0 / sp, sp > 1e-7));
    let mv = vec4<f32>(rs, rq, fmn, sp);
${ae}
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
`,emit:({accVar:Q,cStart:se,cEnd:G,hrExpr:Se,storeMode:_e,momOffExpr:Be,alsoWriteMomMain:ze=!1,writeY8Expr:Ge="true"})=>{const We=`${Be} + (${Se}) * ${t}u`,Xe=ze?`${w}u + (row_idx * 2u + sg) * ${t}u`:"0u";let Oe=`  let ep_mom_off = ${We};
  let ep_main_off = ${Xe};
`;for(let Le=0;Le<G-se;Le+=4){const Ae=se+Le;Oe+=`  {
    let qw = reduce_pack4(${Q}.v_${Le}, ${Q}.v_${Le+1}, ${Q}.v_${Le+2}, ${Q}.v_${Le+3}, h, slane, ${Ae}u, ep_mom_off, ep_main_off, ${ze});
    if (${Ge}) {
      ${A(_e,Ae,"qw.x")}
      ${A(_e,Ae+1,"qw.y")}
      ${A(_e,Ae+2,"qw.z")}
      ${A(_e,Ae+3,"qw.w")}
    }
  }
`}return Oe}}}const R=ut(32,re=>`    {
      let s = sh_sq[rb + ${re}u];
      let m = sh_mm[rb + ${re}u];
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
  let f0 = vec4<f32>(a0${le});
  let f1 = vec4<f32>(a1${le});
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
${ae}
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
`,emit:({accVar:re,cStart:ne,cEnd:Q,hrExpr:se,storeMode:G,momOffExpr:Se,alsoWriteMomMain:_e=!1,writeY8Expr:Be="true"})=>{const ze=`${Se} + (${se}) * ${t}u`,Ge=_e?`${w}u + (row_idx * 2u + sg) * ${t}u`:"0u";let We=`  let ep_mom_off = ${ze};
  let ep_main_off = ${Ge};
`;for(let Xe=0;Xe<Q-ne;Xe+=2){const Oe=ne+Xe;We+=`  {
    let qw = reduce_pack2(${re}.v_${Xe}, ${re}.v_${Xe+1}, h, slane, ${Oe}u, ep_mom_off, ep_main_off, ${_e});
    if (${Be}) {
      ${A(G,Oe,"qw.x")}
      ${A(G,Oe+1,"qw.y")}
    }
  }
`}return We}}},Z=()=>`
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
}`,J=a[0],F=!f&&t>=16,V=()=>{const ee=O(!1),le=(Q,se)=>{const G=Q/4,Se=se/4;return ut(Se-G,_e=>{const Be=G+_e,ze=Be*4;return`          {
            let w0 = w16_4[wb + ${Be}u];
            let w1 = w16_4[wb + ${p+Be}u];
            let w2 = w16_4[wb + ${2*p+Be}u];
            a_${ze}     = fma(vn, ${W}(w0.x), fma(vc, ${W}(w1.x), fma(vp, ${W}(w2.x), a_${ze})));
            a_${ze+1} = fma(vn, ${W}(w0.y), fma(vc, ${W}(w1.y), fma(vp, ${W}(w2.y), a_${ze+1})));
            a_${ze+2} = fma(vn, ${W}(w0.z), fma(vc, ${W}(w1.z), fma(vp, ${W}(w2.z), a_${ze+2})));
            a_${ze+3} = fma(vn, ${W}(w0.w), fma(vc, ${W}(w1.w), fma(vp, ${W}(w2.w), a_${ze+3})));
          }
`})},A=Math.floor(J/4),ae=J%4;let R="";ae===0?R=`
        let vn = inp_4[base - ${A}u];
        let vc = inp_4[base];
        let vp = inp_4[base + ${A}u];`:A===0&&ae===1?R=`
        let vL = inp_4[base - 1u];
        let vc = inp_4[base];
        let vR = inp_4[base + 1u];
        let vn = ${W}(vL.w, vc.xyz);
        let vp = ${W}(vc.yzw, vR.x);`:ae===1?R=`
        let vL = inp_4[base - ${A+1}u];
        let vN = inp_4[base - ${A}u];
        let vc = inp_4[base];
        let vP = inp_4[base + ${A}u];
        let vR = inp_4[base + ${A+1}u];
        let vn = ${W}(vL.w, vN.xyz);
        let vp = ${W}(vP.yzw, vR.x);`:ae===2?R=`
        let vL = inp_4[base - ${A+1}u];
        let vN = ${A===0?"inp_4[base]":`inp_4[base - ${A}u]`};
        let vc = ${A===0?"vN":"inp_4[base]"};
        let vP = ${A===0?"vN":`inp_4[base + ${A}u]`};
        let vR = inp_4[base + ${A+1}u];
        let vn = ${W}(vL.zw, vN.xy);
        let vp = ${W}(vP.zw, vR.xy);`:R=`
        let vL = inp_4[base - ${A+1}u];
        let vN = ${A===0?"inp_4[base]":`inp_4[base - ${A}u]`};
        let vc = ${A===0?"vN":"inp_4[base]"};
        let vP = ${A===0?"vN":`inp_4[base + ${A}u]`};
        let vR = inp_4[base + ${A+1}u];
        let vn = ${W}(vL.yzw, vN.x);
        let vp = ${W}(vP.w, vR.xyz);`;const fe=(Q,se,G,Se)=>{const _e=Se-G,Be=ut(_e,We=>`  v_${We} : ${W},
`),ze=ut(_e,We=>{const Xe=G+We;if(i==="none"){const Oe=3*t+Xe;return`  var a_${Xe} = ${W}(${j}(qmeta_u[${Oe>>>2}u][${Oe&3}u]));
`}return`  var a_${Xe} = ${W}(0.0${Y});
`}),Ge=Array.from({length:_e},(We,Xe)=>`a_${G+Xe}`).join(", ");return`struct ${se} {
${Be}};
fn ${Q}(y : i32, z : i32, x_pad : u32) -> ${se} {
${ze}  var tap_yz : u32 = 0u;
  for (var dz : i32 = -1; dz <= 1; dz = dz + 1) {
    let sz = z + dz * ${J};
    for (var dy : i32 = -1; dy <= 1; dy = dy + 1) {
      let sy = y + dy * ${J};
      if ((u32(sz) | u32(sy)) < 256u) {
        let base = (u32(sz) * 256u + u32(sy)) * ${ct}u + x_pad;
${R}
        let wb = tap_yz * ${3*p}u;
${le(G,Se)}
      }
      tap_yz = tap_yz + 1u;
    }
  }
  return ${se}(${Ge});
}
`},re=(Q,se,G,Se,_e)=>{const Be=_e?`  let y = i32(p0.bg_y0 + lid.y);
  let z = i32(p0.bg_z0);`:`  var y : i32;
  var z : i32;
  if (p0.is_full != 0u) {
    y = i32(wid.y * 4u + lid.y);
    z = i32(wid.z);
  } else {
    let pk = strips0_u[wid.z >> 2u][wid.z & 3u];
    y = i32((pk & 255u) * 4u + lid.y);
    z = i32(pk >> 8u);
  }`,ze=_e?"lid.y * 2u + sg":"row_idx * 2u + sg",Ge=_e?`${y}u`:`${w}u`,We=_e?`  let s_bg_base = (${h}u + lid.y) * ${M}u + lid.x;`:`  let row_idx = u32(z) * 256u + u32(y);
  let use_act = u32(z) < 192u;
  let a_row_base = row_idx * ${m}u + x_pad;
  let s_row_base = ((u32(z) & 63u) * 256u + u32(y)) * ${M}u + lid.x;`;return`
@compute @workgroup_size(64, 4, 1)
fn ${Q}(@builtin(local_invocation_id) lid : vec3<u32>,
             @builtin(workgroup_id) wid : vec3<u32>${ee.entryArgs||""}) {
  let sg = lid.x >> 5u;
  let slane = lid.x & 31u;
${ee.localHeader}  let x_pad = lid.x + ${Vt}u;
${Be}
  let acc = ${se}(y, z, x_pad);
${We}
${ee.emit({accVar:"acc",cStart:G,cEnd:Se,hrExpr:ze,storeMode:_e?"stage_bg":"conv0_split",momOffExpr:Ge})}}`},ne=F?fe("run_conv0_lo","Conv0AccLo",0,c)+fe("run_conv0_hi","Conv0AccHi",c,t)+re("main_lo","run_conv0_lo",0,c,!1)+re("main_hi","run_conv0_hi",c,t,!1)+re("main_bg_lo","run_conv0_lo",0,c,!0)+re("main_bg_hi","run_conv0_hi",c,t,!0):fe("run_conv0","Conv0Acc",0,t)+re("main","run_conv0",0,t,!1)+re("main_bg","run_conv0",0,t,!0);return`${B}${N}
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
${ee.decls}${ne}`},K=()=>`${B}
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
    w_eff[idx] = w16_4[pp.next_w_vec4_off + idx] * ${j}(qs * scale_num);
  }
  if (lid < ${p}u) {
    ${i==="none"?`
    let mb = pp.next_meta_off + ${3*t}u + lid * 4u;
    w_eff[${z}u + lid] = ${W}(${j}(qmeta[mb]), ${j}(qmeta[mb + 1u]), ${j}(qmeta[mb + 2u]), ${j}(qmeta[mb + 3u]));
    `:`
    w_eff[${z}u + lid] = ${W}(0.0${Y});
    `}
  }
}`,q=()=>`
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
  let a_base = (z * 256u + y) * ${m}u + x_pad;
  let s_base = ((z & 63u) * 256u + y) * ${M}u + x4;
  for (var c : u32 = 0u; c < ${g}u; c = c + 1u) {
    let a_off = a_base + c * ${ct}u;
    act8_0[a_off] = stage[s_base + c * ${pt}u];
    act8_1[a_off] = stage[s_base + (${g}u + c) * ${pt}u];
    act8_2[a_off] = stage[s_base + (${2*g}u + c) * ${pt}u];
    act8_3[a_off] = stage[s_base + (${3*g}u + c) * ${pt}u];
  }
}`,ce=(ee,le)=>{const A=ee*g;return`
  for (var cl : u32 = 0u; cl < ${g}u; cl = cl + 1u) {
    let c = ${A}u + cl;
    let inv_qs = mom[c * 2u].w;
    let st = mom[c * 2u + 1u];
    let rm = mom[mom_base + c];
    let q_word = ${le?`stage[s_bg_base + c * ${pt}u]`:`select(stage[s_base + c * ${pt}u], act8_${ee}[a_base + cl * ${ct}u], use_act)`};
    let yv = unpack4x8unorm(q_word) * rm.w + vec4<f32>(rm.z);
    let a = vec4<f32>(
      act(yv.x * st.x + st.y),
      act(yv.y * st.x + st.y),
      act(yv.z * st.x + st.y),
      act(yv.w * st.x + st.y)
    );
    act8_${ee}[a_base + cl * ${ct}u] = pack4x8unorm((a * inv_qs + vec4<f32>(${k.zeroBin.toFixed(1)})) * (1.0 / 255.0));
  }`},pe=()=>`${Pn(r)}
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
  let a_base = row_idx * ${m}u + x_pad;
  let s_base = ((z & 63u) * 256u + y) * ${M}u + x4;
  let mom_base = ${w}u + (row_idx * 2u + sg) * ${t}u;
${ut(4,ee=>ce(ee,!1))}
}

@compute @workgroup_size(64, 4, 1)
fn norm_halo_fill(@builtin(local_invocation_id) lid : vec3<u32>,
                  @builtin(workgroup_id) wid : vec3<u32>) {
  let idx = wid.y * 4u + lid.y;
  if (idx >= np.n_halo) { return; }
  let x4 = lid.x;
  let sg = x4 >> 5u;
  let x_pad = x4 + ${Vt}u;
  let s_bg_base = ${h}u * ${M}u + x4;
  let mom_base = ${y}u + sg * ${t}u;
  let dst_row = norm_aux[np.halo_off + idx];
  let a_base = dst_row * ${m}u + x_pad;
${ut(4,ee=>ce(ee,!0))}
}`,ye=()=>{const ee=!f&&t>=16,le=O(f),A=(G,Se)=>f?`
          let ${G} = vec4<f16>(vec2<f16>(unpack2x16float(((${Se} & 0x00FF00FFu) << 2u) | 0x3C003C00u)), vec2<f16>(unpack2x16float(((${Se} >> 6u) & 0x03FC03FCu) | 0x3C003C00u))) - vec4<f16>(${k.sterbenzSub});`:`
          let ${G} = unpack4x8unorm(${Se}) - vec4<f32>(${k.uZeroFloat});`,ae=G=>`
          let uL = ${G}[base - off0];
          let uN = ${G}[base - off1];
          let uC = ${G}[base];
          let uP = ${G}[base + off1];
          let uR = ${G}[base + off0];
          let u_neg = (uL >> sh_l) | (uN << sh_r);
          let u_pos = (uP >> sh_r) | (uR << sh_l);`+A("vn","u_neg")+A("vc","uC")+A("vp","u_pos"),R=(G,Se)=>{const _e=G/4,Be=Se/4;if(P){const ze=p/2,Ge=p;let We="";for(let Xe=_e;Xe<Be;Xe+=2){const Oe=Xe*4,Le=Xe/2;We+=`          {
            let wp0 = w_eff_u[wbu + ${Le}u];
            let wp1 = w_eff_u[wbu + ${ze+Le}u];
            let wp2 = w_eff_u[wbu + ${Ge+Le}u];
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
`}return We}return ut(Be-_e,ze=>{const Ge=_e+ze,We=Ge*4;return`          {
            let w0 = w_eff[wb + ${Ge}u];
            let w1 = w_eff[wb + ${p+Ge}u];
            let w2 = w_eff[wb + ${2*p+Ge}u];
            a_${We}     = fma(vn, ${W}(w0.x), fma(vc, ${W}(w1.x), fma(vp, ${W}(w2.x), a_${We})));
            a_${We+1} = fma(vn, ${W}(w0.y), fma(vc, ${W}(w1.y), fma(vp, ${W}(w2.y), a_${We+1})));
            a_${We+2} = fma(vn, ${W}(w0.z), fma(vc, ${W}(w1.z), fma(vp, ${W}(w2.z), a_${We+2})));
            a_${We+3} = fma(vn, ${W}(w0.w), fma(vc, ${W}(w1.w), fma(vp, ${W}(w2.w), a_${We+3})));
          }
`})},fe=(G,Se,_e)=>{const Be=G*g,ze=`(${g}u + cp.pad0)`;return P?`        for (var ic : u32 = 0u; ic < ${ze}; ic = ic + 1u) {
          let base = row_off + ic * ${ct}u;
${ae(`act8_${G}`)}
          let wbu = wbu_tap + ${Be?`(${Be}u + ic)`:"ic"} * ${3*p/2}u;
${R(Se,_e)}
        }
`:`        for (var ic : u32 = 0u; ic < ${ze}; ic = ic + 1u) {
          let base = row_off + ic * ${ct}u;
${ae(`act8_${G}`)}
          let wb = wb_tap + ${Be?`(${Be}u + ic)`:"ic"} * ${3*p}u;
${R(Se,_e)}
        }
`},re=(G,Se,_e,Be)=>{const ze=Be-_e,Ge=ut(ze,Le=>`  v_${Le} : ${W},
`),We=ut(ze,Le=>{const Ae=_e+Le;if(i==="none"){const Ve=Ae>>>2,at=["x","y","z","w"][Ae&3];if(P){const tt=z+Ve>>>1,st=z+Ve&1?"u4_hi":"u4_lo";return`  var a_${Ae} = ${W}(${st}(w_eff_u[${tt}u]).${at});
`}return`  var a_${Ae} = ${W}(w_eff[${z+Ve}u].${at});
`}return`  var a_${Ae} = ${W}(0.0${Y});
`}),Xe=P?`        let wbu_tap = tap_yz * ${t*3*p/2}u;
`:`        let wb_tap = tap_yz * ${t*3*p}u;
`,Oe=Array.from({length:ze},(Le,Ae)=>`a_${_e+Ae}`).join(", ");return`struct ${Se} {
${Ge}};
fn ${G}(y : i32, z : i32, x_pad : u32, dp : u32) -> ${Se} {
${We}  let d_step = i32(dp & 63u);
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
${Xe}${ut(4,Le=>fe(Le,_e,Be))}      }
      tap_yz = tap_yz + 1u;
    }
  }
  return ${Se}(${Oe});
}
`},ne=(G,Se,_e,Be,ze)=>{let Ge="";ze==="bg"?Ge=`
  let y = i32(cp.bg_y0 + lid.y);
  let z = i32(cp.bg_z0);`:ze==="ext"?Ge=`
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
  }`;const We=ze==="bg"?"lid.y * 2u + sg":ze==="ext"?"ext_orig * 8u + lid.y * 2u + sg":"row_idx * 2u + sg",Xe=ze==="main"?`${w}u`:`${y}u`,Oe=ze==="bg"?"stage_bg":"stage",Le=ze==="main"?"true":"(((dp >> 24u) & 1u) != 0u)",Ae=ze==="bg"?`  let row_idx = u32(z) * 256u + u32(y);
  let s_bg_base = (${h}u + lid.y) * ${M}u + x4;`:`  let row_idx = u32(z) * 256u + u32(y);
  let s_row_base = ((u32(z) & 63u) * 256u + u32(y)) * ${M}u + x4;`;return`
@compute @workgroup_size(64, 4, 1)
fn ${G}(@builtin(local_invocation_id) lid : vec3<u32>,
             @builtin(workgroup_id) wid : vec3<u32>${le.entryArgs||""}) {
  let x4 = lid.x;
  let sg = x4 >> 5u;
  let slane = x4 & 31u;
${le.localHeader}  let x_pad = x4 + ${Vt}u;
${Ge}
  let dp = cp.d_pack;
  let acc = ${Se}(y, z, x_pad, dp);
${Ae}
${le.emit({accVar:"acc",cStart:_e,cEnd:Be,hrExpr:We,storeMode:Oe,momOffExpr:Xe,alsoWriteMomMain:ze!=="main",writeY8Expr:Le})}}`},Q=ee?re("run_conv_lo","ConvAccLo",0,c)+re("run_conv_hi","ConvAccHi",c,t)+ne("main_lo","run_conv_lo",0,c,"main")+ne("main_hi","run_conv_hi",c,t,"main")+ne("main_ext_lo","run_conv_lo",0,c,"ext")+ne("main_ext_hi","run_conv_hi",c,t,"ext")+ne("main_bg_lo","run_conv_lo",0,c,"bg")+ne("main_bg_hi","run_conv_hi",c,t,"bg"):re("run_conv","ConvAcc",0,t)+ne("main","run_conv",0,t,"main")+ne("main_ext","run_conv",0,t,"ext")+ne("main_bg","run_conv",0,t,"bg"),se=P?`fn u4_lo(u : vec4<u32>) -> vec4<f16> {
  return vec4<f16>(vec2<f16>(unpack2x16float(u.x)), vec2<f16>(unpack2x16float(u.y)));
}
fn u4_hi(u : vec4<u32>) -> vec4<f16> {
  return vec4<f16>(vec2<f16>(unpack2x16float(u.z)), vec2<f16>(unpack2x16float(u.w)));
}
@group(0) @binding(6) var<uniform> w_eff_u : array<vec4<u32>, ${Math.ceil(v/2)}>;`:`@group(0) @binding(6) var<storage, read> w_eff : array<${W}>;`;return`${B}${N}
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
${se}
@group(0) @binding(7) var<storage, read> strips : array<u32>;
@group(0) @binding(8) var<uniform> cp : BandConvParams;
${le.decls}${Q}`},be=ee=>{const le=ee*g;return`
  for (var cl : u32 = 0u; cl < ${g}u; cl = cl + 1u) {
    let c = ${le}u + cl;
    if (c < ${n}u) {
      let st = mom[c * 2u + 1u];
      let rm = mom[mom_base + c];
      let q_word = select(stage[s_base + c * ${pt}u], act8_${ee}[a_base + cl * ${ct}u], use_act);
      let yv = unpack4x8unorm(q_word) * rm.w + vec4<f32>(rm.z);
      let fv = vec4<f32>(
        act(yv.x * st.x + st.y),
        act(yv.y * st.x + st.y),
        act(yv.z * st.x + st.y),
        act(yv.w * st.x + st.y)
      );
      feat[c] = ${W}(fv);
    }
  }`};return{initActWgsl:Z,conv0Wgsl:V,prepWgsl:K,flushWgsl:q,normWgsl:pe,convWgsl:ye,clsWgsl:()=>`${B}
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
  let a_base = row_idx * ${m}u + x4 + ${Vt}u;
  let s_base = ((z & 63u) * 256u + y) * ${M}u + x4;
  let mom_base = ${w}u + (row_idx * 2u + sg) * ${t}u;

  var feat : array<${W}, ${n}>;
${ut(4,ee=>be(ee))}

  let w_cls = cp.w_vec4_off;
  let b_vec4 = cp.bias_off >> 2u;
${Lo({chan:n,clsK4:o,nclass:s,V4:W,suf:Y,readBiasStmt:"    let bv = qmeta_u[b_vec4 + k4];",biasExpr:ee=>`bv.${["x","y","z","w"][ee]}`,probCfg:d})}
}`,qmetaVec4Len:x,numConvs:u,totalWEffVec4s:v,useUniformWeff:P,csQ:g,halfPass0:F,halfPassConv:!f&&t>=16}}function Ma(e,t,n,s,o,a,r){return Ce(this,null,function*(){var Ft,ht;const i=T*T*T,f=r?i*4:i,l=t.dilations.length,u=t.cs/4,d=T*T*u*ct*4,c=(64*T+4)*t.cs*pt*4,m=(t.cs*2+4+(In+fo)*t.cs)*16,h=e.limits||{},M=Math.min((Ft=h.maxStorageBufferBindingSize)!=null?Ft:1/0,(ht=h.maxBufferSize)!=null?ht:1/0);if(d>M||c>M||m>M||f>M){const nt=Math.ceil(Math.max(d,c,m,f)/1048576);throw new Error(`meshnet_fast_v4: LowMem128 max buffer (${nt} MiB) exceeds device limit (${M>>>20} MiB)`)}const _=Io({cs:t.cs,chan:t.chan,nclass:t.nclass,clsK4:n.clsK4,dilations:t.dilations,activation:t.activation,norm:t.norm,hasF16:s,subgroupMode:o,numConvs:l,probCfg:r});console.log(`[WebGPU-V4-128M] ${t.chan}ch(cs=${t.cs})/${t.nclass}cls (${l} convs, ${t.activation}, norm=${t.norm}${r?", prob=3":""}) | ${s?"f16+sterbenz":"f32"} | ${vo(o)} | ZYCX-4Q+64slice | maxBuf=${(Math.max(d,c,m,f)/1048576).toFixed(1)} MiB`);const w=GPUBufferUsage.STORAGE,y=GPUBufferUsage.UNIFORM,$=GPUBufferUsage.COPY_DST,x=GPUBufferUsage.COPY_SRC,S=T*T*pn,z=S*(s?2:4),v=s?Math.ceil(_.totalWEffVec4s/2)*16:_.totalWEffVec4s*16,P=!!(r&&d>=f),k=`128|${t.cs}|${s?1:0}|${f}|${P?1:0}`,B=Mo(e,k,()=>{const nt=[],Ee=jn(e,nt),De=Ee.alloc,b={inpBuf:De(z,w|$|x),act8_0:De(d,w|$|x),act8_1:De(d,w|$|x),act8_2:De(d,w|$|x),act8_3:De(d,w|$|x),stageBuf:De(c,w),momBuf:De(m,w),labels8Buf:De(f,w|$|x),readbackBuf:De(f,GPUBufferUsage.MAP_READ|$),probPackTmpBuf:P?De(f,w|$|x):null};return{buffers:nt,named:b,bytes:Ee.getBytes()}}),{inpBuf:C,act8_0:N,act8_1:j,act8_2:Y,act8_3:W,stageBuf:D,momBuf:O,labels8Buf:Z,readbackBuf:J,probPackTmpBuf:F}=B.named,V=[],K=jn(e,V),q=K.alloc,ce=q(s?n.wF16.byteLength:n.wF32.byteLength,w|$),pe=q(n.qmetaF32.byteLength,w|y|$),ye=q(v,_.useUniformWeff?w|y:w),be=t.norm==="gn"&&!(a!=null&&a.disableConeSkip),we=q(Ye*4,y|$),ee=q(Ye*4,y|$),le=Array.from({length:l},()=>q(be?Ye*4:16,w|$)),A=Array.from({length:l-1},()=>q(be?(Ye+T*T)*4:16,w|$)),ae=q(16,y|$),R=q(16,y|$),fe=Array.from({length:l},()=>q(48,y|$)),re=Array.from({length:l-1},()=>q(16,y|$)),ne=Math.max(256,h.minUniformBufferOffsetAlignment||256),Q=ne>>>2,se=20,G=Math.max(1,(l-1)*se),Se=q(G*ne,y|$),_e=new Uint32Array(G*Q);e.queue.writeBuffer(ce,0,s?n.wF16:n.wF32),e.queue.writeBuffer(pe,0,n.qmetaF32);let Be;try{Be=yield zo(e,t,n,s,o,r,_)}catch(nt){for(const Ee of V)Ee.destroy();if(V.length=0,B.pooled)rn.get(e)===B&&xn(e);else{for(const Ee of B.buffers)Ee.destroy();B.buffers.length=0}throw nt}const{pInit:ze,pMomFin:Ge,pPrepW:We,pFlush:Xe,pNorm:Oe,pNormHalo:Le,pCls:Ae,pConv0:Ve,pConv:at}=Be,tt=(nt,Ee)=>e.createBindGroup({layout:nt,entries:Ee.map((De,b)=>({binding:b,resource:De&&De.buffer?De:{buffer:De}}))}),st=tt(ze.bgl,[N,j,Y,W]);{const nt=e.createCommandEncoder(),Ee=nt.beginComputePass();Ee.setPipeline(ze.pipe),Ee.setBindGroup(0,st),Ee.dispatchWorkgroups(1,T,T),Ee.end(),e.queue.submit([nt.finish()])}const Mt=(_.halfPass0?Ve.lo:Ve.main).bgl,It=tt(Mt,[C,N,j,Y,W,D,ce,O,{buffer:pe,offset:0,size:t.cs*16},we,ae]),zt=tt(Ae.bgl,[N,j,Y,W,D,ce,O,Z,pe,ee,R]),Yt=P?q(16,y|$):null,tn=P?tt(Ae.bgl,[N,j,Y,W,D,ce,O,Z,pe,ee,Yt]):null,At=Uo({device:e,hasF16:s,nvox:i,outBufBytes:f,inpBuf:C,act8_0:N,labels8Buf:Z,readbackBuf:J,pInit:ze,bgInit:st,pCls:Ae,bgCls:zt,clsUbo:R,packed:n,modelEntry:a,probCfg:r,canGpuProb:P,probSlots:P?{clsUbo1:Yt,bgCls1:tn,pass0HoldBuf:F,y0:N,y1:j,b:Y,sup:W}:null,ownedBuffers:V,mkBuf:q}),Gt=fe.map((nt,Ee)=>tt(Ge.bgl,[ce,pe,O,ye,le[Ee],nt])),bt=re.map((nt,Ee)=>tt(Oe.bgl,[N,j,Y,W,D,O,A[Ee],nt])),mt={buffer:Se,offset:0,size:32},$t=Array.from({length:l},(nt,Ee)=>Ee===0?null:tt(Xe.bgl,[N,j,Y,W,D,le[Ee],mt])),St=_.halfPassConv?at.lo:at.main,Kt=Array.from({length:l},(nt,Ee)=>Ee===0?null:tt(St.bgl,[N,j,Y,W,D,O,ye,le[Ee],mt])),an=s?new Uint16Array(S):new Float32Array(S),Ct=new Uint8Array(T*T),Pt=new Uint32Array(Ye),kt=new Uint32Array(Ye+T*T),ot=new Uint32Array(12),Bt=new Float32Array(ot.buffer),rt=new Uint32Array(4),Tt=(nt,Ee,De,b,L,U,H,E)=>{const me=nt*Q;_e[me]=Ee?1:0,_e[me+1]=De,_e[me+2]=b,_e[me+3]=L,_e[me+4]=U,_e[me+5]=H,_e[me+6]=E,_e[me+7]=0};function te(nt,Ee){return Ce(this,null,function*(){if(nt.length!==i)throw new Error(`meshnet_fast_v4 expected ${i} voxels, got ${nt.length}`);const De=t.norm==="gn"&&!(a!=null&&a.disableConeSkip),b=yield At.prepareInput({volume:nt,ioOpts:Ee,useCone:De,padInputHost:an,headRowHost:Ct,hasF16Flag:s}),L=b.info,U=Bo(Ct,L,t.dilations,De),H=new Array(l);for(let X=0;X<l;X++){const I=U.layers[X],he=I.isFull?Ye:I.mainStrips.length,de=I.isFull||!I.extStrips?0:I.extStrips.length,$e=I.haloRows?I.haloRows.length:0;if(X===0){!I.isFull&&he>0&&(Pt.set(I.mainStrips,0),e.queue.writeBuffer(we,0,Pt.subarray(0,he)),e.queue.writeBuffer(le[0],0,Pt.subarray(0,he))),H[0]={L:I,nMain:he,nExt:de,nHalo:$e};continue}const ge=new Uint32Array(8),Me=new Uint32Array(8),Te=new Uint32Array(8),et=new Uint32Array(8);if(!I.isFull){if(he>0){Pt.set(I.mainStrips,0);for(let ke=0;ke<he;ke++)Me[I.mainStrips[ke]>>>13]++;let ve=0;for(let ke=0;ke<8;ke++)ge[ke]=ve,ve+=Me[ke]}if(I.mode==="bwd"&&de>0){const ve=Array.from({length:8},()=>[]);for(let xe=0;xe<de;xe++){const Qe=I.extStrips[xe];ve[Qe>>>13].push((xe&65535)<<16|Qe)}let ke=he;for(let xe=0;xe<8;xe++){Te[xe]=ke;const Qe=ve[xe];et[xe]=Qe.length;for(let wt=0;wt<Qe.length;wt++)Pt[ke++]=Qe[wt]}e.queue.writeBuffer(le[X],0,Pt.subarray(0,he+de))}else he>0&&e.queue.writeBuffer(le[X],0,Pt.subarray(0,he))}const qe=I.mode==="rpure"&&$e>0||I.mode==="bwd"&&X+1<l,He=ms(t.dilations[X],qe),lt=(X-1)*se,Ze=I.bgStrip?I.bgStrip.yWg*4:0,je=I.bgStrip?I.bgStrip.z:0;for(let ve=0;ve<8;ve++)Tt(lt+ve,I.isFull,ve*32,ge[ve],Te[ve],He,Ze,je);for(let ve=0;ve<6;ve++)Tt(lt+8+ve,I.isFull,ve*32,ge[ve],0,0,0,0),Tt(lt+14+ve,!1,ve*32,Te[ve],0,0,0,0);H[X]={L:I,nMain:he,nExt:de,nHalo:$e,mainCount:Me,extCount:et,layerBaseSlot:lt}}l>1&&e.queue.writeBuffer(Se,0,_e);let E=_o(e,a);const me=[];if(E==="single"){const X=e.createCommandEncoder();b.runPrePasses(X,me),U.clsSkipped&&(X.clearBuffer(Z,0,f),U.clsStrips.length>0&&e.queue.writeBuffer(ee,0,U.clsStrips));for(let I=0;I<l;I++){const he=H[I],{L:de,nMain:$e,nHalo:ge}=he,Me=de.nMomExt||0,Te=de.isFull?Ye:de.normStrips?de.normStrips.length:0;if(I===0){const qe=de.isFull?64:1,He=de.isFull?T:$e,lt=!!(de.bgStrip&&ge>0);if(rt[0]=de.isFull?1:0,rt[1]=de.bgStrip?de.bgStrip.yWg*4:0,rt[2]=de.bgStrip?de.bgStrip.z:0,rt[3]=0,e.queue.writeBuffer(ae,0,rt),_.halfPass0)for(const[Ze,je]of[[Ve.lo,Ve.bgLo],[Ve.hi,Ve.bgHi]]){const ve=X.beginComputePass();ve.setBindGroup(0,It),He>0&&(ve.setPipeline(Ze.pipe),ve.dispatchWorkgroups(1,qe,He)),lt&&(ve.setPipeline(je.pipe),ve.dispatchWorkgroups(1,1,1)),ve.end(),me.push("conv0")}else{const Ze=X.beginComputePass();Ze.setBindGroup(0,It),He>0&&(Ze.setPipeline(Ve.main.pipe),Ze.dispatchWorkgroups(1,qe,He)),lt&&(Ze.setPipeline(Ve.bg.pipe),Ze.dispatchWorkgroups(1,1,1)),Ze.end(),me.push("conv0")}}else{const qe=at,He=Kt[I],lt=$t[I],{mainCount:Ze,extCount:je,layerBaseSlot:ve}=he,ke=de.mode==="rpure"&&!!de.bgStrip;for(let xe=0;xe<8;xe++){if(xe>=2){const Ne=xe-2,Ue=de.isFull||Ze[Ne]>0,vt=!de.isFull&&de.mode==="bwd"&&je[Ne]>0;if(Ue||vt){const Ie=X.beginComputePass();Ie.setPipeline(Xe.pipe),Ue&&(Ie.setBindGroup(0,lt,[(ve+8+Ne)*ne]),Ie.dispatchWorkgroups(1,de.isFull?64:1,de.isFull?32:Ze[Ne])),vt&&(Ie.setBindGroup(0,lt,[(ve+14+Ne)*ne]),Ie.dispatchWorkgroups(1,1,je[Ne])),Ie.end(),me.push("flushStage")}}const Qe=de.isFull||Ze[xe]>0,wt=!de.isFull&&de.mode==="bwd"&&je[xe]>0,gt=xe===0&&ke;if(!Qe&&!wt&&!gt)continue;const dt=[(ve+xe)*ne],ft=de.isFull?64:1,Lt=de.isFull?32:Ze[xe];if(_.halfPassConv)for(const[Ne,Ue,vt]of[[qe.lo,qe.extLo,qe.bgLo],[qe.hi,qe.extHi,qe.bgHi]]){const Ie=X.beginComputePass();Ie.setBindGroup(0,He,dt),Qe&&(Ie.setPipeline(Ne.pipe),Ie.dispatchWorkgroups(1,ft,Lt)),wt&&(Ie.setPipeline(Ue.pipe),Ie.dispatchWorkgroups(1,1,je[xe])),gt&&(Ie.setPipeline(vt.pipe),Ie.dispatchWorkgroups(1,1,1)),Ie.end(),me.push("convHidden")}else{const Ne=X.beginComputePass();Ne.setBindGroup(0,He,dt),Qe&&(Ne.setPipeline(qe.main.pipe),Ne.dispatchWorkgroups(1,ft,Lt)),wt&&(Ne.setPipeline(qe.ext.pipe),Ne.dispatchWorkgroups(1,1,je[xe])),gt&&(Ne.setPipeline(qe.bg.pipe),Ne.dispatchWorkgroups(1,1,1)),Ne.end(),me.push("convHidden")}}}const et=I+1<l?n.w0Vec4s+I*n.hiddenVec4PerLayer:0;ot[0]=I*n.metaStride,ot[1]=et,ot[2]=(I+1)*n.metaStride,ot[3]=I+1<l?1:0,ot[4]=I===0?1:0,ot[5]=de.isFull?1:0,ot[6]=$e,ot[7]=Me*8,Bt[8]=de.extWeight||0,ot[9]=0,ot[10]=0,ot[11]=0,e.queue.writeBuffer(fe[I],0,ot);{const qe=X.beginComputePass();qe.setBindGroup(0,Gt[I]),qe.setPipeline(Ge.pipe),qe.dispatchWorkgroups(t.cs,1,1),qe.end(),me.push("momentsPrep")}if(I+1<l){{const He=X.beginComputePass();He.setBindGroup(0,Gt[I]),He.setPipeline(We.pipe),He.dispatchWorkgroups(1,1,1),He.end(),me.push("momentsPrep")}const qe=de.isFull?0:Te;if((qe>0||ge>0)&&(qe>0&&kt.set(de.normStrips,0),ge>0&&kt.set(de.haloRows,qe),e.queue.writeBuffer(A[I],0,kt.subarray(0,qe+ge))),rt[0]=de.isFull?1:0,rt[1]=de.bgStrip?de.bgStrip.z*T+de.bgStrip.yWg*4:0,rt[2]=qe,rt[3]=ge,e.queue.writeBuffer(re[I],0,rt),de.isFull||Te>0||ge>0){const He=X.beginComputePass();He.setBindGroup(0,bt[I]),(de.isFull||Te>0)&&(He.setPipeline(Oe.pipe),He.dispatchWorkgroups(1,de.isFull?64:1,de.isFull?T:Te)),ge>0&&(He.setPipeline(Le.pipe),He.dispatchWorkgroups(1,Math.ceil(ge/4),1)),He.end(),me.push("normHalo")}}}return te.__passCategories=me,At.finishAndReadback({enc:X,schedule:U,passCategories:me,u4Tmp:rt,ioOpts:Ee})}const ie=Gn(e),Pe=typeof(Ee==null?void 0:Ee.onProgress)=="function"?Ee.onProgress:null,Fe=$o(U,l);let Re=0,Ke=-1;const Je=X=>{if(!Pe)return;const I=Math.min(.99,Re/Fe);let he="";X>=0&&X!==Ke&&(Ke=X,he=`Layer ${X+1}/${l}`),Pe(I,he)},ue=yo(e,e.__v4MsPerStrip||.12,Je);let oe=e.createCommandEncoder();b.runPrePasses(oe,me),U.clsSkipped&&(oe.clearBuffer(Z,0,f),U.clsStrips.length>0&&e.queue.writeBuffer(ee,0,U.clsStrips));for(let X=0;X<l;X++){const I=H[X],{L:he,nMain:de,nHalo:$e}=I,ge=he.nMomExt||0,Me=he.isFull?Ye:he.normStrips?he.normStrips.length:0,Te=ys(he,X,l);if(X===0){const qe=he.isFull?64:1,He=he.isFull?T:de,lt=!!(he.bgStrip&&$e>0);if(rt[0]=he.isFull?1:0,rt[1]=he.bgStrip?he.bgStrip.yWg*4:0,rt[2]=he.bgStrip?he.bgStrip.z:0,rt[3]=0,e.queue.writeBuffer(ae,0,rt),_.halfPass0)for(const[Ze,je]of[[Ve.lo,Ve.bgLo],[Ve.hi,Ve.bgHi]]){const ve=oe.beginComputePass();ve.setBindGroup(0,It),He>0&&(ve.setPipeline(Ze.pipe),ve.dispatchWorkgroups(1,qe,He)),lt&&(ve.setPipeline(je.pipe),ve.dispatchWorkgroups(1,1,1)),ve.end(),me.push("conv0")}else{const Ze=oe.beginComputePass();Ze.setBindGroup(0,It),He>0&&(Ze.setPipeline(Ve.main.pipe),Ze.dispatchWorkgroups(1,qe,He)),lt&&(Ze.setPipeline(Ve.bg.pipe),Ze.dispatchWorkgroups(1,1,1)),Ze.end(),me.push("conv0")}E==="calibrate"?(e.queue.submit([oe.finish()]),oe=e.createCommandEncoder()):E==="paced"&&(Re+=Te.convWork,oe=yield ue.submitChunk(oe,Te.convWork,0,{forceUiYield:!0}))}else{const qe=at,He=Kt[X],lt=$t[X],{mainCount:Ze,extCount:je,layerBaseSlot:ve}=I,ke=he.mode==="rpure"&&!!he.bgStrip;let xe=0;for(let Qe=0;Qe<8;Qe++){if(Qe>=2){const ft=Qe-2,Lt=he.isFull||Ze[ft]>0,Ne=!he.isFull&&he.mode==="bwd"&&je[ft]>0;if(Lt||Ne){const Ue=oe.beginComputePass();Ue.setPipeline(Xe.pipe),Lt&&(Ue.setBindGroup(0,lt,[(ve+8+ft)*ne]),Ue.dispatchWorkgroups(1,he.isFull?64:1,he.isFull?32:Ze[ft])),Ne&&(Ue.setBindGroup(0,lt,[(ve+14+ft)*ne]),Ue.dispatchWorkgroups(1,1,je[ft])),Ue.end(),me.push("flushStage")}}const wt=he.isFull||Ze[Qe]>0,gt=!he.isFull&&he.mode==="bwd"&&je[Qe]>0,dt=Qe===0&&ke;if(wt||gt||dt){const ft=[(ve+Qe)*ne],Lt=he.isFull?64:1,Ne=he.isFull?32:Ze[Qe];if(_.halfPassConv)for(const[Ue,vt,Ie]of[[qe.lo,qe.extLo,qe.bgLo],[qe.hi,qe.extHi,qe.bgHi]]){const Ht=oe.beginComputePass();Ht.setBindGroup(0,He,ft),wt&&(Ht.setPipeline(Ue.pipe),Ht.dispatchWorkgroups(1,Lt,Ne)),gt&&(Ht.setPipeline(vt.pipe),Ht.dispatchWorkgroups(1,1,je[Qe])),dt&&(Ht.setPipeline(Ie.pipe),Ht.dispatchWorkgroups(1,1,1)),Ht.end(),me.push("convHidden")}else{const Ue=oe.beginComputePass();Ue.setBindGroup(0,He,ft),wt&&(Ue.setPipeline(qe.main.pipe),Ue.dispatchWorkgroups(1,Lt,Ne)),gt&&(Ue.setPipeline(qe.ext.pipe),Ue.dispatchWorkgroups(1,1,je[Qe])),dt&&(Ue.setPipeline(qe.bg.pipe),Ue.dispatchWorkgroups(1,1,1)),Ue.end(),me.push("convHidden")}xe+=(wt?he.isFull?2048:Ze[Qe]:0)+(gt?je[Qe]:0)}if(E==="calibrate"&&(xe>=512||Qe===7&&xe>0)){const ft=performance.now();e.queue.submit([oe.finish()]),yield e.queue.onSubmittedWorkDone();const Lt=performance.now()-ft;if(oe=e.createCommandEncoder(),Re+=xe,xe>=512){const Ne=Lt/xe,Ue=Ne*Ye;e.__v4WinCalibrated=!0,ue.setMsPerStrip(Ne),!ie.isWindowsSharedIgpu&&Ue<po?(e.__v4WinFast=!0,E="pipelined",console.log(`[WebGPU-V4-128M] Windows GPU calibration: estFullLayer=${Ue.toFixed(1)}ms -> unthrottled pipelined mode`)):(e.__v4WinFast=!1,E="paced",console.log(`[WebGPU-V4-128M] Windows GPU calibration: estFullLayer=${Ue.toFixed(1)}ms -> TDR-safe 2-in-flight paced mode`),Je(X))}xe=0}else E==="paced"&&xe>0&&(xe*ue.getMsPerStrip()>=mo*.75||Qe===7)&&(Re+=xe,oe=yield ue.submitChunk(oe,xe,X),xe=0)}}const et=X+1<l?n.w0Vec4s+X*n.hiddenVec4PerLayer:0;ot[0]=X*n.metaStride,ot[1]=et,ot[2]=(X+1)*n.metaStride,ot[3]=X+1<l?1:0,ot[4]=X===0?1:0,ot[5]=he.isFull?1:0,ot[6]=de,ot[7]=ge*8,Bt[8]=he.extWeight||0,ot[9]=0,ot[10]=0,ot[11]=0,e.queue.writeBuffer(fe[X],0,ot);{const qe=oe.beginComputePass();qe.setBindGroup(0,Gt[X]),qe.setPipeline(Ge.pipe),qe.dispatchWorkgroups(t.cs,1,1),qe.end(),me.push("momentsPrep")}if(X+1<l){{const He=oe.beginComputePass();He.setBindGroup(0,Gt[X]),He.setPipeline(We.pipe),He.dispatchWorkgroups(1,1,1),He.end(),me.push("momentsPrep")}const qe=he.isFull?0:Me;if((qe>0||$e>0)&&(qe>0&&kt.set(he.normStrips,0),$e>0&&kt.set(he.haloRows,qe),e.queue.writeBuffer(A[X],0,kt.subarray(0,qe+$e))),rt[0]=he.isFull?1:0,rt[1]=he.bgStrip?he.bgStrip.z*T+he.bgStrip.yWg*4:0,rt[2]=qe,rt[3]=$e,e.queue.writeBuffer(re[X],0,rt),he.isFull||Me>0||$e>0){const He=oe.beginComputePass();He.setBindGroup(0,bt[X]),(he.isFull||Me>0)&&(He.setPipeline(Oe.pipe),He.dispatchWorkgroups(1,he.isFull?64:1,he.isFull?T:Me)),$e>0&&(He.setPipeline(Le.pipe),He.dispatchWorkgroups(1,Math.ceil($e/4),1)),He.end(),me.push("normHalo")}}E==="pipelined"?(e.queue.submit([oe.finish()]),oe=e.createCommandEncoder()):E==="calibrate"?(e.queue.submit([oe.finish()]),yield e.queue.onSubmittedWorkDone(),oe=e.createCommandEncoder(),Re+=(X===0?Te.convWork:0)+Te.normWork,X===l-1&&!e.__v4WinCalibrated&&(e.__v4WinCalibrated=!0,e.__v4WinFast=!ie.isWindowsSharedIgpu)):(Re+=Te.normWork,oe=yield ue.submitChunk(oe,Te.normWork,X))}return E==="paced"&&(yield ue.waitBeforeFinalSubmit()),te.__passCategories=me,At.finishAndReadback({enc:oe,schedule:U,passCategories:me,u4Tmp:rt,ioOpts:Ee,paced:E==="paced",onProgress:Pe})})}return At.warmupIoPipelines(),te.dispose=({keepSharedWorkspace:nt=!1}={})=>{At.dispose();for(const Ee of V)Ee.destroy();if(V.length=0,K.resetBytes(),B.pooled)nt?B.inUse=!1:rn.get(e)===B&&xn(e);else{for(const Ee of B.buffers)Ee.destroy();B.buffers.length=0}},te.gpuBytes=()=>B.bytes+K.getBytes(),te.__passCategories=[],te.__coneInfo=()=>({paddedVox:S,actMiB:d/1048576,mode:"LowMem128"}),te.kernels="v4-int8",te})}const Go=!0;function ks(o,a,r){return Ce(this,arguments,function*(e,t,n,s={}){ps++;try{return yield Aa(e,t,n,s)}finally{ps--}})}function Aa(o,a,r){return Ce(this,arguments,function*(e,t,n,s={}){var Fe,Re,Ke,Je;const i=t instanceof Uint8Array?t:new Uint8Array(t),f=lo(i.buffer.slice(i.byteOffset,i.byteOffset+i.byteLength)),l=uo(f);s!=null&&s.classifierBias&&l.classifier&&(l.classifier.bias=Float32Array.from(s.classifierBias));const u=xs(s),d=(s==null?void 0:s.dilations)||(u==null?void 0:u.dilations)||(l.convs.length===25?[16,8,4,2,1,16,8,4,2,1,16,8,4,2,1,16,8,4,2,1,16,8,4,2,1]:l.convs.length===9?[1,2,4,8,16,8,4,2,1]:fs),g=(s==null?void 0:s.activation)||(u==null?void 0:u.activation)||(l.affines.length||l.convs.length>=13?"gelu_tanh":"relu"),c=l.convs[0].outC,p=c>8?Math.ceil(c/8)*8:Math.ceil(c/4)*4,m=co(l,{nx:T,ny:T,nz:T,cs:p,activation:g,dilations:d}),h=xa(i,l,m,s),M=(s==null?void 0:s.outputType)==="probability"?pa(s,m.nclass):null,_=!!((Re=(Fe=e.features)==null?void 0:Fe.has)!=null&&Re.call(Fe,"shader-f16"))&&!(s!=null&&s.disableF16),w=wo(e,s),y=T*T*T,$=M?y*4:y,x=m.cs>=16,S=x?m.cs/2:m.cs,z=T*T*S*ct*4,v=T*T*S*pt*4,P=e.limits||{},k=Math.min((Ke=P.maxStorageBufferBindingSize)!=null?Ke:1/0,(Je=P.maxBufferSize)!=null?Je:1/0),B=ho(e,m,s);if((s!=null&&s.forceLowMem128||B||z>k||$>k)&&m.cs>=8&&m.cs%4===0)return Ma(e,m,h,_,w,s,M);if(z>k||$>k){const ue=Math.max(z,$)>>>20;throw new Error(`meshnet_fast_v4: buffer (${ue} MiB) exceeds device limit (${k>>>20} MiB)`)}const C=bo(e,s),N=Ro({cs:m.cs,chan:m.chan,nclass:m.nclass,clsK4:h.clsK4,dilations:m.dilations,activation:m.activation,norm:m.norm,hasF16:_,subgroupMode:w,splitHalves:x,probCfg:M,chunkableStd:C});console.log(`[WebGPU-V4] ${m.chan}ch(cs=${m.cs})/${m.nclass}cls (${m.dilations.length} convs, ${m.activation}, norm=${m.norm}${M?", prob=3":""}) | ${_?"f16+sterbenz":"f32"} | ${vo(w)} | ZYCX-pad80 | maxBuf=${(Math.max(z,$)/1048576).toFixed(1)} MiB`);const j=GPUBufferUsage.STORAGE,Y=GPUBufferUsage.COPY_DST,W=GPUBufferUsage.COPY_SRC,D=T*T*pn,O=D*(_?2:4),Z=In*m.cs*16,J=fo*m.cs*16,F=(m.cs*2+4)*16,V=_?Math.ceil(N.totalWEffVec4s/2)*16:N.totalWEffVec4s*16,K=`std|${m.cs}|${x?1:0}|${_?1:0}|${$}`,q=Mo(e,K,()=>{const ue=[],oe=jn(e,ue),X=oe.alloc,I={inpBuf:X(O,j|Y|W),act8_0:X(z,j|Y|W),act8_1:X(x?z:16,j|Y|W),y8_0:X(v,j|Y|W),y8_1:X(x?v:16,j|Y|W),momMainBuf:X(Z,j),momExtBuf:X(J,j),momStatsBuf:X(F,j),labels8Buf:X($,j|Y|W),readbackBuf:X($,GPUBufferUsage.MAP_READ|Y)};return{buffers:ue,named:I,bytes:oe.getBytes()}}),{inpBuf:ce,act8_0:pe,act8_1:ye,y8_0:be,y8_1:we,momMainBuf:ee,momExtBuf:le,momStatsBuf:A,labels8Buf:ae,readbackBuf:R}=q.named,fe=[],re=jn(e,fe),ne=re.alloc,Q=ne(_?h.wF16.byteLength:h.wF32.byteLength,j|Y),se=ne(h.qmetaF32.byteLength,j|Y),G=ne(V,N.useUniformWeff?j|GPUBufferUsage.UNIFORM:j),Se=m.dilations.length,_e=m.norm==="gn"&&!(s!=null&&s.disableConeSkip),Be=Array.from({length:Se},()=>ne(_e?Ye*4:16,j|Y)),ze=Array.from({length:Se-1},()=>ne(_e?(Ye+T*T)*4:16,j|Y)),Ge=ne(_e?Ye*4:16,j|Y),We=ne(16,GPUBufferUsage.UNIFORM|Y),Xe=ne(16,GPUBufferUsage.UNIFORM|Y),Oe=Array.from({length:Se},()=>ne(48,GPUBufferUsage.UNIFORM|Y)),Le=Array.from({length:Se-1},()=>ne(16,GPUBufferUsage.UNIFORM|Y)),Ae=Math.max(256,P.minUniformBufferOffsetAlignment||256),Ve=Ae>>>2,at=N.chunkableStd?Math.max(1,(Se-1)*ns):0,tt=N.chunkableStd?ne(at*Ae,GPUBufferUsage.UNIFORM|Y):null,st=N.chunkableStd?new Uint32Array(at*Ve):null,Mt=N.chunkableStd?null:Array.from({length:Se},()=>ne(16,GPUBufferUsage.UNIFORM|Y));e.queue.writeBuffer(Q,0,_?h.wF16:h.wF32),e.queue.writeBuffer(se,0,h.qmetaF32);let It;try{It=yield Co(e,m,h,_,w,x,M,N)}catch(ue){for(const oe of fe)oe.destroy();if(fe.length=0,q.pooled)rn.get(e)===q&&xn(e);else{for(const oe of q.buffers)oe.destroy();q.buffers.length=0}throw ue}const{pInit:zt,pMomFin:Yt,pPrepW:tn,pNorm:At,pNormHalo:Gt,pCls:bt,pConv0:mt,pConv:$t}=It,St=(ue,oe)=>e.createBindGroup({layout:ue,entries:oe.map((X,I)=>({binding:I,resource:X&&X.buffer?X:{buffer:X}}))}),Kt=St(zt.bgl,[pe,ye]);{const ue=e.createCommandEncoder(),oe=ue.beginComputePass();oe.setPipeline(zt.pipe),oe.setBindGroup(0,Kt),oe.dispatchWorkgroups(1,T,T),oe.end(),e.queue.submit([ue.finish()])}const an=(N.halfPass0?mt.lo:mt.main).bgl,Ct=St(an,[ce,be,we,Q,se,ee,le,Be[0],We]),Pt=St(bt.bgl,[be,we,Q,se,ee,A,ae,Ge,Xe]),kt=!!(M&&x&&z>=$&&v>=$),ot=kt?ne(16,GPUBufferUsage.UNIFORM|Y):null,Bt=kt?St(bt.bgl,[be,we,Q,se,ee,A,ae,Ge,ot]):null,rt=Uo({device:e,hasF16:_,nvox:y,outBufBytes:$,inpBuf:ce,act8_0:pe,labels8Buf:ae,readbackBuf:R,pInit:zt,bgInit:Kt,pCls:bt,bgCls:Pt,clsUbo:Xe,packed:h,modelEntry:s,probCfg:M,canGpuProb:kt,probSlots:kt?{clsUbo1:ot,bgCls1:Bt,pass0HoldBuf:pe,y0:be,y1:we,b:ye,sup:pe}:null,ownedBuffers:fe,mkBuf:ne}),Tt=Oe.map((ue,oe)=>St(Yt.bgl,[Q,se,ee,le,A,G,Be[oe],ue])),te=Le.map((ue,oe)=>St(At.bgl,[pe,ye,be,we,ee,le,A,ze[oe],ue])),Ft=N.chunkableStd?{buffer:tt,offset:0,size:32}:null,ht=N.halfPassConv?$t.lo:$t.main,nt=Array.from({length:Se},(ue,oe)=>oe===0?null:St(ht.bgl,[pe,ye,be,we,ee,le,G,Be[oe],N.chunkableStd?Ft:Mt[oe]])),Ee=(ue,oe,X,I,he,de)=>{const $e=ue*Ve;st[$e]=oe?1:0,st[$e+1]=X,st[$e+2]=I,st[$e+3]=0,st[$e+4]=he,st[$e+5]=de,st[$e+6]=0,st[$e+7]=0},De=(ue,oe,X,I,he,de,$e,ge)=>{if(!(de<=0&&$e<=0))if(N.halfPassConv){{const Me=ue.beginComputePass();I?Me.setBindGroup(0,X,I):Me.setBindGroup(0,X),de>0&&(Me.setPipeline(oe.lo.pipe),Me.dispatchWorkgroups(1,he,de)),$e>0&&(Me.setPipeline(oe.extLo.pipe),Me.dispatchWorkgroups(1,1,$e)),Me.end(),ge.push("convHidden")}{const Me=ue.beginComputePass();I?Me.setBindGroup(0,X,I):Me.setBindGroup(0,X),de>0&&(Me.setPipeline(oe.hi.pipe),Me.dispatchWorkgroups(1,he,de)),$e>0&&(Me.setPipeline(oe.extHi.pipe),Me.dispatchWorkgroups(1,1,$e)),Me.end(),ge.push("convHidden")}}else{const Me=ue.beginComputePass();I?Me.setBindGroup(0,X,I):Me.setBindGroup(0,X),de>0&&(Me.setPipeline(oe.main.pipe),Me.dispatchWorkgroups(1,he,de)),$e>0&&(Me.setPipeline(oe.ext.pipe),Me.dispatchWorkgroups(1,1,$e)),Me.end(),ge.push("convHidden")}},b=_?new Uint16Array(D):new Float32Array(D),L=new Uint8Array(T*T),U=new Uint32Array(Ye),H=new Uint32Array(Ye+T*T),E=new Uint32Array(12),me=new Float32Array(E.buffer),ie=new Uint32Array(4);function Pe(ue,oe){return Ce(this,null,function*(){if(ue.length!==y)throw new Error(`meshnet_fast_v4 expected ${y} voxels, got ${ue.length}`);const X=m.norm==="gn"&&!(s!=null&&s.disableConeSkip),I=yield rt.prepareInput({volume:ue,ioOpts:oe,useCone:X,padInputHost:b,headRowHost:L,hasF16Flag:_}),he=I.info,de=Bo(L,he,m.dilations,X);let $e=_o(e,s);const ge=[];if($e==="single"&&!N.chunkableStd){const ve=e.createCommandEncoder();I.runPrePasses(ve,ge),de.clsSkipped&&(ve.clearBuffer(ae,0,$),de.clsStrips.length>0&&e.queue.writeBuffer(Ge,0,de.clsStrips));for(let ke=0;ke<Se;ke++){const xe=de.layers[ke],Qe=xe.isFull?Ye:xe.mainStrips.length,wt=xe.isFull||!xe.extStrips?0:xe.extStrips.length,gt=xe.nMomExt||0,dt=xe.haloRows?xe.haloRows.length:0,ft=xe.isFull?Ye:xe.normStrips?xe.normStrips.length:0;if(!xe.isFull&&(Qe>0||wt>0)&&(Qe>0&&U.set(xe.mainStrips,0),wt>0&&U.set(xe.extStrips,Qe),e.queue.writeBuffer(Be[ke],0,U.subarray(0,Qe+wt))),ke===0){const Ne=xe.isFull?64:1,Ue=xe.isFull?T:Qe,vt=!!(xe.bgStrip&&dt>0);if(ie[0]=xe.isFull?1:0,ie[1]=xe.bgStrip?xe.bgStrip.yWg*4:0,ie[2]=xe.bgStrip?xe.bgStrip.z:0,ie[3]=0,e.queue.writeBuffer(We,0,ie),N.halfPass0){{const Ie=ve.beginComputePass();Ie.setBindGroup(0,Ct),Ue>0&&(Ie.setPipeline(mt.lo.pipe),Ie.dispatchWorkgroups(1,Ne,Ue)),vt&&(Ie.setPipeline(mt.bgLo.pipe),Ie.dispatchWorkgroups(1,1,1)),Ie.end(),ge.push("conv0")}{const Ie=ve.beginComputePass();Ie.setBindGroup(0,Ct),Ue>0&&(Ie.setPipeline(mt.hi.pipe),Ie.dispatchWorkgroups(1,Ne,Ue)),vt&&(Ie.setPipeline(mt.bgHi.pipe),Ie.dispatchWorkgroups(1,1,1)),Ie.end(),ge.push("conv0")}}else{const Ie=ve.beginComputePass();Ie.setBindGroup(0,Ct),Ue>0&&(Ie.setPipeline(mt.main.pipe),Ie.dispatchWorkgroups(1,Ne,Ue)),vt&&(Ie.setPipeline(mt.bg.pipe),Ie.dispatchWorkgroups(1,1,1)),Ie.end(),ge.push("conv0")}}else{const Ne=m.dilations[ke],Ue=nt[ke],vt=xe.isFull?64:1,Ie=xe.isFull?T:Qe,Ht=xe.mode==="rpure"&&dt>0||xe.mode==="bwd"&&ke+1<Se;ie[0]=xe.isFull?1:0,ie[1]=Qe,ie[2]=ms(Ne,Ht),ie[3]=0,e.queue.writeBuffer(Mt[ke],0,ie),De(ve,$t,Ue,null,vt,Ie,wt,ge)}const Lt=ke+1<Se?h.w0Vec4s+ke*h.hiddenVec4PerLayer:0;E[0]=ke*h.metaStride,E[1]=Lt,E[2]=(ke+1)*h.metaStride,E[3]=ke+1<Se?1:0,E[4]=ke===0?1:0,E[5]=xe.isFull?1:0,E[6]=Qe,E[7]=gt*8,me[8]=xe.extWeight||0,E[9]=0,E[10]=0,E[11]=0,e.queue.writeBuffer(Oe[ke],0,E);{const Ne=ve.beginComputePass();Ne.setBindGroup(0,Tt[ke]),Ne.setPipeline(Yt.pipe),Ne.dispatchWorkgroups(m.cs,1,1),Ne.end(),ge.push("momentsPrep")}if(ke+1<Se){{const Ue=ve.beginComputePass();Ue.setBindGroup(0,Tt[ke]),Ue.setPipeline(tn.pipe),Ue.dispatchWorkgroups(1,1,1),Ue.end(),ge.push("momentsPrep")}const Ne=xe.isFull?0:ft;if((Ne>0||dt>0)&&(Ne>0&&H.set(xe.normStrips,0),dt>0&&H.set(xe.haloRows,Ne),e.queue.writeBuffer(ze[ke],0,H.subarray(0,Ne+dt))),ie[0]=xe.isFull?1:0,ie[1]=xe.bgStrip?xe.bgStrip.z*T+xe.bgStrip.yWg*4:0,ie[2]=Ne,ie[3]=dt,e.queue.writeBuffer(Le[ke],0,ie),xe.isFull||ft>0||dt>0){const Ue=ve.beginComputePass();Ue.setBindGroup(0,te[ke]),(xe.isFull||ft>0)&&(Ue.setPipeline(At.pipe),Ue.dispatchWorkgroups(1,xe.isFull?64:1,xe.isFull?T:ft)),dt>0&&(Ue.setPipeline(Gt.pipe),Ue.dispatchWorkgroups(1,Math.ceil(dt/4),1)),Ue.end(),ge.push("normHalo")}}}return Pe.__passCategories=ge,rt.finishAndReadback({enc:ve,schedule:de,passCategories:ge,u4Tmp:ie,ioOpts:oe})}const Me=Gn(e),Te=typeof(oe==null?void 0:oe.onProgress)=="function"?oe.onProgress:null,et=$o(de,Se);let qe=0,He=-1;const lt=ve=>{if(!Te)return;const ke=Math.min(.99,qe/et);let xe="";ve>=0&&ve!==He&&(He=ve,xe=`Layer ${ve+1}/${Se}`),Te(ke,xe)},Ze=yo(e,e.__v4MsPerStrip||.12,lt);let je=e.createCommandEncoder();I.runPrePasses(je,ge),de.clsSkipped&&(je.clearBuffer(ae,0,$),de.clsStrips.length>0&&e.queue.writeBuffer(Ge,0,de.clsStrips));for(let ve=0;ve<Se;ve++){const ke=de.layers[ve],xe=ke.isFull?Ye:ke.mainStrips.length,Qe=ke.isFull||!ke.extStrips?0:ke.extStrips.length,wt=ke.nMomExt||0,gt=ke.haloRows?ke.haloRows.length:0,dt=ke.isFull?Ye:ke.normStrips?ke.normStrips.length:0,ft=ys(ke,ve,Se);if(!ke.isFull&&(xe>0||Qe>0)&&(xe>0&&U.set(ke.mainStrips,0),Qe>0&&U.set(ke.extStrips,xe),e.queue.writeBuffer(Be[ve],0,U.subarray(0,xe+Qe))),ve===0){const Ne=ke.isFull?64:1,Ue=ke.isFull?T:xe,vt=!!(ke.bgStrip&&gt>0);if(ie[0]=ke.isFull?1:0,ie[1]=ke.bgStrip?ke.bgStrip.yWg*4:0,ie[2]=ke.bgStrip?ke.bgStrip.z:0,ie[3]=0,e.queue.writeBuffer(We,0,ie),N.halfPass0){{const Ie=je.beginComputePass();Ie.setBindGroup(0,Ct),Ue>0&&(Ie.setPipeline(mt.lo.pipe),Ie.dispatchWorkgroups(1,Ne,Ue)),vt&&(Ie.setPipeline(mt.bgLo.pipe),Ie.dispatchWorkgroups(1,1,1)),Ie.end(),ge.push("conv0")}{const Ie=je.beginComputePass();Ie.setBindGroup(0,Ct),Ue>0&&(Ie.setPipeline(mt.hi.pipe),Ie.dispatchWorkgroups(1,Ne,Ue)),vt&&(Ie.setPipeline(mt.bgHi.pipe),Ie.dispatchWorkgroups(1,1,1)),Ie.end(),ge.push("conv0")}}else{const Ie=je.beginComputePass();Ie.setBindGroup(0,Ct),Ue>0&&(Ie.setPipeline(mt.main.pipe),Ie.dispatchWorkgroups(1,Ne,Ue)),vt&&(Ie.setPipeline(mt.bg.pipe),Ie.dispatchWorkgroups(1,1,1)),Ie.end(),ge.push("conv0")}$e==="calibrate"?(e.queue.submit([je.finish()]),je=e.createCommandEncoder()):$e==="paced"&&(qe+=ft.convWork,je=yield Ze.submitChunk(je,ft.convWork,0,{forceUiYield:!0}))}else{const Ne=m.dilations[ve],Ue=nt[ve],vt=ke.isFull?64:1,Ie=ke.isFull?T:xe,Ht=ke.mode==="rpure"&&gt>0||ke.mode==="bwd"&&ve+1<Se,Ln=ms(Ne,Ht);if(!N.chunkableStd)ie[0]=ke.isFull?1:0,ie[1]=xe,ie[2]=Ln,ie[3]=0,e.queue.writeBuffer(Mt[ve],0,ie),De(je,$t,Ue,null,vt,Ie,Qe,ge);else if($e==="pipelined"||$e==="single"){const Xt=(ve-1)*ns;Ee(Xt,ke.isFull,xe,Ln,0,0),e.queue.writeBuffer(tt,Xt*Ae,st.subarray(Xt*Ve,(Xt+1)*Ve)),De(je,$t,Ue,[Xt*Ae],vt,Ie,Qe,ge)}else{const Xt=(ve-1)*ns,Kn=$e==="calibrate"?1024:Math.max(256,Math.min(4096,Math.round(mo/Math.max(.005,Ze.getMsPerStrip())))),yn=[];let Un=0;if(ke.isFull){const Qt=Math.max(4,Math.min(64,Math.round(Kn/64)));for(let Nt=0;Nt<T;Nt+=Qt){const Ut=Math.min(Qt,T-Nt),Jt=Xt+Un++;Ee(Jt,!0,xe,Ln,Nt,0),yn.push({slotIdx:Jt,mainY:64,mainCountZ:Ut,extCountZ:0,strips:Ut*64})}}else{const Qt=Math.max(256,Kn);for(let Ut=0;Ut<xe;Ut+=Qt){const Jt=Math.min(Qt,xe-Ut),gn=Xt+Un++;Ee(gn,!1,xe,Ln,Ut,0),yn.push({slotIdx:gn,mainY:1,mainCountZ:Jt,extCountZ:0,strips:Jt})}const Nt=Math.max(256,Kn);for(let Ut=0;Ut<Qe;Ut+=Nt){const Jt=Math.min(Nt,Qe-Ut),gn=Xt+Un++;Ee(gn,!1,xe,Ln,0,Ut),yn.push({slotIdx:gn,mainY:1,mainCountZ:0,extCountZ:Jt,strips:Jt})}}Un>0&&e.queue.writeBuffer(tt,Xt*Ae,st.subarray(Xt*Ve,(Xt+Un)*Ve));let Zt=0;for(let Qt=0;Qt<yn.length;Qt++){const Nt=yn[Qt];if(De(je,$t,Ue,[Nt.slotIdx*Ae],Nt.mainY,Nt.mainCountZ,Nt.extCountZ,ge),$e==="pipelined")continue;Zt+=Nt.strips;const Ut=Qt===yn.length-1;if($e==="calibrate"&&(Zt>=512||Ut&&Zt>0)){const Jt=performance.now();e.queue.submit([je.finish()]),yield e.queue.onSubmittedWorkDone();const gn=performance.now()-Jt;if(je=e.createCommandEncoder(),qe+=Zt,Zt>=512){const zs=gn/Zt,Zn=zs*Ye;e.__v4WinCalibrated=!0,Ze.setMsPerStrip(zs),!Me.isWindowsSharedIgpu&&Zn<po?(e.__v4WinFast=!0,$e="pipelined",console.log(`[WebGPU-V4] Windows GPU calibration: estFullLayer=${Zn.toFixed(1)}ms -> unthrottled pipelined mode`)):(e.__v4WinFast=!1,$e="paced",console.log(`[WebGPU-V4] Windows GPU calibration: estFullLayer=${Zn.toFixed(1)}ms -> TDR-safe 2-in-flight paced mode`),lt(ve))}Zt=0}else $e==="paced"&&(qe+=Zt,je=yield Ze.submitChunk(je,Zt,ve),Zt=0)}}}const Lt=ve+1<Se?h.w0Vec4s+ve*h.hiddenVec4PerLayer:0;E[0]=ve*h.metaStride,E[1]=Lt,E[2]=(ve+1)*h.metaStride,E[3]=ve+1<Se?1:0,E[4]=ve===0?1:0,E[5]=ke.isFull?1:0,E[6]=xe,E[7]=wt*8,me[8]=ke.extWeight||0,E[9]=0,E[10]=0,E[11]=0,e.queue.writeBuffer(Oe[ve],0,E);{const Ne=je.beginComputePass();Ne.setBindGroup(0,Tt[ve]),Ne.setPipeline(Yt.pipe),Ne.dispatchWorkgroups(m.cs,1,1),Ne.end(),ge.push("momentsPrep")}if(ve+1<Se){{const Ue=je.beginComputePass();Ue.setBindGroup(0,Tt[ve]),Ue.setPipeline(tn.pipe),Ue.dispatchWorkgroups(1,1,1),Ue.end(),ge.push("momentsPrep")}const Ne=ke.isFull?0:dt;if((Ne>0||gt>0)&&(Ne>0&&H.set(ke.normStrips,0),gt>0&&H.set(ke.haloRows,Ne),e.queue.writeBuffer(ze[ve],0,H.subarray(0,Ne+gt))),ie[0]=ke.isFull?1:0,ie[1]=ke.bgStrip?ke.bgStrip.z*T+ke.bgStrip.yWg*4:0,ie[2]=Ne,ie[3]=gt,e.queue.writeBuffer(Le[ve],0,ie),ke.isFull||dt>0||gt>0){const Ue=je.beginComputePass();Ue.setBindGroup(0,te[ve]),(ke.isFull||dt>0)&&(Ue.setPipeline(At.pipe),Ue.dispatchWorkgroups(1,ke.isFull?64:1,ke.isFull?T:dt)),gt>0&&(Ue.setPipeline(Gt.pipe),Ue.dispatchWorkgroups(1,Math.ceil(gt/4),1)),Ue.end(),ge.push("normHalo")}}if($e==="pipelined")e.queue.submit([je.finish()]),je=e.createCommandEncoder();else if($e==="calibrate")e.queue.submit([je.finish()]),yield e.queue.onSubmittedWorkDone(),je=e.createCommandEncoder(),qe+=(ve===0||!N.chunkableStd?ft.convWork:0)+ft.normWork,ve===Se-1&&!e.__v4WinCalibrated&&(e.__v4WinCalibrated=!0,e.__v4WinFast=!Me.isWindowsSharedIgpu);else if($e!=="single"){const Ne=(!N.chunkableStd&&ve>0?ft.convWork:0)+ft.normWork;qe+=Ne,je=yield Ze.submitChunk(je,Ne,ve)}}return $e==="paced"&&(yield Ze.waitBeforeFinalSubmit()),Pe.__passCategories=ge,rt.finishAndReadback({enc:je,schedule:de,passCategories:ge,u4Tmp:ie,ioOpts:oe,paced:$e==="paced",onProgress:Te})})}return rt.warmupIoPipelines(),Pe.dispose=({keepSharedWorkspace:ue=!1}={})=>{rt.dispose();for(const oe of fe)oe.destroy();if(fe.length=0,re.resetBytes(),q.pooled)ue?q.inUse=!1:rn.get(e)===q&&xn(e);else{for(const oe of q.buffers)oe.destroy();q.buffers.length=0}},Pe.gpuBytes=()=>q.bytes+re.getBytes(),Pe.__passCategories=[],Pe.__coneInfo=()=>({paddedVox:D,actMiB:z/1048576}),Pe.kernels="v4-int8",Pe})}function Ms(e){return Ce(this,null,function*(){var i,f,l,u;if(!e)return;const t=()=>ps>0||!!e.__isLost;if(t())return;const n=!!((f=(i=e.features)==null?void 0:i.has)!=null&&f.call(i,"shader-f16")),s=wo(e,null),o=e.limits||{},a=Math.min((l=o.maxStorageBufferBindingSize)!=null?l:1/0,(u=o.maxBufferSize)!=null?u:1/0);if(yield sn(e,n?"prep_in_u8_f16":"prep_in_u8_f32",()=>gs(!0,n),"main",["read-only-storage","storage","uniform"]),t()||(yield sn(e,"transpose_u8_v4",Ao,"main",["read-only-storage","storage"]),t()))return;const r=[{chan:24,cs:24,nclass:0,dilations:fs,activation:"gelu_tanh",norm:"gn"},{chan:15,cs:16,nclass:0,dilations:[16,8,4,2,1],activation:"gelu_tanh",norm:"gn"},{chan:16,cs:16,nclass:0,dilations:fs,activation:"gelu_tanh",norm:"gn"}];for(const d of r){if(t())return;const g=d.cs>=16,c=g?d.cs/2:d.cs;if(T*T*c*ct*4>a||ho(e,d,null)){const h=Io({cs:d.cs,chan:d.chan,nclass:0,clsK4:0,dilations:d.dilations,activation:d.activation,norm:d.norm,hasF16:n,subgroupMode:s,numConvs:d.dilations.length,probCfg:null});yield zo(e,d,null,n,s,null,h,{includeCls:!1,sequential:!0,shouldAbort:t})}else{const h=bo(e,null),M=Ro({cs:d.cs,chan:d.chan,nclass:0,clsK4:0,dilations:d.dilations,activation:d.activation,norm:d.norm,hasF16:n,subgroupMode:s,splitHalves:g,probCfg:null,chunkableStd:h});yield Co(e,d,null,n,s,g,null,M,{includeCls:!1,sequential:!0,shouldAbort:t})}}})}const Pa=(e,t)=>Ce(null,null,function*(){const n=yield fetch(t).then(s=>s.arrayBuffer());return ks(e,new Uint8Array(n))}),To=!0,za={load:Pa,setupNet:ks,warmupV4CorePipelines:Ms,supportsF32Fallback:Go,supportsGpuNativeIO:To},_s=Object.freeze(Object.defineProperty({__proto__:null,default:za,releaseV4Workspace:xn,setupNet:ks,supportsF32Fallback:Go,supportsGpuNativeIO:To,warmupV4CorePipelines:Ms},Symbol.toStringTag,{value:"Module"}));function Ca(){var e;try{if(new URLSearchParams(((e=globalThis.location)==null?void 0:e.search)||"").get("webgpuKernels")==="tinygrad")return"disabled by ?webgpuKernels=tinygrad"}catch(t){}return null}const Fn=new Set(["meshnet_fast_v4","dkatlas24_int8","mindmap24_int8","model16chan18cls_int8","mindgrab_int8"]);function Ba(e){return Fn.has(e)}const vn=Object.assign({"./webgpu_runners/dkatlas24_synth_f32_runner.js":()=>fn(()=>import("./dkatlas24_synth_f32_runner-Bb7lxqr0.js"),[],import.meta.url),"./webgpu_runners/dkatlas24_synth_runner.js":()=>fn(()=>import("./dkatlas24_synth_runner-5rLWbXWF.js"),[],import.meta.url),"./webgpu_runners/mindgrab_runner.js":()=>fn(()=>import("./mindgrab_runner-B-UQtXej.js"),[],import.meta.url),"./webgpu_runners/model16chan18cls_f32_runner.js":()=>fn(()=>import("./model16chan18cls_f32_runner-B5FaUMez.js"),[],import.meta.url),"./webgpu_runners/model16chan18cls_runner.js":()=>fn(()=>import("./model16chan18cls_runner-aMK3m7Gj.js"),[],import.meta.url),"./webgpu_runners/model24chan18cls_gdice_prio_probability_runner.js":()=>fn(()=>import("./model24chan18cls_gdice_prio_probability_runner-BHqpfuCi.js"),[],import.meta.url),"./webgpu_runners/model24chan18cls_gdice_prio_runner.js":()=>fn(()=>import("./model24chan18cls_gdice_prio_runner-B5cN26gD.js"),[],import.meta.url)});function Fa(){const e=Object.keys(vn).map(t=>{const n=t.match(/\/([^\/]+)_runner\.js$/);return n?n[1]:null}).filter(Boolean);return Array.from(new Set([...Fn,...e]))}function La(e){if(Fn.has(e))return()=>Ce(null,null,function*(){return _s});const t=`./webgpu_runners/${e}_runner.js`;if(vn[t])return vn[t];const n=e.toLowerCase();for(const s of Fn)if(s.toLowerCase()===n)return()=>Ce(null,null,function*(){return _s});for(const[s,o]of Object.entries(vn))if(s.toLowerCase().includes(`/${n}_runner.js`))return o;for(const[s,o]of Object.entries(vn))if(s.includes(e))return o;return null}function Ua(e){if(Fn.has(e))return!0;const t=`./webgpu_runners/${e}_runner.js`;if(vn[t])return!0;const n=e.toLowerCase();for(const o of Fn)if(o.toLowerCase()===n)return!0;const s=`/${n}_runner.js`;return Object.keys(vn).some(o=>o.toLowerCase().endsWith(s))}function Wa(e,t){if(typeof Float16Array=="undefined")throw new Error("Float16Array unavailable: cannot cast fp32 master weights to fp16.");const n=new DataView(e.buffer,e.byteOffset,e.byteLength),s=Number(n.getBigUint64(0,!0)),o=JSON.parse(new TextDecoder("utf8").decode(e.subarray(8,8+s))),a=8+s;if(!Object.entries(o).some(([p,m])=>p!=="__metadata__"&&m.dtype==="F32"))return e;const i={},f=[];let l=0;for(const[p,m]of Object.entries(o)){if(p==="__metadata__"){i[p]=m;continue}const[h,M]=m.data_offsets,_=e.subarray(a+h,a+M);let w,y;if(m.dtype==="F32"){const $=new Float32Array(_.slice().buffer),x=new Float16Array($);w=new Uint8Array(x.buffer),y="F16"}else w=_,y=m.dtype;i[p]={dtype:y,shape:m.shape,data_offsets:[l,l+w.byteLength]},f.push(w),l+=w.byteLength}const u=new TextEncoder().encode(JSON.stringify(i)),d=(8-u.byteLength%8)%8,g=new Uint8Array(8+u.byteLength+d+l);new DataView(g.buffer).setBigUint64(0,BigInt(u.byteLength+d),!0),g.set(u,8),g.fill(32,8+u.byteLength,8+u.byteLength+d);let c=8+u.byteLength+d;for(const p of f)g.set(p,c),c+=p.byteLength;return console.log("[WebGPU] Cast fp32 master weights -> fp16."),g}function qa(e,t){try{const n=r=>!!(e.features&&e.features.has&&e.features.has(r)),s=e.limits||{},o=typeof navigator!="undefined"&&navigator.userAgent||"unknown",a=/Safari/.test(o)&&!/Chrome|Chromium|Android/.test(o);console.log("[SAFARI-DEBUG] ===== WebGPU device capabilities ====="),console.log("[SAFARI-DEBUG] model:",(t==null?void 0:t.modelName)||(t==null?void 0:t.webgpu_runner)||"(unknown)"),console.log("[SAFARI-DEBUG] userAgent:",o,"| classified Safari:",a),console.log("[SAFARI-DEBUG] shader-f16:",n("shader-f16")),console.log("[SAFARI-DEBUG] features:",e.features?Array.from(e.features):"(none)"),console.log("[SAFARI-DEBUG] limits:",{maxBufferSize:s.maxBufferSize,maxStorageBufferBindingSize:s.maxStorageBufferBindingSize,maxComputeInvocationsPerWorkgroup:s.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:s.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:s.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:s.maxComputeWorkgroupSizeZ,maxComputeWorkgroupsPerDimension:s.maxComputeWorkgroupsPerDimension}),console.log("[SAFARI-DEBUG] BC_WEBGPU_DEBUG (logits readback):",typeof window!="undefined"&&!!window.BC_WEBGPU_DEBUG),console.log("[SAFARI-DEBUG] =======================================")}catch(n){console.warn("[SAFARI-DEBUG] capability dump failed:",n==null?void 0:n.message)}}function No(){return typeof requestAnimationFrame!="function"?new Promise(e=>setTimeout(e,0)):new Promise(e=>{let t=!1;const n=()=>{t||(t=!0,e())},s=setTimeout(n,25);requestAnimationFrame(()=>{clearTimeout(s),setTimeout(n,0)})})}const Ra=6,Ia=4,bn=new Map,os=new Map,hn=new Map,mn=new WeakMap,rs=new WeakSet;function Ga(e){return Ce(this,null,function*(){if(!(!e||rs.has(e))){rs.add(e);try{yield Ms(e)}catch(t){rs.delete(e),console.debug("[WebGPU] Background pipeline warmup skipped:",(t==null?void 0:t.message)||t)}}})}function Oo(e,{keepSharedWorkspace:t=!1}={}){var n;if(e)try{if(typeof((n=e.execute)==null?void 0:n.dispose)=="function")e.execute.dispose({keepSharedWorkspace:t});else if(e.ownedBuffers)for(const s of e.ownedBuffers)s.destroy()}catch(s){console.warn("[WebGPU] Failed to dispose cached runner buffers:",s)}}function Ta(e,t,n,s){var o,a,r,i,f,l,u,d,g,c,p,m,h,M,_,w,y,$,x;return JSON.stringify([e,t,n,(o=s.id)!=null?o:null,(a=s.numClasses)!=null?a:null,(r=s.outputType)!=null?r:null,(i=s.dilations)!=null?i:null,(f=s.activation)!=null?f:null,(l=s.quantize8Bit)!=null?l:null,(u=s.forceFP32)!=null?u:null,(d=s.disableF16)!=null?d:null,(g=s.disableSubgroups)!=null?g:null,(c=s.disableConeSkip)!=null?c:null,(p=s.forceLowMem128)!=null?p:null,(m=s.webgpuExecMode)!=null?m:null,(h=s.softmaxTemperature)!=null?h:null,(M=s.brainSupportTemperature)!=null?M:null,(_=s.brainSupportPower)!=null?_:null,(w=s.partialVolumeSigma)!=null?w:null,(y=s.probabilityGroups)!=null?y:null,($=s.probabilityDisplay)!=null?$:null,(x=s.classifierBias)!=null?x:null])}function Zs(e){const t=bn.get(e);if(t)return bn.delete(e),bn.set(e,t),Promise.resolve(t);const n=os.get(e);if(n)return n;const s=Ce(null,null,function*(){let o;try{const r=yield fetch(e);if(!r.ok)throw new Error(`HTTP ${r.status}: ${r.statusText}`);o=yield r.arrayBuffer()}catch(r){throw new Error(`Failed to load weights from '${e}': ${r.message}`)}const a=new Uint8Array(o);for(bn.set(e,a);bn.size>Ra;){const r=bn.keys().next().value;bn.delete(r)}return a}).finally(()=>{os.delete(e)});return os.set(e,s),s}function Na(e,t,n,s){if(!n)return e;const o=hn.get(t);if(o)return hn.delete(t),hn.set(t,o),o;const a=Wa(e);for(hn.set(t,a);hn.size>Ia;){const r=hn.keys().next().value;hn.delete(r)}return a}function bs(e,t){return Ce(this,null,function*(){const n=[],s=e.createBuffer.bind(e);e.createBuffer=o=>{const a=s(o);return n.push(a),a};try{return{result:yield t(),buffers:n}}finally{e.createBuffer=s}})}function hs(e){let t=0;for(const n of e)t+=Number(n==null?void 0:n.size)||0;return t}function as(e){for(const t of e)try{t.destroy()}catch(n){}}function Oa(e,t,n){return Ce(this,null,function*(){var $,x,S,z,v,P,k;const s=($=Ca())!=null?$:ia(e,t);let o=t.webgpu_runner,a=t.webgpu_safetensor;const r=!!(e.features&&e.features.has&&e.features.has("shader-f16"));let i=!1;s&&(t.forceFP32?(i=!0,console.log("[WebGPU] forceFP32: using fp32 runner and weights.")):!r&&Ua(`${o}_f32`)&&(i=!0,console.log("[WebGPU] shader-f16 not supported on this device -> auto-selecting fp32 runner and weights.")),i&&(o=`${o}_f32`,a=a.replace(".safetensors","_f32.safetensors")),t.enableTTA&&t.webgpuTTArunner&&(console.log("[WebGPU] TTA Enabled: Switching to TTA runner and weights."),o=`${o}_tta`,a=a.replace(".safetensors","_tta.safetensors")));const l=Ta(s?"runner":"native",s?o:"webgpu_native",a,t),u=mn.get(e);if(u&&u.runnerKey===l)return xt(it({},u),{cacheHit:!0});const d=!!(s&&Ba(o));if(n("Loading model…",.1),u&&(mn.delete(e),Oo(u,{keepSharedWorkspace:d})),d||xn(e),qa(e,t),s)console.log(`[WebGPU-native] not used for ${t.modelName||t.webgpu_runner}: ${s}`);else{let B=[];try{const C=yield Zs(a),N=yield bs(e,()=>ca(e,C,n,t));B=N.buffers;const j=N.result;j.kernels="hand-written";const Y={runnerKey:l,runnerName:"webgpu_native",weightsPath:a,execute:j,supportsGpuNativeIO:!1,ownedBuffers:B,gpuBytes:hs(B)};return mn.set(e,Y),console.log("[WebGPU-native] Using hand-written WebGPU kernels."),xt(it({},Y),{cacheHit:!1})}catch(C){as(B),console.warn("[WebGPU-native] falling back to the tinygrad runner:",(C==null?void 0:C.message)||C)}}const g=d?()=>Ce(null,null,function*(){return _s}):La(o);if(!g){const B=Fa();throw new Error(`Runner '${o}' not found. Available runners: ${B.join(", ")||"none"}. Looking in: ./webgpu_runners/`)}const[c,p]=yield Promise.all([g(),Zs(a)]);if(!c.setupNet&&!((x=c.default)!=null&&x.setupNet))throw new Error(`Runner module '${o}' doesn't export 'setupNet'. Exported keys: ${Object.keys(c).join(", ")}`);const m=!!((z=c.supportsF32Fallback)!=null?z:(S=c.default)!=null&&S.supportsF32Fallback),h=!!((P=c.supportsGpuNativeIO)!=null?P:(v=c.default)!=null&&v.supportsGpuNativeIO);!i&&!r&&!m&&console.warn(`[WebGPU] shader-f16 not supported and no fp32 runner ('${o}_f32') available; the fp16 runner will likely fail and fall back to WebGL2.`);const _=Na(p,a,!i&&!m),w=c.setupNet||((k=c.default)==null?void 0:k.setupNet);let y=[];try{const B=yield bs(e,()=>w(e,_,n,t));y=B.buffers;const C=B.result;if(typeof C!="function")throw as(y),new Error(`setupNet for '${o}' didn't return a function. Returned type: ${typeof C}`);const N={runnerKey:l,runnerName:o,weightsPath:a,execute:C,supportsGpuNativeIO:h,ownedBuffers:typeof C.dispose=="function"?null:y,gpuBytes:typeof C.gpuBytes=="function"?C.gpuBytes():hs(y)};return mn.set(e,N),xt(it({},N),{cacheHit:!1})}catch(B){throw d&&xn(e),as(y),new Error(`Failed to setup network for '${o}': ${B.message}`)}})}function Ea(e,t,n,s,o,a,r){return Ce(this,null,function*(){var g,c,p,m;const i=n.outputType==="probability";console.log("Starting WebGPU inference..."),r(i?"Starting tissue estimation…":"Starting segmentation…",0);const f=zr(n,Pr.WEBGPU);f.isModelFullVol=!0;let l=!1,u=null;const d=Lr(n);try{if(!e)throw new Error("WebGPU device is required but not provided");if(!(n!=null&&n.webgpu_runner))throw new Error("Model entry must specify webgpu_runner property");if(!(n!=null&&n.webgpu_safetensor))throw new Error("Model entry must specify webgpu_safetensor property");const h=n.webgpuStorageSize||335544320;if(e.limits){const A=fe=>(fe/1048576).toFixed(0),ae=(g=e.limits.maxStorageBufferBindingSize)!=null?g:1/0,R=(c=e.limits.maxBufferSize)!=null?c:1/0;if(ae<h||R<h){const fe=A(Math.min(ae,R)),re=A(h),ne=`[WebGPU] Device buffer limit (${fe} MB) is below the ${re} MB this model needs - using WebGL2 fallback.`;throw console.warn(ne),new Error(ne)}}e.pushErrorScope("out-of-memory"),l=!0;const M=performance.now();u=yield Oa(e,n,r);const _=((performance.now()-M)/1e3).toFixed(4),w=performance.now();r("Preparing volume…",.25);const y=[256,256,256],$=u.supportsGpuNativeIO&&!!n.enableTranspose&&!n.inputPermutation,x=u.supportsGpuNativeIO&&!!n.enableTranspose&&!n.outputPermutation;let S,z;if(n.enableQuantileNorm){const{qmin:A,qmax:ae}=$r(o);S=A,z=ae-A}else{const{min:A,max:ae}=Sr(o);S=A,z=ae-A}const v=z===0?1:z;let P=null,k,B=y;if($)d&&(P=Is(o,S,v)),k=o;else{const A=Is(o,S,v);if(d&&(P=A),n.inputPermutation){console.log(`[WebGPU] Permuting Input: ${n.inputPermutation}`);const ae=n.inputPermutation;B=[y[ae[0]],y[ae[1]],y[ae[2]]],k=kn(A,y,ae)}else n.enableTranspose?k=kn(A,y,[2,1,0]):k=A}const C=((performance.now()-w)/1e3).toFixed(4);r("",.3),r(i?"Estimating tissue maps…":"Segmenting…",.3),yield No();const N=performance.now(),j=u.supportsGpuNativeIO?A=>{const ae=Math.max(0,Math.min(1,Number(A)||0));r("",.3+.6*ae)}:void 0,Y=$||x||j?{gpuNativeInput:$,gpuNativeOutput:x,normOffset:S,normRange:v,onProgress:j}:void 0,W=yield bs(e,()=>Y?u.execute(k,Y):u.execute(k)),D=W.result;if(typeof u.execute.gpuBytes=="function"){u.gpuBytes=u.execute.gpuBytes();const A=mn.get(e);A&&A.runnerKey===u.runnerKey&&(A.gpuBytes=u.gpuBytes)}else if(W.buffers.length>0){u.gpuBytes=(u.gpuBytes||0)+hs(W.buffers),u.ownedBuffers&&u.ownedBuffers.push(...W.buffers);const A=mn.get(e);A&&A.runnerKey===u.runnerKey&&(A.gpuBytes=u.gpuBytes)}l=!1;const O=yield e.popErrorScope();if(O)throw new Error(`WebGPU out of memory (${O.message||"allocation failed"}) - falling back to WebGL2.`);if(!D||!Array.isArray(D))throw new Error(`Inference didn't return expected array format. Returned: ${typeof D}`);const Z=((performance.now()-N)/1e3).toFixed(4),J=(u.gpuBytes||0)/1048576;f.GPU_Memory_MiB=Math.round(J),f.WebGPU_Kernels=u.execute.kernels||"tinygrad";const F=J>=1024?`${(J/1024).toFixed(2)} GiB`:`${Math.round(J)} MiB`;console.log(`WebGPU inference took ${Z}s (${f.WebGPU_Kernels} kernels, ${F} GPU memory).`),r("Finishing up…",.9),console.log("Inference result shapes:",D.map(A=>A==null?void 0:A.length));const V=n.outputPermutation||(n.enableTranspose?[2,1,0]:null),K=performance.now();let q;const ce={};if(d){if(D.length!==3)throw new Error(`CAT-lite expected three tissue maps; received ${D.length}.`);r("Refining tissue fractions…",.92),q=yield Hr(D,P,n,f,x?ae=>ae:ae=>V?kn(ae,B,V):ae instanceof Float32Array?ae:Float32Array.from(ae),y),P=null}else if(i){const A=D[0];q=x?A:V?kn(A,B,V):A instanceof Float32Array?A:Float32Array.from(A),Gs(q,!0,"probability")}else{const A=D[0];D[0]=null;let ae;x?ae=A instanceof Uint8Array?A:new Uint8Array(A):V?ae=kr(A,B,V):ae=A instanceof Uint8Array?A:new Uint8Array(A),Gs(ae,!1,"segmentation"),q=yield Dr(ae,o,n,t,ce,y,{transferLabels:!0})}const pe=((performance.now()-K)/1e3).toFixed(4),ye=performance.now();yield a(q,t,n,ce.mask);const be=((performance.now()-ye)/1e3).toFixed(4);if(i)d||(f.Output_Type="Continuous tissue probability",f.Tissue=n.probabilityDisplay||"grayMatter",f.Softmax_Temperature=(p=n.softmaxTemperature)!=null?p:1);else{const A=Mr(q),ae=n.numClasses||A;Cr(f,ae,A)}Br(f,Z,pe,{Preprocess_t:C,Setup_t:_,Display_t:be}),console.log(`[Timing] WebGPU | ${n.modelName} | setup=${(Number(_)*1e3).toFixed(1)}ms prep=${(Number(C)*1e3).toFixed(1)}ms infer=${(Number(Z)*1e3).toFixed(1)}ms post=${(Number(pe)*1e3).toFixed(1)}ms disp=${(Number(be)*1e3).toFixed(1)}ms cache=${u.cacheHit?"hit":"miss"}`);const we=`${Number(Z).toFixed(1)} s`,ee=i?`Tissue maps finished (${we})`:`Segmentation finished (${we})`,le=!i&&((m=n.numClasses)!=null?m:0)>2?t!=null&&t.isTouchPrimary?" · Open Stats to isolate a region":" · Option/Alt-click a region to isolate":"";r(`${ee}${le}`,1,"",f)}catch(h){if(console.error("WebGPU Inference Error:",h),u&&(mn.get(e)===u&&mn.delete(e),Oo(u),u=null),l&&e){l=!1;try{yield e.popErrorScope()}catch(_){}}let M=h.message;throw h.message.includes("not found")?M+=". Check that the runner file exists and the name matches.":h.message.includes("fetch")?M+=". Check network connection and file paths.":h.message.includes("binding size")&&(M+=". GPU memory limit exceeded."),Fr(f,M,"WebGPU inference failed"),r("",-1,`WebGPU Error: ${M}`,f),h}})}const Da={batchSize:1,numOfChan:1,isColorEnable:!0,isAutoColors:!0,bgLabelValue:0,drawBoundingVolume:!1,isGPU:!0,isBrainCropMaskBased:!0,showPhase1Output:!1,isPostProcessEnable:!0,fillSuppressedWithNeighborLabel:!1,diagnoseEnclosedComponents:!1,isContoursViewEnable:!1,browserArrayBufferMaxZDim:30,telemetryFlag:!1,chartXaxisStepPercent:10,uiSampleName:"BC_UI_Sample",atlasSelectedColorTable:"Fire"};function Qs(e,t=!0){if(!e)return e;const o=e,{turbo:n}=o,s=Ls(o,["turbo"]);return!t||!n?s:xt(it(it({},s),n),{isTurboActive:!0})}const wn=[{id:2,type:"Brain_Extraction",path:"/models/mindgrab/model.json",modelName:"🪓🧠 Omnimodal Skull Stripping",webgpu_safetensor:"./models/mindgrab/model.safetensors",webgpu_runner:"mindgrab",classifierBias:[1.525439739227295,-1.5258055925369263],webgpuTTArunner:!1,forceFP32:!1,webgpuStorageSize:503316480,numClasses:2,turbo:{webgpu_runner:"mindgrab_int8",quantize8Bit:!0,forceFP32:!1,webgpuTTArunner:!1,webgpuStorageSize:83886080,warning:"Runs via the 8-bit V4 WebGPU engine (~3.7s on M1 WebGPU, auto-scaling from 160 MiB down to 80 MiB max buffer on mobile) or native WebGL2."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,isPostProcessEnable:!0,enableCrop:!0,cropPadding:20,autoThreshold:.5,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!1,textureSize:0,warning:"This model may need dedicated graphics card.  For more info please check with Browser Resources <i class='fa fa-cogs'></i>.",inferenceDelay:100,description:"Omnimodal skull stripping (MindGrab) delivering high-accuracy brain extraction across T1, T2, FLAIR, DWI, EPI, MRA, PDw, qT1, CT, and PET via the 8-bit V4 WebGPU engine (80 MiB mobile / 160 MiB desktop max buffer) or native WebGL2."},{id:21,type:"Atlas",path:"/models/model24chan18cls_gdice_prio/model.json",modelName:"🪓 Subcortical + Tissue",colormapPath:"./models/model24chan18cls_gdice_prio/colormap.json",webgpu_safetensor:"./models/model24chan18cls_gdice_prio/model.safetensors",webgpu_runner:"model24chan18cls_gdice_prio",forceFP32:!1,webgpuStorageSize:1610612736,numClasses:18,turbo:{webgpu_runner:"mindmap24_int8",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:125829120,warning:"Runs via the 8-bit V4 WebGPU engine (~3.0s on M1 WebGPU, auto-scaling from 240 MiB down to 120 MiB max buffer on mobile) or native WebGL2."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,cropPadding:20,autoThreshold:0,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!0,textureSize:0,warning:"Runs via the 8-bit V4 WebGPU engine (120–240 MiB max buffer) or native WebGL2.",inferenceDelay:100,description:"Primary T1w brain parcellation into 17 regions (gray and white matter plus subcortical structures) via a 24-channel gridding-free MeshNet (MindMap v3.5 Unified: sharp sulci, intact occipital ribbon, and clinical slice/noise/bias robustness), accelerated by the 8-bit V4 WebGPU engine (120 MiB mobile / 240 MiB desktop max buffer)."},{id:23,type:"Probability_Map",path:"/models/model24chan18cls_gdice_prio/model.json",modelName:"⅔🧠 Tissue fraction maps (GM/WM/CSF)",webgpu_safetensor:"./models/model24chan18cls_gdice_prio/model.safetensors",webgpu_runner:"model24chan18cls_gdice_prio_probability",forceFP32:!1,webgpuStorageSize:1610612736,numClasses:18,turbo:{webgpu_runner:"mindmap24_int8",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:125829120,warning:"Experimental neural-assisted partial-volume estimate (~3.5s on M1 WebGPU, auto-scaling from 240 MiB down to 120 MiB max buffer on mobile)."},outputType:"probability",probabilityPostprocess:"cat-lite",softmaxTemperature:2,brainSupportTemperature:1,brainSupportPower:1,partialVolumeSigma:.65,probabilityDisplay:"grayMatter",probabilityTissues:[{name:"gm",tint:[255,64,64]},{name:"wm",tint:[255,255,255]},{name:"csf",tint:[64,128,255]}],probabilityOverlayFloor:128,probabilityOverlayAlpha:48,probabilityDisplayMin:.03,probabilityUnderlayOpacity:.1,probabilityGroups:{grayMatter:[2,6,7,8,9,10,14,15,16,17],whiteMatter:[1,5],csf:[3,4,11,12]},catLitePurePriorPower:3,catLitePriorStrength:.8,catLiteIntensityStrength:.75,catLiteMixelPrior:.35,catLiteCsfWmMixelPrior:6,catLiteSpatialWeight:.25,catLiteMinSupport:.03,catLiteSigmaFloor:.025,catLiteBiasBlockSize:16,catLiteBiasSmoothPasses:3,preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,enableQuantileNorm:!0,enableFovRecenter:!1,enableFovInflate:!1,warning:"Experimental neural-assisted mixed-class partial-volume estimate, not CAT12.",inferenceDelay:100,description:"CAT-inspired GM/WM/CSF partial-volume estimate. The 24-channel model supplies joint GM/WM/CSF priors; normalized T1 intensity, a coarse local bias estimate, spatial regularization, and explicit GM-CSF/GM-WM mixture classes produce continuous GM, WM and CSF fractions. Experimental and not a CAT12 result."},{id:5,type:"Atlas",path:"/models/model24chan104cls_v3_repbn/model.json",modelName:"🪓🔪 Desikan-Killiany Atlas",colormapPath:"./models/model24chan104cls_v3_repbn/colormap.json",webgpu_safetensor:"./models/model24chan104cls_v3_repbn/model.safetensors",webgpu_runner:"dkatlas24_synth",forceFP32:!1,webgpuStorageSize:1610612736,numClasses:104,turbo:{webgpu_runner:"dkatlas24_int8",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:125829120,warning:"Runs via the 8-bit V4 WebGPU engine (~3.0s on M1 WebGPU, auto-scaling from 240 MiB down to 120 MiB max buffer on mobile) or native WebGL2."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,cropPadding:20,autoThreshold:0,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!0,textureSize:0,warning:"Runs via the 8-bit V4 WebGPU engine (120–240 MiB max buffer) or native WebGL2.",inferenceDelay:100,description:"Primary 104-region Desikan-Killiany atlas parcellation (cortical + subcortical + 5-part corpus callosum) for research and clinical T1-weighted MRI, running via the 8-bit V4 WebGPU engine (~3.0s on M1, 120 MiB mobile / 240 MiB desktop max buffer) or native WebGL2."},{id:4,type:"Atlas",path:"/models/model24chan50cls/model.json",modelName:"🪓🔪 Desikan-Killiany 50",colormapPath:"./models/model24chan50cls/colormap.json",webgpu_safetensor:"./models/model24chan50cls/model.safetensors",webgpu_runner:"meshnet_fast_v4",forceFP32:!1,webgpuStorageSize:805306368,numClasses:50,turbo:{webgpu_runner:"meshnet_fast_v4",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:125829120,warning:"Runs via the 8-bit V4 WebGPU engine (~3.0s on M1 WebGPU, auto-scaling from 240 MiB down to 120 MiB max buffer on mobile) or native WebGL2."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,cropPadding:20,autoThreshold:0,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!0,textureSize:0,warning:"Runs via the 8-bit V4 WebGPU engine (120–240 MiB max buffer) or native WebGL2.",inferenceDelay:100,description:"Bilateral 50-region Desikan-Killiany cortical + subcortical + corpus callosum parcellation with built-in skull stripping (MindSnap-50 v3.5), running via the 8-bit V4 WebGPU engine (~3.0s on M1, 120 MiB mobile / 240 MiB desktop max buffer) or native WebGL2."},{id:6,type:"Divider",modelName:"-----------------",path:null},{id:3,type:"Atlas",path:"/models/model16chan18cls/model.json",modelName:"⚡🪓 Subcortical + Tissue",colormapPath:"./models/model16chan18cls/colormap.json",webgpu_safetensor:"./models/model16chan18cls/model.safetensors",webgpu_runner:"model16chan18cls",forceFP32:!1,webgpuStorageSize:536870912,numClasses:18,turbo:{webgpu_runner:"model16chan18cls_int8",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:83886080,warning:"Ultra-fast 16-channel MindMap v3.5 (~1.7s on M1 WebGPU, auto-scaling from 160 MiB down to 80 MiB max buffer on mobile)."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,cropPadding:20,autoThreshold:0,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!0,textureSize:0,warning:"Runs via the 8-bit V4 WebGPU engine (80–160 MiB max buffer) or native WebGL2.",inferenceDelay:100,description:"Ultra-fast 17-region brain parcellation (gray and white matter plus subcortical structures) via our 84K-parameter 16-channel MeshNet (MindMap-16ch v3.5), running in ~1.7s on M1 WebGPU with an 80 MiB mobile / 160 MiB desktop buffer footprint."},{id:14,type:"Atlas",path:"/models/model24chan104cls_synth/model.json",modelName:"🪓🔪 Desikan-Killiany (lesion scans)",colormapPath:"./models/model24chan104cls_synth/colormap.json",webgpu_safetensor:"./models/model24chan104cls_synth/model.safetensors",webgpu_runner:"dkatlas24_synth",forceFP32:!1,webgpuStorageSize:1610612736,numClasses:104,turbo:{webgpu_runner:"dkatlas24_int8",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:125829120,warning:"Runs via the 8-bit V4 WebGPU engine (~3.0s on M1 WebGPU, auto-scaling from 240 MiB down to 120 MiB max buffer on mobile) or native WebGL2."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,cropPadding:20,autoThreshold:0,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!0,textureSize:0,warning:"Runs via the 8-bit V4 WebGPU engine (120–240 MiB max buffer) or native WebGL2.",inferenceDelay:100,description:"Desikan-Killiany 104-region parcellation variant retained for scans with large focal lesions, running via the 8-bit V4 WebGPU engine (120–240 MiB max buffer) or native WebGL2."}];function As(){return Ce(this,null,function*(){return navigator.userAgent.indexOf("OPR/")>-1?"Opera":navigator.userAgent.indexOf("Edg/")>-1?"Edge":navigator.userAgent.indexOf("Falkon/")>-1?"Falkon":navigator.userAgent.indexOf("Chrome/")>-1?"Chrome":navigator.userAgent.indexOf("Firefox/")>-1?"Firefox":navigator.userAgent.indexOf("Safari/")>-1?"Safari":navigator.userAgent.indexOf("MSIE/")>-1||navigator.userAgent.indexOf("rv:")>-1?"IExplorer":"Unknown"})}function Va(){return Ce(this,null,function*(){return navigator.userAgent.indexOf("OPR/")>-1?parseInt(navigator.userAgent.split("OPR/")[1]):navigator.userAgent.indexOf("Edg/")>-1?parseInt(navigator.userAgent.split("Edg/")[1]):navigator.userAgent.indexOf("Falkon/")>-1?parseInt(navigator.userAgent.split("Falkon/")[1]):navigator.userAgent.indexOf("Chrome/")>-1?parseInt(navigator.userAgent.split("Chrome/")[1]):navigator.userAgent.indexOf("Firefox/")>-1?parseInt(navigator.userAgent.split("Firefox/")[1]):navigator.userAgent.indexOf("Safari/")>-1?parseInt(navigator.userAgent.split("Safari/")[1]):navigator.userAgent.indexOf("MSIE/")>-1||navigator.userAgent.indexOf("rv:")>-1?parseInt(navigator.userAgent.split("MSIE/")[1]):1/0})}function Ha(){return Ce(this,null,function*(){return navigator.userAgent.indexOf("Win")>-1?"Windows":navigator.userAgent.indexOf("Mac")>-1?"MacOS":navigator.userAgent.indexOf("Linux")>-1?"Linux":navigator.userAgent.indexOf("UNIX")>-1?"UNIX":"Unknown"})}function Xa(e){return Ce(this,null,function*(){return e?(console.log("WebGl2 is enabled"),!0):(console.log(typeof WebGL2RenderingContext!="undefined"?"WebGL2 may be disabled. Please try updating video card drivers":"WebGL2 is not supported"),!1)})}function ja(e){return Ce(this,null,function*(){let t;if(e&&(t=e.getExtension("WEBGL_debug_renderer_info"),t)){const n=e.getParameter(t.UNMASKED_VENDOR_WEBGL);return n.indexOf("(")>-1&&n.indexOf(")")>-1?n.substring(n.indexOf("(")+1,n.indexOf(")")):n}return null})}function Ya(e){return Ce(this,null,function*(){if(e){const t=e.getExtension("WEBGL_debug_renderer_info");return t?e.getParameter(t.UNMASKED_VENDOR_WEBGL):null}else return null})}function Ka(e){return Ce(this,null,function*(){if(e){if(As()==="Firefox")return e.getParameter(e.RENDERER);const t=e.getExtension("WEBGL_debug_renderer_info");return t?e.getParameter(t.UNMASKED_RENDERER_WEBGL):null}else return null})}function Za(e){return Ce(this,null,function*(){let t;if(e){if(As()==="Firefox")return e.getParameter(e.RENDERER);if(t=e.getExtension("WEBGL_debug_renderer_info"),t){let n=e.getParameter(t.UNMASKED_RENDERER_WEBGL);return n.indexOf("(")>-1&&n.indexOf(")")>-1&&n.indexOf("(R)")===-1&&(n=n.substring(n.indexOf("(")+1,n.indexOf(")")),n.split(",").length===3)?n.split(",")[1].trim():n}}return null})}function Qa(){return Ce(this,null,function*(){return navigator.hardwareConcurrency})}function Ja(){return Ce(this,null,function*(){return/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)})}function ei(e,t=null){return Ce(this,null,function*(){const n=new Date;if(e.isModelFullVol?e.Brainchop_Ver="FullVolume":e.Brainchop_Ver="SubVolumes",e.Total_t=(Date.now()-e.startTime)/1e3,delete e.startTime,e.Date=parseInt(n.getMonth()+1)+"/"+n.getDate()+"/"+n.getFullYear(),e.Browser=yield As(),e.Browser_Ver=yield Va(),e.OS=yield Ha(),e.WebGL2=yield Xa(t),e.GPU_Vendor=yield ja(t),e.GPU_Card=yield Za(t),e.GPU_Vendor_Full=yield Ya(t),e.GPU_Card_Full=yield Ka(t),e.CPU_Cores=yield Qa(),e.Which_Brainchop="latest",(yield Ja())&&(e.Heap_Size_MB=window.performance.memory.totalJSHeapSize/(1024*1024).toFixed(2),e.Used_Heap_MB=window.performance.memory.usedJSHeapSize/(1024*1024).toFixed(2),e.Heap_Limit_MB=window.performance.memory.jsHeapSizeLimit/(1024*1024).toFixed(2)),t){console.log("MAX_TEXTURE_SIZE :",t.getParameter(t.MAX_TEXTURE_SIZE)),console.log("MAX_RENDERBUFFER_SIZE :",t.getParameter(t.MAX_RENDERBUFFER_SIZE));const s=t.getExtension("WEBGL_debug_renderer_info");console.log("VENDOR WEBGL:",t.getParameter(s.UNMASKED_VENDOR_WEBGL)),e.Texture_Size=t.getParameter(t.MAX_TEXTURE_SIZE)}else e.Texture_Size=null;return e})}const is={bankssts:1,caudalanteriorcingulate:2,caudalmiddlefrontal:3,cuneus:5,entorhinal:6,fusiform:7,inferiorparietal:8,inferiortemporal:9,isthmuscingulate:10,lateraloccipital:11,lateralorbitofrontal:12,lingual:13,medialorbitofrontal:14,middletemporal:15,parahippocampal:16,paracentral:17,parsopercularis:18,parsorbitalis:19,parstriangularis:20,pericalcarine:21,postcentral:22,posteriorcingulate:23,precentral:24,precuneus:25,rostralanteriorcingulate:26,rostralmiddlefrontal:27,superiorfrontal:28,superiorparietal:29,superiortemporal:30,supramarginal:31,frontalpole:32,temporalpole:33,transversetemporal:34,insula:35},ti=new Set(["BG","Unknown","background","Background"]),Js={"Left-Cerebral-White-Matter":2,"Right-Cerebral-White-Matter":41,"Left-Cerebral-Cortex":3,"Right-Cerebral-Cortex":42,"Left-Lateral-Ventricle":4,"Right-Lateral-Ventricle":43,"Left-Inf-Lat-Vent":5,"Right-Inf-Lat-Vent":44,"Left-Cerebellum-White-Matter":7,"Right-Cerebellum-White-Matter":46,"Left-Cerebellum-Cortex":8,"Right-Cerebellum-Cortex":47,"Left-Thalamus":10,"Left-Thalamus-Proper":10,"Left-Thalamus-Proper*":10,"Right-Thalamus":49,"Right-Thalamus-Proper":49,"Right-Thalamus-Proper*":49,"Left-Caudate":11,"Right-Caudate":50,"Left-Putamen":12,"Right-Putamen":51,"Left-Pallidum":13,"Right-Pallidum":52,"Left-Hippocampus":17,"Right-Hippocampus":53,"Left-Amygdala":18,"Right-Amygdala":54,"Left-Accumbens":26,"Left-Accumbens-area":26,"Right-Accumbens":58,"Right-Accumbens-area":58,"Left-VentralDC":28,"Right-VentralDC":60,"3rd-Ventricle":14,"4th-Ventricle":15,"Brain-Stem":16,CSF:24,CC_Posterior:251,CC_Mid_Posterior:252,CC_Central:253,CC_Mid_Anterior:254,CC_Anterior:255,"Cerebral-White-Matter":2,"White Matter":2,"Cerebral-Cortex":3,"Grey Matter":3,"Gray Matter":3,"Lateral-Ventricle":4,Ventricle:4,"Inferior-Lateral-Ventricle":5,"Cerebellum-White-Matter":7,"Cerebellum-Cortex":8,Cerebellum:8,Thalamus:10,"Thalamus-Proper":10,"Thalamus-Proper*":10,Caudate:11,Putamen:12,Pallidum:13,Hippocampus:17,Amygdala:18,"Accumbens-area":26,Accumbens:26,VentralDC:28,"Corpus callosum":253,Corpus_Callosum:253};function ni(e){if(typeof e!="string")return null;const t=e.trim();if(ti.has(t))return 0;if(Object.hasOwn(Js,t))return Js[t];if(t.startsWith("ctx-lh-")){const n=is[t.slice(7)];return n?1e3+n:null}if(t.startsWith("ctx-rh-")){const n=is[t.slice(7)];return n?2e3+n:null}if(t.startsWith("ctx-")){const n=is[t.slice(4)];return n?1e3+n:null}return null}function Dn(e){if(!Array.isArray(e)||e.length<3)return null;const t=new Int16Array(e.length);for(let n=0;n<e.length;n++){const s=ni(e[n]);if(s===null||(n===0?s!==0:s<=0))return null;t[n]=s}return t}function si(e,t){const n=e.length,s=new Int16Array(n),o=t.length;let a=0;for(let r=0;r<n;r++){const i=e[r],f=i>=0&&i<o?t[i]:i;s[r]=f,f>a&&(a=f)}return{img:s,maxLabel:a}}const oi=110,ri=10;function Ps(e){var t;if(e){e.pan2Dxyzmm=Float32Array.from([0,0,0,1]),e.renderPan=[0,0],e.azimuth=oi,e.elevation=ri,e.scaleMultiplier=1;const n=(t=e.volumes)==null?void 0:t[0];n&&Number.isFinite(n.robustMin)&&Number.isFinite(n.robustMax)&&n.robustMax>n.robustMin&&(n.calMin!==n.robustMin||n.calMax!==n.robustMax)&&(n.calMin=n.robustMin,n.calMax=n.robustMax,e.updateGLVolume())}ai()}function ai(){const e=document.querySelector('meta[name="viewport"]');if(!e)return;const t=e.getAttribute("content")||"width=device-width, initial-scale=1.0";/maximum-scale/.test(t)||(e.setAttribute("content",`${t}, maximum-scale=1, user-scalable=no`),requestAnimationFrame(()=>requestAnimationFrame(()=>e.setAttribute("content",t))))}function ii(e){const t=n=>n.preventDefault();for(const n of["gesturestart","gesturechange","gestureend"])document.addEventListener(n,t,{passive:!1});document.addEventListener("touchmove",n=>{n.touches.length>1&&n.target!==e&&n.preventDefault()},{passive:!1})}function li(e){return ii((e==null?void 0:e.canvas)||null),{resetView:()=>Ps(e)}}const ui=720,ci=860;function fi(){var o,a,r,i,f,l;const e=window.visualViewport,t=Math.round((a=(o=e==null?void 0:e.width)!=null?o:window.innerWidth)!=null?a:0),n=Math.round((i=(r=e==null?void 0:e.height)!=null?r:window.innerHeight)!=null?i:0);return t>0&&t<=ui?!0:!!((l=(f=window.matchMedia)==null?void 0:f.call(window,"(pointer: coarse)"))==null?void 0:l.matches)&&Math.min(t,n)<=ci}const zn=[{id:"multi",label:"All",title:"All planes",type:Wn.MULTIPLANAR},{id:"axial",label:"A",title:"Axial only",type:Wn.AXIAL},{id:"coronal",label:"C",title:"Coronal only",type:Wn.CORONAL},{id:"sagittal",label:"S",title:"Sagittal only",type:Wn.SAGITTAL},{id:"render",label:"3D",title:"3D render only",type:Wn.RENDER}];function Eo(e,t,n){const s=zn.find(o=>o.id===n)||zn[0];e.sliceType=s.type,t.querySelectorAll("button").forEach(o=>o.classList.toggle("active",o.dataset.pane===s.id))}function pi(e,t){const n=document.createElement("div");n.id="paneSwitcher",n.className="pane-switcher",n.setAttribute("role","group"),n.setAttribute("aria-label","Visible planes");for(const o of zn){const a=document.createElement("button");a.type="button",a.dataset.pane=o.id,a.textContent=o.label,a.title=o.title,a.setAttribute("aria-label",o.title),a.addEventListener("click",()=>Eo(e,n,o.id)),n.appendChild(a)}const s=document.createElement("button");return s.type="button",s.className="pane-reset",s.textContent="⟲",s.title="Reset zoom and pan",s.setAttribute("aria-label","Reset zoom and pan"),s.addEventListener("click",()=>Ps(e)),n.appendChild(s),t.appendChild(n),n}function mi(e){var o;const t=document.getElementById("canvas-container")||document.body,n=pi(e,t);n.querySelector('button[data-pane="multi"]').classList.add("active"),window.addEventListener("keydown",a=>{if(a.key!=="v"&&a.key!=="V"||a.altKey||a.ctrlKey||a.metaKey||a.repeat)return;const r=a.target;if(r instanceof HTMLElement&&(r.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(r.tagName)))return;a.preventDefault(),a.stopImmediatePropagation();const i=zn.findIndex(f=>f.type===e.sliceType);Eo(e,n,zn[(i+1)%zn.length].id)},!0);const s=()=>document.body.classList.toggle("nv-narrow",fi());window.addEventListener("resize",s),window.addEventListener("orientationchange",s),(o=window.visualViewport)==null||o.addEventListener("resize",s),s()}const ls=[{name:"gm",displayName:"Gray Matter",tint:[255,64,64]},{name:"wm",displayName:"White Matter",tint:[255,255,255]},{name:"csf",displayName:"CSF",tint:[64,128,255]}],di={gm:"Gray Matter",wm:"White Matter",csf:"CSF"};function Do(e){return(Array.isArray(e==null?void 0:e.probabilityTissues)&&e.probabilityTissues.length===3?e.probabilityTissues:ls).map((n,s)=>{const o=String((n==null?void 0:n.name)||ls[s].name).toLowerCase();return{index:s,name:o,displayName:di[o]||o.toUpperCase(),tint:Array.isArray(n==null?void 0:n.tint)&&n.tint.length>=3?n.tint:ls[s].tint}})}function eo(e,t,n=null,s=1,o=null){var Z,J;const[a,r,i]=e,f=a.length,l=(Z=t==null?void 0:t.probabilityDisplayMin)!=null?Z:.03,u=1/Math.max(1e-6,1-l),d=((J=t==null?void 0:t.probabilityOverlayFloor)!=null?J:128)/255,g=1-d,c=Do(t),[p,m,h]=c[0].tint,[M,_,w]=c[1].tint,[y,$,x]=c[2].tint,S=n===null||n===0,z=n===null||n===1,v=n===null||n===2,P=Math.max(0,Math.min(1,Number(s)||0)),k=Math.round(P*256),B=!!(o&&o.dimsRAS&&o.img2RASstart&&o.img2RASstep&&o.dimsRAS[1]*o.dimsRAS[2]*o.dimsRAS[3]===f),C=new Uint8Array(f*4);let N=0;for(let F=0;F<f;F++){const V=S?a[F]:0,K=z?r[F]:0,q=v?i[F]:0;(V>=l||K>=l||q>=l)&&N++}const j=new Uint32Array(N),Y=new Uint8Array(N);let W=0;const D=2/256,O=(F,V)=>{const K=S?a[F]:0,q=z?r[F]:0,ce=v?i[F]:0;if(K<l&&q<l&&ce<l)return;let pe=0,ye=0,be=0,we=0;if(K>=l){const re=K>1?1:K,ne=(re-l)*u,Q=re>D?re:D,se=(d+g*Q)*ne;pe+=p*se,ye+=m*se,be+=h*se,ne>we&&(we=ne)}if(q>=l){const re=q>1?1:q,ne=(re-l)*u,Q=re>D?re:D,se=(d+g*Q)*ne;pe+=M*se,ye+=_*se,be+=w*se,ne>we&&(we=ne)}if(ce>=l){const re=ce>1?1:ce,ne=(re-l)*u,Q=re>D?re:D,se=(d+g*Q)*ne;pe+=y*se,ye+=$*se,be+=x*se,ne>we&&(we=ne)}if(we<=0)return;const ee=1/we,le=pe*ee,A=ye*ee,ae=be*ee,R=Math.min(255,Math.round(we*255)),fe=V*4;C[fe]=le>=255?255:Math.round(le),C[fe+1]=A>=255?255:Math.round(A),C[fe+2]=ae>=255?255:Math.round(ae),C[fe+3]=R*k+128>>8,j[W]=fe+3,Y[W]=R,W++};if(B){const[,F,V,K]=o.dimsRAS,[q,ce,pe]=o.img2RASstart,[ye,be,we]=o.img2RASstep,ee=q+ce+pe;let le=0;for(let A=0;A<K;A++){const ae=ee+A*we;for(let R=0;R<V;R++){let fe=ae+R*be;for(let re=0;re<F;re++,le++,fe+=ye)O(fe,le)}}}else for(let F=0;F<f;F++)O(F,F);return{rgba:C,activeAlphaOffsets:W===N?j:j.subarray(0,W),activeBaseAlpha:W===N?Y:Y.subarray(0,W),tissues:c,isRasOrdered:B}}function gi(e,t,n,s){const o=Math.max(0,Math.min(1,Number(s)||0)),a=Math.round(o*256),r=t.length;for(let i=0;i<r;i++)e[t[i]]=n[i]*a+128>>8}function to(e,t,n,s,o){var M;const a=Do(o),r=(M=o==null?void 0:o.probabilityDisplayMin)!=null?M:.03,[i,f,l]=s,[u,d,g]=t,c=a.map(()=>({fracSum:0,supportVoxels:0,wSum:0,wSumSq:0,sumX:0,sumY:0,sumZ:0,coreMin:1/0,coreMax:-1/0,anyMin:1/0,anyMax:-1/0}));let p=0;for(let _=0;_<l;_++)for(let w=0;w<f;w++)for(let y=0;y<i;y++,p++){const $=u[p],x=d[p],S=g[p];if($<=0&&x<=0&&S<=0)continue;const z=e[p];if($>0&&Number.isFinite($)){const v=c[0];v.fracSum+=$,$>=r&&v.supportVoxels++,v.wSum+=$*z,v.wSumSq+=$*z*z,v.sumX+=$*y,v.sumY+=$*w,v.sumZ+=$*_,z<v.anyMin&&(v.anyMin=z),z>v.anyMax&&(v.anyMax=z),$>=.5&&(z<v.coreMin&&(v.coreMin=z),z>v.coreMax&&(v.coreMax=z))}if(x>0&&Number.isFinite(x)){const v=c[1];v.fracSum+=x,x>=r&&v.supportVoxels++,v.wSum+=x*z,v.wSumSq+=x*z*z,v.sumX+=x*y,v.sumY+=x*w,v.sumZ+=x*_,z<v.anyMin&&(v.anyMin=z),z>v.anyMax&&(v.anyMax=z),x>=.5&&(z<v.coreMin&&(v.coreMin=z),z>v.coreMax&&(v.coreMax=z))}if(S>0&&Number.isFinite(S)){const v=c[2];v.fracSum+=S,S>=r&&v.supportVoxels++,v.wSum+=S*z,v.wSumSq+=S*z*z,v.sumX+=S*y,v.sumY+=S*w,v.sumZ+=S*_,z<v.anyMin&&(v.anyMin=z),z>v.anyMax&&(v.anyMax=z),S>=.5&&(z<v.coreMin&&(v.coreMin=z),z>v.coreMax&&(v.coreMax=z))}}const m=[];for(let _=0;_<3;_++){const w=c[_];if(w.fracSum<=0)continue;const y=w.wSum/w.fracSum,$=Math.max(0,w.wSumSq/w.fracSum-y*y),x=Number.isFinite(w.coreMin)?w.coreMin:Number.isFinite(w.anyMin)?w.anyMin:0,S=Number.isFinite(w.coreMax)?w.coreMax:Number.isFinite(w.anyMax)?w.anyMax:0,[z,v,P]=a[_].tint;m.push({label:_,tissueIndex:_,tissueKey:a[_].name,name:a[_].displayName,voxels:Math.round(w.fracSum),effectiveVoxels:w.fracSum,supportVoxels:w.supportVoxels,volume_mm3:w.fracSum*n,mean:y,stdev:Math.sqrt($),min:x,max:S,centroidVox:[w.sumX/w.fracSum,w.sumY/w.fracSum,w.sumZ/w.fracSum],colorCss:`rgb(${z},${v},${P})`,tint:a[_].tint})}const h=m.reduce((_,w)=>_+w.volume_mm3,0);return{rows:m,icvMm3:h}}function _i(e,t){const n=["tissue","name","volume_mm3","volume_cm3","pct_icv","effective_voxels","support_voxels","weighted_mean","weighted_stdev","min","max"],s=a=>/[",\n]/.test(a)?`"${String(a).replace(/"/g,'""')}"`:String(a),o=[n.join(",")];for(const a of e){const r=t>0?a.volume_mm3/t*100:0;o.push([s(a.tissueKey),s(a.name),a.volume_mm3.toFixed(3),(a.volume_mm3/1e3).toFixed(3),r.toFixed(3),a.effectiveVoxels.toFixed(3),a.supportVoxels,a.mean.toFixed(4),a.stdev.toFixed(4),a.min,a.max].join(","))}return o.join(`
`)+`
`}function Vo(){if(typeof crypto!="undefined"){if(typeof crypto.randomUUID=="function")return crypto.randomUUID();if(typeof crypto.getRandomValues=="function"){const e=new Uint8Array(16);crypto.getRandomValues(e),e[6]=e[6]&15|64,e[8]=e[8]&63|128;const t=Array.from(e,n=>n.toString(16).padStart(2,"0")).join("");return`${t.slice(0,8)}-${t.slice(8,12)}-${t.slice(12,16)}-${t.slice(16,20)}-${t.slice(20)}`}}return`vol-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}function bi(){var e,t,n,s;return!!((t=(e=window.matchMedia)==null?void 0:e.call(window,"(pointer: coarse)"))!=null&&t.matches&&!((s=(n=window.matchMedia)==null?void 0:n.call(window,"(pointer: fine)"))!=null&&s.matches))}function no(e,t=e.img.slice(),n=e.name){const s=Object.assign(Object.create(Object.getPrototypeOf(e.hdr)),e.hdr),o=er(s,t,n);return o.id=Vo(),o}const jt=e=>e&&typeof e.slice=="function"?e.slice():e;function Rn(e,t,n=e.name,s={},o={}){var f;const a=Object.assign(Object.create(Object.getPrototypeOf(e.hdr)),e.hdr,it({dims:[...e.hdr.dims],pixDims:[...e.hdr.pixDims],affine:e.hdr.affine.map(l=>[...l])},s)),r=e.dims?e.dims.slice(0,4):a.dims.slice(0,4),i=(f=e.nVox3D)!=null?f:r[1]*r[2]*r[3];return it({img:t,hdr:a,originalAffine:a.affine.map(l=>[...l]),dims:r,nVox3D:i,extentsMin:jt(e.extentsMin),extentsMax:jt(e.extentsMax),mm000:jt(e.mm000),mm100:jt(e.mm100),mm010:jt(e.mm010),mm001:jt(e.mm001),dimsRAS:e.dimsRAS?[...e.dimsRAS]:void 0,pixDimsRAS:e.pixDimsRAS?[...e.pixDimsRAS]:void 0,permRAS:e.permRAS?[...e.permRAS]:void 0,toRAS:jt(e.toRAS),toRASvox:jt(e.toRASvox),matRAS:jt(e.matRAS),obliqueRAS:jt(e.obliqueRAS),oblique_angle:e.oblique_angle,frac2mm:jt(e.frac2mm),frac2mmOrtho:jt(e.frac2mmOrtho),img2RASstep:e.img2RASstep?[...e.img2RASstep]:void 0,img2RASstart:e.img2RASstart?[...e.img2RASstart]:void 0,volScale:e.volScale?[...e.volScale]:void 0,name:n,id:Vo(),calMin:0,calMax:255,robustMin:0,robustMax:255,globalMin:0,globalMax:255,frame4D:0,nFrame4D:1,nTotalFrame4D:1,isLegendVisible:!1},o)}function hi(e){let t=256,n=-1,s=0;for(let l=0;l<256;l++){const u=e[l];u>0&&(l<t&&(t=l),n=l,l!==0&&(s+=u))}if(t>n)return{calMin:0,calMax:255,robustMin:0,robustMax:255,globalMin:0,globalMax:255};if(t===n)return{calMin:t,calMax:n,robustMin:t,robustMax:n,globalMin:t,globalMax:n};const o=Math.round(s*.02),a=Math.round(s*.02);let r=0,i=t;for(let l=t;l<=n;l++){if(l===0&&e[0]>o){i=0;break}if(r+=e[l],r>=o){i=l;break}}r=0;let f=n;for(let l=n;l>=t;l--)if(r+=e[l],r>=a){f=Math.min(n,l+1);break}return i>=f&&(i=t,f=n),{calMin:i,calMax:f,robustMin:i,robustMax:f,globalMin:t,globalMax:n}}function Vn(e,[t,n,s]){const o=e.dimsRAS,a=e.img2RASstart,r=e.img2RASstep;return!o||!a||!r||t<0||t>=o[1]||n<0||n>=o[2]||s<0||s>=o[3]?null:a[0]+t*r[0]+a[1]+n*r[1]+a[2]+s*r[2]}function Sn(e,t){return Ce(this,null,function*(){const n=e.img,s=yield Jo(t,e.hdr,n.buffer.byteLength===n.byteLength?n.buffer:n.buffer.slice(n.byteOffset,n.byteOffset+n.byteLength)),o=URL.createObjectURL(new Blob([s]));Object.assign(document.createElement("a"),{href:o,download:t}).click(),URL.revokeObjectURL(o)})}let en=null,dn=!1,us=0,Hn=!1,Yn=[];const Ho=/Safari/.test(navigator.userAgent)&&!/Chrome|Chromium|CriOS|FxiOS|Edg|Android/.test(navigator.userAgent),wi=Ho&&new URLSearchParams(window.location.search).get("inference")!=="webgpu",ws=new URLSearchParams(window.location.search).get("inference")==="webgl2";function so(e=null){return Ce(this,null,function*(){const t={secureContext:window.isSecureContext,navigatorGpuExists:"gpu"in navigator,adapterObtained:!1,deviceObtained:!1,f16Support:!1,error:null};if(window.isSecureContext||(console.warn("WebGPU requires a secure context (HTTPS or localhost)."),console.warn("Current origin:",window.location.origin)),"gpu"in navigator)try{console.log("Requesting WebGPU adapter...");const n=yield navigator.gpu.requestAdapter();if(n){t.adapterObtained=!0,console.log("WebGPU adapter obtained:",n),n.info&&console.log("Adapter info:",n.info),console.log("Adapter limits:",{maxBufferSize:n.limits.maxBufferSize,maxStorageBufferBindingSize:n.limits.maxStorageBufferBindingSize,maxComputeWorkgroupsPerDimension:n.limits.maxComputeWorkgroupsPerDimension});const s={maxBufferSize:n.limits.maxBufferSize,maxStorageBufferBindingSize:n.limits.maxStorageBufferBindingSize,maxStorageBuffersPerShaderStage:n.limits.maxStorageBuffersPerShaderStage,maxUniformBufferBindingSize:n.limits.maxUniformBufferBindingSize,maxComputeInvocationsPerWorkgroup:n.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:n.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:n.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:n.limits.maxComputeWorkgroupSizeZ,maxComputeWorkgroupStorageSize:n.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:n.limits.maxComputeWorkgroupsPerDimension},o=n.features.has("shader-f16"),a=n.features.has("subgroups");t.f16Support=o,t.subgroupsSupport=a;const r=[];o&&r.push("shader-f16"),a&&r.push("subgroups");const i=yield n.requestDevice({requiredLimits:s,requiredFeatures:r});if(i.__adapterInfo=n.info||null,e&&typeof e.getParameter=="function")try{if(/Firefox/i.test(navigator.userAgent||""))i.__glRenderer=String(e.getParameter(e.RENDERER)||"");else{const l=e.getExtension("WEBGL_debug_renderer_info");i.__glRenderer=String((l?e.getParameter(l.UNMASKED_RENDERER_WEBGL):e.getParameter(e.RENDERER))||"")}}catch(l){}i.__isLost=!1,i.lost&&typeof i.lost.then=="function"&&i.lost.then(l=>{i.__isLost=!0,(l==null?void 0:l.reason)!=="destroyed"&&(console.warn(`[WebGPU] Device was lost (${(l==null?void 0:l.reason)||"unknown"}): ${(l==null?void 0:l.message)||""}`),en===i&&(en=null,dn=!1,t.deviceObtained=!1,t.error=(l==null?void 0:l.message)||"WebGPU device lost",oo(!1,t)))}),en=i,t.deviceObtained=!0,dn=!0,console.log(`✓ WebGPU initialized successfully. F16: ${o?"enabled":"not available"}, Subgroups: ${a?"enabled":"not available"}`)}else console.warn("WebGPU adapter request returned null."),console.warn("This typically means:"),console.warn("  - Safari: WebGPU feature flags not enabled in Settings > Feature Flags"),console.warn("  - Unsupported GPU hardware"),console.warn("  - GPU drivers need updating"),t.error="Adapter returned null"}catch(n){t.error=n.message,console.error("WebGPU initialization error:",n),navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")&&(console.warn("Safari detected. To enable WebGPU:"),console.warn("  1. Open Safari Settings/Preferences"),console.warn('  2. Go to Advanced tab, enable "Show features for web developers"'),console.warn("  3. Go to Feature Flags tab"),console.warn("  4. Enable: WebGPU, GPU Process: DOM Rendering, GPU Process: Canvas Rendering"),console.warn("  5. Restart Safari"))}else console.warn("navigator.gpu not found. WebGPU API is not available in this browser."),t.error="navigator.gpu not found",navigator.userAgent.includes("Firefox")&&(console.warn("Firefox detected. To enable WebGPU in about:config:"),console.warn("  1. Set dom.webgpu.enabled = true"),console.warn("  2. Set gfx.webgpu.ignore-blocklist = true"),console.warn("  3. Restart Firefox"));return oo(dn,t),dn||console.log("Falling back to WebGL backend."),window.webgpuDiagnostics=t,t})}function oo(e,t){const n=document.getElementById("backendStatus"),s=document.getElementById("backendStatusItem");if(!n){console.log("Backend status element not found in DOM");return}if(s&&(s.hidden=!1),e){const o=t.f16Support?" (F16)":"";n.textContent=`WebGPU${o}`,n.style.color="#4CAF50",n.title="WebGPU backend active - fastest performance"}else{n.textContent="WebGL",n.style.color="#FF9800";let o="WebGL backend (fallback)";t.error&&(o+=`
Reason: ${t.error}`),t.secureContext||(o+=`
⚠ Not a secure context (HTTPS required)`),Ho&&!ws&&(o+=`

To enable WebGPU in Safari:
1. Settings > Feature Flags
2. Enable WebGPU flags
3. Restart Safari`),navigator.userAgent.includes("Firefox")&&(o+=`

To enable WebGPU in Firefox:
1. about:config > dom.webgpu.enabled = true
2. gfx.webgpu.ignore-blocklist = true
3. Restart Firefox`),n.title=o}}function vi(){return Ce(this,null,function*(){var De;let e="",t="",n=null,s=null,o=null,a=null;function r(){const b=modelSelect.value;return b==="-1"||modelSelect.selectedIndex<0?null:wn[b]||null}function i(){const b=r();modelSelect.title=(b==null?void 0:b.description)||"Choose a segmentation model to run"}const f=document.getElementById("activeModelItem"),l=document.getElementById("activeModelBadge");function u(b){var U;if(!f||!l)return;const L=(U=b==null?void 0:b.modelName)==null?void 0:U.trim();if(!L){f.hidden=!0,l.textContent="",l.removeAttribute("title");return}l.textContent=L,l.title=`Active model: ${L}`,f.hidden=!1}const d="altKey";let g=null,c=null,p=null,m=null,h=null,M=null,_=null,w="input.nii.gz",y=null;const $=document.getElementById("dragSegmented");$&&$.querySelectorAll("button").forEach(b=>{b.onclick=()=>{te.secondaryDragMode=parseInt(b.dataset.drag,10),$.querySelectorAll("button").forEach(L=>{const U=L===b;L.classList.toggle("active",U),L.setAttribute("aria-pressed",String(U))})}});const x=document.getElementById("drawBtn"),S=document.getElementById("drawPopover"),z=document.getElementById("penRow"),v=document.getElementById("drawApplyRow");function P(b){S&&(S.hidden=!b,x&&x.setAttribute("aria-expanded",String(b)))}function k(b){te.drawIsEnabled=b>=0,b>=0&&(!te.drawingVolume&&te.volumes.length&&te.createEmptyDrawing(),te.drawPenValue=b&7,te.drawPenFilled=b>7),z&&z.querySelectorAll(".chip").forEach(L=>L.classList.toggle("active",parseInt(L.dataset.pen,10)===b))}function B(b){return Ce(this,null,function*(){var Pe;if(te.volumes.length<2){window.alert("No segmentation open (run a model first).");return}if(b===0){te.drawUndo();return}const L=(Pe=te.drawingVolume)==null?void 0:Pe.img;if(!L){window.alert("Nothing drawn yet — pick a pen and draw on the image first.");return}const U=te.volumes[1].img;if(p||U instanceof Float32Array){window.alert("Drawing edits label segmentations, not probability maps.");return}const H=te.volumes[1],E=H.dimsRAS;if(!E||L.length!==E[1]*E[2]*E[3]){window.alert("The drawing does not match the current image — redraw it.");return}const me=b===1?1:0;let ie=0;for(let Fe=0;Fe<E[3];Fe++)for(let Re=0;Re<E[2];Re++)for(let Ke=0;Ke<E[1];Ke++,ie++)L[ie]>0&&(U[Vn(H,[Ke,Re,Fe])]=me);te.closeDrawing(),yield te.updateGLVolume(),te.drawIsEnabled=!1,k(-1)})}x&&(x.onclick=b=>{b.stopPropagation(),P(S.hidden)}),z&&z.querySelectorAll(".chip").forEach(b=>{b.onclick=()=>k(parseInt(b.dataset.pen,10))}),v&&v.querySelectorAll(".chip").forEach(b=>{b.onclick=()=>B(parseInt(b.dataset.apply,10))}),document.addEventListener("click",b=>{!S||S.hidden||b.target.closest(".popover-wrap")||P(!1)}),document.addEventListener("keydown",b=>{b.key==="Escape"&&P(!1)});const C=document.getElementById("appDialog");if(C&&!("closedBy"in HTMLDialogElement.prototype)){let b=!1;const L=U=>{const H=C.getBoundingClientRect();return U.clientX<H.left||U.clientX>H.right||U.clientY<H.top||U.clientY>H.bottom};C.addEventListener("pointerdown",U=>{b=U.target===C&&L(U)}),C.addEventListener("pointerup",U=>{b&&U.target===C&&L(U)&&C.close(),b=!1})}aboutBtn.onclick=function(){Et("About BrainChop",`
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
    `)};const N=document.getElementById("shadingBtn");N.onclick=()=>{const b=N.classList.toggle("active");N.setAttribute("aria-pressed",String(b)),te.volumeIllumination=b?.5:0};const j=document.getElementById("resetViewBtn");j&&(j.onclick=()=>Ps(te)),diagnosticsBtn.onclick=function(){let b=e;if(b.length<1&&window.webgpuDiagnostics){const U=window.webgpuDiagnostics;b=`:: Startup Diagnostics ::
`,b+=`Secure Context: ${U.secureContext}
`,b+=`WebGPU Enabled: ${dn}
`,b+=`F16 Support: ${U.f16Support}
`,U.error&&(b+=`Error: ${U.error}
`),b+=`User Agent: ${navigator.userAgent}
`}if(b.length<1){Et("Diagnostics","No diagnostic string generated: run a model to create diagnostics");return}let L=b;t=t.slice(0,-2),t!==""&&L.includes("Status: OK")&&(L=L.replace("Status: OK",`Status: ${t}`)),t="",navigator.clipboard.writeText(L).then(()=>{Et("Diagnostics",`<p>Diagnostics copied to clipboard</p><pre style="white-space: pre-wrap; font-family: monospace; font-size: 0.9em; overflow-x: auto;">${L}</pre>`)}).catch(U=>{Et("Diagnostics",`<p>Failed to copy to clipboard.</p><pre style="white-space: pre-wrap; font-family: monospace; font-size: 0.9em; overflow-x: auto;">${L}</pre>`)})},opacitySlider0.oninput=()=>{te.volumes[0]&&(te.volumes[0].opacity=Number(opacitySlider0.value),te.drawScene())};let Y=Number(opacitySlider1.value),W=0;function D({dataChanged:b=!1,allowAffineFastPath:L=!0}={}){var me;if(te.volumes.length<2)return te.updateGLVolume();const H=(me=te.volumes[1].opacity)!=null?me:1,E=Y===0!=(H===0);return Y=H,L&&!b&&!E&&H>0&&te.volumes.length===2&&typeof te.updateVolumeAffineOnly=="function"?te.updateVolumeAffineOnly():te.volumes.length===2&&typeof te.updateVolumeData=="function"?te.updateVolumeData(1):te.updateGLVolume()}function O(){const b=Number(opacitySlider1.value);if(p&&te.volumes[1]===p.overlay){b>0&&gi(p.rgba,p.activeAlphaOffsets,p.activeBaseAlpha,b),p.overlay.opacity=b,D({dataChanged:!0,allowAffineFastPath:!1});return}te.volumes.slice(1).forEach(L=>{L.opacity=b}),D({dataChanged:!1,allowAffineFastPath:!0})}opacitySlider1.oninput=()=>{W||(W=requestAnimationFrame(()=>{W=0,O()}))};function Z(b=null){const L=b==null?void 0:b.probabilityUnderlayOpacity;L!==void 0?(_===null&&(_=opacitySlider0.value),opacitySlider0.value=L,te.volumes[0]&&(te.volumes[0].opacity=Number(L))):_!==null&&(opacitySlider0.value=_,_=null,te.volumes[0]&&(te.volumes[0].opacity=Number(opacitySlider0.value)))}function J(){return Ce(this,null,function*(){var Je,ue,oe;const b=te.volumes[0],L=(Je=b.hdr)==null?void 0:Je.pixDims,U=!L||Math.abs(Math.abs(L[1])-1)<.001&&Math.abs(Math.abs(L[2])-1)<.001&&Math.abs(Math.abs(L[3])-1)<.001,H=(ue=b.hdr)==null?void 0:ue.scl_slope,E=(oe=b.hdr)==null?void 0:oe.scl_inter,me=(H===void 0||H===0||Math.abs(H-1)<1e-6)&&(E===void 0||Math.abs(E)<1e-6);let ie=b.dims[1]===256&&b.dims[2]===256&&b.dims[3]===256&&b.img instanceof Uint8Array&&b.img.length===256*256*256&&U&&me;if((b.permRAS[0]!==-1||b.permRAS[1]!==3||b.permRAS[2]!==-2)&&(ie=!1),ie)return;Bt("Conforming input volume to 256³...",.05),yield No(),yield V();const Pe=yield te.volumeTransform.conform(b,{toRAS:!1}),[Fe,Re]=[M,w],Ke=modelSelect.value;yield te.removeVolume(0),yield te.addVolume(Pe),[M,w]=[Fe,Re],modelSelect.value=Ke,i()})}function F(){for(c=null,p=null,m=null;te.model.volumes.length>1;)te.model.removeVolume(te.model.volumes.length-1)}function V(){return Ce(this,null,function*(){F(),ce(),u(null),yield te.updateGLVolume()})}function K(){return te.volumes.length>=2&&te.volumes[1].colormapLabel?te.volumes[1]:null}function q(){return p&&te.volumes.length>=2&&te.volumes[1]===p.overlay?p:null}function ce(){g=null,c=null,h=null,A&&(A.style.display="none")}function pe(b,L){var E;const U=new Uint8ClampedArray(b.lut.length),H=L-((E=b.min)!=null?E:0);if(H>=0&&H*4+3<b.lut.length){const me=H*4;U[me]=b.lut[me],U[me+1]=b.lut[me+1],U[me+2]=b.lut[me+2],U[me+3]=b.lut[me+3]}return it({lut:U,min:b.min,max:b.max},b.labels?{labels:b.labels}:{})}function ye(){const b=K();b&&(m||(m=b.colormapLabel),g===null?(b.colormapLabel=m,h=null):(b.colormapLabel=pe(m,g),h=be(g)),D({dataChanged:!1,allowAffineFastPath:!0}),R())}function be(b){const L=te.volumes[0],U=K(),H=U==null?void 0:U.img;if(!L||!H)return null;const E=L.hdr.pixDims||[],me=E[1]&&E[2]&&E[3]?E[1]*E[2]*E[3]:1,ie=U.hdr.dims.slice(1,4),Pe=It(L.img,H,me,ie),Fe=Pe.reduce((oe,X)=>oe+X.volume_mm3,0),Re=Pe.find(oe=>oe.label===b);if(!Re)return null;const Ke=Fe>0?Re.volume_mm3/Fe*100:0,Je=[Re.name,`${bt(Re.volume_mm3)} cm3   (${Ke.toFixed(1)}% of brain)`,`${Re.voxels.toLocaleString()} voxels`,`intensity  ${Re.mean.toFixed(0)} +/- ${Re.stdev.toFixed(0)}`];let ue=[1,1,1,1];if(s&&s.R&&s.R[b]!=null){const oe=X=>Math.min(255,X*.55+130)/255;ue=[oe(s.R[b]),oe(s.G[b]),oe(s.B[b]),1]}return{lines:Je,color:ue}}function we(b){const L=q(),U=te.volumes[0];if(!L||!U)return null;const H=U.hdr.pixDims||[],E=H[1]&&H[2]&&H[3]?H[1]*H[2]*H[3]:1,me=U.hdr.dims.slice(1,4),{rows:ie,icvMm3:Pe}=to(U.img,L.maps,E,me,L.modelEntry),Fe=ie.find(Je=>Je.tissueIndex===b);if(!Fe)return null;const Re=Pe>0?Fe.volume_mm3/Pe*100:0,Ke=Je=>Math.min(255,Je*.55+130)/255;return{lines:[Fe.name,`${bt(Fe.volume_mm3)} cm3   (${Re.toFixed(1)}% of ICV)`,`${Math.round(Fe.effectiveVoxels).toLocaleString()} equiv. voxels`,`intensity  ${Fe.mean.toFixed(0)} +/- ${Fe.stdev.toFixed(0)}`],color:[Ke(Fe.tint[0]),Ke(Fe.tint[1]),Ke(Fe.tint[2]),1]}}function ee(){const b=q();if(!b)return;const L=Number(opacitySlider1.value),U=eo(b.maps,b.modelEntry,c,L,b.rasLayout);b.rgba=U.rgba,b.activeAlphaOffsets=U.activeAlphaOffsets,b.activeBaseAlpha=U.activeBaseAlpha,b.overlay.img=U.rgba,b.overlay.opacity=L,h=c===null?null:we(c),D({dataChanged:!0,allowAffineFastPath:!1}),R()}function le(b){q()&&(c=b===null||b===c?null:b,ee())}let A=null,ae=!1;function R(){var Fe,Re;A||(A=document.createElement("div"),A.style.cssText="position:absolute;pointer-events:none;font:13px/1.55 system-ui,sans-serif;text-shadow:0 1px 2px #000;white-space:pre;color:#ebebeb",te.canvas.parentElement.appendChild(A));const b=g!==null&&!!K()||c!==null&&!!q(),L=(Re=(Fe=te.view)==null?void 0:Fe.screenSlices)==null?void 0:Re.find(Ke=>Ke.axCorSag===4);if(!b||!h||!L){A.style.display="none";return}const U=window.devicePixelRatio||1,[H,E]=L.leftTopWidthHeight;Object.assign(A.style,{left:`${H/U+8}px`,top:`${E/U+8}px`});const{lines:me,color:ie}=h,Pe=ie.slice(0,3).map(Ke=>Math.round(Ke*255)).join(",");A.innerHTML=`<span style="color:rgb(${Pe})">${qt(me[0])}</span>
`+me.slice(1).map(qt).join(`
`),A.style.display="block"}function fe(){ae||g===null&&c===null||(ae=!0,requestAnimationFrame(()=>{ae=!1,R()}))}function re(){const b=K();if(!b||!y)return null;const L=Vn(b,y);if(L===null)return null;const U=b.img[L];return U===void 0?null:Math.round(U*b.hdr.scl_slope+b.hdr.scl_inter)}function ne(b){K()&&(g=b===0||b===g?null:b,ye())}function Q(){const b=q(),L=te.volumes[0];if(!b||!L||!y)return;const U=Vn(L,y);if(U===null)return;let H=null,E=0;for(let me=0;me<b.maps.length;me++){const ie=b.maps[me][U];Number.isFinite(ie)&&ie>E&&(E=ie,H=me)}return H}function se(b){if(b[d]){if(K()){const L=re();if(L===null||Number.isNaN(L))return;ne(L)}else if(q()){const L=Q();if(L===void 0)return;le(L)}b.preventDefault()}}function G(){return Ce(this,null,function*(){if(!Hn){Hn=!0,Yn=[];try{yield Se()}finally{Hn=!1,modelProgress.classList.remove("is-busy"),modelSelect.value="-1",i()}}})}function Se(){return Ce(this,null,function*(){var ue,oe;const b=modelSelect.value;if(b==="-1"||modelSelect.selectedIndex<0)return;const L=document.getElementById("memstatusItem");L&&(L.hidden=!0),ce(),yield J();const U=wn[b],H=(new URLSearchParams(window.location.search).get("precision")||"").toLowerCase(),me=it(it({},Qs(U,H!=="fp16"&&H!=="fp32")),H==="fp32"?{forceFP32:!0}:{}),ie=xt(it({},Da),{isTouchPrimary:bi()}),Pe=new URL("./",window.location.href).href;ie.rootURL=Pe.endsWith("/")?Pe.slice(0,-1):Pe;const Fe=te.volumes[0].img;let Re=null;const Ke=wi&&!me.quantize8Bit,Je=ws||Ke;if(Ke&&dn&&me.webgpu_safetensor&&console.info("Safari WebGPU legacy gate active for non-V4 model; routing to native WebGL2."),!Je&&(!en||en.__isLost)&&"gpu"in navigator&&us<2&&(ue=window.webgpuDiagnostics)!=null&&ue.adapterObtained&&(us++,console.info(`[WebGPU] Re-initializing device after prior loss (attempt ${us})...`),yield so((oe=te.view)==null?void 0:oe.gl)),dn&&en&&!en.__isLost&&!Je&&me.webgpu_safetensor){console.log("Attempting WebGPU backend...");const X=xt(it({},me),{enableTTA:!1});try{yield Ea(en,ie,X,te.volumes[0].hdr,Fe,Pt,Bt);return}catch(I){Re=I,console.error("WebGPU inference failed, falling back to native WebGL2.",I)}}if(U.webgpu_safetensor){const X=H==="int8"||H==="rgba8",I=xt(it({},Qs(U,!1)),{quantize8Bit:X,autoQuantize8BitFallback:!X&&!!U.turbo});try{const{runInferenceWebGl2:he,nativeWebgl2Available:de}=yield fn(()=>Ce(null,null,function*(){const{runInferenceWebGl2:$e,nativeWebgl2Available:ge}=yield import("./inference-webgl2-B09Hz9oY.js");return{runInferenceWebGl2:$e,nativeWebgl2Available:ge}}),[],import.meta.url);if(de()){console.log("Attempting native WebGL2 runner..."),yield he(ie,I,te.volumes[0].hdr,Fe,Pt,Bt);return}Re=new Error("Native WebGL2 unavailable (no OffscreenCanvas WebGL2 context)."),console.warn(Re.message)}catch(he){Re=he,console.error("Native WebGL2 failed.",he)}}xi(Re||new Error(`No available backend could run ${me.modelName}.`))})}modelSelect.onchange=()=>(i(),G()),i();function _e(){const b=q();return b?b.maps.map((L,U)=>Rn(te.volumes[0],L,b.tissues[U].name,{scl_inter:0,scl_slope:1,datatypeCode:16,numBitsPerVoxel:32,cal_min:0,cal_max:1,intent_code:1001})):te.volumes.slice(1)}function Be(){const b=te.volumes[1],L=(o==null?void 0:o.type)==="Brain_Extraction"?a:b.img;if(!L||L.length!==b.img.length)throw new Error("The segmentation mask is unavailable. Run the model again.");const U=new Uint8Array(L.length);for(let E=0;E<L.length;E++)U[E]=L[E]!==0?1:0;const H=no(b,U,"brain_mask");return Object.assign(H.hdr,{datatypeCode:2,numBitsPerVoxel:8,scl_slope:1,scl_inter:0,cal_min:0,cal_max:1,intent_code:1002}),H}function ze(){return Ce(this,arguments,function*({includeMask:b=!1,useFreeSurfer:L=!1}={}){if(te.volumes.length<2){window.alert("No segmentation to save (run a model first).");return}const U=L?Dn(n):null,H=_e();for(const E of H){const me=!!E.colormapLabel||E.hdr.intent_code===1002;if(U&&me){const{img:ie,maxLabel:Pe}=si(E.img,U),Fe=Rn(E,ie,E.name,{datatypeCode:4,numBitsPerVoxel:16,scl_slope:1,scl_inter:0,cal_min:0,cal_max:Pe,intent_code:1002});yield Sn(Fe,Ge(E,H.length,"_fs"))}else yield Sn(E,Ge(E,H.length,""))}b&&(yield Sn(Be(),"binary_mask.nii.gz"))})}function Ge(b,L,U){return L>1?`segmentation_${b.name}${U}.nii.gz`:`segmentation${U}.nii.gz`}function We(){if(te.volumes.length<1){window.alert("No image loaded.");return}Sn(te.volumes[0],"conformed_input.nii.gz")}function Xe(){return Ce(this,null,function*(){if(te.volumes.length<1){window.alert("No image loaded.");return}const b=K(),L=g!==null&&b&&m?b.colormapLabel:null;L&&(b.colormapLabel=m);try{yield te.saveDocument("brainchop.nvd")}finally{L&&b&&(b.colormapLabel=L)}})}function Oe(){return Ce(this,arguments,function*({includeMask:b=!1,useFreeSurfer:L=!1}={}){if(te.volumes.length<2){window.alert("No segmentation to save (run a model first).");return}if(!M||!M.hdr||!M.hdr.affine){window.alert("Original input grid is unavailable — reload the image and try again.");return}const U=L?Dn(n):null;Bt("Reslicing to native space…",.15);try{const H=_e();for(let E=0;E<H.length;E++){const me=H[E],ie=!!me.colormapLabel||me.hdr.intent_code===1002,Pe=U&&ie?U:null,Fe=yield Le(me,Pe);yield Sn(Fe,Ge(me,H.length,Pe?"_fs_native":"_native")),H.length>1&&Bt("Reslicing to native space…",.15+(E+1)/H.length*.75)}if(b){const E=yield Le(Be());yield Sn(E,"binary_mask_native.nii.gz")}Bt("Saved native-space segmentation.",1)}catch(H){Bt("",0),console.error("Native-space reslice failed:",H),window.alert("Native-space export failed: "+(H&&H.message?H.message:H))}})}function Le(b,L=null){return Ce(this,null,function*(){var Fe,Re;const U=!!b.colormapLabel||b.hdr.intent_code===1002,H=!U&&b.img instanceof Float32Array,E=((Re=(Fe=M.img)==null?void 0:Fe.constructor)==null?void 0:Re.name)||"Uint8Array",{img:me,hdrPatch:ie}=yield Vr({srcImg:b.img,srcDims:[b.hdr.dims[1],b.hdr.dims[2],b.hdr.dims[3]],srcAffine:b.hdr.affine,dstDims:[M.hdr.dims[1],M.hdr.dims[2],M.hdr.dims[3]],dstAffine:M.hdr.affine,isLabel:U,isProbability:H,dstTypedArrayKind:E,labelLut:L}),Pe=no(M,me);return Object.assign(Pe.hdr,ie),Pe})}let Ae=!1,Ve=!1;const at={cube:'<svg viewBox="0 0 24 24" class="save-opt-ico" aria-hidden="true"><path d="M12 2.75l8.25 4.75v9L12 21.25 3.75 16.5v-9z"/><path d="M12 12v9.25M3.75 7.5L12 12l8.25-4.5"/></svg>',grid:'<svg viewBox="0 0 24 24" class="save-opt-ico" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="2.5"/><path d="M3.5 9.5h17M3.5 14.5h17M9.5 3.5v17M14.5 3.5v17"/></svg>',volume:'<svg viewBox="0 0 24 24" class="save-opt-ico" aria-hidden="true"><path d="M12 3.5l8.5 4.5-8.5 4.5L3.5 8z"/><path d="M3.5 12l8.5 4.5 8.5-4.5M3.5 16l8.5 4.5 8.5-4.5"/></svg>',scene:'<svg viewBox="0 0 24 24" class="save-opt-ico" aria-hidden="true"><rect x="3.5" y="4.5" width="17" height="15" rx="2.5"/><path d="M3.5 9.5h17M9.5 9.5v10"/></svg>',arrow:'<svg viewBox="0 0 24 24" class="save-opt-arrow" aria-hidden="true"><path d="M12 4.5v11"/><path d="M7.5 11.5L12 16l4.5-4.5"/><path d="M5 19.5h14"/></svg>'},tt=[{act:ze,group:"seg",icon:"cube",title:"Conformed space",sub:"256³ · 1 mm isotropic",need:"seg"},{act:Oe,group:"seg",icon:"grid",title:"Native space",sub:"Resampled to the input grid",need:"seg"},{act:We,group:"vol",icon:"volume",title:"Conformed input volume",sub:"Resampled T1 · 256³ · 1 mm",need:"img"},{act:Xe,group:"vol",icon:"scene",title:"Scene (.nvd)",sub:"Full viewer state document",need:"img"}];function st(){const b=te.volumes.length>=1,L=te.volumes.length>=2,U=L&&o&&o.outputType!=="probability"&&(o.type!=="Brain_Extraction"||!!a),H=L&&o&&o.outputType!=="probability"&&o.type!=="Brain_Extraction"&&!!Dn(n),E=X=>X==="seg"?L:b;let me=!1;const ie=X=>tt.map((I,he)=>({o:I,i:he})).filter(({o:I})=>I.group===X).map(({o:I,i:he})=>{const de=E(I.need),$e=de&&!me?(me=!0," autofocus"):"";return`<button type="button" class="save-opt${de?"":" disabled"}" data-i="${he}"${de?"":" disabled"}${$e}>
          ${at[I.icon]}
          <span class="save-opt-copy">
            <span class="save-opt-title">${I.title}</span>
            <span class="save-opt-sub">${I.sub}</span>
          </span>
          ${at.arrow}
        </button>`}).join(""),Pe=[];H&&Pe.push(`
        <label class="save-check-row" for="saveFreeSurfer">
          <input type="checkbox" id="saveFreeSurfer" class="save-checkbox"${Ae?" checked":""}>
          <span class="save-check-copy">
            <span class="save-check-title">FreeSurfer label IDs <span class="save-badge">Freeview</span></span>
            <span class="save-check-sub">FreeSurferColorLUT numbering · open directly with :colormap=lut</span>
          </span>
        </label>`),U&&Pe.push(`
        <label class="save-check-row" for="saveBinaryMask">
          <input type="checkbox" id="saveBinaryMask" class="save-checkbox"${Ve?" checked":""}>
          <span class="save-check-copy">
            <span class="save-check-title">Also save binary mask</span>
            <span class="save-check-sub">Foreground 1 · background 0</span>
          </span>
        </label>`);const Fe=Pe.length?`<div class="save-modifiers" role="group" aria-label="Segmentation export options">${Pe.join("")}</div>`:"",Ke=`
      <div class="save-sheet">
        <section class="save-section">
          <div class="save-section-head">
            <span class="save-section-label">Segmentation</span>
            ${L?"":'<span class="save-section-hint">Run a model first</span>'}
          </div>
          <div class="save-options">${ie("seg")}</div>
          ${Fe}
        </section>
        <section class="save-section save-section-divider">
          <div class="save-section-head">
            <span class="save-section-label">Volume &amp; Scene</span>
          </div>
          <div class="save-options">${ie("vol")}</div>
        </section>
      </div>`;Et("Save",Ke,{hideClose:!0,saveMode:!0});const Je=document.getElementById("dialogMessage");if(!Je)return;const ue=Je.querySelector("#saveFreeSurfer");ue&&(ue.onchange=()=>{Ae=ue.checked});const oe=Je.querySelector("#saveBinaryMask");oe&&(oe.onchange=()=>{Ve=oe.checked}),Je.querySelectorAll(".save-opt:not(.disabled)").forEach(X=>{X.onclick=()=>{var ge,Me;const I=tt[parseInt(X.dataset.i,10)],he=I.need==="seg"&&!!((ge=Je.querySelector("#saveBinaryMask"))!=null&&ge.checked),de=I.need==="seg"&&H&&!!((Me=Je.querySelector("#saveFreeSurfer"))!=null&&Me.checked),$e=document.getElementById("appDialog");$e&&$e.open&&$e.close(),I.need==="seg"?I.act({includeMask:he,useFreeSurfer:de}):I.act()}})}const Mt=document.getElementById("saveBtn");Mt&&(Mt.onclick=st);function It(b,L,U,H=[256,256,256]){const me=new Map,[ie,Pe,Fe]=H,Re=L.length;if(ie*Pe*Fe===Re){let ue=0;for(let oe=0;oe<Fe;oe++)for(let X=0;X<Pe;X++)for(let I=0;I<ie;I++,ue++){const he=L[ue];if(he===0)continue;let de=me.get(he);de||(de={count:0,sum:0,sumSq:0,sumX:0,sumY:0,sumZ:0,hist:new Float64Array(256)},me.set(he,de));const $e=b[ue];de.count++,de.sum+=$e,de.sumSq+=$e*$e,de.sumX+=I,de.sumY+=X,de.sumZ+=oe,de.hist[$e]++}}else for(let ue=0;ue<Re;ue++){const oe=L[ue];if(oe===0)continue;let X=me.get(oe);X||(X={count:0,sum:0,sumSq:0,sumX:0,sumY:0,sumZ:0,hist:new Float64Array(256)},me.set(oe,X));const I=b[ue];X.count++,X.sum+=I,X.sumSq+=I*I,X.hist[I]++}const Ke=(ue,oe,X)=>{const I=X*oe;let he=0;for(let de=0;de<ue.length;de++)if(he+=ue[de],he>=I)return de;return ue.length-1},Je=[];for(const[ue,oe]of[...me.entries()].sort((X,I)=>X[0]-I[0])){const X=oe.sum/oe.count,I=Math.max(0,oe.sumSq/oe.count-X*X);let he=0,de=0;for(let $e=0;$e<oe.hist.length;$e++)if(oe.hist[$e]>0){he=$e;break}for(let $e=oe.hist.length-1;$e>=0;$e--)if(oe.hist[$e]>0){de=$e;break}Je.push({label:ue,name:n&&n[ue]!=null?n[ue]:`label_${ue}`,voxels:oe.count,volume_mm3:oe.count*U,min:he,max:de,q1:Ke(oe.hist,oe.count,.25),median:Ke(oe.hist,oe.count,.5),q3:Ke(oe.hist,oe.count,.75),mean:X,stdev:Math.sqrt(I),centroidVox:[oe.sumX/oe.count,oe.sumY/oe.count,oe.sumZ/oe.count]})}return Je}function zt(b,{vol:L,labelArr:U=null,probMap:H=null}={}){var he;if(!(b!=null&&b.centroidVox)||!((he=L==null?void 0:L.hdr)!=null&&he.affine))return;const[E,me,ie]=L.hdr.dims.slice(1,4);let[Pe,Fe,Re]=b.centroidVox;const Ke=Math.max(0,Math.min(E-1,Math.round(Pe))),Je=Math.max(0,Math.min(me-1,Math.round(Fe))),ue=Math.max(0,Math.min(ie-1,Math.round(Re))),oe=Ke+Je*E+ue*E*me;if(U&&U[oe]!==b.label){let de=1/0,$e=Ke,ge=Je,Me=ue,Te=0;for(let et=0;et<ie;et++){const qe=et-Re,He=qe*qe;for(let lt=0;lt<me;lt++){const Ze=lt-Fe,je=Ze*Ze+He;for(let ve=0;ve<E;ve++,Te++){if(U[Te]!==b.label)continue;const ke=ve-Pe,xe=ke*ke+je;xe<de&&(de=xe,$e=ve,ge=lt,Me=et)}}}Number.isFinite(de)&&(Pe=$e,Fe=ge,Re=Me)}else if(H&&!(H[oe]>=.5)){let de=1/0,$e=Ke,ge=Je,Me=ue,Te=0;for(let et=0;et<ie;et++){const qe=et-Re,He=qe*qe;for(let lt=0;lt<me;lt++){const Ze=lt-Fe,je=Ze*Ze+He;for(let ve=0;ve<E;ve++,Te++){if(!(H[Te]>=.5))continue;const ke=ve-Pe,xe=ke*ke+je;xe<de&&(de=xe,$e=ve,ge=lt,Me=et)}}}Number.isFinite(de)&&(Pe=$e,Fe=ge,Re=Me)}const X=L.hdr.affine,I=[X[0][0]*Pe+X[0][1]*Fe+X[0][2]*Re+X[0][3],X[1][0]*Pe+X[1][1]*Fe+X[1][2]*Re+X[1][3],X[2][0]*Pe+X[2][1]*Fe+X[2][2]*Re+X[2][3]];te.setCrosshairPos(I)}const Yt='<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="5.5"/><path d="M12 2.5v4M12 17.5v4M2.5 12h4M17.5 12h4"/></svg>';function tn(b,L=null){const U=L?["label","fs_label","name","voxels","volume_mm3","min","max","q1","median","q3","mean","stdev"]:["label","name","voxels","volume_mm3","min","max","q1","median","q3","mean","stdev"],H=ie=>Number.isInteger(ie)?String(ie):ie.toFixed(6),E=ie=>/[",\n]/.test(ie)?`"${String(ie).replace(/"/g,'""')}"`:String(ie),me=[U.join(",")];for(const ie of b){const Pe=L?[ie.label,ie.label<L.length?L[ie.label]:ie.label,E(ie.name)]:[ie.label,E(ie.name)];Pe.push(ie.voxels,H(ie.volume_mm3),ie.min,ie.max,ie.q1,ie.median,ie.q3,H(ie.mean),H(ie.stdev)),me.push(Pe.join(","))}return me.join(`
`)+`
`}function At(b,L="mask_stats.csv"){const U=new Blob([b],{type:"text/csv"}),H=URL.createObjectURL(U),E=document.createElement("a");E.href=H,E.download=L,document.body.appendChild(E),E.click(),E.remove(),URL.revokeObjectURL(H)}function Gt(b,L=null){At(tn(b,L),"mask_stats.csv")}const bt=b=>{const L=b/1e3;return L>=10?Math.round(L).toLocaleString():L.toFixed(1)};function mt(b,L,U=null,{isCatLiteMode:H=!1}={}){const E=Math.max(...b.map(ue=>ue.volume_mm3)),me=ue=>ue.colorCss?ue.colorCss:s&&s.R&&s.R[ue.label]!=null?`rgb(${s.R[ue.label]},${s.G[ue.label]},${s.B[ue.label]})`:"#6b9bd1",ie=H||!!K();let Pe="";for(const ue of b){const oe=L>0?ue.volume_mm3/L*100:0,X=E>0?ue.volume_mm3/E*100:0,I=H?c===ue.tissueIndex:g===ue.label,he=!H&&U&&ue.label<U.length?U[ue.label]:null,de=`<span class="stat-val" data-cm3="${bt(ue.volume_mm3)}" data-pct="${oe.toFixed(1)}%">${bt(ue.volume_mm3)}</span>`,$e=`<span class="stat-bar" style="width:${X.toFixed(2)}%;background:${me(ue)}" data-w-abs="${X.toFixed(2)}" data-w-pct="${oe.toFixed(2)}"></span>`,ge=(qe,He)=>`<div class="stat-kv"><span class="k">${qe}</span><span class="v">${He}</span></div>`,Me=H?ge("% ICV",`${oe.toFixed(1)}%`)+ge("cm³",bt(ue.volume_mm3))+ge("mean",ue.mean.toFixed(2))+ge("SD",ue.stdev.toFixed(2))+ge("min",ue.min)+ge("max",ue.max)+ge("equiv. vox",Math.round(ue.effectiveVoxels).toLocaleString())+ge("support",ue.supportVoxels.toLocaleString()):ge("min",ue.min)+ge("max",ue.max)+ge("Q1",ue.q1)+ge("Q3",ue.q3)+ge("median",ue.median)+ge("mean",ue.mean.toFixed(2))+ge("SD",ue.stdev.toFixed(2))+ge("voxels",ue.voxels.toLocaleString()),Te=H?`<span class="stat-id-chip">${qt(ue.tissueKey.toUpperCase())}</span>`:`<span class="stat-id-chip">ID ${ue.label}</span>`,et=ie?`<button type="button" class="stat-iso${I?" active":""}" aria-pressed="${I}" aria-label="${I?"Isolated":"Isolate"} ${qt(ue.name)}">${I?"isolated":"isolate"}</button>`:"";Pe+=`
        <div class="stat-row${I?" is-isolated":""}" data-label="${ue.label}" data-name="${qt(ue.name.toLowerCase())}">
          <div class="stat-line">
            <button type="button" class="stat-trigger" aria-expanded="false">
              <span class="stat-chevron" aria-hidden="true"></span>
              <span class="stat-swatch" style="background:${me(ue)}" aria-hidden="true"></span>
              <span class="stat-name">${qt(ue.name)}</span>
              <span class="stat-track" aria-hidden="true">${$e}</span>
              ${de}
            </button>
            <span class="stat-actions">
              <button type="button" class="stat-locate" aria-label="Locate ${qt(ue.name)}" title="Jump crosshair to ${qt(ue.name)}">${Yt}</button>
              ${et}
            </span>
          </div>
          <div class="stat-detail" hidden>
            <div class="stat-detail-meta">
              <span class="stat-detail-fullname">${qt(ue.name)}</span>
              <span class="stat-detail-badges">
                ${Te}
                ${he?`<span class="save-badge">FS ${he}</span>`:""}
              </span>
            </div>
            <div class="stat-detail-grid">${Me}</div>
          </div>
        </div>`}const Fe=H?b.length===1?"tissue":"tissues":b.length===1?"region":"regions",Re=H?" cm³ ICV":" cm³",Ke=H?"% of ICV":"% of total",Je=b.length>8?`<search class="stat-search">
           <input type="search" id="statsFilterInput" class="stat-filter" placeholder="Filter regions…" aria-label="Filter regions" autocorrect="off" autocapitalize="none" spellcheck="false">
         </search>`:"";return`
      <div id="statsPanel">
        <div class="stat-toolbar">
          <div class="stat-toggle" role="group" aria-label="Volume display unit">
            <button type="button" data-mode="cm3" class="active" aria-pressed="true">cm³</button>
            <button type="button" data-mode="pct" aria-pressed="false">${Ke}</button>
          </div>
          <span class="stat-total" id="statsUnitLabel">${b.length} ${Fe} &middot; ${bt(L)}${Re}</span>
          ${Je}
        </div>
        <div id="statsRows">
          ${Pe}
          <p id="statsEmpty" class="stat-empty" hidden>No matching regions</p>
        </div>
        <div class="stat-footer">
          <span class="stat-footer-hint">Select a row for stats &middot; Crosshair jumps &middot; Isolate solos in 3D</span>
          <button type="button" id="statsDownloadBtn" class="stat-csv-btn">
            ${at.arrow}
            <span>Download CSV</span>
          </button>
        </div>
      </div>`}saveStatsBtn.onclick=function(){if(te.volumes.length<2){Et("Region volumes","<p>No segmentation to measure — run a model first.</p>");return}const b=te.volumes[0].img,L=te.volumes[0].hdr.pixDims||[],U=L[1]&&L[2]&&L[3]?L[1]*L[2]*L[3]:1,H=q();let E,me,ie=null,Pe=!1,Fe=null;const Re=te.volumes[1];if(H){Pe=!0;const ge=te.volumes[0].hdr.dims.slice(1,4),Me=to(b,H.maps,U,ge,H.modelEntry);if(E=Me.rows,me=Me.icvMm3,E.length===0){Et("Tissue volumes","<p>No non-zero tissue fractions found.</p>");return}E=E.slice().sort((Te,et)=>et.volume_mm3-Te.volume_mm3)}else if(Re.img instanceof Float32Array){Et("Region volumes","<p>Region statistics require a discrete label segmentation or CAT-lite GM/WM/CSF tissue maps.</p>");return}else{if(Fe=Re.img,!b||!Fe||b.length!==Fe.length){Et("Region volumes","<p>Input and segmentation grids do not match.</p>");return}const ge=Re.hdr.dims.slice(1,4);if(E=It(b,Fe,U,ge),E.length===0){Et("Region volumes","<p>No non-background labels found in the segmentation.</p>");return}E=E.slice().sort((Me,Te)=>Te.volume_mm3-Me.volume_mm3),me=E.reduce((Me,Te)=>Me+Te.volume_mm3,0),ie=o&&o.type!=="Brain_Extraction"?Dn(n):null}const Ke=new Map(E.map(ge=>[ge.label,ge]));Et(Pe?"Tissue volumes":"Region volumes",mt(E,me,ie,{isCatLiteMode:Pe}),{hideClose:!0,statsMode:!0});const ue=document.getElementById("statsPanel");if(!ue)return;let oe="cm3",X=E.length;const I=Pe?E.length===1?"tissue":"tissues":E.length===1?"region":"regions",he=()=>{const ge=document.getElementById("statsUnitLabel");if(!ge)return;const Me=X===E.length?`${E.length} ${I}`:`${X} of ${E.length} ${I}`,Te=oe==="pct"?Pe?"100% of ICV":"100% of volume":`${bt(me)}${Pe?" cm³ ICV":" cm³"}`;ge.innerHTML=`${Me} &middot; ${Te}`};ue.querySelectorAll(".stat-toggle button").forEach(ge=>{ge.onclick=()=>{oe=ge.dataset.mode,ue.querySelectorAll(".stat-toggle button").forEach(Me=>{const Te=Me===ge;Me.classList.toggle("active",Te),Me.setAttribute("aria-pressed",String(Te))}),he(),ue.querySelectorAll(".stat-row").forEach(Me=>{const Te=Me.querySelector(".stat-val"),et=Me.querySelector(".stat-bar");Te.textContent=oe==="pct"?Te.dataset.pct:Te.dataset.cm3,et.style.width=(oe==="pct"?et.dataset.wPct:et.dataset.wAbs)+"%"})}});const de=document.getElementById("statsFilterInput"),$e=document.getElementById("statsEmpty");if(de){const ge=()=>{const Me=de.value.trim().toLowerCase();X=0,ue.querySelectorAll(".stat-row").forEach(Te=>{const et=!Me||Te.dataset.name.includes(Me)||Te.dataset.label===Me;Te.hidden=!et,et&&X++}),$e&&($e.hidden=X>0),he()};de.oninput=ge,de.addEventListener("keydown",Me=>{Me.key==="Escape"&&de.value!==""&&(Me.preventDefault(),Me.stopPropagation(),de.value="",ge())})}ue.querySelectorAll(".stat-trigger").forEach(ge=>{ge.onclick=()=>{const Me=ge.closest(".stat-row"),Te=Me.querySelector(".stat-detail"),et=Te.hidden;Te.hidden=!et,Me.classList.toggle("is-expanded",et),ge.setAttribute("aria-expanded",String(et))}}),ue.querySelectorAll(".stat-locate").forEach(ge=>{ge.onclick=()=>{const Me=parseInt(ge.closest(".stat-row").dataset.label,10),Te=Ke.get(Me);Te&&zt(Te,{vol:Pe?te.volumes[0]:Re,labelArr:Pe?null:Fe,probMap:Pe?H.maps[Te.tissueIndex]:null});const et=document.getElementById("appDialog");et&&et.open&&et.close()}}),ue.querySelectorAll(".stat-iso").forEach(ge=>{ge.onclick=()=>{const Me=parseInt(ge.closest(".stat-row").dataset.label,10);Number.isNaN(Me)||(Pe?le(Me):ne(Me));const Te=document.getElementById("appDialog");Te&&Te.open&&Te.close()}}),document.getElementById("statsDownloadBtn").onclick=()=>{Pe?At(_i(E,me),"tissue_stats.csv"):Gt(E,ie)}};function $t(){te.volumes.length<=1&&(M=te.volumes[0]||null,w=M&&M.name?M.name:"input.nii.gz",o=null,a=null,u(null),Z(),modelSelect.value="-1",i(),te.volumes[0]&&opacitySlider0.oninput())}const St=new Map;function Kt(b){return Ce(this,null,function*(){if(St.has(b))return St.get(b);const U=yield(yield fetch(b)).json();return St.set(b,U),U})}function an(b,L,U=1){let H=0;for(let E=0;E<256;E++)b[E]>0&&H++;return(!L||H!==L.length)&&(t="Failed to Predict Some Labels - "),L.map((E,me)=>{const ie=me<256?b[me]:0,Pe=ie>0?`${bt(ie*U)} cm3`:"Missing";return Pe==="Missing"&&(t+=`${E}, `),`${E}   ${Pe}`})}function Ct(b,L,U){return Ce(this,null,function*(){var Re,Ke;const H=(Re=L.probabilityDisplayMin)!=null?Re:.005,{probabilityOverlayAlpha:E=96,probabilityOverlayFloor:me=192}=L,ie=(U==null?void 0:U.tint)||[255,255,255],Pe=`probability-light-${ie.join("-")}-${me}-${E}`;if(!te.hasColormap(Pe)){const[Je,ue,oe]=ie.map(X=>Math.round(X*me/255));te.addColormap(Pe,{R:[Je,ie[0]],G:[ue,ie[1]],B:[oe,ie[2]],A:[0,E],I:[0,255]})}const Fe=Rn(te.volumes[0],b instanceof Float32Array?b:Float32Array.from(b),(Ke=U==null?void 0:U.name)!=null?Ke:te.volumes[0].name,{scl_inter:0,scl_slope:1,datatypeCode:16,numBitsPerVoxel:32,cal_min:0,cal_max:1,intent_code:1001},{calMin:H,calMax:1,robustMin:H,robustMax:1,globalMin:0,globalMax:1,colormapType:1,colormap:Pe,opacity:Number(opacitySlider1.value),modulateAlpha:1});return Fe.modulationImage=Fe.id,yield te.model.addVolume(Fe),te.volumes.at(-1)})}function Pt(b,L,U,H){return Ce(this,null,function*(){var Je,ue,oe;if(F(),ce(),n=null,s=null,o=U,a=U.type==="Brain_Extraction"&&H||null,u(U),U.outputType==="probability"){const X=Array.isArray(b)?b:[b];if(U.probabilityPostprocess==="cat-lite"&&X.length===3){const I=te.volumes[0],he=X.map(He=>He instanceof Float32Array?He:Float32Array.from(He)),de=Number(opacitySlider1.value),$e=I.dimsRAS&&I.img2RASstart&&I.img2RASstep?{dimsRAS:[...I.dimsRAS],img2RASstart:[...I.img2RASstart],img2RASstep:[...I.img2RASstep]}:null,ge=eo(he,U,null,de,$e),Me=ge.isRasOrdered?{dims:[...$e.dimsRAS],permRAS:[1,2,3],img2RASstart:[0,0,0],img2RASstep:[1,$e.dimsRAS[1],$e.dimsRAS[1]*$e.dimsRAS[2]]}:{},Te=ge.isRasOrdered?it({dims:[3,$e.dimsRAS[1],$e.dimsRAS[2],$e.dimsRAS[3],1,1,1,1]},I.matRAS&&I.matRAS.length>=16?{affine:[[I.matRAS[0],I.matRAS[4],I.matRAS[8],I.matRAS[12]],[I.matRAS[1],I.matRAS[5],I.matRAS[9],I.matRAS[13]],[I.matRAS[2],I.matRAS[6],I.matRAS[10],I.matRAS[14]],[I.matRAS[3],I.matRAS[7],I.matRAS[11],I.matRAS[15]]]}:{}):{},et=Rn(I,ge.rgba,"cat_lite_tissues",xt(it({},Te),{scl_inter:0,scl_slope:1,datatypeCode:2304,numBitsPerVoxel:32,cal_min:0,cal_max:255,intent_code:1001}),xt(it({},Me),{calMin:0,calMax:255,robustMin:0,robustMax:255,globalMin:0,globalMax:255,opacity:de}));yield te.model.addVolume(et);const qe=te.volumes.at(-1);p={maps:he,tissues:ge.tissues,modelEntry:U,rasLayout:ge.isRasOrdered?$e:null,rgba:ge.rgba,activeAlphaOffsets:ge.activeAlphaOffsets,activeBaseAlpha:ge.activeBaseAlpha,overlay:qe}}else for(let I=0;I<X.length;I++)yield Ct(X[I],U,(Je=U.probabilityTissues)==null?void 0:Je[I]);Z(U),Y=Number(opacitySlider1.value),yield te.updateGLVolume();return}const E=b instanceof Uint8Array?b:new Uint8Array(b.buffer,b.byteOffset||0,b.byteLength);let me,ie=null,Pe=0,Fe={calMin:0,calMax:255,robustMin:0,robustMax:255,globalMin:0,globalMax:255};if(U.type==="Brain_Masking"){const X=["Background","Brain Mask"];n=X.slice();const I=[0,217],he=[0,119],de=[0,33];s={R:I,G:he,B:de};const $e={R:I,G:he,B:de,labels:X},ge="brainchop-label-mask";te.addColormap(ge,$e),me=ge,ie=Ws($e),Pe=1002,Fe={calMin:0,calMax:1,robustMin:0,robustMax:1,globalMin:0,globalMax:1}}else if(U.colormapPath){const X=cs(E),I=yield Kt(U.colormapPath);n=I.labels?I.labels.slice():null,s={R:I.R,G:I.G,B:I.B};const he=te.volumes[0].hdr.pixDims||[],de=he[1]&&he[2]&&he[3]?he[1]*he[2]*he[3]:1,$e=I.labels?an(X,I.labels,de):[],ge=xt(it(it({R:I.R,G:I.G,B:I.B},I.I?{I:I.I}:{}),I.A?{A:I.A}:{}),{labels:$e}),Me=`brainchop-label-${U.id}`;te.addColormap(Me,ge),me=Me,ie=Ws(ge);const Te=Math.max(1,((oe=(ue=I.R)==null?void 0:ue.length)!=null?oe:256)-1);Pe=1002,Fe={calMin:0,calMax:Te,robustMin:0,robustMax:Te,globalMin:0,globalMax:Te}}else{const X=cs(E);Fe=hi(X),me=L.atlasSelectedColorTable.toLowerCase(),U.type==="Brain_Extraction"&&(me="copper2"),te.hasColormap(me)||(me="actc")}const Re=Rn(te.volumes[0],E,te.volumes[0].name,{datatypeCode:2,numBitsPerVoxel:8,scl_inter:0,scl_slope:1,cal_min:Fe.calMin,cal_max:Fe.calMax,intent_code:Pe},xt(it(xt(it({},Fe),{colormap:me}),ie?{colormapLabel:ie}:{}),{opacity:Number(opacitySlider1.value)}));yield te.model.addVolume(Re);const Ke=te.volumes.at(-1);ie&&Ke&&!Ke.colormapLabel&&(Ke.colormapLabel=ie),m=ie?Ke.colormapLabel:null,Z(U),Y=Number(opacitySlider1.value),yield te.updateGLVolume()})}function kt(b){return Ce(this,null,function*(){var L;if(typeof b=="string")try{b=JSON.parse(b)}catch(U){console.error("Failed to parse telemetry data",U);return}b=yield ei(b,(L=te.view)==null?void 0:L.gl),e=`:: Diagnostics https://github.com/neuroneural/brainchop/issues ::
`;for(const U in b)b[U]!==null&&b[U]!==void 0&&(e+=`${U}: ${b[U]}
`)})}function ot(b){const L=String(b).split(" · ").map(U=>U.trim()).filter(U=>U!=="");return L.length<=1?qt(String(b)):L.map((U,H)=>`<span class="loc-seg"${H>=2?' style="opacity:.75"':""}>${qt(U)}</span>`).join('<span class="loc-sep">&middot;</span>')}function Bt(b="",L=-1,U="",H=[]){if(b){console.log(b);const E=document.getElementById("location");E&&(E.innerHTML=ot(b))}if(isNaN(L)){modelProgress.classList.remove("is-busy");const E=document.getElementById("memstatusItem");E&&(E.hidden=!1),memstatus.style.color="#ef4444",memstatus.textContent="Memory Issue"}else L>=0&&(modelProgress.value=L*modelProgress.max,modelProgress.classList.toggle("is-busy",L>0&&L<1));U&&(Hn?(Yn.push(String(U)),console.warn("[backend]",U)):Et("Message",qt(String(U)).replace(/\n/g,"<br>"))),H&&Object.keys(H).length>0&&kt(H)}function rt(b){y=b.vox;const L=b.string.split("   ").map(ie=>ie.trim()).filter(ie=>ie!=="");let U="";const H=q(),E=te.volumes[0];if(H&&E&&y){L.length>1&&L.pop();const ie=Vn(E,y);if(ie!==null){const Pe=H.maps[0][ie]||0,Fe=H.maps[1][ie]||0,Re=H.maps[2][ie]||0;Pe+Fe+Re>=.005&&(U=`<span class="loc-seg loc-tissues"><span class="loc-k">GM</span> <span class="loc-v">${Pe.toFixed(2)}</span> <span class="loc-k">WM</span> <span class="loc-v">${Fe.toFixed(2)}</span> <span class="loc-k">CSF</span> <span class="loc-v">${Re.toFixed(2)}</span></span>`)}}const me=L.map(ie=>`<span class="loc-seg">${qt(ie)}</span>`);U&&me.push(U),document.getElementById("location").innerHTML=me.join('<span class="loc-sep">&middot;</span>')}const Tt=new URLSearchParams(window.location.search).get("viewer")==="webgpu"?"webgpu":"webgl2",te=new Ko({backend:Tt,matcaps:{Shiny:Zo}});yield te.attachTo("gl1"),console.info("NiiVue viewer backend:",te.backend),te.backgroundColor=[0,0,0,1],te.is3DCrosshairVisible=!0,te.clipPlaneColor=[.7,0,.7,.5],te.gamma=1,te.volumeTransforms.includes(Rs.name)||te.registerVolumeTransform(Rs),te.isLegendVisible=!1,te.addEventListener("locationChange",b=>rt(b.detail)),te.canvas.addEventListener("click",se),window.addEventListener("keydown",b=>{b.key==="Escape"&&(document.querySelector("dialog[open]")||(g!==null?(g=null,ye()):c!==null&&(c=null,ee())))});const Ft=te.drawScene.bind(te);te.drawScene=function(b){const L=Ft(b);try{R(),fe()}catch(U){console.warn("isolation HUD draw failed",U)}return L},window.addEventListener("resize",fe),te.primaryDragMode=Us.crosshair,te.secondaryDragMode=Us.slicer3D,te.showRender=Qo.ALWAYS,te.isYoked3DTo2DZoom=!1,te.crosshairGap=11;{const b=document.getElementById("dragSegmented");b&&b.querySelectorAll("button").forEach(L=>L.classList.toggle("active",parseInt(L.dataset.drag,10)===te.secondaryDragMode))}te.volumeIsNearestInterpolation=!0,yield te.loadVolumes([{url:"./t1_crop.nii.gz"}]),modelSelect.innerHTML="";const ht=document.createElement("option");ht.text="Run Segmentation Model",ht.value="-1",ht.disabled=!0,ht.selected=!0,ht.hidden=!0,modelSelect.appendChild(ht);for(let b=0;b<wn.length;b++){console.log(`Adding model option: ${wn[b].modelName}`);const L=document.createElement("option");L.text=wn[b].modelName,L.value=b,wn[b].type==="Divider"&&(L.disabled=!0),modelSelect.appendChild(L)}te.addEventListener("volumeLoaded",$t),$t(),mi(te),li(te),modelSelect.value="-1",i(),k(-1),yield so((De=te.view)==null?void 0:De.gl);const Ee=new URLSearchParams(window.location.search).get("model");Ee!==null&&Ee!==""&&Number(Ee)>=0&&Number(Ee)<wn.length?(modelSelect.value=String(Number(Ee)),i(),G()):dn&&!ws&&en&&(window.requestIdleCallback?L=>window.requestIdleCallback(L,{timeout:600}):L=>setTimeout(L,200))(()=>Ga(en))})}function qt(e){return String(e).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function xi(e){const n=(Yn.length?Yn:[e&&e.message?e.message:String(e||"unknown error")]).map(s=>`<li>${qt(s)}</li>`).join("");Et("Segmentation failed",`<p>No available backend could run this model on this device.</p>
     <ul style="margin:0 0 4px 1.1em;padding:0;font-size:0.92em;line-height:1.45">${n}</ul>
     <p style="font-size:0.88em;color:#9aa4af">Full details are in the browser console and under Diagnostics.</p>`)}function Et(e,t,n={}){const s=document.getElementById("appDialog"),o=document.getElementById("dialogTitle"),a=document.getElementById("dialogMessage"),r=document.getElementById("dialogCloseBtn");if(!s)return;o.textContent=e,a.innerHTML=t,r.style.display=n.hideClose?"none":"",r.onclick=()=>s.close(),s.classList.toggle("dialog-save",!!n.saveMode),s.classList.toggle("dialog-stats",!!n.statsMode);const i=document.getElementById("dialogXBtn");i&&(i.onclick=()=>s.close()),s.showModal()}const ro="brainchop:gh-stars:v1",yi=360*60*1e3;function $i(){return Ce(this,null,function*(){var n,s;const e=document.getElementById("star-count");if(!e)return;let t=null;try{const o=(n=window.localStorage)==null?void 0:n.getItem(ro);if(o){const a=JSON.parse(o);a&&typeof a.count=="number"&&Number.isFinite(a.count)&&(t=a,e.textContent=String(a.count))}}catch(o){}if(!(t&&typeof t.ts=="number"&&Date.now()-t.ts<yi))try{const o=yield fetch("https://api.github.com/repos/neuroneural/brainchop");if(!o.ok)return;const a=yield o.json();if(typeof(a==null?void 0:a.stargazers_count)=="number"&&Number.isFinite(a.stargazers_count)){e.textContent=String(a.stargazers_count);try{(s=window.localStorage)==null||s.setItem(ro,JSON.stringify({count:a.stargazers_count,ts:Date.now()}))}catch(r){}}}catch(o){console.error("Error fetching star count:",o)}})}(function(){return Ce(this,null,function*(){if(yield vi(),yield $i(),"serviceWorker"in navigator){const e=()=>{navigator.serviceWorker.register("./sw.js",{scope:"./"}).catch(t=>{console.warn("[PWA] Service Worker registration failed:",t)})};document.readyState==="complete"?e():window.addEventListener("load",e,{once:!0})}})})();
