var Fr=Object.defineProperty,Lr=Object.defineProperties;var Ur=Object.getOwnPropertyDescriptors;var Yn=Object.getOwnPropertySymbols;var ao=Object.prototype.hasOwnProperty,io=Object.prototype.propertyIsEnumerable;var jt=Math.pow,ro=(e,t,n)=>t in e?Fr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,lt=(e,t)=>{for(var n in t||(t={}))ao.call(t,n)&&ro(e,n,t[n]);if(Yn)for(var n of Yn(t))io.call(t,n)&&ro(e,n,t[n]);return e},kt=(e,t)=>Lr(e,Ur(t));var lo=(e,t)=>{var n={};for(var s in e)ao.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&Yn)for(var s of Yn(e))t.indexOf(s)<0&&io.call(e,s)&&(n[s]=e[s]);return n};var ke=(e,t,n)=>new Promise((s,o)=>{var a=u=>{try{i(n.next(u))}catch(l){o(l)}},r=u=>{try{i(n.throw(u))}catch(l){o(l)}},i=u=>u.done?s(u.value):Promise.resolve(u.value).then(a,r);i((n=n.apply(e,t)).next())});import{z as Dn,$ as Wr,t as Rr,L as uo,Y as qr,_ as No,M as co,a as Ir}from"./vendor-niivue-Cvdr5q4M.js";import{l as Gr,n as Nr,p as Or}from"./vendor-math-oqRZD8Fx.js";import"./vendor-FBY2Vxgc.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();const Tr="modulepreload",Er=function(e,t){return new URL(e,t).href},fo={},bn=function(t,n,s){let o=Promise.resolve();if(n&&n.length>0){let l=function(c){return Promise.all(c.map(m=>Promise.resolve(m).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};const r=document.getElementsByTagName("link"),i=document.querySelector("meta[property=csp-nonce]"),u=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));o=l(n.map(c=>{if(c=Er(c,s),c in fo)return;fo[c]=!0;const m=c.endsWith(".css"),d=m?'[rel="stylesheet"]':"";if(s)for(let p=r.length-1;p>=0;p--){const g=r[p];if(g.href===c&&(!m||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${d}`))return;const f=document.createElement("link");if(f.rel=m?"stylesheet":Tr,m||(f.as="script"),f.crossOrigin="",f.href=c,u&&f.setAttribute("nonce",u),document.head.appendChild(f),m)return new Promise((p,g)=>{f.addEventListener("load",p),f.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function a(r){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=r,window.dispatchEvent(i),!i.defaultPrevented)throw r}return o.then(r=>{for(const i of r||[])i.status==="rejected"&&a(i.reason);return t().catch(a)})};function Dr(e){return new Worker(""+new URL("conform-worker-B0jILkNd.js",import.meta.url).href,{name:e==null?void 0:e.name})}const dt=256,kn=dt*dt*dt,is=.999,Vr=.98;function Hr(e){var i,u,l;if(!e||!e.dims||!(e.img instanceof Uint8Array)||e.dims[1]!==dt||e.dims[2]!==dt||e.dims[3]!==dt||e.img.length!==kn)return!1;const t=(i=e.hdr)==null?void 0:i.pixDims;if(!(!t||Math.abs(Math.abs(t[1])-1)<.001&&Math.abs(Math.abs(t[2])-1)<.001&&Math.abs(Math.abs(t[3])-1)<.001))return!1;const s=(u=e.hdr)==null?void 0:u.scl_slope,o=(l=e.hdr)==null?void 0:l.scl_inter;if(!((s===void 0||s===0||Math.abs(s-1)<1e-6)&&(o===void 0||Math.abs(o)<1e-6)))return!1;const r=e.permRAS;return!(!r||r[0]!==-1||r[1]!==3||r[2]!==-2)}function Xr(){let e=null;return{set(t,n){e=t&&n&&n!==t.img?{volume:t,img:n}:null},get(t){return t?e&&e.volume===t?e.img:t.img:null},sync(t){e&&e.volume!==t&&(e=null)},clear(){e=null},hasDistinctBuffer(t){return!!(e&&(!t||e.volume===t))}}}function jr(e,t){if(!(e instanceof ArrayBuffer))return e;switch(t){case 2:return new Uint8Array(e);case 4:return new Int16Array(e);case 8:return new Int32Array(e);case 16:return new Float32Array(e);case 64:return new Float64Array(e);case 256:return new Int8Array(e);case 512:return new Uint16Array(e);case 768:return new Uint32Array(e);case 1024:return new BigInt64Array(e);case 1280:return new BigUint64Array(e);default:return new Float32Array(e)}}function Yr(e){return e[0]*(e[5]*e[10]-e[6]*e[9])-e[1]*(e[4]*e[10]-e[6]*e[8])+e[2]*(e[4]*e[9]-e[5]*e[8])}function Kr(e){if(!e||e.length<16)return!1;for(let t=0;t<16;t++)if(!Number.isFinite(e[t]))return!1;return Math.abs(Yr(e))>=1e-6}function Zr(e){const t=e[0],n=e[1],s=e[2],o=e[3],a=e[4],r=e[5],i=e[6],u=e[7],l=e[8],c=e[9],m=e[10],d=e[11],f=r*m-i*c,p=-(a*m-i*l),g=a*c-r*l,w=t*f+n*p+s*g;if(!Number.isFinite(w)||Math.abs(w)<1e-12)throw new Error("Cannot conform volume: singular affine transform.");const k=1/w,_=f*k,b=-(n*m-s*c)*k,$=(n*i-s*r)*k,M=p*k,h=(t*m-s*l)*k,x=-(t*i-s*a)*k,P=g*k,y=-(t*c-n*l)*k,W=(t*r-n*a)*k,z=-(_*o+b*u+$*d),C=-(M*o+h*u+x*d),L=-(P*o+y*u+W*d);return[_,b,$,z,M,h,x,C,P,y,W,L,0,0,0,1]}function Qr(e,t){const n=new Array(16);for(let s=0;s<3;s++){const o=s*4,a=e[o],r=e[o+1],i=e[o+2],u=e[o+3];n[o]=a*t[0]+r*t[4]+i*t[8],n[o+1]=a*t[1]+r*t[5]+i*t[9],n[o+2]=a*t[2]+r*t[6]+i*t[10],n[o+3]=a*t[3]+r*t[7]+i*t[11]+u}return n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function Jr(e,t,n,s,o=!1){const a=e*.5,r=t*.5,i=n*.5,u=s[0]*a+s[1]*r+s[2]*i+s[3],l=s[4]*a+s[5]*r+s[6]*i+s[7],c=s[8]*a+s[9]*r+s[10]*i+s[11],m=dt*.5;return o?[1,0,0,u-m,0,1,0,l-m,0,0,1,c-m,0,0,0,1]:[-1,0,0,u+m,0,0,1,l-m,0,-1,0,c+m,0,0,0,1]}function yt(e,t,n){const s=n*(e-t);return s<=0?0:s>=255?255:Math.fround(s)}function ea(e){const t=e.length;if(t===0)return{n:0,rawMin:0,rawMax:0,srcMin:0,nz:0,flooredNegative:!1,binSize:0,hist:null};let n=1/0,s=-1/0,o=0,a=0;for(let c=0;c<t;c++){let m=e[c];Number.isFinite(m)||(m=0,e[c]=0),m<n&&(n=m),m>s&&(s=m),(m>=1e-15||m<=-1e-15)&&o++,m<0&&a++}let r=n,i=!1;r<0&&100*a/t<2&&(r=0,i=!0);const u=Math.fround((s-r)/1e3);if(!(u>0))return{n:t,rawMin:n,rawMax:s,srcMin:r,nz:o,flooredNegative:i,binSize:0,hist:null};const l=new Uint32Array(1e3);for(let c=0;c<t;c++){const m=Math.fround((e[c]-r)/u),d=m<=0?0:m>=999?999:Math.trunc(m);l[d]++}return{n:t,rawMin:n,rawMax:s,srcMin:r,nz:o,flooredNegative:i,binSize:u,hist:l}}function po(e,t=is){if(!e.hist||!(e.binSize>0))return{srcMin:e.srcMin,srcMax:e.rawMax,scale:1,flooredNegative:e.flooredNegative,degenerate:!0};const n=Math.max(0,Math.min(1,1-t)),s=e.n-Math.floor(n*e.nz);let o=0,a=0;for(;a<999&&(o+=e.hist[a],!(o+e.hist[a+1]>=s));a++);const r=Math.fround(a*e.binSize+e.srcMin),i=e.srcMin!==r?Math.fround(255/(r-e.srcMin)):1;return{srcMin:e.srcMin,srcMax:r,scale:i,flooredNegative:e.flooredNegative,degenerate:!1}}function ta(e,t){const n=e.length;if(t.degenerate){for(let a=0;a<n;a++){const r=e[a];e[a]=r<=0?0:r>=255?255:r}return}const{srcMin:s,scale:o}=t;for(let a=0;a<n;a++){const r=o*(e[a]-s);e[a]=r<=0?0:r>=255?255:r}}function na({img:e,datatypeCode:t,dims:n,affine:s,sclSlope:o=1,sclInter:a=0,toRAS:r=!1,isLinear:i=!0,asFloat32:u=!1,fHigh:l=is,inferenceFHigh:c=null}){const m=n[1]|0,d=n[2]|0,f=n[3]|0;if(m<1||d<1||f<1)throw new Error(`Invalid input volume dimensions: [${m}, ${d}, ${f}]`);const p=Array.isArray(s[0])?s.flat():Array.from(s);if(!Kr(p))throw new Error("Cannot conform volume: invalid or singular affine matrix.");const g=jr(e,t),w=m*d*f;if(!g||g.length<w)throw new Error(`Input buffer length (${g?g.length:0}) is smaller than ${m}x${d}x${f}`);const k=Number.isFinite(o)&&o!==0?o:1,_=Number.isFinite(a)?a:0,b=new Float32Array(w),$=g instanceof BigInt64Array||g instanceof BigUint64Array;let M=0;if($)for(let S=0;S<w;S++){const U=Number(g[S])*k+_;Number.isFinite(U)?(b[S]=U,M++):b[S]=0}else if(k===1&&_===0)for(let S=0;S<w;S++){const U=g[S];Number.isFinite(U)?(b[S]=U,M++):b[S]=0}else for(let S=0;S<w;S++){const U=g[S]*k+_;Number.isFinite(U)?(b[S]=U,M++):b[S]=0}if(M===0)throw new Error("Input volume contains no finite voxel values.");const h=ea(b),x=po(h,l),P=c!=null&&!u?po(h,c):null,y=!!(P&&!x.degenerate&&P.scale!==x.scale),W=Jr(m,d,f,p,r),z=Zr(p),C=Qr(z,W);let L=m===dt&&d===dt&&f===dt;for(let S=0;S<3&&L;S++){const U=S*4;let R=Math.abs(C[U+3]);for(let E=0;E<3;E++)R+=Math.abs(C[U+E]-(S===E?1:0))*(dt-1);L=R<.001}const G=u?new Float32Array(kn):new Uint8Array(kn);let V=null;if(y){V=new Uint8Array(kn);const S=x.srcMin,U=x.scale,R=P.scale;if(L)for(let E=0;E<kn;E++){const T=b[E],F=yt(T,S,U);G[E]=F<=0?0:F>=255?255:Math.round(F);const H=yt(T,S,R);V[E]=H<=0?0:H>=255?255:Math.round(H)}else{const E=yt(h.rawMin,S,U);E!==0&&G.fill(Math.min(255,Math.max(0,Math.round(E))));const T=yt(h.rawMin,S,R);T!==0&&V.fill(Math.min(255,Math.max(0,Math.round(T))));const F=C[0],H=C[1],te=C[2],Y=C[3],j=C[4],le=C[5],he=C[6],me=C[7],ce=C[8],Z=C[9],ae=C[10],A=C[11],Q=m*d,N=m-1,re=d-1,ue=f-1;let oe=0;if(i)for(let D=0;D<dt;D++){const J=D*te+Y,K=D*he+me,ve=D*ae+A;for(let ge=0;ge<dt;ge++){const xe=ge*H+J,Pe=ge*le+K,Oe=ge*Z+ve;for(let Ae=0;Ae<dt;Ae++,oe++){const Ee=Ae*F+xe,Ie=Ae*j+Pe,Ue=Ae*ce+Oe,ye=Math.floor(Ee),Xe=Math.floor(Ie),Ke=Math.floor(Ue);if(ye<0||Xe<0||Ke<0||ye>=N||Xe>=re||Ke>=ue)continue;const Qe=ye+Xe*m+Ke*Q,nt=b[Qe],Ft=b[Qe+1],vt=b[Qe+m],_t=b[Qe+m+1],Lt=b[Qe+Q],Ut=b[Qe+Q+1],Wt=b[Qe+m+Q],bt=b[Qe+m+Q+1];if(nt<=S&&Ft<=S&&vt<=S&&_t<=S&&Lt<=S&&Ut<=S&&Wt<=S&&bt<=S){G[oe]=0,V[oe]=0;continue}const mt=Ee-ye,rt=Ie-Xe,At=Ue-Ke,gt=1-mt,Rt=1-rt,Jt=1-At,Gt=yt(nt,S,U)*gt+yt(Ft,S,U)*mt,nn=yt(vt,S,U)*gt+yt(_t,S,U)*mt,Mt=yt(Lt,S,U)*gt+yt(Ut,S,U)*mt,qt=yt(Wt,S,U)*gt+yt(bt,S,U)*mt,at=Math.fround((Gt*Rt+nn*rt)*Jt+(Mt*Rt+qt*rt)*At);G[oe]=at<=0?0:at>=255?255:Math.floor(at+.5);const $t=yt(nt,S,R)*gt+yt(Ft,S,R)*mt,it=yt(vt,S,R)*gt+yt(_t,S,R)*mt,Ht=yt(Lt,S,R)*gt+yt(Ut,S,R)*mt,ne=yt(Wt,S,R)*gt+yt(bt,S,R)*mt,zt=Math.fround(($t*Rt+it*rt)*Jt+(Ht*Rt+ne*rt)*At);V[oe]=zt<=0?0:zt>=255?255:Math.floor(zt+.5)}}}else for(let D=0;D<dt;D++){const J=D*te+Y,K=D*he+me,ve=D*ae+A;for(let ge=0;ge<dt;ge++){const xe=ge*H+J,Pe=ge*le+K,Oe=ge*Z+ve;for(let Ae=0;Ae<dt;Ae++,oe++){const Ee=Math.round(Ae*F+xe),Ie=Math.round(Ae*j+Pe),Ue=Math.round(Ae*ce+Oe);if(Ee<0||Ie<0||Ue<0||Ee>=m||Ie>=d||Ue>=f)continue;const ye=b[Ee+Ie*m+Ue*Q],Xe=yt(ye,S,U);G[oe]=Xe<=0?0:Xe>=255?255:Math.floor(Xe+.5);const Ke=yt(ye,S,R);V[oe]=Ke<=0?0:Ke>=255?255:Math.floor(Ke+.5)}}}}}else if(ta(b,x),L)if(u)for(let S=0;S<kn;S++)G[S]=b[S]*(1/255);else for(let S=0;S<kn;S++){const U=b[S];G[S]=U<=0?0:U>=255?255:Math.round(U)}else{let S=b[0];for(let re=1;re<w;re++)b[re]<S&&(S=b[re]);S!==0&&G.fill(u?S*(1/255):Math.min(255,Math.max(0,Math.round(S))));const U=C[0],R=C[1],E=C[2],T=C[3],F=C[4],H=C[5],te=C[6],Y=C[7],j=C[8],le=C[9],he=C[10],me=C[11],ce=m*d,Z=m-1,ae=d-1,A=f-1,Q=1/255;let N=0;if(i)for(let re=0;re<dt;re++){const ue=re*E+T,oe=re*te+Y,D=re*he+me;for(let J=0;J<dt;J++){const K=J*R+ue,ve=J*H+oe,ge=J*le+D;for(let xe=0;xe<dt;xe++,N++){const Pe=xe*U+K,Oe=xe*F+ve,Ae=xe*j+ge,Ee=Math.floor(Pe),Ie=Math.floor(Oe),Ue=Math.floor(Ae);if(Ee<0||Ie<0||Ue<0||Ee>=Z||Ie>=ae||Ue>=A)continue;const ye=Pe-Ee,Xe=Oe-Ie,Ke=Ae-Ue,Qe=1-ye,nt=1-Xe,Ft=1-Ke,vt=Ee+Ie*m+Ue*ce,_t=b[vt]*Qe+b[vt+1]*ye,Lt=b[vt+m]*Qe+b[vt+m+1]*ye,Ut=b[vt+ce]*Qe+b[vt+ce+1]*ye,Wt=b[vt+m+ce]*Qe+b[vt+m+ce+1]*ye,bt=(_t*nt+Lt*Xe)*Ft+(Ut*nt+Wt*Xe)*Ke;if(u)G[N]=bt<=0?0:bt>=255?1:bt*Q;else{const mt=Math.fround(bt);G[N]=mt<=0?0:mt>=255?255:Math.floor(mt+.5)}}}}else for(let re=0;re<dt;re++){const ue=re*E+T,oe=re*te+Y,D=re*he+me;for(let J=0;J<dt;J++){const K=J*R+ue,ve=J*H+oe,ge=J*le+D;for(let xe=0;xe<dt;xe++,N++){const Pe=Math.round(xe*U+K),Oe=Math.round(xe*F+ve),Ae=Math.round(xe*j+ge);if(Pe<0||Oe<0||Ae<0||Pe>=m||Oe>=d||Ae>=f)continue;const Ee=b[Pe+Oe*m+Ae*ce];u?G[N]=Ee<=0?0:Ee>=255?1:Ee*Q:G[N]=Ee<=0?0:Ee>=255?255:Math.floor(Ee+.5)}}}}const ee={img:G,dims:[3,dt,dt,dt,1,1,1,1],pixDims:[1,1,1,1,1,0,0,0],affine:W,datatypeCode:u?16:2,bitsPerVoxel:u?32:8,sclSlope:1,sclInter:0,calMin:0,calMax:0};return c!=null&&(ee.inferenceImg=V),ee}let qn=null,sa=1;const Nn=new Map;function oa(e){qn&&(qn.terminate(),qn=null);for(const{reject:t}of Nn.values())t(e);Nn.clear()}function ra(){if(qn)return qn;const e=new Dr({});return e.onmessage=t=>{const{id:n,result:s,error:o}=t.data,a=Nn.get(n);a&&(Nn.delete(n),o?a.reject(new Error(o)):a.resolve(s))},e.onerror=t=>{const n=(t==null?void 0:t.message)||"Conform worker crashed";oa(new Error(n))},qn=e,e}function aa(e){return typeof Worker=="undefined"?Promise.resolve(na(e)):new Promise((t,n)=>{const s=sa++;Nn.set(s,{resolve:t,reject:n});try{ra().postMessage({id:s,payload:e})}catch(o){Nn.delete(s),n(o)}})}function ia(e,t){const n=Object.assign(Object.create(Object.getPrototypeOf(e)||Object.prototype),JSON.parse(JSON.stringify(e)));return n.datatypeCode=t.datatypeCode,n.numBitsPerVoxel=t.bitsPerVoxel,n.scl_slope=t.sclSlope,n.scl_inter=t.sclInter,n.cal_min=t.calMin,n.cal_max=t.calMax,n.dims=t.dims,n.pixDims=t.pixDims,n.affine=[[t.affine[0],t.affine[1],t.affine[2],t.affine[3]],[t.affine[4],t.affine[5],t.affine[6],t.affine[7]],[t.affine[8],t.affine[9],t.affine[10],t.affine[11]],[0,0,0,1]],n.sform_code=1,n.qform_code=0,n}const cs={name:"conform",description:"Reslice to 256×256×256 isotropic 1 mm volume with negative-ringing floor and 0–99.9% intensity scaling",options:[{name:"toRAS",type:"checkbox",label:"Output RAS orientation",default:!1},{name:"isLinear",type:"checkbox",label:"Linear interpolation",default:!0},{name:"asFloat32",type:"checkbox",label:"Output as Float32",default:!1}],apply(s,o){return ke(this,arguments,function*(e,t,n={}){var l,c,m,d,f,p;const a=(l=n.inferenceFHigh)!=null?l:null,r={img:t,datatypeCode:e.datatypeCode,dims:[...e.dims],affine:Array.isArray(e.affine[0])?e.affine.flat():[...e.affine],sclSlope:e.scl_slope||1,sclInter:e.scl_inter||0,toRAS:(c=n.toRAS)!=null?c:!1,isLinear:(m=n.isLinear)!=null?m:!0,asFloat32:(d=n.asFloat32)!=null?d:!1,fHigh:(f=n.fHigh)!=null?f:is,inferenceFHigh:a},i=yield aa(r),u={hdr:ia(e,i),img:i.img};return a!=null&&(u.inferenceImg=(p=i.inferenceImg)!=null?p:i.img),u})}},yn=new WeakMap;class la{getLabelMeta(t){return yn.get(t)||null}idx(t,n,s,o){return s*o[0]*o[1]+n*o[0]+t}check_previous_slice(t,n,s,o,a,r,i,u,l,c){let m=0;if(!a)return 0;const d=t[this.idx(s,o,a,r)];if(i>=6){const f=this.idx(s,o,a-1,r);d===t[f]&&(l[m++]=n[f])}if(i>=18){if(s){const f=this.idx(s-1,o,a-1,r);d===t[f]&&(l[m++]=n[f])}if(o){const f=this.idx(s,o-1,a-1,r);d===t[f]&&(l[m++]=n[f])}if(s<r[0]-1){const f=this.idx(s+1,o,a-1,r);d===t[f]&&(l[m++]=n[f])}if(o<r[1]-1){const f=this.idx(s,o+1,a-1,r);d===t[f]&&(l[m++]=n[f])}}if(i===26){if(s&&o){const f=this.idx(s-1,o-1,a-1,r);d===t[f]&&(l[m++]=n[f])}if(s<r[0]-1&&o){const f=this.idx(s+1,o-1,a-1,r);d===t[f]&&(l[m++]=n[f])}if(s&&o<r[1]-1){const f=this.idx(s-1,o+1,a-1,r);d===t[f]&&(l[m++]=n[f])}if(s<r[0]-1&&o<r[1]-1){const f=this.idx(s+1,o+1,a-1,r);d===t[f]&&(l[m++]=n[f])}}return m?(this.fill_tratab(u,l,m,c),l[0]):0}do_initial_labelling(t,n,s,o=null){const a=n[0]|0,r=n[1]|0,i=n[2]|0,u=a*r,l=u*i;let c=1;const m=8192;let d=m,f=new Uint32Array(d),p;if(s===6&&o&&o.il&&o.il.length===l){if(p=o.il,o.dirty)p.fill(0);else if(o.runs&&o.runLen>0){const _=o.runs,b=o.runLen;for(let $=0;$<b;$+=2)p.fill(0,_[$],_[$+1])}}else p=new Uint32Array(l),s===6&&o&&(o.il=p,o.runs=null,o.runLen=0,o.dirty=!1);if(s===6){o&&(o.dirty=!0);const _=(t instanceof Uint8Array||t instanceof Uint8ClampedArray)&&(t.byteOffset&3)===0&&(a&3)===0&&t.length>=l?new Uint32Array(t.buffer,t.byteOffset,l>>2):null;let b=o&&o.runs?o.runs:new Uint32Array(8192),$=b.length,M=0,h=0,x=0,P=0,y=-1,W=-1,z=i,C=-1;for(let L=0;L<i;L++){const G=L*u;for(let V=0;V<r;V++){const ee=G+V*a;let S=0;if(_){const R=ee+a>>2;let E=ee>>2;for(;E<R&&_[E]===0;)E++;if(E===R)continue;S=(E<<2)-ee}let U=!1;for(;S<a;S++){const R=ee+S;if(_&&!U&&(S&3)===0&&_[R>>2]===0){S+=3;continue}const E=t[R];if(E===0){U&&(b[M++]=R,U=!1);continue}if(!U){if(M+2>$){$<<=1;const F=new Uint32Array($);F.set(b),b=F}b[M++]=R,U=!0}y<0&&(y=R,z=L),W=R,C=L;let T=0;if(L>0&&t[R-u]===E&&(h=p[R-u],T=1),S>0&&t[R-1]===E){const F=p[R-1];T===0?h=F:T===1?x=F:P=F,T++}if(V>0&&t[R-a]===E){const F=p[R-a];T===0?h=F:T===1?x=F:P=F,T++}if(T===0){if(p[R]=c,c>=d){d+=m;const F=new Uint32Array(d);F.set(f),f=F}f[c-1]=c,c++}else if(p[R]=h,T===2&&x!==h){let F=h;for(;f[F-1]!==F;)F=f[F-1];let H=x;for(;f[H-1]!==H;)H=f[H-1];const te=F<H?F:H;f[F-1]=te,f[H-1]=te}else if(T===3&&(x!==h||P!==h)){let F=h;for(;f[F-1]!==F;)F=f[F-1];let H=x;for(;f[H-1]!==H;)H=f[H-1];let te=P;for(;f[te-1]!==te;)te=f[te-1];let Y=F<H?F:H;te<Y&&(Y=te),f[F-1]=Y,f[H-1]=Y,f[te-1]=Y}}U&&(b[M++]=ee+a)}}for(let L=0;L<c-1;L++){let G=L;for(;f[G]!==G+1;)G=f[G]-1;f[L]=G+1}return o&&(o.runs=b,o.runLen=M,o.dirty=!1),this._lastInitialRange={conn:6,fgStart:y,fgEnd:W,minSl:z,maxSl:C,runs:b,runLen:M},[c-1,f,p]}const g=new Uint32Array(32),w=new Uint32Array(32),k=new Uint32Array(27);for(let _=0;_<i;_++)for(let b=0;b<r;b++)for(let $=0;$<a;$++){let M=0;const h=t[this.idx($,b,_,n)];if(h!==0){if(k[0]=this.check_previous_slice(t,p,$,b,_,n,s,f,g,w),k[0]&&(M+=1),s>=6){if($){const x=this.idx($-1,b,_,n);h===t[x]&&(k[M++]=p[x])}if(b){const x=this.idx($,b-1,_,n);h===t[x]&&(k[M++]=p[x])}}if(s>=18){if(b&&$){const x=this.idx($-1,b-1,_,n);h===t[x]&&(k[M++]=p[x])}if(b&&$<a-1){const x=this.idx($+1,b-1,_,n);h===t[x]&&(k[M++]=p[x])}}if(M)p[this.idx($,b,_,n)]=k[0],this.fill_tratab(f,k,M,w);else{if(p[this.idx($,b,_,n)]=c,c>=d){d+=m;const x=new Uint32Array(d);x.set(f),f=x}f[c-1]=c,c++}}}for(let _=0;_<c-1;_++){let b=_;for(;f[b]!==b+1;)b=f[b]-1;f[_]=b+1}return this._lastInitialRange=null,[c-1,f,p]}fill_tratab(t,n,s,o){let r=2147483647;for(let i=0;i<s;i++){let u=n[i];for(;t[u-1]!==u;)u=t[u-1];o[i]=u,r=Math.min(r,u)}for(let i=0;i<s;i++)t[o[i]-1]=r}translate_labels(t,n,s,o,a=null,r=null){const i=n[0]*n[1]*n[2];if(r&&(o===0||r.fgStart<0))return a&&(this._lastMeta={conn:r.conn,cl:0,fgStart:0,fgEnd:-1,minSl:0,maxSl:-1,ls2bw:new Uint32Array(1),sumls:new Uint32Array(1),distinctFgClasses:0,bw:a}),[0,t];let u=0;for(let g=0;g<o;g++)s[g]>u&&(u=s[g]);const l=new Uint32Array(u+1),c=a&&r?new Uint32Array(o+1):null,m=a&&r?new Uint32Array(o+1):null,d=r?r.fgStart:0,f=r?r.fgEnd:i-1;let p=0;if(r&&r.runs){const g=r.runs,w=r.runLen;for(let k=0;k<w;k+=2){const _=g[k],b=g[k+1];for(let $=_;$<b;$++){const M=s[t[$]-1];let h=l[M];h||(p+=1,h=p,l[M]=h,c&&(c[h]=a[$])),t[$]=h,m&&m[h]++}}}else for(let g=d;g<=f;g++){const w=t[g];if(w){const k=s[w-1];let _=l[k];_||(p+=1,_=p,l[k]=_,c&&(c[_]=a[g])),t[g]=_,m&&m[_]++}}if(a&&r){const g=c.slice(0,p+1),w=m.slice(0,p+1);let k=0;if(p>0){const _=g[1];k=1;for(let b=2;b<=p;b++)if(g[b]!==_){k=2;break}}this._lastMeta={conn:r.conn,cl:p,fgStart:r.fgStart,fgEnd:r.fgEnd,minSl:r.minSl,maxSl:r.maxSl,runs:r.runs,runLen:r.runLen,ls2bw:g,sumls:w,distinctFgClasses:k,bw:a}}return[p,t]}neighbor_winners(t,n,s,o,a=null,r=null){const i=n[0],u=n[1],l=n[2],c=i*u,m=!!(r&&a);let d=!1;for(let $=1;$<=o;$++)if(!s[$]){d=!0;break}if(!d)return m&&console.log("[relabel] 0/0 suppressed components resolved within their own class family (0 fell back to the unrestricted neighbour vote)"),new Uint32Array(o+1);const f=m?new Int32Array(o+1).fill(-1):null,p=new Map,g=($,M)=>{let h=p.get($);h||(h=new Map,p.set($,h)),h.set(M,(h.get(M)||0)+1)},w=yn.get(t),k=w&&w.cl===o&&t.length===c*l;if(k&&w.runs){const $=w.runs,M=w.runLen;for(let h=0;h<M;h+=2){const x=$[h],P=$[h+1],y=x/c|0,W=x-y*c,z=W/i|0;let C=W-z*i;for(let L=x;L<P;L++,C++){const G=t[L];if(s[G])continue;m&&f[G]<0&&(f[G]=r(a[L]));let V;C>0&&(V=s[t[L-1]])&&g(G,V),C<i-1&&(V=s[t[L+1]])&&g(G,V),z>0&&(V=s[t[L-i]])&&g(G,V),z<u-1&&(V=s[t[L+i]])&&g(G,V),y>0&&(V=s[t[L-c]])&&g(G,V),y<l-1&&(V=s[t[L+c]])&&g(G,V)}}}else{const $=k?w.minSl:0,M=k?w.maxSl:l-1;let h=$*c;for(let x=$;x<=M;x++)for(let P=0;P<u;P++)for(let y=0;y<i;y++,h++){const W=t[h];if(W===0||s[W])continue;m&&f[W]<0&&(f[W]=r(a[h]));let z;y>0&&(z=s[t[h-1]])&&g(W,z),y<i-1&&(z=s[t[h+1]])&&g(W,z),P>0&&(z=s[t[h-i]])&&g(W,z),P<u-1&&(z=s[t[h+i]])&&g(W,z),x>0&&(z=s[t[h-c]])&&g(W,z),x<l-1&&(z=s[t[h+c]])&&g(W,z)}}const _=new Uint32Array(o+1).fill(0);let b=0;for(const[$,M]of p){const h=m?f[$]:0;let x=0,P=0;if(h>0){for(const[y,W]of M)r(y)===h&&(W>P||W===P&&(x===0||y<x))&&(P=W,x=y);x&&b++}if(!x)for(const[y,W]of M)(W>P||W===P&&(x===0||y<x))&&(P=W,x=y);_[$]=x}return m&&console.log(`[relabel] ${b}/${p.size} suppressed components resolved within their own class family (${p.size-b} fell back to the unrestricted neighbour vote)`),_}finalize_volume(t,n,s,o,a,r=null,i=null,u=!1){const l=t.length,c=a?this.neighbor_winners(t,n,s,o,r,i):null,m=c?new Uint32Array(o+1):s;let d=0;for(let _=1;_<=o;_++){let b=s[_];c&&(b||(b=c[_]),m[_]=b),b>d&&(d=b)}const f=yn.get(t),p=f&&f.cl===o&&f.ls2bw.length===o+1&&f.fgEnd<l;let g=0;if(p&&f.runs){const _=f.runs,b=f.runLen;for(let h=1;h<=o;h++)f.sumls[h]>0&&m[h]>g&&(g=m[h]);if(f.bw===r&&r instanceof Uint8Array&&d<=255){const h=new Uint8Array(o+1);let x=!1;for(let y=1;y<=o;y++)f.sumls[y]>0&&m[y]!==f.ls2bw[y]&&(h[y]=1,x=!0);const P=u?r:r.slice();if(x)for(let y=0;y<b;y+=2){const W=_[y],z=_[y+1];for(let C=W;C<z;C++){const L=t[C];h[L]&&(P[C]=m[L])}}return[g,P]}const M=r instanceof Uint8Array&&d<=255?new Uint8Array(l):new Uint32Array(l);for(let h=0;h<b;h+=2){const x=_[h],P=_[h+1];for(let y=x;y<P;y++){const W=m[t[y]];W&&(M[y]=W)}}return[g,M]}const k=r instanceof Uint8Array&&d<=255?new Uint8Array(l):new Uint32Array(l);if(p){if(f.fgStart>=0&&f.fgEnd>=f.fgStart)for(let _=f.fgStart;_<=f.fgEnd;_++){const b=t[_];if(b!==0){const $=m[b];$&&(k[_]=$,$>g&&(g=$))}}}else for(let _=0;_<l;_++){const b=t[_];if(b!==0){const $=m[b];$&&(k[_]=$,$>g&&(g=$))}}return[g,k]}diagnose_components(t,n,s,o,a={}){var y,W,z;const r=(y=a.topN)!=null?y:50,i=(W=a.minSize)!=null?W:1,u=(z=a.label)!=null?z:"diag",l=o[0],c=o[1],m=o[2],d=l*c,f=new Uint32Array(n+1),p=new Uint32Array(n+1);for(let C=0;C<t.length;C++){const L=s[C];L&&(f[L]=t[C],p[L]++)}const g=new Map,w=new Uint32Array(n+1),k=new Uint32Array(n+1),_=(C,L)=>{let G=g.get(C);G||(G=new Map,g.set(C,G)),G.set(L,(G.get(L)||0)+1)};for(let C=0;C<m;C++)for(let L=0;L<c;L++)for(let G=0;G<l;G++){const V=C*d+L*l+G,ee=s[V];if(!ee)continue;const S=f[ee],U=R=>{const E=s[R];if(E===ee)return;k[ee]++;const T=E?f[E]:0;T===0?w[ee]++:T!==S&&_(ee,T)};G>0&&U(V-1),G<l-1&&U(V+1),L>0&&U(V-l),L<c-1&&U(V+l),C>0&&U(V-d),C<m-1&&U(V+d)}const b=new Map,$=new Map;for(let C=1;C<=n;C++){const L=f[C];b.set(L,(b.get(L)||0)+1),(!$.has(L)||p[C]>$.get(L))&&$.set(L,p[C])}const M=[];for(let C=1;C<=n;C++){if(p[C]<i)continue;const L=f[C],G=g.get(C);let V=0,ee=0,S=0;if(G)for(const[R,E]of G)S+=E,E>ee&&(ee=E,V=R);const U=k[C]||1;M.push({comp:C,class:L,size:p[C],largestOfClass:p[C]===$.get(L)?"Y":"n",compsInClass:b.get(L),domNeighbor:V,domFracForeign:S?+(ee/S).toFixed(2):0,domFracBoundary:+(ee/U).toFixed(2),bgFrac:+(w[C]/U).toFixed(2)})}M.sort((C,L)=>L.domFracForeign-C.domFracForeign||L.size-C.size);const h=(C,L)=>{const G=L.map(ee=>Math.max(ee.h.length,...C.map(S=>String(S[ee.k]).length))),V=ee=>ee.map((S,U)=>String(S).padStart(G[U])).join("  ");return[V(L.map(ee=>ee.h)),...C.map(ee=>V(L.map(S=>ee[S.k])))].join(`
`)},x=[{k:"comp",h:"comp"},{k:"class",h:"class"},{k:"size",h:"size"},{k:"largestOfClass",h:"lrg"},{k:"compsInClass",h:"nComp"},{k:"domNeighbor",h:"domNbr"},{k:"domFracForeign",h:"encF"},{k:"domFracBoundary",h:"encB"},{k:"bgFrac",h:"bgF"}];console.log(`[${u}] total components=${n}, distinct classes=${b.size}
[${u}] island candidates (encF≈1 + small size + lrg=n ⇒ swallowed island):
`+h(M.slice(0,r),x));const P=[...b.entries()].map(([C,L])=>({class:C,components:L,maxCompSize:$.get(C)})).sort((C,L)=>L.components-C.components);return console.log(`[${u}] per-class component counts (components=1 ⇒ fully connected):
`+h(P.slice(0,30),[{k:"class",h:"class"},{k:"components",h:"comps"},{k:"maxCompSize",h:"maxSize"}])),M}_collectComponentStats(t,n,s){const o=yn.get(s);if(o&&o.cl===n&&o.bw===t&&s.length===t.length)return[o.ls2bw,o.sumls];const a=t.length,r=new Uint32Array(n+1),i=new Uint32Array(n+1);for(let u=0;u<a;u++){const l=s[u];l>0&&(r[l]=t[u],i[l]++)}return[r,i]}_buildKeptMap(t,n,s,o,a){const r=new Uint32Array(s+1);let i=0;for(let l=1;l<=s;l++)t[l]>i&&(i=t[l]);const u=o==="all";if(i<=65535){const l=new Uint32Array(i+1),c=new Uint32Array(i+1);for(let m=1;m<=s;m++){const d=t[m];if(d!==0)if(u||o&&o.has&&o.has(d)){const f=n[m];(!c[d]||(a?f>=l[d]:f>l[d]))&&(l[d]=f,c[d]=m)}else r[m]=d}for(let m=1;m<=i;m++){const d=c[m];d>0&&(r[d]=m)}}else{const l=new Map;for(let c=1;c<=s;c++){const m=t[c];if(m!==0)if(u||o&&o.has&&o.has(m)){const d=n[c],f=l.get(m);(!f||(a?d>=f.sz:d>f.sz))&&l.set(m,{c,sz:d})}else r[c]=m}for(const[c,{c:m}]of l)r[m]=c}return r}largest_original_cluster_labels(t,n,s,o=null,a=!1,r=null,i=!1){const[u,l]=this._collectComponentStats(t,n,s),c=this._buildKeptMap(u,l,n,"all",!0);return this.finalize_volume(s,o,c,n,a,t,r,i)}filter_clusters(t,n,s,o,a=null,r=!1,i=null,u=!1){const[l,c]=this._collectComponentStats(t,n,s),m=this._buildKeptMap(l,c,n,o,!1);return this.finalize_volume(s,a,m,n,r,t,i,u)}filter_clusters_by_ratio(t,n,s,o,a=null,r=!1,i=null){const u=t.length,l=new Uint32Array(n+1).fill(0),c=new Uint32Array(n+1).fill(0);for(let p=0;p<u;p++){const g=s[p];g>0&&(l[g]===0&&(l[g]=t[p]),c[g]++)}const m=new Map;for(let p=1;p<=n;p++){const g=l[p],w=c[p];(!m.has(g)||w>m.get(g))&&m.set(g,w)}const d=new Uint8Array(n+1).fill(0);for(let p=1;p<=n;p++){const g=l[p],w=c[p],k=m.get(g)||0;w>=k*o&&(d[p]=1)}const f=new Uint32Array(n+1).fill(0);for(let p=1;p<=n;p++)d[p]&&(f[p]=l[p]);return this.finalize_volume(s,a,f,n,r,t,i)}_binaryComponentsFromLabels(t,n,s,o,a=!1){const r=o[0]|0,i=o[1]|0,u=o[2]|0,l=r*i,c=yn.get(s),m=c&&c.cl===n&&s.length===l*u&&(!a||c.bw===t);if(m&&c.conn===6&&c.distinctFgClasses<=1){const _=new Uint32Array(n+1);let b=0,$=0;for(let M=1;M<=n;M++){_[M]=M;const h=c.sumls[M];h>0&&h>=$&&($=h,b=M)}return{parent:_,compSize:c.sumls,compClass:a?c.ls2bw:null,bestRoot:b}}const d=m?c.sumls:new Uint32Array(n+1),f=m?a?c.ls2bw:null:a?new Uint32Array(n+1):null,p=new Uint32Array(n+1);for(let _=1;_<=n;_++)p[_]=_;if(m&&c.conn===6&&c.runs&&c.bw===t){const _=(M,h)=>{for(;p[M]!==M;)p[M]=p[p[M]],M=p[M];for(;p[h]!==h;)p[h]=p[p[h]],h=p[h];M!==h&&(M<h?p[h]=M:p[M]=h)},b=c.runs,$=c.runLen;for(let M=0;M<$;M+=2){const h=b[M],x=b[M+1],P=h/l|0,y=h-P*l,W=y/r|0;let z=y-W*r;for(let C=h;C<x;C++,z++){const L=t[C];let G=0;if(P>0){const V=t[C-l];V!==0&&V!==L&&(G=s[C],_(G,s[C-l]))}if(W>0){const V=t[C-r];V!==0&&V!==L&&(G||(G=s[C]),_(G,s[C-r]))}if(z>0){const V=t[C-1];V!==0&&V!==L&&(G||(G=s[C]),_(G,s[C-1]))}}}}else{const _=m?c.minSl:0,b=m?c.maxSl:u-1;let $=_*l;for(let M=_;M<=b;M++)for(let h=0;h<i;h++)for(let x=0;x<r;x++,$++){const P=s[$];if(P===0)continue;m||(d[P]++,f&&f[P]===0&&(f[P]=t[$]));let y=P;for(;p[y]!==y;)p[y]=p[p[y]],y=p[y];if(M>0){const W=s[$-l];if(W!==0&&W!==P){let z=W;for(;p[z]!==z;)p[z]=p[p[z]],z=p[z];y!==z&&(y<z?p[z]=y:(p[y]=z,y=z))}}if(h>0){const W=s[$-r];if(W!==0&&W!==P){let z=W;for(;p[z]!==z;)p[z]=p[p[z]],z=p[z];y!==z&&(y<z?p[z]=y:(p[y]=z,y=z))}}if(x>0){const W=s[$-1];if(W!==0&&W!==P){let z=W;for(;p[z]!==z;)p[z]=p[p[z]],z=p[z];y!==z&&(y<z?p[z]=y:p[y]=z)}}}}const g=new Uint32Array(n+1);for(let _=1;_<=n;_++){let b=_;for(;p[b]!==b;)b=p[b];p[_]=b,g[b]+=d[_]}let w=0,k=0;for(let _=1;_<=n;_++){const b=g[_];b>0&&b>=k&&(k=b,w=_)}return{parent:p,compSize:d,compClass:f,bestRoot:w}}applyLargestBinaryMaskInPlace(t,n,s,o){const a=t.length;if(n===0)return t.fill(0),t;const r=yn.get(s),i=r&&r.cl===n&&s.length===a;if(i&&r.conn===6&&r.distinctFgClasses<=1){let c=0,m=0;for(let d=1;d<=n;d++){const f=r.sumls[d];f>0&&f>=m&&(m=f,c=d)}if(r.runs&&r.bw===t){if(n>1){const d=r.runs,f=r.runLen;for(let p=0;p<f;p+=2){const g=d[p],w=d[p+1];for(let k=g;k<w;k++)s[k]!==c&&(t[k]=0)}}return t}if(r.fgStart>0&&t.fill(0,0,r.fgStart),r.fgEnd>=r.fgStart){for(let d=r.fgStart;d<=r.fgEnd;d++)s[d]!==c&&(t[d]=0);r.fgEnd+1<a&&t.fill(0,r.fgEnd+1)}else t.fill(0);return t}const{parent:u,bestRoot:l}=this._binaryComponentsFromLabels(t,n,s,o,!1);if(i&&r.runs&&r.bw===t){const c=r.runs,m=r.runLen;for(let d=0;d<m;d+=2){const f=c[d],p=c[d+1];for(let g=f;g<p;g++)u[s[g]]!==l&&(t[g]=0)}return t}if(i&&r.fgEnd>=r.fgStart){r.fgStart>0&&t.fill(0,0,r.fgStart);for(let c=r.fgStart;c<=r.fgEnd;c++){const m=s[c];(m===0||u[m]!==l)&&(t[c]=0)}r.fgEnd+1<a&&t.fill(0,r.fgEnd+1)}else for(let c=0;c<a;c++){const m=s[c];(m===0||u[m]!==l)&&(t[c]=0)}return t}filterHierarchicalFromLabels(t,n,s,o,a="all",r=!0,i=!1,u=null,l=!1){if(n===0)return[0,t instanceof Uint8Array?l?t:new Uint8Array(t.length):new Uint32Array(t.length)];const{parent:c,compSize:m,compClass:d,bestRoot:f}=this._binaryComponentsFromLabels(t,n,s,o,!0),p=new Uint32Array(n+1);for(let w=1;w<=n;w++)c[w]===f&&(p[w]=d[w]);const g=this._buildKeptMap(p,m,n,a,r);return this.finalize_volume(s,o,g,n,i,t,u,l)}filter18ClassFromLabels(t,n,s,o,a,r=!1,i=null,u=!1){return this.filterHierarchicalFromLabels(t,n,s,o,a,!1,r,i,u)}bwlabel(t,n,s=26,o=!1,a=!1,r=null){const i=Date.now(),u=n[0]*n[1]*n[2];if(![6,18,26].includes(s))return console.log("bwlabel: conn must be 6, 18 or 26."),[0,new Uint32Array(u)];if(n[0]<2||n[1]<2||n[2]<1)return console.log("bwlabel: img must be 2 or 3-dimensional"),[0,new Uint32Array(u)];let l;if(o){l=new Uint8Array(u);for(let g=0;g<u;g++)t[g]!==0&&(l[g]=1)}else t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Uint16Array||t instanceof Uint32Array||t instanceof Int8Array||t instanceof Int16Array||t instanceof Int32Array?t.length===u?l=t:(l=new Uint32Array(u),l.set(t.subarray(0,u))):(l=new Uint32Array(u),l.set(t));this._lastInitialRange=null,this._lastMeta=null;let[c,m,d]=this.do_initial_labelling(l,n,s,r);m===void 0&&(m=new Uint32Array(0));const[f,p]=this.translate_labels(d,n,m,c,l,this._lastInitialRange);if(this._lastMeta&&yn.set(p,this._lastMeta),console.log(s+" neighbor clustering into "+f+" regions in "+(Date.now()-i)+"ms"),a){const[g,w]=this.largest_original_cluster_labels(l,f,p);return[g,w]}return[f,p]}filter_clusters_by_rank(t,n,s,o,a=0,r=null,i=!1,u=null,l=!1,c=null){const m=t.length,d=new Uint32Array(n+1).fill(0),f=new Uint32Array(n+1).fill(0),p=u!=null&&Array.isArray(r)&&r.length===3,g=p?r[0]:0,w=p?r[1]:0,k=p?new Int32Array(n+1).fill(2147483647):null,_=p?new Int32Array(n+1).fill(-1):null,b=p?new Int32Array(n+1).fill(2147483647):null,$=p?new Int32Array(n+1).fill(-1):null,M=p?new Int32Array(n+1).fill(2147483647):null,h=p?new Int32Array(n+1).fill(-1):null;for(let C=0;C<m;C++){const L=s[C];if(L>0&&(d[L]===0&&(d[L]=t[C]),f[L]++,p)){const G=C%g,V=C/g|0,ee=V%w,S=V/w|0;G<k[L]&&(k[L]=G),G>_[L]&&(_[L]=G),ee<b[L]&&(b[L]=ee),ee>$[L]&&($[L]=ee),S<M[L]&&(M[L]=S),S>h[L]&&(h[L]=S)}}let x=null,P=0;if(p){let C=-1;for(let U=1;U<=n;U++)f[U]>C&&(C=f[U],P=U);const L=Math.max(2,Math.ceil(u)+4),G=g*w,V=new Int16Array(m).fill(-1);let ee=[];for(let U=0;U<m;U++)s[U]===P&&(V[U]=0,ee.push(U));for(let U=1;U<=L&&ee.length;U++){const R=[];for(let E=0;E<ee.length;E++){const T=ee[E],F=T%g,te=(T/g|0)%w;F>0&&V[T-1]===-1&&(V[T-1]=U,R.push(T-1)),F<g-1&&V[T+1]===-1&&(V[T+1]=U,R.push(T+1)),te>0&&V[T-g]===-1&&(V[T-g]=U,R.push(T-g)),te<w-1&&V[T+g]===-1&&(V[T+g]=U,R.push(T+g)),T-G>=0&&V[T-G]===-1&&(V[T-G]=U,R.push(T-G)),T+G<m&&V[T+G]===-1&&(V[T+G]=U,R.push(T+G))}ee=R}const S=L+1;x=new Float64Array(n+1).fill(S);for(let U=0;U<m;U++){const R=s[U];if(R>0&&R!==P){const E=V[U]>=0?V[U]:S;E<x[R]&&(x[R]=E)}}l&&console.log(`[rank-filter] brain comp=${P} size=${C} bbox A[${k[P]},${_[P]}] B[${b[P]},${$[P]}] C[${M[P]},${h[P]}] | maxGap=${u} scan=${L}`)}const y=new Map;for(let C=1;C<=n;C++){const L=d[C],G=f[C];y.has(L)||y.set(L,[]),y.get(L).push({i:C,size:G})}const W=new Uint8Array(n+1).fill(0);for(const[C,L]of y.entries()){L.sort((S,U)=>U.size-S.size);const G=L.length?L[0].size:0,V=a>0?G*a:0,ee=Math.min(L.length,o);for(let S=0;S<ee;S++){const U=L[S];if(U.size<V){l&&S>0&&console.log(`[rank-filter] class ${C} #${S}: size=${U.size} DROP (below ${(a*100).toFixed(0)}% floor)`);break}if(S>0&&p){const R=x[U.i],E=R<=u;if(l&&console.log(`[rank-filter] class ${C} #${S}: size=${U.size} surfDist=${R} -> ${E?"KEEP":"DROP (too far)"}`),!E)continue}W[U.i]=1}}const z=new Uint32Array(n+1).fill(0);for(let C=1;C<=n;C++)W[C]&&(z[C]=d[C]);return this.finalize_volume(s,r,z,n,i,t,c)}}function ua(e){if(!(e!=null&&e.length))throw new Error("Segmentation volume is empty.");let t=0;if((e instanceof Uint8Array||e instanceof Uint8ClampedArray)&&(e.byteOffset&3)===0&&e.length>=4){const n=e.length>>2,s=new Uint32Array(e.buffer,e.byteOffset,n);for(let o=0;o<n;o++){const a=s[o];a!==0&&(a&255&&t++,a&65280&&t++,a&16711680&&t++,a&4278190080&&t++)}for(let o=n<<2;o<e.length;o++)e[o]!==0&&t++}else if(e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Uint16Array||e instanceof Uint32Array)for(let n=0;n<e.length;n++)e[n]!==0&&t++;else for(let n=0;n<e.length;n++){const s=e[n];if(!Number.isFinite(s)||s<0)throw new Error(`Segmentation contains an invalid label at voxel ${n}: ${s}.`);s!==0&&t++}if(t===0)throw new Error("Segmentation volume contains no foreground labels.");if(t>e.length*.95)throw new Error(`Segmentation fills ${(100*t/e.length).toFixed(1)}% of the volume; GPU output is unusable.`)}const ca={il:null,runs:null,runLen:0,dirty:!1};function fa(e,t=.05,n=.95){const s=e.length;if(s===0)return{qmin:0,qmax:0};if(e instanceof Uint8Array||e instanceof Uint8ClampedArray){const u=Math.max(0,Math.min(s-1,Math.floor(s*t))),l=Math.max(0,Math.min(s-1,Math.ceil(s*n)-1)),c=new Uint32Array(256);for(let w=0;w<s;w++)c[e[w]]++;let m=0,d=0,f=0,p=!1,g=!1;for(let w=0;w<256;w++){const k=c[w];if(k!==0&&(m+=k,!p&&m>u&&(d=w,p=!0),!g&&m>l&&(f=w,g=!0),p&&g))break}return{qmin:d,qmax:f}}const o=Math.min(1e5,s),a=Math.max(0,Math.min(o-1,Math.floor(o*t))),r=Math.max(0,Math.min(o-1,Math.ceil(o*n)-1)),i=new Float64Array(o);if(o>=s)i.set(e);else{const u=.6180339887498949;let l=.5;for(let c=0;c<o;c++)l+=u,l>=1&&(l-=1),i[c]=e[Math.floor(l*s)]}return i.sort(),{qmin:i[a],qmax:i[r]}}function pa(e){const t=e.length;if(t===0)return{min:0,max:0};let n=e[0],s=e[0];if(e instanceof Uint8Array||e instanceof Uint8ClampedArray){for(let o=1;o<t;o++){const a=e[o];if(a<n?n=a:a>s&&(s=a),n===0&&s===255)break}return{min:n,max:s}}for(let o=1;o<t;o++){const a=e[o];a<n&&(n=a),a>s&&(s=a)}return{min:n,max:s}}function mo(e,t,n){const s=e.length,o=new Float32Array(s);if(e instanceof Uint8Array||e instanceof Uint8ClampedArray){const a=new Float32Array(256);for(let r=0;r<256;r++)a[r]=(r-t)/n;for(let r=0;r<s;r++)o[r]=a[e[r]];return o}for(let a=0;a<s;a++)o[a]=(e[a]-t)/n;return o}function Oo(e,t,n,s){const o=t[0]|0,a=t[1]|0,r=t[2]|0,i=o*a*r,u=new s(i);if(n[0]===2&&n[1]===1&&n[2]===0&&i===e.length){const w=a*r,k=a*o,_=16;for(let b=0;b<a;b++){const $=b*r,M=b*o;for(let h=0;h<o;h+=_){const x=Math.min(h+_,o);for(let P=0;P<r;P+=_){const y=Math.min(P+_,r);for(let W=h;W<x;W++){let z=W*w+$+P,C=P*k+M+W;for(let L=P;L<y;L++,z++,C+=k)u[C]=e[z]}}}}return u}const l=[o,a,r],c=[l[n[0]],l[n[1]],l[n[2]]],m=[a*r,r,1],d=m[n[0]],f=m[n[1]],p=m[n[2]];let g=0;for(let w=0;w<c[0];w++){const k=w*d;for(let _=0;_<c[1];_++){const b=k+_*f;for(let $=0;$<c[2];$++,g++)u[g]=e[b+$*p]}}return u}function Un(e,t=[256,256,256],n=[2,1,0]){return Oo(e,t,n,Float32Array)}function ma(e,t=[256,256,256],n=[2,1,0]){return Oo(e,t,n,Uint8Array)}function Ps(e){const t=new Uint32Array(256);for(let n=0;n<e.length;n++)t[e[n]]++;return t}function da(e){const t=Ps(e);let n=0;for(let s=0;s<256;s++)t[s]>0&&n++;return n}function go(e,t=!1,n="output"){let s=0,o=1/0,a=-1/0;if(!t&&(e instanceof Uint8Array||e instanceof Uint8ClampedArray)){if(e.length>0){let r=255,i=0,u=0;if((e.byteOffset&3)===0&&e.length>=4){const l=e.length>>2,c=new Uint32Array(e.buffer,e.byteOffset,l);for(let m=0;m<l;m++){const d=c[m];if(d===0){r=0;continue}const f=d&255,p=d>>>8&255,g=d>>>16&255,w=d>>>24;s+=f+p+g+w,f<r&&(r=f),f>i&&(i=f),p<r&&(r=p),p>i&&(i=p),g<r&&(r=g),g>i&&(i=g),w<r&&(r=w),w>i&&(i=w)}u=l<<2}for(let l=u;l<e.length;l++){const c=e[l];s+=c,c<r&&(r=c),c>i&&(i=c)}o=r,a=i}}else for(let r=0;r<e.length;r++){const i=e[r];if(!Number.isFinite(i))throw new Error(`Model ${n} contains NaN or Inf values.`);s+=i,i<o&&(o=i),i>a&&(a=i)}if(console.log(`${t?"Probability":"Segmentation"} volume sum: ${s}`),s===0)throw new Error(t?"Model probability output is all zeros. This may indicate an issue with WebGPU shaders or input data.":"Model produced an empty segmentation (all zeros). This may indicate an issue with WebGPU shaders or input data.");if(t&&(o<-1e-6||a>1+1e-6))throw new Error(`Probability output values out of range [0, 1]: min=${o.toFixed(4)}, max=${a.toFixed(4)}`);return{sum:s,min:o,max:a}}function ga(e,t,n,s,o=null,a=null){return ke(this,null,function*(){const r=!!(e&&typeof e.data=="function");let i,u;r?(console.log("Downloading segmentation data from GPU to CPU..."),i=yield e.data(),u=e.shape||a||[256,256,256],console.log("Data download complete. Starting CPU processing.")):(i=e,u=a||[256,256,256]),ua(i);let l,c=!1;if(i instanceof Uint8Array)l=i,c=!r;else{let d=0;for(let f=0;f<i.length;f++)i[f]>d&&(d=i[f]);l=d<=255?new Uint8Array(i):new Uint32Array(i),c=!0}let m=null;if(s.isPostProcessEnable){console.log("Applying CPU-based connected-component labeling...");const d=performance.now(),f=new la,p=[3,5,8,9,14,15,21,38,58,59,60,218,598,608],g=!!s.fillSuppressedWithNeighborLabel||p.includes(n.id),w=[5,14,15,58,59,60,598,608],k=P=>P>=1&&P<=34?1:P>=35&&P<=68?2:0,_=w.includes(n.id)?k:null,b=u[0]*u[1]*u[2],$=Math.max(1e5,Math.floor(b*.01)),[M,h]=f.bwlabel(l,u,6,!1,!1,ca);if(m=f.getLabelMeta(h),M>$){const P=`Segmentation produced noise: ${M.toLocaleString()} disconnected regions (cap ${$.toLocaleString()}). The model output is unusable, so post-processing was aborted. Try re-running, switching backend (WebGPU/WebGL2), or another model.`;console.error("[postprocess] "+P);const y=new Error(P);throw y.code="SEGMENTATION_NOISE",y}if([1,7].includes(n.id)){const[z,C]=f.filter_clusters_by_rank(l,M,h,2,.02,u,g,8,!1,_);l=C,c=!0}else if([3,8,9,21,38,218].includes(n.id)){const P=new Set([1,2,5,6,13]),[y,W]=f.filter18ClassFromLabels(l,M,h,u,P,g,_,c);l=W,c=!0}else if([5,14,15,58,59,60,598,608].includes(n.id)){s.diagnoseEnclosedComponents&&f.diagnose_components(l,M,h,u,{label:`model${n.id}`,topN:60});const[P,y]=f.filterHierarchicalFromLabels(l,M,h,u,"all",!0,g,_,c);l=y,c=!0}else c||(l=l.slice(),c=!0),f.applyLargestBinaryMaskInPlace(l,M,h,u);const x=((performance.now()-d)/1e3).toFixed(4);console.log(`Connected-component labeling took: ${x} seconds.`)}switch(n.type){case"Brain_Masking":{const d=new Uint8Array(l.length);if(m&&m.runs){const f=m.runs,p=m.runLen;for(let g=0;g<p;g+=2){const w=f[g],k=f[g+1];for(let _=w;_<k;_++)l[_]!==0&&(d[_]=1)}}else for(let f=0;f<l.length;f++)d[f]=l[f]!==0?1:0;return d}case"Brain_Extraction":{const d=new Uint8Array(l.length),f=o?new Uint8Array(l.length):null;if(m&&m.runs){const p=m.runs,g=m.runLen;for(let w=0;w<g;w+=2){const k=p[w],_=p[w+1];for(let b=k;b<_;b++)l[b]!==0&&(d[b]=t[b],f&&(f[b]=1))}}else for(let p=0;p<l.length;p++){const g=l[p]!==0?1:0;d[p]=t[p]*g,f&&(f[p]=g)}return o&&(o.mask=f),d}default:return l instanceof Uint8Array?l:new Uint8Array(l)}})}const _a={WEBGPU:"webgpu"};function ba(e,t){return{startTime:Date.now(),Model_Name:(e==null?void 0:e.modelName)||"Unknown",Execution_Mode:t,TF_Backend:"webgpu",isModelFullVol:null,No_SubVolumes:1,Brainchop_Ver:"FullVolume",Input_Shape:null,Output_Shape:null,Channel_Last:null,Model_Param:null,Model_Layers:null,Actual_Labels:null,Expect_Labels:null,NumLabels_Match:null,Missing_Labels:null,Preprocess_t:null,Setup_t:null,Inference_t:null,Postprocess_t:null,Display_t:null,Status:null,Error_Type:null,Extra_Err_Info:null}}function ha(e,t,n,s=null){e.Expect_Labels=t,e.Actual_Labels=n,e.NumLabels_Match=t===n,s&&s.length>0&&(e.Missing_Labels=s.join(", "))}function wa(e,t,n,s=null){e.Inference_t=t,e.Postprocess_t=n,s&&(s.Preprocess_t!==void 0&&(e.Preprocess_t=s.Preprocess_t),s.Setup_t!==void 0&&(e.Setup_t=s.Setup_t),s.Display_t!==void 0&&(e.Display_t=s.Display_t)),e.Status="OK"}function va(e,t,n=null){e.Inference_t=1/0,e.Postprocess_t=1/0,e.Status="Fail",e.Error_Type=(t==null?void 0:t.message)||String(t),n&&(e.Extra_Err_Info=n)}const Tt=1e-8;function un(e,t,n){return Math.max(t,Math.min(n,e))}function xa(e){return e.outputType==="probability"&&e.probabilityPostprocess==="cat-lite"}function ya(e,t,n){const[s,o,a]=e,r=s.length,i=new Uint8Array(r);let u=0;for(let $=0;$<r;$++)Math.max(0,s[$])+Math.max(0,o[$])+Math.max(0,a[$])>=n&&(i[$]=1,u++);const[l,c,m]=t;if(l<2||c<2||m<1)return{componentCount:0,removedVoxels:0,supportMask:i};const d=l===256&&c===256,f=new Uint32Array(u),p=l*c;let g=0,w=0,k=0,_=0;for(let $=0;$<r;$++){if(i[$]!==1)continue;_++;const M=g;f[g++]=$,i[$]=2;for(let h=M;h<g;h++){const x=f[h],P=d?x&255:x%l,y=d?x>>>8&255:Math.floor(x/l)%c;P>0&&i[x-1]===1&&(i[x-1]=2,f[g++]=x-1),P+1<l&&i[x+1]===1&&(i[x+1]=2,f[g++]=x+1),y>0&&i[x-l]===1&&(i[x-l]=2,f[g++]=x-l),y+1<c&&i[x+l]===1&&(i[x+l]=2,f[g++]=x+l),x>=p&&i[x-p]===1&&(i[x-p]=2,f[g++]=x-p),x+p<r&&i[x+p]===1&&(i[x+p]=2,f[g++]=x+p)}g-M>=k-w&&(w=M,k=g)}let b=0;if(_>1)for(let $=0;$<g;$++){if($>=w&&$<k)continue;const M=f[$];s[M]=0,o[M]=0,a[M]=0,i[M]=0,b++}return{componentCount:_,removedVoxels:b,supportMask:i}}function $a([e,t,n],s,{minSupport:o,priorPower:a},r=null){const i=!!(r&&o>0&&o<=1);let u=0;for(let g=0;g<s.length;g++){if(i&&r[g]!==2)continue;const w=Math.max(0,e[g])+Math.max(0,t[g])+Math.max(0,n[g]);Math.min(w,1)>=o&&Number.isFinite(s[g])&&u++}const l=new Uint32Array(u),c=new Float64Array(u),m=u*36<=192*jt(2,20)?u:0,d=new Float64Array(m),f=new Float64Array(m),p=new Float64Array(m);for(let g=0,w=0;g<s.length;g++){if(i&&r[g]!==2)continue;const k=Math.max(0,e[g]),_=Math.max(0,t[g]),b=Math.max(0,n[g]),$=k+_+b,M=Math.min($,1);!(M>=o)||!Number.isFinite(s[g])||(l[w]=g,c[w]=s[g]-0,m&&(d[w]=M*Math.pow(b/$,a),f[w]=M*Math.pow(k/$,a),p[w]=M*Math.pow(_/$,a)),w++)}return{indices:l,values:c,weightCsf:d,weightGm:f,weightWm:p,volumes:[e,t,n]}}function _o([e,t,n],s,o,a){const r=Math.max(0,e[s]),i=Math.max(0,t[s]),u=Math.max(0,n[s]),l=r+i+u,c=Math.min(l,1);a[0]=c*Math.pow(u/l,o),a[1]=c*Math.pow(r/l,o),a[2]=c*Math.pow(i/l,o)}function bo({indices:e,values:t,weightCsf:n,weightGm:s,weightWm:o,volumes:a},{minSeparation:r,sigmaFloor:i,priorPower:u},l=!1){const c=n.length===0?new Float64Array(3):null,m=new Float64Array(3),d=new Float64Array(3);for(let w=0;w<t.length;w++){const k=t[w];c&&_o(a,e[w],u,c);const _=c?c[0]:n[w],b=c?c[1]:s[w],$=c?c[2]:o[w];m[0]+=_*k,d[0]+=_,m[1]+=b*k,d[1]+=b,m[2]+=$*k,d[2]+=$}if(d.some(w=>w<100))return{applied:!1,reason:"too few high-confidence tissue voxels"};const f=Array.from(m,(w,k)=>w/d[k]);if(!(f[0]+r<f[1]&&f[1]+r<f[2]))return{applied:!1,reason:`implausible T1 tissue ordering (${f.map(w=>w.toFixed(3)).join(", ")})`};if(l)return{applied:!0,means:f};const p=new Float64Array(3);for(let w=0;w<t.length;w++){const k=t[w];c&&_o(a,e[w],u,c);const _=c?c[0]:n[w],b=c?c[1]:s[w],$=c?c[2]:o[w],M=k-f[0],h=k-f[1],x=k-f[2];p[0]+=_*M*M,p[1]+=b*h*h,p[2]+=$*x*x}const g=Array.from(p,(w,k)=>Math.sqrt(Math.max(i*i,w/d[k])));return{applied:!0,means:f,sigmas:g}}function Sa(e,t,n,s,{minSupport:o,block:a,smoothingPasses:r},i=null){const[u,l,c]=e,[m,d,f]=n,p=!!(i&&o>0&&o<=1),g=Math.ceil(m/a),w=Math.ceil(d/a),k=Math.ceil(f/a),_=g*w*k,b=new Float64Array(_),$=new Float64Array(_),[M,h,x]=s,P=m*d;for(let ee=0;ee<f;ee++){const S=Math.floor(ee/a);for(let U=0;U<d;U++){const R=Math.floor(U/a);let E=ee*P+U*m;const T=(S*w+R)*g;for(let F=0;F<m;F++,E++){if(p&&i[E]!==2)continue;const H=Math.max(0,u[E]),te=Math.max(0,l[E]),Y=Math.max(0,c[E]),j=H+te+Y,le=Math.min(j,1);if(!(le>=o)||!Number.isFinite(t[E]))continue;const he=H/j,me=te/j,ce=Y/j,Z=ce*M+he*h+me*x,ae=le*(ce*ce+he*he+me*me),A=T+Math.floor(F/a);b[A]+=ae*(t[E]-Z),$[A]+=ae}}}let y=new Float32Array(_),W=new Uint8Array(_);for(let ee=0;ee<_;ee++)$[ee]>1&&(y[ee]=b[ee]/$[ee],W[ee]=1);for(let ee=0;ee<r;ee++){const S=new Float32Array(_),U=new Uint8Array(_);for(let R=0;R<k;R++)for(let E=0;E<w;E++)for(let T=0;T<g;T++){let F=0,H=0;for(let Y=-1;Y<=1;Y++){const j=R+Y;if(!(j<0||j>=k))for(let le=-1;le<=1;le++){const he=E+le;if(!(he<0||he>=w))for(let me=-1;me<=1;me++){const ce=T+me;if(ce<0||ce>=g)continue;const Z=(j*w+he)*g+ce;W[Z]&&(F+=y[Z],H++)}}}const te=(R*w+E)*g+T;H>0&&(S[te]=F/H,U[te]=1)}y=S,W=U}const z=(ee,S)=>{const U=new Int32Array(ee),R=new Int32Array(ee),E=new Float32Array(ee);for(let T=0;T<ee;T++){const F=un((T+.5)/a-.5,0,S-1);U[T]=Math.floor(F),R[T]=Math.min(U[T]+1,S-1),E[T]=F-U[T]}return{low:U,high:R,t:E}},C=z(m,g),L=z(d,w),G=z(f,k),V=m===256&&d===256;return ee=>{let S,U,R;if(V)R=ee>>>16,U=ee>>>8&255,S=ee&255;else{R=Math.floor(ee/P);const Q=ee-R*P;U=Math.floor(Q/m),S=Q-U*m}const E=C.low[S],T=C.high[S],F=C.t[S],H=(G.low[R]*w+L.low[U])*g,te=(G.low[R]*w+L.high[U])*g,Y=(G.high[R]*w+L.low[U])*g,j=(G.high[R]*w+L.high[U])*g,le=y[H+E]+(y[H+T]-y[H+E])*F,he=y[te+E]+(y[te+T]-y[te+E])*F,me=y[Y+E]+(y[Y+T]-y[Y+E])*F,ce=y[j+E]+(y[j+T]-y[j+E])*F,Z=L.t[U],ae=le+(he-le)*Z,A=me+(ce-me)*Z;return ae+(A-ae)*G.t[R]}}function Cn(e,t,n,s){const o=(e-t)/n;return-.5*o*o-s}function Ma(e,t,n,s={}){const{catLiteMinSupport:o=.03,catLitePurePriorPower:a=3,catLiteMinMeanSeparation:r=.035,catLiteSigmaFloor:i=.025,catLiteBiasBlockSize:u=16,catLiteBiasSmoothPasses:l=3,catLitePriorStrength:c=.8,catLiteIntensityStrength:m=.75,catLiteMixelPrior:d=.35,catLiteCsfWmMixelPrior:f=6,catLiteSpatialWeight:p=.25}=s,g={priorPower:a,minSupport:o,minSeparation:r,sigmaFloor:i},[w,k,_]=n,b=t.length,$=o>0&&o<=1,{componentCount:M,removedVoxels:h,supportMask:x}=ya(e,n,o),P={componentCount:M,removedVoxels:h},y=$a(e,t,g,x),W=bo(y,g,!0);if(!W.applied)return{tissues:e,stats:W};const z=Sa(e,t,n,W.means,{minSupport:o,block:u,smoothingPasses:l},x);for(let D=0;D<y.indices.length;D++){const J=y.indices[D];y.values[D]=t[J]-z(J)}const C=bo(y,g);if(!C.applied)return{tissues:e,stats:C};y.indices=y.weightCsf=y.weightGm=y.weightWm=null;const[L,G,V]=C.means,[ee,S,U]=C.sigmas,[R,E,T]=e,F=new Float32Array(b),H=new Float32Array(b),te=new Float32Array(b),Y=w*k,j=.5*(L+G),le=.5*(G+V),he=.5*(L+V),me=Math.sqrt(jt(G-L,2)/12+.5*(jt(ee,2)+jt(S,2))),ce=Math.sqrt(jt(V-G,2)/12+.5*(jt(S,2)+jt(U,2))),Z=Math.sqrt(jt(V-L,2)/12+.5*(jt(ee,2)+jt(U,2))),ae=Math.log(ee),A=Math.log(S),Q=Math.log(U),N=Math.log(me),re=Math.log(ce),ue=Math.log(Z);let oe=0;for(let D=0;D<_;D++)for(let J=0;J<k;J++){let K=D*Y+J*w;for(let ve=0;ve<w;ve++,K++){if($&&x[K]!==2)continue;const ge=Math.max(0,R[K]),xe=Math.max(0,E[K]),Pe=Math.max(0,T[K]),Oe=ge+xe+Pe,Ae=Math.min(Oe,1);if(!(Ae>=o)||!Number.isFinite(t[K]))continue;let Ee=ge/Oe,Ie=xe/Oe,Ue=Pe/Oe;if(p>0){let ne=0,zt=0,It=0,Ze=0;if(ve>0){const Ge=K-1,tt=Math.max(0,R[Ge]),ut=Math.max(0,E[Ge]),v=Math.max(0,T[Ge]),B=tt+ut+v;B>Tt&&(ne+=tt/B,zt+=ut/B,It+=v/B,Ze++)}if(ve+1<w){const Ge=K+1,tt=Math.max(0,R[Ge]),ut=Math.max(0,E[Ge]),v=Math.max(0,T[Ge]),B=tt+ut+v;B>Tt&&(ne+=tt/B,zt+=ut/B,It+=v/B,Ze++)}if(J>0){const Ge=K-w,tt=Math.max(0,R[Ge]),ut=Math.max(0,E[Ge]),v=Math.max(0,T[Ge]),B=tt+ut+v;B>Tt&&(ne+=tt/B,zt+=ut/B,It+=v/B,Ze++)}if(J+1<k){const Ge=K+w,tt=Math.max(0,R[Ge]),ut=Math.max(0,E[Ge]),v=Math.max(0,T[Ge]),B=tt+ut+v;B>Tt&&(ne+=tt/B,zt+=ut/B,It+=v/B,Ze++)}if(D>0){const Ge=K-Y,tt=Math.max(0,R[Ge]),ut=Math.max(0,E[Ge]),v=Math.max(0,T[Ge]),B=tt+ut+v;B>Tt&&(ne+=tt/B,zt+=ut/B,It+=v/B,Ze++)}if(D+1<_){const Ge=K+Y,tt=Math.max(0,R[Ge]),ut=Math.max(0,E[Ge]),v=Math.max(0,T[Ge]),B=tt+ut+v;B>Tt&&(ne+=tt/B,zt+=ut/B,It+=v/B,Ze++)}if(Ze){const Ge=1-p;Ee=Ge*Ee+p*ne/Ze,Ie=Ge*Ie+p*zt/Ze,Ue=Ge*Ue+p*It/Ze}}const ye=y.values[oe++],Xe=c*Math.log(Ue+Tt)+m*Cn(ye,L,ee,ae),Ke=c*Math.log(Ee+Tt)+m*Cn(ye,G,S,A),Qe=c*Math.log(Ie+Tt)+m*Cn(ye,V,U,Q),nt=c*Math.log(d*2*Math.sqrt(Ue*Ee)+Tt)+m*Cn(ye,j,me,N),Ft=c*Math.log(d*2*Math.sqrt(Ee*Ie)+Tt)+m*Cn(ye,le,ce,re),vt=c*Math.log(f*2*Math.sqrt(Ue*Ie)*jt(1-Ee,2)+Tt)+m*Cn(ye,he,Z,ue),_t=Math.max(Xe,Ke,Qe,nt,Ft,vt),Lt=Math.exp(Xe-_t),Ut=Math.exp(Ke-_t),Wt=Math.exp(Qe-_t),bt=Math.exp(nt-_t),mt=Math.exp(Ft-_t),rt=Math.exp(vt-_t),At=Lt+Ut+Wt+bt+mt+rt,gt=un((ye-L)/(G-L),0,1),Rt=un((V-ye)/(V-G),0,1),Jt=un((ye-L)/(V-L),0,1),Gt=(Ut+bt*gt+mt*Rt)/At,nn=(Wt+mt*(1-Rt)+rt*Jt)/At,Mt=(Lt+bt*(1-gt)+rt*(1-Jt))/At,qt=Math.min(Ue,Ie),at=un((qt-Ee)/(qt+Tt),0,1),$t=un(4*Ue*Ie,0,1),it=jt(1-$t*at,2);F[K]=un(Gt*Ae*it,0,1);const Ht=(1-Gt*it)/Math.max(nn+Mt,Tt);H[K]=un(nn*Ht*Ae,0,1),te[K]=un(Mt*Ht*Ae,0,1)}}return{tissues:[F,H,te],stats:{applied:!0,tissueMeans:{csf:L,gray:G,white:V},tissueSigmas:{csf:ee,gray:S,white:U},supportCleanup:P}}}const ka={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Pa({srcImg:e,srcDims:t,srcAffine:n,dstDims:s,dstAffine:o,isLabel:a,isProbability:r=!1,dstTypedArrayKind:i="Uint8Array",labelLut:u=null}){const[l,c,m]=s,[d,f,p]=t,g=o,w=(R,E)=>[R[0][0]*E[0]+R[0][1]*E[1]+R[0][2]*E[2]+R[0][3],R[1][0]*E[0]+R[1][1]*E[1]+R[1][2]*E[2]+R[1][3],R[2][0]*E[0]+R[2][1]*E[1]+R[2][2]*E[2]+R[2][3]],k=Gr();if(!Nr(k,Or(...n[0],...n[1],...n[2],...n[3])))throw new Error("Segmentation affine is not invertible");const _=(R,E)=>[R[0]*E[0]+R[1]*E[1]+R[2]*E[2]+R[3],R[4]*E[0]+R[5]*E[1]+R[6]*E[2]+R[7],R[8]*E[0]+R[9]*E[1]+R[10]*E[2]+R[11]],b=R=>_(k,w(g,R)),$=b([0,0,0]),M=b([1,0,0]).map((R,E)=>R-$[E]),h=b([0,1,0]).map((R,E)=>R-$[E]),x=b([0,0,1]).map((R,E)=>R-$[E]),P=l*c*m,y=d*f,W=(R,E,T)=>R>=0&&R<d&&E>=0&&E<f&&T>=0&&T<p?e[R+E*d+T*y]:0;if(a){const R=me=>{const ce=Math.sqrt(me[0]*me[0]+me[1]*me[1]+me[2]*me[2]);if(ce<=1.5001)return[0];const Z=ce<=3.5001?4:ce<=5.5001?6:8,ae=new Array(Z);for(let A=0;A<Z/2;A++){const Q=(A+.5)/Z;ae[2*A]=-Q,ae[2*A+1]=Q}return ae},E=R(M),T=R(h),F=R(x),H=[];for(const me of E)for(const ce of T)for(const Z of F)H.push([me*M[0]+ce*h[0]+Z*x[0],me*M[1]+ce*h[1]+Z*x[1],me*M[2]+ce*h[2]+Z*x[2]]);const te=new Int16Array(P),Y=u?u.length:0;let j=0;const le=H.length;let he=0;if(le===1)for(let me=0;me<m;me++)for(let ce=0;ce<c;ce++){let Z=$[0]+ce*h[0]+me*x[0],ae=$[1]+ce*h[1]+me*x[1],A=$[2]+ce*h[2]+me*x[2];for(let Q=0;Q<l;Q++){let N=W(Math.floor(Z+.5),Math.floor(ae+.5),Math.floor(A+.5));u&&N>=0&&N<Y&&(N=u[N]),N>j&&(j=N),te[he++]=N,Z+=M[0],ae+=M[1],A+=M[2]}}else{const me=new Int32Array(le),ce=new Int32Array(le);for(let Z=0;Z<m;Z++)for(let ae=0;ae<c;ae++){let A=$[0]+ae*h[0]+Z*x[0],Q=$[1]+ae*h[1]+Z*x[1],N=$[2]+ae*h[2]+Z*x[2];for(let re=0;re<l;re++){let ue=0;for(let J=0;J<le;J++){const K=H[J],ve=W(Math.floor(A+K[0]+.5),Math.floor(Q+K[1]+.5),Math.floor(N+K[2]+.5));let ge=-1;for(let xe=0;xe<ue;xe++)if(me[xe]===ve){ge=xe;break}ge<0?(me[ue]=ve,ce[ue]=1,ue++):ce[ge]++}let oe=me[0],D=ce[0];for(let J=1;J<ue;J++)ce[J]>D&&(D=ce[J],oe=me[J]);u&&oe>=0&&oe<Y&&(oe=u[oe]),oe>j&&(j=oe),te[he++]=oe,A+=M[0],Q+=M[1],N+=M[2]}}}return{img:te,hdrPatch:{datatypeCode:4,numBitsPerVoxel:16,scl_slope:1,scl_inter:0,cal_min:0,cal_max:j,intent_code:1002}}}const z=ka[i]||Uint8Array,C=r?255:1,L=r?.5:0,G=r?new Uint8Array(P):new z(P),ee=r?(R,E,T)=>{const F=Math.floor(R),H=Math.floor(E),te=Math.floor(T),Y=R-F,j=E-H,le=T-te,he=W(F,H,te),me=W(F+1,H,te),ce=W(F,H+1,te),Z=W(F+1,H+1,te),ae=W(F,H,te+1),A=W(F+1,H,te+1),Q=W(F,H+1,te+1),N=W(F+1,H+1,te+1),re=he+Y*(me-he),ue=ce+Y*(Z-ce),oe=ae+Y*(A-ae),D=Q+Y*(N-Q),J=re+j*(ue-re),K=oe+j*(D-oe);return J+le*(K-J)}:(R,E,T)=>W(Math.round(R),Math.round(E),Math.round(T));let S=0;for(let R=0;R<m;R++)for(let E=0;E<c;E++){let T=$[0]+E*h[0]+R*x[0],F=$[1]+E*h[1]+R*x[1],H=$[2]+E*h[2]+R*x[2];for(let te=0;te<l;te++)G[S++]=ee(T,F,H)*C+L,T+=M[0],F+=M[1],H+=M[2]}const U=r?{datatypeCode:2,numBitsPerVoxel:8,cal_min:0,cal_max:1,scl_slope:1/C,scl_inter:0}:{scl_slope:1,scl_inter:0};return{img:G,hdrPatch:U}}function Aa(e){return new Worker(""+new URL("postprocess-worker-B3M6a4-n.js",import.meta.url).href,{name:e==null?void 0:e.name})}let pn=null,za=1;const On=new Map;function Ca(e){for(const{reject:t}of On.values())t(e);On.clear()}function ho(e){if(pn){try{pn.terminate()}catch(t){}pn=null}e&&Ca(e)}function Ba(){return typeof Worker=="undefined"?null:(pn||(pn=new Aa({}),pn.onmessage=e=>{const{id:t,ok:n,result:s,error:o}=e.data||{},a=On.get(t);if(a)if(On.delete(t),n)a.resolve(s);else{const r=new Error((o==null?void 0:o.message)||"Postprocessing worker failed");o!=null&&o.code&&(r.code=o.code),a.reject(r)}},pn.onerror=e=>{const t=(e==null?void 0:e.message)||"Postprocessing worker crashed";ho(new Error(t))},pn.onmessageerror=()=>{ho(new Error("Postprocessing worker message deserialization failed"))}),pn)}function Es(e,t,n=[]){const s=Ba();if(!s)return null;const o=za++;return new Promise((a,r)=>{On.set(o,{resolve:a,reject:r});try{s.postMessage({id:o,cmd:e,payload:t},n)}catch(i){On.delete(o),r(i)}})}function To(e){return e&&ArrayBuffer.isView(e)&&e.buffer instanceof ArrayBuffer&&e.byteOffset===0&&e.byteLength===e.buffer.byteLength}function Fa(i,u,l,c){return ke(this,arguments,function*(e,t,n,s,o=null,a=null,{transferLabels:r=!1}={}){if(typeof Worker=="undefined")return ga(e,t,n,s,o,a);const m=(n==null?void 0:n.type)==="Brain_Extraction",d={nativeLabels:e,niftiImage:m?t:null,modelEntry:{id:n==null?void 0:n.id,type:n==null?void 0:n.type},opts:{isPostProcessEnable:!!(s!=null&&s.isPostProcessEnable),fillSuppressedWithNeighborLabel:!!(s!=null&&s.fillSuppressedWithNeighborLabel),diagnoseEnclosedComponents:!!(s!=null&&s.diagnoseEnclosedComponents)},wantMask:!!o,shape:a||[256,256,256]},f=r&&To(e)?[e.buffer]:[],p=yield Es("processSegmentation",d,f);return o&&p.mask&&(o.mask=p.mask),p.outImg})}function La(e){return ke(this,null,function*(){return typeof Worker=="undefined"?Pa(e):Es("resliceToNative",e,[])})}const wo=({csf:e,gray:t,white:n})=>`CSF=${e.toFixed(3)} GM=${t.toFixed(3)} WM=${n.toFixed(3)}`;function Ua(r,i,u,l,c){return ke(this,arguments,function*(e,t,n,s,o,a=[256,256,256]){var g;const m=[];for(let w=0;w<3;w++)m.push(yield o(e[w],w)),e[w]=null;const d={catLitePurePriorPower:n==null?void 0:n.catLitePurePriorPower,catLitePriorStrength:n==null?void 0:n.catLitePriorStrength,catLiteIntensityStrength:n==null?void 0:n.catLiteIntensityStrength,catLiteMixelPrior:n==null?void 0:n.catLiteMixelPrior,catLiteCsfWmMixelPrior:n==null?void 0:n.catLiteCsfWmMixelPrior,catLiteSpatialWeight:n==null?void 0:n.catLiteSpatialWeight,catLiteMinSupport:n==null?void 0:n.catLiteMinSupport,catLiteSigmaFloor:n==null?void 0:n.catLiteSigmaFloor,catLiteBiasBlockSize:n==null?void 0:n.catLiteBiasBlockSize,catLiteBiasSmoothPasses:n==null?void 0:n.catLiteBiasSmoothPasses,catLiteMinMeanSeparation:n==null?void 0:n.catLiteMinMeanSeparation,catLiteMinPureVoxels:n==null?void 0:n.catLiteMinPureVoxels};let f,p;if(typeof Worker=="undefined")({tissues:f,stats:p}=Ma(m,t,a,d));else{const w=new Set,k=[];for(const _ of[...m,t])To(_)&&!w.has(_.buffer)&&(w.add(_.buffer),k.push(_.buffer));({tissues:f,stats:p}=yield Es("catLite",{priors:m,intensity:t,shape:a,options:d},k))}if(s.Output_Type="Continuous tissue probability",s.Tissue="GM/WM/CSF",s.Softmax_Temperature=(g=n==null?void 0:n.softmaxTemperature)!=null?g:1,p.applied){s.Partial_Volume="CAT-lite mixed-class PVE",s.CAT_Lite_Tissue_Means=wo(p.tissueMeans),s.CAT_Lite_Tissue_Sigmas=wo(p.tissueSigmas);const{componentCount:w,removedVoxels:k}=p.supportCleanup;console.log(`[CAT-lite] means ${s.CAT_Lite_Tissue_Means}; sigmas ${s.CAT_Lite_Tissue_Sigmas}; removed ${k} voxels outside the largest of ${w} support components`)}else s.Partial_Volume=`Skipped: ${p.reason}`,console.warn(`[CAT-lite] skipped: ${p.reason}`);return f})}const dn=[1,3,5,7,13,19,31,19,13,7,5,3,1],Wa=[16,8,4,2,1,16,8,4,2,1,16,8,4,2,1,16,8,4,2,1,16,8,4,2,1],Ra={model16chan18cls:{dilations:dn,activation:"gelu_tanh",fullVolume:!0},model24chan18cls_gdice_prio:{dilations:dn,activation:"gelu_tanh",fullVolume:!0},model6chan3cls:{dilations:dn,activation:"gelu_tanh",fullVolume:!0},model24chan104cls_synth:{dilations:dn,activation:"gelu_tanh",fullVolume:!0},model24chan104cls_infant_refit_synth:{dilations:dn,activation:"gelu_tanh",fullVolume:!0},model24chan104cls_v3_repbn:{dilations:dn,activation:"gelu_tanh",fullVolume:!0},model24chan50cls:{dilations:dn,activation:"gelu_tanh",fullVolume:!0},model32chan18cls:{dilations:dn,activation:"gelu_tanh",fullVolume:!1},mindgrab:{dilations:Wa,activation:"gelu_tanh",fullVolume:!0},model5_gw_ae:{dilations:[1,2,4,8,16,8,4,2,1],activation:"relu",fullVolume:!0},model11_gw_ae:{dilations:[1,2,4,8,4,2,2,1],activation:"relu",noSafetensors:!0,fullVolume:!0},model30chan18cls:{dilations:[1,2,4,8,16,8,4,2,1],activation:"elu",fullVolume:!0},model30chan50cls:{dilations:[1,2,4,8,16,8,4,2,1],activation:"elu",fullVolume:!0}};function qa(e){const t=String(e.path||"").match(/\/models\/([^/]+)\//);return t?t[1]:null}function Ds(e){const t=qa(e);if(!t)return null;const n=Ra[t];return!n||n.noSafetensors?null:lt({name:t},n)}function Ia(e){const t=e&32768?-1:1,n=(e&31744)>>10,s=e&1023;return n===0?t*Math.pow(2,-14)*(s/1024):n===31?s?NaN:t*(1/0):t*Math.pow(2,n-15)*(1+s/1024)}function Eo(e){const t=new DataView(e),n=Number(t.getBigUint64(0,!0)),s=JSON.parse(new TextDecoder().decode(new Uint8Array(e,8,n))),o=8+n,a={};for(const[r,i]of Object.entries(s)){if(r==="__metadata__"){a.__metadata__=i;continue}const[u,l]=i.data_offsets,c=i.shape.reduce((d,f)=>d*f,1);let m;if(i.dtype==="F32")m=new Float32Array(e.slice(o+u,o+l));else if(i.dtype==="F16"){const d=new Uint16Array(e.slice(o+u,o+l));m=new Float32Array(c);for(let f=0;f<c;f++)m[f]=Ia(d[f])}else if(i.dtype==="BF16"){const d=new Uint16Array(e.slice(o+u,o+l));m=new Float32Array(c);const f=new Uint32Array(1),p=new Float32Array(f.buffer);for(let g=0;g<c;g++)f[0]=d[g]<<16,m[g]=p[0]}else throw new Error(`safetensors: unsupported dtype ${i.dtype} for tensor '${r}'`);if(m.length!==c)throw new Error(`safetensors: tensor '${r}' has ${m.length} values, shape says ${c}`);a[r]={dtype:i.dtype,shape:i.shape,data:m}}return a}function Do(e){const t=[],n=[],s=[];for(const[a,r]of Object.entries(e)){if(a==="__metadata__")continue;const i=a.match(/^m\.model\.(\d+)\.(weight|bias)$/);if(!i)continue;const u=Number(i[1]),l=i[2]==="weight";if(r.shape.length===5){const[c,m,d,f,p]=r.shape,w={idx:u,outC:c,inC:m,kd:d,kh:f,kw:p,is1x1:d===1&&f===1&&p===1,w:r.data,bias:null},k=t.find(_=>_.idx===u);k?Object.assign(k,w):t.push(w)}else r.shape.length===1&&s.push({idx:u,isW:l,data:r.data,len:r.shape[0]})}t.sort((a,r)=>a.idx-r.idx);for(const a of s){const r=t.find(u=>u.idx===a.idx);if(r&&!a.isW){r.bias=a.data;continue}if(r&&a.isW)continue;let i=n.find(u=>u.idx===a.idx);i||(i={idx:a.idx,scale:null,bias:null},n.push(i)),a.isW?i.scale=a.data:i.bias=a.data}n.sort((a,r)=>a.idx-r.idx);let o=null;return t.length&&t[t.length-1].is1x1&&(o=t.pop()),{convs:t,affines:n,classifier:o}}function Ga(e,t){var n;if(t==null)return e;if(t.length!==((n=e.classifier)==null?void 0:n.outC)||!Array.from(t).every(Number.isFinite))throw new Error("Classifier bias must contain one finite value per exported class");return e.classifier.bias=Float32Array.from(t),e}function Na(e,t){const n=t.cs,s=t.chan,{convs:o,affines:a,classifier:r}=e,i=f=>27*f*n;let u=0;const l=[];o.forEach((f,p)=>{const g=p===0?1:n,w={wq:u/4,inCS:g};u+=i(g),f.bias&&(w.biasQ=u/4,u+=n),l.push(w)}),a.forEach((f,p)=>{l[p]=l[p]||{},l[p].affQ=u/4,u+=n,l[p].affBiasQ=u/4,u+=n});let c=-1,m=-1;r&&(c=u,u+=s*t.nclass,u=Math.ceil(u/4)*4,r.bias&&(m=u,u+=t.nclass),u=Math.ceil(u/4)*4);const d=new Float32Array(u);if(o.forEach((f,p)=>{const g=l[p],w=g.inCS,k=g.wq*4,_=f.kd*f.kh*f.kw;if(f.outC>s||p>0&&f.inC>s)throw new Error(`layer ${p}: shape ${f.outC}x${f.inC} exceeds CHAN ${s}`);for(let b=0;b<f.outC;b++){for(let $=0;$<f.inC;$++)for(let M=0;M<f.kd;M++)for(let h=0;h<f.kh;h++)for(let x=0;x<f.kw;x++){const P=f.kd===3?M*9+h*3+x:0,y=(((b*f.inC+$)*f.kd+M)*f.kh+h)*f.kw+x;d[k+(P*w+$)*n+b]=f.w[y]}f.bias&&(d[g.biasQ*4+b]=f.bias[b])}if(_!==27&&_!==1)throw new Error(`layer ${p}: kernel ${f.kd}x${f.kh}x${f.kw} unsupported`)}),a.forEach((f,p)=>{const g=l[p];for(let w=0;w<s;w++)d[g.affQ*4+w]=f.scale?f.scale[w]:0,d[g.affBiasQ*4+w]=f.bias?f.bias[w]:0}),r)for(let f=0;f<t.nclass;f++){for(let p=0;p<s;p++)d[c+p*t.nclass+f]=r.w[f*r.inC+p];r.bias&&(d[m+f]=r.bias[f])}return{data:d,offsets:{layers:l,clsFloat:c,clsBiasFloat:m}}}function Vo(e,t={}){const{convs:n,affines:s,classifier:o}=e,a=n[0].outC,r=Math.ceil(a/4)*4,i=n.some(l=>l.bias),u=lt({chan:a,cs:r,planes:r/4,nclass:o?o.outC:0,nhidden:n.length-1,norm:s.length?"gn":i?"none":"gn",affine:s.length>0,convBias:i,classifierBias:!!(o&&o.bias),centeredVariance:!1,eps:1e-5},t);if(u.nclass>256)throw new Error(`classifier has ${u.nclass} classes; the RGBA8 label texture holds at most 256`);if(!u.activation)throw new Error("descriptor needs an explicit `activation`");if(!u.dilations)throw new Error("descriptor needs an explicit `dilations` array");if(u.dilations.length!==n.length)throw new Error(`descriptor has ${u.dilations.length} dilations for ${n.length} convs`);return u}const fs=(e,t)=>Array.from({length:e},(n,s)=>t(s)).join(""),vo=["x","y","z","w"];function Oa(e){const t=`fn act4(x : vec4<f32>) -> vec4<f32> {
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
`;default:throw new Error(`webgpu-native: unknown activation '${e}'; add it deliberately`)}}function Ta(e,t,n){const s=e.cs/4,o=l=>fs(n,l),a=l=>fs(s,l),r=a(l=>`          let w${l} = vec4<f32>(wts4[wq + ${l}u]);
`),i=l=>`        { let wq = wq0 + ((tap * cin) + ic4 * 4u + ${l}u) * (CS / 4u);
`+r+o(c=>a(m=>`          a${c}${m} = fma(w${m}, vec4<f32>(s${c}.${vo[l]}), a${c}${m});
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
`+a(c=>fs(4,m=>`    dst[o + ${4*c+m}u] = f16(a${l}${c}.${vo[m]});
`))+`  }
`)+`}
`}function Ea(e){return`var<workgroup> wg_sum : array<f32, ${e} * CS>;
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
`}function Da(e){return`@compute @workgroup_size(${e}, 1, 1)
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
`}function Va(e){return`@group(0) @binding(5) var<storage, read_write> labels : array<u32>;
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
`}function Ha(e,t){var a;const{localX:n,vox:s,momLX:o}=t;if(e.cs%4!==0||e.cs>256)throw new Error(`webgpu-native: channel stride ${e.cs} unsupported`);if(e.nx%(n*s)||e.nx%n||e.nx%o)throw new Error(`webgpu-native: preset ${n}x${s}/${o} does not tile a ${e.nx}-voxel row`);if(o<e.cs)throw new Error(`webgpu-native: moments workgroup ${o} < ${e.cs} channels`);return`enable f16;
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
`+Oa(e.activation)+Ta(e,n,s)+(e.norm==="gn"?Ea(o)+Da(n):"")+Va(n)}const ps={amd:{localX:256,vox:1},apple:{localX:64,vox:2},default:{localX:64,vox:2}};function Xa(){var e;try{const t=new URLSearchParams(((e=globalThis.location)==null?void 0:e.search)||"").get("wgPreset"),n=t&&/^(\d+)x([124])$/.exec(t);return n?{localX:Number(n[1]),vox:Number(n[2]),source:"url"}:null}catch(t){return null}}function ja(e,t){var i;const n=String(((i=e.adapterInfo)==null?void 0:i.vendor)||"").toLowerCase(),s=e.limits,o=u=>u.localX<=s.maxComputeInvocationsPerWorkgroup&&u.localX<=s.maxComputeWorkgroupSizeX&&t.nx%(u.localX*u.vox)===0;let a=Xa()||kt(lt({},ps[n]||ps.default),{source:n||"default"});o(a)||(console.warn(`[WebGPU-native] preset ${a.localX}x${a.vox} does not fit this device; using the default`),a=kt(lt({},ps.default),{source:"fallback"}));let r=0;for(const u of[256,128,64,32])if(u<=a.localX&&u>=t.cs&&t.nx%u===0&&u<=s.maxComputeInvocationsPerWorkgroup&&u*t.cs*8<=s.maxComputeWorkgroupStorageSize){r=u;break}if(!r)throw new Error(`webgpu-native: no moments workgroup fits ${t.cs} channels on this device`);return kt(lt({},a),{momLX:r,vendor:n||"unknown"})}const Pt=256;function xo(e){if(typeof Float16Array!="undefined")return new Uint16Array(new Float16Array(e).buffer);const t=new Uint16Array(e.length),n=new Float32Array(1),s=new Uint32Array(n.buffer);for(let o=0;o<e.length;o++){n[0]=e[o];const a=s[0],r=a>>>16&32768,i=a>>>23&255,u=a&8388607;if(i===255){t[o]=r|31744|(u?512:0);continue}const l=i-127+15;if(l>=31){t[o]=r|31744;continue}if(l<=0){if(l<-10){t[o]=r;continue}const d=u|8388608,f=14-l;let p=d>>>f;const g=d&(1<<f)-1,w=1<<f-1;(g>w||g===w&&p&1)&&p++,t[o]=r|p;continue}let c=l<<10|u>>>13;const m=u&8191;(m>4096||m===4096&&c&1)&&c++,t[o]=r|c}return t}function Ya(e,t){var n;return t.quantize8Bit?"8-bit quantized V4 runner requested":(n=e.features)!=null&&n.has("shader-f16")?t.outputType==="probability"?"probability output (CAT-lite) is not ported yet":t.enableTTA?"test-time augmentation uses the tinygrad TTA runner":t.forceFP32?"model entry forces fp32":t.webgpu_safetensor?Ds(t)?null:"no descriptor in webgl2_runners/descriptors.js":"no safetensors weights":"device lacks shader-f16"}function Ka(e,t){const n=e.nx*e.ny*e.nz,s=e.nx/t*e.ny*e.nz;return 2*n*e.cs*2+n*2+2*n*4+(s+1)*e.cs*2*4}const yo=new WeakMap;function Za(e,t,n){return ke(this,null,function*(){let s=yo.get(e);s||(s=new Map,yo.set(e,s));const o=`${t.chan}|${t.cs}|${t.nclass}|${t.norm}|${t.affine}|${t.convBias}|${t.clsBias}|${t.activation}|${t.eps}|${n.localX}x${n.vox}x${n.momLX}`;let a=s.get(o);return a||(a=ke(null,null,function*(){const r=e.createShaderModule({code:Ha(t,n)}),i=["read-only-storage","storage","read-only-storage","uniform","storage","storage","read-only-storage","read-only-storage"],u=e.createBindGroupLayout({entries:i.map((d,f)=>({binding:f,visibility:GPUShaderStage.COMPUTE,buffer:{type:d}}))}),l=e.createPipelineLayout({bindGroupLayouts:[u]}),c=["conv","classify",...t.norm==="gn"?["moments","moments_finish","norm"]:[]],m=Object.fromEntries(yield Promise.all(c.map(d=>ke(null,null,function*(){return[d,yield e.createComputePipelineAsync({layout:l,compute:{module:r,entryPoint:d}})]}))));return{bgl:u,pipelines:m}}).catch(r=>{throw s.delete(o),r}),s.set(o,a)),a})}function Qa(e,t,n,s){return ke(this,null,function*(){const o=Ds(s);if(!o)throw new Error(`webgpu-native: no descriptor for ${s.path}`);const a=t instanceof Uint8Array?t:new Uint8Array(t),r=Ga(Do(Eo(a.buffer.slice(a.byteOffset,a.byteOffset+a.byteLength))),s.classifierBias),i=Vo(r,{nx:Pt,ny:Pt,nz:Pt,activation:o.activation,dilations:o.dilations});if(!i.nclass)throw new Error("webgpu-native: model has no classifier");if(i.convBias&&i.affine)throw new Error("webgpu-native: conv bias together with a GroupNorm affine is not supported");const u=ja(e,i),l=Pt*Pt*Pt,c=l*i.cs*2,m=e.limits;if(c>m.maxStorageBufferBindingSize||c>m.maxBufferSize)throw new Error(`webgpu-native: a ${c>>>20} MiB activation exceeds this device's buffer limits`);console.log(`[WebGPU-native] ${o.name}: ${i.chan}ch (stride ${i.cs}) ${i.nclass}cls norm=${i.norm} affine=${i.affine} act=${i.activation} | preset ${u.localX}x${u.vox} (moments ${u.momLX}, ${u.source}) | ~${Math.round(Ka(i,u.momLX)/1048576)} MiB`);const d=Na(r,i),{layers:f,clsFloat:p,clsBiasFloat:g}=d.offsets;e.pushErrorScope("validation"),e.pushErrorScope("out-of-memory");let w=2;try{const{bgl:k,pipelines:_}=yield Za(e,i,u),b=(Y,j)=>e.createBuffer({size:Y,usage:j}),$=GPUBufferUsage.STORAGE,M=Pt/u.momLX*Pt*Pt,h=xo(d.data),x=b(l*2,$|GPUBufferUsage.COPY_DST),P=b(c,$),y=b(c,$),W=b(Math.ceil(h.byteLength/16)*16,$|GPUBufferUsage.COPY_DST),z=b((M+1)*i.cs*2*4,$),C=b(l*4,$|GPUBufferUsage.COPY_SRC),L=b(l*4,GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST);e.queue.writeBuffer(W,0,h);const G=(Y,j,le)=>{const he=b(32,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST);return e.queue.writeBuffer(he,0,le),e.createBindGroup({layout:k,entries:[{binding:0,resource:{buffer:Y}},{binding:1,resource:{buffer:j}},{binding:2,resource:{buffer:W}},{binding:3,resource:{buffer:he}},{binding:4,resource:{buffer:z}},{binding:5,resource:{buffer:C}},{binding:6,resource:{buffer:W}},{binding:7,resource:{buffer:Y}}]})},V=Y=>{const j=new Uint32Array(8);return j[0]=Y.dilation|0,j[1]=Y.weightOff>>>0,j[2]=Y.affineOff>>>0,j[3]=Y.biasOff>>>0,j[4]=Y.inChannels>>>0,j[5]=Y.inStride>>>0,j[6]=M,j},ee=[];let S=x,U=P;f.forEach((Y,j)=>{const le=j===0;ee.push(G(S,U,V({dilation:i.dilations[j],weightOff:Y.wq*4,affineOff:Y.affQ!==void 0?Y.affQ*4:0,biasOff:Y.biasQ!==void 0?Y.biasQ*4:Y.affBiasQ!==void 0?Y.affBiasQ*4:0,inChannels:le?1:i.cs,inStride:le?1:i.cs}))),S=U,U=U===P?y:P});const R=G(S,U,V({weightOff:p,biasOff:g>=0?g:0}));w=0;const E=yield e.popErrorScope(),T=yield e.popErrorScope();if(E||T)throw new Error(`webgpu-native setup failed: ${(E||T).message}`);const F=Pt/(u.localX*u.vox),H=Pt/u.localX,te=Pt/u.momLX;return function(j){return ke(this,null,function*(){if(j.length!==l)throw new Error(`webgpu-native: input has ${j.length} voxels, expected ${l}`);e.pushErrorScope("validation"),e.queue.writeBuffer(x,0,xo(j));for(const Z of ee){const ae=e.createCommandEncoder(),A=ae.beginComputePass();A.setBindGroup(0,Z),A.setPipeline(_.conv),A.dispatchWorkgroups(F,Pt,Pt),i.norm==="gn"&&(A.setPipeline(_.moments),A.dispatchWorkgroups(te,Pt,Pt),A.setPipeline(_.moments_finish),A.dispatchWorkgroups(1,1,1),A.setPipeline(_.norm),A.dispatchWorkgroups(H,Pt,Pt)),A.end(),e.queue.submit([ae.finish()])}const le=e.createCommandEncoder(),he=le.beginComputePass();he.setBindGroup(0,R),he.setPipeline(_.classify),he.dispatchWorkgroups(H,Pt,Pt),he.end(),le.copyBufferToBuffer(C,0,L,0,l*4),e.queue.submit([le.finish()]),yield L.mapAsync(GPUMapMode.READ);const me=new Float32Array(new Uint32Array(L.getMappedRange()));L.unmap();const ce=yield e.popErrorScope();if(ce)throw new Error(`webgpu-native inference failed: ${ce.message}`);return[me]})}}finally{for(;w-- >0;)yield e.popErrorScope().catch(()=>{})}})}const Vs="v1",Ja="brainchop:webgpu-v4-profile:",ei=720*60*60*1e3,Pn=256*64,an=4,Ho=2,$o=an*64*Ho,So=16,ti=120,ni=140,As=220,zs=550,si=450,Wn=64,Cs=8,ss=Wn+2*Cs,Bs=24,Kt=12,Ln=6,Fs=9*Bs*3*Ln,Ls=Fs/2,rs=new Map,Mo=new WeakMap,ms=new WeakMap,oi=/\b(?:nvidia|geforce|rtx|gtx|quadro|tesla|amd|radeon|ryzen|intel|arc|uhd|iris|apple|qualcomm|adreno|arm|mali|immortalis|powervr|microsoft|swiftshader|llvmpipe|mesa)\b/i;function Xo(e){var t;return(t=e==null?void 0:e.navigator)!=null?t:globalThis.navigator}function Hs(e){var t;if(e&&"storage"in e)return e.storage;try{return(t=globalThis.localStorage)!=null?t:null}catch(n){return null}}function jo(e){var t;if(e&&typeof e.search=="string")return e.search;try{return((t=globalThis.location)==null?void 0:t.search)||""}catch(n){return""}}function Kn(e){var t;return typeof(e==null?void 0:e.now)=="function"?e.now():typeof((t=globalThis.performance)==null?void 0:t.now)=="function"?globalThis.performance.now():Date.now()}function Yo(e){return typeof(e==null?void 0:e.wallNow)=="function"?e.wallNow():Date.now()}function ko(e,t=void 0){var o,a,r,i,u;const n=String((u=(i=t!=null?t:(a=(o=globalThis.navigator)==null?void 0:o.userAgentData)==null?void 0:a.platform)!=null?i:(r=globalThis.navigator)==null?void 0:r.platform)!=null?u:""),s=String(e||"");return/Linux/i.test(n)&&!/Android/i.test(n)&&/\bMesa\b/i.test(s)&&/\bIntel\b/i.test(s)&&/\b(?:WHL|KBL|CFL|SKL|CML)\b/i.test(s)}function Xs(e){const t=String(e||"").trim().toLowerCase();return t==="single"||t==="pipelined"||t==="paced"||t==="calibrate"?t:t==="chunked"?"paced":""}function js(e=void 0){var s;let t=e;if(t===void 0)try{t=((s=globalThis.location)==null?void 0:s.search)||""}catch(o){t=""}const n={mode:"",exec:""};if(!t)return n;try{const o=new URLSearchParams(t),a=(o.get("webgpuMode")||"").trim().toLowerCase();a==="low-memory"||a==="lowmem"||a==="low_memory"||a==="128m"?n.mode="low-memory":a==="standard"||a==="std"?n.mode="standard":a==="recalibrate"||a==="reset"?n.mode="recalibrate":a==="probe"&&(n.mode="probe"),n.exec=Xs(o.get("webgpuExec"))}catch(o){}return n}function ri(e,t=void 0){if(!e||!e.quantize8Bit)return e;const n=js(t);if(!n.mode&&!n.exec)return e;const s=lt({},e);return n.mode==="low-memory"?(s.forceLowMem128=!0,s.webgpuExecMode=n.exec||"paced",s.__v4PlanReasonOverride="url-override"):n.mode==="standard"?(s.forceLowMem128=!1,n.exec&&(s.webgpuExecMode=n.exec),s.__v4PlanReasonOverride="url-override"):n.mode==="recalibrate"?(s.recalibrate=!0,n.exec&&(s.webgpuExecMode=n.exec)):n.mode==="probe"?(s.recalibrate=!0,s.forceProbe=!0,n.exec&&(s.webgpuExecMode=n.exec)):n.exec&&(s.webgpuExecMode=n.exec,s.__v4PlanReasonOverride="url-override"),s}function ai(e,t=null){var s,o;if(!e)return"";if(typeof e.__glRenderer=="string")return e.__glRenderer;let n="";try{const a=Xo(t),r=!!(a&&/Firefox/i.test(a.userAgent||"")),i=typeof globalThis.OffscreenCanvas!="undefined"?new globalThis.OffscreenCanvas(1,1):typeof globalThis.document!="undefined"?globalThis.document.createElement("canvas"):null,u=(s=i==null?void 0:i.getContext)==null?void 0:s.call(i,"webgl2",{powerPreference:"high-performance"});if(u){if(r)n=String(u.getParameter(u.RENDERER)||"");else{const l=u.getExtension("WEBGL_debug_renderer_info");n=String((l?u.getParameter(l.UNMASKED_RENDERER_WEBGL):u.getParameter(u.RENDERER))||"")}(o=u.getExtension("WEBGL_lose_context"))==null||o.loseContext()}}catch(a){}return e.__glRenderer=n,n}function jn(e,t=null){var $,M,h,x,P,y;const n=(e==null?void 0:e.__adapterInfo)||(e==null?void 0:e.adapterInfo)||{},s=String(n.vendor||"").trim().toLowerCase(),o=String(n.architecture||"").trim().toLowerCase(),a=Xo(t),r=String((M=($=t==null?void 0:t.userAgent)!=null?$:a==null?void 0:a.userAgent)!=null?M:""),i=String((y=(P=(x=t==null?void 0:t.platform)!=null?x:(h=a==null?void 0:a.userAgentData)==null?void 0:h.platform)!=null?P:a==null?void 0:a.platform)!=null?y:""),u=/Android/i.test(r)||/Android/i.test(i),l=!u&&(s==="apple"||/Mac|iPhone|iPad|iPod/i.test(`${i} ${r}`)&&!["intel","amd","nvidia","microsoft"].includes(s)),c=!l&&!u&&(/Win/i.test(i)||/Windows/i.test(r)),m=!l&&!c&&!u&&(/Linux/i.test(i)||/Linux/i.test(r)),d=typeof(e==null?void 0:e.__glRenderer)=="string"?e.__glRenderer:!l&&!s&&!(t!=null&&t.skipGlProbe)?ai(e,t):"",f=`${n.device||""} ${n.description||""} ${d}`.trim(),p=s||(/\bintel\b/i.test(d)?"intel":/\bmicrosoft\b|\bbasic render\b/i.test(d)?"microsoft":/\bnvidia\b/i.test(d)?"nvidia":/\bamd\b|\bradeon\b/i.test(d)?"amd":""),g=c&&(p==="microsoft"||p==="intel"&&!/\bArc\b/i.test(f)&&(/^gen-(9|11|12lp)/i.test(o)||/(?:UHD|HD)\s+Graphics|Iris(?:\(R\))?\s*(?:Plus|Xe)|Pentium|Celeron/i.test(f))),w=m&&(s==="intel"&&/^gen-9/i.test(o)||ko(d,i||"Linux")||ko(n.description||"",i||"Linux")||p==="intel"&&/\b(?:WHL|KBL|CFL|SKL|CML|UHD\s+Graphics\s+6[0-3]0|HD\s+Graphics\s+(?:5[0-3]0|6[0-3]0))\b/i.test(f)),k=`${s} ${o} ${n.device||""} ${n.description||""} ${d}`.trim(),_=!l&&(k===""||/^(?:brave|unknown|generic|webgl|webgpu|default|\s)+$/i.test(k)||!oi.test(k)&&!/^gen-\d/i.test(o));return{os:l?"apple":c?"windows":u?"android":m?"linux":"other",vendor:p,arch:o,desc:f,glRenderer:d,isApple:l,isWindows:c,isLinux:m,isAndroid:u,isWindowsSharedIgpu:g,isLinuxIntelGen9:w,isMaskedGpu:_}}function Ys(e,t=null,n=null){var f,p,g,w;const s=t||jn(e,n),o=(e==null?void 0:e.limits)||{},a=(e==null?void 0:e.__adapterInfo)||(e==null?void 0:e.adapterInfo)||{},r=Number(o.maxStorageBufferBindingSize||0),i=Number(o.maxBufferSize||0),u=(p=(f=e==null?void 0:e.features)==null?void 0:f.has)!=null&&p.call(f,"shader-f16")?1:0,c=!!((w=(g=e==null?void 0:e.features)==null?void 0:g.has)!=null&&w.call(g,"subgroups"))?`${a.subgroupMinSize|0}-${a.subgroupMaxSize|0}`:"none",d=([a.vendor||"",a.architecture||"",a.device||"",a.description||"",s.glRenderer||""].map(k=>String(k).trim().toLowerCase().replace(/\s+/g," ")).filter(Boolean).join("/")||"masked").slice(0,96);return[Vs,s.os,`sb=${r}`,`mb=${i}`,`f16=${u}`,`sg=${c}`,d].join("|")}function Ks(e){return`${Ja}${e}`}function Ko(e){return e?(e.__v4Calib instanceof Map||(e.__v4Calib=new Map),e.__v4Calib):null}function ds(e,t){return!e||typeof e!="object"||e.version!==Vs||typeof e.ts!="number"||!Number.isFinite(e.ts)?!1:t-e.ts<=ei}function Zo(e,t,n=null){const s=Yo(n),o=Ko(e),a=o==null?void 0:o.get(t);if(ds(a,s))return a;const r=Hs(n);let i=!1;if(r&&typeof r.getItem=="function")try{const u=r.getItem(t);if(i=!0,u){const l=JSON.parse(u);if(ds(l,s))return o==null||o.set(t,l),l}}catch(u){}if(!i){const u=rs.get(t);if(ds(u,s))return o==null||o.set(t,u),u}return null}function Qo(e,t,n,s=null){var i;const o=lt({version:Vs,ts:Yo(s)},n);(i=Ko(e))==null||i.set(t,o);const a=Hs(s);let r=!1;if(a&&typeof a.setItem=="function")try{a.setItem(t,JSON.stringify(o)),r=!0}catch(u){}return r||rs.set(t,o),o}function ii(e,t=null,n=null){const s=t||(e?Ks(Ys(e,null,n)):null);if(e&&(e.__v4Calib instanceof Map&&(s?e.__v4Calib.delete(s):e.__v4Calib.clear()),delete e.__v4WinCalibrated,delete e.__v4WinFast,delete e.__v4MsPerStrip,delete e.__v4Recalibrated,delete e.__v4ProbeDone),s){rs.delete(s);const o=Hs(n);if(o&&typeof o.removeItem=="function")try{o.removeItem(s)}catch(a){}}else rs.clear()}function li(e,t="device-lost",n=null){if(!e)return null;const s=jn(e,n),o=Ys(e,s,n),a=Ks(o),r=Zo(e,a,n)||{};return Qo(e,a,kt(lt({},r),{safeMode:"low-memory-paced",safeModeReason:t}),n)}function Po(e){return!Number.isFinite(e)||e>=zs?"very-slow":e>=As?"moderate":"fast"}function ui(e){const t=Kt*ss,n=Kt*Wn,s=(a,r)=>Array.from({length:a},(i,u)=>r(u)).join("");if(e){const a=()=>{let i="";for(let u=0;u<Ln;u+=2){const l=u*4,c=u/2;i+=`      {
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
`}return i},r=(i,u)=>`    for (var ic : u32 = 0u; ic < ${Kt}u; ic = ic + 1u) {
      let base = row_off + ic * ${ss}u;
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
@group(0) @binding(4) var<uniform> w_eff_u : array<vec4<u32>, ${Ls}>;

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
  let x_pad = x4 + ${Cs}u;
  let y = (wid.y * 4u + lid.y) & 255u;
  let z = wid.z & ${an-1}u;
${s(Bs,i=>`  var a_${i} = vec4<f16>(0.0h);
`)}
  for (var tap_yz : u32 = 0u; tap_yz < 9u; tap_yz = tap_yz + 1u) {
    let dz = tap_yz / 3u;
    let dy = tap_yz - dz * 3u;
    let z_src = (z + dz + ${an-1}u) & ${an-1}u;
    let y_src = (y + dy * 5u + 251u) & 255u;
    let row_off = (z_src * 256u + y_src) * ${t}u + x_pad;
    let wbu_tap = tap_yz * 216u;
${r("act8_0",0)}${r("act8_1",Kt)}  }

  let y_base = (z * 256u + y) * ${n}u + x4;
${s(Kt,i=>`  y8_0[y_base + ${i*Wn}u] = pack4x8unorm(vec4<f32>(a_${i}) * 0.5 + vec4<f32>(0.5));
`)}${s(Kt,i=>`  y8_1[y_base + ${i*Wn}u] = pack4x8unorm(vec4<f32>(a_${i+Kt}) * 0.5 + vec4<f32>(0.5));
`)}
}`}const o=(a,r,i)=>{const u=r*4,l=()=>s(3,m=>{const d=r+m,f=u+m*4;return`      {
        let w0 = w_eff[wb + ${d}u];
        let w1 = w_eff[wb + ${Ln+d}u];
        let w2 = w_eff[wb + ${2*Ln+d}u];
        a_${f}     = fma(vn, vec4<f32>(w0.x), fma(vc, vec4<f32>(w1.x), fma(vp, vec4<f32>(w2.x), a_${f})));
        a_${f+1} = fma(vn, vec4<f32>(w0.y), fma(vc, vec4<f32>(w1.y), fma(vp, vec4<f32>(w2.y), a_${f+1})));
        a_${f+2} = fma(vn, vec4<f32>(w0.z), fma(vc, vec4<f32>(w1.z), fma(vp, vec4<f32>(w2.z), a_${f+2})));
        a_${f+3} = fma(vn, vec4<f32>(w0.w), fma(vc, vec4<f32>(w1.w), fma(vp, vec4<f32>(w2.w), a_${f+3})));
      }
`}),c=(m,d)=>`    for (var ic : u32 = 0u; ic < ${Kt}u; ic = ic + 1u) {
      let base = row_off + ic * ${ss}u;
      let uL = ${m}[base - 2u];
      let uN = ${m}[base - 1u];
      let uC = ${m}[base];
      let uP = ${m}[base + 1u];
      let uR = ${m}[base + 2u];
      let u_neg = (uL >> 24u) | (uN << 8u);
      let u_pos = (uP >> 8u) | (uR << 24u);
      let vn = unpack4x8unorm(u_neg) - vec4<f32>(0.02745098);
      let vc = unpack4x8unorm(uC) - vec4<f32>(0.02745098);
      let vp = unpack4x8unorm(u_pos) - vec4<f32>(0.02745098);
      let wb = wb_tap + (${d}u + ic) * ${3*Ln}u;
${l()}    }
`;return`@compute @workgroup_size(64, 4, 1)
fn ${a}(@builtin(local_invocation_id) lid : vec3<u32>,
                @builtin(workgroup_id) wid : vec3<u32>) {
  let x4 = lid.x;
  let x_pad = x4 + ${Cs}u;
  let y = (wid.y * 4u + lid.y) & 255u;
  let z = wid.z & ${an-1}u;
${s(Kt,m=>`  var a_${u+m} = vec4<f32>(0.0);
`)}
  for (var tap_yz : u32 = 0u; tap_yz < 9u; tap_yz = tap_yz + 1u) {
    let dz = tap_yz / 3u;
    let dy = tap_yz - dz * 3u;
    let z_src = (z + dz + ${an-1}u) & ${an-1}u;
    let y_src = (y + dy * 5u + 251u) & 255u;
    let row_off = (z_src * 256u + y_src) * ${t}u + x_pad;
    let wb_tap = tap_yz * ${Bs*3*Ln}u;
${c("act8_0",0)}${c("act8_1",Kt)}  }

  let y_base = (z * 256u + y) * ${n}u + x4;
${s(Kt,m=>`  ${i}[y_base + ${m*Wn}u] = pack4x8unorm(a_${u+m} * 0.5 + vec4<f32>(0.5));
`)}
}`};return`@group(0) @binding(0) var<storage, read> act8_0 : array<u32>;
@group(0) @binding(1) var<storage, read> act8_1 : array<u32>;
@group(0) @binding(2) var<storage, read_write> y8_0 : array<u32>;
@group(0) @binding(3) var<storage, read_write> y8_1 : array<u32>;
@group(0) @binding(4) var<storage, read> w_eff : array<vec4<f32>>;

${o("main_lo",0,"y8_0")}

${o("main_hi",3,"y8_1")}`}function ci(e,t){return ke(this,null,function*(){let n=Mo.get(e);n||(n=new Map,Mo.set(e,n));const s=t?"f16":"f32";let o=n.get(s);return o||(o=ke(null,null,function*(){const a=ui(t),r=e.createShaderModule({code:a});if(t){const m=yield e.createComputePipelineAsync({layout:"auto",compute:{module:r,entryPoint:"main"}});return{main:m,bgl:m.getBindGroupLayout(0)}}const i=e.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]}),u=e.createPipelineLayout({bindGroupLayouts:[i]}),[l,c]=yield Promise.all([e.createComputePipelineAsync({layout:u,compute:{module:r,entryPoint:"main_lo"}}),e.createComputePipelineAsync({layout:u,compute:{module:r,entryPoint:"main_hi"}})]);return{lo:l,hi:c,bgl:i}}).catch(a=>{throw n.delete(s),a}),n.set(s,o)),o})}function fi(n){return ke(this,arguments,function*(e,t={}){var r,i;const s=(t==null?void 0:t.env)||null;if(typeof(t==null?void 0:t.runProbe)=="function"){const u=yield t.runProbe(e),l=Math.max(.1,Number((r=u==null?void 0:u.probeMs)!=null?r:u)||.1),c=Number.isFinite(u==null?void 0:u.estFullLayerMs)?u.estFullLayerMs:l*(Pn/$o),m=(u==null?void 0:u.tier)||Po(c);return{probeMs:l,warmupMs:Number((i=u==null?void 0:u.warmupMs)!=null?i:0),estFullLayerMs:c,msPerStrip24:c/Pn,tier:m,abortedEarly:!!(u!=null&&u.abortedEarly)}}const o=ms.get(e);if(o)return o;const a=ke(null,null,function*(){var _,b;const u=t.hasF16!==void 0?!!t.hasF16:!!((b=(_=e==null?void 0:e.features)==null?void 0:_.has)!=null&&b.call(_,"shader-f16")),l=GPUBufferUsage.STORAGE,c=GPUBufferUsage.COPY_DST,m=GPUBufferUsage.UNIFORM,d=an*256*Kt*ss*4,f=an*256*Kt*Wn*4,p=u?Ls*16:Fs*16,g=[],w=typeof e.pushErrorScope=="function"&&typeof e.popErrorScope=="function";let k=!1;w&&(e.pushErrorScope("out-of-memory"),k=!0);try{const $=yield ci(e,u),M=(S,U)=>{const R=e.createBuffer({size:S,usage:U});return g.push(R),R},h=M(d,l),x=M(d,l),P=M(f,l),y=M(f,l),W=M(p,(u?m:l)|c);if(u){const S=new Uint32Array(Ls*4);S.fill(2703171871),e.queue.writeBuffer(W,0,S)}else{const S=new Float32Array(Fs*4);for(let U=0;U<S.length;U++)S[U]=U&1?-.01:.01;e.queue.writeBuffer(W,0,S)}const z=e.createBindGroup({layout:$.bgl,entries:[{binding:0,resource:{buffer:h}},{binding:1,resource:{buffer:x}},{binding:2,resource:{buffer:P}},{binding:3,resource:{buffer:y}},{binding:4,resource:{buffer:W}}]}),C=(S,U,R,E)=>{for(let T=0;T<E;T++)if(u){const F=S.beginComputePass();F.setPipeline($.main),F.setBindGroup(0,z),F.dispatchWorkgroups(1,U,R),F.end()}else{const F=S.beginComputePass();F.setPipeline($.lo),F.setBindGroup(0,z),F.dispatchWorkgroups(1,U,R),F.end();const H=S.beginComputePass();H.setPipeline($.hi),H.setBindGroup(0,z),H.dispatchWorkgroups(1,U,R),H.end()}},L=e.createCommandEncoder();C(L,So,1,1);const G=Kn(s);e.queue.submit([L.finish()]),yield e.queue.onSubmittedWorkDone();const V=Math.max(.1,Kn(s)-G);let ee;if(V>=ti){const S=V*(Pn/So);ee={probeMs:V,warmupMs:V,estFullLayerMs:S,msPerStrip24:S/Pn,tier:"very-slow",abortedEarly:!0}}else{const S=()=>ke(null,null,function*(){const H=e.createCommandEncoder();C(H,64,an,Ho);const te=Kn(s);return e.queue.submit([H.finish()]),yield e.queue.onSubmittedWorkDone(),Math.max(.1,Kn(s)-te)}),U=yield S(),R=U>=ni?U:yield S(),E=Math.min(U,R),T=E*(Pn/$o),F=Po(T);ee={probeMs:E,warmupMs:V,estFullLayerMs:T,msPerStrip24:T/Pn,tier:F,abortedEarly:!1}}if(k){k=!1;const S=yield e.popErrorScope();if(S){const U=new Error(`WebGPU micro-probe out of memory: ${S.message||"allocation failed"}`);throw U.oomError=S,U}}return ee}finally{for(const $ of g)try{$.destroy()}catch(M){}if(k){k=!1;try{yield e.popErrorScope()}catch($){}}}}).finally(()=>{ms.delete(e)});return ms.set(e,a),a})}function Bn(e){const t=Math.floor(e/1048576);return t<=128?"limit<=128M":`limit<=${t}M`}function gs(e,t){const n=Math.max(8,Number(t)||24)/24,s=Math.max(.35,Math.min(1,n*n));return Math.max(.005,Math.min(2,e*s))}function _s(e){return e.chan===15||Array.isArray(e.dilations)&&e.dilations.length>=25}function Jo(o,a){return ke(this,arguments,function*(e,t,n=null,s={}){var V,ee,S,U,R,E,T,F,H,te,Y;const r=(s==null?void 0:s.env)||null,i=jn(e,r),u=Ys(e,i,r),l=Ks(u),c=(e==null?void 0:e.limits)||{},m=Math.min((V=c.maxStorageBufferBindingSize)!=null?V:1/0,(ee=c.maxBufferSize)!=null?ee:1/0),d=t.cs>=8&&t.cs%4===0,f=Number((S=s.actBytes)!=null?S:0),p=Number((U=s.outBufBytes)!=null?U:0),g=(f>m||p>m)&&d,w=js(jo(r)),k=Xs(n==null?void 0:n.webgpuExecMode)||w.exec,_=(n==null?void 0:n.forceLowMem128)===!0?!0:(n==null?void 0:n.forceLowMem128)===!1?!1:w.mode==="low-memory"?!0:w.mode==="standard"?!1:null,b=!!(w.mode==="low-memory"||w.mode==="standard"||w.exec||(n==null?void 0:n.__v4PlanReasonOverride)==="url-override"),$=(n==null?void 0:n.forceProbe)===!0||w.mode==="probe"&&!(e!=null&&e.__v4ProbeDone);(w.mode==="recalibrate"||w.mode==="probe"||(n==null?void 0:n.recalibrate)===!0)&&!(e!=null&&e.__v4Recalibrated)&&(ii(e,l,r),e&&(e.__v4Recalibrated=!0));const h=({layout:j,execMode:le,reason:he,tier:me=null,probeMs:ce=null,estFullLayerMs:Z=null,msPerStrip:ae=null,fromCache:A=!1,safeMode:Q=!1})=>{const N=g||j==="LowMem128"&&d?"LowMem128":"std",re=N==="std"&&(le==="paced"||le==="calibrate");return e&&Number.isFinite(ae)&&(e.__v4MsPerStrip=ae),{layout:N,execMode:le,chunkableStd:re,reason:he,tier:me,probeMs:ce,estFullLayerMs:Z,msPerStrip:ae,fromCache:A,safeMode:Q,fingerprint:u,storageKey:l,platform:i}};if((n==null?void 0:n.__v4PlanReasonOverride)==="safe-mode-retry")return h({layout:d?"LowMem128":"std",execMode:"paced",reason:"safe-mode-retry",safeMode:!0});const x=$?null:Zo(e,l,r);if(!$&&(_!==null||k!=="")){let j="std",le="";g?(j="LowMem128",le=Bn(m)):_===!0?j=d?"LowMem128":"std":_===!1?j="std":i.isWindowsSharedIgpu&&t.cs>=24&&d?(j="LowMem128",le="hint:win-igpu"):i.isLinuxIntelGen9&&_s(t)&&d?(j="LowMem128",le="hint:intel-gen9"):(x==null?void 0:x.safeMode)==="low-memory-paced"&&d?(j="LowMem128",le="cached-safe-mode"):(x==null?void 0:x.tier)==="very-slow"&&d&&(j="LowMem128",le="cached-probe");let he=k;he||(_===!0?he="paced":i.isApple?he="single":i.isWindowsSharedIgpu||i.isLinuxIntelGen9?he="paced":he="pipelined");const me=g&&_===!1?Bn(m):b?"url-override":le||"override";return h({layout:j,execMode:he,reason:me,tier:(R=x==null?void 0:x.tier)!=null?R:null,probeMs:(E=x==null?void 0:x.probeMs)!=null?E:null,estFullLayerMs:(T=x==null?void 0:x.estFullLayerMs)!=null?T:null,msPerStrip:x!=null&&x.msPerStrip24?gs(x.msPerStrip24,t.cs):null,fromCache:!!x,safeMode:(x==null?void 0:x.safeMode)==="low-memory-paced"})}if(i.isApple&&!$)return(x==null?void 0:x.safeMode)==="low-memory-paced"?h({layout:d?"LowMem128":"std",execMode:"paced",reason:"cached-safe-mode",fromCache:!0,safeMode:!0}):h({layout:g?"LowMem128":"std",execMode:"single",reason:g?Bn(m):"apple"});if(!$&&(x==null?void 0:x.safeMode)==="low-memory-paced")return i.isWindows&&e&&(e.__v4WinCalibrated=!0,e.__v4WinFast=!1),h({layout:d?"LowMem128":"std",execMode:"paced",reason:"cached-safe-mode",tier:(F=x.tier)!=null?F:"very-slow",probeMs:(H=x.probeMs)!=null?H:null,estFullLayerMs:(te=x.estFullLayerMs)!=null?te:null,msPerStrip:x.msPerStrip24?gs(x.msPerStrip24,t.cs):null,fromCache:!0,safeMode:!0});if(!$&&i.isLinuxIntelGen9){const j=g||_s(t)&&d;return h({layout:j?"LowMem128":"std",execMode:"paced",reason:g?Bn(m):"hint:intel-gen9"})}if(!$&&i.isWindowsSharedIgpu){e&&(e.__v4WinCalibrated=!0,e.__v4WinFast=!1);const j=g||t.cs>=24&&d;return h({layout:j?"LowMem128":"std",execMode:"paced",reason:g?Bn(m):"hint:win-igpu"})}let P=!$&&x&&x.tier&&Number.isFinite(x.estFullLayerMs)?x:null,y=!!P;if(!P)try{const j=yield fi(e,{hasF16:s.hasF16,runProbe:s.runProbe,env:r});P=Qo(e,l,{tier:j.tier,probeMs:Number(j.probeMs.toFixed(2)),estFullLayerMs:Number(j.estFullLayerMs.toFixed(1)),msPerStrip24:j.msPerStrip24,safeMode:null,safeModeReason:null},r),e&&(e.__v4ProbeDone=!0),y=!1}catch(j){const le=er(j,e,!!(e!=null&&e.__isLost));if(le==="device-lost")throw j;const he=le==="oom"?"very-slow":"moderate";P={tier:he,probeMs:null,estFullLayerMs:he==="very-slow"?zs:As,msPerStrip24:(he==="very-slow"?zs:As)/Pn},y=!1}i.isWindows&&e&&(e.__v4WinCalibrated=!0,e.__v4WinFast=P.tier==="fast");const W=Number(P.estFullLayerMs),z=!!(i.isMaskedGpu&&P.tier==="moderate"&&W>=si&&(t.cs>=24||_s(t))),C=g||d&&(P.tier==="very-slow"||z),L=k||(P.tier==="fast"?"pipelined":"paced");let G;return g?G=Bn(m):y?G="cached-probe":Number.isFinite(P.probeMs)?G=`probe:${Number(P.probeMs).toFixed(1)}ms`:G="probe:fallback",h({layout:C?"LowMem128":"std",execMode:L,reason:G,tier:P.tier,probeMs:(Y=P.probeMs)!=null?Y:null,estFullLayerMs:Number.isFinite(W)?W:null,msPerStrip:Number.isFinite(P.msPerStrip24)?gs(P.msPerStrip24,t.cs):null,fromCache:y,safeMode:!1})})}function pi(e,t=null){var o,a;const n=t?` | ${t.chan}ch(cs=${t.cs})/${(a=(o=t.dilations)==null?void 0:o.length)!=null?a:"?"}L`:"",s=Number.isFinite(e==null?void 0:e.estFullLayerMs)?` | est24ch=${Math.round(e.estFullLayerMs)}ms(${e.tier})`:"";return`[WebGPU-V4] layout=${e.layout} exec=${e.execMode} reason=${e.reason}${s}${n}`}function mi(e,t=10){return ke(this,null,function*(){return e?e.__isLost?!0:!e.lost||typeof e.lost.then!="function"?!1:Promise.race([e.lost.then(n=>(e.__isLost=!0,(n==null?void 0:n.reason)!=="destroyed")),new Promise(n=>setTimeout(()=>n(!!e.__isLost),t))]):!1})}function er(e,t=null,n=!1){if(n||t!=null&&t.__isLost)return"device-lost";if(e!=null&&e.oomError)return"oom";const s=String((e==null?void 0:e.message)||e||"");return/\bdevice(?:\s+was|\s+is)?\s+lost\b|gpu\s+reset|engine\s+reset|\btdr\b|instance\s+dropped|device\s+destroyed/i.test(s)?"device-lost":/out[- ]of[- ]memory|\boom\b|allocation\s+failed|failed\s+to\s+allocate|exceeds\s+device\s+limit|binding\s+size|maxbuffersize|maxstoragebufferbinding/i.test(s)?"oom":null}function di(r){return ke(this,arguments,function*({device:e,modelEntry:t,runAttempt:n,requestFreshDevice:s,onRetry:o=null,env:a=null}){var i;try{return yield n(e,t,{isRetry:!1})}catch(u){const l=!!(t!=null&&t.quantize8Bit),c=yield mi(e,(i=a==null?void 0:a.lostWaitMs)!=null?i:10),m=er(u,e,c),d=(e==null?void 0:e.__v4LastPlan)||null,f=(d==null?void 0:d.layout)==="LowMem128"&&(d==null?void 0:d.execMode)==="paced"||(t==null?void 0:t.forceLowMem128)===!0&&Xs(t==null?void 0:t.webgpuExecMode)==="paced",g=js(jo(a)).mode==="standard"||(t==null?void 0:t.forceLowMem128)===!1;if(!l||!m||f||g||typeof s!="function")throw u;li(e,m,a);const w=yield s({failedDevice:e,failureKind:m,error:u});if(!w||w.__isLost){const _=new Error(`WebGPU safe-mode retry aborted: could not acquire fresh GPUDevice after ${m} (${(u==null?void 0:u.message)||u})`);throw _.priorWebGpuError=u,_}const k=kt(lt({},t),{forceLowMem128:!0,webgpuExecMode:"paced",__v4PlanReasonOverride:"safe-mode-retry"});o==null||o({failureKind:m,error:u,retryEntry:k,freshDevice:w});try{return yield n(w,k,{isRetry:!0})}catch(_){throw _&&typeof _=="object"&&(_.priorWebGpuError=u),_}}})}const gi={grayMatter:[2,6,7,8,9,10,14,15,16,17],whiteMatter:[1,5],csf:[3,4,11,12]};function Rn(e,t,n,s,o){var r;const a=Number((r=e[t])!=null?r:n);if(!Number.isFinite(a)||a<s||a>o)throw new Error(`${t} must be between ${s} and ${o}, got ${e[t]}`);return a}function bs(e,t,n){let s=0;for(const o of e||[]){if(!Number.isInteger(o)||o<0||o>=t||o>=32)throw new Error(`Invalid ${n} tissue label ${o} for ${t} classes`);s=(s|1<<o)>>>0}return s}function _i(e,t){if(!Number.isInteger(t)||t<2||t>32)throw new Error(`Native WebGL2 grouped probabilities require 2..32 classes, got ${t}`);const n=lt(lt({},gi),e.probabilityGroups||{});return{temperature:Rn(e,"softmaxTemperature",1,1e-6,1e6),supportTemperature:Rn(e,"brainSupportTemperature",1,1e-6,1e6),supportPower:Rn(e,"brainSupportPower",1,1e-6,1e6),sigma:Rn(e,"partialVolumeSigma",0,0,2),grayMask:bs(n.grayMatter,t,"gray-matter"),whiteMask:bs(n.whiteMatter,t,"white-matter"),csfMask:bs(n.csf,t,"CSF")}}function hs(e,t,n,s,o,a){const[r,i,u]=n,l=r*i,c=o.length-1>>1;for(let m=0;m<u;m++)for(let d=0;d<i;d++)for(let f=0;f<r;f++){const p=m*l+d*r+f,g=s===1?f:s===r?d:m,w=s===1?r:s===r?i:u;let k=0;for(let _=-c;_<=c;_++){const b=g+_;b<0||b>=w||(k+=o[_+c]*e[p+_*s])}t[p]=k/a}}function bi(e,t,n,s){const[o,a,r]=n,i=o*a*r;if(!Array.isArray(e)||e.length!==3||e.some(f=>f.length!==i)||t.length!==i)throw new Error("Native WebGL2 tissue-prior dimensions do not match");const u=Rn(s,"partialVolumeSigma",0,0,2),l=Rn(s,"brainSupportPower",1,1e-6,1e6);let c=null,m=null,d=1;if(u>0){const f=Math.max(1,Math.round(3*u));m=new Float32Array(f*2+1),d=0;for(let p=-f;p<=f;p++){const g=Math.exp(-.5*p*p/(u*u));m[p+f]=g,d+=g}c=new Float32Array(i)}for(const f of e){let p=f;m&&(hs(f,c,n,1,m,d),hs(c,f,n,o,m,d),hs(f,c,n,o*a,m,d),p=c);for(let g=0;g<i;g++){const w=Math.pow(Math.max(0,Math.min(1,t[g])),l);f[g]=Math.max(0,Math.min(1,p[g]*w))}}return e}const X=256,wt=64,Qt=8,pt=wt+2*Qt,hn=pt*4,et=X*64,Xn=X*X*2,os=9216,tr=os*8,Us=[1,3,5,7,13,19,31,19,13,7,5,3,1],ft=(e,t)=>Array.from({length:e},(n,s)=>t(s)).join(""),nr=280,sr=150,hi=55,ws=112;let Ws=0;function Rs(e,t){const n=Math.floor(e/4),s=e%4,o=s===0?n:n+1,a=n,r=s*8,i=s===0?0:32-r;return(e&63|(o&15)<<6|(a&15)<<10|(r&31)<<14|(i&31)<<19|(t?1:0)<<24)>>>0}function or(e,t){var a,r;if(!((r=(a=e==null?void 0:e.features)==null?void 0:a.has)!=null&&r.call(a,"subgroups"))||t!=null&&t.disableSubgroups)return"none";if(t!=null&&t.forceSubgroupMode)return t.forceSubgroupMode;const n=e.__adapterInfo||e.adapterInfo||{},s=n.subgroupMinSize|0,o=n.subgroupMaxSize|0;return s===32&&o===32?"sg32":s===64&&o===64?"sg64":s>=32&&o<=64?"sg32_64":s>=8&&o<=32?"sg_small":"none"}function rr(e){switch(e){case"sg32":return"subgroups32";case"sg64":return"subgroups64-bf";case"sg32_64":return"subgroups32-64";case"sg_small":return"subgroups8-32";default:return"shared-8KiB"}}function ar(){return typeof requestAnimationFrame!="function"?new Promise(e=>setTimeout(e,0)):new Promise(e=>{let t=!1;const n=()=>{t||(t=!0,e())},s=setTimeout(n,16);requestAnimationFrame(()=>{clearTimeout(s),setTimeout(n,0)})})}function ir(e,t,n){let s=t,o=null,a=null,r=performance.now(),i=performance.now();function u(g,w,k){return ke(this,arguments,function*(c,m,d,{forceUiYield:f=!1,emitTick:p=!0}={}){o&&(yield o,o=null);const _=performance.now();e.queue.submit([c.finish()]);const b=e.createCommandEncoder(),$=e.queue.onSubmittedWorkDone().then(()=>{const h=performance.now(),x=Math.max(_,r),P=Math.max(0,h-x);h>r&&(r=h),m>=256&&P>.2&&(s=Math.max(.005,Math.min(2,.7*s+.3*(P/m))),e.__v4MsPerStrip=s)});o=a,a=$,p&&n&&n(d);const M=performance.now();return(f||M-i>=hi)&&(yield ar(),i=performance.now()),b})}function l(){return ke(this,null,function*(){o&&(yield o,o=null)})}return{submitChunk:u,waitBeforeFinalSubmit:l,getMsPerStrip:()=>s,setMsPerStrip:c=>{s=Math.max(.005,Math.min(2,c)),e.__v4MsPerStrip=s,r=performance.now()}}}function Zs(e,t,n){const s=e.isFull?et:e.mainStrips.length,o=e.isFull||!e.extStrips?0:e.extStrips.length,a=t+1<n?e.isFull?et:e.normStrips?e.normStrips.length:0:0,r=Math.max(16,Math.round(a*.12));return t===0?{convWork:Math.max(64,Math.round(s*.12)),normWork:r}:{convWork:s+o,normWork:r}}function lr(e,t){let n=0;for(let o=0;o<t;o++){const a=Zs(e.layers[o],o,t);n+=a.convWork+a.normWork}const s=e.clsSkipped?e.clsStrips.length:et;return n+=Math.max(64,Math.round(s*.2)),Math.max(1,n)}const ur=new Float32Array(1),wi=new Uint32Array(ur.buffer);function qs(e){ur[0]=e;const t=wi[0],n=t>>>16&32768,s=t>>>23&255;let o=t&8388607;if(s===255)return n|31744|(o?512:0);let a=s-127+15;return a<=0?a<-10?n:(o=(o|8388608)>>>1-a,n|o+4096>>>13):a>=31?n|31744:n|Math.min(31744,(a<<10)+(o+4096>>>13))}function vi(e){const t=new Uint16Array(e.length);for(let n=0;n<e.length;n++)t[n]=qs(e[n]);return t}const gn=new Map,xi=12,cr=new WeakMap,yi=new WeakMap;function $i(e){let t=2166136261,n=2654435769;const s=e.byteLength>>>2;if((e.byteOffset&3)===0){const o=new Uint32Array(e.buffer,e.byteOffset,s);for(let a=0;a<o.length;a++){const r=o[a];t=Math.imul(t^r,16777619)>>>0,n=Math.imul(n^(r<<13|r>>>19),2246822507)>>>0}}else for(let o=0;o<s*4;o+=4){const a=e[o]|e[o+1]<<8|e[o+2]<<16|e[o+3]<<24;t=Math.imul(t^a,16777619)>>>0,n=Math.imul(n^(a<<13|a>>>19),2246822507)>>>0}for(let o=s*4;o<e.byteLength;o++)t=Math.imul(t^e[o],16777619)>>>0;return`${e.byteLength}_${t.toString(16)}_${n.toString(16)}`}function Si(e,t,n,s){const o=s!=null&&s.classifierBias?JSON.stringify(s.classifierBias):"",a=`${$i(e)}|${n.chan}|${n.cs}|${n.nclass}|${n.norm}|${n.eps}|${o}`;if(gn.has(a)){const i=gn.get(a);return gn.delete(a),gn.set(a,i),i}const r=Ai(t,n);if(gn.size>=xi){const i=gn.keys().next().value;gn.delete(i)}return gn.set(a,r),r}function Qs(e,t){let n=e.get(t);return n||(n=new Map,e.set(t,n)),n}function Zt(e,t,n){let s=e.get(t);return s||(s=n().catch(o=>{throw e.delete(t),o}),e.set(t,s)),s}function as(e,t){let n=0;return{alloc:(o,a)=>{const r=Math.max(16,Math.ceil(o/16)*16),i=e.createBuffer({size:r,usage:a});return t.push(i),n+=r,i},getBytes:()=>n,resetBytes:()=>{n=0}}}const mn=new WeakMap;function vn(e){const t=e?mn.get(e):null;if(t){mn.delete(e),t.inUse=!1;for(const n of t.buffers)n.destroy();t.buffers.length=0}}function fr(e,t,n){const s=mn.get(e);if(s){if(s.key===t&&!s.inUse)return s.inUse=!0,s;if(s.inUse){const r=n();return kt(lt({key:t},r),{inUse:!0,pooled:!1})}mn.delete(e);for(const r of s.buffers)r.destroy();s.buffers.length=0}const o=n(),a=kt(lt({key:t},o),{inUse:!0,pooled:!0});return mn.set(e,a),a}function Vt(e,t,n){return e.createShaderModule({label:t,code:n})}function Js(e,t,n,s,o){return ke(this,null,function*(){const a=e.createBindGroupLayout({entries:o.map((r,i)=>typeof r=="string"?{binding:i,visibility:GPUShaderStage.COMPUTE,buffer:{type:r}}:{binding:i,visibility:GPUShaderStage.COMPUTE,buffer:r})});try{const r=yield e.createComputePipelineAsync({label:t,layout:e.createPipelineLayout({bindGroupLayouts:[a]}),compute:{module:n,entryPoint:s}});return{bgl:a,pipe:r}}catch(r){if(n!=null&&n.getCompilationInfo){const i=yield n.getCompilationInfo().catch(()=>null),u=i?i.messages.filter(l=>l.type==="error"):[];if(u.length)throw new Error(`meshnet_fast_v4 [${t}] WGSL error: `+u.map(l=>`L${l.lineNum}:${l.linePos} ${l.message}`).join(" | "))}throw r}})}function Is(e,t){const n=t?`enable f16;
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
  let dstX4 = ${Qt}u + wid.x * 8u + x4Loc;
  for (var s : u32 = 0u; s < 4u; s = s + 1u) {
    let zLoc = s * 8u + zOff;
    let r = zLoc * 33u + xBase;
    inp_4[((Z0 + zLoc) * 256u + Y) * ${pt}u + dstX4] =
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
  let dstX4 = ${Qt}u + wid.x * 8u + x4Loc;
  for (var s : u32 = 0u; s < 4u; s = s + 1u) {
    let zl = s * 8u + zOff;
    let r = zl * 33u + xBase;
    inp_4[((Z0 + zl) * 256u + Y) * ${pt}u + dstX4] =
      ${o}(${s}(sh[r]), ${s}(sh[r + 1u]), ${s}(sh[r + 2u]), ${s}(sh[r + 3u]));
  }
}`}function pr(){return`
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
}`}function Mi(){return`
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
}`}function ki(){return`
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
}`}function Ao(){return`
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
}`}function cn(e,t,n,s,o){return ke(this,null,function*(){const a=Qs(yi,e);let r=a.get(t);return r||(r=ke(null,null,function*(){const i=Vt(e,t,n());return Js(e,t,i,s,o)}).catch(i=>{throw a.delete(t),i}),a.set(t,r)),r})}function zo(e,t,n,s,o){t.fill(0);const a=X*X*X;if(!(o&&e[0]===s&&e[a-1]===s))return{hasBgSkip:!1};if(n.fill(0),(e instanceof Uint8Array||e instanceof Uint8ClampedArray)&&(e.byteOffset&3)===0&&Number.isInteger(s)&&s>=0&&s<=255){const u=new Uint32Array(e.buffer,e.byteOffset,a>>>2),l=new Uint32Array(n.buffer,n.byteOffset,X*X>>>2),c=(s&255)*16843009>>>0;let m=0;for(let d=0;d<X;d++)for(let f=0;f<16384;f++)l[f]|=u[m++]^c}else{let u=0;const l=X*X;for(let c=0;c<X;c++)for(let m=0;m<l;m++,u++)e[u]!==s&&(n[m]=1)}let i=0;for(let u=0;u<X;u++){const l=u*X;for(let c=0;c<X;c++)n[l+c]!==0&&(t[c*X+u]=1,i++)}return i===0||i>=6e4?{hasBgSkip:!1}:{hasBgSkip:!0}}function mr(e){return e?`${e.grayMask}_${e.whiteMask}_${e.csfMask}_${e.temperature}_${e.supportTemperature}`:"seg"}function dr(c,m,d,f,p,g,w){return ke(this,arguments,function*(e,t,n,s,o,a,r,{includeCls:i=!0,sequential:u=!1,shouldAbort:l=null}={}){var Q;const k=Qs(cr,e),_=s?1:0,b=o||"none",$=r.useUniformWeff?1:0,M=(N,re,ue,oe)=>Js(e,N,re,ue,oe),h=["storage","storage","storage","storage"],x=["read-only-storage","storage","storage","storage","storage","storage","read-only-storage","storage","uniform","uniform","uniform"],P=["read-only-storage","read-only-storage","storage","storage","read-only-storage","uniform"],y=["storage","storage","storage","storage","read-only-storage","read-only-storage",{type:"uniform",hasDynamicOffset:!0,minBindingSize:32}],W=["storage","storage","storage","storage","read-only-storage","read-only-storage","read-only-storage","uniform"],z=["read-only-storage","read-only-storage","read-only-storage","read-only-storage","storage","storage",r.useUniformWeff?"uniform":"read-only-storage","read-only-storage",{type:"uniform",hasDynamicOffset:!0,minBindingSize:32}],C=["read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","storage","uniform","uniform","uniform"],L=`128|init|${t.cs}|${t.activation}|${_}`,G=`128|conv0|${t.cs}|${t.dilations[0]}|${t.norm}|${_}|${b}`,V=`128|prep|${t.chan}|${t.cs}|${t.activation}|${t.norm}|${_}`,ee=`128|flush|${t.cs}|${_}`,S=`128|norm|${t.cs}|${t.activation}|${t.norm}|${_}`,U=`128|conv|${t.chan}|${t.cs}|${t.activation}|${t.norm}|${$}|${_}|${b}`,R=`128|cls|${t.chan}|${t.cs}|${t.nclass}|${(Q=n==null?void 0:n.clsK4)!=null?Q:0}|${r.numConvs}|${t.activation}|${t.norm}|${_}|${mr(a)}`,E=()=>Zt(k,L,()=>{const N=Vt(e,"init_act8_128",r.initActWgsl());return M("init_act8_128",N,"main",h)}),T=()=>Zt(k,G,()=>ke(null,null,function*(){const N=Vt(e,"conv0_128",r.conv0Wgsl()),re=yield Promise.all(r.halfPass0?[M("conv0_128_lo",N,"main_lo",x),M("conv0_128_hi",N,"main_hi",x),M("conv0_128_bg_lo",N,"main_bg_lo",x),M("conv0_128_bg_hi",N,"main_bg_hi",x)]:[M("conv0_128",N,"main",x),M("conv0_128_bg",N,"main_bg",x)]);return r.halfPass0?{lo:re[0],hi:re[1],bgLo:re[2],bgHi:re[3]}:{main:re[0],bg:re[1]}})),F=()=>Zt(k,V,()=>ke(null,null,function*(){const N=Vt(e,"prep_128",r.prepWgsl()),[re,ue]=yield Promise.all([M("moments_finish_128",N,"moments_finish",P),M("prep_weff_128",N,"prep_weff",P)]);return{pMomFin:re,pPrepW:ue}})),H=()=>Zt(k,ee,()=>{const N=Vt(e,"flush_128",r.flushWgsl());return M("flush_stage_128",N,"main",y)}),te=()=>Zt(k,S,()=>ke(null,null,function*(){const N=Vt(e,"norm_128",r.normWgsl()),[re,ue]=yield Promise.all([M("norm_quant8_128",N,"main",W),M("norm_halo_fill_128",N,"norm_halo_fill",W)]);return{pNorm:re,pNormHalo:ue}})),Y=()=>i?Zt(k,R,()=>{const N=Vt(e,"cls_128",r.clsWgsl());return M("classify_v4_128",N,"main",C)}):Promise.resolve(null),j=()=>Zt(k,U,()=>ke(null,null,function*(){const N=Vt(e,"conv_128",r.convWgsl());if(r.halfPassConv){const[D,J,K,ve,ge,xe]=yield Promise.all([M("conv_128_lo",N,"main_lo",z),M("conv_128_hi",N,"main_hi",z),M("conv_128_ext_lo",N,"main_ext_lo",z),M("conv_128_ext_hi",N,"main_ext_hi",z),M("conv_128_bg_lo",N,"main_bg_lo",z),M("conv_128_bg_hi",N,"main_bg_hi",z)]);return{lo:D,hi:J,extLo:K,extHi:ve,bgLo:ge,bgHi:xe}}const[re,ue,oe]=yield Promise.all([M("conv_128",N,"main",z),M("conv_128_ext",N,"main_ext",z),M("conv_128_bg",N,"main_bg",z)]);return{main:re,ext:ue,bg:oe}}));if(u){for(const N of[E,F,H,te,T,j,Y]){if(l!=null&&l())return null;yield N()}return null}const[le,he,me,ce,Z,ae,A]=yield Promise.all([E(),T(),F(),H(),te(),Y(),j()]);return{pInit:le,pMomFin:me.pMomFin,pPrepW:me.pPrepW,pFlush:ce,pNorm:Z.pNorm,pNormHalo:Z.pNormHalo,pCls:ae,pConv0:he,pConv:A}})}function gr(m,d,f,p,g,w,k,_){return ke(this,arguments,function*(e,t,n,s,o,a,r,i,{includeCls:u=!0,sequential:l=!1,shouldAbort:c=null}={}){var Q;const b=Qs(cr,e),$=s?1:0,M=o||"none",h=a?1:0,x=i.useUniformWeff?1:0,P=i.chunkableStd?1:0,y=(N,re,ue,oe)=>Js(e,N,re,ue,oe),W=["storage","storage"],z=["read-only-storage","storage","storage","read-only-storage","read-only-storage","storage","storage","read-only-storage","uniform"],C=["read-only-storage","read-only-storage","storage","storage","storage","storage","read-only-storage","uniform"],L=["storage","storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","uniform"],G=["read-only-storage","read-only-storage","storage","storage","storage","storage",i.useUniformWeff?"uniform":"read-only-storage","read-only-storage",i.chunkableStd?{type:"uniform",hasDynamicOffset:!0,minBindingSize:32}:"uniform"],V=["read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","read-only-storage","storage","read-only-storage","uniform"],ee=`std|init|${t.cs}|${t.activation}|${$}|${h}`,S=`std|conv0|${t.cs}|${t.dilations[0]}|${t.norm}|${$}|${M}|${h}`,U=`std|prep|${t.chan}|${t.cs}|${t.activation}|${t.norm}|${$}|${h}`,R=`std|norm|${t.cs}|${t.activation}|${t.norm}|${$}|${h}`,E=`std|conv|${t.chan}|${t.cs}|${t.activation}|${t.norm}|${x}|${$}|${M}|${h}${P?"|chk1":""}`,T=`std|cls|${t.chan}|${t.cs}|${t.nclass}|${(Q=n==null?void 0:n.clsK4)!=null?Q:0}|${t.activation}|${t.norm}|${$}|${h}|${mr(r)}`,F=()=>Zt(b,ee,()=>{const N=Vt(e,"init_act8",i.initActWgsl());return y("init_act8",N,"main",W)}),H=()=>Zt(b,S,()=>ke(null,null,function*(){const N=Vt(e,"conv0",i.conv0Wgsl()),re=yield Promise.all(i.halfPass0?[y("conv0_lo",N,"main_lo",z),y("conv0_hi",N,"main_hi",z),y("conv0_bg_lo",N,"main_bg_lo",z),y("conv0_bg_hi",N,"main_bg_hi",z)]:[y("conv0",N,"main",z),y("conv0_bg",N,"main_bg",z)]);return i.halfPass0?{lo:re[0],hi:re[1],bgLo:re[2],bgHi:re[3]}:{main:re[0],bg:re[1]}})),te=()=>Zt(b,U,()=>ke(null,null,function*(){const N=Vt(e,"prep",i.prepWgsl()),[re,ue]=yield Promise.all([y("moments_finish",N,"moments_finish",C),y("prep_weff",N,"prep_weff",C)]);return{pMomFin:re,pPrepW:ue}})),Y=()=>Zt(b,R,()=>ke(null,null,function*(){const N=Vt(e,"norm",i.normWgsl()),[re,ue]=yield Promise.all([y("norm_quant8",N,"main",L),y("norm_halo_fill",N,"norm_halo_fill",L)]);return{pNorm:re,pNormHalo:ue}})),j=()=>u?Zt(b,T,()=>{const N=Vt(e,"cls",i.clsWgsl());return y("classify_v4",N,"main",V)}):Promise.resolve(null),le=()=>Zt(b,E,()=>ke(null,null,function*(){const N=Vt(e,"conv",i.convWgsl());if(i.halfPassConv){const[oe,D,J,K]=yield Promise.all([y("conv_lo",N,"main_lo",G),y("conv_hi",N,"main_hi",G),y("conv_ext_lo",N,"main_ext_lo",G),y("conv_ext_hi",N,"main_ext_hi",G)]);return{lo:oe,hi:D,extLo:J,extHi:K}}const[re,ue]=yield Promise.all([y("conv",N,"main",G),y("conv_ext",N,"main_ext",G)]);return{main:re,ext:ue}}));if(l){for(const N of[F,te,Y,H,le,j]){if(c!=null&&c())return null;yield N()}return null}const[he,me,ce,Z,ae,A]=yield Promise.all([F(),H(),te(),Y(),j(),le()]);return{pInit:he,pMomFin:ce.pMomFin,pPrepW:ce.pPrepW,pNorm:Z.pNorm,pNormHalo:Z.pNormHalo,pCls:ae,pConv0:me,pConv:A}})}function Co(e,t,n,s,o){n.fill(0);const a=o&&e[0]===0&&e[e.length-1]===0;let r=0,i=0;if(!a){if(s)for(let u=0;u<X;u++){const l=u*X*hn;for(let c=0;c<X;c++){let m=l+c*hn+32;for(let d=0;d<X;d++,i++,m++){const f=e[i];t[m]=f===0?0:qs(f)}}}else for(let u=0;u<X;u++){const l=u*X*hn;for(let c=0;c<X;c++){const m=u*X*X+c*X;t.set(e.subarray(m,m+X),l+c*hn+32)}}return{hasBgSkip:!1}}for(let u=0;u<X;u++){const l=u*X*hn;for(let c=0;c<X;c++){let m=!1,d=l+c*hn+32;for(let f=0;f<X;f++,i++,d++){const p=e[i];p!==0?(t[d]=s?qs(p):p,m=!0):t[d]=0}m&&(n[u*X+c]=1,r++)}}return r===0||r>=6e4?{hasBgSkip:!1}:{hasBgSkip:!0}}function Vn(e,t){const n=new Uint8Array(X*X);for(let s=0;s<X;s++){const o=s*X,a=s-t,r=s+t;for(let i=0;i<X;i++){if(!e[o+i])continue;const u=i-t,l=i+t;if(a>=0){const c=a*X;u>=0&&(n[c+u]=1),n[c+i]=1,l<X&&(n[c+l]=1)}if(u>=0&&(n[o+u]=1),n[o+i]=1,l<X&&(n[o+l]=1),r>=0&&r<X){const c=r*X;u>=0&&(n[c+u]=1),n[c+i]=1,l<X&&(n[c+l]=1)}}}return n}function Pi(e,t){const n=new Uint8Array(X*X),s=new Uint8Array(X*X),o=new Int32Array(X+1);for(let a=0;a<X;a++){const r=a*X;for(let i=0;i<X;i++)o[i+1]=o[i]+e[r+i];for(let i=0;i<X;i++)o[Math.min(X-1,i+t)+1]-o[Math.max(0,i-t)]>0&&(n[r+i]=1)}for(let a=0;a<X;a++){for(let r=0;r<X;r++)o[r+1]=o[r]+n[r*X+a];for(let r=0;r<X;r++)o[Math.min(X-1,r+t)+1]-o[Math.max(0,r-t)]>0&&(s[r*X+a]=1)}return s}function vs(e){const t=new Uint8Array(et);for(let n=0;n<X;n++){const s=n*X,o=n*64;for(let a=0;a<64;a++){const r=s+(a<<2);e[r]|e[r+1]|e[r+2]|e[r+3]&&(t[o+a]=1)}}return t}function Zn(e){const t=new Uint8Array(X*X);for(let n=0;n<X;n++){const s=n*X,o=n*64;for(let a=0;a<64;a++)if(e[o+a]){const r=s+(a<<2);t[r]=1,t[r+1]=1,t[r+2]=1,t[r+3]=1}}return t}function Qn(e){let t=0;for(let o=0;o<et;o++)t+=e[o];const n=new Uint32Array(t);let s=0;for(let o=0;o<X;o++){const a=o*64;for(let r=0;r<64;r++)e[a+r]&&(n[s++]=o<<8|r)}return n}function _n(e){let t=0;for(let n=0;n<e.length;n++)t+=e[n];return t}function Bo(e){const t=new Uint8Array(et);if(e===1024)for(let n=0;n<32;n++)for(let s=0;s<32;s++){const o=n*8+(n*3+s*5&7),a=s*2+(n+s&1);t[o*64+a]=1}else if(e===512)for(let n=0;n<32;n++)for(let s=0;s<16;s++){const o=n*8+(n*3+s*5&7),a=s*4+(n+s*3&3);t[o*64+a]=1}else for(let n=0;n<16;n++)for(let s=0;s<16;s++){const o=n*16+(n*7+s*3&15),a=s*4+(n+s*3&3);t[o*64+a]=1}return t}function _r(e,t,n,s){const o=n.length,a=()=>({isFull:!0,mode:"full",writtenMask:null,computedMask:null,mainStrips:null,extStrips:null,nMomExt:0,normStrips:null,haloRows:null,bgStrip:null,extWeight:0});if(!s||!t.hasBgSkip)return{clsSkipped:!1,clsStrips:null,layers:Array.from({length:o},a)};const r=vs(Pi(e,3)),i=_n(r)<15800,u=i?Qn(r):null,l=new Array(o);let c=null;for(let _=0;_<o;_++){const b=n[_],$=Vn(_===0?e:c,b);if(_>0)for(let h=0;h<X;h++){const x=h<b||h>=X-b,P=h*X;for(let y=0;y<X;y++)(x||y<b||y>=X-b)&&($[P+y]=1)}c=$;const M=new Uint8Array(et);for(let h=0;h<X;h++){const x=h*X,P=h*64;for(let y=0;y<64;y++){const W=x+(y<<2);$[W]|$[W+1]|$[W+2]|$[W+3]||(M[P+y]=1)}}l[_]=M}const m=new Array(o);m[o-1]=r;for(let _=o-2;_>=0;_--)m[_]=vs(Vn(Zn(m[_+1]),n[_+1]));const d=i&&o>=4&&n[o-1]<=2&&n[o-2]<=4&&n[o-3]<=6,f=Math.max(1,o-3),p=new Array(o).fill(null),g=new Array(o).fill(null),w=new Array(o).fill(null);if(d){const b=(et-_n(m[o-1]))/et>=.52?256:512,$=1024,M=Bo(b),h=Bo($),x=m[o-1],P=new Uint8Array(et);let y=0;for(let W=0;W<et;W++)M[W]&&!x[W]&&(P[W]=1,y++);if(y>0&&y<=os&&_n(x)+y<=15360){p[o-1]=P,g[o-1]=new Uint8Array(et),w[o-1]=M;for(let W=o-2;W>=f;W--){const z=new Uint8Array(et),C=m[W+1],L=p[W+1];for(let T=0;T<et;T++)z[T]=C[T]|L[T];const G=vs(Vn(Zn(z),n[W+1])),V=new Uint8Array(et),ee=m[W];for(let T=0;T<et;T++)G[T]&&!ee[T]&&(V[T]=1);const S=W===f?h:M,U=new Uint8Array(et);let R=0,E=0;for(let T=0;T<et;T++)(V[T]||S[T])&&!ee[T]&&(U[T]=1,R++,S[T]&&E++);if(E===0||R>os||_n(ee)+R>15360){const T=W+1,F=m[T],H=g[T],te=new Uint8Array(et);let Y=0;for(let j=0;j<et;j++)(H[j]||h[j])&&!F[j]&&(te[j]=1,Y++);Y<=os&&_n(F)+Y<=15360&&(p[T]=te,w[T]=h);break}g[W]=V,p[W]=U,w[W]=S}}}const k=new Array(o);for(let _=0;_<o;_++){const b=_n(l[_]),$=et-b,M=p[_]!==null,h=M?_n(m[_])+_n(p[_]):1/0;if(b>=512&&$<=h){const x=new Uint8Array(et);let P=-1;for(let C=0;C<et;C++)l[_][C]?P<0&&(P=C):x[C]=1;const y=x.slice();y[P]=1;const W={z:P>>>6,yWg:P&63,packed:P>>>6<<8|P&63},z=Qn(x);k[_]={isFull:!1,mode:"rpure",writtenMask:x,computedMask:y,mainStrips:z,extStrips:_===0?null:new Uint32Array([W.packed]),nMomExt:_===0?0:1,normStrips:z,haloRows:null,bgStrip:W,extWeight:b}}else if(M&&h<=15360){const x=m[_],P=p[_],y=g[_],W=w[_],z=Qn(x),C=[],L=[];for(let U=0;U<X;U++){const R=U*64;for(let E=0;E<64;E++){const T=R+E;if(!P[T])continue;const F=U<<8|E;W[T]?C.push(F):L.push(F)}}const G=C.length;if(G===0){k[_]=a();continue}const V=new Uint32Array(C.length+L.length);V.set(C,0),V.set(L,C.length);const ee=new Uint8Array(et),S=new Uint8Array(et);for(let U=0;U<et;U++)ee[U]=x[U]|y[U],S[U]=x[U]|P[U];k[_]={isFull:!1,mode:"bwd",writtenMask:ee,computedMask:S,mainStrips:z,extStrips:V,nMomExt:G,normStrips:_+1<o?Qn(ee):null,haloRows:null,bgStrip:null,extWeight:(et-z.length)/G}}else k[_]=a()}for(let _=o-2;_>=0;_--)k[_].mode==="bwd"&&k[_+1].mode!=="bwd"&&(k[_]=a());for(let _=0;_<o-1;_++){const b=k[_];if(b.mode!=="rpure")continue;const $=k[_+1],M=$.isFull?new Uint8Array(X*X).fill(1):Vn(Zn($.computedMask),n[_+1]),h=Zn(b.writtenMask),x=[];for(let P=0;P<X;P++){const y=P*X;for(let W=0;W<X;W++)M[y+W]&&!h[y+W]&&x.push(P<<8|W)}x.length>0&&(b.haloRows=new Uint32Array(x))}return{clsSkipped:i,clsStrips:u,layers:k}}function Ai(e,t){const n=t.chan,s=t.cs,o=s/4,a=t.nclass,r=Math.ceil(a/4),{convs:i,affines:u,classifier:l}=e,c=i.length,m=27*o,d=9*s*3*o,f=s*r,p=(m+(c-1)*d+f)*4,g=new Float32Array(p),w=4*s,k=c*w,_=new Float32Array(k+r*4),b=(h,x,P)=>{if(t.norm!=="gn"||x>=n)return 1;const y=i[h],W=P*27,z=x*W;let C=0;for(let L=0;L<W;L++)C+=Math.abs(y.w[z+L]);return Math.max(C/16,1e-6)};for(let h=0;h<i[0].outC;h++){const x=b(0,h,i[0].inC),P=1/x;for(let y=0;y<27;y++)g[y*s+h]=i[0].w[h*27+y]*P;_[2*s+h]=t.eps/(x*x),i[0].bias&&(_[3*s+h]=i[0].bias[h])}for(let h=i[0].outC;h<s;h++)_[2*s+h]=t.eps;for(let h=1;h<c;h++){const x=i[h],P=(m+(h-1)*d)*4,y=h*w;for(let W=0;W<x.outC;W++){const z=b(h,W,x.inC),C=1/z,L=W>>>2,G=W&3;for(let V=0;V<9;V++)for(let ee=0;ee<x.inC;ee++)for(let S=0;S<3;S++){const U=V*3+S,R=P+(((V*s+ee)*3+S)*o+L)*4+G;g[R]=x.w[(W*x.inC+ee)*27+U]*C}_[y+2*s+W]=t.eps/(z*z),x.bias&&(_[y+3*s+W]=x.bias[W])}for(let W=x.outC;W<s;W++)_[y+2*s+W]=t.eps}for(let h=0;h<c;h++){const x=h*w,P=u[h];for(let y=0;y<n;y++)t.norm==="gn"?(_[x+y]=P!=null&&P.scale?P.scale[y]:1,_[x+s+y]=P!=null&&P.bias?P.bias[y]:0):(_[x+y]=1,_[x+s+y]=0)}const $=m+(c-1)*d,M=$*4;for(let h=0;h<n;h++)for(let x=0;x<a;x++)g[M+h*r*4+x]=l.w[x*l.inC+h];for(let h=0;h<r*4;h++)_[k+h]=h<a?l.bias?l.bias[h]:0:-1e30;return{wF32:g,wF16:vi(g),qmetaF32:_,w0Vec4s:m,hiddenVec4PerLayer:d,clsVec4Off:$,clsBiasOff:k,metaStride:w,clsK4:r}}function In(e){if(e==="gelu_tanh")return`fn act(x : f32) -> f32 {
  let u = clamp(0.7978845608028654 * (x + 0.044715 * x * x * x), -9.0, 9.0);
  return 0.5 * x * (1.0 + tanh(u));
}`;if(e==="relu")return"fn act(x : f32) -> f32 { return max(x, 0.0); }";if(e==="elu")return"fn act(x : f32) -> f32 { return select(exp(clamp(x, -20.0, 0.0)) - 1.0, x, x >= 0.0); }";throw new Error(`meshnet_fast_v4: unsupported activation '${e}'`)}function br(e){return e==="gelu_tanh"?{uZeroInt:7,uZeroFloat:7/255,uZeroWord:117901063,sterbenzSub:"1.02734375h",zeroBin:7}:e==="relu"?{uZeroInt:0,uZeroFloat:0,uZeroWord:0,sterbenzSub:"1.0h",zeroBin:0}:{uZeroInt:32,uZeroFloat:32/255,uZeroWord:538976288,sterbenzSub:"1.125h",zeroBin:32}}function hr({chan:e,clsK4:t,nclass:n,V4:s,suf:o,readBiasStmt:a,biasExpr:r,probCfg:i}){const u=`    var acc0 = ${s}(0.0${o});
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
${ft(4,d=>`    let l${d} = vec4<f32>(acc${d}) + vec4<f32>(${r(d)});
    let m${d} = l${d} > best_v;
    best_v = select(best_v, l${d}, m${d});
    best_k = select(best_k, vec4<u32>(k_base + ${d}u), m${d});
`)}  }

  labels8[row_idx * ${wt}u + x4] = best_k.x | (best_k.y << 8u) | (best_k.z << 16u) | (best_k.w << 24u);`;const l=`f32(${(1/Math.max(i.temperature,1e-6)).toExponential(8)})`,c=`f32(${(1/Math.max(i.supportTemperature,1e-6)).toExponential(8)})`,m=i.temperature===i.supportTemperature;return`  var max_v = vec4<f32>(-1.0e29);
  for (var k4 : u32 = 0u; k4 < ${t}u; k4 = k4 + 1u) {
${u}
${ft(4,d=>`    if (k_base + ${d}u < ${n}u) {
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
${u}
${ft(4,d=>`    let k${d} = k_base + ${d}u;
    if (k${d} < ${n}u) {
      let l${d} = vec4<f32>(acc${d}) + vec4<f32>(${r(d)});
      let v${d} = exp(clamp((l${d} - max_v) * ${l}, vec4<f32>(-80.0), vec4<f32>(0.0)));
      let s${d} = ${m?`v${d}`:`exp(clamp((l${d} - max_v) * ${c}, vec4<f32>(-80.0), vec4<f32>(0.0)))`};
      denom = denom + v${d};
      sup_denom = sup_denom + s${d};
      if (k${d} == 0u) { bg_w = s${d}; }
      let bit${d} = 1u << k${d};
      if ((${i.grayMask}u & bit${d}) != 0u) { gm_num = gm_num + v${d}; }
      if ((${i.whiteMask}u & bit${d}) != 0u) { wm_num = wm_num + v${d}; }
      if ((${i.csfMask}u & bit${d}) != 0u) { csf_num = csf_num + v${d}; }
    }
`)}  }

  let inv_den = vec4<f32>(1.0) / max(denom, vec4<f32>(1.0e-20));
  let gm = clamp(gm_num * inv_den, vec4<f32>(0.0), vec4<f32>(1.0));
  let wm = clamp(wm_num * inv_den, vec4<f32>(0.0), vec4<f32>(1.0));
  let csf = clamp(csf_num * inv_den, vec4<f32>(0.0), vec4<f32>(1.0));
  let sup = clamp(vec4<f32>(1.0) - bg_w / max(sup_denom, vec4<f32>(1.0e-20)), vec4<f32>(0.0), vec4<f32>(1.0));
  let vox_base = row_idx * ${X}u + x4 * 4u;
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
  }`}function wr({device:e,hasF16:t,nvox:n,outBufBytes:s,inpBuf:o,act8_0:a,labels8Buf:r,readbackBuf:i,pInit:u,bgInit:l,pCls:c,bgCls:m,clsUbo:d,packed:f,modelEntry:p,probCfg:g,canGpuProb:w,probSlots:k,ownedBuffers:_,mkBuf:b}){let $=!1,M=!1,h=!1,x=!1;const P=new Uint8Array(X*X);let y=null,W=null,z=null,C=null;const L=(F,H)=>e.createBindGroup({layout:F,entries:H.map((te,Y)=>({binding:Y,resource:te&&te.buffer?te:{buffer:te}}))});function G(){if(!y){const F=t?"prep_in_u8_f16":"prep_in_u8_f32";y=ke(null,null,function*(){const{bgl:H,pipe:te}=yield cn(e,F,()=>Is(!0,t),"main",["read-only-storage","storage","uniform"]);if(x)return null;const Y=b(256*4,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST),j=new Float32Array(256),le=L(H,[{buffer:r,offset:0,size:n},o,Y]);return{pipe:te,ubo:Y,lutF32:j,bg:le}}).catch(H=>{throw y=null,H})}return y}function V(){if(!W){const F=t?"prep_in_f32_f16":"prep_in_f32_f32";W=ke(null,null,function*(){const{bgl:H,pipe:te}=yield cn(e,F,()=>Is(!1,t),"main",["read-only-storage","storage","uniform"]);if(x)return null;const Y=b(16,GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST),j=new Float32Array(4),le=s>=n*4?L(H,[{buffer:r,offset:0,size:n*4},o,Y]):null,he=a.size>=n*4?L(H,[{buffer:a,offset:0,size:n*4},o,Y]):null;return{pipe:te,ubo:Y,f32Tmp:j,bgLabels:le,bgAct0:he}}).catch(H=>{throw W=null,H})}return W}function ee(){return z||(z=ke(null,null,function*(){const{bgl:F,pipe:H}=yield cn(e,"transpose_u8_v4",pr,"main",["read-only-storage","storage"]);if(x)return null;const te=L(F,[{buffer:r,offset:0,size:n},{buffer:o,offset:0,size:n}]);return{pipe:H,bg:te}}).catch(F=>{throw z=null,F})),z}function S(){return C||(C=ke(null,null,function*(){const[F,H,te,Y]=yield Promise.all([cn(e,"prob_unpack_two",ki,"main",["read-only-storage","storage","storage"]),cn(e,"prob_blur_axis",Ao,"blur_axis",["read-only-storage","storage","read-only-storage","uniform"]),cn(e,"prob_blur_z_gate",Ao,"blur_z_gate",["read-only-storage","storage","read-only-storage","uniform"]),cn(e,"transpose_f32",Mi,"main",["read-only-storage","storage"])]);if(x)return null;const j=GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST,le=144,he=b(le,j),me=b(le,j),ce=b(le,j),Z=N=>({buffer:N,offset:0,size:s}),ae=L(F.bgl,[Z(k.pass0HoldBuf),Z(k.y0),Z(k.y1)]),A=L(F.bgl,[Z(r),Z(k.b),Z(k.sup)]),Q=[k.y0,k.y1,k.b].map(N=>({buf:N,bgBlurX:L(H.bgl,[Z(N),Z(r),Z(k.sup),he]),bgBlurY:L(H.bgl,[Z(r),Z(N),Z(k.sup),me]),bgBlurZ:L(te.bgl,[Z(N),Z(r),Z(k.sup),ce]),bgTranspose:L(Y.bgl,[Z(r),Z(N)])}));return{pUnpack:F.pipe,pBlurAxis:H.pipe,pBlurZGate:te.pipe,pTransposeF32:Y.pipe,bgUnpack0:ae,bgUnpack1:A,tissues:Q,uboX:he,uboY:me,uboZ:ce,uboScratch:new ArrayBuffer(le),lastBlurKey:null}}).catch(F=>{throw C=null,F})),C}function U(){g?w&&S().catch(()=>{}):(G().catch(()=>{}),ee().catch(()=>{}))}function R(){x=!0}function E(he){return ke(this,arguments,function*({volume:F,ioOpts:H,useCone:te,padInputHost:Y,headRowHost:j,hasF16Flag:le}){var ce;if(H!=null&&H.gpuNativeInput){const Z=(ce=H.normOffset)!=null?ce:0,ae=H.normRange||1,A=F instanceof Uint8Array||F instanceof Uint8ClampedArray,Q=s>=n*4||a.size>=n*4;if(A){const oe=zo(F,j,P,Z,te),D=yield G();for(let J=0;J<256;J++)D.lutF32[J]=J===Z?0:(J-Z)/ae;return e.queue.writeBuffer(D.ubo,0,D.lutF32),e.queue.writeBuffer(r,0,F,0,n),{info:oe,runPrePasses(J,K){(!M||h)&&(J.clearBuffer(o),M=!0,h=!1);const ve=J.beginComputePass();if(ve.setPipeline(D.pipe),ve.setBindGroup(0,D.bg),ve.dispatchWorkgroups(8,X,8),ve.end(),K.push("preprocess"),$){const ge=J.beginComputePass();ge.setPipeline(u.pipe),ge.setBindGroup(0,l),ge.dispatchWorkgroups(1,X,X),ge.end(),K.push("preprocess"),$=!1}}}}if(Q){const oe=zo(F,j,P,Z,te),D=yield V(),J=!(s>=n*4),K=J?a:r,ve=J?D.bgAct0:D.bgLabels,ge=F instanceof Float32Array?F:Float32Array.from(F);return D.f32Tmp[0]=Z,D.f32Tmp[1]=ae,D.f32Tmp[2]=0,D.f32Tmp[3]=0,e.queue.writeBuffer(D.ubo,0,D.f32Tmp),e.queue.writeBuffer(K,0,ge,0,n),{info:oe,runPrePasses(xe,Pe){(!M||h)&&(xe.clearBuffer(o),M=!0,h=!1);const Oe=xe.beginComputePass();if(Oe.setPipeline(D.pipe),Oe.setBindGroup(0,ve),Oe.dispatchWorkgroups(8,X,8),Oe.end(),Pe.push("preprocess"),$||J){const Ae=xe.beginComputePass();Ae.setPipeline(u.pipe),Ae.setBindGroup(0,l),Ae.dispatchWorkgroups(1,X,X),Ae.end(),Pe.push("preprocess"),$=!1}}}}const N=new Float32Array(n);for(let oe=0;oe<n;oe++){const D=F[oe];N[oe]=D===Z?0:(D-Z)/ae}const re=Un(N,[X,X,X],[2,1,0]),ue=Co(re,Y,j,le,te);return e.queue.writeBuffer(o,0,Y),M=!0,h=!1,{info:ue,runPrePasses(oe,D){if($){const J=oe.beginComputePass();J.setPipeline(u.pipe),J.setBindGroup(0,l),J.dispatchWorkgroups(1,X,X),J.end(),D.push("preprocess"),$=!1}}}}const me=Co(F,Y,j,le,te);return e.queue.writeBuffer(o,0,Y),M=!0,h=!1,{info:me,runPrePasses(Z,ae){if($){const A=Z.beginComputePass();A.setPipeline(u.pipe),A.setBindGroup(0,l),A.dispatchWorkgroups(1,X,X),A.end(),ae.push("preprocess"),$=!1}}}})}function T(me){return ke(this,arguments,function*({enc:F,schedule:H,passCategories:te,u4Tmp:Y,ioOpts:j,paced:le=!1,onProgress:he=null}){const ce=H.clsSkipped?H.clsStrips.length:X;if(!g){Y[0]=f.clsVec4Off,Y[1]=f.clsBiasOff,Y[2]=H.clsSkipped?0:1,Y[3]=0,e.queue.writeBuffer(d,0,Y);{const ge=F.beginComputePass();ge.setPipeline(c.pipe),ge.setBindGroup(0,m),ce>0&&ge.dispatchWorkgroups(1,H.clsSkipped?1:64,ce),ge.end(),te.push("classify")}if(j!=null&&j.gpuNativeOutput){const ge=yield ee(),xe=F.beginComputePass();xe.setPipeline(ge.pipe),xe.setBindGroup(0,ge.bg),xe.dispatchWorkgroups(8,X,8),xe.end(),te.push("postprocess"),h=!0,F.copyBufferToBuffer(o,0,i,0,n),e.queue.submit([F.finish()]),yield i.mapAsync(GPUMapMode.READ);const Pe=new Uint8Array(i.getMappedRange()).slice();return i.unmap(),le&&he&&he(1,""),[Pe]}F.copyBufferToBuffer(r,0,i,0,s),e.queue.submit([F.finish()]),yield i.mapAsync(GPUMapMode.READ);const K=new Uint8Array(i.getMappedRange()),ve=new Float32Array(n);for(let ge=0;ge<n;ge++)ve[ge]=K[ge];return i.unmap(),le&&he&&he(1,""),[ve]}if(w){const K=yield S();Y[0]=f.clsVec4Off,Y[1]=f.clsBiasOff,Y[2]=H.clsSkipped?0:1,Y[3]=0,e.queue.writeBuffer(d,0,Y),Y[3]=1,e.queue.writeBuffer(k.clsUbo1,0,Y);{const ye=F.beginComputePass();ye.setPipeline(c.pipe),ye.setBindGroup(0,m),ce>0&&ye.dispatchWorkgroups(1,H.clsSkipped?1:64,ce),ye.end(),te.push("classify")}F.copyBufferToBuffer(r,0,k.pass0HoldBuf,0,s),H.clsSkipped&&F.clearBuffer(r,0,s);{const ye=F.beginComputePass();ye.setPipeline(c.pipe),ye.setBindGroup(0,k.bgCls1),ce>0&&ye.dispatchWorkgroups(1,H.clsSkipped?1:64,ce),ye.end(),te.push("classify")}$=!0;const ve=`${g.sigma}|${g.supportPower}`,ge=g.sigma>0,xe=ge?Math.max(1,Math.round(3*g.sigma)):0;if(K.lastBlurKey!==ve){const ye=new Uint32Array(K.uboScratch),Xe=new Float32Array(K.uboScratch);Xe.fill(0);let Ke=1;if(ge){Ke=0;for(let Qe=-xe;Qe<=xe;Qe++){const nt=Math.exp(-.5*Qe*Qe/(g.sigma*g.sigma));Xe[4+Qe+xe]=nt,Ke+=nt}}else Xe[4]=1;ye[1]=xe,Xe[2]=Ke,ye[0]=0,Xe[3]=1,e.queue.writeBuffer(K.uboX,0,K.uboScratch),ye[0]=1,e.queue.writeBuffer(K.uboY,0,K.uboScratch),ye[0]=2,Xe[3]=g.supportPower,e.queue.writeBuffer(K.uboZ,0,K.uboScratch),K.lastBlurKey=ve}{const ye=F.beginComputePass();ye.setPipeline(K.pUnpack),ye.setBindGroup(0,K.bgUnpack0),ye.dispatchWorkgroups(256,256,1),ye.end(),te.push("postprocess");const Xe=F.beginComputePass();Xe.setPipeline(K.pUnpack),Xe.setBindGroup(0,K.bgUnpack1),Xe.dispatchWorkgroups(256,256,1),Xe.end(),te.push("postprocess")}le&&(e.queue.submit([F.finish()]),yield e.queue.onSubmittedWorkDone(),he&&he(.992,""),yield ar(),F=e.createCommandEncoder());const Pe=!!(j!=null&&j.gpuNativeOutput);for(let ye=0;ye<3;ye++){const Xe=K.tissues[ye];if(ge){const Qe=F.beginComputePass();Qe.setPipeline(K.pBlurAxis),Qe.setBindGroup(0,Xe.bgBlurX),Qe.dispatchWorkgroups(4,64,X),Qe.end(),te.push("postprocess");const nt=F.beginComputePass();nt.setPipeline(K.pBlurAxis),nt.setBindGroup(0,Xe.bgBlurY),nt.dispatchWorkgroups(4,64,X),nt.end(),te.push("postprocess")}const Ke=F.beginComputePass();if(Ke.setPipeline(K.pBlurZGate),Ke.setBindGroup(0,Xe.bgBlurZ),Ke.dispatchWorkgroups(4,64,X),Ke.end(),te.push("postprocess"),Pe){const Qe=F.beginComputePass();Qe.setPipeline(K.pTransposeF32),Qe.setBindGroup(0,Xe.bgTranspose),Qe.dispatchWorkgroups(8,X,8),Qe.end(),te.push("postprocess")}else ye<2&&F.copyBufferToBuffer(r,0,Xe.buf,0,s)}const Oe=Pe?[k.y0,k.y1,k.b]:[k.y0,k.y1,r];F.copyBufferToBuffer(Oe[0],0,i,0,s),e.queue.submit([F.finish()]),yield i.mapAsync(GPUMapMode.READ);const Ae=new Float32Array(i.getMappedRange()).slice();i.unmap();const Ee=ye=>ke(null,null,function*(){const Xe=e.createCommandEncoder();Xe.copyBufferToBuffer(ye,0,i,0,s),e.queue.submit([Xe.finish()]),yield i.mapAsync(GPUMapMode.READ);const Ke=new Float32Array(i.getMappedRange()).slice();return i.unmap(),Ke}),Ie=yield Ee(Oe[1]),Ue=yield Ee(Oe[2]);return le&&he&&he(1,""),[Ae,Ie,Ue]}Y[0]=f.clsVec4Off,Y[1]=f.clsBiasOff,Y[2]=H.clsSkipped?0:1,Y[3]=0,e.queue.writeBuffer(d,0,Y);{const K=F.beginComputePass();K.setPipeline(c.pipe),K.setBindGroup(0,m),ce>0&&K.dispatchWorkgroups(1,H.clsSkipped?1:64,ce),K.end(),te.push("classify"),F.copyBufferToBuffer(r,0,i,0,s)}e.queue.submit([F.finish()]),yield i.mapAsync(GPUMapMode.READ);const Z=1/65535,ae=new Uint16Array(i.getMappedRange()),A=new Float32Array(n),Q=new Float32Array(n);for(let K=0;K<n;K++)A[K]=ae[K*2]*Z,Q[K]=ae[K*2+1]*Z;i.unmap(),Y[3]=1,e.queue.writeBuffer(d,0,Y);const N=e.createCommandEncoder();H.clsSkipped&&N.clearBuffer(r,0,s);const re=N.beginComputePass();re.setPipeline(c.pipe),re.setBindGroup(0,m),ce>0&&re.dispatchWorkgroups(1,H.clsSkipped?1:64,ce),re.end(),te.push("classify"),N.copyBufferToBuffer(r,0,i,0,s),e.queue.submit([N.finish()]),yield i.mapAsync(GPUMapMode.READ);const ue=new Uint16Array(i.getMappedRange()),oe=new Float32Array(n),D=new Float32Array(n);for(let K=0;K<n;K++)oe[K]=ue[K*2]*Z,D[K]=ue[K*2+1]*Z;i.unmap();const J=bi([A,Q,oe],D,[X,X,X],p);return j!=null&&j.gpuNativeOutput?J.map(K=>Un(K,[X,X,X],[2,1,0])):J})}return{prepareInput:E,finishAndReadback:T,warmupIoPipelines:U,dispose:R}}function vr(e,t){if(e==="sg32")return{decls:"",entryArgs:"",add:o=>`subgroupAdd(${o})`,min:o=>`subgroupMin(${o})`,max:o=>`subgroupMax(${o})`};const n=(o,a)=>{const r=u=>o==="+"?`  x = x + subgroupShuffleXor(x, ${u}u);`:`  x = ${o}(x, subgroupShuffleXor(x, ${u}u));`;return e==="sg64"?`fn ${a}(v : f32) -> f32 {
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
             @builtin(subgroup_size) sg_size : u32`,add:o=>`sg32_add(${o}, sg_size)`,min:o=>`sg32_min(${o}, sg_size)`,max:o=>`sg32_max(${o}, sg_size)`}}function xr({V4:e,sw:t,norm:n,writeMomFn:s,momParams:o,momArgs:a}){const r=n==="none",i=r?"vec2<f32>":"vec4<f32>",u=r?`fn sg32_pack1(a : ${e}, slane : u32, c_out : u32, ${o}) -> u32 {
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
`}function yr(e){const{cs:t,chan:n,nclass:s,clsK4:o,dilations:a,activation:r,norm:i,hasF16:u,subgroupMode:l="none",splitHalves:c,probCfg:m,chunkableStd:d=!1}=e,f=t/4,p=c?t/2:t,g=p*pt,w=p*wt,k=9*t*3*f,_=k,b=k+f,$=u&&f%2===0&&b*8<=65536,M=br(r),h=u?`enable f16;
`:"",x=u&&l!=="none",P=x?`enable subgroups;
`:"",y=u?"f16":"f32",W=u?"h":"f",z=`vec4<${y}>`,C=u?256:255,L=T=>{const F=T?".xzyw":"",H=(le,he,me)=>c&&he>=p?`y8_1[${le} + ${(he-p)*wt}u] = ${me};`:`y8_0[${le} + ${he*wt}u] = ${me};`;if(x&&(l==="sg32"||l==="sg64"||l==="sg32_64")){const le=vr(l,i);return{decls:le.decls,entryArgs:le.entryArgs,localHeader:"",emit:({accVar:he,cStart:me,cEnd:ce,hrExpr:Z,yRowExpr:ae,momMode:A,writeY8Expr:Q="true"})=>ft(ce-me,N=>{const re=me+N,ue=A==="ext_and_main"?`mom_ext[(${Z}) * ${t}u + ${re}u] = mv;
      mom_main[(row_idx * 2u + sg) * ${t}u + ${re}u] = mv;`:A==="ext_only"?`mom_ext[(${Z}) * ${t}u + ${re}u] = mv;`:`mom_main[(${Z}) * ${t}u + ${re}u] = mv;`;return i==="none"?`  {
    let f = vec4<f32>(${he}.v_${N}${F});
    let lmn = ${le.min("min(min(f.x, f.y), min(f.z, f.w))")};
    let lmx = ${le.max("max(max(f.x, f.y), max(f.z, f.w))")};
    let sp = lmx - lmn;
    let inv = select(0.0, 1.0 / sp, sp > 1e-7);
    if (${Q}) {
      ${H(ae,re,"pack4x8unorm((f - vec4<f32>(lmn)) * inv)")}
    }
    if (slane == 0u) {
      let mv = vec4<f32>(0.0, 0.0, lmn, sp);
      ${ue}
    }
  }
`:`  {
    let f = vec4<f32>(${he}.v_${N}${F});
    let ls = ${le.add("f.x + f.y + f.z + f.w")};
    let lq = ${le.add("dot(f, f)")};
    let lmn = ${le.min("min(min(f.x, f.y), min(f.z, f.w))")};
    let lmx = ${le.max("max(max(f.x, f.y), max(f.z, f.w))")};
    let sp = lmx - lmn;
    let inv = select(0.0, 1.0 / sp, sp > 1e-7);
    if (${Q}) {
      ${H(ae,re,"pack4x8unorm((f - vec4<f32>(lmn)) * inv)")}
    }
    if (slane == 0u) {
      let mv = vec4<f32>(ls, lq, lmn, sp);
      ${ue}
    }
  }
`})}}if(x&&l==="sg_small")return{decls:xr({V4:z,sw:F,norm:i,writeMomFn:`fn write_mom(c_out : u32, mv : vec4<f32>, ext_off : u32, main_off : u32, mom_mode : u32) {
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
`,emit:({accVar:me,cStart:ce,cEnd:Z,hrExpr:ae,yRowExpr:A,momMode:Q,writeY8Expr:N="true"})=>{const re=Q==="ext_and_main"?"1u":Q==="ext_only"?"2u":"0u",ue=Q==="main"?"0u":`(${ae}) * ${t}u`,oe=Q==="ext_only"?"0u":`(row_idx * 2u + sg) * ${t}u`;let D=`  let ep_ext_off = ${ue};
  let ep_main_off = ${oe};
`;for(let J=0;J<Z-ce;J+=4){const K=ce+J;D+=`  {
    let qw = reduce_pack4_sg(${me}.v_${J}, ${me}.v_${J+1}, ${me}.v_${J+2}, ${me}.v_${J+3}, h, slane, sg_size, sg_id, ${K}u, ep_ext_off, ep_main_off, ${re});
    if (${N}) {
      ${H(A,K,"qw.x")}
      ${H(A,K+1,"qw.y")}
      ${H(A,K+2,"qw.z")}
      ${H(A,K+3,"qw.w")}
    }
  }
`}return D}};const te=`    let c_out = c_base + slane;
    if (mom_mode == 0u) {
      mom_main[main_off + c_out] = mv;
    } else if (mom_mode == 1u) {
      mom_ext[ext_off + c_out] = mv;
      mom_main[main_off + c_out] = mv;
    } else {
      mom_ext[ext_off + c_out] = mv;
    }`;if(i==="none"&&u){const le=ft(31,me=>`    {
      let m = sh_mm[rb + ${me+1}u];
      rmn = min(rmn, m.x);
      rmx = max(rmx, m.y);
    }
`);return{decls:`var<workgroup> sh_mm  : array<vec2<f16>, 1024>;
var<workgroup> sh_res : array<vec2<f32>, 32>;
fn vec_mm16(a : vec4<f16>) -> vec2<f16> {
  return vec2<f16>(min(min(a.x, a.y), min(a.z, a.w)), max(max(a.x, a.y), max(a.z, a.w)));
}
fn reduce_pack4(
  a0 : ${z}, a1 : ${z}, a2 : ${z}, a3 : ${z},
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
${te}
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
`,emit:({accVar:me,cStart:ce,cEnd:Z,hrExpr:ae,yRowExpr:A,momMode:Q,writeY8Expr:N="true"})=>{const re=Q==="ext_and_main"?"1u":Q==="ext_only"?"2u":"0u",ue=Q==="main"?"0u":`(${ae}) * ${t}u`,oe=Q==="ext_only"?"0u":`(row_idx * 2u + sg) * ${t}u`;let D=`  let ep_ext_off = ${ue};
  let ep_main_off = ${oe};
`;for(let J=0;J<Z-ce;J+=4){const K=ce+J;D+=`  {
    let qw = reduce_pack4(${me}.v_${J}, ${me}.v_${J+1}, ${me}.v_${J+2}, ${me}.v_${J+3}, h, slane, ${K}u, ep_ext_off, ep_main_off, ${re});
    if (${N}) {
      ${H(A,K,"qw.x")}
      ${H(A,K+1,"qw.y")}
      ${H(A,K+2,"qw.z")}
      ${H(A,K+3,"qw.w")}
    }
  }
`}return D}}}if(i==="none"){const le=ft(32,me=>`    {
      let m = sh_mm[rb + ${me}u];
      rmn = min(rmn, m.x);
      rmx = max(rmx, m.y);
    }
`);return{decls:`var<workgroup> sh_mm  : array<vec2<f32>, 1024>;
var<workgroup> sh_res : array<vec2<f32>, 32>;
fn vec_mm(f : vec4<f32>) -> vec2<f32> {
  return vec2<f32>(min(min(f.x, f.y), min(f.z, f.w)), max(max(f.x, f.y), max(f.z, f.w)));
}
fn reduce_pack4(
  a0 : ${z}, a1 : ${z}, a2 : ${z}, a3 : ${z},
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
`,emit:({accVar:me,cStart:ce,cEnd:Z,hrExpr:ae,yRowExpr:A,momMode:Q,writeY8Expr:N="true"})=>{const re=Q==="ext_and_main"?"1u":Q==="ext_only"?"2u":"0u",ue=Q==="main"?"0u":`(${ae}) * ${t}u`,oe=Q==="ext_only"?"0u":`(row_idx * 2u + sg) * ${t}u`;let D=`  let ep_ext_off = ${ue};
  let ep_main_off = ${oe};
`;for(let J=0;J<Z-ce;J+=4){const K=ce+J;D+=`  {
    let qw = reduce_pack4(${me}.v_${J}, ${me}.v_${J+1}, ${me}.v_${J+2}, ${me}.v_${J+3}, h, slane, ${K}u, ep_ext_off, ep_main_off, ${re});
    if (${N}) {
      ${H(A,K,"qw.x")}
      ${H(A,K+1,"qw.y")}
      ${H(A,K+2,"qw.z")}
      ${H(A,K+3,"qw.w")}
    }
  }
`}return D}}}if(u){const le=ft(31,me=>{const ce=me+1;return`    {
      let s = sh_sq[rb + ${ce}u];
      let m = sh_mm[rb + ${ce}u];
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
  a0 : ${z}, a1 : ${z}, a2 : ${z}, a3 : ${z},
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
`,emit:({accVar:me,cStart:ce,cEnd:Z,hrExpr:ae,yRowExpr:A,momMode:Q,writeY8Expr:N="true"})=>{const re=Q==="ext_and_main"?"1u":Q==="ext_only"?"2u":"0u",ue=Q==="main"?"0u":`(${ae}) * ${t}u`,oe=Q==="ext_only"?"0u":`(row_idx * 2u + sg) * ${t}u`;let D=`  let ep_ext_off = ${ue};
  let ep_main_off = ${oe};
`;for(let J=0;J<Z-ce;J+=4){const K=ce+J;D+=`  {
    let qw = reduce_pack4(${me}.v_${J}, ${me}.v_${J+1}, ${me}.v_${J+2}, ${me}.v_${J+3}, h, slane, ${K}u, ep_ext_off, ep_main_off, ${re});
    if (${N}) {
      ${H(A,K,"qw.x")}
      ${H(A,K+1,"qw.y")}
      ${H(A,K+2,"qw.z")}
      ${H(A,K+3,"qw.w")}
    }
  }
`}return D}}}const Y=ft(32,le=>`    {
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
  a0 : ${z}, a1 : ${z},
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
`,emit:({accVar:le,cStart:he,cEnd:me,hrExpr:ce,yRowExpr:Z,momMode:ae,writeY8Expr:A="true"})=>{const Q=ae==="ext_and_main"?"1u":ae==="ext_only"?"2u":"0u",N=ae==="main"?"0u":`(${ce}) * ${t}u`,re=ae==="ext_only"?"0u":`(row_idx * 2u + sg) * ${t}u`;let ue=`  let ep_ext_off = ${N};
  let ep_main_off = ${re};
`;for(let oe=0;oe<me-he;oe+=2){const D=he+oe;ue+=`  {
    let qw = reduce_pack2(${le}.v_${oe}, ${le}.v_${oe+1}, h, slane, ${D}u, ep_ext_off, ep_main_off, ${Q});
    if (${A}) {
      ${H(Z,D,"qw.x")}
      ${H(Z,D+1,"qw.y")}
    }
  }
`}return ue}}},G=()=>`
@group(0) @binding(0) var<storage, read_write> act0 : array<u32>;
@group(0) @binding(1) var<storage, read_write> act1 : array<u32>;
@compute @workgroup_size(${pt}, 1, 1)
fn main(@builtin(local_invocation_id) lid : vec3<u32>,
        @builtin(workgroup_id) wid : vec3<u32>) {
  let row_base = (wid.z * 256u + wid.y) * ${g}u + lid.x;
  let val = ${M.uZeroWord}u;
  for (var c : u32 = 0u; c < ${p}u; c = c + 1u) {
    let idx = row_base + c * ${pt}u;
    act0[idx] = val;
    ${c?"act1[idx] = val;":""}
  }
}`,V=a[0];return{initActWgsl:G,conv0Wgsl:()=>{const T=!u&&c,F=L(!1),H=(ce,Z)=>{const ae=ce/4,A=Z/4;return ft(A-ae,Q=>{const N=ae+Q,re=N*4;return`          {
            let w0 = w16_4[wb + ${N}u];
            let w1 = w16_4[wb + ${f+N}u];
            let w2 = w16_4[wb + ${2*f+N}u];
            a_${re}     = fma(vn, ${z}(w0.x), fma(vc, ${z}(w1.x), fma(vp, ${z}(w2.x), a_${re})));
            a_${re+1} = fma(vn, ${z}(w0.y), fma(vc, ${z}(w1.y), fma(vp, ${z}(w2.y), a_${re+1})));
            a_${re+2} = fma(vn, ${z}(w0.z), fma(vc, ${z}(w1.z), fma(vp, ${z}(w2.z), a_${re+2})));
            a_${re+3} = fma(vn, ${z}(w0.w), fma(vc, ${z}(w1.w), fma(vp, ${z}(w2.w), a_${re+3})));
          }
`})},te=Math.floor(V/4),Y=V%4;let j="";Y===0?j=`
        let vn = inp_4[base - ${te}u];
        let vc = inp_4[base];
        let vp = inp_4[base + ${te}u];`:te===0&&Y===1?j=`
        let vL = inp_4[base - 1u];
        let vc = inp_4[base];
        let vR = inp_4[base + 1u];
        let vn = ${z}(vL.w, vc.xyz);
        let vp = ${z}(vc.yzw, vR.x);`:Y===1?j=`
        let vL = inp_4[base - ${te+1}u];
        let vN = inp_4[base - ${te}u];
        let vc = inp_4[base];
        let vP = inp_4[base + ${te}u];
        let vR = inp_4[base + ${te+1}u];
        let vn = ${z}(vL.w, vN.xyz);
        let vp = ${z}(vP.yzw, vR.x);`:Y===2?j=`
        let vL = inp_4[base - ${te+1}u];
        let vN = ${te===0?"inp_4[base]":`inp_4[base - ${te}u]`};
        let vc = ${te===0?"vN":"inp_4[base]"};
        let vP = ${te===0?"vN":`inp_4[base + ${te}u]`};
        let vR = inp_4[base + ${te+1}u];
        let vn = ${z}(vL.zw, vN.xy);
        let vp = ${z}(vP.zw, vR.xy);`:j=`
        let vL = inp_4[base - ${te+1}u];
        let vN = ${te===0?"inp_4[base]":`inp_4[base - ${te}u]`};
        let vc = ${te===0?"vN":"inp_4[base]"};
        let vP = ${te===0?"vN":`inp_4[base + ${te}u]`};
        let vR = inp_4[base + ${te+1}u];
        let vn = ${z}(vL.yzw, vN.x);
        let vp = ${z}(vP.w, vR.xyz);`;const le=(ce,Z,ae,A)=>{const Q=A-ae,N=ft(Q,oe=>`  v_${oe} : ${z},
`),re=ft(Q,oe=>{const D=ae+oe;return i==="none"?`  var a_${D} = ${z}(${y}(qmeta[${3*t+D}u]));
`:`  var a_${D} = ${z}(0.0${W});
`}),ue=Array.from({length:Q},(oe,D)=>`a_${ae+D}`).join(", ");return`struct ${Z} {
${N}};
fn ${ce}(y : i32, z : i32, x_pad : u32) -> ${Z} {
${re}  var tap_yz : u32 = 0u;
  for (var dz : i32 = -1; dz <= 1; dz = dz + 1) {
    let sz = z + dz * ${V};
    for (var dy : i32 = -1; dy <= 1; dy = dy + 1) {
      let sy = y + dy * ${V};
      if ((u32(sz) | u32(sy)) < 256u) {
        let base = (u32(sz) * 256u + u32(sy)) * ${pt}u + x_pad;
${j}
        let wb = tap_yz * ${3*f}u;
${H(ae,A)}
      }
      tap_yz = tap_yz + 1u;
    }
  }
  return ${Z}(${ue});
}
`},he=(ce,Z,ae,A,Q)=>{const N=Q?`  let y = i32(p0.bg_y0 + lid.y);
  let z = i32(p0.bg_z0);`:`  var y : i32;
  var z : i32;
  if (p0.is_full != 0u) {
    y = i32(wid.y * 4u + lid.y);
    z = i32(wid.z);
  } else {
    let pk = strips0[wid.z];
    y = i32((pk & 255u) * 4u + lid.y);
    z = i32(pk >> 8u);
  }`,re=Q?"lid.y * 2u + sg":"row_idx * 2u + sg";return`
@compute @workgroup_size(64, 4, 1)
fn ${ce}(@builtin(local_invocation_id) lid : vec3<u32>,
             @builtin(workgroup_id) wid : vec3<u32>${F.entryArgs||""}) {
  let sg = lid.x >> 5u;
  let slane = lid.x & 31u;
${F.localHeader}  let x_pad = lid.x + ${Qt}u;
${N}
  let acc = ${Z}(y, z, x_pad);
  let row_idx = u32(z) * 256u + u32(y);
  let y_row_base = row_idx * ${w}u + lid.x;
${F.emit({accVar:"acc",cStart:ae,cEnd:A,hrExpr:re,yRowExpr:"y_row_base",momMode:Q?"ext_only":"main"})}}`},me=T?le("run_conv0_lo","Conv0AccLo",0,p)+le("run_conv0_hi","Conv0AccHi",p,t)+he("main_lo","run_conv0_lo",0,p,!1)+he("main_hi","run_conv0_hi",p,t,!1)+he("main_bg_lo","run_conv0_lo",0,p,!0)+he("main_bg_hi","run_conv0_hi",p,t,!0):le("run_conv0","Conv0Acc",0,t)+he("main","run_conv0",0,t,!1)+he("main_bg","run_conv0",0,t,!0);return`${h}${P}
struct Params0 {
  is_full : u32,
  bg_y0 : u32,
  bg_z0 : u32,
  pad0 : u32,
};
@group(0) @binding(0) var<storage, read> inp_4 : array<${z}>;
@group(0) @binding(1) var<storage, read_write> y8_0 : array<u32>;
@group(0) @binding(2) var<storage, read_write> y8_1 : array<u32>;
@group(0) @binding(3) var<storage, read> w16_4 : array<${z}>;
@group(0) @binding(4) var<storage, read> qmeta : array<f32>;
@group(0) @binding(5) var<storage, read_write> mom_main : array<vec4<f32>>;
@group(0) @binding(6) var<storage, read_write> mom_ext : array<vec4<f32>>;
@group(0) @binding(7) var<storage, read> strips0 : array<u32>;
@group(0) @binding(8) var<uniform> p0 : Params0;
${F.decls}${me}`},prepWgsl:()=>`${h}
${In(r)}
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
@group(0) @binding(2) var<storage, read_write> mom_main : array<vec4<f32>>;
@group(0) @binding(3) var<storage, read_write> mom_ext : array<vec4<f32>>;
@group(0) @binding(4) var<storage, read_write> mom_stats : array<vec4<f32>>;
@group(0) @binding(5) var<storage, read_write> w_eff : array<${z}>;
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
    for (var hr : u32 = lid; hr < ${Xn}u; hr = hr + 256u) {
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
    q_ref = max(q_ref, ${C.toFixed(1)} * qs);
  }
  ${i==="none"?"q_ref = 1.0;":""}
  if (lid == 0u) {
    mom_stats[${t*2}u] = vec4<f32>(q_ref, 0.0, 0.0, 0.0);
  }
  let scale_num = ${C.toFixed(1)} / q_ref;
  for (var idx : u32 = lid; idx < ${k}u; idx = idx + 256u) {
    let ic = (idx / ${3*f}u) % ${t}u;
    let qs = mom_stats[ic * 2u].z;
    w_eff[idx] = w16_4[pp.next_w_vec4_off + idx] * ${y}(qs * scale_num);
  }
  if (lid < ${f}u) {
    ${i==="none"?`
    let mb = pp.next_meta_off + ${3*t}u + lid * 4u;
    w_eff[${_}u + lid] = ${z}(${y}(qmeta[mb]), ${y}(qmeta[mb + 1u]), ${y}(qmeta[mb + 2u]), ${y}(qmeta[mb + 3u]));
    `:`
    w_eff[${_}u + lid] = ${z}(0.0${W});
    `}
  }
}`,normWgsl:()=>`${In(r)}
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
  let x_pad = x4 + ${Qt}u;
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
  let y_base = row_idx * ${w}u + x4;
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
    act8_0[a_base + c * ${pt}u] = pack4x8unorm((a * inv_qs + vec4<f32>(${M.zeroBin.toFixed(1)})) * (1.0 / 255.0));
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
    act8_1[a_base + c * ${pt}u] = pack4x8unorm((a * inv_qs + vec4<f32>(${M.zeroBin.toFixed(1)})) * (1.0 / 255.0));
  }`:""}
}

@compute @workgroup_size(64, 4, 1)
fn norm_halo_fill(@builtin(local_invocation_id) lid : vec3<u32>,
                  @builtin(workgroup_id) wid : vec3<u32>) {
  let idx = wid.y * 4u + lid.y;
  if (idx >= np.n_halo) { return; }
  let x4 = lid.x;
  let sg = x4 >> 5u;
  let x_pad = x4 + ${Qt}u;
  let y_base = np.bg_row * ${w}u + x4;
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
    act8_0[a_base + c * ${pt}u] = pack4x8unorm((a * inv_qs + vec4<f32>(${M.zeroBin.toFixed(1)})) * (1.0 / 255.0));
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
    act8_1[a_base + c * ${pt}u] = pack4x8unorm((a * inv_qs + vec4<f32>(${M.zeroBin.toFixed(1)})) * (1.0 / 255.0));
  }`:""}
}`,convWgsl:()=>{const T=!u&&c,F=L(u),H=(Z,ae)=>u?`
          let ${Z} = vec4<f16>(vec2<f16>(unpack2x16float(((${ae} & 0x00FF00FFu) << 2u) | 0x3C003C00u)), vec2<f16>(unpack2x16float(((${ae} >> 6u) & 0x03FC03FCu) | 0x3C003C00u))) - vec4<f16>(${M.sterbenzSub});`:`
          let ${Z} = unpack4x8unorm(${ae}) - vec4<f32>(${M.uZeroFloat});`,te=Z=>`
          let uL = ${Z}[base - off0];
          let uN = ${Z}[base - off1];
          let uC = ${Z}[base];
          let uP = ${Z}[base + off1];
          let uR = ${Z}[base + off0];
          let u_neg = (uL >> sh_l) | (uN << sh_r);
          let u_pos = (uP >> sh_r) | (uR << sh_l);`+H("vn","u_neg")+H("vc","uC")+H("vp","u_pos"),Y=(Z,ae)=>{const A=Z/4,Q=ae/4;if($){const N=f/2,re=f;let ue="";for(let oe=A;oe<Q;oe+=2){const D=oe*4,J=oe/2;ue+=`          {
            let wp0 = w_eff_u[wbu + ${J}u];
            let wp1 = w_eff_u[wbu + ${N+J}u];
            let wp2 = w_eff_u[wbu + ${re+J}u];
            let w0a = u4_lo(wp0);
            let w0b = u4_hi(wp0);
            let w1a = u4_lo(wp1);
            let w1b = u4_hi(wp1);
            let w2a = u4_lo(wp2);
            let w2b = u4_hi(wp2);
            a_${D}     = fma(vn, vec4<f16>(w0a.x), fma(vc, vec4<f16>(w1a.x), fma(vp, vec4<f16>(w2a.x), a_${D})));
            a_${D+1} = fma(vn, vec4<f16>(w0a.y), fma(vc, vec4<f16>(w1a.y), fma(vp, vec4<f16>(w2a.y), a_${D+1})));
            a_${D+2} = fma(vn, vec4<f16>(w0a.z), fma(vc, vec4<f16>(w1a.z), fma(vp, vec4<f16>(w2a.z), a_${D+2})));
            a_${D+3} = fma(vn, vec4<f16>(w0a.w), fma(vc, vec4<f16>(w1a.w), fma(vp, vec4<f16>(w2a.w), a_${D+3})));
            a_${D+4} = fma(vn, vec4<f16>(w0b.x), fma(vc, vec4<f16>(w1b.x), fma(vp, vec4<f16>(w2b.x), a_${D+4})));
            a_${D+5} = fma(vn, vec4<f16>(w0b.y), fma(vc, vec4<f16>(w1b.y), fma(vp, vec4<f16>(w2b.y), a_${D+5})));
            a_${D+6} = fma(vn, vec4<f16>(w0b.z), fma(vc, vec4<f16>(w1b.z), fma(vp, vec4<f16>(w2b.z), a_${D+6})));
            a_${D+7} = fma(vn, vec4<f16>(w0b.w), fma(vc, vec4<f16>(w1b.w), fma(vp, vec4<f16>(w2b.w), a_${D+7})));
          }
`}return ue}return ft(Q-A,N=>{const re=A+N,ue=re*4;return`          {
            let w0 = w_eff[wb + ${re}u];
            let w1 = w_eff[wb + ${f+re}u];
            let w2 = w_eff[wb + ${2*f+re}u];
            a_${ue}     = fma(vn, ${z}(w0.x), fma(vc, ${z}(w1.x), fma(vp, ${z}(w2.x), a_${ue})));
            a_${ue+1} = fma(vn, ${z}(w0.y), fma(vc, ${z}(w1.y), fma(vp, ${z}(w2.y), a_${ue+1})));
            a_${ue+2} = fma(vn, ${z}(w0.z), fma(vc, ${z}(w1.z), fma(vp, ${z}(w2.z), a_${ue+2})));
            a_${ue+3} = fma(vn, ${z}(w0.w), fma(vc, ${z}(w1.w), fma(vp, ${z}(w2.w), a_${ue+3})));
          }
`})},j=(Z,ae,A,Q)=>{const N=Q-A,re=ft(N,ve=>`  v_${ve} : ${z},
`),ue=ft(N,ve=>{const ge=A+ve;if(i==="none"){const xe=ge>>>2,Pe=["x","y","z","w"][ge&3];if($){const Oe=_+xe>>>1,Ae=_+xe&1?"u4_hi":"u4_lo";return`  var a_${ge} = ${z}(${Ae}(w_eff_u[${Oe}u]).${Pe});
`}return`  var a_${ge} = ${z}(w_eff[${_+xe}u].${Pe});
`}return`  var a_${ge} = ${z}(0.0${W});
`}),oe=p<=8?`(${p}u + cp.pad0)`:`${p}u`,D=$?`        let wbu_tap = tap_yz * ${t*3*f/2}u;
        for (var ic : u32 = 0u; ic < ${oe}; ic = ic + 1u) {
          let base = row_off + ic * ${pt}u;
${te("act8_0")}
          let wbu = wbu_tap + ic * ${3*f/2}u;
${Y(A,Q)}
        }`:`        let wb_tap = tap_yz * ${t*3*f}u;
        for (var ic : u32 = 0u; ic < ${oe}; ic = ic + 1u) {
          let base = row_off + ic * ${pt}u;
${te("act8_0")}
          let wb = wb_tap + ic * ${3*f}u;
${Y(A,Q)}
        }`,J=$?`        for (var ic : u32 = 0u; ic < ${oe}; ic = ic + 1u) {
          let base = row_off + ic * ${pt}u;
${te("act8_1")}
          let wbu = wbu_tap + (${p}u + ic) * ${3*f/2}u;
${Y(A,Q)}
        }`:`        for (var ic : u32 = 0u; ic < ${oe}; ic = ic + 1u) {
          let base = row_off + ic * ${pt}u;
${te("act8_1")}
          let wb = wb_tap + (${p}u + ic) * ${3*f}u;
${Y(A,Q)}
        }`,K=Array.from({length:N},(ve,ge)=>`a_${A+ge}`).join(", ");return`struct ${ae} {
${re}};
fn ${Z}(y : i32, z : i32, x_pad : u32, dp : u32) -> ${ae} {
${ue}  let d_step = i32(dp & 63u);
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
${D}
        ${c?J:""}
      }
      tap_yz = tap_yz + 1u;
    }
  }
  return ${ae}(${K});
}
`},le=(Z,ae,A,Q,N)=>{const re=N?d?`
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
  }`,ue=N?d?"ext_i * 8u + lid.y * 2u + sg":"wid.z * 8u + lid.y * 2u + sg":"row_idx * 2u + sg",oe=N?"(((dp >> 24u) & 1u) != 0u)":"true";return`
@compute @workgroup_size(64, 4, 1)
fn ${Z}(@builtin(local_invocation_id) lid : vec3<u32>,
             @builtin(workgroup_id) wid : vec3<u32>${F.entryArgs||""}) {
  let x4 = lid.x;
  let sg = x4 >> 5u;
  let slane = x4 & 31u;
${F.localHeader}  let x_pad = x4 + ${Qt}u;
${re}
  let dp = cp.d_pack;
  let acc = ${ae}(y, z, x_pad, dp);
  let row_idx = u32(z) * 256u + u32(y);
  let y_row_base = row_idx * ${w}u + x4;
${F.emit({accVar:"acc",cStart:A,cEnd:Q,hrExpr:ue,yRowExpr:"y_row_base",momMode:N?"ext_and_main":"main",writeY8Expr:oe})}}`},he=T?j("run_conv_lo","ConvAccLo",0,p)+j("run_conv_hi","ConvAccHi",p,t)+le("main_lo","run_conv_lo",0,p,!1)+le("main_hi","run_conv_hi",p,t,!1)+le("main_ext_lo","run_conv_lo",0,p,!0)+le("main_ext_hi","run_conv_hi",p,t,!0):j("run_conv","ConvAcc",0,t)+le("main","run_conv",0,t,!1)+le("main_ext","run_conv",0,t,!0),me=$?`fn u4_lo(u : vec4<u32>) -> vec4<f16> {
  return vec4<f16>(vec2<f16>(unpack2x16float(u.x)), vec2<f16>(unpack2x16float(u.y)));
}
fn u4_hi(u : vec4<u32>) -> vec4<f16> {
  return vec4<f16>(vec2<f16>(unpack2x16float(u.z)), vec2<f16>(unpack2x16float(u.w)));
}
@group(0) @binding(6) var<uniform> w_eff_u : array<vec4<u32>, ${Math.ceil(b/2)}>;`:`@group(0) @binding(6) var<storage, read> w_eff : array<${z}>;`;return`${h}${P}
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
${me}
@group(0) @binding(7) var<storage, read> strips : array<u32>;
@group(0) @binding(8) var<uniform> cp : ConvParams;
${F.decls}${he}`},clsWgsl:()=>`${h}
${In(r)}
struct ClsParams {
  w_vec4_off : u32,
  bias_off : u32,
  is_full : u32,
  pad0 : u32,
};
@group(0) @binding(0) var<storage, read> y8_0 : array<u32>;
@group(0) @binding(1) var<storage, read> y8_1 : array<u32>;
@group(0) @binding(2) var<storage, read> w16_4 : array<${z}>;
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
  let y_base = row_idx * ${w}u + x4;
  let mom_base = hr * ${t}u;

  var feat : array<${z}, ${n}>;
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
    feat[c] = ${z}(fv);
  }

  let w_cls = cp.w_vec4_off;
  let m_cls = cp.bias_off;
${hr({chan:n,clsK4:o,nclass:s,V4:z,suf:W,readBiasStmt:"",biasExpr:T=>`qmeta[m_cls + k_base + ${T}u]`,probCfg:m})}
}`,totalWEffVec4s:b,useUniformWeff:$,csHalf:p,chunkableStd:d,halfPass0:!u&&c,halfPassConv:!u&&c}}function $r(e){const{cs:t,chan:n,nclass:s,clsK4:o,dilations:a,activation:r,norm:i,hasF16:u,subgroupMode:l="none",numConvs:c,probCfg:m}=e,d=t/4,f=t/2,p=t/4,g=d*pt,w=16384,k=t*wt,b=t*2+4,$=b+Xn*t,M=4*t,h=(c*M+o*4)/4,x=9*t*3*p,P=x,y=x+p,W=u&&p%2===0&&y*8<=65536,z=br(r),C=u?`enable f16;
`:"",L=u&&l!=="none",G=L?`enable subgroups;
`:"",V=u?"f16":"f32",ee=u?"h":"f",S=`vec4<${V}>`,U=u?256:255,R=Z=>{const ae=Z?".xzyw":"",A=(ue,oe,D)=>{if(ue==="stage_bg")return`stage[s_bg_base + ${oe*wt}u] = ${D};`;if(ue==="stage")return`stage[s_row_base + ${oe*wt}u] = ${D};`;const J=Math.floor(oe/d),K=oe%d;return`if (use_act) { act8_${J}[a_row_base + ${K*pt}u] = ${D}; } else { stage[s_row_base + ${oe*wt}u] = ${D}; }`};if(L&&(l==="sg32"||l==="sg64"||l==="sg32_64")){const ue=vr(l,i);return{decls:ue.decls,entryArgs:ue.entryArgs,localHeader:"",emit:({accVar:oe,cStart:D,cEnd:J,hrExpr:K,storeMode:ve,momOffExpr:ge,alsoWriteMomMain:xe=!1,writeY8Expr:Pe="true"})=>ft(J-D,Oe=>{const Ae=D+Oe;return i==="none"?`  {
    let f = vec4<f32>(${oe}.v_${Oe}${ae});
    let lmn = ${ue.min("min(min(f.x, f.y), min(f.z, f.w))")};
    let lmx = ${ue.max("max(max(f.x, f.y), max(f.z, f.w))")};
    let sp = lmx - lmn;
    let inv = select(0.0, 1.0 / sp, sp > 1e-7);
    if (${Pe}) {
      ${A(ve,Ae,"pack4x8unorm((f - vec4<f32>(lmn)) * inv)")}
    }
    if (slane == 0u) {
      let mv = vec4<f32>(0.0, 0.0, lmn, sp);
      mom[${ge} + (${K}) * ${t}u + ${Ae}u] = mv;
      ${xe?`mom[${b}u + (row_idx * 2u + sg) * ${t}u + ${Ae}u] = mv;`:""}
    }
  }
`:`  {
    let f = vec4<f32>(${oe}.v_${Oe}${ae});
    let ls = ${ue.add("f.x + f.y + f.z + f.w")};
    let lq = ${ue.add("dot(f, f)")};
    let lmn = ${ue.min("min(min(f.x, f.y), min(f.z, f.w))")};
    let lmx = ${ue.max("max(max(f.x, f.y), max(f.z, f.w))")};
    let sp = lmx - lmn;
    let inv = select(0.0, 1.0 / sp, sp > 1e-7);
    if (${Pe}) {
      ${A(ve,Ae,"pack4x8unorm((f - vec4<f32>(lmn)) * inv)")}
    }
    if (slane == 0u) {
      let mv = vec4<f32>(ls, lq, lmn, sp);
      mom[${ge} + (${K}) * ${t}u + ${Ae}u] = mv;
      ${xe?`mom[${b}u + (row_idx * 2u + sg) * ${t}u + ${Ae}u] = mv;`:""}
    }
  }
`})}}if(L&&l==="sg_small")return{decls:xr({V4:S,sw:ae,norm:i,writeMomFn:`fn write_mom(c_out : u32, mv : vec4<f32>, mom_off : u32, main_off : u32, also_main : bool) {
  mom[mom_off + c_out] = mv;
  if (also_main) {
    mom[main_off + c_out] = mv;
  }
}
`,momParams:"mom_off : u32, main_off : u32, also_main : bool",momArgs:"mom_off, main_off, also_main"}),entryArgs:`,
             @builtin(subgroup_size) sg_size : u32,
             @builtin(subgroup_invocation_id) sg_id : u32`,localHeader:`  let h = lid.y * 2u + sg;
`,emit:({accVar:D,cStart:J,cEnd:K,hrExpr:ve,storeMode:ge,momOffExpr:xe,alsoWriteMomMain:Pe=!1,writeY8Expr:Oe="true"})=>{const Ae=`${xe} + (${ve}) * ${t}u`,Ee=Pe?`${b}u + (row_idx * 2u + sg) * ${t}u`:"0u";let Ie=`  let ep_mom_off = ${Ae};
  let ep_main_off = ${Ee};
`;for(let Ue=0;Ue<K-J;Ue+=4){const ye=J+Ue;Ie+=`  {
    let qw = reduce_pack4_sg(${D}.v_${Ue}, ${D}.v_${Ue+1}, ${D}.v_${Ue+2}, ${D}.v_${Ue+3}, h, slane, sg_size, sg_id, ${ye}u, ep_mom_off, ep_main_off, ${Pe});
    if (${Oe}) {
      ${A(ge,ye,"qw.x")}
      ${A(ge,ye+1,"qw.y")}
      ${A(ge,ye+2,"qw.z")}
      ${A(ge,ye+3,"qw.w")}
    }
  }
`}return Ie}};const Q=`    let c_out = c_base + slane;
    mom[mom_off + c_out] = mv;
    if (also_main) {
      mom[main_off + c_out] = mv;
    }`;if(i==="none"&&u){const ue=ft(31,D=>`    {
      let m = sh_mm[rb + ${D+1}u];
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
${ue}    let fmn = f32(rmn);
    let sp = f32(rmx) - fmn;
    sh_res[h * 4u + slane] = vec2<f32>(fmn, select(0.0, 1.0 / sp, sp > 1e-7));
    let mv = vec4<f32>(0.0, 0.0, fmn, sp);
${Q}
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
`,emit:({accVar:D,cStart:J,cEnd:K,hrExpr:ve,storeMode:ge,momOffExpr:xe,alsoWriteMomMain:Pe=!1,writeY8Expr:Oe="true"})=>{const Ae=`${xe} + (${ve}) * ${t}u`,Ee=Pe?`${b}u + (row_idx * 2u + sg) * ${t}u`:"0u";let Ie=`  let ep_mom_off = ${Ae};
  let ep_main_off = ${Ee};
`;for(let Ue=0;Ue<K-J;Ue+=4){const ye=J+Ue;Ie+=`  {
    let qw = reduce_pack4(${D}.v_${Ue}, ${D}.v_${Ue+1}, ${D}.v_${Ue+2}, ${D}.v_${Ue+3}, h, slane, ${ye}u, ep_mom_off, ep_main_off, ${Pe});
    if (${Oe}) {
      ${A(ge,ye,"qw.x")}
      ${A(ge,ye+1,"qw.y")}
      ${A(ge,ye+2,"qw.z")}
      ${A(ge,ye+3,"qw.w")}
    }
  }
`}return Ie}}}if(i==="none"){const ue=ft(32,D=>`    {
      let m = sh_mm[rb + ${D}u];
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
`,emit:({accVar:D,cStart:J,cEnd:K,hrExpr:ve,storeMode:ge,momOffExpr:xe,alsoWriteMomMain:Pe=!1,writeY8Expr:Oe="true"})=>{const Ae=`${xe} + (${ve}) * ${t}u`,Ee=Pe?`${b}u + (row_idx * 2u + sg) * ${t}u`:"0u";let Ie=`  let ep_mom_off = ${Ae};
  let ep_main_off = ${Ee};
`;for(let Ue=0;Ue<K-J;Ue+=4){const ye=J+Ue;Ie+=`  {
    let qw = reduce_pack4(${D}.v_${Ue}, ${D}.v_${Ue+1}, ${D}.v_${Ue+2}, ${D}.v_${Ue+3}, h, slane, ${ye}u, ep_mom_off, ep_main_off, ${Pe});
    if (${Oe}) {
      ${A(ge,ye,"qw.x")}
      ${A(ge,ye+1,"qw.y")}
      ${A(ge,ye+2,"qw.z")}
      ${A(ge,ye+3,"qw.w")}
    }
  }
`}return Ie}}}if(u){const ue=ft(31,D=>{const J=D+1;return`    {
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
  a0 : ${S}, a1 : ${S}, a2 : ${S}, a3 : ${S},
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
`,emit:({accVar:D,cStart:J,cEnd:K,hrExpr:ve,storeMode:ge,momOffExpr:xe,alsoWriteMomMain:Pe=!1,writeY8Expr:Oe="true"})=>{const Ae=`${xe} + (${ve}) * ${t}u`,Ee=Pe?`${b}u + (row_idx * 2u + sg) * ${t}u`:"0u";let Ie=`  let ep_mom_off = ${Ae};
  let ep_main_off = ${Ee};
`;for(let Ue=0;Ue<K-J;Ue+=4){const ye=J+Ue;Ie+=`  {
    let qw = reduce_pack4(${D}.v_${Ue}, ${D}.v_${Ue+1}, ${D}.v_${Ue+2}, ${D}.v_${Ue+3}, h, slane, ${ye}u, ep_mom_off, ep_main_off, ${Pe});
    if (${Oe}) {
      ${A(ge,ye,"qw.x")}
      ${A(ge,ye+1,"qw.y")}
      ${A(ge,ye+2,"qw.z")}
      ${A(ge,ye+3,"qw.w")}
    }
  }
`}return Ie}}}const N=ft(32,ue=>`    {
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
${N}    let sp = rmx - rmn;
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
`,emit:({accVar:ue,cStart:oe,cEnd:D,hrExpr:J,storeMode:K,momOffExpr:ve,alsoWriteMomMain:ge=!1,writeY8Expr:xe="true"})=>{const Pe=`${ve} + (${J}) * ${t}u`,Oe=ge?`${b}u + (row_idx * 2u + sg) * ${t}u`:"0u";let Ae=`  let ep_mom_off = ${Pe};
  let ep_main_off = ${Oe};
`;for(let Ee=0;Ee<D-oe;Ee+=2){const Ie=oe+Ee;Ae+=`  {
    let qw = reduce_pack2(${ue}.v_${Ee}, ${ue}.v_${Ee+1}, h, slane, ${Ie}u, ep_mom_off, ep_main_off, ${ge});
    if (${xe}) {
      ${A(K,Ie,"qw.x")}
      ${A(K,Ie+1,"qw.y")}
    }
  }
`}return Ae}}},E=()=>`
@group(0) @binding(0) var<storage, read_write> act0 : array<u32>;
@group(0) @binding(1) var<storage, read_write> act1 : array<u32>;
@group(0) @binding(2) var<storage, read_write> act2 : array<u32>;
@group(0) @binding(3) var<storage, read_write> act3 : array<u32>;
@compute @workgroup_size(${pt}, 1, 1)
fn main(@builtin(local_invocation_id) lid : vec3<u32>,
        @builtin(workgroup_id) wid : vec3<u32>) {
  let row_base = (wid.z * 256u + wid.y) * ${g}u + lid.x;
  let val = ${z.uZeroWord}u;
  for (var c : u32 = 0u; c < ${d}u; c = c + 1u) {
    let idx = row_base + c * ${pt}u;
    act0[idx] = val;
    act1[idx] = val;
    act2[idx] = val;
    act3[idx] = val;
  }
}`,T=a[0],F=!u&&t>=16,H=()=>{const Z=R(!1),ae=(D,J)=>{const K=D/4,ve=J/4;return ft(ve-K,ge=>{const xe=K+ge,Pe=xe*4;return`          {
            let w0 = w16_4[wb + ${xe}u];
            let w1 = w16_4[wb + ${p+xe}u];
            let w2 = w16_4[wb + ${2*p+xe}u];
            a_${Pe}     = fma(vn, ${S}(w0.x), fma(vc, ${S}(w1.x), fma(vp, ${S}(w2.x), a_${Pe})));
            a_${Pe+1} = fma(vn, ${S}(w0.y), fma(vc, ${S}(w1.y), fma(vp, ${S}(w2.y), a_${Pe+1})));
            a_${Pe+2} = fma(vn, ${S}(w0.z), fma(vc, ${S}(w1.z), fma(vp, ${S}(w2.z), a_${Pe+2})));
            a_${Pe+3} = fma(vn, ${S}(w0.w), fma(vc, ${S}(w1.w), fma(vp, ${S}(w2.w), a_${Pe+3})));
          }
`})},A=Math.floor(T/4),Q=T%4;let N="";Q===0?N=`
        let vn = inp_4[base - ${A}u];
        let vc = inp_4[base];
        let vp = inp_4[base + ${A}u];`:A===0&&Q===1?N=`
        let vL = inp_4[base - 1u];
        let vc = inp_4[base];
        let vR = inp_4[base + 1u];
        let vn = ${S}(vL.w, vc.xyz);
        let vp = ${S}(vc.yzw, vR.x);`:Q===1?N=`
        let vL = inp_4[base - ${A+1}u];
        let vN = inp_4[base - ${A}u];
        let vc = inp_4[base];
        let vP = inp_4[base + ${A}u];
        let vR = inp_4[base + ${A+1}u];
        let vn = ${S}(vL.w, vN.xyz);
        let vp = ${S}(vP.yzw, vR.x);`:Q===2?N=`
        let vL = inp_4[base - ${A+1}u];
        let vN = ${A===0?"inp_4[base]":`inp_4[base - ${A}u]`};
        let vc = ${A===0?"vN":"inp_4[base]"};
        let vP = ${A===0?"vN":`inp_4[base + ${A}u]`};
        let vR = inp_4[base + ${A+1}u];
        let vn = ${S}(vL.zw, vN.xy);
        let vp = ${S}(vP.zw, vR.xy);`:N=`
        let vL = inp_4[base - ${A+1}u];
        let vN = ${A===0?"inp_4[base]":`inp_4[base - ${A}u]`};
        let vc = ${A===0?"vN":"inp_4[base]"};
        let vP = ${A===0?"vN":`inp_4[base + ${A}u]`};
        let vR = inp_4[base + ${A+1}u];
        let vn = ${S}(vL.yzw, vN.x);
        let vp = ${S}(vP.w, vR.xyz);`;const re=(D,J,K,ve)=>{const ge=ve-K,xe=ft(ge,Ae=>`  v_${Ae} : ${S},
`),Pe=ft(ge,Ae=>{const Ee=K+Ae;if(i==="none"){const Ie=3*t+Ee;return`  var a_${Ee} = ${S}(${V}(qmeta_u[${Ie>>>2}u][${Ie&3}u]));
`}return`  var a_${Ee} = ${S}(0.0${ee});
`}),Oe=Array.from({length:ge},(Ae,Ee)=>`a_${K+Ee}`).join(", ");return`struct ${J} {
${xe}};
fn ${D}(y : i32, z : i32, x_pad : u32) -> ${J} {
${Pe}  var tap_yz : u32 = 0u;
  for (var dz : i32 = -1; dz <= 1; dz = dz + 1) {
    let sz = z + dz * ${T};
    for (var dy : i32 = -1; dy <= 1; dy = dy + 1) {
      let sy = y + dy * ${T};
      if ((u32(sz) | u32(sy)) < 256u) {
        let base = (u32(sz) * 256u + u32(sy)) * ${pt}u + x_pad;
${N}
        let wb = tap_yz * ${3*p}u;
${ae(K,ve)}
      }
      tap_yz = tap_yz + 1u;
    }
  }
  return ${J}(${Oe});
}
`},ue=(D,J,K,ve,ge)=>{const xe=ge?`  let y = i32(p0.bg_y0 + lid.y);
  let z = i32(p0.bg_z0);`:`  var y : i32;
  var z : i32;
  if (p0.is_full != 0u) {
    y = i32(wid.y * 4u + lid.y);
    z = i32(wid.z);
  } else {
    let pk = strips0_u[wid.z >> 2u][wid.z & 3u];
    y = i32((pk & 255u) * 4u + lid.y);
    z = i32(pk >> 8u);
  }`,Pe=ge?"lid.y * 2u + sg":"row_idx * 2u + sg",Oe=ge?`${$}u`:`${b}u`,Ae=ge?`  let s_bg_base = (${w}u + lid.y) * ${k}u + lid.x;`:`  let row_idx = u32(z) * 256u + u32(y);
  let use_act = u32(z) < 192u;
  let a_row_base = row_idx * ${g}u + x_pad;
  let s_row_base = ((u32(z) & 63u) * 256u + u32(y)) * ${k}u + lid.x;`;return`
@compute @workgroup_size(64, 4, 1)
fn ${D}(@builtin(local_invocation_id) lid : vec3<u32>,
             @builtin(workgroup_id) wid : vec3<u32>${Z.entryArgs||""}) {
  let sg = lid.x >> 5u;
  let slane = lid.x & 31u;
${Z.localHeader}  let x_pad = lid.x + ${Qt}u;
${xe}
  let acc = ${J}(y, z, x_pad);
${Ae}
${Z.emit({accVar:"acc",cStart:K,cEnd:ve,hrExpr:Pe,storeMode:ge?"stage_bg":"conv0_split",momOffExpr:Oe})}}`},oe=F?re("run_conv0_lo","Conv0AccLo",0,f)+re("run_conv0_hi","Conv0AccHi",f,t)+ue("main_lo","run_conv0_lo",0,f,!1)+ue("main_hi","run_conv0_hi",f,t,!1)+ue("main_bg_lo","run_conv0_lo",0,f,!0)+ue("main_bg_hi","run_conv0_hi",f,t,!0):re("run_conv0","Conv0Acc",0,t)+ue("main","run_conv0",0,t,!1)+ue("main_bg","run_conv0",0,t,!0);return`${C}${G}
struct Params0 {
  is_full : u32,
  bg_y0 : u32,
  bg_z0 : u32,
  pad0 : u32,
};
@group(0) @binding(0) var<storage, read> inp_4 : array<${S}>;
@group(0) @binding(1) var<storage, read_write> act8_0 : array<u32>;
@group(0) @binding(2) var<storage, read_write> act8_1 : array<u32>;
@group(0) @binding(3) var<storage, read_write> act8_2 : array<u32>;
@group(0) @binding(4) var<storage, read_write> act8_3 : array<u32>;
@group(0) @binding(5) var<storage, read_write> stage : array<u32>;
@group(0) @binding(6) var<storage, read> w16_4 : array<${S}>;
@group(0) @binding(7) var<storage, read_write> mom : array<vec4<f32>>;
@group(0) @binding(8) var<uniform> qmeta_u : array<vec4<f32>, ${t}>;
@group(0) @binding(9) var<uniform> strips0_u : array<vec4<u32>, 4096>;
@group(0) @binding(10) var<uniform> p0 : Params0;
${Z.decls}${oe}`},te=()=>`${C}
${In(r)}
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
@group(0) @binding(2) var<storage, read_write> mom : array<vec4<f32>>;
@group(0) @binding(3) var<storage, read_write> w_eff : array<${S}>;
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
    for (var hr : u32 = lid; hr < ${Xn}u; hr = hr + 256u) {
      let v = mom[${b}u + hr * ${t}u + c];
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
        let v = mom[${b}u + (base_hr + h) * ${t}u + c];
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
        let v = mom[${$}u + e * ${t}u + c];
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
    q_ref = max(q_ref, ${U.toFixed(1)} * qs);
  }
  ${i==="none"?"q_ref = 1.0;":""}
  if (lid == 0u) {
    mom[${t*2}u] = vec4<f32>(q_ref, 0.0, 0.0, 0.0);
  }
  let scale_num = ${U.toFixed(1)} / q_ref;
  for (var idx : u32 = lid; idx < ${x}u; idx = idx + 256u) {
    let ic = (idx / ${3*p}u) % ${t}u;
    let qs = mom[ic * 2u].z;
    w_eff[idx] = w16_4[pp.next_w_vec4_off + idx] * ${V}(qs * scale_num);
  }
  if (lid < ${p}u) {
    ${i==="none"?`
    let mb = pp.next_meta_off + ${3*t}u + lid * 4u;
    w_eff[${P}u + lid] = ${S}(${V}(qmeta[mb]), ${V}(qmeta[mb + 1u]), ${V}(qmeta[mb + 2u]), ${V}(qmeta[mb + 3u]));
    `:`
    w_eff[${P}u + lid] = ${S}(0.0${ee});
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
  let x_pad = x4 + ${Qt}u;
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
  let s_base = ((z & 63u) * 256u + y) * ${k}u + x4;
  for (var c : u32 = 0u; c < ${d}u; c = c + 1u) {
    let a_off = a_base + c * ${pt}u;
    act8_0[a_off] = stage[s_base + c * ${wt}u];
    act8_1[a_off] = stage[s_base + (${d}u + c) * ${wt}u];
    act8_2[a_off] = stage[s_base + (${2*d}u + c) * ${wt}u];
    act8_3[a_off] = stage[s_base + (${3*d}u + c) * ${wt}u];
  }
}`,j=(Z,ae)=>{const A=Z*d;return`
  for (var cl : u32 = 0u; cl < ${d}u; cl = cl + 1u) {
    let c = ${A}u + cl;
    let inv_qs = mom[c * 2u].w;
    let st = mom[c * 2u + 1u];
    let rm = mom[mom_base + c];
    let q_word = ${ae?`stage[s_bg_base + c * ${wt}u]`:`select(stage[s_base + c * ${wt}u], act8_${Z}[a_base + cl * ${pt}u], use_act)`};
    let yv = unpack4x8unorm(q_word) * rm.w + vec4<f32>(rm.z);
    let a = vec4<f32>(
      act(yv.x * st.x + st.y),
      act(yv.y * st.x + st.y),
      act(yv.z * st.x + st.y),
      act(yv.w * st.x + st.y)
    );
    act8_${Z}[a_base + cl * ${pt}u] = pack4x8unorm((a * inv_qs + vec4<f32>(${z.zeroBin.toFixed(1)})) * (1.0 / 255.0));
  }`},le=()=>`${In(r)}
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
  let x_pad = x4 + ${Qt}u;
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
  let s_base = ((z & 63u) * 256u + y) * ${k}u + x4;
  let mom_base = ${b}u + (row_idx * 2u + sg) * ${t}u;
${ft(4,Z=>j(Z,!1))}
}

@compute @workgroup_size(64, 4, 1)
fn norm_halo_fill(@builtin(local_invocation_id) lid : vec3<u32>,
                  @builtin(workgroup_id) wid : vec3<u32>) {
  let idx = wid.y * 4u + lid.y;
  if (idx >= np.n_halo) { return; }
  let x4 = lid.x;
  let sg = x4 >> 5u;
  let x_pad = x4 + ${Qt}u;
  let s_bg_base = ${w}u * ${k}u + x4;
  let mom_base = ${$}u + sg * ${t}u;
  let dst_row = norm_aux[np.halo_off + idx];
  let a_base = dst_row * ${g}u + x_pad;
${ft(4,Z=>j(Z,!0))}
}`,he=()=>{const Z=!u&&t>=16,ae=R(u),A=(K,ve)=>u?`
          let ${K} = vec4<f16>(vec2<f16>(unpack2x16float(((${ve} & 0x00FF00FFu) << 2u) | 0x3C003C00u)), vec2<f16>(unpack2x16float(((${ve} >> 6u) & 0x03FC03FCu) | 0x3C003C00u))) - vec4<f16>(${z.sterbenzSub});`:`
          let ${K} = unpack4x8unorm(${ve}) - vec4<f32>(${z.uZeroFloat});`,Q=K=>`
          let uL = ${K}[base - off0];
          let uN = ${K}[base - off1];
          let uC = ${K}[base];
          let uP = ${K}[base + off1];
          let uR = ${K}[base + off0];
          let u_neg = (uL >> sh_l) | (uN << sh_r);
          let u_pos = (uP >> sh_r) | (uR << sh_l);`+A("vn","u_neg")+A("vc","uC")+A("vp","u_pos"),N=(K,ve)=>{const ge=K/4,xe=ve/4;if(W){const Pe=p/2,Oe=p;let Ae="";for(let Ee=ge;Ee<xe;Ee+=2){const Ie=Ee*4,Ue=Ee/2;Ae+=`          {
            let wp0 = w_eff_u[wbu + ${Ue}u];
            let wp1 = w_eff_u[wbu + ${Pe+Ue}u];
            let wp2 = w_eff_u[wbu + ${Oe+Ue}u];
            let w0a = u4_lo(wp0);
            let w0b = u4_hi(wp0);
            let w1a = u4_lo(wp1);
            let w1b = u4_hi(wp1);
            let w2a = u4_lo(wp2);
            let w2b = u4_hi(wp2);
            a_${Ie}     = fma(vn, vec4<f16>(w0a.x), fma(vc, vec4<f16>(w1a.x), fma(vp, vec4<f16>(w2a.x), a_${Ie})));
            a_${Ie+1} = fma(vn, vec4<f16>(w0a.y), fma(vc, vec4<f16>(w1a.y), fma(vp, vec4<f16>(w2a.y), a_${Ie+1})));
            a_${Ie+2} = fma(vn, vec4<f16>(w0a.z), fma(vc, vec4<f16>(w1a.z), fma(vp, vec4<f16>(w2a.z), a_${Ie+2})));
            a_${Ie+3} = fma(vn, vec4<f16>(w0a.w), fma(vc, vec4<f16>(w1a.w), fma(vp, vec4<f16>(w2a.w), a_${Ie+3})));
            a_${Ie+4} = fma(vn, vec4<f16>(w0b.x), fma(vc, vec4<f16>(w1b.x), fma(vp, vec4<f16>(w2b.x), a_${Ie+4})));
            a_${Ie+5} = fma(vn, vec4<f16>(w0b.y), fma(vc, vec4<f16>(w1b.y), fma(vp, vec4<f16>(w2b.y), a_${Ie+5})));
            a_${Ie+6} = fma(vn, vec4<f16>(w0b.z), fma(vc, vec4<f16>(w1b.z), fma(vp, vec4<f16>(w2b.z), a_${Ie+6})));
            a_${Ie+7} = fma(vn, vec4<f16>(w0b.w), fma(vc, vec4<f16>(w1b.w), fma(vp, vec4<f16>(w2b.w), a_${Ie+7})));
          }
`}return Ae}return ft(xe-ge,Pe=>{const Oe=ge+Pe,Ae=Oe*4;return`          {
            let w0 = w_eff[wb + ${Oe}u];
            let w1 = w_eff[wb + ${p+Oe}u];
            let w2 = w_eff[wb + ${2*p+Oe}u];
            a_${Ae}     = fma(vn, ${S}(w0.x), fma(vc, ${S}(w1.x), fma(vp, ${S}(w2.x), a_${Ae})));
            a_${Ae+1} = fma(vn, ${S}(w0.y), fma(vc, ${S}(w1.y), fma(vp, ${S}(w2.y), a_${Ae+1})));
            a_${Ae+2} = fma(vn, ${S}(w0.z), fma(vc, ${S}(w1.z), fma(vp, ${S}(w2.z), a_${Ae+2})));
            a_${Ae+3} = fma(vn, ${S}(w0.w), fma(vc, ${S}(w1.w), fma(vp, ${S}(w2.w), a_${Ae+3})));
          }
`})},re=(K,ve,ge)=>{const xe=K*d,Pe=`(${d}u + cp.pad0)`;return W?`        for (var ic : u32 = 0u; ic < ${Pe}; ic = ic + 1u) {
          let base = row_off + ic * ${pt}u;
${Q(`act8_${K}`)}
          let wbu = wbu_tap + ${xe?`(${xe}u + ic)`:"ic"} * ${3*p/2}u;
${N(ve,ge)}
        }
`:`        for (var ic : u32 = 0u; ic < ${Pe}; ic = ic + 1u) {
          let base = row_off + ic * ${pt}u;
${Q(`act8_${K}`)}
          let wb = wb_tap + ${xe?`(${xe}u + ic)`:"ic"} * ${3*p}u;
${N(ve,ge)}
        }
`},ue=(K,ve,ge,xe)=>{const Pe=xe-ge,Oe=ft(Pe,Ue=>`  v_${Ue} : ${S},
`),Ae=ft(Pe,Ue=>{const ye=ge+Ue;if(i==="none"){const Xe=ye>>>2,Ke=["x","y","z","w"][ye&3];if(W){const Qe=P+Xe>>>1,nt=P+Xe&1?"u4_hi":"u4_lo";return`  var a_${ye} = ${S}(${nt}(w_eff_u[${Qe}u]).${Ke});
`}return`  var a_${ye} = ${S}(w_eff[${P+Xe}u].${Ke});
`}return`  var a_${ye} = ${S}(0.0${ee});
`}),Ee=W?`        let wbu_tap = tap_yz * ${t*3*p/2}u;
`:`        let wb_tap = tap_yz * ${t*3*p}u;
`,Ie=Array.from({length:Pe},(Ue,ye)=>`a_${ge+ye}`).join(", ");return`struct ${ve} {
${Oe}};
fn ${K}(y : i32, z : i32, x_pad : u32, dp : u32) -> ${ve} {
${Ae}  let d_step = i32(dp & 63u);
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
${Ee}${ft(4,Ue=>re(Ue,ge,xe))}      }
      tap_yz = tap_yz + 1u;
    }
  }
  return ${ve}(${Ie});
}
`},oe=(K,ve,ge,xe,Pe)=>{let Oe="";Pe==="bg"?Oe=`
  let y = i32(cp.bg_y0 + lid.y);
  let z = i32(cp.bg_z0);`:Pe==="ext"?Oe=`
  let pk_full = strips[cp.ext_off + wid.z];
  let ext_orig = pk_full >> 16u;
  let pk = pk_full & 0xFFFFu;
  let y = i32((pk & 255u) * 4u + lid.y);
  let z = i32(pk >> 8u);`:Oe=`
  var y : i32;
  var z : i32;
  if (cp.is_full != 0u) {
    y = i32(wid.y * 4u + lid.y);
    z = i32(cp.z_start + wid.z);
  } else {
    let pk = strips[cp.strip_off + wid.z] & 0xFFFFu;
    y = i32((pk & 255u) * 4u + lid.y);
    z = i32(pk >> 8u);
  }`;const Ae=Pe==="bg"?"lid.y * 2u + sg":Pe==="ext"?"ext_orig * 8u + lid.y * 2u + sg":"row_idx * 2u + sg",Ee=Pe==="main"?`${b}u`:`${$}u`,Ie=Pe==="bg"?"stage_bg":"stage",Ue=Pe==="main"?"true":"(((dp >> 24u) & 1u) != 0u)",ye=Pe==="bg"?`  let row_idx = u32(z) * 256u + u32(y);
  let s_bg_base = (${w}u + lid.y) * ${k}u + x4;`:`  let row_idx = u32(z) * 256u + u32(y);
  let s_row_base = ((u32(z) & 63u) * 256u + u32(y)) * ${k}u + x4;`;return`
@compute @workgroup_size(64, 4, 1)
fn ${K}(@builtin(local_invocation_id) lid : vec3<u32>,
             @builtin(workgroup_id) wid : vec3<u32>${ae.entryArgs||""}) {
  let x4 = lid.x;
  let sg = x4 >> 5u;
  let slane = x4 & 31u;
${ae.localHeader}  let x_pad = x4 + ${Qt}u;
${Oe}
  let dp = cp.d_pack;
  let acc = ${ve}(y, z, x_pad, dp);
${ye}
${ae.emit({accVar:"acc",cStart:ge,cEnd:xe,hrExpr:Ae,storeMode:Ie,momOffExpr:Ee,alsoWriteMomMain:Pe!=="main",writeY8Expr:Ue})}}`},D=Z?ue("run_conv_lo","ConvAccLo",0,f)+ue("run_conv_hi","ConvAccHi",f,t)+oe("main_lo","run_conv_lo",0,f,"main")+oe("main_hi","run_conv_hi",f,t,"main")+oe("main_ext_lo","run_conv_lo",0,f,"ext")+oe("main_ext_hi","run_conv_hi",f,t,"ext")+oe("main_bg_lo","run_conv_lo",0,f,"bg")+oe("main_bg_hi","run_conv_hi",f,t,"bg"):ue("run_conv","ConvAcc",0,t)+oe("main","run_conv",0,t,"main")+oe("main_ext","run_conv",0,t,"ext")+oe("main_bg","run_conv",0,t,"bg"),J=W?`fn u4_lo(u : vec4<u32>) -> vec4<f16> {
  return vec4<f16>(vec2<f16>(unpack2x16float(u.x)), vec2<f16>(unpack2x16float(u.y)));
}
fn u4_hi(u : vec4<u32>) -> vec4<f16> {
  return vec4<f16>(vec2<f16>(unpack2x16float(u.z)), vec2<f16>(unpack2x16float(u.w)));
}
@group(0) @binding(6) var<uniform> w_eff_u : array<vec4<u32>, ${Math.ceil(y/2)}>;`:`@group(0) @binding(6) var<storage, read> w_eff : array<${S}>;`;return`${C}${G}
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
${ae.decls}${D}`},me=Z=>{const ae=Z*d;return`
  for (var cl : u32 = 0u; cl < ${d}u; cl = cl + 1u) {
    let c = ${ae}u + cl;
    if (c < ${n}u) {
      let st = mom[c * 2u + 1u];
      let rm = mom[mom_base + c];
      let q_word = select(stage[s_base + c * ${wt}u], act8_${Z}[a_base + cl * ${pt}u], use_act);
      let yv = unpack4x8unorm(q_word) * rm.w + vec4<f32>(rm.z);
      let fv = vec4<f32>(
        act(yv.x * st.x + st.y),
        act(yv.y * st.x + st.y),
        act(yv.z * st.x + st.y),
        act(yv.w * st.x + st.y)
      );
      feat[c] = ${S}(fv);
    }
  }`};return{initActWgsl:E,conv0Wgsl:H,prepWgsl:te,flushWgsl:Y,normWgsl:le,convWgsl:he,clsWgsl:()=>`${C}
${In(r)}
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
@group(0) @binding(5) var<storage, read> w16_4 : array<${S}>;
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
  let a_base = row_idx * ${g}u + x4 + ${Qt}u;
  let s_base = ((z & 63u) * 256u + y) * ${k}u + x4;
  let mom_base = ${b}u + (row_idx * 2u + sg) * ${t}u;

  var feat : array<${S}, ${n}>;
${ft(4,Z=>me(Z))}

  let w_cls = cp.w_vec4_off;
  let b_vec4 = cp.bias_off >> 2u;
${hr({chan:n,clsK4:o,nclass:s,V4:S,suf:ee,readBiasStmt:"    let bv = qmeta_u[b_vec4 + k4];",biasExpr:Z=>`bv.${["x","y","z","w"][Z]}`,probCfg:m})}
}`,qmetaVec4Len:h,numConvs:c,totalWEffVec4s:y,useUniformWeff:W,csQ:d,halfPass0:F,halfPassConv:!u&&t>=16}}function zi(e,t,n,s,o,a,r,i){return ke(this,null,function*(){var zt,It;const u=X*X*X,l=r?u*4:u,c=t.dilations.length,m=t.cs/4,d=X*X*m*pt*4,p=(64*X+4)*t.cs*wt*4,w=(t.cs*2+4+(Xn+tr)*t.cs)*16,k=e.limits||{},_=Math.min((zt=k.maxStorageBufferBindingSize)!=null?zt:1/0,(It=k.maxBufferSize)!=null?It:1/0);if(d>_||p>_||w>_||l>_){const Ze=Math.ceil(Math.max(d,p,w,l)/1048576);throw new Error(`meshnet_fast_v4: LowMem128 max buffer (${Ze} MiB) exceeds device limit (${_>>>20} MiB)`)}const b=$r({cs:t.cs,chan:t.chan,nclass:t.nclass,clsK4:n.clsK4,dilations:t.dilations,activation:t.activation,norm:t.norm,hasF16:s,subgroupMode:o,numConvs:c,probCfg:r});console.log(`[WebGPU-V4-128M] ${t.chan}ch(cs=${t.cs})/${t.nclass}cls (${c} convs, ${t.activation}, norm=${t.norm}${r?", prob=3":""}) | ${s?"f16+sterbenz":"f32"} | ${rr(o)} | ZYCX-4Q+64slice | maxBuf=${(Math.max(d,p,w,l)/1048576).toFixed(1)} MiB`);const $=GPUBufferUsage.STORAGE,M=GPUBufferUsage.UNIFORM,h=GPUBufferUsage.COPY_DST,x=GPUBufferUsage.COPY_SRC,P=X*X*hn,y=P*(s?2:4),W=s?Math.ceil(b.totalWEffVec4s/2)*16:b.totalWEffVec4s*16,z=!!(r&&d>=l),C=`128|${t.cs}|${s?1:0}|${l}|${z?1:0}`,L=fr(e,C,()=>{const Ze=[],Ge=as(e,Ze),tt=Ge.alloc,ut={inpBuf:tt(y,$|h|x),act8_0:tt(d,$|h|x),act8_1:tt(d,$|h|x),act8_2:tt(d,$|h|x),act8_3:tt(d,$|h|x),stageBuf:tt(p,$),momBuf:tt(w,$),labels8Buf:tt(l,$|h|x),readbackBuf:tt(l,GPUBufferUsage.MAP_READ|h),probPackTmpBuf:z?tt(l,$|h|x):null};return{buffers:Ze,named:ut,bytes:Ge.getBytes()}}),{inpBuf:G,act8_0:V,act8_1:ee,act8_2:S,act8_3:U,stageBuf:R,momBuf:E,labels8Buf:T,readbackBuf:F,probPackTmpBuf:H}=L.named,te=[],Y=as(e,te),j=Y.alloc,le=j(s?n.wF16.byteLength:n.wF32.byteLength,$|h),he=j(n.qmetaF32.byteLength,$|M|h),me=j(W,b.useUniformWeff?$|M:$),ce=t.norm==="gn"&&!(a!=null&&a.disableConeSkip),Z=j(et*4,M|h),ae=j(et*4,M|h),A=Array.from({length:c},()=>j(ce?et*4:16,$|h)),Q=Array.from({length:c-1},()=>j(ce?(et+X*X)*4:16,$|h)),N=j(16,M|h),re=j(16,M|h),ue=Array.from({length:c},()=>j(48,M|h)),oe=Array.from({length:c-1},()=>j(16,M|h)),D=Math.max(256,k.minUniformBufferOffsetAlignment||256),J=D>>>2,K=20,ve=Math.max(1,(c-1)*K),ge=j(ve*D,M|h),xe=new Uint32Array(ve*J);e.queue.writeBuffer(le,0,s?n.wF16:n.wF32),e.queue.writeBuffer(he,0,n.qmetaF32);let Pe;try{Pe=yield dr(e,t,n,s,o,r,b)}catch(Ze){for(const Ge of te)Ge.destroy();if(te.length=0,L.pooled)mn.get(e)===L&&vn(e);else{for(const Ge of L.buffers)Ge.destroy();L.buffers.length=0}throw Ze}const{pInit:Oe,pMomFin:Ae,pPrepW:Ee,pFlush:Ie,pNorm:Ue,pNormHalo:ye,pCls:Xe,pConv0:Ke,pConv:Qe}=Pe,nt=(Ze,Ge)=>e.createBindGroup({layout:Ze,entries:Ge.map((tt,ut)=>({binding:ut,resource:tt&&tt.buffer?tt:{buffer:tt}}))}),Ft=nt(Oe.bgl,[V,ee,S,U]);{const Ze=e.createCommandEncoder(),Ge=Ze.beginComputePass();Ge.setPipeline(Oe.pipe),Ge.setBindGroup(0,Ft),Ge.dispatchWorkgroups(1,X,X),Ge.end(),e.queue.submit([Ze.finish()])}const vt=(b.halfPass0?Ke.lo:Ke.main).bgl,_t=nt(vt,[G,V,ee,S,U,R,le,E,{buffer:he,offset:0,size:t.cs*16},Z,N]),Lt=nt(Xe.bgl,[V,ee,S,U,R,le,E,T,he,ae,re]),Ut=z?j(16,M|h):null,Wt=z?nt(Xe.bgl,[V,ee,S,U,R,le,E,T,he,ae,Ut]):null,bt=wr({device:e,hasF16:s,nvox:u,outBufBytes:l,inpBuf:G,act8_0:V,labels8Buf:T,readbackBuf:F,pInit:Oe,bgInit:Ft,pCls:Xe,bgCls:Lt,clsUbo:re,packed:n,modelEntry:a,probCfg:r,canGpuProb:z,probSlots:z?{clsUbo1:Ut,bgCls1:Wt,pass0HoldBuf:H,y0:V,y1:ee,b:S,sup:U}:null,ownedBuffers:te,mkBuf:j}),mt=ue.map((Ze,Ge)=>nt(Ae.bgl,[le,he,E,me,A[Ge],Ze])),rt=oe.map((Ze,Ge)=>nt(Ue.bgl,[V,ee,S,U,R,E,Q[Ge],Ze])),At={buffer:ge,offset:0,size:32},gt=Array.from({length:c},(Ze,Ge)=>Ge===0?null:nt(Ie.bgl,[V,ee,S,U,R,A[Ge],At])),Rt=b.halfPassConv?Qe.lo:Qe.main,Jt=Array.from({length:c},(Ze,Ge)=>Ge===0?null:nt(Rt.bgl,[V,ee,S,U,R,E,me,A[Ge],At])),Gt=s?new Uint16Array(P):new Float32Array(P),nn=new Uint8Array(X*X),Mt=new Uint32Array(et),qt=new Uint32Array(et+X*X),at=new Uint32Array(12),$t=new Float32Array(at.buffer),it=new Uint32Array(4),Ht=(Ze,Ge,tt,ut,v,B,q,de)=>{const I=Ze*J;xe[I]=Ge?1:0,xe[I+1]=tt,xe[I+2]=ut,xe[I+3]=v,xe[I+4]=B,xe[I+5]=q,xe[I+6]=de,xe[I+7]=0};function ne(Ze,Ge){return ke(this,null,function*(){if(Ze.length!==u)throw new Error(`meshnet_fast_v4 expected ${u} voxels, got ${Ze.length}`);const tt=t.norm==="gn"&&!(a!=null&&a.disableConeSkip),ut=yield bt.prepareInput({volume:Ze,ioOpts:Ge,useCone:tt,padInputHost:Gt,headRowHost:nn,hasF16Flag:s}),v=ut.info,B=_r(nn,v,t.dilations,tt),q=new Array(c);for(let ie=0;ie<c;ie++){const fe=B.layers[ie],O=fe.isFull?et:fe.mainStrips.length,pe=fe.isFull||!fe.extStrips?0:fe.extStrips.length,$e=fe.haloRows?fe.haloRows.length:0;if(ie===0){!fe.isFull&&O>0&&(Mt.set(fe.mainStrips,0),e.queue.writeBuffer(Z,0,Mt.subarray(0,O)),e.queue.writeBuffer(A[0],0,Mt.subarray(0,O))),q[0]={L:fe,nMain:O,nExt:pe,nHalo:$e};continue}const be=new Uint32Array(8),Se=new Uint32Array(8),Re=new Uint32Array(8),De=new Uint32Array(8);if(!fe.isFull){if(O>0){Mt.set(fe.mainStrips,0);for(let ze=0;ze<O;ze++)Se[fe.mainStrips[ze]>>>13]++;let _e=0;for(let ze=0;ze<8;ze++)be[ze]=_e,_e+=Se[ze]}if(fe.mode==="bwd"&&pe>0){const _e=Array.from({length:8},()=>[]);for(let Ve=0;Ve<pe;Ve++){const st=fe.extStrips[Ve];_e[st>>>13].push((Ve&65535)<<16|st)}let ze=O;for(let Ve=0;Ve<8;Ve++){Re[Ve]=ze;const st=_e[Ve];De[Ve]=st.length;for(let ht=0;ht<st.length;ht++)Mt[ze++]=st[ht]}e.queue.writeBuffer(A[ie],0,Mt.subarray(0,O+pe))}else O>0&&e.queue.writeBuffer(A[ie],0,Mt.subarray(0,O))}const Ce=fe.mode==="rpure"&&$e>0||fe.mode==="bwd"&&ie+1<c,je=Rs(t.dilations[ie],Ce),ct=(ie-1)*K,Te=fe.bgStrip?fe.bgStrip.yWg*4:0,qe=fe.bgStrip?fe.bgStrip.z:0;for(let _e=0;_e<8;_e++)Ht(ct+_e,fe.isFull,_e*32,be[_e],Re[_e],je,Te,qe);for(let _e=0;_e<6;_e++)Ht(ct+8+_e,fe.isFull,_e*32,be[_e],0,0,0,0),Ht(ct+14+_e,!1,_e*32,Re[_e],0,0,0,0);q[ie]={L:fe,nMain:O,nExt:pe,nHalo:$e,mainCount:Se,extCount:De,layerBaseSlot:ct}}c>1&&e.queue.writeBuffer(ge,0,xe);let de=i.execMode==="calibrate"&&e.__v4WinCalibrated?e.__v4WinFast?"pipelined":"paced":i.execMode;const I=[];if(de==="single"){const ie=e.createCommandEncoder();ut.runPrePasses(ie,I),B.clsSkipped&&(ie.clearBuffer(T,0,l),B.clsStrips.length>0&&e.queue.writeBuffer(ae,0,B.clsStrips));for(let fe=0;fe<c;fe++){const O=q[fe],{L:pe,nMain:$e,nHalo:be}=O,Se=pe.nMomExt||0,Re=pe.isFull?et:pe.normStrips?pe.normStrips.length:0;if(fe===0){const Ce=pe.isFull?64:1,je=pe.isFull?X:$e,ct=!!(pe.bgStrip&&be>0);if(it[0]=pe.isFull?1:0,it[1]=pe.bgStrip?pe.bgStrip.yWg*4:0,it[2]=pe.bgStrip?pe.bgStrip.z:0,it[3]=0,e.queue.writeBuffer(N,0,it),b.halfPass0)for(const[Te,qe]of[[Ke.lo,Ke.bgLo],[Ke.hi,Ke.bgHi]]){const _e=ie.beginComputePass();_e.setBindGroup(0,_t),je>0&&(_e.setPipeline(Te.pipe),_e.dispatchWorkgroups(1,Ce,je)),ct&&(_e.setPipeline(qe.pipe),_e.dispatchWorkgroups(1,1,1)),_e.end(),I.push("conv0")}else{const Te=ie.beginComputePass();Te.setBindGroup(0,_t),je>0&&(Te.setPipeline(Ke.main.pipe),Te.dispatchWorkgroups(1,Ce,je)),ct&&(Te.setPipeline(Ke.bg.pipe),Te.dispatchWorkgroups(1,1,1)),Te.end(),I.push("conv0")}}else{const Ce=Qe,je=Jt[fe],ct=gt[fe],{mainCount:Te,extCount:qe,layerBaseSlot:_e}=O,ze=pe.mode==="rpure"&&!!pe.bgStrip;for(let Ve=0;Ve<8;Ve++){if(Ve>=2){const Ne=Ve-2,ot=pe.isFull||Te[Ne]>0,Ye=!pe.isFull&&pe.mode==="bwd"&&qe[Ne]>0;if(ot||Ye){const St=ie.beginComputePass();St.setPipeline(Ie.pipe),ot&&(St.setBindGroup(0,ct,[(_e+8+Ne)*D]),St.dispatchWorkgroups(1,pe.isFull?64:1,pe.isFull?32:Te[Ne])),Ye&&(St.setBindGroup(0,ct,[(_e+14+Ne)*D]),St.dispatchWorkgroups(1,1,qe[Ne])),St.end(),I.push("flushStage")}}const st=pe.isFull||Te[Ve]>0,ht=!pe.isFull&&pe.mode==="bwd"&&qe[Ve]>0,xt=Ve===0&&ze;if(!st&&!ht&&!xt)continue;const Ct=[(_e+Ve)*D],Bt=pe.isFull?64:1,Je=pe.isFull?32:Te[Ve];if(b.halfPassConv)for(const[Ne,ot,Ye]of[[Ce.lo,Ce.extLo,Ce.bgLo],[Ce.hi,Ce.extHi,Ce.bgHi]]){const St=ie.beginComputePass();St.setBindGroup(0,je,Ct),st&&(St.setPipeline(Ne.pipe),St.dispatchWorkgroups(1,Bt,Je)),ht&&(St.setPipeline(ot.pipe),St.dispatchWorkgroups(1,1,qe[Ve])),xt&&(St.setPipeline(Ye.pipe),St.dispatchWorkgroups(1,1,1)),St.end(),I.push("convHidden")}else{const Ne=ie.beginComputePass();Ne.setBindGroup(0,je,Ct),st&&(Ne.setPipeline(Ce.main.pipe),Ne.dispatchWorkgroups(1,Bt,Je)),ht&&(Ne.setPipeline(Ce.ext.pipe),Ne.dispatchWorkgroups(1,1,qe[Ve])),xt&&(Ne.setPipeline(Ce.bg.pipe),Ne.dispatchWorkgroups(1,1,1)),Ne.end(),I.push("convHidden")}}}const De=fe+1<c?n.w0Vec4s+fe*n.hiddenVec4PerLayer:0;at[0]=fe*n.metaStride,at[1]=De,at[2]=(fe+1)*n.metaStride,at[3]=fe+1<c?1:0,at[4]=fe===0?1:0,at[5]=pe.isFull?1:0,at[6]=$e,at[7]=Se*8,$t[8]=pe.extWeight||0,at[9]=0,at[10]=0,at[11]=0,e.queue.writeBuffer(ue[fe],0,at);{const Ce=ie.beginComputePass();Ce.setBindGroup(0,mt[fe]),Ce.setPipeline(Ae.pipe),Ce.dispatchWorkgroups(t.cs,1,1),Ce.end(),I.push("momentsPrep")}if(fe+1<c){{const je=ie.beginComputePass();je.setBindGroup(0,mt[fe]),je.setPipeline(Ee.pipe),je.dispatchWorkgroups(1,1,1),je.end(),I.push("momentsPrep")}const Ce=pe.isFull?0:Re;if((Ce>0||be>0)&&(Ce>0&&qt.set(pe.normStrips,0),be>0&&qt.set(pe.haloRows,Ce),e.queue.writeBuffer(Q[fe],0,qt.subarray(0,Ce+be))),it[0]=pe.isFull?1:0,it[1]=pe.bgStrip?pe.bgStrip.z*X+pe.bgStrip.yWg*4:0,it[2]=Ce,it[3]=be,e.queue.writeBuffer(oe[fe],0,it),pe.isFull||Re>0||be>0){const je=ie.beginComputePass();je.setBindGroup(0,rt[fe]),(pe.isFull||Re>0)&&(je.setPipeline(Ue.pipe),je.dispatchWorkgroups(1,pe.isFull?64:1,pe.isFull?X:Re)),be>0&&(je.setPipeline(ye.pipe),je.dispatchWorkgroups(1,Math.ceil(be/4),1)),je.end(),I.push("normHalo")}}}return ne.__passCategories=I,bt.finishAndReadback({enc:ie,schedule:B,passCategories:I,u4Tmp:it,ioOpts:Ge})}const Me=jn(e),we=typeof(Ge==null?void 0:Ge.onProgress)=="function"?Ge.onProgress:null,Le=lr(B,c);let Be=0,He=-1;const We=ie=>{if(!we)return;const fe=Math.min(.99,Be/Le);let O="";ie>=0&&ie!==He&&(He=ie,O=`Layer ${ie+1}/${c}`),we(fe,O)},Fe=ir(e,i.msPerStrip||e.__v4MsPerStrip||.12,We);let se=e.createCommandEncoder();ut.runPrePasses(se,I),B.clsSkipped&&(se.clearBuffer(T,0,l),B.clsStrips.length>0&&e.queue.writeBuffer(ae,0,B.clsStrips));for(let ie=0;ie<c;ie++){const fe=q[ie],{L:O,nMain:pe,nHalo:$e}=fe,be=O.nMomExt||0,Se=O.isFull?et:O.normStrips?O.normStrips.length:0,Re=Zs(O,ie,c);if(ie===0){const Ce=O.isFull?64:1,je=O.isFull?X:pe,ct=!!(O.bgStrip&&$e>0);if(it[0]=O.isFull?1:0,it[1]=O.bgStrip?O.bgStrip.yWg*4:0,it[2]=O.bgStrip?O.bgStrip.z:0,it[3]=0,e.queue.writeBuffer(N,0,it),b.halfPass0)for(const[Te,qe]of[[Ke.lo,Ke.bgLo],[Ke.hi,Ke.bgHi]]){const _e=se.beginComputePass();_e.setBindGroup(0,_t),je>0&&(_e.setPipeline(Te.pipe),_e.dispatchWorkgroups(1,Ce,je)),ct&&(_e.setPipeline(qe.pipe),_e.dispatchWorkgroups(1,1,1)),_e.end(),I.push("conv0")}else{const Te=se.beginComputePass();Te.setBindGroup(0,_t),je>0&&(Te.setPipeline(Ke.main.pipe),Te.dispatchWorkgroups(1,Ce,je)),ct&&(Te.setPipeline(Ke.bg.pipe),Te.dispatchWorkgroups(1,1,1)),Te.end(),I.push("conv0")}de==="calibrate"?(e.queue.submit([se.finish()]),se=e.createCommandEncoder()):de==="paced"&&(Be+=Re.convWork,se=yield Fe.submitChunk(se,Re.convWork,0,{forceUiYield:!0}))}else{const Ce=Qe,je=Jt[ie],ct=gt[ie],{mainCount:Te,extCount:qe,layerBaseSlot:_e}=fe,ze=O.mode==="rpure"&&!!O.bgStrip;let Ve=0;for(let st=0;st<8;st++){if(st>=2){const Bt=st-2,Je=O.isFull||Te[Bt]>0,Ne=!O.isFull&&O.mode==="bwd"&&qe[Bt]>0;if(Je||Ne){const ot=se.beginComputePass();ot.setPipeline(Ie.pipe),Je&&(ot.setBindGroup(0,ct,[(_e+8+Bt)*D]),ot.dispatchWorkgroups(1,O.isFull?64:1,O.isFull?32:Te[Bt])),Ne&&(ot.setBindGroup(0,ct,[(_e+14+Bt)*D]),ot.dispatchWorkgroups(1,1,qe[Bt])),ot.end(),I.push("flushStage")}}const ht=O.isFull||Te[st]>0,xt=!O.isFull&&O.mode==="bwd"&&qe[st]>0,Ct=st===0&&ze;if(ht||xt||Ct){const Bt=[(_e+st)*D],Je=O.isFull?64:1,Ne=O.isFull?32:Te[st];if(b.halfPassConv)for(const[ot,Ye,St]of[[Ce.lo,Ce.extLo,Ce.bgLo],[Ce.hi,Ce.extHi,Ce.bgHi]]){const Nt=se.beginComputePass();Nt.setBindGroup(0,je,Bt),ht&&(Nt.setPipeline(ot.pipe),Nt.dispatchWorkgroups(1,Je,Ne)),xt&&(Nt.setPipeline(Ye.pipe),Nt.dispatchWorkgroups(1,1,qe[st])),Ct&&(Nt.setPipeline(St.pipe),Nt.dispatchWorkgroups(1,1,1)),Nt.end(),I.push("convHidden")}else{const ot=se.beginComputePass();ot.setBindGroup(0,je,Bt),ht&&(ot.setPipeline(Ce.main.pipe),ot.dispatchWorkgroups(1,Je,Ne)),xt&&(ot.setPipeline(Ce.ext.pipe),ot.dispatchWorkgroups(1,1,qe[st])),Ct&&(ot.setPipeline(Ce.bg.pipe),ot.dispatchWorkgroups(1,1,1)),ot.end(),I.push("convHidden")}Ve+=(ht?O.isFull?2048:Te[st]:0)+(xt?qe[st]:0)}if(de==="calibrate"&&(Ve>=512||st===7&&Ve>0)){const Bt=performance.now();e.queue.submit([se.finish()]),yield e.queue.onSubmittedWorkDone();const Je=performance.now()-Bt;if(se=e.createCommandEncoder(),Be+=Ve,Ve>=512){const Ne=Je/Ve,ot=Ne*et;e.__v4WinCalibrated=!0,Fe.setMsPerStrip(Ne),!Me.isWindowsSharedIgpu&&ot<nr?(e.__v4WinFast=!0,de="pipelined",console.log(`[WebGPU-V4-128M] Windows GPU calibration: estFullLayer=${ot.toFixed(1)}ms -> unthrottled pipelined mode`)):(e.__v4WinFast=!1,de="paced",console.log(`[WebGPU-V4-128M] Windows GPU calibration: estFullLayer=${ot.toFixed(1)}ms -> TDR-safe 2-in-flight paced mode`),We(ie))}Ve=0}else de==="paced"&&Ve>0&&(Ve*Fe.getMsPerStrip()>=sr*.75||st===7)&&(Be+=Ve,se=yield Fe.submitChunk(se,Ve,ie),Ve=0)}}const De=ie+1<c?n.w0Vec4s+ie*n.hiddenVec4PerLayer:0;at[0]=ie*n.metaStride,at[1]=De,at[2]=(ie+1)*n.metaStride,at[3]=ie+1<c?1:0,at[4]=ie===0?1:0,at[5]=O.isFull?1:0,at[6]=pe,at[7]=be*8,$t[8]=O.extWeight||0,at[9]=0,at[10]=0,at[11]=0,e.queue.writeBuffer(ue[ie],0,at);{const Ce=se.beginComputePass();Ce.setBindGroup(0,mt[ie]),Ce.setPipeline(Ae.pipe),Ce.dispatchWorkgroups(t.cs,1,1),Ce.end(),I.push("momentsPrep")}if(ie+1<c){{const je=se.beginComputePass();je.setBindGroup(0,mt[ie]),je.setPipeline(Ee.pipe),je.dispatchWorkgroups(1,1,1),je.end(),I.push("momentsPrep")}const Ce=O.isFull?0:Se;if((Ce>0||$e>0)&&(Ce>0&&qt.set(O.normStrips,0),$e>0&&qt.set(O.haloRows,Ce),e.queue.writeBuffer(Q[ie],0,qt.subarray(0,Ce+$e))),it[0]=O.isFull?1:0,it[1]=O.bgStrip?O.bgStrip.z*X+O.bgStrip.yWg*4:0,it[2]=Ce,it[3]=$e,e.queue.writeBuffer(oe[ie],0,it),O.isFull||Se>0||$e>0){const je=se.beginComputePass();je.setBindGroup(0,rt[ie]),(O.isFull||Se>0)&&(je.setPipeline(Ue.pipe),je.dispatchWorkgroups(1,O.isFull?64:1,O.isFull?X:Se)),$e>0&&(je.setPipeline(ye.pipe),je.dispatchWorkgroups(1,Math.ceil($e/4),1)),je.end(),I.push("normHalo")}}de==="pipelined"?(e.queue.submit([se.finish()]),se=e.createCommandEncoder()):de==="calibrate"?(e.queue.submit([se.finish()]),yield e.queue.onSubmittedWorkDone(),se=e.createCommandEncoder(),Be+=(ie===0?Re.convWork:0)+Re.normWork,ie===c-1&&!e.__v4WinCalibrated&&(e.__v4WinCalibrated=!0,e.__v4WinFast=!Me.isWindowsSharedIgpu)):(Be+=Re.normWork,se=yield Fe.submitChunk(se,Re.normWork,ie))}return de==="paced"&&(yield Fe.waitBeforeFinalSubmit()),ne.__passCategories=I,bt.finishAndReadback({enc:se,schedule:B,passCategories:I,u4Tmp:it,ioOpts:Ge,paced:de==="paced",onProgress:we})})}return bt.warmupIoPipelines(),ne.dispose=({keepSharedWorkspace:Ze=!1}={})=>{bt.dispose();for(const Ge of te)Ge.destroy();if(te.length=0,Y.resetBytes(),L.pooled)Ze?L.inUse=!1:mn.get(e)===L&&vn(e);else{for(const Ge of L.buffers)Ge.destroy();L.buffers.length=0}},ne.gpuBytes=()=>L.bytes+Y.getBytes(),ne.__passCategories=[],ne.__coneInfo=()=>({paddedVox:P,actMiB:d/1048576,mode:"LowMem128"}),ne.__v4Plan=()=>i,ne.kernels="v4-int8",ne})}const Sr=!0;function eo(o,a,r){return ke(this,arguments,function*(e,t,n,s={}){Ws++;try{return yield Ci(e,t,n,s)}finally{Ws--}})}function Ci(o,a,r){return ke(this,arguments,function*(e,t,n,s={}){var we,Le,Be,He;const i=t instanceof Uint8Array?t:new Uint8Array(t),u=Eo(i.buffer.slice(i.byteOffset,i.byteOffset+i.byteLength)),l=Do(u);s!=null&&s.classifierBias&&l.classifier&&(l.classifier.bias=Float32Array.from(s.classifierBias));const c=Ds(s),m=(s==null?void 0:s.dilations)||(c==null?void 0:c.dilations)||(l.convs.length===25?[16,8,4,2,1,16,8,4,2,1,16,8,4,2,1,16,8,4,2,1,16,8,4,2,1]:l.convs.length===9?[1,2,4,8,16,8,4,2,1]:Us),d=(s==null?void 0:s.activation)||(c==null?void 0:c.activation)||(l.affines.length||l.convs.length>=13?"gelu_tanh":"relu"),f=l.convs[0].outC,p=f>8?Math.ceil(f/8)*8:Math.ceil(f/4)*4,g=Vo(l,{nx:X,ny:X,nz:X,cs:p,activation:d,dilations:m}),w=Si(i,l,g,s),k=(s==null?void 0:s.outputType)==="probability"?_i(s,g.nclass):null,_=!!((Le=(we=e.features)==null?void 0:we.has)!=null&&Le.call(we,"shader-f16"))&&!(s!=null&&s.disableF16),b=or(e,s),$=X*X*X,M=k?$*4:$,h=g.cs>=16,x=h?g.cs/2:g.cs,P=X*X*x*pt*4,y=X*X*x*wt*4,W=e.limits||{},z=Math.min((Be=W.maxStorageBufferBindingSize)!=null?Be:1/0,(He=W.maxBufferSize)!=null?He:1/0),C=yield Jo(e,g,s,{actBytes:P,outBufBytes:M,hasF16:_});if(e.__v4LastPlan=C,console.info(pi(C,g)),C.layout==="LowMem128"&&g.cs>=8&&g.cs%4===0)return zi(e,g,w,_,b,s,k,C);if(P>z||M>z){const We=Math.max(P,M)>>>20;throw new Error(`meshnet_fast_v4: buffer (${We} MiB) exceeds device limit (${z>>>20} MiB)`)}const L=C.chunkableStd,G=yr({cs:g.cs,chan:g.chan,nclass:g.nclass,clsK4:w.clsK4,dilations:g.dilations,activation:g.activation,norm:g.norm,hasF16:_,subgroupMode:b,splitHalves:h,probCfg:k,chunkableStd:L});console.log(`[WebGPU-V4] ${g.chan}ch(cs=${g.cs})/${g.nclass}cls (${g.dilations.length} convs, ${g.activation}, norm=${g.norm}${k?", prob=3":""}) | ${_?"f16+sterbenz":"f32"} | ${rr(b)} | ZYCX-pad80 | maxBuf=${(Math.max(P,M)/1048576).toFixed(1)} MiB`);const V=GPUBufferUsage.STORAGE,ee=GPUBufferUsage.COPY_DST,S=GPUBufferUsage.COPY_SRC,U=X*X*hn,R=U*(_?2:4),E=Xn*g.cs*16,T=tr*g.cs*16,F=(g.cs*2+4)*16,H=_?Math.ceil(G.totalWEffVec4s/2)*16:G.totalWEffVec4s*16,te=`std|${g.cs}|${h?1:0}|${_?1:0}|${M}`,Y=fr(e,te,()=>{const We=[],Fe=as(e,We),se=Fe.alloc,ie={inpBuf:se(R,V|ee|S),act8_0:se(P,V|ee|S),act8_1:se(h?P:16,V|ee|S),y8_0:se(y,V|ee|S),y8_1:se(h?y:16,V|ee|S),momMainBuf:se(E,V),momExtBuf:se(T,V),momStatsBuf:se(F,V),labels8Buf:se(M,V|ee|S),readbackBuf:se(M,GPUBufferUsage.MAP_READ|ee)};return{buffers:We,named:ie,bytes:Fe.getBytes()}}),{inpBuf:j,act8_0:le,act8_1:he,y8_0:me,y8_1:ce,momMainBuf:Z,momExtBuf:ae,momStatsBuf:A,labels8Buf:Q,readbackBuf:N}=Y.named,re=[],ue=as(e,re),oe=ue.alloc,D=oe(_?w.wF16.byteLength:w.wF32.byteLength,V|ee),J=oe(w.qmetaF32.byteLength,V|ee),K=oe(H,G.useUniformWeff?V|GPUBufferUsage.UNIFORM:V),ve=g.dilations.length,ge=g.norm==="gn"&&!(s!=null&&s.disableConeSkip),xe=Array.from({length:ve},()=>oe(ge?et*4:16,V|ee)),Pe=Array.from({length:ve-1},()=>oe(ge?(et+X*X)*4:16,V|ee)),Oe=oe(ge?et*4:16,V|ee),Ae=oe(16,GPUBufferUsage.UNIFORM|ee),Ee=oe(16,GPUBufferUsage.UNIFORM|ee),Ie=Array.from({length:ve},()=>oe(48,GPUBufferUsage.UNIFORM|ee)),Ue=Array.from({length:ve-1},()=>oe(16,GPUBufferUsage.UNIFORM|ee)),ye=Math.max(256,W.minUniformBufferOffsetAlignment||256),Xe=ye>>>2,Ke=G.chunkableStd?Math.max(1,(ve-1)*ws):0,Qe=G.chunkableStd?oe(Ke*ye,GPUBufferUsage.UNIFORM|ee):null,nt=G.chunkableStd?new Uint32Array(Ke*Xe):null,Ft=G.chunkableStd?null:Array.from({length:ve},()=>oe(16,GPUBufferUsage.UNIFORM|ee));e.queue.writeBuffer(D,0,_?w.wF16:w.wF32),e.queue.writeBuffer(J,0,w.qmetaF32);let vt;try{vt=yield gr(e,g,w,_,b,h,k,G)}catch(We){for(const Fe of re)Fe.destroy();if(re.length=0,Y.pooled)mn.get(e)===Y&&vn(e);else{for(const Fe of Y.buffers)Fe.destroy();Y.buffers.length=0}throw We}const{pInit:_t,pMomFin:Lt,pPrepW:Ut,pNorm:Wt,pNormHalo:bt,pCls:mt,pConv0:rt,pConv:At}=vt,gt=(We,Fe)=>e.createBindGroup({layout:We,entries:Fe.map((se,ie)=>({binding:ie,resource:se&&se.buffer?se:{buffer:se}}))}),Rt=gt(_t.bgl,[le,he]);{const We=e.createCommandEncoder(),Fe=We.beginComputePass();Fe.setPipeline(_t.pipe),Fe.setBindGroup(0,Rt),Fe.dispatchWorkgroups(1,X,X),Fe.end(),e.queue.submit([We.finish()])}const Jt=(G.halfPass0?rt.lo:rt.main).bgl,Gt=gt(Jt,[j,me,ce,D,J,Z,ae,xe[0],Ae]),nn=gt(mt.bgl,[me,ce,D,J,Z,A,Q,Oe,Ee]),Mt=!!(k&&h&&P>=M&&y>=M),qt=Mt?oe(16,GPUBufferUsage.UNIFORM|ee):null,at=Mt?gt(mt.bgl,[me,ce,D,J,Z,A,Q,Oe,qt]):null,$t=wr({device:e,hasF16:_,nvox:$,outBufBytes:M,inpBuf:j,act8_0:le,labels8Buf:Q,readbackBuf:N,pInit:_t,bgInit:Rt,pCls:mt,bgCls:nn,clsUbo:Ee,packed:w,modelEntry:s,probCfg:k,canGpuProb:Mt,probSlots:Mt?{clsUbo1:qt,bgCls1:at,pass0HoldBuf:le,y0:me,y1:ce,b:he,sup:le}:null,ownedBuffers:re,mkBuf:oe}),it=Ie.map((We,Fe)=>gt(Lt.bgl,[D,J,Z,ae,A,K,xe[Fe],We])),Ht=Ue.map((We,Fe)=>gt(Wt.bgl,[le,he,me,ce,Z,ae,A,Pe[Fe],We])),ne=G.chunkableStd?{buffer:Qe,offset:0,size:32}:null,zt=G.halfPassConv?At.lo:At.main,It=Array.from({length:ve},(We,Fe)=>Fe===0?null:gt(zt.bgl,[le,he,me,ce,Z,ae,K,xe[Fe],G.chunkableStd?ne:Ft[Fe]])),Ze=(We,Fe,se,ie,fe,O)=>{const pe=We*Xe;nt[pe]=Fe?1:0,nt[pe+1]=se,nt[pe+2]=ie,nt[pe+3]=0,nt[pe+4]=fe,nt[pe+5]=O,nt[pe+6]=0,nt[pe+7]=0},Ge=(We,Fe,se,ie,fe,O,pe,$e)=>{if(!(O<=0&&pe<=0))if(G.halfPassConv){{const be=We.beginComputePass();ie?be.setBindGroup(0,se,ie):be.setBindGroup(0,se),O>0&&(be.setPipeline(Fe.lo.pipe),be.dispatchWorkgroups(1,fe,O)),pe>0&&(be.setPipeline(Fe.extLo.pipe),be.dispatchWorkgroups(1,1,pe)),be.end(),$e.push("convHidden")}{const be=We.beginComputePass();ie?be.setBindGroup(0,se,ie):be.setBindGroup(0,se),O>0&&(be.setPipeline(Fe.hi.pipe),be.dispatchWorkgroups(1,fe,O)),pe>0&&(be.setPipeline(Fe.extHi.pipe),be.dispatchWorkgroups(1,1,pe)),be.end(),$e.push("convHidden")}}else{const be=We.beginComputePass();ie?be.setBindGroup(0,se,ie):be.setBindGroup(0,se),O>0&&(be.setPipeline(Fe.main.pipe),be.dispatchWorkgroups(1,fe,O)),pe>0&&(be.setPipeline(Fe.ext.pipe),be.dispatchWorkgroups(1,1,pe)),be.end(),$e.push("convHidden")}},tt=_?new Uint16Array(U):new Float32Array(U),ut=new Uint8Array(X*X),v=new Uint32Array(et),B=new Uint32Array(et+X*X),q=new Uint32Array(12),de=new Float32Array(q.buffer),I=new Uint32Array(4);function Me(We,Fe){return ke(this,null,function*(){if(We.length!==$)throw new Error(`meshnet_fast_v4 expected ${$} voxels, got ${We.length}`);const se=g.norm==="gn"&&!(s!=null&&s.disableConeSkip),ie=yield $t.prepareInput({volume:We,ioOpts:Fe,useCone:se,padInputHost:tt,headRowHost:ut,hasF16Flag:_}),fe=ie.info,O=_r(ut,fe,g.dilations,se);let pe=C.execMode==="calibrate"&&e.__v4WinCalibrated?e.__v4WinFast?"pipelined":"paced":C.execMode;const $e=[];if(pe==="single"&&!G.chunkableStd){const qe=e.createCommandEncoder();ie.runPrePasses(qe,$e),O.clsSkipped&&(qe.clearBuffer(Q,0,M),O.clsStrips.length>0&&e.queue.writeBuffer(Oe,0,O.clsStrips));for(let _e=0;_e<ve;_e++){const ze=O.layers[_e],Ve=ze.isFull?et:ze.mainStrips.length,st=ze.isFull||!ze.extStrips?0:ze.extStrips.length,ht=ze.nMomExt||0,xt=ze.haloRows?ze.haloRows.length:0,Ct=ze.isFull?et:ze.normStrips?ze.normStrips.length:0;if(!ze.isFull&&(Ve>0||st>0)&&(Ve>0&&v.set(ze.mainStrips,0),st>0&&v.set(ze.extStrips,Ve),e.queue.writeBuffer(xe[_e],0,v.subarray(0,Ve+st))),_e===0){const Je=ze.isFull?64:1,Ne=ze.isFull?X:Ve,ot=!!(ze.bgStrip&&xt>0);if(I[0]=ze.isFull?1:0,I[1]=ze.bgStrip?ze.bgStrip.yWg*4:0,I[2]=ze.bgStrip?ze.bgStrip.z:0,I[3]=0,e.queue.writeBuffer(Ae,0,I),G.halfPass0){{const Ye=qe.beginComputePass();Ye.setBindGroup(0,Gt),Ne>0&&(Ye.setPipeline(rt.lo.pipe),Ye.dispatchWorkgroups(1,Je,Ne)),ot&&(Ye.setPipeline(rt.bgLo.pipe),Ye.dispatchWorkgroups(1,1,1)),Ye.end(),$e.push("conv0")}{const Ye=qe.beginComputePass();Ye.setBindGroup(0,Gt),Ne>0&&(Ye.setPipeline(rt.hi.pipe),Ye.dispatchWorkgroups(1,Je,Ne)),ot&&(Ye.setPipeline(rt.bgHi.pipe),Ye.dispatchWorkgroups(1,1,1)),Ye.end(),$e.push("conv0")}}else{const Ye=qe.beginComputePass();Ye.setBindGroup(0,Gt),Ne>0&&(Ye.setPipeline(rt.main.pipe),Ye.dispatchWorkgroups(1,Je,Ne)),ot&&(Ye.setPipeline(rt.bg.pipe),Ye.dispatchWorkgroups(1,1,1)),Ye.end(),$e.push("conv0")}}else{const Je=g.dilations[_e],Ne=It[_e],ot=ze.isFull?64:1,Ye=ze.isFull?X:Ve,St=ze.mode==="rpure"&&xt>0||ze.mode==="bwd"&&_e+1<ve;I[0]=ze.isFull?1:0,I[1]=Ve,I[2]=Rs(Je,St),I[3]=0,e.queue.writeBuffer(Ft[_e],0,I),Ge(qe,At,Ne,null,ot,Ye,st,$e)}const Bt=_e+1<ve?w.w0Vec4s+_e*w.hiddenVec4PerLayer:0;q[0]=_e*w.metaStride,q[1]=Bt,q[2]=(_e+1)*w.metaStride,q[3]=_e+1<ve?1:0,q[4]=_e===0?1:0,q[5]=ze.isFull?1:0,q[6]=Ve,q[7]=ht*8,de[8]=ze.extWeight||0,q[9]=0,q[10]=0,q[11]=0,e.queue.writeBuffer(Ie[_e],0,q);{const Je=qe.beginComputePass();Je.setBindGroup(0,it[_e]),Je.setPipeline(Lt.pipe),Je.dispatchWorkgroups(g.cs,1,1),Je.end(),$e.push("momentsPrep")}if(_e+1<ve){{const Ne=qe.beginComputePass();Ne.setBindGroup(0,it[_e]),Ne.setPipeline(Ut.pipe),Ne.dispatchWorkgroups(1,1,1),Ne.end(),$e.push("momentsPrep")}const Je=ze.isFull?0:Ct;if((Je>0||xt>0)&&(Je>0&&B.set(ze.normStrips,0),xt>0&&B.set(ze.haloRows,Je),e.queue.writeBuffer(Pe[_e],0,B.subarray(0,Je+xt))),I[0]=ze.isFull?1:0,I[1]=ze.bgStrip?ze.bgStrip.z*X+ze.bgStrip.yWg*4:0,I[2]=Je,I[3]=xt,e.queue.writeBuffer(Ue[_e],0,I),ze.isFull||Ct>0||xt>0){const Ne=qe.beginComputePass();Ne.setBindGroup(0,Ht[_e]),(ze.isFull||Ct>0)&&(Ne.setPipeline(Wt.pipe),Ne.dispatchWorkgroups(1,ze.isFull?64:1,ze.isFull?X:Ct)),xt>0&&(Ne.setPipeline(bt.pipe),Ne.dispatchWorkgroups(1,Math.ceil(xt/4),1)),Ne.end(),$e.push("normHalo")}}}return Me.__passCategories=$e,$t.finishAndReadback({enc:qe,schedule:O,passCategories:$e,u4Tmp:I,ioOpts:Fe})}const be=jn(e),Se=typeof(Fe==null?void 0:Fe.onProgress)=="function"?Fe.onProgress:null,Re=lr(O,ve);let De=0,Ce=-1;const je=qe=>{if(!Se)return;const _e=Math.min(.99,De/Re);let ze="";qe>=0&&qe!==Ce&&(Ce=qe,ze=`Layer ${qe+1}/${ve}`),Se(_e,ze)},ct=ir(e,C.msPerStrip||e.__v4MsPerStrip||.12,je);let Te=e.createCommandEncoder();ie.runPrePasses(Te,$e),O.clsSkipped&&(Te.clearBuffer(Q,0,M),O.clsStrips.length>0&&e.queue.writeBuffer(Oe,0,O.clsStrips));for(let qe=0;qe<ve;qe++){const _e=O.layers[qe],ze=_e.isFull?et:_e.mainStrips.length,Ve=_e.isFull||!_e.extStrips?0:_e.extStrips.length,st=_e.nMomExt||0,ht=_e.haloRows?_e.haloRows.length:0,xt=_e.isFull?et:_e.normStrips?_e.normStrips.length:0,Ct=Zs(_e,qe,ve);if(!_e.isFull&&(ze>0||Ve>0)&&(ze>0&&v.set(_e.mainStrips,0),Ve>0&&v.set(_e.extStrips,ze),e.queue.writeBuffer(xe[qe],0,v.subarray(0,ze+Ve))),qe===0){const Je=_e.isFull?64:1,Ne=_e.isFull?X:ze,ot=!!(_e.bgStrip&&ht>0);if(I[0]=_e.isFull?1:0,I[1]=_e.bgStrip?_e.bgStrip.yWg*4:0,I[2]=_e.bgStrip?_e.bgStrip.z:0,I[3]=0,e.queue.writeBuffer(Ae,0,I),G.halfPass0){{const Ye=Te.beginComputePass();Ye.setBindGroup(0,Gt),Ne>0&&(Ye.setPipeline(rt.lo.pipe),Ye.dispatchWorkgroups(1,Je,Ne)),ot&&(Ye.setPipeline(rt.bgLo.pipe),Ye.dispatchWorkgroups(1,1,1)),Ye.end(),$e.push("conv0")}{const Ye=Te.beginComputePass();Ye.setBindGroup(0,Gt),Ne>0&&(Ye.setPipeline(rt.hi.pipe),Ye.dispatchWorkgroups(1,Je,Ne)),ot&&(Ye.setPipeline(rt.bgHi.pipe),Ye.dispatchWorkgroups(1,1,1)),Ye.end(),$e.push("conv0")}}else{const Ye=Te.beginComputePass();Ye.setBindGroup(0,Gt),Ne>0&&(Ye.setPipeline(rt.main.pipe),Ye.dispatchWorkgroups(1,Je,Ne)),ot&&(Ye.setPipeline(rt.bg.pipe),Ye.dispatchWorkgroups(1,1,1)),Ye.end(),$e.push("conv0")}pe==="calibrate"?(e.queue.submit([Te.finish()]),Te=e.createCommandEncoder()):pe==="paced"&&(De+=Ct.convWork,Te=yield ct.submitChunk(Te,Ct.convWork,0,{forceUiYield:!0}))}else{const Je=g.dilations[qe],Ne=It[qe],ot=_e.isFull?64:1,Ye=_e.isFull?X:ze,St=_e.mode==="rpure"&&ht>0||_e.mode==="bwd"&&qe+1<ve,Nt=Rs(Je,St);if(!G.chunkableStd)I[0]=_e.isFull?1:0,I[1]=ze,I[2]=Nt,I[3]=0,e.queue.writeBuffer(Ft[qe],0,I),Ge(Te,At,Ne,null,ot,Ye,Ve,$e);else if(pe==="pipelined"||pe==="single"){const en=(qe-1)*ws;Ze(en,_e.isFull,ze,Nt,0,0),e.queue.writeBuffer(Qe,en*ye,nt.subarray(en*Xe,(en+1)*Xe)),Ge(Te,At,Ne,[en*ye],ot,Ye,Ve,$e)}else{const en=(qe-1)*ws,ls=pe==="calibrate"?1024:Math.max(256,Math.min(4096,Math.round(sr/Math.max(.005,ct.getMsPerStrip())))),zn=[];let En=0;if(_e.isFull){const on=Math.max(4,Math.min(64,Math.round(ls/64)));for(let Xt=0;Xt<X;Xt+=on){const Ot=Math.min(on,X-Xt),rn=en+En++;Ze(rn,!0,ze,Nt,Xt,0),zn.push({slotIdx:rn,mainY:64,mainCountZ:Ot,extCountZ:0,strips:Ot*64})}}else{const on=Math.max(256,ls);for(let Ot=0;Ot<ze;Ot+=on){const rn=Math.min(on,ze-Ot),xn=en+En++;Ze(xn,!1,ze,Nt,Ot,0),zn.push({slotIdx:xn,mainY:1,mainCountZ:rn,extCountZ:0,strips:rn})}const Xt=Math.max(256,ls);for(let Ot=0;Ot<Ve;Ot+=Xt){const rn=Math.min(Xt,Ve-Ot),xn=en+En++;Ze(xn,!1,ze,Nt,0,Ot),zn.push({slotIdx:xn,mainY:1,mainCountZ:0,extCountZ:rn,strips:rn})}}En>0&&e.queue.writeBuffer(Qe,en*ye,nt.subarray(en*Xe,(en+En)*Xe));let sn=0;for(let on=0;on<zn.length;on++){const Xt=zn[on];if(Ge(Te,At,Ne,[Xt.slotIdx*ye],Xt.mainY,Xt.mainCountZ,Xt.extCountZ,$e),pe==="pipelined")continue;sn+=Xt.strips;const Ot=on===zn.length-1;if(pe==="calibrate"&&(sn>=512||Ot&&sn>0)){const rn=performance.now();e.queue.submit([Te.finish()]),yield e.queue.onSubmittedWorkDone();const xn=performance.now()-rn;if(Te=e.createCommandEncoder(),De+=sn,sn>=512){const oo=xn/sn,us=oo*et;e.__v4WinCalibrated=!0,ct.setMsPerStrip(oo),!be.isWindowsSharedIgpu&&us<nr?(e.__v4WinFast=!0,pe="pipelined",console.log(`[WebGPU-V4] Windows GPU calibration: estFullLayer=${us.toFixed(1)}ms -> unthrottled pipelined mode`)):(e.__v4WinFast=!1,pe="paced",console.log(`[WebGPU-V4] Windows GPU calibration: estFullLayer=${us.toFixed(1)}ms -> TDR-safe 2-in-flight paced mode`),je(qe))}sn=0}else pe==="paced"&&(De+=sn,Te=yield ct.submitChunk(Te,sn,qe),sn=0)}}}const Bt=qe+1<ve?w.w0Vec4s+qe*w.hiddenVec4PerLayer:0;q[0]=qe*w.metaStride,q[1]=Bt,q[2]=(qe+1)*w.metaStride,q[3]=qe+1<ve?1:0,q[4]=qe===0?1:0,q[5]=_e.isFull?1:0,q[6]=ze,q[7]=st*8,de[8]=_e.extWeight||0,q[9]=0,q[10]=0,q[11]=0,e.queue.writeBuffer(Ie[qe],0,q);{const Je=Te.beginComputePass();Je.setBindGroup(0,it[qe]),Je.setPipeline(Lt.pipe),Je.dispatchWorkgroups(g.cs,1,1),Je.end(),$e.push("momentsPrep")}if(qe+1<ve){{const Ne=Te.beginComputePass();Ne.setBindGroup(0,it[qe]),Ne.setPipeline(Ut.pipe),Ne.dispatchWorkgroups(1,1,1),Ne.end(),$e.push("momentsPrep")}const Je=_e.isFull?0:xt;if((Je>0||ht>0)&&(Je>0&&B.set(_e.normStrips,0),ht>0&&B.set(_e.haloRows,Je),e.queue.writeBuffer(Pe[qe],0,B.subarray(0,Je+ht))),I[0]=_e.isFull?1:0,I[1]=_e.bgStrip?_e.bgStrip.z*X+_e.bgStrip.yWg*4:0,I[2]=Je,I[3]=ht,e.queue.writeBuffer(Ue[qe],0,I),_e.isFull||xt>0||ht>0){const Ne=Te.beginComputePass();Ne.setBindGroup(0,Ht[qe]),(_e.isFull||xt>0)&&(Ne.setPipeline(Wt.pipe),Ne.dispatchWorkgroups(1,_e.isFull?64:1,_e.isFull?X:xt)),ht>0&&(Ne.setPipeline(bt.pipe),Ne.dispatchWorkgroups(1,Math.ceil(ht/4),1)),Ne.end(),$e.push("normHalo")}}if(pe==="pipelined")e.queue.submit([Te.finish()]),Te=e.createCommandEncoder();else if(pe==="calibrate")e.queue.submit([Te.finish()]),yield e.queue.onSubmittedWorkDone(),Te=e.createCommandEncoder(),De+=(qe===0||!G.chunkableStd?Ct.convWork:0)+Ct.normWork,qe===ve-1&&!e.__v4WinCalibrated&&(e.__v4WinCalibrated=!0,e.__v4WinFast=!be.isWindowsSharedIgpu);else if(pe!=="single"){const Je=(!G.chunkableStd&&qe>0?Ct.convWork:0)+Ct.normWork;De+=Je,Te=yield ct.submitChunk(Te,Je,qe)}}return pe==="paced"&&(yield ct.waitBeforeFinalSubmit()),Me.__passCategories=$e,$t.finishAndReadback({enc:Te,schedule:O,passCategories:$e,u4Tmp:I,ioOpts:Fe,paced:pe==="paced",onProgress:Se})})}return $t.warmupIoPipelines(),Me.dispose=({keepSharedWorkspace:We=!1}={})=>{$t.dispose();for(const Fe of re)Fe.destroy();if(re.length=0,ue.resetBytes(),Y.pooled)We?Y.inUse=!1:mn.get(e)===Y&&vn(e);else{for(const Fe of Y.buffers)Fe.destroy();Y.buffers.length=0}},Me.gpuBytes=()=>Y.bytes+ue.getBytes(),Me.__passCategories=[],Me.__coneInfo=()=>({paddedVox:U,actMiB:P/1048576}),Me.__v4Plan=()=>C,Me.kernels="v4-int8",Me})}function to(e){return ke(this,null,function*(){var a,r;if(!e)return;const t=()=>Ws>0||!!e.__isLost;if(t())return;const n=!!((r=(a=e.features)==null?void 0:a.has)!=null&&r.call(a,"shader-f16")),s=or(e,null);if(yield cn(e,n?"prep_in_u8_f16":"prep_in_u8_f32",()=>Is(!0,n),"main",["read-only-storage","storage","uniform"]),t()||(yield cn(e,"transpose_u8_v4",pr,"main",["read-only-storage","storage"]),t()))return;const o=[{chan:24,cs:24,nclass:0,dilations:Us,activation:"gelu_tanh",norm:"gn"},{chan:15,cs:16,nclass:0,dilations:[16,8,4,2,1],activation:"gelu_tanh",norm:"gn"},{chan:16,cs:16,nclass:0,dilations:Us,activation:"gelu_tanh",norm:"gn"}];for(const i of o){if(t())return;const u=i.cs>=16,l=u?i.cs/2:i.cs,c=X*X*l*pt*4,m=yield Jo(e,i,null,{actBytes:c,outBufBytes:X*X*X,hasF16:n});if(t())return;if(m.layout==="LowMem128"){const d=$r({cs:i.cs,chan:i.chan,nclass:0,clsK4:0,dilations:i.dilations,activation:i.activation,norm:i.norm,hasF16:n,subgroupMode:s,numConvs:i.dilations.length,probCfg:null});yield dr(e,i,null,n,s,null,d,{includeCls:!1,sequential:!0,shouldAbort:t})}else{const d=m.chunkableStd,f=yr({cs:i.cs,chan:i.chan,nclass:0,clsK4:0,dilations:i.dilations,activation:i.activation,norm:i.norm,hasF16:n,subgroupMode:s,splitHalves:u,probCfg:null,chunkableStd:d});yield gr(e,i,null,n,s,u,null,f,{includeCls:!1,sequential:!0,shouldAbort:t})}}})}const Bi=(e,t)=>ke(null,null,function*(){const n=yield fetch(t).then(s=>s.arrayBuffer());return eo(e,new Uint8Array(n))}),Mr=!0,Fi={load:Bi,setupNet:eo,warmupV4CorePipelines:to,supportsF32Fallback:Sr,supportsGpuNativeIO:Mr},Gs=Object.freeze(Object.defineProperty({__proto__:null,default:Fi,releaseV4Workspace:vn,setupNet:eo,supportsF32Fallback:Sr,supportsGpuNativeIO:Mr,warmupV4CorePipelines:to},Symbol.toStringTag,{value:"Module"}));function Li(){var e;try{if(new URLSearchParams(((e=globalThis.location)==null?void 0:e.search)||"").get("webgpuKernels")==="tinygrad")return"disabled by ?webgpuKernels=tinygrad"}catch(t){}return null}const Tn=new Set(["meshnet_fast_v4","dkatlas24_int8","mindmap24_int8","model16chan18cls_int8","mindgrab_int8"]);function Ui(e){return Tn.has(e)}const An=Object.assign({"./webgpu_runners/dkatlas24_synth_f32_runner.js":()=>bn(()=>import("./dkatlas24_synth_f32_runner-Bb7lxqr0.js"),[],import.meta.url),"./webgpu_runners/dkatlas24_synth_runner.js":()=>bn(()=>import("./dkatlas24_synth_runner-5rLWbXWF.js"),[],import.meta.url),"./webgpu_runners/mindgrab_runner.js":()=>bn(()=>import("./mindgrab_runner-B-UQtXej.js"),[],import.meta.url),"./webgpu_runners/model16chan18cls_f32_runner.js":()=>bn(()=>import("./model16chan18cls_f32_runner-B5FaUMez.js"),[],import.meta.url),"./webgpu_runners/model16chan18cls_runner.js":()=>bn(()=>import("./model16chan18cls_runner-aMK3m7Gj.js"),[],import.meta.url),"./webgpu_runners/model24chan18cls_gdice_prio_probability_runner.js":()=>bn(()=>import("./model24chan18cls_gdice_prio_probability_runner-BHqpfuCi.js"),[],import.meta.url),"./webgpu_runners/model24chan18cls_gdice_prio_runner.js":()=>bn(()=>import("./model24chan18cls_gdice_prio_runner-B5cN26gD.js"),[],import.meta.url)});function Wi(){const e=Object.keys(An).map(t=>{const n=t.match(/\/([^\/]+)_runner\.js$/);return n?n[1]:null}).filter(Boolean);return Array.from(new Set([...Tn,...e]))}function Ri(e){if(Tn.has(e))return()=>ke(null,null,function*(){return Gs});const t=`./webgpu_runners/${e}_runner.js`;if(An[t])return An[t];const n=e.toLowerCase();for(const s of Tn)if(s.toLowerCase()===n)return()=>ke(null,null,function*(){return Gs});for(const[s,o]of Object.entries(An))if(s.toLowerCase().includes(`/${n}_runner.js`))return o;for(const[s,o]of Object.entries(An))if(s.includes(e))return o;return null}function qi(e){if(Tn.has(e))return!0;const t=`./webgpu_runners/${e}_runner.js`;if(An[t])return!0;const n=e.toLowerCase();for(const o of Tn)if(o.toLowerCase()===n)return!0;const s=`/${n}_runner.js`;return Object.keys(An).some(o=>o.toLowerCase().endsWith(s))}function Ii(e,t){if(typeof Float16Array=="undefined")throw new Error("Float16Array unavailable: cannot cast fp32 master weights to fp16.");const n=new DataView(e.buffer,e.byteOffset,e.byteLength),s=Number(n.getBigUint64(0,!0)),o=JSON.parse(new TextDecoder("utf8").decode(e.subarray(8,8+s))),a=8+s;if(!Object.entries(o).some(([p,g])=>p!=="__metadata__"&&g.dtype==="F32"))return e;const i={},u=[];let l=0;for(const[p,g]of Object.entries(o)){if(p==="__metadata__"){i[p]=g;continue}const[w,k]=g.data_offsets,_=e.subarray(a+w,a+k);let b,$;if(g.dtype==="F32"){const M=new Float32Array(_.slice().buffer),h=new Float16Array(M);b=new Uint8Array(h.buffer),$="F16"}else b=_,$=g.dtype;i[p]={dtype:$,shape:g.shape,data_offsets:[l,l+b.byteLength]},u.push(b),l+=b.byteLength}const c=new TextEncoder().encode(JSON.stringify(i)),m=(8-c.byteLength%8)%8,d=new Uint8Array(8+c.byteLength+m+l);new DataView(d.buffer).setBigUint64(0,BigInt(c.byteLength+m),!0),d.set(c,8),d.fill(32,8+c.byteLength,8+c.byteLength+m);let f=8+c.byteLength+m;for(const p of u)d.set(p,f),f+=p.byteLength;return console.log("[WebGPU] Cast fp32 master weights -> fp16."),d}function Gi(e,t){try{const n=r=>!!(e.features&&e.features.has&&e.features.has(r)),s=e.limits||{},o=typeof navigator!="undefined"&&navigator.userAgent||"unknown",a=/Safari/.test(o)&&!/Chrome|Chromium|Android/.test(o);console.log("[SAFARI-DEBUG] ===== WebGPU device capabilities ====="),console.log("[SAFARI-DEBUG] model:",(t==null?void 0:t.modelName)||(t==null?void 0:t.webgpu_runner)||"(unknown)"),console.log("[SAFARI-DEBUG] userAgent:",o,"| classified Safari:",a),console.log("[SAFARI-DEBUG] shader-f16:",n("shader-f16")),console.log("[SAFARI-DEBUG] features:",e.features?Array.from(e.features):"(none)"),console.log("[SAFARI-DEBUG] limits:",{maxBufferSize:s.maxBufferSize,maxStorageBufferBindingSize:s.maxStorageBufferBindingSize,maxComputeInvocationsPerWorkgroup:s.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:s.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:s.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:s.maxComputeWorkgroupSizeZ,maxComputeWorkgroupsPerDimension:s.maxComputeWorkgroupsPerDimension}),console.log("[SAFARI-DEBUG] BC_WEBGPU_DEBUG (logits readback):",typeof window!="undefined"&&!!window.BC_WEBGPU_DEBUG),console.log("[SAFARI-DEBUG] =======================================")}catch(n){console.warn("[SAFARI-DEBUG] capability dump failed:",n==null?void 0:n.message)}}function kr(){return typeof requestAnimationFrame!="function"?new Promise(e=>setTimeout(e,0)):new Promise(e=>{let t=!1;const n=()=>{t||(t=!0,e())},s=setTimeout(n,25);requestAnimationFrame(()=>{clearTimeout(s),setTimeout(n,0)})})}const Ni=6,Oi=4,$n=new Map,xs=new Map,Sn=new Map,wn=new WeakMap,ys=new WeakSet;function Ti(e){vn(e)}function Ei(e){return ke(this,null,function*(){if(!(!e||ys.has(e))){ys.add(e);try{yield to(e)}catch(t){ys.delete(e),console.debug("[WebGPU] Background pipeline warmup skipped:",(t==null?void 0:t.message)||t)}}})}function Pr(e,{keepSharedWorkspace:t=!1}={}){var n;if(e)try{if(typeof((n=e.execute)==null?void 0:n.dispose)=="function")e.execute.dispose({keepSharedWorkspace:t});else if(e.ownedBuffers)for(const s of e.ownedBuffers)s.destroy()}catch(s){console.warn("[WebGPU] Failed to dispose cached runner buffers:",s)}}function Di(e,t,n,s){var o,a,r,i,u,l,c,m,d,f,p,g,w,k,_,b,$,M,h;return JSON.stringify([e,t,n,(o=s.id)!=null?o:null,(a=s.numClasses)!=null?a:null,(r=s.outputType)!=null?r:null,(i=s.dilations)!=null?i:null,(u=s.activation)!=null?u:null,(l=s.quantize8Bit)!=null?l:null,(c=s.forceFP32)!=null?c:null,(m=s.disableF16)!=null?m:null,(d=s.disableSubgroups)!=null?d:null,(f=s.disableConeSkip)!=null?f:null,(p=s.forceLowMem128)!=null?p:null,(g=s.webgpuExecMode)!=null?g:null,(w=s.softmaxTemperature)!=null?w:null,(k=s.brainSupportTemperature)!=null?k:null,(_=s.brainSupportPower)!=null?_:null,(b=s.partialVolumeSigma)!=null?b:null,($=s.probabilityGroups)!=null?$:null,(M=s.probabilityDisplay)!=null?M:null,(h=s.classifierBias)!=null?h:null])}function Fo(e){const t=$n.get(e);if(t)return $n.delete(e),$n.set(e,t),Promise.resolve(t);const n=xs.get(e);if(n)return n;const s=ke(null,null,function*(){let o;try{const r=yield fetch(e);if(!r.ok)throw new Error(`HTTP ${r.status}: ${r.statusText}`);o=yield r.arrayBuffer()}catch(r){throw new Error(`Failed to load weights from '${e}': ${r.message}`)}const a=new Uint8Array(o);for($n.set(e,a);$n.size>Ni;){const r=$n.keys().next().value;$n.delete(r)}return a}).finally(()=>{xs.delete(e)});return xs.set(e,s),s}function Vi(e,t,n,s){if(!n)return e;const o=Sn.get(t);if(o)return Sn.delete(t),Sn.set(t,o),o;const a=Ii(e);for(Sn.set(t,a);Sn.size>Oi;){const r=Sn.keys().next().value;Sn.delete(r)}return a}function Ns(e,t){return ke(this,null,function*(){const n=[],s=e.createBuffer.bind(e);e.createBuffer=o=>{const a=s(o);return n.push(a),a};try{return{result:yield t(),buffers:n}}finally{e.createBuffer=s}})}function Os(e){let t=0;for(const n of e)t+=Number(n==null?void 0:n.size)||0;return t}function $s(e){for(const t of e)try{t.destroy()}catch(n){}}function Hi(e,t,n){return ke(this,null,function*(){var M,h,x,P,y,W,z;const s=(M=Li())!=null?M:Ya(e,t);let o=t.webgpu_runner,a=t.webgpu_safetensor;const r=!!(e.features&&e.features.has&&e.features.has("shader-f16"));let i=!1;s&&(t.forceFP32?(i=!0,console.log("[WebGPU] forceFP32: using fp32 runner and weights.")):!r&&qi(`${o}_f32`)&&(i=!0,console.log("[WebGPU] shader-f16 not supported on this device -> auto-selecting fp32 runner and weights.")),i&&(o=`${o}_f32`,a=a.replace(".safetensors","_f32.safetensors")),t.enableTTA&&t.webgpuTTArunner&&(console.log("[WebGPU] TTA Enabled: Switching to TTA runner and weights."),o=`${o}_tta`,a=a.replace(".safetensors","_tta.safetensors")));const l=Di(s?"runner":"native",s?o:"webgpu_native",a,t),c=wn.get(e);if(c&&c.runnerKey===l)return kt(lt({},c),{cacheHit:!0});const m=!!(s&&Ui(o));if(n("Loading model…",.1),c&&(wn.delete(e),Pr(c,{keepSharedWorkspace:m})),m||vn(e),Gi(e,t),s)console.log(`[WebGPU-native] not used for ${t.modelName||t.webgpu_runner}: ${s}`);else{let C=[];try{const L=yield Fo(a),G=yield Ns(e,()=>Qa(e,L,n,t));C=G.buffers;const V=G.result;V.kernels="hand-written";const ee={runnerKey:l,runnerName:"webgpu_native",weightsPath:a,execute:V,supportsGpuNativeIO:!1,ownedBuffers:C,gpuBytes:Os(C)};return wn.set(e,ee),console.log("[WebGPU-native] Using hand-written WebGPU kernels."),kt(lt({},ee),{cacheHit:!1})}catch(L){$s(C),console.warn("[WebGPU-native] falling back to the tinygrad runner:",(L==null?void 0:L.message)||L)}}const d=m?()=>ke(null,null,function*(){return Gs}):Ri(o);if(!d){const C=Wi();throw new Error(`Runner '${o}' not found. Available runners: ${C.join(", ")||"none"}. Looking in: ./webgpu_runners/`)}const[f,p]=yield Promise.all([d(),Fo(a)]);if(!f.setupNet&&!((h=f.default)!=null&&h.setupNet))throw new Error(`Runner module '${o}' doesn't export 'setupNet'. Exported keys: ${Object.keys(f).join(", ")}`);const g=!!((P=f.supportsF32Fallback)!=null?P:(x=f.default)!=null&&x.supportsF32Fallback),w=!!((W=f.supportsGpuNativeIO)!=null?W:(y=f.default)!=null&&y.supportsGpuNativeIO);!i&&!r&&!g&&console.warn(`[WebGPU] shader-f16 not supported and no fp32 runner ('${o}_f32') available; the fp16 runner will likely fail and fall back to WebGL2.`);const _=Vi(p,a,!i&&!g),b=f.setupNet||((z=f.default)==null?void 0:z.setupNet);let $=[];try{const C=yield Ns(e,()=>b(e,_,n,t));$=C.buffers;const L=C.result;if(typeof L!="function")throw $s($),new Error(`setupNet for '${o}' didn't return a function. Returned type: ${typeof L}`);const G={runnerKey:l,runnerName:o,weightsPath:a,execute:L,supportsGpuNativeIO:w,ownedBuffers:typeof L.dispose=="function"?null:$,gpuBytes:typeof L.gpuBytes=="function"?L.gpuBytes():Os($)};return wn.set(e,G),kt(lt({},G),{cacheHit:!1})}catch(C){m&&vn(e),$s($);const L=new Error(`Failed to setup network for '${o}': ${C.message}`,{cause:C});throw C!=null&&C.oomError&&(L.oomError=C.oomError),L}})}function Xi(e,t,n,s,o,a,r){return ke(this,null,function*(){var d,f,p,g;const i=n.outputType==="probability";console.log("Starting WebGPU inference..."),r(i?"Starting tissue estimation…":"Starting segmentation…",0);const u=ba(n,_a.WEBGPU);u.isModelFullVol=!0;let l=!1,c=null;const m=xa(n);try{if(!e)throw new Error("WebGPU device is required but not provided");if(!(n!=null&&n.webgpu_runner))throw new Error("Model entry must specify webgpu_runner property");if(!(n!=null&&n.webgpu_safetensor))throw new Error("Model entry must specify webgpu_safetensor property");const w=n.webgpuStorageSize||335544320;if(e.limits){const A=re=>(re/1048576).toFixed(0),Q=(d=e.limits.maxStorageBufferBindingSize)!=null?d:1/0,N=(f=e.limits.maxBufferSize)!=null?f:1/0;if(Q<w||N<w){const re=A(Math.min(Q,N)),ue=A(w),oe=`[WebGPU] Device buffer limit (${re} MB) is below the ${ue} MB this model needs - using WebGL2 fallback.`;throw console.warn(oe),new Error(oe)}}e.pushErrorScope("out-of-memory"),l=!0;const k=performance.now();c=yield Hi(e,n,r);const _=((performance.now()-k)/1e3).toFixed(4),b=performance.now();r("Preparing volume…",.25);const $=[256,256,256],M=c.supportsGpuNativeIO&&!!n.enableTranspose&&!n.inputPermutation,h=c.supportsGpuNativeIO&&!!n.enableTranspose&&!n.outputPermutation;let x,P;if(n.enableQuantileNorm){const{qmin:A,qmax:Q}=fa(o);x=A,P=Q-A}else{const{min:A,max:Q}=pa(o);x=A,P=Q-A}const y=P===0?1:P;let W=null,z,C=$;if(M)m&&(W=mo(o,x,y)),z=o;else{const A=mo(o,x,y);if(m&&(W=A),n.inputPermutation){console.log(`[WebGPU] Permuting Input: ${n.inputPermutation}`);const Q=n.inputPermutation;C=[$[Q[0]],$[Q[1]],$[Q[2]]],z=Un(A,$,Q)}else n.enableTranspose?z=Un(A,$,[2,1,0]):z=A}const L=((performance.now()-b)/1e3).toFixed(4);r("",.3),r(i?"Estimating tissue maps…":"Segmenting…",.3),yield kr();const G=performance.now(),V=c.supportsGpuNativeIO?(A,Q)=>{const N=Math.max(0,Math.min(1,Number(A)||0));r(Q?`Segmenting… · ${Q}`:"",.3+.6*N)}:void 0,ee=M||h||V?{gpuNativeInput:M,gpuNativeOutput:h,normOffset:x,normRange:y,onProgress:V}:void 0,S=yield Ns(e,()=>ee?c.execute(z,ee):c.execute(z)),U=S.result;if(typeof c.execute.gpuBytes=="function"){c.gpuBytes=c.execute.gpuBytes();const A=wn.get(e);A&&A.runnerKey===c.runnerKey&&(A.gpuBytes=c.gpuBytes)}else if(S.buffers.length>0){c.gpuBytes=(c.gpuBytes||0)+Os(S.buffers),c.ownedBuffers&&c.ownedBuffers.push(...S.buffers);const A=wn.get(e);A&&A.runnerKey===c.runnerKey&&(A.gpuBytes=c.gpuBytes)}l=!1;const R=yield e.popErrorScope();if(R){const A=new Error(`WebGPU out of memory (${R.message||"allocation failed"})`);throw A.oomError=R,A}if(!U||!Array.isArray(U))throw new Error(`Inference didn't return expected array format. Returned: ${typeof U}`);const E=((performance.now()-G)/1e3).toFixed(4),T=(c.gpuBytes||0)/1048576;if(u.GPU_Memory_MiB=Math.round(T),u.WebGPU_Kernels=c.execute.kernels||"tinygrad",typeof c.execute.__v4Plan=="function"){const A=c.execute.__v4Plan();u.WebGPU_V4_Layout=A.layout,u.WebGPU_V4_Exec=A.execMode,u.WebGPU_V4_Reason=A.reason,Number.isFinite(A.probeMs)&&(u.WebGPU_V4_Probe_ms=Number(A.probeMs.toFixed(1))),typeof window!="undefined"&&window.webgpuDiagnostics&&(window.webgpuDiagnostics.v4Plan={layout:A.layout,execMode:A.execMode,reason:A.reason,tier:A.tier,probeMs:A.probeMs,estFullLayerMs:A.estFullLayerMs,fromCache:A.fromCache,safeMode:A.safeMode})}const F=T>=1024?`${(T/1024).toFixed(2)} GiB`:`${Math.round(T)} MiB`;console.log(`WebGPU inference took ${E}s (${u.WebGPU_Kernels} kernels, ${F} GPU memory).`),r("Finishing up…",.9),console.log("Inference result shapes:",U.map(A=>A==null?void 0:A.length));const H=n.outputPermutation||(n.enableTranspose?[2,1,0]:null),te=performance.now();let Y;const j={};if(m){if(U.length!==3)throw new Error(`CAT-lite expected three tissue maps; received ${U.length}.`);r("Refining tissue fractions…",.92),Y=yield Ua(U,W,n,u,h?Q=>Q:Q=>H?Un(Q,C,H):Q instanceof Float32Array?Q:Float32Array.from(Q),$),W=null}else if(i){const A=U[0];Y=h?A:H?Un(A,C,H):A instanceof Float32Array?A:Float32Array.from(A),go(Y,!0,"probability")}else{const A=U[0];U[0]=null;let Q;h?Q=A instanceof Uint8Array?A:new Uint8Array(A):H?Q=ma(A,C,H):Q=A instanceof Uint8Array?A:new Uint8Array(A),go(Q,!1,"segmentation"),Y=yield Fa(Q,o,n,t,j,$,{transferLabels:!0})}const le=((performance.now()-te)/1e3).toFixed(4),he=performance.now();yield a(Y,t,n,j.mask);const me=((performance.now()-he)/1e3).toFixed(4);if(i)m||(u.Output_Type="Continuous tissue probability",u.Tissue=n.probabilityDisplay||"grayMatter",u.Softmax_Temperature=(p=n.softmaxTemperature)!=null?p:1);else{const A=da(Y),Q=n.numClasses||A;ha(u,Q,A)}wa(u,E,le,{Preprocess_t:L,Setup_t:_,Display_t:me}),console.log(`[Timing] WebGPU | ${n.modelName} | setup=${(Number(_)*1e3).toFixed(1)}ms prep=${(Number(L)*1e3).toFixed(1)}ms infer=${(Number(E)*1e3).toFixed(1)}ms post=${(Number(le)*1e3).toFixed(1)}ms disp=${(Number(me)*1e3).toFixed(1)}ms cache=${c.cacheHit?"hit":"miss"}`);const ce=`${Number(E).toFixed(1)} s`,Z=i?`Tissue maps finished (${ce})`:`Segmentation finished (${ce})`,ae=!i&&((g=n.numClasses)!=null?g:0)>2?t!=null&&t.isTouchPrimary?" · Open Stats to isolate a region":" · Option/Alt-click a region to isolate":"";r(`${Z}${ae}`,1,"",u)}catch(w){if(console.error("WebGPU Inference Error:",w),c&&(wn.get(e)===c&&wn.delete(e),Pr(c),c=null),l&&e){l=!1;try{const b=yield e.popErrorScope();b&&w&&typeof w=="object"&&!w.oomError&&(w.oomError=b)}catch(b){}}let k=(w==null?void 0:w.message)||String(w);w!=null&&w.oomError&&!/out[- ]of[- ]memory|\boom\b/i.test(k)&&(k=`${k} (WebGPU out of memory: ${w.oomError.message||"allocation failed"})`),k.includes("not found")?k+=". Check that the runner file exists and the name matches.":k.includes("fetch")?k+=". Check network connection and file paths.":k.includes("binding size")&&(k+=". GPU memory limit exceeded."),va(u,k,"WebGPU inference failed");const _=(n==null?void 0:n.__v4PlanReasonOverride)==="safe-mode-retry"?"WebGPU (low-memory retry) Error":"WebGPU Error";throw r("",-1,`${_}: ${k}`,u),w}})}const ji={batchSize:1,numOfChan:1,isColorEnable:!0,isAutoColors:!0,bgLabelValue:0,drawBoundingVolume:!1,isGPU:!0,isBrainCropMaskBased:!0,showPhase1Output:!1,isPostProcessEnable:!0,fillSuppressedWithNeighborLabel:!1,diagnoseEnclosedComponents:!1,isContoursViewEnable:!1,browserArrayBufferMaxZDim:30,telemetryFlag:!1,chartXaxisStepPercent:10,uiSampleName:"BC_UI_Sample",atlasSelectedColorTable:"Fire"};function Lo(e,t=!0){if(!e)return e;const o=e,{turbo:n}=o,s=lo(o,["turbo"]);return!t||!n?s:kt(lt(lt({},s),n),{isTurboActive:!0})}const Mn=[{id:2,type:"Brain_Extraction",path:"/models/mindgrab/model.json",modelName:"🪓🧠 Omnimodal Skull Stripping",webgpu_safetensor:"./models/mindgrab/model.safetensors",webgpu_runner:"mindgrab",classifierBias:[1.525439739227295,-1.5258055925369263],webgpuTTArunner:!1,forceFP32:!1,webgpuStorageSize:503316480,numClasses:2,turbo:{webgpu_runner:"mindgrab_int8",quantize8Bit:!0,forceFP32:!1,webgpuTTArunner:!1,webgpuStorageSize:83886080,warning:"Runs via the 8-bit V4 WebGPU engine (~3.7s on M1 WebGPU, auto-scaling from 160 MiB down to 80 MiB max buffer on mobile) or native WebGL2."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,isPostProcessEnable:!0,enableCrop:!0,cropPadding:20,autoThreshold:.5,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!1,textureSize:0,warning:"This model may need dedicated graphics card.  For more info please check with Browser Resources <i class='fa fa-cogs'></i>.",inferenceDelay:100,description:"Omnimodal skull stripping (MindGrab) delivering high-accuracy brain extraction across T1, T2, FLAIR, DWI, EPI, MRA, PDw, qT1, CT, and PET via the 8-bit V4 WebGPU engine (80 MiB mobile / 160 MiB desktop max buffer) or native WebGL2."},{id:21,type:"Atlas",path:"/models/model24chan18cls_gdice_prio/model.json",modelName:"🪓 Subcortical + Tissue",colormapPath:"./models/model24chan18cls_gdice_prio/colormap.json",webgpu_safetensor:"./models/model24chan18cls_gdice_prio/model.safetensors",webgpu_runner:"model24chan18cls_gdice_prio",forceFP32:!1,webgpuStorageSize:1610612736,numClasses:18,turbo:{webgpu_runner:"mindmap24_int8",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:125829120,warning:"Runs via the 8-bit V4 WebGPU engine (~3.0s on M1 WebGPU, auto-scaling from 240 MiB down to 120 MiB max buffer on mobile) or native WebGL2."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,cropPadding:20,autoThreshold:0,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!0,textureSize:0,warning:"Runs via the 8-bit V4 WebGPU engine (120–240 MiB max buffer) or native WebGL2.",inferenceDelay:100,description:"Primary T1w brain parcellation into 17 regions (gray and white matter plus subcortical structures) via a 24-channel gridding-free MeshNet (MindMap-18 v4.0: sharp sulci, clinical atrophy sensitivity, and slice/noise/bias robustness), accelerated by the 8-bit V4 WebGPU engine (120 MiB mobile / 240 MiB desktop max buffer)."},{id:23,type:"Probability_Map",path:"/models/model24chan18cls_gdice_prio/model.json",modelName:"⅔🧠 Tissue fraction maps (GM/WM/CSF)",webgpu_safetensor:"./models/model24chan18cls_gdice_prio/model.safetensors",webgpu_runner:"model24chan18cls_gdice_prio_probability",forceFP32:!1,webgpuStorageSize:1610612736,numClasses:18,turbo:{webgpu_runner:"mindmap24_int8",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:125829120,warning:"Experimental neural-assisted partial-volume estimate (~3.5s on M1 WebGPU, auto-scaling from 240 MiB down to 120 MiB max buffer on mobile)."},outputType:"probability",probabilityPostprocess:"cat-lite",softmaxTemperature:2,brainSupportTemperature:1,brainSupportPower:1,partialVolumeSigma:.65,probabilityDisplay:"grayMatter",probabilityTissues:[{name:"gm",tint:[255,64,64]},{name:"wm",tint:[255,255,255]},{name:"csf",tint:[64,128,255]}],probabilityOverlayFloor:128,probabilityOverlayAlpha:48,probabilityDisplayMin:.03,probabilityUnderlayOpacity:.1,probabilityGroups:{grayMatter:[2,6,7,8,9,10,14,15,16,17],whiteMatter:[1,5],csf:[3,4,11,12]},catLitePurePriorPower:3,catLitePriorStrength:.8,catLiteIntensityStrength:.75,catLiteMixelPrior:.35,catLiteCsfWmMixelPrior:6,catLiteSpatialWeight:.25,catLiteMinSupport:.03,catLiteSigmaFloor:.025,catLiteBiasBlockSize:16,catLiteBiasSmoothPasses:3,preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,enableQuantileNorm:!0,enableFovRecenter:!1,enableFovInflate:!1,warning:"Experimental neural-assisted mixed-class partial-volume estimate, not CAT12.",inferenceDelay:100,description:"CAT-inspired GM/WM/CSF partial-volume estimate. The 24-channel model supplies joint GM/WM/CSF priors; normalized T1 intensity, a coarse local bias estimate, spatial regularization, and explicit GM-CSF/GM-WM mixture classes produce continuous GM, WM and CSF fractions. Experimental and not a CAT12 result."},{id:5,type:"Atlas",path:"/models/model24chan104cls_v3_repbn/model.json",modelName:"🪓🔪 Desikan-Killiany Atlas",colormapPath:"./models/model24chan104cls_v3_repbn/colormap.json",webgpu_safetensor:"./models/model24chan104cls_v3_repbn/model.safetensors",webgpu_runner:"dkatlas24_synth",forceFP32:!1,webgpuStorageSize:1610612736,numClasses:104,turbo:{webgpu_runner:"dkatlas24_int8",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:125829120,warning:"Runs via the 8-bit V4 WebGPU engine (~3.0s on M1 WebGPU, auto-scaling from 240 MiB down to 120 MiB max buffer on mobile) or native WebGL2."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,cropPadding:20,autoThreshold:0,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!0,textureSize:0,warning:"Runs via the 8-bit V4 WebGPU engine (120–240 MiB max buffer) or native WebGL2.",inferenceDelay:100,description:"Primary 104-region Desikan-Killiany atlas parcellation (cortical + subcortical + 5-part corpus callosum) for research and clinical T1-weighted MRI (MindSnap-104 v4.0: sharp sulci, clinical atrophy sensitivity, spotless CSF/cerebellum), running via the 8-bit V4 WebGPU engine (~3.0s on M1, 120 MiB mobile / 240 MiB desktop max buffer) or native WebGL2."},{id:4,type:"Atlas",path:"/models/model24chan50cls/model.json",modelName:"🪓🔪 Desikan-Killiany 50",colormapPath:"./models/model24chan50cls/colormap.json",webgpu_safetensor:"./models/model24chan50cls/model.safetensors",webgpu_runner:"meshnet_fast_v4",forceFP32:!1,webgpuStorageSize:805306368,numClasses:50,turbo:{webgpu_runner:"meshnet_fast_v4",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:125829120,warning:"Runs via the 8-bit V4 WebGPU engine (~3.0s on M1 WebGPU, auto-scaling from 240 MiB down to 120 MiB max buffer on mobile) or native WebGL2."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,cropPadding:20,autoThreshold:0,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!0,textureSize:0,warning:"Runs via the 8-bit V4 WebGPU engine (120–240 MiB max buffer) or native WebGL2.",inferenceDelay:100,description:"Bilateral 50-region Desikan-Killiany cortical + subcortical + corpus callosum parcellation with built-in skull stripping (MindSnap-50 v4.0: sharp sulci and clinical atrophy sensitivity), running via the 8-bit V4 WebGPU engine (~3.0s on M1, 120 MiB mobile / 240 MiB desktop max buffer) or native WebGL2."},{id:6,type:"Divider",modelName:"-----------------",path:null},{id:3,type:"Atlas",path:"/models/model16chan18cls/model.json",modelName:"⚡🪓 Subcortical + Tissue",colormapPath:"./models/model16chan18cls/colormap.json",webgpu_safetensor:"./models/model16chan18cls/model.safetensors",webgpu_runner:"model16chan18cls",forceFP32:!1,webgpuStorageSize:536870912,numClasses:18,turbo:{webgpu_runner:"model16chan18cls_int8",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:83886080,warning:"Ultra-fast 16-channel MindMap v3.5 (~1.7s on M1 WebGPU, auto-scaling from 160 MiB down to 80 MiB max buffer on mobile)."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,cropPadding:20,autoThreshold:0,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!0,textureSize:0,warning:"Runs via the 8-bit V4 WebGPU engine (80–160 MiB max buffer) or native WebGL2.",inferenceDelay:100,description:"Ultra-fast 17-region brain parcellation (gray and white matter plus subcortical structures) via our 84K-parameter 16-channel MeshNet (MindMap-16ch v3.5), running in ~1.7s on M1 WebGPU with an 80 MiB mobile / 160 MiB desktop buffer footprint."},{id:14,type:"Atlas",path:"/models/model24chan104cls_synth/model.json",modelName:"🪓🔪 Desikan-Killiany (lesion scans)",colormapPath:"./models/model24chan104cls_synth/colormap.json",webgpu_safetensor:"./models/model24chan104cls_synth/model.safetensors",webgpu_runner:"dkatlas24_synth",forceFP32:!1,webgpuStorageSize:1610612736,numClasses:104,turbo:{webgpu_runner:"dkatlas24_int8",quantize8Bit:!0,forceFP32:!1,webgpuStorageSize:125829120,warning:"Runs via the 8-bit V4 WebGPU engine (~3.0s on M1 WebGPU, auto-scaling from 240 MiB down to 120 MiB max buffer on mobile) or native WebGL2."},preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,cropPadding:20,autoThreshold:0,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!0,textureSize:0,warning:"Runs via the 8-bit V4 WebGPU engine (120–240 MiB max buffer) or native WebGL2.",inferenceDelay:100,description:"Desikan-Killiany 104-region parcellation variant retained for scans with large focal lesions, running via the 8-bit V4 WebGPU engine (120–240 MiB max buffer) or native WebGL2."}];function no(){return ke(this,null,function*(){return navigator.userAgent.indexOf("OPR/")>-1?"Opera":navigator.userAgent.indexOf("Edg/")>-1?"Edge":navigator.userAgent.indexOf("Falkon/")>-1?"Falkon":navigator.userAgent.indexOf("Chrome/")>-1?"Chrome":navigator.userAgent.indexOf("Firefox/")>-1?"Firefox":navigator.userAgent.indexOf("Safari/")>-1?"Safari":navigator.userAgent.indexOf("MSIE/")>-1||navigator.userAgent.indexOf("rv:")>-1?"IExplorer":"Unknown"})}function Yi(){return ke(this,null,function*(){return navigator.userAgent.indexOf("OPR/")>-1?parseInt(navigator.userAgent.split("OPR/")[1]):navigator.userAgent.indexOf("Edg/")>-1?parseInt(navigator.userAgent.split("Edg/")[1]):navigator.userAgent.indexOf("Falkon/")>-1?parseInt(navigator.userAgent.split("Falkon/")[1]):navigator.userAgent.indexOf("Chrome/")>-1?parseInt(navigator.userAgent.split("Chrome/")[1]):navigator.userAgent.indexOf("Firefox/")>-1?parseInt(navigator.userAgent.split("Firefox/")[1]):navigator.userAgent.indexOf("Safari/")>-1?parseInt(navigator.userAgent.split("Safari/")[1]):navigator.userAgent.indexOf("MSIE/")>-1||navigator.userAgent.indexOf("rv:")>-1?parseInt(navigator.userAgent.split("MSIE/")[1]):1/0})}function Ki(){return ke(this,null,function*(){return navigator.userAgent.indexOf("Win")>-1?"Windows":navigator.userAgent.indexOf("Mac")>-1?"MacOS":navigator.userAgent.indexOf("Linux")>-1?"Linux":navigator.userAgent.indexOf("UNIX")>-1?"UNIX":"Unknown"})}function Zi(e){return ke(this,null,function*(){return e?(console.log("WebGl2 is enabled"),!0):(console.log(typeof WebGL2RenderingContext!="undefined"?"WebGL2 may be disabled. Please try updating video card drivers":"WebGL2 is not supported"),!1)})}function Qi(e){return ke(this,null,function*(){let t;if(e&&(t=e.getExtension("WEBGL_debug_renderer_info"),t)){const n=e.getParameter(t.UNMASKED_VENDOR_WEBGL);return n.indexOf("(")>-1&&n.indexOf(")")>-1?n.substring(n.indexOf("(")+1,n.indexOf(")")):n}return null})}function Ji(e){return ke(this,null,function*(){if(e){const t=e.getExtension("WEBGL_debug_renderer_info");return t?e.getParameter(t.UNMASKED_VENDOR_WEBGL):null}else return null})}function el(e){return ke(this,null,function*(){if(e){if(no()==="Firefox")return e.getParameter(e.RENDERER);const t=e.getExtension("WEBGL_debug_renderer_info");return t?e.getParameter(t.UNMASKED_RENDERER_WEBGL):null}else return null})}function tl(e){return ke(this,null,function*(){let t;if(e){if(no()==="Firefox")return e.getParameter(e.RENDERER);if(t=e.getExtension("WEBGL_debug_renderer_info"),t){let n=e.getParameter(t.UNMASKED_RENDERER_WEBGL);return n.indexOf("(")>-1&&n.indexOf(")")>-1&&n.indexOf("(R)")===-1&&(n=n.substring(n.indexOf("(")+1,n.indexOf(")")),n.split(",").length===3)?n.split(",")[1].trim():n}}return null})}function nl(){return ke(this,null,function*(){return navigator.hardwareConcurrency})}function sl(){return ke(this,null,function*(){return/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)})}function ol(e,t=null){return ke(this,null,function*(){var s;const n=new Date;if(e.isModelFullVol?e.Brainchop_Ver="FullVolume":e.Brainchop_Ver="SubVolumes",e.Total_t=(Date.now()-e.startTime)/1e3,delete e.startTime,e.Date=parseInt(n.getMonth()+1)+"/"+n.getDate()+"/"+n.getFullYear(),e.Browser=yield no(),e.Browser_Ver=yield Yi(),e.OS=yield Ki(),e.WebGL2=yield Zi(t),e.GPU_Vendor=yield Qi(t),e.GPU_Card=yield tl(t),e.GPU_Vendor_Full=yield Ji(t),e.GPU_Card_Full=yield el(t),e.CPU_Cores=yield nl(),e.Which_Brainchop="latest",(yield sl())&&(e.Heap_Size_MB=window.performance.memory.totalJSHeapSize/(1024*1024).toFixed(2),e.Used_Heap_MB=window.performance.memory.usedJSHeapSize/(1024*1024).toFixed(2),e.Heap_Limit_MB=window.performance.memory.jsHeapSizeLimit/(1024*1024).toFixed(2)),t){console.log("MAX_TEXTURE_SIZE :",t.getParameter(t.MAX_TEXTURE_SIZE)),console.log("MAX_RENDERBUFFER_SIZE :",t.getParameter(t.MAX_RENDERBUFFER_SIZE));const o=t.getExtension("WEBGL_debug_renderer_info");console.log("VENDOR WEBGL:",t.getParameter((s=o==null?void 0:o.UNMASKED_VENDOR_WEBGL)!=null?s:t.VENDOR)),e.Texture_Size=t.getParameter(t.MAX_TEXTURE_SIZE)}else e.Texture_Size=null;return e})}const Ss={bankssts:1,caudalanteriorcingulate:2,caudalmiddlefrontal:3,cuneus:5,entorhinal:6,fusiform:7,inferiorparietal:8,inferiortemporal:9,isthmuscingulate:10,lateraloccipital:11,lateralorbitofrontal:12,lingual:13,medialorbitofrontal:14,middletemporal:15,parahippocampal:16,paracentral:17,parsopercularis:18,parsorbitalis:19,parstriangularis:20,pericalcarine:21,postcentral:22,posteriorcingulate:23,precentral:24,precuneus:25,rostralanteriorcingulate:26,rostralmiddlefrontal:27,superiorfrontal:28,superiorparietal:29,superiortemporal:30,supramarginal:31,frontalpole:32,temporalpole:33,transversetemporal:34,insula:35},rl=new Set(["BG","Unknown","background","Background"]),Uo={"Left-Cerebral-White-Matter":2,"Right-Cerebral-White-Matter":41,"Left-Cerebral-Cortex":3,"Right-Cerebral-Cortex":42,"Left-Lateral-Ventricle":4,"Right-Lateral-Ventricle":43,"Left-Inf-Lat-Vent":5,"Right-Inf-Lat-Vent":44,"Left-Cerebellum-White-Matter":7,"Right-Cerebellum-White-Matter":46,"Left-Cerebellum-Cortex":8,"Right-Cerebellum-Cortex":47,"Left-Thalamus":10,"Left-Thalamus-Proper":10,"Left-Thalamus-Proper*":10,"Right-Thalamus":49,"Right-Thalamus-Proper":49,"Right-Thalamus-Proper*":49,"Left-Caudate":11,"Right-Caudate":50,"Left-Putamen":12,"Right-Putamen":51,"Left-Pallidum":13,"Right-Pallidum":52,"Left-Hippocampus":17,"Right-Hippocampus":53,"Left-Amygdala":18,"Right-Amygdala":54,"Left-Accumbens":26,"Left-Accumbens-area":26,"Right-Accumbens":58,"Right-Accumbens-area":58,"Left-VentralDC":28,"Right-VentralDC":60,"3rd-Ventricle":14,"4th-Ventricle":15,"Brain-Stem":16,CSF:24,CC_Posterior:251,CC_Mid_Posterior:252,CC_Central:253,CC_Mid_Anterior:254,CC_Anterior:255,"Cerebral-White-Matter":2,"White Matter":2,"Cerebral-Cortex":3,"Grey Matter":3,"Gray Matter":3,"Lateral-Ventricle":4,Ventricle:4,"Inferior-Lateral-Ventricle":5,"Cerebellum-White-Matter":7,"Cerebellum-Cortex":8,Cerebellum:8,Thalamus:10,"Thalamus-Proper":10,"Thalamus-Proper*":10,Caudate:11,Putamen:12,Pallidum:13,Hippocampus:17,Amygdala:18,"Accumbens-area":26,Accumbens:26,VentralDC:28,"Corpus callosum":253,Corpus_Callosum:253};function al(e){if(typeof e!="string")return null;const t=e.trim();if(rl.has(t))return 0;if(Object.hasOwn(Uo,t))return Uo[t];if(t.startsWith("ctx-lh-")){const n=Ss[t.slice(7)];return n?1e3+n:null}if(t.startsWith("ctx-rh-")){const n=Ss[t.slice(7)];return n?2e3+n:null}if(t.startsWith("ctx-")){const n=Ss[t.slice(4)];return n?1e3+n:null}return null}function Jn(e){if(!Array.isArray(e)||e.length<3)return null;const t=new Int16Array(e.length);for(let n=0;n<e.length;n++){const s=al(e[n]);if(s===null||(n===0?s!==0:s<=0))return null;t[n]=s}return t}function il(e,t){const n=e.length,s=new Int16Array(n),o=t.length;let a=0;for(let r=0;r<n;r++){const i=e[r],u=i>=0&&i<o?t[i]:i;s[r]=u,u>a&&(a=u)}return{img:s,maxLabel:a}}const ll=110,ul=10;function so(e){var t;if(e){e.pan2Dxyzmm=Float32Array.from([0,0,0,1]),e.renderPan=[0,0],e.azimuth=ll,e.elevation=ul,e.scaleMultiplier=1;const n=(t=e.volumes)==null?void 0:t[0];n&&Number.isFinite(n.robustMin)&&Number.isFinite(n.robustMax)&&n.robustMax>n.robustMin&&(n.calMin!==n.robustMin||n.calMax!==n.robustMax)&&(n.calMin=n.robustMin,n.calMax=n.robustMax,e.updateGLVolume())}cl()}function cl(){const e=document.querySelector('meta[name="viewport"]');if(!e)return;const t=e.getAttribute("content")||"width=device-width, initial-scale=1.0";/maximum-scale/.test(t)||(e.setAttribute("content",`${t}, maximum-scale=1, user-scalable=no`),requestAnimationFrame(()=>requestAnimationFrame(()=>e.setAttribute("content",t))))}function fl(e){const t=n=>n.preventDefault();for(const n of["gesturestart","gesturechange","gestureend"])document.addEventListener(n,t,{passive:!1});document.addEventListener("touchmove",n=>{n.touches.length>1&&n.target!==e&&n.preventDefault()},{passive:!1})}function pl(e){return fl((e==null?void 0:e.canvas)||null),{resetView:()=>so(e)}}const ml=720,dl=860;function gl(){var o,a,r,i,u,l;const e=window.visualViewport,t=Math.round((a=(o=e==null?void 0:e.width)!=null?o:window.innerWidth)!=null?a:0),n=Math.round((i=(r=e==null?void 0:e.height)!=null?r:window.innerHeight)!=null?i:0);return t>0&&t<=ml?!0:!!((l=(u=window.matchMedia)==null?void 0:u.call(window,"(pointer: coarse)"))==null?void 0:l.matches)&&Math.min(t,n)<=dl}const Gn=[{id:"multi",label:"All",title:"All planes",type:Dn.MULTIPLANAR},{id:"axial",label:"A",title:"Axial only",type:Dn.AXIAL},{id:"coronal",label:"C",title:"Coronal only",type:Dn.CORONAL},{id:"sagittal",label:"S",title:"Sagittal only",type:Dn.SAGITTAL},{id:"render",label:"3D",title:"3D render only",type:Dn.RENDER}];function Ar(e,t,n){const s=Gn.find(o=>o.id===n)||Gn[0];e.sliceType=s.type,t.querySelectorAll("button").forEach(o=>o.classList.toggle("active",o.dataset.pane===s.id))}function _l(e,t){const n=document.createElement("div");n.id="paneSwitcher",n.className="pane-switcher",n.setAttribute("role","group"),n.setAttribute("aria-label","Visible planes");for(const o of Gn){const a=document.createElement("button");a.type="button",a.dataset.pane=o.id,a.textContent=o.label,a.title=o.title,a.setAttribute("aria-label",o.title),a.addEventListener("click",()=>Ar(e,n,o.id)),n.appendChild(a)}const s=document.createElement("button");return s.type="button",s.className="pane-reset",s.textContent="⟲",s.title="Reset zoom and pan",s.setAttribute("aria-label","Reset zoom and pan"),s.addEventListener("click",()=>so(e)),n.appendChild(s),t.appendChild(n),n}function bl(e){var o;const t=document.getElementById("canvas-container")||document.body,n=_l(e,t);n.querySelector('button[data-pane="multi"]').classList.add("active"),window.addEventListener("keydown",a=>{if(a.key!=="v"&&a.key!=="V"||a.altKey||a.ctrlKey||a.metaKey||a.repeat)return;const r=a.target;if(r instanceof HTMLElement&&(r.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(r.tagName)))return;a.preventDefault(),a.stopImmediatePropagation();const i=Gn.findIndex(u=>u.type===e.sliceType);Ar(e,n,Gn[(i+1)%Gn.length].id)},!0);const s=()=>document.body.classList.toggle("nv-narrow",gl());window.addEventListener("resize",s),window.addEventListener("orientationchange",s),(o=window.visualViewport)==null||o.addEventListener("resize",s),s()}const Ms=[{name:"gm",displayName:"Gray Matter",tint:[255,64,64]},{name:"wm",displayName:"White Matter",tint:[255,255,255]},{name:"csf",displayName:"CSF",tint:[64,128,255]}],hl={gm:"Gray Matter",wm:"White Matter",csf:"CSF"};function zr(e){return(Array.isArray(e==null?void 0:e.probabilityTissues)&&e.probabilityTissues.length===3?e.probabilityTissues:Ms).map((n,s)=>{const o=String((n==null?void 0:n.name)||Ms[s].name).toLowerCase();return{index:s,name:o,displayName:hl[o]||o.toUpperCase(),tint:Array.isArray(n==null?void 0:n.tint)&&n.tint.length>=3?n.tint:Ms[s].tint}})}function Wo(e,t,n=null,s=1,o=null){var E,T;const[a,r,i]=e,u=a.length,l=(E=t==null?void 0:t.probabilityDisplayMin)!=null?E:.03,c=1/Math.max(1e-6,1-l),m=((T=t==null?void 0:t.probabilityOverlayFloor)!=null?T:128)/255,d=1-m,f=zr(t),[p,g,w]=f[0].tint,[k,_,b]=f[1].tint,[$,M,h]=f[2].tint,x=n===null||n===0,P=n===null||n===1,y=n===null||n===2,W=Math.max(0,Math.min(1,Number(s)||0)),z=Math.round(W*256),C=!!(o&&o.dimsRAS&&o.img2RASstart&&o.img2RASstep&&o.dimsRAS[1]*o.dimsRAS[2]*o.dimsRAS[3]===u),L=new Uint8Array(u*4);let G=0;for(let F=0;F<u;F++){const H=x?a[F]:0,te=P?r[F]:0,Y=y?i[F]:0;(H>=l||te>=l||Y>=l)&&G++}const V=new Uint32Array(G),ee=new Uint8Array(G);let S=0;const U=2/256,R=(F,H)=>{const te=x?a[F]:0,Y=P?r[F]:0,j=y?i[F]:0;if(te<l&&Y<l&&j<l)return;let le=0,he=0,me=0,ce=0;if(te>=l){const ue=te>1?1:te,oe=(ue-l)*c,D=ue>U?ue:U,J=(m+d*D)*oe;le+=p*J,he+=g*J,me+=w*J,oe>ce&&(ce=oe)}if(Y>=l){const ue=Y>1?1:Y,oe=(ue-l)*c,D=ue>U?ue:U,J=(m+d*D)*oe;le+=k*J,he+=_*J,me+=b*J,oe>ce&&(ce=oe)}if(j>=l){const ue=j>1?1:j,oe=(ue-l)*c,D=ue>U?ue:U,J=(m+d*D)*oe;le+=$*J,he+=M*J,me+=h*J,oe>ce&&(ce=oe)}if(ce<=0)return;const Z=1/ce,ae=le*Z,A=he*Z,Q=me*Z,N=Math.min(255,Math.round(ce*255)),re=H*4;L[re]=ae>=255?255:Math.round(ae),L[re+1]=A>=255?255:Math.round(A),L[re+2]=Q>=255?255:Math.round(Q),L[re+3]=N*z+128>>8,V[S]=re+3,ee[S]=N,S++};if(C){const[,F,H,te]=o.dimsRAS,[Y,j,le]=o.img2RASstart,[he,me,ce]=o.img2RASstep,Z=Y+j+le;let ae=0;for(let A=0;A<te;A++){const Q=Z+A*ce;for(let N=0;N<H;N++){let re=Q+N*me;for(let ue=0;ue<F;ue++,ae++,re+=he)R(re,ae)}}}else for(let F=0;F<u;F++)R(F,F);return{rgba:L,activeAlphaOffsets:S===G?V:V.subarray(0,S),activeBaseAlpha:S===G?ee:ee.subarray(0,S),tissues:f,isRasOrdered:C}}function wl(e,t,n,s){const o=Math.max(0,Math.min(1,Number(s)||0)),a=Math.round(o*256),r=t.length;for(let i=0;i<r;i++)e[t[i]]=n[i]*a+128>>8}function Ro(e,t,n,s,o){var k;const a=zr(o),r=(k=o==null?void 0:o.probabilityDisplayMin)!=null?k:.03,[i,u,l]=s,[c,m,d]=t,f=a.map(()=>({fracSum:0,supportVoxels:0,wSum:0,wSumSq:0,sumX:0,sumY:0,sumZ:0,coreMin:1/0,coreMax:-1/0,anyMin:1/0,anyMax:-1/0}));let p=0;for(let _=0;_<l;_++)for(let b=0;b<u;b++)for(let $=0;$<i;$++,p++){const M=c[p],h=m[p],x=d[p];if(M<=0&&h<=0&&x<=0)continue;const P=e[p];if(M>0&&Number.isFinite(M)){const y=f[0];y.fracSum+=M,M>=r&&y.supportVoxels++,y.wSum+=M*P,y.wSumSq+=M*P*P,y.sumX+=M*$,y.sumY+=M*b,y.sumZ+=M*_,P<y.anyMin&&(y.anyMin=P),P>y.anyMax&&(y.anyMax=P),M>=.5&&(P<y.coreMin&&(y.coreMin=P),P>y.coreMax&&(y.coreMax=P))}if(h>0&&Number.isFinite(h)){const y=f[1];y.fracSum+=h,h>=r&&y.supportVoxels++,y.wSum+=h*P,y.wSumSq+=h*P*P,y.sumX+=h*$,y.sumY+=h*b,y.sumZ+=h*_,P<y.anyMin&&(y.anyMin=P),P>y.anyMax&&(y.anyMax=P),h>=.5&&(P<y.coreMin&&(y.coreMin=P),P>y.coreMax&&(y.coreMax=P))}if(x>0&&Number.isFinite(x)){const y=f[2];y.fracSum+=x,x>=r&&y.supportVoxels++,y.wSum+=x*P,y.wSumSq+=x*P*P,y.sumX+=x*$,y.sumY+=x*b,y.sumZ+=x*_,P<y.anyMin&&(y.anyMin=P),P>y.anyMax&&(y.anyMax=P),x>=.5&&(P<y.coreMin&&(y.coreMin=P),P>y.coreMax&&(y.coreMax=P))}}const g=[];for(let _=0;_<3;_++){const b=f[_];if(b.fracSum<=0)continue;const $=b.wSum/b.fracSum,M=Math.max(0,b.wSumSq/b.fracSum-$*$),h=Number.isFinite(b.coreMin)?b.coreMin:Number.isFinite(b.anyMin)?b.anyMin:0,x=Number.isFinite(b.coreMax)?b.coreMax:Number.isFinite(b.anyMax)?b.anyMax:0,[P,y,W]=a[_].tint;g.push({label:_,tissueIndex:_,tissueKey:a[_].name,name:a[_].displayName,voxels:Math.round(b.fracSum),effectiveVoxels:b.fracSum,supportVoxels:b.supportVoxels,volume_mm3:b.fracSum*n,mean:$,stdev:Math.sqrt(M),min:h,max:x,centroidVox:[b.sumX/b.fracSum,b.sumY/b.fracSum,b.sumZ/b.fracSum],colorCss:`rgb(${P},${y},${W})`,tint:a[_].tint})}const w=g.reduce((_,b)=>_+b.volume_mm3,0);return{rows:g,icvMm3:w}}function vl(e,t){const n=["tissue","name","volume_mm3","volume_cm3","pct_icv","effective_voxels","support_voxels","weighted_mean","weighted_stdev","min","max"],s=a=>/[",\n]/.test(a)?`"${String(a).replace(/"/g,'""')}"`:String(a),o=[n.join(",")];for(const a of e){const r=t>0?a.volume_mm3/t*100:0;o.push([s(a.tissueKey),s(a.name),a.volume_mm3.toFixed(3),(a.volume_mm3/1e3).toFixed(3),r.toFixed(3),a.effectiveVoxels.toFixed(3),a.supportVoxels,a.mean.toFixed(4),a.stdev.toFixed(4),a.min,a.max].join(","))}return o.join(`
`)+`
`}function Cr(){if(typeof crypto!="undefined"){if(typeof crypto.randomUUID=="function")return crypto.randomUUID();if(typeof crypto.getRandomValues=="function"){const e=new Uint8Array(16);crypto.getRandomValues(e),e[6]=e[6]&15|64,e[8]=e[8]&63|128;const t=Array.from(e,n=>n.toString(16).padStart(2,"0")).join("");return`${t.slice(0,8)}-${t.slice(8,12)}-${t.slice(12,16)}-${t.slice(16,20)}-${t.slice(20)}`}}return`vol-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}function xl(){var e,t,n,s;return!!((t=(e=window.matchMedia)==null?void 0:e.call(window,"(pointer: coarse)"))!=null&&t.matches&&!((s=(n=window.matchMedia)==null?void 0:n.call(window,"(pointer: fine)"))!=null&&s.matches))}function qo(e,t=e.img.slice(),n=e.name){const s=Object.assign(Object.create(Object.getPrototypeOf(e.hdr)),e.hdr),o=No(s,t,n);return o.id=Cr(),o}const tn=e=>e&&typeof e.slice=="function"?e.slice():e;function Hn(e,t,n=e.name,s={},o={}){var u;const a=Object.assign(Object.create(Object.getPrototypeOf(e.hdr)),e.hdr,lt({dims:[...e.hdr.dims],pixDims:[...e.hdr.pixDims],affine:e.hdr.affine.map(l=>[...l])},s)),r=e.dims?e.dims.slice(0,4):a.dims.slice(0,4),i=(u=e.nVox3D)!=null?u:r[1]*r[2]*r[3];return lt({img:t,hdr:a,originalAffine:a.affine.map(l=>[...l]),dims:r,nVox3D:i,extentsMin:tn(e.extentsMin),extentsMax:tn(e.extentsMax),mm000:tn(e.mm000),mm100:tn(e.mm100),mm010:tn(e.mm010),mm001:tn(e.mm001),dimsRAS:e.dimsRAS?[...e.dimsRAS]:void 0,pixDimsRAS:e.pixDimsRAS?[...e.pixDimsRAS]:void 0,permRAS:e.permRAS?[...e.permRAS]:void 0,toRAS:tn(e.toRAS),toRASvox:tn(e.toRASvox),matRAS:tn(e.matRAS),obliqueRAS:tn(e.obliqueRAS),oblique_angle:e.oblique_angle,frac2mm:tn(e.frac2mm),frac2mmOrtho:tn(e.frac2mmOrtho),img2RASstep:e.img2RASstep?[...e.img2RASstep]:void 0,img2RASstart:e.img2RASstart?[...e.img2RASstart]:void 0,volScale:e.volScale?[...e.volScale]:void 0,name:n,id:Cr(),calMin:0,calMax:255,robustMin:0,robustMax:255,globalMin:0,globalMax:255,frame4D:0,nFrame4D:1,nTotalFrame4D:1,isLegendVisible:!1},o)}function yl(e){let t=256,n=-1,s=0;for(let l=0;l<256;l++){const c=e[l];c>0&&(l<t&&(t=l),n=l,l!==0&&(s+=c))}if(t>n)return{calMin:0,calMax:255,robustMin:0,robustMax:255,globalMin:0,globalMax:255};if(t===n)return{calMin:t,calMax:n,robustMin:t,robustMax:n,globalMin:t,globalMax:n};const o=Math.round(s*.02),a=Math.round(s*.02);let r=0,i=t;for(let l=t;l<=n;l++){if(l===0&&e[0]>o){i=0;break}if(r+=e[l],r>=o){i=l;break}}r=0;let u=n;for(let l=n;l>=t;l--)if(r+=e[l],r>=a){u=Math.min(n,l+1);break}return i>=u&&(i=t,u=n),{calMin:i,calMax:u,robustMin:i,robustMax:u,globalMin:t,globalMax:n}}function es(e,[t,n,s]){const o=e.dimsRAS,a=e.img2RASstart,r=e.img2RASstep;return!o||!a||!r||t<0||t>=o[1]||n<0||n>=o[2]||s<0||s>=o[3]?null:a[0]+t*r[0]+a[1]+n*r[1]+a[2]+s*r[2]}function Fn(e,t){return ke(this,null,function*(){const n=e.img,s=yield Ir(t,e.hdr,n.buffer.byteLength===n.byteLength?n.buffer:n.buffer.slice(n.byteOffset,n.byteOffset+n.byteLength)),o=URL.createObjectURL(new Blob([s]));Object.assign(document.createElement("a"),{href:o,download:t}).click(),URL.revokeObjectURL(o)})}let Dt=null,ln=!1,ts=0,ns=!1,fn=[];const Br=/Safari/.test(navigator.userAgent)&&!/Chrome|Chromium|CriOS|FxiOS|Edg|Android/.test(navigator.userAgent),$l=Br&&new URLSearchParams(window.location.search).get("inference")!=="webgpu",Ts=new URLSearchParams(window.location.search).get("inference")==="webgl2";function ks(e=null){return ke(this,null,function*(){const t={secureContext:window.isSecureContext,navigatorGpuExists:"gpu"in navigator,adapterObtained:!1,deviceObtained:!1,f16Support:!1,error:null};if(window.isSecureContext||(console.warn("WebGPU requires a secure context (HTTPS or localhost)."),console.warn("Current origin:",window.location.origin)),"gpu"in navigator)try{console.log("Requesting WebGPU adapter...");const n=yield navigator.gpu.requestAdapter();if(n){t.adapterObtained=!0,console.log("WebGPU adapter obtained:",n),n.info&&console.log("Adapter info:",n.info),console.log("Adapter limits:",{maxBufferSize:n.limits.maxBufferSize,maxStorageBufferBindingSize:n.limits.maxStorageBufferBindingSize,maxComputeWorkgroupsPerDimension:n.limits.maxComputeWorkgroupsPerDimension});const s={maxBufferSize:n.limits.maxBufferSize,maxStorageBufferBindingSize:n.limits.maxStorageBufferBindingSize,maxStorageBuffersPerShaderStage:n.limits.maxStorageBuffersPerShaderStage,maxUniformBufferBindingSize:n.limits.maxUniformBufferBindingSize,maxComputeInvocationsPerWorkgroup:n.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:n.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:n.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:n.limits.maxComputeWorkgroupSizeZ,maxComputeWorkgroupStorageSize:n.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:n.limits.maxComputeWorkgroupsPerDimension},o=n.features.has("shader-f16"),a=n.features.has("subgroups");t.f16Support=o,t.subgroupsSupport=a;const r=[];o&&r.push("shader-f16"),a&&r.push("subgroups");const i=yield n.requestDevice({requiredLimits:s,requiredFeatures:r});if(i.__adapterInfo=n.info||null,e&&typeof e.getParameter=="function")try{if(/Firefox/i.test(navigator.userAgent||""))i.__glRenderer=String(e.getParameter(e.RENDERER)||"");else{const l=e.getExtension("WEBGL_debug_renderer_info");i.__glRenderer=String((l?e.getParameter(l.UNMASKED_RENDERER_WEBGL):e.getParameter(e.RENDERER))||"")}}catch(l){}i.__isLost=!1,i.lost&&typeof i.lost.then=="function"&&i.lost.then(l=>{i.__isLost=!0,(l==null?void 0:l.reason)!=="destroyed"&&(console.warn(`[WebGPU] Device was lost (${(l==null?void 0:l.reason)||"unknown"}): ${(l==null?void 0:l.message)||""}`),Dt===i&&(Dt=null,ln=!1,t.deviceObtained=!1,t.error=(l==null?void 0:l.message)||"WebGPU device lost",Io(!1,t)))}),Dt=i,t.deviceObtained=!0,ln=!0,console.log(`✓ WebGPU initialized successfully. F16: ${o?"enabled":"not available"}, Subgroups: ${a?"enabled":"not available"}`)}else console.warn("WebGPU adapter request returned null."),console.warn("This typically means:"),console.warn("  - Safari: WebGPU feature flags not enabled in Settings > Feature Flags"),console.warn("  - Unsupported GPU hardware"),console.warn("  - GPU drivers need updating"),t.error="Adapter returned null"}catch(n){t.error=n.message,console.error("WebGPU initialization error:",n),navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")&&(console.warn("Safari detected. To enable WebGPU:"),console.warn("  1. Open Safari Settings/Preferences"),console.warn('  2. Go to Advanced tab, enable "Show features for web developers"'),console.warn("  3. Go to Feature Flags tab"),console.warn("  4. Enable: WebGPU, GPU Process: DOM Rendering, GPU Process: Canvas Rendering"),console.warn("  5. Restart Safari"))}else console.warn("navigator.gpu not found. WebGPU API is not available in this browser."),t.error="navigator.gpu not found",navigator.userAgent.includes("Firefox")&&(console.warn("Firefox detected. To enable WebGPU in about:config:"),console.warn("  1. Set dom.webgpu.enabled = true"),console.warn("  2. Set gfx.webgpu.ignore-blocklist = true"),console.warn("  3. Restart Firefox"));return Io(ln,t),ln||console.log("Falling back to WebGL backend."),window.webgpuDiagnostics=t,t})}function Io(e,t){const n=document.getElementById("backendStatus"),s=document.getElementById("backendStatusItem");if(!n){console.log("Backend status element not found in DOM");return}if(s&&(s.hidden=!1),e){const o=t.f16Support?" (F16)":"";n.textContent=`WebGPU${o}`,n.style.color="#4CAF50",n.title="WebGPU backend active - fastest performance"}else{n.textContent="WebGL",n.style.color="#FF9800";let o="WebGL backend (fallback)";t.error&&(o+=`
Reason: ${t.error}`),t.secureContext||(o+=`
⚠ Not a secure context (HTTPS required)`),Br&&!Ts&&(o+=`

To enable WebGPU in Safari:
1. Settings > Feature Flags
2. Enable WebGPU flags
3. Restart Safari`),navigator.userAgent.includes("Firefox")&&(o+=`

To enable WebGPU in Firefox:
1. about:config > dom.webgpu.enabled = true
2. gfx.webgpu.ignore-blocklist = true
3. Restart Firefox`),n.title=o}}function Sl(){return ke(this,null,function*(){var ut;let e="",t="",n=null,s=null,o=null,a=null;function r(){const v=modelSelect.value;return v==="-1"||modelSelect.selectedIndex<0?null:Mn[v]||null}function i(){const v=r();modelSelect.title=(v==null?void 0:v.description)||"Choose a segmentation model to run"}const u=document.getElementById("activeModelItem"),l=document.getElementById("activeModelBadge");function c(v){var q;if(!u||!l)return;const B=(q=v==null?void 0:v.modelName)==null?void 0:q.trim();if(!B){u.hidden=!0,l.textContent="",l.removeAttribute("title");return}l.textContent=B,l.title=`Active model: ${B}`,u.hidden=!1}const m="altKey";let d=null,f=null,p=null,g=null,w=null,k=null;const _=Xr();let b=null,$="input.nii.gz",M=null;const h=document.getElementById("dragSegmented");h&&h.querySelectorAll("button").forEach(v=>{v.onclick=()=>{ne.secondaryDragMode=parseInt(v.dataset.drag,10),h.querySelectorAll("button").forEach(B=>{const q=B===v;B.classList.toggle("active",q),B.setAttribute("aria-pressed",String(q))})}});const x=document.getElementById("drawBtn"),P=document.getElementById("drawPopover"),y=document.getElementById("penRow"),W=document.getElementById("drawApplyRow");function z(v){P&&(P.hidden=!v,x&&x.setAttribute("aria-expanded",String(v)))}function C(v){ne.drawIsEnabled=v>=0,v>=0&&(!ne.drawingVolume&&ne.volumes.length&&ne.createEmptyDrawing(),ne.drawPenValue=v&7,ne.drawPenFilled=v>7),y&&y.querySelectorAll(".chip").forEach(B=>B.classList.toggle("active",parseInt(B.dataset.pen,10)===v))}function L(v){return ke(this,null,function*(){var Le;if(ne.volumes.length<2){window.alert("No segmentation open (run a model first).");return}if(v===0){ne.drawUndo();return}const B=(Le=ne.drawingVolume)==null?void 0:Le.img;if(!B){window.alert("Nothing drawn yet — pick a pen and draw on the image first.");return}const q=ne.volumes[1].img;if(p||q instanceof Float32Array){window.alert("Drawing edits label segmentations, not probability maps.");return}const de=ne.volumes[1],I=de.dimsRAS;if(!I||B.length!==I[1]*I[2]*I[3]){window.alert("The drawing does not match the current image — redraw it.");return}const Me=v===1?1:0;let we=0;for(let Be=0;Be<I[3];Be++)for(let He=0;He<I[2];He++)for(let We=0;We<I[1];We++,we++)B[we]>0&&(q[es(de,[We,He,Be])]=Me);ne.closeDrawing(),yield ne.updateGLVolume(),ne.drawIsEnabled=!1,C(-1)})}x&&(x.onclick=v=>{v.stopPropagation(),z(P.hidden)}),y&&y.querySelectorAll(".chip").forEach(v=>{v.onclick=()=>C(parseInt(v.dataset.pen,10))}),W&&W.querySelectorAll(".chip").forEach(v=>{v.onclick=()=>L(parseInt(v.dataset.apply,10))}),document.addEventListener("click",v=>{!P||P.hidden||v.target.closest(".popover-wrap")||z(!1)}),document.addEventListener("keydown",v=>{v.key==="Escape"&&z(!1)});const G=document.getElementById("appDialog");if(G&&!("closedBy"in HTMLDialogElement.prototype)){let v=!1;const B=q=>{const de=G.getBoundingClientRect();return q.clientX<de.left||q.clientX>de.right||q.clientY<de.top||q.clientY>de.bottom};G.addEventListener("pointerdown",q=>{v=q.target===G&&B(q)}),G.addEventListener("pointerup",q=>{v&&q.target===G&&B(q)&&G.close(),v=!1})}aboutBtn.onclick=function(){Yt("About BrainChop",`
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
    `)};const V=document.getElementById("shadingBtn");V.onclick=()=>{const v=V.classList.toggle("active");V.setAttribute("aria-pressed",String(v)),ne.volumeIllumination=v?.5:0};const ee=document.getElementById("resetViewBtn");ee&&(ee.onclick=()=>so(ne)),diagnosticsBtn.onclick=function(){let v=e;if(v.length<1&&window.webgpuDiagnostics){const q=window.webgpuDiagnostics;v=`:: Startup Diagnostics ::
`,v+=`Secure Context: ${q.secureContext}
`,v+=`WebGPU Enabled: ${ln}
`,v+=`F16 Support: ${q.f16Support}
`,q.error&&(v+=`Error: ${q.error}
`),v+=`User Agent: ${navigator.userAgent}
`}if(v.length<1){Yt("Diagnostics","No diagnostic string generated: run a model to create diagnostics");return}let B=v;t=t.slice(0,-2),t!==""&&B.includes("Status: OK")&&(B=B.replace("Status: OK",`Status: ${t}`)),t="",navigator.clipboard.writeText(B).then(()=>{Yt("Diagnostics",`<p>Diagnostics copied to clipboard</p><pre style="white-space: pre-wrap; font-family: monospace; font-size: 0.9em; overflow-x: auto;">${B}</pre>`)}).catch(q=>{Yt("Diagnostics",`<p>Failed to copy to clipboard.</p><pre style="white-space: pre-wrap; font-family: monospace; font-size: 0.9em; overflow-x: auto;">${B}</pre>`)})},opacitySlider0.oninput=()=>{ne.volumes[0]&&(ne.volumes[0].opacity=Number(opacitySlider0.value),ne.drawScene())};let S=Number(opacitySlider1.value),U=0;function R({dataChanged:v=!1,allowAffineFastPath:B=!0}={}){var Me;if(ne.volumes.length<2)return ne.updateGLVolume();const de=(Me=ne.volumes[1].opacity)!=null?Me:1,I=S===0!=(de===0);return S=de,B&&!v&&!I&&de>0&&ne.volumes.length===2&&typeof ne.updateVolumeAffineOnly=="function"?ne.updateVolumeAffineOnly():ne.volumes.length===2&&typeof ne.updateVolumeData=="function"?ne.updateVolumeData(1):ne.updateGLVolume()}function E(){const v=Number(opacitySlider1.value);if(p&&ne.volumes[1]===p.overlay){v>0&&wl(p.rgba,p.activeAlphaOffsets,p.activeBaseAlpha,v),p.overlay.opacity=v,R({dataChanged:!0,allowAffineFastPath:!1});return}ne.volumes.slice(1).forEach(B=>{B.opacity=v}),R({dataChanged:!1,allowAffineFastPath:!0})}opacitySlider1.oninput=()=>{U||(U=requestAnimationFrame(()=>{U=0,E()}))};function T(v=null){const B=(v==null?void 0:v.type)==="Brain_Extraction"?0:v==null?void 0:v.probabilityUnderlayOpacity;B!==void 0?(b===null&&(b=opacitySlider0.value),opacitySlider0.value=B,ne.volumes[0]&&(ne.volumes[0].opacity=Number(B))):b!==null&&(opacitySlider0.value=b,b=null,ne.volumes[0]&&(ne.volumes[0].opacity=Number(opacitySlider0.value)))}function F(){return ke(this,null,function*(){var Be;const v=ne.volumes[0];if(Hr(v))return;$t("Conforming input volume to 256³...",.05),yield kr(),yield te();const{hdr:B,img:q,inferenceImg:de}=yield cs.apply(v.hdr,v.img,{toRAS:!1,fHigh:is,inferenceFHigh:Vr}),I=No(B,q,v.name?`${v.name}_conform`:"conform"),[Me,we]=[k,$],Le=modelSelect.value;yield ne.removeVolume(0),yield ne.addVolume(I),[k,$]=[Me,we],_.set(ne.volumes[0],de&&de!==q?de:(Be=ne.volumes[0])==null?void 0:Be.img),modelSelect.value=Le,i()})}function H(){for(f=null,p=null,g=null;ne.model.volumes.length>1;)ne.model.removeVolume(ne.model.volumes.length-1)}function te(){return ke(this,null,function*(){H(),le(),c(null),yield ne.updateGLVolume()})}function Y(){return ne.volumes.length>=2&&ne.volumes[1].colormapLabel?ne.volumes[1]:null}function j(){return p&&ne.volumes.length>=2&&ne.volumes[1]===p.overlay?p:null}function le(){d=null,f=null,w=null,Q&&(Q.style.display="none")}function he(v,B){var I;const q=new Uint8ClampedArray(v.lut.length),de=B-((I=v.min)!=null?I:0);if(de>=0&&de*4+3<v.lut.length){const Me=de*4;q[Me]=v.lut[Me],q[Me+1]=v.lut[Me+1],q[Me+2]=v.lut[Me+2],q[Me+3]=v.lut[Me+3]}return lt({lut:q,min:v.min,max:v.max},v.labels?{labels:v.labels}:{})}function me(){const v=Y();v&&(g||(g=v.colormapLabel),d===null?(v.colormapLabel=g,w=null):(v.colormapLabel=he(g,d),w=ce(d)),R({dataChanged:!1,allowAffineFastPath:!0}),re())}function ce(v){const B=ne.volumes[0],q=Y(),de=q==null?void 0:q.img;if(!B||!de)return null;const I=B.hdr.pixDims||[],Me=I[1]&&I[2]&&I[3]?I[1]*I[2]*I[3]:1,we=q.hdr.dims.slice(1,4),Le=_t(B.img,de,Me,we),Be=Le.reduce((ie,fe)=>ie+fe.volume_mm3,0),He=Le.find(ie=>ie.label===v);if(!He)return null;const We=Be>0?He.volume_mm3/Be*100:0,Fe=[He.name,`${rt(He.volume_mm3)} cm3   (${We.toFixed(1)}% of brain)`,`${He.voxels.toLocaleString()} voxels`,`intensity  ${He.mean.toFixed(0)} +/- ${He.stdev.toFixed(0)}`];let se=[1,1,1,1];if(s&&s.R&&s.R[v]!=null){const ie=fe=>Math.min(255,fe*.55+130)/255;se=[ie(s.R[v]),ie(s.G[v]),ie(s.B[v]),1]}return{lines:Fe,color:se}}function Z(v){const B=j(),q=ne.volumes[0];if(!B||!q)return null;const de=q.hdr.pixDims||[],I=de[1]&&de[2]&&de[3]?de[1]*de[2]*de[3]:1,Me=q.hdr.dims.slice(1,4),{rows:we,icvMm3:Le}=Ro(q.img,B.maps,I,Me,B.modelEntry),Be=we.find(Fe=>Fe.tissueIndex===v);if(!Be)return null;const He=Le>0?Be.volume_mm3/Le*100:0,We=Fe=>Math.min(255,Fe*.55+130)/255;return{lines:[Be.name,`${rt(Be.volume_mm3)} cm3   (${He.toFixed(1)}% of ICV)`,`${Math.round(Be.effectiveVoxels).toLocaleString()} equiv. voxels`,`intensity  ${Be.mean.toFixed(0)} +/- ${Be.stdev.toFixed(0)}`],color:[We(Be.tint[0]),We(Be.tint[1]),We(Be.tint[2]),1]}}function ae(){const v=j();if(!v)return;const B=Number(opacitySlider1.value),q=Wo(v.maps,v.modelEntry,f,B,v.rasLayout);v.rgba=q.rgba,v.activeAlphaOffsets=q.activeAlphaOffsets,v.activeBaseAlpha=q.activeBaseAlpha,v.overlay.img=q.rgba,v.overlay.opacity=B,w=f===null?null:Z(f),R({dataChanged:!0,allowAffineFastPath:!1}),re()}function A(v){j()&&(f=v===null||v===f?null:v,ae())}let Q=null,N=!1;function re(){var Be,He;Q||(Q=document.createElement("div"),Q.style.cssText="position:absolute;pointer-events:none;font:13px/1.55 system-ui,sans-serif;text-shadow:0 1px 2px #000;white-space:pre;color:#ebebeb",ne.canvas.parentElement.appendChild(Q));const v=d!==null&&!!Y()||f!==null&&!!j(),B=(He=(Be=ne.view)==null?void 0:Be.screenSlices)==null?void 0:He.find(We=>We.axCorSag===4);if(!v||!w||!B){Q.style.display="none";return}const q=window.devicePixelRatio||1,[de,I]=B.leftTopWidthHeight;Object.assign(Q.style,{left:`${de/q+8}px`,top:`${I/q+8}px`});const{lines:Me,color:we}=w,Le=we.slice(0,3).map(We=>Math.round(We*255)).join(",");Q.innerHTML=`<span style="color:rgb(${Le})">${Et(Me[0])}</span>
`+Me.slice(1).map(Et).join(`
`),Q.style.display="block"}function ue(){N||d===null&&f===null||(N=!0,requestAnimationFrame(()=>{N=!1,re()}))}function oe(){const v=Y();if(!v||!M)return null;const B=es(v,M);if(B===null)return null;const q=v.img[B];return q===void 0?null:Math.round(q*v.hdr.scl_slope+v.hdr.scl_inter)}function D(v){Y()&&(d=v===0||v===d?null:v,me())}function J(){const v=j(),B=ne.volumes[0];if(!v||!B||!M)return;const q=es(B,M);if(q===null)return;let de=null,I=0;for(let Me=0;Me<v.maps.length;Me++){const we=v.maps[Me][q];Number.isFinite(we)&&we>I&&(I=we,de=Me)}return de}function K(v){if(v[m]){if(Y()){const B=oe();if(B===null||Number.isNaN(B))return;D(B)}else if(j()){const B=J();if(B===void 0)return;A(B)}v.preventDefault()}}function ve(){return ke(this,null,function*(){if(!ns){ns=!0,fn=[];try{yield ge()}finally{ns=!1,modelProgress.classList.remove("is-busy"),modelSelect.value="-1",i()}}})}function ge(){return ke(this,null,function*(){var ie,fe,O;const v=modelSelect.value;if(v==="-1"||modelSelect.selectedIndex<0)return;yield It;const B=document.getElementById("memstatusItem");B&&(B.hidden=!0),le(),yield F();const q=Mn[v],I=(new URLSearchParams(window.location.search).get("precision")||"").toLowerCase(),we=lt(lt({},Lo(q,I!=="fp16"&&I!=="fp32")),I==="fp32"?{forceFP32:!0}:{}),Le=kt(lt({},ji),{isTouchPrimary:xl()}),Be=new URL("./",window.location.href).href;Le.rootURL=Be.endsWith("/")?Be.slice(0,-1):Be;const He=_.get(ne.volumes[0]);let We=null;const Fe=$l&&!we.quantize8Bit,se=Ts||Fe;if(Fe&&ln&&we.webgpu_safetensor&&console.info("Safari WebGPU legacy gate active for non-V4 model; routing to native WebGL2."),!se&&(!Dt||Dt.__isLost)&&"gpu"in navigator&&ts<2&&(ie=window.webgpuDiagnostics)!=null&&ie.adapterObtained&&(ts++,console.info(`[WebGPU] Re-initializing device after prior loss (attempt ${ts})...`),yield ks((fe=ne.view)==null?void 0:fe.gl)),ln&&Dt&&!Dt.__isLost&&!se&&we.webgpu_safetensor){console.log("Attempting WebGPU backend...");const pe=ri(kt(lt({},we),{enableTTA:!1}),window.location.search),$e=Se=>ke(null,[Se],function*({failedDevice:be}){var Re;if(be){try{Ti(be)}catch(De){}if(!be.__isLost)try{be.destroy()}catch(De){}}return Dt=null,ln=!1,yield ks((Re=ne.view)==null?void 0:Re.gl),ln&&Dt&&!Dt.__isLost?Dt:null});try{yield di({device:Dt,modelEntry:pe,runAttempt:(be,Se)=>Xi(be,Le,Se,ne.volumes[0].hdr,He,Mt,$t),requestFreshDevice:$e,onRetry:({failureKind:be,error:Se})=>{console.warn(`[WebGPU-V4] ${be} during standard run (${(Se==null?void 0:Se.message)||Se}); persisted low-memory safe mode and retrying once in LowMem128 + paced.`),$t("Retrying in low-memory WebGPU mode…",.05)}}),ts=0;return}catch(be){We=be;const Se=(be==null?void 0:be.message)||String(be);fn.some(Re=>Re.includes(Se))||fn.push(`WebGPU: ${Se}`),console.error("WebGPU inference failed, falling back to native WebGL2.",be)}}else!se&&we.webgpu_safetensor&&fn.push(`WebGPU: ${((O=window.webgpuDiagnostics)==null?void 0:O.error)||"no usable adapter or device"}`);if(q.webgpu_safetensor){const pe=I==="int8"||I==="rgba8",$e=kt(lt({},Lo(q,!1)),{quantize8Bit:pe,autoQuantize8BitFallback:!pe&&!!q.turbo});try{const{runInferenceWebGl2:be,nativeWebgl2Available:Se}=yield bn(()=>ke(null,null,function*(){const{runInferenceWebGl2:Re,nativeWebgl2Available:De}=yield import("./inference-webgl2-CTNbL1PZ.js");return{runInferenceWebGl2:Re,nativeWebgl2Available:De}}),[],import.meta.url);if(Se()){console.log("Attempting native WebGL2 runner..."),yield be(Le,$e,ne.volumes[0].hdr,He,Mt,$t);return}We=new Error("Native WebGL2 unavailable (no OffscreenCanvas WebGL2 context)."),fn.push(We.message),console.warn(We.message)}catch(be){We=be,fn.push(`WebGL2: ${(be==null?void 0:be.message)||be}`),console.error("Native WebGL2 failed.",be)}}Ml(We||new Error(`No available backend could run ${we.modelName}.`))})}modelSelect.onchange=()=>(i(),ve()),i();function xe(){const v=j();return v?v.maps.map((B,q)=>Hn(ne.volumes[0],B,v.tissues[q].name,{scl_inter:0,scl_slope:1,datatypeCode:16,numBitsPerVoxel:32,cal_min:0,cal_max:1,intent_code:1001})):ne.volumes.slice(1)}function Pe(){const v=ne.volumes[1],B=(o==null?void 0:o.type)==="Brain_Extraction"?a:v.img;if(!B||B.length!==v.img.length)throw new Error("The segmentation mask is unavailable. Run the model again.");const q=new Uint8Array(B.length);for(let I=0;I<B.length;I++)q[I]=B[I]!==0?1:0;const de=qo(v,q,"brain_mask");return Object.assign(de.hdr,{datatypeCode:2,numBitsPerVoxel:8,scl_slope:1,scl_inter:0,cal_min:0,cal_max:1,intent_code:1002}),de}function Oe(){return ke(this,arguments,function*({includeMask:v=!1,useFreeSurfer:B=!1}={}){if(ne.volumes.length<2){window.alert("No segmentation to save (run a model first).");return}const q=B?Jn(n):null,de=xe();for(const I of de){const Me=!!I.colormapLabel||I.hdr.intent_code===1002;if(q&&Me){const{img:we,maxLabel:Le}=il(I.img,q),Be=Hn(I,we,I.name,{datatypeCode:4,numBitsPerVoxel:16,scl_slope:1,scl_inter:0,cal_min:0,cal_max:Le,intent_code:1002});yield Fn(Be,Ae(I,de.length,"_fs"))}else yield Fn(I,Ae(I,de.length,""))}v&&(yield Fn(Pe(),"binary_mask.nii.gz"))})}function Ae(v,B,q){return B>1?`segmentation_${v.name}${q}.nii.gz`:`segmentation${q}.nii.gz`}function Ee(){if(ne.volumes.length<1){window.alert("No image loaded.");return}Fn(ne.volumes[0],"conformed_input.nii.gz")}function Ie(){return ke(this,null,function*(){if(ne.volumes.length<1){window.alert("No image loaded.");return}const v=Y(),B=d!==null&&v&&g?v.colormapLabel:null;B&&(v.colormapLabel=g);try{yield ne.saveDocument("brainchop.nvd")}finally{B&&v&&(v.colormapLabel=B)}})}function Ue(){return ke(this,arguments,function*({includeMask:v=!1,useFreeSurfer:B=!1}={}){if(ne.volumes.length<2){window.alert("No segmentation to save (run a model first).");return}if(!k||!k.hdr||!k.hdr.affine){window.alert("Original input grid is unavailable — reload the image and try again.");return}const q=B?Jn(n):null;$t("Reslicing to native space…",.15);try{const de=xe();for(let I=0;I<de.length;I++){const Me=de[I],we=!!Me.colormapLabel||Me.hdr.intent_code===1002,Le=q&&we?q:null,Be=yield ye(Me,Le);yield Fn(Be,Ae(Me,de.length,Le?"_fs_native":"_native")),de.length>1&&$t("Reslicing to native space…",.15+(I+1)/de.length*.75)}if(v){const I=yield ye(Pe());yield Fn(I,"binary_mask_native.nii.gz")}$t("Saved native-space segmentation.",1)}catch(de){$t("",0),console.error("Native-space reslice failed:",de),window.alert("Native-space export failed: "+(de&&de.message?de.message:de))}})}function ye(v,B=null){return ke(this,null,function*(){var Be,He;const q=!!v.colormapLabel||v.hdr.intent_code===1002,de=!q&&v.img instanceof Float32Array,I=((He=(Be=k.img)==null?void 0:Be.constructor)==null?void 0:He.name)||"Uint8Array",{img:Me,hdrPatch:we}=yield La({srcImg:v.img,srcDims:[v.hdr.dims[1],v.hdr.dims[2],v.hdr.dims[3]],srcAffine:v.hdr.affine,dstDims:[k.hdr.dims[1],k.hdr.dims[2],k.hdr.dims[3]],dstAffine:k.hdr.affine,isLabel:q,isProbability:de,dstTypedArrayKind:I,labelLut:B}),Le=qo(k,Me);return Object.assign(Le.hdr,we),Le})}let Xe=!1,Ke=!1;const Qe={cube:'<svg viewBox="0 0 24 24" class="save-opt-ico" aria-hidden="true"><path d="M12 2.75l8.25 4.75v9L12 21.25 3.75 16.5v-9z"/><path d="M12 12v9.25M3.75 7.5L12 12l8.25-4.5"/></svg>',grid:'<svg viewBox="0 0 24 24" class="save-opt-ico" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="2.5"/><path d="M3.5 9.5h17M3.5 14.5h17M9.5 3.5v17M14.5 3.5v17"/></svg>',volume:'<svg viewBox="0 0 24 24" class="save-opt-ico" aria-hidden="true"><path d="M12 3.5l8.5 4.5-8.5 4.5L3.5 8z"/><path d="M3.5 12l8.5 4.5 8.5-4.5M3.5 16l8.5 4.5 8.5-4.5"/></svg>',scene:'<svg viewBox="0 0 24 24" class="save-opt-ico" aria-hidden="true"><rect x="3.5" y="4.5" width="17" height="15" rx="2.5"/><path d="M3.5 9.5h17M9.5 9.5v10"/></svg>',arrow:'<svg viewBox="0 0 24 24" class="save-opt-arrow" aria-hidden="true"><path d="M12 4.5v11"/><path d="M7.5 11.5L12 16l4.5-4.5"/><path d="M5 19.5h14"/></svg>'},nt=[{act:Oe,group:"seg",icon:"cube",title:"Conformed space",sub:"256³ · 1 mm isotropic",need:"seg"},{act:Ue,group:"seg",icon:"grid",title:"Native space",sub:"Resampled to the input grid",need:"seg"},{act:Ee,group:"vol",icon:"volume",title:"Conformed input volume",sub:"Resampled T1 · 256³ · 1 mm",need:"img"},{act:Ie,group:"vol",icon:"scene",title:"Scene (.nvd)",sub:"Full viewer state document",need:"img"}];function Ft(){const v=ne.volumes.length>=1,B=ne.volumes.length>=2,q=B&&o&&o.outputType!=="probability"&&(o.type!=="Brain_Extraction"||!!a),de=B&&o&&o.outputType!=="probability"&&o.type!=="Brain_Extraction"&&!!Jn(n),I=fe=>fe==="seg"?B:v;let Me=!1;const we=fe=>nt.map((O,pe)=>({o:O,i:pe})).filter(({o:O})=>O.group===fe).map(({o:O,i:pe})=>{const $e=I(O.need),be=$e&&!Me?(Me=!0," autofocus"):"";return`<button type="button" class="save-opt${$e?"":" disabled"}" data-i="${pe}"${$e?"":" disabled"}${be}>
          ${Qe[O.icon]}
          <span class="save-opt-copy">
            <span class="save-opt-title">${O.title}</span>
            <span class="save-opt-sub">${O.sub}</span>
          </span>
          ${Qe.arrow}
        </button>`}).join(""),Le=[];de&&Le.push(`
        <label class="save-check-row" for="saveFreeSurfer">
          <input type="checkbox" id="saveFreeSurfer" class="save-checkbox"${Xe?" checked":""}>
          <span class="save-check-copy">
            <span class="save-check-title">FreeSurfer label IDs <span class="save-badge">Freeview</span></span>
            <span class="save-check-sub">FreeSurferColorLUT numbering · open directly with :colormap=lut</span>
          </span>
        </label>`),q&&Le.push(`
        <label class="save-check-row" for="saveBinaryMask">
          <input type="checkbox" id="saveBinaryMask" class="save-checkbox"${Ke?" checked":""}>
          <span class="save-check-copy">
            <span class="save-check-title">Also save binary mask</span>
            <span class="save-check-sub">Foreground 1 · background 0</span>
          </span>
        </label>`);const Be=Le.length?`<div class="save-modifiers" role="group" aria-label="Segmentation export options">${Le.join("")}</div>`:"",We=`
      <div class="save-sheet">
        <section class="save-section">
          <div class="save-section-head">
            <span class="save-section-label">Segmentation</span>
            ${B?"":'<span class="save-section-hint">Run a model first</span>'}
          </div>
          <div class="save-options">${we("seg")}</div>
          ${Be}
        </section>
        <section class="save-section save-section-divider">
          <div class="save-section-head">
            <span class="save-section-label">Volume &amp; Scene</span>
          </div>
          <div class="save-options">${we("vol")}</div>
        </section>
      </div>`;Yt("Save",We,{hideClose:!0,saveMode:!0});const Fe=document.getElementById("dialogMessage");if(!Fe)return;const se=Fe.querySelector("#saveFreeSurfer");se&&(se.onchange=()=>{Xe=se.checked});const ie=Fe.querySelector("#saveBinaryMask");ie&&(ie.onchange=()=>{Ke=ie.checked}),Fe.querySelectorAll(".save-opt:not(.disabled)").forEach(fe=>{fe.onclick=()=>{var Se,Re;const O=nt[parseInt(fe.dataset.i,10)],pe=O.need==="seg"&&!!((Se=Fe.querySelector("#saveBinaryMask"))!=null&&Se.checked),$e=O.need==="seg"&&de&&!!((Re=Fe.querySelector("#saveFreeSurfer"))!=null&&Re.checked),be=document.getElementById("appDialog");be&&be.open&&be.close(),O.need==="seg"?O.act({includeMask:pe,useFreeSurfer:$e}):O.act()}})}const vt=document.getElementById("saveBtn");vt&&(vt.onclick=Ft);function _t(v,B,q,de=[256,256,256]){const Me=new Map,[we,Le,Be]=de,He=B.length;if(we*Le*Be===He){let se=0;for(let ie=0;ie<Be;ie++)for(let fe=0;fe<Le;fe++)for(let O=0;O<we;O++,se++){const pe=B[se];if(pe===0)continue;let $e=Me.get(pe);$e||($e={count:0,sum:0,sumSq:0,sumX:0,sumY:0,sumZ:0,hist:new Float64Array(256)},Me.set(pe,$e));const be=v[se];$e.count++,$e.sum+=be,$e.sumSq+=be*be,$e.sumX+=O,$e.sumY+=fe,$e.sumZ+=ie,$e.hist[be]++}}else for(let se=0;se<He;se++){const ie=B[se];if(ie===0)continue;let fe=Me.get(ie);fe||(fe={count:0,sum:0,sumSq:0,sumX:0,sumY:0,sumZ:0,hist:new Float64Array(256)},Me.set(ie,fe));const O=v[se];fe.count++,fe.sum+=O,fe.sumSq+=O*O,fe.hist[O]++}const We=(se,ie,fe)=>{const O=fe*ie;let pe=0;for(let $e=0;$e<se.length;$e++)if(pe+=se[$e],pe>=O)return $e;return se.length-1},Fe=[];for(const[se,ie]of[...Me.entries()].sort((fe,O)=>fe[0]-O[0])){const fe=ie.sum/ie.count,O=Math.max(0,ie.sumSq/ie.count-fe*fe);let pe=0,$e=0;for(let be=0;be<ie.hist.length;be++)if(ie.hist[be]>0){pe=be;break}for(let be=ie.hist.length-1;be>=0;be--)if(ie.hist[be]>0){$e=be;break}Fe.push({label:se,name:n&&n[se]!=null?n[se]:`label_${se}`,voxels:ie.count,volume_mm3:ie.count*q,min:pe,max:$e,q1:We(ie.hist,ie.count,.25),median:We(ie.hist,ie.count,.5),q3:We(ie.hist,ie.count,.75),mean:fe,stdev:Math.sqrt(O),centroidVox:[ie.sumX/ie.count,ie.sumY/ie.count,ie.sumZ/ie.count]})}return Fe}function Lt(v,{vol:B,labelArr:q=null,probMap:de=null}={}){var pe;if(!(v!=null&&v.centroidVox)||!((pe=B==null?void 0:B.hdr)!=null&&pe.affine))return;const[I,Me,we]=B.hdr.dims.slice(1,4);let[Le,Be,He]=v.centroidVox;const We=Math.max(0,Math.min(I-1,Math.round(Le))),Fe=Math.max(0,Math.min(Me-1,Math.round(Be))),se=Math.max(0,Math.min(we-1,Math.round(He))),ie=We+Fe*I+se*I*Me;if(q&&q[ie]!==v.label){let $e=1/0,be=We,Se=Fe,Re=se,De=0;for(let Ce=0;Ce<we;Ce++){const je=Ce-He,ct=je*je;for(let Te=0;Te<Me;Te++){const qe=Te-Be,_e=qe*qe+ct;for(let ze=0;ze<I;ze++,De++){if(q[De]!==v.label)continue;const Ve=ze-Le,st=Ve*Ve+_e;st<$e&&($e=st,be=ze,Se=Te,Re=Ce)}}}Number.isFinite($e)&&(Le=be,Be=Se,He=Re)}else if(de&&!(de[ie]>=.5)){let $e=1/0,be=We,Se=Fe,Re=se,De=0;for(let Ce=0;Ce<we;Ce++){const je=Ce-He,ct=je*je;for(let Te=0;Te<Me;Te++){const qe=Te-Be,_e=qe*qe+ct;for(let ze=0;ze<I;ze++,De++){if(!(de[De]>=.5))continue;const Ve=ze-Le,st=Ve*Ve+_e;st<$e&&($e=st,be=ze,Se=Te,Re=Ce)}}}Number.isFinite($e)&&(Le=be,Be=Se,He=Re)}const fe=B.hdr.affine,O=[fe[0][0]*Le+fe[0][1]*Be+fe[0][2]*He+fe[0][3],fe[1][0]*Le+fe[1][1]*Be+fe[1][2]*He+fe[1][3],fe[2][0]*Le+fe[2][1]*Be+fe[2][2]*He+fe[2][3]];ne.setCrosshairPos(O)}const Ut='<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="5.5"/><path d="M12 2.5v4M12 17.5v4M2.5 12h4M17.5 12h4"/></svg>';function Wt(v,B=null){const q=B?["label","fs_label","name","voxels","volume_mm3","min","max","q1","median","q3","mean","stdev"]:["label","name","voxels","volume_mm3","min","max","q1","median","q3","mean","stdev"],de=we=>Number.isInteger(we)?String(we):we.toFixed(6),I=we=>/[",\n]/.test(we)?`"${String(we).replace(/"/g,'""')}"`:String(we),Me=[q.join(",")];for(const we of v){const Le=B?[we.label,we.label<B.length?B[we.label]:we.label,I(we.name)]:[we.label,I(we.name)];Le.push(we.voxels,de(we.volume_mm3),we.min,we.max,we.q1,we.median,we.q3,de(we.mean),de(we.stdev)),Me.push(Le.join(","))}return Me.join(`
`)+`
`}function bt(v,B="mask_stats.csv"){const q=new Blob([v],{type:"text/csv"}),de=URL.createObjectURL(q),I=document.createElement("a");I.href=de,I.download=B,document.body.appendChild(I),I.click(),I.remove(),URL.revokeObjectURL(de)}function mt(v,B=null){bt(Wt(v,B),"mask_stats.csv")}const rt=v=>{const B=v/1e3;return B>=10?Math.round(B).toLocaleString():B.toFixed(1)};function At(v,B,q=null,{isCatLiteMode:de=!1}={}){const I=Math.max(...v.map(se=>se.volume_mm3)),Me=se=>se.colorCss?se.colorCss:s&&s.R&&s.R[se.label]!=null?`rgb(${s.R[se.label]},${s.G[se.label]},${s.B[se.label]})`:"#6b9bd1",we=de||!!Y();let Le="";for(const se of v){const ie=B>0?se.volume_mm3/B*100:0,fe=I>0?se.volume_mm3/I*100:0,O=de?f===se.tissueIndex:d===se.label,pe=!de&&q&&se.label<q.length?q[se.label]:null,$e=`<span class="stat-val" data-cm3="${rt(se.volume_mm3)}" data-pct="${ie.toFixed(1)}%">${rt(se.volume_mm3)}</span>`,be=`<span class="stat-bar" style="width:${fe.toFixed(2)}%;background:${Me(se)}" data-w-abs="${fe.toFixed(2)}" data-w-pct="${ie.toFixed(2)}"></span>`,Se=(je,ct)=>`<div class="stat-kv"><span class="k">${je}</span><span class="v">${ct}</span></div>`,Re=de?Se("% ICV",`${ie.toFixed(1)}%`)+Se("cm³",rt(se.volume_mm3))+Se("mean",se.mean.toFixed(2))+Se("SD",se.stdev.toFixed(2))+Se("min",se.min)+Se("max",se.max)+Se("equiv. vox",Math.round(se.effectiveVoxels).toLocaleString())+Se("support",se.supportVoxels.toLocaleString()):Se("min",se.min)+Se("max",se.max)+Se("Q1",se.q1)+Se("Q3",se.q3)+Se("median",se.median)+Se("mean",se.mean.toFixed(2))+Se("SD",se.stdev.toFixed(2))+Se("voxels",se.voxels.toLocaleString()),De=de?`<span class="stat-id-chip">${Et(se.tissueKey.toUpperCase())}</span>`:`<span class="stat-id-chip">ID ${se.label}</span>`,Ce=we?`<button type="button" class="stat-iso${O?" active":""}" aria-pressed="${O}" aria-label="${O?"Isolated":"Isolate"} ${Et(se.name)}">${O?"isolated":"isolate"}</button>`:"";Le+=`
        <div class="stat-row${O?" is-isolated":""}" data-label="${se.label}" data-name="${Et(se.name.toLowerCase())}">
          <div class="stat-line">
            <button type="button" class="stat-trigger" aria-expanded="false">
              <span class="stat-chevron" aria-hidden="true"></span>
              <span class="stat-swatch" style="background:${Me(se)}" aria-hidden="true"></span>
              <span class="stat-name">${Et(se.name)}</span>
              <span class="stat-track" aria-hidden="true">${be}</span>
              ${$e}
            </button>
            <span class="stat-actions">
              <button type="button" class="stat-locate" aria-label="Locate ${Et(se.name)}" title="Jump crosshair to ${Et(se.name)}">${Ut}</button>
              ${Ce}
            </span>
          </div>
          <div class="stat-detail" hidden>
            <div class="stat-detail-meta">
              <span class="stat-detail-fullname">${Et(se.name)}</span>
              <span class="stat-detail-badges">
                ${De}
                ${pe?`<span class="save-badge">FS ${pe}</span>`:""}
              </span>
            </div>
            <div class="stat-detail-grid">${Re}</div>
          </div>
        </div>`}const Be=de?v.length===1?"tissue":"tissues":v.length===1?"region":"regions",He=de?" cm³ ICV":" cm³",We=de?"% of ICV":"% of total",Fe=v.length>8?`<search class="stat-search">
           <input type="search" id="statsFilterInput" class="stat-filter" placeholder="Filter regions…" aria-label="Filter regions" autocorrect="off" autocapitalize="none" spellcheck="false">
         </search>`:"";return`
      <div id="statsPanel">
        <div class="stat-toolbar">
          <div class="stat-toggle" role="group" aria-label="Volume display unit">
            <button type="button" data-mode="cm3" class="active" aria-pressed="true">cm³</button>
            <button type="button" data-mode="pct" aria-pressed="false">${We}</button>
          </div>
          <span class="stat-total" id="statsUnitLabel">${v.length} ${Be} &middot; ${rt(B)}${He}</span>
          ${Fe}
        </div>
        <div id="statsRows">
          ${Le}
          <p id="statsEmpty" class="stat-empty" hidden>No matching regions</p>
        </div>
        <div class="stat-footer">
          <span class="stat-footer-hint">Select a row for stats &middot; Crosshair jumps &middot; Isolate solos in 3D</span>
          <button type="button" id="statsDownloadBtn" class="stat-csv-btn">
            ${Qe.arrow}
            <span>Download CSV</span>
          </button>
        </div>
      </div>`}saveStatsBtn.onclick=function(){if(ne.volumes.length<2){Yt("Region volumes","<p>No segmentation to measure — run a model first.</p>");return}const v=ne.volumes[0].img,B=ne.volumes[0].hdr.pixDims||[],q=B[1]&&B[2]&&B[3]?B[1]*B[2]*B[3]:1,de=j();let I,Me,we=null,Le=!1,Be=null;const He=ne.volumes[1];if(de){Le=!0;const Se=ne.volumes[0].hdr.dims.slice(1,4),Re=Ro(v,de.maps,q,Se,de.modelEntry);if(I=Re.rows,Me=Re.icvMm3,I.length===0){Yt("Tissue volumes","<p>No non-zero tissue fractions found.</p>");return}I=I.slice().sort((De,Ce)=>Ce.volume_mm3-De.volume_mm3)}else if(He.img instanceof Float32Array){Yt("Region volumes","<p>Region statistics require a discrete label segmentation or CAT-lite GM/WM/CSF tissue maps.</p>");return}else{if(Be=He.img,!v||!Be||v.length!==Be.length){Yt("Region volumes","<p>Input and segmentation grids do not match.</p>");return}const Se=He.hdr.dims.slice(1,4);if(I=_t(v,Be,q,Se),I.length===0){Yt("Region volumes","<p>No non-background labels found in the segmentation.</p>");return}I=I.slice().sort((Re,De)=>De.volume_mm3-Re.volume_mm3),Me=I.reduce((Re,De)=>Re+De.volume_mm3,0),we=o&&o.type!=="Brain_Extraction"?Jn(n):null}const We=new Map(I.map(Se=>[Se.label,Se]));Yt(Le?"Tissue volumes":"Region volumes",At(I,Me,we,{isCatLiteMode:Le}),{hideClose:!0,statsMode:!0});const se=document.getElementById("statsPanel");if(!se)return;let ie="cm3",fe=I.length;const O=Le?I.length===1?"tissue":"tissues":I.length===1?"region":"regions",pe=()=>{const Se=document.getElementById("statsUnitLabel");if(!Se)return;const Re=fe===I.length?`${I.length} ${O}`:`${fe} of ${I.length} ${O}`,De=ie==="pct"?Le?"100% of ICV":"100% of volume":`${rt(Me)}${Le?" cm³ ICV":" cm³"}`;Se.innerHTML=`${Re} &middot; ${De}`};se.querySelectorAll(".stat-toggle button").forEach(Se=>{Se.onclick=()=>{ie=Se.dataset.mode,se.querySelectorAll(".stat-toggle button").forEach(Re=>{const De=Re===Se;Re.classList.toggle("active",De),Re.setAttribute("aria-pressed",String(De))}),pe(),se.querySelectorAll(".stat-row").forEach(Re=>{const De=Re.querySelector(".stat-val"),Ce=Re.querySelector(".stat-bar");De.textContent=ie==="pct"?De.dataset.pct:De.dataset.cm3,Ce.style.width=(ie==="pct"?Ce.dataset.wPct:Ce.dataset.wAbs)+"%"})}});const $e=document.getElementById("statsFilterInput"),be=document.getElementById("statsEmpty");if($e){const Se=()=>{const Re=$e.value.trim().toLowerCase();fe=0,se.querySelectorAll(".stat-row").forEach(De=>{const Ce=!Re||De.dataset.name.includes(Re)||De.dataset.label===Re;De.hidden=!Ce,Ce&&fe++}),be&&(be.hidden=fe>0),pe()};$e.oninput=Se,$e.addEventListener("keydown",Re=>{Re.key==="Escape"&&$e.value!==""&&(Re.preventDefault(),Re.stopPropagation(),$e.value="",Se())})}se.querySelectorAll(".stat-trigger").forEach(Se=>{Se.onclick=()=>{const Re=Se.closest(".stat-row"),De=Re.querySelector(".stat-detail"),Ce=De.hidden;De.hidden=!Ce,Re.classList.toggle("is-expanded",Ce),Se.setAttribute("aria-expanded",String(Ce))}}),se.querySelectorAll(".stat-locate").forEach(Se=>{Se.onclick=()=>{const Re=parseInt(Se.closest(".stat-row").dataset.label,10),De=We.get(Re);De&&Lt(De,{vol:Le?ne.volumes[0]:He,labelArr:Le?null:Be,probMap:Le?de.maps[De.tissueIndex]:null});const Ce=document.getElementById("appDialog");Ce&&Ce.open&&Ce.close()}}),se.querySelectorAll(".stat-iso").forEach(Se=>{Se.onclick=()=>{const Re=parseInt(Se.closest(".stat-row").dataset.label,10);Number.isNaN(Re)||(Le?A(Re):D(Re));const De=document.getElementById("appDialog");De&&De.open&&De.close()}}),document.getElementById("statsDownloadBtn").onclick=()=>{Le?bt(vl(I,Me),"tissue_stats.csv"):mt(I,we)}};function gt(){_.sync(ne.volumes[0]),ne.volumes.length<=1&&(_.clear(),k=ne.volumes[0]||null,$=k&&k.name?k.name:"input.nii.gz",o=null,a=null,c(null),T(),modelSelect.value="-1",i(),ne.volumes[0]&&opacitySlider0.oninput())}const Rt=new Map;function Jt(v){return ke(this,null,function*(){if(Rt.has(v))return Rt.get(v);const q=yield(yield fetch(v)).json();return Rt.set(v,q),q})}function Gt(v,B,q=1){let de=0;for(let I=0;I<256;I++)v[I]>0&&de++;return(!B||de!==B.length)&&(t="Failed to Predict Some Labels - "),B.map((I,Me)=>{const we=Me<256?v[Me]:0,Le=we>0?`${rt(we*q)} cm3`:"Missing";return Le==="Missing"&&(t+=`${I}, `),`${I}   ${Le}`})}function nn(v,B,q){return ke(this,null,function*(){var He,We;const de=(He=B.probabilityDisplayMin)!=null?He:.005,{probabilityOverlayAlpha:I=96,probabilityOverlayFloor:Me=192}=B,we=(q==null?void 0:q.tint)||[255,255,255],Le=`probability-light-${we.join("-")}-${Me}-${I}`;if(!ne.hasColormap(Le)){const[Fe,se,ie]=we.map(fe=>Math.round(fe*Me/255));ne.addColormap(Le,{R:[Fe,we[0]],G:[se,we[1]],B:[ie,we[2]],A:[0,I],I:[0,255]})}const Be=Hn(ne.volumes[0],v instanceof Float32Array?v:Float32Array.from(v),(We=q==null?void 0:q.name)!=null?We:ne.volumes[0].name,{scl_inter:0,scl_slope:1,datatypeCode:16,numBitsPerVoxel:32,cal_min:0,cal_max:1,intent_code:1001},{calMin:de,calMax:1,robustMin:de,robustMax:1,globalMin:0,globalMax:1,colormapType:1,colormap:Le,opacity:Number(opacitySlider1.value),modulateAlpha:1});return Be.modulationImage=Be.id,yield ne.model.addVolume(Be),ne.volumes.at(-1)})}function Mt(v,B,q,de){return ke(this,null,function*(){var Fe,se,ie;if(H(),le(),n=null,s=null,o=q,a=q.type==="Brain_Extraction"&&de||null,c(q),q.outputType==="probability"){const fe=Array.isArray(v)?v:[v];if(q.probabilityPostprocess==="cat-lite"&&fe.length===3){const O=ne.volumes[0],pe=fe.map(ct=>ct instanceof Float32Array?ct:Float32Array.from(ct)),$e=Number(opacitySlider1.value),be=O.dimsRAS&&O.img2RASstart&&O.img2RASstep?{dimsRAS:[...O.dimsRAS],img2RASstart:[...O.img2RASstart],img2RASstep:[...O.img2RASstep]}:null,Se=Wo(pe,q,null,$e,be),Re=Se.isRasOrdered?{dims:[...be.dimsRAS],permRAS:[1,2,3],img2RASstart:[0,0,0],img2RASstep:[1,be.dimsRAS[1],be.dimsRAS[1]*be.dimsRAS[2]]}:{},De=Se.isRasOrdered?lt({dims:[3,be.dimsRAS[1],be.dimsRAS[2],be.dimsRAS[3],1,1,1,1]},O.matRAS&&O.matRAS.length>=16?{affine:[[O.matRAS[0],O.matRAS[4],O.matRAS[8],O.matRAS[12]],[O.matRAS[1],O.matRAS[5],O.matRAS[9],O.matRAS[13]],[O.matRAS[2],O.matRAS[6],O.matRAS[10],O.matRAS[14]],[O.matRAS[3],O.matRAS[7],O.matRAS[11],O.matRAS[15]]]}:{}):{},Ce=Hn(O,Se.rgba,"cat_lite_tissues",kt(lt({},De),{scl_inter:0,scl_slope:1,datatypeCode:2304,numBitsPerVoxel:32,cal_min:0,cal_max:255,intent_code:1001}),kt(lt({},Re),{calMin:0,calMax:255,robustMin:0,robustMax:255,globalMin:0,globalMax:255,opacity:$e}));yield ne.model.addVolume(Ce);const je=ne.volumes.at(-1);p={maps:pe,tissues:Se.tissues,modelEntry:q,rasLayout:Se.isRasOrdered?be:null,rgba:Se.rgba,activeAlphaOffsets:Se.activeAlphaOffsets,activeBaseAlpha:Se.activeBaseAlpha,overlay:je}}else for(let O=0;O<fe.length;O++)yield nn(fe[O],q,(Fe=q.probabilityTissues)==null?void 0:Fe[O]);T(q),S=Number(opacitySlider1.value),yield ne.updateGLVolume();return}const I=v instanceof Uint8Array?v:new Uint8Array(v.buffer,v.byteOffset||0,v.byteLength);let Me,we=null,Le=0,Be={calMin:0,calMax:255,robustMin:0,robustMax:255,globalMin:0,globalMax:255};if(q.type==="Brain_Masking"){const fe=["Background","Brain Mask"];n=fe.slice();const O=[0,217],pe=[0,119],$e=[0,33];s={R:O,G:pe,B:$e};const be={R:O,G:pe,B:$e,labels:fe},Se="brainchop-label-mask";ne.addColormap(Se,be),Me=Se,we=co(be),Le=1002,Be={calMin:0,calMax:1,robustMin:0,robustMax:1,globalMin:0,globalMax:1}}else if(q.colormapPath){const fe=Ps(I),O=yield Jt(q.colormapPath);n=O.labels?O.labels.slice():null,s={R:O.R,G:O.G,B:O.B};const pe=ne.volumes[0].hdr.pixDims||[],$e=pe[1]&&pe[2]&&pe[3]?pe[1]*pe[2]*pe[3]:1,be=O.labels?Gt(fe,O.labels,$e):[],Se=kt(lt(lt({R:O.R,G:O.G,B:O.B},O.I?{I:O.I}:{}),O.A?{A:O.A}:{}),{labels:be}),Re=`brainchop-label-${q.id}`;ne.addColormap(Re,Se),Me=Re,we=co(Se);const De=Math.max(1,((ie=(se=O.R)==null?void 0:se.length)!=null?ie:256)-1);Le=1002,Be={calMin:0,calMax:De,robustMin:0,robustMax:De,globalMin:0,globalMax:De}}else{const fe=Ps(I);Be=yl(fe),Me=B.atlasSelectedColorTable.toLowerCase(),q.type==="Brain_Extraction"&&(Me="copper2"),ne.hasColormap(Me)||(Me="actc")}const He=Hn(ne.volumes[0],I,ne.volumes[0].name,{datatypeCode:2,numBitsPerVoxel:8,scl_inter:0,scl_slope:1,cal_min:Be.calMin,cal_max:Be.calMax,intent_code:Le},kt(lt(kt(lt({},Be),{colormap:Me}),we?{colormapLabel:we}:{}),{opacity:Number(opacitySlider1.value)}));yield ne.model.addVolume(He);const We=ne.volumes.at(-1);we&&We&&!We.colormapLabel&&(We.colormapLabel=we),g=we?We.colormapLabel:null,T(q),S=Number(opacitySlider1.value),yield ne.updateGLVolume()})}function qt(v){return ke(this,null,function*(){var B;if(typeof v=="string")try{v=JSON.parse(v)}catch(q){console.error("Failed to parse telemetry data",q);return}v=yield ol(v,(B=ne.view)==null?void 0:B.gl),e=`:: Diagnostics https://github.com/neuroneural/brainchop/issues ::
`;for(const q in v)v[q]!==null&&v[q]!==void 0&&(e+=`${q}: ${v[q]}
`)})}function at(v){const B=String(v).split(" · ").map(q=>q.trim()).filter(q=>q!=="");return B.length<=1?Et(String(v)):B.map((q,de)=>`<span class="loc-seg"${de>=2?' style="opacity:.75"':""}>${Et(q)}</span>`).join('<span class="loc-sep">&middot;</span>')}function $t(v="",B=-1,q="",de=[]){if(v){console.log(v);const I=document.getElementById("location");I&&(I.innerHTML=at(v))}if(isNaN(B)){modelProgress.classList.remove("is-busy");const I=document.getElementById("memstatusItem");I&&(I.hidden=!1),memstatus.style.color="#ef4444",memstatus.textContent="Memory Issue"}else B>=0&&(modelProgress.value=B*modelProgress.max,modelProgress.classList.toggle("is-busy",B>0&&B<1));q&&(ns?(fn.push(String(q)),console.warn("[backend]",q)):Yt("Message",Et(String(q)).replace(/\n/g,"<br>"))),de&&Object.keys(de).length>0&&qt(de)}function it(v){M=v.vox;const B=v.string.split("   ").map(we=>we.trim()).filter(we=>we!=="");let q="";const de=j(),I=ne.volumes[0];if(de&&I&&M){B.length>1&&B.pop();const we=es(I,M);if(we!==null){const Le=de.maps[0][we]||0,Be=de.maps[1][we]||0,He=de.maps[2][we]||0;Le+Be+He>=.005&&(q=`<span class="loc-seg loc-tissues"><span class="loc-k">GM</span> <span class="loc-v">${Le.toFixed(2)}</span> <span class="loc-k">WM</span> <span class="loc-v">${Be.toFixed(2)}</span> <span class="loc-k">CSF</span> <span class="loc-v">${He.toFixed(2)}</span></span>`)}}const Me=B.map(we=>`<span class="loc-seg">${Et(we)}</span>`);q&&Me.push(q),document.getElementById("location").innerHTML=Me.join('<span class="loc-sep">&middot;</span>')}const Ht=new URLSearchParams(window.location.search).get("viewer")==="webgpu"?"webgpu":"webgl2",ne=new Wr({backend:Ht,matcaps:{Shiny:Rr}});yield ne.attachTo("gl1"),console.info("NiiVue viewer backend:",ne.backend),ne.backgroundColor=[0,0,0,1],ne.is3DCrosshairVisible=!0,ne.clipPlaneColor=[.7,0,.7,.5],ne.gamma=1,ne.volumeTransforms.includes(cs.name)||ne.registerVolumeTransform(cs),ne.isLegendVisible=!1,ne.addEventListener("locationChange",v=>it(v.detail)),ne.canvas.addEventListener("click",K),window.addEventListener("keydown",v=>{v.key==="Escape"&&(document.querySelector("dialog[open]")||(d!==null?(d=null,me()):f!==null&&(f=null,ae())))});const zt=ne.drawScene.bind(ne);ne.drawScene=function(v){const B=zt(v);try{re(),ue()}catch(q){console.warn("isolation HUD draw failed",q)}return B},window.addEventListener("resize",ue),ne.primaryDragMode=uo.crosshair,ne.secondaryDragMode=uo.slicer3D,ne.showRender=qr.ALWAYS,ne.isYoked3DTo2DZoom=!1,ne.crosshairGap=11;{const v=document.getElementById("dragSegmented");v&&v.querySelectorAll("button").forEach(B=>B.classList.toggle("active",parseInt(B.dataset.drag,10)===ne.secondaryDragMode))}ne.volumeIsNearestInterpolation=!0,yield ne.loadVolumes([{url:"./t1_crop.nii.gz"}]);const It=ks((ut=ne.view)==null?void 0:ut.gl);modelSelect.innerHTML="";const Ze=document.createElement("option");Ze.text="Run Segmentation Model",Ze.value="-1",Ze.disabled=!0,Ze.selected=!0,Ze.hidden=!0,modelSelect.appendChild(Ze);for(let v=0;v<Mn.length;v++){console.log(`Adding model option: ${Mn[v].modelName}`);const B=document.createElement("option");B.text=Mn[v].modelName,B.value=v,Mn[v].type==="Divider"&&(B.disabled=!0),modelSelect.appendChild(B)}ne.addEventListener("volumeLoaded",gt),gt(),bl(ne),pl(ne),modelSelect.value="-1",i(),C(-1),yield It;const tt=new URLSearchParams(window.location.search).get("model");tt!==null&&tt!==""&&Number(tt)>=0&&Number(tt)<Mn.length?(modelSelect.value=String(Number(tt)),i(),ve()):ln&&!Ts&&Dt&&(window.requestIdleCallback?B=>window.requestIdleCallback(B,{timeout:600}):B=>setTimeout(B,200))(()=>Ei(Dt))})}function Et(e){return String(e).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Ml(e){const n=(fn.length?fn:[e&&e.message?e.message:String(e||"unknown error")]).map(s=>`<li>${Et(s)}</li>`).join("");Yt("Segmentation failed",`<p>No available backend could run this model on this device.</p>
     <ul style="margin:0 0 4px 1.1em;padding:0;font-size:0.92em;line-height:1.45">${n}</ul>
     <p style="font-size:0.88em;color:#9aa4af">Full details are in the browser console and under Diagnostics.</p>`)}function Yt(e,t,n={}){const s=document.getElementById("appDialog"),o=document.getElementById("dialogTitle"),a=document.getElementById("dialogMessage"),r=document.getElementById("dialogCloseBtn");if(!s)return;o.textContent=e,a.innerHTML=t,r.style.display=n.hideClose?"none":"",r.onclick=()=>s.close(),s.classList.toggle("dialog-save",!!n.saveMode),s.classList.toggle("dialog-stats",!!n.statsMode);const i=document.getElementById("dialogXBtn");i&&(i.onclick=()=>s.close()),s.showModal()}const Go="brainchop:gh-stars:v1",kl=360*60*1e3;function Pl(){return ke(this,null,function*(){var n,s;const e=document.getElementById("star-count");if(!e)return;let t=null;try{const o=(n=window.localStorage)==null?void 0:n.getItem(Go);if(o){const a=JSON.parse(o);a&&typeof a.count=="number"&&Number.isFinite(a.count)&&(t=a,e.textContent=String(a.count))}}catch(o){}if(!(t&&typeof t.ts=="number"&&Date.now()-t.ts<kl))try{const o=yield fetch("https://api.github.com/repos/neuroneural/brainchop");if(!o.ok)return;const a=yield o.json();if(typeof(a==null?void 0:a.stargazers_count)=="number"&&Number.isFinite(a.stargazers_count)){e.textContent=String(a.stargazers_count);try{(s=window.localStorage)==null||s.setItem(Go,JSON.stringify({count:a.stargazers_count,ts:Date.now()}))}catch(r){}}}catch(o){console.error("Error fetching star count:",o)}})}(function(){return ke(this,null,function*(){if(yield Sl(),yield Pl(),"serviceWorker"in navigator){const e=()=>{navigator.serviceWorker.register("./sw.js",{scope:"./"}).catch(t=>{console.warn("[PWA] Service Worker registration failed:",t)})};document.readyState==="complete"?e():window.addEventListener("load",e,{once:!0})}})})();
