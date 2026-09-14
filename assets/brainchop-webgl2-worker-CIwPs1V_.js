var mq=Object.defineProperty;var gw=Object.getOwnPropertySymbols;var gq=Object.prototype.hasOwnProperty,xq=Object.prototype.propertyIsEnumerable;var pn=Math.pow,xw=(_n,nn,Fe)=>nn in _n?mq(_n,nn,{enumerable:!0,configurable:!0,writable:!0,value:Fe}):_n[nn]=Fe,Sr=(_n,nn)=>{for(var Fe in nn||(nn={}))gq.call(nn,Fe)&&xw(_n,Fe,nn[Fe]);if(gw)for(var Fe of gw(nn))xq.call(nn,Fe)&&xw(_n,Fe,nn[Fe]);return _n};var J=(_n,nn,Fe)=>new Promise(($a,Po)=>{var ze=On=>{try{eo(Fe.next(On))}catch(Kn){Po(Kn)}},nu=On=>{try{eo(Fe.throw(On))}catch(Kn){Po(Kn)}},eo=On=>On.done?$a(On.value):Promise.resolve(On.value).then(ze,nu);eo((Fe=Fe.apply(_n,nn)).next())});(function(){"use strict";function _n(n,t){return t.forEach(function(e){e&&typeof e!="string"&&!Array.isArray(e)&&Object.keys(e).forEach(function(s){if(s!=="default"&&!(s in n)){var o=Object.getOwnPropertyDescriptor(e,s);Object.defineProperty(n,s,o.get?o:{enumerable:!0,get:function(){return e[s]}})}})}),Object.freeze(n)}const nn=1e-7,Fe=1e-4;class $a{constructor(t,e){this.backend=t,this.dataMover=e,this.data=new WeakMap,this.dataIdsCount=0}get(t){return this.data.has(t)||this.dataMover.moveData(this.backend,t),this.data.get(t)}set(t,e){this.dataIdsCount++,this.data.set(t,e)}has(t){return this.data.has(t)}delete(t){return this.dataIdsCount--,this.data.delete(t)}numDataIds(){return this.dataIdsCount}}class Po{refCount(t){return ze("refCount")}incRef(t){return ze("incRef")}timerAvailable(){return!0}time(t){return ze("time")}read(t){return ze("read")}readSync(t){return ze("readSync")}readToGPU(t,e){return ze("readToGPU")}numDataIds(){return ze("numDataIds")}disposeData(t,e){return ze("disposeData")}write(t,e,s){return ze("write")}move(t,e,s,o,r){return ze("move")}createTensorFromGPUData(t,e,s){return ze("createTensorFromGPUData")}memory(){return ze("memory")}floatPrecision(){return ze("floatPrecision")}epsilon(){return this.floatPrecision()===32?nn:Fe}dispose(){return ze("dispose")}}function ze(n){throw new Error(`'${n}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}function nu(n){let t=n.length,e=0;for(;t>0;)e=Math.random()*t|0,t--,Kn(n,t,e)}function eo(n,t,e){return Math.max(n,Math.min(t,e))}function On(n){return n%2===0?n:n+1}function Kn(n,t,e){const s=n[t];n[t]=n[e],n[e]=s}function bw(n){let t=0;for(let e=0;e<n.length;e++)t+=n[e];return t}function T(n,t){if(!n)throw new Error(typeof t=="string"?t:t())}function su(n,t,e=""){T(Pt(n,t),()=>e+` Shapes ${n} and ${t} must match`)}function zp(n){T(n!=null,()=>"The input to the tensor constructor must be a non-null value.")}function K(n){if(n.length===0)return 1;let t=n[0];for(let e=1;e<n.length;e++)t*=n[e];return t}function Pt(n,t){if(n===t)return!0;if(n==null||t==null||n.length!==t.length)return!1;for(let e=0;e<n.length;e++)if(n[e]!==t[e])return!1;return!0}function Bo(n){return n%1===0}function ou(n){const t=Math.ceil(Math.sqrt(n));return[t,Math.ceil(n/t)]}function zo(n,t){return t<=n.length?n:n+" ".repeat(t-n.length)}function Vp(n,t=o=>0,e,s){return new Promise((o,r)=>{let i=0;const a=()=>{if(n()){o();return}i++;const l=t(i);if(e!=null&&i>=e){r();return}s!=null?s(a,l):setTimeout(a,l)};a()})}function Wp(n,t){let e=1,s=-1;for(let r=0;r<n.length;++r)if(n[r]>=0)e*=n[r];else if(n[r]===-1){if(s!==-1)throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${s} and dim ${r}`);s=r}else if(n[r]<0)throw Error(`Shapes can not be < 0. Found ${n[r]} at dim ${r}`);if(s===-1){if(t>0&&t!==e)throw Error(`Size(${t}) must match the product of shape ${n}`);return n}if(e===0)throw Error(`Cannot infer the missing size in [${n}] when there are 0 elements`);if(t%e!==0)throw Error(`The implicit shape can't be a fractional number. Got ${t} / ${e}`);const o=n.slice();return o[s]=t/e,o}function vt(n,t){const e=t.length;return n=n==null?t.map((s,o)=>o):[].concat(n),T(n.every(s=>s>=-e&&s<e),()=>`All values in axis param must be in range [-${e}, ${e}) but got axis ${n}`),T(n.every(s=>Bo(s)),()=>`All values in axis param must be integers but got axis ${n}`),n.map(s=>s<0?e+s:s)}function Ts(n,t){const e=[],s=[],o=t!=null&&Array.isArray(t)&&t.length===0,r=t==null||o?null:vt(t,n).sort();let i=0;for(let a=0;a<n.length;++a){if(r!=null){if(r[i]===a&&n[a]!==1)throw new Error(`Can't squeeze axis ${a} since its dim '${n[a]}' is not 1`);(r[i]==null||r[i]>a)&&n[a]===1&&(e.push(n[a]),s.push(a)),r[i]<=a&&i++}n[a]!==1&&(e.push(n[a]),s.push(a))}return{newShape:e,keptDims:s}}function _e(n,t){return oe(n,t)}function oe(n,t){let e=null;if(n==null||n==="float32")e=new Float32Array(t);else if(n==="int32")e=new Int32Array(t);else if(n==="bool")e=new Uint8Array(t);else if(n==="string")e=new Array(t);else throw new Error(`Unknown data type ${n}`);return e}function yw(n,t){for(let e=0;e<n.length;e++){const s=n[e];if(isNaN(s)||!isFinite(s))throw Error(`A tensor of type ${t} being uploaded contains ${s}.`)}}function ww(n){return n==="bool"||n==="complex64"||n==="float32"||n==="int32"||n==="string"}function Up(n,t){return!(t==="complex64"||t==="float32"&&n!=="complex64"||t==="int32"&&n!=="float32"&&n!=="complex64"||t==="bool"&&n==="bool")}function Ia(n){if(n==="float32"||n==="int32")return 4;if(n==="complex64")return 8;if(n==="bool")return 1;throw new Error(`Unknown dtype ${n}`)}function Cw(n){if(n==null)return 0;let t=0;return n.forEach(e=>t+=e.length),t}function Nr(n){return typeof n=="string"||n instanceof String}function $w(n){return typeof n=="boolean"}function ru(n){return typeof n=="number"}function Vo(n){return Array.isArray(n)?Vo(n[0]):n instanceof Float32Array?"float32":n instanceof Int32Array||n instanceof Uint8Array||n instanceof Uint8ClampedArray?"int32":ru(n)?"float32":Nr(n)?"string":$w(n)?"bool":"float32"}function iu(n){return!!(n&&n.constructor&&n.call&&n.apply)}function au(n,t){for(let e=t;e<n;++e)if(n%e===0)return e;return n}function ft(n){const t=n.length;if(t<2)return[];const e=new Array(t-1);e[t-2]=n[t-1];for(let s=t-3;s>=0;--s)e[s]=e[s+1]*n[s+1];return e}function Gp(n,t,e,s=!1){const o=new Array;if(t.length===1){const r=t[0]*(s?2:1);for(let i=0;i<r;i++)o[i]=e[n+i]}else{const r=t[0],i=t.slice(1),a=i.reduce((l,c)=>l*c)*(s?2:1);for(let l=0;l<r;l++)o[l]=Gp(n+l*a,i,e,s)}return o}function Mn(n,t,e=!1){if(n.length===0)return t[0];const s=n.reduce((o,r)=>o*r)*(e?2:1);if(s===0)return[];if(s!==t.length)throw new Error(`[${n}] does not match the input size ${t.length}${e?" for a complex tensor":""}.`);return Gp(0,n,t,e)}function Iw(n,t){if(Array.isArray(n))return n;if(t==="float32")return n instanceof Float32Array?n:new Float32Array(n);if(t==="int32")return n instanceof Int32Array?n:new Int32Array(n);if(t==="bool"||t==="string")return Uint8Array.from(new Int32Array(n));throw new Error(`Unknown dtype ${t}`)}function lu(n,t){const e=Oe(n,t);for(let s=0;s<e.length;s++)e[s]=1;return e}function Oe(n,t){if(t==null||t==="float32"||t==="complex64")return new Float32Array(n);if(t==="int32")return new Int32Array(n);if(t==="bool")return new Uint8Array(n);throw new Error(`Unknown data type ${t}`)}function Hp(n,t){const e=n.reduce((s,o)=>s*o,1);if(t==null||t==="float32")return Mn(n,new Float32Array(e));if(t==="int32")return Mn(n,new Int32Array(e));if(t==="bool")return Mn(n,new Uint8Array(e));throw new Error(`Unknown data type ${t}`)}function ds(n){n.forEach(t=>{T(Number.isInteger(t)&&t>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${n}].`)})}function jn(n,t,e){if(t===0)return 0;if(t===1)return n[0];let s=n[n.length-1];for(let o=0;o<n.length-1;++o)s+=e[o]*n[o];return s}function Wo(n,t,e){if(t===0)return[];if(t===1)return[n];const s=new Array(t);for(let o=0;o<s.length-1;++o)s[o]=Math.floor(n/e[o]),n-=s[o]*e[o];return s[s.length-1]=n,s}function cu(n){return n&&n.then&&typeof n.then=="function"}const qp="tfjsflags";class vw{constructor(t){this.global=t,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=kw,this.populateURLFlags()}setPlatform(t,e){this.platform!=null&&(q().getBool("IS_TEST")||q().getBool("PROD")||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${t}.`)),this.platformName=t,this.platform=e}registerFlag(t,e,s){if(this.flagRegistry[t]={evaluationFn:e,setHook:s},this.urlFlags[t]!=null){const o=this.urlFlags[t];q().getBool("IS_TEST")||q().getBool("PROD")||console.warn(`Setting feature override from URL ${t}: ${o}.`),this.set(t,o)}}getAsync(t){return J(this,null,function*(){return t in this.flags?this.flags[t]:(this.flags[t]=yield this.evaluateFlag(t),this.flags[t])})}get(t){if(t in this.flags)return this.flags[t];const e=this.evaluateFlag(t);if(cu(e))throw new Error(`Flag ${t} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[t]=e,this.flags[t]}getNumber(t){return this.get(t)}getBool(t){return this.get(t)}getString(t){return this.get(t)}getFlags(){return this.flags}get features(){return this.flags}set(t,e){if(this.flagRegistry[t]==null)throw new Error(`Cannot set flag ${t} as it has not been registered.`);this.flags[t]=e,this.flagRegistry[t].setHook!=null&&this.flagRegistry[t].setHook(e)}evaluateFlag(t){if(this.flagRegistry[t]==null)throw new Error(`Cannot evaluate flag '${t}': no evaluation function found.`);return this.flagRegistry[t].evaluationFn()}setFlags(t){this.flags=Object.assign({},t)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(typeof this.global=="undefined"||typeof this.global.location=="undefined"||typeof this.global.location.search=="undefined")return;const t=this.getQueryParams(this.global.location.search);qp in t&&t[qp].split(",").forEach(s=>{const[o,r]=s.split(":");this.urlFlags[o]=Nw(o,r)})}}function kw(n){const t={};return n.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(e,...s)=>(Sw(t,s[0],s[1]),s.join("="))),t}function Sw(n,t,e){n[decodeURIComponent(t)]=decodeURIComponent(e||"")}function Nw(n,t){const e=t.toLowerCase();return e==="true"||e==="false"?e==="true":`${+e}`===e?+e:t}function q(){return Xp}let Xp=null;function Tw(n){Xp=n}let uu;function Kp(){if(uu==null){let n;if(typeof window!="undefined")n=window;else if(typeof global!="undefined")n=global;else if(typeof process!="undefined")n=process;else if(typeof self!="undefined")n=self;else throw new Error("Could not find a global object");uu=n}return uu}function Ew(){const n=Kp();return n._tfGlobals==null&&(n._tfGlobals=new Map),n._tfGlobals}function hu(n,t){const e=Ew();if(e.has(n))return e.get(n);{const s=t();return e.set(n,s),e.get(n)}}const va="Abs",Tr="Acos",Er="Acosh",Uo="Add",du="AddN",pu="All",fu="Any",ka="ArgMax",Sa="ArgMin",Rr="Asin",Ar="Asinh",Dr="Atan",Fr="Atanh",_r="Atan2",Na="AvgPool",mu="AvgPoolGrad",Ta="AvgPool3D",gu="AvgPool3DGrad",Ea="BatchMatMul",Ra="BatchToSpaceND",xu="Bincount",bu="BitwiseAnd",Rw="BroadcastTo",jp="BroadcastArgs",Or="Cast",Mr="Ceil",Lr="ClipByValue",yu="Complex",Aa="ComplexAbs",Da="Concat",Fa="Conv2D",wu="Conv2DBackpropFilter",_a="Conv2DBackpropInput",Oa="Conv3D",Cu="Conv3DBackpropFilterV2",$u="Conv3DBackpropInputV2",Pr="Cos",Br="Cosh",Iu="Cumprod",Ma="Cumsum",vu="CropAndResize",ku="DenseBincount",Su="DepthToSpace",La="DepthwiseConv2dNative",Nu="DepthwiseConv2dNativeBackpropFilter",Tu="DepthwiseConv2dNativeBackpropInput",Yp="Diag",Pa="Dilation2D",Eu="Dilation2DBackpropInput",Ru="Dilation2DBackpropFilter",Aw="Draw",zr="RealDiv",Au="Einsum",Vr="Elu",Du="EluGrad",Wr="Erf",Ba="Equal",Ur="Exp",za="ExpandDims",Gr="Expm1",Fu="FFT",_u="Fill",Ou="FlipLeftRight",Hr="Floor",qr="FloorDiv",Va="FusedBatchNorm",Wa="GatherV2",Zp="GatherNd",Ua="Greater",Xr="GreaterEqual",Kr="Identity",Mu="IFFT",Lu="Imag",jr="IsFinite",Yr="IsInf",Zr="IsNan",Ga="LeakyRelu",Ha="Less",qa="LessEqual",Qp="LinSpace",Qr="Log",Jr="Log1p",Xa="LogicalAnd",Ka="LogicalNot",ja="LogicalOr",Dw="LogSoftmax",Ya="LRN",Pu="LRNGrad",Za="Max",ti="Maximum",Qa="MaxPool",Bu="MaxPoolGrad",Ja="MaxPool3D",zu="MaxPool3DGrad",Jp="MaxPoolWithArgmax",tl="Mean",el="Min",ei="Minimum",nl="MirrorPad",ni="Mod",tf="Multinomial",si="Multiply",sl="Neg",ol="NotEqual",Vu="NonMaxSuppressionV3",Wu="NonMaxSuppressionV4",Uu="NonMaxSuppressionV5",rl="OnesLike",il="OneHot",al="Pack",ll="PadV2",oi="Pow",cl="Prelu",ul="Prod",ef="RaggedGather",nf="RaggedRange",sf="RaggedTensorToTensor",Gu="Range",Hu="Real",ri="Reciprocal",ii="Relu",hl="Reshape",dl="ResizeNearestNeighbor",qu="ResizeNearestNeighborGrad",pl="ResizeBilinear",Xu="ResizeBilinearGrad",ai="Relu6",fl="Reverse",li="Round",ci="Rsqrt",of="ScatterNd",rf="TensorScatterUpdate",af="SearchSorted",ml="Select",ui="Selu",gl="Slice",hi="Sin",di="Sinh",pi="Sign",fi="Sigmoid",mi="Softplus",gi="Sqrt",xl="Sum",bl="SpaceToBatchND",yl="SplitV",wl="Softmax",lf="SparseFillEmptyRows",cf="SparseReshape",uf="SparseSegmentMean",hf="SparseSegmentSum",df="SparseToDense",xi="SquaredDifference",Ku="Square",ju="StaticRegexReplace",Yu="StridedSlice",pf="StringNGrams",ff="StringSplit",mf="StringToHashBucketFast",bi="Sub",yi="Tan",wi="Tanh",Ci="Tile",Zu="TopK",Qu="Transform",Go="Transpose",Ju="Unique",Cl="Unpack",$l="UnsortedSegmentSum",Il="ZerosLike",$i="Step",Fw="FromPixels",th="RotateWithOffset",vl="_FusedMatMul",kl="FusedConv2D",gf="FusedDepthwiseConv2D";function fn(...n){q().getBool("IS_TEST")||q().getBool("PROD")||console.warn(...n)}const Sl=hu("kernelRegistry",()=>new Map),eh=hu("gradRegistry",()=>new Map);function xf(n,t){const e=Cf(n,t);return Sl.get(e)}function bf(n){return eh.get(n)}function yf(n){const t=Sl.entries(),e=[];for(;;){const{done:s,value:o}=t.next();if(s)break;const[r,i]=o,[a]=r.split("_");a===n&&e.push(i)}return e}function wf(n){const{kernelName:t,backendName:e}=n,s=Cf(t,e);Sl.has(s)&&fn(`The kernel '${t}' for backend '${e}' is already registered`),Sl.set(s,n)}function _w(n){const{kernelName:t}=n;eh.has(t)&&q().getBool("DEBUG")&&fn(`Overriding the gradient for '${t}'`),eh.set(t,n)}function Cf(n,t){return`${t}_${n}`}function $f(n){return n instanceof Float32Array||n instanceof Int32Array||n instanceof Uint8Array||n instanceof Uint8ClampedArray}function Ow(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function Mw(n){if(Object.prototype.hasOwnProperty.call(n,"__esModule"))return n;var t=n.default;if(typeof t=="function"){var e=function s(){var o=!1;try{o=this instanceof s}catch(r){}return o?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};e.prototype=t.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(n).forEach(function(s){var o=Object.getOwnPropertyDescriptor(n,s);Object.defineProperty(e,s,o.get?o:{enumerable:!0,get:function(){return n[s]}})}),e}var nh,If;function Lw(){if(If)return nh;If=1,nh=t;var n=null;try{n=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch(k){}function t(k,$,E){this.low=k|0,this.high=$|0,this.unsigned=!!E}t.prototype.__isLong__,Object.defineProperty(t.prototype,"__isLong__",{value:!0});function e(k){return(k&&k.__isLong__)===!0}t.isLong=e;var s={},o={};function r(k,$){var E,R,A;return $?(k>>>=0,(A=0<=k&&k<256)&&(R=o[k],R)?R:(E=a(k,(k|0)<0?-1:0,!0),A&&(o[k]=E),E)):(k|=0,(A=-128<=k&&k<128)&&(R=s[k],R)?R:(E=a(k,k<0?-1:0,!1),A&&(s[k]=E),E))}t.fromInt=r;function i(k,$){if(isNaN(k))return $?b:x;if($){if(k<0)return b;if(k>=f)return v}else{if(k<=-m)return N;if(k+1>=m)return I}return k<0?i(-k,$).neg():a(k%p|0,k/p|0,$)}t.fromNumber=i;function a(k,$,E){return new t(k,$,E)}t.fromBits=a;var l=Math.pow;function c(k,$,E){if(k.length===0)throw Error("empty string");if(k==="NaN"||k==="Infinity"||k==="+Infinity"||k==="-Infinity")return x;if(typeof $=="number"?(E=$,$=!1):$=!!$,E=E||10,E<2||36<E)throw RangeError("radix");var R;if((R=k.indexOf("-"))>0)throw Error("interior hyphen");if(R===0)return c(k.substring(1),$,E).neg();for(var A=i(l(E,8)),F=x,_=0;_<k.length;_+=8){var B=Math.min(8,k.length-_),O=parseInt(k.substring(_,_+B),E);if(B<8){var V=i(l(E,B));F=F.mul(V).add(i(O))}else F=F.mul(A),F=F.add(i(O))}return F.unsigned=$,F}t.fromString=c;function u(k,$){return typeof k=="number"?i(k,$):typeof k=="string"?c(k,$):a(k.low,k.high,typeof $=="boolean"?$:k.unsigned)}t.fromValue=u;var h=65536,d=1<<24,p=h*h,f=p*p,m=f/2,g=r(d),x=r(0);t.ZERO=x;var b=r(0,!0);t.UZERO=b;var w=r(1);t.ONE=w;var y=r(1,!0);t.UONE=y;var C=r(-1);t.NEG_ONE=C;var I=a(-1,2147483647,!1);t.MAX_VALUE=I;var v=a(-1,-1,!0);t.MAX_UNSIGNED_VALUE=v;var N=a(0,-2147483648,!1);t.MIN_VALUE=N;var S=t.prototype;return S.toInt=function(){return this.unsigned?this.low>>>0:this.low},S.toNumber=function(){return this.unsigned?(this.high>>>0)*p+(this.low>>>0):this.high*p+(this.low>>>0)},S.toString=function($){if($=$||10,$<2||36<$)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative())if(this.eq(N)){var E=i($),R=this.div(E),A=R.mul(E).sub(this);return R.toString($)+A.toInt().toString($)}else return"-"+this.neg().toString($);for(var F=i(l($,6),this.unsigned),_=this,B="";;){var O=_.div(F),V=_.sub(O.mul(F)).toInt()>>>0,G=V.toString($);if(_=O,_.isZero())return G+B;for(;G.length<6;)G="0"+G;B=""+G+B}},S.getHighBits=function(){return this.high},S.getHighBitsUnsigned=function(){return this.high>>>0},S.getLowBits=function(){return this.low},S.getLowBitsUnsigned=function(){return this.low>>>0},S.getNumBitsAbs=function(){if(this.isNegative())return this.eq(N)?64:this.neg().getNumBitsAbs();for(var $=this.high!=0?this.high:this.low,E=31;E>0&&($&1<<E)==0;E--);return this.high!=0?E+33:E+1},S.isZero=function(){return this.high===0&&this.low===0},S.eqz=S.isZero,S.isNegative=function(){return!this.unsigned&&this.high<0},S.isPositive=function(){return this.unsigned||this.high>=0},S.isOdd=function(){return(this.low&1)===1},S.isEven=function(){return(this.low&1)===0},S.equals=function($){return e($)||($=u($)),this.unsigned!==$.unsigned&&this.high>>>31===1&&$.high>>>31===1?!1:this.high===$.high&&this.low===$.low},S.eq=S.equals,S.notEquals=function($){return!this.eq($)},S.neq=S.notEquals,S.ne=S.notEquals,S.lessThan=function($){return this.comp($)<0},S.lt=S.lessThan,S.lessThanOrEqual=function($){return this.comp($)<=0},S.lte=S.lessThanOrEqual,S.le=S.lessThanOrEqual,S.greaterThan=function($){return this.comp($)>0},S.gt=S.greaterThan,S.greaterThanOrEqual=function($){return this.comp($)>=0},S.gte=S.greaterThanOrEqual,S.ge=S.greaterThanOrEqual,S.compare=function($){if(e($)||($=u($)),this.eq($))return 0;var E=this.isNegative(),R=$.isNegative();return E&&!R?-1:!E&&R?1:this.unsigned?$.high>>>0>this.high>>>0||$.high===this.high&&$.low>>>0>this.low>>>0?-1:1:this.sub($).isNegative()?-1:1},S.comp=S.compare,S.negate=function(){return!this.unsigned&&this.eq(N)?N:this.not().add(w)},S.neg=S.negate,S.add=function($){e($)||($=u($));var E=this.high>>>16,R=this.high&65535,A=this.low>>>16,F=this.low&65535,_=$.high>>>16,B=$.high&65535,O=$.low>>>16,V=$.low&65535,G=0,H=0,j=0,Y=0;return Y+=F+V,j+=Y>>>16,Y&=65535,j+=A+O,H+=j>>>16,j&=65535,H+=R+B,G+=H>>>16,H&=65535,G+=E+_,G&=65535,a(j<<16|Y,G<<16|H,this.unsigned)},S.subtract=function($){return e($)||($=u($)),this.add($.neg())},S.sub=S.subtract,S.multiply=function($){if(this.isZero())return x;if(e($)||($=u($)),n){var E=n.mul(this.low,this.high,$.low,$.high);return a(E,n.get_high(),this.unsigned)}if($.isZero())return x;if(this.eq(N))return $.isOdd()?N:x;if($.eq(N))return this.isOdd()?N:x;if(this.isNegative())return $.isNegative()?this.neg().mul($.neg()):this.neg().mul($).neg();if($.isNegative())return this.mul($.neg()).neg();if(this.lt(g)&&$.lt(g))return i(this.toNumber()*$.toNumber(),this.unsigned);var R=this.high>>>16,A=this.high&65535,F=this.low>>>16,_=this.low&65535,B=$.high>>>16,O=$.high&65535,V=$.low>>>16,G=$.low&65535,H=0,j=0,Y=0,et=0;return et+=_*G,Y+=et>>>16,et&=65535,Y+=F*G,j+=Y>>>16,Y&=65535,Y+=_*V,j+=Y>>>16,Y&=65535,j+=A*G,H+=j>>>16,j&=65535,j+=F*V,H+=j>>>16,j&=65535,j+=_*O,H+=j>>>16,j&=65535,H+=R*G+A*V+F*O+_*B,H&=65535,a(Y<<16|et,H<<16|j,this.unsigned)},S.mul=S.multiply,S.divide=function($){if(e($)||($=u($)),$.isZero())throw Error("division by zero");if(n){if(!this.unsigned&&this.high===-2147483648&&$.low===-1&&$.high===-1)return this;var E=(this.unsigned?n.div_u:n.div_s)(this.low,this.high,$.low,$.high);return a(E,n.get_high(),this.unsigned)}if(this.isZero())return this.unsigned?b:x;var R,A,F;if(this.unsigned){if($.unsigned||($=$.toUnsigned()),$.gt(this))return b;if($.gt(this.shru(1)))return y;F=b}else{if(this.eq(N)){if($.eq(w)||$.eq(C))return N;if($.eq(N))return w;var _=this.shr(1);return R=_.div($).shl(1),R.eq(x)?$.isNegative()?w:C:(A=this.sub($.mul(R)),F=R.add(A.div($)),F)}else if($.eq(N))return this.unsigned?b:x;if(this.isNegative())return $.isNegative()?this.neg().div($.neg()):this.neg().div($).neg();if($.isNegative())return this.div($.neg()).neg();F=x}for(A=this;A.gte($);){R=Math.max(1,Math.floor(A.toNumber()/$.toNumber()));for(var B=Math.ceil(Math.log(R)/Math.LN2),O=B<=48?1:l(2,B-48),V=i(R),G=V.mul($);G.isNegative()||G.gt(A);)R-=O,V=i(R,this.unsigned),G=V.mul($);V.isZero()&&(V=w),F=F.add(V),A=A.sub(G)}return F},S.div=S.divide,S.modulo=function($){if(e($)||($=u($)),n){var E=(this.unsigned?n.rem_u:n.rem_s)(this.low,this.high,$.low,$.high);return a(E,n.get_high(),this.unsigned)}return this.sub(this.div($).mul($))},S.mod=S.modulo,S.rem=S.modulo,S.not=function(){return a(~this.low,~this.high,this.unsigned)},S.and=function($){return e($)||($=u($)),a(this.low&$.low,this.high&$.high,this.unsigned)},S.or=function($){return e($)||($=u($)),a(this.low|$.low,this.high|$.high,this.unsigned)},S.xor=function($){return e($)||($=u($)),a(this.low^$.low,this.high^$.high,this.unsigned)},S.shiftLeft=function($){return e($)&&($=$.toInt()),($&=63)===0?this:$<32?a(this.low<<$,this.high<<$|this.low>>>32-$,this.unsigned):a(0,this.low<<$-32,this.unsigned)},S.shl=S.shiftLeft,S.shiftRight=function($){return e($)&&($=$.toInt()),($&=63)===0?this:$<32?a(this.low>>>$|this.high<<32-$,this.high>>$,this.unsigned):a(this.high>>$-32,this.high>=0?0:-1,this.unsigned)},S.shr=S.shiftRight,S.shiftRightUnsigned=function($){if(e($)&&($=$.toInt()),$&=63,$===0)return this;var E=this.high;if($<32){var R=this.low;return a(R>>>$|E<<32-$,E>>>$,this.unsigned)}else return $===32?a(E,0,this.unsigned):a(E>>>$-32,0,this.unsigned)},S.shru=S.shiftRightUnsigned,S.shr_u=S.shiftRightUnsigned,S.toSigned=function(){return this.unsigned?a(this.low,this.high,!1):this},S.toUnsigned=function(){return this.unsigned?this:a(this.low,this.high,!0)},S.toBytes=function($){return $?this.toBytesLE():this.toBytesBE()},S.toBytesLE=function(){var $=this.high,E=this.low;return[E&255,E>>>8&255,E>>>16&255,E>>>24,$&255,$>>>8&255,$>>>16&255,$>>>24]},S.toBytesBE=function(){var $=this.high,E=this.low;return[$>>>24,$>>>16&255,$>>>8&255,$&255,E>>>24,E>>>16&255,E>>>8&255,E&255]},t.fromBytes=function($,E,R){return R?t.fromBytesLE($,E):t.fromBytesBE($,E)},t.fromBytesLE=function($,E){return new t($[0]|$[1]<<8|$[2]<<16|$[3]<<24,$[4]|$[5]<<8|$[6]<<16|$[7]<<24,E)},t.fromBytesBE=function($,E){return new t($[4]<<24|$[5]<<16|$[6]<<8|$[7],$[0]<<24|$[1]<<16|$[2]<<8|$[3],E)},nh}var vf=Lw(),kf=Ow(vf),Pw=_n({__proto__:null,default:kf},[vf]);const no=kf||Pw;function Nl(n){return no.fromString(n,!0,16)}const Sf=Nl("c3a5c85c97cb3127"),so=Nl("b492b66fbe98f273"),Ve=Nl("9ae16a3b2f90404f");function sh(n){return n.xor(n.shru(47))}function Nf(n,t,e){const s=n.slice(t,t+e);return no.fromBytes(Array.from(s),!0,!0)}function qt(n,t){return Nf(n,t,8)}function Tf(n,t){return Nf(n,t,4)}function we(n,t){return t===0?n:n.shru(t).or(n.shl(64-t))}function Es(n,t,e=Nl("9ddfea08eb382d69")){let s=n.xor(t).mul(e);s=s.xor(s.shru(47));let o=t.xor(s).mul(e);return o=o.xor(o.shru(47)),o=o.mul(e),o}function Bw(n,t,e,s,o,r){o=o.add(n),r=we(r.add(o).add(s),21);const i=o;return o=o.add(t),o=o.add(e),r=r.add(we(o,44)),[o.add(s),r.add(i)]}function Tl(n,t,e,s){return Bw(qt(n,t),qt(n,t+8),qt(n,t+16),qt(n,t+24),e,s)}function zw(n,t=n.length){if(t>=8){const e=Ve.add(t*2),s=qt(n,0).add(Ve),o=qt(n,t-8),r=we(o,37).mul(e).add(s),i=we(s,25).add(o).mul(e);return Es(r,i,e)}if(t>=4){const e=Ve.add(t*2),s=Tf(n,0);return Es(s.shl(3).add(t),Tf(n,t-4),e)}if(t>0){const e=n[0],s=n[t>>1],o=n[t-1],r=e+(s<<8),i=t+(o<<2);return sh(Ve.mul(r).xor(Sf.mul(i))).mul(Ve)}return Ve}function Vw(n,t=n.length){const e=Ve.add(t*2),s=qt(n,0).mul(so),o=qt(n,8),r=qt(n,t-8).mul(e),i=qt(n,t-16).mul(Ve);return Es(we(s.add(o),43).add(we(r,30)).add(i),s.add(we(o.add(Ve),18)).add(r),e)}function Ww(n,t=n.length){const e=Ve.add(t*2),s=qt(n,0).mul(Ve),o=qt(n,8),r=qt(n,t-8).mul(e),i=qt(n,t-16).mul(Ve),a=we(s.add(o),43).add(we(r,30)).add(i),l=Es(a,s.add(we(o.add(Ve),18)).add(r),e),c=qt(n,16).mul(e),u=qt(n,24),h=a.add(qt(n,t-32)).mul(e),d=l.add(qt(n,t-24)).mul(e);return Es(we(c.add(u),43).add(we(h,30)).add(d),c.add(we(u.add(s),18)).add(h),e)}function Uw(n,t=n.length){const e=no.fromNumber(81,!0);if(t<=32)return t<=16?zw(n,t):Vw(n,t);if(t<=64)return Ww(n,t);let s=e,o=e.mul(so).add(113),r=sh(o.mul(Ve).add(113)).mul(Ve),i=[no.UZERO,no.UZERO],a=[no.UZERO,no.UZERO];s=s.mul(Ve).add(qt(n,0));let l=0;const c=(t-1>>6)*64,u=c+(t-1&63)-63;do s=we(s.add(o).add(i[0]).add(qt(n,l+8)),37).mul(so),o=we(o.add(i[1]).add(qt(n,l+48)),42).mul(so),s=s.xor(a[1]),o=o.add(i[0]).add(qt(n,l+40)),r=we(r.add(a[0]),33).mul(so),i=Tl(n,l,i[1].mul(so),s.add(a[0])),a=Tl(n,l+32,r.add(a[1]),o.add(qt(n,l+16))),[r,s]=[s,r],l+=64;while(l!==c);const h=so.add(r.and(255).shl(1));return l=u,a[0]=a[0].add(t-1&63),i[0]=i[0].add(a[0]),a[0]=a[0].add(i[0]),s=we(s.add(o).add(i[0]).add(qt(n,l+8)),37).mul(h),o=we(o.add(i[1]).add(qt(n,l+48)),42).mul(h),s=s.xor(a[1].mul(9)),o=o.add(i[0].mul(9).add(qt(n,l+40))),r=we(r.add(a[0]),33).mul(h),i=Tl(n,l,i[1].mul(h),s.add(a[0])),a=Tl(n,l+32,r.add(a[1]),o.add(qt(n,l+16))),[r,s]=[s,r],Es(Es(i[0],a[0],h).add(sh(o).mul(Sf)).add(r),Es(i[1],a[1],h).add(s),h)}function Rs(n,t){return t==="string"?As(n):oo([n],t)}function Gw(n,t){return n instanceof Float32Array&&t==="float32"||n instanceof Int32Array&&t==="int32"||n instanceof Uint8Array&&t==="bool"}function oo(n,t){if(t==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(n)&&(n=ro(n)),q().getBool("DEBUG")&&yw(n,t),Gw(n,t))return n;if(t==null||t==="float32"||t==="complex64")return new Float32Array(n);if(t==="int32")return new Int32Array(n);if(t==="bool"){const e=new Uint8Array(n.length);for(let s=0;s<e.length;++s)Math.round(n[s])!==0&&(e[s]=1);return e}else throw new Error(`Unknown data type ${t}`)}function Ke(){return q().platform.now()}function As(n,t="utf-8"){return t=t||"utf-8",q().platform.encode(n,t)}function Ds(n,t="utf-8"){return t=t||"utf-8",q().platform.decode(n,t)}function $n(n){return q().platform.isTypedArray!=null?q().platform.isTypedArray(n):$f(n)}function ro(n,t=[],e=!1){if(t==null&&(t=[]),typeof n=="boolean"||typeof n=="number"||typeof n=="string"||cu(n)||n==null||$n(n)&&e)t.push(n);else if(Array.isArray(n)||$n(n))for(let s=0;s<n.length;++s)ro(n[s],t,e);else{let s=-1;for(const o of Object.keys(n))/^([1-9]+[0-9]*|0)$/.test(o)&&(s=Math.max(s,Number(o)));for(let o=0;o<=s;o++)ro(n[o],t,e)}return t}class Hw{constructor(t,e){this.backendTimer=t,this.logger=e,e==null&&(this.logger=new Xw)}profileKernel(t,e,s){let o;const r=()=>{o=s()};let i;const a=Ke();if(this.backendTimer.timerAvailable())i=this.backendTimer.time(r);else{r();for(const c of o)c.dataSync();i=Promise.resolve({kernelMs:Ke()-a})}if(q().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let c=0;c<o.length;c++){const u=o[c];u.data().then(h=>{qw(h,u.dtype,t)})}return{kernelName:t,outputs:o,inputs:e,timeMs:i.then(c=>c.kernelMs),extraInfo:i.then(c=>c.getExtraProfileInfo!=null?c.getExtraProfileInfo():"")}}logKernelProfile(t){const{kernelName:e,outputs:s,timeMs:o,inputs:r,extraInfo:i}=t;s.forEach(a=>{Promise.all([a.data(),o,i]).then(l=>{this.logger.logKernelProfile(e,a,l[0],l[1],r,l[2])})})}}function qw(n,t,e){if(t!=="float32")return!1;for(let s=0;s<n.length;s++){const o=n[s];if(isNaN(o)||!isFinite(o))return console.warn(`Found ${o} in the result of '${e}'`),!0}return!1}class Xw{logKernelProfile(t,e,s,o,r,i){const a=typeof o=="number"?zo(`${o}ms`,9):o.error,l=zo(t,25),c=e.rank,u=e.size,h=zo(e.shape.toString(),14);let d="";for(const p in r){const f=r[p];if(f!=null){const m=f.shape||e.shape,g=m.length;d+=`${p}: ${g}D ${g>0?m:""} `}}console.log(`%c${l}	%c${a}	%c${c}D ${h}	%c${u}	%c${d}	%c${i}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}}function Kw(n,t,e){const s={},o={};for(let l=0;l<t.length;l++)s[t[l].id]=!0;for(let l=0;l<n.length;l++){const c=n[l],u=c.inputs;for(const h in u){const d=u[h];let p=!1;for(let f=0;f<t.length;f++)if(s[d.id]){c.outputs.forEach(m=>s[m.id]=!0),p=!0,o[c.id]=!0;break}if(p)break}}const r={};r[e.id]=!0;const i={};for(let l=n.length-1;l>=0;l--){const c=n[l],u=c.inputs;for(let h=0;h<c.outputs.length;h++)if(r[c.outputs[h].id]){for(const d in u)r[u[d].id]=!0,i[c.id]=!0;break}}const a=[];for(let l=0;l<n.length;l++){const c=n[l];if(o[c.id]&&i[c.id]){const u={};for(const d in c.inputs){const p=c.inputs[d];s[p.id]&&(u[d]=p)}const h=Object.assign({},c);h.inputs=u,h.outputs=c.outputs,a.push(h)}}return a}function jw(n,t,e,s){for(let o=t.length-1;o>=0;o--){const r=t[o],i=[];if(r.outputs.forEach(l=>{const c=n[l.id];c!=null?i.push(c):i.push(null)}),r.gradient==null)throw new Error(`Cannot compute gradient: gradient function not found for ${r.kernelName}.`);const a=r.gradient(i);for(const l in r.inputs){if(!(l in a))throw new Error(`Cannot backprop through input ${l}. Available gradients found: ${Object.keys(a)}.`);const c=e(()=>a[l]());if(c.dtype!=="float32")throw new Error(`Error in gradient for op ${r.kernelName}. The gradient of input ${l} must have 'float32' dtype, but has '${c.dtype}'`);const u=r.inputs[l];if(!Pt(c.shape,u.shape))throw new Error(`Error in gradient for op ${r.kernelName}. The gradient of input '${l}' has shape '${c.shape}', which does not match the shape of the input '${u.shape}'`);if(n[u.id]==null)n[u.id]=c;else{const h=n[u.id];n[u.id]=s(h,c),h.dispose()}}}}const Ef=20,Ii=3,oh=7;function Yw(n,t,e,s){const o=ft(t),r=Zw(n,t,e,o),i=t.length,a=El(n,t,e,o,r),l=["Tensor"];return s&&(l.push(`  dtype: ${e}`),l.push(`  rank: ${i}`),l.push(`  shape: [${t}]`),l.push("  values:")),l.push(a.map(c=>"    "+c).join(`
`)),l.join(`
`)}function Zw(n,t,e,s){const o=K(t),r=s[s.length-1],i=new Array(r).fill(0),a=t.length,l=e==="complex64"?ki(n):n;if(a>1)for(let c=0;c<o/r;c++){const u=c*r;for(let h=0;h<r;h++)i[h]=Math.max(i[h],vi(l[u+h],0,e).length)}return i}function vi(n,t,e){let s;return Array.isArray(n)?s=`${parseFloat(n[0].toFixed(oh))} + ${parseFloat(n[1].toFixed(oh))}j`:Nr(n)?s=`'${n}'`:e==="bool"?s=Rf(n):s=parseFloat(n.toFixed(oh)).toString(),zo(s,t)}function Rf(n){return n===0?"false":"true"}function El(n,t,e,s,o,r=!0){const i=e==="complex64"?2:1,a=t[0],l=t.length;if(l===0){if(e==="complex64"){const m=ki(n);return[vi(m[0],0,e)]}return e==="bool"?[Rf(n[0])]:[n[0].toString()]}if(l===1){if(a>Ef){const g=Ii*i;let x=Array.from(n.slice(0,g)),b=Array.from(n.slice((a-Ii)*i,a*i));return e==="complex64"&&(x=ki(x),b=ki(b)),["["+x.map((w,y)=>vi(w,o[y],e)).join(", ")+", ..., "+b.map((w,y)=>vi(w,o[a-Ii+y],e)).join(", ")+"]"]}return["["+(e==="complex64"?ki(n):Array.from(n)).map((g,x)=>vi(g,o[x],e)).join(", ")+"]"]}const c=t.slice(1),u=s.slice(1),h=s[0]*i,d=[];if(a>Ef){for(let m=0;m<Ii;m++){const g=m*h,x=g+h;d.push(...El(n.slice(g,x),c,e,u,o,!1))}d.push("...");for(let m=a-Ii;m<a;m++){const g=m*h,x=g+h;d.push(...El(n.slice(g,x),c,e,u,o,m===a-1))}}else for(let m=0;m<a;m++){const g=m*h,x=g+h;d.push(...El(n.slice(g,x),c,e,u,o,m===a-1))}const p=l===2?",":"";d[0]="["+(a>0?d[0]+p:"");for(let m=1;m<d.length-1;m++)d[m]=" "+d[m]+p;let f=`,
`;for(let m=2;m<l;m++)f+=`
`;return d[d.length-1]=" "+d[d.length-1]+"]"+(r?"":f),d}function ki(n){const t=[];for(let e=0;e<n.length;e+=2)t.push([n[e],n[e+1]]);return t}class ke{constructor(t,e,s){if(this.dtype=e,this.shape=t.slice(),this.size=K(t),s!=null){const o=s.length;T(o===this.size,()=>`Length of values '${o}' does not match the size inferred by the shape '${this.size}'.`)}if(e==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=s||oe(e,this.size),this.strides=ft(t)}set(t,...e){e.length===0&&(e=[0]),T(e.length===this.rank,()=>`The number of provided coordinates (${e.length}) must match the rank (${this.rank})`);const s=this.locToIndex(e);this.values[s]=t}get(...t){t.length===0&&(t=[0]);let e=0;for(const o of t){if(o<0||o>=this.shape[e]){const r=`Requested out of range element at ${t}.   Buffer shape=${this.shape}`;throw new Error(r)}e++}let s=t[t.length-1];for(let o=0;o<t.length-1;++o)s+=this.strides[o]*t[o];return this.values[s]}locToIndex(t){if(this.rank===0)return 0;if(this.rank===1)return t[0];let e=t[t.length-1];for(let s=0;s<t.length-1;++s)e+=this.strides[s]*t[s];return e}indexToLoc(t){if(this.rank===0)return[];if(this.rank===1)return[t];const e=new Array(this.shape.length);for(let s=0;s<e.length-1;++s)e[s]=Math.floor(t/this.strides[s]),t-=e[s]*this.strides[s];return e[e.length-1]=t,e}get rank(){return this.shape.length}toTensor(){return Ln().makeTensor(this.values,this.shape,this.dtype)}}let Ln=null,Ho=null;function Qw(n){Ln=n}function Jw(n){Ho=n}class pe{constructor(t,e,s,o){this.kept=!1,this.isDisposedInternal=!1,this.shape=t.slice(),this.dtype=e||"float32",this.size=K(t),this.strides=ft(t),this.dataId=s,this.id=o,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}buffer(){return J(this,null,function*(){const t=yield this.data();return Ho.buffer(this.shape,this.dtype,t)})}bufferSync(){return Ho.buffer(this.shape,this.dtype,this.dataSync())}array(){return J(this,null,function*(){const t=yield this.data();return Mn(this.shape,t,this.dtype==="complex64")})}arraySync(){return Mn(this.shape,this.dataSync(),this.dtype==="complex64")}data(){return J(this,null,function*(){this.throwIfDisposed();const t=Ln().read(this.dataId);if(this.dtype==="string"){const e=yield t;try{return e.map(s=>Ds(s))}catch(s){throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return t})}dataToGPU(t){return this.throwIfDisposed(),Ln().readToGPU(this.dataId,t)}dataSync(){this.throwIfDisposed();const t=Ln().readSync(this.dataId);if(this.dtype==="string")try{return t.map(e=>Ds(e))}catch(e){throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return t}bytes(){return J(this,null,function*(){this.throwIfDisposed();const t=yield Ln().read(this.dataId);return this.dtype==="string"?t:new Uint8Array(t.buffer)})}dispose(){this.isDisposed||(this.kerasMask&&this.kerasMask.dispose(),Ln().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(t=!1){return Ho.print(this,t)}clone(){return this.throwIfDisposed(),Ho.clone(this)}toString(t=!1){const e=this.dataSync();return Yw(e,this.shape,this.dtype,t)}cast(t){return this.throwIfDisposed(),Ho.cast(this,t)}variable(t=!0,e,s){return this.throwIfDisposed(),Ln().makeVariable(this,t,e,s)}}Object.defineProperty(pe,Symbol.hasInstance,{value:n=>!!n&&n.data!=null&&n.dataSync!=null&&n.throwIfDisposed!=null});function X(){return hu("Tensor",()=>pe)}X();class Rl extends pe{constructor(t,e,s,o){super(t.shape,t.dtype,t.dataId,o),this.trainable=e,this.name=s}assign(t){if(t.dtype!==this.dtype)throw new Error(`dtype of the new value (${t.dtype}) and previous value (${this.dtype}) must match`);if(!Pt(t.shape,this.shape))throw new Error(`shape of the new value (${t.shape}) and previous value (${this.shape}) must match`);Ln().disposeTensor(this),this.dataId=t.dataId,Ln().incRef(this,null)}dispose(){Ln().disposeVariable(this),this.isDisposedInternal=!0}}Object.defineProperty(Rl,Symbol.hasInstance,{value:n=>n instanceof pe&&n.assign!=null&&n.assign instanceof Function});var Af;(function(n){n.R0="R0",n.R1="R1",n.R2="R2",n.R3="R3",n.R4="R4",n.R5="R5",n.R6="R6"})(Af||(Af={}));var rh;(function(n){n.float32="float32",n.int32="int32",n.bool="int32",n.complex64="complex64"})(rh||(rh={}));var ih;(function(n){n.float32="float32",n.int32="int32",n.bool="bool",n.complex64="complex64"})(ih||(ih={}));var ah;(function(n){n.float32="float32",n.int32="float32",n.bool="float32",n.complex64="complex64"})(ah||(ah={}));var lh;(function(n){n.float32="complex64",n.int32="complex64",n.bool="complex64",n.complex64="complex64"})(lh||(lh={}));const tC={float32:ah,int32:rh,bool:ih,complex64:lh};function sn(n,t){if(n==="string"||t==="string"){if(n==="string"&&t==="string")return"string";throw new Error(`Can not upcast ${n} with ${t}`)}return tC[n][t]}function ch(n){return sn(n,"int32")}function Df(n){return n!=null&&typeof n=="object"&&"texture"in n&&n.texture instanceof WebGLTexture}function Ff(n){return typeof GPUBuffer!="undefined"&&n!=null&&typeof n=="object"&&"buffer"in n&&n.buffer instanceof GPUBuffer}function re(n,t){if(n.dtype===t.dtype)return[n,t];const e=sn(n.dtype,t.dtype);return[n.cast(e),t.cast(e)]}function _f(n){const t=[];return Of(n,t,new Set),t}function Of(n,t,e){if(n==null)return;if(n instanceof pe){t.push(n);return}if(!eC(n))return;const s=n;for(const o in s){const r=s[o];e.has(r)||(e.add(r),Of(r,t,e))}}function eC(n){return Array.isArray(n)||typeof n=="object"}function uh(n){return n.kernelName!=null}class Mf{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(t=>t.name)))}}}dispose(){for(const t in this.registeredVariables)this.registeredVariables[t].dispose()}}class qo{constructor(t){this.ENV=t,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new Mf}ready(){return J(this,null,function*(){if(this.pendingBackendInit!=null)return this.pendingBackendInit.then(()=>{});if(this.backendInstance!=null)return;const t=this.getSortedBackends();for(let e=0;e<t.length;e++){const s=t[e];if(yield this.initializeBackend(s).success){yield this.setBackend(s);return}}throw new Error("Could not initialize any backends, all backend initializations failed.")})}get backend(){if(this.pendingBackendInit!=null)throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(this.backendInstance==null){const{name:t,asyncInit:e}=this.initializeBackendsAndReturnBest();if(e)throw new Error(`The highest priority backend '${t}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(t)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(t){if(!(t in this.registry))if(t in this.registryFactory){const{asyncInit:e}=this.initializeBackend(t);if(e)return null}else return null;return this.registry[t]}findBackendFactory(t){return t in this.registryFactory?this.registryFactory[t].factory:null}registerBackend(t,e,s=1){return t in this.registryFactory?(fn(`${t} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[t]={factory:e,priority:s},!0)}setBackend(t){return J(this,null,function*(){if(this.registryFactory[t]==null)throw new Error(`Backend name '${t}' not found in registry`);if(this.backendName=t,this.registry[t]==null){this.backendInstance=null;const{success:e,asyncInit:s}=this.initializeBackend(t);if(!(s?yield e:e))return!1}return this.backendInstance=this.registry[t],this.setupRegisteredKernels(),this.profiler=new Hw(this.backendInstance),!0})}setupRegisteredKernels(){yf(this.backendName).forEach(e=>{e.setupFunc!=null&&e.setupFunc(this.backendInstance)})}disposeRegisteredKernels(t){yf(t).forEach(s=>{s.disposeFunc!=null&&s.disposeFunc(this.registry[t])})}initializeBackend(t){const e=this.registryFactory[t];if(e==null)throw new Error(`Cannot initialize backend ${t}, no registration found.`);try{const s=e.factory();if(s&&!(s instanceof Po)&&typeof s.then=="function"){const o=++this.pendingBackendInitId,r=s.then(i=>o<this.pendingBackendInitId?!1:(this.registry[t]=i,this.pendingBackendInit=null,!0)).catch(i=>(o<this.pendingBackendInitId||(this.pendingBackendInit=null,fn(`Initialization of backend ${t} failed`),fn(i.stack||i.message)),!1));return this.pendingBackendInit=r,{success:r,asyncInit:!0}}else return this.registry[t]=s,{success:!0,asyncInit:!1}}catch(s){return fn(`Initialization of backend ${t} failed`),fn(s.stack||s.message),{success:!1,asyncInit:!1}}}removeBackend(t){if(!(t in this.registryFactory))throw new Error(`${t} backend not found in registry`);this.backendName===t&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,t in this.registry&&(this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t]),delete this.registryFactory[t],this.backendName===t&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((t,e)=>this.registryFactory[e].priority-this.registryFactory[t].priority)}initializeBackendsAndReturnBest(){const t=this.getSortedBackends();for(let e=0;e<t.length;e++){const s=t[e],{success:o,asyncInit:r}=this.initializeBackend(s);if(r||o)return{name:s,asyncInit:r}}throw new Error("Could not initialize any backends, all backend initializations failed.")}moveData(t,e){const s=this.state.tensorInfo.get(e),o=s.backend,r=this.readSync(e),i=o.refCount(e);o.disposeData(e,!0),s.backend=t,t.move(e,r,s.shape,s.dtype,i),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(t,e){let s=null;if(e==null){if(typeof t!="function")throw new Error("Please provide a function to tidy()");e=t}else{if(typeof t!="string"&&!(t instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof e!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");s=t}let o;return this.scopedRun(()=>this.startScope(s),()=>this.endScope(o),()=>(o=e(),o instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),o))}scopedRun(t,e,s){t();try{const o=s();return e(),o}catch(o){throw e(),o}}nextTensorId(){return qo.nextTensorId++}nextVariableId(){return qo.nextVariableId++}clone(t){const e=P.runKernel(Kr,{x:t}),s={x:t},o=i=>({x:()=>{const a="float32",l={x:i},c={dtype:a};return P.runKernel(Or,l,c)}}),r=[];return this.addTapeNode(this.state.activeScope.name,s,[e],o,r,{}),e}runKernel(t,e,s){if(this.backendName==null&&this.backend,!(xf(t,this.backendName)!=null))throw new Error(`Kernel '${t}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:t,inputs:e,attrs:s})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(t,e,s){const o=this.backend.numDataIds();let r=0;s.forEach(l=>{r+=l.dtype==="complex64"?3:1});const i=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],a=o-e-r-i;if(a>0)throw new Error(`Backend '${this.backendName}' has an internal memory leak (${a} data ids) after running '${t}'`)}runKernelFunc(t){let e,s=[];const o=this.isTapeOn(),r=this.state.numBytes,i=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);let a;this.backendName==null&&this.backend;let l;const c=uh(t)?t.kernelName:this.state.activeScope!=null?this.state.activeScope.name:"";if(uh(t)){const{kernelName:f,inputs:m,attrs:g}=t;this.backendName==null&&this.backend;const x=xf(f,this.backendName);T(x!=null,()=>`Cannot find registered kernel '${f}' for backend '${this.backendName}'`),a=()=>{const b=this.backend.numDataIds();l=x.kernelFunc({inputs:m,attrs:g,backend:this.backend});const w=Array.isArray(l)?l:[l];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(f,b,w);const y=w.map(C=>C.rank!=null?C:this.makeTensorFromTensorInfo(C));if(o){const C=this.getTensorsForGradient(f,m,y);s=this.saveTensorsForBackwardMode(C)}return y}}else{const{forwardFunc:f}=t,m=g=>{o&&(s=g.map(x=>this.keep(this.clone(x))))};a=()=>{const g=this.backend.numDataIds();l=this.tidy(()=>f(this.backend,m));const x=Array.isArray(l)?l:[l];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(c,g,x),x}}const{inputs:u,attrs:h}=t,d=uh(t)?null:t.backwardsFunc;let p;return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{!this.ENV.getBool("DEBUG")&&!this.state.profiling?e=a():(p=this.profiler.profileKernel(c,u,()=>a()),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(p),e=p.outputs)}),o&&this.addTapeNode(c,u,e,d,s,h),this.state.profiling&&this.state.activeProfile.kernels.push({name:c,bytesAdded:this.state.numBytes-r,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-i,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(u).map(f=>u[f]!=null?u[f].shape:null),outputShapes:e.map(f=>f.shape),kernelTimeMs:p.timeMs,extraInfo:p.extraInfo}),Array.isArray(l)?e:e[0]}saveTensorsForBackwardMode(t){return t.map(s=>this.keep(this.clone(s)))}getTensorsForGradient(t,e,s){const o=bf(t);if(o!=null){const r=o.inputsToSave||[],i=o.outputsToSave||[];let a;o.saveAllInputs?(T(Array.isArray(e),()=>"saveAllInputs is true, expected inputs to be an array."),a=Object.keys(e).map(c=>e[c])):a=r.map(c=>e[c]);const l=s.filter((c,u)=>i[u]);return a.concat(l)}return[]}makeTensor(t,e,s,o){if(t==null)throw new Error("Values passed to engine.makeTensor() are null");s=s||"float32",o=o||this.backend;let r=t;s==="string"&&Nr(t[0])&&(r=t.map(l=>As(l)));const i=o.write(r,e,s),a=new pe(e,s,i,this.nextTensorId());if(this.trackTensor(a,o),s==="string"){const l=this.state.tensorInfo.get(i),c=Cw(r);this.state.numBytes+=c-l.bytes,l.bytes=c}return a}makeTensorFromDataId(t,e,s,o){s=s||"float32";const r={dataId:t,shape:e,dtype:s};return this.makeTensorFromTensorInfo(r,o)}makeTensorFromTensorInfo(t,e){const{dataId:s,shape:o,dtype:r}=t,i=new pe(o,r,s,this.nextTensorId());return this.trackTensor(i,e),i}makeVariable(t,e=!0,s,o){s=s||this.nextVariableId().toString(),o!=null&&o!==t.dtype&&(t=t.cast(o));const r=new Rl(t,e,s,this.nextTensorId());if(this.state.registeredVariables[r.name]!=null)throw new Error(`Variable with name ${r.name} was already registered`);return this.state.registeredVariables[r.name]=r,this.incRef(r,this.backend),r}trackTensor(t,e){this.state.numTensors++,t.dtype==="string"&&this.state.numStringTensors++;let s=0;t.dtype!=="complex64"&&t.dtype!=="string"&&(s=t.size*Ia(t.dtype)),this.state.numBytes+=s,this.state.tensorInfo.has(t.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(t.dataId,{backend:e||this.backend,dtype:t.dtype,shape:t.shape,bytes:s})),t instanceof Rl||this.track(t)}incRef(t,e){this.trackTensor(t,e),this.backend.incRef(t.dataId)}removeDataId(t,e){this.state.tensorInfo.has(t)&&this.state.tensorInfo.get(t).backend===e&&(this.state.tensorInfo.delete(t),this.state.numDataBuffers--)}disposeTensor(t){if(!this.state.tensorInfo.has(t.dataId))return;const e=this.state.tensorInfo.get(t.dataId);if(this.state.numTensors--,t.dtype==="string"&&(this.state.numStringTensors--,this.state.numBytes-=e.bytes),t.dtype!=="complex64"&&t.dtype!=="string"){const s=t.size*Ia(t.dtype);this.state.numBytes-=s}e.backend.disposeData(t.dataId)&&this.removeDataId(t.dataId,e.backend)}disposeVariables(){for(const t in this.state.registeredVariables){const e=this.state.registeredVariables[t];this.disposeVariable(e)}}disposeVariable(t){this.disposeTensor(t),this.state.registeredVariables[t.name]!=null&&delete this.state.registeredVariables[t.name]}memory(){const t=this.backend.memory();return t.numTensors=this.state.numTensors,t.numDataBuffers=this.state.numDataBuffers,t.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(t.unreliable=!0,t.reasons==null&&(t.reasons=[]),t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),t}profile(t){return J(this,null,function*(){this.state.profiling=!0;const e=this.state.numBytes,s=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=yield t(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(o=>o.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-e,this.state.activeProfile.newTensors=this.state.numTensors-s;for(const o of this.state.activeProfile.kernels)o.kernelTimeMs=yield o.kernelTimeMs,o.extraInfo=yield o.extraInfo;return this.state.activeProfile})}isTapeOn(){return this.state.gradientDepth>0&&this.state.kernelDepth===0}addTapeNode(t,e,s,o,r,i){const a={id:this.state.nextTapeNodeId++,kernelName:t,inputs:e,outputs:s,saved:r},l=bf(t);l!=null&&(o=l.gradFunc),o!=null&&(a.gradient=c=>(c=c.map((u,h)=>{if(u==null){const d=s[h],p=Oe(d.size,d.dtype);return this.makeTensor(p,d.shape,d.dtype)}return u}),o(c.length>1?c:c[0],r,i))),this.state.activeTape.push(a)}keep(t){return t.kept=!0,t}startTape(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(t){const e={track:[],name:"unnamed scope",id:this.state.nextScopeId++};t&&(e.name=t),this.state.scopeStack.push(e),this.state.activeScope=e}endScope(t){const e=_f(t),s=new Set(e.map(r=>r.id));for(let r=0;r<this.state.activeScope.track.length;r++){const i=this.state.activeScope.track[r];!i.kept&&!s.has(i.id)&&i.dispose()}const o=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],e.forEach(r=>{!r.kept&&r.scopeId===o.id&&this.track(r)})}gradients(t,e,s,o=!1){if(T(e.length>0,()=>"gradients() received an empty list of xs."),s!=null&&s.dtype!=="float32")throw new Error(`dy must have 'float32' dtype, but has '${s.dtype}'`);const r=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy("forward",t));T(r instanceof pe,()=>"The result y returned by f() must be a tensor.");const i=Kw(this.state.activeTape,e,r);if(!o&&i.length===0&&e.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",()=>{const a={};a[r.id]=s==null?nC(r.shape):s,jw(a,i,c=>this.tidy(c),sC);const l=e.map(c=>a[c.id]);return this.state.gradientDepth===0&&(this.state.activeTape.forEach(c=>{for(const u of c.saved)u.dispose()}),this.state.activeTape=null),{value:r,grads:l}})}customGrad(t){return T(iu(t),()=>"The f passed in customGrad(f) must be a function."),(...e)=>{T(e.every(a=>a instanceof pe),()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors");let s;const o={};e.forEach((a,l)=>{o[l]=a});const r=(a,l)=>(s=t(...e,l),T(s.value instanceof pe,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),T(iu(s.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),s.value),i=(a,l)=>{const c=s.gradFunc(a,l),u=Array.isArray(c)?c:[c];T(u.length===e.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),T(u.every(d=>d instanceof pe),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");const h={};return u.forEach((d,p)=>{h[p]=()=>d}),h};return this.runKernelFunc({forwardFunc:r,backwardsFunc:i,inputs:o})}}readSync(t){return this.state.tensorInfo.get(t).backend.readSync(t)}read(t){return this.state.tensorInfo.get(t).backend.read(t)}readToGPU(t,e){return this.state.tensorInfo.get(t).backend.readToGPU(t,e)}time(t){return J(this,null,function*(){const e=Ke(),s=yield this.backend.time(t);return s.wallMs=Ke()-e,s})}track(t){return this.state.activeScope!=null&&(t.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(t)),t}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new Mf;for(const t in this.registry)this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}}qo.nextTensorId=0,qo.nextVariableId=0;function nC(n){const t=lu(K(n),"float32");return P.makeTensor(t,n,"float32")}function Lf(){const n=Kp();if(n._tfengine==null){const t=new vw(n);n._tfengine=new qo(t)}return Tw(n._tfengine.ENV),Qw(()=>n._tfengine),n._tfengine}const P=Lf();function sC(n,t){const e={a:n,b:t};return P.runKernel(Uo,e)}function oC(){return typeof navigator!="undefined"&&navigator!=null}function Pf(n){if(n||oC()){if(n||(n=navigator),n.product==="ReactNative")return!0;const t=n.userAgent||n.vendor||(typeof window!="undefined"?window.opera:"");if(!t){const e=n;return e.userAgentData&&e.userAgentData.mobile}return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4))}return!1}function Bf(){return typeof window!="undefined"&&window.document!=null||typeof WorkerGlobalScope!="undefined"}const je=q();je.registerFlag("DEBUG",()=>!1,n=>{n&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")}),je.registerFlag("IS_BROWSER",()=>Bf()),je.registerFlag("IS_NODE",()=>typeof process!="undefined"&&typeof process.versions!="undefined"&&typeof process.versions.node!="undefined"),je.registerFlag("IS_CHROME",()=>typeof navigator!="undefined"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)),je.registerFlag("IS_SAFARI",()=>typeof navigator!="undefined"&&navigator!=null&&navigator.userAgent!=null&&/Safari/.test(navigator.userAgent)&&/Apple/.test(navigator.vendor)),je.registerFlag("PROD",()=>!1),je.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",()=>je.getBool("DEBUG")),je.registerFlag("DEPRECATION_WARNINGS_ENABLED",()=>!0),je.registerFlag("IS_TEST",()=>!1),je.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",()=>je.getBool("DEBUG")),je.registerFlag("WRAP_TO_IMAGEBITMAP",()=>!1),je.registerFlag("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU",()=>!1),je.registerFlag("USE_SETTIMEOUTCUSTOM",()=>!1);function Al(n,t){let e=n;if($n(n))return t==="string"?[]:[n.length];if(Df(n)){const o=n.channels||"RGBA";return[n.height,n.width*o.length]}else if(Ff(n))return[n.buffer.size/(t==null?4:Ia(t))];if(!Array.isArray(n))return[];const s=[];for(;Array.isArray(e)||$n(e)&&t!=="string";)s.push(e.length),e=e[0];return Array.isArray(n)&&q().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&zf(n,s,[]),s}function zf(n,t,e){if(e=e||[],!Array.isArray(n)&&!$n(n)){T(t.length===0,()=>`Element arr[${e.join("][")}] is a primitive, but should be an array/TypedArray of ${t[0]} elements`);return}T(t.length>0,()=>`Element arr[${e.join("][")}] should be a primitive, but is an array of ${n.length} elements`),T(n.length===t[0],()=>`Element arr[${e.join("][")}] should have ${t[0]} elements, but has ${n.length} elements`);const s=t.slice(1);for(let o=0;o<n.length;++o)zf(n[o],s,e.concat(o))}function Vf(n,t,e,s){if(n!=="string_or_numeric"){if(n==null)throw new Error("Expected dtype cannot be null.");if(n!=="numeric"&&n!==t||n==="numeric"&&t==="string")throw new Error(`Argument '${e}' passed to '${s}' must be ${n} tensor, but got ${t} tensor`)}}function D(n,t,e,s="numeric"){if(n instanceof X())return Vf(s,n.dtype,t,e),n;let o=Vo(n);if(o!=="string"&&["bool","int32","float32"].indexOf(s)>=0&&(o=s),Vf(s,o,t,e),n==null||!$n(n)&&!Array.isArray(n)&&typeof n!="number"&&typeof n!="boolean"&&typeof n!="string"){const l=n==null?"null":n.constructor.name;throw new Error(`Argument '${t}' passed to '${e}' must be a Tensor or TensorLike, but got '${l}'`)}const r=Al(n,o);!$n(n)&&!Array.isArray(n)&&(n=[n]);const a=o!=="string"?oo(n,o):ro(n,[],!0);return P.makeTensor(a,r,o)}function Wf(n,t,e,s="numeric"){if(!Array.isArray(n))throw new Error(`Argument ${t} passed to ${e} must be a \`Tensor[]\` or \`TensorLike[]\``);return n.map((r,i)=>D(r,`${t}[${i}]`,e,s))}const rC="__op";function W(n){const t=Object.keys(n);if(t.length!==1)throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${t.length} keys.`);let e=t[0];const s=n[e];e.endsWith("_")&&(e=e.substring(0,e.length-1)),e=e+rC;const o=(...r)=>{P.startScope(e);try{const i=s(...r);return cu(i)&&console.error("Cannot return a Promise inside of tidy."),P.endScope(i),i}catch(i){throw P.endScope(null),i}};return Object.defineProperty(o,"name",{value:e,configurable:!0}),o}function iC(n,t){const e=D(n,"real","complex"),s=D(t,"imag","complex");su(e.shape,s.shape,`real and imag shapes, ${e.shape} and ${s.shape}, must match in call to tf.complex().`);const o={real:e,imag:s};return P.runKernel(yu,o)}const Xo=W({complex_:iC});function Dl(n,t,e,s){if(s==null)s=Vo(n);else if(s==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(Ff(n)||Df(n)){if(s!=="float32"&&s!=="int32")throw new Error(`Creating tensor from GPU data only supports 'float32'|'int32' dtype, while the dtype is ${s}.`);return P.backend.createTensorFromGPUData(n,t||e,s)}if(!$n(n)&&!Array.isArray(n)&&typeof n!="number"&&typeof n!="boolean"&&typeof n!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(t!=null){ds(t);const o=K(t),r=K(e);T(o===r,()=>`Based on the provided shape, [${t}], the tensor should have ${o} values but has ${r}`);for(let i=0;i<e.length;++i){const a=e[i],l=i===e.length-1?a!==K(t.slice(i)):!0;T(e[i]===t[i]||!l,()=>`Error creating a new Tensor. Inferred shape (${e}) does not match the provided shape (${t}). `)}}return!$n(n)&&!Array.isArray(n)&&(n=[n]),t=t||e,n=s!=="string"?oo(n,s):ro(n,[],!0),P.makeTensor(n,t,s)}function Si(n,t,e){const s=Al(n,e);return Dl(n,t,s,e)}class Fs{static join(t){return new Fs(t).slice()}constructor(t){if(this.shards=[],this.previousShardIndex=0,t==null||(t instanceof Array||(t=[t]),t=t.map(s=>$n(s)?s.buffer:s),t.length===0))return;this.bufferUniformSize=t[0].byteLength;let e=0;for(let s=0;s<t.length;s++){const o=t[s];s!==t.length-1&&o.byteLength!==this.bufferUniformSize&&(this.bufferUniformSize=void 0);const r=e+o.byteLength;this.shards.push({buffer:o,start:e,end:r}),e=r}this.shards.length===0&&(this.byteLength=0),this.byteLength=this.shards[this.shards.length-1].end}slice(t=0,e=this.byteLength){if(this.shards.length===0)return new ArrayBuffer(0);if(t=isNaN(Number(t))?0:t,e=isNaN(Number(e))?0:e,t=Math.max(0,t),e=Math.min(this.byteLength,e),e<=t)return new ArrayBuffer(0);const s=this.findShardForByte(t);if(s===-1)throw new Error(`Could not find start shard for byte ${t}`);const o=e-t,r=new ArrayBuffer(o),i=new Uint8Array(r);let a=0;for(let l=s;l<this.shards.length;l++){const c=this.shards[l],h=t+a-c.start,d=a,f=Math.min(e,c.end)-c.start,m=new Uint8Array(c.buffer,h,f-h);if(i.set(m,d),a+=m.length,e<c.end)break}return r}findShardForByte(t){if(this.shards.length===0||t<0||t>=this.byteLength)return-1;if(this.bufferUniformSize!=null)return this.previousShardIndex=Math.floor(t/this.bufferUniformSize),this.previousShardIndex;function e(o){return t<o.start?-1:t>=o.end?1:0}if(e(this.shards[this.previousShardIndex])===0)return this.previousShardIndex;const s=aC(this.shards,e);return s===-1?-1:(this.previousShardIndex=s,this.previousShardIndex)}}function aC(n,t){let e=0,s=n.length;for(;e<=s;){const o=Math.floor((s-e)/2)+e,r=t(n[o]);if(r===0)return o;r<0?s=o:e=o+1}return-1}function on(){return P}function Uf(){return P.memory()}function U(n,t){return P.tidy(n,t)}function Nt(n){_f(n).forEach(e=>e.dispose())}function Yn(n){return P.keep(n)}function Gf(n){return P.setBackend(n)}function Hf(n,t,e=1){return P.registerBackend(n,t,e)}function lC(){return P.backend}const qf=4;function Xf(n,t){return J(this,null,function*(){const e=[],s=[],o=Array.isArray(n)?n.map(i=>i.name):Object.keys(n);for(let i=0;i<o.length;++i){const a=o[i],l=Array.isArray(n)?n[i].tensor:n[a];if(l.dtype!=="float32"&&l.dtype!=="int32"&&l.dtype!=="bool"&&l.dtype!=="string"&&l.dtype!=="complex64")throw new Error(`Unsupported dtype in weight '${a}': ${l.dtype}`);const c={name:a,shape:l.shape,dtype:l.dtype};if(l.dtype==="string"){const u=new Promise(h=>J(null,null,function*(){const d=yield l.bytes(),p=d.reduce((g,x)=>g+x.length,0)+qf*d.length,f=new Uint8Array(p);let m=0;for(let g=0;g<d.length;g++){const x=d[g],b=new Uint8Array(new Uint32Array([x.length]).buffer);f.set(b,m),m+=qf,f.set(x,m),m+=x.length}h(f)}));s.push(u)}else s.push(l.data());t!=null&&(c.group=t),e.push(c)}const r=yield Promise.all(s);return{data:cC(r),specs:e}})}function cC(n){if(n===null)throw new Error(`Invalid input value: ${JSON.stringify(n)}`);let t=0;const e=[];n.forEach(r=>{if(t+=r.byteLength,e.push(r.byteLength===r.buffer.byteLength?r:new r.constructor(r)),!(r instanceof Float32Array||r instanceof Int32Array||r instanceof Uint8Array))throw new Error(`Unsupported TypedArray subtype: ${r.constructor.name}`)});const s=new Uint8Array(t);let o=0;return e.forEach(r=>{s.set(new Uint8Array(r.buffer),o),o+=r.byteLength}),s.buffer}const hh=typeof Buffer!="undefined"&&(typeof Blob=="undefined"||typeof atob=="undefined"||typeof btoa=="undefined");function Kf(n){return hh?Buffer.byteLength(n,"utf8"):new Blob([n]).size}function uC(n){if(hh)return Buffer.from(n).toString("base64");const t=new Uint8Array(n);let e="";for(let s=0,o=t.length;s<o;s++)e+=String.fromCharCode(t[s]);return btoa(e)}function hC(n){if(hh){const s=Buffer.from(n,"base64");return s.buffer.slice(s.byteOffset,s.byteOffset+s.byteLength)}const t=atob(n),e=new Uint8Array(t.length);for(let s=0;s<t.length;++s)e.set([t.charCodeAt(s)],s);return e.buffer}function dC(n){return Fs.join(n)}function jf(n,t){const e={modelTopology:n.modelTopology,format:n.format,generatedBy:n.generatedBy,convertedBy:n.convertedBy,weightsManifest:t};return n.signature!=null&&(e.signature=n.signature),n.userDefinedMetadata!=null&&(e.userDefinedMetadata=n.userDefinedMetadata),n.modelInitializer!=null&&(e.modelInitializer=n.modelInitializer),n.initializerSignature!=null&&(e.initializerSignature=n.initializerSignature),n.trainingConfig!=null&&(e.trainingConfig=n.trainingConfig),e}function pC(n,t,e){const s={modelTopology:n.modelTopology,format:n.format,generatedBy:n.generatedBy,convertedBy:n.convertedBy};if(n.trainingConfig!=null&&(s.trainingConfig=n.trainingConfig),n.weightsManifest!=null){if(!t)throw new Error("modelJSON has weightsManifest but weightSpecs is null");if(!e)throw new Error("modelJSON has weightsManifest but weightData is null");s.weightSpecs=t,s.weightData=e}return n.signature!=null&&(s.signature=n.signature),n.userDefinedMetadata!=null&&(s.userDefinedMetadata=n.userDefinedMetadata),n.modelInitializer!=null&&(s.modelInitializer=n.modelInitializer),n.initializerSignature!=null&&(s.initializerSignature=n.initializerSignature),s}function fC(n,t){return J(this,null,function*(){let e,s;return n.weightsManifest!=null&&([e,s]=yield t(n.weightsManifest)),pC(n,e,s)})}function Fl(n){if(n.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:n.modelTopology==null?0:Kf(JSON.stringify(n.modelTopology)),weightSpecsBytes:n.weightSpecs==null?0:Kf(JSON.stringify(n.weightSpecs)),weightDataBytes:n.weightData==null?0:new Fs(n.weightData).byteLength}}function Yf(n){const t=[];for(const e of n)t.push(...e.weights);return t}class Ce{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return Ce.instance==null&&(Ce.instance=new Ce),Ce.instance}static registerSaveRouter(t){Ce.getInstance().saveRouters.push(t)}static registerLoadRouter(t){Ce.getInstance().loadRouters.push(t)}static getSaveHandlers(t){return Ce.getHandlers(t,"save")}static getLoadHandlers(t,e){return Ce.getHandlers(t,"load",e)}static getHandlers(t,e,s){const o=[];return(e==="load"?Ce.getInstance().loadRouters:Ce.getInstance().saveRouters).forEach(i=>{const a=i(t,s);a!==null&&o.push(a)}),o}}const mC=n=>Ce.getSaveHandlers(n);const dh="tensorflowjs",ph=1,io="models_store",_s="model_info_store";function Zf(){if(!q().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");const n=typeof window=="undefined"?self:window,t=n.indexedDB||n.mozIndexedDB||n.webkitIndexedDB||n.msIndexedDB||n.shimIndexedDB;if(t==null)throw new Error("The current browser does not appear to support IndexedDB.");return t}function fh(n){const t=n.result;t.createObjectStore(io,{keyPath:"modelPath"}),t.createObjectStore(_s,{keyPath:"modelPath"})}class ao{constructor(t){if(this.indexedDB=Zf(),t==null||!t)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=t}save(t){return J(this,null,function*(){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,t)})}load(){return J(this,null,function*(){return this.databaseAction(this.modelPath)})}databaseAction(t,e){return new Promise((s,o)=>{const r=this.indexedDB.open(dh,ph);r.onupgradeneeded=()=>fh(r),r.onsuccess=()=>{const i=r.result;if(e==null){const a=i.transaction(io,"readonly"),c=a.objectStore(io).get(this.modelPath);c.onsuccess=()=>{if(c.result==null)return i.close(),o(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));s(c.result.modelArtifacts)},c.onerror=u=>(i.close(),o(c.error)),a.oncomplete=()=>i.close()}else{e.weightData=Fs.join(e.weightData);const a=Fl(e),l=i.transaction(_s,"readwrite");let c=l.objectStore(_s),u;try{u=c.put({modelPath:this.modelPath,modelArtifactsInfo:a})}catch(d){return o(d)}let h;u.onsuccess=()=>{h=i.transaction(io,"readwrite");const d=h.objectStore(io);let p;try{p=d.put({modelPath:this.modelPath,modelArtifacts:e,modelArtifactsInfo:a})}catch(f){return o(f)}p.onsuccess=()=>s({modelArtifactsInfo:a}),p.onerror=f=>{c=l.objectStore(_s);const m=c.delete(this.modelPath);m.onsuccess=()=>(i.close(),o(p.error)),m.onerror=g=>(i.close(),o(p.error))}},u.onerror=d=>(i.close(),o(u.error)),l.oncomplete=()=>{h==null?i.close():h.oncomplete=()=>i.close()}}},r.onerror=i=>o(r.error)})}}ao.URL_SCHEME="indexeddb://";const Qf=n=>q().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(ao.URL_SCHEME)?gC(n.slice(ao.URL_SCHEME.length)):null;Ce.registerSaveRouter(Qf),Ce.registerLoadRouter(Qf);function gC(n){return new ao(n)}function xC(n){return n.startsWith(ao.URL_SCHEME)?n.slice(ao.URL_SCHEME.length):n}class bC{constructor(){this.indexedDB=Zf()}listModels(){return J(this,null,function*(){return new Promise((t,e)=>{const s=this.indexedDB.open(dh,ph);s.onupgradeneeded=()=>fh(s),s.onsuccess=()=>{const o=s.result,r=o.transaction(_s,"readonly"),a=r.objectStore(_s).getAll();a.onsuccess=()=>{const l={};for(const c of a.result)l[c.modelPath]=c.modelArtifactsInfo;t(l)},a.onerror=l=>(o.close(),e(a.error)),r.oncomplete=()=>o.close()},s.onerror=o=>e(s.error)})})}removeModel(t){return J(this,null,function*(){return t=xC(t),new Promise((e,s)=>{const o=this.indexedDB.open(dh,ph);o.onupgradeneeded=()=>fh(o),o.onsuccess=()=>{const r=o.result,i=r.transaction(_s,"readwrite"),a=i.objectStore(_s),l=a.get(t);let c;l.onsuccess=()=>{if(l.result==null)return r.close(),s(new Error(`Cannot find model with path '${t}' in IndexedDB.`));{const u=a.delete(t),h=()=>{c=r.transaction(io,"readwrite");const p=c.objectStore(io).delete(t);p.onsuccess=()=>e(l.result.modelArtifactsInfo),p.onerror=f=>s(l.error)};u.onsuccess=h,u.onerror=d=>(h(),r.close(),s(l.error))}},l.onerror=u=>(r.close(),s(l.error)),i.oncomplete=()=>{c==null?r.close():c.oncomplete=()=>r.close()}},o.onerror=r=>s(o.error)})})}}const ps="/",Ko="tensorflowjs_models",Jf="info",yC="model_topology",wC="weight_specs",CC="weight_data",$C="model_metadata";function tm(n){return{info:[Ko,n,Jf].join(ps),topology:[Ko,n,yC].join(ps),weightSpecs:[Ko,n,wC].join(ps),weightData:[Ko,n,CC].join(ps),modelMetadata:[Ko,n,$C].join(ps)}}function em(n){for(const t of Object.values(n))window.localStorage.removeItem(t)}function IC(n){const t=n.split(ps);if(t.length<3)throw new Error(`Invalid key format: ${n}`);return t.slice(1,t.length-1).join(ps)}function vC(n){return n.startsWith(lo.URL_SCHEME)?n.slice(lo.URL_SCHEME.length):n}class lo{constructor(t){if(!q().getBool("IS_BROWSER")||typeof window=="undefined"||typeof window.localStorage=="undefined")throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,t==null||!t)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=t,this.keys=tm(this.modelPath)}save(t){return J(this,null,function*(){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{const e=JSON.stringify(t.modelTopology),s=JSON.stringify(t.weightSpecs),o=Fl(t),r=Fs.join(t.weightData);try{this.LS.setItem(this.keys.info,JSON.stringify(o)),this.LS.setItem(this.keys.topology,e),this.LS.setItem(this.keys.weightSpecs,s),this.LS.setItem(this.keys.weightData,uC(r));const i={format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,signature:t.signature!=null?t.signature:void 0,userDefinedMetadata:t.userDefinedMetadata!=null?t.userDefinedMetadata:void 0,modelInitializer:t.modelInitializer!=null?t.modelInitializer:void 0,initializerSignature:t.initializerSignature!=null?t.initializerSignature:void 0,trainingConfig:t.trainingConfig!=null?t.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(i)),{modelArtifactsInfo:o}}catch(i){throw em(this.keys),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${o.modelTopologyBytes}, weightSpecsBytes=${o.weightSpecsBytes}, weightDataBytes=${o.weightDataBytes}.`)}}})}load(){return J(this,null,function*(){const t=JSON.parse(this.LS.getItem(this.keys.info));if(t==null)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if(t.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");const e={},s=JSON.parse(this.LS.getItem(this.keys.topology));if(s==null)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);e.modelTopology=s;const o=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(o==null)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);e.weightSpecs=o;const r=this.LS.getItem(this.keys.modelMetadata);if(r!=null){const a=JSON.parse(r);e.format=a.format,e.generatedBy=a.generatedBy,e.convertedBy=a.convertedBy,a.signature!=null&&(e.signature=a.signature),a.userDefinedMetadata!=null&&(e.userDefinedMetadata=a.userDefinedMetadata),a.modelInitializer!=null&&(e.modelInitializer=a.modelInitializer),a.initializerSignature!=null&&(e.initializerSignature=a.initializerSignature),a.trainingConfig!=null&&(e.trainingConfig=a.trainingConfig)}const i=this.LS.getItem(this.keys.weightData);if(i==null)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return e.weightData=hC(i),e})}}lo.URL_SCHEME="localstorage://";const nm=n=>q().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(lo.URL_SCHEME)?kC(n.slice(lo.URL_SCHEME.length)):null;Ce.registerSaveRouter(nm),Ce.registerLoadRouter(nm);function kC(n){return new lo(n)}class SC{constructor(){T(q().getBool("IS_BROWSER"),()=>"Current environment is not a web browser"),T(typeof window=="undefined"||typeof window.localStorage!="undefined",()=>"Current browser does not appear to support localStorage"),this.LS=window.localStorage}listModels(){return J(this,null,function*(){const t={},e=Ko+ps,s=ps+Jf;for(let o=0;o<this.LS.length;++o){const r=this.LS.key(o);if(r.startsWith(e)&&r.endsWith(s)){const i=IC(r);t[i]=JSON.parse(this.LS.getItem(r))}}return t})}removeModel(t){return J(this,null,function*(){t=vC(t);const e=tm(t);if(this.LS.getItem(e.info)==null)throw new Error(`Cannot find model at path '${t}'`);const s=JSON.parse(this.LS.getItem(e.info));return em(e),s})}}const sm="://";class Zn{constructor(){this.managers={}}static getInstance(){return Zn.instance==null&&(Zn.instance=new Zn),Zn.instance}static registerManager(t,e){T(t!=null,()=>"scheme must not be undefined or null."),t.endsWith(sm)&&(t=t.slice(0,t.indexOf(sm))),T(t.length>0,()=>"scheme must not be an empty string.");const s=Zn.getInstance();T(s.managers[t]==null,()=>`A model store manager is already registered for scheme '${t}'.`),s.managers[t]=e}static getManager(t){const e=Zn.getInstance().managers[t];if(e==null)throw new Error(`Cannot find model manager for scheme '${t}'`);return e}static getSchemes(){return Object.keys(Zn.getInstance().managers)}}class NC{constructor(){this.messageName="setTimeoutCustom",this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}fetch(t,e){return fetch(t,e)}now(){return performance.now()}encode(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error(`Browser's encoder only supports utf-8, but got ${e}`);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(t)}decode(t,e){return new TextDecoder(e).decode(t)}setTimeoutCustom(t,e){if(typeof window=="undefined"||!q().getBool("USE_SETTIMEOUTCUSTOM")){setTimeout(t,e);return}this.functionRefs.push(t),setTimeout(()=>{window.postMessage({name:this.messageName,index:this.functionRefs.length-1},"*")},e),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener("message",s=>{if(s.source===window&&s.data.name===this.messageName){s.stopPropagation();const o=this.functionRefs[s.data.index];o(),this.handledMessageCount++,this.handledMessageCount===this.functionRefs.length&&(this.functionRefs=[],this.handledMessageCount=0)}},!0))}isTypedArray(t){return $f(t)}}if(q().get("IS_BROWSER")){q().setPlatform("browser",new NC);try{Zn.registerManager(lo.URL_SCHEME,new SC)}catch(n){}try{Zn.registerManager(ao.URL_SCHEME,new bC)}catch(n){}}const TC={importFetch:()=>require("node-fetch")};let mh;class EC{constructor(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder}fetch(t,e){return q().global.fetch!=null?q().global.fetch(t,e):(mh==null&&(mh=TC.importFetch()),mh(t,e))}now(){const t=process.hrtime();return t[0]*1e3+t[1]/1e6}encode(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error(`Node built-in encoder only supports utf-8, but got ${e}`);return this.textEncoder.encode(t)}decode(t,e){return t.length===0?"":new this.util.TextDecoder(e).decode(t)}isTypedArray(t){return this.util.types.isFloat32Array(t)||this.util.types.isInt32Array(t)||this.util.types.isUint8Array(t)||this.util.types.isUint8ClampedArray(t)}}q().get("IS_NODE")&&!q().get("IS_BROWSER")&&q().setPlatform("node",new EC);function kt(n,t="float32",e){return t=t||"float32",ds(n),new ke(n,t,e)}function RC(n,t){const e=D(n,"x","cast");if(!ww(t))throw new Error(`Failed to cast to unknown dtype ${t}`);if(t==="string"&&e.dtype!=="string"||t!=="string"&&e.dtype==="string")throw new Error("Only strings can be casted to strings");const s={x:e},o={dtype:t};return P.runKernel(Or,s,o)}const at=W({cast_:RC});function AC(n){const e={x:D(n,"x","clone","string_or_numeric")};return P.runKernel(Kr,e)}const co=W({clone_:AC});function DC(n,t=!1){console.log(n.toString(t))}Lf(),Jw({buffer:kt,cast:at,clone:co,print:DC});function FC(n,t){let e=D(n,"a","add"),s=D(t,"b","add");[e,s]=re(e,s);const o={a:e,b:s};return P.runKernel(Uo,o)}const tt=W({add_:FC});function _C(n,t){let e=D(n,"a","floorDiv"),s=D(t,"b","floorDiv");[e,s]=re(e,s);const o={a:e,b:s};return P.runKernel(qr,o)}const om=W({floorDiv_:_C});function OC(n,t){let e=D(n,"a","div"),s=D(t,"b","div");if([e,s]=re(e,s),e.dtype==="int32"&&s.dtype==="int32")return om(e,s);const o={a:e,b:s},r={};return P.runKernel(zr,o,r)}const gt=W({div_:OC});function MC(n,t){let e=D(n,"a","mul"),s=D(t,"b","mul");[e,s]=re(e,s);const o={a:e,b:s};return P.runKernel(si,o)}const L=W({mul_:MC});function LC(n){const t=D(n,"x","abs");if(t.dtype==="complex64"){const e={x:t};return P.runKernel(Aa,e)}else{const e={x:t};return P.runKernel(va,e)}}const We=W({abs_:LC});function PC(n){const e={x:D(n,"x","acos")};return P.runKernel(Tr,e)}const BC=W({acos_:PC});function zC(n){const e={x:D(n,"x","acosh")};return P.runKernel(Er,e)}const VC=W({acosh_:zC});function WC(n,t=null,e=!1){const o={x:D(n,"x","all","bool")},r={axis:t,keepDims:e};return P.runKernel(pu,o,r)}const rm=W({all_:WC});function UC(n,t=null,e=!1){const o={x:D(n,"x","any","bool")},r={axis:t,keepDims:e};return P.runKernel(fu,o,r)}const gh=W({any_:UC});function GC(n,t=0){const s={x:D(n,"x","argMax")},o={axis:t};return P.runKernel(ka,s,o)}const Ni=W({argMax_:GC});function HC(n,t=0){const s={x:D(n,"x","argMin")},o={axis:t};return P.runKernel(Sa,s,o)}const qC=W({argMin_:HC});function XC(n){const e={x:D(n,"x","asin")};return P.runKernel(Rr,e)}const KC=W({asin_:XC});function jC(n){const e={x:D(n,"x","asinh")};return P.runKernel(Ar,e)}const YC=W({asinh_:jC});function ZC(n){const e={x:D(n,"x","atan")};return P.runKernel(Dr,e)}const QC=W({atan_:ZC});function JC(n,t){let e=D(n,"a","atan2"),s=D(t,"b","atan2");[e,s]=re(e,s);const o={a:e,b:s};return P.runKernel(_r,o)}const t$=W({atan2_:JC});function e$(n){const e={x:D(n,"x","atanh")};return P.runKernel(Fr,e)}const n$=W({atanh_:e$});function Ti(n,t,e,s,o="NHWC",r){const i=n[3],a=[...t,i],l=ms(o);return Se(n,a,e,r,s,null,null,l)}function In(n,t,e,s,o,r,i="channelsLast"){const[a,l]=Ei(t);let c;if(i==="channelsLast")c=[a,l,n[3],n[3]];else if(i==="channelsFirst")c=[a,l,n[1],n[1]];else throw new Error(`Unknown dataFormat ${i}`);return Se(n,c,e,s,o,r,!1,i)}function fs(n,t,e,s,o,r,i="NDHWC"){const[a,l,c]=bh(t);let u,h;if(i==="NDHWC")h="channelsLast",u=[a,l,c,n[4],n[4]];else if(i==="NCDHW")h="channelsFirst",u=[a,l,c,n[1],n[1]];else throw new Error(`Unknown dataFormat ${i}`);return Os(n,u,e,s,o,!1,h,r)}function Se(n,t,e,s,o,r,i=!1,a="channelsLast"){let[l,c,u,h]=[-1,-1,-1,-1];if(a==="channelsLast")[l,c,u,h]=n;else if(a==="channelsFirst")[l,h,c,u]=n;else throw new Error(`Unknown dataFormat ${a}`);const[d,p,,f]=t,[m,g]=Ei(e),[x,b]=Ei(s),w=jo(d,x),y=jo(p,b),{padInfo:C,outHeight:I,outWidth:v}=r$(o,c,u,m,g,w,y,r,a),N=i?f*h:f;let S;return a==="channelsFirst"?S=[l,N,I,v]:a==="channelsLast"&&(S=[l,I,v,N]),{batchSize:l,dataFormat:a,inHeight:c,inWidth:u,inChannels:h,outHeight:I,outWidth:v,outChannels:N,padInfo:C,strideHeight:m,strideWidth:g,filterHeight:d,filterWidth:p,effectiveFilterHeight:w,effectiveFilterWidth:y,dilationHeight:x,dilationWidth:b,inShape:n,outShape:S,filterShape:t}}function Os(n,t,e,s,o,r=!1,i="channelsLast",a){let[l,c,u,h,d]=[-1,-1,-1,-1,-1];if(i==="channelsLast")[l,c,u,h,d]=n;else if(i==="channelsFirst")[l,d,c,u,h]=n;else throw new Error(`Unknown dataFormat ${i}`);const[p,f,m,,g]=t,[x,b,w]=bh(e),[y,C,I]=bh(s),v=jo(p,y),N=jo(f,C),S=jo(m,I),{padInfo:k,outDepth:$,outHeight:E,outWidth:R}=i$(o,c,u,h,x,b,w,v,N,S,a),A=r?g*d:g;let F;return i==="channelsFirst"?F=[l,A,$,E,R]:i==="channelsLast"&&(F=[l,$,E,R,A]),{batchSize:l,dataFormat:i,inDepth:c,inHeight:u,inWidth:h,inChannels:d,outDepth:$,outHeight:E,outWidth:R,outChannels:A,padInfo:k,strideDepth:x,strideHeight:b,strideWidth:w,filterDepth:p,filterHeight:f,filterWidth:m,effectiveFilterDepth:v,effectiveFilterHeight:N,effectiveFilterWidth:S,dilationDepth:y,dilationHeight:C,dilationWidth:I,inShape:n,outShape:F,filterShape:t}}function s$(n,t,e,s,o){s==null&&(s=xh(n,t,e));const r=n[0],i=n[1],a=Ri((r-t+2*s)/e+1,o),l=Ri((i-t+2*s)/e+1,o);return[a,l]}function o$(n,t,e,s,o,r){o==null&&(o=xh(n,t[0],s[0]));const i=[0,0,0,e];for(let a=0;a<3;a++)n[a]+2*o>=t[a]&&(i[a]=Ri((n[a]-t[a]+2*o)/s[a]+1,r));return i}function xh(n,t,e,s=1){const o=jo(t,s);return Math.floor((n[0]*(e-1)-e+o)/2)}function Ei(n){return typeof n=="number"?[n,n,n]:n.length===2?[n[0],n[1],1]:n}function bh(n){return typeof n=="number"?[n,n,n]:n}function jo(n,t){return t<=1?n:n+(n-1)*(t-1)}function r$(n,t,e,s,o,r,i,a,l){let c,u,h;if(typeof n=="number"){c={top:n,bottom:n,left:n,right:n,type:n===0?"VALID":"NUMBER"};const p=s$([t,e],r,s,n,a);u=p[0],h=p[1]}else if(n==="same"){u=Math.ceil(t/s),h=Math.ceil(e/o);const d=Math.max(0,(u-1)*s+r-t),p=Math.max(0,(h-1)*o+i-e),f=Math.floor(d/2),m=d-f,g=Math.floor(p/2),x=p-g;c={top:f,bottom:m,left:g,right:x,type:"SAME"}}else if(n==="valid")c={top:0,bottom:0,left:0,right:0,type:"VALID"},u=Math.ceil((t-r+1)/s),h=Math.ceil((e-i+1)/o);else if(typeof n=="object"){const d=l==="channelsLast"?n[1][0]:n[2][0],p=l==="channelsLast"?n[1][1]:n[2][1],f=l==="channelsLast"?n[2][0]:n[3][0],m=l==="channelsLast"?n[2][1]:n[3][1];c={top:d,bottom:p,left:f,right:m,type:d===0&&p===0&&f===0&&m===0?"VALID":"EXPLICIT"},u=Ri((t-r+d+p)/s+1,a),h=Ri((e-i+f+m)/o+1,a)}else throw Error(`Unknown padding parameter: ${n}`);return{padInfo:c,outHeight:u,outWidth:h}}function i$(n,t,e,s,o,r,i,a,l,c,u){let h,d,p,f;if(n==="valid"&&(n=0),typeof n=="number"){h={top:n,bottom:n,left:n,right:n,front:n,back:n,type:n===0?"VALID":"NUMBER"};const g=o$([t,e,s,1],[a,l,c],1,[o,r,i],n,u);d=g[0],p=g[1],f=g[2]}else if(n==="same"){d=Math.ceil(t/o),p=Math.ceil(e/r),f=Math.ceil(s/i);const m=(d-1)*o+a-t,g=(p-1)*r+l-e,x=(f-1)*i+c-s,b=Math.floor(m/2),w=m-b,y=Math.floor(g/2),C=g-y,I=Math.floor(x/2),v=x-I;h={top:y,bottom:C,left:I,right:v,front:b,back:w,type:"SAME"}}else throw Error(`Unknown padding parameter: ${n}`);return{padInfo:h,outDepth:d,outHeight:p,outWidth:f}}function Ri(n,t){if(!t)return Math.trunc(n);switch(t){case"round":return Math.round(n);case"ceil":return Math.ceil(n);case"floor":return Math.floor(n);default:throw new Error(`Unknown roundingMode ${t}`)}}function uo(n){const[t,e,s]=Ei(n);return t===1&&e===1&&s===1}function Me(n,t){return uo(n)||uo(t)}function ho(n){return Ei(n).every(t=>t>0)}function ms(n){if(n==="NHWC")return"channelsLast";if(n==="NCHW")return"channelsFirst";throw new Error(`Unknown dataFormat ${n}`)}function Ye(n,t,e){if(e!=null){if(typeof t=="string")throw Error(`Error in ${n}: pad must be an integer when using dimRoundingMode ${e} but got pad ${t}.`);if(typeof t=="number")T(Bo(t),()=>`Error in ${n}: pad must be an integer when using dimRoundingMode ${e} but got pad ${t}.`);else if(typeof t=="object")t.forEach(s=>{s.forEach(o=>{T(Bo(o),()=>`Error in ${n}: pad must be an integer when using dimRoundingMode ${e} but got pad ${o}.`)})});else throw Error(`Error in ${n}: Unknown padding parameter: ${t}`)}}function a$(n,t){const s={x:D(n,"x","reshape","string_or_numeric")},o={shape:t};return P.runKernel(hl,s,o)}const z=W({reshape_:a$});function l$(n,t,e,s,o){const r=D(n,"x","avgPool","float32"),i=1;T(Me(e,i),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${e} and dilations '${i}'`);let a=r,l=!1;r.rank===3&&(l=!0,a=z(r,[1,r.shape[0],r.shape[1],r.shape[2]])),T(a.rank===4,()=>`Error in avgPool: x must be rank 4 but got rank ${a.rank}.`),Ye("avgPool",s,o);const c={x:a},u={filterSize:t,strides:e,pad:s,dimRoundingMode:o};let h=P.runKernel(Na,c,u);return h=at(h,r.dtype),l?z(h,[h.shape[1],h.shape[2],h.shape[3]]):h}const yh=W({avgPool_:l$});function c$(n,t,e,s,o,r="NDHWC"){const i=D(n,"x","avgPool3d","float32");let a=i,l=!1;i.rank===4&&(l=!0,a=z(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]])),T(a.rank===5,()=>`Error in avgPool3d: x must be rank 5 but got rank ${a.rank}.`),T(r==="NDHWC",()=>`Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of ${r}`),T(typeof e=="number"&&e>0||Array.isArray(e)&&e[0]>0&&e[1]>0&&e[2]>0,()=>`Error in avgPool3d: Stride must be > 0, but got '${e}'`),Ye("avgPool3d",s,o);const c={x:a},u={filterSize:t,strides:e,pad:s,dimRoundingMode:o,dataFormat:r};let h=P.runKernel(Ta,c,u);return h=at(h,a.dtype),l?z(h,[h.shape[1],h.shape[2],h.shape[3],h.shape[4]]):h}const u$=W({avgPool3d_:c$});function h$(n,t=0){T(n.length>=1,()=>"Pass at least one tensor to concat");const e=Wf(n,"tensors","concat","string_or_numeric");if(e[0].dtype==="complex64"&&e.forEach(r=>{if(r.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype ${r.dtype}. `)}),e.length===1)return co(e[0]);const s=e,o={axis:t};return P.runKernel(Da,s,o)}const Ze=W({concat_:h$});function d$(n,t,e=!1,s=!1){let o=D(n,"a","matMul"),r=D(t,"b","matMul");[o,r]=re(o,r);const i={a:o,b:r},a={transposeA:e,transposeB:s};return P.runKernel(Ea,i,a)}const Bt=W({matMul_:d$});function p$(n){const e={x:D(n,"x","sigmoid","float32")};return P.runKernel(fi,e)}const Yo=W({sigmoid_:p$});function f$(n,t,e){const s=D(n,"x","slice","string_or_numeric");if(s.rank===0)throw new Error("Slicing scalar is not possible");const o={x:s},r={begin:t,size:e};return P.runKernel(gl,o,r)}const Xt=W({slice_:f$});function m$(n){const e={x:D(n,"x","tanh","float32")};return P.runKernel(wi,e)}const _l=W({tanh_:m$});function g$(n,t,e){const s=D(n,"x","batchToSpaceND"),o=t.reduce((a,l)=>a*l);T(s.rank>=1+t.length,()=>`input rank is ${s.rank} but should be > than blockShape.length ${t.length}`),T(e.length===t.length,()=>`crops.length is ${e.length} but should be equal to blockShape.length  ${t.length}`),T(s.shape[0]%o===0,()=>`input tensor batch is ${s.shape[0]} but is not divisible by the product of the elements of blockShape ${t.join(" * ")} === ${o}`);const r={x:s},i={blockShape:t,crops:e};return P.runKernel(Ra,r,i)}const wh=W({batchToSpaceND_:g$});function x$(n){let t;return n.rank===0||n.rank===1?t=z(n,[1,1,1,n.size]):n.rank===2?t=z(n,[1,1,n.shape[0],n.shape[1]]):n.rank===3?t=z(n,[1,n.shape[0],n.shape[1],n.shape[2]]):t=n,t}function b$(n,t,e,s,o,r){r==null&&(r=.001);const i=D(n,"x","batchNorm"),a=D(t,"mean","batchNorm"),l=D(e,"variance","batchNorm");let c;o!=null&&(c=D(o,"scale","batchNorm"));let u;s!=null&&(u=D(s,"offset","batchNorm")),T(a.rank===l.rank,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),T(u==null||a.rank===u.rank,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),T(c==null||a.rank===c.rank,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");const d={x:x$(i),scale:c,offset:u,mean:a,variance:l},p={varianceEpsilon:r},f=P.runKernel(Va,d,p);return z(f,i.shape)}const Ol=W({batchNorm_:b$});function y$(n,t,e,s,o,r){const i=D(n,"x","batchNorm"),a=D(t,"mean","batchNorm"),l=D(e,"variance","batchNorm");let c;o!=null&&(c=D(o,"scale","batchNorm"));let u;return s!=null&&(u=D(s,"offset","batchNorm")),T(i.rank===2,()=>`Error in batchNorm2D: x must be rank 2 but got rank ${i.rank}.`),T(a.rank===2||a.rank===1,()=>`Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ${a.rank}.`),T(l.rank===2||l.rank===1,()=>`Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ${l.rank}.`),c!=null&&T(c.rank===2||c.rank===1,()=>`Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ${c.rank}.`),u!=null&&T(u.rank===2||u.rank===1,()=>`Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ${u.rank}.`),Ol(i,a,l,u,c,r)}const w$=W({batchNorm2d_:y$});function C$(n,t,e,s,o,r){const i=D(n,"x","batchNorm"),a=D(t,"mean","batchNorm"),l=D(e,"variance","batchNorm");let c;o!=null&&(c=D(o,"scale","batchNorm"));let u;return s!=null&&(u=D(s,"offset","batchNorm")),T(i.rank===3,()=>`Error in batchNorm3D: x must be rank 3 but got rank ${i.rank}.`),T(a.rank===3||a.rank===1,()=>`Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ${a.rank}.`),T(l.rank===3||l.rank===1,()=>`Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ${l.rank}.`),c!=null&&T(c.rank===3||c.rank===1,()=>`Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ${c.rank}.`),u!=null&&T(u.rank===3||u.rank===1,()=>`Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ${u.rank}.`),Ol(i,a,l,u,c,r)}const $$=W({batchNorm3d_:C$});function I$(n,t,e,s,o,r){const i=D(n,"x","batchNorm"),a=D(t,"mean","batchNorm"),l=D(e,"variance","batchNorm");let c;o!=null&&(c=D(o,"scale","batchNorm"));let u;return s!=null&&(u=D(s,"offset","batchNorm")),T(i.rank===4,()=>`Error in batchNorm4D: x must be rank 4 but got rank ${i.rank}.`),T(a.rank===4||a.rank===1,()=>`Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ${a.rank}.`),T(l.rank===4||l.rank===1,()=>`Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ${l.rank}.`),c!=null&&T(c.rank===4||c.rank===1,()=>`Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ${c.rank}.`),u!=null&&T(u.rank===4||u.rank===1,()=>`Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ${u.rank}.`),Ol(i,a,l,u,c,r)}const v$=W({batchNorm4d_:I$});function k$(n,t,e){const s=D(n,"x","bincount"),o=D(t,"weights","bincount");T(s.dtype==="int32",()=>`Error in bincount: input dtype must be int32, but got ${s.dtype}`),T(e>=0,()=>`size must be non-negative, but got ${e}.`),T(o.size===s.size||o.size===0,()=>`Error in bincount: weights must have the same size as input or0-length, but got input shape: ${s.shape}, weights shape: ${o.shape}.`);const r={x:s,weights:o},i={size:e};return P.runKernel(xu,r,i)}const S$=W({bincount_:k$});function N$(n,t){let e=D(n,"broadcastTo","x");const s=e.shape;if(ds(t),t.length<e.rank)throw new Error(`broadcastTo(): shape.length=${t.length} < input.rank=${e.rank}.`);if(t.length>e.rank){const c=e.shape.slice();for(;c.length<t.length;)c.unshift(1);e=z(e,c)}const o=e.shape,r=Array.from(t);for(let c=t.length-1;c>=0;c--)if(o[c]===t[c])r[c]=1;else if(e.shape[c]!==1)throw new Error(`broadcastTo(): [${s}] cannot be broadcast to [${t}].`);if(r.map((c,u)=>c>1?u:-1).filter(c=>c>=0).length===0)return co(e);const a={x:e},l={reps:r};return P.runKernel(Ci,a,l)}const Ai=W({broadcastTo_:N$});function T$(n){const e={x:D(n,"x","ceil","float32")};return P.runKernel(Mr,e)}const E$=W({ceil_:T$});function Ml(n,t,e){ds(n),e=e||Vo(t);const s={shape:n,value:t,dtype:e};return P.runKernel(_u,{},s)}function R$(n,t,e){const s=D(n,"x","clipByValue");if(T(t<=e,()=>`Error in clip: min (${t}) must be less than or equal to max (${e}).`),t===e)return Ml(s.shape,t,s.dtype);const o={x:s},r={clipValueMin:t,clipValueMax:e};return P.runKernel(Lr,o,r)}const mn=W({clipByValue_:R$});function A$(n){return Ze(n,0)}const D$=W({concat1d_:A$});function F$(n,t){return Ze(n,t)}const _$=W({concat2d_:F$});function O$(n,t){return Ze(n,t)}const M$=W({concat3d_:O$});function L$(n,t){return Ze(n,t)}const P$=W({concat4d_:L$});function B$(n,t,e,s,o="NHWC",r=[1,1],i){const a=D(n,"x","conv2d","float32"),l=D(t,"filter","conv2d","float32");let c=a,u=!1;a.rank===3&&(u=!0,c=z(a,[1,a.shape[0],a.shape[1],a.shape[2]])),T(c.rank===4,()=>`Error in conv2d: input must be rank 4, but got rank ${c.rank}.`),T(l.rank===4,()=>`Error in conv2d: filter must be rank 4, but got rank ${l.rank}.`),Ye("conv2d",s,i);const h=o==="NHWC"?c.shape[3]:c.shape[1];T(h===l.shape[2],()=>`Error in conv2d: depth of input (${h}) must match input depth for filter ${l.shape[2]}.`),T(Me(e,r),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${e} and dilations '${r}'`),T(ho(r),()=>"Error in conv2D: Dilated rates should be larger than 0."),T(ho(e),()=>"Error in conv2D: Strides should be larger than 0.");const d={x:c,filter:l},p={strides:e,pad:s,dataFormat:o,dilations:r,dimRoundingMode:i},f=P.runKernel(Fa,d,p);return u?z(f,[f.shape[1],f.shape[2],f.shape[3]]):f}const po=W({conv2d_:B$});function z$(n,t,e,s,o="NWC",r=1,i){const a=D(n,"x","conv1d"),l=D(t,"filter","conv1d");let c=a,u=!1;a.rank===2&&(u=!0,c=z(a,[1,a.shape[0],a.shape[1]])),T(c.rank===3,()=>`Error in conv1d: input must be rank 3, but got rank ${c.rank}.`),T(l.rank===3,()=>`Error in conv1d: filter must be rank 3, but got rank ${l.rank}.`),Ye("conv1d",s,i),T(c.shape[2]===l.shape[1],()=>`Error in conv1d: depth of input (${c.shape[2]}) must match input depth for filter ${l.shape[1]}.`),T(Me(e,r),()=>`Error in conv1D: Either stride or dilation must be 1. Got stride ${e} and dilation '${r}'`),T(ho(r),()=>"Error in conv1D: Dilated rates should be larger than 0."),T(ho(e),()=>"Error in conv1D: Stride should be larger than 0."),T(o==="NWC",()=>`Error in conv1d: got dataFormat of ${o} but only NWC is currently supported.`);const h=z(l,[1,l.shape[0],l.shape[1],l.shape[2]]),d=z(c,[c.shape[0],1,c.shape[1],c.shape[2]]),g=po(d,h,[1,e],s,"NHWC",[1,r],i);return u?z(g,[g.shape[2],g.shape[3]]):z(g,[g.shape[0],g.shape[2],g.shape[3]])}const im=W({conv1d_:z$});function V$(n,t,e,s,o,r="NHWC",i){T(n.length===t.rank,()=>`Length of inShape (${n.length}) and rank of dy (${t.rank}) must match`);let a=n,l=t,c=!1;t.rank===3&&(c=!0,l=z(t,[1,t.shape[0],t.shape[1],t.shape[2]]),a=[1,n[0],n[1],n[2]]),T(a.length===4,()=>`Error in conv2dDerInput: inShape must be length 4, but got length ${a.length}.`),T(l.rank===4,()=>`Error in conv2dDerInput: dy must be rank 4, but got rank ${l.rank}`),T(e.rank===4,()=>`Error in conv2dDerInput: filter must be rank 4, but got rank ${e.rank}`);const u=r==="NHWC"?a[3]:a[1],h=r==="NHWC"?l.shape[3]:l.shape[1];T(u===e.shape[2],()=>`Error in conv2dDerInput: depth of input (${u}) must match input depth for filter ${e.shape[2]}.`),T(h===e.shape[3],()=>`Error in conv2dDerInput: depth of output (${h}) must match output depth for filter ${e.shape[3]}.`),Ye("conv2dDerInput",o,i);const d={dy:l,filter:e},p={strides:s,pad:o,dataFormat:r,dimRoundingMode:i,inputShape:a},f=P.runKernel(_a,d,p);return c?z(f,[f.shape[1],f.shape[2],f.shape[3]]):f}const Ch=W({conv2DBackpropInput_:V$});function W$(n,t,e,s,o,r){const i=D(n,"x","conv2dTranspose"),a=D(t,"filter","conv2dTranspose");return Ch(e,i,a,s,o,"NHWC",r)}const am=W({conv2dTranspose_:W$});function U$(n,t,e,s,o="NDHWC",r=[1,1,1]){const i=D(n,"x","conv3d"),a=D(t,"filter","conv3d");let l=i,c=!1;i.rank===4&&(c=!0,l=z(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]])),T(l.rank===5,()=>`Error in conv3d: input must be rank 5, but got rank ${l.rank}.`),T(a.rank===5,()=>`Error in conv3d: filter must be rank 5, but got rank ${a.rank}.`),T(l.shape[4]===a.shape[3],()=>`Error in conv3d: depth of input (${l.shape[4]}) must match input depth for filter ${a.shape[3]}.`),T(Me(e,r),()=>`Error in conv3D: Either strides or dilations must be 1. Got strides ${e} and dilations '${r}'`),T(o==="NDHWC",()=>`Error in conv3d: got dataFormat of ${o} but only NDHWC is currently supported.`),T(ho(r),()=>"Error in conv3D: Dilated rates should be larger than 0."),T(ho(e),()=>"Error in conv3D: Strides should be larger than 0.");const u={x:l,filter:a},h={strides:e,pad:s,dataFormat:o,dilations:r},d=P.runKernel(Oa,u,h);return c?z(d,[d.shape[1],d.shape[2],d.shape[3],d.shape[4]]):d}const G$=W({conv3d_:U$});function H$(n,t,e,s,o){T(n.length===t.rank,()=>`Length of inShape (${n.length}) and rank of dy (${t.rank}) must match`);let r=n,i=t,a=!1;t.rank===4&&(a=!0,i=z(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]]),r=[1,n[0],n[1],n[2],n[3]]);const l=r[4],c=i.shape[4];T(r.length===5,()=>`Error in conv3dDerInput: inShape must be length 5, but got length ${r.length}.`),T(i.rank===5,()=>`Error in conv3dDerInput: dy must be rank 5, but got rank ${i.rank}`),T(e.rank===5,()=>`Error in conv3dDerInput: filter must be rank 5, but got rank ${e.rank}`),T(l===e.shape[3],()=>`Error in conv3dDerInput: depth of input (${l}) must match input depth for filter ${e.shape[3]}.`),T(c===e.shape[4],()=>`Error in conv3dDerInput: depth of output (${c}) must match output depth for filter ${e.shape[4]}.`);const u={dy:i,filter:e},h={pad:o,strides:s,inputShape:r},d=P.runKernel($u,u,h);return a?z(d,[d.shape[1],d.shape[2],d.shape[3],d.shape[4]]):d}const lm=W({conv3DBackpropInput_:H$});function q$(n,t,e,s,o){const r=D(n,"x","conv3dTranspose"),i=D(t,"filter","conv3dTranspose");return lm(e,r,i,s,o)}const X$=W({conv3dTranspose_:q$});function K$(n){const e={x:D(n,"x","cos","float32")};return P.runKernel(Pr,e)}const $h=W({cos_:K$});function j$(n){const e={x:D(n,"x","cosh","float32")};return P.runKernel(Br,e)}const cm=W({cosh_:j$});function Y$(n,t=0,e=!1,s=!1){const r={x:D(n,"x","cumprod")},i={axis:t,exclusive:e,reverse:s};return P.runKernel(Iu,r,i)}const Ih=W({cumprod_:Y$});function Z$(n,t=0,e=!1,s=!1){const r={x:D(n,"x","cumsum")},i={axis:t,exclusive:e,reverse:s};return P.runKernel(Ma,r,i)}const um=W({cumsum_:Z$});function Q$(n,t,e,s=!1){const o=D(n,"x","denseBincount"),r=D(t,"weights","denseBincount");T(o.dtype==="int32",()=>`Error in denseBincount: input dtype must be int32, but got ${o.dtype}`),T(o.rank<=2,()=>`Error in denseBincount: input must be at most rank 2, but got rank ${o.rank}.`),T(e>=0,()=>`size must be non-negative, but got ${e}.`),T(r.size===o.size||r.size===0,()=>`Error in denseBincount: weights must have the same shape as x or 0-length, but got x shape: ${o.shape}, weights shape: ${r.shape}.`);const i={x:o,weights:r},a={size:e,binaryOutput:s};return P.runKernel(ku,i,a)}const hm=W({denseBincount_:Q$});function J$(n,t,e="NHWC"){const s=D(n,"x","depthToSpace","float32"),o=e==="NHWC"?s.shape[1]:s.shape[2],r=e==="NHWC"?s.shape[2]:s.shape[3],i=e==="NHWC"?s.shape[3]:s.shape[1];T(t>1,()=>`blockSize should be > 1 for depthToSpace, but was: ${t}`),T(o*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${o} and ${t}  for depthToSpace with input shape
    ${s.shape}`),T(r*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${r} and ${t} for depthToSpace with input shape
        ${s.shape}`),T(i%(t*t)===0,()=>`Dimension size must be evenly divisible by ${t*t} but is ${i} for depthToSpace with input shape ${s.shape}`);const a={x:s},l={blockSize:t,dataFormat:e};return P.runKernel(Su,a,l)}const tI=W({depthToSpace_:J$});function eI(n,t,e,s,o="NHWC",r=[1,1],i){const a=D(n,"x","depthwiseConv2d","float32"),l=D(t,"filter","depthwiseConv2d","float32");let c=a,u=!1;a.rank===3&&(u=!0,c=z(a,[1,a.shape[0],a.shape[1],a.shape[2]])),T(c.rank===4,()=>`Error in depthwiseConv2d: input must be rank 4, but got rank ${c.rank}.`),T(l.rank===4,()=>`Error in depthwiseConv2d: filter must be rank 4, but got rank ${l.rank}.`);const h=o==="NHWC"?c.shape[3]:c.shape[1];T(h===l.shape[2],()=>`Error in depthwiseConv2d: number of input channels (${h}) must match the inChannels dimension in filter ${l.shape[2]}.`),Ye("depthwiseConv2d",s,i);const d={x:c,filter:l},p={strides:e,pad:s,dataFormat:o,dilations:r,dimRoundingMode:i},f=P.runKernel(La,d,p);return u?z(f,[f.shape[1],f.shape[2],f.shape[3]]):f}const vh=W({depthwiseConv2d_:eI});function nI(n,t,e,s,o=[1,1],r="NHWC"){const i=D(n,"x","dilation2d"),a=D(t,"filter","dilation2d");T(i.rank===3||i.rank===4,()=>`Error in dilation2d: input must be rank 3 or 4, but got rank ${i.rank}.`),T(a.rank===3,()=>`Error in dilation2d: filter must be rank 3, but got rank ${a.rank}.`),T(r==="NHWC",()=>`Error in dilation2d: Only NHWC is currently supported, but got dataFormat of ${r}`);let l=i,c=!1;i.rank===3&&(l=z(i,[1,i.shape[0],i.shape[1],i.shape[2]]),c=!0),T(l.shape[3]===a.shape[2],()=>`Error in dilation2d:  input and filter must have the same depth: ${l.shape[3]} vs ${a.shape[2]}`);const u={x:l,filter:a},h={strides:e,pad:s,dilations:o},d=P.runKernel(Pa,u,h);return c?z(d,[d.shape[1],d.shape[2],d.shape[3]]):d}const sI=W({dilation2d_:nI});function Zo(n,t){const e=n.length,s=[];for(let o=0;o<e;o++){const r=e-1-o,i=n[r]||1;(t[t.length-1-o]||1)>1&&i===1&&s.unshift(r)}return s}function fe(n,t){const e=[];for(let s=0;s<t.length;s++){const o=n[n.length-s-1],r=t.length-s-1,i=t[r];(o==null||o===1&&i>1)&&e.unshift(r)}return e}function $t(n,t){const e=Math.max(n.length,t.length),s=new Array(e);for(let o=0;o<e;o++){let r=n[n.length-o-1];r==null&&(r=1);let i=t[t.length-o-1];if(i==null&&(i=1),r===1)s[e-o-1]=i;else if(i===1)s[e-o-1]=r;else if(r!==i){const a=`Operands could not be broadcast together with shapes ${n} and ${t}.`;throw Error(a)}else s[e-o-1]=r}return s}function oI(n,t){let e=D(n,"a","equal","string_or_numeric"),s=D(t,"b","equal","string_or_numeric");[e,s]=re(e,s),$t(e.shape,s.shape);const o={a:e,b:s};return P.runKernel(Ba,o)}const Qn=W({equal_:oI});function rI(n,t,e){const s=D(t,"a","where"),o=D(e,"b","where"),r=D(n,"condition","where","bool"),i=$t($t(r.shape,s.shape),o.shape),a=Ai(r,i),l=Ai(s,i),c=Ai(o,i),u={condition:a,t:l,e:c};return P.runKernel(ml,u)}const Ue=W({where_:rI});function iI(n){const e={x:D(n,"x","zerosLike")};return P.runKernel(Il,e)}const Dt=W({zerosLike_:iI});function aI(n,t){let e=D(n,"a","div"),s=D(t,"b","div");[e,s]=re(e,s);const o=gt(e,s),r=Dt(o),i=Qn(s,r);return Ue(i,r,o)}const lI=W({divNoNan_:aI});function cI(n,t){const e=D(n,"t1","dot"),s=D(t,"t2","dot");T((e.rank===1||e.rank===2)&&(s.rank===1||s.rank===2),()=>`Error in dot: inputs must all be rank 1 or 2, but got ranks ${e.rank} and ${s.rank}.`);const o=e.rank===1?e.size:e.shape[1],r=s.rank===1?s.size:s.shape[0];if(T(o===r,()=>`Error in dot: inner dimensions of inputs must match, but got ${o} and ${r}.`),e.rank===1&&s.rank===1){const i=z(e,[1,-1]),a=z(s,[-1,1]),l=Bt(i,a);return z(l,[])}else if(e.rank===1&&s.rank===2){const i=z(e,[1,-1]),a=z(s,[s.shape[0],s.shape[1]]),l=Bt(i,a);return z(l,[l.size])}else if(e.rank===2&&s.rank===1){const i=z(s,[-1,1]),a=Bt(e,i);return z(a,[a.size])}else{const i=z(s,[s.shape[0],s.shape[1]]);return Bt(e,i)}}const uI=W({dot_:cI});function hI(n,...t){const e=t.map((o,r)=>D(o,`tensors${r}`,"einsum")),s={equation:n};return P.runKernel(Au,e,s)}const Di=W({einsum_:hI});function dI(n){const e={x:D(n,"x","elu","float32")};return P.runKernel(Vr,e)}const Ll=W({elu_:dI});function pI(n){let t=D(n,"x","erf");T(t.dtype==="int32"||t.dtype==="float32",()=>"Input dtype must be `int32` or `float32`."),t.dtype==="int32"&&(t=at(t,"float32"));const e={x:t};return P.runKernel(Wr,e)}const dm=W({erf_:pI});function kh(n,t){for(let e=0;e<n.length;++e)if(n[n.length-e-1]!==t-1-e)return!1;return!0}function pm(n,t,e){const s=n.length+t.length,o=[];let r=0,i=0;for(let a=0;a<s;a++)e.indexOf(a)===-1?o.push(n[r++]):o.push(t[i++]);return o}function $e(n,t){const e=[],s=n.length;for(let r=0;r<s;r++)t.indexOf(r)===-1&&e.push(n[r]);const o=t.map(r=>n[r]);return[e,o]}function he(n,t){const e=t.map(s=>1);return pm(n,e,t)}function Ne(n,t,e){T(kh(t,e),()=>`${n} supports only inner-most axes for now. Got axes ${t} and rank-${e} input.`)}function Jt(n,t){if(kh(n,t))return null;const e=[];for(let s=0;s<t;++s)n.indexOf(s)===-1&&e.push(s);return n.forEach(s=>e.push(s)),e}function Ms(n){return n.map((t,e)=>[e,t]).sort((t,e)=>t[1]-e[1]).map(t=>t[0])}function ie(n,t){const e=[];for(let s=t-n;s<t;++s)e.push(s);return e}function fI(n,t=null,e=!1){const o={x:D(n,"x","max")},r={reductionIndices:t,keepDims:e};return P.runKernel(Za,o,r)}const Pn=W({max_:fI});function mI(n,t=null,e=!1){const o={x:D(n,"x","min")},r={axis:t,keepDims:e};return P.runKernel(el,o,r)}const Pl=W({min_:mI});function gI(n,t){let e=D(n,"base","pow"),s=D(t,"exp","pow");[e,s]=re(e,s);const o={a:e,b:s};return P.runKernel(oi,o)}const fo=W({pow_:gI});function zt(n,t){if(($n(n)&&t!=="string"||Array.isArray(n))&&t!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(t==="string"&&$n(n)&&!(n instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return Dl(n,[],[],t)}function xI(n){const e={x:D(n,"x","sqrt","float32")};return P.runKernel(gi,e)}const Le=W({sqrt_:xI});function bI(n){const t=D(n,"x","square"),e={};return P.runKernel("Square",{x:t},e)}const jt=W({square_:bI});function yI(n,t=null,e=!1){let s=D(n,"x","sum");s.dtype==="bool"&&(s=at(s,"int32"));const o={x:s},r={axis:t,keepDims:e};return P.runKernel(xl,o,r)}const mt=W({sum_:yI});function wI(n,t="euclidean",e=null,s=!1){n=D(n,"x","norm");const o=fm(n,t,e);let r=o.shape;if(s){const i=vt(e,n.shape);r=he(o.shape,i)}return z(o,r)}function fm(n,t,e=null){if(n.rank===0)return We(n);if(n.rank!==1&&e===null)return fm(z(n,[-1]),t,e);if(n.rank===1||typeof e=="number"||Array.isArray(e)&&e.length===1){if(t===1)return mt(We(n),e);if(t===1/0)return Pn(We(n),e);if(t===-1/0)return Pl(We(n),e);if(t==="euclidean"||t===2)return Le(mt(fo(We(n),zt(2,"int32")),e));throw new Error(`Error in norm: invalid ord value: ${t}`)}if(Array.isArray(e)&&e.length===2){if(t===1)return Pn(mt(We(n),e[0]),e[1]-1);if(t===1/0)return Pn(mt(We(n),e[1]),e[0]);if(t===-1/0)return Pl(mt(We(n),e[1]),e[0]);if(t==="fro"||t==="euclidean")return Le(mt(jt(n),e));throw new Error(`Error in norm: invalid ord value: ${t}`)}throw new Error(`Error in norm: invalid axis: ${e}`)}const Bl=W({norm_:wI});function CI(n,t=null,e=!1){return Bl(n,"euclidean",t,e)}const $I=W({euclideanNorm_:CI});function II(n){const e={x:D(n,"x","exp")};return P.runKernel(Ur,e)}const Jn=W({exp_:II});function vI(n,t=0){const e=D(n,"x","expandDims","string_or_numeric");T(t<=e.rank,()=>"Axis must be <= rank of the tensor");const s={input:e},o={dim:t};return P.runKernel(za,s,o)}const Qe=W({expandDims_:vI});function kI(n){const e={x:D(n,"x","expm1")};return P.runKernel(Gr,e)}const SI=W({expm1_:kI});function NI(n,t){const e=D(n,"x","tile","string_or_numeric");T(e.rank===t.length,()=>`Error in transpose: rank of input ${e.rank} must match length of reps ${t}.`);const s={x:e},o={reps:t};return P.runKernel(Ci,s,o)}const Bn=W({tile_:NI});function TI(n,t,e,s="float32"){t==null&&(t=n);const o=kt([n,t],s),r=n<=t?n:t;for(let a=0;a<r;++a)o.set(1,a,a);const i=z(o.toTensor(),[n,t]);if(e==null)return i;if(e.length===1)return Bn(Qe(i,0),[e[0],1,1]);if(e.length===2)return Bn(Qe(Qe(i,0),0),[e[0],e[1],1,1]);if(e.length===3)return Bn(Qe(Qe(Qe(i,0),0),0),[e[0],e[1],e[2],1,1]);throw new Error(`eye() currently supports only 1D and 2D batchShapes, but received ${e.length}D.`)}const mm=W({eye_:TI});function EI(n){const e={x:D(n,"x","floor","float32")};return P.runKernel(Hr,e)}const zl=W({floor_:EI});function RI(n,t,e=0,s=0){const o=D(n,"x","gather"),r=D(t,"indices","gather","int32"),i={x:o,indices:r},a={axis:e,batchDims:s};return P.runKernel(Wa,i,a)}const Sh=W({gather_:RI});function AI(n,t){let e=D(n,"a","greater","string_or_numeric"),s=D(t,"b","greater","string_or_numeric");[e,s]=re(e,s),$t(e.shape,s.shape);const o={a:e,b:s};return P.runKernel(Ua,o)}const gn=W({greater_:AI});function DI(n,t){let e=D(n,"a","greaterEqual","string_or_numeric"),s=D(t,"b","greaterEqual","string_or_numeric");[e,s]=re(e,s),$t(e.shape,s.shape);const o={a:e,b:s};return P.runKernel(Xr,o)}const mo=W({greaterEqual_:DI});function FI(n){const e={input:D(n,"input","imag")};return P.runKernel(Lu,e)}const Nh=W({imag_:FI});function _I(n){const e={x:D(n,"x","isFinite")};return P.runKernel(jr,e)}const OI=W({isFinite_:_I});function MI(n){const e={x:D(n,"x","isInf")};return P.runKernel(Yr,e)}const LI=W({isInf_:MI});function PI(n){const e={x:D(n,"x","isNaN")};return P.runKernel(Zr,e)}const BI=W({isNaN_:PI});function zI(n,t=.2){const s={x:D(n,"x","leakyRelu")},o={alpha:t};return P.runKernel(Ga,s,o)}const Th=W({leakyRelu_:zI});function VI(n,t){let e=D(n,"a","less","string_or_numeric"),s=D(t,"b","less","string_or_numeric");[e,s]=re(e,s),$t(e.shape,s.shape);const o={a:e,b:s};return P.runKernel(Ha,o)}const Vl=W({less_:VI});function WI(n,t){let e=D(n,"a","lessEqual","string_or_numeric"),s=D(t,"b","lessEqual","string_or_numeric");[e,s]=re(e,s),$t(e.shape,s.shape);const o={a:e,b:s};return P.runKernel(qa,o)}const Qo=W({lessEqual_:WI});function UI(n,t=5,e=1,s=1,o=.5){const r=D(n,"x","localResponseNormalization");T(r.rank===4||r.rank===3,()=>`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank ${r.rank}.`),T(Bo(t),()=>`Error in localResponseNormalization: depthRadius must be an integer but got depthRadius ${t}.`);let i=r,a=!1;r.rank===3&&(a=!0,i=z(r,[1,r.shape[0],r.shape[1],r.shape[2]]));const l={x:i},c={depthRadius:t,bias:e,alpha:s,beta:o},u=P.runKernel(Ya,l,c);return a?z(u,[u.shape[1],u.shape[2],u.shape[3]]):u}const GI=W({localResponseNormalization_:UI});function HI(n){const e={x:D(n,"x","log","float32")};return P.runKernel(Qr,e)}const ts=W({log_:HI});function qI(n){const e={x:D(n,"x","log1p")};return P.runKernel(Jr,e)}const gm=W({log1p_:qI});function XI(n,t){T(iu(n),()=>"The f passed in variableGrads(f) must be a function"),T(t==null||Array.isArray(t)&&t.every(c=>c instanceof Rl),()=>"The varList passed in variableGrads(f, varList) must be an array of variables");const e=t!=null;if(!e){t=[];for(const c in P.registeredVariables)t.push(P.registeredVariables[c])}const s=e?t.filter(c=>!c.trainable):null,o=t.length;t=t.filter(c=>c.trainable),T(t.length>0,()=>`variableGrads() expects at least one of the input variables to be trainable, but none of the ${o} variables is trainable.`);const r=!0,{value:i,grads:a}=P.gradients(n,t,null,r);T(a.some(c=>c!=null),()=>"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."),T(i.rank===0,()=>`The f passed in variableGrads(f) must return a scalar, but it returned a rank-${i.rank} tensor`);const l={};return t.forEach((c,u)=>{a[u]!=null&&(l[c.name]=a[u])}),s!=null&&s.forEach(c=>l[c.name]=null),{value:i,grads:l}}function Jo(n){return P.customGrad(n)}function KI(n){const e={x:D(n,"x","neg")};return P.runKernel(sl,e)}const ae=W({neg_:KI});function jI(n){const e={x:D(n,"x","softplus")};return P.runKernel(mi,e)}const Fi=W({softplus_:jI});function YI(n){const t=D(n,"x","logSigmoid");return Jo(s=>({value:ae(Fi(ae(s))),gradFunc:i=>L(i,Yo(ae(s)))}))(t)}const ZI=W({logSigmoid_:YI});function QI(n,t){let e=D(n,"a","sub"),s=D(t,"b","sub");[e,s]=re(e,s);const o={a:e,b:s};return P.runKernel(bi,o)}const bt=W({sub_:QI});function JI(n,t=-1){const e=D(n,"logits","logSoftmax");if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank ${e.rank} and axis was ${t}`);return Jo((o,r)=>{const a=Pn(o,t,!0),l=bt(o,a),c=bt(at(l,"float32"),ts(mt(Jn(l),t,!0)));return r([c]),{value:c,gradFunc:(h,d)=>{const[p]=d,f=!0,m=Jn(p);return bt(h,L(mt(h,t,f),m))}}})(e)}const xm=W({logSoftmax_:JI});function tv(n,t=null,e=!1){const s=D(n,"x","logSumExp"),o=vt(t,s.shape),r=Pn(s,o,!0),i=bt(s,r),a=Jn(i),l=mt(a,o),c=ts(l),u=tt(z(r,c.shape),c);if(e){const h=he(u.shape,o);return z(u,h)}return u}const bm=W({logSumExp_:tv});function ev(n,t){const e=D(n,"a","logicalAnd","bool"),s=D(t,"b","logicalAnd","bool");$t(e.shape,s.shape);const o={a:e,b:s};return P.runKernel(Xa,o)}const gs=W({logicalAnd_:ev});function nv(n){const e={x:D(n,"x","logicalNot","bool")};return P.runKernel(Ka,e)}const Eh=W({logicalNot_:nv});function sv(n,t){const e=D(n,"a","logicalOr","bool"),s=D(t,"b","logicalOr","bool");$t(e.shape,s.shape);const o={a:e,b:s};return P.runKernel(ja,o)}const ym=W({logicalOr_:sv});function ov(n,t){const e=D(n,"a","logicalXor","bool"),s=D(t,"b","logicalXor","bool");return $t(e.shape,s.shape),gs(ym(n,t),Eh(gs(n,t)))}const rv=W({logicalXor_:ov});function iv(n,t,e,s,o){const r=D(n,"x","maxPool"),i=1;let a=r,l=!1;r.rank===3&&(l=!0,a=z(r,[1,r.shape[0],r.shape[1],r.shape[2]])),T(a.rank===4,()=>`Error in maxPool: input must be rank 4 but got rank ${a.rank}.`),T(Me(e,i),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${e} and dilations '${i}'`),Ye("maxPool",s,o);const c={x:a},u={filterSize:t,strides:e,pad:s,dimRoundingMode:o},h=P.runKernel(Qa,c,u);return l?z(h,[h.shape[1],h.shape[2],h.shape[3]]):h}const Rh=W({maxPool_:iv});function av(n,t=[1,1,1],e,s,o,r="NDHWC"){const i=D(n,"x","maxPool3d");let a=i,l=!1;i.rank===4&&(l=!0,a=z(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]])),T(a.rank===5,()=>`Error in maxPool3d: x must be rank 5 but got rank ${a.rank}.`),T(r==="NDHWC",()=>`Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of ${r}`),Ye("maxPool3d",s,o);const c={x:a},u={filterSize:t,strides:e,pad:s,dimRoundingMode:o,dataFormat:r},h=P.runKernel(Ja,c,u);return l?z(h,[h.shape[1],h.shape[2],h.shape[3],h.shape[4]]):h}const lv=W({maxPool3d_:av});function cv(n,t){let e=D(n,"a","maximum"),s=D(t,"b","maximum");[e,s]=re(e,s),e.dtype==="bool"&&(e=at(e,"int32"),s=at(s,"int32")),$t(e.shape,s.shape);const o={a:e,b:s};return P.runKernel(ti,o)}const Ls=W({maximum_:cv});function uv(n,t=null,e=!1){const o={x:D(n,"x","mean")},r={axis:t,keepDims:e};return P.runKernel(tl,o,r)}const de=W({mean_:uv});function Ie(n,t="float32"){if(ds(n),t==="complex64"){const s=Ie(n,"float32"),o=Ie(n,"float32");return Xo(s,o)}const e=Oe(K(n),t);return P.makeTensor(e,n,t)}function Ps(n,t="float32"){if(ds(n),t==="complex64"){const s=Ps(n,"float32"),o=Ie(n,"float32");return Xo(s,o)}const e=lu(K(n),t);return P.makeTensor(e,n,t)}function hv(n,t){let e=D(n,"a","minimum"),s=D(t,"b","minimum");[e,s]=re(e,s),e.dtype==="bool"&&(e=at(e,"int32"),s=at(s,"int32")),$t(e.shape,s.shape);const o={a:e,b:s};return P.runKernel(ei,o)}const _i=W({minimum_:hv});function dv(n,t,e){T(e==="reflect"||e==="symmetric",()=>`Invalid mode. Mode must be either reflect or symmetric. Got ${e}.`);const s=D(n,"x","mirrorPad");if(s.rank===0)throw new Error("mirrorPad(scalar) is not defined. Pass non-scalar to mirrorPad");T(t.length===s.rank,()=>`Padding doesn't match input. Must be ${s.rank}. Got ${t.length}.`);const o=e==="reflect"?1:0;for(let a=0;a<s.rank;a++)T(t[a].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),T(t[a][0]>=0&&t[a][0]<=s.shape[a]-o&&t[a][1]>=0&&t[a][1]<=s.shape[a]-o,()=>`Padding in dimension ${a} cannot be greater than or equal to ${s.shape[a]-o} or less than 0 for input of shape ${s.shape}`);const r={paddings:t,mode:e},i={x:s};return P.runKernel(nl,i,r)}const pv=W({mirrorPad_:dv});function fv(n,t){let e=D(n,"a","mod"),s=D(t,"b","mod");[e,s]=re(e,s);const o={a:e,b:s};return P.runKernel(ni,o)}const mv=W({mod_:fv});function gv(n,t=null,e=!1){n=D(n,"x","moments");const s=vt(t,n.shape),o=de(n,s,e);let r=o.shape;e||(r=he(o.shape,s));const i=jt(bt(at(n,"float32"),z(o,r))),a=de(i,s,e);return{mean:o,variance:a}}const Ah=W({moments_:gv});function xv(n,t){let e=D(n,"a","notEqual","string_or_numeric"),s=D(t,"b","notEqual","string_or_numeric");[e,s]=re(e,s),$t(e.shape,s.shape);const o={a:e,b:s};return P.runKernel(ol,o)}const Wl=W({notEqual_:xv});function bv(n,t,e=1,s=0,o="int32"){if(t<2)throw new Error(`Error in oneHot: depth must be >=2, but it is ${t}`);const i={indices:D(n,"indices","oneHot","int32")},a={dtype:o,depth:t,onValue:e,offValue:s};return P.runKernel(il,i,a)}const wm=W({oneHot_:bv});function yv(n){const e={x:D(n,"x","onesLike")};return P.runKernel(rl,e)}const vn=W({onesLike_:yv});function wv(n,t,e=0){const s=D(n,"x","pad");if(s.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");const o={paddings:t,constantValue:e},r={x:s};return P.runKernel(ll,r,o)}const Dh=W({pad_:wv});function Cv(n,t,e){const s=D(n,"x","spaceToBatchND");T(s.rank>=1+t.length,()=>`input rank ${s.rank} should be > than [blockShape] ${t.length}`),T(e.length===t.length,()=>`paddings.shape[0] ${e.length} must be equal to [blockShape] ${t.length}`),T(s.shape.reduce((i,a,l)=>l>0&&l<=t.length?i&&(a+e[l-1][0]+e[l-1][1])%t[l-1]===0:i,!0),()=>`input spatial dimensions ${s.shape.slice(1)} with paddings ${e.toString()} must be divisible by blockShapes ${t.toString()}`);const o={x:s},r={blockShape:t,paddings:e};return P.runKernel(bl,o,r)}const Fh=W({spaceToBatchND_:Cv});function $v(n,t,e,s,o,r,i){o==null&&(o=[1,1]),r==null&&(r=1),s===0&&(s="valid");const a=D(n,"x","maxPool");let l=a,c=!1;a.rank===3&&(c=!0,l=z(a,[1,a.shape[0],a.shape[1],a.shape[2]])),T(Me(r,o),()=>`Error in pool: Either strides or dilations must be 1. Got strides ${r} and dilations '${o}'`);const u=In(l.shape,t,r,o,s),h=[u.dilationHeight,u.dilationWidth];let d;s==="same"?d=vv([u.filterHeight,u.filterWidth],h):d=[[0,0],[0,0]];const p=h[0]===1&&h[1]===1,[f,m]=Iv([u.inHeight,u.inWidth],h,d),g=p?s:"valid",x=p?l:Fh(l,h,f),w=(e==="avg"?()=>yh(x,t,r,g,i):()=>Rh(x,t,r,g,i))(),y=p?w:wh(w,h,m);return c?z(y,[y.shape[1],y.shape[2],y.shape[3]]):y}function Iv(n,t,e){const s=e.map(u=>u[0]),o=e.map(u=>u[1]),r=n.concat(s,o),i=t.map((u,h)=>(u-r[h]%u)%u),a=o.map((u,h)=>u+i[h]),l=t.map((u,h)=>[s[h],a[h]]),c=t.map((u,h)=>[0,i[h]]);return[l,c]}function vv(n,t){const s=n.map((i,a)=>i+(i-1)*(t[a]-1)).map(i=>i-1),o=s.map(i=>Math.floor(i/2)),r=s.map((i,a)=>i-o[a]);return s.map((i,a)=>[o[a],r[a]])}const kv=W({pool_:$v});function Sv(n,t){const e=D(n,"x","prelu"),s=D(t,"alpha","prelu"),o={x:e,alpha:s};return P.runKernel(cl,o)}const _h=W({prelu_:Sv});function Nv(n,t=null,e=!1){let s=D(n,"x","prod");s.dtype==="bool"&&(s=at(s,"int32"));const o={x:s},r={axis:t,keepDims:e};return P.runKernel(ul,o,r)}const Tv=W({prod_:Nv});var Ul={exports:{}},Ev=Ul.exports,Cm;function Rv(){return Cm||(Cm=1,(function(n){(function(t,e,s){function o(l){var c=this,u=a();c.next=function(){var h=2091639*c.s0+c.c*23283064365386963e-26;return c.s0=c.s1,c.s1=c.s2,c.s2=h-(c.c=h|0)},c.c=1,c.s0=u(" "),c.s1=u(" "),c.s2=u(" "),c.s0-=u(l),c.s0<0&&(c.s0+=1),c.s1-=u(l),c.s1<0&&(c.s1+=1),c.s2-=u(l),c.s2<0&&(c.s2+=1),u=null}function r(l,c){return c.c=l.c,c.s0=l.s0,c.s1=l.s1,c.s2=l.s2,c}function i(l,c){var u=new o(l),h=c&&c.state,d=u.next;return d.int32=function(){return u.next()*4294967296|0},d.double=function(){return d()+(d()*2097152|0)*11102230246251565e-32},d.quick=d,h&&(typeof h=="object"&&r(h,u),d.state=function(){return r(u,{})}),d}function a(){var l=4022871197,c=function(u){u=String(u);for(var h=0;h<u.length;h++){l+=u.charCodeAt(h);var d=.02519603282416938*l;l=d>>>0,d-=l,d*=l,l=d>>>0,d-=l,l+=d*4294967296}return(l>>>0)*23283064365386963e-26};return c}e&&e.exports?e.exports=i:this.alea=i})(Ev,n)})(Ul)),Ul.exports}var Gl={exports:{}},Av=Gl.exports,$m;function Dv(){return $m||($m=1,(function(n){(function(t,e,s){function o(a){var l=this,c="";l.x=0,l.y=0,l.z=0,l.w=0,l.next=function(){var h=l.x^l.x<<11;return l.x=l.y,l.y=l.z,l.z=l.w,l.w^=l.w>>>19^h^h>>>8},a===(a|0)?l.x=a:c+=a;for(var u=0;u<c.length+64;u++)l.x^=c.charCodeAt(u)|0,l.next()}function r(a,l){return l.x=a.x,l.y=a.y,l.z=a.z,l.w=a.w,l}function i(a,l){var c=new o(a),u=l&&l.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var d=c.next()>>>11,p=(c.next()>>>0)/4294967296,f=(d+p)/(1<<21);while(f===0);return f},h.int32=c.next,h.quick=h,u&&(typeof u=="object"&&r(u,c),h.state=function(){return r(c,{})}),h}e&&e.exports?e.exports=i:this.xor128=i})(Av,n)})(Gl)),Gl.exports}var Hl={exports:{}},Fv=Hl.exports,Im;function _v(){return Im||(Im=1,(function(n){(function(t,e,s){function o(a){var l=this,c="";l.next=function(){var h=l.x^l.x>>>2;return l.x=l.y,l.y=l.z,l.z=l.w,l.w=l.v,(l.d=l.d+362437|0)+(l.v=l.v^l.v<<4^(h^h<<1))|0},l.x=0,l.y=0,l.z=0,l.w=0,l.v=0,a===(a|0)?l.x=a:c+=a;for(var u=0;u<c.length+64;u++)l.x^=c.charCodeAt(u)|0,u==c.length&&(l.d=l.x<<10^l.x>>>4),l.next()}function r(a,l){return l.x=a.x,l.y=a.y,l.z=a.z,l.w=a.w,l.v=a.v,l.d=a.d,l}function i(a,l){var c=new o(a),u=l&&l.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var d=c.next()>>>11,p=(c.next()>>>0)/4294967296,f=(d+p)/(1<<21);while(f===0);return f},h.int32=c.next,h.quick=h,u&&(typeof u=="object"&&r(u,c),h.state=function(){return r(c,{})}),h}e&&e.exports?e.exports=i:this.xorwow=i})(Fv,n)})(Hl)),Hl.exports}var ql={exports:{}},Ov=ql.exports,vm;function Mv(){return vm||(vm=1,(function(n){(function(t,e,s){function o(a){var l=this;l.next=function(){var u=l.x,h=l.i,d,p;return d=u[h],d^=d>>>7,p=d^d<<24,d=u[h+1&7],p^=d^d>>>10,d=u[h+3&7],p^=d^d>>>3,d=u[h+4&7],p^=d^d<<7,d=u[h+7&7],d=d^d<<13,p^=d^d<<9,u[h]=p,l.i=h+1&7,p};function c(u,h){var d,p=[];if(h===(h|0))p[0]=h;else for(h=""+h,d=0;d<h.length;++d)p[d&7]=p[d&7]<<15^h.charCodeAt(d)+p[d+1&7]<<13;for(;p.length<8;)p.push(0);for(d=0;d<8&&p[d]===0;++d);for(d==8?p[7]=-1:p[d],u.x=p,u.i=0,d=256;d>0;--d)u.next()}c(l,a)}function r(a,l){return l.x=a.x.slice(),l.i=a.i,l}function i(a,l){a==null&&(a=+new Date);var c=new o(a),u=l&&l.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var d=c.next()>>>11,p=(c.next()>>>0)/4294967296,f=(d+p)/(1<<21);while(f===0);return f},h.int32=c.next,h.quick=h,u&&(u.x&&r(u,c),h.state=function(){return r(c,{})}),h}e&&e.exports?e.exports=i:this.xorshift7=i})(Ov,n)})(ql)),ql.exports}var Xl={exports:{}},Lv=Xl.exports,km;function Pv(){return km||(km=1,(function(n){(function(t,e,s){function o(a){var l=this;l.next=function(){var u=l.w,h=l.X,d=l.i,p,f;return l.w=u=u+1640531527|0,f=h[d+34&127],p=h[d=d+1&127],f^=f<<13,p^=p<<17,f^=f>>>15,p^=p>>>12,f=h[d]=f^p,l.i=d,f+(u^u>>>16)|0};function c(u,h){var d,p,f,m,g,x=[],b=128;for(h===(h|0)?(p=h,h=null):(h=h+"\0",p=0,b=Math.max(b,h.length)),f=0,m=-32;m<b;++m)h&&(p^=h.charCodeAt((m+32)%h.length)),m===0&&(g=p),p^=p<<10,p^=p>>>15,p^=p<<4,p^=p>>>13,m>=0&&(g=g+1640531527|0,d=x[m&127]^=p+g,f=d==0?f+1:0);for(f>=128&&(x[(h&&h.length||0)&127]=-1),f=127,m=512;m>0;--m)p=x[f+34&127],d=x[f=f+1&127],p^=p<<13,d^=d<<17,p^=p>>>15,d^=d>>>12,x[f]=p^d;u.w=g,u.X=x,u.i=f}c(l,a)}function r(a,l){return l.i=a.i,l.w=a.w,l.X=a.X.slice(),l}function i(a,l){a==null&&(a=+new Date);var c=new o(a),u=l&&l.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var d=c.next()>>>11,p=(c.next()>>>0)/4294967296,f=(d+p)/(1<<21);while(f===0);return f},h.int32=c.next,h.quick=h,u&&(u.X&&r(u,c),h.state=function(){return r(c,{})}),h}e&&e.exports?e.exports=i:this.xor4096=i})(Lv,n)})(Xl)),Xl.exports}var Kl={exports:{}},Bv=Kl.exports,Sm;function zv(){return Sm||(Sm=1,(function(n){(function(t,e,s){function o(a){var l=this,c="";l.next=function(){var h=l.b,d=l.c,p=l.d,f=l.a;return h=h<<25^h>>>7^d,d=d-p|0,p=p<<24^p>>>8^f,f=f-h|0,l.b=h=h<<20^h>>>12^d,l.c=d=d-p|0,l.d=p<<16^d>>>16^f,l.a=f-h|0},l.a=0,l.b=0,l.c=-1640531527,l.d=1367130551,a===Math.floor(a)?(l.a=a/4294967296|0,l.b=a|0):c+=a;for(var u=0;u<c.length+20;u++)l.b^=c.charCodeAt(u)|0,l.next()}function r(a,l){return l.a=a.a,l.b=a.b,l.c=a.c,l.d=a.d,l}function i(a,l){var c=new o(a),u=l&&l.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var d=c.next()>>>11,p=(c.next()>>>0)/4294967296,f=(d+p)/(1<<21);while(f===0);return f},h.int32=c.next,h.quick=h,u&&(typeof u=="object"&&r(u,c),h.state=function(){return r(c,{})}),h}e&&e.exports?e.exports=i:this.tychei=i})(Bv,n)})(Kl)),Kl.exports}var jl={exports:{}},Vv={},Wv=Object.freeze({__proto__:null,default:Vv}),Uv=Mw(Wv),Gv=jl.exports,Nm;function Hv(){return Nm||(Nm=1,(function(n){(function(t,e,s){var o=256,r=6,i=52,a="random",l=s.pow(o,r),c=s.pow(2,i),u=c*2,h=o-1,d;function p(y,C,I){var v=[];C=C==!0?{entropy:!0}:C||{};var N=x(g(C.entropy?[y,w(e)]:y==null?b():y,3),v),S=new f(v),k=function(){for(var $=S.g(r),E=l,R=0;$<c;)$=($+R)*o,E*=o,R=S.g(1);for(;$>=u;)$/=2,E/=2,R>>>=1;return($+R)/E};return k.int32=function(){return S.g(4)|0},k.quick=function(){return S.g(4)/4294967296},k.double=k,x(w(S.S),e),(C.pass||I||function($,E,R,A){return A&&(A.S&&m(A,S),$.state=function(){return m(S,{})}),R?(s[a]=$,E):$})(k,N,"global"in C?C.global:this==s,C.state)}function f(y){var C,I=y.length,v=this,N=0,S=v.i=v.j=0,k=v.S=[];for(I||(y=[I++]);N<o;)k[N]=N++;for(N=0;N<o;N++)k[N]=k[S=h&S+y[N%I]+(C=k[N])],k[S]=C;(v.g=function($){for(var E,R=0,A=v.i,F=v.j,_=v.S;$--;)E=_[A=h&A+1],R=R*o+_[h&(_[A]=_[F=h&F+E])+(_[F]=E)];return v.i=A,v.j=F,R})(o)}function m(y,C){return C.i=y.i,C.j=y.j,C.S=y.S.slice(),C}function g(y,C){var I=[],v=typeof y,N;if(C&&v=="object")for(N in y)try{I.push(g(y[N],C-1))}catch(S){}return I.length?I:v=="string"?y:y+"\0"}function x(y,C){for(var I=y+"",v,N=0;N<I.length;)C[h&N]=h&(v^=C[h&N]*19)+I.charCodeAt(N++);return w(C)}function b(){try{var y;return d&&(y=d.randomBytes)?y=y(o):(y=new Uint8Array(o),(t.crypto||t.msCrypto).getRandomValues(y)),w(y)}catch(v){var C=t.navigator,I=C&&C.plugins;return[+new Date,t,I,t.screen,w(e)]}}function w(y){return String.fromCharCode.apply(0,y)}if(x(s.random(),e),n.exports){n.exports=p;try{d=Uv}catch(y){}}else s["seed"+a]=p})(typeof self!="undefined"?self:Gv,[],Math)})(jl)),jl.exports}var Oh,Tm;function qv(){if(Tm)return Oh;Tm=1;var n=Rv(),t=Dv(),e=_v(),s=Mv(),o=Pv(),r=zv(),i=Hv();return i.alea=n,i.xor128=t,i.xorwow=e,i.xorshift7=s,i.xor4096=o,i.tychei=r,Oh=i,Oh}var Mh=qv();class Em{constructor(t,e,s,o,r){this.mean=t,this.stdDev=e,this.dtype=s,this.nextVal=NaN,this.truncated=o,this.truncated&&(this.upper=this.mean+this.stdDev*2,this.lower=this.mean-this.stdDev*2);const i=r||Math.random();this.random=Mh.alea(i.toString())}nextValue(){if(!isNaN(this.nextVal)){const o=this.nextVal;return this.nextVal=NaN,o}let t,e,s=!1;for(;!s;){let o,r,i;do o=2*this.random()-1,r=2*this.random()-1,i=o*o+r*r;while(i>=1||i===0);const a=Math.sqrt(-2*Math.log(i)/i);t=this.mean+this.stdDev*o*a,e=this.mean+this.stdDev*r*a,(!this.truncated||this.isValidTruncated(t))&&(s=!0)}return(!this.truncated||this.isValidTruncated(e))&&(this.nextVal=this.convertValue(e)),this.convertValue(t)}convertValue(t){return this.dtype==null||this.dtype==="float32"?t:Math.round(t)}isValidTruncated(t){return t<=this.upper&&t>=this.lower}}class Xv{constructor(t=0,e=1,s,o){if(this.canReturnFloat=()=>this.dtype==null||this.dtype==="float32",this.min=t,this.range=e-t,this.dtype=s,o==null&&(o=Math.random()),typeof o=="number"&&(o=o.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error(`The difference between ${t} - ${e} <= 1 and dtype is not float`);this.random=Mh.alea(o)}convertValue(t){return this.canReturnFloat()?t:Math.round(t)}nextValue(){return this.convertValue(this.min+this.range*this.random())}}function Kv(n,t=0,e=1,s,o){if(ds(n),s!=null&&s==="bool")throw new Error(`Unsupported data type ${s}`);const r=new Em(t,e,s,!1,o),i=kt(n,s);for(let a=0;a<i.values.length;a++)i.values[a]=r.nextValue();return i.toTensor()}const jv=W({randomNormal_:Kv});function Yv(n,t=0,e=1,s="float32",o){ds(n);const r=kt(n,s),i=new Xv(t,e,null,o);for(let a=0;a<r.values.length;a++)r.values[a]=i.nextValue();return r.toTensor()}const Oi=W({randomUniform_:Yv});function Mi(n,t,e=1,s="float32"){if(e===0)throw new Error("Cannot have a step of zero");const o={start:n,stop:t,step:e,dtype:s};return P.runKernel(Gu,{},o)}function Zv(n){const e={input:D(n,"input","real")};return P.runKernel(Hu,e)}const Yl=W({real_:Zv});function Qv(n){const e={x:D(n,"x","reciprocal")};return P.runKernel(ri,e)}const Jv=W({reciprocal_:Qv});function tk(n){const e={x:D(n,"x","relu")};return P.runKernel(ii,e)}const go=W({relu_:tk});function ek(n){const e={x:D(n,"x","relu6")};return P.runKernel(ai,e)}const Rm=W({relu6_:ek});function nk(n,t){const s={x:D(n,"x","reverse")},o={dims:t};return P.runKernel(fl,s,o)}const xo=W({reverse_:nk});function sk(n){const e={x:D(n,"x","round")};return P.runKernel(li,e)}const Am=W({round_:sk});function ok(n){const e={x:D(n,"x","rsqrt","float32")};return P.runKernel(ci,e)}const Dm=W({rsqrt_:ok});function rk(n){const e={x:D(n,"x","selu")};return P.runKernel(ui,e)}const Fm=W({selu_:rk});function ik(n,t,e,s,o,r=[1,1],i="NHWC"){const a=D(n,"x","separableConv2d"),l=D(t,"depthwiseFilter","separableConv2d"),c=D(e,"pointwiseFilter","separableConv2d");let u=a,h=!1;if(a.rank===3&&(h=!0,u=z(a,[1,a.shape[0],a.shape[1],a.shape[2]])),i==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");T(u.rank===4,()=>`Error in separableConv2d: input must be rank 4, but got rank ${u.rank}.`),T(l.rank===4,()=>`Error in separableConv2d: depthwise filter must be rank 4, but got rank ${l.rank}.`),T(c.rank===4,()=>`Error in separableConv2d: pointwise filter must be rank 4, but got rank ${l.rank}.`),T(c.shape[0]===1,()=>`Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ${c.shape[0]}.`),T(c.shape[1]===1,()=>`Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ${c.shape[1]}.`);const d=l.shape[2],p=l.shape[3];T(c.shape[2]===d*p,()=>`Error in separableConv2d: the third dimension of pointwise filter must be ${d*p}, but got ${c.shape[2]}.`);const f=vh(u,l,s,o,i,r),g=po(f,c,1,"valid",i);return h?z(g,[g.shape[1],g.shape[2],g.shape[3]]):g}const _m=W({separableConv2d_:ik});function ak(n){const e={x:D(n,"x","sign")};return P.runKernel(pi,e)}const lk=W({sign_:ak});function ck(n){const e={x:D(n,"x","sin","float32")};return P.runKernel(hi,e)}const Om=W({sin_:ck});function uk(n){const e={x:D(n,"x","sinh")};return P.runKernel(di,e)}const Mm=W({sinh_:uk});function hk(n,t,e){const s=D(n,"x","slice1d");return T(s.rank===1,()=>`slice1d expects a rank-1 tensor, but got a rank-${s.rank} tensor`),Xt(s,[t],[e])}const Lh=W({slice1d_:hk});function dk(n,t,e){const s=D(n,"x","slice2d");return T(s.rank===2,()=>`slice2d expects a rank-2 tensor, but got a rank-${s.rank} tensor`),Xt(s,t,e)}const Lm=W({slice2d_:dk});function pk(n,t,e){const s=D(n,"x","slice3d");return T(s.rank===3,()=>`slice3d expects a rank-3 tensor, but got a rank-${s.rank} tensor`),Xt(s,t,e)}const Ph=W({slice3d_:pk});function fk(n,t,e){const s=D(n,"x","slice4d");return T(s.rank===4,()=>`slice4d expects a rank-4 tensor, but got a rank-${s.rank} tensor`),Xt(s,t,e)}const Zl=W({slice4d_:fk});function mk(n,t=-1){const e=D(n,"logits","softmax","float32");if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${e.rank} and dim was ${t}`);const s={logits:e},o={dim:t};return P.runKernel(wl,s,o)}const Bh=W({softmax_:mk});function gk(n){T(n.dtype==="complex64",()=>`The dtype for tf.spectral.fft() must be complex64 but got ${n.dtype}.`);const t={input:n};return P.runKernel(Fu,t)}const Pm=W({fft_:gk});function xk(n){T(n.dtype==="complex64",()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${n.dtype}.`);const t={input:n};return P.runKernel(Mu,t)}const zh=W({ifft_:xk});function bk(n){const t=n.shape[n.shape.length-1],e=n.size/t;let s;if(t<=2){const o=z(n,[e,t]);s=zh(o)}else{const o=[e,2*(t-1)],r=z(Yl(n),[e,t]),i=z(Nh(n),[e,t]),a=xo(Xt(r,[0,1],[e,t-2]),1),l=L(xo(Xt(i,[0,1],[e,t-2]),1),zt(-1)),c=Ze([r,a],1),u=Ze([i,l],1),h=z(Xo(c,u),[o[0],o[1]]);s=zh(h)}if(s=Yl(s),n.rank===3&&n.shape[0]!==0){const o=s,r=n.shape[0];s=z(s,[r,s.shape[0]/r,s.shape[1]]),o.dispose()}return s}const yk=W({irfft_:bk});function wk(n,t,e=0){const o={x:D(n,"x","split")},r={numOrSizeSplits:t,axis:e};return P.runKernel(yl,o,r)}const xn=W({split_:wk});function Ck(n,t){T(n.dtype==="float32",()=>`The dtype for rfft() must be real value but got ${n.dtype}`);let e=n.shape[n.shape.length-1];const s=n.size/e;let o;if(t!=null&&t<e){const f=n.shape.map(g=>0),m=n.shape.map(g=>g);m[n.shape.length-1]=t,o=Xt(n,f,m),e=t}else if(t!=null&&t>e){const f=n.shape.map(m=>m);f[n.shape.length-1]=t-e,o=Ze([n,Ie(f)],n.shape.length-1),e=t}else o=n;const r=Dt(o),i=z(Xo(o,r),[s,e]),a=Pm(i),l=Math.floor(e/2)+1,c=Yl(a),u=Nh(a),h=xn(c,[l,e-l],c.shape.length-1),d=xn(u,[l,e-l],u.shape.length-1),p=o.shape.slice();return p[o.shape.length-1]=l,z(Xo(h[0],d[0]),p)}const $k=W({rfft_:Ck});function Ik(n,t){let e=D(n,"a","squaredDifference"),s=D(t,"b","squaredDifference");[e,s]=re(e,s),$t(e.shape,s.shape);const o={a:e,b:s},r={};return P.runKernel(xi,o,r)}const vk=W({squaredDifference_:Ik});function kk(n,t){const e=D(n,"x","squeeze","string_or_numeric");return z(e,Ts(e.shape,t).newShape)}const Li=W({squeeze_:kk});function Sk(n,t=0){const e=Wf(n,"tensors","stack","string_or_numeric");T(e.length>=1,()=>"Pass at least one tensor to tf.stack"),e.length>0&&T(t<=e[0].rank,()=>"Axis must be <= rank of the tensor");const s=e,o={axis:t};return P.runKernel(al,s,o)}const xs=W({stack_:Sk});function Nk(n,t=0){const s={x:D(n,"x","step")},o={alpha:t};return P.runKernel($i,s,o)}const Pi=W({step_:Nk});function Tk(n,t,e,s,o=0,r=0,i=0,a=0,l=0){const u={x:D(n,"x","stridedSlice","string_or_numeric")},h={begin:t,end:e,strides:s,beginMask:o,endMask:r,ellipsisMask:i,newAxisMask:a,shrinkAxisMask:l};return P.runKernel(Yu,u,h)}const Ek=W({stridedSlice_:Tk});function Rk(n){const e={x:D(n,"x","tan","float32")};return P.runKernel(yi,e)}const Ak=W({tan_:Rk});function rn(n,t){zp(n);const e=Al(n,t);if(e.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return Dl(n,null,e,t)}function Vh(n,t,e){if(zp(n),t!=null&&t.length!==2)throw new Error("tensor2d() requires shape to have two numbers");const s=Al(n,e);if(s.length!==2&&s.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(s.length===1&&t==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return Dl(n,t,s,e)}function bo(n,t,e){const s=t.shape.length,o=s>1?t.shape[s-1]:1,r=e.length;let i=1;for(let h=o;h<r;++h)i*=e[h];const a=o<1?1:o,l=K(t.shape)/a,c=[...ft(e.slice(0,o)),1],u=K(e);return{sliceRank:o,numUpdates:l,sliceSize:i,strides:c,outputSize:u}}function Dk(n,t=1,e=!0){const s=D(n,"x","topk");if(s.rank===0)throw new Error("topk() expects the input to be of rank 1 or higher");const o=s.shape[s.shape.length-1];if(t<0)throw new Error(`'k' passed to topk() must be >= 0 but got ${t}`);if(t>o)throw new Error(`'k' passed to topk() must be <= the last dimension (${o}) but got ${t}`);const r={x:s},i={k:t,sorted:e},[a,l]=P.runKernel(Zu,r,i);return{values:a,indices:l}}const Fk=W({topk_:Dk});function _k(n,t=0,e=1,s,o){if(ds(n),s!=null&&s==="bool")throw new Error("Unsupported data type $ { dtype }");const r=new Em(t,e,s,!0,o),i=kt(n,s);for(let a=0;a<i.values.length;a++)i.values[a]=r.nextValue();return i.toTensor()}const Bm=W({truncatedNormal_:_k});function Ok(n,t=0){const e=D(n,"x","unique","string_or_numeric");T(e.rank>0,()=>"The input tensor must be at least 1D");const s={x:e},o={axis:t},[r,i]=P.runKernel(Ju,s,o);return{values:r,indices:i}}const Mk=W({unique_:Ok});function Lk(n,t,e){const s=D(n,"x","unsortedSegmentSum"),o=D(t,"segmentIds","unsortedSegmentSum","int32");T(Bo(e),()=>"numSegments must be of dtype int");const r={x:s,segmentIds:o},i={numSegments:e};return P.runKernel($l,r,i)}const zm=W({unsortedSegmentSum_:Lk});function Pk(n,t=0){const e=D(n,"x","unstack","string_or_numeric");T(t>=-e.shape.length&&t<e.shape.length,()=>`Axis = ${t} is not in [-${e.shape.length}, ${e.shape.length})`);const s={value:e},o={axis:t};return P.runKernel(Cl,s,o)}const yo=W({unstack_:Pk});function Bk(n,t=!0,e,s){return P.makeVariable(n,t,e,s)}function Vm(n,t){const e=[];for(let r=0;r<t.length;r++)t[r]&&e.push(r);const s=kt(n,"int32"),o=kt([e.length,n.length],"int32");for(let r=0;r<e.length;r++){const i=s.indexToLoc(e[r]),a=r*n.length;o.values.set(i,a)}return o.toTensor()}function zk(n,t,e){const s=D(n,"x","transpose");if(t==null&&(t=s.shape.map((i,a)=>a).reverse()),T(s.rank===t.length,()=>`Error in transpose: rank of input ${s.rank} must match length of perm ${t}.`),t.forEach(i=>{T(i>=0&&i<s.rank,()=>`All entries in 'perm' must be between 0 and ${s.rank-1} but got ${t}`)}),s.rank<=1)return s.clone();const o={x:s},r={perm:t};return s.dtype==="complex64"?U(()=>{let i=Yl(s),a=Nh(s);return i=P.runKernel(Go,{x:i},r),a=P.runKernel(Go,{x:a},r),e&&(a=ae(a)),Xo(i,a)}):P.runKernel(Go,o,r)}const Ft=W({transpose_:zk});function Vk(n,t){if(t==null)return n.shape.slice();if(Pt(n.shape,t))return t;if(n.shape.length===t.length){const e=[];for(let s=0;s<n.shape.length;s++)t[s]==null&&n.shape[s]!=null?e.push(n.shape[s]):e.push(t[s]);return e}return t}function Wk(n,t,e,s){const o=D(n,"x","dropout");if(T(o.dtype==="float32",()=>`x has to be a floating point tensor since it's going to be scaled, but got a ${o.dtype} tensor instead.`),T(t>=0&&t<1,()=>`rate must be a float in the range [0, 1), but got ${t}.`),t===0)return n instanceof pe?o.clone():o;const r=Vk(o,e),i=1-t,a=gt(zl(tt(Oi(r,0,1,"float32",s),i)),i);return L(o,a)}const Uk=W({dropout_:Wk});function Gk(n,t,e,s,o,r="NHWC",i){let a=n;n.rank===3&&(a=z(n,[1,n.shape[0],n.shape[1],n.shape[2]]));let l=t;l.rank===3&&(l=z(t,[1,t.shape[0],t.shape[1],t.shape[2]])),T(a.rank===4,()=>`Error in conv2dDerFilter: input must be rank 4, but got shape ${a.shape}.`),T(l.rank===4,()=>`Error in conv2dDerFilter: dy must be rank 4, but got shape ${l.shape}.`),T(e.length===4,()=>`Error in conv2dDerFilter: filterShape must be length 4, but got ${e}.`);const c=r==="NHWC"?a.shape[3]:a.shape[1],u=r==="NHWC"?l.shape[3]:l.shape[1];T(c===e[2],()=>`Error in conv2dDerFilter: depth of input ${c}) must match input depth in filter (${e[2]}.`),T(u===e[3],()=>`Error in conv2dDerFilter: depth of dy (${u}) must match output depth for filter (${e[3]}).`),Ye("conv2dDerFilter",o,i);const h={x:a,dy:l},d={strides:s,pad:o,dataFormat:r,dimRoundingMode:i,filterShape:e};return P.runKernel(wu,h,d)}const Wh=W({conv2DBackpropFilter_:Gk});function Uh(n,t,e){if(e==null||e==="linear")return n;if(e==="relu")return L(n,Pi(t));throw new Error(`Cannot compute gradient for fused activation ${e}.`)}function Gh(n,t){let e=t;const s=fe(n.shape,t.shape);return s.length>0&&(e=mt(e,s)),z(e,n.shape)}function Hh(n,t,e,s){if(t==="linear")return n;if(t==="relu")return go(n);if(t==="elu")return Ll(n);if(t==="relu6")return Rm(n);if(t==="prelu")return _h(n,e);if(t==="leakyrelu")return Th(n,s);if(t==="sigmoid")return Yo(n);throw new Error(`Unknown fused activation ${t}.`)}const qh=(n,t)=>!(n>0)||t==="linear";function Hk({x:n,filter:t,strides:e,pad:s,dataFormat:o="NHWC",dilations:r=[1,1],dimRoundingMode:i,bias:a,activation:l="linear",preluActivationWeights:c,leakyreluAlpha:u}){if(l=l||"linear",qh(P.state.gradientDepth,l)===!1){T(o==="NHWC",()=>`Error in fused conv2d: got dataFormat of ${o} but only NHWC is currently supported for the case of gradient depth is 0 and the activation is not linear.`);let I=po(n,t,e,s,o,r,i);return a!=null&&(I=tt(I,a)),Hh(I,l,c,u)}const h=D(n,"x","conv2d","float32"),d=D(t,"filter","conv2d","float32");let p=h,f=!1;h.rank===3&&(f=!0,p=z(h,[1,h.shape[0],h.shape[1],h.shape[2]])),T(p.rank===4,()=>`Error in fused conv2d: input must be rank 4, but got rank ${p.rank}.`),T(d.rank===4,()=>`Error in fused conv2d: filter must be rank 4, but got rank ${d.rank}.`),Ye("fused conv2d",s,i);const m=o==="NHWC"?p.shape[3]:p.shape[1];T(d.shape[2]===m,()=>`Error in conv2d: depth of input (${m}) must match input depth for filter ${d.shape[2]}.`),T(Me(e,r),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${e} and dilations '${r}'`);const g=Se(p.shape,d.shape,e,r,s,i);let x;a!=null&&(x=D(a,"bias","fused conv2d"),[x]=re(x,h),o==="NHWC"?$t(g.outShape,x.shape):(T(x.shape.length<=1,()=>`Error in fused conv2d: only supports scalar or 1-D Tensor bias for NCHW format but got the bias of rank-${x.shape.length}.`),T(x.shape.length===0||x.shape[0]===g.outChannels||x.shape[0]===1,()=>`Error in fused conv2d: bias shape (${x.shape}) is not compatible with the number of output channels (${g.outChannels})`)));let b;if(c!=null){const I=c.shape;if(T(I.length<=1||I.length===3,()=>`Error in fused conv2d: only supports scalar, 1-D Tensor or 3-D Tensor PReLU activation weights but got a tensor of rank-${I.length}.`),I.length===1)T(I[0]===1||I[0]===g.outChannels,()=>`Error in fused conv2d: PReLU activation weights (${I}) is not compatible with the number of output channels (${g.outChannels}).`);else if(I.length===3)try{$t(I,g.outShape)}catch(v){const N=`Error in fused conv2d: PReLU activation weights (${I}) is not compatible with the output shape of the conv2d (${g.outShape}).`;throw Error(N)}b=D(c,"prelu weights","fused conv2d")}const w=(I,v)=>{T(o==="NHWC",()=>`Error in gradient of fused conv2D: got dataFormat of ${o} but only NHWC is currently supported.`);const[N,S,k,$]=v,E=Uh(I,k,l);T(uo(r),()=>`Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${r}'`);const R=Ch(S.shape,E,N,e,s),A=Wh(S,E,N.shape,e,s),F=[R,A];if($!=null){const _=Gh($,E);F.push(_)}return F},y={x:p,filter:d,bias:x,preluActivationWeights:b},C={strides:e,pad:s,dataFormat:o,dilations:r,dimRoundingMode:i,activation:l,leakyreluAlpha:u};return a==null?Jo((v,N,S)=>{let k=P.runKernel(kl,y,C);return S([N,v,k]),f&&(k=z(k,[k.shape[1],k.shape[2],k.shape[3]])),{value:k,gradFunc:w}})(p,d):Jo((v,N,S,k)=>{let $=P.runKernel(kl,y,C);return k([N,v,$,S]),f&&($=z($,[$.shape[1],$.shape[2],$.shape[3]])),{value:$,gradFunc:w}})(p,d,x)}const qk=W({fusedConv2d_:Hk});function Xk(n,t,e,s,o,r=[1,1],i){let a=n;n.rank===3&&(a=z(n,[1,n.shape[0],n.shape[1],n.shape[2]]));let l=t;l.rank===3&&(l=z(t,[1,t.shape[0],t.shape[1],t.shape[2]]));const c={x:a,dy:l},u={strides:s,pad:o,dimRoundingMode:i,dilations:r,filterShape:e};return P.runKernel(Nu,c,u)}const Kk=W({depthwiseConv2dNativeBackpropFilter_:Xk});function jk(n,t,e,s,o,r=[1,1],i){let a=t,l=!1;t.rank===3&&(l=!0,a=z(t,[1,t.shape[0],t.shape[1],t.shape[2]]));const c={dy:a,filter:e},u={strides:s,pad:o,dimRoundingMode:i,dilations:r,inputShape:n},h=P.runKernel(Tu,c,u);return l?z(h,[h.shape[1],h.shape[2],h.shape[3]]):h}const Yk=W({depthwiseConv2dNativeBackpropInput_:jk});function Zk({a:n,b:t,transposeA:e=!1,transposeB:s=!1,bias:o,activation:r="linear",preluActivationWeights:i,leakyreluAlpha:a=.2}){if(qh(P.state.gradientDepth,r)===!1){let $=Bt(n,t,e,s);return o!=null&&($=tt($,o)),Hh($,r,i,a)}let l=D(n,"a","fused matMul"),c=D(t,"b","fused matMul");[l,c]=re(l,c);const u=e?l.shape[l.rank-2]:l.shape[l.rank-1],h=s?c.shape[c.rank-1]:c.shape[c.rank-2],d=e?l.shape[l.rank-1]:l.shape[l.rank-2],p=s?c.shape[c.rank-2]:c.shape[c.rank-1],f=l.shape.slice(0,-2),m=c.shape.slice(0,-2),g=K(f),x=K(m);T(u===h,()=>`Error in fused matMul: inner shapes (${u}) and (${h}) of Tensors with shapes ${l.shape} and ${c.shape} and transposeA=${e} and transposeB=${s} must match.`);const w=$t(l.shape.slice(0,-2),c.shape.slice(0,-2)).concat([d,p]),y=e?z(l,[g,u,d]):z(l,[g,d,u]),C=s?z(c,[x,p,h]):z(c,[x,h,p]);let I;o!=null&&(I=D(o,"bias","fused matMul"),[I]=re(I,l),$t(w,I.shape));let v;i!=null&&(v=D(i,"prelu weights","fused matMul"));const N=($,E)=>{const[R,A,F,_]=E,B=Uh(z($,F.shape),F,r);let O,V;if(!e&&!s?(O=Bt(B,A,!1,!0),V=Bt(R,B,!0,!1)):!e&&s?(O=Bt(B,A,!1,!1),V=Bt(B,R,!0,!1)):e&&!s?(O=Bt(A,B,!1,!0),V=Bt(R,B,!1,!1)):(O=Bt(A,B,!0,!0),V=Bt(B,R,!0,!0)),o!=null){const G=Gh(_,B);return[O,V,G]}else return[O,V]},S={a:y,b:C,bias:I,preluActivationWeights:v},k={transposeA:e,transposeB:s,activation:r,leakyreluAlpha:a};return o==null?Jo((E,R,A)=>{const F=P.runKernel(vl,S,k);return A([E,R,F]),{value:z(F,w),gradFunc:N}})(y,C):Jo((E,R,A,F)=>{const _=P.runKernel(vl,S,k);return F([E,R,_,A]),{value:z(_,w),gradFunc:N}})(y,C,I)}const Wm=W({fusedMatMul_:Zk});function Qk(n,t,e,s,o="bilinear",r=0){const i=D(n,"image","cropAndResize"),a=D(t,"boxes","cropAndResize","float32"),l=D(e,"boxInd","cropAndResize","int32"),c=a.shape[0];T(i.rank===4,()=>`Error in cropAndResize: image must be rank 4,but got rank ${i.rank}.`),T(a.rank===2&&a.shape[1]===4,()=>`Error in cropAndResize: boxes must be have size [${c},4] but had shape ${a.shape}.`),T(l.rank===1&&l.shape[0]===c,()=>`Error in cropAndResize: boxInd must be have size [${c}] but had shape ${a.shape}.`),T(s.length===2,()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${s.length}.`),T(s[0]>=1&&s[1]>=1,()=>`cropSize must be atleast [1,1], but was ${s}`),T(o==="bilinear"||o==="nearest",()=>`method must be bilinear or nearest, but was ${o}`);const u={image:i,boxes:a,boxInd:l},h={method:o,extrapolationValue:r,cropSize:s};return P.runKernel(vu,u,h)}const Jk=W({cropAndResize_:Qk});function tS(n){const t=D(n,"image","flipLeftRight","float32");T(t.rank===4,()=>`Error in flipLeftRight: image must be rank 4,but got rank ${t.rank}.`);const e={image:t};return P.runKernel(Ou,e,{})}const eS=W({flipLeftRight_:tS});function nS(n){const t=D(n,"image","grayscaleToRGB"),e=t.rank-1,s=t.shape[e];T(t.rank>=2,()=>`Error in grayscaleToRGB: images must be at least rank 2, but got rank ${t.rank}.`),T(s===1,()=>`Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${s}.`);const o=new Array(t.rank);return o.fill(1,0,e),o[e]=3,Bn(t,o)}const sS=W({grayscaleToRGB_:nS});function oS(n){const t=D(n,"image","RGBToGrayscale"),e=t.rank-1,s=t.shape[e];T(t.rank>=2,()=>`Error in RGBToGrayscale: images must be at least rank 2, but got rank ${t.rank}.`),T(s===3,()=>`Error in RGBToGrayscale: last dimension of an RGB image should be size 3, but got size ${s}.`);const o=t.dtype,r=at(t,"float32"),i=rn([.2989,.587,.114]);let a;switch(t.rank){case 2:a=Di("ij,j->i",r,i);break;case 3:a=Di("ijk,k->ij",r,i);break;case 4:a=Di("ijkl,l->ijk",r,i);break;case 5:a=Di("ijklm,m->ijkl",r,i);break;case 6:a=Di("ijklmn,n->ijklm",r,i);break;default:throw new Error("Not a valid tensor rank.")}return a=Qe(a,-1),at(a,o)}const rS=W({rgbToGrayscale_:oS});function iS(n,t,e=0,s=.5){const o=D(n,"image","rotateWithOffset","float32");T(o.rank===4,()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${o.rank}.`);const r={image:o},i={radians:t,fillValue:e,center:s};return P.runKernel(th,r,i)}const aS=W({rotateWithOffset_:iS});function tr(n,t,e,s,o,r){s==null&&(s=.5),o==null&&(o=Number.NEGATIVE_INFINITY),r==null&&(r=0);const i=n.shape[0];return e=Math.min(e,i),T(0<=s&&s<=1,()=>`iouThreshold must be in [0, 1], but was '${s}'`),T(n.rank===2,()=>`boxes must be a 2D tensor, but was of rank '${n.rank}'`),T(n.shape[1]===4,()=>`boxes must have 4 columns, but 2nd dimension was ${n.shape[1]}`),T(t.rank===1,()=>"scores must be a 1D tensor"),T(t.shape[0]===i,()=>`scores has incompatible shape with boxes. Expected ${i}, but was ${t.shape[0]}`),T(0<=r&&r<=1,()=>`softNmsSigma must be in [0, 1], but was '${r}'`),{maxOutputSize:e,iouThreshold:s,scoreThreshold:o,softNmsSigma:r}}function lS(n,t,e,s=.5,o=Number.NEGATIVE_INFINITY){const r=D(n,"boxes","nonMaxSuppression","float32"),i=D(t,"scores","nonMaxSuppression","float32"),a=tr(r,i,e,s,o);e=a.maxOutputSize,s=a.iouThreshold,o=a.scoreThreshold;const l={maxOutputSize:e,iouThreshold:s,scoreThreshold:o};return P.runKernel(Vu,{boxes:r,scores:i},l)}const cS=W({nonMaxSuppression_:lS});function uS(n,t,e){const s=hS(n,t,e),o=s<0?-(s+1):s;n.splice(o,0,t)}function hS(n,t,e){return pS(n,t,e||dS)}function dS(n,t){return n>t?1:n<t?-1:0}function pS(n,t,e){let s=0,o=n.length,r=0,i=!1;for(;s<o;){r=s+(o-s>>>1);const a=e(t,n[r]);a>0?s=r+1:(o=r,i=!a)}return i?s:-s-1}function Xh(n,t,e,s,o){return Yh(n,t,e,s,o,0)}function Kh(n,t,e,s,o,r){return Yh(n,t,e,s,o,0,!1,r,!0)}function jh(n,t,e,s,o,r){return Yh(n,t,e,s,o,r,!0)}function Yh(n,t,e,s,o,r,i=!1,a=!1,l=!1){const c=[];for(let g=0;g<t.length;g++)t[g]>o&&c.push({score:t[g],boxIndex:g,suppressBeginIndex:0});c.sort(Um);const u=r>0?-.5/r:0,h=[],d=[];for(;h.length<e&&c.length>0;){const g=c.pop(),{score:x,boxIndex:b,suppressBeginIndex:w}=g;if(x<o)break;let y=!1;for(let C=h.length-1;C>=w;--C){const I=fS(n,b,h[C]);if(I>=s){y=!0;break}if(g.score=g.score*mS(s,u,I),g.score<=o)break}g.suppressBeginIndex=h.length,y||(g.score===x?(h.push(b),d.push(g.score)):g.score>o&&uS(c,g,Um))}const p=h.length,f=e-p;a&&f>0&&(h.push(...new Array(f).fill(0)),d.push(...new Array(f).fill(0)));const m={selectedIndices:h};return i&&(m.selectedScores=d),l&&(m.validOutputs=p),m}function fS(n,t,e){const s=n.subarray(t*4,t*4+4),o=n.subarray(e*4,e*4+4),r=Math.min(s[0],s[2]),i=Math.min(s[1],s[3]),a=Math.max(s[0],s[2]),l=Math.max(s[1],s[3]),c=Math.min(o[0],o[2]),u=Math.min(o[1],o[3]),h=Math.max(o[0],o[2]),d=Math.max(o[1],o[3]),p=(a-r)*(l-i),f=(h-c)*(d-u);if(p<=0||f<=0)return 0;const m=Math.max(r,c),g=Math.max(i,u),x=Math.min(a,h),b=Math.min(l,d),w=Math.max(x-m,0)*Math.max(b-g,0);return w/(p+f-w)}function mS(n,t,e){const s=Math.exp(t*e*e);return e<=n?s:0}function Um(n,t){return n.score-t.score||n.score===t.score&&t.boxIndex-n.boxIndex}function gS(r,i,a){return J(this,arguments,function*(n,t,e,s=.5,o=Number.NEGATIVE_INFINITY){const l=D(n,"boxes","nonMaxSuppressionAsync"),c=D(t,"scores","nonMaxSuppressionAsync"),u=tr(l,c,e,s,o);e=u.maxOutputSize,s=u.iouThreshold,o=u.scoreThreshold;const h=yield Promise.all([l.data(),c.data()]),d=h[0],p=h[1],{selectedIndices:f}=Xh(d,p,e,s,o);return l!==n&&l.dispose(),c!==t&&c.dispose(),rn(f,"int32")})}const xS=gS;function bS(n,t,e,s=.5,o=Number.NEGATIVE_INFINITY,r=0){const i=D(n,"boxes","nonMaxSuppression"),a=D(t,"scores","nonMaxSuppression"),l=tr(i,a,e,s,o,r);e=l.maxOutputSize,s=l.iouThreshold,o=l.scoreThreshold,r=l.softNmsSigma;const c={boxes:i,scores:a},u={maxOutputSize:e,iouThreshold:s,scoreThreshold:o,softNmsSigma:r},h=P.runKernel(Uu,c,u);return{selectedIndices:h[0],selectedScores:h[1]}}const yS=W({nonMaxSuppressionWithScore_:bS});function wS(i,a,l){return J(this,arguments,function*(n,t,e,s=.5,o=Number.NEGATIVE_INFINITY,r=0){const c=D(n,"boxes","nonMaxSuppressionAsync"),u=D(t,"scores","nonMaxSuppressionAsync"),h=tr(c,u,e,s,o,r);e=h.maxOutputSize,s=h.iouThreshold,o=h.scoreThreshold,r=h.softNmsSigma;const d=yield Promise.all([c.data(),u.data()]),p=d[0],f=d[1],{selectedIndices:m,selectedScores:g}=jh(p,f,e,s,o,r);return c!==n&&c.dispose(),u!==t&&u.dispose(),{selectedIndices:rn(m,"int32"),selectedScores:rn(g)}})}const CS=wS;function $S(n,t,e,s=.5,o=Number.NEGATIVE_INFINITY,r=!1){const i=D(n,"boxes","nonMaxSuppression"),a=D(t,"scores","nonMaxSuppression"),l=tr(i,a,e,s,o,null),c=l.maxOutputSize,u=l.iouThreshold,h=l.scoreThreshold,d={boxes:i,scores:a},p={maxOutputSize:c,iouThreshold:u,scoreThreshold:h,padToMaxOutputSize:r},f=P.runKernel(Wu,d,p);return{selectedIndices:f[0],validOutputs:f[1]}}const IS=W({nonMaxSuppressionPadded_:$S});function vS(i,a,l){return J(this,arguments,function*(n,t,e,s=.5,o=Number.NEGATIVE_INFINITY,r=!1){const c=D(n,"boxes","nonMaxSuppressionAsync"),u=D(t,"scores","nonMaxSuppressionAsync"),h=tr(c,u,e,s,o,null),d=h.maxOutputSize,p=h.iouThreshold,f=h.scoreThreshold,[m,g]=yield Promise.all([c.data(),u.data()]),{selectedIndices:x,validOutputs:b}=Kh(m,g,d,p,f,r);return c!==n&&c.dispose(),u!==t&&u.dispose(),{selectedIndices:rn(x,"int32"),validOutputs:zt(b,"int32")}})}const kS=vS;function SS(n,t,e=!1,s=!1){const o=D(n,"images","resizeBilinear");T(o.rank===3||o.rank===4,()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${o.rank}.`),T(t.length===2,()=>`Error in resizeBilinear: new shape must 2D, but got shape ${t}.`),T(s===!1||e===!1,()=>"Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false.");let r=o,i=!1;o.rank===3&&(i=!0,r=z(o,[1,o.shape[0],o.shape[1],o.shape[2]]));const a={images:r},l={alignCorners:e,halfPixelCenters:s,size:t},c=P.runKernel(pl,a,l);return i?z(c,[c.shape[1],c.shape[2],c.shape[3]]):c}const Gm=W({resizeBilinear_:SS});function NS(n,t,e=!1,s=!1){const o=D(n,"images","resizeNearestNeighbor");T(o.rank===3||o.rank===4,()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${o.rank}.`),T(t.length===2,()=>`Error in resizeNearestNeighbor: new shape must 2D, but got shape ${t}.`),T(o.dtype==="float32"||o.dtype==="int32",()=>"`images` must have `int32` or `float32` as dtype"),T(s===!1||e===!1,()=>"Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false.");let r=o,i=!1;o.rank===3&&(i=!0,r=z(o,[1,o.shape[0],o.shape[1],o.shape[2]]));const a={images:r},l={alignCorners:e,halfPixelCenters:s,size:t},c=P.runKernel(dl,a,l);return i?z(c,[c.shape[1],c.shape[2],c.shape[3]]):c}const Hm=W({resizeNearestNeighbor_:NS});function TS(n,t="binary",e=!1,s=.5){const o=D(n,"image","threshold"),r=.2989,i=.587,a=.114,l=o.shape[0]*o.shape[1];let c=L(rn([s]),255),u,h,d,p;if(T(o.rank===3,()=>`Error in threshold: image must be rank 3,but got rank ${o.rank}.`),T(o.shape[2]===3||o.shape[2]===1,()=>`Error in threshold: image color channel must be equal to 3 or 1but got ${o.shape[2]}.`),T(o.dtype==="int32"||o.dtype==="float32",()=>`Error in dtype: image dtype must be int32 or float32,but got dtype ${o.dtype}.`),T(t==="otsu"||t==="binary",()=>`Method must be binary or otsu, but was ${t}`),o.shape[2]===3){[u,h,d]=xn(o,[1,1,1],-1);const g=L(u,r),x=L(h,i),b=L(d,a);p=tt(tt(g,x),b)}else p=n;if(t==="otsu"){const g=S$(at(Am(p),"int32"),Si([]),256);c=ES(g,l)}const f=e?Qo(p,c):gn(p,c);return at(L(f,255),"int32")}function ES(n,t){let e=rn([-1]),s=rn([0]),o=rn([0]),r,i,a,l,c,u;for(let h=0;h<n.size-1;h++){r=Xt(n,0,h+1),i=Xt(n,h+1),c=gt(mt(r),t),u=gt(mt(i),t);const d=mt(L(r,Mi(0,r.size)));a=gt(d,mt(r));const p=Ml(i.shape,r.size),f=tt(Mi(0,i.size),p),m=L(i,f);l=gt(mt(m),mt(i));const g=bt(a,l),x=bt(a,l),b=L(c,u);o=L(L(b,g),x);const w=gn(o,s);s=Ue(w,o,s),e=Ue(w,rn([h]),e)}return e}const RS=W({threshold_:TS});function AS(n,t,e="nearest",s="constant",o=0,r){const i=D(n,"image","transform","float32"),a=D(t,"transforms","transform","float32");T(i.rank===4,()=>`Error in transform: image must be rank 4,but got rank ${i.rank}.`),T(a.rank===2&&(a.shape[0]===i.shape[0]||a.shape[0]===1)&&a.shape[1]===8,()=>"Error in transform: Input transform should be batch x 8 or 1 x 8"),T(r==null||r.length===2,()=>`Error in transform: outputShape must be [height, width] or null, but got ${r}.`);const l={image:i,transforms:a},c={interpolation:e,fillMode:s,fillValue:o,outputShape:r};return P.runKernel(Qu,l,c)}const DS=W({transform_:AS});function FS(n,t,e){const s=D(n,"a","bandPart");T(s.rank>=2,()=>`bandPart(): Rank must be at least 2, got ${s.rank}.`);const o=s.shape,[r,i]=s.shape.slice(-2);let a,l;typeof t=="number"?(T(t%1===0,()=>`bandPart(): numLower must be an integer, got ${t}.`),T(t<=r,()=>`bandPart(): numLower (${t}) must not be greater than the number of rows (${r}).`),a=D(t<0?r:t,"numLower","bandPart")):(T(t.dtype==="int32",()=>"bandPart(): numLower's dtype must be an int32."),a=Ue(Vl(t,0),r,_i(t,r))),typeof e=="number"?(T(e%1===0,()=>`bandPart(): numUpper must be an integer, got ${e}.`),T(e<=i,()=>`bandPart(): numUpper (${e}) must not be greater than the number of columns (${i}).`),l=D(e<0?i:e,"numUpper","bandPart")):(T(e.dtype==="int32",()=>"bandPart(): numUpper's dtype must be an int32."),l=Ue(Vl(e,0),i,_i(e,i)));const c=z(Mi(0,r,1,"int32"),[-1,1]),u=Mi(0,i,1,"int32"),h=bt(c,u),d=gs(Qo(h,a),mo(h,ae(l))),p=Ie([r,i],s.dtype);return z(xs(yo(z(s,[-1,r,i])).map(f=>Ue(d,f,p))),o)}const _S=W({bandPart_:FS});function OS(n){let t;if(Array.isArray(n)){t=!1,T(n!=null&&n.length>0,()=>"Gram-Schmidt process: input must not be null, undefined, or empty");const o=n[0].shape[0];for(let r=1;r<n.length;++r)T(n[r].shape[0]===o,()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${n[r].shape[0]} vs. ${o})`)}else t=!0,n=xn(n,n.shape[0],0).map(o=>Li(o,[0]));T(n.length<=n[0].shape[0],()=>`Gram-Schmidt: Number of vectors (${n.length}) exceeds number of dimensions (${n[0].shape[0]}).`);const e=[],s=n;for(let o=0;o<n.length;++o)e.push(P.tidy(()=>{let r=s[o];if(o>0)for(let i=0;i<o;++i){const a=L(mt(L(e[i],r)),e[i]);r=bt(r,a)}return gt(r,Bl(r,"euclidean"))}));return t?xs(e,0):e}const MS=W({gramSchmidt_:OS});function LS(n,t=!1){if(T(n.rank>=2,()=>`qr() requires input tensor to have a rank >= 2, but got rank ${n.rank}`),n.rank===2)return qm(n,t);{const e=n.shape.slice(0,n.shape.length-2).reduce((l,c)=>l*c),s=yo(z(n,[e,n.shape[n.shape.length-2],n.shape[n.shape.length-1]]),0),o=[],r=[];s.forEach(l=>{const[c,u]=qm(l,t);o.push(c),r.push(u)});const i=z(xs(o,0),n.shape),a=z(xs(r,0),n.shape);return[i,a]}}function qm(n,t=!1){return P.tidy(()=>{T(n.shape.length===2,()=>`qr2d() requires a 2D Tensor, but got a ${n.shape.length}D Tensor.`);const e=n.shape[0],s=n.shape[1];let o=mm(e),r=co(n);const i=Vh([[1]],[1,1]);let a=co(i);const l=e>=s?s:e;for(let c=0;c<l;++c){const u=r,h=a,d=o;[a,r,o]=P.tidy(()=>{const p=Xt(r,[c,c],[e-c,1]),f=Bl(p),m=Xt(r,[c,c],[1,1]),g=Ue(gn(m,0),Vh([[-1]]),Vh([[1]])),x=bt(m,L(g,f)),b=gt(p,x);b.shape[0]===1?a=co(i):a=Ze([i,Xt(b,[1,0],[b.shape[0]-1,b.shape[1]])],0);const w=ae(gt(Bt(g,x),f)),y=Xt(r,[c,0],[e-c,s]),C=L(w,a),I=Ft(a);if(c===0)r=bt(y,Bt(C,Bt(I,y)));else{const S=bt(y,Bt(C,Bt(I,y)));r=Ze([Xt(r,[0,0],[c,s]),S],0)}const v=Ft(C),N=Xt(o,[0,c],[e,o.shape[1]-c]);if(c===0)o=bt(N,Bt(Bt(N,a),v));else{const S=bt(N,Bt(Bt(N,a),v));o=Ze([Xt(o,[0,0],[e,c]),S],1)}return[a,r,o]}),Nt([u,h,d])}return!t&&e>s&&(o=Xt(o,[0,0],[e,s]),r=Xt(r,[0,0],[s,s])),[o,r]})}const PS=W({qr_:LS});const bs={flipLeftRight:eS,grayscaleToRGB:sS,resizeNearestNeighbor:Hm,resizeBilinear:Gm,rgbToGrayscale:rS,rotateWithOffset:aS,cropAndResize:Jk,nonMaxSuppression:cS,nonMaxSuppressionAsync:xS,nonMaxSuppressionWithScore:yS,nonMaxSuppressionWithScoreAsync:CS,nonMaxSuppressionPadded:IS,nonMaxSuppressionPaddedAsync:kS,threshold:RS,transform:DS},BS={bandPart:_S,gramSchmidt:MS,qr:PS};const zS=new Map,VS=new Map;class er{getClassName(){return this.constructor.className}static fromConfig(t,e){return new t(e)}}class kn{constructor(){this.classNameMap={}}static getMap(){return kn.instance==null&&(kn.instance=new kn),kn.instance}static register(t){kn.getMap().classNameMap[t.className]=[t,t.fromConfig]}}function Z(n,t,e){T(n.className!=null,()=>"Class being registered does not have the static className property defined."),T(typeof n.className=="string",()=>"className is required to be a string, but got type "+typeof n.className),T(n.className.length>0,()=>"Class being registered has an empty-string as its className, which is disallowed."),typeof t=="undefined"&&(t="Custom"),typeof e=="undefined"&&(e=n.className);const s=e,o=t+">"+s;return kn.register(n),zS.set(o,n),VS.set(n,o),n}class Bs extends er{minimize(t,e=!1,s){const{value:o,grads:r}=this.computeGradients(t,s);if(s!=null){const i=s.map(a=>({name:a.name,tensor:r[a.name]}));this.applyGradients(i)}else this.applyGradients(r);return Nt(r),e?o:(o.dispose(),null)}get iterations(){return this.iterations_==null&&(this.iterations_=0),this.iterations_}incrementIterations(){this.iterations_=this.iterations+1}computeGradients(t,e){return XI(t,e)}dispose(){this.iterations_!=null&&Nt(this.iterations_)}saveIterations(){return J(this,null,function*(){return this.iterations_==null&&(this.iterations_=0),{name:"iter",tensor:zt(this.iterations_,"int32")}})}getWeights(){return J(this,null,function*(){throw new Error("getWeights() is not implemented for this optimizer yet.")})}setWeights(t){return J(this,null,function*(){throw new Error(`setWeights() is not implemented for this optimizer class ${this.getClassName()}`)})}extractIterations(t){return J(this,null,function*(){return this.iterations_=(yield t[0].tensor.data())[0],t.slice(1)})}}Object.defineProperty(Bs,Symbol.hasInstance,{value:n=>n.minimize!=null&&n.computeGradients!=null&&n.applyGradients!=null});class Xm extends Bs{static get className(){return"Adadelta"}constructor(t,e,s=null){super(),this.learningRate=t,this.rho=e,this.epsilon=s,this.accumulatedGrads=[],this.accumulatedUpdates=[],s==null&&(this.epsilon=P.backend.epsilon())}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,o)=>{const r=P.registeredVariables[s],i=!1;this.accumulatedGrads[o]==null&&(this.accumulatedGrads[o]={originalName:`${s}/accum_grad`,variable:U(()=>Dt(r).variable(i))}),this.accumulatedUpdates[o]==null&&(this.accumulatedUpdates[o]={originalName:`${s}/accum_var`,variable:U(()=>Dt(r).variable(i))});const a=Array.isArray(t)?t[o].tensor:t[s];if(a==null)return;const l=this.accumulatedGrads[o].variable,c=this.accumulatedUpdates[o].variable;U(()=>{const u=tt(L(l,this.rho),L(jt(a),1-this.rho)),h=L(gt(Le(tt(c,this.epsilon)),Le(tt(l,this.epsilon))),a),d=tt(L(c,this.rho),L(jt(h),1-this.rho));l.assign(u),c.assign(d);const p=tt(L(h,-this.learningRate),r);r.assign(p)})}),this.incrementIterations()}dispose(){this.accumulatedUpdates!=null&&(Nt(this.accumulatedGrads.map(t=>t.variable)),Nt(this.accumulatedUpdates.map(t=>t.variable)))}getWeights(){return J(this,null,function*(){const t=[...this.accumulatedGrads,...this.accumulatedUpdates];return[yield this.saveIterations()].concat(t.map(e=>({name:e.originalName,tensor:e.variable})))})}setWeights(t){return J(this,null,function*(){t=yield this.extractIterations(t);const e=t.length/2,s=!1;this.accumulatedGrads=t.slice(0,e).map(o=>({originalName:o.name,variable:o.tensor.variable(s)})),this.accumulatedUpdates=t.slice(e,e*2).map(o=>({originalName:o.name,variable:o.tensor.variable(s)}))})}getConfig(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}}static fromConfig(t,e){return new t(e.learningRate,e.rho,e.epsilon)}}class Km extends Bs{static get className(){return"Adagrad"}constructor(t,e=.1){super(),this.learningRate=t,this.initialAccumulatorValue=e,this.accumulatedGrads=[]}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,o)=>{const r=P.registeredVariables[s];this.accumulatedGrads[o]==null&&(this.accumulatedGrads[o]={originalName:`${s}/accumulator`,variable:U(()=>Ml(r.shape,this.initialAccumulatorValue).variable(!1))});const i=Array.isArray(t)?t[o].tensor:t[s];if(i==null)return;const a=this.accumulatedGrads[o].variable;U(()=>{const l=tt(a,jt(i));a.assign(l);const c=tt(L(gt(i,Le(tt(l,P.backend.epsilon()))),-this.learningRate),r);r.assign(c)})}),this.incrementIterations()}dispose(){this.accumulatedGrads!=null&&Nt(this.accumulatedGrads.map(t=>t.variable))}getWeights(){return J(this,null,function*(){return[yield this.saveIterations()].concat(this.accumulatedGrads.map(t=>({name:t.originalName,tensor:t.variable})))})}setWeights(t){return J(this,null,function*(){t=yield this.extractIterations(t);const e=!1;this.accumulatedGrads=t.map(s=>({originalName:s.name,variable:s.tensor.variable(e)}))})}getConfig(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}}static fromConfig(t,e){return new t(e.learningRate,e.initialAccumulatorValue)}}class jm extends Bs{static get className(){return"Adam"}constructor(t,e,s,o=null){super(),this.learningRate=t,this.beta1=e,this.beta2=s,this.epsilon=o,this.accumulatedFirstMoment=[],this.accumulatedSecondMoment=[],U(()=>{this.accBeta1=zt(e).variable(),this.accBeta2=zt(s).variable()}),o==null&&(this.epsilon=P.backend.epsilon())}applyGradients(t){const e=Array.isArray(t)?t.map(s=>s.name):Object.keys(t);U(()=>{const s=bt(1,this.accBeta1),o=bt(1,this.accBeta2);e.forEach((r,i)=>{const a=P.registeredVariables[r],l=!1;this.accumulatedFirstMoment[i]==null&&(this.accumulatedFirstMoment[i]={originalName:`${r}/m`,variable:U(()=>Dt(a).variable(l))}),this.accumulatedSecondMoment[i]==null&&(this.accumulatedSecondMoment[i]={originalName:`${r}/v`,variable:U(()=>Dt(a).variable(l))});const c=Array.isArray(t)?t[i].tensor:t[r];if(c==null)return;const u=this.accumulatedFirstMoment[i].variable,h=this.accumulatedSecondMoment[i].variable,d=tt(L(u,this.beta1),L(c,1-this.beta1)),p=tt(L(h,this.beta2),L(jt(c),1-this.beta2)),f=gt(d,s),m=gt(p,o);u.assign(d),h.assign(p);const g=tt(L(gt(f,tt(Le(m),this.epsilon)),-this.learningRate),a);a.assign(g)}),this.accBeta1.assign(L(this.accBeta1,this.beta1)),this.accBeta2.assign(L(this.accBeta2,this.beta2))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&Nt(this.accumulatedFirstMoment.map(t=>t.variable)),this.accumulatedSecondMoment!=null&&Nt(this.accumulatedSecondMoment.map(t=>t.variable))}getWeights(){return J(this,null,function*(){const t=[...this.accumulatedFirstMoment,...this.accumulatedSecondMoment];return[yield this.saveIterations()].concat(t.map(e=>({name:e.originalName,tensor:e.variable})))})}setWeights(t){return J(this,null,function*(){t=yield this.extractIterations(t),U(()=>{this.accBeta1.assign(fo(this.beta1,this.iterations_+1)),this.accBeta2.assign(fo(this.beta2,this.iterations_+1))});const e=t.length/2,s=!1;this.accumulatedFirstMoment=t.slice(0,e).map(o=>({originalName:o.name,variable:o.tensor.variable(s)})),this.accumulatedSecondMoment=t.slice(e,e*2).map(o=>({originalName:o.name,variable:o.tensor.variable(s)}))})}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}}static fromConfig(t,e){return new t(e.learningRate,e.beta1,e.beta2,e.epsilon)}}class Ym extends Bs{static get className(){return"Adamax"}constructor(t,e,s,o=null,r=0){super(),this.learningRate=t,this.beta1=e,this.beta2=s,this.epsilon=o,this.decay=r,this.accumulatedFirstMoment=[],this.accumulatedWeightedInfNorm=[],U(()=>{this.iteration=zt(0).variable(),this.accBeta1=zt(e).variable()}),o==null&&(this.epsilon=P.backend.epsilon())}applyGradients(t){const e=Array.isArray(t)?t.map(s=>s.name):Object.keys(t);U(()=>{const s=bt(1,this.accBeta1),o=gt(-this.learningRate,tt(L(this.iteration,this.decay),1));e.forEach((r,i)=>{const a=P.registeredVariables[r],l=!1;this.accumulatedFirstMoment[i]==null&&(this.accumulatedFirstMoment[i]={originalName:`${r}/m`,variable:Dt(a).variable(l)}),this.accumulatedWeightedInfNorm[i]==null&&(this.accumulatedWeightedInfNorm[i]={originalName:`${r}/v`,variable:Dt(a).variable(l)});const c=Array.isArray(t)?t[i].tensor:t[r];if(c==null)return;const u=this.accumulatedFirstMoment[i].variable,h=this.accumulatedWeightedInfNorm[i].variable,d=tt(L(u,this.beta1),L(c,1-this.beta1)),p=L(h,this.beta2),f=We(c),m=Ls(p,f);u.assign(d),h.assign(m);const g=tt(L(gt(o,s),gt(d,tt(m,this.epsilon))),a);a.assign(g)}),this.iteration.assign(tt(this.iteration,1)),this.accBeta1.assign(L(this.accBeta1,this.beta1))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&Nt(this.accumulatedFirstMoment.map(t=>t.variable)),this.accumulatedWeightedInfNorm!=null&&Nt(this.accumulatedWeightedInfNorm.map(t=>t.variable))}getWeights(){return J(this,null,function*(){throw new Error("getWeights() is not implemented for Adamax yet.")})}setWeights(t){return J(this,null,function*(){throw new Error("setWeights() is not implemented for Adamax yet.")})}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}}static fromConfig(t,e){return new t(e.learningRate,e.beta1,e.beta2,e.epsilon,e.decay)}}class Zh extends Bs{static get className(){return"SGD"}constructor(t){super(),this.learningRate=t,this.setLearningRate(t)}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,o)=>{const r=Array.isArray(t)?t[o].tensor:t[s];if(r==null)return;const i=P.registeredVariables[s];U(()=>{const a=tt(L(this.c,r),i);i.assign(a)})}),this.incrementIterations()}setLearningRate(t){this.learningRate=t,this.c!=null&&this.c.dispose(),this.c=Yn(zt(-t))}dispose(){this.c.dispose()}getWeights(){return J(this,null,function*(){return[yield this.saveIterations()]})}setWeights(t){return J(this,null,function*(){if(t=yield this.extractIterations(t),t.length!==0)throw new Error("SGD optimizer does not have settable weights.")})}getConfig(){return{learningRate:this.learningRate}}static fromConfig(t,e){return new t(e.learningRate)}}class Zm extends Zh{static get className(){return"Momentum"}constructor(t,e,s=!1){super(t),this.learningRate=t,this.momentum=e,this.useNesterov=s,this.accumulations=[],this.m=zt(this.momentum)}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,o)=>{const r=P.registeredVariables[s];this.accumulations[o]==null&&(this.accumulations[o]={originalName:`${s}/momentum`,variable:U(()=>Dt(r).variable(!1))});const i=this.accumulations[o].variable,a=Array.isArray(t)?t[o].tensor:t[s];a!=null&&U(()=>{let l;const c=tt(L(this.m,i),a);this.useNesterov?l=tt(L(this.c,tt(a,L(c,this.m))),r):l=tt(L(this.c,c),r),i.assign(c),r.assign(l)})}),this.incrementIterations()}dispose(){this.m.dispose(),this.accumulations!=null&&Nt(this.accumulations.map(t=>t.variable))}setMomentum(t){this.momentum=t}getWeights(){return J(this,null,function*(){return[yield this.saveIterations()].concat(this.accumulations.map(t=>({name:t.originalName,tensor:t.variable})))})}setWeights(t){return J(this,null,function*(){t=yield this.extractIterations(t);const e=!1;this.accumulations=t.map(s=>({originalName:s.name,variable:s.tensor.variable(e)}))})}getConfig(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}}static fromConfig(t,e){return new t(e.learningRate,e.momentum,e.useNesterov)}}class Qm extends Bs{static get className(){return"RMSProp"}constructor(t,e=.9,s=0,o=null,r=!1){if(super(),this.learningRate=t,this.decay=e,this.momentum=s,this.epsilon=o,this.accumulatedMeanSquares=[],this.accumulatedMoments=[],this.accumulatedMeanGrads=[],this.centered=r,o==null&&(this.epsilon=P.backend.epsilon()),t==null)throw new Error("learningRate for RMSPropOptimizer must be defined.")}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,o)=>{const r=P.registeredVariables[s],i=!1;this.accumulatedMeanSquares[o]==null&&(this.accumulatedMeanSquares[o]={originalName:`${s}/rms`,variable:U(()=>Dt(r).variable(i))}),this.accumulatedMoments[o]==null&&(this.accumulatedMoments[o]={originalName:`${s}/momentum`,variable:U(()=>Dt(r).variable(i))}),this.accumulatedMeanGrads[o]==null&&this.centered&&(this.accumulatedMeanGrads[o]={originalName:`${s}/mg`,variable:U(()=>Dt(r).variable(i))});const a=Array.isArray(t)?t[o].tensor:t[s];if(a==null)return;const l=this.accumulatedMeanSquares[o].variable,c=this.accumulatedMoments[o].variable;U(()=>{const u=tt(L(l,this.decay),L(jt(a),1-this.decay));if(this.centered){const h=this.accumulatedMeanGrads[o].variable,d=tt(L(h,this.decay),L(a,1-this.decay)),p=gt(L(a,this.learningRate),Le(bt(u,tt(jt(d),this.epsilon)))),f=tt(L(c,this.momentum),p);l.assign(u),h.assign(d),c.assign(f);const m=bt(r,f);r.assign(m)}else{const h=tt(L(l,this.decay),L(jt(a),1-this.decay)),d=tt(L(c,this.momentum),gt(L(a,this.learningRate),Le(tt(h,this.epsilon))));l.assign(h),c.assign(d);const p=bt(r,d);r.assign(p)}})}),this.incrementIterations()}dispose(){this.accumulatedMeanSquares!=null&&Nt(this.accumulatedMeanSquares.map(t=>t.variable)),this.accumulatedMeanGrads!=null&&this.centered&&Nt(this.accumulatedMeanGrads.map(t=>t.variable)),this.accumulatedMoments!=null&&Nt(this.accumulatedMoments.map(t=>t.variable))}getWeights(){return J(this,null,function*(){const t=[...this.accumulatedMeanSquares,...this.accumulatedMoments];return this.centered&&t.push(...this.accumulatedMeanGrads),[yield this.saveIterations()].concat(t.map(e=>({name:e.originalName,tensor:e.variable})))})}setWeights(t){return J(this,null,function*(){t=yield this.extractIterations(t);const e=this.centered?t.length/3:t.length/2,s=!1;this.accumulatedMeanSquares=t.slice(0,e).map(o=>({originalName:o.name,variable:o.tensor.variable(s)})),this.accumulatedMoments=t.slice(e,e*2).map(o=>({originalName:o.name,variable:o.tensor.variable(s)})),this.centered&&(this.accumulatedMeanGrads=t.slice(e*2,e*3).map(o=>({originalName:o.name,variable:o.tensor.variable(s)})))})}getConfig(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}}static fromConfig(t,e){return new t(e.learningRate,e.decay,e.momentum,e.epsilon,e.centered)}}const WS=[Xm,Km,jm,Ym,Zm,Qm,Zh];function US(){for(const n of WS)Z(n)}const GS="model",HS=".json",qS=".weights.bin";function Jm(n){return new Promise(t=>setTimeout(t)).then(n)}class wo{constructor(t){if(!q().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");t.startsWith(wo.URL_SCHEME)&&(t=t.slice(wo.URL_SCHEME.length)),(t==null||t.length===0)&&(t=GS),this.modelJsonFileName=t+HS,this.weightDataFileName=t+qS}save(t){return J(this,null,function*(){if(typeof document=="undefined")throw new Error("Browser downloads are not supported in this environment since `document` is not present");const e=Fs.join(t.weightData),s=window.URL.createObjectURL(new Blob([e],{type:"application/octet-stream"}));if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");{const o=[{paths:["./"+this.weightDataFileName],weights:t.weightSpecs}],r=jf(t,o),i=window.URL.createObjectURL(new Blob([JSON.stringify(r)],{type:"application/json"})),a=this.modelJsonAnchor==null?document.createElement("a"):this.modelJsonAnchor;if(a.download=this.modelJsonFileName,a.href=i,yield Jm(()=>a.dispatchEvent(new MouseEvent("click"))),t.weightData!=null){const l=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor;l.download=this.weightDataFileName,l.href=s,yield Jm(()=>l.dispatchEvent(new MouseEvent("click")))}return{modelArtifactsInfo:Fl(t)}}})}}wo.URL_SCHEME="downloads://";const XS=n=>q().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(wo.URL_SCHEME)?KS(n.slice(wo.URL_SCHEME.length)):null;Ce.registerSaveRouter(XS);function KS(n="model"){return new wo(n)}function tg(n,t,e,s){i(n),e=e==null?0:e,s=s==null?1:s,a(e,s);let o=0;const r=l=>(l.then(c=>{const u=e+ ++o/n.length*(s-e);return t(u),c}),l);function i(l){T(l!=null&&Array.isArray(l)&&l.length>0,()=>"promises must be a none empty array")}function a(l,c){T(l>=0&&l<=1,()=>`Progress fraction must be in range [0, 1], but got startFraction ${l}`),T(c>=0&&c<=1,()=>`Progress fraction must be in range [0, 1], but got endFraction ${c}`),T(c>=l,()=>`startFraction must be no more than endFraction, but got startFraction ${l} and endFraction ${c}`)}return Promise.all(n.map(r))}function jS(n,t){return J(this,null,function*(){t==null&&(t={});const e=t.fetchFunc==null?q().platform.fetch:t.fetchFunc,s=n.map(h=>e(h,t.requestInit,{isBinary:!0})),a=(t.onProgress==null?yield Promise.all(s):yield tg(s,t.onProgress,0,.5)).map(h=>h.arrayBuffer());return t.onProgress==null?yield Promise.all(a):yield tg(a,t.onProgress,.5,1)})}function YS(n,t){var e;const s=t.fetchFunc==null?q().platform.fetch:t.fetchFunc;let o=0,r;return(e=t.onProgress)===null||e===void 0||e.call(t,0),new ReadableStream({pull:i=>J(null,null,function*(){for(var a;o<n.length;){r||(r=(yield s(n[o],t.requestInit,{isBinary:!0})).body.getReader());const{done:l,value:c}=yield r.read();if(l){o++,r=void 0,(a=t.onProgress)===null||a===void 0||a.call(t,o/n.length);continue}i.enqueue(c);return}i.close()})})}const ZS="application/octet-stream",QS="application/json";class Qh{constructor(t,e){if(this.DEFAULT_METHOD="POST",e==null&&(e={}),this.weightPathPrefix=e.weightPathPrefix,this.weightUrlConverter=e.weightUrlConverter,e.fetchFunc!=null?(T(typeof e.fetchFunc=="function",()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"),this.fetch=e.fetchFunc):this.fetch=q().platform.fetch,T(t!=null&&t.length>0,()=>"URL path for http must not be null, undefined or empty."),Array.isArray(t)&&T(t.length===2,()=>`URL paths for http must have a length of 2, (actual length is ${t.length}).`),this.path=t,e.requestInit!=null&&e.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=e.requestInit||{},this.loadOptions=e}save(t){return J(this,null,function*(){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");const e=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);e.body=new FormData;const s=[{paths:["./model.weights.bin"],weights:t.weightSpecs}],o=jf(t,s);if(e.body.append("model.json",new Blob([JSON.stringify(o)],{type:QS}),"model.json"),t.weightData!=null){const i=Fs.join(t.weightData);e.body.append("model.weights.bin",new Blob([i],{type:ZS}),"model.weights.bin")}const r=yield this.fetch(this.path,e);if(r.ok)return{modelArtifactsInfo:Fl(t),responses:[r]};throw new Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${r.status}.`)})}loadModelJSON(){return J(this,null,function*(){const t=yield this.fetch(this.path,this.requestInit);if(!t.ok)throw new Error(`Request to ${this.path} failed with status code ${t.status}. Please verify this URL points to the model JSON of the model to load.`);let e;try{e=yield t.json()}catch(r){let i=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(".pb")?i+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":i+=" Please make sure the server is serving valid JSON for this request.",new Error(i)}const s=e.modelTopology,o=e.weightsManifest;if(s==null&&o==null)throw new Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return e})}load(){return J(this,null,function*(){if(this.loadOptions.streamWeights)return this.loadStream();const t=yield this.loadModelJSON();return fC(t,e=>this.loadWeights(e))})}loadStream(){return J(this,null,function*(){const t=yield this.loadModelJSON(),e=yield this.getWeightUrls(t.weightsManifest),s=Yf(t.weightsManifest),o=()=>YS(e,this.loadOptions);return Object.assign(Object.assign({},t),{weightSpecs:s,getWeightStream:o})})}getWeightUrls(t){return J(this,null,function*(){const e=Array.isArray(this.path)?this.path[1]:this.path,[s,o]=JS(e),r=this.weightPathPrefix||s,i=[],a=[];for(const l of t)for(const c of l.paths)this.weightUrlConverter!=null?a.push(this.weightUrlConverter(c)):i.push(r+c+o);return this.weightUrlConverter&&i.push(...yield Promise.all(a)),i})}loadWeights(t){return J(this,null,function*(){const e=yield this.getWeightUrls(t),s=Yf(t),o=yield jS(e,this.loadOptions);return[s,o]})}}Qh.URL_SCHEME_REGEX=/^https?:\/\//;function JS(n){const t=n.lastIndexOf("/"),e=n.lastIndexOf("?"),s=n.substring(0,t),o=e>t?n.substring(e):"";return[s+"/",o]}function eg(n){return n.match(Qh.URL_SCHEME_REGEX)!=null}const ng=(n,t)=>{if(typeof fetch=="undefined"&&(t==null||t.fetchFunc==null))return null;{let e=!0;if(Array.isArray(n)?e=n.every(s=>eg(s)):e=eg(n),e)return t2(n,t)}return null};Ce.registerSaveRouter(ng),Ce.registerLoadRouter(ng);function t2(n,t){return new Qh(n,t)}function Jh(n,t){const e=n.shape.length,s=t.shape.length;if(e<1)throw new Error(`tf.gatherND() expects the input to be rank 1 or higher, but the rank was ${e}.`);if(s<1)throw new Error(`tf.gatherND() expects the indices to be rank 1 or higher, but the rank was ${s}.`);if(t.dtype!=="int32")throw new Error(`tf.gatherND() expects the indices to be int32 type, but the dtype was ${t.dtype}.`);if(t.shape[s-1]>e)throw new Error(`index innermost dimension length must be <= tensor rank; saw: ${t.shape[s-1]} vs. ${e}`);if(K(n.shape)===0)throw new Error(`Requested more than 0 entries, but input is empty. Input shape: ${n.shape}.`);const o=t.shape,r=o[o.length-1];let i=1;for(let h=0;h<o.length-1;++h)i*=o[h];const a=n.shape,l=o.slice();l.pop();let c=1;for(let h=r;h<e;++h)c*=a[h],l.push(a[h]);const u=[...ft(n.shape).map(h=>h/c),1].slice(0,r);return[l,i,c,u]}const td=-2,e2=-1;function sg(n,t,e){const s=n.shape.length;T(s===t.length,()=>`Error in slice${s}D: Length of begin ${t} must match the rank of the array (${s}).`),T(s===e.length,()=>`Error in slice${s}D: Length of size ${e} must match the rank of the array (${s}).`);for(let o=0;o<s;++o)T(t[o]+e[o]<=n.shape[o],()=>`Error in slice${s}D: begin[${o}] + size[${o}] (${t[o]+e[o]}) would overflow input.shape[${o}] (${n.shape[o]})`)}function og(n,t,e){const s=[];for(let o=0;o<n.length;o++)s[o]=Math.ceil((t[o]-n[o])/e[o]);return s}function rg(n,t,e){let s=e.length;for(let o=0;o<e.length;o++)if(e[o]>1){s=o;break}for(let o=s+1;o<e.length;o++)if(t[o]>0||e[o]!==n[o])return!1;return!0}function ig(n,t){let e=n.length>0?n[n.length-1]:1;for(let s=0;s<n.length-1;s++)e+=n[s]*t[s];return e}function ed(n,t,e){let s;const o=n.shape.length;typeof t=="number"?s=[t,...new Array(o-1).fill(0)]:t.length<o?s=t.concat(new Array(o-t.length).fill(0)):s=t.slice(),s.forEach(i=>{T(i!==-1,()=>"slice() does not support negative begin indexing.")});let r;return e==null?r=new Array(o).fill(-1):typeof e=="number"?r=[e,...new Array(o-1).fill(-1)]:e.length<o?r=e.concat(new Array(o-e.length).fill(-1)):r=e,r=r.map((i,a)=>i>=0?i:(T(i===-1,()=>`Negative size values should be exactly -1 but got ${i} for the slice() size at index ${a}.`),n.shape[a]-s[a])),[s,r]}function ag(n,t,e,s,o,r,i,a,l){let c;if(s==null?(c=new Array(t.length),c.fill(1)):c=s,i!=null&&(i&i-1)!==0)throw new Error("Multiple ellipses in slice is not allowed.");let u=!1;const h={dims:c.length,numAddAxisAfterEllipsis:0,begin:t.slice(),end:e.slice(),strides:c.slice(),beginMask:o,endMask:r,ellipsisMask:i,newAxisMask:a,shrinkAxisMask:l};for(let w=0;w<h.dims;w++)u&&(1<<w&a)!==0&&h.numAddAxisAfterEllipsis++,1<<w&i&&(u=!0);u||(h.ellipsisMask|=1<<h.dims,h.dims++);const d={dims:n.length,beginMask:0,endMask:0,beginValid:!1,endValid:!1};n2(h,d);let p=!0,f=!0,m=!0;const g=[],x=[];for(let w=0;w<n.length;++w){if(d.strides[w]===0)throw Error(`strides[${w}] must be non-zero`);const y=!!(d.shrinkAxisMask&1<<w),C=n[w];if(C===-1){g.push(y?1:-1);continue}const I=[d.beginMask&1<<w,d.endMask&1<<w],v=[d.strides[w]>0?0:-1,d.strides[w]>0?C:C-1];if(y&&d.strides[w]<=0)throw Error("only stride 1 allowed on non-range indexing.");m=m&&d.strides[w]===1;const N=!!(d.beginMask&1<<w&&d.endMask&1<<w);if(d.beginValid&&d.endValid){if(y){const E=d.begin[w]<0?C+d.begin[w]:d.begin[w];if(d.begin[w]=E,d.end[w]=d.begin[w]+1,E<0||E>=C)throw Error(`slice index ${d.begin[w]} of dimension ${w} out of bounds.`)}else d.begin[w]=lg(d.begin[w],0,d.strides[w],C,I,v),d.end[w]=lg(d.end[w],1,d.strides[w],C,I,v);const $=d.strides[w]===1&&d.begin[w]===0&&d.end[w]===C;p=p&&$,f=f&&(w===0&&d.strides[w]===1||$)}else p=p&&d.strides[w]===1&&N,f=f&&(w===0&&d.strides[w]===1||N);let S,k=!1;if(d.beginValid&&d.endValid?(S=d.end[w]-d.begin[w],k=!0):y?(S=1,k=!0):N&&C>=0&&(d.strides[w]<0?S=-C:S=C,k=!0),k){let $;S===0||S<0!=d.strides[w]<0?$=0:$=Math.trunc(S/d.strides[w])+(S%d.strides[w]!==0?1:0),g.push($)}else g.push(-1)}for(let w=0;w<d.finalShapeGatherIndices.length;++w){const y=d.finalShapeGatherIndices[w];y>=0?x.push(g[y]):y===td&&x.push(1)}return{finalShapeSparse:x.filter((w,y)=>d.finalShapeGatherIndices[y]!==td),finalShape:x,isIdentity:p,sliceDim0:f,isSimpleSlice:m,begin:d.begin,end:d.end,strides:d.strides}}function n2(n,t){t.beginMask=0,t.endMask=0,t.shrinkAxisMask=0;let e=0;t.beginValid=n.begin!=null,t.endValid=n.end!=null,t.begin=new Array(t.dims),t.end=new Array(t.dims),t.strides=new Array(t.dims),t.finalShapeGatherIndices=[],t.finalShapeGatherIndicesSparse=[],t.inputShapeGatherIndicesSparse=new Array(t.dims);for(let s=0;s<n.dims;s++)if(1<<s&n.ellipsisMask){const o=Math.min(t.dims-(n.dims-s)+1+n.numAddAxisAfterEllipsis,t.dims);for(;e<o;e++)t.begin[e]=0,t.end[e]=0,t.strides[e]=1,t.beginMask|=1<<e,t.endMask|=1<<e,t.finalShapeGatherIndices.push(e),t.finalShapeGatherIndicesSparse.push(-1),t.inputShapeGatherIndicesSparse[e]=s}else if(1<<s&n.newAxisMask)t.finalShapeGatherIndices.push(td),t.finalShapeGatherIndicesSparse.push(-1);else{if(e===t.begin.length)throw Error(`Index out of range using input dim ${e}; input has only ${t.dims} dims, ${t.begin.length}.`);n.begin!=null&&(t.begin[e]=n.begin[s]),n.end!=null&&(t.end[e]=n.end[s]),t.strides[e]=n.strides[s],n.beginMask&1<<s&&(t.beginMask|=1<<e),n.endMask&1<<s&&(t.endMask|=1<<e),n.shrinkAxisMask&1<<s?(t.finalShapeGatherIndices.push(e2),t.finalShapeGatherIndicesSparse.push(-1),t.shrinkAxisMask|=1<<e):(t.finalShapeGatherIndices.push(e),t.finalShapeGatherIndicesSparse.push(s)),t.inputShapeGatherIndicesSparse[e]=s,e++}}function lg(n,t,e,s,o,r){if(o[t])return e>0?r[t]:r[t+1&1];{const i=n<0?s+n:n;return i<r[0]?r[0]:i>r[1]?r[1]:i}}class s2{static sgd(t){return new Zh(t)}static momentum(t,e,s=!1){return new Zm(t,e,s)}static rmsprop(t,e=.9,s=0,o=null,r=!1){return new Qm(t,e,s,o,r)}static adam(t=.001,e=.9,s=.999,o=null){return new jm(t,e,s,o)}static adadelta(t=.001,e=.95,s=null){return new Xm(t,e,s)}static adamax(t=.002,e=.9,s=.999,o=null,r=0){return new Ym(t,e,s,o,r)}static adagrad(t,e=.1){return new Km(t,e)}}const nr=s2;const o2=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:typeof setImmediate!="undefined"?setImmediate:n=>n();function cg(){return new Promise(n=>o2(()=>n()))}function nd(n,t){const e=n[0].length;n.forEach((o,r)=>{T(o.length===e,()=>`Error in concat${e}D: rank of tensors[${r}] must be the same as the rank of the rest (${e})`)}),T(t>=0&&t<e,()=>`Error in concat${e}D: axis must be between 0 and ${e-1}.`);const s=n[0];n.forEach((o,r)=>{for(let i=0;i<e;i++)T(i===t||o[i]===s[i],()=>`Error in concat${e}D: Shape of tensors[${r}] (${o}) does not match the shape of the rest (${s}) along the non-concatenated axis ${r}.`)})}function es(n,t){const e=n[0].slice();for(let s=1;s<n.length;s++)e[t]+=n[s][t];return e}var zn;(function(n){n[n.FIRST_DIM_SIZE=0]="FIRST_DIM_SIZE",n[n.VALUE_ROWIDS=1]="VALUE_ROWIDS",n[n.ROW_LENGTHS=2]="ROW_LENGTHS",n[n.ROW_SPLITS=3]="ROW_SPLITS",n[n.ROW_LIMITS=4]="ROW_LIMITS",n[n.ROW_STARTS=5]="ROW_STARTS"})(zn||(zn={}));function ug(n,t,e){let s=new Array;if(e==null&&t==null)return s;if(t==null)for(;s.length<n+e.length;)s.push(-1);else s=t.slice();if(e==null)return s;if(n+e.length!==s.length)throw new Error(`rt input.shape and shape=${t} are incompatible: rt input.rank = ${n+e.length}, but shape.rank = ${s.length}`);for(let o=1;o<e.length;++o){const r=e[o],i=s[s.length-e.length+o],a=s[i];if(r>=0)if(a>=0){if(a!==r)throw new Error(`rt input.shape and shape=${t} are incompatible: rt input.shape[${o+n}] = ${r} but shape[${o+n}] = ${a}`)}else s[i]=r}return s}function hg(n){const t={FIRST_DIM_SIZE:zn.FIRST_DIM_SIZE,VALUE_ROWIDS:zn.VALUE_ROWIDS,ROW_LENGTHS:zn.ROW_LENGTHS,ROW_SPLITS:zn.ROW_SPLITS,ROW_LIMITS:zn.ROW_LIMITS,ROW_STARTS:zn.ROW_STARTS},e=[];for(const s of n)if(s in t)e.push(t[s]);else break;return e}function dg(n){return n.length===0?0:n[0]===zn.FIRST_DIM_SIZE?n.length-1:n.length}function pg(n,t){if(n==null||t==null)return;const e=n.length,s=t.length;if(e>=s)throw new Error(`defaultValue.shape=${n} and ragged tensor flatValues.shape=${t}, are incompatible: defaultValue.rank = ${e} must be less than ragged tensor input flatValues.rank = ${s})`);for(let o=0;o<Math.min(e,s-1);++o){const r=n[o],i=t[o+1];if(r>=0&&i>=0&&r!==1&&r!==i)throw new Error(`defaultValue.shape=${n}, and ragged tensor input flatValues.shape=${t} are incompatible: defaultValue.shape[${o-n.length}] = ${r} but ragged tensor input.flatValues.shape[${o-n.length}] = ${i}`)}}const sd=30;function Ql(n){return n<=sd?n:au(n,Math.floor(Math.sqrt(n)))}function od(n,t,e){const s=e*(typeof n=="number"?n:n[0]),o=t*(typeof n=="number"?n:n[1]);return[s,o]}function Bi(n,t,e,s=!0){let o=[];if(s)o=o.concat(t.slice(0)),o.push(n[0]/e),o=o.concat(n.slice(1));else{o=o.concat(n[0]);const r=t.length;for(let i=0;i<r;++i)o=o.concat([n[i+1]/t[i],t[i]]);o=o.concat(n.slice(r+1))}return o}function zi(n,t,e=!0){const s=[];if(e){s.push(t);for(let o=t+1;o<n;++o)o<=2*t?(s.push(o),s.push(o-(t+1))):s.push(o)}else{const o=[],r=[];for(let i=1;i<n;++i)i>=t*2+1||i%2===1?r.push(i):o.push(i);s.push(...o),s.push(0),s.push(...r)}return s}function Vi(n,t,e,s=!0){const o=[];s?o.push(n[0]/e):o.push(n[0]*e);for(let r=1;r<n.length;++r)r<=t.length?s?o.push(t[r-1]*n[r]):o.push(n[r]/t[r-1]):o.push(n[r]);return o}function rd(n,t){const e=[0];for(let s=0;s<t;++s)e.push(n[s][0]);return e}function id(n,t,e){const s=n.slice(0,1);for(let o=0;o<e;++o)s.push(n[o+1]-t[o][0]-t[o][1]);return s}const Jl=1.7580993408473768,tc=1.0507009873554805;const ad=.3275911,ld=.254829592,cd=-.284496736,ud=1.421413741,hd=-1.453152027,dd=1.061405429;function ys(n,t){if(n.length!==t.length)throw new Error(`Cannot merge real and imag arrays of different lengths. real:${n.length}, imag: ${t.length}.`);const e=new Float32Array(n.length*2);for(let s=0;s<e.length;s+=2)e[s]=n[s/2],e[s+1]=t[s/2];return e}function fg(n){const t=new Float32Array(n.length/2),e=new Float32Array(n.length/2);for(let s=0;s<n.length;s+=2)t[s/2]=n[s],e[s/2]=n[s+1];return{real:t,imag:e}}function mg(n){const t=Math.ceil(n.length/4),e=new Float32Array(t),s=new Float32Array(t);for(let o=0;o<n.length;o+=4)e[Math.floor(o/4)]=n[o],s[Math.floor(o/4)]=n[o+1];return{real:e,imag:s}}function gg(n){const t=Math.floor(n.length/4),e=new Float32Array(t),s=new Float32Array(t);for(let o=2;o<n.length;o+=4)e[Math.floor(o/4)]=n[o],s[Math.floor(o/4)]=n[o+1];return{real:e,imag:s}}function pd(n,t){const e=n[t*2],s=n[t*2+1];return{real:e,imag:s}}function xg(n,t,e,s){n[s*2]=t,n[s*2+1]=e}function bg(n,t){const e=new Float32Array(n/2),s=new Float32Array(n/2);for(let o=0;o<Math.ceil(n/2);o++){const r=(t?2:-2)*Math.PI*(o/n);e[o]=Math.cos(r),s[o]=Math.sin(r)}return{real:e,imag:s}}function yg(n,t,e){const s=(e?2:-2)*Math.PI*(n/t),o=Math.cos(s),r=Math.sin(s);return{real:o,imag:r}}const fd="->",r2=/->/g,wg=",",Cg="...";function md(n,t){n=n.replace(/\s/g,"");const e=(n.length-n.replace(r2,"").length)/fd.length;if(e<1)throw new Error("Equations without an arrow are not supported.");if(e>1)throw new Error(`Equation must contain exactly one arrow ("${fd}").`);const[s,o]=n.split(fd);T(s.indexOf(Cg)===-1,()=>`The ellipsis notation ("${Cg}") is not supported yet.`);const r=s.split(wg),i=r.length;if(t!==i)throw new Error(`Expected ${i} input tensors, received ${t}`);if(i>2)throw new Error("Support for more than 2 input tensors is not implemented yet.");const a=[];for(let d=0;d<o.length;++d){const p=o[d];if(!r.some(f=>f.indexOf(p)!==-1))throw new Error(`Output subscripts contain the label ${p} not present in the input subscripts.`);a.indexOf(p)===-1&&a.push(p)}for(let d=0;d<s.length;++d){const p=s[d];a.indexOf(p)===-1&&p!==wg&&a.push(p)}const l=new Array(r.length);for(let d=0;d<i;++d){if(new Set(r[d].split("")).size!==r[d].length)throw new Error(`Found duplicate axes in input component ${r[d]}. Support for duplicate axes in input is not implemented yet.`);l[d]=[];for(let p=0;p<r[d].length;++p)l[d].push(a.indexOf(r[d][p]))}const c=a.length,u=o.length,h=[];for(let d=u;d<c;++d)h.push(d);return{allDims:a,summedDims:h,idDims:l}}function gd(n,t){let e=new Array(n);e.fill(-1);for(let o=0;o<t.length;++o)e[t[o]]=o;const s=[];for(let o=0;o<n;++o)e[o]===-1&&s.push(o);return e=e.filter(o=>o!==-1),{permutationIndices:e,expandDims:s}}function xd(n,t,e){const s=new Array(n);for(let o=0;o<e.length;++o){const r=e[o].shape;for(let i=0;i<t[o].length;++i)s[t[o][i]]===void 0?s[t[o][i]]=r[i]:T(s[t[o][i]]===r[i],()=>`Expected dimension ${s[t[o][i]]} at axis ${i} of input shaped ${JSON.stringify(r)}, but got dimension ${r[i]}`)}}function bd(n,t){const e=n,s=[];let o=0;n.length===0&&e.push(-1),o=n.length+1;for(let i=0;i<o;++i)s.push([]);const r=[];for(let i=0;i<e.length;++i){const a=e[i],l=i2(t,a);for(const c of l)r.indexOf(c)===-1&&(s[i].push(c),r.push(c))}return{path:e,steps:s}}function yd(n){return n.every((t,e)=>t===e)}function i2(n,t){const e=[];for(let s=0;s<n.length;++s)(n[s].length===0||n[s].indexOf(t)!==-1||t===-1)&&e.push(s);return e}function wd(n,t,e=0){let s=[];if(typeof t=="number")T(n.shape[e]%t===0,()=>"Number of splits must evenly divide the axis."),s=new Array(t).fill(n.shape[e]/t);else{const o=t.reduce((i,a)=>(a===-1&&(i+=1),i),0);T(o<=1,()=>"There should be only one negative value in split array.");const r=t.indexOf(-1);if(r!==-1){const i=t.reduce((a,l)=>l>0?a+l:a);t[r]=n.shape[e]-i}T(n.shape[e]===t.reduce((i,a)=>i+a),()=>"The sum of sizes must match the size of the axis dimension."),s=t}return s}function $g(n){return`Received SparseTensor with denseShape[0] = 0 but
  indices.shape[0] = ${n}`}function Ig(n,t){return`indices(${n}, 0) is invalid: ${t} < 0`}function vg(n,t,e){return`indices(${n}, 0) is invalid: ${t} >= ${e}`}function kg(n,t){return`only one output dimension may be -1, not both ${n} and ${t}`}function Sg(n,t){return`size ${n} must be non-negative, not ${t}`}function Ng(){return"reshape cannot infer the missing input size for an empty tensor unless all specified input sizes are non-zero"}function Tg(n,t){const e=K(n),s=K(t);return`Input to reshape is a SparseTensor with ${e}
  dense values, but the requested shape requires a multiple of ${s}. inputShape=${n} outputShape= ${t}`}function Eg(n,t){const e=K(n),s=K(t);return`Input to reshape is a tensor with ${e} dense values, but the requested shape has ${s}. inputShape=${n} outputShape=${t}`}function Cd(){return"segment ids must be >= 0"}function Rg(){return"segment ids are not increasing"}function Ag(n,t){return`Segment id ${n} out of range [0, ${t}), possibly because segmentIds input is not sorted.`}function Dg(n,t,e){return`Bad: indices[${n}] == ${t} out of range [0, ${e})`}function a2(n,t){let e=!1,s;for(n<=sd?(s=n,e=!0):s=au(n,Math.floor(Math.sqrt(n)));!e;)s>t||s===n?e=!0:s=au(n,s+1);return s}function l2(n,t,e){const s=[],o=n.length;for(let r=0;r<o;r++)r!==t?s.push(n[r]):s.push(e);return s}function Fg(n,t,e,s){const o=t.shape.length,r=n.shape.length;if(s!==0&&(s<-o||s>o))throw new Error(`Expect batchDims in the range of [-${o}, ${o}], but got ${s}`);if(s<0&&(s+=o),s>r)throw new Error(`batchDims (${s}) must be less than rank(x) (
    ${r}).`);if(e<s)throw new Error(`batchDims (${s}) must be less than or equal to axis (${e}).`);for(let h=0;h<s;++h)if(n.shape[h]!==t.shape[h])throw new Error(`x.shape[${h}]: ${n.shape[h]} should be equal to indices.shape[${h}]: ${t.shape[h]}.`);const i=n.shape[e],a=[];let l=1,c=1,u=1;for(let h=0;h<s;++h)a.push(n.shape[h]),l*=n.shape[h];for(let h=s;h<e;h++)a.push(n.shape[h]),c*=n.shape[h];for(let h=s;h<o;h++)a.push(t.shape[h]);for(let h=e+1;h<r;h++)a.push(n.shape[h]),u*=n.shape[h];return{batchSize:l,sliceSize:u,outerSize:c,dimSize:i,outputShape:a}}function ws(n){try{return n.map(t=>Ds(t))}catch(t){throw new Error(`Failed to decode encoded string bytes into utf-8, error: ${t}`)}}function _g(n){return n.map(t=>As(t))}var c2=Object.freeze({__proto__:null,ERF_A1:ld,ERF_A2:cd,ERF_A3:ud,ERF_A4:hd,ERF_A5:dd,ERF_P:ad,PARALLELIZE_THRESHOLD:sd,get RowPartitionType(){return zn},SELU_SCALE:tc,SELU_SCALEALPHA:Jl,applyActivation:Hh,assertAndGetBroadcastShape:$t,assertAxesAreInnerMostDims:Ne,assertParamsConsistent:nd,assignToTypedArray:xg,axesAreInnerMostDims:kh,calculateShapes:bo,checkEinsumDimSizes:xd,checkPadOnDimRoundingMode:Ye,combineLocations:pm,combineRaggedTensorToTensorShapes:ug,complexWithEvenIndex:mg,complexWithOddIndex:gg,computeConv2DInfo:Se,computeConv3DInfo:Os,computeDefaultPad:xh,computeDilation2DInfo:Ti,computeOptimalWindowSize:Ql,computeOutAndReduceShapes:$e,computeOutShape:es,computePool2DInfo:In,computePool3DInfo:fs,convertConv2DDataFormat:ms,decodeEinsumEquation:md,eitherStridesOrDilationsAreOne:Me,expandShapeToKeepDim:he,exponent:yg,exponents:bg,fromStringArrayToUint8:_g,fromUint8ToStringArray:ws,getAxesPermutation:Jt,getBroadcastDims:Zo,getComplexWithIndex:pd,getEinsumComputePath:bd,getEinsumPermutation:gd,getFusedBiasGradient:Gh,getFusedDyActivation:Uh,getImageCenter:od,getInnerMostAxes:ie,getPermuted:zi,getRaggedRank:dg,getReductionAxes:fe,getReshaped:Bi,getReshapedPermuted:Vi,getRowPartitionTypesHelper:hg,getSliceBeginCoords:rd,getSliceSize:id,getSparseFillEmptyRowsIndicesDenseShapeMismatch:$g,getSparseFillEmptyRowsNegativeIndexErrorMessage:Ig,getSparseFillEmptyRowsOutOfRangeIndexErrorMessage:vg,getSparseReshapeEmptyTensorZeroOutputDimErrorMessage:Ng,getSparseReshapeInputOutputMismatchErrorMessage:Eg,getSparseReshapeInputOutputMultipleErrorMessage:Tg,getSparseReshapeMultipleNegativeOneOutputDimErrorMessage:kg,getSparseReshapeNegativeOutputDimErrorMessage:Sg,getSparseSegmentReductionIndicesOutOfRangeErrorMessage:Dg,getSparseSegmentReductionNegativeSegmentIdsErrorMessage:Cd,getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage:Rg,getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage:Ag,getUndoAxesPermutation:Ms,isIdentityPermutation:yd,mergeRealAndImagArrays:ys,prepareAndValidate:Jh,prepareSplitSize:wd,shouldFuse:qh,splitRealAndImagArrays:fg,stridesOrDilationsArePositive:ho,tupleValuesAreOne:uo,upcastType:sn,validateDefaultValueShape:pg,warn:fn});US();const Og={kernelName:va,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>L(n,Pi(at(e,"float32"),-1))}}};const u2={kernelName:Tr,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>{const s=jt(at(e,"float32")),o=Le(bt(zt(1),s));return ae(gt(n,o))}}}};const h2={kernelName:Er,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>{const s=Le(bt(jt(at(e,"float32")),1));return gt(n,s)}}}};const d2={kernelName:Uo,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,o=$t(e.shape,s.shape);return{a:()=>{let a=n;const l=fe(e.shape,o);return l.length>0&&(a=mt(a,l)),z(a,e.shape)},b:()=>{let a=n;const l=fe(s.shape,o);return l.length>0&&(a=mt(a,l)),z(a,s.shape)}}}};const p2={kernelName:du,saveAllInputs:!0,gradFunc:(n,t)=>{const e={};return t.forEach((s,o)=>{e[o]=()=>n.clone()}),e}};const f2={kernelName:ka,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>Dt(e)}}};const m2={kernelName:Sa,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>Dt(e)}}};const g2={kernelName:Rr,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>gt(n,Le(bt(zt(1),jt(at(e,"float32")))))}}};const x2={kernelName:Ar,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>{const s=Le(tt(zt(1),jt(at(e,"float32"))));return gt(n,s)}}}};const b2={kernelName:_r,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,o=$t(e.shape,s.shape);return{a:()=>{const a=tt(jt(e),jt(s));let l=L(n,gt(s,a));const c=fe(e.shape,o);return c.length>0&&(l=mt(l,c)),z(l,e.shape)},b:()=>{const a=tt(jt(e),jt(s));let l=ae(L(n,gt(e,a)));const c=fe(s.shape,o);return c.length>0&&(l=mt(l,c)),z(l,s.shape)}}}};const y2={kernelName:Dr,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>gt(n,tt(jt(at(e,"float32")),1))}}};const w2={kernelName:Fr,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>gt(n,bt(zt(1),jt(at(e,"float32"))))}}};function C2(n,t,e,s,o,r){const i=D(n,"dy","avgPool3dGrad"),a=D(t,"input","avgPool3dGrad");let l=i,c=a,u=!1;a.rank===4&&(u=!0,l=z(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]]),c=z(a,[1,a.shape[0],a.shape[1],a.shape[2],a.shape[3]])),T(l.rank===5,()=>`Error in avgPool3dGrad: dy must be rank 5 but got rank ${l.rank}.`),T(c.rank===5,()=>`Error in avgPool3dGrad: input must be rank 5 but got rank ${c.rank}.`),Ye("avgPool3dGrad",o,r);const h={dy:l,input:c},d={filterSize:e,strides:s,pad:o,dimRoundingMode:r},p=P.runKernel(gu,h,d);return u?z(p,[p.shape[1],p.shape[2],p.shape[3],p.shape[4]]):p}const $2=W({avgPool3dGrad_:C2});const I2={kernelName:Ta,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{filterSize:o,strides:r,pad:i,dimRoundingMode:a}=e;return{x:()=>$2(n,s,o,r,i,a)}}};function v2(n,t,e,s,o){const r=D(n,"dy","avgPoolGrad"),i=D(t,"input","avgPoolGrad");T(i.rank===r.rank,()=>`Rank of input (${i.rank}) does not match rank of dy (${r.rank})`);let a=i,l=r,c=!1;i.rank===3&&(c=!0,a=z(i,[1,i.shape[0],i.shape[1],i.shape[2]]),l=z(r,[1,r.shape[0],r.shape[1],r.shape[2]])),T(l.rank===4,()=>`Error in avgPoolGrad: dy must be rank 4 but got rank ${l.rank}.`),T(a.rank===4,()=>`Error in avgPoolGrad: input must be rank 4 but got rank ${a.rank}.`);const u={dy:l,input:a},h={filterSize:e,strides:s,pad:o},d=P.runKernel(mu,u,h);return c?z(d,[d.shape[1],d.shape[2],d.shape[3]]):d}const k2=W({avgPoolGrad_:v2});const S2={kernelName:Na,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{filterSize:o,strides:r,pad:i}=e;return{x:()=>k2(n,s,o,r,i)}}};const N2={kernelName:Ea,inputsToSave:["a","b"],gradFunc:(n,t,e)=>{const[s,o]=t,{transposeA:r,transposeB:i}=e;return!r&&!i?{a:()=>Bt(n,o,!1,!0),b:()=>Bt(s,n,!0,!1)}:!r&&i?{a:()=>Bt(n,o,!1,!1),b:()=>Bt(n,s,!0,!1)}:r&&!i?{a:()=>Bt(o,n,!1,!0),b:()=>Bt(s,n,!1,!1)}:{a:()=>Bt(o,n,!0,!0),b:()=>Bt(n,s,!0,!0)}}};const T2={kernelName:Ra,gradFunc:(n,t,e)=>{const{blockShape:s,crops:o}=e;return{x:()=>Fh(n,s,o)}}};const E2={kernelName:Rw,gradFunc:(n,t,e)=>{const s=e,o=s.inputShape,r=s.shape,i=Array.from(r);for(let l=o.length-1;l>=0;l--)if(o[l]===r[l])i[l]=1;else if(o[l]!==1)throw new Error(`broadcastTo(): [${o}] cannot be broadcast to [${r}].`);const a=[];for(let l=0;l<i.length;l++)i[l]>1&&a.push(l);return{x:()=>mt(n,a,!0)}}};const R2={kernelName:Or,gradFunc:n=>({x:()=>n.clone()})};const A2={kernelName:Mr,gradFunc:n=>({x:()=>Dt(n)})};const D2={kernelName:Lr,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{clipValueMin:o,clipValueMax:r}=e;return{x:()=>Ue(gs(mo(s,o),Qo(s,r)),n,Dt(n))}}};const F2={kernelName:Aa,inputsToSave:["x"],gradFunc:Og.gradFunc};const _2={kernelName:Da,saveAllInputs:!0,gradFunc:(n,t,e)=>{const s=t.map(l=>l.shape),{axis:o}=e,r=vt(o,t[0].shape)[0],i=s.map(l=>l[r]);return xn(n,i,r).map(l=>()=>l)}};const O2={kernelName:Fa,inputsToSave:["x","filter"],gradFunc:(n,t,e)=>{const[s,o]=t,{dilations:r,strides:i,pad:a,dataFormat:l}=e;return T(uo(r),()=>`Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${r}'`),{x:()=>Ch(s.shape,n,o,i,a,l),filter:()=>Wh(s,n,o.shape,i,a,l)}}};const M2={kernelName:_a,inputsToSave:["dy","filter"],gradFunc:(n,t,e)=>{const[s,o]=t,{strides:r,pad:i,dataFormat:a,dimRoundingMode:l}=e;return{dy:()=>po(n,o,r,i,a,1,l),filter:()=>Wh(n,s,o.shape,r,i,a,l)}}};function L2(n,t,e,s,o){let r=n;n.rank===4&&(r=z(n,[1,n.shape[0],n.shape[1],n.shape[2],n.shape[3]]));let i=t;i.rank===4&&(i=z(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]])),T(r.rank===5,()=>`Error in conv3dDerFilter: input must be rank 5, but got shape ${r.shape}.`),T(i.rank===5,()=>`Error in conv3dDerFilter: dy must be rank 5, but got shape ${i.shape}.`),T(e.length===5,()=>`Error in conv3dDerFilter: filterShape must be length 5, but got ${e}.`),T(r.shape[4]===e[3],()=>`Error in conv3dDerFilter: depth of input ${r.shape[4]}) must match input depth in filter (${e[3]}.`),T(i.shape[4]===e[4],()=>`Error in conv3dDerFilter: depth of dy (${i.shape[4]}) must match output depth for filter (${e[4]}).`);const a={x:r,dy:i},l={strides:s,pad:o,filterShape:e};return P.runKernel(Cu,a,l)}const P2=W({conv3DBackpropFilter_:L2});const B2={kernelName:Oa,inputsToSave:["x","filter"],gradFunc:(n,t,e)=>{const{dilations:s,strides:o,pad:r}=e;T(uo(s),()=>`Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${s}'`);const[i,a]=t;return{x:()=>lm(i.shape,n,a,o,r),filter:()=>P2(i,n,a.shape,o,r)}}};const z2={kernelName:Pr,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>L(ae(Om(at(e,"float32"))),n)}}};const V2={kernelName:Br,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>L(Mm(at(e,"float32")),n)}}};const W2={kernelName:Ma,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{axis:o,exclusive:r,reverse:i}=e;return{x:()=>{const a=Jt([o],s.rank);let l=um(n,o,r,!i);return a!=null&&(l=Ft(l,a)),l}}}};const U2={kernelName:La,inputsToSave:["x","filter"],gradFunc:(n,t,e)=>{const{dilations:s,strides:o,pad:r,dimRoundingMode:i}=e,a=s==null?[1,1]:s;T(uo(a),()=>`Error in gradient of depthwiseConv2dNative: dilation rates greater than 1 are not yet supported. Got dilations '${a}'`);const[l,c]=t;return T(l.rank===4,()=>`Error in gradient of depthwiseConv2dNative: input must be rank 4, but got rank ${l.rank}.`),T(c.rank===4,()=>`Error in gradient of depthwiseConv2dNative: filter must be rank 4, but got rank ${c.rank}.`),T(l.shape[3]===c.shape[2],()=>`Error in gradient of depthwiseConv2d: number of input channels (${l.shape[3]}) must match the inChannels dimension in filter ${c.shape[2]}.`),T(Me(o,a),()=>`Error in gradient of depthwiseConv2d: Either strides or dilations must be  1. Got strides ${o} and dilations '${a}'.`),Ye("depthwiseConv2d",r,i),{x:()=>Yk(l.shape,n,c,o,r,a,i),filter:()=>Kk(l,n,c.shape,o,r,a,i)}}};const G2={kernelName:Pa,inputsToSave:["x","filter"],gradFunc:(n,t,e)=>{const[s,o]=t,r={x:s,filter:o,dy:n},i={x:s,filter:o,dy:n};return{x:()=>P.runKernel(Eu,r,e),filter:()=>P.runKernel(Ru,i,e)}}};const H2={kernelName:Vr,outputsToSave:[!0],gradFunc:(n,t)=>{const[e]=t,s={dy:n,y:e};return{x:()=>P.runKernel(Du,s)}}};const q2={kernelName:Wr,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t,s=L(Jn(ae(jt(e))),2/Math.sqrt(Math.PI));return{x:()=>L(n,s)}}};const X2={kernelName:Ur,outputsToSave:[!0],gradFunc:(n,t)=>{const[e]=t;return{x:()=>L(n,e)}}};const K2={kernelName:za,inputsToSave:["input"],gradFunc:(n,t)=>{const[e]=t;return{input:()=>z(n,e.shape)}}};const j2={kernelName:Gr,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>L(n,Jn(e))}}};const Y2={kernelName:Hr,gradFunc:n=>({x:()=>Dt(n)})};const Z2={kernelName:qr,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,o=$t(e.shape,s.shape);return{a:()=>{const a=gt(n,at(s,"float32")),l=fe(e.shape,o);return l.length>0?z(mt(a,l),e.shape):a},b:()=>{let a=L(n,at(e,"float32"));const l=fe(s.shape,o);l.length>0&&(a=z(mt(a,l),s.shape));const c=jt(s);return ae(gt(a,at(c,"float32")))}}}};const Q2={kernelName:Va,inputsToSave:["x","mean","variance","scale"],gradFunc:(n,t,e)=>{const{varianceEpsilon:s}=e,[o,r,i,a]=t,l=a==null?zt(1):a,c=fe(r.shape,o.shape),u=[];if(r.rank===1){for(let y=0;y<o.shape.length-1;++y)u.push(o.shape[y]);u.push(1)}const h=bt(o,r),d=L(n,l),p=Dm(tt(i,zt(s))),f=L(L(L(p,p),p),zt(-.5));return{x:()=>r.rank===1?z(L(L(n,Bn(z(p,[1,1,1,r.shape[0]]),u)),l),o.shape):z(L(L(n,p),l),o.shape),mean:()=>{let y=L(L(p,zt(-1)),d);return r.rank===1&&(y=mt(y,c)),z(y,r.shape)},variance:()=>{let y=L(L(f,h),d);return r.rank===1&&(y=mt(y,c)),z(y,r.shape)},scale:()=>{const y=L(h,p);let C=L(n,y);return r.rank===1&&(C=mt(C,c)),z(C,r.shape)},offset:()=>{let y=n;return r.rank===1&&(y=mt(y,c)),z(y,r.shape)}}}};const J2={kernelName:Wa,inputsToSave:["x","indices"],gradFunc:(n,t,e)=>{const[s,o]=t,{axis:r,batchDims:i}=e,a=vt(r,s.shape)[0],l=(c,u,h)=>()=>{const d=c.shape,p=u.size,f=d.slice(0,a),m=f.length,g=d.slice(r,d.length).slice(1),x=g.length,b=Mg(0,m),w=Mg(m+1,m+1+x),y=Lg([f,[p],g]),C=z(h,y),I=z(u,[p]),v=Lg([[m],b,w]),N=Ft(C,v);let S=zm(N,I,c.shape[a]);const k=Ms(v);return S=Ft(S,k),S};if(i===1){const c=s.shape[0],u=s.split(c,0);return{x:()=>xs(u.map((p,f)=>l(p,o.slice(f,1),n.slice(f,1))())).reshape(s.shape),indices:()=>o}}else return{x:l(s,o,n),indices:()=>o}}};function Mg(n,t){const e=[];for(let s=n;s<t;++s)e.push(s);return e}function Lg(n){const t=[];for(let e=0;e<n.length;++e)for(let s=0;s<n[e].length;++s)t.push(n[e][s]);return t}const tN={kernelName:Xr,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t;return{a:()=>Dt(e),b:()=>Dt(s)}}};const eN={kernelName:Kr,gradFunc:n=>({x:()=>at(n,"float32")})};const nN={kernelName:jr,gradFunc:n=>({x:()=>Dt(n)})};const sN={kernelName:Yr,gradFunc:n=>({x:()=>Dt(n)})};const oN={kernelName:Zr,gradFunc:n=>({x:()=>Dt(n)})};const rN={kernelName:Ga,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{alpha:o}=e,r=gn(s,0);return{x:()=>Ue(r,n,L(n,o))}}};const iN={kernelName:Jr,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>gt(n,tt(e,1))}}};const aN={kernelName:Qr,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>gt(n,at(e,"float32"))}}};const lN={kernelName:Dw,inputsToSave:[],outputsToSave:[!0],gradFunc:(n,t,e)=>{const[s]=t,{axis:o}=e;return{logits:()=>{const i=Jn(s);return bt(n,L(mt(n,o,!0),i))}}}};function cN(n,t,e,s=5,o=1,r=1,i=.5){const a={x:n,y:t,dy:e},l={depthRadius:s,bias:o,alpha:r,beta:i};return P.runKernel(Pu,a,l)}const uN=W({localResponseNormalizationBackprop_:cN});const hN={kernelName:Ya,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(n,t,e)=>{const[s,o]=t,{depthRadius:r,bias:i,alpha:a,beta:l}=e;return{x:()=>uN(s,o,n,r,i,a,l)}}};function Pg(n,t,e,s){return t.rank<e.rank&&(t=z(t,he(t.shape,s))),n.rank<e.rank&&(n=z(n,he(n.shape,s))),{x:()=>L(n,at(Qn(e,t),n.dtype))}}const Bg={kernelName:Za,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(n,t,e)=>{const s=e,{reductionIndices:o}=s,r=t[0],i=t[1],a=vt(o,r.shape),l=Pg(n,i,r,a);return{x:()=>l.x()}}};const dN={kernelName:ti,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t;return{a:()=>L(n,at(mo(e,s),"float32")),b:()=>L(n,at(Vl(e,s),"float32"))}}};function pN(n,t,e,s,o,r,i){const a=D(n,"dy","maxPool3dGrad"),l=D(t,"input","maxPool3dGrad"),c=D(e,"output","maxPool3dGrad");let u=a,h=l,d=c,p=!1;l.rank===4&&(p=!0,u=z(a,[1,a.shape[0],a.shape[1],a.shape[2],a.shape[3]]),h=z(l,[1,l.shape[0],l.shape[1],l.shape[2],l.shape[3]]),d=z(c,[1,c.shape[0],c.shape[1],c.shape[2],c.shape[3]])),T(u.rank===5,()=>`Error in maxPool3dGrad: dy must be rank 5 but got rank ${u.rank}.`),T(h.rank===5,()=>`Error in maxPool3dGrad: input must be rank 5 but got rank ${h.rank}.`),T(d.rank===5,()=>`Error in maxPool3dGrad: output must be rank 5 but got rank ${d.rank}.`),Ye("maxPool3dGrad",r,i);const f={dy:u,input:h,output:d},m={filterSize:s,strides:o,pad:r,dimRoundingMode:i},g=P.runKernel(zu,f,m);return p?z(g,[g.shape[1],g.shape[2],g.shape[3],g.shape[4]]):g}const fN=W({maxPool3dGrad_:pN});const mN={kernelName:Ja,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(n,t,e)=>{const[s,o]=t,{filterSize:r,strides:i,pad:a,dimRoundingMode:l}=e;return{x:()=>fN(n,s,o,r,i,a,l)}}};function gN(n,t,e,s,o,r,i){const a=D(n,"dy","maxPoolGrad"),l=D(t,"input","maxPoolGrad"),c=D(e,"output","maxPoolGrad");T(l.rank===a.rank,()=>`Rank of input (${l.rank}) does not match rank of dy (${a.rank})`),T(a.rank===4,()=>`Error in maxPoolGrad: dy must be rank 4 but got rank ${a.rank}.`),T(l.rank===4,()=>`Error in maxPoolGrad: input must be rank 4 but got rank ${l.rank}.`),Ye("maxPoolGrad",r,i);const u={dy:a,input:l,output:c},h={filterSize:s,strides:o,pad:r,dimRoundingMode:i};return P.runKernel(Bu,u,h)}const xN=W({maxPoolGrad_:gN});const bN={kernelName:Qa,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(n,t,e)=>{const[s,o]=t,{filterSize:r,strides:i,pad:a}=e;return{x:()=>xN(n,s,o,r,i,a)}}};const yN={kernelName:tl,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{axis:o}=e,r=vt(o,s.shape),a=$e(s.shape,r)[1],l=K(a);return{x:()=>{const u=s.shape.slice();r.forEach(p=>{u[p]=1});const h=z(n,u);return gt(L(h,Ps(s.shape,"float32")),l)}}}};const wN={kernelName:el,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(n,t,e)=>{const s=e,{axis:o}=s,[r,i]=t,a=vt(o,r.shape),l=Pg(n,i,r,a);return{x:()=>l.x()}}};const CN={kernelName:ei,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t;return{a:()=>L(n,at(Qo(e,s),"float32")),b:()=>L(n,at(gn(e,s),"float32"))}}};const $N={kernelName:nl,inputsToSave:["x"],gradFunc:(n,t,e)=>{const s=t[0],{paddings:o}=e,r=o.map(i=>i[0]);return{x:()=>Xt(n,r,s.shape)}}};const IN={kernelName:ni,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,o=$t(e.shape,s.shape);return{a:()=>{const a=fe(e.shape,o);return a.length>0?z(mt(n,a),e.shape):n},b:()=>{const a=L(n,ae(zl(gt(e,s)))),l=fe(s.shape,o);return l.length>0?z(mt(a,l),s.shape):a}}}};const vN={kernelName:si,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,o=$t(e.shape,s.shape);return{a:()=>{const a=L(n,at(s,"float32")),l=fe(e.shape,o);return l.length>0?z(mt(a,l),e.shape):a},b:()=>{const a=L(n,at(e,"float32")),l=fe(s.shape,o);return l.length>0?z(mt(a,l),s.shape):a}}}};const kN={kernelName:sl,gradFunc:n=>({x:()=>ae(n)})};const SN={kernelName:il,inputsToSave:["indices"],gradFunc:(n,t)=>{const e=t[0];return{indices:()=>Ie(e.shape,"float32")}}};const NN={kernelName:rl,gradFunc:n=>({x:()=>Dt(n)})};const TN={kernelName:al,saveAllInputs:!0,gradFunc:(n,t,e)=>{const{axis:s}=e;return yo(n,s).map(r=>()=>r)}};const zg={kernelName:ll,inputsToSave:["x"],gradFunc:(n,t,e)=>{const s=t[0],{paddings:o}=e,r=o.map(i=>i[0]);return{x:()=>Xt(n,r,s.shape)}}};const EN={kernelName:oi,inputsToSave:["a","b"],outputsToSave:[!0],gradFunc:(n,t)=>{const[e,s,o]=t,r=e,i=s,a=$t(r.shape,i.shape);return{a:()=>{const u=at(i,"float32");let h=L(n,L(u,fo(r,bt(u,zt(1)))));const d=fe(r.shape,a);return d.length>0&&(h=mt(h,d)),z(h,r.shape)},b:()=>{const u=gn(r,0),h=Ue(u,ts(r),Dt(r));let d=L(n,L(o,h));const p=fe(i.shape,a);return p.length>0&&(d=mt(d,p)),z(d,i.shape)}}}};const RN={kernelName:cl,inputsToSave:["x","alpha"],gradFunc:(n,t)=>{const[e,s]=t,o=gn(e,0);return{x:()=>Ue(o,n,L(n,s)),alpha:()=>{let r=Ue(o,Dt(n),L(n,e));const i=fe(s.shape,n.shape);return i.length>0&&(r=mt(r,i)),z(r,s.shape)}}}};function AN(n,t,e){const s=n.shape.slice();s[e]=1;const o=z(t,s),r=Ih(n,e,!0,!1),i=Ih(n,e,!0,!0),a=L(r,i);return L(o,a)}function DN(n,t,e){const s=n.shape.length,o=s-e.length,r=Jt(e,s);let i=n;r!=null&&(i=Ft(n,r));const a=i.shape.slice(),c=a.splice(s-e.length,e.length).reduce((d,p)=>d*p,1);a.push(c);const u=i.reshape(a);let h=AN(u,t,o);if(h=h.reshape(i.shape),r!=null){const d=Ms(r);h=Ft(h,d)}return h}const FN={kernelName:ul,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{axis:o}=e;let r=[];return o==null?r=s.shape.map((i,a)=>a):typeof o=="number"?r=[o]:r=o,{x:()=>DN(s,n,r)}}};const _N={kernelName:zr,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,o=$t(e.shape,s.shape);return{a:()=>{const a=gt(n,at(s,"float32")),l=fe(e.shape,o);return l.length>0?z(mt(a,l),e.shape):a},b:()=>{let a=L(n,at(e,"float32"));const l=fe(s.shape,o);l.length>0&&(a=z(mt(a,l),s.shape));const c=jt(s);return ae(gt(a,at(c,"float32")))}}}};const ON={kernelName:ri,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>gt(n,ae(jt(e)))}}};const MN={kernelName:ai,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t,s=L(Qo(e,6),Pi(e));return{x:()=>L(n,at(s,"float32"))}}};const LN={kernelName:ii,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>L(n,at(Pi(e),"float32"))}}};const PN={kernelName:hl,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>z(n,e.shape)}}};const BN={kernelName:pl,inputsToSave:["images"],gradFunc:(n,t,e)=>{const[s]=t,o={dy:n,images:s};return{images:()=>P.runKernel(Xu,o,e)}}};const zN={kernelName:dl,inputsToSave:["images"],gradFunc:(n,t,e)=>{const[s]=t,o={dy:n,images:s};return{images:()=>P.runKernel(qu,o,e)}}};const VN={kernelName:fl,gradFunc:(n,t,e)=>{const{dims:s}=e,o=vt(s,n.shape);return{x:()=>xo(n,o)}}};const WN={kernelName:li,gradFunc:n=>({x:()=>Dt(n)})};const UN={kernelName:ci,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>ae(gt(n,L(fo(e,1.5),2)))}}};const GN={kernelName:ml,inputsToSave:["condition"],gradFunc:(n,t)=>{const[e]=t;return{condition:()=>at(Dt(e),"float32"),t:()=>L(n,at(e,n.dtype)),e:()=>L(n,at(Eh(e),n.dtype))}}};const HN={kernelName:ui,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>{const s=gn(e,zt(0)),o=zt(Jl),r=zt(tc),i=L(n,r),a=L(L(n,o),Jn(at(e,"float32")));return Ue(s,i,a)}}}};const qN={kernelName:fi,outputsToSave:[!0],gradFunc:(n,t)=>{const[e]=t;return{x:()=>L(n,L(e,bt(zt(1),e)))}}};const XN={kernelName:pi,gradFunc:n=>({x:()=>Dt(n)})};const KN={kernelName:hi,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>L($h(at(e,"float32")),n)}}};const jN={kernelName:di,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>L(cm(at(e,"float32")),n)}}};const YN={kernelName:gl,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{begin:o,size:r}=e,i=s.shape,[a,l]=ed(s,o,r),c=[];for(let u=0;u<n.rank;u++)c.push([a[u],i[u]-a[u]-l[u]]);return{x:()=>Dh(n,c)}}};const ZN={kernelName:wl,outputsToSave:[!0],gradFunc:(n,t,e)=>{const[s]=t,{dim:o}=e,r=!0,i=L(n,s);return{logits:()=>bt(i,L(mt(i,[o],r),s))}}};const QN={kernelName:mi,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>L(n,Yo(e))}}};const Vg={kernelName:bl,gradFunc:(n,t,e)=>{const{blockShape:s,paddings:o}=e;return{x:()=>wh(n,s,o)}}};const Wg={kernelName:yl,gradFunc:(n,t,e)=>{const{axis:s}=e;return{x:()=>Ze(n,s)}}};const JN={kernelName:gi,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>gt(n,L(Le(at(e,"float32")),2))}}};const tT={kernelName:Ku,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>L(n,L(at(e,"float32"),2))}}};const eT={kernelName:xi,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,o=zt(2);return{a:()=>L(n,L(o,bt(e,s))),b:()=>L(n,L(o,bt(s,e)))}}};const nT={kernelName:$i,gradFunc:n=>({x:()=>Dt(n)})};const sT={kernelName:bi,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,o=$t(e.shape,s.shape);return{a:()=>{let a=n;const l=fe(e.shape,o);return l.length>0&&(a=mt(a,l)),z(a,e.shape)},b:()=>{let a=n;const l=fe(s.shape,o);return l.length>0&&(a=mt(a,l)),z(ae(a),s.shape)}}}};const oT={kernelName:xl,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,o=s.shape.slice(),{axis:r}=e;vt(r,s.shape).forEach(c=>{o[c]=1});const a=z(n,o),l=L(a,Ps(s.shape,"float32"));return{x:()=>l}}};const rT={kernelName:yi,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>gt(n,jt($h(e)))}}};const iT={kernelName:wi,outputsToSave:[!0],gradFunc:(n,t)=>{const[e]=t;return{x:()=>L(bt(zt(1),jt(e)),n)}}};const aT={kernelName:Ci,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{reps:o}=e;return{x:()=>{let i=Dt(s);if(s.rank===1)for(let a=0;a<o[0];++a)i=tt(i,Xt(n,[a*s.shape[0]],[s.shape[0]]));else if(s.rank===2)for(let a=0;a<o[0];++a)for(let l=0;l<o[1];++l)i=tt(i,Xt(n,[a*s.shape[0],l*s.shape[1]],[s.shape[0],s.shape[1]]));else if(s.rank===3)for(let a=0;a<o[0];++a)for(let l=0;l<o[1];++l)for(let c=0;c<o[2];++c)i=tt(i,Xt(n,[a*s.shape[0],l*s.shape[1],c*s.shape[2]],[s.shape[0],s.shape[1],s.shape[2]]));else if(s.rank===4)for(let a=0;a<o[0];++a)for(let l=0;l<o[1];++l)for(let c=0;c<o[2];++c)for(let u=0;u<o[3];++u)i=tt(i,Xt(n,[a*s.shape[0],l*s.shape[1],c*s.shape[2],u*s.shape[3]],[s.shape[0],s.shape[1],s.shape[2],s.shape[3]]));else throw new Error(`Gradient for tile operation is not implemented for rank-${s.rank} tensors yet.`);return i}}}};const lT={kernelName:Go,gradFunc:(n,t,e)=>{const s=e,{perm:o}=s,r=Ms(o);return{x:()=>Ft(n,r)}}};const cT={kernelName:Cl,gradFunc:(n,t,e)=>{const s=e,{axis:o}=s;return{value:()=>xs(n,o)}}};const uT={kernelName:$l,inputsToSave:["segmentIds"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>hT(n,e)}}};function hT(n,t){const e=Ls(t,Dt(t)),s=Sh(n,e);let o=mo(t,zt(0,"int32"));const r=s.rank-o.rank;for(let a=0;a<r;++a)o=Qe(o,a+1);o=gs(o,Ps(s.shape,"bool"));const i=Dt(s);return Ue(o,s,i)}const dT={kernelName:Il,gradFunc:n=>({x:()=>Dt(n)})};const pT=[Og,u2,h2,d2,p2,f2,m2,g2,x2,b2,y2,w2,I2,S2,N2,T2,E2,R2,A2,D2,F2,_2,M2,O2,B2,z2,V2,W2,U2,G2,_N,H2,q2,X2,K2,j2,Z2,Y2,Q2,J2,tN,eN,nN,sN,oN,rN,iN,aN,lN,hN,Bg,Bg,dN,mN,bN,yN,wN,CN,$N,IN,vN,kN,SN,NN,TN,zg,zg,EN,RN,FN,ON,MN,LN,PN,BN,zN,VN,WN,UN,GN,HN,qN,XN,KN,jN,YN,ZN,QN,Vg,Vg,Wg,Wg,JN,eT,tT,nT,sT,oT,rT,iT,aT,lT,cT,uT,dT];for(const n of pT)_w(n);X().prototype.abs=function(){return this.throwIfDisposed(),We(this)};X().prototype.acos=function(){return this.throwIfDisposed(),BC(this)};X().prototype.acosh=function(){return this.throwIfDisposed(),VC(this)};X().prototype.add=function(n){return this.throwIfDisposed(),tt(this,n)};X().prototype.all=function(n,t){return this.throwIfDisposed(),rm(this,n,t)};X().prototype.any=function(n,t){return this.throwIfDisposed(),gh(this,n,t)};X().prototype.argMax=function(n){return this.throwIfDisposed(),Ni(this,n)};X().prototype.argMin=function(n){return this.throwIfDisposed(),qC(this,n)};X().prototype.asScalar=function(){return this.throwIfDisposed(),T(this.size===1,()=>"The array must have only 1 element."),z(this,[])};X().prototype.asType=function(n){return this.throwIfDisposed(),at(this,n)};X().prototype.as1D=function(){return this.throwIfDisposed(),z(this,[this.size])};X().prototype.as2D=function(n,t){return this.throwIfDisposed(),z(this,[n,t])};X().prototype.as3D=function(n,t,e){return this.throwIfDisposed(),z(this,[n,t,e])};X().prototype.as4D=function(n,t,e,s){return this.throwIfDisposed(),z(this,[n,t,e,s])};X().prototype.as5D=function(n,t,e,s,o){return this.throwIfDisposed(),z(this,[n,t,e,s,o])};X().prototype.asin=function(){return this.throwIfDisposed(),KC(this)};X().prototype.asinh=function(){return this.throwIfDisposed(),YC(this)};X().prototype.atan=function(){return this.throwIfDisposed(),QC(this)};X().prototype.atan2=function(n){return this.throwIfDisposed(),t$(this,n)};X().prototype.atanh=function(){return this.throwIfDisposed(),n$(this)},X().prototype.avgPool=function(n,t,e,s){return this.throwIfDisposed(),yh(this,n,t,e,s)};X().prototype.batchToSpaceND=function(n,t){return this.throwIfDisposed(),wh(this,n,t)};X().prototype.batchNorm=function(n,t,e,s,o){return this.throwIfDisposed(),Ol(this,n,t,e,s,o)};X().prototype.broadcastTo=function(n){return this.throwIfDisposed(),Ai(this,n)};X().prototype.cast=function(n){return this.throwIfDisposed(),at(this,n)};X().prototype.ceil=function(){return this.throwIfDisposed(),E$(this)};X().prototype.clipByValue=function(n,t){return this.throwIfDisposed(),mn(this,n,t)};X().prototype.concat=function(n,t){return this.throwIfDisposed(),n instanceof pe&&(n=[n]),Ze([this,...n],t)};X().prototype.conv1d=function(n,t,e,s,o,r){return this.throwIfDisposed(),im(this,n,t,e,s,o,r)};X().prototype.conv2dTranspose=function(n,t,e,s,o){return this.throwIfDisposed(),am(this,n,t,e,s,o)};X().prototype.conv2d=function(n,t,e,s,o,r){return this.throwIfDisposed(),po(this,n,t,e,s,o,r)};X().prototype.cos=function(){return this.throwIfDisposed(),$h(this)};X().prototype.cosh=function(){return this.throwIfDisposed(),cm(this)};X().prototype.cumprod=function(n,t,e){return this.throwIfDisposed(),Ih(this,n,t,e)};X().prototype.cumsum=function(n,t,e){return this.throwIfDisposed(),um(this,n,t,e)};X().prototype.depthToSpace=function(n,t){return this.throwIfDisposed(),tI(this,n,t)};X().prototype.depthwiseConv2d=function(n,t,e,s,o,r){return this.throwIfDisposed(),vh(this,n,t,e,s,o,r)};X().prototype.dilation2d=function(n,t,e,s,o){return this.throwIfDisposed(),sI(this,n,t,e,s,o)};X().prototype.divNoNan=function(n){return this.throwIfDisposed(),lI(this,n)};X().prototype.div=function(n){return this.throwIfDisposed(),gt(this,n)};X().prototype.dot=function(n){return this.throwIfDisposed(),uI(this,n)};X().prototype.elu=function(){return this.throwIfDisposed(),Ll(this)};X().prototype.equal=function(n){return this.throwIfDisposed(),Qn(this,n)};X().prototype.erf=function(){return this.throwIfDisposed(),dm(this)};X().prototype.euclideanNorm=function(n,t){return this.throwIfDisposed(),$I(this,n,t)};X().prototype.exp=function(){return this.throwIfDisposed(),Jn(this)};X().prototype.expandDims=function(n){return this.throwIfDisposed(),Qe(this,n)};X().prototype.expm1=function(){return this.throwIfDisposed(),SI(this)};X().prototype.fft=function(){return this.throwIfDisposed(),Pm(this)};X().prototype.flatten=function(){return this.throwIfDisposed(),z(this,[this.size])};X().prototype.floor=function(){return this.throwIfDisposed(),zl(this)};X().prototype.floorDiv=function(n){return this.throwIfDisposed(),om(this,n)};X().prototype.gather=function(n,t,e){return this.throwIfDisposed(),Sh(this,n,t,e)};X().prototype.greaterEqual=function(n){return this.throwIfDisposed(),mo(this,n)};X().prototype.greater=function(n){return this.throwIfDisposed(),gn(this,n)};X().prototype.ifft=function(){return this.throwIfDisposed(),zh(this)};X().prototype.irfft=function(){return this.throwIfDisposed(),yk(this)};X().prototype.isFinite=function(){return this.throwIfDisposed(),OI(this)};X().prototype.isInf=function(){return this.throwIfDisposed(),LI(this)};X().prototype.isNaN=function(){return this.throwIfDisposed(),BI(this)};X().prototype.leakyRelu=function(n){return this.throwIfDisposed(),Th(this,n)};X().prototype.lessEqual=function(n){return this.throwIfDisposed(),Qo(this,n)};X().prototype.less=function(n){return this.throwIfDisposed(),Vl(this,n)};X().prototype.localResponseNormalization=function(n,t,e,s){return this.throwIfDisposed(),GI(this,n,t,e,s)};X().prototype.logSigmoid=function(){return this.throwIfDisposed(),ZI(this)};X().prototype.logSoftmax=function(n){return this.throwIfDisposed(),xm(this,n)};X().prototype.logSumExp=function(n,t){return this.throwIfDisposed(),bm(this,n,t)};X().prototype.log=function(){return this.throwIfDisposed(),ts(this)};X().prototype.log1p=function(){return this.throwIfDisposed(),gm(this)};X().prototype.logicalAnd=function(n){return this.throwIfDisposed(),gs(this,n)};X().prototype.logicalNot=function(){return this.throwIfDisposed(),Eh(this)};X().prototype.logicalOr=function(n){return this.throwIfDisposed(),ym(this,n)};X().prototype.logicalXor=function(n){return this.throwIfDisposed(),rv(this,n)};X().prototype.matMul=function(n,t,e){return this.throwIfDisposed(),Bt(this,n,t,e)},X().prototype.maxPool=function(n,t,e,s){return this.throwIfDisposed(),Rh(this,n,t,e,s)};X().prototype.max=function(n,t){return this.throwIfDisposed(),Pn(this,n,t)};X().prototype.maximum=function(n){return this.throwIfDisposed(),Ls(this,n)};X().prototype.mean=function(n,t){return this.throwIfDisposed(),de(this,n,t)};X().prototype.min=function(n,t){return this.throwIfDisposed(),Pl(this,n,t)};X().prototype.minimum=function(n){return this.throwIfDisposed(),_i(this,n)};X().prototype.mirrorPad=function(n,t){return this.throwIfDisposed(),pv(this,n,t)};X().prototype.mod=function(n){return this.throwIfDisposed(),mv(this,n)};X().prototype.mul=function(n){return this.throwIfDisposed(),L(this,n)};X().prototype.neg=function(){return this.throwIfDisposed(),ae(this)};X().prototype.norm=function(n,t,e){return this.throwIfDisposed(),Bl(this,n,t,e)};X().prototype.notEqual=function(n){return this.throwIfDisposed(),Wl(this,n)};X().prototype.oneHot=function(n,t=1,e=0){return this.throwIfDisposed(),wm(this,n,t,e)};X().prototype.onesLike=function(){return this.throwIfDisposed(),vn(this)};X().prototype.pad=function(n,t){return this.throwIfDisposed(),Dh(this,n,t)},X().prototype.pool=function(n,t,e,s,o,r){return this.throwIfDisposed(),kv(this,n,t,e,s,o,r)};X().prototype.pow=function(n){return this.throwIfDisposed(),fo(this,n)};X().prototype.prelu=function(n){return this.throwIfDisposed(),_h(this,n)};X().prototype.prod=function(n,t){return this.throwIfDisposed(),Tv(this,n,t)};X().prototype.reciprocal=function(){return this.throwIfDisposed(),Jv(this)};X().prototype.relu=function(){return this.throwIfDisposed(),go(this)};X().prototype.relu6=function(){return this.throwIfDisposed(),Rm(this)};X().prototype.reshapeAs=function(n){return this.throwIfDisposed(),z(this,n.shape)};X().prototype.reshape=function(n){return this.throwIfDisposed(),z(this,n)};X().prototype.resizeBilinear=function(n,t,e){return this.throwIfDisposed(),Gm(this,n,t,e)};X().prototype.resizeNearestNeighbor=function(n,t,e){return this.throwIfDisposed(),Hm(this,n,t,e)};X().prototype.reverse=function(n){return this.throwIfDisposed(),xo(this,n)};X().prototype.rfft=function(){return this.throwIfDisposed(),$k(this)};X().prototype.round=function(){return this.throwIfDisposed(),Am(this)};X().prototype.rsqrt=function(){return this.throwIfDisposed(),Dm(this)};X().prototype.selu=function(){return this.throwIfDisposed(),Fm(this)};X().prototype.separableConv2d=function(n,t,e,s,o,r){return this.throwIfDisposed(),_m(this,n,t,e,s,o,r)};X().prototype.sigmoid=function(){return this.throwIfDisposed(),Yo(this)};X().prototype.sign=function(){return this.throwIfDisposed(),lk(this)};X().prototype.sin=function(){return this.throwIfDisposed(),Om(this)};X().prototype.sinh=function(){return this.throwIfDisposed(),Mm(this)};X().prototype.slice=function(n,t){return this.throwIfDisposed(),Xt(this,n,t)};X().prototype.softmax=function(n){return this.throwIfDisposed(),Bh(this,n)};X().prototype.softplus=function(){return this.throwIfDisposed(),Fi(this)};X().prototype.spaceToBatchND=function(n,t){return this.throwIfDisposed(),Fh(this,n,t)};X().prototype.split=function(n,t){return this.throwIfDisposed(),xn(this,n,t)};X().prototype.sqrt=function(){return this.throwIfDisposed(),Le(this)};X().prototype.square=function(){return this.throwIfDisposed(),jt(this)};X().prototype.squaredDifference=function(n){return this.throwIfDisposed(),vk(this,n)};X().prototype.squeeze=function(n){return this.throwIfDisposed(),Li(this,n)};X().prototype.stack=function(n,t){this.throwIfDisposed();const e=n instanceof pe?[this,n]:[this,...n];return xs(e,t)};X().prototype.step=function(n){return this.throwIfDisposed(),Pi(this,n)};X().prototype.stridedSlice=function(n,t,e,s,o,r,i,a){return this.throwIfDisposed(),Ek(this,n,t,e,s,o,r,i,a)};X().prototype.sub=function(n){return this.throwIfDisposed(),bt(this,n)};X().prototype.sum=function(n,t){return this.throwIfDisposed(),mt(this,n,t)};X().prototype.tan=function(){return this.throwIfDisposed(),Ak(this)};X().prototype.tanh=function(){return this.throwIfDisposed(),_l(this)};X().prototype.tile=function(n){return this.throwIfDisposed(),Bn(this,n)};X().prototype.toBool=function(){return this.throwIfDisposed(),at(this,"bool")};X().prototype.toFloat=function(){return this.throwIfDisposed(),at(this,"float32")};X().prototype.toInt=function(){return this.throwIfDisposed(),at(this,"int32")};X().prototype.topk=function(n,t){return this.throwIfDisposed(),Fk(this,n,t)};X().prototype.transpose=function(n){return this.throwIfDisposed(),Ft(this,n)};X().prototype.unique=function(n){return this.throwIfDisposed(),Mk(this,n)};X().prototype.unsortedSegmentSum=function(n,t){return this.throwIfDisposed(),zm(this,n,t)};X().prototype.unstack=function(n){return this.throwIfDisposed(),yo(this,n)};X().prototype.where=function(n,t){return this.throwIfDisposed(),Ue(n,this,t)};X().prototype.zerosLike=function(){return this.throwIfDisposed(),Dt(this)};class ns extends Error{constructor(t){super(t),Object.setPrototypeOf(this,ns.prototype)}}class Sn extends Error{constructor(t){super(t),Object.setPrototypeOf(this,Sn.prototype)}}class M extends Error{constructor(t){super(t),Object.setPrototypeOf(this,M.prototype)}}class It extends Error{constructor(t){super(t),Object.setPrototypeOf(this,It.prototype)}}class $d extends Error{constructor(t){super(t),Object.setPrototypeOf(this,$d.prototype)}}class Ug{constructor(t){this.maxEntries=t||100,this.cache=new Map}get(t){let e;return this.cache.has(t)&&(e=this.cache.get(t),this.cache.delete(t),this.cache.set(t,e)),e}put(t,e){if(this.cache.has(t))this.cache.delete(t);else if(this.cache.size>=this.maxEntries){const s=this.cache.keys().next().value;this.cache.delete(s)}this.cache.set(t,e)}getMaxEntries(){return this.maxEntries}setMaxEntries(t){if(t<0)throw new Error(`The maxEntries of LRU caches must be at least 0, but got ${t}.`);if(this.maxEntries>t)for(let e=0;e<this.maxEntries-t;e++){const s=this.cache.keys().next().value;this.cache.delete(s)}this.maxEntries=t}}function Co(n,t){if(Array.isArray(n)){let e=[];for(let s=0;s<t;s++)e=e.concat(n);return e}else{const e=new Array(t);return e.fill(n),e}}function ss(n,t){if(!n)throw new $d(t)}function Gg(n,t){let e=0;for(const s of n)s===t&&e++;return e}function Je(n){return n.length===1?n[0]:n}function Vt(n){return Array.isArray(n)?n:[n]}function Cs(n){const e=n.replace(/(.)([A-Z][a-z0-9]+)/g,"$1_$2").replace(/([a-z])([A-Z])/g,"$1_$2").toLowerCase();return e[0]!=="_"?e:"private"+e}function $o(n){return n.length<=1||n.indexOf("_")===-1?n:n.replace(/[_]+(\w|$)/g,(t,e)=>e.toUpperCase())}let Nn={};function Id(n){if(n==null)return null;const t={};return t.className=n.getClassName(),t.config=n.getConfig(),t}function vd(n){if(!(n==null||typeof n!="object"))if(Array.isArray(n))n.forEach(t=>vd(t));else{const t=Object.keys(n);for(const e of t){const s=n[e];s!=null&&typeof s=="object"&&(!Array.isArray(s)&&s.type==="ndarray"&&typeof s.value=="number"?n[e]=s.value:vd(s))}}}function Wi(n,t={},e={},s="object",o=!1){if(typeof n=="string"){const r=n;let i;if(r in e)i=e[r];else if(r in Nn)i=Nn[r];else if(i=t[r],i==null)throw new M(`Unknown ${s}: ${n}. This may be due to one of the following reasons:
1. The ${s} is defined in Python, in which case it needs to be ported to TensorFlow.js or your JavaScript code.
2. The custom ${s} is defined in JavaScript, but is not registered properly with tf.serialization.registerClass().`);return i}else{const r=n;if(r.className==null||r.config==null)throw new M(`${s}: Improper config format: ${JSON.stringify(r)}.
'className' and 'config' must set.`);const i=r.className;let a,l;if(i in e?[a,l]=e[i]:i in Nn?[a,l]=Nn.className:i in t&&([a,l]=t[i]),a==null)throw new M(`Unknown ${s}: ${i}. This may be due to one of the following reasons:
1. The ${s} is defined in Python, in which case it needs to be ported to TensorFlow.js or your JavaScript code.
2. The custom ${s} is defined in JavaScript, but is not registered properly with tf.serialization.registerClass().`);if(l!=null){const c={};for(const p of Object.keys(Nn))c[p]=Nn[p];for(const p of Object.keys(e))c[p]=e[p];const u=r.config;u.customObjects=c;const h=Object.assign({},Nn);for(const p of Object.keys(e))Nn[p]=e[p];vd(r.config);const d=l(a,r.config,e,o);return Nn=Object.assign({},h),d}else{const c=Object.assign({},Nn);for(const h of Object.keys(e))Nn[h]=e[h];const u=new a(r.config);return Nn=Object.assign({},c),u}}}function fT(n,t){return n<t?-1:n>t?1:0}function ec(n,t){return-1*fT(n,t)}function zs(n){if(n==null)return n;const t=[];for(const e of n)t.indexOf(e)===-1&&t.push(e);return t}function mT(n){if(n==null)throw new M(`Invalid value in obj: ${JSON.stringify(n)}`);for(const t in n)if(n.hasOwnProperty(t))return!1;return!0}function Io(n,t,e){if(e!=null&&n.indexOf(e)<0)throw new M(`${e} is not a valid ${t}.  Valid values are ${n} or null/undefined.`)}function kd(n,t,e=0,s=1/0){return ss(e>=0),ss(s>=e),Array.isArray(n)&&n.length>=e&&n.length<=s&&n.every(o=>typeof o===t)}function ve(n,t){Array.isArray(n)?(T(n.length>0,()=>`${t} is unexpectedly an empty array.`),n.forEach((e,s)=>ve(e,`element ${s+1} of ${t}`))):T(Number.isInteger(n)&&n>0,()=>`Expected ${t} to be a positive integer, but got ${Hg(n)}.`)}function Hg(n){return n===null?"null":Array.isArray(n)?"["+n.map(t=>Hg(t)).join(",")+"]":typeof n=="string"?`"${n}"`:`${n}`}function gT(n,t,e){let s=e!=null?e():Ke(),o;return(...i)=>{const a=e!=null?e():Ke();return a-s<t||(s=a,o=n(...i)),o}}function qg(n){return n==="relu"?"relu":n==="linear"?"linear":n==="elu"?"elu":null}let xT=0;function Xg(){return xT++}const nc={};function sc(n=""){return n in nc||(nc[n]=0),nc[n]+=1,n+nc[n].toString()}const bT=["channelsFirst","channelsLast"],yT=["nearest","bilinear"],wT=["valid","same","causal"],CT=["max","avg"],$T=["sum","mul","concat","ave"];const sr=new Map;function le(n){Io(bT,"DataFormat",n)}function IT(n){Io(yT,"InterpolationFormat",n)}function bn(n){Io(wT,"PaddingMode",n)}function Kg(n){Io(CT,"PoolMode",n)}const Ui=[],jg="/";function vo(n,t){Ui.push(n);try{const e=t();return Ui.pop(),e}catch(e){throw Ui.pop(),e}}function vT(){return Ui.length===0?"":Ui.join(jg)+jg}function Yg(n){if(!Qg(n))throw new Error("Not a valid tensor name: '"+n+"'");return vT()+n}function Zg(n){if(!Qg(n))throw new Error("Not a valid tensor name: '"+n+"'");sr.has(n)||sr.set(n,0);const t=sr.get(n);if(sr.set(n,sr.get(n)+1),t>0){const e=`${n}_${t}`;return sr.set(e,1),e}else return n}const kT=new RegExp(/^[A-Za-z0-9][-A-Za-z0-9\._\/]*$/);function Qg(n){return!!n.match(kT)}function ST(n){return n===parseInt(n.toString(),10)}function Vs(n,t,e){t==null&&(t=0),e==null&&(e=n.length);let s=1;for(let o=t;o<e;++o)s*=n[o];return s}function or(n){if(n.length===0)return Number.NaN;let t=Number.POSITIVE_INFINITY;for(let e=0;e<n.length;e++){const s=n[e];s<t&&(t=s)}return t}function Ws(n){if(n.length===0)return Number.NaN;let t=Number.NEGATIVE_INFINITY;for(let e=0;e<n.length;e++){const s=n[e];s>t&&(t=s)}return t}function Vn(n,t){if(t<n)throw new M(`end (${t}) < begin (${n}) is forbidden.`);const e=[];for(let s=n;s<t;++s)e.push(s);return e}let Sd;function me(){return Sd==null&&(Sd=lC().epsilon()),Sd}function Wn(){return"channelsLast"}function os(n,t){return at(n,t)}function Gi(n,t=-1){const e=n.shape.slice();return t<0&&(t=e.length+t+1),e.splice(t,0,1),z(n,e)}function NT(n,t){return U(()=>{if(n.shape.length!==2)throw new M(`repeat() expects a rank-2 tensor, but received a rank-${n.shape.length} tensor.`);const e=Gi(n,1);return Ed(e,[1,t,1])})}function TT(n){const t=[Vs(n.shape)];return z(n,t)}function ET(n){if(n.rank<=1)throw new M(`batchFlatten requires a minimum rank of 2. Got rank: ${n.rank}.`);const t=[n.shape[0],Vs(n.shape,1)];return z(n,t)}function ko(n,t,e){return U(()=>{switch(n.rank){case 1:return Lh(n,t,e);case 2:return Lm(n,[t,0],[e,n.shape[1]]);case 3:return Ph(n,[t,0,0],[e,n.shape[1],n.shape[2]]);case 4:return Zl(n,[t,0,0,0],[e,n.shape[1],n.shape[2],n.shape[3]]);case 5:return Xt(n,[t,0,0,0,0],[e,n.shape[1],n.shape[2],n.shape[3],n.shape[4]]);case 6:return Xt(n,[t,0,0,0,0,0],[e,n.shape[1],n.shape[2],n.shape[3],n.shape[4],n.shape[5]]);default:throw new M(`sliceAlongFirstAxis() received an unsupported tensor rank: ${n.rank}`)}})}function Nd(n,t,e){return U(()=>{switch(n.rank){case 1:return Lh(n,t,e);case 2:return Lm(n,[0,t],[n.shape[0],e]);case 3:return Ph(n,[0,0,t],[n.shape[0],n.shape[1],e]);case 4:return Zl(n,[0,0,0,t],[n.shape[0],n.shape[1],n.shape[2],e]);default:throw new M(`sliceAlongLastAxis() received an unsupported tensor rank: ${n.rank}`)}})}function oc(n,t,e,s){return U(()=>{switch(n.rank){case 1:return Lh(n,t,e);case 2:switch(s){case 1:return ko(n,t,e);case 2:return Nd(n,t,e);default:throw new M(`The axis is not within the rank of the tensor ${s}`)}case 3:switch(s){case 1:return ko(n,t,e);case 2:return Ph(n,[0,t,0],[n.shape[0],e,n.shape[2]]);case 3:return Nd(n,t,e);default:throw new M(`The axis is not within the rank of the tensor ${s}`)}case 4:switch(s){case 1:return ko(n,t,e);case 2:return Zl(n,[0,t,0,0],[n.shape[0],e,n.shape[2],n.shape[3]]);case 3:return Zl(n,[0,0,t,0],[n.shape[0],n.shape[1],e,n.shape[3]]);case 4:return Nd(n,t,e);default:throw new M(`The axis is not within the rank of the tensor ${s}`)}default:throw new M(`sliceAlongLastAxis() received an unsupported tensor rank: ${n.rank}`)}})}function Td(n,t=-1){let e;return t<0&&(e=n[0].rank,e!==0?t=e:t=0),t===n[0].rank&&(t=-1),Ze(n,t)}function Jg(n,t){switch(n.rank){case 1:return D$([n,t]);case 2:return _$([n,t],0);case 3:return M$([n,t],0);case 4:return P$([n,t],0);default:throw new M(`concatAlongFirstAxis() received an unsupported tensor rank: ${n.rank}`)}}function Ed(n,t){if(Array.isArray(t)||(t=[t]),n.rank!==t.length)throw new M(`The length of input n (${t.length}) does not match the number of dimensions in input x (${n.rank})`);return Bn(n,t)}function rc(n,t=0,e=1,s,o){return jv(n,t,e,s,o)}function rs(n,t,e,s){if(n.rank<2||t.rank<2)throw new It(`dot requires both inputs to be rank >= 2 but got x shape = ${n.shape} and y shape = ${t.shape}`);if(t.rank>=3){const o=n.shape.slice(-1)[0],r=t.shape.slice(-2)[0];if(o!==r)throw new It(`If rank y >= 3, then the second last dim of y must equal the last dim of x but got x shape = ${n.shape} and  y shape = ${t.shape}`)}if(n.rank===2&&t.rank===2)return Wm({a:n,b:t,transposeA:!1,transposeB:!1,bias:s?Rd(n.rank,s,Wn()):null,activation:e});{const o=n.shape.slice(),r=o.pop();n=z(n,[-1,r]);const i=t.shape.slice(),a=i.pop(),l=i.pop(),c=[...i,a],u=Array.from({length:t.rank},(f,m)=>m===0?t.rank-2:m<=t.rank-2?m-1:m);t=z(Ft(t,u),[l,-1]);const h=[...o,...c];return z(Wm({a:n,b:t,transposeA:!1,transposeB:!1,bias:s?Rd(n.rank,s,Wn()):null,activation:e}),h)}}function tx(n,t,e){return U(()=>(Array.isArray(t)?t=rn(t,"int32"):t=at(t,"int32"),Sh(n,t,e)))}function Hi(n){return L(n,n)}function Rd(n,t,e){const s=t.shape;if(t.rank!==1&&t.rank!==n)throw new M(`Unexpected bias dimensions: ${t.rank}; expected it to be 1 or ${n}`);if(n===5){if(e==="channelsFirst")return s.length===1?z(t,[1,s[0],1,1,1]):z(t,[1,s[3],s[0],s[1],s[2]]);if(e==="channelsLast")return s.length===1?z(t,[1,1,1,1,s[0]]):z(t,[1].concat(s))}else if(n===4){if(e==="channelsFirst")return s.length===1?z(t,[1,s[0],1,1]):z(t,[1,s[2],s[0],s[1]]);if(e==="channelsLast")return s.length===1?z(t,[1,1,1,s[0]]):z(t,[1].concat(s))}else if(n===3){if(e==="channelsFirst")return s.length===1?z(t,[1,s[0],1]):z(t,[1,s[1],s[0]]);if(e==="channelsLast")return s.length===1?z(t,[1,1,s[0]]):z(t,[1].concat(s))}else if(n<3)return t;throw new M(`Unsupported input rank by biasAdd: ${t.rank}`)}function Un(n,t,e){return U(()=>(e==null&&(e=Wn()),le(e),tt(n,Rd(n.rank,t,e))))}function RT(n,t=1){if(t!==1)throw new It(`Support for alpha values other than 1 (${t}) is not implemented yet.`);return Ll(n)}function AT(n){return U(()=>gt(n,tt(We(n),1)))}function ex(n,t,e,s){return U(()=>Uk(n,t,e,s))}function DT(n){return U(()=>{const t=tt(.5,L(.2,n));return mn(t,0,1)})}function qi(n,t,e=!1){return e?n():t()}const FT=["fanIn","fanOut","fanAvg"],_T=["normal","uniform","truncatedNormal"];function OT(n){Io(FT,"FanMode",n)}function MT(n){Io(_T,"Distribution",n)}class Tn extends er{fromConfigUsesCustomObjects(){return!1}getConfig(){return{}}}class nx extends Tn{apply(t,e){return Ie(t,e)}}nx.className="Zeros",Z(nx);class Ad extends Tn{apply(t,e){return Ps(t,e)}}Ad.className="Ones",Z(Ad);class sx extends Tn{constructor(t){if(super(),typeof t!="object")throw new M(`Expected argument of type ConstantConfig but got ${t}`);if(t.value===void 0)throw new M(`config must have value set but got ${t}`);this.value=t.value}apply(t,e){return U(()=>L(zt(this.value),Ps(t,e)))}getConfig(){return{value:this.value}}}sx.className="Constant",Z(sx);class ox extends Tn{constructor(t){super(),this.DEFAULT_MINVAL=-.05,this.DEFAULT_MAXVAL=.05,this.minval=t.minval||this.DEFAULT_MINVAL,this.maxval=t.maxval||this.DEFAULT_MAXVAL,this.seed=t.seed}apply(t,e){return Oi(t,this.minval,this.maxval,e,this.seed)}getConfig(){return{minval:this.minval,maxval:this.maxval,seed:this.seed}}}ox.className="RandomUniform",Z(ox);class rx extends Tn{constructor(t){super(),this.DEFAULT_MEAN=0,this.DEFAULT_STDDEV=.05,this.mean=t.mean||this.DEFAULT_MEAN,this.stddev=t.stddev||this.DEFAULT_STDDEV,this.seed=t.seed}apply(t,e){if(e=e||"float32",e!=="float32"&&e!=="int32")throw new It(`randomNormal does not support dType ${e}.`);return rc(t,this.mean,this.stddev,e,this.seed)}getConfig(){return{mean:this.mean,stddev:this.stddev,seed:this.seed}}}rx.className="RandomNormal",Z(rx);class ix extends Tn{constructor(t){super(),this.DEFAULT_MEAN=0,this.DEFAULT_STDDEV=.05,this.mean=t.mean||this.DEFAULT_MEAN,this.stddev=t.stddev||this.DEFAULT_STDDEV,this.seed=t.seed}apply(t,e){if(e=e||"float32",e!=="float32"&&e!=="int32")throw new It(`truncatedNormal does not support dType ${e}.`);return Bm(t,this.mean,this.stddev,e,this.seed)}getConfig(){return{mean:this.mean,stddev:this.stddev,seed:this.seed}}}ix.className="TruncatedNormal",Z(ix);class ax extends Tn{constructor(t){super(),this.gain=t.gain!=null?t.gain:1}apply(t,e){return U(()=>{if(t.length!==2||t[0]!==t[1])throw new M("Identity matrix initializer can only be used for 2D square matrices.");return L(this.gain,mm(t[0]))})}getConfig(){return{gain:this.gain}}}ax.className="Identity",Z(ax);function LT(n,t="channelsLast"){let e,s;if(le(t),n.length===2)e=n[0],s=n[1];else if([3,4,5].indexOf(n.length)!==-1){if(t==="channelsFirst"){const o=Vs(n,2);e=n[1]*o,s=n[0]*o}else if(t==="channelsLast"){const o=Vs(n,0,n.length-2);e=n[n.length-2]*o,s=n[n.length-1]*o}}else{const o=Vs(n);e=Math.sqrt(o),s=Math.sqrt(o)}return[e,s]}class an extends Tn{constructor(t){if(super(),t.scale<0)throw new M(`scale must be a positive float. Got: ${t.scale}`);this.scale=t.scale==null?1:t.scale,this.mode=t.mode==null?"fanIn":t.mode,OT(this.mode),this.distribution=t.distribution==null?"normal":t.distribution,MT(this.distribution),this.seed=t.seed}apply(t,e){const s=LT(t),o=s[0],r=s[1];let i=this.scale;if(this.mode==="fanIn"?i/=Math.max(1,o):this.mode==="fanOut"?i/=Math.max(1,r):i/=Math.max(1,(o+r)/2),this.distribution==="normal"){const a=Math.sqrt(i);if(e=e||"float32",e!=="float32"&&e!=="int32")throw new It(`${this.getClassName()} does not support dType ${e}.`);return Bm(t,0,a,e,this.seed)}else{const a=Math.sqrt(3*i);return Oi(t,-a,a,e,this.seed)}}getConfig(){return{scale:this.scale,mode:this.mode,distribution:this.distribution,seed:this.seed}}}an.className="VarianceScaling",Z(an);class Dd extends an{constructor(t){super({scale:1,mode:"fanAvg",distribution:"uniform",seed:t==null?null:t.seed})}getClassName(){return an.className}}Dd.className="GlorotUniform",Z(Dd);class Fd extends an{constructor(t){super({scale:1,mode:"fanAvg",distribution:"normal",seed:t==null?null:t.seed})}getClassName(){return an.className}}Fd.className="GlorotNormal",Z(Fd);class _d extends an{constructor(t){super({scale:2,mode:"fanIn",distribution:"normal",seed:t==null?null:t.seed})}getClassName(){return an.className}}_d.className="HeNormal",Z(_d);class Od extends an{constructor(t){super({scale:2,mode:"fanIn",distribution:"uniform",seed:t==null?null:t.seed})}getClassName(){return an.className}}Od.className="HeUniform",Z(Od);class Md extends an{constructor(t){super({scale:1,mode:"fanIn",distribution:"normal",seed:t==null?null:t.seed})}getClassName(){return an.className}}Md.className="LeCunNormal",Z(Md);class Ld extends an{constructor(t){super({scale:1,mode:"fanIn",distribution:"uniform",seed:t==null?null:t.seed})}getClassName(){return an.className}}Ld.className="LeCunUniform",Z(Ld);class lx extends Tn{constructor(t){super(),this.DEFAULT_GAIN=1,this.ELEMENTS_WARN_SLOW=2e3,this.gain=t.gain==null?this.DEFAULT_GAIN:t.gain,this.seed=t.seed}apply(t,e){return U(()=>{if(t.length<2)throw new It("Shape must be at least 2D.");if(e!=="int32"&&e!=="float32"&&e!==void 0)throw new TypeError(`Unsupported data type ${e}.`);e=e;const s=K(t.slice(0,-1)),o=t[t.length-1],r=s*o;r>this.ELEMENTS_WARN_SLOW&&console.warn(`Orthogonal initializer is being called on a matrix with more than ${this.ELEMENTS_WARN_SLOW} (${r}) elements: Slowness may result.`);const i=[Math.max(o,s),Math.min(o,s)],a=rc(i,0,1,e,this.seed),l=BS.qr(a,!1);let c=l[0];const h=l[1].flatten().stridedSlice([0],[Math.min(o,s)*Math.min(o,s)],[Math.min(o,s)+1]);return c=L(c,h.sign()),s<o&&(c=c.transpose()),L(zt(this.gain),c.reshape(t))})}getConfig(){return{gain:this.gain,seed:this.seed}}}lx.className="Orthogonal",Z(lx);const cx={constant:"Constant",glorotNormal:"GlorotNormal",glorotUniform:"GlorotUniform",heNormal:"HeNormal",heUniform:"HeUniform",identity:"Identity",leCunNormal:"LeCunNormal",leCunUniform:"LeCunUniform",ones:"Ones",orthogonal:"Orthogonal",randomNormal:"RandomNormal",randomUniform:"RandomUniform",truncatedNormal:"TruncatedNormal",varianceScaling:"VarianceScaling",zeros:"Zeros"};function ux(n,t={}){return Wi(n,kn.getMap().classNameMap,t,"initializer")}function te(n){return Id(n)}function Zt(n){if(typeof n=="string"){const t=n in cx?cx[n]:n;if(t==="GlorotNormal")return new Fd;if(t==="GlorotUniform")return new Dd;if(t==="HeNormal")return new _d;if(t==="HeUniform")return new Od;if(t==="LeCunNormal")return new Md;if(t==="LeCunUniform")return new Ld;{const e={};return e.className=t,e.config={},ux(e)}}else return n instanceof Tn?n:ux(n)}function Pd(n){return Array.isArray(n)&&Array.isArray(n[0])}function ic(n){return n.length===0?[]:Array.isArray(n[0])?n:[n]}function yt(n){let t;if(Array.isArray(n)){if(n.length!==1)throw new M(`Expected Tensor length to be 1; got ${n.length}`);t=n[0]}else t=n;return t}function Lt(n){if(Array.isArray(n)&&Array.isArray(n[0])){if(n.length===1)return n=n,n[0];throw new M(`Expected exactly 1 Shape; got ${n.length}`)}else return n}function ac(n){let t=0;for(const e of n)e.shape.length===0?t+=1:t+=e.shape.reduce((s,o)=>s*o);return t}const hx="Variable";class PT{constructor(t,e="float32",s=hx,o=!0,r=null){this.dtype=e==null?"float32":e,this.shape=t.shape,this.id=Xg(),s=s==null?hx:s,this.originalName=Yg(s),this.name=Zg(this.originalName),this.trainable_=o,this.constraint=r,this.val=Bk(t,this.trainable_,this.name,this.dtype)}read(){return this.assertNotDisposed(),this.val}write(t){return this.assertNotDisposed(),BT(this.val,t),this.val.id!==t.id&&(this.val.assign(t),this.constraint!=null&&this.val.assign(this.constraint.apply(this.val))),this}dispose(){this.assertNotDisposed(),this.val.dispose()}assertNotDisposed(){if(this.val.isDisposed)throw new Error(`LayersVariable ${this.name} is already disposed.`)}get trainable(){return this.trainable_}set trainable(t){this.trainable_=t,this.val.trainable=t}}function BT(n,t){if(n.shape.toString()!==t.shape.toString())throw new Error("Shape mismatch: "+JSON.stringify(n.shape)+" vs. "+JSON.stringify(t.shape))}function Bd(n){return n.map(t=>t.read())}function zd(n){n.forEach(t=>{t[0].write(t[1])})}class ge{constructor(t){this.dtype=t.dtype,this.shape=t.shape,t.shape!=null?this.ndim=t.shape.length:this.ndim=t.ndim,this.maxNDim=t.maxNDim,this.minNDim=t.minNDim,this.axes=t.axes||{}}}class is{constructor(t,e,s,o,r,i,a){this.dtype=t,this.shape=e,this.sourceLayer=s,this.inputs=o,this.callArgs=r,this.outputTensorIndex=a,this.id=Xg(),i!=null&&(this.originalName=Yg(i),this.name=Zg(this.originalName)),this.rank=e.length}}let zT=0;class lc{constructor(t,e){this.callArgs=e,this.id=zT++,this.outboundLayer=t.outboundLayer,this.inboundLayers=t.inboundLayers,this.nodeIndices=t.nodeIndices,this.tensorIndices=t.tensorIndices,this.inputTensors=t.inputTensors,this.outputTensors=t.outputTensors,this.inputMasks=t.inputMasks,this.outputMasks=t.outputMasks,this.inputShapes=t.inputShapes,this.outputShapes=t.outputShapes;for(const s of t.inboundLayers)s!=null&&s.outboundNodes.push(this);t.outboundLayer.inboundNodes.push(this)}getConfig(){const t=[];for(const e of this.inboundLayers)e!=null?t.push(e.name):t.push(null);return{outboundLayer:this.outboundLayer?this.outboundLayer.name:null,inboundLayers:t,nodeIndices:this.nodeIndices,tensorIndices:this.tensorIndices}}}let VT=0;class St extends er{constructor(t={}){super(),this._callHook=null,this._addedWeightNames=[],this._stateful=!1,this.id=VT++,this.activityRegularizer=null,this.inputSpec=null,this.supportsMasking=!1,this._trainableWeights=[],this._nonTrainableWeights=[],this._losses=[],this._updates=[],this._built=!1,this.inboundNodes=[],this.outboundNodes=[];let e=t.name;if(!e){const s=this.getClassName();e=Cs(s)+"_"+sc(s)}if(this.name=e,this.trainable_=t.trainable==null?!0:t.trainable,t.inputShape!=null||t.batchInputShape!=null){let s;if(t.batchInputShape!=null)s=t.batchInputShape;else if(t.inputShape!=null){let r=null;t.batchSize!=null&&(r=t.batchSize),s=[r].concat(t.inputShape)}this.batchInputShape=s;let o=t.dtype;o==null&&(o=t.inputDType),o==null&&(o="float32"),this.dtype=o}t.weights!=null?this.initialWeights=t.weights:this.initialWeights=null,this._refCount=null,this.fastWeightInitDuringBuild=!1}static nodeKey(t,e){return t.name+"_ib-"+e.toString()}getNodeAtIndex(t,e){if(this.inboundNodes.length===0)throw new Sn(`The layer has never been called and thus has no defined ${e}.`);if(this.inboundNodes.length<=t)throw new M(`Asked to get ${e} at node ${t}, but the layer has only ${this.inboundNodes.length} inbound nodes.`);return this.inboundNodes[t]}getInputAt(t){return Je(this.getNodeAtIndex(t,"input").inputTensors)}getOutputAt(t){return Je(this.getNodeAtIndex(t,"output").outputTensors)}get input(){if(this.inboundNodes.length>1)throw new ns(`Layer ${this.name} has multiple inbound nodes, hence the notion of "layer input" is ill-defined. Use \`getInputAt(nodeIndex)\` instead.`);if(this.inboundNodes.length===0)throw new ns(`Layer ${this.name} is not connected, no input to return.`);return Je(this.getNodeAtIndex(0,"input").inputTensors)}get output(){if(this.inboundNodes.length===0)throw new ns(`Layer ${this.name} has no inbound nodes.`);if(this.inboundNodes.length>1)throw new ns(`Layer ${this.name} has multiple inbound nodes, hence the notion of "layer output" is ill-defined. Use \`getOutputAt(nodeIndex)\` instead.`);return Je(this.getNodeAtIndex(0,"output").outputTensors)}get losses(){return this._losses}calculateLosses(){return this.losses.map(t=>t())}get updates(){return this._updates}get built(){return this._built}set built(t){this._built=t}get trainable(){return this.trainable_}set trainable(t){this._trainableWeights.forEach(e=>e.trainable=t),this.trainable_=t}get trainableWeights(){return this.trainable_?this._trainableWeights.filter(t=>t.trainable):[]}set trainableWeights(t){this._trainableWeights=t}get nonTrainableWeights(){return this.trainable?this._trainableWeights.filter(t=>!t.trainable).concat(this._nonTrainableWeights):this._trainableWeights.concat(this._nonTrainableWeights)}set nonTrainableWeights(t){this._nonTrainableWeights=t}get weights(){return this.trainableWeights.concat(this.nonTrainableWeights)}get stateful(){return this._stateful}resetStates(){if(!this.stateful)throw new Error("Cannot call the resetStates() method of a non-stateful Layer object.")}assertInputCompatibility(t){const e=Vt(t);if(this.inputSpec==null||this.inputSpec.length===0)return;const s=Vt(this.inputSpec);if(e.length!==s.length)throw new M(`Layer ${this.name} expects ${s.length} inputs, but it received ${e.length} input tensors. Input received: ${t}`);for(let o=0;o<e.length;o++){const r=e[o],i=s[o];if(i==null)continue;const a=r.rank;if(i.ndim!=null&&a!==i.ndim)throw new M(`Input ${o} is incompatible with layer ${this.name}: expected ndim=${i.ndim}, found ndim=${a}`);if(i.maxNDim!=null&&a>i.maxNDim)throw new M(`Input ${o} is incompatible with layer ${this.name}: expected max_ndim=${i.maxNDim}, found ndim=${a}`);if(i.minNDim!=null&&a<i.minNDim)throw new M(`Input ${o} is incompatible with layer ${this.name}: expected min_ndim=${i.minNDim}, found ndim=${a}.`);if(i.dtype!=null&&r.dtype!==i.dtype)throw new M(`Input ${o} is incompatible with layer ${this.name} : expected dtype=${i.dtype}, found dtype=${r.dtype}.`);if(i.axes){const l=r.shape;for(const c in i.axes){const u=Number(c),h=i.axes[c],d=u>=0?l[u]:l[l.length+u];if(h!=null&&[h,null].indexOf(d)===-1)throw new M(`Input ${o} is incompatible with layer ${this.name}: expected axis ${u} of input shape to have value ${h} but got shape ${l}.`)}}if(i.shape!=null)for(let l=0;l<i.shape.length;++l){const c=i.shape[l],u=r.shape[l];if(c!=null&&u!=null&&c!==u)throw new M(`Input ${o} is incompatible with layer ${this.name}: expected shape=${i.shape}, found shape=${r.shape}.`)}}}call(t,e){return t}invokeCallHook(t,e){this._callHook!=null&&this._callHook(t,e)}setCallHook(t){this._callHook=t}clearCallHook(){this._callHook=null}apply(t,e){e=e||{},this.assertNotDisposed();const s=Vt(t),o=GT(t),r=HT(t);if(o===r)throw new M("Arguments to apply() must be all SymbolicTensors or all Tensors");return vo(this.name,()=>{if(!this.built){this.assertInputCompatibility(t);const i=[];for(const a of Vt(t))i.push(a.shape);this.build(Je(i)),this.built=!0,this.initialWeights&&this.setWeights(this.initialWeights),this._refCount===null&&r&&(this._refCount=1)}if(this.assertInputCompatibility(t),r){let i=this.call(t,e);this.supportsMasking&&this.setMaskMetadata(t,i);const a=Vt(i),l=[];for(let c of a)s.indexOf(c)!==-1&&(c=c.clone()),l.push(c);if(i=Je(l),this.activityRegularizer!=null)throw new It("Layer invocation in the presence of activity regularizer(s) is not supported yet.");return i}else{const i=WT(t),a=this.computeOutputShape(i);let l;const c=UT(t);if(this.warnOnIncompatibleInputShape(Array.isArray(t)?i[0]:i),a!=null&&a.length>0&&Array.isArray(a[0])?l=a.map((u,h)=>new is(c,u,this,Vt(t),e,this.name,h)):l=new is(c,a,this,Vt(t),e,this.name),this.addInboundNode(t,l,null,null,i,a,e),this._refCount++,this.activityRegularizer!=null)throw new It("Layer invocation in the presence of activity regularizer(s) is not supported yet.");return l}})}warnOnIncompatibleInputShape(t){if(this.batchInputShape!=null)if(t.length!==this.batchInputShape.length)console.warn(`The rank of the input tensor provided (shape: ${JSON.stringify(t)}) does not match that of the batchInputShape (${JSON.stringify(this.batchInputShape)}) of the layer ${this.name}`);else{let e=!1;this.batchInputShape.forEach((s,o)=>{s!=null&&t[o]!=null&&t[o]!==s&&(e=!0)}),e&&console.warn(`The shape of the input tensor (${JSON.stringify(t)}) does not match the expectation of layer ${this.name}: ${JSON.stringify(this.batchInputShape)}`)}}get outputShape(){if(this.inboundNodes==null||this.inboundNodes.length===0)throw new ns(`The layer ${this.name} has never been called and thus has no defined output shape.`);const t=[];for(const e of this.inboundNodes){const s=JSON.stringify(e.outputShapes);t.indexOf(s)===-1&&t.push(s)}if(t.length===1){const e=this.inboundNodes[0].outputShapes;return Array.isArray(e)&&Array.isArray(e[0])&&e.length===1?e[0]:e}else throw new ns(`The layer ${this.name} has multiple inbound nodes with different output shapes. Hence the notion of "output shape" is ill-defined for the layer.`)}countParams(){if(!this.built)throw new Sn(`You tried to call countParams() on ${this.name}, but the layer is not built yet. Build it first by calling build(batchInputShape).`);return ac(this.weights)}build(t){this.built=!0}getWeights(t=!1){return Bd(t?this.trainableWeights:this.weights)}setWeights(t){U(()=>{const e=this.weights;if(e.length!==t.length)throw new M(`You called setWeights(weights) on layer "${this.name}" with a weight list of length ${t.length}, but the layer was expecting ${e.length} weights. Provided weights: ${t}...`);if(e.length===0)return;const s=[],o=Bd(e);for(let r=0;r<o.length;++r){const i=o[r],a=e[r],l=t[r];if(!Pt(i.shape,l.shape))throw new M(`Layer weight shape ${i.shape} not compatible with provided weight shape ${l.shape}`);s.push([a,l])}zd(s)})}addWeight(t,e,s,o,r,i,a,l){if(this._addedWeightNames.indexOf(t)!==-1)throw new M(`Duplicate weight name ${t} for layer ${this.name}`);this._addedWeightNames.push(t),s==null&&(s="float32"),this.fastWeightInitDuringBuild&&(o=l!=null?l():Zt("zeros"));const c=o.apply(e,s),u=new PT(c,s,t,i,a);return c.dispose(),r!=null&&this.addLoss(()=>r.apply(u.read())),i==null&&(i=!0),i?this._trainableWeights.push(u):this._nonTrainableWeights.push(u),u}setFastWeightInitDuringBuild(t){this.fastWeightInitDuringBuild=t}addLoss(t){t==null||Array.isArray(t)&&t.length===0||(t=Vt(t),this._losses!==void 0&&this._losses!==null&&this.losses.push(...t))}computeOutputShape(t){return t}computeMask(t,e){if(!this.supportsMasking){if(e!=null)if(Array.isArray(e))e.forEach(s=>{if(s!=null)throw new TypeError(`Layer ${this.name} does not support masking, but was passed an inputMask.`)});else throw new TypeError(`Layer ${this.name} does not support masking, but was passed an inputMask.`);return null}return e}setMaskMetadata(t,e,s){if(!this.supportsMasking)return;const o=this.computeMask(t,s),r=Vt(e),i=Vt(o);if(r.length!==i.length)throw new Error(`${this.name} outputs ${r.length} tensors but ${r.length} masks for those tensors`);for(let a=0;a<r.length;a++)r[a].kerasMask=i[a]}addInboundNode(t,e,s,o,r,i,a=null){const l=Vt(t);e=Vt(e),s=Vt(s),o=Vt(o),r=ic(r),i=ic(i);const c=[],u=[],h=[];for(const d of l)c.push(d.sourceLayer),u.push(d.nodeIndex),h.push(d.tensorIndex);new lc({outboundLayer:this,inboundLayers:c,nodeIndices:u,tensorIndices:h,inputTensors:l,outputTensors:e,inputMasks:s,outputMasks:o,inputShapes:r,outputShapes:i},a);for(let d=0;d<e.length;d++)e[d].sourceLayer=this,e[d].nodeIndex=this.inboundNodes.length-1,e[d].tensorIndex=d}getConfig(){const t={name:this.name,trainable:this.trainable};return this.batchInputShape!=null&&(t.batchInputShape=this.batchInputShape),this.dtype!=null&&(t.dtype=this.dtype),t}disposeWeights(){return this.weights.forEach(t=>t.dispose()),this.weights.length}assertNotDisposed(){if(this._refCount===0)throw new Error(`Layer '${this.name}' is already disposed.`)}dispose(){if(!this.built)throw new Error(`Cannot dispose Layer ${this.name} because it has not been built yet.`);if(this._refCount===null)throw new Error(`Cannot dispose Layer ${this.name} because it has not been used yet.`);this.assertNotDisposed();let t=0;return--this._refCount===0&&(t=this.disposeWeights()),{refCountAfterDispose:this._refCount,numDisposedVariables:t}}}function WT(n){n=Vt(n);const t=[];for(const e of n)t.push(e.shape);return Je(t)}function UT(n){return"float32"}function dx(n,t,e){if((t==null||e!=null&&e>0)&&(t=n.sourceLayer,e=n.nodeIndex),t.inboundNodes.length===0)return[n];{const s=t.inboundNodes[e];if(s.inboundLayers.length===0)return s.inputTensors;{const o=[];for(let r=0;r<s.inboundLayers.length;r++){const i=s.inputTensors[r],a=s.inboundLayers[r],l=s.nodeIndices[r],c=dx(i,a,l);for(const u of c)o.indexOf(u)===-1&&o.push(u)}return o}}}function GT(n){let t=!0;for(const e of Vt(n))if(!(e instanceof is)){t=!1;break}return t}function HT(n){let t=!0;for(const e of Vt(n))if(e instanceof is){t=!1;break}return t}class Xi extends St{constructor(t){if(super({dtype:t.dtype,name:t.name!=null?t.name:sc("input").toString()}),t.batchSize==null&&(t.batchSize=null),t.sparse==null&&(t.sparse=!1),this.trainable=!1,this.built=!0,this.sparse=t.sparse,t.inputShape!=null&&t.batchInputShape!=null)throw new M("Only provide the inputShape OR batchInputShape argument to inputLayer, not both at the same time.");let e=t.batchInputShape;if(e==null){if(t.inputShape==null)throw new M("An InputLayer should be passed either a `batchInputShape` or an `inputShape`.");e=[t.batchSize].concat(t.inputShape)}else if(t.batchSize!=null)throw new M("Cannot specify batchSize if batchInputShape is specified when creating an InputLayer.");const s=t.dtype||"float32";this.batchInputShape=e,this.dtype=s,this.inputSpec=[{shape:e}];const o=new is(this.dtype,this.batchInputShape,this,[],{},this.name);o.nodeIndex=0,o.tensorIndex=0,new lc({outboundLayer:this,inboundLayers:[],nodeIndices:[],tensorIndices:[],inputTensors:[o],outputTensors:[o],inputMasks:[null],outputMasks:[null],inputShapes:[e],outputShapes:[e]})}apply(t,e){throw new M(`Cannot pass any input to an InputLayer's apply() method. InputLayer name: ${this.name}`)}dispose(){return{refCountAfterDispose:this._refCount,numDisposedVariables:0}}getConfig(){return{batchInputShape:this.batchInputShape,dtype:this.dtype,sparse:this.sparse,name:this.name}}}Xi.className="InputLayer",Z(Xi);function qT(n){if(n.batchShape==null&&n.shape==null)throw new Error("Please provide to Input either a `shape` or a `batchShape` argument. Note that `shape` does not include the batch dimension.");if(n.batchShape!=null&&n.shape!=null)throw new M("Please provide either a `shape` or `batchShape` argument to Input, but not both.");let t=n.batchShape;n.shape!=null&&t==null&&(t=[null].concat(n.shape));let e=n.dtype;return e==null&&(e="float32"),new Xi({batchInputShape:t,name:n.name,dtype:e,sparse:n.sparse}).inboundNodes[0].outputTensors[0]}function XT(n,t){if(n.dtype==null||n.dtype===t.dtype)return t;try{return at(t,n.dtype)}catch(e){throw new M(`The dtype of the feed (${t.dtype}) can not be cast to the dtype of the key '${n.name}' (${n.dtype}).`)}}class Us{constructor(t){if(this.id2Value={},this.id2Mask={},this.name2Id={},t instanceof Us)for(const e in t.id2Value)this.id2Value[e]=t.id2Value[e],e in t.id2Mask&&(this.id2Mask[e]=t.id2Mask[e]);else{if(t==null)return;for(const e of t)this.add(e.key,e.value)}}add(t,e,s){if(this.id2Value[t.id]==null)this.id2Value[t.id]=XT(t,e),this.name2Id[t.name]=t.id,s!=null&&(this.id2Mask[t.id]=s);else throw new M(`Duplicate key: name=${t.name}, id=${t.id}`);return this}addFeed(t){this.add(t.key,t.value)}hasKey(t){return this.id2Value[t.id]!=null}names(){return Object.keys(this.name2Id)}getValue(t){if(t instanceof is){if(this.id2Value[t.id]==null)throw new M(`Nonexistent key: ${t.name}`);return this.id2Value[t.id]}else{const e=this.name2Id[t];if(e==null)throw new M(`Feed dict has no SymbolicTensor name: ${t}`);return this.id2Value[e]}}getMask(t){if(t instanceof is){if(this.id2Value[t.id]==null)throw new M(`Nonexistent key: ${t.name}`);return this.id2Mask[t.id]}else{const e=this.name2Id[t];if(e==null)throw new M(`Feed dict has no SymbolicTensor name: ${t}`);return this.id2Mask[e]}}disposeMasks(){this.id2Mask!=null&&Nt(this.id2Mask)}}const cc=new Ug,uc=new Ug;function KT(n){cc!=null&&cc.setMaxEntries(n),uc!=null&&uc.setMaxEntries(n)}function Ki(n,t,e,s){const o=e==null?!1:e.training,r=Array.isArray(n),i=r?n:[n],a=i.map(f=>f.name),l=[],c=t.names();for(const f of a)c.indexOf(f)!==-1?l.push(t.getValue(f)):l.push(null);const u=a.join(",")+"|"+t.names().sort().join(",");let h=cc.get(u),d;if(h==null){const f=jT(i,t);h=f.sorted,d=f.recipientCounts,cc.put(u,h),uc.put(u,d)}d={},o||Object.assign(d,uc.get(u));const p=new Us(t);for(let f=0;f<h.length;++f){const m=h[f],g=m.sourceLayer;if(g instanceof Xi)continue;const x=[],b=[],w=[];let y=!1;for(const S of m.inputs){const k=p.getValue(S),$=p.getMask(S);x.push(k),b.push($),$!=null&&(y=!0),o||(d[S.name]--,d[S.name]===0&&!t.hasKey(S)&&a.indexOf(S.name)===-1&&!k.isDisposed&&S.sourceLayer.stateful!==!0&&w.push(k))}y&&(e=e||{},e.mask=b[0]);const C=Vt(g.apply(x,e));let I=null;g.supportsMasking&&(I=g.computeMask(x,b));const v=ZT(m),N=Array.isArray(v)?v:[v];for(let S=0;S<N.length;++S){p.hasKey(N[S])||p.add(N[S],C[S],Array.isArray(I)?I[0]:I);const k=a.indexOf(N[S].name);k!==-1&&(l[k]=C[S])}o||Nt(w)}return p.disposeMasks(),r?l:l[0]}function jT(n,t){T(n!=null&&n.length>0,()=>"Expected at least one fetch, got none");let e=[],s={};if(n.length===1){const o=px(n[0],t);e=o.sorted,s=o.recipientMap}else{const o=new Set;for(const r of n){const{sorted:i,recipientMap:a}=px(r,t);for(const l of i)o.has(l.name)||(e.push(l),o.add(l.name));for(const l in a)s[l]==null&&(s[l]=new Set),a[l].forEach(c=>s[l].add(c))}}return{sorted:e,recipientCounts:YT(s)}}function YT(n){const t={};for(const e in n)t[e]=n[e].size;return t}function px(n,t){const e=new Set,s=[],o={};for(const a of t.names())e.add(a);const r=[],i=[];for(r.push(n);r.length>0;){const a=r[r.length-1];if(e.has(a.name)){r.pop();continue}const l=i[i.length-1]===r.length-1;if(a.inputs.length===0||l)r.pop(),s.push(a),e.add(a.name),l&&i.pop();else{i.push(r.length-1);for(const c of a.inputs)o[c.name]==null&&(o[c.name]=new Set),o[c.name].add(a.name),!e.has(c.name)&&r.push(c)}}return{sorted:s,recipientMap:o}}function ZT(n){let t;if(n.sourceLayer.inboundNodes.length===1)t=n.sourceLayer.output;else{let e=null;for(let s=0;s<n.sourceLayer.inboundNodes.length;++s)for(const o of n.sourceLayer.inboundNodes[s].outputTensors)if(o.id===n.id){e=s;break}t=n.sourceLayer.getOutputAt(e)}return t}q().registerFlag("TOPOLOGICAL_SORT_CACHE_MAX_ENTRIES",()=>100,KT);function Vd(n,t){return U(()=>Le(mt(L(n,n),t,!0)))}class ji extends er{getConfig(){return{}}}class fx extends ji{constructor(t){super(),this.defaultMaxValue=2,this.defaultAxis=0,this.maxValue=t.maxValue!=null?t.maxValue:this.defaultMaxValue,this.axis=t.axis!=null?t.axis:this.defaultAxis}apply(t){return U(()=>{const e=Vd(t,this.axis),s=mn(e,0,this.maxValue);return L(t,gt(s,tt(me(),e)))})}getConfig(){return{maxValue:this.maxValue,axis:this.axis}}}fx.className="MaxNorm",Z(fx);class mx extends ji{constructor(t){super(),this.defaultAxis=0,this.axis=t.axis!=null?t.axis:this.defaultAxis}apply(t){return U(()=>gt(t,tt(me(),Vd(t,this.axis))))}getConfig(){return{axis:this.axis}}}mx.className="UnitNorm",Z(mx);class gx extends ji{apply(t){return go(t)}}gx.className="NonNeg",Z(gx);class xx extends ji{constructor(t){super(),this.defaultMinValue=0,this.defaultMaxValue=1,this.defaultRate=1,this.defaultAxis=0,this.minValue=t.minValue!=null?t.minValue:this.defaultMinValue,this.maxValue=t.maxValue!=null?t.maxValue:this.defaultMaxValue,this.rate=t.rate!=null?t.rate:this.defaultRate,this.axis=t.axis!=null?t.axis:this.defaultAxis}apply(t){return U(()=>{const e=Vd(t,this.axis),s=tt(L(this.rate,mn(e,this.minValue,this.maxValue)),L(1-this.rate,e));return L(t,gt(s,tt(me(),e)))})}getConfig(){return{minValue:this.minValue,maxValue:this.maxValue,rate:this.rate,axis:this.axis}}}xx.className="MinMaxNorm",Z(xx);const bx={maxNorm:"MaxNorm",minMaxNorm:"MinMaxNorm",nonNeg:"NonNeg",unitNorm:"UnitNorm"};function xe(n){return Id(n)}function yx(n,t={}){return Wi(n,kn.getMap().classNameMap,t,"constraint")}function be(n){if(n==null)return null;if(typeof n=="string"){const e={className:n in bx?bx[n]:n,config:{}};return yx(e)}else return n instanceof ji?n:yx(n)}function So(n){return J(this,null,function*(){if(n==null)return;const t=[],e=[],s=[];for(const o in n){const r=n[o];if(typeof r!="number"){const i=r;t.push(i.data()),e.push(o),s.push(i)}}if(t.length>0){const o=yield Promise.all(t);for(let r=0;r<o.length;++r)n[e[r]]=o[r][0];Nt(s)}})}function wx(n){if(n!=null)for(const t in n){const e=n[t];typeof e!="number"&&e.dispose()}}var Cx;(function(n){n[n.SILENT=0]="SILENT",n[n.VERBOSE=1]="VERBOSE"})(Cx||(Cx={}));const QT=125;class Yi{constructor(){this.validationData=null}setParams(t){this.params=t}onEpochBegin(t,e){return J(this,null,function*(){})}onEpochEnd(t,e){return J(this,null,function*(){})}onBatchBegin(t,e){return J(this,null,function*(){})}onBatchEnd(t,e){return J(this,null,function*(){})}onTrainBegin(t){return J(this,null,function*(){})}onTrainEnd(t){return J(this,null,function*(){})}setModel(t){}}class JT{constructor(t,e=10){t==null&&(t=[]),this.callbacks=t,this.queueLength=e}append(t){this.callbacks.push(t)}setParams(t){for(const e of this.callbacks)e.setParams(t)}setModel(t){for(const e of this.callbacks)e.setModel(t)}onEpochBegin(t,e){return J(this,null,function*(){e==null&&(e={});for(const s of this.callbacks)yield s.onEpochBegin(t,e)})}onEpochEnd(t,e){return J(this,null,function*(){e==null&&(e={});for(const s of this.callbacks)yield s.onEpochEnd(t,e)})}onBatchBegin(t,e){return J(this,null,function*(){e==null&&(e={});for(const s of this.callbacks)yield s.onBatchBegin(t,e)})}onBatchEnd(t,e){return J(this,null,function*(){e==null&&(e={});for(const s of this.callbacks)yield s.onBatchEnd(t,e)})}onTrainBegin(t){return J(this,null,function*(){t==null&&(t={});for(const e of this.callbacks)yield e.onTrainBegin(t)})}onTrainEnd(t){return J(this,null,function*(){t==null&&(t={});for(const e of this.callbacks)yield e.onTrainEnd(t)})}}class tE extends Yi{constructor(){super()}onEpochBegin(t){return J(this,null,function*(){this.seen=0,this.totals={}})}onBatchEnd(t,e){return J(this,null,function*(){e==null&&(e={});const s=e.size==null?0:e.size;this.seen+=s;for(const o in e){const r=e[o];if(typeof r=="number")this.totals.hasOwnProperty(o)||(this.totals[o]=0),this.totals[o]=this.totals[o]+r*s;else{let i;o in this.totals?i=this.totals[o]:this.totals[o]=0;const a=U(()=>tt(this.totals[o],L(r,s)));this.totals[o]=a,i!=null&&i.dispose()}}})}onEpochEnd(t,e){return J(this,null,function*(){if(e!=null)for(const s of this.params.metrics)this.totals[s]!=null&&(typeof this.totals[s]=="number"?e[s]=this.totals[s]/this.seen:U(()=>{const o=L(gt(1,this.seen),this.totals[s]);e[s]=o,this.totals[s].dispose(),Yn(e[s])}))})}}class eE extends Yi{onTrainBegin(t){return J(this,null,function*(){this.epoch=[],this.history={}})}onEpochEnd(t,e){return J(this,null,function*(){e==null&&(e={}),this.epoch.push(t);for(const s in e)this.history[s]==null&&(this.history[s]=[]),this.history[s].push(e[s])})}syncData(){return J(this,null,function*(){const t=[],e=[],s=[];for(const r in this.history){const i=this.history[r];for(let a=0;a<i.length;++a)if(typeof i[a]!="number"){const l=i[a];t.push(l.data()),e.push(r),s.push(a)}}const o=yield Promise.all(t);for(let r=0;r<o.length;++r)this.history[e[r]][s[r]].dispose(),this.history[e[r]][s[r]]=o[r][0]})}}class nE extends Yi{constructor(t,e){if(super(),this.currentEpoch=0,this.nowFunc=t.nowFunc,this.nextFrameFunc=t.nextFrameFunc||cg,this.yieldEvery=e||"auto",this.yieldEvery==="auto"&&(this.yieldEvery=QT),this.yieldEvery==="never"&&t.onYield!=null)throw new Error("yieldEvery is `never` but you provided an `onYield` callback. Either change `yieldEvery` or remove the callback");ru(this.yieldEvery)&&(this.maybeWait=gT(this.maybeWait.bind(this),this.yieldEvery,this.nowFunc)),this.trainBegin=t.onTrainBegin,this.trainEnd=t.onTrainEnd,this.epochBegin=t.onEpochBegin,this.epochEnd=t.onEpochEnd,this.batchBegin=t.onBatchBegin,this.batchEnd=t.onBatchEnd,this.yield=t.onYield}maybeWait(t,e,s){return J(this,null,function*(){const o=[];this.yield!=null&&(yield So(s),o.push(this.yield(t,e,s))),o.push(this.nextFrameFunc()),yield Promise.all(o)})}onEpochBegin(t,e){return J(this,null,function*(){this.currentEpoch=t,this.epochBegin!=null&&(yield So(e),yield this.epochBegin(t,e))})}onEpochEnd(t,e){return J(this,null,function*(){const s=[];this.epochEnd!=null&&(yield So(e),s.push(this.epochEnd(t,e))),this.yieldEvery==="epoch"&&s.push(this.nextFrameFunc()),yield Promise.all(s)})}onBatchBegin(t,e){return J(this,null,function*(){this.batchBegin!=null&&(yield So(e),yield this.batchBegin(t,e))})}onBatchEnd(t,e){return J(this,null,function*(){const s=[];this.batchEnd!=null&&(yield So(e),s.push(this.batchEnd(t,e))),this.yieldEvery==="batch"?s.push(this.nextFrameFunc()):ru(this.yieldEvery)&&s.push(this.maybeWait(this.currentEpoch,t,e)),yield Promise.all(s)})}onTrainBegin(t){return J(this,null,function*(){this.trainBegin!=null&&(yield So(t),yield this.trainBegin(t))})}onTrainEnd(t){return J(this,null,function*(){this.trainEnd!=null&&(yield So(t),yield this.trainEnd(t))})}}function $x(n,t){return n==null&&(n={}),n instanceof Yi?[n]:Array.isArray(n)&&n[0]instanceof Yi?n:Vt(n).map(s=>new nE(s,t))}class En{constructor(){}static registerCallbackConstructor(t,e){T(t>=0&&Number.isInteger(t),()=>`Verbosity level is expected to be an integer >= 0, but got ${t}`),En.checkForDuplicate(e),En.constructors[t]==null&&(En.constructors[t]=[]),En.constructors[t].push(e)}static checkForDuplicate(t){for(const e in En.constructors)En.constructors[+e].forEach(o=>{if(o===t)throw new M("Duplicate callback constructor.")})}static clear(){En.constructors={}}static createCallbacks(t){const e=[];for(const s in En.constructors){const o=+s;t>=o&&e.push(...En.constructors[o])}return e.map(s=>new s)}}En.constructors={};function Ix(n,t,e,s,o,r,i,a,l){const c=new eE,u=[new tE,...En.createCallbacks(t)];n!=null&&u.push(...n),u.push(c);const h=new JT(u);return h.setParams({epochs:e,initialEpoch:s,samples:o,steps:r,batchSize:i,verbose:t,doValidation:a,metrics:l}),{callbackList:h,history:c}}function $s(n,t={},e=!1){return Wi(n,kn.getMap().classNameMap,t,"layer",e)}function hc(n,t){return U(()=>{n.dtype!=="float32"&&(n=at(n,"float32"));const e=mt(Hi(n),t,!0),s=Ml(e.shape,me()),o=Le(Ls(e,s));return gt(n,o)})}function dc(n,t){return U(()=>de(Hi(bt(t,n)),-1))}function Wd(n,t){return U(()=>de(We(bt(t,n)),-1))}function Ud(n,t){return U(()=>{const e=bt(n,t),s=mn(We(n),me(),Number.MAX_VALUE),o=We(gt(e,s));return L(100,de(o,-1))})}function sE(n,t){return U(()=>{const e=mn(t,me(),Number.MAX_VALUE),s=ts(tt(1,e)),o=mn(n,me(),Number.MAX_VALUE),r=ts(tt(1,o));return de(Hi(bt(s,r)),-1)})}function oE(n,t){return U(()=>{const e=Ls(0,bt(1,L(n,t)));return de(Hi(e),-1)})}function rE(n,t){return U(()=>{const e=Ls(0,bt(1,L(n,t)));return de(e,-1)})}function iE(n,t){return U(()=>{const e=mt(L(n,t),-1),s=Pn(L(bt(1,n),t),-1);return Ls(0,tt(1,bt(s,e)))})}function aE(n,t){return U(()=>{const e=Math.log(2),s=bt(t,n),o=bt(tt(s,Fi(L(-2,s))),e);return de(o,-1)})}function Zi(n,t,e=!1){return U(()=>{if(e)t=Bh(t);else{const s=mt(t,t.shape.length-1,!0);t=gt(t,s)}return t=mn(t,me(),1-me()),ae(mt(L(at(n,"float32"),ts(t)),t.shape.length-1))})}function pc(n,t,e=!1){return U(()=>{const s=at(zl(TT(n)),"int32");t=mn(t,me(),1-me());const o=t.shape,r=z(wm(s,o[o.length-1]),o);return Zi(r,t,e)})}function lE(n,t){if(!Pt(n.shape,t.shape))throw new M(`logits and labels must have the same shape, but got shapes ${JSON.stringify(n.shape)} and ${JSON.stringify(t.shape)}`);return U(()=>{const e=go(t),s=ae(We(t));return tt(bt(e,L(t,n)),gm(Jn(s)))})}function fc(n,t){return U(()=>{let e;return e=mn(t,me(),1-me()),e=ts(gt(e,bt(1,e))),de(lE(n,e),-1)})}function cE(n,t){return U(()=>{const e=mn(n,me(),1),s=mn(t,me(),1);return mt(L(n,ts(gt(e,s))),-1)})}function uE(n,t){return U(()=>{const e=ts(tt(me(),t));return de(bt(t,L(n,e)),-1)})}function vx(n,t){return U(()=>{const e=hc(n,-1),s=hc(t,-1),o=L(e,s);return ae(mt(o,-1))})}const mc={meanSquaredError:dc,meanAbsoluteError:Wd,meanAbsolutePercentageError:Ud,meanSquaredLogarithmicError:sE,squaredHinge:oE,hinge:rE,categoricalHinge:iE,logcosh:aE,categoricalCrossentropy:Zi,sparseCategoricalCrossentropy:pc,binaryCrossentropy:fc,kullbackLeiblerDivergence:cE,poisson:uE,cosineProximity:vx};function Gd(n){if(typeof n=="string"){if(n in mc)return mc[n];let t=`Unknown loss ${n}`;throw n.toLowerCase().includes("softmaxcrossentropy")&&(t=`Unknown loss ${n}. Use "categoricalCrossentropy" as the string name for tf.losses.softmaxCrossEntropy`),new M(t)}else return n}function kx(n,t){return U(()=>{const e=L(.5,vn(t)),s=os(gn(t,e),n.dtype);return de(Qn(n,s),-1)})}function Sx(n,t){return U(()=>os(Qn(Ni(n,-1),Ni(t,-1)),"float32"))}function hE(n,t){return U(()=>at(mt(gs(Qn(n,1),Qn(t,1))),"float32"))}function dE(n,t){return U(()=>at(mt(gs(Qn(n,0),Qn(t,1))),"float32"))}function pE(n,t){return U(()=>{const e=hE(n,t),s=dE(n,t),o=tt(e,s);return at(Ue(gn(o,0),gt(e,o),0),"float32")})}function fE(n,t){return fc(n,t)}function mE(n,t){return n.rank===t.rank&&(n=Li(n,[n.rank-1])),t=Ni(t,-1),t.dtype!==n.dtype&&(t=at(t,n.dtype)),at(Qn(n,t),"float32")}const gE=dc,xE=dc,bE=Wd,yE=Wd,wE=Ud,CE=Ud,Nx=Zi,$E=vx,Tx=pc,gc={binaryAccuracy:kx,categoricalAccuracy:Sx,precision:pE,categoricalCrossentropy:Nx,sparseCategoricalCrossentropy:Tx,mse:gE,MSE:xE,mae:bE,MAE:yE,mape:wE,MAPE:CE,cosine:$E};function IE(n){if(typeof n=="string"&&n in gc)return gc[n];if(typeof n!="string"&&n!=null)return n;throw new M(`Unknown metric ${n}`)}function xc(n){if(ss(n!==null,`Unknown LossOrMetricFn ${n}`),typeof n=="string")return n;{let t;for(const e of Object.keys(mc))if(mc[e]===n){t=e;break}if(t!==void 0)return t;for(const e of Object.keys(gc))if(gc[e]===n){t=e;break}return t!==void 0?t:n.name}}function vE(n){const t={Adagrad:()=>nr.adagrad(.01),Adadelta:()=>nr.adadelta(1,.95,me()),Adam:()=>nr.adam(.001,.9,.999,me()),Adamax:()=>nr.adamax(.002,.9,.999,me(),0),RMSProp:()=>nr.rmsprop(.001,.9,0,me()),SGD:()=>nr.sgd(.01)};if(t.adagrad=t.Adagrad,t.adadelta=t.Adadelta,t.adam=t.Adam,t.adamax=t.Adamax,t.rmsprop=t.RMSProp,t.sgd=t.SGD,n in t)return t[n]();throw new M(`Unknown Optimizer ${n}`)}const Ex=1*1024*1024;function Rx(n,t,e=!1){if(n==null||typeof n!="object"||Object.getPrototypeOf(n)!==Object.prototype||!Hd(n))throw new Error("User-defined metadata is expected to be a JSON object, but is not.");if(e){const s=JSON.stringify(n);s.length>Ex&&console.warn(`User-defined metadata of model "${t}" is too large in size (length=${s.length} when serialized). It is not recommended to store such large objects in user-defined metadata. Please make sure its serialized length is <= ${Ex}.`)}}function Hd(n){if(n===null)return!0;if(typeof n=="object")if(Object.getPrototypeOf(n)===Object.prototype){const t=Object.keys(n);for(const e of t)if(typeof e!="string"||!Hd(n[e]))return!1;return!0}else if(Array.isArray(n)){for(const t of n)if(!Hd(t))return!1;return!0}else return!1;else{const t=typeof n;return t==="string"||t==="number"||t==="boolean"}}function kE(n,t,e,s=console.log){const o=NE(n),r=["Layer (type)","Input Shape","Output shape","Param #"];o?(t=t||90,e=e||[.32,.61,.89,1]):(t=t||115,e=e||[.24,.48,.7,.8,1]),e[e.length-1]<=1&&(e=e.map(u=>Math.floor(t*u)));let i;if(!o){r.push("Receives inputs"),i=[];for(const u in n.nodesByDepth)i.push(...n.nodesByDepth[u])}s("_".repeat(t)),bc(r,e,s),s("=".repeat(t));const a=n.layers;for(let u=0;u<a.length;++u)o?TE(a[u],e,s):EE(a[u],e,i,s),s((u===a.length-1?"=":"_").repeat(t));n.checkTrainableWeightsConsistency();const l=SE(n),c=ac(n.nonTrainableWeights);s(`Total params: ${l+c}`),s(`Trainable params: ${l}`),s(`Non-trainable params: ${c}`),s("_".repeat(t))}function SE(n){let t;return n.collectedTrainableWeights!=null?t=ac(n.collectedTrainableWeights):t=ac(n.trainableWeights),t}function NE(n){let t=!0;const e=[],s=[];for(const o in n.nodesByDepth)e.push(n.nodesByDepth[o]);for(const o of e){if(o.length>1||o.length===1&&o[0].inboundLayers.length>1){t=!1;break}s.push(...o)}if(t)for(const o of n.layers){let r=!1;for(const i of o.inboundNodes)if(s.indexOf(i)!==-1)if(r){t=!1;break}else r=!0;if(!t)break}return t}function bc(n,t,e=console.log){let s="";for(let o=0;o<n.length;++o)o>0&&(s=s.slice(0,s.length-1)+" "),s+=n[o],s=s.slice(0,t[o]),s+=" ".repeat(t[o]-s.length);e(s)}function TE(n,t,e){let s,o;try{o=n.inboundNodes.map(l=>JSON.stringify(l.inputShapes)).join(",")}catch(l){o="multiple"}try{s=JSON.stringify(n.outputShape)}catch(l){s="multiple"}const r=n.name,i=n.getClassName(),a=[`${r} (${i})`,o,s,n.countParams().toString()];bc(a,t,e)}function EE(n,t,e,s){let o,r;try{r=n.inboundNodes.map(h=>JSON.stringify(h.inputShapes)).join(",")}catch(h){r="multiple"}try{o=JSON.stringify(n.outputShape)}catch(h){o="multiple"}const i=[];for(const h of n.inboundNodes)if(!(e!=null&&e.length>0&&e.indexOf(h)===-1))for(let d=0;d<h.inboundLayers.length;++d){const p=h.inboundLayers[d].name,f=h.nodeIndices[d],m=h.tensorIndices[d];i.push(`${p}[${f}][${m}]`)}const a=n.name,l=n.getClassName(),c=i.length===0?"":i[0],u=[`${a} (${l})`,r,o,n.countParams().toString(),c];bc(u,t,s);for(let h=1;h<i.length;++h)bc(["","","","",i[h]],t,s)}function Ax(n,t,e){return(n==="inboundNodes"||n==="outputLayers"||n==="inputLayers")&&t===0&&typeof e=="string"}function qd(n,t){if(n===null)return null;if(typeof n=="string")return $o(n);if(typeof n=="number"||typeof n=="boolean")return n;if(n instanceof Array){const e=[],s=n.length;for(let o=0;o<s;++o){const r=n[o];Ax(t,o,r)?e.push(r):e.push(qd(r,t))}return e}else{const e={};for(const s of Object.keys(n)){const o=n[s];if(s==="name"&&typeof o=="string")e[s]=o;else{const r=$o(s);e[r]=qd(o,r)}}return e}}function Xd(n,t){if(n==null)return null;if(typeof n=="string")return Cs(n);if(typeof n=="number"||typeof n=="boolean")return n;if(n instanceof Array){const e=[],s=n.length;for(let o=0;o<s;++o){const r=n[o];Ax(t,o,r)?e.push(r):e.push(Xd(r,t))}return e}else{const e={};for(const s of Object.keys(n)){const o=n[s],r=Cs(s);(s==="name"||s==="className")&&typeof o=="string"?e[r]=o:e[r]=Xd(o,s)}return e}}const Dx="4.20.0";const RE=n=>{const t=Object.keys(n);if(t.length===0)return!1;const e=t[0].split("/");return!isNaN(parseInt(e[e.length-1],10))};class Gn extends St{constructor(t){if(super({}),this.containerNodes=new Set,this.name=t.name,this.name==null){const b=this.getClassName().toLowerCase();this.name=sc(b)}if(this.supportsMasking=!1,this.trainable_=!0,Array.isArray(t.inputs)?this.inputs=t.inputs.slice():this.inputs=[t.inputs],Array.isArray(t.outputs)?this.outputs=t.outputs.slice():this.outputs=[t.outputs],zs(this.inputs).length!==this.inputs.length)throw new M(`The list of inputs passed to the model is redundant. All inputs should only appear once. Found: ${this.inputs.map(b=>b.name)}`);zs(this.outputs).length!==this.outputs.length&&console.warn(`The list of outputs passed to the model is redundant. All outputs should only appear once. Found: ${this.outputs.map(b=>b.name)}`),this.inputLayers=[],this.inputLayersNodeIndices=[],this.inputLayersTensorIndices=[],this.outputLayers=[],this.outputLayersNodeIndices=[],this.outputLayersTensorIndices=[],this.layers=[],this.internalContainerRefs=[];for(const b of this.outputs){const w=b.sourceLayer,y=b.nodeIndex,C=b.tensorIndex;this.outputLayers.push(w),this.outputLayersNodeIndices.push(y),this.outputLayersTensorIndices.push(C)}for(const b of this.inputs){const w=b.sourceLayer,y=b.nodeIndex,C=b.tensorIndex;ss(y===0,"input layer has >1 nodes"),ss(C===0,"input layer has >1 tensors"),this.inputLayers.push(w),this.inputLayersNodeIndices.push(y),this.inputLayersTensorIndices.push(C)}this.inputNames=[],this.outputNames=[],this.feedInputShapes=[],this.feedInputNames=[],this.feedOutputNames=[];for(let b=0;b<this.inputLayers.length;b++){const w=this.inputLayers[b];if(!(w instanceof Xi))throw new TypeError(`Input layers to a LayersModel must be InputLayer objects. Received inputs: ${t.inputs}. Input ${b} (0-based) originates from layer type ${w.getClassName()}.`);this.inputNames.push(w.name),this.feedInputShapes.push(w.batchInputShape),this.feedInputNames.push(w.name)}for(const b of this.outputLayers)this.outputNames.push(b.name);this.internalInputShapes=this.inputs.map(b=>b.shape),this.internalOutputShapes=this.outputs.map(b=>b.shape);const e={},s={},o={},r={},i={},a=[],l=(b,w,y,C,I,v)=>{(C==null||I==null||v==null)&&(C=b.sourceLayer,I=b.nodeIndex,v=b.tensorIndex);const N=C.inboundNodes[I];if(y.indexOf(N)!==-1)throw new Sn(`The tensor ${b.name} at layer "${C.name}" is part of a cycle.`);if(w.indexOf(N)!==-1)return;this.containerNodes.add(Gn.nodeKey(C,I)),C.id in i||(i[C.id]=Object.keys(i).length),y.indexOf(N)===-1&&y.push(N);const S=N.inboundLayers.length;for(let k=0;k<S;k++){const $=N.inputTensors[k],E=N.inboundLayers[k],R=N.nodeIndices[k],A=N.tensorIndices[k];l($,w,y,E,R,A)}for(w.push(N);y.indexOf(N)>=0;)y.splice(y.indexOf(N),1);a.push(N)},c=[],u=[];for(const b of this.outputs)l(b,c,u);const h=a.slice().reverse();for(const b of h){s[b.id]=b,b.id in e||(e[b.id]=0);let w=e[b.id];const y=o[b.outboundLayer.id]==null?0:o[b.outboundLayer.id];w=Math.max(w,y),o[b.outboundLayer.id]=w,r[b.outboundLayer.id]=b.outboundLayer,e[b.id]=w;for(let C=0;C<b.inboundLayers.length;C++){const I=b.inboundLayers[C],v=b.nodeIndices[C],N=I.inboundNodes[v],S=e[N.id]==null?0:e[N.id];e[N.id]=Math.max(w+1,S),s[N.id]=N}}const d={};for(const b in e){const w=e[b];w in d||(d[w]=[]),d[w].push(s[b])}const p={};for(const b in o){const w=o[b];w in p||(p[w]=[]),p[w].push(r[b])}let f=Object.keys(p).map(b=>parseInt(b,10)).sort(ec);this.layers=[];for(const b of f){const w=p[b];w.sort((y,C)=>{const I=i[y.id],v=i[C.id];return I<v?-1:I>v?1:0});for(const y of w)y instanceof Gn&&this.internalContainerRefs.push(y),this.layers.push(y)}this.layersByDepth=p,f=Object.keys(d).map(b=>parseInt(b,10)).sort(ec);const m=this.inputs.slice(),g=[];for(const b of f)for(const w of d[b]){const y=w.outboundLayer;if(y!=null){for(const C of w.inputTensors)if(m.indexOf(C)===-1)throw new Sn(`Graph disconnected: cannot obtain value for tensor ${C} at layer "${y.name}". The following previous layers were accessed without issue: ${g}`);for(const C of w.outputTensors)m.push(C);g.push(y.name)}}this.nodesByDepth=d;const x=this.layers.map(b=>b.name);for(const b of x){const w=x.filter(y=>y===b).length;if(w!==1)throw new Sn(`The name "${b}" is used ${w} times in the model. All layer names should be unique. Layer names: `+JSON.stringify(x))}this.outboundNodes=[],this.inboundNodes=[],new lc({outboundLayer:this,inboundLayers:[],nodeIndices:[],tensorIndices:[],inputTensors:this.inputs,outputTensors:this.outputs,inputMasks:this.inputs.map(b=>null),outputMasks:this.outputs.map(b=>null),inputShapes:this.inputs.map(b=>b.shape),outputShapes:this.outputs.map(b=>b.shape)}),this.built=!0,this._refCount=1}assertNotDisposed(){if(this._refCount===0)throw new Error(`Container '${this.name}' is already disposed.`)}dispose(){this.assertNotDisposed();const t={refCountAfterDispose:null,numDisposedVariables:0};if(--this._refCount===0){for(const e of this.layers)t.numDisposedVariables+=e.dispose().numDisposedVariables;for(const e of this.internalContainerRefs)t.numDisposedVariables+=e.dispose().numDisposedVariables}return t.refCountAfterDispose=this._refCount,t}get trainable(){return this.trainable_}set trainable(t){this.layers.forEach(e=>{e._trainableWeights.forEach(s=>s.trainable=t)}),this.trainable_=t}get trainableWeights(){if(this._trainableWeights.length>0)throw new M("Container instance unexpectedly contains _trainableWeights.The trainable weights of a Container are a union of the trainable weights of its consituent Layers. Its own _trainableWeights must remain an empty Array.");if(!this.trainable)return[];let t=[];for(const e of this.layers)t=t.concat(e.trainableWeights);return t}get nonTrainableWeights(){const t=[];for(const e of this.layers)t.push(...e.nonTrainableWeights);if(!this.trainable){const e=[];for(const s of this.layers)e.push(...s.trainableWeights);return e.concat(t)}return t}get weights(){return this.trainableWeights.concat(this.nonTrainableWeights)}loadWeights(t,e=!0){const s={};let o=0;const r=RE(t);r&&this.parseWeights(t);for(const a of this.layers)for(const[l,c]of a.weights.entries()){const u=r?`${c.name.split("/").slice(0,-1).join("/")+"/"}${l}`:c.originalName;if(s[u]!=null)throw new M(`Duplicate weight name: ${u}`);s[u]=c,o++}const i=[];for(const a in t){let l=a;if(s[a]==null){const c=a.split("/");l=c.slice(0,-2).concat([c[c.length-1]]).join("/")}if(s[l]!=null)i.push([s[l],t[a]]);else if(e)throw new M(`Provided weight data has no target variable: ${a}`);delete s[l]}if(e){const a=[];for(const l in s)a.push(l);if(a.length>0)throw new M(`${a.length} of ${o} weights are not set: ${a}`)}zd(i)}parseWeights(t){for(const e in Object.keys(t)){const s=e.split("/"),o=["vars","layer_checkpoint_dependencies"],r=s.map(i=>i.startsWith("_")?i.slice(1):i).filter(i=>!o.includes(i)).join("/");r!==e&&(t[r]=t[e],delete t[e])}}updatedConfig(){const t=this.getConfig(),e={};return e.className=this.getClassName(),e.config=t,e.kerasVersion=`tfjs-layers ${Dx}`,e.backend="TensorFlow.js",e}toJSON(t,e=!0){const s=Xd(this.updatedConfig());return e?JSON.stringify(s):s}call(t,e){return U(()=>{t=Vt(t);const s=new Us;for(let o=0;o<this.inputs.length;++o)s.add(this.inputs[o],t[o]);return Ki(this.outputs,s,e)})}computeMask(t,e){return U(()=>{t=Vt(t);let s;return e==null?s=Co(null,t.length):s=Vt(e),this.runInternalGraph(t,s)[1]})}computeOutputShape(t){const e=ic(t);if(e.length!==this.inputLayers.length)throw new M(`Invalid inputShape argument ${t}: model has ${this.inputLayers.length} tensor inputs.`);const s={};for(let a=0;a<e.length;a++){const l=this.inputLayers[a],c=e[a],u=l.name+"_0_0";s[u]=c}const o=Object.keys(this.nodesByDepth).map(a=>parseInt(a,10)).sort(ec);if(o.length>1)for(const a of o){const l=this.nodesByDepth[a];for(const c of l){const u=c.outboundLayer;if(this.inputLayers.map(m=>m.id).indexOf(u.id)!==-1)continue;const h=[];for(let m=0;m<c.inboundLayers.length;m++){const g=c.inboundLayers[m],x=c.nodeIndices[m],b=c.tensorIndices[m],w=`${g.name}_${x}_${b}`,y=s[w];h.push(y)}const d=u.computeOutputShape(Je(h)),p=ic(d),f=u.inboundNodes.indexOf(c);for(let m=0;m<p.length;m++){const g=`${u.name}_${f}_${m}`;s[g]=p[m]}}}const r=[],i=[];for(let a=0;a<this.outputLayers.length;a++){const l=this.outputLayers[a],c=this.outputLayersNodeIndices[a],u=this.outputLayersTensorIndices[a],h=`${l.name}_${c}_${u}`;i.push(h)}for(let a=0;a<i.length;a++){const l=i[a];ss(l in s),r.push(s[l])}return Je(r)}runInternalGraph(t,e){e==null&&(e=Co(null,t.length));const s={};for(let l=0;l<this.inputs.length;++l){const c=this.inputs[l],u=t[l],h=e[l];s[c.id]=[u,h]}const o=Object.keys(this.nodesByDepth).map(l=>parseInt(l,10)).sort(ec);for(const l of o){const c=this.nodesByDepth[l];for(const u of c){const h=u.outboundLayer,d=u.inputTensors,p=u.outputTensors,f=new Array;for(const m of d)m.id in s&&f.push(s[m.id]);if(f.length===d.length){let m={},g,x,b,w;if(u.callArgs!=null&&(m=u.callArgs),f.length===1){const[y,C]=f[0];m.mask==null&&(m.mask=C),b=Vt(h.call(y,m)),w=Vt(h.computeMask(y,C)),g=[y],x=[C]}else g=f.map(y=>y[0]),x=f.map(y=>y[1]),m.mask==null&&(m.mask=x),b=Vt(h.call(g,m)),w=Vt(h.computeMask(g,x));if(h.activityRegularizer)throw new It("LayersModel invocation with concrete Tensor value(s) in the presence of activity regularizer(s) is not supported yet.");for(let y=0;y<p.length;++y){const C=p[y],I=b[y],v=w[y];s[C.id]=[I,v]}}}}const r=[],i=[],a=[];for(const l of this.outputs){ss(l.id in s,`Could not compute output ${l.name} : ${l.id}`);const[c,u]=s[l.id];a.push(c.shape),r.push(c),i.push(u)}return[r,i,a]}buildNodeConversionMap(t){const e={};let s;for(const o of this.layers){s=o instanceof Gn?1:0;for(let r=0;r<o.inboundNodes.length;r++){const i=Gn.nodeKey(o,r);this.containerNodes.has(i)&&(e[i]=s,s+=1)}}return e}getLayer(t,e){if(e!=null)return this.findLayer(e);if(t==null)throw new M("Provide either a layer name or layer index");if(typeof t=="number")return this.findLayer(t);for(const s of this.layers)if(s.name===t)return s;throw new M(`No such layer: ${t}`)}findLayer(t){if(this.layers.length<=t)throw new M(`Was asked to retrieve layer at index ${t}, but model only has ${this.layers.length} layer(s).`);return this.layers[t]}calculateLosses(){return U(()=>{const t=[];for(const e of this.layers)for(let s=0;s<e.inboundNodes.length;++s){const o=Gn.nodeKey(e,s);this.containerNodes.has(o)&&t.push(...e.calculateLosses())}return t})}getConfig(){const t={name:this.name},e=this.buildNodeConversionMap(this.layers),s=[];for(const i of this.layers){const a=i.getClassName(),l=i.getConfig(),c=[];for(let h=0;h<i.inboundNodes.length;h++){const d=i.inboundNodes[h],p=Gn.nodeKey(i,h);let f={};if(this.containerNodes.has(p)){if(d.callArgs)try{JSON.stringify(d.callArgs),f=d.callArgs}catch(m){console.warn(`Layer ${i.name} was passed non-serializable keyword arguments: ${d.callArgs}. They will not be included in the serialized model (and thus will be missing at deserialization time).`),f={}}if(d.inboundLayers.length>0){const m=[];for(let g=0;g<d.inboundLayers.length;g++){const x=d.inboundLayers[g],b=d.nodeIndices[g],w=d.tensorIndices[g],y=Gn.nodeKey(x,b);let C=e[y];C==null&&(C=0),m.push([x.name,C,w,f])}c.push(m)}}}const u={};u.name=i.name,u.className=a,u.config=l,u.inboundNodes=c,s.push(u)}t.layers=s;const o=[];for(let i=0;i<this.inputLayers.length;i++){const a=this.inputLayers[i],l=this.inputLayersNodeIndices[i],c=Gn.nodeKey(a,l);if(!this.containerNodes.has(c))continue;let u=e[c];u==null&&(u=0);const h=this.inputLayersTensorIndices[i];o.push([a.name,u,h])}t.inputLayers=o;const r=[];for(let i=0;i<this.outputLayers.length;i++){const a=this.outputLayers[i],l=this.outputLayersNodeIndices[i],c=Gn.nodeKey(a,l);if(!this.containerNodes.has(c))continue;let u=e[c];u==null&&(u=0);const h=this.outputLayersTensorIndices[i];r.push([a.name,u,h])}return t.outputLayers=r,t}static fromConfig(t,e,s={},o=!1){const r={},i={};function a(g,x){g.name in i?i[g.name].push(x):i[g.name]=[x]}function l(g,x){const b=[];let w;for(const y of x){const C=y[0],I=y[1],v=y[2];if(w=y[3]==null?{}:y[3],!(C in r)){a(g,x);return}const N=r[C];if(N.inboundNodes.length<=I){a(g,x);return}const S=N.inboundNodes[I];b.push(S.outputTensors[v])}b.length>0&&g.apply(Je(b),w)}function c(g){const x=g.name,b=$s(g,e.customObjects!=null?e.customObjects:{});b.setFastWeightInitDuringBuild(o),r[x]=b,g.inboundNodes.forEach(y=>{if(!(y instanceof Array))throw new M(`Corrupted configuration, expected array for nodeData: ${y}`);a(b,y)})}const u=e.name,h=e.layers;for(const g of h)c(g);for(;!mT(i);)for(const g of h){const x=r[g.name];if(x.name in i){const b=i[x.name];delete i[x.name];for(const w of b)l(x,w)}}const d=[],p=[],f=e.inputLayers;for(const g of f){const x=g[0],b=g[1],w=g[2];ss(x in r);const C=r[x].inboundNodes[b].outputTensors;d.push(C[w])}const m=e.outputLayers;for(const g of m){const x=g[0],b=g[1],w=g[2];ss(x in r);const C=r[x].inboundNodes[b].outputTensors;p.push(C[w])}return new t({inputs:d,outputs:p,name:u})}get stateful(){if(this._stateful)throw new M("Container instance unexpectedly has _stateful = true. The statefulness of a Container is determined by the Layers it contains. Its _stateful property must remain the default false.");for(const t of this.layers)if(t.stateful)return!0;return!1}resetStates(){U(()=>{this.layers.forEach(t=>{t.stateful&&t.resetStates()})})}}function AE(n,t,e){const s=t.length;if(n==null||Array.isArray(n)&&n.length===0)return t.map(o=>null);if(s===1)return Array.isArray(n)&&n.length===1?n:typeof n=="object"&&t[0]in n?[n[t[0]]]:[n];if(Array.isArray(n)){if(n.length!==s)throw new Error(`Provided ${e} is an array of ${n.length} element(s), but the model has ${s} outputs. Make sure a set of weights is provided for each model output.`);return n}else if(typeof n=="object"&&Object.keys(n).length>0&&typeof n[Object.keys(n)[0]]=="object"){const o=[];return t.forEach(r=>{r in n?o.push(n[r]):o.push(null)}),o}else throw new Error(`The model has multiple (${s}) outputs, so ${e} must be either an array with ${s} elements or an object with ${t} keys. Provided ${e} not understood: ${JSON.stringify(n)}`)}function Fx(n,t){return AE(n,t,"classWeight")}function _x(n,t,e,s){return J(this,null,function*(){if(e!=null){const o=U(()=>{if(n.shape.length===1)return co(n);if(n.shape.length===2){if(n.shape[1]>1)return Ni(n,1);if(n.shape[1]===1)return z(n,[n.shape[0]]);throw new Error(`Encountered unexpected last-dimension size (${n.shape[1]}) during handling of class weights. The size is expected to be >= 1.`)}else throw new Error(`Unexpected rank of target (y) tensor (${n.rank}) during handling of class weights. The rank is expected to be 1 or 2.`)}),r=Array.from(yield o.data());Nt(o);const i=[];return r.forEach(a=>{if(e[a]==null)throw new Error(`classWeight must contain all classes in the training data. The class ${a} exists in the data but not in classWeight`);i.push(e[a])}),rn(i,"float32")}else return null})}function DE(n,t){return L(n,t)}const FE=32;function Ox(n,t){let e,s;const o=t;e=o.xs,s=o.ys,T(e!=null&&s!=null,()=>`A Dataset iterator for fitDataset() is expected to generate objects of the form \`{xs: xVal, ys: yVal}\`, where the two values may be \`tf.Tensor\`, an array of Tensors, or a map of string to Tensor.  The provided Dataset instead generates ${t}`);const r=Mx("input",n.inputNames,e),i=Mx("output",n.outputNames,s),a=r[0].shape[0];T(r.length===n.inputs.length,()=>`LayersModel has ${n.inputs.length} inputs, but the dataset provides ${r.length} inputs.  (Expected input keys: ${JSON.stringify(n.inputNames)})`),T(i.length===n.outputs.length,()=>`LayersModel has ${n.outputs.length} outputs, but the dataset provides ${i.length} outputs.  (Expected output keys: ${JSON.stringify(n.outputNames)})`);for(let l=0;l<r.length;l++)T(r[l].shape[0]===a,()=>`Batch size mismatch: input ${n.inputNames[l]} has ${r[l].shape[0]}; expected  ${a} based on input ${n.inputNames[0]}.`);for(let l=0;l<i.length;l++)T(i[l].shape[0]===a,()=>`Batch size mismatch: output ${n.outputNames[l]} has ${i[l].shape[0]}; expected  ${a} based on input ${n.inputNames[0]}.`);return{xs:r,ys:i}}function Mx(n,t,e){if(e instanceof pe)return[e];if(Array.isArray(e))return T(e.length===t.length,()=>`Received an array of ${e.length} Tensors, but expected ${t.length} to match the ${n} keys ${t}.`),e;{const s=[];for(const o of t){if(e[o]==null)throw new M(`The feature data generated by the dataset lacks the required ${n} key '${o}'.`);s.push(e[o])}return s}}function _E(n){if(n.length===3)throw new It("Validation with sample weights is not implemented yet.");return{xs:n[0],ys:n[1]}}function OE(n,t,e){return J(this,null,function*(){const s=e.batchesPerEpoch!=null;if(T(n.optimizer!=null,()=>"You must compile a model before training/testing. Use LayersModel.compile(modelCompileConfig)."),T(e!=null,()=>"For fitDataset(), the 2nd argument (config) is required, but it is not provided in this call."),T(e.epochs!=null&&e.epochs>0&&Number.isInteger(e.epochs),()=>`For fitDataset(), config.epochs is expected to be a positive integer, but got ${e.epochs}`),T(!s||e.batchesPerEpoch>0&&Number.isInteger(e.batchesPerEpoch),()=>`For fitDataset(), config.batchesPerEpoch is expected to be a positive integer if specified, but got ${e.batchesPerEpoch}`),T(e.validationSplit==null,()=>"`validationSplit` is not supported by `fitDataset()`. Use validationData instead."),n.isTraining)throw new Error("Cannot start training because another fit() call is ongoing.");n.isTraining=!0;try{const o=e.validationData!=null;let r,i;if(o)if(Lx(e.validationData))T(e.validationBatches==null||e.validationBatches>0&&Number.isInteger(e.validationBatches),()=>`For fitDataset() with dataset-based validation, config.validationBatches is expected not to be provided, or to be a positive integer, but got ${e.validationBatches}`);else{const g=_E(e.validationData);r=g.xs,i=g.ys}const a=n.makeTrainFunction(),l=n.getDedupedMetricsNames();let c;o?c=l.slice().concat(l.map(g=>"val_"+g)):c=l.slice();const u=$x(e.callbacks,e.yieldEvery),h=e.verbose==null?1:e.verbose,{callbackList:d,history:p}=Ix(u,h,e.epochs,null,null,ME(t,e),null,o,c);d.setModel(n),n.history=p,yield d.onTrainBegin(),n.stopTraining_=!1;let f=e.initialEpoch==null?0:e.initialEpoch,m=yield t.iterator();for(;f<e.epochs;){const g={};yield d.onEpochBegin(f);let x=0,b=0;for(s||(m=yield t.iterator());!s||x<e.batchesPerEpoch;){const w=yield m.next();if(s&&w.done){console.warn(`You provided \`batchesPerEpoch\` as ${e.batchesPerEpoch}, but your dataset iterator ran out of data after ${x} batches; interrupting training. Make sure that your dataset can generate at least \`batchesPerEpoch * epochs\` batches (in this case, ${e.batchesPerEpoch*e.epochs} batches). You may need to use the repeat() function when building your dataset.`);break}if(w.value!=null){const{xs:y,ys:C}=Ox(n,w.value),I={};I.batch=b,I.size=y[0].shape[0],yield d.onBatchBegin(b,I);const v=[];if(e.classWeight!=null){const k=Fx(e.classWeight,n.outputNames);for(let $=0;$<k.length;++$)v.push(yield _x(C[$],null,k[$]))}const N=y.concat(C).concat(v),S=a(N);Nt(N);for(let k=0;k<l.length;++k){const $=l[k],E=S[k];I[$]=E,Yn(E)}yield d.onBatchEnd(b,I),wx(I),b++,x++}if(s?x>=e.batchesPerEpoch:w.done){if(o){let y;Lx(e.validationData)?y=Vt(yield n.evaluateDataset(e.validationData,{batches:e.validationBatches})):y=Vt(n.evaluate(r,i,{batchSize:e.validationBatchSize==null?FE:e.validationBatchSize,verbose:0}));for(let C=0;C<n.metricsNames.length;++C)g[`val_${n.metricsNames[C]}`]=y[C]}break}if(n.stopTraining_)break}if(yield d.onEpochEnd(f,g),f++,n.stopTraining_)break}return yield d.onTrainEnd(),yield n.history.syncData(),n.history}finally{n.isTraining=!1}})}function ME(n,t){let e=null;return t.batchesPerEpoch!=null?e=t.batchesPerEpoch:Number.isFinite(n.size)&&(e=n.size),e}function Lx(n){return typeof n.iterator=="function"}function LE(n){return typeof n.next=="function"}function PE(n,t,e){return J(this,null,function*(){e=e||{};const s=e.batches!=null,o=n.testFunction;let r=[];if(e.verbose>0)throw new It("Verbose mode is not implemented yet.");T(!s||e.batches>0&&Number.isInteger(e.batches),()=>`Test loop expects \`batches\` to be a positive integer, but received ${JSON.stringify(e.batches)}`);const i=LE(t)?t:yield t.iterator();let a=0,l=0;for(;!s||l<e.batches;){const c=yield i.next();if(r=U(()=>{if(c.value){const{xs:u,ys:h}=Ox(n,c.value),d=u.concat(h),p=U(()=>o(d));if(Nt(d),l===0)for(let m=0;m<p.length;++m)r.push(zt(0));const f=d[0].shape[0];for(let m=0;m<p.length;++m){const g=p[m],x=r[m];r[m]=U(()=>tt(r[m],L(f,g))),l>0&&Nt(x)}Nt(p),a+=f,++l}return r}),c.done){s&&console.warn(`Your dataset iterator ran out of data during evaluateDataset(). Interrupting evalution. Make sure that your dataset can generate at least \`batches\` batches (in this case, ${e.batches} batches). You may need to use the repeat() function when building your dataset.`);break}}for(let c=0;c<r.length;++c){const u=r[c];r[c]=gt(r[c],a),Nt(u)}return Je(r)})}function Kd(n){T(n>0&&Number.isInteger(n),()=>`batchSize is required to be a positive integer, but got ${n}`)}function Qi(n,t,e){return n==null?[null]:Array.isArray(n)?n.map(s=>ko(s,t,e-t)):ko(n,t,e-t)}function jd(n,t){return U(()=>n==null?null:Array.isArray(n)?n.map(e=>jd(e,t)):tx(n,t.dtype==="int32"?t:at(t,"int32")))}function Yd(n,t){const e=[];let s=0,o=null;for(;s<n;)o=s+t,o>=n&&(o=n),e.push([s,o]),s=o;return e}function Px(n){const t=[];n instanceof pe&&(n=[n]);for(let e=0;e<n.length;++e){const s=n[e];if(s.rank===1)t.push(Gi(s,1));else{if(s.rank===0)throw new Error("Expected tensor to be at least 1D, but received a 0D tensor (scalar).");t.push(s)}}return t}function Hn(n,t){if(n==null)return;const e=[];if(t instanceof pe)e.push(t.id);else if(Array.isArray(t))t.forEach(o=>e.push(o.id));else if(t!=null)for(const o in t){const r=t[o];e.push(r.id)}const s=[];if(n instanceof pe)e.indexOf(n.id)===-1&&s.push(n);else if(Array.isArray(n))n.forEach(o=>{e.indexOf(o.id)===-1&&s.push(o)});else if(n!=null)for(const o in n){const r=n[o];e.indexOf(r.id)===-1&&s.push(r)}s.forEach(o=>{o.isDisposed||o.dispose()})}function BE(n){return n instanceof pe}function Zd(n){return Array.isArray(n)}function Bx(n){return!BE(n)&&!Zd(n)}function zx(n,t,e,s=!0,o=""){if(t==null||t.length===0){if(n!=null){let i=!1;if(Zd(n)&&n.length>0)i=!0;else if(Bx(n)){for(const a in n)if(n.hasOwnProperty(a)){i=!0;break}}else i=!0;if(i)throw new M(`Error when checking model ${o} expected no data, but got ${n}`)}return[]}if(n==null)return t.map(i=>null);let r;if(Bx(n)){n=n,r=[];for(const i of t){if(n[i]==null)throw new M(`No data provided for "${i}". Need data for each key in: ${t}`);r.push(n[i])}}else if(Zd(n)){if(n=n,n.length!==t.length)throw new M(`Error when checking model ${o}: the Array of Tensors that you are passing to your model is not the size the model expected. Expected to see ${t.length} Tensor(s), but instead got the following list of Tensor(s): ${n}`);r=n}else{if(n=n,t.length>1)throw new M(`The model ${o} expects ${t.length} Tensor(s), but only received one Tensor. Found: Tensor with shape ${n.shape}`);r=[n]}if(r=Px(r),e!=null)for(let i=0;i<t.length;++i){if(e[i]==null)continue;const a=r[i];if(a.shape.length!==e[i].length)throw new M(`Error when checking ${o}: expected ${t[i]} to have ${e[i].length} dimension(s). but got array with shape ${a.shape}`);for(let l=0;l<e[i].length;++l){if(l===0&&!s)continue;const c=a.shape[l],u=e[i][l];if(u!=null&&u>=0&&c!==u)throw new M(`${o} expected a batch of elements where each example has shape [${e[i].slice(1,e[i].length)}] (i.e.,tensor shape [*,${e[i].slice(1,e[i].length)}]) but the ${o} received an input with ${a.shape[0]} examples, each with shape [${a.shape.slice(1,a.shape.length)}] (tensor shape [${a.shape}])`)}}return r}function zE(n,t,e){const s=zs(n.map(r=>r.shape[0]));s.sort();const o=zs(t.map(r=>r.shape[0]));if(o.sort(),s.length>1)throw new M(`All input Tensors (x) should have the same number of samples. Got array shapes: ${JSON.stringify(n.map(r=>r.shape))}`);if(o.length>1)throw new M(`All target Tensors (y) should have the same number of samples. Got array shapes: ${JSON.stringify(t.map(r=>r.shape))}`);if(s.length>0&&o.length>0&&!Pt(s,o))throw new M(`Input Tensors should have the same number of samples as target Tensors. Found ${s[0]} input sample(s) and ${o[0]} target sample(s).`)}function VE(n,t,e){const s=[dc,fc,Zi];for(let o=0;o<n.length;++o){const r=n[o],i=t[o],a=e[o];if(i!=null){if(i===Zi&&r.shape[r.shape.length-1]===1)throw new M(`You are passing a target array of shape ${r.shape} while using a loss 'categorical_crossentropy'. 'categorical_crossentropy'expects targets to be binary matrices (1s and 0s) of shape [samples, classes].`);if(s.indexOf(i)!==-1){const l=r.shape.slice(1),c=a.slice(1);for(let u=0;u<l.length;++u){const h=l[u],d=c[u];if(d!=null&&h!==d)throw new M(`A target Tensor with shape ${r.shape} was passed for an output of shape ${a}, while using a loss function that expects targets to have the same shape as the output.`)}}}}}function Vx(n,t,e,s=!0,o=""){let r;if(Array.isArray(n)){if(n.length!==t.length)throw new M(`Error when checking model ${o}: the Array of Tensors that you are passing to your model is not the size the the model expected. Expected to see ${t.length} Tensor(s), but instead got ${n.length} Tensors(s).`);r=n}else{if(t.length>1)throw new M(`The model expects ${t.length} ${o} Tensors, but only received one Tensor. Found: array with shape ${JSON.stringify(n.shape)}.`);r=[n]}if(e!=null)for(let i=0;i<t.length;++i){if(e[i]==null)continue;const a=r[i];if(a.shape.length!==e[i].length)throw new M(`Error when checking ${o}: expected ${t[i]} to have ${e[i].length} dimension(s), but got array with shape ${JSON.stringify(a.shape)}`);for(let l=0;l<e[i].length;++l){if(l===0&&!s)continue;const c=a.shape[l],u=e[i][l];if(u!=null&&u!==c)throw new M(`Error when checking ${o}: expected ${t[i]} to have shape ${JSON.stringify(e[i])} but got array with shape ${JSON.stringify(a.shape)}.`)}}}function WE(n,t){if(n==null||Array.isArray(n)&&n.length===0)return t.map(s=>[]);let e;if(typeof n=="string"||typeof n=="function")e=[n];else if(Array.isArray(n)||typeof n=="object")e=n;else throw new TypeError(`Type of metrics argument not understood. Expected an string,function, Array, or Object, found: ${n}`);if(Array.isArray(e))return t.map(s=>e);{const s=[];for(const o of t){let r=e.hasOwnProperty(o)?e[o]:[];Array.isArray(r)||(r=[r]),s.push(r)}return s}}const UE="layers-model";class rr extends Gn{constructor(t){super(t),this.isTraining=!1}summary(t,e,s=console.log){if(!this.built)throw new M("This model has never been called, thus its weights have not been created yet. So no summary can be displayed. Build the model first (e.g., by calling it on some test data).");kE(this,t,e,s)}compile(t){if(t.loss==null&&(t.loss=[]),this.loss=t.loss,typeof t.optimizer=="string")this.optimizer_=vE(t.optimizer),this.isOptimizerOwned=!0;else{if(!(t.optimizer instanceof Bs))throw new M("User-defined optimizer must be an instance of tf.Optimizer.");this.optimizer_=t.optimizer,this.isOptimizerOwned=!1}let e=[];if(!Array.isArray(t.loss)&&typeof t.loss!="string"&&typeof t.loss!="function"){t.loss=t.loss;for(const i in t.loss)if(this.outputNames.indexOf(i)===-1)throw new M(`Unknown entry in loss dictionary: "${i}". Only expected the following keys: ${this.outputNames}`);for(const i of this.outputNames)t.loss[i]==null&&console.warn(`Output "${i}" is missing from loss dictionary. We assume this was done on purpose, and we will not be expecting data to be passed to ${i} during training`),e.push(Gd(t.loss[i]))}else if(Array.isArray(t.loss)){if(t.loss.length!==this.outputs.length)throw new M(`When passing an Array as loss, it should have one entry per model output. The model has ${this.outputs.length} output(s), but you passed loss=${t.loss}.`);e=t.loss.map(a=>Gd(a))}else{const i=Gd(t.loss);this.outputs.forEach(a=>{e.push(i)})}this.lossFunctions=e,this.feedOutputNames=[],this.feedOutputShapes=[],this.feedLossFns=[];for(let i=0;i<this.outputs.length;++i){const a=this.internalOutputShapes[i],l=this.outputNames[i];this.feedOutputNames.push(l),this.feedOutputShapes.push(a),this.feedLossFns.push(this.lossFunctions[i])}const s=[];this.metrics=t.metrics,this.metricsNames=["loss"],this.metricsTensors=[],vo("loss",()=>{for(let i=0;i<this.outputs.length;++i){if(s.indexOf(i)!==-1)continue;const a=this.lossFunctions[i];this.outputs.length>1&&(this.metricsTensors.push([a,i]),this.metricsNames.push(this.outputNames[i]+"_loss"))}});const o=WE(t.metrics,this.outputNames),r=(i,a,l)=>{this.outputNames.length>1&&(a=this.outputNames[i]+"_"+a),this.metricsNames.push(a),this.metricsTensors.push([l,i])};vo("metric",()=>{for(let i=0;i<this.outputs.length;++i){if(s.indexOf(i)!==-1)continue;const a=o[i];(c=>{let h,d,p;for(const f of c){if(typeof f=="string"&&["accuracy","acc","crossentropy","ce"].indexOf(f)!==-1){const g=this.internalOutputShapes[i];g[g.length-1]===1||this.lossFunctions[i]===fc?["accuracy","acc"].indexOf(f)!==-1?d=kx:["crossentropy","ce"].indexOf(f)!==-1&&(d=fE):this.lossFunctions[i]===pc?["accuracy","acc"].indexOf(f)!==-1?d=mE:["crossentropy","ce"].indexOf(f)!==-1&&(d=Tx):["accuracy","acc"].indexOf(f)!==-1?d=Sx:["crossentropy","ce"].indexOf(f)!==-1&&(d=Nx);let x;["accuracy","acc"].indexOf(f)!==-1?x="acc":["crossentropy","ce"].indexOf(f)!==-1&&(x="ce"),p=d,h=""+x}else p=IE(f),h=""+xc(f);let m;vo(h,()=>{m=p}),r(i,h,m)}})(a)}}),this.collectedTrainableWeights=this.trainableWeights}checkTrainableWeightsConsistency(){this.collectedTrainableWeights!=null&&this.trainableWeights.length!==this.collectedTrainableWeights.length&&console.warn("Discrepancy between trainableweights and collected trainable weights. Did you set `model.trainable` without calling `model.compile()` afterwards?")}evaluate(t,e,s={}){const o=s.batchSize==null?32:s.batchSize;Kd(o);const i=this.standardizeUserDataXY(t,e,!0,o);try{const a=i[0].concat(i[1]);this.makeTestFunction();const l=this.testFunction,c=this.testLoop(l,a,o,s.verbose,s.steps);return Je(c)}finally{Hn(i[0],t),Hn(i[1],e)}}evaluateDataset(t,e){return J(this,null,function*(){return this.makeTestFunction(),PE(this,t,e)})}checkNumSamples(t,e,s,o="steps"){let r;if(s!=null){if(r=null,e!=null)throw new M(`If ${o} is set, batchSize must be null or undefined.Got batchSize = ${e}`)}else if(t!=null)Array.isArray(t)?r=t[0].shape[0]:r=t.shape[0];else throw new M(`Either the input data should have a defined shape, or ${o} shoud be specified.`);return r}execute(t,e){if(Array.isArray(e)&&e.length===0)throw new M("`outputs` is an empty Array, which is not allowed.");const s=Array.isArray(e),o=s?e:[e],r=this.retrieveSymbolicTensors(o),i=new Us;if(t instanceof pe&&(t=[t]),Array.isArray(t)){if(t.length!==this.inputs.length)throw new M(`The number of inputs provided (${t.length}) does not match the number of inputs of this model (${this.inputs.length}).`);for(let l=0;l<this.inputs.length;++l)i.add(this.inputs[l],t[l])}else for(const l of this.inputs){const c=t[l.name];if(c==null)throw new M(`No value is provided for the model's input ${l.name}`);i.add(l,c)}const a=Ki(r,i);return s?a:a[0]}retrieveSymbolicTensors(t){const e=Co(null,t.length);let s=t.length;for(const o of this.layers){const r=Array.isArray(o.output)?o.output:[o.output],i=r.map(a=>a.name);for(let a=0;a<t.length;++a){const l=i.indexOf(t[a]);if(l!==-1&&(e[a]=r[l],s--),s===0)break}if(s===0)break}if(s>0){const o=[];throw e.forEach((r,i)=>{r==null&&o.push(t[i])}),new M(`Cannot find SymbolicTensors for output name(s): ${JSON.stringify(o)}`)}return e}predictLoop(t,e=32,s=!1){return U(()=>{const o=this.checkNumSamples(t);if(s)throw new It("Verbose predictLoop() is not implemented yet.");const r=Yd(o,e),i=this.outputs.map(a=>[]);for(let a=0;a<r.length;++a)U(()=>{const c=r[a][0],u=r[a][1],h=Qi(t,c,u),d=[];if(Array.isArray(h))for(let f=0;f<h.length;++f)d.push({key:this.inputs[f],value:h[f]});else d.push({key:this.inputs[0],value:h});const p=new Us(d);return Ki(this.outputs,p)}).forEach((c,u)=>i[u].push(c));return Je(i.map(a=>Ze(a,0)))})}predict(t,e={}){const s=Px(t);Vx(s,this.inputNames,this.feedInputShapes,!1);try{const o=e.batchSize==null?32:e.batchSize;return Kd(o),this.predictLoop(s,o)}finally{Hn(s,t)}}predictOnBatch(t){Vx(t,this.inputNames,this.feedInputShapes,!0);const e=(Array.isArray(t)?t[0]:t).shape[0];return this.predictLoop(t,e)}standardizeUserDataXY(t,e,s=!0,o){if(this.optimizer_==null)throw new Sn("You must compile a model before training/testing. Use LayersModel.compile(modelCompileArgs).");const r=[];for(let i=0;i<this.feedOutputShapes.length;++i){const a=this.feedOutputShapes[i];this.feedLossFns[i]===pc?r.push(a.slice(0,a.length-1).concat([1])):r.push(a)}if(t=zx(t,this.feedInputNames,this.feedInputShapes,!1,"input"),e=zx(e,this.feedOutputNames,r,!1,"target"),zE(t,e),VE(e,this.feedLossFns,this.feedOutputShapes),this.stateful&&o!=null&&o>0&&t[0].shape[0]%o!==0)throw new M(`In a stateful network, you should only pass inputs with a number of samples that is divisible by the batch size ${o}. Found: ${t[0].shape[0]} sample(s).`);return[t,e]}standardizeUserData(t,e,s,o,r=!0,i){return J(this,null,function*(){const[a,l]=this.standardizeUserDataXY(t,e,r,i);if(s!=null)throw new Error("sample weight is not supported yet.");let c=null;if(o!=null){const u=Fx(o,this.outputNames);c=[];for(let h=0;h<u.length;++h)c.push(yield _x(l[h],null,u[h]))}return[a,l,c]})}testLoop(t,e,s,o=0,r){return U(()=>{const i=this.checkNumSamples(e,s,r,"steps"),a=[];if(o>0)throw new It("Verbose mode is not implemented yet.");if(r!=null)throw new It("steps mode in testLoop() is not implemented yet");{const l=Yd(i,s),c=rn(Vn(0,i));for(let u=0;u<l.length;++u){const h=l[u][0],d=l[u][1],p=ko(c,h,d-h),f=jd(e,p),m=t(f);if(u===0)for(let g=0;g<m.length;++g)a.push(zt(0));for(let g=0;g<m.length;++g){const x=m[g];a[g]=tt(a[g],L(d-h,x))}}for(let u=0;u<a.length;++u)a[u]=gt(a[u],i)}return a})}getDedupedMetricsNames(){const t=this.metricsNames,e=[];for(let s=0;s<t.length;++s){const o=t[s];let r=o;if(Gg(t,o)>1){const i=Gg(t.slice(0,s),o);r+=`_${i}`}e.push(r)}return e}makeTrainFunction(){return t=>{const e=[],s=t.slice(0,this.inputs.length),o=t.slice(this.inputs.length,this.inputs.length+this.outputs.length),r=t.slice(this.inputs.length+this.outputs.length,this.inputs.length+this.outputs.length*2),i=[],a=()=>{const h=[];for(let m=0;m<this.inputs.length;++m)h.push({key:this.inputs[m],value:s[m]});const d=new Us(h),p=Ki(this.outputs,d,{training:!0});let f;for(let m=0;m<this.lossFunctions.length;++m){const g=this.lossFunctions[m];let x=g(o[m],p[m]);r[m]!=null&&(x=DE(x,r[m]));const b=de(x);e.push(b),m===0?f=x:f=tt(f,x)}for(let m=0;m<this.metricsTensors.length;++m){let g;if(this.outputs.length>1&&m<this.outputs.length)g=e[m];else{const x=this.metricsTensors[m][0],b=this.metricsTensors[m][1];g=de(x(o[b],p[b]))}Yn(g),i.push(g)}return f=de(f),this.calculateLosses().forEach(m=>{f=tt(f,m)}),f},l=this.collectedTrainableWeights.map(h=>h.read());return[this.optimizer_.minimize(a,!0,l)].concat(i)}}makeTestFunction(){this.testFunction=t=>U(()=>{const e=[];let s;const o=t.slice(0,this.inputs.length),r=t.slice(this.inputs.length,this.inputs.length+this.outputs.length),i=[];for(let c=0;c<this.inputs.length;++c)i.push({key:this.inputs[c],value:o[c]});const a=new Us(i),l=Ki(this.outputs,a);for(let c=0;c<this.lossFunctions.length;++c){const u=this.lossFunctions[c],h=de(u(r[c],l[c]));c===0?s=h:s=tt(s,h),e.push(s)}for(let c=0;c<this.metricsTensors.length;++c){const u=this.metricsTensors[c][0],h=this.metricsTensors[c][1],d=de(u(r[h],l[h]));e.push(d)}return e})}fit(o,r){return J(this,arguments,function*(t,e,s={}){if(this.isTraining)throw new Error("Cannot start training because another fit() call is ongoing.");this.isTraining=!0;let i,a,l,c,u,h,d,p,f;try{const m=s.batchSize==null?32:s.batchSize;Kd(m);const x=yield this.standardizeUserData(t,e,s.sampleWeight,s.classWeight,!1,m);i=x[0],a=x[1],f=x[2];let b=!1,w;if(s.validationData!=null&&s.validationData.length>0){if(b=!0,s.validationData.length===2)u=s.validationData[0],h=s.validationData[1];else throw s.validationData.length===3?new It("validationData including sample weights is not supported yet."):new M(`When passing validation data, it must contain 2 (valX, valY) or 3 (valX, valY, valSampleWeight) items; ${s.validationData} is invalid.`);const E=yield this.standardizeUserData(u,h,null,null,!0,m);d=E[0],p=E[1],w=d.concat(p)}else if(s.validationSplit!=null&&s.validationSplit>0&&s.validationSplit<1){b=!0;const $=Math.floor(i[0].shape[0]*(1-s.validationSplit)),E=i[0].shape[0];d=Qi(i,$,E),l=i,i=Qi(i,0,$),p=Qi(a,$,E),c=a,a=Qi(a,0,$),w=d.concat(p)}else s.validationSteps!=null&&(b=!0);const y=i.concat(a).concat(f);this.checkTrainableWeightsConsistency();const C=this.makeTrainFunction(),I=this.getDedupedMetricsNames();let v,N;b?(this.makeTestFunction(),v=this.testFunction,N=I.slice().concat(I.map($=>"val_"+$))):(v=null,w=[],N=I.slice());const S=$x(s.callbacks,s.yieldEvery);return yield this.fitLoop(C,y,I,m,s.epochs,s.verbose,S,v,w,s.shuffle,N,s.initialEpoch,null,null)}finally{this.isTraining=!1,Hn(i,t),Hn(a,e),Hn(l,t),Hn(c,e),Hn(d,u),Hn(p,h),f!=null&&Nt(f)}})}fitLoop(t,e,s,o,r,i,a,l,c,u,h,d,p,f){return J(this,null,function*(){o==null&&(o=32),r==null&&(r=1),u==null&&(u=!0),d==null&&(d=0);let m=!1;if(l!=null&&c!=null&&(m=!0),f!=null&&(m=!0,p==null))throw new M("Can only use `validationSteps` when doing step-wise training, i.e., `stepsPerEpoch` must be set.");const g=this.checkNumSamples(e,o,p,"steps_per_epoch");let x;g!=null&&(x=Vn(0,g)),i==null&&(i=1);const{callbackList:b,history:w}=Ix(a,i,r,d,g,p,o,m,h);b.setModel(this),this.history=w,yield b.onTrainBegin(),this.stopTraining_=!1;for(let y=d;y<r;++y){yield b.onEpochBegin(y);const C={};if(p!=null)throw new It("stepsPerEpoch mode is not implemented yet.");{if(u==="batch")throw new It("batch shuffling is not implemneted yet");u&&nu(x);const I=rn(x),v=Yd(g,o);for(let N=0;N<v.length;++N){const S={};if(yield b.onBatchBegin(N,S),U(()=>{const k=v[N][0],$=v[N][1],E=ko(I,k,$-k);S.batch=N,S.size=$-k;const R=jd(e,E),A=t(R);for(let F=0;F<s.length;++F){const _=s[F],B=A[F];S[_]=B,Yn(B)}if(N===v.length-1&&m){const F=this.testLoop(l,c,o);for(let _=0;_<s.length;++_){const B=s[_],O=F[_];Yn(O),C["val_"+B]=O}}}),yield b.onBatchEnd(N,S),wx(S),this.stopTraining_)break}I.dispose()}if(yield b.onEpochEnd(y,C),this.stopTraining_)break}return yield b.onTrainEnd(),yield this.history.syncData(),this.history})}fitDataset(t,e){return J(this,null,function*(){return OE(this,t,e)})}trainOnBatch(t,e){return J(this,null,function*(){const s=yield this.standardizeUserData(t,e),o=s[0],r=s[1],a=this.makeTrainFunction()(o.concat(r)),l=[];for(const c of a){const u=yield c.data();l.push(u[0])}return Nt(a),Hn(s[0],t),Hn(s[1],e),Je(l)})}getNamedWeights(t){const e=[],s=t!=null&&t.trainableOnly,o=s?this.trainableWeights:this.weights,r=this.getWeights(s);for(let i=0;i<o.length;++i)s&&!o[i].trainable||e.push({name:o[i].originalName,tensor:r[i]});return e}set stopTraining(t){this.stopTraining_=t}get stopTraining(){return this.stopTraining_}get optimizer(){return this.optimizer_}set optimizer(t){this.optimizer_!==t&&(this.optimizer_=t,this.isOptimizerOwned=!1)}dispose(){const t=super.dispose();if(t.refCountAfterDispose===0&&this.optimizer!=null&&this.isOptimizerOwned){const e=Uf().numTensors;this.optimizer_.dispose(),t.numDisposedVariables+=e-Uf().numTensors}return t}getLossIdentifiers(){let t;if(typeof this.loss=="string")t=Cs(this.loss);else if(Array.isArray(this.loss)){for(const e of this.loss)if(typeof e!="string")throw new Error("Serialization of non-string loss is not supported.");t=this.loss.map(e=>Cs(e))}else{const e=Object.keys(this.loss);t={};const s=this.loss;for(const o of e)if(typeof s[o]=="string")t[o]=Cs(s[o]);else throw new Error("Serialization of non-string loss is not supported.")}return t}getMetricIdentifiers(){if(typeof this.metrics=="string"||typeof this.metrics=="function")return[Cs(xc(this.metrics))];if(Array.isArray(this.metrics))return this.metrics.map(t=>Cs(xc(t)));{const t={};for(const e in this.metrics)t[e]=Cs(xc(this.metrics[e]));return t}}getTrainingConfig(){return{loss:this.getLossIdentifiers(),metrics:this.getMetricIdentifiers(),optimizer_config:{class_name:this.optimizer.getClassName(),config:this.optimizer.getConfig()}}}loadTrainingConfig(t){if(t.weighted_metrics!=null)throw new Error("Loading weight_metrics is not supported yet.");if(t.loss_weights!=null)throw new Error("Loading loss_weights is not supported yet.");if(t.sample_weight_mode!=null)throw new Error("Loading sample_weight_mode is not supported yet.");const e=qd(t.optimizer_config),s=$s(e);let o;if(typeof t.loss=="string")o=$o(t.loss);else if(Array.isArray(t.loss))o=t.loss.map(i=>$o(i));else if(t.loss!=null){o={};for(const i in t.loss)o[i]=$o(t.loss[i])}let r;if(Array.isArray(t.metrics))r=t.metrics.map(i=>$o(i));else if(t.metrics!=null){r={};for(const i in t.metrics)r[i]=$o(t.metrics[i])}this.compile({loss:o,metrics:r,optimizer:s})}save(t,e){return J(this,null,function*(){if(typeof t=="string"){const c=mC(t);if(c.length===0)throw new M(`Cannot find any save handlers for URL '${t}'`);if(c.length>1)throw new M(`Found more than one (${c.length}) save handlers for URL '${t}'`);t=c[0]}if(t.save==null)throw new M("LayersModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");const s=yield Xf(this.getNamedWeights(e)),a={modelTopology:this.toJSON(null,!1),format:UE,generatedBy:`TensorFlow.js tfjs-layers v${Dx}`,convertedBy:null};if((e==null?!1:e.includeOptimizer)&&this.optimizer!=null){a.trainingConfig=this.getTrainingConfig();const c="optimizer",{data:u,specs:h}=yield Xf(yield this.optimizer.getWeights(),c);s.specs.push(...h),s.data=dC([s.data,u])}return this.userDefinedMetadata!=null&&(Rx(this.userDefinedMetadata,this.name,!0),a.userDefinedMetadata=this.userDefinedMetadata),a.weightData=s.data,a.weightSpecs=s.specs,t.save(a)})}setUserDefinedMetadata(t){Rx(t,this.name),this.userDefinedMetadata=t}getUserDefinedMetadata(){return this.userDefinedMetadata}}rr.className="Model",Z(rr);class Wx extends rr{}Wx.className="Functional",Z(Wx);class Ji extends rr{constructor(t){if(super({inputs:[],outputs:[]}),t=t||{},this.trainable=!0,this.built=!1,this.name=t.name!=null?t.name:sc("sequential_"),t.layers!=null)for(const e of t.layers)this.add(e)}checkShape(t){if(t.inboundNodes[0].outputTensors[0].shape.some(s=>s<0))throw new M(`Negative dimension size caused by adding layer ${t.name} with input shape [${t.inboundNodes[0].inputTensors[0].shape}]`)}add(t){const e=t instanceof Ji||t instanceof rr;let s;if(e){if(s=t,s.outputs.length!==1)throw new M("All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.");if(s.inputs.length!==1)throw new M("All layers in a Sequential model should have a single input tensor. For multi-input layers, use the functional API.")}if(this.outputs.length===0){if(t.inboundNodes.length===0){if(t.batchInputShape==null)throw new M("The first layer in a Sequential model must get an `inputShape` or `batchInputShape` argument.");const o=qT({batchShape:t.batchInputShape,dtype:t.dtype,name:t.name+"_input"});t.apply(o)}if(e)this.outputs=s.outputs,this.inputs=s.inputs;else{if(t.inboundNodes.length!==1)throw new M(`A layer added to a Sequential model must not already be connected somewhere else. LayersModel received layer ${t.name} which has ${t.inboundNodes.length} pre-existing inbound connections.`);if(t.inboundNodes[0].outputTensors.length!==1)throw new M("All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.");this.checkShape(t),this.outputs=[t.inboundNodes[0].outputTensors[0]],this.inputs=dx(this.outputs[0])}this.inboundNodes=[],new lc({outboundLayer:this,inboundLayers:[],nodeIndices:[],tensorIndices:[],inputTensors:this.inputs,outputTensors:this.outputs,inputMasks:Co(null,this.inputs.length),outputMasks:[null],inputShapes:this.inputs.map(o=>o.shape),outputShapes:this.outputs[0].shape})}else{const o=t.apply(this.outputs[0]);if(Array.isArray(o))throw new TypeError("All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.");this.checkShape(t),this.outputs=[o],this.inboundNodes[0].outputTensors=this.outputs,this.inboundNodes[0].outputShapes=[this.outputs[0].shape]}this.layers.push(t),this.built=!1}pop(){if(this.layers.length===0)throw new TypeError("There are no layers in the model.");if(this.layers.pop(),this.layers.length===0)this.outputs=[],this.inboundNodes=[],this.outboundNodes=[];else{const t=this.layers.length-1;this.layers[t].outboundNodes=[],this.outputs=[this.layers[t].output],this.inboundNodes[0].outputTensors=this.outputs,this.inboundNodes[0].outputShapes=[this.outputs[0].shape]}}call(t,e){return this.model==null&&this.build(),this.model.call(t,e)}build(t){if(Lt(t),this.inputs.length===0||this.outputs.length===0)throw new TypeError("Sequential model cannot be built: model is empty. Add some layers first.");this.model=new rr({inputs:this.inputs,outputs:this.outputs[0],name:this.name+"_model"}),this.model.trainable=this.trainable,this.supportsMasking=this.model.supportsMasking,this.inputLayers=this.model.inputLayers,this.inputLayersNodeIndices=this.model.inputLayersNodeIndices,this.inputLayersTensorIndices=this.model.inputLayersTensorIndices,this.outputLayers=this.model.outputLayers,this.outputLayersNodeIndices=this.model.outputLayersNodeIndices,this.outputLayersTensorIndices=this.model.outputLayersTensorIndices,this.nodesByDepth=this.model.nodesByDepth,this.containerNodes=this.model.containerNodes,this.outputNames=this.model.outputNames,this.inputNames=this.model.inputNames,this.built=!0}countParams(){return this.built||this.build(),super.countParams()}summary(t,e,s=console.log){this.built||this.build(),super.summary(t,e,s)}setWeights(t){this.model==null&&this.build(),this.model.setWeights(t)}evaluate(t,e,s={}){if(!this.built)throw new Sn("The model needs to be compiled before being used.");return this.model.evaluate(t,e,s)}evaluateDataset(t,e){return J(this,null,function*(){if(!this.built)throw new Sn("The model needs to be compiled before being used.");return this.model.evaluateDataset(t,e)})}predict(t,e={}){return this.model==null&&this.build(),this.model.predict(t,e)}predictOnBatch(t){return this.model==null&&this.build(),this.model.predictOnBatch(t)}compile(t){this.build(),this.model.compile(t),this.optimizer_=this.model.optimizer,this.isOptimizerOwned=this.model.isOptimizerOwned,this.loss=this.model.loss,this.metrics=this.model.metrics,this.metricsTensors=this.model.metricsTensors,this.metricsNames=this.model.metricsNames}get optimizer(){return this.model==null?void 0:this.model.optimizer}set optimizer(t){this.model.optimizer=t}fit(o,r){return J(this,arguments,function*(t,e,s={}){if(!this.built)throw new Sn("The model needs to be compiled before being used.");return this.model.fit(t,e,s)})}fitDataset(t,e){return J(this,null,function*(){if(!this.built)throw new Sn("The model needs to be compiled before being used.");return this.model.fitDataset(t,e)})}trainOnBatch(t,e){return J(this,null,function*(){return this.model.trainOnBatch(t,e)})}static fromConfig(t,e,s={},o=!1){let r,i={};if(e instanceof Array){if(e[0].className==null||e[0].className==="Merge")throw new M("Legacy serialization format not supported yet.");r=e}else T(e.layers!=null,()=>"When the config data for a Sequential model is not an Array, it must be an Object that contains the 'layers' field."),r=e.layers,delete e.layers,i=e;const a=new t(i);if(!(a instanceof Ji))throw new It(`Sequential.fromConfig called on non-Sequential input: ${a}`);for(const l of r){const u=$s(l,void 0,o);o&&u.setFastWeightInitDuringBuild(!0),a.add(u)}return a}set stopTraining(t){if(this.model==null)throw new M("Cannot set the stopTraining property of a sequential model before it is compiled.");this.model.stopTraining=t}get stopTraining(){if(this.model==null)throw new M("Cannot get the stopTraining property of a sequential model before it is compiled.");return this.model.stopTraining}getConfig(){const t=[];for(const e of this.layers){const s={};s.className=e.getClassName(),s.config=e.getConfig(),t.push(s)}return{name:this.name,layers:t}}}Ji.className="Sequential",Z(Ji);let Pe=class extends er{getConfig(){return{}}};class Ux extends Pe{apply(t,e=1){return RT(t,e)}}Ux.className="elu",Z(Ux);class Gx extends Pe{apply(t){return Fm(t)}}Gx.className="selu",Z(Gx);class Hx extends Pe{apply(t){return go(t)}}Hx.className="relu",Z(Hx);class qx extends Pe{apply(t){return U(()=>_i(6,go(t)))}}qx.className="relu6",Z(qx);class Xx extends Pe{apply(t){return t}}Xx.className="linear",Z(Xx);class Kx extends Pe{apply(t){return Yo(t)}}Kx.className="sigmoid",Z(Kx);class jx extends Pe{apply(t){return DT(t)}}jx.className="hardSigmoid",Z(jx);class Yx extends Pe{apply(t){return Fi(t)}}Yx.className="softplus",Z(Yx);class Zx extends Pe{apply(t){return AT(t)}}Zx.className="softsign",Z(Zx);class Qx extends Pe{apply(t){return _l(t)}}Qx.className="tanh",Z(Qx);let Qd=class extends Pe{apply(t,e=-1){return Bh(t,e)}};Qd.className="softmax",Z(Qd);class Jx extends Pe{apply(t,e=-1){return xm(t,e)}}Jx.className="logSoftmax",Z(Jx);class tb extends Pe{apply(t){return U(()=>U(()=>{const e=Math.sqrt(2),s=L(.5,tt(1,dm(gt(t,e))));return L(t,s)}))}}tb.className="gelu",Z(tb);class eb extends Pe{apply(t){return U(()=>L(.5,L(t,tt(1,_l(L(Le(gt(2,Math.PI)),tt(t,L(.044715,fo(t,3)))))))))}}eb.className="gelu_new",Z(eb);class nb extends Pe{apply(t){return U(()=>L(t,_l(Fi(t))))}}nb.className="mish",Z(nb);class sb extends Pe{apply(t,e=1){return U(()=>L(Yo(L(t,e)),t))}}sb.className="swish",Z(sb);function Gs(n){return n.getClassName()}function Jd(n,t={}){return Wi(n,kn.getMap().classNameMap,t,"activation")}function Hs(n){if(n==null){const t={};return t.className="linear",t.config={},Jd(t)}if(typeof n=="string"){const t={};return t.className=n,t.config={},Jd(t)}else return n instanceof Pe?n:Jd(n)}function GE(n){if(n!=null&&typeof n!="object")throw new Error(`Argument to L1L2 regularizer's constructor is expected to be an object, but received: ${n}`)}class ob extends er{}class rb extends ob{constructor(t){super(),GE(t),this.l1=t==null||t.l1==null?.01:t.l1,this.l2=t==null||t.l2==null?.01:t.l2,this.hasL1=this.l1!==0,this.hasL2=this.l2!==0}apply(t){return U(()=>{let e=Ie([1]);return this.hasL1&&(e=tt(e,mt(L(this.l1,We(t))))),this.hasL2&&(e=tt(e,mt(L(this.l2,Hi(t))))),z(e,[])})}getConfig(){return{l1:this.l1,l2:this.l2}}static fromConfig(t,e){return new t({l1:e.l1,l2:e.l2})}}rb.className="L1L2",Z(rb);const ib={l1l2:"L1L2"};function Gt(n){return Id(n)}function ab(n,t={}){return Wi(n,kn.getMap().classNameMap,t,"regularizer")}function Qt(n){if(n==null)return null;if(typeof n=="string"){const e={className:n in ib?ib[n]:n,config:{}};return ab(e)}else return n instanceof ob?n:ab(n)}class lb extends St{constructor(t){super(t==null?{}:t),this.supportsMasking=!0,t!=null&&(this.maxValue=t.maxValue)}call(t,e){t=yt(t);let s=go(t);return this.maxValue!=null&&(s=mn(s,0,this.maxValue)),s}computeOutputShape(t){return t}getConfig(){const t={maxValue:this.maxValue},e=super.getConfig();return Object.assign(t,e),t}}lb.className="ReLU",Z(lb);class cb extends St{constructor(t){super(t==null?{}:t),this.DEFAULT_ALPHA=.3,t==null&&(t={}),this.alpha=t.alpha==null?this.DEFAULT_ALPHA:t.alpha}call(t,e){const s=yt(t);return Th(s,this.alpha)}computeOutputShape(t){return t}getConfig(){const t={alpha:this.alpha},e=super.getConfig();return Object.assign(t,e),t}}cb.className="LeakyReLU",Z(cb);class ub extends St{constructor(t){if(super(t==null?{}:t),this.DEFAULT_ALPHA_INITIALIZER="zeros",t==null&&(t={}),this.supportsMasking=!0,this.alphaInitializer=Zt(t.alphaInitializer||this.DEFAULT_ALPHA_INITIALIZER),this.alphaRegularizer=Qt(t.alphaRegularizer),this.alphaConstraint=be(t.alphaConstraint),t.sharedAxes==null)this.sharedAxes=null;else if(Array.isArray(t.sharedAxes))this.sharedAxes=t.sharedAxes;else if(typeof t.sharedAxes=="number")this.sharedAxes=[t.sharedAxes];else throw new M(`Expected sharedAxes to be a number or an array of numbers, but got ${t.sharedAxes}`)}build(t){t=Lt(t);const e=t.slice(1);if(this.sharedAxes!=null)for(const o of this.sharedAxes)e[o-1]=1;this.alpha=this.addWeight("alpha",e,"float32",this.alphaInitializer,this.alphaRegularizer,!0,this.alphaConstraint);const s={};if(this.sharedAxes!=null)for(let o=1;o<t.length;++o)s[o]=t[o];this.inputSpec=[new ge({ndim:t.length,axes:s})],this.built=!0}call(t,e){return t=yt(t),_h(t,this.alpha.read())}getConfig(){const t={alphaInitializer:te(this.alphaInitializer),alphaRegularizer:Gt(this.alphaRegularizer),alphaConstraint:xe(this.alphaConstraint),sharedAxes:this.sharedAxes},e=super.getConfig();return Object.assign(t,e),t}}ub.className="PReLU",Z(ub);let hb=class extends St{constructor(t){if(super(t==null?{}:t),this.DEFAULT_ALPHA=1,t==null&&(t={}),t.alpha!=null&&t.alpha!==this.DEFAULT_ALPHA)throw new It(`Non-default alpha value (${t.alpha}) is not supported by the ELU layer yet.`);this.alpha=t.alpha==null?this.DEFAULT_ALPHA:t.alpha}call(t,e){const s=yt(t);return Ll(s)}computeOutputShape(t){return t}getConfig(){const t={alpha:this.alpha},e=super.getConfig();return Object.assign(t,e),t}};hb.className="ELU",Z(hb);class db extends St{constructor(t){super(t==null?{}:t),this.DEFAULT_THETA=1,t==null&&(t={}),this.theta=t.theta==null?this.DEFAULT_THETA:t.theta}call(t,e){const s=yt(t);return L(s,at(gn(s,this.theta),"float32"))}computeOutputShape(t){return t}getConfig(){const t={theta:this.theta},e=super.getConfig();return Object.assign(t,e),t}}db.className="ThresholdedReLU",Z(db);class pb extends St{constructor(t){super(t==null?{}:t),this.DEFAULT_AXIS=1,t==null&&(t={}),this.softmax=new Qd().apply,this.axis=t.axis==null?this.DEFAULT_AXIS:t.axis}call(t,e){return U(()=>{let s=yt(t);const o=e.mask;if(o!=null){const r=L(bt(Ps(s.shape),at(o,s.dtype)),zt(-1e9));s=tt(s,r)}return this.axis instanceof Array?this.axis.length>1?Jn(bt(s,bm(s,this.axis,!0))):this.softmax(s,this.axis[0]):this.softmax(s,this.axis)})}computeOutputShape(t){return t}getConfig(){const t={axis:this.axis},e=super.getConfig();return Object.assign(t,e),t}}pb.className="Softmax",Z(pb);function ir(n,t,e){if(typeof n=="number")return Co(n,t);if(n.length!==t)throw new M(`The ${e} argument must be an integer or tuple of ${t} integers. Received: ${n.length} elements.`);for(let s=0;s<t;++s){const o=n[s];if(!ST(o))throw new M(`The ${e} argument must be an integer or tuple of ${t} integers. Received: ${JSON.stringify(n)} including a non-integer number ${o}`)}return n}function qn(n,t,e,s,o=1){if(n==null)return n;const r=t+(t-1)*(o-1);let i;return e==="same"?i=n:i=n-r+1,Math.floor((i+s-1)/s)}function as(n,t,e,s){if(n==null)return null;if(s==="valid")n=n*t+Ws([e-t,0]);else if(s==="same")n=n*t;else throw new M(`Unsupport padding mode: ${s}.`);return n}function tp(n,t){return U(()=>(le(t),t==="channelsFirst"?Ft(n,[0,2,3,1]):n))}function fb(n,t){return U(()=>(le(t),t==="channelsFirst"?Ft(n,[0,2,3,4,1]):n))}function HE(n,t,e,s=1,o="valid",r,i=1){return U(()=>{if(r==null&&(r=Wn()),le(r),n.shape.length!==3)throw new M(`The input of a conv1dWithBias operation should be 3, but is ${n.shape.length} instead.`);if(t.shape.length!==3)throw new M(`The kernel for a conv1dWithBias operation should be 3, but is ${t.shape.length} instead`);if(e!=null&&e.shape.length!==1)throw new M(`The bias for a conv1dWithBias operation should be 1, but is ${e.shape.length} instead`);if(r==="channelsFirst"&&(n=Ft(n,[0,2,1])),o==="causal")throw new It("The support for CAUSAL padding mode in conv1dWithBias is not implemented yet.");let a=im(n,t,s,o==="same"?"same":"valid","NWC",i);return e!=null&&(a=Un(a,e)),a})}function mb(n,t,e,s=[1,1],o="valid",r,i,a=null){return U(()=>{if(r==null&&(r=Wn()),le(r),n.rank!==3&&n.rank!==4)throw new M(`conv2dWithBiasActivation expects input to be of rank 3 or 4, but received ${n.rank}.`);if(t.rank!==3&&t.rank!==4)throw new M(`conv2dWithBiasActivation expects kernel to be of rank 3 or 4, but received ${n.rank}.`);let l=tp(n,r);if(o==="causal")throw new It("The support for CAUSAL padding mode in conv1dWithBias is not implemented yet.");return l=qk({x:l,filter:t,strides:s,pad:o==="same"?"same":"valid",dilations:i,dataFormat:"NHWC",bias:e,activation:a}),r==="channelsFirst"&&(l=Ft(l,[0,3,1,2])),l})}function qE(n,t,e,s=[1,1,1],o="valid",r,i){return U(()=>{if(r==null&&(r=Wn()),le(r),n.rank!==4&&n.rank!==5)throw new M(`conv3dWithBias expects input to be of rank 4 or 5, but received ${n.rank}.`);if(t.rank!==4&&t.rank!==5)throw new M(`conv3dWithBias expects kernel to be of rank 4 or 5, but received ${n.rank}.`);let a=fb(n,r);if(o==="causal")throw new It("The support for CAUSAL padding mode in conv3dWithBias is not implemented yet.");return a=G$(a,t,s,o==="same"?"same":"valid","NDHWC",i),e!=null&&(a=Un(a,e)),r==="channelsFirst"&&(a=Ft(a,[0,4,1,2,3])),a})}class yc extends St{constructor(t,e){if(super(e),this.bias=null,this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_BIAS_INITIALIZER="zeros",yc.verifyArgs(e),this.rank=t,ve(this.rank,"rank"),this.rank!==1&&this.rank!==2&&this.rank!==3)throw new It(`Convolution layer for rank other than 1, 2, or 3 (${this.rank}) is not implemented yet.`);if(this.kernelSize=ir(e.kernelSize,t,"kernelSize"),this.strides=ir(e.strides==null?1:e.strides,t,"strides"),this.padding=e.padding==null?"valid":e.padding,bn(this.padding),this.dataFormat=e.dataFormat==null?"channelsLast":e.dataFormat,le(this.dataFormat),this.activation=Hs(e.activation),this.useBias=e.useBias==null?!0:e.useBias,this.biasInitializer=Zt(e.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.biasConstraint=be(e.biasConstraint),this.biasRegularizer=Qt(e.biasRegularizer),this.activityRegularizer=Qt(e.activityRegularizer),this.dilationRate=ir(e.dilationRate==null?1:e.dilationRate,t,"dilationRate"),this.rank===1&&Array.isArray(this.dilationRate)&&this.dilationRate.length!==1)throw new M(`dilationRate must be a number or an array of a single number for 1D convolution, but received ${JSON.stringify(this.dilationRate)}`);if(this.rank===2){if(typeof this.dilationRate=="number")this.dilationRate=[this.dilationRate,this.dilationRate];else if(this.dilationRate.length!==2)throw new M(`dilationRate must be a number or array of two numbers for 2D convolution, but received ${JSON.stringify(this.dilationRate)}`)}else if(this.rank===3){if(typeof this.dilationRate=="number")this.dilationRate=[this.dilationRate,this.dilationRate,this.dilationRate];else if(this.dilationRate.length!==3)throw new M(`dilationRate must be a number or array of three numbers for 3D convolution, but received ${JSON.stringify(this.dilationRate)}`)}}static verifyArgs(t){if(ss("kernelSize"in t,"required key 'kernelSize' not in config"),typeof t.kernelSize!="number"&&!kd(t.kernelSize,"number",1,3))throw new M(`BaseConv expects config.kernelSize to be number or number[] with length 1, 2, or 3, but received ${JSON.stringify(t.kernelSize)}.`)}getConfig(){const t={kernelSize:this.kernelSize,strides:this.strides,padding:this.padding,dataFormat:this.dataFormat,dilationRate:this.dilationRate,activation:Gs(this.activation),useBias:this.useBias,biasInitializer:te(this.biasInitializer),biasRegularizer:Gt(this.biasRegularizer),activityRegularizer:Gt(this.activityRegularizer),biasConstraint:xe(this.biasConstraint)},e=super.getConfig();return Object.assign(t,e),t}}class ar extends yc{constructor(t,e){super(t,e),this.kernel=null,ar.verifyArgs(e),this.filters=e.filters,ve(this.filters,"filters"),this.kernelInitializer=Zt(e.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.kernelConstraint=be(e.kernelConstraint),this.kernelRegularizer=Qt(e.kernelRegularizer)}build(t){t=Lt(t);const e=this.dataFormat==="channelsFirst"?1:t.length-1;if(t[e]==null)throw new M(`The channel dimension of the input should be defined. Found ${t[e]}`);const s=t[e],o=this.kernelSize.concat([s,this.filters]);this.kernel=this.addWeight("kernel",o,null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight("bias",[this.filters],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint)),this.inputSpec=[{ndim:this.rank+2,axes:{[e]:s}}],this.built=!0}call(t,e){return U(()=>{t=yt(t);let s;const o=this.bias==null?null:this.bias.read(),r=qg(this.activation.getClassName());if(r!=null&&this.rank===2)s=mb(t,this.kernel.read(),o,this.strides,this.padding,this.dataFormat,this.dilationRate,r);else{if(this.rank===1)s=HE(t,this.kernel.read(),o,this.strides[0],this.padding,this.dataFormat,this.dilationRate[0]);else if(this.rank===2)s=mb(t,this.kernel.read(),o,this.strides,this.padding,this.dataFormat,this.dilationRate);else if(this.rank===3)s=qE(t,this.kernel.read(),o,this.strides,this.padding,this.dataFormat,this.dilationRate);else throw new It("convolutions greater than 3D are not implemented yet.");this.activation!=null&&(s=this.activation.apply(s))}return s})}computeOutputShape(t){t=Lt(t);const e=[],s=this.dataFormat==="channelsLast"?t.slice(1,t.length-1):t.slice(2);for(let r=0;r<s.length;++r){const i=qn(s[r],this.kernelSize[r],this.padding,this.strides[r],typeof this.dilationRate=="number"?this.dilationRate:this.dilationRate[r]);e.push(i)}let o=[t[0]];return this.dataFormat==="channelsLast"?(o=o.concat(e),o.push(this.filters)):(o.push(this.filters),o=o.concat(e)),o}getConfig(){const t={filters:this.filters,kernelInitializer:te(this.kernelInitializer),kernelRegularizer:Gt(this.kernelRegularizer),kernelConstraint:xe(this.kernelConstraint)},e=super.getConfig();return Object.assign(t,e),t}static verifyArgs(t){if(!("filters"in t)||typeof t.filters!="number"||t.filters<1)throw new M(`Convolution layer expected config.filters to be a 'number' > 0 but got ${JSON.stringify(t.filters)}`)}}class ta extends ar{constructor(t){super(2,t),ta.verifyArgs(t)}getConfig(){const t=super.getConfig();return delete t.rank,t}static verifyArgs(t){if(typeof t.kernelSize!="number"&&!kd(t.kernelSize,"number",1,2))throw new M(`Conv2D expects config.kernelSize to be number or number[] with length 1 or 2, but received ${JSON.stringify(t.kernelSize)}.`)}}ta.className="Conv2D",Z(ta);class ea extends ar{constructor(t){super(3,t),ea.verifyArgs(t)}getConfig(){const t=super.getConfig();return delete t.rank,t}static verifyArgs(t){if(typeof t.kernelSize!="number"&&!(Array.isArray(t.kernelSize)&&(t.kernelSize.length===1||t.kernelSize.length===3)))throw new M(`Conv3D expects config.kernelSize to be number or [number, number, number], but received ${JSON.stringify(t.kernelSize)}.`)}}ea.className="Conv3D",Z(ea);class gb extends ta{constructor(t){if(super(t),this.inputSpec=[new ge({ndim:4})],this.padding!=="same"&&this.padding!=="valid")throw new M(`Conv2DTranspose currently supports only padding modes 'same' and 'valid', but received padding mode ${this.padding}`)}build(t){if(t=Lt(t),t.length!==4)throw new M("Input should have rank 4; Received input shape: "+JSON.stringify(t));const e=this.dataFormat==="channelsFirst"?1:t.length-1;if(t[e]==null)throw new M("The channel dimension of the inputs should be defined. Found `None`.");const s=t[e],o=this.kernelSize.concat([this.filters,s]);this.kernel=this.addWeight("kernel",o,"float32",this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight("bias",[this.filters],"float32",this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint)),this.inputSpec=[new ge({ndim:4,axes:{[e]:s}})],this.built=!0}call(t,e){return U(()=>{let s=yt(t);if(s.shape.length!==4)throw new M(`Conv2DTranspose.call() expects input tensor to be rank-4, but received a tensor of rank-${s.shape.length}`);const o=s.shape,r=o[0];let i,a;this.dataFormat==="channelsFirst"?(i=2,a=3):(i=1,a=2);const l=o[i],c=o[a],u=this.kernelSize[0],h=this.kernelSize[1],d=this.strides[0],p=this.strides[1],f=as(l,d,u,this.padding),m=as(c,p,h,this.padding),g=[r,f,m,this.filters];this.dataFormat!=="channelsLast"&&(s=Ft(s,[0,2,3,1]));let x=am(s,this.kernel.read(),g,this.strides,this.padding);return this.dataFormat!=="channelsLast"&&(x=Ft(x,[0,3,1,2])),this.bias!=null&&(x=Un(x,this.bias.read(),this.dataFormat)),this.activation!=null&&(x=this.activation.apply(x)),x})}computeOutputShape(t){t=Lt(t);const e=t.slice();let s,o,r;this.dataFormat==="channelsFirst"?(s=1,o=2,r=3):(s=3,o=1,r=2);const i=this.kernelSize[0],a=this.kernelSize[1],l=this.strides[0],c=this.strides[1];return e[s]=this.filters,e[o]=as(e[o],l,i,this.padding),e[r]=as(e[r],c,a,this.padding),e}getConfig(){const t=super.getConfig();return delete t.dilationRate,t}}gb.className="Conv2DTranspose",Z(gb);class xb extends ea{constructor(t){if(super(t),this.inputSpec=[new ge({ndim:5})],this.padding!=="same"&&this.padding!=="valid")throw new M(`Conv3DTranspose currently supports only padding modes 'same' and 'valid', but received padding mode ${this.padding}`)}build(t){if(t=Lt(t),t.length!==5)throw new M("Input should have rank 5; Received input shape: "+JSON.stringify(t));const e=this.dataFormat==="channelsFirst"?1:t.length-1;if(t[e]==null)throw new M("The channel dimension of the inputs should be defined. Found `None`.");const s=t[e],o=this.kernelSize.concat([this.filters,s]);this.kernel=this.addWeight("kernel",o,"float32",this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight("bias",[this.filters],"float32",this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint)),this.inputSpec=[new ge({ndim:5,axes:{[e]:s}})],this.built=!0}call(t,e){return U(()=>{let s=yt(t);if(s.shape.length!==5)throw new M(`Conv3DTranspose.call() expects input tensor to be rank-4, but received a tensor of rank-${s.shape.length}`);const o=s.shape,r=o[0];let i,a,l;this.dataFormat==="channelsFirst"?(l=2,i=3,a=4):(l=1,i=2,a=3);const c=o[l],u=o[i],h=o[a],d=this.kernelSize[0],p=this.kernelSize[1],f=this.kernelSize[2],m=this.strides[0],g=this.strides[1],x=this.strides[2],b=as(c,m,d,this.padding),w=as(u,g,p,this.padding),y=as(h,x,f,this.padding),C=[r,b,w,y,this.filters];this.dataFormat!=="channelsLast"&&(s=Ft(s,[0,2,3,4,1]));let I=X$(s,this.kernel.read(),C,this.strides,this.padding);return this.dataFormat!=="channelsLast"&&(I=Ft(I,[0,4,1,2,3])),this.bias!==null&&(I=Un(I,this.bias.read(),this.dataFormat)),this.activation!==null&&(I=this.activation.apply(I)),I})}computeOutputShape(t){t=Lt(t);const e=t.slice();let s,o,r,i;this.dataFormat==="channelsFirst"?(s=1,o=2,r=3,i=4):(s=4,o=1,r=2,i=3);const a=this.kernelSize[0],l=this.kernelSize[1],c=this.kernelSize[2],u=this.strides[0],h=this.strides[1],d=this.strides[2];return e[s]=this.filters,e[o]=as(e[o],u,a,this.padding),e[r]=as(e[r],h,l,this.padding),e[i]=as(e[i],d,c,this.padding),e}getConfig(){const t=super.getConfig();return delete t.dilationRate,t}}xb.className="Conv3DTranspose",Z(xb);class bb extends ar{constructor(t,e){if(super(t,e),this.DEFAULT_DEPTHWISE_INITIALIZER="glorotUniform",this.DEFAULT_POINTWISE_INITIALIZER="glorotUniform",this.depthwiseKernel=null,this.pointwiseKernel=null,e.filters==null)throw new M("The `filters` configuration field is required by SeparableConv, but is unspecified.");if(e.kernelInitializer!=null||e.kernelRegularizer!=null||e.kernelConstraint!=null)throw new M("Fields kernelInitializer, kernelRegularizer and kernelConstraint are invalid for SeparableConv2D. Use depthwiseInitializer, depthwiseRegularizer, depthwiseConstraint, pointwiseInitializer, pointwiseRegularizer and pointwiseConstraint instead.");if(e.padding!=null&&e.padding!=="same"&&e.padding!=="valid")throw new M(`SeparableConv${this.rank}D supports only padding modes: 'same' and 'valid', but received ${JSON.stringify(e.padding)}`);this.depthMultiplier=e.depthMultiplier==null?1:e.depthMultiplier,this.depthwiseInitializer=Zt(e.depthwiseInitializer||this.DEFAULT_DEPTHWISE_INITIALIZER),this.depthwiseRegularizer=Qt(e.depthwiseRegularizer),this.depthwiseConstraint=be(e.depthwiseConstraint),this.pointwiseInitializer=Zt(e.depthwiseInitializer||this.DEFAULT_POINTWISE_INITIALIZER),this.pointwiseRegularizer=Qt(e.pointwiseRegularizer),this.pointwiseConstraint=be(e.pointwiseConstraint)}build(t){if(t=Lt(t),t.length<this.rank+2)throw new M(`Inputs to SeparableConv${this.rank}D should have rank ${this.rank+2}, but received input shape: ${JSON.stringify(t)}`);const e=this.dataFormat==="channelsFirst"?1:t.length-1;if(t[e]==null||t[e]<0)throw new M(`The channel dimension of the inputs should be defined, but found ${JSON.stringify(t[e])}`);const s=t[e],o=this.kernelSize.concat([s,this.depthMultiplier]),r=[];for(let a=0;a<this.rank;++a)r.push(1);r.push(s*this.depthMultiplier,this.filters);const i=!0;this.depthwiseKernel=this.addWeight("depthwise_kernel",o,"float32",this.depthwiseInitializer,this.depthwiseRegularizer,i,this.depthwiseConstraint),this.pointwiseKernel=this.addWeight("pointwise_kernel",r,"float32",this.pointwiseInitializer,this.pointwiseRegularizer,i,this.pointwiseConstraint),this.useBias?this.bias=this.addWeight("bias",[this.filters],"float32",this.biasInitializer,this.biasRegularizer,i,this.biasConstraint):this.bias=null,this.inputSpec=[new ge({ndim:this.rank+2,axes:{[e]:s}})],this.built=!0}call(t,e){return U(()=>{t=yt(t);let s;if(this.rank===1)throw new It("1D separable convolution is not implemented yet.");return this.rank===2&&(this.dataFormat==="channelsFirst"&&(t=Ft(t,[0,2,3,1])),s=_m(t,this.depthwiseKernel.read(),this.pointwiseKernel.read(),this.strides,this.padding,this.dilationRate,"NHWC")),this.useBias&&(s=Un(s,this.bias.read(),this.dataFormat)),this.activation!=null&&(s=this.activation.apply(s)),this.dataFormat==="channelsFirst"&&(s=Ft(s,[0,3,1,2])),s})}getConfig(){const t=super.getConfig();return delete t.rank,delete t.kernelInitializer,delete t.kernelRegularizer,delete t.kernelConstraint,t.depthwiseInitializer=te(this.depthwiseInitializer),t.pointwiseInitializer=te(this.pointwiseInitializer),t.depthwiseRegularizer=Gt(this.depthwiseRegularizer),t.pointwiseRegularizer=Gt(this.pointwiseRegularizer),t.depthwiseConstraint=xe(this.depthwiseConstraint),t.pointwiseConstraint=xe(this.pointwiseConstraint),t}}bb.className="SeparableConv";class yb extends bb{constructor(t){super(2,t)}}yb.className="SeparableConv2D",Z(yb);class wc extends ar{constructor(t){super(1,t),wc.verifyArgs(t),this.inputSpec=[{ndim:3}]}getConfig(){const t=super.getConfig();return delete t.rank,delete t.dataFormat,t}static verifyArgs(t){if(typeof t.kernelSize!="number"&&!kd(t.kernelSize,"number",1,1))throw new M(`Conv1D expects config.kernelSize to be number or number[] with length 1, but received ${JSON.stringify(t.kernelSize)}.`)}}wc.className="Conv1D",Z(wc);class wb extends St{constructor(t){super(t),typeof t.cropping=="number"?this.cropping=[[t.cropping,t.cropping],[t.cropping,t.cropping]]:typeof t.cropping[0]=="number"?this.cropping=[[t.cropping[0],t.cropping[0]],[t.cropping[1],t.cropping[1]]]:this.cropping=t.cropping,this.dataFormat=t.dataFormat===void 0?"channelsLast":t.dataFormat,this.inputSpec=[{ndim:4}]}computeOutputShape(t){return this.dataFormat==="channelsFirst"?[t[0],t[1],t[2]-this.cropping[0][0]-this.cropping[0][1],t[3]-this.cropping[1][0]-this.cropping[1][1]]:[t[0],t[1]-this.cropping[0][0]-this.cropping[0][1],t[2]-this.cropping[1][0]-this.cropping[1][1],t[3]]}call(t,e){return U(()=>{if(t=yt(t),this.dataFormat==="channelsLast"){const s=oc(t,this.cropping[0][0],t.shape[1]-this.cropping[0][0]-this.cropping[0][1],2);return oc(s,this.cropping[1][0],t.shape[2]-this.cropping[1][1]-this.cropping[1][0],3)}else{const s=oc(t,this.cropping[0][0],t.shape[2]-this.cropping[0][0]-this.cropping[0][1],3);return oc(s,this.cropping[1][0],t.shape[3]-this.cropping[1][1]-this.cropping[1][0],4)}})}getConfig(){const t={cropping:this.cropping,dataFormat:this.dataFormat},e=super.getConfig();return Object.assign(t,e),t}}wb.className="Cropping2D",Z(wb);class Cb extends St{constructor(t){super(t),this.DEFAULT_SIZE=[2,2],this.inputSpec=[{ndim:4}],this.size=t.size==null?this.DEFAULT_SIZE:t.size,this.dataFormat=t.dataFormat==null?"channelsLast":t.dataFormat,le(this.dataFormat),this.interpolation=t.interpolation==null?"nearest":t.interpolation,IT(this.interpolation)}computeOutputShape(t){if(this.dataFormat==="channelsFirst"){const e=t[2]==null?null:this.size[0]*t[2],s=t[3]==null?null:this.size[1]*t[3];return[t[0],t[1],e,s]}else{const e=t[1]==null?null:this.size[0]*t[1],s=t[2]==null?null:this.size[1]*t[2];return[t[0],e,s,t[3]]}}call(t,e){return U(()=>{let s=yt(t);const o=s.shape;if(this.dataFormat==="channelsFirst"){s=Ft(s,[0,2,3,1]);const r=this.size[0]*o[2],i=this.size[1]*o[3],a=this.interpolation==="nearest"?bs.resizeNearestNeighbor(s,[r,i]):bs.resizeBilinear(s,[r,i]);return Ft(a,[0,3,1,2])}else{const r=this.size[0]*o[1],i=this.size[1]*o[2];return this.interpolation==="nearest"?bs.resizeNearestNeighbor(s,[r,i]):bs.resizeBilinear(s,[r,i])}})}getConfig(){const t={size:this.size,dataFormat:this.dataFormat,interpolation:this.interpolation},e=super.getConfig();return Object.assign(t,e),t}}Cb.className="UpSampling2D",Z(Cb);function XE(n,t,e=[1,1],s="valid",o,r){return U(()=>{o==null&&(o=Wn()),le(o);let i=tp(n,o);if(n.rank!==4)throw new M(`Input for depthwiseConv2d is required to be 4-D, but is instead ${n.rank}-D`);if(t.rank!==4)throw new M(`depthwiseKernel is required to be 4-D, but is instead ${t.rank}-D`);return i=vh(i,t,e,s==="same"?"same":"valid","NHWC",r),o==="channelsFirst"&&(i=Ft(i,[0,3,1,2])),i})}class $b extends yc{constructor(t){super(2,t),this.depthwiseKernel=null,this.depthMultiplier=t.depthMultiplier==null?1:t.depthMultiplier,this.depthwiseInitializer=Zt(t.depthwiseInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.depthwiseConstraint=be(t.depthwiseConstraint),this.depthwiseRegularizer=Qt(t.depthwiseRegularizer)}build(t){if(t=Lt(t),t.length<4)throw new M(`Inputs to DepthwiseConv2D should have rank 4. Received input shape: ${JSON.stringify(t)}.`);const e=this.dataFormat==="channelsFirst"?1:3;if(t[e]==null||t[e]<0)throw new M(`The channel dimension of the inputs to DepthwiseConv2D should be defined, but is not (${t[e]}).`);const s=t[e],o=[this.kernelSize[0],this.kernelSize[1],s,this.depthMultiplier];this.depthwiseKernel=this.addWeight("depthwise_kernel",o,null,this.depthwiseInitializer,this.depthwiseRegularizer,!0,this.depthwiseConstraint),this.useBias?this.bias=this.addWeight("bias",[s*this.depthMultiplier],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):this.bias=null,this.built=!0}call(t,e){return U(()=>{t=yt(t);let s=XE(t,this.depthwiseKernel.read(),this.strides,this.padding,this.dataFormat,null);return this.useBias&&(s=Un(s,this.bias.read(),this.dataFormat)),this.activation!=null&&(s=this.activation.apply(s)),s})}computeOutputShape(t){t=Lt(t);const e=this.dataFormat==="channelsFirst"?t[2]:t[1],s=this.dataFormat==="channelsFirst"?t[3]:t[2],o=this.dataFormat==="channelsFirst"?t[1]*this.depthMultiplier:t[3]*this.depthMultiplier,r=qn(e,this.kernelSize[0],this.padding,this.strides[0]),i=qn(s,this.kernelSize[1],this.padding,this.strides[1]);return this.dataFormat==="channelsFirst"?[t[0],o,r,i]:[t[0],r,i,o]}getConfig(){const t=super.getConfig();return t.depthMultiplier=this.depthMultiplier,t.depthwiseInitializer=te(this.depthwiseInitializer),t.depthwiseRegularizer=Gt(this.depthwiseRegularizer),t.depthwiseConstraint=xe(this.depthwiseRegularizer),t}}$b.className="DepthwiseConv2D",Z($b);function Ib(n,t,e,s){if(Array.isArray(n)){if(t!=null||e!=null)throw new M("When inputs is an array, neither initialState or constants should be provided");s!=null&&(e=n.slice(n.length-s,n.length),n=n.slice(0,n.length-s)),n.length>1&&(t=n.slice(1,n.length)),n=n[0]}function o(r){return r==null||Array.isArray(r)?r:[r]}return t=o(t),e=o(e),{inputs:n,initialState:t,constants:e}}function vb(n,t,e,s=!1,o,r,i=!1,a=!1){return U(()=>{const l=t.shape.length;if(l<3)throw new M(`Input should be at least 3D, but is ${l}D.`);const c=[1,0].concat(Vn(2,l));t=Ft(t,c),i&&console.warn("Backend rnn(): the unroll = true option is not applicable to the imperative deeplearn.js backend."),o!=null&&(o=at(at(o,"bool"),"float32"),o.rank===l-1&&(o=Qe(o,-1)),o=Ft(o,c)),s&&(t=xo(t,0),o!=null&&(o=xo(o,0)));const u=[];let h,d=e;const p=t.shape[0],f=yo(t);let m;o!=null&&(m=yo(o));for(let x=0;x<p;++x){const b=f[x],w=U(()=>n(b,d));if(o==null)h=w[0],d=w[1];else{const y=U(()=>{const C=m[x],I=bt(vn(C),C),v=tt(L(w[0],C),L(d[0],I)),N=d.map((S,k)=>tt(L(w[1][k],C),L(S,I)));return{output:v,newStates:N}});h=y.output,d=y.newStates}a&&u.push(h)}let g;return a&&(g=xs(u,1)),[h,g,d]})}class qs extends St{constructor(t){super(t);let e;if(t.cell==null)throw new M("cell property is missing for the constructor of RNN.");if(Array.isArray(t.cell)?e=new sp({cells:t.cell}):e=t.cell,e.stateSize==null)throw new M("The RNN cell should have an attribute `stateSize` (tuple of integers, one integer per RNN state).");this.cell=e,this.returnSequences=t.returnSequences==null?!1:t.returnSequences,this.returnState=t.returnState==null?!1:t.returnState,this.goBackwards=t.goBackwards==null?!1:t.goBackwards,this._stateful=t.stateful==null?!1:t.stateful,this.unroll=t.unroll==null?!1:t.unroll,this.supportsMasking=!0,this.inputSpec=[new ge({ndim:3})],this.stateSpec=null,this.states_=null,this.numConstants=null,this.keptStates=[]}getStates(){if(this.states_==null){const t=Array.isArray(this.cell.stateSize)?this.cell.stateSize.length:1;return Vn(0,t).map(e=>null)}else return this.states_}setStates(t){this.states_=t}computeOutputShape(t){Pd(t)&&(t=t[0]),t=t;let e=this.cell.stateSize;Array.isArray(e)||(e=[e]);const s=e[0];let o;if(this.returnSequences?o=[t[0],t[1],s]:o=[t[0],s],this.returnState){const r=[];for(const i of e)r.push([t[0],i]);return[o].concat(r)}else return o}computeMask(t,e){return U(()=>{Array.isArray(e)&&(e=e[0]);const s=this.returnSequences?e:null;if(this.returnState){const o=this.states.map(r=>null);return[s].concat(o)}else return s})}get states(){if(this.states_==null){const t=Array.isArray(this.cell.stateSize)?this.cell.stateSize.length:1,e=[];for(let s=0;s<t;++s)e.push(null);return e}else return this.states_}set states(t){this.states_=t}build(t){if(this.numConstants!=null)throw new It("Constants support is not implemented in RNN yet.");Pd(t)&&(t=t[0]),t=t;const e=this.stateful?t[0]:null,s=t.slice(2);this.inputSpec[0]=new ge({shape:[e,null,...s]});const o=[t[0]].concat(t.slice(2));this.cell.build(o);let r;if(Array.isArray(this.cell.stateSize)?r=this.cell.stateSize:r=[this.cell.stateSize],this.stateSpec!=null){if(!Pt(this.stateSpec.map(i=>i.shape[i.shape.length-1]),r))throw new M(`An initialState was passed that is not compatible with cell.stateSize. Received stateSpec=${this.stateSpec}; However cell.stateSize is ${this.cell.stateSize}`)}else this.stateSpec=r.map(i=>new ge({shape:[null,i]}));this.stateful&&this.resetStates()}resetStates(t,e=!1){U(()=>{if(!this.stateful)throw new ns("Cannot call resetStates() on an RNN Layer that is not stateful.");const s=this.inputSpec[0].shape[0];if(s==null)throw new M("If an RNN is stateful, it needs to know its batch size. Specify the batch size of your input tensors: \n- If using a Sequential model, specify the batch size by passing a `batchInputShape` option to your first layer.\n- If using the functional API, specify the batch size by passing a `batchShape` option to your Input layer.");if(this.states_==null)Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(o=>Ie([s,o])):this.states_=[Ie([s,this.cell.stateSize])];else if(t==null)Nt(this.states_),this.keptStates!=null&&(Nt(this.keptStates),this.keptStates=[]),Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(o=>Ie([s,o])):this.states_[0]=Ie([s,this.cell.stateSize]);else{if(Array.isArray(t)||(t=[t]),t.length!==this.states_.length)throw new M(`Layer ${this.name} expects ${this.states_.length} state(s), but it received ${t.length} state value(s). Input received: ${t}`);e===!0?this.keptStates.push(this.states_.slice()):Nt(this.states_);for(let o=0;o<this.states_.length;++o){const r=t[o],i=Array.isArray(this.cell.stateSize)?this.cell.stateSize[o]:this.cell.stateSize,a=[s,i];if(!Pt(r.shape,a))throw new M(`State ${o} is incompatible with layer ${this.name}: expected shape=${a}, received shape=${r.shape}`);this.states_[o]=r}}this.states_=this.states_.map(o=>Yn(o.clone()))})}apply(t,e){let s=e==null?null:e.initialState,o=e==null?null:e.constants;e==null&&(e={});const r=Ib(t,s,o,this.numConstants);t=r.inputs,s=r.initialState,o=r.constants;let i=[],a=[];if(s!=null){e.initialState=s,i=i.concat(s),this.stateSpec=[];for(const c of s)this.stateSpec.push(new ge({shape:c.shape}));a=a.concat(this.stateSpec)}if(o!=null&&(e.constants=o,i=i.concat(o),this.numConstants=o.length),i[0]instanceof is){const c=[t].concat(i),u=this.inputSpec.concat(a),h=this.inputSpec;this.inputSpec=u;const d=super.apply(c,e);return this.inputSpec=h,d}else return super.apply(t,e)}call(t,e){return U(()=>{const s=e==null?null:e.mask,o=e==null?null:e.training;let r=e==null?null:e.initialState;t=yt(t),r==null&&(this.stateful?r=this.states_:r=this.getInitialState(t));const i=Array.isArray(this.cell.stateSize)?this.cell.stateSize.length:1;if(r.length!==i)throw new M(`RNN Layer has ${i} state(s) but was passed ${r.length} initial state(s).`);this.unroll&&console.warn("Ignoring unroll = true for RNN layer, due to imperative backend.");const a={training:o},c=vb((f,m)=>{const g=this.cell.call([f].concat(m),a);return[g[0],g.slice(1)]},t,r,this.goBackwards,s,null,this.unroll,this.returnSequences),u=c[0],h=c[1],d=c[2];this.stateful&&this.resetStates(d,o);const p=this.returnSequences?h:u;return this.returnState?[p].concat(d):p})}getInitialState(t){return U(()=>{let e=Ie(t.shape);return e=mt(e,[1,2]),e=Gi(e),Array.isArray(this.cell.stateSize)?this.cell.stateSize.map(s=>s>1?Ed(e,[1,s]):e):this.cell.stateSize>1?[Ed(e,[1,this.cell.stateSize])]:[e]})}get trainableWeights(){return this.trainable?this.cell.trainableWeights:[]}get nonTrainableWeights(){return this.trainable?this.cell.nonTrainableWeights:this.cell.weights}setFastWeightInitDuringBuild(t){super.setFastWeightInitDuringBuild(t),this.cell!=null&&this.cell.setFastWeightInitDuringBuild(t)}getConfig(){const t=super.getConfig(),e={returnSequences:this.returnSequences,returnState:this.returnState,goBackwards:this.goBackwards,stateful:this.stateful,unroll:this.unroll};this.numConstants!=null&&(e.numConstants=this.numConstants);const s=this.cell.getConfig();return this.getClassName()===qs.className&&(e.cell={className:this.cell.getClassName(),config:s}),Object.assign(Object.assign(Object.assign({},s),t),e)}static fromConfig(t,e,s={}){const o=e.cell,r=$s(o,s);return new t(Object.assign(e,{cell:r}))}}qs.className="RNN",Z(qs);class Cc extends St{}class ep extends Cc{constructor(t){super(t),this.DEFAULT_ACTIVATION="tanh",this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_RECURRENT_INITIALIZER="orthogonal",this.DEFAULT_BIAS_INITIALIZER="zeros",this.units=t.units,ve(this.units,"units"),this.activation=Hs(t.activation==null?this.DEFAULT_ACTIVATION:t.activation),this.useBias=t.useBias==null?!0:t.useBias,this.kernelInitializer=Zt(t.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.recurrentInitializer=Zt(t.recurrentInitializer||this.DEFAULT_RECURRENT_INITIALIZER),this.biasInitializer=Zt(t.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.kernelRegularizer=Qt(t.kernelRegularizer),this.recurrentRegularizer=Qt(t.recurrentRegularizer),this.biasRegularizer=Qt(t.biasRegularizer),this.kernelConstraint=be(t.kernelConstraint),this.recurrentConstraint=be(t.recurrentConstraint),this.biasConstraint=be(t.biasConstraint),this.dropout=or([1,Ws([0,t.dropout==null?0:t.dropout])]),this.recurrentDropout=or([1,Ws([0,t.recurrentDropout==null?0:t.recurrentDropout])]),this.dropoutFunc=t.dropoutFunc,this.stateSize=this.units,this.dropoutMask=null,this.recurrentDropoutMask=null}build(t){t=Lt(t),this.kernel=this.addWeight("kernel",[t[t.length-1],this.units],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.recurrentKernel=this.addWeight("recurrent_kernel",[this.units,this.units],null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.useBias?this.bias=this.addWeight("bias",[this.units],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):this.bias=null,this.built=!0}call(t,e){return U(()=>{if(t=t,t.length!==2)throw new M(`SimpleRNNCell expects 2 input Tensors, got ${t.length}.`);let s=t[1];t=t[0];const o=e.training==null?!1:e.training;0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=Xs({ones:()=>vn(t),rate:this.dropout,training:o,dropoutFunc:this.dropoutFunc})),0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=Xs({ones:()=>vn(s),rate:this.recurrentDropout,training:o,dropoutFunc:this.dropoutFunc}));let r;const i=this.dropoutMask,a=this.recurrentDropoutMask;i!=null?r=rs(L(t,i),this.kernel.read()):r=rs(t,this.kernel.read()),this.bias!=null&&(r=Un(r,this.bias.read())),a!=null&&(s=L(s,a));let l=tt(r,rs(s,this.recurrentKernel.read()));return this.activation!=null&&(l=this.activation.apply(l)),[l,l]})}getConfig(){const t=super.getConfig(),e={units:this.units,activation:Gs(this.activation),useBias:this.useBias,kernelInitializer:te(this.kernelInitializer),recurrentInitializer:te(this.recurrentInitializer),biasInitializer:te(this.biasInitializer),kernelRegularizer:Gt(this.kernelRegularizer),recurrentRegularizer:Gt(this.recurrentRegularizer),biasRegularizer:Gt(this.biasRegularizer),activityRegularizer:Gt(this.activityRegularizer),kernelConstraint:xe(this.kernelConstraint),recurrentConstraint:xe(this.recurrentConstraint),biasConstraint:xe(this.biasConstraint),dropout:this.dropout,recurrentDropout:this.recurrentDropout};return Object.assign(Object.assign({},t),e)}}ep.className="SimpleRNNCell",Z(ep);class kb extends qs{constructor(t){t.cell=new ep(t),super(t)}call(t,e){return U(()=>{this.cell.dropoutMask!=null&&(Nt(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(Nt(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null);const s=e==null?null:e.mask,o=e==null?null:e.training,r=e==null?null:e.initialState;return super.call(t,{mask:s,training:o,initialState:r})})}static fromConfig(t,e){return new t(e)}}kb.className="SimpleRNN",Z(kb);class np extends Cc{constructor(t){if(super(t),this.DEFAULT_ACTIVATION="tanh",this.DEFAULT_RECURRENT_ACTIVATION="hardSigmoid",this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_RECURRENT_INITIALIZER="orthogonal",this.DEFAULT_BIAS_INITIALIZER="zeros",t.resetAfter)throw new M("GRUCell does not support reset_after parameter set to true.");this.units=t.units,ve(this.units,"units"),this.activation=Hs(t.activation===void 0?this.DEFAULT_ACTIVATION:t.activation),this.recurrentActivation=Hs(t.recurrentActivation===void 0?this.DEFAULT_RECURRENT_ACTIVATION:t.recurrentActivation),this.useBias=t.useBias==null?!0:t.useBias,this.kernelInitializer=Zt(t.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.recurrentInitializer=Zt(t.recurrentInitializer||this.DEFAULT_RECURRENT_INITIALIZER),this.biasInitializer=Zt(t.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.kernelRegularizer=Qt(t.kernelRegularizer),this.recurrentRegularizer=Qt(t.recurrentRegularizer),this.biasRegularizer=Qt(t.biasRegularizer),this.kernelConstraint=be(t.kernelConstraint),this.recurrentConstraint=be(t.recurrentConstraint),this.biasConstraint=be(t.biasConstraint),this.dropout=or([1,Ws([0,t.dropout==null?0:t.dropout])]),this.recurrentDropout=or([1,Ws([0,t.recurrentDropout==null?0:t.recurrentDropout])]),this.dropoutFunc=t.dropoutFunc,this.implementation=t.implementation,this.stateSize=this.units,this.dropoutMask=null,this.recurrentDropoutMask=null}build(t){t=Lt(t);const e=t[t.length-1];this.kernel=this.addWeight("kernel",[e,this.units*3],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.recurrentKernel=this.addWeight("recurrent_kernel",[this.units,this.units*3],null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.useBias?this.bias=this.addWeight("bias",[this.units*3],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):this.bias=null,this.built=!0}call(t,e){return U(()=>{if(t=t,t.length!==2)throw new M(`GRUCell expects 2 input Tensors (inputs, h, c), got ${t.length}.`);const s=e.training==null?!1:e.training;let o=t[1];t=t[0],0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=Xs({ones:()=>vn(t),rate:this.dropout,training:s,count:3,dropoutFunc:this.dropoutFunc})),0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=Xs({ones:()=>vn(o),rate:this.recurrentDropout,training:s,count:3,dropoutFunc:this.dropoutFunc}));const r=this.dropoutMask,i=this.recurrentDropoutMask;let a,l,c;0<this.dropout&&this.dropout<1&&(t=L(t,r[0]));let u=rs(t,this.kernel.read());this.useBias&&(u=Un(u,this.bias.read())),0<this.recurrentDropout&&this.recurrentDropout<1&&(o=L(o,i[0]));const h=this.recurrentKernel.read(),[d,p]=xn(h,[2*this.units,this.units],h.rank-1),f=rs(o,d),[m,g,x]=xn(u,3,u.rank-1),[b,w]=xn(f,2,f.rank-1);a=this.recurrentActivation.apply(tt(m,b)),l=this.recurrentActivation.apply(tt(g,w));const y=rs(L(l,o),p);c=this.activation.apply(tt(x,y));const C=tt(L(a,o),L(tt(1,ae(a)),c));return[C,C]})}getConfig(){const t=super.getConfig(),e={units:this.units,activation:Gs(this.activation),recurrentActivation:Gs(this.recurrentActivation),useBias:this.useBias,kernelInitializer:te(this.kernelInitializer),recurrentInitializer:te(this.recurrentInitializer),biasInitializer:te(this.biasInitializer),kernelRegularizer:Gt(this.kernelRegularizer),recurrentRegularizer:Gt(this.recurrentRegularizer),biasRegularizer:Gt(this.biasRegularizer),activityRegularizer:Gt(this.activityRegularizer),kernelConstraint:xe(this.kernelConstraint),recurrentConstraint:xe(this.recurrentConstraint),biasConstraint:xe(this.biasConstraint),dropout:this.dropout,recurrentDropout:this.recurrentDropout,implementation:this.implementation,resetAfter:!1};return Object.assign(Object.assign({},t),e)}}np.className="GRUCell",Z(np);class Sb extends qs{constructor(t){t.implementation===0&&console.warn("`implementation=0` has been deprecated, and now defaults to `implementation=1`. Please update your layer call."),t.cell=new np(t),super(t)}call(t,e){return U(()=>{this.cell.dropoutMask!=null&&(Nt(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(Nt(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null);const s=e==null?null:e.mask,o=e==null?null:e.training,r=e==null?null:e.initialState;return super.call(t,{mask:s,training:o,initialState:r})})}static fromConfig(t,e){return e.implmentation===0&&(e.implementation=1),new t(e)}}Sb.className="GRU",Z(Sb);class $c extends Cc{constructor(t){super(t),this.DEFAULT_ACTIVATION="tanh",this.DEFAULT_RECURRENT_ACTIVATION="hardSigmoid",this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_RECURRENT_INITIALIZER="orthogonal",this.DEFAULT_BIAS_INITIALIZER="zeros",this.units=t.units,ve(this.units,"units"),this.activation=Hs(t.activation===void 0?this.DEFAULT_ACTIVATION:t.activation),this.recurrentActivation=Hs(t.recurrentActivation===void 0?this.DEFAULT_RECURRENT_ACTIVATION:t.recurrentActivation),this.useBias=t.useBias==null?!0:t.useBias,this.kernelInitializer=Zt(t.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.recurrentInitializer=Zt(t.recurrentInitializer||this.DEFAULT_RECURRENT_INITIALIZER),this.biasInitializer=Zt(t.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.unitForgetBias=t.unitForgetBias,this.kernelRegularizer=Qt(t.kernelRegularizer),this.recurrentRegularizer=Qt(t.recurrentRegularizer),this.biasRegularizer=Qt(t.biasRegularizer),this.kernelConstraint=be(t.kernelConstraint),this.recurrentConstraint=be(t.recurrentConstraint),this.biasConstraint=be(t.biasConstraint),this.dropout=or([1,Ws([0,t.dropout==null?0:t.dropout])]),this.recurrentDropout=or([1,Ws([0,t.recurrentDropout==null?0:t.recurrentDropout])]),this.dropoutFunc=t.dropoutFunc,this.implementation=t.implementation,this.stateSize=[this.units,this.units],this.dropoutMask=null,this.recurrentDropoutMask=null}build(t){var e;t=Lt(t);const s=t[t.length-1];this.kernel=this.addWeight("kernel",[s,this.units*4],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.recurrentKernel=this.addWeight("recurrent_kernel",[this.units,this.units*4],null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint);let o;if(this.useBias){if(this.unitForgetBias){const r=this.biasInitializer,i=this.units;o=new(e=class extends Tn{apply(l,c){const u=r.apply([i]),h=new Ad().apply([i]),d=r.apply([i*2]);return Jg(Jg(u,h),d)}},e.className="CustomInit",e)}else o=this.biasInitializer;this.bias=this.addWeight("bias",[this.units*4],null,o,this.biasRegularizer,!0,this.biasConstraint)}else this.bias=null;this.built=!0}call(t,e){return U(()=>{const s=e.training==null?!1:e.training;if(t=t,t.length!==3)throw new M(`LSTMCell expects 3 input Tensors (inputs, h, c), got ${t.length}.`);let o=t[1];const r=t[2];t=t[0],0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=Xs({ones:()=>vn(t),rate:this.dropout,training:s,count:4,dropoutFunc:this.dropoutFunc})),0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=Xs({ones:()=>vn(o),rate:this.recurrentDropout,training:s,count:4,dropoutFunc:this.dropoutFunc}));const i=this.dropoutMask,a=this.recurrentDropoutMask;let l,c,u,h;0<this.dropout&&this.dropout<1&&(t=L(t,i[0]));let d=rs(t,this.kernel.read());0<this.recurrentDropout&&this.recurrentDropout<1&&(o=L(o,a[0])),d=tt(d,rs(o,this.recurrentKernel.read())),this.useBias&&(d=Un(d,this.bias.read()));const[p,f,m,g]=xn(d,4,d.rank-1);l=this.recurrentActivation.apply(p),c=this.recurrentActivation.apply(f),u=tt(L(c,r),L(l,this.activation.apply(m))),h=this.recurrentActivation.apply(g);const x=L(h,this.activation.apply(u));return[x,x,u]})}getConfig(){const t=super.getConfig(),e={units:this.units,activation:Gs(this.activation),recurrentActivation:Gs(this.recurrentActivation),useBias:this.useBias,kernelInitializer:te(this.kernelInitializer),recurrentInitializer:te(this.recurrentInitializer),biasInitializer:te(this.biasInitializer),unitForgetBias:this.unitForgetBias,kernelRegularizer:Gt(this.kernelRegularizer),recurrentRegularizer:Gt(this.recurrentRegularizer),biasRegularizer:Gt(this.biasRegularizer),activityRegularizer:Gt(this.activityRegularizer),kernelConstraint:xe(this.kernelConstraint),recurrentConstraint:xe(this.recurrentConstraint),biasConstraint:xe(this.biasConstraint),dropout:this.dropout,recurrentDropout:this.recurrentDropout,implementation:this.implementation};return Object.assign(Object.assign({},t),e)}}$c.className="LSTMCell",Z($c);class Nb extends qs{constructor(t){t.implementation===0&&console.warn("`implementation=0` has been deprecated, and now defaults to `implementation=1`. Please update your layer call."),t.cell=new $c(t),super(t)}call(t,e){return U(()=>{this.cell.dropoutMask!=null&&(Nt(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(Nt(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null);const s=e==null?null:e.mask,o=e==null?null:e.training,r=e==null?null:e.initialState;return super.call(t,{mask:s,training:o,initialState:r})})}static fromConfig(t,e){return e.implmentation===0&&(e.implementation=1),new t(e)}}Nb.className="LSTM",Z(Nb);class sp extends Cc{constructor(t){super(t),this.cells=t.cells}get stateSize(){const t=[];for(const e of this.cells.slice().reverse())Array.isArray(e.stateSize)?t.push(...e.stateSize):t.push(e.stateSize);return t}call(t,e){return U(()=>{t=t;let s=t.slice(1);const o=[];for(const a of this.cells.slice().reverse())Array.isArray(a.stateSize)?o.push(s.splice(0,a.stateSize.length)):o.push(s.splice(0,1));o.reverse();const r=[];let i;for(let a=0;a<this.cells.length;++a){const l=this.cells[a];s=o[a],a===0?i=[t[0]].concat(s):i=[i[0]].concat(s),i=l.call(i,e),r.push(i.slice(1))}s=[];for(const a of r.slice().reverse())s.push(...a);return[i[0]].concat(s)})}build(t){Pd(t)&&(t=t[0]),t=t;let e;this.cells.forEach((s,o)=>{vo(`RNNCell_${o}`,()=>{s.build(t),Array.isArray(s.stateSize)?e=s.stateSize[0]:e=s.stateSize,t=[t[0],e]})}),this.built=!0}getConfig(){const t=super.getConfig(),e=r=>({className:r.getClassName(),config:r.getConfig()}),o={cells:this.cells.map(e)};return Object.assign(Object.assign({},t),o)}static fromConfig(t,e,s={}){const o=[];for(const r of e.cells)o.push($s(r,s));return new t({cells:o})}get trainableWeights(){if(!this.trainable)return[];const t=[];for(const e of this.cells)t.push(...e.trainableWeights);return t}get nonTrainableWeights(){const t=[];for(const e of this.cells)t.push(...e.nonTrainableWeights);if(!this.trainable){const e=[];for(const s of this.cells)e.push(...s.trainableWeights);return e.concat(t)}return t}getWeights(){const t=[];for(const e of this.cells)t.push(...e.weights);return Bd(t)}setWeights(t){const e=[];for(const s of this.cells){const o=s.weights.length,r=t.splice(o);for(let i=0;i<s.weights.length;++i)e.push([s.weights[i],r[i]])}zd(e)}}sp.className="StackedRNNCells",Z(sp);function Xs(n){const{ones:t,rate:e,training:s=!1,count:o=1,dropoutFunc:r}=n,i=()=>r!=null?r(t(),e):ex(t(),e),a=()=>qi(i,t,s);return!o||o<=1?Yn(a().clone()):Array(o).fill(void 0).map(a).map(c=>Yn(c.clone()))}var KE=function(n,t){var e={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&t.indexOf(s)<0&&(e[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(n);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(n,s[o])&&(e[s[o]]=n[s[o]]);return e};class Tb extends qs{constructor(t){if(t.unroll)throw new It("Unrolling is not possible with convolutional RNNs.");if(Array.isArray(t.cell))throw new It("It is not possible at the moment to stack convolutional cells.");super(t),this.inputSpec=[new ge({ndim:5})]}call(t,e){return U(()=>{if(this.cell.dropoutMask!=null&&(Nt(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(Nt(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null),e&&e.constants)throw new M("ConvRNN2D cell does not support constants");const s=e==null?null:e.mask,o=e==null?null:e.training,r=e==null?null:e.initialState;return super.call(t,{mask:s,training:o,initialState:r})})}computeOutputShape(t){let e=this.computeSingleOutputShape(t);return this.returnSequences||(e=[e[0],...e.slice(2)]),this.returnState&&(e=[e,...Array(2).fill([t[0],...e.slice(-3)])]),e}getInitialState(t){return U(()=>{const{stateSize:e}=this.cell,s=t.shape,o=this.computeSingleOutputShape(s),r=[o[0],...o.slice(2)],i=Ie(r);return Array.isArray(e)?Array(e.length).fill(i):[i]})}resetStates(t,e=!1){U(()=>{if(!this.stateful)throw new ns("Cannot call resetStates() on an RNN Layer that is not stateful.");const s=this.inputSpec[0].shape,o=this.computeSingleOutputShape(s),r=[o[0],...o.slice(2)];if(s[0]==null)throw new M("If an RNN is stateful, it needs to know its batch size. Specify the batch size of your input tensors: \n- If using a Sequential model, specify the batch size by passing a `batchInputShape` option to your first layer.\n- If using the functional API, specify the batch size by passing a `batchShape` option to your Input layer.");if(this.getStates()==null)Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(()=>Ie(r)):this.states_=[Ie(r)];else if(t==null)Nt(this.states_),this.keptStates!=null&&(Nt(this.keptStates),this.keptStates=[]),Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(()=>Ie(r)):this.states_[0]=Ie(r);else{if(Array.isArray(t)||(t=[t]),t.length!==this.states_.length)throw new M(`Layer ${this.name} expects ${this.states_.length} state(s), but it received ${t.length} state value(s). Input received: ${t}`);e?this.keptStates.push(this.states_.slice()):Nt(this.states_);for(let a=0;a<this.states_.length;++a){const l=t[a],c=r;if(!Pt(l.shape,c))throw new M(`State ${a} is incompatible with layer ${this.name}: expected shape=${c}, received shape=${l.shape}`);this.states_[a]=l}}this.states_=this.states_.map(a=>Yn(a.clone()))})}computeSingleOutputShape(t){const{dataFormat:e,filters:s,kernelSize:o,padding:r,strides:i,dilationRate:a}=this.cell,l=e==="channelsFirst",c=t[l?3:2],u=t[l?4:3],h=qn(c,o[0],r,i[0],a[0]),d=qn(u,o[1],r,i[1],a[1]);return[...t.slice(0,2),...l?[s,h,d]:[h,d,s]]}}Tb.className="ConvRNN2D";class op extends $c{constructor(t){const{filters:e,kernelSize:s,strides:o,padding:r,dataFormat:i,dilationRate:a}=t;super(Object.assign(Object.assign({},t),{units:e})),this.filters=e,ve(this.filters,"filters"),this.kernelSize=ir(s,2,"kernelSize"),this.kernelSize.forEach(l=>ve(l,"kernelSize")),this.strides=ir(o||1,2,"strides"),this.strides.forEach(l=>ve(l,"strides")),this.padding=r||"valid",bn(this.padding),this.dataFormat=i||"channelsLast",le(this.dataFormat),this.dilationRate=ir(a||1,2,"dilationRate"),this.dilationRate.forEach(l=>ve(l,"dilationRate"))}build(t){var e;t=Lt(t);const s=this.dataFormat==="channelsFirst"?1:t.length-1;if(t[s]==null)throw new M(`The channel dimension of the input should be defined. Found ${t[s]}`);const o=t[s],r=4,i=this.kernelSize.concat([o,this.filters*r]);this.kernel=this.addWeight("kernel",i,null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint);const a=this.kernelSize.concat([this.filters,this.filters*r]);if(this.recurrentKernel=this.addWeight("recurrent_kernel",a,null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.useBias){let l;if(this.unitForgetBias){const c=this.biasInitializer,u=this.filters;l=new(e=class extends Tn{apply(d,p){const f=c.apply([u]),m=Ps([u]),g=c.apply([u*2]);return Td([f,m,g])}},e.className="CustomInit",e)}else l=this.biasInitializer;this.bias=this.addWeight("bias",[this.filters*r],null,l,this.biasRegularizer,!0,this.biasConstraint)}this.built=!0}call(t,e){return U(()=>{if(t.length!==3)throw new M(`ConvLSTM2DCell expects 3 input Tensors (inputs, h, c), got ${t.length}.`);const s=e.training||!1,o=t[0],r=t[1],i=t[2],a=4;0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=Xs({ones:()=>vn(o),rate:this.dropout,training:s,count:a,dropoutFunc:this.dropoutFunc}));const l=this.dropoutMask,c=(G,H,j)=>!H||!H[j]?G:L(H[j],G);let u=c(o,l,0),h=c(o,l,1),d=c(o,l,2),p=c(o,l,3);0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=Xs({ones:()=>vn(r),rate:this.recurrentDropout,training:s,count:a,dropoutFunc:this.dropoutFunc}));const f=this.recurrentDropoutMask;let m=c(r,f,0),g=c(r,f,1),x=c(r,f,2),b=c(r,f,3);const w=3,[y,C,I,v]=xn(this.kernel.read(),a,w),[N,S,k,$]=this.useBias?xn(this.bias.read(),a):[null,null,null,null];u=this.inputConv(u,y,N,this.padding),h=this.inputConv(h,C,S,this.padding),d=this.inputConv(d,I,k,this.padding),p=this.inputConv(p,v,$,this.padding);const[E,R,A,F]=xn(this.recurrentKernel.read(),a,w);m=this.recurrentConv(m,E),g=this.recurrentConv(g,R),x=this.recurrentConv(x,A),b=this.recurrentConv(b,F);const _=this.recurrentActivation.apply(tt(u,m)),B=this.recurrentActivation.apply(tt(h,g)),O=tt(L(B,i),L(_,this.activation.apply(tt(d,x)))),V=L(this.recurrentActivation.apply(tt(p,b)),this.activation.apply(O));return[V,V,O]})}getConfig(){const t=super.getConfig(),{units:e}=t,s=KE(t,["units"]),o={filters:this.filters,kernelSize:this.kernelSize,padding:this.padding,dataFormat:this.dataFormat,dilationRate:this.dilationRate,strides:this.strides};return Object.assign(Object.assign({},s),o)}inputConv(t,e,s,o){const r=po(t,e,this.strides,o||"valid",this.dataFormat==="channelsFirst"?"NCHW":"NHWC",this.dilationRate);return s?Un(r,s,this.dataFormat):r}recurrentConv(t,e){return po(t,e,1,"same",this.dataFormat==="channelsFirst"?"NCHW":"NHWC")}}op.className="ConvLSTM2DCell",Z(op);class Eb extends Tb{constructor(t){const e=new op(t);super(Object.assign(Object.assign({},t),{cell:e}))}static fromConfig(t,e){return new t(e)}}Eb.className="ConvLSTM2D",Z(Eb);class rp extends St{constructor(t){super(t),this.rate=Math.max(Math.min(t.rate,1),0),this.noiseShape=t.noiseShape,this.seed=t.seed,this.supportsMasking=!0}getNoiseShape(t){if(this.noiseShape==null)return this.noiseShape;const e=t.shape,s=[];for(let o=0;o<this.noiseShape.length;++o)s.push(this.noiseShape[o]==null?e[o]:this.noiseShape[o]);return s}call(t,e){return U(()=>{this.invokeCallHook(t,e);const s=yt(t);if(0<this.rate&&this.rate<1){const o=e.training==null?!1:e.training,r=this.getNoiseShape(s);return qi(()=>ex(s,this.rate,r,this.seed),()=>s,o)}return t})}getConfig(){const t={rate:this.rate,noiseShape:this.noiseShape,seed:this.seed},e=super.getConfig();return Object.assign(t,e),t}dispose(){return super.dispose()}}rp.className="Dropout",Z(rp);class Rb extends rp{constructor(t){super(t),this.inputSpec=[{ndim:3}]}getNoiseShape(t){const e=t.shape;return[e[0],1,e[2]]}}Rb.className="SpatialDropout1D",Z(Rb);class Ab extends St{constructor(t){if(super(t),this.activation=null,this.useBias=!0,this.kernel=null,this.bias=null,this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_BIAS_INITIALIZER="zeros",t.batchInputShape==null&&t.inputShape==null&&t.inputDim!=null){let e=null;t.batchSize!=null&&(e=t.batchSize),this.batchInputShape=[e,t.inputDim]}this.units=t.units,ve(this.units,"units"),this.activation=Hs(t.activation),t.useBias!=null&&(this.useBias=t.useBias),this.kernelInitializer=Zt(t.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.biasInitializer=Zt(t.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.kernelConstraint=be(t.kernelConstraint),this.biasConstraint=be(t.biasConstraint),this.kernelRegularizer=Qt(t.kernelRegularizer),this.biasRegularizer=Qt(t.biasRegularizer),this.activityRegularizer=Qt(t.activityRegularizer),this.supportsMasking=!0,this.inputSpec=[{minNDim:2}]}build(t){t=Lt(t);const e=t[t.length-1];this.kernel==null&&(this.kernel=this.addWeight("kernel",[e,this.units],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight("bias",[this.units],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint))),this.inputSpec=[{minNDim:2,axes:{[-1]:e}}],this.built=!0}computeOutputShape(t){t=Lt(t);const e=t.slice();return e[e.length-1]=this.units,e}call(t,e){return U(()=>{this.invokeCallHook(t,e);const s=yt(t),o=qg(this.activation.getClassName());let r;return o!=null?r=rs(s,this.kernel.read(),o,this.bias?this.bias.read():null):(r=rs(s,this.kernel.read()),this.bias!=null&&(r=Un(r,this.bias.read())),this.activation!=null&&(r=this.activation.apply(r))),r})}getConfig(){const t={units:this.units,activation:Gs(this.activation),useBias:this.useBias,kernelInitializer:te(this.kernelInitializer),biasInitializer:te(this.biasInitializer),kernelRegularizer:Gt(this.kernelRegularizer),biasRegularizer:Gt(this.biasRegularizer),activityRegularizer:Gt(this.activityRegularizer),kernelConstraint:xe(this.kernelConstraint),biasConstraint:xe(this.biasConstraint)},e=super.getConfig();return Object.assign(t,e),t}}Ab.className="Dense",Z(Ab);class Db extends St{constructor(t){t=t||{},super(t),this.inputSpec=[{minNDim:3}],this.dataFormat=t.dataFormat}computeOutputShape(t){t=Lt(t);for(const e of t.slice(1))if(e==null)throw new M(`The shape of the input to "Flatten" is not fully defined (got ${t.slice(1)}). Make sure to pass a complete "input_shape" or "batch_input_shape" argument to the first layer in your model.`);return[t[0],Vs(t,1)]}call(t,e){return U(()=>{this.invokeCallHook(t,e);let s=yt(t);if(this.dataFormat==="channelsFirst"&&s.rank>1){const o=[0];for(let r=2;r<s.rank;++r)o.push(r);o.push(1),s=Ft(s,o)}return ET(s)})}getConfig(){const t={};this.dataFormat!=null&&(t.dataFormat=this.dataFormat);const e=super.getConfig();return Object.assign(t,e),t}}Db.className="Flatten",Z(Db);class Fb extends St{constructor(t){super(t),this.supportsMasking=!0,this.activation=Hs(t.activation)}call(t,e){return U(()=>{this.invokeCallHook(t,e);const s=yt(t);return this.activation.apply(s)})}getConfig(){const t={activation:Gs(this.activation)},e=super.getConfig();return Object.assign(t,e),t}}Fb.className="Activation",Z(Fb);class _b extends St{constructor(t){super(t),this.n=t.n,this.inputSpec=[{ndim:2}]}computeOutputShape(t){return[t[0],this.n,t[1]]}call(t,e){return U(()=>(t=yt(t),NT(t,this.n)))}getConfig(){const t={n:this.n},e=super.getConfig();return Object.assign(t,e),t}}_b.className="RepeatVector",Z(_b);class Ob extends St{constructor(t){super(t),this.targetShape=t.targetShape;for(let e=0;e<this.targetShape.length;++e)this.isUnknown(this.targetShape[e])&&(this.targetShape[e]=null)}isUnknown(t){return t<0||t==null}fixUnknownDimension(t,e){const s="Total size of new array must be unchanged.",o=e.slice();let r=1,i=null;for(let l=0;l<o.length;++l){const c=o[l];if(this.isUnknown(c))if(i===null)i=l;else throw new M("Can only specifiy one unknown dimension.");else r*=c}const a=Vs(t);if(i!==null){if(r===0||a%r!==0)throw new M(s);o[i]=a/r}else if(a!==r)throw new M(s);return o}computeOutputShape(t){let e=!1;for(let s=0;s<t.length;++s)if(this.isUnknown(t[s])){e=!0;break}return e?t.slice(0,1).concat(this.targetShape):t.slice(0,1).concat(this.fixUnknownDimension(t.slice(1),this.targetShape))}call(t,e){return U(()=>{this.invokeCallHook(t,e);const s=yt(t),o=s.shape,r=o.slice(0,1).concat(this.fixUnknownDimension(o.slice(1),this.targetShape));return z(s,r)})}getConfig(){const t={targetShape:this.targetShape},e=super.getConfig();return Object.assign(t,e),t}}Ob.className="Reshape",Z(Ob);class Mb extends St{constructor(t){if(super(t),t.dims==null)throw new Error("Required configuration field `dims` is missing during Permute constructor call.");if(!Array.isArray(t.dims))throw new Error(`Permute constructor requires \`dims\` to be an Array, but received ${t.dims} instead.`);const e=Vn(1,t.dims.length+1);if(!Pt(t.dims.slice().sort(),e))throw new Error("Invalid permutation `dims`: "+JSON.stringify(t.dims)+" `dims` must contain consecutive integers starting from 1.");this.dims=t.dims,this.dimsIncludingBatch=[0].concat(this.dims),this.inputSpec=[new ge({ndim:this.dims.length+1})]}computeOutputShape(t){t=Lt(t);const e=t.slice();return this.dims.forEach((s,o)=>{e[o+1]=t[s]}),e}call(t,e){return Ft(yt(t),this.dimsIncludingBatch)}getConfig(){const t={dims:this.dims},e=super.getConfig();return Object.assign(t,e),t}}Mb.className="Permute",Z(Mb);class Lb extends St{constructor(t){super(t==null?{}:t),this.supportsMasking=!0,t!=null?this.maskValue=t.maskValue==null?0:t.maskValue:this.maskValue=0}computeOutputShape(t){return t}getConfig(){const t=super.getConfig(),e={maskValue:this.maskValue};return Object.assign(e,t),e}computeMask(t,e){const s=yt(t);return gh(Wl(s,this.maskValue),-1)}call(t,e){return U(()=>{this.invokeCallHook(t,e);const s=yt(t),i=gh(Wl(s,this.maskValue),-1,!0);return L(s,at(i,s.dtype))})}}Lb.className="Masking",Z(Lb);class Pb extends St{constructor(t){if(super(t),this.embeddings=null,this.DEFAULT_EMBEDDINGS_INITIALIZER="randomUniform",t.batchInputShape==null&&t.inputShape==null){let e=null;t.batchSize!=null&&(e=t.batchSize),t.inputLength==null?this.batchInputShape=[e,null]:this.batchInputShape=[e].concat(Vt(t.inputLength))}this.inputDim=t.inputDim,ve(this.inputDim,"inputDim"),this.outputDim=t.outputDim,ve(this.outputDim,"outputDim"),this.embeddingsInitializer=Zt(t.embeddingsInitializer||this.DEFAULT_EMBEDDINGS_INITIALIZER),this.embeddingsRegularizer=Qt(t.embeddingsRegularizer),this.activityRegularizer=Qt(t.activityRegularizer),this.embeddingsConstraint=be(t.embeddingsConstraint),this.maskZero=t.maskZero,this.supportsMasking=t.maskZero,this.inputLength=t.inputLength}build(t){this.embeddings=this.addWeight("embeddings",[this.inputDim,this.outputDim],this.dtype,this.embeddingsInitializer,this.embeddingsRegularizer,!0,this.embeddingsConstraint),this.built=!0}warnOnIncompatibleInputShape(t){}computeMask(t,e){return U(()=>this.maskZero?(t=yt(t),Wl(t,Dt(t))):null)}computeOutputShape(t){if(t=Lt(t),this.inputLength==null)return[...t,this.outputDim];const e=Vt(this.inputLength);if(e.length!==t.length-1)throw new M(`"inputLength" is ${this.inputLength}, but received input shape has shape ${t}`);{let s=0;for(let o=0;o<e.length;++o){const r=e[o],i=t[o+1];if(r!=null&&i!=null&&r!==i)throw new M(`"inputLength" is ${this.inputLength}, but received input shape has shape ${t}`);r==null&&(e[s]=i),s++}}return[t[0],...e,this.outputDim]}call(t,e){return U(()=>{this.invokeCallHook(t,e);let s=yt(t);s.dtype!=="int32"&&(s=os(s,"int32"));const o=tx(this.embeddings.read(),z(s,[s.size]));return z(o,Lt(this.computeOutputShape(s.shape)))})}getConfig(){const t={inputDim:this.inputDim,outputDim:this.outputDim,embeddingsInitializer:te(this.embeddingsInitializer),embeddingsRegularizer:Gt(this.embeddingsRegularizer),activityRegularizer:Gt(this.activityRegularizer),embeddingsConstraint:xe(this.embeddingsConstraint),maskZero:this.maskZero,inputLength:this.inputLength},e=super.getConfig();return Object.assign(t,e),t}}Pb.className="Embedding",Z(Pb);class No extends St{constructor(t){super(t||{}),this.supportsMasking=!0}mergeFunction(t){throw new It}computeElementwiseOpOutputShape(t,e){if(t==null||e==null)return null;if(t.length<e.length)return this.computeElementwiseOpOutputShape(e,t);if(e.length===0)return t;const s=t.slice(0,t.length-e.length);for(let o=0;o<e.length;++o){const r=t[t.length-e.length+o],i=e[o];if(r==null||i==null||r<0||i<0)s.push(null);else if(r===1)s.push(i);else if(i===1)s.push(r);else{if(r!==i)throw new M("Operands could not be broadcast together with shapes "+JSON.stringify(t)+" "+JSON.stringify(e));s.push(r)}}return s}build(t){if(Array.isArray(t)&&!Array.isArray(t[0])&&(t=[Lt(t)]),t=t,t.length<2)throw new M(`A merge layer should be called on an Array of at least 2 inputs. Got ${t.length} input(s).`);let e=[];for(const r of t)r!=null&&r[0]!==null&&e.push(r[0]);if(e=zs(e),e.length>1)throw new M(`Can not merge tensors with different batch sizes. Got tensors with shapes: ${JSON.stringify(t)}.`);let s=t[0]==null?null:t[0].slice(1);for(let r=1;r<t.length;++r){const i=t[r]==null?null:t[r].slice(1);s=this.computeElementwiseOpOutputShape(s,i)}const o=t.map(r=>r.length);t.indexOf(null)===-1&&zs(o).length===1?this.reshapeRequired=!1:this.reshapeRequired=!0}call(t,e){return U(()=>{if(t=t,this.reshapeRequired){const s=[],o=t.map(r=>r.rank);if(o.indexOf(null)===-1){const r=Ws(o);for(let i of t){const a=i.rank;for(let l=0;l<r-a;++l)i=Gi(i,1);s.push(i)}return this.mergeFunction(s)}else{let r=!1;for(const l of t){const c=l.rank;if(c==null){const u=l.shape,h=u[0],d=u.slice(1).concat([h]);let p=z(l,[h].concat(Vs(u.slice(1))));p=Ft(p,[1,0]),p=z(p,d),s.push(p),r=!0}else if(c>1){const u=Vn(1,c).concat([0]);s.push(Ft(l,u)),r=!0}else s.push(l)}let i=this.mergeFunction(s);const a=i.rank;if(r){if(a==null){const l=i.shape,c=l.length,u=l[c-1],h=[u].concat(l.slice(0,l.length-1));i=z(Ft(z(i,[-1,u]),[1,0]),h)}else if(a>1){const l=[a-1].concat(Vn(0,a-1));i=Ft(i,l)}}return i}}else return this.mergeFunction(t)})}computeOutputShape(t){t=t;let e;t[0]==null?e=null:e=t[0].slice(1);for(let o=1;o<t.length;++o){const r=t[o]==null?null:t[o].slice(1);e=this.computeElementwiseOpOutputShape(e,r)}let s=[];for(const o of t)o!=null&&o[0]!==null&&s.push(o[0]);return s=zs(s),s.length===1?e=s.concat(e):e=[null].concat(e),e}computeMask(t,e){return U(()=>{if(e==null)return null;if(!Array.isArray(e))throw new M("`mask` should be an Array");if(!Array.isArray(t))throw new M("`inputs` should be an Array");if(e.length!==t.length)throw new M(`The Array 'inputs' and 'mask' are expected to have the same length, but have different lengths (${t.length} vs ${e.length})`);if(e.every(o=>o==null))return null;e=e.map(o=>o==null?o:Qe(o,0));let s=e[0];for(let o=1;o<e.length-1;++o)s=gs(s,e[o]);return s})}}class Bb extends No{constructor(t){super(t)}mergeFunction(t){return U(()=>{let e=t[0].clone();for(let s=1;s<t.length;++s)e=tt(e,t[s]);return e})}}Bb.className="Add",Z(Bb);class zb extends No{constructor(t){super(t)}mergeFunction(t){return U(()=>{let e=t[0].clone();for(let s=1;s<t.length;++s)e=L(e,t[s]);return e})}}zb.className="Multiply",Z(zb);class Vb extends No{constructor(t){super(t)}mergeFunction(t){return U(()=>{let e=t[0].clone();for(let s=1;s<t.length;++s)e=tt(e,t[s]);return L(1/t.length,e)})}}Vb.className="Average",Z(Vb);class Wb extends No{constructor(t){super(t)}mergeFunction(t){return U(()=>{let e=t[0];for(let s=1;s<t.length;++s)e=Ls(e,t[s]);return e})}}Wb.className="Maximum",Z(Wb);class Ub extends No{constructor(t){super(t)}mergeFunction(t){return U(()=>{let e=t[0];for(let s=1;s<t.length;++s)e=_i(e,t[s]);return e})}}Ub.className="Minimum",Z(Ub);class Gb extends No{constructor(t){super(t),this.DEFAULT_AXIS=-1,t==null&&(t={}),this.axis=t.axis==null?this.DEFAULT_AXIS:t.axis,this.supportsMasking=!0,this.reshapeRequired=!1}build(t){if(!(Array.isArray(t)&&Array.isArray(t[0]))||t.length===1)throw new M("A `Concatenate` layer should be called on a list of at least 2 inputs");t=t;let e=!0;for(const o of t)if(o!=null){e=!1;break}if(e)return;const s=[];for(let o=0;o<t.length;++o){const r=t[o].slice();r.splice(this.axis,1);let i=!1;for(const a of s)if(Pt(a,r)){i=!0;break}i||s.push(r)}if(s.length>1)throw new M("A `Concatenate` layer requires inputs with matching shapes except for the concat axis. Got input shapes: "+JSON.stringify(t))}mergeFunction(t){return U(()=>Td(t,this.axis))}computeOutputShape(t){if(!(Array.isArray(t)&&Array.isArray(t[0])))throw new M("A `Concatenate` layer should be called on a list of inputs.");const e=t,s=e[0].slice(),o=this.axis<0?s.length+this.axis:this.axis;for(const r of e.slice(1)){if(s[o]==null||r[o]==null){s[o]=null;break}s[o]+=r[o]}return s}computeMask(t,e){if(e==null)return null;if(!Array.isArray(e))throw new M("`mask` should be an array for Concatenate");if(!Array.isArray(t))throw new M("`inputs` should be an array for Concatenate");if(e.length!==t.length)throw new M(`Mismatch in the length of mask (${e.length}) and the legnth of inputs (${t.length})`);return U(()=>{let s=!0;if(e.forEach(i=>{if(i!=null){s=!1;return}}),s)return null;const o=[];for(let i=0;i<t.length;++i)e[i]==null?o.push(at(vn(t[i]),"bool")):e[i].rank<t[i].rank?o.push(Qe(e[i],-1)):o.push(e[i]);const r=Ze(o,this.axis);return rm(r,-1,!1)})}getConfig(){const t={axis:this.axis},e=super.getConfig();return Object.assign(t,e),t}}Gb.className="Concatenate",Z(Gb);function na(n,t){for(;n<0;)n+=t;return n}function jE(n,t,e){if(n.shape.length>3||t.shape.length>3)throw new It("batchDot is not implemented for tensors of 4D or higher rank yet");if(T(n.shape.length>=2,()=>`batchDot requires the rank of x to be >= 2, but got ${n.shape.length}`),T(n.shape.length>=2,()=>`batchDot requires the rank of y to be >= 2, but got ${t.shape.length}`),typeof e=="number"&&(e=[e,e]),n.dtype==="complex64"||t.dtype==="complex64")throw new It("batchDot is not implemented for complex64-type Tensors yet.");const s=n.shape.length,o=t.shape.length;e==null&&(e=[s-1,o-2]);const r=e;return U(()=>{let i;if(s>o){i=s-o;const l=[];for(let c=0;c<i;++c)l.push(1);t=z(t,t.shape.concat(l))}else if(o>s){i=o-s;const l=[];for(let c=0;c<i;++c)l.push(1);n=z(n,n.shape.concat(l))}else i=0;let a;if(n.shape.length===2&&t.shape.length===2)r[0]===r[1]?a=mt(L(n,t),r[0]):a=mt(L(Ft(n,[1,0]),t),r[1]);else{const l=r[0]!==n.shape.length-1,c=r[1]===t.shape.length-1;a=Bt(n,t,l,c)}if(i>0){let l;s>o?l=s+o-3:l=s-1;const c=[];for(let u=l;u<l+i;++u)c.push(u);a=Li(a,c)}return a.shape.length===1&&(a=Qe(a,1)),a})}class Hb extends No{constructor(t){super(t),this.axes=t.axes,this.normalize=t.normalize==null?!1:t.normalize,this.supportsMasking=!0,this.reshapeRequired=!1}build(t){T(Array.isArray(t)&&t.length===2&&Array.isArray(t[0])&&Array.isArray(t[1]),()=>"A `Dot` layer should be called on a list of exactly 2 inputs.");const e=t[0],s=t[1];if(e.length>3||s.length>3)throw new It("Dot layer does not support tensors of 4D or higher rank yet.");const o=this.interpretAxes(e,s);if(e[o[0]]!==s[o[1]])throw new M(`Dimension incompatibility: ${e[o[0]]} !== ${s[o[1]]}`)}mergeFunction(t){if(t.length!==2)throw new M(`A \`Dot\` layer must be called on exactly 2 inputs, but received ${t.length} input(s).`);let e=t[0],s=t[1],o;return Array.isArray(this.axes)?o=this.axes.map((r,i)=>na(r,t[i].shape.length)):o=[na(this.axes,e.shape.length),na(this.axes,s.shape.length)],this.normalize&&(e=hc(e,o[0]),s=hc(s,o[1])),jE(e,s,o)}interpretAxes(t,e){let s;return Array.isArray(this.axes)?s=this.axes:s=[na(this.axes,t.length),na(this.axes,e.length)],s}computeOutputShape(t){T(Array.isArray(t)&&t.length===2&&Array.isArray(t[0])&&Array.isArray(t[1]),()=>"A `Dot` layer should be called on a list of exactly 2 inputs.");const e=t[0].slice(),s=t[1].slice();if(e.length>3||s.length>3)throw new It("Dot layer does not support tensors of 4D or higher rank yet.");const o=this.interpretAxes(e,s);e.splice(o[0],1),s.splice(o[1],1),s.splice(0,1);const r=e.concat(s);return r.length===1&&r.push(1),r}computeMask(t,e){return null}getConfig(){const t={axes:this.axes,normalize:this.normalize},e=super.getConfig();return Object.assign(t,e),t}}Hb.className="Dot",Z(Hb);class qb extends St{constructor(t){super(t),this.supportsMasking=!0,this.stddev=t.stddev}computeOutputShape(t){return t}getConfig(){const t=super.getConfig(),e={stddev:this.stddev};return Object.assign(e,t),e}call(t,e){return U(()=>{this.invokeCallHook(t,e);const s=yt(t);return qi(()=>tt(rc(s.shape,0,this.stddev),s),()=>s,e.training||!1)})}}qb.className="GaussianNoise",Z(qb);class Xb extends St{constructor(t){super(t),this.supportsMasking=!0,this.rate=t.rate}computeOutputShape(t){return t}getConfig(){const t=super.getConfig(),e={rate:this.rate};return Object.assign(e,t),e}call(t,e){return U(()=>{this.invokeCallHook(t,e);const s=yt(t);return this.rate>0&&this.rate<1?qi(()=>{const r=Math.sqrt(this.rate/(1-this.rate));return L(s,rc(s.shape,1,r))},()=>s,e.training||!1):s})}}Xb.className="GaussianDropout",Z(Xb);class Kb extends St{constructor(t){super(t),this.supportsMasking=!0,this.rate=t.rate,this.noiseShape=t.noiseShape}_getNoiseShape(t){return this.noiseShape||yt(t).shape}computeOutputShape(t){return t}getConfig(){const t=super.getConfig(),e={rate:this.rate};return Object.assign(e,t),e}call(t,e){return U(()=>{if(this.rate<1&&this.rate>0){const s=this._getNoiseShape(t);return qi(()=>{const r=yt(t),a=-1.6732632423543772*1.0507009873554805;let l=mo(Oi(s),this.rate);l=os(l,"float32");const c=pn((1-this.rate)*(1+this.rate*pn(a,2)),-.5),u=-c*a*this.rate,h=tt(L(r,l),L(tt(l,-1),a));return tt(L(h,c),u)},()=>yt(t),e.training||!1)}return t})}}Kb.className="AlphaDropout",Z(Kb);function sa(n,t,e,s,o,r=.001){let i;if(n.rank===2)i=w$(n,t,e,s,o,r);else if(n.rank===3)i=$$(n,t,e,s,o,r);else if(n.rank===4)i=v$(n,t,e,s,o,r);else throw new It(`batchNormalization is not implemented for array of rank ${n.rank} yet`);return i}function YE(n,t,e,s,o=.001){return U(()=>{const r=Ah(n,s),i=r.mean,a=r.variance;return[sa(n,i,a,e,t,o),i,a]})}function ZE(n,t,e,s,o=.001){return U(()=>{const r=Ah(n,s),i=r.mean,a=r.variance,l=[];for(const f of Vn(0,n.rank))s.indexOf(f)!==-1?l.push(1):l.push(n.shape[f]);const c=z(i,l),u=z(a,l),h=t==null?null:z(t,l),d=e==null?null:z(e,l);return[sa(n,c,u,d,h,o),i,a]})}function QE(n,t,e,s,o=.001){return Pt(s.slice().sort(),Vn(0,n.rank-1))?YE(n,t,e,s,o):ZE(n,t,e,s,o)}class jb extends St{constructor(t){t==null&&(t={}),super(t),this.supportsMasking=!0,this.axis=t.axis==null?-1:t.axis,this.momentum=t.momentum==null?.99:t.momentum,this.epsilon=t.epsilon==null?.001:t.epsilon,this.center=t.center==null?!0:t.center,this.scale=t.scale==null?!0:t.scale,this.betaInitializer=Zt(t.betaInitializer||"zeros"),this.gammaInitializer=Zt(t.gammaInitializer||"ones"),this.movingMeanInitializer=Zt(t.movingMeanInitializer||"zeros"),this.movingVarianceInitializer=Zt(t.movingVarianceInitializer||"ones"),this.betaConstraint=be(t.betaConstraint),this.gammaConstraint=be(t.gammaConstraint),this.betaRegularizer=Qt(t.betaRegularizer),this.gammaRegularizer=Qt(t.gammaRegularizer)}build(t){t=Lt(t);const e=this.axis>=0?this.axis:this.axis+t.length,s=t[e];if(s==null)throw new M(`Axis ${e} of input tensor should have a defined dimension but the layer received an input with shape ${JSON.stringify(t)}.`);this.inputSpec=[new ge({ndim:t.length,axes:{[e]:s}})];const o=[s];this.scale&&(this.gamma=this.addWeight("gamma",o,null,this.gammaInitializer,this.gammaRegularizer,!0,this.gammaConstraint)),this.center&&(this.beta=this.addWeight("beta",o,null,this.betaInitializer,this.betaRegularizer,!0,this.betaConstraint)),this.movingMean=this.addWeight("moving_mean",o,null,this.movingMeanInitializer,null,!1),this.movingVariance=this.addWeight("moving_variance",o,null,this.movingVarianceInitializer,null,!1),this.built=!0}call(t,e){return U(()=>{const s=e.training==null?!1:e.training,o=yt(t),r=o.shape,i=r.length,a=Vn(0,i),l=this.axis>=0?this.axis:this.axis+i;a.splice(l,1);const c=Co(1,i);c[l]=r[l];const u=a.slice();u.sort();const h=!Pt(u,Vn(0,i).slice(0,i-1)),d=()=>{if(h){const b=z(this.movingMean.read(),c),w=z(this.movingVariance.read(),c),y=this.center?z(this.beta.read(),c):null,C=this.scale?z(this.gamma.read(),c):null;return sa(o,b,w,y,C,this.epsilon)}else return sa(o,this.movingMean.read(),this.movingVariance.read(),this.beta==null?null:this.beta.read(),this.gamma==null?null:this.gamma.read(),this.epsilon)};if(!s)return d();const[p,f,m]=QE(o,this.gamma.read(),this.beta.read(),a,this.epsilon),g=(b,w,y)=>{U(()=>{const C=1-y,I=b.read(),v=L(bt(I,w),C);b.write(bt(I,v))})};return g(this.movingMean,f,this.momentum),g(this.movingVariance,m,this.momentum),p})}getConfig(){const t={axis:this.axis,momentum:this.momentum,epsilon:this.epsilon,center:this.center,scale:this.scale,betaInitializer:te(this.betaInitializer),gammaInitializer:te(this.gammaInitializer),movingMeanInitializer:te(this.movingMeanInitializer),movingVarianceInitializer:te(this.movingVarianceInitializer),betaRegularizer:Gt(this.betaRegularizer),gammaRegularizer:Gt(this.gammaRegularizer),betaConstraint:xe(this.betaConstraint),gammaConstraint:xe(this.gammaConstraint)},e=super.getConfig();return Object.assign(t,e),t}}jb.className="BatchNormalization",Z(jb);class Yb extends St{constructor(t){if(t==null&&(t={}),super(t),this.axis=t.axis==null?-1:t.axis,typeof this.axis=="number"){if(!Number.isInteger(this.axis))throw new Error(`Expected axis to be an integer, but received ${this.axis}`)}else if(Array.isArray(this.axis)){for(const e of this.axis)if(!Number.isInteger(e))throw new Error(`Expected axis to be an array of integers, but received ${JSON.stringify(this.axis)}`)}else throw new Error(`Expected axis to be an integer or an array of integers, but received ${JSON.stringify(this.axis)}`);this.epsilon=t.epsilon==null?.001:t.epsilon,this.center=t.center==null?!0:t.center,this.scale=t.scale==null?!0:t.scale,this.betaInitializer=Zt(t.betaInitializer||"zeros"),this.gammaInitializer=Zt(t.gammaInitializer||"ones"),this.betaRegularizer=Qt(t.betaRegularizer),this.gammaRegularizer=Qt(t.gammaRegularizer),this.supportsMasking=!0}build(t){t=Lt(t);const e=t.length;typeof this.axis=="number"&&(this.axis=[this.axis]);for(let r=0;r<this.axis.length;++r)this.axis[r]<0&&(this.axis[r]+=e);for(const r of this.axis)if(r<0||r>=e)throw new Error(`Invalid axis: ${r}`);if(this.axis.length!==zs(this.axis).length)throw new Error(`Found duplicate axes in: ${this.axis}`);const s=this.axis.map(r=>t[r]),o=!0;this.scale?this.gamma=this.addWeight("gamma",s,"float32",this.gammaInitializer,this.gammaRegularizer,o):this.gamma=null,this.center?this.beta=this.addWeight("beta",s,"float32",this.betaInitializer,this.betaRegularizer,o):this.beta=null,this.built=!0}call(t,e){const s=yt(t),o=s.shape,r=o.length;return U(()=>{let{mean:a,variance:l}=Ah(s,this.axis,!0);const c=Co(1,r);for(const m of this.axis)c[m]=o[m];const u=m=>m!=null&&m.shape.length!==r?z(m,c):m;let h=this.scale?u(this.gamma.read()):null,d=this.center?u(this.beta.read()):null;const p=[],f=[];for(let m=0;m<r;++m)this.axis.indexOf(m)!==-1?(p.push(o[m]),f.push(1)):(p.push(1),f.push(o[m]));return a=Bn(a,p),l=Bn(l,p),h!=null&&(h=Bn(h,f)),d!=null&&(d=Bn(d,f)),sa(s,a,l,d,h,this.epsilon)})}getConfig(){const t={axis:this.axis,epsilon:this.epsilon,center:this.center,scale:this.scale,betaInitializer:te(this.betaInitializer),gammaInitializer:te(this.gammaInitializer),betaRegularizer:Gt(this.betaRegularizer),gammaRegularizer:Gt(this.gammaRegularizer)},e=super.getConfig();return Object.assign(t,e),t}}Yb.className="LayerNormalization",Z(Yb);function JE(n,t,e){return U(()=>{if(n.rank!==4)throw new M(`temporalPadding expects input tensor to be 4-D, but received a ${n.rank}-D tensor.`);if(t==null&&(t=[[1,1],[1,1]]),t.length!==2||t[0].length!==2||t[1].length!==2)throw new M("spatial2dPadding expects `padding` to be an Array of two Arrays, each of which is an Array of two integers.");if(e==null&&(e=Wn()),e!=="channelsLast"&&e!=="channelsFirst")throw new M(`Unknown data format: ${e}. Supported data formats are 'channelsLast' and 'channelsFirst.`);let s;return e==="channelsFirst"?s=[[0,0],[0,0],t[0],t[1]]:s=[[0,0],t[0],t[1],[0,0]],Dh(n,s)})}class Zb extends St{constructor(t){if(t==null&&(t={}),super(t),this.dataFormat=t.dataFormat==null?Wn():t.dataFormat,t.padding==null)this.padding=[[1,1],[1,1]];else if(typeof t.padding=="number")this.padding=[[t.padding,t.padding],[t.padding,t.padding]];else{if(t.padding=t.padding,t.padding.length!==2)throw new M(`ZeroPadding2D expects padding to be a length-2 array, but received a length-${t.padding.length} array.`);let e,s;if(typeof t.padding[0]=="number")e=[t.padding[0],t.padding[0]],s=[t.padding[1],t.padding[1]];else{if(t.padding=t.padding,t.padding[0].length!==2)throw new M(`ZeroPadding2D expects height padding to be a length-2 array, but received a length-${t.padding[0].length} array.`);if(e=t.padding[0],t.padding[1].length!==2)throw new M(`ZeroPadding2D expects width padding to be a length-2 array, but received a length-${t.padding[1].length} array.`);s=t.padding[1]}this.padding=[e,s]}this.inputSpec=[new ge({ndim:4})]}computeOutputShape(t){t=Lt(t);let e,s;return this.dataFormat==="channelsFirst"?(t[2]!=null&&t[2]>=0?e=t[2]+this.padding[0][0]+this.padding[0][1]:e=null,t[3]!=null&&t[3]>=0?s=t[3]+this.padding[1][0]+this.padding[1][1]:s=null,[t[0],t[1],e,s]):(t[1]!=null&&t[1]>=0?e=t[1]+this.padding[0][0]+this.padding[0][1]:e=null,t[2]!=null&&t[2]>=0?s=t[2]+this.padding[1][0]+this.padding[1][1]:s=null,[t[0],e,s,t[3]])}call(t,e){return U(()=>JE(yt(t),this.padding,this.dataFormat))}getConfig(){const t={padding:this.padding,dataFormat:this.dataFormat},e=super.getConfig();return Object.assign(t,e),t}}Zb.className="ZeroPadding2D",Z(Zb);function Ic(n,t,e,s,o,r){return U(()=>{le(o),Kg(r),bn(s),e==null&&(e=[1,1]),s==null&&(s="valid"),o==null&&(o=Wn()),r==null&&(r="max"),n=tp(n,o);let i;const a=s==="same"?"same":"valid";return r==="max"?i=Rh(n,t,e,a):i=yh(n,t,e,a),o==="channelsFirst"&&(i=Ft(i,[0,3,1,2])),i})}function Qb(n,t,e,s,o,r){return U(()=>{le(o),Kg(r),bn(s),e==null&&(e=[1,1,1]),s==null&&(s="valid"),o==null&&(o=Wn()),r==null&&(r="max"),n=fb(n,o);let i;const a=s==="same"?"same":"valid";return r==="max"?i=lv(n,t,e,a):i=u$(n,t,e,a),o==="channelsFirst"&&(i=Ft(i,[0,4,1,2,3])),i})}class Jb extends St{constructor(t){if(t.poolSize==null&&(t.poolSize=2),super(t),typeof t.poolSize=="number")this.poolSize=[t.poolSize];else if(Array.isArray(t.poolSize)&&t.poolSize.length===1&&typeof t.poolSize[0]=="number")this.poolSize=t.poolSize;else throw new M(`poolSize for 1D convolutional layer must be a number or an Array of a single number, but received ${JSON.stringify(t.poolSize)}`);if(ve(this.poolSize,"poolSize"),t.strides==null)this.strides=this.poolSize;else if(typeof t.strides=="number")this.strides=[t.strides];else if(Array.isArray(t.strides)&&t.strides.length===1&&typeof t.strides[0]=="number")this.strides=t.strides;else throw new M(`strides for 1D convolutional layer must be a number or an Array of a single number, but received ${JSON.stringify(t.strides)}`);ve(this.strides,"strides"),this.padding=t.padding==null?"valid":t.padding,bn(this.padding),this.inputSpec=[new ge({ndim:3})]}computeOutputShape(t){t=Lt(t);const e=qn(t[1],this.poolSize[0],this.padding,this.strides[0]);return[t[0],e,t[2]]}call(t,e){return U(()=>{this.invokeCallHook(t,e),t=Gi(yt(t),2);const s=this.poolingFunction(yt(t),[this.poolSize[0],1],[this.strides[0],1],this.padding,"channelsLast");return Li(s,[2])})}getConfig(){const t={poolSize:this.poolSize,padding:this.padding,strides:this.strides},e=super.getConfig();return Object.assign(t,e),t}}class t0 extends Jb{constructor(t){super(t)}poolingFunction(t,e,s,o,r){return le(r),bn(o),Ic(t,e,s,o,r,"max")}}t0.className="MaxPooling1D",Z(t0);class e0 extends Jb{constructor(t){super(t)}poolingFunction(t,e,s,o,r){return le(r),bn(o),Ic(t,e,s,o,r,"avg")}}e0.className="AveragePooling1D",Z(e0);class n0 extends St{constructor(t){if(t.poolSize==null&&(t.poolSize=[2,2]),super(t),this.poolSize=Array.isArray(t.poolSize)?t.poolSize:[t.poolSize,t.poolSize],t.strides==null)this.strides=this.poolSize;else if(Array.isArray(t.strides)){if(t.strides.length!==2)throw new M(`If the strides property of a 2D pooling layer is an Array, it is expected to have a length of 2, but received length ${t.strides.length}.`);this.strides=t.strides}else this.strides=[t.strides,t.strides];ve(this.poolSize,"poolSize"),ve(this.strides,"strides"),this.padding=t.padding==null?"valid":t.padding,this.dataFormat=t.dataFormat==null?"channelsLast":t.dataFormat,le(this.dataFormat),bn(this.padding),this.inputSpec=[new ge({ndim:4})]}computeOutputShape(t){t=Lt(t);let e=this.dataFormat==="channelsFirst"?t[2]:t[1],s=this.dataFormat==="channelsFirst"?t[3]:t[2];return e=qn(e,this.poolSize[0],this.padding,this.strides[0]),s=qn(s,this.poolSize[1],this.padding,this.strides[1]),this.dataFormat==="channelsFirst"?[t[0],t[1],e,s]:[t[0],e,s,t[3]]}call(t,e){return U(()=>(this.invokeCallHook(t,e),this.poolingFunction(yt(t),this.poolSize,this.strides,this.padding,this.dataFormat)))}getConfig(){const t={poolSize:this.poolSize,padding:this.padding,strides:this.strides,dataFormat:this.dataFormat},e=super.getConfig();return Object.assign(t,e),t}}class s0 extends n0{constructor(t){super(t)}poolingFunction(t,e,s,o,r){return le(r),bn(o),Ic(t,e,s,o,r,"max")}}s0.className="MaxPooling2D",Z(s0);class o0 extends n0{constructor(t){super(t)}poolingFunction(t,e,s,o,r){return le(r),bn(o),Ic(t,e,s,o,r,"avg")}}o0.className="AveragePooling2D",Z(o0);class r0 extends St{constructor(t){if(t.poolSize==null&&(t.poolSize=[2,2,2]),super(t),this.poolSize=Array.isArray(t.poolSize)?t.poolSize:[t.poolSize,t.poolSize,t.poolSize],t.strides==null)this.strides=this.poolSize;else if(Array.isArray(t.strides)){if(t.strides.length!==3)throw new M(`If the strides property of a 3D pooling layer is an Array, it is expected to have a length of 3, but received length ${t.strides.length}.`);this.strides=t.strides}else this.strides=[t.strides,t.strides,t.strides];ve(this.poolSize,"poolSize"),ve(this.strides,"strides"),this.padding=t.padding==null?"valid":t.padding,this.dataFormat=t.dataFormat==null?"channelsLast":t.dataFormat,le(this.dataFormat),bn(this.padding),this.inputSpec=[new ge({ndim:5})]}computeOutputShape(t){t=Lt(t);let e=this.dataFormat==="channelsFirst"?t[2]:t[1],s=this.dataFormat==="channelsFirst"?t[3]:t[2],o=this.dataFormat==="channelsFirst"?t[4]:t[3];return e=qn(e,this.poolSize[0],this.padding,this.strides[0]),s=qn(s,this.poolSize[1],this.padding,this.strides[1]),o=qn(o,this.poolSize[2],this.padding,this.strides[2]),this.dataFormat==="channelsFirst"?[t[0],t[1],e,s,o]:[t[0],e,s,o,t[4]]}call(t,e){return U(()=>(this.invokeCallHook(t,e),this.poolingFunction(yt(t),this.poolSize,this.strides,this.padding,this.dataFormat)))}getConfig(){const t={poolSize:this.poolSize,padding:this.padding,strides:this.strides,dataFormat:this.dataFormat},e=super.getConfig();return Object.assign(t,e),t}}class i0 extends r0{constructor(t){super(t)}poolingFunction(t,e,s,o,r){return le(r),bn(o),Qb(t,e,s,o,r,"max")}}i0.className="MaxPooling3D",Z(i0);class a0 extends r0{constructor(t){super(t)}poolingFunction(t,e,s,o,r){return le(r),bn(o),Qb(t,e,s,o,r,"avg")}}a0.className="AveragePooling3D",Z(a0);class l0 extends St{constructor(t){super(t),this.inputSpec=[new ge({ndim:3})]}computeOutputShape(t){return[t[0],t[2]]}call(t,e){throw new It}}class c0 extends l0{constructor(t){super(t||{})}call(t,e){return U(()=>{const s=yt(t);return de(s,1)})}}c0.className="GlobalAveragePooling1D",Z(c0);class u0 extends l0{constructor(t){super(t||{})}call(t,e){return U(()=>{const s=yt(t);return Pn(s,1)})}}u0.className="GlobalMaxPooling1D",Z(u0);class h0 extends St{constructor(t){super(t),this.dataFormat=t.dataFormat==null?"channelsLast":t.dataFormat,le(this.dataFormat),this.inputSpec=[new ge({ndim:4})]}computeOutputShape(t){return t=t,this.dataFormat==="channelsLast"?[t[0],t[3]]:[t[0],t[1]]}call(t,e){throw new It}getConfig(){const t={dataFormat:this.dataFormat},e=super.getConfig();return Object.assign(t,e),t}}class d0 extends h0{call(t,e){return U(()=>{const s=yt(t);return this.dataFormat==="channelsLast"?de(s,[1,2]):de(s,[2,3])})}}d0.className="GlobalAveragePooling2D",Z(d0);class p0 extends h0{call(t,e){return U(()=>{const s=yt(t);return this.dataFormat==="channelsLast"?Pn(s,[1,2]):Pn(s,[2,3])})}}p0.className="GlobalMaxPooling2D",Z(p0);class f0 extends St{constructor(t){super(t),this.layer=t.layer}build(t){this.built=!0}get trainable(){return this.layer!=null?this.layer.trainable:!1}set trainable(t){this.layer!=null&&(this.layer.trainable=t)}get trainableWeights(){return this.layer.trainableWeights}get nonTrainableWeights(){return this.layer.nonTrainableWeights}get updates(){return this.layer._updates}get losses(){return this.layer.losses}getWeights(){return this.layer.getWeights()}setWeights(t){this.layer.setWeights(t)}getConfig(){const t={layer:{className:this.layer.getClassName(),config:this.layer.getConfig()}},e=super.getConfig();return Object.assign(t,e),t}setFastWeightInitDuringBuild(t){super.setFastWeightInitDuringBuild(t),this.layer!=null&&this.layer.setFastWeightInitDuringBuild(t)}static fromConfig(t,e,s={}){const o=e.layer,r=$s(o,s);delete e.layer;const i={layer:r};return Object.assign(i,e),new t(i)}}class m0 extends f0{constructor(t){super(t),this.supportsMasking=!0}build(t){if(t=Lt(t),t.length<3)throw new M(`TimeDistributed layer expects an input shape >= 3D, but received input shape ${JSON.stringify(t)}`);this.inputSpec=[{shape:t}];const e=[t[0]].concat(t.slice(2));this.layer.built||(this.layer.build(e),this.layer.built=!0),super.build(t)}computeOutputShape(t){t=Lt(t);const e=[t[0]].concat(t.slice(2)),s=this.layer.computeOutputShape(e),o=t[1];return[s[0],o].concat(s.slice(1))}call(t,e){return U(()=>(t=yt(t),vb((i,a)=>[yt(this.layer.call(i,e)),[]],t,[],!1,null,null,!1,!0)[1]))}}m0.className="TimeDistributed",Z(m0);function tR(n){Io($T,"BidirectionalMergeMode",n)}const eR="concat";class g0 extends f0{constructor(t){super(t);const e=t.layer.getConfig(),s={};s.className=t.layer.getClassName(),s.config=e,this.forwardLayer=$s(s),e.goBackwards=e.goBackwards!==!0;const o={};if(o.className=t.layer.getClassName(),o.config=e,this.backwardLayer=$s(o),this.forwardLayer.name="forward_"+this.forwardLayer.name,this.backwardLayer.name="backward_"+this.backwardLayer.name,this.mergeMode=t.mergeMode===void 0?eR:t.mergeMode,tR(this.mergeMode),t.weights)throw new It("weights support is not implemented for Bidirectional layer yet.");this._stateful=t.layer.stateful,this.returnSequences=t.layer.returnSequences,this.returnState=t.layer.returnState,this.supportsMasking=!0,this._trainable=!0,this.inputSpec=t.layer.inputSpec,this.numConstants=null}get trainable(){return this._trainable}set trainable(t){this._trainable=t,this.forwardLayer!=null&&(this.forwardLayer.trainable=t),this.backwardLayer!=null&&(this.backwardLayer.trainable=t)}getWeights(){return this.forwardLayer.getWeights().concat(this.backwardLayer.getWeights())}setWeights(t){const e=t.length,s=Math.floor(e/2);this.forwardLayer.setWeights(t.slice(0,s)),this.backwardLayer.setWeights(t.slice(s))}computeOutputShape(t){let e=this.forwardLayer.computeOutputShape(t);Array.isArray(e)&&Array.isArray(e[0])||(e=[e]),e=e;let s,o,r;return this.returnState&&(r=e.slice(1)),s=e[0],s=s,this.mergeMode==="concat"?(s[s.length-1]*=2,o=[s]):this.mergeMode==null?o=[s,s.slice()]:o=[s],this.returnState?this.mergeMode==null?o.concat(r).concat(r.slice()):[s].concat(r).concat(r.slice()):Je(o)}apply(t,e){let s=e==null?null:e.initialState,o=e==null?null:e.constants;e==null&&(e={});const r=Ib(t,s,o,this.numConstants);if(t=r.inputs,s=r.initialState,o=r.constants,Array.isArray(t)&&(s=t.slice(1),t=t[0]),(s==null||s.length===0)&&o==null)return super.apply(t,e);const i=[],a=[];if(s!=null){const c=s.length;if(c%2>0)throw new M("When passing `initialState` to a Bidrectional RNN, the state should be an Array containing the states of the underlying RNNs.");e.initialState=s,i.push(...s);const u=s.map(h=>new ge({shape:h.shape}));this.forwardLayer.stateSpec=u.slice(0,c/2),this.backwardLayer.stateSpec=u.slice(c/2),a.push(...u)}if(o!=null)throw new It("Support for constants in Bidirectional layers is not implemented yet.");const l=i[0]instanceof is;for(const c of i)if(c instanceof is!==l)throw new M("The initial state of a Bidirectional layer cannot be specified as a mix of symbolic and non-symbolic tensors");if(l){const c=[t].concat(i),u=this.inputSpec.concat(a),h=this.inputSpec;this.inputSpec=u;const d=super.apply(c,e);return this.inputSpec=h,d}else return super.apply(t,e)}call(t,e){return U(()=>{const s=e.initialState;let o,r;if(s==null)o=this.forwardLayer.call(t,e),r=this.backwardLayer.call(t,e);else{const l=s.slice(0,s.length/2),c=s.slice(s.length/2);o=this.forwardLayer.call(t,Object.assign(e,{initialState:l})),r=this.backwardLayer.call(t,Object.assign(e,{initialState:c}))}let i;this.returnState&&(Array.isArray(o)&&(i=o.slice(1).concat(r.slice(1))),o=o[0],r=r[0]),this.returnSequences&&(r=xo(r,1));let a;return this.mergeMode==="concat"?a=Td([o,r]):this.mergeMode==="sum"?a=tt(o,r):this.mergeMode==="ave"?a=L(.5,tt(o,r)):this.mergeMode==="mul"?a=L(o,r):this.mergeMode==null&&(a=[o,r]),this.returnState?this.mergeMode==null?a.concat(i):[a].concat(i):a})}resetStates(t){this.forwardLayer.resetStates(),this.backwardLayer.resetStates()}build(t){vo(this.forwardLayer.name,()=>{this.forwardLayer.build(t)}),vo(this.backwardLayer.name,()=>{this.backwardLayer.build(t)}),this.built=!0}computeMask(t,e){Array.isArray(e)&&(e=e[0]);let s;if(this.returnSequences?this.mergeMode==null?s=[e,e]:s=e:this.mergeMode==null?s=[null,null]:s=null,this.returnState){const r=this.forwardLayer.states.map(i=>null);return Array.isArray(s)?s.concat(r).concat(r):[s].concat(r).concat(r)}else return s}get trainableWeights(){return this.forwardLayer.trainableWeights.concat(this.backwardLayer.trainableWeights)}get nonTrainableWeights(){return this.forwardLayer.nonTrainableWeights.concat(this.backwardLayer.nonTrainableWeights)}setFastWeightInitDuringBuild(t){super.setFastWeightInitDuringBuild(t),this.forwardLayer!=null&&this.forwardLayer.setFastWeightInitDuringBuild(t),this.backwardLayer!=null&&this.backwardLayer.setFastWeightInitDuringBuild(t)}getConfig(){const t={mergeMode:this.mergeMode},e=super.getConfig();return Object.assign(t,e),t}static fromConfig(t,e){const s=$s(e.layer);if(delete e.layer,e.numConstants!=null)throw new It("Deserialization of a Bidirectional layer with numConstants present is not supported yet.");const o=e;return o.layer=s,new t(o)}}g0.className="Bidirectional",Z(g0);class x0 extends St{constructor(t){super(t),this.scale=t.scale,t.offset?this.offset=t.offset:this.offset=0}getConfig(){const t={scale:this.scale,offset:this.offset},e=super.getConfig();return Object.assign(t,e),t}call(t,e){return U(()=>(t=yt(t),t.dtype!=="float32"&&(t=os(t,"float32")),tt(L(t,this.scale),this.offset)))}}x0.className="Rescaling",Z(x0);const{resizeBilinear:nR,cropAndResize:sR}=bs;class b0 extends St{constructor(t){super(t),this.height=t.height,this.width=t.width}centerCrop(t,e,s,o,r,i,a,l){return U(()=>{let c,u=!1;const h=e/i,d=s/a,p=(o+e)/i,f=(r+s)/a,m=[h,d,p,f],g=[];t.rank===3?(u=!0,c=xs([t])):c=t;for(let C=0;C<c.shape[0];C++)g.push(m);const x=Si(g,[g.length,4]),b=Mi(0,g.length,1,"int32"),y=sR(c,x,b,[o,r],"nearest");return os(u?yt(yo(y)):y,l)})}upsize(t,e,s,o){return U(()=>{const r=nR(t,[e,s]);return os(r,o)})}call(t,e){return U(()=>{const s=yt(t),o=s.dtype,r=s.shape,i=r[r.length-3],a=r[r.length-2];let l=0;i!==this.height&&(l=Math.floor((i-this.height)/2));let c=0;return a!==this.width&&(c=Math.floor((a-this.width)/2),c===0&&(c=1)),l>=0&&c>=0?this.centerCrop(s,l,c,this.height,this.width,i,a,o):this.upsize(t,this.height,this.width,o)})}getConfig(){const t={height:this.height,width:this.width},e=super.getConfig();return Object.assign(t,e),t}computeOutputShape(t){t=Lt(t);const e=t.length-3,s=t.length-2;return t[e]=this.height,t[s]=this.width,t}}b0.className="CenterCrop",Z(b0);function oR(n,t,e,s){let o=yt(n);if(o.dtype!=="int32"&&(o=os(o,"int32")),t==="int")return o;const r=o.shape;if(o.rank===0&&(o=Qe(o,-1)),t==="oneHot"&&o.shape[o.shape.length-1]!==1&&(o=Qe(o,-1)),o.rank>2)throw new M(`When outputMode is not int, maximum output rank is 2 Received outputMode ${t} and input shape ${r} which would result in output rank ${o.rank}.`);const i=["multiHot","oneHot"].includes(t),a=o;let l;if(typeof s!="undefined"&&t==="count"?l=hm(a,s,e,i):l=hm(a,[],e,i),t!=="tfIdf")return l;if(s)return L(l,s);throw new M("When outputMode is 'tfIdf', weights must be provided.")}class y0 extends St{constructor(t){super(t),this.numTokens=t.numTokens,t.outputMode?this.outputMode=t.outputMode:this.outputMode="multiHot"}getConfig(){const t={numTokens:this.numTokens,outputMode:this.outputMode},e=super.getConfig();return Object.assign(t,e),t}computeOutputShape(t){return t=Lt(t),t==null?[this.numTokens]:this.outputMode==="oneHot"&&t[t.length-1]!==1?(t.push(this.numTokens),t):(t[t.length-1]=this.numTokens,t)}call(t,e){return U(()=>{t=yt(t),t.dtype!=="int32"&&(t=os(t,"int32"));let s;if(typeof e.countWeights!="undefined"){if(this.outputMode!=="count")throw new M(`countWeights is not used when outputMode !== count.
              Received countWeights=${e.countWeights}`);s=yt(e.countWeights)}const o=Pn(t),r=Pl(t),i=gn(this.numTokens,o).bufferSync().get(0),a=mo(r,0).bufferSync().get(0);if(!(i&&a))throw new M(`Input values must be between 0 < values <= numTokens with numTokens=${this.numTokens}`);return oR(t,this.outputMode,this.numTokens,s)})}}y0.className="CategoryEncoding",Z(y0);const rR=["bilinear","nearest"],w0=new Set(rR);class C0 extends St{constructor(t){if(super(t),this.height=t.height,this.width=t.width,t.interpolation)if(w0.has(t.interpolation))this.interpolation=t.interpolation;else throw new M(`Invalid interpolation parameter: ${t.interpolation} is not implemented`);else this.interpolation="bilinear";this.cropToAspectRatio=!!t.cropToAspectRatio}computeOutputShape(t){t=Lt(t);const e=t[2];return[this.height,this.width,e]}getConfig(){const t={height:this.height,width:this.width,interpolation:this.interpolation,cropToAspectRatio:this.cropToAspectRatio},e=super.getConfig();return Object.assign(t,e),t}call(t,e){return U(()=>{const s=[this.height,this.width];if(this.interpolation==="bilinear")return bs.resizeBilinear(t,s,!this.cropToAspectRatio);if(this.interpolation==="nearest")return bs.resizeNearestNeighbor(t,s,!this.cropToAspectRatio);throw new Error(`Interpolation is ${this.interpolation} but only ${[...w0]} are supported`)})}}C0.className="Resizing",Z(C0);class $0{constructor(t){this.seed=t}next(){if(this.seed!==void 0)return this.seed++}}$0.className="RandomSeed";class I0 extends St{constructor(t){super(t),this.randomGenerator=new $0(t.seed)}getConfig(){const t={seed:this.randomGenerator.seed},e=super.getConfig();return Object.assign(t,e),t}}I0.className="BaseRandomLayer";const iR=["bilinear","nearest"],v0=new Set(iR);class k0 extends I0{constructor(t){super(t);const{factor:e,interpolation:s="bilinear"}=t;if(this.factor=e,Array.isArray(this.factor)&&this.factor.length===2)this.widthLower=this.factor[0],this.widthUpper=this.factor[1];else if(!Array.isArray(this.factor)&&this.factor>0)this.widthLower=-this.factor,this.widthUpper=this.factor;else throw new M(`Invalid factor: ${this.factor}. Must be positive number or tuple of 2 numbers`);if(this.widthLower<-1||this.widthUpper<-1)throw new M(`factor must have values larger than -1. Got: ${this.factor}`);if(this.widthUpper<this.widthLower)throw new M(`factor cannot have upper bound less than lower bound.
        Got upper bound: ${this.widthUpper}.
        Got lower bound: ${this.widthLower}
      `);if(s)if(v0.has(s))this.interpolation=s;else throw new M(`Invalid interpolation parameter: ${s} is not implemented`)}getConfig(){const t={factor:this.factor,interpolation:this.interpolation},e=super.getConfig();return Object.assign(t,e),t}computeOutputShape(t){t=Lt(t);const e=t[2];return[this.imgHeight,-1,e]}call(t,e){return U(()=>{const s=yt(t);this.imgHeight=s.shape[s.shape.length-3];const o=s.shape[s.shape.length-2];this.widthFactor=Oi([1],1+this.widthLower,1+this.widthUpper,"float32",this.randomGenerator.next());let r=this.widthFactor.dataSync()[0]*o;r=Math.round(r);const i=[this.imgHeight,r];switch(this.interpolation){case"bilinear":return bs.resizeBilinear(t,i);case"nearest":return bs.resizeNearestNeighbor(t,i);default:throw new Error(`Interpolation is ${this.interpolation}
          but only ${[...v0]} are supported`)}})}}k0.className="RandomWidth",Z(k0);q().registerFlag("KEEP_INTERMEDIATE_TENSORS",()=>!1,n=>{n&&console.warn("Keep intermediate tensors is ON. This will print the values of all intermediate tensors during model inference. Not all models support this mode. For details, check e2e/benchmarks/ model_config.js. This significantly impacts performance.")});var S0;(function(n){n[n.DT_INVALID=0]="DT_INVALID",n[n.DT_FLOAT=1]="DT_FLOAT",n[n.DT_DOUBLE=2]="DT_DOUBLE",n[n.DT_INT32=3]="DT_INT32",n[n.DT_UINT8=4]="DT_UINT8",n[n.DT_INT16=5]="DT_INT16",n[n.DT_INT8=6]="DT_INT8",n[n.DT_STRING=7]="DT_STRING",n[n.DT_COMPLEX64=8]="DT_COMPLEX64",n[n.DT_INT64=9]="DT_INT64",n[n.DT_BOOL=10]="DT_BOOL",n[n.DT_QINT8=11]="DT_QINT8",n[n.DT_QUINT8=12]="DT_QUINT8",n[n.DT_QINT32=13]="DT_QINT32",n[n.DT_BFLOAT16=14]="DT_BFLOAT16",n[n.DT_QINT16=15]="DT_QINT16",n[n.DT_QUINT16=16]="DT_QUINT16",n[n.DT_UINT16=17]="DT_UINT16",n[n.DT_COMPLEX128=18]="DT_COMPLEX128",n[n.DT_HALF=19]="DT_HALF",n[n.DT_RESOURCE=20]="DT_RESOURCE",n[n.DT_VARIANT=21]="DT_VARIANT",n[n.DT_UINT32=22]="DT_UINT32",n[n.DT_UINT64=23]="DT_UINT64",n[n.DT_FLOAT_REF=101]="DT_FLOAT_REF",n[n.DT_DOUBLE_REF=102]="DT_DOUBLE_REF",n[n.DT_INT32_REF=103]="DT_INT32_REF",n[n.DT_UINT8_REF=104]="DT_UINT8_REF",n[n.DT_INT16_REF=105]="DT_INT16_REF",n[n.DT_INT8_REF=106]="DT_INT8_REF",n[n.DT_STRING_REF=107]="DT_STRING_REF",n[n.DT_COMPLEX64_REF=108]="DT_COMPLEX64_REF",n[n.DT_INT64_REF=109]="DT_INT64_REF",n[n.DT_BOOL_REF=110]="DT_BOOL_REF",n[n.DT_QINT8_REF=111]="DT_QINT8_REF",n[n.DT_QUINT8_REF=112]="DT_QUINT8_REF",n[n.DT_QINT32_REF=113]="DT_QINT32_REF",n[n.DT_BFLOAT16_REF=114]="DT_BFLOAT16_REF",n[n.DT_QINT16_REF=115]="DT_QINT16_REF",n[n.DT_QUINT16_REF=116]="DT_QUINT16_REF",n[n.DT_UINT16_REF=117]="DT_UINT16_REF",n[n.DT_COMPLEX128_REF=118]="DT_COMPLEX128_REF",n[n.DT_HALF_REF=119]="DT_HALF_REF",n[n.DT_RESOURCE_REF=120]="DT_RESOURCE_REF",n[n.DT_VARIANT_REF=121]="DT_VARIANT_REF",n[n.DT_UINT32_REF=122]="DT_UINT32_REF",n[n.DT_UINT64_REF=123]="DT_UINT64_REF"})(S0||(S0={}));var N0;(function(n){(function(t){t[t.LEGACY=0]="LEGACY",t[t.V1=1]="V1",t[t.V2=2]="V2"})(n.CheckpointFormatVersion||(n.CheckpointFormatVersion={}))})(N0||(N0={}));var T0;(function(n){n[n.FAIL=0]="FAIL",n[n.SHORTEST=1]="SHORTEST",n[n.LONGEST=2]="LONGEST"})(T0||(T0={}));function ut(n,t){Array.isArray(n)||(n=[n]),n.forEach(e=>{e!=null&&T(e.dtype!=="complex64",()=>`${t} does not support complex64 tensors in the CPU backend.`)})}const aR=Vm;class vc extends Po{nextDataId(){return vc.nextDataId++}constructor(){super(),this.blockSize=48,this.firstUse=!0,this.data=new $a(this,on())}write(t,e,s){this.firstUse&&(this.firstUse=!1,q().get("IS_NODE")&&fn(`
============================
Hi, looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, visit https://github.com/tensorflow/tfjs-node for more details. 
============================`));const o={id:this.nextDataId()};return this.data.set(o,{values:t,dtype:s,refCount:1}),o}makeTensorInfo(t,e,s){let o;if(e==="string"&&s!=null&&s.length>0&&Nr(s[0])){const r=s.map(i=>As(i));o=this.write(r,t,e)}else o=this.write(s,t,e);return{dataId:o,shape:t,dtype:e}}refCount(t){return this.data.has(t)?this.data.get(t).refCount:0}incRef(t){const e=this.data.get(t);e.refCount++}decRef(t){if(this.data.has(t)){const e=this.data.get(t);e.refCount--}}move(t,e,s,o,r){this.data.set(t,{values:e,dtype:o,refCount:r})}numDataIds(){return this.data.numDataIds()}read(t){return J(this,null,function*(){return this.readSync(t)})}readSync(t){const{dtype:e,complexTensorInfos:s}=this.data.get(t);if(e==="complex64"){const o=this.readSync(s.real.dataId),r=this.readSync(s.imag.dataId);return ys(o,r)}return Iw(this.data.get(t).values,e)}bufferSync(t){const e=this.readSync(t.dataId);if(t.dtype==="string")try{const s=e.map(o=>Ds(o));return kt(t.shape,t.dtype,s)}catch(s){throw new Error("Failed to decode encoded string bytes into utf-8")}return kt(t.shape,t.dtype,e)}makeOutput(t,e,s){return on().makeTensorFromTensorInfo(this.makeTensorInfo(e,s,t),this)}disposeData(t,e=!1){if(this.data.has(t)){if(this.data.get(t).refCount--,!e&&this.data.get(t).refCount>0)return!1;const{complexTensorInfos:s}=this.data.get(t);s!=null&&(this.disposeData(s.real.dataId,!0),this.disposeData(s.imag.dataId,!0)),this.data.delete(t)}return!0}disposeIntermediateTensorInfo(t){this.disposeData(t.dataId)}time(t){return J(this,null,function*(){const e=Ke();return t(),{kernelMs:Ke()-e}})}memory(){return{unreliable:!0,reasons:["The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less."]}}where(t){ut([t],"where");const e=this.readSync(t.dataId);return aR(t.shape,e)}dispose(){}floatPrecision(){return 32}epsilon(){return super.epsilon()}}vc.nextDataId=0;function E0(n){const t=new Float32Array(n.length);for(let e=0;e<n.length;++e)t[e]=Math.abs(n[e]);return t}const lR={kernelName:va,backendName:"cpu",kernelFunc:n=>{const{x:t}=n.inputs,e=n.backend;ut(t,"abs");let s=new Float32Array(K(t.shape));const o=e.data.get(t.dataId).values;return s=E0(o),e.makeOutput(s,t.shape,t.dtype)}};function ce(n){return(t,e,s,o,r)=>{const i=$t(t,e),a=i.length,l=ft(i),c=K(i),u=_e(r,c),h=t.length,d=e.length,p=ft(t),f=ft(e),m=Zo(t,i),g=Zo(e,i);if(m.length+g.length===0)for(let x=0;x<u.length;++x)u[x]=n(s[x%s.length],o[x%o.length]);else for(let x=0;x<u.length;++x){const b=Wo(x,a,l),w=b.slice(-h);m.forEach(v=>w[v]=0);const y=jn(w,h,p),C=b.slice(-d);g.forEach(v=>C[v]=0);const I=jn(C,d,f);u[x]=n(s[y],o[I])}return[u,i]}}function ln(n){const{inputs:t,backend:e}=n,{real:s,imag:o}=t,r=e.data.get(s.dataId).values,i=e.data.get(o.dataId).values,a=e.makeTensorInfo(s.shape,"complex64"),l=e.data.get(a.dataId);return l.complexTensorInfos={real:e.makeTensorInfo(s.shape,"float32",r),imag:e.makeTensorInfo(o.shape,"float32",i)},a}const cR={kernelName:yu,backendName:"cpu",kernelFunc:ln};function kc(n,t,e="float32"){if(e==="complex64"){const o=kc(n,t,"float32"),r=kc(n,t,"float32");return ln({inputs:{real:o,imag:r},backend:n})}const s=Oe(K(t),e);return n.makeTensorInfo(t,e,s)}function ls(n){const{inputs:t,backend:e}=n,{x:s}=t;return e.incRef(s.dataId),{dataId:s.dataId,shape:s.shape,dtype:s.dtype}}const uR={kernelName:Kr,backendName:"cpu",kernelFunc:ls};function To(n){const{inputs:t,backend:e}=n,{input:s}=t,o=e.data.get(s.dataId).complexTensorInfos.real,r=e.data.get(o.dataId).values;return e.makeTensorInfo(o.shape,o.dtype,r)}const hR={kernelName:Hu,backendName:"cpu",kernelFunc:To};function R0(n,t,e,s){if(s==="int32"){const o=Int32Array.from(n);return[t,"int32",o]}if(s==="bool"){const o=oo([0],e),[r,i]=ce((a,l)=>a!==l?1:0)(t,[],n,o,"bool");return[i,"bool",r]}throw new Error(`Error in Cast: failed to cast ${e} to ${s}`)}function Ks(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{dtype:r}=s;if(r==="complex64"){if(o.dtype==="complex64")return ls({inputs:{x:o},backend:e});const u=kc(e,o.shape,o.dtype),h=Ks({inputs:{x:o},backend:e,attrs:{dtype:"float32"}}),d=ln({inputs:{real:h,imag:u},backend:e});return e.disposeIntermediateTensorInfo(u),e.disposeIntermediateTensorInfo(h),d}if(o.dtype==="complex64"){const u=To({inputs:{input:o},backend:e}),h=Ks({inputs:{x:u},backend:e,attrs:{dtype:r}});return e.disposeIntermediateTensorInfo(u),h}if(!Up(o.dtype,r)){const u=ls({inputs:{x:o},backend:e});return{dataId:u.dataId,shape:u.shape,dtype:r}}const i=e.data.get(o.dataId).values,[a,l,c]=R0(i,o.shape,o.dtype,r);return e.makeTensorInfo(a,l,c)}const dR={kernelName:Or,backendName:"cpu",kernelFunc:Ks};function ye(n,t,e,s){return e==null?({inputs:o,backend:r})=>{const{a:i,b:a}=o,l=r;ut([i,a],n);const c=l.data.get(i.dataId).values,u=l.data.get(a.dataId).values,h=i.dtype==="string"?ws(c):c,d=i.dtype==="string"?ws(u):u,p=s||i.dtype,[f,m]=t(i.shape,a.shape,h,d,p);return l.makeTensorInfo(m,p,f)}:({inputs:o,backend:r})=>{const{a:i,b:a}=o,l=r;if(i.dtype==="complex64"||a.dtype==="complex64"){const c=Ks({inputs:{x:i},backend:l,attrs:{dtype:"complex64"}}),u=l.data.get(c.dataId),h=u.complexTensorInfos.real,d=u.complexTensorInfos.imag,p=l.data.get(h.dataId).values,f=l.data.get(d.dataId).values,m=Ks({inputs:{x:a},backend:l,attrs:{dtype:"complex64"}}),g=l.data.get(m.dataId),x=g.complexTensorInfos.real,b=g.complexTensorInfos.imag,w=l.data.get(x.dataId).values,y=l.data.get(b.dataId).values,[C,I,v]=e(i.shape,a.shape,p,f,w,y),N=l.makeTensorInfo(v,"float32",C),S=l.makeTensorInfo(v,"float32",I),k=ln({inputs:{real:N,imag:S},backend:l});return l.disposeIntermediateTensorInfo(c),l.disposeIntermediateTensorInfo(m),l.disposeIntermediateTensorInfo(N),l.disposeIntermediateTensorInfo(S),k}else{const c=l.data.get(i.dataId).values,u=l.data.get(a.dataId).values,h=s||i.dtype,[d,p]=t(i.shape,a.shape,c,u,h);return l.makeTensorInfo(p,h,d)}}}function ip(n){return(t,e,s,o,r,i)=>{const a=$t(t,e),l=K(a),c=a.length,u=ft(a),h=_e("float32",l),d=_e("float32",l),p=Zo(t,a),f=Zo(e,a),m=ys(s,o),g=ys(r,i),x=t.length,b=ft(t),w=e.length,y=ft(e);if(p.length+f.length===0)for(let C=0;C<h.length;C++){const I=C%m.length,v=C%g.length,N=n(m[I*2],m[I*2+1],g[v*2],g[v*2+1]);h[C]=N.real,d[C]=N.imag}else for(let C=0;C<h.length;C++){const I=Wo(C,c,u),v=I.slice(-x);p.forEach(E=>v[E]=0);const N=jn(v,x,b),S=I.slice(-w);f.forEach(E=>S[E]=0);const k=jn(S,w,y),$=n(m[N*2],m[N*2+1],g[k*2],g[k*2+1]);h[C]=$.real,d[C]=$.imag}return[h,d,a]}}const A0=ce(((n,t)=>n+t)),pR=ip(((n,t,e,s)=>({real:n+e,imag:t+s}))),lr=ye(Uo,A0,pR),fR={kernelName:Uo,backendName:"cpu",kernelFunc:lr};function ap(n,t,e,s,o){const r=K(s),i=Oe(o,e);for(let a=0;a<n.length;a++){const l=n[a];if(l<0)throw new Error("Input x must be non-negative!");l>=o||(r>0?i[l]+=t[a]:i[l]+=1)}return i}function D0(n,t,e,s=!1){const o=n.shape[0],r=n.shape[1],i=kt([o,e],t.dtype);for(let a=0;a<o;a++)for(let l=0;l<r;l++){const c=n.get(a,l);if(c<0)throw new Error("Input x must be non-negative!");c>=e||(s?i.set(1,a,c):t.size>0?i.set(i.get(a,c)+t.get(a,l),a,c):i.set(i.get(a,c)+1,a,c))}return i}const F0=ce(((n,t)=>n&t)),mR=ye(bu,F0),gR={kernelName:bu,backendName:"cpu",kernelFunc:mR};function cs(n){return(t,e,s)=>{const o=oe(e,t.length);for(let r=0;r<t.length;++r)o[r]=n(t[r],s);return o}}function Wt(n,t,e){const s=cs(t);return js(n,s,e)}function js(n,t,e){return({inputs:s,attrs:o,backend:r})=>{const{x:i}=s;ut(i,n);const a=r,l=a.data.get(i.dataId).values;let c;if(i.dtype==="string"){if(!Array.isArray(l))throw new Error("String tensor's value was not an instance of Array");c=ws(l)}else c=l;const u=e||i.dtype,h=t(c,u,o);return a.makeTensorInfo(i.shape,u,h)}}const _0=cs(n=>Math.ceil(n)),xR=js(Mr,_0),bR={kernelName:Mr,backendName:"cpu",kernelFunc:xR};function O0(n,t,e,s){const o=oe(e,K(t));if(s&&e!=="string"){let r=0;n.forEach(i=>{const a=K(i.shape);o.set(i.vals,r),r+=a})}else{let r=0;n.forEach(i=>{const a=e==="string"?ws(i.vals):i.vals;let l=0;for(let c=0;c<i.shape[0];++c){const u=c*t[1]+r;for(let h=0;h<i.shape[1];++h)o[u+h]=a[l++]}r+=i.shape[1]})}return o}const M0=ce((n,t)=>n===t?1:0),L0=ye(Ba,M0,null,"bool"),yR={kernelName:Ba,backendName:"cpu",kernelFunc:L0};const P0=cs(n=>Math.exp(n)),B0=js(Ur,P0,"float32"),wR={kernelName:Ur,backendName:"cpu",kernelFunc:B0};const z0=cs(n=>Math.expm1(n)),CR=js(Gr,z0),$R={kernelName:Gr,backendName:"cpu",kernelFunc:CR};const V0=cs(n=>Math.floor(n)),IR=js(Hr,V0),vR={kernelName:Hr,backendName:"cpu",kernelFunc:IR};const W0=ce((n,t)=>Math.floor(n/t)),kR=ye(qr,W0,null,"int32"),SR={kernelName:qr,backendName:"cpu",kernelFunc:kR};function U0(n,t,e,s,o,r,i,a,l){const c=kt([s,r],e);for(let u=0;u<s;u++){const h=[];let d=0;for(let p=0;p<o;p++){const f=n[u*o+p];d+=f*i[p],h.push(f)}if(d<0||d>=l/r)throw new Error(`Invalid indices: ${h} does not index into ${a}`);for(let p=0;p<r;p++)c.values[u*r+p]=t.get(...t.indexToLoc(d*r+p))}return c}function G0(n,t,e){const s=kt(e,n.dtype);for(let o=0;o<s.size;++o){const i=s.indexToLoc(o).slice(),a=i[0],l=i[2],c=t.locToIndex([a,l]);i[2]=t.values[c];const u=n.locToIndex(i);0<=u&&u<n.values.length&&(s.values[o]=n.values[u])}return s}const H0=ce((n,t)=>n>t?1:0),NR=ye(Ua,H0,null,"bool"),TR={kernelName:Ua,backendName:"cpu",kernelFunc:NR};const q0=ce((n,t)=>n>=t?1:0),ER=ye(Xr,q0,null,"bool"),RR={kernelName:Xr,backendName:"cpu",kernelFunc:ER};const X0=ce((n,t)=>n<t?1:0),AR=ye(Ha,X0,null,"bool"),DR={kernelName:Ha,backendName:"cpu",kernelFunc:AR};const K0=ce((n,t)=>n<=t?1:0),FR=ye(qa,K0,null,"bool"),_R={kernelName:qa,backendName:"cpu",kernelFunc:FR};function j0(n,t,e){const s=(t-n)/(e-1),o=Oe(e,"float32");o[0]=n;for(let r=1;r<o.length;r++)o[r]=o[r-1]+s;return o}const Y0=cs(n=>Math.log(n)),OR=js(Qr,Y0),MR={kernelName:Qr,backendName:"cpu",kernelFunc:OR};function Z0(n,t,e,s){const o=_e(s,K(e));for(let r=0;r<o.length;++r){const i=r*t;let a=n[i];for(let l=0;l<t;++l){const c=n[i+l];(Number.isNaN(c)||c>a)&&(a=c)}o[r]=a}return o}const Q0=ce(((n,t)=>Math.max(n,t))),LR=ye(ti,Q0),PR={kernelName:ti,backendName:"cpu",kernelFunc:LR};const J0=ce(((n,t)=>Math.min(n,t))),BR=ye(ei,J0),zR={kernelName:ei,backendName:"cpu",kernelFunc:BR};const lp=ce(((n,t)=>n*t)),VR=ip(((n,t,e,s)=>({real:n*e-t*s,imag:n*s+t*e}))),Sc=ye(si,lp,VR),WR={kernelName:si,backendName:"cpu",kernelFunc:Sc};function t1(n,t,e){const s=Rs(-1,e);return lp([],t,s,n,e)}function UR(n){const{inputs:t,backend:e}=n,{x:s}=t;ut(s,"neg");const o=e.data.get(s.dataId).values,[r,i]=t1(o,s.shape,s.dtype);return e.makeTensorInfo(i,s.dtype,r)}const GR={kernelName:sl,backendName:"cpu",kernelFunc:UR};const e1=ce(((n,t)=>n!==t?1:0)),HR=ye(ol,e1,null,"bool"),qR={kernelName:ol,backendName:"cpu",kernelFunc:HR};function cp(n,t,e,s,o){const r=t.length,i=K(t),a=ft(t),l=ft(o),c=_e(e,K(o));for(let u=0;u<i;++u){const h=Wo(u,r,a),d=new Array(h.length);for(let f=0;f<d.length;f++)d[f]=h[s[f]];const p=jn(d,r,l);c[p]=n[u]}return c}function tn(n){const{inputs:t,attrs:e,backend:s}=n,{x:o}=t,{perm:r}=e;ut(o,"transpose");const i=o.shape.length,a=new Array(i);for(let h=0;h<a.length;h++)a[h]=o.shape[r[h]];const l=s.data.get(o.dataId).values,c=cp(l,o.shape,o.dtype,r,a);return{dataId:s.write(c,a,o.dtype),shape:a,dtype:o.dtype}}const XR={kernelName:Go,backendName:"cpu",kernelFunc:tn};function n1(n,t,e,s){const[o,r]=$e(n,s),i=sn(t,"int32"),a=Oe(K(o),i),l=K(r);for(let c=0;c<a.length;++c){const u=c*l;let h=1;for(let d=0;d<l;++d)h*=e[u+d];a[c]=h}return{outVals:a,outShape:o,outDtype:i}}function KR(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,keepDims:i}=s;ut(o,"prod");const a=o.shape.length,l=vt(r,o.shape),c=Jt(l,a);let u=l,h=o;const d=[];c!=null&&(h=tn({inputs:{x:o},backend:e,attrs:{perm:c}}),d.push(h),u=ie(u.length,a));const p=e.data.get(h.dataId).values,{outVals:f,outShape:m,outDtype:g}=n1(h.shape,h.dtype,p,u);let x=m;return i&&(x=he(m,l)),d.forEach(b=>e.disposeIntermediateTensorInfo(b)),e.makeTensorInfo(x,g,f)}const jR={kernelName:ul,backendName:"cpu",kernelFunc:KR};function YR(n,t,e){n.forEach((s,o)=>{if(s<0||s>=e){const r=Wo(o,t.length,ft(t)).join(",");throw new Error(`indices[${r}] = ${s} is not in [0, ${e})`)}})}function ZR(n,t){for(let e=0;e<n.length;++e){const s=n[e],o=e===n.length-1?t:n[e+1].length;if(s.length===0)throw new Error("Ragged splits may not be empty");if(s[0]<0)throw new Error("Ragged splits must be non-negative");if(s[s.length-1]>o)throw new Error("Ragged splits must not point past values");for(let r=1;r<s.length;++r)if(s[r-1]>s[r])throw new Error("Ragged splits must be sorted in ascending order")}}function QR(n,t,e,s){const o=[];let r=0;const i=t.length-1+e.length,a=new Array(i).fill(null).map(()=>[0]);ZR(e,s);let l=1;for(let c=0;c<t.length-1;++c){l*=t[c];const u=t[c+1];for(let h=1;h<l+1;++h)a[c].push(h*u)}for(let c=0;c<n.length;++c){let u=n[c],h=n[c]+1;for(let d=0;d<e.length;++d){const p=e[d],f=d+t.length-1;if(f>=0){const m=a[f],g=m[m.length-1]-p[u];for(let x=u;x<h;++x)a[f].push(p[x+1]+g)}u=p[u],h=p[h]}h!==u&&(o.push([u,h]),r+=h-u)}return{outSplits:a,valueSlices:o,numValues:r}}function JR(n){const t=[];for(let e=0;e<n.length;++e){const s=n[e].length,o=oe("int32",s);t.push(o),n[e].forEach((r,i)=>o[i]=r)}return t}function s1(n,t){const e=n.slice(0,t);for(;e.length<t;)e.push(1);for(let s=t;s<n.length;s++)e[t-1]*=n[s];return e}function tA(n,t,e,s,o,r){const i=s1(t,2)[1],a=s1(r,2)[1];let l=0;for(const c of e)for(let u=c[0];u<c[1];++u){for(let h=0;h<s;++h)o[l*a+h]=n[u*i+h];++l}}function eA(n,t,e,s,o){const r=t.slice();r[0]=o;const i=oe(e,K(r)),a=n.length,l=a===0?0:a/t[0];return tA(n,t,s,l,i,r),[i,r]}function o1(n,t,e,s,o,r,i,a){if(n.length===0)throw new Error("paramsNestedSplits must be non empty");if(t[0].length===0)throw new Error("Split tensors must not be scalars");const l=t[0][0]-1;if(YR(r,i,l),s.length===0)throw new Error("params.rank must be nonzero");const c=s[0],{outSplits:u,valueSlices:h,numValues:d}=QR(r,i,n,c),p=JR(u),f=eA(e,s,o,h,d);return[p,f[0],f[1]]}const r1=2147483647;function i1(n,t,e,s,o,r,i){if(t.length>1)throw new Error("starts must be a scalar or vector");if(o.length>1)throw new Error("limits must be a scalar or vector");if(i.length>1)throw new Error("deltas must be a scalar or vector");const a=t.length===0,l=o.length===0,c=i.length===0,u=[];a||u.push(t[0]),l||u.push(o[0]),c||u.push(i[0]);for(let g=1;g<u.length;++g)if(u[g]!==u[g-1])throw new Error("starts, limits, and deltas must have the same shape");const h=u.length===0?1:u[0],d=oe("int32",h+1);d[0]=0;for(let g=0;g<h;++g){const x=a?n[0]:n[g],b=l?s[0]:s[g],w=c?r[0]:r[g];if(w===0)throw new Error("Requires delta != 0");let y;if(w>0&&b<x||w<0&&b>x)y=0;else if(y=Math.ceil(Math.abs((b-x)/w)),y>r1)throw new Error(`Requires ((limit - start) / delta) <= ${r1}`);d[g+1]=d[g]+y}const p=d[h],f=oe(e,p);let m=0;for(let g=0;g<h;++g){const x=d[g+1]-d[g];let b=a?n[0]:n[g];const w=c?r[0]:r[g];for(let y=0;y<x;++y)f[m++]=b,b+=w}return[d,f]}var Rn=zn;class Nc{constructor(t,e,s,o,r,i,a,l,c,u){this.shape=t,this.shapeShape=e,this.values=s,this.valuesShape=o,this.valuesDType=r,this.defaultValue=i,this.defaultValueShape=a,this.rowPartitionValues=l,this.rowPartitionValuesShapes=c,this.rowPartitionTypes=hg(u),this.raggedRank=dg(this.rowPartitionTypes)}getRowPartitionTypeByDimension(t){return this.rowPartitionTypes[0]===Rn.FIRST_DIM_SIZE?this.rowPartitionTypes[t+1]:this.rowPartitionTypes[t]}getRowPartitionTensor(t){return this.rowPartitionTypes[0]===Rn.FIRST_DIM_SIZE?this.rowPartitionValues[t+1]:this.rowPartitionValues[t]}getMaxWidth(t){const e=this.getRowPartitionTensor(t-1);switch(this.getRowPartitionTypeByDimension(t-1)){case Rn.VALUE_ROWIDS:return Nc.getMaxWidthValueRowID(e);case Rn.ROW_SPLITS:return Nc.getMaxWidthRowSplit(e);default:throw new Error(`Cannot handle partition type ${Rn[this.getRowPartitionTypeByDimension(t-1)]}`)}}static getMaxWidthRowSplit(t){const e=t.length;if(e===0||e===1)return 0;let s=0;for(let o=0;o<e-1;++o){const r=t[o+1]-t[o];r>s&&(s=r)}return s}static getMaxWidthValueRowID(t){const e=t.length;if(e===0)return 0;let s=0,o=t[0],r=0;for(let i=1;i<e;++i){const a=t[i];a!==o&&(o=a,r=Math.max(i-s,r),s=i)}return Math.max(e-s,r)}tensorShapeFromTensor(t,e,s=!0){if(e.length===0){if(t[0]===-1)return[];throw new Error("The only valid scalar shape tensor is the fully unknown shape specified as -1.")}return l1(t,s)}calculateOutputSize(t){const e=this.valuesShape,s=this.defaultValueShape;pg(s,e);const o=this.tensorShapeFromTensor(this.shape,this.shapeShape),i=ug(this.raggedRank,o,e);i[0]<0&&(i[0]=t);for(let a=1;a<=this.raggedRank;++a)i[a]<0&&(i[a]=this.getMaxWidth(a));return i}calculateFirstParentOutputIndex(t,e,s){const o=Math.min(t,s),r=[];let i=0;for(let a=0;a<o;++a,i+=e)r.push(i);for(let a=o;a<t;++a)r.push(-1);return T(r.length===t,()=>"Final length of result must be equal to firstDimension."),r}calculateOutputIndexRowSplit(t,e,s,o){const r=t.length,i=[];for(let a=0;a<r-1;++a){const l=t[a+1]-t[a];let c=Math.min(o,l),u=e[a];u===-1&&(c=0);for(let h=0;h<c;++h)i.push(u),u+=s;for(let h=0;h<l-c;++h)i.push(-1)}if(r>0&&i.length!==t[r-1])throw new Error("Invalid row split size.");return i}calculateOutputIndexValueRowID(t,e,s,o){const r=t.length,i=[];if(r===0)return[];let a=0,l=t[0];if(l>=e.length)throw new Error(`Got currentValueRowId=${l}, which is not less than ${e.length}`);let c=e[l];i.push(c);for(let u=1;u<r;++u){const h=t[u];if(h===l)c>=0&&(++a,a<o?c+=s:c=-1);else{if(a=0,l=h,h>=e.length)throw new Error(`Got nextValueRowId=${h} which is not less than ${e.length}`);c=e[h]}i.push(c)}if(i.length!==t.length)throw new Error("Invalid row ids.");return i}calculateOutputIndex(t,e,s,o){const r=this.getRowPartitionTensor(t),i=this.getRowPartitionTypeByDimension(t);switch(i){case Rn.VALUE_ROWIDS:return this.calculateOutputIndexValueRowID(r,e,s,o);case Rn.ROW_SPLITS:if(r.length-1>e.length)throw new Error(`Row partition size is greater than output size: ${r.length-1} > ${e.length}`);return this.calculateOutputIndexRowSplit(r,e,s,o);default:throw new Error(`Unsupported partition type: ${Rn[i]}`)}}getFirstDimensionSize(){const t=this.rowPartitionValues[0];if(this.rowPartitionTypes.length===0)throw new Error("No row_partition_types given.");const e=this.rowPartitionTypes[0];switch(e){case Rn.FIRST_DIM_SIZE:return t[0];case Rn.VALUE_ROWIDS:throw new Error("Cannot handle VALUE_ROWIDS in first dimension.");case Rn.ROW_SPLITS:return this.rowPartitionValuesShapes[0][0]-1;default:throw new Error(`Cannot handle type ${Rn[e]}`)}}compute(){if(this.rowPartitionValues[0].length<=0)throw new Error("Invalid first partition input. Tensor requires at least one element.");const e=this.getFirstDimensionSize(),s=this.calculateOutputSize(e),o=new Array(this.raggedRank+1);o[o.length-1]=1;for(let l=o.length-2;l>=0;--l)o[l]=o[l+1]*s[l+1];const r=l1(s,!1),i=oe(this.valuesDType,K(r));if(o[0]*s[0]>0){let l=this.calculateFirstParentOutputIndex(e,o[0],s[0]);for(let c=1;c<=this.raggedRank;++c)l=this.calculateOutputIndex(c-1,l,o[c],s[c]);this.setOutput(this.raggedRank,l,i,r)}return[r,i]}setOutput(t,e,s,o){if(s.length===0)return;const r=this.values,i=s;let a=o.slice();a=a.slice(t+1);const l=K(a),c=e.length;let u=this.defaultValue;if(u.length!==l&&u.length!==1){const f=this.defaultValueShape;U(()=>{const m=z(u,f);u=Ai(m,a).dataSync()})}let h=0,d=0,p=0;for(let f=0;f<=c;++f){let m=f<c?e[f]:-1;if(m===p){++p;continue}if(d<p){const g=r.subarray(h*l),x=i.subarray(d*l),b=(p-d)*l;a1(x,g,b)}if(f>=c){const g=s.length;m=Math.floor(g/l)}if(m>p)if(this.defaultValue.length===1)i.subarray(p*l,m*l).fill(this.defaultValue[0]),p=m;else for(;m>p;){const g=i.slice(p*l);a1(g,u,l),++p}m<0?(h=f+1,d=p):(h=f,d=p,p=d+1)}}}function a1(n,t,e){for(let s=0;s<e;s++)n[s]=t[s]}function l1(n,t){const e=[];for(let s of n){if(s<0){if(!t)throw new Error(`Dimension ${s} must be >= 0`);if(s<-1)throw new Error(`Dimension ${s} must be >= -1`);s=-1}e.push(s)}return e}function c1(n,t,e,s,o,r,i,a,l,c){return new Nc(n,t,e,s,o,r,i,a,l,c).compute()}function u1(n,t,e,s){const o=n===t,r=n<t&&e<0,i=t<n&&e>1;if(o||r||i)return Oe(0,s);const a=Math.abs(Math.ceil((t-n)/e)),l=Oe(a,s);t<n&&e===1&&(e=-1),l[0]=n;for(let c=1;c<l.length;c++)l[c]=l[c-1]+e;return l}const h1=cs(n=>1/Math.sqrt(n)),nA=js(ci,h1),sA={kernelName:ci,backendName:"cpu",kernelFunc:nA};function Eo(n,t,e,s,o,r,i,a,l,c){const u=[s/o,o],h=n.values,d=t.values;if(s===0)return kt(e,t.dtype);const p=l instanceof ke?l:kt(u,t.dtype);typeof l=="string"||typeof l=="number"?p.values.fill(l):typeof l=="boolean"&&p.values.fill(+l);for(let f=0;f<r;f++){const m=[];let g=0;for(let x=0;x<i;x++){const b=h[f*i+x];m.push(b),g+=b*a[x]}if(g<0||g>=s/o)throw new Error(`Invalid indices: ${m} does not index into ${e}`);for(let x=0;x<o;x++)c?p.values[g*o+x]+=d[f*o+x]:p.values[g*o+x]=t.rank===0?d[0]:d[f*o+x]}return p}const oA=cs(n=>1/(1+Math.exp(-n))),d1=Wt(fi,n=>1/(1+Math.exp(-n))),rA={kernelName:fi,backendName:"cpu",kernelFunc:d1};function p1(n,t,e,s,o){const r=rg(s,t,e),i=K(e),a=ft(s);if(r){const h=ig(t,a);return o==="string"?n.slice(h,h+i):n.subarray(h,h+i)}const l=o==="string"?ws(n):n,c=kt(s,o,l),u=kt(e,o);for(let h=0;h<u.size;++h){const d=u.indexToLoc(h),p=d.map((f,m)=>f+t[m]);u.set(c.get(...p),...d)}return o==="string"?_g(u.values):u.values}function Ro(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{begin:r,size:i}=s;ut(o,"slice");const[a,l]=ed(o,r,i);sg(o,a,l);const c=e.data.get(o.dataId).values,u=p1(c,a,l,o.shape,o.dtype);return e.makeTensorInfo(l,o.dtype,u)}const iA={kernelName:gl,backendName:"cpu",kernelFunc:Ro};function f1(n,t,e,s,o,r,i){const a=t[0],l=r[0],c=new Array(l),u=new Array(a),h=t[1];if(l===0){if(a!==0)throw new Error($g(a));const g=oe(e,0),x=oe(o,0);return[g,[0,h],x,c,u]}let d=!0,p=0;const f=new Array(l).fill(0);for(let g=0;g<a;++g){const x=n[g*h];if(x<0)throw new Error(Ig(g,x));if(x>=l)throw new Error(vg(g,x,l));++f[x],d=d&&x>=p,p=x}let m=!0;for(let g=0;g<l;++g){const x=f[g]===0;c[g]=x,m=m&&!x,f[g]=Math.max(f[g],1),g>0&&(f[g]+=f[g-1])}if(m&&d){const g=n,x=s;for(let b=0;b<a;++b)u[b]=b;return[g,[a,h],x,c,u]}else{const g=f[l-1],x=oe(e,g*h),b=oe(o,g),w=new Array(l).fill(0);for(let y=0;y<a;++y){const C=n[y*h],I=w[C],v=(C===0?0:f[C-1])+I;w[C]++;for(let N=0;N<h;++N)x[v*h+N]=n[y*h+N];b[v]=s[y],u[y]=v}for(let y=0;y<l;++y)if(w[y]===0){const I=y===0?0:f[y-1];x[I*h+0]=y;for(let v=1;v<h;++v)x[I*h+v]=0;b[I]=i}return[x,[g,h],b,c,u]}}function m1(n,t,e,s,o){const r=K(s),i=t[0],a=o.length,l=[];let c=1,u=-1;for(let g=0;g<a;++g){const x=o[g];if(x===-1){if(u!==-1)throw new Error(kg(u,g));u=g,l.push(1)}else{if(x<0)throw new Error(Sg(g,x));c*=x,l.push(x)}}if(u!==-1){if(c<=0)throw new Error(Ng());const g=Math.trunc(r/c);if(c*g!==r)throw new Error(Tg(s,l));l[u]=g}if(K(l)!==r)throw new Error(Eg(s,l));const d=s.length,p=[];if(d>0){p[d-1]=1;for(let g=d-2;g>=0;--g)p[g]=p[g+1]*s[g+1]}const f=[];if(a>0){f[a-1]=1;for(let g=a-2;g>=0;--g)f[g]=f[g+1]*l[g+1]}const m=oe(e,i*a);for(let g=0;g<i;++g){let x=0;for(let b=0;b<d;++b)x+=n[g*d+b]*p[b];for(let b=0;b<a;++b)m[g*a+b]=Math.trunc(x/f[b]),x%=f[b]}return[m,[i,a],l]}function up(n,t,e,s,o,r=!1,i=0){const a=s.length,l=[t[0],n.length/t[0]],c=l[1],h=a>0?o[a-1]+1:0;if(h<0)throw new Error(Cd());const d=t.slice();d[0]=h;const p=d.reduce((w,y)=>w*y,1),f=oe(e,p);if(a===0)return h>0&&f.fill(i),[f,d];if(h<=0)throw new Error(Cd());let m=0,g=1,x=0,b=o[m];for(;;){let w=0;if(g<a){if(w=o[g],b===w){++g;continue}if(b>=w)throw new Error(Rg())}if(b<0||b>=h)throw new Error(Ag(b,h));b>x&&f.fill(i,x*c,b*c);for(let y=m;y<g;++y){const C=s[y];if(C<0||C>=l[0])throw new Error(Dg(y,s[y],l[0]));for(let I=0;I<c;I++)f[b*c+I]+=n[C*c+I]}if(r)for(let y=0;y<c;y++)f[b*c+y]/=g-m;if(m=g,++g,x=b+1,b=w,g>a)break}return x<h&&f.fill(i,x*c,h*c),[f,d]}const aA=cs(n=>Math.sqrt(n)),lA=Wt(gi,n=>Math.sqrt(n)),cA={kernelName:gi,backendName:"cpu",kernelFunc:lA};const g1=ce(((n,t)=>{const e=n-t;return e*e})),uA=ye(xi,g1),hA={kernelName:xi,backendName:"cpu",kernelFunc:uA};const x1=cs((n,t)=>{const{pattern:e,replaceGlobal:s,rewrite:o}=t;return n.replace(new RegExp(e,s?"g":""),o)}),dA=js(ju,x1),pA={kernelName:ju,backendName:"cpu",kernelFunc:dA};function b1(n,t,e,s){const o=kt(n,t.dtype);for(let r=0;r<o.size;r++){const i=o.indexToLoc(r),a=new Array(i.length);for(let l=0;l<a.length;l++)a[l]=i[l]*e[l]+s[l];o.set(t.get(...a),...i)}return o}class fA{constructor(t,e,s,o,r,i){this.separator=As(t),this.nGramWidths=e,this.leftPad=As(s),this.rightPad=As(o),this.padWidth=r,this.preserveShort=i}getPadWidth(t){return Math.min(this.padWidth<0?t-1:this.padWidth,t-1)}getNumNGrams(t,e){const s=this.getPadWidth(e);return Math.max(0,t+2*s-e+1)}createNGrams(t,e,s,o,r,i){for(let a=0;a<r;++a){const l=this.getPadWidth(i),c=Math.max(0,l-a),u=Math.max(0,l-(r-(a+1))),h=i-(c+u),d=e+(c>0?0:a-l);let p=0;p+=c*this.leftPad.length;for(let b=0;b<h;++b)p+=t[d+b].length;p+=u*this.rightPad.length;const f=c+u+h-1;p+=f*this.separator.length,s[o+a]=new Uint8Array(p);const m=s[o+a];let g=0;const x=b=>b.forEach(w=>m[g++]=w);for(let b=0;b<c;++b)x(this.leftPad),x(this.separator);for(let b=0;b<h-1;++b)x(t[d+b]),x(this.separator);if(h>0){x(t[d+h-1]);for(let b=0;b<u;++b)x(this.separator),x(this.rightPad)}else{for(let b=0;b<u-1;++b)x(this.rightPad),x(this.separator);x(this.rightPad)}}}compute(t,e){const s=t.length,o=e.length;if(o>0){let l=e[0];if(l!==0)throw new Error(`First split value must be 0, got ${l}`);for(let c=1;c<o;++c){let u=e[c]>=l;if(u=u&&e[c]<=s,!u)throw new Error(`Invalid split value ${e[c]}, must be in [${l}, ${s}]`);l=e[c]}if(l!==s)throw new Error(`Last split value must be data size. Expected ${s}, got ${l}`)}const r=o-1,i=oe("int32",o);if(s===0||o===0){const l=new Array(s);for(let c=0;c<=r;++c)i[c]=0;return[l,i]}i[0]=0;for(let l=1;l<=r;++l){const c=e[l]-e[l-1];let u=0;this.nGramWidths.forEach(h=>{u+=this.getNumNGrams(c,h)}),this.preserveShort&&c>0&&u===0&&(u=1),i[l]=i[l-1]+u}const a=new Array(i[r]);for(let l=0;l<r;++l){const c=e[l];let u=i[l];if(this.nGramWidths.forEach(h=>{const d=e[l+1]-e[l],p=this.getNumNGrams(d,h);this.createNGrams(t,c,a,u,p,h),u+=p}),this.preserveShort&&u===i[l]){const h=e[l+1]-e[l];if(h===0)continue;const d=h+2*this.padWidth;this.createNGrams(t,c,a,u,1,d)}}return[a,i]}}function y1(n,t,e,s,o,r,i,a){return new fA(e,s,o,r,i,a).compute(n,t)}function mA(n,t,e,s){if(!n.length)return;if(t.length===0){for(let r=0;r<n.length;++r)s.push(n.subarray(r,r+1));return}if(t.length===1){const r=t[0];let i=n.indexOf(r);for(;i!==-1;){const a=n.subarray(0,i);(!e||a.length!==0)&&s.push(a),n=n.subarray(i+1),i=n.indexOf(r)}(!e||n.length!==0)&&s.push(n);return}let o=0;for(let r=0;r<n.length+1;r++)if(r===n.length||t.indexOf(n[r])!==-1){const i=n.subarray(o,r);(!e||i.length!==0)&&s.push(i),o=r+1}}function w1(n,t,e){const s=n.length,o=[];let r=0,i=0;const a=new Array(s);for(let d=0;d<s;++d){const p=o.length;mA(n[d],t,e,o);const f=o.length-p;a[d]=f,r+=f,i=Math.max(i,f)}const l=oe("int32",r*2),c=new Array(r),u=[s,i];let h=0;for(let d=0;d<s;++d)for(let p=0;p<a[d];++p)l[h*2]=d,l[h*2+1]=p,c[h]=o[h],++h;return[l,c,u]}function C1(n,t){const e=oe("int32",n.length);for(let s=0;s<n.length;++s)e[s]=Uw(n[s]).modulo(t).getLowBitsUnsigned();return e}const $1=ce(((n,t)=>n-t)),gA=ip(((n,t,e,s)=>({real:n-e,imag:t-s}))),hp=ye(bi,$1,gA),xA={kernelName:bi,backendName:"cpu",kernelFunc:hp};function I1(n,t){const e=new Array(n.rank);for(let o=0;o<e.length;o++)e[o]=n.shape[o]*t[o];const s=kt(e,n.dtype);for(let o=0;o<s.values.length;++o){const r=s.indexToLoc(o),i=new Array(n.rank);for(let l=0;l<i.length;l++)i[l]=r[l]%n.shape[l];const a=n.locToIndex(i);s.values[o]=n.values[a]}return s}const oa=(n,t)=>{const e=t.value-n.value;return e===0?n.index-t.index:e};function v1(n,t,e=0,s=n.length-1){for(;s>e;){if(s-e>600){const a=s-e+1,l=t-e+1,c=Math.log(a),u=.5*Math.exp(2*c/3),h=.5*Math.sqrt(c*u*(a-u)/a)*Math.sign(l-a/2),d=Math.max(e,Math.floor(t-l*u/a+h)),p=Math.min(s,Math.floor(t+(a-l)*u/a+h));v1(n,t,d,p)}const o=n[t];let r=e,i=s;for(Kn(n,e,t),oa(n[s],o)>0&&Kn(n,e,s);r<i;){for(Kn(n,r,i),r++,i--;oa(n[r],o)<0;)r=r+1;for(;oa(n[i],o)>0;)i=i-1}oa(n[e],o)===0?Kn(n,e,i):(i=i+1,Kn(n,i,s)),i<=t&&(e=i+1),t<=i&&(s=i-1)}}function k1(n,t,e,s,o){const r=t[t.length-1],[i,a]=[n.length/r,r],l=_e(e,i*s),c=_e("int32",i*s);for(let h=0;h<i;h++){const d=h*a,p=n.subarray(d,d+a);let f=new Array(p.length);p.forEach((b,w)=>f[w]={value:b,index:w}),s<f.length&&(v1(f,s),f=f.slice(0,s)),o&&f.sort(oa);const m=h*s,g=l.subarray(m,m+s),x=c.subarray(m,m+s);for(let b=0;b<s;b++)g[b]=f[b].value,x[b]=f[b].index}const u=t.slice();return u[u.length-1]=s,[kt(u,e,l),kt(u,"int32",c)]}function S1(n,t,e,s){const o=vt(t,e)[0],r=[1,e[0],1];for(let f=0;f<o;f++)r[0]*=e[f];r[1]=e[o];for(let f=o+1;f<e.length;f++)r[2]*=e[f];const i=new Map,a=new Int32Array(e[o]),l=new ke(r,s,n),c=[],u=r[0]===1&&r[2]===1;for(let f=0;f<e[o];f++){let m;if(u)m=n[f].toString();else{const x=[];for(let b=0;b<r[0];b++)for(let w=0;w<r[2];w++)x.push(l.get(b,f,w));m=x.join(",")}const g=i.get(m);if(g!=null)a[f]=g;else{const x=i.size;i.set(m,x),a[f]=x,c.push(f)}}const h=r.slice();h[1]=i.size;const d=new ke(h,s);c.forEach((f,m)=>{for(let g=0;g<r[0];g++)for(let x=0;x<r[2];x++)d.set(l.get(g,f,x),g,m,x)});const p=e.slice();return p[o]=h[1],{outputValues:d.values,outputShape:p,indices:a}}var bA=Object.freeze({__proto__:null,addImpl:A0,bincountImpl:ap,bincountReduceImpl:D0,bitwiseAndImpl:F0,castImpl:R0,ceilImpl:_0,concatImpl:O0,equalImpl:M0,expImpl:P0,expm1Impl:z0,floorDivImpl:W0,floorImpl:V0,gatherNdImpl:U0,gatherV2Impl:G0,greaterEqualImpl:q0,greaterImpl:H0,lessEqualImpl:K0,lessImpl:X0,linSpaceImpl:j0,logImpl:Y0,maxImpl:Z0,maximumImpl:Q0,minimumImpl:J0,multiplyImpl:lp,negImpl:t1,notEqualImpl:e1,prodImpl:n1,raggedGatherImpl:o1,raggedRangeImpl:i1,raggedTensorToTensorImpl:c1,rangeImpl:u1,rsqrtImpl:h1,scatterImpl:Eo,sigmoidImpl:oA,simpleAbsImpl:E0,sliceImpl:p1,sparseFillEmptyRowsImpl:f1,sparseReshapeImpl:m1,sparseSegmentReductionImpl:up,sqrtImpl:aA,squaredDifferenceImpl:g1,staticRegexReplaceImpl:x1,stridedSliceImpl:b1,stringNGramsImpl:y1,stringSplitImpl:w1,stringToHashBucketFastImpl:C1,subImpl:$1,tileImpl:I1,topKImpl:k1,transposeImpl:cp,uniqueImpl:S1});Hf("cpu",()=>new vc,1);const N1=Wt(Vr,n=>n>=0?n:Math.exp(n)-1),yA={kernelName:Vr,backendName:"cpu",kernelFunc:N1};function T1(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{alpha:r}=s;ut([o],"leakyRelu");const i=K(o.shape),a=e.data.get(o.dataId).values,l=_e("float32",i);for(let c=0;c<a.length;c++)l[c]=a[c]<0?r*a[c]:a[c];return e.makeTensorInfo(o.shape,"float32",l)}const wA={kernelName:Ga,backendName:"cpu",kernelFunc:T1};const CA=ce((n,t)=>n<0?t*n:n);function E1(n){const{inputs:t,backend:e}=n,{x:s,alpha:o}=t;ut([s,o],"prelu");const r=e.data.get(s.dataId).values,i=e.data.get(o.dataId).values,[a,l]=CA(s.shape,o.shape,r,i,"float32");return e.makeTensorInfo(l,"float32",a)}const $A={kernelName:cl,backendName:"cpu",kernelFunc:E1};const R1=Wt(ii,n=>Math.max(0,n)),IA={kernelName:ii,backendName:"cpu",kernelFunc:R1};const A1=Wt(ai,n=>Math.min(Math.max(0,n),6)),vA={kernelName:ai,backendName:"cpu",kernelFunc:A1};function Tc(n,t,e,s,o){if(e==="linear")return ls({inputs:{x:t},backend:n});if(e==="relu")return R1({inputs:{x:t},backend:n});if(e==="elu")return N1({inputs:{x:t},backend:n});if(e==="relu6")return A1({inputs:{x:t},backend:n});if(e==="prelu")return E1({inputs:{x:t,alpha:s},backend:n});if(e==="leakyrelu")return T1({inputs:{x:t},backend:n,attrs:{alpha:o}});if(e==="sigmoid")return d1({inputs:{x:t},backend:n});throw new Error(`Activation ${e} has not been implemented for the CPU backend.`)}function Kt(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{shape:r}=s,i=K(o.shape),a=Wp(r,i),l=K(a);T(i===l,()=>`The new shape (${a}) has ${l} elements and the old shape (${o.shape}) has ${i} elements. The new shape and old shape must have the same number of elements.`),e.incRef(o.dataId);const c=e.data.get(o.dataId);if(c.complexTensorInfos!=null){const u=c.complexTensorInfos.real,h=c.complexTensorInfos.imag;u.shape=a,h.shape=a}return{dataId:o.dataId,shape:a,dtype:o.dtype}}const kA={kernelName:hl,backendName:"cpu",kernelFunc:Kt};function D1(n){const{inputs:t,backend:e,attrs:s}=n,{a:o,b:r}=t,{transposeA:i,transposeB:a}=s;ut([o,r],"matMul");const l=o.shape.length,c=r.shape.length,u=i?o.shape[l-2]:o.shape[l-1],h=a?r.shape[c-1]:r.shape[c-2],d=i?o.shape[l-1]:o.shape[l-2],p=a?r.shape[c-2]:r.shape[c-1],f=o.shape.slice(0,-2),m=r.shape.slice(0,-2),g=K(f),x=K(m),w=$t(o.shape.slice(0,-2),r.shape.slice(0,-2)).concat([d,p]);T(u===h,()=>`Error in matMul: inner shapes (${u}) and (${h}) of Tensors with shapes ${o.shape} and ${r.shape} and transposeA=${i} and transposeB=${a} must match.`);const y=i?[g,u,d]:[g,d,u],C=a?[x,p,h]:[x,h,p],I=Kt({inputs:{x:o},backend:e,attrs:{shape:y}}),v=Kt({inputs:{x:r},backend:e,attrs:{shape:C}}),N=i?I.shape[1]:I.shape[2],S=i?I.shape[2]:I.shape[1],k=a?v.shape[1]:v.shape[2],$=Math.max(g,x),E=e.data.get(I.dataId).values,R=e.data.get(v.dataId).values,A=ft(I.shape),F=ft(v.shape),[_,B,O]=i?[A[0],1,A[1]]:[A[0],A[1],1],[V,G,H]=a?[1,F[1],F[0]]:[F[1],1,F[0]],j=S*k,Y=kt([$,S,k],I.dtype),et=Y.values,Q=e.blockSize;for(let st=0;st<$;st++){const ct=st%g,pt=st%x;for(let ht=0;ht<S;ht+=Q){const xt=Math.min(ht+Q,S);for(let nt=0;nt<k;nt+=Q){const wt=Math.min(nt+Q,k);for(let rt=0;rt<N;rt+=Q){const Ot=Math.min(rt+Q,N);for(let Rt=ht;Rt<xt;Rt++)for(let Ct=nt;Ct<wt;Ct++){let At=0;for(let Mt=rt;Mt<Ot;Mt++){const Re=E[ct*_+Rt*B+Mt*O],Ht=R[Mt*V+Ct*G+pt*H];At+=Re*Ht}et[st*j+(Rt*k+Ct)]+=At}}}}}return e.disposeIntermediateTensorInfo(I),e.disposeIntermediateTensorInfo(v),e.makeTensorInfo(w,Y.dtype,Y.values)}const SA={kernelName:Ea,backendName:"cpu",kernelFunc:D1};function NA(n){const{inputs:t,backend:e,attrs:s}=n,{a:o,b:r,bias:i,preluActivationWeights:a}=t,{transposeA:l,transposeB:c,activation:u,leakyreluAlpha:h}=s;let d,p,f;const m=[];d=D1({inputs:{a:o,b:r},attrs:{transposeA:l,transposeB:c},backend:e}),i&&(p=lr({inputs:{a:d,b:i},backend:e}),m.push(d),d=p),u&&(f=Tc(e,d,u,a,h),m.push(d),d=f);for(const x of m)e.disposeIntermediateTensorInfo(x);return d}const TA={kernelName:vl,backendName:"cpu",kernelFunc:NA};const EA=Wt(Tr,n=>Math.acos(n)),RA={kernelName:Tr,backendName:"cpu",kernelFunc:EA};const AA=Wt(Er,n=>Math.acosh(n)),DA={kernelName:Er,backendName:"cpu",kernelFunc:AA};function FA(n){const{inputs:t,backend:e}=n,s=t;ut(t,"addN");const o=s.map(a=>e.data.get(a.dataId).values),r=kt(s[0].shape,s[0].dtype),i=r.values;for(let a=0;a<s.length;a++){const l=o[a];for(let c=0;c<i.length;c++)i[c]+=l[c]}return e.makeTensorInfo(r.shape,r.dtype,r.values)}const _A={kernelName:du,backendName:"cpu",kernelFunc:FA};function OA(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,keepDims:i}=s;ut(o,"all");const a=vt(r,o.shape);let l=a;const c=Jt(l,o.shape.length);let u=o;c!=null&&(u=tn({inputs:{x:o},backend:e,attrs:{perm:c}}),l=ie(l.length,o.shape.length)),Ne("all",l,u.shape.length);const[h,d]=$e(u.shape,l),p=K(d),f=Oe(K(h),u.dtype),m=e.data.get(u.dataId).values;for(let x=0;x<f.length;++x){const b=x*p;let w=m[b];for(let y=0;y<p;++y){const C=m[b+y];w=w&&C}f[x]=w}c!=null&&e.disposeIntermediateTensorInfo(u);const g=e.makeTensorInfo(h,u.dtype,f);if(i){const x=he(h,a),b=Kt({inputs:{x:g},backend:e,attrs:{shape:x}});return e.disposeIntermediateTensorInfo(g),b}return g}const MA={kernelName:pu,backendName:"cpu",kernelFunc:OA};function LA(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,keepDims:i}=s;ut(o,"any");const a=vt(r,o.shape);let l=a;const c=Jt(l,o.shape.length);let u=o;c!=null&&(u=tn({inputs:{x:o},backend:e,attrs:{perm:c}}),l=ie(l.length,o.shape.length)),Ne("any",l,u.shape.length);const[h,d]=$e(u.shape,l),p=K(d),f=Oe(K(h),u.dtype),m=e.data.get(u.dataId).values;for(let x=0;x<f.length;++x){const b=x*p;let w=m[b];for(let y=0;y<p;++y){const C=m[b+y];w=w||C}f[x]=w}c!=null&&e.disposeIntermediateTensorInfo(u);const g=e.makeTensorInfo(h,u.dtype,f);if(i){const x=he(h,a),b=Kt({inputs:{x:g},backend:e,attrs:{shape:x}});return e.disposeIntermediateTensorInfo(g),b}return g}const PA={kernelName:fu,backendName:"cpu",kernelFunc:LA};function BA(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r}=s;ut(o,"argMax");let i=vt(r,o.shape);const a=Jt(i,o.shape.length);let l=o;const c=[];a!=null&&(l=tn({inputs:{x:o},backend:e,attrs:{perm:a}}),c.push(l),i=ie(i.length,l.shape.length)),i=[i[0]],Ne("argMax",i,l.shape.length);const[u,h]=$e(l.shape,i),d=K(u),p=Oe(d,"int32"),f=K(h),m=e.data.get(l.dataId).values;for(let g=0;g<p.length;++g){const x=g*f;let b=m[x],w=0;for(let y=0;y<f;++y){const C=m[x+y];C>b&&(b=C,w=y)}p[g]=w}return c.forEach(g=>e.disposeIntermediateTensorInfo(g)),e.makeTensorInfo(u,"int32",p)}const zA={kernelName:ka,backendName:"cpu",kernelFunc:BA};function VA(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r}=s;ut(o,"argMin");let i=vt(r,o.shape);const a=Jt(i,o.shape.length);let l=o;const c=[];a!=null&&(l=tn({inputs:{x:o},backend:e,attrs:{perm:a}}),c.push(l),i=ie(i.length,l.shape.length)),i=[i[0]],Ne("argMin",i,l.shape.length);const[u,h]=$e(l.shape,i),d=K(u),p=Oe(d,"int32"),f=K(h),m=e.data.get(l.dataId).values;for(let g=0;g<p.length;++g){const x=g*f;let b=m[x],w=0;for(let y=0;y<f;++y){const C=m[x+y];C<b&&(b=C,w=y)}p[g]=w}return c.forEach(g=>e.disposeIntermediateTensorInfo(g)),e.makeTensorInfo(u,"int32",p)}const WA={kernelName:Sa,backendName:"cpu",kernelFunc:VA};const UA=Wt(Rr,n=>Math.asin(n)),GA={kernelName:Rr,backendName:"cpu",kernelFunc:UA};const HA=Wt(Ar,n=>Math.asinh(n)),qA={kernelName:Ar,backendName:"cpu",kernelFunc:HA};const XA=Wt(Dr,n=>Math.atan(n)),KA={kernelName:Dr,backendName:"cpu",kernelFunc:XA};const jA=ce((n,t)=>Math.atan2(n,t)),YA=ye(_r,jA),ZA={kernelName:_r,backendName:"cpu",kernelFunc:YA};const QA=Wt(Fr,n=>Math.atanh(n)),JA={kernelName:Fr,backendName:"cpu",kernelFunc:QA};function dp(n,t,e,s,o,r){const i=o.strideHeight,a=o.strideWidth,l=o.dilationHeight,c=o.dilationWidth,u=o.effectiveFilterHeight,h=o.effectiveFilterWidth,d=o.padInfo.top,p=o.padInfo.left,f=r==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,m=kt(o.outShape,e),g=m.values,x=o.outShape[1]*o.outShape[2]*o.outShape[3],b=o.outShape[2]*o.outShape[3],w=o.outShape[3];for(let y=0;y<o.batchSize;++y){const C=y*x,I=y*s[0];for(let v=0;v<o.inChannels;++v)for(let N=0;N<o.outHeight;++N){const S=N*i-d,k=Math.max(0,S),$=Math.min(o.inHeight,u+S),E=C+N*b;for(let R=0;R<o.outWidth;++R){const A=R*a-p,F=Math.max(0,A),_=Math.min(o.inWidth,h+A);let B=f,O=0,V=0;for(let H=k;H<$;H+=l){const j=I+H*s[1];for(let Y=F;Y<_;Y+=c){const et=j+Y*s[2],Q=n[et+v];r==="max"&&Q>B?B=Q:r==="avg"&&(O+=Q,V++)}if(isNaN(B))break}const G=E+R*w+v;g[G]=r==="avg"?O/V:B}}}return m}function F1(n,t,e,s,o=!1,r=!1){const i=kt(s.outShape,"int32"),a=s.strideHeight,l=s.strideWidth,c=s.dilationHeight,u=s.dilationWidth,h=s.effectiveFilterHeight,d=s.effectiveFilterWidth,p=s.padInfo.top,f=s.padInfo.left,m=kt(t,e,n);for(let g=0;g<s.batchSize;++g)for(let x=0;x<s.inChannels;++x)for(let b=0;b<s.outHeight;++b){const w=b*a-p;let y=w;for(;y<0;)y+=c;const C=Math.min(s.inHeight,h+w);for(let I=0;I<s.outWidth;++I){const v=I*l-f;let N=v;for(;N<0;)N+=u;const S=Math.min(s.inWidth,d+v);let k=Number.NEGATIVE_INFINITY,$=-1;for(let E=y;E<C;E+=c){const R=E-w;for(let A=N;A<S;A+=u){const F=A-v,_=m.get(g,E,A,x);_>k&&(k=_,o?$=r?((g*s.inHeight+E)*s.inWidth+A)*s.inChannels+x:(E*s.inWidth+A)*s.inChannels+x:$=R*d+F)}}i.set($,g,b,I,x)}}return i}function _1(n,t,e,s,o,r){const i=o.strideDepth,a=o.strideHeight,l=o.strideWidth,c=o.dilationDepth,u=o.dilationHeight,h=o.dilationWidth,d=o.effectiveFilterDepth,p=o.effectiveFilterHeight,f=o.effectiveFilterWidth,m=o.padInfo.front,g=o.padInfo.top,x=o.padInfo.left,b=r==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,w=kt(o.outShape,e),y=w.values,C=o.outShape[1]*o.outShape[2]*o.outShape[3]*o.outShape[4],I=o.outShape[2]*o.outShape[3]*o.outShape[4],v=o.outShape[3]*o.outShape[4],N=o.outShape[4];for(let S=0;S<o.batchSize;++S){const k=S*C,$=S*s[0];for(let E=0;E<o.inChannels;++E)for(let R=0;R<o.outDepth;++R){const A=R*i-m;let F=A;for(;F<0;)F+=c;const _=Math.min(o.inDepth,d+A),B=k+R*I;for(let O=0;O<o.outHeight;++O){const V=O*a-g;let G=V;for(;G<0;)G+=u;const H=Math.min(o.inHeight,p+V),j=B+O*v;for(let Y=0;Y<o.outWidth;++Y){const et=Y*l-x;let Q=et;for(;Q<0;)Q+=h;const st=Math.min(o.inWidth,f+et),ct=j+Y*N;let pt=b,ht=0,xt=0;for(let wt=F;wt<_;wt+=c){const rt=$+wt*s[1];for(let Ot=G;Ot<H;Ot+=u){const Rt=rt+Ot*s[2];for(let Ct=Q;Ct<st;Ct+=h){const At=Rt+Ct*s[3],Mt=n[At+E];if(r==="max"&&Mt>pt?pt=Mt:r==="avg"&&(ht+=Mt,xt++),isNaN(pt))break}if(isNaN(pt))break}if(isNaN(pt))break}const nt=ct+E;y[nt]=r==="avg"?ht/Math.max(xt,1):pt}}}}return w}function tD(n,t){const e=kt(t.outShape,"int32"),s=t.strideDepth,o=t.strideHeight,r=t.strideWidth,i=t.dilationDepth,a=t.dilationHeight,l=t.dilationWidth,c=t.effectiveFilterDepth,u=t.effectiveFilterHeight,h=t.effectiveFilterWidth,d=t.padInfo.front,p=t.padInfo.top,f=t.padInfo.left;for(let m=0;m<t.batchSize;++m)for(let g=0;g<t.inChannels;++g)for(let x=0;x<t.outDepth;++x){const b=x*s-d;let w=b;for(;w<0;)w+=i;const y=Math.min(t.inDepth,c+b);for(let C=0;C<t.outHeight;++C){const I=C*o-p;let v=I;for(;v<0;)v+=a;const N=Math.min(t.inHeight,u+I);for(let S=0;S<t.outWidth;++S){const k=S*r-f;let $=k;for(;$<0;)$+=l;const E=Math.min(t.inWidth,h+k);let R=Number.NEGATIVE_INFINITY,A=-1;for(let F=w;F<y;F+=i){const _=F-b;for(let B=v;B<N;B+=a){const O=B-I;for(let V=$;V<E;V+=l){const G=V-k,H=n.get(m,F,B,V,g);H>=R&&(R=H,A=_*u*h+O*u+G)}}}e.set(A,m,x,C,S,g)}}}return e}function eD(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t;ut(o,"avgPool");const{filterSize:r,strides:i,pad:a,dimRoundingMode:l}=s,c=1;T(Me(i,c),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${c}'`);const u=In(o.shape,r,i,c,a,l);let h;if(u.filterWidth===1&&u.filterHeight===1&&Pt(u.inShape,u.outShape))h=ls({inputs:{x:o},backend:e});else{const d=e.data.get(o.dataId).values,p=ft(o.shape),f=dp(d,o.shape,o.dtype,p,u,"avg");h=e.makeTensorInfo(u.outShape,o.dtype,f.values)}return h}const nD={kernelName:Na,backendName:"cpu",kernelFunc:eD};function sD(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{filterSize:r,strides:i,pad:a,dimRoundingMode:l,dataFormat:c}=s;ut(o,"avgPool3d");const u=fs(o.shape,r,i,1,a,l,c),h=e.data.get(o.dataId).values,d=_1(h,o.shape,o.dtype,ft(o.shape),u,"avg");return e.makeTensorInfo(d.shape,"float32",d.values)}const oD={kernelName:Ta,backendName:"cpu",kernelFunc:sD};function rD(n){const{inputs:t,backend:e,attrs:s}=n,{dy:o,input:r}=t,{filterSize:i,strides:a,pad:l,dimRoundingMode:c}=s;ut([o,r],"avgPool3DGrad");const u=fs(r.shape,i,a,1,l,c),h=u.strideDepth,d=u.strideHeight,p=u.strideWidth,f=u.filterDepth,m=u.filterHeight,g=u.filterWidth,x=u.dilationDepth,b=u.dilationHeight,w=u.dilationWidth,y=u.effectiveFilterDepth,C=u.effectiveFilterHeight,I=u.effectiveFilterWidth,v=y-1-u.padInfo.front,N=I-1-u.padInfo.left,S=C-1-u.padInfo.top,k=kt(r.shape,"float32"),$=1/(f*m*g),E=e.bufferSync(o);for(let R=0;R<u.batchSize;++R)for(let A=0;A<u.inChannels;++A)for(let F=0;F<u.inDepth;++F)for(let _=0;_<u.inHeight;++_)for(let B=0;B<u.inWidth;++B){const O=F-v,V=_-S,G=B-N;let H=0;for(let j=0;j<y;j+=x){const Y=(O+j)/h;if(!(Y<0||Y>=u.outDepth||Math.floor(Y)!==Y))for(let et=0;et<C;et+=b){const Q=(V+et)/d;if(!(Q<0||Q>=u.outHeight||Math.floor(Q)!==Q))for(let st=0;st<I;st+=w){const ct=(G+st)/p;if(ct<0||ct>=u.outWidth||Math.floor(ct)!==ct)continue;const pt=E.get(R,Y,Q,ct,A);H+=pt}}}k.set(H*$,R,F,_,B,A)}return e.makeTensorInfo(k.shape,k.dtype,k.values)}const iD={kernelName:gu,backendName:"cpu",kernelFunc:rD};function aD(n){const{inputs:t,backend:e,attrs:s}=n,{dy:o,input:r}=t,i=r;ut([o,r],"avgPoolGrad");const{filterSize:a,strides:l,pad:c}=s,u=In(i.shape,a,l,1,c),h=u.strideHeight,d=u.strideWidth,p=u.filterHeight,f=u.filterWidth,m=u.dilationHeight,g=u.dilationWidth,x=u.effectiveFilterHeight,b=u.effectiveFilterWidth,w=b-1-u.padInfo.left,y=x-1-u.padInfo.top,C=kt(i.shape,"float32"),I=1/(p*f),v=e.data.get(o.dataId).values,N=kt(o.shape,"float32",v);for(let S=0;S<u.batchSize;++S)for(let k=0;k<u.inChannels;++k)for(let $=0;$<u.inHeight;++$)for(let E=0;E<u.inWidth;++E){const R=$-y,A=E-w;let F=0;for(let _=0;_<x;_+=m){const B=(R+_)/h;if(!(B<0||B>=u.outHeight||Math.floor(B)!==B))for(let O=0;O<b;O+=g){const V=(A+O)/d;if(V<0||V>=u.outWidth||Math.floor(V)!==V)continue;const G=N.get(S,B,V,k);F+=G}}C.set(F*I,S,$,E,k)}return e.makeTensorInfo(C.shape,C.dtype,C.values)}const lD={kernelName:mu,backendName:"cpu",kernelFunc:aD};function cD(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,scale:r,offset:i,mean:a,variance:l}=t;T(a.shape.length===l.shape.length,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),T(i==null||a.shape.length===i.shape.length,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),T(r==null||a.shape.length===r.shape.length,()=>"Batch normalization gradient requires mean and scale to have equal ranks."),ut([o,a,l,r,i],"batchNorm");let{varianceEpsilon:c}=s;c==null&&(c=.001);const u=e.data.get(o.dataId).values,h=e.data.get(a.dataId).values,d=e.data.get(l.dataId).values,p=r?e.data.get(r.dataId).values:new Float32Array([1]),f=i?e.data.get(i.dataId).values:new Float32Array([0]),m=new Float32Array(u.length),g=f.length,x=p.length,b=d.length,w=h.length;let y=0,C=0,I=0,v=0;for(let N=0;N<u.length;++N)m[N]=f[y++]+(u[N]-h[C++])*p[I++]/Math.sqrt(d[v++]+c),y>=g&&(y=0),C>=w&&(C=0),I>=x&&(I=0),v>=b&&(v=0);return e.makeTensorInfo(o.shape,o.dtype,m)}const uD={kernelName:Va,backendName:"cpu",kernelFunc:cD};function hD(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{blockShape:r,crops:i}=s;ut([o],"batchToSpaceND");const a=r.reduce((x,b)=>x*b),l=Bi(o.shape,r,a),c=zi(l.length,r.length),u=Vi(o.shape,r,a),h=rd(i,r.length),d=id(u,i,r.length),p=Kt({inputs:{x:o},backend:e,attrs:{shape:l}}),f=tn({inputs:{x:p},backend:e,attrs:{perm:c}}),m=Kt({inputs:{x:f},backend:e,attrs:{shape:u}}),g=Ro({inputs:{x:m},backend:e,attrs:{begin:h,size:d}});return e.disposeIntermediateTensorInfo(p),e.disposeIntermediateTensorInfo(f),e.disposeIntermediateTensorInfo(m),g}const dD={kernelName:Ra,backendName:"cpu",kernelFunc:hD};function pD(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,weights:r}=t,{size:i}=s,a=e.data.get(o.dataId).values,l=e.data.get(r.dataId).values,c=ap(a,l,r.dtype,r.shape,i);return e.makeTensorInfo([i],r.dtype,c)}const fD={kernelName:xu,backendName:"cpu",kernelFunc:pD};function mD(n){const{inputs:t,backend:e}=n,{s0:s,s1:o}=t,r=e.data.get(s.dataId).values,i=e.data.get(o.dataId).values,a=$t(Array.from(r),Array.from(i));return e.makeTensorInfo([a.length],"int32",Int32Array.from(a))}const gD={kernelName:jp,backendName:"cpu",kernelFunc:mD};const xD=Wt(Lr,(n,t)=>{const e=t;return n>e.clipValueMax?e.clipValueMax:n<e.clipValueMin?e.clipValueMin:n}),bD={kernelName:Lr,backendName:"cpu",kernelFunc:xD};const yD={kernelName:Aa,backendName:"cpu",kernelFunc:n=>{const{x:t}=n.inputs,e=n.backend,s=new Float32Array(K(t.shape)),o=e.data.get(t.dataId),r=o.complexTensorInfos.real,i=o.complexTensorInfos.imag,a=e.data.get(r.dataId).values,l=e.data.get(i.dataId).values;for(let c=0;c<a.length;c++){const u=a[c],h=l[c];s[c]=Math.hypot(u,h)}return e.makeOutput(s,t.shape,"float32")}};function cr(n){const{inputs:t,backend:e}=n,{input:s}=t,o=e.data.get(s.dataId).complexTensorInfos.imag,r=e.data.get(o.dataId).values;return e.makeTensorInfo(o.shape,o.dtype,r)}const wD={kernelName:Lu,backendName:"cpu",kernelFunc:cr};function ur(n){const{inputs:t,backend:e,attrs:s}=n,{axis:o}=s,r=vt(o,t[0].shape)[0],i=t.map(m=>m.shape);nd(i,r);let a=es(t.map(m=>m.shape),r);if(K(a)===0)return e.makeTensorInfo(a,t[0].dtype,[]);const l=t.filter(m=>K(m.shape)>0);if(l.length===1)return ls({inputs:{x:l[0]},backend:e});if(l[0].dtype==="complex64"){const m=l.map(y=>To({inputs:{input:y},backend:e})),g=l.map(y=>cr({inputs:{input:y},backend:e})),x=ur({inputs:m,backend:e,attrs:{axis:r}}),b=ur({inputs:g,backend:e,attrs:{axis:r}}),w=ln({inputs:{real:x,imag:b},backend:e});return m.forEach(y=>e.disposeIntermediateTensorInfo(y)),g.forEach(y=>e.disposeIntermediateTensorInfo(y)),e.disposeIntermediateTensorInfo(x),e.disposeIntermediateTensorInfo(b),w}const c=l.map(m=>{const x=[-1,K(m.shape.slice(r))];return Kt({inputs:{x:m},backend:e,attrs:{shape:x}})}),u=c.map(m=>({vals:e.data.get(m.dataId).values,shape:m.shape}));a=es(c.map(m=>m.shape),1);const h=c[0].shape[0]===1,d=O0(u,a,t[0].dtype,h),p=es(l.map(m=>m.shape),r),f=e.makeTensorInfo(p,t[0].dtype,d);return c.forEach(m=>e.disposeIntermediateTensorInfo(m)),f}const CD={kernelName:Da,backendName:"cpu",kernelFunc:ur};function O1(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,filter:r}=t,{strides:i,pad:a,dataFormat:l,dilations:c,dimRoundingMode:u}=s;ut([o,r],"conv2d");const h=ms(l),d=Se(o.shape,r.shape,i,c,a,u,!1,h),p=d.filterHeight,f=d.filterWidth,m=d.dilationHeight,g=d.dilationWidth,x=d.padInfo.left,b=d.padInfo.top,w=d.dataFormat==="channelsLast",y=new ke(d.outShape,o.dtype),C=ft(o.shape),I=ft(r.shape),v=C[0],N=w?C[1]:C[2],S=w?C[2]:1,k=w?1:C[1],$=y.strides[0],E=w?y.strides[1]:y.strides[2],R=w?y.strides[2]:1,A=w?1:y.strides[1],F=e.data.get(o.dataId).values,_=e.data.get(r.dataId).values,B=y.values;for(let O=0;O<d.batchSize;++O){const V=O*v,G=O*$;for(let H=0;H<d.outHeight;++H){const j=G+H*E,Y=H*d.strideHeight-b;for(let et=0;et<p;++et){const Q=Y+et*m;if(Q<0||Q>=d.inHeight)continue;const st=et*I[0],ct=V+Q*N;for(let pt=0;pt<d.outWidth;++pt){const ht=j+pt*R,xt=pt*d.strideWidth-x;for(let nt=0;nt<f;++nt){const wt=xt+nt*g;if(wt<0||wt>=d.inWidth)continue;const rt=st+nt*I[1],Ot=ct+wt*S;let Rt=rt;for(let Ct=0;Ct<d.inChannels;++Ct){const At=F[Ot+Ct*k];for(let Mt=0;Mt<d.outChannels;++Mt)B[ht+Mt*A]+=At*_[Rt+Mt];Rt+=d.outChannels}}}}}}return e.makeTensorInfo(y.shape,y.dtype,B)}const $D={kernelName:Fa,backendName:"cpu",kernelFunc:O1};function ID(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,dy:r}=t,{strides:i,pad:a,dataFormat:l,dimRoundingMode:c,filterShape:u}=s;ut([o,r],"conv2dBackpropFilter");const h=ms(l),d=Se(o.shape,u,i,1,a,c,!1,h),{strideHeight:p,strideWidth:f,filterHeight:m,filterWidth:g}=d,x=d.dataFormat==="channelsLast",b=new ke(d.filterShape,"float32"),w=d.padInfo.left,y=d.padInfo.top,C=e.data.get(o.dataId).values,I=e.data.get(r.dataId).values,v=new ke(o.shape,o.dtype,C),N=new ke(r.shape,r.dtype,I);for(let S=0;S<m;++S){const k=Math.max(0,Math.ceil((y-S)/p)),$=Math.min(d.outHeight,(d.inHeight+y-S)/p);for(let E=0;E<g;++E){const R=Math.max(0,Math.ceil((w-E)/f)),A=Math.min(d.outWidth,(d.inWidth+w-E)/f);for(let F=0;F<d.inChannels;++F)for(let _=0;_<d.outChannels;++_){let B=0;for(let O=0;O<d.batchSize;++O)for(let V=k;V<$;++V){const G=S+V*p-y;for(let H=R;H<A;++H){const j=E+H*f-w;x?B+=v.get(O,G,j,F)*N.get(O,V,H,_):B+=v.get(O,F,G,j)*N.get(O,_,V,H)}}b.set(B,S,E,F,_)}}}return e.makeTensorInfo(b.shape,b.dtype,b.values)}const vD={kernelName:wu,backendName:"cpu",kernelFunc:ID};function kD(n){const{inputs:t,backend:e,attrs:s}=n,{dy:o,filter:r}=t,{inputShape:i,strides:a,pad:l,dataFormat:c,dimRoundingMode:u}=s;ut([o,r],"conv2dBackpropInput");const h=ft(r.shape),d=ft(o.shape);let p=ms(c);const f=Se(i,r.shape,a,1,l,u,!1,p),m=new ke(f.inShape,"float32"),g=m.values,x=e.data.get(o.dataId).values,b=e.data.get(r.dataId).values,[w,y,C]=h,{batchSize:I,filterHeight:v,filterWidth:N,inChannels:S,inHeight:k,inWidth:$,outChannels:E,outHeight:R,outWidth:A,strideHeight:F,strideWidth:_}=f;p=f.dataFormat;const B=v-1-f.padInfo.top,O=N-1-f.padInfo.left,V=p==="channelsLast",G=m.strides[0],H=V?m.strides[1]:m.strides[2],j=V?m.strides[2]:1,Y=V?1:m.strides[1],et=d[0],Q=V?d[1]:d[2],st=V?d[2]:1,ct=V?1:d[1];for(let pt=0;pt<I;++pt)for(let ht=0;ht<S;++ht)for(let xt=0;xt<k;++xt){const nt=xt-B,wt=Math.max(0,Math.ceil(nt/F)),rt=Math.min(R,(v+nt)/F);for(let Ot=0;Ot<$;++Ot){const Rt=Ot-O,Ct=Math.max(0,Math.ceil(Rt/_)),At=Math.min(A,(N+Rt)/_);let Mt=0;for(let Ht=wt;Ht<rt;++Ht){const Ae=Ht*F-nt;for(let ee=Ct;ee<At;++ee){const wn=ee*_-Rt,Xe=et*pt+Q*Ht+st*ee,ne=w*(v-1-Ae)+y*(N-1-wn)+C*ht;for(let se=0;se<E;++se){const Cn=x[Xe+ct*se],dn=b[ne+se];Mt+=Cn*dn}}}const Re=G*pt+H*xt+j*Ot+Y*ht;g[Re]=Mt}}return e.makeTensorInfo(m.shape,m.dtype,m.values)}const SD={kernelName:_a,backendName:"cpu",kernelFunc:kD};function ND(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,filter:r}=t,{strides:i,pad:a,dilations:l}=s;ut([o,r],"conv3d");const c=Os(o.shape,r.shape,i,l,a),{filterDepth:u,filterHeight:h,filterWidth:d,dilationDepth:p,dilationHeight:f,dilationWidth:m,padInfo:g}=c,x=g.front,b=g.left,w=g.top,y=new ke(c.outShape,o.dtype),C=e.data.get(o.dataId).values,I=e.data.get(r.dataId).values,v=y.values,N=ft(o.shape),S=ft(r.shape);for(let k=0;k<c.batchSize;++k){const $=k*N[0],E=k*y.strides[0];for(let R=0;R<c.outDepth;++R){const A=E+R*y.strides[1],F=R*c.strideDepth-x;for(let _=0;_<u;++_){const B=F+_*p;if(B<0||B>=c.inDepth)continue;const O=_*S[0],V=$+B*N[1];for(let G=0;G<c.outHeight;++G){const H=A+G*y.strides[2],j=G*c.strideHeight-w;for(let Y=0;Y<h;++Y){const et=j+Y*f;if(et<0||et>=c.inHeight)continue;const Q=O+Y*S[1],st=V+et*N[2];for(let ct=0;ct<c.outWidth;++ct){const pt=H+ct*c.outChannels,ht=ct*c.strideWidth-b;for(let xt=0;xt<d;++xt){const nt=ht+xt*m;if(nt<0||nt>=c.inWidth)continue;const wt=Q+xt*S[2],rt=st+nt*c.inChannels;let Ot=wt;for(let Rt=0;Rt<c.inChannels;++Rt){const Ct=C[rt+Rt];for(let At=0;At<c.outChannels;++At)v[pt+At]+=Ct*I[Ot+At];Ot+=c.outChannels}}}}}}}}return e.makeTensorInfo(y.shape,y.dtype,y.values)}const TD={kernelName:Oa,backendName:"cpu",kernelFunc:ND};function ED(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,dy:r}=t,{strides:i,pad:a,filterShape:l}=s;ut([o,r],"conv3dBackpropFilterV2");const c=ft(o.shape),u=ft(r.shape),h=Os(o.shape,l,i,1,a),d=h.strideDepth,p=h.strideHeight,f=h.strideWidth,m=h.filterDepth,g=h.filterHeight,x=h.filterWidth,b=new ke(h.filterShape,"float32"),w=b.values,[y,C,I,v]=b.strides,N=e.data.get(r.dataId).values,[S,k,$,E]=u,R=e.data.get(o.dataId).values,[A,F,_,B]=c,O=h.padInfo.front,V=h.padInfo.left,G=h.padInfo.top;for(let H=0;H<m;++H){const j=Math.max(0,Math.ceil((O-H)/d)),Y=Math.min(h.outDepth,(h.inDepth+O-H)/d),et=H*y;for(let Q=0;Q<g;++Q){const st=Math.max(0,Math.ceil((G-Q)/p)),ct=Math.min(h.outHeight,(h.inHeight+G-Q)/p),pt=Q*C+et;for(let ht=0;ht<x;++ht){const xt=Math.max(0,Math.ceil((V-ht)/f)),nt=Math.min(h.outWidth,(h.inWidth+V-ht)/f),wt=ht*I+pt;for(let rt=0;rt<h.inChannels;++rt){const Ot=rt*v+wt;for(let Rt=0;Rt<h.outChannels;++Rt){let Ct=0;for(let At=0;At<h.batchSize;++At){const Mt=At*A,Re=At*S;for(let Ht=j;Ht<Y;++Ht){const ee=(H+Ht*d-O)*F+Mt,wn=Ht*k+Re;for(let Xe=st;Xe<ct;++Xe){const se=(Q+Xe*p-G)*_+ee,Cn=Xe*$+wn;for(let dn=xt;dn<nt;++dn){const Ca=(ht+dn*f-V)*B+se,ot=dn*E+Cn;Ct+=R[Ca+rt]*N[ot+Rt]}}}}w[Ot+Rt]=Ct}}}}}return e.makeTensorInfo(b.shape,b.dtype,b.values)}const RD={kernelName:Cu,backendName:"cpu",kernelFunc:ED};function AD(n){const{inputs:t,backend:e,attrs:s}=n,{dy:o,filter:r}=t,{pad:i,strides:a,inputShape:l}=s;ut([o],"conv3dBackpropInputV2");const c=ft(o.shape),u=ft(r.shape),h=Os(l,r.shape,a,1,i),d=new ke(h.inShape,"float32"),p=d.values,[f,m,g,x]=d.strides,b=e.data.get(o.dataId).values,[w,y,C,I]=c,v=e.data.get(r.dataId).values,[N,S,k,$]=u,{batchSize:E,filterDepth:R,filterHeight:A,filterWidth:F,inChannels:_,inDepth:B,inHeight:O,inWidth:V,outChannels:G,outDepth:H,outHeight:j,outWidth:Y,strideDepth:et,strideHeight:Q,strideWidth:st}=h,ct=R-1-h.padInfo.front,pt=A-1-h.padInfo.top,ht=F-1-h.padInfo.left;for(let xt=0;xt<E;++xt)for(let nt=0;nt<_;++nt)for(let wt=0;wt<B;++wt){const rt=wt-ct,Ot=Math.max(0,Math.ceil(rt/et)),Rt=Math.min(H,(R+rt)/et);for(let Ct=0;Ct<O;++Ct){const At=Ct-pt,Mt=Math.max(0,Math.ceil(At/Q)),Re=Math.min(j,(A+At)/Q);for(let Ht=0;Ht<V;++Ht){const Ae=Ht-ht,ee=Math.max(0,Math.ceil(Ae/st)),wn=Math.min(Y,(F+Ae)/st);let Xe=0;for(let ne=Ot;ne<Rt;++ne){const se=ne*et-rt;for(let Cn=Mt;Cn<Re;++Cn){const dn=Cn*Q-At;for(let Ns=ee;Ns<wn;++Ns){const Ca=Ns*st-Ae,ot=w*xt+y*ne+C*Cn+I*Ns,Et=N*(R-1-se)+S*(A-1-dn)+k*(F-1-Ca)+$*nt;for(let Tt=0;Tt<G;++Tt){const De=b[ot+Tt],Yt=v[Et+Tt];Xe+=De*Yt}}}}p[f*xt+m*wt+g*Ct+x*Ht+nt]=Xe}}}return e.makeTensorInfo(d.shape,d.dtype,d.values)}const DD={kernelName:$u,backendName:"cpu",kernelFunc:AD};const FD=Wt(Pr,n=>Math.cos(n)),_D={kernelName:Pr,backendName:"cpu",kernelFunc:FD};const OD=Wt(Br,n=>Math.cosh(n)),MD={kernelName:Br,backendName:"cpu",kernelFunc:OD};function LD(n){const{inputs:t,backend:e,attrs:s}=n,{image:o,boxes:r,boxInd:i}=t,{cropSize:a,method:l,extrapolationValue:c}=s,[u,h,d,p]=o.shape,f=r.shape[0],[m,g]=a,x=kt([f,m,g,p],"float32"),b=e.data.get(r.dataId).values,w=e.data.get(i.dataId).values,y=e.data.get(o.dataId).values,C=ft(o.shape),I=ft(x.shape);for(let v=0;v<f;v++){const N=v*4,S=b[N],k=b[N+1],$=b[N+2],E=b[N+3],R=w[v];if(R>=u)continue;const A=m>1?($-S)*(h-1)/(m-1):0,F=g>1?(E-k)*(d-1)/(g-1):0;for(let _=0;_<m;_++){const B=m>1?S*(h-1)+_*A:.5*(S+$)*(h-1);if(B<0||B>h-1){for(let O=0;O<g;O++)for(let V=0;V<p;V++){const G=V+O*I[2]+_*I[1]+v*I[0];x.values[G]=c}continue}if(l==="bilinear"){const O=Math.floor(B),V=Math.ceil(B),G=B-O;for(let H=0;H<g;H++){const j=g>1?k*(d-1)+H*F:.5*(k+E)*(d-1);if(j<0||j>d-1){for(let st=0;st<p;st++){const ct=st+H*I[2]+_*I[1]+v*I[0];x.values[ct]=c}continue}const Y=Math.floor(j),et=Math.ceil(j),Q=j-Y;for(let st=0;st<p;st++){let ct=st+Y*C[2]+O*C[1]+R*C[0];const pt=y[ct];ct=st+et*C[2]+O*C[1]+R*C[0];const ht=y[ct];ct=st+Y*C[2]+V*C[1]+R*C[0];const xt=y[ct];ct=st+et*C[2]+V*C[1]+R*C[0];const nt=y[ct],wt=pt+(ht-pt)*Q,rt=xt+(nt-xt)*Q;ct=st+H*I[2]+_*I[1]+v*I[0],x.values[ct]=wt+(rt-wt)*G}}}else for(let O=0;O<g;++O){const V=g>1?k*(d-1)+O*F:.5*(k+E)*(d-1);if(V<0||V>d-1){for(let j=0;j<p;j++){const Y=j+O*I[2]+_*I[1]+v*I[0];x.values[Y]=c}continue}const G=Math.round(V),H=Math.round(B);for(let j=0;j<p;j++){const Y=j+G*C[2]+H*C[1]+R*C[0],et=j+O*I[2]+_*I[1]+v*I[0];x.values[et]=y[Y]}}}}return e.makeTensorInfo(x.shape,x.dtype,x.values)}const PD={kernelName:vu,backendName:"cpu",kernelFunc:LD};function BD(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,exclusive:i,reverse:a}=s;ut(o,"cumprod");const l=Jt([r],o.shape.length);let c=o;l!=null&&(c=tn({inputs:{x:o},backend:e,attrs:{perm:l}}));const u=ie(1,o.shape.length)[0];if(u!==c.shape.length-1)throw new Error(`backend.cumprod in CPU expects an inner-most axis=${c.shape.length-1} but got axis=${u}`);const h=sn(c.dtype,"int32"),d=lu(K(c.shape),h),p=e.data.get(c.dataId).values,f=c.shape[c.shape.length-1],m=a?(x,b)=>x+f-b-1:(x,b)=>x+b;for(let x=0;x<p.length;x+=f)for(let b=0;b<f;b++){const w=m(x,b);if(b===0)d[w]=i?1:p[w];else{const y=m(x,b-1);d[w]=i?p[y]*d[y]:p[w]*d[y]}}const g=e.makeTensorInfo(c.shape,h,d);if(l!=null){const x=Ms(l),b=tn({inputs:{x:g},backend:e,attrs:{perm:x}});return e.disposeIntermediateTensorInfo(g),e.disposeIntermediateTensorInfo(c),b}return g}const zD={kernelName:Iu,backendName:"cpu",kernelFunc:BD};function VD(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,exclusive:i,reverse:a}=s;ut(o,"cumsum");const l=Jt([r],o.shape.length);let c=o;l!=null&&(c=tn({inputs:{x:o},backend:e,attrs:{perm:l}}));const u=ie(1,o.shape.length)[0];if(u!==c.shape.length-1)throw new Error(`backend.cumsum in CPU expects an inner-most axis=${c.shape.length-1} but got axis=${u}`);const h=sn(c.dtype,"int32"),d=Oe(K(c.shape),h),p=e.data.get(c.dataId).values,f=c.shape[c.shape.length-1],m=a?(x,b)=>x+f-b-1:(x,b)=>x+b;for(let x=0;x<p.length;x+=f)for(let b=0;b<f;b++){const w=m(x,b);if(b===0)d[w]=i?0:p[w];else{const y=m(x,b-1);d[w]=i?p[y]+d[y]:p[w]+d[y]}}const g=e.makeTensorInfo(c.shape,h,d);if(l!=null){const x=Ms(l),b=tn({inputs:{x:g},backend:e,attrs:{perm:x}});return e.disposeIntermediateTensorInfo(g),e.disposeIntermediateTensorInfo(c),b}return g}const WD={kernelName:Ma,backendName:"cpu",kernelFunc:VD};function UD(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,weights:r}=t,{size:i,binaryOutput:a}=s;if(o.shape.length===1){const l=e.data.get(o.dataId).values,c=e.data.get(r.dataId).values,u=ap(l,c,r.dtype,r.shape,i);return e.makeTensorInfo([i],r.dtype,u)}else if(o.shape.length===2){const l=e.bufferSync(o),c=e.bufferSync(r),u=D0(l,c,i,a);return e.makeTensorInfo(u.shape,r.dtype,u.values)}throw new Error(`Error in denseBincount: input must be at most rank 2, but got rank${o.shape.length}.`)}const GD={kernelName:ku,backendName:"cpu",kernelFunc:UD};function HD(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{blockSize:r,dataFormat:i}=s;T(i==="NHWC",()=>`Only NHWC dataFormat supported on CPU for depthToSpace. Got ${i}`);const a=o.shape[0],l=o.shape[1],c=o.shape[2],u=o.shape[3],h=l*r,d=c*r,p=u/(r*r),f=e.data.get(o.dataId).values,m=new Float32Array(a*h*d*p);let g=0;for(let x=0;x<a;++x)for(let b=0;b<h;++b){const w=Math.floor(b/r),y=b%r;for(let C=0;C<d;++C){const I=Math.floor(C/r),v=C%r,N=(y*r+v)*p;for(let S=0;S<p;++S){const $=S+N+u*(I+c*(w+l*x));m[g++]=f[$]}}}return e.makeTensorInfo([a,h,d,p],o.dtype,m)}const qD={kernelName:Su,backendName:"cpu",kernelFunc:HD};function M1(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,filter:r}=t,{strides:i,pad:a,dilations:l,dimRoundingMode:c}=s;ut([o,r],"depthwiseConv2DNative");const u=ft(o.shape),h=ft(r.shape);let d=l;d==null&&(d=[1,1]),T(Me(i,d),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${i} and dilations '${d}'`);const p=Se(o.shape,r.shape,i,d,a,c,!0),{filterHeight:f,filterWidth:m,dilationHeight:g,dilationWidth:x,padInfo:b}=p,w=b.left,y=b.top,C=p.outChannels/p.inChannels,I=new ke(p.outShape,o.dtype),v=e.data.get(o.dataId).values,N=e.data.get(r.dataId).values,S=I.values;for(let k=0;k<p.batchSize;++k){const $=k*u[0],E=k*I.strides[0];for(let R=0;R<p.outHeight;++R){const A=E+R*I.strides[1],F=R*p.strideHeight-y;for(let _=0;_<f;++_){const B=F+_*g;if(B<0||B>=p.inHeight)continue;const O=_*h[0],V=$+B*u[1];for(let G=0;G<p.outWidth;++G){const H=A+G*I.strides[2],j=G*p.strideWidth-w;for(let Y=0;Y<m;++Y){const et=j+Y*x;if(et<0||et>=p.inWidth)continue;const Q=O+Y*h[1],st=V+et*p.inChannels;let ct=H,pt=Q;for(let ht=0;ht<p.inChannels;++ht){const xt=v[st+ht];for(let nt=0;nt<C;++nt)S[ct+nt]+=xt*N[pt+nt];ct+=C,pt+=C}}}}}}return e.makeTensorInfo(I.shape,I.dtype,I.values)}const XD={kernelName:La,backendName:"cpu",kernelFunc:M1};function KD(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,dy:r}=t,{strides:i,dilations:a,pad:l,dimRoundingMode:c,filterShape:u}=s;ut([o,r],"depthwiseConv2dNativeBackpropFilter");const h=Se(o.shape,u,i,a,l,c,!0),{strideHeight:d,strideWidth:p,filterHeight:f,filterWidth:m}=h,g=new ke(h.filterShape,"float32"),x=h.padInfo.left,b=h.padInfo.top,w=h.outChannels/h.inChannels,y=e.data.get(o.dataId).values,C=new ke(o.shape,o.dtype,y),I=e.data.get(r.dataId).values,v=new ke(r.shape,r.dtype,I);for(let N=0;N<f;++N){const S=Math.max(0,Math.ceil((b-N)/d)),k=Math.min(h.outHeight,(h.inHeight+b-N)/d);for(let $=0;$<m;++$){const E=Math.max(0,Math.ceil((x-$)/p)),R=Math.min(h.outWidth,(h.inWidth+x-$)/p);for(let A=0;A<h.outChannels;++A){const F=Math.trunc(A/w),_=A%w;let B=0;for(let O=0;O<h.batchSize;++O)for(let V=S;V<k;++V){const G=N+V*d-b;for(let H=E;H<R;++H){const j=$+H*p-x;B+=C.get(O,G,j,F)*v.get(O,V,H,A)}}g.set(B,N,$,F,_)}}}return e.makeTensorInfo(g.shape,g.dtype,g.values)}const jD={kernelName:Nu,backendName:"cpu",kernelFunc:KD};function YD(n){const{inputs:t,backend:e,attrs:s}=n,{dy:o,filter:r}=t,{strides:i,dilations:a,pad:l,dimRoundingMode:c,inputShape:u}=s;ut([o,r],"depthwiseConv2DNativeBackpropInput");const h=ft(o.shape),d=ft(r.shape),p=Se(u,r.shape,i,a,l,c,!0),f=new ke(p.inShape,"float32"),m=f.values,[g,x,b]=f.strides,w=e.data.get(o.dataId).values,[y,C,I]=h,v=e.data.get(r.dataId).values,[N,S,k]=d,{batchSize:$,filterHeight:E,filterWidth:R,inChannels:A,inHeight:F,inWidth:_,outChannels:B,outHeight:O,outWidth:V,strideHeight:G,strideWidth:H}=p,j=E-1-p.padInfo.top,Y=R-1-p.padInfo.left,et=B/A;for(let Q=0;Q<$;++Q)for(let st=0;st<A;++st)for(let ct=0;ct<F;++ct){const pt=ct-j,ht=Math.max(0,Math.ceil(pt/G)),xt=Math.min(O,(E+pt)/G);for(let nt=0;nt<_;++nt){const wt=nt-Y,rt=Math.max(0,Math.ceil(wt/H)),Ot=Math.min(V,(R+wt)/H);let Rt=0;for(let Ct=ht;Ct<xt;++Ct){const At=Ct*G-pt;for(let Mt=rt;Mt<Ot;++Mt){const Re=Mt*H-wt,Ht=y*Q+C*Ct+I*Mt,Ae=N*(E-1-At)+S*(R-1-Re)+k*st;for(let ee=0;ee<et;++ee){const wn=st*et+ee,Xe=w[Ht+wn],ne=v[Ae+ee];Rt+=Xe*ne}}}m[g*Q+x*ct+b*nt+st]=Rt}}return e.makeTensorInfo(f.shape,f.dtype,f.values)}const ZD={kernelName:Tu,backendName:"cpu",kernelFunc:YD};function QD(n){const{inputs:t,backend:e}=n,{x:s}=t,o=K(s.shape),r=e.data.get(s.dataId).values,i=kt([o,o],s.dtype),a=i.values;for(let c=0;c<r.length;c++)a[c*o+c]=r[c];const l=[...s.shape,...s.shape];return e.makeTensorInfo(l,i.dtype,i.values)}const JD={kernelName:Yp,backendName:"cpu",kernelFunc:QD};const tF={kernelName:Pa,backendName:"cpu",kernelFunc:({inputs:n,backend:t,attrs:e})=>{const{x:s,filter:o}=n,{strides:r,pad:i,dilations:a}=e,l=t,c=l.data.get(s.dataId).values,u=s.shape.length,h=l.data.get(o.dataId).values,d=o.shape.length,{batchSize:p,inHeight:f,inWidth:m,inChannels:g,outHeight:x,outWidth:b,padInfo:w,strideHeight:y,strideWidth:C,filterHeight:I,filterWidth:v,dilationHeight:N,dilationWidth:S,outShape:k}=Ti(s.shape,o.shape,r,i,"NHWC",a),$=K(k),E=k.length,R=oe(s.dtype,$);for(let F=0;F<p;++F)for(let _=0;_<x;++_){const B=_*y-w.top;for(let O=0;O<b;++O){const V=O*C-w.left;for(let G=0;G<g;++G){let H=Number.MIN_SAFE_INTEGER;for(let Y=0;Y<I;++Y){const et=B+Y*N;if(et>=0&&et<f)for(let Q=0;Q<v;++Q){const st=V+Q*S;if(st>=0&&st<m){const ct=jn([F,et,st,G],u,ft(s.shape)),pt=jn([Y,Q,G],d,ft(o.shape)),ht=c[ct]+h[pt];ht>H&&(H=ht)}}}const j=jn([F,_,O,G],E,ft(k));R[j]=H}}}return{dataId:l.write(oo(R,s.dtype),k,s.dtype),shape:k,dtype:s.dtype}}};const eF={kernelName:Ru,backendName:"cpu",kernelFunc:({inputs:n,backend:t,attrs:e})=>{const{x:s,filter:o,dy:r}=n,{strides:i,pad:a,dilations:l}=e,c=t,u=Mn(s.shape,c.data.get(s.dataId).values),h=Mn(o.shape,c.data.get(o.dataId).values),{batchSize:d,inHeight:p,inWidth:f,inChannels:m,outHeight:g,outWidth:x,padInfo:b,strideHeight:w,strideWidth:y,filterHeight:C,filterWidth:I,dilationHeight:v,dilationWidth:N,outShape:S}=Ti(s.shape,o.shape,i,a,"NHWC",l);T(r.rank===S.length,()=>`Error in ${Ru}, dy must have the same rank as output ${S.length}, but got ${r.rank}`);const k=Mn(S,c.data.get(r.dataId).values),$=Hp(o.shape,o.dtype);for(let R=0;R<d;++R)for(let A=0;A<g;++A){const F=A*w-b.top;for(let _=0;_<x;++_){const B=_*y-b.left;for(let O=0;O<m;++O){let V=Number.MIN_SAFE_INTEGER,G=0,H=0;for(let j=0;j<C;++j){const Y=F+j*v;if(Y>=0&&Y<p)for(let et=0;et<I;++et){const Q=B+et*N;if(Q>=0&&Q<f){const st=u[R][Y][Q][O]+h[j][et][O];st>V&&(V=st,G=j,H=et)}}}$[G][H][O]+=k[R][A][_][O]}}}return{dataId:c.write(oo($,s.dtype),o.shape,o.dtype),shape:o.shape,dtype:o.dtype}}};const nF={kernelName:Eu,backendName:"cpu",kernelFunc:({inputs:n,backend:t,attrs:e})=>{const{x:s,filter:o,dy:r}=n,{strides:i,pad:a,dilations:l}=e,c=t,u=Mn(s.shape,c.data.get(s.dataId).values),h=Mn(o.shape,c.data.get(o.dataId).values),{batchSize:d,inHeight:p,inWidth:f,inChannels:m,outHeight:g,outWidth:x,padInfo:b,strideHeight:w,strideWidth:y,filterHeight:C,filterWidth:I,dilationHeight:v,dilationWidth:N,outShape:S}=Ti(s.shape,o.shape,i,a,"NHWC",l);T(r.rank===S.length,()=>`Error in ${Eu}, dy must have the same rank as output ${S.length}, but got ${r.rank}`);const k=Mn(S,c.data.get(r.dataId).values),$=Hp(s.shape,s.dtype);for(let R=0;R<d;++R)for(let A=0;A<g;++A){const F=A*w-b.top;for(let _=0;_<x;++_){const B=_*y-b.left;for(let O=0;O<m;++O){let V=Number.MIN_SAFE_INTEGER,G=F<0?0:F,H=B<0?0:B;for(let j=0;j<C;++j){const Y=F+j*v;if(Y>=0&&Y<p)for(let et=0;et<I;++et){const Q=B+et*N;if(Q>=0&&Q<f){const st=u[R][Y][Q][O]+h[j][et][O];st>V&&(V=st,G=Y,H=Q)}}}$[R][G][H][O]+=k[R][A][_][O]}}}return{dataId:c.write(oo($,s.dtype),s.shape,s.dtype),shape:s.shape,dtype:s.dtype}}};function sF(n){const{inputs:t,backend:e,attrs:s}=n,{image:o}=t,{canvas:r,options:i}=s,{contextOptions:a,imageOptions:l}=i||{},c=(l==null?void 0:l.alpha)||1,u=(a==null?void 0:a.contextType)||"2d";if(u!=="2d")throw new Error(`Context type ${a.contextType} is not supported by the CPU backend.`);const h=r.getContext(u,(a==null?void 0:a.contextAttributes)||{});if(h==null)throw new Error(`Could not get the context with ${u} type.`);const[d,p]=o.shape.slice(0,2),f=o.shape.length===2?1:o.shape[2],m=e.data.get(o.dataId).values,g=o.dtype==="float32"?255:1,x=new Uint8ClampedArray(p*d*4);for(let w=0;w<d*p;++w){const y=[0,0,0,255*c];for(let I=0;I<f;I++){const v=m[w*f+I];if(o.dtype==="float32"){if(v<0||v>1)throw new Error(`Tensor values for a float32 Tensor must be in the range [0 - 1] but encountered ${v}.`)}else if(o.dtype==="int32"&&(v<0||v>255))throw new Error(`Tensor values for a int32 Tensor must be in the range [0 - 255] but encountered ${v}.`);f===1?(y[0]=v*g,y[1]=v*g,y[2]=v*g):y[I]=v*g}const C=w*4;x[C+0]=Math.round(y[0]),x[C+1]=Math.round(y[1]),x[C+2]=Math.round(y[2]),x[C+3]=Math.round(y[3])}r.width=p,r.height=d;const b=new ImageData(x,p,d);return h.putImageData(b,0,0),o}const oF={kernelName:Aw,backendName:"cpu",kernelFunc:sF};function ra(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,keepDims:i}=s;ut(o,"sum");let a;o.dtype==="bool"?a=Ks({inputs:{x:o},backend:e,attrs:{dtype:"int32"}}):a=ls({inputs:{x:o},backend:e});const l=a.shape.length,c=vt(r,a.shape),u=Jt(c,l);let h=c,d=a;u!=null&&(d=tn({inputs:{x:a},backend:e,attrs:{perm:u}}),h=ie(h.length,l)),Ne("sum",h,d.shape.length);const[p,f]=$e(d.shape,h),m=sn(d.dtype,"int32");let g=kc(e,p,m);const x=K(f),b=e.data.get(g.dataId).values,w=e.data.get(d.dataId).values;for(let y=0;y<b.length;++y){const C=y*x;let I=0;for(let v=0;v<x;++v)I+=w[C+v];b[y]=I}if(i){const y=he(g.shape,c),C=g;g=Kt({inputs:{x:g},backend:e,attrs:{shape:y}}),e.disposeIntermediateTensorInfo(C)}return e.disposeIntermediateTensorInfo(a),u!=null&&e.disposeIntermediateTensorInfo(d),g}const rF={kernelName:xl,backendName:"cpu",kernelFunc:ra};function iF(n){const{inputs:t,backend:e,attrs:s}=n,{equation:o}=s,r=t,{allDims:i,summedDims:a,idDims:l}=md(o,r.length);xd(i.length,l,r);const{path:c,steps:u}=bd(a,l),h=u.length;let d=null,p=i.length;const f=[];for(let m=0;m<h;++m){for(const g of u[m]){const{permutationIndices:x,expandDims:b}=gd(p,l[g]);let w;yd(x)?w=r[g]:(w=tn({inputs:{x:r[g]},backend:e,attrs:{perm:x}}),f.push(w));const y=w.shape.slice();for(let C=0;C<b.length;++C)y.splice(b[C],0,1);Pt(w.shape,y)||(w=Kt({inputs:{x:w},backend:e,attrs:{shape:y}}),f.push(w)),d===null?d=w:(d=Sc({inputs:{a:w,b:d},backend:e}),f.push(d))}m<h-1&&(c[m]>=0&&(d=ra({inputs:{x:d},backend:e,attrs:{axis:c[m]-(i.length-p),keepDims:!1}}),f.push(d)),p--)}for(const m of f)m!==d&&e.disposeIntermediateTensorInfo(m);return d}const aF={kernelName:Au,backendName:"cpu",kernelFunc:iF};function lF(n){const{inputs:t,backend:e}=n,{dy:s,y:o}=t;ut([s,o],"eluGrad");const r=new Float32Array(K(o.shape)),i=e.data.get(o.dataId).values,a=e.data.get(s.dataId).values;for(let l=0;l<i.length;++l){const c=i[l];c>=0?r[l]=a[l]:r[l]=a[l]*(c+1)}return e.makeTensorInfo(o.shape,"float32",r)}const cF={kernelName:Du,backendName:"cpu",kernelFunc:lF};const uF=ad,hF=ld,dF=cd,pF=ud,fF=hd,mF=dd,gF=Wt(Wr,n=>{const t=Math.sign(n),e=Math.abs(n),s=1/(1+uF*e);return t*(1-((((mF*s+fF)*s+pF)*s+dF)*s+hF)*s*Math.exp(-e*e))}),xF={kernelName:Wr,backendName:"cpu",kernelFunc:gF};function Ec(n){const{inputs:t,backend:e,attrs:s}=n,{input:o}=t,{dim:r}=s,i=o.shape.length,a=o.shape.slice();let l=r;return r<0&&(T(-(i+1)<=r,()=>`Axis must be in the interval [${-(i+1)}, ${i}]`),l=i+r+1),a.splice(l,0,1),Kt({inputs:{x:o},backend:e,attrs:{shape:a}})}const bF={kernelName:za,backendName:"cpu",kernelFunc:Ec};const yF=ce((n,t)=>n/t),pp=ye(zr,yF),fp={kernelName:zr,backendName:"cpu",kernelFunc:pp};function L1(n,t,e){const s=n.shape,o=s[0],r=s[1],i=e.data.get(n.dataId),a=i.complexTensorInfos.real,l=i.complexTensorInfos.imag,c=[o,r],u=K(c),h=_e("float32",u),d=_e("float32",u);for(let g=0;g<o;g++){const x=Ro({inputs:{x:a},backend:e,attrs:{begin:[g,0],size:[1,r]}}),b=Ro({inputs:{x:l},backend:e,attrs:{begin:[g,0],size:[1,r]}}),w=ln({inputs:{real:x,imag:b},backend:e}),{real:y,imag:C}=wF(w,t,e),I=ys(y,C);for(let v=0;v<r;v++){const N=pd(I,v);h[g*r+v]=N.real,d[g*r+v]=N.imag}e.disposeIntermediateTensorInfo(x),e.disposeIntermediateTensorInfo(b),e.disposeIntermediateTensorInfo(w)}const p=e.makeTensorInfo(c,"float32",h),f=e.makeTensorInfo(c,"float32",d),m=ln({inputs:{real:p,imag:f},backend:e});return e.disposeIntermediateTensorInfo(p),e.disposeIntermediateTensorInfo(f),m}function wF(n,t,e){const s=K(n.shape),o=e.data.get(n.dataId),r=e.data.get(o.complexTensorInfos.real.dataId).values,i=e.data.get(o.complexTensorInfos.imag.dataId).values;if(CF(s)){const a=mp(r,i,s,t,e),l=[n.shape[0],n.shape[1]];if(t){const c=e.makeTensorInfo(l,"float32",a.real),u=e.makeTensorInfo(l,"float32",a.imag),h=e.makeTensorInfo([],"float32",Rs(s,"float32")),d=ls({inputs:{x:h},backend:e}),p=fp.kernelFunc({inputs:{a:c,b:h},backend:e}),f=fp.kernelFunc({inputs:{a:u,b:d},backend:e}),m=e.data.get(p.dataId).values,g=e.data.get(f.dataId).values;return e.disposeIntermediateTensorInfo(c),e.disposeIntermediateTensorInfo(u),e.disposeIntermediateTensorInfo(h),e.disposeIntermediateTensorInfo(d),e.disposeIntermediateTensorInfo(p),e.disposeIntermediateTensorInfo(f),{real:m,imag:g}}return a}else{const a=ys(r,i),l=$F(a,s,t);return fg(l)}}function CF(n){return(n&n-1)===0}function mp(n,t,e,s,o){if(e===1)return{real:n,imag:t};const r=ys(n,t),i=e/2,a=mg(r),l=a.real,c=a.imag,u=[l.length],h=o.makeTensorInfo(u,"float32",l),d=o.makeTensorInfo(u,"float32",c),p=ln({inputs:{real:h,imag:d},backend:o}),f=gg(r),m=f.real,g=f.imag,x=[m.length],b=o.makeTensorInfo(x,"float32",m),w=o.makeTensorInfo(x,"float32",g),y=ln({inputs:{real:b,imag:w},backend:o}),C=mp(l,c,i,s,o),I=C.real,v=C.imag,N=[I.length],S=o.makeTensorInfo(N,"float32",I),k=o.makeTensorInfo(N,"float32",v),$=ln({inputs:{real:S,imag:k},backend:o}),E=mp(m,g,i,s,o),R=E.real,A=E.imag,F=[R.length],_=o.makeTensorInfo(F,"float32",R),B=o.makeTensorInfo(F,"float32",A),O=ln({inputs:{real:_,imag:B},backend:o}),V=bg(e,s),G=[V.real.length],H=o.makeTensorInfo(G,"float32",V.real),j=o.makeTensorInfo(G,"float32",V.imag),Y=ln({inputs:{real:H,imag:j},backend:o}),et=Sc({inputs:{a:Y,b:O},backend:o}),Q=lr({inputs:{a:$,b:et},backend:o}),st=hp({inputs:{a:$,b:et},backend:o}),ct=To({inputs:{input:Q},backend:o}),pt=To({inputs:{input:st},backend:o}),ht=cr({inputs:{input:Q},backend:o}),xt=cr({inputs:{input:st},backend:o}),nt=ur({inputs:[ct,pt],backend:o,attrs:{axis:0}}),wt=ur({inputs:[ht,xt],backend:o,attrs:{axis:0}}),rt=o.data.get(nt.dataId).values,Ot=o.data.get(wt.dataId).values;return o.disposeIntermediateTensorInfo(h),o.disposeIntermediateTensorInfo(d),o.disposeIntermediateTensorInfo(p),o.disposeIntermediateTensorInfo(b),o.disposeIntermediateTensorInfo(w),o.disposeIntermediateTensorInfo(y),o.disposeIntermediateTensorInfo(S),o.disposeIntermediateTensorInfo(k),o.disposeIntermediateTensorInfo($),o.disposeIntermediateTensorInfo(_),o.disposeIntermediateTensorInfo(B),o.disposeIntermediateTensorInfo(O),o.disposeIntermediateTensorInfo(H),o.disposeIntermediateTensorInfo(j),o.disposeIntermediateTensorInfo(Y),o.disposeIntermediateTensorInfo(et),o.disposeIntermediateTensorInfo(Q),o.disposeIntermediateTensorInfo(st),o.disposeIntermediateTensorInfo(ct),o.disposeIntermediateTensorInfo(ht),o.disposeIntermediateTensorInfo(pt),o.disposeIntermediateTensorInfo(xt),o.disposeIntermediateTensorInfo(nt),o.disposeIntermediateTensorInfo(wt),{real:rt,imag:Ot}}function $F(n,t,e){const s=new Float32Array(t*2);for(let o=0;o<t;o++){let r=0,i=0;for(let a=0;a<t;a++){const l=yg(o*a,t,e),c=pd(n,a);r+=c.real*l.real-c.imag*l.imag,i+=c.real*l.imag+c.imag*l.real}e&&(r/=t,i/=t),xg(s,r,i,o)}return s}function IF(n){const{inputs:t,backend:e}=n,{input:s}=t,o=K(s.shape),r=s.shape[s.shape.length-1],i=o/r,a=Kt({inputs:{x:s},backend:e,attrs:{shape:[i,r]}}),l=L1(a,!1,e),c=Kt({inputs:{x:l},backend:e,attrs:{shape:s.shape}});return e.disposeIntermediateTensorInfo(a),e.disposeIntermediateTensorInfo(l),c}const vF={kernelName:Fu,backendName:"cpu",kernelFunc:IF};function gp(n){const{backend:t,attrs:e}=n,{shape:s,value:o,dtype:r}=e,i=r||Vo(o),a=oe(i,K(s));return SF(a,o,i),t.makeTensorInfo(s,i,a)}const kF={kernelName:_u,backendName:"cpu",kernelFunc:gp};function SF(n,t,e){n.fill(t)}const NF={kernelName:Ou,backendName:"cpu",kernelFunc:({inputs:n,attrs:t,backend:e})=>{const{image:s}=n,o=e,r=_e(s.dtype,K(s.shape)),[i,a,l,c]=s.shape,u=o.data.get(s.dataId).values;for(let d=0;d<i;d++){const p=d*l*a*c;for(let f=0;f<a;f++){const m=f*(l*c);for(let g=0;g<l;g++){const x=g*c;for(let b=0;b<c;b++){const w=Math.round(l-g-1),y=p+m+x+b;let C=u[y];if(w>=0&&w<l){const I=w*c,v=p+m+I+b;C=u[v]}r[y]=C}}}}return{dataId:o.write(r,s.shape,s.dtype),shape:s.shape,dtype:s.dtype}}};function TF(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,filter:r,bias:i,preluActivationWeights:a}=t,{strides:l,pad:c,dataFormat:u,dilations:h,dimRoundingMode:d,activation:p,leakyreluAlpha:f}=s;let m=O1({inputs:{x:o,filter:r},backend:e,attrs:{strides:l,pad:c,dataFormat:u,dilations:h,dimRoundingMode:d}});if(i){const g=m;if(u==="NCHW"&&i.shape.length===1&&i.shape[0]!==1){const x=Kt({inputs:{x:i},backend:e,attrs:{shape:[i.shape[0],1,1]}});m=lr({inputs:{a:m,b:x},backend:e}),e.disposeIntermediateTensorInfo(x)}else m=lr({inputs:{a:m,b:i},backend:e});e.disposeIntermediateTensorInfo(g)}if(p){const g=m;if(u==="NCHW"&&p==="prelu"&&a.shape.length===1&&a.shape[0]!==1){const x=Kt({inputs:{x:a},backend:e,attrs:{shape:[a.shape[0],1,1]}});m=Tc(e,m,p,x,f),e.disposeIntermediateTensorInfo(x)}else m=Tc(e,m,p,a,f);e.disposeIntermediateTensorInfo(g)}return m}const EF={kernelName:kl,backendName:"cpu",kernelFunc:TF};function RF(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,filter:r,bias:i,preluActivationWeights:a}=t,{strides:l,pad:c,dataFormat:u,dilations:h,dimRoundingMode:d,activation:p,leakyreluAlpha:f}=s;let m=M1({inputs:{x:o,filter:r},backend:e,attrs:{strides:l,pad:c,dataFormat:u,dilations:h,dimRoundingMode:d}});if(i){const g=m;m=lr({inputs:{a:m,b:i},backend:e}),e.disposeIntermediateTensorInfo(g)}if(p){const g=m;m=Tc(e,m,p,a,f),e.disposeIntermediateTensorInfo(g)}return m}const AF={kernelName:gf,backendName:"cpu",kernelFunc:RF};function DF(n){const{inputs:t,backend:e}=n,{params:s,indices:o}=t,r=K(s.shape),i=o.shape,a=i[i.length-1],[l,c,u,h]=Jh(s,o);if(c===0)return e.makeTensorInfo(l,s.dtype,[]);const d=e.data.get(o.dataId).values,p=e.bufferSync(s),f=U0(d,p,s.dtype,c,a,u,h,s.shape,r);return e.makeTensorInfo(l,s.dtype,f.values)}const FF={kernelName:Zp,backendName:"cpu",kernelFunc:DF};function _F(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,indices:r}=t,{axis:i,batchDims:a}=s;ut([o,r],"gatherV2");const l=vt(i,o.shape)[0],c=e.data.get(r.dataId).values,u=o.shape[l];for(let y=0;y<c.length;++y){const C=c[y];T(C<=u-1&&C>=0,()=>`GatherV2: the index value ${C} is not in [0, ${u-1}]`)}let h=a;a==null&&(h=0);const d=K(r.shape),p=Fg(o,r,l,h),f=Kt({inputs:{x:o},backend:e,attrs:{shape:[p.batchSize,p.outerSize,p.dimSize,p.sliceSize]}}),m=Kt({inputs:{x:r},backend:e,attrs:{shape:[p.batchSize,d/p.batchSize]}}),g=[p.batchSize,p.outerSize,d/p.batchSize,p.sliceSize],x=e.bufferSync(m),b=e.bufferSync(f),w=G0(b,x,g);return e.disposeIntermediateTensorInfo(f),e.disposeIntermediateTensorInfo(m),e.makeTensorInfo(p.outputShape,w.dtype,w.values)}const OF={kernelName:Wa,backendName:"cpu",kernelFunc:_F};function MF(n){const{inputs:t,backend:e}=n,{input:s}=t,o=K(s.shape),r=s.shape[s.shape.length-1],i=o/r,a=Kt({inputs:{x:s},backend:e,attrs:{shape:[i,r]}}),l=L1(a,!0,e),c=Kt({inputs:{x:l},backend:e,attrs:{shape:s.shape}});return e.disposeIntermediateTensorInfo(a),e.disposeIntermediateTensorInfo(l),c}const LF={kernelName:Mu,backendName:"cpu",kernelFunc:MF};const PF=Wt(jr,n=>Number.isFinite(n)?1:0,"bool"),BF={kernelName:jr,backendName:"cpu",kernelFunc:PF};const zF=Wt(Yr,n=>Math.abs(n)===1/0?1:0,"bool"),VF={kernelName:Yr,backendName:"cpu",kernelFunc:zF};const WF=Wt(Zr,n=>Number.isNaN(n)?1:0,"bool"),UF={kernelName:Zr,backendName:"cpu",kernelFunc:WF};function GF(n){const{backend:t,attrs:e}=n,{start:s,stop:o,num:r}=e,i=j0(s,o,r);return t.makeTensorInfo([i.length],"float32",i)}const HF={kernelName:Qp,backendName:"cpu",kernelFunc:GF};const qF=Wt(Jr,n=>Math.log1p(n)),XF={kernelName:Jr,backendName:"cpu",kernelFunc:qF};const KF=ce((n,t)=>n&&t),jF=ye(Xa,KF,null,"bool"),YF={kernelName:Xa,backendName:"cpu",kernelFunc:jF};const ZF=Wt(Ka,n=>n?0:1,"bool"),QF={kernelName:Ka,backendName:"cpu",kernelFunc:ZF};const JF=ce((n,t)=>n||t),t_=ye(ja,JF,null,"bool"),e_={kernelName:ja,backendName:"cpu",kernelFunc:t_};function n_(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{depthRadius:r,bias:i,alpha:a,beta:l}=s;ut(o,"LRN");const c=o.shape[3],u=c-1,h=e.data.get(o.dataId).values,d=K(o.shape),p=new Float32Array(d);function f(m){const g=m%c;let x=m-g+Math.max(0,g-r);const b=m-g+Math.min(g+r,u);let w=0;for(;x<=b;x++){const y=h[x];w+=y*y}return w}for(let m=0;m<d;m++){const g=f(m),x=h[m]*Math.pow(i+a*g,-l);p[m]=x}return e.makeTensorInfo(o.shape,o.dtype,p)}const s_={kernelName:Ya,backendName:"cpu",kernelFunc:n_};function o_(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,y:r,dy:i}=t,{depthRadius:a,bias:l,alpha:c,beta:u}=s;ut(i,"LRNGrad");const h=K(i.shape),d=i.shape[3],p=e.data.get(i.dataId).values,f=e.data.get(o.dataId).values,m=e.data.get(r.dataId).values,g=new Float32Array(h),x=h;for(let b=0;b<x;b++){const w=b%d,y=b-w+Math.max(0,w-a),C=b-w+Math.min(d,w+a+1);let I=0;for(let v=y;v<C;v++)I+=Math.pow(f[v],2);I=c*I+l;for(let v=y;v<C;v++){let N=-2*c*u*f[v]*m[b]/I;b===v&&(N+=Math.pow(I,-u)),N*=p[b],g[v]+=N}}return e.makeTensorInfo(i.shape,o.dtype,g)}const r_={kernelName:Pu,backendName:"cpu",kernelFunc:o_};function P1(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{reductionIndices:r,keepDims:i}=s,a=e;let l=o.shape;const c=l.length,u=vt(r,l);let h=u;const d=Jt(h,c);let p=a.data.get(o.dataId).values;if(d!=null){const y=new Array(c);for(let C=0;C<y.length;C++)y[C]=l[d[C]];p=cp(p,l,o.dtype,d,y),h=ie(h.length,c),l=y}ut(o,"max"),Ne("max",h,c);const[f,m]=$e(l,h),g=K(m),x=Z0(p,g,f,o.dtype),b=a.write(x,f,o.dtype);let w=f;return i&&(w=he(f,u)),{dataId:b,shape:w,dtype:o.dtype}}const i_={kernelName:Za,backendName:"cpu",kernelFunc:P1};function a_(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t;ut(o,"maxPool");const{filterSize:r,strides:i,pad:a,dimRoundingMode:l}=s,c=1;T(Me(i,c),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${c}'`);const u=In(o.shape,r,i,c,a,l);let h;if(u.filterWidth===1&&u.filterHeight===1&&Pt(u.inShape,u.outShape))h=ls({inputs:{x:o},backend:e});else{const d=e.data.get(o.dataId).values,p=ft(o.shape),f=dp(d,o.shape,o.dtype,p,u,"max");h=e.makeTensorInfo(u.outShape,o.dtype,f.values)}return h}const l_={kernelName:Qa,backendName:"cpu",kernelFunc:a_};function c_(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{filterSize:r,strides:i,pad:a,dimRoundingMode:l,dataFormat:c}=s;ut(o,"maxPool3d");const u=fs(o.shape,r,i,1,a,l,c),h=e.data.get(o.dataId).values,d=_1(h,o.shape,o.dtype,ft(o.shape),u,"max");return e.makeTensorInfo(d.shape,"float32",d.values)}const u_={kernelName:Ja,backendName:"cpu",kernelFunc:c_};function h_(n){const{inputs:t,backend:e,attrs:s}=n,{dy:o,input:r}=t,{filterSize:i,strides:a,pad:l,dimRoundingMode:c}=s;ut([o,r],"maxPool3DGrad");const u=fs(r.shape,i,a,1,l,c),h=e.bufferSync(r),d=tD(h,u),p=u.strideDepth,f=u.strideHeight,m=u.strideWidth,g=u.dilationDepth,x=u.dilationHeight,b=u.dilationWidth,w=u.effectiveFilterDepth,y=u.effectiveFilterHeight,C=u.effectiveFilterWidth,I=w-1-u.padInfo.front,v=C-1-u.padInfo.left,N=y-1-u.padInfo.top,S=kt(r.shape,"float32"),k=e.bufferSync(o);for(let $=0;$<u.batchSize;++$)for(let E=0;E<u.inChannels;++E)for(let R=0;R<u.inDepth;++R)for(let A=0;A<u.inHeight;++A)for(let F=0;F<u.inWidth;++F){const _=R-I,B=A-N,O=F-v;let V=0;for(let G=0;G<w;G+=g){const H=(_+G)/p;if(!(H<0||H>=u.outDepth||Math.floor(H)!==H))for(let j=0;j<y;j+=x){const Y=(B+j)/f;if(!(Y<0||Y>=u.outHeight||Math.floor(Y)!==Y))for(let et=0;et<C;et+=b){const Q=(O+et)/m;if(Q<0||Q>=u.outWidth||Math.floor(Q)!==Q)continue;const st=w*y*C-1-d.get($,H,Y,Q,E),ct=G*y*C+j*C+et,pt=st===ct?1:0;if(pt===0)continue;const ht=k.get($,H,Y,Q,E);V+=ht*pt}}}S.set(V,$,R,A,F,E)}return e.makeTensorInfo(S.shape,S.dtype,S.values)}const d_={kernelName:zu,backendName:"cpu",kernelFunc:h_};function p_(n){const{inputs:t,backend:e,attrs:s}=n,{dy:o,input:r,output:i}=t,a=r;ut([r,i],"maxPoolGrad");const{filterSize:l,strides:c,pad:u,dimRoundingMode:h}=s,d=In(a.shape,l,c,1,u,h),p=e.data.get(a.dataId).values,f=kt(d.outShape,a.dtype,F1(p,a.shape,a.dtype,d).values),m=d.strideHeight,g=d.strideWidth,x=d.dilationHeight,b=d.dilationWidth,w=d.effectiveFilterHeight,y=d.effectiveFilterWidth,C=y-1-d.padInfo.left,I=w-1-d.padInfo.top,v=kt(a.shape,"float32"),N=e.data.get(o.dataId).values,S=kt(o.shape,"float32",N);for(let k=0;k<d.batchSize;++k)for(let $=0;$<d.inChannels;++$)for(let E=0;E<d.inHeight;++E)for(let R=0;R<d.inWidth;++R){const A=E-I,F=R-C;let _=0;for(let B=0;B<w;B+=x){const O=(A+B)/m;if(!(O<0||O>=d.outHeight||Math.floor(O)!==O))for(let V=0;V<y;V+=b){const G=(F+V)/g;if(G<0||G>=d.outWidth||Math.floor(G)!==G)continue;const H=w*y-1-f.get(k,O,G,$),j=B*y+V,Y=H===j?1:0;if(Y===0)continue;const et=S.get(k,O,G,$);_+=et*Y}}v.set(_,k,E,R,$)}return e.makeTensorInfo(v.shape,v.dtype,v.values)}const f_={kernelName:Bu,backendName:"cpu",kernelFunc:p_};function m_(n,t,e,s,o){const r=ft(t),i=dp(n,t,e,r,o,"max"),a=F1(n,t,e,o,!0,s);return[i.values,a.values]}const g_={kernelName:Jp,backendName:"cpu",kernelFunc:({inputs:n,attrs:t,backend:e})=>{const{x:s}=n,{filterSize:o,strides:r,pad:i,includeBatchInIndex:a}=t,l=e;ut(s,"MaxPoolWithArgmax");const c=l.data.get(s.dataId).values,u=In(s.shape,o,r,[1,1],i),[h,d]=m_(c,s.shape,s.dtype,a,u),p=l.write(h,u.outShape,s.dtype),f=l.write(d,u.outShape,s.dtype);return[{dataId:p,shape:u.outShape,dtype:s.dtype},{dataId:f,shape:u.outShape,dtype:"int32"}]}};function x_(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,keepDims:i}=s,a=vt(r,o.shape),c=$e(o.shape,a)[1],u=K(c),h=[],d=e.makeTensorInfo([],"float32",new Float32Array([u]));h.push(d);const p=Ks({inputs:{x:o},backend:e,attrs:{dtype:"float32"}});h.push(p);const f=pp({inputs:{a:p,b:d},backend:e});h.push(f);const m=ra({inputs:{x:f},backend:e,attrs:{axis:r,keepDims:i}});return h.forEach(g=>e.disposeIntermediateTensorInfo(g)),m}const b_={kernelName:tl,backendName:"cpu",kernelFunc:x_};function y_(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,keepDims:i}=s;ut(o,"min");const a=vt(r,o.shape);let l=a;const c=Jt(l,o.shape.length);let u=o;c!=null&&(u=tn({inputs:{x:o},backend:e,attrs:{perm:c}}),l=ie(l.length,o.shape.length)),Ne("min",l,u.shape.length);const[h,d]=$e(u.shape,l),p=K(d),f=Oe(K(h),u.dtype),m=e.data.get(u.dataId).values;for(let x=0;x<f.length;++x){const b=x*p;let w=m[b];for(let y=0;y<p;++y){const C=m[b+y];(Number.isNaN(C)||C<w)&&(w=C)}f[x]=w}c!=null&&e.disposeIntermediateTensorInfo(u);const g=e.makeTensorInfo(h,u.dtype,f);if(i){const x=he(h,a),b=Kt({inputs:{x:g},backend:e,attrs:{shape:x}});return e.disposeIntermediateTensorInfo(g),b}return g}const w_={kernelName:el,backendName:"cpu",kernelFunc:y_};function C_(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{paddings:r,mode:i}=s;ut(o,"mirrorPad");const a=r.map((w,y)=>w[0]+o.shape[y]+w[1]),l=r.map(w=>w[0]),c=r.map((w,y)=>w[0]+o.shape[y]),u=i==="reflect"?0:1,h=e.data.get(o.dataId).values,d=o.shape.length,p=ft(o.shape),f=K(a),m=a.length,g=ft(a),x=_e(o.dtype,f);for(let w=0;w<f;w++){let y=Wo(w,m,g);for(let I=0;I<m;I++)y[I]<l[I]?y[I]=l[I]*2-y[I]-u:y[I]>=c[I]&&(y[I]=(c[I]-1)*2-y[I]+u);y=y.map((I,v)=>I-l[v]);const C=jn(y,d,p);x[w]=h[C]}return{dataId:e.write(x,a,o.dtype),shape:a,dtype:o.dtype}}const $_={kernelName:nl,backendName:"cpu",kernelFunc:C_};const I_=ce(((n,t)=>{const e=n%t;return n<0&&t<0||n>=0&&t>=0?e:(e+t)%t})),v_=ye(ni,I_),k_={kernelName:ni,backendName:"cpu",kernelFunc:v_};function B1(n){const{inputs:t,backend:e,attrs:s}=n,{logits:o}=t,{dim:r}=s,i=o.shape.length;let a=r;if(a===-1&&(a=i-1),a!==i-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${i} and dim was ${a}`);const l=vt([a],o.shape),c=P1({inputs:{x:o},backend:e,attrs:{reductionIndices:l,keepDims:!1}}),u=he(c.shape,l),h=Kt({inputs:{x:c},backend:e,attrs:{shape:u}}),d=hp({inputs:{a:o,b:h},backend:e}),p=B0({inputs:{x:d},backend:e}),f=ra({inputs:{x:p},backend:e,attrs:{axis:l,keepDims:!1}}),m=Kt({inputs:{x:f},backend:e,attrs:{shape:u}}),g=pp({inputs:{a:p,b:m},backend:e});return e.disposeIntermediateTensorInfo(c),e.disposeIntermediateTensorInfo(h),e.disposeIntermediateTensorInfo(d),e.disposeIntermediateTensorInfo(p),e.disposeIntermediateTensorInfo(f),e.disposeIntermediateTensorInfo(m),g}const S_={kernelName:wl,backendName:"cpu",kernelFunc:B1};function N_(n){const{inputs:t,backend:e,attrs:s}=n,{logits:o}=t,{numSamples:r,seed:i,normalized:a}=s;ut(o,"multinomial");const l=a?o:B1({inputs:{logits:o},backend:e,attrs:{dim:-1}}),c=l.shape[0],u=l.shape[1],h=e.data.get(l.dataId).values,d=[c,r],p=Oe(K(d),"int32");for(let f=0;f<c;++f){const m=f*u,g=new Float32Array(u-1);g[0]=h[m];for(let w=1;w<g.length;++w)g[w]=g[w-1]+h[m+w];const x=Mh.alea(i.toString()),b=f*r;for(let w=0;w<r;++w){const y=x();p[b+w]=g.length;for(let C=0;C<g.length;C++)if(y<g[C]){p[b+w]=C;break}}}return a||e.disposeIntermediateTensorInfo(l),e.makeTensorInfo(d,"int32",p)}const T_={kernelName:tf,backendName:"cpu",kernelFunc:N_};const E_=Xh;function R_(n){const{inputs:t,backend:e,attrs:s}=n,{boxes:o,scores:r}=t,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l}=s;ut(o,"NonMaxSuppression");const c=e.data.get(o.dataId).values,u=e.data.get(r.dataId).values,{selectedIndices:h}=E_(c,u,i,a,l);return e.makeTensorInfo([h.length],"int32",new Int32Array(h))}const A_={kernelName:Vu,backendName:"cpu",kernelFunc:R_};const D_=Kh;function F_(n){const{inputs:t,backend:e,attrs:s}=n,{boxes:o,scores:r}=t,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l,padToMaxOutputSize:c}=s;ut(o,"NonMaxSuppressionPadded");const u=e.data.get(o.dataId).values,h=e.data.get(r.dataId).values,{selectedIndices:d,validOutputs:p}=D_(u,h,i,a,l,c);return[e.makeTensorInfo([d.length],"int32",new Int32Array(d)),e.makeTensorInfo([],"int32",new Int32Array([p]))]}const __={kernelName:Wu,backendName:"cpu",kernelFunc:F_};const O_=jh;function M_(n){const{inputs:t,backend:e,attrs:s}=n,{boxes:o,scores:r}=t,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l,softNmsSigma:c}=s;ut(o,"NonMaxSuppressionWithScore");const u=e.data.get(o.dataId).values,h=e.data.get(r.dataId).values,d=i,p=a,f=l,m=c,{selectedIndices:g,selectedScores:x}=O_(u,h,d,p,f,m);return[e.makeTensorInfo([g.length],"int32",new Int32Array(g)),e.makeTensorInfo([x.length],"float32",new Float32Array(x))]}const L_={kernelName:Uu,backendName:"cpu",kernelFunc:M_};function P_(n){const{inputs:t,backend:e,attrs:s}=n,{indices:o}=t,{dtype:r,depth:i,onValue:a,offValue:l}=s;ut(o,"oneHot");const c=K(o.shape),u=new Float32Array(c*i);u.fill(l);const h=e.data.get(o.dataId).values;for(let d=0;d<c;++d)h[d]>=0&&h[d]<i&&(u[d*i+h[d]]=a);return e.makeTensorInfo([...o.shape,i],r,u)}const B_={kernelName:il,backendName:"cpu",kernelFunc:P_};function Rc(n){const{inputs:t,backend:e}=n,{x:s}=t;if(s.dtype==="string")throw new Error("zerosLike is not supported for string tensors");if(s.dtype==="complex64"){const o=To({inputs:{input:s},backend:e}),r=Rc({inputs:{x:o},backend:e}),i=cr({inputs:{input:s},backend:e}),a=Rc({inputs:{x:i},backend:e}),l=ln({inputs:{real:r,imag:a},backend:e});return e.disposeIntermediateTensorInfo(o),e.disposeIntermediateTensorInfo(r),e.disposeIntermediateTensorInfo(i),e.disposeIntermediateTensorInfo(a),l}else return gp({backend:e,attrs:{shape:s.shape,value:0,dtype:s.dtype}})}const z_={kernelName:Il,backendName:"cpu",kernelFunc:Rc};function z1(n){const{inputs:t,backend:e}=n,{x:s}=t;if(s.dtype==="string")throw new Error("onesLike is not supported for string tensors");if(s.dtype==="complex64"){const o=To({inputs:{input:s},backend:e}),r=z1({inputs:{x:o},backend:e}),i=cr({inputs:{input:s},backend:e}),a=Rc({inputs:{x:i},backend:e}),l=ln({inputs:{real:r,imag:a},backend:e});return e.disposeIntermediateTensorInfo(o),e.disposeIntermediateTensorInfo(r),e.disposeIntermediateTensorInfo(i),e.disposeIntermediateTensorInfo(a),l}else return gp({backend:e,attrs:{shape:s.shape,value:1,dtype:s.dtype}})}const V_={kernelName:rl,backendName:"cpu",kernelFunc:z1};function V1(n){const{inputs:t,backend:e,attrs:s}=n,{axis:o}=s;if(t.length===1)return Ec({inputs:{input:t[0]},backend:e,attrs:{dim:o}});const r=t[0].shape,i=t[0].dtype;t.forEach(u=>{su(r,u.shape,"All tensors passed to stack must have matching shapes"),T(i===u.dtype,()=>"All tensors passed to stack must have matching dtypes")});const a=[],l=t.map(u=>{const h=Ec({inputs:{input:u},backend:e,attrs:{dim:o}});return a.push(h),h}),c=ur({inputs:l,backend:e,attrs:{axis:o}});return a.forEach(u=>e.disposeIntermediateTensorInfo(u)),c}const W_={kernelName:al,backendName:"cpu",kernelFunc:V1};function U_(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{paddings:r,constantValue:i}=s;ut(o,"pad");const a=r.map((b,w)=>b[0]+o.shape[w]+b[1]),l=r.map(b=>b[0]),c=e.data.get(o.dataId).values,u=K(o.shape),h=o.shape.length,d=ft(o.shape),p=K(a),f=a.length,m=ft(a),g=_e(o.dtype,p);i!==0&&g.fill(i);for(let b=0;b<u;b++){const y=Wo(b,h,d).map((I,v)=>I+l[v]),C=jn(y,f,m);g[C]=c[b]}return{dataId:e.write(g,a,o.dtype),shape:a,dtype:o.dtype}}const W1={kernelName:ll,backendName:"cpu",kernelFunc:U_};const G_=ce((n,t)=>Math.pow(n,t)),H_=ye(oi,G_),q_={kernelName:oi,backendName:"cpu",kernelFunc:H_};function X_(n){const{inputs:t,backend:e,attrs:s}=n,{paramsNestedSplits:o,paramsDenseValues:r,indices:i}=t,{outputRaggedRank:a}=s,l=o.map(x=>e.data.get(x.dataId).values),c=o.map(x=>x.shape),u=e.data.get(r.dataId).values,h=e.data.get(i.dataId).values,[d,p,f]=o1(l,c,u,r.shape,r.dtype,h,i.shape),m=d.map(x=>e.makeTensorInfo([x.length],"int32",x)),g=e.makeTensorInfo(f,r.dtype,p);return m.concat([g])}const K_={kernelName:ef,backendName:"cpu",kernelFunc:X_};function j_(n){const{inputs:t,backend:e}=n,{starts:s,limits:o,deltas:r}=t,i=e.data.get(s.dataId).values,a=e.data.get(o.dataId).values,l=e.data.get(r.dataId).values,[c,u]=i1(i,s.shape,s.dtype,a,o.shape,l,r.shape),h=e.makeTensorInfo([c.length],"int32",c),d=e.makeTensorInfo([u.length],s.dtype,u);return[h,d]}const Y_={kernelName:nf,backendName:"cpu",kernelFunc:j_};function Z_(n){const{inputs:t,backend:e,attrs:s}=n,{shape:o,values:r,defaultValue:i,rowPartitionTensors:a}=t,{rowPartitionTypes:l}=s,c=e.data.get(o.dataId).values,u=e.data.get(r.dataId).values,h=e.data.get(i.dataId).values,d=a.map(g=>e.data.get(g.dataId).values),p=a.map(g=>g.shape),[f,m]=c1(c,o.shape,u,r.shape,r.dtype,h,i.shape,d,p,l);return e.makeTensorInfo(f,r.dtype,m)}const Q_={kernelName:sf,backendName:"cpu",kernelFunc:Z_};function J_(n){const{backend:t,attrs:e}=n,{start:s,stop:o,dtype:r,step:i}=e,a=u1(s,o,i,r);return t.makeTensorInfo([a.length],r,a)}const tO={kernelName:Gu,backendName:"cpu",kernelFunc:J_};const eO=Wt(ri,n=>1/n),nO={kernelName:ri,backendName:"cpu",kernelFunc:eO};function sO(n){const{inputs:t,backend:e,attrs:s}=n,{images:o}=t,{alignCorners:r,halfPixelCenters:i,size:a}=s;ut(o,"resizeBilinear");const l=ft(o.shape),[c,u]=a,[h,d,p,f]=o.shape,m=e.data.get(o.dataId).values,g=new Float32Array(K([h,c,u,f])),x=[r&&c>1?d-1:d,r&&u>1?p-1:p],b=[r&&c>1?c-1:c,r&&u>1?u-1:u];let w=0;const y=x[0]/b[0],C=x[1]/b[1];for(let I=0;I<h;I++)for(let v=0;v<c;v++){let N;i?N=y*(v+.5)-.5:N=y*v;const S=Math.max(0,Math.floor(N)),k=N-S,$=Math.min(d-1,Math.ceil(N)),E=I*l[0]+S*l[1],R=I*l[0]+$*l[1];for(let A=0;A<u;A++){let F;i?F=C*(A+.5)-.5:F=C*A;const _=Math.max(0,Math.floor(F)),B=F-_,O=Math.min(p-1,Math.ceil(F)),V=E+_*l[2],G=R+_*l[2],H=E+O*l[2],j=R+O*l[2];for(let Y=0;Y<f;Y++){const et=m[V+Y],Q=m[G+Y],st=m[H+Y],ct=m[j+Y],pt=et+(st-et)*B,ht=Q+(ct-Q)*B,xt=pt+(ht-pt)*k;g[w++]=xt}}}return e.makeTensorInfo([h,c,u,f],"float32",g)}const oO={kernelName:pl,backendName:"cpu",kernelFunc:sO};function rO(n){const{inputs:t,backend:e,attrs:s}=n,{images:o,dy:r}=t,{alignCorners:i}=s;ut([r,o],"resizeBilinearGrad");const a=ft(o.shape),[l,c,u,h]=o.shape,[,d,p]=r.shape,f=new Float32Array(l*c*u*h),m=[i&&d>1?c-1:c,i&&p>1?u-1:u],g=[i&&d>1?d-1:d,i&&p>1?p-1:p],x=m[0]/g[0],b=m[1]/g[1],w=e.data.get(r.dataId).values;let y=0;for(let C=0;C<l;C++){const I=C*a[0];for(let v=0;v<d;v++){const N=v*x,S=Math.floor(N),k=Math.min(Math.ceil(N),c-1),$=I+S*a[1],E=I+k*a[1],R=N-S,A=1-R;for(let F=0;F<p;F++){const _=F*b,B=Math.floor(_),O=Math.min(Math.ceil(_),u-1),V=_-B,G=1-V,H=$+B*a[2],j=$+O*a[2],Y=E+B*a[2],et=E+O*a[2],Q=A*G,st=A*V,ct=R*G,pt=R*V;for(let ht=0;ht<h;ht++){const xt=w[y++];f[H+ht]+=xt*Q,f[j+ht]+=xt*st,f[Y+ht]+=xt*ct,f[et+ht]+=xt*pt}}}}return e.makeTensorInfo([l,u,c,h],"float32",f)}const iO={kernelName:Xu,backendName:"cpu",kernelFunc:rO};function aO(n){const{inputs:t,backend:e,attrs:s}=n,{images:o}=t,{alignCorners:r,halfPixelCenters:i,size:a}=s;ut(o,"resizeNearestNeighbor");const l=ft(o.shape),[c,u]=a,[h,d,p,f]=o.shape,m=e.data.get(o.dataId).values,g=new Float32Array(h*c*u*f),x=[r&&c>1?d-1:d,r&&u>1?p-1:p],b=[r&&c>1?c-1:c,r&&u>1?u-1:u],w=x[0]/b[0],y=x[1]/b[1];let C=0;for(let I=0;I<h;I++){const v=I*l[0];for(let N=0;N<c;N++){const S=i?w*(N+.5):w*N;let k=Math.min(d-1,r?Math.round(S):Math.floor(S));i&&(k=Math.max(0,k));const $=v+k*l[1];for(let E=0;E<u;E++){const R=i?y*(E+.5):y*E;let A=Math.min(p-1,r?Math.round(R):Math.floor(R));i&&(A=Math.max(0,A));const F=$+A*l[2];for(let _=0;_<f;_++){const B=m[F+_];g[C++]=B}}}}return e.makeTensorInfo([h,c,u,f],o.dtype,g)}const lO={kernelName:dl,backendName:"cpu",kernelFunc:aO};function cO(n){const{inputs:t,backend:e,attrs:s}=n,{images:o,dy:r}=t,{alignCorners:i}=s;ut([r,o],"resizeNearestNeighborGrad");const a=ft(o.shape),l=ft(r.shape),[c,u,h,d]=o.shape,[,p,f]=r.shape,m=new Float32Array(c*u*h*d),g=e.data.get(r.dataId).values,x=[i&&p>1?u-1:u,i&&f>1?h-1:h],b=[i&&p>1?p-1:p,i&&f>1?f-1:f],w=x[0]/b[0],y=x[1]/b[1],C=1/w,I=1/y,v=Math.ceil(C)*2+2,N=Math.ceil(I)*2+2;for(let S=0;S<c;S++){const k=S*a[0];for(let $=0;$<u;$++){const E=k+$*a[1],R=Math.floor($*C),A=Math.floor(R-v/2);for(let F=0;F<h;F++){const _=E+F*a[2],B=Math.floor(F*I),O=Math.floor(B-N/2);for(let V=0;V<d;V++){let G=0;for(let H=0;H<v;H++){const j=H+A;if(j<0||j>=p)continue;const Y=k+j*l[1],et=j*w,Q=Math.min(u-1,i?Math.round(et):Math.floor(et));if($===Q)for(let st=0;st<N;st++){const ct=st+O;if(ct<0||ct>=f)continue;const pt=Y+ct*l[2],ht=ct*y,xt=Math.min(h-1,i?Math.round(ht):Math.floor(ht));F===xt&&(G+=g[pt+V])}}m[_+V]=G}}}}return e.makeTensorInfo(o.shape,o.dtype,m)}const uO={kernelName:qu,backendName:"cpu",kernelFunc:cO};function hO(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{dims:r}=s;ut(o,"reverse");const i=o.shape.length,a=vt(r,o.shape);if(i===0)return ls({inputs:{x:o},backend:e});const l=new ke(o.shape,o.dtype),c=e.bufferSync(o);for(let u=0;u<l.size;u++){const h=l.indexToLoc(u),d=h.slice();a.forEach(p=>d[p]=o.shape[p]-1-d[p]),l.set(c.get(...d),...h)}return e.makeTensorInfo(l.shape,l.dtype,l.values)}const dO={kernelName:fl,backendName:"cpu",kernelFunc:hO};const pO={kernelName:th,backendName:"cpu",kernelFunc:({inputs:n,attrs:t,backend:e})=>{const{image:s}=n,{radians:o,fillValue:r,center:i}=t,a=e,l=_e(s.dtype,K(s.shape)),[c,u,h,d]=s.shape,[p,f]=od(i,u,h),m=255,g=Math.sin(o),x=Math.cos(o),b=a.data.get(s.dataId).values;for(let y=0;y<c;y++){const C=y*h*u*d;for(let I=0;I<u;I++){const v=I*(h*d);for(let N=0;N<h;N++){const S=N*d;for(let k=0;k<d;k++){const $=[c,I,N,k],E=$[2],R=$[1];let A=(E-p)*x-(R-f)*g,F=(E-p)*g+(R-f)*x;A=Math.round(A+p),F=Math.round(F+f);let _=r;if(typeof r!="number"&&(k===3?_=m:_=r[k]),A>=0&&A<h&&F>=0&&F<u){const O=F*(h*d),V=A*d,G=C+O+V+k;_=b[G]}const B=C+v+S+k;l[B]=_}}}}return{dataId:a.write(l,s.shape,s.dtype),shape:s.shape,dtype:s.dtype}}};const fO=Wt(li,n=>{const t=Math.floor(n);return n-t<.5?Math.floor(n):n-t>.5?Math.ceil(n):t%2===0?t:t+1}),mO={kernelName:li,backendName:"cpu",kernelFunc:fO};function gO(n){const{inputs:t,backend:e,attrs:s}=n,{indices:o,updates:r}=t,{shape:i}=s,{sliceRank:a,numUpdates:l,sliceSize:c,strides:u,outputSize:h}=bo(r,o,i),d=!0,p=e.bufferSync(o),f=e.bufferSync(r),m=Eo(p,f,i,h,c,l,a,u,0,d);return e.makeTensorInfo(i,m.dtype,m.values)}const xO={kernelName:of,backendName:"cpu",kernelFunc:gO};function bO(n,t){let e=0,s=n.length,o=0;for(;e<s;)o=Math.floor((e+s)/2),n[o]<t?e=o+1:s=o;return s}function yO(n,t){let e=0,s=n.length,o=0;for(;e<s;)o=Math.floor((e+s)/2),n[o]<=t?e=o+1:s=o;return s}function wO(n,t,e,s,o,r){const i=oe("int32",e*o);for(let a=0;a<e;++a){const l=n.slice(a*s,(a+1)*s),c=a*o;for(let u=0;u<o;++u)i[c+u]=r==="left"?bO(l,t[u+c]):yO(l,t[u+c])}return i}function CO(n){const{inputs:t,backend:e,attrs:s}=n,{sortedSequence:o,values:r}=t,{side:i}=s,a=e.data.get(o.dataId).values,l=e.data.get(r.dataId).values,c=wO(a,l,o.shape[0],o.shape[1],r.shape[1],i);return e.makeTensorInfo(r.shape,"int32",c)}const $O={kernelName:af,backendName:"cpu",kernelFunc:CO};function IO(n){const{inputs:t,backend:e}=n,{condition:s,t:o,e:r}=t;ut([s,o,r],"select");const i=s.shape.length,a=e.data.get(s.dataId).values,l=e.data.get(o.dataId).values,c=e.data.get(r.dataId).values,u=sn(o.dtype,r.dtype),h=Oe(K(o.shape),u);let d=0;const p=i===0||i>1||o.shape.length===1?1:K(o.shape.slice(1));for(let f=0;f<a.length;f++)for(let m=0;m<p;m++)a[f]===1?h[d++]=l[f]:h[d++]=c[f];return e.makeTensorInfo(o.shape,u,h)}const vO={kernelName:ml,backendName:"cpu",kernelFunc:IO};const kO=Jl,SO=tc,NO=Wt(ui,n=>n>=0?SO*n:kO*(Math.exp(n)-1)),TO={kernelName:ui,backendName:"cpu",kernelFunc:NO};const EO=Wt(pi,n=>n<0?-1:n>0?1:0),RO={kernelName:pi,backendName:"cpu",kernelFunc:EO};const AO=Wt(hi,n=>Math.sin(n)),DO={kernelName:hi,backendName:"cpu",kernelFunc:AO};const FO=Wt(di,n=>Math.sinh(n)),_O={kernelName:di,backendName:"cpu",kernelFunc:FO};const U1=Math.log(11920928955078125e-23)+2,OO=Wt(mi,n=>{const t=n>-U1,e=n<U1,s=Math.exp(n);let o;return e?o=s:t?o=n:o=Math.log(1+s),o}),MO={kernelName:mi,backendName:"cpu",kernelFunc:OO};function LO(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{blockShape:r,paddings:i}=s;ut([o],"spaceToBatchND");const a=K(r),l=[[0,0]];l.push(...i);for(let I=1+r.length;I<o.shape.length;++I)l.push([0,0]);const c=W1.kernelFunc({inputs:{x:o},backend:e,attrs:{paddings:l,constantValue:0}}),u=Bi(c.shape,r,a,!1),h=zi(u.length,r.length,!1),d=Vi(c.shape,r,a,!1),m=Kt({inputs:{x:c},backend:e,attrs:{shape:u}}),b=tn({inputs:{x:m},backend:e,attrs:{perm:h}}),C=Kt({inputs:{x:b},backend:e,attrs:{shape:d}});return e.disposeIntermediateTensorInfo(c),e.disposeIntermediateTensorInfo(m),e.disposeIntermediateTensorInfo(b),C}const PO={kernelName:bl,backendName:"cpu",kernelFunc:LO};function BO(n){const{inputs:t,backend:e}=n,{indices:s,values:o,denseShape:r,defaultValue:i}=t;if(r.shape.length!==1)throw new Error(`Dense shape must be a vector, saw:
        ${r.shape}`);if(s.shape.length!==2)throw new Error(`Indices must be a matrix, saw:
        ${s.shape}`);if(o.shape.length!==1)throw new Error(`Values must be a vector, saw:
        ${o.shape}`);if(i.shape.length!==0)throw new Error(`Default value must be a scalar, saw:
        ${i.shape}`);const a=e.data.get(s.dataId).values,l=e.data.get(o.dataId).values,c=e.data.get(r.dataId).values,u=e.data.get(i.dataId).values[0],[h,d,p,f,m]=f1(a,s.shape,s.dtype,l,o.dtype,c,u);return[e.makeTensorInfo(d,s.dtype,h),e.makeTensorInfo([d[0]],o.dtype,p),e.makeTensorInfo([f.length],"bool",new Uint8Array(f.map(g=>Number(g)))),e.makeTensorInfo([m.length],s.dtype,new Int32Array(m))]}const zO={kernelName:lf,backendName:"cpu",kernelFunc:BO};function VO(n){const{inputs:t,backend:e}=n,{inputIndices:s,inputShape:o,newShape:r}=t;if(s.shape.length!==2)throw new Error(`Input indices should be a matrix but received shape
        ${s.shape}`);if(o.shape.length!==1)throw new Error(`Input shape should be a vector but received shape
        ${o.shape}`);if(r.shape.length!==1)throw new Error(`Target shape should be a vector but received shape ${r.shape}`);const i=Array.from(e.data.get(o.dataId).values),a=e.data.get(s.dataId).values,l=Array.from(e.data.get(r.dataId).values),[c,u,h]=m1(a,s.shape,s.dtype,i,l);return[e.makeTensorInfo(u,s.dtype,c),e.makeTensorInfo([h.length],r.dtype,new Int32Array(h))]}const WO={kernelName:cf,backendName:"cpu",kernelFunc:VO};function UO(n){const{inputs:t,backend:e}=n,{data:s,indices:o,segmentIds:r}=t;if(s.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(o.shape.length!==1)throw new Error(`Indices should be a vector but received shape
          ${o.shape}`);if(r.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
          ${r.shape}`);if(o.shape[0]!==r.shape[0])throw new Error("segmentIds and indices should have same size.");const i=e.data.get(s.dataId).values,a=e.data.get(o.dataId).values,l=e.data.get(r.dataId).values,[c,u]=up(i,s.shape,s.dtype,a,l,!0);return e.makeTensorInfo(u,s.dtype,c)}const GO={kernelName:uf,backendName:"cpu",kernelFunc:UO};function HO(n){const{inputs:t,backend:e}=n,{data:s,indices:o,segmentIds:r}=t;if(s.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(o.shape.length!==1)throw new Error(`Indices should be a vector but received shape
         ${o.shape}`);if(r.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
         ${r.shape}`);if(o.shape[0]!==r.shape[0])throw new Error("segmentIds and indices should have same size.");const i=e.data.get(s.dataId).values,a=e.data.get(o.dataId).values,l=e.data.get(r.dataId).values,[c,u]=up(i,s.shape,s.dtype,a,l);return e.makeTensorInfo(u,s.dtype,c)}const qO={kernelName:hf,backendName:"cpu",kernelFunc:HO};function XO(n){const{inputs:t,backend:e,attrs:s}=n,{sparseIndices:o,sparseValues:r,defaultValue:i}=t,{outputShape:a}=s,{sliceRank:l,numUpdates:c,sliceSize:u,strides:h,outputSize:d}=bo(r,o,a),p=!1,f=e.bufferSync(o);let m;switch(r.dtype){case"bool":{const g=e.bufferSync(r),x=!!e.data.get(i.dataId).values[0];m=Eo(f,g,a,d,u,c,l,h,x,p);break}case"float32":{const g=e.bufferSync(r),x=e.data.get(i.dataId).values[0];m=Eo(f,g,a,d,u,c,l,h,x,p);break}case"int32":{const g=e.bufferSync(r),x=e.data.get(i.dataId).values[0];m=Eo(f,g,a,d,u,c,l,h,x,p);break}case"string":{const g=e.bufferSync(r),x=Ds(e.data.get(i.dataId).values[0]);m=Eo(f,g,a,d,u,c,l,h,x,p);break}default:throw new Error(`Unsupported type ${r.dtype}`)}return e.makeTensorInfo(a,m.dtype,m.values)}const KO={kernelName:df,backendName:"cpu",kernelFunc:XO};function jO(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{numOrSizeSplits:r,axis:i}=s,a=vt(i,o.shape)[0],l=wd(o,r,a),c=new Array(o.shape.length).fill(0),u=o.shape.slice();return l.map(h=>{const d=[...u];d[a]=h;const p=Ro({inputs:{x:o},backend:e,attrs:{begin:c,size:d}});return c[a]+=h,p})}const YO={kernelName:yl,backendName:"cpu",kernelFunc:jO};const ZO={kernelName:Ku,backendName:"cpu",kernelFunc:({inputs:n,backend:t})=>{const{x:e}=n,s=t;ut(e,"square");const o=s.data.get(e.dataId).values,r=new Float32Array(o.length);for(let a=0;a<o.length;++a){const l=o[a];r[a]=l*l}return{dataId:s.write(r,e.shape,e.dtype),shape:e.shape,dtype:e.dtype}}};const QO=Wt($i,(n,t)=>{const e=t;return isNaN(n)?NaN:n>0?1:e.alpha}),JO={kernelName:$i,backendName:"cpu",kernelFunc:QO};function tM(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{begin:r,end:i,strides:a,beginMask:l,endMask:c,ellipsisMask:u,newAxisMask:h,shrinkAxisMask:d}=s;ut(o,"stridedSlice");const{finalShapeSparse:p,finalShape:f,isIdentity:m,sliceDim0:g,isSimpleSlice:x,begin:b,end:w,strides:y}=ag(o.shape,r,i,a,l,c,u,h,d);let C;if(m)C=Kt({inputs:{x:o},backend:e,attrs:{shape:f}});else if(g||x){T(o.shape.length>=1,()=>`Input must have rank at least 1, got: ${o.shape.length}`);const I=og(b,w,y),v=Ro({inputs:{x:o},backend:e,attrs:{begin:b,size:I}});C=Kt({inputs:{x:v},backend:e,attrs:{shape:f}}),e.disposeIntermediateTensorInfo(v)}else{const I=e.bufferSync(o),v=b1(p,I,y,b);C=e.makeTensorInfo(f,v.dtype,v.values)}return C}const eM={kernelName:Yu,backendName:"cpu",kernelFunc:tM};function nM(n){const{inputs:t,backend:e,attrs:s}=n,{separator:o,nGramWidths:r,leftPad:i,rightPad:a,padWidth:l,preserveShortSequences:c}=s,{data:u,dataSplits:h}=t,d=e.data.get(u.dataId).values,p=e.data.get(h.dataId).values,[f,m]=y1(d,p,o,r,i,a,l,c);return[e.makeTensorInfo([f.length],"string",f),e.makeTensorInfo(h.shape,"int32",m)]}const sM={kernelName:pf,backendName:"cpu",kernelFunc:nM};function oM(n){const{inputs:t,backend:e,attrs:s}=n,{skipEmpty:o}=s,{input:r,delimiter:i}=t;if(r.dtype!=="string")throw new Error("Input must be of datatype string");if(r.shape.length!==1)throw new Error(`Input must be a vector, got shape: ${r.shape}`);if(i.shape.length!==0)throw new Error(`Delimiter must be a scalar, got shape: ${i.shape}`);const a=e.data.get(r.dataId).values,l=e.data.get(i.dataId).values[0],[c,u,h]=w1(a,l,o),d=u.length;return[e.makeTensorInfo([d,2],"int32",c),e.makeTensorInfo([d],"string",u),e.makeTensorInfo([2],"int32",new Int32Array(h))]}const rM={kernelName:ff,backendName:"cpu",kernelFunc:oM};function iM(n){const{inputs:t,backend:e,attrs:s}=n,{numBuckets:o}=s,{input:r}=t;if(r.dtype!=="string")throw new Error("Input must be of datatype string");if(o<=0)throw new Error("Number of buckets must be at least 1");const i=e.data.get(r.dataId).values,a=C1(i,o);return e.makeTensorInfo(r.shape,"int32",a)}const aM={kernelName:mf,backendName:"cpu",kernelFunc:iM};const lM=Wt(yi,n=>Math.tan(n)),cM={kernelName:yi,backendName:"cpu",kernelFunc:lM};const uM=Wt(wi,n=>Math.tanh(n)),hM={kernelName:wi,backendName:"cpu",kernelFunc:uM};function dM(n){const{inputs:t,backend:e}=n,{tensor:s,indices:o,updates:r}=t,{sliceRank:i,numUpdates:a,sliceSize:l,strides:c,outputSize:u}=bo(r,o,s.shape),h=!1,d=e.bufferSync(o),p=e.bufferSync(r),f=e.bufferSync(s),m=Eo(d,p,s.shape,u,l,a,i,c,f,h);return e.makeTensorInfo(s.shape,m.dtype,m.values)}const pM={kernelName:rf,backendName:"cpu",kernelFunc:dM};function fM(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{reps:r}=s;ut(o,"tile");const i=I1(e.bufferSync(o),r);return e.makeTensorInfo(i.shape,i.dtype,i.values)}const mM={kernelName:Ci,backendName:"cpu",kernelFunc:fM};function gM(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{k:r,sorted:i}=s;ut(o,"topk");const a=e.data.get(o.dataId).values,[l,c]=k1(a,o.shape,o.dtype,r,i);return[e.makeTensorInfo(l.shape,l.dtype,l.values),e.makeTensorInfo(c.shape,c.dtype,c.values)]}const xM={kernelName:Zu,backendName:"cpu",kernelFunc:gM};function bM(n){const{inputs:t,attrs:e,backend:s}=n,{image:o,transforms:r}=t,{interpolation:i,fillMode:a,fillValue:l,outputShape:c}=e,[u,h,d,p]=o.shape,[f,m]=c!=null?c:[h,d],g=[u,f,m,p],x=ft(o.shape),b=x[0],w=x[1],y=x[2],C=ft(g),I=C[0],v=C[1],N=C[2],S=_e(o.dtype,K(g));S.fill(l);const k=s.data.get(o.dataId).values,$=s.data.get(r.dataId).values;for(let R=0;R<u;++R){const A=r.shape[0]===1?$:$.subarray(R*8,R*8+8);for(let F=0;F<f;++F)for(let _=0;_<m;++_)for(let B=0;B<p;++B){let O;const V=A[6]*_+A[7]*F+1;if(V===0)continue;const G=(A[0]*_+A[1]*F+A[2])/V,H=(A[3]*_+A[4]*F+A[5])/V,j=G1(G,d,a),Y=G1(H,h,a);switch(i){case"nearest":O=vM(k,h,d,b,w,y,R,Y,j,B,l);break;case"bilinear":O=kM(k,h,d,b,w,y,R,Y,j,B,l);break;default:throw new Error(`Error in Transform: Expect 'nearest' or 'bilinear', but got ${i}`)}const et=R*I+F*v+_*N+B;S[et]=O}return s.makeTensorInfo(g,o.dtype,S)}return{dataId:s.write(S,g,o.dtype),shape:o.shape,dtype:o.dtype}}const yM={kernelName:Qu,backendName:"cpu",kernelFunc:bM};function G1(n,t,e){switch(e){case"reflect":return wM(n,t);case"wrap":return CM(n,t);case"nearest":return IM(n,t);default:return $M(n)}}function wM(n,t){let e=n;if(e<0)if(t<=1)e=0;else{const s=2*t;e<s&&(e=s*Math.trunc(-e/s)+e),e=e<-t?e+s:-e-1}else if(e>t-1)if(t<=1)e=0;else{const s=2*t;e-=s*Math.trunc(e/s),e>=t&&(e=s-e-1)}return eo(0,e,t-1)}function CM(n,t){let e=n;if(e<0)if(t<=1)e=0;else{const s=t-1;e+=t*(Math.trunc(-e/s)+1)}else if(e>t-1)if(t<=1)e=0;else{const s=t-1;e-=t*Math.trunc(e/s)}return eo(0,e,t-1)}function $M(n,t){return n}function IM(n,t){return eo(0,n,t-1)}function ia(n,t,e,s,o,r,i,a,l,c,u){const h=i*s+a*o+l*r+c;return 0<=a&&a<t&&0<=l&&l<e?n[h]:u}function vM(n,t,e,s,o,r,i,a,l,c,u){const h=Math.round(a),d=Math.round(l);return ia(n,t,e,s,o,r,i,h,d,c,u)}function kM(n,t,e,s,o,r,i,a,l,c,u){const h=Math.floor(a),d=Math.floor(l),p=h+1,f=d+1,m=(f-l)*ia(n,t,e,s,o,r,i,h,d,c,u)+(l-d)*ia(n,t,e,s,o,r,i,h,f,c,u),g=(f-l)*ia(n,t,e,s,o,r,i,p,d,c,u)+(l-d)*ia(n,t,e,s,o,r,i,p,f,c,u);return(p-a)*m+(a-h)*g}function SM(n){const{inputs:t,attrs:e,backend:s}=n,{axis:o}=e,{x:r}=t;ut(r,"unique");const i=s.data.get(r.dataId).values,{outputValues:a,outputShape:l,indices:c}=S1(i,o,r.shape,r.dtype);return[s.makeTensorInfo(l,r.dtype,a),s.makeTensorInfo([c.length],"int32",c)]}const NM={kernelName:Ju,backendName:"cpu",kernelFunc:SM};function TM(n){const{inputs:t,backend:e,attrs:s}=n,{value:o}=t;let{axis:r}=s;r<0&&(r+=o.shape.length);const i=o.shape.length,a=o.shape[r],l=new Array(i-1);let c=0;for(let p=0;p<i;p++)p!==r&&(l[c++]=o.shape[p]);const u=new Array(i).fill(0),h=o.shape.slice();h[r]=1;const d=new Array(a);for(let p=0;p<d.length;p++){u[r]=p;const f=Ro({inputs:{x:o},backend:e,attrs:{begin:u,size:h}});d[p]=Kt({inputs:{x:f},backend:e,attrs:{shape:l}}),e.disposeIntermediateTensorInfo(f)}return d}const EM={kernelName:Cl,backendName:"cpu",kernelFunc:TM};function RM(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,segmentIds:r}=t,{numSegments:i}=s;ut(o,"unsortedSegmentSum");const a=o.shape.length,l=r.shape.length,c=[],u=[],h=a-l;let d=r;for(let f=0;f<h;++f){const m=Ec({inputs:{input:d},backend:e,attrs:{dim:f+1}});d=m,u.push(m)}for(let f=0;f<i;++f){const m=Rs(f,"int32"),g=e.makeTensorInfo([],"int32",m),x=L0({inputs:{a:g,b:d},backend:e}),b=Ks({inputs:{x},backend:e,attrs:{dtype:"float32"}}),w=Sc({inputs:{a:b,b:o},backend:e}),y=ra({inputs:{x:w},backend:e,attrs:{axis:0,keepDims:!1}});c.push(y),u.push(g),u.push(x),u.push(b),u.push(w),u.push(y)}const p=V1({inputs:c,backend:e,attrs:{axis:0}});return u.forEach(f=>e.disposeIntermediateTensorInfo(f)),p}const AM={kernelName:$l,backendName:"cpu",kernelFunc:RM};const DM=[TA,lR,RA,DA,fR,_A,MA,PA,zA,WA,GA,qA,KA,ZA,JA,nD,oD,iD,lD,SA,uD,dD,fD,gR,gD,dR,bR,bD,cR,yD,CD,$D,vD,SD,TD,RD,DD,_D,MD,PD,zD,WD,GD,qD,XD,jD,ZD,JD,tF,eF,nF,oF,aF,yA,cF,yR,xF,wR,bF,$R,vF,kF,NF,vR,SR,EF,AF,FF,OF,TR,RR,uR,LF,wD,BF,VF,UF,wA,DR,_R,HF,MR,XF,YF,QF,e_,s_,r_,i_,PR,l_,u_,d_,f_,g_,b_,w_,zR,$_,k_,T_,WR,GR,A_,__,L_,qR,B_,V_,W_,W1,q_,$A,jR,K_,Y_,Q_,tO,hR,fp,nO,IA,vA,kA,oO,iO,lO,uO,dO,pO,mO,sA,xO,$O,vO,TO,rA,RO,DO,_O,iA,S_,MO,PO,zO,WO,GO,qO,KO,YO,cA,ZO,hA,pA,JO,eM,sM,rM,aM,xA,rF,cM,hM,pM,mM,xM,yM,XR,NM,EM,AM,z_];for(const n of DM)wf(n);const Ao={},Ac={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function FM(n,t){Ao[n]=t}function Xn(n,t){if(!(n in Ao)||t!=null){const s=OM(n,t);if(s!==null)Ao[n]=s;else return console.log("Could not get context for WebGL version",n),null}const e=Ao[n];return e==null||e.isContextLost()?(delete Ao[n],Xn(n)):(e.disable(e.DEPTH_TEST),e.disable(e.STENCIL_TEST),e.disable(e.BLEND),e.disable(e.DITHER),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SAMPLE_COVERAGE),e.enable(e.SCISSOR_TEST),e.enable(e.CULL_FACE),e.cullFace(e.BACK),Ao[n])}function _M(n){if(!q().getBool("IS_SAFARI")&&typeof OffscreenCanvas!="undefined"&&n===2)return new OffscreenCanvas(300,150);if(typeof document!="undefined")return document.createElement("canvas");throw new Error("Cannot create a canvas in this context")}function OM(n,t){if(n!==1&&n!==2)throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");const e=t==null?_M(n):t;return e.addEventListener("webglcontextlost",s=>{s.preventDefault(),delete Ao[n]},!1),q().getBool("SOFTWARE_WEBGL_ENABLED")&&(Ac.failIfMajorPerformanceCaveat=!1),n===1?e.getContext("webgl",Ac)||e.getContext("experimental-webgl",Ac):e.getContext("webgl2",Ac)}var aa;(function(n){n[n.DENSE=0]="DENSE",n[n.SHARED_BATCH=1]="SHARED_BATCH"})(aa||(aa={}));var yn;(function(n){n[n.RENDER=0]="RENDER",n[n.UPLOAD=1]="UPLOAD",n[n.PIXELS=2]="PIXELS",n[n.DOWNLOAD=3]="DOWNLOAD"})(yn||(yn={}));var Te;(function(n){n[n.UNPACKED_FLOAT16=0]="UNPACKED_FLOAT16",n[n.UNPACKED_FLOAT32=1]="UNPACKED_FLOAT32",n[n.PACKED_4X1_UNSIGNED_BYTE=2]="PACKED_4X1_UNSIGNED_BYTE",n[n.PACKED_2X2_FLOAT32=3]="PACKED_2X2_FLOAT32",n[n.PACKED_2X2_FLOAT16=4]="PACKED_2X2_FLOAT16"})(Te||(Te={}));function la(n,t){return[t,n]}function MM(n,t){return n*t}function Dc(n){const t=K(n),e=Math.ceil(t/4);return ou(e)}function hr(n,t){return[Math.max(1,Math.ceil(t/2)),Math.max(1,Math.ceil(n/2))]}function LM(n,t){const[e,s]=hr(n,t);return e*s*4}function xp(n,t){const e=n;let s,o,r,i,a,l,c,u,h,d;return q().getNumber("WEBGL_VERSION")===2?(s=e.R32F,o=e.R16F,r=e.RGBA16F,i=e.RGBA32F,a=e.RED,c=4,u=1,h=e.HALF_FLOAT,d=e.FLOAT,l=e.RGBA8):(s=n.RGBA,o=n.RGBA,r=n.RGBA,i=e.RGBA,a=n.RGBA,c=4,u=4,h=t!=null?t.HALF_FLOAT_OES:null,d=n.FLOAT,l=n.RGBA),{internalFormatFloat:s,internalFormatHalfFloat:o,internalFormatPackedHalfFloat:r,internalFormatPackedFloat:i,textureFormatFloat:a,downloadTextureFormat:l,downloadUnpackNumChannels:c,defaultNumChannels:u,textureTypeHalfFloat:h,textureTypeFloat:d}}function lt(n,t){const e=t();return q().getBool("DEBUG")&&PM(n),e}function PM(n){const t=n.getError();if(t!==n.NO_ERROR)throw new Error("WebGL Error: "+WM(n,t))}const BM=596e-10,zM=65504;function VM(n){return!!(q().getBool("WEBGL_RENDER_FLOAT32_ENABLED")||n===0||BM<Math.abs(n)&&Math.abs(n)<zM)}function WM(n,t){switch(t){case n.NO_ERROR:return"NO_ERROR";case n.INVALID_ENUM:return"INVALID_ENUM";case n.INVALID_VALUE:return"INVALID_VALUE";case n.INVALID_OPERATION:return"INVALID_OPERATION";case n.INVALID_FRAMEBUFFER_OPERATION:return"INVALID_FRAMEBUFFER_OPERATION";case n.OUT_OF_MEMORY:return"OUT_OF_MEMORY";case n.CONTEXT_LOST_WEBGL:return"CONTEXT_LOST_WEBGL";default:return`Unknown error code ${t}`}}function Fc(n,t){return Is(n,()=>n.getExtension(t),'Extension "'+t+'" not supported on this browser.')}function UM(n,t){const e=Is(n,()=>n.createShader(n.VERTEX_SHADER),"Unable to create vertex WebGLShader.");if(lt(n,()=>n.shaderSource(e,t)),lt(n,()=>n.compileShader(e)),n.getShaderParameter(e,n.COMPILE_STATUS)===!1)throw console.log(n.getShaderInfoLog(e)),new Error("Failed to compile vertex shader.");return e}function GM(n,t){const e=Is(n,()=>n.createShader(n.FRAGMENT_SHADER),"Unable to create fragment WebGLShader.");if(lt(n,()=>n.shaderSource(e,t)),lt(n,()=>n.compileShader(e)),q().get("ENGINE_COMPILE_ONLY"))return e;if(n.getShaderParameter(e,n.COMPILE_STATUS)===!1)throw H1(t,n.getShaderInfoLog(e)),new Error("Failed to compile fragment shader.");return e}const HM=/ERROR: [0-9]+:([0-9]+):/g;function H1(n,t){const e=HM.exec(t);if(e==null){console.log(`Couldn't parse line number in error: ${t}`),console.log(n);return}const s=+e[1],o=n.split(`
`),r=o.length.toString().length+2,i=o.map((h,d)=>zo((d+1).toString(),r)+h);let a=0;for(let h=0;h<i.length;h++)a=Math.max(i[h].length,a);const l=i.slice(0,s-1),c=i.slice(s-1,s),u=i.slice(s);console.log(l.join(`
`)),console.log(t.split(`
`)[0]),console.log(`%c ${zo(c[0],a)}`,"border:1px solid red; background-color:#e3d2d2; color:#a61717"),console.log(u.join(`
`))}function qM(n){return Is(n,()=>n.createProgram(),"Unable to create WebGLProgram.")}function XM(n,t){if(lt(n,()=>n.linkProgram(t)),!q().get("ENGINE_COMPILE_ONLY")&&n.getProgramParameter(t,n.LINK_STATUS)===!1)throw console.log(n.getProgramInfoLog(t)),new Error("Failed to link vertex and fragment shaders.")}function bp(n,t){if(lt(n,()=>n.validateProgram(t)),n.getProgramParameter(t,n.VALIDATE_STATUS)===!1)throw console.log(n.getProgramInfoLog(t)),new Error("Shader program validation failed.")}function KM(n,t){const e=Is(n,()=>n.createBuffer(),"Unable to create WebGLBuffer");return lt(n,()=>n.bindBuffer(n.ARRAY_BUFFER,e)),lt(n,()=>n.bufferData(n.ARRAY_BUFFER,t,n.STATIC_DRAW)),e}function jM(n,t){const e=Is(n,()=>n.createBuffer(),"Unable to create WebGLBuffer");return lt(n,()=>n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e)),lt(n,()=>n.bufferData(n.ELEMENT_ARRAY_BUFFER,t,n.STATIC_DRAW)),e}function YM(n){return Is(n,()=>n.createTexture(),"Unable to create WebGLTexture.")}function ZM(n,t){const e=q().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(n<=0||t<=0){const s=`[${n}x${t}]`;throw new Error("Requested texture size "+s+" is invalid.")}if(n>e||t>e){const s=`[${n}x${t}]`,o=`[${e}x${e}]`;throw new Error("Requested texture size "+s+" greater than WebGL maximum on this browser / GPU "+o+".")}}function QM(n){return Is(n,()=>n.createFramebuffer(),"Unable to create WebGLFramebuffer.")}function q1(n,t,e,s,o,r,i){const a=n.getAttribLocation(t,e);return a===-1?!1:(lt(n,()=>n.bindBuffer(n.ARRAY_BUFFER,s)),lt(n,()=>n.vertexAttribPointer(a,o,n.FLOAT,!1,r,i)),lt(n,()=>n.enableVertexAttribArray(a)),!0)}function JM(n,t,e){oL(n,e),lt(n,()=>n.activeTexture(n.TEXTURE0+e)),lt(n,()=>n.bindTexture(n.TEXTURE_2D,t))}function tL(n,t,e){return Is(n,()=>n.getUniformLocation(t,e),'uniform "'+e+'" not present in program.')}function eL(n,t,e){return n.getUniformLocation(t,e)}function nL(n,t,e,s){lt(n,()=>JM(n,t,s)),lt(n,()=>n.uniform1i(e,s))}function yp(n,t,e){lt(n,()=>n.bindFramebuffer(n.FRAMEBUFFER,e)),lt(n,()=>n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,t,0))}function X1(n,t){lt(n,()=>n.bindFramebuffer(n.FRAMEBUFFER,t)),lt(n,()=>n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,null,0))}function _c(n){const t=n.checkFramebufferStatus(n.FRAMEBUFFER);if(t!==n.FRAMEBUFFER_COMPLETE)throw new Error("Error binding framebuffer: "+sL(n,t))}function sL(n,t){switch(t){case n.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case n.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case n.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case n.FRAMEBUFFER_UNSUPPORTED:return"FRAMEBUFFER_UNSUPPORTED";default:return`unknown error ${t}`}}function Is(n,t,e){const s=lt(n,()=>t());if(s==null)throw new Error(e);return s}function oL(n,t){const e=n.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,s=t+n.TEXTURE0;if(s<n.TEXTURE0||s>e){const o=`[gl.TEXTURE0, gl.TEXTURE${e}]`;throw new Error(`textureUnit must be in ${o}.`)}}function dr(n,t=2){return K(n.slice(0,n.length-t))}function pr(n){if(n.length===0)throw Error("Cannot get rows and columns of an empty shape array.");return[n.length>1?n[n.length-2]:1,n[n.length-1]]}function Oc(n){let t=[1,1,1];return n.length===0||n.length===1&&n[0]===1||(t=[dr(n),...pr(n)]),t}function rL(n,t=!1){let e=q().getNumber("WEBGL_MAX_TEXTURE_SIZE"),s=q().getNumber("WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE");s===1/0&&q().getBool("WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE")&&(s=e/2),t&&(e=e*2,s=s*2,n=n.map((a,l)=>l>=n.length-2?On(n[l]):n[l]),n.length===1&&(n=[2,n[0]])),n.length!==2&&(n=Ts(n).newShape);let o=K(n),r=null;n.length<=1&&o<=e?r=[1,o]:n.length===2&&n[0]<=e&&n[1]<=e?r=n:n.length===3&&n[0]*n[1]<=e&&n[2]<=e?r=[n[0]*n[1],n[2]]:n.length===3&&n[0]<=e&&n[1]*n[2]<=e?r=[n[0],n[1]*n[2]]:n.length===4&&n[0]*n[1]*n[2]<=e&&n[3]<=e?r=[n[0]*n[1]*n[2],n[3]]:n.length===4&&n[0]<=e&&n[1]*n[2]*n[3]<=e&&(r=[n[0],n[1]*n[2]*n[3]]);const i=r!=null&&Math.max(...r)>s&&Math.min(...r)<=(t?2:1)&&Math.min(...r)>0;if(r==null||i)if(t){const a=dr(n);let l=2,c=2;n.length&&([l,c]=pr(n)),o=a*(l/2)*(c/2),r=ou(o).map(u=>u*2)}else r=ou(o);return r}function Mc(n){return n%2===0}function Lc(n,t){if(n=n.slice(-2),t=t.slice(-2),Pt(n,t)||!n.length||!t.length||n[0]===0||n[1]===0||t[0]===0||t[1]===0)return!0;if(n.length!==t.length){const e=n[n.length-1],s=t[t.length-1];if(e===s||Mc(e)&&Mc(s)&&(n[0]===1||t[0]===1))return!0}return n[1]===t[1]&&Mc(n[0])&&Mc(t[0])}let wp,Cp;function iL(n){if(wp==null){const t=Xn(n);wp=t.getParameter(t.MAX_TEXTURE_SIZE)}return wp}function aL(n){if(Cp==null){const t=Xn(n);Cp=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,Cp)}function lL(n){if(n===0)return 0;let t;const e=Xn(n);return An(e,"EXT_disjoint_timer_query_webgl2")&&n===2?t=2:An(e,"EXT_disjoint_timer_query")?t=1:t=0,t}function An(n,t){return n.getExtension(t)!=null}function K1(n){try{if(Xn(n)!=null)return!0}catch(t){return console.log("Error when getting WebGL context: ",t),!1}return!1}function cL(n){if(n===0)return!1;const t=Xn(n);if(n===1){if(!An(t,"OES_texture_float"))return!1}else if(!An(t,"EXT_color_buffer_float"))return!1;return $p(t)}function uL(n){if(n===0)return!1;const t=Xn(n);if(n===1){if(!An(t,"OES_texture_float")||!An(t,"WEBGL_color_buffer_float"))return!1}else{if(An(t,"EXT_color_buffer_float"))return $p(t);const s="EXT_color_buffer_half_float";if(An(t,s)){const o=t.getExtension(s);return hL(t,o)}return!1}return $p(t)}function $p(n){const t=xp(n),e=n.createTexture();n.bindTexture(n.TEXTURE_2D,e),n.texImage2D(n.TEXTURE_2D,0,t.internalFormatFloat,1,1,0,t.textureFormatFloat,t.textureTypeFloat,null);const r=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,r),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e,0);const i=n.checkFramebufferStatus(n.FRAMEBUFFER)===n.FRAMEBUFFER_COMPLETE;return n.bindTexture(n.TEXTURE_2D,null),n.bindFramebuffer(n.FRAMEBUFFER,null),n.deleteTexture(e),n.deleteFramebuffer(r),i}function hL(n,t){const e=xp(n,t),s=n.createTexture();n.bindTexture(n.TEXTURE_2D,s),n.texImage2D(n.TEXTURE_2D,0,e.internalFormatHalfFloat,1,1,0,e.textureFormatFloat,e.textureTypeHalfFloat,null);const i=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,i),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,s,0);const a=n.checkFramebufferStatus(n.FRAMEBUFFER)===n.FRAMEBUFFER_COMPLETE;return n.bindTexture(n.TEXTURE_2D,null),n.bindFramebuffer(n.FRAMEBUFFER,null),n.deleteTexture(s),n.deleteFramebuffer(i),a}function dL(n){return n!==2?!1:Xn(n).fenceSync!=null}function ca(n,t){Array.isArray(n)||(n=[n]),n.forEach(e=>{e!=null&&T(e.dtype!=="complex64",()=>`${t} does not support complex64 tensors in the WebGL backend.`)})}const dt=q();dt.registerFlag("HAS_WEBGL",()=>dt.getNumber("WEBGL_VERSION")>0),dt.registerFlag("WEBGL_VERSION",()=>K1(2)?2:K1(1)?1:0),dt.registerFlag("WEBGL_CHECK_NUMERICAL_PROBLEMS",()=>!1),dt.registerFlag("WEBGL_BUFFER_SUPPORTED",()=>dt.get("WEBGL_VERSION")===2),dt.registerFlag("WEBGL_CPU_FORWARD",()=>!0),dt.registerFlag("WEBGL_FORCE_F16_TEXTURES",()=>!1),dt.registerFlag("WEBGL_PACK",()=>dt.getBool("HAS_WEBGL")),dt.registerFlag("WEBGL_PACK_NORMALIZATION",()=>dt.getBool("WEBGL_PACK")),dt.registerFlag("WEBGL_PACK_CLIP",()=>dt.getBool("WEBGL_PACK")),dt.registerFlag("WEBGL_PACK_DEPTHWISECONV",()=>dt.getBool("WEBGL_PACK")),dt.registerFlag("WEBGL_PACK_BINARY_OPERATIONS",()=>dt.getBool("WEBGL_PACK")),dt.registerFlag("WEBGL_PACK_UNARY_OPERATIONS",()=>dt.getBool("WEBGL_PACK")),dt.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS",()=>dt.getBool("WEBGL_PACK")),dt.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS",()=>dt.getBool("WEBGL_PACK")),dt.registerFlag("WEBGL_PACK_REDUCE",()=>dt.getBool("WEBGL_PACK")),dt.registerFlag("WEBGL_LAZILY_UNPACK",()=>dt.getBool("WEBGL_PACK")),dt.registerFlag("WEBGL_CONV_IM2COL",()=>dt.getBool("WEBGL_PACK")),dt.registerFlag("WEBGL_PACK_CONV2DTRANSPOSE",()=>dt.getBool("WEBGL_PACK")),dt.registerFlag("WEBGL_MAX_TEXTURE_SIZE",()=>iL(dt.getNumber("WEBGL_VERSION"))),dt.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER",()=>aL(dt.getNumber("WEBGL_VERSION"))),dt.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",()=>{const n=dt.getNumber("WEBGL_VERSION");return n===0?0:lL(n)}),dt.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",()=>dt.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&!Pf()),dt.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE",()=>cL(dt.getNumber("WEBGL_VERSION"))),dt.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED",()=>dt.getBool("WEBGL_FORCE_F16_TEXTURES")?!1:dt.getBool("WEBGL_RENDER_FLOAT32_CAPABLE")),dt.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED",()=>uL(dt.getNumber("WEBGL_VERSION"))),dt.registerFlag("WEBGL_FENCE_API_ENABLED",()=>dL(dt.getNumber("WEBGL_VERSION"))),dt.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM",()=>dt.getBool("WEBGL_RENDER_FLOAT32_ENABLED")?4:0),dt.registerFlag("WEBGL_DELETE_TEXTURE_THRESHOLD",()=>-1,n=>{if(typeof n!="number")throw new Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be a number but got ${n}.`);if(n<0&&n!==-1)throw new Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be -1 (indicating never delete) or at least 0, but got ${n}.`)}),dt.registerFlag("WEBGL_FLUSH_THRESHOLD",()=>Pf()?1:-1,n=>{if(typeof n!="number")throw new Error(`WEBGL_FLUSH_THRESHOLD must be a number but got ${n}.`);if(n<0&&n!==-1)throw new Error(`WEBGL_FLUSH_THRESHOLD must be -1 (indicating never manual flush) or at least 0, but got ${n}.`)}),dt.registerFlag("CPU_HANDOFF_SIZE_THRESHOLD",()=>128),dt.registerFlag("WEBGL_USE_SHAPES_UNIFORMS",()=>!1),dt.registerFlag("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD",()=>1e5),dt.registerFlag("TOPK_K_CPU_HANDOFF_THRESHOLD",()=>128),dt.registerFlag("WEBGL_EXP_CONV",()=>!1),dt.registerFlag("SOFTWARE_WEBGL_ENABLED",()=>dt.getBool("IS_TEST")),dt.registerFlag("WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE",()=>1/0),dt.registerFlag("WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE",()=>!1),dt.registerFlag("WEBGL2_ISNAN_CUSTOM",()=>!1),dt.registerFlag("ENGINE_COMPILE_ONLY",()=>!1);function Ge(){let n,t,e,s,o,r,i,a,l,c;return q().getNumber("WEBGL_VERSION")===2?(n="#version 300 es",t="in",e="out",s="in",o="texture",r="outputColor",i="out vec4 outputColor;",a=q().getBool("WEBGL2_ISNAN_CUSTOM")?`
      bool isnan_custom(float val) {
        uint floatToUint = floatBitsToUint(val);
        return (floatToUint & 0x7fffffffu) > 0x7f800000u;
      }

      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan_custom(val.x),
          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));
      }

      #define isnan(value) isnan_custom(value)
    `:"",l="",c=`
      #define round(value) newRound(value)
      int newRound(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 newRound(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `):(n="",t="attribute",e="varying",s="varying",o="texture2D",r="gl_FragColor",i="",a=`
      #define isnan(value) isnan_custom(value)
      bool isnan_custom(float val) {
        return (val > 0. || val < 1. || val == 0.) ? false : true;
      }
      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));
      }
    `,l=`
      uniform float INFINITY;

      bool isinf(float val) {
        return abs(val) == INFINITY;
      }
      bvec4 isinf(vec4 val) {
        return equal(abs(val), vec4(INFINITY));
      }
    `,c=`
      int round(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 round(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `),{version:n,attribute:t,varyingVs:e,varyingFs:s,texture2D:o,output:r,defineOutput:i,defineSpecialNaN:a,defineSpecialInf:l,defineRound:c}}function Do(n,t,e="index"){const s=ft(t);return s.map((o,r)=>{const i=`int ${n[r]} = ${e} / ${o}`,a=r===s.length-1?`int ${n[r+1]} = ${e} - ${n[r]} * ${o}`:`index -= ${n[r]} * ${o}`;return`${i}; ${a};`}).join("")}function Pc(n,t,e="index"){const s=ft(t);return s.map((o,r)=>{const i=`int ${n[r]} = ${e} / outShapeStrides[${r}]`,a=r===s.length-1?`int ${n[r+1]} = ${e} - ${n[r]} * outShapeStrides[${r}]`:`index -= ${n[r]} * outShapeStrides[${r}]`;return`${i}; ${a};`}).join("")}function pL(n,t){const e=n.length,s=n.map(r=>`${t}[${r}]`),o=new Array(e-1);o[e-2]=s[e-1];for(let r=e-3;r>=0;--r)o[r]=`(${o[r+1]} * ${s[r+1]})`;return o}function fL(n,t,e="index"){const s=n.map((r,i)=>i),o=pL(s,t);return o.map((r,i)=>{const a=`int ${n[i]} = ${e} / ${o[i]}`,l=i===o.length-1?`int ${n[i+1]} = ${e} - ${n[i]} * ${o[i]}`:`index -= ${n[i]} * ${o[i]}`;return`${a}; ${l};`}).join("")}function Ip(n){const t=ft(n).map(e=>e.toString());return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * ${t[0]} + coords.y * ${t[1]} + coords.z;
  }
`}function vp(){return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * outShapeStrides[0] + coords.y * outShapeStrides[1] + coords.z;
  }
`}const j1=`
  const float FLOAT_MAX = 1.70141184e38;
  const float FLOAT_MIN = 1.17549435e-38;

  lowp vec4 encode_float(highp float v) {
    if (isnan(v)) {
      return vec4(255, 255, 255, 255);
    }

    highp float av = abs(v);

    if(av < FLOAT_MIN) {
      return vec4(0.0, 0.0, 0.0, 0.0);
    } else if(v > FLOAT_MAX) {
      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
    } else if(v < -FLOAT_MAX) {
      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
    }

    highp vec4 c = vec4(0,0,0,0);

    highp float e = floor(log2(av));
    highp float m = exp2(fract(log2(av))) - 1.0;

    c[2] = floor(128.0 * m);
    m -= c[2] / 128.0;
    c[1] = floor(32768.0 * m);
    m -= c[1] / 32768.0;
    c[0] = floor(8388608.0 * m);

    highp float ebias = e + 127.0;
    c[3] = floor(ebias / 2.0);
    ebias -= c[3] * 2.0;
    c[2] += floor(ebias) * 128.0;

    c[3] += 128.0 * step(0.0, -v);

    return c / 255.0;
  }
`;const{getBroadcastDims:Y1}=c2;function mL(n,t,e){const s=[];if(n.forEach(p=>{const f=K(p.shapeInfo.logicalShape);if(p.shapeInfo.isUniform?s.push(`uniform float ${p.name}${f>1?`[${f}]`:""};`):(s.push(`uniform sampler2D ${p.name};`),s.push(`uniform int offset${p.name};`)),e.enableShapeUniforms){const{uniformShape:m}=kp(e.packedInputs,p.shapeInfo.logicalShape,p.shapeInfo.texShape);switch(m.length){case 1:s.push(`uniform int ${p.name}Shape;`);break;case 2:s.push(`uniform ivec2 ${p.name}Shape;`);break;case 3:s.push(`uniform ivec3 ${p.name}Shape;`);break;case 4:s.push(`uniform ivec4 ${p.name}Shape;`);break}s.push(`uniform ivec2 ${p.name}TexShape;`)}}),e.enableShapeUniforms){switch(t.logicalShape.length){case 1:s.push("uniform int outShape;");break;case 2:s.push("uniform ivec2 outShape;"),s.push("uniform int outShapeStrides;");break;case 3:s.push("uniform ivec3 outShape;"),s.push("uniform ivec2 outShapeStrides;");break;case 4:s.push("uniform ivec4 outShape;"),s.push("uniform ivec3 outShapeStrides;");break}s.push("uniform ivec2 outTexShape;")}e.customUniforms&&e.customUniforms.forEach(p=>{s.push(`uniform ${p.type} ${p.name}${p.arrayIndex?`[${p.arrayIndex}]`:""};`)});const o=s.join(`
`),r=n.map(p=>gL(p,t,e.packedInputs,e.enableShapeUniforms)).join(`
`),i=t.texShape,a=Ge(),l=yL(a);let c,u,h=$L(a);return t.isPacked?(c=xL(t.logicalShape,i,e.enableShapeUniforms),u=CL(a)):(c=bL(t.logicalShape,i,e.enableShapeUniforms),u=wL(a)),e.packedInputs&&(h+=SL),[h,l,u,o,c,r,e.userCode].join(`
`)}function fr(n,t=!1){const e=n.shapeInfo.logicalShape;switch(e.length){case 0:return PL(n,t);case 1:return zL(n,t);case 2:return WL(n,t);case 3:return GL(n,t);case 4:return qL(n,t);case 5:return XL(n);case 6:return KL(n);default:throw new Error(`${e.length}-D input sampling is not yet supported`)}}function Z1(n,t){switch(n.shapeInfo.logicalShape.length){case 0:return LL(n);case 1:return BL(n,t);case 2:return VL(n,t);case 3:return UL(n,t);default:return HL(n,t)}}function gL(n,t,e=!1,s){let o="";e?o+=Z1(n,s):o+=fr(n,s);const r=n.shapeInfo.logicalShape,i=t.logicalShape;return r.length<=i.length&&(e?o+=jL(n,t):o+=YL(n,t)),o}function xL(n,t,e){switch(n.length){case 0:return Q1();case 1:return NL(n,t,e);case 2:return OL(n,t,e);case 3:return EL(n,t,e);default:return AL(n,t,e)}}function bL(n,t,e){switch(n.length){case 0:return Q1();case 1:return TL(n,t,e);case 2:return ML(n,t,e);case 3:return RL(n,t,e);case 4:return DL(n,t,e);case 5:return FL(n,t);case 6:return _L(n,t);default:throw new Error(`${n.length}-D output sampling is not yet supported`)}}function yL(n){return`
    float sampleTexture(sampler2D textureSampler, vec2 uv) {
      return ${n.texture2D}(textureSampler, uv).r;
    }
  `}function wL(n){return`
    void setOutput(float val) {
      ${n.output} = vec4(val, 0, 0, 0);
    }
  `}function CL(n){return`
    void setOutput(vec4 val) {
      ${n.output} = val;
    }
  `}function $L(n){return`${n.version}
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    ${n.varyingFs} vec2 resultUV;
    ${n.defineOutput}
    const vec2 halfCR = vec2(0.5, 0.5);

    struct ivec5
    {
      int x;
      int y;
      int z;
      int w;
      int u;
    };

    struct ivec6
    {
      int x;
      int y;
      int z;
      int w;
      int u;
      int v;
    };

    uniform float NAN;
    ${n.defineSpecialNaN}
    ${n.defineSpecialInf}
    ${n.defineRound}

    int imod(int x, int y) {
      return x - y * (x / y);
    }

    int idiv(int a, int b, float sign) {
      int res = a / b;
      int mod = imod(a, b);
      if (sign < 0. && mod != 0) {
        res -= 1;
      }
      return res;
    }

    //Based on the work of Dave Hoskins
    //https://www.shadertoy.com/view/4djSRW
    #define HASHSCALE1 443.8975
    float random(float seed){
      vec2 p = resultUV * seed;
      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);
      p3 += dot(p3, p3.yzx + 19.19);
      return fract((p3.x + p3.y) * p3.z);
    }

    ${IL}
    ${vL}
    ${kL}
  `}const IL=`
vec2 uvFromFlat(int texNumR, int texNumC, int index) {
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {
  int texelIndex = index / 2;
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,vL=`
vec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,
  int texNumC, int row, int col) {
  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,kL=`
vec2 packedUVfrom3D(int texNumR, int texNumC,
    int texelsInBatch, int texelsInLogicalRow, int b,
    int row, int col) {
  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,SL=`
  float getChannel(vec4 frag, vec2 innerDims) {
    vec2 modCoord = mod(innerDims, 2.);
    return modCoord.x == 0. ?
      (modCoord.y == 0. ? frag.r : frag.g) :
      (modCoord.y == 0. ? frag.b : frag.a);
  }
  float getChannel(vec4 frag, int dim) {
    float modCoord = mod(float(dim), 2.);
    return modCoord == 0. ? frag.r : frag.g;
  }
`;function Q1(){return`
    int getOutputCoords() {
      return 0;
    }
  `}function NL(n,t,e){const s=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)];return s[0]===1?e?`
      int getOutputCoords() {
        return 2 * int(resultUV.x * ceil(float(outTexShape[1]) / 2.0));
      }
    `:`
      int getOutputCoords() {
        return 2 * int(resultUV.x * ${s[1]}.0);
      }
    `:s[1]===1?e?`
      int getOutputCoords() {
        return 2 * int(resultUV.y * ceil(float(outTexShape[0]) / 2.0));
      }
    `:`
      int getOutputCoords() {
        return 2 * int(resultUV.y * ${s[0]}.0);
      }
    `:e?`
    int getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      return 2 * (resTexRC.x * packedTexShape[1] + resTexRC.y);
    }
  `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${s[0]}, ${s[1]}));
      return 2 * (resTexRC.x * ${s[1]} + resTexRC.y);
    }
  `}function TL(n,t,e){return t[0]===1?e?`
      int getOutputCoords() {
        return int(resultUV.x * float(outTexShape[1]));
      }
    `:`
      int getOutputCoords() {
        return int(resultUV.x * ${t[1]}.0);
      }
    `:t[1]===1?e?`
      int getOutputCoords() {
        return int(resultUV.y * float(outTexShape[0]));
      }
    `:`
      int getOutputCoords() {
        return int(resultUV.y * ${t[0]}.0);
      }
    `:e?`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(outTexShape[0], outTexShape[1]));
      return resTexRC.x * outTexShape[1] + resTexRC.y;
    }
  `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${t[0]}, ${t[1]}));
      return resTexRC.x * ${t[1]} + resTexRC.y;
    }
  `}function EL(n,t,e){if(e)return`
    ivec3 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      int texelsInLogicalRow = int(ceil(float(outShape[2]) / 2.0));
      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;

      int b = index / texelsInBatch;
      index -= b * texelsInBatch;

      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec3(b, r, c);
    }
  `;const s=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)],o=Math.ceil(n[2]/2),r=o*Math.ceil(n[1]/2);return`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${s[0]}, ${s[1]}));
      int index = resTexRC.x * ${s[1]} + resTexRC.y;

      int b = index / ${r};
      index -= b * ${r};

      int r = 2 * (index / ${o});
      int c = imod(index, ${o}) * 2;

      return ivec3(b, r, c);
    }
  `}function RL(n,t,e){if(e)return`
  ivec3 getOutputCoords() {
    ivec2 resTexRC = ivec2(resultUV.yx *
                           vec2(outTexShape[0], outTexShape[1]));
    int index = resTexRC.x * outTexShape[1] + resTexRC.y;
    ${Pc(["r","c","d"],n)}
    return ivec3(r, c, d);
  }
`;const s=Do(["r","c","d"],n);return`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;
      ${s}
      return ivec3(r, c, d);
    }
  `}function AL(n,t,e){if(e)return`
    ivec4 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;

      int texelsInLogicalRow = int(ceil(float(outShape[3]) / 2.0));
      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[2]) / 2.0));
      int texelsInBatchN = texelsInBatch * outShape[1];

      int b2 = index / texelsInBatchN;
      index -= b2 * texelsInBatchN;

      int b = index / texelsInBatch;
      index -= b * texelsInBatch;

      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec4(b2, b, r, c);
    }
  `;const s=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)],o=Math.ceil(n[n.length-1]/2),r=o*Math.ceil(n[n.length-2]/2);let i=r,a="",l="b, r, c";for(let c=2;c<n.length-1;c++)i*=n[n.length-c-1],a=`
      int b${c} = index / ${i};
      index -= b${c} * ${i};
    `+a,l=`b${c}, `+l;return`
    ivec${n.length} getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${s[0]}, ${s[1]}));
      int index = resTexRC.x * ${s[1]} + resTexRC.y;

      ${a}

      int b = index / ${r};
      index -= b * ${r};

      int r = 2 * (index / ${o});
      int c = imod(index, ${o}) * 2;

      return ivec${n.length}(${l});
    }
  `}function DL(n,t,e){if(e)return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(outTexShape[0], outTexShape[1]));
      int index = resTexRC.x * outTexShape[1] + resTexRC.y;
      ${Pc(["r","c","d","d2"],n)}
      return ivec4(r, c, d, d2);
    }
  `;const s=Do(["r","c","d","d2"],n);return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;
      ${s}
      return ivec4(r, c, d, d2);
    }
  `}function FL(n,t){const e=Do(["r","c","d","d2","d3"],n);return`
    ivec5 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx * vec2(${t[0]},
                             ${t[1]}));

      int index = resTexRC.x * ${t[1]} + resTexRC.y;

      ${e}

      ivec5 outShape = ivec5(r, c, d, d2, d3);
      return outShape;
    }
  `}function _L(n,t){const e=Do(["r","c","d","d2","d3","d4"],n);return`
    ivec6 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;

      ${e}

      ivec6 result = ivec6(r, c, d, d2, d3, d4);
      return result;
    }
  `}function OL(n,t,e){const s=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)];if(Pt(n,t))return e?`
      ivec2 getOutputCoords() {
        ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
        return 2 * ivec2(resultUV.yx * vec2(packedTexShape[0], packedTexShape[1]));
      }
    `:`
      ivec2 getOutputCoords() {
        return 2 * ivec2(resultUV.yx * vec2(${s[0]}, ${s[1]}));
      }
    `;const o=Math.ceil(n[1]/2);return e?`
    ivec2 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      int texelsInLogicalRow = int(ceil(float(outShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));

      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;
      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec2(r, c);
    }
  `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${s[0]}, ${s[1]}));

      int index = resTexRC.x * ${s[1]} + resTexRC.y;
      int r = 2 * (index / ${o});
      int c = imod(index, ${o}) * 2;

      return ivec2(r, c);
    }
  `}function ML(n,t,e){return Pt(n,t)?e?`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(outTexShape[0], outTexShape[1]));
      }
    `:`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(${t[0]}, ${t[1]}));
      }
    `:n[1]===1?e?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(outTexShape[0], outTexShape[1]));
        int index = resTexRC.x * outTexShape[1] + resTexRC.y;
        return ivec2(index, 0);
      }
    `:`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(${t[0]}, ${t[1]}));
        int index = resTexRC.x * ${t[1]} + resTexRC.y;
        return ivec2(index, 0);
      }
    `:n[0]===1?e?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(outTexShape[0], outTexShape[1]));
        int index = resTexRC.x * outTexShape[1] + resTexRC.y;
        return ivec2(0, index);
      }
    `:`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(${t[0]}, ${t[1]}));
        int index = resTexRC.x * ${t[1]} + resTexRC.y;
        return ivec2(0, index);
      }
    `:e?`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(outTexShape[0], outTexShape[1]));
      int index = resTexRC.x * outTexShape[1] + resTexRC.y;
      int r = index / outShape[1];
      int c = index - r * outShape[1];
      return ivec2(r, c);
    }
  `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;
      int r = index / ${n[1]};
      int c = index - r * ${n[1]};
      return ivec2(r, c);
    }
  `}function Fo(n){return`offset${n}`}function LL(n){const t=n.name,e="get"+t.charAt(0).toUpperCase()+t.slice(1),s=Ge();return`
    vec4 ${e}() {
      return ${s.texture2D}(${t}, halfCR);
    }
  `}function PL(n,t){const e=n.name,s="get"+e.charAt(0).toUpperCase()+e.slice(1);if(n.shapeInfo.isUniform)return`float ${s}() {return ${e};}`;const[o,r]=n.shapeInfo.texShape;if(o===1&&r===1)return`
      float ${s}() {
        return sampleTexture(${e}, halfCR);
      }
    `;const i=Fo(e);if(t)return`
    float ${s}() {
      vec2 uv = uvFromFlat(${e}TexShape[0], ${e}TexShape[1], ${i});
      return sampleTexture(${e}, uv);
    }
  `;const[a,l]=n.shapeInfo.texShape;return`
    float ${s}() {
      vec2 uv = uvFromFlat(${a}, ${l}, ${i});
      return sampleTexture(${e}, uv);
    }
  `}function BL(n,t){const e=n.name,s="get"+e.charAt(0).toUpperCase()+e.slice(1),o=n.shapeInfo.texShape,r=Ge();if(t)return`
    vec4 ${s}(int index) {
      ivec2 packedTexShape = ivec2(ceil(float(${e}TexShape[0]) / 2.0), ceil(float(${e}TexShape[1]) / 2.0));
      vec2 uv = packedUVfrom1D(
        packedTexShape[0], packedTexShape[1], index);
      return ${r.texture2D}(${e}, uv);
    }
  `;const i=[Math.ceil(o[0]/2),Math.ceil(o[1]/2)];return`
    vec4 ${s}(int index) {
      vec2 uv = packedUVfrom1D(
        ${i[0]}, ${i[1]}, index);
      return ${r.texture2D}(${e}, uv);
    }
  `}function zL(n,t){const e=n.name,s="get"+e.charAt(0).toUpperCase()+e.slice(1);if(n.shapeInfo.isUniform)return`
      float ${s}(int index) {
        ${mr(n)}
      }
    `;const o=n.shapeInfo.texShape,r=o[0],i=o[1];if(i===1&&r===1)return`
      float ${s}(int index) {
        return sampleTexture(${e}, halfCR);
      }
    `;const a=Fo(e);return i===1?t?`
      float ${s}(int index) {
        vec2 uv = vec2(0.5, (float(index + ${a}) + 0.5) / float(${e}TexShape[0]));
        return sampleTexture(${e}, uv);
      }
    `:`
      float ${s}(int index) {
        vec2 uv = vec2(0.5, (float(index + ${a}) + 0.5) / ${r}.0);
        return sampleTexture(${e}, uv);
      }
    `:r===1?t?`
      float ${s}(int index) {
        vec2 uv = vec2((float(index + ${a}) + 0.5) / float(${e}TexShape[1]), 0.5);
        return sampleTexture(${e}, uv);
      }
    `:`
      float ${s}(int index) {
        vec2 uv = vec2((float(index + ${a}) + 0.5) / ${i}.0, 0.5);
        return sampleTexture(${e}, uv);
      }
    `:t?`
    float ${s}(int index) {
      vec2 uv = uvFromFlat(${e}TexShape[0], ${e}TexShape[1], index + ${a});
      return sampleTexture(${e}, uv);
    }
  `:`
    float ${s}(int index) {
      vec2 uv = uvFromFlat(${r}, ${i}, index + ${a});
      return sampleTexture(${e}, uv);
    }
  `}function VL(n,t){const e=n.shapeInfo.logicalShape,s=n.name,o="get"+s.charAt(0).toUpperCase()+s.slice(1),r=n.shapeInfo.texShape,i=r[0],a=r[1],l=Ge();if(r!=null&&Pt(e,r))return t?`
      vec4 ${o}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${s}TexShape[1], ${s}TexShape[0]);

        return ${l.texture2D}(${s}, uv);
      }
    `:`
      vec4 ${o}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${a}.0, ${i}.0);

        return ${l.texture2D}(${s}, uv);
      }
    `;if(t)return`
    vec4 ${o}(int row, int col) {
      ivec2 packedTexShape = ivec2(ceil(float(${s}TexShape[0]) / 2.0), ceil(float(${s}TexShape[1]) / 2.0));
      int valuesPerRow = int(ceil(float(${s}Shape[1]) / 2.0));
      vec2 uv = packedUVfrom2D(valuesPerRow, packedTexShape[0], packedTexShape[1], row, col);
      return ${l.texture2D}(${s}, uv);
    }
  `;const c=[Math.ceil(r[0]/2),Math.ceil(r[1]/2)],u=Math.ceil(e[1]/2);return`
    vec4 ${o}(int row, int col) {
      vec2 uv = packedUVfrom2D(${u}, ${c[0]}, ${c[1]}, row, col);
      return ${l.texture2D}(${s}, uv);
    }
  `}function WL(n,t){const e=n.shapeInfo.logicalShape,s=n.name,o="get"+s.charAt(0).toUpperCase()+s.slice(1),r=n.shapeInfo.texShape;if(r!=null&&Pt(e,r)){if(t)return`
      float ${o}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${s}TexShape[1], ${s}TexShape[0]);
        return sampleTexture(${s}, uv);
      }
    `;const d=r[0],p=r[1];return`
    float ${o}(int row, int col) {
      vec2 uv = (vec2(col, row) + halfCR) / vec2(${p}.0, ${d}.0);
      return sampleTexture(${s}, uv);
    }
  `}const{newShape:i,keptDims:a}=Ts(e),l=i;if(l.length<e.length){const d=gr(n,l),p=["row","col"];return`
      ${fr(d,t)}
      float ${o}(int row, int col) {
        return ${o}(${xr(p,a)});
      }
    `}if(n.shapeInfo.isUniform)return`
      float ${o}(int row, int col) {
        int index = round(dot(vec2(row, col), vec2(${e[1]}, 1)));
        ${mr(n)}
      }
    `;const c=r[0],u=r[1],h=Fo(s);return u===1?t?`
      float ${o}(int row, int col) {
        float index = dot(vec3(row, col, ${h}), vec3(${s}Shape[1], 1, 1));
        vec2 uv = vec2(0.5, (index + 0.5) / float(${s}TexShape[0]));
        return sampleTexture(${s}, uv);
      }
    `:`
    float ${o}(int row, int col) {
      float index = dot(vec3(row, col, ${h}), vec3(${e[1]}, 1, 1));
      vec2 uv = vec2(0.5, (index + 0.5) / ${c}.0);
      return sampleTexture(${s}, uv);
    }
  `:c===1?t?`
      float ${o}(int row, int col) {
        float index = dot(vec3(row, col, ${h}), vec3(${s}Shape[1], 1, 1));
        vec2 uv = vec2((index + 0.5) / float(${s}TexShape[1]), 0.5);
        return sampleTexture(${s}, uv);
      }
    `:`
    float ${o}(int row, int col) {
      float index = dot(vec3(row, col, ${h}), vec3(${e[1]}, 1, 1));
      vec2 uv = vec2((index + 0.5) / ${u}.0, 0.5);
      return sampleTexture(${s}, uv);
    }
  `:t?`
      float ${o}(int row, int col) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * ${s}Shape[1] + col + ${h};
        vec2 uv = uvFromFlat(${s}TexShape[0], ${s}TexShape[1], index);
        return sampleTexture(${s}, uv);
      }
    `:`
  float ${o}(int row, int col) {
    // Explicitly use integer operations as dot() only works on floats.
    int index = row * ${e[1]} + col + ${h};
    vec2 uv = uvFromFlat(${c}, ${u}, index);
    return sampleTexture(${s}, uv);
  }
`}function UL(n,t){const e=n.shapeInfo.logicalShape,s=n.name,o="get"+s.charAt(0).toUpperCase()+s.slice(1),r=n.shapeInfo.texShape,i=[Math.ceil(r[0]/2),Math.ceil(r[1]/2)];if(e[0]===1){const d=e.slice(1),p=[1,2],f=gr(n,d),m=["b","row","col"];return`
        ${Z1(f,t)}
        vec4 ${o}(int b, int row, int col) {
          return ${o}(${xr(m,p)});
        }
      `}const a=Ge();if(t)return`
    vec4 ${o}(int b, int row, int col) {
      ivec2 packedTexShape = ivec2(ceil(float(${s}TexShape[0]) / 2.0), ceil(float(${s}TexShape[1]) / 2.0));
      int valuesPerRow = int(ceil(float(${s}Shape[2]) / 2.0));
      int texelsInBatch = valuesPerRow * int(ceil(float(${s}Shape[1]) / 2.0));
      vec2 uv = packedUVfrom3D(
        packedTexShape[0], packedTexShape[1], texelsInBatch, valuesPerRow, b, row, col);
      return ${a.texture2D}(${s}, uv);
    }
  `;const l=i[0],c=i[1],u=Math.ceil(e[2]/2),h=u*Math.ceil(e[1]/2);return`
    vec4 ${o}(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        ${l}, ${c}, ${h}, ${u}, b, row, col);
      return ${a.texture2D}(${s}, uv);
    }
  `}function GL(n,t){const e=n.shapeInfo.logicalShape,s=n.name,o="get"+s.charAt(0).toUpperCase()+s.slice(1),r=e[1]*e[2],i=e[2],{newShape:a,keptDims:l}=Ts(e),c=a;if(c.length<e.length){const m=gr(n,c),g=["row","col","depth"];return`
        ${fr(m,t)}
        float ${o}(int row, int col, int depth) {
          return ${o}(${xr(g,l)});
        }
      `}if(n.shapeInfo.isUniform)return`
      float ${o}(int row, int col, int depth) {
        int index = round(dot(vec3(row, col, depth),
                          vec3(${r}, ${i}, 1)));
        ${mr(n)}
      }
    `;const u=n.shapeInfo.texShape,h=u[0],d=u[1],p=n.shapeInfo.flatOffset;if(d===r&&p==null)return t?`
      float ${o}(int row, int col, int depth) {
        int stride1 = ${s}Shape[2];
        float texR = float(row);
        float texC = dot(vec2(col, depth), vec2(stride1, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${s}TexShape[1], ${s}TexShape[0]);
        return sampleTexture(${s}, uv);
      }
    `:`
        float ${o}(int row, int col, int depth) {
          float texR = float(row);
          float texC = dot(vec2(col, depth), vec2(${i}, 1));
          vec2 uv = (vec2(texC, texR) + halfCR) /
                     vec2(${d}.0, ${h}.0);
          return sampleTexture(${s}, uv);
        }
      `;if(d===i&&p==null)return t?`
      float ${o}(int row, int col, int depth) {
        float texR = dot(vec2(row, col), vec2(${s}Shape[1], 1));
        float texC = float(depth);
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${s}TexShape[1], ${s}TexShape[0]);
        return sampleTexture(${s}, uv);
      }
    `:`
    float ${o}(int row, int col, int depth) {
      float texR = dot(vec2(row, col), vec2(${e[1]}, 1));
      float texC = float(depth);
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${d}.0, ${h}.0);
      return sampleTexture(${s}, uv);
    }
  `;const f=Fo(s);return t?`
    float ${o}(int row, int col, int depth) {
      // Explicitly use integer operations as dot() only works on floats.
      int stride0 = ${s}Shape[1] * ${s}Shape[2];
      int stride1 = ${s}Shape[2];
      int index = row * stride0 + col * stride1 + depth + ${f};
      vec2 uv = uvFromFlat(${s}TexShape[0], ${s}TexShape[1], index);
      return sampleTexture(${s}, uv);
    }
    `:`
      float ${o}(int row, int col, int depth) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * ${r} + col * ${i} + depth + ${f};
        vec2 uv = uvFromFlat(${h}, ${d}, index);
        return sampleTexture(${s}, uv);
      }
  `}function HL(n,t){const e=n.name,s="get"+e.charAt(0).toUpperCase()+e.slice(1),o=Ge();if(t)return`
    vec4 ${s}(int b2, int b, int row, int col) {
      int valuesPerRow = int(ceil(float(${e}Shape[3]) / 2.0));
      int texelsInBatch = valuesPerRow * int(ceil(float(${e}Shape[2]) / 2.0));
      int index = b * texelsInBatch + (row / 2) * valuesPerRow + (col / 2);
      texelsInBatch *= ${e}Shape[1];
      index = b2 * texelsInBatch + index;
      ivec2 packedTexShape = ivec2(ceil(float(${e}TexShape[0]) / 2.0), ceil(float(${e}TexShape[1]) / 2.0));
      int texR = index / packedTexShape[1];
      int texC = index - texR * packedTexShape[1];
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(packedTexShape[1], packedTexShape[0]); return ${o.texture2D}(${e}, uv);
    }
  `;const r=n.shapeInfo.logicalShape,i=r.length,a=n.shapeInfo.texShape,l=[Math.ceil(a[0]/2),Math.ceil(a[1]/2)],c=l[0],u=l[1],h=Math.ceil(r[i-1]/2);let d=h*Math.ceil(r[i-2]/2),p="int b, int row, int col",f=`b * ${d} + (row / 2) * ${h} + (col / 2)`;for(let m=2;m<i-1;m++)p=`int b${m}, `+p,d*=r[i-m-1],f=`b${m} * ${d} + `+f;return`
    vec4 ${s}(${p}) {
      int index = ${f};
      int texR = index / ${u};
      int texC = index - texR * ${u};
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${u}, ${c});
      return ${o.texture2D}(${e}, uv);
    }
  `}function qL(n,t){const e=n.shapeInfo.logicalShape,s=n.name,o="get"+s.charAt(0).toUpperCase()+s.slice(1),r=e[3],i=e[2]*r,a=e[1]*i,{newShape:l,keptDims:c}=Ts(e);if(l.length<e.length){const b=gr(n,l),w=["row","col","depth","depth2"];return`
      ${fr(b,t)}
      float ${o}(int row, int col, int depth, int depth2) {
        return ${o}(${xr(w,c)});
      }
    `}if(n.shapeInfo.isUniform)return`
      float ${o}(int row, int col, int depth, int depth2) {
        int index = round(dot(vec4(row, col, depth, depth2),
                          vec4(${a}, ${i}, ${r}, 1)));
        ${mr(n)}
      }
    `;const u=n.shapeInfo.flatOffset,h=n.shapeInfo.texShape,d=h[0],p=h[1],f=`int stride2 = ${s}Shape[3];`,m=`int stride1 = ${s}Shape[2] * stride2;`,g=`int stride0 = ${s}Shape[1] * stride1;`;if(p===a&&u==null)return t?`
      float ${o}(int row, int col, int depth, int depth2) {
        ${f}
        ${m}
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(stride1, stride2, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${s}TexShape[1], ${s}TexShape[0]);
        return sampleTexture(${s}, uv);
      }
    `:`
      float ${o}(int row, int col, int depth, int depth2) {
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(${i}, ${r}, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${p}.0, ${d}.0);
        return sampleTexture(${s}, uv);
      }
    `;if(p===r&&u==null)return t?`
      float ${o}(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(${s}Shape[1] * ${s}Shape[2], ${s}Shape[2], 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${s}TexShape[1], ${s}TexShape[0]);
        return sampleTexture(${s}, uv);
      }
    `:`
      float ${o}(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(${e[1]*e[2]}, ${e[2]}, 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${p}.0, ${d}.0);
        return sampleTexture(${s}, uv);
      }
    `;const x=Fo(s);return t?`
    float ${o}(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      ${f}
      ${m}
      ${g}
      int index = row * stride0 + col * stride1 +
          depth * stride2 + depth2;
      vec2 uv = uvFromFlat(${s}TexShape[0], ${s}TexShape[1], index + ${x});
      return sampleTexture(${s}, uv);
    }
  `:`
    float ${o}(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${a} + col * ${i} +
          depth * ${r} + depth2;
      vec2 uv = uvFromFlat(${d}, ${p}, index + ${x});
      return sampleTexture(${s}, uv);
    }
  `}function XL(n){const t=n.shapeInfo.logicalShape,e=n.name,s="get"+e.charAt(0).toUpperCase()+e.slice(1),o=t[4],r=t[3]*o,i=t[2]*r,a=t[1]*i,{newShape:l,keptDims:c}=Ts(t);if(l.length<t.length){const m=gr(n,l),g=["row","col","depth","depth2","depth3"];return`
      ${fr(m)}
      float ${s}(int row, int col, int depth, int depth2, int depth3) {
        return ${s}(${xr(g,c)});
      }
    `}if(n.shapeInfo.isUniform)return`
      float ${s}(int row, int col, int depth, int depth2, int depth3) {
        float index = dot(
          vec4(row, col, depth, depth2),
          vec4(${a}, ${i}, ${r}, ${o})) +
          depth3;
        ${mr(n)}
      }
    `;const u=n.shapeInfo.flatOffset,h=n.shapeInfo.texShape,d=h[0],p=h[1];if(p===a&&u==null)return`
      float ${s}(int row, int col, int depth, int depth2, int depth3) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
                         vec4(${i}, ${r}, ${o}, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${p}.0, ${d}.0);
        return sampleTexture(${e}, uv);
      }
    `;if(p===o&&u==null)return`
      float ${s}(int row, int col, int depth, int depth2, int depth3) {
        float texR = dot(
          vec4(row, col, depth, depth2),
          vec4(${t[1]*t[2]*t[3]},
               ${t[2]*t[3]}, ${t[3]}, 1));
        int texC = depth3;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${p}.0, ${d}.0);
        return sampleTexture(${e}, uv);
      }
    `;const f=Fo(e);return`
    float ${s}(int row, int col, int depth, int depth2, int depth3) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${a} + col * ${i} + depth * ${r} +
          depth2 * ${o} + depth3 + ${f};
      vec2 uv = uvFromFlat(${d}, ${p}, index);
      return sampleTexture(${e}, uv);
    }
  `}function KL(n){const t=n.shapeInfo.logicalShape,e=n.name,s="get"+e.charAt(0).toUpperCase()+e.slice(1),{newShape:o,keptDims:r}=Ts(t);if(o.length<t.length){const g=gr(n,o),x=["row","col","depth","depth2","depth3","depth4"];return`
      ${fr(g)}
      float ${s}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        return ${s}(${xr(x,r)});
      }
    `}const i=t[5],a=t[4]*i,l=t[3]*a,c=t[2]*l,u=t[1]*c;if(n.shapeInfo.isUniform)return`
      float ${s}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
        int index = round(dot(
          vec4(row, col, depth, depth2),
          vec4(${u}, ${c}, ${l}, ${a})) +
          dot(
            vec2(depth3, depth4),
            vec2(${i}, 1)));
        ${mr(n)}
      }
    `;const h=n.shapeInfo.flatOffset,d=n.shapeInfo.texShape,p=d[0],f=d[1];if(f===u&&h==null)return`
      float ${s}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
          vec4(${c}, ${l}, ${a}, ${i})) +
               float(depth4);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${f}.0, ${p}.0);
        return sampleTexture(${e}, uv);
      }
    `;if(f===i&&h==null)return`
      float ${s}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        float texR = dot(vec4(row, col, depth, depth2),
          vec4(${t[1]*t[2]*t[3]*t[4]},
               ${t[2]*t[3]*t[4]},
               ${t[3]*t[4]},
               ${t[4]})) + float(depth3);
        int texC = depth4;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${f}.0, ${p}.0);
        return sampleTexture(${e}, uv);
      }
    `;const m=Fo(e);return`
    float ${s}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${u} + col * ${c} + depth * ${l} +
          depth2 * ${a} + depth3 * ${i} + depth4 + ${m};
      vec2 uv = uvFromFlat(${p}, ${f}, index);
      return sampleTexture(${e}, uv);
    }
  `}function mr(n){const t=n.name,e=K(n.shapeInfo.logicalShape);return e<2?`return ${t};`:`
    for (int i = 0; i < ${e}; i++) {
      if (i == index) {
        return ${t}[i];
      }
    }
  `}function jL(n,t){const e=n.name,s=e.charAt(0).toUpperCase()+e.slice(1),o="get"+s+"AtOutCoords",r=n.shapeInfo.logicalShape.length,i=t.logicalShape.length,a=Y1(n.shapeInfo.logicalShape,t.logicalShape),l=Ut(i),c=i-r;let u;const h=["x","y","z","w","u","v"];r===0?u="":i<2&&a.length>=1?u="coords = 0;":u=a.map(b=>`coords.${h[b+c]} = 0;`).join(`
`);let d="";i<2&&r>0?d="coords":d=n.shapeInfo.logicalShape.map((b,w)=>`coords.${h[w+c]}`).join(", ");let p="return outputValue;";const m=K(n.shapeInfo.logicalShape)===1,x=K(t.logicalShape)===1;if(r===1&&!m&&!x)p=`
      return vec4(outputValue.xy, outputValue.xy);
    `;else if(m&&!x)i===1?p=`
        return vec4(outputValue.x, outputValue.x, 0., 0.);
      `:p=`
        return vec4(outputValue.x);
      `;else if(a.length){const b=r-2,w=r-1;a.indexOf(b)>-1&&a.indexOf(w)>-1?p="return vec4(outputValue.x);":a.indexOf(b)>-1?p="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":a.indexOf(w)>-1&&(p="return vec4(outputValue.xx, outputValue.zz);")}return`
    vec4 ${o}() {
      ${l} coords = getOutputCoords();
      ${u}
      vec4 outputValue = get${s}(${d});
      ${p}
    }
  `}function YL(n,t){const e=n.name,s=e.charAt(0).toUpperCase()+e.slice(1),o="get"+s+"AtOutCoords",r=t.texShape,i=n.shapeInfo.texShape,a=n.shapeInfo.logicalShape.length,l=t.logicalShape.length;if(!n.shapeInfo.isUniform&&a===l&&n.shapeInfo.flatOffset==null&&Pt(i,r))return`
      float ${o}() {
        return sampleTexture(${e}, resultUV);
      }
    `;const c=Ut(l),u=Y1(n.shapeInfo.logicalShape,t.logicalShape),h=l-a;let d;const p=["x","y","z","w","u","v"];a===0?d="":l<2&&u.length>=1?d="coords = 0;":d=u.map(m=>`coords.${p[m+h]} = 0;`).join(`
`);let f="";return l<2&&a>0?f="coords":f=n.shapeInfo.logicalShape.map((m,g)=>`coords.${p[g+h]}`).join(", "),`
    float ${o}() {
      ${c} coords = getOutputCoords();
      ${d}
      return get${s}(${f});
    }
  `}function Ut(n){if(n<=1)return"int";if(n===2)return"ivec2";if(n===3)return"ivec3";if(n===4)return"ivec4";if(n===5)return"ivec5";if(n===6)return"ivec6";throw Error(`GPU for rank ${n} is not yet supported`)}function kp(n,t,e){const{newShape:s,keptDims:o}=Ts(t),r=t.length,i=n&&r===3&&t[0]===1,a=i?t.slice(1):s,l=!n&&r>1&&!Pt(t,e)&&s.length<r||i;return{useSqueezeShape:l,uniformShape:l?a:t,keptDims:o}}function gr(n,t){const e=JSON.parse(JSON.stringify(n));return e.shapeInfo.logicalShape=t,e}function xr(n,t){return t.map(e=>n[e]).join(", ")}function ZL(n,t,e,s){const o=e.map((u,h)=>{const d={logicalShape:u.shape,texShape:u.isUniform?null:u.texData.texShape,isUniform:u.isUniform,isPacked:u.isUniform?!1:u.texData.isPacked,flatOffset:null};return u.texData!=null&&u.texData.slice!=null&&u.texData.slice.flatOffset>0&&(d.flatOffset=u.texData.slice.flatOffset),{name:t.variableNames[h],shapeInfo:d}}),r=o.map(u=>u.shapeInfo),i={logicalShape:s.shape,texShape:s.texData.texShape,isUniform:!1,isPacked:s.texData.isPacked,flatOffset:null},a=mL(o,i,t),l=GM(n.gl,a),c=n.createProgram(l);return q().get("ENGINE_COMPILE_ONLY")?{program:t,fragmentShader:l,source:a,webGLProgram:c,inShapeInfos:r,outShapeInfo:i,variablesLocations:null,customUniformLocations:null,infLoc:null,nanLoc:null,outShapeLocation:null,outShapeStridesLocation:null,outTexShapeLocation:null}:(n.buildVao(c),Object.assign({program:t,fragmentShader:l,source:a,webGLProgram:c,inShapeInfos:r,outShapeInfo:i},J1(n,t,c)))}function J1(n,t,e){const s=[],o=[];let r,i,a,l=null,c=null;c=n.getUniformLocation(e,"NAN",!1),q().getNumber("WEBGL_VERSION")===1&&(l=n.getUniformLocation(e,"INFINITY",!1));const u=!1;for(const h of t.variableNames){const d={name:h,uniform:n.getUniformLocation(e,h,u),offset:n.getUniformLocation(e,`offset${h}`,u)};t.enableShapeUniforms&&(d.shape=n.getUniformLocation(e,`${h}Shape`,u),d.texShape=n.getUniformLocation(e,`${h}TexShape`,u)),s.push(d)}if(t.enableShapeUniforms&&(r=n.getUniformLocation(e,"outShape",u),a=n.getUniformLocation(e,"outShapeStrides",u),i=n.getUniformLocation(e,"outTexShape",u)),t.customUniforms)for(const h of t.customUniforms)o.push(n.getUniformLocation(e,h.name,u));return{variablesLocations:s,customUniformLocations:o,infLoc:l,nanLoc:c,outShapeLocation:r,outShapeStridesLocation:a,outTexShapeLocation:i}}function ty(n,t){if(n.length!==t.length)throw Error(`Binary was compiled with ${n.length} inputs, but was executed with ${t.length} inputs`);n.forEach((e,s)=>{const o=e.logicalShape,r=t[s],i=r.shape;if(!Pt(o,i))throw Error(`Binary was compiled with different shapes than the current args. Shapes ${o} and ${i} must match`);if(e.isUniform&&r.isUniform)return;const a=e.texShape,l=r.isUniform?null:r.texData.texShape;if(!Pt(a,l))throw Error(`Binary was compiled with different texture shapes than the current args. Shape ${a} and ${l} must match`)})}function QL(n,t,e,s,o){t.program.enableShapeUniforms||(ty(t.inShapeInfos,e),ty([t.outShapeInfo],[s]));const r=s.texData.texture,i=s.texData.texShape;s.texData.isPacked?n.setOutputPackedMatrixTexture(r.texture,i[0],i[1]):n.setOutputMatrixTexture(r.texture,i[0],i[1]),n.setProgram(t.webGLProgram),n.bindVertexArray(t.webGLProgram.vao),q().getNumber("WEBGL_VERSION")===1&&t.infLoc!==null&&n.gl.uniform1f(t.infLoc,1/0),t.nanLoc!==null&&n.gl.uniform1f(t.nanLoc,NaN);for(let l=0;l<e.length;++l){const c=e[l],{uniform:u,offset:h,shape:d,texShape:p}=t.variablesLocations[l];if(d){const{uniformShape:f}=kp(t.program.packedInputs,c.shape,c.texData.texShape);switch(f.length){case 1:n.gl.uniform1iv(d,new Int32Array(f));break;case 2:n.gl.uniform2iv(d,new Int32Array(f));break;case 3:n.gl.uniform3iv(d,new Int32Array(f));break;case 4:n.gl.uniform4iv(d,new Int32Array(f));break}}if(p&&n.gl.uniform2i(p,c.texData.texShape[0],c.texData.texShape[1]),u!=null){if(c.isUniform){if(K(c.shape)<2)n.gl.uniform1f(u,c.uniformValues[0]);else{let f=c.uniformValues;f instanceof Float32Array||(f=new Float32Array(f)),n.gl.uniform1fv(u,f)}continue}c.texData.slice!=null&&h!=null&&n.gl.uniform1i(h,c.texData.slice.flatOffset),n.setInputMatrixTexture(c.texData.texture.texture,u,l)}}const a=t.outShapeLocation;if(a)switch(s.shape.length){case 1:n.gl.uniform1iv(a,new Int32Array(s.shape));break;case 2:n.gl.uniform2iv(a,new Int32Array(s.shape));break;case 3:n.gl.uniform3iv(a,new Int32Array(s.shape));break;case 4:n.gl.uniform4iv(a,new Int32Array(s.shape));break}if(t.outShapeStridesLocation){const l=ft(s.shape);switch(s.shape.length){case 2:n.gl.uniform1iv(t.outShapeStridesLocation,new Int32Array(l));break;case 3:n.gl.uniform2iv(t.outShapeStridesLocation,new Int32Array(l));break;case 4:n.gl.uniform3iv(t.outShapeStridesLocation,new Int32Array(l));break}}if(t.outTexShapeLocation&&n.gl.uniform2i(t.outTexShapeLocation,s.texData.texShape[0],s.texData.texShape[1]),t.program.customUniforms&&o)for(let l=0;l<t.program.customUniforms.length;++l){const c=t.program.customUniforms[l],u=t.customUniformLocations[l],h=o[l];if(c.type==="float")n.gl.uniform1fv(u,h);else if(c.type==="vec2")n.gl.uniform2fv(u,h);else if(c.type==="vec3")n.gl.uniform3fv(u,h);else if(c.type==="vec4")n.gl.uniform4fv(u,h);else if(c.type==="int")n.gl.uniform1iv(u,h);else if(c.type==="ivec2")n.gl.uniform2iv(u,h);else if(c.type==="ivec3")n.gl.uniform3iv(u,h);else if(c.type==="ivec4")n.gl.uniform4iv(u,h);else throw Error(`uniform type ${c.type} is not supported yet.`)}n.executeProgram()}function JL(n,t,e){let s="";t.concat(e).forEach(i=>{const a=i.texData!=null&&i.texData.slice!=null&&i.texData.slice.flatOffset>0;if(n.enableShapeUniforms&&!i.isUniform){const l=i.texData.texShape,{useSqueezeShape:c,uniformShape:u,keptDims:h}=kp(n.packedInputs,i.shape,l);let d="",p="",f="";if(u.length===1&&n.packedInputs){const C=[Math.ceil(l[0]/2),Math.ceil(l[1]/2)];d=`${C[0]>1}_${C[1]>1}`}else if(u.length===2&&!n.packedInputs)p=`${u[0]>1}_${u[1]>1}`;else if(u.length>2&&!n.packedInputs){const C=ft(u);f=`${C[0]===l[1]}_${C[C.length-1]===l[1]}`}const m=i.shape.length,g=u.length===2&&Pt(i.shape,l),x=K(i.shape)===1,b=Zo(i.shape,e.shape),w=!n.packedInputs&&m===e.shape.length&&Pt(l,e.texData.texShape),y=n.packedInputs||u.length>2?"":`${l[0]>1}_${l[1]>1}`;s+=`${m}_${w}_${c?h:""}_${u.length}_${x}_${b}_${g}_${d}_${p}_${f}_${y}_${a}`}else{const l=i.isUniform?"uniform":i.texData.texShape;s+=`${i.shape}_${l}_${a}`}});const o=n.userCode;let r=n.constructor.name;return r+="_"+s+"_"+o+`${q().getNumber("WEBGL_VERSION")}`,r}function Be(n){return q().getBool("WEBGL_USE_SHAPES_UNIFORMS")&&n<=4}class tP{constructor(t){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=aa.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];const e=Ge();this.outputShape=t,this.enableShapeUniforms=Be(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?Pc(["r","c","d"],t):Do(["r","c","d"],t)}
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));
        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getA(rc.x, rc.y, rc.z);
        }

        ${e.output} = result;
      }
    `}}class eP{constructor(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=aa.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];const e=Ge();this.outputShape=t,this.enableShapeUniforms=Be(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?Pc(["r","c","d"],t):Do(["r","c","d"],t)}
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));
        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));
        }

        ${e.output} = result;
      }
    `}}class nP{constructor(t){this.variableNames=["A"],this.outTexUsage=yn.DOWNLOAD;const e=Ge();this.outputShape=t,this.userCode=`
      ${j1}

      void main() {
        float x = getAAtOutCoords();
        ${e.output} = encode_float(x);
      }
    `}}class sP{constructor(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=yn.DOWNLOAD;const e=Ge();this.outputShape=t,this.userCode=`
      ${j1}

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        ${e.output} = encode_float(x);
      }
    `}}const oP={R:0,G:1,B:2,A:3};class ey{constructor(t,e=!1,s="RGBA"){this.variableNames=["A"],this.customUniforms=[{name:"texShape",type:"ivec2"}];const o=Ge();this.outputShape=t,this.enableShapeUniforms=Be(this.outputShape.length);let r="result";e&&(r="floor(result * 255. + 0.5)");let i="";for(let a=0;a<s.length;a++){const l=s[a];i+=`
          if(offset == ${a}) {
            result = values[${oP[l]}];
          }`}this.userCode=`
      ${this.enableShapeUniforms?vp():Ip(t)}

      void main() {
        ivec3 coords = getOutputCoords();
        int flatIndex = getFlatIndex(coords);
        float result = 0.;
        int offset = imod(flatIndex, ${s.length});

        flatIndex = idiv(flatIndex, ${s.length}, 1.);

        int r = flatIndex / texShape[1];
        if (r < texShape[0]) {
          int c = imod(flatIndex, texShape[1]);
          vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);
          vec4 values = ${o.texture2D}(A, uv);
          ${i}
        }
        ${o.output} = vec4(${r}, 0., 0., 0.);
      }
    `}}class rP{constructor(t,e=!1){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.customUniforms=[{name:"texShape",type:"ivec2"}];const s=Ge();this.outputShape=t,this.enableShapeUniforms=Be(this.outputShape.length);let o="",r="result";e&&(r="floor(result * 255. + 0.5)");for(let i=0;i<=1;i++)for(let a=0;a<=1;a++){const l=i*2+a;o+=`
          localCoords = coords;
          if(localCoords[2] + ${a} < ${this.enableShapeUniforms?"outShape[2]":`${t[2]}`}) {
          localCoords[2] += ${a};
          if (localCoords[1] + ${i} < ${this.enableShapeUniforms?"outShape[1]":`${t[1]}`}) {
            localCoords[1] += ${i};

            flatIndex = getFlatIndex(localCoords);
            offset = imod(flatIndex, 4);

            flatIndex = idiv(flatIndex, 4, 1.);

            int r = flatIndex / texShape[1];
            int c = imod(flatIndex, texShape[1]);
            vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);
            values = ${s.texture2D}(A, uv);

            if (offset == 0) {
              result[${l}] = values[0];
            } else if (offset == 1) {
              result[${l}] = values[1];
            } else if (offset == 2) {
              result[${l}] = values[2];
            } else {
              result[${l}] = values[3];
            }
          }
        }
        `}this.userCode=`
        ${this.enableShapeUniforms?vp():Ip(t)}

        void main() {
          ivec3 coords = getOutputCoords();

          vec4 result = vec4(0.);
          int flatIndex, r, c, offset;
          ivec3 localCoords;
          vec2 uv;
          vec4 values;

          ${o}

          ${s.output} = ${r};
        }
    `}}function iP(n){const t=Ge(),e=`${t.version}
    precision highp float;
    ${t.attribute} vec3 clipSpacePos;
    ${t.attribute} vec2 uv;
    ${t.varyingVs} vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`;return UM(n,e)}function aP(n){const t=new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]);return KM(n,t)}function lP(n){const t=new Uint16Array([0,1,2,2,1,3]);return jM(n,t)}function ua(n,t,e,s,o,r){ZM(t,e);const i=YM(n),a=n.TEXTURE_2D;return lt(n,()=>n.bindTexture(a,i)),lt(n,()=>n.texParameteri(a,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE)),lt(n,()=>n.texParameteri(a,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)),lt(n,()=>n.texParameteri(a,n.TEXTURE_MIN_FILTER,n.NEAREST)),lt(n,()=>n.texParameteri(a,n.TEXTURE_MAG_FILTER,n.NEAREST)),q().getNumber("WEBGL_VERSION")===1?lt(n,()=>n.texImage2D(a,0,s,t,e,0,o,r,null)):lt(n,()=>n.texStorage2D(a,1,s,t,e)),lt(n,()=>n.bindTexture(n.TEXTURE_2D,null)),{texture:i,texShape:[e,t]}}function ny(n){return n.internalFormatFloat}function cP(n,t,e,s){const[o,r]=la(t,e);return ua(n,o,r,ny(s),s.textureFormatFloat,n.FLOAT)}function sy(n){return n.internalFormatHalfFloat}function uP(n,t,e,s){const[o,r]=la(t,e);return ua(n,o,r,sy(s),s.textureFormatFloat,s.textureTypeHalfFloat)}function oy(n){return n.downloadTextureFormat}function hP(n,t,e,s){const[o,r]=la(t,e);return ua(n,o,r,oy(s),n.RGBA,n.UNSIGNED_BYTE)}function ry(n){return n.internalFormatPackedFloat}function dP(n,t,e,s){const[o,r]=hr(t,e);return ua(n,o,r,ry(s),n.RGBA,n.FLOAT)}function iy(n){return n.internalFormatPackedHalfFloat}function pP(n,t,e,s){const[o,r]=hr(t,e);return ua(n,o,r,iy(s),n.RGBA,s.textureTypeHalfFloat)}function fP(n,t,e){return lt(n,()=>n.bindBuffer(n.ARRAY_BUFFER,e)),q1(n,t,"clipSpacePos",e,3,20,0)&&q1(n,t,"uv",e,2,20,12)}function mP(n,t,e,s,o,r){lt(n,()=>n.bindTexture(n.TEXTURE_2D,t));let i,a,l;o instanceof Uint8Array?(i=new Uint8Array(e*s*4),a=n.UNSIGNED_BYTE,l=n.RGBA):(i=new Float32Array(e*s*4),a=n.FLOAT,l=r.internalFormatPackedFloat),i.set(o),q().getNumber("WEBGL_VERSION")===2?lt(n,()=>n.texSubImage2D(n.TEXTURE_2D,0,0,0,e,s,n.RGBA,a,i)):lt(n,()=>n.texImage2D(n.TEXTURE_2D,0,l,e,s,0,n.RGBA,a,i)),lt(n,()=>n.bindTexture(n.TEXTURE_2D,null))}function gP(n,t,e){lt(n,()=>n.bindTexture(n.TEXTURE_2D,t)),e.data instanceof Uint8Array?q().getNumber("WEBGL_VERSION")===2?lt(n,()=>n.texSubImage2D(n.TEXTURE_2D,0,0,0,e.width,e.height,n.RGBA,n.UNSIGNED_BYTE,e.data)):lt(n,()=>n.texImage2D(n.TEXTURE_2D,0,n.RGBA,e.width,e.height,0,n.RGBA,n.UNSIGNED_BYTE,e.data)):q().getNumber("WEBGL_VERSION")===2?lt(n,()=>n.texSubImage2D(n.TEXTURE_2D,0,0,0,n.RGBA,n.UNSIGNED_BYTE,e)):lt(n,()=>n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,e)),lt(n,()=>n.bindTexture(n.TEXTURE_2D,null))}function xP(n,t,e,s){const o=n.createBuffer();lt(n,()=>n.bindBuffer(n.PIXEL_PACK_BUFFER,o));const a=4*4*t*e;return lt(n,()=>n.bufferData(n.PIXEL_PACK_BUFFER,a,n.STREAM_READ)),lt(n,()=>n.readPixels(0,0,e,t,n.RGBA,n.FLOAT,0)),lt(n,()=>n.bindBuffer(n.PIXEL_PACK_BUFFER,null)),o}function bP(n,t,e){const s=n,o=new Float32Array(e);return s.bindBuffer(s.PIXEL_PACK_BUFFER,t),s.getBufferSubData(s.PIXEL_PACK_BUFFER,0,o),s.bindBuffer(s.PIXEL_PACK_BUFFER,null),o}function yP(n,t,e,s){const[o,r]=la(t,e),i=4,a=new Uint8Array(MM(t*e,i));return lt(n,()=>n.readPixels(0,0,o,r,s.downloadTextureFormat,n.UNSIGNED_BYTE,a)),new Float32Array(a.buffer)}function wP(n,t,e,s,o,r,i,a){const l=n,c=new Float32Array(LM(r,i));return l.bindBuffer(l.PIXEL_PACK_BUFFER,t),l.getBufferSubData(l.PIXEL_PACK_BUFFER,0,c),l.bindBuffer(l.PIXEL_PACK_BUFFER,null),c}function CP(n,t,e){const s=new Float32Array(t*e*4);return lt(n,()=>n.readPixels(0,0,e,t,n.RGBA,n.FLOAT,s)),s}class Sp{constructor(t){this.outputTexture=null,this.program=null,this.disposed=!1,this.itemsToPoll=[];const e=q().getNumber("WEBGL_VERSION");if(t!=null?(this.gl=t,FM(e,t)):this.gl=Xn(e),t=this.gl,q().getNumber("WEBGL_VERSION")===2){const r=t;this.createVertexArray=()=>lt(r,()=>r.createVertexArray()),this.bindVertexArray=i=>lt(r,()=>r.bindVertexArray(i)),this.deleteVertexArray=i=>lt(r,()=>r.deleteVertexArray(i)),this.getVertexArray=()=>lt(r,()=>r.getParameter(r.VERTEX_ARRAY_BINDING))}else if(t!=null){const r=t.getExtension("OES_vertex_array_object");if(r==null)throw new Error("All WebGL1 implementations are expected to offer OES_vertex_array_object.");this.createVertexArray=()=>lt(t,()=>r.createVertexArrayOES()),this.bindVertexArray=i=>lt(t,()=>r.bindVertexArrayOES(i)),this.deleteVertexArray=i=>lt(t,()=>r.deleteVertexArrayOES(i)),this.getVertexArray=()=>lt(t,()=>t.getParameter(r.VERTEX_ARRAY_BINDING_OES))}let s="WEBGL_color_buffer_float";const o="EXT_color_buffer_half_float";if(this.parallelCompilationExtension=this.gl.getExtension("KHR_parallel_shader_compile"),q().getNumber("WEBGL_VERSION")===1){const r="OES_texture_float",i="OES_texture_half_float";if(this.textureFloatExtension=Fc(this.gl,r),An(this.gl,i))this.textureHalfFloatExtension=Fc(this.gl,i);else if(q().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");if(this.colorBufferFloatExtension=this.gl.getExtension(s),An(this.gl,o))this.colorBufferHalfFloatExtension=Fc(this.gl,o);else if(q().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.")}else if(s="EXT_color_buffer_float",An(this.gl,s))this.colorBufferFloatExtension=this.gl.getExtension(s);else if(An(this.gl,o))this.colorBufferHalfFloatExtension=this.gl.getExtension(o);else throw new Error("GL context does not support color renderable floats");this.vertexBuffer=aP(this.gl),this.indexBuffer=lP(this.gl),this.framebuffer=QM(this.gl),this.textureConfig=xp(this.gl,this.textureHalfFloatExtension)}get debug(){return q().getBool("DEBUG")}dispose(){if(this.disposed)return;this.program!=null&&console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),this.outputTexture!=null&&console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");const t=this.gl;lt(t,()=>t.finish()),lt(t,()=>t.bindFramebuffer(t.FRAMEBUFFER,null)),lt(t,()=>t.deleteFramebuffer(this.framebuffer)),lt(t,()=>t.bindBuffer(t.ARRAY_BUFFER,null)),lt(t,()=>t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,null)),lt(t,()=>t.deleteBuffer(this.indexBuffer)),this.disposed=!0}createFloat32MatrixTexture(t,e){return this.throwIfDisposed(),cP(this.gl,t,e,this.textureConfig)}createFloat16MatrixTexture(t,e){return this.throwIfDisposed(),uP(this.gl,t,e,this.textureConfig)}createUnsignedBytesMatrixTexture(t,e){return this.throwIfDisposed(),hP(this.gl,t,e,this.textureConfig)}uploadPixelDataToTexture(t,e){this.throwIfDisposed(),gP(this.gl,t,e)}uploadDenseMatrixToTexture(t,e,s,o){this.throwIfDisposed(),mP(this.gl,t,e,s,o,this.textureConfig)}createFloat16PackedMatrixTexture(t,e){return this.throwIfDisposed(),pP(this.gl,t,e,this.textureConfig)}createPackedMatrixTexture(t,e){return this.throwIfDisposed(),dP(this.gl,t,e,this.textureConfig)}deleteMatrixTexture(t){this.throwIfDisposed(),this.outputTexture===t&&(X1(this.gl,this.framebuffer),this.outputTexture=null),lt(this.gl,()=>this.gl.deleteTexture(t))}downloadByteEncodedFloatMatrixFromOutputTexture(t,e,s){return this.downloadMatrixDriver(t,()=>yP(this.gl,e,s,this.textureConfig))}downloadPackedMatrixFromBuffer(t,e,s,o,r,i){return wP(this.gl,t,e,s,o,r,i,this.textureConfig)}downloadFloat32MatrixFromBuffer(t,e){return bP(this.gl,t,e)}createBufferFromTexture(t,e,s){this.bindTextureToFrameBuffer(t);const o=xP(this.gl,e,s,this.textureConfig);return this.unbindTextureToFrameBuffer(),o}createAndWaitForFence(){const t=this.createFence(this.gl);return this.pollFence(t)}createFence(t){let e,s;if(q().getBool("WEBGL_FENCE_API_ENABLED")){const o=t,r=o.fenceSync(o.SYNC_GPU_COMMANDS_COMPLETE,0);t.flush(),s=()=>{const i=o.clientWaitSync(r,0,0);return i===o.ALREADY_SIGNALED||i===o.CONDITION_SATISFIED},e=r}else q().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(e=this.beginQuery(),this.endQuery(),s=()=>this.isQueryAvailable(e,q().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))):s=()=>!0;return{query:e,isFencePassed:s}}downloadMatrixFromPackedTexture(t,e,s){return this.downloadMatrixDriver(t,()=>CP(this.gl,e,s))}createProgram(t){this.throwIfDisposed();const e=this.gl;this.vertexShader==null&&(this.vertexShader=iP(e));const s=qM(e);lt(e,()=>e.attachShader(s,this.vertexShader)),lt(e,()=>e.attachShader(s,t)),XM(e,s);const o=Object.assign(s,{vao:this.createVertexArray()});return this.debug&&bp(e,o),o}buildVao(t){this.setProgram(t),this.bindVertexArray(t.vao);const e=this.gl;lt(e,()=>e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,this.indexBuffer)),fP(e,t,this.vertexBuffer)}deleteProgram(t){this.throwIfDisposed(),t===this.program&&(this.program=null),t!=null&&(lt(this.gl,()=>this.gl.deleteProgram(t)),this.deleteVertexArray(t.vao))}setProgram(t){this.throwIfDisposed(),this.program=t,this.program!=null&&this.debug&&bp(this.gl,this.program),lt(this.gl,()=>this.gl.useProgram(t))}getUniformLocation(t,e,s=!0){return this.throwIfDisposed(),s?tL(this.gl,t,e):eL(this.gl,t,e)}getAttributeLocation(t,e){return this.throwIfDisposed(),lt(this.gl,()=>this.gl.getAttribLocation(t,e))}getUniformLocationNoThrow(t,e){return this.throwIfDisposed(),this.gl.getUniformLocation(t,e)}setInputMatrixTexture(t,e,s){this.throwIfDisposed(),this.throwIfNoProgram(),nL(this.gl,t,e,s)}setOutputMatrixTexture(t,e,s){this.setOutputMatrixTextureDriver(t,s,e)}setOutputPackedMatrixTexture(t,e,s){this.throwIfDisposed();const[o,r]=hr(e,s);this.setOutputMatrixTextureDriver(t,o,r)}setOutputMatrixWriteRegion(t,e,s,o){this.setOutputMatrixWriteRegionDriver(s,t,o,e)}setOutputPackedMatrixWriteRegion(t,e,s,o){throw new Error("setOutputPackedMatrixWriteRegion not implemented.")}debugValidate(){this.program!=null&&bp(this.gl,this.program),_c(this.gl)}executeProgram(){this.throwIfDisposed(),this.throwIfNoProgram();const t=this.gl;if(this.debug){const e=this.getVertexArray();console.assert(e===this.program.vao,"VAO changed between setProgram and executeProgram!"),this.debugValidate()}lt(t,()=>t.drawElements(t.TRIANGLES,6,t.UNSIGNED_SHORT,0))}blockUntilAllProgramsCompleted(){this.throwIfDisposed(),lt(this.gl,()=>this.gl.finish())}getQueryTimerExtension(){return this.disjointQueryTimerExtension==null&&(this.disjointQueryTimerExtension=Fc(this.gl,q().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2?"EXT_disjoint_timer_query_webgl2":"EXT_disjoint_timer_query")),this.disjointQueryTimerExtension}getQueryTimerExtensionWebGL2(){return this.getQueryTimerExtension()}getQueryTimerExtensionWebGL1(){return this.getQueryTimerExtension()}beginQuery(){if(q().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){const s=this.gl,o=this.getQueryTimerExtensionWebGL2(),r=s.createQuery();return s.beginQuery(o.TIME_ELAPSED_EXT,r),r}const t=this.getQueryTimerExtensionWebGL1(),e=t.createQueryEXT();return t.beginQueryEXT(t.TIME_ELAPSED_EXT,e),e}endQuery(){if(q().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){const e=this.gl,s=this.getQueryTimerExtensionWebGL2();e.endQuery(s.TIME_ELAPSED_EXT);return}const t=this.getQueryTimerExtensionWebGL1();t.endQueryEXT(t.TIME_ELAPSED_EXT)}waitForQueryAndGetTime(t){return J(this,null,function*(){return yield Vp(()=>this.disposed||this.isQueryAvailable(t,q().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))),this.getQueryTime(t,q().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))})}getQueryTime(t,e){if(e===0)return null;if(e===2){const s=this.gl;return s.getQueryParameter(t,s.QUERY_RESULT)/1e6}else{const s=this.getQueryTimerExtensionWebGL1();return s.getQueryObjectEXT(t,s.QUERY_RESULT_EXT)/1e6}}isQueryAvailable(t,e){if(e===0)return!0;if(e===2){const s=this.gl,o=this.getQueryTimerExtensionWebGL2(),r=s.getQueryParameter(t,s.QUERY_RESULT_AVAILABLE);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(o.GPU_DISJOINT_EXT)),r&&!this.disjoint}else{const s=this.getQueryTimerExtensionWebGL1(),o=s.getQueryObjectEXT(t,s.QUERY_RESULT_AVAILABLE_EXT);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(s.GPU_DISJOINT_EXT)),o&&!this.disjoint}}pollFence(t){return new Promise(e=>{this.addItemToPoll(()=>t.isFencePassed(),()=>e())})}pollItems(){const t=$P(this.itemsToPoll.map(e=>e.isDoneFn));for(let e=0;e<=t;++e){const{resolveFn:s}=this.itemsToPoll[e];s()}this.itemsToPoll=this.itemsToPoll.slice(t+1)}addItemToPoll(t,e){if(this.itemsToPoll.push({isDoneFn:t,resolveFn:e}),this.itemsToPoll.length>1)return;let s;"setTimeoutCustom"in q().platform&&(s=q().platform.setTimeoutCustom.bind(q().platform)),Vp(()=>(this.pollItems(),this.itemsToPoll.length===0),()=>0,null,s)}bindTextureToFrameBuffer(t){this.throwIfDisposed(),yp(this.gl,t,this.framebuffer),this.debug&&_c(this.gl)}unbindTextureToFrameBuffer(){this.outputTexture!=null?(yp(this.gl,this.outputTexture,this.framebuffer),this.debug&&_c(this.gl)):X1(this.gl,this.framebuffer)}downloadMatrixDriver(t,e){this.bindTextureToFrameBuffer(t);const s=e();return this.unbindTextureToFrameBuffer(),s}setOutputMatrixTextureDriver(t,e,s){this.throwIfDisposed();const o=this.gl;yp(o,t,this.framebuffer),this.debug&&_c(o),this.outputTexture=t,lt(o,()=>o.viewport(0,0,e,s)),lt(o,()=>o.scissor(0,0,e,s))}setOutputMatrixWriteRegionDriver(t,e,s,o){this.throwIfDisposed(),lt(this.gl,()=>this.gl.scissor(t,e,s,o))}throwIfDisposed(){if(this.disposed)throw new Error("Attempted to use disposed GPGPUContext.")}throwIfNoProgram(){if(this.program==null)throw new Error("No GPU program is currently set.")}}function $P(n){let t=0;for(;t<n.length&&n[t]();++t);return t-1}const{addImpl:IP,bincountImpl:ay,bincountReduceImpl:vP,bitwiseAndImpl:kP,castImpl:SP,ceilImpl:NP,concatImpl:TP,equalImpl:EP,expImpl:RP,expm1Impl:AP,floorImpl:DP,gatherNdImpl:FP,gatherV2Impl:_P,greaterImpl:OP,greaterEqualImpl:MP,lessImpl:LP,lessEqualImpl:PP,linSpaceImpl:BP,logImpl:zP,maxImpl:VP,maximumImpl:WP,minimumImpl:UP,multiplyImpl:GP,negImpl:HP,notEqualImpl:qP,prodImpl:XP,raggedGatherImpl:KP,raggedRangeImpl:jP,raggedTensorToTensorImpl:YP,rangeImpl:ZP,rsqrtImpl:QP,scatterImpl:JP,sigmoidImpl:t3,simpleAbsImpl:ly,sliceImpl:e3,sparseFillEmptyRowsImpl:n3,sparseReshapeImpl:s3,sparseSegmentReductionImpl:cy,sqrtImpl:o3,staticRegexReplaceImpl:r3,stridedSliceImpl:i3,stringNGramsImpl:a3,stringSplitImpl:l3,stringToHashBucketFastImpl:c3,subImpl:u3,tileImpl:h3,topKImpl:d3,transposeImpl:Np,uniqueImpl:p3}=bA;function uy(n,t){return["x","y","z","w","u","v"].slice(0,t).map(e=>`${n}.${e}`)}function He(n,t){return t===1?[n]:uy(n,t)}function f3(n,t){if(n===1)return"rc";let e="";for(let s=0;s<n;s++)e+=t[s],s<n-1&&(e+=",");return e}class m3{constructor(t){if(this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=t,this.rank=t.length,this.enableShapeUniforms=Be(this.outputShape.length),this.rank===0)this.userCode=`
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;else{const e=He("rc",this.rank),s=Ut(this.rank),o=this.getOutOfBoundsCondition(e),r=this.getSetup(e),i=this.getOutput(e);this.userCode=`
        void main() {
          ${s} rc = getOutputCoords();

          if(${o}) {
            setOutput(vec4(0));
          } else {
            ${r}

            setOutput(vec4(${i}));
          }
        }
      `}}getSourceCoordsArr(t){const e=[];for(let s=0;s<=1;s++)for(let o=0;o<=1;o++){let r=`${s===0?"r":"rp1"}, ${o===0?"c":"cp1"}`;for(let i=2;i<this.rank;i++)r=`${t[t.length-1-i]},`+r;e.push(r)}return e}getOutOfBoundsCondition(t){if(this.rank===1)return`rc > ${this.enableShapeUniforms?"outShape":this.outputShape[0]}`;let e="";for(let s=this.rank-2;s<this.rank;s++)e+=`${t[s]} >= ${this.enableShapeUniforms?`outShape[${s}]`:this.outputShape[s]}`,s<this.rank-1&&(e+="||");return e}getSetup(t){if(this.rank===1)return"";const e=t.slice(-2),s=this.enableShapeUniforms?`outShape[${this.rank} - 1]`:this.outputShape[this.rank-1],o=this.enableShapeUniforms?`outShape[${this.rank} - 2]`:this.outputShape[this.rank-2];return`
      int r = ${e[0]};
      int c = ${e[1]};
      int rp1 = r + 1;
      int cp1 = c + 1;

      bool cEdge = cp1 >= ${s};
      bool rEdge = rp1 >= ${o};
    `}getOutput(t){const e=this.getSourceCoordsArr(t);return this.rank===1?`getA(rc), (rc + 1 >= ${this.enableShapeUniforms?"outShape":this.outputShape[0]} ? 0. : getA(rc + 1)), 0, 0`:`getA(${e[0]}),
            cEdge ? 0. : getA(${e[1]}),
            rEdge ? 0. : getA(${e[2]}),
            rEdge || cEdge ? 0. : getA(${e[3]})`}}class hy{constructor(t,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec3"}],this.outputShape=t,this.enableShapeUniforms=Be(this.outputShape.length);let s="";for(let o=0;o<4;o++){let r="thisRC = rc;";o%2===1&&(r+="thisRC.z += 1;"),o>1&&(r+="thisRC.y += 1;"),s+=`
        ${r}
        ${o>0?"if(thisRC.y < rows && thisRC.z < cols){":""}
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[${o}] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        ${o>0?"}":""}
      `}this.userCode=`
      ${g3(e,this.enableShapeUniforms)}
      ${this.enableShapeUniforms?vp():Ip(t)}

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = ${this.enableShapeUniforms?"outShape[1]":t[1]};
        int cols = ${this.enableShapeUniforms?"outShape[2]":t[2]};

        ${s}

        setOutput(result);
      }
    `}}function g3(n,t){return`
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      ${t?fL(["r","c","d"],"inputShape"):Do(["r","c","d"],n)}
      return ivec3(r, c, d);
    }
  `}class x3{constructor(t){this.gpgpu=t,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0,this.freeTextures={},this.usedTextures={},this.logEnabled=!1}acquireTexture(t,e,s){const o=py(e,s),r=fy(t,o,s);r in this.freeTextures||(this.freeTextures[r]=[]),r in this.usedTextures||(this.usedTextures[r]=[]);const i=dy(t,o,this.gpgpu.gl,this.gpgpu.textureConfig,s);if(this.freeTextures[r].length>0){this.numFreeTextures--,this.numUsedTextures++,this._numBytesFree-=i,this.log();const l=this.freeTextures[r].pop();return this.usedTextures[r].push(l),l}let a;return o===Te.PACKED_2X2_FLOAT32?a=this.gpgpu.createPackedMatrixTexture(t[0],t[1]):o===Te.PACKED_2X2_FLOAT16?a=this.gpgpu.createFloat16PackedMatrixTexture(t[0],t[1]):o===Te.UNPACKED_FLOAT32?a=this.gpgpu.createFloat32MatrixTexture(t[0],t[1]):o===Te.UNPACKED_FLOAT16?a=this.gpgpu.createFloat16MatrixTexture(t[0],t[1]):o===Te.PACKED_4X1_UNSIGNED_BYTE&&(a=this.gpgpu.createUnsignedBytesMatrixTexture(t[0],t[1])),this.usedTextures[r].push(a),this.numUsedTextures++,this._numBytesAllocated+=i,this.log(),a}releaseTexture(t,e,s,o){if(this.freeTextures==null)return;const r=py(s,o),i=fy(e,r,o);i in this.freeTextures||(this.freeTextures[i]=[]);const a=dy(e,r,this.gpgpu.gl,this.gpgpu.textureConfig,o),l=q().getNumber("WEBGL_DELETE_TEXTURE_THRESHOLD");l!==-1&&this._numBytesAllocated>l?(this.gpgpu.deleteMatrixTexture(t.texture),this._numBytesAllocated-=a):(this.freeTextures[i].push(t),this.numFreeTextures++,this._numBytesFree+=a),this.numUsedTextures--;const c=this.usedTextures[i],u=c&&c.indexOf(t);if(u==null||u<0)throw new Error("Cannot release a texture that was never provided by this texture manager");c[u]=c[c.length-1],c.pop(),this.log()}log(){if(!this.logEnabled)return;const t=this.numFreeTextures+this.numUsedTextures;console.log("Free/Used",`${this.numFreeTextures} / ${this.numUsedTextures}`,`(${t})`);const e=this._numBytesFree/this._numBytesAllocated;console.log(`Bytes allocated: ${this._numBytesAllocated}`),console.log(`Bytes unused: ${this._numBytesFree} (${Math.round(100*e)}%)`)}get numBytesAllocated(){return this._numBytesAllocated}get numBytesFree(){return this._numBytesFree}getNumUsedTextures(){return this.numUsedTextures}getNumFreeTextures(){return this.numFreeTextures}dispose(){if(this.freeTextures!=null){for(const t in this.freeTextures)this.freeTextures[t].forEach(e=>{this.gpgpu.deleteMatrixTexture(e.texture)});for(const t in this.usedTextures)this.usedTextures[t].forEach(e=>{this.gpgpu.deleteMatrixTexture(e.texture)});this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0}}}function b3(n,t){const e=n;if(t===e.R32F)return 4;if(t===e.R16F)return 2;if(t===e.RGBA32F)return 16;if(t===n.RGBA)return 16;if(t===e.RGBA16F)return 8;if(t===e.RGBA8)return 4;throw new Error(`Unknown internal format ${t}`)}function dy(n,t,e,s,o){const r=y3(t,s);let i;if(o){const[l,c]=hr(n[0],n[1]);i=l*c}else{const[l,c]=la(n[0],n[1]);i=l*c}const a=b3(e,r);return i*a}function y3(n,t){switch(n){case Te.PACKED_2X2_FLOAT32:return ry(t);case Te.PACKED_2X2_FLOAT16:return iy(t);case Te.UNPACKED_FLOAT32:return ny(t);case Te.UNPACKED_FLOAT16:return sy(t);case Te.PACKED_4X1_UNSIGNED_BYTE:return oy(t);default:throw new Error(`Unknown physical texture type ${n}`)}}function w3(n){return q().getBool("WEBGL_RENDER_FLOAT32_ENABLED")?n?Te.PACKED_2X2_FLOAT32:Te.UNPACKED_FLOAT32:n?Te.PACKED_2X2_FLOAT16:Te.UNPACKED_FLOAT16}function py(n,t){if(n===yn.UPLOAD)return Te.PACKED_2X2_FLOAT32;if(n===yn.RENDER||n==null)return w3(t);if(n===yn.DOWNLOAD||n===yn.PIXELS)return Te.PACKED_4X1_UNSIGNED_BYTE;throw new Error(`Unknown logical texture type ${n}`)}function fy(n,t,e){return`${n[0]}_${n[1]}_${t}_${e}`}class us{constructor(t,e){this.variableNames=["A"],this.outputShape=t,this.enableShapeUniforms=Be(this.outputShape.length),this.userCode=`
      float unaryOperation(float x) {
        ${e}
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `}}const Dn="if (isnan(x)) return x;",C3="return x;",my="return abs(x);",$3="return (x >= 0.0) ? x : (exp(x) - 1.0);",I3=Dn+`
  return (x < 0.0) ? 0.0 : x;
`,v3=Dn+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,Ys="return x;",k3="return 1.0 / (1.0 + exp(-1.0 * x));";const S3="return x;",N3=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,T3=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,E3=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,R3="return 1.0 / (1.0 + exp(-1.0 * x));";class Zs{constructor(t,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.enableShapeUniforms=Be(this.outputShape.length),this.userCode=`
      vec4 unaryOperation(vec4 x) {
        ${e}
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `}}class A3{constructor(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=t,this.enableShapeUniforms=Be(this.outputShape.length);const e=t.length,s=He("rc",e),o=Ut(e),r=f3(e,s),i=s.slice(-2),a=e<=1?"rc":`vec2(${i.join(",")})`;this.userCode=`
      void main() {
        ${o} rc = getOutputCoords();
        vec4 packedInput = getA(${r});

        setOutput(getChannel(packedInput, ${a}));
      }
    `}}const D3=Vm,F3=1e-7,_3=1e-4,Bc={};function O3(n){return n in Bc||(Bc[n]={}),Bc[n]}const M3=q().getNumber("CPU_HANDOFF_SIZE_THRESHOLD"),L3=600;function P3(){return q().global.screen==null?1024:q().global.screen.height*q().global.screen.width*window.devicePixelRatio*L3/1024/1024}class zc extends Po{nextDataId(){return zc.nextDataId++}constructor(t){if(super(),this.pendingRead=new WeakMap,this.pendingDisposal=new WeakSet,this.dataRefCount=new WeakMap,this.numBytesInGPU=0,this.uploadWaitMs=0,this.downloadWaitMs=0,this.lastGlFlushTime=0,this.warnedAboutMemory=!1,this.pendingDeletes=0,this.disposed=!1,!q().getBool("HAS_WEBGL"))throw new Error("WebGL is not supported on this device");let e;if(t!=null){if(t instanceof Sp)e=t;else{const s=Xn(q().getNumber("WEBGL_VERSION"),t);e=new Sp(s)}this.binaryCache={},this.gpgpuCreatedLocally=!1}else{const s=Xn(q().getNumber("WEBGL_VERSION"));e=new Sp(s),this.binaryCache=O3(q().getNumber("WEBGL_VERSION")),this.gpgpuCreatedLocally=!0}this.gpgpu=e,this.canvas=this.gpgpu.gl.canvas,this.textureManager=new x3(this.gpgpu),this.numMBBeforeWarning=P3(),this.texData=new $a(this,on())}numDataIds(){return this.texData.numDataIds()-this.pendingDeletes}writeTexture(t,e,s,o,r,i){const a=this.makeTensorInfo(e,s),l=this.texData.get(a.dataId);l.isPacked=!1,l.texture={texture:t,texShape:[o,r]},l.texShape=[o,r];const c=Oc(e),u=new ey(c,!1,i),h=this.runWebGLProgram(u,[a],s,[[o,r]]);return h.shape=e,l.texture=null,this.disposeIntermediateTensorInfo(a),h.dataId}write(t,e,s){if((q().getBool("WEBGL_CHECK_NUMERICAL_PROBLEMS")||q().getBool("DEBUG"))&&this.checkNumericalProblems(t),s==="complex64"&&t!=null)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");const o={id:this.nextDataId()};return this.texData.set(o,{shape:e,dtype:s,values:t,usage:yn.UPLOAD,refCount:1}),o}refCount(t){return this.texData.has(t)?this.texData.get(t).refCount:0}incRef(t){const e=this.texData.get(t);e.refCount++}decRef(t){if(this.texData.has(t)){const e=this.texData.get(t);e.refCount--}}move(t,e,s,o,r){if(q().getBool("DEBUG")&&this.checkNumericalProblems(e),o==="complex64")throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.texData.set(t,{shape:s,dtype:o,values:e,usage:yn.UPLOAD,refCount:r})}disposeIntermediateTensorInfo(t){this.disposeData(t.dataId)}readSync(t){const e=this.texData.get(t),{values:s,dtype:o,complexTensorInfos:r,slice:i,shape:a,isPacked:l}=e;if(i!=null){let d;l?d=new Zs(a,Ys):d=new us(a,Ys);const p=this.runWebGLProgram(d,[{dataId:t,shape:a,dtype:o}],o),f=this.readSync(p.dataId);return this.disposeIntermediateTensorInfo(p),f}if(s!=null)return this.convertAndCacheOnCPU(t);if(o==="string")return s;const c=this.activeTimers!=null;let u;c&&(u=Ke());let h;if(o==="complex64"){const d=this.readSync(r.real.dataId),p=this.readSync(r.imag.dataId);h=ys(d,p)}else h=this.getValuesFromTexture(t);return c&&(this.downloadWaitMs+=Ke()-u),this.convertAndCacheOnCPU(t,h)}read(t){return J(this,null,function*(){if(this.pendingRead.has(t)){const f=this.pendingRead.get(t);return new Promise(m=>f.push(m))}const e=this.texData.get(t),{values:s,shape:o,slice:r,dtype:i,complexTensorInfos:a,isPacked:l}=e;if(r!=null){let f;l?f=new Zs(o,Ys):f=new us(o,Ys);const m=this.runWebGLProgram(f,[{dataId:t,shape:o,dtype:i}],i),g=this.read(m.dataId);return this.disposeIntermediateTensorInfo(m),g}if(s!=null)return this.convertAndCacheOnCPU(t);if(q().getBool("DEBUG")&&!q().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")&&q().getNumber("WEBGL_VERSION")===2)throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");let c=null,u;if(i!=="complex64"&&q().get("WEBGL_BUFFER_SUPPORTED")){u=this.decode(t);const f=this.texData.get(u.dataId);c=this.gpgpu.createBufferFromTexture(f.texture.texture,...Dc(o))}this.pendingRead.set(t,[]),i!=="complex64"&&(yield this.gpgpu.createAndWaitForFence());let h;if(i==="complex64"){const f=yield Promise.all([this.read(a.real.dataId),this.read(a.imag.dataId)]),m=f[0],g=f[1];h=ys(m,g)}else if(c==null)h=this.getValuesFromTexture(t);else{const f=K(o);h=this.gpgpu.downloadFloat32MatrixFromBuffer(c,f)}if(u!=null&&this.disposeIntermediateTensorInfo(u),c!=null){const f=this.gpgpu.gl;lt(f,()=>f.deleteBuffer(c))}const d=this.convertAndCacheOnCPU(t,h),p=this.pendingRead.get(t);return this.pendingRead.delete(t),p.forEach(f=>f(d)),this.pendingDisposal.has(t)&&(this.pendingDisposal.delete(t),this.disposeData(t)&&on().removeDataId(t,this),this.pendingDeletes--),d})}readToGPU(t,e={}){const s=this.texData.get(t),{values:o,shape:r,slice:i,dtype:a,isPacked:l,texture:c}=s;if(a==="complex64")throw new Error("Does not support reading texture for complex64 dtype.");if(i!=null){let p;l?p=new Zs(r,Ys):p=new us(r,Ys);const f=this.runWebGLProgram(p,[{dataId:t,shape:r,dtype:a}],a),m=this.readToGPU(f,e);return this.disposeIntermediateTensorInfo(f),m}if(c==null)throw o!=null?new Error("Data is not on GPU but on CPU."):new Error("There is no data on GPU or CPU.");const u=this.decode(t,e.customTexShape),h=on().makeTensorFromTensorInfo(u),d=this.texData.get(u.dataId);return Object.assign({tensorRef:h},d.texture)}bufferSync(t){const e=this.readSync(t.dataId);if(t.dtype==="string")try{const s=e.map(o=>Ds(o));return kt(t.shape,t.dtype,s)}catch(s){throw new Error("Failed to decode encoded string bytes into utf-8")}return kt(t.shape,t.dtype,e)}checkNumericalProblems(t){if(t!=null)for(let e=0;e<t.length;e++){const s=t[e];if(!VM(s))throw q().getBool("WEBGL_RENDER_FLOAT32_CAPABLE")?Error(`The value ${s} cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'`):Error(`The value ${s} cannot be represented on this device.`)}}getValuesFromTexture(t){const{shape:e,dtype:s,isPacked:o}=this.texData.get(t),r=K(e);if(q().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")){const d=this.decode(t),p=this.texData.get(d.dataId),f=this.gpgpu.downloadMatrixFromPackedTexture(p.texture.texture,...Dc(e)).subarray(0,r);return this.disposeIntermediateTensorInfo(d),f}const i=q().getBool("WEBGL_PACK")&&o===!0,a=i?Oc(e):e,l=i?new sP(a):new nP(a),c=this.runWebGLProgram(l,[{shape:a,dtype:s,dataId:t}],"float32"),u=this.texData.get(c.dataId),h=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(u.texture.texture,u.texShape[0],u.texShape[1]).subarray(0,r);return this.disposeIntermediateTensorInfo(c),h}timerAvailable(){return q().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0}time(t){const e=this.activeTimers,s=[];let o=!1;this.programTimersStack==null?(this.programTimersStack=s,o=!0):this.activeTimers.push(s),this.activeTimers=s,t();const r=ro(this.activeTimers.map(l=>l.query)).filter(l=>l!=null),i=ro(this.activeTimers.map(l=>l.name)).filter(l=>l!=null);this.activeTimers=e,o&&(this.programTimersStack=null);const a={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null};return J(this,null,function*(){if(q().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0){const l=yield Promise.all(r);a.kernelMs=bw(l),a.getExtraProfileInfo=()=>l.map((c,u)=>({name:i[u],ms:c})).map(c=>`${c.name}: ${c.ms}`).join(", ")}else a.kernelMs={error:"WebGL query timers are not supported in this environment."};return this.uploadWaitMs=0,this.downloadWaitMs=0,a})}memory(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU,numBytesInGPUAllocated:this.textureManager.numBytesAllocated,numBytesInGPUFree:this.textureManager.numBytesFree}}startTimer(){return q().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?this.gpgpu.beginQuery():{startMs:Ke(),endMs:null}}endTimer(t){return q().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?(this.gpgpu.endQuery(),t):(t.endMs=Ke(),t)}getQueryTime(t){return J(this,null,function*(){if(q().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0)return this.gpgpu.waitForQueryAndGetTime(t);const e=t;return e.endMs-e.startMs})}disposeData(t,e=!1){if(this.pendingDisposal.has(t))return!1;if(!this.texData.has(t))return!0;if(e?this.texData.get(t).refCount=0:this.texData.get(t).refCount--,!e&&this.texData.get(t).refCount>0)return!1;if(this.pendingRead.has(t))return this.pendingDisposal.add(t),this.pendingDeletes++,!1;this.releaseGPUData(t);const{complexTensorInfos:s}=this.texData.get(t);return s!=null&&(this.disposeData(s.real.dataId,e),this.disposeData(s.imag.dataId,e)),this.texData.delete(t),!0}releaseGPUData(t){const{texture:e,dtype:s,texShape:o,usage:r,isPacked:i,slice:a}=this.texData.get(t),l=a&&a.origDataId||t,c=this.dataRefCount.get(l);c>1?this.dataRefCount.set(l,c-1):(this.dataRefCount.delete(l),e!=null&&(this.numBytesInGPU-=this.computeBytes(o,s),this.textureManager.releaseTexture(e,o,r,i)));const u=this.texData.get(t);u.texture=null,u.texShape=null,u.isPacked=!1,u.slice=null}getTexture(t){return this.uploadToGPU(t),this.texData.get(t).texture.texture}getDataInfo(t){return this.texData.get(t)}shouldExecuteOnCPU(t,e=M3){return q().getBool("WEBGL_CPU_FORWARD")&&t.every(s=>this.texData.get(s.dataId).texture==null&&K(s.shape)<e)}getGPGPUContext(){return this.gpgpu}where(t){fn("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");const e=t.dataSync();return D3(t.shape,e)}packedUnaryOp(t,e,s){const o=new Zs(t.shape,e),r=this.compileAndRun(o,[t],s);return on().makeTensorFromTensorInfo(r)}abs(t){if(this.shouldExecuteOnCPU([t])&&t.dtype!=="complex64"){const o=ly(this.texData.get(t.dataId).values);return this.makeOutput(t.shape,t.dtype,o)}if(q().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,my,t.dtype);const e=new us(t.shape,my),s=this.compileAndRun(e,[t]);return on().makeTensorFromTensorInfo(s)}makeTensorInfo(t,e,s){let o;if(e==="string"&&s!=null&&s.length>0&&Nr(s[0])){const r=s.map(i=>As(i));o=this.write(r,t,e)}else o=this.write(s,t,e);return this.texData.get(o).usage=null,{dataId:o,shape:t,dtype:e}}makeOutput(t,e,s){return on().makeTensorFromTensorInfo(this.makeTensorInfo(t,e,s),this)}unpackTensor(t){const e=new A3(t.shape);return this.runWebGLProgram(e,[t],t.dtype)}packTensor(t){const e=new m3(t.shape);return this.runWebGLProgram(e,[t],t.dtype,null,!0)}packedReshape(t,e){const s=[dr(t.shape),...pr(t.shape)],o={dtype:t.dtype,shape:s,dataId:t.dataId},r=[dr(e),...pr(e)],i=new hy(r,s),a=!0,l=[s],c=this.runWebGLProgram(i,[o],t.dtype,l,a);return{dataId:c.dataId,shape:e,dtype:c.dtype}}decode(t,e){const s=this.texData.get(t),{isPacked:o,shape:r,dtype:i}=s;if(e!=null){const d=K(r),p=e[0]*e[1]*4;T(d<=p,()=>"customTexShape is too small. Row * Column * 4 should be equal or larger than the size of the tensor data.")}const a=Oc(r);let l;o?l=new eP(a):l=new tP(a);const c=!0,u=[e!=null?e:Dc(a)],h=this.runWebGLProgram(l,[{shape:a,dtype:i,dataId:t}],i,u,c,e);return{dtype:i,shape:r,dataId:h.dataId}}runWebGLProgram(t,e,s,o,r=!1,i){const a=this.makeTensorInfo(t.outputShape,s),l=this.texData.get(a.dataId);if(t.packedOutput&&(l.isPacked=!0),t.outPackingScheme===aa.DENSE){const x=i!=null?i:Dc(t.outputShape);l.texShape=x.map(b=>b*2)}if(t.outTexUsage!=null&&(l.usage=t.outTexUsage),K(a.shape)===0)return l.values=_e(a.dtype,0),a;const c=[],u=e.map(x=>{if(x.dtype==="complex64")throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");let b=this.texData.get(x.dataId);if(b.texture==null){if(!t.packedInputs&&K(x.shape)<=q().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM"))return{shape:x.shape,texData:null,isUniform:!0,uniformValues:b.values};t.packedInputs&&(b.isPacked=!0,b.shape=x.shape)}if(this.uploadToGPU(x.dataId),!!b.isPacked!=!!t.packedInputs)x=b.isPacked?this.unpackTensor(x):this.packTensor(x),c.push(x),b=this.texData.get(x.dataId);else if(b.isPacked&&!Lc(b.shape,x.shape)){const w=x,y=x.shape;x.shape=b.shape,x=this.packedReshape(x,y),c.push(x),b=this.texData.get(x.dataId),w.shape=y}return{shape:x.shape,texData:b,isUniform:!1}});this.uploadToGPU(a.dataId);const h={shape:a.shape,texData:l,isUniform:!1},d=JL(t,u,h),p=this.getAndSaveBinary(d,()=>ZL(this.gpgpu,t,u,h)),f=this.activeTimers!=null;let m;f&&(m=this.startTimer()),q().get("ENGINE_COMPILE_ONLY")||QL(this.gpgpu,p,u,h,o),c.forEach(x=>this.disposeIntermediateTensorInfo(x)),f&&(m=this.endTimer(m),this.activeTimers.push({name:t.constructor.name,query:this.getQueryTime(m)}));const g=q().getNumber("WEBGL_FLUSH_THRESHOLD");if(g>0){const x=Ke();x-this.lastGlFlushTime>g&&(this.gpgpu.gl.flush(),this.lastGlFlushTime=x)}if(!q().getBool("WEBGL_LAZILY_UNPACK")&&l.isPacked&&r===!1){const x=this.unpackTensor(a);return this.disposeIntermediateTensorInfo(a),x}return a}compileAndRun(t,e,s,o,r=!1){return s=s||e[0].dtype,this.runWebGLProgram(t,e,s,o,r)}getAndSaveBinary(t,e){return t in this.binaryCache||(this.binaryCache[t]=e()),this.binaryCache[t]}getTextureManager(){return this.textureManager}dispose(){this.disposed||(q().getBool("IS_TEST")||Object.keys(this.binaryCache).forEach(e=>{this.gpgpu.deleteProgram(this.binaryCache[e].webGLProgram),delete this.binaryCache[e]}),this.textureManager.dispose(),this.canvas!=null&&typeof HTMLCanvasElement!="undefined"&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),this.disposed=!0)}floatPrecision(){return this.floatPrecisionValue==null&&(this.floatPrecisionValue=U(()=>{if(!q().get("WEBGL_RENDER_FLOAT32_ENABLED")){const t=q().getBool("DEBUG");q().set("DEBUG",!1);const e=this.abs(zt(1e-8)).dataSync()[0];if(q().set("DEBUG",t),e>0)return 32}return 16})),this.floatPrecisionValue}epsilon(){return this.floatPrecision()===32?F3:_3}uploadToGPU(t){const e=this.texData.get(t),{shape:s,dtype:o,values:r,texture:i,usage:a,isPacked:l}=e;if(i!=null)return;const c=this.activeTimers!=null;let u;c&&(u=Ke());let h=e.texShape;if(h==null&&(h=rL(s,l),e.texShape=h),r!=null){const d=Oc(s);let p,f=h[1],m=h[0];const g=r instanceof Uint8Array||r instanceof Uint8ClampedArray;(l||!g)&&([f,m]=hr(h[0],h[1])),l?p=new rP(d,g):p=new ey(d,g);const x=g?[m,f]:h,b=this.makeTensorInfo(x,o),w=this.texData.get(b.dataId);g?w.usage=yn.PIXELS:w.usage=yn.UPLOAD,w.texShape=x,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(b.dataId),f,m,r);const y=[[m,f]],I=this.runWebGLProgram(p,[b],o,y,!0),v=this.texData.get(I.dataId);e.texShape=v.texShape,e.isPacked=v.isPacked,e.usage=v.usage,q().get("ENGINE_COMPILE_ONLY")?this.disposeData(I.dataId):(e.texture=v.texture,e.values=null,this.texData.delete(I.dataId)),this.disposeIntermediateTensorInfo(b),c&&(this.uploadWaitMs+=Ke()-u)}else{const d=this.acquireTexture(h,a,o,l);e.texture=d}}convertAndCacheOnCPU(t,e){const s=this.texData.get(t),{dtype:o}=s;return e!=null&&(s.values=B3(e,o)),s.values}acquireTexture(t,e,s,o){if(this.numBytesInGPU+=this.computeBytes(t,s),!this.warnedAboutMemory&&this.numBytesInGPU>this.numMBBeforeWarning*1024*1024){const r=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn(`High memory usage in GPU: ${r} MB, most likely due to a memory leak`)}return this.textureManager.acquireTexture(t,e,o)}computeBytes(t,e){return t[0]*t[1]*Ia(e)}checkCompileCompletion(){for(const[,t]of Object.entries(this.binaryCache))this.checkCompletion_(t)}checkCompileCompletionAsync(){return J(this,null,function*(){const t=[];if(this.gpgpu.parallelCompilationExtension){for(const[,e]of Object.entries(this.binaryCache))t.push(this.checkCompletionAsync_(e));return Promise.all(t)}else{for(const[,e]of Object.entries(this.binaryCache)){const s=new Promise(o=>{try{this.checkCompletion_(e),o(!0)}catch(r){throw r}});t.push(s)}return Promise.all(t)}})}checkCompletionAsync_(t){return J(this,null,function*(){return this.gpgpu.gl.getProgramParameter(t.webGLProgram,this.gpgpu.parallelCompilationExtension.COMPLETION_STATUS_KHR)?this.checkCompletion_(t):(yield cg(),this.checkCompletionAsync_(t))})}checkCompletion_(t){if(this.gpgpu.gl.getProgramParameter(t.webGLProgram,this.gpgpu.gl.LINK_STATUS)===!1)throw console.log(this.gpgpu.gl.getProgramInfoLog(t.webGLProgram)),this.gpgpu.gl.getShaderParameter(t.fragmentShader,this.gpgpu.gl.COMPILE_STATUS)===!1?(H1(t.source,this.gpgpu.gl.getShaderInfoLog(t.fragmentShader)),new Error("Failed to compile fragment shader.")):new Error("Failed to link vertex and fragment shaders.");return!0}getUniformLocations(){for(const t of Object.values(this.binaryCache)){this.gpgpu.buildVao(t.webGLProgram);const{variablesLocations:e,customUniformLocations:s,infLoc:o,nanLoc:r,outShapeLocation:i,outShapeStridesLocation:a,outTexShapeLocation:l}=J1(this.gpgpu,t.program,t.webGLProgram);t.variablesLocations=e,t.customUniformLocations=s,t.infLoc=o,t.nanLoc=r,t.outShapeLocation=i,t.outShapeStridesLocation=a,t.outTexShapeLocation=l}}createTensorFromGPUData(t,e,s){t.channels=t.channels||"RGBA";const{texture:o,height:r,width:i,channels:a}=t,l=on().backend;if(!l.gpgpu.gl.isTexture(o))throw new Error("The texture is invalid. Also, please make sure the texture and the TFJS WebGL backend are using the same canvas. If you want to use your own custom canvas, you have to create and use the custom TFJS WebGL backend created from the canvas through 'new tf.MathBackendWebGL(customCanvas)'.");const c=l.writeTexture(o,e,s,r,i,a);return on().makeTensorFromDataId(c,e,s,l)}}zc.nextDataId=0;function B3(n,t){if(t==="float32"||t==="complex64")return n;if(t==="int32"||t==="bool"){const e=t==="int32"?new Int32Array(n.length):new Uint8Array(n.length);for(let s=0;s<e.length;++s)e[s]=Math.round(n[s]);return e}else throw new Error(`Unknown dtype ${t}`)}Bf()&&Hf("webgl",()=>new zc,2);const Tp=`
  if (isnan(a)) return a;
  if (isnan(b)) return b;
`;class _o{constructor(t,e,s){this.variableNames=["A","B"],this.outputShape=$t(e,s),this.enableShapeUniforms=Be(this.outputShape.length),this.userCode=`
      float binaryOperation(float a, float b) {
        ${t}
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `}}const Oo=`
  result.r = isNaN.r ? NAN : result.r;
  result.g = isNaN.g ? NAN : result.g;
  result.b = isNaN.b ? NAN : result.b;
  result.a = isNaN.a ? NAN : result.a;
`;class br{constructor(t,e,s,o=!1){this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=$t(e,s);const r=this.outputShape.length;this.enableShapeUniforms=Be(r);let i="";if(o)if(r===0||K(this.outputShape)===1)i=`
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;else if(i=`
          ${Ut(r)} coords = getOutputCoords();
        `,r===1)this.enableShapeUniforms?i+=`
            result.y = (coords + 1) >= outShape ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `:i+=`
            result.y = (coords + 1) >= ${this.outputShape[0]} ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;else{const l=He("coords",r);this.enableShapeUniforms?i+=`
            bool nextRowOutOfBounds =
              (${l[r-2]} + 1) >= outShape[${r} - 2];
            bool nextColOutOfBounds =
              (${l[r-1]} + 1) >= outShape[${r} - 1];
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `:i+=`
            bool nextRowOutOfBounds =
              (${l[r-2]} + 1) >= ${this.outputShape[r-2]};
            bool nextColOutOfBounds =
              (${l[r-1]} + 1) >= ${this.outputShape[r-1]};
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `}this.userCode=`
      vec4 binaryOperation(vec4 a, vec4 b) {
        ${t}
      }

      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();

        vec4 result = binaryOperation(a, b);
        ${i}

        setOutput(result);
      }
    `}}function cn(n){const{inputs:t,backend:e}=n,{x:s}=t;return e.incRef(s.dataId),{dataId:s.dataId,shape:s.shape,dtype:s.dtype}}const z3={kernelName:Kr,backendName:"webgl",kernelFunc:cn};function Qs(n){const{inputs:t,backend:e}=n,{real:s,imag:o}=t,r=e.makeTensorInfo(s.shape,"complex64"),i=e.texData.get(r.dataId),a=cn({inputs:{x:s},backend:e}),l=cn({inputs:{x:o},backend:e});return i.complexTensorInfos={real:a,imag:l},r}const V3={kernelName:yu,backendName:"webgl",kernelFunc:Qs};const gy="return (a < 0.) ? b * a : a;",xy=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`;function W3(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{alpha:r}=s,i=e.makeTensorInfo([],"float32",Rs(r,"float32")),a=q().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new br(xy,o.shape,i.shape):new _o(gy,o.shape,i.shape),l=e.runWebGLProgram(a,[o,i],"float32");return e.disposeIntermediateTensorInfo(i),l}const U3={kernelName:Ga,backendName:"webgl",kernelFunc:W3};const by="return (a < 0.) ? b * a : a;",yy=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`;function G3(n){const{inputs:t,backend:e}=n,{x:s,alpha:o}=t,r=q().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new br(yy,s.shape,o.shape):new _o(by,s.shape,o.shape);return e.runWebGLProgram(r,[s,o],"float32")}const H3={kernelName:cl,backendName:"webgl",kernelFunc:G3};const yr="if (isnan(x)) return x;";function _t({opSnippet:n,packedOpSnippet:t,cpuKernelImpl:e,dtype:s}){return({inputs:o,backend:r})=>{const{x:i}=o,a=r,l=s||i.dtype;if(a.shouldExecuteOnCPU([i])&&e!=null){const h=a.texData.get(i.dataId),d=e(h.values,l);return a.makeTensorInfo(i.shape,l,d)}const c=q().getBool("WEBGL_PACK_UNARY_OPERATIONS")&&t!=null;let u;return c?u=new Zs(i.shape,t):u=new us(i.shape,n),a.runWebGLProgram(u,[i],l)}}function Ee({opSnippet:n,packedOpSnippet:t,checkOutOfBounds:e=!1,supportsComplex:s=!1,cpuKernelImpl:o,dtype:r}){return({inputs:i,backend:a})=>{const{a:l,b:c}=i,u=a;if(s&&l.dtype==="complex64"){const f=u.texData.get(l.dataId),m=u.texData.get(c.dataId),[g,x]=[[f.complexTensorInfos.real,m.complexTensorInfos.real],[f.complexTensorInfos.imag,m.complexTensorInfos.imag]].map(w=>{const[y,C]=w,I={dataId:y.dataId,dtype:y.dtype,shape:l.shape},v={dataId:C.dataId,dtype:C.dtype,shape:c.shape},N=new _o(n,l.shape,c.shape);return u.runWebGLProgram(N,[I,v],sn(y.dtype,C.dtype))}),b=Qs({inputs:{real:g,imag:x},backend:u});return u.disposeIntermediateTensorInfo(g),u.disposeIntermediateTensorInfo(x),b}const h=r||sn(l.dtype,c.dtype);if((l.dtype==="string"||c.dtype==="string"||u.shouldExecuteOnCPU([l,c]))&&o!=null){const f=u.texData.get(l.dataId).values,m=u.texData.get(c.dataId).values,g=l.dtype==="string"?ws(f):f,x=l.dtype==="string"?ws(m):m,[b,w]=o(l.shape,c.shape,g,x,h),y=u.makeTensorInfo(w,h),C=u.texData.get(y.dataId);return C.values=b,y}const d=q().getBool("WEBGL_PACK_BINARY_OPERATIONS")&&t!=null;let p;return d?p=new br(t,l.shape,c.shape,e):p=new _o(n,l.shape,c.shape),u.runWebGLProgram(p,[l,c],h)}}function ha(n,t=!1){if(n==="linear")return t?S3:C3;if(n==="relu")return t?T3:I3;if(n==="elu")return t?N3:$3;if(n==="relu6")return t?E3:v3;if(n==="prelu")return t?yy:by;if(n==="leakyrelu")return t?xy:gy;if(n==="sigmoid")return t?R3:k3;throw new Error(`Activation ${n} has not been implemented for the WebGL backend.`)}class wy{constructor(t,e,s,o=!1,r=!1,i=!1,a=null,l=!1,c=!1){this.variableNames=["matrixA","matrixB"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=s,this.enableShapeUniforms=Be(this.outputShape.length);const u=o?t[1]:t[2],h=Math.ceil(u/2),d=o?"i * 2, rc.y":"rc.y, i * 2",p=r?"rc.z, i * 2":"i * 2, rc.z",f=o?["a.xxyy","a.zzww"]:["a.xxzz","a.yyww"],m=r?["b.xzxz","b.ywyw"]:["b.xyxy","b.zwzw"];let g="",x="";a&&(l?g=`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${a}
        }`:c?g=`vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${a}
        }`:g=`vec4 activation(vec4 x) {
          ${a}
        }`,x="result = activation(result);");const b=i?"result += getBiasAtOutCoords();":"";i&&this.variableNames.push("bias"),l&&this.variableNames.push("preluActivationWeights"),c&&this.variableNames.push("leakyreluAlpha");let w="rc.x",y="rc.x";t[0]<e[0]?w=`imod(rc.x, ${t[0]})`:e[0]<t[0]&&(y=`imod(rc.x, ${e[0]})`),this.userCode=`
      ${g}
      // Don't use uniform for sharedDimensionPacked for performance.
      const float sharedDimension = ${h}.0;

      vec4 dot2x2ARowBCol(ivec3 rc) {
        vec4 result = vec4(0);
        int batchA = ${w};
        int batchB = ${y};
        for (int i = 0; i < ${h}; i++) {
          vec4 a = getMatrixA(batchA, ${d});
          vec4 b = getMatrixB(batchB, ${p});

          // These swizzled products need to be separately added.
          // See: https://github.com/tensorflow/tfjs/issues/1735
          result += (${f[0]} * ${m[0]});
          result += (${f[1]} * ${m[1]});
        }
        return result;
      }

      void main() {
        ivec3 rc = getOutputCoords();
        vec4 result = dot2x2ARowBCol(rc);

        ${b}

        ${x}

        setOutput(result);
      }
    `}}const Cy={REAL:"return areal * breal - aimag * bimag;",IMAG:"return areal * bimag + aimag * breal;"};class $y{constructor(t,e,s){this.variableNames=["AReal","AImag","BReal","BImag"],this.outputShape=$t(e,s),this.userCode=`
      float binaryOpComplex(
          float areal, float aimag, float breal, float bimag) {
        ${t}
      }

      void main() {
        float areal = getARealAtOutCoords();
        float aimag = getAImagAtOutCoords();
        float breal = getBRealAtOutCoords();
        float bimag = getBImagAtOutCoords();
        setOutput(binaryOpComplex(areal, aimag, breal, bimag));
      }
    `}}const Iy="return a * b;";function Ep(n){const{inputs:t,backend:e}=n,{a:s,b:o}=t,r=sn(s.dtype,o.dtype);if(s.dtype==="complex64"){const a=e.texData.get(s.dataId),l=e.texData.get(o.dataId),c=new $y(Cy.REAL,s.shape,o.shape),u=new $y(Cy.IMAG,s.shape,o.shape),h=[{dataId:a.complexTensorInfos.real.dataId,dtype:a.complexTensorInfos.real.dtype,shape:s.shape},{dataId:a.complexTensorInfos.imag.dataId,dtype:a.complexTensorInfos.imag.dtype,shape:s.shape},{dataId:l.complexTensorInfos.real.dataId,dtype:l.complexTensorInfos.real.dtype,shape:o.shape},{dataId:l.complexTensorInfos.imag.dataId,dtype:l.complexTensorInfos.imag.dtype,shape:o.shape}],d=e.runWebGLProgram(c,h,"float32"),p=e.runWebGLProgram(u,h,"float32"),f=Qs({inputs:{real:d,imag:p},backend:e});return e.disposeIntermediateTensorInfo(d),e.disposeIntermediateTensorInfo(p),f}if(e.shouldExecuteOnCPU([s,o])){const a=e.texData.get(s.dataId),l=e.texData.get(o.dataId),[c,u]=GP(s.shape,o.shape,a.values,l.values,r),h=e.makeTensorInfo(u,r),d=e.texData.get(h.dataId);return d.values=c,h}let i;return q().getBool("WEBGL_PACK_BINARY_OPERATIONS")?i=new br(Iy,s.shape,o.shape):i=new _o(Iy,s.shape,o.shape),e.runWebGLProgram(i,[s,o],r)}const q3={kernelName:si,backendName:"webgl",kernelFunc:Ep};function X3(n,t,e){const s=[dr(n.shape),...pr(n.shape)],o={dtype:n.dtype,shape:s,dataId:n.dataId},r=[dr(t),...pr(t)],i=new hy(r,s),a=!0,l=[s],c=e.runWebGLProgram(i,[o],n.dtype,l,a);return{dataId:c.dataId,shape:t,dtype:c.dtype}}function it(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{shape:r}=s,i=e,a=K(o.shape),l=Wp(r,a),c=K(l);T(a===c,()=>`The new shape (${l}) has ${c} elements and the old shape (${o.shape}) has ${a} elements. The new shape and old shape must have the same number of elements.`);const u=i.texData.get(o.dataId);return u.isPacked&&!Lc(o.shape,l)&&!(u.texture!==null&&Lc(u.shape,l))?X3(o,l,i):(i.incRef(o.dataId),{dataId:o.dataId,shape:l,dtype:o.dtype})}const K3={kernelName:hl,backendName:"webgl",kernelFunc:it};class vy{constructor(t,e){this.variableNames=["x"];const{windowSize:s,batchSize:o,inSize:r,outSize:i}=t;this.outputShape=[o,i];const a=Math.floor(s/4)*4,l=s%4;let c="sumValue += dot(values, ones);";if(e!=null){const h=1/e;c=`sumValue += dot(values * ${Bo(h)?h.toPrecision(2):h}, ones);`}let u="";r%s>0&&(u=`
        if (inIdx < 0 || inIdx >= ${r}) {
          return 0.0;
        }
      `),this.userCode=`
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${u}
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${s};

        float sumValue = 0.0;

        for (int i = 0; i < ${a}; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${c}
        }

        int inIdx = inOffset + ${a};
        if (${l===1}) {
          vec4 values = vec4(getValue(batch, inIdx), 0.0, 0.0, 0.0);

          ${c}
        } else if (${l===2}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1), 0.0, 0.0);

          ${c}
        } else if (${l===3}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2), 0.0);

          ${c}
        }
        setOutput(sumValue);
      }
    `}}class j3{constructor(t,e){this.variableNames=["x"];const{windowSize:s,batchSize:o,inSize:r,outSize:i}=t;this.outputShape=[o,i];let a="0.0",l="";e==="prod"?a="1.0":e==="min"?(a="1.0 / 1e-20",l="min"):e==="max"&&(a="-1.0 / 1e-20",l="max");let c=`${e}(${e}(${e}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;e==="sum"?c="sumValue":e==="prod"?c="prodValue":e==="all"?c="allValue":e==="any"&&(c="anyValue");const u=Math.floor(s/4)*4,h=s%4;let d=`
      if (${e==="sum"}) {
        sumValue += dot(values, ones);
      } else if (${e==="prod"}) {
        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);
        prodValue *= tmp[0] * tmp[1];
      } else {
        minMaxValue = ${l}(values, minMaxValue);
        if (${e==="min"} || ${e==="max"}) {
          minMaxValue = ${l}(values, minMaxValue);
          bvec4 isNaN = isnan(values);
          if (isNaN.r || isNaN.g || isNaN.b || isNaN.a) {
            minMaxValue = vec4(NAN);
          }
        }
      }
    `,p="vec4";e==="all"?(a="1.0",d=`
        bool reducedAllValue = all(values);
        float floatedReducedAllValue = float(reducedAllValue);
        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);
      `,p="bvec4"):e==="any"&&(a="0.0",d=`
        bool reducedAnyValue = any(values);
        float floatedReducedAnyValue = float(reducedAnyValue);
        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);
      `,p="bvec4");let f="";r%s>0&&(f=`
        if (inIdx < 0 || inIdx >= ${r}) {
          return initializationValue;
        }
      `),this.userCode=`
      const float initializationValue = ${a};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${f}
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${s};

        vec4 minMaxValue = vec4(${a});
        float prodValue = 1.0;
        float sumValue = 0.0;
        float allValue = 1.0;
        float anyValue = 0.0;

        for (int i = 0; i < ${u}; i += 4) {
          int inIdx = inOffset + i;
          ${p} values = ${p}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${d}
        }

        int inIdx = inOffset + ${u};
        if (${h===1}) {
          ${p} values = ${p}(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          ${d}
        } else if (${h===2}) {
          ${p} values = ${p}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          ${d}
        } else if (${h===3}) {
          ${p} values = ${p}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          ${d}
        }
        setOutput(${c});
      }
    `}}function Y3(n){const t=[];for(;t.length===0||t[t.length-1].outSize!==1;){const e=t.length?t[t.length-1].outSize:n[1],s=Ql(e);t.push({inSize:e,windowSize:s,outSize:Math.ceil(e/s)})}return t}function Mo(n,t,e,s){const o=Y3(n.shape);let r=n;for(let i=0;i<o.length;i++){const{inSize:a,windowSize:l,outSize:c}=o[i];let u,h;e==="mean"?u=i===0?new vy({windowSize:l,inSize:a,batchSize:n.shape[0],outSize:c},a):new vy({windowSize:l,inSize:a,batchSize:n.shape[0],outSize:c}):u=new j3({windowSize:l,inSize:a,batchSize:n.shape[0],outSize:c},e),h=r,r=s.runWebGLProgram(u,[r],t),h.dataId!==n.dataId&&s.disposeIntermediateTensorInfo(h)}return r}class Z3{constructor(t,e){this.variableNames=["A"];const s=new Array(t.length);for(let i=0;i<s.length;i++)s[i]=t[e[i]];this.outputShape=s,this.rank=s.length;const o=Ut(this.rank),r=Q3(e);this.userCode=`
    void main() {
      ${o} resRC = getOutputCoords();
      setOutput(getA(${r}));
    }
    `}}function Q3(n){const t=n.length;if(t>6)throw Error(`Transpose for rank ${t} is not yet supported`);const e=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u","resRC.v"],s=new Array(t);for(let o=0;o<n.length;o++)s[n[o]]=e[o];return s.join()}class J3{constructor(t,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0;const s=new Array(t.length);for(let u=0;u<s.length;u++)s[u]=t[e[u]];if(this.outputShape=s,this.rank=s.length,this.rank>6)throw Error(`Packed transpose for rank ${this.rank} is not yet supported.`);const o=Ut(this.rank),r=uy("rc",this.rank),i=new Array(this.rank);for(let u=0;u<e.length;u++)i[e[u]]=r[u];const a=`vec2(${i.slice(-2).join()})`,l=`++${r[this.rank-1]} < ${s[this.rank-1]}`,c=`getChannel(getA(${i.join()}), ${a})`;this.userCode=`
    void main() {
      ${o} rc = getOutputCoords();
      vec4 result = vec4(0.);
      result[0] = ${c};
      if(${l}) {
        result[1] = ${c};
      }
      --${r[this.rank-1]};
      if(++${r[this.rank-2]} < ${s[this.rank-2]}) {
        result[2] = ${c};
        if(${l}) {
          result[3] = ${c};
        }
      }
      setOutput(result);
    }
    `}}function Vc(n,t,e){const s=q().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new J3(n.shape,t):new Z3(n.shape,t);return e.runWebGLProgram(s,[n],n.dtype)}function tB(n,t,e,s){const o=t,r=n.shape.length,i=vt(o,n.shape);let a=i;const l=Jt(a,r),c=l!=null;let u=n;c&&(u=Vc(n,l,s),a=ie(a.length,r)),Ne("sum",a,r);const[h,d]=$e(u.shape,a);let p=h;e&&(p=he(h,i));const f=K(d),g=K(n.shape)/f,x=it({inputs:{x:u},attrs:{shape:[g,f]},backend:s}),b=ch(n.dtype),w=Mo(x,b,"sum",s),y=it({inputs:{x:w},attrs:{shape:p},backend:s});return s.disposeIntermediateTensorInfo(x),s.disposeIntermediateTensorInfo(w),c&&s.disposeIntermediateTensorInfo(u),y}function Wc(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,keepDims:i}=s;return tB(o,r,i,e)}const eB={kernelName:xl,backendName:"webgl",kernelFunc:Wc};function qe(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{perm:r}=s,i=e,a=o.shape.length,l=new Array(a);for(let u=0;u<l.length;u++)l[u]=o.shape[r[u]];let c;if(i.shouldExecuteOnCPU([o])){const h=i.texData.get(o.dataId).values,d=Np(h,o.shape,o.dtype,r,l);c=i.makeTensorInfo(l,o.dtype);const p=i.texData.get(c.dataId);p.values=d}else c=Vc(o,r,i);return c}const nB={kernelName:Go,backendName:"webgl",kernelFunc:qe};const ky=1e3;function Uc({a:n,b:t,transposeA:e,transposeB:s,backend:o,bias:r=null,preluActivationWeights:i=null,leakyreluAlpha:a=0,activation:l=null}){const c=n.shape.length,u=t.shape.length,h=e?n.shape[c-2]:n.shape[c-1],d=s?t.shape[u-1]:t.shape[u-2],p=e?n.shape[c-1]:n.shape[c-2],f=s?t.shape[u-2]:t.shape[u-1],m=n.shape.slice(0,-2),g=t.shape.slice(0,-2),x=K(m),b=K(g),y=$t(n.shape.slice(0,-2),t.shape.slice(0,-2)).concat([p,f]);T(h===d,()=>`Error in matMul: inner shapes (${h}) and (${d}) of Tensors with shapes ${n.shape} and ${t.shape} and transposeA=${e} and transposeB=${s} must match.`);const C=e?[x,h,p]:[x,p,h],I=s?[b,f,d]:[b,d,f],v=it({inputs:{x:n},backend:o,attrs:{shape:C}}),N=it({inputs:{x:t},backend:o,attrs:{shape:I}}),S=[v,N],k=Math.max(x,b),$=e?v.shape[1]:v.shape[2],E=r!=null,R=i!=null,A=l==="leakyrelu",F=l!=null?ha(l,!0):null,_=E||R||A||F!=null;let B;if((p===1||f===1)&&$>ky&&_===!1){let V=v,G=N;e&&(V=qe({inputs:{x:v},backend:o,attrs:{perm:[0,2,1]}}),S.push(V)),s&&(G=qe({inputs:{x:N},backend:o,attrs:{perm:[0,2,1]}}),S.push(G));const H=f!==1,j=f===1;let Y=V;H&&(Y=it({inputs:{x:V},backend:o,attrs:{shape:[k,$,1]}}),S.push(Y));const et=f===1?2:1;let Q=G;j&&(Q=it({inputs:{x:G},backend:o,attrs:{shape:[k,1,$]}}),S.push(Q));const st=Ep({inputs:{a:Y,b:Q},backend:o});B=Wc({inputs:{x:st},backend:o,attrs:{axis:et,keepDims:!0}}),S.push(st)}else{const V=sn(n.dtype,t.dtype),G=new wy(C,I,[k,p,f],e,s,E,F,R,A),H=[v,N];if(r!=null&&H.push(r),R&&H.push(i),A){const j=o.makeTensorInfo([],"float32",Rs(a,"float32"));H.push(j),S.push(j)}B=o.runWebGLProgram(G,H,V)}const O=it({inputs:{x:B},backend:o,attrs:{shape:y}});S.push(B);for(const V of S)o.disposeIntermediateTensorInfo(V);return O}function sB(n){const{inputs:t,backend:e,attrs:s}=n,{a:o,b:r,bias:i,preluActivationWeights:a}=t,{transposeA:l,transposeB:c,activation:u,leakyreluAlpha:h}=s;return Uc({a:o,b:r,transposeA:l,transposeB:c,backend:e,bias:i,preluActivationWeights:a,leakyreluAlpha:h,activation:u})}const oB={kernelName:vl,backendName:"webgl",kernelFunc:sB};const Sy="return abs(x);";function rB(n){const{inputs:t,backend:e}=n,{x:s}=t;if(e.shouldExecuteOnCPU([s])&&s.dtype!=="complex64"){const r=e.texData.get(s.dataId),i=ly(r.values);return e.makeTensorInfo(s.shape,s.dtype,i)}let o;return q().getBool("WEBGL_PACK_UNARY_OPERATIONS")?o=new Zs(s.shape,Sy):o=new us(s.shape,Sy),e.runWebGLProgram(o,[s],s.dtype)}const iB={kernelName:va,backendName:"webgl",kernelFunc:rB};const aB=Dn+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`,lB=_t({opSnippet:aB}),cB={kernelName:Tr,backendName:"webgl",kernelFunc:lB};const uB=Dn+`
  if (x < 1.0) return NAN;
return log(x + sqrt(x * x - 1.0));`,hB=_t({opSnippet:uB}),dB={kernelName:Er,backendName:"webgl",kernelFunc:hB};const Ny="return a + b;",pB=Ee({opSnippet:Ny,packedOpSnippet:Ny,supportsComplex:!0,cpuKernelImpl:IP}),fB={kernelName:Uo,backendName:"webgl",kernelFunc:pB};class mB{constructor(t,e){this.outputShape=[],this.outputShape=t,this.variableNames=e.map((r,i)=>`T${i}`);const s=[];this.variableNames.forEach(r=>{s.push(`float v${r} = get${r}AtOutCoords();`)});const o=this.variableNames.map(r=>`v${r}`).join(" + ");this.userCode=`
      void main() {
        ${s.join(`
        `)}

        float result = ${o};
        setOutput(result);
      }
    `}}class gB{constructor(t,e){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.variableNames=e.map((r,i)=>`T${i}`);const s=[];this.variableNames.forEach(r=>{s.push(`vec4 v${r} = get${r}AtOutCoords();`)});const o=this.variableNames.map(r=>`v${r}`).join(" + ");this.userCode=`
      void main() {
        ${s.join(`
        `)}

        vec4 result = ${o};
        setOutput(result);
      }
    `}}function Gc(n){const{inputs:t,backend:e}=n,s=t;if(s.length===1)return cn({inputs:{x:s[0]},backend:e});if(s.length>q().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER")){const l=Math.floor(s.length/2),c=Gc({inputs:s.slice(0,l),backend:e}),u=Gc({inputs:s.slice(l),backend:e});return Gc({inputs:[c,u],backend:e})}const o=s.map(l=>l.dtype).reduce((l,c)=>sn(l,c)),r=s.map(l=>l.shape),a=q().getBool("WEBGL_PACK")?new gB(s[0].shape,r):new mB(s[0].shape,r);return e.runWebGLProgram(a,s,o)}const xB={kernelName:du,backendName:"webgl",kernelFunc:Gc};function bB(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,keepDims:i}=s,a=o.shape.length,l=vt(r,o.shape);let c=l;const u=Jt(c,a);let h=o;u!=null&&(h=qe({inputs:{x:o},backend:e,attrs:{perm:u}}),c=ie(c.length,a)),Ne("all",c,a);const[d,p]=$e(h.shape,c),f=K(p),m=it({inputs:{x:h},backend:e,attrs:{shape:[-1,f]}}),g=Mo(m,m.dtype,"all",e);let x;if(i){const b=he(d,l);x=it({inputs:{x:g},backend:e,attrs:{shape:b}})}else x=it({inputs:{x:g},backend:e,attrs:{shape:d}});return e.disposeIntermediateTensorInfo(m),e.disposeIntermediateTensorInfo(g),u!=null&&e.disposeIntermediateTensorInfo(h),x}const yB={kernelName:pu,backendName:"webgl",kernelFunc:bB};function wB(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,keepDims:i}=s,a=o.shape.length,l=vt(r,o.shape);let c=l;const u=Jt(c,a);let h=o;u!=null&&(h=qe({inputs:{x:o},backend:e,attrs:{perm:u}}),c=ie(c.length,a)),Ne("any",c,a);const[d,p]=$e(h.shape,c),f=K(p),m=it({inputs:{x:h},backend:e,attrs:{shape:[-1,f]}}),g=Mo(m,m.dtype,"any",e);let x;if(i){const b=he(d,l);x=it({inputs:{x:g},backend:e,attrs:{shape:b}})}else x=it({inputs:{x:g},backend:e,attrs:{shape:d}});return e.disposeIntermediateTensorInfo(m),e.disposeIntermediateTensorInfo(g),u!=null&&e.disposeIntermediateTensorInfo(h),x}const CB={kernelName:fu,backendName:"webgl",kernelFunc:wB};class $B{constructor(t,e,s){this.variableNames=["A"];const{windowSize:o,batchSize:r,outSize:i}=t;s||this.variableNames.push("bestIndicesA"),this.outputShape=[r,i];const a=e==="max"?">":"<",l=s?"inOffset + i;":"round(getBestIndicesA(batch, inOffset + i));";this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${o};

        int bestIndex = inOffset;
        float bestValue = getA(batch, bestIndex);

        for (int i = 0; i < ${o}; i++) {
          int inIdx = ${l};
          float candidate = getA(batch, inIdx);
          if (candidate ${a} bestValue) {
            bestValue = candidate;
            bestIndex = inIdx;
          }
        }
        setOutput(float(bestIndex));
      }
    `}}class IB{constructor(t,e,s,o){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,T(t.length>2,()=>`Packed arg${s.charAt(0).toUpperCase()+s.slice(1)} supports only inputs with rank above 2.`);const r=t[t.length-1],i=Math.ceil(r/e);this.outputShape=t.slice(0,-1),i>1&&this.outputShape.push(i),o||this.variableNames.push("bestIndicesA");const a=this.outputShape,l=a.length,c=Ut(l),u=He("coords",l);let h,d;if(i===1){d=l+1;const N=Ut(d);h=`
        ${N} sourceLocR = ${N}(${u.join()}, 0);
        ++${u[l-1]};
        ${N} sourceLocG = ${N}(${u.join()}, 0);
        ++${u[l-2]};
        ${N} sourceLocA = ${N}(${u.join()}, 0);
        --${u[l-1]};
        ${N} sourceLocB = ${N}(${u.join()}, 0);
        --${u[l-2]};`}else d=l,h=`
        ${c} sourceLocR = coords;
        ++${u[l-1]};
        ${c} sourceLocG = coords;
        ++${u[l-2]};
        ${c} sourceLocA = coords;
        --${u[l-1]};
        ${c} sourceLocB = coords;
        --${u[l-2]};`;const p=["x","y","z","w","u","v"].slice(0,d),f="."+p[d-1],m=p.map(N=>"int "+N),g=He("sourceLocR",d-1).concat("inIdx.r"),x=He("sourceLocG",d-1).concat("inIdx.g"),b=He("sourceLocB",d-1).concat("inIdx.b"),w=He("sourceLocA",d-1).concat("inIdx.a"),y=s==="max"?"greaterThan":"lessThan",C=o?"":`
          inIdx = round(vec4(getBestIndicesAChannel(${g.join()}),
                             getBestIndicesAChannel(${x.join()}),
                             getBestIndicesAChannel(${b.join()}),
                             getBestIndicesAChannel(${w.join()})));`,I=`vec4(
            getAChannel(${g.join()}),
            hasNextCol ? getAChannel(${x.join()}) : 0.,
            hasNextRow ? getAChannel(${b.join()}) : 0.,
            hasNextRow && hasNextCol ? getAChannel(${w.join()}) : 0.)`,v=o?"":`
      float getBestIndicesAChannel(${m.join()}) {
        return getChannel(getBestIndicesA(${p.join()}),
                                          vec2(${p.slice(-2).join()}));
      }`;this.userCode=`
      float getAChannel(${m.join()}) {
        return getChannel(getA(${p.join()}),
                               vec2(${p.slice(-2).join()}));
      }
      ${v}
      void main() {
        ${c} coords = getOutputCoords();
        bool hasNextCol = ${u[l-1]} < ${a[l-1]-1};
        bool hasNextRow = ${u[l-2]} < ${a[l-2]-1};
        ${h}
        ivec4 srcIdx = ivec4(sourceLocR${f}, sourceLocG${f},
          sourceLocB${f}, sourceLocA${f}) * ${e};
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = ${I};

        for (int i = 0; i < ${e}; i++) {
          inIdx = srcIdx;
          ${C}
          vec4 candidate = ${I};
          bvec4 nan = isnan(candidate);
          bvec4 replace = bvec4(
            vec4(${y}(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));

          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,
                           replace.y  ? candidate.y : bestValue.y,
                           replace.z  ? candidate.z : bestValue.z,
                           replace.w  ? candidate.w : bestValue.w);
          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));
          srcIdx++;
        }
        setOutput(bestIndex);
      }
    `}}function Ty(n,t,e,s=null){let o=t.shape[0],r=t.shape[1];s!=null&&(o=s.shape[0],r=s.shape[1]);const i=Ql(r),a={windowSize:i,inSize:r,batchSize:o,outSize:Math.ceil(r/i)},l=new $B(a,e,s==null),c=[t];s!=null&&c.push(s);const u=n.runWebGLProgram(l,c,"int32");if(u.shape[1]===1)return u;const h=Ty(n,t,e,u);return n.disposeIntermediateTensorInfo(u),h}function Ey(n,t,e,s=null){const o=s!=null?s.shape:t.shape,r=o[o.length-1],i=Ql(r),a=new IB(o,i,e,s==null),l=s==null?[t]:[t,s],c=n.runWebGLProgram(a,l,"int32");if(c.shape.length===t.shape.length){const u=Ey(n,t,e,c);return n.disposeIntermediateTensorInfo(c),u}return c}function Ry(n,t,e,s){const o=[e];if(Ne("arg"+s.charAt(0).toUpperCase()+s.slice(1),o,t.shape.length),!q().getBool("WEBGL_PACK_REDUCE")||t.shape.length<=2){const r=[],i=n.texData.get(t.dataId),a=i!==null&&i.isPacked;let l=t;a&&(l=n.unpackTensor(t),r.push(l));const[c,u]=$e(l.shape,o),h=K(u),d=it({inputs:{x:l},backend:n,attrs:{shape:[-1,h]}});r.push(d);const p=Ty(n,d,s);r.push(p);const f=it({inputs:{x:p},backend:n,attrs:{shape:c}});return r.forEach(m=>n.disposeIntermediateTensorInfo(m)),f}return Ey(n,t,s)}function vB(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r}=s;let i=vt(r,o.shape);const a=Jt(i,o.shape.length);let l=o;const c=[];a!=null&&(l=qe({inputs:{x:o},backend:e,attrs:{perm:a}}),c.push(l),i=ie(i.length,l.shape.length)),Ne("argMax",[i[0]],l.shape.length);const u=Ry(e,l,i[0],"max");return c.forEach(h=>e.disposeIntermediateTensorInfo(h)),u}const kB={kernelName:ka,backendName:"webgl",kernelFunc:vB};function SB(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r}=s;let i=vt(r,o.shape);const a=Jt(i,o.shape.length);let l=o;const c=[];a!=null&&(l=qe({inputs:{x:o},backend:e,attrs:{perm:a}}),c.push(l),i=ie(i.length,l.shape.length)),Ne("argMin",[i[0]],l.shape.length);const u=Ry(e,l,i[0],"min");return c.forEach(h=>e.disposeIntermediateTensorInfo(h)),u}const NB={kernelName:Sa,backendName:"webgl",kernelFunc:SB};const TB=Dn+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`,EB=_t({opSnippet:TB}),RB={kernelName:Rr,backendName:"webgl",kernelFunc:EB};const AB=Dn+"return log(x + sqrt(x * x + 1.0));",DB=_t({opSnippet:AB}),FB={kernelName:Ar,backendName:"webgl",kernelFunc:DB};const _B=Dn+`
  return atan(x);
`,OB=_t({opSnippet:_B}),MB={kernelName:Dr,backendName:"webgl",kernelFunc:OB};const LB=Tp+`
  return atan(a, b);
`,PB=`
  vec4 result = atan(a, b);
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+Oo+`
  return result;
`,BB=Ee({opSnippet:LB,packedOpSnippet:PB}),zB={kernelName:_r,backendName:"webgl",kernelFunc:BB};const VB=Dn+`
  if ((x < -1.0) || (x > 1.0)) return NAN;
return (log(1.0 + x) - log(1.0 - x)) / 2.0;`,WB=_t({opSnippet:VB}),UB={kernelName:Fr,backendName:"webgl",kernelFunc:WB};class da{constructor(t,e,s,o=!1,r=!1){if(this.variableNames=["x"],e==="avg"&&s)throw new Error("Cannot compute positions for average pool.");const i=t.filterWidth,a=t.strideHeight,l=t.strideWidth,c=t.dilationHeight,u=t.dilationWidth,h=t.effectiveFilterHeight,d=t.effectiveFilterWidth,p=t.padInfo.top,f=t.padInfo.left;this.outputShape=t.outShape;const m=e==="avg",g=`((batch  * ${t.inHeight} + xR) * ${t.inWidth} + xC) * ${t.inChannels} + d`,x=`(xR * ${t.inWidth} + xC) * ${t.inChannels} + d`;let b="0.0";if(m||(b="-1.0 / 1e-20"),s){this.userCode=`
        const ivec2 strides = ivec2(${a}, ${l});
        const ivec2 pads = ivec2(${p}, ${f});

        void main() {
          ivec4 coords = getOutputCoords();
          int batch = coords[0];
          int d = coords[3];

          ivec2 xRCCorner = coords.yz * strides - pads;
          int xRCorner = xRCCorner.x;
          int xCCorner = xRCCorner.y;

          // max/min x(?, ?, d) to get y(yR, yC, d).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;
          float avgValue = 0.0;

          for (int wR = 0; wR < ${h};
              wR += ${c}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${t.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${d};
                wC += ${u}) {
              int xC = xCCorner + wC;

              if (xC < 0 || xC >= ${t.inWidth}) {
                continue;
              }

              float value = getX(batch, xR, xC, d);

              // If a min / max value has already been found, use it. If not,
              // use the current value.
              float currMinMaxValue = mix(
                  value, minMaxValue, minMaxValueFound);
              if (value >= currMinMaxValue) {
                minMaxValue = value;
                minMaxValueFound = 1.0;
                minMaxPosition = ${o?r?g:x:`wR * ${d} + wC`};
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;return}const w="max";let y=`${e}(${e}(${e}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;e==="avg"&&(y="avgValue / max(count, 1.0)");const C=Math.floor(i/4)*4,I=i%4,v=`
      if (${m}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = ${w}(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec2 strides = ivec2(${a}, ${l});
      const ivec2 pads = ivec2(${p}, ${f});
      const float initializationValue = ${b};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xR, int xC, int d) {
        if (xC < 0 || xC >= ${t.inWidth}) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xR, xC, d);
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d = coords[3];

        ivec2 xRCCorner = coords.yz * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // max/min x(?, ?, d) to get y(yR, yC, d).
        // ? = to be determined
        vec4 minMaxValue = vec4(${b});
        float avgValue = 0.0;
        count = 0.0;

        for (int wR = 0; wR < ${h};
            wR += ${c}) {
          int xR = xRCorner + wR;

          if (xR < 0 || xR >= ${t.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${C}; wC += 4) {
            int xC = xCCorner + wC * ${u};

            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${u}, d),
              getValue(batch, xR, xC + 2 * ${u}, d),
              getValue(batch, xR, xC + 3 * ${u}, d)
            );

            ${v}
          }

          int xC = xCCorner + ${C};
          if (${I===1}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              initializationValue,
              initializationValue,
              initializationValue
            );

            ${v}
          } else if (${I===2}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${u}, d),
              initializationValue,
              initializationValue
            );

            ${v}
          } else if (${I===3}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${u}, d),
              getValue(batch, xR, xC + 2 * ${u}, d),
              initializationValue
            );

            ${v}
          }
        }
        setOutput(${y});
      }
    `}}class Rp{constructor(t,e,s,o=!1,r=!1){if(this.variableNames=["x"],e==="avg"&&s)throw new Error("Cannot compute positions for average pool.");const i=t.filterWidth,a=t.strideDepth,l=t.strideHeight,c=t.strideWidth,u=t.dilationDepth,h=t.dilationHeight,d=t.dilationWidth,p=t.effectiveFilterDepth,f=t.effectiveFilterHeight,m=t.effectiveFilterWidth,g=t.padInfo.front,x=t.padInfo.top,b=t.padInfo.left;this.outputShape=t.outShape;const w=e==="avg";let y="0.0";if(w||(y="-1.0 / 1e-20"),s){this.userCode=`
        const ivec3 strides =
            ivec3(${a}, ${l}, ${c});
        const ivec3 pads = ivec3(${g}, ${x}, ${b});

        void main() {
          ivec5 coords = getOutputCoords();
          int batch = coords.x;
          int ch = coords.u;

          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
          int xDCorner = xCorner.x;
          int xRCorner = xCorner.y;
          int xCCorner = xCorner.z;

          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;

          for (int wD = 0; wD < ${p};
              wD += ${u}) {
            int xD = xDCorner + wD;

            if (xD < 0 || xD >= ${t.inDepth}) {
              continue;
            }

            for (int wR = 0; wR < ${f};
                wR += ${h}) {
              int xR = xRCorner + wR;

              if (xR < 0 || xR >= ${t.inHeight}) {
                continue;
              }

              for (int wC = 0; wC < ${m};
                  wC += ${d}) {
                int xC = xCCorner + wC;

                if (xC < 0 || xC >= ${t.inWidth}) {
                  continue;
                }

                float value = getX(batch, xD, xR, xC, ch);

                // If a min / max value has already been found, use it. If not,
                // use the current value.
                float currMinMaxValue = mix(
                    value, minMaxValue, minMaxValueFound);
                if (value >= currMinMaxValue) {
                  minMaxValue = value;
                  minMaxValueFound = 1.0;
                  minMaxPosition = ${o?r?`(((batch * ${t.inDepth} + xD) * ${t.inHeight} + xR) * ${t.inWidth} + xC) * ${t.inChannels} + ch`:`((xD * ${t.inHeight} + xR) * ${t.inWidth} + xC) * ${t.inChannels} + ch`:`wD * ${f} * ${m} +
                      wR * ${m} + wC`};
                }
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;return}const C="max";let I=`${e}(${e}(${e}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;e==="avg"&&(I="avgValue / max(count, 1.0)");const v=Math.floor(i/4)*4,N=i%4,S=`
      if (${w}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = ${C}(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec3 strides =
        ivec3(${a}, ${l}, ${c});
      const ivec3 pads = ivec3(${g}, ${x}, ${b});
      const float initializationValue = ${y};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xD, int xR, int xC, int ch) {
        if (xC < 0 || xC >= ${t.inWidth}) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xD, xR, xC, ch);
      }

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xDCorner = xCorner.x;
        int xRCorner = xCorner.y;
        int xCCorner = xCorner.z;

        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).
        // ? = to be determined
        vec4 minMaxValue = vec4(${y});
        float avgValue = 0.0;
        count = 0.0;

        for (int wD = 0; wD < ${p};
            wD += ${u}) {
          int xD = xDCorner + wD;

          if (xD < 0 || xD >= ${t.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${f};
            wR += ${h}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${t.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${v}; wC += 4) {
              int xC = xCCorner + wC * ${d};

              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${d}, ch),
                getValue(batch, xD, xR, xC + 2 * ${d}, ch),
                getValue(batch, xD, xR, xC + 3 * ${d}, ch)
              );

              ${S}
            }

            int xC = xCCorner + ${v};
            if (${N===1}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                initializationValue,
                initializationValue,
                initializationValue
              );

              ${S}
            } else if (${N===2}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${d}, ch),
                initializationValue,
                initializationValue
              );

              ${S}
            } else if (${N===3}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${d}, ch),
                getValue(batch, xD, xR, xC + 2 * ${d}, ch),
                initializationValue
              );

              ${S}
            }
          }
        }
        setOutput(${I});
      }
    `}}function GB(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t;ca(o,"avgPool");const{filterSize:r,strides:i,pad:a,dimRoundingMode:l}=s,c=1;T(Me(i,c),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${c}'`);const u=In(o.shape,r,i,c,a,l);if(u.filterWidth===1&&u.filterHeight===1&&Pt(u.inShape,u.outShape))return cn({inputs:{x:o},backend:e});const h=new da(u,"avg",!1);return e.runWebGLProgram(h,[o],"float32")}const HB={kernelName:Na,backendName:"webgl",kernelFunc:GB};function qB(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{filterSize:r,strides:i,pad:a,dimRoundingMode:l,dataFormat:c}=s,u=[1,1,1],h=fs(o.shape,r,i,u,a,l,c),d=new Rp(h,"avg",!1);return e.runWebGLProgram(d,[o],"float32")}const XB={kernelName:Ta,backendName:"webgl",kernelFunc:qB};class KB{constructor(t){this.variableNames=["dy"],this.outputShape=t.inShape;const e=t.filterHeight,s=t.filterWidth,o=t.strideHeight,r=t.strideWidth,i=t.dilationHeight,a=t.dilationWidth,l=t.effectiveFilterHeight,c=t.effectiveFilterWidth,u=l-1-t.padInfo.top,h=c-1-t.padInfo.left,d=1/(e*s);this.userCode=`
      const ivec2 pads = ivec2(${u}, ${h});
      const float avgMultiplier = float(${d});

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${l};
            wR += ${i}) {
          float dyR = float(dyRCorner + wR) / ${o}.0;

          if (dyR < 0.0 || dyR >= ${t.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${c};
            wC+= ${a}) {
            float dyC = float(dyCCorner + wC) / ${r}.0;

            if (dyC < 0.0 || dyC >= ${t.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);

            dotProd += dyValue * avgMultiplier;
          }
        }
        setOutput(dotProd);
      }
    `}}class jB{constructor(t){this.variableNames=["dy"],this.outputShape=t.inShape;const e=t.filterDepth,s=t.filterHeight,o=t.filterWidth,r=t.strideDepth,i=t.strideHeight,a=t.strideWidth,l=t.dilationDepth,c=t.dilationHeight,u=t.dilationWidth,h=t.effectiveFilterDepth,d=t.effectiveFilterHeight,p=t.effectiveFilterWidth,f=h-1-t.padInfo.front,m=d-1-t.padInfo.top,g=p-1-t.padInfo.left,x=1/(e*s*o);this.userCode=`
      const ivec3 pads = ivec3(${f}, ${m}, ${g});
      const float avgMultiplier = float(${x});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ${h};
            wD += ${l}) {
          float dyD = float(dyDCorner + wD) / ${r}.0;

          if (dyD < 0.0 || dyD >= ${t.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${d};
              wR += ${c}) {
            float dyR = float(dyRCorner + wR) / ${i}.0;

            if (dyR < 0.0 || dyR >= ${t.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${p};
                wC += ${u}) {
              float dyC = float(dyCCorner + wC) / ${a}.0;

              if (dyC < 0.0 || dyC >= ${t.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);

              dotProd += dyValue * avgMultiplier;
            }
          }
        }
        setOutput(dotProd);
      }
    `}}function YB(n){const{inputs:t,backend:e,attrs:s}=n,{dy:o,input:r}=t,i=r,{filterSize:a,strides:l,pad:c,dimRoundingMode:u}=s,h=[1,1,1],d=fs(i.shape,a,l,h,c,u),p=new jB(d);return e.runWebGLProgram(p,[o],i.dtype)}const ZB={kernelName:gu,backendName:"webgl",kernelFunc:YB};function QB(n){const{inputs:t,backend:e,attrs:s}=n,{dy:o,input:r}=t,i=r;ca([o,r],"avgPoolGrad");const{filterSize:a,strides:l,pad:c}=s,u=In(i.shape,a,l,1,c),h=new KB(u);return e.runWebGLProgram(h,[o],i.dtype)}const JB={kernelName:mu,backendName:"webgl",kernelFunc:QB};function tz(n){const{inputs:t,backend:e,attrs:s}=n,{a:o,b:r}=t,{transposeA:i,transposeB:a}=s;return Uc({a:o,b:r,transposeA:i,transposeB:a,backend:e})}const ez={kernelName:Ea,backendName:"webgl",kernelFunc:tz};class nz{constructor(t,e,s,o,r,i){this.outputShape=[],this.variableNames=["x","mean","variance"],$t(t,e),$t(t,s);let a="0.0";o!=null&&($t(t,o),this.variableNames.push("offset"),a="getOffsetAtOutCoords()");let l="1.0";r!=null&&($t(t,r),this.variableNames.push("scale"),l="getScaleAtOutCoords()"),this.outputShape=t,this.userCode=`
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = ${a};
        float scale = ${l};
        float inv = scale * inversesqrt(variance + float(${i}));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `}}class sz{constructor(t,e,s,o,r,i){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=["x","mean","variance"],$t(t,e),$t(t,s);let a="vec4(0.0)";o!=null&&($t(t,o),this.variableNames.push("offset"),a="getOffsetAtOutCoords()");let l="vec4(1.0)";r!=null&&($t(t,r),this.variableNames.push("scale"),l="getScaleAtOutCoords()"),this.outputShape=t,this.userCode=`
      void main() {
        vec4 offset = ${a};
        vec4 scale = ${l};

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(${i}));

        setOutput((x - mean) * inv + offset);
      }
    `}}const oz={kernelName:Va,backendName:"webgl",kernelFunc:({inputs:n,backend:t,attrs:e})=>{const{x:s,mean:o,variance:r,offset:i,scale:a}=n;T(o.shape.length===r.shape.length,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),T(i==null||o.shape.length===i.shape.length,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),T(a==null||o.shape.length===a.shape.length,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");let{varianceEpsilon:l}=e;l==null&&(l=.001);const c=[s,o,r];let u=null;i!=null&&(u=i.shape,c.push(i));let h=null;a!=null&&(h=a.shape,c.push(a));const d=q().getBool("WEBGL_PACK_NORMALIZATION")?new sz(s.shape,o.shape,r.shape,u,h,l):new nz(s.shape,o.shape,r.shape,u,h,l);return t.runWebGLProgram(d,c,c[0].dtype)}};class rz{constructor(t){this.variableNames=["source"],this.outputShape=t,this.rank=t.length;const e=Ut(this.rank);this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];const s=iz(this.rank);let o;const r=t.map((i,a)=>`sourceLoc.${Ap[a]} = start[${a}] + coords.${Ap[a]};`);o=`
        ${e} sourceLoc;
        ${e} coords = getOutputCoords();
        ${r.join(`
`)}
      `,this.userCode=`
      void main() {
        ${o}
        setOutput(getSource(${s}));
      }
    `}}const Ap=["x","y","z","w","u","v"];function iz(n){if(n===1)return"sourceLoc";if(n<=6)return Ap.slice(0,n).map(t=>"sourceLoc."+t).join(",");throw Error(`Slicing for rank ${n} is not yet supported`)}class az{constructor(t){this.variableNames=["source"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.rank=t.length,this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];const e=Ut(this.rank),s=He("coords",this.rank),o=He("sourceLoc",this.rank),r=this.rank===1?"sourceLoc":`vec2(${o.slice(-2).join()})`,i=`getChannel(getSource(${o.join()}), ${r})`,a=`
      result.x = ${i};
      if (++${s[this.rank-1]} < ${t[this.rank-1]}) {
        ++${o[this.rank-1]};
        result.y = ${i};
        --${o[this.rank-1]};
      }
    `,l=this.rank===1?"":`
      --${s[this.rank-1]};
      if (++${s[this.rank-2]} < ${t[this.rank-2]}) {
        ++${o[this.rank-2]};
        result.z = ${i};
        if (++${s[this.rank-1]} < ${t[this.rank-1]}) {
          ++${o[this.rank-1]};
          result.w = ${i};
        }
      }
    `,c=this.rank<=4?`sourceLoc = coords +
            ${e}(${t.map((u,h)=>`start[${h}]`).join()});`:t.map((u,h)=>`${o[h]} = ${s[h]} + start[${h}];`).join(`
`);this.userCode=`
      void main() {
        ${e} coords = getOutputCoords();
        ${e} sourceLoc;
        ${c}
        vec4 result = vec4(0.);
        ${a}
        ${l}
        setOutput(result);
      }
    `}}function lz(n,t,e,s){const o=s.texData.get(n.dataId),r=s.makeTensorInfo(e,n.dtype),i=s.texData.get(r.dataId);Object.assign(i,o),i.refCount=1,i.shape=e,i.dtype=n.dtype;let a=ig(t,ft(n.shape));o.slice&&(a+=o.slice.flatOffset),i.slice={flatOffset:a,origDataId:o.slice&&o.slice.origDataId||n.dataId};const l=s.dataRefCount.get(i.slice.origDataId)||1;return s.dataRefCount.set(i.slice.origDataId,l+1),r}function wr(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{begin:r,size:i}=s,[a,l]=ed(o,r,i);if(sg(o,a,l),K(l)===0)return e.makeTensorInfo(l,o.dtype,[]);if(e.shouldExecuteOnCPU([o])||o.dtype==="string"){const h=e.texData.get(o.dataId),d=e3(h.values,a,l,o.shape,o.dtype);return e.makeTensorInfo(l,o.dtype,d)}const{isPacked:c}=e.texData.get(o.dataId),u=rg(o.shape,a,l);if(c||!u){const h=q().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new az(l):new rz(l),d=[a];return e.runWebGLProgram(h,[o],o.dtype,d)}return e.uploadToGPU(o.dataId),lz(o,a,l,e)}const cz={kernelName:gl,backendName:"webgl",kernelFunc:wr};const uz={kernelName:Ra,backendName:"webgl",kernelFunc:n=>{const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{blockShape:r,crops:i}=s;T(o.shape.length<=4,()=>"batchToSpaceND for rank > 4 with a WebGL backend not implemented yet");const a=r.reduce((b,w)=>b*w),l=Bi(o.shape,r,a),c=zi(l.length,r.length),u=Vi(o.shape,r,a),h=rd(i,r.length),d=id(u,i,r.length),p=[],f=it({inputs:{x:o},backend:e,attrs:{shape:l}}),m=qe({inputs:{x:f},backend:e,attrs:{perm:c}}),g=it({inputs:{x:m},backend:e,attrs:{shape:u}}),x=wr({inputs:{x:g},backend:e,attrs:{begin:h,size:d}});return p.push(f),p.push(m),p.push(g),p.forEach(b=>e.disposeIntermediateTensorInfo(b)),x}};function hz(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,weights:r}=t,{size:i}=s,a=e.readSync(o.dataId),l=e.readSync(r.dataId),c=ay(a,l,r.dtype,r.shape,i);return e.makeTensorInfo([i],r.dtype,c)}const dz={kernelName:xu,backendName:"webgl",kernelFunc:hz};const pz=`
  int r = int(a.r) & int(b.r);
  int g = int(a.g) & int(b.g);
  int rb = int(a.b) & int(b.b);
  int ra = int(a.a) & int(b.a);
  return vec4(r, g, rb, ra);
`,fz=`
  return float(int(a.r) & int(b.r));
`;function mz(n){const{inputs:t,backend:e}=n,{a:s,b:o}=t,r=q().getBool("WEBGL_PACK_BINARY_OPERATIONS"),i=q().getNumber("WEBGL_VERSION");if(e.shouldExecuteOnCPU([s,o])||i===1){const l=e.texData.get(s.dataId).values,c=e.texData.get(o.dataId).values,[u,h]=kP(s.shape,o.shape,l,c,s.dtype),d=e.makeTensorInfo(h,s.dtype),p=e.texData.get(d.dataId);return p.values=u,d}let a;return r?a=new br(pz,s.shape,o.shape,!1):a=new _o(fz,s.shape,o.shape),e.runWebGLProgram(a,[s,o],s.dtype)}const gz={kernelName:bu,backendName:"webgl",kernelFunc:mz};function xz(n){const{inputs:t,backend:e}=n,{s0:s,s1:o}=t,r=e.readSync(s.dataId),i=e.readSync(o.dataId),a=$t(Array.from(r),Array.from(i));return e.makeTensorInfo([a.length],"int32",Int32Array.from(a))}const bz={kernelName:jp,backendName:"webgl",kernelFunc:xz};const Ay=Ee({opSnippet:"return float(a != b);",cpuKernelImpl:qP,dtype:"bool"}),yz={kernelName:ol,backendName:"webgl",kernelFunc:Ay};function pa(n){const{inputs:t,backend:e}=n,{input:s}=t,o=e.texData.get(s.dataId);return cn({inputs:{x:o.complexTensorInfos.real},backend:e})}const wz={kernelName:Hu,backendName:"webgl",kernelFunc:pa};const Cz="return float(int(x));";function $z(n,t){const e=new us(n.shape,Cz),s=t.runWebGLProgram(e,[n],"int32");return{dataId:s.dataId,shape:s.shape,dtype:s.dtype}}function Dp(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{dtype:r}=s;if(r==="complex64"){if(o.dtype==="complex64")return cn({inputs:{x:o},backend:e});const i=Ie(o.shape),a=Dp({inputs:{x:o},backend:e,attrs:{dtype:"float32"}}),l=Qs({inputs:{real:a,imag:i},backend:e});return i.dispose(),e.disposeIntermediateTensorInfo(a),l}if(o.dtype==="complex64"){const i=pa({inputs:{input:o},backend:e}),a=Dp({inputs:{x:i},backend:e,attrs:{dtype:r}});return e.disposeIntermediateTensorInfo(i),a}if(!Up(o.dtype,r)){const i=cn({inputs:{x:o},backend:e});return{dataId:i.dataId,shape:i.shape,dtype:r}}if(e.shouldExecuteOnCPU([o])){const i=e.texData.get(o.dataId).values,[a,l,c]=SP(i,o.shape,o.dtype,r);return e.makeTensorInfo(a,l,c)}if(r==="int32")return $z(o,e);if(r==="bool"){const i=e.makeTensorInfo([],"bool",_e("bool",1)),l=Ay({inputs:{a:o,b:i},backend:e});return e.disposeIntermediateTensorInfo(i),l}throw new Error(`Error in Cast: failed to cast ${o.dtype} to ${r}`)}const Iz={kernelName:Or,backendName:"webgl",kernelFunc:Dp};const Dy="return ceil(x);",vz=_t({opSnippet:Dy,packedOpSnippet:Dy,cpuKernelImpl:NP}),kz={kernelName:Mr,backendName:"webgl",kernelFunc:vz};class Sz{constructor(t){this.variableNames=["A"],this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=t,this.userCode=`

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `}}class Nz{constructor(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=t,this.userCode=`
      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `}}function Tz(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{clipValueMin:r,clipValueMax:i}=s;let a;q().getBool("WEBGL_PACK_CLIP")?a=new Nz(o.shape):a=new Sz(o.shape);const l=[[r],[i]];return e.runWebGLProgram(a,[o],o.dtype,l)}const Ez={kernelName:Lr,backendName:"webgl",kernelFunc:Tz};class Rz{constructor(t){this.variableNames=["real","imag"],this.outputShape=t,this.userCode=`
      void main() {
        float re = abs(getRealAtOutCoords());
        float im = abs(getImagAtOutCoords());
        float mx = max(re, im);

        // sadly the length function in glsl is not underflow-safe
        // (at least not on Intel GPUs). So the safe solution is
        // to ensure underflow-safety in all cases.
        setOutput(
          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))
        );
      }
    `}}function Fy(n,t){return{dataId:t.dataId,dtype:t.dtype,shape:n.shape}}function Az(n){const{inputs:t,backend:e}=n,{x:s}=t,o=e.texData.get(s.dataId),r=new Rz(s.shape),i=[Fy(s,o.complexTensorInfos.real),Fy(s,o.complexTensorInfos.imag)];return e.runWebGLProgram(r,i,i[0].dtype)}const Dz={kernelName:Aa,backendName:"webgl",kernelFunc:Az};class Fz{constructor(t){this.outputShape=[],this.outputShape=es(t,1),this.variableNames=t.map((i,a)=>`T${a}`);const e=new Array(t.length-1);e[0]=t[0][1];for(let i=1;i<e.length;i++)e[i]=e[i-1]+t[i][1];const s=[`if (yC < ${e[0]}) setOutput(getT0(yR, yC));`];for(let i=1;i<e.length;i++){const a=e[i-1];s.push(`else if (yC < ${e[i]}) setOutput(getT${i}(yR, yC-${a}));`)}const o=e.length,r=e[e.length-1];s.push(`else setOutput(getT${o}(yR, yC-${r}));`),this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        ${s.join(`
        `)}
      }
    `}}class _z{constructor(t,e){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=es(t,e);const s=this.outputShape,o=s.length,r=Ut(o),i=He("coords",o),a=["x","y","z","w","u","v"].slice(0,o);this.variableNames=t.map((m,g)=>`T${g}`);const l=new Array(t.length-1);l[0]=t[0][e];for(let m=1;m<l.length;m++)l[m]=l[m-1]+t[m][e];const c=a[e],u=a.slice(-2),h=a.join();let d=`if (${c} < ${l[0]}) {
        return getChannel(
            getT0(${h}), vec2(${u.join()}));
        }`;for(let m=1;m<l.length;m++){const g=l[m-1];d+=`
        if (${c} < ${l[m]}  && ${c} >= ${l[m-1]}) {
          return getChannel(
            getT${m}(${Hc(a,c,g)}),
            vec2(${Hc(u,c,g)}));
        }`}const p=l.length,f=l[l.length-1];d+=`
        return getChannel(
          getT${p}(${Hc(a,c,f)}),
          vec2(${Hc(u,c,f)}));`,this.userCode=`
      float getValue(${a.map(m=>"int "+m)}) {
        ${d}
      }

      void main() {
        ${r} coords = getOutputCoords();
        vec4 result = vec4(getValue(${i}), 0., 0., 0.);

        ${i[o-1]} = ${i[o-1]} + 1;
        if (${i[o-1]} < ${s[o-1]}) {
          result.g = getValue(${i});
        }

        ${i[o-2]} = ${i[o-2]} + 1;
        if (${i[o-2]} < ${s[o-2]}) {
          result.a = getValue(${i});
        }

        ${i[o-1]} = ${i[o-1]} - 1;
        if (${i[o-2]} < ${s[o-2]} &&
            ${i[o-1]} < ${s[o-1]}) {
          result.b = getValue(${i});
        }
        setOutput(result);
      }
    `}}function Hc(n,t,e){const s=n.indexOf(t);return n.map((r,i)=>i===s?`${r} - ${e}`:r).join()}function qc(n){const{inputs:t,backend:e}=n,{input:s}=t,o=e.texData.get(s.dataId);return cn({inputs:{x:o.complexTensorInfos.imag},backend:e})}const Oz={kernelName:Lu,backendName:"webgl",kernelFunc:qc};function fa(n,t,e){const s=n[0].dtype;if(s==="complex64"){const p=n.map(b=>pa({inputs:{input:b},backend:e})),f=n.map(b=>qc({inputs:{input:b},backend:e})),m=fa(p,t,e),g=fa(f,t,e),x=Qs({inputs:{real:m,imag:g},backend:e});return p.forEach(b=>e.disposeIntermediateTensorInfo(b)),f.forEach(b=>e.disposeIntermediateTensorInfo(b)),e.disposeIntermediateTensorInfo(m),e.disposeIntermediateTensorInfo(g),x}let o=e.shouldExecuteOnCPU(n);if(s==="string"&&(o=!0),o){const p=n.map(y=>{const I=[-1,K(y.shape.slice(t))];return it({inputs:{x:y},backend:e,attrs:{shape:I}})}),f=p.map(y=>({vals:e.readSync(y.dataId),shape:y.shape})),m=es(p.map(y=>y.shape),1),g=p[0].shape[0]===1,x=TP(f,m,s,g),b=es(n.map(y=>y.shape),t),w=e.makeTensorInfo(b,s,x);return p.forEach(y=>e.disposeIntermediateTensorInfo(y)),w}const r=n.filter(p=>K(p.shape)>0),i=q().getBool("WEBGL_PACK_ARRAY_OPERATIONS")&&r[0].shape.length>1;if(r.length===1){const p=i?new us(n[0].shape,Ys):new Zs(n[0].shape,Ys);return e.runWebGLProgram(p,n,s)}const a=q().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER");if(r.length>a){const p=[];for(let m=0;m<r.length;m+=a){const g=r.slice(m,m+a);p.push(fa(g,t,e))}const f=fa(p,t,e);for(const m of p)e.disposeIntermediateTensorInfo(m);return f}if(i){const p=new _z(r.map(f=>f.shape),t);return e.runWebGLProgram(p,r,s)}const{tensors2D:l,outShape:c}=Mz(r,t,e),u=new Fz(l.map(p=>p.shape)),h=e.runWebGLProgram(u,l,s);l.forEach(p=>e.disposeIntermediateTensorInfo(p));const d=it({inputs:{x:h},attrs:{shape:c},backend:e});return e.disposeIntermediateTensorInfo(h),d}function Mz(n,t,e){const s=es(n.map(r=>r.shape),t);return{tensors2D:n.map(r=>it({inputs:{x:r},attrs:{shape:[-1,K(r.shape.slice(t))]},backend:e})),outShape:s}}function _y(n){const{inputs:t,backend:e,attrs:s}=n,{axis:o}=s,r=vt(o,t[0].shape)[0],i=t.map(c=>c.shape);nd(i,r);const a=es(t.map(c=>c.shape),r);if(K(a)===0)return e.makeTensorInfo(a,t[0].dtype,[]);const l=t.filter(c=>K(c.shape)>0);return l.length===1?cn({inputs:{x:l[0]},backend:e}):fa(l,r,e)}const Lz={kernelName:Da,backendName:"webgl",kernelFunc:_y};class Oy{constructor(t,e=!1,s=null,o=!1,r=!1){this.variableNames=["x","W"],this.outputShape=t.outShape;const i=t.padInfo.top,a=t.padInfo.left,l=t.strideHeight,c=t.strideWidth,u=t.dilationHeight,h=t.dilationWidth,d=t.filterHeight,p=t.filterWidth,f=Math.floor(t.inChannels/4)*4,m=t.inChannels%4,g=t.dataFormat==="channelsLast",x=g?1:2,b=g?2:3,w=g?3:1;let y="",C="";s&&(o?y=`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${s}
        }`:r?y=`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${s}
        }`:y=`
          float activation(float x) {
            ${s}
          }
        `,C="result = activation(result);");const I=e?"result += getBiasAtOutCoords();":"";e&&this.variableNames.push("bias"),o&&this.variableNames.push("preluActivationWeights"),r&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${y}

      const ivec2 strides = ivec2(${l}, ${c});
      const ivec2 pads = ivec2(${i}, ${a});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d2 = coords[${w}];

        ivec2 xRCCorner =
            ivec2(coords[${x}], coords[${b}]) * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${d}; wR++) {
          int xR = xRCorner + wR * ${u};

          if (xR < 0 || xR >= ${t.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${p}; wC++) {
            int xC = xCCorner + wC * ${h};

            if (xC < 0 || xC >= ${t.inWidth}) {
              continue;
            }

            for (int d1 = 0; d1 < ${f}; d1 += 4) {
              vec4 wValues = vec4(
                getW(wR, wC, d1, d2),
                getW(wR, wC, d1 + 1, d2),
                getW(wR, wC, d1 + 2, d2),
                getW(wR, wC, d1 + 3, d2)
              );

              if (${g}) {
                vec4 xValues = vec4(
                  getX(batch, xR, xC, d1),
                  getX(batch, xR, xC, d1 + 1),
                  getX(batch, xR, xC, d1 + 2),
                  getX(batch, xR, xC, d1 + 3)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec4 xValues = vec4(
                  getX(batch, d1, xR, xC),
                  getX(batch, d1 + 1, xR, xC),
                  getX(batch, d1 + 2, xR, xC),
                  getX(batch, d1 + 3, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }
            }

            if (${m===1}) {

              if (${g}) {
                dotProd +=
                    getX(batch, xR, xC, ${f}) *
                    getW(wR, wC, ${f}, d2);
              } else {
                dotProd +=
                    getX(batch, ${f}, xR, xC) *
                    getW(wR, wC, ${f}, d2);
              }

            } else if (${m===2}) {
              vec2 wValues = vec2(
                getW(wR, wC, ${f}, d2),
                getW(wR, wC, ${f} + 1, d2)
              );

              if (${g}) {
                vec2 xValues = vec2(
                  getX(batch, xR, xC, ${f}),
                  getX(batch, xR, xC, ${f} + 1)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec2 xValues = vec2(
                  getX(batch, ${f}, xR, xC),
                  getX(batch, ${f} + 1, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            } else if (${m===3}) {
              vec3 wValues = vec3(
                getW(wR, wC, ${f}, d2),
                getW(wR, wC, ${f} + 1, d2),
                getW(wR, wC, ${f} + 2, d2)
              );

              if (${g}) {
                vec3 xValues = vec3(
                  getX(batch, xR, xC, ${f}),
                  getX(batch, xR, xC, ${f} + 1),
                  getX(batch, xR, xC, ${f} + 2)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec3 xValues = vec3(
                  getX(batch, ${f}, xR, xC),
                  getX(batch, ${f} + 1, xR, xC),
                  getX(batch, ${f} + 2, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            }
          }
        }

        float result = dotProd;
        ${I}
        ${C}
        setOutput(result);
      }
    `}}class Pz{constructor(t){this.variableNames=["x","W"],this.outputShape=t.outShape;const e=t.padInfo.front,s=t.padInfo.top,o=t.padInfo.left,r=t.strideDepth,i=t.strideHeight,a=t.strideWidth,l=t.dilationDepth,c=t.dilationHeight,u=t.dilationWidth,h=t.filterDepth,d=t.filterHeight,p=t.filterWidth,f=Math.floor(t.inChannels/4)*4,m=t.inChannels%4;this.userCode=`
      const ivec3 strides = ivec3(${r}, ${i}, ${a});
      const ivec3 pads = ivec3(${e}, ${s}, ${o});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d2 = coords.u;

        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xFCorner = xFRCCorner.x;
        int xRCorner = xFRCCorner.y;
        int xCCorner = xFRCCorner.z;

        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get
        // y(yF, yR, yC, d2). ? = to be determined. : = across all
        // values in that axis.
        float dotProd = 0.0;
        for (int wF = 0; wF < ${h}; wF++) {
          int xF = xFCorner + wF * ${l};

          if (xF < 0 || xF >= ${t.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${d}; wR++) {
            int xR = xRCorner + wR * ${c};

            if (xR < 0 || xR >= ${t.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${p}; wC++) {
              int xC = xCCorner + wC * ${u};

              if (xC < 0 || xC >= ${t.inWidth}) {
                continue;
              }

              for (int d1 = 0; d1 < ${f}; d1 += 4) {
                vec4 xValues = vec4(
                  getX(batch, xF, xR, xC, d1),
                  getX(batch, xF, xR, xC, d1 + 1),
                  getX(batch, xF, xR, xC, d1 + 2),
                  getX(batch, xF, xR, xC, d1 + 3)
                );
                vec4 wValues = vec4(
                  getW(wF, wR, wC, d1, d2),
                  getW(wF, wR, wC, d1 + 1, d2),
                  getW(wF, wR, wC, d1 + 2, d2),
                  getW(wF, wR, wC, d1 + 3, d2)
                );

                dotProd += dot(xValues, wValues);
              }

              if (${m===1}) {
                dotProd +=
                  getX(batch, xF, xR, xC, ${f}) *
                  getW(wF, wR, wC, ${f}, d2);
              } else if (${m===2}) {
                vec2 xValues = vec2(
                  getX(batch, xF, xR, xC, ${f}),
                  getX(batch, xF, xR, xC, ${f} + 1)
                );
                vec2 wValues = vec2(
                  getW(wF, wR, wC, ${f}, d2),
                  getW(wF, wR, wC, ${f} + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (${m===3}) {
                vec3 xValues = vec3(
                  getX(batch, xF, xR, xC, ${f}),
                  getX(batch, xF, xR, xC, ${f} + 1),
                  getX(batch, xF, xR, xC, ${f} + 2)
                );
                vec3 wValues = vec3(
                  getW(wF, wR, wC, ${f}, d2),
                  getW(wF, wR, wC, ${f} + 1, d2),
                  getW(wF, wR, wC, ${f} + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}}class My{constructor(t,e=!1,s=null,o=!1,r=!1){this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=t.outShape,this.enableShapeUniforms=Be(this.outputShape.length);const i=t.padInfo.left,a=t.strideWidth,l=t.dilationWidth,c=t.filterHeight,u=t.filterWidth,h=u;let d=`
       int xR; int xC; int xCOffset;
       vec4 wTexel; vec4 previous; vec4 final;`;for(let g=0;g<u;g++)d+=`
           vec4 xTexelC${g*2};
           int xTexelC${g*2}Ready;
           vec4 xTexelC${g*2+1};
           int xTexelC${g*2+1}Ready;
           vec4 xC${g};`;d+=`
     for (int r = 0; r < ${c}; r++) {
      for (int d1 = 0; d1 < ${t.inChannels}; d1 += 2) {
       `;for(let g=0;g<u;g++)d+=`
           xTexelC${g*2} = vec4(0.0);
           xTexelC${g*2}Ready = 0;
           xTexelC${g*2+1} = vec4(0.0);
           xTexelC${g*2+1}Ready = 0;
           xC${g} = vec4(0.0);`;d+=`
         xR = xRCorner + r * dilations[0];
         if (xR >=0 && xR < inDims[0]) {
       `;for(let g=0;g<(h+1)/2;g++){const x=g*2;if(d+=`
           xC = xCCorner + ${x*l};
           `,a===1){if(x<u&&(i%2===1?(d+=`
                 xCOffset = xC + 1;
                 if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${x}Ready == 0) {
                   xTexelC${x} = getX(batch, xR, xCOffset, d1);

                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${x}.zw = vec2(0.0);
                   }
                   xTexelC${x}Ready = 1;
                 }
               `,l===1&&x>0?d+=`
                 xC${x} = vec4(xTexelC${x-2}.zw, xTexelC${x}.xy);
                 `:d+=`
                   xCOffset = xC + 1 - 2;

                   if (xCOffset >= 0 && xCOffset < inDims[1]) {
                     previous = getX(batch, xR, xCOffset, d1);

                     // Need to manually clear unused channels in case
                     // we're reading from recycled texture.
                     if (xCOffset + 1 >= inDims[1]) {
                       previous.zw = vec2(0.0);
                     }

                     xC${x} = vec4(previous.zw, xTexelC${x}.xy);
                   } else {
                     xC${x} = vec4(0.0, 0.0, xTexelC${x}.xy);
                   }
                   `):d+=`
                 if (xC >= 0 && xC < inDims[1] && xTexelC${x}Ready == 0) {
                   xTexelC${x} = getX(batch, xR, xC, d1);
                   if (xC + 1 >= inDims[1]) {
                     xTexelC${x}.zw = vec2(0.0);
                   }
                   xTexelC${x}Ready = 1;
                 }

                 xC${x} = xTexelC${x};
                 `,x+1<u)){const b=i%2===0?On(l):l;l%2===0&&i%2===1||l%2!==0&&i%2!==1?(d+=`
                   xCOffset = xC + imod(pads[1], 2) + ${b};

                   if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${x+1}Ready == 0) {
                     xTexelC${x+1} = getX(batch, xR, xCOffset, d1);

                     // Need to manually clear unused channels in case
                     // we're reading from recycled texture.
                     if (xCOffset + 1 >= inDims[1]) {
                       xTexelC${x+1}.zw = vec2(0.0);
                     }
                     xTexelC${x+1}Ready = 1;
                   }
                   `,l>1?d+=`
                     xCOffset -= 2;
                     if (xCOffset >= 0 && xCOffset < inDims[1]) {
                      previous = getX(batch, xR, xCOffset, d1);
                      xC${x+1} = vec4(previous.zw, xTexelC${x+1}.xy);
                     } else {
                      xC${x+1} = vec4(0.0, 0.0, xTexelC${x+1}.xy);
                     }
                     `:d+=`
                     xC${x+1} = vec4(xTexelC${x}.zw, xTexelC${x+1}.xy);
                     `):b===1?d+=`
                     xC${x+1} = xTexelC${x};
                     `:d+=`
                     xCOffset = xC + ${b};

                     if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${x+1}Ready == 0) {
                       xTexelC${x+1} = getX(batch, xR, xCOffset, d1);
                       if (xCOffset + 1 >= inDims[1]) {
                         xTexelC${x+1}.zw = vec2(0.0);
                       }
                       xTexelC${x+1}Ready = 1;
                     }

                     xC${x+1} = xTexelC${x+1};
                     `}}else x<u&&(i%2===1?(d+=`
                 xCOffset = xC + 1 - strides[1];
                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${x}Ready == 0) {
                   xTexelC${x} = getX(batch, xR, xCOffset, d1);
                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${x}.zw = vec2(0.0);
                   }
                   xTexelC${x}Ready = 1;
                 }

                 if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${x+1}Ready == 0) {
                   xTexelC${x+1} = getX(batch, xR, xC + 1, d1);
                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xC + 2 >= inDims[1]) {
                     xTexelC${x+1}.zw = vec2(0.0);
                   }
                   xTexelC${x+1}Ready = 1;
                 }

                 xC${x} = vec4(xTexelC${x}.zw, xTexelC${x+1}.zw);
               `,x+1<u&&(d+=`
                   final = vec4(0.0);
                   xCOffset = xC + 1 + strides[1];
                   if(xCOffset >= 0 && xCOffset < inDims[1]) {
                     final = getX(batch, xR, xCOffset, d1);
                   }
                   xC${x+1} = vec4(xTexelC${x+1}.xy, final.xy);
                 `)):(d+=`
                 if(xC >= 0 && xC < inDims[1] && xTexelC${x}Ready == 0) {
                   xTexelC${x} = getX(batch, xR, xC, d1);
                   if (xC + 1 >= inDims[1]) {
                     xTexelC${x}.zw = vec2(0.0);
                   }
                   xTexelC${x}Ready = 1;
                 }

                 xCOffset = xC + strides[1];
                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${x+1}Ready == 0) {
                   xTexelC${x+1} = getX(batch, xR, xCOffset, d1);
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${x+1}.zw = vec2(0.);
                   }
                   xTexelC${x+1}Ready = 1;
                 }

                 xC${x} = vec4(
                   xTexelC${x}.xy, xTexelC${x+1}.xy);
               `,x+1<u&&(d+=`
                   xC${x+1} = vec4(xTexelC${x}.zw, xTexelC${x+1}.zw);
                 `)));x<u&&(d+=`
             wTexel = getW(r, ${x}, d1, d2);
             dotProd += xC${x}.xxzz * vec4(wTexel.xy, wTexel.xy);
             if(d1 + 1 < ${t.inChannels}) {
               dotProd += xC${x}.yyww * vec4(wTexel.zw, wTexel.zw);
             }
           `,x+1<u&&(d+=`
               wTexel = getW(r, ${x+1}, d1, d2);
               dotProd += xC${x+1}.xxzz * vec4(wTexel.xy, wTexel.xy);
               if(d1 + 1 < ${t.inChannels}) {
                 dotProd += xC${x+1}.yyww * vec4(wTexel.zw, wTexel.zw);
               }
             `))}d+=`
     }
   `,d+=`
     }
   `,d+=`
     }
   `;let p="",f="";s&&(o?p=`vec4 activation(vec4 a) {
           vec4 b = getPreluActivationWeightsAtOutCoords();
           ${s}
         }`:r?p=`vec4 activation(vec4 a) {
           vec4 b = getLeakyreluAlphaAtOutCoords();
           ${s}
         }`:p=`vec4 activation(vec4 x) {
           ${s}
         }`,f="result = activation(result);");const m=e?"result += getBiasAtOutCoords();":"";e&&this.variableNames.push("bias"),o&&this.variableNames.push("preluActivationWeights"),r&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
       ${p}

       void main() {
         ivec4 coords = getOutputCoords();
         int batch = coords.x;
         ivec2 xRCCorner = coords.yz * strides - pads;
         int d2 = coords.w;
         int xRCorner = xRCCorner.x;
         int xCCorner = xRCCorner.y;

         //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.
         vec4 dotProd = vec4(0.000000000000001);

         ${d}

         vec4 result = dotProd - vec4(0.000000000000001);
         ${m}
         ${f}
         setOutput(result);
       }
     `}}class Bz{constructor(t,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec4"},{name:"pad",type:"ivec2"},{name:"stride",type:"ivec2"},{name:"dilation",type:"ivec2"},{name:"inChannels",type:"int"},{name:"itemsPerBlockRow",type:"int"},{name:"outWidth",type:"int"}],this.outputShape=t,this.enableShapeUniforms=Be(this.outputShape.length);const{dataFormat:s}=e,o=Ge(),r=s==="channelsLast",i=r?1:2,a=r?2:3,l=this.enableShapeUniforms?"if(blockIndex < outShape[2] && pos < outShape[1]) {":`if(blockIndex < ${t[2]} && pos < ${t[1]}) {`;let c="";for(let u=0;u<=1;u++)for(let h=0;h<=1;h++)c+=`
          blockIndex = rc.z + ${h};
          pos = rc.y + ${u};

          ${l}
            offsetY = int(blockIndex / outWidth) * stride[0] - pad[0];
            d0 = offsetY + dilation[0] * (pos / itemsPerBlockRow);

            if(d0 < inputShape[${i}] && d0 >= 0) {
              // Use custom imod instead mod. On Intel GPU, mod may generate
              // unexpected value.
              // https://github.com/tensorflow/tfjs/issues/5447
              offsetX = imod(blockIndex, outWidth) * stride[1] - pad[1];
              d1 = offsetX + dilation[1] * (imod(pos, itemsPerBlockRow) /
                  inChannels);

              if(d1 < inputShape[${a}] && d1 >= 0) {

                ch = imod(pos, inChannels);

                if (${r}) {
                  innerDims = vec2(d1, ch);
                  result[${u*2+h}] = getChannel(
                    getA(rc.x, d0, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                } else {
                  innerDims = vec2(d0, d1);
                  result[${u*2+h}] = getChannel(
                    getA(rc.x, ch, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                }
              }
            }
          }
        `;this.userCode=`
      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0);

        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
        vec2 innerDims;

        ${c}

        ${o.output} = result;
      }
    `}}function Xc(n,t){const e=n.length;return e>=3?t?[...n.slice(0,-3),n[e-3]*n[e-2],n[e-1]]:[...n.slice(0,-3),n[e-3],n[e-2]*n[e-1]]:!t&&e===1&&n[0]>1?[n[0],1]:null}function Ly({x:n,filter:t,convInfo:e,backend:s,bias:o=null,preluActivationWeights:r=null,leakyreluAlpha:i=0,activation:a=null}){const l=n.shape,c=s.texData.get(n.dataId),u=e.inChannels,h=l[0]*l[1]*l[2],d=e.outChannels,p=e.dataFormat==="channelsLast",f=!1,m=!1;let g;const x=[];if(r!=null){const y=Xc(r.shape,p);y!=null&&(r=it({inputs:{x:r},backend:s,attrs:{shape:y}}),x.push(r))}if(o!=null){const y=Xc(o.shape,p);y!=null&&(o=it({inputs:{x:o},backend:s,attrs:{shape:y}}),x.push(o))}if(!((h===1||d===1)&&u>ky)&&c.isPacked&&p&&c.texture!=null&&l[2]%2!==0&&Pt(c.shape.slice(-3),l.slice(-3))){const y=l[0]*l[1]*(l[2]+1),C={dataId:n.dataId,shape:[1,y,e.inChannels],dtype:n.dtype},I=c.shape;c.shape=c.shape.slice(),c.shape[c.shape.length-2]++,T(Lc(c.shape,C.shape),()=>`packed reshape ${c.shape} to ${C.shape} isn't free`);const v=it({inputs:{x:t},backend:s,attrs:{shape:[1,e.inChannels,e.outChannels]}});x.push(v);const N=Uc({a:C,b:v,backend:s,transposeA:f,transposeB:m,bias:o,activation:a,preluActivationWeights:r,leakyreluAlpha:i}),S=s.texData.get(N.dataId);T(S.isPacked,()=>"batchMatMul result is expected to be packed"),c.shape=I,S.shape=e.outShape,g=cn({inputs:{x:N},backend:s}),g.shape=e.outShape,x.push(N)}else{const y=e.outHeight*e.outWidth,C=it({inputs:{x:n},backend:s,attrs:{shape:p?[e.batchSize,y,e.inChannels]:[e.batchSize,e.inChannels,y]}}),I=it({inputs:{x:t},backend:s,attrs:{shape:[1,e.inChannels,e.outChannels]}}),v=Uc({a:p?C:I,b:p?I:C,transposeA:!p,transposeB:m,backend:s,bias:o,activation:a,preluActivationWeights:r,leakyreluAlpha:i});g=it({inputs:{x:v},backend:s,attrs:{shape:e.outShape}}),x.push(C),x.push(I),x.push(v)}for(const y of x)s.disposeIntermediateTensorInfo(y);return g}function Py({x:n,filter:t,convInfo:e,backend:s,bias:o=null,preluActivationWeights:r=null,leakyreluAlpha:i=0,activation:a=null}){const{filterWidth:l,filterHeight:c,inChannels:u,outWidth:h,outHeight:d,dataFormat:p}=e,f=p==="channelsLast",m=l*c*u,g=d*h,x=[e.batchSize,m,g],b=!0,w=!1,y=[];if(r!=null){const O=Xc(r.shape,f);O!=null&&(r=it({inputs:{x:r},backend:s,attrs:{shape:O}}),y.push(r))}if(o!=null){const O=Xc(o.shape,f);O!=null&&(o=it({inputs:{x:o},backend:s,attrs:{shape:O}}),y.push(o))}const C=it({inputs:{x:t},backend:s,attrs:{shape:[1,m,K(t.shape)/m]}});y.push(C);const I=new Bz(x,e),v=[n.shape,[e.padInfo.top,e.padInfo.left],[e.strideHeight,e.strideWidth],[e.dilationHeight,e.dilationWidth],[e.inChannels],[e.filterWidth*e.inChannels],[e.outWidth]],N=s.runWebGLProgram(I,[n],"float32",v),S=it({inputs:{x:N},backend:s,attrs:{shape:x}});y.push(N),y.push(S);const k=o!=null,$=r!=null,E=a==="leakyrelu",R=a?ha(a,!0):null,A=new wy(f?S.shape:C.shape,f?C.shape:S.shape,f?[e.batchSize,g,e.outChannels]:[e.batchSize,e.outChannels,g],b,w,k,R,$,E),F=f?[S,C]:[C,S];if(o&&F.push(o),$&&F.push(r),E){const O=s.makeTensorInfo([],"float32",Rs(i,"float32"));F.push(O),y.push(O)}const _=s.runWebGLProgram(A,F,"float32"),B=it({inputs:{x:_},backend:s,attrs:{shape:e.outShape}});y.push(_);for(const O of y)s.disposeIntermediateTensorInfo(O);return B}function zz(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,filter:r}=t,{strides:i,pad:a,dataFormat:l,dilations:c,dimRoundingMode:u}=s,h=ms(l),d=Se(o.shape,r.shape,i,c,a,u,!1,h);let p;if(d.filterHeight===1&&d.filterWidth===1&&d.dilationHeight===1&&d.dilationWidth===1&&d.strideHeight===1&&d.strideWidth===1&&(d.padInfo.type==="SAME"||d.padInfo.type==="VALID"))p=Ly({x:o,filter:r,convInfo:d,backend:e});else if(d.strideWidth<=2&&h==="channelsLast"&&q().getBool("WEBGL_EXP_CONV")){const m=new My(d),g=[[d.padInfo.top,d.padInfo.left],[d.strideHeight,d.strideWidth],[d.dilationHeight,d.dilationWidth],[d.inHeight,d.inWidth]];p=e.runWebGLProgram(m,[o,r],"float32",g)}else if(q().getBool("WEBGL_CONV_IM2COL"))p=Py({x:o,filter:r,convInfo:d,backend:e});else{const m=new Oy(d);p=e.runWebGLProgram(m,[o,r],"float32")}const f=it({inputs:{x:p},backend:e,attrs:{shape:d.outShape}});return e.disposeIntermediateTensorInfo(p),f}const Vz={kernelName:Fa,backendName:"webgl",kernelFunc:zz};class Wz{constructor(t){this.variableNames=["x","dy"],this.outputShape=t.filterShape;const e=t.strideHeight,s=t.strideWidth,o=t.padInfo.top,r=t.padInfo.left,i=t.dataFormat==="channelsLast";this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int d2 = coords.w;

        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int b = 0; b < ${t.batchSize}; b++) {
          for (int yR = 0; yR < ${t.outHeight}; yR++) {
            int xR = wR + yR * ${e} - ${o};

            if (xR < 0 || xR >= ${t.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${t.outWidth}; yC++) {
              int xC = wC + yC * ${s} - ${r};

              if (xC < 0 || xC >= ${t.inWidth}) {
                continue;
              }

              ${i?`float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);`:`float dyValue = getDy(b, d2, yR, yC);
              float xValue = getX(b, d1, xR, xC);
              dotProd += (xValue * dyValue);`}
            }
          }
        }
        setOutput(dotProd);
      }
    `}}class Uz{constructor(t){this.variableNames=["dy","W"],this.outputShape=t.inShape;const e=t.filterHeight,s=t.filterWidth,o=t.strideHeight,r=t.strideWidth,i=t.dataFormat==="channelsLast",a=e-1-t.padInfo.top,l=s-1-t.padInfo.left,c=i?1:2,u=i?2:3,h=i?3:1;this.userCode=`
      const ivec2 pads = ivec2(${a}, ${l});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[${h}];

        ivec2 dyCorner = ivec2(coords[${c}], coords[${u}]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${e}; wR++) {
          float dyR = float(dyRCorner + wR) / ${o}.0;

          if (dyR < 0.0 || dyR >= ${t.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${e} - 1 - wR;

          for (int wC = 0; wC < ${s}; wC++) {
            float dyC = float(dyCCorner + wC) / ${r}.0;

            if (dyC < 0.0 || dyC >= ${t.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ${s} - 1 - wC;

            for (int d2 = 0; d2 < ${t.outChannels}; d2++) {

              if (${i}) {
                float xValue = getDy(batch, idyR, idyC, d2);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              } else {
                float xValue = getDy(batch, d2, idyR, idyC);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `}}class Gz{constructor(t){this.variableNames=["x","dy"],this.outputShape=t.filterShape;const e=t.strideDepth,s=t.strideHeight,o=t.strideWidth,r=t.padInfo.front,i=t.padInfo.top,a=t.padInfo.left;this.userCode=`
      void main() {
        ivec5 coords = getOutputCoords();
        int wF = coords.x;
        int wR = coords.y;
        int wC = coords.z;
        int d1 = coords.w;
        int d2 = coords.u;

        float dotProd = 0.0;

        for (int b = 0; b < ${t.batchSize}; b++) {
          for (int yF = 0; yF < ${t.outDepth}; yF++) {
            int xF = wF + yF * ${e} - ${r};

            if (xF < 0 || xF >= ${t.inDepth}) {
              continue;
            }

            for (int yR = 0; yR < ${t.outHeight}; yR++) {
              int xR = wR + yR * ${s} - ${i};

              if (xR < 0 || xR >= ${t.inHeight}) {
                continue;
              }

              for (int yC = 0; yC < ${t.outWidth}; yC++) {
                int xC = wC + yC * ${o} - ${a};

                if (xC < 0 || xC >= ${t.inWidth}) {
                  continue;
                }

                float dyValue = getDy(b, yF, yR, yC, d2);
                float xValue = getX(b, xF, xR, xC, d1);
                dotProd += (xValue * dyValue);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}}class Hz{constructor(t){this.variableNames=["dy","W"],this.outputShape=t.inShape;const e=t.filterDepth,s=t.filterHeight,o=t.filterWidth,r=t.strideDepth,i=t.strideHeight,a=t.strideWidth,l=e-1-t.padInfo.front,c=s-1-t.padInfo.top,u=o-1-t.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(${l}, ${c}, ${u});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.u;


        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyFCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        float dotProd = 0.0;
        for (int wF = 0; wF < ${e}; wF++) {
          float dyF = float(dyFCorner + wF) / ${r}.0;

          if (dyF < 0.0 || dyF >= ${t.outDepth}.0 || fract(dyF) > 0.0) {
            continue;
          }
          int idyF = int(dyF);

          int wFPerm = ${e} - 1 - wF;

          for (int wR = 0; wR < ${s}; wR++) {
            float dyR = float(dyRCorner + wR) / ${i}.0;

            if (dyR < 0.0 || dyR >= ${t.outHeight}.0 ||
              fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            int wRPerm = ${s} - 1 - wR;

            for (int wC = 0; wC < ${o}; wC++) {
              float dyC = float(dyCCorner + wC) / ${a}.0;

              if (dyC < 0.0 || dyC >= ${t.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              int wCPerm = ${o} - 1 - wC;

              for (int d2 = 0; d2 < ${t.outChannels}; d2++) {
                float xValue = getDy(batch, idyF, idyR, idyC, d2);
                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}}function qz(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,dy:r}=t,{strides:i,pad:a,dataFormat:l,dimRoundingMode:c,filterShape:u}=s,h=ms(l),d=Se(o.shape,u,i,1,a,c,!1,h),p=new Wz(d);return e.runWebGLProgram(p,[o,r],"float32")}const Xz={kernelName:wu,backendName:"webgl",kernelFunc:qz};class Kz{constructor(t){this.variableNames=["dy","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"strides",type:"vec2"}],this.outputShape=t.inShape,this.enableShapeUniforms=Be(this.outputShape.length);const e=t.filterHeight,s=t.filterWidth,o=e-1-t.padInfo.top,r=s-1-t.padInfo.left;this.userCode=`
      const ivec2 pads = ivec2(${o}, ${r});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];

        ivec2 dyCorner = ivec2(coords[1], coords[2]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        vec4 result = vec4(0.);
        for (int wR = 0; wR < ${e}; wR++) {
          float dyR = float(dyRCorner + wR) / strides[0];
          if (dyR < 0.0 || dyR >= ${t.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);
          int wRPerm = ${e} - 1 - wR;

          for (int wC = 0; wC < ${s}; wC++) {
            int wCPerm = ${s} - 1 - wC;

            float dyC = float(dyCCorner + wC) / strides[1];
            bool idyCVal = (dyC >= 0.0) && (dyC < ${t.outWidth}.0)
              && (fract(dyC) == 0.0);
            int idyC = int(dyC);

            float dyC2 = float(dyCCorner + wC + 1) / strides[1];
            bool idyCVal2 = (dyC2 >= 0.0) && (dyC2 < ${t.outWidth}.0)
              && (fract(dyC2) == 0.0);
            int idyC2 = int(dyC2);

            if (idyCVal && idyCVal2) {
              for (int d2 = 0; d2 < ${t.outChannels}; d2 += 2) {
                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);
                vec4 dySample = getDy(batch, idyR, idyC, d2);
                vec4 dySample2 = (idyC / 2 == idyC2 / 2) ?
                  dySample : getDy(batch, idyR, idyC2, d2);

                vec2 dyValue = mod(float(idyC), 2.) == 0. ?
                  dySample.xy : dySample.zw;
                result.xy += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));

                dyValue = mod(float(idyC2), 2.) == 0. ?
                  dySample2.xy : dySample2.zw;
                result.zw += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));
              }
            } else if (idyCVal) {
              for (int d2 = 0; d2 < ${t.outChannels}; d2 += 2) {
                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);
                vec4 dySample = getDy(batch, idyR, idyC, d2);
                vec2 dyValue = mod(float(idyC), 2.) == 0. ?
                  dySample.xy : dySample.zw;
                result.xy += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));
              }
            } else if (idyCVal2) {
              for (int d2 = 0; d2 < ${t.outChannels}; d2 += 2) {
                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);
                vec4 dySample = getDy(batch, idyR, idyC2, d2);
                vec2 dyValue = mod(float(idyC2), 2.) == 0. ?
                  dySample.xy : dySample.zw;
                result.zw += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));
              }
            }
          }
        }
        setOutput(result);
      }
    `}}function jz(n){const{inputs:t,backend:e,attrs:s}=n,{dy:o,filter:r}=t,{inputShape:i,strides:a,pad:l,dataFormat:c,dimRoundingMode:u}=s,h=ms(c),d=Se(i,r.shape,a,1,l,u,!1,h);if(q().getBool("WEBGL_PACK_CONV2DTRANSPOSE")&&h==="channelsLast"){const p=[[d.strideHeight,d.strideWidth]],f=new Kz(d);return e.runWebGLProgram(f,[o,r],"float32",p)}else{const p=new Uz(d);return e.runWebGLProgram(p,[o,r],"float32")}}const Yz={kernelName:_a,backendName:"webgl",kernelFunc:jz};function Zz(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,filter:r}=t,{strides:i,pad:a,dilations:l}=s,c=Os(o.shape,r.shape,i,l,a),u=new Pz(c);return e.runWebGLProgram(u,[o,r],"float32")}const Qz={kernelName:Oa,backendName:"webgl",kernelFunc:Zz};function Jz(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,dy:r}=t,{strides:i,pad:a,filterShape:l}=s,c=Os(o.shape,l,i,1,a),u=new Gz(c);return e.runWebGLProgram(u,[o,r],"float32")}const t4={kernelName:Cu,backendName:"webgl",kernelFunc:Jz};function e4(n){const{inputs:t,backend:e,attrs:s}=n,{dy:o,filter:r}=t,{pad:i,strides:a,inputShape:l}=s,c=Os(l,r.shape,a,1,i),u=new Hz(c);return e.runWebGLProgram(u,[o,r],"float32")}const n4={kernelName:$u,backendName:"webgl",kernelFunc:e4};const s4=yr+`
  return cos(x);
`,o4=`
  vec4 result = cos(x);
  bvec4 isNaN = isnan(x);
  ${Oo}
  return result;
`,r4=_t({opSnippet:s4,packedOpSnippet:o4}),i4={kernelName:Pr,backendName:"webgl",kernelFunc:r4};const a4=_t({opSnippet:`
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`}),l4={kernelName:Br,backendName:"webgl",kernelFunc:a4};class c4{constructor(t,e,s,o,r){this.variableNames=["Image","Boxes","BoxInd"],this.outputShape=[];const[i,a,l,c]=t,[u]=e,[h,d]=s;this.outputShape=[u,h,d,c];const p=o==="bilinear"?1:0,[f,m]=[`${a-1}.0`,`${l-1}.0`],[g,x,b]=h>1?[`${(a-1)/(h-1)}`,"(y2-y1) * height_ratio",`y1*${f} + float(y)*(height_scale)`]:["0.0","0.0",`0.5 * (y1+y2) * ${f}`],[w,y,C]=d>1?[`${(l-1)/(d-1)}`,"(x2-x1) * width_ratio",`x1*${m} + float(x)*(width_scale)`]:["0.0","0.0",`0.5 * (x1+x2) * ${m}`];this.userCode=`
      const float height_ratio = float(${g});
      const float width_ratio = float(${w});
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int y = coords[1];
        int x = coords[2];
        int d = coords[3];

        // get box vals
        float y1 = getBoxes(b,0);
        float x1 = getBoxes(b,1);
        float y2 = getBoxes(b,2);
        float x2 = getBoxes(b,3);

        // get image in batch index
        int bInd = round(getBoxInd(b));
        if(bInd < 0 || bInd >= ${i}) {
          return;
        }

        float height_scale = ${x};
        float width_scale = ${y};

        float in_y = ${b};
        if( in_y < 0.0 || in_y > ${f} ) {
          setOutput(float(${r}));
          return;
        }
        float in_x = ${C};
        if( in_x < 0.0 || in_x > ${m} ) {
          setOutput(float(${r}));
          return;
        }

        vec2 sourceFracIndexCR = vec2(in_x,in_y);
        if(${p} == 1) {
          // Compute the four integer indices.
          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);
          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));

          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);
          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);
          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);
          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);

          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);

          float top = topLeft + (topRight - topLeft) * fracCR.x;
          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;
          float newValue = top + (bottom - top) * fracCR.y;
          setOutput(newValue);
        } else {
          // Compute the coordinators of nearest neighbor point.
          ivec2 sourceNearestCR = ivec2(floor(
            sourceFracIndexCR + vec2(0.5,0.5)));
          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);
          setOutput(newValue);
        }
      }
    `}}const u4={kernelName:vu,backendName:"webgl",kernelFunc:n=>{const{inputs:t,backend:e,attrs:s}=n,{image:o,boxes:r,boxInd:i}=t,{cropSize:a,method:l,extrapolationValue:c}=s,u=new c4(o.shape,r.shape,a,l,c);return e.runWebGLProgram(u,[o,r,i],"float32")}};var ma;(function(n){n.Prod="*",n.Sum="+"})(ma||(ma={}));class By{constructor(t,e,s,o){this.op=t,this.outputShape=e,this.variableNames=["x"],this.customUniforms=[{name:"index",type:"float"}];const r=this.outputShape.length,i=this.op===ma.Prod?"1.0":"0.0",a=s?i:`getX(${zy(r,"coords",this.op)})`,l=this.outputShape[this.outputShape.length-1];let c="",u="";s?(c=o?`end != ${l-1}`:"end != 0",u=o?"end + 1":"end - 1"):(c=o?`end + pow2 < ${l}`:"end >= pow2",u=o?"end + pow2":"end - pow2"),this.userCode=`
      void main() {
        ${Ut(r)} coords = getOutputCoords();
        int end = ${Vy(r,"coords",this.op)};
        float val = ${a};
        int pow2 = int(pow(2.0, index));
        if (${c}) {
          int idx = ${u};
          ${Vy(r,"coords",this.op)} = idx;
          val ${this.op}= getX(${zy(r,"coords",this.op)});
        }
        setOutput(val);
      }
    `}}function zy(n,t,e){if(n===1)return`${t}`;if(n===2)return`${t}.x, ${t}.y`;if(n===3)return`${t}.x, ${t}.y, ${t}.z`;if(n===4)return`${t}.x, ${t}.y, ${t}.z, ${t}.w`;throw new Error(`Cumulative ${e} for rank ${n} is not yet supported`)}function Vy(n,t,e){if(n===1)return`${t}`;if(n===2)return`${t}.y`;if(n===3)return`${t}.z`;if(n===4)return`${t}.w`;throw new Error(`Cumulative ${e} for rank ${n} is not yet supported`)}function Wy(n,t,e,s,o,r){const i=t.shape.length,a=Jt([s],i);let l=t;a!=null&&(l=qe({inputs:{x:t},backend:e,attrs:{perm:a}}));const c=ie(1,i)[0];if(c!==i-1)throw new Error(`WebGL cumprod shader expects an inner-most axis=${t.shape.length-1} but got axis=${s}`);const u=l.shape[c];let h=cn({inputs:{x:l},backend:e});for(let d=0;d<=Math.ceil(Math.log2(u))-1;d++){const p=new By(n,l.shape,!1,r),f=[[d]],m=h;h=e.runWebGLProgram(p,[h],h.dtype,f),e.disposeIntermediateTensorInfo(m)}if(o){const d=new By(n,l.shape,o,r),p=h;h=e.runWebGLProgram(d,[h],h.dtype),e.disposeIntermediateTensorInfo(p)}if(a!=null){const d=Ms(a),p=qe({inputs:{x:h},backend:e,attrs:{perm:d}});return e.disposeIntermediateTensorInfo(h),e.disposeIntermediateTensorInfo(l),p}return h}function h4(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,exclusive:i,reverse:a}=s;return Wy(ma.Prod,o,e,r,i,a)}const d4={kernelName:Iu,backendName:"webgl",kernelFunc:h4};function p4(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,exclusive:i,reverse:a}=s;return Wy(ma.Sum,o,e,r,i,a)}const f4={kernelName:Ma,backendName:"webgl",kernelFunc:p4};function m4(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,weights:r}=t,{size:i,binaryOutput:a}=s;if(o.shape.length===1){const l=e.readSync(o.dataId),c=e.readSync(r.dataId),u=ay(l,c,r.dtype,r.shape,i);return e.makeTensorInfo([i],r.dtype,u)}else if(o.shape.length===2){const l=e.bufferSync(o),c=e.bufferSync(r),u=vP(l,c,i,a);return e.makeTensorInfo(u.shape,r.dtype,u.values)}throw new Error(`Error in denseBincount: input must be at most rank 2, but got rank${o.shape.length}.`)}const g4={kernelName:ku,backendName:"webgl",kernelFunc:m4};class x4{constructor(t,e,s){this.variableNames=["x"],this.outputShape=[],this.outputShape=t,this.blockSize=e,this.dataFormat=s,this.userCode=`
    void main() {
      ivec4 coords = getOutputCoords();
      int b = coords[0];
      int h = ${this.getHeightCoordString()};
      int w = ${this.getWidthCoordString()};
      int d = ${this.getDepthCoordString()};

      int in_h = h / ${e};
      int offset_h = imod(h, ${e});
      int in_w = w / ${e};
      int offset_w = imod(w, ${e});
      int offset_d = (offset_h * ${e} + offset_w) *
        ${this.getOutputDepthSize()};
      int in_d = d + offset_d;

      float result = ${this.getInputSamplingString()};
      setOutput(result);
    }
  `}getHeightCoordString(){return this.dataFormat==="NHWC"?"coords[1]":"coords[2]"}getWidthCoordString(){return this.dataFormat==="NHWC"?"coords[2]":"coords[3]"}getDepthCoordString(){return this.dataFormat==="NHWC"?"coords[3]":"coords[1]"}getOutputDepthSize(){return this.dataFormat==="NHWC"?this.outputShape[3]:this.outputShape[1]}getInputSamplingString(){return this.dataFormat==="NHWC"?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"}}function b4(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{blockSize:r,dataFormat:i}=s,a=o.shape[0],l=i==="NHWC"?o.shape[1]:o.shape[2],c=i==="NHWC"?o.shape[2]:o.shape[3],u=i==="NHWC"?o.shape[3]:o.shape[1],h=l*r,d=c*r,p=u/(r*r),f=i==="NHWC"?[a,h,d,p]:[a,p,h,d],m=new x4(f,r,i);return e.runWebGLProgram(m,[o],o.dtype)}const y4={kernelName:Su,backendName:"webgl",kernelFunc:b4};class Uy{constructor(t,e=!1,s=null,o=!1,r=!1){this.variableNames=["x","W"],this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=t.outShape,this.enableShapeUniforms=Be(this.outputShape.length);const i=t.filterHeight,a=t.filterWidth,l=t.outChannels/t.inChannels;let c="",u="";s&&(o?c=`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${s}
        }`:r?c=`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${s}
        }`:c=`
          float activation(float x) {
            ${s}
          }
        `,u="result = activation(result);");const h=e?"result += getBiasAtOutCoords();":"";e&&this.variableNames.push("bias"),o&&this.variableNames.push("preluActivationWeights"),r&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${c}

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / ${l};
        int q = d2 - d1 * ${l};

        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.
        for (int wR = 0; wR < ${i}; wR++) {
          int xR = xRCorner + wR * dilations[0];

          if (xR < 0 || xR >= inDims[0]) {
            continue;
          }

          for (int wC = 0; wC < ${a}; wC++) {
            int xC = xCCorner + wC * dilations[1];

            if (xC < 0 || xC >= inDims[1]) {
              continue;
            }

            float xVal = getX(batch, xR, xC, d1);
            float wVal = getW(wR, wC, d1, q);
            dotProd += xVal * wVal;
          }
        }

        float result = dotProd;
        ${h}
        ${u}
        setOutput(result);
      }
    `}}class Gy{constructor(t,e=!1,s=null,o=!1,r=!1){this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=t.outShape,this.enableShapeUniforms=Be(this.outputShape.length);const i=t.outChannels/t.inChannels,a=t.padInfo.left,l=t.strideWidth,c=t.dilationWidth,u=t.filterHeight,h=t.filterWidth,d=h;let p=`
      int xR; int xC; int xCOffset;
      vec4 wTexel; vec4 previous; vec4 final;`;for(let x=0;x<h;x++)p+=`
          vec4 xTexelC${x*2};
          int xTexelC${x*2}Ready;
          vec4 xTexelC${x*2+1};
          int xTexelC${x*2+1}Ready;
          vec4 xC${x};`;p+=`
    for (int r = 0; r < ${u}; r++) {
      `;for(let x=0;x<h;x++)p+=`
          xTexelC${x*2} = vec4(0.0);
          xTexelC${x*2}Ready = 0;
          xTexelC${x*2+1} = vec4(0.0);
          xTexelC${x*2+1}Ready = 0;
          xC${x} = vec4(0.0);`;p+=`
        xR = xRCorner + r * dilations[0];
        if (xR >=0 && xR < inDims[0]) {
      `;for(let x=0;x<(d+1)/2;x++){const b=x*2;if(p+=`
          xC = xCCorner + ${b*c};
          `,l===1){if(b<h&&(a%2===1?(p+=`
                xCOffset = xC + 1;
                if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${b}Ready == 0) {
                  xTexelC${b} = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${b}.zw = vec2(0.0);
                  }
                  xTexelC${b}Ready = 1;
                }
              `,c===1&&b>0?p+=`
                xC${b} = vec4(xTexelC${b-2}.zw, xTexelC${b}.xy);
                `:p+=`
                  xCOffset = xC + 1 - 2;

                  if (xCOffset >= 0 && xCOffset < inDims[1]) {
                    previous = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      previous.zw = vec2(0.0);
                    }

                    xC${b} = vec4(previous.zw, xTexelC${b}.xy);
                  } else {
                    xC${b} = vec4(0.0, 0.0, xTexelC${b}.xy);
                  }
                  `):p+=`
                if (xC >= 0 && xC < inDims[1] && xTexelC${b}Ready == 0) {
                  xTexelC${b} = getX(batch, xR, xC, d1);
                  if (xC + 1 >= inDims[1]) {
                    xTexelC${b}.zw = vec2(0.0);
                  }
                  xTexelC${b}Ready = 1;
                }

                xC${b} = xTexelC${b};
                `,b+1<h)){const w=a%2===0?On(c):c;c%2===0&&a%2===1||c%2!==0&&a%2!==1?(p+=`
                  xCOffset = xC + imod(pads[1], 2) + ${w};

                  if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${b+1}Ready == 0) {
                    xTexelC${b+1} = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      xTexelC${b+1}.zw = vec2(0.0);
                    }
                    xTexelC${b+1}Ready = 1;
                  }
                  `,c>1?p+=`
                    xCOffset -= 2;
                    if (xCOffset >= 0 && xCOffset < inDims[1]) {
                     previous = getX(batch, xR, xCOffset, d1);
                     xC${b+1} = vec4(previous.zw, xTexelC${b+1}.xy);
                    } else {
                     xC${b+1} = vec4(0.0, 0.0, xTexelC${b+1}.xy);
                    }
                    `:p+=`
                    xC${b+1} = vec4(xTexelC${b}.zw, xTexelC${b+1}.xy);
                    `):w===1?p+=`
                    xC${b+1} = xTexelC${b};
                    `:p+=`
                    xCOffset = xC + ${w};

                    if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${b+1}Ready == 0) {
                      xTexelC${b+1} = getX(batch, xR, xCOffset, d1);
                      if (xCOffset + 1 >= inDims[1]) {
                        xTexelC${b+1}.zw = vec2(0.0);
                      }
                      xTexelC${b+1}Ready = 1;
                    }

                    xC${b+1} = xTexelC${b+1};
                    `}}else b<h&&(a%2===1?(p+=`
                xCOffset = xC + 1 - strides[1];
                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${b}Ready == 0) {
                  xTexelC${b} = getX(batch, xR, xCOffset, d1);
                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${b}.zw = vec2(0.0);
                  }
                  xTexelC${b}Ready = 1;
                }

                if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${b+1}Ready == 0) {
                  xTexelC${b+1} = getX(batch, xR, xC + 1, d1);
                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xC + 2 >= inDims[1]) {
                    xTexelC${b+1}.zw = vec2(0.0);
                  }
                  xTexelC${b+1}Ready = 1;
                }

                xC${b} = vec4(xTexelC${b}.zw, xTexelC${b+1}.zw);
              `,b+1<h&&(p+=`
                  final = vec4(0.0);
                  xCOffset = xC + 1 + strides[1];
                  if(xCOffset >= 0 && xCOffset < inDims[1]) {
                    final = getX(batch, xR, xCOffset, d1);
                  }
                  xC${b+1} = vec4(xTexelC${b+1}.xy, final.xy);
                `)):(p+=`
                if(xC >= 0 && xC < inDims[1] && xTexelC${b}Ready == 0) {
                  xTexelC${b} = getX(batch, xR, xC, d1);
                  if (xC + 1 >= inDims[1]) {
                    xTexelC${b}.zw = vec2(0.0);
                  }
                  xTexelC${b}Ready = 1;
                }

                xCOffset = xC + strides[1];
                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${b+1}Ready == 0) {
                  xTexelC${b+1} = getX(batch, xR, xCOffset, d1);
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${b+1}.zw = vec2(0.);
                  }
                  xTexelC${b+1}Ready = 1;
                }

                xC${b} = vec4(
                  xTexelC${b}.xy, xTexelC${b+1}.xy);
              `,b+1<h&&(p+=`
                  xC${b+1} = vec4(xTexelC${b}.zw, xTexelC${b+1}.zw);
                `)));b<h&&(p+=`
            wTexel = getW(r, ${b}, d1, q);
            dotProd += xC${b} * vec4(wTexel.xz, wTexel.xz);
          `,b+1<h&&(p+=`
              wTexel = getW(r, ${b+1}, d1, q);
              dotProd += xC${b+1} * vec4(wTexel.xz, wTexel.xz);
            `))}p+=`
    }
  `,p+=`
      }
    `;let f="",m="";s&&(o?f=`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${s}
        }`:r?f=`vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${s}
        }`:f=`vec4 activation(vec4 x) {
          ${s}
        }`,m="result = activation(result);");const g=e?"result += getBiasAtOutCoords();":"";e&&this.variableNames.push("bias"),o&&this.variableNames.push("preluActivationWeights"),r&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${f}

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / ${i};
        int q = d2 - d1 * ${i};
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.
        vec4 dotProd = vec4(0.000000000000001);

        ${p}

        vec4 result = dotProd - vec4(0.000000000000001);
        ${g}
        ${m}
        setOutput(result);
      }
    `}}function w4(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,filter:r}=t,{strides:i,pad:a,dilations:l,dimRoundingMode:c}=s;let u=l;u==null&&(u=[1,1]),T(Me(i,u),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${i} and dilations '${u}'`);const h=Se(o.shape,r.shape,i,u,a,c,!0);let d;q().getBool("WEBGL_PACK_DEPTHWISECONV")&&h.strideWidth<=2&&h.outChannels/h.inChannels===1?d=new Gy(h):d=new Uy(h);const p=[[h.padInfo.top,h.padInfo.left],[h.strideHeight,h.strideWidth],[h.dilationHeight,h.dilationWidth],[h.inHeight,h.inWidth]];return e.runWebGLProgram(d,[o,r],"float32",p)}const C4={kernelName:La,backendName:"webgl",kernelFunc:w4};class $4{constructor(t){this.variableNames=["x","dy"],this.outputShape=t.filterShape;const e=t.strideHeight,s=t.strideWidth,o=t.padInfo.top,r=t.padInfo.left,i=t.outChannels/t.inChannels;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int dm = coords.w;
        int d2 = d1 * ${i} + dm;

        float dotProd = 0.0;

        // TO DO: Vec4 over the batch size
        for (int b = 0; b < ${t.batchSize}; b++) {
          for (int yR = 0; yR < ${t.outHeight}; yR++) {
            int xR = wR + yR * ${e} - ${o};

            if (xR < 0 || xR >= ${t.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${t.outWidth}; yC++) {
              int xC = wC + yC * ${s} - ${r};

              if (xC < 0 || xC >= ${t.inWidth}) {
                continue;
              }

              float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);
            }
          }
        }
        setOutput(dotProd);
      }
    `}}class I4{constructor(t){this.variableNames=["dy","W"],this.outputShape=t.inShape;const e=t.filterHeight,s=t.filterWidth,o=t.strideHeight,r=t.strideWidth,i=e-1-t.padInfo.top,a=s-1-t.padInfo.left,l=t.outChannels/t.inChannels;this.userCode=`
      const ivec2 pads = ivec2(${i}, ${a});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];
        ivec2 dyCorner = coords.yz - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        float dotProd = 0.0;

        for (int wR = 0; wR < ${e}; wR++) {
          float dyR = float(dyRCorner + wR) / ${o}.0;

          if (dyR < 0.0 || dyR >= ${t.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${e} - 1 - wR;

          for (int wC = 0; wC < ${s}; wC++) {
            float dyC = float(dyCCorner + wC) / ${r}.0;

            if (dyC < 0.0 || dyC >= ${t.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ${s} - 1 - wC;

            // TO DO: Vec4 over the channelMul
            for (int dm = 0; dm < ${l}; dm++) {
              int d2 = d1 * ${l} + dm;
              float xValue = getDy(batch, idyR, idyC, d2);
              float wValue = getW(wRPerm, wCPerm, d1, dm);
              dotProd += xValue * wValue;
            }
          }
        }
        setOutput(dotProd);
      }
    `}}function v4(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,dy:r}=t,{strides:i,dilations:a,pad:l,dimRoundingMode:c,filterShape:u}=s,h=Se(o.shape,u,i,a,l,c,!0),d=new $4(h);return e.runWebGLProgram(d,[o,r],"float32")}const k4={kernelName:Nu,backendName:"webgl",kernelFunc:v4};function S4(n){const{inputs:t,backend:e,attrs:s}=n,{dy:o,filter:r}=t,{strides:i,dilations:a,pad:l,dimRoundingMode:c,inputShape:u}=s,h=Se(u,r.shape,i,a,l,c,!0),d=new I4(h);return e.runWebGLProgram(d,[o,r],"float32")}const N4={kernelName:Tu,backendName:"webgl",kernelFunc:S4};class T4{constructor(t){this.variableNames=["X"],this.outputShape=[t,t],this.userCode=`
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `}}function E4(n){const{inputs:t,backend:e}=n,{x:s}=t,o=[...s.shape,...s.shape],r=K(s.shape),i=it({inputs:{x:s},backend:e,attrs:{shape:[r]}}),a=new T4(r),l=e.runWebGLProgram(a,[i],i.dtype),c=it({inputs:{x:l},backend:e,attrs:{shape:o}});return e.disposeIntermediateTensorInfo(i),e.disposeIntermediateTensorInfo(l),c}const R4={kernelName:Yp,backendName:"webgl",kernelFunc:E4};class A4{constructor(t){this.variableNames=["x","W"],this.outputShape=t.outShape;const{inHeight:e,inWidth:s,padInfo:o,strideHeight:r,strideWidth:i,filterHeight:a,filterWidth:l,dilationHeight:c,dilationWidth:u}=t,{top:h,left:d}=o;this.userCode=`
      const ivec2 strides = ivec2(${r}, ${i});
      const ivec2 pads = ivec2(${h}, ${d});
      const float neg_infinity = -3.4e38;

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.w;
        ivec2 outTopLeftCorner =
            coords.yz * strides - pads;
        int hBeg = outTopLeftCorner.x;
        int wBeg = outTopLeftCorner.y;

        float curVal = neg_infinity;
        for (int h = 0; h < ${a}; h++) {
          int hIn = hBeg + h * ${c};

          if (hIn >= 0 && hIn < ${e}) {
            for (int w = 0; w < ${l}; w++) {
              int wIn = wBeg + w * ${u};

              if (wIn >= 0 && wIn < ${s}) {
                float xVal = getX(batch, hIn, wIn, d1);
                float wVal = getW(h, w, d1);

                float val = xVal + wVal;
                if (val > curVal) {
                  curVal = val;
                }
              }
            }
          }
        }

        float result = curVal;
        setOutput(result);
      }
    `}}function D4(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,filter:r}=t,{strides:i,pad:a,dilations:l}=s,c=Ti(o.shape,r.shape,i,a,"NHWC",l);let u;const h=new A4(c);u=e.runWebGLProgram(h,[o,r],"float32");const d=it({inputs:{x:u},backend:e,attrs:{shape:c.outShape}});return e.disposeIntermediateTensorInfo(u),d}const F4={kernelName:Pa,backendName:"webgl",kernelFunc:D4};function _4(n){const{inputs:t,backend:e,attrs:s}=n,{equation:o}=s,r=t,{allDims:i,summedDims:a,idDims:l}=md(o,r.length);xd(i.length,l,r);const{path:c,steps:u}=bd(a,l),h=u.length;let d=null,p=i.length;const f=[];for(let m=0;m<h;++m){for(const g of u[m]){const{permutationIndices:x,expandDims:b}=gd(p,l[g]);let w;yd(x)?w=r[g]:(w=qe({inputs:{x:r[g]},backend:e,attrs:{perm:x}}),f.push(w));const y=w.shape.slice();for(let C=0;C<b.length;++C)y.splice(b[C],0,1);Pt(w.shape,y)||(w=it({inputs:{x:w},backend:e,attrs:{shape:y}}),f.push(w)),d===null?d=w:(d=Ep({inputs:{a:w,b:d},backend:e}),f.push(d))}m<h-1&&(c[m]>=0&&(d=Wc({inputs:{x:d},backend:e,attrs:{axis:c[m]-(i.length-p),keepDims:!1}}),f.push(d)),p--)}for(const m of f)m!==d&&e.disposeIntermediateTensorInfo(m);return d}const O4={kernelName:Au,backendName:"webgl",kernelFunc:_4};const M4=_t({opSnippet:"return (x >= 0.0) ? x : (exp(x) - 1.0);",packedOpSnippet:`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`}),L4={kernelName:Vr,backendName:"webgl",kernelFunc:M4};const P4="return (b >= 0.0) ? a : a * (b + 1.0);",B4=`
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`,z4={kernelName:Du,backendName:"webgl",kernelFunc:n=>{const{inputs:t,backend:e}=n,{dy:s,y:o}=t,r=q().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new br(B4,s.shape,o.shape):new _o(P4,s.shape,o.shape);return e.runWebGLProgram(r,[s,o],s.dtype)}};const V4=Ee({opSnippet:"return float(a == b);",packedOpSnippet:`
  return vec4(equal(a, b));
`,dtype:"bool",cpuKernelImpl:EP}),W4={kernelName:Ba,backendName:"webgl",kernelFunc:V4};const U4=`
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  float p = ${ad};
  float a1 = ${ld};
  float a2 = ${cd};
  float a3 = ${ud};
  float a4 = ${hd};
  float a5 = ${dd};

  float sign = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + p * x);
  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));
`,G4=_t({opSnippet:U4}),H4={kernelName:Wr,backendName:"webgl",kernelFunc:G4};const q4=yr+`
  return exp(x);
`,Hy=_t({opSnippet:q4,packedOpSnippet:`
  vec4 result = exp(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,cpuKernelImpl:RP,dtype:"float32"}),X4={kernelName:Ur,backendName:"webgl",kernelFunc:Hy};function Fp(n){const{inputs:t,attrs:e,backend:s}=n,{dim:o}=e,{input:r}=t,i=r.shape.length,a=r.shape.slice();let l=o;return o<0&&(T(-(i+1)<=o,()=>`Axis must be in the interval [${-(i+1)}, ${i}]`),l=i+o+1),a.splice(l,0,1),it({inputs:{x:r},backend:s,attrs:{shape:a}})}const K4={kernelName:za,backendName:"webgl",kernelFunc:Fp};const qy="return exp(x) - 1.0;",j4=_t({opSnippet:qy,packedOpSnippet:qy,cpuKernelImpl:AP}),Y4={kernelName:Gr,backendName:"webgl",kernelFunc:j4};class Xy{constructor(t,e,s){this.variableNames=["real","imag"];const o=e[1];this.outputShape=e;const r=s?`2.0 * ${Math.PI}`:`-2.0 * ${Math.PI}`,i=s?`${o}.0`:"1.0";let a;if(t==="real")a="return real * expR - imag * expI;";else if(t==="imag")a="return real * expI + imag * expR;";else throw new Error(`FFT component must be either "real" or "imag", got ${t}.`);this.userCode=`
      const float exponentMultiplier = ${r};

      float unaryOpComplex(float real, float expR, float imag, float expI) {
        ${a}
      }

      float mulMatDFT(int batch, int index) {
        float indexRatio = float(index) / float(${o});
        float exponentMultiplierTimesIndexRatio =
            exponentMultiplier * indexRatio;

        float result = 0.0;

        for (int i = 0; i < ${o}; i++) {
          // x = (-2|2 * PI / N) * index * i;
          float x = exponentMultiplierTimesIndexRatio * float(i);
          float expR = cos(x);
          float expI = sin(x);
          float real = getReal(batch, i);
          float imag = getImag(batch, i);

          result +=
              unaryOpComplex(real, expR, imag, expI) / ${i};
        }

        return result;
      }

      void main() {
        ivec2 coords = getOutputCoords();
        setOutput(mulMatDFT(coords[0], coords[1]));
      }
    `}}function Ky(n,t,e){const s=e.texData.get(n.dataId),o=K(n.shape),r=n.shape[n.shape.length-1],i=o/r,a=it({inputs:{x:n},backend:e,attrs:{shape:[i,r]}}),l=a.shape,c=new Xy("real",l,t),u=new Xy("imag",l,t),h=[{dataId:s.complexTensorInfos.real.dataId,dtype:s.complexTensorInfos.real.dtype,shape:l},{dataId:s.complexTensorInfos.imag.dataId,dtype:s.complexTensorInfos.imag.dtype,shape:l}],d=e.runWebGLProgram(c,h,"float32"),p=e.runWebGLProgram(u,h,"float32"),f=Qs({inputs:{real:d,imag:p},backend:e});e.disposeIntermediateTensorInfo(d),e.disposeIntermediateTensorInfo(p);const m=it({inputs:{x:f},backend:e,attrs:{shape:n.shape}});return e.disposeIntermediateTensorInfo(a),e.disposeIntermediateTensorInfo(f),m}function Z4(n){const{inputs:t,backend:e}=n,{input:s}=t;return Ky(s,!1,e)}const Q4={kernelName:Fu,backendName:"webgl",kernelFunc:Z4};class J4{constructor(t,e){this.outputShape=[],this.customUniforms=[{name:"value",type:"float"}],this.variableNames=["x"],this.outputShape=t,this.userCode=`
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `}}function ga(n){const{backend:t,attrs:e}=n,{shape:s,value:o}=e;let{dtype:r}=e;if(r=r||Vo(o),r==="string"){const i=oe(r,K(s));return i.fill(o),t.makeTensorInfo(s,r,i)}else{const i=new J4(s,o),a=[[o]];return t.runWebGLProgram(i,[],r,a)}}const tV={kernelName:_u,backendName:"webgl",kernelFunc:ga};class eV{constructor(t){this.variableNames=["Image"],this.outputShape=[];const e=t[2];this.outputShape=t,this.userCode=`
        void main() {
          ivec4 coords = getOutputCoords();
          int x = coords[2];

          int coordX = ${e} - x - 1;
          float outputValue;
          if(coordX >= 0 && coordX < ${e}) {
            outputValue = getImage(coords[0], coords[1], coordX, coords[3]);
          } else {
            outputValue = getImage(coords[0], coords[1], coords[2], coords[3]);
          }
          setOutput(outputValue);
        }
    `}}const nV={kernelName:Ou,backendName:"webgl",kernelFunc:({inputs:n,backend:t})=>{const{image:e}=n,s=t,o=new eV(e.shape);return s.runWebGLProgram(o,[e],e.dtype)}};const jy="return floor(x);",sV=_t({opSnippet:jy,packedOpSnippet:jy,cpuKernelImpl:DP}),oV={kernelName:Hr,backendName:"webgl",kernelFunc:sV};const rV=Ee({opSnippet:`
  float s = sign(a) * sign(b);
  int ia = round(a);
  int ib = round(b);
  if (ib != 0) {
    // Windows (D3D) wants guaranteed non-zero int division at compile-time.
    return float(idiv(ia, ib, s));
  } else {
    return NAN;
  }
`,packedOpSnippet:`
  ivec4 ia = round(a);
  ivec4 ib = round(b);
  bvec4 cond = notEqual(ib, ivec4(0));
  ivec4 result = ivec4(0);
  vec4 s = sign(a) * sign(b);

  // Windows (D3D) wants guaranteed non-zero int division at compile-time.
  if (cond[0]) {
    result[0] = idiv(ia[0], ib[0], s[0]);
  }
  if (cond[1]) {
    result[1] = idiv(ia[1], ib[1], s[1]);
  }
  if (cond[2]) {
    result[2] = idiv(ia[2], ib[2], s[2]);
  }
  if (cond[3]) {
    result[3] = idiv(ia[3], ib[3], s[3]);
  }
  return vec4(result);
`,dtype:"int32"}),iV={kernelName:qr,backendName:"webgl",kernelFunc:rV};class aV{constructor(t){this.variableNames=["A"];const e=Ge(),[s,o]=t;this.outputShape=t,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${o}.0, ${s}.0);

        vec4 values = ${e.texture2D}(A, uv);
        float value;
        if (depth == 0) {
          value = values.r;
        } else if (depth == 1) {
          value = values.g;
        } else if (depth == 2) {
          value = values.b;
        } else if (depth == 3) {
          value = values.a;
        }

        setOutput(floor(value * 255.0 + 0.5));
      }
    `}}class lV{constructor(t){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;const e=Ge(),[s,o]=t;this.outputShape=t,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];

        vec4 result = vec4(0.);

        for(int row=0; row<=1; row++) {
          for(int col=0; col<=1; col++) {
            texC = coords[1] + row;
            depth = coords[2] + col;

            vec2 uv = (vec2(texC, texR) + halfCR) /
                       vec2(${o}.0, ${s}.0);
            vec4 values = ${e.texture2D}(A, uv);
            float value;
            if (depth == 0) {
              value = values.r;
            } else if (depth == 1) {
              value = values.g;
            } else if (depth == 2) {
              value = values.b;
            } else if (depth == 3) {
              value = values.a;
            }

            result[row * 2 + col] = floor(value * 255.0 + 0.5);
          }
        }

        ${e.output} = result;
      }
    `}}const cV={kernelName:Fw,backendName:"webgl",kernelFunc:uV};let Cr,_p=q().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");function uV(n){const{inputs:t,backend:e,attrs:s}=n;let{pixels:o}=t;const{numChannels:r}=s,i=typeof HTMLVideoElement!="undefined"&&o instanceof HTMLVideoElement,a=typeof HTMLImageElement!="undefined"&&o instanceof HTMLImageElement,[l,c]=i?[o.videoWidth,o.videoHeight]:[o.width,o.height],u=[c,l],h=[c,l,r];if(a||i){const m=q().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");(Cr==null||m!==_p)&&(_p=m,Cr=document.createElement("canvas").getContext("2d",{willReadFrequently:_p})),Cr.canvas.width=l,Cr.canvas.height=c,Cr.drawImage(o,0,0,l,c),o=Cr.canvas}const d=e.makeTensorInfo(u,"int32");e.texData.get(d.dataId).usage=yn.PIXELS,e.gpgpu.uploadPixelDataToTexture(e.getTexture(d.dataId),o);const p=q().getBool("WEBGL_PACK")?new lV(h):new aV(h),f=e.runWebGLProgram(p,[d],"int32");return e.disposeData(d.dataId),f}function hV(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,filter:r,bias:i,preluActivationWeights:a}=t,{strides:l,pad:c,dataFormat:u,dilations:h,dimRoundingMode:d,activation:p,leakyreluAlpha:f}=s,m=ms(u),g=Se(o.shape,r.shape,l,h,c,d,!1,m);let x;const b=[],w=i!=null,y=a!=null,C=p==="leakyrelu",I=()=>{const N=[o,r],S=(k,$)=>{if($==="NCHW"&&k.shape.length===1&&k.shape[0]!==1){const E=it({inputs:{x:k},backend:e,attrs:{shape:[k.shape[0],1,1]}});return b.push(E),E}return k};if(w&&N.push(S(i,u)),y&&N.push(S(a,u)),C){const k=e.makeTensorInfo([],"float32",Rs(f,"float32"));N.push(k),b.push(k)}return N};if(g.filterHeight===1&&g.filterWidth===1&&g.dilationHeight===1&&g.dilationWidth===1&&g.strideHeight===1&&g.strideWidth===1&&(g.padInfo.type==="SAME"||g.padInfo.type==="VALID"))x=Ly({x:o,filter:r,convInfo:g,backend:e,bias:i,activation:p,preluActivationWeights:a,leakyreluAlpha:f});else if(g.strideWidth<=2&&m==="channelsLast"&&q().getBool("WEBGL_EXP_CONV")){const N=p?ha(p,!0):null,S=new My(g,w,N,y,C),k=[[g.padInfo.top,g.padInfo.left],[g.strideHeight,g.strideWidth],[g.dilationHeight,g.dilationWidth],[g.inHeight,g.inWidth]],$=I();x=e.runWebGLProgram(S,$,"float32",k)}else if(q().getBool("WEBGL_CONV_IM2COL"))x=Py({x:o,filter:r,convInfo:g,backend:e,bias:i,activation:p,preluActivationWeights:a,leakyreluAlpha:f});else{const N=p?ha(p,!1):null,S=new Oy(g,w,N,y,C),k=I();x=e.runWebGLProgram(S,k,"float32")}const v=it({inputs:{x},backend:e,attrs:{shape:g.outShape}});return b.push(x),b.forEach(N=>e.disposeIntermediateTensorInfo(N)),v}const dV={kernelName:kl,backendName:"webgl",kernelFunc:hV};function pV(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,filter:r,bias:i,preluActivationWeights:a}=t,{strides:l,pad:c,dilations:u,dimRoundingMode:h,activation:d,leakyreluAlpha:p}=s,f=[];let m=u;m==null&&(m=[1,1]),T(Me(l,m),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${l} and dilations '${m}'`);const g=Se(o.shape,r.shape,l,m,c,h,!0),x=q().getBool("WEBGL_PACK_DEPTHWISECONV")&&g.strideWidth<=2&&g.outChannels/g.inChannels===1,b=d?ha(d,x):null,w=[o,r],y=i!=null,C=a!=null,I=d==="leakyrelu";if(y&&w.push(i),C&&w.push(a),I){const k=e.makeTensorInfo([],"float32",Rs(p,"float32"));w.push(k),f.push(k)}let v;x?v=new Gy(g,y,b,C,I):v=new Uy(g,y,b,C,I);const N=[[g.padInfo.top,g.padInfo.left],[g.strideHeight,g.strideWidth],[g.dilationHeight,g.dilationWidth],[g.inHeight,g.inWidth]],S=e.runWebGLProgram(v,w,"float32",N);return f.forEach(k=>e.disposeIntermediateTensorInfo(k)),S}const fV={kernelName:gf,backendName:"webgl",kernelFunc:pV};class mV{constructor(t,e,s,o){this.sliceDim=t,this.strides=e,this.paramsShape=o,this.variableNames=["x","indices"],this.outputShape=s;const r=Ut(s.length);let i=`
    int index;`;for(let a=0;a<this.sliceDim;a++)i+=`
          index = round(getIndices(coords[0], ${a}));
          out_of_bounds = out_of_bounds || index < 0;
          out_of_bounds = out_of_bounds || index >= ${this.paramsShape[a]};
          flattenIndex += index * ${this.strides[a]};`;this.userCode=`
         void main() {
          ${r} coords = getOutputCoords();
          int flattenIndex = 0;
          bool out_of_bounds = false;

          ${i}

          setOutput(out_of_bounds ? 0.0 : getX(flattenIndex, coords[1]));
        }
      `}}function gV(n){const{inputs:t,backend:e}=n,{params:s,indices:o}=t,r=o.shape,i=r[r.length-1],a=K(s.shape),[l,c,u,h]=Jh(s,o),d=it({inputs:{x:o},backend:e,attrs:{shape:[c,i]}}),p=it({inputs:{x:s},backend:e,attrs:{shape:[K(s.shape)/u,u]}});if(e.shouldExecuteOnCPU([s,o])||s.dtype==="string"){const x=e.readSync(o.dataId),b=e.bufferSync(s),w=FP(x,b,s.dtype,c,i,u,h,s.shape,a);return e.makeTensorInfo(l,s.dtype,w.values)}const f=new mV(i,h,[c,u],s.shape),m=e.runWebGLProgram(f,[p,d],p.dtype),g=it({inputs:{x:m},backend:e,attrs:{shape:l}});return e.disposeIntermediateTensorInfo(d),e.disposeIntermediateTensorInfo(p),e.disposeIntermediateTensorInfo(m),g}const xV={kernelName:Zp,backendName:"webgl",kernelFunc:gV};class bV{constructor(t,e){this.variableNames=["A","indices"],this.outputShape=e,this.rank=e.length;const s=Ut(this.rank),o=yV(t);this.userCode=`
      void main() {
        ${s} resRC = getOutputCoords();
        int index = int(getIndices(resRC.x, resRC.z));
        float inBounds = (index >= 0) && (index < ${t[2]}) ? 1.0 : 0.0;
        setOutput(inBounds * getA(${o}));
      }
    `}}function yV(n,t){const e=["resRC.x","resRC.y","resRC.z","resRC.w"],s=[];for(let o=0;o<n.length;o++)o===2?s.push("index"):s.push(`${e[o]}`);return s.join()}function Yy(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,indices:r}=t,{axis:i,batchDims:a}=s,l=vt(i,o.shape)[0];if(q().get("DEBUG")){const b=e.readSync(r.dataId),w=o.shape[l];for(let y=0;y<b.length;++y){const C=b[y];T(C<=w-1&&C>=0,()=>`GatherV2: the index value ${C} is not in [0, ${w-1}]`)}}const c=Fg(o,r,l,a),u=K(r.shape),h=[],d=it({inputs:{x:o},backend:e,attrs:{shape:[c.batchSize,c.outerSize,c.dimSize,c.sliceSize]}}),p=it({inputs:{x:r},backend:e,attrs:{shape:[c.batchSize,u/c.batchSize]}});h.push(d),h.push(p);const f=[c.batchSize,c.outerSize,u/c.batchSize,c.sliceSize];if(e.shouldExecuteOnCPU([o,r])||o.dtype==="string"){const b=e.bufferSync(p),w=e.bufferSync(d),y=_P(w,b,f);return h.forEach(C=>e.disposeIntermediateTensorInfo(C)),e.makeTensorInfo(c.outputShape,y.dtype,y.values)}const m=new bV(d.shape,f),g=e.runWebGLProgram(m,[d,p],d.dtype);h.push(g);const x=it({inputs:{x:g},backend:e,attrs:{shape:c.outputShape}});return h.forEach(b=>e.disposeIntermediateTensorInfo(b)),x}const wV={kernelName:Wa,backendName:"webgl",kernelFunc:Yy};const CV=Ee({opSnippet:"return float(a > b);",packedOpSnippet:`
  return vec4(greaterThan(a, b));
`,cpuKernelImpl:OP,dtype:"bool"}),$V={kernelName:Ua,backendName:"webgl",kernelFunc:CV};const IV=Ee({opSnippet:"return float(a >= b);",packedOpSnippet:`
  return vec4(greaterThanEqual(a, b));
`,dtype:"bool",cpuKernelImpl:MP}),vV={kernelName:Xr,backendName:"webgl",kernelFunc:IV};function kV(n){const{inputs:t,backend:e}=n,{input:s}=t;return Ky(s,!0,e)}const SV={kernelName:Mu,backendName:"webgl",kernelFunc:kV};const NV=_t({opSnippet:"return float(!isnan(x) && !isinf(x));",dtype:"bool"}),TV={kernelName:jr,backendName:"webgl",kernelFunc:NV};const EV=_t({opSnippet:"return float(isinf(x));",dtype:"bool"}),RV={kernelName:Yr,backendName:"webgl",kernelFunc:EV};const AV=_t({opSnippet:"return float(isnan(x));",dtype:"bool"}),DV={kernelName:Zr,backendName:"webgl",kernelFunc:AV};const FV=Ee({opSnippet:"return float(a < b);",packedOpSnippet:`
  return vec4(lessThan(a, b));
`,cpuKernelImpl:LP,dtype:"bool"}),_V={kernelName:Ha,backendName:"webgl",kernelFunc:FV};const OV=Ee({opSnippet:"return float(a <= b);",packedOpSnippet:`
  return vec4(lessThanEqual(a, b));
`,cpuKernelImpl:PP,dtype:"bool"}),MV={kernelName:qa,backendName:"webgl",kernelFunc:OV};function LV(n){const{backend:t,attrs:e}=n,{start:s,stop:o,num:r}=e,i=BP(s,o,r);return t.makeTensorInfo([i.length],"float32",i)}const PV={kernelName:Qp,backendName:"webgl",kernelFunc:LV};const BV=yr+`
  return x < 0.0 ? 0./0. : log(x);
`,zV=_t({opSnippet:BV,packedOpSnippet:`
  vec4 result = log(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : (x.r < 0.0 ? 0./0. : result.r);
  result.g = isNaN.g ? x.g : (x.g < 0.0 ? 0./0. : result.g);
  result.b = isNaN.b ? x.b : (x.b < 0.0 ? 0./0. : result.b);
  result.a = isNaN.a ? x.a : (x.a < 0.0 ? 0./0. : result.a);
  return result;
`,cpuKernelImpl:zP}),VV={kernelName:Qr,backendName:"webgl",kernelFunc:zV};const WV=yr+`
  return log(1.0 + x);
`,UV=_t({opSnippet:WV}),GV={kernelName:Jr,backendName:"webgl",kernelFunc:UV};const HV=Ee({opSnippet:"return float(a >= 1.0 && b >= 1.0);",packedOpSnippet:`
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`,dtype:"bool"}),qV={kernelName:Xa,backendName:"webgl",kernelFunc:HV};const XV=_t({opSnippet:"return float(!(x >= 1.0));"}),KV={kernelName:Ka,backendName:"webgl",kernelFunc:XV};const jV=Ee({opSnippet:"return float(a >= 1.0 || b >= 1.0);",packedOpSnippet:`
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`,dtype:"bool"}),YV={kernelName:ja,backendName:"webgl",kernelFunc:jV};class ZV{constructor(t,e,s,o,r){this.variableNames=["x"],this.outputShape=[];const i=e,a=t[3]-1;this.outputShape=t;let l;const c=`float(${s}) + float(${o}) * sum`;r===.5?l=`inversesqrt(${c})`:r===1?l=`1.0/(${c})`:l=`exp(log(${c}) * float(-${r}));`,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];
        int d = coords[3];
        float x = getX(b, r, c, d);
        float sum = 0.0;
        for (int j = -${i}; j <= ${i}; j++) {
          int idx = d + j;
          if (idx >= 0 && idx <=  ${a}) {
            float z = getX(b, r, c, idx);
            sum += z * z;
          }
        }
        float val = x * ${l};
        setOutput(val);
      }
    `}}class QV{constructor(t,e,s,o,r){this.variableNames=["x"],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;const i=e,a=t[3]-1;this.outputShape=t;let l;const c=`float(${s}) + float(${o}) * sum`;r===.5?l=`inversesqrt(${c})`:r===1?l=`1.0/(${c})`:l=`exp(log(${c}) * float(-${r}));`,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords.x;
        int r = coords.y;
        int c = coords.z;
        int d = coords.w;

        bool hasNextCol = d < ${this.outputShape[3]};
        bool hasNextRow = c < ${this.outputShape[2]};

        vec4 sum = vec4(0.);
        vec4 xFragAtOutputCoords = getX(b, r, c, d);

        vec4 xAtOutputCoords = vec4(
          getChannel(xFragAtOutputCoords, vec2(c, d)),
          hasNextCol ?
            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,
          hasNextRow ?
            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,
          (hasNextRow && hasNextCol) ?
            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0
        );

        int firstChannel = d - ${i};
        vec2 cache = vec2(0.);
        if(firstChannel >= 0){
          vec4 firstChannelFrag = getX(b, r, c, firstChannel);
          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));
            if(hasNextRow){
              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));
            }
        }

        ivec2 depth = ivec2(d, d + 1);
        for (int j = - ${i}; j <= ${i}; j++) {
          ivec2 idx = depth + j;
          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));
          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(${a}));

          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;
          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;

          if(depthInRange || depthPlusOneInRange){
            vec4 z = vec4(0.);
            vec4 xFragAtCurrentDepth;
            z.xz = cache.xy;
            if(depthPlusOneInRange && hasNextCol){
              xFragAtCurrentDepth = idx.y != d ?
                getX(b, r, c, idx.y) : xFragAtOutputCoords;
              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));
              if(hasNextRow){
                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));
              }
            }
            cache.xy = z.yw;
            sum += z * z;
          }
        }
        vec4 result = xAtOutputCoords * ${l};
        setOutput(result);
      }
    `}}const JV={kernelName:Ya,backendName:"webgl",kernelFunc:n=>{const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{depthRadius:r,bias:i,alpha:a,beta:l}=s,c=q().getBool("WEBGL_PACK_NORMALIZATION")?new QV(o.shape,r,i,a,l):new ZV(o.shape,r,i,a,l);return e.runWebGLProgram(c,[o],o.dtype)}};class tW{constructor(t,e,s,o,r){this.variableNames=["inputImage","outputImage","dy"],this.outputShape=[],this.outputShape=t,this.depth=t[3],this.depthRadius=e,this.bias=s,this.alpha=o,this.beta=r,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];

        float result = 0.0;
        for (int d = 0; d < ${this.depth}; ++d) {
          int depthBegin = int(max(0.0, float(d - ${e})));
          int depthEnd = int(min(float(${this.depth}),
              float(d + ${e} + 1)));

          const int MIN_DEPTH_BEGIN = 0;
          const int MAX_DEPTH_END = ${this.depth};

          float norm = 0.0;
          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd) {
              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);
            }
            else {
              break;
            }
          }

          norm = float(${o}) * norm + float(${s});

          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd){
              float dyi = -2.0 * float(${o})
                * float(${r})
                * getInputImage(b, r, c, k) * getOutputImage(b, r, c, d)
                / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * ${r});
              }
              if (k == coords[3]) {
                dyi *= getDy(b, r, c, d);
                result += dyi;
              }
            }
            else {
              break;
            }
          }
      }
      setOutput(result);
      }
    `}}const eW={kernelName:Pu,backendName:"webgl",kernelFunc:n=>{const{inputs:t,backend:e,attrs:s}=n,{x:o,y:r,dy:i}=t,{depthRadius:a,bias:l,alpha:c,beta:u}=s,h=new tW(o.shape,a,l,c,u);return e.runWebGLProgram(h,[o,r,i],o.dtype)}};function nW(n,t,e,s){const o=K(t),i=K(n.shape)/o,a=it({inputs:{x:n},attrs:{shape:[i,o]},backend:s}),l=Mo(a,n.dtype,"max",s),c=it({inputs:{x:l},attrs:{shape:e},backend:s});return s.disposeIntermediateTensorInfo(a),s.disposeIntermediateTensorInfo(l),c}function Zy(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{reductionIndices:r,keepDims:i}=s,a=o.shape.length,l=vt(r,o.shape);let c=l;const u=Jt(c,a),h=u!=null,d=e.shouldExecuteOnCPU([o]);let p=o;if(h){if(d){const w=e.texData.get(p.dataId).values,y=new Array(a);for(let v=0;v<y.length;v++)y[v]=o.shape[u[v]];const C=Np(w,o.shape,o.dtype,u,y);p=e.makeTensorInfo(y,o.dtype);const I=e.texData.get(p.dataId);I.values=C}else p=Vc(o,u,e);c=ie(c.length,a)}Ne("max",c,a);const[f,m]=$e(p.shape,c);let g=f;i&&(g=he(f,l));let x;if(d){const w=e.texData.get(p.dataId).values,y=VP(w,K(m),g,o.dtype);x=e.makeTensorInfo(g,o.dtype);const C=e.texData.get(x.dataId);C.values=y}else x=nW(p,m,g,e);return h&&e.disposeIntermediateTensorInfo(p),x}const sW={kernelName:Za,backendName:"webgl",kernelFunc:Zy};const oW=Tp+`
  return max(a, b);
`,rW=`
  vec4 result = vec4(max(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+Oo+`
  return result;
`,iW=Ee({opSnippet:oW,packedOpSnippet:rW,cpuKernelImpl:WP}),aW={kernelName:ti,backendName:"webgl",kernelFunc:iW};function lW(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t;ca(o,"maxPool");const{filterSize:r,strides:i,pad:a,dimRoundingMode:l}=s,c=1;T(Me(i,c),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${c}'`);const u=In(o.shape,r,i,c,a,l);if(u.filterWidth===1&&u.filterHeight===1&&Pt(u.inShape,u.outShape))return cn({inputs:{x:o},backend:e});const h=new da(u,"max",!1);return e.runWebGLProgram(h,[o],o.dtype)}const cW={kernelName:Qa,backendName:"webgl",kernelFunc:lW};function uW(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{filterSize:r,strides:i,pad:a,dataFormat:l,dimRoundingMode:c}=s,u=[1,1,1],h=fs(o.shape,r,i,u,a,c,l),d=new Rp(h,"max",!1);return e.runWebGLProgram(d,[o],o.dtype)}const hW={kernelName:Ja,backendName:"webgl",kernelFunc:uW};class dW{constructor(t){this.variableNames=["dy","maxPos"],this.outputShape=t.inShape;const e=t.strideHeight,s=t.strideWidth,o=t.dilationHeight,r=t.effectiveFilterHeight,i=t.effectiveFilterWidth,a=r-1-t.padInfo.top,l=i-1-t.padInfo.left,c=r*i-1;this.userCode=`
      const ivec2 pads = ivec2(${a}, ${l});

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${r};
          wR += ${o}) {
          float dyR = float(dyRCorner + wR) / ${e}.0;

          if (dyR < 0.0 || dyR >= ${t.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${i}; wC++) {
            float dyC = float(dyCCorner + wC) / ${s}.0;

            if (dyC < 0.0 || dyC >= ${t.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);
            int maxPosValue = ${c} - int(getMaxPos(b, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            int curPosValue = wR * ${i} + wC;
            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

            dotProd += dyValue * mask;
          }
        }
        setOutput(dotProd);
      }
    `}}class pW{constructor(t){this.variableNames=["dy","maxPos"],this.outputShape=t.inShape;const e=t.strideDepth,s=t.strideHeight,o=t.strideWidth,r=t.dilationDepth,i=t.dilationHeight,a=t.dilationWidth,l=t.effectiveFilterDepth,c=t.effectiveFilterHeight,u=t.effectiveFilterWidth,h=l-1-t.padInfo.front,d=c-1-t.padInfo.top,p=u-1-t.padInfo.left,f=l*c*u-1;this.userCode=`
      const ivec3 pads = ivec3(${h}, ${d}, ${p});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ${l};
           wD += ${r}) {
          float dyD = float(dyDCorner + wD) / ${e}.0;

          if (dyD < 0.0 || dyD >= ${t.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${c};
              wR += ${i}) {
            float dyR = float(dyRCorner + wR) / ${s}.0;

            if (dyR < 0.0 || dyR >= ${t.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${u};
                wC += ${a}) {
              float dyC = float(dyCCorner + wC) / ${o}.0;

              if (dyC < 0.0 || dyC >= ${t.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);
              int maxPosValue = ${f} -
                  int(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              int curPosValue =
                  wD * ${c} * ${u} +
                  wR * ${u} + wC;
              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

              dotProd += dyValue * mask;
            }
          }
        }
        setOutput(dotProd);
      }
    `}}function fW(n){const{inputs:t,backend:e,attrs:s}=n,{dy:o,input:r}=t,i=r,{filterSize:a,strides:l,pad:c,dimRoundingMode:u}=s,h=[1,1,1],d=fs(i.shape,a,l,h,c,u),p=new Rp(d,"max",!0),f=e.runWebGLProgram(p,[i],i.dtype),m=new pW(d),g=e.runWebGLProgram(m,[o,f],i.dtype);return e.disposeIntermediateTensorInfo(f),g}const mW={kernelName:zu,backendName:"webgl",kernelFunc:fW};function gW(n){const{inputs:t,backend:e,attrs:s}=n,{dy:o,input:r,output:i}=t,a=r;ca([r,i],"maxPoolGrad");const{filterSize:l,strides:c,pad:u,dimRoundingMode:h}=s,d=In(a.shape,l,c,1,u,h),p=!0,f=new da(d,"max",p),m=e.runWebGLProgram(f,[a],a.dtype),g=new dW(d),x=e.runWebGLProgram(g,[o,m],a.dtype);return e.disposeIntermediateTensorInfo(m),x}const xW={kernelName:Bu,backendName:"webgl",kernelFunc:gW};function bW(n,t,e,s){let o=new da(e,"max",!1);const r=s.runWebGLProgram(o,[n],"float32");o=new da(e,"max",!0,!0,t);const i=s.runWebGLProgram(o,[n],"float32");return[r,i]}const yW={kernelName:Jp,backendName:"webgl",kernelFunc:({inputs:n,attrs:t,backend:e})=>{const{x:s}=n,{filterSize:o,strides:r,pad:i,includeBatchInIndex:a}=t,l=e;T(s.shape.length===4,()=>`Error in maxPool: input must be rank 4 but got rank ${s.shape.length}.`);const c=[1,1];T(Me(r,c),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${r} and dilations '${c}'`);const u=In(s.shape,o,r,c,i),[h,d]=bW(s,a,u,l);return[h,d]}};function wW(n,t,e,s){const o=K(t),i=K(n.shape)/o,a=it({inputs:{x:n},attrs:{shape:[i,o]},backend:s}),l=Mo(a,"float32","mean",s),c=it({inputs:{x:l},attrs:{shape:e},backend:s});return s.disposeIntermediateTensorInfo(a),s.disposeIntermediateTensorInfo(l),c}const CW={kernelName:tl,backendName:"webgl",kernelFunc:({inputs:n,attrs:t,backend:e})=>{const{x:s}=n,{keepDims:o,axis:r}=t,i=e,a=s.shape.length,l=vt(r,s.shape);let c=l;const u=Jt(c,a),h=u!=null,d=i.shouldExecuteOnCPU([s]),p=[];let f=s;if(h){if(d){const y=i.texData.get(f.dataId).values,C=new Array(a);for(let N=0;N<C.length;N++)C[N]=s.shape[u[N]];const I=Np(y,s.shape,s.dtype,u,C);f=i.makeTensorInfo(C,s.dtype);const v=i.texData.get(f.dataId);v.values=I}else f=Vc(s,u,i);p.push(f),c=ie(c.length,a)}Ne("sum",c,a);const[m,g]=$e(f.shape,c);let x=m;o&&(x=he(m,l));const b=wW(f,g,x,i);for(const w of p)i.disposeIntermediateTensorInfo(w);return b}};function $W(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,keepDims:i}=s,a=o.shape.length,l=vt(r,o.shape);let c=l;const u=Jt(c,a);let h=o;u!=null&&(h=qe({inputs:{x:o},backend:e,attrs:{perm:u}}),c=ie(c.length,o.shape.length)),Ne("min",c,a);const[d,p]=$e(h.shape,c),f=K(p),m=it({inputs:{x:h},backend:e,attrs:{shape:[-1,f]}}),g=Mo(m,m.dtype,"min",e);let x;if(i){const b=he(d,l);x=it({inputs:{x:g},backend:e,attrs:{shape:b}})}else x=it({inputs:{x:g},backend:e,attrs:{shape:d}});return e.disposeIntermediateTensorInfo(m),e.disposeIntermediateTensorInfo(g),u!=null&&e.disposeIntermediateTensorInfo(h),x}const IW={kernelName:el,backendName:"webgl",kernelFunc:$W};const vW=Tp+`
  return min(a, b);
`,kW=`
  vec4 result = vec4(min(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+Oo+`
  return result;
`,SW=Ee({opSnippet:vW,packedOpSnippet:kW,cpuKernelImpl:UP}),NW={kernelName:ei,backendName:"webgl",kernelFunc:SW};class TW{constructor(t,e,s){this.variableNames=["x"],this.outputShape=e.map((u,h)=>u[0]+t[h]+u[1]);const o=t.length,r=Ut(o),i=e.map(u=>u[0]).join(","),a=e.map((u,h)=>u[0]+t[h]).join(","),l=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,o),c=s==="reflect"?0:1;if(o===1){this.userCode=`
        int start = ${i};
        int end = ${a};

        void main() {
          int outC = getOutputCoords();
          if (outC < start) {
            outC = start * 2 - outC - ${c};
          } else if(outC >= end) {
            outC = (end - 1) * 2 - outC + ${c};
          }
          setOutput(getX(outC - start));
        }
      `;return}this.userCode=`
      ${r} start = ${r}(${i});
      ${r} end = ${r}(${a});

      void main() {
        ${r} outC = getOutputCoords();
        for (int i = 0; i < ${o}; i++) {
          if (outC[i] < start[i]) {
            outC[i] = start[i] * 2 - outC[i] - ${c};
          } else if(outC[i] >= end[i]) {
            outC[i] = (end[i] - 1) * 2 - outC[i] + ${c};
          }
        }
        ${r} coords = outC - start;
        setOutput(getX(${l}));
      }
    `}}class EW{constructor(t,e,s){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e.map((f,m)=>f[0]+t[m]+f[1]);const o=t.length,r=Ut(o),i=e.map(f=>f[0]).join(","),a=e.map((f,m)=>f[0]+t[m]).join(","),l=He("rc",o),c=He("source",o),u=`${l[o-1]} < ${this.outputShape[o-1]}`,h=o===1?"source":`vec2(${c.slice(-2).join()})`,d=s==="reflect"?0:1;let p="";if(o===1){const f=`
        ${r} source = rc;
        if (source < start) {
          source = start * 2 - source - ${d};
        } else if (source >= end) {
          source = (end - 1) * 2 - source + ${d};
        }
        source -= start;
      `;p=`
        ${r} rc = outputLoc;
        ${f}
        result[0] = getChannel(getX(${c.join()}), ${h});
        ${l[o-1]} += 1;
        if(${u}) {
          ${f}
          result[1] = getChannel(getX(${c.join()}), ${h});
        }
      `}else{const f=`
        ${r} source = rc;
        ${r} lt = ${r}(lessThan(source, start));
        ${r} gte = ${r}(greaterThanEqual(source, end));
        ${r} orig = 1 - (lt + gte);
        source = orig * source +
                lt * (start * 2 - source - ${d}) +
                gte * ((end - 1) * 2 - source + ${d});
        source -= start;
      `;p=`
        ${r} rc = outputLoc;
        ${f}
        result[0] = getChannel(getX(${c.join()}), ${h});
        ${l[o-1]} += 1;
        if(${u}) {
          ${f}
          result[1] = getChannel(getX(${c.join()}), ${h});
        }
        rc = outputLoc;
        ${l[o-2]} += 1;
        if(${l[o-2]} < ${this.outputShape[o-2]}) {
          ${f}
          result[2] = getChannel(getX(${c.join()}), ${h});
          ${l[o-1]} += 1;
          if(${u}) {
            ${f}
            result[3] = getChannel(getX(${c.join()}), ${h});
          }
        }
      `}this.userCode=`
      const ${r} start = ${r}(${i});
      const ${r} end = ${r}(${a});

      void main() {
        ${r} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${p}
        setOutput(result);
      }
    `}}const RW={kernelName:nl,backendName:"webgl",kernelFunc:({inputs:n,backend:t,attrs:e})=>{const{x:s}=n,{paddings:o,mode:r}=e,i=q().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new EW(s.shape,o,r):new TW(s.shape,o,r);return t.runWebGLProgram(i,[s],s.dtype)}};const AW=`if (b == 0.0) return NAN;
  return mod(a, b);`,DW=`
  vec4 result = mod(a, b);
  bvec4 isNaN = equal(b, vec4(0.0));
  `+Oo+`
  return result;
`,FW=Ee({opSnippet:AW,packedOpSnippet:DW}),_W={kernelName:ni,backendName:"webgl",kernelFunc:FW};class OW{constructor(t,e,s){this.variableNames=["probs"],this.customUniforms=[{name:"seed",type:"float"}],this.outputShape=[t,s],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];

        float r = random(seed);
        float cdf = 0.0;

        for (int i = 0; i < ${e-1}; i++) {
          cdf += getProbs(batch, i);

          if (r < cdf) {
            setOutput(float(i));
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutput(float(${e-1}));
      }
    `}}const Qy=Ee({opSnippet:`
if (a == b) {
  return 1.0;
};
return a / b;`,packedOpSnippet:`
  // vec4 one = vec4(equal(a, b));
  // return one + (vec4(1.0) - one) * a / b;
  vec4 result = a / b;
  if(a.x == b.x) {
    result.x = 1.;
  }
  if(a.y == b.y) {
    result.y = 1.;
  }
  if(a.z == b.z) {
    result.z = 1.;
  }
  if(a.w == b.w) {
    result.w = 1.;
  }

  return result;
`,checkOutOfBounds:!0}),MW={kernelName:zr,backendName:"webgl",kernelFunc:Qy};const Jy="return a - b;",tw=Ee({opSnippet:Jy,packedOpSnippet:Jy,supportsComplex:!0,cpuKernelImpl:u3}),LW={kernelName:bi,backendName:"webgl",kernelFunc:tw};function ew(n){const{inputs:t,backend:e,attrs:s}=n,{logits:o}=t,{dim:r}=s,i=vt([r],o.shape),a=Zy({inputs:{x:o},backend:e,attrs:{reductionIndices:i,keepDims:!1}}),l=he(a.shape,i),c=it({inputs:{x:a},backend:e,attrs:{shape:l}}),u=tw({inputs:{a:o,b:c},backend:e}),h=Hy({inputs:{x:u},backend:e}),d=Wc({inputs:{x:h},backend:e,attrs:{axis:i,keepDims:!1}}),p=it({inputs:{x:d},backend:e,attrs:{shape:l}}),f=Qy({inputs:{a:h,b:p},backend:e});return e.disposeIntermediateTensorInfo(a),e.disposeIntermediateTensorInfo(c),e.disposeIntermediateTensorInfo(u),e.disposeIntermediateTensorInfo(h),e.disposeIntermediateTensorInfo(d),e.disposeIntermediateTensorInfo(p),f}const PW={kernelName:wl,backendName:"webgl",kernelFunc:ew};function BW(n){const{inputs:t,backend:e,attrs:s}=n,{logits:o}=t,{numSamples:r,seed:i,normalized:a}=s,l=a?o:ew({inputs:{logits:o},backend:e,attrs:{dim:o.shape.length-1}}),c=l.shape[0],u=l.shape[1],h=new OW(c,u,r),d=[[i]],p=e.runWebGLProgram(h,[l],"int32",d);return a||e.disposeIntermediateTensorInfo(l),p}const zW={kernelName:tf,backendName:"webgl",kernelFunc:BW};const VW=Dn+`
  return -x;
`,WW=`
  vec4 result = -x;
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`;function UW(n){const{inputs:t,backend:e}=n,{x:s}=t;if(e.shouldExecuteOnCPU([s])){const r=e.texData.get(s.dataId),[i,a]=HP(r.values,s.shape,s.dtype);return e.makeTensorInfo(a,s.dtype,i)}let o;return q().getBool("WEBGL_PACK_UNARY_OPERATIONS")?o=new Zs(s.shape,WW):o=new us(s.shape,VW),e.runWebGLProgram(o,[s],s.dtype)}const GW={kernelName:sl,backendName:"webgl",kernelFunc:UW};const HW=Xh;function qW(n){fn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:t,backend:e,attrs:s}=n,{boxes:o,scores:r}=t,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l}=s,c=e.readSync(o.dataId),u=e.readSync(r.dataId),{selectedIndices:h}=HW(c,u,i,a,l);return e.makeTensorInfo([h.length],"int32",new Int32Array(h))}const XW={kernelName:Vu,backendName:"webgl",kernelFunc:qW};const KW=Kh;function jW(n){fn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:t,backend:e,attrs:s}=n,{boxes:o,scores:r}=t,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l,padToMaxOutputSize:c}=s,u=e.readSync(o.dataId),h=e.readSync(r.dataId),{selectedIndices:d,validOutputs:p}=KW(u,h,i,a,l,c);return[e.makeTensorInfo([d.length],"int32",new Int32Array(d)),e.makeTensorInfo([],"int32",new Int32Array([p]))]}const YW={kernelName:Wu,backendName:"webgl",kernelFunc:jW};const ZW=jh;function QW(n){fn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:t,backend:e,attrs:s}=n,{boxes:o,scores:r}=t,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l,softNmsSigma:c}=s,u=e.readSync(o.dataId),h=e.readSync(r.dataId),d=i,p=a,f=l,m=c,{selectedIndices:g,selectedScores:x}=ZW(u,h,d,p,f,m);return[e.makeTensorInfo([g.length],"int32",new Int32Array(g)),e.makeTensorInfo([x.length],"float32",new Float32Array(x))]}const JW={kernelName:Uu,backendName:"webgl",kernelFunc:QW};class tU{constructor(t,e,s,o){this.variableNames=["indices"],this.outputShape=[t,e],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(${o}), float(${s}),
                      float(index == coords.y)));
      }
    `}}const eU={kernelName:il,backendName:"webgl",kernelFunc:n=>{const{inputs:t,backend:e,attrs:s}=n,{indices:o}=t,{dtype:r,depth:i,onValue:a,offValue:l}=s,c=K(o.shape),u=new tU(c,i,a,l),h=it({inputs:{x:o},backend:e,attrs:{shape:[c]}}),d=e.runWebGLProgram(u,[h],r);e.disposeIntermediateTensorInfo(h);const p=[...o.shape,i],f=it({inputs:{x:d},backend:e,attrs:{shape:p}});return e.disposeIntermediateTensorInfo(d),f}};function Kc(n){const{inputs:t,backend:e}=n,{x:s}=t;if(s.dtype==="complex64"){const o=pa({inputs:{input:s},backend:e}),r=Kc({inputs:{x:o},backend:e}),i=qc({inputs:{input:s},backend:e}),a=Kc({inputs:{x:i},backend:e}),l=Qs({inputs:{real:r,imag:a},backend:e});return e.disposeIntermediateTensorInfo(o),e.disposeIntermediateTensorInfo(r),e.disposeIntermediateTensorInfo(i),e.disposeIntermediateTensorInfo(a),l}else return ga({attrs:{shape:s.shape,dtype:s.dtype,value:s.dtype==="string"?"":0},backend:e})}const nU={kernelName:Il,backendName:"webgl",kernelFunc:Kc};function nw(n){const{inputs:t,backend:e}=n,{x:s}=t;if(s.dtype==="string")throw new Error("onesLike is not supported under string dtype");if(s.dtype==="complex64"){const o=pa({inputs:{input:s},backend:e}),r=nw({inputs:{x:o},backend:e}),i=qc({inputs:{input:s},backend:e}),a=Kc({inputs:{x:i},backend:e}),l=Qs({inputs:{real:r,imag:a},backend:e});return e.disposeIntermediateTensorInfo(o),e.disposeIntermediateTensorInfo(r),e.disposeIntermediateTensorInfo(i),e.disposeIntermediateTensorInfo(a),l}else return ga({attrs:{shape:s.shape,dtype:s.dtype,value:1},backend:e})}const sU={kernelName:rl,backendName:"webgl",kernelFunc:nw};function oU(n){const{inputs:t,backend:e,attrs:s}=n,{axis:o}=s;if(t.length===1)return Fp({inputs:{input:t[0]},backend:e,attrs:{dim:o}});const r=t[0].shape,i=t[0].dtype;t.forEach(u=>{su(r,u.shape,"All tensors passed to stack must have matching shapes"),T(i===u.dtype,()=>"All tensors passed to stack must have matching dtypes")});const a=[],l=t.map(u=>{const h=Fp({inputs:{input:u},backend:e,attrs:{dim:o}});return a.push(h),h}),c=_y({inputs:l,backend:e,attrs:{axis:o}});return a.forEach(u=>e.disposeIntermediateTensorInfo(u)),c}const rU={kernelName:al,backendName:"webgl",kernelFunc:oU};class iU{constructor(t,e,s){this.variableNames=["x"],this.customUniforms=[{name:"value",type:"float"}],this.outputShape=e.map((c,u)=>c[0]+t[u]+c[1]);const o=t.length,r=Ut(o),i=e.map(c=>c[0]).join(","),a=e.map((c,u)=>c[0]+t[u]).join(","),l=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,o);if(o===1){this.userCode=`
        int start = ${i};
        int end = ${a};

        void main() {
          int outC = getOutputCoords();
          if (outC < start || outC >= end) {
            setOutput(value);
          } else {
            setOutput(getX(outC - start));
          }
        }
      `;return}this.userCode=`
      ${r} start = ${r}(${i});
      ${r} end = ${r}(${a});

      void main() {
        ${r} outC = getOutputCoords();
        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {
          setOutput(value);
        } else {
          ${r} coords = outC - start;
          setOutput(getX(${l}));
        }
      }
    `}}class aU{constructor(t,e,s){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"value",type:"float"}],this.outputShape=e.map((m,g)=>m[0]+t[g]+m[1]);const o=t.length,r=Ut(o),i=e.map(m=>m[0]).join(","),a=e.map((m,g)=>m[0]+t[g]).join(","),l=He("rc",o),c=He("source",o),u=`${l[o-1]} < ${this.outputShape[o-1]}`,h=o===1?"source":`vec2(${c.slice(-2).join()})`,d=[`${r} rc = outputLoc;`,`${l[o-1]} += 1;
       if(${u}) {
      `,o===1?"":`}
       rc = outputLoc;
       ${l[o-2]} += 1;
       if(${l[o-2]} < ${this.outputShape[o-2]}) {`,o===1?"":`  ${l[o-1]} += 1;
         if(${u}) {`],p=o===1?"rc < start || rc >= end":"any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))";let f="";for(let m=0,g=o===1?2:4;m<g;m++)f+=`
        ${d[m]}
        if (${p}) {
          result[${m}] = float(value);
        } else {
          ${r} source = rc - start;
          result[${m}] = getChannel(getX(${c.join()}), ${h});
        }
      `;f+=o===1?"} ":"}}",this.userCode=`
      const ${r} start = ${r}(${i});
      const ${r} end = ${r}(${a});

      void main() {
        ${r} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${f}
        setOutput(result);
      }
    `}}const sw=n=>{const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{paddings:r,constantValue:i}=s;if(K(o.shape)===0){const c=r.map((u,h)=>u[0]+o.shape[h]+u[1]);return ga({backend:e,attrs:{shape:c,value:i,dtype:o.dtype}})}const a=q().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new aU(o.shape,r,i):new iU(o.shape,r,i),l=[[i]];return e.runWebGLProgram(a,[o],o.dtype,l)},lU={kernelName:ll,backendName:"webgl",kernelFunc:sw};const cU=`
  if(a < 0.0 && floor(b) < b){
    return NAN;
  }
  if (b == 0.0) {
    return 1.0;
  }
  return (round(mod(b, 2.0)) != 1) ?
      pow(abs(a), b) : sign(a) * pow(abs(a), b);
`,uU=`
  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.
  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));
  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);
  vec4 result = multiplier * pow(abs(a), b);

  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS
  bvec4 isExpZero = equal(b, vec4(0.0));
  result.r = isExpZero.r ? 1.0 : result.r;
  result.g = isExpZero.g ? 1.0 : result.g;
  result.b = isExpZero.b ? 1.0 : result.b;
  result.a = isExpZero.a ? 1.0 : result.a;

  bvec4 isNaN1 = lessThan(a, vec4(0.0));
  bvec4 isNaN2 = lessThan(floor(b), b);
  bvec4 isNaN = bvec4(isNaN1.x && isNaN2.x, isNaN1.y && isNaN2.y, isNaN1.z && isNaN2.z, isNaN1.w && isNaN2.w);
  `+Oo+`
  return result;
`,hU=Ee({opSnippet:cU,packedOpSnippet:uU}),dU={kernelName:oi,backendName:"webgl",kernelFunc:hU};function pU(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,keepDims:i}=s,a=o.shape.length,l=[],c=vt(r,o.shape);let u=c;const h=Jt(u,a);let d=o;h!=null&&(d=qe({inputs:{x:o},backend:e,attrs:{perm:h}}),u=ie(u.length,a),l.push(d)),Ne("prod",u,a);let p;if(e.shouldExecuteOnCPU([d])){const f=e.texData.get(d.dataId).values,{outVals:m,outShape:g,outDtype:x}=XP(d.shape,d.dtype,f,u);p=e.makeTensorInfo(g,x,m)}else{const[f,m]=$e(d.shape,u),g=K(m),x=it({inputs:{x:d},backend:e,attrs:{shape:[-1,g]}}),b=ch(o.dtype),w=Mo(x,b,"prod",e);p=it({inputs:{x:w},backend:e,attrs:{shape:f}}),l.push(x),l.push(w)}if(i){l.push(p);const f=he(p.shape,c);p=it({inputs:{x:p},backend:e,attrs:{shape:f}})}return l.forEach(f=>e.disposeIntermediateTensorInfo(f)),p}const fU={kernelName:ul,backendName:"webgl",kernelFunc:pU};function mU(n){const{inputs:t,backend:e,attrs:s}=n,{paramsNestedSplits:o,paramsDenseValues:r,indices:i}=t,{outputRaggedRank:a}=s,l=o.map(x=>e.readSync(x.dataId)),c=o.map(x=>x.shape),u=e.readSync(r.dataId),h=e.readSync(i.dataId),[d,p,f]=KP(l,c,u,r.shape,r.dtype,h,i.shape,a),m=d.map(x=>e.makeTensorInfo([x.length],"int32",x)),g=e.makeTensorInfo(f,r.dtype,p);return m.concat([g])}const gU={kernelName:ef,backendName:"webgl",kernelFunc:mU};function xU(n){const{inputs:t,backend:e}=n,{starts:s,limits:o,deltas:r}=t,i=e.readSync(s.dataId),a=e.readSync(o.dataId),l=e.readSync(r.dataId),[c,u]=jP(i,s.shape,s.dtype,a,o.shape,l,r.shape),h=e.makeTensorInfo([c.length],"int32",c),d=e.makeTensorInfo([u.length],s.dtype,u);return[h,d]}const bU={kernelName:nf,backendName:"webgl",kernelFunc:xU};function yU(n){const{inputs:t,backend:e,attrs:s}=n,{shape:o,values:r,defaultValue:i,rowPartitionTensors:a}=t,{rowPartitionTypes:l}=s,c=e.readSync(o.dataId),u=e.readSync(r.dataId),h=e.readSync(i.dataId),d=a.map(g=>e.readSync(g.dataId)),p=a.map(g=>g.shape),[f,m]=YP(c,o.shape,u,r.shape,r.dtype,h,i.shape,d,p,l);return e.makeTensorInfo(f,r.dtype,m)}const wU={kernelName:sf,backendName:"webgl",kernelFunc:yU};const ow=n=>{const{backend:t,attrs:e}=n,{start:s,stop:o,step:r,dtype:i}=e,a=ZP(s,o,r,i);return t.makeTensorInfo([a.length],i,a)},CU={kernelName:Gu,backendName:"webgl",kernelFunc:ow};const $U=_t({opSnippet:"return 1.0 / x;"}),IU={kernelName:ri,backendName:"webgl",kernelFunc:$U};const vU=Dn+`
  return (x < 0.0) ? 0.0 : x;
`,kU=_t({opSnippet:vU,packedOpSnippet:`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`}),SU={kernelName:ii,backendName:"webgl",kernelFunc:kU};const NU=Dn+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,TU=_t({opSnippet:NU,packedOpSnippet:`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`}),EU={kernelName:ai,backendName:"webgl",kernelFunc:TU};class RU{constructor(t,e,s,o,r){this.variableNames=["A"],this.outputShape=[];const[i,a,l,c]=t;this.outputShape=[i,e,s,c];const u=[o&&e>1?a-1:a,o&&s>1?l-1:l],h=[o&&e>1?e-1:e,o&&s>1?s-1:s];let d;r?d="(vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC - vec2(0.5)":d="vec2(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${u[0]/h[0]},
          ${u[1]/h[1]});
      const vec2 inputShapeRC = vec2(${a}.0, ${l}.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = ${d};

        // Compute the four integer indices.
        ivec2 sourceFloorRC = ivec2(max(sourceFracIndexRC, vec2(0.0)));
        ivec2 sourceCeilRC = ivec2(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);
        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);
        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);
        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);

        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);

        float top = topLeft + (topRight - topLeft) * fracRC.y;
        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;
        float newValue = top + (bottom - top) * fracRC.x;

        setOutput(newValue);
      }
    `}}class AU{constructor(t,e,s,o,r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];const[i,a,l,c]=t;this.outputShape=[i,e,s,c];const u=[o&&e>1?a-1:a,o&&s>1?l-1:l],h=[o&&e>1?e-1:e,o&&s>1?s-1:s];let d;r?d="(vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC - vec3(0.5)":d="vec3(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${u[0]/h[0]},
          ${u[1]/h[1]},
          ${u[1]/h[1]});
      const vec3 inputShapeRC = vec3(${a}.0, ${l}.0,
                                     ${l}.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = ${d};

        // Compute the four integer indices.
        ivec3 sourceFloorRC = ivec3(max(sourceFracIndexRC, vec3(0.0)));
        ivec3 sourceCeilRC = ivec3(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ${c-1};
        bool hasNextRow = coords.z < ${s-1};

        // In parallel, construct four corners for all four components in
        // packed 2x2 cell.
        vec4 topLeft = vec4(
          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 bottomLeft = vec4(
          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 topRight = vec4(
          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec4 bottomRight = vec4(
          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);

        vec4 top = mix(topLeft, topRight, fracRC.yyzz);
        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);
        vec4 newValue = mix(top, bottom, fracRC.x);

        setOutput(newValue);
      }
    `}}function DU(n){const{inputs:t,backend:e,attrs:s}=n,{images:o}=t,{alignCorners:r,halfPixelCenters:i,size:a}=s,[l,c]=a,u=q().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new AU(o.shape,l,c,r,i):new RU(o.shape,l,c,r,i);return e.runWebGLProgram(u,[o],"float32")}const FU={kernelName:pl,backendName:"webgl",kernelFunc:DU};class _U{constructor(t,e,s){this.variableNames=["dy"],this.outputShape=[],this.outputShape=e;const[,o,r]=e,[,i,a]=t,l=[s&&i>1?o-1:o,s&&a>1?r-1:r],c=[s&&i>1?i-1:i,s&&a>1?a-1:a],u=l[0]/c[0],h=l[1]/c[1],d=1/u,p=1/h,f=Math.ceil(d)*2+2,m=Math.ceil(p)*2+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${u});
        const float widthScale = float(${h});

        const float invHeightScale = float(${d});
        const float invWidthScale = float(${p});

        const int winHeight = int(${f});
        const int winWidth = int(${m});

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(startRLerp - float(winHeight / 2));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(startCLerp - float(winWidth / 2));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ${i}) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ${a}) {
              continue;
            }

            float dxR = float(dyR) * heightScale;
            int topDxRIndex = int(floor(dxR));
            int bottomDxRIndex = int(min(ceil(dxR), ${o-1}.0));
            float dxRLerp = dxR - float(topDxRIndex);
            float inverseDxRLerp = 1.0 - dxRLerp;

            float dxC = float(dyC) * widthScale;
            int leftDxCIndex = int(floor(dxC));
            int rightDxCIndex = int(min(ceil(dxC), ${r-1}.0));
            float dxCLerp = dxC - float(leftDxCIndex);
            float inverseDxCLerp = 1.0 - dxCLerp;

            if (r == topDxRIndex && c == leftDxCIndex) {
              // topLeft
              accumulator +=
                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;
            }

            if (r == topDxRIndex && c == rightDxCIndex) {
              // topRight
              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;
            }

            if (r == bottomDxRIndex && c == leftDxCIndex) {
              // bottomLeft
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;
            }

            if (r == bottomDxRIndex && c == rightDxCIndex) {
              // bottomRight
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `}}function OU(n){const{inputs:t,backend:e,attrs:s}=n,{images:o,dy:r}=t,{alignCorners:i}=s,a=new _U(r.shape,o.shape,i);return e.runWebGLProgram(a,[r],r.dtype)}const MU={kernelName:Xu,backendName:"webgl",kernelFunc:OU};class LU{constructor(t,e,s,o,r){this.variableNames=["A"],this.outputShape=[];const[i,a,l,c]=t;this.outputShape=[i,e,s,c];const u=[o&&e>1?a-1:a,o&&s>1?l-1:l],h=[o&&e>1?e-1:e,o&&s>1?s-1:s],d=o?"0.5":"0.0";let p;r?p="max((vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC, vec2(0.0))":p="vec2(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${u[0]/h[0]},
          ${u[1]/h[1]});
      const vec2 inputShapeRC = vec2(${a}.0, ${l}.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = ${p};

        // Compute the coordinators of nearest neighbor point.
        ivec2 sourceNearestRC = ivec2(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${d})));
        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);

        setOutput(newValue);
      }
    `}}class PU{constructor(t,e,s,o,r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];const[i,a,l,c]=t;this.outputShape=[i,e,s,c];const u=[o&&e>1?a-1:a,o&&s>1?l-1:l],h=[o&&e>1?e-1:e,o&&s>1?s-1:s],d=o?"0.5":"0.0";let p;r?p="max((vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC, vec3(0.0))":p="vec3(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${u[0]/h[0]},
          ${u[1]/h[1]},
          ${u[1]/h[1]});
      const vec3 inputShapeRC = vec3(${a}.0, ${l}.0,
                                     ${l}.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = ${p};

        // Compute the coordinators of nearest neighbor point.
        ivec3 sourceNearestRC = ivec3(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${d})));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ${c-1};
        bool hasNextRow = coords.z < ${s-1};

        vec4 newValue = vec4(
          getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d),
          hasNextCol ? getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d + 1) : 0.0);

        setOutput(newValue);
      }
    `}}function BU(n){const{inputs:t,backend:e,attrs:s}=n,{images:o}=t,{alignCorners:r,halfPixelCenters:i,size:a}=s,[l,c]=a,u=q().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new PU(o.shape,l,c,r,i):new LU(o.shape,l,c,r,i);return e.runWebGLProgram(u,[o],o.dtype)}const zU={kernelName:dl,backendName:"webgl",kernelFunc:BU};class VU{constructor(t,e,s){this.variableNames=["dy"],this.outputShape=[],this.outputShape=e;const[,o,r]=e,[,i,a]=t,l=[s&&i>1?o-1:o,s&&a>1?r-1:r],c=[s&&i>1?i-1:i,s&&a>1?a-1:a],u=l[0]/c[0],h=l[1]/c[1],d=1/u,p=1/h,f=Math.ceil(d)*2+2,m=Math.ceil(p)*2+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${u});
        const float widthScale = float(${h});

        const float invHeightScale = float(${d});
        const float invWidthScale = float(${p});

        const int winHeight = int(${f});
        const int winWidth = int(${m});

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(floor(startRLerp - float(winHeight / 2)));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(floor(startCLerp - float(winWidth / 2)));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ${i}) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ${a}) {
              continue;
            }

            float sourceFracRow =
              float(${l[0]}) *
                (float(dyR) / float(${c[0]}));

            float sourceFracCol =
                float(${l[1]}) *
                  (float(dyC) / float(${c[1]}));

            int sourceNearestRow = int(min(
                float(int(${o}) - 1),
                ${s} ? float(round(sourceFracRow)) :
                                  float(floor(sourceFracRow))));

            int sourceNearestCol = int(min(
                float(int(${r}) - 1),
                ${s} ? float(round(sourceFracCol)) :
                                  float(floor(sourceFracCol))));

            if (r == sourceNearestRow && c == sourceNearestCol) {
              accumulator += getDy(b, dyR, dyC, d);
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `}}function WU(n){const{inputs:t,backend:e,attrs:s}=n,{images:o,dy:r}=t,{alignCorners:i}=s,a=new VU(r.shape,o.shape,i);return e.runWebGLProgram(a,[r],r.dtype)}const UU={kernelName:qu,backendName:"webgl",kernelFunc:WU};class GU{constructor(t,e){this.variableNames=["x"];const s=t.length;if(s>4)throw new Error(`WebGL backend: Reverse of rank-${s} tensor is not yet supported`);if(this.outputShape=t,s===1){this.userCode=`
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(${t[0]} - coord - 1));
        }
      `;return}const o=a=>e.indexOf(a)!==-1&&t[a]!==1?`${t[a]} - coords[${a}] - 1`:`coords[${a}]`,r=t.map((a,l)=>o(l)).join(","),i=Ut(s);this.userCode=`
      void main() {
        ${i} coords = getOutputCoords();
        setOutput(getX(${r}));
      }
    `}}class HU{constructor(t,e){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0;const s=t.length;if(s>4)throw new Error(`WebGL backend: Reverse of rank-${s} tensor is not yet supported`);this.outputShape=t;const o=He("rc",s),r=`${o[s-1]} + 1 < ${this.outputShape[s-1]}`,i=`${o[s-2]} + 1 < ${this.outputShape[s-2]}`,a=Ut(s);s===1?this.userCode=`
        void main(){
          int rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = getChannel(getX(${t[0]} - rc - 1),
            ${t[0]} - rc - 1);
          if(${r}){
              result.g = getChannel(getX(${t[0]} - (rc  + 1) - 1),
                ${t[0]} - (rc  + 1) - 1);
          }
          setOutput(result);
        }
      `:this.userCode=`
        void main() {
          ${a} rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = ${l(o.slice())};
          if(${r}){
            result.g = ${c(o.slice())};
          }
          if(${i}) {
            result.b = ${u(o.slice())};
            if(${r}) {
              result.a = ${h(o.slice())};
            }
          }
          setOutput(result);
        }
    `;function l(f){return d(f)}function c(f){return f[s-1]="("+f[s-1]+" + 1)",d(f)}function u(f){return f[s-2]="("+f[s-2]+" + 1)",d(f)}function h(f){return f[s-1]="("+f[s-1]+" + 1)",f[s-2]="("+f[s-2]+" + 1)",d(f)}function d(f){const m=t.map((b,w)=>p(w,f)),g=m.join(","),x=m.slice(-2).join(",");return`getChannel(getX(${g}), vec2(${x}))`}function p(f,m){return e.indexOf(f)!==-1&&t[f]!==1?`${t[f]} - ${m[f]} - 1`:`${m[f]}`}}}function qU(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{dims:r}=s,i=o.shape.length,a=vt(r,o.shape);if(i===0)return cn({inputs:{x:o},backend:e});const l=q().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new HU(o.shape,a):new GU(o.shape,a);return e.runWebGLProgram(l,[o],o.dtype)}const XU={kernelName:fl,backendName:"webgl",kernelFunc:qU};class KU{constructor(t,e){this.variableNames=["Image"],this.outputShape=[],this.customUniforms=[{name:"params",type:"vec4"}];const s=t[1],o=t[2];this.outputShape=t;let r="";typeof e=="number"?r=`float outputValue = ${e.toFixed(2)};`:r=`
        vec3 fill = vec3(${e.join(",")});
        float outputValue = fill[coords[3]];`,this.userCode=`
        void main() {
          ivec4 coords = getOutputCoords();
          int x = coords[2];
          int y = coords[1];
          float coordXFloat = (float(x) - params[0]) * params[3] -
            (float(y) - params[1]) * params[2];
          float coordYFloat = (float(x) - params[0]) * params[2] +
            (float(y) - params[1]) * params[3];
          int coordX = int(round(coordXFloat + params[0]));
          int coordY = int(round(coordYFloat + params[1]));
          ${r}
          if(coordX >= 0 && coordX < ${o} && coordY >= 0 && coordY < ${s}) {
            outputValue = getImage(coords[0], coordY, coordX, coords[3]);
          }
          setOutput(outputValue);
        }
    `}}const jU={kernelName:th,backendName:"webgl",kernelFunc:({inputs:n,attrs:t,backend:e})=>{const{image:s}=n,{radians:o,fillValue:r,center:i}=t,a=e,l=new KU(s.shape,r),[c,u]=od(i,s.shape[1],s.shape[2]),h=[[c,u,Math.sin(o),Math.cos(o)]];return a.runWebGLProgram(l,[s],s.dtype,h)}};const YU=_t({opSnippet:`
  // OpenGL ES does not support round function.
  // The algorithm is based on banker's rounding.
  float base = floor(x);
  if ((x - base) < 0.5) {
    return floor(x);
  } else if ((x - base) > 0.5) {
    return ceil(x);
  } else {
    if (mod(base, 2.0) == 0.0) {
      return base;
    } else {
      return base + 1.0;
    }
  }
`}),ZU={kernelName:li,backendName:"webgl",kernelFunc:YU};const QU=_t({opSnippet:"return inversesqrt(x);",cpuKernelImpl:QP}),JU={kernelName:ci,backendName:"webgl",kernelFunc:QU};class Op{constructor(t,e,s,o,r,i,a=!0,l=!1){this.variableNames=["updates","indices","defaultValue"],this.outputShape=i;const c=Ut(r.length),u=Ut(i.length);let h="";s===1?h="i":s===2&&(h="i, j");const d=`getIndices(${h})`;let p="";o===1?p="i":o===2&&(p="i, coords[1]");const f=`getUpdates(${p})`;let m="";l&&(m="coords[0], coords[1]");const g=`getDefaultValue(${m})`,x=e>1?"strides[j]":"strides";this.userCode=`
        ${c} strides = ${c}(${r});

        void main() {
          ${u} coords = getOutputCoords();
          float sum = 0.0;
          bool found = false;
          for (int i = 0; i < ${t}; i++) {
            int flattenedIndex = 0;
            for (int j = 0; j < ${e}; j++) {
              int index = round(${d});
              flattenedIndex += index * ${x};
            }
            if (flattenedIndex == coords[0]) {
              sum += ${f};
              found = true;
            }
          }
          setOutput(mix(${g}, sum, float(found)));
        }
      `}}class tG{constructor(t,e,s,o,r,i,a=!0,l=!1){this.variableNames=["updates","indices","defaultValue"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=i;const c=Ut(r.length),u=Ut(i.length);let h="";s===1?h="i":s===2&&(h="i, j");const d=`getIndices(${h})`;let p="";o===1?p="i":o===2&&(p="i, coords[1]");const f=`getUpdates(${p})`;let m="";l&&(m="coords[0], coords[1]");const g=`getDefaultValue(${m})`,x=e>1?"strides[j]":"strides",b=e>1?"strides[j + 1]":"strides";this.userCode=`
        ${c} strides = ${c}(${r});

        void main() {
          ${u} coords = getOutputCoords();
          vec4 sum = vec4(0.);
          vec4 found = vec4(0.);
          for (int i = 0; i < ${t}; i+=2) {
            ivec2 flattenedIndex = ivec2(0);
            for (int j = 0; j < ${e}; j+=2) {
              ivec4 index = round(${d});
              flattenedIndex += index.xz * ${x};
              if (j + 1 < ${e}) {
                flattenedIndex += index.yw * ${b};
              }
            }
            if (flattenedIndex[0] == coords[0] || flattenedIndex[1] == coords[0] ||
                flattenedIndex[0] == coords[0] + 1 || flattenedIndex[1] == coords[0] + 1) {
              vec4 updVals = ${f};
              if (flattenedIndex[0] == coords[0]) {
                sum.xy += updVals.xy;
                found.xy = vec2(1.);
              } else if (flattenedIndex[0] == coords[0] + 1) {
                sum.zw += updVals.xy;
                found.zw = vec2(1.);
              }
              if (flattenedIndex[1] == coords[0]) {
                sum.xy += updVals.zw;
                found.xy = vec2(1.);
              } else if (flattenedIndex[1] == coords[0] + 1) {
                sum.zw += updVals.zw;
                found.zw = vec2(1.);
              }
            }
          }
          setOutput(mix(${g}, sum, found));
        }
      `}}function eG(n){const{inputs:t,backend:e,attrs:s}=n,{indices:o,updates:r}=t,{shape:i}=s,{sliceRank:a,numUpdates:l,sliceSize:c,strides:u,outputSize:h}=bo(r,o,i),d=[h/c,c];if(h===0)return e.makeTensorInfo(i,o.dtype);const p=it({inputs:{x:o},backend:e,attrs:{shape:[l,a]}}),f=it({inputs:{x:r},backend:e,attrs:{shape:[l,c]}}),m=e.makeTensorInfo([],"float32",new Float32Array([0]));let g;q().getBool("WEBGL_PACK")?g=new tG(l,a,p.shape.length,f.shape.length,u,d):g=new Op(l,a,p.shape.length,f.shape.length,u,d);const x=e.runWebGLProgram(g,[f,p,m],f.dtype),b=it({inputs:{x},backend:e,attrs:{shape:i}});return e.disposeIntermediateTensorInfo(p),e.disposeIntermediateTensorInfo(f),e.disposeIntermediateTensorInfo(x),e.disposeIntermediateTensorInfo(m),b}const nG={kernelName:of,backendName:"webgl",kernelFunc:eG};class sG{constructor(t,e,s,o){this.variableNames=["sortedSequence","values"],this.customUniforms=[{name:"numInputs",type:"int"}],this.outputShape=[t,s];const r="while (left < right) {",i=`for (int i = 0; i < ${Math.ceil(Math.log2(e+1))}; ++i) { if (left >= right) break;`,a=q().getNumber("WEBGL_VERSION")===2?r:i,l=o==="left"?"<":"<=";this.userCode=`
       int findBound(int batch, float value) {
         int left = 0;
         int right = numInputs;
         int mid;
         ${a}
           mid = (left + right) / 2;
           if (getSortedSequence(batch, mid) ${l} value) {
             left = mid + 1;
           } else {
             right = mid;
           }
         }
         return right;
       }

       void main() {
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int valueIndex = coords[1];

         float value = getValues(batch, valueIndex);

         setOutput(float(findBound(batch, value)));
       }
     `}}function oG(n){const{inputs:t,backend:e,attrs:s}=n,{sortedSequence:o,values:r}=t,{side:i}=s,a=new sG(o.shape[0],o.shape[1],r.shape[1],i),l=[[o.shape[1]]];return e.runWebGLProgram(a,[o,r],"int32",l)}const rG={kernelName:af,backendName:"webgl",kernelFunc:oG};class iG{constructor(t,e,s){this.variableNames=["c","a","b"],this.outputShape=e;let o,r;if(s>4)throw Error(`Where for rank ${s} is not yet supported`);if(s===1)r="resRC",o="resRC";else{const a=["resRC.x","resRC.y","resRC.z","resRC.w"],l=[],c=[];for(let u=0;u<e.length;u++)c.push(`${a[u]}`),u<t&&l.push(`${a[u]}`);o=l.join(),r=c.join()}const i=Ut(s);this.userCode=`
      void main() {
        ${i} resRC = getOutputCoords();
        float cVal = getC(${o});
        if (cVal >= 1.0) {
          setOutput(getA(${r}));
        } else {
          setOutput(getB(${r}));
        }
      }
    `}}function aG(n){const{inputs:t,backend:e}=n,{condition:s,t:o,e:r}=t,i=new iG(s.shape.length,o.shape,o.shape.length);return e.runWebGLProgram(i,[s,o,r],sn(o.dtype,r.dtype))}const lG={kernelName:ml,backendName:"webgl",kernelFunc:aG};const cG=`
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = ${Jl};
  float scale = ${tc};
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`,uG=_t({opSnippet:cG}),hG={kernelName:ui,backendName:"webgl",kernelFunc:uG};const dG=yr+`
  return 1.0 / (1.0 + exp(-1.0 * x));
`,pG=_t({opSnippet:dG,packedOpSnippet:`
  vec4 result = 1.0 / (1.0 + exp(-1.0 * x));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,cpuKernelImpl:t3}),fG={kernelName:fi,backendName:"webgl",kernelFunc:pG};const mG=_t({opSnippet:`
  if (isnan(x)) { return 0.0; }
  return sign(x);
`}),gG={kernelName:pi,backendName:"webgl",kernelFunc:mG};const xG=yr+`
  return sin(x);
`,bG=`
  vec4 result = sin(x);
  bvec4 isNaN = isnan(x);
  ${Oo}
  return result;
`,yG=_t({opSnippet:xG,packedOpSnippet:bG}),wG={kernelName:hi,backendName:"webgl",kernelFunc:yG};const CG=_t({opSnippet:`
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`}),$G={kernelName:di,backendName:"webgl",kernelFunc:CG};const IG=_t({opSnippet:`
  float epsilon = 1.1920928955078125e-7;
  float threshold = log(epsilon) + 2.0;

  bool too_large = x > -threshold;
  bool too_small = x < threshold;

  float result;
  float exp_x = exp(x);

  if (too_large){
    result = x;
  }
  else if (too_small){
    result = exp_x;
  }
  else{
    result = log(exp_x + 1.0);
  }
  return result;
`}),vG={kernelName:mi,backendName:"webgl",kernelFunc:IG};const kG={kernelName:bl,backendName:"webgl",kernelFunc:n=>{const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{blockShape:r,paddings:i}=s;T(o.shape.length<=4,()=>"spaceToBatchND for rank > 4 with a WebGL backend not implemented yet");const a=r.reduce((x,b)=>x*b),l=[[0,0]];l.push(...i);for(let x=1+r.length;x<o.shape.length;++x)l.push([0,0]);const c=[],u=sw({inputs:{x:o},backend:e,attrs:{paddings:l,constantValue:0}}),h=Bi(u.shape,r,a,!1),d=zi(h.length,r.length,!1),p=Vi(u.shape,r,a,!1),f=it({inputs:{x:u},backend:e,attrs:{shape:h}}),m=qe({inputs:{x:f},backend:e,attrs:{perm:d}}),g=it({inputs:{x:m},backend:e,attrs:{shape:p}});return c.push(u),c.push(f),c.push(m),c.forEach(x=>e.disposeIntermediateTensorInfo(x)),g}};function SG(n){const{inputs:t,backend:e}=n,{indices:s,values:o,denseShape:r,defaultValue:i}=t;if(r.shape.length!==1)throw new Error(`Dense shape must be a vector, saw:
         ${r.shape}`);if(s.shape.length!==2)throw new Error(`Indices must be a matrix, saw:
         ${s.shape}`);if(o.shape.length!==1)throw new Error(`Values must be a vector, saw:
         ${o.shape}`);if(i.shape.length!==0)throw new Error(`Default value must be a scalar, saw:
        ${i.shape}`);const a=e.readSync(s.dataId),l=e.readSync(o.dataId),c=e.readSync(r.dataId),u=e.readSync(i.dataId)[0],[h,d,p,f,m]=n3(a,s.shape,s.dtype,l,o.dtype,c,u);return[e.makeTensorInfo(d,s.dtype,h),e.makeTensorInfo([d[0]],o.dtype,p),e.makeTensorInfo([f.length],"bool",new Uint8Array(f.map(g=>Number(g)))),e.makeTensorInfo([m.length],s.dtype,new Int32Array(m))]}const NG={kernelName:lf,backendName:"webgl",kernelFunc:SG};function TG(n){const{inputs:t,backend:e}=n,{inputIndices:s,inputShape:o,newShape:r}=t;if(s.shape.length!==2)throw new Error(`Input indices should be a matrix but received shape ${s.shape}`);if(o.shape.length!==1)throw new Error(`Input shape should be a vector but received shape ${o.shape}`);if(r.shape.length!==1)throw new Error(`Target shape should be a vector but received shape ${r.shape}`);const i=Array.from(e.readSync(o.dataId)),a=e.readSync(s.dataId),l=Array.from(e.readSync(r.dataId)),[c,u,h]=s3(a,s.shape,s.dtype,i,l);return[e.makeTensorInfo(u,s.dtype,c),e.makeTensorInfo([h.length],r.dtype,new Int32Array(h))]}const EG={kernelName:cf,backendName:"webgl",kernelFunc:TG};function RG(n){const{inputs:t,backend:e}=n,{data:s,indices:o,segmentIds:r}=t;if(s.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(o.shape.length!==1)throw new Error(`Indices should be a vector but received shape
              ${o.shape}`);if(r.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
              ${r.shape}`);const i=e.readSync(s.dataId),a=e.readSync(o.dataId),l=e.readSync(r.dataId),[c,u]=cy(i,s.shape,s.dtype,a,l,!0);return e.makeTensorInfo(u,s.dtype,c)}const AG={kernelName:uf,backendName:"webgl",kernelFunc:RG};function DG(n){const{inputs:t,backend:e}=n,{data:s,indices:o,segmentIds:r}=t;if(s.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(o.shape.length!==1)throw new Error(`Indices should be a vector but received shape
             ${o.shape}`);if(r.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
             ${r.shape}`);const i=e.readSync(s.dataId),a=e.readSync(o.dataId),l=e.readSync(r.dataId),[c,u]=cy(i,s.shape,s.dtype,a,l);return e.makeTensorInfo(u,s.dtype,c)}const FG={kernelName:hf,backendName:"webgl",kernelFunc:DG};function _G(n){const{inputs:t,backend:e,attrs:s}=n,{sparseIndices:o,sparseValues:r,defaultValue:i}=t,{outputShape:a}=s,{sliceRank:l,numUpdates:c,sliceSize:u,strides:h,outputSize:d}=bo(r,o,a),p=!1;if(r.dtype==="string"){const x=e.bufferSync(o),b=e.bufferSync(r),w=Ds(e.readSync(i.dataId)[0]),y=JP(x,b,a,d,u,c,l,h,w,p);return e.makeTensorInfo(a,y.dtype,y.values)}const f=new Op(c,l,o.shape.length,r.shape.length,h,[d,1],p),m=e.runWebGLProgram(f,[r,o,i],r.dtype),g=it({inputs:{x:m},backend:e,attrs:{shape:a}});return e.disposeIntermediateTensorInfo(m),g}const OG={kernelName:df,backendName:"webgl",kernelFunc:_G};function MG(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{numOrSizeSplits:r,axis:i}=s,a=vt(i,o.shape)[0],l=wd(o,r,a),c=o.shape.length,u=new Array(c).fill(0),h=o.shape.slice();return l.map(d=>{const p=[...h];p[a]=d;const f=wr({inputs:{x:o},backend:e,attrs:{begin:u,size:p}});return u[a]+=d,f})}const LG={kernelName:yl,backendName:"webgl",kernelFunc:MG};const rw="return sqrt(x);",PG=_t({opSnippet:rw,packedOpSnippet:rw,cpuKernelImpl:o3}),BG={kernelName:gi,backendName:"webgl",kernelFunc:PG};const zG=_t({opSnippet:"return x * x;"}),VG={kernelName:Ku,backendName:"webgl",kernelFunc:zG};const iw="return (a - b) * (a - b);",WG=Ee({opSnippet:iw,packedOpSnippet:iw}),UG={kernelName:xi,backendName:"webgl",kernelFunc:WG};function GG(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t;if(o.dtype!=="string")throw new Error("Input must be of datatype string");const r=e.readSync(o.dataId),i=ws(r),a=r3(i,"string",s);return e.makeTensorInfo(o.shape,"string",a)}const HG={kernelName:ju,backendName:"webgl",kernelFunc:GG};function qG({inputs:n,attrs:t,backend:e}){const{x:s}=n,o=Dn+`
    return x > 0.0 ? 1.0 : float(${t.alpha});
  `,r=new us(s.shape,o);return e.runWebGLProgram(r,[s],s.dtype)}const XG={kernelName:$i,backendName:"webgl",kernelFunc:qG};class KG{constructor(t,e,s){this.variableNames=["x"],this.outputShape=s;const o=s.length,r=Ut(s.length),i=Ut(s.length);let a="";if(o===1)a="coords * strides + begin";else{let l=0;a=s.map((c,u)=>(l++,s.length===1?`coords * strides[${u}] + begin[${u}]`:`coords[${l-1}] * strides[${u}] + begin[${u}]`)).join(",")}this.userCode=`
      ${r} begin = ${r}(${t});
      ${r} strides = ${r}(${e});

      void main() {
        ${i} coords = getOutputCoords();
        setOutput(getX(${a}));
      }
    `}}function jG(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{begin:r,end:i,strides:a,beginMask:l,endMask:c,ellipsisMask:u,newAxisMask:h,shrinkAxisMask:d}=s,{finalShapeSparse:p,finalShape:f,isIdentity:m,sliceDim0:g,isSimpleSlice:x,begin:b,end:w,strides:y}=ag(o.shape,r,i,a,l,c,u,h,d);let C;if(m)C=it({inputs:{x:o},backend:e,attrs:{shape:f}});else if(g||x){T(o.shape.length>=1,()=>`Input must have rank at least 1, got: ${o.shape.length}`);const v=og(b,w,y),N=wr({inputs:{x:o},backend:e,attrs:{begin:b,size:v}});C=it({inputs:{x:N},backend:e,attrs:{shape:f}}),e.disposeIntermediateTensorInfo(N)}else if(e.shouldExecuteOnCPU([o])){const N=e.readSync(o.dataId),S=kt(o.shape,o.dtype,N),k=i3(p,S,y,b);C=e.makeTensorInfo(f,o.dtype,k.values)}else{const N=new KG(b,y,p);C=e.runWebGLProgram(N,[o],o.dtype)}const I=it({inputs:{x:C},backend:e,attrs:{shape:f}});return e.disposeIntermediateTensorInfo(C),I}const YG={kernelName:Yu,backendName:"webgl",kernelFunc:jG};function ZG(n){const{inputs:t,backend:e,attrs:s}=n,{separator:o,nGramWidths:r,leftPad:i,rightPad:a,padWidth:l,preserveShortSequences:c}=s,{data:u,dataSplits:h}=t,d=e.readSync(u.dataId),p=e.readSync(h.dataId),[f,m]=a3(d,p,o,r,i,a,l,c);return[e.makeTensorInfo([f.length],"string",f),e.makeTensorInfo(h.shape,"int32",m)]}const QG={kernelName:pf,backendName:"webgl",kernelFunc:ZG};function JG(n){const{inputs:t,backend:e,attrs:s}=n,{skipEmpty:o}=s,{input:r,delimiter:i}=t;if(r.dtype!=="string")throw new Error("Input must be of datatype string");if(r.shape.length!==1)throw new Error(`Input must be a vector, got shape: ${r.shape}`);if(i.shape.length!==0)throw new Error(`Delimiter must be a scalar, got shape: ${i.shape}`);const a=e.readSync(r.dataId),l=e.readSync(i.dataId)[0],[c,u,h]=l3(a,l,o),d=u.length;return[e.makeTensorInfo([d,2],"int32",c),e.makeTensorInfo([d],"string",u),e.makeTensorInfo([2],"int32",new Int32Array(h))]}const tH={kernelName:ff,backendName:"webgl",kernelFunc:JG};function eH(n){const{inputs:t,backend:e,attrs:s}=n,{numBuckets:o}=s,{input:r}=t;if(r.dtype!=="string")throw new Error("Input must be of datatype string");if(o<=0)throw new Error("Number of buckets must be at least 1");const i=e.readSync(r.dataId),a=c3(i,o);return e.makeTensorInfo(r.shape,"int32",a)}const nH={kernelName:mf,backendName:"webgl",kernelFunc:eH};const sH=_t({opSnippet:"return tan(x);"}),oH={kernelName:yi,backendName:"webgl",kernelFunc:sH};const rH=_t({opSnippet:`
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`}),iH={kernelName:wi,backendName:"webgl",kernelFunc:rH};function aH(n){const{inputs:t,backend:e,attrs:s}=n,{tensor:o,indices:r,updates:i}=t,{sliceRank:a,numUpdates:l,sliceSize:c,strides:u,outputSize:h}=bo(i,r,o.shape),d=[h/c,c];if(h===0)return e.makeTensorInfo(o.shape,r.dtype);const p=it({inputs:{x:r},backend:e,attrs:{shape:[l,a]}}),f=it({inputs:{x:i},backend:e,attrs:{shape:[l,c]}}),m=it({inputs:{x:o},backend:e,attrs:{shape:d}}),g=new Op(l,a,p.shape.length,f.shape.length,u,d,!1,!0),x=e.runWebGLProgram(g,[f,p,m],m.dtype),b=it({inputs:{x},backend:e,attrs:{shape:o.shape}});return e.disposeIntermediateTensorInfo(p),e.disposeIntermediateTensorInfo(f),e.disposeIntermediateTensorInfo(m),e.disposeIntermediateTensorInfo(x),b}const lH={kernelName:rf,backendName:"webgl",kernelFunc:aH};class cH{constructor(t,e){this.variableNames=["A"];const s=new Array(t.length);for(let i=0;i<s.length;i++)s[i]=t[i]*e[i];this.outputShape=s,this.rank=s.length;const o=Ut(this.rank),r=uH(t);this.userCode=`
      void main() {
        ${o} resRC = getOutputCoords();
        setOutput(getA(${r}));
      }
    `}}function uH(n){const t=n.length;if(t>5)throw Error(`Tile for rank ${t} is not yet supported`);if(t===1)return`imod(resRC, ${n[0]})`;const e=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u"],s=[];for(let o=0;o<n.length;o++)s.push(`imod(${e[o]}, ${n[o]})`);return s.join()}function aw(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{reps:r}=s;if(o.dtype==="string"||o.shape.length>5){const l=e.readSync(o.dataId),c=o.dtype==="string"?l.map(d=>Ds(d)):l,u=kt(o.shape,o.dtype,c),h=h3(u,r);return e.makeTensorInfo(h.shape,h.dtype,h.values)}const i=new cH(o.shape,r);return e.runWebGLProgram(i,[o],o.dtype)}const hH={kernelName:Ci,backendName:"webgl",kernelFunc:aw};class dH{constructor(t){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"negativeInf",type:"float"},{name:"dir",type:"int"},{name:"inc",type:"int"}],this.outputShape=t,this.userCode=`
       void main() {
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int elemIdx = coords[1];

         // We compare elements pair-wise within a group of size 2 * inc.
         // The comparing rule for each group alternates between ascending
         // and descending. Within each group, we compare each pair at
         // positions i and i+inc. To decide whether an element at position i
         // is x0 or x1, we mod it by 2 * inc, if the result is smaller than
         // inc, it is in the first half of the group, we denote it as x0,
         // otherwise we denote it as x1.
         // For example, as shown in the Bitonic top K paper referenced above,
         // Figure5(a) shows that element[1] is in the
         // second half of the group when group size is 2, but it is in the
         // first half of the group when group size is 4.

         bool isFirstInPair = imod(elemIdx, 2 * inc) < inc;
         int i = isFirstInPair ? elemIdx : elemIdx - inc;

         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));
         int i1 = firstPass == 1 ? i + inc : int(getIndices(batch, i + inc));
         float x0 = i0 < n ? getX(batch, i0) : negativeInf;
         float x1 = i1 < n ? getX(batch, i1) : negativeInf;

         // Denotes which direction indices are in (ascending or descending).
         bool reverse = imod(elemIdx, 2 * dir) >= dir;
         bool isGreater = x0 > x1 || (x0 == x1 && i1 > i0);
         if (reverse == isGreater) { // Elements in opposite order of direction
           int iTemp = i0;
           i0 = i1;
           i1 = iTemp;
         }
         if (isFirstInPair) {
            setOutput(float(i0));
         } else {
            setOutput(float(i1));
         }
       }
     `}}class pH{constructor(t){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"k",type:"int"}],this.outputShape=t,this.userCode=`
    void main() {
         // Takes max of indices (0, k), (1, k + 1), (2, k + 2) ...
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int elemIdx = coords[1];

         // The output size is half of the previous size.
         // If the previous sequence is | | | | _ _ _ _  | | | |  _ _ _ _ (k=4),
         // we only need to output the indices at positions |, the indices at
         // positions _ can be thrown away, see Figure5(b) After Phase 2
         // (Merge phase) in the Bitonic Top K paper referenced above.
         // For example, the paper shows we only need to output the orange bars.
         // The output sequence should look like this | | | | | | | |.
         // Because the sequence is halved, to map the output index back
         // to the previous sequence to find the corresponding value,
         // we need to double the index. When we double the index,
         // we basically interpolate a position, so 2i looks like
         // | _ | _ | _ | _ | _ | _ | _. We move the | to the first k position
         // of each 2k positions by - elemIdx % k. E.g. for output at
         // index 4,5,6,7, we want to get the corresponding element at
         // original index 8,9,10,11, for output at index 8,9,10,11,
         // we want to get the corresponding element at original index
         // 16,17,18,19, so on and so forth.

         int i = elemIdx < k ? elemIdx : (elemIdx * 2 - imod(elemIdx, k));
         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));
         int i1 = firstPass == 1 ? i + k : int(getIndices(batch, i + k));

         float x0 = getX(batch, i0);
         float x1 = i1 < n ? getX(batch, i1) : x0;

         setOutput(x0 >= x1 ? float(i0) : float(i1));
       }
     `}}function Lo(n,t){t!==null&&n.disposeIntermediateTensorInfo(t)}function lw(n){let t=1;for(;t<n;)t*=2;return t}function fH(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{k:r,sorted:i}=s,a=q().getNumber("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD"),l=q().getNumber("TOPK_K_CPU_HANDOFF_THRESHOLD"),c=o.shape,u=c[c.length-1];if(e.shouldExecuteOnCPU([o])||u<a||r>l){const k=e.readSync(o.dataId),[$,E]=d3(k,c,o.dtype,r,i);return[e.makeTensorInfo($.shape,$.dtype,$.values),e.makeTensorInfo(E.shape,E.dtype,E.values)]}if(r===0)return c[c.length-1]=0,[e.makeTensorInfo(c,o.dtype,[]),e.makeTensorInfo(c,"int32",[])];if(u===1)return[o,ga({attrs:{shape:c,dtype:"int32",value:0},backend:e})];const h=e.texData.get(o.dataId),d=h!==null&&h.isPacked,p=d?e.unpackTensor(o):o,m=K(c)/u,g=it({inputs:{x:p},attrs:{shape:[m,u]},backend:e});d&&Lo(e,p);const x=lw(r),b=lw(u);let w=null;const y=()=>w===null?[g,g]:[g,w],C=(k,$,E)=>{const R=y(),A=new dH(E),_=[[u],[w===null?1:0],[Number.NEGATIVE_INFINITY],[k],[$]],B=w;w=e.runWebGLProgram(A,R,"int32",_),Lo(e,B)};for(let k=1;k<x;k*=2){const $=k*2;for(let E=k;E>=1;E/=2)C($,E,[m,b])}for(let k=b;k>x;k/=2){const $=y(),E=new pH([m,k/2]),A=[[u],[w===null?1:0],[x]],F=w;w=e.runWebGLProgram(E,$,"int32",A),Lo(e,F);const _=x/2,B=_*2;for(let O=_;O>=1;O/=2)C(B,O,w.shape)}let I=w;w=wr({inputs:{x:w},backend:e,attrs:{begin:0,size:[m,r]}}),Lo(e,I);let v=Yy({inputs:{x:g,indices:w},backend:e,attrs:{axis:1,batchDims:1}});Lo(e,g);const N=c.slice(0,-1);N.push(r),I=w,w=it({inputs:{x:w},attrs:{shape:N},backend:e}),Lo(e,I);const S=v;return v=it({inputs:{x:v},attrs:{shape:N},backend:e}),Lo(e,S),[v,w]}const mH={kernelName:Zu,backendName:"webgl",kernelFunc:fH};class gH{constructor(t,e,s,o,r,i){this.variableNames=["Image","Transforms"],this.outputShape=i;const a=s==="nearest"?1:2;let l;switch(o){case"constant":l=1;break;case"reflect":l=2;break;case"wrap":l=3;break;case"nearest":l=4;break;default:l=1;break}this.userCode=`
            float mapCoord(float outCoord, float len) {
              float inCoord = outCoord;
              if(${l} == 2) {
                if (inCoord < 0.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz2 = 2.0 * len;
                    if (inCoord < sz2) {
                      inCoord = sz2 * float(int(float(-inCoord / sz2))) +
                      inCoord;
                    }
                    inCoord = inCoord < -len ? inCoord + sz2 : -inCoord - 1.0;
                  }
                } else if (inCoord > len - 1.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz2 = 2.0 * len;
                    inCoord -= sz2 * float(int(float(inCoord / sz2)));
                    if (inCoord >= len) {
                      inCoord = sz2 - inCoord - 1.0;
                    }
                  }
                }
                return clamp(inCoord, 0.0, len - 1.0);
              } else if (${l} == 3) {
                if (inCoord < 0.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz = len - 1.0;
                    inCoord += len * (float(int(float(-inCoord / sz))) + 1.0);
                  }
                } else if (inCoord > len - 1.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz = len - 1.0;
                    inCoord -= len * float(int(float(inCoord / sz)));
                  }
                }
                return clamp(inCoord, 0.0, len - 1.0);
              } else if (${l} == 4) {
                return clamp(outCoord, 0.0, len - 1.0);
              } else {
                return outCoord;
              }
            }

            float readWithFillValue(int batch, int coordY, int coordX,
              int channel) {
              float outputValue;
              if (0 <= coordY && coordY < ${t} && 0 <= coordX && coordX < ${e}) {
                  outputValue = getImage(batch, coordY, coordX, channel);
              } else {
                outputValue = float(${r});
              }
              return outputValue;
            }

            void main() {
              ivec4 coords = getOutputCoords();
              float outputValue;
              int batch = coords[0];
              int x = coords[2];
              int y = coords[1];
              int channel = coords[3];
              float xf = float(x);
              float yf = float(y);
              float a1 = getTransforms(batch, 0);
              float a2 = getTransforms(batch, 1);
              float a3 = getTransforms(batch, 2);
              float b1 = getTransforms(batch, 3);
              float b2 = getTransforms(batch, 4);
              float b3 = getTransforms(batch, 5);
              float c1 = getTransforms(batch, 6);
              float c2 = getTransforms(batch, 7);
              float projection = c1 * xf + c2 * yf + 1.0;
              if (projection == 0.0) {
                outputValue = float(${r});
              } else {
                float inX = (a1 * xf + a2 * yf + a3) / projection;
                float inY = (b1 * xf + b2 * yf + b3) / projection;
                float mapX = mapCoord(inX, float(${e}));
                float mapY = mapCoord(inY, float(${t}));

                if (${a} == 1) {
                  int coordY = int(round(mapY));
                  int coordX = int(round(mapX));
                  outputValue = readWithFillValue(batch, coordY, coordX,
                    channel);
                } else {
                  float yFloor = floor(mapY);
                  float xFloor = floor(mapX);
                  float yCeil = yFloor + 1.0;
                  float xCeil = xFloor + 1.0;
                  float valueYFloor = (xCeil - mapX) *
                  readWithFillValue(batch, int(yFloor), int(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, int(yFloor), int(xCeil), channel);
                  float valueYCeil = (xCeil - mapX) *
                  readWithFillValue(batch, int(yCeil), int(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, int(yCeil), int(xCeil), channel);
                  outputValue = (yCeil - mapY) * valueYFloor +
                  (mapY - yFloor) * valueYCeil;
                }
              }
              setOutput(outputValue);
            }
        `}}function xH(n){const{inputs:t,backend:e,attrs:s}=n,{image:o,transforms:r}=t,{interpolation:i,fillMode:a,fillValue:l,outputShape:c}=s,[u,h,d,p]=o.shape,[f,m]=c!=null?c:[h,d],g=[u,f,m,p],x=new gH(h,d,i,a,l,g);return e.runWebGLProgram(x,[o,r],"float32")}const bH={kernelName:Qu,backendName:"webgl",kernelFunc:xH};function yH(n){const{inputs:t,attrs:e,backend:s}=n,{axis:o}=e,{x:r}=t;ca(r,"unique"),console.warn("WARNING: ","UI might be locked temporarily as data is being downloaded");const i=s.readSync(r.dataId),{outputValues:a,outputShape:l,indices:c}=p3(i,o,r.shape,r.dtype);return[s.makeTensorInfo(l,r.dtype,a),s.makeTensorInfo([c.length],"int32",c)]}const wH={kernelName:Ju,backendName:"webgl",kernelFunc:yH};function CH(n){const{inputs:t,backend:e,attrs:s}=n,{value:o}=t;let{axis:r}=s;r<0&&(r+=o.shape.length);const i=o,a=i.shape.length,l=o.shape[r],c=new Array(a-1);let u=0;for(let m=0;m<a;m++)m!==r&&(c[u++]=i.shape[m]);const h=[],d=new Array(a).fill(0),p=i.shape.slice();p[r]=1;const f=new Array(l);for(let m=0;m<f.length;m++){d[r]=m;const g=wr({inputs:{x:i},backend:e,attrs:{begin:d,size:p}}),x=it({inputs:{x:g},backend:e,attrs:{shape:c}});f[m]=x,h.push(g)}return h.forEach(m=>e.disposeIntermediateTensorInfo(m)),f}const $H={kernelName:Cl,backendName:"webgl",kernelFunc:CH};class IH{constructor(t,e){this.variableNames=["x","segmentIds"];const s=t.windowSize,o=t.batchSize,r=t.inSize,i=t.numSegments,a=i*Math.ceil(r/s);this.outputShape=[o,a];const l="0.0",c="sumValue",u=Math.floor(s/4)*4,h=s%4,d=`
        sumValue += dot(values, segFilter);
    `;let p="";r%s>0&&(p=`
        if (inIdx < 0 || inIdx >= ${r}) {
          return initializationValue;
        }
      `);let f="";r%s>0&&(f=`
        if (inIdx < 0 || inIdx >= ${r}) {
          return -1.0;
        }
      `),this.userCode=`
      const float initializationValue = ${l};

      float getValue(int batch, int inIdx) {
        ${p}
        return getX(batch, inIdx);
      }

      float getSegmentIdAtIndex(int inIdx) {
        ${f}
        return getSegmentIds(inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = int(floor(float(outIdx) / float(
          ${i})) * float(${s}));
        int currentSeg = int(mod(float(outIdx), float(${i})));

        float sumValue = 0.0;

        for (int i = 0; i < ${u}; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0
          );

          ${d}
        }

        int inIdx = inOffset + ${u};
        if (${h===1}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            0,
            0,
            0
          );

          ${d}
        } else if (${h===2}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
              0,
              0
          );

          ${d}
        } else if (${h===3}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            0
          );

          ${d}
        }
        setOutput(${c});
      }
    `}}function vH(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,segmentIds:r}=t,{numSegments:i}=s,a=o.shape.length,l=[];let c=0;const u=Jt([c],a);let h=o;u!=null&&(h=qe({inputs:{x:o},backend:e,attrs:{perm:u}}),l.push(h),c=ie(1,a)[0]);const d=l2(h.shape,c,i),p=K([h.shape[c]]),f=it({inputs:{x:h},backend:e,attrs:{shape:[-1,p]}});l.push(f);const m=ch(o.dtype),g=(y,C,I,v,N)=>{const S=y.shape[0],k=y.shape[1],$=a2(k,N),E={windowSize:$,inSize:k,batchSize:S,numSegments:N},R=new IH(E,C),A=e.compileAndRun(R,[y,I],v);if(l.push(A),A.shape[1]===N)return A;const F=ow({backend:e,attrs:{start:0,stop:N,step:1,dtype:"float32"}}),_=aw({inputs:{x:F},backend:e,attrs:{reps:[k/$]}});return l.push(F),l.push(_),g(A,C,_,v,N)},x=g(f,"unsortedSegmentSum",r,m,i),b=it({inputs:{x},backend:e,attrs:{shape:d}});let w=b;if(u!=null){l.push(b);const y=Ms(u);w=qe({inputs:{x:w},backend:e,attrs:{perm:y}})}return l.forEach(y=>e.disposeIntermediateTensorInfo(y)),w}const kH={kernelName:$l,backendName:"webgl",kernelFunc:vH};const SH=[oB,iB,cB,dB,fB,xB,yB,CB,kB,NB,RB,FB,MB,zB,UB,HB,XB,ZB,JB,ez,oz,uz,dz,gz,bz,Iz,kz,Ez,V3,Dz,Lz,Vz,Xz,Yz,Qz,t4,n4,i4,l4,u4,d4,f4,g4,y4,C4,k4,N4,R4,F4,O4,L4,z4,W4,H4,X4,K4,Y4,Q4,tV,nV,oV,iV,cV,dV,fV,xV,wV,$V,vV,z3,SV,Oz,TV,RV,DV,U3,_V,MV,PV,VV,GV,qV,KV,YV,JV,eW,sW,aW,cW,hW,mW,xW,yW,CW,IW,NW,RW,_W,zW,q3,GW,XW,YW,JW,yz,eU,sU,rU,lU,dU,H3,fU,gU,bU,wU,CU,wz,MW,IU,SU,EU,K3,FU,MU,zU,UU,XU,jU,ZU,JU,nG,rG,lG,hG,fG,gG,wG,$G,cz,PW,vG,kG,NG,EG,AG,FG,OG,LG,BG,VG,UG,HG,XG,YG,QG,tH,nH,LW,eB,oH,iH,lH,hH,mH,bH,nB,wH,$H,kH,nU];for(const n of SH)wf(n);class cw{idx(t,e,s,o){return s*o[0]*o[1]+e*o[0]+t}check_previous_slice(t,e,s,o,r,i,a,l,c,u){let h=0;if(!r)return 0;const d=t[this.idx(s,o,r,i)];if(a>=6){const p=this.idx(s,o,r-1,i);d===t[p]&&(c[h++]=e[p])}if(a>=18){if(s){const p=this.idx(s-1,o,r-1,i);d===t[p]&&(c[h++]=e[p])}if(o){const p=this.idx(s,o-1,r-1,i);d===t[p]&&(c[h++]=e[p])}if(s<i[0]-1){const p=this.idx(s+1,o,r-1,i);d===t[p]&&(c[h++]=e[p])}if(o<i[1]-1){const p=this.idx(s,o+1,r-1,i);d===t[p]&&(c[h++]=e[p])}}if(a===26){if(s&&o){const p=this.idx(s-1,o-1,r-1,i);d===t[p]&&(c[h++]=e[p])}if(s<i[0]-1&&o){const p=this.idx(s+1,o-1,r-1,i);d===t[p]&&(c[h++]=e[p])}if(s&&o<i[1]-1){const p=this.idx(s-1,o+1,r-1,i);d===t[p]&&(c[h++]=e[p])}if(s<i[0]-1&&o<i[1]-1){const p=this.idx(s+1,o+1,r-1,i);d===t[p]&&(c[h++]=e[p])}}return h?(this.fill_tratab(l,c,h,u),c[0]):0}do_initial_labelling(t,e,s){const o=new Uint32Array(32),r=new Uint32Array(32);let i=1;const a=8192;let l=a,c=new Uint32Array(l).fill(0);const u=new Uint32Array(e[0]*e[1]*e[2]).fill(0),h=new Uint32Array(27);for(let d=0;d<e[2];d++)for(let p=0;p<e[1];p++)for(let f=0;f<e[0];f++){let m=0;const g=t[this.idx(f,p,d,e)];if(g!==0){if(h[0]=this.check_previous_slice(t,u,f,p,d,e,s,c,o,r),h[0]&&(m+=1),s>=6){if(f){const x=this.idx(f-1,p,d,e);g===t[x]&&(h[m++]=u[x])}if(p){const x=this.idx(f,p-1,d,e);g===t[x]&&(h[m++]=u[x])}}if(s>=18){if(p&&f){const x=this.idx(f-1,p-1,d,e);g===t[x]&&(h[m++]=u[x])}if(p&&f<e[0]-1){const x=this.idx(f+1,p-1,d,e);g===t[x]&&(h[m++]=u[x])}}if(m)u[this.idx(f,p,d,e)]=h[0],this.fill_tratab(c,h,m,r);else{if(u[this.idx(f,p,d,e)]=i,i>=l){l+=a;const x=new Uint32Array(l);x.set(c),c=x}c[i-1]=i,i++}}}for(let d=0;d<i-1;d++){let p=d;for(;c[p]!==p+1;)p=c[p]-1;c[d]=p+1}return[i-1,c,u]}fill_tratab(t,e,s,o){let i=2147483647;for(let a=0;a<s;a++){let l=e[a];for(;t[l-1]!==l;)l=t[l-1];o[a]=l,i=Math.min(i,l)}for(let a=0;a<s;a++)t[o[a]-1]=i}translate_labels(t,e,s,o){const r=e[0]*e[1]*e[2];let i=0;const a=new Uint32Array(r).fill(0);for(let u=0;u<o;u++)i=Math.max(i,s[u]);const l=new Uint32Array(i).fill(0);let c=0;for(let u=0;u<r;u++)t[u]&&(l[s[t[u]-1]-1]||(c+=1,l[s[t[u]-1]-1]=c),a[u]=l[s[t[u]-1]-1]);return[c,a]}neighbor_winners(t,e,s,o,r=null,i=null){const a=e[0],l=e[1],c=e[2],u=a*l,h=!!(i&&r),d=h?new Int32Array(o+1).fill(-1):null,p=new Map,f=(x,b)=>{let w=p.get(x);w||(w=new Map,p.set(x,w)),w.set(b,(w.get(b)||0)+1)};for(let x=0;x<c;x++)for(let b=0;b<l;b++)for(let w=0;w<a;w++){const y=x*u+b*a+w,C=t[y];if(C===0||s[C])continue;h&&d[C]<0&&(d[C]=i(r[y]));let I;w>0&&(I=s[t[y-1]])&&f(C,I),w<a-1&&(I=s[t[y+1]])&&f(C,I),b>0&&(I=s[t[y-a]])&&f(C,I),b<l-1&&(I=s[t[y+a]])&&f(C,I),x>0&&(I=s[t[y-u]])&&f(C,I),x<c-1&&(I=s[t[y+u]])&&f(C,I)}const m=new Uint32Array(o+1).fill(0);let g=0;for(const[x,b]of p){const w=h?d[x]:0;let y=0,C=0;if(w>0){for(const[I,v]of b)i(I)===w&&(v>C||v===C&&(y===0||I<y))&&(C=v,y=I);y&&g++}if(!y)for(const[I,v]of b)(v>C||v===C&&(y===0||I<y))&&(C=v,y=I);m[x]=y}return h&&console.log(`[relabel] ${g}/${p.size} suppressed components resolved within their own class family (${p.size-g} fell back to the unrestricted neighbour vote)`),m}finalize_volume(t,e,s,o,r,i=null,a=null){const l=t.length,c=new Uint32Array(l).fill(0),u=r?this.neighbor_winners(t,e,s,o,i,a):null;let h=0;for(let d=0;d<l;d++){const p=t[d];if(p===0)continue;let f=s[p];!f&&u&&(f=u[p]),f&&(c[d]=f,f>h&&(h=f))}return[h,c]}diagnose_components(t,e,s,o,r={}){var S,k,$;const i=(S=r.topN)!=null?S:50,a=(k=r.minSize)!=null?k:1,l=($=r.label)!=null?$:"diag",c=o[0],u=o[1],h=o[2],d=c*u,p=new Uint32Array(e+1),f=new Uint32Array(e+1);for(let E=0;E<t.length;E++){const R=s[E];R&&(p[R]=t[E],f[R]++)}const m=new Map,g=new Uint32Array(e+1),x=new Uint32Array(e+1),b=(E,R)=>{let A=m.get(E);A||(A=new Map,m.set(E,A)),A.set(R,(A.get(R)||0)+1)};for(let E=0;E<h;E++)for(let R=0;R<u;R++)for(let A=0;A<c;A++){const F=E*d+R*c+A,_=s[F];if(!_)continue;const B=p[_],O=V=>{const G=s[V];if(G===_)return;x[_]++;const H=G?p[G]:0;H===0?g[_]++:H!==B&&b(_,H)};A>0&&O(F-1),A<c-1&&O(F+1),R>0&&O(F-c),R<u-1&&O(F+c),E>0&&O(F-d),E<h-1&&O(F+d)}const w=new Map,y=new Map;for(let E=1;E<=e;E++){const R=p[E];w.set(R,(w.get(R)||0)+1),(!y.has(R)||f[E]>y.get(R))&&y.set(R,f[E])}const C=[];for(let E=1;E<=e;E++){if(f[E]<a)continue;const R=p[E],A=m.get(E);let F=0,_=0,B=0;if(A)for(const[V,G]of A)B+=G,G>_&&(_=G,F=V);const O=x[E]||1;C.push({comp:E,class:R,size:f[E],largestOfClass:f[E]===y.get(R)?"Y":"n",compsInClass:w.get(R),domNeighbor:F,domFracForeign:B?+(_/B).toFixed(2):0,domFracBoundary:+(_/O).toFixed(2),bgFrac:+(g[E]/O).toFixed(2)})}C.sort((E,R)=>R.domFracForeign-E.domFracForeign||R.size-E.size);const I=(E,R)=>{const A=R.map(_=>Math.max(_.h.length,...E.map(B=>String(B[_.k]).length))),F=_=>_.map((B,O)=>String(B).padStart(A[O])).join("  ");return[F(R.map(_=>_.h)),...E.map(_=>F(R.map(B=>_[B.k])))].join(`
`)},v=[{k:"comp",h:"comp"},{k:"class",h:"class"},{k:"size",h:"size"},{k:"largestOfClass",h:"lrg"},{k:"compsInClass",h:"nComp"},{k:"domNeighbor",h:"domNbr"},{k:"domFracForeign",h:"encF"},{k:"domFracBoundary",h:"encB"},{k:"bgFrac",h:"bgF"}];console.log(`[${l}] total components=${e}, distinct classes=${w.size}
[${l}] island candidates (encF≈1 + small size + lrg=n ⇒ swallowed island):
`+I(C.slice(0,i),v));const N=[...w.entries()].map(([E,R])=>({class:E,components:R,maxCompSize:y.get(E)})).sort((E,R)=>R.components-E.components);return console.log(`[${l}] per-class component counts (components=1 ⇒ fully connected):
`+I(N.slice(0,30),[{k:"class",h:"class"},{k:"components",h:"comps"},{k:"maxCompSize",h:"maxSize"}])),C}largest_original_cluster_labels(t,e,s,o=null,r=!1,i=null){const a=t.length,l=new Uint32Array(e+1).fill(0),c=new Uint32Array(e+1).fill(0);for(let u=0;u<a;u++){const h=t[u],d=s[u];l[d]=h,c[d]++}for(let u=0;u<e+1;u++){const h=l[u];for(let d=0;d<e+1;d++)d!==u&&h===l[d]&&(c[u]<c[d]||c[u]===c[d]&&u<d)&&(l[u]=0)}return this.finalize_volume(s,o,l,e,r,t,i)}filter_clusters(t,e,s,o,r=null,i=!1,a=null){const l=t.length,c=new Uint32Array(e+1).fill(0),u=new Uint32Array(e+1).fill(0);for(let p=0;p<l;p++){const f=t[p],m=s[p];m>0&&(c[m]=f,u[m]++)}const h=new Uint8Array(e+1).fill(1);for(let p=1;p<=e;p++){const f=c[p];if(o==="all"||o.has&&o.has(f)){for(let g=1;g<=e;g++)if(p!==g&&c[g]===f){if(u[g]>u[p]){h[p]=0;break}else if(u[g]===u[p]&&g<p){h[p]=0;break}}}}const d=new Uint32Array(e+1).fill(0);for(let p=1;p<=e;p++)h[p]&&(d[p]=c[p]);return this.finalize_volume(s,r,d,e,i,t,a)}filter_clusters_by_ratio(t,e,s,o,r=null,i=!1,a=null){const l=t.length,c=new Uint32Array(e+1).fill(0),u=new Uint32Array(e+1).fill(0);for(let f=0;f<l;f++){const m=s[f];m>0&&(c[m]===0&&(c[m]=t[f]),u[m]++)}const h=new Map;for(let f=1;f<=e;f++){const m=c[f],g=u[f];(!h.has(m)||g>h.get(m))&&h.set(m,g)}const d=new Uint8Array(e+1).fill(0);for(let f=1;f<=e;f++){const m=c[f],g=u[f],x=h.get(m)||0;g>=x*o&&(d[f]=1)}const p=new Uint32Array(e+1).fill(0);for(let f=1;f<=e;f++)d[f]&&(p[f]=c[f]);return this.finalize_volume(s,r,p,e,i,t,a)}bwlabel(t,e,s=26,o=!1,r=!1){const i=Date.now(),a=e[0]*e[1]*e[2],l=new Uint32Array(a).fill(0);if(![6,18,26].includes(s))return console.log("bwlabel: conn must be 6, 18 or 26."),[0,l];if(e[0]<2||e[1]<2||e[2]<1)return console.log("bwlabel: img must be 2 or 3-dimensional"),[0,l];if(o)for(let f=0;f<a;f++)t[f]!==0&&(l[f]=1);else l.set(t);let[c,u,h]=this.do_initial_labelling(l,e,s);u===void 0&&(u=new Uint32Array(0));const[d,p]=this.translate_labels(h,e,u,c);if(console.log(s+" neighbor clustering into "+d+" regions in "+(Date.now()-i)+"ms"),r){const[f,m]=this.largest_original_cluster_labels(l,d,p);return[f,m]}return[d,p]}filter_clusters_by_rank(t,e,s,o,r=0,i=null,a=!1,l=null,c=!1,u=null){const h=t.length,d=new Uint32Array(e+1).fill(0),p=new Uint32Array(e+1).fill(0),f=l!=null&&Array.isArray(i)&&i.length===3,m=f?i[0]:0,g=f?i[1]:0,x=f?new Int32Array(e+1).fill(2147483647):null,b=f?new Int32Array(e+1).fill(-1):null,w=f?new Int32Array(e+1).fill(2147483647):null,y=f?new Int32Array(e+1).fill(-1):null,C=f?new Int32Array(e+1).fill(2147483647):null,I=f?new Int32Array(e+1).fill(-1):null;for(let E=0;E<h;E++){const R=s[E];if(R>0&&(d[R]===0&&(d[R]=t[E]),p[R]++,f)){const A=E%m,F=E/m|0,_=F%g,B=F/g|0;A<x[R]&&(x[R]=A),A>b[R]&&(b[R]=A),_<w[R]&&(w[R]=_),_>y[R]&&(y[R]=_),B<C[R]&&(C[R]=B),B>I[R]&&(I[R]=B)}}let v=null,N=0;if(f){let E=-1;for(let O=1;O<=e;O++)p[O]>E&&(E=p[O],N=O);const R=Math.max(2,Math.ceil(l)+4),A=m*g,F=new Int16Array(h).fill(-1);let _=[];for(let O=0;O<h;O++)s[O]===N&&(F[O]=0,_.push(O));for(let O=1;O<=R&&_.length;O++){const V=[];for(let G=0;G<_.length;G++){const H=_[G],j=H%m,et=(H/m|0)%g;j>0&&F[H-1]===-1&&(F[H-1]=O,V.push(H-1)),j<m-1&&F[H+1]===-1&&(F[H+1]=O,V.push(H+1)),et>0&&F[H-m]===-1&&(F[H-m]=O,V.push(H-m)),et<g-1&&F[H+m]===-1&&(F[H+m]=O,V.push(H+m)),H-A>=0&&F[H-A]===-1&&(F[H-A]=O,V.push(H-A)),H+A<h&&F[H+A]===-1&&(F[H+A]=O,V.push(H+A))}_=V}const B=R+1;v=new Float64Array(e+1).fill(B);for(let O=0;O<h;O++){const V=s[O];if(V>0&&V!==N){const G=F[O]>=0?F[O]:B;G<v[V]&&(v[V]=G)}}c&&console.log(`[rank-filter] brain comp=${N} size=${E} bbox A[${x[N]},${b[N]}] B[${w[N]},${y[N]}] C[${C[N]},${I[N]}] | maxGap=${l} scan=${R}`)}const S=new Map;for(let E=1;E<=e;E++){const R=d[E],A=p[E];S.has(R)||S.set(R,[]),S.get(R).push({i:E,size:A})}const k=new Uint8Array(e+1).fill(0);for(const[E,R]of S.entries()){R.sort((B,O)=>O.size-B.size);const A=R.length?R[0].size:0,F=r>0?A*r:0,_=Math.min(R.length,o);for(let B=0;B<_;B++){const O=R[B];if(O.size<F){c&&B>0&&console.log(`[rank-filter] class ${E} #${B}: size=${O.size} DROP (below ${(r*100).toFixed(0)}% floor)`);break}if(B>0&&f){const V=v[O.i],G=V<=l;if(c&&console.log(`[rank-filter] class ${E} #${B}: size=${O.size} surfDist=${V} -> ${G?"KEEP":"DROP (too far)"}`),!G)continue}k[O.i]=1}}const $=new Uint32Array(e+1).fill(0);for(let E=1;E<=e;E++)k[E]&&($[E]=d[E]);return this.finalize_volume(s,i,$,e,a,t,u)}}function NH(n,t=.01,e=.99){return J(this,null,function*(){const s=n.flatten(),o=s.shape[0],r=yield s.data();s.dispose();const i=Math.min(1e5,o);let a;if(i>=o)a=Array.from(r);else{a=new Array(i);for(let p=0;p<i;p++){const f=Math.floor(Math.random()*o);a[p]=r[f]}}a.sort((p,f)=>p-f);const l=a.length,c=Math.floor(l*t),u=Math.ceil(l*e)-1,h=a[c],d=a[u];return{qmin:h,qmax:d}})}function TH(n){return J(this,null,function*(){const t=n.max(),e=n.min();return yield n.sub(e).div(t.sub(e))})}function EH(n,t=.05,e=.95){return J(this,null,function*(){const{qmin:s,qmax:o}=yield NH(n,t,e),r=o-s,i=n.sub(s),a=i.div(r);return i.dispose(),a})}function RH(n,t,e,s){return J(this,null,function*(){console.log("Downloading segmentation data from GPU to CPU...");const o=yield n.data(),r=n.shape;if(console.log("Data download complete. Starting CPU processing."),s.isPostProcessEnable){console.log("Applying CPU-based connected-component labeling...");const i=performance.now(),a=new cw,l=[5,14,15],c=!!s.fillSuppressedWithNeighborLabel||l.includes(e.id),u=[5,14,15],h=y=>y>=1&&y<=34?1:y>=35&&y<=68?2:0,d=u.includes(e.id)?h:null,p=r[0]*r[1]*r[2],f=Math.max(1e5,Math.floor(p*.01)),[m,g]=a.bwlabel(o,r,6,!1,!1);if(m>f){const y=`Segmentation produced noise: ${m.toLocaleString()} disconnected regions (cap ${f.toLocaleString()}). The model output is unusable, so post-processing was aborted. Try re-running, switching backend (WebGPU/WebGL2), or another model.`;console.error("[postprocess] "+y);const C=new Error(y);throw C.code="SEGMENTATION_NOISE",C}let x=!1,b=!1;if([1,7].includes(e.id)?(x=!1,b=!1):[5,14,15].includes(e.id)?(x=!1,b=!0):[3,8,9].includes(e.id)?(x=!1,b=!1):(x=!0,b=!0),[1,7].includes(e.id)){const v=m,N=g,[S,k]=a.filter_clusters_by_rank(o,v,N,2,.02,r,c,8,!1,d);o.set(k)}else if(!b&&[3,8,9].includes(e.id)){const[y,C]=a.bwlabel(o,r,6,!0,!0);for(let $=0;$<o.length;$++)o[$]*=C[$];const[I,v]=a.bwlabel(o,r,6,!1,!1),N=new Set([1,2,5,6,13]),[S,k]=a.filter_clusters(o,I,v,N,r,c,d);o.set(k)}else if(!x&&b){s.diagnoseEnclosedComponents&&a.diagnose_components(o,m,g,r,{label:`model${e.id}`,topN:60});const[y,C]=a.largest_original_cluster_labels(o,m,g,r,c,d);o.set(C)}else{const[y,C]=a.bwlabel(o,r,6,x,b);if(x)for(let I=0;I<o.length;I++)o[I]*=C[I];else o.set(C)}const w=((performance.now()-i)/1e3).toFixed(4);console.log(`Connected-component labeling took: ${w} seconds.`)}switch(e.type){case"Brain_Masking":{const i=new Uint8Array(o.length);for(let a=0;a<o.length;a++)i[a]=o[a]!==0?1:0;return i}case"Brain_Extraction":{const i=new Uint8Array(o.length);for(let a=0;a<o.length;a++){const l=o[a]!==0?1:0;i[a]=t[a]*l}return i}default:return new Uint8Array(o)}})}const uw={WEBGPU:"webgpu",WEBGL_WEBWORKER:"webgl-webworker"};function hw(n,t){return{startTime:Date.now(),Model_Name:(n==null?void 0:n.modelName)||"Unknown",Execution_Mode:t,TF_Backend:t===uw.WEBGPU?"webgpu":"webgl",isModelFullVol:null,No_SubVolumes:1,Brainchop_Ver:"FullVolume",Input_Shape:null,Output_Shape:null,Channel_Last:null,Model_Param:null,Model_Layers:null,Actual_Labels:null,Expect_Labels:null,NumLabels_Match:null,Missing_Labels:null,Inference_t:null,Postprocess_t:null,Status:null,Error_Type:null,Extra_Err_Info:null}}function AH(n,t,e,s=null){n.Expect_Labels=t,n.Actual_Labels=e,n.NumLabels_Match=t===e,s&&s.length>0&&(n.Missing_Labels=s.join(", "))}function dw(n,t,e){n.Inference_t=t,n.Postprocess_t=e,n.Status="OK"}function DH(n,t,e=null){n.Inference_t=1/0,n.Postprocess_t=1/0,n.Status="Fail",n.Error_Type=(t==null?void 0:t.message)||String(t),e&&(n.Extra_Err_Info=e)}const xa=[1,3,5,7,13,19,31,19,13,7,5,3,1],FH={model16chan18cls:{dilations:xa,activation:"gelu_tanh",fullVolume:!0},model24chan18cls_gdice_prio:{dilations:xa,activation:"gelu_tanh",fullVolume:!0},model6chan3cls:{dilations:xa,activation:"gelu_tanh",fullVolume:!0},model24chan104cls_synth:{dilations:xa,activation:"gelu_tanh",fullVolume:!0},model32chan18cls:{dilations:xa,activation:"gelu_tanh",fullVolume:!1},mindgrab:{dilations:[16,8,4,2,1,16,8,4,2,1,16,8,4,2,1,16,8,4,2,1,16,8,4,2,1],activation:"gelu_tanh",fullVolume:!0},model5_gw_ae:{dilations:[1,2,4,8,16,8,4,2,1],activation:"relu",fullVolume:!0},model11_gw_ae:{dilations:[1,2,4,8,4,2,2,1],activation:"relu",noSafetensors:!0,fullVolume:!0},model30chan18cls:{dilations:[1,2,4,8,16,8,4,2,1],activation:"elu",fullVolume:!0},model30chan50cls:{dilations:[1,2,4,8,16,8,4,2,1],activation:"elu",fullVolume:!0}};function _H(n){const t=String(n.path||"").match(/\/models\/([^/]+)\//);return t?t[1]:null}function OH(n){const t=_H(n);if(!t)return null;const e=FH[t];return!e||e.noSafetensors?null:Sr({name:t},e)}function MH(n){const t=n&32768?-1:1,e=(n&31744)>>10,s=n&1023;return e===0?t*Math.pow(2,-14)*(s/1024):e===31?s?NaN:t*(1/0):t*Math.pow(2,e-15)*(1+s/1024)}function LH(n){const t=new DataView(n),e=Number(t.getBigUint64(0,!0)),s=JSON.parse(new TextDecoder().decode(new Uint8Array(n,8,e))),o=8+e,r={};for(const[i,a]of Object.entries(s)){if(i==="__metadata__"){r.__metadata__=a;continue}const[l,c]=a.data_offsets,u=a.shape.reduce((d,p)=>d*p,1);let h;if(a.dtype==="F32")h=new Float32Array(n.slice(o+l,o+c));else if(a.dtype==="F16"){const d=new Uint16Array(n.slice(o+l,o+c));h=new Float32Array(u);for(let p=0;p<u;p++)h[p]=MH(d[p])}else if(a.dtype==="BF16"){const d=new Uint16Array(n.slice(o+l,o+c));h=new Float32Array(u);const p=new Uint32Array(1),f=new Float32Array(p.buffer);for(let m=0;m<u;m++)p[0]=d[m]<<16,h[m]=f[0]}else throw new Error(`safetensors: unsupported dtype ${a.dtype} for tensor '${i}'`);if(h.length!==u)throw new Error(`safetensors: tensor '${i}' has ${h.length} values, shape says ${u}`);r[i]={dtype:a.dtype,shape:a.shape,data:h}}return r}function PH(n){const t=[],e=[],s=[];for(const[r,i]of Object.entries(n)){if(r==="__metadata__")continue;const a=r.match(/^m\.model\.(\d+)\.(weight|bias)$/);if(!a)continue;const l=Number(a[1]),c=a[2]==="weight";if(i.shape.length===5){const[u,h,d,p,f]=i.shape,g={idx:l,outC:u,inC:h,kd:d,kh:p,kw:f,is1x1:d===1&&p===1&&f===1,w:i.data,bias:null},x=t.find(b=>b.idx===l);x?Object.assign(x,g):t.push(g)}else i.shape.length===1&&s.push({idx:l,isW:c,data:i.data,len:i.shape[0]})}t.sort((r,i)=>r.idx-i.idx);for(const r of s){const i=t.find(l=>l.idx===r.idx);if(i&&!r.isW){i.bias=r.data;continue}if(i&&r.isW)continue;let a=e.find(l=>l.idx===r.idx);a||(a={idx:r.idx,scale:null,bias:null},e.push(a)),r.isW?a.scale=r.data:a.bias=r.data}e.sort((r,i)=>r.idx-i.idx);let o=null;return t.length&&t[t.length-1].is1x1&&(o=t.pop()),{convs:t,affines:e,classifier:o}}function BH(n,t){const e=t.cs,s=t.chan,{convs:o,affines:r,classifier:i}=n,a=p=>27*p*e;let l=0;const c=[];o.forEach((p,f)=>{const m=f===0?1:e,g={wq:l/4,inCS:m};l+=a(m),p.bias&&(g.biasQ=l/4,l+=e),c.push(g)}),r.forEach((p,f)=>{c[f]=c[f]||{},c[f].affQ=l/4,l+=e,c[f].affBiasQ=l/4,l+=e});let u=-1,h=-1;i&&(u=l,l+=s*t.nclass,l=Math.ceil(l/4)*4,i.bias&&(h=l,l+=t.nclass),l=Math.ceil(l/4)*4);const d=new Float32Array(l);if(o.forEach((p,f)=>{const m=c[f],g=m.inCS,x=m.wq*4,b=p.kd*p.kh*p.kw;if(p.outC>s||f>0&&p.inC>s)throw new Error(`layer ${f}: shape ${p.outC}x${p.inC} exceeds CHAN ${s}`);for(let w=0;w<p.outC;w++){for(let y=0;y<p.inC;y++)for(let C=0;C<p.kd;C++)for(let I=0;I<p.kh;I++)for(let v=0;v<p.kw;v++){const N=p.kd===3?C*9+I*3+v:0,S=(((w*p.inC+y)*p.kd+C)*p.kh+I)*p.kw+v;d[x+(N*g+y)*e+w]=p.w[S]}p.bias&&(d[m.biasQ*4+w]=p.bias[w])}if(b!==27&&b!==1)throw new Error(`layer ${f}: kernel ${p.kd}x${p.kh}x${p.kw} unsupported`)}),r.forEach((p,f)=>{const m=c[f];for(let g=0;g<s;g++)d[m.affQ*4+g]=p.scale?p.scale[g]:0,d[m.affBiasQ*4+g]=p.bias?p.bias[g]:0}),i)for(let p=0;p<t.nclass;p++){for(let f=0;f<s;f++)d[u+f*t.nclass+p]=i.w[p*i.inC+f];i.bias&&(d[h+p]=i.bias[p])}return{data:d,offsets:{layers:c,clsFloat:u,clsBiasFloat:h}}}function zH(n,t={}){const{convs:e,affines:s,classifier:o}=n,r=e[0].outC,i=Math.ceil(r/4)*4,a=e.some(c=>c.bias),l=Sr({chan:r,cs:i,planes:i/4,nclass:o?o.outC:0,nhidden:e.length-1,norm:s.length?"gn":a?"none":"gn",affine:s.length>0,convBias:a,classifierBias:!!(o&&o.bias),centeredVariance:!1,eps:1e-5},t);if(l.nclass>256)throw new Error(`classifier has ${l.nclass} classes; the RGBA8 label texture holds at most 256`);if(!l.activation)throw new Error("descriptor needs an explicit `activation`");if(!l.dilations)throw new Error("descriptor needs an explicit `dilations` array");if(l.dilations.length!==e.length)throw new Error(`descriptor has ${l.dilations.length} dilations for ${e.length} convs`);return l}const jc=256,VH=8,WH=255,Js=2048,UH=`#version 300 es
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}
`,vs=n=>{var t;return`#version 300 es
precision highp float;
precision highp int;
precision highp sampler2D;
precision highp sampler3D;
const int NX = ${n.nx};
const int NY = ${n.ny};
const int NZ = ${n.nz};
const int CS = ${n.cs};
const int P = ${n.planes};
const int CHAN = ${n.chan};
const int NCLASS = ${n.nclass};
const float EPS = ${(t=n.eps)!=null?t:1e-5};
`},$r=`uniform highp sampler2D wts;
vec4 wf(int q) {
  return texelFetch(wts, ivec2(q & ${WH}, q >> ${VH}), 0);
}
float ws(int i) { return wf(i >> 2)[i & 3]; }
`,ue=(n,t)=>Array.from({length:n},(e,s)=>t(s)).join(""),Yc=(n,t)=>ue(n,e=>`layout(location = ${e}) out vec4 ${t}${e};
`),ba=n=>`uniform highp sampler3D ${ue(n,t=>(t?", ":"")+"s"+t)};
`,Zc=(n,t)=>`  vec4 ${ue(n,e=>(e?", ":"")+t+e+" = vec4(0.0)")};
`,Qc=(n,t,e)=>ue(n,s=>`  ${t}${s} = ${e}${s};
`);function Jc(n){switch(n){case"gelu_tanh":return`float act(float x) {
  float u = clamp(0.7978845608028654 * (x + 0.044715 * x * x * x), -9.0, 9.0);
  return 0.5 * x * (1.0 + tanh(u));
}
`;case"gelu_tanh_approx":return`float mn_tanh(float x_in) {
  float x = clamp(x_in, -9.0, 9.0);
  float u = x * x;
  float p = -8.29118133e-14;
  p = p * u + 5.19263868e-11;
  p = p * u - 2.00294448e-08;
  p = p * u + 1.11017944e-05;
  p = p * u + 0.00309865153;
  p = p * u + 0.130791619;
  p = p * u + 0.99999994;
  float q = 0.000253859733;
  q = q * u + 0.024473751;
  q = q * u + 0.464124829;
  q = q * u + 1.0;
  return x * p / q;
}
float act(float x) {
  float u = 0.797884583 * (x + 0.044715 * (x * x * x));
  return (0.5 * x) * (1.0 + mn_tanh(u));
}
`;case"gelu_exp2_approx":return`float mn_fast_exp2(float x_in) {
  float x = x_in;
  if (!(x > -126.0)) x = -126.0;
  if (x > 126.0) x = 126.0;
  float f = floor(x);
  float r = x - f;
  float p = 0.000216128448;
  p = p * r + 0.00124678648;
  p = p * r + 0.0096754498;
  p = p * r + 0.0554852814;
  p = p * r + 0.240229305;
  p = p * r + 0.693147044;
  p = p * r + 1.0;
  float scale = uintBitsToFloat(uint((int(f) + 127) << 23));
  return p * scale;
}
float act(float x) {
  float u = x + 0.044715 * x * x * x;
  return x / (1.0 + mn_fast_exp2(-2.302208198144325 * u));
}
`;case"relu":return`float act(float x) { return max(x, 0.0); }
`;case"elu":return`float act(float x) { return x > 0.0 ? x : (exp(x) - 1.0); }
`;default:throw new Error(`webgl2 kernels: unknown activation '${n}'. Add it here deliberately -- do NOT fall back to a default; brainchopC records that silently substituting a GELU flavour ran the wrong function on four backends without erroring.`)}}const tu=`vec4 act4(vec4 v) { return vec4(act(v.x), act(v.y), act(v.z), act(v.w)); }
`;function GH(n){const t=n.planes,e=n.norm==="none";return vs(n)+`uniform highp sampler3D src;
`+$r+`uniform int uZ;
uniform int uDil;
uniform int uWQ0;
`+(e?`uniform int uBiasQ;
`+Jc(n.activation)+tu:"")+Yc(t,"o")+`void main() {
  ivec3 p = ivec3(int(gl_FragCoord.x), int(gl_FragCoord.y), uZ);
`+Zc(t,"a")+`  int tap = 0;
  for (int dz = -1; dz <= 1; ++dz) {
  for (int dy = -1; dy <= 1; ++dy) {
  for (int dx = -1; dx <= 1; ++dx) {
    ivec3 s = p + ivec3(dx, dy, dz) * uDil;
    bool ok = all(greaterThanEqual(s, ivec3(0))) &&
              s.x < NX && s.y < NY && s.z < NZ;
    float v = texelFetch(src, clamp(s, ivec3(0), ivec3(NX - 1, NY - 1, NZ - 1)), 0).r *
              (ok ? 1.0 : 0.0);
    int w = uWQ0 + tap * P;
`+ue(t,s=>`    a${s} += wf(w + ${s}) * v;
`)+`    ++tap;
  }}}
`+(e?ue(t,s=>`  a${s} = act4(a${s} + wf(uBiasQ + ${s}));
`):"")+Qc(t,"o","a")+`}
`}function HH(n){const t=n.planes,e=n.norm==="none",s=o=>`  { for (int i = 0; i < 4; ++i) {
      float v = q${o}[i];
      int w = b + (${o*4} + i) * P;
`+ue(t,r=>`      a${r} += wf(w + ${r}) * v;
`)+`    } }
`;return vs(n)+ba(t)+$r+`uniform int uZ;
uniform int uDil;
uniform int uWQ0;
`+(e?`uniform int uBiasQ;
`+Jc(n.activation)+tu:"")+Yc(t,"o")+`void main() {
  ivec3 p = ivec3(int(gl_FragCoord.x), int(gl_FragCoord.y), uZ);
`+Zc(t,"a")+`  int tap = 0;
  for (int dz = -1; dz <= 1; ++dz) {
  for (int dy = -1; dy <= 1; ++dy) {
  for (int dx = -1; dx <= 1; ++dx) {
    ivec3 s = p + ivec3(dx, dy, dz) * uDil;
    float m = (all(greaterThanEqual(s, ivec3(0))) &&
               s.x < NX && s.y < NY && s.z < NZ) ? 1.0 : 0.0;
    ivec3 sc = clamp(s, ivec3(0), ivec3(NX - 1, NY - 1, NZ - 1));
`+ue(t,o=>`    vec4 q${o} = texelFetch(s${o}, sc, 0) * m;
`)+`    int b = uWQ0 + tap * CS * P;
`+ue(t,s)+`    ++tap;
  }}}
`+(e?ue(t,o=>`  a${o} = act4(a${o} + wf(uBiasQ + ${o}));
`):"")+Qc(t,"o","a")+`}
`}function qH(n){const t=n.planes,e=n.norm==="none",s=o=>`  { for (int i = 0; i < 4; ++i) {
      float v = q${o}[i];
      float u = r${o}[i];
      int w = b + (${o*4} + i) * P;
`+ue(t,r=>`      vec4 W${r} = wf(w + ${r}); a${r} += W${r} * v; b${r} += W${r} * u;
`)+`    } }
`;return vs(n)+ba(t)+$r+`uniform int uZ;
uniform int uDil;
uniform int uWQ0;
`+(e?`uniform int uBiasQ;
`+Jc(n.activation)+tu:"")+Yc(t,"o")+ue(t,o=>`layout(location = ${t+o}) out vec4 n${o};
`)+`void main() {
  int x = int(gl_FragCoord.x);
  int y = int(gl_FragCoord.y);
`+Zc(t,"a")+Zc(t,"b")+`  int tap = 0;
  for (int dz = -1; dz <= 1; ++dz) {
  for (int dy = -1; dy <= 1; ++dy) {
  for (int dx = -1; dx <= 1; ++dx) {
    int sx = x + dx * uDil;
    int sy = y + dy * uDil;
    int za = uZ + dz * uDil;
    int zb = za + 1;
    bool okxy = sx >= 0 && sx < NX && sy >= 0 && sy < NY;
    float ma = (okxy && za >= 0 && za < NZ) ? 1.0 : 0.0;
    float mb = (okxy && zb >= 0 && zb < NZ) ? 1.0 : 0.0;
    int cx = clamp(sx, 0, NX - 1);
    int cy = clamp(sy, 0, NY - 1);
    ivec3 ca = ivec3(cx, cy, clamp(za, 0, NZ - 1));
    ivec3 cb = ivec3(cx, cy, clamp(zb, 0, NZ - 1));
`+ue(t,o=>`    vec4 q${o} = texelFetch(s${o}, ca, 0) * ma;
`)+ue(t,o=>`    vec4 r${o} = texelFetch(s${o}, cb, 0) * mb;
`)+`    int b = uWQ0 + tap * CS * P;
`+ue(t,s)+`    ++tap;
  }}}
`+(e?ue(t,o=>`  a${o} = act4(a${o} + wf(uBiasQ + ${o}));
  b${o} = act4(b${o} + wf(uBiasQ + ${o}));
`):"")+Qc(t,"o","a")+Qc(t,"n","b")+`}
`}const XH=n=>vs(n)+`uniform highp sampler3D src;
uniform int uRowBase;
layout(location = 0) out vec4 oSum;
layout(location = 1) out vec4 oSq;
void main() {
  int x = int(gl_FragCoord.x);
  int y = int(gl_FragCoord.y) - uRowBase;
  vec4 s = vec4(0.0), q = vec4(0.0);
  for (int z = 0; z < NZ; ++z) {
    vec4 v = texelFetch(src, ivec3(x, y, z), 0);
    s += v;
    q += v * v;
  }
  oSum = s; oSq = q;
}
`,KH=n=>vs(n)+`uniform highp sampler2D pSum, pSq;
layout(location = 0) out vec4 oSum;
layout(location = 1) out vec4 oSq;
void main() {
  int x = int(gl_FragCoord.x);
  int g = int(gl_FragCoord.y);
  vec4 s = vec4(0.0), q = vec4(0.0);
  for (int y = 0; y < NY; ++y) {
    s += texelFetch(pSum, ivec2(x, g * NY + y), 0);
    q += texelFetch(pSq,  ivec2(x, g * NY + y), 0);
  }
  oSum = s; oSq = q;
}
`,jH=n=>vs(n)+`uniform highp sampler2D pSum, pSq;
layout(location = 0) out vec4 oMean;
layout(location = 1) out vec4 oInv;
void main() {
  int g = int(gl_FragCoord.y);
  vec4 s = vec4(0.0), q = vec4(0.0);
  for (int x = 0; x < NX; ++x) {
    s += texelFetch(pSum, ivec2(x, g), 0);
    q += texelFetch(pSq,  ivec2(x, g), 0);
  }
  float n = float(NX) * float(NY) * float(NZ);
  vec4 mean = s / n;
  vec4 varr = max(q / n - mean * mean, vec4(0.0));
  oMean = mean;
  oInv = inversesqrt(varr + EPS);
}
`;function YH(n){const t=n.planes,e=s=>`  vec4 v${s} = (texelFetch(s${s}, p, 0) - texelFetch(pMean, ivec2(0, ${s}), 0))
              * texelFetch(pInv, ivec2(0, ${s}), 0);
`+(n.affine?`  v${s} = v${s} * wf(uAffQ + ${s}) + wf(uBiasQ + ${s});
`:"");return vs(n)+ba(t)+`uniform highp sampler2D pMean, pInv;
`+$r+(n.affine?`uniform int uAffQ;
uniform int uBiasQ;
`:"")+`uniform int uZ;
`+Jc(n.activation)+tu+Yc(t,"o")+`void main() {
  ivec3 p = ivec3(int(gl_FragCoord.x), int(gl_FragCoord.y), uZ);
`+ue(t,e)+ue(t,s=>`  o${s} = act4(v${s});
`)+`}
`}function ZH(n){const t=n.planes,e=ue(t,s=>s===0?`      float sv = c0[c];
`:`      if (c >= ${s*4}) sv = c${s}[c - ${s*4}];
`);return vs(n)+ba(t)+$r+`uniform int uWCls;
uniform int uWBias;
uniform int uHasBias;
out vec4 outColor;
void main() {
  int t = int(gl_FragCoord.y) * ${Js} + int(gl_FragCoord.x);
  vec4 lab = vec4(0.0);
  for (int j = 0; j < 4; ++j) {
    int v = t * 4 + j;
    if (v >= NX * NY * NZ) break;
    ivec3 p = ivec3(v % NX, (v / NX) % NY, v / (NX * NY));
`+ue(t,s=>`    vec4 c${s} = texelFetch(s${s}, p, 0);
`)+`    float bestv = -3.0e38;
    int best = 0;
    for (int k = 0; k < NCLASS; ++k) {
      float acc = uHasBias != 0 ? ws(uWBias + k) : 0.0;
      for (int c = 0; c < CHAN; ++c) {
`+e+`        acc += sv * ws(uWCls + c * NCLASS + k);
      }
      if (acc > bestv) { bestv = acc; best = k; }
    }
    lab[j] = float(best) / 255.0;
  }
  outColor = lab;
}
`}function QH(n){if(n.nclass>32)throw new Error("grouped tissue masks support at most 32 classes");const t=n.planes,s=`      float acc = uHasBias != 0 ? ws(uWBias + k) : 0.0;
      for (int c = 0; c < CHAN; ++c) {
${ue(t,o=>o===0?`      float sv = c0[c];
`:`      if (c >= ${o*4}) sv = c${o}[c - ${o*4}];
`)}        acc += sv * ws(uWCls + c * NCLASS + k);
      }
`;return vs(n)+ba(t)+$r+`uniform int uWCls;
uniform int uWBias;
uniform int uHasBias;
uniform int uZ;
uniform float uTemperature;
uniform float uSupportTemperature;
uniform highp uint uGrayMask;
uniform highp uint uWhiteMask;
uniform highp uint uCsfMask;
out vec4 outColor;
void main() {
  ivec3 p = ivec3(int(gl_FragCoord.x), int(gl_FragCoord.y), uZ);
`+ue(t,o=>`  vec4 c${o} = texelFetch(s${o}, p, 0);
`)+`  float maximum = -3.0e38;
  for (int k = 0; k < NCLASS; ++k) {
${s}    maximum = max(maximum, acc);
  }
  float denominator = 0.0;
  float supportDenominator = 0.0;
  float backgroundWeight = 0.0;
  vec3 numerator = vec3(0.0);
  float invTemperature = 1.0 / max(uTemperature, 0.000001);
  float invSupportTemperature = 1.0 / max(uSupportTemperature, 0.000001);
  for (int k = 0; k < NCLASS; ++k) {
${s}    float value = exp((acc - maximum) * invTemperature);
    float supportValue = exp((acc - maximum) * invSupportTemperature);
    denominator += value;
    supportDenominator += supportValue;
    if (k == 0) backgroundWeight = supportValue;
    uint bit = 1u << uint(k);
    if ((uGrayMask & bit) != 0u) numerator.r += value;
    if ((uWhiteMask & bit) != 0u) numerator.g += value;
    if ((uCsfMask & bit) != 0u) numerator.b += value;
  }
  float support = clamp(1.0 - backgroundWeight / supportDenominator, 0.0, 1.0);
  outColor = vec4(numerator / denominator, support);
}
`}function JH(n,t=8){if(n.planes>t)throw new Error(`${n.chan} channels need ${n.planes} draw buffers; this device has ${t}. This model cannot run on the native WebGL2 path here -- fall back to the tfjs channel-list path.`);const e={vertex:UH,convFirst:GH(n),convHidden:HH(n),classify:n.nclass>0?ZH(n):null,tissueProbability:n.nclass>0&&n.nclass<=32?QH(n):null};return n.norm==="gn"&&n.planes*2<=t&&(e.convHiddenVox2=qH(n)),n.norm==="gn"&&(e.momentsA=XH(n),e.momentsB=KH(n),e.momentsFinish=jH(n),e.norm=YH(n)),e}function tq(n,t,e=null){var c;const s=[],[o,r,i]=t;let a=e,l=null;try{if(!a){if(typeof OffscreenCanvas=="undefined")return{supported:!1,reasons:["OffscreenCanvas is unavailable in this context"]};l=new OffscreenCanvas(1,1),a=l.getContext("webgl2",{antialias:!1,depth:!1,stencil:!1,preserveDrawingBuffer:!1,powerPreference:"high-performance"})}if(!a)return{supported:!1,reasons:["no webgl2 context could be created"]};a.getExtension("EXT_color_buffer_float")||s.push("EXT_color_buffer_float is not available (no renderable float textures)");const h=a.getParameter(a.MAX_3D_TEXTURE_SIZE),d=a.getParameter(a.MAX_TEXTURE_SIZE),p=a.getParameter(a.MAX_DRAW_BUFFERS),f=a.getParameter(a.MAX_COLOR_ATTACHMENTS),m=Math.max(o,r,i);h<m&&s.push(`MAX_3D_TEXTURE_SIZE is ${h}, this volume needs ${m}`),p<n.planes&&s.push(`MAX_DRAW_BUFFERS is ${p}, ${n.chan} channels need ${n.planes}`),f<n.planes&&s.push(`MAX_COLOR_ATTACHMENTS is ${f}, ${n.chan} channels need ${n.planes}`),d<Js&&s.push(`MAX_TEXTURE_SIZE is ${d}, the label texture needs ${Js}`);let g=!1;const x=[];if(!s.length){for(;a.getError()!==a.NO_ERROR;);g=!0;for(let w=0;w<2*n.planes&&g;w++){const y=a.createTexture();x.push(y),a.bindTexture(a.TEXTURE_3D,y),a.texStorage3D(a.TEXTURE_3D,1,a.RGBA16F,o,r,i),(a.getError()!==a.NO_ERROR||a.isContextLost())&&(g=!1)}for(const w of x)a.deleteTexture(w);if(!g){const w=Math.round(2*n.planes*o*r*i*8/1048576);s.push(`could not allocate this model's ${w} MB activation working set (${2*n.planes} x RGBA16F ${o}x${r}x${i} 3D textures)`)}}const b=2*n.planes*o*r*i*8;return{supported:s.length===0,reasons:s,vox2:p>=2*n.planes&&f>=2*n.planes,renderer:eq(a),limits:{max3d:h,maxTex:d,maxDraw:p,maxAttach:f},activationBytes:b,allocates:g}}catch(u){return{supported:!1,reasons:[`probe threw: ${u.message}`]}}finally{l&&a&&((c=a.getExtension("WEBGL_lose_context"))==null||c.loseContext())}}function eq(n){const t=n.getExtension("WEBGL_debug_renderer_info");return t?n.getParameter(t.UNMASKED_RENDERER_WEBGL):n.getParameter(n.RENDERER)}function pw(n,t,e,s){const o=n.createShader(t);if(n.shaderSource(o,e),n.compileShader(o),!n.getShaderParameter(o,n.COMPILE_STATUS)){const r=n.getShaderInfoLog(o);throw n.deleteShader(o),new Error(`${s}: shader compile failed: ${r}`)}return o}function nq(n,t,e,s){const o=pw(n,n.VERTEX_SHADER,t,`${s}/vs`),r=pw(n,n.FRAGMENT_SHADER,e,`${s}/fs`),i=n.createProgram();if(n.attachShader(i,o),n.attachShader(i,r),n.linkProgram(i),n.deleteShader(o),n.deleteShader(r),!n.getProgramParameter(i,n.LINK_STATUS)){const a=n.getProgramInfoLog(i);throw n.deleteProgram(i),new Error(`${s}: program link failed: ${a}`)}return i}function Mp(n,t,e,s,o){const r=n.createTexture();return n.bindTexture(n.TEXTURE_3D,r),n.texParameteri(n.TEXTURE_3D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_3D,n.TEXTURE_MAG_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_3D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_3D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_3D,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),n.texStorage3D(n.TEXTURE_3D,1,o,t,e,s),r}function ks(n,t,e,s){const o=n.createTexture();return n.bindTexture(n.TEXTURE_2D,o),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texStorage2D(n.TEXTURE_2D,1,s,t,e),o}const eu=(n,t)=>n.COLOR_ATTACHMENT0+t;function Lp(n,t,e,s){const o=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,o);const r=[];for(let a=0;a<s;a++){const l=t[a%t.length],c=e+Math.floor(a/t.length);n.framebufferTextureLayer(n.FRAMEBUFFER,eu(n,a),l,0,c),r.push(eu(n,a))}n.drawBuffers(r);const i=n.checkFramebufferStatus(n.FRAMEBUFFER);if(i!==n.FRAMEBUFFER_COMPLETE)throw new Error(`framebuffer for z=${e} incomplete: 0x${i.toString(16)}`);for(;n.getError()!==n.NO_ERROR;);return o}function ya(n,t){const e=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,e);const s=t.map((r,i)=>(n.framebufferTexture2D(n.FRAMEBUFFER,eu(n,i),n.TEXTURE_2D,r,0),eu(n,i)));n.drawBuffers(s);const o=n.checkFramebufferStatus(n.FRAMEBUFFER);if(o!==n.FRAMEBUFFER_COMPLETE)throw new Error(`2D framebuffer incomplete: 0x${o.toString(16)}`);for(;n.getError()!==n.NO_ERROR;);return e}function sq(n,t){n.bindFramebuffer(n.READ_FRAMEBUFFER,t);const e=new Uint8Array(4);n.readPixels(0,0,1,1,n.RGBA,n.UNSIGNED_BYTE,e)}function oq(n,t,e,s){try{const o=Math.min(8,e,s),r=new Float32Array(o*o*4);for(n.bindFramebuffer(n.READ_FRAMEBUFFER,t),n.readBuffer(n.COLOR_ATTACHMENT0);n.getError()!==n.NO_ERROR;);const i=Math.max(0,Math.floor(e/2)-o),a=Math.max(0,Math.floor(s/2)-o);if(n.readPixels(i,a,o,o,n.RGBA,n.FLOAT,r),n.getError()!==n.NO_ERROR)return null;let l=0,c=0,u=0,h=1/0,d=-1/0;for(let p=0;p<r.length;p++){const f=r[p];if(Number.isNaN(f)){l++;continue}if(!Number.isFinite(f)){c++;continue}f!==0&&u++,f<h&&(h=f),f>d&&(d=f)}return{nan:l,inf:c,nonZero:u,total:r.length,min:h,max:d}}catch(o){return null}}function un(n,t){if(n.isContextLost())throw new Error(`the WebGL context was lost at ${t} (most likely the activation set did not fit)`);const e=n.getError();if(e!==n.NO_ERROR)throw new Error(`GL error 0x${e.toString(16)} at ${t}`)}function rq(n){var m,g,x,b;const t=n.descriptor,{nx:e,ny:s,nz:o,planes:r,cs:i}=t,a=e*s*o,l=(typeof performance!="undefined"?performance:Date).now();if(n.input.length!==a)throw new Error(`input has ${n.input.length} voxels, descriptor says ${a}`);let c=null,u=n.gl||null;const h={textures:[],fbos:[],programs:[]},d=w=>(h.textures.push(w),w),p=w=>(h.fbos.push(w),w),f=w=>(h.programs.push(w),w);try{if(!u){if(c=new OffscreenCanvas(1,1),u=c.getContext("webgl2",{antialias:!1,depth:!1,stencil:!1,preserveDrawingBuffer:!1,powerPreference:"high-performance"}),!u)throw new Error("no webgl2 context");(m=c.addEventListener)==null||m.call(c,"webglcontextlost",ot=>{var Et,Tt;(Et=ot.preventDefault)==null||Et.call(ot),(Tt=n.onLog)==null||Tt.call(n,"[webgl2] webglcontextlost fired (the run has already been aborted by isContextLost)")})}if(!u.getExtension("EXT_color_buffer_float"))throw new Error("EXT_color_buffer_float unavailable; float textures are not renderable here");const w=Math.min(u.getParameter(u.MAX_DRAW_BUFFERS),u.getParameter(u.MAX_COLOR_ATTACHMENTS));if(w<r)throw new Error(`need ${r} draw buffers, device has ${w}`);const y=!!n.vox2&&w>=2*r&&o>=2&&o%2===0&&t.norm==="gn";u.disable(u.DEPTH_TEST),u.disable(u.BLEND),u.disable(u.SCISSOR_TEST),u.bindVertexArray(u.createVertexArray());const C=d(Mp(u,e,s,o,u.R16F));u.bindTexture(u.TEXTURE_3D,C),u.texSubImage3D(u.TEXTURE_3D,0,0,0,0,e,s,o,u.RED,u.FLOAT,n.input),un(u,"input upload");const I=[],v=[];for(let ot=0;ot<r;ot++)I.push(d(Mp(u,e,s,o,u.RGBA16F)));for(let ot=0;ot<r;ot++)v.push(d(Mp(u,e,s,o,u.RGBA16F)));un(u,"activation allocation");const N=Math.ceil(n.packed.length/4),S=Math.ceil(N/jc);if(S>u.getParameter(u.MAX_TEXTURE_SIZE))throw new Error(`weight texture needs ${S} rows, MAX_TEXTURE_SIZE is ${u.getParameter(u.MAX_TEXTURE_SIZE)}`);const k=d(ks(u,jc,S,u.RGBA16F)),$=new Float32Array(jc*S*4);$.set(n.packed),u.bindTexture(u.TEXTURE_2D,k),u.texSubImage2D(u.TEXTURE_2D,0,0,0,jc,S,u.RGBA,u.FLOAT,$),un(u,"weight upload");let E=null,R=null,A=null,F=null,_=null,B=null,O=null,V=null,G=null;t.norm==="gn"&&(E=d(ks(u,e,s*r,u.RGBA32F)),R=d(ks(u,e,s*r,u.RGBA32F)),A=d(ks(u,e,r,u.RGBA32F)),F=d(ks(u,e,r,u.RGBA32F)),_=d(ks(u,1,r,u.RGBA32F)),B=d(ks(u,1,r,u.RGBA32F)),O=p(ya(u,[E,R])),V=p(ya(u,[A,F])),G=p(ya(u,[_,B])));const H=Math.ceil(a/4),j=Math.ceil(H/Js),Y=d(ks(u,Js,j,u.RGBA8)),et=p(ya(u,[Y]));let Q=null,st=null;n.probability&&(Q=d(ks(u,e,s,u.RGBA32F)),st=p(ya(u,[Q]))),un(u,"aux textures");const ct=[],pt=[],ht=[];for(let ot=0;ot<o;ot++)ct.push(p(Lp(u,I,ot,r))),pt.push(p(Lp(u,v,ot,r)));if(y)for(let ot=0;ot+1<o;ot+=2)ht.push(p(Lp(u,v,ot,2*r)));un(u,"framebuffer creation");const xt=JH(t,w),nt={},wt=(ot,Et,Tt)=>{xt[Et]&&(nt[ot]=f(nq(u,xt.vertex,xt[Et],Tt)))};if(wt("convFirst","convFirst","conv_first"),wt("convHidden","convHidden","conv_hidden"),y&&wt("convHidden2","convHiddenVox2","conv_hidden_vox2"),t.norm==="gn"&&(wt("momentsA","momentsA","moments_a"),wt("momentsB","momentsB","moments_b"),wt("momentsF","momentsFinish","moments_finish"),wt("norm","norm","norm")),t.nclass>0&&wt("classify","classify","classify"),n.probability){if(!xt.tissueProbability)throw new Error(`grouped probabilities are unavailable for ${t.nclass} classes`);wt("tissueProbability","tissueProbability","tissue_probability")}un(u,"program link");const rt=(ot,Et)=>u.getUniformLocation(ot,Et),Ot=Array.from({length:r},(ot,Et)=>`s${Et}`);u.useProgram(nt.convFirst),u.uniform1i(rt(nt.convFirst,"src"),0),u.uniform1i(rt(nt.convFirst,"wts"),1);for(const ot of[nt.convHidden,nt.convHidden2].filter(Boolean))u.useProgram(ot),Ot.forEach((Et,Tt)=>u.uniform1i(rt(ot,Et),Tt)),u.uniform1i(rt(ot,"wts"),r);if(nt.norm&&(u.useProgram(nt.norm),Ot.forEach((ot,Et)=>u.uniform1i(rt(nt.norm,ot),Et)),u.uniform1i(rt(nt.norm,"pMean"),r),u.uniform1i(rt(nt.norm,"pInv"),r+1),u.uniform1i(rt(nt.norm,"wts"),r+2)),nt.momentsA&&(u.useProgram(nt.momentsA),u.uniform1i(rt(nt.momentsA,"src"),0)),nt.momentsB&&(u.useProgram(nt.momentsB),u.uniform1i(rt(nt.momentsB,"pSum"),0),u.uniform1i(rt(nt.momentsB,"pSq"),1)),nt.momentsF&&(u.useProgram(nt.momentsF),u.uniform1i(rt(nt.momentsF,"pSum"),0),u.uniform1i(rt(nt.momentsF,"pSq"),1)),nt.classify&&(u.useProgram(nt.classify),Ot.forEach((ot,Et)=>u.uniform1i(rt(nt.classify,ot),Et)),u.uniform1i(rt(nt.classify,"wts"),r)),nt.tissueProbability){const ot=nt.tissueProbability;u.useProgram(ot),Ot.forEach((Et,Tt)=>u.uniform1i(rt(ot,Et),Tt)),u.uniform1i(rt(ot,"wts"),r),u.uniform1f(rt(ot,"uTemperature"),n.probability.temperature),u.uniform1f(rt(ot,"uSupportTemperature"),n.probability.supportTemperature),u.uniform1ui(rt(ot,"uGrayMask"),n.probability.grayMask>>>0),u.uniform1ui(rt(ot,"uWhiteMask"),n.probability.whiteMask>>>0),u.uniform1ui(rt(ot,"uCsfMask"),n.probability.csfMask>>>0)}un(u,"uniform setup");const Rt=(ot,Et)=>{u.activeTexture(u.TEXTURE0+ot),u.bindTexture(u.TEXTURE_3D,Et)},Ct=(ot,Et)=>{u.activeTexture(u.TEXTURE0+ot),u.bindTexture(u.TEXTURE_2D,Et)},At=()=>u.drawArrays(u.TRIANGLES,0,3);let Mt=I,Re=v,Ht=ct,Ae=pt;const ee=n.offsets.layers,wn=t.dilations.length,Xe=ot=>{var Et;return(Et=n.onProgress)==null?void 0:Et.call(n,(ot+1)/(wn+1),`Layer ${ot+1}/${wn}`)};{const ot=nt.convFirst;u.useProgram(ot),u.viewport(0,0,e,s),Rt(0,C),Ct(1,k),u.uniform1i(rt(ot,"uDil"),t.dilations[0]),u.uniform1i(rt(ot,"uWQ0"),ee[0].wq),ee[0].biasQ!==void 0&&u.uniform1i(rt(ot,"uBiasQ"),ee[0].biasQ);const Et=rt(ot,"uZ");for(let Tt=0;Tt<o;Tt++)u.bindFramebuffer(u.FRAMEBUFFER,Ae[Tt]),u.uniform1i(Et,Tt),At();un(u,"conv_first")}const ne=(ot,Et,Tt)=>{u.useProgram(nt.momentsA),u.bindFramebuffer(u.FRAMEBUFFER,O);const De=rt(nt.momentsA,"uRowBase");for(let en=0;en<r;en++)Rt(0,ot[en]),u.uniform1i(De,en*s),u.viewport(0,en*s,e,s),At();u.useProgram(nt.momentsB),u.bindFramebuffer(u.FRAMEBUFFER,V),Ct(0,E),Ct(1,R),u.viewport(0,0,e,r),At(),u.useProgram(nt.momentsF),u.bindFramebuffer(u.FRAMEBUFFER,G),Ct(0,A),Ct(1,F),u.viewport(0,0,1,r),At();const Yt=nt.norm;u.useProgram(Yt);for(let en=0;en<r;en++)Rt(en,ot[en]);Ct(r,_),Ct(r+1,B),Ct(r+2,k),t.affine&&(u.uniform1i(rt(Yt,"uAffQ"),ee[Tt].affQ),u.uniform1i(rt(Yt,"uBiasQ"),ee[Tt].affBiasQ)),u.viewport(0,0,e,s);const Fn=rt(Yt,"uZ");for(let en=0;en<o;en++)u.bindFramebuffer(u.FRAMEBUFFER,Et[en]),u.uniform1i(Fn,en),At();un(u,`norm layer ${Tt}`)};t.norm==="gn"?ne(Re,Ht,0):([Mt,Re]=[Re,Mt],[Ht,Ae]=[Ae,Ht]),Xe(0);const se=oq(u,Ht[o>>1],e,s);if(se){const ot=`min=${se.min.toPrecision(4)} max=${se.max.toPrecision(4)} nonzero=${se.nonZero}/${se.total} nan=${se.nan} inf=${se.inf}`;if(se.nan||se.inf)throw new Error(`layer 1 activations are not finite (${ot}). The usual cause is the activation flavour: an unclamped tanh overflows to Inf/Inf = NaN. Check descriptor.activation ('${t.activation}').`);if(se.nonZero===0)throw new Error(`layer 1 activations are all zero at the volume centre (${ot}). Suspect the input upload, the weight packing, or a wrong dilation.`);(g=n.onLog)==null||g.call(n,`[webgl2] layer 1 sample: ${ot}`)}for(let ot=1;ot<wn;ot++){const Et=y&&!!nt.convHidden2,Tt=Et?nt.convHidden2:nt.convHidden;u.useProgram(Tt),u.viewport(0,0,e,s);for(let Yt=0;Yt<r;Yt++)Rt(Yt,Mt[Yt]);Ct(r,k),u.uniform1i(rt(Tt,"uDil"),t.dilations[ot]),u.uniform1i(rt(Tt,"uWQ0"),ee[ot].wq),ee[ot].biasQ!==void 0&&u.uniform1i(rt(Tt,"uBiasQ"),ee[ot].biasQ);const De=rt(Tt,"uZ");if(Et)for(let Yt=0;Yt<ht.length;Yt++)u.bindFramebuffer(u.FRAMEBUFFER,ht[Yt]),u.uniform1i(De,Yt*2),At();else for(let Yt=0;Yt<o;Yt++)u.bindFramebuffer(u.FRAMEBUFFER,Ae[Yt]),u.uniform1i(De,Yt),At();un(u,`conv layer ${ot}`),t.norm==="gn"?ne(Re,Ht,ot):([Mt,Re]=[Re,Mt],[Ht,Ae]=[Ae,Ht]),ot%8===0&&sq(u,et),Xe(ot)}let Cn,dn=null,Ns=null;if(n.probability){const ot=nt.tissueProbability;u.useProgram(ot);for(let De=0;De<r;De++)Rt(De,Mt[De]);Ct(r,k),u.uniform1i(rt(ot,"uWCls"),n.offsets.clsFloat),u.uniform1i(rt(ot,"uWBias"),Math.max(n.offsets.clsBiasFloat,0)),u.uniform1i(rt(ot,"uHasBias"),n.offsets.clsBiasFloat>=0?1:0),u.bindFramebuffer(u.FRAMEBUFFER,st),u.viewport(0,0,e,s);const Et=rt(ot,"uZ"),Tt=new Float32Array(e*s*4);dn=[new Float32Array(a),new Float32Array(a),new Float32Array(a)],Ns=new Float32Array(a);for(let De=0;De<o;De++){u.uniform1i(Et,De),At(),u.bindFramebuffer(u.READ_FRAMEBUFFER,st),u.readPixels(0,0,e,s,u.RGBA,u.FLOAT,Tt),(De&31)===31&&un(u,`tissue probability slice ${De}`);const Yt=De*e*s;for(let Fn=0;Fn<e*s;Fn++)dn[0][Yt+Fn]=Tt[Fn*4],dn[1][Yt+Fn]=Tt[Fn*4+1],dn[2][Yt+Fn]=Tt[Fn*4+2],Ns[Yt+Fn]=Tt[Fn*4+3]}un(u,"tissue probability readback")}else if(t.nclass>0){const ot=nt.classify;u.useProgram(ot);for(let Tt=0;Tt<r;Tt++)Rt(Tt,Mt[Tt]);Ct(r,k),u.uniform1i(rt(ot,"uWCls"),n.offsets.clsFloat),u.uniform1i(rt(ot,"uWBias"),Math.max(n.offsets.clsBiasFloat,0)),u.uniform1i(rt(ot,"uHasBias"),n.offsets.clsBiasFloat>=0?1:0),u.bindFramebuffer(u.FRAMEBUFFER,et),u.viewport(0,0,Js,j),At(),un(u,"classify");const Et=new Uint8Array(Js*j*4);u.bindFramebuffer(u.READ_FRAMEBUFFER,et),u.readPixels(0,0,Js,j,u.RGBA,u.UNSIGNED_BYTE,Et),un(u,"readback"),Cn=Et.subarray(0,a)}else throw new Error("descriptor has no classifier; a raw-activation readback path is not implemented");const Ca=(typeof performance!="undefined"?performance:Date).now()-l;return{labels:Cn,tissues:dn,support:Ns,ms:Ca,path:`webgl2-native P=${r}${y?" vox2":""}${n.probability?" tissue-probability":""} ${e}x${s}x${o}`}}finally{if(u){for(const w of h.fbos)u.deleteFramebuffer(w);for(const w of h.textures)u.deleteTexture(w);for(const w of h.programs)u.deleteProgram(w);c&&((x=n.onLog)==null||x.call(n,'[webgl2] releasing our own GL context (the "context was lost" notice below is expected)'),(b=u.getExtension("WEBGL_lose_context"))==null||b.loseContext())}}}const iq={grayMatter:[2,6,7,8,9,10,14,15,16,17],whiteMatter:[1,5],csf:[3,4,11,12]};function Ir(n,t,e,s,o){var i;const r=Number((i=n[t])!=null?i:e);if(!Number.isFinite(r)||r<s||r>o)throw new Error(`${t} must be between ${s} and ${o}, got ${n[t]}`);return r}function Pp(n,t,e){let s=0;for(const o of n||[]){if(!Number.isInteger(o)||o<0||o>=t||o>=32)throw new Error(`Invalid ${e} tissue label ${o} for ${t} classes`);s=(s|1<<o)>>>0}return s}function aq(n,t){if(!Number.isInteger(t)||t<2||t>32)throw new Error(`Native WebGL2 grouped probabilities require 2..32 classes, got ${t}`);const e=Sr(Sr({},iq),n.probabilityGroups||{});return{temperature:Ir(n,"softmaxTemperature",1,1e-6,1e6),supportTemperature:Ir(n,"brainSupportTemperature",1,1e-6,1e6),supportPower:Ir(n,"brainSupportPower",1,1e-6,1e6),sigma:Ir(n,"partialVolumeSigma",0,0,2),grayMask:Pp(e.grayMatter,t,"gray-matter"),whiteMask:Pp(e.whiteMatter,t,"white-matter"),csfMask:Pp(e.csf,t,"CSF")}}function Bp(n,t,e,s,o,r){const[i,a,l]=e,c=i*a,u=o.length-1>>1;for(let h=0;h<l;h++)for(let d=0;d<a;d++)for(let p=0;p<i;p++){const f=h*c+d*i+p,m=s===1?p:s===i?d:h,g=s===1?i:s===i?a:l;let x=0;for(let b=-u;b<=u;b++){const w=m+b;w<0||w>=g||(x+=o[b+u]*n[f+b*s])}t[f]=x/r}}function lq(n,t,e,s){const[o,r,i]=e,a=o*r*i;if(!Array.isArray(n)||n.length!==3||n.some(p=>p.length!==a)||t.length!==a)throw new Error("Native WebGL2 tissue-prior dimensions do not match");const l=Ir(s,"partialVolumeSigma",0,0,2),c=Ir(s,"brainSupportPower",1,1e-6,1e6);let u=null,h=null,d=1;if(l>0){const p=Math.max(1,Math.round(3*l));h=new Float32Array(p*2+1),d=0;for(let f=-p;f<=p;f++){const m=Math.exp(-.5*f*f/(l*l));h[f+p]=m,d+=m}u=new Float32Array(a)}for(const p of n){let f=p;h&&(Bp(p,u,e,1,h,d),Bp(u,p,e,o,h,d),Bp(p,u,e,o*r,h,d),f=u);for(let m=0;m<a;m++){const g=Math.pow(Math.max(0,Math.min(1,t[m])),c);p[m]=Math.max(0,Math.min(1,f[m]*g))}}return n}const Ss=1e-8;function to(n,t,e){return Math.max(t,Math.min(e,n))}function hn(n,t,e,s,o){var i;const r=Number((i=n[t])!=null?i:e);return Number.isFinite(r)?to(r,s,o):e}function cq(n,t,e){if(!Array.isArray(n)||n.length!==3)throw new Error("CAT-lite requires [GM, WM, CSF] probability volumes.");const[s,o,r]=e,i=s*o*r;if(!Number.isInteger(i)||i<=0)throw new Error(`Invalid CAT-lite shape: ${e}`);if(t.length!==i||n.some(a=>a.length!==i))throw new Error("CAT-lite volume sizes do not match the requested shape.");return{nx:s,ny:o,nz:r,length:i}}function uq(n,t,e){var h;if(e.catLiteKeepLargestComponent===!1)return{applied:!1,componentCount:0,removedVoxels:0};const s=hn(e,"catLiteComponentThreshold",(h=e.catLiteMinSupport)!=null?h:.03,.001,.95),o=n[0].length,r=new Uint8Array(o);for(let d=0;d<o;d++){const p=Math.max(0,n[0][d])+Math.max(0,n[1][d])+Math.max(0,n[2][d]);Number.isFinite(p)&&p>=s&&(r[d]=1)}const i=new cw,[a,l]=i.bwlabel(r,t,6,!0,!1),[,c]=i.largest_original_cluster_labels(r,a,l,t);let u=0;if(a>1)for(let d=0;d<o;d++)!r[d]||c[d]||(n[0][d]=0,n[1][d]=0,n[2][d]=0,u++);return{applied:!0,threshold:s,componentCount:a,removedVoxels:u}}function wa(n,t,e,s){const o=Math.max(0,n[s]),r=Math.max(0,t[s]),i=Math.max(0,e[s]),a=o+r+i;return!Number.isFinite(a)||a<=Ss?[0,0,0,0]:[o/a,r/a,i/a,to(a,0,1)]}function fw(n,t,e,s){const[o,r,i]=n,a=hn(s,"catLitePurePriorPower",3,1,8),l=hn(s,"catLiteMinSupport",.03,0,.5),c=new Float64Array(3),u=new Float64Array(3);for(let g=0;g<t.length;g++){const[x,b,w,y]=wa(o,r,i,g);if(y<l||!Number.isFinite(t[g]))continue;const C=t[g]-e(g),I=[w,x,b];for(let v=0;v<3;v++){const N=y*Math.pow(I[v],a);c[v]+=N*C,u[v]+=N}}if(u.some(g=>g<100))return{applied:!1,reason:"too few high-confidence tissue voxels"};const h=Array.from(c,(g,x)=>g/u[x]),d=hn(s,"catLiteMinMeanSeparation",.035,.005,.25);if(!(h[0]+d<h[1]&&h[1]+d<h[2]))return{applied:!1,reason:`implausible T1 tissue ordering (${h.map(g=>g.toFixed(3)).join(", ")})`};const p=new Float64Array(3);for(let g=0;g<t.length;g++){const[x,b,w,y]=wa(o,r,i,g);if(y<l||!Number.isFinite(t[g]))continue;const C=t[g]-e(g),I=[w,x,b];for(let v=0;v<3;v++){const N=y*Math.pow(I[v],a),S=C-h[v];p[v]+=N*S*S}}const f=hn(s,"catLiteSigmaFloor",.025,.005,.15),m=Array.from(p,(g,x)=>Math.sqrt(Math.max(f*f,g/u[x])));return{applied:!0,means:h,sigmas:m}}function hq(n,t,e,s,o){const[r,i,a]=n,[l,c,u]=e,h=Math.max(4,Math.round(hn(o,"catLiteBiasBlockSize",16,4,64))),d=Math.ceil(l/h),p=Math.ceil(c/h),f=Math.ceil(u/h),m=d*p*f,g=new Float64Array(m),x=new Float64Array(m),[b,w,y]=s.means,C=hn(o,"catLiteMinSupport",.03,0,.5),I=l*c;for(let k=0;k<u;k++){const $=Math.floor(k/h);for(let E=0;E<c;E++){const R=Math.floor(E/h);let A=k*I+E*l;const F=($*p+R)*d;for(let _=0;_<l;_++,A++){const[B,O,V,G]=wa(r,i,a,A);if(G<C||!Number.isFinite(t[A]))continue;const H=V*b+B*w+O*y,j=G*(V*V+B*B+O*O),Y=F+Math.floor(_/h);g[Y]+=j*(t[A]-H),x[Y]+=j}}}let v=new Float32Array(m),N=new Uint8Array(m);for(let k=0;k<m;k++)x[k]>1&&(v[k]=g[k]/x[k],N[k]=1);const S=Math.round(hn(o,"catLiteBiasSmoothPasses",3,0,12));for(let k=0;k<S;k++){const $=new Float32Array(m),E=new Uint8Array(m);for(let R=0;R<f;R++)for(let A=0;A<p;A++)for(let F=0;F<d;F++){let _=0,B=0;for(let V=-1;V<=1;V++){const G=R+V;if(!(G<0||G>=f))for(let H=-1;H<=1;H++){const j=A+H;if(!(j<0||j>=p))for(let Y=-1;Y<=1;Y++){const et=F+Y;if(et<0||et>=d)continue;const Q=(G*p+j)*d+et;N[Q]&&(_+=v[Q],B++)}}}const O=(R*p+A)*d+F;B>0&&($[O]=_/B,E[O]=1)}v=$,N=E}return k=>{const $=Math.floor(k/I),E=k-$*I,R=Math.floor(E/l),A=E-R*l,F=(nt,wt)=>{const rt=to((nt+.5)/h-.5,0,wt-1),Ot=Math.floor(rt);return[Ot,Math.min(Ot+1,wt-1),rt-Ot]},[_,B,O]=F(A,d),[V,G,H]=F(R,p),[j,Y,et]=F($,f),Q=(nt,wt,rt)=>v[(rt*p+wt)*d+nt]||0,st=(nt,wt,rt)=>nt+(wt-nt)*rt,ct=st(Q(_,V,j),Q(B,V,j),O),pt=st(Q(_,G,j),Q(B,G,j),O),ht=st(Q(_,V,Y),Q(B,V,Y),O),xt=st(Q(_,G,Y),Q(B,G,Y),O);return st(st(ct,pt,H),st(ht,xt,H),et)}}function dq(n,t,e,s,o,r,i){const[a,l,c]=n,[u,h,d]=r,p=u*h,f=wa(a,l,c,t);if(i<=0)return f;let m=0,g=0,x=0,b=0;const w=C=>{const I=wa(a,l,c,C);I[3]<=Ss||(m+=I[0],g+=I[1],x+=I[2],b++)};if(e>0&&w(t-1),e+1<u&&w(t+1),s>0&&w(t-u),s+1<h&&w(t+u),o>0&&w(t-p),o+1<d&&w(t+p),!b)return f;const y=1-i;return[y*f[0]+i*m/b,y*f[1]+i*g/b,y*f[2]+i*x/b,f[3]]}function vr(n,t,e){const s=(n-t)/e;return-.5*s*s-Math.log(e)}function pq(n,t,e,s={}){const{nx:o,ny:r,nz:i,length:a}=cq(n,t,e),l=uq(n,e,s),u=fw(n,t,()=>0,s);if(!u.applied)return{probabilities:Float32Array.from(n[0]),stats:u};const h=hq(n,t,e,u,s),d=fw(n,t,h,s);if(!d.applied)return{probabilities:Float32Array.from(n[0]),stats:d};const[p,f,m]=d.means,[g,x,b]=d.sigmas,w=hn(s,"catLitePriorStrength",.8,0,4),y=hn(s,"catLiteIntensityStrength",.75,0,4),C=hn(s,"catLiteMixelPrior",.35,0,4),I=hn(s,"catLiteCsfWmMixelPrior",6,0,12),v=hn(s,"catLiteSpatialWeight",.25,0,.75),N=hn(s,"catLiteMinSupport",.03,0,.5),S=new Float32Array(a);let k=0,$=1,E=0,R=0,A=0,F=0,_=0,B=0;const O=o*r,V=.5*(p+f),G=.5*(f+m),H=.5*(p+m),j=Math.sqrt(pn(f-p,2)/12+.5*(pn(g,2)+pn(x,2))),Y=Math.sqrt(pn(m-f,2)/12+.5*(pn(x,2)+pn(b,2))),et=Math.sqrt(pn(m-p,2)/12+.5*(pn(g,2)+pn(b,2)));for(let Q=0;Q<i;Q++)for(let st=0;st<r;st++){let ct=Q*O+st*o;for(let pt=0;pt<o;pt++,ct++){const[ht,xt,nt,wt]=dq(n,ct,pt,st,Q,e,v);if(wt<N||!Number.isFinite(t[ct]))continue;const rt=t[ct]-h(ct),Ot=[w*Math.log(nt+Ss)+y*vr(rt,p,g),w*Math.log(ht+Ss)+y*vr(rt,f,x),w*Math.log(xt+Ss)+y*vr(rt,m,b),w*Math.log(C*2*Math.sqrt(nt*ht)+Ss)+y*vr(rt,V,j),w*Math.log(C*2*Math.sqrt(ht*xt)+Ss)+y*vr(rt,G,Y),w*Math.log(I*2*Math.sqrt(nt*xt)*pn(1-ht,2)+Ss)+y*vr(rt,H,et)],Rt=Math.max(...Ot),Ct=Ot.map(se=>Math.exp(se-Rt)),At=Ct.reduce((se,Cn)=>se+Cn,0),Mt=to((rt-p)/(f-p),0,1),Re=to((m-rt)/(m-f),0,1),Ht=(Ct[1]+Ct[3]*Mt+Ct[4]*Re)/At,Ae=Math.min(nt,xt),ee=to((Ae-ht)/(Ae+Ss),0,1),wn=to(4*nt*xt,0,1),Xe=pn(1-wn*ee,2),ne=to(Ht*wt*Xe,0,1);S[ct]=ne,R++,ne>.05&&ne<.95&&A++,ne>.05&&F++,ne>=.2&&ne<=.8&&_++,ne>=.95&&B++,k+=ne,$=Math.min($,ne),E=Math.max(E,ne)}}return{probabilities:S,stats:{applied:!0,tissueMeans:{csf:p,gray:f,white:m},tissueSigmas:{csf:g,gray:x,white:b},model:"six-class GM/WM/CSF + GM-CSF/GM-WM + zero-GM CSF-WM nuisance",supportCleanup:l,outputSum:k,outputMin:$,outputMax:E,supportedVoxels:R,partialVolumeVoxels:A,partialVolumeFraction:R?A/R:0,visibleVoxels:F,midrangeVoxels:_,nearPureGrayVoxels:B,midrangeVisibleFraction:F?_/F:0}}}function hs(n="",t=-1,e="",s=[]){let o=[];s&&Object.keys(s).length>0&&(o=JSON.stringify(Sr({},s))),self.postMessage({cmd:"ui",message:n,progressFrac:t,modalMessage:e,statData:o})}function mw(n,t,e){self.postMessage({cmd:"img",img:n,opts:t,modelEntry:e})}function kr(n){self.postMessage({cmd:"unsupported",reason:n})}function fq(n,t,e,s){return J(this,null,function*(){var R;const o=t.outputType==="probability"&&t.probabilityPostprocess==="cat-lite",r=OH(t);if(!r){kr(`no native WebGL2 descriptor for ${t.path} (needs a webgl2_runners/descriptors.js entry and a model.safetensors)`);return}if(!r.fullVolume){kr(`${r.name} needs cropping on this path, which is not implemented yet`);return}const i=hw(t,uw.WEBGL_WEBWORKER);i.TF_Backend="webgl2-native",hs(o?"CAT-lite probability estimation started":"Segmentation started",0);const a=256,l=[a,a,a];hs("Loading weights...",.05);const c=`${n.rootURL}${t.webgpu_safetensor.replace(/^\.\//,"/")}`,u=yield fetch(c);if(!u.ok){kr(`could not fetch ${c}: ${u.status}`);return}const h=yield u.arrayBuffer(),d=LH(h),p=PH(d),f=zH(p,{nx:a,ny:a,nz:a,activation:r.activation,dilations:r.dilations}),m=tq(f,l);if(console.log(`[webgl2-native] ${r.name}: ${f.chan}ch P=${f.planes} ${f.nclass}cls norm=${f.norm} affine=${f.affine} act=${f.activation} | ${Math.round(m.activationBytes/1048576)} MB activations | ${m.renderer}`),!m.supported){kr(m.reasons.join("; "));return}const g=BH(p,f);hs("Preparing input data...",.1),yield Gf("webgl"),q().set("WEBGL_DELETE_TEXTURE_THRESHOLD",0);let x,b,w=null;{let A=Si(s,l,"float32");const F=t.enableQuantileNorm?yield EH(A):yield TH(A);if(A.dispose(),A=F,o&&(w=new Float32Array(yield A.data())),t.inputPermutation){const _=A.transpose(t.inputPermutation);A.dispose(),A=_}else if(t.enableTranspose){const _=A.transpose();A.dispose(),A=_}b=A.shape,x=new Float32Array(yield A.data()),A.dispose()}on().disposeVariables(),on().reset(),hs("Running inference...",.2);const y=performance.now(),C=rq({descriptor:f,packed:g.data,offsets:g.offsets,input:x,probability:o?aq(t,f.nclass):null,vox2:m.vox2,onProgress:(A,F)=>hs(F,.2+.7*A),onLog:A=>console.log(A)}),I=((performance.now()-y)/1e3).toFixed(4);if(console.log(`[webgl2-native] ---- Inference Time: ${I} s ---- (${C.path})`),x=null,yield Gf("webgl"),o){if(!C.tissues||C.tissues.length!==3||!C.support||!w)throw new Error("native WebGL2 CAT-lite did not return three tissue priors and brain support");const A=performance.now();hs("CAT-lite: smoothing priors and fitting partial-volume classes...",.92),lq(C.tissues,C.support,l,t),C.support=null;const F=[];for(let O=0;O<C.tissues.length;O++){const V=C.tissues[O];let G=Si(V,b,"float32");if(t.outputPermutation){const H=G.transpose(t.outputPermutation);G.dispose(),G=H}else if(t.enableTranspose){const H=G.transpose();G.dispose(),G=H}F.push(new Float32Array(yield G.data())),G.dispose(),C.tissues[O]=null}const _=pq(F,w,l,t),B=((performance.now()-A)/1e3).toFixed(4);if(!_.stats.applied)console.warn(`[CAT-lite/WebGL2] skipped: ${_.stats.reason}`);else{const O=_.stats.tissueMeans,V=_.stats.tissueSigmas;console.log(`[CAT-lite/WebGL2] means CSF=${O.csf.toFixed(4)}, GM=${O.gray.toFixed(4)}, WM=${O.white.toFixed(4)}; sigmas=${V.csf.toFixed(4)}/${V.gray.toFixed(4)}/${V.white.toFixed(4)}`)}i.Output_Type="Continuous tissue probability",i.Tissue=t.probabilityDisplay||"grayMatter",i.Softmax_Temperature=(R=t.softmaxTemperature)!=null?R:1,i.Partial_Volume=_.stats.applied?"CAT-lite mixed-class PVE":`Skipped: ${_.stats.reason}`,_.stats.applied&&(i.CAT_Lite_Tissue_Means=_.stats.tissueMeans,i.CAT_Lite_Tissue_Sigmas=_.stats.tissueSigmas),dw(i,I,B),hs(t.modelName+"<br>CAT-lite probability map finished",0),hs("",-1,"",i),mw(_.probabilities,n,t),on().disposeVariables();return}let v=U(()=>{let A=Si(new Int32Array(C.labels),b,"int32");return t.outputPermutation?A=A.transpose(t.outputPermutation):t.enableTranspose&&(A=A.transpose()),A});if(U(()=>mt(v).dataSync()[0])===0){v.dispose(),kr("native WebGL2 produced an all-zero volume");return}const S=performance.now(),k=yield RH(v,s,t,n),$=((performance.now()-S)/1e3).toFixed(4);v.dispose(),on().disposeVariables();const E=new Set(k);AH(i,t.numClasses||E.size,E.size),dw(i,I,$),hs(t.modelName+"<br>Segmentation finished",0),hs("",-1,"",i),mw(k,n,t)})}self.addEventListener("message",n=>J(null,null,function*(){const{opts:t,modelEntry:e,niftiHeader:s,niftiImage:o}=n.data;try{yield fq(t,e,s,o)}catch(r){console.error("[webgl2-native] failed",r);try{const i=hw(e,"webgl2-native");DH(i,r,"native WebGL2 runner")}catch(i){}kr((r==null?void 0:r.message)||String(r))}}))})();
