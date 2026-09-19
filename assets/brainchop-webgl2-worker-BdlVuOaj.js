var Lq=Object.defineProperty;var Dw=Object.getOwnPropertySymbols;var Pq=Object.prototype.hasOwnProperty,Bq=Object.prototype.propertyIsEnumerable;var an=Math.pow,Fw=(_n,ln,Le)=>ln in _n?Lq(_n,ln,{enumerable:!0,configurable:!0,writable:!0,value:Le}):_n[ln]=Le,Tr=(_n,ln)=>{for(var Le in ln||(ln={}))Pq.call(ln,Le)&&Fw(_n,Le,ln[Le]);if(Dw)for(var Le of Dw(ln))Bq.call(ln,Le)&&Fw(_n,Le,ln[Le]);return _n};var Z=(_n,ln,Le)=>new Promise((wa,Po)=>{var Ge=On=>{try{eo(Le.next(On))}catch(Kn){Po(Kn)}},nu=On=>{try{eo(Le.throw(On))}catch(Kn){Po(Kn)}},eo=On=>On.done?wa(On.value):Promise.resolve(On.value).then(Ge,nu);eo((Le=Le.apply(_n,ln)).next())});(function(){"use strict";function _n(n,t){return t.forEach(function(e){e&&typeof e!="string"&&!Array.isArray(e)&&Object.keys(e).forEach(function(s){if(s!=="default"&&!(s in n)){var o=Object.getOwnPropertyDescriptor(e,s);Object.defineProperty(n,s,o.get?o:{enumerable:!0,get:function(){return e[s]}})}})}),Object.freeze(n)}const ln=1e-7,Le=1e-4;class wa{constructor(t,e){this.backend=t,this.dataMover=e,this.data=new WeakMap,this.dataIdsCount=0}get(t){return this.data.has(t)||this.dataMover.moveData(this.backend,t),this.data.get(t)}set(t,e){this.dataIdsCount++,this.data.set(t,e)}has(t){return this.data.has(t)}delete(t){return this.dataIdsCount--,this.data.delete(t)}numDataIds(){return this.dataIdsCount}}class Po{refCount(t){return Ge("refCount")}incRef(t){return Ge("incRef")}timerAvailable(){return!0}time(t){return Ge("time")}read(t){return Ge("read")}readSync(t){return Ge("readSync")}readToGPU(t,e){return Ge("readToGPU")}numDataIds(){return Ge("numDataIds")}disposeData(t,e){return Ge("disposeData")}write(t,e,s){return Ge("write")}move(t,e,s,o,r){return Ge("move")}createTensorFromGPUData(t,e,s){return Ge("createTensorFromGPUData")}memory(){return Ge("memory")}floatPrecision(){return Ge("floatPrecision")}epsilon(){return this.floatPrecision()===32?ln:Le}dispose(){return Ge("dispose")}}function Ge(n){throw new Error(`'${n}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}function nu(n){let t=n.length,e=0;for(;t>0;)e=Math.random()*t|0,t--,Kn(n,t,e)}function eo(n,t,e){return Math.max(n,Math.min(t,e))}function On(n){return n%2===0?n:n+1}function Kn(n,t,e){const s=n[t];n[t]=n[e],n[e]=s}function _w(n){let t=0;for(let e=0;e<n.length;e++)t+=n[e];return t}function T(n,t){if(!n)throw new Error(typeof t=="string"?t:t())}function su(n,t,e=""){T(Bt(n,t),()=>e+` Shapes ${n} and ${t} must match`)}function Hp(n){T(n!=null,()=>"The input to the tensor constructor must be a non-null value.")}function K(n){if(n.length===0)return 1;let t=n[0];for(let e=1;e<n.length;e++)t*=n[e];return t}function Bt(n,t){if(n===t)return!0;if(n==null||t==null||n.length!==t.length)return!1;for(let e=0;e<n.length;e++)if(n[e]!==t[e])return!1;return!0}function Bo(n){return n%1===0}function ou(n){const t=Math.ceil(Math.sqrt(n));return[t,Math.ceil(n/t)]}function zo(n,t){return t<=n.length?n:n+" ".repeat(t-n.length)}function qp(n,t=o=>0,e,s){return new Promise((o,r)=>{let i=0;const a=()=>{if(n()){o();return}i++;const l=t(i);if(e!=null&&i>=e){r();return}s!=null?s(a,l):setTimeout(a,l)};a()})}function Xp(n,t){let e=1,s=-1;for(let r=0;r<n.length;++r)if(n[r]>=0)e*=n[r];else if(n[r]===-1){if(s!==-1)throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${s} and dim ${r}`);s=r}else if(n[r]<0)throw Error(`Shapes can not be < 0. Found ${n[r]} at dim ${r}`);if(s===-1){if(t>0&&t!==e)throw Error(`Size(${t}) must match the product of shape ${n}`);return n}if(e===0)throw Error(`Cannot infer the missing size in [${n}] when there are 0 elements`);if(t%e!==0)throw Error(`The implicit shape can't be a fractional number. Got ${t} / ${e}`);const o=n.slice();return o[s]=t/e,o}function Tt(n,t){const e=t.length;return n=n==null?t.map((s,o)=>o):[].concat(n),T(n.every(s=>s>=-e&&s<e),()=>`All values in axis param must be in range [-${e}, ${e}) but got axis ${n}`),T(n.every(s=>Bo(s)),()=>`All values in axis param must be integers but got axis ${n}`),n.map(s=>s<0?e+s:s)}function Ts(n,t){const e=[],s=[],o=t!=null&&Array.isArray(t)&&t.length===0,r=t==null||o?null:Tt(t,n).sort();let i=0;for(let a=0;a<n.length;++a){if(r!=null){if(r[i]===a&&n[a]!==1)throw new Error(`Can't squeeze axis ${a} since its dim '${n[a]}' is not 1`);(r[i]==null||r[i]>a)&&n[a]===1&&(e.push(n[a]),s.push(a)),r[i]<=a&&i++}n[a]!==1&&(e.push(n[a]),s.push(a))}return{newShape:e,keptDims:s}}function Pe(n,t){return oe(n,t)}function oe(n,t){let e=null;if(n==null||n==="float32")e=new Float32Array(t);else if(n==="int32")e=new Int32Array(t);else if(n==="bool")e=new Uint8Array(t);else if(n==="string")e=new Array(t);else throw new Error(`Unknown data type ${n}`);return e}function Ow(n,t){for(let e=0;e<n.length;e++){const s=n[e];if(isNaN(s)||!isFinite(s))throw Error(`A tensor of type ${t} being uploaded contains ${s}.`)}}function Mw(n){return n==="bool"||n==="complex64"||n==="float32"||n==="int32"||n==="string"}function Kp(n,t){return!(t==="complex64"||t==="float32"&&n!=="complex64"||t==="int32"&&n!=="float32"&&n!=="complex64"||t==="bool"&&n==="bool")}function Ca(n){if(n==="float32"||n==="int32")return 4;if(n==="complex64")return 8;if(n==="bool")return 1;throw new Error(`Unknown dtype ${n}`)}function Lw(n){if(n==null)return 0;let t=0;return n.forEach(e=>t+=e.length),t}function Er(n){return typeof n=="string"||n instanceof String}function Pw(n){return typeof n=="boolean"}function ru(n){return typeof n=="number"}function Vo(n){return Array.isArray(n)?Vo(n[0]):n instanceof Float32Array?"float32":n instanceof Int32Array||n instanceof Uint8Array||n instanceof Uint8ClampedArray?"int32":ru(n)?"float32":Er(n)?"string":Pw(n)?"bool":"float32"}function iu(n){return!!(n&&n.constructor&&n.call&&n.apply)}function au(n,t){for(let e=t;e<n;++e)if(n%e===0)return e;return n}function ft(n){const t=n.length;if(t<2)return[];const e=new Array(t-1);e[t-2]=n[t-1];for(let s=t-3;s>=0;--s)e[s]=e[s+1]*n[s+1];return e}function jp(n,t,e,s=!1){const o=new Array;if(t.length===1){const r=t[0]*(s?2:1);for(let i=0;i<r;i++)o[i]=e[n+i]}else{const r=t[0],i=t.slice(1),a=i.reduce((l,c)=>l*c)*(s?2:1);for(let l=0;l<r;l++)o[l]=jp(n+l*a,i,e,s)}return o}function Mn(n,t,e=!1){if(n.length===0)return t[0];const s=n.reduce((o,r)=>o*r)*(e?2:1);if(s===0)return[];if(s!==t.length)throw new Error(`[${n}] does not match the input size ${t.length}${e?" for a complex tensor":""}.`);return jp(0,n,t,e)}function Bw(n,t){if(Array.isArray(n))return n;if(t==="float32")return n instanceof Float32Array?n:new Float32Array(n);if(t==="int32")return n instanceof Int32Array?n:new Int32Array(n);if(t==="bool"||t==="string")return Uint8Array.from(new Int32Array(n));throw new Error(`Unknown dtype ${t}`)}function lu(n,t){const e=Be(n,t);for(let s=0;s<e.length;s++)e[s]=1;return e}function Be(n,t){if(t==null||t==="float32"||t==="complex64")return new Float32Array(n);if(t==="int32")return new Int32Array(n);if(t==="bool")return new Uint8Array(n);throw new Error(`Unknown data type ${t}`)}function Yp(n,t){const e=n.reduce((s,o)=>s*o,1);if(t==null||t==="float32")return Mn(n,new Float32Array(e));if(t==="int32")return Mn(n,new Int32Array(e));if(t==="bool")return Mn(n,new Uint8Array(e));throw new Error(`Unknown data type ${t}`)}function ds(n){n.forEach(t=>{T(Number.isInteger(t)&&t>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${n}].`)})}function jn(n,t,e){if(t===0)return 0;if(t===1)return n[0];let s=n[n.length-1];for(let o=0;o<n.length-1;++o)s+=e[o]*n[o];return s}function Wo(n,t,e){if(t===0)return[];if(t===1)return[n];const s=new Array(t);for(let o=0;o<s.length-1;++o)s[o]=Math.floor(n/e[o]),n-=s[o]*e[o];return s[s.length-1]=n,s}function cu(n){return n&&n.then&&typeof n.then=="function"}const Zp="tfjsflags";class zw{constructor(t){this.global=t,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=Vw,this.populateURLFlags()}setPlatform(t,e){this.platform!=null&&(H().getBool("IS_TEST")||H().getBool("PROD")||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${t}.`)),this.platformName=t,this.platform=e}registerFlag(t,e,s){if(this.flagRegistry[t]={evaluationFn:e,setHook:s},this.urlFlags[t]!=null){const o=this.urlFlags[t];H().getBool("IS_TEST")||H().getBool("PROD")||console.warn(`Setting feature override from URL ${t}: ${o}.`),this.set(t,o)}}getAsync(t){return Z(this,null,function*(){return t in this.flags?this.flags[t]:(this.flags[t]=yield this.evaluateFlag(t),this.flags[t])})}get(t){if(t in this.flags)return this.flags[t];const e=this.evaluateFlag(t);if(cu(e))throw new Error(`Flag ${t} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[t]=e,this.flags[t]}getNumber(t){return this.get(t)}getBool(t){return this.get(t)}getString(t){return this.get(t)}getFlags(){return this.flags}get features(){return this.flags}set(t,e){if(this.flagRegistry[t]==null)throw new Error(`Cannot set flag ${t} as it has not been registered.`);this.flags[t]=e,this.flagRegistry[t].setHook!=null&&this.flagRegistry[t].setHook(e)}evaluateFlag(t){if(this.flagRegistry[t]==null)throw new Error(`Cannot evaluate flag '${t}': no evaluation function found.`);return this.flagRegistry[t].evaluationFn()}setFlags(t){this.flags=Object.assign({},t)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(typeof this.global=="undefined"||typeof this.global.location=="undefined"||typeof this.global.location.search=="undefined")return;const t=this.getQueryParams(this.global.location.search);Zp in t&&t[Zp].split(",").forEach(s=>{const[o,r]=s.split(":");this.urlFlags[o]=Uw(o,r)})}}function Vw(n){const t={};return n.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(e,...s)=>(Ww(t,s[0],s[1]),s.join("="))),t}function Ww(n,t,e){n[decodeURIComponent(t)]=decodeURIComponent(e||"")}function Uw(n,t){const e=t.toLowerCase();return e==="true"||e==="false"?e==="true":`${+e}`===e?+e:t}function H(){return Qp}let Qp=null;function Gw(n){Qp=n}let uu;function Jp(){if(uu==null){let n;if(typeof window!="undefined")n=window;else if(typeof global!="undefined")n=global;else if(typeof process!="undefined")n=process;else if(typeof self!="undefined")n=self;else throw new Error("Could not find a global object");uu=n}return uu}function Hw(){const n=Jp();return n._tfGlobals==null&&(n._tfGlobals=new Map),n._tfGlobals}function hu(n,t){const e=Hw();if(e.has(n))return e.get(n);{const s=t();return e.set(n,s),e.get(n)}}const $a="Abs",Rr="Acos",Ar="Acosh",Uo="Add",du="AddN",pu="All",fu="Any",Ia="ArgMax",va="ArgMin",Dr="Asin",Fr="Asinh",_r="Atan",Or="Atanh",Mr="Atan2",ka="AvgPool",mu="AvgPoolGrad",Sa="AvgPool3D",gu="AvgPool3DGrad",Na="BatchMatMul",Ta="BatchToSpaceND",xu="Bincount",bu="BitwiseAnd",qw="BroadcastTo",tf="BroadcastArgs",Lr="Cast",Pr="Ceil",Br="ClipByValue",yu="Complex",Ea="ComplexAbs",Ra="Concat",Aa="Conv2D",wu="Conv2DBackpropFilter",Da="Conv2DBackpropInput",Fa="Conv3D",Cu="Conv3DBackpropFilterV2",$u="Conv3DBackpropInputV2",zr="Cos",Vr="Cosh",Iu="Cumprod",_a="Cumsum",vu="CropAndResize",ku="DenseBincount",Su="DepthToSpace",Oa="DepthwiseConv2dNative",Nu="DepthwiseConv2dNativeBackpropFilter",Tu="DepthwiseConv2dNativeBackpropInput",ef="Diag",Ma="Dilation2D",Eu="Dilation2DBackpropInput",Ru="Dilation2DBackpropFilter",Xw="Draw",Wr="RealDiv",Au="Einsum",Ur="Elu",Du="EluGrad",Gr="Erf",La="Equal",Hr="Exp",Pa="ExpandDims",qr="Expm1",Fu="FFT",_u="Fill",Ou="FlipLeftRight",Xr="Floor",Kr="FloorDiv",Ba="FusedBatchNorm",za="GatherV2",nf="GatherNd",Va="Greater",jr="GreaterEqual",Yr="Identity",Mu="IFFT",Lu="Imag",Zr="IsFinite",Qr="IsInf",Jr="IsNan",Wa="LeakyRelu",Ua="Less",Ga="LessEqual",sf="LinSpace",ti="Log",ei="Log1p",Ha="LogicalAnd",qa="LogicalNot",Xa="LogicalOr",Kw="LogSoftmax",Ka="LRN",Pu="LRNGrad",ja="Max",ni="Maximum",Ya="MaxPool",Bu="MaxPoolGrad",Za="MaxPool3D",zu="MaxPool3DGrad",of="MaxPoolWithArgmax",Qa="Mean",Ja="Min",si="Minimum",tl="MirrorPad",oi="Mod",rf="Multinomial",ri="Multiply",el="Neg",nl="NotEqual",Vu="NonMaxSuppressionV3",Wu="NonMaxSuppressionV4",Uu="NonMaxSuppressionV5",sl="OnesLike",ol="OneHot",rl="Pack",il="PadV2",ii="Pow",al="Prelu",ll="Prod",af="RaggedGather",lf="RaggedRange",cf="RaggedTensorToTensor",Gu="Range",Hu="Real",ai="Reciprocal",li="Relu",cl="Reshape",ul="ResizeNearestNeighbor",qu="ResizeNearestNeighborGrad",hl="ResizeBilinear",Xu="ResizeBilinearGrad",ci="Relu6",dl="Reverse",ui="Round",hi="Rsqrt",uf="ScatterNd",hf="TensorScatterUpdate",df="SearchSorted",pl="Select",di="Selu",fl="Slice",pi="Sin",fi="Sinh",mi="Sign",gi="Sigmoid",xi="Softplus",bi="Sqrt",ml="Sum",gl="SpaceToBatchND",xl="SplitV",bl="Softmax",pf="SparseFillEmptyRows",ff="SparseReshape",mf="SparseSegmentMean",gf="SparseSegmentSum",xf="SparseToDense",yi="SquaredDifference",Ku="Square",ju="StaticRegexReplace",Yu="StridedSlice",bf="StringNGrams",yf="StringSplit",wf="StringToHashBucketFast",wi="Sub",Ci="Tan",$i="Tanh",Ii="Tile",Zu="TopK",Qu="Transform",Go="Transpose",Ju="Unique",yl="Unpack",wl="UnsortedSegmentSum",Cl="ZerosLike",vi="Step",jw="FromPixels",th="RotateWithOffset",$l="_FusedMatMul",Il="FusedConv2D",Cf="FusedDepthwiseConv2D";function gn(...n){H().getBool("IS_TEST")||H().getBool("PROD")||console.warn(...n)}const vl=hu("kernelRegistry",()=>new Map),eh=hu("gradRegistry",()=>new Map);function $f(n,t){const e=Sf(n,t);return vl.get(e)}function If(n){return eh.get(n)}function vf(n){const t=vl.entries(),e=[];for(;;){const{done:s,value:o}=t.next();if(s)break;const[r,i]=o,[a]=r.split("_");a===n&&e.push(i)}return e}function kf(n){const{kernelName:t,backendName:e}=n,s=Sf(t,e);vl.has(s)&&gn(`The kernel '${t}' for backend '${e}' is already registered`),vl.set(s,n)}function Yw(n){const{kernelName:t}=n;eh.has(t)&&H().getBool("DEBUG")&&gn(`Overriding the gradient for '${t}'`),eh.set(t,n)}function Sf(n,t){return`${t}_${n}`}function Nf(n){return n instanceof Float32Array||n instanceof Int32Array||n instanceof Uint8Array||n instanceof Uint8ClampedArray}function Zw(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function Qw(n){if(Object.prototype.hasOwnProperty.call(n,"__esModule"))return n;var t=n.default;if(typeof t=="function"){var e=function s(){var o=!1;try{o=this instanceof s}catch(r){}return o?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};e.prototype=t.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(n).forEach(function(s){var o=Object.getOwnPropertyDescriptor(n,s);Object.defineProperty(e,s,o.get?o:{enumerable:!0,get:function(){return n[s]}})}),e}var nh,Tf;function Jw(){if(Tf)return nh;Tf=1,nh=t;var n=null;try{n=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch(S){}function t(S,$,E){this.low=S|0,this.high=$|0,this.unsigned=!!E}t.prototype.__isLong__,Object.defineProperty(t.prototype,"__isLong__",{value:!0});function e(S){return(S&&S.__isLong__)===!0}t.isLong=e;var s={},o={};function r(S,$){var E,R,F;return $?(S>>>=0,(F=0<=S&&S<256)&&(R=o[S],R)?R:(E=a(S,(S|0)<0?-1:0,!0),F&&(o[S]=E),E)):(S|=0,(F=-128<=S&&S<128)&&(R=s[S],R)?R:(E=a(S,S<0?-1:0,!1),F&&(s[S]=E),E))}t.fromInt=r;function i(S,$){if(isNaN(S))return $?b:x;if($){if(S<0)return b;if(S>=f)return v}else{if(S<=-m)return N;if(S+1>=m)return I}return S<0?i(-S,$).neg():a(S%p|0,S/p|0,$)}t.fromNumber=i;function a(S,$,E){return new t(S,$,E)}t.fromBits=a;var l=Math.pow;function c(S,$,E){if(S.length===0)throw Error("empty string");if(S==="NaN"||S==="Infinity"||S==="+Infinity"||S==="-Infinity")return x;if(typeof $=="number"?(E=$,$=!1):$=!!$,E=E||10,E<2||36<E)throw RangeError("radix");var R;if((R=S.indexOf("-"))>0)throw Error("interior hyphen");if(R===0)return c(S.substring(1),$,E).neg();for(var F=i(l(E,8)),A=x,O=0;O<S.length;O+=8){var L=Math.min(8,S.length-O),_=parseInt(S.substring(O,O+L),E);if(L<8){var V=i(l(E,L));A=A.mul(V).add(i(_))}else A=A.mul(F),A=A.add(i(_))}return A.unsigned=$,A}t.fromString=c;function u(S,$){return typeof S=="number"?i(S,$):typeof S=="string"?c(S,$):a(S.low,S.high,typeof $=="boolean"?$:S.unsigned)}t.fromValue=u;var h=65536,d=1<<24,p=h*h,f=p*p,m=f/2,g=r(d),x=r(0);t.ZERO=x;var b=r(0,!0);t.UZERO=b;var y=r(1);t.ONE=y;var w=r(1,!0);t.UONE=w;var C=r(-1);t.NEG_ONE=C;var I=a(-1,2147483647,!1);t.MAX_VALUE=I;var v=a(-1,-1,!0);t.MAX_UNSIGNED_VALUE=v;var N=a(0,-2147483648,!1);t.MIN_VALUE=N;var k=t.prototype;return k.toInt=function(){return this.unsigned?this.low>>>0:this.low},k.toNumber=function(){return this.unsigned?(this.high>>>0)*p+(this.low>>>0):this.high*p+(this.low>>>0)},k.toString=function($){if($=$||10,$<2||36<$)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative())if(this.eq(N)){var E=i($),R=this.div(E),F=R.mul(E).sub(this);return R.toString($)+F.toInt().toString($)}else return"-"+this.neg().toString($);for(var A=i(l($,6),this.unsigned),O=this,L="";;){var _=O.div(A),V=O.sub(_.mul(A)).toInt()>>>0,G=V.toString($);if(O=_,O.isZero())return G+L;for(;G.length<6;)G="0"+G;L=""+G+L}},k.getHighBits=function(){return this.high},k.getHighBitsUnsigned=function(){return this.high>>>0},k.getLowBits=function(){return this.low},k.getLowBitsUnsigned=function(){return this.low>>>0},k.getNumBitsAbs=function(){if(this.isNegative())return this.eq(N)?64:this.neg().getNumBitsAbs();for(var $=this.high!=0?this.high:this.low,E=31;E>0&&($&1<<E)==0;E--);return this.high!=0?E+33:E+1},k.isZero=function(){return this.high===0&&this.low===0},k.eqz=k.isZero,k.isNegative=function(){return!this.unsigned&&this.high<0},k.isPositive=function(){return this.unsigned||this.high>=0},k.isOdd=function(){return(this.low&1)===1},k.isEven=function(){return(this.low&1)===0},k.equals=function($){return e($)||($=u($)),this.unsigned!==$.unsigned&&this.high>>>31===1&&$.high>>>31===1?!1:this.high===$.high&&this.low===$.low},k.eq=k.equals,k.notEquals=function($){return!this.eq($)},k.neq=k.notEquals,k.ne=k.notEquals,k.lessThan=function($){return this.comp($)<0},k.lt=k.lessThan,k.lessThanOrEqual=function($){return this.comp($)<=0},k.lte=k.lessThanOrEqual,k.le=k.lessThanOrEqual,k.greaterThan=function($){return this.comp($)>0},k.gt=k.greaterThan,k.greaterThanOrEqual=function($){return this.comp($)>=0},k.gte=k.greaterThanOrEqual,k.ge=k.greaterThanOrEqual,k.compare=function($){if(e($)||($=u($)),this.eq($))return 0;var E=this.isNegative(),R=$.isNegative();return E&&!R?-1:!E&&R?1:this.unsigned?$.high>>>0>this.high>>>0||$.high===this.high&&$.low>>>0>this.low>>>0?-1:1:this.sub($).isNegative()?-1:1},k.comp=k.compare,k.negate=function(){return!this.unsigned&&this.eq(N)?N:this.not().add(y)},k.neg=k.negate,k.add=function($){e($)||($=u($));var E=this.high>>>16,R=this.high&65535,F=this.low>>>16,A=this.low&65535,O=$.high>>>16,L=$.high&65535,_=$.low>>>16,V=$.low&65535,G=0,q=0,j=0,Y=0;return Y+=A+V,j+=Y>>>16,Y&=65535,j+=F+_,q+=j>>>16,j&=65535,q+=R+L,G+=q>>>16,q&=65535,G+=E+O,G&=65535,a(j<<16|Y,G<<16|q,this.unsigned)},k.subtract=function($){return e($)||($=u($)),this.add($.neg())},k.sub=k.subtract,k.multiply=function($){if(this.isZero())return x;if(e($)||($=u($)),n){var E=n.mul(this.low,this.high,$.low,$.high);return a(E,n.get_high(),this.unsigned)}if($.isZero())return x;if(this.eq(N))return $.isOdd()?N:x;if($.eq(N))return this.isOdd()?N:x;if(this.isNegative())return $.isNegative()?this.neg().mul($.neg()):this.neg().mul($).neg();if($.isNegative())return this.mul($.neg()).neg();if(this.lt(g)&&$.lt(g))return i(this.toNumber()*$.toNumber(),this.unsigned);var R=this.high>>>16,F=this.high&65535,A=this.low>>>16,O=this.low&65535,L=$.high>>>16,_=$.high&65535,V=$.low>>>16,G=$.low&65535,q=0,j=0,Y=0,J=0;return J+=O*G,Y+=J>>>16,J&=65535,Y+=A*G,j+=Y>>>16,Y&=65535,Y+=O*V,j+=Y>>>16,Y&=65535,j+=F*G,q+=j>>>16,j&=65535,j+=A*V,q+=j>>>16,j&=65535,j+=O*_,q+=j>>>16,j&=65535,q+=R*G+F*V+A*_+O*L,q&=65535,a(Y<<16|J,q<<16|j,this.unsigned)},k.mul=k.multiply,k.divide=function($){if(e($)||($=u($)),$.isZero())throw Error("division by zero");if(n){if(!this.unsigned&&this.high===-2147483648&&$.low===-1&&$.high===-1)return this;var E=(this.unsigned?n.div_u:n.div_s)(this.low,this.high,$.low,$.high);return a(E,n.get_high(),this.unsigned)}if(this.isZero())return this.unsigned?b:x;var R,F,A;if(this.unsigned){if($.unsigned||($=$.toUnsigned()),$.gt(this))return b;if($.gt(this.shru(1)))return w;A=b}else{if(this.eq(N)){if($.eq(y)||$.eq(C))return N;if($.eq(N))return y;var O=this.shr(1);return R=O.div($).shl(1),R.eq(x)?$.isNegative()?y:C:(F=this.sub($.mul(R)),A=R.add(F.div($)),A)}else if($.eq(N))return this.unsigned?b:x;if(this.isNegative())return $.isNegative()?this.neg().div($.neg()):this.neg().div($).neg();if($.isNegative())return this.div($.neg()).neg();A=x}for(F=this;F.gte($);){R=Math.max(1,Math.floor(F.toNumber()/$.toNumber()));for(var L=Math.ceil(Math.log(R)/Math.LN2),_=L<=48?1:l(2,L-48),V=i(R),G=V.mul($);G.isNegative()||G.gt(F);)R-=_,V=i(R,this.unsigned),G=V.mul($);V.isZero()&&(V=y),A=A.add(V),F=F.sub(G)}return A},k.div=k.divide,k.modulo=function($){if(e($)||($=u($)),n){var E=(this.unsigned?n.rem_u:n.rem_s)(this.low,this.high,$.low,$.high);return a(E,n.get_high(),this.unsigned)}return this.sub(this.div($).mul($))},k.mod=k.modulo,k.rem=k.modulo,k.not=function(){return a(~this.low,~this.high,this.unsigned)},k.and=function($){return e($)||($=u($)),a(this.low&$.low,this.high&$.high,this.unsigned)},k.or=function($){return e($)||($=u($)),a(this.low|$.low,this.high|$.high,this.unsigned)},k.xor=function($){return e($)||($=u($)),a(this.low^$.low,this.high^$.high,this.unsigned)},k.shiftLeft=function($){return e($)&&($=$.toInt()),($&=63)===0?this:$<32?a(this.low<<$,this.high<<$|this.low>>>32-$,this.unsigned):a(0,this.low<<$-32,this.unsigned)},k.shl=k.shiftLeft,k.shiftRight=function($){return e($)&&($=$.toInt()),($&=63)===0?this:$<32?a(this.low>>>$|this.high<<32-$,this.high>>$,this.unsigned):a(this.high>>$-32,this.high>=0?0:-1,this.unsigned)},k.shr=k.shiftRight,k.shiftRightUnsigned=function($){if(e($)&&($=$.toInt()),$&=63,$===0)return this;var E=this.high;if($<32){var R=this.low;return a(R>>>$|E<<32-$,E>>>$,this.unsigned)}else return $===32?a(E,0,this.unsigned):a(E>>>$-32,0,this.unsigned)},k.shru=k.shiftRightUnsigned,k.shr_u=k.shiftRightUnsigned,k.toSigned=function(){return this.unsigned?a(this.low,this.high,!1):this},k.toUnsigned=function(){return this.unsigned?this:a(this.low,this.high,!0)},k.toBytes=function($){return $?this.toBytesLE():this.toBytesBE()},k.toBytesLE=function(){var $=this.high,E=this.low;return[E&255,E>>>8&255,E>>>16&255,E>>>24,$&255,$>>>8&255,$>>>16&255,$>>>24]},k.toBytesBE=function(){var $=this.high,E=this.low;return[$>>>24,$>>>16&255,$>>>8&255,$&255,E>>>24,E>>>16&255,E>>>8&255,E&255]},t.fromBytes=function($,E,R){return R?t.fromBytesLE($,E):t.fromBytesBE($,E)},t.fromBytesLE=function($,E){return new t($[0]|$[1]<<8|$[2]<<16|$[3]<<24,$[4]|$[5]<<8|$[6]<<16|$[7]<<24,E)},t.fromBytesBE=function($,E){return new t($[4]<<24|$[5]<<16|$[6]<<8|$[7],$[0]<<24|$[1]<<16|$[2]<<8|$[3],E)},nh}var Ef=Jw(),Rf=Zw(Ef),tC=_n({__proto__:null,default:Rf},[Ef]);const no=Rf||tC;function kl(n){return no.fromString(n,!0,16)}const Af=kl("c3a5c85c97cb3127"),so=kl("b492b66fbe98f273"),He=kl("9ae16a3b2f90404f");function sh(n){return n.xor(n.shru(47))}function Df(n,t,e){const s=n.slice(t,t+e);return no.fromBytes(Array.from(s),!0,!0)}function Xt(n,t){return Df(n,t,8)}function Ff(n,t){return Df(n,t,4)}function Ie(n,t){return t===0?n:n.shru(t).or(n.shl(64-t))}function Es(n,t,e=kl("9ddfea08eb382d69")){let s=n.xor(t).mul(e);s=s.xor(s.shru(47));let o=t.xor(s).mul(e);return o=o.xor(o.shru(47)),o=o.mul(e),o}function eC(n,t,e,s,o,r){o=o.add(n),r=Ie(r.add(o).add(s),21);const i=o;return o=o.add(t),o=o.add(e),r=r.add(Ie(o,44)),[o.add(s),r.add(i)]}function Sl(n,t,e,s){return eC(Xt(n,t),Xt(n,t+8),Xt(n,t+16),Xt(n,t+24),e,s)}function nC(n,t=n.length){if(t>=8){const e=He.add(t*2),s=Xt(n,0).add(He),o=Xt(n,t-8),r=Ie(o,37).mul(e).add(s),i=Ie(s,25).add(o).mul(e);return Es(r,i,e)}if(t>=4){const e=He.add(t*2),s=Ff(n,0);return Es(s.shl(3).add(t),Ff(n,t-4),e)}if(t>0){const e=n[0],s=n[t>>1],o=n[t-1],r=e+(s<<8),i=t+(o<<2);return sh(He.mul(r).xor(Af.mul(i))).mul(He)}return He}function sC(n,t=n.length){const e=He.add(t*2),s=Xt(n,0).mul(so),o=Xt(n,8),r=Xt(n,t-8).mul(e),i=Xt(n,t-16).mul(He);return Es(Ie(s.add(o),43).add(Ie(r,30)).add(i),s.add(Ie(o.add(He),18)).add(r),e)}function oC(n,t=n.length){const e=He.add(t*2),s=Xt(n,0).mul(He),o=Xt(n,8),r=Xt(n,t-8).mul(e),i=Xt(n,t-16).mul(He),a=Ie(s.add(o),43).add(Ie(r,30)).add(i),l=Es(a,s.add(Ie(o.add(He),18)).add(r),e),c=Xt(n,16).mul(e),u=Xt(n,24),h=a.add(Xt(n,t-32)).mul(e),d=l.add(Xt(n,t-24)).mul(e);return Es(Ie(c.add(u),43).add(Ie(h,30)).add(d),c.add(Ie(u.add(s),18)).add(h),e)}function rC(n,t=n.length){const e=no.fromNumber(81,!0);if(t<=32)return t<=16?nC(n,t):sC(n,t);if(t<=64)return oC(n,t);let s=e,o=e.mul(so).add(113),r=sh(o.mul(He).add(113)).mul(He),i=[no.UZERO,no.UZERO],a=[no.UZERO,no.UZERO];s=s.mul(He).add(Xt(n,0));let l=0;const c=(t-1>>6)*64,u=c+(t-1&63)-63;do s=Ie(s.add(o).add(i[0]).add(Xt(n,l+8)),37).mul(so),o=Ie(o.add(i[1]).add(Xt(n,l+48)),42).mul(so),s=s.xor(a[1]),o=o.add(i[0]).add(Xt(n,l+40)),r=Ie(r.add(a[0]),33).mul(so),i=Sl(n,l,i[1].mul(so),s.add(a[0])),a=Sl(n,l+32,r.add(a[1]),o.add(Xt(n,l+16))),[r,s]=[s,r],l+=64;while(l!==c);const h=so.add(r.and(255).shl(1));return l=u,a[0]=a[0].add(t-1&63),i[0]=i[0].add(a[0]),a[0]=a[0].add(i[0]),s=Ie(s.add(o).add(i[0]).add(Xt(n,l+8)),37).mul(h),o=Ie(o.add(i[1]).add(Xt(n,l+48)),42).mul(h),s=s.xor(a[1].mul(9)),o=o.add(i[0].mul(9).add(Xt(n,l+40))),r=Ie(r.add(a[0]),33).mul(h),i=Sl(n,l,i[1].mul(h),s.add(a[0])),a=Sl(n,l+32,r.add(a[1]),o.add(Xt(n,l+16))),[r,s]=[s,r],Es(Es(i[0],a[0],h).add(sh(o).mul(Af)).add(r),Es(i[1],a[1],h).add(s),h)}function Rs(n,t){return t==="string"?As(n):oo([n],t)}function iC(n,t){return n instanceof Float32Array&&t==="float32"||n instanceof Int32Array&&t==="int32"||n instanceof Uint8Array&&t==="bool"}function oo(n,t){if(t==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(n)&&(n=ro(n)),H().getBool("DEBUG")&&Ow(n,t),iC(n,t))return n;if(t==null||t==="float32"||t==="complex64")return new Float32Array(n);if(t==="int32")return new Int32Array(n);if(t==="bool"){const e=new Uint8Array(n.length);for(let s=0;s<e.length;++s)Math.round(n[s])!==0&&(e[s]=1);return e}else throw new Error(`Unknown data type ${t}`)}function Qe(){return H().platform.now()}function As(n,t="utf-8"){return t=t||"utf-8",H().platform.encode(n,t)}function Ds(n,t="utf-8"){return t=t||"utf-8",H().platform.decode(n,t)}function $n(n){return H().platform.isTypedArray!=null?H().platform.isTypedArray(n):Nf(n)}function ro(n,t=[],e=!1){if(t==null&&(t=[]),typeof n=="boolean"||typeof n=="number"||typeof n=="string"||cu(n)||n==null||$n(n)&&e)t.push(n);else if(Array.isArray(n)||$n(n))for(let s=0;s<n.length;++s)ro(n[s],t,e);else{let s=-1;for(const o of Object.keys(n))/^([1-9]+[0-9]*|0)$/.test(o)&&(s=Math.max(s,Number(o)));for(let o=0;o<=s;o++)ro(n[o],t,e)}return t}class aC{constructor(t,e){this.backendTimer=t,this.logger=e,e==null&&(this.logger=new cC)}profileKernel(t,e,s){let o;const r=()=>{o=s()};let i;const a=Qe();if(this.backendTimer.timerAvailable())i=this.backendTimer.time(r);else{r();for(const c of o)c.dataSync();i=Promise.resolve({kernelMs:Qe()-a})}if(H().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let c=0;c<o.length;c++){const u=o[c];u.data().then(h=>{lC(h,u.dtype,t)})}return{kernelName:t,outputs:o,inputs:e,timeMs:i.then(c=>c.kernelMs),extraInfo:i.then(c=>c.getExtraProfileInfo!=null?c.getExtraProfileInfo():"")}}logKernelProfile(t){const{kernelName:e,outputs:s,timeMs:o,inputs:r,extraInfo:i}=t;s.forEach(a=>{Promise.all([a.data(),o,i]).then(l=>{this.logger.logKernelProfile(e,a,l[0],l[1],r,l[2])})})}}function lC(n,t,e){if(t!=="float32")return!1;for(let s=0;s<n.length;s++){const o=n[s];if(isNaN(o)||!isFinite(o))return console.warn(`Found ${o} in the result of '${e}'`),!0}return!1}class cC{logKernelProfile(t,e,s,o,r,i){const a=typeof o=="number"?zo(`${o}ms`,9):o.error,l=zo(t,25),c=e.rank,u=e.size,h=zo(e.shape.toString(),14);let d="";for(const p in r){const f=r[p];if(f!=null){const m=f.shape||e.shape,g=m.length;d+=`${p}: ${g}D ${g>0?m:""} `}}console.log(`%c${l}	%c${a}	%c${c}D ${h}	%c${u}	%c${d}	%c${i}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}}function uC(n,t,e){const s={},o={};for(let l=0;l<t.length;l++)s[t[l].id]=!0;for(let l=0;l<n.length;l++){const c=n[l],u=c.inputs;for(const h in u){const d=u[h];let p=!1;for(let f=0;f<t.length;f++)if(s[d.id]){c.outputs.forEach(m=>s[m.id]=!0),p=!0,o[c.id]=!0;break}if(p)break}}const r={};r[e.id]=!0;const i={};for(let l=n.length-1;l>=0;l--){const c=n[l],u=c.inputs;for(let h=0;h<c.outputs.length;h++)if(r[c.outputs[h].id]){for(const d in u)r[u[d].id]=!0,i[c.id]=!0;break}}const a=[];for(let l=0;l<n.length;l++){const c=n[l];if(o[c.id]&&i[c.id]){const u={};for(const d in c.inputs){const p=c.inputs[d];s[p.id]&&(u[d]=p)}const h=Object.assign({},c);h.inputs=u,h.outputs=c.outputs,a.push(h)}}return a}function hC(n,t,e,s){for(let o=t.length-1;o>=0;o--){const r=t[o],i=[];if(r.outputs.forEach(l=>{const c=n[l.id];c!=null?i.push(c):i.push(null)}),r.gradient==null)throw new Error(`Cannot compute gradient: gradient function not found for ${r.kernelName}.`);const a=r.gradient(i);for(const l in r.inputs){if(!(l in a))throw new Error(`Cannot backprop through input ${l}. Available gradients found: ${Object.keys(a)}.`);const c=e(()=>a[l]());if(c.dtype!=="float32")throw new Error(`Error in gradient for op ${r.kernelName}. The gradient of input ${l} must have 'float32' dtype, but has '${c.dtype}'`);const u=r.inputs[l];if(!Bt(c.shape,u.shape))throw new Error(`Error in gradient for op ${r.kernelName}. The gradient of input '${l}' has shape '${c.shape}', which does not match the shape of the input '${u.shape}'`);if(n[u.id]==null)n[u.id]=c;else{const h=n[u.id];n[u.id]=s(h,c),h.dispose()}}}}const _f=20,ki=3,oh=7;function dC(n,t,e,s){const o=ft(t),r=pC(n,t,e,o),i=t.length,a=Nl(n,t,e,o,r),l=["Tensor"];return s&&(l.push(`  dtype: ${e}`),l.push(`  rank: ${i}`),l.push(`  shape: [${t}]`),l.push("  values:")),l.push(a.map(c=>"    "+c).join(`
`)),l.join(`
`)}function pC(n,t,e,s){const o=K(t),r=s[s.length-1],i=new Array(r).fill(0),a=t.length,l=e==="complex64"?Ni(n):n;if(a>1)for(let c=0;c<o/r;c++){const u=c*r;for(let h=0;h<r;h++)i[h]=Math.max(i[h],Si(l[u+h],0,e).length)}return i}function Si(n,t,e){let s;return Array.isArray(n)?s=`${parseFloat(n[0].toFixed(oh))} + ${parseFloat(n[1].toFixed(oh))}j`:Er(n)?s=`'${n}'`:e==="bool"?s=Of(n):s=parseFloat(n.toFixed(oh)).toString(),zo(s,t)}function Of(n){return n===0?"false":"true"}function Nl(n,t,e,s,o,r=!0){const i=e==="complex64"?2:1,a=t[0],l=t.length;if(l===0){if(e==="complex64"){const m=Ni(n);return[Si(m[0],0,e)]}return e==="bool"?[Of(n[0])]:[n[0].toString()]}if(l===1){if(a>_f){const g=ki*i;let x=Array.from(n.slice(0,g)),b=Array.from(n.slice((a-ki)*i,a*i));return e==="complex64"&&(x=Ni(x),b=Ni(b)),["["+x.map((y,w)=>Si(y,o[w],e)).join(", ")+", ..., "+b.map((y,w)=>Si(y,o[a-ki+w],e)).join(", ")+"]"]}return["["+(e==="complex64"?Ni(n):Array.from(n)).map((g,x)=>Si(g,o[x],e)).join(", ")+"]"]}const c=t.slice(1),u=s.slice(1),h=s[0]*i,d=[];if(a>_f){for(let m=0;m<ki;m++){const g=m*h,x=g+h;d.push(...Nl(n.slice(g,x),c,e,u,o,!1))}d.push("...");for(let m=a-ki;m<a;m++){const g=m*h,x=g+h;d.push(...Nl(n.slice(g,x),c,e,u,o,m===a-1))}}else for(let m=0;m<a;m++){const g=m*h,x=g+h;d.push(...Nl(n.slice(g,x),c,e,u,o,m===a-1))}const p=l===2?",":"";d[0]="["+(a>0?d[0]+p:"");for(let m=1;m<d.length-1;m++)d[m]=" "+d[m]+p;let f=`,
`;for(let m=2;m<l;m++)f+=`
`;return d[d.length-1]=" "+d[d.length-1]+"]"+(r?"":f),d}function Ni(n){const t=[];for(let e=0;e<n.length;e+=2)t.push([n[e],n[e+1]]);return t}class Re{constructor(t,e,s){if(this.dtype=e,this.shape=t.slice(),this.size=K(t),s!=null){const o=s.length;T(o===this.size,()=>`Length of values '${o}' does not match the size inferred by the shape '${this.size}'.`)}if(e==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=s||oe(e,this.size),this.strides=ft(t)}set(t,...e){e.length===0&&(e=[0]),T(e.length===this.rank,()=>`The number of provided coordinates (${e.length}) must match the rank (${this.rank})`);const s=this.locToIndex(e);this.values[s]=t}get(...t){t.length===0&&(t=[0]);let e=0;for(const o of t){if(o<0||o>=this.shape[e]){const r=`Requested out of range element at ${t}.   Buffer shape=${this.shape}`;throw new Error(r)}e++}let s=t[t.length-1];for(let o=0;o<t.length-1;++o)s+=this.strides[o]*t[o];return this.values[s]}locToIndex(t){if(this.rank===0)return 0;if(this.rank===1)return t[0];let e=t[t.length-1];for(let s=0;s<t.length-1;++s)e+=this.strides[s]*t[s];return e}indexToLoc(t){if(this.rank===0)return[];if(this.rank===1)return[t];const e=new Array(this.shape.length);for(let s=0;s<e.length-1;++s)e[s]=Math.floor(t/this.strides[s]),t-=e[s]*this.strides[s];return e[e.length-1]=t,e}get rank(){return this.shape.length}toTensor(){return Ln().makeTensor(this.values,this.shape,this.dtype)}}let Ln=null,Ho=null;function fC(n){Ln=n}function mC(n){Ho=n}class me{constructor(t,e,s,o){this.kept=!1,this.isDisposedInternal=!1,this.shape=t.slice(),this.dtype=e||"float32",this.size=K(t),this.strides=ft(t),this.dataId=s,this.id=o,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}buffer(){return Z(this,null,function*(){const t=yield this.data();return Ho.buffer(this.shape,this.dtype,t)})}bufferSync(){return Ho.buffer(this.shape,this.dtype,this.dataSync())}array(){return Z(this,null,function*(){const t=yield this.data();return Mn(this.shape,t,this.dtype==="complex64")})}arraySync(){return Mn(this.shape,this.dataSync(),this.dtype==="complex64")}data(){return Z(this,null,function*(){this.throwIfDisposed();const t=Ln().read(this.dataId);if(this.dtype==="string"){const e=yield t;try{return e.map(s=>Ds(s))}catch(s){throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return t})}dataToGPU(t){return this.throwIfDisposed(),Ln().readToGPU(this.dataId,t)}dataSync(){this.throwIfDisposed();const t=Ln().readSync(this.dataId);if(this.dtype==="string")try{return t.map(e=>Ds(e))}catch(e){throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return t}bytes(){return Z(this,null,function*(){this.throwIfDisposed();const t=yield Ln().read(this.dataId);return this.dtype==="string"?t:new Uint8Array(t.buffer)})}dispose(){this.isDisposed||(this.kerasMask&&this.kerasMask.dispose(),Ln().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(t=!1){return Ho.print(this,t)}clone(){return this.throwIfDisposed(),Ho.clone(this)}toString(t=!1){const e=this.dataSync();return dC(e,this.shape,this.dtype,t)}cast(t){return this.throwIfDisposed(),Ho.cast(this,t)}variable(t=!0,e,s){return this.throwIfDisposed(),Ln().makeVariable(this,t,e,s)}}Object.defineProperty(me,Symbol.hasInstance,{value:n=>!!n&&n.data!=null&&n.dataSync!=null&&n.throwIfDisposed!=null});function X(){return hu("Tensor",()=>me)}X();class Tl extends me{constructor(t,e,s,o){super(t.shape,t.dtype,t.dataId,o),this.trainable=e,this.name=s}assign(t){if(t.dtype!==this.dtype)throw new Error(`dtype of the new value (${t.dtype}) and previous value (${this.dtype}) must match`);if(!Bt(t.shape,this.shape))throw new Error(`shape of the new value (${t.shape}) and previous value (${this.shape}) must match`);Ln().disposeTensor(this),this.dataId=t.dataId,Ln().incRef(this,null)}dispose(){Ln().disposeVariable(this),this.isDisposedInternal=!0}}Object.defineProperty(Tl,Symbol.hasInstance,{value:n=>n instanceof me&&n.assign!=null&&n.assign instanceof Function});var Mf;(function(n){n.R0="R0",n.R1="R1",n.R2="R2",n.R3="R3",n.R4="R4",n.R5="R5",n.R6="R6"})(Mf||(Mf={}));var rh;(function(n){n.float32="float32",n.int32="int32",n.bool="int32",n.complex64="complex64"})(rh||(rh={}));var ih;(function(n){n.float32="float32",n.int32="int32",n.bool="bool",n.complex64="complex64"})(ih||(ih={}));var ah;(function(n){n.float32="float32",n.int32="float32",n.bool="float32",n.complex64="complex64"})(ah||(ah={}));var lh;(function(n){n.float32="complex64",n.int32="complex64",n.bool="complex64",n.complex64="complex64"})(lh||(lh={}));const gC={float32:ah,int32:rh,bool:ih,complex64:lh};function cn(n,t){if(n==="string"||t==="string"){if(n==="string"&&t==="string")return"string";throw new Error(`Can not upcast ${n} with ${t}`)}return gC[n][t]}function ch(n){return cn(n,"int32")}function Lf(n){return n!=null&&typeof n=="object"&&"texture"in n&&n.texture instanceof WebGLTexture}function Pf(n){return typeof GPUBuffer!="undefined"&&n!=null&&typeof n=="object"&&"buffer"in n&&n.buffer instanceof GPUBuffer}function re(n,t){if(n.dtype===t.dtype)return[n,t];const e=cn(n.dtype,t.dtype);return[n.cast(e),t.cast(e)]}function Bf(n){const t=[];return zf(n,t,new Set),t}function zf(n,t,e){if(n==null)return;if(n instanceof me){t.push(n);return}if(!xC(n))return;const s=n;for(const o in s){const r=s[o];e.has(r)||(e.add(r),zf(r,t,e))}}function xC(n){return Array.isArray(n)||typeof n=="object"}function uh(n){return n.kernelName!=null}class Vf{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(t=>t.name)))}}}dispose(){for(const t in this.registeredVariables)this.registeredVariables[t].dispose()}}class qo{constructor(t){this.ENV=t,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new Vf}ready(){return Z(this,null,function*(){if(this.pendingBackendInit!=null)return this.pendingBackendInit.then(()=>{});if(this.backendInstance!=null)return;const t=this.getSortedBackends();for(let e=0;e<t.length;e++){const s=t[e];if(yield this.initializeBackend(s).success){yield this.setBackend(s);return}}throw new Error("Could not initialize any backends, all backend initializations failed.")})}get backend(){if(this.pendingBackendInit!=null)throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(this.backendInstance==null){const{name:t,asyncInit:e}=this.initializeBackendsAndReturnBest();if(e)throw new Error(`The highest priority backend '${t}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(t)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(t){if(!(t in this.registry))if(t in this.registryFactory){const{asyncInit:e}=this.initializeBackend(t);if(e)return null}else return null;return this.registry[t]}findBackendFactory(t){return t in this.registryFactory?this.registryFactory[t].factory:null}registerBackend(t,e,s=1){return t in this.registryFactory?(gn(`${t} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[t]={factory:e,priority:s},!0)}setBackend(t){return Z(this,null,function*(){if(this.registryFactory[t]==null)throw new Error(`Backend name '${t}' not found in registry`);if(this.backendName=t,this.registry[t]==null){this.backendInstance=null;const{success:e,asyncInit:s}=this.initializeBackend(t);if(!(s?yield e:e))return!1}return this.backendInstance=this.registry[t],this.setupRegisteredKernels(),this.profiler=new aC(this.backendInstance),!0})}setupRegisteredKernels(){vf(this.backendName).forEach(e=>{e.setupFunc!=null&&e.setupFunc(this.backendInstance)})}disposeRegisteredKernels(t){vf(t).forEach(s=>{s.disposeFunc!=null&&s.disposeFunc(this.registry[t])})}initializeBackend(t){const e=this.registryFactory[t];if(e==null)throw new Error(`Cannot initialize backend ${t}, no registration found.`);try{const s=e.factory();if(s&&!(s instanceof Po)&&typeof s.then=="function"){const o=++this.pendingBackendInitId,r=s.then(i=>o<this.pendingBackendInitId?!1:(this.registry[t]=i,this.pendingBackendInit=null,!0)).catch(i=>(o<this.pendingBackendInitId||(this.pendingBackendInit=null,gn(`Initialization of backend ${t} failed`),gn(i.stack||i.message)),!1));return this.pendingBackendInit=r,{success:r,asyncInit:!0}}else return this.registry[t]=s,{success:!0,asyncInit:!1}}catch(s){return gn(`Initialization of backend ${t} failed`),gn(s.stack||s.message),{success:!1,asyncInit:!1}}}removeBackend(t){if(!(t in this.registryFactory))throw new Error(`${t} backend not found in registry`);this.backendName===t&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,t in this.registry&&(this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t]),delete this.registryFactory[t],this.backendName===t&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((t,e)=>this.registryFactory[e].priority-this.registryFactory[t].priority)}initializeBackendsAndReturnBest(){const t=this.getSortedBackends();for(let e=0;e<t.length;e++){const s=t[e],{success:o,asyncInit:r}=this.initializeBackend(s);if(r||o)return{name:s,asyncInit:r}}throw new Error("Could not initialize any backends, all backend initializations failed.")}moveData(t,e){const s=this.state.tensorInfo.get(e),o=s.backend,r=this.readSync(e),i=o.refCount(e);o.disposeData(e,!0),s.backend=t,t.move(e,r,s.shape,s.dtype,i),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(t,e){let s=null;if(e==null){if(typeof t!="function")throw new Error("Please provide a function to tidy()");e=t}else{if(typeof t!="string"&&!(t instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof e!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");s=t}let o;return this.scopedRun(()=>this.startScope(s),()=>this.endScope(o),()=>(o=e(),o instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),o))}scopedRun(t,e,s){t();try{const o=s();return e(),o}catch(o){throw e(),o}}nextTensorId(){return qo.nextTensorId++}nextVariableId(){return qo.nextVariableId++}clone(t){const e=B.runKernel(Yr,{x:t}),s={x:t},o=i=>({x:()=>{const a="float32",l={x:i},c={dtype:a};return B.runKernel(Lr,l,c)}}),r=[];return this.addTapeNode(this.state.activeScope.name,s,[e],o,r,{}),e}runKernel(t,e,s){if(this.backendName==null&&this.backend,!($f(t,this.backendName)!=null))throw new Error(`Kernel '${t}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:t,inputs:e,attrs:s})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(t,e,s){const o=this.backend.numDataIds();let r=0;s.forEach(l=>{r+=l.dtype==="complex64"?3:1});const i=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],a=o-e-r-i;if(a>0)throw new Error(`Backend '${this.backendName}' has an internal memory leak (${a} data ids) after running '${t}'`)}runKernelFunc(t){let e,s=[];const o=this.isTapeOn(),r=this.state.numBytes,i=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);let a;this.backendName==null&&this.backend;let l;const c=uh(t)?t.kernelName:this.state.activeScope!=null?this.state.activeScope.name:"";if(uh(t)){const{kernelName:f,inputs:m,attrs:g}=t;this.backendName==null&&this.backend;const x=$f(f,this.backendName);T(x!=null,()=>`Cannot find registered kernel '${f}' for backend '${this.backendName}'`),a=()=>{const b=this.backend.numDataIds();l=x.kernelFunc({inputs:m,attrs:g,backend:this.backend});const y=Array.isArray(l)?l:[l];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(f,b,y);const w=y.map(C=>C.rank!=null?C:this.makeTensorFromTensorInfo(C));if(o){const C=this.getTensorsForGradient(f,m,w);s=this.saveTensorsForBackwardMode(C)}return w}}else{const{forwardFunc:f}=t,m=g=>{o&&(s=g.map(x=>this.keep(this.clone(x))))};a=()=>{const g=this.backend.numDataIds();l=this.tidy(()=>f(this.backend,m));const x=Array.isArray(l)?l:[l];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(c,g,x),x}}const{inputs:u,attrs:h}=t,d=uh(t)?null:t.backwardsFunc;let p;return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{!this.ENV.getBool("DEBUG")&&!this.state.profiling?e=a():(p=this.profiler.profileKernel(c,u,()=>a()),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(p),e=p.outputs)}),o&&this.addTapeNode(c,u,e,d,s,h),this.state.profiling&&this.state.activeProfile.kernels.push({name:c,bytesAdded:this.state.numBytes-r,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-i,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(u).map(f=>u[f]!=null?u[f].shape:null),outputShapes:e.map(f=>f.shape),kernelTimeMs:p.timeMs,extraInfo:p.extraInfo}),Array.isArray(l)?e:e[0]}saveTensorsForBackwardMode(t){return t.map(s=>this.keep(this.clone(s)))}getTensorsForGradient(t,e,s){const o=If(t);if(o!=null){const r=o.inputsToSave||[],i=o.outputsToSave||[];let a;o.saveAllInputs?(T(Array.isArray(e),()=>"saveAllInputs is true, expected inputs to be an array."),a=Object.keys(e).map(c=>e[c])):a=r.map(c=>e[c]);const l=s.filter((c,u)=>i[u]);return a.concat(l)}return[]}makeTensor(t,e,s,o){if(t==null)throw new Error("Values passed to engine.makeTensor() are null");s=s||"float32",o=o||this.backend;let r=t;s==="string"&&Er(t[0])&&(r=t.map(l=>As(l)));const i=o.write(r,e,s),a=new me(e,s,i,this.nextTensorId());if(this.trackTensor(a,o),s==="string"){const l=this.state.tensorInfo.get(i),c=Lw(r);this.state.numBytes+=c-l.bytes,l.bytes=c}return a}makeTensorFromDataId(t,e,s,o){s=s||"float32";const r={dataId:t,shape:e,dtype:s};return this.makeTensorFromTensorInfo(r,o)}makeTensorFromTensorInfo(t,e){const{dataId:s,shape:o,dtype:r}=t,i=new me(o,r,s,this.nextTensorId());return this.trackTensor(i,e),i}makeVariable(t,e=!0,s,o){s=s||this.nextVariableId().toString(),o!=null&&o!==t.dtype&&(t=t.cast(o));const r=new Tl(t,e,s,this.nextTensorId());if(this.state.registeredVariables[r.name]!=null)throw new Error(`Variable with name ${r.name} was already registered`);return this.state.registeredVariables[r.name]=r,this.incRef(r,this.backend),r}trackTensor(t,e){this.state.numTensors++,t.dtype==="string"&&this.state.numStringTensors++;let s=0;t.dtype!=="complex64"&&t.dtype!=="string"&&(s=t.size*Ca(t.dtype)),this.state.numBytes+=s,this.state.tensorInfo.has(t.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(t.dataId,{backend:e||this.backend,dtype:t.dtype,shape:t.shape,bytes:s})),t instanceof Tl||this.track(t)}incRef(t,e){this.trackTensor(t,e),this.backend.incRef(t.dataId)}removeDataId(t,e){this.state.tensorInfo.has(t)&&this.state.tensorInfo.get(t).backend===e&&(this.state.tensorInfo.delete(t),this.state.numDataBuffers--)}disposeTensor(t){if(!this.state.tensorInfo.has(t.dataId))return;const e=this.state.tensorInfo.get(t.dataId);if(this.state.numTensors--,t.dtype==="string"&&(this.state.numStringTensors--,this.state.numBytes-=e.bytes),t.dtype!=="complex64"&&t.dtype!=="string"){const s=t.size*Ca(t.dtype);this.state.numBytes-=s}e.backend.disposeData(t.dataId)&&this.removeDataId(t.dataId,e.backend)}disposeVariables(){for(const t in this.state.registeredVariables){const e=this.state.registeredVariables[t];this.disposeVariable(e)}}disposeVariable(t){this.disposeTensor(t),this.state.registeredVariables[t.name]!=null&&delete this.state.registeredVariables[t.name]}memory(){const t=this.backend.memory();return t.numTensors=this.state.numTensors,t.numDataBuffers=this.state.numDataBuffers,t.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(t.unreliable=!0,t.reasons==null&&(t.reasons=[]),t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),t}profile(t){return Z(this,null,function*(){this.state.profiling=!0;const e=this.state.numBytes,s=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=yield t(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(o=>o.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-e,this.state.activeProfile.newTensors=this.state.numTensors-s;for(const o of this.state.activeProfile.kernels)o.kernelTimeMs=yield o.kernelTimeMs,o.extraInfo=yield o.extraInfo;return this.state.activeProfile})}isTapeOn(){return this.state.gradientDepth>0&&this.state.kernelDepth===0}addTapeNode(t,e,s,o,r,i){const a={id:this.state.nextTapeNodeId++,kernelName:t,inputs:e,outputs:s,saved:r},l=If(t);l!=null&&(o=l.gradFunc),o!=null&&(a.gradient=c=>(c=c.map((u,h)=>{if(u==null){const d=s[h],p=Be(d.size,d.dtype);return this.makeTensor(p,d.shape,d.dtype)}return u}),o(c.length>1?c:c[0],r,i))),this.state.activeTape.push(a)}keep(t){return t.kept=!0,t}startTape(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(t){const e={track:[],name:"unnamed scope",id:this.state.nextScopeId++};t&&(e.name=t),this.state.scopeStack.push(e),this.state.activeScope=e}endScope(t){const e=Bf(t),s=new Set(e.map(r=>r.id));for(let r=0;r<this.state.activeScope.track.length;r++){const i=this.state.activeScope.track[r];!i.kept&&!s.has(i.id)&&i.dispose()}const o=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],e.forEach(r=>{!r.kept&&r.scopeId===o.id&&this.track(r)})}gradients(t,e,s,o=!1){if(T(e.length>0,()=>"gradients() received an empty list of xs."),s!=null&&s.dtype!=="float32")throw new Error(`dy must have 'float32' dtype, but has '${s.dtype}'`);const r=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy("forward",t));T(r instanceof me,()=>"The result y returned by f() must be a tensor.");const i=uC(this.state.activeTape,e,r);if(!o&&i.length===0&&e.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",()=>{const a={};a[r.id]=s==null?bC(r.shape):s,hC(a,i,c=>this.tidy(c),yC);const l=e.map(c=>a[c.id]);return this.state.gradientDepth===0&&(this.state.activeTape.forEach(c=>{for(const u of c.saved)u.dispose()}),this.state.activeTape=null),{value:r,grads:l}})}customGrad(t){return T(iu(t),()=>"The f passed in customGrad(f) must be a function."),(...e)=>{T(e.every(a=>a instanceof me),()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors");let s;const o={};e.forEach((a,l)=>{o[l]=a});const r=(a,l)=>(s=t(...e,l),T(s.value instanceof me,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),T(iu(s.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),s.value),i=(a,l)=>{const c=s.gradFunc(a,l),u=Array.isArray(c)?c:[c];T(u.length===e.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),T(u.every(d=>d instanceof me),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");const h={};return u.forEach((d,p)=>{h[p]=()=>d}),h};return this.runKernelFunc({forwardFunc:r,backwardsFunc:i,inputs:o})}}readSync(t){return this.state.tensorInfo.get(t).backend.readSync(t)}read(t){return this.state.tensorInfo.get(t).backend.read(t)}readToGPU(t,e){return this.state.tensorInfo.get(t).backend.readToGPU(t,e)}time(t){return Z(this,null,function*(){const e=Qe(),s=yield this.backend.time(t);return s.wallMs=Qe()-e,s})}track(t){return this.state.activeScope!=null&&(t.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(t)),t}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new Vf;for(const t in this.registry)this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}}qo.nextTensorId=0,qo.nextVariableId=0;function bC(n){const t=lu(K(n),"float32");return B.makeTensor(t,n,"float32")}function Wf(){const n=Jp();if(n._tfengine==null){const t=new zw(n);n._tfengine=new qo(t)}return Gw(n._tfengine.ENV),fC(()=>n._tfengine),n._tfengine}const B=Wf();function yC(n,t){const e={a:n,b:t};return B.runKernel(Uo,e)}function wC(){return typeof navigator!="undefined"&&navigator!=null}function Uf(n){if(n||wC()){if(n||(n=navigator),n.product==="ReactNative")return!0;const t=n.userAgent||n.vendor||(typeof window!="undefined"?window.opera:"");if(!t){const e=n;return e.userAgentData&&e.userAgentData.mobile}return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4))}return!1}function Gf(){return typeof window!="undefined"&&window.document!=null||typeof WorkerGlobalScope!="undefined"}const Je=H();Je.registerFlag("DEBUG",()=>!1,n=>{n&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")}),Je.registerFlag("IS_BROWSER",()=>Gf()),Je.registerFlag("IS_NODE",()=>typeof process!="undefined"&&typeof process.versions!="undefined"&&typeof process.versions.node!="undefined"),Je.registerFlag("IS_CHROME",()=>typeof navigator!="undefined"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)),Je.registerFlag("IS_SAFARI",()=>typeof navigator!="undefined"&&navigator!=null&&navigator.userAgent!=null&&/Safari/.test(navigator.userAgent)&&/Apple/.test(navigator.vendor)),Je.registerFlag("PROD",()=>!1),Je.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",()=>Je.getBool("DEBUG")),Je.registerFlag("DEPRECATION_WARNINGS_ENABLED",()=>!0),Je.registerFlag("IS_TEST",()=>!1),Je.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",()=>Je.getBool("DEBUG")),Je.registerFlag("WRAP_TO_IMAGEBITMAP",()=>!1),Je.registerFlag("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU",()=>!1),Je.registerFlag("USE_SETTIMEOUTCUSTOM",()=>!1);function El(n,t){let e=n;if($n(n))return t==="string"?[]:[n.length];if(Lf(n)){const o=n.channels||"RGBA";return[n.height,n.width*o.length]}else if(Pf(n))return[n.buffer.size/(t==null?4:Ca(t))];if(!Array.isArray(n))return[];const s=[];for(;Array.isArray(e)||$n(e)&&t!=="string";)s.push(e.length),e=e[0];return Array.isArray(n)&&H().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&Hf(n,s,[]),s}function Hf(n,t,e){if(e=e||[],!Array.isArray(n)&&!$n(n)){T(t.length===0,()=>`Element arr[${e.join("][")}] is a primitive, but should be an array/TypedArray of ${t[0]} elements`);return}T(t.length>0,()=>`Element arr[${e.join("][")}] should be a primitive, but is an array of ${n.length} elements`),T(n.length===t[0],()=>`Element arr[${e.join("][")}] should have ${t[0]} elements, but has ${n.length} elements`);const s=t.slice(1);for(let o=0;o<n.length;++o)Hf(n[o],s,e.concat(o))}function qf(n,t,e,s){if(n!=="string_or_numeric"){if(n==null)throw new Error("Expected dtype cannot be null.");if(n!=="numeric"&&n!==t||n==="numeric"&&t==="string")throw new Error(`Argument '${e}' passed to '${s}' must be ${n} tensor, but got ${t} tensor`)}}function D(n,t,e,s="numeric"){if(n instanceof X())return qf(s,n.dtype,t,e),n;let o=Vo(n);if(o!=="string"&&["bool","int32","float32"].indexOf(s)>=0&&(o=s),qf(s,o,t,e),n==null||!$n(n)&&!Array.isArray(n)&&typeof n!="number"&&typeof n!="boolean"&&typeof n!="string"){const l=n==null?"null":n.constructor.name;throw new Error(`Argument '${t}' passed to '${e}' must be a Tensor or TensorLike, but got '${l}'`)}const r=El(n,o);!$n(n)&&!Array.isArray(n)&&(n=[n]);const a=o!=="string"?oo(n,o):ro(n,[],!0);return B.makeTensor(a,r,o)}function Xf(n,t,e,s="numeric"){if(!Array.isArray(n))throw new Error(`Argument ${t} passed to ${e} must be a \`Tensor[]\` or \`TensorLike[]\``);return n.map((r,i)=>D(r,`${t}[${i}]`,e,s))}const CC="__op";function W(n){const t=Object.keys(n);if(t.length!==1)throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${t.length} keys.`);let e=t[0];const s=n[e];e.endsWith("_")&&(e=e.substring(0,e.length-1)),e=e+CC;const o=(...r)=>{B.startScope(e);try{const i=s(...r);return cu(i)&&console.error("Cannot return a Promise inside of tidy."),B.endScope(i),i}catch(i){throw B.endScope(null),i}};return Object.defineProperty(o,"name",{value:e,configurable:!0}),o}function $C(n,t){const e=D(n,"real","complex"),s=D(t,"imag","complex");su(e.shape,s.shape,`real and imag shapes, ${e.shape} and ${s.shape}, must match in call to tf.complex().`);const o={real:e,imag:s};return B.runKernel(yu,o)}const Xo=W({complex_:$C});function Rl(n,t,e,s){if(s==null)s=Vo(n);else if(s==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(Pf(n)||Lf(n)){if(s!=="float32"&&s!=="int32")throw new Error(`Creating tensor from GPU data only supports 'float32'|'int32' dtype, while the dtype is ${s}.`);return B.backend.createTensorFromGPUData(n,t||e,s)}if(!$n(n)&&!Array.isArray(n)&&typeof n!="number"&&typeof n!="boolean"&&typeof n!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(t!=null){ds(t);const o=K(t),r=K(e);T(o===r,()=>`Based on the provided shape, [${t}], the tensor should have ${o} values but has ${r}`);for(let i=0;i<e.length;++i){const a=e[i],l=i===e.length-1?a!==K(t.slice(i)):!0;T(e[i]===t[i]||!l,()=>`Error creating a new Tensor. Inferred shape (${e}) does not match the provided shape (${t}). `)}}return!$n(n)&&!Array.isArray(n)&&(n=[n]),t=t||e,n=s!=="string"?oo(n,s):ro(n,[],!0),B.makeTensor(n,t,s)}function Al(n,t,e){const s=El(n,e);return Rl(n,t,s,e)}class Fs{static join(t){return new Fs(t).slice()}constructor(t){if(this.shards=[],this.previousShardIndex=0,t==null||(t instanceof Array||(t=[t]),t=t.map(s=>$n(s)?s.buffer:s),t.length===0))return;this.bufferUniformSize=t[0].byteLength;let e=0;for(let s=0;s<t.length;s++){const o=t[s];s!==t.length-1&&o.byteLength!==this.bufferUniformSize&&(this.bufferUniformSize=void 0);const r=e+o.byteLength;this.shards.push({buffer:o,start:e,end:r}),e=r}this.shards.length===0&&(this.byteLength=0),this.byteLength=this.shards[this.shards.length-1].end}slice(t=0,e=this.byteLength){if(this.shards.length===0)return new ArrayBuffer(0);if(t=isNaN(Number(t))?0:t,e=isNaN(Number(e))?0:e,t=Math.max(0,t),e=Math.min(this.byteLength,e),e<=t)return new ArrayBuffer(0);const s=this.findShardForByte(t);if(s===-1)throw new Error(`Could not find start shard for byte ${t}`);const o=e-t,r=new ArrayBuffer(o),i=new Uint8Array(r);let a=0;for(let l=s;l<this.shards.length;l++){const c=this.shards[l],h=t+a-c.start,d=a,f=Math.min(e,c.end)-c.start,m=new Uint8Array(c.buffer,h,f-h);if(i.set(m,d),a+=m.length,e<c.end)break}return r}findShardForByte(t){if(this.shards.length===0||t<0||t>=this.byteLength)return-1;if(this.bufferUniformSize!=null)return this.previousShardIndex=Math.floor(t/this.bufferUniformSize),this.previousShardIndex;function e(o){return t<o.start?-1:t>=o.end?1:0}if(e(this.shards[this.previousShardIndex])===0)return this.previousShardIndex;const s=IC(this.shards,e);return s===-1?-1:(this.previousShardIndex=s,this.previousShardIndex)}}function IC(n,t){let e=0,s=n.length;for(;e<=s;){const o=Math.floor((s-e)/2)+e,r=t(n[o]);if(r===0)return o;r<0?s=o:e=o+1}return-1}function un(){return B}function Kf(){return B.memory()}function U(n,t){return B.tidy(n,t)}function Dt(n){Bf(n).forEach(e=>e.dispose())}function Yn(n){return B.keep(n)}function jf(n){return B.setBackend(n)}function Yf(n,t,e=1){return B.registerBackend(n,t,e)}function vC(){return B.backend}const Zf=4;function Qf(n,t){return Z(this,null,function*(){const e=[],s=[],o=Array.isArray(n)?n.map(i=>i.name):Object.keys(n);for(let i=0;i<o.length;++i){const a=o[i],l=Array.isArray(n)?n[i].tensor:n[a];if(l.dtype!=="float32"&&l.dtype!=="int32"&&l.dtype!=="bool"&&l.dtype!=="string"&&l.dtype!=="complex64")throw new Error(`Unsupported dtype in weight '${a}': ${l.dtype}`);const c={name:a,shape:l.shape,dtype:l.dtype};if(l.dtype==="string"){const u=new Promise(h=>Z(null,null,function*(){const d=yield l.bytes(),p=d.reduce((g,x)=>g+x.length,0)+Zf*d.length,f=new Uint8Array(p);let m=0;for(let g=0;g<d.length;g++){const x=d[g],b=new Uint8Array(new Uint32Array([x.length]).buffer);f.set(b,m),m+=Zf,f.set(x,m),m+=x.length}h(f)}));s.push(u)}else s.push(l.data());t!=null&&(c.group=t),e.push(c)}const r=yield Promise.all(s);return{data:kC(r),specs:e}})}function kC(n){if(n===null)throw new Error(`Invalid input value: ${JSON.stringify(n)}`);let t=0;const e=[];n.forEach(r=>{if(t+=r.byteLength,e.push(r.byteLength===r.buffer.byteLength?r:new r.constructor(r)),!(r instanceof Float32Array||r instanceof Int32Array||r instanceof Uint8Array))throw new Error(`Unsupported TypedArray subtype: ${r.constructor.name}`)});const s=new Uint8Array(t);let o=0;return e.forEach(r=>{s.set(new Uint8Array(r.buffer),o),o+=r.byteLength}),s.buffer}const hh=typeof Buffer!="undefined"&&(typeof Blob=="undefined"||typeof atob=="undefined"||typeof btoa=="undefined");function Jf(n){return hh?Buffer.byteLength(n,"utf8"):new Blob([n]).size}function SC(n){if(hh)return Buffer.from(n).toString("base64");const t=new Uint8Array(n);let e="";for(let s=0,o=t.length;s<o;s++)e+=String.fromCharCode(t[s]);return btoa(e)}function NC(n){if(hh){const s=Buffer.from(n,"base64");return s.buffer.slice(s.byteOffset,s.byteOffset+s.byteLength)}const t=atob(n),e=new Uint8Array(t.length);for(let s=0;s<t.length;++s)e.set([t.charCodeAt(s)],s);return e.buffer}function TC(n){return Fs.join(n)}function tm(n,t){const e={modelTopology:n.modelTopology,format:n.format,generatedBy:n.generatedBy,convertedBy:n.convertedBy,weightsManifest:t};return n.signature!=null&&(e.signature=n.signature),n.userDefinedMetadata!=null&&(e.userDefinedMetadata=n.userDefinedMetadata),n.modelInitializer!=null&&(e.modelInitializer=n.modelInitializer),n.initializerSignature!=null&&(e.initializerSignature=n.initializerSignature),n.trainingConfig!=null&&(e.trainingConfig=n.trainingConfig),e}function EC(n,t,e){const s={modelTopology:n.modelTopology,format:n.format,generatedBy:n.generatedBy,convertedBy:n.convertedBy};if(n.trainingConfig!=null&&(s.trainingConfig=n.trainingConfig),n.weightsManifest!=null){if(!t)throw new Error("modelJSON has weightsManifest but weightSpecs is null");if(!e)throw new Error("modelJSON has weightsManifest but weightData is null");s.weightSpecs=t,s.weightData=e}return n.signature!=null&&(s.signature=n.signature),n.userDefinedMetadata!=null&&(s.userDefinedMetadata=n.userDefinedMetadata),n.modelInitializer!=null&&(s.modelInitializer=n.modelInitializer),n.initializerSignature!=null&&(s.initializerSignature=n.initializerSignature),s}function RC(n,t){return Z(this,null,function*(){let e,s;return n.weightsManifest!=null&&([e,s]=yield t(n.weightsManifest)),EC(n,e,s)})}function Dl(n){if(n.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:n.modelTopology==null?0:Jf(JSON.stringify(n.modelTopology)),weightSpecsBytes:n.weightSpecs==null?0:Jf(JSON.stringify(n.weightSpecs)),weightDataBytes:n.weightData==null?0:new Fs(n.weightData).byteLength}}function em(n){const t=[];for(const e of n)t.push(...e.weights);return t}class ve{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return ve.instance==null&&(ve.instance=new ve),ve.instance}static registerSaveRouter(t){ve.getInstance().saveRouters.push(t)}static registerLoadRouter(t){ve.getInstance().loadRouters.push(t)}static getSaveHandlers(t){return ve.getHandlers(t,"save")}static getLoadHandlers(t,e){return ve.getHandlers(t,"load",e)}static getHandlers(t,e,s){const o=[];return(e==="load"?ve.getInstance().loadRouters:ve.getInstance().saveRouters).forEach(i=>{const a=i(t,s);a!==null&&o.push(a)}),o}}const AC=n=>ve.getSaveHandlers(n);const dh="tensorflowjs",ph=1,io="models_store",_s="model_info_store";function nm(){if(!H().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");const n=typeof window=="undefined"?self:window,t=n.indexedDB||n.mozIndexedDB||n.webkitIndexedDB||n.msIndexedDB||n.shimIndexedDB;if(t==null)throw new Error("The current browser does not appear to support IndexedDB.");return t}function fh(n){const t=n.result;t.createObjectStore(io,{keyPath:"modelPath"}),t.createObjectStore(_s,{keyPath:"modelPath"})}class ao{constructor(t){if(this.indexedDB=nm(),t==null||!t)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=t}save(t){return Z(this,null,function*(){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,t)})}load(){return Z(this,null,function*(){return this.databaseAction(this.modelPath)})}databaseAction(t,e){return new Promise((s,o)=>{const r=this.indexedDB.open(dh,ph);r.onupgradeneeded=()=>fh(r),r.onsuccess=()=>{const i=r.result;if(e==null){const a=i.transaction(io,"readonly"),c=a.objectStore(io).get(this.modelPath);c.onsuccess=()=>{if(c.result==null)return i.close(),o(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));s(c.result.modelArtifacts)},c.onerror=u=>(i.close(),o(c.error)),a.oncomplete=()=>i.close()}else{e.weightData=Fs.join(e.weightData);const a=Dl(e),l=i.transaction(_s,"readwrite");let c=l.objectStore(_s),u;try{u=c.put({modelPath:this.modelPath,modelArtifactsInfo:a})}catch(d){return o(d)}let h;u.onsuccess=()=>{h=i.transaction(io,"readwrite");const d=h.objectStore(io);let p;try{p=d.put({modelPath:this.modelPath,modelArtifacts:e,modelArtifactsInfo:a})}catch(f){return o(f)}p.onsuccess=()=>s({modelArtifactsInfo:a}),p.onerror=f=>{c=l.objectStore(_s);const m=c.delete(this.modelPath);m.onsuccess=()=>(i.close(),o(p.error)),m.onerror=g=>(i.close(),o(p.error))}},u.onerror=d=>(i.close(),o(u.error)),l.oncomplete=()=>{h==null?i.close():h.oncomplete=()=>i.close()}}},r.onerror=i=>o(r.error)})}}ao.URL_SCHEME="indexeddb://";const sm=n=>H().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(ao.URL_SCHEME)?DC(n.slice(ao.URL_SCHEME.length)):null;ve.registerSaveRouter(sm),ve.registerLoadRouter(sm);function DC(n){return new ao(n)}function FC(n){return n.startsWith(ao.URL_SCHEME)?n.slice(ao.URL_SCHEME.length):n}class _C{constructor(){this.indexedDB=nm()}listModels(){return Z(this,null,function*(){return new Promise((t,e)=>{const s=this.indexedDB.open(dh,ph);s.onupgradeneeded=()=>fh(s),s.onsuccess=()=>{const o=s.result,r=o.transaction(_s,"readonly"),a=r.objectStore(_s).getAll();a.onsuccess=()=>{const l={};for(const c of a.result)l[c.modelPath]=c.modelArtifactsInfo;t(l)},a.onerror=l=>(o.close(),e(a.error)),r.oncomplete=()=>o.close()},s.onerror=o=>e(s.error)})})}removeModel(t){return Z(this,null,function*(){return t=FC(t),new Promise((e,s)=>{const o=this.indexedDB.open(dh,ph);o.onupgradeneeded=()=>fh(o),o.onsuccess=()=>{const r=o.result,i=r.transaction(_s,"readwrite"),a=i.objectStore(_s),l=a.get(t);let c;l.onsuccess=()=>{if(l.result==null)return r.close(),s(new Error(`Cannot find model with path '${t}' in IndexedDB.`));{const u=a.delete(t),h=()=>{c=r.transaction(io,"readwrite");const p=c.objectStore(io).delete(t);p.onsuccess=()=>e(l.result.modelArtifactsInfo),p.onerror=f=>s(l.error)};u.onsuccess=h,u.onerror=d=>(h(),r.close(),s(l.error))}},l.onerror=u=>(r.close(),s(l.error)),i.oncomplete=()=>{c==null?r.close():c.oncomplete=()=>r.close()}},o.onerror=r=>s(o.error)})})}}const ps="/",Ko="tensorflowjs_models",om="info",OC="model_topology",MC="weight_specs",LC="weight_data",PC="model_metadata";function rm(n){return{info:[Ko,n,om].join(ps),topology:[Ko,n,OC].join(ps),weightSpecs:[Ko,n,MC].join(ps),weightData:[Ko,n,LC].join(ps),modelMetadata:[Ko,n,PC].join(ps)}}function im(n){for(const t of Object.values(n))window.localStorage.removeItem(t)}function BC(n){const t=n.split(ps);if(t.length<3)throw new Error(`Invalid key format: ${n}`);return t.slice(1,t.length-1).join(ps)}function zC(n){return n.startsWith(lo.URL_SCHEME)?n.slice(lo.URL_SCHEME.length):n}class lo{constructor(t){if(!H().getBool("IS_BROWSER")||typeof window=="undefined"||typeof window.localStorage=="undefined")throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,t==null||!t)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=t,this.keys=rm(this.modelPath)}save(t){return Z(this,null,function*(){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{const e=JSON.stringify(t.modelTopology),s=JSON.stringify(t.weightSpecs),o=Dl(t),r=Fs.join(t.weightData);try{this.LS.setItem(this.keys.info,JSON.stringify(o)),this.LS.setItem(this.keys.topology,e),this.LS.setItem(this.keys.weightSpecs,s),this.LS.setItem(this.keys.weightData,SC(r));const i={format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,signature:t.signature!=null?t.signature:void 0,userDefinedMetadata:t.userDefinedMetadata!=null?t.userDefinedMetadata:void 0,modelInitializer:t.modelInitializer!=null?t.modelInitializer:void 0,initializerSignature:t.initializerSignature!=null?t.initializerSignature:void 0,trainingConfig:t.trainingConfig!=null?t.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(i)),{modelArtifactsInfo:o}}catch(i){throw im(this.keys),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${o.modelTopologyBytes}, weightSpecsBytes=${o.weightSpecsBytes}, weightDataBytes=${o.weightDataBytes}.`)}}})}load(){return Z(this,null,function*(){const t=JSON.parse(this.LS.getItem(this.keys.info));if(t==null)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if(t.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");const e={},s=JSON.parse(this.LS.getItem(this.keys.topology));if(s==null)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);e.modelTopology=s;const o=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(o==null)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);e.weightSpecs=o;const r=this.LS.getItem(this.keys.modelMetadata);if(r!=null){const a=JSON.parse(r);e.format=a.format,e.generatedBy=a.generatedBy,e.convertedBy=a.convertedBy,a.signature!=null&&(e.signature=a.signature),a.userDefinedMetadata!=null&&(e.userDefinedMetadata=a.userDefinedMetadata),a.modelInitializer!=null&&(e.modelInitializer=a.modelInitializer),a.initializerSignature!=null&&(e.initializerSignature=a.initializerSignature),a.trainingConfig!=null&&(e.trainingConfig=a.trainingConfig)}const i=this.LS.getItem(this.keys.weightData);if(i==null)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return e.weightData=NC(i),e})}}lo.URL_SCHEME="localstorage://";const am=n=>H().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(lo.URL_SCHEME)?VC(n.slice(lo.URL_SCHEME.length)):null;ve.registerSaveRouter(am),ve.registerLoadRouter(am);function VC(n){return new lo(n)}class WC{constructor(){T(H().getBool("IS_BROWSER"),()=>"Current environment is not a web browser"),T(typeof window=="undefined"||typeof window.localStorage!="undefined",()=>"Current browser does not appear to support localStorage"),this.LS=window.localStorage}listModels(){return Z(this,null,function*(){const t={},e=Ko+ps,s=ps+om;for(let o=0;o<this.LS.length;++o){const r=this.LS.key(o);if(r.startsWith(e)&&r.endsWith(s)){const i=BC(r);t[i]=JSON.parse(this.LS.getItem(r))}}return t})}removeModel(t){return Z(this,null,function*(){t=zC(t);const e=rm(t);if(this.LS.getItem(e.info)==null)throw new Error(`Cannot find model at path '${t}'`);const s=JSON.parse(this.LS.getItem(e.info));return im(e),s})}}const lm="://";class Zn{constructor(){this.managers={}}static getInstance(){return Zn.instance==null&&(Zn.instance=new Zn),Zn.instance}static registerManager(t,e){T(t!=null,()=>"scheme must not be undefined or null."),t.endsWith(lm)&&(t=t.slice(0,t.indexOf(lm))),T(t.length>0,()=>"scheme must not be an empty string.");const s=Zn.getInstance();T(s.managers[t]==null,()=>`A model store manager is already registered for scheme '${t}'.`),s.managers[t]=e}static getManager(t){const e=Zn.getInstance().managers[t];if(e==null)throw new Error(`Cannot find model manager for scheme '${t}'`);return e}static getSchemes(){return Object.keys(Zn.getInstance().managers)}}class UC{constructor(){this.messageName="setTimeoutCustom",this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}fetch(t,e){return fetch(t,e)}now(){return performance.now()}encode(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error(`Browser's encoder only supports utf-8, but got ${e}`);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(t)}decode(t,e){return new TextDecoder(e).decode(t)}setTimeoutCustom(t,e){if(typeof window=="undefined"||!H().getBool("USE_SETTIMEOUTCUSTOM")){setTimeout(t,e);return}this.functionRefs.push(t),setTimeout(()=>{window.postMessage({name:this.messageName,index:this.functionRefs.length-1},"*")},e),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener("message",s=>{if(s.source===window&&s.data.name===this.messageName){s.stopPropagation();const o=this.functionRefs[s.data.index];o(),this.handledMessageCount++,this.handledMessageCount===this.functionRefs.length&&(this.functionRefs=[],this.handledMessageCount=0)}},!0))}isTypedArray(t){return Nf(t)}}if(H().get("IS_BROWSER")){H().setPlatform("browser",new UC);try{Zn.registerManager(lo.URL_SCHEME,new WC)}catch(n){}try{Zn.registerManager(ao.URL_SCHEME,new _C)}catch(n){}}const GC={importFetch:()=>require("node-fetch")};let mh;class HC{constructor(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder}fetch(t,e){return H().global.fetch!=null?H().global.fetch(t,e):(mh==null&&(mh=GC.importFetch()),mh(t,e))}now(){const t=process.hrtime();return t[0]*1e3+t[1]/1e6}encode(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error(`Node built-in encoder only supports utf-8, but got ${e}`);return this.textEncoder.encode(t)}decode(t,e){return t.length===0?"":new this.util.TextDecoder(e).decode(t)}isTypedArray(t){return this.util.types.isFloat32Array(t)||this.util.types.isInt32Array(t)||this.util.types.isUint8Array(t)||this.util.types.isUint8ClampedArray(t)}}H().get("IS_NODE")&&!H().get("IS_BROWSER")&&H().setPlatform("node",new HC);function Et(n,t="float32",e){return t=t||"float32",ds(n),new Re(n,t,e)}function qC(n,t){const e=D(n,"x","cast");if(!Mw(t))throw new Error(`Failed to cast to unknown dtype ${t}`);if(t==="string"&&e.dtype!=="string"||t!=="string"&&e.dtype==="string")throw new Error("Only strings can be casted to strings");const s={x:e},o={dtype:t};return B.runKernel(Lr,s,o)}const at=W({cast_:qC});function XC(n){const e={x:D(n,"x","clone","string_or_numeric")};return B.runKernel(Yr,e)}const co=W({clone_:XC});function KC(n,t=!1){console.log(n.toString(t))}Wf(),mC({buffer:Et,cast:at,clone:co,print:KC});function jC(n,t){let e=D(n,"a","add"),s=D(t,"b","add");[e,s]=re(e,s);const o={a:e,b:s};return B.runKernel(Uo,o)}const et=W({add_:jC});function YC(n,t){let e=D(n,"a","floorDiv"),s=D(t,"b","floorDiv");[e,s]=re(e,s);const o={a:e,b:s};return B.runKernel(Kr,o)}const cm=W({floorDiv_:YC});function ZC(n,t){let e=D(n,"a","div"),s=D(t,"b","div");if([e,s]=re(e,s),e.dtype==="int32"&&s.dtype==="int32")return cm(e,s);const o={a:e,b:s},r={};return B.runKernel(Wr,o,r)}const gt=W({div_:ZC});function QC(n,t){let e=D(n,"a","mul"),s=D(t,"b","mul");[e,s]=re(e,s);const o={a:e,b:s};return B.runKernel(ri,o)}const P=W({mul_:QC});function JC(n){const t=D(n,"x","abs");if(t.dtype==="complex64"){const e={x:t};return B.runKernel(Ea,e)}else{const e={x:t};return B.runKernel($a,e)}}const qe=W({abs_:JC});function t$(n){const e={x:D(n,"x","acos")};return B.runKernel(Rr,e)}const e$=W({acos_:t$});function n$(n){const e={x:D(n,"x","acosh")};return B.runKernel(Ar,e)}const s$=W({acosh_:n$});function o$(n,t=null,e=!1){const o={x:D(n,"x","all","bool")},r={axis:t,keepDims:e};return B.runKernel(pu,o,r)}const um=W({all_:o$});function r$(n,t=null,e=!1){const o={x:D(n,"x","any","bool")},r={axis:t,keepDims:e};return B.runKernel(fu,o,r)}const gh=W({any_:r$});function i$(n,t=0){const s={x:D(n,"x","argMax")},o={axis:t};return B.runKernel(Ia,s,o)}const Ti=W({argMax_:i$});function a$(n,t=0){const s={x:D(n,"x","argMin")},o={axis:t};return B.runKernel(va,s,o)}const l$=W({argMin_:a$});function c$(n){const e={x:D(n,"x","asin")};return B.runKernel(Dr,e)}const u$=W({asin_:c$});function h$(n){const e={x:D(n,"x","asinh")};return B.runKernel(Fr,e)}const d$=W({asinh_:h$});function p$(n){const e={x:D(n,"x","atan")};return B.runKernel(_r,e)}const f$=W({atan_:p$});function m$(n,t){let e=D(n,"a","atan2"),s=D(t,"b","atan2");[e,s]=re(e,s);const o={a:e,b:s};return B.runKernel(Mr,o)}const g$=W({atan2_:m$});function x$(n){const e={x:D(n,"x","atanh")};return B.runKernel(Or,e)}const b$=W({atanh_:x$});function Ei(n,t,e,s,o="NHWC",r){const i=n[3],a=[...t,i],l=ms(o);return Ae(n,a,e,r,s,null,null,l)}function In(n,t,e,s,o,r,i="channelsLast"){const[a,l]=Ri(t);let c;if(i==="channelsLast")c=[a,l,n[3],n[3]];else if(i==="channelsFirst")c=[a,l,n[1],n[1]];else throw new Error(`Unknown dataFormat ${i}`);return Ae(n,c,e,s,o,r,!1,i)}function fs(n,t,e,s,o,r,i="NDHWC"){const[a,l,c]=bh(t);let u,h;if(i==="NDHWC")h="channelsLast",u=[a,l,c,n[4],n[4]];else if(i==="NCDHW")h="channelsFirst",u=[a,l,c,n[1],n[1]];else throw new Error(`Unknown dataFormat ${i}`);return Os(n,u,e,s,o,!1,h,r)}function Ae(n,t,e,s,o,r,i=!1,a="channelsLast"){let[l,c,u,h]=[-1,-1,-1,-1];if(a==="channelsLast")[l,c,u,h]=n;else if(a==="channelsFirst")[l,h,c,u]=n;else throw new Error(`Unknown dataFormat ${a}`);const[d,p,,f]=t,[m,g]=Ri(e),[x,b]=Ri(s),y=jo(d,x),w=jo(p,b),{padInfo:C,outHeight:I,outWidth:v}=C$(o,c,u,m,g,y,w,r,a),N=i?f*h:f;let k;return a==="channelsFirst"?k=[l,N,I,v]:a==="channelsLast"&&(k=[l,I,v,N]),{batchSize:l,dataFormat:a,inHeight:c,inWidth:u,inChannels:h,outHeight:I,outWidth:v,outChannels:N,padInfo:C,strideHeight:m,strideWidth:g,filterHeight:d,filterWidth:p,effectiveFilterHeight:y,effectiveFilterWidth:w,dilationHeight:x,dilationWidth:b,inShape:n,outShape:k,filterShape:t}}function Os(n,t,e,s,o,r=!1,i="channelsLast",a){let[l,c,u,h,d]=[-1,-1,-1,-1,-1];if(i==="channelsLast")[l,c,u,h,d]=n;else if(i==="channelsFirst")[l,d,c,u,h]=n;else throw new Error(`Unknown dataFormat ${i}`);const[p,f,m,,g]=t,[x,b,y]=bh(e),[w,C,I]=bh(s),v=jo(p,w),N=jo(f,C),k=jo(m,I),{padInfo:S,outDepth:$,outHeight:E,outWidth:R}=$$(o,c,u,h,x,b,y,v,N,k,a),F=r?g*d:g;let A;return i==="channelsFirst"?A=[l,F,$,E,R]:i==="channelsLast"&&(A=[l,$,E,R,F]),{batchSize:l,dataFormat:i,inDepth:c,inHeight:u,inWidth:h,inChannels:d,outDepth:$,outHeight:E,outWidth:R,outChannels:F,padInfo:S,strideDepth:x,strideHeight:b,strideWidth:y,filterDepth:p,filterHeight:f,filterWidth:m,effectiveFilterDepth:v,effectiveFilterHeight:N,effectiveFilterWidth:k,dilationDepth:w,dilationHeight:C,dilationWidth:I,inShape:n,outShape:A,filterShape:t}}function y$(n,t,e,s,o){s==null&&(s=xh(n,t,e));const r=n[0],i=n[1],a=Ai((r-t+2*s)/e+1,o),l=Ai((i-t+2*s)/e+1,o);return[a,l]}function w$(n,t,e,s,o,r){o==null&&(o=xh(n,t[0],s[0]));const i=[0,0,0,e];for(let a=0;a<3;a++)n[a]+2*o>=t[a]&&(i[a]=Ai((n[a]-t[a]+2*o)/s[a]+1,r));return i}function xh(n,t,e,s=1){const o=jo(t,s);return Math.floor((n[0]*(e-1)-e+o)/2)}function Ri(n){return typeof n=="number"?[n,n,n]:n.length===2?[n[0],n[1],1]:n}function bh(n){return typeof n=="number"?[n,n,n]:n}function jo(n,t){return t<=1?n:n+(n-1)*(t-1)}function C$(n,t,e,s,o,r,i,a,l){let c,u,h;if(typeof n=="number"){c={top:n,bottom:n,left:n,right:n,type:n===0?"VALID":"NUMBER"};const p=y$([t,e],r,s,n,a);u=p[0],h=p[1]}else if(n==="same"){u=Math.ceil(t/s),h=Math.ceil(e/o);const d=Math.max(0,(u-1)*s+r-t),p=Math.max(0,(h-1)*o+i-e),f=Math.floor(d/2),m=d-f,g=Math.floor(p/2),x=p-g;c={top:f,bottom:m,left:g,right:x,type:"SAME"}}else if(n==="valid")c={top:0,bottom:0,left:0,right:0,type:"VALID"},u=Math.ceil((t-r+1)/s),h=Math.ceil((e-i+1)/o);else if(typeof n=="object"){const d=l==="channelsLast"?n[1][0]:n[2][0],p=l==="channelsLast"?n[1][1]:n[2][1],f=l==="channelsLast"?n[2][0]:n[3][0],m=l==="channelsLast"?n[2][1]:n[3][1];c={top:d,bottom:p,left:f,right:m,type:d===0&&p===0&&f===0&&m===0?"VALID":"EXPLICIT"},u=Ai((t-r+d+p)/s+1,a),h=Ai((e-i+f+m)/o+1,a)}else throw Error(`Unknown padding parameter: ${n}`);return{padInfo:c,outHeight:u,outWidth:h}}function $$(n,t,e,s,o,r,i,a,l,c,u){let h,d,p,f;if(n==="valid"&&(n=0),typeof n=="number"){h={top:n,bottom:n,left:n,right:n,front:n,back:n,type:n===0?"VALID":"NUMBER"};const g=w$([t,e,s,1],[a,l,c],1,[o,r,i],n,u);d=g[0],p=g[1],f=g[2]}else if(n==="same"){d=Math.ceil(t/o),p=Math.ceil(e/r),f=Math.ceil(s/i);const m=(d-1)*o+a-t,g=(p-1)*r+l-e,x=(f-1)*i+c-s,b=Math.floor(m/2),y=m-b,w=Math.floor(g/2),C=g-w,I=Math.floor(x/2),v=x-I;h={top:w,bottom:C,left:I,right:v,front:b,back:y,type:"SAME"}}else throw Error(`Unknown padding parameter: ${n}`);return{padInfo:h,outDepth:d,outHeight:p,outWidth:f}}function Ai(n,t){if(!t)return Math.trunc(n);switch(t){case"round":return Math.round(n);case"ceil":return Math.ceil(n);case"floor":return Math.floor(n);default:throw new Error(`Unknown roundingMode ${t}`)}}function uo(n){const[t,e,s]=Ri(n);return t===1&&e===1&&s===1}function ze(n,t){return uo(n)||uo(t)}function ho(n){return Ri(n).every(t=>t>0)}function ms(n){if(n==="NHWC")return"channelsLast";if(n==="NCHW")return"channelsFirst";throw new Error(`Unknown dataFormat ${n}`)}function tn(n,t,e){if(e!=null){if(typeof t=="string")throw Error(`Error in ${n}: pad must be an integer when using dimRoundingMode ${e} but got pad ${t}.`);if(typeof t=="number")T(Bo(t),()=>`Error in ${n}: pad must be an integer when using dimRoundingMode ${e} but got pad ${t}.`);else if(typeof t=="object")t.forEach(s=>{s.forEach(o=>{T(Bo(o),()=>`Error in ${n}: pad must be an integer when using dimRoundingMode ${e} but got pad ${o}.`)})});else throw Error(`Error in ${n}: Unknown padding parameter: ${t}`)}}function I$(n,t){const s={x:D(n,"x","reshape","string_or_numeric")},o={shape:t};return B.runKernel(cl,s,o)}const z=W({reshape_:I$});function v$(n,t,e,s,o){const r=D(n,"x","avgPool","float32"),i=1;T(ze(e,i),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${e} and dilations '${i}'`);let a=r,l=!1;r.rank===3&&(l=!0,a=z(r,[1,r.shape[0],r.shape[1],r.shape[2]])),T(a.rank===4,()=>`Error in avgPool: x must be rank 4 but got rank ${a.rank}.`),tn("avgPool",s,o);const c={x:a},u={filterSize:t,strides:e,pad:s,dimRoundingMode:o};let h=B.runKernel(ka,c,u);return h=at(h,r.dtype),l?z(h,[h.shape[1],h.shape[2],h.shape[3]]):h}const yh=W({avgPool_:v$});function k$(n,t,e,s,o,r="NDHWC"){const i=D(n,"x","avgPool3d","float32");let a=i,l=!1;i.rank===4&&(l=!0,a=z(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]])),T(a.rank===5,()=>`Error in avgPool3d: x must be rank 5 but got rank ${a.rank}.`),T(r==="NDHWC",()=>`Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of ${r}`),T(typeof e=="number"&&e>0||Array.isArray(e)&&e[0]>0&&e[1]>0&&e[2]>0,()=>`Error in avgPool3d: Stride must be > 0, but got '${e}'`),tn("avgPool3d",s,o);const c={x:a},u={filterSize:t,strides:e,pad:s,dimRoundingMode:o,dataFormat:r};let h=B.runKernel(Sa,c,u);return h=at(h,a.dtype),l?z(h,[h.shape[1],h.shape[2],h.shape[3],h.shape[4]]):h}const S$=W({avgPool3d_:k$});function N$(n,t=0){T(n.length>=1,()=>"Pass at least one tensor to concat");const e=Xf(n,"tensors","concat","string_or_numeric");if(e[0].dtype==="complex64"&&e.forEach(r=>{if(r.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype ${r.dtype}. `)}),e.length===1)return co(e[0]);const s=e,o={axis:t};return B.runKernel(Ra,s,o)}const en=W({concat_:N$});function T$(n,t,e=!1,s=!1){let o=D(n,"a","matMul"),r=D(t,"b","matMul");[o,r]=re(o,r);const i={a:o,b:r},a={transposeA:e,transposeB:s};return B.runKernel(Na,i,a)}const zt=W({matMul_:T$});function E$(n){const e={x:D(n,"x","sigmoid","float32")};return B.runKernel(gi,e)}const Yo=W({sigmoid_:E$});function R$(n,t,e){const s=D(n,"x","slice","string_or_numeric");if(s.rank===0)throw new Error("Slicing scalar is not possible");const o={x:s},r={begin:t,size:e};return B.runKernel(fl,o,r)}const Kt=W({slice_:R$});function A$(n){const e={x:D(n,"x","tanh","float32")};return B.runKernel($i,e)}const Fl=W({tanh_:A$});function D$(n,t,e){const s=D(n,"x","batchToSpaceND"),o=t.reduce((a,l)=>a*l);T(s.rank>=1+t.length,()=>`input rank is ${s.rank} but should be > than blockShape.length ${t.length}`),T(e.length===t.length,()=>`crops.length is ${e.length} but should be equal to blockShape.length  ${t.length}`),T(s.shape[0]%o===0,()=>`input tensor batch is ${s.shape[0]} but is not divisible by the product of the elements of blockShape ${t.join(" * ")} === ${o}`);const r={x:s},i={blockShape:t,crops:e};return B.runKernel(Ta,r,i)}const wh=W({batchToSpaceND_:D$});function F$(n){let t;return n.rank===0||n.rank===1?t=z(n,[1,1,1,n.size]):n.rank===2?t=z(n,[1,1,n.shape[0],n.shape[1]]):n.rank===3?t=z(n,[1,n.shape[0],n.shape[1],n.shape[2]]):t=n,t}function _$(n,t,e,s,o,r){r==null&&(r=.001);const i=D(n,"x","batchNorm"),a=D(t,"mean","batchNorm"),l=D(e,"variance","batchNorm");let c;o!=null&&(c=D(o,"scale","batchNorm"));let u;s!=null&&(u=D(s,"offset","batchNorm")),T(a.rank===l.rank,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),T(u==null||a.rank===u.rank,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),T(c==null||a.rank===c.rank,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");const d={x:F$(i),scale:c,offset:u,mean:a,variance:l},p={varianceEpsilon:r},f=B.runKernel(Ba,d,p);return z(f,i.shape)}const _l=W({batchNorm_:_$});function O$(n,t,e,s,o,r){const i=D(n,"x","batchNorm"),a=D(t,"mean","batchNorm"),l=D(e,"variance","batchNorm");let c;o!=null&&(c=D(o,"scale","batchNorm"));let u;return s!=null&&(u=D(s,"offset","batchNorm")),T(i.rank===2,()=>`Error in batchNorm2D: x must be rank 2 but got rank ${i.rank}.`),T(a.rank===2||a.rank===1,()=>`Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ${a.rank}.`),T(l.rank===2||l.rank===1,()=>`Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ${l.rank}.`),c!=null&&T(c.rank===2||c.rank===1,()=>`Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ${c.rank}.`),u!=null&&T(u.rank===2||u.rank===1,()=>`Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ${u.rank}.`),_l(i,a,l,u,c,r)}const M$=W({batchNorm2d_:O$});function L$(n,t,e,s,o,r){const i=D(n,"x","batchNorm"),a=D(t,"mean","batchNorm"),l=D(e,"variance","batchNorm");let c;o!=null&&(c=D(o,"scale","batchNorm"));let u;return s!=null&&(u=D(s,"offset","batchNorm")),T(i.rank===3,()=>`Error in batchNorm3D: x must be rank 3 but got rank ${i.rank}.`),T(a.rank===3||a.rank===1,()=>`Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ${a.rank}.`),T(l.rank===3||l.rank===1,()=>`Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ${l.rank}.`),c!=null&&T(c.rank===3||c.rank===1,()=>`Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ${c.rank}.`),u!=null&&T(u.rank===3||u.rank===1,()=>`Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ${u.rank}.`),_l(i,a,l,u,c,r)}const P$=W({batchNorm3d_:L$});function B$(n,t,e,s,o,r){const i=D(n,"x","batchNorm"),a=D(t,"mean","batchNorm"),l=D(e,"variance","batchNorm");let c;o!=null&&(c=D(o,"scale","batchNorm"));let u;return s!=null&&(u=D(s,"offset","batchNorm")),T(i.rank===4,()=>`Error in batchNorm4D: x must be rank 4 but got rank ${i.rank}.`),T(a.rank===4||a.rank===1,()=>`Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ${a.rank}.`),T(l.rank===4||l.rank===1,()=>`Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ${l.rank}.`),c!=null&&T(c.rank===4||c.rank===1,()=>`Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ${c.rank}.`),u!=null&&T(u.rank===4||u.rank===1,()=>`Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ${u.rank}.`),_l(i,a,l,u,c,r)}const z$=W({batchNorm4d_:B$});function V$(n,t,e){const s=D(n,"x","bincount"),o=D(t,"weights","bincount");T(s.dtype==="int32",()=>`Error in bincount: input dtype must be int32, but got ${s.dtype}`),T(e>=0,()=>`size must be non-negative, but got ${e}.`),T(o.size===s.size||o.size===0,()=>`Error in bincount: weights must have the same size as input or0-length, but got input shape: ${s.shape}, weights shape: ${o.shape}.`);const r={x:s,weights:o},i={size:e};return B.runKernel(xu,r,i)}const W$=W({bincount_:V$});function U$(n,t){let e=D(n,"broadcastTo","x");const s=e.shape;if(ds(t),t.length<e.rank)throw new Error(`broadcastTo(): shape.length=${t.length} < input.rank=${e.rank}.`);if(t.length>e.rank){const c=e.shape.slice();for(;c.length<t.length;)c.unshift(1);e=z(e,c)}const o=e.shape,r=Array.from(t);for(let c=t.length-1;c>=0;c--)if(o[c]===t[c])r[c]=1;else if(e.shape[c]!==1)throw new Error(`broadcastTo(): [${s}] cannot be broadcast to [${t}].`);if(r.map((c,u)=>c>1?u:-1).filter(c=>c>=0).length===0)return co(e);const a={x:e},l={reps:r};return B.runKernel(Ii,a,l)}const Di=W({broadcastTo_:U$});function G$(n){const e={x:D(n,"x","ceil","float32")};return B.runKernel(Pr,e)}const H$=W({ceil_:G$});function Ol(n,t,e){ds(n),e=e||Vo(t);const s={shape:n,value:t,dtype:e};return B.runKernel(_u,{},s)}function q$(n,t,e){const s=D(n,"x","clipByValue");if(T(t<=e,()=>`Error in clip: min (${t}) must be less than or equal to max (${e}).`),t===e)return Ol(s.shape,t,s.dtype);const o={x:s},r={clipValueMin:t,clipValueMax:e};return B.runKernel(Br,o,r)}const xn=W({clipByValue_:q$});function X$(n){return en(n,0)}const K$=W({concat1d_:X$});function j$(n,t){return en(n,t)}const Y$=W({concat2d_:j$});function Z$(n,t){return en(n,t)}const Q$=W({concat3d_:Z$});function J$(n,t){return en(n,t)}const tI=W({concat4d_:J$});function eI(n,t,e,s,o="NHWC",r=[1,1],i){const a=D(n,"x","conv2d","float32"),l=D(t,"filter","conv2d","float32");let c=a,u=!1;a.rank===3&&(u=!0,c=z(a,[1,a.shape[0],a.shape[1],a.shape[2]])),T(c.rank===4,()=>`Error in conv2d: input must be rank 4, but got rank ${c.rank}.`),T(l.rank===4,()=>`Error in conv2d: filter must be rank 4, but got rank ${l.rank}.`),tn("conv2d",s,i);const h=o==="NHWC"?c.shape[3]:c.shape[1];T(h===l.shape[2],()=>`Error in conv2d: depth of input (${h}) must match input depth for filter ${l.shape[2]}.`),T(ze(e,r),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${e} and dilations '${r}'`),T(ho(r),()=>"Error in conv2D: Dilated rates should be larger than 0."),T(ho(e),()=>"Error in conv2D: Strides should be larger than 0.");const d={x:c,filter:l},p={strides:e,pad:s,dataFormat:o,dilations:r,dimRoundingMode:i},f=B.runKernel(Aa,d,p);return u?z(f,[f.shape[1],f.shape[2],f.shape[3]]):f}const po=W({conv2d_:eI});function nI(n,t,e,s,o="NWC",r=1,i){const a=D(n,"x","conv1d"),l=D(t,"filter","conv1d");let c=a,u=!1;a.rank===2&&(u=!0,c=z(a,[1,a.shape[0],a.shape[1]])),T(c.rank===3,()=>`Error in conv1d: input must be rank 3, but got rank ${c.rank}.`),T(l.rank===3,()=>`Error in conv1d: filter must be rank 3, but got rank ${l.rank}.`),tn("conv1d",s,i),T(c.shape[2]===l.shape[1],()=>`Error in conv1d: depth of input (${c.shape[2]}) must match input depth for filter ${l.shape[1]}.`),T(ze(e,r),()=>`Error in conv1D: Either stride or dilation must be 1. Got stride ${e} and dilation '${r}'`),T(ho(r),()=>"Error in conv1D: Dilated rates should be larger than 0."),T(ho(e),()=>"Error in conv1D: Stride should be larger than 0."),T(o==="NWC",()=>`Error in conv1d: got dataFormat of ${o} but only NWC is currently supported.`);const h=z(l,[1,l.shape[0],l.shape[1],l.shape[2]]),d=z(c,[c.shape[0],1,c.shape[1],c.shape[2]]),g=po(d,h,[1,e],s,"NHWC",[1,r],i);return u?z(g,[g.shape[2],g.shape[3]]):z(g,[g.shape[0],g.shape[2],g.shape[3]])}const hm=W({conv1d_:nI});function sI(n,t,e,s,o,r="NHWC",i){T(n.length===t.rank,()=>`Length of inShape (${n.length}) and rank of dy (${t.rank}) must match`);let a=n,l=t,c=!1;t.rank===3&&(c=!0,l=z(t,[1,t.shape[0],t.shape[1],t.shape[2]]),a=[1,n[0],n[1],n[2]]),T(a.length===4,()=>`Error in conv2dDerInput: inShape must be length 4, but got length ${a.length}.`),T(l.rank===4,()=>`Error in conv2dDerInput: dy must be rank 4, but got rank ${l.rank}`),T(e.rank===4,()=>`Error in conv2dDerInput: filter must be rank 4, but got rank ${e.rank}`);const u=r==="NHWC"?a[3]:a[1],h=r==="NHWC"?l.shape[3]:l.shape[1];T(u===e.shape[2],()=>`Error in conv2dDerInput: depth of input (${u}) must match input depth for filter ${e.shape[2]}.`),T(h===e.shape[3],()=>`Error in conv2dDerInput: depth of output (${h}) must match output depth for filter ${e.shape[3]}.`),tn("conv2dDerInput",o,i);const d={dy:l,filter:e},p={strides:s,pad:o,dataFormat:r,dimRoundingMode:i,inputShape:a},f=B.runKernel(Da,d,p);return c?z(f,[f.shape[1],f.shape[2],f.shape[3]]):f}const Ch=W({conv2DBackpropInput_:sI});function oI(n,t,e,s,o,r){const i=D(n,"x","conv2dTranspose"),a=D(t,"filter","conv2dTranspose");return Ch(e,i,a,s,o,"NHWC",r)}const dm=W({conv2dTranspose_:oI});function rI(n,t,e,s,o="NDHWC",r=[1,1,1]){const i=D(n,"x","conv3d"),a=D(t,"filter","conv3d");let l=i,c=!1;i.rank===4&&(c=!0,l=z(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]])),T(l.rank===5,()=>`Error in conv3d: input must be rank 5, but got rank ${l.rank}.`),T(a.rank===5,()=>`Error in conv3d: filter must be rank 5, but got rank ${a.rank}.`),T(l.shape[4]===a.shape[3],()=>`Error in conv3d: depth of input (${l.shape[4]}) must match input depth for filter ${a.shape[3]}.`),T(ze(e,r),()=>`Error in conv3D: Either strides or dilations must be 1. Got strides ${e} and dilations '${r}'`),T(o==="NDHWC",()=>`Error in conv3d: got dataFormat of ${o} but only NDHWC is currently supported.`),T(ho(r),()=>"Error in conv3D: Dilated rates should be larger than 0."),T(ho(e),()=>"Error in conv3D: Strides should be larger than 0.");const u={x:l,filter:a},h={strides:e,pad:s,dataFormat:o,dilations:r},d=B.runKernel(Fa,u,h);return c?z(d,[d.shape[1],d.shape[2],d.shape[3],d.shape[4]]):d}const iI=W({conv3d_:rI});function aI(n,t,e,s,o){T(n.length===t.rank,()=>`Length of inShape (${n.length}) and rank of dy (${t.rank}) must match`);let r=n,i=t,a=!1;t.rank===4&&(a=!0,i=z(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]]),r=[1,n[0],n[1],n[2],n[3]]);const l=r[4],c=i.shape[4];T(r.length===5,()=>`Error in conv3dDerInput: inShape must be length 5, but got length ${r.length}.`),T(i.rank===5,()=>`Error in conv3dDerInput: dy must be rank 5, but got rank ${i.rank}`),T(e.rank===5,()=>`Error in conv3dDerInput: filter must be rank 5, but got rank ${e.rank}`),T(l===e.shape[3],()=>`Error in conv3dDerInput: depth of input (${l}) must match input depth for filter ${e.shape[3]}.`),T(c===e.shape[4],()=>`Error in conv3dDerInput: depth of output (${c}) must match output depth for filter ${e.shape[4]}.`);const u={dy:i,filter:e},h={pad:o,strides:s,inputShape:r},d=B.runKernel($u,u,h);return a?z(d,[d.shape[1],d.shape[2],d.shape[3],d.shape[4]]):d}const pm=W({conv3DBackpropInput_:aI});function lI(n,t,e,s,o){const r=D(n,"x","conv3dTranspose"),i=D(t,"filter","conv3dTranspose");return pm(e,r,i,s,o)}const cI=W({conv3dTranspose_:lI});function uI(n){const e={x:D(n,"x","cos","float32")};return B.runKernel(zr,e)}const $h=W({cos_:uI});function hI(n){const e={x:D(n,"x","cosh","float32")};return B.runKernel(Vr,e)}const fm=W({cosh_:hI});function dI(n,t=0,e=!1,s=!1){const r={x:D(n,"x","cumprod")},i={axis:t,exclusive:e,reverse:s};return B.runKernel(Iu,r,i)}const Ih=W({cumprod_:dI});function pI(n,t=0,e=!1,s=!1){const r={x:D(n,"x","cumsum")},i={axis:t,exclusive:e,reverse:s};return B.runKernel(_a,r,i)}const mm=W({cumsum_:pI});function fI(n,t,e,s=!1){const o=D(n,"x","denseBincount"),r=D(t,"weights","denseBincount");T(o.dtype==="int32",()=>`Error in denseBincount: input dtype must be int32, but got ${o.dtype}`),T(o.rank<=2,()=>`Error in denseBincount: input must be at most rank 2, but got rank ${o.rank}.`),T(e>=0,()=>`size must be non-negative, but got ${e}.`),T(r.size===o.size||r.size===0,()=>`Error in denseBincount: weights must have the same shape as x or 0-length, but got x shape: ${o.shape}, weights shape: ${r.shape}.`);const i={x:o,weights:r},a={size:e,binaryOutput:s};return B.runKernel(ku,i,a)}const gm=W({denseBincount_:fI});function mI(n,t,e="NHWC"){const s=D(n,"x","depthToSpace","float32"),o=e==="NHWC"?s.shape[1]:s.shape[2],r=e==="NHWC"?s.shape[2]:s.shape[3],i=e==="NHWC"?s.shape[3]:s.shape[1];T(t>1,()=>`blockSize should be > 1 for depthToSpace, but was: ${t}`),T(o*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${o} and ${t}  for depthToSpace with input shape
    ${s.shape}`),T(r*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${r} and ${t} for depthToSpace with input shape
        ${s.shape}`),T(i%(t*t)===0,()=>`Dimension size must be evenly divisible by ${t*t} but is ${i} for depthToSpace with input shape ${s.shape}`);const a={x:s},l={blockSize:t,dataFormat:e};return B.runKernel(Su,a,l)}const gI=W({depthToSpace_:mI});function xI(n,t,e,s,o="NHWC",r=[1,1],i){const a=D(n,"x","depthwiseConv2d","float32"),l=D(t,"filter","depthwiseConv2d","float32");let c=a,u=!1;a.rank===3&&(u=!0,c=z(a,[1,a.shape[0],a.shape[1],a.shape[2]])),T(c.rank===4,()=>`Error in depthwiseConv2d: input must be rank 4, but got rank ${c.rank}.`),T(l.rank===4,()=>`Error in depthwiseConv2d: filter must be rank 4, but got rank ${l.rank}.`);const h=o==="NHWC"?c.shape[3]:c.shape[1];T(h===l.shape[2],()=>`Error in depthwiseConv2d: number of input channels (${h}) must match the inChannels dimension in filter ${l.shape[2]}.`),tn("depthwiseConv2d",s,i);const d={x:c,filter:l},p={strides:e,pad:s,dataFormat:o,dilations:r,dimRoundingMode:i},f=B.runKernel(Oa,d,p);return u?z(f,[f.shape[1],f.shape[2],f.shape[3]]):f}const vh=W({depthwiseConv2d_:xI});function bI(n,t,e,s,o=[1,1],r="NHWC"){const i=D(n,"x","dilation2d"),a=D(t,"filter","dilation2d");T(i.rank===3||i.rank===4,()=>`Error in dilation2d: input must be rank 3 or 4, but got rank ${i.rank}.`),T(a.rank===3,()=>`Error in dilation2d: filter must be rank 3, but got rank ${a.rank}.`),T(r==="NHWC",()=>`Error in dilation2d: Only NHWC is currently supported, but got dataFormat of ${r}`);let l=i,c=!1;i.rank===3&&(l=z(i,[1,i.shape[0],i.shape[1],i.shape[2]]),c=!0),T(l.shape[3]===a.shape[2],()=>`Error in dilation2d:  input and filter must have the same depth: ${l.shape[3]} vs ${a.shape[2]}`);const u={x:l,filter:a},h={strides:e,pad:s,dilations:o},d=B.runKernel(Ma,u,h);return c?z(d,[d.shape[1],d.shape[2],d.shape[3]]):d}const yI=W({dilation2d_:bI});function Zo(n,t){const e=n.length,s=[];for(let o=0;o<e;o++){const r=e-1-o,i=n[r]||1;(t[t.length-1-o]||1)>1&&i===1&&s.unshift(r)}return s}function ge(n,t){const e=[];for(let s=0;s<t.length;s++){const o=n[n.length-s-1],r=t.length-s-1,i=t[r];(o==null||o===1&&i>1)&&e.unshift(r)}return e}function $t(n,t){const e=Math.max(n.length,t.length),s=new Array(e);for(let o=0;o<e;o++){let r=n[n.length-o-1];r==null&&(r=1);let i=t[t.length-o-1];if(i==null&&(i=1),r===1)s[e-o-1]=i;else if(i===1)s[e-o-1]=r;else if(r!==i){const a=`Operands could not be broadcast together with shapes ${n} and ${t}.`;throw Error(a)}else s[e-o-1]=r}return s}function wI(n,t){let e=D(n,"a","equal","string_or_numeric"),s=D(t,"b","equal","string_or_numeric");[e,s]=re(e,s),$t(e.shape,s.shape);const o={a:e,b:s};return B.runKernel(La,o)}const Qn=W({equal_:wI});function CI(n,t,e){const s=D(t,"a","where"),o=D(e,"b","where"),r=D(n,"condition","where","bool"),i=$t($t(r.shape,s.shape),o.shape),a=Di(r,i),l=Di(s,i),c=Di(o,i),u={condition:a,t:l,e:c};return B.runKernel(pl,u)}const Xe=W({where_:CI});function $I(n){const e={x:D(n,"x","zerosLike")};return B.runKernel(Cl,e)}const _t=W({zerosLike_:$I});function II(n,t){let e=D(n,"a","div"),s=D(t,"b","div");[e,s]=re(e,s);const o=gt(e,s),r=_t(o),i=Qn(s,r);return Xe(i,r,o)}const vI=W({divNoNan_:II});function kI(n,t){const e=D(n,"t1","dot"),s=D(t,"t2","dot");T((e.rank===1||e.rank===2)&&(s.rank===1||s.rank===2),()=>`Error in dot: inputs must all be rank 1 or 2, but got ranks ${e.rank} and ${s.rank}.`);const o=e.rank===1?e.size:e.shape[1],r=s.rank===1?s.size:s.shape[0];if(T(o===r,()=>`Error in dot: inner dimensions of inputs must match, but got ${o} and ${r}.`),e.rank===1&&s.rank===1){const i=z(e,[1,-1]),a=z(s,[-1,1]),l=zt(i,a);return z(l,[])}else if(e.rank===1&&s.rank===2){const i=z(e,[1,-1]),a=z(s,[s.shape[0],s.shape[1]]),l=zt(i,a);return z(l,[l.size])}else if(e.rank===2&&s.rank===1){const i=z(s,[-1,1]),a=zt(e,i);return z(a,[a.size])}else{const i=z(s,[s.shape[0],s.shape[1]]);return zt(e,i)}}const SI=W({dot_:kI});function NI(n,...t){const e=t.map((o,r)=>D(o,`tensors${r}`,"einsum")),s={equation:n};return B.runKernel(Au,e,s)}const Fi=W({einsum_:NI});function TI(n){const e={x:D(n,"x","elu","float32")};return B.runKernel(Ur,e)}const Ml=W({elu_:TI});function EI(n){let t=D(n,"x","erf");T(t.dtype==="int32"||t.dtype==="float32",()=>"Input dtype must be `int32` or `float32`."),t.dtype==="int32"&&(t=at(t,"float32"));const e={x:t};return B.runKernel(Gr,e)}const xm=W({erf_:EI});function kh(n,t){for(let e=0;e<n.length;++e)if(n[n.length-e-1]!==t-1-e)return!1;return!0}function bm(n,t,e){const s=n.length+t.length,o=[];let r=0,i=0;for(let a=0;a<s;a++)e.indexOf(a)===-1?o.push(n[r++]):o.push(t[i++]);return o}function ke(n,t){const e=[],s=n.length;for(let r=0;r<s;r++)t.indexOf(r)===-1&&e.push(n[r]);const o=t.map(r=>n[r]);return[e,o]}function he(n,t){const e=t.map(s=>1);return bm(n,e,t)}function De(n,t,e){T(kh(t,e),()=>`${n} supports only inner-most axes for now. Got axes ${t} and rank-${e} input.`)}function ee(n,t){if(kh(n,t))return null;const e=[];for(let s=0;s<t;++s)n.indexOf(s)===-1&&e.push(s);return n.forEach(s=>e.push(s)),e}function Ms(n){return n.map((t,e)=>[e,t]).sort((t,e)=>t[1]-e[1]).map(t=>t[0])}function ie(n,t){const e=[];for(let s=t-n;s<t;++s)e.push(s);return e}function RI(n,t=null,e=!1){const o={x:D(n,"x","max")},r={reductionIndices:t,keepDims:e};return B.runKernel(ja,o,r)}const Pn=W({max_:RI});function AI(n,t=null,e=!1){const o={x:D(n,"x","min")},r={axis:t,keepDims:e};return B.runKernel(Ja,o,r)}const Ll=W({min_:AI});function DI(n,t){let e=D(n,"base","pow"),s=D(t,"exp","pow");[e,s]=re(e,s);const o={a:e,b:s};return B.runKernel(ii,o)}const fo=W({pow_:DI});function Vt(n,t){if(($n(n)&&t!=="string"||Array.isArray(n))&&t!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(t==="string"&&$n(n)&&!(n instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return Rl(n,[],[],t)}function FI(n){const e={x:D(n,"x","sqrt","float32")};return B.runKernel(bi,e)}const Ve=W({sqrt_:FI});function _I(n){const t=D(n,"x","square"),e={};return B.runKernel("Square",{x:t},e)}const Zt=W({square_:_I});function OI(n,t=null,e=!1){let s=D(n,"x","sum");s.dtype==="bool"&&(s=at(s,"int32"));const o={x:s},r={axis:t,keepDims:e};return B.runKernel(ml,o,r)}const mt=W({sum_:OI});function MI(n,t="euclidean",e=null,s=!1){n=D(n,"x","norm");const o=ym(n,t,e);let r=o.shape;if(s){const i=Tt(e,n.shape);r=he(o.shape,i)}return z(o,r)}function ym(n,t,e=null){if(n.rank===0)return qe(n);if(n.rank!==1&&e===null)return ym(z(n,[-1]),t,e);if(n.rank===1||typeof e=="number"||Array.isArray(e)&&e.length===1){if(t===1)return mt(qe(n),e);if(t===1/0)return Pn(qe(n),e);if(t===-1/0)return Ll(qe(n),e);if(t==="euclidean"||t===2)return Ve(mt(fo(qe(n),Vt(2,"int32")),e));throw new Error(`Error in norm: invalid ord value: ${t}`)}if(Array.isArray(e)&&e.length===2){if(t===1)return Pn(mt(qe(n),e[0]),e[1]-1);if(t===1/0)return Pn(mt(qe(n),e[1]),e[0]);if(t===-1/0)return Ll(mt(qe(n),e[1]),e[0]);if(t==="fro"||t==="euclidean")return Ve(mt(Zt(n),e));throw new Error(`Error in norm: invalid ord value: ${t}`)}throw new Error(`Error in norm: invalid axis: ${e}`)}const Pl=W({norm_:MI});function LI(n,t=null,e=!1){return Pl(n,"euclidean",t,e)}const PI=W({euclideanNorm_:LI});function BI(n){const e={x:D(n,"x","exp")};return B.runKernel(Hr,e)}const Jn=W({exp_:BI});function zI(n,t=0){const e=D(n,"x","expandDims","string_or_numeric");T(t<=e.rank,()=>"Axis must be <= rank of the tensor");const s={input:e},o={dim:t};return B.runKernel(Pa,s,o)}const nn=W({expandDims_:zI});function VI(n){const e={x:D(n,"x","expm1")};return B.runKernel(qr,e)}const WI=W({expm1_:VI});function UI(n,t){const e=D(n,"x","tile","string_or_numeric");T(e.rank===t.length,()=>`Error in transpose: rank of input ${e.rank} must match length of reps ${t}.`);const s={x:e},o={reps:t};return B.runKernel(Ii,s,o)}const Bn=W({tile_:UI});function GI(n,t,e,s="float32"){t==null&&(t=n);const o=Et([n,t],s),r=n<=t?n:t;for(let a=0;a<r;++a)o.set(1,a,a);const i=z(o.toTensor(),[n,t]);if(e==null)return i;if(e.length===1)return Bn(nn(i,0),[e[0],1,1]);if(e.length===2)return Bn(nn(nn(i,0),0),[e[0],e[1],1,1]);if(e.length===3)return Bn(nn(nn(nn(i,0),0),0),[e[0],e[1],e[2],1,1]);throw new Error(`eye() currently supports only 1D and 2D batchShapes, but received ${e.length}D.`)}const wm=W({eye_:GI});function HI(n){const e={x:D(n,"x","floor","float32")};return B.runKernel(Xr,e)}const Bl=W({floor_:HI});function qI(n,t,e=0,s=0){const o=D(n,"x","gather"),r=D(t,"indices","gather","int32"),i={x:o,indices:r},a={axis:e,batchDims:s};return B.runKernel(za,i,a)}const Sh=W({gather_:qI});function XI(n,t){let e=D(n,"a","greater","string_or_numeric"),s=D(t,"b","greater","string_or_numeric");[e,s]=re(e,s),$t(e.shape,s.shape);const o={a:e,b:s};return B.runKernel(Va,o)}const bn=W({greater_:XI});function KI(n,t){let e=D(n,"a","greaterEqual","string_or_numeric"),s=D(t,"b","greaterEqual","string_or_numeric");[e,s]=re(e,s),$t(e.shape,s.shape);const o={a:e,b:s};return B.runKernel(jr,o)}const mo=W({greaterEqual_:KI});function jI(n){const e={input:D(n,"input","imag")};return B.runKernel(Lu,e)}const Nh=W({imag_:jI});function YI(n){const e={x:D(n,"x","isFinite")};return B.runKernel(Zr,e)}const ZI=W({isFinite_:YI});function QI(n){const e={x:D(n,"x","isInf")};return B.runKernel(Qr,e)}const JI=W({isInf_:QI});function tv(n){const e={x:D(n,"x","isNaN")};return B.runKernel(Jr,e)}const ev=W({isNaN_:tv});function nv(n,t=.2){const s={x:D(n,"x","leakyRelu")},o={alpha:t};return B.runKernel(Wa,s,o)}const Th=W({leakyRelu_:nv});function sv(n,t){let e=D(n,"a","less","string_or_numeric"),s=D(t,"b","less","string_or_numeric");[e,s]=re(e,s),$t(e.shape,s.shape);const o={a:e,b:s};return B.runKernel(Ua,o)}const zl=W({less_:sv});function ov(n,t){let e=D(n,"a","lessEqual","string_or_numeric"),s=D(t,"b","lessEqual","string_or_numeric");[e,s]=re(e,s),$t(e.shape,s.shape);const o={a:e,b:s};return B.runKernel(Ga,o)}const Qo=W({lessEqual_:ov});function rv(n,t=5,e=1,s=1,o=.5){const r=D(n,"x","localResponseNormalization");T(r.rank===4||r.rank===3,()=>`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank ${r.rank}.`),T(Bo(t),()=>`Error in localResponseNormalization: depthRadius must be an integer but got depthRadius ${t}.`);let i=r,a=!1;r.rank===3&&(a=!0,i=z(r,[1,r.shape[0],r.shape[1],r.shape[2]]));const l={x:i},c={depthRadius:t,bias:e,alpha:s,beta:o},u=B.runKernel(Ka,l,c);return a?z(u,[u.shape[1],u.shape[2],u.shape[3]]):u}const iv=W({localResponseNormalization_:rv});function av(n){const e={x:D(n,"x","log","float32")};return B.runKernel(ti,e)}const ts=W({log_:av});function lv(n){const e={x:D(n,"x","log1p")};return B.runKernel(ei,e)}const Cm=W({log1p_:lv});function cv(n,t){T(iu(n),()=>"The f passed in variableGrads(f) must be a function"),T(t==null||Array.isArray(t)&&t.every(c=>c instanceof Tl),()=>"The varList passed in variableGrads(f, varList) must be an array of variables");const e=t!=null;if(!e){t=[];for(const c in B.registeredVariables)t.push(B.registeredVariables[c])}const s=e?t.filter(c=>!c.trainable):null,o=t.length;t=t.filter(c=>c.trainable),T(t.length>0,()=>`variableGrads() expects at least one of the input variables to be trainable, but none of the ${o} variables is trainable.`);const r=!0,{value:i,grads:a}=B.gradients(n,t,null,r);T(a.some(c=>c!=null),()=>"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."),T(i.rank===0,()=>`The f passed in variableGrads(f) must return a scalar, but it returned a rank-${i.rank} tensor`);const l={};return t.forEach((c,u)=>{a[u]!=null&&(l[c.name]=a[u])}),s!=null&&s.forEach(c=>l[c.name]=null),{value:i,grads:l}}function Jo(n){return B.customGrad(n)}function uv(n){const e={x:D(n,"x","neg")};return B.runKernel(el,e)}const ae=W({neg_:uv});function hv(n){const e={x:D(n,"x","softplus")};return B.runKernel(xi,e)}const _i=W({softplus_:hv});function dv(n){const t=D(n,"x","logSigmoid");return Jo(s=>({value:ae(_i(ae(s))),gradFunc:i=>P(i,Yo(ae(s)))}))(t)}const pv=W({logSigmoid_:dv});function fv(n,t){let e=D(n,"a","sub"),s=D(t,"b","sub");[e,s]=re(e,s);const o={a:e,b:s};return B.runKernel(wi,o)}const yt=W({sub_:fv});function mv(n,t=-1){const e=D(n,"logits","logSoftmax");if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank ${e.rank} and axis was ${t}`);return Jo((o,r)=>{const a=Pn(o,t,!0),l=yt(o,a),c=yt(at(l,"float32"),ts(mt(Jn(l),t,!0)));return r([c]),{value:c,gradFunc:(h,d)=>{const[p]=d,f=!0,m=Jn(p);return yt(h,P(mt(h,t,f),m))}}})(e)}const $m=W({logSoftmax_:mv});function gv(n,t=null,e=!1){const s=D(n,"x","logSumExp"),o=Tt(t,s.shape),r=Pn(s,o,!0),i=yt(s,r),a=Jn(i),l=mt(a,o),c=ts(l),u=et(z(r,c.shape),c);if(e){const h=he(u.shape,o);return z(u,h)}return u}const Im=W({logSumExp_:gv});function xv(n,t){const e=D(n,"a","logicalAnd","bool"),s=D(t,"b","logicalAnd","bool");$t(e.shape,s.shape);const o={a:e,b:s};return B.runKernel(Ha,o)}const gs=W({logicalAnd_:xv});function bv(n){const e={x:D(n,"x","logicalNot","bool")};return B.runKernel(qa,e)}const Eh=W({logicalNot_:bv});function yv(n,t){const e=D(n,"a","logicalOr","bool"),s=D(t,"b","logicalOr","bool");$t(e.shape,s.shape);const o={a:e,b:s};return B.runKernel(Xa,o)}const vm=W({logicalOr_:yv});function wv(n,t){const e=D(n,"a","logicalXor","bool"),s=D(t,"b","logicalXor","bool");return $t(e.shape,s.shape),gs(vm(n,t),Eh(gs(n,t)))}const Cv=W({logicalXor_:wv});function $v(n,t,e,s,o){const r=D(n,"x","maxPool"),i=1;let a=r,l=!1;r.rank===3&&(l=!0,a=z(r,[1,r.shape[0],r.shape[1],r.shape[2]])),T(a.rank===4,()=>`Error in maxPool: input must be rank 4 but got rank ${a.rank}.`),T(ze(e,i),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${e} and dilations '${i}'`),tn("maxPool",s,o);const c={x:a},u={filterSize:t,strides:e,pad:s,dimRoundingMode:o},h=B.runKernel(Ya,c,u);return l?z(h,[h.shape[1],h.shape[2],h.shape[3]]):h}const Rh=W({maxPool_:$v});function Iv(n,t=[1,1,1],e,s,o,r="NDHWC"){const i=D(n,"x","maxPool3d");let a=i,l=!1;i.rank===4&&(l=!0,a=z(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]])),T(a.rank===5,()=>`Error in maxPool3d: x must be rank 5 but got rank ${a.rank}.`),T(r==="NDHWC",()=>`Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of ${r}`),tn("maxPool3d",s,o);const c={x:a},u={filterSize:t,strides:e,pad:s,dimRoundingMode:o,dataFormat:r},h=B.runKernel(Za,c,u);return l?z(h,[h.shape[1],h.shape[2],h.shape[3],h.shape[4]]):h}const vv=W({maxPool3d_:Iv});function kv(n,t){let e=D(n,"a","maximum"),s=D(t,"b","maximum");[e,s]=re(e,s),e.dtype==="bool"&&(e=at(e,"int32"),s=at(s,"int32")),$t(e.shape,s.shape);const o={a:e,b:s};return B.runKernel(ni,o)}const Ls=W({maximum_:kv});function Sv(n,t=null,e=!1){const o={x:D(n,"x","mean")},r={axis:t,keepDims:e};return B.runKernel(Qa,o,r)}const de=W({mean_:Sv});function Se(n,t="float32"){if(ds(n),t==="complex64"){const s=Se(n,"float32"),o=Se(n,"float32");return Xo(s,o)}const e=Be(K(n),t);return B.makeTensor(e,n,t)}function Ps(n,t="float32"){if(ds(n),t==="complex64"){const s=Ps(n,"float32"),o=Se(n,"float32");return Xo(s,o)}const e=lu(K(n),t);return B.makeTensor(e,n,t)}function Nv(n,t){let e=D(n,"a","minimum"),s=D(t,"b","minimum");[e,s]=re(e,s),e.dtype==="bool"&&(e=at(e,"int32"),s=at(s,"int32")),$t(e.shape,s.shape);const o={a:e,b:s};return B.runKernel(si,o)}const Oi=W({minimum_:Nv});function Tv(n,t,e){T(e==="reflect"||e==="symmetric",()=>`Invalid mode. Mode must be either reflect or symmetric. Got ${e}.`);const s=D(n,"x","mirrorPad");if(s.rank===0)throw new Error("mirrorPad(scalar) is not defined. Pass non-scalar to mirrorPad");T(t.length===s.rank,()=>`Padding doesn't match input. Must be ${s.rank}. Got ${t.length}.`);const o=e==="reflect"?1:0;for(let a=0;a<s.rank;a++)T(t[a].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),T(t[a][0]>=0&&t[a][0]<=s.shape[a]-o&&t[a][1]>=0&&t[a][1]<=s.shape[a]-o,()=>`Padding in dimension ${a} cannot be greater than or equal to ${s.shape[a]-o} or less than 0 for input of shape ${s.shape}`);const r={paddings:t,mode:e},i={x:s};return B.runKernel(tl,i,r)}const Ev=W({mirrorPad_:Tv});function Rv(n,t){let e=D(n,"a","mod"),s=D(t,"b","mod");[e,s]=re(e,s);const o={a:e,b:s};return B.runKernel(oi,o)}const Av=W({mod_:Rv});function Dv(n,t=null,e=!1){n=D(n,"x","moments");const s=Tt(t,n.shape),o=de(n,s,e);let r=o.shape;e||(r=he(o.shape,s));const i=Zt(yt(at(n,"float32"),z(o,r))),a=de(i,s,e);return{mean:o,variance:a}}const Ah=W({moments_:Dv});function Fv(n,t){let e=D(n,"a","notEqual","string_or_numeric"),s=D(t,"b","notEqual","string_or_numeric");[e,s]=re(e,s),$t(e.shape,s.shape);const o={a:e,b:s};return B.runKernel(nl,o)}const Vl=W({notEqual_:Fv});function _v(n,t,e=1,s=0,o="int32"){if(t<2)throw new Error(`Error in oneHot: depth must be >=2, but it is ${t}`);const i={indices:D(n,"indices","oneHot","int32")},a={dtype:o,depth:t,onValue:e,offValue:s};return B.runKernel(ol,i,a)}const km=W({oneHot_:_v});function Ov(n){const e={x:D(n,"x","onesLike")};return B.runKernel(sl,e)}const vn=W({onesLike_:Ov});function Mv(n,t,e=0){const s=D(n,"x","pad");if(s.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");const o={paddings:t,constantValue:e},r={x:s};return B.runKernel(il,r,o)}const Dh=W({pad_:Mv});function Lv(n,t,e){const s=D(n,"x","spaceToBatchND");T(s.rank>=1+t.length,()=>`input rank ${s.rank} should be > than [blockShape] ${t.length}`),T(e.length===t.length,()=>`paddings.shape[0] ${e.length} must be equal to [blockShape] ${t.length}`),T(s.shape.reduce((i,a,l)=>l>0&&l<=t.length?i&&(a+e[l-1][0]+e[l-1][1])%t[l-1]===0:i,!0),()=>`input spatial dimensions ${s.shape.slice(1)} with paddings ${e.toString()} must be divisible by blockShapes ${t.toString()}`);const o={x:s},r={blockShape:t,paddings:e};return B.runKernel(gl,o,r)}const Fh=W({spaceToBatchND_:Lv});function Pv(n,t,e,s,o,r,i){o==null&&(o=[1,1]),r==null&&(r=1),s===0&&(s="valid");const a=D(n,"x","maxPool");let l=a,c=!1;a.rank===3&&(c=!0,l=z(a,[1,a.shape[0],a.shape[1],a.shape[2]])),T(ze(r,o),()=>`Error in pool: Either strides or dilations must be 1. Got strides ${r} and dilations '${o}'`);const u=In(l.shape,t,r,o,s),h=[u.dilationHeight,u.dilationWidth];let d;s==="same"?d=zv([u.filterHeight,u.filterWidth],h):d=[[0,0],[0,0]];const p=h[0]===1&&h[1]===1,[f,m]=Bv([u.inHeight,u.inWidth],h,d),g=p?s:"valid",x=p?l:Fh(l,h,f),y=(e==="avg"?()=>yh(x,t,r,g,i):()=>Rh(x,t,r,g,i))(),w=p?y:wh(y,h,m);return c?z(w,[w.shape[1],w.shape[2],w.shape[3]]):w}function Bv(n,t,e){const s=e.map(u=>u[0]),o=e.map(u=>u[1]),r=n.concat(s,o),i=t.map((u,h)=>(u-r[h]%u)%u),a=o.map((u,h)=>u+i[h]),l=t.map((u,h)=>[s[h],a[h]]),c=t.map((u,h)=>[0,i[h]]);return[l,c]}function zv(n,t){const s=n.map((i,a)=>i+(i-1)*(t[a]-1)).map(i=>i-1),o=s.map(i=>Math.floor(i/2)),r=s.map((i,a)=>i-o[a]);return s.map((i,a)=>[o[a],r[a]])}const Vv=W({pool_:Pv});function Wv(n,t){const e=D(n,"x","prelu"),s=D(t,"alpha","prelu"),o={x:e,alpha:s};return B.runKernel(al,o)}const _h=W({prelu_:Wv});function Uv(n,t=null,e=!1){let s=D(n,"x","prod");s.dtype==="bool"&&(s=at(s,"int32"));const o={x:s},r={axis:t,keepDims:e};return B.runKernel(ll,o,r)}const Gv=W({prod_:Uv});var Wl={exports:{}},Hv=Wl.exports,Sm;function qv(){return Sm||(Sm=1,(function(n){(function(t,e,s){function o(l){var c=this,u=a();c.next=function(){var h=2091639*c.s0+c.c*23283064365386963e-26;return c.s0=c.s1,c.s1=c.s2,c.s2=h-(c.c=h|0)},c.c=1,c.s0=u(" "),c.s1=u(" "),c.s2=u(" "),c.s0-=u(l),c.s0<0&&(c.s0+=1),c.s1-=u(l),c.s1<0&&(c.s1+=1),c.s2-=u(l),c.s2<0&&(c.s2+=1),u=null}function r(l,c){return c.c=l.c,c.s0=l.s0,c.s1=l.s1,c.s2=l.s2,c}function i(l,c){var u=new o(l),h=c&&c.state,d=u.next;return d.int32=function(){return u.next()*4294967296|0},d.double=function(){return d()+(d()*2097152|0)*11102230246251565e-32},d.quick=d,h&&(typeof h=="object"&&r(h,u),d.state=function(){return r(u,{})}),d}function a(){var l=4022871197,c=function(u){u=String(u);for(var h=0;h<u.length;h++){l+=u.charCodeAt(h);var d=.02519603282416938*l;l=d>>>0,d-=l,d*=l,l=d>>>0,d-=l,l+=d*4294967296}return(l>>>0)*23283064365386963e-26};return c}e&&e.exports?e.exports=i:this.alea=i})(Hv,n)})(Wl)),Wl.exports}var Ul={exports:{}},Xv=Ul.exports,Nm;function Kv(){return Nm||(Nm=1,(function(n){(function(t,e,s){function o(a){var l=this,c="";l.x=0,l.y=0,l.z=0,l.w=0,l.next=function(){var h=l.x^l.x<<11;return l.x=l.y,l.y=l.z,l.z=l.w,l.w^=l.w>>>19^h^h>>>8},a===(a|0)?l.x=a:c+=a;for(var u=0;u<c.length+64;u++)l.x^=c.charCodeAt(u)|0,l.next()}function r(a,l){return l.x=a.x,l.y=a.y,l.z=a.z,l.w=a.w,l}function i(a,l){var c=new o(a),u=l&&l.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var d=c.next()>>>11,p=(c.next()>>>0)/4294967296,f=(d+p)/(1<<21);while(f===0);return f},h.int32=c.next,h.quick=h,u&&(typeof u=="object"&&r(u,c),h.state=function(){return r(c,{})}),h}e&&e.exports?e.exports=i:this.xor128=i})(Xv,n)})(Ul)),Ul.exports}var Gl={exports:{}},jv=Gl.exports,Tm;function Yv(){return Tm||(Tm=1,(function(n){(function(t,e,s){function o(a){var l=this,c="";l.next=function(){var h=l.x^l.x>>>2;return l.x=l.y,l.y=l.z,l.z=l.w,l.w=l.v,(l.d=l.d+362437|0)+(l.v=l.v^l.v<<4^(h^h<<1))|0},l.x=0,l.y=0,l.z=0,l.w=0,l.v=0,a===(a|0)?l.x=a:c+=a;for(var u=0;u<c.length+64;u++)l.x^=c.charCodeAt(u)|0,u==c.length&&(l.d=l.x<<10^l.x>>>4),l.next()}function r(a,l){return l.x=a.x,l.y=a.y,l.z=a.z,l.w=a.w,l.v=a.v,l.d=a.d,l}function i(a,l){var c=new o(a),u=l&&l.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var d=c.next()>>>11,p=(c.next()>>>0)/4294967296,f=(d+p)/(1<<21);while(f===0);return f},h.int32=c.next,h.quick=h,u&&(typeof u=="object"&&r(u,c),h.state=function(){return r(c,{})}),h}e&&e.exports?e.exports=i:this.xorwow=i})(jv,n)})(Gl)),Gl.exports}var Hl={exports:{}},Zv=Hl.exports,Em;function Qv(){return Em||(Em=1,(function(n){(function(t,e,s){function o(a){var l=this;l.next=function(){var u=l.x,h=l.i,d,p;return d=u[h],d^=d>>>7,p=d^d<<24,d=u[h+1&7],p^=d^d>>>10,d=u[h+3&7],p^=d^d>>>3,d=u[h+4&7],p^=d^d<<7,d=u[h+7&7],d=d^d<<13,p^=d^d<<9,u[h]=p,l.i=h+1&7,p};function c(u,h){var d,p=[];if(h===(h|0))p[0]=h;else for(h=""+h,d=0;d<h.length;++d)p[d&7]=p[d&7]<<15^h.charCodeAt(d)+p[d+1&7]<<13;for(;p.length<8;)p.push(0);for(d=0;d<8&&p[d]===0;++d);for(d==8?p[7]=-1:p[d],u.x=p,u.i=0,d=256;d>0;--d)u.next()}c(l,a)}function r(a,l){return l.x=a.x.slice(),l.i=a.i,l}function i(a,l){a==null&&(a=+new Date);var c=new o(a),u=l&&l.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var d=c.next()>>>11,p=(c.next()>>>0)/4294967296,f=(d+p)/(1<<21);while(f===0);return f},h.int32=c.next,h.quick=h,u&&(u.x&&r(u,c),h.state=function(){return r(c,{})}),h}e&&e.exports?e.exports=i:this.xorshift7=i})(Zv,n)})(Hl)),Hl.exports}var ql={exports:{}},Jv=ql.exports,Rm;function tk(){return Rm||(Rm=1,(function(n){(function(t,e,s){function o(a){var l=this;l.next=function(){var u=l.w,h=l.X,d=l.i,p,f;return l.w=u=u+1640531527|0,f=h[d+34&127],p=h[d=d+1&127],f^=f<<13,p^=p<<17,f^=f>>>15,p^=p>>>12,f=h[d]=f^p,l.i=d,f+(u^u>>>16)|0};function c(u,h){var d,p,f,m,g,x=[],b=128;for(h===(h|0)?(p=h,h=null):(h=h+"\0",p=0,b=Math.max(b,h.length)),f=0,m=-32;m<b;++m)h&&(p^=h.charCodeAt((m+32)%h.length)),m===0&&(g=p),p^=p<<10,p^=p>>>15,p^=p<<4,p^=p>>>13,m>=0&&(g=g+1640531527|0,d=x[m&127]^=p+g,f=d==0?f+1:0);for(f>=128&&(x[(h&&h.length||0)&127]=-1),f=127,m=512;m>0;--m)p=x[f+34&127],d=x[f=f+1&127],p^=p<<13,d^=d<<17,p^=p>>>15,d^=d>>>12,x[f]=p^d;u.w=g,u.X=x,u.i=f}c(l,a)}function r(a,l){return l.i=a.i,l.w=a.w,l.X=a.X.slice(),l}function i(a,l){a==null&&(a=+new Date);var c=new o(a),u=l&&l.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var d=c.next()>>>11,p=(c.next()>>>0)/4294967296,f=(d+p)/(1<<21);while(f===0);return f},h.int32=c.next,h.quick=h,u&&(u.X&&r(u,c),h.state=function(){return r(c,{})}),h}e&&e.exports?e.exports=i:this.xor4096=i})(Jv,n)})(ql)),ql.exports}var Xl={exports:{}},ek=Xl.exports,Am;function nk(){return Am||(Am=1,(function(n){(function(t,e,s){function o(a){var l=this,c="";l.next=function(){var h=l.b,d=l.c,p=l.d,f=l.a;return h=h<<25^h>>>7^d,d=d-p|0,p=p<<24^p>>>8^f,f=f-h|0,l.b=h=h<<20^h>>>12^d,l.c=d=d-p|0,l.d=p<<16^d>>>16^f,l.a=f-h|0},l.a=0,l.b=0,l.c=-1640531527,l.d=1367130551,a===Math.floor(a)?(l.a=a/4294967296|0,l.b=a|0):c+=a;for(var u=0;u<c.length+20;u++)l.b^=c.charCodeAt(u)|0,l.next()}function r(a,l){return l.a=a.a,l.b=a.b,l.c=a.c,l.d=a.d,l}function i(a,l){var c=new o(a),u=l&&l.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var d=c.next()>>>11,p=(c.next()>>>0)/4294967296,f=(d+p)/(1<<21);while(f===0);return f},h.int32=c.next,h.quick=h,u&&(typeof u=="object"&&r(u,c),h.state=function(){return r(c,{})}),h}e&&e.exports?e.exports=i:this.tychei=i})(ek,n)})(Xl)),Xl.exports}var Kl={exports:{}},sk={},ok=Object.freeze({__proto__:null,default:sk}),rk=Qw(ok),ik=Kl.exports,Dm;function ak(){return Dm||(Dm=1,(function(n){(function(t,e,s){var o=256,r=6,i=52,a="random",l=s.pow(o,r),c=s.pow(2,i),u=c*2,h=o-1,d;function p(w,C,I){var v=[];C=C==!0?{entropy:!0}:C||{};var N=x(g(C.entropy?[w,y(e)]:w==null?b():w,3),v),k=new f(v),S=function(){for(var $=k.g(r),E=l,R=0;$<c;)$=($+R)*o,E*=o,R=k.g(1);for(;$>=u;)$/=2,E/=2,R>>>=1;return($+R)/E};return S.int32=function(){return k.g(4)|0},S.quick=function(){return k.g(4)/4294967296},S.double=S,x(y(k.S),e),(C.pass||I||function($,E,R,F){return F&&(F.S&&m(F,k),$.state=function(){return m(k,{})}),R?(s[a]=$,E):$})(S,N,"global"in C?C.global:this==s,C.state)}function f(w){var C,I=w.length,v=this,N=0,k=v.i=v.j=0,S=v.S=[];for(I||(w=[I++]);N<o;)S[N]=N++;for(N=0;N<o;N++)S[N]=S[k=h&k+w[N%I]+(C=S[N])],S[k]=C;(v.g=function($){for(var E,R=0,F=v.i,A=v.j,O=v.S;$--;)E=O[F=h&F+1],R=R*o+O[h&(O[F]=O[A=h&A+E])+(O[A]=E)];return v.i=F,v.j=A,R})(o)}function m(w,C){return C.i=w.i,C.j=w.j,C.S=w.S.slice(),C}function g(w,C){var I=[],v=typeof w,N;if(C&&v=="object")for(N in w)try{I.push(g(w[N],C-1))}catch(k){}return I.length?I:v=="string"?w:w+"\0"}function x(w,C){for(var I=w+"",v,N=0;N<I.length;)C[h&N]=h&(v^=C[h&N]*19)+I.charCodeAt(N++);return y(C)}function b(){try{var w;return d&&(w=d.randomBytes)?w=w(o):(w=new Uint8Array(o),(t.crypto||t.msCrypto).getRandomValues(w)),y(w)}catch(v){var C=t.navigator,I=C&&C.plugins;return[+new Date,t,I,t.screen,y(e)]}}function y(w){return String.fromCharCode.apply(0,w)}if(x(s.random(),e),n.exports){n.exports=p;try{d=rk}catch(w){}}else s["seed"+a]=p})(typeof self!="undefined"?self:ik,[],Math)})(Kl)),Kl.exports}var Oh,Fm;function lk(){if(Fm)return Oh;Fm=1;var n=qv(),t=Kv(),e=Yv(),s=Qv(),o=tk(),r=nk(),i=ak();return i.alea=n,i.xor128=t,i.xorwow=e,i.xorshift7=s,i.xor4096=o,i.tychei=r,Oh=i,Oh}var Mh=lk();class _m{constructor(t,e,s,o,r){this.mean=t,this.stdDev=e,this.dtype=s,this.nextVal=NaN,this.truncated=o,this.truncated&&(this.upper=this.mean+this.stdDev*2,this.lower=this.mean-this.stdDev*2);const i=r||Math.random();this.random=Mh.alea(i.toString())}nextValue(){if(!isNaN(this.nextVal)){const o=this.nextVal;return this.nextVal=NaN,o}let t,e,s=!1;for(;!s;){let o,r,i;do o=2*this.random()-1,r=2*this.random()-1,i=o*o+r*r;while(i>=1||i===0);const a=Math.sqrt(-2*Math.log(i)/i);t=this.mean+this.stdDev*o*a,e=this.mean+this.stdDev*r*a,(!this.truncated||this.isValidTruncated(t))&&(s=!0)}return(!this.truncated||this.isValidTruncated(e))&&(this.nextVal=this.convertValue(e)),this.convertValue(t)}convertValue(t){return this.dtype==null||this.dtype==="float32"?t:Math.round(t)}isValidTruncated(t){return t<=this.upper&&t>=this.lower}}class ck{constructor(t=0,e=1,s,o){if(this.canReturnFloat=()=>this.dtype==null||this.dtype==="float32",this.min=t,this.range=e-t,this.dtype=s,o==null&&(o=Math.random()),typeof o=="number"&&(o=o.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error(`The difference between ${t} - ${e} <= 1 and dtype is not float`);this.random=Mh.alea(o)}convertValue(t){return this.canReturnFloat()?t:Math.round(t)}nextValue(){return this.convertValue(this.min+this.range*this.random())}}function uk(n,t=0,e=1,s,o){if(ds(n),s!=null&&s==="bool")throw new Error(`Unsupported data type ${s}`);const r=new _m(t,e,s,!1,o),i=Et(n,s);for(let a=0;a<i.values.length;a++)i.values[a]=r.nextValue();return i.toTensor()}const hk=W({randomNormal_:uk});function dk(n,t=0,e=1,s="float32",o){ds(n);const r=Et(n,s),i=new ck(t,e,null,o);for(let a=0;a<r.values.length;a++)r.values[a]=i.nextValue();return r.toTensor()}const Mi=W({randomUniform_:dk});function Li(n,t,e=1,s="float32"){if(e===0)throw new Error("Cannot have a step of zero");const o={start:n,stop:t,step:e,dtype:s};return B.runKernel(Gu,{},o)}function pk(n){const e={input:D(n,"input","real")};return B.runKernel(Hu,e)}const jl=W({real_:pk});function fk(n){const e={x:D(n,"x","reciprocal")};return B.runKernel(ai,e)}const mk=W({reciprocal_:fk});function gk(n){const e={x:D(n,"x","relu")};return B.runKernel(li,e)}const go=W({relu_:gk});function xk(n){const e={x:D(n,"x","relu6")};return B.runKernel(ci,e)}const Om=W({relu6_:xk});function bk(n,t){const s={x:D(n,"x","reverse")},o={dims:t};return B.runKernel(dl,s,o)}const xo=W({reverse_:bk});function yk(n){const e={x:D(n,"x","round")};return B.runKernel(ui,e)}const Mm=W({round_:yk});function wk(n){const e={x:D(n,"x","rsqrt","float32")};return B.runKernel(hi,e)}const Lm=W({rsqrt_:wk});function Ck(n){const e={x:D(n,"x","selu")};return B.runKernel(di,e)}const Pm=W({selu_:Ck});function $k(n,t,e,s,o,r=[1,1],i="NHWC"){const a=D(n,"x","separableConv2d"),l=D(t,"depthwiseFilter","separableConv2d"),c=D(e,"pointwiseFilter","separableConv2d");let u=a,h=!1;if(a.rank===3&&(h=!0,u=z(a,[1,a.shape[0],a.shape[1],a.shape[2]])),i==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");T(u.rank===4,()=>`Error in separableConv2d: input must be rank 4, but got rank ${u.rank}.`),T(l.rank===4,()=>`Error in separableConv2d: depthwise filter must be rank 4, but got rank ${l.rank}.`),T(c.rank===4,()=>`Error in separableConv2d: pointwise filter must be rank 4, but got rank ${l.rank}.`),T(c.shape[0]===1,()=>`Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ${c.shape[0]}.`),T(c.shape[1]===1,()=>`Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ${c.shape[1]}.`);const d=l.shape[2],p=l.shape[3];T(c.shape[2]===d*p,()=>`Error in separableConv2d: the third dimension of pointwise filter must be ${d*p}, but got ${c.shape[2]}.`);const f=vh(u,l,s,o,i,r),g=po(f,c,1,"valid",i);return h?z(g,[g.shape[1],g.shape[2],g.shape[3]]):g}const Bm=W({separableConv2d_:$k});function Ik(n){const e={x:D(n,"x","sign")};return B.runKernel(mi,e)}const vk=W({sign_:Ik});function kk(n){const e={x:D(n,"x","sin","float32")};return B.runKernel(pi,e)}const zm=W({sin_:kk});function Sk(n){const e={x:D(n,"x","sinh")};return B.runKernel(fi,e)}const Vm=W({sinh_:Sk});function Nk(n,t,e){const s=D(n,"x","slice1d");return T(s.rank===1,()=>`slice1d expects a rank-1 tensor, but got a rank-${s.rank} tensor`),Kt(s,[t],[e])}const Lh=W({slice1d_:Nk});function Tk(n,t,e){const s=D(n,"x","slice2d");return T(s.rank===2,()=>`slice2d expects a rank-2 tensor, but got a rank-${s.rank} tensor`),Kt(s,t,e)}const Wm=W({slice2d_:Tk});function Ek(n,t,e){const s=D(n,"x","slice3d");return T(s.rank===3,()=>`slice3d expects a rank-3 tensor, but got a rank-${s.rank} tensor`),Kt(s,t,e)}const Ph=W({slice3d_:Ek});function Rk(n,t,e){const s=D(n,"x","slice4d");return T(s.rank===4,()=>`slice4d expects a rank-4 tensor, but got a rank-${s.rank} tensor`),Kt(s,t,e)}const Yl=W({slice4d_:Rk});function Ak(n,t=-1){const e=D(n,"logits","softmax","float32");if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${e.rank} and dim was ${t}`);const s={logits:e},o={dim:t};return B.runKernel(bl,s,o)}const Bh=W({softmax_:Ak});function Dk(n){T(n.dtype==="complex64",()=>`The dtype for tf.spectral.fft() must be complex64 but got ${n.dtype}.`);const t={input:n};return B.runKernel(Fu,t)}const Um=W({fft_:Dk});function Fk(n){T(n.dtype==="complex64",()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${n.dtype}.`);const t={input:n};return B.runKernel(Mu,t)}const zh=W({ifft_:Fk});function _k(n){const t=n.shape[n.shape.length-1],e=n.size/t;let s;if(t<=2){const o=z(n,[e,t]);s=zh(o)}else{const o=[e,2*(t-1)],r=z(jl(n),[e,t]),i=z(Nh(n),[e,t]),a=xo(Kt(r,[0,1],[e,t-2]),1),l=P(xo(Kt(i,[0,1],[e,t-2]),1),Vt(-1)),c=en([r,a],1),u=en([i,l],1),h=z(Xo(c,u),[o[0],o[1]]);s=zh(h)}if(s=jl(s),n.rank===3&&n.shape[0]!==0){const o=s,r=n.shape[0];s=z(s,[r,s.shape[0]/r,s.shape[1]]),o.dispose()}return s}const Ok=W({irfft_:_k});function Mk(n,t,e=0){const o={x:D(n,"x","split")},r={numOrSizeSplits:t,axis:e};return B.runKernel(xl,o,r)}const yn=W({split_:Mk});function Lk(n,t){T(n.dtype==="float32",()=>`The dtype for rfft() must be real value but got ${n.dtype}`);let e=n.shape[n.shape.length-1];const s=n.size/e;let o;if(t!=null&&t<e){const f=n.shape.map(g=>0),m=n.shape.map(g=>g);m[n.shape.length-1]=t,o=Kt(n,f,m),e=t}else if(t!=null&&t>e){const f=n.shape.map(m=>m);f[n.shape.length-1]=t-e,o=en([n,Se(f)],n.shape.length-1),e=t}else o=n;const r=_t(o),i=z(Xo(o,r),[s,e]),a=Um(i),l=Math.floor(e/2)+1,c=jl(a),u=Nh(a),h=yn(c,[l,e-l],c.shape.length-1),d=yn(u,[l,e-l],u.shape.length-1),p=o.shape.slice();return p[o.shape.length-1]=l,z(Xo(h[0],d[0]),p)}const Pk=W({rfft_:Lk});function Bk(n,t){let e=D(n,"a","squaredDifference"),s=D(t,"b","squaredDifference");[e,s]=re(e,s),$t(e.shape,s.shape);const o={a:e,b:s},r={};return B.runKernel(yi,o,r)}const zk=W({squaredDifference_:Bk});function Vk(n,t){const e=D(n,"x","squeeze","string_or_numeric");return z(e,Ts(e.shape,t).newShape)}const Pi=W({squeeze_:Vk});function Wk(n,t=0){const e=Xf(n,"tensors","stack","string_or_numeric");T(e.length>=1,()=>"Pass at least one tensor to tf.stack"),e.length>0&&T(t<=e[0].rank,()=>"Axis must be <= rank of the tensor");const s=e,o={axis:t};return B.runKernel(rl,s,o)}const xs=W({stack_:Wk});function Uk(n,t=0){const s={x:D(n,"x","step")},o={alpha:t};return B.runKernel(vi,s,o)}const Bi=W({step_:Uk});function Gk(n,t,e,s,o=0,r=0,i=0,a=0,l=0){const u={x:D(n,"x","stridedSlice","string_or_numeric")},h={begin:t,end:e,strides:s,beginMask:o,endMask:r,ellipsisMask:i,newAxisMask:a,shrinkAxisMask:l};return B.runKernel(Yu,u,h)}const Hk=W({stridedSlice_:Gk});function qk(n){const e={x:D(n,"x","tan","float32")};return B.runKernel(Ci,e)}const Xk=W({tan_:qk});function hn(n,t){Hp(n);const e=El(n,t);if(e.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return Rl(n,null,e,t)}function Vh(n,t,e){if(Hp(n),t!=null&&t.length!==2)throw new Error("tensor2d() requires shape to have two numbers");const s=El(n,e);if(s.length!==2&&s.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(s.length===1&&t==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return Rl(n,t,s,e)}function bo(n,t,e){const s=t.shape.length,o=s>1?t.shape[s-1]:1,r=e.length;let i=1;for(let h=o;h<r;++h)i*=e[h];const a=o<1?1:o,l=K(t.shape)/a,c=[...ft(e.slice(0,o)),1],u=K(e);return{sliceRank:o,numUpdates:l,sliceSize:i,strides:c,outputSize:u}}function Kk(n,t=1,e=!0){const s=D(n,"x","topk");if(s.rank===0)throw new Error("topk() expects the input to be of rank 1 or higher");const o=s.shape[s.shape.length-1];if(t<0)throw new Error(`'k' passed to topk() must be >= 0 but got ${t}`);if(t>o)throw new Error(`'k' passed to topk() must be <= the last dimension (${o}) but got ${t}`);const r={x:s},i={k:t,sorted:e},[a,l]=B.runKernel(Zu,r,i);return{values:a,indices:l}}const jk=W({topk_:Kk});function Yk(n,t=0,e=1,s,o){if(ds(n),s!=null&&s==="bool")throw new Error("Unsupported data type $ { dtype }");const r=new _m(t,e,s,!0,o),i=Et(n,s);for(let a=0;a<i.values.length;a++)i.values[a]=r.nextValue();return i.toTensor()}const Gm=W({truncatedNormal_:Yk});function Zk(n,t=0){const e=D(n,"x","unique","string_or_numeric");T(e.rank>0,()=>"The input tensor must be at least 1D");const s={x:e},o={axis:t},[r,i]=B.runKernel(Ju,s,o);return{values:r,indices:i}}const Qk=W({unique_:Zk});function Jk(n,t,e){const s=D(n,"x","unsortedSegmentSum"),o=D(t,"segmentIds","unsortedSegmentSum","int32");T(Bo(e),()=>"numSegments must be of dtype int");const r={x:s,segmentIds:o},i={numSegments:e};return B.runKernel(wl,r,i)}const Hm=W({unsortedSegmentSum_:Jk});function tS(n,t=0){const e=D(n,"x","unstack","string_or_numeric");T(t>=-e.shape.length&&t<e.shape.length,()=>`Axis = ${t} is not in [-${e.shape.length}, ${e.shape.length})`);const s={value:e},o={axis:t};return B.runKernel(yl,s,o)}const yo=W({unstack_:tS});function eS(n,t=!0,e,s){return B.makeVariable(n,t,e,s)}function qm(n,t){const e=[];for(let r=0;r<t.length;r++)t[r]&&e.push(r);const s=Et(n,"int32"),o=Et([e.length,n.length],"int32");for(let r=0;r<e.length;r++){const i=s.indexToLoc(e[r]),a=r*n.length;o.values.set(i,a)}return o.toTensor()}function nS(n,t,e){const s=D(n,"x","transpose");if(t==null&&(t=s.shape.map((i,a)=>a).reverse()),T(s.rank===t.length,()=>`Error in transpose: rank of input ${s.rank} must match length of perm ${t}.`),t.forEach(i=>{T(i>=0&&i<s.rank,()=>`All entries in 'perm' must be between 0 and ${s.rank-1} but got ${t}`)}),s.rank<=1)return s.clone();const o={x:s},r={perm:t};return s.dtype==="complex64"?U(()=>{let i=jl(s),a=Nh(s);return i=B.runKernel(Go,{x:i},r),a=B.runKernel(Go,{x:a},r),e&&(a=ae(a)),Xo(i,a)}):B.runKernel(Go,o,r)}const Ot=W({transpose_:nS});function sS(n,t){if(t==null)return n.shape.slice();if(Bt(n.shape,t))return t;if(n.shape.length===t.length){const e=[];for(let s=0;s<n.shape.length;s++)t[s]==null&&n.shape[s]!=null?e.push(n.shape[s]):e.push(t[s]);return e}return t}function oS(n,t,e,s){const o=D(n,"x","dropout");if(T(o.dtype==="float32",()=>`x has to be a floating point tensor since it's going to be scaled, but got a ${o.dtype} tensor instead.`),T(t>=0&&t<1,()=>`rate must be a float in the range [0, 1), but got ${t}.`),t===0)return n instanceof me?o.clone():o;const r=sS(o,e),i=1-t,a=gt(Bl(et(Mi(r,0,1,"float32",s),i)),i);return P(o,a)}const rS=W({dropout_:oS});function iS(n,t,e,s,o,r="NHWC",i){let a=n;n.rank===3&&(a=z(n,[1,n.shape[0],n.shape[1],n.shape[2]]));let l=t;l.rank===3&&(l=z(t,[1,t.shape[0],t.shape[1],t.shape[2]])),T(a.rank===4,()=>`Error in conv2dDerFilter: input must be rank 4, but got shape ${a.shape}.`),T(l.rank===4,()=>`Error in conv2dDerFilter: dy must be rank 4, but got shape ${l.shape}.`),T(e.length===4,()=>`Error in conv2dDerFilter: filterShape must be length 4, but got ${e}.`);const c=r==="NHWC"?a.shape[3]:a.shape[1],u=r==="NHWC"?l.shape[3]:l.shape[1];T(c===e[2],()=>`Error in conv2dDerFilter: depth of input ${c}) must match input depth in filter (${e[2]}.`),T(u===e[3],()=>`Error in conv2dDerFilter: depth of dy (${u}) must match output depth for filter (${e[3]}).`),tn("conv2dDerFilter",o,i);const h={x:a,dy:l},d={strides:s,pad:o,dataFormat:r,dimRoundingMode:i,filterShape:e};return B.runKernel(wu,h,d)}const Wh=W({conv2DBackpropFilter_:iS});function Uh(n,t,e){if(e==null||e==="linear")return n;if(e==="relu")return P(n,Bi(t));throw new Error(`Cannot compute gradient for fused activation ${e}.`)}function Gh(n,t){let e=t;const s=ge(n.shape,t.shape);return s.length>0&&(e=mt(e,s)),z(e,n.shape)}function Hh(n,t,e,s){if(t==="linear")return n;if(t==="relu")return go(n);if(t==="elu")return Ml(n);if(t==="relu6")return Om(n);if(t==="prelu")return _h(n,e);if(t==="leakyrelu")return Th(n,s);if(t==="sigmoid")return Yo(n);throw new Error(`Unknown fused activation ${t}.`)}const qh=(n,t)=>!(n>0)||t==="linear";function aS({x:n,filter:t,strides:e,pad:s,dataFormat:o="NHWC",dilations:r=[1,1],dimRoundingMode:i,bias:a,activation:l="linear",preluActivationWeights:c,leakyreluAlpha:u}){if(l=l||"linear",qh(B.state.gradientDepth,l)===!1){T(o==="NHWC",()=>`Error in fused conv2d: got dataFormat of ${o} but only NHWC is currently supported for the case of gradient depth is 0 and the activation is not linear.`);let I=po(n,t,e,s,o,r,i);return a!=null&&(I=et(I,a)),Hh(I,l,c,u)}const h=D(n,"x","conv2d","float32"),d=D(t,"filter","conv2d","float32");let p=h,f=!1;h.rank===3&&(f=!0,p=z(h,[1,h.shape[0],h.shape[1],h.shape[2]])),T(p.rank===4,()=>`Error in fused conv2d: input must be rank 4, but got rank ${p.rank}.`),T(d.rank===4,()=>`Error in fused conv2d: filter must be rank 4, but got rank ${d.rank}.`),tn("fused conv2d",s,i);const m=o==="NHWC"?p.shape[3]:p.shape[1];T(d.shape[2]===m,()=>`Error in conv2d: depth of input (${m}) must match input depth for filter ${d.shape[2]}.`),T(ze(e,r),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${e} and dilations '${r}'`);const g=Ae(p.shape,d.shape,e,r,s,i);let x;a!=null&&(x=D(a,"bias","fused conv2d"),[x]=re(x,h),o==="NHWC"?$t(g.outShape,x.shape):(T(x.shape.length<=1,()=>`Error in fused conv2d: only supports scalar or 1-D Tensor bias for NCHW format but got the bias of rank-${x.shape.length}.`),T(x.shape.length===0||x.shape[0]===g.outChannels||x.shape[0]===1,()=>`Error in fused conv2d: bias shape (${x.shape}) is not compatible with the number of output channels (${g.outChannels})`)));let b;if(c!=null){const I=c.shape;if(T(I.length<=1||I.length===3,()=>`Error in fused conv2d: only supports scalar, 1-D Tensor or 3-D Tensor PReLU activation weights but got a tensor of rank-${I.length}.`),I.length===1)T(I[0]===1||I[0]===g.outChannels,()=>`Error in fused conv2d: PReLU activation weights (${I}) is not compatible with the number of output channels (${g.outChannels}).`);else if(I.length===3)try{$t(I,g.outShape)}catch(v){const N=`Error in fused conv2d: PReLU activation weights (${I}) is not compatible with the output shape of the conv2d (${g.outShape}).`;throw Error(N)}b=D(c,"prelu weights","fused conv2d")}const y=(I,v)=>{T(o==="NHWC",()=>`Error in gradient of fused conv2D: got dataFormat of ${o} but only NHWC is currently supported.`);const[N,k,S,$]=v,E=Uh(I,S,l);T(uo(r),()=>`Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${r}'`);const R=Ch(k.shape,E,N,e,s),F=Wh(k,E,N.shape,e,s),A=[R,F];if($!=null){const O=Gh($,E);A.push(O)}return A},w={x:p,filter:d,bias:x,preluActivationWeights:b},C={strides:e,pad:s,dataFormat:o,dilations:r,dimRoundingMode:i,activation:l,leakyreluAlpha:u};return a==null?Jo((v,N,k)=>{let S=B.runKernel(Il,w,C);return k([N,v,S]),f&&(S=z(S,[S.shape[1],S.shape[2],S.shape[3]])),{value:S,gradFunc:y}})(p,d):Jo((v,N,k,S)=>{let $=B.runKernel(Il,w,C);return S([N,v,$,k]),f&&($=z($,[$.shape[1],$.shape[2],$.shape[3]])),{value:$,gradFunc:y}})(p,d,x)}const lS=W({fusedConv2d_:aS});function cS(n,t,e,s,o,r=[1,1],i){let a=n;n.rank===3&&(a=z(n,[1,n.shape[0],n.shape[1],n.shape[2]]));let l=t;l.rank===3&&(l=z(t,[1,t.shape[0],t.shape[1],t.shape[2]]));const c={x:a,dy:l},u={strides:s,pad:o,dimRoundingMode:i,dilations:r,filterShape:e};return B.runKernel(Nu,c,u)}const uS=W({depthwiseConv2dNativeBackpropFilter_:cS});function hS(n,t,e,s,o,r=[1,1],i){let a=t,l=!1;t.rank===3&&(l=!0,a=z(t,[1,t.shape[0],t.shape[1],t.shape[2]]));const c={dy:a,filter:e},u={strides:s,pad:o,dimRoundingMode:i,dilations:r,inputShape:n},h=B.runKernel(Tu,c,u);return l?z(h,[h.shape[1],h.shape[2],h.shape[3]]):h}const dS=W({depthwiseConv2dNativeBackpropInput_:hS});function pS({a:n,b:t,transposeA:e=!1,transposeB:s=!1,bias:o,activation:r="linear",preluActivationWeights:i,leakyreluAlpha:a=.2}){if(qh(B.state.gradientDepth,r)===!1){let $=zt(n,t,e,s);return o!=null&&($=et($,o)),Hh($,r,i,a)}let l=D(n,"a","fused matMul"),c=D(t,"b","fused matMul");[l,c]=re(l,c);const u=e?l.shape[l.rank-2]:l.shape[l.rank-1],h=s?c.shape[c.rank-1]:c.shape[c.rank-2],d=e?l.shape[l.rank-1]:l.shape[l.rank-2],p=s?c.shape[c.rank-2]:c.shape[c.rank-1],f=l.shape.slice(0,-2),m=c.shape.slice(0,-2),g=K(f),x=K(m);T(u===h,()=>`Error in fused matMul: inner shapes (${u}) and (${h}) of Tensors with shapes ${l.shape} and ${c.shape} and transposeA=${e} and transposeB=${s} must match.`);const y=$t(l.shape.slice(0,-2),c.shape.slice(0,-2)).concat([d,p]),w=e?z(l,[g,u,d]):z(l,[g,d,u]),C=s?z(c,[x,p,h]):z(c,[x,h,p]);let I;o!=null&&(I=D(o,"bias","fused matMul"),[I]=re(I,l),$t(y,I.shape));let v;i!=null&&(v=D(i,"prelu weights","fused matMul"));const N=($,E)=>{const[R,F,A,O]=E,L=Uh(z($,A.shape),A,r);let _,V;if(!e&&!s?(_=zt(L,F,!1,!0),V=zt(R,L,!0,!1)):!e&&s?(_=zt(L,F,!1,!1),V=zt(L,R,!0,!1)):e&&!s?(_=zt(F,L,!1,!0),V=zt(R,L,!1,!1)):(_=zt(F,L,!0,!0),V=zt(L,R,!0,!0)),o!=null){const G=Gh(O,L);return[_,V,G]}else return[_,V]},k={a:w,b:C,bias:I,preluActivationWeights:v},S={transposeA:e,transposeB:s,activation:r,leakyreluAlpha:a};return o==null?Jo((E,R,F)=>{const A=B.runKernel($l,k,S);return F([E,R,A]),{value:z(A,y),gradFunc:N}})(w,C):Jo((E,R,F,A)=>{const O=B.runKernel($l,k,S);return A([E,R,O,F]),{value:z(O,y),gradFunc:N}})(w,C,I)}const Xm=W({fusedMatMul_:pS});function fS(n,t,e,s,o="bilinear",r=0){const i=D(n,"image","cropAndResize"),a=D(t,"boxes","cropAndResize","float32"),l=D(e,"boxInd","cropAndResize","int32"),c=a.shape[0];T(i.rank===4,()=>`Error in cropAndResize: image must be rank 4,but got rank ${i.rank}.`),T(a.rank===2&&a.shape[1]===4,()=>`Error in cropAndResize: boxes must be have size [${c},4] but had shape ${a.shape}.`),T(l.rank===1&&l.shape[0]===c,()=>`Error in cropAndResize: boxInd must be have size [${c}] but had shape ${a.shape}.`),T(s.length===2,()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${s.length}.`),T(s[0]>=1&&s[1]>=1,()=>`cropSize must be atleast [1,1], but was ${s}`),T(o==="bilinear"||o==="nearest",()=>`method must be bilinear or nearest, but was ${o}`);const u={image:i,boxes:a,boxInd:l},h={method:o,extrapolationValue:r,cropSize:s};return B.runKernel(vu,u,h)}const mS=W({cropAndResize_:fS});function gS(n){const t=D(n,"image","flipLeftRight","float32");T(t.rank===4,()=>`Error in flipLeftRight: image must be rank 4,but got rank ${t.rank}.`);const e={image:t};return B.runKernel(Ou,e,{})}const xS=W({flipLeftRight_:gS});function bS(n){const t=D(n,"image","grayscaleToRGB"),e=t.rank-1,s=t.shape[e];T(t.rank>=2,()=>`Error in grayscaleToRGB: images must be at least rank 2, but got rank ${t.rank}.`),T(s===1,()=>`Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${s}.`);const o=new Array(t.rank);return o.fill(1,0,e),o[e]=3,Bn(t,o)}const yS=W({grayscaleToRGB_:bS});function wS(n){const t=D(n,"image","RGBToGrayscale"),e=t.rank-1,s=t.shape[e];T(t.rank>=2,()=>`Error in RGBToGrayscale: images must be at least rank 2, but got rank ${t.rank}.`),T(s===3,()=>`Error in RGBToGrayscale: last dimension of an RGB image should be size 3, but got size ${s}.`);const o=t.dtype,r=at(t,"float32"),i=hn([.2989,.587,.114]);let a;switch(t.rank){case 2:a=Fi("ij,j->i",r,i);break;case 3:a=Fi("ijk,k->ij",r,i);break;case 4:a=Fi("ijkl,l->ijk",r,i);break;case 5:a=Fi("ijklm,m->ijkl",r,i);break;case 6:a=Fi("ijklmn,n->ijklm",r,i);break;default:throw new Error("Not a valid tensor rank.")}return a=nn(a,-1),at(a,o)}const CS=W({rgbToGrayscale_:wS});function $S(n,t,e=0,s=.5){const o=D(n,"image","rotateWithOffset","float32");T(o.rank===4,()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${o.rank}.`);const r={image:o},i={radians:t,fillValue:e,center:s};return B.runKernel(th,r,i)}const IS=W({rotateWithOffset_:$S});function tr(n,t,e,s,o,r){s==null&&(s=.5),o==null&&(o=Number.NEGATIVE_INFINITY),r==null&&(r=0);const i=n.shape[0];return e=Math.min(e,i),T(0<=s&&s<=1,()=>`iouThreshold must be in [0, 1], but was '${s}'`),T(n.rank===2,()=>`boxes must be a 2D tensor, but was of rank '${n.rank}'`),T(n.shape[1]===4,()=>`boxes must have 4 columns, but 2nd dimension was ${n.shape[1]}`),T(t.rank===1,()=>"scores must be a 1D tensor"),T(t.shape[0]===i,()=>`scores has incompatible shape with boxes. Expected ${i}, but was ${t.shape[0]}`),T(0<=r&&r<=1,()=>`softNmsSigma must be in [0, 1], but was '${r}'`),{maxOutputSize:e,iouThreshold:s,scoreThreshold:o,softNmsSigma:r}}function vS(n,t,e,s=.5,o=Number.NEGATIVE_INFINITY){const r=D(n,"boxes","nonMaxSuppression","float32"),i=D(t,"scores","nonMaxSuppression","float32"),a=tr(r,i,e,s,o);e=a.maxOutputSize,s=a.iouThreshold,o=a.scoreThreshold;const l={maxOutputSize:e,iouThreshold:s,scoreThreshold:o};return B.runKernel(Vu,{boxes:r,scores:i},l)}const kS=W({nonMaxSuppression_:vS});function SS(n,t,e){const s=NS(n,t,e),o=s<0?-(s+1):s;n.splice(o,0,t)}function NS(n,t,e){return ES(n,t,e||TS)}function TS(n,t){return n>t?1:n<t?-1:0}function ES(n,t,e){let s=0,o=n.length,r=0,i=!1;for(;s<o;){r=s+(o-s>>>1);const a=e(t,n[r]);a>0?s=r+1:(o=r,i=!a)}return i?s:-s-1}function Xh(n,t,e,s,o){return Yh(n,t,e,s,o,0)}function Kh(n,t,e,s,o,r){return Yh(n,t,e,s,o,0,!1,r,!0)}function jh(n,t,e,s,o,r){return Yh(n,t,e,s,o,r,!0)}function Yh(n,t,e,s,o,r,i=!1,a=!1,l=!1){const c=[];for(let g=0;g<t.length;g++)t[g]>o&&c.push({score:t[g],boxIndex:g,suppressBeginIndex:0});c.sort(Km);const u=r>0?-.5/r:0,h=[],d=[];for(;h.length<e&&c.length>0;){const g=c.pop(),{score:x,boxIndex:b,suppressBeginIndex:y}=g;if(x<o)break;let w=!1;for(let C=h.length-1;C>=y;--C){const I=RS(n,b,h[C]);if(I>=s){w=!0;break}if(g.score=g.score*AS(s,u,I),g.score<=o)break}g.suppressBeginIndex=h.length,w||(g.score===x?(h.push(b),d.push(g.score)):g.score>o&&SS(c,g,Km))}const p=h.length,f=e-p;a&&f>0&&(h.push(...new Array(f).fill(0)),d.push(...new Array(f).fill(0)));const m={selectedIndices:h};return i&&(m.selectedScores=d),l&&(m.validOutputs=p),m}function RS(n,t,e){const s=n.subarray(t*4,t*4+4),o=n.subarray(e*4,e*4+4),r=Math.min(s[0],s[2]),i=Math.min(s[1],s[3]),a=Math.max(s[0],s[2]),l=Math.max(s[1],s[3]),c=Math.min(o[0],o[2]),u=Math.min(o[1],o[3]),h=Math.max(o[0],o[2]),d=Math.max(o[1],o[3]),p=(a-r)*(l-i),f=(h-c)*(d-u);if(p<=0||f<=0)return 0;const m=Math.max(r,c),g=Math.max(i,u),x=Math.min(a,h),b=Math.min(l,d),y=Math.max(x-m,0)*Math.max(b-g,0);return y/(p+f-y)}function AS(n,t,e){const s=Math.exp(t*e*e);return e<=n?s:0}function Km(n,t){return n.score-t.score||n.score===t.score&&t.boxIndex-n.boxIndex}function DS(r,i,a){return Z(this,arguments,function*(n,t,e,s=.5,o=Number.NEGATIVE_INFINITY){const l=D(n,"boxes","nonMaxSuppressionAsync"),c=D(t,"scores","nonMaxSuppressionAsync"),u=tr(l,c,e,s,o);e=u.maxOutputSize,s=u.iouThreshold,o=u.scoreThreshold;const h=yield Promise.all([l.data(),c.data()]),d=h[0],p=h[1],{selectedIndices:f}=Xh(d,p,e,s,o);return l!==n&&l.dispose(),c!==t&&c.dispose(),hn(f,"int32")})}const FS=DS;function _S(n,t,e,s=.5,o=Number.NEGATIVE_INFINITY,r=0){const i=D(n,"boxes","nonMaxSuppression"),a=D(t,"scores","nonMaxSuppression"),l=tr(i,a,e,s,o,r);e=l.maxOutputSize,s=l.iouThreshold,o=l.scoreThreshold,r=l.softNmsSigma;const c={boxes:i,scores:a},u={maxOutputSize:e,iouThreshold:s,scoreThreshold:o,softNmsSigma:r},h=B.runKernel(Uu,c,u);return{selectedIndices:h[0],selectedScores:h[1]}}const OS=W({nonMaxSuppressionWithScore_:_S});function MS(i,a,l){return Z(this,arguments,function*(n,t,e,s=.5,o=Number.NEGATIVE_INFINITY,r=0){const c=D(n,"boxes","nonMaxSuppressionAsync"),u=D(t,"scores","nonMaxSuppressionAsync"),h=tr(c,u,e,s,o,r);e=h.maxOutputSize,s=h.iouThreshold,o=h.scoreThreshold,r=h.softNmsSigma;const d=yield Promise.all([c.data(),u.data()]),p=d[0],f=d[1],{selectedIndices:m,selectedScores:g}=jh(p,f,e,s,o,r);return c!==n&&c.dispose(),u!==t&&u.dispose(),{selectedIndices:hn(m,"int32"),selectedScores:hn(g)}})}const LS=MS;function PS(n,t,e,s=.5,o=Number.NEGATIVE_INFINITY,r=!1){const i=D(n,"boxes","nonMaxSuppression"),a=D(t,"scores","nonMaxSuppression"),l=tr(i,a,e,s,o,null),c=l.maxOutputSize,u=l.iouThreshold,h=l.scoreThreshold,d={boxes:i,scores:a},p={maxOutputSize:c,iouThreshold:u,scoreThreshold:h,padToMaxOutputSize:r},f=B.runKernel(Wu,d,p);return{selectedIndices:f[0],validOutputs:f[1]}}const BS=W({nonMaxSuppressionPadded_:PS});function zS(i,a,l){return Z(this,arguments,function*(n,t,e,s=.5,o=Number.NEGATIVE_INFINITY,r=!1){const c=D(n,"boxes","nonMaxSuppressionAsync"),u=D(t,"scores","nonMaxSuppressionAsync"),h=tr(c,u,e,s,o,null),d=h.maxOutputSize,p=h.iouThreshold,f=h.scoreThreshold,[m,g]=yield Promise.all([c.data(),u.data()]),{selectedIndices:x,validOutputs:b}=Kh(m,g,d,p,f,r);return c!==n&&c.dispose(),u!==t&&u.dispose(),{selectedIndices:hn(x,"int32"),validOutputs:Vt(b,"int32")}})}const VS=zS;function WS(n,t,e=!1,s=!1){const o=D(n,"images","resizeBilinear");T(o.rank===3||o.rank===4,()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${o.rank}.`),T(t.length===2,()=>`Error in resizeBilinear: new shape must 2D, but got shape ${t}.`),T(s===!1||e===!1,()=>"Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false.");let r=o,i=!1;o.rank===3&&(i=!0,r=z(o,[1,o.shape[0],o.shape[1],o.shape[2]]));const a={images:r},l={alignCorners:e,halfPixelCenters:s,size:t},c=B.runKernel(hl,a,l);return i?z(c,[c.shape[1],c.shape[2],c.shape[3]]):c}const jm=W({resizeBilinear_:WS});function US(n,t,e=!1,s=!1){const o=D(n,"images","resizeNearestNeighbor");T(o.rank===3||o.rank===4,()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${o.rank}.`),T(t.length===2,()=>`Error in resizeNearestNeighbor: new shape must 2D, but got shape ${t}.`),T(o.dtype==="float32"||o.dtype==="int32",()=>"`images` must have `int32` or `float32` as dtype"),T(s===!1||e===!1,()=>"Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false.");let r=o,i=!1;o.rank===3&&(i=!0,r=z(o,[1,o.shape[0],o.shape[1],o.shape[2]]));const a={images:r},l={alignCorners:e,halfPixelCenters:s,size:t},c=B.runKernel(ul,a,l);return i?z(c,[c.shape[1],c.shape[2],c.shape[3]]):c}const Ym=W({resizeNearestNeighbor_:US});function GS(n,t="binary",e=!1,s=.5){const o=D(n,"image","threshold"),r=.2989,i=.587,a=.114,l=o.shape[0]*o.shape[1];let c=P(hn([s]),255),u,h,d,p;if(T(o.rank===3,()=>`Error in threshold: image must be rank 3,but got rank ${o.rank}.`),T(o.shape[2]===3||o.shape[2]===1,()=>`Error in threshold: image color channel must be equal to 3 or 1but got ${o.shape[2]}.`),T(o.dtype==="int32"||o.dtype==="float32",()=>`Error in dtype: image dtype must be int32 or float32,but got dtype ${o.dtype}.`),T(t==="otsu"||t==="binary",()=>`Method must be binary or otsu, but was ${t}`),o.shape[2]===3){[u,h,d]=yn(o,[1,1,1],-1);const g=P(u,r),x=P(h,i),b=P(d,a);p=et(et(g,x),b)}else p=n;if(t==="otsu"){const g=W$(at(Mm(p),"int32"),Al([]),256);c=HS(g,l)}const f=e?Qo(p,c):bn(p,c);return at(P(f,255),"int32")}function HS(n,t){let e=hn([-1]),s=hn([0]),o=hn([0]),r,i,a,l,c,u;for(let h=0;h<n.size-1;h++){r=Kt(n,0,h+1),i=Kt(n,h+1),c=gt(mt(r),t),u=gt(mt(i),t);const d=mt(P(r,Li(0,r.size)));a=gt(d,mt(r));const p=Ol(i.shape,r.size),f=et(Li(0,i.size),p),m=P(i,f);l=gt(mt(m),mt(i));const g=yt(a,l),x=yt(a,l),b=P(c,u);o=P(P(b,g),x);const y=bn(o,s);s=Xe(y,o,s),e=Xe(y,hn([h]),e)}return e}const qS=W({threshold_:GS});function XS(n,t,e="nearest",s="constant",o=0,r){const i=D(n,"image","transform","float32"),a=D(t,"transforms","transform","float32");T(i.rank===4,()=>`Error in transform: image must be rank 4,but got rank ${i.rank}.`),T(a.rank===2&&(a.shape[0]===i.shape[0]||a.shape[0]===1)&&a.shape[1]===8,()=>"Error in transform: Input transform should be batch x 8 or 1 x 8"),T(r==null||r.length===2,()=>`Error in transform: outputShape must be [height, width] or null, but got ${r}.`);const l={image:i,transforms:a},c={interpolation:e,fillMode:s,fillValue:o,outputShape:r};return B.runKernel(Qu,l,c)}const KS=W({transform_:XS});function jS(n,t,e){const s=D(n,"a","bandPart");T(s.rank>=2,()=>`bandPart(): Rank must be at least 2, got ${s.rank}.`);const o=s.shape,[r,i]=s.shape.slice(-2);let a,l;typeof t=="number"?(T(t%1===0,()=>`bandPart(): numLower must be an integer, got ${t}.`),T(t<=r,()=>`bandPart(): numLower (${t}) must not be greater than the number of rows (${r}).`),a=D(t<0?r:t,"numLower","bandPart")):(T(t.dtype==="int32",()=>"bandPart(): numLower's dtype must be an int32."),a=Xe(zl(t,0),r,Oi(t,r))),typeof e=="number"?(T(e%1===0,()=>`bandPart(): numUpper must be an integer, got ${e}.`),T(e<=i,()=>`bandPart(): numUpper (${e}) must not be greater than the number of columns (${i}).`),l=D(e<0?i:e,"numUpper","bandPart")):(T(e.dtype==="int32",()=>"bandPart(): numUpper's dtype must be an int32."),l=Xe(zl(e,0),i,Oi(e,i)));const c=z(Li(0,r,1,"int32"),[-1,1]),u=Li(0,i,1,"int32"),h=yt(c,u),d=gs(Qo(h,a),mo(h,ae(l))),p=Se([r,i],s.dtype);return z(xs(yo(z(s,[-1,r,i])).map(f=>Xe(d,f,p))),o)}const YS=W({bandPart_:jS});function ZS(n){let t;if(Array.isArray(n)){t=!1,T(n!=null&&n.length>0,()=>"Gram-Schmidt process: input must not be null, undefined, or empty");const o=n[0].shape[0];for(let r=1;r<n.length;++r)T(n[r].shape[0]===o,()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${n[r].shape[0]} vs. ${o})`)}else t=!0,n=yn(n,n.shape[0],0).map(o=>Pi(o,[0]));T(n.length<=n[0].shape[0],()=>`Gram-Schmidt: Number of vectors (${n.length}) exceeds number of dimensions (${n[0].shape[0]}).`);const e=[],s=n;for(let o=0;o<n.length;++o)e.push(B.tidy(()=>{let r=s[o];if(o>0)for(let i=0;i<o;++i){const a=P(mt(P(e[i],r)),e[i]);r=yt(r,a)}return gt(r,Pl(r,"euclidean"))}));return t?xs(e,0):e}const QS=W({gramSchmidt_:ZS});function JS(n,t=!1){if(T(n.rank>=2,()=>`qr() requires input tensor to have a rank >= 2, but got rank ${n.rank}`),n.rank===2)return Zm(n,t);{const e=n.shape.slice(0,n.shape.length-2).reduce((l,c)=>l*c),s=yo(z(n,[e,n.shape[n.shape.length-2],n.shape[n.shape.length-1]]),0),o=[],r=[];s.forEach(l=>{const[c,u]=Zm(l,t);o.push(c),r.push(u)});const i=z(xs(o,0),n.shape),a=z(xs(r,0),n.shape);return[i,a]}}function Zm(n,t=!1){return B.tidy(()=>{T(n.shape.length===2,()=>`qr2d() requires a 2D Tensor, but got a ${n.shape.length}D Tensor.`);const e=n.shape[0],s=n.shape[1];let o=wm(e),r=co(n);const i=Vh([[1]],[1,1]);let a=co(i);const l=e>=s?s:e;for(let c=0;c<l;++c){const u=r,h=a,d=o;[a,r,o]=B.tidy(()=>{const p=Kt(r,[c,c],[e-c,1]),f=Pl(p),m=Kt(r,[c,c],[1,1]),g=Xe(bn(m,0),Vh([[-1]]),Vh([[1]])),x=yt(m,P(g,f)),b=gt(p,x);b.shape[0]===1?a=co(i):a=en([i,Kt(b,[1,0],[b.shape[0]-1,b.shape[1]])],0);const y=ae(gt(zt(g,x),f)),w=Kt(r,[c,0],[e-c,s]),C=P(y,a),I=Ot(a);if(c===0)r=yt(w,zt(C,zt(I,w)));else{const k=yt(w,zt(C,zt(I,w)));r=en([Kt(r,[0,0],[c,s]),k],0)}const v=Ot(C),N=Kt(o,[0,c],[e,o.shape[1]-c]);if(c===0)o=yt(N,zt(zt(N,a),v));else{const k=yt(N,zt(zt(N,a),v));o=en([Kt(o,[0,0],[e,c]),k],1)}return[a,r,o]}),Dt([u,h,d])}return!t&&e>s&&(o=Kt(o,[0,0],[e,s]),r=Kt(r,[0,0],[s,s])),[o,r]})}const t2=W({qr_:JS});const bs={flipLeftRight:xS,grayscaleToRGB:yS,resizeNearestNeighbor:Ym,resizeBilinear:jm,rgbToGrayscale:CS,rotateWithOffset:IS,cropAndResize:mS,nonMaxSuppression:kS,nonMaxSuppressionAsync:FS,nonMaxSuppressionWithScore:OS,nonMaxSuppressionWithScoreAsync:LS,nonMaxSuppressionPadded:BS,nonMaxSuppressionPaddedAsync:VS,threshold:qS,transform:KS},e2={bandPart:YS,gramSchmidt:QS,qr:t2};const n2=new Map,s2=new Map;class er{getClassName(){return this.constructor.className}static fromConfig(t,e){return new t(e)}}class kn{constructor(){this.classNameMap={}}static getMap(){return kn.instance==null&&(kn.instance=new kn),kn.instance}static register(t){kn.getMap().classNameMap[t.className]=[t,t.fromConfig]}}function Q(n,t,e){T(n.className!=null,()=>"Class being registered does not have the static className property defined."),T(typeof n.className=="string",()=>"className is required to be a string, but got type "+typeof n.className),T(n.className.length>0,()=>"Class being registered has an empty-string as its className, which is disallowed."),typeof t=="undefined"&&(t="Custom"),typeof e=="undefined"&&(e=n.className);const s=e,o=t+">"+s;return kn.register(n),n2.set(o,n),s2.set(n,o),n}class Bs extends er{minimize(t,e=!1,s){const{value:o,grads:r}=this.computeGradients(t,s);if(s!=null){const i=s.map(a=>({name:a.name,tensor:r[a.name]}));this.applyGradients(i)}else this.applyGradients(r);return Dt(r),e?o:(o.dispose(),null)}get iterations(){return this.iterations_==null&&(this.iterations_=0),this.iterations_}incrementIterations(){this.iterations_=this.iterations+1}computeGradients(t,e){return cv(t,e)}dispose(){this.iterations_!=null&&Dt(this.iterations_)}saveIterations(){return Z(this,null,function*(){return this.iterations_==null&&(this.iterations_=0),{name:"iter",tensor:Vt(this.iterations_,"int32")}})}getWeights(){return Z(this,null,function*(){throw new Error("getWeights() is not implemented for this optimizer yet.")})}setWeights(t){return Z(this,null,function*(){throw new Error(`setWeights() is not implemented for this optimizer class ${this.getClassName()}`)})}extractIterations(t){return Z(this,null,function*(){return this.iterations_=(yield t[0].tensor.data())[0],t.slice(1)})}}Object.defineProperty(Bs,Symbol.hasInstance,{value:n=>n.minimize!=null&&n.computeGradients!=null&&n.applyGradients!=null});class Qm extends Bs{static get className(){return"Adadelta"}constructor(t,e,s=null){super(),this.learningRate=t,this.rho=e,this.epsilon=s,this.accumulatedGrads=[],this.accumulatedUpdates=[],s==null&&(this.epsilon=B.backend.epsilon())}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,o)=>{const r=B.registeredVariables[s],i=!1;this.accumulatedGrads[o]==null&&(this.accumulatedGrads[o]={originalName:`${s}/accum_grad`,variable:U(()=>_t(r).variable(i))}),this.accumulatedUpdates[o]==null&&(this.accumulatedUpdates[o]={originalName:`${s}/accum_var`,variable:U(()=>_t(r).variable(i))});const a=Array.isArray(t)?t[o].tensor:t[s];if(a==null)return;const l=this.accumulatedGrads[o].variable,c=this.accumulatedUpdates[o].variable;U(()=>{const u=et(P(l,this.rho),P(Zt(a),1-this.rho)),h=P(gt(Ve(et(c,this.epsilon)),Ve(et(l,this.epsilon))),a),d=et(P(c,this.rho),P(Zt(h),1-this.rho));l.assign(u),c.assign(d);const p=et(P(h,-this.learningRate),r);r.assign(p)})}),this.incrementIterations()}dispose(){this.accumulatedUpdates!=null&&(Dt(this.accumulatedGrads.map(t=>t.variable)),Dt(this.accumulatedUpdates.map(t=>t.variable)))}getWeights(){return Z(this,null,function*(){const t=[...this.accumulatedGrads,...this.accumulatedUpdates];return[yield this.saveIterations()].concat(t.map(e=>({name:e.originalName,tensor:e.variable})))})}setWeights(t){return Z(this,null,function*(){t=yield this.extractIterations(t);const e=t.length/2,s=!1;this.accumulatedGrads=t.slice(0,e).map(o=>({originalName:o.name,variable:o.tensor.variable(s)})),this.accumulatedUpdates=t.slice(e,e*2).map(o=>({originalName:o.name,variable:o.tensor.variable(s)}))})}getConfig(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}}static fromConfig(t,e){return new t(e.learningRate,e.rho,e.epsilon)}}class Jm extends Bs{static get className(){return"Adagrad"}constructor(t,e=.1){super(),this.learningRate=t,this.initialAccumulatorValue=e,this.accumulatedGrads=[]}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,o)=>{const r=B.registeredVariables[s];this.accumulatedGrads[o]==null&&(this.accumulatedGrads[o]={originalName:`${s}/accumulator`,variable:U(()=>Ol(r.shape,this.initialAccumulatorValue).variable(!1))});const i=Array.isArray(t)?t[o].tensor:t[s];if(i==null)return;const a=this.accumulatedGrads[o].variable;U(()=>{const l=et(a,Zt(i));a.assign(l);const c=et(P(gt(i,Ve(et(l,B.backend.epsilon()))),-this.learningRate),r);r.assign(c)})}),this.incrementIterations()}dispose(){this.accumulatedGrads!=null&&Dt(this.accumulatedGrads.map(t=>t.variable))}getWeights(){return Z(this,null,function*(){return[yield this.saveIterations()].concat(this.accumulatedGrads.map(t=>({name:t.originalName,tensor:t.variable})))})}setWeights(t){return Z(this,null,function*(){t=yield this.extractIterations(t);const e=!1;this.accumulatedGrads=t.map(s=>({originalName:s.name,variable:s.tensor.variable(e)}))})}getConfig(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}}static fromConfig(t,e){return new t(e.learningRate,e.initialAccumulatorValue)}}class tg extends Bs{static get className(){return"Adam"}constructor(t,e,s,o=null){super(),this.learningRate=t,this.beta1=e,this.beta2=s,this.epsilon=o,this.accumulatedFirstMoment=[],this.accumulatedSecondMoment=[],U(()=>{this.accBeta1=Vt(e).variable(),this.accBeta2=Vt(s).variable()}),o==null&&(this.epsilon=B.backend.epsilon())}applyGradients(t){const e=Array.isArray(t)?t.map(s=>s.name):Object.keys(t);U(()=>{const s=yt(1,this.accBeta1),o=yt(1,this.accBeta2);e.forEach((r,i)=>{const a=B.registeredVariables[r],l=!1;this.accumulatedFirstMoment[i]==null&&(this.accumulatedFirstMoment[i]={originalName:`${r}/m`,variable:U(()=>_t(a).variable(l))}),this.accumulatedSecondMoment[i]==null&&(this.accumulatedSecondMoment[i]={originalName:`${r}/v`,variable:U(()=>_t(a).variable(l))});const c=Array.isArray(t)?t[i].tensor:t[r];if(c==null)return;const u=this.accumulatedFirstMoment[i].variable,h=this.accumulatedSecondMoment[i].variable,d=et(P(u,this.beta1),P(c,1-this.beta1)),p=et(P(h,this.beta2),P(Zt(c),1-this.beta2)),f=gt(d,s),m=gt(p,o);u.assign(d),h.assign(p);const g=et(P(gt(f,et(Ve(m),this.epsilon)),-this.learningRate),a);a.assign(g)}),this.accBeta1.assign(P(this.accBeta1,this.beta1)),this.accBeta2.assign(P(this.accBeta2,this.beta2))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&Dt(this.accumulatedFirstMoment.map(t=>t.variable)),this.accumulatedSecondMoment!=null&&Dt(this.accumulatedSecondMoment.map(t=>t.variable))}getWeights(){return Z(this,null,function*(){const t=[...this.accumulatedFirstMoment,...this.accumulatedSecondMoment];return[yield this.saveIterations()].concat(t.map(e=>({name:e.originalName,tensor:e.variable})))})}setWeights(t){return Z(this,null,function*(){t=yield this.extractIterations(t),U(()=>{this.accBeta1.assign(fo(this.beta1,this.iterations_+1)),this.accBeta2.assign(fo(this.beta2,this.iterations_+1))});const e=t.length/2,s=!1;this.accumulatedFirstMoment=t.slice(0,e).map(o=>({originalName:o.name,variable:o.tensor.variable(s)})),this.accumulatedSecondMoment=t.slice(e,e*2).map(o=>({originalName:o.name,variable:o.tensor.variable(s)}))})}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}}static fromConfig(t,e){return new t(e.learningRate,e.beta1,e.beta2,e.epsilon)}}class eg extends Bs{static get className(){return"Adamax"}constructor(t,e,s,o=null,r=0){super(),this.learningRate=t,this.beta1=e,this.beta2=s,this.epsilon=o,this.decay=r,this.accumulatedFirstMoment=[],this.accumulatedWeightedInfNorm=[],U(()=>{this.iteration=Vt(0).variable(),this.accBeta1=Vt(e).variable()}),o==null&&(this.epsilon=B.backend.epsilon())}applyGradients(t){const e=Array.isArray(t)?t.map(s=>s.name):Object.keys(t);U(()=>{const s=yt(1,this.accBeta1),o=gt(-this.learningRate,et(P(this.iteration,this.decay),1));e.forEach((r,i)=>{const a=B.registeredVariables[r],l=!1;this.accumulatedFirstMoment[i]==null&&(this.accumulatedFirstMoment[i]={originalName:`${r}/m`,variable:_t(a).variable(l)}),this.accumulatedWeightedInfNorm[i]==null&&(this.accumulatedWeightedInfNorm[i]={originalName:`${r}/v`,variable:_t(a).variable(l)});const c=Array.isArray(t)?t[i].tensor:t[r];if(c==null)return;const u=this.accumulatedFirstMoment[i].variable,h=this.accumulatedWeightedInfNorm[i].variable,d=et(P(u,this.beta1),P(c,1-this.beta1)),p=P(h,this.beta2),f=qe(c),m=Ls(p,f);u.assign(d),h.assign(m);const g=et(P(gt(o,s),gt(d,et(m,this.epsilon))),a);a.assign(g)}),this.iteration.assign(et(this.iteration,1)),this.accBeta1.assign(P(this.accBeta1,this.beta1))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&Dt(this.accumulatedFirstMoment.map(t=>t.variable)),this.accumulatedWeightedInfNorm!=null&&Dt(this.accumulatedWeightedInfNorm.map(t=>t.variable))}getWeights(){return Z(this,null,function*(){throw new Error("getWeights() is not implemented for Adamax yet.")})}setWeights(t){return Z(this,null,function*(){throw new Error("setWeights() is not implemented for Adamax yet.")})}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}}static fromConfig(t,e){return new t(e.learningRate,e.beta1,e.beta2,e.epsilon,e.decay)}}class Zh extends Bs{static get className(){return"SGD"}constructor(t){super(),this.learningRate=t,this.setLearningRate(t)}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,o)=>{const r=Array.isArray(t)?t[o].tensor:t[s];if(r==null)return;const i=B.registeredVariables[s];U(()=>{const a=et(P(this.c,r),i);i.assign(a)})}),this.incrementIterations()}setLearningRate(t){this.learningRate=t,this.c!=null&&this.c.dispose(),this.c=Yn(Vt(-t))}dispose(){this.c.dispose()}getWeights(){return Z(this,null,function*(){return[yield this.saveIterations()]})}setWeights(t){return Z(this,null,function*(){if(t=yield this.extractIterations(t),t.length!==0)throw new Error("SGD optimizer does not have settable weights.")})}getConfig(){return{learningRate:this.learningRate}}static fromConfig(t,e){return new t(e.learningRate)}}class ng extends Zh{static get className(){return"Momentum"}constructor(t,e,s=!1){super(t),this.learningRate=t,this.momentum=e,this.useNesterov=s,this.accumulations=[],this.m=Vt(this.momentum)}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,o)=>{const r=B.registeredVariables[s];this.accumulations[o]==null&&(this.accumulations[o]={originalName:`${s}/momentum`,variable:U(()=>_t(r).variable(!1))});const i=this.accumulations[o].variable,a=Array.isArray(t)?t[o].tensor:t[s];a!=null&&U(()=>{let l;const c=et(P(this.m,i),a);this.useNesterov?l=et(P(this.c,et(a,P(c,this.m))),r):l=et(P(this.c,c),r),i.assign(c),r.assign(l)})}),this.incrementIterations()}dispose(){this.m.dispose(),this.accumulations!=null&&Dt(this.accumulations.map(t=>t.variable))}setMomentum(t){this.momentum=t}getWeights(){return Z(this,null,function*(){return[yield this.saveIterations()].concat(this.accumulations.map(t=>({name:t.originalName,tensor:t.variable})))})}setWeights(t){return Z(this,null,function*(){t=yield this.extractIterations(t);const e=!1;this.accumulations=t.map(s=>({originalName:s.name,variable:s.tensor.variable(e)}))})}getConfig(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}}static fromConfig(t,e){return new t(e.learningRate,e.momentum,e.useNesterov)}}class sg extends Bs{static get className(){return"RMSProp"}constructor(t,e=.9,s=0,o=null,r=!1){if(super(),this.learningRate=t,this.decay=e,this.momentum=s,this.epsilon=o,this.accumulatedMeanSquares=[],this.accumulatedMoments=[],this.accumulatedMeanGrads=[],this.centered=r,o==null&&(this.epsilon=B.backend.epsilon()),t==null)throw new Error("learningRate for RMSPropOptimizer must be defined.")}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,o)=>{const r=B.registeredVariables[s],i=!1;this.accumulatedMeanSquares[o]==null&&(this.accumulatedMeanSquares[o]={originalName:`${s}/rms`,variable:U(()=>_t(r).variable(i))}),this.accumulatedMoments[o]==null&&(this.accumulatedMoments[o]={originalName:`${s}/momentum`,variable:U(()=>_t(r).variable(i))}),this.accumulatedMeanGrads[o]==null&&this.centered&&(this.accumulatedMeanGrads[o]={originalName:`${s}/mg`,variable:U(()=>_t(r).variable(i))});const a=Array.isArray(t)?t[o].tensor:t[s];if(a==null)return;const l=this.accumulatedMeanSquares[o].variable,c=this.accumulatedMoments[o].variable;U(()=>{const u=et(P(l,this.decay),P(Zt(a),1-this.decay));if(this.centered){const h=this.accumulatedMeanGrads[o].variable,d=et(P(h,this.decay),P(a,1-this.decay)),p=gt(P(a,this.learningRate),Ve(yt(u,et(Zt(d),this.epsilon)))),f=et(P(c,this.momentum),p);l.assign(u),h.assign(d),c.assign(f);const m=yt(r,f);r.assign(m)}else{const h=et(P(l,this.decay),P(Zt(a),1-this.decay)),d=et(P(c,this.momentum),gt(P(a,this.learningRate),Ve(et(h,this.epsilon))));l.assign(h),c.assign(d);const p=yt(r,d);r.assign(p)}})}),this.incrementIterations()}dispose(){this.accumulatedMeanSquares!=null&&Dt(this.accumulatedMeanSquares.map(t=>t.variable)),this.accumulatedMeanGrads!=null&&this.centered&&Dt(this.accumulatedMeanGrads.map(t=>t.variable)),this.accumulatedMoments!=null&&Dt(this.accumulatedMoments.map(t=>t.variable))}getWeights(){return Z(this,null,function*(){const t=[...this.accumulatedMeanSquares,...this.accumulatedMoments];return this.centered&&t.push(...this.accumulatedMeanGrads),[yield this.saveIterations()].concat(t.map(e=>({name:e.originalName,tensor:e.variable})))})}setWeights(t){return Z(this,null,function*(){t=yield this.extractIterations(t);const e=this.centered?t.length/3:t.length/2,s=!1;this.accumulatedMeanSquares=t.slice(0,e).map(o=>({originalName:o.name,variable:o.tensor.variable(s)})),this.accumulatedMoments=t.slice(e,e*2).map(o=>({originalName:o.name,variable:o.tensor.variable(s)})),this.centered&&(this.accumulatedMeanGrads=t.slice(e*2,e*3).map(o=>({originalName:o.name,variable:o.tensor.variable(s)})))})}getConfig(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}}static fromConfig(t,e){return new t(e.learningRate,e.decay,e.momentum,e.epsilon,e.centered)}}const o2=[Qm,Jm,tg,eg,ng,sg,Zh];function r2(){for(const n of o2)Q(n)}const i2="model",a2=".json",l2=".weights.bin";function og(n){return new Promise(t=>setTimeout(t)).then(n)}class wo{constructor(t){if(!H().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");t.startsWith(wo.URL_SCHEME)&&(t=t.slice(wo.URL_SCHEME.length)),(t==null||t.length===0)&&(t=i2),this.modelJsonFileName=t+a2,this.weightDataFileName=t+l2}save(t){return Z(this,null,function*(){if(typeof document=="undefined")throw new Error("Browser downloads are not supported in this environment since `document` is not present");const e=Fs.join(t.weightData),s=window.URL.createObjectURL(new Blob([e],{type:"application/octet-stream"}));if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");{const o=[{paths:["./"+this.weightDataFileName],weights:t.weightSpecs}],r=tm(t,o),i=window.URL.createObjectURL(new Blob([JSON.stringify(r)],{type:"application/json"})),a=this.modelJsonAnchor==null?document.createElement("a"):this.modelJsonAnchor;if(a.download=this.modelJsonFileName,a.href=i,yield og(()=>a.dispatchEvent(new MouseEvent("click"))),t.weightData!=null){const l=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor;l.download=this.weightDataFileName,l.href=s,yield og(()=>l.dispatchEvent(new MouseEvent("click")))}return{modelArtifactsInfo:Dl(t)}}})}}wo.URL_SCHEME="downloads://";const c2=n=>H().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(wo.URL_SCHEME)?u2(n.slice(wo.URL_SCHEME.length)):null;ve.registerSaveRouter(c2);function u2(n="model"){return new wo(n)}function rg(n,t,e,s){i(n),e=e==null?0:e,s=s==null?1:s,a(e,s);let o=0;const r=l=>(l.then(c=>{const u=e+ ++o/n.length*(s-e);return t(u),c}),l);function i(l){T(l!=null&&Array.isArray(l)&&l.length>0,()=>"promises must be a none empty array")}function a(l,c){T(l>=0&&l<=1,()=>`Progress fraction must be in range [0, 1], but got startFraction ${l}`),T(c>=0&&c<=1,()=>`Progress fraction must be in range [0, 1], but got endFraction ${c}`),T(c>=l,()=>`startFraction must be no more than endFraction, but got startFraction ${l} and endFraction ${c}`)}return Promise.all(n.map(r))}function h2(n,t){return Z(this,null,function*(){t==null&&(t={});const e=t.fetchFunc==null?H().platform.fetch:t.fetchFunc,s=n.map(h=>e(h,t.requestInit,{isBinary:!0})),a=(t.onProgress==null?yield Promise.all(s):yield rg(s,t.onProgress,0,.5)).map(h=>h.arrayBuffer());return t.onProgress==null?yield Promise.all(a):yield rg(a,t.onProgress,.5,1)})}function d2(n,t){var e;const s=t.fetchFunc==null?H().platform.fetch:t.fetchFunc;let o=0,r;return(e=t.onProgress)===null||e===void 0||e.call(t,0),new ReadableStream({pull:i=>Z(null,null,function*(){for(var a;o<n.length;){r||(r=(yield s(n[o],t.requestInit,{isBinary:!0})).body.getReader());const{done:l,value:c}=yield r.read();if(l){o++,r=void 0,(a=t.onProgress)===null||a===void 0||a.call(t,o/n.length);continue}i.enqueue(c);return}i.close()})})}const p2="application/octet-stream",f2="application/json";class Qh{constructor(t,e){if(this.DEFAULT_METHOD="POST",e==null&&(e={}),this.weightPathPrefix=e.weightPathPrefix,this.weightUrlConverter=e.weightUrlConverter,e.fetchFunc!=null?(T(typeof e.fetchFunc=="function",()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"),this.fetch=e.fetchFunc):this.fetch=H().platform.fetch,T(t!=null&&t.length>0,()=>"URL path for http must not be null, undefined or empty."),Array.isArray(t)&&T(t.length===2,()=>`URL paths for http must have a length of 2, (actual length is ${t.length}).`),this.path=t,e.requestInit!=null&&e.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=e.requestInit||{},this.loadOptions=e}save(t){return Z(this,null,function*(){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");const e=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);e.body=new FormData;const s=[{paths:["./model.weights.bin"],weights:t.weightSpecs}],o=tm(t,s);if(e.body.append("model.json",new Blob([JSON.stringify(o)],{type:f2}),"model.json"),t.weightData!=null){const i=Fs.join(t.weightData);e.body.append("model.weights.bin",new Blob([i],{type:p2}),"model.weights.bin")}const r=yield this.fetch(this.path,e);if(r.ok)return{modelArtifactsInfo:Dl(t),responses:[r]};throw new Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${r.status}.`)})}loadModelJSON(){return Z(this,null,function*(){const t=yield this.fetch(this.path,this.requestInit);if(!t.ok)throw new Error(`Request to ${this.path} failed with status code ${t.status}. Please verify this URL points to the model JSON of the model to load.`);let e;try{e=yield t.json()}catch(r){let i=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(".pb")?i+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":i+=" Please make sure the server is serving valid JSON for this request.",new Error(i)}const s=e.modelTopology,o=e.weightsManifest;if(s==null&&o==null)throw new Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return e})}load(){return Z(this,null,function*(){if(this.loadOptions.streamWeights)return this.loadStream();const t=yield this.loadModelJSON();return RC(t,e=>this.loadWeights(e))})}loadStream(){return Z(this,null,function*(){const t=yield this.loadModelJSON(),e=yield this.getWeightUrls(t.weightsManifest),s=em(t.weightsManifest),o=()=>d2(e,this.loadOptions);return Object.assign(Object.assign({},t),{weightSpecs:s,getWeightStream:o})})}getWeightUrls(t){return Z(this,null,function*(){const e=Array.isArray(this.path)?this.path[1]:this.path,[s,o]=m2(e),r=this.weightPathPrefix||s,i=[],a=[];for(const l of t)for(const c of l.paths)this.weightUrlConverter!=null?a.push(this.weightUrlConverter(c)):i.push(r+c+o);return this.weightUrlConverter&&i.push(...yield Promise.all(a)),i})}loadWeights(t){return Z(this,null,function*(){const e=yield this.getWeightUrls(t),s=em(t),o=yield h2(e,this.loadOptions);return[s,o]})}}Qh.URL_SCHEME_REGEX=/^https?:\/\//;function m2(n){const t=n.lastIndexOf("/"),e=n.lastIndexOf("?"),s=n.substring(0,t),o=e>t?n.substring(e):"";return[s+"/",o]}function ig(n){return n.match(Qh.URL_SCHEME_REGEX)!=null}const ag=(n,t)=>{if(typeof fetch=="undefined"&&(t==null||t.fetchFunc==null))return null;{let e=!0;if(Array.isArray(n)?e=n.every(s=>ig(s)):e=ig(n),e)return g2(n,t)}return null};ve.registerSaveRouter(ag),ve.registerLoadRouter(ag);function g2(n,t){return new Qh(n,t)}function Jh(n,t){const e=n.shape.length,s=t.shape.length;if(e<1)throw new Error(`tf.gatherND() expects the input to be rank 1 or higher, but the rank was ${e}.`);if(s<1)throw new Error(`tf.gatherND() expects the indices to be rank 1 or higher, but the rank was ${s}.`);if(t.dtype!=="int32")throw new Error(`tf.gatherND() expects the indices to be int32 type, but the dtype was ${t.dtype}.`);if(t.shape[s-1]>e)throw new Error(`index innermost dimension length must be <= tensor rank; saw: ${t.shape[s-1]} vs. ${e}`);if(K(n.shape)===0)throw new Error(`Requested more than 0 entries, but input is empty. Input shape: ${n.shape}.`);const o=t.shape,r=o[o.length-1];let i=1;for(let h=0;h<o.length-1;++h)i*=o[h];const a=n.shape,l=o.slice();l.pop();let c=1;for(let h=r;h<e;++h)c*=a[h],l.push(a[h]);const u=[...ft(n.shape).map(h=>h/c),1].slice(0,r);return[l,i,c,u]}const td=-2,x2=-1;function lg(n,t,e){const s=n.shape.length;T(s===t.length,()=>`Error in slice${s}D: Length of begin ${t} must match the rank of the array (${s}).`),T(s===e.length,()=>`Error in slice${s}D: Length of size ${e} must match the rank of the array (${s}).`);for(let o=0;o<s;++o)T(t[o]+e[o]<=n.shape[o],()=>`Error in slice${s}D: begin[${o}] + size[${o}] (${t[o]+e[o]}) would overflow input.shape[${o}] (${n.shape[o]})`)}function cg(n,t,e){const s=[];for(let o=0;o<n.length;o++)s[o]=Math.ceil((t[o]-n[o])/e[o]);return s}function ug(n,t,e){let s=e.length;for(let o=0;o<e.length;o++)if(e[o]>1){s=o;break}for(let o=s+1;o<e.length;o++)if(t[o]>0||e[o]!==n[o])return!1;return!0}function hg(n,t){let e=n.length>0?n[n.length-1]:1;for(let s=0;s<n.length-1;s++)e+=n[s]*t[s];return e}function ed(n,t,e){let s;const o=n.shape.length;typeof t=="number"?s=[t,...new Array(o-1).fill(0)]:t.length<o?s=t.concat(new Array(o-t.length).fill(0)):s=t.slice(),s.forEach(i=>{T(i!==-1,()=>"slice() does not support negative begin indexing.")});let r;return e==null?r=new Array(o).fill(-1):typeof e=="number"?r=[e,...new Array(o-1).fill(-1)]:e.length<o?r=e.concat(new Array(o-e.length).fill(-1)):r=e,r=r.map((i,a)=>i>=0?i:(T(i===-1,()=>`Negative size values should be exactly -1 but got ${i} for the slice() size at index ${a}.`),n.shape[a]-s[a])),[s,r]}function dg(n,t,e,s,o,r,i,a,l){let c;if(s==null?(c=new Array(t.length),c.fill(1)):c=s,i!=null&&(i&i-1)!==0)throw new Error("Multiple ellipses in slice is not allowed.");let u=!1;const h={dims:c.length,numAddAxisAfterEllipsis:0,begin:t.slice(),end:e.slice(),strides:c.slice(),beginMask:o,endMask:r,ellipsisMask:i,newAxisMask:a,shrinkAxisMask:l};for(let y=0;y<h.dims;y++)u&&(1<<y&a)!==0&&h.numAddAxisAfterEllipsis++,1<<y&i&&(u=!0);u||(h.ellipsisMask|=1<<h.dims,h.dims++);const d={dims:n.length,beginMask:0,endMask:0,beginValid:!1,endValid:!1};b2(h,d);let p=!0,f=!0,m=!0;const g=[],x=[];for(let y=0;y<n.length;++y){if(d.strides[y]===0)throw Error(`strides[${y}] must be non-zero`);const w=!!(d.shrinkAxisMask&1<<y),C=n[y];if(C===-1){g.push(w?1:-1);continue}const I=[d.beginMask&1<<y,d.endMask&1<<y],v=[d.strides[y]>0?0:-1,d.strides[y]>0?C:C-1];if(w&&d.strides[y]<=0)throw Error("only stride 1 allowed on non-range indexing.");m=m&&d.strides[y]===1;const N=!!(d.beginMask&1<<y&&d.endMask&1<<y);if(d.beginValid&&d.endValid){if(w){const E=d.begin[y]<0?C+d.begin[y]:d.begin[y];if(d.begin[y]=E,d.end[y]=d.begin[y]+1,E<0||E>=C)throw Error(`slice index ${d.begin[y]} of dimension ${y} out of bounds.`)}else d.begin[y]=pg(d.begin[y],0,d.strides[y],C,I,v),d.end[y]=pg(d.end[y],1,d.strides[y],C,I,v);const $=d.strides[y]===1&&d.begin[y]===0&&d.end[y]===C;p=p&&$,f=f&&(y===0&&d.strides[y]===1||$)}else p=p&&d.strides[y]===1&&N,f=f&&(y===0&&d.strides[y]===1||N);let k,S=!1;if(d.beginValid&&d.endValid?(k=d.end[y]-d.begin[y],S=!0):w?(k=1,S=!0):N&&C>=0&&(d.strides[y]<0?k=-C:k=C,S=!0),S){let $;k===0||k<0!=d.strides[y]<0?$=0:$=Math.trunc(k/d.strides[y])+(k%d.strides[y]!==0?1:0),g.push($)}else g.push(-1)}for(let y=0;y<d.finalShapeGatherIndices.length;++y){const w=d.finalShapeGatherIndices[y];w>=0?x.push(g[w]):w===td&&x.push(1)}return{finalShapeSparse:x.filter((y,w)=>d.finalShapeGatherIndices[w]!==td),finalShape:x,isIdentity:p,sliceDim0:f,isSimpleSlice:m,begin:d.begin,end:d.end,strides:d.strides}}function b2(n,t){t.beginMask=0,t.endMask=0,t.shrinkAxisMask=0;let e=0;t.beginValid=n.begin!=null,t.endValid=n.end!=null,t.begin=new Array(t.dims),t.end=new Array(t.dims),t.strides=new Array(t.dims),t.finalShapeGatherIndices=[],t.finalShapeGatherIndicesSparse=[],t.inputShapeGatherIndicesSparse=new Array(t.dims);for(let s=0;s<n.dims;s++)if(1<<s&n.ellipsisMask){const o=Math.min(t.dims-(n.dims-s)+1+n.numAddAxisAfterEllipsis,t.dims);for(;e<o;e++)t.begin[e]=0,t.end[e]=0,t.strides[e]=1,t.beginMask|=1<<e,t.endMask|=1<<e,t.finalShapeGatherIndices.push(e),t.finalShapeGatherIndicesSparse.push(-1),t.inputShapeGatherIndicesSparse[e]=s}else if(1<<s&n.newAxisMask)t.finalShapeGatherIndices.push(td),t.finalShapeGatherIndicesSparse.push(-1);else{if(e===t.begin.length)throw Error(`Index out of range using input dim ${e}; input has only ${t.dims} dims, ${t.begin.length}.`);n.begin!=null&&(t.begin[e]=n.begin[s]),n.end!=null&&(t.end[e]=n.end[s]),t.strides[e]=n.strides[s],n.beginMask&1<<s&&(t.beginMask|=1<<e),n.endMask&1<<s&&(t.endMask|=1<<e),n.shrinkAxisMask&1<<s?(t.finalShapeGatherIndices.push(x2),t.finalShapeGatherIndicesSparse.push(-1),t.shrinkAxisMask|=1<<e):(t.finalShapeGatherIndices.push(e),t.finalShapeGatherIndicesSparse.push(s)),t.inputShapeGatherIndicesSparse[e]=s,e++}}function pg(n,t,e,s,o,r){if(o[t])return e>0?r[t]:r[t+1&1];{const i=n<0?s+n:n;return i<r[0]?r[0]:i>r[1]?r[1]:i}}class y2{static sgd(t){return new Zh(t)}static momentum(t,e,s=!1){return new ng(t,e,s)}static rmsprop(t,e=.9,s=0,o=null,r=!1){return new sg(t,e,s,o,r)}static adam(t=.001,e=.9,s=.999,o=null){return new tg(t,e,s,o)}static adadelta(t=.001,e=.95,s=null){return new Qm(t,e,s)}static adamax(t=.002,e=.9,s=.999,o=null,r=0){return new eg(t,e,s,o,r)}static adagrad(t,e=.1){return new Jm(t,e)}}const nr=y2;const w2=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:typeof setImmediate!="undefined"?setImmediate:n=>n();function fg(){return new Promise(n=>w2(()=>n()))}function nd(n,t){const e=n[0].length;n.forEach((o,r)=>{T(o.length===e,()=>`Error in concat${e}D: rank of tensors[${r}] must be the same as the rank of the rest (${e})`)}),T(t>=0&&t<e,()=>`Error in concat${e}D: axis must be between 0 and ${e-1}.`);const s=n[0];n.forEach((o,r)=>{for(let i=0;i<e;i++)T(i===t||o[i]===s[i],()=>`Error in concat${e}D: Shape of tensors[${r}] (${o}) does not match the shape of the rest (${s}) along the non-concatenated axis ${r}.`)})}function es(n,t){const e=n[0].slice();for(let s=1;s<n.length;s++)e[t]+=n[s][t];return e}var zn;(function(n){n[n.FIRST_DIM_SIZE=0]="FIRST_DIM_SIZE",n[n.VALUE_ROWIDS=1]="VALUE_ROWIDS",n[n.ROW_LENGTHS=2]="ROW_LENGTHS",n[n.ROW_SPLITS=3]="ROW_SPLITS",n[n.ROW_LIMITS=4]="ROW_LIMITS",n[n.ROW_STARTS=5]="ROW_STARTS"})(zn||(zn={}));function mg(n,t,e){let s=new Array;if(e==null&&t==null)return s;if(t==null)for(;s.length<n+e.length;)s.push(-1);else s=t.slice();if(e==null)return s;if(n+e.length!==s.length)throw new Error(`rt input.shape and shape=${t} are incompatible: rt input.rank = ${n+e.length}, but shape.rank = ${s.length}`);for(let o=1;o<e.length;++o){const r=e[o],i=s[s.length-e.length+o],a=s[i];if(r>=0)if(a>=0){if(a!==r)throw new Error(`rt input.shape and shape=${t} are incompatible: rt input.shape[${o+n}] = ${r} but shape[${o+n}] = ${a}`)}else s[i]=r}return s}function gg(n){const t={FIRST_DIM_SIZE:zn.FIRST_DIM_SIZE,VALUE_ROWIDS:zn.VALUE_ROWIDS,ROW_LENGTHS:zn.ROW_LENGTHS,ROW_SPLITS:zn.ROW_SPLITS,ROW_LIMITS:zn.ROW_LIMITS,ROW_STARTS:zn.ROW_STARTS},e=[];for(const s of n)if(s in t)e.push(t[s]);else break;return e}function xg(n){return n.length===0?0:n[0]===zn.FIRST_DIM_SIZE?n.length-1:n.length}function bg(n,t){if(n==null||t==null)return;const e=n.length,s=t.length;if(e>=s)throw new Error(`defaultValue.shape=${n} and ragged tensor flatValues.shape=${t}, are incompatible: defaultValue.rank = ${e} must be less than ragged tensor input flatValues.rank = ${s})`);for(let o=0;o<Math.min(e,s-1);++o){const r=n[o],i=t[o+1];if(r>=0&&i>=0&&r!==1&&r!==i)throw new Error(`defaultValue.shape=${n}, and ragged tensor input flatValues.shape=${t} are incompatible: defaultValue.shape[${o-n.length}] = ${r} but ragged tensor input.flatValues.shape[${o-n.length}] = ${i}`)}}const sd=30;function Zl(n){return n<=sd?n:au(n,Math.floor(Math.sqrt(n)))}function od(n,t,e){const s=e*(typeof n=="number"?n:n[0]),o=t*(typeof n=="number"?n:n[1]);return[s,o]}function zi(n,t,e,s=!0){let o=[];if(s)o=o.concat(t.slice(0)),o.push(n[0]/e),o=o.concat(n.slice(1));else{o=o.concat(n[0]);const r=t.length;for(let i=0;i<r;++i)o=o.concat([n[i+1]/t[i],t[i]]);o=o.concat(n.slice(r+1))}return o}function Vi(n,t,e=!0){const s=[];if(e){s.push(t);for(let o=t+1;o<n;++o)o<=2*t?(s.push(o),s.push(o-(t+1))):s.push(o)}else{const o=[],r=[];for(let i=1;i<n;++i)i>=t*2+1||i%2===1?r.push(i):o.push(i);s.push(...o),s.push(0),s.push(...r)}return s}function Wi(n,t,e,s=!0){const o=[];s?o.push(n[0]/e):o.push(n[0]*e);for(let r=1;r<n.length;++r)r<=t.length?s?o.push(t[r-1]*n[r]):o.push(n[r]/t[r-1]):o.push(n[r]);return o}function rd(n,t){const e=[0];for(let s=0;s<t;++s)e.push(n[s][0]);return e}function id(n,t,e){const s=n.slice(0,1);for(let o=0;o<e;++o)s.push(n[o+1]-t[o][0]-t[o][1]);return s}const Ql=1.7580993408473768,Jl=1.0507009873554805;const ad=.3275911,ld=.254829592,cd=-.284496736,ud=1.421413741,hd=-1.453152027,dd=1.061405429;function ys(n,t){if(n.length!==t.length)throw new Error(`Cannot merge real and imag arrays of different lengths. real:${n.length}, imag: ${t.length}.`);const e=new Float32Array(n.length*2);for(let s=0;s<e.length;s+=2)e[s]=n[s/2],e[s+1]=t[s/2];return e}function yg(n){const t=new Float32Array(n.length/2),e=new Float32Array(n.length/2);for(let s=0;s<n.length;s+=2)t[s/2]=n[s],e[s/2]=n[s+1];return{real:t,imag:e}}function wg(n){const t=Math.ceil(n.length/4),e=new Float32Array(t),s=new Float32Array(t);for(let o=0;o<n.length;o+=4)e[Math.floor(o/4)]=n[o],s[Math.floor(o/4)]=n[o+1];return{real:e,imag:s}}function Cg(n){const t=Math.floor(n.length/4),e=new Float32Array(t),s=new Float32Array(t);for(let o=2;o<n.length;o+=4)e[Math.floor(o/4)]=n[o],s[Math.floor(o/4)]=n[o+1];return{real:e,imag:s}}function pd(n,t){const e=n[t*2],s=n[t*2+1];return{real:e,imag:s}}function $g(n,t,e,s){n[s*2]=t,n[s*2+1]=e}function Ig(n,t){const e=new Float32Array(n/2),s=new Float32Array(n/2);for(let o=0;o<Math.ceil(n/2);o++){const r=(t?2:-2)*Math.PI*(o/n);e[o]=Math.cos(r),s[o]=Math.sin(r)}return{real:e,imag:s}}function vg(n,t,e){const s=(e?2:-2)*Math.PI*(n/t),o=Math.cos(s),r=Math.sin(s);return{real:o,imag:r}}const fd="->",C2=/->/g,kg=",",Sg="...";function md(n,t){n=n.replace(/\s/g,"");const e=(n.length-n.replace(C2,"").length)/fd.length;if(e<1)throw new Error("Equations without an arrow are not supported.");if(e>1)throw new Error(`Equation must contain exactly one arrow ("${fd}").`);const[s,o]=n.split(fd);T(s.indexOf(Sg)===-1,()=>`The ellipsis notation ("${Sg}") is not supported yet.`);const r=s.split(kg),i=r.length;if(t!==i)throw new Error(`Expected ${i} input tensors, received ${t}`);if(i>2)throw new Error("Support for more than 2 input tensors is not implemented yet.");const a=[];for(let d=0;d<o.length;++d){const p=o[d];if(!r.some(f=>f.indexOf(p)!==-1))throw new Error(`Output subscripts contain the label ${p} not present in the input subscripts.`);a.indexOf(p)===-1&&a.push(p)}for(let d=0;d<s.length;++d){const p=s[d];a.indexOf(p)===-1&&p!==kg&&a.push(p)}const l=new Array(r.length);for(let d=0;d<i;++d){if(new Set(r[d].split("")).size!==r[d].length)throw new Error(`Found duplicate axes in input component ${r[d]}. Support for duplicate axes in input is not implemented yet.`);l[d]=[];for(let p=0;p<r[d].length;++p)l[d].push(a.indexOf(r[d][p]))}const c=a.length,u=o.length,h=[];for(let d=u;d<c;++d)h.push(d);return{allDims:a,summedDims:h,idDims:l}}function gd(n,t){let e=new Array(n);e.fill(-1);for(let o=0;o<t.length;++o)e[t[o]]=o;const s=[];for(let o=0;o<n;++o)e[o]===-1&&s.push(o);return e=e.filter(o=>o!==-1),{permutationIndices:e,expandDims:s}}function xd(n,t,e){const s=new Array(n);for(let o=0;o<e.length;++o){const r=e[o].shape;for(let i=0;i<t[o].length;++i)s[t[o][i]]===void 0?s[t[o][i]]=r[i]:T(s[t[o][i]]===r[i],()=>`Expected dimension ${s[t[o][i]]} at axis ${i} of input shaped ${JSON.stringify(r)}, but got dimension ${r[i]}`)}}function bd(n,t){const e=n,s=[];let o=0;n.length===0&&e.push(-1),o=n.length+1;for(let i=0;i<o;++i)s.push([]);const r=[];for(let i=0;i<e.length;++i){const a=e[i],l=$2(t,a);for(const c of l)r.indexOf(c)===-1&&(s[i].push(c),r.push(c))}return{path:e,steps:s}}function yd(n){return n.every((t,e)=>t===e)}function $2(n,t){const e=[];for(let s=0;s<n.length;++s)(n[s].length===0||n[s].indexOf(t)!==-1||t===-1)&&e.push(s);return e}function wd(n,t,e=0){let s=[];if(typeof t=="number")T(n.shape[e]%t===0,()=>"Number of splits must evenly divide the axis."),s=new Array(t).fill(n.shape[e]/t);else{const o=t.reduce((i,a)=>(a===-1&&(i+=1),i),0);T(o<=1,()=>"There should be only one negative value in split array.");const r=t.indexOf(-1);if(r!==-1){const i=t.reduce((a,l)=>l>0?a+l:a);t[r]=n.shape[e]-i}T(n.shape[e]===t.reduce((i,a)=>i+a),()=>"The sum of sizes must match the size of the axis dimension."),s=t}return s}function Ng(n){return`Received SparseTensor with denseShape[0] = 0 but
  indices.shape[0] = ${n}`}function Tg(n,t){return`indices(${n}, 0) is invalid: ${t} < 0`}function Eg(n,t,e){return`indices(${n}, 0) is invalid: ${t} >= ${e}`}function Rg(n,t){return`only one output dimension may be -1, not both ${n} and ${t}`}function Ag(n,t){return`size ${n} must be non-negative, not ${t}`}function Dg(){return"reshape cannot infer the missing input size for an empty tensor unless all specified input sizes are non-zero"}function Fg(n,t){const e=K(n),s=K(t);return`Input to reshape is a SparseTensor with ${e}
  dense values, but the requested shape requires a multiple of ${s}. inputShape=${n} outputShape= ${t}`}function _g(n,t){const e=K(n),s=K(t);return`Input to reshape is a tensor with ${e} dense values, but the requested shape has ${s}. inputShape=${n} outputShape=${t}`}function Cd(){return"segment ids must be >= 0"}function Og(){return"segment ids are not increasing"}function Mg(n,t){return`Segment id ${n} out of range [0, ${t}), possibly because segmentIds input is not sorted.`}function Lg(n,t,e){return`Bad: indices[${n}] == ${t} out of range [0, ${e})`}function I2(n,t){let e=!1,s;for(n<=sd?(s=n,e=!0):s=au(n,Math.floor(Math.sqrt(n)));!e;)s>t||s===n?e=!0:s=au(n,s+1);return s}function v2(n,t,e){const s=[],o=n.length;for(let r=0;r<o;r++)r!==t?s.push(n[r]):s.push(e);return s}function Pg(n,t,e,s){const o=t.shape.length,r=n.shape.length;if(s!==0&&(s<-o||s>o))throw new Error(`Expect batchDims in the range of [-${o}, ${o}], but got ${s}`);if(s<0&&(s+=o),s>r)throw new Error(`batchDims (${s}) must be less than rank(x) (
    ${r}).`);if(e<s)throw new Error(`batchDims (${s}) must be less than or equal to axis (${e}).`);for(let h=0;h<s;++h)if(n.shape[h]!==t.shape[h])throw new Error(`x.shape[${h}]: ${n.shape[h]} should be equal to indices.shape[${h}]: ${t.shape[h]}.`);const i=n.shape[e],a=[];let l=1,c=1,u=1;for(let h=0;h<s;++h)a.push(n.shape[h]),l*=n.shape[h];for(let h=s;h<e;h++)a.push(n.shape[h]),c*=n.shape[h];for(let h=s;h<o;h++)a.push(t.shape[h]);for(let h=e+1;h<r;h++)a.push(n.shape[h]),u*=n.shape[h];return{batchSize:l,sliceSize:u,outerSize:c,dimSize:i,outputShape:a}}function ws(n){try{return n.map(t=>Ds(t))}catch(t){throw new Error(`Failed to decode encoded string bytes into utf-8, error: ${t}`)}}function Bg(n){return n.map(t=>As(t))}var k2=Object.freeze({__proto__:null,ERF_A1:ld,ERF_A2:cd,ERF_A3:ud,ERF_A4:hd,ERF_A5:dd,ERF_P:ad,PARALLELIZE_THRESHOLD:sd,get RowPartitionType(){return zn},SELU_SCALE:Jl,SELU_SCALEALPHA:Ql,applyActivation:Hh,assertAndGetBroadcastShape:$t,assertAxesAreInnerMostDims:De,assertParamsConsistent:nd,assignToTypedArray:$g,axesAreInnerMostDims:kh,calculateShapes:bo,checkEinsumDimSizes:xd,checkPadOnDimRoundingMode:tn,combineLocations:bm,combineRaggedTensorToTensorShapes:mg,complexWithEvenIndex:wg,complexWithOddIndex:Cg,computeConv2DInfo:Ae,computeConv3DInfo:Os,computeDefaultPad:xh,computeDilation2DInfo:Ei,computeOptimalWindowSize:Zl,computeOutAndReduceShapes:ke,computeOutShape:es,computePool2DInfo:In,computePool3DInfo:fs,convertConv2DDataFormat:ms,decodeEinsumEquation:md,eitherStridesOrDilationsAreOne:ze,expandShapeToKeepDim:he,exponent:vg,exponents:Ig,fromStringArrayToUint8:Bg,fromUint8ToStringArray:ws,getAxesPermutation:ee,getBroadcastDims:Zo,getComplexWithIndex:pd,getEinsumComputePath:bd,getEinsumPermutation:gd,getFusedBiasGradient:Gh,getFusedDyActivation:Uh,getImageCenter:od,getInnerMostAxes:ie,getPermuted:Vi,getRaggedRank:xg,getReductionAxes:ge,getReshaped:zi,getReshapedPermuted:Wi,getRowPartitionTypesHelper:gg,getSliceBeginCoords:rd,getSliceSize:id,getSparseFillEmptyRowsIndicesDenseShapeMismatch:Ng,getSparseFillEmptyRowsNegativeIndexErrorMessage:Tg,getSparseFillEmptyRowsOutOfRangeIndexErrorMessage:Eg,getSparseReshapeEmptyTensorZeroOutputDimErrorMessage:Dg,getSparseReshapeInputOutputMismatchErrorMessage:_g,getSparseReshapeInputOutputMultipleErrorMessage:Fg,getSparseReshapeMultipleNegativeOneOutputDimErrorMessage:Rg,getSparseReshapeNegativeOutputDimErrorMessage:Ag,getSparseSegmentReductionIndicesOutOfRangeErrorMessage:Lg,getSparseSegmentReductionNegativeSegmentIdsErrorMessage:Cd,getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage:Og,getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage:Mg,getUndoAxesPermutation:Ms,isIdentityPermutation:yd,mergeRealAndImagArrays:ys,prepareAndValidate:Jh,prepareSplitSize:wd,shouldFuse:qh,splitRealAndImagArrays:yg,stridesOrDilationsArePositive:ho,tupleValuesAreOne:uo,upcastType:cn,validateDefaultValueShape:bg,warn:gn});r2();const zg={kernelName:$a,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>P(n,Bi(at(e,"float32"),-1))}}};const S2={kernelName:Rr,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>{const s=Zt(at(e,"float32")),o=Ve(yt(Vt(1),s));return ae(gt(n,o))}}}};const N2={kernelName:Ar,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>{const s=Ve(yt(Zt(at(e,"float32")),1));return gt(n,s)}}}};const T2={kernelName:Uo,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,o=$t(e.shape,s.shape);return{a:()=>{let a=n;const l=ge(e.shape,o);return l.length>0&&(a=mt(a,l)),z(a,e.shape)},b:()=>{let a=n;const l=ge(s.shape,o);return l.length>0&&(a=mt(a,l)),z(a,s.shape)}}}};const E2={kernelName:du,saveAllInputs:!0,gradFunc:(n,t)=>{const e={};return t.forEach((s,o)=>{e[o]=()=>n.clone()}),e}};const R2={kernelName:Ia,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>_t(e)}}};const A2={kernelName:va,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>_t(e)}}};const D2={kernelName:Dr,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>gt(n,Ve(yt(Vt(1),Zt(at(e,"float32")))))}}};const F2={kernelName:Fr,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>{const s=Ve(et(Vt(1),Zt(at(e,"float32"))));return gt(n,s)}}}};const _2={kernelName:Mr,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,o=$t(e.shape,s.shape);return{a:()=>{const a=et(Zt(e),Zt(s));let l=P(n,gt(s,a));const c=ge(e.shape,o);return c.length>0&&(l=mt(l,c)),z(l,e.shape)},b:()=>{const a=et(Zt(e),Zt(s));let l=ae(P(n,gt(e,a)));const c=ge(s.shape,o);return c.length>0&&(l=mt(l,c)),z(l,s.shape)}}}};const O2={kernelName:_r,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>gt(n,et(Zt(at(e,"float32")),1))}}};const M2={kernelName:Or,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>gt(n,yt(Vt(1),Zt(at(e,"float32"))))}}};function L2(n,t,e,s,o,r){const i=D(n,"dy","avgPool3dGrad"),a=D(t,"input","avgPool3dGrad");let l=i,c=a,u=!1;a.rank===4&&(u=!0,l=z(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]]),c=z(a,[1,a.shape[0],a.shape[1],a.shape[2],a.shape[3]])),T(l.rank===5,()=>`Error in avgPool3dGrad: dy must be rank 5 but got rank ${l.rank}.`),T(c.rank===5,()=>`Error in avgPool3dGrad: input must be rank 5 but got rank ${c.rank}.`),tn("avgPool3dGrad",o,r);const h={dy:l,input:c},d={filterSize:e,strides:s,pad:o,dimRoundingMode:r},p=B.runKernel(gu,h,d);return u?z(p,[p.shape[1],p.shape[2],p.shape[3],p.shape[4]]):p}const P2=W({avgPool3dGrad_:L2});const B2={kernelName:Sa,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{filterSize:o,strides:r,pad:i,dimRoundingMode:a}=e;return{x:()=>P2(n,s,o,r,i,a)}}};function z2(n,t,e,s,o){const r=D(n,"dy","avgPoolGrad"),i=D(t,"input","avgPoolGrad");T(i.rank===r.rank,()=>`Rank of input (${i.rank}) does not match rank of dy (${r.rank})`);let a=i,l=r,c=!1;i.rank===3&&(c=!0,a=z(i,[1,i.shape[0],i.shape[1],i.shape[2]]),l=z(r,[1,r.shape[0],r.shape[1],r.shape[2]])),T(l.rank===4,()=>`Error in avgPoolGrad: dy must be rank 4 but got rank ${l.rank}.`),T(a.rank===4,()=>`Error in avgPoolGrad: input must be rank 4 but got rank ${a.rank}.`);const u={dy:l,input:a},h={filterSize:e,strides:s,pad:o},d=B.runKernel(mu,u,h);return c?z(d,[d.shape[1],d.shape[2],d.shape[3]]):d}const V2=W({avgPoolGrad_:z2});const W2={kernelName:ka,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{filterSize:o,strides:r,pad:i}=e;return{x:()=>V2(n,s,o,r,i)}}};const U2={kernelName:Na,inputsToSave:["a","b"],gradFunc:(n,t,e)=>{const[s,o]=t,{transposeA:r,transposeB:i}=e;return!r&&!i?{a:()=>zt(n,o,!1,!0),b:()=>zt(s,n,!0,!1)}:!r&&i?{a:()=>zt(n,o,!1,!1),b:()=>zt(n,s,!0,!1)}:r&&!i?{a:()=>zt(o,n,!1,!0),b:()=>zt(s,n,!1,!1)}:{a:()=>zt(o,n,!0,!0),b:()=>zt(n,s,!0,!0)}}};const G2={kernelName:Ta,gradFunc:(n,t,e)=>{const{blockShape:s,crops:o}=e;return{x:()=>Fh(n,s,o)}}};const H2={kernelName:qw,gradFunc:(n,t,e)=>{const s=e,o=s.inputShape,r=s.shape,i=Array.from(r);for(let l=o.length-1;l>=0;l--)if(o[l]===r[l])i[l]=1;else if(o[l]!==1)throw new Error(`broadcastTo(): [${o}] cannot be broadcast to [${r}].`);const a=[];for(let l=0;l<i.length;l++)i[l]>1&&a.push(l);return{x:()=>mt(n,a,!0)}}};const q2={kernelName:Lr,gradFunc:n=>({x:()=>n.clone()})};const X2={kernelName:Pr,gradFunc:n=>({x:()=>_t(n)})};const K2={kernelName:Br,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{clipValueMin:o,clipValueMax:r}=e;return{x:()=>Xe(gs(mo(s,o),Qo(s,r)),n,_t(n))}}};const j2={kernelName:Ea,inputsToSave:["x"],gradFunc:zg.gradFunc};const Y2={kernelName:Ra,saveAllInputs:!0,gradFunc:(n,t,e)=>{const s=t.map(l=>l.shape),{axis:o}=e,r=Tt(o,t[0].shape)[0],i=s.map(l=>l[r]);return yn(n,i,r).map(l=>()=>l)}};const Z2={kernelName:Aa,inputsToSave:["x","filter"],gradFunc:(n,t,e)=>{const[s,o]=t,{dilations:r,strides:i,pad:a,dataFormat:l}=e;return T(uo(r),()=>`Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${r}'`),{x:()=>Ch(s.shape,n,o,i,a,l),filter:()=>Wh(s,n,o.shape,i,a,l)}}};const Q2={kernelName:Da,inputsToSave:["dy","filter"],gradFunc:(n,t,e)=>{const[s,o]=t,{strides:r,pad:i,dataFormat:a,dimRoundingMode:l}=e;return{dy:()=>po(n,o,r,i,a,1,l),filter:()=>Wh(n,s,o.shape,r,i,a,l)}}};function J2(n,t,e,s,o){let r=n;n.rank===4&&(r=z(n,[1,n.shape[0],n.shape[1],n.shape[2],n.shape[3]]));let i=t;i.rank===4&&(i=z(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]])),T(r.rank===5,()=>`Error in conv3dDerFilter: input must be rank 5, but got shape ${r.shape}.`),T(i.rank===5,()=>`Error in conv3dDerFilter: dy must be rank 5, but got shape ${i.shape}.`),T(e.length===5,()=>`Error in conv3dDerFilter: filterShape must be length 5, but got ${e}.`),T(r.shape[4]===e[3],()=>`Error in conv3dDerFilter: depth of input ${r.shape[4]}) must match input depth in filter (${e[3]}.`),T(i.shape[4]===e[4],()=>`Error in conv3dDerFilter: depth of dy (${i.shape[4]}) must match output depth for filter (${e[4]}).`);const a={x:r,dy:i},l={strides:s,pad:o,filterShape:e};return B.runKernel(Cu,a,l)}const tN=W({conv3DBackpropFilter_:J2});const eN={kernelName:Fa,inputsToSave:["x","filter"],gradFunc:(n,t,e)=>{const{dilations:s,strides:o,pad:r}=e;T(uo(s),()=>`Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${s}'`);const[i,a]=t;return{x:()=>pm(i.shape,n,a,o,r),filter:()=>tN(i,n,a.shape,o,r)}}};const nN={kernelName:zr,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>P(ae(zm(at(e,"float32"))),n)}}};const sN={kernelName:Vr,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>P(Vm(at(e,"float32")),n)}}};const oN={kernelName:_a,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{axis:o,exclusive:r,reverse:i}=e;return{x:()=>{const a=ee([o],s.rank);let l=mm(n,o,r,!i);return a!=null&&(l=Ot(l,a)),l}}}};const rN={kernelName:Oa,inputsToSave:["x","filter"],gradFunc:(n,t,e)=>{const{dilations:s,strides:o,pad:r,dimRoundingMode:i}=e,a=s==null?[1,1]:s;T(uo(a),()=>`Error in gradient of depthwiseConv2dNative: dilation rates greater than 1 are not yet supported. Got dilations '${a}'`);const[l,c]=t;return T(l.rank===4,()=>`Error in gradient of depthwiseConv2dNative: input must be rank 4, but got rank ${l.rank}.`),T(c.rank===4,()=>`Error in gradient of depthwiseConv2dNative: filter must be rank 4, but got rank ${c.rank}.`),T(l.shape[3]===c.shape[2],()=>`Error in gradient of depthwiseConv2d: number of input channels (${l.shape[3]}) must match the inChannels dimension in filter ${c.shape[2]}.`),T(ze(o,a),()=>`Error in gradient of depthwiseConv2d: Either strides or dilations must be  1. Got strides ${o} and dilations '${a}'.`),tn("depthwiseConv2d",r,i),{x:()=>dS(l.shape,n,c,o,r,a,i),filter:()=>uS(l,n,c.shape,o,r,a,i)}}};const iN={kernelName:Ma,inputsToSave:["x","filter"],gradFunc:(n,t,e)=>{const[s,o]=t,r={x:s,filter:o,dy:n},i={x:s,filter:o,dy:n};return{x:()=>B.runKernel(Eu,r,e),filter:()=>B.runKernel(Ru,i,e)}}};const aN={kernelName:Ur,outputsToSave:[!0],gradFunc:(n,t)=>{const[e]=t,s={dy:n,y:e};return{x:()=>B.runKernel(Du,s)}}};const lN={kernelName:Gr,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t,s=P(Jn(ae(Zt(e))),2/Math.sqrt(Math.PI));return{x:()=>P(n,s)}}};const cN={kernelName:Hr,outputsToSave:[!0],gradFunc:(n,t)=>{const[e]=t;return{x:()=>P(n,e)}}};const uN={kernelName:Pa,inputsToSave:["input"],gradFunc:(n,t)=>{const[e]=t;return{input:()=>z(n,e.shape)}}};const hN={kernelName:qr,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>P(n,Jn(e))}}};const dN={kernelName:Xr,gradFunc:n=>({x:()=>_t(n)})};const pN={kernelName:Kr,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,o=$t(e.shape,s.shape);return{a:()=>{const a=gt(n,at(s,"float32")),l=ge(e.shape,o);return l.length>0?z(mt(a,l),e.shape):a},b:()=>{let a=P(n,at(e,"float32"));const l=ge(s.shape,o);l.length>0&&(a=z(mt(a,l),s.shape));const c=Zt(s);return ae(gt(a,at(c,"float32")))}}}};const fN={kernelName:Ba,inputsToSave:["x","mean","variance","scale"],gradFunc:(n,t,e)=>{const{varianceEpsilon:s}=e,[o,r,i,a]=t,l=a==null?Vt(1):a,c=ge(r.shape,o.shape),u=[];if(r.rank===1){for(let w=0;w<o.shape.length-1;++w)u.push(o.shape[w]);u.push(1)}const h=yt(o,r),d=P(n,l),p=Lm(et(i,Vt(s))),f=P(P(P(p,p),p),Vt(-.5));return{x:()=>r.rank===1?z(P(P(n,Bn(z(p,[1,1,1,r.shape[0]]),u)),l),o.shape):z(P(P(n,p),l),o.shape),mean:()=>{let w=P(P(p,Vt(-1)),d);return r.rank===1&&(w=mt(w,c)),z(w,r.shape)},variance:()=>{let w=P(P(f,h),d);return r.rank===1&&(w=mt(w,c)),z(w,r.shape)},scale:()=>{const w=P(h,p);let C=P(n,w);return r.rank===1&&(C=mt(C,c)),z(C,r.shape)},offset:()=>{let w=n;return r.rank===1&&(w=mt(w,c)),z(w,r.shape)}}}};const mN={kernelName:za,inputsToSave:["x","indices"],gradFunc:(n,t,e)=>{const[s,o]=t,{axis:r,batchDims:i}=e,a=Tt(r,s.shape)[0],l=(c,u,h)=>()=>{const d=c.shape,p=u.size,f=d.slice(0,a),m=f.length,g=d.slice(r,d.length).slice(1),x=g.length,b=Vg(0,m),y=Vg(m+1,m+1+x),w=Wg([f,[p],g]),C=z(h,w),I=z(u,[p]),v=Wg([[m],b,y]),N=Ot(C,v);let k=Hm(N,I,c.shape[a]);const S=Ms(v);return k=Ot(k,S),k};if(i===1){const c=s.shape[0],u=s.split(c,0);return{x:()=>xs(u.map((p,f)=>l(p,o.slice(f,1),n.slice(f,1))())).reshape(s.shape),indices:()=>o}}else return{x:l(s,o,n),indices:()=>o}}};function Vg(n,t){const e=[];for(let s=n;s<t;++s)e.push(s);return e}function Wg(n){const t=[];for(let e=0;e<n.length;++e)for(let s=0;s<n[e].length;++s)t.push(n[e][s]);return t}const gN={kernelName:jr,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t;return{a:()=>_t(e),b:()=>_t(s)}}};const xN={kernelName:Yr,gradFunc:n=>({x:()=>at(n,"float32")})};const bN={kernelName:Zr,gradFunc:n=>({x:()=>_t(n)})};const yN={kernelName:Qr,gradFunc:n=>({x:()=>_t(n)})};const wN={kernelName:Jr,gradFunc:n=>({x:()=>_t(n)})};const CN={kernelName:Wa,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{alpha:o}=e,r=bn(s,0);return{x:()=>Xe(r,n,P(n,o))}}};const $N={kernelName:ei,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>gt(n,et(e,1))}}};const IN={kernelName:ti,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>gt(n,at(e,"float32"))}}};const vN={kernelName:Kw,inputsToSave:[],outputsToSave:[!0],gradFunc:(n,t,e)=>{const[s]=t,{axis:o}=e;return{logits:()=>{const i=Jn(s);return yt(n,P(mt(n,o,!0),i))}}}};function kN(n,t,e,s=5,o=1,r=1,i=.5){const a={x:n,y:t,dy:e},l={depthRadius:s,bias:o,alpha:r,beta:i};return B.runKernel(Pu,a,l)}const SN=W({localResponseNormalizationBackprop_:kN});const NN={kernelName:Ka,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(n,t,e)=>{const[s,o]=t,{depthRadius:r,bias:i,alpha:a,beta:l}=e;return{x:()=>SN(s,o,n,r,i,a,l)}}};function Ug(n,t,e,s){return t.rank<e.rank&&(t=z(t,he(t.shape,s))),n.rank<e.rank&&(n=z(n,he(n.shape,s))),{x:()=>P(n,at(Qn(e,t),n.dtype))}}const Gg={kernelName:ja,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(n,t,e)=>{const s=e,{reductionIndices:o}=s,r=t[0],i=t[1],a=Tt(o,r.shape),l=Ug(n,i,r,a);return{x:()=>l.x()}}};const TN={kernelName:ni,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t;return{a:()=>P(n,at(mo(e,s),"float32")),b:()=>P(n,at(zl(e,s),"float32"))}}};function EN(n,t,e,s,o,r,i){const a=D(n,"dy","maxPool3dGrad"),l=D(t,"input","maxPool3dGrad"),c=D(e,"output","maxPool3dGrad");let u=a,h=l,d=c,p=!1;l.rank===4&&(p=!0,u=z(a,[1,a.shape[0],a.shape[1],a.shape[2],a.shape[3]]),h=z(l,[1,l.shape[0],l.shape[1],l.shape[2],l.shape[3]]),d=z(c,[1,c.shape[0],c.shape[1],c.shape[2],c.shape[3]])),T(u.rank===5,()=>`Error in maxPool3dGrad: dy must be rank 5 but got rank ${u.rank}.`),T(h.rank===5,()=>`Error in maxPool3dGrad: input must be rank 5 but got rank ${h.rank}.`),T(d.rank===5,()=>`Error in maxPool3dGrad: output must be rank 5 but got rank ${d.rank}.`),tn("maxPool3dGrad",r,i);const f={dy:u,input:h,output:d},m={filterSize:s,strides:o,pad:r,dimRoundingMode:i},g=B.runKernel(zu,f,m);return p?z(g,[g.shape[1],g.shape[2],g.shape[3],g.shape[4]]):g}const RN=W({maxPool3dGrad_:EN});const AN={kernelName:Za,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(n,t,e)=>{const[s,o]=t,{filterSize:r,strides:i,pad:a,dimRoundingMode:l}=e;return{x:()=>RN(n,s,o,r,i,a,l)}}};function DN(n,t,e,s,o,r,i){const a=D(n,"dy","maxPoolGrad"),l=D(t,"input","maxPoolGrad"),c=D(e,"output","maxPoolGrad");T(l.rank===a.rank,()=>`Rank of input (${l.rank}) does not match rank of dy (${a.rank})`),T(a.rank===4,()=>`Error in maxPoolGrad: dy must be rank 4 but got rank ${a.rank}.`),T(l.rank===4,()=>`Error in maxPoolGrad: input must be rank 4 but got rank ${l.rank}.`),tn("maxPoolGrad",r,i);const u={dy:a,input:l,output:c},h={filterSize:s,strides:o,pad:r,dimRoundingMode:i};return B.runKernel(Bu,u,h)}const FN=W({maxPoolGrad_:DN});const _N={kernelName:Ya,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(n,t,e)=>{const[s,o]=t,{filterSize:r,strides:i,pad:a}=e;return{x:()=>FN(n,s,o,r,i,a)}}};const ON={kernelName:Qa,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{axis:o}=e,r=Tt(o,s.shape),a=ke(s.shape,r)[1],l=K(a);return{x:()=>{const u=s.shape.slice();r.forEach(p=>{u[p]=1});const h=z(n,u);return gt(P(h,Ps(s.shape,"float32")),l)}}}};const MN={kernelName:Ja,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(n,t,e)=>{const s=e,{axis:o}=s,[r,i]=t,a=Tt(o,r.shape),l=Ug(n,i,r,a);return{x:()=>l.x()}}};const LN={kernelName:si,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t;return{a:()=>P(n,at(Qo(e,s),"float32")),b:()=>P(n,at(bn(e,s),"float32"))}}};const PN={kernelName:tl,inputsToSave:["x"],gradFunc:(n,t,e)=>{const s=t[0],{paddings:o}=e,r=o.map(i=>i[0]);return{x:()=>Kt(n,r,s.shape)}}};const BN={kernelName:oi,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,o=$t(e.shape,s.shape);return{a:()=>{const a=ge(e.shape,o);return a.length>0?z(mt(n,a),e.shape):n},b:()=>{const a=P(n,ae(Bl(gt(e,s)))),l=ge(s.shape,o);return l.length>0?z(mt(a,l),s.shape):a}}}};const zN={kernelName:ri,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,o=$t(e.shape,s.shape);return{a:()=>{const a=P(n,at(s,"float32")),l=ge(e.shape,o);return l.length>0?z(mt(a,l),e.shape):a},b:()=>{const a=P(n,at(e,"float32")),l=ge(s.shape,o);return l.length>0?z(mt(a,l),s.shape):a}}}};const VN={kernelName:el,gradFunc:n=>({x:()=>ae(n)})};const WN={kernelName:ol,inputsToSave:["indices"],gradFunc:(n,t)=>{const e=t[0];return{indices:()=>Se(e.shape,"float32")}}};const UN={kernelName:sl,gradFunc:n=>({x:()=>_t(n)})};const GN={kernelName:rl,saveAllInputs:!0,gradFunc:(n,t,e)=>{const{axis:s}=e;return yo(n,s).map(r=>()=>r)}};const Hg={kernelName:il,inputsToSave:["x"],gradFunc:(n,t,e)=>{const s=t[0],{paddings:o}=e,r=o.map(i=>i[0]);return{x:()=>Kt(n,r,s.shape)}}};const HN={kernelName:ii,inputsToSave:["a","b"],outputsToSave:[!0],gradFunc:(n,t)=>{const[e,s,o]=t,r=e,i=s,a=$t(r.shape,i.shape);return{a:()=>{const u=at(i,"float32");let h=P(n,P(u,fo(r,yt(u,Vt(1)))));const d=ge(r.shape,a);return d.length>0&&(h=mt(h,d)),z(h,r.shape)},b:()=>{const u=bn(r,0),h=Xe(u,ts(r),_t(r));let d=P(n,P(o,h));const p=ge(i.shape,a);return p.length>0&&(d=mt(d,p)),z(d,i.shape)}}}};const qN={kernelName:al,inputsToSave:["x","alpha"],gradFunc:(n,t)=>{const[e,s]=t,o=bn(e,0);return{x:()=>Xe(o,n,P(n,s)),alpha:()=>{let r=Xe(o,_t(n),P(n,e));const i=ge(s.shape,n.shape);return i.length>0&&(r=mt(r,i)),z(r,s.shape)}}}};function XN(n,t,e){const s=n.shape.slice();s[e]=1;const o=z(t,s),r=Ih(n,e,!0,!1),i=Ih(n,e,!0,!0),a=P(r,i);return P(o,a)}function KN(n,t,e){const s=n.shape.length,o=s-e.length,r=ee(e,s);let i=n;r!=null&&(i=Ot(n,r));const a=i.shape.slice(),c=a.splice(s-e.length,e.length).reduce((d,p)=>d*p,1);a.push(c);const u=i.reshape(a);let h=XN(u,t,o);if(h=h.reshape(i.shape),r!=null){const d=Ms(r);h=Ot(h,d)}return h}const jN={kernelName:ll,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{axis:o}=e;let r=[];return o==null?r=s.shape.map((i,a)=>a):typeof o=="number"?r=[o]:r=o,{x:()=>KN(s,n,r)}}};const YN={kernelName:Wr,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,o=$t(e.shape,s.shape);return{a:()=>{const a=gt(n,at(s,"float32")),l=ge(e.shape,o);return l.length>0?z(mt(a,l),e.shape):a},b:()=>{let a=P(n,at(e,"float32"));const l=ge(s.shape,o);l.length>0&&(a=z(mt(a,l),s.shape));const c=Zt(s);return ae(gt(a,at(c,"float32")))}}}};const ZN={kernelName:ai,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>gt(n,ae(Zt(e)))}}};const QN={kernelName:ci,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t,s=P(Qo(e,6),Bi(e));return{x:()=>P(n,at(s,"float32"))}}};const JN={kernelName:li,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>P(n,at(Bi(e),"float32"))}}};const tT={kernelName:cl,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>z(n,e.shape)}}};const eT={kernelName:hl,inputsToSave:["images"],gradFunc:(n,t,e)=>{const[s]=t,o={dy:n,images:s};return{images:()=>B.runKernel(Xu,o,e)}}};const nT={kernelName:ul,inputsToSave:["images"],gradFunc:(n,t,e)=>{const[s]=t,o={dy:n,images:s};return{images:()=>B.runKernel(qu,o,e)}}};const sT={kernelName:dl,gradFunc:(n,t,e)=>{const{dims:s}=e,o=Tt(s,n.shape);return{x:()=>xo(n,o)}}};const oT={kernelName:ui,gradFunc:n=>({x:()=>_t(n)})};const rT={kernelName:hi,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>ae(gt(n,P(fo(e,1.5),2)))}}};const iT={kernelName:pl,inputsToSave:["condition"],gradFunc:(n,t)=>{const[e]=t;return{condition:()=>at(_t(e),"float32"),t:()=>P(n,at(e,n.dtype)),e:()=>P(n,at(Eh(e),n.dtype))}}};const aT={kernelName:di,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>{const s=bn(e,Vt(0)),o=Vt(Ql),r=Vt(Jl),i=P(n,r),a=P(P(n,o),Jn(at(e,"float32")));return Xe(s,i,a)}}}};const lT={kernelName:gi,outputsToSave:[!0],gradFunc:(n,t)=>{const[e]=t;return{x:()=>P(n,P(e,yt(Vt(1),e)))}}};const cT={kernelName:mi,gradFunc:n=>({x:()=>_t(n)})};const uT={kernelName:pi,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>P($h(at(e,"float32")),n)}}};const hT={kernelName:fi,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>P(fm(at(e,"float32")),n)}}};const dT={kernelName:fl,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{begin:o,size:r}=e,i=s.shape,[a,l]=ed(s,o,r),c=[];for(let u=0;u<n.rank;u++)c.push([a[u],i[u]-a[u]-l[u]]);return{x:()=>Dh(n,c)}}};const pT={kernelName:bl,outputsToSave:[!0],gradFunc:(n,t,e)=>{const[s]=t,{dim:o}=e,r=!0,i=P(n,s);return{logits:()=>yt(i,P(mt(i,[o],r),s))}}};const fT={kernelName:xi,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>P(n,Yo(e))}}};const qg={kernelName:gl,gradFunc:(n,t,e)=>{const{blockShape:s,paddings:o}=e;return{x:()=>wh(n,s,o)}}};const Xg={kernelName:xl,gradFunc:(n,t,e)=>{const{axis:s}=e;return{x:()=>en(n,s)}}};const mT={kernelName:bi,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>gt(n,P(Ve(at(e,"float32")),2))}}};const gT={kernelName:Ku,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>P(n,P(at(e,"float32"),2))}}};const xT={kernelName:yi,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,o=Vt(2);return{a:()=>P(n,P(o,yt(e,s))),b:()=>P(n,P(o,yt(s,e)))}}};const bT={kernelName:vi,gradFunc:n=>({x:()=>_t(n)})};const yT={kernelName:wi,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,o=$t(e.shape,s.shape);return{a:()=>{let a=n;const l=ge(e.shape,o);return l.length>0&&(a=mt(a,l)),z(a,e.shape)},b:()=>{let a=n;const l=ge(s.shape,o);return l.length>0&&(a=mt(a,l)),z(ae(a),s.shape)}}}};const wT={kernelName:ml,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,o=s.shape.slice(),{axis:r}=e;Tt(r,s.shape).forEach(c=>{o[c]=1});const a=z(n,o),l=P(a,Ps(s.shape,"float32"));return{x:()=>l}}};const CT={kernelName:Ci,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>gt(n,Zt($h(e)))}}};const $T={kernelName:$i,outputsToSave:[!0],gradFunc:(n,t)=>{const[e]=t;return{x:()=>P(yt(Vt(1),Zt(e)),n)}}};const IT={kernelName:Ii,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{reps:o}=e;return{x:()=>{let i=_t(s);if(s.rank===1)for(let a=0;a<o[0];++a)i=et(i,Kt(n,[a*s.shape[0]],[s.shape[0]]));else if(s.rank===2)for(let a=0;a<o[0];++a)for(let l=0;l<o[1];++l)i=et(i,Kt(n,[a*s.shape[0],l*s.shape[1]],[s.shape[0],s.shape[1]]));else if(s.rank===3)for(let a=0;a<o[0];++a)for(let l=0;l<o[1];++l)for(let c=0;c<o[2];++c)i=et(i,Kt(n,[a*s.shape[0],l*s.shape[1],c*s.shape[2]],[s.shape[0],s.shape[1],s.shape[2]]));else if(s.rank===4)for(let a=0;a<o[0];++a)for(let l=0;l<o[1];++l)for(let c=0;c<o[2];++c)for(let u=0;u<o[3];++u)i=et(i,Kt(n,[a*s.shape[0],l*s.shape[1],c*s.shape[2],u*s.shape[3]],[s.shape[0],s.shape[1],s.shape[2],s.shape[3]]));else throw new Error(`Gradient for tile operation is not implemented for rank-${s.rank} tensors yet.`);return i}}}};const vT={kernelName:Go,gradFunc:(n,t,e)=>{const s=e,{perm:o}=s,r=Ms(o);return{x:()=>Ot(n,r)}}};const kT={kernelName:yl,gradFunc:(n,t,e)=>{const s=e,{axis:o}=s;return{value:()=>xs(n,o)}}};const ST={kernelName:wl,inputsToSave:["segmentIds"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>NT(n,e)}}};function NT(n,t){const e=Ls(t,_t(t)),s=Sh(n,e);let o=mo(t,Vt(0,"int32"));const r=s.rank-o.rank;for(let a=0;a<r;++a)o=nn(o,a+1);o=gs(o,Ps(s.shape,"bool"));const i=_t(s);return Xe(o,s,i)}const TT={kernelName:Cl,gradFunc:n=>({x:()=>_t(n)})};const ET=[zg,S2,N2,T2,E2,R2,A2,D2,F2,_2,O2,M2,B2,W2,U2,G2,H2,q2,X2,K2,j2,Y2,Q2,Z2,eN,nN,sN,oN,rN,iN,YN,aN,lN,cN,uN,hN,pN,dN,fN,mN,gN,xN,bN,yN,wN,CN,$N,IN,vN,NN,Gg,Gg,TN,AN,_N,ON,MN,LN,PN,BN,zN,VN,WN,UN,GN,Hg,Hg,HN,qN,jN,ZN,QN,JN,tT,eT,nT,sT,oT,rT,iT,aT,lT,cT,uT,hT,dT,pT,fT,qg,qg,Xg,Xg,mT,xT,gT,bT,yT,wT,CT,$T,IT,vT,kT,ST,TT];for(const n of ET)Yw(n);X().prototype.abs=function(){return this.throwIfDisposed(),qe(this)};X().prototype.acos=function(){return this.throwIfDisposed(),e$(this)};X().prototype.acosh=function(){return this.throwIfDisposed(),s$(this)};X().prototype.add=function(n){return this.throwIfDisposed(),et(this,n)};X().prototype.all=function(n,t){return this.throwIfDisposed(),um(this,n,t)};X().prototype.any=function(n,t){return this.throwIfDisposed(),gh(this,n,t)};X().prototype.argMax=function(n){return this.throwIfDisposed(),Ti(this,n)};X().prototype.argMin=function(n){return this.throwIfDisposed(),l$(this,n)};X().prototype.asScalar=function(){return this.throwIfDisposed(),T(this.size===1,()=>"The array must have only 1 element."),z(this,[])};X().prototype.asType=function(n){return this.throwIfDisposed(),at(this,n)};X().prototype.as1D=function(){return this.throwIfDisposed(),z(this,[this.size])};X().prototype.as2D=function(n,t){return this.throwIfDisposed(),z(this,[n,t])};X().prototype.as3D=function(n,t,e){return this.throwIfDisposed(),z(this,[n,t,e])};X().prototype.as4D=function(n,t,e,s){return this.throwIfDisposed(),z(this,[n,t,e,s])};X().prototype.as5D=function(n,t,e,s,o){return this.throwIfDisposed(),z(this,[n,t,e,s,o])};X().prototype.asin=function(){return this.throwIfDisposed(),u$(this)};X().prototype.asinh=function(){return this.throwIfDisposed(),d$(this)};X().prototype.atan=function(){return this.throwIfDisposed(),f$(this)};X().prototype.atan2=function(n){return this.throwIfDisposed(),g$(this,n)};X().prototype.atanh=function(){return this.throwIfDisposed(),b$(this)},X().prototype.avgPool=function(n,t,e,s){return this.throwIfDisposed(),yh(this,n,t,e,s)};X().prototype.batchToSpaceND=function(n,t){return this.throwIfDisposed(),wh(this,n,t)};X().prototype.batchNorm=function(n,t,e,s,o){return this.throwIfDisposed(),_l(this,n,t,e,s,o)};X().prototype.broadcastTo=function(n){return this.throwIfDisposed(),Di(this,n)};X().prototype.cast=function(n){return this.throwIfDisposed(),at(this,n)};X().prototype.ceil=function(){return this.throwIfDisposed(),H$(this)};X().prototype.clipByValue=function(n,t){return this.throwIfDisposed(),xn(this,n,t)};X().prototype.concat=function(n,t){return this.throwIfDisposed(),n instanceof me&&(n=[n]),en([this,...n],t)};X().prototype.conv1d=function(n,t,e,s,o,r){return this.throwIfDisposed(),hm(this,n,t,e,s,o,r)};X().prototype.conv2dTranspose=function(n,t,e,s,o){return this.throwIfDisposed(),dm(this,n,t,e,s,o)};X().prototype.conv2d=function(n,t,e,s,o,r){return this.throwIfDisposed(),po(this,n,t,e,s,o,r)};X().prototype.cos=function(){return this.throwIfDisposed(),$h(this)};X().prototype.cosh=function(){return this.throwIfDisposed(),fm(this)};X().prototype.cumprod=function(n,t,e){return this.throwIfDisposed(),Ih(this,n,t,e)};X().prototype.cumsum=function(n,t,e){return this.throwIfDisposed(),mm(this,n,t,e)};X().prototype.depthToSpace=function(n,t){return this.throwIfDisposed(),gI(this,n,t)};X().prototype.depthwiseConv2d=function(n,t,e,s,o,r){return this.throwIfDisposed(),vh(this,n,t,e,s,o,r)};X().prototype.dilation2d=function(n,t,e,s,o){return this.throwIfDisposed(),yI(this,n,t,e,s,o)};X().prototype.divNoNan=function(n){return this.throwIfDisposed(),vI(this,n)};X().prototype.div=function(n){return this.throwIfDisposed(),gt(this,n)};X().prototype.dot=function(n){return this.throwIfDisposed(),SI(this,n)};X().prototype.elu=function(){return this.throwIfDisposed(),Ml(this)};X().prototype.equal=function(n){return this.throwIfDisposed(),Qn(this,n)};X().prototype.erf=function(){return this.throwIfDisposed(),xm(this)};X().prototype.euclideanNorm=function(n,t){return this.throwIfDisposed(),PI(this,n,t)};X().prototype.exp=function(){return this.throwIfDisposed(),Jn(this)};X().prototype.expandDims=function(n){return this.throwIfDisposed(),nn(this,n)};X().prototype.expm1=function(){return this.throwIfDisposed(),WI(this)};X().prototype.fft=function(){return this.throwIfDisposed(),Um(this)};X().prototype.flatten=function(){return this.throwIfDisposed(),z(this,[this.size])};X().prototype.floor=function(){return this.throwIfDisposed(),Bl(this)};X().prototype.floorDiv=function(n){return this.throwIfDisposed(),cm(this,n)};X().prototype.gather=function(n,t,e){return this.throwIfDisposed(),Sh(this,n,t,e)};X().prototype.greaterEqual=function(n){return this.throwIfDisposed(),mo(this,n)};X().prototype.greater=function(n){return this.throwIfDisposed(),bn(this,n)};X().prototype.ifft=function(){return this.throwIfDisposed(),zh(this)};X().prototype.irfft=function(){return this.throwIfDisposed(),Ok(this)};X().prototype.isFinite=function(){return this.throwIfDisposed(),ZI(this)};X().prototype.isInf=function(){return this.throwIfDisposed(),JI(this)};X().prototype.isNaN=function(){return this.throwIfDisposed(),ev(this)};X().prototype.leakyRelu=function(n){return this.throwIfDisposed(),Th(this,n)};X().prototype.lessEqual=function(n){return this.throwIfDisposed(),Qo(this,n)};X().prototype.less=function(n){return this.throwIfDisposed(),zl(this,n)};X().prototype.localResponseNormalization=function(n,t,e,s){return this.throwIfDisposed(),iv(this,n,t,e,s)};X().prototype.logSigmoid=function(){return this.throwIfDisposed(),pv(this)};X().prototype.logSoftmax=function(n){return this.throwIfDisposed(),$m(this,n)};X().prototype.logSumExp=function(n,t){return this.throwIfDisposed(),Im(this,n,t)};X().prototype.log=function(){return this.throwIfDisposed(),ts(this)};X().prototype.log1p=function(){return this.throwIfDisposed(),Cm(this)};X().prototype.logicalAnd=function(n){return this.throwIfDisposed(),gs(this,n)};X().prototype.logicalNot=function(){return this.throwIfDisposed(),Eh(this)};X().prototype.logicalOr=function(n){return this.throwIfDisposed(),vm(this,n)};X().prototype.logicalXor=function(n){return this.throwIfDisposed(),Cv(this,n)};X().prototype.matMul=function(n,t,e){return this.throwIfDisposed(),zt(this,n,t,e)},X().prototype.maxPool=function(n,t,e,s){return this.throwIfDisposed(),Rh(this,n,t,e,s)};X().prototype.max=function(n,t){return this.throwIfDisposed(),Pn(this,n,t)};X().prototype.maximum=function(n){return this.throwIfDisposed(),Ls(this,n)};X().prototype.mean=function(n,t){return this.throwIfDisposed(),de(this,n,t)};X().prototype.min=function(n,t){return this.throwIfDisposed(),Ll(this,n,t)};X().prototype.minimum=function(n){return this.throwIfDisposed(),Oi(this,n)};X().prototype.mirrorPad=function(n,t){return this.throwIfDisposed(),Ev(this,n,t)};X().prototype.mod=function(n){return this.throwIfDisposed(),Av(this,n)};X().prototype.mul=function(n){return this.throwIfDisposed(),P(this,n)};X().prototype.neg=function(){return this.throwIfDisposed(),ae(this)};X().prototype.norm=function(n,t,e){return this.throwIfDisposed(),Pl(this,n,t,e)};X().prototype.notEqual=function(n){return this.throwIfDisposed(),Vl(this,n)};X().prototype.oneHot=function(n,t=1,e=0){return this.throwIfDisposed(),km(this,n,t,e)};X().prototype.onesLike=function(){return this.throwIfDisposed(),vn(this)};X().prototype.pad=function(n,t){return this.throwIfDisposed(),Dh(this,n,t)},X().prototype.pool=function(n,t,e,s,o,r){return this.throwIfDisposed(),Vv(this,n,t,e,s,o,r)};X().prototype.pow=function(n){return this.throwIfDisposed(),fo(this,n)};X().prototype.prelu=function(n){return this.throwIfDisposed(),_h(this,n)};X().prototype.prod=function(n,t){return this.throwIfDisposed(),Gv(this,n,t)};X().prototype.reciprocal=function(){return this.throwIfDisposed(),mk(this)};X().prototype.relu=function(){return this.throwIfDisposed(),go(this)};X().prototype.relu6=function(){return this.throwIfDisposed(),Om(this)};X().prototype.reshapeAs=function(n){return this.throwIfDisposed(),z(this,n.shape)};X().prototype.reshape=function(n){return this.throwIfDisposed(),z(this,n)};X().prototype.resizeBilinear=function(n,t,e){return this.throwIfDisposed(),jm(this,n,t,e)};X().prototype.resizeNearestNeighbor=function(n,t,e){return this.throwIfDisposed(),Ym(this,n,t,e)};X().prototype.reverse=function(n){return this.throwIfDisposed(),xo(this,n)};X().prototype.rfft=function(){return this.throwIfDisposed(),Pk(this)};X().prototype.round=function(){return this.throwIfDisposed(),Mm(this)};X().prototype.rsqrt=function(){return this.throwIfDisposed(),Lm(this)};X().prototype.selu=function(){return this.throwIfDisposed(),Pm(this)};X().prototype.separableConv2d=function(n,t,e,s,o,r){return this.throwIfDisposed(),Bm(this,n,t,e,s,o,r)};X().prototype.sigmoid=function(){return this.throwIfDisposed(),Yo(this)};X().prototype.sign=function(){return this.throwIfDisposed(),vk(this)};X().prototype.sin=function(){return this.throwIfDisposed(),zm(this)};X().prototype.sinh=function(){return this.throwIfDisposed(),Vm(this)};X().prototype.slice=function(n,t){return this.throwIfDisposed(),Kt(this,n,t)};X().prototype.softmax=function(n){return this.throwIfDisposed(),Bh(this,n)};X().prototype.softplus=function(){return this.throwIfDisposed(),_i(this)};X().prototype.spaceToBatchND=function(n,t){return this.throwIfDisposed(),Fh(this,n,t)};X().prototype.split=function(n,t){return this.throwIfDisposed(),yn(this,n,t)};X().prototype.sqrt=function(){return this.throwIfDisposed(),Ve(this)};X().prototype.square=function(){return this.throwIfDisposed(),Zt(this)};X().prototype.squaredDifference=function(n){return this.throwIfDisposed(),zk(this,n)};X().prototype.squeeze=function(n){return this.throwIfDisposed(),Pi(this,n)};X().prototype.stack=function(n,t){this.throwIfDisposed();const e=n instanceof me?[this,n]:[this,...n];return xs(e,t)};X().prototype.step=function(n){return this.throwIfDisposed(),Bi(this,n)};X().prototype.stridedSlice=function(n,t,e,s,o,r,i,a){return this.throwIfDisposed(),Hk(this,n,t,e,s,o,r,i,a)};X().prototype.sub=function(n){return this.throwIfDisposed(),yt(this,n)};X().prototype.sum=function(n,t){return this.throwIfDisposed(),mt(this,n,t)};X().prototype.tan=function(){return this.throwIfDisposed(),Xk(this)};X().prototype.tanh=function(){return this.throwIfDisposed(),Fl(this)};X().prototype.tile=function(n){return this.throwIfDisposed(),Bn(this,n)};X().prototype.toBool=function(){return this.throwIfDisposed(),at(this,"bool")};X().prototype.toFloat=function(){return this.throwIfDisposed(),at(this,"float32")};X().prototype.toInt=function(){return this.throwIfDisposed(),at(this,"int32")};X().prototype.topk=function(n,t){return this.throwIfDisposed(),jk(this,n,t)};X().prototype.transpose=function(n){return this.throwIfDisposed(),Ot(this,n)};X().prototype.unique=function(n){return this.throwIfDisposed(),Qk(this,n)};X().prototype.unsortedSegmentSum=function(n,t){return this.throwIfDisposed(),Hm(this,n,t)};X().prototype.unstack=function(n){return this.throwIfDisposed(),yo(this,n)};X().prototype.where=function(n,t){return this.throwIfDisposed(),Xe(n,this,t)};X().prototype.zerosLike=function(){return this.throwIfDisposed(),_t(this)};class ns extends Error{constructor(t){super(t),Object.setPrototypeOf(this,ns.prototype)}}class Sn extends Error{constructor(t){super(t),Object.setPrototypeOf(this,Sn.prototype)}}class M extends Error{constructor(t){super(t),Object.setPrototypeOf(this,M.prototype)}}class vt extends Error{constructor(t){super(t),Object.setPrototypeOf(this,vt.prototype)}}class $d extends Error{constructor(t){super(t),Object.setPrototypeOf(this,$d.prototype)}}class Kg{constructor(t){this.maxEntries=t||100,this.cache=new Map}get(t){let e;return this.cache.has(t)&&(e=this.cache.get(t),this.cache.delete(t),this.cache.set(t,e)),e}put(t,e){if(this.cache.has(t))this.cache.delete(t);else if(this.cache.size>=this.maxEntries){const s=this.cache.keys().next().value;this.cache.delete(s)}this.cache.set(t,e)}getMaxEntries(){return this.maxEntries}setMaxEntries(t){if(t<0)throw new Error(`The maxEntries of LRU caches must be at least 0, but got ${t}.`);if(this.maxEntries>t)for(let e=0;e<this.maxEntries-t;e++){const s=this.cache.keys().next().value;this.cache.delete(s)}this.maxEntries=t}}function Co(n,t){if(Array.isArray(n)){let e=[];for(let s=0;s<t;s++)e=e.concat(n);return e}else{const e=new Array(t);return e.fill(n),e}}function ss(n,t){if(!n)throw new $d(t)}function jg(n,t){let e=0;for(const s of n)s===t&&e++;return e}function sn(n){return n.length===1?n[0]:n}function Wt(n){return Array.isArray(n)?n:[n]}function Cs(n){const e=n.replace(/(.)([A-Z][a-z0-9]+)/g,"$1_$2").replace(/([a-z])([A-Z])/g,"$1_$2").toLowerCase();return e[0]!=="_"?e:"private"+e}function $o(n){return n.length<=1||n.indexOf("_")===-1?n:n.replace(/[_]+(\w|$)/g,(t,e)=>e.toUpperCase())}let Nn={};function Id(n){if(n==null)return null;const t={};return t.className=n.getClassName(),t.config=n.getConfig(),t}function vd(n){if(!(n==null||typeof n!="object"))if(Array.isArray(n))n.forEach(t=>vd(t));else{const t=Object.keys(n);for(const e of t){const s=n[e];s!=null&&typeof s=="object"&&(!Array.isArray(s)&&s.type==="ndarray"&&typeof s.value=="number"?n[e]=s.value:vd(s))}}}function Ui(n,t={},e={},s="object",o=!1){if(typeof n=="string"){const r=n;let i;if(r in e)i=e[r];else if(r in Nn)i=Nn[r];else if(i=t[r],i==null)throw new M(`Unknown ${s}: ${n}. This may be due to one of the following reasons:
1. The ${s} is defined in Python, in which case it needs to be ported to TensorFlow.js or your JavaScript code.
2. The custom ${s} is defined in JavaScript, but is not registered properly with tf.serialization.registerClass().`);return i}else{const r=n;if(r.className==null||r.config==null)throw new M(`${s}: Improper config format: ${JSON.stringify(r)}.
'className' and 'config' must set.`);const i=r.className;let a,l;if(i in e?[a,l]=e[i]:i in Nn?[a,l]=Nn.className:i in t&&([a,l]=t[i]),a==null)throw new M(`Unknown ${s}: ${i}. This may be due to one of the following reasons:
1. The ${s} is defined in Python, in which case it needs to be ported to TensorFlow.js or your JavaScript code.
2. The custom ${s} is defined in JavaScript, but is not registered properly with tf.serialization.registerClass().`);if(l!=null){const c={};for(const p of Object.keys(Nn))c[p]=Nn[p];for(const p of Object.keys(e))c[p]=e[p];const u=r.config;u.customObjects=c;const h=Object.assign({},Nn);for(const p of Object.keys(e))Nn[p]=e[p];vd(r.config);const d=l(a,r.config,e,o);return Nn=Object.assign({},h),d}else{const c=Object.assign({},Nn);for(const h of Object.keys(e))Nn[h]=e[h];const u=new a(r.config);return Nn=Object.assign({},c),u}}}function RT(n,t){return n<t?-1:n>t?1:0}function tc(n,t){return-1*RT(n,t)}function zs(n){if(n==null)return n;const t=[];for(const e of n)t.indexOf(e)===-1&&t.push(e);return t}function AT(n){if(n==null)throw new M(`Invalid value in obj: ${JSON.stringify(n)}`);for(const t in n)if(n.hasOwnProperty(t))return!1;return!0}function Io(n,t,e){if(e!=null&&n.indexOf(e)<0)throw new M(`${e} is not a valid ${t}.  Valid values are ${n} or null/undefined.`)}function kd(n,t,e=0,s=1/0){return ss(e>=0),ss(s>=e),Array.isArray(n)&&n.length>=e&&n.length<=s&&n.every(o=>typeof o===t)}function Ne(n,t){Array.isArray(n)?(T(n.length>0,()=>`${t} is unexpectedly an empty array.`),n.forEach((e,s)=>Ne(e,`element ${s+1} of ${t}`))):T(Number.isInteger(n)&&n>0,()=>`Expected ${t} to be a positive integer, but got ${Yg(n)}.`)}function Yg(n){return n===null?"null":Array.isArray(n)?"["+n.map(t=>Yg(t)).join(",")+"]":typeof n=="string"?`"${n}"`:`${n}`}function DT(n,t,e){let s=e!=null?e():Qe(),o;return(...i)=>{const a=e!=null?e():Qe();return a-s<t||(s=a,o=n(...i)),o}}function Zg(n){return n==="relu"?"relu":n==="linear"?"linear":n==="elu"?"elu":null}let FT=0;function Qg(){return FT++}const ec={};function nc(n=""){return n in ec||(ec[n]=0),ec[n]+=1,n+ec[n].toString()}const _T=["channelsFirst","channelsLast"],OT=["nearest","bilinear"],MT=["valid","same","causal"],LT=["max","avg"],PT=["sum","mul","concat","ave"];const sr=new Map;function le(n){Io(_T,"DataFormat",n)}function BT(n){Io(OT,"InterpolationFormat",n)}function wn(n){Io(MT,"PaddingMode",n)}function Jg(n){Io(LT,"PoolMode",n)}const Gi=[],tx="/";function vo(n,t){Gi.push(n);try{const e=t();return Gi.pop(),e}catch(e){throw Gi.pop(),e}}function zT(){return Gi.length===0?"":Gi.join(tx)+tx}function ex(n){if(!sx(n))throw new Error("Not a valid tensor name: '"+n+"'");return zT()+n}function nx(n){if(!sx(n))throw new Error("Not a valid tensor name: '"+n+"'");sr.has(n)||sr.set(n,0);const t=sr.get(n);if(sr.set(n,sr.get(n)+1),t>0){const e=`${n}_${t}`;return sr.set(e,1),e}else return n}const VT=new RegExp(/^[A-Za-z0-9][-A-Za-z0-9\._\/]*$/);function sx(n){return!!n.match(VT)}function WT(n){return n===parseInt(n.toString(),10)}function Vs(n,t,e){t==null&&(t=0),e==null&&(e=n.length);let s=1;for(let o=t;o<e;++o)s*=n[o];return s}function or(n){if(n.length===0)return Number.NaN;let t=Number.POSITIVE_INFINITY;for(let e=0;e<n.length;e++){const s=n[e];s<t&&(t=s)}return t}function Ws(n){if(n.length===0)return Number.NaN;let t=Number.NEGATIVE_INFINITY;for(let e=0;e<n.length;e++){const s=n[e];s>t&&(t=s)}return t}function Vn(n,t){if(t<n)throw new M(`end (${t}) < begin (${n}) is forbidden.`);const e=[];for(let s=n;s<t;++s)e.push(s);return e}let Sd;function xe(){return Sd==null&&(Sd=vC().epsilon()),Sd}function Wn(){return"channelsLast"}function os(n,t){return at(n,t)}function Hi(n,t=-1){const e=n.shape.slice();return t<0&&(t=e.length+t+1),e.splice(t,0,1),z(n,e)}function UT(n,t){return U(()=>{if(n.shape.length!==2)throw new M(`repeat() expects a rank-2 tensor, but received a rank-${n.shape.length} tensor.`);const e=Hi(n,1);return Ed(e,[1,t,1])})}function GT(n){const t=[Vs(n.shape)];return z(n,t)}function HT(n){if(n.rank<=1)throw new M(`batchFlatten requires a minimum rank of 2. Got rank: ${n.rank}.`);const t=[n.shape[0],Vs(n.shape,1)];return z(n,t)}function ko(n,t,e){return U(()=>{switch(n.rank){case 1:return Lh(n,t,e);case 2:return Wm(n,[t,0],[e,n.shape[1]]);case 3:return Ph(n,[t,0,0],[e,n.shape[1],n.shape[2]]);case 4:return Yl(n,[t,0,0,0],[e,n.shape[1],n.shape[2],n.shape[3]]);case 5:return Kt(n,[t,0,0,0,0],[e,n.shape[1],n.shape[2],n.shape[3],n.shape[4]]);case 6:return Kt(n,[t,0,0,0,0,0],[e,n.shape[1],n.shape[2],n.shape[3],n.shape[4],n.shape[5]]);default:throw new M(`sliceAlongFirstAxis() received an unsupported tensor rank: ${n.rank}`)}})}function Nd(n,t,e){return U(()=>{switch(n.rank){case 1:return Lh(n,t,e);case 2:return Wm(n,[0,t],[n.shape[0],e]);case 3:return Ph(n,[0,0,t],[n.shape[0],n.shape[1],e]);case 4:return Yl(n,[0,0,0,t],[n.shape[0],n.shape[1],n.shape[2],e]);default:throw new M(`sliceAlongLastAxis() received an unsupported tensor rank: ${n.rank}`)}})}function sc(n,t,e,s){return U(()=>{switch(n.rank){case 1:return Lh(n,t,e);case 2:switch(s){case 1:return ko(n,t,e);case 2:return Nd(n,t,e);default:throw new M(`The axis is not within the rank of the tensor ${s}`)}case 3:switch(s){case 1:return ko(n,t,e);case 2:return Ph(n,[0,t,0],[n.shape[0],e,n.shape[2]]);case 3:return Nd(n,t,e);default:throw new M(`The axis is not within the rank of the tensor ${s}`)}case 4:switch(s){case 1:return ko(n,t,e);case 2:return Yl(n,[0,t,0,0],[n.shape[0],e,n.shape[2],n.shape[3]]);case 3:return Yl(n,[0,0,t,0],[n.shape[0],n.shape[1],e,n.shape[3]]);case 4:return Nd(n,t,e);default:throw new M(`The axis is not within the rank of the tensor ${s}`)}default:throw new M(`sliceAlongLastAxis() received an unsupported tensor rank: ${n.rank}`)}})}function Td(n,t=-1){let e;return t<0&&(e=n[0].rank,e!==0?t=e:t=0),t===n[0].rank&&(t=-1),en(n,t)}function ox(n,t){switch(n.rank){case 1:return K$([n,t]);case 2:return Y$([n,t],0);case 3:return Q$([n,t],0);case 4:return tI([n,t],0);default:throw new M(`concatAlongFirstAxis() received an unsupported tensor rank: ${n.rank}`)}}function Ed(n,t){if(Array.isArray(t)||(t=[t]),n.rank!==t.length)throw new M(`The length of input n (${t.length}) does not match the number of dimensions in input x (${n.rank})`);return Bn(n,t)}function oc(n,t=0,e=1,s,o){return hk(n,t,e,s,o)}function rs(n,t,e,s){if(n.rank<2||t.rank<2)throw new vt(`dot requires both inputs to be rank >= 2 but got x shape = ${n.shape} and y shape = ${t.shape}`);if(t.rank>=3){const o=n.shape.slice(-1)[0],r=t.shape.slice(-2)[0];if(o!==r)throw new vt(`If rank y >= 3, then the second last dim of y must equal the last dim of x but got x shape = ${n.shape} and  y shape = ${t.shape}`)}if(n.rank===2&&t.rank===2)return Xm({a:n,b:t,transposeA:!1,transposeB:!1,bias:s?Rd(n.rank,s,Wn()):null,activation:e});{const o=n.shape.slice(),r=o.pop();n=z(n,[-1,r]);const i=t.shape.slice(),a=i.pop(),l=i.pop(),c=[...i,a],u=Array.from({length:t.rank},(f,m)=>m===0?t.rank-2:m<=t.rank-2?m-1:m);t=z(Ot(t,u),[l,-1]);const h=[...o,...c];return z(Xm({a:n,b:t,transposeA:!1,transposeB:!1,bias:s?Rd(n.rank,s,Wn()):null,activation:e}),h)}}function rx(n,t,e){return U(()=>(Array.isArray(t)?t=hn(t,"int32"):t=at(t,"int32"),Sh(n,t,e)))}function qi(n){return P(n,n)}function Rd(n,t,e){const s=t.shape;if(t.rank!==1&&t.rank!==n)throw new M(`Unexpected bias dimensions: ${t.rank}; expected it to be 1 or ${n}`);if(n===5){if(e==="channelsFirst")return s.length===1?z(t,[1,s[0],1,1,1]):z(t,[1,s[3],s[0],s[1],s[2]]);if(e==="channelsLast")return s.length===1?z(t,[1,1,1,1,s[0]]):z(t,[1].concat(s))}else if(n===4){if(e==="channelsFirst")return s.length===1?z(t,[1,s[0],1,1]):z(t,[1,s[2],s[0],s[1]]);if(e==="channelsLast")return s.length===1?z(t,[1,1,1,s[0]]):z(t,[1].concat(s))}else if(n===3){if(e==="channelsFirst")return s.length===1?z(t,[1,s[0],1]):z(t,[1,s[1],s[0]]);if(e==="channelsLast")return s.length===1?z(t,[1,1,s[0]]):z(t,[1].concat(s))}else if(n<3)return t;throw new M(`Unsupported input rank by biasAdd: ${t.rank}`)}function Un(n,t,e){return U(()=>(e==null&&(e=Wn()),le(e),et(n,Rd(n.rank,t,e))))}function qT(n,t=1){if(t!==1)throw new vt(`Support for alpha values other than 1 (${t}) is not implemented yet.`);return Ml(n)}function XT(n){return U(()=>gt(n,et(qe(n),1)))}function ix(n,t,e,s){return U(()=>rS(n,t,e,s))}function KT(n){return U(()=>{const t=et(.5,P(.2,n));return xn(t,0,1)})}function Xi(n,t,e=!1){return e?n():t()}const jT=["fanIn","fanOut","fanAvg"],YT=["normal","uniform","truncatedNormal"];function ZT(n){Io(jT,"FanMode",n)}function QT(n){Io(YT,"Distribution",n)}class Tn extends er{fromConfigUsesCustomObjects(){return!1}getConfig(){return{}}}class ax extends Tn{apply(t,e){return Se(t,e)}}ax.className="Zeros",Q(ax);class Ad extends Tn{apply(t,e){return Ps(t,e)}}Ad.className="Ones",Q(Ad);class lx extends Tn{constructor(t){if(super(),typeof t!="object")throw new M(`Expected argument of type ConstantConfig but got ${t}`);if(t.value===void 0)throw new M(`config must have value set but got ${t}`);this.value=t.value}apply(t,e){return U(()=>P(Vt(this.value),Ps(t,e)))}getConfig(){return{value:this.value}}}lx.className="Constant",Q(lx);class cx extends Tn{constructor(t){super(),this.DEFAULT_MINVAL=-.05,this.DEFAULT_MAXVAL=.05,this.minval=t.minval||this.DEFAULT_MINVAL,this.maxval=t.maxval||this.DEFAULT_MAXVAL,this.seed=t.seed}apply(t,e){return Mi(t,this.minval,this.maxval,e,this.seed)}getConfig(){return{minval:this.minval,maxval:this.maxval,seed:this.seed}}}cx.className="RandomUniform",Q(cx);class ux extends Tn{constructor(t){super(),this.DEFAULT_MEAN=0,this.DEFAULT_STDDEV=.05,this.mean=t.mean||this.DEFAULT_MEAN,this.stddev=t.stddev||this.DEFAULT_STDDEV,this.seed=t.seed}apply(t,e){if(e=e||"float32",e!=="float32"&&e!=="int32")throw new vt(`randomNormal does not support dType ${e}.`);return oc(t,this.mean,this.stddev,e,this.seed)}getConfig(){return{mean:this.mean,stddev:this.stddev,seed:this.seed}}}ux.className="RandomNormal",Q(ux);class hx extends Tn{constructor(t){super(),this.DEFAULT_MEAN=0,this.DEFAULT_STDDEV=.05,this.mean=t.mean||this.DEFAULT_MEAN,this.stddev=t.stddev||this.DEFAULT_STDDEV,this.seed=t.seed}apply(t,e){if(e=e||"float32",e!=="float32"&&e!=="int32")throw new vt(`truncatedNormal does not support dType ${e}.`);return Gm(t,this.mean,this.stddev,e,this.seed)}getConfig(){return{mean:this.mean,stddev:this.stddev,seed:this.seed}}}hx.className="TruncatedNormal",Q(hx);class dx extends Tn{constructor(t){super(),this.gain=t.gain!=null?t.gain:1}apply(t,e){return U(()=>{if(t.length!==2||t[0]!==t[1])throw new M("Identity matrix initializer can only be used for 2D square matrices.");return P(this.gain,wm(t[0]))})}getConfig(){return{gain:this.gain}}}dx.className="Identity",Q(dx);function JT(n,t="channelsLast"){let e,s;if(le(t),n.length===2)e=n[0],s=n[1];else if([3,4,5].indexOf(n.length)!==-1){if(t==="channelsFirst"){const o=Vs(n,2);e=n[1]*o,s=n[0]*o}else if(t==="channelsLast"){const o=Vs(n,0,n.length-2);e=n[n.length-2]*o,s=n[n.length-1]*o}}else{const o=Vs(n);e=Math.sqrt(o),s=Math.sqrt(o)}return[e,s]}class dn extends Tn{constructor(t){if(super(),t.scale<0)throw new M(`scale must be a positive float. Got: ${t.scale}`);this.scale=t.scale==null?1:t.scale,this.mode=t.mode==null?"fanIn":t.mode,ZT(this.mode),this.distribution=t.distribution==null?"normal":t.distribution,QT(this.distribution),this.seed=t.seed}apply(t,e){const s=JT(t),o=s[0],r=s[1];let i=this.scale;if(this.mode==="fanIn"?i/=Math.max(1,o):this.mode==="fanOut"?i/=Math.max(1,r):i/=Math.max(1,(o+r)/2),this.distribution==="normal"){const a=Math.sqrt(i);if(e=e||"float32",e!=="float32"&&e!=="int32")throw new vt(`${this.getClassName()} does not support dType ${e}.`);return Gm(t,0,a,e,this.seed)}else{const a=Math.sqrt(3*i);return Mi(t,-a,a,e,this.seed)}}getConfig(){return{scale:this.scale,mode:this.mode,distribution:this.distribution,seed:this.seed}}}dn.className="VarianceScaling",Q(dn);class Dd extends dn{constructor(t){super({scale:1,mode:"fanAvg",distribution:"uniform",seed:t==null?null:t.seed})}getClassName(){return dn.className}}Dd.className="GlorotUniform",Q(Dd);class Fd extends dn{constructor(t){super({scale:1,mode:"fanAvg",distribution:"normal",seed:t==null?null:t.seed})}getClassName(){return dn.className}}Fd.className="GlorotNormal",Q(Fd);class _d extends dn{constructor(t){super({scale:2,mode:"fanIn",distribution:"normal",seed:t==null?null:t.seed})}getClassName(){return dn.className}}_d.className="HeNormal",Q(_d);class Od extends dn{constructor(t){super({scale:2,mode:"fanIn",distribution:"uniform",seed:t==null?null:t.seed})}getClassName(){return dn.className}}Od.className="HeUniform",Q(Od);class Md extends dn{constructor(t){super({scale:1,mode:"fanIn",distribution:"normal",seed:t==null?null:t.seed})}getClassName(){return dn.className}}Md.className="LeCunNormal",Q(Md);class Ld extends dn{constructor(t){super({scale:1,mode:"fanIn",distribution:"uniform",seed:t==null?null:t.seed})}getClassName(){return dn.className}}Ld.className="LeCunUniform",Q(Ld);class px extends Tn{constructor(t){super(),this.DEFAULT_GAIN=1,this.ELEMENTS_WARN_SLOW=2e3,this.gain=t.gain==null?this.DEFAULT_GAIN:t.gain,this.seed=t.seed}apply(t,e){return U(()=>{if(t.length<2)throw new vt("Shape must be at least 2D.");if(e!=="int32"&&e!=="float32"&&e!==void 0)throw new TypeError(`Unsupported data type ${e}.`);e=e;const s=K(t.slice(0,-1)),o=t[t.length-1],r=s*o;r>this.ELEMENTS_WARN_SLOW&&console.warn(`Orthogonal initializer is being called on a matrix with more than ${this.ELEMENTS_WARN_SLOW} (${r}) elements: Slowness may result.`);const i=[Math.max(o,s),Math.min(o,s)],a=oc(i,0,1,e,this.seed),l=e2.qr(a,!1);let c=l[0];const h=l[1].flatten().stridedSlice([0],[Math.min(o,s)*Math.min(o,s)],[Math.min(o,s)+1]);return c=P(c,h.sign()),s<o&&(c=c.transpose()),P(Vt(this.gain),c.reshape(t))})}getConfig(){return{gain:this.gain,seed:this.seed}}}px.className="Orthogonal",Q(px);const fx={constant:"Constant",glorotNormal:"GlorotNormal",glorotUniform:"GlorotUniform",heNormal:"HeNormal",heUniform:"HeUniform",identity:"Identity",leCunNormal:"LeCunNormal",leCunUniform:"LeCunUniform",ones:"Ones",orthogonal:"Orthogonal",randomNormal:"RandomNormal",randomUniform:"RandomUniform",truncatedNormal:"TruncatedNormal",varianceScaling:"VarianceScaling",zeros:"Zeros"};function mx(n,t={}){return Ui(n,kn.getMap().classNameMap,t,"initializer")}function ne(n){return Id(n)}function Qt(n){if(typeof n=="string"){const t=n in fx?fx[n]:n;if(t==="GlorotNormal")return new Fd;if(t==="GlorotUniform")return new Dd;if(t==="HeNormal")return new _d;if(t==="HeUniform")return new Od;if(t==="LeCunNormal")return new Md;if(t==="LeCunUniform")return new Ld;{const e={};return e.className=t,e.config={},mx(e)}}else return n instanceof Tn?n:mx(n)}function Pd(n){return Array.isArray(n)&&Array.isArray(n[0])}function rc(n){return n.length===0?[]:Array.isArray(n[0])?n:[n]}function wt(n){let t;if(Array.isArray(n)){if(n.length!==1)throw new M(`Expected Tensor length to be 1; got ${n.length}`);t=n[0]}else t=n;return t}function Lt(n){if(Array.isArray(n)&&Array.isArray(n[0])){if(n.length===1)return n=n,n[0];throw new M(`Expected exactly 1 Shape; got ${n.length}`)}else return n}function ic(n){let t=0;for(const e of n)e.shape.length===0?t+=1:t+=e.shape.reduce((s,o)=>s*o);return t}const gx="Variable";class tE{constructor(t,e="float32",s=gx,o=!0,r=null){this.dtype=e==null?"float32":e,this.shape=t.shape,this.id=Qg(),s=s==null?gx:s,this.originalName=ex(s),this.name=nx(this.originalName),this.trainable_=o,this.constraint=r,this.val=eS(t,this.trainable_,this.name,this.dtype)}read(){return this.assertNotDisposed(),this.val}write(t){return this.assertNotDisposed(),eE(this.val,t),this.val.id!==t.id&&(this.val.assign(t),this.constraint!=null&&this.val.assign(this.constraint.apply(this.val))),this}dispose(){this.assertNotDisposed(),this.val.dispose()}assertNotDisposed(){if(this.val.isDisposed)throw new Error(`LayersVariable ${this.name} is already disposed.`)}get trainable(){return this.trainable_}set trainable(t){this.trainable_=t,this.val.trainable=t}}function eE(n,t){if(n.shape.toString()!==t.shape.toString())throw new Error("Shape mismatch: "+JSON.stringify(n.shape)+" vs. "+JSON.stringify(t.shape))}function Bd(n){return n.map(t=>t.read())}function zd(n){n.forEach(t=>{t[0].write(t[1])})}class be{constructor(t){this.dtype=t.dtype,this.shape=t.shape,t.shape!=null?this.ndim=t.shape.length:this.ndim=t.ndim,this.maxNDim=t.maxNDim,this.minNDim=t.minNDim,this.axes=t.axes||{}}}class is{constructor(t,e,s,o,r,i,a){this.dtype=t,this.shape=e,this.sourceLayer=s,this.inputs=o,this.callArgs=r,this.outputTensorIndex=a,this.id=Qg(),i!=null&&(this.originalName=ex(i),this.name=nx(this.originalName)),this.rank=e.length}}let nE=0;class ac{constructor(t,e){this.callArgs=e,this.id=nE++,this.outboundLayer=t.outboundLayer,this.inboundLayers=t.inboundLayers,this.nodeIndices=t.nodeIndices,this.tensorIndices=t.tensorIndices,this.inputTensors=t.inputTensors,this.outputTensors=t.outputTensors,this.inputMasks=t.inputMasks,this.outputMasks=t.outputMasks,this.inputShapes=t.inputShapes,this.outputShapes=t.outputShapes;for(const s of t.inboundLayers)s!=null&&s.outboundNodes.push(this);t.outboundLayer.inboundNodes.push(this)}getConfig(){const t=[];for(const e of this.inboundLayers)e!=null?t.push(e.name):t.push(null);return{outboundLayer:this.outboundLayer?this.outboundLayer.name:null,inboundLayers:t,nodeIndices:this.nodeIndices,tensorIndices:this.tensorIndices}}}let sE=0;class Rt extends er{constructor(t={}){super(),this._callHook=null,this._addedWeightNames=[],this._stateful=!1,this.id=sE++,this.activityRegularizer=null,this.inputSpec=null,this.supportsMasking=!1,this._trainableWeights=[],this._nonTrainableWeights=[],this._losses=[],this._updates=[],this._built=!1,this.inboundNodes=[],this.outboundNodes=[];let e=t.name;if(!e){const s=this.getClassName();e=Cs(s)+"_"+nc(s)}if(this.name=e,this.trainable_=t.trainable==null?!0:t.trainable,t.inputShape!=null||t.batchInputShape!=null){let s;if(t.batchInputShape!=null)s=t.batchInputShape;else if(t.inputShape!=null){let r=null;t.batchSize!=null&&(r=t.batchSize),s=[r].concat(t.inputShape)}this.batchInputShape=s;let o=t.dtype;o==null&&(o=t.inputDType),o==null&&(o="float32"),this.dtype=o}t.weights!=null?this.initialWeights=t.weights:this.initialWeights=null,this._refCount=null,this.fastWeightInitDuringBuild=!1}static nodeKey(t,e){return t.name+"_ib-"+e.toString()}getNodeAtIndex(t,e){if(this.inboundNodes.length===0)throw new Sn(`The layer has never been called and thus has no defined ${e}.`);if(this.inboundNodes.length<=t)throw new M(`Asked to get ${e} at node ${t}, but the layer has only ${this.inboundNodes.length} inbound nodes.`);return this.inboundNodes[t]}getInputAt(t){return sn(this.getNodeAtIndex(t,"input").inputTensors)}getOutputAt(t){return sn(this.getNodeAtIndex(t,"output").outputTensors)}get input(){if(this.inboundNodes.length>1)throw new ns(`Layer ${this.name} has multiple inbound nodes, hence the notion of "layer input" is ill-defined. Use \`getInputAt(nodeIndex)\` instead.`);if(this.inboundNodes.length===0)throw new ns(`Layer ${this.name} is not connected, no input to return.`);return sn(this.getNodeAtIndex(0,"input").inputTensors)}get output(){if(this.inboundNodes.length===0)throw new ns(`Layer ${this.name} has no inbound nodes.`);if(this.inboundNodes.length>1)throw new ns(`Layer ${this.name} has multiple inbound nodes, hence the notion of "layer output" is ill-defined. Use \`getOutputAt(nodeIndex)\` instead.`);return sn(this.getNodeAtIndex(0,"output").outputTensors)}get losses(){return this._losses}calculateLosses(){return this.losses.map(t=>t())}get updates(){return this._updates}get built(){return this._built}set built(t){this._built=t}get trainable(){return this.trainable_}set trainable(t){this._trainableWeights.forEach(e=>e.trainable=t),this.trainable_=t}get trainableWeights(){return this.trainable_?this._trainableWeights.filter(t=>t.trainable):[]}set trainableWeights(t){this._trainableWeights=t}get nonTrainableWeights(){return this.trainable?this._trainableWeights.filter(t=>!t.trainable).concat(this._nonTrainableWeights):this._trainableWeights.concat(this._nonTrainableWeights)}set nonTrainableWeights(t){this._nonTrainableWeights=t}get weights(){return this.trainableWeights.concat(this.nonTrainableWeights)}get stateful(){return this._stateful}resetStates(){if(!this.stateful)throw new Error("Cannot call the resetStates() method of a non-stateful Layer object.")}assertInputCompatibility(t){const e=Wt(t);if(this.inputSpec==null||this.inputSpec.length===0)return;const s=Wt(this.inputSpec);if(e.length!==s.length)throw new M(`Layer ${this.name} expects ${s.length} inputs, but it received ${e.length} input tensors. Input received: ${t}`);for(let o=0;o<e.length;o++){const r=e[o],i=s[o];if(i==null)continue;const a=r.rank;if(i.ndim!=null&&a!==i.ndim)throw new M(`Input ${o} is incompatible with layer ${this.name}: expected ndim=${i.ndim}, found ndim=${a}`);if(i.maxNDim!=null&&a>i.maxNDim)throw new M(`Input ${o} is incompatible with layer ${this.name}: expected max_ndim=${i.maxNDim}, found ndim=${a}`);if(i.minNDim!=null&&a<i.minNDim)throw new M(`Input ${o} is incompatible with layer ${this.name}: expected min_ndim=${i.minNDim}, found ndim=${a}.`);if(i.dtype!=null&&r.dtype!==i.dtype)throw new M(`Input ${o} is incompatible with layer ${this.name} : expected dtype=${i.dtype}, found dtype=${r.dtype}.`);if(i.axes){const l=r.shape;for(const c in i.axes){const u=Number(c),h=i.axes[c],d=u>=0?l[u]:l[l.length+u];if(h!=null&&[h,null].indexOf(d)===-1)throw new M(`Input ${o} is incompatible with layer ${this.name}: expected axis ${u} of input shape to have value ${h} but got shape ${l}.`)}}if(i.shape!=null)for(let l=0;l<i.shape.length;++l){const c=i.shape[l],u=r.shape[l];if(c!=null&&u!=null&&c!==u)throw new M(`Input ${o} is incompatible with layer ${this.name}: expected shape=${i.shape}, found shape=${r.shape}.`)}}}call(t,e){return t}invokeCallHook(t,e){this._callHook!=null&&this._callHook(t,e)}setCallHook(t){this._callHook=t}clearCallHook(){this._callHook=null}apply(t,e){e=e||{},this.assertNotDisposed();const s=Wt(t),o=iE(t),r=aE(t);if(o===r)throw new M("Arguments to apply() must be all SymbolicTensors or all Tensors");return vo(this.name,()=>{if(!this.built){this.assertInputCompatibility(t);const i=[];for(const a of Wt(t))i.push(a.shape);this.build(sn(i)),this.built=!0,this.initialWeights&&this.setWeights(this.initialWeights),this._refCount===null&&r&&(this._refCount=1)}if(this.assertInputCompatibility(t),r){let i=this.call(t,e);this.supportsMasking&&this.setMaskMetadata(t,i);const a=Wt(i),l=[];for(let c of a)s.indexOf(c)!==-1&&(c=c.clone()),l.push(c);if(i=sn(l),this.activityRegularizer!=null)throw new vt("Layer invocation in the presence of activity regularizer(s) is not supported yet.");return i}else{const i=oE(t),a=this.computeOutputShape(i);let l;const c=rE(t);if(this.warnOnIncompatibleInputShape(Array.isArray(t)?i[0]:i),a!=null&&a.length>0&&Array.isArray(a[0])?l=a.map((u,h)=>new is(c,u,this,Wt(t),e,this.name,h)):l=new is(c,a,this,Wt(t),e,this.name),this.addInboundNode(t,l,null,null,i,a,e),this._refCount++,this.activityRegularizer!=null)throw new vt("Layer invocation in the presence of activity regularizer(s) is not supported yet.");return l}})}warnOnIncompatibleInputShape(t){if(this.batchInputShape!=null)if(t.length!==this.batchInputShape.length)console.warn(`The rank of the input tensor provided (shape: ${JSON.stringify(t)}) does not match that of the batchInputShape (${JSON.stringify(this.batchInputShape)}) of the layer ${this.name}`);else{let e=!1;this.batchInputShape.forEach((s,o)=>{s!=null&&t[o]!=null&&t[o]!==s&&(e=!0)}),e&&console.warn(`The shape of the input tensor (${JSON.stringify(t)}) does not match the expectation of layer ${this.name}: ${JSON.stringify(this.batchInputShape)}`)}}get outputShape(){if(this.inboundNodes==null||this.inboundNodes.length===0)throw new ns(`The layer ${this.name} has never been called and thus has no defined output shape.`);const t=[];for(const e of this.inboundNodes){const s=JSON.stringify(e.outputShapes);t.indexOf(s)===-1&&t.push(s)}if(t.length===1){const e=this.inboundNodes[0].outputShapes;return Array.isArray(e)&&Array.isArray(e[0])&&e.length===1?e[0]:e}else throw new ns(`The layer ${this.name} has multiple inbound nodes with different output shapes. Hence the notion of "output shape" is ill-defined for the layer.`)}countParams(){if(!this.built)throw new Sn(`You tried to call countParams() on ${this.name}, but the layer is not built yet. Build it first by calling build(batchInputShape).`);return ic(this.weights)}build(t){this.built=!0}getWeights(t=!1){return Bd(t?this.trainableWeights:this.weights)}setWeights(t){U(()=>{const e=this.weights;if(e.length!==t.length)throw new M(`You called setWeights(weights) on layer "${this.name}" with a weight list of length ${t.length}, but the layer was expecting ${e.length} weights. Provided weights: ${t}...`);if(e.length===0)return;const s=[],o=Bd(e);for(let r=0;r<o.length;++r){const i=o[r],a=e[r],l=t[r];if(!Bt(i.shape,l.shape))throw new M(`Layer weight shape ${i.shape} not compatible with provided weight shape ${l.shape}`);s.push([a,l])}zd(s)})}addWeight(t,e,s,o,r,i,a,l){if(this._addedWeightNames.indexOf(t)!==-1)throw new M(`Duplicate weight name ${t} for layer ${this.name}`);this._addedWeightNames.push(t),s==null&&(s="float32"),this.fastWeightInitDuringBuild&&(o=l!=null?l():Qt("zeros"));const c=o.apply(e,s),u=new tE(c,s,t,i,a);return c.dispose(),r!=null&&this.addLoss(()=>r.apply(u.read())),i==null&&(i=!0),i?this._trainableWeights.push(u):this._nonTrainableWeights.push(u),u}setFastWeightInitDuringBuild(t){this.fastWeightInitDuringBuild=t}addLoss(t){t==null||Array.isArray(t)&&t.length===0||(t=Wt(t),this._losses!==void 0&&this._losses!==null&&this.losses.push(...t))}computeOutputShape(t){return t}computeMask(t,e){if(!this.supportsMasking){if(e!=null)if(Array.isArray(e))e.forEach(s=>{if(s!=null)throw new TypeError(`Layer ${this.name} does not support masking, but was passed an inputMask.`)});else throw new TypeError(`Layer ${this.name} does not support masking, but was passed an inputMask.`);return null}return e}setMaskMetadata(t,e,s){if(!this.supportsMasking)return;const o=this.computeMask(t,s),r=Wt(e),i=Wt(o);if(r.length!==i.length)throw new Error(`${this.name} outputs ${r.length} tensors but ${r.length} masks for those tensors`);for(let a=0;a<r.length;a++)r[a].kerasMask=i[a]}addInboundNode(t,e,s,o,r,i,a=null){const l=Wt(t);e=Wt(e),s=Wt(s),o=Wt(o),r=rc(r),i=rc(i);const c=[],u=[],h=[];for(const d of l)c.push(d.sourceLayer),u.push(d.nodeIndex),h.push(d.tensorIndex);new ac({outboundLayer:this,inboundLayers:c,nodeIndices:u,tensorIndices:h,inputTensors:l,outputTensors:e,inputMasks:s,outputMasks:o,inputShapes:r,outputShapes:i},a);for(let d=0;d<e.length;d++)e[d].sourceLayer=this,e[d].nodeIndex=this.inboundNodes.length-1,e[d].tensorIndex=d}getConfig(){const t={name:this.name,trainable:this.trainable};return this.batchInputShape!=null&&(t.batchInputShape=this.batchInputShape),this.dtype!=null&&(t.dtype=this.dtype),t}disposeWeights(){return this.weights.forEach(t=>t.dispose()),this.weights.length}assertNotDisposed(){if(this._refCount===0)throw new Error(`Layer '${this.name}' is already disposed.`)}dispose(){if(!this.built)throw new Error(`Cannot dispose Layer ${this.name} because it has not been built yet.`);if(this._refCount===null)throw new Error(`Cannot dispose Layer ${this.name} because it has not been used yet.`);this.assertNotDisposed();let t=0;return--this._refCount===0&&(t=this.disposeWeights()),{refCountAfterDispose:this._refCount,numDisposedVariables:t}}}function oE(n){n=Wt(n);const t=[];for(const e of n)t.push(e.shape);return sn(t)}function rE(n){return"float32"}function xx(n,t,e){if((t==null||e!=null&&e>0)&&(t=n.sourceLayer,e=n.nodeIndex),t.inboundNodes.length===0)return[n];{const s=t.inboundNodes[e];if(s.inboundLayers.length===0)return s.inputTensors;{const o=[];for(let r=0;r<s.inboundLayers.length;r++){const i=s.inputTensors[r],a=s.inboundLayers[r],l=s.nodeIndices[r],c=xx(i,a,l);for(const u of c)o.indexOf(u)===-1&&o.push(u)}return o}}}function iE(n){let t=!0;for(const e of Wt(n))if(!(e instanceof is)){t=!1;break}return t}function aE(n){let t=!0;for(const e of Wt(n))if(e instanceof is){t=!1;break}return t}class Ki extends Rt{constructor(t){if(super({dtype:t.dtype,name:t.name!=null?t.name:nc("input").toString()}),t.batchSize==null&&(t.batchSize=null),t.sparse==null&&(t.sparse=!1),this.trainable=!1,this.built=!0,this.sparse=t.sparse,t.inputShape!=null&&t.batchInputShape!=null)throw new M("Only provide the inputShape OR batchInputShape argument to inputLayer, not both at the same time.");let e=t.batchInputShape;if(e==null){if(t.inputShape==null)throw new M("An InputLayer should be passed either a `batchInputShape` or an `inputShape`.");e=[t.batchSize].concat(t.inputShape)}else if(t.batchSize!=null)throw new M("Cannot specify batchSize if batchInputShape is specified when creating an InputLayer.");const s=t.dtype||"float32";this.batchInputShape=e,this.dtype=s,this.inputSpec=[{shape:e}];const o=new is(this.dtype,this.batchInputShape,this,[],{},this.name);o.nodeIndex=0,o.tensorIndex=0,new ac({outboundLayer:this,inboundLayers:[],nodeIndices:[],tensorIndices:[],inputTensors:[o],outputTensors:[o],inputMasks:[null],outputMasks:[null],inputShapes:[e],outputShapes:[e]})}apply(t,e){throw new M(`Cannot pass any input to an InputLayer's apply() method. InputLayer name: ${this.name}`)}dispose(){return{refCountAfterDispose:this._refCount,numDisposedVariables:0}}getConfig(){return{batchInputShape:this.batchInputShape,dtype:this.dtype,sparse:this.sparse,name:this.name}}}Ki.className="InputLayer",Q(Ki);function lE(n){if(n.batchShape==null&&n.shape==null)throw new Error("Please provide to Input either a `shape` or a `batchShape` argument. Note that `shape` does not include the batch dimension.");if(n.batchShape!=null&&n.shape!=null)throw new M("Please provide either a `shape` or `batchShape` argument to Input, but not both.");let t=n.batchShape;n.shape!=null&&t==null&&(t=[null].concat(n.shape));let e=n.dtype;return e==null&&(e="float32"),new Ki({batchInputShape:t,name:n.name,dtype:e,sparse:n.sparse}).inboundNodes[0].outputTensors[0]}function cE(n,t){if(n.dtype==null||n.dtype===t.dtype)return t;try{return at(t,n.dtype)}catch(e){throw new M(`The dtype of the feed (${t.dtype}) can not be cast to the dtype of the key '${n.name}' (${n.dtype}).`)}}class Us{constructor(t){if(this.id2Value={},this.id2Mask={},this.name2Id={},t instanceof Us)for(const e in t.id2Value)this.id2Value[e]=t.id2Value[e],e in t.id2Mask&&(this.id2Mask[e]=t.id2Mask[e]);else{if(t==null)return;for(const e of t)this.add(e.key,e.value)}}add(t,e,s){if(this.id2Value[t.id]==null)this.id2Value[t.id]=cE(t,e),this.name2Id[t.name]=t.id,s!=null&&(this.id2Mask[t.id]=s);else throw new M(`Duplicate key: name=${t.name}, id=${t.id}`);return this}addFeed(t){this.add(t.key,t.value)}hasKey(t){return this.id2Value[t.id]!=null}names(){return Object.keys(this.name2Id)}getValue(t){if(t instanceof is){if(this.id2Value[t.id]==null)throw new M(`Nonexistent key: ${t.name}`);return this.id2Value[t.id]}else{const e=this.name2Id[t];if(e==null)throw new M(`Feed dict has no SymbolicTensor name: ${t}`);return this.id2Value[e]}}getMask(t){if(t instanceof is){if(this.id2Value[t.id]==null)throw new M(`Nonexistent key: ${t.name}`);return this.id2Mask[t.id]}else{const e=this.name2Id[t];if(e==null)throw new M(`Feed dict has no SymbolicTensor name: ${t}`);return this.id2Mask[e]}}disposeMasks(){this.id2Mask!=null&&Dt(this.id2Mask)}}const lc=new Kg,cc=new Kg;function uE(n){lc!=null&&lc.setMaxEntries(n),cc!=null&&cc.setMaxEntries(n)}function ji(n,t,e,s){const o=e==null?!1:e.training,r=Array.isArray(n),i=r?n:[n],a=i.map(f=>f.name),l=[],c=t.names();for(const f of a)c.indexOf(f)!==-1?l.push(t.getValue(f)):l.push(null);const u=a.join(",")+"|"+t.names().sort().join(",");let h=lc.get(u),d;if(h==null){const f=hE(i,t);h=f.sorted,d=f.recipientCounts,lc.put(u,h),cc.put(u,d)}d={},o||Object.assign(d,cc.get(u));const p=new Us(t);for(let f=0;f<h.length;++f){const m=h[f],g=m.sourceLayer;if(g instanceof Ki)continue;const x=[],b=[],y=[];let w=!1;for(const k of m.inputs){const S=p.getValue(k),$=p.getMask(k);x.push(S),b.push($),$!=null&&(w=!0),o||(d[k.name]--,d[k.name]===0&&!t.hasKey(k)&&a.indexOf(k.name)===-1&&!S.isDisposed&&k.sourceLayer.stateful!==!0&&y.push(S))}w&&(e=e||{},e.mask=b[0]);const C=Wt(g.apply(x,e));let I=null;g.supportsMasking&&(I=g.computeMask(x,b));const v=pE(m),N=Array.isArray(v)?v:[v];for(let k=0;k<N.length;++k){p.hasKey(N[k])||p.add(N[k],C[k],Array.isArray(I)?I[0]:I);const S=a.indexOf(N[k].name);S!==-1&&(l[S]=C[k])}o||Dt(y)}return p.disposeMasks(),r?l:l[0]}function hE(n,t){T(n!=null&&n.length>0,()=>"Expected at least one fetch, got none");let e=[],s={};if(n.length===1){const o=bx(n[0],t);e=o.sorted,s=o.recipientMap}else{const o=new Set;for(const r of n){const{sorted:i,recipientMap:a}=bx(r,t);for(const l of i)o.has(l.name)||(e.push(l),o.add(l.name));for(const l in a)s[l]==null&&(s[l]=new Set),a[l].forEach(c=>s[l].add(c))}}return{sorted:e,recipientCounts:dE(s)}}function dE(n){const t={};for(const e in n)t[e]=n[e].size;return t}function bx(n,t){const e=new Set,s=[],o={};for(const a of t.names())e.add(a);const r=[],i=[];for(r.push(n);r.length>0;){const a=r[r.length-1];if(e.has(a.name)){r.pop();continue}const l=i[i.length-1]===r.length-1;if(a.inputs.length===0||l)r.pop(),s.push(a),e.add(a.name),l&&i.pop();else{i.push(r.length-1);for(const c of a.inputs)o[c.name]==null&&(o[c.name]=new Set),o[c.name].add(a.name),!e.has(c.name)&&r.push(c)}}return{sorted:s,recipientMap:o}}function pE(n){let t;if(n.sourceLayer.inboundNodes.length===1)t=n.sourceLayer.output;else{let e=null;for(let s=0;s<n.sourceLayer.inboundNodes.length;++s)for(const o of n.sourceLayer.inboundNodes[s].outputTensors)if(o.id===n.id){e=s;break}t=n.sourceLayer.getOutputAt(e)}return t}H().registerFlag("TOPOLOGICAL_SORT_CACHE_MAX_ENTRIES",()=>100,uE);function Vd(n,t){return U(()=>Ve(mt(P(n,n),t,!0)))}class Yi extends er{getConfig(){return{}}}class yx extends Yi{constructor(t){super(),this.defaultMaxValue=2,this.defaultAxis=0,this.maxValue=t.maxValue!=null?t.maxValue:this.defaultMaxValue,this.axis=t.axis!=null?t.axis:this.defaultAxis}apply(t){return U(()=>{const e=Vd(t,this.axis),s=xn(e,0,this.maxValue);return P(t,gt(s,et(xe(),e)))})}getConfig(){return{maxValue:this.maxValue,axis:this.axis}}}yx.className="MaxNorm",Q(yx);class wx extends Yi{constructor(t){super(),this.defaultAxis=0,this.axis=t.axis!=null?t.axis:this.defaultAxis}apply(t){return U(()=>gt(t,et(xe(),Vd(t,this.axis))))}getConfig(){return{axis:this.axis}}}wx.className="UnitNorm",Q(wx);class Cx extends Yi{apply(t){return go(t)}}Cx.className="NonNeg",Q(Cx);class $x extends Yi{constructor(t){super(),this.defaultMinValue=0,this.defaultMaxValue=1,this.defaultRate=1,this.defaultAxis=0,this.minValue=t.minValue!=null?t.minValue:this.defaultMinValue,this.maxValue=t.maxValue!=null?t.maxValue:this.defaultMaxValue,this.rate=t.rate!=null?t.rate:this.defaultRate,this.axis=t.axis!=null?t.axis:this.defaultAxis}apply(t){return U(()=>{const e=Vd(t,this.axis),s=et(P(this.rate,xn(e,this.minValue,this.maxValue)),P(1-this.rate,e));return P(t,gt(s,et(xe(),e)))})}getConfig(){return{minValue:this.minValue,maxValue:this.maxValue,rate:this.rate,axis:this.axis}}}$x.className="MinMaxNorm",Q($x);const Ix={maxNorm:"MaxNorm",minMaxNorm:"MinMaxNorm",nonNeg:"NonNeg",unitNorm:"UnitNorm"};function ye(n){return Id(n)}function vx(n,t={}){return Ui(n,kn.getMap().classNameMap,t,"constraint")}function we(n){if(n==null)return null;if(typeof n=="string"){const e={className:n in Ix?Ix[n]:n,config:{}};return vx(e)}else return n instanceof Yi?n:vx(n)}function So(n){return Z(this,null,function*(){if(n==null)return;const t=[],e=[],s=[];for(const o in n){const r=n[o];if(typeof r!="number"){const i=r;t.push(i.data()),e.push(o),s.push(i)}}if(t.length>0){const o=yield Promise.all(t);for(let r=0;r<o.length;++r)n[e[r]]=o[r][0];Dt(s)}})}function kx(n){if(n!=null)for(const t in n){const e=n[t];typeof e!="number"&&e.dispose()}}var Sx;(function(n){n[n.SILENT=0]="SILENT",n[n.VERBOSE=1]="VERBOSE"})(Sx||(Sx={}));const fE=125;class Zi{constructor(){this.validationData=null}setParams(t){this.params=t}onEpochBegin(t,e){return Z(this,null,function*(){})}onEpochEnd(t,e){return Z(this,null,function*(){})}onBatchBegin(t,e){return Z(this,null,function*(){})}onBatchEnd(t,e){return Z(this,null,function*(){})}onTrainBegin(t){return Z(this,null,function*(){})}onTrainEnd(t){return Z(this,null,function*(){})}setModel(t){}}class mE{constructor(t,e=10){t==null&&(t=[]),this.callbacks=t,this.queueLength=e}append(t){this.callbacks.push(t)}setParams(t){for(const e of this.callbacks)e.setParams(t)}setModel(t){for(const e of this.callbacks)e.setModel(t)}onEpochBegin(t,e){return Z(this,null,function*(){e==null&&(e={});for(const s of this.callbacks)yield s.onEpochBegin(t,e)})}onEpochEnd(t,e){return Z(this,null,function*(){e==null&&(e={});for(const s of this.callbacks)yield s.onEpochEnd(t,e)})}onBatchBegin(t,e){return Z(this,null,function*(){e==null&&(e={});for(const s of this.callbacks)yield s.onBatchBegin(t,e)})}onBatchEnd(t,e){return Z(this,null,function*(){e==null&&(e={});for(const s of this.callbacks)yield s.onBatchEnd(t,e)})}onTrainBegin(t){return Z(this,null,function*(){t==null&&(t={});for(const e of this.callbacks)yield e.onTrainBegin(t)})}onTrainEnd(t){return Z(this,null,function*(){t==null&&(t={});for(const e of this.callbacks)yield e.onTrainEnd(t)})}}class gE extends Zi{constructor(){super()}onEpochBegin(t){return Z(this,null,function*(){this.seen=0,this.totals={}})}onBatchEnd(t,e){return Z(this,null,function*(){e==null&&(e={});const s=e.size==null?0:e.size;this.seen+=s;for(const o in e){const r=e[o];if(typeof r=="number")this.totals.hasOwnProperty(o)||(this.totals[o]=0),this.totals[o]=this.totals[o]+r*s;else{let i;o in this.totals?i=this.totals[o]:this.totals[o]=0;const a=U(()=>et(this.totals[o],P(r,s)));this.totals[o]=a,i!=null&&i.dispose()}}})}onEpochEnd(t,e){return Z(this,null,function*(){if(e!=null)for(const s of this.params.metrics)this.totals[s]!=null&&(typeof this.totals[s]=="number"?e[s]=this.totals[s]/this.seen:U(()=>{const o=P(gt(1,this.seen),this.totals[s]);e[s]=o,this.totals[s].dispose(),Yn(e[s])}))})}}class xE extends Zi{onTrainBegin(t){return Z(this,null,function*(){this.epoch=[],this.history={}})}onEpochEnd(t,e){return Z(this,null,function*(){e==null&&(e={}),this.epoch.push(t);for(const s in e)this.history[s]==null&&(this.history[s]=[]),this.history[s].push(e[s])})}syncData(){return Z(this,null,function*(){const t=[],e=[],s=[];for(const r in this.history){const i=this.history[r];for(let a=0;a<i.length;++a)if(typeof i[a]!="number"){const l=i[a];t.push(l.data()),e.push(r),s.push(a)}}const o=yield Promise.all(t);for(let r=0;r<o.length;++r)this.history[e[r]][s[r]].dispose(),this.history[e[r]][s[r]]=o[r][0]})}}class bE extends Zi{constructor(t,e){if(super(),this.currentEpoch=0,this.nowFunc=t.nowFunc,this.nextFrameFunc=t.nextFrameFunc||fg,this.yieldEvery=e||"auto",this.yieldEvery==="auto"&&(this.yieldEvery=fE),this.yieldEvery==="never"&&t.onYield!=null)throw new Error("yieldEvery is `never` but you provided an `onYield` callback. Either change `yieldEvery` or remove the callback");ru(this.yieldEvery)&&(this.maybeWait=DT(this.maybeWait.bind(this),this.yieldEvery,this.nowFunc)),this.trainBegin=t.onTrainBegin,this.trainEnd=t.onTrainEnd,this.epochBegin=t.onEpochBegin,this.epochEnd=t.onEpochEnd,this.batchBegin=t.onBatchBegin,this.batchEnd=t.onBatchEnd,this.yield=t.onYield}maybeWait(t,e,s){return Z(this,null,function*(){const o=[];this.yield!=null&&(yield So(s),o.push(this.yield(t,e,s))),o.push(this.nextFrameFunc()),yield Promise.all(o)})}onEpochBegin(t,e){return Z(this,null,function*(){this.currentEpoch=t,this.epochBegin!=null&&(yield So(e),yield this.epochBegin(t,e))})}onEpochEnd(t,e){return Z(this,null,function*(){const s=[];this.epochEnd!=null&&(yield So(e),s.push(this.epochEnd(t,e))),this.yieldEvery==="epoch"&&s.push(this.nextFrameFunc()),yield Promise.all(s)})}onBatchBegin(t,e){return Z(this,null,function*(){this.batchBegin!=null&&(yield So(e),yield this.batchBegin(t,e))})}onBatchEnd(t,e){return Z(this,null,function*(){const s=[];this.batchEnd!=null&&(yield So(e),s.push(this.batchEnd(t,e))),this.yieldEvery==="batch"?s.push(this.nextFrameFunc()):ru(this.yieldEvery)&&s.push(this.maybeWait(this.currentEpoch,t,e)),yield Promise.all(s)})}onTrainBegin(t){return Z(this,null,function*(){this.trainBegin!=null&&(yield So(t),yield this.trainBegin(t))})}onTrainEnd(t){return Z(this,null,function*(){this.trainEnd!=null&&(yield So(t),yield this.trainEnd(t))})}}function Nx(n,t){return n==null&&(n={}),n instanceof Zi?[n]:Array.isArray(n)&&n[0]instanceof Zi?n:Wt(n).map(s=>new bE(s,t))}class En{constructor(){}static registerCallbackConstructor(t,e){T(t>=0&&Number.isInteger(t),()=>`Verbosity level is expected to be an integer >= 0, but got ${t}`),En.checkForDuplicate(e),En.constructors[t]==null&&(En.constructors[t]=[]),En.constructors[t].push(e)}static checkForDuplicate(t){for(const e in En.constructors)En.constructors[+e].forEach(o=>{if(o===t)throw new M("Duplicate callback constructor.")})}static clear(){En.constructors={}}static createCallbacks(t){const e=[];for(const s in En.constructors){const o=+s;t>=o&&e.push(...En.constructors[o])}return e.map(s=>new s)}}En.constructors={};function Tx(n,t,e,s,o,r,i,a,l){const c=new xE,u=[new gE,...En.createCallbacks(t)];n!=null&&u.push(...n),u.push(c);const h=new mE(u);return h.setParams({epochs:e,initialEpoch:s,samples:o,steps:r,batchSize:i,verbose:t,doValidation:a,metrics:l}),{callbackList:h,history:c}}function $s(n,t={},e=!1){return Ui(n,kn.getMap().classNameMap,t,"layer",e)}function uc(n,t){return U(()=>{n.dtype!=="float32"&&(n=at(n,"float32"));const e=mt(qi(n),t,!0),s=Ol(e.shape,xe()),o=Ve(Ls(e,s));return gt(n,o)})}function hc(n,t){return U(()=>de(qi(yt(t,n)),-1))}function Wd(n,t){return U(()=>de(qe(yt(t,n)),-1))}function Ud(n,t){return U(()=>{const e=yt(n,t),s=xn(qe(n),xe(),Number.MAX_VALUE),o=qe(gt(e,s));return P(100,de(o,-1))})}function yE(n,t){return U(()=>{const e=xn(t,xe(),Number.MAX_VALUE),s=ts(et(1,e)),o=xn(n,xe(),Number.MAX_VALUE),r=ts(et(1,o));return de(qi(yt(s,r)),-1)})}function wE(n,t){return U(()=>{const e=Ls(0,yt(1,P(n,t)));return de(qi(e),-1)})}function CE(n,t){return U(()=>{const e=Ls(0,yt(1,P(n,t)));return de(e,-1)})}function $E(n,t){return U(()=>{const e=mt(P(n,t),-1),s=Pn(P(yt(1,n),t),-1);return Ls(0,et(1,yt(s,e)))})}function IE(n,t){return U(()=>{const e=Math.log(2),s=yt(t,n),o=yt(et(s,_i(P(-2,s))),e);return de(o,-1)})}function Qi(n,t,e=!1){return U(()=>{if(e)t=Bh(t);else{const s=mt(t,t.shape.length-1,!0);t=gt(t,s)}return t=xn(t,xe(),1-xe()),ae(mt(P(at(n,"float32"),ts(t)),t.shape.length-1))})}function dc(n,t,e=!1){return U(()=>{const s=at(Bl(GT(n)),"int32");t=xn(t,xe(),1-xe());const o=t.shape,r=z(km(s,o[o.length-1]),o);return Qi(r,t,e)})}function vE(n,t){if(!Bt(n.shape,t.shape))throw new M(`logits and labels must have the same shape, but got shapes ${JSON.stringify(n.shape)} and ${JSON.stringify(t.shape)}`);return U(()=>{const e=go(t),s=ae(qe(t));return et(yt(e,P(t,n)),Cm(Jn(s)))})}function pc(n,t){return U(()=>{let e;return e=xn(t,xe(),1-xe()),e=ts(gt(e,yt(1,e))),de(vE(n,e),-1)})}function kE(n,t){return U(()=>{const e=xn(n,xe(),1),s=xn(t,xe(),1);return mt(P(n,ts(gt(e,s))),-1)})}function SE(n,t){return U(()=>{const e=ts(et(xe(),t));return de(yt(t,P(n,e)),-1)})}function Ex(n,t){return U(()=>{const e=uc(n,-1),s=uc(t,-1),o=P(e,s);return ae(mt(o,-1))})}const fc={meanSquaredError:hc,meanAbsoluteError:Wd,meanAbsolutePercentageError:Ud,meanSquaredLogarithmicError:yE,squaredHinge:wE,hinge:CE,categoricalHinge:$E,logcosh:IE,categoricalCrossentropy:Qi,sparseCategoricalCrossentropy:dc,binaryCrossentropy:pc,kullbackLeiblerDivergence:kE,poisson:SE,cosineProximity:Ex};function Gd(n){if(typeof n=="string"){if(n in fc)return fc[n];let t=`Unknown loss ${n}`;throw n.toLowerCase().includes("softmaxcrossentropy")&&(t=`Unknown loss ${n}. Use "categoricalCrossentropy" as the string name for tf.losses.softmaxCrossEntropy`),new M(t)}else return n}function Rx(n,t){return U(()=>{const e=P(.5,vn(t)),s=os(bn(t,e),n.dtype);return de(Qn(n,s),-1)})}function Ax(n,t){return U(()=>os(Qn(Ti(n,-1),Ti(t,-1)),"float32"))}function NE(n,t){return U(()=>at(mt(gs(Qn(n,1),Qn(t,1))),"float32"))}function TE(n,t){return U(()=>at(mt(gs(Qn(n,0),Qn(t,1))),"float32"))}function EE(n,t){return U(()=>{const e=NE(n,t),s=TE(n,t),o=et(e,s);return at(Xe(bn(o,0),gt(e,o),0),"float32")})}function RE(n,t){return pc(n,t)}function AE(n,t){return n.rank===t.rank&&(n=Pi(n,[n.rank-1])),t=Ti(t,-1),t.dtype!==n.dtype&&(t=at(t,n.dtype)),at(Qn(n,t),"float32")}const DE=hc,FE=hc,_E=Wd,OE=Wd,ME=Ud,LE=Ud,Dx=Qi,PE=Ex,Fx=dc,mc={binaryAccuracy:Rx,categoricalAccuracy:Ax,precision:EE,categoricalCrossentropy:Dx,sparseCategoricalCrossentropy:Fx,mse:DE,MSE:FE,mae:_E,MAE:OE,mape:ME,MAPE:LE,cosine:PE};function BE(n){if(typeof n=="string"&&n in mc)return mc[n];if(typeof n!="string"&&n!=null)return n;throw new M(`Unknown metric ${n}`)}function gc(n){if(ss(n!==null,`Unknown LossOrMetricFn ${n}`),typeof n=="string")return n;{let t;for(const e of Object.keys(fc))if(fc[e]===n){t=e;break}if(t!==void 0)return t;for(const e of Object.keys(mc))if(mc[e]===n){t=e;break}return t!==void 0?t:n.name}}function zE(n){const t={Adagrad:()=>nr.adagrad(.01),Adadelta:()=>nr.adadelta(1,.95,xe()),Adam:()=>nr.adam(.001,.9,.999,xe()),Adamax:()=>nr.adamax(.002,.9,.999,xe(),0),RMSProp:()=>nr.rmsprop(.001,.9,0,xe()),SGD:()=>nr.sgd(.01)};if(t.adagrad=t.Adagrad,t.adadelta=t.Adadelta,t.adam=t.Adam,t.adamax=t.Adamax,t.rmsprop=t.RMSProp,t.sgd=t.SGD,n in t)return t[n]();throw new M(`Unknown Optimizer ${n}`)}const _x=1*1024*1024;function Ox(n,t,e=!1){if(n==null||typeof n!="object"||Object.getPrototypeOf(n)!==Object.prototype||!Hd(n))throw new Error("User-defined metadata is expected to be a JSON object, but is not.");if(e){const s=JSON.stringify(n);s.length>_x&&console.warn(`User-defined metadata of model "${t}" is too large in size (length=${s.length} when serialized). It is not recommended to store such large objects in user-defined metadata. Please make sure its serialized length is <= ${_x}.`)}}function Hd(n){if(n===null)return!0;if(typeof n=="object")if(Object.getPrototypeOf(n)===Object.prototype){const t=Object.keys(n);for(const e of t)if(typeof e!="string"||!Hd(n[e]))return!1;return!0}else if(Array.isArray(n)){for(const t of n)if(!Hd(t))return!1;return!0}else return!1;else{const t=typeof n;return t==="string"||t==="number"||t==="boolean"}}function VE(n,t,e,s=console.log){const o=UE(n),r=["Layer (type)","Input Shape","Output shape","Param #"];o?(t=t||90,e=e||[.32,.61,.89,1]):(t=t||115,e=e||[.24,.48,.7,.8,1]),e[e.length-1]<=1&&(e=e.map(u=>Math.floor(t*u)));let i;if(!o){r.push("Receives inputs"),i=[];for(const u in n.nodesByDepth)i.push(...n.nodesByDepth[u])}s("_".repeat(t)),xc(r,e,s),s("=".repeat(t));const a=n.layers;for(let u=0;u<a.length;++u)o?GE(a[u],e,s):HE(a[u],e,i,s),s((u===a.length-1?"=":"_").repeat(t));n.checkTrainableWeightsConsistency();const l=WE(n),c=ic(n.nonTrainableWeights);s(`Total params: ${l+c}`),s(`Trainable params: ${l}`),s(`Non-trainable params: ${c}`),s("_".repeat(t))}function WE(n){let t;return n.collectedTrainableWeights!=null?t=ic(n.collectedTrainableWeights):t=ic(n.trainableWeights),t}function UE(n){let t=!0;const e=[],s=[];for(const o in n.nodesByDepth)e.push(n.nodesByDepth[o]);for(const o of e){if(o.length>1||o.length===1&&o[0].inboundLayers.length>1){t=!1;break}s.push(...o)}if(t)for(const o of n.layers){let r=!1;for(const i of o.inboundNodes)if(s.indexOf(i)!==-1)if(r){t=!1;break}else r=!0;if(!t)break}return t}function xc(n,t,e=console.log){let s="";for(let o=0;o<n.length;++o)o>0&&(s=s.slice(0,s.length-1)+" "),s+=n[o],s=s.slice(0,t[o]),s+=" ".repeat(t[o]-s.length);e(s)}function GE(n,t,e){let s,o;try{o=n.inboundNodes.map(l=>JSON.stringify(l.inputShapes)).join(",")}catch(l){o="multiple"}try{s=JSON.stringify(n.outputShape)}catch(l){s="multiple"}const r=n.name,i=n.getClassName(),a=[`${r} (${i})`,o,s,n.countParams().toString()];xc(a,t,e)}function HE(n,t,e,s){let o,r;try{r=n.inboundNodes.map(h=>JSON.stringify(h.inputShapes)).join(",")}catch(h){r="multiple"}try{o=JSON.stringify(n.outputShape)}catch(h){o="multiple"}const i=[];for(const h of n.inboundNodes)if(!(e!=null&&e.length>0&&e.indexOf(h)===-1))for(let d=0;d<h.inboundLayers.length;++d){const p=h.inboundLayers[d].name,f=h.nodeIndices[d],m=h.tensorIndices[d];i.push(`${p}[${f}][${m}]`)}const a=n.name,l=n.getClassName(),c=i.length===0?"":i[0],u=[`${a} (${l})`,r,o,n.countParams().toString(),c];xc(u,t,s);for(let h=1;h<i.length;++h)xc(["","","","",i[h]],t,s)}function Mx(n,t,e){return(n==="inboundNodes"||n==="outputLayers"||n==="inputLayers")&&t===0&&typeof e=="string"}function qd(n,t){if(n===null)return null;if(typeof n=="string")return $o(n);if(typeof n=="number"||typeof n=="boolean")return n;if(n instanceof Array){const e=[],s=n.length;for(let o=0;o<s;++o){const r=n[o];Mx(t,o,r)?e.push(r):e.push(qd(r,t))}return e}else{const e={};for(const s of Object.keys(n)){const o=n[s];if(s==="name"&&typeof o=="string")e[s]=o;else{const r=$o(s);e[r]=qd(o,r)}}return e}}function Xd(n,t){if(n==null)return null;if(typeof n=="string")return Cs(n);if(typeof n=="number"||typeof n=="boolean")return n;if(n instanceof Array){const e=[],s=n.length;for(let o=0;o<s;++o){const r=n[o];Mx(t,o,r)?e.push(r):e.push(Xd(r,t))}return e}else{const e={};for(const s of Object.keys(n)){const o=n[s],r=Cs(s);(s==="name"||s==="className")&&typeof o=="string"?e[r]=o:e[r]=Xd(o,s)}return e}}const Lx="4.20.0";const qE=n=>{const t=Object.keys(n);if(t.length===0)return!1;const e=t[0].split("/");return!isNaN(parseInt(e[e.length-1],10))};class Gn extends Rt{constructor(t){if(super({}),this.containerNodes=new Set,this.name=t.name,this.name==null){const b=this.getClassName().toLowerCase();this.name=nc(b)}if(this.supportsMasking=!1,this.trainable_=!0,Array.isArray(t.inputs)?this.inputs=t.inputs.slice():this.inputs=[t.inputs],Array.isArray(t.outputs)?this.outputs=t.outputs.slice():this.outputs=[t.outputs],zs(this.inputs).length!==this.inputs.length)throw new M(`The list of inputs passed to the model is redundant. All inputs should only appear once. Found: ${this.inputs.map(b=>b.name)}`);zs(this.outputs).length!==this.outputs.length&&console.warn(`The list of outputs passed to the model is redundant. All outputs should only appear once. Found: ${this.outputs.map(b=>b.name)}`),this.inputLayers=[],this.inputLayersNodeIndices=[],this.inputLayersTensorIndices=[],this.outputLayers=[],this.outputLayersNodeIndices=[],this.outputLayersTensorIndices=[],this.layers=[],this.internalContainerRefs=[];for(const b of this.outputs){const y=b.sourceLayer,w=b.nodeIndex,C=b.tensorIndex;this.outputLayers.push(y),this.outputLayersNodeIndices.push(w),this.outputLayersTensorIndices.push(C)}for(const b of this.inputs){const y=b.sourceLayer,w=b.nodeIndex,C=b.tensorIndex;ss(w===0,"input layer has >1 nodes"),ss(C===0,"input layer has >1 tensors"),this.inputLayers.push(y),this.inputLayersNodeIndices.push(w),this.inputLayersTensorIndices.push(C)}this.inputNames=[],this.outputNames=[],this.feedInputShapes=[],this.feedInputNames=[],this.feedOutputNames=[];for(let b=0;b<this.inputLayers.length;b++){const y=this.inputLayers[b];if(!(y instanceof Ki))throw new TypeError(`Input layers to a LayersModel must be InputLayer objects. Received inputs: ${t.inputs}. Input ${b} (0-based) originates from layer type ${y.getClassName()}.`);this.inputNames.push(y.name),this.feedInputShapes.push(y.batchInputShape),this.feedInputNames.push(y.name)}for(const b of this.outputLayers)this.outputNames.push(b.name);this.internalInputShapes=this.inputs.map(b=>b.shape),this.internalOutputShapes=this.outputs.map(b=>b.shape);const e={},s={},o={},r={},i={},a=[],l=(b,y,w,C,I,v)=>{(C==null||I==null||v==null)&&(C=b.sourceLayer,I=b.nodeIndex,v=b.tensorIndex);const N=C.inboundNodes[I];if(w.indexOf(N)!==-1)throw new Sn(`The tensor ${b.name} at layer "${C.name}" is part of a cycle.`);if(y.indexOf(N)!==-1)return;this.containerNodes.add(Gn.nodeKey(C,I)),C.id in i||(i[C.id]=Object.keys(i).length),w.indexOf(N)===-1&&w.push(N);const k=N.inboundLayers.length;for(let S=0;S<k;S++){const $=N.inputTensors[S],E=N.inboundLayers[S],R=N.nodeIndices[S],F=N.tensorIndices[S];l($,y,w,E,R,F)}for(y.push(N);w.indexOf(N)>=0;)w.splice(w.indexOf(N),1);a.push(N)},c=[],u=[];for(const b of this.outputs)l(b,c,u);const h=a.slice().reverse();for(const b of h){s[b.id]=b,b.id in e||(e[b.id]=0);let y=e[b.id];const w=o[b.outboundLayer.id]==null?0:o[b.outboundLayer.id];y=Math.max(y,w),o[b.outboundLayer.id]=y,r[b.outboundLayer.id]=b.outboundLayer,e[b.id]=y;for(let C=0;C<b.inboundLayers.length;C++){const I=b.inboundLayers[C],v=b.nodeIndices[C],N=I.inboundNodes[v],k=e[N.id]==null?0:e[N.id];e[N.id]=Math.max(y+1,k),s[N.id]=N}}const d={};for(const b in e){const y=e[b];y in d||(d[y]=[]),d[y].push(s[b])}const p={};for(const b in o){const y=o[b];y in p||(p[y]=[]),p[y].push(r[b])}let f=Object.keys(p).map(b=>parseInt(b,10)).sort(tc);this.layers=[];for(const b of f){const y=p[b];y.sort((w,C)=>{const I=i[w.id],v=i[C.id];return I<v?-1:I>v?1:0});for(const w of y)w instanceof Gn&&this.internalContainerRefs.push(w),this.layers.push(w)}this.layersByDepth=p,f=Object.keys(d).map(b=>parseInt(b,10)).sort(tc);const m=this.inputs.slice(),g=[];for(const b of f)for(const y of d[b]){const w=y.outboundLayer;if(w!=null){for(const C of y.inputTensors)if(m.indexOf(C)===-1)throw new Sn(`Graph disconnected: cannot obtain value for tensor ${C} at layer "${w.name}". The following previous layers were accessed without issue: ${g}`);for(const C of y.outputTensors)m.push(C);g.push(w.name)}}this.nodesByDepth=d;const x=this.layers.map(b=>b.name);for(const b of x){const y=x.filter(w=>w===b).length;if(y!==1)throw new Sn(`The name "${b}" is used ${y} times in the model. All layer names should be unique. Layer names: `+JSON.stringify(x))}this.outboundNodes=[],this.inboundNodes=[],new ac({outboundLayer:this,inboundLayers:[],nodeIndices:[],tensorIndices:[],inputTensors:this.inputs,outputTensors:this.outputs,inputMasks:this.inputs.map(b=>null),outputMasks:this.outputs.map(b=>null),inputShapes:this.inputs.map(b=>b.shape),outputShapes:this.outputs.map(b=>b.shape)}),this.built=!0,this._refCount=1}assertNotDisposed(){if(this._refCount===0)throw new Error(`Container '${this.name}' is already disposed.`)}dispose(){this.assertNotDisposed();const t={refCountAfterDispose:null,numDisposedVariables:0};if(--this._refCount===0){for(const e of this.layers)t.numDisposedVariables+=e.dispose().numDisposedVariables;for(const e of this.internalContainerRefs)t.numDisposedVariables+=e.dispose().numDisposedVariables}return t.refCountAfterDispose=this._refCount,t}get trainable(){return this.trainable_}set trainable(t){this.layers.forEach(e=>{e._trainableWeights.forEach(s=>s.trainable=t)}),this.trainable_=t}get trainableWeights(){if(this._trainableWeights.length>0)throw new M("Container instance unexpectedly contains _trainableWeights.The trainable weights of a Container are a union of the trainable weights of its consituent Layers. Its own _trainableWeights must remain an empty Array.");if(!this.trainable)return[];let t=[];for(const e of this.layers)t=t.concat(e.trainableWeights);return t}get nonTrainableWeights(){const t=[];for(const e of this.layers)t.push(...e.nonTrainableWeights);if(!this.trainable){const e=[];for(const s of this.layers)e.push(...s.trainableWeights);return e.concat(t)}return t}get weights(){return this.trainableWeights.concat(this.nonTrainableWeights)}loadWeights(t,e=!0){const s={};let o=0;const r=qE(t);r&&this.parseWeights(t);for(const a of this.layers)for(const[l,c]of a.weights.entries()){const u=r?`${c.name.split("/").slice(0,-1).join("/")+"/"}${l}`:c.originalName;if(s[u]!=null)throw new M(`Duplicate weight name: ${u}`);s[u]=c,o++}const i=[];for(const a in t){let l=a;if(s[a]==null){const c=a.split("/");l=c.slice(0,-2).concat([c[c.length-1]]).join("/")}if(s[l]!=null)i.push([s[l],t[a]]);else if(e)throw new M(`Provided weight data has no target variable: ${a}`);delete s[l]}if(e){const a=[];for(const l in s)a.push(l);if(a.length>0)throw new M(`${a.length} of ${o} weights are not set: ${a}`)}zd(i)}parseWeights(t){for(const e in Object.keys(t)){const s=e.split("/"),o=["vars","layer_checkpoint_dependencies"],r=s.map(i=>i.startsWith("_")?i.slice(1):i).filter(i=>!o.includes(i)).join("/");r!==e&&(t[r]=t[e],delete t[e])}}updatedConfig(){const t=this.getConfig(),e={};return e.className=this.getClassName(),e.config=t,e.kerasVersion=`tfjs-layers ${Lx}`,e.backend="TensorFlow.js",e}toJSON(t,e=!0){const s=Xd(this.updatedConfig());return e?JSON.stringify(s):s}call(t,e){return U(()=>{t=Wt(t);const s=new Us;for(let o=0;o<this.inputs.length;++o)s.add(this.inputs[o],t[o]);return ji(this.outputs,s,e)})}computeMask(t,e){return U(()=>{t=Wt(t);let s;return e==null?s=Co(null,t.length):s=Wt(e),this.runInternalGraph(t,s)[1]})}computeOutputShape(t){const e=rc(t);if(e.length!==this.inputLayers.length)throw new M(`Invalid inputShape argument ${t}: model has ${this.inputLayers.length} tensor inputs.`);const s={};for(let a=0;a<e.length;a++){const l=this.inputLayers[a],c=e[a],u=l.name+"_0_0";s[u]=c}const o=Object.keys(this.nodesByDepth).map(a=>parseInt(a,10)).sort(tc);if(o.length>1)for(const a of o){const l=this.nodesByDepth[a];for(const c of l){const u=c.outboundLayer;if(this.inputLayers.map(m=>m.id).indexOf(u.id)!==-1)continue;const h=[];for(let m=0;m<c.inboundLayers.length;m++){const g=c.inboundLayers[m],x=c.nodeIndices[m],b=c.tensorIndices[m],y=`${g.name}_${x}_${b}`,w=s[y];h.push(w)}const d=u.computeOutputShape(sn(h)),p=rc(d),f=u.inboundNodes.indexOf(c);for(let m=0;m<p.length;m++){const g=`${u.name}_${f}_${m}`;s[g]=p[m]}}}const r=[],i=[];for(let a=0;a<this.outputLayers.length;a++){const l=this.outputLayers[a],c=this.outputLayersNodeIndices[a],u=this.outputLayersTensorIndices[a],h=`${l.name}_${c}_${u}`;i.push(h)}for(let a=0;a<i.length;a++){const l=i[a];ss(l in s),r.push(s[l])}return sn(r)}runInternalGraph(t,e){e==null&&(e=Co(null,t.length));const s={};for(let l=0;l<this.inputs.length;++l){const c=this.inputs[l],u=t[l],h=e[l];s[c.id]=[u,h]}const o=Object.keys(this.nodesByDepth).map(l=>parseInt(l,10)).sort(tc);for(const l of o){const c=this.nodesByDepth[l];for(const u of c){const h=u.outboundLayer,d=u.inputTensors,p=u.outputTensors,f=new Array;for(const m of d)m.id in s&&f.push(s[m.id]);if(f.length===d.length){let m={},g,x,b,y;if(u.callArgs!=null&&(m=u.callArgs),f.length===1){const[w,C]=f[0];m.mask==null&&(m.mask=C),b=Wt(h.call(w,m)),y=Wt(h.computeMask(w,C)),g=[w],x=[C]}else g=f.map(w=>w[0]),x=f.map(w=>w[1]),m.mask==null&&(m.mask=x),b=Wt(h.call(g,m)),y=Wt(h.computeMask(g,x));if(h.activityRegularizer)throw new vt("LayersModel invocation with concrete Tensor value(s) in the presence of activity regularizer(s) is not supported yet.");for(let w=0;w<p.length;++w){const C=p[w],I=b[w],v=y[w];s[C.id]=[I,v]}}}}const r=[],i=[],a=[];for(const l of this.outputs){ss(l.id in s,`Could not compute output ${l.name} : ${l.id}`);const[c,u]=s[l.id];a.push(c.shape),r.push(c),i.push(u)}return[r,i,a]}buildNodeConversionMap(t){const e={};let s;for(const o of this.layers){s=o instanceof Gn?1:0;for(let r=0;r<o.inboundNodes.length;r++){const i=Gn.nodeKey(o,r);this.containerNodes.has(i)&&(e[i]=s,s+=1)}}return e}getLayer(t,e){if(e!=null)return this.findLayer(e);if(t==null)throw new M("Provide either a layer name or layer index");if(typeof t=="number")return this.findLayer(t);for(const s of this.layers)if(s.name===t)return s;throw new M(`No such layer: ${t}`)}findLayer(t){if(this.layers.length<=t)throw new M(`Was asked to retrieve layer at index ${t}, but model only has ${this.layers.length} layer(s).`);return this.layers[t]}calculateLosses(){return U(()=>{const t=[];for(const e of this.layers)for(let s=0;s<e.inboundNodes.length;++s){const o=Gn.nodeKey(e,s);this.containerNodes.has(o)&&t.push(...e.calculateLosses())}return t})}getConfig(){const t={name:this.name},e=this.buildNodeConversionMap(this.layers),s=[];for(const i of this.layers){const a=i.getClassName(),l=i.getConfig(),c=[];for(let h=0;h<i.inboundNodes.length;h++){const d=i.inboundNodes[h],p=Gn.nodeKey(i,h);let f={};if(this.containerNodes.has(p)){if(d.callArgs)try{JSON.stringify(d.callArgs),f=d.callArgs}catch(m){console.warn(`Layer ${i.name} was passed non-serializable keyword arguments: ${d.callArgs}. They will not be included in the serialized model (and thus will be missing at deserialization time).`),f={}}if(d.inboundLayers.length>0){const m=[];for(let g=0;g<d.inboundLayers.length;g++){const x=d.inboundLayers[g],b=d.nodeIndices[g],y=d.tensorIndices[g],w=Gn.nodeKey(x,b);let C=e[w];C==null&&(C=0),m.push([x.name,C,y,f])}c.push(m)}}}const u={};u.name=i.name,u.className=a,u.config=l,u.inboundNodes=c,s.push(u)}t.layers=s;const o=[];for(let i=0;i<this.inputLayers.length;i++){const a=this.inputLayers[i],l=this.inputLayersNodeIndices[i],c=Gn.nodeKey(a,l);if(!this.containerNodes.has(c))continue;let u=e[c];u==null&&(u=0);const h=this.inputLayersTensorIndices[i];o.push([a.name,u,h])}t.inputLayers=o;const r=[];for(let i=0;i<this.outputLayers.length;i++){const a=this.outputLayers[i],l=this.outputLayersNodeIndices[i],c=Gn.nodeKey(a,l);if(!this.containerNodes.has(c))continue;let u=e[c];u==null&&(u=0);const h=this.outputLayersTensorIndices[i];r.push([a.name,u,h])}return t.outputLayers=r,t}static fromConfig(t,e,s={},o=!1){const r={},i={};function a(g,x){g.name in i?i[g.name].push(x):i[g.name]=[x]}function l(g,x){const b=[];let y;for(const w of x){const C=w[0],I=w[1],v=w[2];if(y=w[3]==null?{}:w[3],!(C in r)){a(g,x);return}const N=r[C];if(N.inboundNodes.length<=I){a(g,x);return}const k=N.inboundNodes[I];b.push(k.outputTensors[v])}b.length>0&&g.apply(sn(b),y)}function c(g){const x=g.name,b=$s(g,e.customObjects!=null?e.customObjects:{});b.setFastWeightInitDuringBuild(o),r[x]=b,g.inboundNodes.forEach(w=>{if(!(w instanceof Array))throw new M(`Corrupted configuration, expected array for nodeData: ${w}`);a(b,w)})}const u=e.name,h=e.layers;for(const g of h)c(g);for(;!AT(i);)for(const g of h){const x=r[g.name];if(x.name in i){const b=i[x.name];delete i[x.name];for(const y of b)l(x,y)}}const d=[],p=[],f=e.inputLayers;for(const g of f){const x=g[0],b=g[1],y=g[2];ss(x in r);const C=r[x].inboundNodes[b].outputTensors;d.push(C[y])}const m=e.outputLayers;for(const g of m){const x=g[0],b=g[1],y=g[2];ss(x in r);const C=r[x].inboundNodes[b].outputTensors;p.push(C[y])}return new t({inputs:d,outputs:p,name:u})}get stateful(){if(this._stateful)throw new M("Container instance unexpectedly has _stateful = true. The statefulness of a Container is determined by the Layers it contains. Its _stateful property must remain the default false.");for(const t of this.layers)if(t.stateful)return!0;return!1}resetStates(){U(()=>{this.layers.forEach(t=>{t.stateful&&t.resetStates()})})}}function XE(n,t,e){const s=t.length;if(n==null||Array.isArray(n)&&n.length===0)return t.map(o=>null);if(s===1)return Array.isArray(n)&&n.length===1?n:typeof n=="object"&&t[0]in n?[n[t[0]]]:[n];if(Array.isArray(n)){if(n.length!==s)throw new Error(`Provided ${e} is an array of ${n.length} element(s), but the model has ${s} outputs. Make sure a set of weights is provided for each model output.`);return n}else if(typeof n=="object"&&Object.keys(n).length>0&&typeof n[Object.keys(n)[0]]=="object"){const o=[];return t.forEach(r=>{r in n?o.push(n[r]):o.push(null)}),o}else throw new Error(`The model has multiple (${s}) outputs, so ${e} must be either an array with ${s} elements or an object with ${t} keys. Provided ${e} not understood: ${JSON.stringify(n)}`)}function Px(n,t){return XE(n,t,"classWeight")}function Bx(n,t,e,s){return Z(this,null,function*(){if(e!=null){const o=U(()=>{if(n.shape.length===1)return co(n);if(n.shape.length===2){if(n.shape[1]>1)return Ti(n,1);if(n.shape[1]===1)return z(n,[n.shape[0]]);throw new Error(`Encountered unexpected last-dimension size (${n.shape[1]}) during handling of class weights. The size is expected to be >= 1.`)}else throw new Error(`Unexpected rank of target (y) tensor (${n.rank}) during handling of class weights. The rank is expected to be 1 or 2.`)}),r=Array.from(yield o.data());Dt(o);const i=[];return r.forEach(a=>{if(e[a]==null)throw new Error(`classWeight must contain all classes in the training data. The class ${a} exists in the data but not in classWeight`);i.push(e[a])}),hn(i,"float32")}else return null})}function KE(n,t){return P(n,t)}const jE=32;function zx(n,t){let e,s;const o=t;e=o.xs,s=o.ys,T(e!=null&&s!=null,()=>`A Dataset iterator for fitDataset() is expected to generate objects of the form \`{xs: xVal, ys: yVal}\`, where the two values may be \`tf.Tensor\`, an array of Tensors, or a map of string to Tensor.  The provided Dataset instead generates ${t}`);const r=Vx("input",n.inputNames,e),i=Vx("output",n.outputNames,s),a=r[0].shape[0];T(r.length===n.inputs.length,()=>`LayersModel has ${n.inputs.length} inputs, but the dataset provides ${r.length} inputs.  (Expected input keys: ${JSON.stringify(n.inputNames)})`),T(i.length===n.outputs.length,()=>`LayersModel has ${n.outputs.length} outputs, but the dataset provides ${i.length} outputs.  (Expected output keys: ${JSON.stringify(n.outputNames)})`);for(let l=0;l<r.length;l++)T(r[l].shape[0]===a,()=>`Batch size mismatch: input ${n.inputNames[l]} has ${r[l].shape[0]}; expected  ${a} based on input ${n.inputNames[0]}.`);for(let l=0;l<i.length;l++)T(i[l].shape[0]===a,()=>`Batch size mismatch: output ${n.outputNames[l]} has ${i[l].shape[0]}; expected  ${a} based on input ${n.inputNames[0]}.`);return{xs:r,ys:i}}function Vx(n,t,e){if(e instanceof me)return[e];if(Array.isArray(e))return T(e.length===t.length,()=>`Received an array of ${e.length} Tensors, but expected ${t.length} to match the ${n} keys ${t}.`),e;{const s=[];for(const o of t){if(e[o]==null)throw new M(`The feature data generated by the dataset lacks the required ${n} key '${o}'.`);s.push(e[o])}return s}}function YE(n){if(n.length===3)throw new vt("Validation with sample weights is not implemented yet.");return{xs:n[0],ys:n[1]}}function ZE(n,t,e){return Z(this,null,function*(){const s=e.batchesPerEpoch!=null;if(T(n.optimizer!=null,()=>"You must compile a model before training/testing. Use LayersModel.compile(modelCompileConfig)."),T(e!=null,()=>"For fitDataset(), the 2nd argument (config) is required, but it is not provided in this call."),T(e.epochs!=null&&e.epochs>0&&Number.isInteger(e.epochs),()=>`For fitDataset(), config.epochs is expected to be a positive integer, but got ${e.epochs}`),T(!s||e.batchesPerEpoch>0&&Number.isInteger(e.batchesPerEpoch),()=>`For fitDataset(), config.batchesPerEpoch is expected to be a positive integer if specified, but got ${e.batchesPerEpoch}`),T(e.validationSplit==null,()=>"`validationSplit` is not supported by `fitDataset()`. Use validationData instead."),n.isTraining)throw new Error("Cannot start training because another fit() call is ongoing.");n.isTraining=!0;try{const o=e.validationData!=null;let r,i;if(o)if(Wx(e.validationData))T(e.validationBatches==null||e.validationBatches>0&&Number.isInteger(e.validationBatches),()=>`For fitDataset() with dataset-based validation, config.validationBatches is expected not to be provided, or to be a positive integer, but got ${e.validationBatches}`);else{const g=YE(e.validationData);r=g.xs,i=g.ys}const a=n.makeTrainFunction(),l=n.getDedupedMetricsNames();let c;o?c=l.slice().concat(l.map(g=>"val_"+g)):c=l.slice();const u=Nx(e.callbacks,e.yieldEvery),h=e.verbose==null?1:e.verbose,{callbackList:d,history:p}=Tx(u,h,e.epochs,null,null,QE(t,e),null,o,c);d.setModel(n),n.history=p,yield d.onTrainBegin(),n.stopTraining_=!1;let f=e.initialEpoch==null?0:e.initialEpoch,m=yield t.iterator();for(;f<e.epochs;){const g={};yield d.onEpochBegin(f);let x=0,b=0;for(s||(m=yield t.iterator());!s||x<e.batchesPerEpoch;){const y=yield m.next();if(s&&y.done){console.warn(`You provided \`batchesPerEpoch\` as ${e.batchesPerEpoch}, but your dataset iterator ran out of data after ${x} batches; interrupting training. Make sure that your dataset can generate at least \`batchesPerEpoch * epochs\` batches (in this case, ${e.batchesPerEpoch*e.epochs} batches). You may need to use the repeat() function when building your dataset.`);break}if(y.value!=null){const{xs:w,ys:C}=zx(n,y.value),I={};I.batch=b,I.size=w[0].shape[0],yield d.onBatchBegin(b,I);const v=[];if(e.classWeight!=null){const S=Px(e.classWeight,n.outputNames);for(let $=0;$<S.length;++$)v.push(yield Bx(C[$],null,S[$]))}const N=w.concat(C).concat(v),k=a(N);Dt(N);for(let S=0;S<l.length;++S){const $=l[S],E=k[S];I[$]=E,Yn(E)}yield d.onBatchEnd(b,I),kx(I),b++,x++}if(s?x>=e.batchesPerEpoch:y.done){if(o){let w;Wx(e.validationData)?w=Wt(yield n.evaluateDataset(e.validationData,{batches:e.validationBatches})):w=Wt(n.evaluate(r,i,{batchSize:e.validationBatchSize==null?jE:e.validationBatchSize,verbose:0}));for(let C=0;C<n.metricsNames.length;++C)g[`val_${n.metricsNames[C]}`]=w[C]}break}if(n.stopTraining_)break}if(yield d.onEpochEnd(f,g),f++,n.stopTraining_)break}return yield d.onTrainEnd(),yield n.history.syncData(),n.history}finally{n.isTraining=!1}})}function QE(n,t){let e=null;return t.batchesPerEpoch!=null?e=t.batchesPerEpoch:Number.isFinite(n.size)&&(e=n.size),e}function Wx(n){return typeof n.iterator=="function"}function JE(n){return typeof n.next=="function"}function tR(n,t,e){return Z(this,null,function*(){e=e||{};const s=e.batches!=null,o=n.testFunction;let r=[];if(e.verbose>0)throw new vt("Verbose mode is not implemented yet.");T(!s||e.batches>0&&Number.isInteger(e.batches),()=>`Test loop expects \`batches\` to be a positive integer, but received ${JSON.stringify(e.batches)}`);const i=JE(t)?t:yield t.iterator();let a=0,l=0;for(;!s||l<e.batches;){const c=yield i.next();if(r=U(()=>{if(c.value){const{xs:u,ys:h}=zx(n,c.value),d=u.concat(h),p=U(()=>o(d));if(Dt(d),l===0)for(let m=0;m<p.length;++m)r.push(Vt(0));const f=d[0].shape[0];for(let m=0;m<p.length;++m){const g=p[m],x=r[m];r[m]=U(()=>et(r[m],P(f,g))),l>0&&Dt(x)}Dt(p),a+=f,++l}return r}),c.done){s&&console.warn(`Your dataset iterator ran out of data during evaluateDataset(). Interrupting evalution. Make sure that your dataset can generate at least \`batches\` batches (in this case, ${e.batches} batches). You may need to use the repeat() function when building your dataset.`);break}}for(let c=0;c<r.length;++c){const u=r[c];r[c]=gt(r[c],a),Dt(u)}return sn(r)})}function Kd(n){T(n>0&&Number.isInteger(n),()=>`batchSize is required to be a positive integer, but got ${n}`)}function Ji(n,t,e){return n==null?[null]:Array.isArray(n)?n.map(s=>ko(s,t,e-t)):ko(n,t,e-t)}function jd(n,t){return U(()=>n==null?null:Array.isArray(n)?n.map(e=>jd(e,t)):rx(n,t.dtype==="int32"?t:at(t,"int32")))}function Yd(n,t){const e=[];let s=0,o=null;for(;s<n;)o=s+t,o>=n&&(o=n),e.push([s,o]),s=o;return e}function Ux(n){const t=[];n instanceof me&&(n=[n]);for(let e=0;e<n.length;++e){const s=n[e];if(s.rank===1)t.push(Hi(s,1));else{if(s.rank===0)throw new Error("Expected tensor to be at least 1D, but received a 0D tensor (scalar).");t.push(s)}}return t}function Hn(n,t){if(n==null)return;const e=[];if(t instanceof me)e.push(t.id);else if(Array.isArray(t))t.forEach(o=>e.push(o.id));else if(t!=null)for(const o in t){const r=t[o];e.push(r.id)}const s=[];if(n instanceof me)e.indexOf(n.id)===-1&&s.push(n);else if(Array.isArray(n))n.forEach(o=>{e.indexOf(o.id)===-1&&s.push(o)});else if(n!=null)for(const o in n){const r=n[o];e.indexOf(r.id)===-1&&s.push(r)}s.forEach(o=>{o.isDisposed||o.dispose()})}function eR(n){return n instanceof me}function Zd(n){return Array.isArray(n)}function Gx(n){return!eR(n)&&!Zd(n)}function Hx(n,t,e,s=!0,o=""){if(t==null||t.length===0){if(n!=null){let i=!1;if(Zd(n)&&n.length>0)i=!0;else if(Gx(n)){for(const a in n)if(n.hasOwnProperty(a)){i=!0;break}}else i=!0;if(i)throw new M(`Error when checking model ${o} expected no data, but got ${n}`)}return[]}if(n==null)return t.map(i=>null);let r;if(Gx(n)){n=n,r=[];for(const i of t){if(n[i]==null)throw new M(`No data provided for "${i}". Need data for each key in: ${t}`);r.push(n[i])}}else if(Zd(n)){if(n=n,n.length!==t.length)throw new M(`Error when checking model ${o}: the Array of Tensors that you are passing to your model is not the size the model expected. Expected to see ${t.length} Tensor(s), but instead got the following list of Tensor(s): ${n}`);r=n}else{if(n=n,t.length>1)throw new M(`The model ${o} expects ${t.length} Tensor(s), but only received one Tensor. Found: Tensor with shape ${n.shape}`);r=[n]}if(r=Ux(r),e!=null)for(let i=0;i<t.length;++i){if(e[i]==null)continue;const a=r[i];if(a.shape.length!==e[i].length)throw new M(`Error when checking ${o}: expected ${t[i]} to have ${e[i].length} dimension(s). but got array with shape ${a.shape}`);for(let l=0;l<e[i].length;++l){if(l===0&&!s)continue;const c=a.shape[l],u=e[i][l];if(u!=null&&u>=0&&c!==u)throw new M(`${o} expected a batch of elements where each example has shape [${e[i].slice(1,e[i].length)}] (i.e.,tensor shape [*,${e[i].slice(1,e[i].length)}]) but the ${o} received an input with ${a.shape[0]} examples, each with shape [${a.shape.slice(1,a.shape.length)}] (tensor shape [${a.shape}])`)}}return r}function nR(n,t,e){const s=zs(n.map(r=>r.shape[0]));s.sort();const o=zs(t.map(r=>r.shape[0]));if(o.sort(),s.length>1)throw new M(`All input Tensors (x) should have the same number of samples. Got array shapes: ${JSON.stringify(n.map(r=>r.shape))}`);if(o.length>1)throw new M(`All target Tensors (y) should have the same number of samples. Got array shapes: ${JSON.stringify(t.map(r=>r.shape))}`);if(s.length>0&&o.length>0&&!Bt(s,o))throw new M(`Input Tensors should have the same number of samples as target Tensors. Found ${s[0]} input sample(s) and ${o[0]} target sample(s).`)}function sR(n,t,e){const s=[hc,pc,Qi];for(let o=0;o<n.length;++o){const r=n[o],i=t[o],a=e[o];if(i!=null){if(i===Qi&&r.shape[r.shape.length-1]===1)throw new M(`You are passing a target array of shape ${r.shape} while using a loss 'categorical_crossentropy'. 'categorical_crossentropy'expects targets to be binary matrices (1s and 0s) of shape [samples, classes].`);if(s.indexOf(i)!==-1){const l=r.shape.slice(1),c=a.slice(1);for(let u=0;u<l.length;++u){const h=l[u],d=c[u];if(d!=null&&h!==d)throw new M(`A target Tensor with shape ${r.shape} was passed for an output of shape ${a}, while using a loss function that expects targets to have the same shape as the output.`)}}}}}function qx(n,t,e,s=!0,o=""){let r;if(Array.isArray(n)){if(n.length!==t.length)throw new M(`Error when checking model ${o}: the Array of Tensors that you are passing to your model is not the size the the model expected. Expected to see ${t.length} Tensor(s), but instead got ${n.length} Tensors(s).`);r=n}else{if(t.length>1)throw new M(`The model expects ${t.length} ${o} Tensors, but only received one Tensor. Found: array with shape ${JSON.stringify(n.shape)}.`);r=[n]}if(e!=null)for(let i=0;i<t.length;++i){if(e[i]==null)continue;const a=r[i];if(a.shape.length!==e[i].length)throw new M(`Error when checking ${o}: expected ${t[i]} to have ${e[i].length} dimension(s), but got array with shape ${JSON.stringify(a.shape)}`);for(let l=0;l<e[i].length;++l){if(l===0&&!s)continue;const c=a.shape[l],u=e[i][l];if(u!=null&&u!==c)throw new M(`Error when checking ${o}: expected ${t[i]} to have shape ${JSON.stringify(e[i])} but got array with shape ${JSON.stringify(a.shape)}.`)}}}function oR(n,t){if(n==null||Array.isArray(n)&&n.length===0)return t.map(s=>[]);let e;if(typeof n=="string"||typeof n=="function")e=[n];else if(Array.isArray(n)||typeof n=="object")e=n;else throw new TypeError(`Type of metrics argument not understood. Expected an string,function, Array, or Object, found: ${n}`);if(Array.isArray(e))return t.map(s=>e);{const s=[];for(const o of t){let r=e.hasOwnProperty(o)?e[o]:[];Array.isArray(r)||(r=[r]),s.push(r)}return s}}const rR="layers-model";class rr extends Gn{constructor(t){super(t),this.isTraining=!1}summary(t,e,s=console.log){if(!this.built)throw new M("This model has never been called, thus its weights have not been created yet. So no summary can be displayed. Build the model first (e.g., by calling it on some test data).");VE(this,t,e,s)}compile(t){if(t.loss==null&&(t.loss=[]),this.loss=t.loss,typeof t.optimizer=="string")this.optimizer_=zE(t.optimizer),this.isOptimizerOwned=!0;else{if(!(t.optimizer instanceof Bs))throw new M("User-defined optimizer must be an instance of tf.Optimizer.");this.optimizer_=t.optimizer,this.isOptimizerOwned=!1}let e=[];if(!Array.isArray(t.loss)&&typeof t.loss!="string"&&typeof t.loss!="function"){t.loss=t.loss;for(const i in t.loss)if(this.outputNames.indexOf(i)===-1)throw new M(`Unknown entry in loss dictionary: "${i}". Only expected the following keys: ${this.outputNames}`);for(const i of this.outputNames)t.loss[i]==null&&console.warn(`Output "${i}" is missing from loss dictionary. We assume this was done on purpose, and we will not be expecting data to be passed to ${i} during training`),e.push(Gd(t.loss[i]))}else if(Array.isArray(t.loss)){if(t.loss.length!==this.outputs.length)throw new M(`When passing an Array as loss, it should have one entry per model output. The model has ${this.outputs.length} output(s), but you passed loss=${t.loss}.`);e=t.loss.map(a=>Gd(a))}else{const i=Gd(t.loss);this.outputs.forEach(a=>{e.push(i)})}this.lossFunctions=e,this.feedOutputNames=[],this.feedOutputShapes=[],this.feedLossFns=[];for(let i=0;i<this.outputs.length;++i){const a=this.internalOutputShapes[i],l=this.outputNames[i];this.feedOutputNames.push(l),this.feedOutputShapes.push(a),this.feedLossFns.push(this.lossFunctions[i])}const s=[];this.metrics=t.metrics,this.metricsNames=["loss"],this.metricsTensors=[],vo("loss",()=>{for(let i=0;i<this.outputs.length;++i){if(s.indexOf(i)!==-1)continue;const a=this.lossFunctions[i];this.outputs.length>1&&(this.metricsTensors.push([a,i]),this.metricsNames.push(this.outputNames[i]+"_loss"))}});const o=oR(t.metrics,this.outputNames),r=(i,a,l)=>{this.outputNames.length>1&&(a=this.outputNames[i]+"_"+a),this.metricsNames.push(a),this.metricsTensors.push([l,i])};vo("metric",()=>{for(let i=0;i<this.outputs.length;++i){if(s.indexOf(i)!==-1)continue;const a=o[i];(c=>{let h,d,p;for(const f of c){if(typeof f=="string"&&["accuracy","acc","crossentropy","ce"].indexOf(f)!==-1){const g=this.internalOutputShapes[i];g[g.length-1]===1||this.lossFunctions[i]===pc?["accuracy","acc"].indexOf(f)!==-1?d=Rx:["crossentropy","ce"].indexOf(f)!==-1&&(d=RE):this.lossFunctions[i]===dc?["accuracy","acc"].indexOf(f)!==-1?d=AE:["crossentropy","ce"].indexOf(f)!==-1&&(d=Fx):["accuracy","acc"].indexOf(f)!==-1?d=Ax:["crossentropy","ce"].indexOf(f)!==-1&&(d=Dx);let x;["accuracy","acc"].indexOf(f)!==-1?x="acc":["crossentropy","ce"].indexOf(f)!==-1&&(x="ce"),p=d,h=""+x}else p=BE(f),h=""+gc(f);let m;vo(h,()=>{m=p}),r(i,h,m)}})(a)}}),this.collectedTrainableWeights=this.trainableWeights}checkTrainableWeightsConsistency(){this.collectedTrainableWeights!=null&&this.trainableWeights.length!==this.collectedTrainableWeights.length&&console.warn("Discrepancy between trainableweights and collected trainable weights. Did you set `model.trainable` without calling `model.compile()` afterwards?")}evaluate(t,e,s={}){const o=s.batchSize==null?32:s.batchSize;Kd(o);const i=this.standardizeUserDataXY(t,e,!0,o);try{const a=i[0].concat(i[1]);this.makeTestFunction();const l=this.testFunction,c=this.testLoop(l,a,o,s.verbose,s.steps);return sn(c)}finally{Hn(i[0],t),Hn(i[1],e)}}evaluateDataset(t,e){return Z(this,null,function*(){return this.makeTestFunction(),tR(this,t,e)})}checkNumSamples(t,e,s,o="steps"){let r;if(s!=null){if(r=null,e!=null)throw new M(`If ${o} is set, batchSize must be null or undefined.Got batchSize = ${e}`)}else if(t!=null)Array.isArray(t)?r=t[0].shape[0]:r=t.shape[0];else throw new M(`Either the input data should have a defined shape, or ${o} shoud be specified.`);return r}execute(t,e){if(Array.isArray(e)&&e.length===0)throw new M("`outputs` is an empty Array, which is not allowed.");const s=Array.isArray(e),o=s?e:[e],r=this.retrieveSymbolicTensors(o),i=new Us;if(t instanceof me&&(t=[t]),Array.isArray(t)){if(t.length!==this.inputs.length)throw new M(`The number of inputs provided (${t.length}) does not match the number of inputs of this model (${this.inputs.length}).`);for(let l=0;l<this.inputs.length;++l)i.add(this.inputs[l],t[l])}else for(const l of this.inputs){const c=t[l.name];if(c==null)throw new M(`No value is provided for the model's input ${l.name}`);i.add(l,c)}const a=ji(r,i);return s?a:a[0]}retrieveSymbolicTensors(t){const e=Co(null,t.length);let s=t.length;for(const o of this.layers){const r=Array.isArray(o.output)?o.output:[o.output],i=r.map(a=>a.name);for(let a=0;a<t.length;++a){const l=i.indexOf(t[a]);if(l!==-1&&(e[a]=r[l],s--),s===0)break}if(s===0)break}if(s>0){const o=[];throw e.forEach((r,i)=>{r==null&&o.push(t[i])}),new M(`Cannot find SymbolicTensors for output name(s): ${JSON.stringify(o)}`)}return e}predictLoop(t,e=32,s=!1){return U(()=>{const o=this.checkNumSamples(t);if(s)throw new vt("Verbose predictLoop() is not implemented yet.");const r=Yd(o,e),i=this.outputs.map(a=>[]);for(let a=0;a<r.length;++a)U(()=>{const c=r[a][0],u=r[a][1],h=Ji(t,c,u),d=[];if(Array.isArray(h))for(let f=0;f<h.length;++f)d.push({key:this.inputs[f],value:h[f]});else d.push({key:this.inputs[0],value:h});const p=new Us(d);return ji(this.outputs,p)}).forEach((c,u)=>i[u].push(c));return sn(i.map(a=>en(a,0)))})}predict(t,e={}){const s=Ux(t);qx(s,this.inputNames,this.feedInputShapes,!1);try{const o=e.batchSize==null?32:e.batchSize;return Kd(o),this.predictLoop(s,o)}finally{Hn(s,t)}}predictOnBatch(t){qx(t,this.inputNames,this.feedInputShapes,!0);const e=(Array.isArray(t)?t[0]:t).shape[0];return this.predictLoop(t,e)}standardizeUserDataXY(t,e,s=!0,o){if(this.optimizer_==null)throw new Sn("You must compile a model before training/testing. Use LayersModel.compile(modelCompileArgs).");const r=[];for(let i=0;i<this.feedOutputShapes.length;++i){const a=this.feedOutputShapes[i];this.feedLossFns[i]===dc?r.push(a.slice(0,a.length-1).concat([1])):r.push(a)}if(t=Hx(t,this.feedInputNames,this.feedInputShapes,!1,"input"),e=Hx(e,this.feedOutputNames,r,!1,"target"),nR(t,e),sR(e,this.feedLossFns,this.feedOutputShapes),this.stateful&&o!=null&&o>0&&t[0].shape[0]%o!==0)throw new M(`In a stateful network, you should only pass inputs with a number of samples that is divisible by the batch size ${o}. Found: ${t[0].shape[0]} sample(s).`);return[t,e]}standardizeUserData(t,e,s,o,r=!0,i){return Z(this,null,function*(){const[a,l]=this.standardizeUserDataXY(t,e,r,i);if(s!=null)throw new Error("sample weight is not supported yet.");let c=null;if(o!=null){const u=Px(o,this.outputNames);c=[];for(let h=0;h<u.length;++h)c.push(yield Bx(l[h],null,u[h]))}return[a,l,c]})}testLoop(t,e,s,o=0,r){return U(()=>{const i=this.checkNumSamples(e,s,r,"steps"),a=[];if(o>0)throw new vt("Verbose mode is not implemented yet.");if(r!=null)throw new vt("steps mode in testLoop() is not implemented yet");{const l=Yd(i,s),c=hn(Vn(0,i));for(let u=0;u<l.length;++u){const h=l[u][0],d=l[u][1],p=ko(c,h,d-h),f=jd(e,p),m=t(f);if(u===0)for(let g=0;g<m.length;++g)a.push(Vt(0));for(let g=0;g<m.length;++g){const x=m[g];a[g]=et(a[g],P(d-h,x))}}for(let u=0;u<a.length;++u)a[u]=gt(a[u],i)}return a})}getDedupedMetricsNames(){const t=this.metricsNames,e=[];for(let s=0;s<t.length;++s){const o=t[s];let r=o;if(jg(t,o)>1){const i=jg(t.slice(0,s),o);r+=`_${i}`}e.push(r)}return e}makeTrainFunction(){return t=>{const e=[],s=t.slice(0,this.inputs.length),o=t.slice(this.inputs.length,this.inputs.length+this.outputs.length),r=t.slice(this.inputs.length+this.outputs.length,this.inputs.length+this.outputs.length*2),i=[],a=()=>{const h=[];for(let m=0;m<this.inputs.length;++m)h.push({key:this.inputs[m],value:s[m]});const d=new Us(h),p=ji(this.outputs,d,{training:!0});let f;for(let m=0;m<this.lossFunctions.length;++m){const g=this.lossFunctions[m];let x=g(o[m],p[m]);r[m]!=null&&(x=KE(x,r[m]));const b=de(x);e.push(b),m===0?f=x:f=et(f,x)}for(let m=0;m<this.metricsTensors.length;++m){let g;if(this.outputs.length>1&&m<this.outputs.length)g=e[m];else{const x=this.metricsTensors[m][0],b=this.metricsTensors[m][1];g=de(x(o[b],p[b]))}Yn(g),i.push(g)}return f=de(f),this.calculateLosses().forEach(m=>{f=et(f,m)}),f},l=this.collectedTrainableWeights.map(h=>h.read());return[this.optimizer_.minimize(a,!0,l)].concat(i)}}makeTestFunction(){this.testFunction=t=>U(()=>{const e=[];let s;const o=t.slice(0,this.inputs.length),r=t.slice(this.inputs.length,this.inputs.length+this.outputs.length),i=[];for(let c=0;c<this.inputs.length;++c)i.push({key:this.inputs[c],value:o[c]});const a=new Us(i),l=ji(this.outputs,a);for(let c=0;c<this.lossFunctions.length;++c){const u=this.lossFunctions[c],h=de(u(r[c],l[c]));c===0?s=h:s=et(s,h),e.push(s)}for(let c=0;c<this.metricsTensors.length;++c){const u=this.metricsTensors[c][0],h=this.metricsTensors[c][1],d=de(u(r[h],l[h]));e.push(d)}return e})}fit(o,r){return Z(this,arguments,function*(t,e,s={}){if(this.isTraining)throw new Error("Cannot start training because another fit() call is ongoing.");this.isTraining=!0;let i,a,l,c,u,h,d,p,f;try{const m=s.batchSize==null?32:s.batchSize;Kd(m);const x=yield this.standardizeUserData(t,e,s.sampleWeight,s.classWeight,!1,m);i=x[0],a=x[1],f=x[2];let b=!1,y;if(s.validationData!=null&&s.validationData.length>0){if(b=!0,s.validationData.length===2)u=s.validationData[0],h=s.validationData[1];else throw s.validationData.length===3?new vt("validationData including sample weights is not supported yet."):new M(`When passing validation data, it must contain 2 (valX, valY) or 3 (valX, valY, valSampleWeight) items; ${s.validationData} is invalid.`);const E=yield this.standardizeUserData(u,h,null,null,!0,m);d=E[0],p=E[1],y=d.concat(p)}else if(s.validationSplit!=null&&s.validationSplit>0&&s.validationSplit<1){b=!0;const $=Math.floor(i[0].shape[0]*(1-s.validationSplit)),E=i[0].shape[0];d=Ji(i,$,E),l=i,i=Ji(i,0,$),p=Ji(a,$,E),c=a,a=Ji(a,0,$),y=d.concat(p)}else s.validationSteps!=null&&(b=!0);const w=i.concat(a).concat(f);this.checkTrainableWeightsConsistency();const C=this.makeTrainFunction(),I=this.getDedupedMetricsNames();let v,N;b?(this.makeTestFunction(),v=this.testFunction,N=I.slice().concat(I.map($=>"val_"+$))):(v=null,y=[],N=I.slice());const k=Nx(s.callbacks,s.yieldEvery);return yield this.fitLoop(C,w,I,m,s.epochs,s.verbose,k,v,y,s.shuffle,N,s.initialEpoch,null,null)}finally{this.isTraining=!1,Hn(i,t),Hn(a,e),Hn(l,t),Hn(c,e),Hn(d,u),Hn(p,h),f!=null&&Dt(f)}})}fitLoop(t,e,s,o,r,i,a,l,c,u,h,d,p,f){return Z(this,null,function*(){o==null&&(o=32),r==null&&(r=1),u==null&&(u=!0),d==null&&(d=0);let m=!1;if(l!=null&&c!=null&&(m=!0),f!=null&&(m=!0,p==null))throw new M("Can only use `validationSteps` when doing step-wise training, i.e., `stepsPerEpoch` must be set.");const g=this.checkNumSamples(e,o,p,"steps_per_epoch");let x;g!=null&&(x=Vn(0,g)),i==null&&(i=1);const{callbackList:b,history:y}=Tx(a,i,r,d,g,p,o,m,h);b.setModel(this),this.history=y,yield b.onTrainBegin(),this.stopTraining_=!1;for(let w=d;w<r;++w){yield b.onEpochBegin(w);const C={};if(p!=null)throw new vt("stepsPerEpoch mode is not implemented yet.");{if(u==="batch")throw new vt("batch shuffling is not implemneted yet");u&&nu(x);const I=hn(x),v=Yd(g,o);for(let N=0;N<v.length;++N){const k={};if(yield b.onBatchBegin(N,k),U(()=>{const S=v[N][0],$=v[N][1],E=ko(I,S,$-S);k.batch=N,k.size=$-S;const R=jd(e,E),F=t(R);for(let A=0;A<s.length;++A){const O=s[A],L=F[A];k[O]=L,Yn(L)}if(N===v.length-1&&m){const A=this.testLoop(l,c,o);for(let O=0;O<s.length;++O){const L=s[O],_=A[O];Yn(_),C["val_"+L]=_}}}),yield b.onBatchEnd(N,k),kx(k),this.stopTraining_)break}I.dispose()}if(yield b.onEpochEnd(w,C),this.stopTraining_)break}return yield b.onTrainEnd(),yield this.history.syncData(),this.history})}fitDataset(t,e){return Z(this,null,function*(){return ZE(this,t,e)})}trainOnBatch(t,e){return Z(this,null,function*(){const s=yield this.standardizeUserData(t,e),o=s[0],r=s[1],a=this.makeTrainFunction()(o.concat(r)),l=[];for(const c of a){const u=yield c.data();l.push(u[0])}return Dt(a),Hn(s[0],t),Hn(s[1],e),sn(l)})}getNamedWeights(t){const e=[],s=t!=null&&t.trainableOnly,o=s?this.trainableWeights:this.weights,r=this.getWeights(s);for(let i=0;i<o.length;++i)s&&!o[i].trainable||e.push({name:o[i].originalName,tensor:r[i]});return e}set stopTraining(t){this.stopTraining_=t}get stopTraining(){return this.stopTraining_}get optimizer(){return this.optimizer_}set optimizer(t){this.optimizer_!==t&&(this.optimizer_=t,this.isOptimizerOwned=!1)}dispose(){const t=super.dispose();if(t.refCountAfterDispose===0&&this.optimizer!=null&&this.isOptimizerOwned){const e=Kf().numTensors;this.optimizer_.dispose(),t.numDisposedVariables+=e-Kf().numTensors}return t}getLossIdentifiers(){let t;if(typeof this.loss=="string")t=Cs(this.loss);else if(Array.isArray(this.loss)){for(const e of this.loss)if(typeof e!="string")throw new Error("Serialization of non-string loss is not supported.");t=this.loss.map(e=>Cs(e))}else{const e=Object.keys(this.loss);t={};const s=this.loss;for(const o of e)if(typeof s[o]=="string")t[o]=Cs(s[o]);else throw new Error("Serialization of non-string loss is not supported.")}return t}getMetricIdentifiers(){if(typeof this.metrics=="string"||typeof this.metrics=="function")return[Cs(gc(this.metrics))];if(Array.isArray(this.metrics))return this.metrics.map(t=>Cs(gc(t)));{const t={};for(const e in this.metrics)t[e]=Cs(gc(this.metrics[e]));return t}}getTrainingConfig(){return{loss:this.getLossIdentifiers(),metrics:this.getMetricIdentifiers(),optimizer_config:{class_name:this.optimizer.getClassName(),config:this.optimizer.getConfig()}}}loadTrainingConfig(t){if(t.weighted_metrics!=null)throw new Error("Loading weight_metrics is not supported yet.");if(t.loss_weights!=null)throw new Error("Loading loss_weights is not supported yet.");if(t.sample_weight_mode!=null)throw new Error("Loading sample_weight_mode is not supported yet.");const e=qd(t.optimizer_config),s=$s(e);let o;if(typeof t.loss=="string")o=$o(t.loss);else if(Array.isArray(t.loss))o=t.loss.map(i=>$o(i));else if(t.loss!=null){o={};for(const i in t.loss)o[i]=$o(t.loss[i])}let r;if(Array.isArray(t.metrics))r=t.metrics.map(i=>$o(i));else if(t.metrics!=null){r={};for(const i in t.metrics)r[i]=$o(t.metrics[i])}this.compile({loss:o,metrics:r,optimizer:s})}save(t,e){return Z(this,null,function*(){if(typeof t=="string"){const c=AC(t);if(c.length===0)throw new M(`Cannot find any save handlers for URL '${t}'`);if(c.length>1)throw new M(`Found more than one (${c.length}) save handlers for URL '${t}'`);t=c[0]}if(t.save==null)throw new M("LayersModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");const s=yield Qf(this.getNamedWeights(e)),a={modelTopology:this.toJSON(null,!1),format:rR,generatedBy:`TensorFlow.js tfjs-layers v${Lx}`,convertedBy:null};if((e==null?!1:e.includeOptimizer)&&this.optimizer!=null){a.trainingConfig=this.getTrainingConfig();const c="optimizer",{data:u,specs:h}=yield Qf(yield this.optimizer.getWeights(),c);s.specs.push(...h),s.data=TC([s.data,u])}return this.userDefinedMetadata!=null&&(Ox(this.userDefinedMetadata,this.name,!0),a.userDefinedMetadata=this.userDefinedMetadata),a.weightData=s.data,a.weightSpecs=s.specs,t.save(a)})}setUserDefinedMetadata(t){Ox(t,this.name),this.userDefinedMetadata=t}getUserDefinedMetadata(){return this.userDefinedMetadata}}rr.className="Model",Q(rr);class Xx extends rr{}Xx.className="Functional",Q(Xx);class ta extends rr{constructor(t){if(super({inputs:[],outputs:[]}),t=t||{},this.trainable=!0,this.built=!1,this.name=t.name!=null?t.name:nc("sequential_"),t.layers!=null)for(const e of t.layers)this.add(e)}checkShape(t){if(t.inboundNodes[0].outputTensors[0].shape.some(s=>s<0))throw new M(`Negative dimension size caused by adding layer ${t.name} with input shape [${t.inboundNodes[0].inputTensors[0].shape}]`)}add(t){const e=t instanceof ta||t instanceof rr;let s;if(e){if(s=t,s.outputs.length!==1)throw new M("All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.");if(s.inputs.length!==1)throw new M("All layers in a Sequential model should have a single input tensor. For multi-input layers, use the functional API.")}if(this.outputs.length===0){if(t.inboundNodes.length===0){if(t.batchInputShape==null)throw new M("The first layer in a Sequential model must get an `inputShape` or `batchInputShape` argument.");const o=lE({batchShape:t.batchInputShape,dtype:t.dtype,name:t.name+"_input"});t.apply(o)}if(e)this.outputs=s.outputs,this.inputs=s.inputs;else{if(t.inboundNodes.length!==1)throw new M(`A layer added to a Sequential model must not already be connected somewhere else. LayersModel received layer ${t.name} which has ${t.inboundNodes.length} pre-existing inbound connections.`);if(t.inboundNodes[0].outputTensors.length!==1)throw new M("All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.");this.checkShape(t),this.outputs=[t.inboundNodes[0].outputTensors[0]],this.inputs=xx(this.outputs[0])}this.inboundNodes=[],new ac({outboundLayer:this,inboundLayers:[],nodeIndices:[],tensorIndices:[],inputTensors:this.inputs,outputTensors:this.outputs,inputMasks:Co(null,this.inputs.length),outputMasks:[null],inputShapes:this.inputs.map(o=>o.shape),outputShapes:this.outputs[0].shape})}else{const o=t.apply(this.outputs[0]);if(Array.isArray(o))throw new TypeError("All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.");this.checkShape(t),this.outputs=[o],this.inboundNodes[0].outputTensors=this.outputs,this.inboundNodes[0].outputShapes=[this.outputs[0].shape]}this.layers.push(t),this.built=!1}pop(){if(this.layers.length===0)throw new TypeError("There are no layers in the model.");if(this.layers.pop(),this.layers.length===0)this.outputs=[],this.inboundNodes=[],this.outboundNodes=[];else{const t=this.layers.length-1;this.layers[t].outboundNodes=[],this.outputs=[this.layers[t].output],this.inboundNodes[0].outputTensors=this.outputs,this.inboundNodes[0].outputShapes=[this.outputs[0].shape]}}call(t,e){return this.model==null&&this.build(),this.model.call(t,e)}build(t){if(Lt(t),this.inputs.length===0||this.outputs.length===0)throw new TypeError("Sequential model cannot be built: model is empty. Add some layers first.");this.model=new rr({inputs:this.inputs,outputs:this.outputs[0],name:this.name+"_model"}),this.model.trainable=this.trainable,this.supportsMasking=this.model.supportsMasking,this.inputLayers=this.model.inputLayers,this.inputLayersNodeIndices=this.model.inputLayersNodeIndices,this.inputLayersTensorIndices=this.model.inputLayersTensorIndices,this.outputLayers=this.model.outputLayers,this.outputLayersNodeIndices=this.model.outputLayersNodeIndices,this.outputLayersTensorIndices=this.model.outputLayersTensorIndices,this.nodesByDepth=this.model.nodesByDepth,this.containerNodes=this.model.containerNodes,this.outputNames=this.model.outputNames,this.inputNames=this.model.inputNames,this.built=!0}countParams(){return this.built||this.build(),super.countParams()}summary(t,e,s=console.log){this.built||this.build(),super.summary(t,e,s)}setWeights(t){this.model==null&&this.build(),this.model.setWeights(t)}evaluate(t,e,s={}){if(!this.built)throw new Sn("The model needs to be compiled before being used.");return this.model.evaluate(t,e,s)}evaluateDataset(t,e){return Z(this,null,function*(){if(!this.built)throw new Sn("The model needs to be compiled before being used.");return this.model.evaluateDataset(t,e)})}predict(t,e={}){return this.model==null&&this.build(),this.model.predict(t,e)}predictOnBatch(t){return this.model==null&&this.build(),this.model.predictOnBatch(t)}compile(t){this.build(),this.model.compile(t),this.optimizer_=this.model.optimizer,this.isOptimizerOwned=this.model.isOptimizerOwned,this.loss=this.model.loss,this.metrics=this.model.metrics,this.metricsTensors=this.model.metricsTensors,this.metricsNames=this.model.metricsNames}get optimizer(){return this.model==null?void 0:this.model.optimizer}set optimizer(t){this.model.optimizer=t}fit(o,r){return Z(this,arguments,function*(t,e,s={}){if(!this.built)throw new Sn("The model needs to be compiled before being used.");return this.model.fit(t,e,s)})}fitDataset(t,e){return Z(this,null,function*(){if(!this.built)throw new Sn("The model needs to be compiled before being used.");return this.model.fitDataset(t,e)})}trainOnBatch(t,e){return Z(this,null,function*(){return this.model.trainOnBatch(t,e)})}static fromConfig(t,e,s={},o=!1){let r,i={};if(e instanceof Array){if(e[0].className==null||e[0].className==="Merge")throw new M("Legacy serialization format not supported yet.");r=e}else T(e.layers!=null,()=>"When the config data for a Sequential model is not an Array, it must be an Object that contains the 'layers' field."),r=e.layers,delete e.layers,i=e;const a=new t(i);if(!(a instanceof ta))throw new vt(`Sequential.fromConfig called on non-Sequential input: ${a}`);for(const l of r){const u=$s(l,void 0,o);o&&u.setFastWeightInitDuringBuild(!0),a.add(u)}return a}set stopTraining(t){if(this.model==null)throw new M("Cannot set the stopTraining property of a sequential model before it is compiled.");this.model.stopTraining=t}get stopTraining(){if(this.model==null)throw new M("Cannot get the stopTraining property of a sequential model before it is compiled.");return this.model.stopTraining}getConfig(){const t=[];for(const e of this.layers){const s={};s.className=e.getClassName(),s.config=e.getConfig(),t.push(s)}return{name:this.name,layers:t}}}ta.className="Sequential",Q(ta);let We=class extends er{getConfig(){return{}}};class Kx extends We{apply(t,e=1){return qT(t,e)}}Kx.className="elu",Q(Kx);class jx extends We{apply(t){return Pm(t)}}jx.className="selu",Q(jx);class Yx extends We{apply(t){return go(t)}}Yx.className="relu",Q(Yx);class Zx extends We{apply(t){return U(()=>Oi(6,go(t)))}}Zx.className="relu6",Q(Zx);class Qx extends We{apply(t){return t}}Qx.className="linear",Q(Qx);class Jx extends We{apply(t){return Yo(t)}}Jx.className="sigmoid",Q(Jx);class tb extends We{apply(t){return KT(t)}}tb.className="hardSigmoid",Q(tb);class eb extends We{apply(t){return _i(t)}}eb.className="softplus",Q(eb);class nb extends We{apply(t){return XT(t)}}nb.className="softsign",Q(nb);class sb extends We{apply(t){return Fl(t)}}sb.className="tanh",Q(sb);let Qd=class extends We{apply(t,e=-1){return Bh(t,e)}};Qd.className="softmax",Q(Qd);class ob extends We{apply(t,e=-1){return $m(t,e)}}ob.className="logSoftmax",Q(ob);class rb extends We{apply(t){return U(()=>U(()=>{const e=Math.sqrt(2),s=P(.5,et(1,xm(gt(t,e))));return P(t,s)}))}}rb.className="gelu",Q(rb);class ib extends We{apply(t){return U(()=>P(.5,P(t,et(1,Fl(P(Ve(gt(2,Math.PI)),et(t,P(.044715,fo(t,3)))))))))}}ib.className="gelu_new",Q(ib);class ab extends We{apply(t){return U(()=>P(t,Fl(_i(t))))}}ab.className="mish",Q(ab);class lb extends We{apply(t,e=1){return U(()=>P(Yo(P(t,e)),t))}}lb.className="swish",Q(lb);function Gs(n){return n.getClassName()}function Jd(n,t={}){return Ui(n,kn.getMap().classNameMap,t,"activation")}function Hs(n){if(n==null){const t={};return t.className="linear",t.config={},Jd(t)}if(typeof n=="string"){const t={};return t.className=n,t.config={},Jd(t)}else return n instanceof We?n:Jd(n)}function iR(n){if(n!=null&&typeof n!="object")throw new Error(`Argument to L1L2 regularizer's constructor is expected to be an object, but received: ${n}`)}class cb extends er{}class ub extends cb{constructor(t){super(),iR(t),this.l1=t==null||t.l1==null?.01:t.l1,this.l2=t==null||t.l2==null?.01:t.l2,this.hasL1=this.l1!==0,this.hasL2=this.l2!==0}apply(t){return U(()=>{let e=Se([1]);return this.hasL1&&(e=et(e,mt(P(this.l1,qe(t))))),this.hasL2&&(e=et(e,mt(P(this.l2,qi(t))))),z(e,[])})}getConfig(){return{l1:this.l1,l2:this.l2}}static fromConfig(t,e){return new t({l1:e.l1,l2:e.l2})}}ub.className="L1L2",Q(ub);const hb={l1l2:"L1L2"};function qt(n){return Id(n)}function db(n,t={}){return Ui(n,kn.getMap().classNameMap,t,"regularizer")}function Jt(n){if(n==null)return null;if(typeof n=="string"){const e={className:n in hb?hb[n]:n,config:{}};return db(e)}else return n instanceof cb?n:db(n)}class pb extends Rt{constructor(t){super(t==null?{}:t),this.supportsMasking=!0,t!=null&&(this.maxValue=t.maxValue)}call(t,e){t=wt(t);let s=go(t);return this.maxValue!=null&&(s=xn(s,0,this.maxValue)),s}computeOutputShape(t){return t}getConfig(){const t={maxValue:this.maxValue},e=super.getConfig();return Object.assign(t,e),t}}pb.className="ReLU",Q(pb);class fb extends Rt{constructor(t){super(t==null?{}:t),this.DEFAULT_ALPHA=.3,t==null&&(t={}),this.alpha=t.alpha==null?this.DEFAULT_ALPHA:t.alpha}call(t,e){const s=wt(t);return Th(s,this.alpha)}computeOutputShape(t){return t}getConfig(){const t={alpha:this.alpha},e=super.getConfig();return Object.assign(t,e),t}}fb.className="LeakyReLU",Q(fb);class mb extends Rt{constructor(t){if(super(t==null?{}:t),this.DEFAULT_ALPHA_INITIALIZER="zeros",t==null&&(t={}),this.supportsMasking=!0,this.alphaInitializer=Qt(t.alphaInitializer||this.DEFAULT_ALPHA_INITIALIZER),this.alphaRegularizer=Jt(t.alphaRegularizer),this.alphaConstraint=we(t.alphaConstraint),t.sharedAxes==null)this.sharedAxes=null;else if(Array.isArray(t.sharedAxes))this.sharedAxes=t.sharedAxes;else if(typeof t.sharedAxes=="number")this.sharedAxes=[t.sharedAxes];else throw new M(`Expected sharedAxes to be a number or an array of numbers, but got ${t.sharedAxes}`)}build(t){t=Lt(t);const e=t.slice(1);if(this.sharedAxes!=null)for(const o of this.sharedAxes)e[o-1]=1;this.alpha=this.addWeight("alpha",e,"float32",this.alphaInitializer,this.alphaRegularizer,!0,this.alphaConstraint);const s={};if(this.sharedAxes!=null)for(let o=1;o<t.length;++o)s[o]=t[o];this.inputSpec=[new be({ndim:t.length,axes:s})],this.built=!0}call(t,e){return t=wt(t),_h(t,this.alpha.read())}getConfig(){const t={alphaInitializer:ne(this.alphaInitializer),alphaRegularizer:qt(this.alphaRegularizer),alphaConstraint:ye(this.alphaConstraint),sharedAxes:this.sharedAxes},e=super.getConfig();return Object.assign(t,e),t}}mb.className="PReLU",Q(mb);let gb=class extends Rt{constructor(t){if(super(t==null?{}:t),this.DEFAULT_ALPHA=1,t==null&&(t={}),t.alpha!=null&&t.alpha!==this.DEFAULT_ALPHA)throw new vt(`Non-default alpha value (${t.alpha}) is not supported by the ELU layer yet.`);this.alpha=t.alpha==null?this.DEFAULT_ALPHA:t.alpha}call(t,e){const s=wt(t);return Ml(s)}computeOutputShape(t){return t}getConfig(){const t={alpha:this.alpha},e=super.getConfig();return Object.assign(t,e),t}};gb.className="ELU",Q(gb);class xb extends Rt{constructor(t){super(t==null?{}:t),this.DEFAULT_THETA=1,t==null&&(t={}),this.theta=t.theta==null?this.DEFAULT_THETA:t.theta}call(t,e){const s=wt(t);return P(s,at(bn(s,this.theta),"float32"))}computeOutputShape(t){return t}getConfig(){const t={theta:this.theta},e=super.getConfig();return Object.assign(t,e),t}}xb.className="ThresholdedReLU",Q(xb);class bb extends Rt{constructor(t){super(t==null?{}:t),this.DEFAULT_AXIS=1,t==null&&(t={}),this.softmax=new Qd().apply,this.axis=t.axis==null?this.DEFAULT_AXIS:t.axis}call(t,e){return U(()=>{let s=wt(t);const o=e.mask;if(o!=null){const r=P(yt(Ps(s.shape),at(o,s.dtype)),Vt(-1e9));s=et(s,r)}return this.axis instanceof Array?this.axis.length>1?Jn(yt(s,Im(s,this.axis,!0))):this.softmax(s,this.axis[0]):this.softmax(s,this.axis)})}computeOutputShape(t){return t}getConfig(){const t={axis:this.axis},e=super.getConfig();return Object.assign(t,e),t}}bb.className="Softmax",Q(bb);function ir(n,t,e){if(typeof n=="number")return Co(n,t);if(n.length!==t)throw new M(`The ${e} argument must be an integer or tuple of ${t} integers. Received: ${n.length} elements.`);for(let s=0;s<t;++s){const o=n[s];if(!WT(o))throw new M(`The ${e} argument must be an integer or tuple of ${t} integers. Received: ${JSON.stringify(n)} including a non-integer number ${o}`)}return n}function qn(n,t,e,s,o=1){if(n==null)return n;const r=t+(t-1)*(o-1);let i;return e==="same"?i=n:i=n-r+1,Math.floor((i+s-1)/s)}function as(n,t,e,s){if(n==null)return null;if(s==="valid")n=n*t+Ws([e-t,0]);else if(s==="same")n=n*t;else throw new M(`Unsupport padding mode: ${s}.`);return n}function tp(n,t){return U(()=>(le(t),t==="channelsFirst"?Ot(n,[0,2,3,1]):n))}function yb(n,t){return U(()=>(le(t),t==="channelsFirst"?Ot(n,[0,2,3,4,1]):n))}function aR(n,t,e,s=1,o="valid",r,i=1){return U(()=>{if(r==null&&(r=Wn()),le(r),n.shape.length!==3)throw new M(`The input of a conv1dWithBias operation should be 3, but is ${n.shape.length} instead.`);if(t.shape.length!==3)throw new M(`The kernel for a conv1dWithBias operation should be 3, but is ${t.shape.length} instead`);if(e!=null&&e.shape.length!==1)throw new M(`The bias for a conv1dWithBias operation should be 1, but is ${e.shape.length} instead`);if(r==="channelsFirst"&&(n=Ot(n,[0,2,1])),o==="causal")throw new vt("The support for CAUSAL padding mode in conv1dWithBias is not implemented yet.");let a=hm(n,t,s,o==="same"?"same":"valid","NWC",i);return e!=null&&(a=Un(a,e)),a})}function wb(n,t,e,s=[1,1],o="valid",r,i,a=null){return U(()=>{if(r==null&&(r=Wn()),le(r),n.rank!==3&&n.rank!==4)throw new M(`conv2dWithBiasActivation expects input to be of rank 3 or 4, but received ${n.rank}.`);if(t.rank!==3&&t.rank!==4)throw new M(`conv2dWithBiasActivation expects kernel to be of rank 3 or 4, but received ${n.rank}.`);let l=tp(n,r);if(o==="causal")throw new vt("The support for CAUSAL padding mode in conv1dWithBias is not implemented yet.");return l=lS({x:l,filter:t,strides:s,pad:o==="same"?"same":"valid",dilations:i,dataFormat:"NHWC",bias:e,activation:a}),r==="channelsFirst"&&(l=Ot(l,[0,3,1,2])),l})}function lR(n,t,e,s=[1,1,1],o="valid",r,i){return U(()=>{if(r==null&&(r=Wn()),le(r),n.rank!==4&&n.rank!==5)throw new M(`conv3dWithBias expects input to be of rank 4 or 5, but received ${n.rank}.`);if(t.rank!==4&&t.rank!==5)throw new M(`conv3dWithBias expects kernel to be of rank 4 or 5, but received ${n.rank}.`);let a=yb(n,r);if(o==="causal")throw new vt("The support for CAUSAL padding mode in conv3dWithBias is not implemented yet.");return a=iI(a,t,s,o==="same"?"same":"valid","NDHWC",i),e!=null&&(a=Un(a,e)),r==="channelsFirst"&&(a=Ot(a,[0,4,1,2,3])),a})}class bc extends Rt{constructor(t,e){if(super(e),this.bias=null,this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_BIAS_INITIALIZER="zeros",bc.verifyArgs(e),this.rank=t,Ne(this.rank,"rank"),this.rank!==1&&this.rank!==2&&this.rank!==3)throw new vt(`Convolution layer for rank other than 1, 2, or 3 (${this.rank}) is not implemented yet.`);if(this.kernelSize=ir(e.kernelSize,t,"kernelSize"),this.strides=ir(e.strides==null?1:e.strides,t,"strides"),this.padding=e.padding==null?"valid":e.padding,wn(this.padding),this.dataFormat=e.dataFormat==null?"channelsLast":e.dataFormat,le(this.dataFormat),this.activation=Hs(e.activation),this.useBias=e.useBias==null?!0:e.useBias,this.biasInitializer=Qt(e.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.biasConstraint=we(e.biasConstraint),this.biasRegularizer=Jt(e.biasRegularizer),this.activityRegularizer=Jt(e.activityRegularizer),this.dilationRate=ir(e.dilationRate==null?1:e.dilationRate,t,"dilationRate"),this.rank===1&&Array.isArray(this.dilationRate)&&this.dilationRate.length!==1)throw new M(`dilationRate must be a number or an array of a single number for 1D convolution, but received ${JSON.stringify(this.dilationRate)}`);if(this.rank===2){if(typeof this.dilationRate=="number")this.dilationRate=[this.dilationRate,this.dilationRate];else if(this.dilationRate.length!==2)throw new M(`dilationRate must be a number or array of two numbers for 2D convolution, but received ${JSON.stringify(this.dilationRate)}`)}else if(this.rank===3){if(typeof this.dilationRate=="number")this.dilationRate=[this.dilationRate,this.dilationRate,this.dilationRate];else if(this.dilationRate.length!==3)throw new M(`dilationRate must be a number or array of three numbers for 3D convolution, but received ${JSON.stringify(this.dilationRate)}`)}}static verifyArgs(t){if(ss("kernelSize"in t,"required key 'kernelSize' not in config"),typeof t.kernelSize!="number"&&!kd(t.kernelSize,"number",1,3))throw new M(`BaseConv expects config.kernelSize to be number or number[] with length 1, 2, or 3, but received ${JSON.stringify(t.kernelSize)}.`)}getConfig(){const t={kernelSize:this.kernelSize,strides:this.strides,padding:this.padding,dataFormat:this.dataFormat,dilationRate:this.dilationRate,activation:Gs(this.activation),useBias:this.useBias,biasInitializer:ne(this.biasInitializer),biasRegularizer:qt(this.biasRegularizer),activityRegularizer:qt(this.activityRegularizer),biasConstraint:ye(this.biasConstraint)},e=super.getConfig();return Object.assign(t,e),t}}class ar extends bc{constructor(t,e){super(t,e),this.kernel=null,ar.verifyArgs(e),this.filters=e.filters,Ne(this.filters,"filters"),this.kernelInitializer=Qt(e.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.kernelConstraint=we(e.kernelConstraint),this.kernelRegularizer=Jt(e.kernelRegularizer)}build(t){t=Lt(t);const e=this.dataFormat==="channelsFirst"?1:t.length-1;if(t[e]==null)throw new M(`The channel dimension of the input should be defined. Found ${t[e]}`);const s=t[e],o=this.kernelSize.concat([s,this.filters]);this.kernel=this.addWeight("kernel",o,null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight("bias",[this.filters],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint)),this.inputSpec=[{ndim:this.rank+2,axes:{[e]:s}}],this.built=!0}call(t,e){return U(()=>{t=wt(t);let s;const o=this.bias==null?null:this.bias.read(),r=Zg(this.activation.getClassName());if(r!=null&&this.rank===2)s=wb(t,this.kernel.read(),o,this.strides,this.padding,this.dataFormat,this.dilationRate,r);else{if(this.rank===1)s=aR(t,this.kernel.read(),o,this.strides[0],this.padding,this.dataFormat,this.dilationRate[0]);else if(this.rank===2)s=wb(t,this.kernel.read(),o,this.strides,this.padding,this.dataFormat,this.dilationRate);else if(this.rank===3)s=lR(t,this.kernel.read(),o,this.strides,this.padding,this.dataFormat,this.dilationRate);else throw new vt("convolutions greater than 3D are not implemented yet.");this.activation!=null&&(s=this.activation.apply(s))}return s})}computeOutputShape(t){t=Lt(t);const e=[],s=this.dataFormat==="channelsLast"?t.slice(1,t.length-1):t.slice(2);for(let r=0;r<s.length;++r){const i=qn(s[r],this.kernelSize[r],this.padding,this.strides[r],typeof this.dilationRate=="number"?this.dilationRate:this.dilationRate[r]);e.push(i)}let o=[t[0]];return this.dataFormat==="channelsLast"?(o=o.concat(e),o.push(this.filters)):(o.push(this.filters),o=o.concat(e)),o}getConfig(){const t={filters:this.filters,kernelInitializer:ne(this.kernelInitializer),kernelRegularizer:qt(this.kernelRegularizer),kernelConstraint:ye(this.kernelConstraint)},e=super.getConfig();return Object.assign(t,e),t}static verifyArgs(t){if(!("filters"in t)||typeof t.filters!="number"||t.filters<1)throw new M(`Convolution layer expected config.filters to be a 'number' > 0 but got ${JSON.stringify(t.filters)}`)}}class ea extends ar{constructor(t){super(2,t),ea.verifyArgs(t)}getConfig(){const t=super.getConfig();return delete t.rank,t}static verifyArgs(t){if(typeof t.kernelSize!="number"&&!kd(t.kernelSize,"number",1,2))throw new M(`Conv2D expects config.kernelSize to be number or number[] with length 1 or 2, but received ${JSON.stringify(t.kernelSize)}.`)}}ea.className="Conv2D",Q(ea);class na extends ar{constructor(t){super(3,t),na.verifyArgs(t)}getConfig(){const t=super.getConfig();return delete t.rank,t}static verifyArgs(t){if(typeof t.kernelSize!="number"&&!(Array.isArray(t.kernelSize)&&(t.kernelSize.length===1||t.kernelSize.length===3)))throw new M(`Conv3D expects config.kernelSize to be number or [number, number, number], but received ${JSON.stringify(t.kernelSize)}.`)}}na.className="Conv3D",Q(na);class Cb extends ea{constructor(t){if(super(t),this.inputSpec=[new be({ndim:4})],this.padding!=="same"&&this.padding!=="valid")throw new M(`Conv2DTranspose currently supports only padding modes 'same' and 'valid', but received padding mode ${this.padding}`)}build(t){if(t=Lt(t),t.length!==4)throw new M("Input should have rank 4; Received input shape: "+JSON.stringify(t));const e=this.dataFormat==="channelsFirst"?1:t.length-1;if(t[e]==null)throw new M("The channel dimension of the inputs should be defined. Found `None`.");const s=t[e],o=this.kernelSize.concat([this.filters,s]);this.kernel=this.addWeight("kernel",o,"float32",this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight("bias",[this.filters],"float32",this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint)),this.inputSpec=[new be({ndim:4,axes:{[e]:s}})],this.built=!0}call(t,e){return U(()=>{let s=wt(t);if(s.shape.length!==4)throw new M(`Conv2DTranspose.call() expects input tensor to be rank-4, but received a tensor of rank-${s.shape.length}`);const o=s.shape,r=o[0];let i,a;this.dataFormat==="channelsFirst"?(i=2,a=3):(i=1,a=2);const l=o[i],c=o[a],u=this.kernelSize[0],h=this.kernelSize[1],d=this.strides[0],p=this.strides[1],f=as(l,d,u,this.padding),m=as(c,p,h,this.padding),g=[r,f,m,this.filters];this.dataFormat!=="channelsLast"&&(s=Ot(s,[0,2,3,1]));let x=dm(s,this.kernel.read(),g,this.strides,this.padding);return this.dataFormat!=="channelsLast"&&(x=Ot(x,[0,3,1,2])),this.bias!=null&&(x=Un(x,this.bias.read(),this.dataFormat)),this.activation!=null&&(x=this.activation.apply(x)),x})}computeOutputShape(t){t=Lt(t);const e=t.slice();let s,o,r;this.dataFormat==="channelsFirst"?(s=1,o=2,r=3):(s=3,o=1,r=2);const i=this.kernelSize[0],a=this.kernelSize[1],l=this.strides[0],c=this.strides[1];return e[s]=this.filters,e[o]=as(e[o],l,i,this.padding),e[r]=as(e[r],c,a,this.padding),e}getConfig(){const t=super.getConfig();return delete t.dilationRate,t}}Cb.className="Conv2DTranspose",Q(Cb);class $b extends na{constructor(t){if(super(t),this.inputSpec=[new be({ndim:5})],this.padding!=="same"&&this.padding!=="valid")throw new M(`Conv3DTranspose currently supports only padding modes 'same' and 'valid', but received padding mode ${this.padding}`)}build(t){if(t=Lt(t),t.length!==5)throw new M("Input should have rank 5; Received input shape: "+JSON.stringify(t));const e=this.dataFormat==="channelsFirst"?1:t.length-1;if(t[e]==null)throw new M("The channel dimension of the inputs should be defined. Found `None`.");const s=t[e],o=this.kernelSize.concat([this.filters,s]);this.kernel=this.addWeight("kernel",o,"float32",this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight("bias",[this.filters],"float32",this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint)),this.inputSpec=[new be({ndim:5,axes:{[e]:s}})],this.built=!0}call(t,e){return U(()=>{let s=wt(t);if(s.shape.length!==5)throw new M(`Conv3DTranspose.call() expects input tensor to be rank-4, but received a tensor of rank-${s.shape.length}`);const o=s.shape,r=o[0];let i,a,l;this.dataFormat==="channelsFirst"?(l=2,i=3,a=4):(l=1,i=2,a=3);const c=o[l],u=o[i],h=o[a],d=this.kernelSize[0],p=this.kernelSize[1],f=this.kernelSize[2],m=this.strides[0],g=this.strides[1],x=this.strides[2],b=as(c,m,d,this.padding),y=as(u,g,p,this.padding),w=as(h,x,f,this.padding),C=[r,b,y,w,this.filters];this.dataFormat!=="channelsLast"&&(s=Ot(s,[0,2,3,4,1]));let I=cI(s,this.kernel.read(),C,this.strides,this.padding);return this.dataFormat!=="channelsLast"&&(I=Ot(I,[0,4,1,2,3])),this.bias!==null&&(I=Un(I,this.bias.read(),this.dataFormat)),this.activation!==null&&(I=this.activation.apply(I)),I})}computeOutputShape(t){t=Lt(t);const e=t.slice();let s,o,r,i;this.dataFormat==="channelsFirst"?(s=1,o=2,r=3,i=4):(s=4,o=1,r=2,i=3);const a=this.kernelSize[0],l=this.kernelSize[1],c=this.kernelSize[2],u=this.strides[0],h=this.strides[1],d=this.strides[2];return e[s]=this.filters,e[o]=as(e[o],u,a,this.padding),e[r]=as(e[r],h,l,this.padding),e[i]=as(e[i],d,c,this.padding),e}getConfig(){const t=super.getConfig();return delete t.dilationRate,t}}$b.className="Conv3DTranspose",Q($b);class Ib extends ar{constructor(t,e){if(super(t,e),this.DEFAULT_DEPTHWISE_INITIALIZER="glorotUniform",this.DEFAULT_POINTWISE_INITIALIZER="glorotUniform",this.depthwiseKernel=null,this.pointwiseKernel=null,e.filters==null)throw new M("The `filters` configuration field is required by SeparableConv, but is unspecified.");if(e.kernelInitializer!=null||e.kernelRegularizer!=null||e.kernelConstraint!=null)throw new M("Fields kernelInitializer, kernelRegularizer and kernelConstraint are invalid for SeparableConv2D. Use depthwiseInitializer, depthwiseRegularizer, depthwiseConstraint, pointwiseInitializer, pointwiseRegularizer and pointwiseConstraint instead.");if(e.padding!=null&&e.padding!=="same"&&e.padding!=="valid")throw new M(`SeparableConv${this.rank}D supports only padding modes: 'same' and 'valid', but received ${JSON.stringify(e.padding)}`);this.depthMultiplier=e.depthMultiplier==null?1:e.depthMultiplier,this.depthwiseInitializer=Qt(e.depthwiseInitializer||this.DEFAULT_DEPTHWISE_INITIALIZER),this.depthwiseRegularizer=Jt(e.depthwiseRegularizer),this.depthwiseConstraint=we(e.depthwiseConstraint),this.pointwiseInitializer=Qt(e.depthwiseInitializer||this.DEFAULT_POINTWISE_INITIALIZER),this.pointwiseRegularizer=Jt(e.pointwiseRegularizer),this.pointwiseConstraint=we(e.pointwiseConstraint)}build(t){if(t=Lt(t),t.length<this.rank+2)throw new M(`Inputs to SeparableConv${this.rank}D should have rank ${this.rank+2}, but received input shape: ${JSON.stringify(t)}`);const e=this.dataFormat==="channelsFirst"?1:t.length-1;if(t[e]==null||t[e]<0)throw new M(`The channel dimension of the inputs should be defined, but found ${JSON.stringify(t[e])}`);const s=t[e],o=this.kernelSize.concat([s,this.depthMultiplier]),r=[];for(let a=0;a<this.rank;++a)r.push(1);r.push(s*this.depthMultiplier,this.filters);const i=!0;this.depthwiseKernel=this.addWeight("depthwise_kernel",o,"float32",this.depthwiseInitializer,this.depthwiseRegularizer,i,this.depthwiseConstraint),this.pointwiseKernel=this.addWeight("pointwise_kernel",r,"float32",this.pointwiseInitializer,this.pointwiseRegularizer,i,this.pointwiseConstraint),this.useBias?this.bias=this.addWeight("bias",[this.filters],"float32",this.biasInitializer,this.biasRegularizer,i,this.biasConstraint):this.bias=null,this.inputSpec=[new be({ndim:this.rank+2,axes:{[e]:s}})],this.built=!0}call(t,e){return U(()=>{t=wt(t);let s;if(this.rank===1)throw new vt("1D separable convolution is not implemented yet.");return this.rank===2&&(this.dataFormat==="channelsFirst"&&(t=Ot(t,[0,2,3,1])),s=Bm(t,this.depthwiseKernel.read(),this.pointwiseKernel.read(),this.strides,this.padding,this.dilationRate,"NHWC")),this.useBias&&(s=Un(s,this.bias.read(),this.dataFormat)),this.activation!=null&&(s=this.activation.apply(s)),this.dataFormat==="channelsFirst"&&(s=Ot(s,[0,3,1,2])),s})}getConfig(){const t=super.getConfig();return delete t.rank,delete t.kernelInitializer,delete t.kernelRegularizer,delete t.kernelConstraint,t.depthwiseInitializer=ne(this.depthwiseInitializer),t.pointwiseInitializer=ne(this.pointwiseInitializer),t.depthwiseRegularizer=qt(this.depthwiseRegularizer),t.pointwiseRegularizer=qt(this.pointwiseRegularizer),t.depthwiseConstraint=ye(this.depthwiseConstraint),t.pointwiseConstraint=ye(this.pointwiseConstraint),t}}Ib.className="SeparableConv";class vb extends Ib{constructor(t){super(2,t)}}vb.className="SeparableConv2D",Q(vb);class yc extends ar{constructor(t){super(1,t),yc.verifyArgs(t),this.inputSpec=[{ndim:3}]}getConfig(){const t=super.getConfig();return delete t.rank,delete t.dataFormat,t}static verifyArgs(t){if(typeof t.kernelSize!="number"&&!kd(t.kernelSize,"number",1,1))throw new M(`Conv1D expects config.kernelSize to be number or number[] with length 1, but received ${JSON.stringify(t.kernelSize)}.`)}}yc.className="Conv1D",Q(yc);class kb extends Rt{constructor(t){super(t),typeof t.cropping=="number"?this.cropping=[[t.cropping,t.cropping],[t.cropping,t.cropping]]:typeof t.cropping[0]=="number"?this.cropping=[[t.cropping[0],t.cropping[0]],[t.cropping[1],t.cropping[1]]]:this.cropping=t.cropping,this.dataFormat=t.dataFormat===void 0?"channelsLast":t.dataFormat,this.inputSpec=[{ndim:4}]}computeOutputShape(t){return this.dataFormat==="channelsFirst"?[t[0],t[1],t[2]-this.cropping[0][0]-this.cropping[0][1],t[3]-this.cropping[1][0]-this.cropping[1][1]]:[t[0],t[1]-this.cropping[0][0]-this.cropping[0][1],t[2]-this.cropping[1][0]-this.cropping[1][1],t[3]]}call(t,e){return U(()=>{if(t=wt(t),this.dataFormat==="channelsLast"){const s=sc(t,this.cropping[0][0],t.shape[1]-this.cropping[0][0]-this.cropping[0][1],2);return sc(s,this.cropping[1][0],t.shape[2]-this.cropping[1][1]-this.cropping[1][0],3)}else{const s=sc(t,this.cropping[0][0],t.shape[2]-this.cropping[0][0]-this.cropping[0][1],3);return sc(s,this.cropping[1][0],t.shape[3]-this.cropping[1][1]-this.cropping[1][0],4)}})}getConfig(){const t={cropping:this.cropping,dataFormat:this.dataFormat},e=super.getConfig();return Object.assign(t,e),t}}kb.className="Cropping2D",Q(kb);class Sb extends Rt{constructor(t){super(t),this.DEFAULT_SIZE=[2,2],this.inputSpec=[{ndim:4}],this.size=t.size==null?this.DEFAULT_SIZE:t.size,this.dataFormat=t.dataFormat==null?"channelsLast":t.dataFormat,le(this.dataFormat),this.interpolation=t.interpolation==null?"nearest":t.interpolation,BT(this.interpolation)}computeOutputShape(t){if(this.dataFormat==="channelsFirst"){const e=t[2]==null?null:this.size[0]*t[2],s=t[3]==null?null:this.size[1]*t[3];return[t[0],t[1],e,s]}else{const e=t[1]==null?null:this.size[0]*t[1],s=t[2]==null?null:this.size[1]*t[2];return[t[0],e,s,t[3]]}}call(t,e){return U(()=>{let s=wt(t);const o=s.shape;if(this.dataFormat==="channelsFirst"){s=Ot(s,[0,2,3,1]);const r=this.size[0]*o[2],i=this.size[1]*o[3],a=this.interpolation==="nearest"?bs.resizeNearestNeighbor(s,[r,i]):bs.resizeBilinear(s,[r,i]);return Ot(a,[0,3,1,2])}else{const r=this.size[0]*o[1],i=this.size[1]*o[2];return this.interpolation==="nearest"?bs.resizeNearestNeighbor(s,[r,i]):bs.resizeBilinear(s,[r,i])}})}getConfig(){const t={size:this.size,dataFormat:this.dataFormat,interpolation:this.interpolation},e=super.getConfig();return Object.assign(t,e),t}}Sb.className="UpSampling2D",Q(Sb);function cR(n,t,e=[1,1],s="valid",o,r){return U(()=>{o==null&&(o=Wn()),le(o);let i=tp(n,o);if(n.rank!==4)throw new M(`Input for depthwiseConv2d is required to be 4-D, but is instead ${n.rank}-D`);if(t.rank!==4)throw new M(`depthwiseKernel is required to be 4-D, but is instead ${t.rank}-D`);return i=vh(i,t,e,s==="same"?"same":"valid","NHWC",r),o==="channelsFirst"&&(i=Ot(i,[0,3,1,2])),i})}class Nb extends bc{constructor(t){super(2,t),this.depthwiseKernel=null,this.depthMultiplier=t.depthMultiplier==null?1:t.depthMultiplier,this.depthwiseInitializer=Qt(t.depthwiseInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.depthwiseConstraint=we(t.depthwiseConstraint),this.depthwiseRegularizer=Jt(t.depthwiseRegularizer)}build(t){if(t=Lt(t),t.length<4)throw new M(`Inputs to DepthwiseConv2D should have rank 4. Received input shape: ${JSON.stringify(t)}.`);const e=this.dataFormat==="channelsFirst"?1:3;if(t[e]==null||t[e]<0)throw new M(`The channel dimension of the inputs to DepthwiseConv2D should be defined, but is not (${t[e]}).`);const s=t[e],o=[this.kernelSize[0],this.kernelSize[1],s,this.depthMultiplier];this.depthwiseKernel=this.addWeight("depthwise_kernel",o,null,this.depthwiseInitializer,this.depthwiseRegularizer,!0,this.depthwiseConstraint),this.useBias?this.bias=this.addWeight("bias",[s*this.depthMultiplier],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):this.bias=null,this.built=!0}call(t,e){return U(()=>{t=wt(t);let s=cR(t,this.depthwiseKernel.read(),this.strides,this.padding,this.dataFormat,null);return this.useBias&&(s=Un(s,this.bias.read(),this.dataFormat)),this.activation!=null&&(s=this.activation.apply(s)),s})}computeOutputShape(t){t=Lt(t);const e=this.dataFormat==="channelsFirst"?t[2]:t[1],s=this.dataFormat==="channelsFirst"?t[3]:t[2],o=this.dataFormat==="channelsFirst"?t[1]*this.depthMultiplier:t[3]*this.depthMultiplier,r=qn(e,this.kernelSize[0],this.padding,this.strides[0]),i=qn(s,this.kernelSize[1],this.padding,this.strides[1]);return this.dataFormat==="channelsFirst"?[t[0],o,r,i]:[t[0],r,i,o]}getConfig(){const t=super.getConfig();return t.depthMultiplier=this.depthMultiplier,t.depthwiseInitializer=ne(this.depthwiseInitializer),t.depthwiseRegularizer=qt(this.depthwiseRegularizer),t.depthwiseConstraint=ye(this.depthwiseRegularizer),t}}Nb.className="DepthwiseConv2D",Q(Nb);function Tb(n,t,e,s){if(Array.isArray(n)){if(t!=null||e!=null)throw new M("When inputs is an array, neither initialState or constants should be provided");s!=null&&(e=n.slice(n.length-s,n.length),n=n.slice(0,n.length-s)),n.length>1&&(t=n.slice(1,n.length)),n=n[0]}function o(r){return r==null||Array.isArray(r)?r:[r]}return t=o(t),e=o(e),{inputs:n,initialState:t,constants:e}}function Eb(n,t,e,s=!1,o,r,i=!1,a=!1){return U(()=>{const l=t.shape.length;if(l<3)throw new M(`Input should be at least 3D, but is ${l}D.`);const c=[1,0].concat(Vn(2,l));t=Ot(t,c),i&&console.warn("Backend rnn(): the unroll = true option is not applicable to the imperative deeplearn.js backend."),o!=null&&(o=at(at(o,"bool"),"float32"),o.rank===l-1&&(o=nn(o,-1)),o=Ot(o,c)),s&&(t=xo(t,0),o!=null&&(o=xo(o,0)));const u=[];let h,d=e;const p=t.shape[0],f=yo(t);let m;o!=null&&(m=yo(o));for(let x=0;x<p;++x){const b=f[x],y=U(()=>n(b,d));if(o==null)h=y[0],d=y[1];else{const w=U(()=>{const C=m[x],I=yt(vn(C),C),v=et(P(y[0],C),P(d[0],I)),N=d.map((k,S)=>et(P(y[1][S],C),P(k,I)));return{output:v,newStates:N}});h=w.output,d=w.newStates}a&&u.push(h)}let g;return a&&(g=xs(u,1)),[h,g,d]})}class qs extends Rt{constructor(t){super(t);let e;if(t.cell==null)throw new M("cell property is missing for the constructor of RNN.");if(Array.isArray(t.cell)?e=new sp({cells:t.cell}):e=t.cell,e.stateSize==null)throw new M("The RNN cell should have an attribute `stateSize` (tuple of integers, one integer per RNN state).");this.cell=e,this.returnSequences=t.returnSequences==null?!1:t.returnSequences,this.returnState=t.returnState==null?!1:t.returnState,this.goBackwards=t.goBackwards==null?!1:t.goBackwards,this._stateful=t.stateful==null?!1:t.stateful,this.unroll=t.unroll==null?!1:t.unroll,this.supportsMasking=!0,this.inputSpec=[new be({ndim:3})],this.stateSpec=null,this.states_=null,this.numConstants=null,this.keptStates=[]}getStates(){if(this.states_==null){const t=Array.isArray(this.cell.stateSize)?this.cell.stateSize.length:1;return Vn(0,t).map(e=>null)}else return this.states_}setStates(t){this.states_=t}computeOutputShape(t){Pd(t)&&(t=t[0]),t=t;let e=this.cell.stateSize;Array.isArray(e)||(e=[e]);const s=e[0];let o;if(this.returnSequences?o=[t[0],t[1],s]:o=[t[0],s],this.returnState){const r=[];for(const i of e)r.push([t[0],i]);return[o].concat(r)}else return o}computeMask(t,e){return U(()=>{Array.isArray(e)&&(e=e[0]);const s=this.returnSequences?e:null;if(this.returnState){const o=this.states.map(r=>null);return[s].concat(o)}else return s})}get states(){if(this.states_==null){const t=Array.isArray(this.cell.stateSize)?this.cell.stateSize.length:1,e=[];for(let s=0;s<t;++s)e.push(null);return e}else return this.states_}set states(t){this.states_=t}build(t){if(this.numConstants!=null)throw new vt("Constants support is not implemented in RNN yet.");Pd(t)&&(t=t[0]),t=t;const e=this.stateful?t[0]:null,s=t.slice(2);this.inputSpec[0]=new be({shape:[e,null,...s]});const o=[t[0]].concat(t.slice(2));this.cell.build(o);let r;if(Array.isArray(this.cell.stateSize)?r=this.cell.stateSize:r=[this.cell.stateSize],this.stateSpec!=null){if(!Bt(this.stateSpec.map(i=>i.shape[i.shape.length-1]),r))throw new M(`An initialState was passed that is not compatible with cell.stateSize. Received stateSpec=${this.stateSpec}; However cell.stateSize is ${this.cell.stateSize}`)}else this.stateSpec=r.map(i=>new be({shape:[null,i]}));this.stateful&&this.resetStates()}resetStates(t,e=!1){U(()=>{if(!this.stateful)throw new ns("Cannot call resetStates() on an RNN Layer that is not stateful.");const s=this.inputSpec[0].shape[0];if(s==null)throw new M("If an RNN is stateful, it needs to know its batch size. Specify the batch size of your input tensors: \n- If using a Sequential model, specify the batch size by passing a `batchInputShape` option to your first layer.\n- If using the functional API, specify the batch size by passing a `batchShape` option to your Input layer.");if(this.states_==null)Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(o=>Se([s,o])):this.states_=[Se([s,this.cell.stateSize])];else if(t==null)Dt(this.states_),this.keptStates!=null&&(Dt(this.keptStates),this.keptStates=[]),Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(o=>Se([s,o])):this.states_[0]=Se([s,this.cell.stateSize]);else{if(Array.isArray(t)||(t=[t]),t.length!==this.states_.length)throw new M(`Layer ${this.name} expects ${this.states_.length} state(s), but it received ${t.length} state value(s). Input received: ${t}`);e===!0?this.keptStates.push(this.states_.slice()):Dt(this.states_);for(let o=0;o<this.states_.length;++o){const r=t[o],i=Array.isArray(this.cell.stateSize)?this.cell.stateSize[o]:this.cell.stateSize,a=[s,i];if(!Bt(r.shape,a))throw new M(`State ${o} is incompatible with layer ${this.name}: expected shape=${a}, received shape=${r.shape}`);this.states_[o]=r}}this.states_=this.states_.map(o=>Yn(o.clone()))})}apply(t,e){let s=e==null?null:e.initialState,o=e==null?null:e.constants;e==null&&(e={});const r=Tb(t,s,o,this.numConstants);t=r.inputs,s=r.initialState,o=r.constants;let i=[],a=[];if(s!=null){e.initialState=s,i=i.concat(s),this.stateSpec=[];for(const c of s)this.stateSpec.push(new be({shape:c.shape}));a=a.concat(this.stateSpec)}if(o!=null&&(e.constants=o,i=i.concat(o),this.numConstants=o.length),i[0]instanceof is){const c=[t].concat(i),u=this.inputSpec.concat(a),h=this.inputSpec;this.inputSpec=u;const d=super.apply(c,e);return this.inputSpec=h,d}else return super.apply(t,e)}call(t,e){return U(()=>{const s=e==null?null:e.mask,o=e==null?null:e.training;let r=e==null?null:e.initialState;t=wt(t),r==null&&(this.stateful?r=this.states_:r=this.getInitialState(t));const i=Array.isArray(this.cell.stateSize)?this.cell.stateSize.length:1;if(r.length!==i)throw new M(`RNN Layer has ${i} state(s) but was passed ${r.length} initial state(s).`);this.unroll&&console.warn("Ignoring unroll = true for RNN layer, due to imperative backend.");const a={training:o},c=Eb((f,m)=>{const g=this.cell.call([f].concat(m),a);return[g[0],g.slice(1)]},t,r,this.goBackwards,s,null,this.unroll,this.returnSequences),u=c[0],h=c[1],d=c[2];this.stateful&&this.resetStates(d,o);const p=this.returnSequences?h:u;return this.returnState?[p].concat(d):p})}getInitialState(t){return U(()=>{let e=Se(t.shape);return e=mt(e,[1,2]),e=Hi(e),Array.isArray(this.cell.stateSize)?this.cell.stateSize.map(s=>s>1?Ed(e,[1,s]):e):this.cell.stateSize>1?[Ed(e,[1,this.cell.stateSize])]:[e]})}get trainableWeights(){return this.trainable?this.cell.trainableWeights:[]}get nonTrainableWeights(){return this.trainable?this.cell.nonTrainableWeights:this.cell.weights}setFastWeightInitDuringBuild(t){super.setFastWeightInitDuringBuild(t),this.cell!=null&&this.cell.setFastWeightInitDuringBuild(t)}getConfig(){const t=super.getConfig(),e={returnSequences:this.returnSequences,returnState:this.returnState,goBackwards:this.goBackwards,stateful:this.stateful,unroll:this.unroll};this.numConstants!=null&&(e.numConstants=this.numConstants);const s=this.cell.getConfig();return this.getClassName()===qs.className&&(e.cell={className:this.cell.getClassName(),config:s}),Object.assign(Object.assign(Object.assign({},s),t),e)}static fromConfig(t,e,s={}){const o=e.cell,r=$s(o,s);return new t(Object.assign(e,{cell:r}))}}qs.className="RNN",Q(qs);class wc extends Rt{}class ep extends wc{constructor(t){super(t),this.DEFAULT_ACTIVATION="tanh",this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_RECURRENT_INITIALIZER="orthogonal",this.DEFAULT_BIAS_INITIALIZER="zeros",this.units=t.units,Ne(this.units,"units"),this.activation=Hs(t.activation==null?this.DEFAULT_ACTIVATION:t.activation),this.useBias=t.useBias==null?!0:t.useBias,this.kernelInitializer=Qt(t.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.recurrentInitializer=Qt(t.recurrentInitializer||this.DEFAULT_RECURRENT_INITIALIZER),this.biasInitializer=Qt(t.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.kernelRegularizer=Jt(t.kernelRegularizer),this.recurrentRegularizer=Jt(t.recurrentRegularizer),this.biasRegularizer=Jt(t.biasRegularizer),this.kernelConstraint=we(t.kernelConstraint),this.recurrentConstraint=we(t.recurrentConstraint),this.biasConstraint=we(t.biasConstraint),this.dropout=or([1,Ws([0,t.dropout==null?0:t.dropout])]),this.recurrentDropout=or([1,Ws([0,t.recurrentDropout==null?0:t.recurrentDropout])]),this.dropoutFunc=t.dropoutFunc,this.stateSize=this.units,this.dropoutMask=null,this.recurrentDropoutMask=null}build(t){t=Lt(t),this.kernel=this.addWeight("kernel",[t[t.length-1],this.units],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.recurrentKernel=this.addWeight("recurrent_kernel",[this.units,this.units],null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.useBias?this.bias=this.addWeight("bias",[this.units],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):this.bias=null,this.built=!0}call(t,e){return U(()=>{if(t=t,t.length!==2)throw new M(`SimpleRNNCell expects 2 input Tensors, got ${t.length}.`);let s=t[1];t=t[0];const o=e.training==null?!1:e.training;0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=Xs({ones:()=>vn(t),rate:this.dropout,training:o,dropoutFunc:this.dropoutFunc})),0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=Xs({ones:()=>vn(s),rate:this.recurrentDropout,training:o,dropoutFunc:this.dropoutFunc}));let r;const i=this.dropoutMask,a=this.recurrentDropoutMask;i!=null?r=rs(P(t,i),this.kernel.read()):r=rs(t,this.kernel.read()),this.bias!=null&&(r=Un(r,this.bias.read())),a!=null&&(s=P(s,a));let l=et(r,rs(s,this.recurrentKernel.read()));return this.activation!=null&&(l=this.activation.apply(l)),[l,l]})}getConfig(){const t=super.getConfig(),e={units:this.units,activation:Gs(this.activation),useBias:this.useBias,kernelInitializer:ne(this.kernelInitializer),recurrentInitializer:ne(this.recurrentInitializer),biasInitializer:ne(this.biasInitializer),kernelRegularizer:qt(this.kernelRegularizer),recurrentRegularizer:qt(this.recurrentRegularizer),biasRegularizer:qt(this.biasRegularizer),activityRegularizer:qt(this.activityRegularizer),kernelConstraint:ye(this.kernelConstraint),recurrentConstraint:ye(this.recurrentConstraint),biasConstraint:ye(this.biasConstraint),dropout:this.dropout,recurrentDropout:this.recurrentDropout};return Object.assign(Object.assign({},t),e)}}ep.className="SimpleRNNCell",Q(ep);class Rb extends qs{constructor(t){t.cell=new ep(t),super(t)}call(t,e){return U(()=>{this.cell.dropoutMask!=null&&(Dt(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(Dt(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null);const s=e==null?null:e.mask,o=e==null?null:e.training,r=e==null?null:e.initialState;return super.call(t,{mask:s,training:o,initialState:r})})}static fromConfig(t,e){return new t(e)}}Rb.className="SimpleRNN",Q(Rb);class np extends wc{constructor(t){if(super(t),this.DEFAULT_ACTIVATION="tanh",this.DEFAULT_RECURRENT_ACTIVATION="hardSigmoid",this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_RECURRENT_INITIALIZER="orthogonal",this.DEFAULT_BIAS_INITIALIZER="zeros",t.resetAfter)throw new M("GRUCell does not support reset_after parameter set to true.");this.units=t.units,Ne(this.units,"units"),this.activation=Hs(t.activation===void 0?this.DEFAULT_ACTIVATION:t.activation),this.recurrentActivation=Hs(t.recurrentActivation===void 0?this.DEFAULT_RECURRENT_ACTIVATION:t.recurrentActivation),this.useBias=t.useBias==null?!0:t.useBias,this.kernelInitializer=Qt(t.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.recurrentInitializer=Qt(t.recurrentInitializer||this.DEFAULT_RECURRENT_INITIALIZER),this.biasInitializer=Qt(t.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.kernelRegularizer=Jt(t.kernelRegularizer),this.recurrentRegularizer=Jt(t.recurrentRegularizer),this.biasRegularizer=Jt(t.biasRegularizer),this.kernelConstraint=we(t.kernelConstraint),this.recurrentConstraint=we(t.recurrentConstraint),this.biasConstraint=we(t.biasConstraint),this.dropout=or([1,Ws([0,t.dropout==null?0:t.dropout])]),this.recurrentDropout=or([1,Ws([0,t.recurrentDropout==null?0:t.recurrentDropout])]),this.dropoutFunc=t.dropoutFunc,this.implementation=t.implementation,this.stateSize=this.units,this.dropoutMask=null,this.recurrentDropoutMask=null}build(t){t=Lt(t);const e=t[t.length-1];this.kernel=this.addWeight("kernel",[e,this.units*3],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.recurrentKernel=this.addWeight("recurrent_kernel",[this.units,this.units*3],null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.useBias?this.bias=this.addWeight("bias",[this.units*3],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):this.bias=null,this.built=!0}call(t,e){return U(()=>{if(t=t,t.length!==2)throw new M(`GRUCell expects 2 input Tensors (inputs, h, c), got ${t.length}.`);const s=e.training==null?!1:e.training;let o=t[1];t=t[0],0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=Xs({ones:()=>vn(t),rate:this.dropout,training:s,count:3,dropoutFunc:this.dropoutFunc})),0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=Xs({ones:()=>vn(o),rate:this.recurrentDropout,training:s,count:3,dropoutFunc:this.dropoutFunc}));const r=this.dropoutMask,i=this.recurrentDropoutMask;let a,l,c;0<this.dropout&&this.dropout<1&&(t=P(t,r[0]));let u=rs(t,this.kernel.read());this.useBias&&(u=Un(u,this.bias.read())),0<this.recurrentDropout&&this.recurrentDropout<1&&(o=P(o,i[0]));const h=this.recurrentKernel.read(),[d,p]=yn(h,[2*this.units,this.units],h.rank-1),f=rs(o,d),[m,g,x]=yn(u,3,u.rank-1),[b,y]=yn(f,2,f.rank-1);a=this.recurrentActivation.apply(et(m,b)),l=this.recurrentActivation.apply(et(g,y));const w=rs(P(l,o),p);c=this.activation.apply(et(x,w));const C=et(P(a,o),P(et(1,ae(a)),c));return[C,C]})}getConfig(){const t=super.getConfig(),e={units:this.units,activation:Gs(this.activation),recurrentActivation:Gs(this.recurrentActivation),useBias:this.useBias,kernelInitializer:ne(this.kernelInitializer),recurrentInitializer:ne(this.recurrentInitializer),biasInitializer:ne(this.biasInitializer),kernelRegularizer:qt(this.kernelRegularizer),recurrentRegularizer:qt(this.recurrentRegularizer),biasRegularizer:qt(this.biasRegularizer),activityRegularizer:qt(this.activityRegularizer),kernelConstraint:ye(this.kernelConstraint),recurrentConstraint:ye(this.recurrentConstraint),biasConstraint:ye(this.biasConstraint),dropout:this.dropout,recurrentDropout:this.recurrentDropout,implementation:this.implementation,resetAfter:!1};return Object.assign(Object.assign({},t),e)}}np.className="GRUCell",Q(np);class Ab extends qs{constructor(t){t.implementation===0&&console.warn("`implementation=0` has been deprecated, and now defaults to `implementation=1`. Please update your layer call."),t.cell=new np(t),super(t)}call(t,e){return U(()=>{this.cell.dropoutMask!=null&&(Dt(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(Dt(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null);const s=e==null?null:e.mask,o=e==null?null:e.training,r=e==null?null:e.initialState;return super.call(t,{mask:s,training:o,initialState:r})})}static fromConfig(t,e){return e.implmentation===0&&(e.implementation=1),new t(e)}}Ab.className="GRU",Q(Ab);class Cc extends wc{constructor(t){super(t),this.DEFAULT_ACTIVATION="tanh",this.DEFAULT_RECURRENT_ACTIVATION="hardSigmoid",this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_RECURRENT_INITIALIZER="orthogonal",this.DEFAULT_BIAS_INITIALIZER="zeros",this.units=t.units,Ne(this.units,"units"),this.activation=Hs(t.activation===void 0?this.DEFAULT_ACTIVATION:t.activation),this.recurrentActivation=Hs(t.recurrentActivation===void 0?this.DEFAULT_RECURRENT_ACTIVATION:t.recurrentActivation),this.useBias=t.useBias==null?!0:t.useBias,this.kernelInitializer=Qt(t.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.recurrentInitializer=Qt(t.recurrentInitializer||this.DEFAULT_RECURRENT_INITIALIZER),this.biasInitializer=Qt(t.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.unitForgetBias=t.unitForgetBias,this.kernelRegularizer=Jt(t.kernelRegularizer),this.recurrentRegularizer=Jt(t.recurrentRegularizer),this.biasRegularizer=Jt(t.biasRegularizer),this.kernelConstraint=we(t.kernelConstraint),this.recurrentConstraint=we(t.recurrentConstraint),this.biasConstraint=we(t.biasConstraint),this.dropout=or([1,Ws([0,t.dropout==null?0:t.dropout])]),this.recurrentDropout=or([1,Ws([0,t.recurrentDropout==null?0:t.recurrentDropout])]),this.dropoutFunc=t.dropoutFunc,this.implementation=t.implementation,this.stateSize=[this.units,this.units],this.dropoutMask=null,this.recurrentDropoutMask=null}build(t){var e;t=Lt(t);const s=t[t.length-1];this.kernel=this.addWeight("kernel",[s,this.units*4],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.recurrentKernel=this.addWeight("recurrent_kernel",[this.units,this.units*4],null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint);let o;if(this.useBias){if(this.unitForgetBias){const r=this.biasInitializer,i=this.units;o=new(e=class extends Tn{apply(l,c){const u=r.apply([i]),h=new Ad().apply([i]),d=r.apply([i*2]);return ox(ox(u,h),d)}},e.className="CustomInit",e)}else o=this.biasInitializer;this.bias=this.addWeight("bias",[this.units*4],null,o,this.biasRegularizer,!0,this.biasConstraint)}else this.bias=null;this.built=!0}call(t,e){return U(()=>{const s=e.training==null?!1:e.training;if(t=t,t.length!==3)throw new M(`LSTMCell expects 3 input Tensors (inputs, h, c), got ${t.length}.`);let o=t[1];const r=t[2];t=t[0],0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=Xs({ones:()=>vn(t),rate:this.dropout,training:s,count:4,dropoutFunc:this.dropoutFunc})),0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=Xs({ones:()=>vn(o),rate:this.recurrentDropout,training:s,count:4,dropoutFunc:this.dropoutFunc}));const i=this.dropoutMask,a=this.recurrentDropoutMask;let l,c,u,h;0<this.dropout&&this.dropout<1&&(t=P(t,i[0]));let d=rs(t,this.kernel.read());0<this.recurrentDropout&&this.recurrentDropout<1&&(o=P(o,a[0])),d=et(d,rs(o,this.recurrentKernel.read())),this.useBias&&(d=Un(d,this.bias.read()));const[p,f,m,g]=yn(d,4,d.rank-1);l=this.recurrentActivation.apply(p),c=this.recurrentActivation.apply(f),u=et(P(c,r),P(l,this.activation.apply(m))),h=this.recurrentActivation.apply(g);const x=P(h,this.activation.apply(u));return[x,x,u]})}getConfig(){const t=super.getConfig(),e={units:this.units,activation:Gs(this.activation),recurrentActivation:Gs(this.recurrentActivation),useBias:this.useBias,kernelInitializer:ne(this.kernelInitializer),recurrentInitializer:ne(this.recurrentInitializer),biasInitializer:ne(this.biasInitializer),unitForgetBias:this.unitForgetBias,kernelRegularizer:qt(this.kernelRegularizer),recurrentRegularizer:qt(this.recurrentRegularizer),biasRegularizer:qt(this.biasRegularizer),activityRegularizer:qt(this.activityRegularizer),kernelConstraint:ye(this.kernelConstraint),recurrentConstraint:ye(this.recurrentConstraint),biasConstraint:ye(this.biasConstraint),dropout:this.dropout,recurrentDropout:this.recurrentDropout,implementation:this.implementation};return Object.assign(Object.assign({},t),e)}}Cc.className="LSTMCell",Q(Cc);class Db extends qs{constructor(t){t.implementation===0&&console.warn("`implementation=0` has been deprecated, and now defaults to `implementation=1`. Please update your layer call."),t.cell=new Cc(t),super(t)}call(t,e){return U(()=>{this.cell.dropoutMask!=null&&(Dt(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(Dt(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null);const s=e==null?null:e.mask,o=e==null?null:e.training,r=e==null?null:e.initialState;return super.call(t,{mask:s,training:o,initialState:r})})}static fromConfig(t,e){return e.implmentation===0&&(e.implementation=1),new t(e)}}Db.className="LSTM",Q(Db);class sp extends wc{constructor(t){super(t),this.cells=t.cells}get stateSize(){const t=[];for(const e of this.cells.slice().reverse())Array.isArray(e.stateSize)?t.push(...e.stateSize):t.push(e.stateSize);return t}call(t,e){return U(()=>{t=t;let s=t.slice(1);const o=[];for(const a of this.cells.slice().reverse())Array.isArray(a.stateSize)?o.push(s.splice(0,a.stateSize.length)):o.push(s.splice(0,1));o.reverse();const r=[];let i;for(let a=0;a<this.cells.length;++a){const l=this.cells[a];s=o[a],a===0?i=[t[0]].concat(s):i=[i[0]].concat(s),i=l.call(i,e),r.push(i.slice(1))}s=[];for(const a of r.slice().reverse())s.push(...a);return[i[0]].concat(s)})}build(t){Pd(t)&&(t=t[0]),t=t;let e;this.cells.forEach((s,o)=>{vo(`RNNCell_${o}`,()=>{s.build(t),Array.isArray(s.stateSize)?e=s.stateSize[0]:e=s.stateSize,t=[t[0],e]})}),this.built=!0}getConfig(){const t=super.getConfig(),e=r=>({className:r.getClassName(),config:r.getConfig()}),o={cells:this.cells.map(e)};return Object.assign(Object.assign({},t),o)}static fromConfig(t,e,s={}){const o=[];for(const r of e.cells)o.push($s(r,s));return new t({cells:o})}get trainableWeights(){if(!this.trainable)return[];const t=[];for(const e of this.cells)t.push(...e.trainableWeights);return t}get nonTrainableWeights(){const t=[];for(const e of this.cells)t.push(...e.nonTrainableWeights);if(!this.trainable){const e=[];for(const s of this.cells)e.push(...s.trainableWeights);return e.concat(t)}return t}getWeights(){const t=[];for(const e of this.cells)t.push(...e.weights);return Bd(t)}setWeights(t){const e=[];for(const s of this.cells){const o=s.weights.length,r=t.splice(o);for(let i=0;i<s.weights.length;++i)e.push([s.weights[i],r[i]])}zd(e)}}sp.className="StackedRNNCells",Q(sp);function Xs(n){const{ones:t,rate:e,training:s=!1,count:o=1,dropoutFunc:r}=n,i=()=>r!=null?r(t(),e):ix(t(),e),a=()=>Xi(i,t,s);return!o||o<=1?Yn(a().clone()):Array(o).fill(void 0).map(a).map(c=>Yn(c.clone()))}var uR=function(n,t){var e={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&t.indexOf(s)<0&&(e[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(n);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(n,s[o])&&(e[s[o]]=n[s[o]]);return e};class Fb extends qs{constructor(t){if(t.unroll)throw new vt("Unrolling is not possible with convolutional RNNs.");if(Array.isArray(t.cell))throw new vt("It is not possible at the moment to stack convolutional cells.");super(t),this.inputSpec=[new be({ndim:5})]}call(t,e){return U(()=>{if(this.cell.dropoutMask!=null&&(Dt(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(Dt(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null),e&&e.constants)throw new M("ConvRNN2D cell does not support constants");const s=e==null?null:e.mask,o=e==null?null:e.training,r=e==null?null:e.initialState;return super.call(t,{mask:s,training:o,initialState:r})})}computeOutputShape(t){let e=this.computeSingleOutputShape(t);return this.returnSequences||(e=[e[0],...e.slice(2)]),this.returnState&&(e=[e,...Array(2).fill([t[0],...e.slice(-3)])]),e}getInitialState(t){return U(()=>{const{stateSize:e}=this.cell,s=t.shape,o=this.computeSingleOutputShape(s),r=[o[0],...o.slice(2)],i=Se(r);return Array.isArray(e)?Array(e.length).fill(i):[i]})}resetStates(t,e=!1){U(()=>{if(!this.stateful)throw new ns("Cannot call resetStates() on an RNN Layer that is not stateful.");const s=this.inputSpec[0].shape,o=this.computeSingleOutputShape(s),r=[o[0],...o.slice(2)];if(s[0]==null)throw new M("If an RNN is stateful, it needs to know its batch size. Specify the batch size of your input tensors: \n- If using a Sequential model, specify the batch size by passing a `batchInputShape` option to your first layer.\n- If using the functional API, specify the batch size by passing a `batchShape` option to your Input layer.");if(this.getStates()==null)Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(()=>Se(r)):this.states_=[Se(r)];else if(t==null)Dt(this.states_),this.keptStates!=null&&(Dt(this.keptStates),this.keptStates=[]),Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(()=>Se(r)):this.states_[0]=Se(r);else{if(Array.isArray(t)||(t=[t]),t.length!==this.states_.length)throw new M(`Layer ${this.name} expects ${this.states_.length} state(s), but it received ${t.length} state value(s). Input received: ${t}`);e?this.keptStates.push(this.states_.slice()):Dt(this.states_);for(let a=0;a<this.states_.length;++a){const l=t[a],c=r;if(!Bt(l.shape,c))throw new M(`State ${a} is incompatible with layer ${this.name}: expected shape=${c}, received shape=${l.shape}`);this.states_[a]=l}}this.states_=this.states_.map(a=>Yn(a.clone()))})}computeSingleOutputShape(t){const{dataFormat:e,filters:s,kernelSize:o,padding:r,strides:i,dilationRate:a}=this.cell,l=e==="channelsFirst",c=t[l?3:2],u=t[l?4:3],h=qn(c,o[0],r,i[0],a[0]),d=qn(u,o[1],r,i[1],a[1]);return[...t.slice(0,2),...l?[s,h,d]:[h,d,s]]}}Fb.className="ConvRNN2D";class op extends Cc{constructor(t){const{filters:e,kernelSize:s,strides:o,padding:r,dataFormat:i,dilationRate:a}=t;super(Object.assign(Object.assign({},t),{units:e})),this.filters=e,Ne(this.filters,"filters"),this.kernelSize=ir(s,2,"kernelSize"),this.kernelSize.forEach(l=>Ne(l,"kernelSize")),this.strides=ir(o||1,2,"strides"),this.strides.forEach(l=>Ne(l,"strides")),this.padding=r||"valid",wn(this.padding),this.dataFormat=i||"channelsLast",le(this.dataFormat),this.dilationRate=ir(a||1,2,"dilationRate"),this.dilationRate.forEach(l=>Ne(l,"dilationRate"))}build(t){var e;t=Lt(t);const s=this.dataFormat==="channelsFirst"?1:t.length-1;if(t[s]==null)throw new M(`The channel dimension of the input should be defined. Found ${t[s]}`);const o=t[s],r=4,i=this.kernelSize.concat([o,this.filters*r]);this.kernel=this.addWeight("kernel",i,null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint);const a=this.kernelSize.concat([this.filters,this.filters*r]);if(this.recurrentKernel=this.addWeight("recurrent_kernel",a,null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.useBias){let l;if(this.unitForgetBias){const c=this.biasInitializer,u=this.filters;l=new(e=class extends Tn{apply(d,p){const f=c.apply([u]),m=Ps([u]),g=c.apply([u*2]);return Td([f,m,g])}},e.className="CustomInit",e)}else l=this.biasInitializer;this.bias=this.addWeight("bias",[this.filters*r],null,l,this.biasRegularizer,!0,this.biasConstraint)}this.built=!0}call(t,e){return U(()=>{if(t.length!==3)throw new M(`ConvLSTM2DCell expects 3 input Tensors (inputs, h, c), got ${t.length}.`);const s=e.training||!1,o=t[0],r=t[1],i=t[2],a=4;0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=Xs({ones:()=>vn(o),rate:this.dropout,training:s,count:a,dropoutFunc:this.dropoutFunc}));const l=this.dropoutMask,c=(G,q,j)=>!q||!q[j]?G:P(q[j],G);let u=c(o,l,0),h=c(o,l,1),d=c(o,l,2),p=c(o,l,3);0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=Xs({ones:()=>vn(r),rate:this.recurrentDropout,training:s,count:a,dropoutFunc:this.dropoutFunc}));const f=this.recurrentDropoutMask;let m=c(r,f,0),g=c(r,f,1),x=c(r,f,2),b=c(r,f,3);const y=3,[w,C,I,v]=yn(this.kernel.read(),a,y),[N,k,S,$]=this.useBias?yn(this.bias.read(),a):[null,null,null,null];u=this.inputConv(u,w,N,this.padding),h=this.inputConv(h,C,k,this.padding),d=this.inputConv(d,I,S,this.padding),p=this.inputConv(p,v,$,this.padding);const[E,R,F,A]=yn(this.recurrentKernel.read(),a,y);m=this.recurrentConv(m,E),g=this.recurrentConv(g,R),x=this.recurrentConv(x,F),b=this.recurrentConv(b,A);const O=this.recurrentActivation.apply(et(u,m)),L=this.recurrentActivation.apply(et(h,g)),_=et(P(L,i),P(O,this.activation.apply(et(d,x)))),V=P(this.recurrentActivation.apply(et(p,b)),this.activation.apply(_));return[V,V,_]})}getConfig(){const t=super.getConfig(),{units:e}=t,s=uR(t,["units"]),o={filters:this.filters,kernelSize:this.kernelSize,padding:this.padding,dataFormat:this.dataFormat,dilationRate:this.dilationRate,strides:this.strides};return Object.assign(Object.assign({},s),o)}inputConv(t,e,s,o){const r=po(t,e,this.strides,o||"valid",this.dataFormat==="channelsFirst"?"NCHW":"NHWC",this.dilationRate);return s?Un(r,s,this.dataFormat):r}recurrentConv(t,e){return po(t,e,1,"same",this.dataFormat==="channelsFirst"?"NCHW":"NHWC")}}op.className="ConvLSTM2DCell",Q(op);class _b extends Fb{constructor(t){const e=new op(t);super(Object.assign(Object.assign({},t),{cell:e}))}static fromConfig(t,e){return new t(e)}}_b.className="ConvLSTM2D",Q(_b);class rp extends Rt{constructor(t){super(t),this.rate=Math.max(Math.min(t.rate,1),0),this.noiseShape=t.noiseShape,this.seed=t.seed,this.supportsMasking=!0}getNoiseShape(t){if(this.noiseShape==null)return this.noiseShape;const e=t.shape,s=[];for(let o=0;o<this.noiseShape.length;++o)s.push(this.noiseShape[o]==null?e[o]:this.noiseShape[o]);return s}call(t,e){return U(()=>{this.invokeCallHook(t,e);const s=wt(t);if(0<this.rate&&this.rate<1){const o=e.training==null?!1:e.training,r=this.getNoiseShape(s);return Xi(()=>ix(s,this.rate,r,this.seed),()=>s,o)}return t})}getConfig(){const t={rate:this.rate,noiseShape:this.noiseShape,seed:this.seed},e=super.getConfig();return Object.assign(t,e),t}dispose(){return super.dispose()}}rp.className="Dropout",Q(rp);class Ob extends rp{constructor(t){super(t),this.inputSpec=[{ndim:3}]}getNoiseShape(t){const e=t.shape;return[e[0],1,e[2]]}}Ob.className="SpatialDropout1D",Q(Ob);class Mb extends Rt{constructor(t){if(super(t),this.activation=null,this.useBias=!0,this.kernel=null,this.bias=null,this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_BIAS_INITIALIZER="zeros",t.batchInputShape==null&&t.inputShape==null&&t.inputDim!=null){let e=null;t.batchSize!=null&&(e=t.batchSize),this.batchInputShape=[e,t.inputDim]}this.units=t.units,Ne(this.units,"units"),this.activation=Hs(t.activation),t.useBias!=null&&(this.useBias=t.useBias),this.kernelInitializer=Qt(t.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.biasInitializer=Qt(t.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.kernelConstraint=we(t.kernelConstraint),this.biasConstraint=we(t.biasConstraint),this.kernelRegularizer=Jt(t.kernelRegularizer),this.biasRegularizer=Jt(t.biasRegularizer),this.activityRegularizer=Jt(t.activityRegularizer),this.supportsMasking=!0,this.inputSpec=[{minNDim:2}]}build(t){t=Lt(t);const e=t[t.length-1];this.kernel==null&&(this.kernel=this.addWeight("kernel",[e,this.units],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight("bias",[this.units],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint))),this.inputSpec=[{minNDim:2,axes:{[-1]:e}}],this.built=!0}computeOutputShape(t){t=Lt(t);const e=t.slice();return e[e.length-1]=this.units,e}call(t,e){return U(()=>{this.invokeCallHook(t,e);const s=wt(t),o=Zg(this.activation.getClassName());let r;return o!=null?r=rs(s,this.kernel.read(),o,this.bias?this.bias.read():null):(r=rs(s,this.kernel.read()),this.bias!=null&&(r=Un(r,this.bias.read())),this.activation!=null&&(r=this.activation.apply(r))),r})}getConfig(){const t={units:this.units,activation:Gs(this.activation),useBias:this.useBias,kernelInitializer:ne(this.kernelInitializer),biasInitializer:ne(this.biasInitializer),kernelRegularizer:qt(this.kernelRegularizer),biasRegularizer:qt(this.biasRegularizer),activityRegularizer:qt(this.activityRegularizer),kernelConstraint:ye(this.kernelConstraint),biasConstraint:ye(this.biasConstraint)},e=super.getConfig();return Object.assign(t,e),t}}Mb.className="Dense",Q(Mb);class Lb extends Rt{constructor(t){t=t||{},super(t),this.inputSpec=[{minNDim:3}],this.dataFormat=t.dataFormat}computeOutputShape(t){t=Lt(t);for(const e of t.slice(1))if(e==null)throw new M(`The shape of the input to "Flatten" is not fully defined (got ${t.slice(1)}). Make sure to pass a complete "input_shape" or "batch_input_shape" argument to the first layer in your model.`);return[t[0],Vs(t,1)]}call(t,e){return U(()=>{this.invokeCallHook(t,e);let s=wt(t);if(this.dataFormat==="channelsFirst"&&s.rank>1){const o=[0];for(let r=2;r<s.rank;++r)o.push(r);o.push(1),s=Ot(s,o)}return HT(s)})}getConfig(){const t={};this.dataFormat!=null&&(t.dataFormat=this.dataFormat);const e=super.getConfig();return Object.assign(t,e),t}}Lb.className="Flatten",Q(Lb);class Pb extends Rt{constructor(t){super(t),this.supportsMasking=!0,this.activation=Hs(t.activation)}call(t,e){return U(()=>{this.invokeCallHook(t,e);const s=wt(t);return this.activation.apply(s)})}getConfig(){const t={activation:Gs(this.activation)},e=super.getConfig();return Object.assign(t,e),t}}Pb.className="Activation",Q(Pb);class Bb extends Rt{constructor(t){super(t),this.n=t.n,this.inputSpec=[{ndim:2}]}computeOutputShape(t){return[t[0],this.n,t[1]]}call(t,e){return U(()=>(t=wt(t),UT(t,this.n)))}getConfig(){const t={n:this.n},e=super.getConfig();return Object.assign(t,e),t}}Bb.className="RepeatVector",Q(Bb);class zb extends Rt{constructor(t){super(t),this.targetShape=t.targetShape;for(let e=0;e<this.targetShape.length;++e)this.isUnknown(this.targetShape[e])&&(this.targetShape[e]=null)}isUnknown(t){return t<0||t==null}fixUnknownDimension(t,e){const s="Total size of new array must be unchanged.",o=e.slice();let r=1,i=null;for(let l=0;l<o.length;++l){const c=o[l];if(this.isUnknown(c))if(i===null)i=l;else throw new M("Can only specifiy one unknown dimension.");else r*=c}const a=Vs(t);if(i!==null){if(r===0||a%r!==0)throw new M(s);o[i]=a/r}else if(a!==r)throw new M(s);return o}computeOutputShape(t){let e=!1;for(let s=0;s<t.length;++s)if(this.isUnknown(t[s])){e=!0;break}return e?t.slice(0,1).concat(this.targetShape):t.slice(0,1).concat(this.fixUnknownDimension(t.slice(1),this.targetShape))}call(t,e){return U(()=>{this.invokeCallHook(t,e);const s=wt(t),o=s.shape,r=o.slice(0,1).concat(this.fixUnknownDimension(o.slice(1),this.targetShape));return z(s,r)})}getConfig(){const t={targetShape:this.targetShape},e=super.getConfig();return Object.assign(t,e),t}}zb.className="Reshape",Q(zb);class Vb extends Rt{constructor(t){if(super(t),t.dims==null)throw new Error("Required configuration field `dims` is missing during Permute constructor call.");if(!Array.isArray(t.dims))throw new Error(`Permute constructor requires \`dims\` to be an Array, but received ${t.dims} instead.`);const e=Vn(1,t.dims.length+1);if(!Bt(t.dims.slice().sort(),e))throw new Error("Invalid permutation `dims`: "+JSON.stringify(t.dims)+" `dims` must contain consecutive integers starting from 1.");this.dims=t.dims,this.dimsIncludingBatch=[0].concat(this.dims),this.inputSpec=[new be({ndim:this.dims.length+1})]}computeOutputShape(t){t=Lt(t);const e=t.slice();return this.dims.forEach((s,o)=>{e[o+1]=t[s]}),e}call(t,e){return Ot(wt(t),this.dimsIncludingBatch)}getConfig(){const t={dims:this.dims},e=super.getConfig();return Object.assign(t,e),t}}Vb.className="Permute",Q(Vb);class Wb extends Rt{constructor(t){super(t==null?{}:t),this.supportsMasking=!0,t!=null?this.maskValue=t.maskValue==null?0:t.maskValue:this.maskValue=0}computeOutputShape(t){return t}getConfig(){const t=super.getConfig(),e={maskValue:this.maskValue};return Object.assign(e,t),e}computeMask(t,e){const s=wt(t);return gh(Vl(s,this.maskValue),-1)}call(t,e){return U(()=>{this.invokeCallHook(t,e);const s=wt(t),i=gh(Vl(s,this.maskValue),-1,!0);return P(s,at(i,s.dtype))})}}Wb.className="Masking",Q(Wb);class Ub extends Rt{constructor(t){if(super(t),this.embeddings=null,this.DEFAULT_EMBEDDINGS_INITIALIZER="randomUniform",t.batchInputShape==null&&t.inputShape==null){let e=null;t.batchSize!=null&&(e=t.batchSize),t.inputLength==null?this.batchInputShape=[e,null]:this.batchInputShape=[e].concat(Wt(t.inputLength))}this.inputDim=t.inputDim,Ne(this.inputDim,"inputDim"),this.outputDim=t.outputDim,Ne(this.outputDim,"outputDim"),this.embeddingsInitializer=Qt(t.embeddingsInitializer||this.DEFAULT_EMBEDDINGS_INITIALIZER),this.embeddingsRegularizer=Jt(t.embeddingsRegularizer),this.activityRegularizer=Jt(t.activityRegularizer),this.embeddingsConstraint=we(t.embeddingsConstraint),this.maskZero=t.maskZero,this.supportsMasking=t.maskZero,this.inputLength=t.inputLength}build(t){this.embeddings=this.addWeight("embeddings",[this.inputDim,this.outputDim],this.dtype,this.embeddingsInitializer,this.embeddingsRegularizer,!0,this.embeddingsConstraint),this.built=!0}warnOnIncompatibleInputShape(t){}computeMask(t,e){return U(()=>this.maskZero?(t=wt(t),Vl(t,_t(t))):null)}computeOutputShape(t){if(t=Lt(t),this.inputLength==null)return[...t,this.outputDim];const e=Wt(this.inputLength);if(e.length!==t.length-1)throw new M(`"inputLength" is ${this.inputLength}, but received input shape has shape ${t}`);{let s=0;for(let o=0;o<e.length;++o){const r=e[o],i=t[o+1];if(r!=null&&i!=null&&r!==i)throw new M(`"inputLength" is ${this.inputLength}, but received input shape has shape ${t}`);r==null&&(e[s]=i),s++}}return[t[0],...e,this.outputDim]}call(t,e){return U(()=>{this.invokeCallHook(t,e);let s=wt(t);s.dtype!=="int32"&&(s=os(s,"int32"));const o=rx(this.embeddings.read(),z(s,[s.size]));return z(o,Lt(this.computeOutputShape(s.shape)))})}getConfig(){const t={inputDim:this.inputDim,outputDim:this.outputDim,embeddingsInitializer:ne(this.embeddingsInitializer),embeddingsRegularizer:qt(this.embeddingsRegularizer),activityRegularizer:qt(this.activityRegularizer),embeddingsConstraint:ye(this.embeddingsConstraint),maskZero:this.maskZero,inputLength:this.inputLength},e=super.getConfig();return Object.assign(t,e),t}}Ub.className="Embedding",Q(Ub);class No extends Rt{constructor(t){super(t||{}),this.supportsMasking=!0}mergeFunction(t){throw new vt}computeElementwiseOpOutputShape(t,e){if(t==null||e==null)return null;if(t.length<e.length)return this.computeElementwiseOpOutputShape(e,t);if(e.length===0)return t;const s=t.slice(0,t.length-e.length);for(let o=0;o<e.length;++o){const r=t[t.length-e.length+o],i=e[o];if(r==null||i==null||r<0||i<0)s.push(null);else if(r===1)s.push(i);else if(i===1)s.push(r);else{if(r!==i)throw new M("Operands could not be broadcast together with shapes "+JSON.stringify(t)+" "+JSON.stringify(e));s.push(r)}}return s}build(t){if(Array.isArray(t)&&!Array.isArray(t[0])&&(t=[Lt(t)]),t=t,t.length<2)throw new M(`A merge layer should be called on an Array of at least 2 inputs. Got ${t.length} input(s).`);let e=[];for(const r of t)r!=null&&r[0]!==null&&e.push(r[0]);if(e=zs(e),e.length>1)throw new M(`Can not merge tensors with different batch sizes. Got tensors with shapes: ${JSON.stringify(t)}.`);let s=t[0]==null?null:t[0].slice(1);for(let r=1;r<t.length;++r){const i=t[r]==null?null:t[r].slice(1);s=this.computeElementwiseOpOutputShape(s,i)}const o=t.map(r=>r.length);t.indexOf(null)===-1&&zs(o).length===1?this.reshapeRequired=!1:this.reshapeRequired=!0}call(t,e){return U(()=>{if(t=t,this.reshapeRequired){const s=[],o=t.map(r=>r.rank);if(o.indexOf(null)===-1){const r=Ws(o);for(let i of t){const a=i.rank;for(let l=0;l<r-a;++l)i=Hi(i,1);s.push(i)}return this.mergeFunction(s)}else{let r=!1;for(const l of t){const c=l.rank;if(c==null){const u=l.shape,h=u[0],d=u.slice(1).concat([h]);let p=z(l,[h].concat(Vs(u.slice(1))));p=Ot(p,[1,0]),p=z(p,d),s.push(p),r=!0}else if(c>1){const u=Vn(1,c).concat([0]);s.push(Ot(l,u)),r=!0}else s.push(l)}let i=this.mergeFunction(s);const a=i.rank;if(r){if(a==null){const l=i.shape,c=l.length,u=l[c-1],h=[u].concat(l.slice(0,l.length-1));i=z(Ot(z(i,[-1,u]),[1,0]),h)}else if(a>1){const l=[a-1].concat(Vn(0,a-1));i=Ot(i,l)}}return i}}else return this.mergeFunction(t)})}computeOutputShape(t){t=t;let e;t[0]==null?e=null:e=t[0].slice(1);for(let o=1;o<t.length;++o){const r=t[o]==null?null:t[o].slice(1);e=this.computeElementwiseOpOutputShape(e,r)}let s=[];for(const o of t)o!=null&&o[0]!==null&&s.push(o[0]);return s=zs(s),s.length===1?e=s.concat(e):e=[null].concat(e),e}computeMask(t,e){return U(()=>{if(e==null)return null;if(!Array.isArray(e))throw new M("`mask` should be an Array");if(!Array.isArray(t))throw new M("`inputs` should be an Array");if(e.length!==t.length)throw new M(`The Array 'inputs' and 'mask' are expected to have the same length, but have different lengths (${t.length} vs ${e.length})`);if(e.every(o=>o==null))return null;e=e.map(o=>o==null?o:nn(o,0));let s=e[0];for(let o=1;o<e.length-1;++o)s=gs(s,e[o]);return s})}}class Gb extends No{constructor(t){super(t)}mergeFunction(t){return U(()=>{let e=t[0].clone();for(let s=1;s<t.length;++s)e=et(e,t[s]);return e})}}Gb.className="Add",Q(Gb);class Hb extends No{constructor(t){super(t)}mergeFunction(t){return U(()=>{let e=t[0].clone();for(let s=1;s<t.length;++s)e=P(e,t[s]);return e})}}Hb.className="Multiply",Q(Hb);class qb extends No{constructor(t){super(t)}mergeFunction(t){return U(()=>{let e=t[0].clone();for(let s=1;s<t.length;++s)e=et(e,t[s]);return P(1/t.length,e)})}}qb.className="Average",Q(qb);class Xb extends No{constructor(t){super(t)}mergeFunction(t){return U(()=>{let e=t[0];for(let s=1;s<t.length;++s)e=Ls(e,t[s]);return e})}}Xb.className="Maximum",Q(Xb);class Kb extends No{constructor(t){super(t)}mergeFunction(t){return U(()=>{let e=t[0];for(let s=1;s<t.length;++s)e=Oi(e,t[s]);return e})}}Kb.className="Minimum",Q(Kb);class jb extends No{constructor(t){super(t),this.DEFAULT_AXIS=-1,t==null&&(t={}),this.axis=t.axis==null?this.DEFAULT_AXIS:t.axis,this.supportsMasking=!0,this.reshapeRequired=!1}build(t){if(!(Array.isArray(t)&&Array.isArray(t[0]))||t.length===1)throw new M("A `Concatenate` layer should be called on a list of at least 2 inputs");t=t;let e=!0;for(const o of t)if(o!=null){e=!1;break}if(e)return;const s=[];for(let o=0;o<t.length;++o){const r=t[o].slice();r.splice(this.axis,1);let i=!1;for(const a of s)if(Bt(a,r)){i=!0;break}i||s.push(r)}if(s.length>1)throw new M("A `Concatenate` layer requires inputs with matching shapes except for the concat axis. Got input shapes: "+JSON.stringify(t))}mergeFunction(t){return U(()=>Td(t,this.axis))}computeOutputShape(t){if(!(Array.isArray(t)&&Array.isArray(t[0])))throw new M("A `Concatenate` layer should be called on a list of inputs.");const e=t,s=e[0].slice(),o=this.axis<0?s.length+this.axis:this.axis;for(const r of e.slice(1)){if(s[o]==null||r[o]==null){s[o]=null;break}s[o]+=r[o]}return s}computeMask(t,e){if(e==null)return null;if(!Array.isArray(e))throw new M("`mask` should be an array for Concatenate");if(!Array.isArray(t))throw new M("`inputs` should be an array for Concatenate");if(e.length!==t.length)throw new M(`Mismatch in the length of mask (${e.length}) and the legnth of inputs (${t.length})`);return U(()=>{let s=!0;if(e.forEach(i=>{if(i!=null){s=!1;return}}),s)return null;const o=[];for(let i=0;i<t.length;++i)e[i]==null?o.push(at(vn(t[i]),"bool")):e[i].rank<t[i].rank?o.push(nn(e[i],-1)):o.push(e[i]);const r=en(o,this.axis);return um(r,-1,!1)})}getConfig(){const t={axis:this.axis},e=super.getConfig();return Object.assign(t,e),t}}jb.className="Concatenate",Q(jb);function sa(n,t){for(;n<0;)n+=t;return n}function hR(n,t,e){if(n.shape.length>3||t.shape.length>3)throw new vt("batchDot is not implemented for tensors of 4D or higher rank yet");if(T(n.shape.length>=2,()=>`batchDot requires the rank of x to be >= 2, but got ${n.shape.length}`),T(n.shape.length>=2,()=>`batchDot requires the rank of y to be >= 2, but got ${t.shape.length}`),typeof e=="number"&&(e=[e,e]),n.dtype==="complex64"||t.dtype==="complex64")throw new vt("batchDot is not implemented for complex64-type Tensors yet.");const s=n.shape.length,o=t.shape.length;e==null&&(e=[s-1,o-2]);const r=e;return U(()=>{let i;if(s>o){i=s-o;const l=[];for(let c=0;c<i;++c)l.push(1);t=z(t,t.shape.concat(l))}else if(o>s){i=o-s;const l=[];for(let c=0;c<i;++c)l.push(1);n=z(n,n.shape.concat(l))}else i=0;let a;if(n.shape.length===2&&t.shape.length===2)r[0]===r[1]?a=mt(P(n,t),r[0]):a=mt(P(Ot(n,[1,0]),t),r[1]);else{const l=r[0]!==n.shape.length-1,c=r[1]===t.shape.length-1;a=zt(n,t,l,c)}if(i>0){let l;s>o?l=s+o-3:l=s-1;const c=[];for(let u=l;u<l+i;++u)c.push(u);a=Pi(a,c)}return a.shape.length===1&&(a=nn(a,1)),a})}class Yb extends No{constructor(t){super(t),this.axes=t.axes,this.normalize=t.normalize==null?!1:t.normalize,this.supportsMasking=!0,this.reshapeRequired=!1}build(t){T(Array.isArray(t)&&t.length===2&&Array.isArray(t[0])&&Array.isArray(t[1]),()=>"A `Dot` layer should be called on a list of exactly 2 inputs.");const e=t[0],s=t[1];if(e.length>3||s.length>3)throw new vt("Dot layer does not support tensors of 4D or higher rank yet.");const o=this.interpretAxes(e,s);if(e[o[0]]!==s[o[1]])throw new M(`Dimension incompatibility: ${e[o[0]]} !== ${s[o[1]]}`)}mergeFunction(t){if(t.length!==2)throw new M(`A \`Dot\` layer must be called on exactly 2 inputs, but received ${t.length} input(s).`);let e=t[0],s=t[1],o;return Array.isArray(this.axes)?o=this.axes.map((r,i)=>sa(r,t[i].shape.length)):o=[sa(this.axes,e.shape.length),sa(this.axes,s.shape.length)],this.normalize&&(e=uc(e,o[0]),s=uc(s,o[1])),hR(e,s,o)}interpretAxes(t,e){let s;return Array.isArray(this.axes)?s=this.axes:s=[sa(this.axes,t.length),sa(this.axes,e.length)],s}computeOutputShape(t){T(Array.isArray(t)&&t.length===2&&Array.isArray(t[0])&&Array.isArray(t[1]),()=>"A `Dot` layer should be called on a list of exactly 2 inputs.");const e=t[0].slice(),s=t[1].slice();if(e.length>3||s.length>3)throw new vt("Dot layer does not support tensors of 4D or higher rank yet.");const o=this.interpretAxes(e,s);e.splice(o[0],1),s.splice(o[1],1),s.splice(0,1);const r=e.concat(s);return r.length===1&&r.push(1),r}computeMask(t,e){return null}getConfig(){const t={axes:this.axes,normalize:this.normalize},e=super.getConfig();return Object.assign(t,e),t}}Yb.className="Dot",Q(Yb);class Zb extends Rt{constructor(t){super(t),this.supportsMasking=!0,this.stddev=t.stddev}computeOutputShape(t){return t}getConfig(){const t=super.getConfig(),e={stddev:this.stddev};return Object.assign(e,t),e}call(t,e){return U(()=>{this.invokeCallHook(t,e);const s=wt(t);return Xi(()=>et(oc(s.shape,0,this.stddev),s),()=>s,e.training||!1)})}}Zb.className="GaussianNoise",Q(Zb);class Qb extends Rt{constructor(t){super(t),this.supportsMasking=!0,this.rate=t.rate}computeOutputShape(t){return t}getConfig(){const t=super.getConfig(),e={rate:this.rate};return Object.assign(e,t),e}call(t,e){return U(()=>{this.invokeCallHook(t,e);const s=wt(t);return this.rate>0&&this.rate<1?Xi(()=>{const r=Math.sqrt(this.rate/(1-this.rate));return P(s,oc(s.shape,1,r))},()=>s,e.training||!1):s})}}Qb.className="GaussianDropout",Q(Qb);class Jb extends Rt{constructor(t){super(t),this.supportsMasking=!0,this.rate=t.rate,this.noiseShape=t.noiseShape}_getNoiseShape(t){return this.noiseShape||wt(t).shape}computeOutputShape(t){return t}getConfig(){const t=super.getConfig(),e={rate:this.rate};return Object.assign(e,t),e}call(t,e){return U(()=>{if(this.rate<1&&this.rate>0){const s=this._getNoiseShape(t);return Xi(()=>{const r=wt(t),a=-1.6732632423543772*1.0507009873554805;let l=mo(Mi(s),this.rate);l=os(l,"float32");const c=an((1-this.rate)*(1+this.rate*an(a,2)),-.5),u=-c*a*this.rate,h=et(P(r,l),P(et(l,-1),a));return et(P(h,c),u)},()=>wt(t),e.training||!1)}return t})}}Jb.className="AlphaDropout",Q(Jb);function oa(n,t,e,s,o,r=.001){let i;if(n.rank===2)i=M$(n,t,e,s,o,r);else if(n.rank===3)i=P$(n,t,e,s,o,r);else if(n.rank===4)i=z$(n,t,e,s,o,r);else throw new vt(`batchNormalization is not implemented for array of rank ${n.rank} yet`);return i}function dR(n,t,e,s,o=.001){return U(()=>{const r=Ah(n,s),i=r.mean,a=r.variance;return[oa(n,i,a,e,t,o),i,a]})}function pR(n,t,e,s,o=.001){return U(()=>{const r=Ah(n,s),i=r.mean,a=r.variance,l=[];for(const f of Vn(0,n.rank))s.indexOf(f)!==-1?l.push(1):l.push(n.shape[f]);const c=z(i,l),u=z(a,l),h=t==null?null:z(t,l),d=e==null?null:z(e,l);return[oa(n,c,u,d,h,o),i,a]})}function fR(n,t,e,s,o=.001){return Bt(s.slice().sort(),Vn(0,n.rank-1))?dR(n,t,e,s,o):pR(n,t,e,s,o)}class t0 extends Rt{constructor(t){t==null&&(t={}),super(t),this.supportsMasking=!0,this.axis=t.axis==null?-1:t.axis,this.momentum=t.momentum==null?.99:t.momentum,this.epsilon=t.epsilon==null?.001:t.epsilon,this.center=t.center==null?!0:t.center,this.scale=t.scale==null?!0:t.scale,this.betaInitializer=Qt(t.betaInitializer||"zeros"),this.gammaInitializer=Qt(t.gammaInitializer||"ones"),this.movingMeanInitializer=Qt(t.movingMeanInitializer||"zeros"),this.movingVarianceInitializer=Qt(t.movingVarianceInitializer||"ones"),this.betaConstraint=we(t.betaConstraint),this.gammaConstraint=we(t.gammaConstraint),this.betaRegularizer=Jt(t.betaRegularizer),this.gammaRegularizer=Jt(t.gammaRegularizer)}build(t){t=Lt(t);const e=this.axis>=0?this.axis:this.axis+t.length,s=t[e];if(s==null)throw new M(`Axis ${e} of input tensor should have a defined dimension but the layer received an input with shape ${JSON.stringify(t)}.`);this.inputSpec=[new be({ndim:t.length,axes:{[e]:s}})];const o=[s];this.scale&&(this.gamma=this.addWeight("gamma",o,null,this.gammaInitializer,this.gammaRegularizer,!0,this.gammaConstraint)),this.center&&(this.beta=this.addWeight("beta",o,null,this.betaInitializer,this.betaRegularizer,!0,this.betaConstraint)),this.movingMean=this.addWeight("moving_mean",o,null,this.movingMeanInitializer,null,!1),this.movingVariance=this.addWeight("moving_variance",o,null,this.movingVarianceInitializer,null,!1),this.built=!0}call(t,e){return U(()=>{const s=e.training==null?!1:e.training,o=wt(t),r=o.shape,i=r.length,a=Vn(0,i),l=this.axis>=0?this.axis:this.axis+i;a.splice(l,1);const c=Co(1,i);c[l]=r[l];const u=a.slice();u.sort();const h=!Bt(u,Vn(0,i).slice(0,i-1)),d=()=>{if(h){const b=z(this.movingMean.read(),c),y=z(this.movingVariance.read(),c),w=this.center?z(this.beta.read(),c):null,C=this.scale?z(this.gamma.read(),c):null;return oa(o,b,y,w,C,this.epsilon)}else return oa(o,this.movingMean.read(),this.movingVariance.read(),this.beta==null?null:this.beta.read(),this.gamma==null?null:this.gamma.read(),this.epsilon)};if(!s)return d();const[p,f,m]=fR(o,this.gamma.read(),this.beta.read(),a,this.epsilon),g=(b,y,w)=>{U(()=>{const C=1-w,I=b.read(),v=P(yt(I,y),C);b.write(yt(I,v))})};return g(this.movingMean,f,this.momentum),g(this.movingVariance,m,this.momentum),p})}getConfig(){const t={axis:this.axis,momentum:this.momentum,epsilon:this.epsilon,center:this.center,scale:this.scale,betaInitializer:ne(this.betaInitializer),gammaInitializer:ne(this.gammaInitializer),movingMeanInitializer:ne(this.movingMeanInitializer),movingVarianceInitializer:ne(this.movingVarianceInitializer),betaRegularizer:qt(this.betaRegularizer),gammaRegularizer:qt(this.gammaRegularizer),betaConstraint:ye(this.betaConstraint),gammaConstraint:ye(this.gammaConstraint)},e=super.getConfig();return Object.assign(t,e),t}}t0.className="BatchNormalization",Q(t0);class e0 extends Rt{constructor(t){if(t==null&&(t={}),super(t),this.axis=t.axis==null?-1:t.axis,typeof this.axis=="number"){if(!Number.isInteger(this.axis))throw new Error(`Expected axis to be an integer, but received ${this.axis}`)}else if(Array.isArray(this.axis)){for(const e of this.axis)if(!Number.isInteger(e))throw new Error(`Expected axis to be an array of integers, but received ${JSON.stringify(this.axis)}`)}else throw new Error(`Expected axis to be an integer or an array of integers, but received ${JSON.stringify(this.axis)}`);this.epsilon=t.epsilon==null?.001:t.epsilon,this.center=t.center==null?!0:t.center,this.scale=t.scale==null?!0:t.scale,this.betaInitializer=Qt(t.betaInitializer||"zeros"),this.gammaInitializer=Qt(t.gammaInitializer||"ones"),this.betaRegularizer=Jt(t.betaRegularizer),this.gammaRegularizer=Jt(t.gammaRegularizer),this.supportsMasking=!0}build(t){t=Lt(t);const e=t.length;typeof this.axis=="number"&&(this.axis=[this.axis]);for(let r=0;r<this.axis.length;++r)this.axis[r]<0&&(this.axis[r]+=e);for(const r of this.axis)if(r<0||r>=e)throw new Error(`Invalid axis: ${r}`);if(this.axis.length!==zs(this.axis).length)throw new Error(`Found duplicate axes in: ${this.axis}`);const s=this.axis.map(r=>t[r]),o=!0;this.scale?this.gamma=this.addWeight("gamma",s,"float32",this.gammaInitializer,this.gammaRegularizer,o):this.gamma=null,this.center?this.beta=this.addWeight("beta",s,"float32",this.betaInitializer,this.betaRegularizer,o):this.beta=null,this.built=!0}call(t,e){const s=wt(t),o=s.shape,r=o.length;return U(()=>{let{mean:a,variance:l}=Ah(s,this.axis,!0);const c=Co(1,r);for(const m of this.axis)c[m]=o[m];const u=m=>m!=null&&m.shape.length!==r?z(m,c):m;let h=this.scale?u(this.gamma.read()):null,d=this.center?u(this.beta.read()):null;const p=[],f=[];for(let m=0;m<r;++m)this.axis.indexOf(m)!==-1?(p.push(o[m]),f.push(1)):(p.push(1),f.push(o[m]));return a=Bn(a,p),l=Bn(l,p),h!=null&&(h=Bn(h,f)),d!=null&&(d=Bn(d,f)),oa(s,a,l,d,h,this.epsilon)})}getConfig(){const t={axis:this.axis,epsilon:this.epsilon,center:this.center,scale:this.scale,betaInitializer:ne(this.betaInitializer),gammaInitializer:ne(this.gammaInitializer),betaRegularizer:qt(this.betaRegularizer),gammaRegularizer:qt(this.gammaRegularizer)},e=super.getConfig();return Object.assign(t,e),t}}e0.className="LayerNormalization",Q(e0);function mR(n,t,e){return U(()=>{if(n.rank!==4)throw new M(`temporalPadding expects input tensor to be 4-D, but received a ${n.rank}-D tensor.`);if(t==null&&(t=[[1,1],[1,1]]),t.length!==2||t[0].length!==2||t[1].length!==2)throw new M("spatial2dPadding expects `padding` to be an Array of two Arrays, each of which is an Array of two integers.");if(e==null&&(e=Wn()),e!=="channelsLast"&&e!=="channelsFirst")throw new M(`Unknown data format: ${e}. Supported data formats are 'channelsLast' and 'channelsFirst.`);let s;return e==="channelsFirst"?s=[[0,0],[0,0],t[0],t[1]]:s=[[0,0],t[0],t[1],[0,0]],Dh(n,s)})}class n0 extends Rt{constructor(t){if(t==null&&(t={}),super(t),this.dataFormat=t.dataFormat==null?Wn():t.dataFormat,t.padding==null)this.padding=[[1,1],[1,1]];else if(typeof t.padding=="number")this.padding=[[t.padding,t.padding],[t.padding,t.padding]];else{if(t.padding=t.padding,t.padding.length!==2)throw new M(`ZeroPadding2D expects padding to be a length-2 array, but received a length-${t.padding.length} array.`);let e,s;if(typeof t.padding[0]=="number")e=[t.padding[0],t.padding[0]],s=[t.padding[1],t.padding[1]];else{if(t.padding=t.padding,t.padding[0].length!==2)throw new M(`ZeroPadding2D expects height padding to be a length-2 array, but received a length-${t.padding[0].length} array.`);if(e=t.padding[0],t.padding[1].length!==2)throw new M(`ZeroPadding2D expects width padding to be a length-2 array, but received a length-${t.padding[1].length} array.`);s=t.padding[1]}this.padding=[e,s]}this.inputSpec=[new be({ndim:4})]}computeOutputShape(t){t=Lt(t);let e,s;return this.dataFormat==="channelsFirst"?(t[2]!=null&&t[2]>=0?e=t[2]+this.padding[0][0]+this.padding[0][1]:e=null,t[3]!=null&&t[3]>=0?s=t[3]+this.padding[1][0]+this.padding[1][1]:s=null,[t[0],t[1],e,s]):(t[1]!=null&&t[1]>=0?e=t[1]+this.padding[0][0]+this.padding[0][1]:e=null,t[2]!=null&&t[2]>=0?s=t[2]+this.padding[1][0]+this.padding[1][1]:s=null,[t[0],e,s,t[3]])}call(t,e){return U(()=>mR(wt(t),this.padding,this.dataFormat))}getConfig(){const t={padding:this.padding,dataFormat:this.dataFormat},e=super.getConfig();return Object.assign(t,e),t}}n0.className="ZeroPadding2D",Q(n0);function $c(n,t,e,s,o,r){return U(()=>{le(o),Jg(r),wn(s),e==null&&(e=[1,1]),s==null&&(s="valid"),o==null&&(o=Wn()),r==null&&(r="max"),n=tp(n,o);let i;const a=s==="same"?"same":"valid";return r==="max"?i=Rh(n,t,e,a):i=yh(n,t,e,a),o==="channelsFirst"&&(i=Ot(i,[0,3,1,2])),i})}function s0(n,t,e,s,o,r){return U(()=>{le(o),Jg(r),wn(s),e==null&&(e=[1,1,1]),s==null&&(s="valid"),o==null&&(o=Wn()),r==null&&(r="max"),n=yb(n,o);let i;const a=s==="same"?"same":"valid";return r==="max"?i=vv(n,t,e,a):i=S$(n,t,e,a),o==="channelsFirst"&&(i=Ot(i,[0,4,1,2,3])),i})}class o0 extends Rt{constructor(t){if(t.poolSize==null&&(t.poolSize=2),super(t),typeof t.poolSize=="number")this.poolSize=[t.poolSize];else if(Array.isArray(t.poolSize)&&t.poolSize.length===1&&typeof t.poolSize[0]=="number")this.poolSize=t.poolSize;else throw new M(`poolSize for 1D convolutional layer must be a number or an Array of a single number, but received ${JSON.stringify(t.poolSize)}`);if(Ne(this.poolSize,"poolSize"),t.strides==null)this.strides=this.poolSize;else if(typeof t.strides=="number")this.strides=[t.strides];else if(Array.isArray(t.strides)&&t.strides.length===1&&typeof t.strides[0]=="number")this.strides=t.strides;else throw new M(`strides for 1D convolutional layer must be a number or an Array of a single number, but received ${JSON.stringify(t.strides)}`);Ne(this.strides,"strides"),this.padding=t.padding==null?"valid":t.padding,wn(this.padding),this.inputSpec=[new be({ndim:3})]}computeOutputShape(t){t=Lt(t);const e=qn(t[1],this.poolSize[0],this.padding,this.strides[0]);return[t[0],e,t[2]]}call(t,e){return U(()=>{this.invokeCallHook(t,e),t=Hi(wt(t),2);const s=this.poolingFunction(wt(t),[this.poolSize[0],1],[this.strides[0],1],this.padding,"channelsLast");return Pi(s,[2])})}getConfig(){const t={poolSize:this.poolSize,padding:this.padding,strides:this.strides},e=super.getConfig();return Object.assign(t,e),t}}class r0 extends o0{constructor(t){super(t)}poolingFunction(t,e,s,o,r){return le(r),wn(o),$c(t,e,s,o,r,"max")}}r0.className="MaxPooling1D",Q(r0);class i0 extends o0{constructor(t){super(t)}poolingFunction(t,e,s,o,r){return le(r),wn(o),$c(t,e,s,o,r,"avg")}}i0.className="AveragePooling1D",Q(i0);class a0 extends Rt{constructor(t){if(t.poolSize==null&&(t.poolSize=[2,2]),super(t),this.poolSize=Array.isArray(t.poolSize)?t.poolSize:[t.poolSize,t.poolSize],t.strides==null)this.strides=this.poolSize;else if(Array.isArray(t.strides)){if(t.strides.length!==2)throw new M(`If the strides property of a 2D pooling layer is an Array, it is expected to have a length of 2, but received length ${t.strides.length}.`);this.strides=t.strides}else this.strides=[t.strides,t.strides];Ne(this.poolSize,"poolSize"),Ne(this.strides,"strides"),this.padding=t.padding==null?"valid":t.padding,this.dataFormat=t.dataFormat==null?"channelsLast":t.dataFormat,le(this.dataFormat),wn(this.padding),this.inputSpec=[new be({ndim:4})]}computeOutputShape(t){t=Lt(t);let e=this.dataFormat==="channelsFirst"?t[2]:t[1],s=this.dataFormat==="channelsFirst"?t[3]:t[2];return e=qn(e,this.poolSize[0],this.padding,this.strides[0]),s=qn(s,this.poolSize[1],this.padding,this.strides[1]),this.dataFormat==="channelsFirst"?[t[0],t[1],e,s]:[t[0],e,s,t[3]]}call(t,e){return U(()=>(this.invokeCallHook(t,e),this.poolingFunction(wt(t),this.poolSize,this.strides,this.padding,this.dataFormat)))}getConfig(){const t={poolSize:this.poolSize,padding:this.padding,strides:this.strides,dataFormat:this.dataFormat},e=super.getConfig();return Object.assign(t,e),t}}class l0 extends a0{constructor(t){super(t)}poolingFunction(t,e,s,o,r){return le(r),wn(o),$c(t,e,s,o,r,"max")}}l0.className="MaxPooling2D",Q(l0);class c0 extends a0{constructor(t){super(t)}poolingFunction(t,e,s,o,r){return le(r),wn(o),$c(t,e,s,o,r,"avg")}}c0.className="AveragePooling2D",Q(c0);class u0 extends Rt{constructor(t){if(t.poolSize==null&&(t.poolSize=[2,2,2]),super(t),this.poolSize=Array.isArray(t.poolSize)?t.poolSize:[t.poolSize,t.poolSize,t.poolSize],t.strides==null)this.strides=this.poolSize;else if(Array.isArray(t.strides)){if(t.strides.length!==3)throw new M(`If the strides property of a 3D pooling layer is an Array, it is expected to have a length of 3, but received length ${t.strides.length}.`);this.strides=t.strides}else this.strides=[t.strides,t.strides,t.strides];Ne(this.poolSize,"poolSize"),Ne(this.strides,"strides"),this.padding=t.padding==null?"valid":t.padding,this.dataFormat=t.dataFormat==null?"channelsLast":t.dataFormat,le(this.dataFormat),wn(this.padding),this.inputSpec=[new be({ndim:5})]}computeOutputShape(t){t=Lt(t);let e=this.dataFormat==="channelsFirst"?t[2]:t[1],s=this.dataFormat==="channelsFirst"?t[3]:t[2],o=this.dataFormat==="channelsFirst"?t[4]:t[3];return e=qn(e,this.poolSize[0],this.padding,this.strides[0]),s=qn(s,this.poolSize[1],this.padding,this.strides[1]),o=qn(o,this.poolSize[2],this.padding,this.strides[2]),this.dataFormat==="channelsFirst"?[t[0],t[1],e,s,o]:[t[0],e,s,o,t[4]]}call(t,e){return U(()=>(this.invokeCallHook(t,e),this.poolingFunction(wt(t),this.poolSize,this.strides,this.padding,this.dataFormat)))}getConfig(){const t={poolSize:this.poolSize,padding:this.padding,strides:this.strides,dataFormat:this.dataFormat},e=super.getConfig();return Object.assign(t,e),t}}class h0 extends u0{constructor(t){super(t)}poolingFunction(t,e,s,o,r){return le(r),wn(o),s0(t,e,s,o,r,"max")}}h0.className="MaxPooling3D",Q(h0);class d0 extends u0{constructor(t){super(t)}poolingFunction(t,e,s,o,r){return le(r),wn(o),s0(t,e,s,o,r,"avg")}}d0.className="AveragePooling3D",Q(d0);class p0 extends Rt{constructor(t){super(t),this.inputSpec=[new be({ndim:3})]}computeOutputShape(t){return[t[0],t[2]]}call(t,e){throw new vt}}class f0 extends p0{constructor(t){super(t||{})}call(t,e){return U(()=>{const s=wt(t);return de(s,1)})}}f0.className="GlobalAveragePooling1D",Q(f0);class m0 extends p0{constructor(t){super(t||{})}call(t,e){return U(()=>{const s=wt(t);return Pn(s,1)})}}m0.className="GlobalMaxPooling1D",Q(m0);class g0 extends Rt{constructor(t){super(t),this.dataFormat=t.dataFormat==null?"channelsLast":t.dataFormat,le(this.dataFormat),this.inputSpec=[new be({ndim:4})]}computeOutputShape(t){return t=t,this.dataFormat==="channelsLast"?[t[0],t[3]]:[t[0],t[1]]}call(t,e){throw new vt}getConfig(){const t={dataFormat:this.dataFormat},e=super.getConfig();return Object.assign(t,e),t}}class x0 extends g0{call(t,e){return U(()=>{const s=wt(t);return this.dataFormat==="channelsLast"?de(s,[1,2]):de(s,[2,3])})}}x0.className="GlobalAveragePooling2D",Q(x0);class b0 extends g0{call(t,e){return U(()=>{const s=wt(t);return this.dataFormat==="channelsLast"?Pn(s,[1,2]):Pn(s,[2,3])})}}b0.className="GlobalMaxPooling2D",Q(b0);class y0 extends Rt{constructor(t){super(t),this.layer=t.layer}build(t){this.built=!0}get trainable(){return this.layer!=null?this.layer.trainable:!1}set trainable(t){this.layer!=null&&(this.layer.trainable=t)}get trainableWeights(){return this.layer.trainableWeights}get nonTrainableWeights(){return this.layer.nonTrainableWeights}get updates(){return this.layer._updates}get losses(){return this.layer.losses}getWeights(){return this.layer.getWeights()}setWeights(t){this.layer.setWeights(t)}getConfig(){const t={layer:{className:this.layer.getClassName(),config:this.layer.getConfig()}},e=super.getConfig();return Object.assign(t,e),t}setFastWeightInitDuringBuild(t){super.setFastWeightInitDuringBuild(t),this.layer!=null&&this.layer.setFastWeightInitDuringBuild(t)}static fromConfig(t,e,s={}){const o=e.layer,r=$s(o,s);delete e.layer;const i={layer:r};return Object.assign(i,e),new t(i)}}class w0 extends y0{constructor(t){super(t),this.supportsMasking=!0}build(t){if(t=Lt(t),t.length<3)throw new M(`TimeDistributed layer expects an input shape >= 3D, but received input shape ${JSON.stringify(t)}`);this.inputSpec=[{shape:t}];const e=[t[0]].concat(t.slice(2));this.layer.built||(this.layer.build(e),this.layer.built=!0),super.build(t)}computeOutputShape(t){t=Lt(t);const e=[t[0]].concat(t.slice(2)),s=this.layer.computeOutputShape(e),o=t[1];return[s[0],o].concat(s.slice(1))}call(t,e){return U(()=>(t=wt(t),Eb((i,a)=>[wt(this.layer.call(i,e)),[]],t,[],!1,null,null,!1,!0)[1]))}}w0.className="TimeDistributed",Q(w0);function gR(n){Io(PT,"BidirectionalMergeMode",n)}const xR="concat";class C0 extends y0{constructor(t){super(t);const e=t.layer.getConfig(),s={};s.className=t.layer.getClassName(),s.config=e,this.forwardLayer=$s(s),e.goBackwards=e.goBackwards!==!0;const o={};if(o.className=t.layer.getClassName(),o.config=e,this.backwardLayer=$s(o),this.forwardLayer.name="forward_"+this.forwardLayer.name,this.backwardLayer.name="backward_"+this.backwardLayer.name,this.mergeMode=t.mergeMode===void 0?xR:t.mergeMode,gR(this.mergeMode),t.weights)throw new vt("weights support is not implemented for Bidirectional layer yet.");this._stateful=t.layer.stateful,this.returnSequences=t.layer.returnSequences,this.returnState=t.layer.returnState,this.supportsMasking=!0,this._trainable=!0,this.inputSpec=t.layer.inputSpec,this.numConstants=null}get trainable(){return this._trainable}set trainable(t){this._trainable=t,this.forwardLayer!=null&&(this.forwardLayer.trainable=t),this.backwardLayer!=null&&(this.backwardLayer.trainable=t)}getWeights(){return this.forwardLayer.getWeights().concat(this.backwardLayer.getWeights())}setWeights(t){const e=t.length,s=Math.floor(e/2);this.forwardLayer.setWeights(t.slice(0,s)),this.backwardLayer.setWeights(t.slice(s))}computeOutputShape(t){let e=this.forwardLayer.computeOutputShape(t);Array.isArray(e)&&Array.isArray(e[0])||(e=[e]),e=e;let s,o,r;return this.returnState&&(r=e.slice(1)),s=e[0],s=s,this.mergeMode==="concat"?(s[s.length-1]*=2,o=[s]):this.mergeMode==null?o=[s,s.slice()]:o=[s],this.returnState?this.mergeMode==null?o.concat(r).concat(r.slice()):[s].concat(r).concat(r.slice()):sn(o)}apply(t,e){let s=e==null?null:e.initialState,o=e==null?null:e.constants;e==null&&(e={});const r=Tb(t,s,o,this.numConstants);if(t=r.inputs,s=r.initialState,o=r.constants,Array.isArray(t)&&(s=t.slice(1),t=t[0]),(s==null||s.length===0)&&o==null)return super.apply(t,e);const i=[],a=[];if(s!=null){const c=s.length;if(c%2>0)throw new M("When passing `initialState` to a Bidrectional RNN, the state should be an Array containing the states of the underlying RNNs.");e.initialState=s,i.push(...s);const u=s.map(h=>new be({shape:h.shape}));this.forwardLayer.stateSpec=u.slice(0,c/2),this.backwardLayer.stateSpec=u.slice(c/2),a.push(...u)}if(o!=null)throw new vt("Support for constants in Bidirectional layers is not implemented yet.");const l=i[0]instanceof is;for(const c of i)if(c instanceof is!==l)throw new M("The initial state of a Bidirectional layer cannot be specified as a mix of symbolic and non-symbolic tensors");if(l){const c=[t].concat(i),u=this.inputSpec.concat(a),h=this.inputSpec;this.inputSpec=u;const d=super.apply(c,e);return this.inputSpec=h,d}else return super.apply(t,e)}call(t,e){return U(()=>{const s=e.initialState;let o,r;if(s==null)o=this.forwardLayer.call(t,e),r=this.backwardLayer.call(t,e);else{const l=s.slice(0,s.length/2),c=s.slice(s.length/2);o=this.forwardLayer.call(t,Object.assign(e,{initialState:l})),r=this.backwardLayer.call(t,Object.assign(e,{initialState:c}))}let i;this.returnState&&(Array.isArray(o)&&(i=o.slice(1).concat(r.slice(1))),o=o[0],r=r[0]),this.returnSequences&&(r=xo(r,1));let a;return this.mergeMode==="concat"?a=Td([o,r]):this.mergeMode==="sum"?a=et(o,r):this.mergeMode==="ave"?a=P(.5,et(o,r)):this.mergeMode==="mul"?a=P(o,r):this.mergeMode==null&&(a=[o,r]),this.returnState?this.mergeMode==null?a.concat(i):[a].concat(i):a})}resetStates(t){this.forwardLayer.resetStates(),this.backwardLayer.resetStates()}build(t){vo(this.forwardLayer.name,()=>{this.forwardLayer.build(t)}),vo(this.backwardLayer.name,()=>{this.backwardLayer.build(t)}),this.built=!0}computeMask(t,e){Array.isArray(e)&&(e=e[0]);let s;if(this.returnSequences?this.mergeMode==null?s=[e,e]:s=e:this.mergeMode==null?s=[null,null]:s=null,this.returnState){const r=this.forwardLayer.states.map(i=>null);return Array.isArray(s)?s.concat(r).concat(r):[s].concat(r).concat(r)}else return s}get trainableWeights(){return this.forwardLayer.trainableWeights.concat(this.backwardLayer.trainableWeights)}get nonTrainableWeights(){return this.forwardLayer.nonTrainableWeights.concat(this.backwardLayer.nonTrainableWeights)}setFastWeightInitDuringBuild(t){super.setFastWeightInitDuringBuild(t),this.forwardLayer!=null&&this.forwardLayer.setFastWeightInitDuringBuild(t),this.backwardLayer!=null&&this.backwardLayer.setFastWeightInitDuringBuild(t)}getConfig(){const t={mergeMode:this.mergeMode},e=super.getConfig();return Object.assign(t,e),t}static fromConfig(t,e){const s=$s(e.layer);if(delete e.layer,e.numConstants!=null)throw new vt("Deserialization of a Bidirectional layer with numConstants present is not supported yet.");const o=e;return o.layer=s,new t(o)}}C0.className="Bidirectional",Q(C0);class $0 extends Rt{constructor(t){super(t),this.scale=t.scale,t.offset?this.offset=t.offset:this.offset=0}getConfig(){const t={scale:this.scale,offset:this.offset},e=super.getConfig();return Object.assign(t,e),t}call(t,e){return U(()=>(t=wt(t),t.dtype!=="float32"&&(t=os(t,"float32")),et(P(t,this.scale),this.offset)))}}$0.className="Rescaling",Q($0);const{resizeBilinear:bR,cropAndResize:yR}=bs;class I0 extends Rt{constructor(t){super(t),this.height=t.height,this.width=t.width}centerCrop(t,e,s,o,r,i,a,l){return U(()=>{let c,u=!1;const h=e/i,d=s/a,p=(o+e)/i,f=(r+s)/a,m=[h,d,p,f],g=[];t.rank===3?(u=!0,c=xs([t])):c=t;for(let C=0;C<c.shape[0];C++)g.push(m);const x=Al(g,[g.length,4]),b=Li(0,g.length,1,"int32"),w=yR(c,x,b,[o,r],"nearest");return os(u?wt(yo(w)):w,l)})}upsize(t,e,s,o){return U(()=>{const r=bR(t,[e,s]);return os(r,o)})}call(t,e){return U(()=>{const s=wt(t),o=s.dtype,r=s.shape,i=r[r.length-3],a=r[r.length-2];let l=0;i!==this.height&&(l=Math.floor((i-this.height)/2));let c=0;return a!==this.width&&(c=Math.floor((a-this.width)/2),c===0&&(c=1)),l>=0&&c>=0?this.centerCrop(s,l,c,this.height,this.width,i,a,o):this.upsize(t,this.height,this.width,o)})}getConfig(){const t={height:this.height,width:this.width},e=super.getConfig();return Object.assign(t,e),t}computeOutputShape(t){t=Lt(t);const e=t.length-3,s=t.length-2;return t[e]=this.height,t[s]=this.width,t}}I0.className="CenterCrop",Q(I0);function wR(n,t,e,s){let o=wt(n);if(o.dtype!=="int32"&&(o=os(o,"int32")),t==="int")return o;const r=o.shape;if(o.rank===0&&(o=nn(o,-1)),t==="oneHot"&&o.shape[o.shape.length-1]!==1&&(o=nn(o,-1)),o.rank>2)throw new M(`When outputMode is not int, maximum output rank is 2 Received outputMode ${t} and input shape ${r} which would result in output rank ${o.rank}.`);const i=["multiHot","oneHot"].includes(t),a=o;let l;if(typeof s!="undefined"&&t==="count"?l=gm(a,s,e,i):l=gm(a,[],e,i),t!=="tfIdf")return l;if(s)return P(l,s);throw new M("When outputMode is 'tfIdf', weights must be provided.")}class v0 extends Rt{constructor(t){super(t),this.numTokens=t.numTokens,t.outputMode?this.outputMode=t.outputMode:this.outputMode="multiHot"}getConfig(){const t={numTokens:this.numTokens,outputMode:this.outputMode},e=super.getConfig();return Object.assign(t,e),t}computeOutputShape(t){return t=Lt(t),t==null?[this.numTokens]:this.outputMode==="oneHot"&&t[t.length-1]!==1?(t.push(this.numTokens),t):(t[t.length-1]=this.numTokens,t)}call(t,e){return U(()=>{t=wt(t),t.dtype!=="int32"&&(t=os(t,"int32"));let s;if(typeof e.countWeights!="undefined"){if(this.outputMode!=="count")throw new M(`countWeights is not used when outputMode !== count.
              Received countWeights=${e.countWeights}`);s=wt(e.countWeights)}const o=Pn(t),r=Ll(t),i=bn(this.numTokens,o).bufferSync().get(0),a=mo(r,0).bufferSync().get(0);if(!(i&&a))throw new M(`Input values must be between 0 < values <= numTokens with numTokens=${this.numTokens}`);return wR(t,this.outputMode,this.numTokens,s)})}}v0.className="CategoryEncoding",Q(v0);const CR=["bilinear","nearest"],k0=new Set(CR);class S0 extends Rt{constructor(t){if(super(t),this.height=t.height,this.width=t.width,t.interpolation)if(k0.has(t.interpolation))this.interpolation=t.interpolation;else throw new M(`Invalid interpolation parameter: ${t.interpolation} is not implemented`);else this.interpolation="bilinear";this.cropToAspectRatio=!!t.cropToAspectRatio}computeOutputShape(t){t=Lt(t);const e=t[2];return[this.height,this.width,e]}getConfig(){const t={height:this.height,width:this.width,interpolation:this.interpolation,cropToAspectRatio:this.cropToAspectRatio},e=super.getConfig();return Object.assign(t,e),t}call(t,e){return U(()=>{const s=[this.height,this.width];if(this.interpolation==="bilinear")return bs.resizeBilinear(t,s,!this.cropToAspectRatio);if(this.interpolation==="nearest")return bs.resizeNearestNeighbor(t,s,!this.cropToAspectRatio);throw new Error(`Interpolation is ${this.interpolation} but only ${[...k0]} are supported`)})}}S0.className="Resizing",Q(S0);class N0{constructor(t){this.seed=t}next(){if(this.seed!==void 0)return this.seed++}}N0.className="RandomSeed";class T0 extends Rt{constructor(t){super(t),this.randomGenerator=new N0(t.seed)}getConfig(){const t={seed:this.randomGenerator.seed},e=super.getConfig();return Object.assign(t,e),t}}T0.className="BaseRandomLayer";const $R=["bilinear","nearest"],E0=new Set($R);class R0 extends T0{constructor(t){super(t);const{factor:e,interpolation:s="bilinear"}=t;if(this.factor=e,Array.isArray(this.factor)&&this.factor.length===2)this.widthLower=this.factor[0],this.widthUpper=this.factor[1];else if(!Array.isArray(this.factor)&&this.factor>0)this.widthLower=-this.factor,this.widthUpper=this.factor;else throw new M(`Invalid factor: ${this.factor}. Must be positive number or tuple of 2 numbers`);if(this.widthLower<-1||this.widthUpper<-1)throw new M(`factor must have values larger than -1. Got: ${this.factor}`);if(this.widthUpper<this.widthLower)throw new M(`factor cannot have upper bound less than lower bound.
        Got upper bound: ${this.widthUpper}.
        Got lower bound: ${this.widthLower}
      `);if(s)if(E0.has(s))this.interpolation=s;else throw new M(`Invalid interpolation parameter: ${s} is not implemented`)}getConfig(){const t={factor:this.factor,interpolation:this.interpolation},e=super.getConfig();return Object.assign(t,e),t}computeOutputShape(t){t=Lt(t);const e=t[2];return[this.imgHeight,-1,e]}call(t,e){return U(()=>{const s=wt(t);this.imgHeight=s.shape[s.shape.length-3];const o=s.shape[s.shape.length-2];this.widthFactor=Mi([1],1+this.widthLower,1+this.widthUpper,"float32",this.randomGenerator.next());let r=this.widthFactor.dataSync()[0]*o;r=Math.round(r);const i=[this.imgHeight,r];switch(this.interpolation){case"bilinear":return bs.resizeBilinear(t,i);case"nearest":return bs.resizeNearestNeighbor(t,i);default:throw new Error(`Interpolation is ${this.interpolation}
          but only ${[...E0]} are supported`)}})}}R0.className="RandomWidth",Q(R0);H().registerFlag("KEEP_INTERMEDIATE_TENSORS",()=>!1,n=>{n&&console.warn("Keep intermediate tensors is ON. This will print the values of all intermediate tensors during model inference. Not all models support this mode. For details, check e2e/benchmarks/ model_config.js. This significantly impacts performance.")});var A0;(function(n){n[n.DT_INVALID=0]="DT_INVALID",n[n.DT_FLOAT=1]="DT_FLOAT",n[n.DT_DOUBLE=2]="DT_DOUBLE",n[n.DT_INT32=3]="DT_INT32",n[n.DT_UINT8=4]="DT_UINT8",n[n.DT_INT16=5]="DT_INT16",n[n.DT_INT8=6]="DT_INT8",n[n.DT_STRING=7]="DT_STRING",n[n.DT_COMPLEX64=8]="DT_COMPLEX64",n[n.DT_INT64=9]="DT_INT64",n[n.DT_BOOL=10]="DT_BOOL",n[n.DT_QINT8=11]="DT_QINT8",n[n.DT_QUINT8=12]="DT_QUINT8",n[n.DT_QINT32=13]="DT_QINT32",n[n.DT_BFLOAT16=14]="DT_BFLOAT16",n[n.DT_QINT16=15]="DT_QINT16",n[n.DT_QUINT16=16]="DT_QUINT16",n[n.DT_UINT16=17]="DT_UINT16",n[n.DT_COMPLEX128=18]="DT_COMPLEX128",n[n.DT_HALF=19]="DT_HALF",n[n.DT_RESOURCE=20]="DT_RESOURCE",n[n.DT_VARIANT=21]="DT_VARIANT",n[n.DT_UINT32=22]="DT_UINT32",n[n.DT_UINT64=23]="DT_UINT64",n[n.DT_FLOAT_REF=101]="DT_FLOAT_REF",n[n.DT_DOUBLE_REF=102]="DT_DOUBLE_REF",n[n.DT_INT32_REF=103]="DT_INT32_REF",n[n.DT_UINT8_REF=104]="DT_UINT8_REF",n[n.DT_INT16_REF=105]="DT_INT16_REF",n[n.DT_INT8_REF=106]="DT_INT8_REF",n[n.DT_STRING_REF=107]="DT_STRING_REF",n[n.DT_COMPLEX64_REF=108]="DT_COMPLEX64_REF",n[n.DT_INT64_REF=109]="DT_INT64_REF",n[n.DT_BOOL_REF=110]="DT_BOOL_REF",n[n.DT_QINT8_REF=111]="DT_QINT8_REF",n[n.DT_QUINT8_REF=112]="DT_QUINT8_REF",n[n.DT_QINT32_REF=113]="DT_QINT32_REF",n[n.DT_BFLOAT16_REF=114]="DT_BFLOAT16_REF",n[n.DT_QINT16_REF=115]="DT_QINT16_REF",n[n.DT_QUINT16_REF=116]="DT_QUINT16_REF",n[n.DT_UINT16_REF=117]="DT_UINT16_REF",n[n.DT_COMPLEX128_REF=118]="DT_COMPLEX128_REF",n[n.DT_HALF_REF=119]="DT_HALF_REF",n[n.DT_RESOURCE_REF=120]="DT_RESOURCE_REF",n[n.DT_VARIANT_REF=121]="DT_VARIANT_REF",n[n.DT_UINT32_REF=122]="DT_UINT32_REF",n[n.DT_UINT64_REF=123]="DT_UINT64_REF"})(A0||(A0={}));var D0;(function(n){(function(t){t[t.LEGACY=0]="LEGACY",t[t.V1=1]="V1",t[t.V2=2]="V2"})(n.CheckpointFormatVersion||(n.CheckpointFormatVersion={}))})(D0||(D0={}));var F0;(function(n){n[n.FAIL=0]="FAIL",n[n.SHORTEST=1]="SHORTEST",n[n.LONGEST=2]="LONGEST"})(F0||(F0={}));function ut(n,t){Array.isArray(n)||(n=[n]),n.forEach(e=>{e!=null&&T(e.dtype!=="complex64",()=>`${t} does not support complex64 tensors in the CPU backend.`)})}const IR=qm;class Ic extends Po{nextDataId(){return Ic.nextDataId++}constructor(){super(),this.blockSize=48,this.firstUse=!0,this.data=new wa(this,un())}write(t,e,s){this.firstUse&&(this.firstUse=!1,H().get("IS_NODE")&&gn(`
============================
Hi, looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, visit https://github.com/tensorflow/tfjs-node for more details. 
============================`));const o={id:this.nextDataId()};return this.data.set(o,{values:t,dtype:s,refCount:1}),o}makeTensorInfo(t,e,s){let o;if(e==="string"&&s!=null&&s.length>0&&Er(s[0])){const r=s.map(i=>As(i));o=this.write(r,t,e)}else o=this.write(s,t,e);return{dataId:o,shape:t,dtype:e}}refCount(t){return this.data.has(t)?this.data.get(t).refCount:0}incRef(t){const e=this.data.get(t);e.refCount++}decRef(t){if(this.data.has(t)){const e=this.data.get(t);e.refCount--}}move(t,e,s,o,r){this.data.set(t,{values:e,dtype:o,refCount:r})}numDataIds(){return this.data.numDataIds()}read(t){return Z(this,null,function*(){return this.readSync(t)})}readSync(t){const{dtype:e,complexTensorInfos:s}=this.data.get(t);if(e==="complex64"){const o=this.readSync(s.real.dataId),r=this.readSync(s.imag.dataId);return ys(o,r)}return Bw(this.data.get(t).values,e)}bufferSync(t){const e=this.readSync(t.dataId);if(t.dtype==="string")try{const s=e.map(o=>Ds(o));return Et(t.shape,t.dtype,s)}catch(s){throw new Error("Failed to decode encoded string bytes into utf-8")}return Et(t.shape,t.dtype,e)}makeOutput(t,e,s){return un().makeTensorFromTensorInfo(this.makeTensorInfo(e,s,t),this)}disposeData(t,e=!1){if(this.data.has(t)){if(this.data.get(t).refCount--,!e&&this.data.get(t).refCount>0)return!1;const{complexTensorInfos:s}=this.data.get(t);s!=null&&(this.disposeData(s.real.dataId,!0),this.disposeData(s.imag.dataId,!0)),this.data.delete(t)}return!0}disposeIntermediateTensorInfo(t){this.disposeData(t.dataId)}time(t){return Z(this,null,function*(){const e=Qe();return t(),{kernelMs:Qe()-e}})}memory(){return{unreliable:!0,reasons:["The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less."]}}where(t){ut([t],"where");const e=this.readSync(t.dataId);return IR(t.shape,e)}dispose(){}floatPrecision(){return 32}epsilon(){return super.epsilon()}}Ic.nextDataId=0;function _0(n){const t=new Float32Array(n.length);for(let e=0;e<n.length;++e)t[e]=Math.abs(n[e]);return t}const vR={kernelName:$a,backendName:"cpu",kernelFunc:n=>{const{x:t}=n.inputs,e=n.backend;ut(t,"abs");let s=new Float32Array(K(t.shape));const o=e.data.get(t.dataId).values;return s=_0(o),e.makeOutput(s,t.shape,t.dtype)}};function ce(n){return(t,e,s,o,r)=>{const i=$t(t,e),a=i.length,l=ft(i),c=K(i),u=Pe(r,c),h=t.length,d=e.length,p=ft(t),f=ft(e),m=Zo(t,i),g=Zo(e,i);if(m.length+g.length===0)for(let x=0;x<u.length;++x)u[x]=n(s[x%s.length],o[x%o.length]);else for(let x=0;x<u.length;++x){const b=Wo(x,a,l),y=b.slice(-h);m.forEach(v=>y[v]=0);const w=jn(y,h,p),C=b.slice(-d);g.forEach(v=>C[v]=0);const I=jn(C,d,f);u[x]=n(s[w],o[I])}return[u,i]}}function pn(n){const{inputs:t,backend:e}=n,{real:s,imag:o}=t,r=e.data.get(s.dataId).values,i=e.data.get(o.dataId).values,a=e.makeTensorInfo(s.shape,"complex64"),l=e.data.get(a.dataId);return l.complexTensorInfos={real:e.makeTensorInfo(s.shape,"float32",r),imag:e.makeTensorInfo(o.shape,"float32",i)},a}const kR={kernelName:yu,backendName:"cpu",kernelFunc:pn};function vc(n,t,e="float32"){if(e==="complex64"){const o=vc(n,t,"float32"),r=vc(n,t,"float32");return pn({inputs:{real:o,imag:r},backend:n})}const s=Be(K(t),e);return n.makeTensorInfo(t,e,s)}function ls(n){const{inputs:t,backend:e}=n,{x:s}=t;return e.incRef(s.dataId),{dataId:s.dataId,shape:s.shape,dtype:s.dtype}}const SR={kernelName:Yr,backendName:"cpu",kernelFunc:ls};function To(n){const{inputs:t,backend:e}=n,{input:s}=t,o=e.data.get(s.dataId).complexTensorInfos.real,r=e.data.get(o.dataId).values;return e.makeTensorInfo(o.shape,o.dtype,r)}const NR={kernelName:Hu,backendName:"cpu",kernelFunc:To};function O0(n,t,e,s){if(s==="int32"){const o=Int32Array.from(n);return[t,"int32",o]}if(s==="bool"){const o=oo([0],e),[r,i]=ce((a,l)=>a!==l?1:0)(t,[],n,o,"bool");return[i,"bool",r]}throw new Error(`Error in Cast: failed to cast ${e} to ${s}`)}function Ks(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{dtype:r}=s;if(r==="complex64"){if(o.dtype==="complex64")return ls({inputs:{x:o},backend:e});const u=vc(e,o.shape,o.dtype),h=Ks({inputs:{x:o},backend:e,attrs:{dtype:"float32"}}),d=pn({inputs:{real:h,imag:u},backend:e});return e.disposeIntermediateTensorInfo(u),e.disposeIntermediateTensorInfo(h),d}if(o.dtype==="complex64"){const u=To({inputs:{input:o},backend:e}),h=Ks({inputs:{x:u},backend:e,attrs:{dtype:r}});return e.disposeIntermediateTensorInfo(u),h}if(!Kp(o.dtype,r)){const u=ls({inputs:{x:o},backend:e});return{dataId:u.dataId,shape:u.shape,dtype:r}}const i=e.data.get(o.dataId).values,[a,l,c]=O0(i,o.shape,o.dtype,r);return e.makeTensorInfo(a,l,c)}const TR={kernelName:Lr,backendName:"cpu",kernelFunc:Ks};function Ce(n,t,e,s){return e==null?({inputs:o,backend:r})=>{const{a:i,b:a}=o,l=r;ut([i,a],n);const c=l.data.get(i.dataId).values,u=l.data.get(a.dataId).values,h=i.dtype==="string"?ws(c):c,d=i.dtype==="string"?ws(u):u,p=s||i.dtype,[f,m]=t(i.shape,a.shape,h,d,p);return l.makeTensorInfo(m,p,f)}:({inputs:o,backend:r})=>{const{a:i,b:a}=o,l=r;if(i.dtype==="complex64"||a.dtype==="complex64"){const c=Ks({inputs:{x:i},backend:l,attrs:{dtype:"complex64"}}),u=l.data.get(c.dataId),h=u.complexTensorInfos.real,d=u.complexTensorInfos.imag,p=l.data.get(h.dataId).values,f=l.data.get(d.dataId).values,m=Ks({inputs:{x:a},backend:l,attrs:{dtype:"complex64"}}),g=l.data.get(m.dataId),x=g.complexTensorInfos.real,b=g.complexTensorInfos.imag,y=l.data.get(x.dataId).values,w=l.data.get(b.dataId).values,[C,I,v]=e(i.shape,a.shape,p,f,y,w),N=l.makeTensorInfo(v,"float32",C),k=l.makeTensorInfo(v,"float32",I),S=pn({inputs:{real:N,imag:k},backend:l});return l.disposeIntermediateTensorInfo(c),l.disposeIntermediateTensorInfo(m),l.disposeIntermediateTensorInfo(N),l.disposeIntermediateTensorInfo(k),S}else{const c=l.data.get(i.dataId).values,u=l.data.get(a.dataId).values,h=s||i.dtype,[d,p]=t(i.shape,a.shape,c,u,h);return l.makeTensorInfo(p,h,d)}}}function ip(n){return(t,e,s,o,r,i)=>{const a=$t(t,e),l=K(a),c=a.length,u=ft(a),h=Pe("float32",l),d=Pe("float32",l),p=Zo(t,a),f=Zo(e,a),m=ys(s,o),g=ys(r,i),x=t.length,b=ft(t),y=e.length,w=ft(e);if(p.length+f.length===0)for(let C=0;C<h.length;C++){const I=C%m.length,v=C%g.length,N=n(m[I*2],m[I*2+1],g[v*2],g[v*2+1]);h[C]=N.real,d[C]=N.imag}else for(let C=0;C<h.length;C++){const I=Wo(C,c,u),v=I.slice(-x);p.forEach(E=>v[E]=0);const N=jn(v,x,b),k=I.slice(-y);f.forEach(E=>k[E]=0);const S=jn(k,y,w),$=n(m[N*2],m[N*2+1],g[S*2],g[S*2+1]);h[C]=$.real,d[C]=$.imag}return[h,d,a]}}const M0=ce(((n,t)=>n+t)),ER=ip(((n,t,e,s)=>({real:n+e,imag:t+s}))),lr=Ce(Uo,M0,ER),RR={kernelName:Uo,backendName:"cpu",kernelFunc:lr};function ap(n,t,e,s,o){const r=K(s),i=Be(o,e);for(let a=0;a<n.length;a++){const l=n[a];if(l<0)throw new Error("Input x must be non-negative!");l>=o||(r>0?i[l]+=t[a]:i[l]+=1)}return i}function L0(n,t,e,s=!1){const o=n.shape[0],r=n.shape[1],i=Et([o,e],t.dtype);for(let a=0;a<o;a++)for(let l=0;l<r;l++){const c=n.get(a,l);if(c<0)throw new Error("Input x must be non-negative!");c>=e||(s?i.set(1,a,c):t.size>0?i.set(i.get(a,c)+t.get(a,l),a,c):i.set(i.get(a,c)+1,a,c))}return i}const P0=ce(((n,t)=>n&t)),AR=Ce(bu,P0),DR={kernelName:bu,backendName:"cpu",kernelFunc:AR};function cs(n){return(t,e,s)=>{const o=oe(e,t.length);for(let r=0;r<t.length;++r)o[r]=n(t[r],s);return o}}function Ut(n,t,e){const s=cs(t);return js(n,s,e)}function js(n,t,e){return({inputs:s,attrs:o,backend:r})=>{const{x:i}=s;ut(i,n);const a=r,l=a.data.get(i.dataId).values;let c;if(i.dtype==="string"){if(!Array.isArray(l))throw new Error("String tensor's value was not an instance of Array");c=ws(l)}else c=l;const u=e||i.dtype,h=t(c,u,o);return a.makeTensorInfo(i.shape,u,h)}}const B0=cs(n=>Math.ceil(n)),FR=js(Pr,B0),_R={kernelName:Pr,backendName:"cpu",kernelFunc:FR};function z0(n,t,e,s){const o=oe(e,K(t));if(s&&e!=="string"){let r=0;n.forEach(i=>{const a=K(i.shape);o.set(i.vals,r),r+=a})}else{let r=0;n.forEach(i=>{const a=e==="string"?ws(i.vals):i.vals;let l=0;for(let c=0;c<i.shape[0];++c){const u=c*t[1]+r;for(let h=0;h<i.shape[1];++h)o[u+h]=a[l++]}r+=i.shape[1]})}return o}const V0=ce((n,t)=>n===t?1:0),W0=Ce(La,V0,null,"bool"),OR={kernelName:La,backendName:"cpu",kernelFunc:W0};const U0=cs(n=>Math.exp(n)),G0=js(Hr,U0,"float32"),MR={kernelName:Hr,backendName:"cpu",kernelFunc:G0};const H0=cs(n=>Math.expm1(n)),LR=js(qr,H0),PR={kernelName:qr,backendName:"cpu",kernelFunc:LR};const q0=cs(n=>Math.floor(n)),BR=js(Xr,q0),zR={kernelName:Xr,backendName:"cpu",kernelFunc:BR};const X0=ce((n,t)=>Math.floor(n/t)),VR=Ce(Kr,X0,null,"int32"),WR={kernelName:Kr,backendName:"cpu",kernelFunc:VR};function K0(n,t,e,s,o,r,i,a,l){const c=Et([s,r],e);for(let u=0;u<s;u++){const h=[];let d=0;for(let p=0;p<o;p++){const f=n[u*o+p];d+=f*i[p],h.push(f)}if(d<0||d>=l/r)throw new Error(`Invalid indices: ${h} does not index into ${a}`);for(let p=0;p<r;p++)c.values[u*r+p]=t.get(...t.indexToLoc(d*r+p))}return c}function j0(n,t,e){const s=Et(e,n.dtype);for(let o=0;o<s.size;++o){const i=s.indexToLoc(o).slice(),a=i[0],l=i[2],c=t.locToIndex([a,l]);i[2]=t.values[c];const u=n.locToIndex(i);0<=u&&u<n.values.length&&(s.values[o]=n.values[u])}return s}const Y0=ce((n,t)=>n>t?1:0),UR=Ce(Va,Y0,null,"bool"),GR={kernelName:Va,backendName:"cpu",kernelFunc:UR};const Z0=ce((n,t)=>n>=t?1:0),HR=Ce(jr,Z0,null,"bool"),qR={kernelName:jr,backendName:"cpu",kernelFunc:HR};const Q0=ce((n,t)=>n<t?1:0),XR=Ce(Ua,Q0,null,"bool"),KR={kernelName:Ua,backendName:"cpu",kernelFunc:XR};const J0=ce((n,t)=>n<=t?1:0),jR=Ce(Ga,J0,null,"bool"),YR={kernelName:Ga,backendName:"cpu",kernelFunc:jR};function t1(n,t,e){const s=(t-n)/(e-1),o=Be(e,"float32");o[0]=n;for(let r=1;r<o.length;r++)o[r]=o[r-1]+s;return o}const e1=cs(n=>Math.log(n)),ZR=js(ti,e1),QR={kernelName:ti,backendName:"cpu",kernelFunc:ZR};function n1(n,t,e,s){const o=Pe(s,K(e));for(let r=0;r<o.length;++r){const i=r*t;let a=n[i];for(let l=0;l<t;++l){const c=n[i+l];(Number.isNaN(c)||c>a)&&(a=c)}o[r]=a}return o}const s1=ce(((n,t)=>Math.max(n,t))),JR=Ce(ni,s1),tA={kernelName:ni,backendName:"cpu",kernelFunc:JR};const o1=ce(((n,t)=>Math.min(n,t))),eA=Ce(si,o1),nA={kernelName:si,backendName:"cpu",kernelFunc:eA};const lp=ce(((n,t)=>n*t)),sA=ip(((n,t,e,s)=>({real:n*e-t*s,imag:n*s+t*e}))),kc=Ce(ri,lp,sA),oA={kernelName:ri,backendName:"cpu",kernelFunc:kc};function r1(n,t,e){const s=Rs(-1,e);return lp([],t,s,n,e)}function rA(n){const{inputs:t,backend:e}=n,{x:s}=t;ut(s,"neg");const o=e.data.get(s.dataId).values,[r,i]=r1(o,s.shape,s.dtype);return e.makeTensorInfo(i,s.dtype,r)}const iA={kernelName:el,backendName:"cpu",kernelFunc:rA};const i1=ce(((n,t)=>n!==t?1:0)),aA=Ce(nl,i1,null,"bool"),lA={kernelName:nl,backendName:"cpu",kernelFunc:aA};function cp(n,t,e,s,o){const r=t.length,i=K(t),a=ft(t),l=ft(o),c=Pe(e,K(o));for(let u=0;u<i;++u){const h=Wo(u,r,a),d=new Array(h.length);for(let f=0;f<d.length;f++)d[f]=h[s[f]];const p=jn(d,r,l);c[p]=n[u]}return c}function on(n){const{inputs:t,attrs:e,backend:s}=n,{x:o}=t,{perm:r}=e;ut(o,"transpose");const i=o.shape.length,a=new Array(i);for(let h=0;h<a.length;h++)a[h]=o.shape[r[h]];const l=s.data.get(o.dataId).values,c=cp(l,o.shape,o.dtype,r,a);return{dataId:s.write(c,a,o.dtype),shape:a,dtype:o.dtype}}const cA={kernelName:Go,backendName:"cpu",kernelFunc:on};function a1(n,t,e,s){const[o,r]=ke(n,s),i=cn(t,"int32"),a=Be(K(o),i),l=K(r);for(let c=0;c<a.length;++c){const u=c*l;let h=1;for(let d=0;d<l;++d)h*=e[u+d];a[c]=h}return{outVals:a,outShape:o,outDtype:i}}function uA(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,keepDims:i}=s;ut(o,"prod");const a=o.shape.length,l=Tt(r,o.shape),c=ee(l,a);let u=l,h=o;const d=[];c!=null&&(h=on({inputs:{x:o},backend:e,attrs:{perm:c}}),d.push(h),u=ie(u.length,a));const p=e.data.get(h.dataId).values,{outVals:f,outShape:m,outDtype:g}=a1(h.shape,h.dtype,p,u);let x=m;return i&&(x=he(m,l)),d.forEach(b=>e.disposeIntermediateTensorInfo(b)),e.makeTensorInfo(x,g,f)}const hA={kernelName:ll,backendName:"cpu",kernelFunc:uA};function dA(n,t,e){n.forEach((s,o)=>{if(s<0||s>=e){const r=Wo(o,t.length,ft(t)).join(",");throw new Error(`indices[${r}] = ${s} is not in [0, ${e})`)}})}function pA(n,t){for(let e=0;e<n.length;++e){const s=n[e],o=e===n.length-1?t:n[e+1].length;if(s.length===0)throw new Error("Ragged splits may not be empty");if(s[0]<0)throw new Error("Ragged splits must be non-negative");if(s[s.length-1]>o)throw new Error("Ragged splits must not point past values");for(let r=1;r<s.length;++r)if(s[r-1]>s[r])throw new Error("Ragged splits must be sorted in ascending order")}}function fA(n,t,e,s){const o=[];let r=0;const i=t.length-1+e.length,a=new Array(i).fill(null).map(()=>[0]);pA(e,s);let l=1;for(let c=0;c<t.length-1;++c){l*=t[c];const u=t[c+1];for(let h=1;h<l+1;++h)a[c].push(h*u)}for(let c=0;c<n.length;++c){let u=n[c],h=n[c]+1;for(let d=0;d<e.length;++d){const p=e[d],f=d+t.length-1;if(f>=0){const m=a[f],g=m[m.length-1]-p[u];for(let x=u;x<h;++x)a[f].push(p[x+1]+g)}u=p[u],h=p[h]}h!==u&&(o.push([u,h]),r+=h-u)}return{outSplits:a,valueSlices:o,numValues:r}}function mA(n){const t=[];for(let e=0;e<n.length;++e){const s=n[e].length,o=oe("int32",s);t.push(o),n[e].forEach((r,i)=>o[i]=r)}return t}function l1(n,t){const e=n.slice(0,t);for(;e.length<t;)e.push(1);for(let s=t;s<n.length;s++)e[t-1]*=n[s];return e}function gA(n,t,e,s,o,r){const i=l1(t,2)[1],a=l1(r,2)[1];let l=0;for(const c of e)for(let u=c[0];u<c[1];++u){for(let h=0;h<s;++h)o[l*a+h]=n[u*i+h];++l}}function xA(n,t,e,s,o){const r=t.slice();r[0]=o;const i=oe(e,K(r)),a=n.length,l=a===0?0:a/t[0];return gA(n,t,s,l,i,r),[i,r]}function c1(n,t,e,s,o,r,i,a){if(n.length===0)throw new Error("paramsNestedSplits must be non empty");if(t[0].length===0)throw new Error("Split tensors must not be scalars");const l=t[0][0]-1;if(dA(r,i,l),s.length===0)throw new Error("params.rank must be nonzero");const c=s[0],{outSplits:u,valueSlices:h,numValues:d}=fA(r,i,n,c),p=mA(u),f=xA(e,s,o,h,d);return[p,f[0],f[1]]}const u1=2147483647;function h1(n,t,e,s,o,r,i){if(t.length>1)throw new Error("starts must be a scalar or vector");if(o.length>1)throw new Error("limits must be a scalar or vector");if(i.length>1)throw new Error("deltas must be a scalar or vector");const a=t.length===0,l=o.length===0,c=i.length===0,u=[];a||u.push(t[0]),l||u.push(o[0]),c||u.push(i[0]);for(let g=1;g<u.length;++g)if(u[g]!==u[g-1])throw new Error("starts, limits, and deltas must have the same shape");const h=u.length===0?1:u[0],d=oe("int32",h+1);d[0]=0;for(let g=0;g<h;++g){const x=a?n[0]:n[g],b=l?s[0]:s[g],y=c?r[0]:r[g];if(y===0)throw new Error("Requires delta != 0");let w;if(y>0&&b<x||y<0&&b>x)w=0;else if(w=Math.ceil(Math.abs((b-x)/y)),w>u1)throw new Error(`Requires ((limit - start) / delta) <= ${u1}`);d[g+1]=d[g]+w}const p=d[h],f=oe(e,p);let m=0;for(let g=0;g<h;++g){const x=d[g+1]-d[g];let b=a?n[0]:n[g];const y=c?r[0]:r[g];for(let w=0;w<x;++w)f[m++]=b,b+=y}return[d,f]}var Rn=zn;class Sc{constructor(t,e,s,o,r,i,a,l,c,u){this.shape=t,this.shapeShape=e,this.values=s,this.valuesShape=o,this.valuesDType=r,this.defaultValue=i,this.defaultValueShape=a,this.rowPartitionValues=l,this.rowPartitionValuesShapes=c,this.rowPartitionTypes=gg(u),this.raggedRank=xg(this.rowPartitionTypes)}getRowPartitionTypeByDimension(t){return this.rowPartitionTypes[0]===Rn.FIRST_DIM_SIZE?this.rowPartitionTypes[t+1]:this.rowPartitionTypes[t]}getRowPartitionTensor(t){return this.rowPartitionTypes[0]===Rn.FIRST_DIM_SIZE?this.rowPartitionValues[t+1]:this.rowPartitionValues[t]}getMaxWidth(t){const e=this.getRowPartitionTensor(t-1);switch(this.getRowPartitionTypeByDimension(t-1)){case Rn.VALUE_ROWIDS:return Sc.getMaxWidthValueRowID(e);case Rn.ROW_SPLITS:return Sc.getMaxWidthRowSplit(e);default:throw new Error(`Cannot handle partition type ${Rn[this.getRowPartitionTypeByDimension(t-1)]}`)}}static getMaxWidthRowSplit(t){const e=t.length;if(e===0||e===1)return 0;let s=0;for(let o=0;o<e-1;++o){const r=t[o+1]-t[o];r>s&&(s=r)}return s}static getMaxWidthValueRowID(t){const e=t.length;if(e===0)return 0;let s=0,o=t[0],r=0;for(let i=1;i<e;++i){const a=t[i];a!==o&&(o=a,r=Math.max(i-s,r),s=i)}return Math.max(e-s,r)}tensorShapeFromTensor(t,e,s=!0){if(e.length===0){if(t[0]===-1)return[];throw new Error("The only valid scalar shape tensor is the fully unknown shape specified as -1.")}return p1(t,s)}calculateOutputSize(t){const e=this.valuesShape,s=this.defaultValueShape;bg(s,e);const o=this.tensorShapeFromTensor(this.shape,this.shapeShape),i=mg(this.raggedRank,o,e);i[0]<0&&(i[0]=t);for(let a=1;a<=this.raggedRank;++a)i[a]<0&&(i[a]=this.getMaxWidth(a));return i}calculateFirstParentOutputIndex(t,e,s){const o=Math.min(t,s),r=[];let i=0;for(let a=0;a<o;++a,i+=e)r.push(i);for(let a=o;a<t;++a)r.push(-1);return T(r.length===t,()=>"Final length of result must be equal to firstDimension."),r}calculateOutputIndexRowSplit(t,e,s,o){const r=t.length,i=[];for(let a=0;a<r-1;++a){const l=t[a+1]-t[a];let c=Math.min(o,l),u=e[a];u===-1&&(c=0);for(let h=0;h<c;++h)i.push(u),u+=s;for(let h=0;h<l-c;++h)i.push(-1)}if(r>0&&i.length!==t[r-1])throw new Error("Invalid row split size.");return i}calculateOutputIndexValueRowID(t,e,s,o){const r=t.length,i=[];if(r===0)return[];let a=0,l=t[0];if(l>=e.length)throw new Error(`Got currentValueRowId=${l}, which is not less than ${e.length}`);let c=e[l];i.push(c);for(let u=1;u<r;++u){const h=t[u];if(h===l)c>=0&&(++a,a<o?c+=s:c=-1);else{if(a=0,l=h,h>=e.length)throw new Error(`Got nextValueRowId=${h} which is not less than ${e.length}`);c=e[h]}i.push(c)}if(i.length!==t.length)throw new Error("Invalid row ids.");return i}calculateOutputIndex(t,e,s,o){const r=this.getRowPartitionTensor(t),i=this.getRowPartitionTypeByDimension(t);switch(i){case Rn.VALUE_ROWIDS:return this.calculateOutputIndexValueRowID(r,e,s,o);case Rn.ROW_SPLITS:if(r.length-1>e.length)throw new Error(`Row partition size is greater than output size: ${r.length-1} > ${e.length}`);return this.calculateOutputIndexRowSplit(r,e,s,o);default:throw new Error(`Unsupported partition type: ${Rn[i]}`)}}getFirstDimensionSize(){const t=this.rowPartitionValues[0];if(this.rowPartitionTypes.length===0)throw new Error("No row_partition_types given.");const e=this.rowPartitionTypes[0];switch(e){case Rn.FIRST_DIM_SIZE:return t[0];case Rn.VALUE_ROWIDS:throw new Error("Cannot handle VALUE_ROWIDS in first dimension.");case Rn.ROW_SPLITS:return this.rowPartitionValuesShapes[0][0]-1;default:throw new Error(`Cannot handle type ${Rn[e]}`)}}compute(){if(this.rowPartitionValues[0].length<=0)throw new Error("Invalid first partition input. Tensor requires at least one element.");const e=this.getFirstDimensionSize(),s=this.calculateOutputSize(e),o=new Array(this.raggedRank+1);o[o.length-1]=1;for(let l=o.length-2;l>=0;--l)o[l]=o[l+1]*s[l+1];const r=p1(s,!1),i=oe(this.valuesDType,K(r));if(o[0]*s[0]>0){let l=this.calculateFirstParentOutputIndex(e,o[0],s[0]);for(let c=1;c<=this.raggedRank;++c)l=this.calculateOutputIndex(c-1,l,o[c],s[c]);this.setOutput(this.raggedRank,l,i,r)}return[r,i]}setOutput(t,e,s,o){if(s.length===0)return;const r=this.values,i=s;let a=o.slice();a=a.slice(t+1);const l=K(a),c=e.length;let u=this.defaultValue;if(u.length!==l&&u.length!==1){const f=this.defaultValueShape;U(()=>{const m=z(u,f);u=Di(m,a).dataSync()})}let h=0,d=0,p=0;for(let f=0;f<=c;++f){let m=f<c?e[f]:-1;if(m===p){++p;continue}if(d<p){const g=r.subarray(h*l),x=i.subarray(d*l),b=(p-d)*l;d1(x,g,b)}if(f>=c){const g=s.length;m=Math.floor(g/l)}if(m>p)if(this.defaultValue.length===1)i.subarray(p*l,m*l).fill(this.defaultValue[0]),p=m;else for(;m>p;){const g=i.slice(p*l);d1(g,u,l),++p}m<0?(h=f+1,d=p):(h=f,d=p,p=d+1)}}}function d1(n,t,e){for(let s=0;s<e;s++)n[s]=t[s]}function p1(n,t){const e=[];for(let s of n){if(s<0){if(!t)throw new Error(`Dimension ${s} must be >= 0`);if(s<-1)throw new Error(`Dimension ${s} must be >= -1`);s=-1}e.push(s)}return e}function f1(n,t,e,s,o,r,i,a,l,c){return new Sc(n,t,e,s,o,r,i,a,l,c).compute()}function m1(n,t,e,s){const o=n===t,r=n<t&&e<0,i=t<n&&e>1;if(o||r||i)return Be(0,s);const a=Math.abs(Math.ceil((t-n)/e)),l=Be(a,s);t<n&&e===1&&(e=-1),l[0]=n;for(let c=1;c<l.length;c++)l[c]=l[c-1]+e;return l}const g1=cs(n=>1/Math.sqrt(n)),bA=js(hi,g1),yA={kernelName:hi,backendName:"cpu",kernelFunc:bA};function Eo(n,t,e,s,o,r,i,a,l,c){const u=[s/o,o],h=n.values,d=t.values;if(s===0)return Et(e,t.dtype);const p=l instanceof Re?l:Et(u,t.dtype);typeof l=="string"||typeof l=="number"?p.values.fill(l):typeof l=="boolean"&&p.values.fill(+l);for(let f=0;f<r;f++){const m=[];let g=0;for(let x=0;x<i;x++){const b=h[f*i+x];m.push(b),g+=b*a[x]}if(g<0||g>=s/o)throw new Error(`Invalid indices: ${m} does not index into ${e}`);for(let x=0;x<o;x++)c?p.values[g*o+x]+=d[f*o+x]:p.values[g*o+x]=t.rank===0?d[0]:d[f*o+x]}return p}const wA=cs(n=>1/(1+Math.exp(-n))),x1=Ut(gi,n=>1/(1+Math.exp(-n))),CA={kernelName:gi,backendName:"cpu",kernelFunc:x1};function b1(n,t,e,s,o){const r=ug(s,t,e),i=K(e),a=ft(s);if(r){const h=hg(t,a);return o==="string"?n.slice(h,h+i):n.subarray(h,h+i)}const l=o==="string"?ws(n):n,c=Et(s,o,l),u=Et(e,o);for(let h=0;h<u.size;++h){const d=u.indexToLoc(h),p=d.map((f,m)=>f+t[m]);u.set(c.get(...p),...d)}return o==="string"?Bg(u.values):u.values}function Ro(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{begin:r,size:i}=s;ut(o,"slice");const[a,l]=ed(o,r,i);lg(o,a,l);const c=e.data.get(o.dataId).values,u=b1(c,a,l,o.shape,o.dtype);return e.makeTensorInfo(l,o.dtype,u)}const $A={kernelName:fl,backendName:"cpu",kernelFunc:Ro};function y1(n,t,e,s,o,r,i){const a=t[0],l=r[0],c=new Array(l),u=new Array(a),h=t[1];if(l===0){if(a!==0)throw new Error(Ng(a));const g=oe(e,0),x=oe(o,0);return[g,[0,h],x,c,u]}let d=!0,p=0;const f=new Array(l).fill(0);for(let g=0;g<a;++g){const x=n[g*h];if(x<0)throw new Error(Tg(g,x));if(x>=l)throw new Error(Eg(g,x,l));++f[x],d=d&&x>=p,p=x}let m=!0;for(let g=0;g<l;++g){const x=f[g]===0;c[g]=x,m=m&&!x,f[g]=Math.max(f[g],1),g>0&&(f[g]+=f[g-1])}if(m&&d){const g=n,x=s;for(let b=0;b<a;++b)u[b]=b;return[g,[a,h],x,c,u]}else{const g=f[l-1],x=oe(e,g*h),b=oe(o,g),y=new Array(l).fill(0);for(let w=0;w<a;++w){const C=n[w*h],I=y[C],v=(C===0?0:f[C-1])+I;y[C]++;for(let N=0;N<h;++N)x[v*h+N]=n[w*h+N];b[v]=s[w],u[w]=v}for(let w=0;w<l;++w)if(y[w]===0){const I=w===0?0:f[w-1];x[I*h+0]=w;for(let v=1;v<h;++v)x[I*h+v]=0;b[I]=i}return[x,[g,h],b,c,u]}}function w1(n,t,e,s,o){const r=K(s),i=t[0],a=o.length,l=[];let c=1,u=-1;for(let g=0;g<a;++g){const x=o[g];if(x===-1){if(u!==-1)throw new Error(Rg(u,g));u=g,l.push(1)}else{if(x<0)throw new Error(Ag(g,x));c*=x,l.push(x)}}if(u!==-1){if(c<=0)throw new Error(Dg());const g=Math.trunc(r/c);if(c*g!==r)throw new Error(Fg(s,l));l[u]=g}if(K(l)!==r)throw new Error(_g(s,l));const d=s.length,p=[];if(d>0){p[d-1]=1;for(let g=d-2;g>=0;--g)p[g]=p[g+1]*s[g+1]}const f=[];if(a>0){f[a-1]=1;for(let g=a-2;g>=0;--g)f[g]=f[g+1]*l[g+1]}const m=oe(e,i*a);for(let g=0;g<i;++g){let x=0;for(let b=0;b<d;++b)x+=n[g*d+b]*p[b];for(let b=0;b<a;++b)m[g*a+b]=Math.trunc(x/f[b]),x%=f[b]}return[m,[i,a],l]}function up(n,t,e,s,o,r=!1,i=0){const a=s.length,l=[t[0],n.length/t[0]],c=l[1],h=a>0?o[a-1]+1:0;if(h<0)throw new Error(Cd());const d=t.slice();d[0]=h;const p=d.reduce((y,w)=>y*w,1),f=oe(e,p);if(a===0)return h>0&&f.fill(i),[f,d];if(h<=0)throw new Error(Cd());let m=0,g=1,x=0,b=o[m];for(;;){let y=0;if(g<a){if(y=o[g],b===y){++g;continue}if(b>=y)throw new Error(Og())}if(b<0||b>=h)throw new Error(Mg(b,h));b>x&&f.fill(i,x*c,b*c);for(let w=m;w<g;++w){const C=s[w];if(C<0||C>=l[0])throw new Error(Lg(w,s[w],l[0]));for(let I=0;I<c;I++)f[b*c+I]+=n[C*c+I]}if(r)for(let w=0;w<c;w++)f[b*c+w]/=g-m;if(m=g,++g,x=b+1,b=y,g>a)break}return x<h&&f.fill(i,x*c,h*c),[f,d]}const IA=cs(n=>Math.sqrt(n)),vA=Ut(bi,n=>Math.sqrt(n)),kA={kernelName:bi,backendName:"cpu",kernelFunc:vA};const C1=ce(((n,t)=>{const e=n-t;return e*e})),SA=Ce(yi,C1),NA={kernelName:yi,backendName:"cpu",kernelFunc:SA};const $1=cs((n,t)=>{const{pattern:e,replaceGlobal:s,rewrite:o}=t;return n.replace(new RegExp(e,s?"g":""),o)}),TA=js(ju,$1),EA={kernelName:ju,backendName:"cpu",kernelFunc:TA};function I1(n,t,e,s){const o=Et(n,t.dtype);for(let r=0;r<o.size;r++){const i=o.indexToLoc(r),a=new Array(i.length);for(let l=0;l<a.length;l++)a[l]=i[l]*e[l]+s[l];o.set(t.get(...a),...i)}return o}class RA{constructor(t,e,s,o,r,i){this.separator=As(t),this.nGramWidths=e,this.leftPad=As(s),this.rightPad=As(o),this.padWidth=r,this.preserveShort=i}getPadWidth(t){return Math.min(this.padWidth<0?t-1:this.padWidth,t-1)}getNumNGrams(t,e){const s=this.getPadWidth(e);return Math.max(0,t+2*s-e+1)}createNGrams(t,e,s,o,r,i){for(let a=0;a<r;++a){const l=this.getPadWidth(i),c=Math.max(0,l-a),u=Math.max(0,l-(r-(a+1))),h=i-(c+u),d=e+(c>0?0:a-l);let p=0;p+=c*this.leftPad.length;for(let b=0;b<h;++b)p+=t[d+b].length;p+=u*this.rightPad.length;const f=c+u+h-1;p+=f*this.separator.length,s[o+a]=new Uint8Array(p);const m=s[o+a];let g=0;const x=b=>b.forEach(y=>m[g++]=y);for(let b=0;b<c;++b)x(this.leftPad),x(this.separator);for(let b=0;b<h-1;++b)x(t[d+b]),x(this.separator);if(h>0){x(t[d+h-1]);for(let b=0;b<u;++b)x(this.separator),x(this.rightPad)}else{for(let b=0;b<u-1;++b)x(this.rightPad),x(this.separator);x(this.rightPad)}}}compute(t,e){const s=t.length,o=e.length;if(o>0){let l=e[0];if(l!==0)throw new Error(`First split value must be 0, got ${l}`);for(let c=1;c<o;++c){let u=e[c]>=l;if(u=u&&e[c]<=s,!u)throw new Error(`Invalid split value ${e[c]}, must be in [${l}, ${s}]`);l=e[c]}if(l!==s)throw new Error(`Last split value must be data size. Expected ${s}, got ${l}`)}const r=o-1,i=oe("int32",o);if(s===0||o===0){const l=new Array(s);for(let c=0;c<=r;++c)i[c]=0;return[l,i]}i[0]=0;for(let l=1;l<=r;++l){const c=e[l]-e[l-1];let u=0;this.nGramWidths.forEach(h=>{u+=this.getNumNGrams(c,h)}),this.preserveShort&&c>0&&u===0&&(u=1),i[l]=i[l-1]+u}const a=new Array(i[r]);for(let l=0;l<r;++l){const c=e[l];let u=i[l];if(this.nGramWidths.forEach(h=>{const d=e[l+1]-e[l],p=this.getNumNGrams(d,h);this.createNGrams(t,c,a,u,p,h),u+=p}),this.preserveShort&&u===i[l]){const h=e[l+1]-e[l];if(h===0)continue;const d=h+2*this.padWidth;this.createNGrams(t,c,a,u,1,d)}}return[a,i]}}function v1(n,t,e,s,o,r,i,a){return new RA(e,s,o,r,i,a).compute(n,t)}function AA(n,t,e,s){if(!n.length)return;if(t.length===0){for(let r=0;r<n.length;++r)s.push(n.subarray(r,r+1));return}if(t.length===1){const r=t[0];let i=n.indexOf(r);for(;i!==-1;){const a=n.subarray(0,i);(!e||a.length!==0)&&s.push(a),n=n.subarray(i+1),i=n.indexOf(r)}(!e||n.length!==0)&&s.push(n);return}let o=0;for(let r=0;r<n.length+1;r++)if(r===n.length||t.indexOf(n[r])!==-1){const i=n.subarray(o,r);(!e||i.length!==0)&&s.push(i),o=r+1}}function k1(n,t,e){const s=n.length,o=[];let r=0,i=0;const a=new Array(s);for(let d=0;d<s;++d){const p=o.length;AA(n[d],t,e,o);const f=o.length-p;a[d]=f,r+=f,i=Math.max(i,f)}const l=oe("int32",r*2),c=new Array(r),u=[s,i];let h=0;for(let d=0;d<s;++d)for(let p=0;p<a[d];++p)l[h*2]=d,l[h*2+1]=p,c[h]=o[h],++h;return[l,c,u]}function S1(n,t){const e=oe("int32",n.length);for(let s=0;s<n.length;++s)e[s]=rC(n[s]).modulo(t).getLowBitsUnsigned();return e}const N1=ce(((n,t)=>n-t)),DA=ip(((n,t,e,s)=>({real:n-e,imag:t-s}))),hp=Ce(wi,N1,DA),FA={kernelName:wi,backendName:"cpu",kernelFunc:hp};function T1(n,t){const e=new Array(n.rank);for(let o=0;o<e.length;o++)e[o]=n.shape[o]*t[o];const s=Et(e,n.dtype);for(let o=0;o<s.values.length;++o){const r=s.indexToLoc(o),i=new Array(n.rank);for(let l=0;l<i.length;l++)i[l]=r[l]%n.shape[l];const a=n.locToIndex(i);s.values[o]=n.values[a]}return s}const ra=(n,t)=>{const e=t.value-n.value;return e===0?n.index-t.index:e};function E1(n,t,e=0,s=n.length-1){for(;s>e;){if(s-e>600){const a=s-e+1,l=t-e+1,c=Math.log(a),u=.5*Math.exp(2*c/3),h=.5*Math.sqrt(c*u*(a-u)/a)*Math.sign(l-a/2),d=Math.max(e,Math.floor(t-l*u/a+h)),p=Math.min(s,Math.floor(t+(a-l)*u/a+h));E1(n,t,d,p)}const o=n[t];let r=e,i=s;for(Kn(n,e,t),ra(n[s],o)>0&&Kn(n,e,s);r<i;){for(Kn(n,r,i),r++,i--;ra(n[r],o)<0;)r=r+1;for(;ra(n[i],o)>0;)i=i-1}ra(n[e],o)===0?Kn(n,e,i):(i=i+1,Kn(n,i,s)),i<=t&&(e=i+1),t<=i&&(s=i-1)}}function R1(n,t,e,s,o){const r=t[t.length-1],[i,a]=[n.length/r,r],l=Pe(e,i*s),c=Pe("int32",i*s);for(let h=0;h<i;h++){const d=h*a,p=n.subarray(d,d+a);let f=new Array(p.length);p.forEach((b,y)=>f[y]={value:b,index:y}),s<f.length&&(E1(f,s),f=f.slice(0,s)),o&&f.sort(ra);const m=h*s,g=l.subarray(m,m+s),x=c.subarray(m,m+s);for(let b=0;b<s;b++)g[b]=f[b].value,x[b]=f[b].index}const u=t.slice();return u[u.length-1]=s,[Et(u,e,l),Et(u,"int32",c)]}function A1(n,t,e,s){const o=Tt(t,e)[0],r=[1,e[0],1];for(let f=0;f<o;f++)r[0]*=e[f];r[1]=e[o];for(let f=o+1;f<e.length;f++)r[2]*=e[f];const i=new Map,a=new Int32Array(e[o]),l=new Re(r,s,n),c=[],u=r[0]===1&&r[2]===1;for(let f=0;f<e[o];f++){let m;if(u)m=n[f].toString();else{const x=[];for(let b=0;b<r[0];b++)for(let y=0;y<r[2];y++)x.push(l.get(b,f,y));m=x.join(",")}const g=i.get(m);if(g!=null)a[f]=g;else{const x=i.size;i.set(m,x),a[f]=x,c.push(f)}}const h=r.slice();h[1]=i.size;const d=new Re(h,s);c.forEach((f,m)=>{for(let g=0;g<r[0];g++)for(let x=0;x<r[2];x++)d.set(l.get(g,f,x),g,m,x)});const p=e.slice();return p[o]=h[1],{outputValues:d.values,outputShape:p,indices:a}}var _A=Object.freeze({__proto__:null,addImpl:M0,bincountImpl:ap,bincountReduceImpl:L0,bitwiseAndImpl:P0,castImpl:O0,ceilImpl:B0,concatImpl:z0,equalImpl:V0,expImpl:U0,expm1Impl:H0,floorDivImpl:X0,floorImpl:q0,gatherNdImpl:K0,gatherV2Impl:j0,greaterEqualImpl:Z0,greaterImpl:Y0,lessEqualImpl:J0,lessImpl:Q0,linSpaceImpl:t1,logImpl:e1,maxImpl:n1,maximumImpl:s1,minimumImpl:o1,multiplyImpl:lp,negImpl:r1,notEqualImpl:i1,prodImpl:a1,raggedGatherImpl:c1,raggedRangeImpl:h1,raggedTensorToTensorImpl:f1,rangeImpl:m1,rsqrtImpl:g1,scatterImpl:Eo,sigmoidImpl:wA,simpleAbsImpl:_0,sliceImpl:b1,sparseFillEmptyRowsImpl:y1,sparseReshapeImpl:w1,sparseSegmentReductionImpl:up,sqrtImpl:IA,squaredDifferenceImpl:C1,staticRegexReplaceImpl:$1,stridedSliceImpl:I1,stringNGramsImpl:v1,stringSplitImpl:k1,stringToHashBucketFastImpl:S1,subImpl:N1,tileImpl:T1,topKImpl:R1,transposeImpl:cp,uniqueImpl:A1});Yf("cpu",()=>new Ic,1);const D1=Ut(Ur,n=>n>=0?n:Math.exp(n)-1),OA={kernelName:Ur,backendName:"cpu",kernelFunc:D1};function F1(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{alpha:r}=s;ut([o],"leakyRelu");const i=K(o.shape),a=e.data.get(o.dataId).values,l=Pe("float32",i);for(let c=0;c<a.length;c++)l[c]=a[c]<0?r*a[c]:a[c];return e.makeTensorInfo(o.shape,"float32",l)}const MA={kernelName:Wa,backendName:"cpu",kernelFunc:F1};const LA=ce((n,t)=>n<0?t*n:n);function _1(n){const{inputs:t,backend:e}=n,{x:s,alpha:o}=t;ut([s,o],"prelu");const r=e.data.get(s.dataId).values,i=e.data.get(o.dataId).values,[a,l]=LA(s.shape,o.shape,r,i,"float32");return e.makeTensorInfo(l,"float32",a)}const PA={kernelName:al,backendName:"cpu",kernelFunc:_1};const O1=Ut(li,n=>Math.max(0,n)),BA={kernelName:li,backendName:"cpu",kernelFunc:O1};const M1=Ut(ci,n=>Math.min(Math.max(0,n),6)),zA={kernelName:ci,backendName:"cpu",kernelFunc:M1};function Nc(n,t,e,s,o){if(e==="linear")return ls({inputs:{x:t},backend:n});if(e==="relu")return O1({inputs:{x:t},backend:n});if(e==="elu")return D1({inputs:{x:t},backend:n});if(e==="relu6")return M1({inputs:{x:t},backend:n});if(e==="prelu")return _1({inputs:{x:t,alpha:s},backend:n});if(e==="leakyrelu")return F1({inputs:{x:t},backend:n,attrs:{alpha:o}});if(e==="sigmoid")return x1({inputs:{x:t},backend:n});throw new Error(`Activation ${e} has not been implemented for the CPU backend.`)}function jt(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{shape:r}=s,i=K(o.shape),a=Xp(r,i),l=K(a);T(i===l,()=>`The new shape (${a}) has ${l} elements and the old shape (${o.shape}) has ${i} elements. The new shape and old shape must have the same number of elements.`),e.incRef(o.dataId);const c=e.data.get(o.dataId);if(c.complexTensorInfos!=null){const u=c.complexTensorInfos.real,h=c.complexTensorInfos.imag;u.shape=a,h.shape=a}return{dataId:o.dataId,shape:a,dtype:o.dtype}}const VA={kernelName:cl,backendName:"cpu",kernelFunc:jt};function L1(n){const{inputs:t,backend:e,attrs:s}=n,{a:o,b:r}=t,{transposeA:i,transposeB:a}=s;ut([o,r],"matMul");const l=o.shape.length,c=r.shape.length,u=i?o.shape[l-2]:o.shape[l-1],h=a?r.shape[c-1]:r.shape[c-2],d=i?o.shape[l-1]:o.shape[l-2],p=a?r.shape[c-2]:r.shape[c-1],f=o.shape.slice(0,-2),m=r.shape.slice(0,-2),g=K(f),x=K(m),y=$t(o.shape.slice(0,-2),r.shape.slice(0,-2)).concat([d,p]);T(u===h,()=>`Error in matMul: inner shapes (${u}) and (${h}) of Tensors with shapes ${o.shape} and ${r.shape} and transposeA=${i} and transposeB=${a} must match.`);const w=i?[g,u,d]:[g,d,u],C=a?[x,p,h]:[x,h,p],I=jt({inputs:{x:o},backend:e,attrs:{shape:w}}),v=jt({inputs:{x:r},backend:e,attrs:{shape:C}}),N=i?I.shape[1]:I.shape[2],k=i?I.shape[2]:I.shape[1],S=a?v.shape[1]:v.shape[2],$=Math.max(g,x),E=e.data.get(I.dataId).values,R=e.data.get(v.dataId).values,F=ft(I.shape),A=ft(v.shape),[O,L,_]=i?[F[0],1,F[1]]:[F[0],F[1],1],[V,G,q]=a?[1,A[1],A[0]]:[A[1],1,A[0]],j=k*S,Y=Et([$,k,S],I.dtype),J=Y.values,tt=e.blockSize;for(let st=0;st<$;st++){const it=st%g,pt=st%x;for(let ht=0;ht<k;ht+=tt){const xt=Math.min(ht+tt,k);for(let ot=0;ot<S;ot+=tt){const kt=Math.min(ot+tt,S);for(let ct=0;ct<N;ct+=tt){const At=Math.min(ct+tt,N);for(let Ft=ht;Ft<xt;Ft++)for(let bt=ot;bt<kt;bt++){let It=0;for(let Ct=ct;Ct<At;Ct++){const pe=E[it*O+Ft*L+Ct*_],Ht=R[Ct*V+bt*G+pt*q];It+=pe*Ht}J[st*j+(Ft*S+bt)]+=It}}}}}return e.disposeIntermediateTensorInfo(I),e.disposeIntermediateTensorInfo(v),e.makeTensorInfo(y,Y.dtype,Y.values)}const WA={kernelName:Na,backendName:"cpu",kernelFunc:L1};function UA(n){const{inputs:t,backend:e,attrs:s}=n,{a:o,b:r,bias:i,preluActivationWeights:a}=t,{transposeA:l,transposeB:c,activation:u,leakyreluAlpha:h}=s;let d,p,f;const m=[];d=L1({inputs:{a:o,b:r},attrs:{transposeA:l,transposeB:c},backend:e}),i&&(p=lr({inputs:{a:d,b:i},backend:e}),m.push(d),d=p),u&&(f=Nc(e,d,u,a,h),m.push(d),d=f);for(const x of m)e.disposeIntermediateTensorInfo(x);return d}const GA={kernelName:$l,backendName:"cpu",kernelFunc:UA};const HA=Ut(Rr,n=>Math.acos(n)),qA={kernelName:Rr,backendName:"cpu",kernelFunc:HA};const XA=Ut(Ar,n=>Math.acosh(n)),KA={kernelName:Ar,backendName:"cpu",kernelFunc:XA};function jA(n){const{inputs:t,backend:e}=n,s=t;ut(t,"addN");const o=s.map(a=>e.data.get(a.dataId).values),r=Et(s[0].shape,s[0].dtype),i=r.values;for(let a=0;a<s.length;a++){const l=o[a];for(let c=0;c<i.length;c++)i[c]+=l[c]}return e.makeTensorInfo(r.shape,r.dtype,r.values)}const YA={kernelName:du,backendName:"cpu",kernelFunc:jA};function ZA(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,keepDims:i}=s;ut(o,"all");const a=Tt(r,o.shape);let l=a;const c=ee(l,o.shape.length);let u=o;c!=null&&(u=on({inputs:{x:o},backend:e,attrs:{perm:c}}),l=ie(l.length,o.shape.length)),De("all",l,u.shape.length);const[h,d]=ke(u.shape,l),p=K(d),f=Be(K(h),u.dtype),m=e.data.get(u.dataId).values;for(let x=0;x<f.length;++x){const b=x*p;let y=m[b];for(let w=0;w<p;++w){const C=m[b+w];y=y&&C}f[x]=y}c!=null&&e.disposeIntermediateTensorInfo(u);const g=e.makeTensorInfo(h,u.dtype,f);if(i){const x=he(h,a),b=jt({inputs:{x:g},backend:e,attrs:{shape:x}});return e.disposeIntermediateTensorInfo(g),b}return g}const QA={kernelName:pu,backendName:"cpu",kernelFunc:ZA};function JA(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,keepDims:i}=s;ut(o,"any");const a=Tt(r,o.shape);let l=a;const c=ee(l,o.shape.length);let u=o;c!=null&&(u=on({inputs:{x:o},backend:e,attrs:{perm:c}}),l=ie(l.length,o.shape.length)),De("any",l,u.shape.length);const[h,d]=ke(u.shape,l),p=K(d),f=Be(K(h),u.dtype),m=e.data.get(u.dataId).values;for(let x=0;x<f.length;++x){const b=x*p;let y=m[b];for(let w=0;w<p;++w){const C=m[b+w];y=y||C}f[x]=y}c!=null&&e.disposeIntermediateTensorInfo(u);const g=e.makeTensorInfo(h,u.dtype,f);if(i){const x=he(h,a),b=jt({inputs:{x:g},backend:e,attrs:{shape:x}});return e.disposeIntermediateTensorInfo(g),b}return g}const tD={kernelName:fu,backendName:"cpu",kernelFunc:JA};function eD(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r}=s;ut(o,"argMax");let i=Tt(r,o.shape);const a=ee(i,o.shape.length);let l=o;const c=[];a!=null&&(l=on({inputs:{x:o},backend:e,attrs:{perm:a}}),c.push(l),i=ie(i.length,l.shape.length)),i=[i[0]],De("argMax",i,l.shape.length);const[u,h]=ke(l.shape,i),d=K(u),p=Be(d,"int32"),f=K(h),m=e.data.get(l.dataId).values;for(let g=0;g<p.length;++g){const x=g*f;let b=m[x],y=0;for(let w=0;w<f;++w){const C=m[x+w];C>b&&(b=C,y=w)}p[g]=y}return c.forEach(g=>e.disposeIntermediateTensorInfo(g)),e.makeTensorInfo(u,"int32",p)}const nD={kernelName:Ia,backendName:"cpu",kernelFunc:eD};function sD(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r}=s;ut(o,"argMin");let i=Tt(r,o.shape);const a=ee(i,o.shape.length);let l=o;const c=[];a!=null&&(l=on({inputs:{x:o},backend:e,attrs:{perm:a}}),c.push(l),i=ie(i.length,l.shape.length)),i=[i[0]],De("argMin",i,l.shape.length);const[u,h]=ke(l.shape,i),d=K(u),p=Be(d,"int32"),f=K(h),m=e.data.get(l.dataId).values;for(let g=0;g<p.length;++g){const x=g*f;let b=m[x],y=0;for(let w=0;w<f;++w){const C=m[x+w];C<b&&(b=C,y=w)}p[g]=y}return c.forEach(g=>e.disposeIntermediateTensorInfo(g)),e.makeTensorInfo(u,"int32",p)}const oD={kernelName:va,backendName:"cpu",kernelFunc:sD};const rD=Ut(Dr,n=>Math.asin(n)),iD={kernelName:Dr,backendName:"cpu",kernelFunc:rD};const aD=Ut(Fr,n=>Math.asinh(n)),lD={kernelName:Fr,backendName:"cpu",kernelFunc:aD};const cD=Ut(_r,n=>Math.atan(n)),uD={kernelName:_r,backendName:"cpu",kernelFunc:cD};const hD=ce((n,t)=>Math.atan2(n,t)),dD=Ce(Mr,hD),pD={kernelName:Mr,backendName:"cpu",kernelFunc:dD};const fD=Ut(Or,n=>Math.atanh(n)),mD={kernelName:Or,backendName:"cpu",kernelFunc:fD};function dp(n,t,e,s,o,r){const i=o.strideHeight,a=o.strideWidth,l=o.dilationHeight,c=o.dilationWidth,u=o.effectiveFilterHeight,h=o.effectiveFilterWidth,d=o.padInfo.top,p=o.padInfo.left,f=r==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,m=Et(o.outShape,e),g=m.values,x=o.outShape[1]*o.outShape[2]*o.outShape[3],b=o.outShape[2]*o.outShape[3],y=o.outShape[3];for(let w=0;w<o.batchSize;++w){const C=w*x,I=w*s[0];for(let v=0;v<o.inChannels;++v)for(let N=0;N<o.outHeight;++N){const k=N*i-d,S=Math.max(0,k),$=Math.min(o.inHeight,u+k),E=C+N*b;for(let R=0;R<o.outWidth;++R){const F=R*a-p,A=Math.max(0,F),O=Math.min(o.inWidth,h+F);let L=f,_=0,V=0;for(let q=S;q<$;q+=l){const j=I+q*s[1];for(let Y=A;Y<O;Y+=c){const J=j+Y*s[2],tt=n[J+v];r==="max"&&tt>L?L=tt:r==="avg"&&(_+=tt,V++)}if(isNaN(L))break}const G=E+R*y+v;g[G]=r==="avg"?_/V:L}}}return m}function P1(n,t,e,s,o=!1,r=!1){const i=Et(s.outShape,"int32"),a=s.strideHeight,l=s.strideWidth,c=s.dilationHeight,u=s.dilationWidth,h=s.effectiveFilterHeight,d=s.effectiveFilterWidth,p=s.padInfo.top,f=s.padInfo.left,m=Et(t,e,n);for(let g=0;g<s.batchSize;++g)for(let x=0;x<s.inChannels;++x)for(let b=0;b<s.outHeight;++b){const y=b*a-p;let w=y;for(;w<0;)w+=c;const C=Math.min(s.inHeight,h+y);for(let I=0;I<s.outWidth;++I){const v=I*l-f;let N=v;for(;N<0;)N+=u;const k=Math.min(s.inWidth,d+v);let S=Number.NEGATIVE_INFINITY,$=-1;for(let E=w;E<C;E+=c){const R=E-y;for(let F=N;F<k;F+=u){const A=F-v,O=m.get(g,E,F,x);O>S&&(S=O,o?$=r?((g*s.inHeight+E)*s.inWidth+F)*s.inChannels+x:(E*s.inWidth+F)*s.inChannels+x:$=R*d+A)}}i.set($,g,b,I,x)}}return i}function B1(n,t,e,s,o,r){const i=o.strideDepth,a=o.strideHeight,l=o.strideWidth,c=o.dilationDepth,u=o.dilationHeight,h=o.dilationWidth,d=o.effectiveFilterDepth,p=o.effectiveFilterHeight,f=o.effectiveFilterWidth,m=o.padInfo.front,g=o.padInfo.top,x=o.padInfo.left,b=r==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,y=Et(o.outShape,e),w=y.values,C=o.outShape[1]*o.outShape[2]*o.outShape[3]*o.outShape[4],I=o.outShape[2]*o.outShape[3]*o.outShape[4],v=o.outShape[3]*o.outShape[4],N=o.outShape[4];for(let k=0;k<o.batchSize;++k){const S=k*C,$=k*s[0];for(let E=0;E<o.inChannels;++E)for(let R=0;R<o.outDepth;++R){const F=R*i-m;let A=F;for(;A<0;)A+=c;const O=Math.min(o.inDepth,d+F),L=S+R*I;for(let _=0;_<o.outHeight;++_){const V=_*a-g;let G=V;for(;G<0;)G+=u;const q=Math.min(o.inHeight,p+V),j=L+_*v;for(let Y=0;Y<o.outWidth;++Y){const J=Y*l-x;let tt=J;for(;tt<0;)tt+=h;const st=Math.min(o.inWidth,f+J),it=j+Y*N;let pt=b,ht=0,xt=0;for(let kt=A;kt<O;kt+=c){const ct=$+kt*s[1];for(let At=G;At<q;At+=u){const Ft=ct+At*s[2];for(let bt=tt;bt<st;bt+=h){const It=Ft+bt*s[3],Ct=n[It+E];if(r==="max"&&Ct>pt?pt=Ct:r==="avg"&&(ht+=Ct,xt++),isNaN(pt))break}if(isNaN(pt))break}if(isNaN(pt))break}const ot=it+E;w[ot]=r==="avg"?ht/Math.max(xt,1):pt}}}}return y}function gD(n,t){const e=Et(t.outShape,"int32"),s=t.strideDepth,o=t.strideHeight,r=t.strideWidth,i=t.dilationDepth,a=t.dilationHeight,l=t.dilationWidth,c=t.effectiveFilterDepth,u=t.effectiveFilterHeight,h=t.effectiveFilterWidth,d=t.padInfo.front,p=t.padInfo.top,f=t.padInfo.left;for(let m=0;m<t.batchSize;++m)for(let g=0;g<t.inChannels;++g)for(let x=0;x<t.outDepth;++x){const b=x*s-d;let y=b;for(;y<0;)y+=i;const w=Math.min(t.inDepth,c+b);for(let C=0;C<t.outHeight;++C){const I=C*o-p;let v=I;for(;v<0;)v+=a;const N=Math.min(t.inHeight,u+I);for(let k=0;k<t.outWidth;++k){const S=k*r-f;let $=S;for(;$<0;)$+=l;const E=Math.min(t.inWidth,h+S);let R=Number.NEGATIVE_INFINITY,F=-1;for(let A=y;A<w;A+=i){const O=A-b;for(let L=v;L<N;L+=a){const _=L-I;for(let V=$;V<E;V+=l){const G=V-S,q=n.get(m,A,L,V,g);q>=R&&(R=q,F=O*u*h+_*u+G)}}}e.set(F,m,x,C,k,g)}}}return e}function xD(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t;ut(o,"avgPool");const{filterSize:r,strides:i,pad:a,dimRoundingMode:l}=s,c=1;T(ze(i,c),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${c}'`);const u=In(o.shape,r,i,c,a,l);let h;if(u.filterWidth===1&&u.filterHeight===1&&Bt(u.inShape,u.outShape))h=ls({inputs:{x:o},backend:e});else{const d=e.data.get(o.dataId).values,p=ft(o.shape),f=dp(d,o.shape,o.dtype,p,u,"avg");h=e.makeTensorInfo(u.outShape,o.dtype,f.values)}return h}const bD={kernelName:ka,backendName:"cpu",kernelFunc:xD};function yD(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{filterSize:r,strides:i,pad:a,dimRoundingMode:l,dataFormat:c}=s;ut(o,"avgPool3d");const u=fs(o.shape,r,i,1,a,l,c),h=e.data.get(o.dataId).values,d=B1(h,o.shape,o.dtype,ft(o.shape),u,"avg");return e.makeTensorInfo(d.shape,"float32",d.values)}const wD={kernelName:Sa,backendName:"cpu",kernelFunc:yD};function CD(n){const{inputs:t,backend:e,attrs:s}=n,{dy:o,input:r}=t,{filterSize:i,strides:a,pad:l,dimRoundingMode:c}=s;ut([o,r],"avgPool3DGrad");const u=fs(r.shape,i,a,1,l,c),h=u.strideDepth,d=u.strideHeight,p=u.strideWidth,f=u.filterDepth,m=u.filterHeight,g=u.filterWidth,x=u.dilationDepth,b=u.dilationHeight,y=u.dilationWidth,w=u.effectiveFilterDepth,C=u.effectiveFilterHeight,I=u.effectiveFilterWidth,v=w-1-u.padInfo.front,N=I-1-u.padInfo.left,k=C-1-u.padInfo.top,S=Et(r.shape,"float32"),$=1/(f*m*g),E=e.bufferSync(o);for(let R=0;R<u.batchSize;++R)for(let F=0;F<u.inChannels;++F)for(let A=0;A<u.inDepth;++A)for(let O=0;O<u.inHeight;++O)for(let L=0;L<u.inWidth;++L){const _=A-v,V=O-k,G=L-N;let q=0;for(let j=0;j<w;j+=x){const Y=(_+j)/h;if(!(Y<0||Y>=u.outDepth||Math.floor(Y)!==Y))for(let J=0;J<C;J+=b){const tt=(V+J)/d;if(!(tt<0||tt>=u.outHeight||Math.floor(tt)!==tt))for(let st=0;st<I;st+=y){const it=(G+st)/p;if(it<0||it>=u.outWidth||Math.floor(it)!==it)continue;const pt=E.get(R,Y,tt,it,F);q+=pt}}}S.set(q*$,R,A,O,L,F)}return e.makeTensorInfo(S.shape,S.dtype,S.values)}const $D={kernelName:gu,backendName:"cpu",kernelFunc:CD};function ID(n){const{inputs:t,backend:e,attrs:s}=n,{dy:o,input:r}=t,i=r;ut([o,r],"avgPoolGrad");const{filterSize:a,strides:l,pad:c}=s,u=In(i.shape,a,l,1,c),h=u.strideHeight,d=u.strideWidth,p=u.filterHeight,f=u.filterWidth,m=u.dilationHeight,g=u.dilationWidth,x=u.effectiveFilterHeight,b=u.effectiveFilterWidth,y=b-1-u.padInfo.left,w=x-1-u.padInfo.top,C=Et(i.shape,"float32"),I=1/(p*f),v=e.data.get(o.dataId).values,N=Et(o.shape,"float32",v);for(let k=0;k<u.batchSize;++k)for(let S=0;S<u.inChannels;++S)for(let $=0;$<u.inHeight;++$)for(let E=0;E<u.inWidth;++E){const R=$-w,F=E-y;let A=0;for(let O=0;O<x;O+=m){const L=(R+O)/h;if(!(L<0||L>=u.outHeight||Math.floor(L)!==L))for(let _=0;_<b;_+=g){const V=(F+_)/d;if(V<0||V>=u.outWidth||Math.floor(V)!==V)continue;const G=N.get(k,L,V,S);A+=G}}C.set(A*I,k,$,E,S)}return e.makeTensorInfo(C.shape,C.dtype,C.values)}const vD={kernelName:mu,backendName:"cpu",kernelFunc:ID};function kD(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,scale:r,offset:i,mean:a,variance:l}=t;T(a.shape.length===l.shape.length,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),T(i==null||a.shape.length===i.shape.length,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),T(r==null||a.shape.length===r.shape.length,()=>"Batch normalization gradient requires mean and scale to have equal ranks."),ut([o,a,l,r,i],"batchNorm");let{varianceEpsilon:c}=s;c==null&&(c=.001);const u=e.data.get(o.dataId).values,h=e.data.get(a.dataId).values,d=e.data.get(l.dataId).values,p=r?e.data.get(r.dataId).values:new Float32Array([1]),f=i?e.data.get(i.dataId).values:new Float32Array([0]),m=new Float32Array(u.length),g=f.length,x=p.length,b=d.length,y=h.length;let w=0,C=0,I=0,v=0;for(let N=0;N<u.length;++N)m[N]=f[w++]+(u[N]-h[C++])*p[I++]/Math.sqrt(d[v++]+c),w>=g&&(w=0),C>=y&&(C=0),I>=x&&(I=0),v>=b&&(v=0);return e.makeTensorInfo(o.shape,o.dtype,m)}const SD={kernelName:Ba,backendName:"cpu",kernelFunc:kD};function ND(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{blockShape:r,crops:i}=s;ut([o],"batchToSpaceND");const a=r.reduce((x,b)=>x*b),l=zi(o.shape,r,a),c=Vi(l.length,r.length),u=Wi(o.shape,r,a),h=rd(i,r.length),d=id(u,i,r.length),p=jt({inputs:{x:o},backend:e,attrs:{shape:l}}),f=on({inputs:{x:p},backend:e,attrs:{perm:c}}),m=jt({inputs:{x:f},backend:e,attrs:{shape:u}}),g=Ro({inputs:{x:m},backend:e,attrs:{begin:h,size:d}});return e.disposeIntermediateTensorInfo(p),e.disposeIntermediateTensorInfo(f),e.disposeIntermediateTensorInfo(m),g}const TD={kernelName:Ta,backendName:"cpu",kernelFunc:ND};function ED(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,weights:r}=t,{size:i}=s,a=e.data.get(o.dataId).values,l=e.data.get(r.dataId).values,c=ap(a,l,r.dtype,r.shape,i);return e.makeTensorInfo([i],r.dtype,c)}const RD={kernelName:xu,backendName:"cpu",kernelFunc:ED};function AD(n){const{inputs:t,backend:e}=n,{s0:s,s1:o}=t,r=e.data.get(s.dataId).values,i=e.data.get(o.dataId).values,a=$t(Array.from(r),Array.from(i));return e.makeTensorInfo([a.length],"int32",Int32Array.from(a))}const DD={kernelName:tf,backendName:"cpu",kernelFunc:AD};const FD=Ut(Br,(n,t)=>{const e=t;return n>e.clipValueMax?e.clipValueMax:n<e.clipValueMin?e.clipValueMin:n}),_D={kernelName:Br,backendName:"cpu",kernelFunc:FD};const OD={kernelName:Ea,backendName:"cpu",kernelFunc:n=>{const{x:t}=n.inputs,e=n.backend,s=new Float32Array(K(t.shape)),o=e.data.get(t.dataId),r=o.complexTensorInfos.real,i=o.complexTensorInfos.imag,a=e.data.get(r.dataId).values,l=e.data.get(i.dataId).values;for(let c=0;c<a.length;c++){const u=a[c],h=l[c];s[c]=Math.hypot(u,h)}return e.makeOutput(s,t.shape,"float32")}};function cr(n){const{inputs:t,backend:e}=n,{input:s}=t,o=e.data.get(s.dataId).complexTensorInfos.imag,r=e.data.get(o.dataId).values;return e.makeTensorInfo(o.shape,o.dtype,r)}const MD={kernelName:Lu,backendName:"cpu",kernelFunc:cr};function ur(n){const{inputs:t,backend:e,attrs:s}=n,{axis:o}=s,r=Tt(o,t[0].shape)[0],i=t.map(m=>m.shape);nd(i,r);let a=es(t.map(m=>m.shape),r);if(K(a)===0)return e.makeTensorInfo(a,t[0].dtype,[]);const l=t.filter(m=>K(m.shape)>0);if(l.length===1)return ls({inputs:{x:l[0]},backend:e});if(l[0].dtype==="complex64"){const m=l.map(w=>To({inputs:{input:w},backend:e})),g=l.map(w=>cr({inputs:{input:w},backend:e})),x=ur({inputs:m,backend:e,attrs:{axis:r}}),b=ur({inputs:g,backend:e,attrs:{axis:r}}),y=pn({inputs:{real:x,imag:b},backend:e});return m.forEach(w=>e.disposeIntermediateTensorInfo(w)),g.forEach(w=>e.disposeIntermediateTensorInfo(w)),e.disposeIntermediateTensorInfo(x),e.disposeIntermediateTensorInfo(b),y}const c=l.map(m=>{const x=[-1,K(m.shape.slice(r))];return jt({inputs:{x:m},backend:e,attrs:{shape:x}})}),u=c.map(m=>({vals:e.data.get(m.dataId).values,shape:m.shape}));a=es(c.map(m=>m.shape),1);const h=c[0].shape[0]===1,d=z0(u,a,t[0].dtype,h),p=es(l.map(m=>m.shape),r),f=e.makeTensorInfo(p,t[0].dtype,d);return c.forEach(m=>e.disposeIntermediateTensorInfo(m)),f}const LD={kernelName:Ra,backendName:"cpu",kernelFunc:ur};function z1(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,filter:r}=t,{strides:i,pad:a,dataFormat:l,dilations:c,dimRoundingMode:u}=s;ut([o,r],"conv2d");const h=ms(l),d=Ae(o.shape,r.shape,i,c,a,u,!1,h),p=d.filterHeight,f=d.filterWidth,m=d.dilationHeight,g=d.dilationWidth,x=d.padInfo.left,b=d.padInfo.top,y=d.dataFormat==="channelsLast",w=new Re(d.outShape,o.dtype),C=ft(o.shape),I=ft(r.shape),v=C[0],N=y?C[1]:C[2],k=y?C[2]:1,S=y?1:C[1],$=w.strides[0],E=y?w.strides[1]:w.strides[2],R=y?w.strides[2]:1,F=y?1:w.strides[1],A=e.data.get(o.dataId).values,O=e.data.get(r.dataId).values,L=w.values;for(let _=0;_<d.batchSize;++_){const V=_*v,G=_*$;for(let q=0;q<d.outHeight;++q){const j=G+q*E,Y=q*d.strideHeight-b;for(let J=0;J<p;++J){const tt=Y+J*m;if(tt<0||tt>=d.inHeight)continue;const st=J*I[0],it=V+tt*N;for(let pt=0;pt<d.outWidth;++pt){const ht=j+pt*R,xt=pt*d.strideWidth-x;for(let ot=0;ot<f;++ot){const kt=xt+ot*g;if(kt<0||kt>=d.inWidth)continue;const ct=st+ot*I[1],At=it+kt*k;let Ft=ct;for(let bt=0;bt<d.inChannels;++bt){const It=A[At+bt*S];for(let Ct=0;Ct<d.outChannels;++Ct)L[ht+Ct*F]+=It*O[Ft+Ct];Ft+=d.outChannels}}}}}}return e.makeTensorInfo(w.shape,w.dtype,L)}const PD={kernelName:Aa,backendName:"cpu",kernelFunc:z1};function BD(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,dy:r}=t,{strides:i,pad:a,dataFormat:l,dimRoundingMode:c,filterShape:u}=s;ut([o,r],"conv2dBackpropFilter");const h=ms(l),d=Ae(o.shape,u,i,1,a,c,!1,h),{strideHeight:p,strideWidth:f,filterHeight:m,filterWidth:g}=d,x=d.dataFormat==="channelsLast",b=new Re(d.filterShape,"float32"),y=d.padInfo.left,w=d.padInfo.top,C=e.data.get(o.dataId).values,I=e.data.get(r.dataId).values,v=new Re(o.shape,o.dtype,C),N=new Re(r.shape,r.dtype,I);for(let k=0;k<m;++k){const S=Math.max(0,Math.ceil((w-k)/p)),$=Math.min(d.outHeight,(d.inHeight+w-k)/p);for(let E=0;E<g;++E){const R=Math.max(0,Math.ceil((y-E)/f)),F=Math.min(d.outWidth,(d.inWidth+y-E)/f);for(let A=0;A<d.inChannels;++A)for(let O=0;O<d.outChannels;++O){let L=0;for(let _=0;_<d.batchSize;++_)for(let V=S;V<$;++V){const G=k+V*p-w;for(let q=R;q<F;++q){const j=E+q*f-y;x?L+=v.get(_,G,j,A)*N.get(_,V,q,O):L+=v.get(_,A,G,j)*N.get(_,O,V,q)}}b.set(L,k,E,A,O)}}}return e.makeTensorInfo(b.shape,b.dtype,b.values)}const zD={kernelName:wu,backendName:"cpu",kernelFunc:BD};function VD(n){const{inputs:t,backend:e,attrs:s}=n,{dy:o,filter:r}=t,{inputShape:i,strides:a,pad:l,dataFormat:c,dimRoundingMode:u}=s;ut([o,r],"conv2dBackpropInput");const h=ft(r.shape),d=ft(o.shape);let p=ms(c);const f=Ae(i,r.shape,a,1,l,u,!1,p),m=new Re(f.inShape,"float32"),g=m.values,x=e.data.get(o.dataId).values,b=e.data.get(r.dataId).values,[y,w,C]=h,{batchSize:I,filterHeight:v,filterWidth:N,inChannels:k,inHeight:S,inWidth:$,outChannels:E,outHeight:R,outWidth:F,strideHeight:A,strideWidth:O}=f;p=f.dataFormat;const L=v-1-f.padInfo.top,_=N-1-f.padInfo.left,V=p==="channelsLast",G=m.strides[0],q=V?m.strides[1]:m.strides[2],j=V?m.strides[2]:1,Y=V?1:m.strides[1],J=d[0],tt=V?d[1]:d[2],st=V?d[2]:1,it=V?1:d[1];for(let pt=0;pt<I;++pt)for(let ht=0;ht<k;++ht)for(let xt=0;xt<S;++xt){const ot=xt-L,kt=Math.max(0,Math.ceil(ot/A)),ct=Math.min(R,(v+ot)/A);for(let At=0;At<$;++At){const Ft=At-_,bt=Math.max(0,Math.ceil(Ft/O)),It=Math.min(F,(N+Ft)/O);let Ct=0;for(let Ht=kt;Ht<ct;++Ht){const Oe=Ht*A-ot;for(let te=bt;te<It;++te){const Ze=te*O-Ft,Te=J*pt+tt*Ht+st*te,$e=y*(v-1-Oe)+w*(N-1-Ze)+C*ht;for(let Yt=0;Yt<E;++Yt){const Ee=x[Te+it*Yt],se=b[$e+Yt];Ct+=Ee*se}}}const pe=G*pt+q*xt+j*At+Y*ht;g[pe]=Ct}}return e.makeTensorInfo(m.shape,m.dtype,m.values)}const WD={kernelName:Da,backendName:"cpu",kernelFunc:VD};function UD(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,filter:r}=t,{strides:i,pad:a,dilations:l}=s;ut([o,r],"conv3d");const c=Os(o.shape,r.shape,i,l,a),{filterDepth:u,filterHeight:h,filterWidth:d,dilationDepth:p,dilationHeight:f,dilationWidth:m,padInfo:g}=c,x=g.front,b=g.left,y=g.top,w=new Re(c.outShape,o.dtype),C=e.data.get(o.dataId).values,I=e.data.get(r.dataId).values,v=w.values,N=ft(o.shape),k=ft(r.shape);for(let S=0;S<c.batchSize;++S){const $=S*N[0],E=S*w.strides[0];for(let R=0;R<c.outDepth;++R){const F=E+R*w.strides[1],A=R*c.strideDepth-x;for(let O=0;O<u;++O){const L=A+O*p;if(L<0||L>=c.inDepth)continue;const _=O*k[0],V=$+L*N[1];for(let G=0;G<c.outHeight;++G){const q=F+G*w.strides[2],j=G*c.strideHeight-y;for(let Y=0;Y<h;++Y){const J=j+Y*f;if(J<0||J>=c.inHeight)continue;const tt=_+Y*k[1],st=V+J*N[2];for(let it=0;it<c.outWidth;++it){const pt=q+it*c.outChannels,ht=it*c.strideWidth-b;for(let xt=0;xt<d;++xt){const ot=ht+xt*m;if(ot<0||ot>=c.inWidth)continue;const kt=tt+xt*k[2],ct=st+ot*c.inChannels;let At=kt;for(let Ft=0;Ft<c.inChannels;++Ft){const bt=C[ct+Ft];for(let It=0;It<c.outChannels;++It)v[pt+It]+=bt*I[At+It];At+=c.outChannels}}}}}}}}return e.makeTensorInfo(w.shape,w.dtype,w.values)}const GD={kernelName:Fa,backendName:"cpu",kernelFunc:UD};function HD(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,dy:r}=t,{strides:i,pad:a,filterShape:l}=s;ut([o,r],"conv3dBackpropFilterV2");const c=ft(o.shape),u=ft(r.shape),h=Os(o.shape,l,i,1,a),d=h.strideDepth,p=h.strideHeight,f=h.strideWidth,m=h.filterDepth,g=h.filterHeight,x=h.filterWidth,b=new Re(h.filterShape,"float32"),y=b.values,[w,C,I,v]=b.strides,N=e.data.get(r.dataId).values,[k,S,$,E]=u,R=e.data.get(o.dataId).values,[F,A,O,L]=c,_=h.padInfo.front,V=h.padInfo.left,G=h.padInfo.top;for(let q=0;q<m;++q){const j=Math.max(0,Math.ceil((_-q)/d)),Y=Math.min(h.outDepth,(h.inDepth+_-q)/d),J=q*w;for(let tt=0;tt<g;++tt){const st=Math.max(0,Math.ceil((G-tt)/p)),it=Math.min(h.outHeight,(h.inHeight+G-tt)/p),pt=tt*C+J;for(let ht=0;ht<x;++ht){const xt=Math.max(0,Math.ceil((V-ht)/f)),ot=Math.min(h.outWidth,(h.inWidth+V-ht)/f),kt=ht*I+pt;for(let ct=0;ct<h.inChannels;++ct){const At=ct*v+kt;for(let Ft=0;Ft<h.outChannels;++Ft){let bt=0;for(let It=0;It<h.batchSize;++It){const Ct=It*F,pe=It*k;for(let Ht=j;Ht<Y;++Ht){const te=(q+Ht*d-_)*A+Ct,Ze=Ht*S+pe;for(let Te=st;Te<it;++Te){const Yt=(tt+Te*p-G)*O+te,Ee=Te*$+Ze;for(let se=xt;se<ot;++se){const to=(ht+se*f-V)*L+Yt,nt=se*E+Ee;bt+=R[to+ct]*N[nt+Ft]}}}}y[At+Ft]=bt}}}}}return e.makeTensorInfo(b.shape,b.dtype,b.values)}const qD={kernelName:Cu,backendName:"cpu",kernelFunc:HD};function XD(n){const{inputs:t,backend:e,attrs:s}=n,{dy:o,filter:r}=t,{pad:i,strides:a,inputShape:l}=s;ut([o],"conv3dBackpropInputV2");const c=ft(o.shape),u=ft(r.shape),h=Os(l,r.shape,a,1,i),d=new Re(h.inShape,"float32"),p=d.values,[f,m,g,x]=d.strides,b=e.data.get(o.dataId).values,[y,w,C,I]=c,v=e.data.get(r.dataId).values,[N,k,S,$]=u,{batchSize:E,filterDepth:R,filterHeight:F,filterWidth:A,inChannels:O,inDepth:L,inHeight:_,inWidth:V,outChannels:G,outDepth:q,outHeight:j,outWidth:Y,strideDepth:J,strideHeight:tt,strideWidth:st}=h,it=R-1-h.padInfo.front,pt=F-1-h.padInfo.top,ht=A-1-h.padInfo.left;for(let xt=0;xt<E;++xt)for(let ot=0;ot<O;++ot)for(let kt=0;kt<L;++kt){const ct=kt-it,At=Math.max(0,Math.ceil(ct/J)),Ft=Math.min(q,(R+ct)/J);for(let bt=0;bt<_;++bt){const It=bt-pt,Ct=Math.max(0,Math.ceil(It/tt)),pe=Math.min(j,(F+It)/tt);for(let Ht=0;Ht<V;++Ht){const Oe=Ht-ht,te=Math.max(0,Math.ceil(Oe/st)),Ze=Math.min(Y,(A+Oe)/st);let Te=0;for(let $e=At;$e<Ft;++$e){const Yt=$e*J-ct;for(let Ee=Ct;Ee<pe;++Ee){const se=Ee*tt-It;for(let Fn=te;Fn<Ze;++Fn){const to=Fn*st-Oe,nt=y*xt+w*$e+C*Ee+I*Fn,Nt=N*(R-1-Yt)+k*(F-1-se)+S*(A-1-to)+$*ot;for(let St=0;St<G;++St){const fe=b[nt+St],Pt=v[Nt+St];Te+=fe*Pt}}}}p[f*xt+m*kt+g*bt+x*Ht+ot]=Te}}}return e.makeTensorInfo(d.shape,d.dtype,d.values)}const KD={kernelName:$u,backendName:"cpu",kernelFunc:XD};const jD=Ut(zr,n=>Math.cos(n)),YD={kernelName:zr,backendName:"cpu",kernelFunc:jD};const ZD=Ut(Vr,n=>Math.cosh(n)),QD={kernelName:Vr,backendName:"cpu",kernelFunc:ZD};function JD(n){const{inputs:t,backend:e,attrs:s}=n,{image:o,boxes:r,boxInd:i}=t,{cropSize:a,method:l,extrapolationValue:c}=s,[u,h,d,p]=o.shape,f=r.shape[0],[m,g]=a,x=Et([f,m,g,p],"float32"),b=e.data.get(r.dataId).values,y=e.data.get(i.dataId).values,w=e.data.get(o.dataId).values,C=ft(o.shape),I=ft(x.shape);for(let v=0;v<f;v++){const N=v*4,k=b[N],S=b[N+1],$=b[N+2],E=b[N+3],R=y[v];if(R>=u)continue;const F=m>1?($-k)*(h-1)/(m-1):0,A=g>1?(E-S)*(d-1)/(g-1):0;for(let O=0;O<m;O++){const L=m>1?k*(h-1)+O*F:.5*(k+$)*(h-1);if(L<0||L>h-1){for(let _=0;_<g;_++)for(let V=0;V<p;V++){const G=V+_*I[2]+O*I[1]+v*I[0];x.values[G]=c}continue}if(l==="bilinear"){const _=Math.floor(L),V=Math.ceil(L),G=L-_;for(let q=0;q<g;q++){const j=g>1?S*(d-1)+q*A:.5*(S+E)*(d-1);if(j<0||j>d-1){for(let st=0;st<p;st++){const it=st+q*I[2]+O*I[1]+v*I[0];x.values[it]=c}continue}const Y=Math.floor(j),J=Math.ceil(j),tt=j-Y;for(let st=0;st<p;st++){let it=st+Y*C[2]+_*C[1]+R*C[0];const pt=w[it];it=st+J*C[2]+_*C[1]+R*C[0];const ht=w[it];it=st+Y*C[2]+V*C[1]+R*C[0];const xt=w[it];it=st+J*C[2]+V*C[1]+R*C[0];const ot=w[it],kt=pt+(ht-pt)*tt,ct=xt+(ot-xt)*tt;it=st+q*I[2]+O*I[1]+v*I[0],x.values[it]=kt+(ct-kt)*G}}}else for(let _=0;_<g;++_){const V=g>1?S*(d-1)+_*A:.5*(S+E)*(d-1);if(V<0||V>d-1){for(let j=0;j<p;j++){const Y=j+_*I[2]+O*I[1]+v*I[0];x.values[Y]=c}continue}const G=Math.round(V),q=Math.round(L);for(let j=0;j<p;j++){const Y=j+G*C[2]+q*C[1]+R*C[0],J=j+_*I[2]+O*I[1]+v*I[0];x.values[J]=w[Y]}}}}return e.makeTensorInfo(x.shape,x.dtype,x.values)}const tF={kernelName:vu,backendName:"cpu",kernelFunc:JD};function eF(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,exclusive:i,reverse:a}=s;ut(o,"cumprod");const l=ee([r],o.shape.length);let c=o;l!=null&&(c=on({inputs:{x:o},backend:e,attrs:{perm:l}}));const u=ie(1,o.shape.length)[0];if(u!==c.shape.length-1)throw new Error(`backend.cumprod in CPU expects an inner-most axis=${c.shape.length-1} but got axis=${u}`);const h=cn(c.dtype,"int32"),d=lu(K(c.shape),h),p=e.data.get(c.dataId).values,f=c.shape[c.shape.length-1],m=a?(x,b)=>x+f-b-1:(x,b)=>x+b;for(let x=0;x<p.length;x+=f)for(let b=0;b<f;b++){const y=m(x,b);if(b===0)d[y]=i?1:p[y];else{const w=m(x,b-1);d[y]=i?p[w]*d[w]:p[y]*d[w]}}const g=e.makeTensorInfo(c.shape,h,d);if(l!=null){const x=Ms(l),b=on({inputs:{x:g},backend:e,attrs:{perm:x}});return e.disposeIntermediateTensorInfo(g),e.disposeIntermediateTensorInfo(c),b}return g}const nF={kernelName:Iu,backendName:"cpu",kernelFunc:eF};function sF(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,exclusive:i,reverse:a}=s;ut(o,"cumsum");const l=ee([r],o.shape.length);let c=o;l!=null&&(c=on({inputs:{x:o},backend:e,attrs:{perm:l}}));const u=ie(1,o.shape.length)[0];if(u!==c.shape.length-1)throw new Error(`backend.cumsum in CPU expects an inner-most axis=${c.shape.length-1} but got axis=${u}`);const h=cn(c.dtype,"int32"),d=Be(K(c.shape),h),p=e.data.get(c.dataId).values,f=c.shape[c.shape.length-1],m=a?(x,b)=>x+f-b-1:(x,b)=>x+b;for(let x=0;x<p.length;x+=f)for(let b=0;b<f;b++){const y=m(x,b);if(b===0)d[y]=i?0:p[y];else{const w=m(x,b-1);d[y]=i?p[w]+d[w]:p[y]+d[w]}}const g=e.makeTensorInfo(c.shape,h,d);if(l!=null){const x=Ms(l),b=on({inputs:{x:g},backend:e,attrs:{perm:x}});return e.disposeIntermediateTensorInfo(g),e.disposeIntermediateTensorInfo(c),b}return g}const oF={kernelName:_a,backendName:"cpu",kernelFunc:sF};function rF(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,weights:r}=t,{size:i,binaryOutput:a}=s;if(o.shape.length===1){const l=e.data.get(o.dataId).values,c=e.data.get(r.dataId).values,u=ap(l,c,r.dtype,r.shape,i);return e.makeTensorInfo([i],r.dtype,u)}else if(o.shape.length===2){const l=e.bufferSync(o),c=e.bufferSync(r),u=L0(l,c,i,a);return e.makeTensorInfo(u.shape,r.dtype,u.values)}throw new Error(`Error in denseBincount: input must be at most rank 2, but got rank${o.shape.length}.`)}const iF={kernelName:ku,backendName:"cpu",kernelFunc:rF};function aF(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{blockSize:r,dataFormat:i}=s;T(i==="NHWC",()=>`Only NHWC dataFormat supported on CPU for depthToSpace. Got ${i}`);const a=o.shape[0],l=o.shape[1],c=o.shape[2],u=o.shape[3],h=l*r,d=c*r,p=u/(r*r),f=e.data.get(o.dataId).values,m=new Float32Array(a*h*d*p);let g=0;for(let x=0;x<a;++x)for(let b=0;b<h;++b){const y=Math.floor(b/r),w=b%r;for(let C=0;C<d;++C){const I=Math.floor(C/r),v=C%r,N=(w*r+v)*p;for(let k=0;k<p;++k){const $=k+N+u*(I+c*(y+l*x));m[g++]=f[$]}}}return e.makeTensorInfo([a,h,d,p],o.dtype,m)}const lF={kernelName:Su,backendName:"cpu",kernelFunc:aF};function V1(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,filter:r}=t,{strides:i,pad:a,dilations:l,dimRoundingMode:c}=s;ut([o,r],"depthwiseConv2DNative");const u=ft(o.shape),h=ft(r.shape);let d=l;d==null&&(d=[1,1]),T(ze(i,d),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${i} and dilations '${d}'`);const p=Ae(o.shape,r.shape,i,d,a,c,!0),{filterHeight:f,filterWidth:m,dilationHeight:g,dilationWidth:x,padInfo:b}=p,y=b.left,w=b.top,C=p.outChannels/p.inChannels,I=new Re(p.outShape,o.dtype),v=e.data.get(o.dataId).values,N=e.data.get(r.dataId).values,k=I.values;for(let S=0;S<p.batchSize;++S){const $=S*u[0],E=S*I.strides[0];for(let R=0;R<p.outHeight;++R){const F=E+R*I.strides[1],A=R*p.strideHeight-w;for(let O=0;O<f;++O){const L=A+O*g;if(L<0||L>=p.inHeight)continue;const _=O*h[0],V=$+L*u[1];for(let G=0;G<p.outWidth;++G){const q=F+G*I.strides[2],j=G*p.strideWidth-y;for(let Y=0;Y<m;++Y){const J=j+Y*x;if(J<0||J>=p.inWidth)continue;const tt=_+Y*h[1],st=V+J*p.inChannels;let it=q,pt=tt;for(let ht=0;ht<p.inChannels;++ht){const xt=v[st+ht];for(let ot=0;ot<C;++ot)k[it+ot]+=xt*N[pt+ot];it+=C,pt+=C}}}}}}return e.makeTensorInfo(I.shape,I.dtype,I.values)}const cF={kernelName:Oa,backendName:"cpu",kernelFunc:V1};function uF(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,dy:r}=t,{strides:i,dilations:a,pad:l,dimRoundingMode:c,filterShape:u}=s;ut([o,r],"depthwiseConv2dNativeBackpropFilter");const h=Ae(o.shape,u,i,a,l,c,!0),{strideHeight:d,strideWidth:p,filterHeight:f,filterWidth:m}=h,g=new Re(h.filterShape,"float32"),x=h.padInfo.left,b=h.padInfo.top,y=h.outChannels/h.inChannels,w=e.data.get(o.dataId).values,C=new Re(o.shape,o.dtype,w),I=e.data.get(r.dataId).values,v=new Re(r.shape,r.dtype,I);for(let N=0;N<f;++N){const k=Math.max(0,Math.ceil((b-N)/d)),S=Math.min(h.outHeight,(h.inHeight+b-N)/d);for(let $=0;$<m;++$){const E=Math.max(0,Math.ceil((x-$)/p)),R=Math.min(h.outWidth,(h.inWidth+x-$)/p);for(let F=0;F<h.outChannels;++F){const A=Math.trunc(F/y),O=F%y;let L=0;for(let _=0;_<h.batchSize;++_)for(let V=k;V<S;++V){const G=N+V*d-b;for(let q=E;q<R;++q){const j=$+q*p-x;L+=C.get(_,G,j,A)*v.get(_,V,q,F)}}g.set(L,N,$,A,O)}}}return e.makeTensorInfo(g.shape,g.dtype,g.values)}const hF={kernelName:Nu,backendName:"cpu",kernelFunc:uF};function dF(n){const{inputs:t,backend:e,attrs:s}=n,{dy:o,filter:r}=t,{strides:i,dilations:a,pad:l,dimRoundingMode:c,inputShape:u}=s;ut([o,r],"depthwiseConv2DNativeBackpropInput");const h=ft(o.shape),d=ft(r.shape),p=Ae(u,r.shape,i,a,l,c,!0),f=new Re(p.inShape,"float32"),m=f.values,[g,x,b]=f.strides,y=e.data.get(o.dataId).values,[w,C,I]=h,v=e.data.get(r.dataId).values,[N,k,S]=d,{batchSize:$,filterHeight:E,filterWidth:R,inChannels:F,inHeight:A,inWidth:O,outChannels:L,outHeight:_,outWidth:V,strideHeight:G,strideWidth:q}=p,j=E-1-p.padInfo.top,Y=R-1-p.padInfo.left,J=L/F;for(let tt=0;tt<$;++tt)for(let st=0;st<F;++st)for(let it=0;it<A;++it){const pt=it-j,ht=Math.max(0,Math.ceil(pt/G)),xt=Math.min(_,(E+pt)/G);for(let ot=0;ot<O;++ot){const kt=ot-Y,ct=Math.max(0,Math.ceil(kt/q)),At=Math.min(V,(R+kt)/q);let Ft=0;for(let bt=ht;bt<xt;++bt){const It=bt*G-pt;for(let Ct=ct;Ct<At;++Ct){const pe=Ct*q-kt,Ht=w*tt+C*bt+I*Ct,Oe=N*(E-1-It)+k*(R-1-pe)+S*st;for(let te=0;te<J;++te){const Ze=st*J+te,Te=y[Ht+Ze],$e=v[Oe+te];Ft+=Te*$e}}}m[g*tt+x*it+b*ot+st]=Ft}}return e.makeTensorInfo(f.shape,f.dtype,f.values)}const pF={kernelName:Tu,backendName:"cpu",kernelFunc:dF};function fF(n){const{inputs:t,backend:e}=n,{x:s}=t,o=K(s.shape),r=e.data.get(s.dataId).values,i=Et([o,o],s.dtype),a=i.values;for(let c=0;c<r.length;c++)a[c*o+c]=r[c];const l=[...s.shape,...s.shape];return e.makeTensorInfo(l,i.dtype,i.values)}const mF={kernelName:ef,backendName:"cpu",kernelFunc:fF};const gF={kernelName:Ma,backendName:"cpu",kernelFunc:({inputs:n,backend:t,attrs:e})=>{const{x:s,filter:o}=n,{strides:r,pad:i,dilations:a}=e,l=t,c=l.data.get(s.dataId).values,u=s.shape.length,h=l.data.get(o.dataId).values,d=o.shape.length,{batchSize:p,inHeight:f,inWidth:m,inChannels:g,outHeight:x,outWidth:b,padInfo:y,strideHeight:w,strideWidth:C,filterHeight:I,filterWidth:v,dilationHeight:N,dilationWidth:k,outShape:S}=Ei(s.shape,o.shape,r,i,"NHWC",a),$=K(S),E=S.length,R=oe(s.dtype,$);for(let A=0;A<p;++A)for(let O=0;O<x;++O){const L=O*w-y.top;for(let _=0;_<b;++_){const V=_*C-y.left;for(let G=0;G<g;++G){let q=Number.MIN_SAFE_INTEGER;for(let Y=0;Y<I;++Y){const J=L+Y*N;if(J>=0&&J<f)for(let tt=0;tt<v;++tt){const st=V+tt*k;if(st>=0&&st<m){const it=jn([A,J,st,G],u,ft(s.shape)),pt=jn([Y,tt,G],d,ft(o.shape)),ht=c[it]+h[pt];ht>q&&(q=ht)}}}const j=jn([A,O,_,G],E,ft(S));R[j]=q}}}return{dataId:l.write(oo(R,s.dtype),S,s.dtype),shape:S,dtype:s.dtype}}};const xF={kernelName:Ru,backendName:"cpu",kernelFunc:({inputs:n,backend:t,attrs:e})=>{const{x:s,filter:o,dy:r}=n,{strides:i,pad:a,dilations:l}=e,c=t,u=Mn(s.shape,c.data.get(s.dataId).values),h=Mn(o.shape,c.data.get(o.dataId).values),{batchSize:d,inHeight:p,inWidth:f,inChannels:m,outHeight:g,outWidth:x,padInfo:b,strideHeight:y,strideWidth:w,filterHeight:C,filterWidth:I,dilationHeight:v,dilationWidth:N,outShape:k}=Ei(s.shape,o.shape,i,a,"NHWC",l);T(r.rank===k.length,()=>`Error in ${Ru}, dy must have the same rank as output ${k.length}, but got ${r.rank}`);const S=Mn(k,c.data.get(r.dataId).values),$=Yp(o.shape,o.dtype);for(let R=0;R<d;++R)for(let F=0;F<g;++F){const A=F*y-b.top;for(let O=0;O<x;++O){const L=O*w-b.left;for(let _=0;_<m;++_){let V=Number.MIN_SAFE_INTEGER,G=0,q=0;for(let j=0;j<C;++j){const Y=A+j*v;if(Y>=0&&Y<p)for(let J=0;J<I;++J){const tt=L+J*N;if(tt>=0&&tt<f){const st=u[R][Y][tt][_]+h[j][J][_];st>V&&(V=st,G=j,q=J)}}}$[G][q][_]+=S[R][F][O][_]}}}return{dataId:c.write(oo($,s.dtype),o.shape,o.dtype),shape:o.shape,dtype:o.dtype}}};const bF={kernelName:Eu,backendName:"cpu",kernelFunc:({inputs:n,backend:t,attrs:e})=>{const{x:s,filter:o,dy:r}=n,{strides:i,pad:a,dilations:l}=e,c=t,u=Mn(s.shape,c.data.get(s.dataId).values),h=Mn(o.shape,c.data.get(o.dataId).values),{batchSize:d,inHeight:p,inWidth:f,inChannels:m,outHeight:g,outWidth:x,padInfo:b,strideHeight:y,strideWidth:w,filterHeight:C,filterWidth:I,dilationHeight:v,dilationWidth:N,outShape:k}=Ei(s.shape,o.shape,i,a,"NHWC",l);T(r.rank===k.length,()=>`Error in ${Eu}, dy must have the same rank as output ${k.length}, but got ${r.rank}`);const S=Mn(k,c.data.get(r.dataId).values),$=Yp(s.shape,s.dtype);for(let R=0;R<d;++R)for(let F=0;F<g;++F){const A=F*y-b.top;for(let O=0;O<x;++O){const L=O*w-b.left;for(let _=0;_<m;++_){let V=Number.MIN_SAFE_INTEGER,G=A<0?0:A,q=L<0?0:L;for(let j=0;j<C;++j){const Y=A+j*v;if(Y>=0&&Y<p)for(let J=0;J<I;++J){const tt=L+J*N;if(tt>=0&&tt<f){const st=u[R][Y][tt][_]+h[j][J][_];st>V&&(V=st,G=Y,q=tt)}}}$[R][G][q][_]+=S[R][F][O][_]}}}return{dataId:c.write(oo($,s.dtype),s.shape,s.dtype),shape:s.shape,dtype:s.dtype}}};function yF(n){const{inputs:t,backend:e,attrs:s}=n,{image:o}=t,{canvas:r,options:i}=s,{contextOptions:a,imageOptions:l}=i||{},c=(l==null?void 0:l.alpha)||1,u=(a==null?void 0:a.contextType)||"2d";if(u!=="2d")throw new Error(`Context type ${a.contextType} is not supported by the CPU backend.`);const h=r.getContext(u,(a==null?void 0:a.contextAttributes)||{});if(h==null)throw new Error(`Could not get the context with ${u} type.`);const[d,p]=o.shape.slice(0,2),f=o.shape.length===2?1:o.shape[2],m=e.data.get(o.dataId).values,g=o.dtype==="float32"?255:1,x=new Uint8ClampedArray(p*d*4);for(let y=0;y<d*p;++y){const w=[0,0,0,255*c];for(let I=0;I<f;I++){const v=m[y*f+I];if(o.dtype==="float32"){if(v<0||v>1)throw new Error(`Tensor values for a float32 Tensor must be in the range [0 - 1] but encountered ${v}.`)}else if(o.dtype==="int32"&&(v<0||v>255))throw new Error(`Tensor values for a int32 Tensor must be in the range [0 - 255] but encountered ${v}.`);f===1?(w[0]=v*g,w[1]=v*g,w[2]=v*g):w[I]=v*g}const C=y*4;x[C+0]=Math.round(w[0]),x[C+1]=Math.round(w[1]),x[C+2]=Math.round(w[2]),x[C+3]=Math.round(w[3])}r.width=p,r.height=d;const b=new ImageData(x,p,d);return h.putImageData(b,0,0),o}const wF={kernelName:Xw,backendName:"cpu",kernelFunc:yF};function ia(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,keepDims:i}=s;ut(o,"sum");let a;o.dtype==="bool"?a=Ks({inputs:{x:o},backend:e,attrs:{dtype:"int32"}}):a=ls({inputs:{x:o},backend:e});const l=a.shape.length,c=Tt(r,a.shape),u=ee(c,l);let h=c,d=a;u!=null&&(d=on({inputs:{x:a},backend:e,attrs:{perm:u}}),h=ie(h.length,l)),De("sum",h,d.shape.length);const[p,f]=ke(d.shape,h),m=cn(d.dtype,"int32");let g=vc(e,p,m);const x=K(f),b=e.data.get(g.dataId).values,y=e.data.get(d.dataId).values;for(let w=0;w<b.length;++w){const C=w*x;let I=0;for(let v=0;v<x;++v)I+=y[C+v];b[w]=I}if(i){const w=he(g.shape,c),C=g;g=jt({inputs:{x:g},backend:e,attrs:{shape:w}}),e.disposeIntermediateTensorInfo(C)}return e.disposeIntermediateTensorInfo(a),u!=null&&e.disposeIntermediateTensorInfo(d),g}const CF={kernelName:ml,backendName:"cpu",kernelFunc:ia};function $F(n){const{inputs:t,backend:e,attrs:s}=n,{equation:o}=s,r=t,{allDims:i,summedDims:a,idDims:l}=md(o,r.length);xd(i.length,l,r);const{path:c,steps:u}=bd(a,l),h=u.length;let d=null,p=i.length;const f=[];for(let m=0;m<h;++m){for(const g of u[m]){const{permutationIndices:x,expandDims:b}=gd(p,l[g]);let y;yd(x)?y=r[g]:(y=on({inputs:{x:r[g]},backend:e,attrs:{perm:x}}),f.push(y));const w=y.shape.slice();for(let C=0;C<b.length;++C)w.splice(b[C],0,1);Bt(y.shape,w)||(y=jt({inputs:{x:y},backend:e,attrs:{shape:w}}),f.push(y)),d===null?d=y:(d=kc({inputs:{a:y,b:d},backend:e}),f.push(d))}m<h-1&&(c[m]>=0&&(d=ia({inputs:{x:d},backend:e,attrs:{axis:c[m]-(i.length-p),keepDims:!1}}),f.push(d)),p--)}for(const m of f)m!==d&&e.disposeIntermediateTensorInfo(m);return d}const IF={kernelName:Au,backendName:"cpu",kernelFunc:$F};function vF(n){const{inputs:t,backend:e}=n,{dy:s,y:o}=t;ut([s,o],"eluGrad");const r=new Float32Array(K(o.shape)),i=e.data.get(o.dataId).values,a=e.data.get(s.dataId).values;for(let l=0;l<i.length;++l){const c=i[l];c>=0?r[l]=a[l]:r[l]=a[l]*(c+1)}return e.makeTensorInfo(o.shape,"float32",r)}const kF={kernelName:Du,backendName:"cpu",kernelFunc:vF};const SF=ad,NF=ld,TF=cd,EF=ud,RF=hd,AF=dd,DF=Ut(Gr,n=>{const t=Math.sign(n),e=Math.abs(n),s=1/(1+SF*e);return t*(1-((((AF*s+RF)*s+EF)*s+TF)*s+NF)*s*Math.exp(-e*e))}),FF={kernelName:Gr,backendName:"cpu",kernelFunc:DF};function Tc(n){const{inputs:t,backend:e,attrs:s}=n,{input:o}=t,{dim:r}=s,i=o.shape.length,a=o.shape.slice();let l=r;return r<0&&(T(-(i+1)<=r,()=>`Axis must be in the interval [${-(i+1)}, ${i}]`),l=i+r+1),a.splice(l,0,1),jt({inputs:{x:o},backend:e,attrs:{shape:a}})}const _F={kernelName:Pa,backendName:"cpu",kernelFunc:Tc};const OF=ce((n,t)=>n/t),pp=Ce(Wr,OF),fp={kernelName:Wr,backendName:"cpu",kernelFunc:pp};function W1(n,t,e){const s=n.shape,o=s[0],r=s[1],i=e.data.get(n.dataId),a=i.complexTensorInfos.real,l=i.complexTensorInfos.imag,c=[o,r],u=K(c),h=Pe("float32",u),d=Pe("float32",u);for(let g=0;g<o;g++){const x=Ro({inputs:{x:a},backend:e,attrs:{begin:[g,0],size:[1,r]}}),b=Ro({inputs:{x:l},backend:e,attrs:{begin:[g,0],size:[1,r]}}),y=pn({inputs:{real:x,imag:b},backend:e}),{real:w,imag:C}=MF(y,t,e),I=ys(w,C);for(let v=0;v<r;v++){const N=pd(I,v);h[g*r+v]=N.real,d[g*r+v]=N.imag}e.disposeIntermediateTensorInfo(x),e.disposeIntermediateTensorInfo(b),e.disposeIntermediateTensorInfo(y)}const p=e.makeTensorInfo(c,"float32",h),f=e.makeTensorInfo(c,"float32",d),m=pn({inputs:{real:p,imag:f},backend:e});return e.disposeIntermediateTensorInfo(p),e.disposeIntermediateTensorInfo(f),m}function MF(n,t,e){const s=K(n.shape),o=e.data.get(n.dataId),r=e.data.get(o.complexTensorInfos.real.dataId).values,i=e.data.get(o.complexTensorInfos.imag.dataId).values;if(LF(s)){const a=mp(r,i,s,t,e),l=[n.shape[0],n.shape[1]];if(t){const c=e.makeTensorInfo(l,"float32",a.real),u=e.makeTensorInfo(l,"float32",a.imag),h=e.makeTensorInfo([],"float32",Rs(s,"float32")),d=ls({inputs:{x:h},backend:e}),p=fp.kernelFunc({inputs:{a:c,b:h},backend:e}),f=fp.kernelFunc({inputs:{a:u,b:d},backend:e}),m=e.data.get(p.dataId).values,g=e.data.get(f.dataId).values;return e.disposeIntermediateTensorInfo(c),e.disposeIntermediateTensorInfo(u),e.disposeIntermediateTensorInfo(h),e.disposeIntermediateTensorInfo(d),e.disposeIntermediateTensorInfo(p),e.disposeIntermediateTensorInfo(f),{real:m,imag:g}}return a}else{const a=ys(r,i),l=PF(a,s,t);return yg(l)}}function LF(n){return(n&n-1)===0}function mp(n,t,e,s,o){if(e===1)return{real:n,imag:t};const r=ys(n,t),i=e/2,a=wg(r),l=a.real,c=a.imag,u=[l.length],h=o.makeTensorInfo(u,"float32",l),d=o.makeTensorInfo(u,"float32",c),p=pn({inputs:{real:h,imag:d},backend:o}),f=Cg(r),m=f.real,g=f.imag,x=[m.length],b=o.makeTensorInfo(x,"float32",m),y=o.makeTensorInfo(x,"float32",g),w=pn({inputs:{real:b,imag:y},backend:o}),C=mp(l,c,i,s,o),I=C.real,v=C.imag,N=[I.length],k=o.makeTensorInfo(N,"float32",I),S=o.makeTensorInfo(N,"float32",v),$=pn({inputs:{real:k,imag:S},backend:o}),E=mp(m,g,i,s,o),R=E.real,F=E.imag,A=[R.length],O=o.makeTensorInfo(A,"float32",R),L=o.makeTensorInfo(A,"float32",F),_=pn({inputs:{real:O,imag:L},backend:o}),V=Ig(e,s),G=[V.real.length],q=o.makeTensorInfo(G,"float32",V.real),j=o.makeTensorInfo(G,"float32",V.imag),Y=pn({inputs:{real:q,imag:j},backend:o}),J=kc({inputs:{a:Y,b:_},backend:o}),tt=lr({inputs:{a:$,b:J},backend:o}),st=hp({inputs:{a:$,b:J},backend:o}),it=To({inputs:{input:tt},backend:o}),pt=To({inputs:{input:st},backend:o}),ht=cr({inputs:{input:tt},backend:o}),xt=cr({inputs:{input:st},backend:o}),ot=ur({inputs:[it,pt],backend:o,attrs:{axis:0}}),kt=ur({inputs:[ht,xt],backend:o,attrs:{axis:0}}),ct=o.data.get(ot.dataId).values,At=o.data.get(kt.dataId).values;return o.disposeIntermediateTensorInfo(h),o.disposeIntermediateTensorInfo(d),o.disposeIntermediateTensorInfo(p),o.disposeIntermediateTensorInfo(b),o.disposeIntermediateTensorInfo(y),o.disposeIntermediateTensorInfo(w),o.disposeIntermediateTensorInfo(k),o.disposeIntermediateTensorInfo(S),o.disposeIntermediateTensorInfo($),o.disposeIntermediateTensorInfo(O),o.disposeIntermediateTensorInfo(L),o.disposeIntermediateTensorInfo(_),o.disposeIntermediateTensorInfo(q),o.disposeIntermediateTensorInfo(j),o.disposeIntermediateTensorInfo(Y),o.disposeIntermediateTensorInfo(J),o.disposeIntermediateTensorInfo(tt),o.disposeIntermediateTensorInfo(st),o.disposeIntermediateTensorInfo(it),o.disposeIntermediateTensorInfo(ht),o.disposeIntermediateTensorInfo(pt),o.disposeIntermediateTensorInfo(xt),o.disposeIntermediateTensorInfo(ot),o.disposeIntermediateTensorInfo(kt),{real:ct,imag:At}}function PF(n,t,e){const s=new Float32Array(t*2);for(let o=0;o<t;o++){let r=0,i=0;for(let a=0;a<t;a++){const l=vg(o*a,t,e),c=pd(n,a);r+=c.real*l.real-c.imag*l.imag,i+=c.real*l.imag+c.imag*l.real}e&&(r/=t,i/=t),$g(s,r,i,o)}return s}function BF(n){const{inputs:t,backend:e}=n,{input:s}=t,o=K(s.shape),r=s.shape[s.shape.length-1],i=o/r,a=jt({inputs:{x:s},backend:e,attrs:{shape:[i,r]}}),l=W1(a,!1,e),c=jt({inputs:{x:l},backend:e,attrs:{shape:s.shape}});return e.disposeIntermediateTensorInfo(a),e.disposeIntermediateTensorInfo(l),c}const zF={kernelName:Fu,backendName:"cpu",kernelFunc:BF};function gp(n){const{backend:t,attrs:e}=n,{shape:s,value:o,dtype:r}=e,i=r||Vo(o),a=oe(i,K(s));return WF(a,o,i),t.makeTensorInfo(s,i,a)}const VF={kernelName:_u,backendName:"cpu",kernelFunc:gp};function WF(n,t,e){n.fill(t)}const UF={kernelName:Ou,backendName:"cpu",kernelFunc:({inputs:n,attrs:t,backend:e})=>{const{image:s}=n,o=e,r=Pe(s.dtype,K(s.shape)),[i,a,l,c]=s.shape,u=o.data.get(s.dataId).values;for(let d=0;d<i;d++){const p=d*l*a*c;for(let f=0;f<a;f++){const m=f*(l*c);for(let g=0;g<l;g++){const x=g*c;for(let b=0;b<c;b++){const y=Math.round(l-g-1),w=p+m+x+b;let C=u[w];if(y>=0&&y<l){const I=y*c,v=p+m+I+b;C=u[v]}r[w]=C}}}}return{dataId:o.write(r,s.shape,s.dtype),shape:s.shape,dtype:s.dtype}}};function GF(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,filter:r,bias:i,preluActivationWeights:a}=t,{strides:l,pad:c,dataFormat:u,dilations:h,dimRoundingMode:d,activation:p,leakyreluAlpha:f}=s;let m=z1({inputs:{x:o,filter:r},backend:e,attrs:{strides:l,pad:c,dataFormat:u,dilations:h,dimRoundingMode:d}});if(i){const g=m;if(u==="NCHW"&&i.shape.length===1&&i.shape[0]!==1){const x=jt({inputs:{x:i},backend:e,attrs:{shape:[i.shape[0],1,1]}});m=lr({inputs:{a:m,b:x},backend:e}),e.disposeIntermediateTensorInfo(x)}else m=lr({inputs:{a:m,b:i},backend:e});e.disposeIntermediateTensorInfo(g)}if(p){const g=m;if(u==="NCHW"&&p==="prelu"&&a.shape.length===1&&a.shape[0]!==1){const x=jt({inputs:{x:a},backend:e,attrs:{shape:[a.shape[0],1,1]}});m=Nc(e,m,p,x,f),e.disposeIntermediateTensorInfo(x)}else m=Nc(e,m,p,a,f);e.disposeIntermediateTensorInfo(g)}return m}const HF={kernelName:Il,backendName:"cpu",kernelFunc:GF};function qF(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,filter:r,bias:i,preluActivationWeights:a}=t,{strides:l,pad:c,dataFormat:u,dilations:h,dimRoundingMode:d,activation:p,leakyreluAlpha:f}=s;let m=V1({inputs:{x:o,filter:r},backend:e,attrs:{strides:l,pad:c,dataFormat:u,dilations:h,dimRoundingMode:d}});if(i){const g=m;m=lr({inputs:{a:m,b:i},backend:e}),e.disposeIntermediateTensorInfo(g)}if(p){const g=m;m=Nc(e,m,p,a,f),e.disposeIntermediateTensorInfo(g)}return m}const XF={kernelName:Cf,backendName:"cpu",kernelFunc:qF};function KF(n){const{inputs:t,backend:e}=n,{params:s,indices:o}=t,r=K(s.shape),i=o.shape,a=i[i.length-1],[l,c,u,h]=Jh(s,o);if(c===0)return e.makeTensorInfo(l,s.dtype,[]);const d=e.data.get(o.dataId).values,p=e.bufferSync(s),f=K0(d,p,s.dtype,c,a,u,h,s.shape,r);return e.makeTensorInfo(l,s.dtype,f.values)}const jF={kernelName:nf,backendName:"cpu",kernelFunc:KF};function YF(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,indices:r}=t,{axis:i,batchDims:a}=s;ut([o,r],"gatherV2");const l=Tt(i,o.shape)[0],c=e.data.get(r.dataId).values,u=o.shape[l];for(let w=0;w<c.length;++w){const C=c[w];T(C<=u-1&&C>=0,()=>`GatherV2: the index value ${C} is not in [0, ${u-1}]`)}let h=a;a==null&&(h=0);const d=K(r.shape),p=Pg(o,r,l,h),f=jt({inputs:{x:o},backend:e,attrs:{shape:[p.batchSize,p.outerSize,p.dimSize,p.sliceSize]}}),m=jt({inputs:{x:r},backend:e,attrs:{shape:[p.batchSize,d/p.batchSize]}}),g=[p.batchSize,p.outerSize,d/p.batchSize,p.sliceSize],x=e.bufferSync(m),b=e.bufferSync(f),y=j0(b,x,g);return e.disposeIntermediateTensorInfo(f),e.disposeIntermediateTensorInfo(m),e.makeTensorInfo(p.outputShape,y.dtype,y.values)}const ZF={kernelName:za,backendName:"cpu",kernelFunc:YF};function QF(n){const{inputs:t,backend:e}=n,{input:s}=t,o=K(s.shape),r=s.shape[s.shape.length-1],i=o/r,a=jt({inputs:{x:s},backend:e,attrs:{shape:[i,r]}}),l=W1(a,!0,e),c=jt({inputs:{x:l},backend:e,attrs:{shape:s.shape}});return e.disposeIntermediateTensorInfo(a),e.disposeIntermediateTensorInfo(l),c}const JF={kernelName:Mu,backendName:"cpu",kernelFunc:QF};const t_=Ut(Zr,n=>Number.isFinite(n)?1:0,"bool"),e_={kernelName:Zr,backendName:"cpu",kernelFunc:t_};const n_=Ut(Qr,n=>Math.abs(n)===1/0?1:0,"bool"),s_={kernelName:Qr,backendName:"cpu",kernelFunc:n_};const o_=Ut(Jr,n=>Number.isNaN(n)?1:0,"bool"),r_={kernelName:Jr,backendName:"cpu",kernelFunc:o_};function i_(n){const{backend:t,attrs:e}=n,{start:s,stop:o,num:r}=e,i=t1(s,o,r);return t.makeTensorInfo([i.length],"float32",i)}const a_={kernelName:sf,backendName:"cpu",kernelFunc:i_};const l_=Ut(ei,n=>Math.log1p(n)),c_={kernelName:ei,backendName:"cpu",kernelFunc:l_};const u_=ce((n,t)=>n&&t),h_=Ce(Ha,u_,null,"bool"),d_={kernelName:Ha,backendName:"cpu",kernelFunc:h_};const p_=Ut(qa,n=>n?0:1,"bool"),f_={kernelName:qa,backendName:"cpu",kernelFunc:p_};const m_=ce((n,t)=>n||t),g_=Ce(Xa,m_,null,"bool"),x_={kernelName:Xa,backendName:"cpu",kernelFunc:g_};function b_(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{depthRadius:r,bias:i,alpha:a,beta:l}=s;ut(o,"LRN");const c=o.shape[3],u=c-1,h=e.data.get(o.dataId).values,d=K(o.shape),p=new Float32Array(d);function f(m){const g=m%c;let x=m-g+Math.max(0,g-r);const b=m-g+Math.min(g+r,u);let y=0;for(;x<=b;x++){const w=h[x];y+=w*w}return y}for(let m=0;m<d;m++){const g=f(m),x=h[m]*Math.pow(i+a*g,-l);p[m]=x}return e.makeTensorInfo(o.shape,o.dtype,p)}const y_={kernelName:Ka,backendName:"cpu",kernelFunc:b_};function w_(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,y:r,dy:i}=t,{depthRadius:a,bias:l,alpha:c,beta:u}=s;ut(i,"LRNGrad");const h=K(i.shape),d=i.shape[3],p=e.data.get(i.dataId).values,f=e.data.get(o.dataId).values,m=e.data.get(r.dataId).values,g=new Float32Array(h),x=h;for(let b=0;b<x;b++){const y=b%d,w=b-y+Math.max(0,y-a),C=b-y+Math.min(d,y+a+1);let I=0;for(let v=w;v<C;v++)I+=Math.pow(f[v],2);I=c*I+l;for(let v=w;v<C;v++){let N=-2*c*u*f[v]*m[b]/I;b===v&&(N+=Math.pow(I,-u)),N*=p[b],g[v]+=N}}return e.makeTensorInfo(i.shape,o.dtype,g)}const C_={kernelName:Pu,backendName:"cpu",kernelFunc:w_};function U1(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{reductionIndices:r,keepDims:i}=s,a=e;let l=o.shape;const c=l.length,u=Tt(r,l);let h=u;const d=ee(h,c);let p=a.data.get(o.dataId).values;if(d!=null){const w=new Array(c);for(let C=0;C<w.length;C++)w[C]=l[d[C]];p=cp(p,l,o.dtype,d,w),h=ie(h.length,c),l=w}ut(o,"max"),De("max",h,c);const[f,m]=ke(l,h),g=K(m),x=n1(p,g,f,o.dtype),b=a.write(x,f,o.dtype);let y=f;return i&&(y=he(f,u)),{dataId:b,shape:y,dtype:o.dtype}}const $_={kernelName:ja,backendName:"cpu",kernelFunc:U1};function I_(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t;ut(o,"maxPool");const{filterSize:r,strides:i,pad:a,dimRoundingMode:l}=s,c=1;T(ze(i,c),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${c}'`);const u=In(o.shape,r,i,c,a,l);let h;if(u.filterWidth===1&&u.filterHeight===1&&Bt(u.inShape,u.outShape))h=ls({inputs:{x:o},backend:e});else{const d=e.data.get(o.dataId).values,p=ft(o.shape),f=dp(d,o.shape,o.dtype,p,u,"max");h=e.makeTensorInfo(u.outShape,o.dtype,f.values)}return h}const v_={kernelName:Ya,backendName:"cpu",kernelFunc:I_};function k_(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{filterSize:r,strides:i,pad:a,dimRoundingMode:l,dataFormat:c}=s;ut(o,"maxPool3d");const u=fs(o.shape,r,i,1,a,l,c),h=e.data.get(o.dataId).values,d=B1(h,o.shape,o.dtype,ft(o.shape),u,"max");return e.makeTensorInfo(d.shape,"float32",d.values)}const S_={kernelName:Za,backendName:"cpu",kernelFunc:k_};function N_(n){const{inputs:t,backend:e,attrs:s}=n,{dy:o,input:r}=t,{filterSize:i,strides:a,pad:l,dimRoundingMode:c}=s;ut([o,r],"maxPool3DGrad");const u=fs(r.shape,i,a,1,l,c),h=e.bufferSync(r),d=gD(h,u),p=u.strideDepth,f=u.strideHeight,m=u.strideWidth,g=u.dilationDepth,x=u.dilationHeight,b=u.dilationWidth,y=u.effectiveFilterDepth,w=u.effectiveFilterHeight,C=u.effectiveFilterWidth,I=y-1-u.padInfo.front,v=C-1-u.padInfo.left,N=w-1-u.padInfo.top,k=Et(r.shape,"float32"),S=e.bufferSync(o);for(let $=0;$<u.batchSize;++$)for(let E=0;E<u.inChannels;++E)for(let R=0;R<u.inDepth;++R)for(let F=0;F<u.inHeight;++F)for(let A=0;A<u.inWidth;++A){const O=R-I,L=F-N,_=A-v;let V=0;for(let G=0;G<y;G+=g){const q=(O+G)/p;if(!(q<0||q>=u.outDepth||Math.floor(q)!==q))for(let j=0;j<w;j+=x){const Y=(L+j)/f;if(!(Y<0||Y>=u.outHeight||Math.floor(Y)!==Y))for(let J=0;J<C;J+=b){const tt=(_+J)/m;if(tt<0||tt>=u.outWidth||Math.floor(tt)!==tt)continue;const st=y*w*C-1-d.get($,q,Y,tt,E),it=G*w*C+j*C+J,pt=st===it?1:0;if(pt===0)continue;const ht=S.get($,q,Y,tt,E);V+=ht*pt}}}k.set(V,$,R,F,A,E)}return e.makeTensorInfo(k.shape,k.dtype,k.values)}const T_={kernelName:zu,backendName:"cpu",kernelFunc:N_};function E_(n){const{inputs:t,backend:e,attrs:s}=n,{dy:o,input:r,output:i}=t,a=r;ut([r,i],"maxPoolGrad");const{filterSize:l,strides:c,pad:u,dimRoundingMode:h}=s,d=In(a.shape,l,c,1,u,h),p=e.data.get(a.dataId).values,f=Et(d.outShape,a.dtype,P1(p,a.shape,a.dtype,d).values),m=d.strideHeight,g=d.strideWidth,x=d.dilationHeight,b=d.dilationWidth,y=d.effectiveFilterHeight,w=d.effectiveFilterWidth,C=w-1-d.padInfo.left,I=y-1-d.padInfo.top,v=Et(a.shape,"float32"),N=e.data.get(o.dataId).values,k=Et(o.shape,"float32",N);for(let S=0;S<d.batchSize;++S)for(let $=0;$<d.inChannels;++$)for(let E=0;E<d.inHeight;++E)for(let R=0;R<d.inWidth;++R){const F=E-I,A=R-C;let O=0;for(let L=0;L<y;L+=x){const _=(F+L)/m;if(!(_<0||_>=d.outHeight||Math.floor(_)!==_))for(let V=0;V<w;V+=b){const G=(A+V)/g;if(G<0||G>=d.outWidth||Math.floor(G)!==G)continue;const q=y*w-1-f.get(S,_,G,$),j=L*w+V,Y=q===j?1:0;if(Y===0)continue;const J=k.get(S,_,G,$);O+=J*Y}}v.set(O,S,E,R,$)}return e.makeTensorInfo(v.shape,v.dtype,v.values)}const R_={kernelName:Bu,backendName:"cpu",kernelFunc:E_};function A_(n,t,e,s,o){const r=ft(t),i=dp(n,t,e,r,o,"max"),a=P1(n,t,e,o,!0,s);return[i.values,a.values]}const D_={kernelName:of,backendName:"cpu",kernelFunc:({inputs:n,attrs:t,backend:e})=>{const{x:s}=n,{filterSize:o,strides:r,pad:i,includeBatchInIndex:a}=t,l=e;ut(s,"MaxPoolWithArgmax");const c=l.data.get(s.dataId).values,u=In(s.shape,o,r,[1,1],i),[h,d]=A_(c,s.shape,s.dtype,a,u),p=l.write(h,u.outShape,s.dtype),f=l.write(d,u.outShape,s.dtype);return[{dataId:p,shape:u.outShape,dtype:s.dtype},{dataId:f,shape:u.outShape,dtype:"int32"}]}};function F_(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,keepDims:i}=s,a=Tt(r,o.shape),c=ke(o.shape,a)[1],u=K(c),h=[],d=e.makeTensorInfo([],"float32",new Float32Array([u]));h.push(d);const p=Ks({inputs:{x:o},backend:e,attrs:{dtype:"float32"}});h.push(p);const f=pp({inputs:{a:p,b:d},backend:e});h.push(f);const m=ia({inputs:{x:f},backend:e,attrs:{axis:r,keepDims:i}});return h.forEach(g=>e.disposeIntermediateTensorInfo(g)),m}const __={kernelName:Qa,backendName:"cpu",kernelFunc:F_};function O_(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,keepDims:i}=s;ut(o,"min");const a=Tt(r,o.shape);let l=a;const c=ee(l,o.shape.length);let u=o;c!=null&&(u=on({inputs:{x:o},backend:e,attrs:{perm:c}}),l=ie(l.length,o.shape.length)),De("min",l,u.shape.length);const[h,d]=ke(u.shape,l),p=K(d),f=Be(K(h),u.dtype),m=e.data.get(u.dataId).values;for(let x=0;x<f.length;++x){const b=x*p;let y=m[b];for(let w=0;w<p;++w){const C=m[b+w];(Number.isNaN(C)||C<y)&&(y=C)}f[x]=y}c!=null&&e.disposeIntermediateTensorInfo(u);const g=e.makeTensorInfo(h,u.dtype,f);if(i){const x=he(h,a),b=jt({inputs:{x:g},backend:e,attrs:{shape:x}});return e.disposeIntermediateTensorInfo(g),b}return g}const M_={kernelName:Ja,backendName:"cpu",kernelFunc:O_};function L_(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{paddings:r,mode:i}=s;ut(o,"mirrorPad");const a=r.map((y,w)=>y[0]+o.shape[w]+y[1]),l=r.map(y=>y[0]),c=r.map((y,w)=>y[0]+o.shape[w]),u=i==="reflect"?0:1,h=e.data.get(o.dataId).values,d=o.shape.length,p=ft(o.shape),f=K(a),m=a.length,g=ft(a),x=Pe(o.dtype,f);for(let y=0;y<f;y++){let w=Wo(y,m,g);for(let I=0;I<m;I++)w[I]<l[I]?w[I]=l[I]*2-w[I]-u:w[I]>=c[I]&&(w[I]=(c[I]-1)*2-w[I]+u);w=w.map((I,v)=>I-l[v]);const C=jn(w,d,p);x[y]=h[C]}return{dataId:e.write(x,a,o.dtype),shape:a,dtype:o.dtype}}const P_={kernelName:tl,backendName:"cpu",kernelFunc:L_};const B_=ce(((n,t)=>{const e=n%t;return n<0&&t<0||n>=0&&t>=0?e:(e+t)%t})),z_=Ce(oi,B_),V_={kernelName:oi,backendName:"cpu",kernelFunc:z_};function G1(n){const{inputs:t,backend:e,attrs:s}=n,{logits:o}=t,{dim:r}=s,i=o.shape.length;let a=r;if(a===-1&&(a=i-1),a!==i-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${i} and dim was ${a}`);const l=Tt([a],o.shape),c=U1({inputs:{x:o},backend:e,attrs:{reductionIndices:l,keepDims:!1}}),u=he(c.shape,l),h=jt({inputs:{x:c},backend:e,attrs:{shape:u}}),d=hp({inputs:{a:o,b:h},backend:e}),p=G0({inputs:{x:d},backend:e}),f=ia({inputs:{x:p},backend:e,attrs:{axis:l,keepDims:!1}}),m=jt({inputs:{x:f},backend:e,attrs:{shape:u}}),g=pp({inputs:{a:p,b:m},backend:e});return e.disposeIntermediateTensorInfo(c),e.disposeIntermediateTensorInfo(h),e.disposeIntermediateTensorInfo(d),e.disposeIntermediateTensorInfo(p),e.disposeIntermediateTensorInfo(f),e.disposeIntermediateTensorInfo(m),g}const W_={kernelName:bl,backendName:"cpu",kernelFunc:G1};function U_(n){const{inputs:t,backend:e,attrs:s}=n,{logits:o}=t,{numSamples:r,seed:i,normalized:a}=s;ut(o,"multinomial");const l=a?o:G1({inputs:{logits:o},backend:e,attrs:{dim:-1}}),c=l.shape[0],u=l.shape[1],h=e.data.get(l.dataId).values,d=[c,r],p=Be(K(d),"int32");for(let f=0;f<c;++f){const m=f*u,g=new Float32Array(u-1);g[0]=h[m];for(let y=1;y<g.length;++y)g[y]=g[y-1]+h[m+y];const x=Mh.alea(i.toString()),b=f*r;for(let y=0;y<r;++y){const w=x();p[b+y]=g.length;for(let C=0;C<g.length;C++)if(w<g[C]){p[b+y]=C;break}}}return a||e.disposeIntermediateTensorInfo(l),e.makeTensorInfo(d,"int32",p)}const G_={kernelName:rf,backendName:"cpu",kernelFunc:U_};const H_=Xh;function q_(n){const{inputs:t,backend:e,attrs:s}=n,{boxes:o,scores:r}=t,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l}=s;ut(o,"NonMaxSuppression");const c=e.data.get(o.dataId).values,u=e.data.get(r.dataId).values,{selectedIndices:h}=H_(c,u,i,a,l);return e.makeTensorInfo([h.length],"int32",new Int32Array(h))}const X_={kernelName:Vu,backendName:"cpu",kernelFunc:q_};const K_=Kh;function j_(n){const{inputs:t,backend:e,attrs:s}=n,{boxes:o,scores:r}=t,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l,padToMaxOutputSize:c}=s;ut(o,"NonMaxSuppressionPadded");const u=e.data.get(o.dataId).values,h=e.data.get(r.dataId).values,{selectedIndices:d,validOutputs:p}=K_(u,h,i,a,l,c);return[e.makeTensorInfo([d.length],"int32",new Int32Array(d)),e.makeTensorInfo([],"int32",new Int32Array([p]))]}const Y_={kernelName:Wu,backendName:"cpu",kernelFunc:j_};const Z_=jh;function Q_(n){const{inputs:t,backend:e,attrs:s}=n,{boxes:o,scores:r}=t,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l,softNmsSigma:c}=s;ut(o,"NonMaxSuppressionWithScore");const u=e.data.get(o.dataId).values,h=e.data.get(r.dataId).values,d=i,p=a,f=l,m=c,{selectedIndices:g,selectedScores:x}=Z_(u,h,d,p,f,m);return[e.makeTensorInfo([g.length],"int32",new Int32Array(g)),e.makeTensorInfo([x.length],"float32",new Float32Array(x))]}const J_={kernelName:Uu,backendName:"cpu",kernelFunc:Q_};function tO(n){const{inputs:t,backend:e,attrs:s}=n,{indices:o}=t,{dtype:r,depth:i,onValue:a,offValue:l}=s;ut(o,"oneHot");const c=K(o.shape),u=new Float32Array(c*i);u.fill(l);const h=e.data.get(o.dataId).values;for(let d=0;d<c;++d)h[d]>=0&&h[d]<i&&(u[d*i+h[d]]=a);return e.makeTensorInfo([...o.shape,i],r,u)}const eO={kernelName:ol,backendName:"cpu",kernelFunc:tO};function Ec(n){const{inputs:t,backend:e}=n,{x:s}=t;if(s.dtype==="string")throw new Error("zerosLike is not supported for string tensors");if(s.dtype==="complex64"){const o=To({inputs:{input:s},backend:e}),r=Ec({inputs:{x:o},backend:e}),i=cr({inputs:{input:s},backend:e}),a=Ec({inputs:{x:i},backend:e}),l=pn({inputs:{real:r,imag:a},backend:e});return e.disposeIntermediateTensorInfo(o),e.disposeIntermediateTensorInfo(r),e.disposeIntermediateTensorInfo(i),e.disposeIntermediateTensorInfo(a),l}else return gp({backend:e,attrs:{shape:s.shape,value:0,dtype:s.dtype}})}const nO={kernelName:Cl,backendName:"cpu",kernelFunc:Ec};function H1(n){const{inputs:t,backend:e}=n,{x:s}=t;if(s.dtype==="string")throw new Error("onesLike is not supported for string tensors");if(s.dtype==="complex64"){const o=To({inputs:{input:s},backend:e}),r=H1({inputs:{x:o},backend:e}),i=cr({inputs:{input:s},backend:e}),a=Ec({inputs:{x:i},backend:e}),l=pn({inputs:{real:r,imag:a},backend:e});return e.disposeIntermediateTensorInfo(o),e.disposeIntermediateTensorInfo(r),e.disposeIntermediateTensorInfo(i),e.disposeIntermediateTensorInfo(a),l}else return gp({backend:e,attrs:{shape:s.shape,value:1,dtype:s.dtype}})}const sO={kernelName:sl,backendName:"cpu",kernelFunc:H1};function q1(n){const{inputs:t,backend:e,attrs:s}=n,{axis:o}=s;if(t.length===1)return Tc({inputs:{input:t[0]},backend:e,attrs:{dim:o}});const r=t[0].shape,i=t[0].dtype;t.forEach(u=>{su(r,u.shape,"All tensors passed to stack must have matching shapes"),T(i===u.dtype,()=>"All tensors passed to stack must have matching dtypes")});const a=[],l=t.map(u=>{const h=Tc({inputs:{input:u},backend:e,attrs:{dim:o}});return a.push(h),h}),c=ur({inputs:l,backend:e,attrs:{axis:o}});return a.forEach(u=>e.disposeIntermediateTensorInfo(u)),c}const oO={kernelName:rl,backendName:"cpu",kernelFunc:q1};function rO(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{paddings:r,constantValue:i}=s;ut(o,"pad");const a=r.map((b,y)=>b[0]+o.shape[y]+b[1]),l=r.map(b=>b[0]),c=e.data.get(o.dataId).values,u=K(o.shape),h=o.shape.length,d=ft(o.shape),p=K(a),f=a.length,m=ft(a),g=Pe(o.dtype,p);i!==0&&g.fill(i);for(let b=0;b<u;b++){const w=Wo(b,h,d).map((I,v)=>I+l[v]),C=jn(w,f,m);g[C]=c[b]}return{dataId:e.write(g,a,o.dtype),shape:a,dtype:o.dtype}}const X1={kernelName:il,backendName:"cpu",kernelFunc:rO};const iO=ce((n,t)=>Math.pow(n,t)),aO=Ce(ii,iO),lO={kernelName:ii,backendName:"cpu",kernelFunc:aO};function cO(n){const{inputs:t,backend:e,attrs:s}=n,{paramsNestedSplits:o,paramsDenseValues:r,indices:i}=t,{outputRaggedRank:a}=s,l=o.map(x=>e.data.get(x.dataId).values),c=o.map(x=>x.shape),u=e.data.get(r.dataId).values,h=e.data.get(i.dataId).values,[d,p,f]=c1(l,c,u,r.shape,r.dtype,h,i.shape),m=d.map(x=>e.makeTensorInfo([x.length],"int32",x)),g=e.makeTensorInfo(f,r.dtype,p);return m.concat([g])}const uO={kernelName:af,backendName:"cpu",kernelFunc:cO};function hO(n){const{inputs:t,backend:e}=n,{starts:s,limits:o,deltas:r}=t,i=e.data.get(s.dataId).values,a=e.data.get(o.dataId).values,l=e.data.get(r.dataId).values,[c,u]=h1(i,s.shape,s.dtype,a,o.shape,l,r.shape),h=e.makeTensorInfo([c.length],"int32",c),d=e.makeTensorInfo([u.length],s.dtype,u);return[h,d]}const dO={kernelName:lf,backendName:"cpu",kernelFunc:hO};function pO(n){const{inputs:t,backend:e,attrs:s}=n,{shape:o,values:r,defaultValue:i,rowPartitionTensors:a}=t,{rowPartitionTypes:l}=s,c=e.data.get(o.dataId).values,u=e.data.get(r.dataId).values,h=e.data.get(i.dataId).values,d=a.map(g=>e.data.get(g.dataId).values),p=a.map(g=>g.shape),[f,m]=f1(c,o.shape,u,r.shape,r.dtype,h,i.shape,d,p,l);return e.makeTensorInfo(f,r.dtype,m)}const fO={kernelName:cf,backendName:"cpu",kernelFunc:pO};function mO(n){const{backend:t,attrs:e}=n,{start:s,stop:o,dtype:r,step:i}=e,a=m1(s,o,i,r);return t.makeTensorInfo([a.length],r,a)}const gO={kernelName:Gu,backendName:"cpu",kernelFunc:mO};const xO=Ut(ai,n=>1/n),bO={kernelName:ai,backendName:"cpu",kernelFunc:xO};function yO(n){const{inputs:t,backend:e,attrs:s}=n,{images:o}=t,{alignCorners:r,halfPixelCenters:i,size:a}=s;ut(o,"resizeBilinear");const l=ft(o.shape),[c,u]=a,[h,d,p,f]=o.shape,m=e.data.get(o.dataId).values,g=new Float32Array(K([h,c,u,f])),x=[r&&c>1?d-1:d,r&&u>1?p-1:p],b=[r&&c>1?c-1:c,r&&u>1?u-1:u];let y=0;const w=x[0]/b[0],C=x[1]/b[1];for(let I=0;I<h;I++)for(let v=0;v<c;v++){let N;i?N=w*(v+.5)-.5:N=w*v;const k=Math.max(0,Math.floor(N)),S=N-k,$=Math.min(d-1,Math.ceil(N)),E=I*l[0]+k*l[1],R=I*l[0]+$*l[1];for(let F=0;F<u;F++){let A;i?A=C*(F+.5)-.5:A=C*F;const O=Math.max(0,Math.floor(A)),L=A-O,_=Math.min(p-1,Math.ceil(A)),V=E+O*l[2],G=R+O*l[2],q=E+_*l[2],j=R+_*l[2];for(let Y=0;Y<f;Y++){const J=m[V+Y],tt=m[G+Y],st=m[q+Y],it=m[j+Y],pt=J+(st-J)*L,ht=tt+(it-tt)*L,xt=pt+(ht-pt)*S;g[y++]=xt}}}return e.makeTensorInfo([h,c,u,f],"float32",g)}const wO={kernelName:hl,backendName:"cpu",kernelFunc:yO};function CO(n){const{inputs:t,backend:e,attrs:s}=n,{images:o,dy:r}=t,{alignCorners:i}=s;ut([r,o],"resizeBilinearGrad");const a=ft(o.shape),[l,c,u,h]=o.shape,[,d,p]=r.shape,f=new Float32Array(l*c*u*h),m=[i&&d>1?c-1:c,i&&p>1?u-1:u],g=[i&&d>1?d-1:d,i&&p>1?p-1:p],x=m[0]/g[0],b=m[1]/g[1],y=e.data.get(r.dataId).values;let w=0;for(let C=0;C<l;C++){const I=C*a[0];for(let v=0;v<d;v++){const N=v*x,k=Math.floor(N),S=Math.min(Math.ceil(N),c-1),$=I+k*a[1],E=I+S*a[1],R=N-k,F=1-R;for(let A=0;A<p;A++){const O=A*b,L=Math.floor(O),_=Math.min(Math.ceil(O),u-1),V=O-L,G=1-V,q=$+L*a[2],j=$+_*a[2],Y=E+L*a[2],J=E+_*a[2],tt=F*G,st=F*V,it=R*G,pt=R*V;for(let ht=0;ht<h;ht++){const xt=y[w++];f[q+ht]+=xt*tt,f[j+ht]+=xt*st,f[Y+ht]+=xt*it,f[J+ht]+=xt*pt}}}}return e.makeTensorInfo([l,u,c,h],"float32",f)}const $O={kernelName:Xu,backendName:"cpu",kernelFunc:CO};function IO(n){const{inputs:t,backend:e,attrs:s}=n,{images:o}=t,{alignCorners:r,halfPixelCenters:i,size:a}=s;ut(o,"resizeNearestNeighbor");const l=ft(o.shape),[c,u]=a,[h,d,p,f]=o.shape,m=e.data.get(o.dataId).values,g=new Float32Array(h*c*u*f),x=[r&&c>1?d-1:d,r&&u>1?p-1:p],b=[r&&c>1?c-1:c,r&&u>1?u-1:u],y=x[0]/b[0],w=x[1]/b[1];let C=0;for(let I=0;I<h;I++){const v=I*l[0];for(let N=0;N<c;N++){const k=i?y*(N+.5):y*N;let S=Math.min(d-1,r?Math.round(k):Math.floor(k));i&&(S=Math.max(0,S));const $=v+S*l[1];for(let E=0;E<u;E++){const R=i?w*(E+.5):w*E;let F=Math.min(p-1,r?Math.round(R):Math.floor(R));i&&(F=Math.max(0,F));const A=$+F*l[2];for(let O=0;O<f;O++){const L=m[A+O];g[C++]=L}}}}return e.makeTensorInfo([h,c,u,f],o.dtype,g)}const vO={kernelName:ul,backendName:"cpu",kernelFunc:IO};function kO(n){const{inputs:t,backend:e,attrs:s}=n,{images:o,dy:r}=t,{alignCorners:i}=s;ut([r,o],"resizeNearestNeighborGrad");const a=ft(o.shape),l=ft(r.shape),[c,u,h,d]=o.shape,[,p,f]=r.shape,m=new Float32Array(c*u*h*d),g=e.data.get(r.dataId).values,x=[i&&p>1?u-1:u,i&&f>1?h-1:h],b=[i&&p>1?p-1:p,i&&f>1?f-1:f],y=x[0]/b[0],w=x[1]/b[1],C=1/y,I=1/w,v=Math.ceil(C)*2+2,N=Math.ceil(I)*2+2;for(let k=0;k<c;k++){const S=k*a[0];for(let $=0;$<u;$++){const E=S+$*a[1],R=Math.floor($*C),F=Math.floor(R-v/2);for(let A=0;A<h;A++){const O=E+A*a[2],L=Math.floor(A*I),_=Math.floor(L-N/2);for(let V=0;V<d;V++){let G=0;for(let q=0;q<v;q++){const j=q+F;if(j<0||j>=p)continue;const Y=S+j*l[1],J=j*y,tt=Math.min(u-1,i?Math.round(J):Math.floor(J));if($===tt)for(let st=0;st<N;st++){const it=st+_;if(it<0||it>=f)continue;const pt=Y+it*l[2],ht=it*w,xt=Math.min(h-1,i?Math.round(ht):Math.floor(ht));A===xt&&(G+=g[pt+V])}}m[O+V]=G}}}}return e.makeTensorInfo(o.shape,o.dtype,m)}const SO={kernelName:qu,backendName:"cpu",kernelFunc:kO};function NO(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{dims:r}=s;ut(o,"reverse");const i=o.shape.length,a=Tt(r,o.shape);if(i===0)return ls({inputs:{x:o},backend:e});const l=new Re(o.shape,o.dtype),c=e.bufferSync(o);for(let u=0;u<l.size;u++){const h=l.indexToLoc(u),d=h.slice();a.forEach(p=>d[p]=o.shape[p]-1-d[p]),l.set(c.get(...d),...h)}return e.makeTensorInfo(l.shape,l.dtype,l.values)}const TO={kernelName:dl,backendName:"cpu",kernelFunc:NO};const EO={kernelName:th,backendName:"cpu",kernelFunc:({inputs:n,attrs:t,backend:e})=>{const{image:s}=n,{radians:o,fillValue:r,center:i}=t,a=e,l=Pe(s.dtype,K(s.shape)),[c,u,h,d]=s.shape,[p,f]=od(i,u,h),m=255,g=Math.sin(o),x=Math.cos(o),b=a.data.get(s.dataId).values;for(let w=0;w<c;w++){const C=w*h*u*d;for(let I=0;I<u;I++){const v=I*(h*d);for(let N=0;N<h;N++){const k=N*d;for(let S=0;S<d;S++){const $=[c,I,N,S],E=$[2],R=$[1];let F=(E-p)*x-(R-f)*g,A=(E-p)*g+(R-f)*x;F=Math.round(F+p),A=Math.round(A+f);let O=r;if(typeof r!="number"&&(S===3?O=m:O=r[S]),F>=0&&F<h&&A>=0&&A<u){const _=A*(h*d),V=F*d,G=C+_+V+S;O=b[G]}const L=C+v+k+S;l[L]=O}}}}return{dataId:a.write(l,s.shape,s.dtype),shape:s.shape,dtype:s.dtype}}};const RO=Ut(ui,n=>{const t=Math.floor(n);return n-t<.5?Math.floor(n):n-t>.5?Math.ceil(n):t%2===0?t:t+1}),AO={kernelName:ui,backendName:"cpu",kernelFunc:RO};function DO(n){const{inputs:t,backend:e,attrs:s}=n,{indices:o,updates:r}=t,{shape:i}=s,{sliceRank:a,numUpdates:l,sliceSize:c,strides:u,outputSize:h}=bo(r,o,i),d=!0,p=e.bufferSync(o),f=e.bufferSync(r),m=Eo(p,f,i,h,c,l,a,u,0,d);return e.makeTensorInfo(i,m.dtype,m.values)}const FO={kernelName:uf,backendName:"cpu",kernelFunc:DO};function _O(n,t){let e=0,s=n.length,o=0;for(;e<s;)o=Math.floor((e+s)/2),n[o]<t?e=o+1:s=o;return s}function OO(n,t){let e=0,s=n.length,o=0;for(;e<s;)o=Math.floor((e+s)/2),n[o]<=t?e=o+1:s=o;return s}function MO(n,t,e,s,o,r){const i=oe("int32",e*o);for(let a=0;a<e;++a){const l=n.slice(a*s,(a+1)*s),c=a*o;for(let u=0;u<o;++u)i[c+u]=r==="left"?_O(l,t[u+c]):OO(l,t[u+c])}return i}function LO(n){const{inputs:t,backend:e,attrs:s}=n,{sortedSequence:o,values:r}=t,{side:i}=s,a=e.data.get(o.dataId).values,l=e.data.get(r.dataId).values,c=MO(a,l,o.shape[0],o.shape[1],r.shape[1],i);return e.makeTensorInfo(r.shape,"int32",c)}const PO={kernelName:df,backendName:"cpu",kernelFunc:LO};function BO(n){const{inputs:t,backend:e}=n,{condition:s,t:o,e:r}=t;ut([s,o,r],"select");const i=s.shape.length,a=e.data.get(s.dataId).values,l=e.data.get(o.dataId).values,c=e.data.get(r.dataId).values,u=cn(o.dtype,r.dtype),h=Be(K(o.shape),u);let d=0;const p=i===0||i>1||o.shape.length===1?1:K(o.shape.slice(1));for(let f=0;f<a.length;f++)for(let m=0;m<p;m++)a[f]===1?h[d++]=l[f]:h[d++]=c[f];return e.makeTensorInfo(o.shape,u,h)}const zO={kernelName:pl,backendName:"cpu",kernelFunc:BO};const VO=Ql,WO=Jl,UO=Ut(di,n=>n>=0?WO*n:VO*(Math.exp(n)-1)),GO={kernelName:di,backendName:"cpu",kernelFunc:UO};const HO=Ut(mi,n=>n<0?-1:n>0?1:0),qO={kernelName:mi,backendName:"cpu",kernelFunc:HO};const XO=Ut(pi,n=>Math.sin(n)),KO={kernelName:pi,backendName:"cpu",kernelFunc:XO};const jO=Ut(fi,n=>Math.sinh(n)),YO={kernelName:fi,backendName:"cpu",kernelFunc:jO};const K1=Math.log(11920928955078125e-23)+2,ZO=Ut(xi,n=>{const t=n>-K1,e=n<K1,s=Math.exp(n);let o;return e?o=s:t?o=n:o=Math.log(1+s),o}),QO={kernelName:xi,backendName:"cpu",kernelFunc:ZO};function JO(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{blockShape:r,paddings:i}=s;ut([o],"spaceToBatchND");const a=K(r),l=[[0,0]];l.push(...i);for(let I=1+r.length;I<o.shape.length;++I)l.push([0,0]);const c=X1.kernelFunc({inputs:{x:o},backend:e,attrs:{paddings:l,constantValue:0}}),u=zi(c.shape,r,a,!1),h=Vi(u.length,r.length,!1),d=Wi(c.shape,r,a,!1),m=jt({inputs:{x:c},backend:e,attrs:{shape:u}}),b=on({inputs:{x:m},backend:e,attrs:{perm:h}}),C=jt({inputs:{x:b},backend:e,attrs:{shape:d}});return e.disposeIntermediateTensorInfo(c),e.disposeIntermediateTensorInfo(m),e.disposeIntermediateTensorInfo(b),C}const tM={kernelName:gl,backendName:"cpu",kernelFunc:JO};function eM(n){const{inputs:t,backend:e}=n,{indices:s,values:o,denseShape:r,defaultValue:i}=t;if(r.shape.length!==1)throw new Error(`Dense shape must be a vector, saw:
        ${r.shape}`);if(s.shape.length!==2)throw new Error(`Indices must be a matrix, saw:
        ${s.shape}`);if(o.shape.length!==1)throw new Error(`Values must be a vector, saw:
        ${o.shape}`);if(i.shape.length!==0)throw new Error(`Default value must be a scalar, saw:
        ${i.shape}`);const a=e.data.get(s.dataId).values,l=e.data.get(o.dataId).values,c=e.data.get(r.dataId).values,u=e.data.get(i.dataId).values[0],[h,d,p,f,m]=y1(a,s.shape,s.dtype,l,o.dtype,c,u);return[e.makeTensorInfo(d,s.dtype,h),e.makeTensorInfo([d[0]],o.dtype,p),e.makeTensorInfo([f.length],"bool",new Uint8Array(f.map(g=>Number(g)))),e.makeTensorInfo([m.length],s.dtype,new Int32Array(m))]}const nM={kernelName:pf,backendName:"cpu",kernelFunc:eM};function sM(n){const{inputs:t,backend:e}=n,{inputIndices:s,inputShape:o,newShape:r}=t;if(s.shape.length!==2)throw new Error(`Input indices should be a matrix but received shape
        ${s.shape}`);if(o.shape.length!==1)throw new Error(`Input shape should be a vector but received shape
        ${o.shape}`);if(r.shape.length!==1)throw new Error(`Target shape should be a vector but received shape ${r.shape}`);const i=Array.from(e.data.get(o.dataId).values),a=e.data.get(s.dataId).values,l=Array.from(e.data.get(r.dataId).values),[c,u,h]=w1(a,s.shape,s.dtype,i,l);return[e.makeTensorInfo(u,s.dtype,c),e.makeTensorInfo([h.length],r.dtype,new Int32Array(h))]}const oM={kernelName:ff,backendName:"cpu",kernelFunc:sM};function rM(n){const{inputs:t,backend:e}=n,{data:s,indices:o,segmentIds:r}=t;if(s.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(o.shape.length!==1)throw new Error(`Indices should be a vector but received shape
          ${o.shape}`);if(r.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
          ${r.shape}`);if(o.shape[0]!==r.shape[0])throw new Error("segmentIds and indices should have same size.");const i=e.data.get(s.dataId).values,a=e.data.get(o.dataId).values,l=e.data.get(r.dataId).values,[c,u]=up(i,s.shape,s.dtype,a,l,!0);return e.makeTensorInfo(u,s.dtype,c)}const iM={kernelName:mf,backendName:"cpu",kernelFunc:rM};function aM(n){const{inputs:t,backend:e}=n,{data:s,indices:o,segmentIds:r}=t;if(s.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(o.shape.length!==1)throw new Error(`Indices should be a vector but received shape
         ${o.shape}`);if(r.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
         ${r.shape}`);if(o.shape[0]!==r.shape[0])throw new Error("segmentIds and indices should have same size.");const i=e.data.get(s.dataId).values,a=e.data.get(o.dataId).values,l=e.data.get(r.dataId).values,[c,u]=up(i,s.shape,s.dtype,a,l);return e.makeTensorInfo(u,s.dtype,c)}const lM={kernelName:gf,backendName:"cpu",kernelFunc:aM};function cM(n){const{inputs:t,backend:e,attrs:s}=n,{sparseIndices:o,sparseValues:r,defaultValue:i}=t,{outputShape:a}=s,{sliceRank:l,numUpdates:c,sliceSize:u,strides:h,outputSize:d}=bo(r,o,a),p=!1,f=e.bufferSync(o);let m;switch(r.dtype){case"bool":{const g=e.bufferSync(r),x=!!e.data.get(i.dataId).values[0];m=Eo(f,g,a,d,u,c,l,h,x,p);break}case"float32":{const g=e.bufferSync(r),x=e.data.get(i.dataId).values[0];m=Eo(f,g,a,d,u,c,l,h,x,p);break}case"int32":{const g=e.bufferSync(r),x=e.data.get(i.dataId).values[0];m=Eo(f,g,a,d,u,c,l,h,x,p);break}case"string":{const g=e.bufferSync(r),x=Ds(e.data.get(i.dataId).values[0]);m=Eo(f,g,a,d,u,c,l,h,x,p);break}default:throw new Error(`Unsupported type ${r.dtype}`)}return e.makeTensorInfo(a,m.dtype,m.values)}const uM={kernelName:xf,backendName:"cpu",kernelFunc:cM};function hM(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{numOrSizeSplits:r,axis:i}=s,a=Tt(i,o.shape)[0],l=wd(o,r,a),c=new Array(o.shape.length).fill(0),u=o.shape.slice();return l.map(h=>{const d=[...u];d[a]=h;const p=Ro({inputs:{x:o},backend:e,attrs:{begin:c,size:d}});return c[a]+=h,p})}const dM={kernelName:xl,backendName:"cpu",kernelFunc:hM};const pM={kernelName:Ku,backendName:"cpu",kernelFunc:({inputs:n,backend:t})=>{const{x:e}=n,s=t;ut(e,"square");const o=s.data.get(e.dataId).values,r=new Float32Array(o.length);for(let a=0;a<o.length;++a){const l=o[a];r[a]=l*l}return{dataId:s.write(r,e.shape,e.dtype),shape:e.shape,dtype:e.dtype}}};const fM=Ut(vi,(n,t)=>{const e=t;return isNaN(n)?NaN:n>0?1:e.alpha}),mM={kernelName:vi,backendName:"cpu",kernelFunc:fM};function gM(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{begin:r,end:i,strides:a,beginMask:l,endMask:c,ellipsisMask:u,newAxisMask:h,shrinkAxisMask:d}=s;ut(o,"stridedSlice");const{finalShapeSparse:p,finalShape:f,isIdentity:m,sliceDim0:g,isSimpleSlice:x,begin:b,end:y,strides:w}=dg(o.shape,r,i,a,l,c,u,h,d);let C;if(m)C=jt({inputs:{x:o},backend:e,attrs:{shape:f}});else if(g||x){T(o.shape.length>=1,()=>`Input must have rank at least 1, got: ${o.shape.length}`);const I=cg(b,y,w),v=Ro({inputs:{x:o},backend:e,attrs:{begin:b,size:I}});C=jt({inputs:{x:v},backend:e,attrs:{shape:f}}),e.disposeIntermediateTensorInfo(v)}else{const I=e.bufferSync(o),v=I1(p,I,w,b);C=e.makeTensorInfo(f,v.dtype,v.values)}return C}const xM={kernelName:Yu,backendName:"cpu",kernelFunc:gM};function bM(n){const{inputs:t,backend:e,attrs:s}=n,{separator:o,nGramWidths:r,leftPad:i,rightPad:a,padWidth:l,preserveShortSequences:c}=s,{data:u,dataSplits:h}=t,d=e.data.get(u.dataId).values,p=e.data.get(h.dataId).values,[f,m]=v1(d,p,o,r,i,a,l,c);return[e.makeTensorInfo([f.length],"string",f),e.makeTensorInfo(h.shape,"int32",m)]}const yM={kernelName:bf,backendName:"cpu",kernelFunc:bM};function wM(n){const{inputs:t,backend:e,attrs:s}=n,{skipEmpty:o}=s,{input:r,delimiter:i}=t;if(r.dtype!=="string")throw new Error("Input must be of datatype string");if(r.shape.length!==1)throw new Error(`Input must be a vector, got shape: ${r.shape}`);if(i.shape.length!==0)throw new Error(`Delimiter must be a scalar, got shape: ${i.shape}`);const a=e.data.get(r.dataId).values,l=e.data.get(i.dataId).values[0],[c,u,h]=k1(a,l,o),d=u.length;return[e.makeTensorInfo([d,2],"int32",c),e.makeTensorInfo([d],"string",u),e.makeTensorInfo([2],"int32",new Int32Array(h))]}const CM={kernelName:yf,backendName:"cpu",kernelFunc:wM};function $M(n){const{inputs:t,backend:e,attrs:s}=n,{numBuckets:o}=s,{input:r}=t;if(r.dtype!=="string")throw new Error("Input must be of datatype string");if(o<=0)throw new Error("Number of buckets must be at least 1");const i=e.data.get(r.dataId).values,a=S1(i,o);return e.makeTensorInfo(r.shape,"int32",a)}const IM={kernelName:wf,backendName:"cpu",kernelFunc:$M};const vM=Ut(Ci,n=>Math.tan(n)),kM={kernelName:Ci,backendName:"cpu",kernelFunc:vM};const SM=Ut($i,n=>Math.tanh(n)),NM={kernelName:$i,backendName:"cpu",kernelFunc:SM};function TM(n){const{inputs:t,backend:e}=n,{tensor:s,indices:o,updates:r}=t,{sliceRank:i,numUpdates:a,sliceSize:l,strides:c,outputSize:u}=bo(r,o,s.shape),h=!1,d=e.bufferSync(o),p=e.bufferSync(r),f=e.bufferSync(s),m=Eo(d,p,s.shape,u,l,a,i,c,f,h);return e.makeTensorInfo(s.shape,m.dtype,m.values)}const EM={kernelName:hf,backendName:"cpu",kernelFunc:TM};function RM(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{reps:r}=s;ut(o,"tile");const i=T1(e.bufferSync(o),r);return e.makeTensorInfo(i.shape,i.dtype,i.values)}const AM={kernelName:Ii,backendName:"cpu",kernelFunc:RM};function DM(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{k:r,sorted:i}=s;ut(o,"topk");const a=e.data.get(o.dataId).values,[l,c]=R1(a,o.shape,o.dtype,r,i);return[e.makeTensorInfo(l.shape,l.dtype,l.values),e.makeTensorInfo(c.shape,c.dtype,c.values)]}const FM={kernelName:Zu,backendName:"cpu",kernelFunc:DM};function _M(n){const{inputs:t,attrs:e,backend:s}=n,{image:o,transforms:r}=t,{interpolation:i,fillMode:a,fillValue:l,outputShape:c}=e,[u,h,d,p]=o.shape,[f,m]=c!=null?c:[h,d],g=[u,f,m,p],x=ft(o.shape),b=x[0],y=x[1],w=x[2],C=ft(g),I=C[0],v=C[1],N=C[2],k=Pe(o.dtype,K(g));k.fill(l);const S=s.data.get(o.dataId).values,$=s.data.get(r.dataId).values;for(let R=0;R<u;++R){const F=r.shape[0]===1?$:$.subarray(R*8,R*8+8);for(let A=0;A<f;++A)for(let O=0;O<m;++O)for(let L=0;L<p;++L){let _;const V=F[6]*O+F[7]*A+1;if(V===0)continue;const G=(F[0]*O+F[1]*A+F[2])/V,q=(F[3]*O+F[4]*A+F[5])/V,j=j1(G,d,a),Y=j1(q,h,a);switch(i){case"nearest":_=zM(S,h,d,b,y,w,R,Y,j,L,l);break;case"bilinear":_=VM(S,h,d,b,y,w,R,Y,j,L,l);break;default:throw new Error(`Error in Transform: Expect 'nearest' or 'bilinear', but got ${i}`)}const J=R*I+A*v+O*N+L;k[J]=_}return s.makeTensorInfo(g,o.dtype,k)}return{dataId:s.write(k,g,o.dtype),shape:o.shape,dtype:o.dtype}}const OM={kernelName:Qu,backendName:"cpu",kernelFunc:_M};function j1(n,t,e){switch(e){case"reflect":return MM(n,t);case"wrap":return LM(n,t);case"nearest":return BM(n,t);default:return PM(n)}}function MM(n,t){let e=n;if(e<0)if(t<=1)e=0;else{const s=2*t;e<s&&(e=s*Math.trunc(-e/s)+e),e=e<-t?e+s:-e-1}else if(e>t-1)if(t<=1)e=0;else{const s=2*t;e-=s*Math.trunc(e/s),e>=t&&(e=s-e-1)}return eo(0,e,t-1)}function LM(n,t){let e=n;if(e<0)if(t<=1)e=0;else{const s=t-1;e+=t*(Math.trunc(-e/s)+1)}else if(e>t-1)if(t<=1)e=0;else{const s=t-1;e-=t*Math.trunc(e/s)}return eo(0,e,t-1)}function PM(n,t){return n}function BM(n,t){return eo(0,n,t-1)}function aa(n,t,e,s,o,r,i,a,l,c,u){const h=i*s+a*o+l*r+c;return 0<=a&&a<t&&0<=l&&l<e?n[h]:u}function zM(n,t,e,s,o,r,i,a,l,c,u){const h=Math.round(a),d=Math.round(l);return aa(n,t,e,s,o,r,i,h,d,c,u)}function VM(n,t,e,s,o,r,i,a,l,c,u){const h=Math.floor(a),d=Math.floor(l),p=h+1,f=d+1,m=(f-l)*aa(n,t,e,s,o,r,i,h,d,c,u)+(l-d)*aa(n,t,e,s,o,r,i,h,f,c,u),g=(f-l)*aa(n,t,e,s,o,r,i,p,d,c,u)+(l-d)*aa(n,t,e,s,o,r,i,p,f,c,u);return(p-a)*m+(a-h)*g}function WM(n){const{inputs:t,attrs:e,backend:s}=n,{axis:o}=e,{x:r}=t;ut(r,"unique");const i=s.data.get(r.dataId).values,{outputValues:a,outputShape:l,indices:c}=A1(i,o,r.shape,r.dtype);return[s.makeTensorInfo(l,r.dtype,a),s.makeTensorInfo([c.length],"int32",c)]}const UM={kernelName:Ju,backendName:"cpu",kernelFunc:WM};function GM(n){const{inputs:t,backend:e,attrs:s}=n,{value:o}=t;let{axis:r}=s;r<0&&(r+=o.shape.length);const i=o.shape.length,a=o.shape[r],l=new Array(i-1);let c=0;for(let p=0;p<i;p++)p!==r&&(l[c++]=o.shape[p]);const u=new Array(i).fill(0),h=o.shape.slice();h[r]=1;const d=new Array(a);for(let p=0;p<d.length;p++){u[r]=p;const f=Ro({inputs:{x:o},backend:e,attrs:{begin:u,size:h}});d[p]=jt({inputs:{x:f},backend:e,attrs:{shape:l}}),e.disposeIntermediateTensorInfo(f)}return d}const HM={kernelName:yl,backendName:"cpu",kernelFunc:GM};function qM(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,segmentIds:r}=t,{numSegments:i}=s;ut(o,"unsortedSegmentSum");const a=o.shape.length,l=r.shape.length,c=[],u=[],h=a-l;let d=r;for(let f=0;f<h;++f){const m=Tc({inputs:{input:d},backend:e,attrs:{dim:f+1}});d=m,u.push(m)}for(let f=0;f<i;++f){const m=Rs(f,"int32"),g=e.makeTensorInfo([],"int32",m),x=W0({inputs:{a:g,b:d},backend:e}),b=Ks({inputs:{x},backend:e,attrs:{dtype:"float32"}}),y=kc({inputs:{a:b,b:o},backend:e}),w=ia({inputs:{x:y},backend:e,attrs:{axis:0,keepDims:!1}});c.push(w),u.push(g),u.push(x),u.push(b),u.push(y),u.push(w)}const p=q1({inputs:c,backend:e,attrs:{axis:0}});return u.forEach(f=>e.disposeIntermediateTensorInfo(f)),p}const XM={kernelName:wl,backendName:"cpu",kernelFunc:qM};const KM=[GA,vR,qA,KA,RR,YA,QA,tD,nD,oD,iD,lD,uD,pD,mD,bD,wD,$D,vD,WA,SD,TD,RD,DR,DD,TR,_R,_D,kR,OD,LD,PD,zD,WD,GD,qD,KD,YD,QD,tF,nF,oF,iF,lF,cF,hF,pF,mF,gF,xF,bF,wF,IF,OA,kF,OR,FF,MR,_F,PR,zF,VF,UF,zR,WR,HF,XF,jF,ZF,GR,qR,SR,JF,MD,e_,s_,r_,MA,KR,YR,a_,QR,c_,d_,f_,x_,y_,C_,$_,tA,v_,S_,T_,R_,D_,__,M_,nA,P_,V_,G_,oA,iA,X_,Y_,J_,lA,eO,sO,oO,X1,lO,PA,hA,uO,dO,fO,gO,NR,fp,bO,BA,zA,VA,wO,$O,vO,SO,TO,EO,AO,yA,FO,PO,zO,GO,CA,qO,KO,YO,$A,W_,QO,tM,nM,oM,iM,lM,uM,dM,kA,pM,NA,EA,mM,xM,yM,CM,IM,FA,CF,kM,NM,EM,AM,FM,OM,cA,UM,HM,XM,nO];for(const n of KM)kf(n);const Ao={},Rc={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function jM(n,t){Ao[n]=t}function Xn(n,t){if(!(n in Ao)||t!=null){const s=ZM(n,t);if(s!==null)Ao[n]=s;else return console.log("Could not get context for WebGL version",n),null}const e=Ao[n];return e==null||e.isContextLost()?(delete Ao[n],Xn(n)):(e.disable(e.DEPTH_TEST),e.disable(e.STENCIL_TEST),e.disable(e.BLEND),e.disable(e.DITHER),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SAMPLE_COVERAGE),e.enable(e.SCISSOR_TEST),e.enable(e.CULL_FACE),e.cullFace(e.BACK),Ao[n])}function YM(n){if(!H().getBool("IS_SAFARI")&&typeof OffscreenCanvas!="undefined"&&n===2)return new OffscreenCanvas(300,150);if(typeof document!="undefined")return document.createElement("canvas");throw new Error("Cannot create a canvas in this context")}function ZM(n,t){if(n!==1&&n!==2)throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");const e=t==null?YM(n):t;return e.addEventListener("webglcontextlost",s=>{s.preventDefault(),delete Ao[n]},!1),H().getBool("SOFTWARE_WEBGL_ENABLED")&&(Rc.failIfMajorPerformanceCaveat=!1),n===1?e.getContext("webgl",Rc)||e.getContext("experimental-webgl",Rc):e.getContext("webgl2",Rc)}var la;(function(n){n[n.DENSE=0]="DENSE",n[n.SHARED_BATCH=1]="SHARED_BATCH"})(la||(la={}));var Cn;(function(n){n[n.RENDER=0]="RENDER",n[n.UPLOAD=1]="UPLOAD",n[n.PIXELS=2]="PIXELS",n[n.DOWNLOAD=3]="DOWNLOAD"})(Cn||(Cn={}));var Fe;(function(n){n[n.UNPACKED_FLOAT16=0]="UNPACKED_FLOAT16",n[n.UNPACKED_FLOAT32=1]="UNPACKED_FLOAT32",n[n.PACKED_4X1_UNSIGNED_BYTE=2]="PACKED_4X1_UNSIGNED_BYTE",n[n.PACKED_2X2_FLOAT32=3]="PACKED_2X2_FLOAT32",n[n.PACKED_2X2_FLOAT16=4]="PACKED_2X2_FLOAT16"})(Fe||(Fe={}));function ca(n,t){return[t,n]}function QM(n,t){return n*t}function Ac(n){const t=K(n),e=Math.ceil(t/4);return ou(e)}function hr(n,t){return[Math.max(1,Math.ceil(t/2)),Math.max(1,Math.ceil(n/2))]}function JM(n,t){const[e,s]=hr(n,t);return e*s*4}function xp(n,t){const e=n;let s,o,r,i,a,l,c,u,h,d;return H().getNumber("WEBGL_VERSION")===2?(s=e.R32F,o=e.R16F,r=e.RGBA16F,i=e.RGBA32F,a=e.RED,c=4,u=1,h=e.HALF_FLOAT,d=e.FLOAT,l=e.RGBA8):(s=n.RGBA,o=n.RGBA,r=n.RGBA,i=e.RGBA,a=n.RGBA,c=4,u=4,h=t!=null?t.HALF_FLOAT_OES:null,d=n.FLOAT,l=n.RGBA),{internalFormatFloat:s,internalFormatHalfFloat:o,internalFormatPackedHalfFloat:r,internalFormatPackedFloat:i,textureFormatFloat:a,downloadTextureFormat:l,downloadUnpackNumChannels:c,defaultNumChannels:u,textureTypeHalfFloat:h,textureTypeFloat:d}}function lt(n,t){const e=t();return H().getBool("DEBUG")&&tL(n),e}function tL(n){const t=n.getError();if(t!==n.NO_ERROR)throw new Error("WebGL Error: "+oL(n,t))}const eL=596e-10,nL=65504;function sL(n){return!!(H().getBool("WEBGL_RENDER_FLOAT32_ENABLED")||n===0||eL<Math.abs(n)&&Math.abs(n)<nL)}function oL(n,t){switch(t){case n.NO_ERROR:return"NO_ERROR";case n.INVALID_ENUM:return"INVALID_ENUM";case n.INVALID_VALUE:return"INVALID_VALUE";case n.INVALID_OPERATION:return"INVALID_OPERATION";case n.INVALID_FRAMEBUFFER_OPERATION:return"INVALID_FRAMEBUFFER_OPERATION";case n.OUT_OF_MEMORY:return"OUT_OF_MEMORY";case n.CONTEXT_LOST_WEBGL:return"CONTEXT_LOST_WEBGL";default:return`Unknown error code ${t}`}}function Dc(n,t){return Is(n,()=>n.getExtension(t),'Extension "'+t+'" not supported on this browser.')}function rL(n,t){const e=Is(n,()=>n.createShader(n.VERTEX_SHADER),"Unable to create vertex WebGLShader.");if(lt(n,()=>n.shaderSource(e,t)),lt(n,()=>n.compileShader(e)),n.getShaderParameter(e,n.COMPILE_STATUS)===!1)throw console.log(n.getShaderInfoLog(e)),new Error("Failed to compile vertex shader.");return e}function iL(n,t){const e=Is(n,()=>n.createShader(n.FRAGMENT_SHADER),"Unable to create fragment WebGLShader.");if(lt(n,()=>n.shaderSource(e,t)),lt(n,()=>n.compileShader(e)),H().get("ENGINE_COMPILE_ONLY"))return e;if(n.getShaderParameter(e,n.COMPILE_STATUS)===!1)throw Y1(t,n.getShaderInfoLog(e)),new Error("Failed to compile fragment shader.");return e}const aL=/ERROR: [0-9]+:([0-9]+):/g;function Y1(n,t){const e=aL.exec(t);if(e==null){console.log(`Couldn't parse line number in error: ${t}`),console.log(n);return}const s=+e[1],o=n.split(`
`),r=o.length.toString().length+2,i=o.map((h,d)=>zo((d+1).toString(),r)+h);let a=0;for(let h=0;h<i.length;h++)a=Math.max(i[h].length,a);const l=i.slice(0,s-1),c=i.slice(s-1,s),u=i.slice(s);console.log(l.join(`
`)),console.log(t.split(`
`)[0]),console.log(`%c ${zo(c[0],a)}`,"border:1px solid red; background-color:#e3d2d2; color:#a61717"),console.log(u.join(`
`))}function lL(n){return Is(n,()=>n.createProgram(),"Unable to create WebGLProgram.")}function cL(n,t){if(lt(n,()=>n.linkProgram(t)),!H().get("ENGINE_COMPILE_ONLY")&&n.getProgramParameter(t,n.LINK_STATUS)===!1)throw console.log(n.getProgramInfoLog(t)),new Error("Failed to link vertex and fragment shaders.")}function bp(n,t){if(lt(n,()=>n.validateProgram(t)),n.getProgramParameter(t,n.VALIDATE_STATUS)===!1)throw console.log(n.getProgramInfoLog(t)),new Error("Shader program validation failed.")}function uL(n,t){const e=Is(n,()=>n.createBuffer(),"Unable to create WebGLBuffer");return lt(n,()=>n.bindBuffer(n.ARRAY_BUFFER,e)),lt(n,()=>n.bufferData(n.ARRAY_BUFFER,t,n.STATIC_DRAW)),e}function hL(n,t){const e=Is(n,()=>n.createBuffer(),"Unable to create WebGLBuffer");return lt(n,()=>n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e)),lt(n,()=>n.bufferData(n.ELEMENT_ARRAY_BUFFER,t,n.STATIC_DRAW)),e}function dL(n){return Is(n,()=>n.createTexture(),"Unable to create WebGLTexture.")}function pL(n,t){const e=H().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(n<=0||t<=0){const s=`[${n}x${t}]`;throw new Error("Requested texture size "+s+" is invalid.")}if(n>e||t>e){const s=`[${n}x${t}]`,o=`[${e}x${e}]`;throw new Error("Requested texture size "+s+" greater than WebGL maximum on this browser / GPU "+o+".")}}function fL(n){return Is(n,()=>n.createFramebuffer(),"Unable to create WebGLFramebuffer.")}function Z1(n,t,e,s,o,r,i){const a=n.getAttribLocation(t,e);return a===-1?!1:(lt(n,()=>n.bindBuffer(n.ARRAY_BUFFER,s)),lt(n,()=>n.vertexAttribPointer(a,o,n.FLOAT,!1,r,i)),lt(n,()=>n.enableVertexAttribArray(a)),!0)}function mL(n,t,e){wL(n,e),lt(n,()=>n.activeTexture(n.TEXTURE0+e)),lt(n,()=>n.bindTexture(n.TEXTURE_2D,t))}function gL(n,t,e){return Is(n,()=>n.getUniformLocation(t,e),'uniform "'+e+'" not present in program.')}function xL(n,t,e){return n.getUniformLocation(t,e)}function bL(n,t,e,s){lt(n,()=>mL(n,t,s)),lt(n,()=>n.uniform1i(e,s))}function yp(n,t,e){lt(n,()=>n.bindFramebuffer(n.FRAMEBUFFER,e)),lt(n,()=>n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,t,0))}function Q1(n,t){lt(n,()=>n.bindFramebuffer(n.FRAMEBUFFER,t)),lt(n,()=>n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,null,0))}function Fc(n){const t=n.checkFramebufferStatus(n.FRAMEBUFFER);if(t!==n.FRAMEBUFFER_COMPLETE)throw new Error("Error binding framebuffer: "+yL(n,t))}function yL(n,t){switch(t){case n.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case n.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case n.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case n.FRAMEBUFFER_UNSUPPORTED:return"FRAMEBUFFER_UNSUPPORTED";default:return`unknown error ${t}`}}function Is(n,t,e){const s=lt(n,()=>t());if(s==null)throw new Error(e);return s}function wL(n,t){const e=n.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,s=t+n.TEXTURE0;if(s<n.TEXTURE0||s>e){const o=`[gl.TEXTURE0, gl.TEXTURE${e}]`;throw new Error(`textureUnit must be in ${o}.`)}}function dr(n,t=2){return K(n.slice(0,n.length-t))}function pr(n){if(n.length===0)throw Error("Cannot get rows and columns of an empty shape array.");return[n.length>1?n[n.length-2]:1,n[n.length-1]]}function _c(n){let t=[1,1,1];return n.length===0||n.length===1&&n[0]===1||(t=[dr(n),...pr(n)]),t}function CL(n,t=!1){let e=H().getNumber("WEBGL_MAX_TEXTURE_SIZE"),s=H().getNumber("WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE");s===1/0&&H().getBool("WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE")&&(s=e/2),t&&(e=e*2,s=s*2,n=n.map((a,l)=>l>=n.length-2?On(n[l]):n[l]),n.length===1&&(n=[2,n[0]])),n.length!==2&&(n=Ts(n).newShape);let o=K(n),r=null;n.length<=1&&o<=e?r=[1,o]:n.length===2&&n[0]<=e&&n[1]<=e?r=n:n.length===3&&n[0]*n[1]<=e&&n[2]<=e?r=[n[0]*n[1],n[2]]:n.length===3&&n[0]<=e&&n[1]*n[2]<=e?r=[n[0],n[1]*n[2]]:n.length===4&&n[0]*n[1]*n[2]<=e&&n[3]<=e?r=[n[0]*n[1]*n[2],n[3]]:n.length===4&&n[0]<=e&&n[1]*n[2]*n[3]<=e&&(r=[n[0],n[1]*n[2]*n[3]]);const i=r!=null&&Math.max(...r)>s&&Math.min(...r)<=(t?2:1)&&Math.min(...r)>0;if(r==null||i)if(t){const a=dr(n);let l=2,c=2;n.length&&([l,c]=pr(n)),o=a*(l/2)*(c/2),r=ou(o).map(u=>u*2)}else r=ou(o);return r}function Oc(n){return n%2===0}function Mc(n,t){if(n=n.slice(-2),t=t.slice(-2),Bt(n,t)||!n.length||!t.length||n[0]===0||n[1]===0||t[0]===0||t[1]===0)return!0;if(n.length!==t.length){const e=n[n.length-1],s=t[t.length-1];if(e===s||Oc(e)&&Oc(s)&&(n[0]===1||t[0]===1))return!0}return n[1]===t[1]&&Oc(n[0])&&Oc(t[0])}let wp,Cp;function $L(n){if(wp==null){const t=Xn(n);wp=t.getParameter(t.MAX_TEXTURE_SIZE)}return wp}function IL(n){if(Cp==null){const t=Xn(n);Cp=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,Cp)}function vL(n){if(n===0)return 0;let t;const e=Xn(n);return An(e,"EXT_disjoint_timer_query_webgl2")&&n===2?t=2:An(e,"EXT_disjoint_timer_query")?t=1:t=0,t}function An(n,t){return n.getExtension(t)!=null}function J1(n){try{if(Xn(n)!=null)return!0}catch(t){return console.log("Error when getting WebGL context: ",t),!1}return!1}function kL(n){if(n===0)return!1;const t=Xn(n);if(n===1){if(!An(t,"OES_texture_float"))return!1}else if(!An(t,"EXT_color_buffer_float"))return!1;return $p(t)}function SL(n){if(n===0)return!1;const t=Xn(n);if(n===1){if(!An(t,"OES_texture_float")||!An(t,"WEBGL_color_buffer_float"))return!1}else{if(An(t,"EXT_color_buffer_float"))return $p(t);const s="EXT_color_buffer_half_float";if(An(t,s)){const o=t.getExtension(s);return NL(t,o)}return!1}return $p(t)}function $p(n){const t=xp(n),e=n.createTexture();n.bindTexture(n.TEXTURE_2D,e),n.texImage2D(n.TEXTURE_2D,0,t.internalFormatFloat,1,1,0,t.textureFormatFloat,t.textureTypeFloat,null);const r=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,r),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e,0);const i=n.checkFramebufferStatus(n.FRAMEBUFFER)===n.FRAMEBUFFER_COMPLETE;return n.bindTexture(n.TEXTURE_2D,null),n.bindFramebuffer(n.FRAMEBUFFER,null),n.deleteTexture(e),n.deleteFramebuffer(r),i}function NL(n,t){const e=xp(n,t),s=n.createTexture();n.bindTexture(n.TEXTURE_2D,s),n.texImage2D(n.TEXTURE_2D,0,e.internalFormatHalfFloat,1,1,0,e.textureFormatFloat,e.textureTypeHalfFloat,null);const i=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,i),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,s,0);const a=n.checkFramebufferStatus(n.FRAMEBUFFER)===n.FRAMEBUFFER_COMPLETE;return n.bindTexture(n.TEXTURE_2D,null),n.bindFramebuffer(n.FRAMEBUFFER,null),n.deleteTexture(s),n.deleteFramebuffer(i),a}function TL(n){return n!==2?!1:Xn(n).fenceSync!=null}function ua(n,t){Array.isArray(n)||(n=[n]),n.forEach(e=>{e!=null&&T(e.dtype!=="complex64",()=>`${t} does not support complex64 tensors in the WebGL backend.`)})}const dt=H();dt.registerFlag("HAS_WEBGL",()=>dt.getNumber("WEBGL_VERSION")>0),dt.registerFlag("WEBGL_VERSION",()=>J1(2)?2:J1(1)?1:0),dt.registerFlag("WEBGL_CHECK_NUMERICAL_PROBLEMS",()=>!1),dt.registerFlag("WEBGL_BUFFER_SUPPORTED",()=>dt.get("WEBGL_VERSION")===2),dt.registerFlag("WEBGL_CPU_FORWARD",()=>!0),dt.registerFlag("WEBGL_FORCE_F16_TEXTURES",()=>!1),dt.registerFlag("WEBGL_PACK",()=>dt.getBool("HAS_WEBGL")),dt.registerFlag("WEBGL_PACK_NORMALIZATION",()=>dt.getBool("WEBGL_PACK")),dt.registerFlag("WEBGL_PACK_CLIP",()=>dt.getBool("WEBGL_PACK")),dt.registerFlag("WEBGL_PACK_DEPTHWISECONV",()=>dt.getBool("WEBGL_PACK")),dt.registerFlag("WEBGL_PACK_BINARY_OPERATIONS",()=>dt.getBool("WEBGL_PACK")),dt.registerFlag("WEBGL_PACK_UNARY_OPERATIONS",()=>dt.getBool("WEBGL_PACK")),dt.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS",()=>dt.getBool("WEBGL_PACK")),dt.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS",()=>dt.getBool("WEBGL_PACK")),dt.registerFlag("WEBGL_PACK_REDUCE",()=>dt.getBool("WEBGL_PACK")),dt.registerFlag("WEBGL_LAZILY_UNPACK",()=>dt.getBool("WEBGL_PACK")),dt.registerFlag("WEBGL_CONV_IM2COL",()=>dt.getBool("WEBGL_PACK")),dt.registerFlag("WEBGL_PACK_CONV2DTRANSPOSE",()=>dt.getBool("WEBGL_PACK")),dt.registerFlag("WEBGL_MAX_TEXTURE_SIZE",()=>$L(dt.getNumber("WEBGL_VERSION"))),dt.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER",()=>IL(dt.getNumber("WEBGL_VERSION"))),dt.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",()=>{const n=dt.getNumber("WEBGL_VERSION");return n===0?0:vL(n)}),dt.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",()=>dt.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&!Uf()),dt.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE",()=>kL(dt.getNumber("WEBGL_VERSION"))),dt.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED",()=>dt.getBool("WEBGL_FORCE_F16_TEXTURES")?!1:dt.getBool("WEBGL_RENDER_FLOAT32_CAPABLE")),dt.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED",()=>SL(dt.getNumber("WEBGL_VERSION"))),dt.registerFlag("WEBGL_FENCE_API_ENABLED",()=>TL(dt.getNumber("WEBGL_VERSION"))),dt.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM",()=>dt.getBool("WEBGL_RENDER_FLOAT32_ENABLED")?4:0),dt.registerFlag("WEBGL_DELETE_TEXTURE_THRESHOLD",()=>-1,n=>{if(typeof n!="number")throw new Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be a number but got ${n}.`);if(n<0&&n!==-1)throw new Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be -1 (indicating never delete) or at least 0, but got ${n}.`)}),dt.registerFlag("WEBGL_FLUSH_THRESHOLD",()=>Uf()?1:-1,n=>{if(typeof n!="number")throw new Error(`WEBGL_FLUSH_THRESHOLD must be a number but got ${n}.`);if(n<0&&n!==-1)throw new Error(`WEBGL_FLUSH_THRESHOLD must be -1 (indicating never manual flush) or at least 0, but got ${n}.`)}),dt.registerFlag("CPU_HANDOFF_SIZE_THRESHOLD",()=>128),dt.registerFlag("WEBGL_USE_SHAPES_UNIFORMS",()=>!1),dt.registerFlag("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD",()=>1e5),dt.registerFlag("TOPK_K_CPU_HANDOFF_THRESHOLD",()=>128),dt.registerFlag("WEBGL_EXP_CONV",()=>!1),dt.registerFlag("SOFTWARE_WEBGL_ENABLED",()=>dt.getBool("IS_TEST")),dt.registerFlag("WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE",()=>1/0),dt.registerFlag("WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE",()=>!1),dt.registerFlag("WEBGL2_ISNAN_CUSTOM",()=>!1),dt.registerFlag("ENGINE_COMPILE_ONLY",()=>!1);function Ke(){let n,t,e,s,o,r,i,a,l,c;return H().getNumber("WEBGL_VERSION")===2?(n="#version 300 es",t="in",e="out",s="in",o="texture",r="outputColor",i="out vec4 outputColor;",a=H().getBool("WEBGL2_ISNAN_CUSTOM")?`
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
    `),{version:n,attribute:t,varyingVs:e,varyingFs:s,texture2D:o,output:r,defineOutput:i,defineSpecialNaN:a,defineSpecialInf:l,defineRound:c}}function Do(n,t,e="index"){const s=ft(t);return s.map((o,r)=>{const i=`int ${n[r]} = ${e} / ${o}`,a=r===s.length-1?`int ${n[r+1]} = ${e} - ${n[r]} * ${o}`:`index -= ${n[r]} * ${o}`;return`${i}; ${a};`}).join("")}function Lc(n,t,e="index"){const s=ft(t);return s.map((o,r)=>{const i=`int ${n[r]} = ${e} / outShapeStrides[${r}]`,a=r===s.length-1?`int ${n[r+1]} = ${e} - ${n[r]} * outShapeStrides[${r}]`:`index -= ${n[r]} * outShapeStrides[${r}]`;return`${i}; ${a};`}).join("")}function EL(n,t){const e=n.length,s=n.map(r=>`${t}[${r}]`),o=new Array(e-1);o[e-2]=s[e-1];for(let r=e-3;r>=0;--r)o[r]=`(${o[r+1]} * ${s[r+1]})`;return o}function RL(n,t,e="index"){const s=n.map((r,i)=>i),o=EL(s,t);return o.map((r,i)=>{const a=`int ${n[i]} = ${e} / ${o[i]}`,l=i===o.length-1?`int ${n[i+1]} = ${e} - ${n[i]} * ${o[i]}`:`index -= ${n[i]} * ${o[i]}`;return`${a}; ${l};`}).join("")}function Ip(n){const t=ft(n).map(e=>e.toString());return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * ${t[0]} + coords.y * ${t[1]} + coords.z;
  }
`}function vp(){return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * outShapeStrides[0] + coords.y * outShapeStrides[1] + coords.z;
  }
`}const ty=`
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
`;const{getBroadcastDims:ey}=k2;function AL(n,t,e){const s=[];if(n.forEach(p=>{const f=K(p.shapeInfo.logicalShape);if(p.shapeInfo.isUniform?s.push(`uniform float ${p.name}${f>1?`[${f}]`:""};`):(s.push(`uniform sampler2D ${p.name};`),s.push(`uniform int offset${p.name};`)),e.enableShapeUniforms){const{uniformShape:m}=kp(e.packedInputs,p.shapeInfo.logicalShape,p.shapeInfo.texShape);switch(m.length){case 1:s.push(`uniform int ${p.name}Shape;`);break;case 2:s.push(`uniform ivec2 ${p.name}Shape;`);break;case 3:s.push(`uniform ivec3 ${p.name}Shape;`);break;case 4:s.push(`uniform ivec4 ${p.name}Shape;`);break}s.push(`uniform ivec2 ${p.name}TexShape;`)}}),e.enableShapeUniforms){switch(t.logicalShape.length){case 1:s.push("uniform int outShape;");break;case 2:s.push("uniform ivec2 outShape;"),s.push("uniform int outShapeStrides;");break;case 3:s.push("uniform ivec3 outShape;"),s.push("uniform ivec2 outShapeStrides;");break;case 4:s.push("uniform ivec4 outShape;"),s.push("uniform ivec3 outShapeStrides;");break}s.push("uniform ivec2 outTexShape;")}e.customUniforms&&e.customUniforms.forEach(p=>{s.push(`uniform ${p.type} ${p.name}${p.arrayIndex?`[${p.arrayIndex}]`:""};`)});const o=s.join(`
`),r=n.map(p=>DL(p,t,e.packedInputs,e.enableShapeUniforms)).join(`
`),i=t.texShape,a=Ke(),l=OL(a);let c,u,h=PL(a);return t.isPacked?(c=FL(t.logicalShape,i,e.enableShapeUniforms),u=LL(a)):(c=_L(t.logicalShape,i,e.enableShapeUniforms),u=ML(a)),e.packedInputs&&(h+=WL),[h,l,u,o,c,r,e.userCode].join(`
`)}function fr(n,t=!1){const e=n.shapeInfo.logicalShape;switch(e.length){case 0:return tP(n,t);case 1:return nP(n,t);case 2:return oP(n,t);case 3:return iP(n,t);case 4:return lP(n,t);case 5:return cP(n);case 6:return uP(n);default:throw new Error(`${e.length}-D input sampling is not yet supported`)}}function ny(n,t){switch(n.shapeInfo.logicalShape.length){case 0:return JL(n);case 1:return eP(n,t);case 2:return sP(n,t);case 3:return rP(n,t);default:return aP(n,t)}}function DL(n,t,e=!1,s){let o="";e?o+=ny(n,s):o+=fr(n,s);const r=n.shapeInfo.logicalShape,i=t.logicalShape;return r.length<=i.length&&(e?o+=hP(n,t):o+=dP(n,t)),o}function FL(n,t,e){switch(n.length){case 0:return sy();case 1:return UL(n,t,e);case 2:return ZL(n,t,e);case 3:return HL(n,t,e);default:return XL(n,t,e)}}function _L(n,t,e){switch(n.length){case 0:return sy();case 1:return GL(n,t,e);case 2:return QL(n,t,e);case 3:return qL(n,t,e);case 4:return KL(n,t,e);case 5:return jL(n,t);case 6:return YL(n,t);default:throw new Error(`${n.length}-D output sampling is not yet supported`)}}function OL(n){return`
    float sampleTexture(sampler2D textureSampler, vec2 uv) {
      return ${n.texture2D}(textureSampler, uv).r;
    }
  `}function ML(n){return`
    void setOutput(float val) {
      ${n.output} = vec4(val, 0, 0, 0);
    }
  `}function LL(n){return`
    void setOutput(vec4 val) {
      ${n.output} = val;
    }
  `}function PL(n){return`${n.version}
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

    ${BL}
    ${zL}
    ${VL}
  `}const BL=`
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
`,zL=`
vec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,
  int texNumC, int row, int col) {
  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,VL=`
vec2 packedUVfrom3D(int texNumR, int texNumC,
    int texelsInBatch, int texelsInLogicalRow, int b,
    int row, int col) {
  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,WL=`
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
`;function sy(){return`
    int getOutputCoords() {
      return 0;
    }
  `}function UL(n,t,e){const s=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)];return s[0]===1?e?`
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
  `}function GL(n,t,e){return t[0]===1?e?`
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
  `}function HL(n,t,e){if(e)return`
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
  `}function qL(n,t,e){if(e)return`
  ivec3 getOutputCoords() {
    ivec2 resTexRC = ivec2(resultUV.yx *
                           vec2(outTexShape[0], outTexShape[1]));
    int index = resTexRC.x * outTexShape[1] + resTexRC.y;
    ${Lc(["r","c","d"],n)}
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
  `}function XL(n,t,e){if(e)return`
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
  `}function KL(n,t,e){if(e)return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(outTexShape[0], outTexShape[1]));
      int index = resTexRC.x * outTexShape[1] + resTexRC.y;
      ${Lc(["r","c","d","d2"],n)}
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
  `}function jL(n,t){const e=Do(["r","c","d","d2","d3"],n);return`
    ivec5 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx * vec2(${t[0]},
                             ${t[1]}));

      int index = resTexRC.x * ${t[1]} + resTexRC.y;

      ${e}

      ivec5 outShape = ivec5(r, c, d, d2, d3);
      return outShape;
    }
  `}function YL(n,t){const e=Do(["r","c","d","d2","d3","d4"],n);return`
    ivec6 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;

      ${e}

      ivec6 result = ivec6(r, c, d, d2, d3, d4);
      return result;
    }
  `}function ZL(n,t,e){const s=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)];if(Bt(n,t))return e?`
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
  `}function QL(n,t,e){return Bt(n,t)?e?`
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
  `}function Fo(n){return`offset${n}`}function JL(n){const t=n.name,e="get"+t.charAt(0).toUpperCase()+t.slice(1),s=Ke();return`
    vec4 ${e}() {
      return ${s.texture2D}(${t}, halfCR);
    }
  `}function tP(n,t){const e=n.name,s="get"+e.charAt(0).toUpperCase()+e.slice(1);if(n.shapeInfo.isUniform)return`float ${s}() {return ${e};}`;const[o,r]=n.shapeInfo.texShape;if(o===1&&r===1)return`
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
  `}function eP(n,t){const e=n.name,s="get"+e.charAt(0).toUpperCase()+e.slice(1),o=n.shapeInfo.texShape,r=Ke();if(t)return`
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
  `}function nP(n,t){const e=n.name,s="get"+e.charAt(0).toUpperCase()+e.slice(1);if(n.shapeInfo.isUniform)return`
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
  `}function sP(n,t){const e=n.shapeInfo.logicalShape,s=n.name,o="get"+s.charAt(0).toUpperCase()+s.slice(1),r=n.shapeInfo.texShape,i=r[0],a=r[1],l=Ke();if(r!=null&&Bt(e,r))return t?`
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
  `}function oP(n,t){const e=n.shapeInfo.logicalShape,s=n.name,o="get"+s.charAt(0).toUpperCase()+s.slice(1),r=n.shapeInfo.texShape;if(r!=null&&Bt(e,r)){if(t)return`
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
`}function rP(n,t){const e=n.shapeInfo.logicalShape,s=n.name,o="get"+s.charAt(0).toUpperCase()+s.slice(1),r=n.shapeInfo.texShape,i=[Math.ceil(r[0]/2),Math.ceil(r[1]/2)];if(e[0]===1){const d=e.slice(1),p=[1,2],f=gr(n,d),m=["b","row","col"];return`
        ${ny(f,t)}
        vec4 ${o}(int b, int row, int col) {
          return ${o}(${xr(m,p)});
        }
      `}const a=Ke();if(t)return`
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
  `}function iP(n,t){const e=n.shapeInfo.logicalShape,s=n.name,o="get"+s.charAt(0).toUpperCase()+s.slice(1),r=e[1]*e[2],i=e[2],{newShape:a,keptDims:l}=Ts(e),c=a;if(c.length<e.length){const m=gr(n,c),g=["row","col","depth"];return`
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
  `}function aP(n,t){const e=n.name,s="get"+e.charAt(0).toUpperCase()+e.slice(1),o=Ke();if(t)return`
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
  `}function lP(n,t){const e=n.shapeInfo.logicalShape,s=n.name,o="get"+s.charAt(0).toUpperCase()+s.slice(1),r=e[3],i=e[2]*r,a=e[1]*i,{newShape:l,keptDims:c}=Ts(e);if(l.length<e.length){const b=gr(n,l),y=["row","col","depth","depth2"];return`
      ${fr(b,t)}
      float ${o}(int row, int col, int depth, int depth2) {
        return ${o}(${xr(y,c)});
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
  `}function cP(n){const t=n.shapeInfo.logicalShape,e=n.name,s="get"+e.charAt(0).toUpperCase()+e.slice(1),o=t[4],r=t[3]*o,i=t[2]*r,a=t[1]*i,{newShape:l,keptDims:c}=Ts(t);if(l.length<t.length){const m=gr(n,l),g=["row","col","depth","depth2","depth3"];return`
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
  `}function uP(n){const t=n.shapeInfo.logicalShape,e=n.name,s="get"+e.charAt(0).toUpperCase()+e.slice(1),{newShape:o,keptDims:r}=Ts(t);if(o.length<t.length){const g=gr(n,o),x=["row","col","depth","depth2","depth3","depth4"];return`
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
  `}function hP(n,t){const e=n.name,s=e.charAt(0).toUpperCase()+e.slice(1),o="get"+s+"AtOutCoords",r=n.shapeInfo.logicalShape.length,i=t.logicalShape.length,a=ey(n.shapeInfo.logicalShape,t.logicalShape),l=Gt(i),c=i-r;let u;const h=["x","y","z","w","u","v"];r===0?u="":i<2&&a.length>=1?u="coords = 0;":u=a.map(b=>`coords.${h[b+c]} = 0;`).join(`
`);let d="";i<2&&r>0?d="coords":d=n.shapeInfo.logicalShape.map((b,y)=>`coords.${h[y+c]}`).join(", ");let p="return outputValue;";const m=K(n.shapeInfo.logicalShape)===1,x=K(t.logicalShape)===1;if(r===1&&!m&&!x)p=`
      return vec4(outputValue.xy, outputValue.xy);
    `;else if(m&&!x)i===1?p=`
        return vec4(outputValue.x, outputValue.x, 0., 0.);
      `:p=`
        return vec4(outputValue.x);
      `;else if(a.length){const b=r-2,y=r-1;a.indexOf(b)>-1&&a.indexOf(y)>-1?p="return vec4(outputValue.x);":a.indexOf(b)>-1?p="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":a.indexOf(y)>-1&&(p="return vec4(outputValue.xx, outputValue.zz);")}return`
    vec4 ${o}() {
      ${l} coords = getOutputCoords();
      ${u}
      vec4 outputValue = get${s}(${d});
      ${p}
    }
  `}function dP(n,t){const e=n.name,s=e.charAt(0).toUpperCase()+e.slice(1),o="get"+s+"AtOutCoords",r=t.texShape,i=n.shapeInfo.texShape,a=n.shapeInfo.logicalShape.length,l=t.logicalShape.length;if(!n.shapeInfo.isUniform&&a===l&&n.shapeInfo.flatOffset==null&&Bt(i,r))return`
      float ${o}() {
        return sampleTexture(${e}, resultUV);
      }
    `;const c=Gt(l),u=ey(n.shapeInfo.logicalShape,t.logicalShape),h=l-a;let d;const p=["x","y","z","w","u","v"];a===0?d="":l<2&&u.length>=1?d="coords = 0;":d=u.map(m=>`coords.${p[m+h]} = 0;`).join(`
`);let f="";return l<2&&a>0?f="coords":f=n.shapeInfo.logicalShape.map((m,g)=>`coords.${p[g+h]}`).join(", "),`
    float ${o}() {
      ${c} coords = getOutputCoords();
      ${d}
      return get${s}(${f});
    }
  `}function Gt(n){if(n<=1)return"int";if(n===2)return"ivec2";if(n===3)return"ivec3";if(n===4)return"ivec4";if(n===5)return"ivec5";if(n===6)return"ivec6";throw Error(`GPU for rank ${n} is not yet supported`)}function kp(n,t,e){const{newShape:s,keptDims:o}=Ts(t),r=t.length,i=n&&r===3&&t[0]===1,a=i?t.slice(1):s,l=!n&&r>1&&!Bt(t,e)&&s.length<r||i;return{useSqueezeShape:l,uniformShape:l?a:t,keptDims:o}}function gr(n,t){const e=JSON.parse(JSON.stringify(n));return e.shapeInfo.logicalShape=t,e}function xr(n,t){return t.map(e=>n[e]).join(", ")}function pP(n,t,e,s){const o=e.map((u,h)=>{const d={logicalShape:u.shape,texShape:u.isUniform?null:u.texData.texShape,isUniform:u.isUniform,isPacked:u.isUniform?!1:u.texData.isPacked,flatOffset:null};return u.texData!=null&&u.texData.slice!=null&&u.texData.slice.flatOffset>0&&(d.flatOffset=u.texData.slice.flatOffset),{name:t.variableNames[h],shapeInfo:d}}),r=o.map(u=>u.shapeInfo),i={logicalShape:s.shape,texShape:s.texData.texShape,isUniform:!1,isPacked:s.texData.isPacked,flatOffset:null},a=AL(o,i,t),l=iL(n.gl,a),c=n.createProgram(l);return H().get("ENGINE_COMPILE_ONLY")?{program:t,fragmentShader:l,source:a,webGLProgram:c,inShapeInfos:r,outShapeInfo:i,variablesLocations:null,customUniformLocations:null,infLoc:null,nanLoc:null,outShapeLocation:null,outShapeStridesLocation:null,outTexShapeLocation:null}:(n.buildVao(c),Object.assign({program:t,fragmentShader:l,source:a,webGLProgram:c,inShapeInfos:r,outShapeInfo:i},oy(n,t,c)))}function oy(n,t,e){const s=[],o=[];let r,i,a,l=null,c=null;c=n.getUniformLocation(e,"NAN",!1),H().getNumber("WEBGL_VERSION")===1&&(l=n.getUniformLocation(e,"INFINITY",!1));const u=!1;for(const h of t.variableNames){const d={name:h,uniform:n.getUniformLocation(e,h,u),offset:n.getUniformLocation(e,`offset${h}`,u)};t.enableShapeUniforms&&(d.shape=n.getUniformLocation(e,`${h}Shape`,u),d.texShape=n.getUniformLocation(e,`${h}TexShape`,u)),s.push(d)}if(t.enableShapeUniforms&&(r=n.getUniformLocation(e,"outShape",u),a=n.getUniformLocation(e,"outShapeStrides",u),i=n.getUniformLocation(e,"outTexShape",u)),t.customUniforms)for(const h of t.customUniforms)o.push(n.getUniformLocation(e,h.name,u));return{variablesLocations:s,customUniformLocations:o,infLoc:l,nanLoc:c,outShapeLocation:r,outShapeStridesLocation:a,outTexShapeLocation:i}}function ry(n,t){if(n.length!==t.length)throw Error(`Binary was compiled with ${n.length} inputs, but was executed with ${t.length} inputs`);n.forEach((e,s)=>{const o=e.logicalShape,r=t[s],i=r.shape;if(!Bt(o,i))throw Error(`Binary was compiled with different shapes than the current args. Shapes ${o} and ${i} must match`);if(e.isUniform&&r.isUniform)return;const a=e.texShape,l=r.isUniform?null:r.texData.texShape;if(!Bt(a,l))throw Error(`Binary was compiled with different texture shapes than the current args. Shape ${a} and ${l} must match`)})}function fP(n,t,e,s,o){t.program.enableShapeUniforms||(ry(t.inShapeInfos,e),ry([t.outShapeInfo],[s]));const r=s.texData.texture,i=s.texData.texShape;s.texData.isPacked?n.setOutputPackedMatrixTexture(r.texture,i[0],i[1]):n.setOutputMatrixTexture(r.texture,i[0],i[1]),n.setProgram(t.webGLProgram),n.bindVertexArray(t.webGLProgram.vao),H().getNumber("WEBGL_VERSION")===1&&t.infLoc!==null&&n.gl.uniform1f(t.infLoc,1/0),t.nanLoc!==null&&n.gl.uniform1f(t.nanLoc,NaN);for(let l=0;l<e.length;++l){const c=e[l],{uniform:u,offset:h,shape:d,texShape:p}=t.variablesLocations[l];if(d){const{uniformShape:f}=kp(t.program.packedInputs,c.shape,c.texData.texShape);switch(f.length){case 1:n.gl.uniform1iv(d,new Int32Array(f));break;case 2:n.gl.uniform2iv(d,new Int32Array(f));break;case 3:n.gl.uniform3iv(d,new Int32Array(f));break;case 4:n.gl.uniform4iv(d,new Int32Array(f));break}}if(p&&n.gl.uniform2i(p,c.texData.texShape[0],c.texData.texShape[1]),u!=null){if(c.isUniform){if(K(c.shape)<2)n.gl.uniform1f(u,c.uniformValues[0]);else{let f=c.uniformValues;f instanceof Float32Array||(f=new Float32Array(f)),n.gl.uniform1fv(u,f)}continue}c.texData.slice!=null&&h!=null&&n.gl.uniform1i(h,c.texData.slice.flatOffset),n.setInputMatrixTexture(c.texData.texture.texture,u,l)}}const a=t.outShapeLocation;if(a)switch(s.shape.length){case 1:n.gl.uniform1iv(a,new Int32Array(s.shape));break;case 2:n.gl.uniform2iv(a,new Int32Array(s.shape));break;case 3:n.gl.uniform3iv(a,new Int32Array(s.shape));break;case 4:n.gl.uniform4iv(a,new Int32Array(s.shape));break}if(t.outShapeStridesLocation){const l=ft(s.shape);switch(s.shape.length){case 2:n.gl.uniform1iv(t.outShapeStridesLocation,new Int32Array(l));break;case 3:n.gl.uniform2iv(t.outShapeStridesLocation,new Int32Array(l));break;case 4:n.gl.uniform3iv(t.outShapeStridesLocation,new Int32Array(l));break}}if(t.outTexShapeLocation&&n.gl.uniform2i(t.outTexShapeLocation,s.texData.texShape[0],s.texData.texShape[1]),t.program.customUniforms&&o)for(let l=0;l<t.program.customUniforms.length;++l){const c=t.program.customUniforms[l],u=t.customUniformLocations[l],h=o[l];if(c.type==="float")n.gl.uniform1fv(u,h);else if(c.type==="vec2")n.gl.uniform2fv(u,h);else if(c.type==="vec3")n.gl.uniform3fv(u,h);else if(c.type==="vec4")n.gl.uniform4fv(u,h);else if(c.type==="int")n.gl.uniform1iv(u,h);else if(c.type==="ivec2")n.gl.uniform2iv(u,h);else if(c.type==="ivec3")n.gl.uniform3iv(u,h);else if(c.type==="ivec4")n.gl.uniform4iv(u,h);else throw Error(`uniform type ${c.type} is not supported yet.`)}n.executeProgram()}function mP(n,t,e){let s="";t.concat(e).forEach(i=>{const a=i.texData!=null&&i.texData.slice!=null&&i.texData.slice.flatOffset>0;if(n.enableShapeUniforms&&!i.isUniform){const l=i.texData.texShape,{useSqueezeShape:c,uniformShape:u,keptDims:h}=kp(n.packedInputs,i.shape,l);let d="",p="",f="";if(u.length===1&&n.packedInputs){const C=[Math.ceil(l[0]/2),Math.ceil(l[1]/2)];d=`${C[0]>1}_${C[1]>1}`}else if(u.length===2&&!n.packedInputs)p=`${u[0]>1}_${u[1]>1}`;else if(u.length>2&&!n.packedInputs){const C=ft(u);f=`${C[0]===l[1]}_${C[C.length-1]===l[1]}`}const m=i.shape.length,g=u.length===2&&Bt(i.shape,l),x=K(i.shape)===1,b=Zo(i.shape,e.shape),y=!n.packedInputs&&m===e.shape.length&&Bt(l,e.texData.texShape),w=n.packedInputs||u.length>2?"":`${l[0]>1}_${l[1]>1}`;s+=`${m}_${y}_${c?h:""}_${u.length}_${x}_${b}_${g}_${d}_${p}_${f}_${w}_${a}`}else{const l=i.isUniform?"uniform":i.texData.texShape;s+=`${i.shape}_${l}_${a}`}});const o=n.userCode;let r=n.constructor.name;return r+="_"+s+"_"+o+`${H().getNumber("WEBGL_VERSION")}`,r}function Ue(n){return H().getBool("WEBGL_USE_SHAPES_UNIFORMS")&&n<=4}class gP{constructor(t){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=la.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];const e=Ke();this.outputShape=t,this.enableShapeUniforms=Ue(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?Lc(["r","c","d"],t):Do(["r","c","d"],t)}
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
    `}}class xP{constructor(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=la.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];const e=Ke();this.outputShape=t,this.enableShapeUniforms=Ue(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?Lc(["r","c","d"],t):Do(["r","c","d"],t)}
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
    `}}class bP{constructor(t){this.variableNames=["A"],this.outTexUsage=Cn.DOWNLOAD;const e=Ke();this.outputShape=t,this.userCode=`
      ${ty}

      void main() {
        float x = getAAtOutCoords();
        ${e.output} = encode_float(x);
      }
    `}}class yP{constructor(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=Cn.DOWNLOAD;const e=Ke();this.outputShape=t,this.userCode=`
      ${ty}

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        ${e.output} = encode_float(x);
      }
    `}}const wP={R:0,G:1,B:2,A:3};class iy{constructor(t,e=!1,s="RGBA"){this.variableNames=["A"],this.customUniforms=[{name:"texShape",type:"ivec2"}];const o=Ke();this.outputShape=t,this.enableShapeUniforms=Ue(this.outputShape.length);let r="result";e&&(r="floor(result * 255. + 0.5)");let i="";for(let a=0;a<s.length;a++){const l=s[a];i+=`
          if(offset == ${a}) {
            result = values[${wP[l]}];
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
    `}}class CP{constructor(t,e=!1){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.customUniforms=[{name:"texShape",type:"ivec2"}];const s=Ke();this.outputShape=t,this.enableShapeUniforms=Ue(this.outputShape.length);let o="",r="result";e&&(r="floor(result * 255. + 0.5)");for(let i=0;i<=1;i++)for(let a=0;a<=1;a++){const l=i*2+a;o+=`
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
    `}}function $P(n){const t=Ke(),e=`${t.version}
    precision highp float;
    ${t.attribute} vec3 clipSpacePos;
    ${t.attribute} vec2 uv;
    ${t.varyingVs} vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`;return rL(n,e)}function IP(n){const t=new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]);return uL(n,t)}function vP(n){const t=new Uint16Array([0,1,2,2,1,3]);return hL(n,t)}function ha(n,t,e,s,o,r){pL(t,e);const i=dL(n),a=n.TEXTURE_2D;return lt(n,()=>n.bindTexture(a,i)),lt(n,()=>n.texParameteri(a,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE)),lt(n,()=>n.texParameteri(a,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)),lt(n,()=>n.texParameteri(a,n.TEXTURE_MIN_FILTER,n.NEAREST)),lt(n,()=>n.texParameteri(a,n.TEXTURE_MAG_FILTER,n.NEAREST)),H().getNumber("WEBGL_VERSION")===1?lt(n,()=>n.texImage2D(a,0,s,t,e,0,o,r,null)):lt(n,()=>n.texStorage2D(a,1,s,t,e)),lt(n,()=>n.bindTexture(n.TEXTURE_2D,null)),{texture:i,texShape:[e,t]}}function ay(n){return n.internalFormatFloat}function kP(n,t,e,s){const[o,r]=ca(t,e);return ha(n,o,r,ay(s),s.textureFormatFloat,n.FLOAT)}function ly(n){return n.internalFormatHalfFloat}function SP(n,t,e,s){const[o,r]=ca(t,e);return ha(n,o,r,ly(s),s.textureFormatFloat,s.textureTypeHalfFloat)}function cy(n){return n.downloadTextureFormat}function NP(n,t,e,s){const[o,r]=ca(t,e);return ha(n,o,r,cy(s),n.RGBA,n.UNSIGNED_BYTE)}function uy(n){return n.internalFormatPackedFloat}function TP(n,t,e,s){const[o,r]=hr(t,e);return ha(n,o,r,uy(s),n.RGBA,n.FLOAT)}function hy(n){return n.internalFormatPackedHalfFloat}function EP(n,t,e,s){const[o,r]=hr(t,e);return ha(n,o,r,hy(s),n.RGBA,s.textureTypeHalfFloat)}function RP(n,t,e){return lt(n,()=>n.bindBuffer(n.ARRAY_BUFFER,e)),Z1(n,t,"clipSpacePos",e,3,20,0)&&Z1(n,t,"uv",e,2,20,12)}function AP(n,t,e,s,o,r){lt(n,()=>n.bindTexture(n.TEXTURE_2D,t));let i,a,l;o instanceof Uint8Array?(i=new Uint8Array(e*s*4),a=n.UNSIGNED_BYTE,l=n.RGBA):(i=new Float32Array(e*s*4),a=n.FLOAT,l=r.internalFormatPackedFloat),i.set(o),H().getNumber("WEBGL_VERSION")===2?lt(n,()=>n.texSubImage2D(n.TEXTURE_2D,0,0,0,e,s,n.RGBA,a,i)):lt(n,()=>n.texImage2D(n.TEXTURE_2D,0,l,e,s,0,n.RGBA,a,i)),lt(n,()=>n.bindTexture(n.TEXTURE_2D,null))}function DP(n,t,e){lt(n,()=>n.bindTexture(n.TEXTURE_2D,t)),e.data instanceof Uint8Array?H().getNumber("WEBGL_VERSION")===2?lt(n,()=>n.texSubImage2D(n.TEXTURE_2D,0,0,0,e.width,e.height,n.RGBA,n.UNSIGNED_BYTE,e.data)):lt(n,()=>n.texImage2D(n.TEXTURE_2D,0,n.RGBA,e.width,e.height,0,n.RGBA,n.UNSIGNED_BYTE,e.data)):H().getNumber("WEBGL_VERSION")===2?lt(n,()=>n.texSubImage2D(n.TEXTURE_2D,0,0,0,n.RGBA,n.UNSIGNED_BYTE,e)):lt(n,()=>n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,e)),lt(n,()=>n.bindTexture(n.TEXTURE_2D,null))}function FP(n,t,e,s){const o=n.createBuffer();lt(n,()=>n.bindBuffer(n.PIXEL_PACK_BUFFER,o));const a=4*4*t*e;return lt(n,()=>n.bufferData(n.PIXEL_PACK_BUFFER,a,n.STREAM_READ)),lt(n,()=>n.readPixels(0,0,e,t,n.RGBA,n.FLOAT,0)),lt(n,()=>n.bindBuffer(n.PIXEL_PACK_BUFFER,null)),o}function _P(n,t,e){const s=n,o=new Float32Array(e);return s.bindBuffer(s.PIXEL_PACK_BUFFER,t),s.getBufferSubData(s.PIXEL_PACK_BUFFER,0,o),s.bindBuffer(s.PIXEL_PACK_BUFFER,null),o}function OP(n,t,e,s){const[o,r]=ca(t,e),i=4,a=new Uint8Array(QM(t*e,i));return lt(n,()=>n.readPixels(0,0,o,r,s.downloadTextureFormat,n.UNSIGNED_BYTE,a)),new Float32Array(a.buffer)}function MP(n,t,e,s,o,r,i,a){const l=n,c=new Float32Array(JM(r,i));return l.bindBuffer(l.PIXEL_PACK_BUFFER,t),l.getBufferSubData(l.PIXEL_PACK_BUFFER,0,c),l.bindBuffer(l.PIXEL_PACK_BUFFER,null),c}function LP(n,t,e){const s=new Float32Array(t*e*4);return lt(n,()=>n.readPixels(0,0,e,t,n.RGBA,n.FLOAT,s)),s}class Sp{constructor(t){this.outputTexture=null,this.program=null,this.disposed=!1,this.itemsToPoll=[];const e=H().getNumber("WEBGL_VERSION");if(t!=null?(this.gl=t,jM(e,t)):this.gl=Xn(e),t=this.gl,H().getNumber("WEBGL_VERSION")===2){const r=t;this.createVertexArray=()=>lt(r,()=>r.createVertexArray()),this.bindVertexArray=i=>lt(r,()=>r.bindVertexArray(i)),this.deleteVertexArray=i=>lt(r,()=>r.deleteVertexArray(i)),this.getVertexArray=()=>lt(r,()=>r.getParameter(r.VERTEX_ARRAY_BINDING))}else if(t!=null){const r=t.getExtension("OES_vertex_array_object");if(r==null)throw new Error("All WebGL1 implementations are expected to offer OES_vertex_array_object.");this.createVertexArray=()=>lt(t,()=>r.createVertexArrayOES()),this.bindVertexArray=i=>lt(t,()=>r.bindVertexArrayOES(i)),this.deleteVertexArray=i=>lt(t,()=>r.deleteVertexArrayOES(i)),this.getVertexArray=()=>lt(t,()=>t.getParameter(r.VERTEX_ARRAY_BINDING_OES))}let s="WEBGL_color_buffer_float";const o="EXT_color_buffer_half_float";if(this.parallelCompilationExtension=this.gl.getExtension("KHR_parallel_shader_compile"),H().getNumber("WEBGL_VERSION")===1){const r="OES_texture_float",i="OES_texture_half_float";if(this.textureFloatExtension=Dc(this.gl,r),An(this.gl,i))this.textureHalfFloatExtension=Dc(this.gl,i);else if(H().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");if(this.colorBufferFloatExtension=this.gl.getExtension(s),An(this.gl,o))this.colorBufferHalfFloatExtension=Dc(this.gl,o);else if(H().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.")}else if(s="EXT_color_buffer_float",An(this.gl,s))this.colorBufferFloatExtension=this.gl.getExtension(s);else if(An(this.gl,o))this.colorBufferHalfFloatExtension=this.gl.getExtension(o);else throw new Error("GL context does not support color renderable floats");this.vertexBuffer=IP(this.gl),this.indexBuffer=vP(this.gl),this.framebuffer=fL(this.gl),this.textureConfig=xp(this.gl,this.textureHalfFloatExtension)}get debug(){return H().getBool("DEBUG")}dispose(){if(this.disposed)return;this.program!=null&&console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),this.outputTexture!=null&&console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");const t=this.gl;lt(t,()=>t.finish()),lt(t,()=>t.bindFramebuffer(t.FRAMEBUFFER,null)),lt(t,()=>t.deleteFramebuffer(this.framebuffer)),lt(t,()=>t.bindBuffer(t.ARRAY_BUFFER,null)),lt(t,()=>t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,null)),lt(t,()=>t.deleteBuffer(this.indexBuffer)),this.disposed=!0}createFloat32MatrixTexture(t,e){return this.throwIfDisposed(),kP(this.gl,t,e,this.textureConfig)}createFloat16MatrixTexture(t,e){return this.throwIfDisposed(),SP(this.gl,t,e,this.textureConfig)}createUnsignedBytesMatrixTexture(t,e){return this.throwIfDisposed(),NP(this.gl,t,e,this.textureConfig)}uploadPixelDataToTexture(t,e){this.throwIfDisposed(),DP(this.gl,t,e)}uploadDenseMatrixToTexture(t,e,s,o){this.throwIfDisposed(),AP(this.gl,t,e,s,o,this.textureConfig)}createFloat16PackedMatrixTexture(t,e){return this.throwIfDisposed(),EP(this.gl,t,e,this.textureConfig)}createPackedMatrixTexture(t,e){return this.throwIfDisposed(),TP(this.gl,t,e,this.textureConfig)}deleteMatrixTexture(t){this.throwIfDisposed(),this.outputTexture===t&&(Q1(this.gl,this.framebuffer),this.outputTexture=null),lt(this.gl,()=>this.gl.deleteTexture(t))}downloadByteEncodedFloatMatrixFromOutputTexture(t,e,s){return this.downloadMatrixDriver(t,()=>OP(this.gl,e,s,this.textureConfig))}downloadPackedMatrixFromBuffer(t,e,s,o,r,i){return MP(this.gl,t,e,s,o,r,i,this.textureConfig)}downloadFloat32MatrixFromBuffer(t,e){return _P(this.gl,t,e)}createBufferFromTexture(t,e,s){this.bindTextureToFrameBuffer(t);const o=FP(this.gl,e,s,this.textureConfig);return this.unbindTextureToFrameBuffer(),o}createAndWaitForFence(){const t=this.createFence(this.gl);return this.pollFence(t)}createFence(t){let e,s;if(H().getBool("WEBGL_FENCE_API_ENABLED")){const o=t,r=o.fenceSync(o.SYNC_GPU_COMMANDS_COMPLETE,0);t.flush(),s=()=>{const i=o.clientWaitSync(r,0,0);return i===o.ALREADY_SIGNALED||i===o.CONDITION_SATISFIED},e=r}else H().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(e=this.beginQuery(),this.endQuery(),s=()=>this.isQueryAvailable(e,H().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))):s=()=>!0;return{query:e,isFencePassed:s}}downloadMatrixFromPackedTexture(t,e,s){return this.downloadMatrixDriver(t,()=>LP(this.gl,e,s))}createProgram(t){this.throwIfDisposed();const e=this.gl;this.vertexShader==null&&(this.vertexShader=$P(e));const s=lL(e);lt(e,()=>e.attachShader(s,this.vertexShader)),lt(e,()=>e.attachShader(s,t)),cL(e,s);const o=Object.assign(s,{vao:this.createVertexArray()});return this.debug&&bp(e,o),o}buildVao(t){this.setProgram(t),this.bindVertexArray(t.vao);const e=this.gl;lt(e,()=>e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,this.indexBuffer)),RP(e,t,this.vertexBuffer)}deleteProgram(t){this.throwIfDisposed(),t===this.program&&(this.program=null),t!=null&&(lt(this.gl,()=>this.gl.deleteProgram(t)),this.deleteVertexArray(t.vao))}setProgram(t){this.throwIfDisposed(),this.program=t,this.program!=null&&this.debug&&bp(this.gl,this.program),lt(this.gl,()=>this.gl.useProgram(t))}getUniformLocation(t,e,s=!0){return this.throwIfDisposed(),s?gL(this.gl,t,e):xL(this.gl,t,e)}getAttributeLocation(t,e){return this.throwIfDisposed(),lt(this.gl,()=>this.gl.getAttribLocation(t,e))}getUniformLocationNoThrow(t,e){return this.throwIfDisposed(),this.gl.getUniformLocation(t,e)}setInputMatrixTexture(t,e,s){this.throwIfDisposed(),this.throwIfNoProgram(),bL(this.gl,t,e,s)}setOutputMatrixTexture(t,e,s){this.setOutputMatrixTextureDriver(t,s,e)}setOutputPackedMatrixTexture(t,e,s){this.throwIfDisposed();const[o,r]=hr(e,s);this.setOutputMatrixTextureDriver(t,o,r)}setOutputMatrixWriteRegion(t,e,s,o){this.setOutputMatrixWriteRegionDriver(s,t,o,e)}setOutputPackedMatrixWriteRegion(t,e,s,o){throw new Error("setOutputPackedMatrixWriteRegion not implemented.")}debugValidate(){this.program!=null&&bp(this.gl,this.program),Fc(this.gl)}executeProgram(){this.throwIfDisposed(),this.throwIfNoProgram();const t=this.gl;if(this.debug){const e=this.getVertexArray();console.assert(e===this.program.vao,"VAO changed between setProgram and executeProgram!"),this.debugValidate()}lt(t,()=>t.drawElements(t.TRIANGLES,6,t.UNSIGNED_SHORT,0))}blockUntilAllProgramsCompleted(){this.throwIfDisposed(),lt(this.gl,()=>this.gl.finish())}getQueryTimerExtension(){return this.disjointQueryTimerExtension==null&&(this.disjointQueryTimerExtension=Dc(this.gl,H().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2?"EXT_disjoint_timer_query_webgl2":"EXT_disjoint_timer_query")),this.disjointQueryTimerExtension}getQueryTimerExtensionWebGL2(){return this.getQueryTimerExtension()}getQueryTimerExtensionWebGL1(){return this.getQueryTimerExtension()}beginQuery(){if(H().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){const s=this.gl,o=this.getQueryTimerExtensionWebGL2(),r=s.createQuery();return s.beginQuery(o.TIME_ELAPSED_EXT,r),r}const t=this.getQueryTimerExtensionWebGL1(),e=t.createQueryEXT();return t.beginQueryEXT(t.TIME_ELAPSED_EXT,e),e}endQuery(){if(H().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){const e=this.gl,s=this.getQueryTimerExtensionWebGL2();e.endQuery(s.TIME_ELAPSED_EXT);return}const t=this.getQueryTimerExtensionWebGL1();t.endQueryEXT(t.TIME_ELAPSED_EXT)}waitForQueryAndGetTime(t){return Z(this,null,function*(){return yield qp(()=>this.disposed||this.isQueryAvailable(t,H().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))),this.getQueryTime(t,H().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))})}getQueryTime(t,e){if(e===0)return null;if(e===2){const s=this.gl;return s.getQueryParameter(t,s.QUERY_RESULT)/1e6}else{const s=this.getQueryTimerExtensionWebGL1();return s.getQueryObjectEXT(t,s.QUERY_RESULT_EXT)/1e6}}isQueryAvailable(t,e){if(e===0)return!0;if(e===2){const s=this.gl,o=this.getQueryTimerExtensionWebGL2(),r=s.getQueryParameter(t,s.QUERY_RESULT_AVAILABLE);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(o.GPU_DISJOINT_EXT)),r&&!this.disjoint}else{const s=this.getQueryTimerExtensionWebGL1(),o=s.getQueryObjectEXT(t,s.QUERY_RESULT_AVAILABLE_EXT);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(s.GPU_DISJOINT_EXT)),o&&!this.disjoint}}pollFence(t){return new Promise(e=>{this.addItemToPoll(()=>t.isFencePassed(),()=>e())})}pollItems(){const t=PP(this.itemsToPoll.map(e=>e.isDoneFn));for(let e=0;e<=t;++e){const{resolveFn:s}=this.itemsToPoll[e];s()}this.itemsToPoll=this.itemsToPoll.slice(t+1)}addItemToPoll(t,e){if(this.itemsToPoll.push({isDoneFn:t,resolveFn:e}),this.itemsToPoll.length>1)return;let s;"setTimeoutCustom"in H().platform&&(s=H().platform.setTimeoutCustom.bind(H().platform)),qp(()=>(this.pollItems(),this.itemsToPoll.length===0),()=>0,null,s)}bindTextureToFrameBuffer(t){this.throwIfDisposed(),yp(this.gl,t,this.framebuffer),this.debug&&Fc(this.gl)}unbindTextureToFrameBuffer(){this.outputTexture!=null?(yp(this.gl,this.outputTexture,this.framebuffer),this.debug&&Fc(this.gl)):Q1(this.gl,this.framebuffer)}downloadMatrixDriver(t,e){this.bindTextureToFrameBuffer(t);const s=e();return this.unbindTextureToFrameBuffer(),s}setOutputMatrixTextureDriver(t,e,s){this.throwIfDisposed();const o=this.gl;yp(o,t,this.framebuffer),this.debug&&Fc(o),this.outputTexture=t,lt(o,()=>o.viewport(0,0,e,s)),lt(o,()=>o.scissor(0,0,e,s))}setOutputMatrixWriteRegionDriver(t,e,s,o){this.throwIfDisposed(),lt(this.gl,()=>this.gl.scissor(t,e,s,o))}throwIfDisposed(){if(this.disposed)throw new Error("Attempted to use disposed GPGPUContext.")}throwIfNoProgram(){if(this.program==null)throw new Error("No GPU program is currently set.")}}function PP(n){let t=0;for(;t<n.length&&n[t]();++t);return t-1}const{addImpl:BP,bincountImpl:dy,bincountReduceImpl:zP,bitwiseAndImpl:VP,castImpl:WP,ceilImpl:UP,concatImpl:GP,equalImpl:HP,expImpl:qP,expm1Impl:XP,floorImpl:KP,gatherNdImpl:jP,gatherV2Impl:YP,greaterImpl:ZP,greaterEqualImpl:QP,lessImpl:JP,lessEqualImpl:t3,linSpaceImpl:e3,logImpl:n3,maxImpl:s3,maximumImpl:o3,minimumImpl:r3,multiplyImpl:i3,negImpl:a3,notEqualImpl:l3,prodImpl:c3,raggedGatherImpl:u3,raggedRangeImpl:h3,raggedTensorToTensorImpl:d3,rangeImpl:p3,rsqrtImpl:f3,scatterImpl:m3,sigmoidImpl:g3,simpleAbsImpl:py,sliceImpl:x3,sparseFillEmptyRowsImpl:b3,sparseReshapeImpl:y3,sparseSegmentReductionImpl:fy,sqrtImpl:w3,staticRegexReplaceImpl:C3,stridedSliceImpl:$3,stringNGramsImpl:I3,stringSplitImpl:v3,stringToHashBucketFastImpl:k3,subImpl:S3,tileImpl:N3,topKImpl:T3,transposeImpl:Np,uniqueImpl:E3}=_A;function my(n,t){return["x","y","z","w","u","v"].slice(0,t).map(e=>`${n}.${e}`)}function je(n,t){return t===1?[n]:my(n,t)}function R3(n,t){if(n===1)return"rc";let e="";for(let s=0;s<n;s++)e+=t[s],s<n-1&&(e+=",");return e}class A3{constructor(t){if(this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=t,this.rank=t.length,this.enableShapeUniforms=Ue(this.outputShape.length),this.rank===0)this.userCode=`
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;else{const e=je("rc",this.rank),s=Gt(this.rank),o=this.getOutOfBoundsCondition(e),r=this.getSetup(e),i=this.getOutput(e);this.userCode=`
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
            rEdge || cEdge ? 0. : getA(${e[3]})`}}class gy{constructor(t,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec3"}],this.outputShape=t,this.enableShapeUniforms=Ue(this.outputShape.length);let s="";for(let o=0;o<4;o++){let r="thisRC = rc;";o%2===1&&(r+="thisRC.z += 1;"),o>1&&(r+="thisRC.y += 1;"),s+=`
        ${r}
        ${o>0?"if(thisRC.y < rows && thisRC.z < cols){":""}
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[${o}] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        ${o>0?"}":""}
      `}this.userCode=`
      ${D3(e,this.enableShapeUniforms)}
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
    `}}function D3(n,t){return`
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      ${t?RL(["r","c","d"],"inputShape"):Do(["r","c","d"],n)}
      return ivec3(r, c, d);
    }
  `}class F3{constructor(t){this.gpgpu=t,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0,this.freeTextures={},this.usedTextures={},this.logEnabled=!1}acquireTexture(t,e,s){const o=by(e,s),r=yy(t,o,s);r in this.freeTextures||(this.freeTextures[r]=[]),r in this.usedTextures||(this.usedTextures[r]=[]);const i=xy(t,o,this.gpgpu.gl,this.gpgpu.textureConfig,s);if(this.freeTextures[r].length>0){this.numFreeTextures--,this.numUsedTextures++,this._numBytesFree-=i,this.log();const l=this.freeTextures[r].pop();return this.usedTextures[r].push(l),l}let a;return o===Fe.PACKED_2X2_FLOAT32?a=this.gpgpu.createPackedMatrixTexture(t[0],t[1]):o===Fe.PACKED_2X2_FLOAT16?a=this.gpgpu.createFloat16PackedMatrixTexture(t[0],t[1]):o===Fe.UNPACKED_FLOAT32?a=this.gpgpu.createFloat32MatrixTexture(t[0],t[1]):o===Fe.UNPACKED_FLOAT16?a=this.gpgpu.createFloat16MatrixTexture(t[0],t[1]):o===Fe.PACKED_4X1_UNSIGNED_BYTE&&(a=this.gpgpu.createUnsignedBytesMatrixTexture(t[0],t[1])),this.usedTextures[r].push(a),this.numUsedTextures++,this._numBytesAllocated+=i,this.log(),a}releaseTexture(t,e,s,o){if(this.freeTextures==null)return;const r=by(s,o),i=yy(e,r,o);i in this.freeTextures||(this.freeTextures[i]=[]);const a=xy(e,r,this.gpgpu.gl,this.gpgpu.textureConfig,o),l=H().getNumber("WEBGL_DELETE_TEXTURE_THRESHOLD");l!==-1&&this._numBytesAllocated>l?(this.gpgpu.deleteMatrixTexture(t.texture),this._numBytesAllocated-=a):(this.freeTextures[i].push(t),this.numFreeTextures++,this._numBytesFree+=a),this.numUsedTextures--;const c=this.usedTextures[i],u=c&&c.indexOf(t);if(u==null||u<0)throw new Error("Cannot release a texture that was never provided by this texture manager");c[u]=c[c.length-1],c.pop(),this.log()}log(){if(!this.logEnabled)return;const t=this.numFreeTextures+this.numUsedTextures;console.log("Free/Used",`${this.numFreeTextures} / ${this.numUsedTextures}`,`(${t})`);const e=this._numBytesFree/this._numBytesAllocated;console.log(`Bytes allocated: ${this._numBytesAllocated}`),console.log(`Bytes unused: ${this._numBytesFree} (${Math.round(100*e)}%)`)}get numBytesAllocated(){return this._numBytesAllocated}get numBytesFree(){return this._numBytesFree}getNumUsedTextures(){return this.numUsedTextures}getNumFreeTextures(){return this.numFreeTextures}dispose(){if(this.freeTextures!=null){for(const t in this.freeTextures)this.freeTextures[t].forEach(e=>{this.gpgpu.deleteMatrixTexture(e.texture)});for(const t in this.usedTextures)this.usedTextures[t].forEach(e=>{this.gpgpu.deleteMatrixTexture(e.texture)});this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0}}}function _3(n,t){const e=n;if(t===e.R32F)return 4;if(t===e.R16F)return 2;if(t===e.RGBA32F)return 16;if(t===n.RGBA)return 16;if(t===e.RGBA16F)return 8;if(t===e.RGBA8)return 4;throw new Error(`Unknown internal format ${t}`)}function xy(n,t,e,s,o){const r=O3(t,s);let i;if(o){const[l,c]=hr(n[0],n[1]);i=l*c}else{const[l,c]=ca(n[0],n[1]);i=l*c}const a=_3(e,r);return i*a}function O3(n,t){switch(n){case Fe.PACKED_2X2_FLOAT32:return uy(t);case Fe.PACKED_2X2_FLOAT16:return hy(t);case Fe.UNPACKED_FLOAT32:return ay(t);case Fe.UNPACKED_FLOAT16:return ly(t);case Fe.PACKED_4X1_UNSIGNED_BYTE:return cy(t);default:throw new Error(`Unknown physical texture type ${n}`)}}function M3(n){return H().getBool("WEBGL_RENDER_FLOAT32_ENABLED")?n?Fe.PACKED_2X2_FLOAT32:Fe.UNPACKED_FLOAT32:n?Fe.PACKED_2X2_FLOAT16:Fe.UNPACKED_FLOAT16}function by(n,t){if(n===Cn.UPLOAD)return Fe.PACKED_2X2_FLOAT32;if(n===Cn.RENDER||n==null)return M3(t);if(n===Cn.DOWNLOAD||n===Cn.PIXELS)return Fe.PACKED_4X1_UNSIGNED_BYTE;throw new Error(`Unknown logical texture type ${n}`)}function yy(n,t,e){return`${n[0]}_${n[1]}_${t}_${e}`}class us{constructor(t,e){this.variableNames=["A"],this.outputShape=t,this.enableShapeUniforms=Ue(this.outputShape.length),this.userCode=`
      float unaryOperation(float x) {
        ${e}
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `}}const Dn="if (isnan(x)) return x;",L3="return x;",wy="return abs(x);",P3="return (x >= 0.0) ? x : (exp(x) - 1.0);",B3=Dn+`
  return (x < 0.0) ? 0.0 : x;
`,z3=Dn+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,Ys="return x;",V3="return 1.0 / (1.0 + exp(-1.0 * x));";const W3="return x;",U3=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,G3=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,H3=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,q3="return 1.0 / (1.0 + exp(-1.0 * x));";class Zs{constructor(t,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.enableShapeUniforms=Ue(this.outputShape.length),this.userCode=`
      vec4 unaryOperation(vec4 x) {
        ${e}
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `}}class X3{constructor(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=t,this.enableShapeUniforms=Ue(this.outputShape.length);const e=t.length,s=je("rc",e),o=Gt(e),r=R3(e,s),i=s.slice(-2),a=e<=1?"rc":`vec2(${i.join(",")})`;this.userCode=`
      void main() {
        ${o} rc = getOutputCoords();
        vec4 packedInput = getA(${r});

        setOutput(getChannel(packedInput, ${a}));
      }
    `}}const K3=qm,j3=1e-7,Y3=1e-4,Pc={};function Z3(n){return n in Pc||(Pc[n]={}),Pc[n]}const Q3=H().getNumber("CPU_HANDOFF_SIZE_THRESHOLD"),J3=600;function tB(){return H().global.screen==null?1024:H().global.screen.height*H().global.screen.width*window.devicePixelRatio*J3/1024/1024}class Bc extends Po{nextDataId(){return Bc.nextDataId++}constructor(t){if(super(),this.pendingRead=new WeakMap,this.pendingDisposal=new WeakSet,this.dataRefCount=new WeakMap,this.numBytesInGPU=0,this.uploadWaitMs=0,this.downloadWaitMs=0,this.lastGlFlushTime=0,this.warnedAboutMemory=!1,this.pendingDeletes=0,this.disposed=!1,!H().getBool("HAS_WEBGL"))throw new Error("WebGL is not supported on this device");let e;if(t!=null){if(t instanceof Sp)e=t;else{const s=Xn(H().getNumber("WEBGL_VERSION"),t);e=new Sp(s)}this.binaryCache={},this.gpgpuCreatedLocally=!1}else{const s=Xn(H().getNumber("WEBGL_VERSION"));e=new Sp(s),this.binaryCache=Z3(H().getNumber("WEBGL_VERSION")),this.gpgpuCreatedLocally=!0}this.gpgpu=e,this.canvas=this.gpgpu.gl.canvas,this.textureManager=new F3(this.gpgpu),this.numMBBeforeWarning=tB(),this.texData=new wa(this,un())}numDataIds(){return this.texData.numDataIds()-this.pendingDeletes}writeTexture(t,e,s,o,r,i){const a=this.makeTensorInfo(e,s),l=this.texData.get(a.dataId);l.isPacked=!1,l.texture={texture:t,texShape:[o,r]},l.texShape=[o,r];const c=_c(e),u=new iy(c,!1,i),h=this.runWebGLProgram(u,[a],s,[[o,r]]);return h.shape=e,l.texture=null,this.disposeIntermediateTensorInfo(a),h.dataId}write(t,e,s){if((H().getBool("WEBGL_CHECK_NUMERICAL_PROBLEMS")||H().getBool("DEBUG"))&&this.checkNumericalProblems(t),s==="complex64"&&t!=null)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");const o={id:this.nextDataId()};return this.texData.set(o,{shape:e,dtype:s,values:t,usage:Cn.UPLOAD,refCount:1}),o}refCount(t){return this.texData.has(t)?this.texData.get(t).refCount:0}incRef(t){const e=this.texData.get(t);e.refCount++}decRef(t){if(this.texData.has(t)){const e=this.texData.get(t);e.refCount--}}move(t,e,s,o,r){if(H().getBool("DEBUG")&&this.checkNumericalProblems(e),o==="complex64")throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.texData.set(t,{shape:s,dtype:o,values:e,usage:Cn.UPLOAD,refCount:r})}disposeIntermediateTensorInfo(t){this.disposeData(t.dataId)}readSync(t){const e=this.texData.get(t),{values:s,dtype:o,complexTensorInfos:r,slice:i,shape:a,isPacked:l}=e;if(i!=null){let d;l?d=new Zs(a,Ys):d=new us(a,Ys);const p=this.runWebGLProgram(d,[{dataId:t,shape:a,dtype:o}],o),f=this.readSync(p.dataId);return this.disposeIntermediateTensorInfo(p),f}if(s!=null)return this.convertAndCacheOnCPU(t);if(o==="string")return s;const c=this.activeTimers!=null;let u;c&&(u=Qe());let h;if(o==="complex64"){const d=this.readSync(r.real.dataId),p=this.readSync(r.imag.dataId);h=ys(d,p)}else h=this.getValuesFromTexture(t);return c&&(this.downloadWaitMs+=Qe()-u),this.convertAndCacheOnCPU(t,h)}read(t){return Z(this,null,function*(){if(this.pendingRead.has(t)){const f=this.pendingRead.get(t);return new Promise(m=>f.push(m))}const e=this.texData.get(t),{values:s,shape:o,slice:r,dtype:i,complexTensorInfos:a,isPacked:l}=e;if(r!=null){let f;l?f=new Zs(o,Ys):f=new us(o,Ys);const m=this.runWebGLProgram(f,[{dataId:t,shape:o,dtype:i}],i),g=this.read(m.dataId);return this.disposeIntermediateTensorInfo(m),g}if(s!=null)return this.convertAndCacheOnCPU(t);if(H().getBool("DEBUG")&&!H().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")&&H().getNumber("WEBGL_VERSION")===2)throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");let c=null,u;if(i!=="complex64"&&H().get("WEBGL_BUFFER_SUPPORTED")){u=this.decode(t);const f=this.texData.get(u.dataId);c=this.gpgpu.createBufferFromTexture(f.texture.texture,...Ac(o))}this.pendingRead.set(t,[]),i!=="complex64"&&(yield this.gpgpu.createAndWaitForFence());let h;if(i==="complex64"){const f=yield Promise.all([this.read(a.real.dataId),this.read(a.imag.dataId)]),m=f[0],g=f[1];h=ys(m,g)}else if(c==null)h=this.getValuesFromTexture(t);else{const f=K(o);h=this.gpgpu.downloadFloat32MatrixFromBuffer(c,f)}if(u!=null&&this.disposeIntermediateTensorInfo(u),c!=null){const f=this.gpgpu.gl;lt(f,()=>f.deleteBuffer(c))}const d=this.convertAndCacheOnCPU(t,h),p=this.pendingRead.get(t);return this.pendingRead.delete(t),p.forEach(f=>f(d)),this.pendingDisposal.has(t)&&(this.pendingDisposal.delete(t),this.disposeData(t)&&un().removeDataId(t,this),this.pendingDeletes--),d})}readToGPU(t,e={}){const s=this.texData.get(t),{values:o,shape:r,slice:i,dtype:a,isPacked:l,texture:c}=s;if(a==="complex64")throw new Error("Does not support reading texture for complex64 dtype.");if(i!=null){let p;l?p=new Zs(r,Ys):p=new us(r,Ys);const f=this.runWebGLProgram(p,[{dataId:t,shape:r,dtype:a}],a),m=this.readToGPU(f,e);return this.disposeIntermediateTensorInfo(f),m}if(c==null)throw o!=null?new Error("Data is not on GPU but on CPU."):new Error("There is no data on GPU or CPU.");const u=this.decode(t,e.customTexShape),h=un().makeTensorFromTensorInfo(u),d=this.texData.get(u.dataId);return Object.assign({tensorRef:h},d.texture)}bufferSync(t){const e=this.readSync(t.dataId);if(t.dtype==="string")try{const s=e.map(o=>Ds(o));return Et(t.shape,t.dtype,s)}catch(s){throw new Error("Failed to decode encoded string bytes into utf-8")}return Et(t.shape,t.dtype,e)}checkNumericalProblems(t){if(t!=null)for(let e=0;e<t.length;e++){const s=t[e];if(!sL(s))throw H().getBool("WEBGL_RENDER_FLOAT32_CAPABLE")?Error(`The value ${s} cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'`):Error(`The value ${s} cannot be represented on this device.`)}}getValuesFromTexture(t){const{shape:e,dtype:s,isPacked:o}=this.texData.get(t),r=K(e);if(H().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")){const d=this.decode(t),p=this.texData.get(d.dataId),f=this.gpgpu.downloadMatrixFromPackedTexture(p.texture.texture,...Ac(e)).subarray(0,r);return this.disposeIntermediateTensorInfo(d),f}const i=H().getBool("WEBGL_PACK")&&o===!0,a=i?_c(e):e,l=i?new yP(a):new bP(a),c=this.runWebGLProgram(l,[{shape:a,dtype:s,dataId:t}],"float32"),u=this.texData.get(c.dataId),h=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(u.texture.texture,u.texShape[0],u.texShape[1]).subarray(0,r);return this.disposeIntermediateTensorInfo(c),h}timerAvailable(){return H().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0}time(t){const e=this.activeTimers,s=[];let o=!1;this.programTimersStack==null?(this.programTimersStack=s,o=!0):this.activeTimers.push(s),this.activeTimers=s,t();const r=ro(this.activeTimers.map(l=>l.query)).filter(l=>l!=null),i=ro(this.activeTimers.map(l=>l.name)).filter(l=>l!=null);this.activeTimers=e,o&&(this.programTimersStack=null);const a={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null};return Z(this,null,function*(){if(H().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0){const l=yield Promise.all(r);a.kernelMs=_w(l),a.getExtraProfileInfo=()=>l.map((c,u)=>({name:i[u],ms:c})).map(c=>`${c.name}: ${c.ms}`).join(", ")}else a.kernelMs={error:"WebGL query timers are not supported in this environment."};return this.uploadWaitMs=0,this.downloadWaitMs=0,a})}memory(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU,numBytesInGPUAllocated:this.textureManager.numBytesAllocated,numBytesInGPUFree:this.textureManager.numBytesFree}}startTimer(){return H().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?this.gpgpu.beginQuery():{startMs:Qe(),endMs:null}}endTimer(t){return H().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?(this.gpgpu.endQuery(),t):(t.endMs=Qe(),t)}getQueryTime(t){return Z(this,null,function*(){if(H().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0)return this.gpgpu.waitForQueryAndGetTime(t);const e=t;return e.endMs-e.startMs})}disposeData(t,e=!1){if(this.pendingDisposal.has(t))return!1;if(!this.texData.has(t))return!0;if(e?this.texData.get(t).refCount=0:this.texData.get(t).refCount--,!e&&this.texData.get(t).refCount>0)return!1;if(this.pendingRead.has(t))return this.pendingDisposal.add(t),this.pendingDeletes++,!1;this.releaseGPUData(t);const{complexTensorInfos:s}=this.texData.get(t);return s!=null&&(this.disposeData(s.real.dataId,e),this.disposeData(s.imag.dataId,e)),this.texData.delete(t),!0}releaseGPUData(t){const{texture:e,dtype:s,texShape:o,usage:r,isPacked:i,slice:a}=this.texData.get(t),l=a&&a.origDataId||t,c=this.dataRefCount.get(l);c>1?this.dataRefCount.set(l,c-1):(this.dataRefCount.delete(l),e!=null&&(this.numBytesInGPU-=this.computeBytes(o,s),this.textureManager.releaseTexture(e,o,r,i)));const u=this.texData.get(t);u.texture=null,u.texShape=null,u.isPacked=!1,u.slice=null}getTexture(t){return this.uploadToGPU(t),this.texData.get(t).texture.texture}getDataInfo(t){return this.texData.get(t)}shouldExecuteOnCPU(t,e=Q3){return H().getBool("WEBGL_CPU_FORWARD")&&t.every(s=>this.texData.get(s.dataId).texture==null&&K(s.shape)<e)}getGPGPUContext(){return this.gpgpu}where(t){gn("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");const e=t.dataSync();return K3(t.shape,e)}packedUnaryOp(t,e,s){const o=new Zs(t.shape,e),r=this.compileAndRun(o,[t],s);return un().makeTensorFromTensorInfo(r)}abs(t){if(this.shouldExecuteOnCPU([t])&&t.dtype!=="complex64"){const o=py(this.texData.get(t.dataId).values);return this.makeOutput(t.shape,t.dtype,o)}if(H().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,wy,t.dtype);const e=new us(t.shape,wy),s=this.compileAndRun(e,[t]);return un().makeTensorFromTensorInfo(s)}makeTensorInfo(t,e,s){let o;if(e==="string"&&s!=null&&s.length>0&&Er(s[0])){const r=s.map(i=>As(i));o=this.write(r,t,e)}else o=this.write(s,t,e);return this.texData.get(o).usage=null,{dataId:o,shape:t,dtype:e}}makeOutput(t,e,s){return un().makeTensorFromTensorInfo(this.makeTensorInfo(t,e,s),this)}unpackTensor(t){const e=new X3(t.shape);return this.runWebGLProgram(e,[t],t.dtype)}packTensor(t){const e=new A3(t.shape);return this.runWebGLProgram(e,[t],t.dtype,null,!0)}packedReshape(t,e){const s=[dr(t.shape),...pr(t.shape)],o={dtype:t.dtype,shape:s,dataId:t.dataId},r=[dr(e),...pr(e)],i=new gy(r,s),a=!0,l=[s],c=this.runWebGLProgram(i,[o],t.dtype,l,a);return{dataId:c.dataId,shape:e,dtype:c.dtype}}decode(t,e){const s=this.texData.get(t),{isPacked:o,shape:r,dtype:i}=s;if(e!=null){const d=K(r),p=e[0]*e[1]*4;T(d<=p,()=>"customTexShape is too small. Row * Column * 4 should be equal or larger than the size of the tensor data.")}const a=_c(r);let l;o?l=new xP(a):l=new gP(a);const c=!0,u=[e!=null?e:Ac(a)],h=this.runWebGLProgram(l,[{shape:a,dtype:i,dataId:t}],i,u,c,e);return{dtype:i,shape:r,dataId:h.dataId}}runWebGLProgram(t,e,s,o,r=!1,i){const a=this.makeTensorInfo(t.outputShape,s),l=this.texData.get(a.dataId);if(t.packedOutput&&(l.isPacked=!0),t.outPackingScheme===la.DENSE){const x=i!=null?i:Ac(t.outputShape);l.texShape=x.map(b=>b*2)}if(t.outTexUsage!=null&&(l.usage=t.outTexUsage),K(a.shape)===0)return l.values=Pe(a.dtype,0),a;const c=[],u=e.map(x=>{if(x.dtype==="complex64")throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");let b=this.texData.get(x.dataId);if(b.texture==null){if(!t.packedInputs&&K(x.shape)<=H().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM"))return{shape:x.shape,texData:null,isUniform:!0,uniformValues:b.values};t.packedInputs&&(b.isPacked=!0,b.shape=x.shape)}if(this.uploadToGPU(x.dataId),!!b.isPacked!=!!t.packedInputs)x=b.isPacked?this.unpackTensor(x):this.packTensor(x),c.push(x),b=this.texData.get(x.dataId);else if(b.isPacked&&!Mc(b.shape,x.shape)){const y=x,w=x.shape;x.shape=b.shape,x=this.packedReshape(x,w),c.push(x),b=this.texData.get(x.dataId),y.shape=w}return{shape:x.shape,texData:b,isUniform:!1}});this.uploadToGPU(a.dataId);const h={shape:a.shape,texData:l,isUniform:!1},d=mP(t,u,h),p=this.getAndSaveBinary(d,()=>pP(this.gpgpu,t,u,h)),f=this.activeTimers!=null;let m;f&&(m=this.startTimer()),H().get("ENGINE_COMPILE_ONLY")||fP(this.gpgpu,p,u,h,o),c.forEach(x=>this.disposeIntermediateTensorInfo(x)),f&&(m=this.endTimer(m),this.activeTimers.push({name:t.constructor.name,query:this.getQueryTime(m)}));const g=H().getNumber("WEBGL_FLUSH_THRESHOLD");if(g>0){const x=Qe();x-this.lastGlFlushTime>g&&(this.gpgpu.gl.flush(),this.lastGlFlushTime=x)}if(!H().getBool("WEBGL_LAZILY_UNPACK")&&l.isPacked&&r===!1){const x=this.unpackTensor(a);return this.disposeIntermediateTensorInfo(a),x}return a}compileAndRun(t,e,s,o,r=!1){return s=s||e[0].dtype,this.runWebGLProgram(t,e,s,o,r)}getAndSaveBinary(t,e){return t in this.binaryCache||(this.binaryCache[t]=e()),this.binaryCache[t]}getTextureManager(){return this.textureManager}dispose(){this.disposed||(H().getBool("IS_TEST")||Object.keys(this.binaryCache).forEach(e=>{this.gpgpu.deleteProgram(this.binaryCache[e].webGLProgram),delete this.binaryCache[e]}),this.textureManager.dispose(),this.canvas!=null&&typeof HTMLCanvasElement!="undefined"&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),this.disposed=!0)}floatPrecision(){return this.floatPrecisionValue==null&&(this.floatPrecisionValue=U(()=>{if(!H().get("WEBGL_RENDER_FLOAT32_ENABLED")){const t=H().getBool("DEBUG");H().set("DEBUG",!1);const e=this.abs(Vt(1e-8)).dataSync()[0];if(H().set("DEBUG",t),e>0)return 32}return 16})),this.floatPrecisionValue}epsilon(){return this.floatPrecision()===32?j3:Y3}uploadToGPU(t){const e=this.texData.get(t),{shape:s,dtype:o,values:r,texture:i,usage:a,isPacked:l}=e;if(i!=null)return;const c=this.activeTimers!=null;let u;c&&(u=Qe());let h=e.texShape;if(h==null&&(h=CL(s,l),e.texShape=h),r!=null){const d=_c(s);let p,f=h[1],m=h[0];const g=r instanceof Uint8Array||r instanceof Uint8ClampedArray;(l||!g)&&([f,m]=hr(h[0],h[1])),l?p=new CP(d,g):p=new iy(d,g);const x=g?[m,f]:h,b=this.makeTensorInfo(x,o),y=this.texData.get(b.dataId);g?y.usage=Cn.PIXELS:y.usage=Cn.UPLOAD,y.texShape=x,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(b.dataId),f,m,r);const w=[[m,f]],I=this.runWebGLProgram(p,[b],o,w,!0),v=this.texData.get(I.dataId);e.texShape=v.texShape,e.isPacked=v.isPacked,e.usage=v.usage,H().get("ENGINE_COMPILE_ONLY")?this.disposeData(I.dataId):(e.texture=v.texture,e.values=null,this.texData.delete(I.dataId)),this.disposeIntermediateTensorInfo(b),c&&(this.uploadWaitMs+=Qe()-u)}else{const d=this.acquireTexture(h,a,o,l);e.texture=d}}convertAndCacheOnCPU(t,e){const s=this.texData.get(t),{dtype:o}=s;return e!=null&&(s.values=eB(e,o)),s.values}acquireTexture(t,e,s,o){if(this.numBytesInGPU+=this.computeBytes(t,s),!this.warnedAboutMemory&&this.numBytesInGPU>this.numMBBeforeWarning*1024*1024){const r=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn(`High memory usage in GPU: ${r} MB, most likely due to a memory leak`)}return this.textureManager.acquireTexture(t,e,o)}computeBytes(t,e){return t[0]*t[1]*Ca(e)}checkCompileCompletion(){for(const[,t]of Object.entries(this.binaryCache))this.checkCompletion_(t)}checkCompileCompletionAsync(){return Z(this,null,function*(){const t=[];if(this.gpgpu.parallelCompilationExtension){for(const[,e]of Object.entries(this.binaryCache))t.push(this.checkCompletionAsync_(e));return Promise.all(t)}else{for(const[,e]of Object.entries(this.binaryCache)){const s=new Promise(o=>{try{this.checkCompletion_(e),o(!0)}catch(r){throw r}});t.push(s)}return Promise.all(t)}})}checkCompletionAsync_(t){return Z(this,null,function*(){return this.gpgpu.gl.getProgramParameter(t.webGLProgram,this.gpgpu.parallelCompilationExtension.COMPLETION_STATUS_KHR)?this.checkCompletion_(t):(yield fg(),this.checkCompletionAsync_(t))})}checkCompletion_(t){if(this.gpgpu.gl.getProgramParameter(t.webGLProgram,this.gpgpu.gl.LINK_STATUS)===!1)throw console.log(this.gpgpu.gl.getProgramInfoLog(t.webGLProgram)),this.gpgpu.gl.getShaderParameter(t.fragmentShader,this.gpgpu.gl.COMPILE_STATUS)===!1?(Y1(t.source,this.gpgpu.gl.getShaderInfoLog(t.fragmentShader)),new Error("Failed to compile fragment shader.")):new Error("Failed to link vertex and fragment shaders.");return!0}getUniformLocations(){for(const t of Object.values(this.binaryCache)){this.gpgpu.buildVao(t.webGLProgram);const{variablesLocations:e,customUniformLocations:s,infLoc:o,nanLoc:r,outShapeLocation:i,outShapeStridesLocation:a,outTexShapeLocation:l}=oy(this.gpgpu,t.program,t.webGLProgram);t.variablesLocations=e,t.customUniformLocations=s,t.infLoc=o,t.nanLoc=r,t.outShapeLocation=i,t.outShapeStridesLocation=a,t.outTexShapeLocation=l}}createTensorFromGPUData(t,e,s){t.channels=t.channels||"RGBA";const{texture:o,height:r,width:i,channels:a}=t,l=un().backend;if(!l.gpgpu.gl.isTexture(o))throw new Error("The texture is invalid. Also, please make sure the texture and the TFJS WebGL backend are using the same canvas. If you want to use your own custom canvas, you have to create and use the custom TFJS WebGL backend created from the canvas through 'new tf.MathBackendWebGL(customCanvas)'.");const c=l.writeTexture(o,e,s,r,i,a);return un().makeTensorFromDataId(c,e,s,l)}}Bc.nextDataId=0;function eB(n,t){if(t==="float32"||t==="complex64")return n;if(t==="int32"||t==="bool"){const e=t==="int32"?new Int32Array(n.length):new Uint8Array(n.length);for(let s=0;s<e.length;++s)e[s]=Math.round(n[s]);return e}else throw new Error(`Unknown dtype ${t}`)}Gf()&&Yf("webgl",()=>new Bc,2);const Tp=`
  if (isnan(a)) return a;
  if (isnan(b)) return b;
`;class _o{constructor(t,e,s){this.variableNames=["A","B"],this.outputShape=$t(e,s),this.enableShapeUniforms=Ue(this.outputShape.length),this.userCode=`
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
`;class br{constructor(t,e,s,o=!1){this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=$t(e,s);const r=this.outputShape.length;this.enableShapeUniforms=Ue(r);let i="";if(o)if(r===0||K(this.outputShape)===1)i=`
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;else if(i=`
          ${Gt(r)} coords = getOutputCoords();
        `,r===1)this.enableShapeUniforms?i+=`
            result.y = (coords + 1) >= outShape ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `:i+=`
            result.y = (coords + 1) >= ${this.outputShape[0]} ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;else{const l=je("coords",r);this.enableShapeUniforms?i+=`
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
    `}}function fn(n){const{inputs:t,backend:e}=n,{x:s}=t;return e.incRef(s.dataId),{dataId:s.dataId,shape:s.shape,dtype:s.dtype}}const nB={kernelName:Yr,backendName:"webgl",kernelFunc:fn};function Qs(n){const{inputs:t,backend:e}=n,{real:s,imag:o}=t,r=e.makeTensorInfo(s.shape,"complex64"),i=e.texData.get(r.dataId),a=fn({inputs:{x:s},backend:e}),l=fn({inputs:{x:o},backend:e});return i.complexTensorInfos={real:a,imag:l},r}const sB={kernelName:yu,backendName:"webgl",kernelFunc:Qs};const Cy="return (a < 0.) ? b * a : a;",$y=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`;function oB(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{alpha:r}=s,i=e.makeTensorInfo([],"float32",Rs(r,"float32")),a=H().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new br($y,o.shape,i.shape):new _o(Cy,o.shape,i.shape),l=e.runWebGLProgram(a,[o,i],"float32");return e.disposeIntermediateTensorInfo(i),l}const rB={kernelName:Wa,backendName:"webgl",kernelFunc:oB};const Iy="return (a < 0.) ? b * a : a;",vy=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`;function iB(n){const{inputs:t,backend:e}=n,{x:s,alpha:o}=t,r=H().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new br(vy,s.shape,o.shape):new _o(Iy,s.shape,o.shape);return e.runWebGLProgram(r,[s,o],"float32")}const aB={kernelName:al,backendName:"webgl",kernelFunc:iB};const yr="if (isnan(x)) return x;";function Mt({opSnippet:n,packedOpSnippet:t,cpuKernelImpl:e,dtype:s}){return({inputs:o,backend:r})=>{const{x:i}=o,a=r,l=s||i.dtype;if(a.shouldExecuteOnCPU([i])&&e!=null){const h=a.texData.get(i.dataId),d=e(h.values,l);return a.makeTensorInfo(i.shape,l,d)}const c=H().getBool("WEBGL_PACK_UNARY_OPERATIONS")&&t!=null;let u;return c?u=new Zs(i.shape,t):u=new us(i.shape,n),a.runWebGLProgram(u,[i],l)}}function _e({opSnippet:n,packedOpSnippet:t,checkOutOfBounds:e=!1,supportsComplex:s=!1,cpuKernelImpl:o,dtype:r}){return({inputs:i,backend:a})=>{const{a:l,b:c}=i,u=a;if(s&&l.dtype==="complex64"){const f=u.texData.get(l.dataId),m=u.texData.get(c.dataId),[g,x]=[[f.complexTensorInfos.real,m.complexTensorInfos.real],[f.complexTensorInfos.imag,m.complexTensorInfos.imag]].map(y=>{const[w,C]=y,I={dataId:w.dataId,dtype:w.dtype,shape:l.shape},v={dataId:C.dataId,dtype:C.dtype,shape:c.shape},N=new _o(n,l.shape,c.shape);return u.runWebGLProgram(N,[I,v],cn(w.dtype,C.dtype))}),b=Qs({inputs:{real:g,imag:x},backend:u});return u.disposeIntermediateTensorInfo(g),u.disposeIntermediateTensorInfo(x),b}const h=r||cn(l.dtype,c.dtype);if((l.dtype==="string"||c.dtype==="string"||u.shouldExecuteOnCPU([l,c]))&&o!=null){const f=u.texData.get(l.dataId).values,m=u.texData.get(c.dataId).values,g=l.dtype==="string"?ws(f):f,x=l.dtype==="string"?ws(m):m,[b,y]=o(l.shape,c.shape,g,x,h),w=u.makeTensorInfo(y,h),C=u.texData.get(w.dataId);return C.values=b,w}const d=H().getBool("WEBGL_PACK_BINARY_OPERATIONS")&&t!=null;let p;return d?p=new br(t,l.shape,c.shape,e):p=new _o(n,l.shape,c.shape),u.runWebGLProgram(p,[l,c],h)}}function da(n,t=!1){if(n==="linear")return t?W3:L3;if(n==="relu")return t?G3:B3;if(n==="elu")return t?U3:P3;if(n==="relu6")return t?H3:z3;if(n==="prelu")return t?vy:Iy;if(n==="leakyrelu")return t?$y:Cy;if(n==="sigmoid")return t?q3:V3;throw new Error(`Activation ${n} has not been implemented for the WebGL backend.`)}class ky{constructor(t,e,s,o=!1,r=!1,i=!1,a=null,l=!1,c=!1){this.variableNames=["matrixA","matrixB"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=s,this.enableShapeUniforms=Ue(this.outputShape.length);const u=o?t[1]:t[2],h=Math.ceil(u/2),d=o?"i * 2, rc.y":"rc.y, i * 2",p=r?"rc.z, i * 2":"i * 2, rc.z",f=o?["a.xxyy","a.zzww"]:["a.xxzz","a.yyww"],m=r?["b.xzxz","b.ywyw"]:["b.xyxy","b.zwzw"];let g="",x="";a&&(l?g=`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${a}
        }`:c?g=`vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${a}
        }`:g=`vec4 activation(vec4 x) {
          ${a}
        }`,x="result = activation(result);");const b=i?"result += getBiasAtOutCoords();":"";i&&this.variableNames.push("bias"),l&&this.variableNames.push("preluActivationWeights"),c&&this.variableNames.push("leakyreluAlpha");let y="rc.x",w="rc.x";t[0]<e[0]?y=`imod(rc.x, ${t[0]})`:e[0]<t[0]&&(w=`imod(rc.x, ${e[0]})`),this.userCode=`
      ${g}
      // Don't use uniform for sharedDimensionPacked for performance.
      const float sharedDimension = ${h}.0;

      vec4 dot2x2ARowBCol(ivec3 rc) {
        vec4 result = vec4(0);
        int batchA = ${y};
        int batchB = ${w};
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
    `}}const Sy={REAL:"return areal * breal - aimag * bimag;",IMAG:"return areal * bimag + aimag * breal;"};class Ny{constructor(t,e,s){this.variableNames=["AReal","AImag","BReal","BImag"],this.outputShape=$t(e,s),this.userCode=`
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
    `}}const Ty="return a * b;";function Ep(n){const{inputs:t,backend:e}=n,{a:s,b:o}=t,r=cn(s.dtype,o.dtype);if(s.dtype==="complex64"){const a=e.texData.get(s.dataId),l=e.texData.get(o.dataId),c=new Ny(Sy.REAL,s.shape,o.shape),u=new Ny(Sy.IMAG,s.shape,o.shape),h=[{dataId:a.complexTensorInfos.real.dataId,dtype:a.complexTensorInfos.real.dtype,shape:s.shape},{dataId:a.complexTensorInfos.imag.dataId,dtype:a.complexTensorInfos.imag.dtype,shape:s.shape},{dataId:l.complexTensorInfos.real.dataId,dtype:l.complexTensorInfos.real.dtype,shape:o.shape},{dataId:l.complexTensorInfos.imag.dataId,dtype:l.complexTensorInfos.imag.dtype,shape:o.shape}],d=e.runWebGLProgram(c,h,"float32"),p=e.runWebGLProgram(u,h,"float32"),f=Qs({inputs:{real:d,imag:p},backend:e});return e.disposeIntermediateTensorInfo(d),e.disposeIntermediateTensorInfo(p),f}if(e.shouldExecuteOnCPU([s,o])){const a=e.texData.get(s.dataId),l=e.texData.get(o.dataId),[c,u]=i3(s.shape,o.shape,a.values,l.values,r),h=e.makeTensorInfo(u,r),d=e.texData.get(h.dataId);return d.values=c,h}let i;return H().getBool("WEBGL_PACK_BINARY_OPERATIONS")?i=new br(Ty,s.shape,o.shape):i=new _o(Ty,s.shape,o.shape),e.runWebGLProgram(i,[s,o],r)}const lB={kernelName:ri,backendName:"webgl",kernelFunc:Ep};function cB(n,t,e){const s=[dr(n.shape),...pr(n.shape)],o={dtype:n.dtype,shape:s,dataId:n.dataId},r=[dr(t),...pr(t)],i=new gy(r,s),a=!0,l=[s],c=e.runWebGLProgram(i,[o],n.dtype,l,a);return{dataId:c.dataId,shape:t,dtype:c.dtype}}function rt(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{shape:r}=s,i=e,a=K(o.shape),l=Xp(r,a),c=K(l);T(a===c,()=>`The new shape (${l}) has ${c} elements and the old shape (${o.shape}) has ${a} elements. The new shape and old shape must have the same number of elements.`);const u=i.texData.get(o.dataId);return u.isPacked&&!Mc(o.shape,l)&&!(u.texture!==null&&Mc(u.shape,l))?cB(o,l,i):(i.incRef(o.dataId),{dataId:o.dataId,shape:l,dtype:o.dtype})}const uB={kernelName:cl,backendName:"webgl",kernelFunc:rt};class Ey{constructor(t,e){this.variableNames=["x"];const{windowSize:s,batchSize:o,inSize:r,outSize:i}=t;this.outputShape=[o,i];const a=Math.floor(s/4)*4,l=s%4;let c="sumValue += dot(values, ones);";if(e!=null){const h=1/e;c=`sumValue += dot(values * ${Bo(h)?h.toPrecision(2):h}, ones);`}let u="";r%s>0&&(u=`
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
    `}}class hB{constructor(t,e){this.variableNames=["x"];const{windowSize:s,batchSize:o,inSize:r,outSize:i}=t;this.outputShape=[o,i];let a="0.0",l="";e==="prod"?a="1.0":e==="min"?(a="1.0 / 1e-20",l="min"):e==="max"&&(a="-1.0 / 1e-20",l="max");let c=`${e}(${e}(${e}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;e==="sum"?c="sumValue":e==="prod"?c="prodValue":e==="all"?c="allValue":e==="any"&&(c="anyValue");const u=Math.floor(s/4)*4,h=s%4;let d=`
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
    `}}function dB(n){const t=[];for(;t.length===0||t[t.length-1].outSize!==1;){const e=t.length?t[t.length-1].outSize:n[1],s=Zl(e);t.push({inSize:e,windowSize:s,outSize:Math.ceil(e/s)})}return t}function Mo(n,t,e,s){const o=dB(n.shape);let r=n;for(let i=0;i<o.length;i++){const{inSize:a,windowSize:l,outSize:c}=o[i];let u,h;e==="mean"?u=i===0?new Ey({windowSize:l,inSize:a,batchSize:n.shape[0],outSize:c},a):new Ey({windowSize:l,inSize:a,batchSize:n.shape[0],outSize:c}):u=new hB({windowSize:l,inSize:a,batchSize:n.shape[0],outSize:c},e),h=r,r=s.runWebGLProgram(u,[r],t),h.dataId!==n.dataId&&s.disposeIntermediateTensorInfo(h)}return r}class pB{constructor(t,e){this.variableNames=["A"];const s=new Array(t.length);for(let i=0;i<s.length;i++)s[i]=t[e[i]];this.outputShape=s,this.rank=s.length;const o=Gt(this.rank),r=fB(e);this.userCode=`
    void main() {
      ${o} resRC = getOutputCoords();
      setOutput(getA(${r}));
    }
    `}}function fB(n){const t=n.length;if(t>6)throw Error(`Transpose for rank ${t} is not yet supported`);const e=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u","resRC.v"],s=new Array(t);for(let o=0;o<n.length;o++)s[n[o]]=e[o];return s.join()}class mB{constructor(t,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0;const s=new Array(t.length);for(let u=0;u<s.length;u++)s[u]=t[e[u]];if(this.outputShape=s,this.rank=s.length,this.rank>6)throw Error(`Packed transpose for rank ${this.rank} is not yet supported.`);const o=Gt(this.rank),r=my("rc",this.rank),i=new Array(this.rank);for(let u=0;u<e.length;u++)i[e[u]]=r[u];const a=`vec2(${i.slice(-2).join()})`,l=`++${r[this.rank-1]} < ${s[this.rank-1]}`,c=`getChannel(getA(${i.join()}), ${a})`;this.userCode=`
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
    `}}function zc(n,t,e){const s=H().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new mB(n.shape,t):new pB(n.shape,t);return e.runWebGLProgram(s,[n],n.dtype)}function gB(n,t,e,s){const o=t,r=n.shape.length,i=Tt(o,n.shape);let a=i;const l=ee(a,r),c=l!=null;let u=n;c&&(u=zc(n,l,s),a=ie(a.length,r)),De("sum",a,r);const[h,d]=ke(u.shape,a);let p=h;e&&(p=he(h,i));const f=K(d),g=K(n.shape)/f,x=rt({inputs:{x:u},attrs:{shape:[g,f]},backend:s}),b=ch(n.dtype),y=Mo(x,b,"sum",s),w=rt({inputs:{x:y},attrs:{shape:p},backend:s});return s.disposeIntermediateTensorInfo(x),s.disposeIntermediateTensorInfo(y),c&&s.disposeIntermediateTensorInfo(u),w}function Vc(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,keepDims:i}=s;return gB(o,r,i,e)}const xB={kernelName:ml,backendName:"webgl",kernelFunc:Vc};function Ye(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{perm:r}=s,i=e,a=o.shape.length,l=new Array(a);for(let u=0;u<l.length;u++)l[u]=o.shape[r[u]];let c;if(i.shouldExecuteOnCPU([o])){const h=i.texData.get(o.dataId).values,d=Np(h,o.shape,o.dtype,r,l);c=i.makeTensorInfo(l,o.dtype);const p=i.texData.get(c.dataId);p.values=d}else c=zc(o,r,i);return c}const bB={kernelName:Go,backendName:"webgl",kernelFunc:Ye};const Ry=1e3;function Wc({a:n,b:t,transposeA:e,transposeB:s,backend:o,bias:r=null,preluActivationWeights:i=null,leakyreluAlpha:a=0,activation:l=null}){const c=n.shape.length,u=t.shape.length,h=e?n.shape[c-2]:n.shape[c-1],d=s?t.shape[u-1]:t.shape[u-2],p=e?n.shape[c-1]:n.shape[c-2],f=s?t.shape[u-2]:t.shape[u-1],m=n.shape.slice(0,-2),g=t.shape.slice(0,-2),x=K(m),b=K(g),w=$t(n.shape.slice(0,-2),t.shape.slice(0,-2)).concat([p,f]);T(h===d,()=>`Error in matMul: inner shapes (${h}) and (${d}) of Tensors with shapes ${n.shape} and ${t.shape} and transposeA=${e} and transposeB=${s} must match.`);const C=e?[x,h,p]:[x,p,h],I=s?[b,f,d]:[b,d,f],v=rt({inputs:{x:n},backend:o,attrs:{shape:C}}),N=rt({inputs:{x:t},backend:o,attrs:{shape:I}}),k=[v,N],S=Math.max(x,b),$=e?v.shape[1]:v.shape[2],E=r!=null,R=i!=null,F=l==="leakyrelu",A=l!=null?da(l,!0):null,O=E||R||F||A!=null;let L;if((p===1||f===1)&&$>Ry&&O===!1){let V=v,G=N;e&&(V=Ye({inputs:{x:v},backend:o,attrs:{perm:[0,2,1]}}),k.push(V)),s&&(G=Ye({inputs:{x:N},backend:o,attrs:{perm:[0,2,1]}}),k.push(G));const q=f!==1,j=f===1;let Y=V;q&&(Y=rt({inputs:{x:V},backend:o,attrs:{shape:[S,$,1]}}),k.push(Y));const J=f===1?2:1;let tt=G;j&&(tt=rt({inputs:{x:G},backend:o,attrs:{shape:[S,1,$]}}),k.push(tt));const st=Ep({inputs:{a:Y,b:tt},backend:o});L=Vc({inputs:{x:st},backend:o,attrs:{axis:J,keepDims:!0}}),k.push(st)}else{const V=cn(n.dtype,t.dtype),G=new ky(C,I,[S,p,f],e,s,E,A,R,F),q=[v,N];if(r!=null&&q.push(r),R&&q.push(i),F){const j=o.makeTensorInfo([],"float32",Rs(a,"float32"));q.push(j),k.push(j)}L=o.runWebGLProgram(G,q,V)}const _=rt({inputs:{x:L},backend:o,attrs:{shape:w}});k.push(L);for(const V of k)o.disposeIntermediateTensorInfo(V);return _}function yB(n){const{inputs:t,backend:e,attrs:s}=n,{a:o,b:r,bias:i,preluActivationWeights:a}=t,{transposeA:l,transposeB:c,activation:u,leakyreluAlpha:h}=s;return Wc({a:o,b:r,transposeA:l,transposeB:c,backend:e,bias:i,preluActivationWeights:a,leakyreluAlpha:h,activation:u})}const wB={kernelName:$l,backendName:"webgl",kernelFunc:yB};const Ay="return abs(x);";function CB(n){const{inputs:t,backend:e}=n,{x:s}=t;if(e.shouldExecuteOnCPU([s])&&s.dtype!=="complex64"){const r=e.texData.get(s.dataId),i=py(r.values);return e.makeTensorInfo(s.shape,s.dtype,i)}let o;return H().getBool("WEBGL_PACK_UNARY_OPERATIONS")?o=new Zs(s.shape,Ay):o=new us(s.shape,Ay),e.runWebGLProgram(o,[s],s.dtype)}const $B={kernelName:$a,backendName:"webgl",kernelFunc:CB};const IB=Dn+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`,vB=Mt({opSnippet:IB}),kB={kernelName:Rr,backendName:"webgl",kernelFunc:vB};const SB=Dn+`
  if (x < 1.0) return NAN;
return log(x + sqrt(x * x - 1.0));`,NB=Mt({opSnippet:SB}),TB={kernelName:Ar,backendName:"webgl",kernelFunc:NB};const Dy="return a + b;",EB=_e({opSnippet:Dy,packedOpSnippet:Dy,supportsComplex:!0,cpuKernelImpl:BP}),RB={kernelName:Uo,backendName:"webgl",kernelFunc:EB};class AB{constructor(t,e){this.outputShape=[],this.outputShape=t,this.variableNames=e.map((r,i)=>`T${i}`);const s=[];this.variableNames.forEach(r=>{s.push(`float v${r} = get${r}AtOutCoords();`)});const o=this.variableNames.map(r=>`v${r}`).join(" + ");this.userCode=`
      void main() {
        ${s.join(`
        `)}

        float result = ${o};
        setOutput(result);
      }
    `}}class DB{constructor(t,e){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.variableNames=e.map((r,i)=>`T${i}`);const s=[];this.variableNames.forEach(r=>{s.push(`vec4 v${r} = get${r}AtOutCoords();`)});const o=this.variableNames.map(r=>`v${r}`).join(" + ");this.userCode=`
      void main() {
        ${s.join(`
        `)}

        vec4 result = ${o};
        setOutput(result);
      }
    `}}function Uc(n){const{inputs:t,backend:e}=n,s=t;if(s.length===1)return fn({inputs:{x:s[0]},backend:e});if(s.length>H().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER")){const l=Math.floor(s.length/2),c=Uc({inputs:s.slice(0,l),backend:e}),u=Uc({inputs:s.slice(l),backend:e});return Uc({inputs:[c,u],backend:e})}const o=s.map(l=>l.dtype).reduce((l,c)=>cn(l,c)),r=s.map(l=>l.shape),a=H().getBool("WEBGL_PACK")?new DB(s[0].shape,r):new AB(s[0].shape,r);return e.runWebGLProgram(a,s,o)}const FB={kernelName:du,backendName:"webgl",kernelFunc:Uc};function _B(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,keepDims:i}=s,a=o.shape.length,l=Tt(r,o.shape);let c=l;const u=ee(c,a);let h=o;u!=null&&(h=Ye({inputs:{x:o},backend:e,attrs:{perm:u}}),c=ie(c.length,a)),De("all",c,a);const[d,p]=ke(h.shape,c),f=K(p),m=rt({inputs:{x:h},backend:e,attrs:{shape:[-1,f]}}),g=Mo(m,m.dtype,"all",e);let x;if(i){const b=he(d,l);x=rt({inputs:{x:g},backend:e,attrs:{shape:b}})}else x=rt({inputs:{x:g},backend:e,attrs:{shape:d}});return e.disposeIntermediateTensorInfo(m),e.disposeIntermediateTensorInfo(g),u!=null&&e.disposeIntermediateTensorInfo(h),x}const OB={kernelName:pu,backendName:"webgl",kernelFunc:_B};function MB(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,keepDims:i}=s,a=o.shape.length,l=Tt(r,o.shape);let c=l;const u=ee(c,a);let h=o;u!=null&&(h=Ye({inputs:{x:o},backend:e,attrs:{perm:u}}),c=ie(c.length,a)),De("any",c,a);const[d,p]=ke(h.shape,c),f=K(p),m=rt({inputs:{x:h},backend:e,attrs:{shape:[-1,f]}}),g=Mo(m,m.dtype,"any",e);let x;if(i){const b=he(d,l);x=rt({inputs:{x:g},backend:e,attrs:{shape:b}})}else x=rt({inputs:{x:g},backend:e,attrs:{shape:d}});return e.disposeIntermediateTensorInfo(m),e.disposeIntermediateTensorInfo(g),u!=null&&e.disposeIntermediateTensorInfo(h),x}const LB={kernelName:fu,backendName:"webgl",kernelFunc:MB};class PB{constructor(t,e,s){this.variableNames=["A"];const{windowSize:o,batchSize:r,outSize:i}=t;s||this.variableNames.push("bestIndicesA"),this.outputShape=[r,i];const a=e==="max"?">":"<",l=s?"inOffset + i;":"round(getBestIndicesA(batch, inOffset + i));";this.userCode=`
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
    `}}class BB{constructor(t,e,s,o){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,T(t.length>2,()=>`Packed arg${s.charAt(0).toUpperCase()+s.slice(1)} supports only inputs with rank above 2.`);const r=t[t.length-1],i=Math.ceil(r/e);this.outputShape=t.slice(0,-1),i>1&&this.outputShape.push(i),o||this.variableNames.push("bestIndicesA");const a=this.outputShape,l=a.length,c=Gt(l),u=je("coords",l);let h,d;if(i===1){d=l+1;const N=Gt(d);h=`
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
        --${u[l-2]};`;const p=["x","y","z","w","u","v"].slice(0,d),f="."+p[d-1],m=p.map(N=>"int "+N),g=je("sourceLocR",d-1).concat("inIdx.r"),x=je("sourceLocG",d-1).concat("inIdx.g"),b=je("sourceLocB",d-1).concat("inIdx.b"),y=je("sourceLocA",d-1).concat("inIdx.a"),w=s==="max"?"greaterThan":"lessThan",C=o?"":`
          inIdx = round(vec4(getBestIndicesAChannel(${g.join()}),
                             getBestIndicesAChannel(${x.join()}),
                             getBestIndicesAChannel(${b.join()}),
                             getBestIndicesAChannel(${y.join()})));`,I=`vec4(
            getAChannel(${g.join()}),
            hasNextCol ? getAChannel(${x.join()}) : 0.,
            hasNextRow ? getAChannel(${b.join()}) : 0.,
            hasNextRow && hasNextCol ? getAChannel(${y.join()}) : 0.)`,v=o?"":`
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
            vec4(${w}(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));

          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,
                           replace.y  ? candidate.y : bestValue.y,
                           replace.z  ? candidate.z : bestValue.z,
                           replace.w  ? candidate.w : bestValue.w);
          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));
          srcIdx++;
        }
        setOutput(bestIndex);
      }
    `}}function Fy(n,t,e,s=null){let o=t.shape[0],r=t.shape[1];s!=null&&(o=s.shape[0],r=s.shape[1]);const i=Zl(r),a={windowSize:i,inSize:r,batchSize:o,outSize:Math.ceil(r/i)},l=new PB(a,e,s==null),c=[t];s!=null&&c.push(s);const u=n.runWebGLProgram(l,c,"int32");if(u.shape[1]===1)return u;const h=Fy(n,t,e,u);return n.disposeIntermediateTensorInfo(u),h}function _y(n,t,e,s=null){const o=s!=null?s.shape:t.shape,r=o[o.length-1],i=Zl(r),a=new BB(o,i,e,s==null),l=s==null?[t]:[t,s],c=n.runWebGLProgram(a,l,"int32");if(c.shape.length===t.shape.length){const u=_y(n,t,e,c);return n.disposeIntermediateTensorInfo(c),u}return c}function Oy(n,t,e,s){const o=[e];if(De("arg"+s.charAt(0).toUpperCase()+s.slice(1),o,t.shape.length),!H().getBool("WEBGL_PACK_REDUCE")||t.shape.length<=2){const r=[],i=n.texData.get(t.dataId),a=i!==null&&i.isPacked;let l=t;a&&(l=n.unpackTensor(t),r.push(l));const[c,u]=ke(l.shape,o),h=K(u),d=rt({inputs:{x:l},backend:n,attrs:{shape:[-1,h]}});r.push(d);const p=Fy(n,d,s);r.push(p);const f=rt({inputs:{x:p},backend:n,attrs:{shape:c}});return r.forEach(m=>n.disposeIntermediateTensorInfo(m)),f}return _y(n,t,s)}function zB(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r}=s;let i=Tt(r,o.shape);const a=ee(i,o.shape.length);let l=o;const c=[];a!=null&&(l=Ye({inputs:{x:o},backend:e,attrs:{perm:a}}),c.push(l),i=ie(i.length,l.shape.length)),De("argMax",[i[0]],l.shape.length);const u=Oy(e,l,i[0],"max");return c.forEach(h=>e.disposeIntermediateTensorInfo(h)),u}const VB={kernelName:Ia,backendName:"webgl",kernelFunc:zB};function WB(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r}=s;let i=Tt(r,o.shape);const a=ee(i,o.shape.length);let l=o;const c=[];a!=null&&(l=Ye({inputs:{x:o},backend:e,attrs:{perm:a}}),c.push(l),i=ie(i.length,l.shape.length)),De("argMin",[i[0]],l.shape.length);const u=Oy(e,l,i[0],"min");return c.forEach(h=>e.disposeIntermediateTensorInfo(h)),u}const UB={kernelName:va,backendName:"webgl",kernelFunc:WB};const GB=Dn+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`,HB=Mt({opSnippet:GB}),qB={kernelName:Dr,backendName:"webgl",kernelFunc:HB};const XB=Dn+"return log(x + sqrt(x * x + 1.0));",KB=Mt({opSnippet:XB}),jB={kernelName:Fr,backendName:"webgl",kernelFunc:KB};const YB=Dn+`
  return atan(x);
`,ZB=Mt({opSnippet:YB}),QB={kernelName:_r,backendName:"webgl",kernelFunc:ZB};const JB=Tp+`
  return atan(a, b);
`,tz=`
  vec4 result = atan(a, b);
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+Oo+`
  return result;
`,ez=_e({opSnippet:JB,packedOpSnippet:tz}),nz={kernelName:Mr,backendName:"webgl",kernelFunc:ez};const sz=Dn+`
  if ((x < -1.0) || (x > 1.0)) return NAN;
return (log(1.0 + x) - log(1.0 - x)) / 2.0;`,oz=Mt({opSnippet:sz}),rz={kernelName:Or,backendName:"webgl",kernelFunc:oz};class pa{constructor(t,e,s,o=!1,r=!1){if(this.variableNames=["x"],e==="avg"&&s)throw new Error("Cannot compute positions for average pool.");const i=t.filterWidth,a=t.strideHeight,l=t.strideWidth,c=t.dilationHeight,u=t.dilationWidth,h=t.effectiveFilterHeight,d=t.effectiveFilterWidth,p=t.padInfo.top,f=t.padInfo.left;this.outputShape=t.outShape;const m=e==="avg",g=`((batch  * ${t.inHeight} + xR) * ${t.inWidth} + xC) * ${t.inChannels} + d`,x=`(xR * ${t.inWidth} + xC) * ${t.inChannels} + d`;let b="0.0";if(m||(b="-1.0 / 1e-20"),s){this.userCode=`
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
      `;return}const y="max";let w=`${e}(${e}(${e}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;e==="avg"&&(w="avgValue / max(count, 1.0)");const C=Math.floor(i/4)*4,I=i%4,v=`
      if (${m}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = ${y}(values, minMaxValue);
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
        setOutput(${w});
      }
    `}}class Rp{constructor(t,e,s,o=!1,r=!1){if(this.variableNames=["x"],e==="avg"&&s)throw new Error("Cannot compute positions for average pool.");const i=t.filterWidth,a=t.strideDepth,l=t.strideHeight,c=t.strideWidth,u=t.dilationDepth,h=t.dilationHeight,d=t.dilationWidth,p=t.effectiveFilterDepth,f=t.effectiveFilterHeight,m=t.effectiveFilterWidth,g=t.padInfo.front,x=t.padInfo.top,b=t.padInfo.left;this.outputShape=t.outShape;const y=e==="avg";let w="0.0";if(y||(w="-1.0 / 1e-20"),s){this.userCode=`
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
      `;return}const C="max";let I=`${e}(${e}(${e}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;e==="avg"&&(I="avgValue / max(count, 1.0)");const v=Math.floor(i/4)*4,N=i%4,k=`
      if (${y}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = ${C}(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec3 strides =
        ivec3(${a}, ${l}, ${c});
      const ivec3 pads = ivec3(${g}, ${x}, ${b});
      const float initializationValue = ${w};
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
        vec4 minMaxValue = vec4(${w});
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

              ${k}
            }

            int xC = xCCorner + ${v};
            if (${N===1}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                initializationValue,
                initializationValue,
                initializationValue
              );

              ${k}
            } else if (${N===2}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${d}, ch),
                initializationValue,
                initializationValue
              );

              ${k}
            } else if (${N===3}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${d}, ch),
                getValue(batch, xD, xR, xC + 2 * ${d}, ch),
                initializationValue
              );

              ${k}
            }
          }
        }
        setOutput(${I});
      }
    `}}function iz(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t;ua(o,"avgPool");const{filterSize:r,strides:i,pad:a,dimRoundingMode:l}=s,c=1;T(ze(i,c),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${c}'`);const u=In(o.shape,r,i,c,a,l);if(u.filterWidth===1&&u.filterHeight===1&&Bt(u.inShape,u.outShape))return fn({inputs:{x:o},backend:e});const h=new pa(u,"avg",!1);return e.runWebGLProgram(h,[o],"float32")}const az={kernelName:ka,backendName:"webgl",kernelFunc:iz};function lz(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{filterSize:r,strides:i,pad:a,dimRoundingMode:l,dataFormat:c}=s,u=[1,1,1],h=fs(o.shape,r,i,u,a,l,c),d=new Rp(h,"avg",!1);return e.runWebGLProgram(d,[o],"float32")}const cz={kernelName:Sa,backendName:"webgl",kernelFunc:lz};class uz{constructor(t){this.variableNames=["dy"],this.outputShape=t.inShape;const e=t.filterHeight,s=t.filterWidth,o=t.strideHeight,r=t.strideWidth,i=t.dilationHeight,a=t.dilationWidth,l=t.effectiveFilterHeight,c=t.effectiveFilterWidth,u=l-1-t.padInfo.top,h=c-1-t.padInfo.left,d=1/(e*s);this.userCode=`
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
    `}}class hz{constructor(t){this.variableNames=["dy"],this.outputShape=t.inShape;const e=t.filterDepth,s=t.filterHeight,o=t.filterWidth,r=t.strideDepth,i=t.strideHeight,a=t.strideWidth,l=t.dilationDepth,c=t.dilationHeight,u=t.dilationWidth,h=t.effectiveFilterDepth,d=t.effectiveFilterHeight,p=t.effectiveFilterWidth,f=h-1-t.padInfo.front,m=d-1-t.padInfo.top,g=p-1-t.padInfo.left,x=1/(e*s*o);this.userCode=`
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
    `}}function dz(n){const{inputs:t,backend:e,attrs:s}=n,{dy:o,input:r}=t,i=r,{filterSize:a,strides:l,pad:c,dimRoundingMode:u}=s,h=[1,1,1],d=fs(i.shape,a,l,h,c,u),p=new hz(d);return e.runWebGLProgram(p,[o],i.dtype)}const pz={kernelName:gu,backendName:"webgl",kernelFunc:dz};function fz(n){const{inputs:t,backend:e,attrs:s}=n,{dy:o,input:r}=t,i=r;ua([o,r],"avgPoolGrad");const{filterSize:a,strides:l,pad:c}=s,u=In(i.shape,a,l,1,c),h=new uz(u);return e.runWebGLProgram(h,[o],i.dtype)}const mz={kernelName:mu,backendName:"webgl",kernelFunc:fz};function gz(n){const{inputs:t,backend:e,attrs:s}=n,{a:o,b:r}=t,{transposeA:i,transposeB:a}=s;return Wc({a:o,b:r,transposeA:i,transposeB:a,backend:e})}const xz={kernelName:Na,backendName:"webgl",kernelFunc:gz};class bz{constructor(t,e,s,o,r,i){this.outputShape=[],this.variableNames=["x","mean","variance"],$t(t,e),$t(t,s);let a="0.0";o!=null&&($t(t,o),this.variableNames.push("offset"),a="getOffsetAtOutCoords()");let l="1.0";r!=null&&($t(t,r),this.variableNames.push("scale"),l="getScaleAtOutCoords()"),this.outputShape=t,this.userCode=`
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = ${a};
        float scale = ${l};
        float inv = scale * inversesqrt(variance + float(${i}));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `}}class yz{constructor(t,e,s,o,r,i){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=["x","mean","variance"],$t(t,e),$t(t,s);let a="vec4(0.0)";o!=null&&($t(t,o),this.variableNames.push("offset"),a="getOffsetAtOutCoords()");let l="vec4(1.0)";r!=null&&($t(t,r),this.variableNames.push("scale"),l="getScaleAtOutCoords()"),this.outputShape=t,this.userCode=`
      void main() {
        vec4 offset = ${a};
        vec4 scale = ${l};

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(${i}));

        setOutput((x - mean) * inv + offset);
      }
    `}}const wz={kernelName:Ba,backendName:"webgl",kernelFunc:({inputs:n,backend:t,attrs:e})=>{const{x:s,mean:o,variance:r,offset:i,scale:a}=n;T(o.shape.length===r.shape.length,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),T(i==null||o.shape.length===i.shape.length,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),T(a==null||o.shape.length===a.shape.length,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");let{varianceEpsilon:l}=e;l==null&&(l=.001);const c=[s,o,r];let u=null;i!=null&&(u=i.shape,c.push(i));let h=null;a!=null&&(h=a.shape,c.push(a));const d=H().getBool("WEBGL_PACK_NORMALIZATION")?new yz(s.shape,o.shape,r.shape,u,h,l):new bz(s.shape,o.shape,r.shape,u,h,l);return t.runWebGLProgram(d,c,c[0].dtype)}};class Cz{constructor(t){this.variableNames=["source"],this.outputShape=t,this.rank=t.length;const e=Gt(this.rank);this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];const s=$z(this.rank);let o;const r=t.map((i,a)=>`sourceLoc.${Ap[a]} = start[${a}] + coords.${Ap[a]};`);o=`
        ${e} sourceLoc;
        ${e} coords = getOutputCoords();
        ${r.join(`
`)}
      `,this.userCode=`
      void main() {
        ${o}
        setOutput(getSource(${s}));
      }
    `}}const Ap=["x","y","z","w","u","v"];function $z(n){if(n===1)return"sourceLoc";if(n<=6)return Ap.slice(0,n).map(t=>"sourceLoc."+t).join(",");throw Error(`Slicing for rank ${n} is not yet supported`)}class Iz{constructor(t){this.variableNames=["source"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.rank=t.length,this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];const e=Gt(this.rank),s=je("coords",this.rank),o=je("sourceLoc",this.rank),r=this.rank===1?"sourceLoc":`vec2(${o.slice(-2).join()})`,i=`getChannel(getSource(${o.join()}), ${r})`,a=`
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
    `}}function vz(n,t,e,s){const o=s.texData.get(n.dataId),r=s.makeTensorInfo(e,n.dtype),i=s.texData.get(r.dataId);Object.assign(i,o),i.refCount=1,i.shape=e,i.dtype=n.dtype;let a=hg(t,ft(n.shape));o.slice&&(a+=o.slice.flatOffset),i.slice={flatOffset:a,origDataId:o.slice&&o.slice.origDataId||n.dataId};const l=s.dataRefCount.get(i.slice.origDataId)||1;return s.dataRefCount.set(i.slice.origDataId,l+1),r}function wr(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{begin:r,size:i}=s,[a,l]=ed(o,r,i);if(lg(o,a,l),K(l)===0)return e.makeTensorInfo(l,o.dtype,[]);if(e.shouldExecuteOnCPU([o])||o.dtype==="string"){const h=e.texData.get(o.dataId),d=x3(h.values,a,l,o.shape,o.dtype);return e.makeTensorInfo(l,o.dtype,d)}const{isPacked:c}=e.texData.get(o.dataId),u=ug(o.shape,a,l);if(c||!u){const h=H().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Iz(l):new Cz(l),d=[a];return e.runWebGLProgram(h,[o],o.dtype,d)}return e.uploadToGPU(o.dataId),vz(o,a,l,e)}const kz={kernelName:fl,backendName:"webgl",kernelFunc:wr};const Sz={kernelName:Ta,backendName:"webgl",kernelFunc:n=>{const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{blockShape:r,crops:i}=s;T(o.shape.length<=4,()=>"batchToSpaceND for rank > 4 with a WebGL backend not implemented yet");const a=r.reduce((b,y)=>b*y),l=zi(o.shape,r,a),c=Vi(l.length,r.length),u=Wi(o.shape,r,a),h=rd(i,r.length),d=id(u,i,r.length),p=[],f=rt({inputs:{x:o},backend:e,attrs:{shape:l}}),m=Ye({inputs:{x:f},backend:e,attrs:{perm:c}}),g=rt({inputs:{x:m},backend:e,attrs:{shape:u}}),x=wr({inputs:{x:g},backend:e,attrs:{begin:h,size:d}});return p.push(f),p.push(m),p.push(g),p.forEach(b=>e.disposeIntermediateTensorInfo(b)),x}};function Nz(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,weights:r}=t,{size:i}=s,a=e.readSync(o.dataId),l=e.readSync(r.dataId),c=dy(a,l,r.dtype,r.shape,i);return e.makeTensorInfo([i],r.dtype,c)}const Tz={kernelName:xu,backendName:"webgl",kernelFunc:Nz};const Ez=`
  int r = int(a.r) & int(b.r);
  int g = int(a.g) & int(b.g);
  int rb = int(a.b) & int(b.b);
  int ra = int(a.a) & int(b.a);
  return vec4(r, g, rb, ra);
`,Rz=`
  return float(int(a.r) & int(b.r));
`;function Az(n){const{inputs:t,backend:e}=n,{a:s,b:o}=t,r=H().getBool("WEBGL_PACK_BINARY_OPERATIONS"),i=H().getNumber("WEBGL_VERSION");if(e.shouldExecuteOnCPU([s,o])||i===1){const l=e.texData.get(s.dataId).values,c=e.texData.get(o.dataId).values,[u,h]=VP(s.shape,o.shape,l,c,s.dtype),d=e.makeTensorInfo(h,s.dtype),p=e.texData.get(d.dataId);return p.values=u,d}let a;return r?a=new br(Ez,s.shape,o.shape,!1):a=new _o(Rz,s.shape,o.shape),e.runWebGLProgram(a,[s,o],s.dtype)}const Dz={kernelName:bu,backendName:"webgl",kernelFunc:Az};function Fz(n){const{inputs:t,backend:e}=n,{s0:s,s1:o}=t,r=e.readSync(s.dataId),i=e.readSync(o.dataId),a=$t(Array.from(r),Array.from(i));return e.makeTensorInfo([a.length],"int32",Int32Array.from(a))}const _z={kernelName:tf,backendName:"webgl",kernelFunc:Fz};const My=_e({opSnippet:"return float(a != b);",cpuKernelImpl:l3,dtype:"bool"}),Oz={kernelName:nl,backendName:"webgl",kernelFunc:My};function fa(n){const{inputs:t,backend:e}=n,{input:s}=t,o=e.texData.get(s.dataId);return fn({inputs:{x:o.complexTensorInfos.real},backend:e})}const Mz={kernelName:Hu,backendName:"webgl",kernelFunc:fa};const Lz="return float(int(x));";function Pz(n,t){const e=new us(n.shape,Lz),s=t.runWebGLProgram(e,[n],"int32");return{dataId:s.dataId,shape:s.shape,dtype:s.dtype}}function Dp(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{dtype:r}=s;if(r==="complex64"){if(o.dtype==="complex64")return fn({inputs:{x:o},backend:e});const i=Se(o.shape),a=Dp({inputs:{x:o},backend:e,attrs:{dtype:"float32"}}),l=Qs({inputs:{real:a,imag:i},backend:e});return i.dispose(),e.disposeIntermediateTensorInfo(a),l}if(o.dtype==="complex64"){const i=fa({inputs:{input:o},backend:e}),a=Dp({inputs:{x:i},backend:e,attrs:{dtype:r}});return e.disposeIntermediateTensorInfo(i),a}if(!Kp(o.dtype,r)){const i=fn({inputs:{x:o},backend:e});return{dataId:i.dataId,shape:i.shape,dtype:r}}if(e.shouldExecuteOnCPU([o])){const i=e.texData.get(o.dataId).values,[a,l,c]=WP(i,o.shape,o.dtype,r);return e.makeTensorInfo(a,l,c)}if(r==="int32")return Pz(o,e);if(r==="bool"){const i=e.makeTensorInfo([],"bool",Pe("bool",1)),l=My({inputs:{a:o,b:i},backend:e});return e.disposeIntermediateTensorInfo(i),l}throw new Error(`Error in Cast: failed to cast ${o.dtype} to ${r}`)}const Bz={kernelName:Lr,backendName:"webgl",kernelFunc:Dp};const Ly="return ceil(x);",zz=Mt({opSnippet:Ly,packedOpSnippet:Ly,cpuKernelImpl:UP}),Vz={kernelName:Pr,backendName:"webgl",kernelFunc:zz};class Wz{constructor(t){this.variableNames=["A"],this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=t,this.userCode=`

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `}}class Uz{constructor(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=t,this.userCode=`
      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `}}function Gz(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{clipValueMin:r,clipValueMax:i}=s;let a;H().getBool("WEBGL_PACK_CLIP")?a=new Uz(o.shape):a=new Wz(o.shape);const l=[[r],[i]];return e.runWebGLProgram(a,[o],o.dtype,l)}const Hz={kernelName:Br,backendName:"webgl",kernelFunc:Gz};class qz{constructor(t){this.variableNames=["real","imag"],this.outputShape=t,this.userCode=`
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
    `}}function Py(n,t){return{dataId:t.dataId,dtype:t.dtype,shape:n.shape}}function Xz(n){const{inputs:t,backend:e}=n,{x:s}=t,o=e.texData.get(s.dataId),r=new qz(s.shape),i=[Py(s,o.complexTensorInfos.real),Py(s,o.complexTensorInfos.imag)];return e.runWebGLProgram(r,i,i[0].dtype)}const Kz={kernelName:Ea,backendName:"webgl",kernelFunc:Xz};class jz{constructor(t){this.outputShape=[],this.outputShape=es(t,1),this.variableNames=t.map((i,a)=>`T${a}`);const e=new Array(t.length-1);e[0]=t[0][1];for(let i=1;i<e.length;i++)e[i]=e[i-1]+t[i][1];const s=[`if (yC < ${e[0]}) setOutput(getT0(yR, yC));`];for(let i=1;i<e.length;i++){const a=e[i-1];s.push(`else if (yC < ${e[i]}) setOutput(getT${i}(yR, yC-${a}));`)}const o=e.length,r=e[e.length-1];s.push(`else setOutput(getT${o}(yR, yC-${r}));`),this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        ${s.join(`
        `)}
      }
    `}}class Yz{constructor(t,e){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=es(t,e);const s=this.outputShape,o=s.length,r=Gt(o),i=je("coords",o),a=["x","y","z","w","u","v"].slice(0,o);this.variableNames=t.map((m,g)=>`T${g}`);const l=new Array(t.length-1);l[0]=t[0][e];for(let m=1;m<l.length;m++)l[m]=l[m-1]+t[m][e];const c=a[e],u=a.slice(-2),h=a.join();let d=`if (${c} < ${l[0]}) {
        return getChannel(
            getT0(${h}), vec2(${u.join()}));
        }`;for(let m=1;m<l.length;m++){const g=l[m-1];d+=`
        if (${c} < ${l[m]}  && ${c} >= ${l[m-1]}) {
          return getChannel(
            getT${m}(${Gc(a,c,g)}),
            vec2(${Gc(u,c,g)}));
        }`}const p=l.length,f=l[l.length-1];d+=`
        return getChannel(
          getT${p}(${Gc(a,c,f)}),
          vec2(${Gc(u,c,f)}));`,this.userCode=`
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
    `}}function Gc(n,t,e){const s=n.indexOf(t);return n.map((r,i)=>i===s?`${r} - ${e}`:r).join()}function Hc(n){const{inputs:t,backend:e}=n,{input:s}=t,o=e.texData.get(s.dataId);return fn({inputs:{x:o.complexTensorInfos.imag},backend:e})}const Zz={kernelName:Lu,backendName:"webgl",kernelFunc:Hc};function ma(n,t,e){const s=n[0].dtype;if(s==="complex64"){const p=n.map(b=>fa({inputs:{input:b},backend:e})),f=n.map(b=>Hc({inputs:{input:b},backend:e})),m=ma(p,t,e),g=ma(f,t,e),x=Qs({inputs:{real:m,imag:g},backend:e});return p.forEach(b=>e.disposeIntermediateTensorInfo(b)),f.forEach(b=>e.disposeIntermediateTensorInfo(b)),e.disposeIntermediateTensorInfo(m),e.disposeIntermediateTensorInfo(g),x}let o=e.shouldExecuteOnCPU(n);if(s==="string"&&(o=!0),o){const p=n.map(w=>{const I=[-1,K(w.shape.slice(t))];return rt({inputs:{x:w},backend:e,attrs:{shape:I}})}),f=p.map(w=>({vals:e.readSync(w.dataId),shape:w.shape})),m=es(p.map(w=>w.shape),1),g=p[0].shape[0]===1,x=GP(f,m,s,g),b=es(n.map(w=>w.shape),t),y=e.makeTensorInfo(b,s,x);return p.forEach(w=>e.disposeIntermediateTensorInfo(w)),y}const r=n.filter(p=>K(p.shape)>0),i=H().getBool("WEBGL_PACK_ARRAY_OPERATIONS")&&r[0].shape.length>1;if(r.length===1){const p=i?new us(n[0].shape,Ys):new Zs(n[0].shape,Ys);return e.runWebGLProgram(p,n,s)}const a=H().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER");if(r.length>a){const p=[];for(let m=0;m<r.length;m+=a){const g=r.slice(m,m+a);p.push(ma(g,t,e))}const f=ma(p,t,e);for(const m of p)e.disposeIntermediateTensorInfo(m);return f}if(i){const p=new Yz(r.map(f=>f.shape),t);return e.runWebGLProgram(p,r,s)}const{tensors2D:l,outShape:c}=Qz(r,t,e),u=new jz(l.map(p=>p.shape)),h=e.runWebGLProgram(u,l,s);l.forEach(p=>e.disposeIntermediateTensorInfo(p));const d=rt({inputs:{x:h},attrs:{shape:c},backend:e});return e.disposeIntermediateTensorInfo(h),d}function Qz(n,t,e){const s=es(n.map(r=>r.shape),t);return{tensors2D:n.map(r=>rt({inputs:{x:r},attrs:{shape:[-1,K(r.shape.slice(t))]},backend:e})),outShape:s}}function By(n){const{inputs:t,backend:e,attrs:s}=n,{axis:o}=s,r=Tt(o,t[0].shape)[0],i=t.map(c=>c.shape);nd(i,r);const a=es(t.map(c=>c.shape),r);if(K(a)===0)return e.makeTensorInfo(a,t[0].dtype,[]);const l=t.filter(c=>K(c.shape)>0);return l.length===1?fn({inputs:{x:l[0]},backend:e}):ma(l,r,e)}const Jz={kernelName:Ra,backendName:"webgl",kernelFunc:By};class zy{constructor(t,e=!1,s=null,o=!1,r=!1){this.variableNames=["x","W"],this.outputShape=t.outShape;const i=t.padInfo.top,a=t.padInfo.left,l=t.strideHeight,c=t.strideWidth,u=t.dilationHeight,h=t.dilationWidth,d=t.filterHeight,p=t.filterWidth,f=Math.floor(t.inChannels/4)*4,m=t.inChannels%4,g=t.dataFormat==="channelsLast",x=g?1:2,b=g?2:3,y=g?3:1;let w="",C="";s&&(o?w=`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${s}
        }`:r?w=`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${s}
        }`:w=`
          float activation(float x) {
            ${s}
          }
        `,C="result = activation(result);");const I=e?"result += getBiasAtOutCoords();":"";e&&this.variableNames.push("bias"),o&&this.variableNames.push("preluActivationWeights"),r&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${w}

      const ivec2 strides = ivec2(${l}, ${c});
      const ivec2 pads = ivec2(${i}, ${a});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d2 = coords[${y}];

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
    `}}class t4{constructor(t){this.variableNames=["x","W"],this.outputShape=t.outShape;const e=t.padInfo.front,s=t.padInfo.top,o=t.padInfo.left,r=t.strideDepth,i=t.strideHeight,a=t.strideWidth,l=t.dilationDepth,c=t.dilationHeight,u=t.dilationWidth,h=t.filterDepth,d=t.filterHeight,p=t.filterWidth,f=Math.floor(t.inChannels/4)*4,m=t.inChannels%4;this.userCode=`
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
    `}}class Vy{constructor(t,e=!1,s=null,o=!1,r=!1){this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=t.outShape,this.enableShapeUniforms=Ue(this.outputShape.length);const i=t.padInfo.left,a=t.strideWidth,l=t.dilationWidth,c=t.filterHeight,u=t.filterWidth,h=u;let d=`
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
     `}}class e4{constructor(t,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec4"},{name:"pad",type:"ivec2"},{name:"stride",type:"ivec2"},{name:"dilation",type:"ivec2"},{name:"inChannels",type:"int"},{name:"itemsPerBlockRow",type:"int"},{name:"outWidth",type:"int"}],this.outputShape=t,this.enableShapeUniforms=Ue(this.outputShape.length);const{dataFormat:s}=e,o=Ke(),r=s==="channelsLast",i=r?1:2,a=r?2:3,l=this.enableShapeUniforms?"if(blockIndex < outShape[2] && pos < outShape[1]) {":`if(blockIndex < ${t[2]} && pos < ${t[1]}) {`;let c="";for(let u=0;u<=1;u++)for(let h=0;h<=1;h++)c+=`
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
    `}}function qc(n,t){const e=n.length;return e>=3?t?[...n.slice(0,-3),n[e-3]*n[e-2],n[e-1]]:[...n.slice(0,-3),n[e-3],n[e-2]*n[e-1]]:!t&&e===1&&n[0]>1?[n[0],1]:null}function Wy({x:n,filter:t,convInfo:e,backend:s,bias:o=null,preluActivationWeights:r=null,leakyreluAlpha:i=0,activation:a=null}){const l=n.shape,c=s.texData.get(n.dataId),u=e.inChannels,h=l[0]*l[1]*l[2],d=e.outChannels,p=e.dataFormat==="channelsLast",f=!1,m=!1;let g;const x=[];if(r!=null){const w=qc(r.shape,p);w!=null&&(r=rt({inputs:{x:r},backend:s,attrs:{shape:w}}),x.push(r))}if(o!=null){const w=qc(o.shape,p);w!=null&&(o=rt({inputs:{x:o},backend:s,attrs:{shape:w}}),x.push(o))}if(!((h===1||d===1)&&u>Ry)&&c.isPacked&&p&&c.texture!=null&&l[2]%2!==0&&Bt(c.shape.slice(-3),l.slice(-3))){const w=l[0]*l[1]*(l[2]+1),C={dataId:n.dataId,shape:[1,w,e.inChannels],dtype:n.dtype},I=c.shape;c.shape=c.shape.slice(),c.shape[c.shape.length-2]++,T(Mc(c.shape,C.shape),()=>`packed reshape ${c.shape} to ${C.shape} isn't free`);const v=rt({inputs:{x:t},backend:s,attrs:{shape:[1,e.inChannels,e.outChannels]}});x.push(v);const N=Wc({a:C,b:v,backend:s,transposeA:f,transposeB:m,bias:o,activation:a,preluActivationWeights:r,leakyreluAlpha:i}),k=s.texData.get(N.dataId);T(k.isPacked,()=>"batchMatMul result is expected to be packed"),c.shape=I,k.shape=e.outShape,g=fn({inputs:{x:N},backend:s}),g.shape=e.outShape,x.push(N)}else{const w=e.outHeight*e.outWidth,C=rt({inputs:{x:n},backend:s,attrs:{shape:p?[e.batchSize,w,e.inChannels]:[e.batchSize,e.inChannels,w]}}),I=rt({inputs:{x:t},backend:s,attrs:{shape:[1,e.inChannels,e.outChannels]}}),v=Wc({a:p?C:I,b:p?I:C,transposeA:!p,transposeB:m,backend:s,bias:o,activation:a,preluActivationWeights:r,leakyreluAlpha:i});g=rt({inputs:{x:v},backend:s,attrs:{shape:e.outShape}}),x.push(C),x.push(I),x.push(v)}for(const w of x)s.disposeIntermediateTensorInfo(w);return g}function Uy({x:n,filter:t,convInfo:e,backend:s,bias:o=null,preluActivationWeights:r=null,leakyreluAlpha:i=0,activation:a=null}){const{filterWidth:l,filterHeight:c,inChannels:u,outWidth:h,outHeight:d,dataFormat:p}=e,f=p==="channelsLast",m=l*c*u,g=d*h,x=[e.batchSize,m,g],b=!0,y=!1,w=[];if(r!=null){const _=qc(r.shape,f);_!=null&&(r=rt({inputs:{x:r},backend:s,attrs:{shape:_}}),w.push(r))}if(o!=null){const _=qc(o.shape,f);_!=null&&(o=rt({inputs:{x:o},backend:s,attrs:{shape:_}}),w.push(o))}const C=rt({inputs:{x:t},backend:s,attrs:{shape:[1,m,K(t.shape)/m]}});w.push(C);const I=new e4(x,e),v=[n.shape,[e.padInfo.top,e.padInfo.left],[e.strideHeight,e.strideWidth],[e.dilationHeight,e.dilationWidth],[e.inChannels],[e.filterWidth*e.inChannels],[e.outWidth]],N=s.runWebGLProgram(I,[n],"float32",v),k=rt({inputs:{x:N},backend:s,attrs:{shape:x}});w.push(N),w.push(k);const S=o!=null,$=r!=null,E=a==="leakyrelu",R=a?da(a,!0):null,F=new ky(f?k.shape:C.shape,f?C.shape:k.shape,f?[e.batchSize,g,e.outChannels]:[e.batchSize,e.outChannels,g],b,y,S,R,$,E),A=f?[k,C]:[C,k];if(o&&A.push(o),$&&A.push(r),E){const _=s.makeTensorInfo([],"float32",Rs(i,"float32"));A.push(_),w.push(_)}const O=s.runWebGLProgram(F,A,"float32"),L=rt({inputs:{x:O},backend:s,attrs:{shape:e.outShape}});w.push(O);for(const _ of w)s.disposeIntermediateTensorInfo(_);return L}function n4(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,filter:r}=t,{strides:i,pad:a,dataFormat:l,dilations:c,dimRoundingMode:u}=s,h=ms(l),d=Ae(o.shape,r.shape,i,c,a,u,!1,h);let p;if(d.filterHeight===1&&d.filterWidth===1&&d.dilationHeight===1&&d.dilationWidth===1&&d.strideHeight===1&&d.strideWidth===1&&(d.padInfo.type==="SAME"||d.padInfo.type==="VALID"))p=Wy({x:o,filter:r,convInfo:d,backend:e});else if(d.strideWidth<=2&&h==="channelsLast"&&H().getBool("WEBGL_EXP_CONV")){const m=new Vy(d),g=[[d.padInfo.top,d.padInfo.left],[d.strideHeight,d.strideWidth],[d.dilationHeight,d.dilationWidth],[d.inHeight,d.inWidth]];p=e.runWebGLProgram(m,[o,r],"float32",g)}else if(H().getBool("WEBGL_CONV_IM2COL"))p=Uy({x:o,filter:r,convInfo:d,backend:e});else{const m=new zy(d);p=e.runWebGLProgram(m,[o,r],"float32")}const f=rt({inputs:{x:p},backend:e,attrs:{shape:d.outShape}});return e.disposeIntermediateTensorInfo(p),f}const s4={kernelName:Aa,backendName:"webgl",kernelFunc:n4};class o4{constructor(t){this.variableNames=["x","dy"],this.outputShape=t.filterShape;const e=t.strideHeight,s=t.strideWidth,o=t.padInfo.top,r=t.padInfo.left,i=t.dataFormat==="channelsLast";this.userCode=`
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
    `}}class r4{constructor(t){this.variableNames=["dy","W"],this.outputShape=t.inShape;const e=t.filterHeight,s=t.filterWidth,o=t.strideHeight,r=t.strideWidth,i=t.dataFormat==="channelsLast",a=e-1-t.padInfo.top,l=s-1-t.padInfo.left,c=i?1:2,u=i?2:3,h=i?3:1;this.userCode=`
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
    `}}class i4{constructor(t){this.variableNames=["x","dy"],this.outputShape=t.filterShape;const e=t.strideDepth,s=t.strideHeight,o=t.strideWidth,r=t.padInfo.front,i=t.padInfo.top,a=t.padInfo.left;this.userCode=`
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
    `}}class a4{constructor(t){this.variableNames=["dy","W"],this.outputShape=t.inShape;const e=t.filterDepth,s=t.filterHeight,o=t.filterWidth,r=t.strideDepth,i=t.strideHeight,a=t.strideWidth,l=e-1-t.padInfo.front,c=s-1-t.padInfo.top,u=o-1-t.padInfo.left;this.userCode=`
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
    `}}function l4(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,dy:r}=t,{strides:i,pad:a,dataFormat:l,dimRoundingMode:c,filterShape:u}=s,h=ms(l),d=Ae(o.shape,u,i,1,a,c,!1,h),p=new o4(d);return e.runWebGLProgram(p,[o,r],"float32")}const c4={kernelName:wu,backendName:"webgl",kernelFunc:l4};class u4{constructor(t){this.variableNames=["dy","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"strides",type:"vec2"}],this.outputShape=t.inShape,this.enableShapeUniforms=Ue(this.outputShape.length);const e=t.filterHeight,s=t.filterWidth,o=e-1-t.padInfo.top,r=s-1-t.padInfo.left;this.userCode=`
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
    `}}function h4(n){const{inputs:t,backend:e,attrs:s}=n,{dy:o,filter:r}=t,{inputShape:i,strides:a,pad:l,dataFormat:c,dimRoundingMode:u}=s,h=ms(c),d=Ae(i,r.shape,a,1,l,u,!1,h);if(H().getBool("WEBGL_PACK_CONV2DTRANSPOSE")&&h==="channelsLast"){const p=[[d.strideHeight,d.strideWidth]],f=new u4(d);return e.runWebGLProgram(f,[o,r],"float32",p)}else{const p=new r4(d);return e.runWebGLProgram(p,[o,r],"float32")}}const d4={kernelName:Da,backendName:"webgl",kernelFunc:h4};function p4(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,filter:r}=t,{strides:i,pad:a,dilations:l}=s,c=Os(o.shape,r.shape,i,l,a),u=new t4(c);return e.runWebGLProgram(u,[o,r],"float32")}const f4={kernelName:Fa,backendName:"webgl",kernelFunc:p4};function m4(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,dy:r}=t,{strides:i,pad:a,filterShape:l}=s,c=Os(o.shape,l,i,1,a),u=new i4(c);return e.runWebGLProgram(u,[o,r],"float32")}const g4={kernelName:Cu,backendName:"webgl",kernelFunc:m4};function x4(n){const{inputs:t,backend:e,attrs:s}=n,{dy:o,filter:r}=t,{pad:i,strides:a,inputShape:l}=s,c=Os(l,r.shape,a,1,i),u=new a4(c);return e.runWebGLProgram(u,[o,r],"float32")}const b4={kernelName:$u,backendName:"webgl",kernelFunc:x4};const y4=yr+`
  return cos(x);
`,w4=`
  vec4 result = cos(x);
  bvec4 isNaN = isnan(x);
  ${Oo}
  return result;
`,C4=Mt({opSnippet:y4,packedOpSnippet:w4}),$4={kernelName:zr,backendName:"webgl",kernelFunc:C4};const I4=Mt({opSnippet:`
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`}),v4={kernelName:Vr,backendName:"webgl",kernelFunc:I4};class k4{constructor(t,e,s,o,r){this.variableNames=["Image","Boxes","BoxInd"],this.outputShape=[];const[i,a,l,c]=t,[u]=e,[h,d]=s;this.outputShape=[u,h,d,c];const p=o==="bilinear"?1:0,[f,m]=[`${a-1}.0`,`${l-1}.0`],[g,x,b]=h>1?[`${(a-1)/(h-1)}`,"(y2-y1) * height_ratio",`y1*${f} + float(y)*(height_scale)`]:["0.0","0.0",`0.5 * (y1+y2) * ${f}`],[y,w,C]=d>1?[`${(l-1)/(d-1)}`,"(x2-x1) * width_ratio",`x1*${m} + float(x)*(width_scale)`]:["0.0","0.0",`0.5 * (x1+x2) * ${m}`];this.userCode=`
      const float height_ratio = float(${g});
      const float width_ratio = float(${y});
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
        float width_scale = ${w};

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
    `}}const S4={kernelName:vu,backendName:"webgl",kernelFunc:n=>{const{inputs:t,backend:e,attrs:s}=n,{image:o,boxes:r,boxInd:i}=t,{cropSize:a,method:l,extrapolationValue:c}=s,u=new k4(o.shape,r.shape,a,l,c);return e.runWebGLProgram(u,[o,r,i],"float32")}};var ga;(function(n){n.Prod="*",n.Sum="+"})(ga||(ga={}));class Gy{constructor(t,e,s,o){this.op=t,this.outputShape=e,this.variableNames=["x"],this.customUniforms=[{name:"index",type:"float"}];const r=this.outputShape.length,i=this.op===ga.Prod?"1.0":"0.0",a=s?i:`getX(${Hy(r,"coords",this.op)})`,l=this.outputShape[this.outputShape.length-1];let c="",u="";s?(c=o?`end != ${l-1}`:"end != 0",u=o?"end + 1":"end - 1"):(c=o?`end + pow2 < ${l}`:"end >= pow2",u=o?"end + pow2":"end - pow2"),this.userCode=`
      void main() {
        ${Gt(r)} coords = getOutputCoords();
        int end = ${qy(r,"coords",this.op)};
        float val = ${a};
        int pow2 = int(pow(2.0, index));
        if (${c}) {
          int idx = ${u};
          ${qy(r,"coords",this.op)} = idx;
          val ${this.op}= getX(${Hy(r,"coords",this.op)});
        }
        setOutput(val);
      }
    `}}function Hy(n,t,e){if(n===1)return`${t}`;if(n===2)return`${t}.x, ${t}.y`;if(n===3)return`${t}.x, ${t}.y, ${t}.z`;if(n===4)return`${t}.x, ${t}.y, ${t}.z, ${t}.w`;throw new Error(`Cumulative ${e} for rank ${n} is not yet supported`)}function qy(n,t,e){if(n===1)return`${t}`;if(n===2)return`${t}.y`;if(n===3)return`${t}.z`;if(n===4)return`${t}.w`;throw new Error(`Cumulative ${e} for rank ${n} is not yet supported`)}function Xy(n,t,e,s,o,r){const i=t.shape.length,a=ee([s],i);let l=t;a!=null&&(l=Ye({inputs:{x:t},backend:e,attrs:{perm:a}}));const c=ie(1,i)[0];if(c!==i-1)throw new Error(`WebGL cumprod shader expects an inner-most axis=${t.shape.length-1} but got axis=${s}`);const u=l.shape[c];let h=fn({inputs:{x:l},backend:e});for(let d=0;d<=Math.ceil(Math.log2(u))-1;d++){const p=new Gy(n,l.shape,!1,r),f=[[d]],m=h;h=e.runWebGLProgram(p,[h],h.dtype,f),e.disposeIntermediateTensorInfo(m)}if(o){const d=new Gy(n,l.shape,o,r),p=h;h=e.runWebGLProgram(d,[h],h.dtype),e.disposeIntermediateTensorInfo(p)}if(a!=null){const d=Ms(a),p=Ye({inputs:{x:h},backend:e,attrs:{perm:d}});return e.disposeIntermediateTensorInfo(h),e.disposeIntermediateTensorInfo(l),p}return h}function N4(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,exclusive:i,reverse:a}=s;return Xy(ga.Prod,o,e,r,i,a)}const T4={kernelName:Iu,backendName:"webgl",kernelFunc:N4};function E4(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,exclusive:i,reverse:a}=s;return Xy(ga.Sum,o,e,r,i,a)}const R4={kernelName:_a,backendName:"webgl",kernelFunc:E4};function A4(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,weights:r}=t,{size:i,binaryOutput:a}=s;if(o.shape.length===1){const l=e.readSync(o.dataId),c=e.readSync(r.dataId),u=dy(l,c,r.dtype,r.shape,i);return e.makeTensorInfo([i],r.dtype,u)}else if(o.shape.length===2){const l=e.bufferSync(o),c=e.bufferSync(r),u=zP(l,c,i,a);return e.makeTensorInfo(u.shape,r.dtype,u.values)}throw new Error(`Error in denseBincount: input must be at most rank 2, but got rank${o.shape.length}.`)}const D4={kernelName:ku,backendName:"webgl",kernelFunc:A4};class F4{constructor(t,e,s){this.variableNames=["x"],this.outputShape=[],this.outputShape=t,this.blockSize=e,this.dataFormat=s,this.userCode=`
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
  `}getHeightCoordString(){return this.dataFormat==="NHWC"?"coords[1]":"coords[2]"}getWidthCoordString(){return this.dataFormat==="NHWC"?"coords[2]":"coords[3]"}getDepthCoordString(){return this.dataFormat==="NHWC"?"coords[3]":"coords[1]"}getOutputDepthSize(){return this.dataFormat==="NHWC"?this.outputShape[3]:this.outputShape[1]}getInputSamplingString(){return this.dataFormat==="NHWC"?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"}}function _4(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{blockSize:r,dataFormat:i}=s,a=o.shape[0],l=i==="NHWC"?o.shape[1]:o.shape[2],c=i==="NHWC"?o.shape[2]:o.shape[3],u=i==="NHWC"?o.shape[3]:o.shape[1],h=l*r,d=c*r,p=u/(r*r),f=i==="NHWC"?[a,h,d,p]:[a,p,h,d],m=new F4(f,r,i);return e.runWebGLProgram(m,[o],o.dtype)}const O4={kernelName:Su,backendName:"webgl",kernelFunc:_4};class Ky{constructor(t,e=!1,s=null,o=!1,r=!1){this.variableNames=["x","W"],this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=t.outShape,this.enableShapeUniforms=Ue(this.outputShape.length);const i=t.filterHeight,a=t.filterWidth,l=t.outChannels/t.inChannels;let c="",u="";s&&(o?c=`float activation(float a) {
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
    `}}class jy{constructor(t,e=!1,s=null,o=!1,r=!1){this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=t.outShape,this.enableShapeUniforms=Ue(this.outputShape.length);const i=t.outChannels/t.inChannels,a=t.padInfo.left,l=t.strideWidth,c=t.dilationWidth,u=t.filterHeight,h=t.filterWidth,d=h;let p=`
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
                `,b+1<h)){const y=a%2===0?On(c):c;c%2===0&&a%2===1||c%2!==0&&a%2!==1?(p+=`
                  xCOffset = xC + imod(pads[1], 2) + ${y};

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
                    `):y===1?p+=`
                    xC${b+1} = xTexelC${b};
                    `:p+=`
                    xCOffset = xC + ${y};

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
    `}}function M4(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,filter:r}=t,{strides:i,pad:a,dilations:l,dimRoundingMode:c}=s;let u=l;u==null&&(u=[1,1]),T(ze(i,u),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${i} and dilations '${u}'`);const h=Ae(o.shape,r.shape,i,u,a,c,!0);let d;H().getBool("WEBGL_PACK_DEPTHWISECONV")&&h.strideWidth<=2&&h.outChannels/h.inChannels===1?d=new jy(h):d=new Ky(h);const p=[[h.padInfo.top,h.padInfo.left],[h.strideHeight,h.strideWidth],[h.dilationHeight,h.dilationWidth],[h.inHeight,h.inWidth]];return e.runWebGLProgram(d,[o,r],"float32",p)}const L4={kernelName:Oa,backendName:"webgl",kernelFunc:M4};class P4{constructor(t){this.variableNames=["x","dy"],this.outputShape=t.filterShape;const e=t.strideHeight,s=t.strideWidth,o=t.padInfo.top,r=t.padInfo.left,i=t.outChannels/t.inChannels;this.userCode=`
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
    `}}class B4{constructor(t){this.variableNames=["dy","W"],this.outputShape=t.inShape;const e=t.filterHeight,s=t.filterWidth,o=t.strideHeight,r=t.strideWidth,i=e-1-t.padInfo.top,a=s-1-t.padInfo.left,l=t.outChannels/t.inChannels;this.userCode=`
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
    `}}function z4(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,dy:r}=t,{strides:i,dilations:a,pad:l,dimRoundingMode:c,filterShape:u}=s,h=Ae(o.shape,u,i,a,l,c,!0),d=new P4(h);return e.runWebGLProgram(d,[o,r],"float32")}const V4={kernelName:Nu,backendName:"webgl",kernelFunc:z4};function W4(n){const{inputs:t,backend:e,attrs:s}=n,{dy:o,filter:r}=t,{strides:i,dilations:a,pad:l,dimRoundingMode:c,inputShape:u}=s,h=Ae(u,r.shape,i,a,l,c,!0),d=new B4(h);return e.runWebGLProgram(d,[o,r],"float32")}const U4={kernelName:Tu,backendName:"webgl",kernelFunc:W4};class G4{constructor(t){this.variableNames=["X"],this.outputShape=[t,t],this.userCode=`
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `}}function H4(n){const{inputs:t,backend:e}=n,{x:s}=t,o=[...s.shape,...s.shape],r=K(s.shape),i=rt({inputs:{x:s},backend:e,attrs:{shape:[r]}}),a=new G4(r),l=e.runWebGLProgram(a,[i],i.dtype),c=rt({inputs:{x:l},backend:e,attrs:{shape:o}});return e.disposeIntermediateTensorInfo(i),e.disposeIntermediateTensorInfo(l),c}const q4={kernelName:ef,backendName:"webgl",kernelFunc:H4};class X4{constructor(t){this.variableNames=["x","W"],this.outputShape=t.outShape;const{inHeight:e,inWidth:s,padInfo:o,strideHeight:r,strideWidth:i,filterHeight:a,filterWidth:l,dilationHeight:c,dilationWidth:u}=t,{top:h,left:d}=o;this.userCode=`
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
    `}}function K4(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,filter:r}=t,{strides:i,pad:a,dilations:l}=s,c=Ei(o.shape,r.shape,i,a,"NHWC",l);let u;const h=new X4(c);u=e.runWebGLProgram(h,[o,r],"float32");const d=rt({inputs:{x:u},backend:e,attrs:{shape:c.outShape}});return e.disposeIntermediateTensorInfo(u),d}const j4={kernelName:Ma,backendName:"webgl",kernelFunc:K4};function Y4(n){const{inputs:t,backend:e,attrs:s}=n,{equation:o}=s,r=t,{allDims:i,summedDims:a,idDims:l}=md(o,r.length);xd(i.length,l,r);const{path:c,steps:u}=bd(a,l),h=u.length;let d=null,p=i.length;const f=[];for(let m=0;m<h;++m){for(const g of u[m]){const{permutationIndices:x,expandDims:b}=gd(p,l[g]);let y;yd(x)?y=r[g]:(y=Ye({inputs:{x:r[g]},backend:e,attrs:{perm:x}}),f.push(y));const w=y.shape.slice();for(let C=0;C<b.length;++C)w.splice(b[C],0,1);Bt(y.shape,w)||(y=rt({inputs:{x:y},backend:e,attrs:{shape:w}}),f.push(y)),d===null?d=y:(d=Ep({inputs:{a:y,b:d},backend:e}),f.push(d))}m<h-1&&(c[m]>=0&&(d=Vc({inputs:{x:d},backend:e,attrs:{axis:c[m]-(i.length-p),keepDims:!1}}),f.push(d)),p--)}for(const m of f)m!==d&&e.disposeIntermediateTensorInfo(m);return d}const Z4={kernelName:Au,backendName:"webgl",kernelFunc:Y4};const Q4=Mt({opSnippet:"return (x >= 0.0) ? x : (exp(x) - 1.0);",packedOpSnippet:`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`}),J4={kernelName:Ur,backendName:"webgl",kernelFunc:Q4};const tV="return (b >= 0.0) ? a : a * (b + 1.0);",eV=`
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`,nV={kernelName:Du,backendName:"webgl",kernelFunc:n=>{const{inputs:t,backend:e}=n,{dy:s,y:o}=t,r=H().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new br(eV,s.shape,o.shape):new _o(tV,s.shape,o.shape);return e.runWebGLProgram(r,[s,o],s.dtype)}};const sV=_e({opSnippet:"return float(a == b);",packedOpSnippet:`
  return vec4(equal(a, b));
`,dtype:"bool",cpuKernelImpl:HP}),oV={kernelName:La,backendName:"webgl",kernelFunc:sV};const rV=`
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
`,iV=Mt({opSnippet:rV}),aV={kernelName:Gr,backendName:"webgl",kernelFunc:iV};const lV=yr+`
  return exp(x);
`,Yy=Mt({opSnippet:lV,packedOpSnippet:`
  vec4 result = exp(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,cpuKernelImpl:qP,dtype:"float32"}),cV={kernelName:Hr,backendName:"webgl",kernelFunc:Yy};function Fp(n){const{inputs:t,attrs:e,backend:s}=n,{dim:o}=e,{input:r}=t,i=r.shape.length,a=r.shape.slice();let l=o;return o<0&&(T(-(i+1)<=o,()=>`Axis must be in the interval [${-(i+1)}, ${i}]`),l=i+o+1),a.splice(l,0,1),rt({inputs:{x:r},backend:s,attrs:{shape:a}})}const uV={kernelName:Pa,backendName:"webgl",kernelFunc:Fp};const Zy="return exp(x) - 1.0;",hV=Mt({opSnippet:Zy,packedOpSnippet:Zy,cpuKernelImpl:XP}),dV={kernelName:qr,backendName:"webgl",kernelFunc:hV};class Qy{constructor(t,e,s){this.variableNames=["real","imag"];const o=e[1];this.outputShape=e;const r=s?`2.0 * ${Math.PI}`:`-2.0 * ${Math.PI}`,i=s?`${o}.0`:"1.0";let a;if(t==="real")a="return real * expR - imag * expI;";else if(t==="imag")a="return real * expI + imag * expR;";else throw new Error(`FFT component must be either "real" or "imag", got ${t}.`);this.userCode=`
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
    `}}function Jy(n,t,e){const s=e.texData.get(n.dataId),o=K(n.shape),r=n.shape[n.shape.length-1],i=o/r,a=rt({inputs:{x:n},backend:e,attrs:{shape:[i,r]}}),l=a.shape,c=new Qy("real",l,t),u=new Qy("imag",l,t),h=[{dataId:s.complexTensorInfos.real.dataId,dtype:s.complexTensorInfos.real.dtype,shape:l},{dataId:s.complexTensorInfos.imag.dataId,dtype:s.complexTensorInfos.imag.dtype,shape:l}],d=e.runWebGLProgram(c,h,"float32"),p=e.runWebGLProgram(u,h,"float32"),f=Qs({inputs:{real:d,imag:p},backend:e});e.disposeIntermediateTensorInfo(d),e.disposeIntermediateTensorInfo(p);const m=rt({inputs:{x:f},backend:e,attrs:{shape:n.shape}});return e.disposeIntermediateTensorInfo(a),e.disposeIntermediateTensorInfo(f),m}function pV(n){const{inputs:t,backend:e}=n,{input:s}=t;return Jy(s,!1,e)}const fV={kernelName:Fu,backendName:"webgl",kernelFunc:pV};class mV{constructor(t,e){this.outputShape=[],this.customUniforms=[{name:"value",type:"float"}],this.variableNames=["x"],this.outputShape=t,this.userCode=`
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `}}function xa(n){const{backend:t,attrs:e}=n,{shape:s,value:o}=e;let{dtype:r}=e;if(r=r||Vo(o),r==="string"){const i=oe(r,K(s));return i.fill(o),t.makeTensorInfo(s,r,i)}else{const i=new mV(s,o),a=[[o]];return t.runWebGLProgram(i,[],r,a)}}const gV={kernelName:_u,backendName:"webgl",kernelFunc:xa};class xV{constructor(t){this.variableNames=["Image"],this.outputShape=[];const e=t[2];this.outputShape=t,this.userCode=`
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
    `}}const bV={kernelName:Ou,backendName:"webgl",kernelFunc:({inputs:n,backend:t})=>{const{image:e}=n,s=t,o=new xV(e.shape);return s.runWebGLProgram(o,[e],e.dtype)}};const tw="return floor(x);",yV=Mt({opSnippet:tw,packedOpSnippet:tw,cpuKernelImpl:KP}),wV={kernelName:Xr,backendName:"webgl",kernelFunc:yV};const CV=_e({opSnippet:`
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
`,dtype:"int32"}),$V={kernelName:Kr,backendName:"webgl",kernelFunc:CV};class IV{constructor(t){this.variableNames=["A"];const e=Ke(),[s,o]=t;this.outputShape=t,this.userCode=`
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
    `}}class vV{constructor(t){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;const e=Ke(),[s,o]=t;this.outputShape=t,this.userCode=`
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
    `}}const kV={kernelName:jw,backendName:"webgl",kernelFunc:SV};let Cr,_p=H().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");function SV(n){const{inputs:t,backend:e,attrs:s}=n;let{pixels:o}=t;const{numChannels:r}=s,i=typeof HTMLVideoElement!="undefined"&&o instanceof HTMLVideoElement,a=typeof HTMLImageElement!="undefined"&&o instanceof HTMLImageElement,[l,c]=i?[o.videoWidth,o.videoHeight]:[o.width,o.height],u=[c,l],h=[c,l,r];if(a||i){const m=H().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");(Cr==null||m!==_p)&&(_p=m,Cr=document.createElement("canvas").getContext("2d",{willReadFrequently:_p})),Cr.canvas.width=l,Cr.canvas.height=c,Cr.drawImage(o,0,0,l,c),o=Cr.canvas}const d=e.makeTensorInfo(u,"int32");e.texData.get(d.dataId).usage=Cn.PIXELS,e.gpgpu.uploadPixelDataToTexture(e.getTexture(d.dataId),o);const p=H().getBool("WEBGL_PACK")?new vV(h):new IV(h),f=e.runWebGLProgram(p,[d],"int32");return e.disposeData(d.dataId),f}function NV(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,filter:r,bias:i,preluActivationWeights:a}=t,{strides:l,pad:c,dataFormat:u,dilations:h,dimRoundingMode:d,activation:p,leakyreluAlpha:f}=s,m=ms(u),g=Ae(o.shape,r.shape,l,h,c,d,!1,m);let x;const b=[],y=i!=null,w=a!=null,C=p==="leakyrelu",I=()=>{const N=[o,r],k=(S,$)=>{if($==="NCHW"&&S.shape.length===1&&S.shape[0]!==1){const E=rt({inputs:{x:S},backend:e,attrs:{shape:[S.shape[0],1,1]}});return b.push(E),E}return S};if(y&&N.push(k(i,u)),w&&N.push(k(a,u)),C){const S=e.makeTensorInfo([],"float32",Rs(f,"float32"));N.push(S),b.push(S)}return N};if(g.filterHeight===1&&g.filterWidth===1&&g.dilationHeight===1&&g.dilationWidth===1&&g.strideHeight===1&&g.strideWidth===1&&(g.padInfo.type==="SAME"||g.padInfo.type==="VALID"))x=Wy({x:o,filter:r,convInfo:g,backend:e,bias:i,activation:p,preluActivationWeights:a,leakyreluAlpha:f});else if(g.strideWidth<=2&&m==="channelsLast"&&H().getBool("WEBGL_EXP_CONV")){const N=p?da(p,!0):null,k=new Vy(g,y,N,w,C),S=[[g.padInfo.top,g.padInfo.left],[g.strideHeight,g.strideWidth],[g.dilationHeight,g.dilationWidth],[g.inHeight,g.inWidth]],$=I();x=e.runWebGLProgram(k,$,"float32",S)}else if(H().getBool("WEBGL_CONV_IM2COL"))x=Uy({x:o,filter:r,convInfo:g,backend:e,bias:i,activation:p,preluActivationWeights:a,leakyreluAlpha:f});else{const N=p?da(p,!1):null,k=new zy(g,y,N,w,C),S=I();x=e.runWebGLProgram(k,S,"float32")}const v=rt({inputs:{x},backend:e,attrs:{shape:g.outShape}});return b.push(x),b.forEach(N=>e.disposeIntermediateTensorInfo(N)),v}const TV={kernelName:Il,backendName:"webgl",kernelFunc:NV};function EV(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,filter:r,bias:i,preluActivationWeights:a}=t,{strides:l,pad:c,dilations:u,dimRoundingMode:h,activation:d,leakyreluAlpha:p}=s,f=[];let m=u;m==null&&(m=[1,1]),T(ze(l,m),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${l} and dilations '${m}'`);const g=Ae(o.shape,r.shape,l,m,c,h,!0),x=H().getBool("WEBGL_PACK_DEPTHWISECONV")&&g.strideWidth<=2&&g.outChannels/g.inChannels===1,b=d?da(d,x):null,y=[o,r],w=i!=null,C=a!=null,I=d==="leakyrelu";if(w&&y.push(i),C&&y.push(a),I){const S=e.makeTensorInfo([],"float32",Rs(p,"float32"));y.push(S),f.push(S)}let v;x?v=new jy(g,w,b,C,I):v=new Ky(g,w,b,C,I);const N=[[g.padInfo.top,g.padInfo.left],[g.strideHeight,g.strideWidth],[g.dilationHeight,g.dilationWidth],[g.inHeight,g.inWidth]],k=e.runWebGLProgram(v,y,"float32",N);return f.forEach(S=>e.disposeIntermediateTensorInfo(S)),k}const RV={kernelName:Cf,backendName:"webgl",kernelFunc:EV};class AV{constructor(t,e,s,o){this.sliceDim=t,this.strides=e,this.paramsShape=o,this.variableNames=["x","indices"],this.outputShape=s;const r=Gt(s.length);let i=`
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
      `}}function DV(n){const{inputs:t,backend:e}=n,{params:s,indices:o}=t,r=o.shape,i=r[r.length-1],a=K(s.shape),[l,c,u,h]=Jh(s,o),d=rt({inputs:{x:o},backend:e,attrs:{shape:[c,i]}}),p=rt({inputs:{x:s},backend:e,attrs:{shape:[K(s.shape)/u,u]}});if(e.shouldExecuteOnCPU([s,o])||s.dtype==="string"){const x=e.readSync(o.dataId),b=e.bufferSync(s),y=jP(x,b,s.dtype,c,i,u,h,s.shape,a);return e.makeTensorInfo(l,s.dtype,y.values)}const f=new AV(i,h,[c,u],s.shape),m=e.runWebGLProgram(f,[p,d],p.dtype),g=rt({inputs:{x:m},backend:e,attrs:{shape:l}});return e.disposeIntermediateTensorInfo(d),e.disposeIntermediateTensorInfo(p),e.disposeIntermediateTensorInfo(m),g}const FV={kernelName:nf,backendName:"webgl",kernelFunc:DV};class _V{constructor(t,e){this.variableNames=["A","indices"],this.outputShape=e,this.rank=e.length;const s=Gt(this.rank),o=OV(t);this.userCode=`
      void main() {
        ${s} resRC = getOutputCoords();
        int index = int(getIndices(resRC.x, resRC.z));
        float inBounds = (index >= 0) && (index < ${t[2]}) ? 1.0 : 0.0;
        setOutput(inBounds * getA(${o}));
      }
    `}}function OV(n,t){const e=["resRC.x","resRC.y","resRC.z","resRC.w"],s=[];for(let o=0;o<n.length;o++)o===2?s.push("index"):s.push(`${e[o]}`);return s.join()}function ew(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,indices:r}=t,{axis:i,batchDims:a}=s,l=Tt(i,o.shape)[0];if(H().get("DEBUG")){const b=e.readSync(r.dataId),y=o.shape[l];for(let w=0;w<b.length;++w){const C=b[w];T(C<=y-1&&C>=0,()=>`GatherV2: the index value ${C} is not in [0, ${y-1}]`)}}const c=Pg(o,r,l,a),u=K(r.shape),h=[],d=rt({inputs:{x:o},backend:e,attrs:{shape:[c.batchSize,c.outerSize,c.dimSize,c.sliceSize]}}),p=rt({inputs:{x:r},backend:e,attrs:{shape:[c.batchSize,u/c.batchSize]}});h.push(d),h.push(p);const f=[c.batchSize,c.outerSize,u/c.batchSize,c.sliceSize];if(e.shouldExecuteOnCPU([o,r])||o.dtype==="string"){const b=e.bufferSync(p),y=e.bufferSync(d),w=YP(y,b,f);return h.forEach(C=>e.disposeIntermediateTensorInfo(C)),e.makeTensorInfo(c.outputShape,w.dtype,w.values)}const m=new _V(d.shape,f),g=e.runWebGLProgram(m,[d,p],d.dtype);h.push(g);const x=rt({inputs:{x:g},backend:e,attrs:{shape:c.outputShape}});return h.forEach(b=>e.disposeIntermediateTensorInfo(b)),x}const MV={kernelName:za,backendName:"webgl",kernelFunc:ew};const LV=_e({opSnippet:"return float(a > b);",packedOpSnippet:`
  return vec4(greaterThan(a, b));
`,cpuKernelImpl:ZP,dtype:"bool"}),PV={kernelName:Va,backendName:"webgl",kernelFunc:LV};const BV=_e({opSnippet:"return float(a >= b);",packedOpSnippet:`
  return vec4(greaterThanEqual(a, b));
`,dtype:"bool",cpuKernelImpl:QP}),zV={kernelName:jr,backendName:"webgl",kernelFunc:BV};function VV(n){const{inputs:t,backend:e}=n,{input:s}=t;return Jy(s,!0,e)}const WV={kernelName:Mu,backendName:"webgl",kernelFunc:VV};const UV=Mt({opSnippet:"return float(!isnan(x) && !isinf(x));",dtype:"bool"}),GV={kernelName:Zr,backendName:"webgl",kernelFunc:UV};const HV=Mt({opSnippet:"return float(isinf(x));",dtype:"bool"}),qV={kernelName:Qr,backendName:"webgl",kernelFunc:HV};const XV=Mt({opSnippet:"return float(isnan(x));",dtype:"bool"}),KV={kernelName:Jr,backendName:"webgl",kernelFunc:XV};const jV=_e({opSnippet:"return float(a < b);",packedOpSnippet:`
  return vec4(lessThan(a, b));
`,cpuKernelImpl:JP,dtype:"bool"}),YV={kernelName:Ua,backendName:"webgl",kernelFunc:jV};const ZV=_e({opSnippet:"return float(a <= b);",packedOpSnippet:`
  return vec4(lessThanEqual(a, b));
`,cpuKernelImpl:t3,dtype:"bool"}),QV={kernelName:Ga,backendName:"webgl",kernelFunc:ZV};function JV(n){const{backend:t,attrs:e}=n,{start:s,stop:o,num:r}=e,i=e3(s,o,r);return t.makeTensorInfo([i.length],"float32",i)}const tW={kernelName:sf,backendName:"webgl",kernelFunc:JV};const eW=yr+`
  return x < 0.0 ? 0./0. : log(x);
`,nW=Mt({opSnippet:eW,packedOpSnippet:`
  vec4 result = log(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : (x.r < 0.0 ? 0./0. : result.r);
  result.g = isNaN.g ? x.g : (x.g < 0.0 ? 0./0. : result.g);
  result.b = isNaN.b ? x.b : (x.b < 0.0 ? 0./0. : result.b);
  result.a = isNaN.a ? x.a : (x.a < 0.0 ? 0./0. : result.a);
  return result;
`,cpuKernelImpl:n3}),sW={kernelName:ti,backendName:"webgl",kernelFunc:nW};const oW=yr+`
  return log(1.0 + x);
`,rW=Mt({opSnippet:oW}),iW={kernelName:ei,backendName:"webgl",kernelFunc:rW};const aW=_e({opSnippet:"return float(a >= 1.0 && b >= 1.0);",packedOpSnippet:`
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`,dtype:"bool"}),lW={kernelName:Ha,backendName:"webgl",kernelFunc:aW};const cW=Mt({opSnippet:"return float(!(x >= 1.0));"}),uW={kernelName:qa,backendName:"webgl",kernelFunc:cW};const hW=_e({opSnippet:"return float(a >= 1.0 || b >= 1.0);",packedOpSnippet:`
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`,dtype:"bool"}),dW={kernelName:Xa,backendName:"webgl",kernelFunc:hW};class pW{constructor(t,e,s,o,r){this.variableNames=["x"],this.outputShape=[];const i=e,a=t[3]-1;this.outputShape=t;let l;const c=`float(${s}) + float(${o}) * sum`;r===.5?l=`inversesqrt(${c})`:r===1?l=`1.0/(${c})`:l=`exp(log(${c}) * float(-${r}));`,this.userCode=`
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
    `}}class fW{constructor(t,e,s,o,r){this.variableNames=["x"],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;const i=e,a=t[3]-1;this.outputShape=t;let l;const c=`float(${s}) + float(${o}) * sum`;r===.5?l=`inversesqrt(${c})`:r===1?l=`1.0/(${c})`:l=`exp(log(${c}) * float(-${r}));`,this.userCode=`
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
    `}}const mW={kernelName:Ka,backendName:"webgl",kernelFunc:n=>{const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{depthRadius:r,bias:i,alpha:a,beta:l}=s,c=H().getBool("WEBGL_PACK_NORMALIZATION")?new fW(o.shape,r,i,a,l):new pW(o.shape,r,i,a,l);return e.runWebGLProgram(c,[o],o.dtype)}};class gW{constructor(t,e,s,o,r){this.variableNames=["inputImage","outputImage","dy"],this.outputShape=[],this.outputShape=t,this.depth=t[3],this.depthRadius=e,this.bias=s,this.alpha=o,this.beta=r,this.userCode=`
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
    `}}const xW={kernelName:Pu,backendName:"webgl",kernelFunc:n=>{const{inputs:t,backend:e,attrs:s}=n,{x:o,y:r,dy:i}=t,{depthRadius:a,bias:l,alpha:c,beta:u}=s,h=new gW(o.shape,a,l,c,u);return e.runWebGLProgram(h,[o,r,i],o.dtype)}};function bW(n,t,e,s){const o=K(t),i=K(n.shape)/o,a=rt({inputs:{x:n},attrs:{shape:[i,o]},backend:s}),l=Mo(a,n.dtype,"max",s),c=rt({inputs:{x:l},attrs:{shape:e},backend:s});return s.disposeIntermediateTensorInfo(a),s.disposeIntermediateTensorInfo(l),c}function nw(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{reductionIndices:r,keepDims:i}=s,a=o.shape.length,l=Tt(r,o.shape);let c=l;const u=ee(c,a),h=u!=null,d=e.shouldExecuteOnCPU([o]);let p=o;if(h){if(d){const y=e.texData.get(p.dataId).values,w=new Array(a);for(let v=0;v<w.length;v++)w[v]=o.shape[u[v]];const C=Np(y,o.shape,o.dtype,u,w);p=e.makeTensorInfo(w,o.dtype);const I=e.texData.get(p.dataId);I.values=C}else p=zc(o,u,e);c=ie(c.length,a)}De("max",c,a);const[f,m]=ke(p.shape,c);let g=f;i&&(g=he(f,l));let x;if(d){const y=e.texData.get(p.dataId).values,w=s3(y,K(m),g,o.dtype);x=e.makeTensorInfo(g,o.dtype);const C=e.texData.get(x.dataId);C.values=w}else x=bW(p,m,g,e);return h&&e.disposeIntermediateTensorInfo(p),x}const yW={kernelName:ja,backendName:"webgl",kernelFunc:nw};const wW=Tp+`
  return max(a, b);
`,CW=`
  vec4 result = vec4(max(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+Oo+`
  return result;
`,$W=_e({opSnippet:wW,packedOpSnippet:CW,cpuKernelImpl:o3}),IW={kernelName:ni,backendName:"webgl",kernelFunc:$W};function vW(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t;ua(o,"maxPool");const{filterSize:r,strides:i,pad:a,dimRoundingMode:l}=s,c=1;T(ze(i,c),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${c}'`);const u=In(o.shape,r,i,c,a,l);if(u.filterWidth===1&&u.filterHeight===1&&Bt(u.inShape,u.outShape))return fn({inputs:{x:o},backend:e});const h=new pa(u,"max",!1);return e.runWebGLProgram(h,[o],o.dtype)}const kW={kernelName:Ya,backendName:"webgl",kernelFunc:vW};function SW(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{filterSize:r,strides:i,pad:a,dataFormat:l,dimRoundingMode:c}=s,u=[1,1,1],h=fs(o.shape,r,i,u,a,c,l),d=new Rp(h,"max",!1);return e.runWebGLProgram(d,[o],o.dtype)}const NW={kernelName:Za,backendName:"webgl",kernelFunc:SW};class TW{constructor(t){this.variableNames=["dy","maxPos"],this.outputShape=t.inShape;const e=t.strideHeight,s=t.strideWidth,o=t.dilationHeight,r=t.effectiveFilterHeight,i=t.effectiveFilterWidth,a=r-1-t.padInfo.top,l=i-1-t.padInfo.left,c=r*i-1;this.userCode=`
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
    `}}class EW{constructor(t){this.variableNames=["dy","maxPos"],this.outputShape=t.inShape;const e=t.strideDepth,s=t.strideHeight,o=t.strideWidth,r=t.dilationDepth,i=t.dilationHeight,a=t.dilationWidth,l=t.effectiveFilterDepth,c=t.effectiveFilterHeight,u=t.effectiveFilterWidth,h=l-1-t.padInfo.front,d=c-1-t.padInfo.top,p=u-1-t.padInfo.left,f=l*c*u-1;this.userCode=`
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
    `}}function RW(n){const{inputs:t,backend:e,attrs:s}=n,{dy:o,input:r}=t,i=r,{filterSize:a,strides:l,pad:c,dimRoundingMode:u}=s,h=[1,1,1],d=fs(i.shape,a,l,h,c,u),p=new Rp(d,"max",!0),f=e.runWebGLProgram(p,[i],i.dtype),m=new EW(d),g=e.runWebGLProgram(m,[o,f],i.dtype);return e.disposeIntermediateTensorInfo(f),g}const AW={kernelName:zu,backendName:"webgl",kernelFunc:RW};function DW(n){const{inputs:t,backend:e,attrs:s}=n,{dy:o,input:r,output:i}=t,a=r;ua([r,i],"maxPoolGrad");const{filterSize:l,strides:c,pad:u,dimRoundingMode:h}=s,d=In(a.shape,l,c,1,u,h),p=!0,f=new pa(d,"max",p),m=e.runWebGLProgram(f,[a],a.dtype),g=new TW(d),x=e.runWebGLProgram(g,[o,m],a.dtype);return e.disposeIntermediateTensorInfo(m),x}const FW={kernelName:Bu,backendName:"webgl",kernelFunc:DW};function _W(n,t,e,s){let o=new pa(e,"max",!1);const r=s.runWebGLProgram(o,[n],"float32");o=new pa(e,"max",!0,!0,t);const i=s.runWebGLProgram(o,[n],"float32");return[r,i]}const OW={kernelName:of,backendName:"webgl",kernelFunc:({inputs:n,attrs:t,backend:e})=>{const{x:s}=n,{filterSize:o,strides:r,pad:i,includeBatchInIndex:a}=t,l=e;T(s.shape.length===4,()=>`Error in maxPool: input must be rank 4 but got rank ${s.shape.length}.`);const c=[1,1];T(ze(r,c),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${r} and dilations '${c}'`);const u=In(s.shape,o,r,c,i),[h,d]=_W(s,a,u,l);return[h,d]}};function MW(n,t,e,s){const o=K(t),i=K(n.shape)/o,a=rt({inputs:{x:n},attrs:{shape:[i,o]},backend:s}),l=Mo(a,"float32","mean",s),c=rt({inputs:{x:l},attrs:{shape:e},backend:s});return s.disposeIntermediateTensorInfo(a),s.disposeIntermediateTensorInfo(l),c}const LW={kernelName:Qa,backendName:"webgl",kernelFunc:({inputs:n,attrs:t,backend:e})=>{const{x:s}=n,{keepDims:o,axis:r}=t,i=e,a=s.shape.length,l=Tt(r,s.shape);let c=l;const u=ee(c,a),h=u!=null,d=i.shouldExecuteOnCPU([s]),p=[];let f=s;if(h){if(d){const w=i.texData.get(f.dataId).values,C=new Array(a);for(let N=0;N<C.length;N++)C[N]=s.shape[u[N]];const I=Np(w,s.shape,s.dtype,u,C);f=i.makeTensorInfo(C,s.dtype);const v=i.texData.get(f.dataId);v.values=I}else f=zc(s,u,i);p.push(f),c=ie(c.length,a)}De("sum",c,a);const[m,g]=ke(f.shape,c);let x=m;o&&(x=he(m,l));const b=MW(f,g,x,i);for(const y of p)i.disposeIntermediateTensorInfo(y);return b}};function PW(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,keepDims:i}=s,a=o.shape.length,l=Tt(r,o.shape);let c=l;const u=ee(c,a);let h=o;u!=null&&(h=Ye({inputs:{x:o},backend:e,attrs:{perm:u}}),c=ie(c.length,o.shape.length)),De("min",c,a);const[d,p]=ke(h.shape,c),f=K(p),m=rt({inputs:{x:h},backend:e,attrs:{shape:[-1,f]}}),g=Mo(m,m.dtype,"min",e);let x;if(i){const b=he(d,l);x=rt({inputs:{x:g},backend:e,attrs:{shape:b}})}else x=rt({inputs:{x:g},backend:e,attrs:{shape:d}});return e.disposeIntermediateTensorInfo(m),e.disposeIntermediateTensorInfo(g),u!=null&&e.disposeIntermediateTensorInfo(h),x}const BW={kernelName:Ja,backendName:"webgl",kernelFunc:PW};const zW=Tp+`
  return min(a, b);
`,VW=`
  vec4 result = vec4(min(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+Oo+`
  return result;
`,WW=_e({opSnippet:zW,packedOpSnippet:VW,cpuKernelImpl:r3}),UW={kernelName:si,backendName:"webgl",kernelFunc:WW};class GW{constructor(t,e,s){this.variableNames=["x"],this.outputShape=e.map((u,h)=>u[0]+t[h]+u[1]);const o=t.length,r=Gt(o),i=e.map(u=>u[0]).join(","),a=e.map((u,h)=>u[0]+t[h]).join(","),l=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,o),c=s==="reflect"?0:1;if(o===1){this.userCode=`
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
    `}}class HW{constructor(t,e,s){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e.map((f,m)=>f[0]+t[m]+f[1]);const o=t.length,r=Gt(o),i=e.map(f=>f[0]).join(","),a=e.map((f,m)=>f[0]+t[m]).join(","),l=je("rc",o),c=je("source",o),u=`${l[o-1]} < ${this.outputShape[o-1]}`,h=o===1?"source":`vec2(${c.slice(-2).join()})`,d=s==="reflect"?0:1;let p="";if(o===1){const f=`
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
    `}}const qW={kernelName:tl,backendName:"webgl",kernelFunc:({inputs:n,backend:t,attrs:e})=>{const{x:s}=n,{paddings:o,mode:r}=e,i=H().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new HW(s.shape,o,r):new GW(s.shape,o,r);return t.runWebGLProgram(i,[s],s.dtype)}};const XW=`if (b == 0.0) return NAN;
  return mod(a, b);`,KW=`
  vec4 result = mod(a, b);
  bvec4 isNaN = equal(b, vec4(0.0));
  `+Oo+`
  return result;
`,jW=_e({opSnippet:XW,packedOpSnippet:KW}),YW={kernelName:oi,backendName:"webgl",kernelFunc:jW};class ZW{constructor(t,e,s){this.variableNames=["probs"],this.customUniforms=[{name:"seed",type:"float"}],this.outputShape=[t,s],this.userCode=`
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
    `}}const sw=_e({opSnippet:`
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
`,checkOutOfBounds:!0}),QW={kernelName:Wr,backendName:"webgl",kernelFunc:sw};const ow="return a - b;",rw=_e({opSnippet:ow,packedOpSnippet:ow,supportsComplex:!0,cpuKernelImpl:S3}),JW={kernelName:wi,backendName:"webgl",kernelFunc:rw};function iw(n){const{inputs:t,backend:e,attrs:s}=n,{logits:o}=t,{dim:r}=s,i=Tt([r],o.shape),a=nw({inputs:{x:o},backend:e,attrs:{reductionIndices:i,keepDims:!1}}),l=he(a.shape,i),c=rt({inputs:{x:a},backend:e,attrs:{shape:l}}),u=rw({inputs:{a:o,b:c},backend:e}),h=Yy({inputs:{x:u},backend:e}),d=Vc({inputs:{x:h},backend:e,attrs:{axis:i,keepDims:!1}}),p=rt({inputs:{x:d},backend:e,attrs:{shape:l}}),f=sw({inputs:{a:h,b:p},backend:e});return e.disposeIntermediateTensorInfo(a),e.disposeIntermediateTensorInfo(c),e.disposeIntermediateTensorInfo(u),e.disposeIntermediateTensorInfo(h),e.disposeIntermediateTensorInfo(d),e.disposeIntermediateTensorInfo(p),f}const tU={kernelName:bl,backendName:"webgl",kernelFunc:iw};function eU(n){const{inputs:t,backend:e,attrs:s}=n,{logits:o}=t,{numSamples:r,seed:i,normalized:a}=s,l=a?o:iw({inputs:{logits:o},backend:e,attrs:{dim:o.shape.length-1}}),c=l.shape[0],u=l.shape[1],h=new ZW(c,u,r),d=[[i]],p=e.runWebGLProgram(h,[l],"int32",d);return a||e.disposeIntermediateTensorInfo(l),p}const nU={kernelName:rf,backendName:"webgl",kernelFunc:eU};const sU=Dn+`
  return -x;
`,oU=`
  vec4 result = -x;
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`;function rU(n){const{inputs:t,backend:e}=n,{x:s}=t;if(e.shouldExecuteOnCPU([s])){const r=e.texData.get(s.dataId),[i,a]=a3(r.values,s.shape,s.dtype);return e.makeTensorInfo(a,s.dtype,i)}let o;return H().getBool("WEBGL_PACK_UNARY_OPERATIONS")?o=new Zs(s.shape,oU):o=new us(s.shape,sU),e.runWebGLProgram(o,[s],s.dtype)}const iU={kernelName:el,backendName:"webgl",kernelFunc:rU};const aU=Xh;function lU(n){gn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:t,backend:e,attrs:s}=n,{boxes:o,scores:r}=t,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l}=s,c=e.readSync(o.dataId),u=e.readSync(r.dataId),{selectedIndices:h}=aU(c,u,i,a,l);return e.makeTensorInfo([h.length],"int32",new Int32Array(h))}const cU={kernelName:Vu,backendName:"webgl",kernelFunc:lU};const uU=Kh;function hU(n){gn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:t,backend:e,attrs:s}=n,{boxes:o,scores:r}=t,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l,padToMaxOutputSize:c}=s,u=e.readSync(o.dataId),h=e.readSync(r.dataId),{selectedIndices:d,validOutputs:p}=uU(u,h,i,a,l,c);return[e.makeTensorInfo([d.length],"int32",new Int32Array(d)),e.makeTensorInfo([],"int32",new Int32Array([p]))]}const dU={kernelName:Wu,backendName:"webgl",kernelFunc:hU};const pU=jh;function fU(n){gn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:t,backend:e,attrs:s}=n,{boxes:o,scores:r}=t,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l,softNmsSigma:c}=s,u=e.readSync(o.dataId),h=e.readSync(r.dataId),d=i,p=a,f=l,m=c,{selectedIndices:g,selectedScores:x}=pU(u,h,d,p,f,m);return[e.makeTensorInfo([g.length],"int32",new Int32Array(g)),e.makeTensorInfo([x.length],"float32",new Float32Array(x))]}const mU={kernelName:Uu,backendName:"webgl",kernelFunc:fU};class gU{constructor(t,e,s,o){this.variableNames=["indices"],this.outputShape=[t,e],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(${o}), float(${s}),
                      float(index == coords.y)));
      }
    `}}const xU={kernelName:ol,backendName:"webgl",kernelFunc:n=>{const{inputs:t,backend:e,attrs:s}=n,{indices:o}=t,{dtype:r,depth:i,onValue:a,offValue:l}=s,c=K(o.shape),u=new gU(c,i,a,l),h=rt({inputs:{x:o},backend:e,attrs:{shape:[c]}}),d=e.runWebGLProgram(u,[h],r);e.disposeIntermediateTensorInfo(h);const p=[...o.shape,i],f=rt({inputs:{x:d},backend:e,attrs:{shape:p}});return e.disposeIntermediateTensorInfo(d),f}};function Xc(n){const{inputs:t,backend:e}=n,{x:s}=t;if(s.dtype==="complex64"){const o=fa({inputs:{input:s},backend:e}),r=Xc({inputs:{x:o},backend:e}),i=Hc({inputs:{input:s},backend:e}),a=Xc({inputs:{x:i},backend:e}),l=Qs({inputs:{real:r,imag:a},backend:e});return e.disposeIntermediateTensorInfo(o),e.disposeIntermediateTensorInfo(r),e.disposeIntermediateTensorInfo(i),e.disposeIntermediateTensorInfo(a),l}else return xa({attrs:{shape:s.shape,dtype:s.dtype,value:s.dtype==="string"?"":0},backend:e})}const bU={kernelName:Cl,backendName:"webgl",kernelFunc:Xc};function aw(n){const{inputs:t,backend:e}=n,{x:s}=t;if(s.dtype==="string")throw new Error("onesLike is not supported under string dtype");if(s.dtype==="complex64"){const o=fa({inputs:{input:s},backend:e}),r=aw({inputs:{x:o},backend:e}),i=Hc({inputs:{input:s},backend:e}),a=Xc({inputs:{x:i},backend:e}),l=Qs({inputs:{real:r,imag:a},backend:e});return e.disposeIntermediateTensorInfo(o),e.disposeIntermediateTensorInfo(r),e.disposeIntermediateTensorInfo(i),e.disposeIntermediateTensorInfo(a),l}else return xa({attrs:{shape:s.shape,dtype:s.dtype,value:1},backend:e})}const yU={kernelName:sl,backendName:"webgl",kernelFunc:aw};function wU(n){const{inputs:t,backend:e,attrs:s}=n,{axis:o}=s;if(t.length===1)return Fp({inputs:{input:t[0]},backend:e,attrs:{dim:o}});const r=t[0].shape,i=t[0].dtype;t.forEach(u=>{su(r,u.shape,"All tensors passed to stack must have matching shapes"),T(i===u.dtype,()=>"All tensors passed to stack must have matching dtypes")});const a=[],l=t.map(u=>{const h=Fp({inputs:{input:u},backend:e,attrs:{dim:o}});return a.push(h),h}),c=By({inputs:l,backend:e,attrs:{axis:o}});return a.forEach(u=>e.disposeIntermediateTensorInfo(u)),c}const CU={kernelName:rl,backendName:"webgl",kernelFunc:wU};class $U{constructor(t,e,s){this.variableNames=["x"],this.customUniforms=[{name:"value",type:"float"}],this.outputShape=e.map((c,u)=>c[0]+t[u]+c[1]);const o=t.length,r=Gt(o),i=e.map(c=>c[0]).join(","),a=e.map((c,u)=>c[0]+t[u]).join(","),l=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,o);if(o===1){this.userCode=`
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
    `}}class IU{constructor(t,e,s){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"value",type:"float"}],this.outputShape=e.map((m,g)=>m[0]+t[g]+m[1]);const o=t.length,r=Gt(o),i=e.map(m=>m[0]).join(","),a=e.map((m,g)=>m[0]+t[g]).join(","),l=je("rc",o),c=je("source",o),u=`${l[o-1]} < ${this.outputShape[o-1]}`,h=o===1?"source":`vec2(${c.slice(-2).join()})`,d=[`${r} rc = outputLoc;`,`${l[o-1]} += 1;
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
    `}}const lw=n=>{const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{paddings:r,constantValue:i}=s;if(K(o.shape)===0){const c=r.map((u,h)=>u[0]+o.shape[h]+u[1]);return xa({backend:e,attrs:{shape:c,value:i,dtype:o.dtype}})}const a=H().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new IU(o.shape,r,i):new $U(o.shape,r,i),l=[[i]];return e.runWebGLProgram(a,[o],o.dtype,l)},vU={kernelName:il,backendName:"webgl",kernelFunc:lw};const kU=`
  if(a < 0.0 && floor(b) < b){
    return NAN;
  }
  if (b == 0.0) {
    return 1.0;
  }
  return (round(mod(b, 2.0)) != 1) ?
      pow(abs(a), b) : sign(a) * pow(abs(a), b);
`,SU=`
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
`,NU=_e({opSnippet:kU,packedOpSnippet:SU}),TU={kernelName:ii,backendName:"webgl",kernelFunc:NU};function EU(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,keepDims:i}=s,a=o.shape.length,l=[],c=Tt(r,o.shape);let u=c;const h=ee(u,a);let d=o;h!=null&&(d=Ye({inputs:{x:o},backend:e,attrs:{perm:h}}),u=ie(u.length,a),l.push(d)),De("prod",u,a);let p;if(e.shouldExecuteOnCPU([d])){const f=e.texData.get(d.dataId).values,{outVals:m,outShape:g,outDtype:x}=c3(d.shape,d.dtype,f,u);p=e.makeTensorInfo(g,x,m)}else{const[f,m]=ke(d.shape,u),g=K(m),x=rt({inputs:{x:d},backend:e,attrs:{shape:[-1,g]}}),b=ch(o.dtype),y=Mo(x,b,"prod",e);p=rt({inputs:{x:y},backend:e,attrs:{shape:f}}),l.push(x),l.push(y)}if(i){l.push(p);const f=he(p.shape,c);p=rt({inputs:{x:p},backend:e,attrs:{shape:f}})}return l.forEach(f=>e.disposeIntermediateTensorInfo(f)),p}const RU={kernelName:ll,backendName:"webgl",kernelFunc:EU};function AU(n){const{inputs:t,backend:e,attrs:s}=n,{paramsNestedSplits:o,paramsDenseValues:r,indices:i}=t,{outputRaggedRank:a}=s,l=o.map(x=>e.readSync(x.dataId)),c=o.map(x=>x.shape),u=e.readSync(r.dataId),h=e.readSync(i.dataId),[d,p,f]=u3(l,c,u,r.shape,r.dtype,h,i.shape,a),m=d.map(x=>e.makeTensorInfo([x.length],"int32",x)),g=e.makeTensorInfo(f,r.dtype,p);return m.concat([g])}const DU={kernelName:af,backendName:"webgl",kernelFunc:AU};function FU(n){const{inputs:t,backend:e}=n,{starts:s,limits:o,deltas:r}=t,i=e.readSync(s.dataId),a=e.readSync(o.dataId),l=e.readSync(r.dataId),[c,u]=h3(i,s.shape,s.dtype,a,o.shape,l,r.shape),h=e.makeTensorInfo([c.length],"int32",c),d=e.makeTensorInfo([u.length],s.dtype,u);return[h,d]}const _U={kernelName:lf,backendName:"webgl",kernelFunc:FU};function OU(n){const{inputs:t,backend:e,attrs:s}=n,{shape:o,values:r,defaultValue:i,rowPartitionTensors:a}=t,{rowPartitionTypes:l}=s,c=e.readSync(o.dataId),u=e.readSync(r.dataId),h=e.readSync(i.dataId),d=a.map(g=>e.readSync(g.dataId)),p=a.map(g=>g.shape),[f,m]=d3(c,o.shape,u,r.shape,r.dtype,h,i.shape,d,p,l);return e.makeTensorInfo(f,r.dtype,m)}const MU={kernelName:cf,backendName:"webgl",kernelFunc:OU};const cw=n=>{const{backend:t,attrs:e}=n,{start:s,stop:o,step:r,dtype:i}=e,a=p3(s,o,r,i);return t.makeTensorInfo([a.length],i,a)},LU={kernelName:Gu,backendName:"webgl",kernelFunc:cw};const PU=Mt({opSnippet:"return 1.0 / x;"}),BU={kernelName:ai,backendName:"webgl",kernelFunc:PU};const zU=Dn+`
  return (x < 0.0) ? 0.0 : x;
`,VU=Mt({opSnippet:zU,packedOpSnippet:`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`}),WU={kernelName:li,backendName:"webgl",kernelFunc:VU};const UU=Dn+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,GU=Mt({opSnippet:UU,packedOpSnippet:`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`}),HU={kernelName:ci,backendName:"webgl",kernelFunc:GU};class qU{constructor(t,e,s,o,r){this.variableNames=["A"],this.outputShape=[];const[i,a,l,c]=t;this.outputShape=[i,e,s,c];const u=[o&&e>1?a-1:a,o&&s>1?l-1:l],h=[o&&e>1?e-1:e,o&&s>1?s-1:s];let d;r?d="(vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC - vec2(0.5)":d="vec2(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
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
    `}}class XU{constructor(t,e,s,o,r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];const[i,a,l,c]=t;this.outputShape=[i,e,s,c];const u=[o&&e>1?a-1:a,o&&s>1?l-1:l],h=[o&&e>1?e-1:e,o&&s>1?s-1:s];let d;r?d="(vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC - vec3(0.5)":d="vec3(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
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
    `}}function KU(n){const{inputs:t,backend:e,attrs:s}=n,{images:o}=t,{alignCorners:r,halfPixelCenters:i,size:a}=s,[l,c]=a,u=H().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new XU(o.shape,l,c,r,i):new qU(o.shape,l,c,r,i);return e.runWebGLProgram(u,[o],"float32")}const jU={kernelName:hl,backendName:"webgl",kernelFunc:KU};class YU{constructor(t,e,s){this.variableNames=["dy"],this.outputShape=[],this.outputShape=e;const[,o,r]=e,[,i,a]=t,l=[s&&i>1?o-1:o,s&&a>1?r-1:r],c=[s&&i>1?i-1:i,s&&a>1?a-1:a],u=l[0]/c[0],h=l[1]/c[1],d=1/u,p=1/h,f=Math.ceil(d)*2+2,m=Math.ceil(p)*2+2;this.userCode=`
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
    `}}function ZU(n){const{inputs:t,backend:e,attrs:s}=n,{images:o,dy:r}=t,{alignCorners:i}=s,a=new YU(r.shape,o.shape,i);return e.runWebGLProgram(a,[r],r.dtype)}const QU={kernelName:Xu,backendName:"webgl",kernelFunc:ZU};class JU{constructor(t,e,s,o,r){this.variableNames=["A"],this.outputShape=[];const[i,a,l,c]=t;this.outputShape=[i,e,s,c];const u=[o&&e>1?a-1:a,o&&s>1?l-1:l],h=[o&&e>1?e-1:e,o&&s>1?s-1:s],d=o?"0.5":"0.0";let p;r?p="max((vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC, vec2(0.0))":p="vec2(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
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
    `}}class tG{constructor(t,e,s,o,r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];const[i,a,l,c]=t;this.outputShape=[i,e,s,c];const u=[o&&e>1?a-1:a,o&&s>1?l-1:l],h=[o&&e>1?e-1:e,o&&s>1?s-1:s],d=o?"0.5":"0.0";let p;r?p="max((vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC, vec3(0.0))":p="vec3(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
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
    `}}function eG(n){const{inputs:t,backend:e,attrs:s}=n,{images:o}=t,{alignCorners:r,halfPixelCenters:i,size:a}=s,[l,c]=a,u=H().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new tG(o.shape,l,c,r,i):new JU(o.shape,l,c,r,i);return e.runWebGLProgram(u,[o],o.dtype)}const nG={kernelName:ul,backendName:"webgl",kernelFunc:eG};class sG{constructor(t,e,s){this.variableNames=["dy"],this.outputShape=[],this.outputShape=e;const[,o,r]=e,[,i,a]=t,l=[s&&i>1?o-1:o,s&&a>1?r-1:r],c=[s&&i>1?i-1:i,s&&a>1?a-1:a],u=l[0]/c[0],h=l[1]/c[1],d=1/u,p=1/h,f=Math.ceil(d)*2+2,m=Math.ceil(p)*2+2;this.userCode=`
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
    `}}function oG(n){const{inputs:t,backend:e,attrs:s}=n,{images:o,dy:r}=t,{alignCorners:i}=s,a=new sG(r.shape,o.shape,i);return e.runWebGLProgram(a,[r],r.dtype)}const rG={kernelName:qu,backendName:"webgl",kernelFunc:oG};class iG{constructor(t,e){this.variableNames=["x"];const s=t.length;if(s>4)throw new Error(`WebGL backend: Reverse of rank-${s} tensor is not yet supported`);if(this.outputShape=t,s===1){this.userCode=`
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(${t[0]} - coord - 1));
        }
      `;return}const o=a=>e.indexOf(a)!==-1&&t[a]!==1?`${t[a]} - coords[${a}] - 1`:`coords[${a}]`,r=t.map((a,l)=>o(l)).join(","),i=Gt(s);this.userCode=`
      void main() {
        ${i} coords = getOutputCoords();
        setOutput(getX(${r}));
      }
    `}}class aG{constructor(t,e){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0;const s=t.length;if(s>4)throw new Error(`WebGL backend: Reverse of rank-${s} tensor is not yet supported`);this.outputShape=t;const o=je("rc",s),r=`${o[s-1]} + 1 < ${this.outputShape[s-1]}`,i=`${o[s-2]} + 1 < ${this.outputShape[s-2]}`,a=Gt(s);s===1?this.userCode=`
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
    `;function l(f){return d(f)}function c(f){return f[s-1]="("+f[s-1]+" + 1)",d(f)}function u(f){return f[s-2]="("+f[s-2]+" + 1)",d(f)}function h(f){return f[s-1]="("+f[s-1]+" + 1)",f[s-2]="("+f[s-2]+" + 1)",d(f)}function d(f){const m=t.map((b,y)=>p(y,f)),g=m.join(","),x=m.slice(-2).join(",");return`getChannel(getX(${g}), vec2(${x}))`}function p(f,m){return e.indexOf(f)!==-1&&t[f]!==1?`${t[f]} - ${m[f]} - 1`:`${m[f]}`}}}function lG(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{dims:r}=s,i=o.shape.length,a=Tt(r,o.shape);if(i===0)return fn({inputs:{x:o},backend:e});const l=H().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new aG(o.shape,a):new iG(o.shape,a);return e.runWebGLProgram(l,[o],o.dtype)}const cG={kernelName:dl,backendName:"webgl",kernelFunc:lG};class uG{constructor(t,e){this.variableNames=["Image"],this.outputShape=[],this.customUniforms=[{name:"params",type:"vec4"}];const s=t[1],o=t[2];this.outputShape=t;let r="";typeof e=="number"?r=`float outputValue = ${e.toFixed(2)};`:r=`
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
    `}}const hG={kernelName:th,backendName:"webgl",kernelFunc:({inputs:n,attrs:t,backend:e})=>{const{image:s}=n,{radians:o,fillValue:r,center:i}=t,a=e,l=new uG(s.shape,r),[c,u]=od(i,s.shape[1],s.shape[2]),h=[[c,u,Math.sin(o),Math.cos(o)]];return a.runWebGLProgram(l,[s],s.dtype,h)}};const dG=Mt({opSnippet:`
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
`}),pG={kernelName:ui,backendName:"webgl",kernelFunc:dG};const fG=Mt({opSnippet:"return inversesqrt(x);",cpuKernelImpl:f3}),mG={kernelName:hi,backendName:"webgl",kernelFunc:fG};class Op{constructor(t,e,s,o,r,i,a=!0,l=!1){this.variableNames=["updates","indices","defaultValue"],this.outputShape=i;const c=Gt(r.length),u=Gt(i.length);let h="";s===1?h="i":s===2&&(h="i, j");const d=`getIndices(${h})`;let p="";o===1?p="i":o===2&&(p="i, coords[1]");const f=`getUpdates(${p})`;let m="";l&&(m="coords[0], coords[1]");const g=`getDefaultValue(${m})`,x=e>1?"strides[j]":"strides";this.userCode=`
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
      `}}class gG{constructor(t,e,s,o,r,i,a=!0,l=!1){this.variableNames=["updates","indices","defaultValue"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=i;const c=Gt(r.length),u=Gt(i.length);let h="";s===1?h="i":s===2&&(h="i, j");const d=`getIndices(${h})`;let p="";o===1?p="i":o===2&&(p="i, coords[1]");const f=`getUpdates(${p})`;let m="";l&&(m="coords[0], coords[1]");const g=`getDefaultValue(${m})`,x=e>1?"strides[j]":"strides",b=e>1?"strides[j + 1]":"strides";this.userCode=`
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
      `}}function xG(n){const{inputs:t,backend:e,attrs:s}=n,{indices:o,updates:r}=t,{shape:i}=s,{sliceRank:a,numUpdates:l,sliceSize:c,strides:u,outputSize:h}=bo(r,o,i),d=[h/c,c];if(h===0)return e.makeTensorInfo(i,o.dtype);const p=rt({inputs:{x:o},backend:e,attrs:{shape:[l,a]}}),f=rt({inputs:{x:r},backend:e,attrs:{shape:[l,c]}}),m=e.makeTensorInfo([],"float32",new Float32Array([0]));let g;H().getBool("WEBGL_PACK")?g=new gG(l,a,p.shape.length,f.shape.length,u,d):g=new Op(l,a,p.shape.length,f.shape.length,u,d);const x=e.runWebGLProgram(g,[f,p,m],f.dtype),b=rt({inputs:{x},backend:e,attrs:{shape:i}});return e.disposeIntermediateTensorInfo(p),e.disposeIntermediateTensorInfo(f),e.disposeIntermediateTensorInfo(x),e.disposeIntermediateTensorInfo(m),b}const bG={kernelName:uf,backendName:"webgl",kernelFunc:xG};class yG{constructor(t,e,s,o){this.variableNames=["sortedSequence","values"],this.customUniforms=[{name:"numInputs",type:"int"}],this.outputShape=[t,s];const r="while (left < right) {",i=`for (int i = 0; i < ${Math.ceil(Math.log2(e+1))}; ++i) { if (left >= right) break;`,a=H().getNumber("WEBGL_VERSION")===2?r:i,l=o==="left"?"<":"<=";this.userCode=`
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
     `}}function wG(n){const{inputs:t,backend:e,attrs:s}=n,{sortedSequence:o,values:r}=t,{side:i}=s,a=new yG(o.shape[0],o.shape[1],r.shape[1],i),l=[[o.shape[1]]];return e.runWebGLProgram(a,[o,r],"int32",l)}const CG={kernelName:df,backendName:"webgl",kernelFunc:wG};class $G{constructor(t,e,s){this.variableNames=["c","a","b"],this.outputShape=e;let o,r;if(s>4)throw Error(`Where for rank ${s} is not yet supported`);if(s===1)r="resRC",o="resRC";else{const a=["resRC.x","resRC.y","resRC.z","resRC.w"],l=[],c=[];for(let u=0;u<e.length;u++)c.push(`${a[u]}`),u<t&&l.push(`${a[u]}`);o=l.join(),r=c.join()}const i=Gt(s);this.userCode=`
      void main() {
        ${i} resRC = getOutputCoords();
        float cVal = getC(${o});
        if (cVal >= 1.0) {
          setOutput(getA(${r}));
        } else {
          setOutput(getB(${r}));
        }
      }
    `}}function IG(n){const{inputs:t,backend:e}=n,{condition:s,t:o,e:r}=t,i=new $G(s.shape.length,o.shape,o.shape.length);return e.runWebGLProgram(i,[s,o,r],cn(o.dtype,r.dtype))}const vG={kernelName:pl,backendName:"webgl",kernelFunc:IG};const kG=`
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = ${Ql};
  float scale = ${Jl};
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`,SG=Mt({opSnippet:kG}),NG={kernelName:di,backendName:"webgl",kernelFunc:SG};const TG=yr+`
  return 1.0 / (1.0 + exp(-1.0 * x));
`,EG=Mt({opSnippet:TG,packedOpSnippet:`
  vec4 result = 1.0 / (1.0 + exp(-1.0 * x));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,cpuKernelImpl:g3}),RG={kernelName:gi,backendName:"webgl",kernelFunc:EG};const AG=Mt({opSnippet:`
  if (isnan(x)) { return 0.0; }
  return sign(x);
`}),DG={kernelName:mi,backendName:"webgl",kernelFunc:AG};const FG=yr+`
  return sin(x);
`,_G=`
  vec4 result = sin(x);
  bvec4 isNaN = isnan(x);
  ${Oo}
  return result;
`,OG=Mt({opSnippet:FG,packedOpSnippet:_G}),MG={kernelName:pi,backendName:"webgl",kernelFunc:OG};const LG=Mt({opSnippet:`
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`}),PG={kernelName:fi,backendName:"webgl",kernelFunc:LG};const BG=Mt({opSnippet:`
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
`}),zG={kernelName:xi,backendName:"webgl",kernelFunc:BG};const VG={kernelName:gl,backendName:"webgl",kernelFunc:n=>{const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{blockShape:r,paddings:i}=s;T(o.shape.length<=4,()=>"spaceToBatchND for rank > 4 with a WebGL backend not implemented yet");const a=r.reduce((x,b)=>x*b),l=[[0,0]];l.push(...i);for(let x=1+r.length;x<o.shape.length;++x)l.push([0,0]);const c=[],u=lw({inputs:{x:o},backend:e,attrs:{paddings:l,constantValue:0}}),h=zi(u.shape,r,a,!1),d=Vi(h.length,r.length,!1),p=Wi(u.shape,r,a,!1),f=rt({inputs:{x:u},backend:e,attrs:{shape:h}}),m=Ye({inputs:{x:f},backend:e,attrs:{perm:d}}),g=rt({inputs:{x:m},backend:e,attrs:{shape:p}});return c.push(u),c.push(f),c.push(m),c.forEach(x=>e.disposeIntermediateTensorInfo(x)),g}};function WG(n){const{inputs:t,backend:e}=n,{indices:s,values:o,denseShape:r,defaultValue:i}=t;if(r.shape.length!==1)throw new Error(`Dense shape must be a vector, saw:
         ${r.shape}`);if(s.shape.length!==2)throw new Error(`Indices must be a matrix, saw:
         ${s.shape}`);if(o.shape.length!==1)throw new Error(`Values must be a vector, saw:
         ${o.shape}`);if(i.shape.length!==0)throw new Error(`Default value must be a scalar, saw:
        ${i.shape}`);const a=e.readSync(s.dataId),l=e.readSync(o.dataId),c=e.readSync(r.dataId),u=e.readSync(i.dataId)[0],[h,d,p,f,m]=b3(a,s.shape,s.dtype,l,o.dtype,c,u);return[e.makeTensorInfo(d,s.dtype,h),e.makeTensorInfo([d[0]],o.dtype,p),e.makeTensorInfo([f.length],"bool",new Uint8Array(f.map(g=>Number(g)))),e.makeTensorInfo([m.length],s.dtype,new Int32Array(m))]}const UG={kernelName:pf,backendName:"webgl",kernelFunc:WG};function GG(n){const{inputs:t,backend:e}=n,{inputIndices:s,inputShape:o,newShape:r}=t;if(s.shape.length!==2)throw new Error(`Input indices should be a matrix but received shape ${s.shape}`);if(o.shape.length!==1)throw new Error(`Input shape should be a vector but received shape ${o.shape}`);if(r.shape.length!==1)throw new Error(`Target shape should be a vector but received shape ${r.shape}`);const i=Array.from(e.readSync(o.dataId)),a=e.readSync(s.dataId),l=Array.from(e.readSync(r.dataId)),[c,u,h]=y3(a,s.shape,s.dtype,i,l);return[e.makeTensorInfo(u,s.dtype,c),e.makeTensorInfo([h.length],r.dtype,new Int32Array(h))]}const HG={kernelName:ff,backendName:"webgl",kernelFunc:GG};function qG(n){const{inputs:t,backend:e}=n,{data:s,indices:o,segmentIds:r}=t;if(s.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(o.shape.length!==1)throw new Error(`Indices should be a vector but received shape
              ${o.shape}`);if(r.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
              ${r.shape}`);const i=e.readSync(s.dataId),a=e.readSync(o.dataId),l=e.readSync(r.dataId),[c,u]=fy(i,s.shape,s.dtype,a,l,!0);return e.makeTensorInfo(u,s.dtype,c)}const XG={kernelName:mf,backendName:"webgl",kernelFunc:qG};function KG(n){const{inputs:t,backend:e}=n,{data:s,indices:o,segmentIds:r}=t;if(s.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(o.shape.length!==1)throw new Error(`Indices should be a vector but received shape
             ${o.shape}`);if(r.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
             ${r.shape}`);const i=e.readSync(s.dataId),a=e.readSync(o.dataId),l=e.readSync(r.dataId),[c,u]=fy(i,s.shape,s.dtype,a,l);return e.makeTensorInfo(u,s.dtype,c)}const jG={kernelName:gf,backendName:"webgl",kernelFunc:KG};function YG(n){const{inputs:t,backend:e,attrs:s}=n,{sparseIndices:o,sparseValues:r,defaultValue:i}=t,{outputShape:a}=s,{sliceRank:l,numUpdates:c,sliceSize:u,strides:h,outputSize:d}=bo(r,o,a),p=!1;if(r.dtype==="string"){const x=e.bufferSync(o),b=e.bufferSync(r),y=Ds(e.readSync(i.dataId)[0]),w=m3(x,b,a,d,u,c,l,h,y,p);return e.makeTensorInfo(a,w.dtype,w.values)}const f=new Op(c,l,o.shape.length,r.shape.length,h,[d,1],p),m=e.runWebGLProgram(f,[r,o,i],r.dtype),g=rt({inputs:{x:m},backend:e,attrs:{shape:a}});return e.disposeIntermediateTensorInfo(m),g}const ZG={kernelName:xf,backendName:"webgl",kernelFunc:YG};function QG(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{numOrSizeSplits:r,axis:i}=s,a=Tt(i,o.shape)[0],l=wd(o,r,a),c=o.shape.length,u=new Array(c).fill(0),h=o.shape.slice();return l.map(d=>{const p=[...h];p[a]=d;const f=wr({inputs:{x:o},backend:e,attrs:{begin:u,size:p}});return u[a]+=d,f})}const JG={kernelName:xl,backendName:"webgl",kernelFunc:QG};const uw="return sqrt(x);",tH=Mt({opSnippet:uw,packedOpSnippet:uw,cpuKernelImpl:w3}),eH={kernelName:bi,backendName:"webgl",kernelFunc:tH};const nH=Mt({opSnippet:"return x * x;"}),sH={kernelName:Ku,backendName:"webgl",kernelFunc:nH};const hw="return (a - b) * (a - b);",oH=_e({opSnippet:hw,packedOpSnippet:hw}),rH={kernelName:yi,backendName:"webgl",kernelFunc:oH};function iH(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t;if(o.dtype!=="string")throw new Error("Input must be of datatype string");const r=e.readSync(o.dataId),i=ws(r),a=C3(i,"string",s);return e.makeTensorInfo(o.shape,"string",a)}const aH={kernelName:ju,backendName:"webgl",kernelFunc:iH};function lH({inputs:n,attrs:t,backend:e}){const{x:s}=n,o=Dn+`
    return x > 0.0 ? 1.0 : float(${t.alpha});
  `,r=new us(s.shape,o);return e.runWebGLProgram(r,[s],s.dtype)}const cH={kernelName:vi,backendName:"webgl",kernelFunc:lH};class uH{constructor(t,e,s){this.variableNames=["x"],this.outputShape=s;const o=s.length,r=Gt(s.length),i=Gt(s.length);let a="";if(o===1)a="coords * strides + begin";else{let l=0;a=s.map((c,u)=>(l++,s.length===1?`coords * strides[${u}] + begin[${u}]`:`coords[${l-1}] * strides[${u}] + begin[${u}]`)).join(",")}this.userCode=`
      ${r} begin = ${r}(${t});
      ${r} strides = ${r}(${e});

      void main() {
        ${i} coords = getOutputCoords();
        setOutput(getX(${a}));
      }
    `}}function hH(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{begin:r,end:i,strides:a,beginMask:l,endMask:c,ellipsisMask:u,newAxisMask:h,shrinkAxisMask:d}=s,{finalShapeSparse:p,finalShape:f,isIdentity:m,sliceDim0:g,isSimpleSlice:x,begin:b,end:y,strides:w}=dg(o.shape,r,i,a,l,c,u,h,d);let C;if(m)C=rt({inputs:{x:o},backend:e,attrs:{shape:f}});else if(g||x){T(o.shape.length>=1,()=>`Input must have rank at least 1, got: ${o.shape.length}`);const v=cg(b,y,w),N=wr({inputs:{x:o},backend:e,attrs:{begin:b,size:v}});C=rt({inputs:{x:N},backend:e,attrs:{shape:f}}),e.disposeIntermediateTensorInfo(N)}else if(e.shouldExecuteOnCPU([o])){const N=e.readSync(o.dataId),k=Et(o.shape,o.dtype,N),S=$3(p,k,w,b);C=e.makeTensorInfo(f,o.dtype,S.values)}else{const N=new uH(b,w,p);C=e.runWebGLProgram(N,[o],o.dtype)}const I=rt({inputs:{x:C},backend:e,attrs:{shape:f}});return e.disposeIntermediateTensorInfo(C),I}const dH={kernelName:Yu,backendName:"webgl",kernelFunc:hH};function pH(n){const{inputs:t,backend:e,attrs:s}=n,{separator:o,nGramWidths:r,leftPad:i,rightPad:a,padWidth:l,preserveShortSequences:c}=s,{data:u,dataSplits:h}=t,d=e.readSync(u.dataId),p=e.readSync(h.dataId),[f,m]=I3(d,p,o,r,i,a,l,c);return[e.makeTensorInfo([f.length],"string",f),e.makeTensorInfo(h.shape,"int32",m)]}const fH={kernelName:bf,backendName:"webgl",kernelFunc:pH};function mH(n){const{inputs:t,backend:e,attrs:s}=n,{skipEmpty:o}=s,{input:r,delimiter:i}=t;if(r.dtype!=="string")throw new Error("Input must be of datatype string");if(r.shape.length!==1)throw new Error(`Input must be a vector, got shape: ${r.shape}`);if(i.shape.length!==0)throw new Error(`Delimiter must be a scalar, got shape: ${i.shape}`);const a=e.readSync(r.dataId),l=e.readSync(i.dataId)[0],[c,u,h]=v3(a,l,o),d=u.length;return[e.makeTensorInfo([d,2],"int32",c),e.makeTensorInfo([d],"string",u),e.makeTensorInfo([2],"int32",new Int32Array(h))]}const gH={kernelName:yf,backendName:"webgl",kernelFunc:mH};function xH(n){const{inputs:t,backend:e,attrs:s}=n,{numBuckets:o}=s,{input:r}=t;if(r.dtype!=="string")throw new Error("Input must be of datatype string");if(o<=0)throw new Error("Number of buckets must be at least 1");const i=e.readSync(r.dataId),a=k3(i,o);return e.makeTensorInfo(r.shape,"int32",a)}const bH={kernelName:wf,backendName:"webgl",kernelFunc:xH};const yH=Mt({opSnippet:"return tan(x);"}),wH={kernelName:Ci,backendName:"webgl",kernelFunc:yH};const CH=Mt({opSnippet:`
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`}),$H={kernelName:$i,backendName:"webgl",kernelFunc:CH};function IH(n){const{inputs:t,backend:e,attrs:s}=n,{tensor:o,indices:r,updates:i}=t,{sliceRank:a,numUpdates:l,sliceSize:c,strides:u,outputSize:h}=bo(i,r,o.shape),d=[h/c,c];if(h===0)return e.makeTensorInfo(o.shape,r.dtype);const p=rt({inputs:{x:r},backend:e,attrs:{shape:[l,a]}}),f=rt({inputs:{x:i},backend:e,attrs:{shape:[l,c]}}),m=rt({inputs:{x:o},backend:e,attrs:{shape:d}}),g=new Op(l,a,p.shape.length,f.shape.length,u,d,!1,!0),x=e.runWebGLProgram(g,[f,p,m],m.dtype),b=rt({inputs:{x},backend:e,attrs:{shape:o.shape}});return e.disposeIntermediateTensorInfo(p),e.disposeIntermediateTensorInfo(f),e.disposeIntermediateTensorInfo(m),e.disposeIntermediateTensorInfo(x),b}const vH={kernelName:hf,backendName:"webgl",kernelFunc:IH};class kH{constructor(t,e){this.variableNames=["A"];const s=new Array(t.length);for(let i=0;i<s.length;i++)s[i]=t[i]*e[i];this.outputShape=s,this.rank=s.length;const o=Gt(this.rank),r=SH(t);this.userCode=`
      void main() {
        ${o} resRC = getOutputCoords();
        setOutput(getA(${r}));
      }
    `}}function SH(n){const t=n.length;if(t>5)throw Error(`Tile for rank ${t} is not yet supported`);if(t===1)return`imod(resRC, ${n[0]})`;const e=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u"],s=[];for(let o=0;o<n.length;o++)s.push(`imod(${e[o]}, ${n[o]})`);return s.join()}function dw(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{reps:r}=s;if(o.dtype==="string"||o.shape.length>5){const l=e.readSync(o.dataId),c=o.dtype==="string"?l.map(d=>Ds(d)):l,u=Et(o.shape,o.dtype,c),h=N3(u,r);return e.makeTensorInfo(h.shape,h.dtype,h.values)}const i=new kH(o.shape,r);return e.runWebGLProgram(i,[o],o.dtype)}const NH={kernelName:Ii,backendName:"webgl",kernelFunc:dw};class TH{constructor(t){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"negativeInf",type:"float"},{name:"dir",type:"int"},{name:"inc",type:"int"}],this.outputShape=t,this.userCode=`
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
     `}}class EH{constructor(t){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"k",type:"int"}],this.outputShape=t,this.userCode=`
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
     `}}function Lo(n,t){t!==null&&n.disposeIntermediateTensorInfo(t)}function pw(n){let t=1;for(;t<n;)t*=2;return t}function RH(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{k:r,sorted:i}=s,a=H().getNumber("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD"),l=H().getNumber("TOPK_K_CPU_HANDOFF_THRESHOLD"),c=o.shape,u=c[c.length-1];if(e.shouldExecuteOnCPU([o])||u<a||r>l){const S=e.readSync(o.dataId),[$,E]=T3(S,c,o.dtype,r,i);return[e.makeTensorInfo($.shape,$.dtype,$.values),e.makeTensorInfo(E.shape,E.dtype,E.values)]}if(r===0)return c[c.length-1]=0,[e.makeTensorInfo(c,o.dtype,[]),e.makeTensorInfo(c,"int32",[])];if(u===1)return[o,xa({attrs:{shape:c,dtype:"int32",value:0},backend:e})];const h=e.texData.get(o.dataId),d=h!==null&&h.isPacked,p=d?e.unpackTensor(o):o,m=K(c)/u,g=rt({inputs:{x:p},attrs:{shape:[m,u]},backend:e});d&&Lo(e,p);const x=pw(r),b=pw(u);let y=null;const w=()=>y===null?[g,g]:[g,y],C=(S,$,E)=>{const R=w(),F=new TH(E),O=[[u],[y===null?1:0],[Number.NEGATIVE_INFINITY],[S],[$]],L=y;y=e.runWebGLProgram(F,R,"int32",O),Lo(e,L)};for(let S=1;S<x;S*=2){const $=S*2;for(let E=S;E>=1;E/=2)C($,E,[m,b])}for(let S=b;S>x;S/=2){const $=w(),E=new EH([m,S/2]),F=[[u],[y===null?1:0],[x]],A=y;y=e.runWebGLProgram(E,$,"int32",F),Lo(e,A);const O=x/2,L=O*2;for(let _=O;_>=1;_/=2)C(L,_,y.shape)}let I=y;y=wr({inputs:{x:y},backend:e,attrs:{begin:0,size:[m,r]}}),Lo(e,I);let v=ew({inputs:{x:g,indices:y},backend:e,attrs:{axis:1,batchDims:1}});Lo(e,g);const N=c.slice(0,-1);N.push(r),I=y,y=rt({inputs:{x:y},attrs:{shape:N},backend:e}),Lo(e,I);const k=v;return v=rt({inputs:{x:v},attrs:{shape:N},backend:e}),Lo(e,k),[v,y]}const AH={kernelName:Zu,backendName:"webgl",kernelFunc:RH};class DH{constructor(t,e,s,o,r,i){this.variableNames=["Image","Transforms"],this.outputShape=i;const a=s==="nearest"?1:2;let l;switch(o){case"constant":l=1;break;case"reflect":l=2;break;case"wrap":l=3;break;case"nearest":l=4;break;default:l=1;break}this.userCode=`
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
        `}}function FH(n){const{inputs:t,backend:e,attrs:s}=n,{image:o,transforms:r}=t,{interpolation:i,fillMode:a,fillValue:l,outputShape:c}=s,[u,h,d,p]=o.shape,[f,m]=c!=null?c:[h,d],g=[u,f,m,p],x=new DH(h,d,i,a,l,g);return e.runWebGLProgram(x,[o,r],"float32")}const _H={kernelName:Qu,backendName:"webgl",kernelFunc:FH};function OH(n){const{inputs:t,attrs:e,backend:s}=n,{axis:o}=e,{x:r}=t;ua(r,"unique"),console.warn("WARNING: ","UI might be locked temporarily as data is being downloaded");const i=s.readSync(r.dataId),{outputValues:a,outputShape:l,indices:c}=E3(i,o,r.shape,r.dtype);return[s.makeTensorInfo(l,r.dtype,a),s.makeTensorInfo([c.length],"int32",c)]}const MH={kernelName:Ju,backendName:"webgl",kernelFunc:OH};function LH(n){const{inputs:t,backend:e,attrs:s}=n,{value:o}=t;let{axis:r}=s;r<0&&(r+=o.shape.length);const i=o,a=i.shape.length,l=o.shape[r],c=new Array(a-1);let u=0;for(let m=0;m<a;m++)m!==r&&(c[u++]=i.shape[m]);const h=[],d=new Array(a).fill(0),p=i.shape.slice();p[r]=1;const f=new Array(l);for(let m=0;m<f.length;m++){d[r]=m;const g=wr({inputs:{x:i},backend:e,attrs:{begin:d,size:p}}),x=rt({inputs:{x:g},backend:e,attrs:{shape:c}});f[m]=x,h.push(g)}return h.forEach(m=>e.disposeIntermediateTensorInfo(m)),f}const PH={kernelName:yl,backendName:"webgl",kernelFunc:LH};class BH{constructor(t,e){this.variableNames=["x","segmentIds"];const s=t.windowSize,o=t.batchSize,r=t.inSize,i=t.numSegments,a=i*Math.ceil(r/s);this.outputShape=[o,a];const l="0.0",c="sumValue",u=Math.floor(s/4)*4,h=s%4,d=`
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
    `}}function zH(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,segmentIds:r}=t,{numSegments:i}=s,a=o.shape.length,l=[];let c=0;const u=ee([c],a);let h=o;u!=null&&(h=Ye({inputs:{x:o},backend:e,attrs:{perm:u}}),l.push(h),c=ie(1,a)[0]);const d=v2(h.shape,c,i),p=K([h.shape[c]]),f=rt({inputs:{x:h},backend:e,attrs:{shape:[-1,p]}});l.push(f);const m=ch(o.dtype),g=(w,C,I,v,N)=>{const k=w.shape[0],S=w.shape[1],$=I2(S,N),E={windowSize:$,inSize:S,batchSize:k,numSegments:N},R=new BH(E,C),F=e.compileAndRun(R,[w,I],v);if(l.push(F),F.shape[1]===N)return F;const A=cw({backend:e,attrs:{start:0,stop:N,step:1,dtype:"float32"}}),O=dw({inputs:{x:A},backend:e,attrs:{reps:[S/$]}});return l.push(A),l.push(O),g(F,C,O,v,N)},x=g(f,"unsortedSegmentSum",r,m,i),b=rt({inputs:{x},backend:e,attrs:{shape:d}});let y=b;if(u!=null){l.push(b);const w=Ms(u);y=Ye({inputs:{x:y},backend:e,attrs:{perm:w}})}return l.forEach(w=>e.disposeIntermediateTensorInfo(w)),y}const VH={kernelName:wl,backendName:"webgl",kernelFunc:zH};const WH=[wB,$B,kB,TB,RB,FB,OB,LB,VB,UB,qB,jB,QB,nz,rz,az,cz,pz,mz,xz,wz,Sz,Tz,Dz,_z,Bz,Vz,Hz,sB,Kz,Jz,s4,c4,d4,f4,g4,b4,$4,v4,S4,T4,R4,D4,O4,L4,V4,U4,q4,j4,Z4,J4,nV,oV,aV,cV,uV,dV,fV,gV,bV,wV,$V,kV,TV,RV,FV,MV,PV,zV,nB,WV,Zz,GV,qV,KV,rB,YV,QV,tW,sW,iW,lW,uW,dW,mW,xW,yW,IW,kW,NW,AW,FW,OW,LW,BW,UW,qW,YW,nU,lB,iU,cU,dU,mU,Oz,xU,yU,CU,vU,TU,aB,RU,DU,_U,MU,LU,Mz,QW,BU,WU,HU,uB,jU,QU,nG,rG,cG,hG,pG,mG,bG,CG,vG,NG,RG,DG,MG,PG,kz,tU,zG,VG,UG,HG,XG,jG,ZG,JG,eH,sH,rH,aH,cH,dH,fH,gH,bH,JW,xB,wH,$H,vH,NH,AH,_H,bB,MH,PH,VH,bU];for(const n of WH)kf(n);class UH{idx(t,e,s,o){return s*o[0]*o[1]+e*o[0]+t}check_previous_slice(t,e,s,o,r,i,a,l,c,u){let h=0;if(!r)return 0;const d=t[this.idx(s,o,r,i)];if(a>=6){const p=this.idx(s,o,r-1,i);d===t[p]&&(c[h++]=e[p])}if(a>=18){if(s){const p=this.idx(s-1,o,r-1,i);d===t[p]&&(c[h++]=e[p])}if(o){const p=this.idx(s,o-1,r-1,i);d===t[p]&&(c[h++]=e[p])}if(s<i[0]-1){const p=this.idx(s+1,o,r-1,i);d===t[p]&&(c[h++]=e[p])}if(o<i[1]-1){const p=this.idx(s,o+1,r-1,i);d===t[p]&&(c[h++]=e[p])}}if(a===26){if(s&&o){const p=this.idx(s-1,o-1,r-1,i);d===t[p]&&(c[h++]=e[p])}if(s<i[0]-1&&o){const p=this.idx(s+1,o-1,r-1,i);d===t[p]&&(c[h++]=e[p])}if(s&&o<i[1]-1){const p=this.idx(s-1,o+1,r-1,i);d===t[p]&&(c[h++]=e[p])}if(s<i[0]-1&&o<i[1]-1){const p=this.idx(s+1,o+1,r-1,i);d===t[p]&&(c[h++]=e[p])}}return h?(this.fill_tratab(l,c,h,u),c[0]):0}do_initial_labelling(t,e,s){const o=new Uint32Array(32),r=new Uint32Array(32);let i=1;const a=8192;let l=a,c=new Uint32Array(l).fill(0);const u=new Uint32Array(e[0]*e[1]*e[2]).fill(0),h=new Uint32Array(27);for(let d=0;d<e[2];d++)for(let p=0;p<e[1];p++)for(let f=0;f<e[0];f++){let m=0;const g=t[this.idx(f,p,d,e)];if(g!==0){if(h[0]=this.check_previous_slice(t,u,f,p,d,e,s,c,o,r),h[0]&&(m+=1),s>=6){if(f){const x=this.idx(f-1,p,d,e);g===t[x]&&(h[m++]=u[x])}if(p){const x=this.idx(f,p-1,d,e);g===t[x]&&(h[m++]=u[x])}}if(s>=18){if(p&&f){const x=this.idx(f-1,p-1,d,e);g===t[x]&&(h[m++]=u[x])}if(p&&f<e[0]-1){const x=this.idx(f+1,p-1,d,e);g===t[x]&&(h[m++]=u[x])}}if(m)u[this.idx(f,p,d,e)]=h[0],this.fill_tratab(c,h,m,r);else{if(u[this.idx(f,p,d,e)]=i,i>=l){l+=a;const x=new Uint32Array(l);x.set(c),c=x}c[i-1]=i,i++}}}for(let d=0;d<i-1;d++){let p=d;for(;c[p]!==p+1;)p=c[p]-1;c[d]=p+1}return[i-1,c,u]}fill_tratab(t,e,s,o){let i=2147483647;for(let a=0;a<s;a++){let l=e[a];for(;t[l-1]!==l;)l=t[l-1];o[a]=l,i=Math.min(i,l)}for(let a=0;a<s;a++)t[o[a]-1]=i}translate_labels(t,e,s,o){const r=e[0]*e[1]*e[2];let i=0;const a=new Uint32Array(r).fill(0);for(let u=0;u<o;u++)i=Math.max(i,s[u]);const l=new Uint32Array(i).fill(0);let c=0;for(let u=0;u<r;u++)t[u]&&(l[s[t[u]-1]-1]||(c+=1,l[s[t[u]-1]-1]=c),a[u]=l[s[t[u]-1]-1]);return[c,a]}neighbor_winners(t,e,s,o,r=null,i=null){const a=e[0],l=e[1],c=e[2],u=a*l,h=!!(i&&r),d=h?new Int32Array(o+1).fill(-1):null,p=new Map,f=(x,b)=>{let y=p.get(x);y||(y=new Map,p.set(x,y)),y.set(b,(y.get(b)||0)+1)};for(let x=0;x<c;x++)for(let b=0;b<l;b++)for(let y=0;y<a;y++){const w=x*u+b*a+y,C=t[w];if(C===0||s[C])continue;h&&d[C]<0&&(d[C]=i(r[w]));let I;y>0&&(I=s[t[w-1]])&&f(C,I),y<a-1&&(I=s[t[w+1]])&&f(C,I),b>0&&(I=s[t[w-a]])&&f(C,I),b<l-1&&(I=s[t[w+a]])&&f(C,I),x>0&&(I=s[t[w-u]])&&f(C,I),x<c-1&&(I=s[t[w+u]])&&f(C,I)}const m=new Uint32Array(o+1).fill(0);let g=0;for(const[x,b]of p){const y=h?d[x]:0;let w=0,C=0;if(y>0){for(const[I,v]of b)i(I)===y&&(v>C||v===C&&(w===0||I<w))&&(C=v,w=I);w&&g++}if(!w)for(const[I,v]of b)(v>C||v===C&&(w===0||I<w))&&(C=v,w=I);m[x]=w}return h&&console.log(`[relabel] ${g}/${p.size} suppressed components resolved within their own class family (${p.size-g} fell back to the unrestricted neighbour vote)`),m}finalize_volume(t,e,s,o,r,i=null,a=null){const l=t.length,c=new Uint32Array(l).fill(0),u=r?this.neighbor_winners(t,e,s,o,i,a):null;let h=0;for(let d=0;d<l;d++){const p=t[d];if(p===0)continue;let f=s[p];!f&&u&&(f=u[p]),f&&(c[d]=f,f>h&&(h=f))}return[h,c]}diagnose_components(t,e,s,o,r={}){var k,S,$;const i=(k=r.topN)!=null?k:50,a=(S=r.minSize)!=null?S:1,l=($=r.label)!=null?$:"diag",c=o[0],u=o[1],h=o[2],d=c*u,p=new Uint32Array(e+1),f=new Uint32Array(e+1);for(let E=0;E<t.length;E++){const R=s[E];R&&(p[R]=t[E],f[R]++)}const m=new Map,g=new Uint32Array(e+1),x=new Uint32Array(e+1),b=(E,R)=>{let F=m.get(E);F||(F=new Map,m.set(E,F)),F.set(R,(F.get(R)||0)+1)};for(let E=0;E<h;E++)for(let R=0;R<u;R++)for(let F=0;F<c;F++){const A=E*d+R*c+F,O=s[A];if(!O)continue;const L=p[O],_=V=>{const G=s[V];if(G===O)return;x[O]++;const q=G?p[G]:0;q===0?g[O]++:q!==L&&b(O,q)};F>0&&_(A-1),F<c-1&&_(A+1),R>0&&_(A-c),R<u-1&&_(A+c),E>0&&_(A-d),E<h-1&&_(A+d)}const y=new Map,w=new Map;for(let E=1;E<=e;E++){const R=p[E];y.set(R,(y.get(R)||0)+1),(!w.has(R)||f[E]>w.get(R))&&w.set(R,f[E])}const C=[];for(let E=1;E<=e;E++){if(f[E]<a)continue;const R=p[E],F=m.get(E);let A=0,O=0,L=0;if(F)for(const[V,G]of F)L+=G,G>O&&(O=G,A=V);const _=x[E]||1;C.push({comp:E,class:R,size:f[E],largestOfClass:f[E]===w.get(R)?"Y":"n",compsInClass:y.get(R),domNeighbor:A,domFracForeign:L?+(O/L).toFixed(2):0,domFracBoundary:+(O/_).toFixed(2),bgFrac:+(g[E]/_).toFixed(2)})}C.sort((E,R)=>R.domFracForeign-E.domFracForeign||R.size-E.size);const I=(E,R)=>{const F=R.map(O=>Math.max(O.h.length,...E.map(L=>String(L[O.k]).length))),A=O=>O.map((L,_)=>String(L).padStart(F[_])).join("  ");return[A(R.map(O=>O.h)),...E.map(O=>A(R.map(L=>O[L.k])))].join(`
`)},v=[{k:"comp",h:"comp"},{k:"class",h:"class"},{k:"size",h:"size"},{k:"largestOfClass",h:"lrg"},{k:"compsInClass",h:"nComp"},{k:"domNeighbor",h:"domNbr"},{k:"domFracForeign",h:"encF"},{k:"domFracBoundary",h:"encB"},{k:"bgFrac",h:"bgF"}];console.log(`[${l}] total components=${e}, distinct classes=${y.size}
[${l}] island candidates (encF≈1 + small size + lrg=n ⇒ swallowed island):
`+I(C.slice(0,i),v));const N=[...y.entries()].map(([E,R])=>({class:E,components:R,maxCompSize:w.get(E)})).sort((E,R)=>R.components-E.components);return console.log(`[${l}] per-class component counts (components=1 ⇒ fully connected):
`+I(N.slice(0,30),[{k:"class",h:"class"},{k:"components",h:"comps"},{k:"maxCompSize",h:"maxSize"}])),C}largest_original_cluster_labels(t,e,s,o=null,r=!1,i=null){const a=t.length,l=new Uint32Array(e+1).fill(0),c=new Uint32Array(e+1).fill(0);for(let u=0;u<a;u++){const h=t[u],d=s[u];l[d]=h,c[d]++}for(let u=0;u<e+1;u++){const h=l[u];for(let d=0;d<e+1;d++)d!==u&&h===l[d]&&(c[u]<c[d]||c[u]===c[d]&&u<d)&&(l[u]=0)}return this.finalize_volume(s,o,l,e,r,t,i)}filter_clusters(t,e,s,o,r=null,i=!1,a=null){const l=t.length,c=new Uint32Array(e+1).fill(0),u=new Uint32Array(e+1).fill(0);for(let p=0;p<l;p++){const f=t[p],m=s[p];m>0&&(c[m]=f,u[m]++)}const h=new Uint8Array(e+1).fill(1);for(let p=1;p<=e;p++){const f=c[p];if(o==="all"||o.has&&o.has(f)){for(let g=1;g<=e;g++)if(p!==g&&c[g]===f){if(u[g]>u[p]){h[p]=0;break}else if(u[g]===u[p]&&g<p){h[p]=0;break}}}}const d=new Uint32Array(e+1).fill(0);for(let p=1;p<=e;p++)h[p]&&(d[p]=c[p]);return this.finalize_volume(s,r,d,e,i,t,a)}filter_clusters_by_ratio(t,e,s,o,r=null,i=!1,a=null){const l=t.length,c=new Uint32Array(e+1).fill(0),u=new Uint32Array(e+1).fill(0);for(let f=0;f<l;f++){const m=s[f];m>0&&(c[m]===0&&(c[m]=t[f]),u[m]++)}const h=new Map;for(let f=1;f<=e;f++){const m=c[f],g=u[f];(!h.has(m)||g>h.get(m))&&h.set(m,g)}const d=new Uint8Array(e+1).fill(0);for(let f=1;f<=e;f++){const m=c[f],g=u[f],x=h.get(m)||0;g>=x*o&&(d[f]=1)}const p=new Uint32Array(e+1).fill(0);for(let f=1;f<=e;f++)d[f]&&(p[f]=c[f]);return this.finalize_volume(s,r,p,e,i,t,a)}bwlabel(t,e,s=26,o=!1,r=!1){const i=Date.now(),a=e[0]*e[1]*e[2],l=new Uint32Array(a).fill(0);if(![6,18,26].includes(s))return console.log("bwlabel: conn must be 6, 18 or 26."),[0,l];if(e[0]<2||e[1]<2||e[2]<1)return console.log("bwlabel: img must be 2 or 3-dimensional"),[0,l];if(o)for(let f=0;f<a;f++)t[f]!==0&&(l[f]=1);else l.set(t);let[c,u,h]=this.do_initial_labelling(l,e,s);u===void 0&&(u=new Uint32Array(0));const[d,p]=this.translate_labels(h,e,u,c);if(console.log(s+" neighbor clustering into "+d+" regions in "+(Date.now()-i)+"ms"),r){const[f,m]=this.largest_original_cluster_labels(l,d,p);return[f,m]}return[d,p]}filter_clusters_by_rank(t,e,s,o,r=0,i=null,a=!1,l=null,c=!1,u=null){const h=t.length,d=new Uint32Array(e+1).fill(0),p=new Uint32Array(e+1).fill(0),f=l!=null&&Array.isArray(i)&&i.length===3,m=f?i[0]:0,g=f?i[1]:0,x=f?new Int32Array(e+1).fill(2147483647):null,b=f?new Int32Array(e+1).fill(-1):null,y=f?new Int32Array(e+1).fill(2147483647):null,w=f?new Int32Array(e+1).fill(-1):null,C=f?new Int32Array(e+1).fill(2147483647):null,I=f?new Int32Array(e+1).fill(-1):null;for(let E=0;E<h;E++){const R=s[E];if(R>0&&(d[R]===0&&(d[R]=t[E]),p[R]++,f)){const F=E%m,A=E/m|0,O=A%g,L=A/g|0;F<x[R]&&(x[R]=F),F>b[R]&&(b[R]=F),O<y[R]&&(y[R]=O),O>w[R]&&(w[R]=O),L<C[R]&&(C[R]=L),L>I[R]&&(I[R]=L)}}let v=null,N=0;if(f){let E=-1;for(let _=1;_<=e;_++)p[_]>E&&(E=p[_],N=_);const R=Math.max(2,Math.ceil(l)+4),F=m*g,A=new Int16Array(h).fill(-1);let O=[];for(let _=0;_<h;_++)s[_]===N&&(A[_]=0,O.push(_));for(let _=1;_<=R&&O.length;_++){const V=[];for(let G=0;G<O.length;G++){const q=O[G],j=q%m,J=(q/m|0)%g;j>0&&A[q-1]===-1&&(A[q-1]=_,V.push(q-1)),j<m-1&&A[q+1]===-1&&(A[q+1]=_,V.push(q+1)),J>0&&A[q-m]===-1&&(A[q-m]=_,V.push(q-m)),J<g-1&&A[q+m]===-1&&(A[q+m]=_,V.push(q+m)),q-F>=0&&A[q-F]===-1&&(A[q-F]=_,V.push(q-F)),q+F<h&&A[q+F]===-1&&(A[q+F]=_,V.push(q+F))}O=V}const L=R+1;v=new Float64Array(e+1).fill(L);for(let _=0;_<h;_++){const V=s[_];if(V>0&&V!==N){const G=A[_]>=0?A[_]:L;G<v[V]&&(v[V]=G)}}c&&console.log(`[rank-filter] brain comp=${N} size=${E} bbox A[${x[N]},${b[N]}] B[${y[N]},${w[N]}] C[${C[N]},${I[N]}] | maxGap=${l} scan=${R}`)}const k=new Map;for(let E=1;E<=e;E++){const R=d[E],F=p[E];k.has(R)||k.set(R,[]),k.get(R).push({i:E,size:F})}const S=new Uint8Array(e+1).fill(0);for(const[E,R]of k.entries()){R.sort((L,_)=>_.size-L.size);const F=R.length?R[0].size:0,A=r>0?F*r:0,O=Math.min(R.length,o);for(let L=0;L<O;L++){const _=R[L];if(_.size<A){c&&L>0&&console.log(`[rank-filter] class ${E} #${L}: size=${_.size} DROP (below ${(r*100).toFixed(0)}% floor)`);break}if(L>0&&f){const V=v[_.i],G=V<=l;if(c&&console.log(`[rank-filter] class ${E} #${L}: size=${_.size} surfDist=${V} -> ${G?"KEEP":"DROP (too far)"}`),!G)continue}S[_.i]=1}}const $=new Uint32Array(e+1).fill(0);for(let E=1;E<=e;E++)S[E]&&($[E]=d[E]);return this.finalize_volume(s,i,$,e,a,t,u)}}function GH(n){if(!(n!=null&&n.length))throw new Error("Segmentation volume is empty.");let t=0;for(let e=0;e<n.length;e++){const s=n[e];if(!Number.isFinite(s)||s<0)throw new Error(`Segmentation contains an invalid label at voxel ${e}: ${s}.`);s!==0&&t++}if(t===0)throw new Error("Segmentation volume contains no foreground labels.");if(t>n.length*.95)throw new Error(`Segmentation fills ${(100*t/n.length).toFixed(1)}% of the volume; GPU output is unusable.`)}function HH(n,t=.01,e=.99){return Z(this,null,function*(){const s=n.flatten(),o=s.shape[0],r=yield s.data();s.dispose();const i=Math.min(1e5,o);let a;if(i>=o)a=Array.from(r);else{a=new Array(i);for(let p=0;p<i;p++){const f=Math.floor(Math.random()*o);a[p]=r[f]}}a.sort((p,f)=>p-f);const l=a.length,c=Math.floor(l*t),u=Math.ceil(l*e)-1,h=a[c],d=a[u];return{qmin:h,qmax:d}})}function qH(n){return Z(this,null,function*(){const t=n.max(),e=n.min();return yield n.sub(e).div(t.sub(e))})}function XH(n,t=.05,e=.95){return Z(this,null,function*(){const{qmin:s,qmax:o}=yield HH(n,t,e),r=o-s,i=n.sub(s),a=i.div(r);return i.dispose(),a})}function KH(n,t,e,s,o=null){return Z(this,null,function*(){console.log("Downloading segmentation data from GPU to CPU...");const r=yield n.data();GH(r);const i=n.shape;if(console.log("Data download complete. Starting CPU processing."),s.isPostProcessEnable){console.log("Applying CPU-based connected-component labeling...");const a=performance.now(),l=new UH,c=[5,14,15],u=!!s.fillSuppressedWithNeighborLabel||c.includes(e.id),h=[5,14,15],d=C=>C>=1&&C<=34?1:C>=35&&C<=68?2:0,p=h.includes(e.id)?d:null,f=i[0]*i[1]*i[2],m=Math.max(1e5,Math.floor(f*.01)),[g,x]=l.bwlabel(r,i,6,!1,!1);if(g>m){const C=`Segmentation produced noise: ${g.toLocaleString()} disconnected regions (cap ${m.toLocaleString()}). The model output is unusable, so post-processing was aborted. Try re-running, switching backend (WebGPU/WebGL2), or another model.`;console.error("[postprocess] "+C);const I=new Error(C);throw I.code="SEGMENTATION_NOISE",I}let b=!1,y=!1;if([1,7].includes(e.id)?(b=!1,y=!1):[5,14,15].includes(e.id)?(b=!1,y=!0):[3,8,9,21].includes(e.id)?(b=!1,y=!1):(b=!0,y=!0),[1,7].includes(e.id)){const N=g,k=x,[S,$]=l.filter_clusters_by_rank(r,N,k,2,.02,i,u,8,!1,p);r.set($)}else if(!y&&[3,8,9,21].includes(e.id)){const[C,I]=l.bwlabel(r,i,6,!0,!0);for(let E=0;E<r.length;E++)r[E]*=I[E];const[v,N]=l.bwlabel(r,i,6,!1,!1),k=new Set([1,2,5,6,13]),[S,$]=l.filter_clusters(r,v,N,k,i,u,p);r.set($)}else if(!b&&y){s.diagnoseEnclosedComponents&&l.diagnose_components(r,g,x,i,{label:`model${e.id}`,topN:60});const[C,I]=l.largest_original_cluster_labels(r,g,x,i,u,p);r.set(I)}else{const[C,I]=l.bwlabel(r,i,6,b,y);if(b)for(let v=0;v<r.length;v++)r[v]*=I[v];else r.set(I)}const w=((performance.now()-a)/1e3).toFixed(4);console.log(`Connected-component labeling took: ${w} seconds.`)}switch(e.type){case"Brain_Masking":{const a=new Uint8Array(r.length);for(let l=0;l<r.length;l++)a[l]=r[l]!==0?1:0;return a}case"Brain_Extraction":{const a=new Uint8Array(r.length),l=o?new Uint8Array(r.length):null;for(let c=0;c<r.length;c++){const u=r[c]!==0?1:0;a[c]=t[c]*u,l&&(l[c]=u)}return o&&(o.mask=l),a}default:return new Uint8Array(r)}})}const fw={WEBGPU:"webgpu",WEBGL_WEBWORKER:"webgl-webworker"};function mw(n,t){return{startTime:Date.now(),Model_Name:(n==null?void 0:n.modelName)||"Unknown",Execution_Mode:t,TF_Backend:t===fw.WEBGPU?"webgpu":"webgl",isModelFullVol:null,No_SubVolumes:1,Brainchop_Ver:"FullVolume",Input_Shape:null,Output_Shape:null,Channel_Last:null,Model_Param:null,Model_Layers:null,Actual_Labels:null,Expect_Labels:null,NumLabels_Match:null,Missing_Labels:null,Inference_t:null,Postprocess_t:null,Status:null,Error_Type:null,Extra_Err_Info:null}}function jH(n,t,e,s=null){n.Expect_Labels=t,n.Actual_Labels=e,n.NumLabels_Match=t===e,s&&s.length>0&&(n.Missing_Labels=s.join(", "))}function gw(n,t,e){n.Inference_t=t,n.Postprocess_t=e,n.Status="OK"}function YH(n,t,e=null){n.Inference_t=1/0,n.Postprocess_t=1/0,n.Status="Fail",n.Error_Type=(t==null?void 0:t.message)||String(t),e&&(n.Extra_Err_Info=e)}const $r=[1,3,5,7,13,19,31,19,13,7,5,3,1],ZH={model16chan18cls:{dilations:$r,activation:"gelu_tanh",fullVolume:!0},model24chan18cls_gdice_prio:{dilations:$r,activation:"gelu_tanh",fullVolume:!0},model6chan3cls:{dilations:$r,activation:"gelu_tanh",fullVolume:!0},model24chan104cls_synth:{dilations:$r,activation:"gelu_tanh",fullVolume:!0},model24chan104cls_infant_refit_synth:{dilations:$r,activation:"gelu_tanh",fullVolume:!0},model32chan18cls:{dilations:$r,activation:"gelu_tanh",fullVolume:!1},mindgrab:{dilations:[16,8,4,2,1,16,8,4,2,1,16,8,4,2,1,16,8,4,2,1,16,8,4,2,1],activation:"gelu_tanh",fullVolume:!0},model5_gw_ae:{dilations:[1,2,4,8,16,8,4,2,1],activation:"relu",fullVolume:!0},model11_gw_ae:{dilations:[1,2,4,8,4,2,2,1],activation:"relu",noSafetensors:!0,fullVolume:!0},model30chan18cls:{dilations:[1,2,4,8,16,8,4,2,1],activation:"elu",fullVolume:!0},model30chan50cls:{dilations:[1,2,4,8,16,8,4,2,1],activation:"elu",fullVolume:!0}};function QH(n){const t=String(n.path||"").match(/\/models\/([^/]+)\//);return t?t[1]:null}function JH(n){const t=QH(n);if(!t)return null;const e=ZH[t];return!e||e.noSafetensors?null:Tr({name:t},e)}function tq(n){const t=n&32768?-1:1,e=(n&31744)>>10,s=n&1023;return e===0?t*Math.pow(2,-14)*(s/1024):e===31?s?NaN:t*(1/0):t*Math.pow(2,e-15)*(1+s/1024)}function eq(n){const t=new DataView(n),e=Number(t.getBigUint64(0,!0)),s=JSON.parse(new TextDecoder().decode(new Uint8Array(n,8,e))),o=8+e,r={};for(const[i,a]of Object.entries(s)){if(i==="__metadata__"){r.__metadata__=a;continue}const[l,c]=a.data_offsets,u=a.shape.reduce((d,p)=>d*p,1);let h;if(a.dtype==="F32")h=new Float32Array(n.slice(o+l,o+c));else if(a.dtype==="F16"){const d=new Uint16Array(n.slice(o+l,o+c));h=new Float32Array(u);for(let p=0;p<u;p++)h[p]=tq(d[p])}else if(a.dtype==="BF16"){const d=new Uint16Array(n.slice(o+l,o+c));h=new Float32Array(u);const p=new Uint32Array(1),f=new Float32Array(p.buffer);for(let m=0;m<u;m++)p[0]=d[m]<<16,h[m]=f[0]}else throw new Error(`safetensors: unsupported dtype ${a.dtype} for tensor '${i}'`);if(h.length!==u)throw new Error(`safetensors: tensor '${i}' has ${h.length} values, shape says ${u}`);r[i]={dtype:a.dtype,shape:a.shape,data:h}}return r}function nq(n){const t=[],e=[],s=[];for(const[r,i]of Object.entries(n)){if(r==="__metadata__")continue;const a=r.match(/^m\.model\.(\d+)\.(weight|bias)$/);if(!a)continue;const l=Number(a[1]),c=a[2]==="weight";if(i.shape.length===5){const[u,h,d,p,f]=i.shape,g={idx:l,outC:u,inC:h,kd:d,kh:p,kw:f,is1x1:d===1&&p===1&&f===1,w:i.data,bias:null},x=t.find(b=>b.idx===l);x?Object.assign(x,g):t.push(g)}else i.shape.length===1&&s.push({idx:l,isW:c,data:i.data,len:i.shape[0]})}t.sort((r,i)=>r.idx-i.idx);for(const r of s){const i=t.find(l=>l.idx===r.idx);if(i&&!r.isW){i.bias=r.data;continue}if(i&&r.isW)continue;let a=e.find(l=>l.idx===r.idx);a||(a={idx:r.idx,scale:null,bias:null},e.push(a)),r.isW?a.scale=r.data:a.bias=r.data}e.sort((r,i)=>r.idx-i.idx);let o=null;return t.length&&t[t.length-1].is1x1&&(o=t.pop()),{convs:t,affines:e,classifier:o}}function sq(n,t){const e=t.cs,s=t.chan,{convs:o,affines:r,classifier:i}=n,a=p=>27*p*e;let l=0;const c=[];o.forEach((p,f)=>{const m=f===0?1:e,g={wq:l/4,inCS:m};l+=a(m),p.bias&&(g.biasQ=l/4,l+=e),c.push(g)}),r.forEach((p,f)=>{c[f]=c[f]||{},c[f].affQ=l/4,l+=e,c[f].affBiasQ=l/4,l+=e});let u=-1,h=-1;i&&(u=l,l+=s*t.nclass,l=Math.ceil(l/4)*4,i.bias&&(h=l,l+=t.nclass),l=Math.ceil(l/4)*4);const d=new Float32Array(l);if(o.forEach((p,f)=>{const m=c[f],g=m.inCS,x=m.wq*4,b=p.kd*p.kh*p.kw;if(p.outC>s||f>0&&p.inC>s)throw new Error(`layer ${f}: shape ${p.outC}x${p.inC} exceeds CHAN ${s}`);for(let y=0;y<p.outC;y++){for(let w=0;w<p.inC;w++)for(let C=0;C<p.kd;C++)for(let I=0;I<p.kh;I++)for(let v=0;v<p.kw;v++){const N=p.kd===3?C*9+I*3+v:0,k=(((y*p.inC+w)*p.kd+C)*p.kh+I)*p.kw+v;d[x+(N*g+w)*e+y]=p.w[k]}p.bias&&(d[m.biasQ*4+y]=p.bias[y])}if(b!==27&&b!==1)throw new Error(`layer ${f}: kernel ${p.kd}x${p.kh}x${p.kw} unsupported`)}),r.forEach((p,f)=>{const m=c[f];for(let g=0;g<s;g++)d[m.affQ*4+g]=p.scale?p.scale[g]:0,d[m.affBiasQ*4+g]=p.bias?p.bias[g]:0}),i)for(let p=0;p<t.nclass;p++){for(let f=0;f<s;f++)d[u+f*t.nclass+p]=i.w[p*i.inC+f];i.bias&&(d[h+p]=i.bias[p])}return{data:d,offsets:{layers:c,clsFloat:u,clsBiasFloat:h}}}function oq(n,t={}){const{convs:e,affines:s,classifier:o}=n,r=e[0].outC,i=Math.ceil(r/4)*4,a=e.some(c=>c.bias),l=Tr({chan:r,cs:i,planes:i/4,nclass:o?o.outC:0,nhidden:e.length-1,norm:s.length?"gn":a?"none":"gn",affine:s.length>0,convBias:a,classifierBias:!!(o&&o.bias),centeredVariance:!1,eps:1e-5},t);if(l.nclass>256)throw new Error(`classifier has ${l.nclass} classes; the RGBA8 label texture holds at most 256`);if(!l.activation)throw new Error("descriptor needs an explicit `activation`");if(!l.dilations)throw new Error("descriptor needs an explicit `dilations` array");if(l.dilations.length!==e.length)throw new Error(`descriptor has ${l.dilations.length} dilations for ${e.length} convs`);return l}const Kc=256,rq=8,iq=255,Js=2048,aq=`#version 300 es
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
`},Ir=`uniform highp sampler2D wts;
vec4 wf(int q) {
  return texelFetch(wts, ivec2(q & ${iq}, q >> ${rq}), 0);
}
float ws(int i) { return wf(i >> 2)[i & 3]; }
`,ue=(n,t)=>Array.from({length:n},(e,s)=>t(s)).join(""),jc=(n,t)=>ue(n,e=>`layout(location = ${e}) out vec4 ${t}${e};
`),ba=n=>`uniform highp sampler3D ${ue(n,t=>(t?", ":"")+"s"+t)};
`,Yc=(n,t)=>`  vec4 ${ue(n,e=>(e?", ":"")+t+e+" = vec4(0.0)")};
`,Zc=(n,t,e)=>ue(n,s=>`  ${t}${s} = ${e}${s};
`);function Qc(n){switch(n){case"gelu_tanh":return`float act(float x) {
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
`;default:throw new Error(`webgl2 kernels: unknown activation '${n}'. Add it here deliberately -- do NOT fall back to a default; brainchopC records that silently substituting a GELU flavour ran the wrong function on four backends without erroring.`)}}const Jc=`vec4 act4(vec4 v) { return vec4(act(v.x), act(v.y), act(v.z), act(v.w)); }
`;function lq(n){const t=n.planes,e=n.norm==="none";return vs(n)+`uniform highp sampler3D src;
`+Ir+`uniform int uZ;
uniform int uDil;
uniform int uWQ0;
`+(e?`uniform int uBiasQ;
`+Qc(n.activation)+Jc:"")+jc(t,"o")+`void main() {
  ivec3 p = ivec3(int(gl_FragCoord.x), int(gl_FragCoord.y), uZ);
`+Yc(t,"a")+`  int tap = 0;
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
`):"")+Zc(t,"o","a")+`}
`}function cq(n){const t=n.planes,e=n.norm==="none",s=o=>`  { for (int i = 0; i < 4; ++i) {
      float v = q${o}[i];
      int w = b + (${o*4} + i) * P;
`+ue(t,r=>`      a${r} += wf(w + ${r}) * v;
`)+`    } }
`;return vs(n)+ba(t)+Ir+`uniform int uZ;
uniform int uDil;
uniform int uWQ0;
`+(e?`uniform int uBiasQ;
`+Qc(n.activation)+Jc:"")+jc(t,"o")+`void main() {
  ivec3 p = ivec3(int(gl_FragCoord.x), int(gl_FragCoord.y), uZ);
`+Yc(t,"a")+`  int tap = 0;
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
`):"")+Zc(t,"o","a")+`}
`}function uq(n){const t=n.planes,e=n.norm==="none",s=o=>`  { for (int i = 0; i < 4; ++i) {
      float v = q${o}[i];
      float u = r${o}[i];
      int w = b + (${o*4} + i) * P;
`+ue(t,r=>`      vec4 W${r} = wf(w + ${r}); a${r} += W${r} * v; b${r} += W${r} * u;
`)+`    } }
`;return vs(n)+ba(t)+Ir+`uniform int uZ;
uniform int uDil;
uniform int uWQ0;
`+(e?`uniform int uBiasQ;
`+Qc(n.activation)+Jc:"")+jc(t,"o")+ue(t,o=>`layout(location = ${t+o}) out vec4 n${o};
`)+`void main() {
  int x = int(gl_FragCoord.x);
  int y = int(gl_FragCoord.y);
`+Yc(t,"a")+Yc(t,"b")+`  int tap = 0;
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
`):"")+Zc(t,"o","a")+Zc(t,"n","b")+`}
`}const hq=n=>vs(n)+`uniform highp sampler3D src;
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
`,dq=n=>vs(n)+`uniform highp sampler2D pSum, pSq;
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
`,pq=n=>vs(n)+`uniform highp sampler2D pSum, pSq;
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
`;function fq(n){const t=n.planes,e=s=>`  vec4 v${s} = (texelFetch(s${s}, p, 0) - texelFetch(pMean, ivec2(0, ${s}), 0))
              * texelFetch(pInv, ivec2(0, ${s}), 0);
`+(n.affine?`  v${s} = v${s} * wf(uAffQ + ${s}) + wf(uBiasQ + ${s});
`:"");return vs(n)+ba(t)+`uniform highp sampler2D pMean, pInv;
`+Ir+(n.affine?`uniform int uAffQ;
uniform int uBiasQ;
`:"")+`uniform int uZ;
`+Qc(n.activation)+Jc+jc(t,"o")+`void main() {
  ivec3 p = ivec3(int(gl_FragCoord.x), int(gl_FragCoord.y), uZ);
`+ue(t,e)+ue(t,s=>`  o${s} = act4(v${s});
`)+`}
`}function mq(n){const t=n.planes,e=ue(t,s=>s===0?`      float sv = c0[c];
`:`      if (c >= ${s*4}) sv = c${s}[c - ${s*4}];
`);return vs(n)+ba(t)+Ir+`uniform int uWCls;
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
`}function gq(n){if(n.nclass>32)throw new Error("grouped tissue masks support at most 32 classes");const t=n.planes,s=`      float acc = uHasBias != 0 ? ws(uWBias + k) : 0.0;
      for (int c = 0; c < CHAN; ++c) {
${ue(t,o=>o===0?`      float sv = c0[c];
`:`      if (c >= ${o*4}) sv = c${o}[c - ${o*4}];
`)}        acc += sv * ws(uWCls + c * NCLASS + k);
      }
`;return vs(n)+ba(t)+Ir+`uniform int uWCls;
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
`}function xq(n,t=8){if(n.planes>t)throw new Error(`${n.chan} channels need ${n.planes} draw buffers; this device has ${t}. This model cannot run on the native WebGL2 path here -- fall back to the tfjs channel-list path.`);const e={vertex:aq,convFirst:lq(n),convHidden:cq(n),classify:n.nclass>0?mq(n):null,tissueProbability:n.nclass>0&&n.nclass<=32?gq(n):null};return n.norm==="gn"&&n.planes*2<=t&&(e.convHiddenVox2=uq(n)),n.norm==="gn"&&(e.momentsA=hq(n),e.momentsB=dq(n),e.momentsFinish=pq(n),e.norm=fq(n)),e}function bq(n,t,e=null){var c;const s=[],[o,r,i]=t;let a=e,l=null;try{if(!a){if(typeof OffscreenCanvas=="undefined")return{supported:!1,reasons:["OffscreenCanvas is unavailable in this context"]};l=new OffscreenCanvas(1,1),a=l.getContext("webgl2",{antialias:!1,depth:!1,stencil:!1,preserveDrawingBuffer:!1,powerPreference:"high-performance"})}if(!a)return{supported:!1,reasons:["no webgl2 context could be created"]};a.getExtension("EXT_color_buffer_float")||s.push("EXT_color_buffer_float is not available (no renderable float textures)");const h=a.getParameter(a.MAX_3D_TEXTURE_SIZE),d=a.getParameter(a.MAX_TEXTURE_SIZE),p=a.getParameter(a.MAX_DRAW_BUFFERS),f=a.getParameter(a.MAX_COLOR_ATTACHMENTS),m=Math.max(o,r,i);h<m&&s.push(`MAX_3D_TEXTURE_SIZE is ${h}, this volume needs ${m}`),p<n.planes&&s.push(`MAX_DRAW_BUFFERS is ${p}, ${n.chan} channels need ${n.planes}`),f<n.planes&&s.push(`MAX_COLOR_ATTACHMENTS is ${f}, ${n.chan} channels need ${n.planes}`),d<Js&&s.push(`MAX_TEXTURE_SIZE is ${d}, the label texture needs ${Js}`);let g=!1;const x=[];if(!s.length){for(;a.getError()!==a.NO_ERROR;);g=!0;for(let y=0;y<2*n.planes&&g;y++){const w=a.createTexture();x.push(w),a.bindTexture(a.TEXTURE_3D,w),a.texStorage3D(a.TEXTURE_3D,1,a.RGBA16F,o,r,i),(a.getError()!==a.NO_ERROR||a.isContextLost())&&(g=!1)}for(const y of x)a.deleteTexture(y);if(!g){const y=Math.round(2*n.planes*o*r*i*8/1048576);s.push(`could not allocate this model's ${y} MB activation working set (${2*n.planes} x RGBA16F ${o}x${r}x${i} 3D textures)`)}}const b=2*n.planes*o*r*i*8;return{supported:s.length===0,reasons:s,vox2:p>=2*n.planes&&f>=2*n.planes,renderer:yq(a),limits:{max3d:h,maxTex:d,maxDraw:p,maxAttach:f},activationBytes:b,allocates:g}}catch(u){return{supported:!1,reasons:[`probe threw: ${u.message}`]}}finally{l&&a&&((c=a.getExtension("WEBGL_lose_context"))==null||c.loseContext())}}function yq(n){const t=n.getExtension("WEBGL_debug_renderer_info");return t?n.getParameter(t.UNMASKED_RENDERER_WEBGL):n.getParameter(n.RENDERER)}function xw(n,t,e,s){const o=n.createShader(t);if(n.shaderSource(o,e),n.compileShader(o),!n.getShaderParameter(o,n.COMPILE_STATUS)){const r=n.getShaderInfoLog(o);throw n.deleteShader(o),new Error(`${s}: shader compile failed: ${r}`)}return o}function wq(n,t,e,s){const o=xw(n,n.VERTEX_SHADER,t,`${s}/vs`),r=xw(n,n.FRAGMENT_SHADER,e,`${s}/fs`),i=n.createProgram();if(n.attachShader(i,o),n.attachShader(i,r),n.linkProgram(i),n.deleteShader(o),n.deleteShader(r),!n.getProgramParameter(i,n.LINK_STATUS)){const a=n.getProgramInfoLog(i);throw n.deleteProgram(i),new Error(`${s}: program link failed: ${a}`)}return i}function Mp(n,t,e,s,o){const r=n.createTexture();return n.bindTexture(n.TEXTURE_3D,r),n.texParameteri(n.TEXTURE_3D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_3D,n.TEXTURE_MAG_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_3D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_3D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_3D,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),n.texStorage3D(n.TEXTURE_3D,1,o,t,e,s),r}function ks(n,t,e,s){const o=n.createTexture();return n.bindTexture(n.TEXTURE_2D,o),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texStorage2D(n.TEXTURE_2D,1,s,t,e),o}const tu=(n,t)=>n.COLOR_ATTACHMENT0+t;function Lp(n,t,e,s){const o=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,o);const r=[];for(let a=0;a<s;a++){const l=t[a%t.length],c=e+Math.floor(a/t.length);n.framebufferTextureLayer(n.FRAMEBUFFER,tu(n,a),l,0,c),r.push(tu(n,a))}n.drawBuffers(r);const i=n.checkFramebufferStatus(n.FRAMEBUFFER);if(i!==n.FRAMEBUFFER_COMPLETE)throw new Error(`framebuffer for z=${e} incomplete: 0x${i.toString(16)}`);for(;n.getError()!==n.NO_ERROR;);return o}function ya(n,t){const e=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,e);const s=t.map((r,i)=>(n.framebufferTexture2D(n.FRAMEBUFFER,tu(n,i),n.TEXTURE_2D,r,0),tu(n,i)));n.drawBuffers(s);const o=n.checkFramebufferStatus(n.FRAMEBUFFER);if(o!==n.FRAMEBUFFER_COMPLETE)throw new Error(`2D framebuffer incomplete: 0x${o.toString(16)}`);for(;n.getError()!==n.NO_ERROR;);return e}function Cq(n,t){n.bindFramebuffer(n.READ_FRAMEBUFFER,t);const e=new Uint8Array(4);n.readPixels(0,0,1,1,n.RGBA,n.UNSIGNED_BYTE,e)}function $q(n,t,e,s){try{const o=Math.min(8,e,s),r=new Float32Array(o*o*4);for(n.bindFramebuffer(n.READ_FRAMEBUFFER,t),n.readBuffer(n.COLOR_ATTACHMENT0);n.getError()!==n.NO_ERROR;);const i=Math.max(0,Math.floor(e/2)-o),a=Math.max(0,Math.floor(s/2)-o);if(n.readPixels(i,a,o,o,n.RGBA,n.FLOAT,r),n.getError()!==n.NO_ERROR)return null;let l=0,c=0,u=0,h=1/0,d=-1/0;for(let p=0;p<r.length;p++){const f=r[p];if(Number.isNaN(f)){l++;continue}if(!Number.isFinite(f)){c++;continue}f!==0&&u++,f<h&&(h=f),f>d&&(d=f)}return{nan:l,inf:c,nonZero:u,total:r.length,min:h,max:d}}catch(o){return null}}function mn(n,t){if(n.isContextLost())throw new Error(`the WebGL context was lost at ${t} (most likely the activation set did not fit)`);const e=n.getError();if(e!==n.NO_ERROR)throw new Error(`GL error 0x${e.toString(16)} at ${t}`)}function Iq(n){var m,g,x,b;const t=n.descriptor,{nx:e,ny:s,nz:o,planes:r,cs:i}=t,a=e*s*o,l=(typeof performance!="undefined"?performance:Date).now();if(n.input.length!==a)throw new Error(`input has ${n.input.length} voxels, descriptor says ${a}`);let c=null,u=n.gl||null;const h={textures:[],fbos:[],programs:[]},d=y=>(h.textures.push(y),y),p=y=>(h.fbos.push(y),y),f=y=>(h.programs.push(y),y);try{if(!u){if(c=new OffscreenCanvas(1,1),u=c.getContext("webgl2",{antialias:!1,depth:!1,stencil:!1,preserveDrawingBuffer:!1,powerPreference:"high-performance"}),!u)throw new Error("no webgl2 context");(m=c.addEventListener)==null||m.call(c,"webglcontextlost",nt=>{var Nt,St;(Nt=nt.preventDefault)==null||Nt.call(nt),(St=n.onLog)==null||St.call(n,"[webgl2] webglcontextlost fired (the run has already been aborted by isContextLost)")})}if(!u.getExtension("EXT_color_buffer_float"))throw new Error("EXT_color_buffer_float unavailable; float textures are not renderable here");const y=Math.min(u.getParameter(u.MAX_DRAW_BUFFERS),u.getParameter(u.MAX_COLOR_ATTACHMENTS));if(y<r)throw new Error(`need ${r} draw buffers, device has ${y}`);const w=!!n.vox2&&y>=2*r&&o>=2&&o%2===0&&t.norm==="gn";u.disable(u.DEPTH_TEST),u.disable(u.BLEND),u.disable(u.SCISSOR_TEST),u.bindVertexArray(u.createVertexArray());const C=d(Mp(u,e,s,o,u.R16F));u.bindTexture(u.TEXTURE_3D,C),u.texSubImage3D(u.TEXTURE_3D,0,0,0,0,e,s,o,u.RED,u.FLOAT,n.input),mn(u,"input upload");const I=[],v=[];for(let nt=0;nt<r;nt++)I.push(d(Mp(u,e,s,o,u.RGBA16F)));for(let nt=0;nt<r;nt++)v.push(d(Mp(u,e,s,o,u.RGBA16F)));mn(u,"activation allocation");const N=Math.ceil(n.packed.length/4),k=Math.ceil(N/Kc);if(k>u.getParameter(u.MAX_TEXTURE_SIZE))throw new Error(`weight texture needs ${k} rows, MAX_TEXTURE_SIZE is ${u.getParameter(u.MAX_TEXTURE_SIZE)}`);const S=d(ks(u,Kc,k,u.RGBA16F)),$=new Float32Array(Kc*k*4);$.set(n.packed),u.bindTexture(u.TEXTURE_2D,S),u.texSubImage2D(u.TEXTURE_2D,0,0,0,Kc,k,u.RGBA,u.FLOAT,$),mn(u,"weight upload");let E=null,R=null,F=null,A=null,O=null,L=null,_=null,V=null,G=null;t.norm==="gn"&&(E=d(ks(u,e,s*r,u.RGBA32F)),R=d(ks(u,e,s*r,u.RGBA32F)),F=d(ks(u,e,r,u.RGBA32F)),A=d(ks(u,e,r,u.RGBA32F)),O=d(ks(u,1,r,u.RGBA32F)),L=d(ks(u,1,r,u.RGBA32F)),_=p(ya(u,[E,R])),V=p(ya(u,[F,A])),G=p(ya(u,[O,L])));const q=Math.ceil(a/4),j=Math.ceil(q/Js),Y=d(ks(u,Js,j,u.RGBA8)),J=p(ya(u,[Y]));let tt=null,st=null;n.probability&&(tt=d(ks(u,e,s,u.RGBA32F)),st=p(ya(u,[tt]))),mn(u,"aux textures");const it=[],pt=[],ht=[];for(let nt=0;nt<o;nt++)it.push(p(Lp(u,I,nt,r))),pt.push(p(Lp(u,v,nt,r)));if(w)for(let nt=0;nt+1<o;nt+=2)ht.push(p(Lp(u,v,nt,2*r)));mn(u,"framebuffer creation");const xt=xq(t,y),ot={},kt=(nt,Nt,St)=>{xt[Nt]&&(ot[nt]=f(wq(u,xt.vertex,xt[Nt],St)))};if(kt("convFirst","convFirst","conv_first"),kt("convHidden","convHidden","conv_hidden"),w&&kt("convHidden2","convHiddenVox2","conv_hidden_vox2"),t.norm==="gn"&&(kt("momentsA","momentsA","moments_a"),kt("momentsB","momentsB","moments_b"),kt("momentsF","momentsFinish","moments_finish"),kt("norm","norm","norm")),t.nclass>0&&kt("classify","classify","classify"),n.probability){if(!xt.tissueProbability)throw new Error(`grouped probabilities are unavailable for ${t.nclass} classes`);kt("tissueProbability","tissueProbability","tissue_probability")}mn(u,"program link");const ct=(nt,Nt)=>u.getUniformLocation(nt,Nt),At=Array.from({length:r},(nt,Nt)=>`s${Nt}`);u.useProgram(ot.convFirst),u.uniform1i(ct(ot.convFirst,"src"),0),u.uniform1i(ct(ot.convFirst,"wts"),1);for(const nt of[ot.convHidden,ot.convHidden2].filter(Boolean))u.useProgram(nt),At.forEach((Nt,St)=>u.uniform1i(ct(nt,Nt),St)),u.uniform1i(ct(nt,"wts"),r);if(ot.norm&&(u.useProgram(ot.norm),At.forEach((nt,Nt)=>u.uniform1i(ct(ot.norm,nt),Nt)),u.uniform1i(ct(ot.norm,"pMean"),r),u.uniform1i(ct(ot.norm,"pInv"),r+1),u.uniform1i(ct(ot.norm,"wts"),r+2)),ot.momentsA&&(u.useProgram(ot.momentsA),u.uniform1i(ct(ot.momentsA,"src"),0)),ot.momentsB&&(u.useProgram(ot.momentsB),u.uniform1i(ct(ot.momentsB,"pSum"),0),u.uniform1i(ct(ot.momentsB,"pSq"),1)),ot.momentsF&&(u.useProgram(ot.momentsF),u.uniform1i(ct(ot.momentsF,"pSum"),0),u.uniform1i(ct(ot.momentsF,"pSq"),1)),ot.classify&&(u.useProgram(ot.classify),At.forEach((nt,Nt)=>u.uniform1i(ct(ot.classify,nt),Nt)),u.uniform1i(ct(ot.classify,"wts"),r)),ot.tissueProbability){const nt=ot.tissueProbability;u.useProgram(nt),At.forEach((Nt,St)=>u.uniform1i(ct(nt,Nt),St)),u.uniform1i(ct(nt,"wts"),r),u.uniform1f(ct(nt,"uTemperature"),n.probability.temperature),u.uniform1f(ct(nt,"uSupportTemperature"),n.probability.supportTemperature),u.uniform1ui(ct(nt,"uGrayMask"),n.probability.grayMask>>>0),u.uniform1ui(ct(nt,"uWhiteMask"),n.probability.whiteMask>>>0),u.uniform1ui(ct(nt,"uCsfMask"),n.probability.csfMask>>>0)}mn(u,"uniform setup");const Ft=(nt,Nt)=>{u.activeTexture(u.TEXTURE0+nt),u.bindTexture(u.TEXTURE_3D,Nt)},bt=(nt,Nt)=>{u.activeTexture(u.TEXTURE0+nt),u.bindTexture(u.TEXTURE_2D,Nt)},It=()=>u.drawArrays(u.TRIANGLES,0,3);let Ct=I,pe=v,Ht=it,Oe=pt;const te=n.offsets.layers,Ze=t.dilations.length,Te=nt=>{var Nt;return(Nt=n.onProgress)==null?void 0:Nt.call(n,(nt+1)/(Ze+1),`Layer ${nt+1}/${Ze}`)};{const nt=ot.convFirst;u.useProgram(nt),u.viewport(0,0,e,s),Ft(0,C),bt(1,S),u.uniform1i(ct(nt,"uDil"),t.dilations[0]),u.uniform1i(ct(nt,"uWQ0"),te[0].wq),te[0].biasQ!==void 0&&u.uniform1i(ct(nt,"uBiasQ"),te[0].biasQ);const Nt=ct(nt,"uZ");for(let St=0;St<o;St++)u.bindFramebuffer(u.FRAMEBUFFER,Oe[St]),u.uniform1i(Nt,St),It();mn(u,"conv_first")}const $e=(nt,Nt,St)=>{u.useProgram(ot.momentsA),u.bindFramebuffer(u.FRAMEBUFFER,_);const fe=ct(ot.momentsA,"uRowBase");for(let Me=0;Me<r;Me++)Ft(0,nt[Me]),u.uniform1i(fe,Me*s),u.viewport(0,Me*s,e,s),It();u.useProgram(ot.momentsB),u.bindFramebuffer(u.FRAMEBUFFER,V),bt(0,E),bt(1,R),u.viewport(0,0,e,r),It(),u.useProgram(ot.momentsF),u.bindFramebuffer(u.FRAMEBUFFER,G),bt(0,F),bt(1,A),u.viewport(0,0,1,r),It();const Pt=ot.norm;u.useProgram(Pt);for(let Me=0;Me<r;Me++)Ft(Me,nt[Me]);bt(r,O),bt(r+1,L),bt(r+2,S),t.affine&&(u.uniform1i(ct(Pt,"uAffQ"),te[St].affQ),u.uniform1i(ct(Pt,"uBiasQ"),te[St].affBiasQ)),u.viewport(0,0,e,s);const rn=ct(Pt,"uZ");for(let Me=0;Me<o;Me++)u.bindFramebuffer(u.FRAMEBUFFER,Nt[Me]),u.uniform1i(rn,Me),It();mn(u,`norm layer ${St}`)};t.norm==="gn"?$e(pe,Ht,0):([Ct,pe]=[pe,Ct],[Ht,Oe]=[Oe,Ht]),Te(0);const Yt=$q(u,Ht[o>>1],e,s);if(Yt){const nt=`min=${Yt.min.toPrecision(4)} max=${Yt.max.toPrecision(4)} nonzero=${Yt.nonZero}/${Yt.total} nan=${Yt.nan} inf=${Yt.inf}`;if(Yt.nan||Yt.inf)throw new Error(`layer 1 activations are not finite (${nt}). The usual cause is the activation flavour: an unclamped tanh overflows to Inf/Inf = NaN. Check descriptor.activation ('${t.activation}').`);if(Yt.nonZero===0)throw new Error(`layer 1 activations are all zero at the volume centre (${nt}). Suspect the input upload, the weight packing, or a wrong dilation.`);(g=n.onLog)==null||g.call(n,`[webgl2] layer 1 sample: ${nt}`)}for(let nt=1;nt<Ze;nt++){const Nt=w&&!!ot.convHidden2,St=Nt?ot.convHidden2:ot.convHidden;u.useProgram(St),u.viewport(0,0,e,s);for(let Pt=0;Pt<r;Pt++)Ft(Pt,Ct[Pt]);bt(r,S),u.uniform1i(ct(St,"uDil"),t.dilations[nt]),u.uniform1i(ct(St,"uWQ0"),te[nt].wq),te[nt].biasQ!==void 0&&u.uniform1i(ct(St,"uBiasQ"),te[nt].biasQ);const fe=ct(St,"uZ");if(Nt)for(let Pt=0;Pt<ht.length;Pt++)u.bindFramebuffer(u.FRAMEBUFFER,ht[Pt]),u.uniform1i(fe,Pt*2),It();else for(let Pt=0;Pt<o;Pt++)u.bindFramebuffer(u.FRAMEBUFFER,Oe[Pt]),u.uniform1i(fe,Pt),It();mn(u,`conv layer ${nt}`),t.norm==="gn"?$e(pe,Ht,nt):([Ct,pe]=[pe,Ct],[Ht,Oe]=[Oe,Ht]),nt%8===0&&Cq(u,J),Te(nt)}let Ee,se=null,Fn=null;if(n.probability){const nt=ot.tissueProbability;u.useProgram(nt);for(let fe=0;fe<r;fe++)Ft(fe,Ct[fe]);bt(r,S),u.uniform1i(ct(nt,"uWCls"),n.offsets.clsFloat),u.uniform1i(ct(nt,"uWBias"),Math.max(n.offsets.clsBiasFloat,0)),u.uniform1i(ct(nt,"uHasBias"),n.offsets.clsBiasFloat>=0?1:0),u.bindFramebuffer(u.FRAMEBUFFER,st),u.viewport(0,0,e,s);const Nt=ct(nt,"uZ"),St=new Float32Array(e*s*4);se=[new Float32Array(a),new Float32Array(a),new Float32Array(a)],Fn=new Float32Array(a);for(let fe=0;fe<o;fe++){u.uniform1i(Nt,fe),It(),u.bindFramebuffer(u.READ_FRAMEBUFFER,st),u.readPixels(0,0,e,s,u.RGBA,u.FLOAT,St),(fe&31)===31&&mn(u,`tissue probability slice ${fe}`);const Pt=fe*e*s;for(let rn=0;rn<e*s;rn++)se[0][Pt+rn]=St[rn*4],se[1][Pt+rn]=St[rn*4+1],se[2][Pt+rn]=St[rn*4+2],Fn[Pt+rn]=St[rn*4+3]}mn(u,"tissue probability readback")}else if(t.nclass>0){const nt=ot.classify;u.useProgram(nt);for(let St=0;St<r;St++)Ft(St,Ct[St]);bt(r,S),u.uniform1i(ct(nt,"uWCls"),n.offsets.clsFloat),u.uniform1i(ct(nt,"uWBias"),Math.max(n.offsets.clsBiasFloat,0)),u.uniform1i(ct(nt,"uHasBias"),n.offsets.clsBiasFloat>=0?1:0),u.bindFramebuffer(u.FRAMEBUFFER,J),u.viewport(0,0,Js,j),It(),mn(u,"classify");const Nt=new Uint8Array(Js*j*4);u.bindFramebuffer(u.READ_FRAMEBUFFER,J),u.readPixels(0,0,Js,j,u.RGBA,u.UNSIGNED_BYTE,Nt),mn(u,"readback"),Ee=Nt.subarray(0,a)}else throw new Error("descriptor has no classifier; a raw-activation readback path is not implemented");const to=(typeof performance!="undefined"?performance:Date).now()-l;return{labels:Ee,tissues:se,support:Fn,ms:to,path:`webgl2-native P=${r}${w?" vox2":""}${n.probability?" tissue-probability":""} ${e}x${s}x${o}`}}finally{if(u){for(const y of h.fbos)u.deleteFramebuffer(y);for(const y of h.textures)u.deleteTexture(y);for(const y of h.programs)u.deleteProgram(y);c&&((x=n.onLog)==null||x.call(n,'[webgl2] releasing our own GL context (the "context was lost" notice below is expected)'),(b=u.getExtension("WEBGL_lose_context"))==null||b.loseContext())}}}const vq={grayMatter:[2,6,7,8,9,10,14,15,16,17],whiteMatter:[1,5],csf:[3,4,11,12]};function vr(n,t,e,s,o){var i;const r=Number((i=n[t])!=null?i:e);if(!Number.isFinite(r)||r<s||r>o)throw new Error(`${t} must be between ${s} and ${o}, got ${n[t]}`);return r}function Pp(n,t,e){let s=0;for(const o of n||[]){if(!Number.isInteger(o)||o<0||o>=t||o>=32)throw new Error(`Invalid ${e} tissue label ${o} for ${t} classes`);s=(s|1<<o)>>>0}return s}function kq(n,t){if(!Number.isInteger(t)||t<2||t>32)throw new Error(`Native WebGL2 grouped probabilities require 2..32 classes, got ${t}`);const e=Tr(Tr({},vq),n.probabilityGroups||{});return{temperature:vr(n,"softmaxTemperature",1,1e-6,1e6),supportTemperature:vr(n,"brainSupportTemperature",1,1e-6,1e6),supportPower:vr(n,"brainSupportPower",1,1e-6,1e6),sigma:vr(n,"partialVolumeSigma",0,0,2),grayMask:Pp(e.grayMatter,t,"gray-matter"),whiteMask:Pp(e.whiteMatter,t,"white-matter"),csfMask:Pp(e.csf,t,"CSF")}}function Bp(n,t,e,s,o,r){const[i,a,l]=e,c=i*a,u=o.length-1>>1;for(let h=0;h<l;h++)for(let d=0;d<a;d++)for(let p=0;p<i;p++){const f=h*c+d*i+p,m=s===1?p:s===i?d:h,g=s===1?i:s===i?a:l;let x=0;for(let b=-u;b<=u;b++){const y=m+b;y<0||y>=g||(x+=o[b+u]*n[f+b*s])}t[f]=x/r}}function Sq(n,t,e,s){const[o,r,i]=e,a=o*r*i;if(!Array.isArray(n)||n.length!==3||n.some(p=>p.length!==a)||t.length!==a)throw new Error("Native WebGL2 tissue-prior dimensions do not match");const l=vr(s,"partialVolumeSigma",0,0,2),c=vr(s,"brainSupportPower",1,1e-6,1e6);let u=null,h=null,d=1;if(l>0){const p=Math.max(1,Math.round(3*l));h=new Float32Array(p*2+1),d=0;for(let f=-p;f<=p;f++){const m=Math.exp(-.5*f*f/(l*l));h[f+p]=m,d+=m}u=new Float32Array(a)}for(const p of n){let f=p;h&&(Bp(p,u,e,1,h,d),Bp(u,p,e,o,h,d),Bp(p,u,e,o*r,h,d),f=u);for(let m=0;m<a;m++){const g=Math.pow(Math.max(0,Math.min(1,t[m])),c);p[m]=Math.max(0,Math.min(1,f[m]*g))}}return n}const Ss=1e-8,Nq=[256,256,256];function Ns(n,t,e){return Math.max(t,Math.min(e,n))}function Tq(n){return n.outputType==="probability"&&n.probabilityPostprocess==="cat-lite"}function Eq(n,t,e){const[s,o,r]=n,i=s.length,a=new Uint8Array(i);let l=0;for(let y=0;y<i;y++)Math.max(0,s[y])+Math.max(0,o[y])+Math.max(0,r[y])>=e&&(a[y]=1,l++);const[c,u,h]=t;if(c<2||u<2||h<1)return{componentCount:0,removedVoxels:0};const d=new Uint32Array(l),p=c*u;let f=0,m=0,g=0,x=0;for(let y=0;y<i;y++){if(a[y]!==1)continue;x++;const w=f;d[f++]=y,a[y]=2;for(let C=w;C<f;C++){const I=d[C],v=I%c,N=Math.floor(I/c)%u;v>0&&a[I-1]===1&&(a[I-1]=2,d[f++]=I-1),v+1<c&&a[I+1]===1&&(a[I+1]=2,d[f++]=I+1),N>0&&a[I-c]===1&&(a[I-c]=2,d[f++]=I-c),N+1<u&&a[I+c]===1&&(a[I+c]=2,d[f++]=I+c),I>=p&&a[I-p]===1&&(a[I-p]=2,d[f++]=I-p),I+p<i&&a[I+p]===1&&(a[I+p]=2,d[f++]=I+p)}f-w>=g-m&&(m=w,g=f)}let b=0;if(x>1)for(let y=0;y<f;y++){if(y>=m&&y<g)continue;const w=d[y];s[w]=0,o[w]=0,r[w]=0,b++}return{componentCount:x,removedVoxels:b}}function Rq([n,t,e],s,{minSupport:o,priorPower:r}){let i=0;for(let p=0;p<s.length;p++){const f=Math.max(0,n[p])+Math.max(0,t[p])+Math.max(0,e[p]);Math.min(f,1)>=o&&Number.isFinite(s[p])&&i++}const a=new Uint32Array(i),l=new Float64Array(i),c=i*36<=192*an(2,20)?i:0,u=new Float64Array(c),h=new Float64Array(c),d=new Float64Array(c);for(let p=0,f=0;p<s.length;p++){const m=Math.max(0,n[p]),g=Math.max(0,t[p]),x=Math.max(0,e[p]),b=m+g+x,y=Math.min(b,1);!(y>=o)||!Number.isFinite(s[p])||(a[f]=p,l[f]=s[p]-0,c&&(u[f]=y*Math.pow(x/b,r),h[f]=y*Math.pow(m/b,r),d[f]=y*Math.pow(g/b,r)),f++)}return{indices:a,values:l,weightCsf:u,weightGm:h,weightWm:d,volumes:[n,t,e]}}function bw([n,t,e],s,o,r){const i=Math.max(0,n[s]),a=Math.max(0,t[s]),l=Math.max(0,e[s]),c=i+a+l,u=Math.min(c,1);r[0]=u*Math.pow(l/c,o),r[1]=u*Math.pow(i/c,o),r[2]=u*Math.pow(a/c,o)}function yw({indices:n,values:t,weightCsf:e,weightGm:s,weightWm:o,volumes:r},{minSeparation:i,sigmaFloor:a,priorPower:l},c=!1){const u=e.length===0?new Float64Array(3):null,h=new Float64Array(3),d=new Float64Array(3);for(let g=0;g<t.length;g++){const x=t[g];u&&bw(r,n[g],l,u);const b=u?u[0]:e[g],y=u?u[1]:s[g],w=u?u[2]:o[g];h[0]+=b*x,d[0]+=b,h[1]+=y*x,d[1]+=y,h[2]+=w*x,d[2]+=w}if(d.some(g=>g<100))return{applied:!1,reason:"too few high-confidence tissue voxels"};const p=Array.from(h,(g,x)=>g/d[x]);if(!(p[0]+i<p[1]&&p[1]+i<p[2]))return{applied:!1,reason:`implausible T1 tissue ordering (${p.map(g=>g.toFixed(3)).join(", ")})`};if(c)return{applied:!0,means:p};const f=new Float64Array(3);for(let g=0;g<t.length;g++){const x=t[g];u&&bw(r,n[g],l,u);const b=u?u[0]:e[g],y=u?u[1]:s[g],w=u?u[2]:o[g],C=x-p[0],I=x-p[1],v=x-p[2];f[0]+=b*C*C,f[1]+=y*I*I,f[2]+=w*v*v}const m=Array.from(f,(g,x)=>Math.sqrt(Math.max(a*a,g/d[x])));return{applied:!0,means:p,sigmas:m}}function Aq(n,t,e,s,{minSupport:o,block:r,smoothingPasses:i}){const[a,l,c]=n,[u,h,d]=e,p=Math.ceil(u/r),f=Math.ceil(h/r),m=Math.ceil(d/r),g=p*f*m,x=new Float64Array(g),b=new Float64Array(g),[y,w,C]=s,I=u*h;for(let R=0;R<d;R++){const F=Math.floor(R/r);for(let A=0;A<h;A++){const O=Math.floor(A/r);let L=R*I+A*u;const _=(F*f+O)*p;for(let V=0;V<u;V++,L++){const G=Math.max(0,a[L]),q=Math.max(0,l[L]),j=Math.max(0,c[L]),Y=G+q+j,J=Math.min(Y,1);if(!(J>=o)||!Number.isFinite(t[L]))continue;const tt=G/Y,st=q/Y,it=j/Y,pt=it*y+tt*w+st*C,ht=J*(it*it+tt*tt+st*st),xt=_+Math.floor(V/r);x[xt]+=ht*(t[L]-pt),b[xt]+=ht}}}let v=new Float32Array(g),N=new Uint8Array(g);for(let R=0;R<g;R++)b[R]>1&&(v[R]=x[R]/b[R],N[R]=1);for(let R=0;R<i;R++){const F=new Float32Array(g),A=new Uint8Array(g);for(let O=0;O<m;O++)for(let L=0;L<f;L++)for(let _=0;_<p;_++){let V=0,G=0;for(let j=-1;j<=1;j++){const Y=O+j;if(!(Y<0||Y>=m))for(let J=-1;J<=1;J++){const tt=L+J;if(!(tt<0||tt>=f))for(let st=-1;st<=1;st++){const it=_+st;if(it<0||it>=p)continue;const pt=(Y*f+tt)*p+it;N[pt]&&(V+=v[pt],G++)}}}const q=(O*f+L)*p+_;G>0&&(F[q]=V/G,A[q]=1)}v=F,N=A}const k=(R,F)=>{const A=new Int32Array(R),O=new Int32Array(R),L=new Float32Array(R);for(let _=0;_<R;_++){const V=Ns((_+.5)/r-.5,0,F-1);A[_]=Math.floor(V),O[_]=Math.min(A[_]+1,F-1),L[_]=V-A[_]}return{low:A,high:O,t:L}},S=k(u,p),$=k(h,f),E=k(d,m);return R=>{const F=Math.floor(R/I),A=R-F*I,O=Math.floor(A/u),L=A-O*u,_=S.low[L],V=S.high[L],G=S.t[L],q=(E.low[F]*f+$.low[O])*p,j=(E.low[F]*f+$.high[O])*p,Y=(E.high[F]*f+$.low[O])*p,J=(E.high[F]*f+$.high[O])*p,tt=v[q+_]+(v[q+V]-v[q+_])*G,st=v[j+_]+(v[j+V]-v[j+_])*G,it=v[Y+_]+(v[Y+V]-v[Y+_])*G,pt=v[J+_]+(v[J+V]-v[J+_])*G,ht=$.t[O],xt=tt+(st-tt)*ht,ot=it+(pt-it)*ht;return xt+(ot-xt)*E.t[F]}}function kr([n,t,e],s,o){const r=Math.max(0,n[s]),i=Math.max(0,t[s]),a=Math.max(0,e[s]),l=r+i+a;l>Ss&&(o[0]+=r/l,o[1]+=i/l,o[2]+=a/l,o[3]++)}function Sr(n,t,e,s){const o=(n-t)/e;return-.5*o*o-s}function Dq(n,t,e,s={}){const{catLiteMinSupport:o=.03,catLitePurePriorPower:r=3,catLiteMinMeanSeparation:i=.035,catLiteSigmaFloor:a=.025,catLiteBiasBlockSize:l=16,catLiteBiasSmoothPasses:c=3,catLitePriorStrength:u=.8,catLiteIntensityStrength:h=.75,catLiteMixelPrior:d=.35,catLiteCsfWmMixelPrior:p=6,catLiteSpatialWeight:f=.25}=s,m={priorPower:r,minSupport:o,minSeparation:i,sigmaFloor:a},[g,x,b]=e,y=t.length,w=Eq(n,e,o),C=Rq(n,t,m),I=yw(C,m,!0);if(!I.applied)return{tissues:n,stats:I};const v=Aq(n,t,e,I.means,{minSupport:o,block:l,smoothingPasses:c});for(let bt=0;bt<C.indices.length;bt++){const It=C.indices[bt];C.values[bt]=t[It]-v(It)}const N=yw(C,m);if(!N.applied)return{tissues:n,stats:N};C.indices=C.weightCsf=C.weightGm=C.weightWm=null;const[k,S,$]=N.means,[E,R,F]=N.sigmas,[A,O,L]=n,_=new Float32Array(y),V=new Float32Array(y),G=new Float32Array(y),q=g*x,j=.5*(k+S),Y=.5*(S+$),J=.5*(k+$),tt=Math.sqrt(an(S-k,2)/12+.5*(an(E,2)+an(R,2))),st=Math.sqrt(an($-S,2)/12+.5*(an(R,2)+an(F,2))),it=Math.sqrt(an($-k,2)/12+.5*(an(E,2)+an(F,2))),pt=Math.log(E),ht=Math.log(R),xt=Math.log(F),ot=Math.log(tt),kt=Math.log(st),ct=Math.log(it),At=new Float64Array(4);let Ft=0;for(let bt=0;bt<b;bt++)for(let It=0;It<x;It++){let Ct=bt*q+It*g;for(let pe=0;pe<g;pe++,Ct++){const Ht=Math.max(0,A[Ct]),Oe=Math.max(0,O[Ct]),te=Math.max(0,L[Ct]),Ze=Ht+Oe+te,Te=Math.min(Ze,1);if(!(Te>=o)||!Number.isFinite(t[Ct]))continue;let $e=Ht/Ze,Yt=Oe/Ze,Ee=te/Ze;if(f>0){At.fill(0),pe>0&&kr(n,Ct-1,At),pe+1<g&&kr(n,Ct+1,At),It>0&&kr(n,Ct-g,At),It+1<x&&kr(n,Ct+g,At),bt>0&&kr(n,Ct-q,At),bt+1<b&&kr(n,Ct+q,At);const eu=At[3];if(eu){const Gp=1-f;$e=Gp*$e+f*At[0]/eu,Yt=Gp*Yt+f*At[1]/eu,Ee=Gp*Ee+f*At[2]/eu}}const se=C.values[Ft++],Fn=u*Math.log(Ee+Ss)+h*Sr(se,k,E,pt),to=u*Math.log($e+Ss)+h*Sr(se,S,R,ht),nt=u*Math.log(Yt+Ss)+h*Sr(se,$,F,xt),Nt=u*Math.log(d*2*Math.sqrt(Ee*$e)+Ss)+h*Sr(se,j,tt,ot),St=u*Math.log(d*2*Math.sqrt($e*Yt)+Ss)+h*Sr(se,Y,st,kt),fe=u*Math.log(p*2*Math.sqrt(Ee*Yt)*an(1-$e,2)+Ss)+h*Sr(se,J,it,ct),Pt=Math.max(Fn,to,nt,Nt,St,fe),rn=Math.exp(Fn-Pt),Me=Math.exp(to-Pt),$w=Math.exp(nt-Pt),zp=Math.exp(Nt-Pt),Vp=Math.exp(St-Pt),Wp=Math.exp(fe-Pt),Up=rn+Me+$w+zp+Vp+Wp,Iw=Ns((se-k)/(S-k),0,1),vw=Ns(($-se)/($-S),0,1),kw=Ns((se-k)/($-k),0,1),Sw=(Me+zp*Iw+Vp*vw)/Up,Nw=($w+Vp*(1-vw)+Wp*kw)/Up,Tw=(rn+zp*(1-Iw)+Wp*(1-kw))/Up,Ew=Math.min(Ee,Yt),Oq=Ns((Ew-$e)/(Ew+Ss),0,1),Mq=Ns(4*Ee*Yt,0,1),Rw=an(1-Mq*Oq,2);_[Ct]=Ns(Sw*Te*Rw,0,1);const Aw=(1-Sw*Rw)/Math.max(Nw+Tw,Ss);V[Ct]=Ns(Nw*Aw*Te,0,1),G[Ct]=Ns(Tw*Aw*Te,0,1)}}return{tissues:[_,V,G],stats:{applied:!0,tissueMeans:{csf:k,gray:S,white:$},tissueSigmas:{csf:E,gray:R,white:F},supportCleanup:w}}}const ww=({csf:n,gray:t,white:e})=>`CSF=${n.toFixed(3)} GM=${t.toFixed(3)} WM=${e.toFixed(3)}`;function Fq(n,t,e,s,o){return Z(this,null,function*(){var l;const r=[];for(let c=0;c<3;c++)r.push(yield o(n[c],c)),n[c]=null;const{tissues:i,stats:a}=Dq(r,t,Nq,e);if(s.Output_Type="Continuous tissue probability",s.Tissue="GM/WM/CSF",s.Softmax_Temperature=(l=e.softmaxTemperature)!=null?l:1,a.applied){s.Partial_Volume="CAT-lite mixed-class PVE",s.CAT_Lite_Tissue_Means=ww(a.tissueMeans),s.CAT_Lite_Tissue_Sigmas=ww(a.tissueSigmas);const{componentCount:c,removedVoxels:u}=a.supportCleanup;console.log(`[CAT-lite] means ${s.CAT_Lite_Tissue_Means}; sigmas ${s.CAT_Lite_Tissue_Sigmas}; removed ${u} voxels outside the largest of ${c} support components`)}else s.Partial_Volume=`Skipped: ${a.reason}`,console.warn(`[CAT-lite] skipped: ${a.reason}`);return i})}function hs(n="",t=-1,e="",s=[]){let o=[];s&&Object.keys(s).length>0&&(o=JSON.stringify(Tr({},s))),self.postMessage({cmd:"ui",message:n,progressFrac:t,modalMessage:e,statData:o})}function Cw(n,t,e,s){const o=Array.isArray(n)?n:[n];s&&o.push(s),self.postMessage({cmd:"img",img:n,opts:t,modelEntry:e,brainMask:s},o.map(r=>r.buffer))}function Nr(n){self.postMessage({cmd:"unsupported",reason:n})}function _q(n,t,e,s){return Z(this,null,function*(){const o=Tq(t),r=JH(t);if(!r){Nr(`no native WebGL2 descriptor for ${t.path} (needs a webgl2_runners/descriptors.js entry and a model.safetensors)`);return}if(!r.fullVolume){Nr(`${r.name} needs cropping on this path, which is not implemented yet`);return}const i=mw(t,fw.WEBGL_WEBWORKER);i.TF_Backend="webgl2-native",hs(o?"CAT-lite probability estimation started":"Segmentation started",0);const a=256,l=[a,a,a];hs("Loading weights...",.05);const c=`${n.rootURL}${t.webgpu_safetensor.replace(/^\.\//,"/")}`,u=yield fetch(c);if(!u.ok){Nr(`could not fetch ${c}: ${u.status}`);return}const h=yield u.arrayBuffer(),d=eq(h),p=nq(d),f=oq(p,{nx:a,ny:a,nz:a,activation:r.activation,dilations:r.dilations}),m=bq(f,l);if(console.log(`[webgl2-native] ${r.name}: ${f.chan}ch P=${f.planes} ${f.nclass}cls norm=${f.norm} affine=${f.affine} act=${f.activation} | ${Math.round(m.activationBytes/1048576)} MB activations | ${m.renderer}`),!m.supported){Nr(m.reasons.join("; "));return}const g=sq(p,f);hs("Preparing input data...",.1),yield jf("webgl"),H().set("WEBGL_DELETE_TEXTURE_THRESHOLD",0);let x,b,y=null;{let A=Al(s,l,"float32");const O=t.enableQuantileNorm?yield XH(A):yield qH(A);if(A.dispose(),A=O,o&&(y=yield A.data()),t.inputPermutation){const L=A.transpose(t.inputPermutation);A.dispose(),A=L}else if(t.enableTranspose){const L=A.transpose();A.dispose(),A=L}b=A.shape,x=yield A.data(),A.dispose()}un().disposeVariables(),un().reset(),hs("Running inference...",.2);const w=performance.now(),C=Iq({descriptor:f,packed:g.data,offsets:g.offsets,input:x,probability:o?kq(t,f.nclass):null,vox2:m.vox2,onProgress:(A,O)=>hs(O,.2+.7*A),onLog:A=>console.log(A)}),I=((performance.now()-w)/1e3).toFixed(4);console.log(`[webgl2-native] ---- Inference Time: ${I} s ---- (${C.path})`),x=null,yield jf("webgl");const v=(A,O)=>U(()=>{let L=Al(A,b,O);return t.outputPermutation?L=L.transpose(t.outputPermutation):t.enableTranspose&&(L=L.transpose()),L});if(o){const A=performance.now();hs("CAT-lite: smoothing priors and fitting partial-volume classes...",.92),Sq(C.tissues,C.support,l,t),C.support=null;const O=yield Fq(C.tissues,y,t,i,_=>Z(null,null,function*(){const V=v(_,"float32"),G=yield V.data();return V.dispose(),G})),L=((performance.now()-A)/1e3).toFixed(4);gw(i,I,L),hs(t.modelName+"<br>CAT-lite probability map finished",0),hs("",-1,"",i),Cw(O,n,t),un().disposeVariables();return}let N=v(new Int32Array(C.labels),"int32");if(U(()=>mt(N).dataSync()[0])===0){N.dispose(),Nr("native WebGL2 produced an all-zero volume");return}const S=performance.now(),$={},E=yield KH(N,s,t,n,$),R=((performance.now()-S)/1e3).toFixed(4);N.dispose(),un().disposeVariables();const F=new Set(E);jH(i,t.numClasses||F.size,F.size),gw(i,I,R),hs(t.modelName+"<br>Segmentation finished",0),hs("",-1,"",i),Cw(E,n,t,$.mask)})}self.addEventListener("message",n=>Z(null,null,function*(){const{opts:t,modelEntry:e,niftiHeader:s,niftiImage:o}=n.data;try{yield _q(t,e,s,o)}catch(r){console.error("[webgl2-native] failed",r);try{const i=mw(e,"webgl2-native");YH(i,r,"native WebGL2 runner")}catch(i){}Nr((r==null?void 0:r.message)||String(r))}}))})();
