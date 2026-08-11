var yp=Math.pow;var X=(Fc,_c,Io)=>new Promise((Ji,$o)=>{var _t=xn=>{try{Ls(Io.next(xn))}catch(Rn){$o(Rn)}},Oc=xn=>{try{Ls(Io.throw(xn))}catch(Rn){$o(Rn)}},Ls=xn=>xn.done?Ji(xn.value):Promise.resolve(xn.value).then(_t,Oc);Ls((Io=Io.apply(Fc,_c)).next())});(function(){"use strict";function Fc(n,e){return e.forEach(function(t){t&&typeof t!="string"&&!Array.isArray(t)&&Object.keys(t).forEach(function(s){if(s!=="default"&&!(s in n)){var o=Object.getOwnPropertyDescriptor(t,s);Object.defineProperty(n,s,o.get?o:{enumerable:!0,get:function(){return t[s]}})}})}),Object.freeze(n)}const _c=1e-7,Io=1e-4;class Ji{constructor(e,t){this.backend=e,this.dataMover=t,this.data=new WeakMap,this.dataIdsCount=0}get(e){return this.data.has(e)||this.dataMover.moveData(this.backend,e),this.data.get(e)}set(e,t){this.dataIdsCount++,this.data.set(e,t)}has(e){return this.data.has(e)}delete(e){return this.dataIdsCount--,this.data.delete(e)}numDataIds(){return this.dataIdsCount}}class $o{refCount(e){return _t("refCount")}incRef(e){return _t("incRef")}timerAvailable(){return!0}time(e){return _t("time")}read(e){return _t("read")}readSync(e){return _t("readSync")}readToGPU(e,t){return _t("readToGPU")}numDataIds(){return _t("numDataIds")}disposeData(e,t){return _t("disposeData")}write(e,t,s){return _t("write")}move(e,t,s,o,r){return _t("move")}createTensorFromGPUData(e,t,s){return _t("createTensorFromGPUData")}memory(){return _t("memory")}floatPrecision(){return _t("floatPrecision")}epsilon(){return this.floatPrecision()===32?_c:Io}dispose(){return _t("dispose")}}function _t(n){throw new Error(`'${n}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}function Oc(n){let e=n.length,t=0;for(;e>0;)t=Math.random()*e|0,e--,Rn(n,e,t)}function Ls(n,e,t){return Math.max(n,Math.min(e,t))}function xn(n){return n%2===0?n:n+1}function Rn(n,e,t){const s=n[e];n[e]=n[t],n[t]=s}function Qy(n){let e=0;for(let t=0;t<n.length;t++)e+=n[t];return e}function S(n,e){if(!n)throw new Error(typeof e=="string"?e:e())}function Lc(n,e,t=""){S(_e(n,e),()=>t+` Shapes ${n} and ${e} must match`)}function wp(n){S(n!=null,()=>"The input to the tensor constructor must be a non-null value.")}function j(n){if(n.length===0)return 1;let e=n[0];for(let t=1;t<n.length;t++)e*=n[t];return e}function _e(n,e){if(n===e)return!0;if(n==null||e==null||n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0}function vo(n){return n%1===0}function Mc(n){const e=Math.ceil(Math.sqrt(n));return[e,Math.ceil(n/e)]}function ko(n,e){return e<=n.length?n:n+" ".repeat(e-n.length)}function Cp(n,e=o=>0,t,s){return new Promise((o,r)=>{let i=0;const a=()=>{if(n()){o();return}i++;const l=e(i);if(t!=null&&i>=t){r();return}s!=null?s(a,l):setTimeout(a,l)};a()})}function Ip(n,e){let t=1,s=-1;for(let r=0;r<n.length;++r)if(n[r]>=0)t*=n[r];else if(n[r]===-1){if(s!==-1)throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${s} and dim ${r}`);s=r}else if(n[r]<0)throw Error(`Shapes can not be < 0. Found ${n[r]} at dim ${r}`);if(s===-1){if(e>0&&e!==t)throw Error(`Size(${e}) must match the product of shape ${n}`);return n}if(t===0)throw Error(`Cannot infer the missing size in [${n}] when there are 0 elements`);if(e%t!==0)throw Error(`The implicit shape can't be a fractional number. Got ${e} / ${t}`);const o=n.slice();return o[s]=e/t,o}function ve(n,e){const t=e.length;return n=n==null?e.map((s,o)=>o):[].concat(n),S(n.every(s=>s>=-t&&s<t),()=>`All values in axis param must be in range [-${t}, ${t}) but got axis ${n}`),S(n.every(s=>vo(s)),()=>`All values in axis param must be integers but got axis ${n}`),n.map(s=>s<0?t+s:s)}function cs(n,e){const t=[],s=[],o=e!=null&&Array.isArray(e)&&e.length===0,r=e==null||o?null:ve(e,n).sort();let i=0;for(let a=0;a<n.length;++a){if(r!=null){if(r[i]===a&&n[a]!==1)throw new Error(`Can't squeeze axis ${a} since its dim '${n[a]}' is not 1`);(r[i]==null||r[i]>a)&&n[a]===1&&(t.push(n[a]),s.push(a)),r[i]<=a&&i++}n[a]!==1&&(t.push(n[a]),s.push(a))}return{newShape:t,keptDims:s}}function Tt(n,e){return et(n,e)}function et(n,e){let t=null;if(n==null||n==="float32")t=new Float32Array(e);else if(n==="int32")t=new Int32Array(e);else if(n==="bool")t=new Uint8Array(e);else if(n==="string")t=new Array(e);else throw new Error(`Unknown data type ${n}`);return t}function Jy(n,e){for(let t=0;t<n.length;t++){const s=n[t];if(isNaN(s)||!isFinite(s))throw Error(`A tensor of type ${e} being uploaded contains ${s}.`)}}function ew(n){return n==="bool"||n==="complex64"||n==="float32"||n==="int32"||n==="string"}function $p(n,e){return!(e==="complex64"||e==="float32"&&n!=="complex64"||e==="int32"&&n!=="float32"&&n!=="complex64"||e==="bool"&&n==="bool")}function ea(n){if(n==="float32"||n==="int32")return 4;if(n==="complex64")return 8;if(n==="bool")return 1;throw new Error(`Unknown dtype ${n}`)}function tw(n){if(n==null)return 0;let e=0;return n.forEach(t=>e+=t.length),e}function lr(n){return typeof n=="string"||n instanceof String}function nw(n){return typeof n=="boolean"}function Pc(n){return typeof n=="number"}function So(n){return Array.isArray(n)?So(n[0]):n instanceof Float32Array?"float32":n instanceof Int32Array||n instanceof Uint8Array||n instanceof Uint8ClampedArray?"int32":Pc(n)?"float32":lr(n)?"string":nw(n)?"bool":"float32"}function Bc(n){return!!(n&&n.constructor&&n.call&&n.apply)}function zc(n,e){for(let t=e;t<n;++t)if(n%t===0)return t;return n}function fe(n){const e=n.length;if(e<2)return[];const t=new Array(e-1);t[e-2]=n[e-1];for(let s=e-3;s>=0;--s)t[s]=t[s+1]*n[s+1];return t}function vp(n,e,t,s=!1){const o=new Array;if(e.length===1){const r=e[0]*(s?2:1);for(let i=0;i<r;i++)o[i]=t[n+i]}else{const r=e[0],i=e.slice(1),a=i.reduce((l,c)=>l*c)*(s?2:1);for(let l=0;l<r;l++)o[l]=vp(n+l*a,i,t,s)}return o}function bn(n,e,t=!1){if(n.length===0)return e[0];const s=n.reduce((o,r)=>o*r)*(t?2:1);if(s===0)return[];if(s!==e.length)throw new Error(`[${n}] does not match the input size ${e.length}${t?" for a complex tensor":""}.`);return vp(0,n,e,t)}function sw(n,e){if(Array.isArray(n))return n;if(e==="float32")return n instanceof Float32Array?n:new Float32Array(n);if(e==="int32")return n instanceof Int32Array?n:new Int32Array(n);if(e==="bool"||e==="string")return Uint8Array.from(new Int32Array(n));throw new Error(`Unknown dtype ${e}`)}function Vc(n,e){const t=Et(n,e);for(let s=0;s<t.length;s++)t[s]=1;return t}function Et(n,e){if(e==null||e==="float32"||e==="complex64")return new Float32Array(n);if(e==="int32")return new Int32Array(n);if(e==="bool")return new Uint8Array(n);throw new Error(`Unknown data type ${e}`)}function kp(n,e){const t=n.reduce((s,o)=>s*o,1);if(e==null||e==="float32")return bn(n,new Float32Array(t));if(e==="int32")return bn(n,new Int32Array(t));if(e==="bool")return bn(n,new Uint8Array(t));throw new Error(`Unknown data type ${e}`)}function Xn(n){n.forEach(e=>{S(Number.isInteger(e)&&e>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${n}].`)})}function An(n,e,t){if(e===0)return 0;if(e===1)return n[0];let s=n[n.length-1];for(let o=0;o<n.length-1;++o)s+=t[o]*n[o];return s}function No(n,e,t){if(e===0)return[];if(e===1)return[n];const s=new Array(e);for(let o=0;o<s.length-1;++o)s[o]=Math.floor(n/t[o]),n-=s[o]*t[o];return s[s.length-1]=n,s}function Wc(n){return n&&n.then&&typeof n.then=="function"}const Sp="tfjsflags";class ow{constructor(e){this.global=e,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=rw,this.populateURLFlags()}setPlatform(e,t){this.platform!=null&&(U().getBool("IS_TEST")||U().getBool("PROD")||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${e}.`)),this.platformName=e,this.platform=t}registerFlag(e,t,s){if(this.flagRegistry[e]={evaluationFn:t,setHook:s},this.urlFlags[e]!=null){const o=this.urlFlags[e];U().getBool("IS_TEST")||U().getBool("PROD")||console.warn(`Setting feature override from URL ${e}: ${o}.`),this.set(e,o)}}getAsync(e){return X(this,null,function*(){return e in this.flags?this.flags[e]:(this.flags[e]=yield this.evaluateFlag(e),this.flags[e])})}get(e){if(e in this.flags)return this.flags[e];const t=this.evaluateFlag(e);if(Wc(t))throw new Error(`Flag ${e} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[e]=t,this.flags[e]}getNumber(e){return this.get(e)}getBool(e){return this.get(e)}getString(e){return this.get(e)}getFlags(){return this.flags}get features(){return this.flags}set(e,t){if(this.flagRegistry[e]==null)throw new Error(`Cannot set flag ${e} as it has not been registered.`);this.flags[e]=t,this.flagRegistry[e].setHook!=null&&this.flagRegistry[e].setHook(t)}evaluateFlag(e){if(this.flagRegistry[e]==null)throw new Error(`Cannot evaluate flag '${e}': no evaluation function found.`);return this.flagRegistry[e].evaluationFn()}setFlags(e){this.flags=Object.assign({},e)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(typeof this.global=="undefined"||typeof this.global.location=="undefined"||typeof this.global.location.search=="undefined")return;const e=this.getQueryParams(this.global.location.search);Sp in e&&e[Sp].split(",").forEach(s=>{const[o,r]=s.split(":");this.urlFlags[o]=aw(o,r)})}}function rw(n){const e={};return n.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(t,...s)=>(iw(e,s[0],s[1]),s.join("="))),e}function iw(n,e,t){n[decodeURIComponent(e)]=decodeURIComponent(t||"")}function aw(n,e){const t=e.toLowerCase();return t==="true"||t==="false"?t==="true":`${+t}`===t?+t:e}function U(){return Np}let Np=null;function lw(n){Np=n}let Uc;function Tp(){if(Uc==null){let n;if(typeof window!="undefined")n=window;else if(typeof global!="undefined")n=global;else if(typeof process!="undefined")n=process;else if(typeof self!="undefined")n=self;else throw new Error("Could not find a global object");Uc=n}return Uc}function cw(){const n=Tp();return n._tfGlobals==null&&(n._tfGlobals=new Map),n._tfGlobals}function Gc(n,e){const t=cw();if(t.has(n))return t.get(n);{const s=e();return t.set(n,s),t.get(n)}}const ta="Abs",cr="Acos",ur="Acosh",To="Add",Hc="AddN",qc="All",jc="Any",na="ArgMax",sa="ArgMin",hr="Asin",dr="Asinh",pr="Atan",fr="Atanh",mr="Atan2",oa="AvgPool",Kc="AvgPoolGrad",ra="AvgPool3D",Xc="AvgPool3DGrad",ia="BatchMatMul",aa="BatchToSpaceND",Yc="Bincount",Zc="BitwiseAnd",uw="BroadcastTo",Ep="BroadcastArgs",gr="Cast",xr="Ceil",br="ClipByValue",Qc="Complex",la="ComplexAbs",ca="Concat",ua="Conv2D",Jc="Conv2DBackpropFilter",ha="Conv2DBackpropInput",da="Conv3D",eu="Conv3DBackpropFilterV2",tu="Conv3DBackpropInputV2",yr="Cos",wr="Cosh",nu="Cumprod",pa="Cumsum",su="CropAndResize",ou="DenseBincount",ru="DepthToSpace",fa="DepthwiseConv2dNative",iu="DepthwiseConv2dNativeBackpropFilter",au="DepthwiseConv2dNativeBackpropInput",Rp="Diag",ma="Dilation2D",lu="Dilation2DBackpropInput",cu="Dilation2DBackpropFilter",hw="Draw",Cr="RealDiv",uu="Einsum",Ir="Elu",hu="EluGrad",$r="Erf",ga="Equal",vr="Exp",xa="ExpandDims",kr="Expm1",du="FFT",pu="Fill",fu="FlipLeftRight",Sr="Floor",Nr="FloorDiv",ba="FusedBatchNorm",ya="GatherV2",Ap="GatherNd",wa="Greater",Tr="GreaterEqual",Er="Identity",mu="IFFT",gu="Imag",Rr="IsFinite",Ar="IsInf",Dr="IsNan",Ca="LeakyRelu",Ia="Less",$a="LessEqual",Dp="LinSpace",Fr="Log",_r="Log1p",va="LogicalAnd",ka="LogicalNot",Sa="LogicalOr",dw="LogSoftmax",Na="LRN",xu="LRNGrad",Ta="Max",Or="Maximum",Ea="MaxPool",bu="MaxPoolGrad",Ra="MaxPool3D",yu="MaxPool3DGrad",Fp="MaxPoolWithArgmax",Aa="Mean",Da="Min",Lr="Minimum",Fa="MirrorPad",Mr="Mod",_p="Multinomial",Pr="Multiply",_a="Neg",Oa="NotEqual",wu="NonMaxSuppressionV3",Cu="NonMaxSuppressionV4",Iu="NonMaxSuppressionV5",La="OnesLike",Ma="OneHot",Pa="Pack",Ba="PadV2",Br="Pow",za="Prelu",Va="Prod",Op="RaggedGather",Lp="RaggedRange",Mp="RaggedTensorToTensor",$u="Range",vu="Real",zr="Reciprocal",Vr="Relu",Wa="Reshape",Ua="ResizeNearestNeighbor",ku="ResizeNearestNeighborGrad",Ga="ResizeBilinear",Su="ResizeBilinearGrad",Wr="Relu6",Ha="Reverse",Ur="Round",Gr="Rsqrt",Pp="ScatterNd",Bp="TensorScatterUpdate",zp="SearchSorted",qa="Select",Hr="Selu",ja="Slice",qr="Sin",jr="Sinh",Kr="Sign",Xr="Sigmoid",Yr="Softplus",Zr="Sqrt",Ka="Sum",Xa="SpaceToBatchND",Ya="SplitV",Za="Softmax",Vp="SparseFillEmptyRows",Wp="SparseReshape",Up="SparseSegmentMean",Gp="SparseSegmentSum",Hp="SparseToDense",Qr="SquaredDifference",Nu="Square",Tu="StaticRegexReplace",Eu="StridedSlice",qp="StringNGrams",jp="StringSplit",Kp="StringToHashBucketFast",Jr="Sub",ei="Tan",ti="Tanh",ni="Tile",Ru="TopK",Au="Transform",Eo="Transpose",Du="Unique",Qa="Unpack",Ja="UnsortedSegmentSum",el="ZerosLike",si="Step",pw="FromPixels",Fu="RotateWithOffset",tl="_FusedMatMul",nl="FusedConv2D",Xp="FusedDepthwiseConv2D";function Jt(...n){U().getBool("IS_TEST")||U().getBool("PROD")||console.warn(...n)}const sl=Gc("kernelRegistry",()=>new Map),_u=Gc("gradRegistry",()=>new Map);function Yp(n,e){const t=ef(n,e);return sl.get(t)}function Zp(n){return _u.get(n)}function Qp(n){const e=sl.entries(),t=[];for(;;){const{done:s,value:o}=e.next();if(s)break;const[r,i]=o,[a]=r.split("_");a===n&&t.push(i)}return t}function Jp(n){const{kernelName:e,backendName:t}=n,s=ef(e,t);sl.has(s)&&Jt(`The kernel '${e}' for backend '${t}' is already registered`),sl.set(s,n)}function fw(n){const{kernelName:e}=n;_u.has(e)&&U().getBool("DEBUG")&&Jt(`Overriding the gradient for '${e}'`),_u.set(e,n)}function ef(n,e){return`${e}_${n}`}function tf(n){return n instanceof Float32Array||n instanceof Int32Array||n instanceof Uint8Array||n instanceof Uint8ClampedArray}function mw(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function gw(n){if(Object.prototype.hasOwnProperty.call(n,"__esModule"))return n;var e=n.default;if(typeof e=="function"){var t=function s(){var o=!1;try{o=this instanceof s}catch(r){}return o?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(n).forEach(function(s){var o=Object.getOwnPropertyDescriptor(n,s);Object.defineProperty(t,s,o.get?o:{enumerable:!0,get:function(){return n[s]}})}),t}var Ou,nf;function xw(){if(nf)return Ou;nf=1,Ou=e;var n=null;try{n=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch(T){}function e(T,I,E){this.low=T|0,this.high=I|0,this.unsigned=!!E}e.prototype.__isLong__,Object.defineProperty(e.prototype,"__isLong__",{value:!0});function t(T){return(T&&T.__isLong__)===!0}e.isLong=t;var s={},o={};function r(T,I){var E,R,D;return I?(T>>>=0,(D=0<=T&&T<256)&&(R=o[T],R)?R:(E=a(T,(T|0)<0?-1:0,!0),D&&(o[T]=E),E)):(T|=0,(D=-128<=T&&T<128)&&(R=s[T],R)?R:(E=a(T,T<0?-1:0,!1),D&&(s[T]=E),E))}e.fromInt=r;function i(T,I){if(isNaN(T))return I?b:x;if(I){if(T<0)return b;if(T>=f)return v}else{if(T<=-m)return k;if(T+1>=m)return $}return T<0?i(-T,I).neg():a(T%p|0,T/p|0,I)}e.fromNumber=i;function a(T,I,E){return new e(T,I,E)}e.fromBits=a;var l=Math.pow;function c(T,I,E){if(T.length===0)throw Error("empty string");if(T==="NaN"||T==="Infinity"||T==="+Infinity"||T==="-Infinity")return x;if(typeof I=="number"?(E=I,I=!1):I=!!I,E=E||10,E<2||36<E)throw RangeError("radix");var R;if((R=T.indexOf("-"))>0)throw Error("interior hyphen");if(R===0)return c(T.substring(1),I,E).neg();for(var D=i(l(E,8)),F=x,_=0;_<T.length;_+=8){var P=Math.min(8,T.length-_),B=parseInt(T.substring(_,_+P),E);if(P<8){var H=i(l(E,P));F=F.mul(H).add(i(B))}else F=F.mul(D),F=F.add(i(B))}return F.unsigned=I,F}e.fromString=c;function u(T,I){return typeof T=="number"?i(T,I):typeof T=="string"?c(T,I):a(T.low,T.high,typeof I=="boolean"?I:T.unsigned)}e.fromValue=u;var h=65536,d=1<<24,p=h*h,f=p*p,m=f/2,g=r(d),x=r(0);e.ZERO=x;var b=r(0,!0);e.UZERO=b;var w=r(1);e.ONE=w;var y=r(1,!0);e.UONE=y;var C=r(-1);e.NEG_ONE=C;var $=a(-1,2147483647,!1);e.MAX_VALUE=$;var v=a(-1,-1,!0);e.MAX_UNSIGNED_VALUE=v;var k=a(0,-2147483648,!1);e.MIN_VALUE=k;var N=e.prototype;return N.toInt=function(){return this.unsigned?this.low>>>0:this.low},N.toNumber=function(){return this.unsigned?(this.high>>>0)*p+(this.low>>>0):this.high*p+(this.low>>>0)},N.toString=function(I){if(I=I||10,I<2||36<I)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative())if(this.eq(k)){var E=i(I),R=this.div(E),D=R.mul(E).sub(this);return R.toString(I)+D.toInt().toString(I)}else return"-"+this.neg().toString(I);for(var F=i(l(I,6),this.unsigned),_=this,P="";;){var B=_.div(F),H=_.sub(B.mul(F)).toInt()>>>0,G=H.toString(I);if(_=B,_.isZero())return G+P;for(;G.length<6;)G="0"+G;P=""+G+P}},N.getHighBits=function(){return this.high},N.getHighBitsUnsigned=function(){return this.high>>>0},N.getLowBits=function(){return this.low},N.getLowBitsUnsigned=function(){return this.low>>>0},N.getNumBitsAbs=function(){if(this.isNegative())return this.eq(k)?64:this.neg().getNumBitsAbs();for(var I=this.high!=0?this.high:this.low,E=31;E>0&&(I&1<<E)==0;E--);return this.high!=0?E+33:E+1},N.isZero=function(){return this.high===0&&this.low===0},N.eqz=N.isZero,N.isNegative=function(){return!this.unsigned&&this.high<0},N.isPositive=function(){return this.unsigned||this.high>=0},N.isOdd=function(){return(this.low&1)===1},N.isEven=function(){return(this.low&1)===0},N.equals=function(I){return t(I)||(I=u(I)),this.unsigned!==I.unsigned&&this.high>>>31===1&&I.high>>>31===1?!1:this.high===I.high&&this.low===I.low},N.eq=N.equals,N.notEquals=function(I){return!this.eq(I)},N.neq=N.notEquals,N.ne=N.notEquals,N.lessThan=function(I){return this.comp(I)<0},N.lt=N.lessThan,N.lessThanOrEqual=function(I){return this.comp(I)<=0},N.lte=N.lessThanOrEqual,N.le=N.lessThanOrEqual,N.greaterThan=function(I){return this.comp(I)>0},N.gt=N.greaterThan,N.greaterThanOrEqual=function(I){return this.comp(I)>=0},N.gte=N.greaterThanOrEqual,N.ge=N.greaterThanOrEqual,N.compare=function(I){if(t(I)||(I=u(I)),this.eq(I))return 0;var E=this.isNegative(),R=I.isNegative();return E&&!R?-1:!E&&R?1:this.unsigned?I.high>>>0>this.high>>>0||I.high===this.high&&I.low>>>0>this.low>>>0?-1:1:this.sub(I).isNegative()?-1:1},N.comp=N.compare,N.negate=function(){return!this.unsigned&&this.eq(k)?k:this.not().add(w)},N.neg=N.negate,N.add=function(I){t(I)||(I=u(I));var E=this.high>>>16,R=this.high&65535,D=this.low>>>16,F=this.low&65535,_=I.high>>>16,P=I.high&65535,B=I.low>>>16,H=I.low&65535,G=0,Z=0,Q=0,J=0;return J+=F+H,Q+=J>>>16,J&=65535,Q+=D+B,Z+=Q>>>16,Q&=65535,Z+=R+P,G+=Z>>>16,Z&=65535,G+=E+_,G&=65535,a(Q<<16|J,G<<16|Z,this.unsigned)},N.subtract=function(I){return t(I)||(I=u(I)),this.add(I.neg())},N.sub=N.subtract,N.multiply=function(I){if(this.isZero())return x;if(t(I)||(I=u(I)),n){var E=n.mul(this.low,this.high,I.low,I.high);return a(E,n.get_high(),this.unsigned)}if(I.isZero())return x;if(this.eq(k))return I.isOdd()?k:x;if(I.eq(k))return this.isOdd()?k:x;if(this.isNegative())return I.isNegative()?this.neg().mul(I.neg()):this.neg().mul(I).neg();if(I.isNegative())return this.mul(I.neg()).neg();if(this.lt(g)&&I.lt(g))return i(this.toNumber()*I.toNumber(),this.unsigned);var R=this.high>>>16,D=this.high&65535,F=this.low>>>16,_=this.low&65535,P=I.high>>>16,B=I.high&65535,H=I.low>>>16,G=I.low&65535,Z=0,Q=0,J=0,K=0;return K+=_*G,J+=K>>>16,K&=65535,J+=F*G,Q+=J>>>16,J&=65535,J+=_*H,Q+=J>>>16,J&=65535,Q+=D*G,Z+=Q>>>16,Q&=65535,Q+=F*H,Z+=Q>>>16,Q&=65535,Q+=_*B,Z+=Q>>>16,Q&=65535,Z+=R*G+D*H+F*B+_*P,Z&=65535,a(J<<16|K,Z<<16|Q,this.unsigned)},N.mul=N.multiply,N.divide=function(I){if(t(I)||(I=u(I)),I.isZero())throw Error("division by zero");if(n){if(!this.unsigned&&this.high===-2147483648&&I.low===-1&&I.high===-1)return this;var E=(this.unsigned?n.div_u:n.div_s)(this.low,this.high,I.low,I.high);return a(E,n.get_high(),this.unsigned)}if(this.isZero())return this.unsigned?b:x;var R,D,F;if(this.unsigned){if(I.unsigned||(I=I.toUnsigned()),I.gt(this))return b;if(I.gt(this.shru(1)))return y;F=b}else{if(this.eq(k)){if(I.eq(w)||I.eq(C))return k;if(I.eq(k))return w;var _=this.shr(1);return R=_.div(I).shl(1),R.eq(x)?I.isNegative()?w:C:(D=this.sub(I.mul(R)),F=R.add(D.div(I)),F)}else if(I.eq(k))return this.unsigned?b:x;if(this.isNegative())return I.isNegative()?this.neg().div(I.neg()):this.neg().div(I).neg();if(I.isNegative())return this.div(I.neg()).neg();F=x}for(D=this;D.gte(I);){R=Math.max(1,Math.floor(D.toNumber()/I.toNumber()));for(var P=Math.ceil(Math.log(R)/Math.LN2),B=P<=48?1:l(2,P-48),H=i(R),G=H.mul(I);G.isNegative()||G.gt(D);)R-=B,H=i(R,this.unsigned),G=H.mul(I);H.isZero()&&(H=w),F=F.add(H),D=D.sub(G)}return F},N.div=N.divide,N.modulo=function(I){if(t(I)||(I=u(I)),n){var E=(this.unsigned?n.rem_u:n.rem_s)(this.low,this.high,I.low,I.high);return a(E,n.get_high(),this.unsigned)}return this.sub(this.div(I).mul(I))},N.mod=N.modulo,N.rem=N.modulo,N.not=function(){return a(~this.low,~this.high,this.unsigned)},N.and=function(I){return t(I)||(I=u(I)),a(this.low&I.low,this.high&I.high,this.unsigned)},N.or=function(I){return t(I)||(I=u(I)),a(this.low|I.low,this.high|I.high,this.unsigned)},N.xor=function(I){return t(I)||(I=u(I)),a(this.low^I.low,this.high^I.high,this.unsigned)},N.shiftLeft=function(I){return t(I)&&(I=I.toInt()),(I&=63)===0?this:I<32?a(this.low<<I,this.high<<I|this.low>>>32-I,this.unsigned):a(0,this.low<<I-32,this.unsigned)},N.shl=N.shiftLeft,N.shiftRight=function(I){return t(I)&&(I=I.toInt()),(I&=63)===0?this:I<32?a(this.low>>>I|this.high<<32-I,this.high>>I,this.unsigned):a(this.high>>I-32,this.high>=0?0:-1,this.unsigned)},N.shr=N.shiftRight,N.shiftRightUnsigned=function(I){if(t(I)&&(I=I.toInt()),I&=63,I===0)return this;var E=this.high;if(I<32){var R=this.low;return a(R>>>I|E<<32-I,E>>>I,this.unsigned)}else return I===32?a(E,0,this.unsigned):a(E>>>I-32,0,this.unsigned)},N.shru=N.shiftRightUnsigned,N.shr_u=N.shiftRightUnsigned,N.toSigned=function(){return this.unsigned?a(this.low,this.high,!1):this},N.toUnsigned=function(){return this.unsigned?this:a(this.low,this.high,!0)},N.toBytes=function(I){return I?this.toBytesLE():this.toBytesBE()},N.toBytesLE=function(){var I=this.high,E=this.low;return[E&255,E>>>8&255,E>>>16&255,E>>>24,I&255,I>>>8&255,I>>>16&255,I>>>24]},N.toBytesBE=function(){var I=this.high,E=this.low;return[I>>>24,I>>>16&255,I>>>8&255,I&255,E>>>24,E>>>16&255,E>>>8&255,E&255]},e.fromBytes=function(I,E,R){return R?e.fromBytesLE(I,E):e.fromBytesBE(I,E)},e.fromBytesLE=function(I,E){return new e(I[0]|I[1]<<8|I[2]<<16|I[3]<<24,I[4]|I[5]<<8|I[6]<<16|I[7]<<24,E)},e.fromBytesBE=function(I,E){return new e(I[4]<<24|I[5]<<16|I[6]<<8|I[7],I[0]<<24|I[1]<<16|I[2]<<8|I[3],E)},Ou}var sf=xw(),of=mw(sf),bw=Fc({__proto__:null,default:of},[sf]);const Ms=of||bw;function ol(n){return Ms.fromString(n,!0,16)}const rf=ol("c3a5c85c97cb3127"),Ps=ol("b492b66fbe98f273"),Ot=ol("9ae16a3b2f90404f");function Lu(n){return n.xor(n.shru(47))}function af(n,e,t){const s=n.slice(e,e+t);return Ms.fromBytes(Array.from(s),!0,!0)}function Ge(n,e){return af(n,e,8)}function lf(n,e){return af(n,e,4)}function bt(n,e){return e===0?n:n.shru(e).or(n.shl(64-e))}function us(n,e,t=ol("9ddfea08eb382d69")){let s=n.xor(e).mul(t);s=s.xor(s.shru(47));let o=e.xor(s).mul(t);return o=o.xor(o.shru(47)),o=o.mul(t),o}function yw(n,e,t,s,o,r){o=o.add(n),r=bt(r.add(o).add(s),21);const i=o;return o=o.add(e),o=o.add(t),r=r.add(bt(o,44)),[o.add(s),r.add(i)]}function rl(n,e,t,s){return yw(Ge(n,e),Ge(n,e+8),Ge(n,e+16),Ge(n,e+24),t,s)}function ww(n,e=n.length){if(e>=8){const t=Ot.add(e*2),s=Ge(n,0).add(Ot),o=Ge(n,e-8),r=bt(o,37).mul(t).add(s),i=bt(s,25).add(o).mul(t);return us(r,i,t)}if(e>=4){const t=Ot.add(e*2),s=lf(n,0);return us(s.shl(3).add(e),lf(n,e-4),t)}if(e>0){const t=n[0],s=n[e>>1],o=n[e-1],r=t+(s<<8),i=e+(o<<2);return Lu(Ot.mul(r).xor(rf.mul(i))).mul(Ot)}return Ot}function Cw(n,e=n.length){const t=Ot.add(e*2),s=Ge(n,0).mul(Ps),o=Ge(n,8),r=Ge(n,e-8).mul(t),i=Ge(n,e-16).mul(Ot);return us(bt(s.add(o),43).add(bt(r,30)).add(i),s.add(bt(o.add(Ot),18)).add(r),t)}function Iw(n,e=n.length){const t=Ot.add(e*2),s=Ge(n,0).mul(Ot),o=Ge(n,8),r=Ge(n,e-8).mul(t),i=Ge(n,e-16).mul(Ot),a=bt(s.add(o),43).add(bt(r,30)).add(i),l=us(a,s.add(bt(o.add(Ot),18)).add(r),t),c=Ge(n,16).mul(t),u=Ge(n,24),h=a.add(Ge(n,e-32)).mul(t),d=l.add(Ge(n,e-24)).mul(t);return us(bt(c.add(u),43).add(bt(h,30)).add(d),c.add(bt(u.add(s),18)).add(h),t)}function $w(n,e=n.length){const t=Ms.fromNumber(81,!0);if(e<=32)return e<=16?ww(n,e):Cw(n,e);if(e<=64)return Iw(n,e);let s=t,o=t.mul(Ps).add(113),r=Lu(o.mul(Ot).add(113)).mul(Ot),i=[Ms.UZERO,Ms.UZERO],a=[Ms.UZERO,Ms.UZERO];s=s.mul(Ot).add(Ge(n,0));let l=0;const c=(e-1>>6)*64,u=c+(e-1&63)-63;do s=bt(s.add(o).add(i[0]).add(Ge(n,l+8)),37).mul(Ps),o=bt(o.add(i[1]).add(Ge(n,l+48)),42).mul(Ps),s=s.xor(a[1]),o=o.add(i[0]).add(Ge(n,l+40)),r=bt(r.add(a[0]),33).mul(Ps),i=rl(n,l,i[1].mul(Ps),s.add(a[0])),a=rl(n,l+32,r.add(a[1]),o.add(Ge(n,l+16))),[r,s]=[s,r],l+=64;while(l!==c);const h=Ps.add(r.and(255).shl(1));return l=u,a[0]=a[0].add(e-1&63),i[0]=i[0].add(a[0]),a[0]=a[0].add(i[0]),s=bt(s.add(o).add(i[0]).add(Ge(n,l+8)),37).mul(h),o=bt(o.add(i[1]).add(Ge(n,l+48)),42).mul(h),s=s.xor(a[1].mul(9)),o=o.add(i[0].mul(9).add(Ge(n,l+40))),r=bt(r.add(a[0]),33).mul(h),i=rl(n,l,i[1].mul(h),s.add(a[0])),a=rl(n,l+32,r.add(a[1]),o.add(Ge(n,l+16))),[r,s]=[s,r],us(us(i[0],a[0],h).add(Lu(o).mul(rf)).add(r),us(i[1],a[1],h).add(s),h)}function hs(n,e){return e==="string"?ds(n):Bs([n],e)}function vw(n,e){return n instanceof Float32Array&&e==="float32"||n instanceof Int32Array&&e==="int32"||n instanceof Uint8Array&&e==="bool"}function Bs(n,e){if(e==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(n)&&(n=zs(n)),U().getBool("DEBUG")&&Jy(n,e),vw(n,e))return n;if(e==null||e==="float32"||e==="complex64")return new Float32Array(n);if(e==="int32")return new Int32Array(n);if(e==="bool"){const t=new Uint8Array(n.length);for(let s=0;s<t.length;++s)Math.round(n[s])!==0&&(t[s]=1);return t}else throw new Error(`Unknown data type ${e}`)}function zt(){return U().platform.now()}function ds(n,e="utf-8"){return e=e||"utf-8",U().platform.encode(n,e)}function ps(n,e="utf-8"){return e=e||"utf-8",U().platform.decode(n,e)}function rn(n){return U().platform.isTypedArray!=null?U().platform.isTypedArray(n):tf(n)}function zs(n,e=[],t=!1){if(e==null&&(e=[]),typeof n=="boolean"||typeof n=="number"||typeof n=="string"||Wc(n)||n==null||rn(n)&&t)e.push(n);else if(Array.isArray(n)||rn(n))for(let s=0;s<n.length;++s)zs(n[s],e,t);else{let s=-1;for(const o of Object.keys(n))/^([1-9]+[0-9]*|0)$/.test(o)&&(s=Math.max(s,Number(o)));for(let o=0;o<=s;o++)zs(n[o],e,t)}return e}class kw{constructor(e,t){this.backendTimer=e,this.logger=t,t==null&&(this.logger=new Nw)}profileKernel(e,t,s){let o;const r=()=>{o=s()};let i;const a=zt();if(this.backendTimer.timerAvailable())i=this.backendTimer.time(r);else{r();for(const c of o)c.dataSync();i=Promise.resolve({kernelMs:zt()-a})}if(U().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let c=0;c<o.length;c++){const u=o[c];u.data().then(h=>{Sw(h,u.dtype,e)})}return{kernelName:e,outputs:o,inputs:t,timeMs:i.then(c=>c.kernelMs),extraInfo:i.then(c=>c.getExtraProfileInfo!=null?c.getExtraProfileInfo():"")}}logKernelProfile(e){const{kernelName:t,outputs:s,timeMs:o,inputs:r,extraInfo:i}=e;s.forEach(a=>{Promise.all([a.data(),o,i]).then(l=>{this.logger.logKernelProfile(t,a,l[0],l[1],r,l[2])})})}}function Sw(n,e,t){if(e!=="float32")return!1;for(let s=0;s<n.length;s++){const o=n[s];if(isNaN(o)||!isFinite(o))return console.warn(`Found ${o} in the result of '${t}'`),!0}return!1}class Nw{logKernelProfile(e,t,s,o,r,i){const a=typeof o=="number"?ko(`${o}ms`,9):o.error,l=ko(e,25),c=t.rank,u=t.size,h=ko(t.shape.toString(),14);let d="";for(const p in r){const f=r[p];if(f!=null){const m=f.shape||t.shape,g=m.length;d+=`${p}: ${g}D ${g>0?m:""} `}}console.log(`%c${l}	%c${a}	%c${c}D ${h}	%c${u}	%c${d}	%c${i}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}}function Tw(n,e,t){const s={},o={};for(let l=0;l<e.length;l++)s[e[l].id]=!0;for(let l=0;l<n.length;l++){const c=n[l],u=c.inputs;for(const h in u){const d=u[h];let p=!1;for(let f=0;f<e.length;f++)if(s[d.id]){c.outputs.forEach(m=>s[m.id]=!0),p=!0,o[c.id]=!0;break}if(p)break}}const r={};r[t.id]=!0;const i={};for(let l=n.length-1;l>=0;l--){const c=n[l],u=c.inputs;for(let h=0;h<c.outputs.length;h++)if(r[c.outputs[h].id]){for(const d in u)r[u[d].id]=!0,i[c.id]=!0;break}}const a=[];for(let l=0;l<n.length;l++){const c=n[l];if(o[c.id]&&i[c.id]){const u={};for(const d in c.inputs){const p=c.inputs[d];s[p.id]&&(u[d]=p)}const h=Object.assign({},c);h.inputs=u,h.outputs=c.outputs,a.push(h)}}return a}function Ew(n,e,t,s){for(let o=e.length-1;o>=0;o--){const r=e[o],i=[];if(r.outputs.forEach(l=>{const c=n[l.id];c!=null?i.push(c):i.push(null)}),r.gradient==null)throw new Error(`Cannot compute gradient: gradient function not found for ${r.kernelName}.`);const a=r.gradient(i);for(const l in r.inputs){if(!(l in a))throw new Error(`Cannot backprop through input ${l}. Available gradients found: ${Object.keys(a)}.`);const c=t(()=>a[l]());if(c.dtype!=="float32")throw new Error(`Error in gradient for op ${r.kernelName}. The gradient of input ${l} must have 'float32' dtype, but has '${c.dtype}'`);const u=r.inputs[l];if(!_e(c.shape,u.shape))throw new Error(`Error in gradient for op ${r.kernelName}. The gradient of input '${l}' has shape '${c.shape}', which does not match the shape of the input '${u.shape}'`);if(n[u.id]==null)n[u.id]=c;else{const h=n[u.id];n[u.id]=s(h,c),h.dispose()}}}}const cf=20,oi=3,Mu=7;function Rw(n,e,t,s){const o=fe(e),r=Aw(n,e,t,o),i=e.length,a=il(n,e,t,o,r),l=["Tensor"];return s&&(l.push(`  dtype: ${t}`),l.push(`  rank: ${i}`),l.push(`  shape: [${e}]`),l.push("  values:")),l.push(a.map(c=>"    "+c).join(`
`)),l.join(`
`)}function Aw(n,e,t,s){const o=j(e),r=s[s.length-1],i=new Array(r).fill(0),a=e.length,l=t==="complex64"?ii(n):n;if(a>1)for(let c=0;c<o/r;c++){const u=c*r;for(let h=0;h<r;h++)i[h]=Math.max(i[h],ri(l[u+h],0,t).length)}return i}function ri(n,e,t){let s;return Array.isArray(n)?s=`${parseFloat(n[0].toFixed(Mu))} + ${parseFloat(n[1].toFixed(Mu))}j`:lr(n)?s=`'${n}'`:t==="bool"?s=uf(n):s=parseFloat(n.toFixed(Mu)).toString(),ko(s,e)}function uf(n){return n===0?"false":"true"}function il(n,e,t,s,o,r=!0){const i=t==="complex64"?2:1,a=e[0],l=e.length;if(l===0){if(t==="complex64"){const m=ii(n);return[ri(m[0],0,t)]}return t==="bool"?[uf(n[0])]:[n[0].toString()]}if(l===1){if(a>cf){const g=oi*i;let x=Array.from(n.slice(0,g)),b=Array.from(n.slice((a-oi)*i,a*i));return t==="complex64"&&(x=ii(x),b=ii(b)),["["+x.map((w,y)=>ri(w,o[y],t)).join(", ")+", ..., "+b.map((w,y)=>ri(w,o[a-oi+y],t)).join(", ")+"]"]}return["["+(t==="complex64"?ii(n):Array.from(n)).map((g,x)=>ri(g,o[x],t)).join(", ")+"]"]}const c=e.slice(1),u=s.slice(1),h=s[0]*i,d=[];if(a>cf){for(let m=0;m<oi;m++){const g=m*h,x=g+h;d.push(...il(n.slice(g,x),c,t,u,o,!1))}d.push("...");for(let m=a-oi;m<a;m++){const g=m*h,x=g+h;d.push(...il(n.slice(g,x),c,t,u,o,m===a-1))}}else for(let m=0;m<a;m++){const g=m*h,x=g+h;d.push(...il(n.slice(g,x),c,t,u,o,m===a-1))}const p=l===2?",":"";d[0]="["+(a>0?d[0]+p:"");for(let m=1;m<d.length-1;m++)d[m]=" "+d[m]+p;let f=`,
`;for(let m=2;m<l;m++)f+=`
`;return d[d.length-1]=" "+d[d.length-1]+"]"+(r?"":f),d}function ii(n){const e=[];for(let t=0;t<n.length;t+=2)e.push([n[t],n[t+1]]);return e}class It{constructor(e,t,s){if(this.dtype=t,this.shape=e.slice(),this.size=j(e),s!=null){const o=s.length;S(o===this.size,()=>`Length of values '${o}' does not match the size inferred by the shape '${this.size}'.`)}if(t==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=s||et(t,this.size),this.strides=fe(e)}set(e,...t){t.length===0&&(t=[0]),S(t.length===this.rank,()=>`The number of provided coordinates (${t.length}) must match the rank (${this.rank})`);const s=this.locToIndex(t);this.values[s]=e}get(...e){e.length===0&&(e=[0]);let t=0;for(const o of e){if(o<0||o>=this.shape[t]){const r=`Requested out of range element at ${e}.   Buffer shape=${this.shape}`;throw new Error(r)}t++}let s=e[e.length-1];for(let o=0;o<e.length-1;++o)s+=this.strides[o]*e[o];return this.values[s]}locToIndex(e){if(this.rank===0)return 0;if(this.rank===1)return e[0];let t=e[e.length-1];for(let s=0;s<e.length-1;++s)t+=this.strides[s]*e[s];return t}indexToLoc(e){if(this.rank===0)return[];if(this.rank===1)return[e];const t=new Array(this.shape.length);for(let s=0;s<t.length-1;++s)t[s]=Math.floor(e/this.strides[s]),e-=t[s]*this.strides[s];return t[t.length-1]=e,t}get rank(){return this.shape.length}toTensor(){return yn().makeTensor(this.values,this.shape,this.dtype)}}let yn=null,Ro=null;function Dw(n){yn=n}function Fw(n){Ro=n}class ct{constructor(e,t,s,o){this.kept=!1,this.isDisposedInternal=!1,this.shape=e.slice(),this.dtype=t||"float32",this.size=j(e),this.strides=fe(e),this.dataId=s,this.id=o,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}buffer(){return X(this,null,function*(){const e=yield this.data();return Ro.buffer(this.shape,this.dtype,e)})}bufferSync(){return Ro.buffer(this.shape,this.dtype,this.dataSync())}array(){return X(this,null,function*(){const e=yield this.data();return bn(this.shape,e,this.dtype==="complex64")})}arraySync(){return bn(this.shape,this.dataSync(),this.dtype==="complex64")}data(){return X(this,null,function*(){this.throwIfDisposed();const e=yn().read(this.dataId);if(this.dtype==="string"){const t=yield e;try{return t.map(s=>ps(s))}catch(s){throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return e})}dataToGPU(e){return this.throwIfDisposed(),yn().readToGPU(this.dataId,e)}dataSync(){this.throwIfDisposed();const e=yn().readSync(this.dataId);if(this.dtype==="string")try{return e.map(t=>ps(t))}catch(t){throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return e}bytes(){return X(this,null,function*(){this.throwIfDisposed();const e=yield yn().read(this.dataId);return this.dtype==="string"?e:new Uint8Array(e.buffer)})}dispose(){this.isDisposed||(this.kerasMask&&this.kerasMask.dispose(),yn().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(e=!1){return Ro.print(this,e)}clone(){return this.throwIfDisposed(),Ro.clone(this)}toString(e=!1){const t=this.dataSync();return Rw(t,this.shape,this.dtype,e)}cast(e){return this.throwIfDisposed(),Ro.cast(this,e)}variable(e=!0,t,s){return this.throwIfDisposed(),yn().makeVariable(this,e,t,s)}}Object.defineProperty(ct,Symbol.hasInstance,{value:n=>!!n&&n.data!=null&&n.dataSync!=null&&n.throwIfDisposed!=null});function q(){return Gc("Tensor",()=>ct)}q();class al extends ct{constructor(e,t,s,o){super(e.shape,e.dtype,e.dataId,o),this.trainable=t,this.name=s}assign(e){if(e.dtype!==this.dtype)throw new Error(`dtype of the new value (${e.dtype}) and previous value (${this.dtype}) must match`);if(!_e(e.shape,this.shape))throw new Error(`shape of the new value (${e.shape}) and previous value (${this.shape}) must match`);yn().disposeTensor(this),this.dataId=e.dataId,yn().incRef(this,null)}dispose(){yn().disposeVariable(this),this.isDisposedInternal=!0}}Object.defineProperty(al,Symbol.hasInstance,{value:n=>n instanceof ct&&n.assign!=null&&n.assign instanceof Function});var hf;(function(n){n.R0="R0",n.R1="R1",n.R2="R2",n.R3="R3",n.R4="R4",n.R5="R5",n.R6="R6"})(hf||(hf={}));var Pu;(function(n){n.float32="float32",n.int32="int32",n.bool="int32",n.complex64="complex64"})(Pu||(Pu={}));var Bu;(function(n){n.float32="float32",n.int32="int32",n.bool="bool",n.complex64="complex64"})(Bu||(Bu={}));var zu;(function(n){n.float32="float32",n.int32="float32",n.bool="float32",n.complex64="complex64"})(zu||(zu={}));var Vu;(function(n){n.float32="complex64",n.int32="complex64",n.bool="complex64",n.complex64="complex64"})(Vu||(Vu={}));const _w={float32:zu,int32:Pu,bool:Bu,complex64:Vu};function Kt(n,e){if(n==="string"||e==="string"){if(n==="string"&&e==="string")return"string";throw new Error(`Can not upcast ${n} with ${e}`)}return _w[n][e]}function Wu(n){return Kt(n,"int32")}function df(n){return n!=null&&typeof n=="object"&&"texture"in n&&n.texture instanceof WebGLTexture}function pf(n){return typeof GPUBuffer!="undefined"&&n!=null&&typeof n=="object"&&"buffer"in n&&n.buffer instanceof GPUBuffer}function tt(n,e){if(n.dtype===e.dtype)return[n,e];const t=Kt(n.dtype,e.dtype);return[n.cast(t),e.cast(t)]}function ff(n){const e=[];return mf(n,e,new Set),e}function mf(n,e,t){if(n==null)return;if(n instanceof ct){e.push(n);return}if(!Ow(n))return;const s=n;for(const o in s){const r=s[o];t.has(r)||(t.add(r),mf(r,e,t))}}function Ow(n){return Array.isArray(n)||typeof n=="object"}function Uu(n){return n.kernelName!=null}class gf{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(e=>e.name)))}}}dispose(){for(const e in this.registeredVariables)this.registeredVariables[e].dispose()}}class Ao{constructor(e){this.ENV=e,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new gf}ready(){return X(this,null,function*(){if(this.pendingBackendInit!=null)return this.pendingBackendInit.then(()=>{});if(this.backendInstance!=null)return;const e=this.getSortedBackends();for(let t=0;t<e.length;t++){const s=e[t];if(yield this.initializeBackend(s).success){yield this.setBackend(s);return}}throw new Error("Could not initialize any backends, all backend initializations failed.")})}get backend(){if(this.pendingBackendInit!=null)throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(this.backendInstance==null){const{name:e,asyncInit:t}=this.initializeBackendsAndReturnBest();if(t)throw new Error(`The highest priority backend '${e}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(e)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(e){if(!(e in this.registry))if(e in this.registryFactory){const{asyncInit:t}=this.initializeBackend(e);if(t)return null}else return null;return this.registry[e]}findBackendFactory(e){return e in this.registryFactory?this.registryFactory[e].factory:null}registerBackend(e,t,s=1){return e in this.registryFactory?(Jt(`${e} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[e]={factory:t,priority:s},!0)}setBackend(e){return X(this,null,function*(){if(this.registryFactory[e]==null)throw new Error(`Backend name '${e}' not found in registry`);if(this.backendName=e,this.registry[e]==null){this.backendInstance=null;const{success:t,asyncInit:s}=this.initializeBackend(e);if(!(s?yield t:t))return!1}return this.backendInstance=this.registry[e],this.setupRegisteredKernels(),this.profiler=new kw(this.backendInstance),!0})}setupRegisteredKernels(){Qp(this.backendName).forEach(t=>{t.setupFunc!=null&&t.setupFunc(this.backendInstance)})}disposeRegisteredKernels(e){Qp(e).forEach(s=>{s.disposeFunc!=null&&s.disposeFunc(this.registry[e])})}initializeBackend(e){const t=this.registryFactory[e];if(t==null)throw new Error(`Cannot initialize backend ${e}, no registration found.`);try{const s=t.factory();if(s&&!(s instanceof $o)&&typeof s.then=="function"){const o=++this.pendingBackendInitId,r=s.then(i=>o<this.pendingBackendInitId?!1:(this.registry[e]=i,this.pendingBackendInit=null,!0)).catch(i=>(o<this.pendingBackendInitId||(this.pendingBackendInit=null,Jt(`Initialization of backend ${e} failed`),Jt(i.stack||i.message)),!1));return this.pendingBackendInit=r,{success:r,asyncInit:!0}}else return this.registry[e]=s,{success:!0,asyncInit:!1}}catch(s){return Jt(`Initialization of backend ${e} failed`),Jt(s.stack||s.message),{success:!1,asyncInit:!1}}}removeBackend(e){if(!(e in this.registryFactory))throw new Error(`${e} backend not found in registry`);this.backendName===e&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,e in this.registry&&(this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e]),delete this.registryFactory[e],this.backendName===e&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((e,t)=>this.registryFactory[t].priority-this.registryFactory[e].priority)}initializeBackendsAndReturnBest(){const e=this.getSortedBackends();for(let t=0;t<e.length;t++){const s=e[t],{success:o,asyncInit:r}=this.initializeBackend(s);if(r||o)return{name:s,asyncInit:r}}throw new Error("Could not initialize any backends, all backend initializations failed.")}moveData(e,t){const s=this.state.tensorInfo.get(t),o=s.backend,r=this.readSync(t),i=o.refCount(t);o.disposeData(t,!0),s.backend=e,e.move(t,r,s.shape,s.dtype,i),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(e,t){let s=null;if(t==null){if(typeof e!="function")throw new Error("Please provide a function to tidy()");t=e}else{if(typeof e!="string"&&!(e instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof t!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");s=e}let o;return this.scopedRun(()=>this.startScope(s),()=>this.endScope(o),()=>(o=t(),o instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),o))}scopedRun(e,t,s){e();try{const o=s();return t(),o}catch(o){throw t(),o}}nextTensorId(){return Ao.nextTensorId++}nextVariableId(){return Ao.nextVariableId++}clone(e){const t=M.runKernel(Er,{x:e}),s={x:e},o=i=>({x:()=>{const a="float32",l={x:i},c={dtype:a};return M.runKernel(gr,l,c)}}),r=[];return this.addTapeNode(this.state.activeScope.name,s,[t],o,r,{}),t}runKernel(e,t,s){if(this.backendName==null&&this.backend,!(Yp(e,this.backendName)!=null))throw new Error(`Kernel '${e}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:e,inputs:t,attrs:s})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(e,t,s){const o=this.backend.numDataIds();let r=0;s.forEach(l=>{r+=l.dtype==="complex64"?3:1});const i=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],a=o-t-r-i;if(a>0)throw new Error(`Backend '${this.backendName}' has an internal memory leak (${a} data ids) after running '${e}'`)}runKernelFunc(e){let t,s=[];const o=this.isTapeOn(),r=this.state.numBytes,i=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);let a;this.backendName==null&&this.backend;let l;const c=Uu(e)?e.kernelName:this.state.activeScope!=null?this.state.activeScope.name:"";if(Uu(e)){const{kernelName:f,inputs:m,attrs:g}=e;this.backendName==null&&this.backend;const x=Yp(f,this.backendName);S(x!=null,()=>`Cannot find registered kernel '${f}' for backend '${this.backendName}'`),a=()=>{const b=this.backend.numDataIds();l=x.kernelFunc({inputs:m,attrs:g,backend:this.backend});const w=Array.isArray(l)?l:[l];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(f,b,w);const y=w.map(C=>C.rank!=null?C:this.makeTensorFromTensorInfo(C));if(o){const C=this.getTensorsForGradient(f,m,y);s=this.saveTensorsForBackwardMode(C)}return y}}else{const{forwardFunc:f}=e,m=g=>{o&&(s=g.map(x=>this.keep(this.clone(x))))};a=()=>{const g=this.backend.numDataIds();l=this.tidy(()=>f(this.backend,m));const x=Array.isArray(l)?l:[l];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(c,g,x),x}}const{inputs:u,attrs:h}=e,d=Uu(e)?null:e.backwardsFunc;let p;return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{!this.ENV.getBool("DEBUG")&&!this.state.profiling?t=a():(p=this.profiler.profileKernel(c,u,()=>a()),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(p),t=p.outputs)}),o&&this.addTapeNode(c,u,t,d,s,h),this.state.profiling&&this.state.activeProfile.kernels.push({name:c,bytesAdded:this.state.numBytes-r,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-i,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(u).map(f=>u[f]!=null?u[f].shape:null),outputShapes:t.map(f=>f.shape),kernelTimeMs:p.timeMs,extraInfo:p.extraInfo}),Array.isArray(l)?t:t[0]}saveTensorsForBackwardMode(e){return e.map(s=>this.keep(this.clone(s)))}getTensorsForGradient(e,t,s){const o=Zp(e);if(o!=null){const r=o.inputsToSave||[],i=o.outputsToSave||[];let a;o.saveAllInputs?(S(Array.isArray(t),()=>"saveAllInputs is true, expected inputs to be an array."),a=Object.keys(t).map(c=>t[c])):a=r.map(c=>t[c]);const l=s.filter((c,u)=>i[u]);return a.concat(l)}return[]}makeTensor(e,t,s,o){if(e==null)throw new Error("Values passed to engine.makeTensor() are null");s=s||"float32",o=o||this.backend;let r=e;s==="string"&&lr(e[0])&&(r=e.map(l=>ds(l)));const i=o.write(r,t,s),a=new ct(t,s,i,this.nextTensorId());if(this.trackTensor(a,o),s==="string"){const l=this.state.tensorInfo.get(i),c=tw(r);this.state.numBytes+=c-l.bytes,l.bytes=c}return a}makeTensorFromDataId(e,t,s,o){s=s||"float32";const r={dataId:e,shape:t,dtype:s};return this.makeTensorFromTensorInfo(r,o)}makeTensorFromTensorInfo(e,t){const{dataId:s,shape:o,dtype:r}=e,i=new ct(o,r,s,this.nextTensorId());return this.trackTensor(i,t),i}makeVariable(e,t=!0,s,o){s=s||this.nextVariableId().toString(),o!=null&&o!==e.dtype&&(e=e.cast(o));const r=new al(e,t,s,this.nextTensorId());if(this.state.registeredVariables[r.name]!=null)throw new Error(`Variable with name ${r.name} was already registered`);return this.state.registeredVariables[r.name]=r,this.incRef(r,this.backend),r}trackTensor(e,t){this.state.numTensors++,e.dtype==="string"&&this.state.numStringTensors++;let s=0;e.dtype!=="complex64"&&e.dtype!=="string"&&(s=e.size*ea(e.dtype)),this.state.numBytes+=s,this.state.tensorInfo.has(e.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(e.dataId,{backend:t||this.backend,dtype:e.dtype,shape:e.shape,bytes:s})),e instanceof al||this.track(e)}incRef(e,t){this.trackTensor(e,t),this.backend.incRef(e.dataId)}removeDataId(e,t){this.state.tensorInfo.has(e)&&this.state.tensorInfo.get(e).backend===t&&(this.state.tensorInfo.delete(e),this.state.numDataBuffers--)}disposeTensor(e){if(!this.state.tensorInfo.has(e.dataId))return;const t=this.state.tensorInfo.get(e.dataId);if(this.state.numTensors--,e.dtype==="string"&&(this.state.numStringTensors--,this.state.numBytes-=t.bytes),e.dtype!=="complex64"&&e.dtype!=="string"){const s=e.size*ea(e.dtype);this.state.numBytes-=s}t.backend.disposeData(e.dataId)&&this.removeDataId(e.dataId,t.backend)}disposeVariables(){for(const e in this.state.registeredVariables){const t=this.state.registeredVariables[e];this.disposeVariable(t)}}disposeVariable(e){this.disposeTensor(e),this.state.registeredVariables[e.name]!=null&&delete this.state.registeredVariables[e.name]}memory(){const e=this.backend.memory();return e.numTensors=this.state.numTensors,e.numDataBuffers=this.state.numDataBuffers,e.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(e.unreliable=!0,e.reasons==null&&(e.reasons=[]),e.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),e}profile(e){return X(this,null,function*(){this.state.profiling=!0;const t=this.state.numBytes,s=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=yield e(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(o=>o.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-t,this.state.activeProfile.newTensors=this.state.numTensors-s;for(const o of this.state.activeProfile.kernels)o.kernelTimeMs=yield o.kernelTimeMs,o.extraInfo=yield o.extraInfo;return this.state.activeProfile})}isTapeOn(){return this.state.gradientDepth>0&&this.state.kernelDepth===0}addTapeNode(e,t,s,o,r,i){const a={id:this.state.nextTapeNodeId++,kernelName:e,inputs:t,outputs:s,saved:r},l=Zp(e);l!=null&&(o=l.gradFunc),o!=null&&(a.gradient=c=>(c=c.map((u,h)=>{if(u==null){const d=s[h],p=Et(d.size,d.dtype);return this.makeTensor(p,d.shape,d.dtype)}return u}),o(c.length>1?c:c[0],r,i))),this.state.activeTape.push(a)}keep(e){return e.kept=!0,e}startTape(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(e){const t={track:[],name:"unnamed scope",id:this.state.nextScopeId++};e&&(t.name=e),this.state.scopeStack.push(t),this.state.activeScope=t}endScope(e){const t=ff(e),s=new Set(t.map(r=>r.id));for(let r=0;r<this.state.activeScope.track.length;r++){const i=this.state.activeScope.track[r];!i.kept&&!s.has(i.id)&&i.dispose()}const o=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],t.forEach(r=>{!r.kept&&r.scopeId===o.id&&this.track(r)})}gradients(e,t,s,o=!1){if(S(t.length>0,()=>"gradients() received an empty list of xs."),s!=null&&s.dtype!=="float32")throw new Error(`dy must have 'float32' dtype, but has '${s.dtype}'`);const r=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy("forward",e));S(r instanceof ct,()=>"The result y returned by f() must be a tensor.");const i=Tw(this.state.activeTape,t,r);if(!o&&i.length===0&&t.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",()=>{const a={};a[r.id]=s==null?Lw(r.shape):s,Ew(a,i,c=>this.tidy(c),Mw);const l=t.map(c=>a[c.id]);return this.state.gradientDepth===0&&(this.state.activeTape.forEach(c=>{for(const u of c.saved)u.dispose()}),this.state.activeTape=null),{value:r,grads:l}})}customGrad(e){return S(Bc(e),()=>"The f passed in customGrad(f) must be a function."),(...t)=>{S(t.every(a=>a instanceof ct),()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors");let s;const o={};t.forEach((a,l)=>{o[l]=a});const r=(a,l)=>(s=e(...t,l),S(s.value instanceof ct,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),S(Bc(s.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),s.value),i=(a,l)=>{const c=s.gradFunc(a,l),u=Array.isArray(c)?c:[c];S(u.length===t.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),S(u.every(d=>d instanceof ct),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");const h={};return u.forEach((d,p)=>{h[p]=()=>d}),h};return this.runKernelFunc({forwardFunc:r,backwardsFunc:i,inputs:o})}}readSync(e){return this.state.tensorInfo.get(e).backend.readSync(e)}read(e){return this.state.tensorInfo.get(e).backend.read(e)}readToGPU(e,t){return this.state.tensorInfo.get(e).backend.readToGPU(e,t)}time(e){return X(this,null,function*(){const t=zt(),s=yield this.backend.time(e);return s.wallMs=zt()-t,s})}track(e){return this.state.activeScope!=null&&(e.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(e)),e}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new gf;for(const e in this.registry)this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}}Ao.nextTensorId=0,Ao.nextVariableId=0;function Lw(n){const e=Vc(j(n),"float32");return M.makeTensor(e,n,"float32")}function xf(){const n=Tp();if(n._tfengine==null){const e=new ow(n);n._tfengine=new Ao(e)}return lw(n._tfengine.ENV),Dw(()=>n._tfengine),n._tfengine}const M=xf();function Mw(n,e){const t={a:n,b:e};return M.runKernel(To,t)}function Pw(){return typeof navigator!="undefined"&&navigator!=null}function bf(n){if(n||Pw()){if(n||(n=navigator),n.product==="ReactNative")return!0;const e=n.userAgent||n.vendor||(typeof window!="undefined"?window.opera:"");if(!e){const t=n;return t.userAgentData&&t.userAgentData.mobile}return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4))}return!1}function yf(){return typeof window!="undefined"&&window.document!=null||typeof WorkerGlobalScope!="undefined"}const Vt=U();Vt.registerFlag("DEBUG",()=>!1,n=>{n&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")}),Vt.registerFlag("IS_BROWSER",()=>yf()),Vt.registerFlag("IS_NODE",()=>typeof process!="undefined"&&typeof process.versions!="undefined"&&typeof process.versions.node!="undefined"),Vt.registerFlag("IS_CHROME",()=>typeof navigator!="undefined"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)),Vt.registerFlag("IS_SAFARI",()=>typeof navigator!="undefined"&&navigator!=null&&navigator.userAgent!=null&&/Safari/.test(navigator.userAgent)&&/Apple/.test(navigator.vendor)),Vt.registerFlag("PROD",()=>!1),Vt.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",()=>Vt.getBool("DEBUG")),Vt.registerFlag("DEPRECATION_WARNINGS_ENABLED",()=>!0),Vt.registerFlag("IS_TEST",()=>!1),Vt.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",()=>Vt.getBool("DEBUG")),Vt.registerFlag("WRAP_TO_IMAGEBITMAP",()=>!1),Vt.registerFlag("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU",()=>!1),Vt.registerFlag("USE_SETTIMEOUTCUSTOM",()=>!1);function ll(n,e){let t=n;if(rn(n))return e==="string"?[]:[n.length];if(df(n)){const o=n.channels||"RGBA";return[n.height,n.width*o.length]}else if(pf(n))return[n.buffer.size/(e==null?4:ea(e))];if(!Array.isArray(n))return[];const s=[];for(;Array.isArray(t)||rn(t)&&e!=="string";)s.push(t.length),t=t[0];return Array.isArray(n)&&U().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&wf(n,s,[]),s}function wf(n,e,t){if(t=t||[],!Array.isArray(n)&&!rn(n)){S(e.length===0,()=>`Element arr[${t.join("][")}] is a primitive, but should be an array/TypedArray of ${e[0]} elements`);return}S(e.length>0,()=>`Element arr[${t.join("][")}] should be a primitive, but is an array of ${n.length} elements`),S(n.length===e[0],()=>`Element arr[${t.join("][")}] should have ${e[0]} elements, but has ${n.length} elements`);const s=e.slice(1);for(let o=0;o<n.length;++o)wf(n[o],s,t.concat(o))}function Cf(n,e,t,s){if(n!=="string_or_numeric"){if(n==null)throw new Error("Expected dtype cannot be null.");if(n!=="numeric"&&n!==e||n==="numeric"&&e==="string")throw new Error(`Argument '${t}' passed to '${s}' must be ${n} tensor, but got ${e} tensor`)}}function A(n,e,t,s="numeric"){if(n instanceof q())return Cf(s,n.dtype,e,t),n;let o=So(n);if(o!=="string"&&["bool","int32","float32"].indexOf(s)>=0&&(o=s),Cf(s,o,e,t),n==null||!rn(n)&&!Array.isArray(n)&&typeof n!="number"&&typeof n!="boolean"&&typeof n!="string"){const l=n==null?"null":n.constructor.name;throw new Error(`Argument '${e}' passed to '${t}' must be a Tensor or TensorLike, but got '${l}'`)}const r=ll(n,o);!rn(n)&&!Array.isArray(n)&&(n=[n]);const a=o!=="string"?Bs(n,o):zs(n,[],!0);return M.makeTensor(a,r,o)}function If(n,e,t,s="numeric"){if(!Array.isArray(n))throw new Error(`Argument ${e} passed to ${t} must be a \`Tensor[]\` or \`TensorLike[]\``);return n.map((r,i)=>A(r,`${e}[${i}]`,t,s))}const Bw="__op";function W(n){const e=Object.keys(n);if(e.length!==1)throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${e.length} keys.`);let t=e[0];const s=n[t];t.endsWith("_")&&(t=t.substring(0,t.length-1)),t=t+Bw;const o=(...r)=>{M.startScope(t);try{const i=s(...r);return Wc(i)&&console.error("Cannot return a Promise inside of tidy."),M.endScope(i),i}catch(i){throw M.endScope(null),i}};return Object.defineProperty(o,"name",{value:t,configurable:!0}),o}function zw(n,e){const t=A(n,"real","complex"),s=A(e,"imag","complex");Lc(t.shape,s.shape,`real and imag shapes, ${t.shape} and ${s.shape}, must match in call to tf.complex().`);const o={real:t,imag:s};return M.runKernel(Qc,o)}const Vs=W({complex_:zw});function cl(n,e,t,s){if(s==null)s=So(n);else if(s==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(pf(n)||df(n)){if(s!=="float32"&&s!=="int32")throw new Error(`Creating tensor from GPU data only supports 'float32'|'int32' dtype, while the dtype is ${s}.`);return M.backend.createTensorFromGPUData(n,e||t,s)}if(!rn(n)&&!Array.isArray(n)&&typeof n!="number"&&typeof n!="boolean"&&typeof n!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(e!=null){Xn(e);const o=j(e),r=j(t);S(o===r,()=>`Based on the provided shape, [${e}], the tensor should have ${o} values but has ${r}`);for(let i=0;i<t.length;++i){const a=t[i],l=i===t.length-1?a!==j(e.slice(i)):!0;S(t[i]===e[i]||!l,()=>`Error creating a new Tensor. Inferred shape (${t}) does not match the provided shape (${e}). `)}}return!rn(n)&&!Array.isArray(n)&&(n=[n]),e=e||t,n=s!=="string"?Bs(n,s):zs(n,[],!0),M.makeTensor(n,e,s)}function Ws(n,e,t){const s=ll(n,t);return cl(n,e,s,t)}const ul={float32:4,float16:2,int32:4,uint16:2,uint8:1,bool:1,complex64:8};class Yn{static join(e){return new Yn(e).slice()}constructor(e){if(this.shards=[],this.previousShardIndex=0,e==null||(e instanceof Array||(e=[e]),e=e.map(s=>rn(s)?s.buffer:s),e.length===0))return;this.bufferUniformSize=e[0].byteLength;let t=0;for(let s=0;s<e.length;s++){const o=e[s];s!==e.length-1&&o.byteLength!==this.bufferUniformSize&&(this.bufferUniformSize=void 0);const r=t+o.byteLength;this.shards.push({buffer:o,start:t,end:r}),t=r}this.shards.length===0&&(this.byteLength=0),this.byteLength=this.shards[this.shards.length-1].end}slice(e=0,t=this.byteLength){if(this.shards.length===0)return new ArrayBuffer(0);if(e=isNaN(Number(e))?0:e,t=isNaN(Number(t))?0:t,e=Math.max(0,e),t=Math.min(this.byteLength,t),t<=e)return new ArrayBuffer(0);const s=this.findShardForByte(e);if(s===-1)throw new Error(`Could not find start shard for byte ${e}`);const o=t-e,r=new ArrayBuffer(o),i=new Uint8Array(r);let a=0;for(let l=s;l<this.shards.length;l++){const c=this.shards[l],h=e+a-c.start,d=a,f=Math.min(t,c.end)-c.start,m=new Uint8Array(c.buffer,h,f-h);if(i.set(m,d),a+=m.length,t<c.end)break}return r}findShardForByte(e){if(this.shards.length===0||e<0||e>=this.byteLength)return-1;if(this.bufferUniformSize!=null)return this.previousShardIndex=Math.floor(e/this.bufferUniformSize),this.previousShardIndex;function t(o){return e<o.start?-1:e>=o.end?1:0}if(t(this.shards[this.previousShardIndex])===0)return this.previousShardIndex;const s=Vw(this.shards,t);return s===-1?-1:(this.previousShardIndex=s,this.previousShardIndex)}}function Vw(n,e){let t=0,s=n.length;for(;t<=s;){const o=Math.floor((s-t)/2)+t,r=e(n[o]);if(r===0)return o;r<0?s=o:t=o+1}return-1}function Ww(){U().set("PROD",!0)}function je(){return M}function ai(){return M.memory()}function z(n,e){return M.tidy(n,e)}function xe(n){ff(n).forEach(t=>t.dispose())}function Dn(n){return M.keep(n)}function Uw(n){return M.setBackend(n)}function Gw(){return M.ready()}function Gu(){return M.backendName}function $f(n,e,t=1){return M.registerBackend(n,e,t)}function vf(){return M.backend}const Do=4;function kf(n,e){return X(this,null,function*(){const t=[],s=[],o=Array.isArray(n)?n.map(i=>i.name):Object.keys(n);for(let i=0;i<o.length;++i){const a=o[i],l=Array.isArray(n)?n[i].tensor:n[a];if(l.dtype!=="float32"&&l.dtype!=="int32"&&l.dtype!=="bool"&&l.dtype!=="string"&&l.dtype!=="complex64")throw new Error(`Unsupported dtype in weight '${a}': ${l.dtype}`);const c={name:a,shape:l.shape,dtype:l.dtype};if(l.dtype==="string"){const u=new Promise(h=>X(null,null,function*(){const d=yield l.bytes(),p=d.reduce((g,x)=>g+x.length,0)+Do*d.length,f=new Uint8Array(p);let m=0;for(let g=0;g<d.length;g++){const x=d[g],b=new Uint8Array(new Uint32Array([x.length]).buffer);f.set(b,m),m+=Do,f.set(x,m),m+=x.length}h(f)}));s.push(u)}else s.push(l.data());e!=null&&(c.group=e),t.push(c)}const r=yield Promise.all(s);return{data:Kw(r),specs:t}})}function Hw(n,e){const t=new Yn(n),s={};let o=0;for(const r of e){const i=qw(r,(a,l)=>t.slice(o+a,o+l));s[r.name]=jw(r,t.slice(o,o+i)),o+=i}return s}function qw(n,e){const t=j(n.shape);let s;if("quantization"in n){const o=n.quantization;s=ul[o.dtype]}else if(n.dtype==="string"){let o=0;for(let r=0;r<t;r++)o+=Do+new Uint32Array(e(o,o+Do))[0];return o}else s=ul[n.dtype];return t*s}function jw(n,e){const t=n.name,s=n.dtype,o=n.shape,r=j(o);let i,a=0;if("quantization"in n){const l=n.quantization;if(l.dtype==="uint8"||l.dtype==="uint16"){if(!("min"in l&&"scale"in l))throw new Error(`Weight ${n.name} with quantization ${l.dtype} doesn't have corresponding metadata min and scale.`)}else if(l.dtype==="float16"){if(s!=="float32")throw new Error(`Weight ${n.name} is quantized with ${l.dtype} which only supports weights of type float32 not ${s}.`)}else throw new Error(`Weight ${n.name} has unknown quantization dtype ${l.dtype}. Supported quantization dtypes are: 'uint8', 'uint16', and 'float16'.`);const c=ul[l.dtype],u=l.dtype==="uint8"?new Uint8Array(e):new Uint16Array(e);if(s==="float32")if(l.dtype==="uint8"||l.dtype==="uint16"){i=new Float32Array(u.length);for(let h=0;h<u.length;h++){const d=u[h];i[h]=d*l.scale+l.min}}else if(l.dtype==="float16")i=sC()(u);else throw new Error(`Unsupported quantization type ${l.dtype} for weight type float32.`);else if(s==="int32"){if(l.dtype!=="uint8"&&l.dtype!=="uint16")throw new Error(`Unsupported quantization type ${l.dtype} for weight type int32.`);i=new Int32Array(u.length);for(let h=0;h<u.length;h++){const d=u[h];i[h]=Math.round(d*l.scale+l.min)}}else throw new Error(`Unsupported dtype in weight '${t}': ${s}`);a+=r*c}else if(s==="string"){const l=j(n.shape);i=[];for(let c=0;c<l;c++){const u=new Uint32Array(e.slice(a,a+Do))[0];a+=Do;const h=new Uint8Array(e.slice(a,a+u));i.push(h),a+=u}}else{const l=ul[s];if(s==="float32")i=new Float32Array(e);else if(s==="int32")i=new Int32Array(e);else if(s==="bool")i=new Uint8Array(e);else if(s==="complex64"){i=new Float32Array(e);const c=new Float32Array(i.length/2),u=new Float32Array(i.length/2);for(let f=0;f<c.length;f++)c[f]=i[f*2],u[f]=i[f*2+1];const h=Ws(c,o,"float32"),d=Ws(u,o,"float32"),p=Vs(h,d);return h.dispose(),d.dispose(),p}else throw new Error(`Unsupported dtype in weight '${t}': ${s}`);a+=r*l}return Ws(i,o,s)}function Kw(n){if(n===null)throw new Error(`Invalid input value: ${JSON.stringify(n)}`);let e=0;const t=[];n.forEach(r=>{if(e+=r.byteLength,t.push(r.byteLength===r.buffer.byteLength?r:new r.constructor(r)),!(r instanceof Float32Array||r instanceof Int32Array||r instanceof Uint8Array))throw new Error(`Unsupported TypedArray subtype: ${r.constructor.name}`)});const s=new Uint8Array(e);let o=0;return t.forEach(r=>{s.set(new Uint8Array(r.buffer),o),o+=r.byteLength}),s.buffer}const Hu=typeof Buffer!="undefined"&&(typeof Blob=="undefined"||typeof atob=="undefined"||typeof btoa=="undefined");function Sf(n){return Hu?Buffer.byteLength(n,"utf8"):new Blob([n]).size}function Xw(n){if(Hu)return Buffer.from(n).toString("base64");const e=new Uint8Array(n);let t="";for(let s=0,o=e.length;s<o;s++)t+=String.fromCharCode(e[s]);return btoa(t)}function Yw(n){if(Hu){const s=Buffer.from(n,"base64");return s.buffer.slice(s.byteOffset,s.byteOffset+s.byteLength)}const e=atob(n),t=new Uint8Array(e.length);for(let s=0;s<e.length;++s)t.set([e.charCodeAt(s)],s);return t.buffer}function Zw(n){return Yn.join(n)}function Nf(n,e){const t={modelTopology:n.modelTopology,format:n.format,generatedBy:n.generatedBy,convertedBy:n.convertedBy,weightsManifest:e};return n.signature!=null&&(t.signature=n.signature),n.userDefinedMetadata!=null&&(t.userDefinedMetadata=n.userDefinedMetadata),n.modelInitializer!=null&&(t.modelInitializer=n.modelInitializer),n.initializerSignature!=null&&(t.initializerSignature=n.initializerSignature),n.trainingConfig!=null&&(t.trainingConfig=n.trainingConfig),t}function Qw(n,e,t){const s={modelTopology:n.modelTopology,format:n.format,generatedBy:n.generatedBy,convertedBy:n.convertedBy};if(n.trainingConfig!=null&&(s.trainingConfig=n.trainingConfig),n.weightsManifest!=null){if(!e)throw new Error("modelJSON has weightsManifest but weightSpecs is null");if(!t)throw new Error("modelJSON has weightsManifest but weightData is null");s.weightSpecs=e,s.weightData=t}return n.signature!=null&&(s.signature=n.signature),n.userDefinedMetadata!=null&&(s.userDefinedMetadata=n.userDefinedMetadata),n.modelInitializer!=null&&(s.modelInitializer=n.modelInitializer),n.initializerSignature!=null&&(s.initializerSignature=n.initializerSignature),s}function Jw(n,e){return X(this,null,function*(){let t,s;return n.weightsManifest!=null&&([t,s]=yield e(n.weightsManifest)),Qw(n,t,s)})}function hl(n){if(n.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:n.modelTopology==null?0:Sf(JSON.stringify(n.modelTopology)),weightSpecsBytes:n.weightSpecs==null?0:Sf(JSON.stringify(n.weightSpecs)),weightDataBytes:n.weightData==null?0:new Yn(n.weightData).byteLength}}function Tf(n){const e=[];for(const t of n)e.push(...t.weights);return e}function eC(){const n=t=>{let s=t<<13,o=0;for(;(s&8388608)===0;)o-=8388608,s<<=1;return s&=-8388609,o+=947912704,s|o},e=new Uint32Array(2048);e[0]=0;for(let t=1;t<1024;t++)e[t]=n(t);for(let t=1024;t<2048;t++)e[t]=939524096+(t-1024<<13);return e}function tC(){const n=new Uint32Array(64);n[0]=0,n[31]=1199570944,n[32]=2147483648,n[63]=3347054592;for(let e=1;e<31;e++)n[e]=e<<23;for(let e=33;e<63;e++)n[e]=2147483648+(e-32<<23);return n}function nC(){const n=new Uint32Array(64);for(let e=0;e<64;e++)n[e]=1024;return n[0]=n[32]=0,n}function sC(){const n=eC(),e=tC(),t=nC();return s=>{const o=new ArrayBuffer(4*s.length),r=new Uint32Array(o);for(let i=0;i<s.length;i++){const a=s[i],l=n[t[a>>10]+(a&1023)]+e[a>>10];r[i]=l}return new Float32Array(o)}}class ut{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return ut.instance==null&&(ut.instance=new ut),ut.instance}static registerSaveRouter(e){ut.getInstance().saveRouters.push(e)}static registerLoadRouter(e){ut.getInstance().loadRouters.push(e)}static getSaveHandlers(e){return ut.getHandlers(e,"save")}static getLoadHandlers(e,t){return ut.getHandlers(e,"load",t)}static getHandlers(e,t,s){const o=[];return(t==="load"?ut.getInstance().loadRouters:ut.getInstance().saveRouters).forEach(i=>{const a=i(e,s);a!==null&&o.push(a)}),o}}const oC=n=>ut.getSaveHandlers(n),rC=(n,e)=>ut.getLoadHandlers(n,e);const qu="tensorflowjs",ju=1,Us="models_store",fs="model_info_store";function Ef(){if(!U().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");const n=typeof window=="undefined"?self:window,e=n.indexedDB||n.mozIndexedDB||n.webkitIndexedDB||n.msIndexedDB||n.shimIndexedDB;if(e==null)throw new Error("The current browser does not appear to support IndexedDB.");return e}function Ku(n){const e=n.result;e.createObjectStore(Us,{keyPath:"modelPath"}),e.createObjectStore(fs,{keyPath:"modelPath"})}class Gs{constructor(e){if(this.indexedDB=Ef(),e==null||!e)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=e}save(e){return X(this,null,function*(){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,e)})}load(){return X(this,null,function*(){return this.databaseAction(this.modelPath)})}databaseAction(e,t){return new Promise((s,o)=>{const r=this.indexedDB.open(qu,ju);r.onupgradeneeded=()=>Ku(r),r.onsuccess=()=>{const i=r.result;if(t==null){const a=i.transaction(Us,"readonly"),c=a.objectStore(Us).get(this.modelPath);c.onsuccess=()=>{if(c.result==null)return i.close(),o(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));s(c.result.modelArtifacts)},c.onerror=u=>(i.close(),o(c.error)),a.oncomplete=()=>i.close()}else{t.weightData=Yn.join(t.weightData);const a=hl(t),l=i.transaction(fs,"readwrite");let c=l.objectStore(fs),u;try{u=c.put({modelPath:this.modelPath,modelArtifactsInfo:a})}catch(d){return o(d)}let h;u.onsuccess=()=>{h=i.transaction(Us,"readwrite");const d=h.objectStore(Us);let p;try{p=d.put({modelPath:this.modelPath,modelArtifacts:t,modelArtifactsInfo:a})}catch(f){return o(f)}p.onsuccess=()=>s({modelArtifactsInfo:a}),p.onerror=f=>{c=l.objectStore(fs);const m=c.delete(this.modelPath);m.onsuccess=()=>(i.close(),o(p.error)),m.onerror=g=>(i.close(),o(p.error))}},u.onerror=d=>(i.close(),o(u.error)),l.oncomplete=()=>{h==null?i.close():h.oncomplete=()=>i.close()}}},r.onerror=i=>o(r.error)})}}Gs.URL_SCHEME="indexeddb://";const Rf=n=>U().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(Gs.URL_SCHEME)?iC(n.slice(Gs.URL_SCHEME.length)):null;ut.registerSaveRouter(Rf),ut.registerLoadRouter(Rf);function iC(n){return new Gs(n)}function aC(n){return n.startsWith(Gs.URL_SCHEME)?n.slice(Gs.URL_SCHEME.length):n}class lC{constructor(){this.indexedDB=Ef()}listModels(){return X(this,null,function*(){return new Promise((e,t)=>{const s=this.indexedDB.open(qu,ju);s.onupgradeneeded=()=>Ku(s),s.onsuccess=()=>{const o=s.result,r=o.transaction(fs,"readonly"),a=r.objectStore(fs).getAll();a.onsuccess=()=>{const l={};for(const c of a.result)l[c.modelPath]=c.modelArtifactsInfo;e(l)},a.onerror=l=>(o.close(),t(a.error)),r.oncomplete=()=>o.close()},s.onerror=o=>t(s.error)})})}removeModel(e){return X(this,null,function*(){return e=aC(e),new Promise((t,s)=>{const o=this.indexedDB.open(qu,ju);o.onupgradeneeded=()=>Ku(o),o.onsuccess=()=>{const r=o.result,i=r.transaction(fs,"readwrite"),a=i.objectStore(fs),l=a.get(e);let c;l.onsuccess=()=>{if(l.result==null)return r.close(),s(new Error(`Cannot find model with path '${e}' in IndexedDB.`));{const u=a.delete(e),h=()=>{c=r.transaction(Us,"readwrite");const p=c.objectStore(Us).delete(e);p.onsuccess=()=>t(l.result.modelArtifactsInfo),p.onerror=f=>s(l.error)};u.onsuccess=h,u.onerror=d=>(h(),r.close(),s(l.error))}},l.onerror=u=>(r.close(),s(l.error)),i.oncomplete=()=>{c==null?r.close():c.oncomplete=()=>r.close()}},o.onerror=r=>s(o.error)})})}}const Zn="/",Fo="tensorflowjs_models",Af="info",cC="model_topology",uC="weight_specs",hC="weight_data",dC="model_metadata";function Df(n){return{info:[Fo,n,Af].join(Zn),topology:[Fo,n,cC].join(Zn),weightSpecs:[Fo,n,uC].join(Zn),weightData:[Fo,n,hC].join(Zn),modelMetadata:[Fo,n,dC].join(Zn)}}function Ff(n){for(const e of Object.values(n))window.localStorage.removeItem(e)}function pC(n){const e=n.split(Zn);if(e.length<3)throw new Error(`Invalid key format: ${n}`);return e.slice(1,e.length-1).join(Zn)}function fC(n){return n.startsWith(Hs.URL_SCHEME)?n.slice(Hs.URL_SCHEME.length):n}class Hs{constructor(e){if(!U().getBool("IS_BROWSER")||typeof window=="undefined"||typeof window.localStorage=="undefined")throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,e==null||!e)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=e,this.keys=Df(this.modelPath)}save(e){return X(this,null,function*(){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{const t=JSON.stringify(e.modelTopology),s=JSON.stringify(e.weightSpecs),o=hl(e),r=Yn.join(e.weightData);try{this.LS.setItem(this.keys.info,JSON.stringify(o)),this.LS.setItem(this.keys.topology,t),this.LS.setItem(this.keys.weightSpecs,s),this.LS.setItem(this.keys.weightData,Xw(r));const i={format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,signature:e.signature!=null?e.signature:void 0,userDefinedMetadata:e.userDefinedMetadata!=null?e.userDefinedMetadata:void 0,modelInitializer:e.modelInitializer!=null?e.modelInitializer:void 0,initializerSignature:e.initializerSignature!=null?e.initializerSignature:void 0,trainingConfig:e.trainingConfig!=null?e.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(i)),{modelArtifactsInfo:o}}catch(i){throw Ff(this.keys),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${o.modelTopologyBytes}, weightSpecsBytes=${o.weightSpecsBytes}, weightDataBytes=${o.weightDataBytes}.`)}}})}load(){return X(this,null,function*(){const e=JSON.parse(this.LS.getItem(this.keys.info));if(e==null)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if(e.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");const t={},s=JSON.parse(this.LS.getItem(this.keys.topology));if(s==null)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);t.modelTopology=s;const o=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(o==null)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);t.weightSpecs=o;const r=this.LS.getItem(this.keys.modelMetadata);if(r!=null){const a=JSON.parse(r);t.format=a.format,t.generatedBy=a.generatedBy,t.convertedBy=a.convertedBy,a.signature!=null&&(t.signature=a.signature),a.userDefinedMetadata!=null&&(t.userDefinedMetadata=a.userDefinedMetadata),a.modelInitializer!=null&&(t.modelInitializer=a.modelInitializer),a.initializerSignature!=null&&(t.initializerSignature=a.initializerSignature),a.trainingConfig!=null&&(t.trainingConfig=a.trainingConfig)}const i=this.LS.getItem(this.keys.weightData);if(i==null)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return t.weightData=Yw(i),t})}}Hs.URL_SCHEME="localstorage://";const _f=n=>U().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(Hs.URL_SCHEME)?mC(n.slice(Hs.URL_SCHEME.length)):null;ut.registerSaveRouter(_f),ut.registerLoadRouter(_f);function mC(n){return new Hs(n)}class gC{constructor(){S(U().getBool("IS_BROWSER"),()=>"Current environment is not a web browser"),S(typeof window=="undefined"||typeof window.localStorage!="undefined",()=>"Current browser does not appear to support localStorage"),this.LS=window.localStorage}listModels(){return X(this,null,function*(){const e={},t=Fo+Zn,s=Zn+Af;for(let o=0;o<this.LS.length;++o){const r=this.LS.key(o);if(r.startsWith(t)&&r.endsWith(s)){const i=pC(r);e[i]=JSON.parse(this.LS.getItem(r))}}return e})}removeModel(e){return X(this,null,function*(){e=fC(e);const t=Df(e);if(this.LS.getItem(t.info)==null)throw new Error(`Cannot find model at path '${e}'`);const s=JSON.parse(this.LS.getItem(t.info));return Ff(t),s})}}const Of="://";class Fn{constructor(){this.managers={}}static getInstance(){return Fn.instance==null&&(Fn.instance=new Fn),Fn.instance}static registerManager(e,t){S(e!=null,()=>"scheme must not be undefined or null."),e.endsWith(Of)&&(e=e.slice(0,e.indexOf(Of))),S(e.length>0,()=>"scheme must not be an empty string.");const s=Fn.getInstance();S(s.managers[e]==null,()=>`A model store manager is already registered for scheme '${e}'.`),s.managers[e]=t}static getManager(e){const t=Fn.getInstance().managers[e];if(t==null)throw new Error(`Cannot find model manager for scheme '${e}'`);return t}static getSchemes(){return Object.keys(Fn.getInstance().managers)}}class xC{constructor(){this.messageName="setTimeoutCustom",this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}fetch(e,t){return fetch(e,t)}now(){return performance.now()}encode(e,t){if(t!=="utf-8"&&t!=="utf8")throw new Error(`Browser's encoder only supports utf-8, but got ${t}`);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(e)}decode(e,t){return new TextDecoder(t).decode(e)}setTimeoutCustom(e,t){if(typeof window=="undefined"||!U().getBool("USE_SETTIMEOUTCUSTOM")){setTimeout(e,t);return}this.functionRefs.push(e),setTimeout(()=>{window.postMessage({name:this.messageName,index:this.functionRefs.length-1},"*")},t),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener("message",s=>{if(s.source===window&&s.data.name===this.messageName){s.stopPropagation();const o=this.functionRefs[s.data.index];o(),this.handledMessageCount++,this.handledMessageCount===this.functionRefs.length&&(this.functionRefs=[],this.handledMessageCount=0)}},!0))}isTypedArray(e){return tf(e)}}if(U().get("IS_BROWSER")){U().setPlatform("browser",new xC);try{Fn.registerManager(Hs.URL_SCHEME,new gC)}catch(n){}try{Fn.registerManager(Gs.URL_SCHEME,new lC)}catch(n){}}const bC={importFetch:()=>require("node-fetch")};let Xu;class yC{constructor(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder}fetch(e,t){return U().global.fetch!=null?U().global.fetch(e,t):(Xu==null&&(Xu=bC.importFetch()),Xu(e,t))}now(){const e=process.hrtime();return e[0]*1e3+e[1]/1e6}encode(e,t){if(t!=="utf-8"&&t!=="utf8")throw new Error(`Node built-in encoder only supports utf-8, but got ${t}`);return this.textEncoder.encode(e)}decode(e,t){return e.length===0?"":new this.util.TextDecoder(t).decode(e)}isTypedArray(e){return this.util.types.isFloat32Array(e)||this.util.types.isInt32Array(e)||this.util.types.isUint8Array(e)||this.util.types.isUint8ClampedArray(e)}}U().get("IS_NODE")&&!U().get("IS_BROWSER")&&U().setPlatform("node",new yC);function ke(n,e="float32",t){return e=e||"float32",Xn(n),new It(n,e,t)}function wC(n,e){const t=A(n,"x","cast");if(!ew(e))throw new Error(`Failed to cast to unknown dtype ${e}`);if(e==="string"&&t.dtype!=="string"||e!=="string"&&t.dtype==="string")throw new Error("Only strings can be casted to strings");const s={x:t},o={dtype:e};return M.runKernel(gr,s,o)}const re=W({cast_:wC});function CC(n){const t={x:A(n,"x","clone","string_or_numeric")};return M.runKernel(Er,t)}const qs=W({clone_:CC});function IC(n,e=!1){console.log(n.toString(e))}xf(),Fw({buffer:ke,cast:re,clone:qs,print:IC});function $C(n,e){let t=A(n,"a","add"),s=A(e,"b","add");[t,s]=tt(t,s);const o={a:t,b:s};return M.runKernel(To,o)}const te=W({add_:$C});function vC(n,e){let t=A(n,"a","floorDiv"),s=A(e,"b","floorDiv");[t,s]=tt(t,s);const o={a:t,b:s};return M.runKernel(Nr,o)}const Lf=W({floorDiv_:vC});function kC(n,e){let t=A(n,"a","div"),s=A(e,"b","div");if([t,s]=tt(t,s),t.dtype==="int32"&&s.dtype==="int32")return Lf(t,s);const o={a:t,b:s},r={};return M.runKernel(Cr,o,r)}const ge=W({div_:kC});function SC(n,e){let t=A(n,"a","mul"),s=A(e,"b","mul");[t,s]=tt(t,s);const o={a:t,b:s};return M.runKernel(Pr,o)}const L=W({mul_:SC});function NC(n){const e=A(n,"x","abs");if(e.dtype==="complex64"){const t={x:e};return M.runKernel(la,t)}else{const t={x:e};return M.runKernel(ta,t)}}const Lt=W({abs_:NC});function TC(n){const t={x:A(n,"x","acos")};return M.runKernel(cr,t)}const EC=W({acos_:TC});function RC(n){const t={x:A(n,"x","acosh")};return M.runKernel(ur,t)}const AC=W({acosh_:RC});function DC(n,e=null,t=!1){const o={x:A(n,"x","all","bool")},r={axis:e,keepDims:t};return M.runKernel(qc,o,r)}const Mf=W({all_:DC});function FC(n,e=null,t=!1){const o={x:A(n,"x","any","bool")},r={axis:e,keepDims:t};return M.runKernel(jc,o,r)}const Yu=W({any_:FC});function _C(n,e=0){const s={x:A(n,"x","argMax")},o={axis:e};return M.runKernel(na,s,o)}const js=W({argMax_:_C});function OC(n,e=0){const s={x:A(n,"x","argMin")},o={axis:e};return M.runKernel(sa,s,o)}const LC=W({argMin_:OC});function MC(n){const t={x:A(n,"x","asin")};return M.runKernel(hr,t)}const PC=W({asin_:MC});function BC(n){const t={x:A(n,"x","asinh")};return M.runKernel(dr,t)}const zC=W({asinh_:BC});function VC(n){const t={x:A(n,"x","atan")};return M.runKernel(pr,t)}const WC=W({atan_:VC});function UC(n,e){let t=A(n,"a","atan2"),s=A(e,"b","atan2");[t,s]=tt(t,s);const o={a:t,b:s};return M.runKernel(mr,o)}const GC=W({atan2_:UC});function HC(n){const t={x:A(n,"x","atanh")};return M.runKernel(fr,t)}const qC=W({atanh_:HC});function li(n,e,t,s,o="NHWC",r){const i=n[3],a=[...e,i],l=Jn(o);return $t(n,a,t,r,s,null,null,l)}function an(n,e,t,s,o,r,i="channelsLast"){const[a,l]=ci(e);let c;if(i==="channelsLast")c=[a,l,n[3],n[3]];else if(i==="channelsFirst")c=[a,l,n[1],n[1]];else throw new Error(`Unknown dataFormat ${i}`);return $t(n,c,t,s,o,r,!1,i)}function Qn(n,e,t,s,o,r,i="NDHWC"){const[a,l,c]=Qu(e);let u,h;if(i==="NDHWC")h="channelsLast",u=[a,l,c,n[4],n[4]];else if(i==="NCDHW")h="channelsFirst",u=[a,l,c,n[1],n[1]];else throw new Error(`Unknown dataFormat ${i}`);return ms(n,u,t,s,o,!1,h,r)}function $t(n,e,t,s,o,r,i=!1,a="channelsLast"){let[l,c,u,h]=[-1,-1,-1,-1];if(a==="channelsLast")[l,c,u,h]=n;else if(a==="channelsFirst")[l,h,c,u]=n;else throw new Error(`Unknown dataFormat ${a}`);const[d,p,,f]=e,[m,g]=ci(t),[x,b]=ci(s),w=_o(d,x),y=_o(p,b),{padInfo:C,outHeight:$,outWidth:v}=XC(o,c,u,m,g,w,y,r,a),k=i?f*h:f;let N;return a==="channelsFirst"?N=[l,k,$,v]:a==="channelsLast"&&(N=[l,$,v,k]),{batchSize:l,dataFormat:a,inHeight:c,inWidth:u,inChannels:h,outHeight:$,outWidth:v,outChannels:k,padInfo:C,strideHeight:m,strideWidth:g,filterHeight:d,filterWidth:p,effectiveFilterHeight:w,effectiveFilterWidth:y,dilationHeight:x,dilationWidth:b,inShape:n,outShape:N,filterShape:e}}function ms(n,e,t,s,o,r=!1,i="channelsLast",a){let[l,c,u,h,d]=[-1,-1,-1,-1,-1];if(i==="channelsLast")[l,c,u,h,d]=n;else if(i==="channelsFirst")[l,d,c,u,h]=n;else throw new Error(`Unknown dataFormat ${i}`);const[p,f,m,,g]=e,[x,b,w]=Qu(t),[y,C,$]=Qu(s),v=_o(p,y),k=_o(f,C),N=_o(m,$),{padInfo:T,outDepth:I,outHeight:E,outWidth:R}=YC(o,c,u,h,x,b,w,v,k,N,a),D=r?g*d:g;let F;return i==="channelsFirst"?F=[l,D,I,E,R]:i==="channelsLast"&&(F=[l,I,E,R,D]),{batchSize:l,dataFormat:i,inDepth:c,inHeight:u,inWidth:h,inChannels:d,outDepth:I,outHeight:E,outWidth:R,outChannels:D,padInfo:T,strideDepth:x,strideHeight:b,strideWidth:w,filterDepth:p,filterHeight:f,filterWidth:m,effectiveFilterDepth:v,effectiveFilterHeight:k,effectiveFilterWidth:N,dilationDepth:y,dilationHeight:C,dilationWidth:$,inShape:n,outShape:F,filterShape:e}}function jC(n,e,t,s,o){s==null&&(s=Zu(n,e,t));const r=n[0],i=n[1],a=ui((r-e+2*s)/t+1,o),l=ui((i-e+2*s)/t+1,o);return[a,l]}function KC(n,e,t,s,o,r){o==null&&(o=Zu(n,e[0],s[0]));const i=[0,0,0,t];for(let a=0;a<3;a++)n[a]+2*o>=e[a]&&(i[a]=ui((n[a]-e[a]+2*o)/s[a]+1,r));return i}function Zu(n,e,t,s=1){const o=_o(e,s);return Math.floor((n[0]*(t-1)-t+o)/2)}function ci(n){return typeof n=="number"?[n,n,n]:n.length===2?[n[0],n[1],1]:n}function Qu(n){return typeof n=="number"?[n,n,n]:n}function _o(n,e){return e<=1?n:n+(n-1)*(e-1)}function XC(n,e,t,s,o,r,i,a,l){let c,u,h;if(typeof n=="number"){c={top:n,bottom:n,left:n,right:n,type:n===0?"VALID":"NUMBER"};const p=jC([e,t],r,s,n,a);u=p[0],h=p[1]}else if(n==="same"){u=Math.ceil(e/s),h=Math.ceil(t/o);const d=Math.max(0,(u-1)*s+r-e),p=Math.max(0,(h-1)*o+i-t),f=Math.floor(d/2),m=d-f,g=Math.floor(p/2),x=p-g;c={top:f,bottom:m,left:g,right:x,type:"SAME"}}else if(n==="valid")c={top:0,bottom:0,left:0,right:0,type:"VALID"},u=Math.ceil((e-r+1)/s),h=Math.ceil((t-i+1)/o);else if(typeof n=="object"){const d=l==="channelsLast"?n[1][0]:n[2][0],p=l==="channelsLast"?n[1][1]:n[2][1],f=l==="channelsLast"?n[2][0]:n[3][0],m=l==="channelsLast"?n[2][1]:n[3][1];c={top:d,bottom:p,left:f,right:m,type:d===0&&p===0&&f===0&&m===0?"VALID":"EXPLICIT"},u=ui((e-r+d+p)/s+1,a),h=ui((t-i+f+m)/o+1,a)}else throw Error(`Unknown padding parameter: ${n}`);return{padInfo:c,outHeight:u,outWidth:h}}function YC(n,e,t,s,o,r,i,a,l,c,u){let h,d,p,f;if(n==="valid"&&(n=0),typeof n=="number"){h={top:n,bottom:n,left:n,right:n,front:n,back:n,type:n===0?"VALID":"NUMBER"};const g=KC([e,t,s,1],[a,l,c],1,[o,r,i],n,u);d=g[0],p=g[1],f=g[2]}else if(n==="same"){d=Math.ceil(e/o),p=Math.ceil(t/r),f=Math.ceil(s/i);const m=(d-1)*o+a-e,g=(p-1)*r+l-t,x=(f-1)*i+c-s,b=Math.floor(m/2),w=m-b,y=Math.floor(g/2),C=g-y,$=Math.floor(x/2),v=x-$;h={top:y,bottom:C,left:$,right:v,front:b,back:w,type:"SAME"}}else throw Error(`Unknown padding parameter: ${n}`);return{padInfo:h,outDepth:d,outHeight:p,outWidth:f}}function ui(n,e){if(!e)return Math.trunc(n);switch(e){case"round":return Math.round(n);case"ceil":return Math.ceil(n);case"floor":return Math.floor(n);default:throw new Error(`Unknown roundingMode ${e}`)}}function Ks(n){const[e,t,s]=ci(n);return e===1&&t===1&&s===1}function Rt(n,e){return Ks(n)||Ks(e)}function Xs(n){return ci(n).every(e=>e>0)}function Jn(n){if(n==="NHWC")return"channelsLast";if(n==="NCHW")return"channelsFirst";throw new Error(`Unknown dataFormat ${n}`)}function Wt(n,e,t){if(t!=null){if(typeof e=="string")throw Error(`Error in ${n}: pad must be an integer when using dimRoundingMode ${t} but got pad ${e}.`);if(typeof e=="number")S(vo(e),()=>`Error in ${n}: pad must be an integer when using dimRoundingMode ${t} but got pad ${e}.`);else if(typeof e=="object")e.forEach(s=>{s.forEach(o=>{S(vo(o),()=>`Error in ${n}: pad must be an integer when using dimRoundingMode ${t} but got pad ${o}.`)})});else throw Error(`Error in ${n}: Unknown padding parameter: ${e}`)}}function ZC(n,e){const s={x:A(n,"x","reshape","string_or_numeric")},o={shape:e};return M.runKernel(Wa,s,o)}const V=W({reshape_:ZC});function QC(n,e,t,s,o){const r=A(n,"x","avgPool","float32"),i=1;S(Rt(t,i),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${t} and dilations '${i}'`);let a=r,l=!1;r.rank===3&&(l=!0,a=V(r,[1,r.shape[0],r.shape[1],r.shape[2]])),S(a.rank===4,()=>`Error in avgPool: x must be rank 4 but got rank ${a.rank}.`),Wt("avgPool",s,o);const c={x:a},u={filterSize:e,strides:t,pad:s,dimRoundingMode:o};let h=M.runKernel(oa,c,u);return h=re(h,r.dtype),l?V(h,[h.shape[1],h.shape[2],h.shape[3]]):h}const Ju=W({avgPool_:QC});function JC(n,e,t,s,o,r="NDHWC"){const i=A(n,"x","avgPool3d","float32");let a=i,l=!1;i.rank===4&&(l=!0,a=V(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]])),S(a.rank===5,()=>`Error in avgPool3d: x must be rank 5 but got rank ${a.rank}.`),S(r==="NDHWC",()=>`Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of ${r}`),S(typeof t=="number"&&t>0||Array.isArray(t)&&t[0]>0&&t[1]>0&&t[2]>0,()=>`Error in avgPool3d: Stride must be > 0, but got '${t}'`),Wt("avgPool3d",s,o);const c={x:a},u={filterSize:e,strides:t,pad:s,dimRoundingMode:o,dataFormat:r};let h=M.runKernel(ra,c,u);return h=re(h,a.dtype),l?V(h,[h.shape[1],h.shape[2],h.shape[3],h.shape[4]]):h}const eI=W({avgPool3d_:JC});function tI(n,e=0){S(n.length>=1,()=>"Pass at least one tensor to concat");const t=If(n,"tensors","concat","string_or_numeric");if(t[0].dtype==="complex64"&&t.forEach(r=>{if(r.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype ${r.dtype}. `)}),t.length===1)return qs(t[0]);const s=t,o={axis:e};return M.runKernel(ca,s,o)}const vt=W({concat_:tI});function nI(n,e,t=!1,s=!1){let o=A(n,"a","matMul"),r=A(e,"b","matMul");[o,r]=tt(o,r);const i={a:o,b:r},a={transposeA:t,transposeB:s};return M.runKernel(ia,i,a)}const Fe=W({matMul_:nI});function sI(n){const t={x:A(n,"x","sigmoid","float32")};return M.runKernel(Xr,t)}const Oo=W({sigmoid_:sI});function oI(n,e,t){const s=A(n,"x","slice","string_or_numeric");if(s.rank===0)throw new Error("Slicing scalar is not possible");const o={x:s},r={begin:e,size:t};return M.runKernel(ja,o,r)}const He=W({slice_:oI});function rI(n){const t={x:A(n,"x","tanh","float32")};return M.runKernel(ti,t)}const dl=W({tanh_:rI});function iI(n,e,t){const s=A(n,"x","batchToSpaceND"),o=e.reduce((a,l)=>a*l);S(s.rank>=1+e.length,()=>`input rank is ${s.rank} but should be > than blockShape.length ${e.length}`),S(t.length===e.length,()=>`crops.length is ${t.length} but should be equal to blockShape.length  ${e.length}`),S(s.shape[0]%o===0,()=>`input tensor batch is ${s.shape[0]} but is not divisible by the product of the elements of blockShape ${e.join(" * ")} === ${o}`);const r={x:s},i={blockShape:e,crops:t};return M.runKernel(aa,r,i)}const eh=W({batchToSpaceND_:iI});function aI(n){let e;return n.rank===0||n.rank===1?e=V(n,[1,1,1,n.size]):n.rank===2?e=V(n,[1,1,n.shape[0],n.shape[1]]):n.rank===3?e=V(n,[1,n.shape[0],n.shape[1],n.shape[2]]):e=n,e}function lI(n,e,t,s,o,r){r==null&&(r=.001);const i=A(n,"x","batchNorm"),a=A(e,"mean","batchNorm"),l=A(t,"variance","batchNorm");let c;o!=null&&(c=A(o,"scale","batchNorm"));let u;s!=null&&(u=A(s,"offset","batchNorm")),S(a.rank===l.rank,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),S(u==null||a.rank===u.rank,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),S(c==null||a.rank===c.rank,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");const d={x:aI(i),scale:c,offset:u,mean:a,variance:l},p={varianceEpsilon:r},f=M.runKernel(ba,d,p);return V(f,i.shape)}const pl=W({batchNorm_:lI});function cI(n,e,t,s,o,r){const i=A(n,"x","batchNorm"),a=A(e,"mean","batchNorm"),l=A(t,"variance","batchNorm");let c;o!=null&&(c=A(o,"scale","batchNorm"));let u;return s!=null&&(u=A(s,"offset","batchNorm")),S(i.rank===2,()=>`Error in batchNorm2D: x must be rank 2 but got rank ${i.rank}.`),S(a.rank===2||a.rank===1,()=>`Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ${a.rank}.`),S(l.rank===2||l.rank===1,()=>`Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ${l.rank}.`),c!=null&&S(c.rank===2||c.rank===1,()=>`Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ${c.rank}.`),u!=null&&S(u.rank===2||u.rank===1,()=>`Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ${u.rank}.`),pl(i,a,l,u,c,r)}const uI=W({batchNorm2d_:cI});function hI(n,e,t,s,o,r){const i=A(n,"x","batchNorm"),a=A(e,"mean","batchNorm"),l=A(t,"variance","batchNorm");let c;o!=null&&(c=A(o,"scale","batchNorm"));let u;return s!=null&&(u=A(s,"offset","batchNorm")),S(i.rank===3,()=>`Error in batchNorm3D: x must be rank 3 but got rank ${i.rank}.`),S(a.rank===3||a.rank===1,()=>`Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ${a.rank}.`),S(l.rank===3||l.rank===1,()=>`Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ${l.rank}.`),c!=null&&S(c.rank===3||c.rank===1,()=>`Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ${c.rank}.`),u!=null&&S(u.rank===3||u.rank===1,()=>`Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ${u.rank}.`),pl(i,a,l,u,c,r)}const dI=W({batchNorm3d_:hI});function pI(n,e,t,s,o,r){const i=A(n,"x","batchNorm"),a=A(e,"mean","batchNorm"),l=A(t,"variance","batchNorm");let c;o!=null&&(c=A(o,"scale","batchNorm"));let u;return s!=null&&(u=A(s,"offset","batchNorm")),S(i.rank===4,()=>`Error in batchNorm4D: x must be rank 4 but got rank ${i.rank}.`),S(a.rank===4||a.rank===1,()=>`Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ${a.rank}.`),S(l.rank===4||l.rank===1,()=>`Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ${l.rank}.`),c!=null&&S(c.rank===4||c.rank===1,()=>`Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ${c.rank}.`),u!=null&&S(u.rank===4||u.rank===1,()=>`Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ${u.rank}.`),pl(i,a,l,u,c,r)}const fI=W({batchNorm4d_:pI});function mI(n,e,t){const s=A(n,"x","bincount"),o=A(e,"weights","bincount");S(s.dtype==="int32",()=>`Error in bincount: input dtype must be int32, but got ${s.dtype}`),S(t>=0,()=>`size must be non-negative, but got ${t}.`),S(o.size===s.size||o.size===0,()=>`Error in bincount: weights must have the same size as input or0-length, but got input shape: ${s.shape}, weights shape: ${o.shape}.`);const r={x:s,weights:o},i={size:t};return M.runKernel(Yc,r,i)}const gI=W({bincount_:mI});function xI(n,e){let t=A(n,"broadcastTo","x");const s=t.shape;if(Xn(e),e.length<t.rank)throw new Error(`broadcastTo(): shape.length=${e.length} < input.rank=${t.rank}.`);if(e.length>t.rank){const c=t.shape.slice();for(;c.length<e.length;)c.unshift(1);t=V(t,c)}const o=t.shape,r=Array.from(e);for(let c=e.length-1;c>=0;c--)if(o[c]===e[c])r[c]=1;else if(t.shape[c]!==1)throw new Error(`broadcastTo(): [${s}] cannot be broadcast to [${e}].`);if(r.map((c,u)=>c>1?u:-1).filter(c=>c>=0).length===0)return qs(t);const a={x:t},l={reps:r};return M.runKernel(ni,a,l)}const hi=W({broadcastTo_:xI});function bI(n){const t={x:A(n,"x","ceil","float32")};return M.runKernel(xr,t)}const yI=W({ceil_:bI});function Lo(n,e,t){Xn(n),t=t||So(e);const s={shape:n,value:e,dtype:t};return M.runKernel(pu,{},s)}function wI(n,e,t){const s=A(n,"x","clipByValue");if(S(e<=t,()=>`Error in clip: min (${e}) must be less than or equal to max (${t}).`),e===t)return Lo(s.shape,e,s.dtype);const o={x:s},r={clipValueMin:e,clipValueMax:t};return M.runKernel(br,o,r)}const en=W({clipByValue_:wI});function CI(n){return vt(n,0)}const II=W({concat1d_:CI});function $I(n,e){return vt(n,e)}const vI=W({concat2d_:$I});function kI(n,e){return vt(n,e)}const SI=W({concat3d_:kI});function NI(n,e){return vt(n,e)}const TI=W({concat4d_:NI});function EI(n,e,t,s,o="NHWC",r=[1,1],i){const a=A(n,"x","conv2d","float32"),l=A(e,"filter","conv2d","float32");let c=a,u=!1;a.rank===3&&(u=!0,c=V(a,[1,a.shape[0],a.shape[1],a.shape[2]])),S(c.rank===4,()=>`Error in conv2d: input must be rank 4, but got rank ${c.rank}.`),S(l.rank===4,()=>`Error in conv2d: filter must be rank 4, but got rank ${l.rank}.`),Wt("conv2d",s,i);const h=o==="NHWC"?c.shape[3]:c.shape[1];S(h===l.shape[2],()=>`Error in conv2d: depth of input (${h}) must match input depth for filter ${l.shape[2]}.`),S(Rt(t,r),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${t} and dilations '${r}'`),S(Xs(r),()=>"Error in conv2D: Dilated rates should be larger than 0."),S(Xs(t),()=>"Error in conv2D: Strides should be larger than 0.");const d={x:c,filter:l},p={strides:t,pad:s,dataFormat:o,dilations:r,dimRoundingMode:i},f=M.runKernel(ua,d,p);return u?V(f,[f.shape[1],f.shape[2],f.shape[3]]):f}const Ys=W({conv2d_:EI});function RI(n,e,t,s,o="NWC",r=1,i){const a=A(n,"x","conv1d"),l=A(e,"filter","conv1d");let c=a,u=!1;a.rank===2&&(u=!0,c=V(a,[1,a.shape[0],a.shape[1]])),S(c.rank===3,()=>`Error in conv1d: input must be rank 3, but got rank ${c.rank}.`),S(l.rank===3,()=>`Error in conv1d: filter must be rank 3, but got rank ${l.rank}.`),Wt("conv1d",s,i),S(c.shape[2]===l.shape[1],()=>`Error in conv1d: depth of input (${c.shape[2]}) must match input depth for filter ${l.shape[1]}.`),S(Rt(t,r),()=>`Error in conv1D: Either stride or dilation must be 1. Got stride ${t} and dilation '${r}'`),S(Xs(r),()=>"Error in conv1D: Dilated rates should be larger than 0."),S(Xs(t),()=>"Error in conv1D: Stride should be larger than 0."),S(o==="NWC",()=>`Error in conv1d: got dataFormat of ${o} but only NWC is currently supported.`);const h=V(l,[1,l.shape[0],l.shape[1],l.shape[2]]),d=V(c,[c.shape[0],1,c.shape[1],c.shape[2]]),g=Ys(d,h,[1,t],s,"NHWC",[1,r],i);return u?V(g,[g.shape[2],g.shape[3]]):V(g,[g.shape[0],g.shape[2],g.shape[3]])}const Pf=W({conv1d_:RI});function AI(n,e,t,s,o,r="NHWC",i){S(n.length===e.rank,()=>`Length of inShape (${n.length}) and rank of dy (${e.rank}) must match`);let a=n,l=e,c=!1;e.rank===3&&(c=!0,l=V(e,[1,e.shape[0],e.shape[1],e.shape[2]]),a=[1,n[0],n[1],n[2]]),S(a.length===4,()=>`Error in conv2dDerInput: inShape must be length 4, but got length ${a.length}.`),S(l.rank===4,()=>`Error in conv2dDerInput: dy must be rank 4, but got rank ${l.rank}`),S(t.rank===4,()=>`Error in conv2dDerInput: filter must be rank 4, but got rank ${t.rank}`);const u=r==="NHWC"?a[3]:a[1],h=r==="NHWC"?l.shape[3]:l.shape[1];S(u===t.shape[2],()=>`Error in conv2dDerInput: depth of input (${u}) must match input depth for filter ${t.shape[2]}.`),S(h===t.shape[3],()=>`Error in conv2dDerInput: depth of output (${h}) must match output depth for filter ${t.shape[3]}.`),Wt("conv2dDerInput",o,i);const d={dy:l,filter:t},p={strides:s,pad:o,dataFormat:r,dimRoundingMode:i,inputShape:a},f=M.runKernel(ha,d,p);return c?V(f,[f.shape[1],f.shape[2],f.shape[3]]):f}const th=W({conv2DBackpropInput_:AI});function DI(n,e,t,s,o,r){const i=A(n,"x","conv2dTranspose"),a=A(e,"filter","conv2dTranspose");return th(t,i,a,s,o,"NHWC",r)}const Bf=W({conv2dTranspose_:DI});function FI(n,e,t,s,o="NDHWC",r=[1,1,1]){const i=A(n,"x","conv3d"),a=A(e,"filter","conv3d");let l=i,c=!1;i.rank===4&&(c=!0,l=V(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]])),S(l.rank===5,()=>`Error in conv3d: input must be rank 5, but got rank ${l.rank}.`),S(a.rank===5,()=>`Error in conv3d: filter must be rank 5, but got rank ${a.rank}.`),S(l.shape[4]===a.shape[3],()=>`Error in conv3d: depth of input (${l.shape[4]}) must match input depth for filter ${a.shape[3]}.`),S(Rt(t,r),()=>`Error in conv3D: Either strides or dilations must be 1. Got strides ${t} and dilations '${r}'`),S(o==="NDHWC",()=>`Error in conv3d: got dataFormat of ${o} but only NDHWC is currently supported.`),S(Xs(r),()=>"Error in conv3D: Dilated rates should be larger than 0."),S(Xs(t),()=>"Error in conv3D: Strides should be larger than 0.");const u={x:l,filter:a},h={strides:t,pad:s,dataFormat:o,dilations:r},d=M.runKernel(da,u,h);return c?V(d,[d.shape[1],d.shape[2],d.shape[3],d.shape[4]]):d}const di=W({conv3d_:FI});function _I(n,e,t,s,o){S(n.length===e.rank,()=>`Length of inShape (${n.length}) and rank of dy (${e.rank}) must match`);let r=n,i=e,a=!1;e.rank===4&&(a=!0,i=V(e,[1,e.shape[0],e.shape[1],e.shape[2],e.shape[3]]),r=[1,n[0],n[1],n[2],n[3]]);const l=r[4],c=i.shape[4];S(r.length===5,()=>`Error in conv3dDerInput: inShape must be length 5, but got length ${r.length}.`),S(i.rank===5,()=>`Error in conv3dDerInput: dy must be rank 5, but got rank ${i.rank}`),S(t.rank===5,()=>`Error in conv3dDerInput: filter must be rank 5, but got rank ${t.rank}`),S(l===t.shape[3],()=>`Error in conv3dDerInput: depth of input (${l}) must match input depth for filter ${t.shape[3]}.`),S(c===t.shape[4],()=>`Error in conv3dDerInput: depth of output (${c}) must match output depth for filter ${t.shape[4]}.`);const u={dy:i,filter:t},h={pad:o,strides:s,inputShape:r},d=M.runKernel(tu,u,h);return a?V(d,[d.shape[1],d.shape[2],d.shape[3],d.shape[4]]):d}const zf=W({conv3DBackpropInput_:_I});function OI(n,e,t,s,o){const r=A(n,"x","conv3dTranspose"),i=A(e,"filter","conv3dTranspose");return zf(t,r,i,s,o)}const Vf=W({conv3dTranspose_:OI});function LI(n){const t={x:A(n,"x","cos","float32")};return M.runKernel(yr,t)}const nh=W({cos_:LI});function MI(n){const t={x:A(n,"x","cosh","float32")};return M.runKernel(wr,t)}const Wf=W({cosh_:MI});function PI(n,e=0,t=!1,s=!1){const r={x:A(n,"x","cumprod")},i={axis:e,exclusive:t,reverse:s};return M.runKernel(nu,r,i)}const sh=W({cumprod_:PI});function BI(n,e=0,t=!1,s=!1){const r={x:A(n,"x","cumsum")},i={axis:e,exclusive:t,reverse:s};return M.runKernel(pa,r,i)}const Uf=W({cumsum_:BI});function zI(n,e,t,s=!1){const o=A(n,"x","denseBincount"),r=A(e,"weights","denseBincount");S(o.dtype==="int32",()=>`Error in denseBincount: input dtype must be int32, but got ${o.dtype}`),S(o.rank<=2,()=>`Error in denseBincount: input must be at most rank 2, but got rank ${o.rank}.`),S(t>=0,()=>`size must be non-negative, but got ${t}.`),S(r.size===o.size||r.size===0,()=>`Error in denseBincount: weights must have the same shape as x or 0-length, but got x shape: ${o.shape}, weights shape: ${r.shape}.`);const i={x:o,weights:r},a={size:t,binaryOutput:s};return M.runKernel(ou,i,a)}const Gf=W({denseBincount_:zI});function VI(n,e,t="NHWC"){const s=A(n,"x","depthToSpace","float32"),o=t==="NHWC"?s.shape[1]:s.shape[2],r=t==="NHWC"?s.shape[2]:s.shape[3],i=t==="NHWC"?s.shape[3]:s.shape[1];S(e>1,()=>`blockSize should be > 1 for depthToSpace, but was: ${e}`),S(o*e>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${o} and ${e}  for depthToSpace with input shape
    ${s.shape}`),S(r*e>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${r} and ${e} for depthToSpace with input shape
        ${s.shape}`),S(i%(e*e)===0,()=>`Dimension size must be evenly divisible by ${e*e} but is ${i} for depthToSpace with input shape ${s.shape}`);const a={x:s},l={blockSize:e,dataFormat:t};return M.runKernel(ru,a,l)}const WI=W({depthToSpace_:VI});function UI(n,e,t,s,o="NHWC",r=[1,1],i){const a=A(n,"x","depthwiseConv2d","float32"),l=A(e,"filter","depthwiseConv2d","float32");let c=a,u=!1;a.rank===3&&(u=!0,c=V(a,[1,a.shape[0],a.shape[1],a.shape[2]])),S(c.rank===4,()=>`Error in depthwiseConv2d: input must be rank 4, but got rank ${c.rank}.`),S(l.rank===4,()=>`Error in depthwiseConv2d: filter must be rank 4, but got rank ${l.rank}.`);const h=o==="NHWC"?c.shape[3]:c.shape[1];S(h===l.shape[2],()=>`Error in depthwiseConv2d: number of input channels (${h}) must match the inChannels dimension in filter ${l.shape[2]}.`),Wt("depthwiseConv2d",s,i);const d={x:c,filter:l},p={strides:t,pad:s,dataFormat:o,dilations:r,dimRoundingMode:i},f=M.runKernel(fa,d,p);return u?V(f,[f.shape[1],f.shape[2],f.shape[3]]):f}const oh=W({depthwiseConv2d_:UI});function GI(n,e,t,s,o=[1,1],r="NHWC"){const i=A(n,"x","dilation2d"),a=A(e,"filter","dilation2d");S(i.rank===3||i.rank===4,()=>`Error in dilation2d: input must be rank 3 or 4, but got rank ${i.rank}.`),S(a.rank===3,()=>`Error in dilation2d: filter must be rank 3, but got rank ${a.rank}.`),S(r==="NHWC",()=>`Error in dilation2d: Only NHWC is currently supported, but got dataFormat of ${r}`);let l=i,c=!1;i.rank===3&&(l=V(i,[1,i.shape[0],i.shape[1],i.shape[2]]),c=!0),S(l.shape[3]===a.shape[2],()=>`Error in dilation2d:  input and filter must have the same depth: ${l.shape[3]} vs ${a.shape[2]}`);const u={x:l,filter:a},h={strides:t,pad:s,dilations:o},d=M.runKernel(ma,u,h);return c?V(d,[d.shape[1],d.shape[2],d.shape[3]]):d}const HI=W({dilation2d_:GI});function Mo(n,e){const t=n.length,s=[];for(let o=0;o<t;o++){const r=t-1-o,i=n[r]||1;(e[e.length-1-o]||1)>1&&i===1&&s.unshift(r)}return s}function ht(n,e){const t=[];for(let s=0;s<e.length;s++){const o=n[n.length-s-1],r=e.length-s-1,i=e[r];(o==null||o===1&&i>1)&&t.unshift(r)}return t}function we(n,e){const t=Math.max(n.length,e.length),s=new Array(t);for(let o=0;o<t;o++){let r=n[n.length-o-1];r==null&&(r=1);let i=e[e.length-o-1];if(i==null&&(i=1),r===1)s[t-o-1]=i;else if(i===1)s[t-o-1]=r;else if(r!==i){const a=`Operands could not be broadcast together with shapes ${n} and ${e}.`;throw Error(a)}else s[t-o-1]=r}return s}function qI(n,e){let t=A(n,"a","equal","string_or_numeric"),s=A(e,"b","equal","string_or_numeric");[t,s]=tt(t,s),we(t.shape,s.shape);const o={a:t,b:s};return M.runKernel(ga,o)}const _n=W({equal_:qI});function jI(n,e,t){const s=A(e,"a","where"),o=A(t,"b","where"),r=A(n,"condition","where","bool"),i=we(we(r.shape,s.shape),o.shape),a=hi(r,i),l=hi(s,i),c=hi(o,i),u={condition:a,t:l,e:c};return M.runKernel(qa,u)}const dt=W({where_:jI});function KI(n){const t={x:A(n,"x","zerosLike")};return M.runKernel(el,t)}const Ee=W({zerosLike_:KI});function XI(n,e){let t=A(n,"a","div"),s=A(e,"b","div");[t,s]=tt(t,s);const o=ge(t,s),r=Ee(o),i=_n(s,r);return dt(i,r,o)}const YI=W({divNoNan_:XI});function ZI(n,e){const t=A(n,"t1","dot"),s=A(e,"t2","dot");S((t.rank===1||t.rank===2)&&(s.rank===1||s.rank===2),()=>`Error in dot: inputs must all be rank 1 or 2, but got ranks ${t.rank} and ${s.rank}.`);const o=t.rank===1?t.size:t.shape[1],r=s.rank===1?s.size:s.shape[0];if(S(o===r,()=>`Error in dot: inner dimensions of inputs must match, but got ${o} and ${r}.`),t.rank===1&&s.rank===1){const i=V(t,[1,-1]),a=V(s,[-1,1]),l=Fe(i,a);return V(l,[])}else if(t.rank===1&&s.rank===2){const i=V(t,[1,-1]),a=V(s,[s.shape[0],s.shape[1]]),l=Fe(i,a);return V(l,[l.size])}else if(t.rank===2&&s.rank===1){const i=V(s,[-1,1]),a=Fe(t,i);return V(a,[a.size])}else{const i=V(s,[s.shape[0],s.shape[1]]);return Fe(t,i)}}const QI=W({dot_:ZI});function JI(n,...e){const t=e.map((o,r)=>A(o,`tensors${r}`,"einsum")),s={equation:n};return M.runKernel(uu,t,s)}const pi=W({einsum_:JI});function e$(n){const t={x:A(n,"x","elu","float32")};return M.runKernel(Ir,t)}const fl=W({elu_:e$});function t$(n){let e=A(n,"x","erf");S(e.dtype==="int32"||e.dtype==="float32",()=>"Input dtype must be `int32` or `float32`."),e.dtype==="int32"&&(e=re(e,"float32"));const t={x:e};return M.runKernel($r,t)}const Hf=W({erf_:t$});function rh(n,e){for(let t=0;t<n.length;++t)if(n[n.length-t-1]!==e-1-t)return!1;return!0}function qf(n,e,t){const s=n.length+e.length,o=[];let r=0,i=0;for(let a=0;a<s;a++)t.indexOf(a)===-1?o.push(n[r++]):o.push(e[i++]);return o}function yt(n,e){const t=[],s=n.length;for(let r=0;r<s;r++)e.indexOf(r)===-1&&t.push(n[r]);const o=e.map(r=>n[r]);return[t,o]}function at(n,e){const t=e.map(s=>1);return qf(n,t,e)}function kt(n,e,t){S(rh(e,t),()=>`${n} supports only inner-most axes for now. Got axes ${e} and rank-${t} input.`)}function Ze(n,e){if(rh(n,e))return null;const t=[];for(let s=0;s<e;++s)n.indexOf(s)===-1&&t.push(s);return n.forEach(s=>t.push(s)),t}function gs(n){return n.map((e,t)=>[t,e]).sort((e,t)=>e[1]-t[1]).map(e=>e[0])}function nt(n,e){const t=[];for(let s=e-n;s<e;++s)t.push(s);return t}function n$(n,e=null,t=!1){const o={x:A(n,"x","max")},r={reductionIndices:e,keepDims:t};return M.runKernel(Ta,o,r)}const wn=W({max_:n$});function s$(n,e=null,t=!1){const o={x:A(n,"x","min")},r={axis:e,keepDims:t};return M.runKernel(Da,o,r)}const ml=W({min_:s$});function o$(n,e){let t=A(n,"base","pow"),s=A(e,"exp","pow");[t,s]=tt(t,s);const o={a:t,b:s};return M.runKernel(Br,o)}const Zs=W({pow_:o$});function Oe(n,e){if((rn(n)&&e!=="string"||Array.isArray(n))&&e!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(e==="string"&&rn(n)&&!(n instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return cl(n,[],[],e)}function r$(n){const t={x:A(n,"x","sqrt","float32")};return M.runKernel(Zr,t)}const At=W({sqrt_:r$});function i$(n){const e=A(n,"x","square"),t={};return M.runKernel("Square",{x:e},t)}const Ke=W({square_:i$});function a$(n,e=null,t=!1){let s=A(n,"x","sum");s.dtype==="bool"&&(s=re(s,"int32"));const o={x:s},r={axis:e,keepDims:t};return M.runKernel(Ka,o,r)}const me=W({sum_:a$});function l$(n,e="euclidean",t=null,s=!1){n=A(n,"x","norm");const o=jf(n,e,t);let r=o.shape;if(s){const i=ve(t,n.shape);r=at(o.shape,i)}return V(o,r)}function jf(n,e,t=null){if(n.rank===0)return Lt(n);if(n.rank!==1&&t===null)return jf(V(n,[-1]),e,t);if(n.rank===1||typeof t=="number"||Array.isArray(t)&&t.length===1){if(e===1)return me(Lt(n),t);if(e===1/0)return wn(Lt(n),t);if(e===-1/0)return ml(Lt(n),t);if(e==="euclidean"||e===2)return At(me(Zs(Lt(n),Oe(2,"int32")),t));throw new Error(`Error in norm: invalid ord value: ${e}`)}if(Array.isArray(t)&&t.length===2){if(e===1)return wn(me(Lt(n),t[0]),t[1]-1);if(e===1/0)return wn(me(Lt(n),t[1]),t[0]);if(e===-1/0)return ml(me(Lt(n),t[1]),t[0]);if(e==="fro"||e==="euclidean")return At(me(Ke(n),t));throw new Error(`Error in norm: invalid ord value: ${e}`)}throw new Error(`Error in norm: invalid axis: ${t}`)}const gl=W({norm_:l$});function c$(n,e=null,t=!1){return gl(n,"euclidean",e,t)}const u$=W({euclideanNorm_:c$});function h$(n){const t={x:A(n,"x","exp")};return M.runKernel(vr,t)}const On=W({exp_:h$});function d$(n,e=0){const t=A(n,"x","expandDims","string_or_numeric");S(e<=t.rank,()=>"Axis must be <= rank of the tensor");const s={input:t},o={dim:e};return M.runKernel(xa,s,o)}const Ut=W({expandDims_:d$});function p$(n){const t={x:A(n,"x","expm1")};return M.runKernel(kr,t)}const f$=W({expm1_:p$});function m$(n,e){const t=A(n,"x","tile","string_or_numeric");S(t.rank===e.length,()=>`Error in transpose: rank of input ${t.rank} must match length of reps ${e}.`);const s={x:t},o={reps:e};return M.runKernel(ni,s,o)}const Cn=W({tile_:m$});function g$(n,e,t,s="float32"){e==null&&(e=n);const o=ke([n,e],s),r=n<=e?n:e;for(let a=0;a<r;++a)o.set(1,a,a);const i=V(o.toTensor(),[n,e]);if(t==null)return i;if(t.length===1)return Cn(Ut(i,0),[t[0],1,1]);if(t.length===2)return Cn(Ut(Ut(i,0),0),[t[0],t[1],1,1]);if(t.length===3)return Cn(Ut(Ut(Ut(i,0),0),0),[t[0],t[1],t[2],1,1]);throw new Error(`eye() currently supports only 1D and 2D batchShapes, but received ${t.length}D.`)}const Kf=W({eye_:g$});function x$(n){const t={x:A(n,"x","floor","float32")};return M.runKernel(Sr,t)}const xl=W({floor_:x$});function b$(n,e,t=0,s=0){const o=A(n,"x","gather"),r=A(e,"indices","gather","int32"),i={x:o,indices:r},a={axis:t,batchDims:s};return M.runKernel(ya,i,a)}const ih=W({gather_:b$});function y$(n,e){let t=A(n,"a","greater","string_or_numeric"),s=A(e,"b","greater","string_or_numeric");[t,s]=tt(t,s),we(t.shape,s.shape);const o={a:t,b:s};return M.runKernel(wa,o)}const Gt=W({greater_:y$});function w$(n,e){let t=A(n,"a","greaterEqual","string_or_numeric"),s=A(e,"b","greaterEqual","string_or_numeric");[t,s]=tt(t,s),we(t.shape,s.shape);const o={a:t,b:s};return M.runKernel(Tr,o)}const Qs=W({greaterEqual_:w$});function C$(n){const t={input:A(n,"input","imag")};return M.runKernel(gu,t)}const ah=W({imag_:C$});function I$(n){const t={x:A(n,"x","isFinite")};return M.runKernel(Rr,t)}const $$=W({isFinite_:I$});function v$(n){const t={x:A(n,"x","isInf")};return M.runKernel(Ar,t)}const k$=W({isInf_:v$});function S$(n){const t={x:A(n,"x","isNaN")};return M.runKernel(Dr,t)}const N$=W({isNaN_:S$});function T$(n,e=.2){const s={x:A(n,"x","leakyRelu")},o={alpha:e};return M.runKernel(Ca,s,o)}const lh=W({leakyRelu_:T$});function E$(n,e){let t=A(n,"a","less","string_or_numeric"),s=A(e,"b","less","string_or_numeric");[t,s]=tt(t,s),we(t.shape,s.shape);const o={a:t,b:s};return M.runKernel(Ia,o)}const bl=W({less_:E$});function R$(n,e){let t=A(n,"a","lessEqual","string_or_numeric"),s=A(e,"b","lessEqual","string_or_numeric");[t,s]=tt(t,s),we(t.shape,s.shape);const o={a:t,b:s};return M.runKernel($a,o)}const Po=W({lessEqual_:R$});function A$(n,e=5,t=1,s=1,o=.5){const r=A(n,"x","localResponseNormalization");S(r.rank===4||r.rank===3,()=>`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank ${r.rank}.`),S(vo(e),()=>`Error in localResponseNormalization: depthRadius must be an integer but got depthRadius ${e}.`);let i=r,a=!1;r.rank===3&&(a=!0,i=V(r,[1,r.shape[0],r.shape[1],r.shape[2]]));const l={x:i},c={depthRadius:e,bias:t,alpha:s,beta:o},u=M.runKernel(Na,l,c);return a?V(u,[u.shape[1],u.shape[2],u.shape[3]]):u}const D$=W({localResponseNormalization_:A$});function F$(n){const t={x:A(n,"x","log","float32")};return M.runKernel(Fr,t)}const Ln=W({log_:F$});function _$(n){const t={x:A(n,"x","log1p")};return M.runKernel(_r,t)}const Xf=W({log1p_:_$});function O$(n,e){S(Bc(n),()=>"The f passed in variableGrads(f) must be a function"),S(e==null||Array.isArray(e)&&e.every(c=>c instanceof al),()=>"The varList passed in variableGrads(f, varList) must be an array of variables");const t=e!=null;if(!t){e=[];for(const c in M.registeredVariables)e.push(M.registeredVariables[c])}const s=t?e.filter(c=>!c.trainable):null,o=e.length;e=e.filter(c=>c.trainable),S(e.length>0,()=>`variableGrads() expects at least one of the input variables to be trainable, but none of the ${o} variables is trainable.`);const r=!0,{value:i,grads:a}=M.gradients(n,e,null,r);S(a.some(c=>c!=null),()=>"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."),S(i.rank===0,()=>`The f passed in variableGrads(f) must return a scalar, but it returned a rank-${i.rank} tensor`);const l={};return e.forEach((c,u)=>{a[u]!=null&&(l[c.name]=a[u])}),s!=null&&s.forEach(c=>l[c.name]=null),{value:i,grads:l}}function Bo(n){return M.customGrad(n)}function L$(n){const t={x:A(n,"x","neg")};return M.runKernel(_a,t)}const st=W({neg_:L$});function M$(n){const t={x:A(n,"x","softplus")};return M.runKernel(Yr,t)}const fi=W({softplus_:M$});function P$(n){const e=A(n,"x","logSigmoid");return Bo(s=>({value:st(fi(st(s))),gradFunc:i=>L(i,Oo(st(s)))}))(e)}const B$=W({logSigmoid_:P$});function z$(n,e){let t=A(n,"a","sub"),s=A(e,"b","sub");[t,s]=tt(t,s);const o={a:t,b:s};return M.runKernel(Jr,o)}const be=W({sub_:z$});function V$(n,e=-1){const t=A(n,"logits","logSoftmax");if(e===-1&&(e=t.rank-1),e!==t.rank-1)throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank ${t.rank} and axis was ${e}`);return Bo((o,r)=>{const a=wn(o,e,!0),l=be(o,a),c=be(re(l,"float32"),Ln(me(On(l),e,!0)));return r([c]),{value:c,gradFunc:(h,d)=>{const[p]=d,f=!0,m=On(p);return be(h,L(me(h,e,f),m))}}})(t)}const Yf=W({logSoftmax_:V$});function W$(n,e=null,t=!1){const s=A(n,"x","logSumExp"),o=ve(e,s.shape),r=wn(s,o,!0),i=be(s,r),a=On(i),l=me(a,o),c=Ln(l),u=te(V(r,c.shape),c);if(t){const h=at(u.shape,o);return V(u,h)}return u}const Zf=W({logSumExp_:W$});function U$(n,e){const t=A(n,"a","logicalAnd","bool"),s=A(e,"b","logicalAnd","bool");we(t.shape,s.shape);const o={a:t,b:s};return M.runKernel(va,o)}const es=W({logicalAnd_:U$});function G$(n){const t={x:A(n,"x","logicalNot","bool")};return M.runKernel(ka,t)}const ch=W({logicalNot_:G$});function H$(n,e){const t=A(n,"a","logicalOr","bool"),s=A(e,"b","logicalOr","bool");we(t.shape,s.shape);const o={a:t,b:s};return M.runKernel(Sa,o)}const Qf=W({logicalOr_:H$});function q$(n,e){const t=A(n,"a","logicalXor","bool"),s=A(e,"b","logicalXor","bool");return we(t.shape,s.shape),es(Qf(n,e),ch(es(n,e)))}const j$=W({logicalXor_:q$});function K$(n,e,t,s,o){const r=A(n,"x","maxPool"),i=1;let a=r,l=!1;r.rank===3&&(l=!0,a=V(r,[1,r.shape[0],r.shape[1],r.shape[2]])),S(a.rank===4,()=>`Error in maxPool: input must be rank 4 but got rank ${a.rank}.`),S(Rt(t,i),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${t} and dilations '${i}'`),Wt("maxPool",s,o);const c={x:a},u={filterSize:e,strides:t,pad:s,dimRoundingMode:o},h=M.runKernel(Ea,c,u);return l?V(h,[h.shape[1],h.shape[2],h.shape[3]]):h}const uh=W({maxPool_:K$});function X$(n,e=[1,1,1],t,s,o,r="NDHWC"){const i=A(n,"x","maxPool3d");let a=i,l=!1;i.rank===4&&(l=!0,a=V(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]])),S(a.rank===5,()=>`Error in maxPool3d: x must be rank 5 but got rank ${a.rank}.`),S(r==="NDHWC",()=>`Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of ${r}`),Wt("maxPool3d",s,o);const c={x:a},u={filterSize:e,strides:t,pad:s,dimRoundingMode:o,dataFormat:r},h=M.runKernel(Ra,c,u);return l?V(h,[h.shape[1],h.shape[2],h.shape[3],h.shape[4]]):h}const Y$=W({maxPool3d_:X$});function Z$(n,e){let t=A(n,"a","maximum"),s=A(e,"b","maximum");[t,s]=tt(t,s),t.dtype==="bool"&&(t=re(t,"int32"),s=re(s,"int32")),we(t.shape,s.shape);const o={a:t,b:s};return M.runKernel(Or,o)}const xs=W({maximum_:Z$});function Q$(n,e=null,t=!1){const o={x:A(n,"x","mean")},r={axis:e,keepDims:t};return M.runKernel(Aa,o,r)}const lt=W({mean_:Q$});function ot(n,e="float32"){if(Xn(n),e==="complex64"){const s=ot(n,"float32"),o=ot(n,"float32");return Vs(s,o)}const t=Et(j(n),e);return M.makeTensor(t,n,e)}function ts(n,e="float32"){if(Xn(n),e==="complex64"){const s=ts(n,"float32"),o=ot(n,"float32");return Vs(s,o)}const t=Vc(j(n),e);return M.makeTensor(t,n,e)}function J$(n,e){let t=A(n,"a","minimum"),s=A(e,"b","minimum");[t,s]=tt(t,s),t.dtype==="bool"&&(t=re(t,"int32"),s=re(s,"int32")),we(t.shape,s.shape);const o={a:t,b:s};return M.runKernel(Lr,o)}const mi=W({minimum_:J$});function ev(n,e,t){S(t==="reflect"||t==="symmetric",()=>`Invalid mode. Mode must be either reflect or symmetric. Got ${t}.`);const s=A(n,"x","mirrorPad");if(s.rank===0)throw new Error("mirrorPad(scalar) is not defined. Pass non-scalar to mirrorPad");S(e.length===s.rank,()=>`Padding doesn't match input. Must be ${s.rank}. Got ${e.length}.`);const o=t==="reflect"?1:0;for(let a=0;a<s.rank;a++)S(e[a].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),S(e[a][0]>=0&&e[a][0]<=s.shape[a]-o&&e[a][1]>=0&&e[a][1]<=s.shape[a]-o,()=>`Padding in dimension ${a} cannot be greater than or equal to ${s.shape[a]-o} or less than 0 for input of shape ${s.shape}`);const r={paddings:e,mode:t},i={x:s};return M.runKernel(Fa,i,r)}const tv=W({mirrorPad_:ev});function nv(n,e){let t=A(n,"a","mod"),s=A(e,"b","mod");[t,s]=tt(t,s);const o={a:t,b:s};return M.runKernel(Mr,o)}const sv=W({mod_:nv});function ov(n,e=null,t=!1){n=A(n,"x","moments");const s=ve(e,n.shape),o=lt(n,s,t);let r=o.shape;t||(r=at(o.shape,s));const i=Ke(be(re(n,"float32"),V(o,r))),a=lt(i,s,t);return{mean:o,variance:a}}const yl=W({moments_:ov});function rv(n,e){let t=A(n,"a","notEqual","string_or_numeric"),s=A(e,"b","notEqual","string_or_numeric");[t,s]=tt(t,s),we(t.shape,s.shape);const o={a:t,b:s};return M.runKernel(Oa,o)}const wl=W({notEqual_:rv});function iv(n,e,t=1,s=0,o="int32"){if(e<2)throw new Error(`Error in oneHot: depth must be >=2, but it is ${e}`);const i={indices:A(n,"indices","oneHot","int32")},a={dtype:o,depth:e,onValue:t,offValue:s};return M.runKernel(Ma,i,a)}const Jf=W({oneHot_:iv});function av(n){const t={x:A(n,"x","onesLike")};return M.runKernel(La,t)}const ln=W({onesLike_:av});function lv(n,e,t=0){const s=A(n,"x","pad");if(s.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");const o={paddings:e,constantValue:t},r={x:s};return M.runKernel(Ba,r,o)}const hh=W({pad_:lv});function cv(n,e,t){const s=A(n,"x","spaceToBatchND");S(s.rank>=1+e.length,()=>`input rank ${s.rank} should be > than [blockShape] ${e.length}`),S(t.length===e.length,()=>`paddings.shape[0] ${t.length} must be equal to [blockShape] ${e.length}`),S(s.shape.reduce((i,a,l)=>l>0&&l<=e.length?i&&(a+t[l-1][0]+t[l-1][1])%e[l-1]===0:i,!0),()=>`input spatial dimensions ${s.shape.slice(1)} with paddings ${t.toString()} must be divisible by blockShapes ${e.toString()}`);const o={x:s},r={blockShape:e,paddings:t};return M.runKernel(Xa,o,r)}const dh=W({spaceToBatchND_:cv});function uv(n,e,t,s,o,r,i){o==null&&(o=[1,1]),r==null&&(r=1),s===0&&(s="valid");const a=A(n,"x","maxPool");let l=a,c=!1;a.rank===3&&(c=!0,l=V(a,[1,a.shape[0],a.shape[1],a.shape[2]])),S(Rt(r,o),()=>`Error in pool: Either strides or dilations must be 1. Got strides ${r} and dilations '${o}'`);const u=an(l.shape,e,r,o,s),h=[u.dilationHeight,u.dilationWidth];let d;s==="same"?d=dv([u.filterHeight,u.filterWidth],h):d=[[0,0],[0,0]];const p=h[0]===1&&h[1]===1,[f,m]=hv([u.inHeight,u.inWidth],h,d),g=p?s:"valid",x=p?l:dh(l,h,f),w=(t==="avg"?()=>Ju(x,e,r,g,i):()=>uh(x,e,r,g,i))(),y=p?w:eh(w,h,m);return c?V(y,[y.shape[1],y.shape[2],y.shape[3]]):y}function hv(n,e,t){const s=t.map(u=>u[0]),o=t.map(u=>u[1]),r=n.concat(s,o),i=e.map((u,h)=>(u-r[h]%u)%u),a=o.map((u,h)=>u+i[h]),l=e.map((u,h)=>[s[h],a[h]]),c=e.map((u,h)=>[0,i[h]]);return[l,c]}function dv(n,e){const s=n.map((i,a)=>i+(i-1)*(e[a]-1)).map(i=>i-1),o=s.map(i=>Math.floor(i/2)),r=s.map((i,a)=>i-o[a]);return s.map((i,a)=>[o[a],r[a]])}const pv=W({pool_:uv});function fv(n,e){const t=A(n,"x","prelu"),s=A(e,"alpha","prelu"),o={x:t,alpha:s};return M.runKernel(za,o)}const ph=W({prelu_:fv});function mv(n,e=null,t=!1){let s=A(n,"x","prod");s.dtype==="bool"&&(s=re(s,"int32"));const o={x:s},r={axis:e,keepDims:t};return M.runKernel(Va,o,r)}const gv=W({prod_:mv});var Cl={exports:{}},xv=Cl.exports,em;function bv(){return em||(em=1,(function(n){(function(e,t,s){function o(l){var c=this,u=a();c.next=function(){var h=2091639*c.s0+c.c*23283064365386963e-26;return c.s0=c.s1,c.s1=c.s2,c.s2=h-(c.c=h|0)},c.c=1,c.s0=u(" "),c.s1=u(" "),c.s2=u(" "),c.s0-=u(l),c.s0<0&&(c.s0+=1),c.s1-=u(l),c.s1<0&&(c.s1+=1),c.s2-=u(l),c.s2<0&&(c.s2+=1),u=null}function r(l,c){return c.c=l.c,c.s0=l.s0,c.s1=l.s1,c.s2=l.s2,c}function i(l,c){var u=new o(l),h=c&&c.state,d=u.next;return d.int32=function(){return u.next()*4294967296|0},d.double=function(){return d()+(d()*2097152|0)*11102230246251565e-32},d.quick=d,h&&(typeof h=="object"&&r(h,u),d.state=function(){return r(u,{})}),d}function a(){var l=4022871197,c=function(u){u=String(u);for(var h=0;h<u.length;h++){l+=u.charCodeAt(h);var d=.02519603282416938*l;l=d>>>0,d-=l,d*=l,l=d>>>0,d-=l,l+=d*4294967296}return(l>>>0)*23283064365386963e-26};return c}t&&t.exports?t.exports=i:this.alea=i})(xv,n)})(Cl)),Cl.exports}var Il={exports:{}},yv=Il.exports,tm;function wv(){return tm||(tm=1,(function(n){(function(e,t,s){function o(a){var l=this,c="";l.x=0,l.y=0,l.z=0,l.w=0,l.next=function(){var h=l.x^l.x<<11;return l.x=l.y,l.y=l.z,l.z=l.w,l.w^=l.w>>>19^h^h>>>8},a===(a|0)?l.x=a:c+=a;for(var u=0;u<c.length+64;u++)l.x^=c.charCodeAt(u)|0,l.next()}function r(a,l){return l.x=a.x,l.y=a.y,l.z=a.z,l.w=a.w,l}function i(a,l){var c=new o(a),u=l&&l.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var d=c.next()>>>11,p=(c.next()>>>0)/4294967296,f=(d+p)/(1<<21);while(f===0);return f},h.int32=c.next,h.quick=h,u&&(typeof u=="object"&&r(u,c),h.state=function(){return r(c,{})}),h}t&&t.exports?t.exports=i:this.xor128=i})(yv,n)})(Il)),Il.exports}var $l={exports:{}},Cv=$l.exports,nm;function Iv(){return nm||(nm=1,(function(n){(function(e,t,s){function o(a){var l=this,c="";l.next=function(){var h=l.x^l.x>>>2;return l.x=l.y,l.y=l.z,l.z=l.w,l.w=l.v,(l.d=l.d+362437|0)+(l.v=l.v^l.v<<4^(h^h<<1))|0},l.x=0,l.y=0,l.z=0,l.w=0,l.v=0,a===(a|0)?l.x=a:c+=a;for(var u=0;u<c.length+64;u++)l.x^=c.charCodeAt(u)|0,u==c.length&&(l.d=l.x<<10^l.x>>>4),l.next()}function r(a,l){return l.x=a.x,l.y=a.y,l.z=a.z,l.w=a.w,l.v=a.v,l.d=a.d,l}function i(a,l){var c=new o(a),u=l&&l.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var d=c.next()>>>11,p=(c.next()>>>0)/4294967296,f=(d+p)/(1<<21);while(f===0);return f},h.int32=c.next,h.quick=h,u&&(typeof u=="object"&&r(u,c),h.state=function(){return r(c,{})}),h}t&&t.exports?t.exports=i:this.xorwow=i})(Cv,n)})($l)),$l.exports}var vl={exports:{}},$v=vl.exports,sm;function vv(){return sm||(sm=1,(function(n){(function(e,t,s){function o(a){var l=this;l.next=function(){var u=l.x,h=l.i,d,p;return d=u[h],d^=d>>>7,p=d^d<<24,d=u[h+1&7],p^=d^d>>>10,d=u[h+3&7],p^=d^d>>>3,d=u[h+4&7],p^=d^d<<7,d=u[h+7&7],d=d^d<<13,p^=d^d<<9,u[h]=p,l.i=h+1&7,p};function c(u,h){var d,p=[];if(h===(h|0))p[0]=h;else for(h=""+h,d=0;d<h.length;++d)p[d&7]=p[d&7]<<15^h.charCodeAt(d)+p[d+1&7]<<13;for(;p.length<8;)p.push(0);for(d=0;d<8&&p[d]===0;++d);for(d==8?p[7]=-1:p[d],u.x=p,u.i=0,d=256;d>0;--d)u.next()}c(l,a)}function r(a,l){return l.x=a.x.slice(),l.i=a.i,l}function i(a,l){a==null&&(a=+new Date);var c=new o(a),u=l&&l.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var d=c.next()>>>11,p=(c.next()>>>0)/4294967296,f=(d+p)/(1<<21);while(f===0);return f},h.int32=c.next,h.quick=h,u&&(u.x&&r(u,c),h.state=function(){return r(c,{})}),h}t&&t.exports?t.exports=i:this.xorshift7=i})($v,n)})(vl)),vl.exports}var kl={exports:{}},kv=kl.exports,om;function Sv(){return om||(om=1,(function(n){(function(e,t,s){function o(a){var l=this;l.next=function(){var u=l.w,h=l.X,d=l.i,p,f;return l.w=u=u+1640531527|0,f=h[d+34&127],p=h[d=d+1&127],f^=f<<13,p^=p<<17,f^=f>>>15,p^=p>>>12,f=h[d]=f^p,l.i=d,f+(u^u>>>16)|0};function c(u,h){var d,p,f,m,g,x=[],b=128;for(h===(h|0)?(p=h,h=null):(h=h+"\0",p=0,b=Math.max(b,h.length)),f=0,m=-32;m<b;++m)h&&(p^=h.charCodeAt((m+32)%h.length)),m===0&&(g=p),p^=p<<10,p^=p>>>15,p^=p<<4,p^=p>>>13,m>=0&&(g=g+1640531527|0,d=x[m&127]^=p+g,f=d==0?f+1:0);for(f>=128&&(x[(h&&h.length||0)&127]=-1),f=127,m=512;m>0;--m)p=x[f+34&127],d=x[f=f+1&127],p^=p<<13,d^=d<<17,p^=p>>>15,d^=d>>>12,x[f]=p^d;u.w=g,u.X=x,u.i=f}c(l,a)}function r(a,l){return l.i=a.i,l.w=a.w,l.X=a.X.slice(),l}function i(a,l){a==null&&(a=+new Date);var c=new o(a),u=l&&l.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var d=c.next()>>>11,p=(c.next()>>>0)/4294967296,f=(d+p)/(1<<21);while(f===0);return f},h.int32=c.next,h.quick=h,u&&(u.X&&r(u,c),h.state=function(){return r(c,{})}),h}t&&t.exports?t.exports=i:this.xor4096=i})(kv,n)})(kl)),kl.exports}var Sl={exports:{}},Nv=Sl.exports,rm;function Tv(){return rm||(rm=1,(function(n){(function(e,t,s){function o(a){var l=this,c="";l.next=function(){var h=l.b,d=l.c,p=l.d,f=l.a;return h=h<<25^h>>>7^d,d=d-p|0,p=p<<24^p>>>8^f,f=f-h|0,l.b=h=h<<20^h>>>12^d,l.c=d=d-p|0,l.d=p<<16^d>>>16^f,l.a=f-h|0},l.a=0,l.b=0,l.c=-1640531527,l.d=1367130551,a===Math.floor(a)?(l.a=a/4294967296|0,l.b=a|0):c+=a;for(var u=0;u<c.length+20;u++)l.b^=c.charCodeAt(u)|0,l.next()}function r(a,l){return l.a=a.a,l.b=a.b,l.c=a.c,l.d=a.d,l}function i(a,l){var c=new o(a),u=l&&l.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var d=c.next()>>>11,p=(c.next()>>>0)/4294967296,f=(d+p)/(1<<21);while(f===0);return f},h.int32=c.next,h.quick=h,u&&(typeof u=="object"&&r(u,c),h.state=function(){return r(c,{})}),h}t&&t.exports?t.exports=i:this.tychei=i})(Nv,n)})(Sl)),Sl.exports}var Nl={exports:{}},Ev={},Rv=Object.freeze({__proto__:null,default:Ev}),Av=gw(Rv),Dv=Nl.exports,im;function Fv(){return im||(im=1,(function(n){(function(e,t,s){var o=256,r=6,i=52,a="random",l=s.pow(o,r),c=s.pow(2,i),u=c*2,h=o-1,d;function p(y,C,$){var v=[];C=C==!0?{entropy:!0}:C||{};var k=x(g(C.entropy?[y,w(t)]:y==null?b():y,3),v),N=new f(v),T=function(){for(var I=N.g(r),E=l,R=0;I<c;)I=(I+R)*o,E*=o,R=N.g(1);for(;I>=u;)I/=2,E/=2,R>>>=1;return(I+R)/E};return T.int32=function(){return N.g(4)|0},T.quick=function(){return N.g(4)/4294967296},T.double=T,x(w(N.S),t),(C.pass||$||function(I,E,R,D){return D&&(D.S&&m(D,N),I.state=function(){return m(N,{})}),R?(s[a]=I,E):I})(T,k,"global"in C?C.global:this==s,C.state)}function f(y){var C,$=y.length,v=this,k=0,N=v.i=v.j=0,T=v.S=[];for($||(y=[$++]);k<o;)T[k]=k++;for(k=0;k<o;k++)T[k]=T[N=h&N+y[k%$]+(C=T[k])],T[N]=C;(v.g=function(I){for(var E,R=0,D=v.i,F=v.j,_=v.S;I--;)E=_[D=h&D+1],R=R*o+_[h&(_[D]=_[F=h&F+E])+(_[F]=E)];return v.i=D,v.j=F,R})(o)}function m(y,C){return C.i=y.i,C.j=y.j,C.S=y.S.slice(),C}function g(y,C){var $=[],v=typeof y,k;if(C&&v=="object")for(k in y)try{$.push(g(y[k],C-1))}catch(N){}return $.length?$:v=="string"?y:y+"\0"}function x(y,C){for(var $=y+"",v,k=0;k<$.length;)C[h&k]=h&(v^=C[h&k]*19)+$.charCodeAt(k++);return w(C)}function b(){try{var y;return d&&(y=d.randomBytes)?y=y(o):(y=new Uint8Array(o),(e.crypto||e.msCrypto).getRandomValues(y)),w(y)}catch(v){var C=e.navigator,$=C&&C.plugins;return[+new Date,e,$,e.screen,w(t)]}}function w(y){return String.fromCharCode.apply(0,y)}if(x(s.random(),t),n.exports){n.exports=p;try{d=Av}catch(y){}}else s["seed"+a]=p})(typeof self!="undefined"?self:Dv,[],Math)})(Nl)),Nl.exports}var fh,am;function _v(){if(am)return fh;am=1;var n=bv(),e=wv(),t=Iv(),s=vv(),o=Sv(),r=Tv(),i=Fv();return i.alea=n,i.xor128=e,i.xorwow=t,i.xorshift7=s,i.xor4096=o,i.tychei=r,fh=i,fh}var mh=_v();class lm{constructor(e,t,s,o,r){this.mean=e,this.stdDev=t,this.dtype=s,this.nextVal=NaN,this.truncated=o,this.truncated&&(this.upper=this.mean+this.stdDev*2,this.lower=this.mean-this.stdDev*2);const i=r||Math.random();this.random=mh.alea(i.toString())}nextValue(){if(!isNaN(this.nextVal)){const o=this.nextVal;return this.nextVal=NaN,o}let e,t,s=!1;for(;!s;){let o,r,i;do o=2*this.random()-1,r=2*this.random()-1,i=o*o+r*r;while(i>=1||i===0);const a=Math.sqrt(-2*Math.log(i)/i);e=this.mean+this.stdDev*o*a,t=this.mean+this.stdDev*r*a,(!this.truncated||this.isValidTruncated(e))&&(s=!0)}return(!this.truncated||this.isValidTruncated(t))&&(this.nextVal=this.convertValue(t)),this.convertValue(e)}convertValue(e){return this.dtype==null||this.dtype==="float32"?e:Math.round(e)}isValidTruncated(e){return e<=this.upper&&e>=this.lower}}class Ov{constructor(e=0,t=1,s,o){if(this.canReturnFloat=()=>this.dtype==null||this.dtype==="float32",this.min=e,this.range=t-e,this.dtype=s,o==null&&(o=Math.random()),typeof o=="number"&&(o=o.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error(`The difference between ${e} - ${t} <= 1 and dtype is not float`);this.random=mh.alea(o)}convertValue(e){return this.canReturnFloat()?e:Math.round(e)}nextValue(){return this.convertValue(this.min+this.range*this.random())}}function Lv(n,e=0,t=1,s,o){if(Xn(n),s!=null&&s==="bool")throw new Error(`Unsupported data type ${s}`);const r=new lm(e,t,s,!1,o),i=ke(n,s);for(let a=0;a<i.values.length;a++)i.values[a]=r.nextValue();return i.toTensor()}const Mv=W({randomNormal_:Lv});function Pv(n,e=0,t=1,s="float32",o){Xn(n);const r=ke(n,s),i=new Ov(e,t,null,o);for(let a=0;a<r.values.length;a++)r.values[a]=i.nextValue();return r.toTensor()}const gi=W({randomUniform_:Pv});function xi(n,e,t=1,s="float32"){if(t===0)throw new Error("Cannot have a step of zero");const o={start:n,stop:e,step:t,dtype:s};return M.runKernel($u,{},o)}function Bv(n){const t={input:A(n,"input","real")};return M.runKernel(vu,t)}const Tl=W({real_:Bv});function zv(n){const t={x:A(n,"x","reciprocal")};return M.runKernel(zr,t)}const Vv=W({reciprocal_:zv});function Wv(n){const t={x:A(n,"x","relu")};return M.runKernel(Vr,t)}const Js=W({relu_:Wv});function Uv(n){const t={x:A(n,"x","relu6")};return M.runKernel(Wr,t)}const cm=W({relu6_:Uv});function Gv(n,e){const s={x:A(n,"x","reverse")},o={dims:e};return M.runKernel(Ha,s,o)}const eo=W({reverse_:Gv});function Hv(n){const t={x:A(n,"x","round")};return M.runKernel(Ur,t)}const um=W({round_:Hv});function qv(n){const t={x:A(n,"x","rsqrt","float32")};return M.runKernel(Gr,t)}const El=W({rsqrt_:qv});function jv(n){const t={x:A(n,"x","selu")};return M.runKernel(Hr,t)}const hm=W({selu_:jv});function Kv(n,e,t,s,o,r=[1,1],i="NHWC"){const a=A(n,"x","separableConv2d"),l=A(e,"depthwiseFilter","separableConv2d"),c=A(t,"pointwiseFilter","separableConv2d");let u=a,h=!1;if(a.rank===3&&(h=!0,u=V(a,[1,a.shape[0],a.shape[1],a.shape[2]])),i==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");S(u.rank===4,()=>`Error in separableConv2d: input must be rank 4, but got rank ${u.rank}.`),S(l.rank===4,()=>`Error in separableConv2d: depthwise filter must be rank 4, but got rank ${l.rank}.`),S(c.rank===4,()=>`Error in separableConv2d: pointwise filter must be rank 4, but got rank ${l.rank}.`),S(c.shape[0]===1,()=>`Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ${c.shape[0]}.`),S(c.shape[1]===1,()=>`Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ${c.shape[1]}.`);const d=l.shape[2],p=l.shape[3];S(c.shape[2]===d*p,()=>`Error in separableConv2d: the third dimension of pointwise filter must be ${d*p}, but got ${c.shape[2]}.`);const f=oh(u,l,s,o,i,r),g=Ys(f,c,1,"valid",i);return h?V(g,[g.shape[1],g.shape[2],g.shape[3]]):g}const dm=W({separableConv2d_:Kv});function Xv(n){const t={x:A(n,"x","sign")};return M.runKernel(Kr,t)}const Yv=W({sign_:Xv});function Zv(n){const t={x:A(n,"x","sin","float32")};return M.runKernel(qr,t)}const pm=W({sin_:Zv});function Qv(n){const t={x:A(n,"x","sinh")};return M.runKernel(jr,t)}const fm=W({sinh_:Qv});function Jv(n,e,t){const s=A(n,"x","slice1d");return S(s.rank===1,()=>`slice1d expects a rank-1 tensor, but got a rank-${s.rank} tensor`),He(s,[e],[t])}const gh=W({slice1d_:Jv});function ek(n,e,t){const s=A(n,"x","slice2d");return S(s.rank===2,()=>`slice2d expects a rank-2 tensor, but got a rank-${s.rank} tensor`),He(s,e,t)}const mm=W({slice2d_:ek});function tk(n,e,t){const s=A(n,"x","slice3d");return S(s.rank===3,()=>`slice3d expects a rank-3 tensor, but got a rank-${s.rank} tensor`),He(s,e,t)}const xh=W({slice3d_:tk});function nk(n,e,t){const s=A(n,"x","slice4d");return S(s.rank===4,()=>`slice4d expects a rank-4 tensor, but got a rank-${s.rank} tensor`),He(s,e,t)}const Rl=W({slice4d_:nk});function sk(n,e=-1){const t=A(n,"logits","softmax","float32");if(e===-1&&(e=t.rank-1),e!==t.rank-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${t.rank} and dim was ${e}`);const s={logits:t},o={dim:e};return M.runKernel(Za,s,o)}const bh=W({softmax_:sk});function ok(n){S(n.dtype==="complex64",()=>`The dtype for tf.spectral.fft() must be complex64 but got ${n.dtype}.`);const e={input:n};return M.runKernel(du,e)}const gm=W({fft_:ok});function rk(n){S(n.dtype==="complex64",()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${n.dtype}.`);const e={input:n};return M.runKernel(mu,e)}const yh=W({ifft_:rk});function ik(n){const e=n.shape[n.shape.length-1],t=n.size/e;let s;if(e<=2){const o=V(n,[t,e]);s=yh(o)}else{const o=[t,2*(e-1)],r=V(Tl(n),[t,e]),i=V(ah(n),[t,e]),a=eo(He(r,[0,1],[t,e-2]),1),l=L(eo(He(i,[0,1],[t,e-2]),1),Oe(-1)),c=vt([r,a],1),u=vt([i,l],1),h=V(Vs(c,u),[o[0],o[1]]);s=yh(h)}if(s=Tl(s),n.rank===3&&n.shape[0]!==0){const o=s,r=n.shape[0];s=V(s,[r,s.shape[0]/r,s.shape[1]]),o.dispose()}return s}const ak=W({irfft_:ik});function lk(n,e,t=0){const o={x:A(n,"x","split")},r={numOrSizeSplits:e,axis:t};return M.runKernel(Ya,o,r)}const tn=W({split_:lk});function ck(n,e){S(n.dtype==="float32",()=>`The dtype for rfft() must be real value but got ${n.dtype}`);let t=n.shape[n.shape.length-1];const s=n.size/t;let o;if(e!=null&&e<t){const f=n.shape.map(g=>0),m=n.shape.map(g=>g);m[n.shape.length-1]=e,o=He(n,f,m),t=e}else if(e!=null&&e>t){const f=n.shape.map(m=>m);f[n.shape.length-1]=e-t,o=vt([n,ot(f)],n.shape.length-1),t=e}else o=n;const r=Ee(o),i=V(Vs(o,r),[s,t]),a=gm(i),l=Math.floor(t/2)+1,c=Tl(a),u=ah(a),h=tn(c,[l,t-l],c.shape.length-1),d=tn(u,[l,t-l],u.shape.length-1),p=o.shape.slice();return p[o.shape.length-1]=l,V(Vs(h[0],d[0]),p)}const uk=W({rfft_:ck});function hk(n,e){let t=A(n,"a","squaredDifference"),s=A(e,"b","squaredDifference");[t,s]=tt(t,s),we(t.shape,s.shape);const o={a:t,b:s},r={};return M.runKernel(Qr,o,r)}const dk=W({squaredDifference_:hk});function pk(n,e){const t=A(n,"x","squeeze","string_or_numeric");return V(t,cs(t.shape,e).newShape)}const to=W({squeeze_:pk});function fk(n,e=0){const t=If(n,"tensors","stack","string_or_numeric");S(t.length>=1,()=>"Pass at least one tensor to tf.stack"),t.length>0&&S(e<=t[0].rank,()=>"Axis must be <= rank of the tensor");const s=t,o={axis:e};return M.runKernel(Pa,s,o)}const Mn=W({stack_:fk});function mk(n,e=0){const s={x:A(n,"x","step")},o={alpha:e};return M.runKernel(si,s,o)}const bi=W({step_:mk});function gk(n,e,t,s,o=0,r=0,i=0,a=0,l=0){const u={x:A(n,"x","stridedSlice","string_or_numeric")},h={begin:e,end:t,strides:s,beginMask:o,endMask:r,ellipsisMask:i,newAxisMask:a,shrinkAxisMask:l};return M.runKernel(Eu,u,h)}const xk=W({stridedSlice_:gk});function bk(n){const t={x:A(n,"x","tan","float32")};return M.runKernel(ei,t)}const yk=W({tan_:bk});function Xt(n,e){wp(n);const t=ll(n,e);if(t.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return cl(n,null,t,e)}function wh(n,e,t){if(wp(n),e!=null&&e.length!==2)throw new Error("tensor2d() requires shape to have two numbers");const s=ll(n,t);if(s.length!==2&&s.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(s.length===1&&e==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return cl(n,e,s,t)}function no(n,e,t){const s=e.shape.length,o=s>1?e.shape[s-1]:1,r=t.length;let i=1;for(let h=o;h<r;++h)i*=t[h];const a=o<1?1:o,l=j(e.shape)/a,c=[...fe(t.slice(0,o)),1],u=j(t);return{sliceRank:o,numUpdates:l,sliceSize:i,strides:c,outputSize:u}}function wk(n,e=1,t=!0){const s=A(n,"x","topk");if(s.rank===0)throw new Error("topk() expects the input to be of rank 1 or higher");const o=s.shape[s.shape.length-1];if(e<0)throw new Error(`'k' passed to topk() must be >= 0 but got ${e}`);if(e>o)throw new Error(`'k' passed to topk() must be <= the last dimension (${o}) but got ${e}`);const r={x:s},i={k:e,sorted:t},[a,l]=M.runKernel(Ru,r,i);return{values:a,indices:l}}const Ck=W({topk_:wk});function Ik(n,e=0,t=1,s,o){if(Xn(n),s!=null&&s==="bool")throw new Error("Unsupported data type $ { dtype }");const r=new lm(e,t,s,!0,o),i=ke(n,s);for(let a=0;a<i.values.length;a++)i.values[a]=r.nextValue();return i.toTensor()}const xm=W({truncatedNormal_:Ik});function $k(n,e=0){const t=A(n,"x","unique","string_or_numeric");S(t.rank>0,()=>"The input tensor must be at least 1D");const s={x:t},o={axis:e},[r,i]=M.runKernel(Du,s,o);return{values:r,indices:i}}const vk=W({unique_:$k});function kk(n,e,t){const s=A(n,"x","unsortedSegmentSum"),o=A(e,"segmentIds","unsortedSegmentSum","int32");S(vo(t),()=>"numSegments must be of dtype int");const r={x:s,segmentIds:o},i={numSegments:t};return M.runKernel(Ja,r,i)}const bm=W({unsortedSegmentSum_:kk});function Sk(n,e=0){const t=A(n,"x","unstack","string_or_numeric");S(e>=-t.shape.length&&e<t.shape.length,()=>`Axis = ${e} is not in [-${t.shape.length}, ${t.shape.length})`);const s={value:t},o={axis:e};return M.runKernel(Qa,s,o)}const bs=W({unstack_:Sk});function Nk(n,e=!0,t,s){return M.makeVariable(n,e,t,s)}function ym(n,e){const t=[];for(let r=0;r<e.length;r++)e[r]&&t.push(r);const s=ke(n,"int32"),o=ke([t.length,n.length],"int32");for(let r=0;r<t.length;r++){const i=s.indexToLoc(t[r]),a=r*n.length;o.values.set(i,a)}return o.toTensor()}function Tk(n,e,t){const s=A(n,"x","transpose");if(e==null&&(e=s.shape.map((i,a)=>a).reverse()),S(s.rank===e.length,()=>`Error in transpose: rank of input ${s.rank} must match length of perm ${e}.`),e.forEach(i=>{S(i>=0&&i<s.rank,()=>`All entries in 'perm' must be between 0 and ${s.rank-1} but got ${e}`)}),s.rank<=1)return s.clone();const o={x:s},r={perm:e};return s.dtype==="complex64"?z(()=>{let i=Tl(s),a=ah(s);return i=M.runKernel(Eo,{x:i},r),a=M.runKernel(Eo,{x:a},r),t&&(a=st(a)),Vs(i,a)}):M.runKernel(Eo,o,r)}const Re=W({transpose_:Tk});function Ek(n,e){if(e==null)return n.shape.slice();if(_e(n.shape,e))return e;if(n.shape.length===e.length){const t=[];for(let s=0;s<n.shape.length;s++)e[s]==null&&n.shape[s]!=null?t.push(n.shape[s]):t.push(e[s]);return t}return e}function Rk(n,e,t,s){const o=A(n,"x","dropout");if(S(o.dtype==="float32",()=>`x has to be a floating point tensor since it's going to be scaled, but got a ${o.dtype} tensor instead.`),S(e>=0&&e<1,()=>`rate must be a float in the range [0, 1), but got ${e}.`),e===0)return n instanceof ct?o.clone():o;const r=Ek(o,t),i=1-e,a=ge(xl(te(gi(r,0,1,"float32",s),i)),i);return L(o,a)}const Ak=W({dropout_:Rk});function Dk(n,e,t,s,o,r="NHWC",i){let a=n;n.rank===3&&(a=V(n,[1,n.shape[0],n.shape[1],n.shape[2]]));let l=e;l.rank===3&&(l=V(e,[1,e.shape[0],e.shape[1],e.shape[2]])),S(a.rank===4,()=>`Error in conv2dDerFilter: input must be rank 4, but got shape ${a.shape}.`),S(l.rank===4,()=>`Error in conv2dDerFilter: dy must be rank 4, but got shape ${l.shape}.`),S(t.length===4,()=>`Error in conv2dDerFilter: filterShape must be length 4, but got ${t}.`);const c=r==="NHWC"?a.shape[3]:a.shape[1],u=r==="NHWC"?l.shape[3]:l.shape[1];S(c===t[2],()=>`Error in conv2dDerFilter: depth of input ${c}) must match input depth in filter (${t[2]}.`),S(u===t[3],()=>`Error in conv2dDerFilter: depth of dy (${u}) must match output depth for filter (${t[3]}).`),Wt("conv2dDerFilter",o,i);const h={x:a,dy:l},d={strides:s,pad:o,dataFormat:r,dimRoundingMode:i,filterShape:t};return M.runKernel(Jc,h,d)}const Ch=W({conv2DBackpropFilter_:Dk});function Ih(n,e,t){if(t==null||t==="linear")return n;if(t==="relu")return L(n,bi(e));throw new Error(`Cannot compute gradient for fused activation ${t}.`)}function $h(n,e){let t=e;const s=ht(n.shape,e.shape);return s.length>0&&(t=me(t,s)),V(t,n.shape)}function vh(n,e,t,s){if(e==="linear")return n;if(e==="relu")return Js(n);if(e==="elu")return fl(n);if(e==="relu6")return cm(n);if(e==="prelu")return ph(n,t);if(e==="leakyrelu")return lh(n,s);if(e==="sigmoid")return Oo(n);throw new Error(`Unknown fused activation ${e}.`)}const kh=(n,e)=>!(n>0)||e==="linear";function Fk({x:n,filter:e,strides:t,pad:s,dataFormat:o="NHWC",dilations:r=[1,1],dimRoundingMode:i,bias:a,activation:l="linear",preluActivationWeights:c,leakyreluAlpha:u}){if(l=l||"linear",kh(M.state.gradientDepth,l)===!1){S(o==="NHWC",()=>`Error in fused conv2d: got dataFormat of ${o} but only NHWC is currently supported for the case of gradient depth is 0 and the activation is not linear.`);let $=Ys(n,e,t,s,o,r,i);return a!=null&&($=te($,a)),vh($,l,c,u)}const h=A(n,"x","conv2d","float32"),d=A(e,"filter","conv2d","float32");let p=h,f=!1;h.rank===3&&(f=!0,p=V(h,[1,h.shape[0],h.shape[1],h.shape[2]])),S(p.rank===4,()=>`Error in fused conv2d: input must be rank 4, but got rank ${p.rank}.`),S(d.rank===4,()=>`Error in fused conv2d: filter must be rank 4, but got rank ${d.rank}.`),Wt("fused conv2d",s,i);const m=o==="NHWC"?p.shape[3]:p.shape[1];S(d.shape[2]===m,()=>`Error in conv2d: depth of input (${m}) must match input depth for filter ${d.shape[2]}.`),S(Rt(t,r),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${t} and dilations '${r}'`);const g=$t(p.shape,d.shape,t,r,s,i);let x;a!=null&&(x=A(a,"bias","fused conv2d"),[x]=tt(x,h),o==="NHWC"?we(g.outShape,x.shape):(S(x.shape.length<=1,()=>`Error in fused conv2d: only supports scalar or 1-D Tensor bias for NCHW format but got the bias of rank-${x.shape.length}.`),S(x.shape.length===0||x.shape[0]===g.outChannels||x.shape[0]===1,()=>`Error in fused conv2d: bias shape (${x.shape}) is not compatible with the number of output channels (${g.outChannels})`)));let b;if(c!=null){const $=c.shape;if(S($.length<=1||$.length===3,()=>`Error in fused conv2d: only supports scalar, 1-D Tensor or 3-D Tensor PReLU activation weights but got a tensor of rank-${$.length}.`),$.length===1)S($[0]===1||$[0]===g.outChannels,()=>`Error in fused conv2d: PReLU activation weights (${$}) is not compatible with the number of output channels (${g.outChannels}).`);else if($.length===3)try{we($,g.outShape)}catch(v){const k=`Error in fused conv2d: PReLU activation weights (${$}) is not compatible with the output shape of the conv2d (${g.outShape}).`;throw Error(k)}b=A(c,"prelu weights","fused conv2d")}const w=($,v)=>{S(o==="NHWC",()=>`Error in gradient of fused conv2D: got dataFormat of ${o} but only NHWC is currently supported.`);const[k,N,T,I]=v,E=Ih($,T,l);S(Ks(r),()=>`Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${r}'`);const R=th(N.shape,E,k,t,s),D=Ch(N,E,k.shape,t,s),F=[R,D];if(I!=null){const _=$h(I,E);F.push(_)}return F},y={x:p,filter:d,bias:x,preluActivationWeights:b},C={strides:t,pad:s,dataFormat:o,dilations:r,dimRoundingMode:i,activation:l,leakyreluAlpha:u};return a==null?Bo((v,k,N)=>{let T=M.runKernel(nl,y,C);return N([k,v,T]),f&&(T=V(T,[T.shape[1],T.shape[2],T.shape[3]])),{value:T,gradFunc:w}})(p,d):Bo((v,k,N,T)=>{let I=M.runKernel(nl,y,C);return T([k,v,I,N]),f&&(I=V(I,[I.shape[1],I.shape[2],I.shape[3]])),{value:I,gradFunc:w}})(p,d,x)}const _k=W({fusedConv2d_:Fk});function Ok(n,e,t,s,o,r=[1,1],i){let a=n;n.rank===3&&(a=V(n,[1,n.shape[0],n.shape[1],n.shape[2]]));let l=e;l.rank===3&&(l=V(e,[1,e.shape[0],e.shape[1],e.shape[2]]));const c={x:a,dy:l},u={strides:s,pad:o,dimRoundingMode:i,dilations:r,filterShape:t};return M.runKernel(iu,c,u)}const Lk=W({depthwiseConv2dNativeBackpropFilter_:Ok});function Mk(n,e,t,s,o,r=[1,1],i){let a=e,l=!1;e.rank===3&&(l=!0,a=V(e,[1,e.shape[0],e.shape[1],e.shape[2]]));const c={dy:a,filter:t},u={strides:s,pad:o,dimRoundingMode:i,dilations:r,inputShape:n},h=M.runKernel(au,c,u);return l?V(h,[h.shape[1],h.shape[2],h.shape[3]]):h}const Pk=W({depthwiseConv2dNativeBackpropInput_:Mk});function Bk({a:n,b:e,transposeA:t=!1,transposeB:s=!1,bias:o,activation:r="linear",preluActivationWeights:i,leakyreluAlpha:a=.2}){if(kh(M.state.gradientDepth,r)===!1){let I=Fe(n,e,t,s);return o!=null&&(I=te(I,o)),vh(I,r,i,a)}let l=A(n,"a","fused matMul"),c=A(e,"b","fused matMul");[l,c]=tt(l,c);const u=t?l.shape[l.rank-2]:l.shape[l.rank-1],h=s?c.shape[c.rank-1]:c.shape[c.rank-2],d=t?l.shape[l.rank-1]:l.shape[l.rank-2],p=s?c.shape[c.rank-2]:c.shape[c.rank-1],f=l.shape.slice(0,-2),m=c.shape.slice(0,-2),g=j(f),x=j(m);S(u===h,()=>`Error in fused matMul: inner shapes (${u}) and (${h}) of Tensors with shapes ${l.shape} and ${c.shape} and transposeA=${t} and transposeB=${s} must match.`);const w=we(l.shape.slice(0,-2),c.shape.slice(0,-2)).concat([d,p]),y=t?V(l,[g,u,d]):V(l,[g,d,u]),C=s?V(c,[x,p,h]):V(c,[x,h,p]);let $;o!=null&&($=A(o,"bias","fused matMul"),[$]=tt($,l),we(w,$.shape));let v;i!=null&&(v=A(i,"prelu weights","fused matMul"));const k=(I,E)=>{const[R,D,F,_]=E,P=Ih(V(I,F.shape),F,r);let B,H;if(!t&&!s?(B=Fe(P,D,!1,!0),H=Fe(R,P,!0,!1)):!t&&s?(B=Fe(P,D,!1,!1),H=Fe(P,R,!0,!1)):t&&!s?(B=Fe(D,P,!1,!0),H=Fe(R,P,!1,!1)):(B=Fe(D,P,!0,!0),H=Fe(P,R,!0,!0)),o!=null){const G=$h(_,P);return[B,H,G]}else return[B,H]},N={a:y,b:C,bias:$,preluActivationWeights:v},T={transposeA:t,transposeB:s,activation:r,leakyreluAlpha:a};return o==null?Bo((E,R,D)=>{const F=M.runKernel(tl,N,T);return D([E,R,F]),{value:V(F,w),gradFunc:k}})(y,C):Bo((E,R,D,F)=>{const _=M.runKernel(tl,N,T);return F([E,R,_,D]),{value:V(_,w),gradFunc:k}})(y,C,$)}const wm=W({fusedMatMul_:Bk});function zk(n,e,t,s,o="bilinear",r=0){const i=A(n,"image","cropAndResize"),a=A(e,"boxes","cropAndResize","float32"),l=A(t,"boxInd","cropAndResize","int32"),c=a.shape[0];S(i.rank===4,()=>`Error in cropAndResize: image must be rank 4,but got rank ${i.rank}.`),S(a.rank===2&&a.shape[1]===4,()=>`Error in cropAndResize: boxes must be have size [${c},4] but had shape ${a.shape}.`),S(l.rank===1&&l.shape[0]===c,()=>`Error in cropAndResize: boxInd must be have size [${c}] but had shape ${a.shape}.`),S(s.length===2,()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${s.length}.`),S(s[0]>=1&&s[1]>=1,()=>`cropSize must be atleast [1,1], but was ${s}`),S(o==="bilinear"||o==="nearest",()=>`method must be bilinear or nearest, but was ${o}`);const u={image:i,boxes:a,boxInd:l},h={method:o,extrapolationValue:r,cropSize:s};return M.runKernel(su,u,h)}const Vk=W({cropAndResize_:zk});function Wk(n){const e=A(n,"image","flipLeftRight","float32");S(e.rank===4,()=>`Error in flipLeftRight: image must be rank 4,but got rank ${e.rank}.`);const t={image:e};return M.runKernel(fu,t,{})}const Uk=W({flipLeftRight_:Wk});function Gk(n){const e=A(n,"image","grayscaleToRGB"),t=e.rank-1,s=e.shape[t];S(e.rank>=2,()=>`Error in grayscaleToRGB: images must be at least rank 2, but got rank ${e.rank}.`),S(s===1,()=>`Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${s}.`);const o=new Array(e.rank);return o.fill(1,0,t),o[t]=3,Cn(e,o)}const Hk=W({grayscaleToRGB_:Gk});function qk(n){const e=A(n,"image","RGBToGrayscale"),t=e.rank-1,s=e.shape[t];S(e.rank>=2,()=>`Error in RGBToGrayscale: images must be at least rank 2, but got rank ${e.rank}.`),S(s===3,()=>`Error in RGBToGrayscale: last dimension of an RGB image should be size 3, but got size ${s}.`);const o=e.dtype,r=re(e,"float32"),i=Xt([.2989,.587,.114]);let a;switch(e.rank){case 2:a=pi("ij,j->i",r,i);break;case 3:a=pi("ijk,k->ij",r,i);break;case 4:a=pi("ijkl,l->ijk",r,i);break;case 5:a=pi("ijklm,m->ijkl",r,i);break;case 6:a=pi("ijklmn,n->ijklm",r,i);break;default:throw new Error("Not a valid tensor rank.")}return a=Ut(a,-1),re(a,o)}const jk=W({rgbToGrayscale_:qk});function Kk(n,e,t=0,s=.5){const o=A(n,"image","rotateWithOffset","float32");S(o.rank===4,()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${o.rank}.`);const r={image:o},i={radians:e,fillValue:t,center:s};return M.runKernel(Fu,r,i)}const Xk=W({rotateWithOffset_:Kk});function zo(n,e,t,s,o,r){s==null&&(s=.5),o==null&&(o=Number.NEGATIVE_INFINITY),r==null&&(r=0);const i=n.shape[0];return t=Math.min(t,i),S(0<=s&&s<=1,()=>`iouThreshold must be in [0, 1], but was '${s}'`),S(n.rank===2,()=>`boxes must be a 2D tensor, but was of rank '${n.rank}'`),S(n.shape[1]===4,()=>`boxes must have 4 columns, but 2nd dimension was ${n.shape[1]}`),S(e.rank===1,()=>"scores must be a 1D tensor"),S(e.shape[0]===i,()=>`scores has incompatible shape with boxes. Expected ${i}, but was ${e.shape[0]}`),S(0<=r&&r<=1,()=>`softNmsSigma must be in [0, 1], but was '${r}'`),{maxOutputSize:t,iouThreshold:s,scoreThreshold:o,softNmsSigma:r}}function Yk(n,e,t,s=.5,o=Number.NEGATIVE_INFINITY){const r=A(n,"boxes","nonMaxSuppression","float32"),i=A(e,"scores","nonMaxSuppression","float32"),a=zo(r,i,t,s,o);t=a.maxOutputSize,s=a.iouThreshold,o=a.scoreThreshold;const l={maxOutputSize:t,iouThreshold:s,scoreThreshold:o};return M.runKernel(wu,{boxes:r,scores:i},l)}const Zk=W({nonMaxSuppression_:Yk});function Qk(n,e,t){const s=Jk(n,e,t),o=s<0?-(s+1):s;n.splice(o,0,e)}function Jk(n,e,t){return tS(n,e,t||eS)}function eS(n,e){return n>e?1:n<e?-1:0}function tS(n,e,t){let s=0,o=n.length,r=0,i=!1;for(;s<o;){r=s+(o-s>>>1);const a=t(e,n[r]);a>0?s=r+1:(o=r,i=!a)}return i?s:-s-1}function Sh(n,e,t,s,o){return Eh(n,e,t,s,o,0)}function Nh(n,e,t,s,o,r){return Eh(n,e,t,s,o,0,!1,r,!0)}function Th(n,e,t,s,o,r){return Eh(n,e,t,s,o,r,!0)}function Eh(n,e,t,s,o,r,i=!1,a=!1,l=!1){const c=[];for(let g=0;g<e.length;g++)e[g]>o&&c.push({score:e[g],boxIndex:g,suppressBeginIndex:0});c.sort(Cm);const u=r>0?-.5/r:0,h=[],d=[];for(;h.length<t&&c.length>0;){const g=c.pop(),{score:x,boxIndex:b,suppressBeginIndex:w}=g;if(x<o)break;let y=!1;for(let C=h.length-1;C>=w;--C){const $=nS(n,b,h[C]);if($>=s){y=!0;break}if(g.score=g.score*sS(s,u,$),g.score<=o)break}g.suppressBeginIndex=h.length,y||(g.score===x?(h.push(b),d.push(g.score)):g.score>o&&Qk(c,g,Cm))}const p=h.length,f=t-p;a&&f>0&&(h.push(...new Array(f).fill(0)),d.push(...new Array(f).fill(0)));const m={selectedIndices:h};return i&&(m.selectedScores=d),l&&(m.validOutputs=p),m}function nS(n,e,t){const s=n.subarray(e*4,e*4+4),o=n.subarray(t*4,t*4+4),r=Math.min(s[0],s[2]),i=Math.min(s[1],s[3]),a=Math.max(s[0],s[2]),l=Math.max(s[1],s[3]),c=Math.min(o[0],o[2]),u=Math.min(o[1],o[3]),h=Math.max(o[0],o[2]),d=Math.max(o[1],o[3]),p=(a-r)*(l-i),f=(h-c)*(d-u);if(p<=0||f<=0)return 0;const m=Math.max(r,c),g=Math.max(i,u),x=Math.min(a,h),b=Math.min(l,d),w=Math.max(x-m,0)*Math.max(b-g,0);return w/(p+f-w)}function sS(n,e,t){const s=Math.exp(e*t*t);return t<=n?s:0}function Cm(n,e){return n.score-e.score||n.score===e.score&&e.boxIndex-n.boxIndex}function oS(r,i,a){return X(this,arguments,function*(n,e,t,s=.5,o=Number.NEGATIVE_INFINITY){const l=A(n,"boxes","nonMaxSuppressionAsync"),c=A(e,"scores","nonMaxSuppressionAsync"),u=zo(l,c,t,s,o);t=u.maxOutputSize,s=u.iouThreshold,o=u.scoreThreshold;const h=yield Promise.all([l.data(),c.data()]),d=h[0],p=h[1],{selectedIndices:f}=Sh(d,p,t,s,o);return l!==n&&l.dispose(),c!==e&&c.dispose(),Xt(f,"int32")})}const rS=oS;function iS(n,e,t,s=.5,o=Number.NEGATIVE_INFINITY,r=0){const i=A(n,"boxes","nonMaxSuppression"),a=A(e,"scores","nonMaxSuppression"),l=zo(i,a,t,s,o,r);t=l.maxOutputSize,s=l.iouThreshold,o=l.scoreThreshold,r=l.softNmsSigma;const c={boxes:i,scores:a},u={maxOutputSize:t,iouThreshold:s,scoreThreshold:o,softNmsSigma:r},h=M.runKernel(Iu,c,u);return{selectedIndices:h[0],selectedScores:h[1]}}const aS=W({nonMaxSuppressionWithScore_:iS});function lS(i,a,l){return X(this,arguments,function*(n,e,t,s=.5,o=Number.NEGATIVE_INFINITY,r=0){const c=A(n,"boxes","nonMaxSuppressionAsync"),u=A(e,"scores","nonMaxSuppressionAsync"),h=zo(c,u,t,s,o,r);t=h.maxOutputSize,s=h.iouThreshold,o=h.scoreThreshold,r=h.softNmsSigma;const d=yield Promise.all([c.data(),u.data()]),p=d[0],f=d[1],{selectedIndices:m,selectedScores:g}=Th(p,f,t,s,o,r);return c!==n&&c.dispose(),u!==e&&u.dispose(),{selectedIndices:Xt(m,"int32"),selectedScores:Xt(g)}})}const cS=lS;function uS(n,e,t,s=.5,o=Number.NEGATIVE_INFINITY,r=!1){const i=A(n,"boxes","nonMaxSuppression"),a=A(e,"scores","nonMaxSuppression"),l=zo(i,a,t,s,o,null),c=l.maxOutputSize,u=l.iouThreshold,h=l.scoreThreshold,d={boxes:i,scores:a},p={maxOutputSize:c,iouThreshold:u,scoreThreshold:h,padToMaxOutputSize:r},f=M.runKernel(Cu,d,p);return{selectedIndices:f[0],validOutputs:f[1]}}const hS=W({nonMaxSuppressionPadded_:uS});function dS(i,a,l){return X(this,arguments,function*(n,e,t,s=.5,o=Number.NEGATIVE_INFINITY,r=!1){const c=A(n,"boxes","nonMaxSuppressionAsync"),u=A(e,"scores","nonMaxSuppressionAsync"),h=zo(c,u,t,s,o,null),d=h.maxOutputSize,p=h.iouThreshold,f=h.scoreThreshold,[m,g]=yield Promise.all([c.data(),u.data()]),{selectedIndices:x,validOutputs:b}=Nh(m,g,d,p,f,r);return c!==n&&c.dispose(),u!==e&&u.dispose(),{selectedIndices:Xt(x,"int32"),validOutputs:Oe(b,"int32")}})}const pS=dS;function fS(n,e,t=!1,s=!1){const o=A(n,"images","resizeBilinear");S(o.rank===3||o.rank===4,()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${o.rank}.`),S(e.length===2,()=>`Error in resizeBilinear: new shape must 2D, but got shape ${e}.`),S(s===!1||t===!1,()=>"Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false.");let r=o,i=!1;o.rank===3&&(i=!0,r=V(o,[1,o.shape[0],o.shape[1],o.shape[2]]));const a={images:r},l={alignCorners:t,halfPixelCenters:s,size:e},c=M.runKernel(Ga,a,l);return i?V(c,[c.shape[1],c.shape[2],c.shape[3]]):c}const Im=W({resizeBilinear_:fS});function mS(n,e,t=!1,s=!1){const o=A(n,"images","resizeNearestNeighbor");S(o.rank===3||o.rank===4,()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${o.rank}.`),S(e.length===2,()=>`Error in resizeNearestNeighbor: new shape must 2D, but got shape ${e}.`),S(o.dtype==="float32"||o.dtype==="int32",()=>"`images` must have `int32` or `float32` as dtype"),S(s===!1||t===!1,()=>"Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false.");let r=o,i=!1;o.rank===3&&(i=!0,r=V(o,[1,o.shape[0],o.shape[1],o.shape[2]]));const a={images:r},l={alignCorners:t,halfPixelCenters:s,size:e},c=M.runKernel(Ua,a,l);return i?V(c,[c.shape[1],c.shape[2],c.shape[3]]):c}const $m=W({resizeNearestNeighbor_:mS});function gS(n,e="binary",t=!1,s=.5){const o=A(n,"image","threshold"),r=.2989,i=.587,a=.114,l=o.shape[0]*o.shape[1];let c=L(Xt([s]),255),u,h,d,p;if(S(o.rank===3,()=>`Error in threshold: image must be rank 3,but got rank ${o.rank}.`),S(o.shape[2]===3||o.shape[2]===1,()=>`Error in threshold: image color channel must be equal to 3 or 1but got ${o.shape[2]}.`),S(o.dtype==="int32"||o.dtype==="float32",()=>`Error in dtype: image dtype must be int32 or float32,but got dtype ${o.dtype}.`),S(e==="otsu"||e==="binary",()=>`Method must be binary or otsu, but was ${e}`),o.shape[2]===3){[u,h,d]=tn(o,[1,1,1],-1);const g=L(u,r),x=L(h,i),b=L(d,a);p=te(te(g,x),b)}else p=n;if(e==="otsu"){const g=gI(re(um(p),"int32"),Ws([]),256);c=xS(g,l)}const f=t?Po(p,c):Gt(p,c);return re(L(f,255),"int32")}function xS(n,e){let t=Xt([-1]),s=Xt([0]),o=Xt([0]),r,i,a,l,c,u;for(let h=0;h<n.size-1;h++){r=He(n,0,h+1),i=He(n,h+1),c=ge(me(r),e),u=ge(me(i),e);const d=me(L(r,xi(0,r.size)));a=ge(d,me(r));const p=Lo(i.shape,r.size),f=te(xi(0,i.size),p),m=L(i,f);l=ge(me(m),me(i));const g=be(a,l),x=be(a,l),b=L(c,u);o=L(L(b,g),x);const w=Gt(o,s);s=dt(w,o,s),t=dt(w,Xt([h]),t)}return t}const bS=W({threshold_:gS});function yS(n,e,t="nearest",s="constant",o=0,r){const i=A(n,"image","transform","float32"),a=A(e,"transforms","transform","float32");S(i.rank===4,()=>`Error in transform: image must be rank 4,but got rank ${i.rank}.`),S(a.rank===2&&(a.shape[0]===i.shape[0]||a.shape[0]===1)&&a.shape[1]===8,()=>"Error in transform: Input transform should be batch x 8 or 1 x 8"),S(r==null||r.length===2,()=>`Error in transform: outputShape must be [height, width] or null, but got ${r}.`);const l={image:i,transforms:a},c={interpolation:t,fillMode:s,fillValue:o,outputShape:r};return M.runKernel(Au,l,c)}const wS=W({transform_:yS});function CS(n,e,t){const s=A(n,"a","bandPart");S(s.rank>=2,()=>`bandPart(): Rank must be at least 2, got ${s.rank}.`);const o=s.shape,[r,i]=s.shape.slice(-2);let a,l;typeof e=="number"?(S(e%1===0,()=>`bandPart(): numLower must be an integer, got ${e}.`),S(e<=r,()=>`bandPart(): numLower (${e}) must not be greater than the number of rows (${r}).`),a=A(e<0?r:e,"numLower","bandPart")):(S(e.dtype==="int32",()=>"bandPart(): numLower's dtype must be an int32."),a=dt(bl(e,0),r,mi(e,r))),typeof t=="number"?(S(t%1===0,()=>`bandPart(): numUpper must be an integer, got ${t}.`),S(t<=i,()=>`bandPart(): numUpper (${t}) must not be greater than the number of columns (${i}).`),l=A(t<0?i:t,"numUpper","bandPart")):(S(t.dtype==="int32",()=>"bandPart(): numUpper's dtype must be an int32."),l=dt(bl(t,0),i,mi(t,i)));const c=V(xi(0,r,1,"int32"),[-1,1]),u=xi(0,i,1,"int32"),h=be(c,u),d=es(Po(h,a),Qs(h,st(l))),p=ot([r,i],s.dtype);return V(Mn(bs(V(s,[-1,r,i])).map(f=>dt(d,f,p))),o)}const IS=W({bandPart_:CS});function $S(n){let e;if(Array.isArray(n)){e=!1,S(n!=null&&n.length>0,()=>"Gram-Schmidt process: input must not be null, undefined, or empty");const o=n[0].shape[0];for(let r=1;r<n.length;++r)S(n[r].shape[0]===o,()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${n[r].shape[0]} vs. ${o})`)}else e=!0,n=tn(n,n.shape[0],0).map(o=>to(o,[0]));S(n.length<=n[0].shape[0],()=>`Gram-Schmidt: Number of vectors (${n.length}) exceeds number of dimensions (${n[0].shape[0]}).`);const t=[],s=n;for(let o=0;o<n.length;++o)t.push(M.tidy(()=>{let r=s[o];if(o>0)for(let i=0;i<o;++i){const a=L(me(L(t[i],r)),t[i]);r=be(r,a)}return ge(r,gl(r,"euclidean"))}));return e?Mn(t,0):t}const vS=W({gramSchmidt_:$S});function kS(n,e=!1){if(S(n.rank>=2,()=>`qr() requires input tensor to have a rank >= 2, but got rank ${n.rank}`),n.rank===2)return vm(n,e);{const t=n.shape.slice(0,n.shape.length-2).reduce((l,c)=>l*c),s=bs(V(n,[t,n.shape[n.shape.length-2],n.shape[n.shape.length-1]]),0),o=[],r=[];s.forEach(l=>{const[c,u]=vm(l,e);o.push(c),r.push(u)});const i=V(Mn(o,0),n.shape),a=V(Mn(r,0),n.shape);return[i,a]}}function vm(n,e=!1){return M.tidy(()=>{S(n.shape.length===2,()=>`qr2d() requires a 2D Tensor, but got a ${n.shape.length}D Tensor.`);const t=n.shape[0],s=n.shape[1];let o=Kf(t),r=qs(n);const i=wh([[1]],[1,1]);let a=qs(i);const l=t>=s?s:t;for(let c=0;c<l;++c){const u=r,h=a,d=o;[a,r,o]=M.tidy(()=>{const p=He(r,[c,c],[t-c,1]),f=gl(p),m=He(r,[c,c],[1,1]),g=dt(Gt(m,0),wh([[-1]]),wh([[1]])),x=be(m,L(g,f)),b=ge(p,x);b.shape[0]===1?a=qs(i):a=vt([i,He(b,[1,0],[b.shape[0]-1,b.shape[1]])],0);const w=st(ge(Fe(g,x),f)),y=He(r,[c,0],[t-c,s]),C=L(w,a),$=Re(a);if(c===0)r=be(y,Fe(C,Fe($,y)));else{const N=be(y,Fe(C,Fe($,y)));r=vt([He(r,[0,0],[c,s]),N],0)}const v=Re(C),k=He(o,[0,c],[t,o.shape[1]-c]);if(c===0)o=be(k,Fe(Fe(k,a),v));else{const N=be(k,Fe(Fe(k,a),v));o=vt([He(o,[0,0],[t,c]),N],1)}return[a,r,o]}),xe([u,h,d])}return!e&&t>s&&(o=He(o,[0,0],[t,s]),r=He(r,[0,0],[s,s])),[o,r]})}const SS=W({qr_:kS});const ns={flipLeftRight:Uk,grayscaleToRGB:Hk,resizeNearestNeighbor:$m,resizeBilinear:Im,rgbToGrayscale:jk,rotateWithOffset:Xk,cropAndResize:Vk,nonMaxSuppression:Zk,nonMaxSuppressionAsync:rS,nonMaxSuppressionWithScore:aS,nonMaxSuppressionWithScoreAsync:cS,nonMaxSuppressionPadded:hS,nonMaxSuppressionPaddedAsync:pS,threshold:bS,transform:wS},NS={bandPart:IS,gramSchmidt:vS,qr:SS};const TS=new Map,ES=new Map;class Vo{getClassName(){return this.constructor.className}static fromConfig(e,t){return new e(t)}}class cn{constructor(){this.classNameMap={}}static getMap(){return cn.instance==null&&(cn.instance=new cn),cn.instance}static register(e){cn.getMap().classNameMap[e.className]=[e,e.fromConfig]}}function ee(n,e,t){S(n.className!=null,()=>"Class being registered does not have the static className property defined."),S(typeof n.className=="string",()=>"className is required to be a string, but got type "+typeof n.className),S(n.className.length>0,()=>"Class being registered has an empty-string as its className, which is disallowed."),typeof e=="undefined"&&(e="Custom"),typeof t=="undefined"&&(t=n.className);const s=t,o=e+">"+s;return cn.register(n),TS.set(o,n),ES.set(n,o),n}class ys extends Vo{minimize(e,t=!1,s){const{value:o,grads:r}=this.computeGradients(e,s);if(s!=null){const i=s.map(a=>({name:a.name,tensor:r[a.name]}));this.applyGradients(i)}else this.applyGradients(r);return xe(r),t?o:(o.dispose(),null)}get iterations(){return this.iterations_==null&&(this.iterations_=0),this.iterations_}incrementIterations(){this.iterations_=this.iterations+1}computeGradients(e,t){return O$(e,t)}dispose(){this.iterations_!=null&&xe(this.iterations_)}saveIterations(){return X(this,null,function*(){return this.iterations_==null&&(this.iterations_=0),{name:"iter",tensor:Oe(this.iterations_,"int32")}})}getWeights(){return X(this,null,function*(){throw new Error("getWeights() is not implemented for this optimizer yet.")})}setWeights(e){return X(this,null,function*(){throw new Error(`setWeights() is not implemented for this optimizer class ${this.getClassName()}`)})}extractIterations(e){return X(this,null,function*(){return this.iterations_=(yield e[0].tensor.data())[0],e.slice(1)})}}Object.defineProperty(ys,Symbol.hasInstance,{value:n=>n.minimize!=null&&n.computeGradients!=null&&n.applyGradients!=null});class km extends ys{static get className(){return"Adadelta"}constructor(e,t,s=null){super(),this.learningRate=e,this.rho=t,this.epsilon=s,this.accumulatedGrads=[],this.accumulatedUpdates=[],s==null&&(this.epsilon=M.backend.epsilon())}applyGradients(e){(Array.isArray(e)?e.map(s=>s.name):Object.keys(e)).forEach((s,o)=>{const r=M.registeredVariables[s],i=!1;this.accumulatedGrads[o]==null&&(this.accumulatedGrads[o]={originalName:`${s}/accum_grad`,variable:z(()=>Ee(r).variable(i))}),this.accumulatedUpdates[o]==null&&(this.accumulatedUpdates[o]={originalName:`${s}/accum_var`,variable:z(()=>Ee(r).variable(i))});const a=Array.isArray(e)?e[o].tensor:e[s];if(a==null)return;const l=this.accumulatedGrads[o].variable,c=this.accumulatedUpdates[o].variable;z(()=>{const u=te(L(l,this.rho),L(Ke(a),1-this.rho)),h=L(ge(At(te(c,this.epsilon)),At(te(l,this.epsilon))),a),d=te(L(c,this.rho),L(Ke(h),1-this.rho));l.assign(u),c.assign(d);const p=te(L(h,-this.learningRate),r);r.assign(p)})}),this.incrementIterations()}dispose(){this.accumulatedUpdates!=null&&(xe(this.accumulatedGrads.map(e=>e.variable)),xe(this.accumulatedUpdates.map(e=>e.variable)))}getWeights(){return X(this,null,function*(){const e=[...this.accumulatedGrads,...this.accumulatedUpdates];return[yield this.saveIterations()].concat(e.map(t=>({name:t.originalName,tensor:t.variable})))})}setWeights(e){return X(this,null,function*(){e=yield this.extractIterations(e);const t=e.length/2,s=!1;this.accumulatedGrads=e.slice(0,t).map(o=>({originalName:o.name,variable:o.tensor.variable(s)})),this.accumulatedUpdates=e.slice(t,t*2).map(o=>({originalName:o.name,variable:o.tensor.variable(s)}))})}getConfig(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}}static fromConfig(e,t){return new e(t.learningRate,t.rho,t.epsilon)}}class Sm extends ys{static get className(){return"Adagrad"}constructor(e,t=.1){super(),this.learningRate=e,this.initialAccumulatorValue=t,this.accumulatedGrads=[]}applyGradients(e){(Array.isArray(e)?e.map(s=>s.name):Object.keys(e)).forEach((s,o)=>{const r=M.registeredVariables[s];this.accumulatedGrads[o]==null&&(this.accumulatedGrads[o]={originalName:`${s}/accumulator`,variable:z(()=>Lo(r.shape,this.initialAccumulatorValue).variable(!1))});const i=Array.isArray(e)?e[o].tensor:e[s];if(i==null)return;const a=this.accumulatedGrads[o].variable;z(()=>{const l=te(a,Ke(i));a.assign(l);const c=te(L(ge(i,At(te(l,M.backend.epsilon()))),-this.learningRate),r);r.assign(c)})}),this.incrementIterations()}dispose(){this.accumulatedGrads!=null&&xe(this.accumulatedGrads.map(e=>e.variable))}getWeights(){return X(this,null,function*(){return[yield this.saveIterations()].concat(this.accumulatedGrads.map(e=>({name:e.originalName,tensor:e.variable})))})}setWeights(e){return X(this,null,function*(){e=yield this.extractIterations(e);const t=!1;this.accumulatedGrads=e.map(s=>({originalName:s.name,variable:s.tensor.variable(t)}))})}getConfig(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}}static fromConfig(e,t){return new e(t.learningRate,t.initialAccumulatorValue)}}class Nm extends ys{static get className(){return"Adam"}constructor(e,t,s,o=null){super(),this.learningRate=e,this.beta1=t,this.beta2=s,this.epsilon=o,this.accumulatedFirstMoment=[],this.accumulatedSecondMoment=[],z(()=>{this.accBeta1=Oe(t).variable(),this.accBeta2=Oe(s).variable()}),o==null&&(this.epsilon=M.backend.epsilon())}applyGradients(e){const t=Array.isArray(e)?e.map(s=>s.name):Object.keys(e);z(()=>{const s=be(1,this.accBeta1),o=be(1,this.accBeta2);t.forEach((r,i)=>{const a=M.registeredVariables[r],l=!1;this.accumulatedFirstMoment[i]==null&&(this.accumulatedFirstMoment[i]={originalName:`${r}/m`,variable:z(()=>Ee(a).variable(l))}),this.accumulatedSecondMoment[i]==null&&(this.accumulatedSecondMoment[i]={originalName:`${r}/v`,variable:z(()=>Ee(a).variable(l))});const c=Array.isArray(e)?e[i].tensor:e[r];if(c==null)return;const u=this.accumulatedFirstMoment[i].variable,h=this.accumulatedSecondMoment[i].variable,d=te(L(u,this.beta1),L(c,1-this.beta1)),p=te(L(h,this.beta2),L(Ke(c),1-this.beta2)),f=ge(d,s),m=ge(p,o);u.assign(d),h.assign(p);const g=te(L(ge(f,te(At(m),this.epsilon)),-this.learningRate),a);a.assign(g)}),this.accBeta1.assign(L(this.accBeta1,this.beta1)),this.accBeta2.assign(L(this.accBeta2,this.beta2))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&xe(this.accumulatedFirstMoment.map(e=>e.variable)),this.accumulatedSecondMoment!=null&&xe(this.accumulatedSecondMoment.map(e=>e.variable))}getWeights(){return X(this,null,function*(){const e=[...this.accumulatedFirstMoment,...this.accumulatedSecondMoment];return[yield this.saveIterations()].concat(e.map(t=>({name:t.originalName,tensor:t.variable})))})}setWeights(e){return X(this,null,function*(){e=yield this.extractIterations(e),z(()=>{this.accBeta1.assign(Zs(this.beta1,this.iterations_+1)),this.accBeta2.assign(Zs(this.beta2,this.iterations_+1))});const t=e.length/2,s=!1;this.accumulatedFirstMoment=e.slice(0,t).map(o=>({originalName:o.name,variable:o.tensor.variable(s)})),this.accumulatedSecondMoment=e.slice(t,t*2).map(o=>({originalName:o.name,variable:o.tensor.variable(s)}))})}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}}static fromConfig(e,t){return new e(t.learningRate,t.beta1,t.beta2,t.epsilon)}}class Tm extends ys{static get className(){return"Adamax"}constructor(e,t,s,o=null,r=0){super(),this.learningRate=e,this.beta1=t,this.beta2=s,this.epsilon=o,this.decay=r,this.accumulatedFirstMoment=[],this.accumulatedWeightedInfNorm=[],z(()=>{this.iteration=Oe(0).variable(),this.accBeta1=Oe(t).variable()}),o==null&&(this.epsilon=M.backend.epsilon())}applyGradients(e){const t=Array.isArray(e)?e.map(s=>s.name):Object.keys(e);z(()=>{const s=be(1,this.accBeta1),o=ge(-this.learningRate,te(L(this.iteration,this.decay),1));t.forEach((r,i)=>{const a=M.registeredVariables[r],l=!1;this.accumulatedFirstMoment[i]==null&&(this.accumulatedFirstMoment[i]={originalName:`${r}/m`,variable:Ee(a).variable(l)}),this.accumulatedWeightedInfNorm[i]==null&&(this.accumulatedWeightedInfNorm[i]={originalName:`${r}/v`,variable:Ee(a).variable(l)});const c=Array.isArray(e)?e[i].tensor:e[r];if(c==null)return;const u=this.accumulatedFirstMoment[i].variable,h=this.accumulatedWeightedInfNorm[i].variable,d=te(L(u,this.beta1),L(c,1-this.beta1)),p=L(h,this.beta2),f=Lt(c),m=xs(p,f);u.assign(d),h.assign(m);const g=te(L(ge(o,s),ge(d,te(m,this.epsilon))),a);a.assign(g)}),this.iteration.assign(te(this.iteration,1)),this.accBeta1.assign(L(this.accBeta1,this.beta1))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&xe(this.accumulatedFirstMoment.map(e=>e.variable)),this.accumulatedWeightedInfNorm!=null&&xe(this.accumulatedWeightedInfNorm.map(e=>e.variable))}getWeights(){return X(this,null,function*(){throw new Error("getWeights() is not implemented for Adamax yet.")})}setWeights(e){return X(this,null,function*(){throw new Error("setWeights() is not implemented for Adamax yet.")})}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}}static fromConfig(e,t){return new e(t.learningRate,t.beta1,t.beta2,t.epsilon,t.decay)}}class Rh extends ys{static get className(){return"SGD"}constructor(e){super(),this.learningRate=e,this.setLearningRate(e)}applyGradients(e){(Array.isArray(e)?e.map(s=>s.name):Object.keys(e)).forEach((s,o)=>{const r=Array.isArray(e)?e[o].tensor:e[s];if(r==null)return;const i=M.registeredVariables[s];z(()=>{const a=te(L(this.c,r),i);i.assign(a)})}),this.incrementIterations()}setLearningRate(e){this.learningRate=e,this.c!=null&&this.c.dispose(),this.c=Dn(Oe(-e))}dispose(){this.c.dispose()}getWeights(){return X(this,null,function*(){return[yield this.saveIterations()]})}setWeights(e){return X(this,null,function*(){if(e=yield this.extractIterations(e),e.length!==0)throw new Error("SGD optimizer does not have settable weights.")})}getConfig(){return{learningRate:this.learningRate}}static fromConfig(e,t){return new e(t.learningRate)}}class Em extends Rh{static get className(){return"Momentum"}constructor(e,t,s=!1){super(e),this.learningRate=e,this.momentum=t,this.useNesterov=s,this.accumulations=[],this.m=Oe(this.momentum)}applyGradients(e){(Array.isArray(e)?e.map(s=>s.name):Object.keys(e)).forEach((s,o)=>{const r=M.registeredVariables[s];this.accumulations[o]==null&&(this.accumulations[o]={originalName:`${s}/momentum`,variable:z(()=>Ee(r).variable(!1))});const i=this.accumulations[o].variable,a=Array.isArray(e)?e[o].tensor:e[s];a!=null&&z(()=>{let l;const c=te(L(this.m,i),a);this.useNesterov?l=te(L(this.c,te(a,L(c,this.m))),r):l=te(L(this.c,c),r),i.assign(c),r.assign(l)})}),this.incrementIterations()}dispose(){this.m.dispose(),this.accumulations!=null&&xe(this.accumulations.map(e=>e.variable))}setMomentum(e){this.momentum=e}getWeights(){return X(this,null,function*(){return[yield this.saveIterations()].concat(this.accumulations.map(e=>({name:e.originalName,tensor:e.variable})))})}setWeights(e){return X(this,null,function*(){e=yield this.extractIterations(e);const t=!1;this.accumulations=e.map(s=>({originalName:s.name,variable:s.tensor.variable(t)}))})}getConfig(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}}static fromConfig(e,t){return new e(t.learningRate,t.momentum,t.useNesterov)}}class Rm extends ys{static get className(){return"RMSProp"}constructor(e,t=.9,s=0,o=null,r=!1){if(super(),this.learningRate=e,this.decay=t,this.momentum=s,this.epsilon=o,this.accumulatedMeanSquares=[],this.accumulatedMoments=[],this.accumulatedMeanGrads=[],this.centered=r,o==null&&(this.epsilon=M.backend.epsilon()),e==null)throw new Error("learningRate for RMSPropOptimizer must be defined.")}applyGradients(e){(Array.isArray(e)?e.map(s=>s.name):Object.keys(e)).forEach((s,o)=>{const r=M.registeredVariables[s],i=!1;this.accumulatedMeanSquares[o]==null&&(this.accumulatedMeanSquares[o]={originalName:`${s}/rms`,variable:z(()=>Ee(r).variable(i))}),this.accumulatedMoments[o]==null&&(this.accumulatedMoments[o]={originalName:`${s}/momentum`,variable:z(()=>Ee(r).variable(i))}),this.accumulatedMeanGrads[o]==null&&this.centered&&(this.accumulatedMeanGrads[o]={originalName:`${s}/mg`,variable:z(()=>Ee(r).variable(i))});const a=Array.isArray(e)?e[o].tensor:e[s];if(a==null)return;const l=this.accumulatedMeanSquares[o].variable,c=this.accumulatedMoments[o].variable;z(()=>{const u=te(L(l,this.decay),L(Ke(a),1-this.decay));if(this.centered){const h=this.accumulatedMeanGrads[o].variable,d=te(L(h,this.decay),L(a,1-this.decay)),p=ge(L(a,this.learningRate),At(be(u,te(Ke(d),this.epsilon)))),f=te(L(c,this.momentum),p);l.assign(u),h.assign(d),c.assign(f);const m=be(r,f);r.assign(m)}else{const h=te(L(l,this.decay),L(Ke(a),1-this.decay)),d=te(L(c,this.momentum),ge(L(a,this.learningRate),At(te(h,this.epsilon))));l.assign(h),c.assign(d);const p=be(r,d);r.assign(p)}})}),this.incrementIterations()}dispose(){this.accumulatedMeanSquares!=null&&xe(this.accumulatedMeanSquares.map(e=>e.variable)),this.accumulatedMeanGrads!=null&&this.centered&&xe(this.accumulatedMeanGrads.map(e=>e.variable)),this.accumulatedMoments!=null&&xe(this.accumulatedMoments.map(e=>e.variable))}getWeights(){return X(this,null,function*(){const e=[...this.accumulatedMeanSquares,...this.accumulatedMoments];return this.centered&&e.push(...this.accumulatedMeanGrads),[yield this.saveIterations()].concat(e.map(t=>({name:t.originalName,tensor:t.variable})))})}setWeights(e){return X(this,null,function*(){e=yield this.extractIterations(e);const t=this.centered?e.length/3:e.length/2,s=!1;this.accumulatedMeanSquares=e.slice(0,t).map(o=>({originalName:o.name,variable:o.tensor.variable(s)})),this.accumulatedMoments=e.slice(t,t*2).map(o=>({originalName:o.name,variable:o.tensor.variable(s)})),this.centered&&(this.accumulatedMeanGrads=e.slice(t*2,t*3).map(o=>({originalName:o.name,variable:o.tensor.variable(s)})))})}getConfig(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}}static fromConfig(e,t){return new e(t.learningRate,t.decay,t.momentum,t.epsilon,t.centered)}}const RS=[km,Sm,Nm,Tm,Em,Rm,Rh];function AS(){for(const n of RS)ee(n)}const DS="model",FS=".json",_S=".weights.bin";function Am(n){return new Promise(e=>setTimeout(e)).then(n)}class so{constructor(e){if(!U().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");e.startsWith(so.URL_SCHEME)&&(e=e.slice(so.URL_SCHEME.length)),(e==null||e.length===0)&&(e=DS),this.modelJsonFileName=e+FS,this.weightDataFileName=e+_S}save(e){return X(this,null,function*(){if(typeof document=="undefined")throw new Error("Browser downloads are not supported in this environment since `document` is not present");const t=Yn.join(e.weightData),s=window.URL.createObjectURL(new Blob([t],{type:"application/octet-stream"}));if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");{const o=[{paths:["./"+this.weightDataFileName],weights:e.weightSpecs}],r=Nf(e,o),i=window.URL.createObjectURL(new Blob([JSON.stringify(r)],{type:"application/json"})),a=this.modelJsonAnchor==null?document.createElement("a"):this.modelJsonAnchor;if(a.download=this.modelJsonFileName,a.href=i,yield Am(()=>a.dispatchEvent(new MouseEvent("click"))),e.weightData!=null){const l=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor;l.download=this.weightDataFileName,l.href=s,yield Am(()=>l.dispatchEvent(new MouseEvent("click")))}return{modelArtifactsInfo:hl(e)}}})}}so.URL_SCHEME="downloads://";const OS=n=>U().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(so.URL_SCHEME)?LS(n.slice(so.URL_SCHEME.length)):null;ut.registerSaveRouter(OS);function LS(n="model"){return new so(n)}function Dm(n,e,t,s){i(n),t=t==null?0:t,s=s==null?1:s,a(t,s);let o=0;const r=l=>(l.then(c=>{const u=t+ ++o/n.length*(s-t);return e(u),c}),l);function i(l){S(l!=null&&Array.isArray(l)&&l.length>0,()=>"promises must be a none empty array")}function a(l,c){S(l>=0&&l<=1,()=>`Progress fraction must be in range [0, 1], but got startFraction ${l}`),S(c>=0&&c<=1,()=>`Progress fraction must be in range [0, 1], but got endFraction ${c}`),S(c>=l,()=>`startFraction must be no more than endFraction, but got startFraction ${l} and endFraction ${c}`)}return Promise.all(n.map(r))}function MS(n,e){return X(this,null,function*(){e==null&&(e={});const t=e.fetchFunc==null?U().platform.fetch:e.fetchFunc,s=n.map(h=>t(h,e.requestInit,{isBinary:!0})),a=(e.onProgress==null?yield Promise.all(s):yield Dm(s,e.onProgress,0,.5)).map(h=>h.arrayBuffer());return e.onProgress==null?yield Promise.all(a):yield Dm(a,e.onProgress,.5,1)})}function PS(n,e){var t;const s=e.fetchFunc==null?U().platform.fetch:e.fetchFunc;let o=0,r;return(t=e.onProgress)===null||t===void 0||t.call(e,0),new ReadableStream({pull:i=>X(null,null,function*(){for(var a;o<n.length;){r||(r=(yield s(n[o],e.requestInit,{isBinary:!0})).body.getReader());const{done:l,value:c}=yield r.read();if(l){o++,r=void 0,(a=e.onProgress)===null||a===void 0||a.call(e,o/n.length);continue}i.enqueue(c);return}i.close()})})}const BS="application/octet-stream",zS="application/json";class Ah{constructor(e,t){if(this.DEFAULT_METHOD="POST",t==null&&(t={}),this.weightPathPrefix=t.weightPathPrefix,this.weightUrlConverter=t.weightUrlConverter,t.fetchFunc!=null?(S(typeof t.fetchFunc=="function",()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"),this.fetch=t.fetchFunc):this.fetch=U().platform.fetch,S(e!=null&&e.length>0,()=>"URL path for http must not be null, undefined or empty."),Array.isArray(e)&&S(e.length===2,()=>`URL paths for http must have a length of 2, (actual length is ${e.length}).`),this.path=e,t.requestInit!=null&&t.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=t.requestInit||{},this.loadOptions=t}save(e){return X(this,null,function*(){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");const t=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);t.body=new FormData;const s=[{paths:["./model.weights.bin"],weights:e.weightSpecs}],o=Nf(e,s);if(t.body.append("model.json",new Blob([JSON.stringify(o)],{type:zS}),"model.json"),e.weightData!=null){const i=Yn.join(e.weightData);t.body.append("model.weights.bin",new Blob([i],{type:BS}),"model.weights.bin")}const r=yield this.fetch(this.path,t);if(r.ok)return{modelArtifactsInfo:hl(e),responses:[r]};throw new Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${r.status}.`)})}loadModelJSON(){return X(this,null,function*(){const e=yield this.fetch(this.path,this.requestInit);if(!e.ok)throw new Error(`Request to ${this.path} failed with status code ${e.status}. Please verify this URL points to the model JSON of the model to load.`);let t;try{t=yield e.json()}catch(r){let i=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(".pb")?i+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":i+=" Please make sure the server is serving valid JSON for this request.",new Error(i)}const s=t.modelTopology,o=t.weightsManifest;if(s==null&&o==null)throw new Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return t})}load(){return X(this,null,function*(){if(this.loadOptions.streamWeights)return this.loadStream();const e=yield this.loadModelJSON();return Jw(e,t=>this.loadWeights(t))})}loadStream(){return X(this,null,function*(){const e=yield this.loadModelJSON(),t=yield this.getWeightUrls(e.weightsManifest),s=Tf(e.weightsManifest),o=()=>PS(t,this.loadOptions);return Object.assign(Object.assign({},e),{weightSpecs:s,getWeightStream:o})})}getWeightUrls(e){return X(this,null,function*(){const t=Array.isArray(this.path)?this.path[1]:this.path,[s,o]=VS(t),r=this.weightPathPrefix||s,i=[],a=[];for(const l of e)for(const c of l.paths)this.weightUrlConverter!=null?a.push(this.weightUrlConverter(c)):i.push(r+c+o);return this.weightUrlConverter&&i.push(...yield Promise.all(a)),i})}loadWeights(e){return X(this,null,function*(){const t=yield this.getWeightUrls(e),s=Tf(e),o=yield MS(t,this.loadOptions);return[s,o]})}}Ah.URL_SCHEME_REGEX=/^https?:\/\//;function VS(n){const e=n.lastIndexOf("/"),t=n.lastIndexOf("?"),s=n.substring(0,e),o=t>e?n.substring(t):"";return[s+"/",o]}function Fm(n){return n.match(Ah.URL_SCHEME_REGEX)!=null}const _m=(n,e)=>{if(typeof fetch=="undefined"&&(e==null||e.fetchFunc==null))return null;{let t=!0;if(Array.isArray(n)?t=n.every(s=>Fm(s)):t=Fm(n),t)return Om(n,e)}return null};ut.registerSaveRouter(_m),ut.registerLoadRouter(_m);function Om(n,e){return new Ah(n,e)}function WS(n,e){return Om(n,e)}function Dh(n,e){const t=n.shape.length,s=e.shape.length;if(t<1)throw new Error(`tf.gatherND() expects the input to be rank 1 or higher, but the rank was ${t}.`);if(s<1)throw new Error(`tf.gatherND() expects the indices to be rank 1 or higher, but the rank was ${s}.`);if(e.dtype!=="int32")throw new Error(`tf.gatherND() expects the indices to be int32 type, but the dtype was ${e.dtype}.`);if(e.shape[s-1]>t)throw new Error(`index innermost dimension length must be <= tensor rank; saw: ${e.shape[s-1]} vs. ${t}`);if(j(n.shape)===0)throw new Error(`Requested more than 0 entries, but input is empty. Input shape: ${n.shape}.`);const o=e.shape,r=o[o.length-1];let i=1;for(let h=0;h<o.length-1;++h)i*=o[h];const a=n.shape,l=o.slice();l.pop();let c=1;for(let h=r;h<t;++h)c*=a[h],l.push(a[h]);const u=[...fe(n.shape).map(h=>h/c),1].slice(0,r);return[l,i,c,u]}const Fh=-2,US=-1;function Lm(n,e,t){const s=n.shape.length;S(s===e.length,()=>`Error in slice${s}D: Length of begin ${e} must match the rank of the array (${s}).`),S(s===t.length,()=>`Error in slice${s}D: Length of size ${t} must match the rank of the array (${s}).`);for(let o=0;o<s;++o)S(e[o]+t[o]<=n.shape[o],()=>`Error in slice${s}D: begin[${o}] + size[${o}] (${e[o]+t[o]}) would overflow input.shape[${o}] (${n.shape[o]})`)}function Mm(n,e,t){const s=[];for(let o=0;o<n.length;o++)s[o]=Math.ceil((e[o]-n[o])/t[o]);return s}function Pm(n,e,t){let s=t.length;for(let o=0;o<t.length;o++)if(t[o]>1){s=o;break}for(let o=s+1;o<t.length;o++)if(e[o]>0||t[o]!==n[o])return!1;return!0}function Bm(n,e){let t=n.length>0?n[n.length-1]:1;for(let s=0;s<n.length-1;s++)t+=n[s]*e[s];return t}function _h(n,e,t){let s;const o=n.shape.length;typeof e=="number"?s=[e,...new Array(o-1).fill(0)]:e.length<o?s=e.concat(new Array(o-e.length).fill(0)):s=e.slice(),s.forEach(i=>{S(i!==-1,()=>"slice() does not support negative begin indexing.")});let r;return t==null?r=new Array(o).fill(-1):typeof t=="number"?r=[t,...new Array(o-1).fill(-1)]:t.length<o?r=t.concat(new Array(o-t.length).fill(-1)):r=t,r=r.map((i,a)=>i>=0?i:(S(i===-1,()=>`Negative size values should be exactly -1 but got ${i} for the slice() size at index ${a}.`),n.shape[a]-s[a])),[s,r]}function zm(n,e,t,s,o,r,i,a,l){let c;if(s==null?(c=new Array(e.length),c.fill(1)):c=s,i!=null&&(i&i-1)!==0)throw new Error("Multiple ellipses in slice is not allowed.");let u=!1;const h={dims:c.length,numAddAxisAfterEllipsis:0,begin:e.slice(),end:t.slice(),strides:c.slice(),beginMask:o,endMask:r,ellipsisMask:i,newAxisMask:a,shrinkAxisMask:l};for(let w=0;w<h.dims;w++)u&&(1<<w&a)!==0&&h.numAddAxisAfterEllipsis++,1<<w&i&&(u=!0);u||(h.ellipsisMask|=1<<h.dims,h.dims++);const d={dims:n.length,beginMask:0,endMask:0,beginValid:!1,endValid:!1};GS(h,d);let p=!0,f=!0,m=!0;const g=[],x=[];for(let w=0;w<n.length;++w){if(d.strides[w]===0)throw Error(`strides[${w}] must be non-zero`);const y=!!(d.shrinkAxisMask&1<<w),C=n[w];if(C===-1){g.push(y?1:-1);continue}const $=[d.beginMask&1<<w,d.endMask&1<<w],v=[d.strides[w]>0?0:-1,d.strides[w]>0?C:C-1];if(y&&d.strides[w]<=0)throw Error("only stride 1 allowed on non-range indexing.");m=m&&d.strides[w]===1;const k=!!(d.beginMask&1<<w&&d.endMask&1<<w);if(d.beginValid&&d.endValid){if(y){const E=d.begin[w]<0?C+d.begin[w]:d.begin[w];if(d.begin[w]=E,d.end[w]=d.begin[w]+1,E<0||E>=C)throw Error(`slice index ${d.begin[w]} of dimension ${w} out of bounds.`)}else d.begin[w]=Vm(d.begin[w],0,d.strides[w],C,$,v),d.end[w]=Vm(d.end[w],1,d.strides[w],C,$,v);const I=d.strides[w]===1&&d.begin[w]===0&&d.end[w]===C;p=p&&I,f=f&&(w===0&&d.strides[w]===1||I)}else p=p&&d.strides[w]===1&&k,f=f&&(w===0&&d.strides[w]===1||k);let N,T=!1;if(d.beginValid&&d.endValid?(N=d.end[w]-d.begin[w],T=!0):y?(N=1,T=!0):k&&C>=0&&(d.strides[w]<0?N=-C:N=C,T=!0),T){let I;N===0||N<0!=d.strides[w]<0?I=0:I=Math.trunc(N/d.strides[w])+(N%d.strides[w]!==0?1:0),g.push(I)}else g.push(-1)}for(let w=0;w<d.finalShapeGatherIndices.length;++w){const y=d.finalShapeGatherIndices[w];y>=0?x.push(g[y]):y===Fh&&x.push(1)}return{finalShapeSparse:x.filter((w,y)=>d.finalShapeGatherIndices[y]!==Fh),finalShape:x,isIdentity:p,sliceDim0:f,isSimpleSlice:m,begin:d.begin,end:d.end,strides:d.strides}}function GS(n,e){e.beginMask=0,e.endMask=0,e.shrinkAxisMask=0;let t=0;e.beginValid=n.begin!=null,e.endValid=n.end!=null,e.begin=new Array(e.dims),e.end=new Array(e.dims),e.strides=new Array(e.dims),e.finalShapeGatherIndices=[],e.finalShapeGatherIndicesSparse=[],e.inputShapeGatherIndicesSparse=new Array(e.dims);for(let s=0;s<n.dims;s++)if(1<<s&n.ellipsisMask){const o=Math.min(e.dims-(n.dims-s)+1+n.numAddAxisAfterEllipsis,e.dims);for(;t<o;t++)e.begin[t]=0,e.end[t]=0,e.strides[t]=1,e.beginMask|=1<<t,e.endMask|=1<<t,e.finalShapeGatherIndices.push(t),e.finalShapeGatherIndicesSparse.push(-1),e.inputShapeGatherIndicesSparse[t]=s}else if(1<<s&n.newAxisMask)e.finalShapeGatherIndices.push(Fh),e.finalShapeGatherIndicesSparse.push(-1);else{if(t===e.begin.length)throw Error(`Index out of range using input dim ${t}; input has only ${e.dims} dims, ${e.begin.length}.`);n.begin!=null&&(e.begin[t]=n.begin[s]),n.end!=null&&(e.end[t]=n.end[s]),e.strides[t]=n.strides[s],n.beginMask&1<<s&&(e.beginMask|=1<<t),n.endMask&1<<s&&(e.endMask|=1<<t),n.shrinkAxisMask&1<<s?(e.finalShapeGatherIndices.push(US),e.finalShapeGatherIndicesSparse.push(-1),e.shrinkAxisMask|=1<<t):(e.finalShapeGatherIndices.push(t),e.finalShapeGatherIndicesSparse.push(s)),e.inputShapeGatherIndicesSparse[t]=s,t++}}function Vm(n,e,t,s,o,r){if(o[e])return t>0?r[e]:r[e+1&1];{const i=n<0?s+n:n;return i<r[0]?r[0]:i>r[1]?r[1]:i}}class HS{static sgd(e){return new Rh(e)}static momentum(e,t,s=!1){return new Em(e,t,s)}static rmsprop(e,t=.9,s=0,o=null,r=!1){return new Rm(e,t,s,o,r)}static adam(e=.001,t=.9,s=.999,o=null){return new Nm(e,t,s,o)}static adadelta(e=.001,t=.95,s=null){return new km(e,t,s)}static adamax(e=.002,t=.9,s=.999,o=null,r=0){return new Tm(e,t,s,o,r)}static adagrad(e,t=.1){return new Sm(e,t)}}const Wo=HS;const qS=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:typeof setImmediate!="undefined"?setImmediate:n=>n();function Wm(){return new Promise(n=>qS(()=>n()))}function Oh(n,e){const t=n[0].length;n.forEach((o,r)=>{S(o.length===t,()=>`Error in concat${t}D: rank of tensors[${r}] must be the same as the rank of the rest (${t})`)}),S(e>=0&&e<t,()=>`Error in concat${t}D: axis must be between 0 and ${t-1}.`);const s=n[0];n.forEach((o,r)=>{for(let i=0;i<t;i++)S(i===e||o[i]===s[i],()=>`Error in concat${t}D: Shape of tensors[${r}] (${o}) does not match the shape of the rest (${s}) along the non-concatenated axis ${r}.`)})}function Pn(n,e){const t=n[0].slice();for(let s=1;s<n.length;s++)t[e]+=n[s][e];return t}var In;(function(n){n[n.FIRST_DIM_SIZE=0]="FIRST_DIM_SIZE",n[n.VALUE_ROWIDS=1]="VALUE_ROWIDS",n[n.ROW_LENGTHS=2]="ROW_LENGTHS",n[n.ROW_SPLITS=3]="ROW_SPLITS",n[n.ROW_LIMITS=4]="ROW_LIMITS",n[n.ROW_STARTS=5]="ROW_STARTS"})(In||(In={}));function Um(n,e,t){let s=new Array;if(t==null&&e==null)return s;if(e==null)for(;s.length<n+t.length;)s.push(-1);else s=e.slice();if(t==null)return s;if(n+t.length!==s.length)throw new Error(`rt input.shape and shape=${e} are incompatible: rt input.rank = ${n+t.length}, but shape.rank = ${s.length}`);for(let o=1;o<t.length;++o){const r=t[o],i=s[s.length-t.length+o],a=s[i];if(r>=0)if(a>=0){if(a!==r)throw new Error(`rt input.shape and shape=${e} are incompatible: rt input.shape[${o+n}] = ${r} but shape[${o+n}] = ${a}`)}else s[i]=r}return s}function Gm(n){const e={FIRST_DIM_SIZE:In.FIRST_DIM_SIZE,VALUE_ROWIDS:In.VALUE_ROWIDS,ROW_LENGTHS:In.ROW_LENGTHS,ROW_SPLITS:In.ROW_SPLITS,ROW_LIMITS:In.ROW_LIMITS,ROW_STARTS:In.ROW_STARTS},t=[];for(const s of n)if(s in e)t.push(e[s]);else break;return t}function Hm(n){return n.length===0?0:n[0]===In.FIRST_DIM_SIZE?n.length-1:n.length}function qm(n,e){if(n==null||e==null)return;const t=n.length,s=e.length;if(t>=s)throw new Error(`defaultValue.shape=${n} and ragged tensor flatValues.shape=${e}, are incompatible: defaultValue.rank = ${t} must be less than ragged tensor input flatValues.rank = ${s})`);for(let o=0;o<Math.min(t,s-1);++o){const r=n[o],i=e[o+1];if(r>=0&&i>=0&&r!==1&&r!==i)throw new Error(`defaultValue.shape=${n}, and ragged tensor input flatValues.shape=${e} are incompatible: defaultValue.shape[${o-n.length}] = ${r} but ragged tensor input.flatValues.shape[${o-n.length}] = ${i}`)}}const Lh=30;function Al(n){return n<=Lh?n:zc(n,Math.floor(Math.sqrt(n)))}function Mh(n,e,t){const s=t*(typeof n=="number"?n:n[0]),o=e*(typeof n=="number"?n:n[1]);return[s,o]}function yi(n,e,t,s=!0){let o=[];if(s)o=o.concat(e.slice(0)),o.push(n[0]/t),o=o.concat(n.slice(1));else{o=o.concat(n[0]);const r=e.length;for(let i=0;i<r;++i)o=o.concat([n[i+1]/e[i],e[i]]);o=o.concat(n.slice(r+1))}return o}function wi(n,e,t=!0){const s=[];if(t){s.push(e);for(let o=e+1;o<n;++o)o<=2*e?(s.push(o),s.push(o-(e+1))):s.push(o)}else{const o=[],r=[];for(let i=1;i<n;++i)i>=e*2+1||i%2===1?r.push(i):o.push(i);s.push(...o),s.push(0),s.push(...r)}return s}function Ci(n,e,t,s=!0){const o=[];s?o.push(n[0]/t):o.push(n[0]*t);for(let r=1;r<n.length;++r)r<=e.length?s?o.push(e[r-1]*n[r]):o.push(n[r]/e[r-1]):o.push(n[r]);return o}function Ph(n,e){const t=[0];for(let s=0;s<e;++s)t.push(n[s][0]);return t}function Bh(n,e,t){const s=n.slice(0,1);for(let o=0;o<t;++o)s.push(n[o+1]-e[o][0]-e[o][1]);return s}const Dl=1.7580993408473768,Fl=1.0507009873554805;const zh=.3275911,Vh=.254829592,Wh=-.284496736,Uh=1.421413741,Gh=-1.453152027,Hh=1.061405429;function ss(n,e){if(n.length!==e.length)throw new Error(`Cannot merge real and imag arrays of different lengths. real:${n.length}, imag: ${e.length}.`);const t=new Float32Array(n.length*2);for(let s=0;s<t.length;s+=2)t[s]=n[s/2],t[s+1]=e[s/2];return t}function jm(n){const e=new Float32Array(n.length/2),t=new Float32Array(n.length/2);for(let s=0;s<n.length;s+=2)e[s/2]=n[s],t[s/2]=n[s+1];return{real:e,imag:t}}function Km(n){const e=Math.ceil(n.length/4),t=new Float32Array(e),s=new Float32Array(e);for(let o=0;o<n.length;o+=4)t[Math.floor(o/4)]=n[o],s[Math.floor(o/4)]=n[o+1];return{real:t,imag:s}}function Xm(n){const e=Math.floor(n.length/4),t=new Float32Array(e),s=new Float32Array(e);for(let o=2;o<n.length;o+=4)t[Math.floor(o/4)]=n[o],s[Math.floor(o/4)]=n[o+1];return{real:t,imag:s}}function qh(n,e){const t=n[e*2],s=n[e*2+1];return{real:t,imag:s}}function Ym(n,e,t,s){n[s*2]=e,n[s*2+1]=t}function Zm(n,e){const t=new Float32Array(n/2),s=new Float32Array(n/2);for(let o=0;o<Math.ceil(n/2);o++){const r=(e?2:-2)*Math.PI*(o/n);t[o]=Math.cos(r),s[o]=Math.sin(r)}return{real:t,imag:s}}function Qm(n,e,t){const s=(t?2:-2)*Math.PI*(n/e),o=Math.cos(s),r=Math.sin(s);return{real:o,imag:r}}const jh="->",jS=/->/g,Jm=",",eg="...";function Kh(n,e){n=n.replace(/\s/g,"");const t=(n.length-n.replace(jS,"").length)/jh.length;if(t<1)throw new Error("Equations without an arrow are not supported.");if(t>1)throw new Error(`Equation must contain exactly one arrow ("${jh}").`);const[s,o]=n.split(jh);S(s.indexOf(eg)===-1,()=>`The ellipsis notation ("${eg}") is not supported yet.`);const r=s.split(Jm),i=r.length;if(e!==i)throw new Error(`Expected ${i} input tensors, received ${e}`);if(i>2)throw new Error("Support for more than 2 input tensors is not implemented yet.");const a=[];for(let d=0;d<o.length;++d){const p=o[d];if(!r.some(f=>f.indexOf(p)!==-1))throw new Error(`Output subscripts contain the label ${p} not present in the input subscripts.`);a.indexOf(p)===-1&&a.push(p)}for(let d=0;d<s.length;++d){const p=s[d];a.indexOf(p)===-1&&p!==Jm&&a.push(p)}const l=new Array(r.length);for(let d=0;d<i;++d){if(new Set(r[d].split("")).size!==r[d].length)throw new Error(`Found duplicate axes in input component ${r[d]}. Support for duplicate axes in input is not implemented yet.`);l[d]=[];for(let p=0;p<r[d].length;++p)l[d].push(a.indexOf(r[d][p]))}const c=a.length,u=o.length,h=[];for(let d=u;d<c;++d)h.push(d);return{allDims:a,summedDims:h,idDims:l}}function Xh(n,e){let t=new Array(n);t.fill(-1);for(let o=0;o<e.length;++o)t[e[o]]=o;const s=[];for(let o=0;o<n;++o)t[o]===-1&&s.push(o);return t=t.filter(o=>o!==-1),{permutationIndices:t,expandDims:s}}function Yh(n,e,t){const s=new Array(n);for(let o=0;o<t.length;++o){const r=t[o].shape;for(let i=0;i<e[o].length;++i)s[e[o][i]]===void 0?s[e[o][i]]=r[i]:S(s[e[o][i]]===r[i],()=>`Expected dimension ${s[e[o][i]]} at axis ${i} of input shaped ${JSON.stringify(r)}, but got dimension ${r[i]}`)}}function Zh(n,e){const t=n,s=[];let o=0;n.length===0&&t.push(-1),o=n.length+1;for(let i=0;i<o;++i)s.push([]);const r=[];for(let i=0;i<t.length;++i){const a=t[i],l=KS(e,a);for(const c of l)r.indexOf(c)===-1&&(s[i].push(c),r.push(c))}return{path:t,steps:s}}function Qh(n){return n.every((e,t)=>e===t)}function KS(n,e){const t=[];for(let s=0;s<n.length;++s)(n[s].length===0||n[s].indexOf(e)!==-1||e===-1)&&t.push(s);return t}function Jh(n,e,t=0){let s=[];if(typeof e=="number")S(n.shape[t]%e===0,()=>"Number of splits must evenly divide the axis."),s=new Array(e).fill(n.shape[t]/e);else{const o=e.reduce((i,a)=>(a===-1&&(i+=1),i),0);S(o<=1,()=>"There should be only one negative value in split array.");const r=e.indexOf(-1);if(r!==-1){const i=e.reduce((a,l)=>l>0?a+l:a);e[r]=n.shape[t]-i}S(n.shape[t]===e.reduce((i,a)=>i+a),()=>"The sum of sizes must match the size of the axis dimension."),s=e}return s}function tg(n){return`Received SparseTensor with denseShape[0] = 0 but
  indices.shape[0] = ${n}`}function ng(n,e){return`indices(${n}, 0) is invalid: ${e} < 0`}function sg(n,e,t){return`indices(${n}, 0) is invalid: ${e} >= ${t}`}function og(n,e){return`only one output dimension may be -1, not both ${n} and ${e}`}function rg(n,e){return`size ${n} must be non-negative, not ${e}`}function ig(){return"reshape cannot infer the missing input size for an empty tensor unless all specified input sizes are non-zero"}function ag(n,e){const t=j(n),s=j(e);return`Input to reshape is a SparseTensor with ${t}
  dense values, but the requested shape requires a multiple of ${s}. inputShape=${n} outputShape= ${e}`}function lg(n,e){const t=j(n),s=j(e);return`Input to reshape is a tensor with ${t} dense values, but the requested shape has ${s}. inputShape=${n} outputShape=${e}`}function ed(){return"segment ids must be >= 0"}function cg(){return"segment ids are not increasing"}function ug(n,e){return`Segment id ${n} out of range [0, ${e}), possibly because segmentIds input is not sorted.`}function hg(n,e,t){return`Bad: indices[${n}] == ${e} out of range [0, ${t})`}function XS(n,e){let t=!1,s;for(n<=Lh?(s=n,t=!0):s=zc(n,Math.floor(Math.sqrt(n)));!t;)s>e||s===n?t=!0:s=zc(n,s+1);return s}function YS(n,e,t){const s=[],o=n.length;for(let r=0;r<o;r++)r!==e?s.push(n[r]):s.push(t);return s}function dg(n,e,t,s){const o=e.shape.length,r=n.shape.length;if(s!==0&&(s<-o||s>o))throw new Error(`Expect batchDims in the range of [-${o}, ${o}], but got ${s}`);if(s<0&&(s+=o),s>r)throw new Error(`batchDims (${s}) must be less than rank(x) (
    ${r}).`);if(t<s)throw new Error(`batchDims (${s}) must be less than or equal to axis (${t}).`);for(let h=0;h<s;++h)if(n.shape[h]!==e.shape[h])throw new Error(`x.shape[${h}]: ${n.shape[h]} should be equal to indices.shape[${h}]: ${e.shape[h]}.`);const i=n.shape[t],a=[];let l=1,c=1,u=1;for(let h=0;h<s;++h)a.push(n.shape[h]),l*=n.shape[h];for(let h=s;h<t;h++)a.push(n.shape[h]),c*=n.shape[h];for(let h=s;h<o;h++)a.push(e.shape[h]);for(let h=t+1;h<r;h++)a.push(n.shape[h]),u*=n.shape[h];return{batchSize:l,sliceSize:u,outerSize:c,dimSize:i,outputShape:a}}function os(n){try{return n.map(e=>ps(e))}catch(e){throw new Error(`Failed to decode encoded string bytes into utf-8, error: ${e}`)}}function pg(n){return n.map(e=>ds(e))}var ZS=Object.freeze({__proto__:null,ERF_A1:Vh,ERF_A2:Wh,ERF_A3:Uh,ERF_A4:Gh,ERF_A5:Hh,ERF_P:zh,PARALLELIZE_THRESHOLD:Lh,get RowPartitionType(){return In},SELU_SCALE:Fl,SELU_SCALEALPHA:Dl,applyActivation:vh,assertAndGetBroadcastShape:we,assertAxesAreInnerMostDims:kt,assertParamsConsistent:Oh,assignToTypedArray:Ym,axesAreInnerMostDims:rh,calculateShapes:no,checkEinsumDimSizes:Yh,checkPadOnDimRoundingMode:Wt,combineLocations:qf,combineRaggedTensorToTensorShapes:Um,complexWithEvenIndex:Km,complexWithOddIndex:Xm,computeConv2DInfo:$t,computeConv3DInfo:ms,computeDefaultPad:Zu,computeDilation2DInfo:li,computeOptimalWindowSize:Al,computeOutAndReduceShapes:yt,computeOutShape:Pn,computePool2DInfo:an,computePool3DInfo:Qn,convertConv2DDataFormat:Jn,decodeEinsumEquation:Kh,eitherStridesOrDilationsAreOne:Rt,expandShapeToKeepDim:at,exponent:Qm,exponents:Zm,fromStringArrayToUint8:pg,fromUint8ToStringArray:os,getAxesPermutation:Ze,getBroadcastDims:Mo,getComplexWithIndex:qh,getEinsumComputePath:Zh,getEinsumPermutation:Xh,getFusedBiasGradient:$h,getFusedDyActivation:Ih,getImageCenter:Mh,getInnerMostAxes:nt,getPermuted:wi,getRaggedRank:Hm,getReductionAxes:ht,getReshaped:yi,getReshapedPermuted:Ci,getRowPartitionTypesHelper:Gm,getSliceBeginCoords:Ph,getSliceSize:Bh,getSparseFillEmptyRowsIndicesDenseShapeMismatch:tg,getSparseFillEmptyRowsNegativeIndexErrorMessage:ng,getSparseFillEmptyRowsOutOfRangeIndexErrorMessage:sg,getSparseReshapeEmptyTensorZeroOutputDimErrorMessage:ig,getSparseReshapeInputOutputMismatchErrorMessage:lg,getSparseReshapeInputOutputMultipleErrorMessage:ag,getSparseReshapeMultipleNegativeOneOutputDimErrorMessage:og,getSparseReshapeNegativeOutputDimErrorMessage:rg,getSparseSegmentReductionIndicesOutOfRangeErrorMessage:hg,getSparseSegmentReductionNegativeSegmentIdsErrorMessage:ed,getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage:cg,getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage:ug,getUndoAxesPermutation:gs,isIdentityPermutation:Qh,mergeRealAndImagArrays:ss,prepareAndValidate:Dh,prepareSplitSize:Jh,shouldFuse:kh,splitRealAndImagArrays:jm,stridesOrDilationsArePositive:Xs,tupleValuesAreOne:Ks,upcastType:Kt,validateDefaultValueShape:qm,warn:Jt});AS();const fg={kernelName:ta,inputsToSave:["x"],gradFunc:(n,e)=>{const[t]=e;return{x:()=>L(n,bi(re(t,"float32"),-1))}}};const QS={kernelName:cr,inputsToSave:["x"],gradFunc:(n,e)=>{const[t]=e;return{x:()=>{const s=Ke(re(t,"float32")),o=At(be(Oe(1),s));return st(ge(n,o))}}}};const JS={kernelName:ur,inputsToSave:["x"],gradFunc:(n,e)=>{const[t]=e;return{x:()=>{const s=At(be(Ke(re(t,"float32")),1));return ge(n,s)}}}};const e2={kernelName:To,inputsToSave:["a","b"],gradFunc:(n,e)=>{const[t,s]=e,o=we(t.shape,s.shape);return{a:()=>{let a=n;const l=ht(t.shape,o);return l.length>0&&(a=me(a,l)),V(a,t.shape)},b:()=>{let a=n;const l=ht(s.shape,o);return l.length>0&&(a=me(a,l)),V(a,s.shape)}}}};const t2={kernelName:Hc,saveAllInputs:!0,gradFunc:(n,e)=>{const t={};return e.forEach((s,o)=>{t[o]=()=>n.clone()}),t}};const n2={kernelName:na,inputsToSave:["x"],gradFunc:(n,e)=>{const[t]=e;return{x:()=>Ee(t)}}};const s2={kernelName:sa,inputsToSave:["x"],gradFunc:(n,e)=>{const[t]=e;return{x:()=>Ee(t)}}};const o2={kernelName:hr,inputsToSave:["x"],gradFunc:(n,e)=>{const[t]=e;return{x:()=>ge(n,At(be(Oe(1),Ke(re(t,"float32")))))}}};const r2={kernelName:dr,inputsToSave:["x"],gradFunc:(n,e)=>{const[t]=e;return{x:()=>{const s=At(te(Oe(1),Ke(re(t,"float32"))));return ge(n,s)}}}};const i2={kernelName:mr,inputsToSave:["a","b"],gradFunc:(n,e)=>{const[t,s]=e,o=we(t.shape,s.shape);return{a:()=>{const a=te(Ke(t),Ke(s));let l=L(n,ge(s,a));const c=ht(t.shape,o);return c.length>0&&(l=me(l,c)),V(l,t.shape)},b:()=>{const a=te(Ke(t),Ke(s));let l=st(L(n,ge(t,a)));const c=ht(s.shape,o);return c.length>0&&(l=me(l,c)),V(l,s.shape)}}}};const a2={kernelName:pr,inputsToSave:["x"],gradFunc:(n,e)=>{const[t]=e;return{x:()=>ge(n,te(Ke(re(t,"float32")),1))}}};const l2={kernelName:fr,inputsToSave:["x"],gradFunc:(n,e)=>{const[t]=e;return{x:()=>ge(n,be(Oe(1),Ke(re(t,"float32"))))}}};function c2(n,e,t,s,o,r){const i=A(n,"dy","avgPool3dGrad"),a=A(e,"input","avgPool3dGrad");let l=i,c=a,u=!1;a.rank===4&&(u=!0,l=V(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]]),c=V(a,[1,a.shape[0],a.shape[1],a.shape[2],a.shape[3]])),S(l.rank===5,()=>`Error in avgPool3dGrad: dy must be rank 5 but got rank ${l.rank}.`),S(c.rank===5,()=>`Error in avgPool3dGrad: input must be rank 5 but got rank ${c.rank}.`),Wt("avgPool3dGrad",o,r);const h={dy:l,input:c},d={filterSize:t,strides:s,pad:o,dimRoundingMode:r},p=M.runKernel(Xc,h,d);return u?V(p,[p.shape[1],p.shape[2],p.shape[3],p.shape[4]]):p}const u2=W({avgPool3dGrad_:c2});const h2={kernelName:ra,inputsToSave:["x"],gradFunc:(n,e,t)=>{const[s]=e,{filterSize:o,strides:r,pad:i,dimRoundingMode:a}=t;return{x:()=>u2(n,s,o,r,i,a)}}};function d2(n,e,t,s,o){const r=A(n,"dy","avgPoolGrad"),i=A(e,"input","avgPoolGrad");S(i.rank===r.rank,()=>`Rank of input (${i.rank}) does not match rank of dy (${r.rank})`);let a=i,l=r,c=!1;i.rank===3&&(c=!0,a=V(i,[1,i.shape[0],i.shape[1],i.shape[2]]),l=V(r,[1,r.shape[0],r.shape[1],r.shape[2]])),S(l.rank===4,()=>`Error in avgPoolGrad: dy must be rank 4 but got rank ${l.rank}.`),S(a.rank===4,()=>`Error in avgPoolGrad: input must be rank 4 but got rank ${a.rank}.`);const u={dy:l,input:a},h={filterSize:t,strides:s,pad:o},d=M.runKernel(Kc,u,h);return c?V(d,[d.shape[1],d.shape[2],d.shape[3]]):d}const p2=W({avgPoolGrad_:d2});const f2={kernelName:oa,inputsToSave:["x"],gradFunc:(n,e,t)=>{const[s]=e,{filterSize:o,strides:r,pad:i}=t;return{x:()=>p2(n,s,o,r,i)}}};const m2={kernelName:ia,inputsToSave:["a","b"],gradFunc:(n,e,t)=>{const[s,o]=e,{transposeA:r,transposeB:i}=t;return!r&&!i?{a:()=>Fe(n,o,!1,!0),b:()=>Fe(s,n,!0,!1)}:!r&&i?{a:()=>Fe(n,o,!1,!1),b:()=>Fe(n,s,!0,!1)}:r&&!i?{a:()=>Fe(o,n,!1,!0),b:()=>Fe(s,n,!1,!1)}:{a:()=>Fe(o,n,!0,!0),b:()=>Fe(n,s,!0,!0)}}};const g2={kernelName:aa,gradFunc:(n,e,t)=>{const{blockShape:s,crops:o}=t;return{x:()=>dh(n,s,o)}}};const x2={kernelName:uw,gradFunc:(n,e,t)=>{const s=t,o=s.inputShape,r=s.shape,i=Array.from(r);for(let l=o.length-1;l>=0;l--)if(o[l]===r[l])i[l]=1;else if(o[l]!==1)throw new Error(`broadcastTo(): [${o}] cannot be broadcast to [${r}].`);const a=[];for(let l=0;l<i.length;l++)i[l]>1&&a.push(l);return{x:()=>me(n,a,!0)}}};const b2={kernelName:gr,gradFunc:n=>({x:()=>n.clone()})};const y2={kernelName:xr,gradFunc:n=>({x:()=>Ee(n)})};const w2={kernelName:br,inputsToSave:["x"],gradFunc:(n,e,t)=>{const[s]=e,{clipValueMin:o,clipValueMax:r}=t;return{x:()=>dt(es(Qs(s,o),Po(s,r)),n,Ee(n))}}};const C2={kernelName:la,inputsToSave:["x"],gradFunc:fg.gradFunc};const I2={kernelName:ca,saveAllInputs:!0,gradFunc:(n,e,t)=>{const s=e.map(l=>l.shape),{axis:o}=t,r=ve(o,e[0].shape)[0],i=s.map(l=>l[r]);return tn(n,i,r).map(l=>()=>l)}};const $2={kernelName:ua,inputsToSave:["x","filter"],gradFunc:(n,e,t)=>{const[s,o]=e,{dilations:r,strides:i,pad:a,dataFormat:l}=t;return S(Ks(r),()=>`Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${r}'`),{x:()=>th(s.shape,n,o,i,a,l),filter:()=>Ch(s,n,o.shape,i,a,l)}}};const v2={kernelName:ha,inputsToSave:["dy","filter"],gradFunc:(n,e,t)=>{const[s,o]=e,{strides:r,pad:i,dataFormat:a,dimRoundingMode:l}=t;return{dy:()=>Ys(n,o,r,i,a,1,l),filter:()=>Ch(n,s,o.shape,r,i,a,l)}}};function k2(n,e,t,s,o){let r=n;n.rank===4&&(r=V(n,[1,n.shape[0],n.shape[1],n.shape[2],n.shape[3]]));let i=e;i.rank===4&&(i=V(e,[1,e.shape[0],e.shape[1],e.shape[2],e.shape[3]])),S(r.rank===5,()=>`Error in conv3dDerFilter: input must be rank 5, but got shape ${r.shape}.`),S(i.rank===5,()=>`Error in conv3dDerFilter: dy must be rank 5, but got shape ${i.shape}.`),S(t.length===5,()=>`Error in conv3dDerFilter: filterShape must be length 5, but got ${t}.`),S(r.shape[4]===t[3],()=>`Error in conv3dDerFilter: depth of input ${r.shape[4]}) must match input depth in filter (${t[3]}.`),S(i.shape[4]===t[4],()=>`Error in conv3dDerFilter: depth of dy (${i.shape[4]}) must match output depth for filter (${t[4]}).`);const a={x:r,dy:i},l={strides:s,pad:o,filterShape:t};return M.runKernel(eu,a,l)}const S2=W({conv3DBackpropFilter_:k2});const N2={kernelName:da,inputsToSave:["x","filter"],gradFunc:(n,e,t)=>{const{dilations:s,strides:o,pad:r}=t;S(Ks(s),()=>`Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${s}'`);const[i,a]=e;return{x:()=>zf(i.shape,n,a,o,r),filter:()=>S2(i,n,a.shape,o,r)}}};const T2={kernelName:yr,inputsToSave:["x"],gradFunc:(n,e)=>{const[t]=e;return{x:()=>L(st(pm(re(t,"float32"))),n)}}};const E2={kernelName:wr,inputsToSave:["x"],gradFunc:(n,e)=>{const[t]=e;return{x:()=>L(fm(re(t,"float32")),n)}}};const R2={kernelName:pa,inputsToSave:["x"],gradFunc:(n,e,t)=>{const[s]=e,{axis:o,exclusive:r,reverse:i}=t;return{x:()=>{const a=Ze([o],s.rank);let l=Uf(n,o,r,!i);return a!=null&&(l=Re(l,a)),l}}}};const A2={kernelName:fa,inputsToSave:["x","filter"],gradFunc:(n,e,t)=>{const{dilations:s,strides:o,pad:r,dimRoundingMode:i}=t,a=s==null?[1,1]:s;S(Ks(a),()=>`Error in gradient of depthwiseConv2dNative: dilation rates greater than 1 are not yet supported. Got dilations '${a}'`);const[l,c]=e;return S(l.rank===4,()=>`Error in gradient of depthwiseConv2dNative: input must be rank 4, but got rank ${l.rank}.`),S(c.rank===4,()=>`Error in gradient of depthwiseConv2dNative: filter must be rank 4, but got rank ${c.rank}.`),S(l.shape[3]===c.shape[2],()=>`Error in gradient of depthwiseConv2d: number of input channels (${l.shape[3]}) must match the inChannels dimension in filter ${c.shape[2]}.`),S(Rt(o,a),()=>`Error in gradient of depthwiseConv2d: Either strides or dilations must be  1. Got strides ${o} and dilations '${a}'.`),Wt("depthwiseConv2d",r,i),{x:()=>Pk(l.shape,n,c,o,r,a,i),filter:()=>Lk(l,n,c.shape,o,r,a,i)}}};const D2={kernelName:ma,inputsToSave:["x","filter"],gradFunc:(n,e,t)=>{const[s,o]=e,r={x:s,filter:o,dy:n},i={x:s,filter:o,dy:n};return{x:()=>M.runKernel(lu,r,t),filter:()=>M.runKernel(cu,i,t)}}};const F2={kernelName:Ir,outputsToSave:[!0],gradFunc:(n,e)=>{const[t]=e,s={dy:n,y:t};return{x:()=>M.runKernel(hu,s)}}};const _2={kernelName:$r,inputsToSave:["x"],gradFunc:(n,e)=>{const[t]=e,s=L(On(st(Ke(t))),2/Math.sqrt(Math.PI));return{x:()=>L(n,s)}}};const O2={kernelName:vr,outputsToSave:[!0],gradFunc:(n,e)=>{const[t]=e;return{x:()=>L(n,t)}}};const L2={kernelName:xa,inputsToSave:["input"],gradFunc:(n,e)=>{const[t]=e;return{input:()=>V(n,t.shape)}}};const M2={kernelName:kr,inputsToSave:["x"],gradFunc:(n,e)=>{const[t]=e;return{x:()=>L(n,On(t))}}};const P2={kernelName:Sr,gradFunc:n=>({x:()=>Ee(n)})};const B2={kernelName:Nr,inputsToSave:["a","b"],gradFunc:(n,e)=>{const[t,s]=e,o=we(t.shape,s.shape);return{a:()=>{const a=ge(n,re(s,"float32")),l=ht(t.shape,o);return l.length>0?V(me(a,l),t.shape):a},b:()=>{let a=L(n,re(t,"float32"));const l=ht(s.shape,o);l.length>0&&(a=V(me(a,l),s.shape));const c=Ke(s);return st(ge(a,re(c,"float32")))}}}};const z2={kernelName:ba,inputsToSave:["x","mean","variance","scale"],gradFunc:(n,e,t)=>{const{varianceEpsilon:s}=t,[o,r,i,a]=e,l=a==null?Oe(1):a,c=ht(r.shape,o.shape),u=[];if(r.rank===1){for(let y=0;y<o.shape.length-1;++y)u.push(o.shape[y]);u.push(1)}const h=be(o,r),d=L(n,l),p=El(te(i,Oe(s))),f=L(L(L(p,p),p),Oe(-.5));return{x:()=>r.rank===1?V(L(L(n,Cn(V(p,[1,1,1,r.shape[0]]),u)),l),o.shape):V(L(L(n,p),l),o.shape),mean:()=>{let y=L(L(p,Oe(-1)),d);return r.rank===1&&(y=me(y,c)),V(y,r.shape)},variance:()=>{let y=L(L(f,h),d);return r.rank===1&&(y=me(y,c)),V(y,r.shape)},scale:()=>{const y=L(h,p);let C=L(n,y);return r.rank===1&&(C=me(C,c)),V(C,r.shape)},offset:()=>{let y=n;return r.rank===1&&(y=me(y,c)),V(y,r.shape)}}}};const V2={kernelName:ya,inputsToSave:["x","indices"],gradFunc:(n,e,t)=>{const[s,o]=e,{axis:r,batchDims:i}=t,a=ve(r,s.shape)[0],l=(c,u,h)=>()=>{const d=c.shape,p=u.size,f=d.slice(0,a),m=f.length,g=d.slice(r,d.length).slice(1),x=g.length,b=mg(0,m),w=mg(m+1,m+1+x),y=gg([f,[p],g]),C=V(h,y),$=V(u,[p]),v=gg([[m],b,w]),k=Re(C,v);let N=bm(k,$,c.shape[a]);const T=gs(v);return N=Re(N,T),N};if(i===1){const c=s.shape[0],u=s.split(c,0);return{x:()=>Mn(u.map((p,f)=>l(p,o.slice(f,1),n.slice(f,1))())).reshape(s.shape),indices:()=>o}}else return{x:l(s,o,n),indices:()=>o}}};function mg(n,e){const t=[];for(let s=n;s<e;++s)t.push(s);return t}function gg(n){const e=[];for(let t=0;t<n.length;++t)for(let s=0;s<n[t].length;++s)e.push(n[t][s]);return e}const W2={kernelName:Tr,inputsToSave:["a","b"],gradFunc:(n,e)=>{const[t,s]=e;return{a:()=>Ee(t),b:()=>Ee(s)}}};const U2={kernelName:Er,gradFunc:n=>({x:()=>re(n,"float32")})};const G2={kernelName:Rr,gradFunc:n=>({x:()=>Ee(n)})};const H2={kernelName:Ar,gradFunc:n=>({x:()=>Ee(n)})};const q2={kernelName:Dr,gradFunc:n=>({x:()=>Ee(n)})};const j2={kernelName:Ca,inputsToSave:["x"],gradFunc:(n,e,t)=>{const[s]=e,{alpha:o}=t,r=Gt(s,0);return{x:()=>dt(r,n,L(n,o))}}};const K2={kernelName:_r,inputsToSave:["x"],gradFunc:(n,e)=>{const[t]=e;return{x:()=>ge(n,te(t,1))}}};const X2={kernelName:Fr,inputsToSave:["x"],gradFunc:(n,e)=>{const[t]=e;return{x:()=>ge(n,re(t,"float32"))}}};const Y2={kernelName:dw,inputsToSave:[],outputsToSave:[!0],gradFunc:(n,e,t)=>{const[s]=e,{axis:o}=t;return{logits:()=>{const i=On(s);return be(n,L(me(n,o,!0),i))}}}};function Z2(n,e,t,s=5,o=1,r=1,i=.5){const a={x:n,y:e,dy:t},l={depthRadius:s,bias:o,alpha:r,beta:i};return M.runKernel(xu,a,l)}const Q2=W({localResponseNormalizationBackprop_:Z2});const J2={kernelName:Na,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(n,e,t)=>{const[s,o]=e,{depthRadius:r,bias:i,alpha:a,beta:l}=t;return{x:()=>Q2(s,o,n,r,i,a,l)}}};function xg(n,e,t,s){return e.rank<t.rank&&(e=V(e,at(e.shape,s))),n.rank<t.rank&&(n=V(n,at(n.shape,s))),{x:()=>L(n,re(_n(t,e),n.dtype))}}const bg={kernelName:Ta,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(n,e,t)=>{const s=t,{reductionIndices:o}=s,r=e[0],i=e[1],a=ve(o,r.shape),l=xg(n,i,r,a);return{x:()=>l.x()}}};const eN={kernelName:Or,inputsToSave:["a","b"],gradFunc:(n,e)=>{const[t,s]=e;return{a:()=>L(n,re(Qs(t,s),"float32")),b:()=>L(n,re(bl(t,s),"float32"))}}};function tN(n,e,t,s,o,r,i){const a=A(n,"dy","maxPool3dGrad"),l=A(e,"input","maxPool3dGrad"),c=A(t,"output","maxPool3dGrad");let u=a,h=l,d=c,p=!1;l.rank===4&&(p=!0,u=V(a,[1,a.shape[0],a.shape[1],a.shape[2],a.shape[3]]),h=V(l,[1,l.shape[0],l.shape[1],l.shape[2],l.shape[3]]),d=V(c,[1,c.shape[0],c.shape[1],c.shape[2],c.shape[3]])),S(u.rank===5,()=>`Error in maxPool3dGrad: dy must be rank 5 but got rank ${u.rank}.`),S(h.rank===5,()=>`Error in maxPool3dGrad: input must be rank 5 but got rank ${h.rank}.`),S(d.rank===5,()=>`Error in maxPool3dGrad: output must be rank 5 but got rank ${d.rank}.`),Wt("maxPool3dGrad",r,i);const f={dy:u,input:h,output:d},m={filterSize:s,strides:o,pad:r,dimRoundingMode:i},g=M.runKernel(yu,f,m);return p?V(g,[g.shape[1],g.shape[2],g.shape[3],g.shape[4]]):g}const nN=W({maxPool3dGrad_:tN});const sN={kernelName:Ra,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(n,e,t)=>{const[s,o]=e,{filterSize:r,strides:i,pad:a,dimRoundingMode:l}=t;return{x:()=>nN(n,s,o,r,i,a,l)}}};function oN(n,e,t,s,o,r,i){const a=A(n,"dy","maxPoolGrad"),l=A(e,"input","maxPoolGrad"),c=A(t,"output","maxPoolGrad");S(l.rank===a.rank,()=>`Rank of input (${l.rank}) does not match rank of dy (${a.rank})`),S(a.rank===4,()=>`Error in maxPoolGrad: dy must be rank 4 but got rank ${a.rank}.`),S(l.rank===4,()=>`Error in maxPoolGrad: input must be rank 4 but got rank ${l.rank}.`),Wt("maxPoolGrad",r,i);const u={dy:a,input:l,output:c},h={filterSize:s,strides:o,pad:r,dimRoundingMode:i};return M.runKernel(bu,u,h)}const rN=W({maxPoolGrad_:oN});const iN={kernelName:Ea,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(n,e,t)=>{const[s,o]=e,{filterSize:r,strides:i,pad:a}=t;return{x:()=>rN(n,s,o,r,i,a)}}};const aN={kernelName:Aa,inputsToSave:["x"],gradFunc:(n,e,t)=>{const[s]=e,{axis:o}=t,r=ve(o,s.shape),a=yt(s.shape,r)[1],l=j(a);return{x:()=>{const u=s.shape.slice();r.forEach(p=>{u[p]=1});const h=V(n,u);return ge(L(h,ts(s.shape,"float32")),l)}}}};const lN={kernelName:Da,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(n,e,t)=>{const s=t,{axis:o}=s,[r,i]=e,a=ve(o,r.shape),l=xg(n,i,r,a);return{x:()=>l.x()}}};const cN={kernelName:Lr,inputsToSave:["a","b"],gradFunc:(n,e)=>{const[t,s]=e;return{a:()=>L(n,re(Po(t,s),"float32")),b:()=>L(n,re(Gt(t,s),"float32"))}}};const uN={kernelName:Fa,inputsToSave:["x"],gradFunc:(n,e,t)=>{const s=e[0],{paddings:o}=t,r=o.map(i=>i[0]);return{x:()=>He(n,r,s.shape)}}};const hN={kernelName:Mr,inputsToSave:["a","b"],gradFunc:(n,e)=>{const[t,s]=e,o=we(t.shape,s.shape);return{a:()=>{const a=ht(t.shape,o);return a.length>0?V(me(n,a),t.shape):n},b:()=>{const a=L(n,st(xl(ge(t,s)))),l=ht(s.shape,o);return l.length>0?V(me(a,l),s.shape):a}}}};const dN={kernelName:Pr,inputsToSave:["a","b"],gradFunc:(n,e)=>{const[t,s]=e,o=we(t.shape,s.shape);return{a:()=>{const a=L(n,re(s,"float32")),l=ht(t.shape,o);return l.length>0?V(me(a,l),t.shape):a},b:()=>{const a=L(n,re(t,"float32")),l=ht(s.shape,o);return l.length>0?V(me(a,l),s.shape):a}}}};const pN={kernelName:_a,gradFunc:n=>({x:()=>st(n)})};const fN={kernelName:Ma,inputsToSave:["indices"],gradFunc:(n,e)=>{const t=e[0];return{indices:()=>ot(t.shape,"float32")}}};const mN={kernelName:La,gradFunc:n=>({x:()=>Ee(n)})};const gN={kernelName:Pa,saveAllInputs:!0,gradFunc:(n,e,t)=>{const{axis:s}=t;return bs(n,s).map(r=>()=>r)}};const yg={kernelName:Ba,inputsToSave:["x"],gradFunc:(n,e,t)=>{const s=e[0],{paddings:o}=t,r=o.map(i=>i[0]);return{x:()=>He(n,r,s.shape)}}};const xN={kernelName:Br,inputsToSave:["a","b"],outputsToSave:[!0],gradFunc:(n,e)=>{const[t,s,o]=e,r=t,i=s,a=we(r.shape,i.shape);return{a:()=>{const u=re(i,"float32");let h=L(n,L(u,Zs(r,be(u,Oe(1)))));const d=ht(r.shape,a);return d.length>0&&(h=me(h,d)),V(h,r.shape)},b:()=>{const u=Gt(r,0),h=dt(u,Ln(r),Ee(r));let d=L(n,L(o,h));const p=ht(i.shape,a);return p.length>0&&(d=me(d,p)),V(d,i.shape)}}}};const bN={kernelName:za,inputsToSave:["x","alpha"],gradFunc:(n,e)=>{const[t,s]=e,o=Gt(t,0);return{x:()=>dt(o,n,L(n,s)),alpha:()=>{let r=dt(o,Ee(n),L(n,t));const i=ht(s.shape,n.shape);return i.length>0&&(r=me(r,i)),V(r,s.shape)}}}};function yN(n,e,t){const s=n.shape.slice();s[t]=1;const o=V(e,s),r=sh(n,t,!0,!1),i=sh(n,t,!0,!0),a=L(r,i);return L(o,a)}function wN(n,e,t){const s=n.shape.length,o=s-t.length,r=Ze(t,s);let i=n;r!=null&&(i=Re(n,r));const a=i.shape.slice(),c=a.splice(s-t.length,t.length).reduce((d,p)=>d*p,1);a.push(c);const u=i.reshape(a);let h=yN(u,e,o);if(h=h.reshape(i.shape),r!=null){const d=gs(r);h=Re(h,d)}return h}const CN={kernelName:Va,inputsToSave:["x"],gradFunc:(n,e,t)=>{const[s]=e,{axis:o}=t;let r=[];return o==null?r=s.shape.map((i,a)=>a):typeof o=="number"?r=[o]:r=o,{x:()=>wN(s,n,r)}}};const IN={kernelName:Cr,inputsToSave:["a","b"],gradFunc:(n,e)=>{const[t,s]=e,o=we(t.shape,s.shape);return{a:()=>{const a=ge(n,re(s,"float32")),l=ht(t.shape,o);return l.length>0?V(me(a,l),t.shape):a},b:()=>{let a=L(n,re(t,"float32"));const l=ht(s.shape,o);l.length>0&&(a=V(me(a,l),s.shape));const c=Ke(s);return st(ge(a,re(c,"float32")))}}}};const $N={kernelName:zr,inputsToSave:["x"],gradFunc:(n,e)=>{const[t]=e;return{x:()=>ge(n,st(Ke(t)))}}};const vN={kernelName:Wr,inputsToSave:["x"],gradFunc:(n,e)=>{const[t]=e,s=L(Po(t,6),bi(t));return{x:()=>L(n,re(s,"float32"))}}};const kN={kernelName:Vr,inputsToSave:["x"],gradFunc:(n,e)=>{const[t]=e;return{x:()=>L(n,re(bi(t),"float32"))}}};const SN={kernelName:Wa,inputsToSave:["x"],gradFunc:(n,e)=>{const[t]=e;return{x:()=>V(n,t.shape)}}};const NN={kernelName:Ga,inputsToSave:["images"],gradFunc:(n,e,t)=>{const[s]=e,o={dy:n,images:s};return{images:()=>M.runKernel(Su,o,t)}}};const TN={kernelName:Ua,inputsToSave:["images"],gradFunc:(n,e,t)=>{const[s]=e,o={dy:n,images:s};return{images:()=>M.runKernel(ku,o,t)}}};const EN={kernelName:Ha,gradFunc:(n,e,t)=>{const{dims:s}=t,o=ve(s,n.shape);return{x:()=>eo(n,o)}}};const RN={kernelName:Ur,gradFunc:n=>({x:()=>Ee(n)})};const AN={kernelName:Gr,inputsToSave:["x"],gradFunc:(n,e)=>{const[t]=e;return{x:()=>st(ge(n,L(Zs(t,1.5),2)))}}};const DN={kernelName:qa,inputsToSave:["condition"],gradFunc:(n,e)=>{const[t]=e;return{condition:()=>re(Ee(t),"float32"),t:()=>L(n,re(t,n.dtype)),e:()=>L(n,re(ch(t),n.dtype))}}};const FN={kernelName:Hr,inputsToSave:["x"],gradFunc:(n,e)=>{const[t]=e;return{x:()=>{const s=Gt(t,Oe(0)),o=Oe(Dl),r=Oe(Fl),i=L(n,r),a=L(L(n,o),On(re(t,"float32")));return dt(s,i,a)}}}};const _N={kernelName:Xr,outputsToSave:[!0],gradFunc:(n,e)=>{const[t]=e;return{x:()=>L(n,L(t,be(Oe(1),t)))}}};const ON={kernelName:Kr,gradFunc:n=>({x:()=>Ee(n)})};const LN={kernelName:qr,inputsToSave:["x"],gradFunc:(n,e)=>{const[t]=e;return{x:()=>L(nh(re(t,"float32")),n)}}};const MN={kernelName:jr,inputsToSave:["x"],gradFunc:(n,e)=>{const[t]=e;return{x:()=>L(Wf(re(t,"float32")),n)}}};const PN={kernelName:ja,inputsToSave:["x"],gradFunc:(n,e,t)=>{const[s]=e,{begin:o,size:r}=t,i=s.shape,[a,l]=_h(s,o,r),c=[];for(let u=0;u<n.rank;u++)c.push([a[u],i[u]-a[u]-l[u]]);return{x:()=>hh(n,c)}}};const BN={kernelName:Za,outputsToSave:[!0],gradFunc:(n,e,t)=>{const[s]=e,{dim:o}=t,r=!0,i=L(n,s);return{logits:()=>be(i,L(me(i,[o],r),s))}}};const zN={kernelName:Yr,inputsToSave:["x"],gradFunc:(n,e)=>{const[t]=e;return{x:()=>L(n,Oo(t))}}};const wg={kernelName:Xa,gradFunc:(n,e,t)=>{const{blockShape:s,paddings:o}=t;return{x:()=>eh(n,s,o)}}};const Cg={kernelName:Ya,gradFunc:(n,e,t)=>{const{axis:s}=t;return{x:()=>vt(n,s)}}};const VN={kernelName:Zr,inputsToSave:["x"],gradFunc:(n,e)=>{const[t]=e;return{x:()=>ge(n,L(At(re(t,"float32")),2))}}};const WN={kernelName:Nu,inputsToSave:["x"],gradFunc:(n,e)=>{const[t]=e;return{x:()=>L(n,L(re(t,"float32"),2))}}};const UN={kernelName:Qr,inputsToSave:["a","b"],gradFunc:(n,e)=>{const[t,s]=e,o=Oe(2);return{a:()=>L(n,L(o,be(t,s))),b:()=>L(n,L(o,be(s,t)))}}};const GN={kernelName:si,gradFunc:n=>({x:()=>Ee(n)})};const HN={kernelName:Jr,inputsToSave:["a","b"],gradFunc:(n,e)=>{const[t,s]=e,o=we(t.shape,s.shape);return{a:()=>{let a=n;const l=ht(t.shape,o);return l.length>0&&(a=me(a,l)),V(a,t.shape)},b:()=>{let a=n;const l=ht(s.shape,o);return l.length>0&&(a=me(a,l)),V(st(a),s.shape)}}}};const qN={kernelName:Ka,inputsToSave:["x"],gradFunc:(n,e,t)=>{const[s]=e,o=s.shape.slice(),{axis:r}=t;ve(r,s.shape).forEach(c=>{o[c]=1});const a=V(n,o),l=L(a,ts(s.shape,"float32"));return{x:()=>l}}};const jN={kernelName:ei,inputsToSave:["x"],gradFunc:(n,e)=>{const[t]=e;return{x:()=>ge(n,Ke(nh(t)))}}};const KN={kernelName:ti,outputsToSave:[!0],gradFunc:(n,e)=>{const[t]=e;return{x:()=>L(be(Oe(1),Ke(t)),n)}}};const XN={kernelName:ni,inputsToSave:["x"],gradFunc:(n,e,t)=>{const[s]=e,{reps:o}=t;return{x:()=>{let i=Ee(s);if(s.rank===1)for(let a=0;a<o[0];++a)i=te(i,He(n,[a*s.shape[0]],[s.shape[0]]));else if(s.rank===2)for(let a=0;a<o[0];++a)for(let l=0;l<o[1];++l)i=te(i,He(n,[a*s.shape[0],l*s.shape[1]],[s.shape[0],s.shape[1]]));else if(s.rank===3)for(let a=0;a<o[0];++a)for(let l=0;l<o[1];++l)for(let c=0;c<o[2];++c)i=te(i,He(n,[a*s.shape[0],l*s.shape[1],c*s.shape[2]],[s.shape[0],s.shape[1],s.shape[2]]));else if(s.rank===4)for(let a=0;a<o[0];++a)for(let l=0;l<o[1];++l)for(let c=0;c<o[2];++c)for(let u=0;u<o[3];++u)i=te(i,He(n,[a*s.shape[0],l*s.shape[1],c*s.shape[2],u*s.shape[3]],[s.shape[0],s.shape[1],s.shape[2],s.shape[3]]));else throw new Error(`Gradient for tile operation is not implemented for rank-${s.rank} tensors yet.`);return i}}}};const YN={kernelName:Eo,gradFunc:(n,e,t)=>{const s=t,{perm:o}=s,r=gs(o);return{x:()=>Re(n,r)}}};const ZN={kernelName:Qa,gradFunc:(n,e,t)=>{const s=t,{axis:o}=s;return{value:()=>Mn(n,o)}}};const QN={kernelName:Ja,inputsToSave:["segmentIds"],gradFunc:(n,e)=>{const[t]=e;return{x:()=>JN(n,t)}}};function JN(n,e){const t=xs(e,Ee(e)),s=ih(n,t);let o=Qs(e,Oe(0,"int32"));const r=s.rank-o.rank;for(let a=0;a<r;++a)o=Ut(o,a+1);o=es(o,ts(s.shape,"bool"));const i=Ee(s);return dt(o,s,i)}const eT={kernelName:el,gradFunc:n=>({x:()=>Ee(n)})};const tT=[fg,QS,JS,e2,t2,n2,s2,o2,r2,i2,a2,l2,h2,f2,m2,g2,x2,b2,y2,w2,C2,I2,v2,$2,N2,T2,E2,R2,A2,D2,IN,F2,_2,O2,L2,M2,B2,P2,z2,V2,W2,U2,G2,H2,q2,j2,K2,X2,Y2,J2,bg,bg,eN,sN,iN,aN,lN,cN,uN,hN,dN,pN,fN,mN,gN,yg,yg,xN,bN,CN,$N,vN,kN,SN,NN,TN,EN,RN,AN,DN,FN,_N,ON,LN,MN,PN,BN,zN,wg,wg,Cg,Cg,VN,UN,WN,GN,HN,qN,jN,KN,XN,YN,ZN,QN,eT];for(const n of tT)fw(n);q().prototype.abs=function(){return this.throwIfDisposed(),Lt(this)};q().prototype.acos=function(){return this.throwIfDisposed(),EC(this)};q().prototype.acosh=function(){return this.throwIfDisposed(),AC(this)};q().prototype.add=function(n){return this.throwIfDisposed(),te(this,n)};q().prototype.all=function(n,e){return this.throwIfDisposed(),Mf(this,n,e)};q().prototype.any=function(n,e){return this.throwIfDisposed(),Yu(this,n,e)};q().prototype.argMax=function(n){return this.throwIfDisposed(),js(this,n)};q().prototype.argMin=function(n){return this.throwIfDisposed(),LC(this,n)};q().prototype.asScalar=function(){return this.throwIfDisposed(),S(this.size===1,()=>"The array must have only 1 element."),V(this,[])};q().prototype.asType=function(n){return this.throwIfDisposed(),re(this,n)};q().prototype.as1D=function(){return this.throwIfDisposed(),V(this,[this.size])};q().prototype.as2D=function(n,e){return this.throwIfDisposed(),V(this,[n,e])};q().prototype.as3D=function(n,e,t){return this.throwIfDisposed(),V(this,[n,e,t])};q().prototype.as4D=function(n,e,t,s){return this.throwIfDisposed(),V(this,[n,e,t,s])};q().prototype.as5D=function(n,e,t,s,o){return this.throwIfDisposed(),V(this,[n,e,t,s,o])};q().prototype.asin=function(){return this.throwIfDisposed(),PC(this)};q().prototype.asinh=function(){return this.throwIfDisposed(),zC(this)};q().prototype.atan=function(){return this.throwIfDisposed(),WC(this)};q().prototype.atan2=function(n){return this.throwIfDisposed(),GC(this,n)};q().prototype.atanh=function(){return this.throwIfDisposed(),qC(this)},q().prototype.avgPool=function(n,e,t,s){return this.throwIfDisposed(),Ju(this,n,e,t,s)};q().prototype.batchToSpaceND=function(n,e){return this.throwIfDisposed(),eh(this,n,e)};q().prototype.batchNorm=function(n,e,t,s,o){return this.throwIfDisposed(),pl(this,n,e,t,s,o)};q().prototype.broadcastTo=function(n){return this.throwIfDisposed(),hi(this,n)};q().prototype.cast=function(n){return this.throwIfDisposed(),re(this,n)};q().prototype.ceil=function(){return this.throwIfDisposed(),yI(this)};q().prototype.clipByValue=function(n,e){return this.throwIfDisposed(),en(this,n,e)};q().prototype.concat=function(n,e){return this.throwIfDisposed(),n instanceof ct&&(n=[n]),vt([this,...n],e)};q().prototype.conv1d=function(n,e,t,s,o,r){return this.throwIfDisposed(),Pf(this,n,e,t,s,o,r)};q().prototype.conv2dTranspose=function(n,e,t,s,o){return this.throwIfDisposed(),Bf(this,n,e,t,s,o)};q().prototype.conv2d=function(n,e,t,s,o,r){return this.throwIfDisposed(),Ys(this,n,e,t,s,o,r)};q().prototype.cos=function(){return this.throwIfDisposed(),nh(this)};q().prototype.cosh=function(){return this.throwIfDisposed(),Wf(this)};q().prototype.cumprod=function(n,e,t){return this.throwIfDisposed(),sh(this,n,e,t)};q().prototype.cumsum=function(n,e,t){return this.throwIfDisposed(),Uf(this,n,e,t)};q().prototype.depthToSpace=function(n,e){return this.throwIfDisposed(),WI(this,n,e)};q().prototype.depthwiseConv2d=function(n,e,t,s,o,r){return this.throwIfDisposed(),oh(this,n,e,t,s,o,r)};q().prototype.dilation2d=function(n,e,t,s,o){return this.throwIfDisposed(),HI(this,n,e,t,s,o)};q().prototype.divNoNan=function(n){return this.throwIfDisposed(),YI(this,n)};q().prototype.div=function(n){return this.throwIfDisposed(),ge(this,n)};q().prototype.dot=function(n){return this.throwIfDisposed(),QI(this,n)};q().prototype.elu=function(){return this.throwIfDisposed(),fl(this)};q().prototype.equal=function(n){return this.throwIfDisposed(),_n(this,n)};q().prototype.erf=function(){return this.throwIfDisposed(),Hf(this)};q().prototype.euclideanNorm=function(n,e){return this.throwIfDisposed(),u$(this,n,e)};q().prototype.exp=function(){return this.throwIfDisposed(),On(this)};q().prototype.expandDims=function(n){return this.throwIfDisposed(),Ut(this,n)};q().prototype.expm1=function(){return this.throwIfDisposed(),f$(this)};q().prototype.fft=function(){return this.throwIfDisposed(),gm(this)};q().prototype.flatten=function(){return this.throwIfDisposed(),V(this,[this.size])};q().prototype.floor=function(){return this.throwIfDisposed(),xl(this)};q().prototype.floorDiv=function(n){return this.throwIfDisposed(),Lf(this,n)};q().prototype.gather=function(n,e,t){return this.throwIfDisposed(),ih(this,n,e,t)};q().prototype.greaterEqual=function(n){return this.throwIfDisposed(),Qs(this,n)};q().prototype.greater=function(n){return this.throwIfDisposed(),Gt(this,n)};q().prototype.ifft=function(){return this.throwIfDisposed(),yh(this)};q().prototype.irfft=function(){return this.throwIfDisposed(),ak(this)};q().prototype.isFinite=function(){return this.throwIfDisposed(),$$(this)};q().prototype.isInf=function(){return this.throwIfDisposed(),k$(this)};q().prototype.isNaN=function(){return this.throwIfDisposed(),N$(this)};q().prototype.leakyRelu=function(n){return this.throwIfDisposed(),lh(this,n)};q().prototype.lessEqual=function(n){return this.throwIfDisposed(),Po(this,n)};q().prototype.less=function(n){return this.throwIfDisposed(),bl(this,n)};q().prototype.localResponseNormalization=function(n,e,t,s){return this.throwIfDisposed(),D$(this,n,e,t,s)};q().prototype.logSigmoid=function(){return this.throwIfDisposed(),B$(this)};q().prototype.logSoftmax=function(n){return this.throwIfDisposed(),Yf(this,n)};q().prototype.logSumExp=function(n,e){return this.throwIfDisposed(),Zf(this,n,e)};q().prototype.log=function(){return this.throwIfDisposed(),Ln(this)};q().prototype.log1p=function(){return this.throwIfDisposed(),Xf(this)};q().prototype.logicalAnd=function(n){return this.throwIfDisposed(),es(this,n)};q().prototype.logicalNot=function(){return this.throwIfDisposed(),ch(this)};q().prototype.logicalOr=function(n){return this.throwIfDisposed(),Qf(this,n)};q().prototype.logicalXor=function(n){return this.throwIfDisposed(),j$(this,n)};q().prototype.matMul=function(n,e,t){return this.throwIfDisposed(),Fe(this,n,e,t)},q().prototype.maxPool=function(n,e,t,s){return this.throwIfDisposed(),uh(this,n,e,t,s)};q().prototype.max=function(n,e){return this.throwIfDisposed(),wn(this,n,e)};q().prototype.maximum=function(n){return this.throwIfDisposed(),xs(this,n)};q().prototype.mean=function(n,e){return this.throwIfDisposed(),lt(this,n,e)};q().prototype.min=function(n,e){return this.throwIfDisposed(),ml(this,n,e)};q().prototype.minimum=function(n){return this.throwIfDisposed(),mi(this,n)};q().prototype.mirrorPad=function(n,e){return this.throwIfDisposed(),tv(this,n,e)};q().prototype.mod=function(n){return this.throwIfDisposed(),sv(this,n)};q().prototype.mul=function(n){return this.throwIfDisposed(),L(this,n)};q().prototype.neg=function(){return this.throwIfDisposed(),st(this)};q().prototype.norm=function(n,e,t){return this.throwIfDisposed(),gl(this,n,e,t)};q().prototype.notEqual=function(n){return this.throwIfDisposed(),wl(this,n)};q().prototype.oneHot=function(n,e=1,t=0){return this.throwIfDisposed(),Jf(this,n,e,t)};q().prototype.onesLike=function(){return this.throwIfDisposed(),ln(this)};q().prototype.pad=function(n,e){return this.throwIfDisposed(),hh(this,n,e)},q().prototype.pool=function(n,e,t,s,o,r){return this.throwIfDisposed(),pv(this,n,e,t,s,o,r)};q().prototype.pow=function(n){return this.throwIfDisposed(),Zs(this,n)};q().prototype.prelu=function(n){return this.throwIfDisposed(),ph(this,n)};q().prototype.prod=function(n,e){return this.throwIfDisposed(),gv(this,n,e)};q().prototype.reciprocal=function(){return this.throwIfDisposed(),Vv(this)};q().prototype.relu=function(){return this.throwIfDisposed(),Js(this)};q().prototype.relu6=function(){return this.throwIfDisposed(),cm(this)};q().prototype.reshapeAs=function(n){return this.throwIfDisposed(),V(this,n.shape)};q().prototype.reshape=function(n){return this.throwIfDisposed(),V(this,n)};q().prototype.resizeBilinear=function(n,e,t){return this.throwIfDisposed(),Im(this,n,e,t)};q().prototype.resizeNearestNeighbor=function(n,e,t){return this.throwIfDisposed(),$m(this,n,e,t)};q().prototype.reverse=function(n){return this.throwIfDisposed(),eo(this,n)};q().prototype.rfft=function(){return this.throwIfDisposed(),uk(this)};q().prototype.round=function(){return this.throwIfDisposed(),um(this)};q().prototype.rsqrt=function(){return this.throwIfDisposed(),El(this)};q().prototype.selu=function(){return this.throwIfDisposed(),hm(this)};q().prototype.separableConv2d=function(n,e,t,s,o,r){return this.throwIfDisposed(),dm(this,n,e,t,s,o,r)};q().prototype.sigmoid=function(){return this.throwIfDisposed(),Oo(this)};q().prototype.sign=function(){return this.throwIfDisposed(),Yv(this)};q().prototype.sin=function(){return this.throwIfDisposed(),pm(this)};q().prototype.sinh=function(){return this.throwIfDisposed(),fm(this)};q().prototype.slice=function(n,e){return this.throwIfDisposed(),He(this,n,e)};q().prototype.softmax=function(n){return this.throwIfDisposed(),bh(this,n)};q().prototype.softplus=function(){return this.throwIfDisposed(),fi(this)};q().prototype.spaceToBatchND=function(n,e){return this.throwIfDisposed(),dh(this,n,e)};q().prototype.split=function(n,e){return this.throwIfDisposed(),tn(this,n,e)};q().prototype.sqrt=function(){return this.throwIfDisposed(),At(this)};q().prototype.square=function(){return this.throwIfDisposed(),Ke(this)};q().prototype.squaredDifference=function(n){return this.throwIfDisposed(),dk(this,n)};q().prototype.squeeze=function(n){return this.throwIfDisposed(),to(this,n)};q().prototype.stack=function(n,e){this.throwIfDisposed();const t=n instanceof ct?[this,n]:[this,...n];return Mn(t,e)};q().prototype.step=function(n){return this.throwIfDisposed(),bi(this,n)};q().prototype.stridedSlice=function(n,e,t,s,o,r,i,a){return this.throwIfDisposed(),xk(this,n,e,t,s,o,r,i,a)};q().prototype.sub=function(n){return this.throwIfDisposed(),be(this,n)};q().prototype.sum=function(n,e){return this.throwIfDisposed(),me(this,n,e)};q().prototype.tan=function(){return this.throwIfDisposed(),yk(this)};q().prototype.tanh=function(){return this.throwIfDisposed(),dl(this)};q().prototype.tile=function(n){return this.throwIfDisposed(),Cn(this,n)};q().prototype.toBool=function(){return this.throwIfDisposed(),re(this,"bool")};q().prototype.toFloat=function(){return this.throwIfDisposed(),re(this,"float32")};q().prototype.toInt=function(){return this.throwIfDisposed(),re(this,"int32")};q().prototype.topk=function(n,e){return this.throwIfDisposed(),Ck(this,n,e)};q().prototype.transpose=function(n){return this.throwIfDisposed(),Re(this,n)};q().prototype.unique=function(n){return this.throwIfDisposed(),vk(this,n)};q().prototype.unsortedSegmentSum=function(n,e){return this.throwIfDisposed(),bm(this,n,e)};q().prototype.unstack=function(n){return this.throwIfDisposed(),bs(this,n)};q().prototype.where=function(n,e){return this.throwIfDisposed(),dt(n,this,e)};q().prototype.zerosLike=function(){return this.throwIfDisposed(),Ee(this)};class Bn extends Error{constructor(e){super(e),Object.setPrototypeOf(this,Bn.prototype)}}class un extends Error{constructor(e){super(e),Object.setPrototypeOf(this,un.prototype)}}class O extends Error{constructor(e){super(e),Object.setPrototypeOf(this,O.prototype)}}class Ce extends Error{constructor(e){super(e),Object.setPrototypeOf(this,Ce.prototype)}}class td extends Error{constructor(e){super(e),Object.setPrototypeOf(this,td.prototype)}}class Ig{constructor(e){this.maxEntries=e||100,this.cache=new Map}get(e){let t;return this.cache.has(e)&&(t=this.cache.get(e),this.cache.delete(e),this.cache.set(e,t)),t}put(e,t){if(this.cache.has(e))this.cache.delete(e);else if(this.cache.size>=this.maxEntries){const s=this.cache.keys().next().value;this.cache.delete(s)}this.cache.set(e,t)}getMaxEntries(){return this.maxEntries}setMaxEntries(e){if(e<0)throw new Error(`The maxEntries of LRU caches must be at least 0, but got ${e}.`);if(this.maxEntries>e)for(let t=0;t<this.maxEntries-e;t++){const s=this.cache.keys().next().value;this.cache.delete(s)}this.maxEntries=e}}function oo(n,e){if(Array.isArray(n)){let t=[];for(let s=0;s<e;s++)t=t.concat(n);return t}else{const t=new Array(e);return t.fill(n),t}}function zn(n,e){if(!n)throw new td(e)}function $g(n,e){let t=0;for(const s of n)s===e&&t++;return t}function Ht(n){return n.length===1?n[0]:n}function Pe(n){return Array.isArray(n)?n:[n]}function rs(n){const t=n.replace(/(.)([A-Z][a-z0-9]+)/g,"$1_$2").replace(/([a-z])([A-Z])/g,"$1_$2").toLowerCase();return t[0]!=="_"?t:"private"+t}function ro(n){return n.length<=1||n.indexOf("_")===-1?n:n.replace(/[_]+(\w|$)/g,(e,t)=>t.toUpperCase())}let hn={};function nd(n){if(n==null)return null;const e={};return e.className=n.getClassName(),e.config=n.getConfig(),e}function sd(n){if(!(n==null||typeof n!="object"))if(Array.isArray(n))n.forEach(e=>sd(e));else{const e=Object.keys(n);for(const t of e){const s=n[t];s!=null&&typeof s=="object"&&(!Array.isArray(s)&&s.type==="ndarray"&&typeof s.value=="number"?n[t]=s.value:sd(s))}}}function Ii(n,e={},t={},s="object",o=!1){if(typeof n=="string"){const r=n;let i;if(r in t)i=t[r];else if(r in hn)i=hn[r];else if(i=e[r],i==null)throw new O(`Unknown ${s}: ${n}. This may be due to one of the following reasons:
1. The ${s} is defined in Python, in which case it needs to be ported to TensorFlow.js or your JavaScript code.
2. The custom ${s} is defined in JavaScript, but is not registered properly with tf.serialization.registerClass().`);return i}else{const r=n;if(r.className==null||r.config==null)throw new O(`${s}: Improper config format: ${JSON.stringify(r)}.
'className' and 'config' must set.`);const i=r.className;let a,l;if(i in t?[a,l]=t[i]:i in hn?[a,l]=hn.className:i in e&&([a,l]=e[i]),a==null)throw new O(`Unknown ${s}: ${i}. This may be due to one of the following reasons:
1. The ${s} is defined in Python, in which case it needs to be ported to TensorFlow.js or your JavaScript code.
2. The custom ${s} is defined in JavaScript, but is not registered properly with tf.serialization.registerClass().`);if(l!=null){const c={};for(const p of Object.keys(hn))c[p]=hn[p];for(const p of Object.keys(t))c[p]=t[p];const u=r.config;u.customObjects=c;const h=Object.assign({},hn);for(const p of Object.keys(t))hn[p]=t[p];sd(r.config);const d=l(a,r.config,t,o);return hn=Object.assign({},h),d}else{const c=Object.assign({},hn);for(const h of Object.keys(t))hn[h]=t[h];const u=new a(r.config);return hn=Object.assign({},c),u}}}function nT(n,e){return n<e?-1:n>e?1:0}function _l(n,e){return-1*nT(n,e)}function ws(n){if(n==null)return n;const e=[];for(const t of n)e.indexOf(t)===-1&&e.push(t);return e}function sT(n){if(n==null)throw new O(`Invalid value in obj: ${JSON.stringify(n)}`);for(const e in n)if(n.hasOwnProperty(e))return!1;return!0}function io(n,e,t){if(t!=null&&n.indexOf(t)<0)throw new O(`${t} is not a valid ${e}.  Valid values are ${n} or null/undefined.`)}function od(n,e,t=0,s=1/0){return zn(t>=0),zn(s>=t),Array.isArray(n)&&n.length>=t&&n.length<=s&&n.every(o=>typeof o===e)}function wt(n,e){Array.isArray(n)?(S(n.length>0,()=>`${e} is unexpectedly an empty array.`),n.forEach((t,s)=>wt(t,`element ${s+1} of ${e}`))):S(Number.isInteger(n)&&n>0,()=>`Expected ${e} to be a positive integer, but got ${vg(n)}.`)}function vg(n){return n===null?"null":Array.isArray(n)?"["+n.map(e=>vg(e)).join(",")+"]":typeof n=="string"?`"${n}"`:`${n}`}function oT(n,e,t){let s=t!=null?t():zt(),o;return(...i)=>{const a=t!=null?t():zt();return a-s<e||(s=a,o=n(...i)),o}}function kg(n){return n==="relu"?"relu":n==="linear"?"linear":n==="elu"?"elu":null}let rT=0;function Sg(){return rT++}const Ol={};function Ll(n=""){return n in Ol||(Ol[n]=0),Ol[n]+=1,n+Ol[n].toString()}const iT=["channelsFirst","channelsLast"],aT=["nearest","bilinear"],lT=["valid","same","causal"],cT=["max","avg"],uT=["sum","mul","concat","ave"];const Uo=new Map;function rt(n){io(iT,"DataFormat",n)}function hT(n){io(aT,"InterpolationFormat",n)}function nn(n){io(lT,"PaddingMode",n)}function Ng(n){io(cT,"PoolMode",n)}const $i=[],Tg="/";function ao(n,e){$i.push(n);try{const t=e();return $i.pop(),t}catch(t){throw $i.pop(),t}}function dT(){return $i.length===0?"":$i.join(Tg)+Tg}function Eg(n){if(!Ag(n))throw new Error("Not a valid tensor name: '"+n+"'");return dT()+n}function Rg(n){if(!Ag(n))throw new Error("Not a valid tensor name: '"+n+"'");Uo.has(n)||Uo.set(n,0);const e=Uo.get(n);if(Uo.set(n,Uo.get(n)+1),e>0){const t=`${n}_${e}`;return Uo.set(t,1),t}else return n}const pT=new RegExp(/^[A-Za-z0-9][-A-Za-z0-9\._\/]*$/);function Ag(n){return!!n.match(pT)}function fT(n){return n===parseInt(n.toString(),10)}function Cs(n,e,t){e==null&&(e=0),t==null&&(t=n.length);let s=1;for(let o=e;o<t;++o)s*=n[o];return s}function Go(n){if(n.length===0)return Number.NaN;let e=Number.POSITIVE_INFINITY;for(let t=0;t<n.length;t++){const s=n[t];s<e&&(e=s)}return e}function Is(n){if(n.length===0)return Number.NaN;let e=Number.NEGATIVE_INFINITY;for(let t=0;t<n.length;t++){const s=n[t];s>e&&(e=s)}return e}function $n(n,e){if(e<n)throw new O(`end (${e}) < begin (${n}) is forbidden.`);const t=[];for(let s=n;s<e;++s)t.push(s);return t}let rd;function pt(){return rd==null&&(rd=vf().epsilon()),rd}function vn(){return"channelsLast"}function Vn(n,e){return re(n,e)}function vi(n,e=-1){const t=n.shape.slice();return e<0&&(e=t.length+e+1),t.splice(e,0,1),V(n,t)}function mT(n,e){return z(()=>{if(n.shape.length!==2)throw new O(`repeat() expects a rank-2 tensor, but received a rank-${n.shape.length} tensor.`);const t=vi(n,1);return ld(t,[1,e,1])})}function gT(n){const e=[Cs(n.shape)];return V(n,e)}function xT(n){if(n.rank<=1)throw new O(`batchFlatten requires a minimum rank of 2. Got rank: ${n.rank}.`);const e=[n.shape[0],Cs(n.shape,1)];return V(n,e)}function lo(n,e,t){return z(()=>{switch(n.rank){case 1:return gh(n,e,t);case 2:return mm(n,[e,0],[t,n.shape[1]]);case 3:return xh(n,[e,0,0],[t,n.shape[1],n.shape[2]]);case 4:return Rl(n,[e,0,0,0],[t,n.shape[1],n.shape[2],n.shape[3]]);case 5:return He(n,[e,0,0,0,0],[t,n.shape[1],n.shape[2],n.shape[3],n.shape[4]]);case 6:return He(n,[e,0,0,0,0,0],[t,n.shape[1],n.shape[2],n.shape[3],n.shape[4],n.shape[5]]);default:throw new O(`sliceAlongFirstAxis() received an unsupported tensor rank: ${n.rank}`)}})}function id(n,e,t){return z(()=>{switch(n.rank){case 1:return gh(n,e,t);case 2:return mm(n,[0,e],[n.shape[0],t]);case 3:return xh(n,[0,0,e],[n.shape[0],n.shape[1],t]);case 4:return Rl(n,[0,0,0,e],[n.shape[0],n.shape[1],n.shape[2],t]);default:throw new O(`sliceAlongLastAxis() received an unsupported tensor rank: ${n.rank}`)}})}function Ml(n,e,t,s){return z(()=>{switch(n.rank){case 1:return gh(n,e,t);case 2:switch(s){case 1:return lo(n,e,t);case 2:return id(n,e,t);default:throw new O(`The axis is not within the rank of the tensor ${s}`)}case 3:switch(s){case 1:return lo(n,e,t);case 2:return xh(n,[0,e,0],[n.shape[0],t,n.shape[2]]);case 3:return id(n,e,t);default:throw new O(`The axis is not within the rank of the tensor ${s}`)}case 4:switch(s){case 1:return lo(n,e,t);case 2:return Rl(n,[0,e,0,0],[n.shape[0],t,n.shape[2],n.shape[3]]);case 3:return Rl(n,[0,0,e,0],[n.shape[0],n.shape[1],t,n.shape[3]]);case 4:return id(n,e,t);default:throw new O(`The axis is not within the rank of the tensor ${s}`)}default:throw new O(`sliceAlongLastAxis() received an unsupported tensor rank: ${n.rank}`)}})}function ad(n,e=-1){let t;return e<0&&(t=n[0].rank,t!==0?e=t:e=0),e===n[0].rank&&(e=-1),vt(n,e)}function Dg(n,e){switch(n.rank){case 1:return II([n,e]);case 2:return vI([n,e],0);case 3:return SI([n,e],0);case 4:return TI([n,e],0);default:throw new O(`concatAlongFirstAxis() received an unsupported tensor rank: ${n.rank}`)}}function ld(n,e){if(Array.isArray(e)||(e=[e]),n.rank!==e.length)throw new O(`The length of input n (${e.length}) does not match the number of dimensions in input x (${n.rank})`);return Cn(n,e)}function Pl(n,e=0,t=1,s,o){return Mv(n,e,t,s,o)}function Wn(n,e,t,s){if(n.rank<2||e.rank<2)throw new Ce(`dot requires both inputs to be rank >= 2 but got x shape = ${n.shape} and y shape = ${e.shape}`);if(e.rank>=3){const o=n.shape.slice(-1)[0],r=e.shape.slice(-2)[0];if(o!==r)throw new Ce(`If rank y >= 3, then the second last dim of y must equal the last dim of x but got x shape = ${n.shape} and  y shape = ${e.shape}`)}if(n.rank===2&&e.rank===2)return wm({a:n,b:e,transposeA:!1,transposeB:!1,bias:s?cd(n.rank,s,vn()):null,activation:t});{const o=n.shape.slice(),r=o.pop();n=V(n,[-1,r]);const i=e.shape.slice(),a=i.pop(),l=i.pop(),c=[...i,a],u=Array.from({length:e.rank},(f,m)=>m===0?e.rank-2:m<=e.rank-2?m-1:m);e=V(Re(e,u),[l,-1]);const h=[...o,...c];return V(wm({a:n,b:e,transposeA:!1,transposeB:!1,bias:s?cd(n.rank,s,vn()):null,activation:t}),h)}}function Fg(n,e,t){return z(()=>(Array.isArray(e)?e=Xt(e,"int32"):e=re(e,"int32"),ih(n,e,t)))}function ki(n){return L(n,n)}function cd(n,e,t){const s=e.shape;if(e.rank!==1&&e.rank!==n)throw new O(`Unexpected bias dimensions: ${e.rank}; expected it to be 1 or ${n}`);if(n===5){if(t==="channelsFirst")return s.length===1?V(e,[1,s[0],1,1,1]):V(e,[1,s[3],s[0],s[1],s[2]]);if(t==="channelsLast")return s.length===1?V(e,[1,1,1,1,s[0]]):V(e,[1].concat(s))}else if(n===4){if(t==="channelsFirst")return s.length===1?V(e,[1,s[0],1,1]):V(e,[1,s[2],s[0],s[1]]);if(t==="channelsLast")return s.length===1?V(e,[1,1,1,s[0]]):V(e,[1].concat(s))}else if(n===3){if(t==="channelsFirst")return s.length===1?V(e,[1,s[0],1]):V(e,[1,s[1],s[0]]);if(t==="channelsLast")return s.length===1?V(e,[1,1,s[0]]):V(e,[1].concat(s))}else if(n<3)return e;throw new O(`Unsupported input rank by biasAdd: ${e.rank}`)}function kn(n,e,t){return z(()=>(t==null&&(t=vn()),rt(t),te(n,cd(n.rank,e,t))))}function bT(n,e=1){if(e!==1)throw new Ce(`Support for alpha values other than 1 (${e}) is not implemented yet.`);return fl(n)}function yT(n){return z(()=>ge(n,te(Lt(n),1)))}function _g(n,e,t,s){return z(()=>Ak(n,e,t,s))}function wT(n){return z(()=>{const e=te(.5,L(.2,n));return en(e,0,1)})}function Si(n,e,t=!1){return t?n():e()}const CT=["fanIn","fanOut","fanAvg"],IT=["normal","uniform","truncatedNormal"];function $T(n){io(CT,"FanMode",n)}function vT(n){io(IT,"Distribution",n)}class dn extends Vo{fromConfigUsesCustomObjects(){return!1}getConfig(){return{}}}class Og extends dn{apply(e,t){return ot(e,t)}}Og.className="Zeros",ee(Og);class ud extends dn{apply(e,t){return ts(e,t)}}ud.className="Ones",ee(ud);class Lg extends dn{constructor(e){if(super(),typeof e!="object")throw new O(`Expected argument of type ConstantConfig but got ${e}`);if(e.value===void 0)throw new O(`config must have value set but got ${e}`);this.value=e.value}apply(e,t){return z(()=>L(Oe(this.value),ts(e,t)))}getConfig(){return{value:this.value}}}Lg.className="Constant",ee(Lg);class Mg extends dn{constructor(e){super(),this.DEFAULT_MINVAL=-.05,this.DEFAULT_MAXVAL=.05,this.minval=e.minval||this.DEFAULT_MINVAL,this.maxval=e.maxval||this.DEFAULT_MAXVAL,this.seed=e.seed}apply(e,t){return gi(e,this.minval,this.maxval,t,this.seed)}getConfig(){return{minval:this.minval,maxval:this.maxval,seed:this.seed}}}Mg.className="RandomUniform",ee(Mg);class Pg extends dn{constructor(e){super(),this.DEFAULT_MEAN=0,this.DEFAULT_STDDEV=.05,this.mean=e.mean||this.DEFAULT_MEAN,this.stddev=e.stddev||this.DEFAULT_STDDEV,this.seed=e.seed}apply(e,t){if(t=t||"float32",t!=="float32"&&t!=="int32")throw new Ce(`randomNormal does not support dType ${t}.`);return Pl(e,this.mean,this.stddev,t,this.seed)}getConfig(){return{mean:this.mean,stddev:this.stddev,seed:this.seed}}}Pg.className="RandomNormal",ee(Pg);class Bg extends dn{constructor(e){super(),this.DEFAULT_MEAN=0,this.DEFAULT_STDDEV=.05,this.mean=e.mean||this.DEFAULT_MEAN,this.stddev=e.stddev||this.DEFAULT_STDDEV,this.seed=e.seed}apply(e,t){if(t=t||"float32",t!=="float32"&&t!=="int32")throw new Ce(`truncatedNormal does not support dType ${t}.`);return xm(e,this.mean,this.stddev,t,this.seed)}getConfig(){return{mean:this.mean,stddev:this.stddev,seed:this.seed}}}Bg.className="TruncatedNormal",ee(Bg);class zg extends dn{constructor(e){super(),this.gain=e.gain!=null?e.gain:1}apply(e,t){return z(()=>{if(e.length!==2||e[0]!==e[1])throw new O("Identity matrix initializer can only be used for 2D square matrices.");return L(this.gain,Kf(e[0]))})}getConfig(){return{gain:this.gain}}}zg.className="Identity",ee(zg);function kT(n,e="channelsLast"){let t,s;if(rt(e),n.length===2)t=n[0],s=n[1];else if([3,4,5].indexOf(n.length)!==-1){if(e==="channelsFirst"){const o=Cs(n,2);t=n[1]*o,s=n[0]*o}else if(e==="channelsLast"){const o=Cs(n,0,n.length-2);t=n[n.length-2]*o,s=n[n.length-1]*o}}else{const o=Cs(n);t=Math.sqrt(o),s=Math.sqrt(o)}return[t,s]}class Yt extends dn{constructor(e){if(super(),e.scale<0)throw new O(`scale must be a positive float. Got: ${e.scale}`);this.scale=e.scale==null?1:e.scale,this.mode=e.mode==null?"fanIn":e.mode,$T(this.mode),this.distribution=e.distribution==null?"normal":e.distribution,vT(this.distribution),this.seed=e.seed}apply(e,t){const s=kT(e),o=s[0],r=s[1];let i=this.scale;if(this.mode==="fanIn"?i/=Math.max(1,o):this.mode==="fanOut"?i/=Math.max(1,r):i/=Math.max(1,(o+r)/2),this.distribution==="normal"){const a=Math.sqrt(i);if(t=t||"float32",t!=="float32"&&t!=="int32")throw new Ce(`${this.getClassName()} does not support dType ${t}.`);return xm(e,0,a,t,this.seed)}else{const a=Math.sqrt(3*i);return gi(e,-a,a,t,this.seed)}}getConfig(){return{scale:this.scale,mode:this.mode,distribution:this.distribution,seed:this.seed}}}Yt.className="VarianceScaling",ee(Yt);class hd extends Yt{constructor(e){super({scale:1,mode:"fanAvg",distribution:"uniform",seed:e==null?null:e.seed})}getClassName(){return Yt.className}}hd.className="GlorotUniform",ee(hd);class dd extends Yt{constructor(e){super({scale:1,mode:"fanAvg",distribution:"normal",seed:e==null?null:e.seed})}getClassName(){return Yt.className}}dd.className="GlorotNormal",ee(dd);class pd extends Yt{constructor(e){super({scale:2,mode:"fanIn",distribution:"normal",seed:e==null?null:e.seed})}getClassName(){return Yt.className}}pd.className="HeNormal",ee(pd);class fd extends Yt{constructor(e){super({scale:2,mode:"fanIn",distribution:"uniform",seed:e==null?null:e.seed})}getClassName(){return Yt.className}}fd.className="HeUniform",ee(fd);class md extends Yt{constructor(e){super({scale:1,mode:"fanIn",distribution:"normal",seed:e==null?null:e.seed})}getClassName(){return Yt.className}}md.className="LeCunNormal",ee(md);class gd extends Yt{constructor(e){super({scale:1,mode:"fanIn",distribution:"uniform",seed:e==null?null:e.seed})}getClassName(){return Yt.className}}gd.className="LeCunUniform",ee(gd);class Vg extends dn{constructor(e){super(),this.DEFAULT_GAIN=1,this.ELEMENTS_WARN_SLOW=2e3,this.gain=e.gain==null?this.DEFAULT_GAIN:e.gain,this.seed=e.seed}apply(e,t){return z(()=>{if(e.length<2)throw new Ce("Shape must be at least 2D.");if(t!=="int32"&&t!=="float32"&&t!==void 0)throw new TypeError(`Unsupported data type ${t}.`);t=t;const s=j(e.slice(0,-1)),o=e[e.length-1],r=s*o;r>this.ELEMENTS_WARN_SLOW&&console.warn(`Orthogonal initializer is being called on a matrix with more than ${this.ELEMENTS_WARN_SLOW} (${r}) elements: Slowness may result.`);const i=[Math.max(o,s),Math.min(o,s)],a=Pl(i,0,1,t,this.seed),l=NS.qr(a,!1);let c=l[0];const h=l[1].flatten().stridedSlice([0],[Math.min(o,s)*Math.min(o,s)],[Math.min(o,s)+1]);return c=L(c,h.sign()),s<o&&(c=c.transpose()),L(Oe(this.gain),c.reshape(e))})}getConfig(){return{gain:this.gain,seed:this.seed}}}Vg.className="Orthogonal",ee(Vg);const Wg={constant:"Constant",glorotNormal:"GlorotNormal",glorotUniform:"GlorotUniform",heNormal:"HeNormal",heUniform:"HeUniform",identity:"Identity",leCunNormal:"LeCunNormal",leCunUniform:"LeCunUniform",ones:"Ones",orthogonal:"Orthogonal",randomNormal:"RandomNormal",randomUniform:"RandomUniform",truncatedNormal:"TruncatedNormal",varianceScaling:"VarianceScaling",zeros:"Zeros"};function Ug(n,e={}){return Ii(n,cn.getMap().classNameMap,e,"initializer")}function Qe(n){return nd(n)}function Xe(n){if(typeof n=="string"){const e=n in Wg?Wg[n]:n;if(e==="GlorotNormal")return new dd;if(e==="GlorotUniform")return new hd;if(e==="HeNormal")return new pd;if(e==="HeUniform")return new fd;if(e==="LeCunNormal")return new md;if(e==="LeCunUniform")return new gd;{const t={};return t.className=e,t.config={},Ug(t)}}else return n instanceof dn?n:Ug(n)}function xd(n){return Array.isArray(n)&&Array.isArray(n[0])}function Bl(n){return n.length===0?[]:Array.isArray(n[0])?n:[n]}function ye(n){let e;if(Array.isArray(n)){if(n.length!==1)throw new O(`Expected Tensor length to be 1; got ${n.length}`);e=n[0]}else e=n;return e}function De(n){if(Array.isArray(n)&&Array.isArray(n[0])){if(n.length===1)return n=n,n[0];throw new O(`Expected exactly 1 Shape; got ${n.length}`)}else return n}function zl(n){let e=0;for(const t of n)t.shape.length===0?e+=1:e+=t.shape.reduce((s,o)=>s*o);return e}const Gg="Variable";class ST{constructor(e,t="float32",s=Gg,o=!0,r=null){this.dtype=t==null?"float32":t,this.shape=e.shape,this.id=Sg(),s=s==null?Gg:s,this.originalName=Eg(s),this.name=Rg(this.originalName),this.trainable_=o,this.constraint=r,this.val=Nk(e,this.trainable_,this.name,this.dtype)}read(){return this.assertNotDisposed(),this.val}write(e){return this.assertNotDisposed(),NT(this.val,e),this.val.id!==e.id&&(this.val.assign(e),this.constraint!=null&&this.val.assign(this.constraint.apply(this.val))),this}dispose(){this.assertNotDisposed(),this.val.dispose()}assertNotDisposed(){if(this.val.isDisposed)throw new Error(`LayersVariable ${this.name} is already disposed.`)}get trainable(){return this.trainable_}set trainable(e){this.trainable_=e,this.val.trainable=e}}function NT(n,e){if(n.shape.toString()!==e.shape.toString())throw new Error("Shape mismatch: "+JSON.stringify(n.shape)+" vs. "+JSON.stringify(e.shape))}function bd(n){return n.map(e=>e.read())}function yd(n){n.forEach(e=>{e[0].write(e[1])})}class ft{constructor(e){this.dtype=e.dtype,this.shape=e.shape,e.shape!=null?this.ndim=e.shape.length:this.ndim=e.ndim,this.maxNDim=e.maxNDim,this.minNDim=e.minNDim,this.axes=e.axes||{}}}class Un{constructor(e,t,s,o,r,i,a){this.dtype=e,this.shape=t,this.sourceLayer=s,this.inputs=o,this.callArgs=r,this.outputTensorIndex=a,this.id=Sg(),i!=null&&(this.originalName=Eg(i),this.name=Rg(this.originalName)),this.rank=t.length}}let TT=0;class Vl{constructor(e,t){this.callArgs=t,this.id=TT++,this.outboundLayer=e.outboundLayer,this.inboundLayers=e.inboundLayers,this.nodeIndices=e.nodeIndices,this.tensorIndices=e.tensorIndices,this.inputTensors=e.inputTensors,this.outputTensors=e.outputTensors,this.inputMasks=e.inputMasks,this.outputMasks=e.outputMasks,this.inputShapes=e.inputShapes,this.outputShapes=e.outputShapes;for(const s of e.inboundLayers)s!=null&&s.outboundNodes.push(this);e.outboundLayer.inboundNodes.push(this)}getConfig(){const e=[];for(const t of this.inboundLayers)t!=null?e.push(t.name):e.push(null);return{outboundLayer:this.outboundLayer?this.outboundLayer.name:null,inboundLayers:e,nodeIndices:this.nodeIndices,tensorIndices:this.tensorIndices}}}let ET=0;class Se extends Vo{constructor(e={}){super(),this._callHook=null,this._addedWeightNames=[],this._stateful=!1,this.id=ET++,this.activityRegularizer=null,this.inputSpec=null,this.supportsMasking=!1,this._trainableWeights=[],this._nonTrainableWeights=[],this._losses=[],this._updates=[],this._built=!1,this.inboundNodes=[],this.outboundNodes=[];let t=e.name;if(!t){const s=this.getClassName();t=rs(s)+"_"+Ll(s)}if(this.name=t,this.trainable_=e.trainable==null?!0:e.trainable,e.inputShape!=null||e.batchInputShape!=null){let s;if(e.batchInputShape!=null)s=e.batchInputShape;else if(e.inputShape!=null){let r=null;e.batchSize!=null&&(r=e.batchSize),s=[r].concat(e.inputShape)}this.batchInputShape=s;let o=e.dtype;o==null&&(o=e.inputDType),o==null&&(o="float32"),this.dtype=o}e.weights!=null?this.initialWeights=e.weights:this.initialWeights=null,this._refCount=null,this.fastWeightInitDuringBuild=!1}static nodeKey(e,t){return e.name+"_ib-"+t.toString()}getNodeAtIndex(e,t){if(this.inboundNodes.length===0)throw new un(`The layer has never been called and thus has no defined ${t}.`);if(this.inboundNodes.length<=e)throw new O(`Asked to get ${t} at node ${e}, but the layer has only ${this.inboundNodes.length} inbound nodes.`);return this.inboundNodes[e]}getInputAt(e){return Ht(this.getNodeAtIndex(e,"input").inputTensors)}getOutputAt(e){return Ht(this.getNodeAtIndex(e,"output").outputTensors)}get input(){if(this.inboundNodes.length>1)throw new Bn(`Layer ${this.name} has multiple inbound nodes, hence the notion of "layer input" is ill-defined. Use \`getInputAt(nodeIndex)\` instead.`);if(this.inboundNodes.length===0)throw new Bn(`Layer ${this.name} is not connected, no input to return.`);return Ht(this.getNodeAtIndex(0,"input").inputTensors)}get output(){if(this.inboundNodes.length===0)throw new Bn(`Layer ${this.name} has no inbound nodes.`);if(this.inboundNodes.length>1)throw new Bn(`Layer ${this.name} has multiple inbound nodes, hence the notion of "layer output" is ill-defined. Use \`getOutputAt(nodeIndex)\` instead.`);return Ht(this.getNodeAtIndex(0,"output").outputTensors)}get losses(){return this._losses}calculateLosses(){return this.losses.map(e=>e())}get updates(){return this._updates}get built(){return this._built}set built(e){this._built=e}get trainable(){return this.trainable_}set trainable(e){this._trainableWeights.forEach(t=>t.trainable=e),this.trainable_=e}get trainableWeights(){return this.trainable_?this._trainableWeights.filter(e=>e.trainable):[]}set trainableWeights(e){this._trainableWeights=e}get nonTrainableWeights(){return this.trainable?this._trainableWeights.filter(e=>!e.trainable).concat(this._nonTrainableWeights):this._trainableWeights.concat(this._nonTrainableWeights)}set nonTrainableWeights(e){this._nonTrainableWeights=e}get weights(){return this.trainableWeights.concat(this.nonTrainableWeights)}get stateful(){return this._stateful}resetStates(){if(!this.stateful)throw new Error("Cannot call the resetStates() method of a non-stateful Layer object.")}assertInputCompatibility(e){const t=Pe(e);if(this.inputSpec==null||this.inputSpec.length===0)return;const s=Pe(this.inputSpec);if(t.length!==s.length)throw new O(`Layer ${this.name} expects ${s.length} inputs, but it received ${t.length} input tensors. Input received: ${e}`);for(let o=0;o<t.length;o++){const r=t[o],i=s[o];if(i==null)continue;const a=r.rank;if(i.ndim!=null&&a!==i.ndim)throw new O(`Input ${o} is incompatible with layer ${this.name}: expected ndim=${i.ndim}, found ndim=${a}`);if(i.maxNDim!=null&&a>i.maxNDim)throw new O(`Input ${o} is incompatible with layer ${this.name}: expected max_ndim=${i.maxNDim}, found ndim=${a}`);if(i.minNDim!=null&&a<i.minNDim)throw new O(`Input ${o} is incompatible with layer ${this.name}: expected min_ndim=${i.minNDim}, found ndim=${a}.`);if(i.dtype!=null&&r.dtype!==i.dtype)throw new O(`Input ${o} is incompatible with layer ${this.name} : expected dtype=${i.dtype}, found dtype=${r.dtype}.`);if(i.axes){const l=r.shape;for(const c in i.axes){const u=Number(c),h=i.axes[c],d=u>=0?l[u]:l[l.length+u];if(h!=null&&[h,null].indexOf(d)===-1)throw new O(`Input ${o} is incompatible with layer ${this.name}: expected axis ${u} of input shape to have value ${h} but got shape ${l}.`)}}if(i.shape!=null)for(let l=0;l<i.shape.length;++l){const c=i.shape[l],u=r.shape[l];if(c!=null&&u!=null&&c!==u)throw new O(`Input ${o} is incompatible with layer ${this.name}: expected shape=${i.shape}, found shape=${r.shape}.`)}}}call(e,t){return e}invokeCallHook(e,t){this._callHook!=null&&this._callHook(e,t)}setCallHook(e){this._callHook=e}clearCallHook(){this._callHook=null}apply(e,t){t=t||{},this.assertNotDisposed();const s=Pe(e),o=DT(e),r=FT(e);if(o===r)throw new O("Arguments to apply() must be all SymbolicTensors or all Tensors");return ao(this.name,()=>{if(!this.built){this.assertInputCompatibility(e);const i=[];for(const a of Pe(e))i.push(a.shape);this.build(Ht(i)),this.built=!0,this.initialWeights&&this.setWeights(this.initialWeights),this._refCount===null&&r&&(this._refCount=1)}if(this.assertInputCompatibility(e),r){let i=this.call(e,t);this.supportsMasking&&this.setMaskMetadata(e,i);const a=Pe(i),l=[];for(let c of a)s.indexOf(c)!==-1&&(c=c.clone()),l.push(c);if(i=Ht(l),this.activityRegularizer!=null)throw new Ce("Layer invocation in the presence of activity regularizer(s) is not supported yet.");return i}else{const i=RT(e),a=this.computeOutputShape(i);let l;const c=AT(e);if(this.warnOnIncompatibleInputShape(Array.isArray(e)?i[0]:i),a!=null&&a.length>0&&Array.isArray(a[0])?l=a.map((u,h)=>new Un(c,u,this,Pe(e),t,this.name,h)):l=new Un(c,a,this,Pe(e),t,this.name),this.addInboundNode(e,l,null,null,i,a,t),this._refCount++,this.activityRegularizer!=null)throw new Ce("Layer invocation in the presence of activity regularizer(s) is not supported yet.");return l}})}warnOnIncompatibleInputShape(e){if(this.batchInputShape!=null)if(e.length!==this.batchInputShape.length)console.warn(`The rank of the input tensor provided (shape: ${JSON.stringify(e)}) does not match that of the batchInputShape (${JSON.stringify(this.batchInputShape)}) of the layer ${this.name}`);else{let t=!1;this.batchInputShape.forEach((s,o)=>{s!=null&&e[o]!=null&&e[o]!==s&&(t=!0)}),t&&console.warn(`The shape of the input tensor (${JSON.stringify(e)}) does not match the expectation of layer ${this.name}: ${JSON.stringify(this.batchInputShape)}`)}}get outputShape(){if(this.inboundNodes==null||this.inboundNodes.length===0)throw new Bn(`The layer ${this.name} has never been called and thus has no defined output shape.`);const e=[];for(const t of this.inboundNodes){const s=JSON.stringify(t.outputShapes);e.indexOf(s)===-1&&e.push(s)}if(e.length===1){const t=this.inboundNodes[0].outputShapes;return Array.isArray(t)&&Array.isArray(t[0])&&t.length===1?t[0]:t}else throw new Bn(`The layer ${this.name} has multiple inbound nodes with different output shapes. Hence the notion of "output shape" is ill-defined for the layer.`)}countParams(){if(!this.built)throw new un(`You tried to call countParams() on ${this.name}, but the layer is not built yet. Build it first by calling build(batchInputShape).`);return zl(this.weights)}build(e){this.built=!0}getWeights(e=!1){return bd(e?this.trainableWeights:this.weights)}setWeights(e){z(()=>{const t=this.weights;if(t.length!==e.length)throw new O(`You called setWeights(weights) on layer "${this.name}" with a weight list of length ${e.length}, but the layer was expecting ${t.length} weights. Provided weights: ${e}...`);if(t.length===0)return;const s=[],o=bd(t);for(let r=0;r<o.length;++r){const i=o[r],a=t[r],l=e[r];if(!_e(i.shape,l.shape))throw new O(`Layer weight shape ${i.shape} not compatible with provided weight shape ${l.shape}`);s.push([a,l])}yd(s)})}addWeight(e,t,s,o,r,i,a,l){if(this._addedWeightNames.indexOf(e)!==-1)throw new O(`Duplicate weight name ${e} for layer ${this.name}`);this._addedWeightNames.push(e),s==null&&(s="float32"),this.fastWeightInitDuringBuild&&(o=l!=null?l():Xe("zeros"));const c=o.apply(t,s),u=new ST(c,s,e,i,a);return c.dispose(),r!=null&&this.addLoss(()=>r.apply(u.read())),i==null&&(i=!0),i?this._trainableWeights.push(u):this._nonTrainableWeights.push(u),u}setFastWeightInitDuringBuild(e){this.fastWeightInitDuringBuild=e}addLoss(e){e==null||Array.isArray(e)&&e.length===0||(e=Pe(e),this._losses!==void 0&&this._losses!==null&&this.losses.push(...e))}computeOutputShape(e){return e}computeMask(e,t){if(!this.supportsMasking){if(t!=null)if(Array.isArray(t))t.forEach(s=>{if(s!=null)throw new TypeError(`Layer ${this.name} does not support masking, but was passed an inputMask.`)});else throw new TypeError(`Layer ${this.name} does not support masking, but was passed an inputMask.`);return null}return t}setMaskMetadata(e,t,s){if(!this.supportsMasking)return;const o=this.computeMask(e,s),r=Pe(t),i=Pe(o);if(r.length!==i.length)throw new Error(`${this.name} outputs ${r.length} tensors but ${r.length} masks for those tensors`);for(let a=0;a<r.length;a++)r[a].kerasMask=i[a]}addInboundNode(e,t,s,o,r,i,a=null){const l=Pe(e);t=Pe(t),s=Pe(s),o=Pe(o),r=Bl(r),i=Bl(i);const c=[],u=[],h=[];for(const d of l)c.push(d.sourceLayer),u.push(d.nodeIndex),h.push(d.tensorIndex);new Vl({outboundLayer:this,inboundLayers:c,nodeIndices:u,tensorIndices:h,inputTensors:l,outputTensors:t,inputMasks:s,outputMasks:o,inputShapes:r,outputShapes:i},a);for(let d=0;d<t.length;d++)t[d].sourceLayer=this,t[d].nodeIndex=this.inboundNodes.length-1,t[d].tensorIndex=d}getConfig(){const e={name:this.name,trainable:this.trainable};return this.batchInputShape!=null&&(e.batchInputShape=this.batchInputShape),this.dtype!=null&&(e.dtype=this.dtype),e}disposeWeights(){return this.weights.forEach(e=>e.dispose()),this.weights.length}assertNotDisposed(){if(this._refCount===0)throw new Error(`Layer '${this.name}' is already disposed.`)}dispose(){if(!this.built)throw new Error(`Cannot dispose Layer ${this.name} because it has not been built yet.`);if(this._refCount===null)throw new Error(`Cannot dispose Layer ${this.name} because it has not been used yet.`);this.assertNotDisposed();let e=0;return--this._refCount===0&&(e=this.disposeWeights()),{refCountAfterDispose:this._refCount,numDisposedVariables:e}}}function RT(n){n=Pe(n);const e=[];for(const t of n)e.push(t.shape);return Ht(e)}function AT(n){return"float32"}function Hg(n,e,t){if((e==null||t!=null&&t>0)&&(e=n.sourceLayer,t=n.nodeIndex),e.inboundNodes.length===0)return[n];{const s=e.inboundNodes[t];if(s.inboundLayers.length===0)return s.inputTensors;{const o=[];for(let r=0;r<s.inboundLayers.length;r++){const i=s.inputTensors[r],a=s.inboundLayers[r],l=s.nodeIndices[r],c=Hg(i,a,l);for(const u of c)o.indexOf(u)===-1&&o.push(u)}return o}}}function DT(n){let e=!0;for(const t of Pe(n))if(!(t instanceof Un)){e=!1;break}return e}function FT(n){let e=!0;for(const t of Pe(n))if(t instanceof Un){e=!1;break}return e}class Ni extends Se{constructor(e){if(super({dtype:e.dtype,name:e.name!=null?e.name:Ll("input").toString()}),e.batchSize==null&&(e.batchSize=null),e.sparse==null&&(e.sparse=!1),this.trainable=!1,this.built=!0,this.sparse=e.sparse,e.inputShape!=null&&e.batchInputShape!=null)throw new O("Only provide the inputShape OR batchInputShape argument to inputLayer, not both at the same time.");let t=e.batchInputShape;if(t==null){if(e.inputShape==null)throw new O("An InputLayer should be passed either a `batchInputShape` or an `inputShape`.");t=[e.batchSize].concat(e.inputShape)}else if(e.batchSize!=null)throw new O("Cannot specify batchSize if batchInputShape is specified when creating an InputLayer.");const s=e.dtype||"float32";this.batchInputShape=t,this.dtype=s,this.inputSpec=[{shape:t}];const o=new Un(this.dtype,this.batchInputShape,this,[],{},this.name);o.nodeIndex=0,o.tensorIndex=0,new Vl({outboundLayer:this,inboundLayers:[],nodeIndices:[],tensorIndices:[],inputTensors:[o],outputTensors:[o],inputMasks:[null],outputMasks:[null],inputShapes:[t],outputShapes:[t]})}apply(e,t){throw new O(`Cannot pass any input to an InputLayer's apply() method. InputLayer name: ${this.name}`)}dispose(){return{refCountAfterDispose:this._refCount,numDisposedVariables:0}}getConfig(){return{batchInputShape:this.batchInputShape,dtype:this.dtype,sparse:this.sparse,name:this.name}}}Ni.className="InputLayer",ee(Ni);function _T(n){if(n.batchShape==null&&n.shape==null)throw new Error("Please provide to Input either a `shape` or a `batchShape` argument. Note that `shape` does not include the batch dimension.");if(n.batchShape!=null&&n.shape!=null)throw new O("Please provide either a `shape` or `batchShape` argument to Input, but not both.");let e=n.batchShape;n.shape!=null&&e==null&&(e=[null].concat(n.shape));let t=n.dtype;return t==null&&(t="float32"),new Ni({batchInputShape:e,name:n.name,dtype:t,sparse:n.sparse}).inboundNodes[0].outputTensors[0]}function OT(n,e){if(n.dtype==null||n.dtype===e.dtype)return e;try{return re(e,n.dtype)}catch(t){throw new O(`The dtype of the feed (${e.dtype}) can not be cast to the dtype of the key '${n.name}' (${n.dtype}).`)}}class $s{constructor(e){if(this.id2Value={},this.id2Mask={},this.name2Id={},e instanceof $s)for(const t in e.id2Value)this.id2Value[t]=e.id2Value[t],t in e.id2Mask&&(this.id2Mask[t]=e.id2Mask[t]);else{if(e==null)return;for(const t of e)this.add(t.key,t.value)}}add(e,t,s){if(this.id2Value[e.id]==null)this.id2Value[e.id]=OT(e,t),this.name2Id[e.name]=e.id,s!=null&&(this.id2Mask[e.id]=s);else throw new O(`Duplicate key: name=${e.name}, id=${e.id}`);return this}addFeed(e){this.add(e.key,e.value)}hasKey(e){return this.id2Value[e.id]!=null}names(){return Object.keys(this.name2Id)}getValue(e){if(e instanceof Un){if(this.id2Value[e.id]==null)throw new O(`Nonexistent key: ${e.name}`);return this.id2Value[e.id]}else{const t=this.name2Id[e];if(t==null)throw new O(`Feed dict has no SymbolicTensor name: ${e}`);return this.id2Value[t]}}getMask(e){if(e instanceof Un){if(this.id2Value[e.id]==null)throw new O(`Nonexistent key: ${e.name}`);return this.id2Mask[e.id]}else{const t=this.name2Id[e];if(t==null)throw new O(`Feed dict has no SymbolicTensor name: ${e}`);return this.id2Mask[t]}}disposeMasks(){this.id2Mask!=null&&xe(this.id2Mask)}}const Wl=new Ig,Ul=new Ig;function LT(n){Wl!=null&&Wl.setMaxEntries(n),Ul!=null&&Ul.setMaxEntries(n)}function Ti(n,e,t,s){const o=t==null?!1:t.training,r=Array.isArray(n),i=r?n:[n],a=i.map(f=>f.name),l=[],c=e.names();for(const f of a)c.indexOf(f)!==-1?l.push(e.getValue(f)):l.push(null);const u=a.join(",")+"|"+e.names().sort().join(",");let h=Wl.get(u),d;if(h==null){const f=MT(i,e);h=f.sorted,d=f.recipientCounts,Wl.put(u,h),Ul.put(u,d)}d={},o||Object.assign(d,Ul.get(u));const p=new $s(e);for(let f=0;f<h.length;++f){const m=h[f],g=m.sourceLayer;if(g instanceof Ni)continue;const x=[],b=[],w=[];let y=!1;for(const N of m.inputs){const T=p.getValue(N),I=p.getMask(N);x.push(T),b.push(I),I!=null&&(y=!0),o||(d[N.name]--,d[N.name]===0&&!e.hasKey(N)&&a.indexOf(N.name)===-1&&!T.isDisposed&&N.sourceLayer.stateful!==!0&&w.push(T))}y&&(t=t||{},t.mask=b[0]);const C=Pe(g.apply(x,t));let $=null;g.supportsMasking&&($=g.computeMask(x,b));const v=BT(m),k=Array.isArray(v)?v:[v];for(let N=0;N<k.length;++N){p.hasKey(k[N])||p.add(k[N],C[N],Array.isArray($)?$[0]:$);const T=a.indexOf(k[N].name);T!==-1&&(l[T]=C[N])}o||xe(w)}return p.disposeMasks(),r?l:l[0]}function MT(n,e){S(n!=null&&n.length>0,()=>"Expected at least one fetch, got none");let t=[],s={};if(n.length===1){const o=qg(n[0],e);t=o.sorted,s=o.recipientMap}else{const o=new Set;for(const r of n){const{sorted:i,recipientMap:a}=qg(r,e);for(const l of i)o.has(l.name)||(t.push(l),o.add(l.name));for(const l in a)s[l]==null&&(s[l]=new Set),a[l].forEach(c=>s[l].add(c))}}return{sorted:t,recipientCounts:PT(s)}}function PT(n){const e={};for(const t in n)e[t]=n[t].size;return e}function qg(n,e){const t=new Set,s=[],o={};for(const a of e.names())t.add(a);const r=[],i=[];for(r.push(n);r.length>0;){const a=r[r.length-1];if(t.has(a.name)){r.pop();continue}const l=i[i.length-1]===r.length-1;if(a.inputs.length===0||l)r.pop(),s.push(a),t.add(a.name),l&&i.pop();else{i.push(r.length-1);for(const c of a.inputs)o[c.name]==null&&(o[c.name]=new Set),o[c.name].add(a.name),!t.has(c.name)&&r.push(c)}}return{sorted:s,recipientMap:o}}function BT(n){let e;if(n.sourceLayer.inboundNodes.length===1)e=n.sourceLayer.output;else{let t=null;for(let s=0;s<n.sourceLayer.inboundNodes.length;++s)for(const o of n.sourceLayer.inboundNodes[s].outputTensors)if(o.id===n.id){t=s;break}e=n.sourceLayer.getOutputAt(t)}return e}U().registerFlag("TOPOLOGICAL_SORT_CACHE_MAX_ENTRIES",()=>100,LT);function wd(n,e){return z(()=>At(me(L(n,n),e,!0)))}class Ei extends Vo{getConfig(){return{}}}class jg extends Ei{constructor(e){super(),this.defaultMaxValue=2,this.defaultAxis=0,this.maxValue=e.maxValue!=null?e.maxValue:this.defaultMaxValue,this.axis=e.axis!=null?e.axis:this.defaultAxis}apply(e){return z(()=>{const t=wd(e,this.axis),s=en(t,0,this.maxValue);return L(e,ge(s,te(pt(),t)))})}getConfig(){return{maxValue:this.maxValue,axis:this.axis}}}jg.className="MaxNorm",ee(jg);class Kg extends Ei{constructor(e){super(),this.defaultAxis=0,this.axis=e.axis!=null?e.axis:this.defaultAxis}apply(e){return z(()=>ge(e,te(pt(),wd(e,this.axis))))}getConfig(){return{axis:this.axis}}}Kg.className="UnitNorm",ee(Kg);class Xg extends Ei{apply(e){return Js(e)}}Xg.className="NonNeg",ee(Xg);class Yg extends Ei{constructor(e){super(),this.defaultMinValue=0,this.defaultMaxValue=1,this.defaultRate=1,this.defaultAxis=0,this.minValue=e.minValue!=null?e.minValue:this.defaultMinValue,this.maxValue=e.maxValue!=null?e.maxValue:this.defaultMaxValue,this.rate=e.rate!=null?e.rate:this.defaultRate,this.axis=e.axis!=null?e.axis:this.defaultAxis}apply(e){return z(()=>{const t=wd(e,this.axis),s=te(L(this.rate,en(t,this.minValue,this.maxValue)),L(1-this.rate,t));return L(e,ge(s,te(pt(),t)))})}getConfig(){return{minValue:this.minValue,maxValue:this.maxValue,rate:this.rate,axis:this.axis}}}Yg.className="MinMaxNorm",ee(Yg);const Zg={maxNorm:"MaxNorm",minMaxNorm:"MinMaxNorm",nonNeg:"NonNeg",unitNorm:"UnitNorm"};function mt(n){return nd(n)}function Qg(n,e={}){return Ii(n,cn.getMap().classNameMap,e,"constraint")}function gt(n){if(n==null)return null;if(typeof n=="string"){const t={className:n in Zg?Zg[n]:n,config:{}};return Qg(t)}else return n instanceof Ei?n:Qg(n)}function co(n){return X(this,null,function*(){if(n==null)return;const e=[],t=[],s=[];for(const o in n){const r=n[o];if(typeof r!="number"){const i=r;e.push(i.data()),t.push(o),s.push(i)}}if(e.length>0){const o=yield Promise.all(e);for(let r=0;r<o.length;++r)n[t[r]]=o[r][0];xe(s)}})}function Jg(n){if(n!=null)for(const e in n){const t=n[e];typeof t!="number"&&t.dispose()}}var ex;(function(n){n[n.SILENT=0]="SILENT",n[n.VERBOSE=1]="VERBOSE"})(ex||(ex={}));const zT=125;class Ri{constructor(){this.validationData=null}setParams(e){this.params=e}onEpochBegin(e,t){return X(this,null,function*(){})}onEpochEnd(e,t){return X(this,null,function*(){})}onBatchBegin(e,t){return X(this,null,function*(){})}onBatchEnd(e,t){return X(this,null,function*(){})}onTrainBegin(e){return X(this,null,function*(){})}onTrainEnd(e){return X(this,null,function*(){})}setModel(e){}}class VT{constructor(e,t=10){e==null&&(e=[]),this.callbacks=e,this.queueLength=t}append(e){this.callbacks.push(e)}setParams(e){for(const t of this.callbacks)t.setParams(e)}setModel(e){for(const t of this.callbacks)t.setModel(e)}onEpochBegin(e,t){return X(this,null,function*(){t==null&&(t={});for(const s of this.callbacks)yield s.onEpochBegin(e,t)})}onEpochEnd(e,t){return X(this,null,function*(){t==null&&(t={});for(const s of this.callbacks)yield s.onEpochEnd(e,t)})}onBatchBegin(e,t){return X(this,null,function*(){t==null&&(t={});for(const s of this.callbacks)yield s.onBatchBegin(e,t)})}onBatchEnd(e,t){return X(this,null,function*(){t==null&&(t={});for(const s of this.callbacks)yield s.onBatchEnd(e,t)})}onTrainBegin(e){return X(this,null,function*(){e==null&&(e={});for(const t of this.callbacks)yield t.onTrainBegin(e)})}onTrainEnd(e){return X(this,null,function*(){e==null&&(e={});for(const t of this.callbacks)yield t.onTrainEnd(e)})}}class WT extends Ri{constructor(){super()}onEpochBegin(e){return X(this,null,function*(){this.seen=0,this.totals={}})}onBatchEnd(e,t){return X(this,null,function*(){t==null&&(t={});const s=t.size==null?0:t.size;this.seen+=s;for(const o in t){const r=t[o];if(typeof r=="number")this.totals.hasOwnProperty(o)||(this.totals[o]=0),this.totals[o]=this.totals[o]+r*s;else{let i;o in this.totals?i=this.totals[o]:this.totals[o]=0;const a=z(()=>te(this.totals[o],L(r,s)));this.totals[o]=a,i!=null&&i.dispose()}}})}onEpochEnd(e,t){return X(this,null,function*(){if(t!=null)for(const s of this.params.metrics)this.totals[s]!=null&&(typeof this.totals[s]=="number"?t[s]=this.totals[s]/this.seen:z(()=>{const o=L(ge(1,this.seen),this.totals[s]);t[s]=o,this.totals[s].dispose(),Dn(t[s])}))})}}class UT extends Ri{onTrainBegin(e){return X(this,null,function*(){this.epoch=[],this.history={}})}onEpochEnd(e,t){return X(this,null,function*(){t==null&&(t={}),this.epoch.push(e);for(const s in t)this.history[s]==null&&(this.history[s]=[]),this.history[s].push(t[s])})}syncData(){return X(this,null,function*(){const e=[],t=[],s=[];for(const r in this.history){const i=this.history[r];for(let a=0;a<i.length;++a)if(typeof i[a]!="number"){const l=i[a];e.push(l.data()),t.push(r),s.push(a)}}const o=yield Promise.all(e);for(let r=0;r<o.length;++r)this.history[t[r]][s[r]].dispose(),this.history[t[r]][s[r]]=o[r][0]})}}class GT extends Ri{constructor(e,t){if(super(),this.currentEpoch=0,this.nowFunc=e.nowFunc,this.nextFrameFunc=e.nextFrameFunc||Wm,this.yieldEvery=t||"auto",this.yieldEvery==="auto"&&(this.yieldEvery=zT),this.yieldEvery==="never"&&e.onYield!=null)throw new Error("yieldEvery is `never` but you provided an `onYield` callback. Either change `yieldEvery` or remove the callback");Pc(this.yieldEvery)&&(this.maybeWait=oT(this.maybeWait.bind(this),this.yieldEvery,this.nowFunc)),this.trainBegin=e.onTrainBegin,this.trainEnd=e.onTrainEnd,this.epochBegin=e.onEpochBegin,this.epochEnd=e.onEpochEnd,this.batchBegin=e.onBatchBegin,this.batchEnd=e.onBatchEnd,this.yield=e.onYield}maybeWait(e,t,s){return X(this,null,function*(){const o=[];this.yield!=null&&(yield co(s),o.push(this.yield(e,t,s))),o.push(this.nextFrameFunc()),yield Promise.all(o)})}onEpochBegin(e,t){return X(this,null,function*(){this.currentEpoch=e,this.epochBegin!=null&&(yield co(t),yield this.epochBegin(e,t))})}onEpochEnd(e,t){return X(this,null,function*(){const s=[];this.epochEnd!=null&&(yield co(t),s.push(this.epochEnd(e,t))),this.yieldEvery==="epoch"&&s.push(this.nextFrameFunc()),yield Promise.all(s)})}onBatchBegin(e,t){return X(this,null,function*(){this.batchBegin!=null&&(yield co(t),yield this.batchBegin(e,t))})}onBatchEnd(e,t){return X(this,null,function*(){const s=[];this.batchEnd!=null&&(yield co(t),s.push(this.batchEnd(e,t))),this.yieldEvery==="batch"?s.push(this.nextFrameFunc()):Pc(this.yieldEvery)&&s.push(this.maybeWait(this.currentEpoch,e,t)),yield Promise.all(s)})}onTrainBegin(e){return X(this,null,function*(){this.trainBegin!=null&&(yield co(e),yield this.trainBegin(e))})}onTrainEnd(e){return X(this,null,function*(){this.trainEnd!=null&&(yield co(e),yield this.trainEnd(e))})}}function tx(n,e){return n==null&&(n={}),n instanceof Ri?[n]:Array.isArray(n)&&n[0]instanceof Ri?n:Pe(n).map(s=>new GT(s,e))}class pn{constructor(){}static registerCallbackConstructor(e,t){S(e>=0&&Number.isInteger(e),()=>`Verbosity level is expected to be an integer >= 0, but got ${e}`),pn.checkForDuplicate(t),pn.constructors[e]==null&&(pn.constructors[e]=[]),pn.constructors[e].push(t)}static checkForDuplicate(e){for(const t in pn.constructors)pn.constructors[+t].forEach(o=>{if(o===e)throw new O("Duplicate callback constructor.")})}static clear(){pn.constructors={}}static createCallbacks(e){const t=[];for(const s in pn.constructors){const o=+s;e>=o&&t.push(...pn.constructors[o])}return t.map(s=>new s)}}pn.constructors={};function nx(n,e,t,s,o,r,i,a,l){const c=new UT,u=[new WT,...pn.createCallbacks(e)];n!=null&&u.push(...n),u.push(c);const h=new VT(u);return h.setParams({epochs:t,initialEpoch:s,samples:o,steps:r,batchSize:i,verbose:e,doValidation:a,metrics:l}),{callbackList:h,history:c}}function Gn(n,e={},t=!1){return Ii(n,cn.getMap().classNameMap,e,"layer",t)}function Gl(n,e){return z(()=>{n.dtype!=="float32"&&(n=re(n,"float32"));const t=me(ki(n),e,!0),s=Lo(t.shape,pt()),o=At(xs(t,s));return ge(n,o)})}function Hl(n,e){return z(()=>lt(ki(be(e,n)),-1))}function Cd(n,e){return z(()=>lt(Lt(be(e,n)),-1))}function Id(n,e){return z(()=>{const t=be(n,e),s=en(Lt(n),pt(),Number.MAX_VALUE),o=Lt(ge(t,s));return L(100,lt(o,-1))})}function HT(n,e){return z(()=>{const t=en(e,pt(),Number.MAX_VALUE),s=Ln(te(1,t)),o=en(n,pt(),Number.MAX_VALUE),r=Ln(te(1,o));return lt(ki(be(s,r)),-1)})}function qT(n,e){return z(()=>{const t=xs(0,be(1,L(n,e)));return lt(ki(t),-1)})}function jT(n,e){return z(()=>{const t=xs(0,be(1,L(n,e)));return lt(t,-1)})}function KT(n,e){return z(()=>{const t=me(L(n,e),-1),s=wn(L(be(1,n),e),-1);return xs(0,te(1,be(s,t)))})}function XT(n,e){return z(()=>{const t=Math.log(2),s=be(e,n),o=be(te(s,fi(L(-2,s))),t);return lt(o,-1)})}function Ai(n,e,t=!1){return z(()=>{if(t)e=bh(e);else{const s=me(e,e.shape.length-1,!0);e=ge(e,s)}return e=en(e,pt(),1-pt()),st(me(L(re(n,"float32"),Ln(e)),e.shape.length-1))})}function ql(n,e,t=!1){return z(()=>{const s=re(xl(gT(n)),"int32");e=en(e,pt(),1-pt());const o=e.shape,r=V(Jf(s,o[o.length-1]),o);return Ai(r,e,t)})}function YT(n,e){if(!_e(n.shape,e.shape))throw new O(`logits and labels must have the same shape, but got shapes ${JSON.stringify(n.shape)} and ${JSON.stringify(e.shape)}`);return z(()=>{const t=Js(e),s=st(Lt(e));return te(be(t,L(e,n)),Xf(On(s)))})}function jl(n,e){return z(()=>{let t;return t=en(e,pt(),1-pt()),t=Ln(ge(t,be(1,t))),lt(YT(n,t),-1)})}function ZT(n,e){return z(()=>{const t=en(n,pt(),1),s=en(e,pt(),1);return me(L(n,Ln(ge(t,s))),-1)})}function QT(n,e){return z(()=>{const t=Ln(te(pt(),e));return lt(be(e,L(n,t)),-1)})}function sx(n,e){return z(()=>{const t=Gl(n,-1),s=Gl(e,-1),o=L(t,s);return st(me(o,-1))})}const Kl={meanSquaredError:Hl,meanAbsoluteError:Cd,meanAbsolutePercentageError:Id,meanSquaredLogarithmicError:HT,squaredHinge:qT,hinge:jT,categoricalHinge:KT,logcosh:XT,categoricalCrossentropy:Ai,sparseCategoricalCrossentropy:ql,binaryCrossentropy:jl,kullbackLeiblerDivergence:ZT,poisson:QT,cosineProximity:sx};function $d(n){if(typeof n=="string"){if(n in Kl)return Kl[n];let e=`Unknown loss ${n}`;throw n.toLowerCase().includes("softmaxcrossentropy")&&(e=`Unknown loss ${n}. Use "categoricalCrossentropy" as the string name for tf.losses.softmaxCrossEntropy`),new O(e)}else return n}function ox(n,e){return z(()=>{const t=L(.5,ln(e)),s=Vn(Gt(e,t),n.dtype);return lt(_n(n,s),-1)})}function rx(n,e){return z(()=>Vn(_n(js(n,-1),js(e,-1)),"float32"))}function JT(n,e){return z(()=>re(me(es(_n(n,1),_n(e,1))),"float32"))}function eE(n,e){return z(()=>re(me(es(_n(n,0),_n(e,1))),"float32"))}function tE(n,e){return z(()=>{const t=JT(n,e),s=eE(n,e),o=te(t,s);return re(dt(Gt(o,0),ge(t,o),0),"float32")})}function nE(n,e){return jl(n,e)}function sE(n,e){return n.rank===e.rank&&(n=to(n,[n.rank-1])),e=js(e,-1),e.dtype!==n.dtype&&(e=re(e,n.dtype)),re(_n(n,e),"float32")}const oE=Hl,rE=Hl,iE=Cd,aE=Cd,lE=Id,cE=Id,ix=Ai,uE=sx,ax=ql,Xl={binaryAccuracy:ox,categoricalAccuracy:rx,precision:tE,categoricalCrossentropy:ix,sparseCategoricalCrossentropy:ax,mse:oE,MSE:rE,mae:iE,MAE:aE,mape:lE,MAPE:cE,cosine:uE};function hE(n){if(typeof n=="string"&&n in Xl)return Xl[n];if(typeof n!="string"&&n!=null)return n;throw new O(`Unknown metric ${n}`)}function Yl(n){if(zn(n!==null,`Unknown LossOrMetricFn ${n}`),typeof n=="string")return n;{let e;for(const t of Object.keys(Kl))if(Kl[t]===n){e=t;break}if(e!==void 0)return e;for(const t of Object.keys(Xl))if(Xl[t]===n){e=t;break}return e!==void 0?e:n.name}}function dE(n){const e={Adagrad:()=>Wo.adagrad(.01),Adadelta:()=>Wo.adadelta(1,.95,pt()),Adam:()=>Wo.adam(.001,.9,.999,pt()),Adamax:()=>Wo.adamax(.002,.9,.999,pt(),0),RMSProp:()=>Wo.rmsprop(.001,.9,0,pt()),SGD:()=>Wo.sgd(.01)};if(e.adagrad=e.Adagrad,e.adadelta=e.Adadelta,e.adam=e.Adam,e.adamax=e.Adamax,e.rmsprop=e.RMSProp,e.sgd=e.SGD,n in e)return e[n]();throw new O(`Unknown Optimizer ${n}`)}const lx=1*1024*1024;function cx(n,e,t=!1){if(n==null||typeof n!="object"||Object.getPrototypeOf(n)!==Object.prototype||!vd(n))throw new Error("User-defined metadata is expected to be a JSON object, but is not.");if(t){const s=JSON.stringify(n);s.length>lx&&console.warn(`User-defined metadata of model "${e}" is too large in size (length=${s.length} when serialized). It is not recommended to store such large objects in user-defined metadata. Please make sure its serialized length is <= ${lx}.`)}}function vd(n){if(n===null)return!0;if(typeof n=="object")if(Object.getPrototypeOf(n)===Object.prototype){const e=Object.keys(n);for(const t of e)if(typeof t!="string"||!vd(n[t]))return!1;return!0}else if(Array.isArray(n)){for(const e of n)if(!vd(e))return!1;return!0}else return!1;else{const e=typeof n;return e==="string"||e==="number"||e==="boolean"}}function pE(n,e,t,s=console.log){const o=mE(n),r=["Layer (type)","Input Shape","Output shape","Param #"];o?(e=e||90,t=t||[.32,.61,.89,1]):(e=e||115,t=t||[.24,.48,.7,.8,1]),t[t.length-1]<=1&&(t=t.map(u=>Math.floor(e*u)));let i;if(!o){r.push("Receives inputs"),i=[];for(const u in n.nodesByDepth)i.push(...n.nodesByDepth[u])}s("_".repeat(e)),Zl(r,t,s),s("=".repeat(e));const a=n.layers;for(let u=0;u<a.length;++u)o?gE(a[u],t,s):xE(a[u],t,i,s),s((u===a.length-1?"=":"_").repeat(e));n.checkTrainableWeightsConsistency();const l=fE(n),c=zl(n.nonTrainableWeights);s(`Total params: ${l+c}`),s(`Trainable params: ${l}`),s(`Non-trainable params: ${c}`),s("_".repeat(e))}function fE(n){let e;return n.collectedTrainableWeights!=null?e=zl(n.collectedTrainableWeights):e=zl(n.trainableWeights),e}function mE(n){let e=!0;const t=[],s=[];for(const o in n.nodesByDepth)t.push(n.nodesByDepth[o]);for(const o of t){if(o.length>1||o.length===1&&o[0].inboundLayers.length>1){e=!1;break}s.push(...o)}if(e)for(const o of n.layers){let r=!1;for(const i of o.inboundNodes)if(s.indexOf(i)!==-1)if(r){e=!1;break}else r=!0;if(!e)break}return e}function Zl(n,e,t=console.log){let s="";for(let o=0;o<n.length;++o)o>0&&(s=s.slice(0,s.length-1)+" "),s+=n[o],s=s.slice(0,e[o]),s+=" ".repeat(e[o]-s.length);t(s)}function gE(n,e,t){let s,o;try{o=n.inboundNodes.map(l=>JSON.stringify(l.inputShapes)).join(",")}catch(l){o="multiple"}try{s=JSON.stringify(n.outputShape)}catch(l){s="multiple"}const r=n.name,i=n.getClassName(),a=[`${r} (${i})`,o,s,n.countParams().toString()];Zl(a,e,t)}function xE(n,e,t,s){let o,r;try{r=n.inboundNodes.map(h=>JSON.stringify(h.inputShapes)).join(",")}catch(h){r="multiple"}try{o=JSON.stringify(n.outputShape)}catch(h){o="multiple"}const i=[];for(const h of n.inboundNodes)if(!(t!=null&&t.length>0&&t.indexOf(h)===-1))for(let d=0;d<h.inboundLayers.length;++d){const p=h.inboundLayers[d].name,f=h.nodeIndices[d],m=h.tensorIndices[d];i.push(`${p}[${f}][${m}]`)}const a=n.name,l=n.getClassName(),c=i.length===0?"":i[0],u=[`${a} (${l})`,r,o,n.countParams().toString(),c];Zl(u,e,s);for(let h=1;h<i.length;++h)Zl(["","","","",i[h]],e,s)}function ux(n,e,t){return(n==="inboundNodes"||n==="outputLayers"||n==="inputLayers")&&e===0&&typeof t=="string"}function Ql(n,e){if(n===null)return null;if(typeof n=="string")return ro(n);if(typeof n=="number"||typeof n=="boolean")return n;if(n instanceof Array){const t=[],s=n.length;for(let o=0;o<s;++o){const r=n[o];ux(e,o,r)?t.push(r):t.push(Ql(r,e))}return t}else{const t={};for(const s of Object.keys(n)){const o=n[s];if(s==="name"&&typeof o=="string")t[s]=o;else{const r=ro(s);t[r]=Ql(o,r)}}return t}}function kd(n,e){if(n==null)return null;if(typeof n=="string")return rs(n);if(typeof n=="number"||typeof n=="boolean")return n;if(n instanceof Array){const t=[],s=n.length;for(let o=0;o<s;++o){const r=n[o];ux(e,o,r)?t.push(r):t.push(kd(r,e))}return t}else{const t={};for(const s of Object.keys(n)){const o=n[s],r=rs(s);(s==="name"||s==="className")&&typeof o=="string"?t[r]=o:t[r]=kd(o,s)}return t}}const hx="4.20.0";const bE=n=>{const e=Object.keys(n);if(e.length===0)return!1;const t=e[0].split("/");return!isNaN(parseInt(t[t.length-1],10))};class Sn extends Se{constructor(e){if(super({}),this.containerNodes=new Set,this.name=e.name,this.name==null){const b=this.getClassName().toLowerCase();this.name=Ll(b)}if(this.supportsMasking=!1,this.trainable_=!0,Array.isArray(e.inputs)?this.inputs=e.inputs.slice():this.inputs=[e.inputs],Array.isArray(e.outputs)?this.outputs=e.outputs.slice():this.outputs=[e.outputs],ws(this.inputs).length!==this.inputs.length)throw new O(`The list of inputs passed to the model is redundant. All inputs should only appear once. Found: ${this.inputs.map(b=>b.name)}`);ws(this.outputs).length!==this.outputs.length&&console.warn(`The list of outputs passed to the model is redundant. All outputs should only appear once. Found: ${this.outputs.map(b=>b.name)}`),this.inputLayers=[],this.inputLayersNodeIndices=[],this.inputLayersTensorIndices=[],this.outputLayers=[],this.outputLayersNodeIndices=[],this.outputLayersTensorIndices=[],this.layers=[],this.internalContainerRefs=[];for(const b of this.outputs){const w=b.sourceLayer,y=b.nodeIndex,C=b.tensorIndex;this.outputLayers.push(w),this.outputLayersNodeIndices.push(y),this.outputLayersTensorIndices.push(C)}for(const b of this.inputs){const w=b.sourceLayer,y=b.nodeIndex,C=b.tensorIndex;zn(y===0,"input layer has >1 nodes"),zn(C===0,"input layer has >1 tensors"),this.inputLayers.push(w),this.inputLayersNodeIndices.push(y),this.inputLayersTensorIndices.push(C)}this.inputNames=[],this.outputNames=[],this.feedInputShapes=[],this.feedInputNames=[],this.feedOutputNames=[];for(let b=0;b<this.inputLayers.length;b++){const w=this.inputLayers[b];if(!(w instanceof Ni))throw new TypeError(`Input layers to a LayersModel must be InputLayer objects. Received inputs: ${e.inputs}. Input ${b} (0-based) originates from layer type ${w.getClassName()}.`);this.inputNames.push(w.name),this.feedInputShapes.push(w.batchInputShape),this.feedInputNames.push(w.name)}for(const b of this.outputLayers)this.outputNames.push(b.name);this.internalInputShapes=this.inputs.map(b=>b.shape),this.internalOutputShapes=this.outputs.map(b=>b.shape);const t={},s={},o={},r={},i={},a=[],l=(b,w,y,C,$,v)=>{(C==null||$==null||v==null)&&(C=b.sourceLayer,$=b.nodeIndex,v=b.tensorIndex);const k=C.inboundNodes[$];if(y.indexOf(k)!==-1)throw new un(`The tensor ${b.name} at layer "${C.name}" is part of a cycle.`);if(w.indexOf(k)!==-1)return;this.containerNodes.add(Sn.nodeKey(C,$)),C.id in i||(i[C.id]=Object.keys(i).length),y.indexOf(k)===-1&&y.push(k);const N=k.inboundLayers.length;for(let T=0;T<N;T++){const I=k.inputTensors[T],E=k.inboundLayers[T],R=k.nodeIndices[T],D=k.tensorIndices[T];l(I,w,y,E,R,D)}for(w.push(k);y.indexOf(k)>=0;)y.splice(y.indexOf(k),1);a.push(k)},c=[],u=[];for(const b of this.outputs)l(b,c,u);const h=a.slice().reverse();for(const b of h){s[b.id]=b,b.id in t||(t[b.id]=0);let w=t[b.id];const y=o[b.outboundLayer.id]==null?0:o[b.outboundLayer.id];w=Math.max(w,y),o[b.outboundLayer.id]=w,r[b.outboundLayer.id]=b.outboundLayer,t[b.id]=w;for(let C=0;C<b.inboundLayers.length;C++){const $=b.inboundLayers[C],v=b.nodeIndices[C],k=$.inboundNodes[v],N=t[k.id]==null?0:t[k.id];t[k.id]=Math.max(w+1,N),s[k.id]=k}}const d={};for(const b in t){const w=t[b];w in d||(d[w]=[]),d[w].push(s[b])}const p={};for(const b in o){const w=o[b];w in p||(p[w]=[]),p[w].push(r[b])}let f=Object.keys(p).map(b=>parseInt(b,10)).sort(_l);this.layers=[];for(const b of f){const w=p[b];w.sort((y,C)=>{const $=i[y.id],v=i[C.id];return $<v?-1:$>v?1:0});for(const y of w)y instanceof Sn&&this.internalContainerRefs.push(y),this.layers.push(y)}this.layersByDepth=p,f=Object.keys(d).map(b=>parseInt(b,10)).sort(_l);const m=this.inputs.slice(),g=[];for(const b of f)for(const w of d[b]){const y=w.outboundLayer;if(y!=null){for(const C of w.inputTensors)if(m.indexOf(C)===-1)throw new un(`Graph disconnected: cannot obtain value for tensor ${C} at layer "${y.name}". The following previous layers were accessed without issue: ${g}`);for(const C of w.outputTensors)m.push(C);g.push(y.name)}}this.nodesByDepth=d;const x=this.layers.map(b=>b.name);for(const b of x){const w=x.filter(y=>y===b).length;if(w!==1)throw new un(`The name "${b}" is used ${w} times in the model. All layer names should be unique. Layer names: `+JSON.stringify(x))}this.outboundNodes=[],this.inboundNodes=[],new Vl({outboundLayer:this,inboundLayers:[],nodeIndices:[],tensorIndices:[],inputTensors:this.inputs,outputTensors:this.outputs,inputMasks:this.inputs.map(b=>null),outputMasks:this.outputs.map(b=>null),inputShapes:this.inputs.map(b=>b.shape),outputShapes:this.outputs.map(b=>b.shape)}),this.built=!0,this._refCount=1}assertNotDisposed(){if(this._refCount===0)throw new Error(`Container '${this.name}' is already disposed.`)}dispose(){this.assertNotDisposed();const e={refCountAfterDispose:null,numDisposedVariables:0};if(--this._refCount===0){for(const t of this.layers)e.numDisposedVariables+=t.dispose().numDisposedVariables;for(const t of this.internalContainerRefs)e.numDisposedVariables+=t.dispose().numDisposedVariables}return e.refCountAfterDispose=this._refCount,e}get trainable(){return this.trainable_}set trainable(e){this.layers.forEach(t=>{t._trainableWeights.forEach(s=>s.trainable=e)}),this.trainable_=e}get trainableWeights(){if(this._trainableWeights.length>0)throw new O("Container instance unexpectedly contains _trainableWeights.The trainable weights of a Container are a union of the trainable weights of its consituent Layers. Its own _trainableWeights must remain an empty Array.");if(!this.trainable)return[];let e=[];for(const t of this.layers)e=e.concat(t.trainableWeights);return e}get nonTrainableWeights(){const e=[];for(const t of this.layers)e.push(...t.nonTrainableWeights);if(!this.trainable){const t=[];for(const s of this.layers)t.push(...s.trainableWeights);return t.concat(e)}return e}get weights(){return this.trainableWeights.concat(this.nonTrainableWeights)}loadWeights(e,t=!0){const s={};let o=0;const r=bE(e);r&&this.parseWeights(e);for(const a of this.layers)for(const[l,c]of a.weights.entries()){const u=r?`${c.name.split("/").slice(0,-1).join("/")+"/"}${l}`:c.originalName;if(s[u]!=null)throw new O(`Duplicate weight name: ${u}`);s[u]=c,o++}const i=[];for(const a in e){let l=a;if(s[a]==null){const c=a.split("/");l=c.slice(0,-2).concat([c[c.length-1]]).join("/")}if(s[l]!=null)i.push([s[l],e[a]]);else if(t)throw new O(`Provided weight data has no target variable: ${a}`);delete s[l]}if(t){const a=[];for(const l in s)a.push(l);if(a.length>0)throw new O(`${a.length} of ${o} weights are not set: ${a}`)}yd(i)}parseWeights(e){for(const t in Object.keys(e)){const s=t.split("/"),o=["vars","layer_checkpoint_dependencies"],r=s.map(i=>i.startsWith("_")?i.slice(1):i).filter(i=>!o.includes(i)).join("/");r!==t&&(e[r]=e[t],delete e[t])}}updatedConfig(){const e=this.getConfig(),t={};return t.className=this.getClassName(),t.config=e,t.kerasVersion=`tfjs-layers ${hx}`,t.backend="TensorFlow.js",t}toJSON(e,t=!0){const s=kd(this.updatedConfig());return t?JSON.stringify(s):s}call(e,t){return z(()=>{e=Pe(e);const s=new $s;for(let o=0;o<this.inputs.length;++o)s.add(this.inputs[o],e[o]);return Ti(this.outputs,s,t)})}computeMask(e,t){return z(()=>{e=Pe(e);let s;return t==null?s=oo(null,e.length):s=Pe(t),this.runInternalGraph(e,s)[1]})}computeOutputShape(e){const t=Bl(e);if(t.length!==this.inputLayers.length)throw new O(`Invalid inputShape argument ${e}: model has ${this.inputLayers.length} tensor inputs.`);const s={};for(let a=0;a<t.length;a++){const l=this.inputLayers[a],c=t[a],u=l.name+"_0_0";s[u]=c}const o=Object.keys(this.nodesByDepth).map(a=>parseInt(a,10)).sort(_l);if(o.length>1)for(const a of o){const l=this.nodesByDepth[a];for(const c of l){const u=c.outboundLayer;if(this.inputLayers.map(m=>m.id).indexOf(u.id)!==-1)continue;const h=[];for(let m=0;m<c.inboundLayers.length;m++){const g=c.inboundLayers[m],x=c.nodeIndices[m],b=c.tensorIndices[m],w=`${g.name}_${x}_${b}`,y=s[w];h.push(y)}const d=u.computeOutputShape(Ht(h)),p=Bl(d),f=u.inboundNodes.indexOf(c);for(let m=0;m<p.length;m++){const g=`${u.name}_${f}_${m}`;s[g]=p[m]}}}const r=[],i=[];for(let a=0;a<this.outputLayers.length;a++){const l=this.outputLayers[a],c=this.outputLayersNodeIndices[a],u=this.outputLayersTensorIndices[a],h=`${l.name}_${c}_${u}`;i.push(h)}for(let a=0;a<i.length;a++){const l=i[a];zn(l in s),r.push(s[l])}return Ht(r)}runInternalGraph(e,t){t==null&&(t=oo(null,e.length));const s={};for(let l=0;l<this.inputs.length;++l){const c=this.inputs[l],u=e[l],h=t[l];s[c.id]=[u,h]}const o=Object.keys(this.nodesByDepth).map(l=>parseInt(l,10)).sort(_l);for(const l of o){const c=this.nodesByDepth[l];for(const u of c){const h=u.outboundLayer,d=u.inputTensors,p=u.outputTensors,f=new Array;for(const m of d)m.id in s&&f.push(s[m.id]);if(f.length===d.length){let m={},g,x,b,w;if(u.callArgs!=null&&(m=u.callArgs),f.length===1){const[y,C]=f[0];m.mask==null&&(m.mask=C),b=Pe(h.call(y,m)),w=Pe(h.computeMask(y,C)),g=[y],x=[C]}else g=f.map(y=>y[0]),x=f.map(y=>y[1]),m.mask==null&&(m.mask=x),b=Pe(h.call(g,m)),w=Pe(h.computeMask(g,x));if(h.activityRegularizer)throw new Ce("LayersModel invocation with concrete Tensor value(s) in the presence of activity regularizer(s) is not supported yet.");for(let y=0;y<p.length;++y){const C=p[y],$=b[y],v=w[y];s[C.id]=[$,v]}}}}const r=[],i=[],a=[];for(const l of this.outputs){zn(l.id in s,`Could not compute output ${l.name} : ${l.id}`);const[c,u]=s[l.id];a.push(c.shape),r.push(c),i.push(u)}return[r,i,a]}buildNodeConversionMap(e){const t={};let s;for(const o of this.layers){s=o instanceof Sn?1:0;for(let r=0;r<o.inboundNodes.length;r++){const i=Sn.nodeKey(o,r);this.containerNodes.has(i)&&(t[i]=s,s+=1)}}return t}getLayer(e,t){if(t!=null)return this.findLayer(t);if(e==null)throw new O("Provide either a layer name or layer index");if(typeof e=="number")return this.findLayer(e);for(const s of this.layers)if(s.name===e)return s;throw new O(`No such layer: ${e}`)}findLayer(e){if(this.layers.length<=e)throw new O(`Was asked to retrieve layer at index ${e}, but model only has ${this.layers.length} layer(s).`);return this.layers[e]}calculateLosses(){return z(()=>{const e=[];for(const t of this.layers)for(let s=0;s<t.inboundNodes.length;++s){const o=Sn.nodeKey(t,s);this.containerNodes.has(o)&&e.push(...t.calculateLosses())}return e})}getConfig(){const e={name:this.name},t=this.buildNodeConversionMap(this.layers),s=[];for(const i of this.layers){const a=i.getClassName(),l=i.getConfig(),c=[];for(let h=0;h<i.inboundNodes.length;h++){const d=i.inboundNodes[h],p=Sn.nodeKey(i,h);let f={};if(this.containerNodes.has(p)){if(d.callArgs)try{JSON.stringify(d.callArgs),f=d.callArgs}catch(m){console.warn(`Layer ${i.name} was passed non-serializable keyword arguments: ${d.callArgs}. They will not be included in the serialized model (and thus will be missing at deserialization time).`),f={}}if(d.inboundLayers.length>0){const m=[];for(let g=0;g<d.inboundLayers.length;g++){const x=d.inboundLayers[g],b=d.nodeIndices[g],w=d.tensorIndices[g],y=Sn.nodeKey(x,b);let C=t[y];C==null&&(C=0),m.push([x.name,C,w,f])}c.push(m)}}}const u={};u.name=i.name,u.className=a,u.config=l,u.inboundNodes=c,s.push(u)}e.layers=s;const o=[];for(let i=0;i<this.inputLayers.length;i++){const a=this.inputLayers[i],l=this.inputLayersNodeIndices[i],c=Sn.nodeKey(a,l);if(!this.containerNodes.has(c))continue;let u=t[c];u==null&&(u=0);const h=this.inputLayersTensorIndices[i];o.push([a.name,u,h])}e.inputLayers=o;const r=[];for(let i=0;i<this.outputLayers.length;i++){const a=this.outputLayers[i],l=this.outputLayersNodeIndices[i],c=Sn.nodeKey(a,l);if(!this.containerNodes.has(c))continue;let u=t[c];u==null&&(u=0);const h=this.outputLayersTensorIndices[i];r.push([a.name,u,h])}return e.outputLayers=r,e}static fromConfig(e,t,s={},o=!1){const r={},i={};function a(g,x){g.name in i?i[g.name].push(x):i[g.name]=[x]}function l(g,x){const b=[];let w;for(const y of x){const C=y[0],$=y[1],v=y[2];if(w=y[3]==null?{}:y[3],!(C in r)){a(g,x);return}const k=r[C];if(k.inboundNodes.length<=$){a(g,x);return}const N=k.inboundNodes[$];b.push(N.outputTensors[v])}b.length>0&&g.apply(Ht(b),w)}function c(g){const x=g.name,b=Gn(g,t.customObjects!=null?t.customObjects:{});b.setFastWeightInitDuringBuild(o),r[x]=b,g.inboundNodes.forEach(y=>{if(!(y instanceof Array))throw new O(`Corrupted configuration, expected array for nodeData: ${y}`);a(b,y)})}const u=t.name,h=t.layers;for(const g of h)c(g);for(;!sT(i);)for(const g of h){const x=r[g.name];if(x.name in i){const b=i[x.name];delete i[x.name];for(const w of b)l(x,w)}}const d=[],p=[],f=t.inputLayers;for(const g of f){const x=g[0],b=g[1],w=g[2];zn(x in r);const C=r[x].inboundNodes[b].outputTensors;d.push(C[w])}const m=t.outputLayers;for(const g of m){const x=g[0],b=g[1],w=g[2];zn(x in r);const C=r[x].inboundNodes[b].outputTensors;p.push(C[w])}return new e({inputs:d,outputs:p,name:u})}get stateful(){if(this._stateful)throw new O("Container instance unexpectedly has _stateful = true. The statefulness of a Container is determined by the Layers it contains. Its _stateful property must remain the default false.");for(const e of this.layers)if(e.stateful)return!0;return!1}resetStates(){z(()=>{this.layers.forEach(e=>{e.stateful&&e.resetStates()})})}}function yE(n,e,t){const s=e.length;if(n==null||Array.isArray(n)&&n.length===0)return e.map(o=>null);if(s===1)return Array.isArray(n)&&n.length===1?n:typeof n=="object"&&e[0]in n?[n[e[0]]]:[n];if(Array.isArray(n)){if(n.length!==s)throw new Error(`Provided ${t} is an array of ${n.length} element(s), but the model has ${s} outputs. Make sure a set of weights is provided for each model output.`);return n}else if(typeof n=="object"&&Object.keys(n).length>0&&typeof n[Object.keys(n)[0]]=="object"){const o=[];return e.forEach(r=>{r in n?o.push(n[r]):o.push(null)}),o}else throw new Error(`The model has multiple (${s}) outputs, so ${t} must be either an array with ${s} elements or an object with ${e} keys. Provided ${t} not understood: ${JSON.stringify(n)}`)}function dx(n,e){return yE(n,e,"classWeight")}function px(n,e,t,s){return X(this,null,function*(){if(t!=null){const o=z(()=>{if(n.shape.length===1)return qs(n);if(n.shape.length===2){if(n.shape[1]>1)return js(n,1);if(n.shape[1]===1)return V(n,[n.shape[0]]);throw new Error(`Encountered unexpected last-dimension size (${n.shape[1]}) during handling of class weights. The size is expected to be >= 1.`)}else throw new Error(`Unexpected rank of target (y) tensor (${n.rank}) during handling of class weights. The rank is expected to be 1 or 2.`)}),r=Array.from(yield o.data());xe(o);const i=[];return r.forEach(a=>{if(t[a]==null)throw new Error(`classWeight must contain all classes in the training data. The class ${a} exists in the data but not in classWeight`);i.push(t[a])}),Xt(i,"float32")}else return null})}function wE(n,e){return L(n,e)}const CE=32;function fx(n,e){let t,s;const o=e;t=o.xs,s=o.ys,S(t!=null&&s!=null,()=>`A Dataset iterator for fitDataset() is expected to generate objects of the form \`{xs: xVal, ys: yVal}\`, where the two values may be \`tf.Tensor\`, an array of Tensors, or a map of string to Tensor.  The provided Dataset instead generates ${e}`);const r=mx("input",n.inputNames,t),i=mx("output",n.outputNames,s),a=r[0].shape[0];S(r.length===n.inputs.length,()=>`LayersModel has ${n.inputs.length} inputs, but the dataset provides ${r.length} inputs.  (Expected input keys: ${JSON.stringify(n.inputNames)})`),S(i.length===n.outputs.length,()=>`LayersModel has ${n.outputs.length} outputs, but the dataset provides ${i.length} outputs.  (Expected output keys: ${JSON.stringify(n.outputNames)})`);for(let l=0;l<r.length;l++)S(r[l].shape[0]===a,()=>`Batch size mismatch: input ${n.inputNames[l]} has ${r[l].shape[0]}; expected  ${a} based on input ${n.inputNames[0]}.`);for(let l=0;l<i.length;l++)S(i[l].shape[0]===a,()=>`Batch size mismatch: output ${n.outputNames[l]} has ${i[l].shape[0]}; expected  ${a} based on input ${n.inputNames[0]}.`);return{xs:r,ys:i}}function mx(n,e,t){if(t instanceof ct)return[t];if(Array.isArray(t))return S(t.length===e.length,()=>`Received an array of ${t.length} Tensors, but expected ${e.length} to match the ${n} keys ${e}.`),t;{const s=[];for(const o of e){if(t[o]==null)throw new O(`The feature data generated by the dataset lacks the required ${n} key '${o}'.`);s.push(t[o])}return s}}function IE(n){if(n.length===3)throw new Ce("Validation with sample weights is not implemented yet.");return{xs:n[0],ys:n[1]}}function $E(n,e,t){return X(this,null,function*(){const s=t.batchesPerEpoch!=null;if(S(n.optimizer!=null,()=>"You must compile a model before training/testing. Use LayersModel.compile(modelCompileConfig)."),S(t!=null,()=>"For fitDataset(), the 2nd argument (config) is required, but it is not provided in this call."),S(t.epochs!=null&&t.epochs>0&&Number.isInteger(t.epochs),()=>`For fitDataset(), config.epochs is expected to be a positive integer, but got ${t.epochs}`),S(!s||t.batchesPerEpoch>0&&Number.isInteger(t.batchesPerEpoch),()=>`For fitDataset(), config.batchesPerEpoch is expected to be a positive integer if specified, but got ${t.batchesPerEpoch}`),S(t.validationSplit==null,()=>"`validationSplit` is not supported by `fitDataset()`. Use validationData instead."),n.isTraining)throw new Error("Cannot start training because another fit() call is ongoing.");n.isTraining=!0;try{const o=t.validationData!=null;let r,i;if(o)if(gx(t.validationData))S(t.validationBatches==null||t.validationBatches>0&&Number.isInteger(t.validationBatches),()=>`For fitDataset() with dataset-based validation, config.validationBatches is expected not to be provided, or to be a positive integer, but got ${t.validationBatches}`);else{const g=IE(t.validationData);r=g.xs,i=g.ys}const a=n.makeTrainFunction(),l=n.getDedupedMetricsNames();let c;o?c=l.slice().concat(l.map(g=>"val_"+g)):c=l.slice();const u=tx(t.callbacks,t.yieldEvery),h=t.verbose==null?1:t.verbose,{callbackList:d,history:p}=nx(u,h,t.epochs,null,null,vE(e,t),null,o,c);d.setModel(n),n.history=p,yield d.onTrainBegin(),n.stopTraining_=!1;let f=t.initialEpoch==null?0:t.initialEpoch,m=yield e.iterator();for(;f<t.epochs;){const g={};yield d.onEpochBegin(f);let x=0,b=0;for(s||(m=yield e.iterator());!s||x<t.batchesPerEpoch;){const w=yield m.next();if(s&&w.done){console.warn(`You provided \`batchesPerEpoch\` as ${t.batchesPerEpoch}, but your dataset iterator ran out of data after ${x} batches; interrupting training. Make sure that your dataset can generate at least \`batchesPerEpoch * epochs\` batches (in this case, ${t.batchesPerEpoch*t.epochs} batches). You may need to use the repeat() function when building your dataset.`);break}if(w.value!=null){const{xs:y,ys:C}=fx(n,w.value),$={};$.batch=b,$.size=y[0].shape[0],yield d.onBatchBegin(b,$);const v=[];if(t.classWeight!=null){const T=dx(t.classWeight,n.outputNames);for(let I=0;I<T.length;++I)v.push(yield px(C[I],null,T[I]))}const k=y.concat(C).concat(v),N=a(k);xe(k);for(let T=0;T<l.length;++T){const I=l[T],E=N[T];$[I]=E,Dn(E)}yield d.onBatchEnd(b,$),Jg($),b++,x++}if(s?x>=t.batchesPerEpoch:w.done){if(o){let y;gx(t.validationData)?y=Pe(yield n.evaluateDataset(t.validationData,{batches:t.validationBatches})):y=Pe(n.evaluate(r,i,{batchSize:t.validationBatchSize==null?CE:t.validationBatchSize,verbose:0}));for(let C=0;C<n.metricsNames.length;++C)g[`val_${n.metricsNames[C]}`]=y[C]}break}if(n.stopTraining_)break}if(yield d.onEpochEnd(f,g),f++,n.stopTraining_)break}return yield d.onTrainEnd(),yield n.history.syncData(),n.history}finally{n.isTraining=!1}})}function vE(n,e){let t=null;return e.batchesPerEpoch!=null?t=e.batchesPerEpoch:Number.isFinite(n.size)&&(t=n.size),t}function gx(n){return typeof n.iterator=="function"}function kE(n){return typeof n.next=="function"}function SE(n,e,t){return X(this,null,function*(){t=t||{};const s=t.batches!=null,o=n.testFunction;let r=[];if(t.verbose>0)throw new Ce("Verbose mode is not implemented yet.");S(!s||t.batches>0&&Number.isInteger(t.batches),()=>`Test loop expects \`batches\` to be a positive integer, but received ${JSON.stringify(t.batches)}`);const i=kE(e)?e:yield e.iterator();let a=0,l=0;for(;!s||l<t.batches;){const c=yield i.next();if(r=z(()=>{if(c.value){const{xs:u,ys:h}=fx(n,c.value),d=u.concat(h),p=z(()=>o(d));if(xe(d),l===0)for(let m=0;m<p.length;++m)r.push(Oe(0));const f=d[0].shape[0];for(let m=0;m<p.length;++m){const g=p[m],x=r[m];r[m]=z(()=>te(r[m],L(f,g))),l>0&&xe(x)}xe(p),a+=f,++l}return r}),c.done){s&&console.warn(`Your dataset iterator ran out of data during evaluateDataset(). Interrupting evalution. Make sure that your dataset can generate at least \`batches\` batches (in this case, ${t.batches} batches). You may need to use the repeat() function when building your dataset.`);break}}for(let c=0;c<r.length;++c){const u=r[c];r[c]=ge(r[c],a),xe(u)}return Ht(r)})}function Sd(n){S(n>0&&Number.isInteger(n),()=>`batchSize is required to be a positive integer, but got ${n}`)}function Di(n,e,t){return n==null?[null]:Array.isArray(n)?n.map(s=>lo(s,e,t-e)):lo(n,e,t-e)}function Nd(n,e){return z(()=>n==null?null:Array.isArray(n)?n.map(t=>Nd(t,e)):Fg(n,e.dtype==="int32"?e:re(e,"int32")))}function Td(n,e){const t=[];let s=0,o=null;for(;s<n;)o=s+e,o>=n&&(o=n),t.push([s,o]),s=o;return t}function xx(n){const e=[];n instanceof ct&&(n=[n]);for(let t=0;t<n.length;++t){const s=n[t];if(s.rank===1)e.push(vi(s,1));else{if(s.rank===0)throw new Error("Expected tensor to be at least 1D, but received a 0D tensor (scalar).");e.push(s)}}return e}function Nn(n,e){if(n==null)return;const t=[];if(e instanceof ct)t.push(e.id);else if(Array.isArray(e))e.forEach(o=>t.push(o.id));else if(e!=null)for(const o in e){const r=e[o];t.push(r.id)}const s=[];if(n instanceof ct)t.indexOf(n.id)===-1&&s.push(n);else if(Array.isArray(n))n.forEach(o=>{t.indexOf(o.id)===-1&&s.push(o)});else if(n!=null)for(const o in n){const r=n[o];t.indexOf(r.id)===-1&&s.push(r)}s.forEach(o=>{o.isDisposed||o.dispose()})}function NE(n){return n instanceof ct}function Ed(n){return Array.isArray(n)}function bx(n){return!NE(n)&&!Ed(n)}function yx(n,e,t,s=!0,o=""){if(e==null||e.length===0){if(n!=null){let i=!1;if(Ed(n)&&n.length>0)i=!0;else if(bx(n)){for(const a in n)if(n.hasOwnProperty(a)){i=!0;break}}else i=!0;if(i)throw new O(`Error when checking model ${o} expected no data, but got ${n}`)}return[]}if(n==null)return e.map(i=>null);let r;if(bx(n)){n=n,r=[];for(const i of e){if(n[i]==null)throw new O(`No data provided for "${i}". Need data for each key in: ${e}`);r.push(n[i])}}else if(Ed(n)){if(n=n,n.length!==e.length)throw new O(`Error when checking model ${o}: the Array of Tensors that you are passing to your model is not the size the model expected. Expected to see ${e.length} Tensor(s), but instead got the following list of Tensor(s): ${n}`);r=n}else{if(n=n,e.length>1)throw new O(`The model ${o} expects ${e.length} Tensor(s), but only received one Tensor. Found: Tensor with shape ${n.shape}`);r=[n]}if(r=xx(r),t!=null)for(let i=0;i<e.length;++i){if(t[i]==null)continue;const a=r[i];if(a.shape.length!==t[i].length)throw new O(`Error when checking ${o}: expected ${e[i]} to have ${t[i].length} dimension(s). but got array with shape ${a.shape}`);for(let l=0;l<t[i].length;++l){if(l===0&&!s)continue;const c=a.shape[l],u=t[i][l];if(u!=null&&u>=0&&c!==u)throw new O(`${o} expected a batch of elements where each example has shape [${t[i].slice(1,t[i].length)}] (i.e.,tensor shape [*,${t[i].slice(1,t[i].length)}]) but the ${o} received an input with ${a.shape[0]} examples, each with shape [${a.shape.slice(1,a.shape.length)}] (tensor shape [${a.shape}])`)}}return r}function TE(n,e,t){const s=ws(n.map(r=>r.shape[0]));s.sort();const o=ws(e.map(r=>r.shape[0]));if(o.sort(),s.length>1)throw new O(`All input Tensors (x) should have the same number of samples. Got array shapes: ${JSON.stringify(n.map(r=>r.shape))}`);if(o.length>1)throw new O(`All target Tensors (y) should have the same number of samples. Got array shapes: ${JSON.stringify(e.map(r=>r.shape))}`);if(s.length>0&&o.length>0&&!_e(s,o))throw new O(`Input Tensors should have the same number of samples as target Tensors. Found ${s[0]} input sample(s) and ${o[0]} target sample(s).`)}function EE(n,e,t){const s=[Hl,jl,Ai];for(let o=0;o<n.length;++o){const r=n[o],i=e[o],a=t[o];if(i!=null){if(i===Ai&&r.shape[r.shape.length-1]===1)throw new O(`You are passing a target array of shape ${r.shape} while using a loss 'categorical_crossentropy'. 'categorical_crossentropy'expects targets to be binary matrices (1s and 0s) of shape [samples, classes].`);if(s.indexOf(i)!==-1){const l=r.shape.slice(1),c=a.slice(1);for(let u=0;u<l.length;++u){const h=l[u],d=c[u];if(d!=null&&h!==d)throw new O(`A target Tensor with shape ${r.shape} was passed for an output of shape ${a}, while using a loss function that expects targets to have the same shape as the output.`)}}}}}function wx(n,e,t,s=!0,o=""){let r;if(Array.isArray(n)){if(n.length!==e.length)throw new O(`Error when checking model ${o}: the Array of Tensors that you are passing to your model is not the size the the model expected. Expected to see ${e.length} Tensor(s), but instead got ${n.length} Tensors(s).`);r=n}else{if(e.length>1)throw new O(`The model expects ${e.length} ${o} Tensors, but only received one Tensor. Found: array with shape ${JSON.stringify(n.shape)}.`);r=[n]}if(t!=null)for(let i=0;i<e.length;++i){if(t[i]==null)continue;const a=r[i];if(a.shape.length!==t[i].length)throw new O(`Error when checking ${o}: expected ${e[i]} to have ${t[i].length} dimension(s), but got array with shape ${JSON.stringify(a.shape)}`);for(let l=0;l<t[i].length;++l){if(l===0&&!s)continue;const c=a.shape[l],u=t[i][l];if(u!=null&&u!==c)throw new O(`Error when checking ${o}: expected ${e[i]} to have shape ${JSON.stringify(t[i])} but got array with shape ${JSON.stringify(a.shape)}.`)}}}function RE(n,e){if(n==null||Array.isArray(n)&&n.length===0)return e.map(s=>[]);let t;if(typeof n=="string"||typeof n=="function")t=[n];else if(Array.isArray(n)||typeof n=="object")t=n;else throw new TypeError(`Type of metrics argument not understood. Expected an string,function, Array, or Object, found: ${n}`);if(Array.isArray(t))return e.map(s=>t);{const s=[];for(const o of e){let r=t.hasOwnProperty(o)?t[o]:[];Array.isArray(r)||(r=[r]),s.push(r)}return s}}const AE="layers-model";class Ho extends Sn{constructor(e){super(e),this.isTraining=!1}summary(e,t,s=console.log){if(!this.built)throw new O("This model has never been called, thus its weights have not been created yet. So no summary can be displayed. Build the model first (e.g., by calling it on some test data).");pE(this,e,t,s)}compile(e){if(e.loss==null&&(e.loss=[]),this.loss=e.loss,typeof e.optimizer=="string")this.optimizer_=dE(e.optimizer),this.isOptimizerOwned=!0;else{if(!(e.optimizer instanceof ys))throw new O("User-defined optimizer must be an instance of tf.Optimizer.");this.optimizer_=e.optimizer,this.isOptimizerOwned=!1}let t=[];if(!Array.isArray(e.loss)&&typeof e.loss!="string"&&typeof e.loss!="function"){e.loss=e.loss;for(const i in e.loss)if(this.outputNames.indexOf(i)===-1)throw new O(`Unknown entry in loss dictionary: "${i}". Only expected the following keys: ${this.outputNames}`);for(const i of this.outputNames)e.loss[i]==null&&console.warn(`Output "${i}" is missing from loss dictionary. We assume this was done on purpose, and we will not be expecting data to be passed to ${i} during training`),t.push($d(e.loss[i]))}else if(Array.isArray(e.loss)){if(e.loss.length!==this.outputs.length)throw new O(`When passing an Array as loss, it should have one entry per model output. The model has ${this.outputs.length} output(s), but you passed loss=${e.loss}.`);t=e.loss.map(a=>$d(a))}else{const i=$d(e.loss);this.outputs.forEach(a=>{t.push(i)})}this.lossFunctions=t,this.feedOutputNames=[],this.feedOutputShapes=[],this.feedLossFns=[];for(let i=0;i<this.outputs.length;++i){const a=this.internalOutputShapes[i],l=this.outputNames[i];this.feedOutputNames.push(l),this.feedOutputShapes.push(a),this.feedLossFns.push(this.lossFunctions[i])}const s=[];this.metrics=e.metrics,this.metricsNames=["loss"],this.metricsTensors=[],ao("loss",()=>{for(let i=0;i<this.outputs.length;++i){if(s.indexOf(i)!==-1)continue;const a=this.lossFunctions[i];this.outputs.length>1&&(this.metricsTensors.push([a,i]),this.metricsNames.push(this.outputNames[i]+"_loss"))}});const o=RE(e.metrics,this.outputNames),r=(i,a,l)=>{this.outputNames.length>1&&(a=this.outputNames[i]+"_"+a),this.metricsNames.push(a),this.metricsTensors.push([l,i])};ao("metric",()=>{for(let i=0;i<this.outputs.length;++i){if(s.indexOf(i)!==-1)continue;const a=o[i];(c=>{let h,d,p;for(const f of c){if(typeof f=="string"&&["accuracy","acc","crossentropy","ce"].indexOf(f)!==-1){const g=this.internalOutputShapes[i];g[g.length-1]===1||this.lossFunctions[i]===jl?["accuracy","acc"].indexOf(f)!==-1?d=ox:["crossentropy","ce"].indexOf(f)!==-1&&(d=nE):this.lossFunctions[i]===ql?["accuracy","acc"].indexOf(f)!==-1?d=sE:["crossentropy","ce"].indexOf(f)!==-1&&(d=ax):["accuracy","acc"].indexOf(f)!==-1?d=rx:["crossentropy","ce"].indexOf(f)!==-1&&(d=ix);let x;["accuracy","acc"].indexOf(f)!==-1?x="acc":["crossentropy","ce"].indexOf(f)!==-1&&(x="ce"),p=d,h=""+x}else p=hE(f),h=""+Yl(f);let m;ao(h,()=>{m=p}),r(i,h,m)}})(a)}}),this.collectedTrainableWeights=this.trainableWeights}checkTrainableWeightsConsistency(){this.collectedTrainableWeights!=null&&this.trainableWeights.length!==this.collectedTrainableWeights.length&&console.warn("Discrepancy between trainableweights and collected trainable weights. Did you set `model.trainable` without calling `model.compile()` afterwards?")}evaluate(e,t,s={}){const o=s.batchSize==null?32:s.batchSize;Sd(o);const i=this.standardizeUserDataXY(e,t,!0,o);try{const a=i[0].concat(i[1]);this.makeTestFunction();const l=this.testFunction,c=this.testLoop(l,a,o,s.verbose,s.steps);return Ht(c)}finally{Nn(i[0],e),Nn(i[1],t)}}evaluateDataset(e,t){return X(this,null,function*(){return this.makeTestFunction(),SE(this,e,t)})}checkNumSamples(e,t,s,o="steps"){let r;if(s!=null){if(r=null,t!=null)throw new O(`If ${o} is set, batchSize must be null or undefined.Got batchSize = ${t}`)}else if(e!=null)Array.isArray(e)?r=e[0].shape[0]:r=e.shape[0];else throw new O(`Either the input data should have a defined shape, or ${o} shoud be specified.`);return r}execute(e,t){if(Array.isArray(t)&&t.length===0)throw new O("`outputs` is an empty Array, which is not allowed.");const s=Array.isArray(t),o=s?t:[t],r=this.retrieveSymbolicTensors(o),i=new $s;if(e instanceof ct&&(e=[e]),Array.isArray(e)){if(e.length!==this.inputs.length)throw new O(`The number of inputs provided (${e.length}) does not match the number of inputs of this model (${this.inputs.length}).`);for(let l=0;l<this.inputs.length;++l)i.add(this.inputs[l],e[l])}else for(const l of this.inputs){const c=e[l.name];if(c==null)throw new O(`No value is provided for the model's input ${l.name}`);i.add(l,c)}const a=Ti(r,i);return s?a:a[0]}retrieveSymbolicTensors(e){const t=oo(null,e.length);let s=e.length;for(const o of this.layers){const r=Array.isArray(o.output)?o.output:[o.output],i=r.map(a=>a.name);for(let a=0;a<e.length;++a){const l=i.indexOf(e[a]);if(l!==-1&&(t[a]=r[l],s--),s===0)break}if(s===0)break}if(s>0){const o=[];throw t.forEach((r,i)=>{r==null&&o.push(e[i])}),new O(`Cannot find SymbolicTensors for output name(s): ${JSON.stringify(o)}`)}return t}predictLoop(e,t=32,s=!1){return z(()=>{const o=this.checkNumSamples(e);if(s)throw new Ce("Verbose predictLoop() is not implemented yet.");const r=Td(o,t),i=this.outputs.map(a=>[]);for(let a=0;a<r.length;++a)z(()=>{const c=r[a][0],u=r[a][1],h=Di(e,c,u),d=[];if(Array.isArray(h))for(let f=0;f<h.length;++f)d.push({key:this.inputs[f],value:h[f]});else d.push({key:this.inputs[0],value:h});const p=new $s(d);return Ti(this.outputs,p)}).forEach((c,u)=>i[u].push(c));return Ht(i.map(a=>vt(a,0)))})}predict(e,t={}){const s=xx(e);wx(s,this.inputNames,this.feedInputShapes,!1);try{const o=t.batchSize==null?32:t.batchSize;return Sd(o),this.predictLoop(s,o)}finally{Nn(s,e)}}predictOnBatch(e){wx(e,this.inputNames,this.feedInputShapes,!0);const t=(Array.isArray(e)?e[0]:e).shape[0];return this.predictLoop(e,t)}standardizeUserDataXY(e,t,s=!0,o){if(this.optimizer_==null)throw new un("You must compile a model before training/testing. Use LayersModel.compile(modelCompileArgs).");const r=[];for(let i=0;i<this.feedOutputShapes.length;++i){const a=this.feedOutputShapes[i];this.feedLossFns[i]===ql?r.push(a.slice(0,a.length-1).concat([1])):r.push(a)}if(e=yx(e,this.feedInputNames,this.feedInputShapes,!1,"input"),t=yx(t,this.feedOutputNames,r,!1,"target"),TE(e,t),EE(t,this.feedLossFns,this.feedOutputShapes),this.stateful&&o!=null&&o>0&&e[0].shape[0]%o!==0)throw new O(`In a stateful network, you should only pass inputs with a number of samples that is divisible by the batch size ${o}. Found: ${e[0].shape[0]} sample(s).`);return[e,t]}standardizeUserData(e,t,s,o,r=!0,i){return X(this,null,function*(){const[a,l]=this.standardizeUserDataXY(e,t,r,i);if(s!=null)throw new Error("sample weight is not supported yet.");let c=null;if(o!=null){const u=dx(o,this.outputNames);c=[];for(let h=0;h<u.length;++h)c.push(yield px(l[h],null,u[h]))}return[a,l,c]})}testLoop(e,t,s,o=0,r){return z(()=>{const i=this.checkNumSamples(t,s,r,"steps"),a=[];if(o>0)throw new Ce("Verbose mode is not implemented yet.");if(r!=null)throw new Ce("steps mode in testLoop() is not implemented yet");{const l=Td(i,s),c=Xt($n(0,i));for(let u=0;u<l.length;++u){const h=l[u][0],d=l[u][1],p=lo(c,h,d-h),f=Nd(t,p),m=e(f);if(u===0)for(let g=0;g<m.length;++g)a.push(Oe(0));for(let g=0;g<m.length;++g){const x=m[g];a[g]=te(a[g],L(d-h,x))}}for(let u=0;u<a.length;++u)a[u]=ge(a[u],i)}return a})}getDedupedMetricsNames(){const e=this.metricsNames,t=[];for(let s=0;s<e.length;++s){const o=e[s];let r=o;if($g(e,o)>1){const i=$g(e.slice(0,s),o);r+=`_${i}`}t.push(r)}return t}makeTrainFunction(){return e=>{const t=[],s=e.slice(0,this.inputs.length),o=e.slice(this.inputs.length,this.inputs.length+this.outputs.length),r=e.slice(this.inputs.length+this.outputs.length,this.inputs.length+this.outputs.length*2),i=[],a=()=>{const h=[];for(let m=0;m<this.inputs.length;++m)h.push({key:this.inputs[m],value:s[m]});const d=new $s(h),p=Ti(this.outputs,d,{training:!0});let f;for(let m=0;m<this.lossFunctions.length;++m){const g=this.lossFunctions[m];let x=g(o[m],p[m]);r[m]!=null&&(x=wE(x,r[m]));const b=lt(x);t.push(b),m===0?f=x:f=te(f,x)}for(let m=0;m<this.metricsTensors.length;++m){let g;if(this.outputs.length>1&&m<this.outputs.length)g=t[m];else{const x=this.metricsTensors[m][0],b=this.metricsTensors[m][1];g=lt(x(o[b],p[b]))}Dn(g),i.push(g)}return f=lt(f),this.calculateLosses().forEach(m=>{f=te(f,m)}),f},l=this.collectedTrainableWeights.map(h=>h.read());return[this.optimizer_.minimize(a,!0,l)].concat(i)}}makeTestFunction(){this.testFunction=e=>z(()=>{const t=[];let s;const o=e.slice(0,this.inputs.length),r=e.slice(this.inputs.length,this.inputs.length+this.outputs.length),i=[];for(let c=0;c<this.inputs.length;++c)i.push({key:this.inputs[c],value:o[c]});const a=new $s(i),l=Ti(this.outputs,a);for(let c=0;c<this.lossFunctions.length;++c){const u=this.lossFunctions[c],h=lt(u(r[c],l[c]));c===0?s=h:s=te(s,h),t.push(s)}for(let c=0;c<this.metricsTensors.length;++c){const u=this.metricsTensors[c][0],h=this.metricsTensors[c][1],d=lt(u(r[h],l[h]));t.push(d)}return t})}fit(o,r){return X(this,arguments,function*(e,t,s={}){if(this.isTraining)throw new Error("Cannot start training because another fit() call is ongoing.");this.isTraining=!0;let i,a,l,c,u,h,d,p,f;try{const m=s.batchSize==null?32:s.batchSize;Sd(m);const x=yield this.standardizeUserData(e,t,s.sampleWeight,s.classWeight,!1,m);i=x[0],a=x[1],f=x[2];let b=!1,w;if(s.validationData!=null&&s.validationData.length>0){if(b=!0,s.validationData.length===2)u=s.validationData[0],h=s.validationData[1];else throw s.validationData.length===3?new Ce("validationData including sample weights is not supported yet."):new O(`When passing validation data, it must contain 2 (valX, valY) or 3 (valX, valY, valSampleWeight) items; ${s.validationData} is invalid.`);const E=yield this.standardizeUserData(u,h,null,null,!0,m);d=E[0],p=E[1],w=d.concat(p)}else if(s.validationSplit!=null&&s.validationSplit>0&&s.validationSplit<1){b=!0;const I=Math.floor(i[0].shape[0]*(1-s.validationSplit)),E=i[0].shape[0];d=Di(i,I,E),l=i,i=Di(i,0,I),p=Di(a,I,E),c=a,a=Di(a,0,I),w=d.concat(p)}else s.validationSteps!=null&&(b=!0);const y=i.concat(a).concat(f);this.checkTrainableWeightsConsistency();const C=this.makeTrainFunction(),$=this.getDedupedMetricsNames();let v,k;b?(this.makeTestFunction(),v=this.testFunction,k=$.slice().concat($.map(I=>"val_"+I))):(v=null,w=[],k=$.slice());const N=tx(s.callbacks,s.yieldEvery);return yield this.fitLoop(C,y,$,m,s.epochs,s.verbose,N,v,w,s.shuffle,k,s.initialEpoch,null,null)}finally{this.isTraining=!1,Nn(i,e),Nn(a,t),Nn(l,e),Nn(c,t),Nn(d,u),Nn(p,h),f!=null&&xe(f)}})}fitLoop(e,t,s,o,r,i,a,l,c,u,h,d,p,f){return X(this,null,function*(){o==null&&(o=32),r==null&&(r=1),u==null&&(u=!0),d==null&&(d=0);let m=!1;if(l!=null&&c!=null&&(m=!0),f!=null&&(m=!0,p==null))throw new O("Can only use `validationSteps` when doing step-wise training, i.e., `stepsPerEpoch` must be set.");const g=this.checkNumSamples(t,o,p,"steps_per_epoch");let x;g!=null&&(x=$n(0,g)),i==null&&(i=1);const{callbackList:b,history:w}=nx(a,i,r,d,g,p,o,m,h);b.setModel(this),this.history=w,yield b.onTrainBegin(),this.stopTraining_=!1;for(let y=d;y<r;++y){yield b.onEpochBegin(y);const C={};if(p!=null)throw new Ce("stepsPerEpoch mode is not implemented yet.");{if(u==="batch")throw new Ce("batch shuffling is not implemneted yet");u&&Oc(x);const $=Xt(x),v=Td(g,o);for(let k=0;k<v.length;++k){const N={};if(yield b.onBatchBegin(k,N),z(()=>{const T=v[k][0],I=v[k][1],E=lo($,T,I-T);N.batch=k,N.size=I-T;const R=Nd(t,E),D=e(R);for(let F=0;F<s.length;++F){const _=s[F],P=D[F];N[_]=P,Dn(P)}if(k===v.length-1&&m){const F=this.testLoop(l,c,o);for(let _=0;_<s.length;++_){const P=s[_],B=F[_];Dn(B),C["val_"+P]=B}}}),yield b.onBatchEnd(k,N),Jg(N),this.stopTraining_)break}$.dispose()}if(yield b.onEpochEnd(y,C),this.stopTraining_)break}return yield b.onTrainEnd(),yield this.history.syncData(),this.history})}fitDataset(e,t){return X(this,null,function*(){return $E(this,e,t)})}trainOnBatch(e,t){return X(this,null,function*(){const s=yield this.standardizeUserData(e,t),o=s[0],r=s[1],a=this.makeTrainFunction()(o.concat(r)),l=[];for(const c of a){const u=yield c.data();l.push(u[0])}return xe(a),Nn(s[0],e),Nn(s[1],t),Ht(l)})}getNamedWeights(e){const t=[],s=e!=null&&e.trainableOnly,o=s?this.trainableWeights:this.weights,r=this.getWeights(s);for(let i=0;i<o.length;++i)s&&!o[i].trainable||t.push({name:o[i].originalName,tensor:r[i]});return t}set stopTraining(e){this.stopTraining_=e}get stopTraining(){return this.stopTraining_}get optimizer(){return this.optimizer_}set optimizer(e){this.optimizer_!==e&&(this.optimizer_=e,this.isOptimizerOwned=!1)}dispose(){const e=super.dispose();if(e.refCountAfterDispose===0&&this.optimizer!=null&&this.isOptimizerOwned){const t=ai().numTensors;this.optimizer_.dispose(),e.numDisposedVariables+=t-ai().numTensors}return e}getLossIdentifiers(){let e;if(typeof this.loss=="string")e=rs(this.loss);else if(Array.isArray(this.loss)){for(const t of this.loss)if(typeof t!="string")throw new Error("Serialization of non-string loss is not supported.");e=this.loss.map(t=>rs(t))}else{const t=Object.keys(this.loss);e={};const s=this.loss;for(const o of t)if(typeof s[o]=="string")e[o]=rs(s[o]);else throw new Error("Serialization of non-string loss is not supported.")}return e}getMetricIdentifiers(){if(typeof this.metrics=="string"||typeof this.metrics=="function")return[rs(Yl(this.metrics))];if(Array.isArray(this.metrics))return this.metrics.map(e=>rs(Yl(e)));{const e={};for(const t in this.metrics)e[t]=rs(Yl(this.metrics[t]));return e}}getTrainingConfig(){return{loss:this.getLossIdentifiers(),metrics:this.getMetricIdentifiers(),optimizer_config:{class_name:this.optimizer.getClassName(),config:this.optimizer.getConfig()}}}loadTrainingConfig(e){if(e.weighted_metrics!=null)throw new Error("Loading weight_metrics is not supported yet.");if(e.loss_weights!=null)throw new Error("Loading loss_weights is not supported yet.");if(e.sample_weight_mode!=null)throw new Error("Loading sample_weight_mode is not supported yet.");const t=Ql(e.optimizer_config),s=Gn(t);let o;if(typeof e.loss=="string")o=ro(e.loss);else if(Array.isArray(e.loss))o=e.loss.map(i=>ro(i));else if(e.loss!=null){o={};for(const i in e.loss)o[i]=ro(e.loss[i])}let r;if(Array.isArray(e.metrics))r=e.metrics.map(i=>ro(i));else if(e.metrics!=null){r={};for(const i in e.metrics)r[i]=ro(e.metrics[i])}this.compile({loss:o,metrics:r,optimizer:s})}save(e,t){return X(this,null,function*(){if(typeof e=="string"){const c=oC(e);if(c.length===0)throw new O(`Cannot find any save handlers for URL '${e}'`);if(c.length>1)throw new O(`Found more than one (${c.length}) save handlers for URL '${e}'`);e=c[0]}if(e.save==null)throw new O("LayersModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");const s=yield kf(this.getNamedWeights(t)),a={modelTopology:this.toJSON(null,!1),format:AE,generatedBy:`TensorFlow.js tfjs-layers v${hx}`,convertedBy:null};if((t==null?!1:t.includeOptimizer)&&this.optimizer!=null){a.trainingConfig=this.getTrainingConfig();const c="optimizer",{data:u,specs:h}=yield kf(yield this.optimizer.getWeights(),c);s.specs.push(...h),s.data=Zw([s.data,u])}return this.userDefinedMetadata!=null&&(cx(this.userDefinedMetadata,this.name,!0),a.userDefinedMetadata=this.userDefinedMetadata),a.weightData=s.data,a.weightSpecs=s.specs,e.save(a)})}setUserDefinedMetadata(e){cx(e,this.name),this.userDefinedMetadata=e}getUserDefinedMetadata(){return this.userDefinedMetadata}}Ho.className="Model",ee(Ho);class Cx extends Ho{}Cx.className="Functional",ee(Cx);function DE(n,e){return X(this,null,function*(){if(e==null&&(e={}),typeof n=="string"){const t=rC(n,e);if(t.length===0)t.push(WS(n,e));else if(t.length>1)throw new O(`Found more than one (${t.length}) load handlers for URL '${n}'`);n=t[0]}return FE(n,void 0,e)})}function FE(n,e,t){return X(this,null,function*(){if(t==null&&(t={}),n.load==null)throw new O("Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.");const s=yield n.load();let o=s.modelTopology;o.model_config!=null&&(o=o.model_config);const r=t.strict==null?!0:t.strict,i=s.weightData!=null&&s.weightSpecs!=null&&r,a=Gn(Ql(o),e,i),l=s.trainingConfig;if(l!=null&&a.loadTrainingConfig(l),s.userDefinedMetadata!=null&&a.setUserDefinedMetadata(s.userDefinedMetadata),s.weightData!=null){if(s.weightSpecs==null)throw new O("LayersModel artifacts contains weight data, but not weight specs. Therefore loading of weights cannot proceed.");const{modelWeights:c,optimizerWeights:u}=_E(s.weightData,s.weightSpecs);a.loadWeights(c,r),a.optimizer!=null&&u.length>0&&(yield a.optimizer.setWeights(u)),xe(c),xe(u.map(h=>h.tensor))}return a})}function _E(n,e){const t=Hw(n,e),s={},o=[];return e.forEach(r=>{r.group==="optimizer"?o.push({name:r.name,tensor:t[r.name]}):s[r.name]=t[r.name]}),{modelWeights:s,optimizerWeights:o}}class Fi extends Ho{constructor(e){if(super({inputs:[],outputs:[]}),e=e||{},this.trainable=!0,this.built=!1,this.name=e.name!=null?e.name:Ll("sequential_"),e.layers!=null)for(const t of e.layers)this.add(t)}checkShape(e){if(e.inboundNodes[0].outputTensors[0].shape.some(s=>s<0))throw new O(`Negative dimension size caused by adding layer ${e.name} with input shape [${e.inboundNodes[0].inputTensors[0].shape}]`)}add(e){const t=e instanceof Fi||e instanceof Ho;let s;if(t){if(s=e,s.outputs.length!==1)throw new O("All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.");if(s.inputs.length!==1)throw new O("All layers in a Sequential model should have a single input tensor. For multi-input layers, use the functional API.")}if(this.outputs.length===0){if(e.inboundNodes.length===0){if(e.batchInputShape==null)throw new O("The first layer in a Sequential model must get an `inputShape` or `batchInputShape` argument.");const o=_T({batchShape:e.batchInputShape,dtype:e.dtype,name:e.name+"_input"});e.apply(o)}if(t)this.outputs=s.outputs,this.inputs=s.inputs;else{if(e.inboundNodes.length!==1)throw new O(`A layer added to a Sequential model must not already be connected somewhere else. LayersModel received layer ${e.name} which has ${e.inboundNodes.length} pre-existing inbound connections.`);if(e.inboundNodes[0].outputTensors.length!==1)throw new O("All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.");this.checkShape(e),this.outputs=[e.inboundNodes[0].outputTensors[0]],this.inputs=Hg(this.outputs[0])}this.inboundNodes=[],new Vl({outboundLayer:this,inboundLayers:[],nodeIndices:[],tensorIndices:[],inputTensors:this.inputs,outputTensors:this.outputs,inputMasks:oo(null,this.inputs.length),outputMasks:[null],inputShapes:this.inputs.map(o=>o.shape),outputShapes:this.outputs[0].shape})}else{const o=e.apply(this.outputs[0]);if(Array.isArray(o))throw new TypeError("All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.");this.checkShape(e),this.outputs=[o],this.inboundNodes[0].outputTensors=this.outputs,this.inboundNodes[0].outputShapes=[this.outputs[0].shape]}this.layers.push(e),this.built=!1}pop(){if(this.layers.length===0)throw new TypeError("There are no layers in the model.");if(this.layers.pop(),this.layers.length===0)this.outputs=[],this.inboundNodes=[],this.outboundNodes=[];else{const e=this.layers.length-1;this.layers[e].outboundNodes=[],this.outputs=[this.layers[e].output],this.inboundNodes[0].outputTensors=this.outputs,this.inboundNodes[0].outputShapes=[this.outputs[0].shape]}}call(e,t){return this.model==null&&this.build(),this.model.call(e,t)}build(e){if(De(e),this.inputs.length===0||this.outputs.length===0)throw new TypeError("Sequential model cannot be built: model is empty. Add some layers first.");this.model=new Ho({inputs:this.inputs,outputs:this.outputs[0],name:this.name+"_model"}),this.model.trainable=this.trainable,this.supportsMasking=this.model.supportsMasking,this.inputLayers=this.model.inputLayers,this.inputLayersNodeIndices=this.model.inputLayersNodeIndices,this.inputLayersTensorIndices=this.model.inputLayersTensorIndices,this.outputLayers=this.model.outputLayers,this.outputLayersNodeIndices=this.model.outputLayersNodeIndices,this.outputLayersTensorIndices=this.model.outputLayersTensorIndices,this.nodesByDepth=this.model.nodesByDepth,this.containerNodes=this.model.containerNodes,this.outputNames=this.model.outputNames,this.inputNames=this.model.inputNames,this.built=!0}countParams(){return this.built||this.build(),super.countParams()}summary(e,t,s=console.log){this.built||this.build(),super.summary(e,t,s)}setWeights(e){this.model==null&&this.build(),this.model.setWeights(e)}evaluate(e,t,s={}){if(!this.built)throw new un("The model needs to be compiled before being used.");return this.model.evaluate(e,t,s)}evaluateDataset(e,t){return X(this,null,function*(){if(!this.built)throw new un("The model needs to be compiled before being used.");return this.model.evaluateDataset(e,t)})}predict(e,t={}){return this.model==null&&this.build(),this.model.predict(e,t)}predictOnBatch(e){return this.model==null&&this.build(),this.model.predictOnBatch(e)}compile(e){this.build(),this.model.compile(e),this.optimizer_=this.model.optimizer,this.isOptimizerOwned=this.model.isOptimizerOwned,this.loss=this.model.loss,this.metrics=this.model.metrics,this.metricsTensors=this.model.metricsTensors,this.metricsNames=this.model.metricsNames}get optimizer(){return this.model==null?void 0:this.model.optimizer}set optimizer(e){this.model.optimizer=e}fit(o,r){return X(this,arguments,function*(e,t,s={}){if(!this.built)throw new un("The model needs to be compiled before being used.");return this.model.fit(e,t,s)})}fitDataset(e,t){return X(this,null,function*(){if(!this.built)throw new un("The model needs to be compiled before being used.");return this.model.fitDataset(e,t)})}trainOnBatch(e,t){return X(this,null,function*(){return this.model.trainOnBatch(e,t)})}static fromConfig(e,t,s={},o=!1){let r,i={};if(t instanceof Array){if(t[0].className==null||t[0].className==="Merge")throw new O("Legacy serialization format not supported yet.");r=t}else S(t.layers!=null,()=>"When the config data for a Sequential model is not an Array, it must be an Object that contains the 'layers' field."),r=t.layers,delete t.layers,i=t;const a=new e(i);if(!(a instanceof Fi))throw new Ce(`Sequential.fromConfig called on non-Sequential input: ${a}`);for(const l of r){const u=Gn(l,void 0,o);o&&u.setFastWeightInitDuringBuild(!0),a.add(u)}return a}set stopTraining(e){if(this.model==null)throw new O("Cannot set the stopTraining property of a sequential model before it is compiled.");this.model.stopTraining=e}get stopTraining(){if(this.model==null)throw new O("Cannot get the stopTraining property of a sequential model before it is compiled.");return this.model.stopTraining}getConfig(){const e=[];for(const t of this.layers){const s={};s.className=t.getClassName(),s.config=t.getConfig(),e.push(s)}return{name:this.name,layers:e}}}Fi.className="Sequential",ee(Fi);let Dt=class extends Vo{getConfig(){return{}}};class Ix extends Dt{apply(e,t=1){return bT(e,t)}}Ix.className="elu",ee(Ix);class $x extends Dt{apply(e){return hm(e)}}$x.className="selu",ee($x);class vx extends Dt{apply(e){return Js(e)}}vx.className="relu",ee(vx);class kx extends Dt{apply(e){return z(()=>mi(6,Js(e)))}}kx.className="relu6",ee(kx);class Sx extends Dt{apply(e){return e}}Sx.className="linear",ee(Sx);class Nx extends Dt{apply(e){return Oo(e)}}Nx.className="sigmoid",ee(Nx);class Tx extends Dt{apply(e){return wT(e)}}Tx.className="hardSigmoid",ee(Tx);class Ex extends Dt{apply(e){return fi(e)}}Ex.className="softplus",ee(Ex);class Rx extends Dt{apply(e){return yT(e)}}Rx.className="softsign",ee(Rx);class Ax extends Dt{apply(e){return dl(e)}}Ax.className="tanh",ee(Ax);let Rd=class extends Dt{apply(e,t=-1){return bh(e,t)}};Rd.className="softmax",ee(Rd);class Dx extends Dt{apply(e,t=-1){return Yf(e,t)}}Dx.className="logSoftmax",ee(Dx);class Fx extends Dt{apply(e){return z(()=>z(()=>{const t=Math.sqrt(2),s=L(.5,te(1,Hf(ge(e,t))));return L(e,s)}))}}Fx.className="gelu",ee(Fx);class _x extends Dt{apply(e){return z(()=>L(.5,L(e,te(1,dl(L(At(ge(2,Math.PI)),te(e,L(.044715,Zs(e,3)))))))))}}_x.className="gelu_new",ee(_x);class Ox extends Dt{apply(e){return z(()=>L(e,dl(fi(e))))}}Ox.className="mish",ee(Ox);class Lx extends Dt{apply(e,t=1){return z(()=>L(Oo(L(e,t)),e))}}Lx.className="swish",ee(Lx);function vs(n){return n.getClassName()}function Ad(n,e={}){return Ii(n,cn.getMap().classNameMap,e,"activation")}function ks(n){if(n==null){const e={};return e.className="linear",e.config={},Ad(e)}if(typeof n=="string"){const e={};return e.className=n,e.config={},Ad(e)}else return n instanceof Dt?n:Ad(n)}function OE(n){if(n!=null&&typeof n!="object")throw new Error(`Argument to L1L2 regularizer's constructor is expected to be an object, but received: ${n}`)}class Mx extends Vo{}class Px extends Mx{constructor(e){super(),OE(e),this.l1=e==null||e.l1==null?.01:e.l1,this.l2=e==null||e.l2==null?.01:e.l2,this.hasL1=this.l1!==0,this.hasL2=this.l2!==0}apply(e){return z(()=>{let t=ot([1]);return this.hasL1&&(t=te(t,me(L(this.l1,Lt(e))))),this.hasL2&&(t=te(t,me(L(this.l2,ki(e))))),V(t,[])})}getConfig(){return{l1:this.l1,l2:this.l2}}static fromConfig(e,t){return new e({l1:t.l1,l2:t.l2})}}Px.className="L1L2",ee(Px);const Bx={l1l2:"L1L2"};function Ue(n){return nd(n)}function zx(n,e={}){return Ii(n,cn.getMap().classNameMap,e,"regularizer")}function Ye(n){if(n==null)return null;if(typeof n=="string"){const t={className:n in Bx?Bx[n]:n,config:{}};return zx(t)}else return n instanceof Mx?n:zx(n)}class Vx extends Se{constructor(e){super(e==null?{}:e),this.supportsMasking=!0,e!=null&&(this.maxValue=e.maxValue)}call(e,t){e=ye(e);let s=Js(e);return this.maxValue!=null&&(s=en(s,0,this.maxValue)),s}computeOutputShape(e){return e}getConfig(){const e={maxValue:this.maxValue},t=super.getConfig();return Object.assign(e,t),e}}Vx.className="ReLU",ee(Vx);class Wx extends Se{constructor(e){super(e==null?{}:e),this.DEFAULT_ALPHA=.3,e==null&&(e={}),this.alpha=e.alpha==null?this.DEFAULT_ALPHA:e.alpha}call(e,t){const s=ye(e);return lh(s,this.alpha)}computeOutputShape(e){return e}getConfig(){const e={alpha:this.alpha},t=super.getConfig();return Object.assign(e,t),e}}Wx.className="LeakyReLU",ee(Wx);class Ux extends Se{constructor(e){if(super(e==null?{}:e),this.DEFAULT_ALPHA_INITIALIZER="zeros",e==null&&(e={}),this.supportsMasking=!0,this.alphaInitializer=Xe(e.alphaInitializer||this.DEFAULT_ALPHA_INITIALIZER),this.alphaRegularizer=Ye(e.alphaRegularizer),this.alphaConstraint=gt(e.alphaConstraint),e.sharedAxes==null)this.sharedAxes=null;else if(Array.isArray(e.sharedAxes))this.sharedAxes=e.sharedAxes;else if(typeof e.sharedAxes=="number")this.sharedAxes=[e.sharedAxes];else throw new O(`Expected sharedAxes to be a number or an array of numbers, but got ${e.sharedAxes}`)}build(e){e=De(e);const t=e.slice(1);if(this.sharedAxes!=null)for(const o of this.sharedAxes)t[o-1]=1;this.alpha=this.addWeight("alpha",t,"float32",this.alphaInitializer,this.alphaRegularizer,!0,this.alphaConstraint);const s={};if(this.sharedAxes!=null)for(let o=1;o<e.length;++o)s[o]=e[o];this.inputSpec=[new ft({ndim:e.length,axes:s})],this.built=!0}call(e,t){return e=ye(e),ph(e,this.alpha.read())}getConfig(){const e={alphaInitializer:Qe(this.alphaInitializer),alphaRegularizer:Ue(this.alphaRegularizer),alphaConstraint:mt(this.alphaConstraint),sharedAxes:this.sharedAxes},t=super.getConfig();return Object.assign(e,t),e}}Ux.className="PReLU",ee(Ux);let Gx=class extends Se{constructor(e){if(super(e==null?{}:e),this.DEFAULT_ALPHA=1,e==null&&(e={}),e.alpha!=null&&e.alpha!==this.DEFAULT_ALPHA)throw new Ce(`Non-default alpha value (${e.alpha}) is not supported by the ELU layer yet.`);this.alpha=e.alpha==null?this.DEFAULT_ALPHA:e.alpha}call(e,t){const s=ye(e);return fl(s)}computeOutputShape(e){return e}getConfig(){const e={alpha:this.alpha},t=super.getConfig();return Object.assign(e,t),e}};Gx.className="ELU",ee(Gx);class Hx extends Se{constructor(e){super(e==null?{}:e),this.DEFAULT_THETA=1,e==null&&(e={}),this.theta=e.theta==null?this.DEFAULT_THETA:e.theta}call(e,t){const s=ye(e);return L(s,re(Gt(s,this.theta),"float32"))}computeOutputShape(e){return e}getConfig(){const e={theta:this.theta},t=super.getConfig();return Object.assign(e,t),e}}Hx.className="ThresholdedReLU",ee(Hx);class qx extends Se{constructor(e){super(e==null?{}:e),this.DEFAULT_AXIS=1,e==null&&(e={}),this.softmax=new Rd().apply,this.axis=e.axis==null?this.DEFAULT_AXIS:e.axis}call(e,t){return z(()=>{let s=ye(e);const o=t.mask;if(o!=null){const r=L(be(ts(s.shape),re(o,s.dtype)),Oe(-1e9));s=te(s,r)}return this.axis instanceof Array?this.axis.length>1?On(be(s,Zf(s,this.axis,!0))):this.softmax(s,this.axis[0]):this.softmax(s,this.axis)})}computeOutputShape(e){return e}getConfig(){const e={axis:this.axis},t=super.getConfig();return Object.assign(e,t),e}}qx.className="Softmax",ee(qx);function qo(n,e,t){if(typeof n=="number")return oo(n,e);if(n.length!==e)throw new O(`The ${t} argument must be an integer or tuple of ${e} integers. Received: ${n.length} elements.`);for(let s=0;s<e;++s){const o=n[s];if(!fT(o))throw new O(`The ${t} argument must be an integer or tuple of ${e} integers. Received: ${JSON.stringify(n)} including a non-integer number ${o}`)}return n}function Tn(n,e,t,s,o=1){if(n==null)return n;const r=e+(e-1)*(o-1);let i;return t==="same"?i=n:i=n-r+1,Math.floor((i+s-1)/s)}function Hn(n,e,t,s){if(n==null)return null;if(s==="valid")n=n*e+Is([t-e,0]);else if(s==="same")n=n*e;else throw new O(`Unsupport padding mode: ${s}.`);return n}function Dd(n,e){return z(()=>(rt(e),e==="channelsFirst"?Re(n,[0,2,3,1]):n))}function jx(n,e){return z(()=>(rt(e),e==="channelsFirst"?Re(n,[0,2,3,4,1]):n))}function LE(n,e,t,s=1,o="valid",r,i=1){return z(()=>{if(r==null&&(r=vn()),rt(r),n.shape.length!==3)throw new O(`The input of a conv1dWithBias operation should be 3, but is ${n.shape.length} instead.`);if(e.shape.length!==3)throw new O(`The kernel for a conv1dWithBias operation should be 3, but is ${e.shape.length} instead`);if(t!=null&&t.shape.length!==1)throw new O(`The bias for a conv1dWithBias operation should be 1, but is ${t.shape.length} instead`);if(r==="channelsFirst"&&(n=Re(n,[0,2,1])),o==="causal")throw new Ce("The support for CAUSAL padding mode in conv1dWithBias is not implemented yet.");let a=Pf(n,e,s,o==="same"?"same":"valid","NWC",i);return t!=null&&(a=kn(a,t)),a})}function Kx(n,e,t,s=[1,1],o="valid",r,i,a=null){return z(()=>{if(r==null&&(r=vn()),rt(r),n.rank!==3&&n.rank!==4)throw new O(`conv2dWithBiasActivation expects input to be of rank 3 or 4, but received ${n.rank}.`);if(e.rank!==3&&e.rank!==4)throw new O(`conv2dWithBiasActivation expects kernel to be of rank 3 or 4, but received ${n.rank}.`);let l=Dd(n,r);if(o==="causal")throw new Ce("The support for CAUSAL padding mode in conv1dWithBias is not implemented yet.");return l=_k({x:l,filter:e,strides:s,pad:o==="same"?"same":"valid",dilations:i,dataFormat:"NHWC",bias:t,activation:a}),r==="channelsFirst"&&(l=Re(l,[0,3,1,2])),l})}function ME(n,e,t,s=[1,1,1],o="valid",r,i){return z(()=>{if(r==null&&(r=vn()),rt(r),n.rank!==4&&n.rank!==5)throw new O(`conv3dWithBias expects input to be of rank 4 or 5, but received ${n.rank}.`);if(e.rank!==4&&e.rank!==5)throw new O(`conv3dWithBias expects kernel to be of rank 4 or 5, but received ${n.rank}.`);let a=jx(n,r);if(o==="causal")throw new Ce("The support for CAUSAL padding mode in conv3dWithBias is not implemented yet.");return a=di(a,e,s,o==="same"?"same":"valid","NDHWC",i),t!=null&&(a=kn(a,t)),r==="channelsFirst"&&(a=Re(a,[0,4,1,2,3])),a})}class Jl extends Se{constructor(e,t){if(super(t),this.bias=null,this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_BIAS_INITIALIZER="zeros",Jl.verifyArgs(t),this.rank=e,wt(this.rank,"rank"),this.rank!==1&&this.rank!==2&&this.rank!==3)throw new Ce(`Convolution layer for rank other than 1, 2, or 3 (${this.rank}) is not implemented yet.`);if(this.kernelSize=qo(t.kernelSize,e,"kernelSize"),this.strides=qo(t.strides==null?1:t.strides,e,"strides"),this.padding=t.padding==null?"valid":t.padding,nn(this.padding),this.dataFormat=t.dataFormat==null?"channelsLast":t.dataFormat,rt(this.dataFormat),this.activation=ks(t.activation),this.useBias=t.useBias==null?!0:t.useBias,this.biasInitializer=Xe(t.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.biasConstraint=gt(t.biasConstraint),this.biasRegularizer=Ye(t.biasRegularizer),this.activityRegularizer=Ye(t.activityRegularizer),this.dilationRate=qo(t.dilationRate==null?1:t.dilationRate,e,"dilationRate"),this.rank===1&&Array.isArray(this.dilationRate)&&this.dilationRate.length!==1)throw new O(`dilationRate must be a number or an array of a single number for 1D convolution, but received ${JSON.stringify(this.dilationRate)}`);if(this.rank===2){if(typeof this.dilationRate=="number")this.dilationRate=[this.dilationRate,this.dilationRate];else if(this.dilationRate.length!==2)throw new O(`dilationRate must be a number or array of two numbers for 2D convolution, but received ${JSON.stringify(this.dilationRate)}`)}else if(this.rank===3){if(typeof this.dilationRate=="number")this.dilationRate=[this.dilationRate,this.dilationRate,this.dilationRate];else if(this.dilationRate.length!==3)throw new O(`dilationRate must be a number or array of three numbers for 3D convolution, but received ${JSON.stringify(this.dilationRate)}`)}}static verifyArgs(e){if(zn("kernelSize"in e,"required key 'kernelSize' not in config"),typeof e.kernelSize!="number"&&!od(e.kernelSize,"number",1,3))throw new O(`BaseConv expects config.kernelSize to be number or number[] with length 1, 2, or 3, but received ${JSON.stringify(e.kernelSize)}.`)}getConfig(){const e={kernelSize:this.kernelSize,strides:this.strides,padding:this.padding,dataFormat:this.dataFormat,dilationRate:this.dilationRate,activation:vs(this.activation),useBias:this.useBias,biasInitializer:Qe(this.biasInitializer),biasRegularizer:Ue(this.biasRegularizer),activityRegularizer:Ue(this.activityRegularizer),biasConstraint:mt(this.biasConstraint)},t=super.getConfig();return Object.assign(e,t),e}}class jo extends Jl{constructor(e,t){super(e,t),this.kernel=null,jo.verifyArgs(t),this.filters=t.filters,wt(this.filters,"filters"),this.kernelInitializer=Xe(t.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.kernelConstraint=gt(t.kernelConstraint),this.kernelRegularizer=Ye(t.kernelRegularizer)}build(e){e=De(e);const t=this.dataFormat==="channelsFirst"?1:e.length-1;if(e[t]==null)throw new O(`The channel dimension of the input should be defined. Found ${e[t]}`);const s=e[t],o=this.kernelSize.concat([s,this.filters]);this.kernel=this.addWeight("kernel",o,null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight("bias",[this.filters],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint)),this.inputSpec=[{ndim:this.rank+2,axes:{[t]:s}}],this.built=!0}call(e,t){return z(()=>{e=ye(e);let s;const o=this.bias==null?null:this.bias.read(),r=kg(this.activation.getClassName());if(r!=null&&this.rank===2)s=Kx(e,this.kernel.read(),o,this.strides,this.padding,this.dataFormat,this.dilationRate,r);else{if(this.rank===1)s=LE(e,this.kernel.read(),o,this.strides[0],this.padding,this.dataFormat,this.dilationRate[0]);else if(this.rank===2)s=Kx(e,this.kernel.read(),o,this.strides,this.padding,this.dataFormat,this.dilationRate);else if(this.rank===3)s=ME(e,this.kernel.read(),o,this.strides,this.padding,this.dataFormat,this.dilationRate);else throw new Ce("convolutions greater than 3D are not implemented yet.");this.activation!=null&&(s=this.activation.apply(s))}return s})}computeOutputShape(e){e=De(e);const t=[],s=this.dataFormat==="channelsLast"?e.slice(1,e.length-1):e.slice(2);for(let r=0;r<s.length;++r){const i=Tn(s[r],this.kernelSize[r],this.padding,this.strides[r],typeof this.dilationRate=="number"?this.dilationRate:this.dilationRate[r]);t.push(i)}let o=[e[0]];return this.dataFormat==="channelsLast"?(o=o.concat(t),o.push(this.filters)):(o.push(this.filters),o=o.concat(t)),o}getConfig(){const e={filters:this.filters,kernelInitializer:Qe(this.kernelInitializer),kernelRegularizer:Ue(this.kernelRegularizer),kernelConstraint:mt(this.kernelConstraint)},t=super.getConfig();return Object.assign(e,t),e}static verifyArgs(e){if(!("filters"in e)||typeof e.filters!="number"||e.filters<1)throw new O(`Convolution layer expected config.filters to be a 'number' > 0 but got ${JSON.stringify(e.filters)}`)}}class _i extends jo{constructor(e){super(2,e),_i.verifyArgs(e)}getConfig(){const e=super.getConfig();return delete e.rank,e}static verifyArgs(e){if(typeof e.kernelSize!="number"&&!od(e.kernelSize,"number",1,2))throw new O(`Conv2D expects config.kernelSize to be number or number[] with length 1 or 2, but received ${JSON.stringify(e.kernelSize)}.`)}}_i.className="Conv2D",ee(_i);class Oi extends jo{constructor(e){super(3,e),Oi.verifyArgs(e)}getConfig(){const e=super.getConfig();return delete e.rank,e}static verifyArgs(e){if(typeof e.kernelSize!="number"&&!(Array.isArray(e.kernelSize)&&(e.kernelSize.length===1||e.kernelSize.length===3)))throw new O(`Conv3D expects config.kernelSize to be number or [number, number, number], but received ${JSON.stringify(e.kernelSize)}.`)}}Oi.className="Conv3D",ee(Oi);class Xx extends _i{constructor(e){if(super(e),this.inputSpec=[new ft({ndim:4})],this.padding!=="same"&&this.padding!=="valid")throw new O(`Conv2DTranspose currently supports only padding modes 'same' and 'valid', but received padding mode ${this.padding}`)}build(e){if(e=De(e),e.length!==4)throw new O("Input should have rank 4; Received input shape: "+JSON.stringify(e));const t=this.dataFormat==="channelsFirst"?1:e.length-1;if(e[t]==null)throw new O("The channel dimension of the inputs should be defined. Found `None`.");const s=e[t],o=this.kernelSize.concat([this.filters,s]);this.kernel=this.addWeight("kernel",o,"float32",this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight("bias",[this.filters],"float32",this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint)),this.inputSpec=[new ft({ndim:4,axes:{[t]:s}})],this.built=!0}call(e,t){return z(()=>{let s=ye(e);if(s.shape.length!==4)throw new O(`Conv2DTranspose.call() expects input tensor to be rank-4, but received a tensor of rank-${s.shape.length}`);const o=s.shape,r=o[0];let i,a;this.dataFormat==="channelsFirst"?(i=2,a=3):(i=1,a=2);const l=o[i],c=o[a],u=this.kernelSize[0],h=this.kernelSize[1],d=this.strides[0],p=this.strides[1],f=Hn(l,d,u,this.padding),m=Hn(c,p,h,this.padding),g=[r,f,m,this.filters];this.dataFormat!=="channelsLast"&&(s=Re(s,[0,2,3,1]));let x=Bf(s,this.kernel.read(),g,this.strides,this.padding);return this.dataFormat!=="channelsLast"&&(x=Re(x,[0,3,1,2])),this.bias!=null&&(x=kn(x,this.bias.read(),this.dataFormat)),this.activation!=null&&(x=this.activation.apply(x)),x})}computeOutputShape(e){e=De(e);const t=e.slice();let s,o,r;this.dataFormat==="channelsFirst"?(s=1,o=2,r=3):(s=3,o=1,r=2);const i=this.kernelSize[0],a=this.kernelSize[1],l=this.strides[0],c=this.strides[1];return t[s]=this.filters,t[o]=Hn(t[o],l,i,this.padding),t[r]=Hn(t[r],c,a,this.padding),t}getConfig(){const e=super.getConfig();return delete e.dilationRate,e}}Xx.className="Conv2DTranspose",ee(Xx);class Yx extends Oi{constructor(e){if(super(e),this.inputSpec=[new ft({ndim:5})],this.padding!=="same"&&this.padding!=="valid")throw new O(`Conv3DTranspose currently supports only padding modes 'same' and 'valid', but received padding mode ${this.padding}`)}build(e){if(e=De(e),e.length!==5)throw new O("Input should have rank 5; Received input shape: "+JSON.stringify(e));const t=this.dataFormat==="channelsFirst"?1:e.length-1;if(e[t]==null)throw new O("The channel dimension of the inputs should be defined. Found `None`.");const s=e[t],o=this.kernelSize.concat([this.filters,s]);this.kernel=this.addWeight("kernel",o,"float32",this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight("bias",[this.filters],"float32",this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint)),this.inputSpec=[new ft({ndim:5,axes:{[t]:s}})],this.built=!0}call(e,t){return z(()=>{let s=ye(e);if(s.shape.length!==5)throw new O(`Conv3DTranspose.call() expects input tensor to be rank-4, but received a tensor of rank-${s.shape.length}`);const o=s.shape,r=o[0];let i,a,l;this.dataFormat==="channelsFirst"?(l=2,i=3,a=4):(l=1,i=2,a=3);const c=o[l],u=o[i],h=o[a],d=this.kernelSize[0],p=this.kernelSize[1],f=this.kernelSize[2],m=this.strides[0],g=this.strides[1],x=this.strides[2],b=Hn(c,m,d,this.padding),w=Hn(u,g,p,this.padding),y=Hn(h,x,f,this.padding),C=[r,b,w,y,this.filters];this.dataFormat!=="channelsLast"&&(s=Re(s,[0,2,3,4,1]));let $=Vf(s,this.kernel.read(),C,this.strides,this.padding);return this.dataFormat!=="channelsLast"&&($=Re($,[0,4,1,2,3])),this.bias!==null&&($=kn($,this.bias.read(),this.dataFormat)),this.activation!==null&&($=this.activation.apply($)),$})}computeOutputShape(e){e=De(e);const t=e.slice();let s,o,r,i;this.dataFormat==="channelsFirst"?(s=1,o=2,r=3,i=4):(s=4,o=1,r=2,i=3);const a=this.kernelSize[0],l=this.kernelSize[1],c=this.kernelSize[2],u=this.strides[0],h=this.strides[1],d=this.strides[2];return t[s]=this.filters,t[o]=Hn(t[o],u,a,this.padding),t[r]=Hn(t[r],h,l,this.padding),t[i]=Hn(t[i],d,c,this.padding),t}getConfig(){const e=super.getConfig();return delete e.dilationRate,e}}Yx.className="Conv3DTranspose",ee(Yx);class Zx extends jo{constructor(e,t){if(super(e,t),this.DEFAULT_DEPTHWISE_INITIALIZER="glorotUniform",this.DEFAULT_POINTWISE_INITIALIZER="glorotUniform",this.depthwiseKernel=null,this.pointwiseKernel=null,t.filters==null)throw new O("The `filters` configuration field is required by SeparableConv, but is unspecified.");if(t.kernelInitializer!=null||t.kernelRegularizer!=null||t.kernelConstraint!=null)throw new O("Fields kernelInitializer, kernelRegularizer and kernelConstraint are invalid for SeparableConv2D. Use depthwiseInitializer, depthwiseRegularizer, depthwiseConstraint, pointwiseInitializer, pointwiseRegularizer and pointwiseConstraint instead.");if(t.padding!=null&&t.padding!=="same"&&t.padding!=="valid")throw new O(`SeparableConv${this.rank}D supports only padding modes: 'same' and 'valid', but received ${JSON.stringify(t.padding)}`);this.depthMultiplier=t.depthMultiplier==null?1:t.depthMultiplier,this.depthwiseInitializer=Xe(t.depthwiseInitializer||this.DEFAULT_DEPTHWISE_INITIALIZER),this.depthwiseRegularizer=Ye(t.depthwiseRegularizer),this.depthwiseConstraint=gt(t.depthwiseConstraint),this.pointwiseInitializer=Xe(t.depthwiseInitializer||this.DEFAULT_POINTWISE_INITIALIZER),this.pointwiseRegularizer=Ye(t.pointwiseRegularizer),this.pointwiseConstraint=gt(t.pointwiseConstraint)}build(e){if(e=De(e),e.length<this.rank+2)throw new O(`Inputs to SeparableConv${this.rank}D should have rank ${this.rank+2}, but received input shape: ${JSON.stringify(e)}`);const t=this.dataFormat==="channelsFirst"?1:e.length-1;if(e[t]==null||e[t]<0)throw new O(`The channel dimension of the inputs should be defined, but found ${JSON.stringify(e[t])}`);const s=e[t],o=this.kernelSize.concat([s,this.depthMultiplier]),r=[];for(let a=0;a<this.rank;++a)r.push(1);r.push(s*this.depthMultiplier,this.filters);const i=!0;this.depthwiseKernel=this.addWeight("depthwise_kernel",o,"float32",this.depthwiseInitializer,this.depthwiseRegularizer,i,this.depthwiseConstraint),this.pointwiseKernel=this.addWeight("pointwise_kernel",r,"float32",this.pointwiseInitializer,this.pointwiseRegularizer,i,this.pointwiseConstraint),this.useBias?this.bias=this.addWeight("bias",[this.filters],"float32",this.biasInitializer,this.biasRegularizer,i,this.biasConstraint):this.bias=null,this.inputSpec=[new ft({ndim:this.rank+2,axes:{[t]:s}})],this.built=!0}call(e,t){return z(()=>{e=ye(e);let s;if(this.rank===1)throw new Ce("1D separable convolution is not implemented yet.");return this.rank===2&&(this.dataFormat==="channelsFirst"&&(e=Re(e,[0,2,3,1])),s=dm(e,this.depthwiseKernel.read(),this.pointwiseKernel.read(),this.strides,this.padding,this.dilationRate,"NHWC")),this.useBias&&(s=kn(s,this.bias.read(),this.dataFormat)),this.activation!=null&&(s=this.activation.apply(s)),this.dataFormat==="channelsFirst"&&(s=Re(s,[0,3,1,2])),s})}getConfig(){const e=super.getConfig();return delete e.rank,delete e.kernelInitializer,delete e.kernelRegularizer,delete e.kernelConstraint,e.depthwiseInitializer=Qe(this.depthwiseInitializer),e.pointwiseInitializer=Qe(this.pointwiseInitializer),e.depthwiseRegularizer=Ue(this.depthwiseRegularizer),e.pointwiseRegularizer=Ue(this.pointwiseRegularizer),e.depthwiseConstraint=mt(this.depthwiseConstraint),e.pointwiseConstraint=mt(this.pointwiseConstraint),e}}Zx.className="SeparableConv";class Qx extends Zx{constructor(e){super(2,e)}}Qx.className="SeparableConv2D",ee(Qx);class ec extends jo{constructor(e){super(1,e),ec.verifyArgs(e),this.inputSpec=[{ndim:3}]}getConfig(){const e=super.getConfig();return delete e.rank,delete e.dataFormat,e}static verifyArgs(e){if(typeof e.kernelSize!="number"&&!od(e.kernelSize,"number",1,1))throw new O(`Conv1D expects config.kernelSize to be number or number[] with length 1, but received ${JSON.stringify(e.kernelSize)}.`)}}ec.className="Conv1D",ee(ec);class Jx extends Se{constructor(e){super(e),typeof e.cropping=="number"?this.cropping=[[e.cropping,e.cropping],[e.cropping,e.cropping]]:typeof e.cropping[0]=="number"?this.cropping=[[e.cropping[0],e.cropping[0]],[e.cropping[1],e.cropping[1]]]:this.cropping=e.cropping,this.dataFormat=e.dataFormat===void 0?"channelsLast":e.dataFormat,this.inputSpec=[{ndim:4}]}computeOutputShape(e){return this.dataFormat==="channelsFirst"?[e[0],e[1],e[2]-this.cropping[0][0]-this.cropping[0][1],e[3]-this.cropping[1][0]-this.cropping[1][1]]:[e[0],e[1]-this.cropping[0][0]-this.cropping[0][1],e[2]-this.cropping[1][0]-this.cropping[1][1],e[3]]}call(e,t){return z(()=>{if(e=ye(e),this.dataFormat==="channelsLast"){const s=Ml(e,this.cropping[0][0],e.shape[1]-this.cropping[0][0]-this.cropping[0][1],2);return Ml(s,this.cropping[1][0],e.shape[2]-this.cropping[1][1]-this.cropping[1][0],3)}else{const s=Ml(e,this.cropping[0][0],e.shape[2]-this.cropping[0][0]-this.cropping[0][1],3);return Ml(s,this.cropping[1][0],e.shape[3]-this.cropping[1][1]-this.cropping[1][0],4)}})}getConfig(){const e={cropping:this.cropping,dataFormat:this.dataFormat},t=super.getConfig();return Object.assign(e,t),e}}Jx.className="Cropping2D",ee(Jx);class eb extends Se{constructor(e){super(e),this.DEFAULT_SIZE=[2,2],this.inputSpec=[{ndim:4}],this.size=e.size==null?this.DEFAULT_SIZE:e.size,this.dataFormat=e.dataFormat==null?"channelsLast":e.dataFormat,rt(this.dataFormat),this.interpolation=e.interpolation==null?"nearest":e.interpolation,hT(this.interpolation)}computeOutputShape(e){if(this.dataFormat==="channelsFirst"){const t=e[2]==null?null:this.size[0]*e[2],s=e[3]==null?null:this.size[1]*e[3];return[e[0],e[1],t,s]}else{const t=e[1]==null?null:this.size[0]*e[1],s=e[2]==null?null:this.size[1]*e[2];return[e[0],t,s,e[3]]}}call(e,t){return z(()=>{let s=ye(e);const o=s.shape;if(this.dataFormat==="channelsFirst"){s=Re(s,[0,2,3,1]);const r=this.size[0]*o[2],i=this.size[1]*o[3],a=this.interpolation==="nearest"?ns.resizeNearestNeighbor(s,[r,i]):ns.resizeBilinear(s,[r,i]);return Re(a,[0,3,1,2])}else{const r=this.size[0]*o[1],i=this.size[1]*o[2];return this.interpolation==="nearest"?ns.resizeNearestNeighbor(s,[r,i]):ns.resizeBilinear(s,[r,i])}})}getConfig(){const e={size:this.size,dataFormat:this.dataFormat,interpolation:this.interpolation},t=super.getConfig();return Object.assign(e,t),e}}eb.className="UpSampling2D",ee(eb);function PE(n,e,t=[1,1],s="valid",o,r){return z(()=>{o==null&&(o=vn()),rt(o);let i=Dd(n,o);if(n.rank!==4)throw new O(`Input for depthwiseConv2d is required to be 4-D, but is instead ${n.rank}-D`);if(e.rank!==4)throw new O(`depthwiseKernel is required to be 4-D, but is instead ${e.rank}-D`);return i=oh(i,e,t,s==="same"?"same":"valid","NHWC",r),o==="channelsFirst"&&(i=Re(i,[0,3,1,2])),i})}class tb extends Jl{constructor(e){super(2,e),this.depthwiseKernel=null,this.depthMultiplier=e.depthMultiplier==null?1:e.depthMultiplier,this.depthwiseInitializer=Xe(e.depthwiseInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.depthwiseConstraint=gt(e.depthwiseConstraint),this.depthwiseRegularizer=Ye(e.depthwiseRegularizer)}build(e){if(e=De(e),e.length<4)throw new O(`Inputs to DepthwiseConv2D should have rank 4. Received input shape: ${JSON.stringify(e)}.`);const t=this.dataFormat==="channelsFirst"?1:3;if(e[t]==null||e[t]<0)throw new O(`The channel dimension of the inputs to DepthwiseConv2D should be defined, but is not (${e[t]}).`);const s=e[t],o=[this.kernelSize[0],this.kernelSize[1],s,this.depthMultiplier];this.depthwiseKernel=this.addWeight("depthwise_kernel",o,null,this.depthwiseInitializer,this.depthwiseRegularizer,!0,this.depthwiseConstraint),this.useBias?this.bias=this.addWeight("bias",[s*this.depthMultiplier],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):this.bias=null,this.built=!0}call(e,t){return z(()=>{e=ye(e);let s=PE(e,this.depthwiseKernel.read(),this.strides,this.padding,this.dataFormat,null);return this.useBias&&(s=kn(s,this.bias.read(),this.dataFormat)),this.activation!=null&&(s=this.activation.apply(s)),s})}computeOutputShape(e){e=De(e);const t=this.dataFormat==="channelsFirst"?e[2]:e[1],s=this.dataFormat==="channelsFirst"?e[3]:e[2],o=this.dataFormat==="channelsFirst"?e[1]*this.depthMultiplier:e[3]*this.depthMultiplier,r=Tn(t,this.kernelSize[0],this.padding,this.strides[0]),i=Tn(s,this.kernelSize[1],this.padding,this.strides[1]);return this.dataFormat==="channelsFirst"?[e[0],o,r,i]:[e[0],r,i,o]}getConfig(){const e=super.getConfig();return e.depthMultiplier=this.depthMultiplier,e.depthwiseInitializer=Qe(this.depthwiseInitializer),e.depthwiseRegularizer=Ue(this.depthwiseRegularizer),e.depthwiseConstraint=mt(this.depthwiseRegularizer),e}}tb.className="DepthwiseConv2D",ee(tb);function nb(n,e,t,s){if(Array.isArray(n)){if(e!=null||t!=null)throw new O("When inputs is an array, neither initialState or constants should be provided");s!=null&&(t=n.slice(n.length-s,n.length),n=n.slice(0,n.length-s)),n.length>1&&(e=n.slice(1,n.length)),n=n[0]}function o(r){return r==null||Array.isArray(r)?r:[r]}return e=o(e),t=o(t),{inputs:n,initialState:e,constants:t}}function sb(n,e,t,s=!1,o,r,i=!1,a=!1){return z(()=>{const l=e.shape.length;if(l<3)throw new O(`Input should be at least 3D, but is ${l}D.`);const c=[1,0].concat($n(2,l));e=Re(e,c),i&&console.warn("Backend rnn(): the unroll = true option is not applicable to the imperative deeplearn.js backend."),o!=null&&(o=re(re(o,"bool"),"float32"),o.rank===l-1&&(o=Ut(o,-1)),o=Re(o,c)),s&&(e=eo(e,0),o!=null&&(o=eo(o,0)));const u=[];let h,d=t;const p=e.shape[0],f=bs(e);let m;o!=null&&(m=bs(o));for(let x=0;x<p;++x){const b=f[x],w=z(()=>n(b,d));if(o==null)h=w[0],d=w[1];else{const y=z(()=>{const C=m[x],$=be(ln(C),C),v=te(L(w[0],C),L(d[0],$)),k=d.map((N,T)=>te(L(w[1][T],C),L(N,$)));return{output:v,newStates:k}});h=y.output,d=y.newStates}a&&u.push(h)}let g;return a&&(g=Mn(u,1)),[h,g,d]})}class Ss extends Se{constructor(e){super(e);let t;if(e.cell==null)throw new O("cell property is missing for the constructor of RNN.");if(Array.isArray(e.cell)?t=new Od({cells:e.cell}):t=e.cell,t.stateSize==null)throw new O("The RNN cell should have an attribute `stateSize` (tuple of integers, one integer per RNN state).");this.cell=t,this.returnSequences=e.returnSequences==null?!1:e.returnSequences,this.returnState=e.returnState==null?!1:e.returnState,this.goBackwards=e.goBackwards==null?!1:e.goBackwards,this._stateful=e.stateful==null?!1:e.stateful,this.unroll=e.unroll==null?!1:e.unroll,this.supportsMasking=!0,this.inputSpec=[new ft({ndim:3})],this.stateSpec=null,this.states_=null,this.numConstants=null,this.keptStates=[]}getStates(){if(this.states_==null){const e=Array.isArray(this.cell.stateSize)?this.cell.stateSize.length:1;return $n(0,e).map(t=>null)}else return this.states_}setStates(e){this.states_=e}computeOutputShape(e){xd(e)&&(e=e[0]),e=e;let t=this.cell.stateSize;Array.isArray(t)||(t=[t]);const s=t[0];let o;if(this.returnSequences?o=[e[0],e[1],s]:o=[e[0],s],this.returnState){const r=[];for(const i of t)r.push([e[0],i]);return[o].concat(r)}else return o}computeMask(e,t){return z(()=>{Array.isArray(t)&&(t=t[0]);const s=this.returnSequences?t:null;if(this.returnState){const o=this.states.map(r=>null);return[s].concat(o)}else return s})}get states(){if(this.states_==null){const e=Array.isArray(this.cell.stateSize)?this.cell.stateSize.length:1,t=[];for(let s=0;s<e;++s)t.push(null);return t}else return this.states_}set states(e){this.states_=e}build(e){if(this.numConstants!=null)throw new Ce("Constants support is not implemented in RNN yet.");xd(e)&&(e=e[0]),e=e;const t=this.stateful?e[0]:null,s=e.slice(2);this.inputSpec[0]=new ft({shape:[t,null,...s]});const o=[e[0]].concat(e.slice(2));this.cell.build(o);let r;if(Array.isArray(this.cell.stateSize)?r=this.cell.stateSize:r=[this.cell.stateSize],this.stateSpec!=null){if(!_e(this.stateSpec.map(i=>i.shape[i.shape.length-1]),r))throw new O(`An initialState was passed that is not compatible with cell.stateSize. Received stateSpec=${this.stateSpec}; However cell.stateSize is ${this.cell.stateSize}`)}else this.stateSpec=r.map(i=>new ft({shape:[null,i]}));this.stateful&&this.resetStates()}resetStates(e,t=!1){z(()=>{if(!this.stateful)throw new Bn("Cannot call resetStates() on an RNN Layer that is not stateful.");const s=this.inputSpec[0].shape[0];if(s==null)throw new O("If an RNN is stateful, it needs to know its batch size. Specify the batch size of your input tensors: \n- If using a Sequential model, specify the batch size by passing a `batchInputShape` option to your first layer.\n- If using the functional API, specify the batch size by passing a `batchShape` option to your Input layer.");if(this.states_==null)Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(o=>ot([s,o])):this.states_=[ot([s,this.cell.stateSize])];else if(e==null)xe(this.states_),this.keptStates!=null&&(xe(this.keptStates),this.keptStates=[]),Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(o=>ot([s,o])):this.states_[0]=ot([s,this.cell.stateSize]);else{if(Array.isArray(e)||(e=[e]),e.length!==this.states_.length)throw new O(`Layer ${this.name} expects ${this.states_.length} state(s), but it received ${e.length} state value(s). Input received: ${e}`);t===!0?this.keptStates.push(this.states_.slice()):xe(this.states_);for(let o=0;o<this.states_.length;++o){const r=e[o],i=Array.isArray(this.cell.stateSize)?this.cell.stateSize[o]:this.cell.stateSize,a=[s,i];if(!_e(r.shape,a))throw new O(`State ${o} is incompatible with layer ${this.name}: expected shape=${a}, received shape=${r.shape}`);this.states_[o]=r}}this.states_=this.states_.map(o=>Dn(o.clone()))})}apply(e,t){let s=t==null?null:t.initialState,o=t==null?null:t.constants;t==null&&(t={});const r=nb(e,s,o,this.numConstants);e=r.inputs,s=r.initialState,o=r.constants;let i=[],a=[];if(s!=null){t.initialState=s,i=i.concat(s),this.stateSpec=[];for(const c of s)this.stateSpec.push(new ft({shape:c.shape}));a=a.concat(this.stateSpec)}if(o!=null&&(t.constants=o,i=i.concat(o),this.numConstants=o.length),i[0]instanceof Un){const c=[e].concat(i),u=this.inputSpec.concat(a),h=this.inputSpec;this.inputSpec=u;const d=super.apply(c,t);return this.inputSpec=h,d}else return super.apply(e,t)}call(e,t){return z(()=>{const s=t==null?null:t.mask,o=t==null?null:t.training;let r=t==null?null:t.initialState;e=ye(e),r==null&&(this.stateful?r=this.states_:r=this.getInitialState(e));const i=Array.isArray(this.cell.stateSize)?this.cell.stateSize.length:1;if(r.length!==i)throw new O(`RNN Layer has ${i} state(s) but was passed ${r.length} initial state(s).`);this.unroll&&console.warn("Ignoring unroll = true for RNN layer, due to imperative backend.");const a={training:o},c=sb((f,m)=>{const g=this.cell.call([f].concat(m),a);return[g[0],g.slice(1)]},e,r,this.goBackwards,s,null,this.unroll,this.returnSequences),u=c[0],h=c[1],d=c[2];this.stateful&&this.resetStates(d,o);const p=this.returnSequences?h:u;return this.returnState?[p].concat(d):p})}getInitialState(e){return z(()=>{let t=ot(e.shape);return t=me(t,[1,2]),t=vi(t),Array.isArray(this.cell.stateSize)?this.cell.stateSize.map(s=>s>1?ld(t,[1,s]):t):this.cell.stateSize>1?[ld(t,[1,this.cell.stateSize])]:[t]})}get trainableWeights(){return this.trainable?this.cell.trainableWeights:[]}get nonTrainableWeights(){return this.trainable?this.cell.nonTrainableWeights:this.cell.weights}setFastWeightInitDuringBuild(e){super.setFastWeightInitDuringBuild(e),this.cell!=null&&this.cell.setFastWeightInitDuringBuild(e)}getConfig(){const e=super.getConfig(),t={returnSequences:this.returnSequences,returnState:this.returnState,goBackwards:this.goBackwards,stateful:this.stateful,unroll:this.unroll};this.numConstants!=null&&(t.numConstants=this.numConstants);const s=this.cell.getConfig();return this.getClassName()===Ss.className&&(t.cell={className:this.cell.getClassName(),config:s}),Object.assign(Object.assign(Object.assign({},s),e),t)}static fromConfig(e,t,s={}){const o=t.cell,r=Gn(o,s);return new e(Object.assign(t,{cell:r}))}}Ss.className="RNN",ee(Ss);class tc extends Se{}class Fd extends tc{constructor(e){super(e),this.DEFAULT_ACTIVATION="tanh",this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_RECURRENT_INITIALIZER="orthogonal",this.DEFAULT_BIAS_INITIALIZER="zeros",this.units=e.units,wt(this.units,"units"),this.activation=ks(e.activation==null?this.DEFAULT_ACTIVATION:e.activation),this.useBias=e.useBias==null?!0:e.useBias,this.kernelInitializer=Xe(e.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.recurrentInitializer=Xe(e.recurrentInitializer||this.DEFAULT_RECURRENT_INITIALIZER),this.biasInitializer=Xe(e.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.kernelRegularizer=Ye(e.kernelRegularizer),this.recurrentRegularizer=Ye(e.recurrentRegularizer),this.biasRegularizer=Ye(e.biasRegularizer),this.kernelConstraint=gt(e.kernelConstraint),this.recurrentConstraint=gt(e.recurrentConstraint),this.biasConstraint=gt(e.biasConstraint),this.dropout=Go([1,Is([0,e.dropout==null?0:e.dropout])]),this.recurrentDropout=Go([1,Is([0,e.recurrentDropout==null?0:e.recurrentDropout])]),this.dropoutFunc=e.dropoutFunc,this.stateSize=this.units,this.dropoutMask=null,this.recurrentDropoutMask=null}build(e){e=De(e),this.kernel=this.addWeight("kernel",[e[e.length-1],this.units],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.recurrentKernel=this.addWeight("recurrent_kernel",[this.units,this.units],null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.useBias?this.bias=this.addWeight("bias",[this.units],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):this.bias=null,this.built=!0}call(e,t){return z(()=>{if(e=e,e.length!==2)throw new O(`SimpleRNNCell expects 2 input Tensors, got ${e.length}.`);let s=e[1];e=e[0];const o=t.training==null?!1:t.training;0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=Ns({ones:()=>ln(e),rate:this.dropout,training:o,dropoutFunc:this.dropoutFunc})),0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=Ns({ones:()=>ln(s),rate:this.recurrentDropout,training:o,dropoutFunc:this.dropoutFunc}));let r;const i=this.dropoutMask,a=this.recurrentDropoutMask;i!=null?r=Wn(L(e,i),this.kernel.read()):r=Wn(e,this.kernel.read()),this.bias!=null&&(r=kn(r,this.bias.read())),a!=null&&(s=L(s,a));let l=te(r,Wn(s,this.recurrentKernel.read()));return this.activation!=null&&(l=this.activation.apply(l)),[l,l]})}getConfig(){const e=super.getConfig(),t={units:this.units,activation:vs(this.activation),useBias:this.useBias,kernelInitializer:Qe(this.kernelInitializer),recurrentInitializer:Qe(this.recurrentInitializer),biasInitializer:Qe(this.biasInitializer),kernelRegularizer:Ue(this.kernelRegularizer),recurrentRegularizer:Ue(this.recurrentRegularizer),biasRegularizer:Ue(this.biasRegularizer),activityRegularizer:Ue(this.activityRegularizer),kernelConstraint:mt(this.kernelConstraint),recurrentConstraint:mt(this.recurrentConstraint),biasConstraint:mt(this.biasConstraint),dropout:this.dropout,recurrentDropout:this.recurrentDropout};return Object.assign(Object.assign({},e),t)}}Fd.className="SimpleRNNCell",ee(Fd);class ob extends Ss{constructor(e){e.cell=new Fd(e),super(e)}call(e,t){return z(()=>{this.cell.dropoutMask!=null&&(xe(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(xe(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null);const s=t==null?null:t.mask,o=t==null?null:t.training,r=t==null?null:t.initialState;return super.call(e,{mask:s,training:o,initialState:r})})}static fromConfig(e,t){return new e(t)}}ob.className="SimpleRNN",ee(ob);class _d extends tc{constructor(e){if(super(e),this.DEFAULT_ACTIVATION="tanh",this.DEFAULT_RECURRENT_ACTIVATION="hardSigmoid",this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_RECURRENT_INITIALIZER="orthogonal",this.DEFAULT_BIAS_INITIALIZER="zeros",e.resetAfter)throw new O("GRUCell does not support reset_after parameter set to true.");this.units=e.units,wt(this.units,"units"),this.activation=ks(e.activation===void 0?this.DEFAULT_ACTIVATION:e.activation),this.recurrentActivation=ks(e.recurrentActivation===void 0?this.DEFAULT_RECURRENT_ACTIVATION:e.recurrentActivation),this.useBias=e.useBias==null?!0:e.useBias,this.kernelInitializer=Xe(e.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.recurrentInitializer=Xe(e.recurrentInitializer||this.DEFAULT_RECURRENT_INITIALIZER),this.biasInitializer=Xe(e.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.kernelRegularizer=Ye(e.kernelRegularizer),this.recurrentRegularizer=Ye(e.recurrentRegularizer),this.biasRegularizer=Ye(e.biasRegularizer),this.kernelConstraint=gt(e.kernelConstraint),this.recurrentConstraint=gt(e.recurrentConstraint),this.biasConstraint=gt(e.biasConstraint),this.dropout=Go([1,Is([0,e.dropout==null?0:e.dropout])]),this.recurrentDropout=Go([1,Is([0,e.recurrentDropout==null?0:e.recurrentDropout])]),this.dropoutFunc=e.dropoutFunc,this.implementation=e.implementation,this.stateSize=this.units,this.dropoutMask=null,this.recurrentDropoutMask=null}build(e){e=De(e);const t=e[e.length-1];this.kernel=this.addWeight("kernel",[t,this.units*3],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.recurrentKernel=this.addWeight("recurrent_kernel",[this.units,this.units*3],null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.useBias?this.bias=this.addWeight("bias",[this.units*3],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):this.bias=null,this.built=!0}call(e,t){return z(()=>{if(e=e,e.length!==2)throw new O(`GRUCell expects 2 input Tensors (inputs, h, c), got ${e.length}.`);const s=t.training==null?!1:t.training;let o=e[1];e=e[0],0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=Ns({ones:()=>ln(e),rate:this.dropout,training:s,count:3,dropoutFunc:this.dropoutFunc})),0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=Ns({ones:()=>ln(o),rate:this.recurrentDropout,training:s,count:3,dropoutFunc:this.dropoutFunc}));const r=this.dropoutMask,i=this.recurrentDropoutMask;let a,l,c;0<this.dropout&&this.dropout<1&&(e=L(e,r[0]));let u=Wn(e,this.kernel.read());this.useBias&&(u=kn(u,this.bias.read())),0<this.recurrentDropout&&this.recurrentDropout<1&&(o=L(o,i[0]));const h=this.recurrentKernel.read(),[d,p]=tn(h,[2*this.units,this.units],h.rank-1),f=Wn(o,d),[m,g,x]=tn(u,3,u.rank-1),[b,w]=tn(f,2,f.rank-1);a=this.recurrentActivation.apply(te(m,b)),l=this.recurrentActivation.apply(te(g,w));const y=Wn(L(l,o),p);c=this.activation.apply(te(x,y));const C=te(L(a,o),L(te(1,st(a)),c));return[C,C]})}getConfig(){const e=super.getConfig(),t={units:this.units,activation:vs(this.activation),recurrentActivation:vs(this.recurrentActivation),useBias:this.useBias,kernelInitializer:Qe(this.kernelInitializer),recurrentInitializer:Qe(this.recurrentInitializer),biasInitializer:Qe(this.biasInitializer),kernelRegularizer:Ue(this.kernelRegularizer),recurrentRegularizer:Ue(this.recurrentRegularizer),biasRegularizer:Ue(this.biasRegularizer),activityRegularizer:Ue(this.activityRegularizer),kernelConstraint:mt(this.kernelConstraint),recurrentConstraint:mt(this.recurrentConstraint),biasConstraint:mt(this.biasConstraint),dropout:this.dropout,recurrentDropout:this.recurrentDropout,implementation:this.implementation,resetAfter:!1};return Object.assign(Object.assign({},e),t)}}_d.className="GRUCell",ee(_d);class rb extends Ss{constructor(e){e.implementation===0&&console.warn("`implementation=0` has been deprecated, and now defaults to `implementation=1`. Please update your layer call."),e.cell=new _d(e),super(e)}call(e,t){return z(()=>{this.cell.dropoutMask!=null&&(xe(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(xe(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null);const s=t==null?null:t.mask,o=t==null?null:t.training,r=t==null?null:t.initialState;return super.call(e,{mask:s,training:o,initialState:r})})}static fromConfig(e,t){return t.implmentation===0&&(t.implementation=1),new e(t)}}rb.className="GRU",ee(rb);class nc extends tc{constructor(e){super(e),this.DEFAULT_ACTIVATION="tanh",this.DEFAULT_RECURRENT_ACTIVATION="hardSigmoid",this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_RECURRENT_INITIALIZER="orthogonal",this.DEFAULT_BIAS_INITIALIZER="zeros",this.units=e.units,wt(this.units,"units"),this.activation=ks(e.activation===void 0?this.DEFAULT_ACTIVATION:e.activation),this.recurrentActivation=ks(e.recurrentActivation===void 0?this.DEFAULT_RECURRENT_ACTIVATION:e.recurrentActivation),this.useBias=e.useBias==null?!0:e.useBias,this.kernelInitializer=Xe(e.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.recurrentInitializer=Xe(e.recurrentInitializer||this.DEFAULT_RECURRENT_INITIALIZER),this.biasInitializer=Xe(e.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.unitForgetBias=e.unitForgetBias,this.kernelRegularizer=Ye(e.kernelRegularizer),this.recurrentRegularizer=Ye(e.recurrentRegularizer),this.biasRegularizer=Ye(e.biasRegularizer),this.kernelConstraint=gt(e.kernelConstraint),this.recurrentConstraint=gt(e.recurrentConstraint),this.biasConstraint=gt(e.biasConstraint),this.dropout=Go([1,Is([0,e.dropout==null?0:e.dropout])]),this.recurrentDropout=Go([1,Is([0,e.recurrentDropout==null?0:e.recurrentDropout])]),this.dropoutFunc=e.dropoutFunc,this.implementation=e.implementation,this.stateSize=[this.units,this.units],this.dropoutMask=null,this.recurrentDropoutMask=null}build(e){var t;e=De(e);const s=e[e.length-1];this.kernel=this.addWeight("kernel",[s,this.units*4],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.recurrentKernel=this.addWeight("recurrent_kernel",[this.units,this.units*4],null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint);let o;if(this.useBias){if(this.unitForgetBias){const r=this.biasInitializer,i=this.units;o=new(t=class extends dn{apply(l,c){const u=r.apply([i]),h=new ud().apply([i]),d=r.apply([i*2]);return Dg(Dg(u,h),d)}},t.className="CustomInit",t)}else o=this.biasInitializer;this.bias=this.addWeight("bias",[this.units*4],null,o,this.biasRegularizer,!0,this.biasConstraint)}else this.bias=null;this.built=!0}call(e,t){return z(()=>{const s=t.training==null?!1:t.training;if(e=e,e.length!==3)throw new O(`LSTMCell expects 3 input Tensors (inputs, h, c), got ${e.length}.`);let o=e[1];const r=e[2];e=e[0],0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=Ns({ones:()=>ln(e),rate:this.dropout,training:s,count:4,dropoutFunc:this.dropoutFunc})),0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=Ns({ones:()=>ln(o),rate:this.recurrentDropout,training:s,count:4,dropoutFunc:this.dropoutFunc}));const i=this.dropoutMask,a=this.recurrentDropoutMask;let l,c,u,h;0<this.dropout&&this.dropout<1&&(e=L(e,i[0]));let d=Wn(e,this.kernel.read());0<this.recurrentDropout&&this.recurrentDropout<1&&(o=L(o,a[0])),d=te(d,Wn(o,this.recurrentKernel.read())),this.useBias&&(d=kn(d,this.bias.read()));const[p,f,m,g]=tn(d,4,d.rank-1);l=this.recurrentActivation.apply(p),c=this.recurrentActivation.apply(f),u=te(L(c,r),L(l,this.activation.apply(m))),h=this.recurrentActivation.apply(g);const x=L(h,this.activation.apply(u));return[x,x,u]})}getConfig(){const e=super.getConfig(),t={units:this.units,activation:vs(this.activation),recurrentActivation:vs(this.recurrentActivation),useBias:this.useBias,kernelInitializer:Qe(this.kernelInitializer),recurrentInitializer:Qe(this.recurrentInitializer),biasInitializer:Qe(this.biasInitializer),unitForgetBias:this.unitForgetBias,kernelRegularizer:Ue(this.kernelRegularizer),recurrentRegularizer:Ue(this.recurrentRegularizer),biasRegularizer:Ue(this.biasRegularizer),activityRegularizer:Ue(this.activityRegularizer),kernelConstraint:mt(this.kernelConstraint),recurrentConstraint:mt(this.recurrentConstraint),biasConstraint:mt(this.biasConstraint),dropout:this.dropout,recurrentDropout:this.recurrentDropout,implementation:this.implementation};return Object.assign(Object.assign({},e),t)}}nc.className="LSTMCell",ee(nc);class ib extends Ss{constructor(e){e.implementation===0&&console.warn("`implementation=0` has been deprecated, and now defaults to `implementation=1`. Please update your layer call."),e.cell=new nc(e),super(e)}call(e,t){return z(()=>{this.cell.dropoutMask!=null&&(xe(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(xe(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null);const s=t==null?null:t.mask,o=t==null?null:t.training,r=t==null?null:t.initialState;return super.call(e,{mask:s,training:o,initialState:r})})}static fromConfig(e,t){return t.implmentation===0&&(t.implementation=1),new e(t)}}ib.className="LSTM",ee(ib);class Od extends tc{constructor(e){super(e),this.cells=e.cells}get stateSize(){const e=[];for(const t of this.cells.slice().reverse())Array.isArray(t.stateSize)?e.push(...t.stateSize):e.push(t.stateSize);return e}call(e,t){return z(()=>{e=e;let s=e.slice(1);const o=[];for(const a of this.cells.slice().reverse())Array.isArray(a.stateSize)?o.push(s.splice(0,a.stateSize.length)):o.push(s.splice(0,1));o.reverse();const r=[];let i;for(let a=0;a<this.cells.length;++a){const l=this.cells[a];s=o[a],a===0?i=[e[0]].concat(s):i=[i[0]].concat(s),i=l.call(i,t),r.push(i.slice(1))}s=[];for(const a of r.slice().reverse())s.push(...a);return[i[0]].concat(s)})}build(e){xd(e)&&(e=e[0]),e=e;let t;this.cells.forEach((s,o)=>{ao(`RNNCell_${o}`,()=>{s.build(e),Array.isArray(s.stateSize)?t=s.stateSize[0]:t=s.stateSize,e=[e[0],t]})}),this.built=!0}getConfig(){const e=super.getConfig(),t=r=>({className:r.getClassName(),config:r.getConfig()}),o={cells:this.cells.map(t)};return Object.assign(Object.assign({},e),o)}static fromConfig(e,t,s={}){const o=[];for(const r of t.cells)o.push(Gn(r,s));return new e({cells:o})}get trainableWeights(){if(!this.trainable)return[];const e=[];for(const t of this.cells)e.push(...t.trainableWeights);return e}get nonTrainableWeights(){const e=[];for(const t of this.cells)e.push(...t.nonTrainableWeights);if(!this.trainable){const t=[];for(const s of this.cells)t.push(...s.trainableWeights);return t.concat(e)}return e}getWeights(){const e=[];for(const t of this.cells)e.push(...t.weights);return bd(e)}setWeights(e){const t=[];for(const s of this.cells){const o=s.weights.length,r=e.splice(o);for(let i=0;i<s.weights.length;++i)t.push([s.weights[i],r[i]])}yd(t)}}Od.className="StackedRNNCells",ee(Od);function Ns(n){const{ones:e,rate:t,training:s=!1,count:o=1,dropoutFunc:r}=n,i=()=>r!=null?r(e(),t):_g(e(),t),a=()=>Si(i,e,s);return!o||o<=1?Dn(a().clone()):Array(o).fill(void 0).map(a).map(c=>Dn(c.clone()))}var BE=function(n,e){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(n);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(n,s[o])&&(t[s[o]]=n[s[o]]);return t};class ab extends Ss{constructor(e){if(e.unroll)throw new Ce("Unrolling is not possible with convolutional RNNs.");if(Array.isArray(e.cell))throw new Ce("It is not possible at the moment to stack convolutional cells.");super(e),this.inputSpec=[new ft({ndim:5})]}call(e,t){return z(()=>{if(this.cell.dropoutMask!=null&&(xe(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(xe(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null),t&&t.constants)throw new O("ConvRNN2D cell does not support constants");const s=t==null?null:t.mask,o=t==null?null:t.training,r=t==null?null:t.initialState;return super.call(e,{mask:s,training:o,initialState:r})})}computeOutputShape(e){let t=this.computeSingleOutputShape(e);return this.returnSequences||(t=[t[0],...t.slice(2)]),this.returnState&&(t=[t,...Array(2).fill([e[0],...t.slice(-3)])]),t}getInitialState(e){return z(()=>{const{stateSize:t}=this.cell,s=e.shape,o=this.computeSingleOutputShape(s),r=[o[0],...o.slice(2)],i=ot(r);return Array.isArray(t)?Array(t.length).fill(i):[i]})}resetStates(e,t=!1){z(()=>{if(!this.stateful)throw new Bn("Cannot call resetStates() on an RNN Layer that is not stateful.");const s=this.inputSpec[0].shape,o=this.computeSingleOutputShape(s),r=[o[0],...o.slice(2)];if(s[0]==null)throw new O("If an RNN is stateful, it needs to know its batch size. Specify the batch size of your input tensors: \n- If using a Sequential model, specify the batch size by passing a `batchInputShape` option to your first layer.\n- If using the functional API, specify the batch size by passing a `batchShape` option to your Input layer.");if(this.getStates()==null)Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(()=>ot(r)):this.states_=[ot(r)];else if(e==null)xe(this.states_),this.keptStates!=null&&(xe(this.keptStates),this.keptStates=[]),Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(()=>ot(r)):this.states_[0]=ot(r);else{if(Array.isArray(e)||(e=[e]),e.length!==this.states_.length)throw new O(`Layer ${this.name} expects ${this.states_.length} state(s), but it received ${e.length} state value(s). Input received: ${e}`);t?this.keptStates.push(this.states_.slice()):xe(this.states_);for(let a=0;a<this.states_.length;++a){const l=e[a],c=r;if(!_e(l.shape,c))throw new O(`State ${a} is incompatible with layer ${this.name}: expected shape=${c}, received shape=${l.shape}`);this.states_[a]=l}}this.states_=this.states_.map(a=>Dn(a.clone()))})}computeSingleOutputShape(e){const{dataFormat:t,filters:s,kernelSize:o,padding:r,strides:i,dilationRate:a}=this.cell,l=t==="channelsFirst",c=e[l?3:2],u=e[l?4:3],h=Tn(c,o[0],r,i[0],a[0]),d=Tn(u,o[1],r,i[1],a[1]);return[...e.slice(0,2),...l?[s,h,d]:[h,d,s]]}}ab.className="ConvRNN2D";class Ld extends nc{constructor(e){const{filters:t,kernelSize:s,strides:o,padding:r,dataFormat:i,dilationRate:a}=e;super(Object.assign(Object.assign({},e),{units:t})),this.filters=t,wt(this.filters,"filters"),this.kernelSize=qo(s,2,"kernelSize"),this.kernelSize.forEach(l=>wt(l,"kernelSize")),this.strides=qo(o||1,2,"strides"),this.strides.forEach(l=>wt(l,"strides")),this.padding=r||"valid",nn(this.padding),this.dataFormat=i||"channelsLast",rt(this.dataFormat),this.dilationRate=qo(a||1,2,"dilationRate"),this.dilationRate.forEach(l=>wt(l,"dilationRate"))}build(e){var t;e=De(e);const s=this.dataFormat==="channelsFirst"?1:e.length-1;if(e[s]==null)throw new O(`The channel dimension of the input should be defined. Found ${e[s]}`);const o=e[s],r=4,i=this.kernelSize.concat([o,this.filters*r]);this.kernel=this.addWeight("kernel",i,null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint);const a=this.kernelSize.concat([this.filters,this.filters*r]);if(this.recurrentKernel=this.addWeight("recurrent_kernel",a,null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.useBias){let l;if(this.unitForgetBias){const c=this.biasInitializer,u=this.filters;l=new(t=class extends dn{apply(d,p){const f=c.apply([u]),m=ts([u]),g=c.apply([u*2]);return ad([f,m,g])}},t.className="CustomInit",t)}else l=this.biasInitializer;this.bias=this.addWeight("bias",[this.filters*r],null,l,this.biasRegularizer,!0,this.biasConstraint)}this.built=!0}call(e,t){return z(()=>{if(e.length!==3)throw new O(`ConvLSTM2DCell expects 3 input Tensors (inputs, h, c), got ${e.length}.`);const s=t.training||!1,o=e[0],r=e[1],i=e[2],a=4;0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=Ns({ones:()=>ln(o),rate:this.dropout,training:s,count:a,dropoutFunc:this.dropoutFunc}));const l=this.dropoutMask,c=(G,Z,Q)=>!Z||!Z[Q]?G:L(Z[Q],G);let u=c(o,l,0),h=c(o,l,1),d=c(o,l,2),p=c(o,l,3);0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=Ns({ones:()=>ln(r),rate:this.recurrentDropout,training:s,count:a,dropoutFunc:this.dropoutFunc}));const f=this.recurrentDropoutMask;let m=c(r,f,0),g=c(r,f,1),x=c(r,f,2),b=c(r,f,3);const w=3,[y,C,$,v]=tn(this.kernel.read(),a,w),[k,N,T,I]=this.useBias?tn(this.bias.read(),a):[null,null,null,null];u=this.inputConv(u,y,k,this.padding),h=this.inputConv(h,C,N,this.padding),d=this.inputConv(d,$,T,this.padding),p=this.inputConv(p,v,I,this.padding);const[E,R,D,F]=tn(this.recurrentKernel.read(),a,w);m=this.recurrentConv(m,E),g=this.recurrentConv(g,R),x=this.recurrentConv(x,D),b=this.recurrentConv(b,F);const _=this.recurrentActivation.apply(te(u,m)),P=this.recurrentActivation.apply(te(h,g)),B=te(L(P,i),L(_,this.activation.apply(te(d,x)))),H=L(this.recurrentActivation.apply(te(p,b)),this.activation.apply(B));return[H,H,B]})}getConfig(){const e=super.getConfig(),{units:t}=e,s=BE(e,["units"]),o={filters:this.filters,kernelSize:this.kernelSize,padding:this.padding,dataFormat:this.dataFormat,dilationRate:this.dilationRate,strides:this.strides};return Object.assign(Object.assign({},s),o)}inputConv(e,t,s,o){const r=Ys(e,t,this.strides,o||"valid",this.dataFormat==="channelsFirst"?"NCHW":"NHWC",this.dilationRate);return s?kn(r,s,this.dataFormat):r}recurrentConv(e,t){return Ys(e,t,1,"same",this.dataFormat==="channelsFirst"?"NCHW":"NHWC")}}Ld.className="ConvLSTM2DCell",ee(Ld);class lb extends ab{constructor(e){const t=new Ld(e);super(Object.assign(Object.assign({},e),{cell:t}))}static fromConfig(e,t){return new e(t)}}lb.className="ConvLSTM2D",ee(lb);class Md extends Se{constructor(e){super(e),this.rate=Math.max(Math.min(e.rate,1),0),this.noiseShape=e.noiseShape,this.seed=e.seed,this.supportsMasking=!0}getNoiseShape(e){if(this.noiseShape==null)return this.noiseShape;const t=e.shape,s=[];for(let o=0;o<this.noiseShape.length;++o)s.push(this.noiseShape[o]==null?t[o]:this.noiseShape[o]);return s}call(e,t){return z(()=>{this.invokeCallHook(e,t);const s=ye(e);if(0<this.rate&&this.rate<1){const o=t.training==null?!1:t.training,r=this.getNoiseShape(s);return Si(()=>_g(s,this.rate,r,this.seed),()=>s,o)}return e})}getConfig(){const e={rate:this.rate,noiseShape:this.noiseShape,seed:this.seed},t=super.getConfig();return Object.assign(e,t),e}dispose(){return super.dispose()}}Md.className="Dropout",ee(Md);class cb extends Md{constructor(e){super(e),this.inputSpec=[{ndim:3}]}getNoiseShape(e){const t=e.shape;return[t[0],1,t[2]]}}cb.className="SpatialDropout1D",ee(cb);class ub extends Se{constructor(e){if(super(e),this.activation=null,this.useBias=!0,this.kernel=null,this.bias=null,this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_BIAS_INITIALIZER="zeros",e.batchInputShape==null&&e.inputShape==null&&e.inputDim!=null){let t=null;e.batchSize!=null&&(t=e.batchSize),this.batchInputShape=[t,e.inputDim]}this.units=e.units,wt(this.units,"units"),this.activation=ks(e.activation),e.useBias!=null&&(this.useBias=e.useBias),this.kernelInitializer=Xe(e.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.biasInitializer=Xe(e.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.kernelConstraint=gt(e.kernelConstraint),this.biasConstraint=gt(e.biasConstraint),this.kernelRegularizer=Ye(e.kernelRegularizer),this.biasRegularizer=Ye(e.biasRegularizer),this.activityRegularizer=Ye(e.activityRegularizer),this.supportsMasking=!0,this.inputSpec=[{minNDim:2}]}build(e){e=De(e);const t=e[e.length-1];this.kernel==null&&(this.kernel=this.addWeight("kernel",[t,this.units],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight("bias",[this.units],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint))),this.inputSpec=[{minNDim:2,axes:{[-1]:t}}],this.built=!0}computeOutputShape(e){e=De(e);const t=e.slice();return t[t.length-1]=this.units,t}call(e,t){return z(()=>{this.invokeCallHook(e,t);const s=ye(e),o=kg(this.activation.getClassName());let r;return o!=null?r=Wn(s,this.kernel.read(),o,this.bias?this.bias.read():null):(r=Wn(s,this.kernel.read()),this.bias!=null&&(r=kn(r,this.bias.read())),this.activation!=null&&(r=this.activation.apply(r))),r})}getConfig(){const e={units:this.units,activation:vs(this.activation),useBias:this.useBias,kernelInitializer:Qe(this.kernelInitializer),biasInitializer:Qe(this.biasInitializer),kernelRegularizer:Ue(this.kernelRegularizer),biasRegularizer:Ue(this.biasRegularizer),activityRegularizer:Ue(this.activityRegularizer),kernelConstraint:mt(this.kernelConstraint),biasConstraint:mt(this.biasConstraint)},t=super.getConfig();return Object.assign(e,t),e}}ub.className="Dense",ee(ub);class hb extends Se{constructor(e){e=e||{},super(e),this.inputSpec=[{minNDim:3}],this.dataFormat=e.dataFormat}computeOutputShape(e){e=De(e);for(const t of e.slice(1))if(t==null)throw new O(`The shape of the input to "Flatten" is not fully defined (got ${e.slice(1)}). Make sure to pass a complete "input_shape" or "batch_input_shape" argument to the first layer in your model.`);return[e[0],Cs(e,1)]}call(e,t){return z(()=>{this.invokeCallHook(e,t);let s=ye(e);if(this.dataFormat==="channelsFirst"&&s.rank>1){const o=[0];for(let r=2;r<s.rank;++r)o.push(r);o.push(1),s=Re(s,o)}return xT(s)})}getConfig(){const e={};this.dataFormat!=null&&(e.dataFormat=this.dataFormat);const t=super.getConfig();return Object.assign(e,t),e}}hb.className="Flatten",ee(hb);class db extends Se{constructor(e){super(e),this.supportsMasking=!0,this.activation=ks(e.activation)}call(e,t){return z(()=>{this.invokeCallHook(e,t);const s=ye(e);return this.activation.apply(s)})}getConfig(){const e={activation:vs(this.activation)},t=super.getConfig();return Object.assign(e,t),e}}db.className="Activation",ee(db);class pb extends Se{constructor(e){super(e),this.n=e.n,this.inputSpec=[{ndim:2}]}computeOutputShape(e){return[e[0],this.n,e[1]]}call(e,t){return z(()=>(e=ye(e),mT(e,this.n)))}getConfig(){const e={n:this.n},t=super.getConfig();return Object.assign(e,t),e}}pb.className="RepeatVector",ee(pb);class fb extends Se{constructor(e){super(e),this.targetShape=e.targetShape;for(let t=0;t<this.targetShape.length;++t)this.isUnknown(this.targetShape[t])&&(this.targetShape[t]=null)}isUnknown(e){return e<0||e==null}fixUnknownDimension(e,t){const s="Total size of new array must be unchanged.",o=t.slice();let r=1,i=null;for(let l=0;l<o.length;++l){const c=o[l];if(this.isUnknown(c))if(i===null)i=l;else throw new O("Can only specifiy one unknown dimension.");else r*=c}const a=Cs(e);if(i!==null){if(r===0||a%r!==0)throw new O(s);o[i]=a/r}else if(a!==r)throw new O(s);return o}computeOutputShape(e){let t=!1;for(let s=0;s<e.length;++s)if(this.isUnknown(e[s])){t=!0;break}return t?e.slice(0,1).concat(this.targetShape):e.slice(0,1).concat(this.fixUnknownDimension(e.slice(1),this.targetShape))}call(e,t){return z(()=>{this.invokeCallHook(e,t);const s=ye(e),o=s.shape,r=o.slice(0,1).concat(this.fixUnknownDimension(o.slice(1),this.targetShape));return V(s,r)})}getConfig(){const e={targetShape:this.targetShape},t=super.getConfig();return Object.assign(e,t),e}}fb.className="Reshape",ee(fb);class mb extends Se{constructor(e){if(super(e),e.dims==null)throw new Error("Required configuration field `dims` is missing during Permute constructor call.");if(!Array.isArray(e.dims))throw new Error(`Permute constructor requires \`dims\` to be an Array, but received ${e.dims} instead.`);const t=$n(1,e.dims.length+1);if(!_e(e.dims.slice().sort(),t))throw new Error("Invalid permutation `dims`: "+JSON.stringify(e.dims)+" `dims` must contain consecutive integers starting from 1.");this.dims=e.dims,this.dimsIncludingBatch=[0].concat(this.dims),this.inputSpec=[new ft({ndim:this.dims.length+1})]}computeOutputShape(e){e=De(e);const t=e.slice();return this.dims.forEach((s,o)=>{t[o+1]=e[s]}),t}call(e,t){return Re(ye(e),this.dimsIncludingBatch)}getConfig(){const e={dims:this.dims},t=super.getConfig();return Object.assign(e,t),e}}mb.className="Permute",ee(mb);class gb extends Se{constructor(e){super(e==null?{}:e),this.supportsMasking=!0,e!=null?this.maskValue=e.maskValue==null?0:e.maskValue:this.maskValue=0}computeOutputShape(e){return e}getConfig(){const e=super.getConfig(),t={maskValue:this.maskValue};return Object.assign(t,e),t}computeMask(e,t){const s=ye(e);return Yu(wl(s,this.maskValue),-1)}call(e,t){return z(()=>{this.invokeCallHook(e,t);const s=ye(e),i=Yu(wl(s,this.maskValue),-1,!0);return L(s,re(i,s.dtype))})}}gb.className="Masking",ee(gb);class xb extends Se{constructor(e){if(super(e),this.embeddings=null,this.DEFAULT_EMBEDDINGS_INITIALIZER="randomUniform",e.batchInputShape==null&&e.inputShape==null){let t=null;e.batchSize!=null&&(t=e.batchSize),e.inputLength==null?this.batchInputShape=[t,null]:this.batchInputShape=[t].concat(Pe(e.inputLength))}this.inputDim=e.inputDim,wt(this.inputDim,"inputDim"),this.outputDim=e.outputDim,wt(this.outputDim,"outputDim"),this.embeddingsInitializer=Xe(e.embeddingsInitializer||this.DEFAULT_EMBEDDINGS_INITIALIZER),this.embeddingsRegularizer=Ye(e.embeddingsRegularizer),this.activityRegularizer=Ye(e.activityRegularizer),this.embeddingsConstraint=gt(e.embeddingsConstraint),this.maskZero=e.maskZero,this.supportsMasking=e.maskZero,this.inputLength=e.inputLength}build(e){this.embeddings=this.addWeight("embeddings",[this.inputDim,this.outputDim],this.dtype,this.embeddingsInitializer,this.embeddingsRegularizer,!0,this.embeddingsConstraint),this.built=!0}warnOnIncompatibleInputShape(e){}computeMask(e,t){return z(()=>this.maskZero?(e=ye(e),wl(e,Ee(e))):null)}computeOutputShape(e){if(e=De(e),this.inputLength==null)return[...e,this.outputDim];const t=Pe(this.inputLength);if(t.length!==e.length-1)throw new O(`"inputLength" is ${this.inputLength}, but received input shape has shape ${e}`);{let s=0;for(let o=0;o<t.length;++o){const r=t[o],i=e[o+1];if(r!=null&&i!=null&&r!==i)throw new O(`"inputLength" is ${this.inputLength}, but received input shape has shape ${e}`);r==null&&(t[s]=i),s++}}return[e[0],...t,this.outputDim]}call(e,t){return z(()=>{this.invokeCallHook(e,t);let s=ye(e);s.dtype!=="int32"&&(s=Vn(s,"int32"));const o=Fg(this.embeddings.read(),V(s,[s.size]));return V(o,De(this.computeOutputShape(s.shape)))})}getConfig(){const e={inputDim:this.inputDim,outputDim:this.outputDim,embeddingsInitializer:Qe(this.embeddingsInitializer),embeddingsRegularizer:Ue(this.embeddingsRegularizer),activityRegularizer:Ue(this.activityRegularizer),embeddingsConstraint:mt(this.embeddingsConstraint),maskZero:this.maskZero,inputLength:this.inputLength},t=super.getConfig();return Object.assign(e,t),e}}xb.className="Embedding",ee(xb);class uo extends Se{constructor(e){super(e||{}),this.supportsMasking=!0}mergeFunction(e){throw new Ce}computeElementwiseOpOutputShape(e,t){if(e==null||t==null)return null;if(e.length<t.length)return this.computeElementwiseOpOutputShape(t,e);if(t.length===0)return e;const s=e.slice(0,e.length-t.length);for(let o=0;o<t.length;++o){const r=e[e.length-t.length+o],i=t[o];if(r==null||i==null||r<0||i<0)s.push(null);else if(r===1)s.push(i);else if(i===1)s.push(r);else{if(r!==i)throw new O("Operands could not be broadcast together with shapes "+JSON.stringify(e)+" "+JSON.stringify(t));s.push(r)}}return s}build(e){if(Array.isArray(e)&&!Array.isArray(e[0])&&(e=[De(e)]),e=e,e.length<2)throw new O(`A merge layer should be called on an Array of at least 2 inputs. Got ${e.length} input(s).`);let t=[];for(const r of e)r!=null&&r[0]!==null&&t.push(r[0]);if(t=ws(t),t.length>1)throw new O(`Can not merge tensors with different batch sizes. Got tensors with shapes: ${JSON.stringify(e)}.`);let s=e[0]==null?null:e[0].slice(1);for(let r=1;r<e.length;++r){const i=e[r]==null?null:e[r].slice(1);s=this.computeElementwiseOpOutputShape(s,i)}const o=e.map(r=>r.length);e.indexOf(null)===-1&&ws(o).length===1?this.reshapeRequired=!1:this.reshapeRequired=!0}call(e,t){return z(()=>{if(e=e,this.reshapeRequired){const s=[],o=e.map(r=>r.rank);if(o.indexOf(null)===-1){const r=Is(o);for(let i of e){const a=i.rank;for(let l=0;l<r-a;++l)i=vi(i,1);s.push(i)}return this.mergeFunction(s)}else{let r=!1;for(const l of e){const c=l.rank;if(c==null){const u=l.shape,h=u[0],d=u.slice(1).concat([h]);let p=V(l,[h].concat(Cs(u.slice(1))));p=Re(p,[1,0]),p=V(p,d),s.push(p),r=!0}else if(c>1){const u=$n(1,c).concat([0]);s.push(Re(l,u)),r=!0}else s.push(l)}let i=this.mergeFunction(s);const a=i.rank;if(r){if(a==null){const l=i.shape,c=l.length,u=l[c-1],h=[u].concat(l.slice(0,l.length-1));i=V(Re(V(i,[-1,u]),[1,0]),h)}else if(a>1){const l=[a-1].concat($n(0,a-1));i=Re(i,l)}}return i}}else return this.mergeFunction(e)})}computeOutputShape(e){e=e;let t;e[0]==null?t=null:t=e[0].slice(1);for(let o=1;o<e.length;++o){const r=e[o]==null?null:e[o].slice(1);t=this.computeElementwiseOpOutputShape(t,r)}let s=[];for(const o of e)o!=null&&o[0]!==null&&s.push(o[0]);return s=ws(s),s.length===1?t=s.concat(t):t=[null].concat(t),t}computeMask(e,t){return z(()=>{if(t==null)return null;if(!Array.isArray(t))throw new O("`mask` should be an Array");if(!Array.isArray(e))throw new O("`inputs` should be an Array");if(t.length!==e.length)throw new O(`The Array 'inputs' and 'mask' are expected to have the same length, but have different lengths (${e.length} vs ${t.length})`);if(t.every(o=>o==null))return null;t=t.map(o=>o==null?o:Ut(o,0));let s=t[0];for(let o=1;o<t.length-1;++o)s=es(s,t[o]);return s})}}class bb extends uo{constructor(e){super(e)}mergeFunction(e){return z(()=>{let t=e[0].clone();for(let s=1;s<e.length;++s)t=te(t,e[s]);return t})}}bb.className="Add",ee(bb);class yb extends uo{constructor(e){super(e)}mergeFunction(e){return z(()=>{let t=e[0].clone();for(let s=1;s<e.length;++s)t=L(t,e[s]);return t})}}yb.className="Multiply",ee(yb);class wb extends uo{constructor(e){super(e)}mergeFunction(e){return z(()=>{let t=e[0].clone();for(let s=1;s<e.length;++s)t=te(t,e[s]);return L(1/e.length,t)})}}wb.className="Average",ee(wb);class Cb extends uo{constructor(e){super(e)}mergeFunction(e){return z(()=>{let t=e[0];for(let s=1;s<e.length;++s)t=xs(t,e[s]);return t})}}Cb.className="Maximum",ee(Cb);class Ib extends uo{constructor(e){super(e)}mergeFunction(e){return z(()=>{let t=e[0];for(let s=1;s<e.length;++s)t=mi(t,e[s]);return t})}}Ib.className="Minimum",ee(Ib);class $b extends uo{constructor(e){super(e),this.DEFAULT_AXIS=-1,e==null&&(e={}),this.axis=e.axis==null?this.DEFAULT_AXIS:e.axis,this.supportsMasking=!0,this.reshapeRequired=!1}build(e){if(!(Array.isArray(e)&&Array.isArray(e[0]))||e.length===1)throw new O("A `Concatenate` layer should be called on a list of at least 2 inputs");e=e;let t=!0;for(const o of e)if(o!=null){t=!1;break}if(t)return;const s=[];for(let o=0;o<e.length;++o){const r=e[o].slice();r.splice(this.axis,1);let i=!1;for(const a of s)if(_e(a,r)){i=!0;break}i||s.push(r)}if(s.length>1)throw new O("A `Concatenate` layer requires inputs with matching shapes except for the concat axis. Got input shapes: "+JSON.stringify(e))}mergeFunction(e){return z(()=>ad(e,this.axis))}computeOutputShape(e){if(!(Array.isArray(e)&&Array.isArray(e[0])))throw new O("A `Concatenate` layer should be called on a list of inputs.");const t=e,s=t[0].slice(),o=this.axis<0?s.length+this.axis:this.axis;for(const r of t.slice(1)){if(s[o]==null||r[o]==null){s[o]=null;break}s[o]+=r[o]}return s}computeMask(e,t){if(t==null)return null;if(!Array.isArray(t))throw new O("`mask` should be an array for Concatenate");if(!Array.isArray(e))throw new O("`inputs` should be an array for Concatenate");if(t.length!==e.length)throw new O(`Mismatch in the length of mask (${t.length}) and the legnth of inputs (${e.length})`);return z(()=>{let s=!0;if(t.forEach(i=>{if(i!=null){s=!1;return}}),s)return null;const o=[];for(let i=0;i<e.length;++i)t[i]==null?o.push(re(ln(e[i]),"bool")):t[i].rank<e[i].rank?o.push(Ut(t[i],-1)):o.push(t[i]);const r=vt(o,this.axis);return Mf(r,-1,!1)})}getConfig(){const e={axis:this.axis},t=super.getConfig();return Object.assign(e,t),e}}$b.className="Concatenate",ee($b);function Li(n,e){for(;n<0;)n+=e;return n}function zE(n,e,t){if(n.shape.length>3||e.shape.length>3)throw new Ce("batchDot is not implemented for tensors of 4D or higher rank yet");if(S(n.shape.length>=2,()=>`batchDot requires the rank of x to be >= 2, but got ${n.shape.length}`),S(n.shape.length>=2,()=>`batchDot requires the rank of y to be >= 2, but got ${e.shape.length}`),typeof t=="number"&&(t=[t,t]),n.dtype==="complex64"||e.dtype==="complex64")throw new Ce("batchDot is not implemented for complex64-type Tensors yet.");const s=n.shape.length,o=e.shape.length;t==null&&(t=[s-1,o-2]);const r=t;return z(()=>{let i;if(s>o){i=s-o;const l=[];for(let c=0;c<i;++c)l.push(1);e=V(e,e.shape.concat(l))}else if(o>s){i=o-s;const l=[];for(let c=0;c<i;++c)l.push(1);n=V(n,n.shape.concat(l))}else i=0;let a;if(n.shape.length===2&&e.shape.length===2)r[0]===r[1]?a=me(L(n,e),r[0]):a=me(L(Re(n,[1,0]),e),r[1]);else{const l=r[0]!==n.shape.length-1,c=r[1]===e.shape.length-1;a=Fe(n,e,l,c)}if(i>0){let l;s>o?l=s+o-3:l=s-1;const c=[];for(let u=l;u<l+i;++u)c.push(u);a=to(a,c)}return a.shape.length===1&&(a=Ut(a,1)),a})}class vb extends uo{constructor(e){super(e),this.axes=e.axes,this.normalize=e.normalize==null?!1:e.normalize,this.supportsMasking=!0,this.reshapeRequired=!1}build(e){S(Array.isArray(e)&&e.length===2&&Array.isArray(e[0])&&Array.isArray(e[1]),()=>"A `Dot` layer should be called on a list of exactly 2 inputs.");const t=e[0],s=e[1];if(t.length>3||s.length>3)throw new Ce("Dot layer does not support tensors of 4D or higher rank yet.");const o=this.interpretAxes(t,s);if(t[o[0]]!==s[o[1]])throw new O(`Dimension incompatibility: ${t[o[0]]} !== ${s[o[1]]}`)}mergeFunction(e){if(e.length!==2)throw new O(`A \`Dot\` layer must be called on exactly 2 inputs, but received ${e.length} input(s).`);let t=e[0],s=e[1],o;return Array.isArray(this.axes)?o=this.axes.map((r,i)=>Li(r,e[i].shape.length)):o=[Li(this.axes,t.shape.length),Li(this.axes,s.shape.length)],this.normalize&&(t=Gl(t,o[0]),s=Gl(s,o[1])),zE(t,s,o)}interpretAxes(e,t){let s;return Array.isArray(this.axes)?s=this.axes:s=[Li(this.axes,e.length),Li(this.axes,t.length)],s}computeOutputShape(e){S(Array.isArray(e)&&e.length===2&&Array.isArray(e[0])&&Array.isArray(e[1]),()=>"A `Dot` layer should be called on a list of exactly 2 inputs.");const t=e[0].slice(),s=e[1].slice();if(t.length>3||s.length>3)throw new Ce("Dot layer does not support tensors of 4D or higher rank yet.");const o=this.interpretAxes(t,s);t.splice(o[0],1),s.splice(o[1],1),s.splice(0,1);const r=t.concat(s);return r.length===1&&r.push(1),r}computeMask(e,t){return null}getConfig(){const e={axes:this.axes,normalize:this.normalize},t=super.getConfig();return Object.assign(e,t),e}}vb.className="Dot",ee(vb);class kb extends Se{constructor(e){super(e),this.supportsMasking=!0,this.stddev=e.stddev}computeOutputShape(e){return e}getConfig(){const e=super.getConfig(),t={stddev:this.stddev};return Object.assign(t,e),t}call(e,t){return z(()=>{this.invokeCallHook(e,t);const s=ye(e);return Si(()=>te(Pl(s.shape,0,this.stddev),s),()=>s,t.training||!1)})}}kb.className="GaussianNoise",ee(kb);class Sb extends Se{constructor(e){super(e),this.supportsMasking=!0,this.rate=e.rate}computeOutputShape(e){return e}getConfig(){const e=super.getConfig(),t={rate:this.rate};return Object.assign(t,e),t}call(e,t){return z(()=>{this.invokeCallHook(e,t);const s=ye(e);return this.rate>0&&this.rate<1?Si(()=>{const r=Math.sqrt(this.rate/(1-this.rate));return L(s,Pl(s.shape,1,r))},()=>s,t.training||!1):s})}}Sb.className="GaussianDropout",ee(Sb);class Nb extends Se{constructor(e){super(e),this.supportsMasking=!0,this.rate=e.rate,this.noiseShape=e.noiseShape}_getNoiseShape(e){return this.noiseShape||ye(e).shape}computeOutputShape(e){return e}getConfig(){const e=super.getConfig(),t={rate:this.rate};return Object.assign(t,e),t}call(e,t){return z(()=>{if(this.rate<1&&this.rate>0){const s=this._getNoiseShape(e);return Si(()=>{const r=ye(e),a=-1.6732632423543772*1.0507009873554805;let l=Qs(gi(s),this.rate);l=Vn(l,"float32");const c=yp((1-this.rate)*(1+this.rate*yp(a,2)),-.5),u=-c*a*this.rate,h=te(L(r,l),L(te(l,-1),a));return te(L(h,c),u)},()=>ye(e),t.training||!1)}return e})}}Nb.className="AlphaDropout",ee(Nb);function Mi(n,e,t,s,o,r=.001){let i;if(n.rank===2)i=uI(n,e,t,s,o,r);else if(n.rank===3)i=dI(n,e,t,s,o,r);else if(n.rank===4)i=fI(n,e,t,s,o,r);else throw new Ce(`batchNormalization is not implemented for array of rank ${n.rank} yet`);return i}function VE(n,e,t,s,o=.001){return z(()=>{const r=yl(n,s),i=r.mean,a=r.variance;return[Mi(n,i,a,t,e,o),i,a]})}function WE(n,e,t,s,o=.001){return z(()=>{const r=yl(n,s),i=r.mean,a=r.variance,l=[];for(const f of $n(0,n.rank))s.indexOf(f)!==-1?l.push(1):l.push(n.shape[f]);const c=V(i,l),u=V(a,l),h=e==null?null:V(e,l),d=t==null?null:V(t,l);return[Mi(n,c,u,d,h,o),i,a]})}function UE(n,e,t,s,o=.001){return _e(s.slice().sort(),$n(0,n.rank-1))?VE(n,e,t,s,o):WE(n,e,t,s,o)}class Tb extends Se{constructor(e){e==null&&(e={}),super(e),this.supportsMasking=!0,this.axis=e.axis==null?-1:e.axis,this.momentum=e.momentum==null?.99:e.momentum,this.epsilon=e.epsilon==null?.001:e.epsilon,this.center=e.center==null?!0:e.center,this.scale=e.scale==null?!0:e.scale,this.betaInitializer=Xe(e.betaInitializer||"zeros"),this.gammaInitializer=Xe(e.gammaInitializer||"ones"),this.movingMeanInitializer=Xe(e.movingMeanInitializer||"zeros"),this.movingVarianceInitializer=Xe(e.movingVarianceInitializer||"ones"),this.betaConstraint=gt(e.betaConstraint),this.gammaConstraint=gt(e.gammaConstraint),this.betaRegularizer=Ye(e.betaRegularizer),this.gammaRegularizer=Ye(e.gammaRegularizer)}build(e){e=De(e);const t=this.axis>=0?this.axis:this.axis+e.length,s=e[t];if(s==null)throw new O(`Axis ${t} of input tensor should have a defined dimension but the layer received an input with shape ${JSON.stringify(e)}.`);this.inputSpec=[new ft({ndim:e.length,axes:{[t]:s}})];const o=[s];this.scale&&(this.gamma=this.addWeight("gamma",o,null,this.gammaInitializer,this.gammaRegularizer,!0,this.gammaConstraint)),this.center&&(this.beta=this.addWeight("beta",o,null,this.betaInitializer,this.betaRegularizer,!0,this.betaConstraint)),this.movingMean=this.addWeight("moving_mean",o,null,this.movingMeanInitializer,null,!1),this.movingVariance=this.addWeight("moving_variance",o,null,this.movingVarianceInitializer,null,!1),this.built=!0}call(e,t){return z(()=>{const s=t.training==null?!1:t.training,o=ye(e),r=o.shape,i=r.length,a=$n(0,i),l=this.axis>=0?this.axis:this.axis+i;a.splice(l,1);const c=oo(1,i);c[l]=r[l];const u=a.slice();u.sort();const h=!_e(u,$n(0,i).slice(0,i-1)),d=()=>{if(h){const b=V(this.movingMean.read(),c),w=V(this.movingVariance.read(),c),y=this.center?V(this.beta.read(),c):null,C=this.scale?V(this.gamma.read(),c):null;return Mi(o,b,w,y,C,this.epsilon)}else return Mi(o,this.movingMean.read(),this.movingVariance.read(),this.beta==null?null:this.beta.read(),this.gamma==null?null:this.gamma.read(),this.epsilon)};if(!s)return d();const[p,f,m]=UE(o,this.gamma.read(),this.beta.read(),a,this.epsilon),g=(b,w,y)=>{z(()=>{const C=1-y,$=b.read(),v=L(be($,w),C);b.write(be($,v))})};return g(this.movingMean,f,this.momentum),g(this.movingVariance,m,this.momentum),p})}getConfig(){const e={axis:this.axis,momentum:this.momentum,epsilon:this.epsilon,center:this.center,scale:this.scale,betaInitializer:Qe(this.betaInitializer),gammaInitializer:Qe(this.gammaInitializer),movingMeanInitializer:Qe(this.movingMeanInitializer),movingVarianceInitializer:Qe(this.movingVarianceInitializer),betaRegularizer:Ue(this.betaRegularizer),gammaRegularizer:Ue(this.gammaRegularizer),betaConstraint:mt(this.betaConstraint),gammaConstraint:mt(this.gammaConstraint)},t=super.getConfig();return Object.assign(e,t),e}}Tb.className="BatchNormalization",ee(Tb);class Eb extends Se{constructor(e){if(e==null&&(e={}),super(e),this.axis=e.axis==null?-1:e.axis,typeof this.axis=="number"){if(!Number.isInteger(this.axis))throw new Error(`Expected axis to be an integer, but received ${this.axis}`)}else if(Array.isArray(this.axis)){for(const t of this.axis)if(!Number.isInteger(t))throw new Error(`Expected axis to be an array of integers, but received ${JSON.stringify(this.axis)}`)}else throw new Error(`Expected axis to be an integer or an array of integers, but received ${JSON.stringify(this.axis)}`);this.epsilon=e.epsilon==null?.001:e.epsilon,this.center=e.center==null?!0:e.center,this.scale=e.scale==null?!0:e.scale,this.betaInitializer=Xe(e.betaInitializer||"zeros"),this.gammaInitializer=Xe(e.gammaInitializer||"ones"),this.betaRegularizer=Ye(e.betaRegularizer),this.gammaRegularizer=Ye(e.gammaRegularizer),this.supportsMasking=!0}build(e){e=De(e);const t=e.length;typeof this.axis=="number"&&(this.axis=[this.axis]);for(let r=0;r<this.axis.length;++r)this.axis[r]<0&&(this.axis[r]+=t);for(const r of this.axis)if(r<0||r>=t)throw new Error(`Invalid axis: ${r}`);if(this.axis.length!==ws(this.axis).length)throw new Error(`Found duplicate axes in: ${this.axis}`);const s=this.axis.map(r=>e[r]),o=!0;this.scale?this.gamma=this.addWeight("gamma",s,"float32",this.gammaInitializer,this.gammaRegularizer,o):this.gamma=null,this.center?this.beta=this.addWeight("beta",s,"float32",this.betaInitializer,this.betaRegularizer,o):this.beta=null,this.built=!0}call(e,t){const s=ye(e),o=s.shape,r=o.length;return z(()=>{let{mean:a,variance:l}=yl(s,this.axis,!0);const c=oo(1,r);for(const m of this.axis)c[m]=o[m];const u=m=>m!=null&&m.shape.length!==r?V(m,c):m;let h=this.scale?u(this.gamma.read()):null,d=this.center?u(this.beta.read()):null;const p=[],f=[];for(let m=0;m<r;++m)this.axis.indexOf(m)!==-1?(p.push(o[m]),f.push(1)):(p.push(1),f.push(o[m]));return a=Cn(a,p),l=Cn(l,p),h!=null&&(h=Cn(h,f)),d!=null&&(d=Cn(d,f)),Mi(s,a,l,d,h,this.epsilon)})}getConfig(){const e={axis:this.axis,epsilon:this.epsilon,center:this.center,scale:this.scale,betaInitializer:Qe(this.betaInitializer),gammaInitializer:Qe(this.gammaInitializer),betaRegularizer:Ue(this.betaRegularizer),gammaRegularizer:Ue(this.gammaRegularizer)},t=super.getConfig();return Object.assign(e,t),e}}Eb.className="LayerNormalization",ee(Eb);function GE(n,e,t){return z(()=>{if(n.rank!==4)throw new O(`temporalPadding expects input tensor to be 4-D, but received a ${n.rank}-D tensor.`);if(e==null&&(e=[[1,1],[1,1]]),e.length!==2||e[0].length!==2||e[1].length!==2)throw new O("spatial2dPadding expects `padding` to be an Array of two Arrays, each of which is an Array of two integers.");if(t==null&&(t=vn()),t!=="channelsLast"&&t!=="channelsFirst")throw new O(`Unknown data format: ${t}. Supported data formats are 'channelsLast' and 'channelsFirst.`);let s;return t==="channelsFirst"?s=[[0,0],[0,0],e[0],e[1]]:s=[[0,0],e[0],e[1],[0,0]],hh(n,s)})}class Rb extends Se{constructor(e){if(e==null&&(e={}),super(e),this.dataFormat=e.dataFormat==null?vn():e.dataFormat,e.padding==null)this.padding=[[1,1],[1,1]];else if(typeof e.padding=="number")this.padding=[[e.padding,e.padding],[e.padding,e.padding]];else{if(e.padding=e.padding,e.padding.length!==2)throw new O(`ZeroPadding2D expects padding to be a length-2 array, but received a length-${e.padding.length} array.`);let t,s;if(typeof e.padding[0]=="number")t=[e.padding[0],e.padding[0]],s=[e.padding[1],e.padding[1]];else{if(e.padding=e.padding,e.padding[0].length!==2)throw new O(`ZeroPadding2D expects height padding to be a length-2 array, but received a length-${e.padding[0].length} array.`);if(t=e.padding[0],e.padding[1].length!==2)throw new O(`ZeroPadding2D expects width padding to be a length-2 array, but received a length-${e.padding[1].length} array.`);s=e.padding[1]}this.padding=[t,s]}this.inputSpec=[new ft({ndim:4})]}computeOutputShape(e){e=De(e);let t,s;return this.dataFormat==="channelsFirst"?(e[2]!=null&&e[2]>=0?t=e[2]+this.padding[0][0]+this.padding[0][1]:t=null,e[3]!=null&&e[3]>=0?s=e[3]+this.padding[1][0]+this.padding[1][1]:s=null,[e[0],e[1],t,s]):(e[1]!=null&&e[1]>=0?t=e[1]+this.padding[0][0]+this.padding[0][1]:t=null,e[2]!=null&&e[2]>=0?s=e[2]+this.padding[1][0]+this.padding[1][1]:s=null,[e[0],t,s,e[3]])}call(e,t){return z(()=>GE(ye(e),this.padding,this.dataFormat))}getConfig(){const e={padding:this.padding,dataFormat:this.dataFormat},t=super.getConfig();return Object.assign(e,t),e}}Rb.className="ZeroPadding2D",ee(Rb);function sc(n,e,t,s,o,r){return z(()=>{rt(o),Ng(r),nn(s),t==null&&(t=[1,1]),s==null&&(s="valid"),o==null&&(o=vn()),r==null&&(r="max"),n=Dd(n,o);let i;const a=s==="same"?"same":"valid";return r==="max"?i=uh(n,e,t,a):i=Ju(n,e,t,a),o==="channelsFirst"&&(i=Re(i,[0,3,1,2])),i})}function Ab(n,e,t,s,o,r){return z(()=>{rt(o),Ng(r),nn(s),t==null&&(t=[1,1,1]),s==null&&(s="valid"),o==null&&(o=vn()),r==null&&(r="max"),n=jx(n,o);let i;const a=s==="same"?"same":"valid";return r==="max"?i=Y$(n,e,t,a):i=eI(n,e,t,a),o==="channelsFirst"&&(i=Re(i,[0,4,1,2,3])),i})}class Db extends Se{constructor(e){if(e.poolSize==null&&(e.poolSize=2),super(e),typeof e.poolSize=="number")this.poolSize=[e.poolSize];else if(Array.isArray(e.poolSize)&&e.poolSize.length===1&&typeof e.poolSize[0]=="number")this.poolSize=e.poolSize;else throw new O(`poolSize for 1D convolutional layer must be a number or an Array of a single number, but received ${JSON.stringify(e.poolSize)}`);if(wt(this.poolSize,"poolSize"),e.strides==null)this.strides=this.poolSize;else if(typeof e.strides=="number")this.strides=[e.strides];else if(Array.isArray(e.strides)&&e.strides.length===1&&typeof e.strides[0]=="number")this.strides=e.strides;else throw new O(`strides for 1D convolutional layer must be a number or an Array of a single number, but received ${JSON.stringify(e.strides)}`);wt(this.strides,"strides"),this.padding=e.padding==null?"valid":e.padding,nn(this.padding),this.inputSpec=[new ft({ndim:3})]}computeOutputShape(e){e=De(e);const t=Tn(e[1],this.poolSize[0],this.padding,this.strides[0]);return[e[0],t,e[2]]}call(e,t){return z(()=>{this.invokeCallHook(e,t),e=vi(ye(e),2);const s=this.poolingFunction(ye(e),[this.poolSize[0],1],[this.strides[0],1],this.padding,"channelsLast");return to(s,[2])})}getConfig(){const e={poolSize:this.poolSize,padding:this.padding,strides:this.strides},t=super.getConfig();return Object.assign(e,t),e}}class Fb extends Db{constructor(e){super(e)}poolingFunction(e,t,s,o,r){return rt(r),nn(o),sc(e,t,s,o,r,"max")}}Fb.className="MaxPooling1D",ee(Fb);class _b extends Db{constructor(e){super(e)}poolingFunction(e,t,s,o,r){return rt(r),nn(o),sc(e,t,s,o,r,"avg")}}_b.className="AveragePooling1D",ee(_b);class Ob extends Se{constructor(e){if(e.poolSize==null&&(e.poolSize=[2,2]),super(e),this.poolSize=Array.isArray(e.poolSize)?e.poolSize:[e.poolSize,e.poolSize],e.strides==null)this.strides=this.poolSize;else if(Array.isArray(e.strides)){if(e.strides.length!==2)throw new O(`If the strides property of a 2D pooling layer is an Array, it is expected to have a length of 2, but received length ${e.strides.length}.`);this.strides=e.strides}else this.strides=[e.strides,e.strides];wt(this.poolSize,"poolSize"),wt(this.strides,"strides"),this.padding=e.padding==null?"valid":e.padding,this.dataFormat=e.dataFormat==null?"channelsLast":e.dataFormat,rt(this.dataFormat),nn(this.padding),this.inputSpec=[new ft({ndim:4})]}computeOutputShape(e){e=De(e);let t=this.dataFormat==="channelsFirst"?e[2]:e[1],s=this.dataFormat==="channelsFirst"?e[3]:e[2];return t=Tn(t,this.poolSize[0],this.padding,this.strides[0]),s=Tn(s,this.poolSize[1],this.padding,this.strides[1]),this.dataFormat==="channelsFirst"?[e[0],e[1],t,s]:[e[0],t,s,e[3]]}call(e,t){return z(()=>(this.invokeCallHook(e,t),this.poolingFunction(ye(e),this.poolSize,this.strides,this.padding,this.dataFormat)))}getConfig(){const e={poolSize:this.poolSize,padding:this.padding,strides:this.strides,dataFormat:this.dataFormat},t=super.getConfig();return Object.assign(e,t),e}}class Lb extends Ob{constructor(e){super(e)}poolingFunction(e,t,s,o,r){return rt(r),nn(o),sc(e,t,s,o,r,"max")}}Lb.className="MaxPooling2D",ee(Lb);class Mb extends Ob{constructor(e){super(e)}poolingFunction(e,t,s,o,r){return rt(r),nn(o),sc(e,t,s,o,r,"avg")}}Mb.className="AveragePooling2D",ee(Mb);class Pb extends Se{constructor(e){if(e.poolSize==null&&(e.poolSize=[2,2,2]),super(e),this.poolSize=Array.isArray(e.poolSize)?e.poolSize:[e.poolSize,e.poolSize,e.poolSize],e.strides==null)this.strides=this.poolSize;else if(Array.isArray(e.strides)){if(e.strides.length!==3)throw new O(`If the strides property of a 3D pooling layer is an Array, it is expected to have a length of 3, but received length ${e.strides.length}.`);this.strides=e.strides}else this.strides=[e.strides,e.strides,e.strides];wt(this.poolSize,"poolSize"),wt(this.strides,"strides"),this.padding=e.padding==null?"valid":e.padding,this.dataFormat=e.dataFormat==null?"channelsLast":e.dataFormat,rt(this.dataFormat),nn(this.padding),this.inputSpec=[new ft({ndim:5})]}computeOutputShape(e){e=De(e);let t=this.dataFormat==="channelsFirst"?e[2]:e[1],s=this.dataFormat==="channelsFirst"?e[3]:e[2],o=this.dataFormat==="channelsFirst"?e[4]:e[3];return t=Tn(t,this.poolSize[0],this.padding,this.strides[0]),s=Tn(s,this.poolSize[1],this.padding,this.strides[1]),o=Tn(o,this.poolSize[2],this.padding,this.strides[2]),this.dataFormat==="channelsFirst"?[e[0],e[1],t,s,o]:[e[0],t,s,o,e[4]]}call(e,t){return z(()=>(this.invokeCallHook(e,t),this.poolingFunction(ye(e),this.poolSize,this.strides,this.padding,this.dataFormat)))}getConfig(){const e={poolSize:this.poolSize,padding:this.padding,strides:this.strides,dataFormat:this.dataFormat},t=super.getConfig();return Object.assign(e,t),e}}class Bb extends Pb{constructor(e){super(e)}poolingFunction(e,t,s,o,r){return rt(r),nn(o),Ab(e,t,s,o,r,"max")}}Bb.className="MaxPooling3D",ee(Bb);class zb extends Pb{constructor(e){super(e)}poolingFunction(e,t,s,o,r){return rt(r),nn(o),Ab(e,t,s,o,r,"avg")}}zb.className="AveragePooling3D",ee(zb);class Vb extends Se{constructor(e){super(e),this.inputSpec=[new ft({ndim:3})]}computeOutputShape(e){return[e[0],e[2]]}call(e,t){throw new Ce}}class Wb extends Vb{constructor(e){super(e||{})}call(e,t){return z(()=>{const s=ye(e);return lt(s,1)})}}Wb.className="GlobalAveragePooling1D",ee(Wb);class Ub extends Vb{constructor(e){super(e||{})}call(e,t){return z(()=>{const s=ye(e);return wn(s,1)})}}Ub.className="GlobalMaxPooling1D",ee(Ub);class Gb extends Se{constructor(e){super(e),this.dataFormat=e.dataFormat==null?"channelsLast":e.dataFormat,rt(this.dataFormat),this.inputSpec=[new ft({ndim:4})]}computeOutputShape(e){return e=e,this.dataFormat==="channelsLast"?[e[0],e[3]]:[e[0],e[1]]}call(e,t){throw new Ce}getConfig(){const e={dataFormat:this.dataFormat},t=super.getConfig();return Object.assign(e,t),e}}class Hb extends Gb{call(e,t){return z(()=>{const s=ye(e);return this.dataFormat==="channelsLast"?lt(s,[1,2]):lt(s,[2,3])})}}Hb.className="GlobalAveragePooling2D",ee(Hb);class qb extends Gb{call(e,t){return z(()=>{const s=ye(e);return this.dataFormat==="channelsLast"?wn(s,[1,2]):wn(s,[2,3])})}}qb.className="GlobalMaxPooling2D",ee(qb);class jb extends Se{constructor(e){super(e),this.layer=e.layer}build(e){this.built=!0}get trainable(){return this.layer!=null?this.layer.trainable:!1}set trainable(e){this.layer!=null&&(this.layer.trainable=e)}get trainableWeights(){return this.layer.trainableWeights}get nonTrainableWeights(){return this.layer.nonTrainableWeights}get updates(){return this.layer._updates}get losses(){return this.layer.losses}getWeights(){return this.layer.getWeights()}setWeights(e){this.layer.setWeights(e)}getConfig(){const e={layer:{className:this.layer.getClassName(),config:this.layer.getConfig()}},t=super.getConfig();return Object.assign(e,t),e}setFastWeightInitDuringBuild(e){super.setFastWeightInitDuringBuild(e),this.layer!=null&&this.layer.setFastWeightInitDuringBuild(e)}static fromConfig(e,t,s={}){const o=t.layer,r=Gn(o,s);delete t.layer;const i={layer:r};return Object.assign(i,t),new e(i)}}class Kb extends jb{constructor(e){super(e),this.supportsMasking=!0}build(e){if(e=De(e),e.length<3)throw new O(`TimeDistributed layer expects an input shape >= 3D, but received input shape ${JSON.stringify(e)}`);this.inputSpec=[{shape:e}];const t=[e[0]].concat(e.slice(2));this.layer.built||(this.layer.build(t),this.layer.built=!0),super.build(e)}computeOutputShape(e){e=De(e);const t=[e[0]].concat(e.slice(2)),s=this.layer.computeOutputShape(t),o=e[1];return[s[0],o].concat(s.slice(1))}call(e,t){return z(()=>(e=ye(e),sb((i,a)=>[ye(this.layer.call(i,t)),[]],e,[],!1,null,null,!1,!0)[1]))}}Kb.className="TimeDistributed",ee(Kb);function HE(n){io(uT,"BidirectionalMergeMode",n)}const qE="concat";class Xb extends jb{constructor(e){super(e);const t=e.layer.getConfig(),s={};s.className=e.layer.getClassName(),s.config=t,this.forwardLayer=Gn(s),t.goBackwards=t.goBackwards!==!0;const o={};if(o.className=e.layer.getClassName(),o.config=t,this.backwardLayer=Gn(o),this.forwardLayer.name="forward_"+this.forwardLayer.name,this.backwardLayer.name="backward_"+this.backwardLayer.name,this.mergeMode=e.mergeMode===void 0?qE:e.mergeMode,HE(this.mergeMode),e.weights)throw new Ce("weights support is not implemented for Bidirectional layer yet.");this._stateful=e.layer.stateful,this.returnSequences=e.layer.returnSequences,this.returnState=e.layer.returnState,this.supportsMasking=!0,this._trainable=!0,this.inputSpec=e.layer.inputSpec,this.numConstants=null}get trainable(){return this._trainable}set trainable(e){this._trainable=e,this.forwardLayer!=null&&(this.forwardLayer.trainable=e),this.backwardLayer!=null&&(this.backwardLayer.trainable=e)}getWeights(){return this.forwardLayer.getWeights().concat(this.backwardLayer.getWeights())}setWeights(e){const t=e.length,s=Math.floor(t/2);this.forwardLayer.setWeights(e.slice(0,s)),this.backwardLayer.setWeights(e.slice(s))}computeOutputShape(e){let t=this.forwardLayer.computeOutputShape(e);Array.isArray(t)&&Array.isArray(t[0])||(t=[t]),t=t;let s,o,r;return this.returnState&&(r=t.slice(1)),s=t[0],s=s,this.mergeMode==="concat"?(s[s.length-1]*=2,o=[s]):this.mergeMode==null?o=[s,s.slice()]:o=[s],this.returnState?this.mergeMode==null?o.concat(r).concat(r.slice()):[s].concat(r).concat(r.slice()):Ht(o)}apply(e,t){let s=t==null?null:t.initialState,o=t==null?null:t.constants;t==null&&(t={});const r=nb(e,s,o,this.numConstants);if(e=r.inputs,s=r.initialState,o=r.constants,Array.isArray(e)&&(s=e.slice(1),e=e[0]),(s==null||s.length===0)&&o==null)return super.apply(e,t);const i=[],a=[];if(s!=null){const c=s.length;if(c%2>0)throw new O("When passing `initialState` to a Bidrectional RNN, the state should be an Array containing the states of the underlying RNNs.");t.initialState=s,i.push(...s);const u=s.map(h=>new ft({shape:h.shape}));this.forwardLayer.stateSpec=u.slice(0,c/2),this.backwardLayer.stateSpec=u.slice(c/2),a.push(...u)}if(o!=null)throw new Ce("Support for constants in Bidirectional layers is not implemented yet.");const l=i[0]instanceof Un;for(const c of i)if(c instanceof Un!==l)throw new O("The initial state of a Bidirectional layer cannot be specified as a mix of symbolic and non-symbolic tensors");if(l){const c=[e].concat(i),u=this.inputSpec.concat(a),h=this.inputSpec;this.inputSpec=u;const d=super.apply(c,t);return this.inputSpec=h,d}else return super.apply(e,t)}call(e,t){return z(()=>{const s=t.initialState;let o,r;if(s==null)o=this.forwardLayer.call(e,t),r=this.backwardLayer.call(e,t);else{const l=s.slice(0,s.length/2),c=s.slice(s.length/2);o=this.forwardLayer.call(e,Object.assign(t,{initialState:l})),r=this.backwardLayer.call(e,Object.assign(t,{initialState:c}))}let i;this.returnState&&(Array.isArray(o)&&(i=o.slice(1).concat(r.slice(1))),o=o[0],r=r[0]),this.returnSequences&&(r=eo(r,1));let a;return this.mergeMode==="concat"?a=ad([o,r]):this.mergeMode==="sum"?a=te(o,r):this.mergeMode==="ave"?a=L(.5,te(o,r)):this.mergeMode==="mul"?a=L(o,r):this.mergeMode==null&&(a=[o,r]),this.returnState?this.mergeMode==null?a.concat(i):[a].concat(i):a})}resetStates(e){this.forwardLayer.resetStates(),this.backwardLayer.resetStates()}build(e){ao(this.forwardLayer.name,()=>{this.forwardLayer.build(e)}),ao(this.backwardLayer.name,()=>{this.backwardLayer.build(e)}),this.built=!0}computeMask(e,t){Array.isArray(t)&&(t=t[0]);let s;if(this.returnSequences?this.mergeMode==null?s=[t,t]:s=t:this.mergeMode==null?s=[null,null]:s=null,this.returnState){const r=this.forwardLayer.states.map(i=>null);return Array.isArray(s)?s.concat(r).concat(r):[s].concat(r).concat(r)}else return s}get trainableWeights(){return this.forwardLayer.trainableWeights.concat(this.backwardLayer.trainableWeights)}get nonTrainableWeights(){return this.forwardLayer.nonTrainableWeights.concat(this.backwardLayer.nonTrainableWeights)}setFastWeightInitDuringBuild(e){super.setFastWeightInitDuringBuild(e),this.forwardLayer!=null&&this.forwardLayer.setFastWeightInitDuringBuild(e),this.backwardLayer!=null&&this.backwardLayer.setFastWeightInitDuringBuild(e)}getConfig(){const e={mergeMode:this.mergeMode},t=super.getConfig();return Object.assign(e,t),e}static fromConfig(e,t){const s=Gn(t.layer);if(delete t.layer,t.numConstants!=null)throw new Ce("Deserialization of a Bidirectional layer with numConstants present is not supported yet.");const o=t;return o.layer=s,new e(o)}}Xb.className="Bidirectional",ee(Xb);class Yb extends Se{constructor(e){super(e),this.scale=e.scale,e.offset?this.offset=e.offset:this.offset=0}getConfig(){const e={scale:this.scale,offset:this.offset},t=super.getConfig();return Object.assign(e,t),e}call(e,t){return z(()=>(e=ye(e),e.dtype!=="float32"&&(e=Vn(e,"float32")),te(L(e,this.scale),this.offset)))}}Yb.className="Rescaling",ee(Yb);const{resizeBilinear:jE,cropAndResize:KE}=ns;class Zb extends Se{constructor(e){super(e),this.height=e.height,this.width=e.width}centerCrop(e,t,s,o,r,i,a,l){return z(()=>{let c,u=!1;const h=t/i,d=s/a,p=(o+t)/i,f=(r+s)/a,m=[h,d,p,f],g=[];e.rank===3?(u=!0,c=Mn([e])):c=e;for(let C=0;C<c.shape[0];C++)g.push(m);const x=Ws(g,[g.length,4]),b=xi(0,g.length,1,"int32"),y=KE(c,x,b,[o,r],"nearest");return Vn(u?ye(bs(y)):y,l)})}upsize(e,t,s,o){return z(()=>{const r=jE(e,[t,s]);return Vn(r,o)})}call(e,t){return z(()=>{const s=ye(e),o=s.dtype,r=s.shape,i=r[r.length-3],a=r[r.length-2];let l=0;i!==this.height&&(l=Math.floor((i-this.height)/2));let c=0;return a!==this.width&&(c=Math.floor((a-this.width)/2),c===0&&(c=1)),l>=0&&c>=0?this.centerCrop(s,l,c,this.height,this.width,i,a,o):this.upsize(e,this.height,this.width,o)})}getConfig(){const e={height:this.height,width:this.width},t=super.getConfig();return Object.assign(e,t),e}computeOutputShape(e){e=De(e);const t=e.length-3,s=e.length-2;return e[t]=this.height,e[s]=this.width,e}}Zb.className="CenterCrop",ee(Zb);function XE(n,e,t,s){let o=ye(n);if(o.dtype!=="int32"&&(o=Vn(o,"int32")),e==="int")return o;const r=o.shape;if(o.rank===0&&(o=Ut(o,-1)),e==="oneHot"&&o.shape[o.shape.length-1]!==1&&(o=Ut(o,-1)),o.rank>2)throw new O(`When outputMode is not int, maximum output rank is 2 Received outputMode ${e} and input shape ${r} which would result in output rank ${o.rank}.`);const i=["multiHot","oneHot"].includes(e),a=o;let l;if(typeof s!="undefined"&&e==="count"?l=Gf(a,s,t,i):l=Gf(a,[],t,i),e!=="tfIdf")return l;if(s)return L(l,s);throw new O("When outputMode is 'tfIdf', weights must be provided.")}class Qb extends Se{constructor(e){super(e),this.numTokens=e.numTokens,e.outputMode?this.outputMode=e.outputMode:this.outputMode="multiHot"}getConfig(){const e={numTokens:this.numTokens,outputMode:this.outputMode},t=super.getConfig();return Object.assign(e,t),e}computeOutputShape(e){return e=De(e),e==null?[this.numTokens]:this.outputMode==="oneHot"&&e[e.length-1]!==1?(e.push(this.numTokens),e):(e[e.length-1]=this.numTokens,e)}call(e,t){return z(()=>{e=ye(e),e.dtype!=="int32"&&(e=Vn(e,"int32"));let s;if(typeof t.countWeights!="undefined"){if(this.outputMode!=="count")throw new O(`countWeights is not used when outputMode !== count.
              Received countWeights=${t.countWeights}`);s=ye(t.countWeights)}const o=wn(e),r=ml(e),i=Gt(this.numTokens,o).bufferSync().get(0),a=Qs(r,0).bufferSync().get(0);if(!(i&&a))throw new O(`Input values must be between 0 < values <= numTokens with numTokens=${this.numTokens}`);return XE(e,this.outputMode,this.numTokens,s)})}}Qb.className="CategoryEncoding",ee(Qb);const YE=["bilinear","nearest"],Jb=new Set(YE);class e0 extends Se{constructor(e){if(super(e),this.height=e.height,this.width=e.width,e.interpolation)if(Jb.has(e.interpolation))this.interpolation=e.interpolation;else throw new O(`Invalid interpolation parameter: ${e.interpolation} is not implemented`);else this.interpolation="bilinear";this.cropToAspectRatio=!!e.cropToAspectRatio}computeOutputShape(e){e=De(e);const t=e[2];return[this.height,this.width,t]}getConfig(){const e={height:this.height,width:this.width,interpolation:this.interpolation,cropToAspectRatio:this.cropToAspectRatio},t=super.getConfig();return Object.assign(e,t),e}call(e,t){return z(()=>{const s=[this.height,this.width];if(this.interpolation==="bilinear")return ns.resizeBilinear(e,s,!this.cropToAspectRatio);if(this.interpolation==="nearest")return ns.resizeNearestNeighbor(e,s,!this.cropToAspectRatio);throw new Error(`Interpolation is ${this.interpolation} but only ${[...Jb]} are supported`)})}}e0.className="Resizing",ee(e0);class t0{constructor(e){this.seed=e}next(){if(this.seed!==void 0)return this.seed++}}t0.className="RandomSeed";class n0 extends Se{constructor(e){super(e),this.randomGenerator=new t0(e.seed)}getConfig(){const e={seed:this.randomGenerator.seed},t=super.getConfig();return Object.assign(e,t),e}}n0.className="BaseRandomLayer";const ZE=["bilinear","nearest"],s0=new Set(ZE);class o0 extends n0{constructor(e){super(e);const{factor:t,interpolation:s="bilinear"}=e;if(this.factor=t,Array.isArray(this.factor)&&this.factor.length===2)this.widthLower=this.factor[0],this.widthUpper=this.factor[1];else if(!Array.isArray(this.factor)&&this.factor>0)this.widthLower=-this.factor,this.widthUpper=this.factor;else throw new O(`Invalid factor: ${this.factor}. Must be positive number or tuple of 2 numbers`);if(this.widthLower<-1||this.widthUpper<-1)throw new O(`factor must have values larger than -1. Got: ${this.factor}`);if(this.widthUpper<this.widthLower)throw new O(`factor cannot have upper bound less than lower bound.
        Got upper bound: ${this.widthUpper}.
        Got lower bound: ${this.widthLower}
      `);if(s)if(s0.has(s))this.interpolation=s;else throw new O(`Invalid interpolation parameter: ${s} is not implemented`)}getConfig(){const e={factor:this.factor,interpolation:this.interpolation},t=super.getConfig();return Object.assign(e,t),e}computeOutputShape(e){e=De(e);const t=e[2];return[this.imgHeight,-1,t]}call(e,t){return z(()=>{const s=ye(e);this.imgHeight=s.shape[s.shape.length-3];const o=s.shape[s.shape.length-2];this.widthFactor=gi([1],1+this.widthLower,1+this.widthUpper,"float32",this.randomGenerator.next());let r=this.widthFactor.dataSync()[0]*o;r=Math.round(r);const i=[this.imgHeight,r];switch(this.interpolation){case"bilinear":return ns.resizeBilinear(e,i);case"nearest":return ns.resizeNearestNeighbor(e,i);default:throw new Error(`Interpolation is ${this.interpolation}
          but only ${[...s0]} are supported`)}})}}o0.className="RandomWidth",ee(o0);U().registerFlag("KEEP_INTERMEDIATE_TENSORS",()=>!1,n=>{n&&console.warn("Keep intermediate tensors is ON. This will print the values of all intermediate tensors during model inference. Not all models support this mode. For details, check e2e/benchmarks/ model_config.js. This significantly impacts performance.")});var r0;(function(n){n[n.DT_INVALID=0]="DT_INVALID",n[n.DT_FLOAT=1]="DT_FLOAT",n[n.DT_DOUBLE=2]="DT_DOUBLE",n[n.DT_INT32=3]="DT_INT32",n[n.DT_UINT8=4]="DT_UINT8",n[n.DT_INT16=5]="DT_INT16",n[n.DT_INT8=6]="DT_INT8",n[n.DT_STRING=7]="DT_STRING",n[n.DT_COMPLEX64=8]="DT_COMPLEX64",n[n.DT_INT64=9]="DT_INT64",n[n.DT_BOOL=10]="DT_BOOL",n[n.DT_QINT8=11]="DT_QINT8",n[n.DT_QUINT8=12]="DT_QUINT8",n[n.DT_QINT32=13]="DT_QINT32",n[n.DT_BFLOAT16=14]="DT_BFLOAT16",n[n.DT_QINT16=15]="DT_QINT16",n[n.DT_QUINT16=16]="DT_QUINT16",n[n.DT_UINT16=17]="DT_UINT16",n[n.DT_COMPLEX128=18]="DT_COMPLEX128",n[n.DT_HALF=19]="DT_HALF",n[n.DT_RESOURCE=20]="DT_RESOURCE",n[n.DT_VARIANT=21]="DT_VARIANT",n[n.DT_UINT32=22]="DT_UINT32",n[n.DT_UINT64=23]="DT_UINT64",n[n.DT_FLOAT_REF=101]="DT_FLOAT_REF",n[n.DT_DOUBLE_REF=102]="DT_DOUBLE_REF",n[n.DT_INT32_REF=103]="DT_INT32_REF",n[n.DT_UINT8_REF=104]="DT_UINT8_REF",n[n.DT_INT16_REF=105]="DT_INT16_REF",n[n.DT_INT8_REF=106]="DT_INT8_REF",n[n.DT_STRING_REF=107]="DT_STRING_REF",n[n.DT_COMPLEX64_REF=108]="DT_COMPLEX64_REF",n[n.DT_INT64_REF=109]="DT_INT64_REF",n[n.DT_BOOL_REF=110]="DT_BOOL_REF",n[n.DT_QINT8_REF=111]="DT_QINT8_REF",n[n.DT_QUINT8_REF=112]="DT_QUINT8_REF",n[n.DT_QINT32_REF=113]="DT_QINT32_REF",n[n.DT_BFLOAT16_REF=114]="DT_BFLOAT16_REF",n[n.DT_QINT16_REF=115]="DT_QINT16_REF",n[n.DT_QUINT16_REF=116]="DT_QUINT16_REF",n[n.DT_UINT16_REF=117]="DT_UINT16_REF",n[n.DT_COMPLEX128_REF=118]="DT_COMPLEX128_REF",n[n.DT_HALF_REF=119]="DT_HALF_REF",n[n.DT_RESOURCE_REF=120]="DT_RESOURCE_REF",n[n.DT_VARIANT_REF=121]="DT_VARIANT_REF",n[n.DT_UINT32_REF=122]="DT_UINT32_REF",n[n.DT_UINT64_REF=123]="DT_UINT64_REF"})(r0||(r0={}));var i0;(function(n){(function(e){e[e.LEGACY=0]="LEGACY",e[e.V1=1]="V1",e[e.V2=2]="V2"})(n.CheckpointFormatVersion||(n.CheckpointFormatVersion={}))})(i0||(i0={}));var a0;(function(n){n[n.FAIL=0]="FAIL",n[n.SHORTEST=1]="SHORTEST",n[n.LONGEST=2]="LONGEST"})(a0||(a0={}));function ce(n,e){Array.isArray(n)||(n=[n]),n.forEach(t=>{t!=null&&S(t.dtype!=="complex64",()=>`${e} does not support complex64 tensors in the CPU backend.`)})}const QE=ym;class oc extends $o{nextDataId(){return oc.nextDataId++}constructor(){super(),this.blockSize=48,this.firstUse=!0,this.data=new Ji(this,je())}write(e,t,s){this.firstUse&&(this.firstUse=!1,U().get("IS_NODE")&&Jt(`
============================
Hi, looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, visit https://github.com/tensorflow/tfjs-node for more details. 
============================`));const o={id:this.nextDataId()};return this.data.set(o,{values:e,dtype:s,refCount:1}),o}makeTensorInfo(e,t,s){let o;if(t==="string"&&s!=null&&s.length>0&&lr(s[0])){const r=s.map(i=>ds(i));o=this.write(r,e,t)}else o=this.write(s,e,t);return{dataId:o,shape:e,dtype:t}}refCount(e){return this.data.has(e)?this.data.get(e).refCount:0}incRef(e){const t=this.data.get(e);t.refCount++}decRef(e){if(this.data.has(e)){const t=this.data.get(e);t.refCount--}}move(e,t,s,o,r){this.data.set(e,{values:t,dtype:o,refCount:r})}numDataIds(){return this.data.numDataIds()}read(e){return X(this,null,function*(){return this.readSync(e)})}readSync(e){const{dtype:t,complexTensorInfos:s}=this.data.get(e);if(t==="complex64"){const o=this.readSync(s.real.dataId),r=this.readSync(s.imag.dataId);return ss(o,r)}return sw(this.data.get(e).values,t)}bufferSync(e){const t=this.readSync(e.dataId);if(e.dtype==="string")try{const s=t.map(o=>ps(o));return ke(e.shape,e.dtype,s)}catch(s){throw new Error("Failed to decode encoded string bytes into utf-8")}return ke(e.shape,e.dtype,t)}makeOutput(e,t,s){return je().makeTensorFromTensorInfo(this.makeTensorInfo(t,s,e),this)}disposeData(e,t=!1){if(this.data.has(e)){if(this.data.get(e).refCount--,!t&&this.data.get(e).refCount>0)return!1;const{complexTensorInfos:s}=this.data.get(e);s!=null&&(this.disposeData(s.real.dataId,!0),this.disposeData(s.imag.dataId,!0)),this.data.delete(e)}return!0}disposeIntermediateTensorInfo(e){this.disposeData(e.dataId)}time(e){return X(this,null,function*(){const t=zt();return e(),{kernelMs:zt()-t}})}memory(){return{unreliable:!0,reasons:["The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less."]}}where(e){ce([e],"where");const t=this.readSync(e.dataId);return QE(e.shape,t)}dispose(){}floatPrecision(){return 32}epsilon(){return super.epsilon()}}oc.nextDataId=0;function l0(n){const e=new Float32Array(n.length);for(let t=0;t<n.length;++t)e[t]=Math.abs(n[t]);return e}const JE={kernelName:ta,backendName:"cpu",kernelFunc:n=>{const{x:e}=n.inputs,t=n.backend;ce(e,"abs");let s=new Float32Array(j(e.shape));const o=t.data.get(e.dataId).values;return s=l0(o),t.makeOutput(s,e.shape,e.dtype)}};function it(n){return(e,t,s,o,r)=>{const i=we(e,t),a=i.length,l=fe(i),c=j(i),u=Tt(r,c),h=e.length,d=t.length,p=fe(e),f=fe(t),m=Mo(e,i),g=Mo(t,i);if(m.length+g.length===0)for(let x=0;x<u.length;++x)u[x]=n(s[x%s.length],o[x%o.length]);else for(let x=0;x<u.length;++x){const b=No(x,a,l),w=b.slice(-h);m.forEach(v=>w[v]=0);const y=An(w,h,p),C=b.slice(-d);g.forEach(v=>C[v]=0);const $=An(C,d,f);u[x]=n(s[y],o[$])}return[u,i]}}function Zt(n){const{inputs:e,backend:t}=n,{real:s,imag:o}=e,r=t.data.get(s.dataId).values,i=t.data.get(o.dataId).values,a=t.makeTensorInfo(s.shape,"complex64"),l=t.data.get(a.dataId);return l.complexTensorInfos={real:t.makeTensorInfo(s.shape,"float32",r),imag:t.makeTensorInfo(o.shape,"float32",i)},a}const eR={kernelName:Qc,backendName:"cpu",kernelFunc:Zt};function rc(n,e,t="float32"){if(t==="complex64"){const o=rc(n,e,"float32"),r=rc(n,e,"float32");return Zt({inputs:{real:o,imag:r},backend:n})}const s=Et(j(e),t);return n.makeTensorInfo(e,t,s)}function qn(n){const{inputs:e,backend:t}=n,{x:s}=e;return t.incRef(s.dataId),{dataId:s.dataId,shape:s.shape,dtype:s.dtype}}const tR={kernelName:Er,backendName:"cpu",kernelFunc:qn};function ho(n){const{inputs:e,backend:t}=n,{input:s}=e,o=t.data.get(s.dataId).complexTensorInfos.real,r=t.data.get(o.dataId).values;return t.makeTensorInfo(o.shape,o.dtype,r)}const nR={kernelName:vu,backendName:"cpu",kernelFunc:ho};function c0(n,e,t,s){if(s==="int32"){const o=Int32Array.from(n);return[e,"int32",o]}if(s==="bool"){const o=Bs([0],t),[r,i]=it((a,l)=>a!==l?1:0)(e,[],n,o,"bool");return[i,"bool",r]}throw new Error(`Error in Cast: failed to cast ${t} to ${s}`)}function Ts(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{dtype:r}=s;if(r==="complex64"){if(o.dtype==="complex64")return qn({inputs:{x:o},backend:t});const u=rc(t,o.shape,o.dtype),h=Ts({inputs:{x:o},backend:t,attrs:{dtype:"float32"}}),d=Zt({inputs:{real:h,imag:u},backend:t});return t.disposeIntermediateTensorInfo(u),t.disposeIntermediateTensorInfo(h),d}if(o.dtype==="complex64"){const u=ho({inputs:{input:o},backend:t}),h=Ts({inputs:{x:u},backend:t,attrs:{dtype:r}});return t.disposeIntermediateTensorInfo(u),h}if(!$p(o.dtype,r)){const u=qn({inputs:{x:o},backend:t});return{dataId:u.dataId,shape:u.shape,dtype:r}}const i=t.data.get(o.dataId).values,[a,l,c]=c0(i,o.shape,o.dtype,r);return t.makeTensorInfo(a,l,c)}const sR={kernelName:gr,backendName:"cpu",kernelFunc:Ts};function xt(n,e,t,s){return t==null?({inputs:o,backend:r})=>{const{a:i,b:a}=o,l=r;ce([i,a],n);const c=l.data.get(i.dataId).values,u=l.data.get(a.dataId).values,h=i.dtype==="string"?os(c):c,d=i.dtype==="string"?os(u):u,p=s||i.dtype,[f,m]=e(i.shape,a.shape,h,d,p);return l.makeTensorInfo(m,p,f)}:({inputs:o,backend:r})=>{const{a:i,b:a}=o,l=r;if(i.dtype==="complex64"||a.dtype==="complex64"){const c=Ts({inputs:{x:i},backend:l,attrs:{dtype:"complex64"}}),u=l.data.get(c.dataId),h=u.complexTensorInfos.real,d=u.complexTensorInfos.imag,p=l.data.get(h.dataId).values,f=l.data.get(d.dataId).values,m=Ts({inputs:{x:a},backend:l,attrs:{dtype:"complex64"}}),g=l.data.get(m.dataId),x=g.complexTensorInfos.real,b=g.complexTensorInfos.imag,w=l.data.get(x.dataId).values,y=l.data.get(b.dataId).values,[C,$,v]=t(i.shape,a.shape,p,f,w,y),k=l.makeTensorInfo(v,"float32",C),N=l.makeTensorInfo(v,"float32",$),T=Zt({inputs:{real:k,imag:N},backend:l});return l.disposeIntermediateTensorInfo(c),l.disposeIntermediateTensorInfo(m),l.disposeIntermediateTensorInfo(k),l.disposeIntermediateTensorInfo(N),T}else{const c=l.data.get(i.dataId).values,u=l.data.get(a.dataId).values,h=s||i.dtype,[d,p]=e(i.shape,a.shape,c,u,h);return l.makeTensorInfo(p,h,d)}}}function Pd(n){return(e,t,s,o,r,i)=>{const a=we(e,t),l=j(a),c=a.length,u=fe(a),h=Tt("float32",l),d=Tt("float32",l),p=Mo(e,a),f=Mo(t,a),m=ss(s,o),g=ss(r,i),x=e.length,b=fe(e),w=t.length,y=fe(t);if(p.length+f.length===0)for(let C=0;C<h.length;C++){const $=C%m.length,v=C%g.length,k=n(m[$*2],m[$*2+1],g[v*2],g[v*2+1]);h[C]=k.real,d[C]=k.imag}else for(let C=0;C<h.length;C++){const $=No(C,c,u),v=$.slice(-x);p.forEach(E=>v[E]=0);const k=An(v,x,b),N=$.slice(-w);f.forEach(E=>N[E]=0);const T=An(N,w,y),I=n(m[k*2],m[k*2+1],g[T*2],g[T*2+1]);h[C]=I.real,d[C]=I.imag}return[h,d,a]}}const u0=it(((n,e)=>n+e)),oR=Pd(((n,e,t,s)=>({real:n+t,imag:e+s}))),Ko=xt(To,u0,oR),rR={kernelName:To,backendName:"cpu",kernelFunc:Ko};function Bd(n,e,t,s,o){const r=j(s),i=Et(o,t);for(let a=0;a<n.length;a++){const l=n[a];if(l<0)throw new Error("Input x must be non-negative!");l>=o||(r>0?i[l]+=e[a]:i[l]+=1)}return i}function h0(n,e,t,s=!1){const o=n.shape[0],r=n.shape[1],i=ke([o,t],e.dtype);for(let a=0;a<o;a++)for(let l=0;l<r;l++){const c=n.get(a,l);if(c<0)throw new Error("Input x must be non-negative!");c>=t||(s?i.set(1,a,c):e.size>0?i.set(i.get(a,c)+e.get(a,l),a,c):i.set(i.get(a,c)+1,a,c))}return i}const d0=it(((n,e)=>n&e)),iR=xt(Zc,d0),aR={kernelName:Zc,backendName:"cpu",kernelFunc:iR};function jn(n){return(e,t,s)=>{const o=et(t,e.length);for(let r=0;r<e.length;++r)o[r]=n(e[r],s);return o}}function Be(n,e,t){const s=jn(e);return Es(n,s,t)}function Es(n,e,t){return({inputs:s,attrs:o,backend:r})=>{const{x:i}=s;ce(i,n);const a=r,l=a.data.get(i.dataId).values;let c;if(i.dtype==="string"){if(!Array.isArray(l))throw new Error("String tensor's value was not an instance of Array");c=os(l)}else c=l;const u=t||i.dtype,h=e(c,u,o);return a.makeTensorInfo(i.shape,u,h)}}const p0=jn(n=>Math.ceil(n)),lR=Es(xr,p0),cR={kernelName:xr,backendName:"cpu",kernelFunc:lR};function f0(n,e,t,s){const o=et(t,j(e));if(s&&t!=="string"){let r=0;n.forEach(i=>{const a=j(i.shape);o.set(i.vals,r),r+=a})}else{let r=0;n.forEach(i=>{const a=t==="string"?os(i.vals):i.vals;let l=0;for(let c=0;c<i.shape[0];++c){const u=c*e[1]+r;for(let h=0;h<i.shape[1];++h)o[u+h]=a[l++]}r+=i.shape[1]})}return o}const m0=it((n,e)=>n===e?1:0),g0=xt(ga,m0,null,"bool"),uR={kernelName:ga,backendName:"cpu",kernelFunc:g0};const x0=jn(n=>Math.exp(n)),b0=Es(vr,x0,"float32"),hR={kernelName:vr,backendName:"cpu",kernelFunc:b0};const y0=jn(n=>Math.expm1(n)),dR=Es(kr,y0),pR={kernelName:kr,backendName:"cpu",kernelFunc:dR};const w0=jn(n=>Math.floor(n)),fR=Es(Sr,w0),mR={kernelName:Sr,backendName:"cpu",kernelFunc:fR};const C0=it((n,e)=>Math.floor(n/e)),gR=xt(Nr,C0,null,"int32"),xR={kernelName:Nr,backendName:"cpu",kernelFunc:gR};function I0(n,e,t,s,o,r,i,a,l){const c=ke([s,r],t);for(let u=0;u<s;u++){const h=[];let d=0;for(let p=0;p<o;p++){const f=n[u*o+p];d+=f*i[p],h.push(f)}if(d<0||d>=l/r)throw new Error(`Invalid indices: ${h} does not index into ${a}`);for(let p=0;p<r;p++)c.values[u*r+p]=e.get(...e.indexToLoc(d*r+p))}return c}function $0(n,e,t){const s=ke(t,n.dtype);for(let o=0;o<s.size;++o){const i=s.indexToLoc(o).slice(),a=i[0],l=i[2],c=e.locToIndex([a,l]);i[2]=e.values[c];const u=n.locToIndex(i);0<=u&&u<n.values.length&&(s.values[o]=n.values[u])}return s}const v0=it((n,e)=>n>e?1:0),bR=xt(wa,v0,null,"bool"),yR={kernelName:wa,backendName:"cpu",kernelFunc:bR};const k0=it((n,e)=>n>=e?1:0),wR=xt(Tr,k0,null,"bool"),CR={kernelName:Tr,backendName:"cpu",kernelFunc:wR};const S0=it((n,e)=>n<e?1:0),IR=xt(Ia,S0,null,"bool"),$R={kernelName:Ia,backendName:"cpu",kernelFunc:IR};const N0=it((n,e)=>n<=e?1:0),vR=xt($a,N0,null,"bool"),kR={kernelName:$a,backendName:"cpu",kernelFunc:vR};function T0(n,e,t){const s=(e-n)/(t-1),o=Et(t,"float32");o[0]=n;for(let r=1;r<o.length;r++)o[r]=o[r-1]+s;return o}const E0=jn(n=>Math.log(n)),SR=Es(Fr,E0),NR={kernelName:Fr,backendName:"cpu",kernelFunc:SR};function R0(n,e,t,s){const o=Tt(s,j(t));for(let r=0;r<o.length;++r){const i=r*e;let a=n[i];for(let l=0;l<e;++l){const c=n[i+l];(Number.isNaN(c)||c>a)&&(a=c)}o[r]=a}return o}const A0=it(((n,e)=>Math.max(n,e))),TR=xt(Or,A0),ER={kernelName:Or,backendName:"cpu",kernelFunc:TR};const D0=it(((n,e)=>Math.min(n,e))),RR=xt(Lr,D0),AR={kernelName:Lr,backendName:"cpu",kernelFunc:RR};const zd=it(((n,e)=>n*e)),DR=Pd(((n,e,t,s)=>({real:n*t-e*s,imag:n*s+e*t}))),ic=xt(Pr,zd,DR),FR={kernelName:Pr,backendName:"cpu",kernelFunc:ic};function F0(n,e,t){const s=hs(-1,t);return zd([],e,s,n,t)}function _R(n){const{inputs:e,backend:t}=n,{x:s}=e;ce(s,"neg");const o=t.data.get(s.dataId).values,[r,i]=F0(o,s.shape,s.dtype);return t.makeTensorInfo(i,s.dtype,r)}const OR={kernelName:_a,backendName:"cpu",kernelFunc:_R};const _0=it(((n,e)=>n!==e?1:0)),LR=xt(Oa,_0,null,"bool"),MR={kernelName:Oa,backendName:"cpu",kernelFunc:LR};function Vd(n,e,t,s,o){const r=e.length,i=j(e),a=fe(e),l=fe(o),c=Tt(t,j(o));for(let u=0;u<i;++u){const h=No(u,r,a),d=new Array(h.length);for(let f=0;f<d.length;f++)d[f]=h[s[f]];const p=An(d,r,l);c[p]=n[u]}return c}function qt(n){const{inputs:e,attrs:t,backend:s}=n,{x:o}=e,{perm:r}=t;ce(o,"transpose");const i=o.shape.length,a=new Array(i);for(let h=0;h<a.length;h++)a[h]=o.shape[r[h]];const l=s.data.get(o.dataId).values,c=Vd(l,o.shape,o.dtype,r,a);return{dataId:s.write(c,a,o.dtype),shape:a,dtype:o.dtype}}const PR={kernelName:Eo,backendName:"cpu",kernelFunc:qt};function O0(n,e,t,s){const[o,r]=yt(n,s),i=Kt(e,"int32"),a=Et(j(o),i),l=j(r);for(let c=0;c<a.length;++c){const u=c*l;let h=1;for(let d=0;d<l;++d)h*=t[u+d];a[c]=h}return{outVals:a,outShape:o,outDtype:i}}function BR(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{axis:r,keepDims:i}=s;ce(o,"prod");const a=o.shape.length,l=ve(r,o.shape),c=Ze(l,a);let u=l,h=o;const d=[];c!=null&&(h=qt({inputs:{x:o},backend:t,attrs:{perm:c}}),d.push(h),u=nt(u.length,a));const p=t.data.get(h.dataId).values,{outVals:f,outShape:m,outDtype:g}=O0(h.shape,h.dtype,p,u);let x=m;return i&&(x=at(m,l)),d.forEach(b=>t.disposeIntermediateTensorInfo(b)),t.makeTensorInfo(x,g,f)}const zR={kernelName:Va,backendName:"cpu",kernelFunc:BR};function VR(n,e,t){n.forEach((s,o)=>{if(s<0||s>=t){const r=No(o,e.length,fe(e)).join(",");throw new Error(`indices[${r}] = ${s} is not in [0, ${t})`)}})}function WR(n,e){for(let t=0;t<n.length;++t){const s=n[t],o=t===n.length-1?e:n[t+1].length;if(s.length===0)throw new Error("Ragged splits may not be empty");if(s[0]<0)throw new Error("Ragged splits must be non-negative");if(s[s.length-1]>o)throw new Error("Ragged splits must not point past values");for(let r=1;r<s.length;++r)if(s[r-1]>s[r])throw new Error("Ragged splits must be sorted in ascending order")}}function UR(n,e,t,s){const o=[];let r=0;const i=e.length-1+t.length,a=new Array(i).fill(null).map(()=>[0]);WR(t,s);let l=1;for(let c=0;c<e.length-1;++c){l*=e[c];const u=e[c+1];for(let h=1;h<l+1;++h)a[c].push(h*u)}for(let c=0;c<n.length;++c){let u=n[c],h=n[c]+1;for(let d=0;d<t.length;++d){const p=t[d],f=d+e.length-1;if(f>=0){const m=a[f],g=m[m.length-1]-p[u];for(let x=u;x<h;++x)a[f].push(p[x+1]+g)}u=p[u],h=p[h]}h!==u&&(o.push([u,h]),r+=h-u)}return{outSplits:a,valueSlices:o,numValues:r}}function GR(n){const e=[];for(let t=0;t<n.length;++t){const s=n[t].length,o=et("int32",s);e.push(o),n[t].forEach((r,i)=>o[i]=r)}return e}function L0(n,e){const t=n.slice(0,e);for(;t.length<e;)t.push(1);for(let s=e;s<n.length;s++)t[e-1]*=n[s];return t}function HR(n,e,t,s,o,r){const i=L0(e,2)[1],a=L0(r,2)[1];let l=0;for(const c of t)for(let u=c[0];u<c[1];++u){for(let h=0;h<s;++h)o[l*a+h]=n[u*i+h];++l}}function qR(n,e,t,s,o){const r=e.slice();r[0]=o;const i=et(t,j(r)),a=n.length,l=a===0?0:a/e[0];return HR(n,e,s,l,i,r),[i,r]}function M0(n,e,t,s,o,r,i,a){if(n.length===0)throw new Error("paramsNestedSplits must be non empty");if(e[0].length===0)throw new Error("Split tensors must not be scalars");const l=e[0][0]-1;if(VR(r,i,l),s.length===0)throw new Error("params.rank must be nonzero");const c=s[0],{outSplits:u,valueSlices:h,numValues:d}=UR(r,i,n,c),p=GR(u),f=qR(t,s,o,h,d);return[p,f[0],f[1]]}const P0=2147483647;function B0(n,e,t,s,o,r,i){if(e.length>1)throw new Error("starts must be a scalar or vector");if(o.length>1)throw new Error("limits must be a scalar or vector");if(i.length>1)throw new Error("deltas must be a scalar or vector");const a=e.length===0,l=o.length===0,c=i.length===0,u=[];a||u.push(e[0]),l||u.push(o[0]),c||u.push(i[0]);for(let g=1;g<u.length;++g)if(u[g]!==u[g-1])throw new Error("starts, limits, and deltas must have the same shape");const h=u.length===0?1:u[0],d=et("int32",h+1);d[0]=0;for(let g=0;g<h;++g){const x=a?n[0]:n[g],b=l?s[0]:s[g],w=c?r[0]:r[g];if(w===0)throw new Error("Requires delta != 0");let y;if(w>0&&b<x||w<0&&b>x)y=0;else if(y=Math.ceil(Math.abs((b-x)/w)),y>P0)throw new Error(`Requires ((limit - start) / delta) <= ${P0}`);d[g+1]=d[g]+y}const p=d[h],f=et(t,p);let m=0;for(let g=0;g<h;++g){const x=d[g+1]-d[g];let b=a?n[0]:n[g];const w=c?r[0]:r[g];for(let y=0;y<x;++y)f[m++]=b,b+=w}return[d,f]}var fn=In;class ac{constructor(e,t,s,o,r,i,a,l,c,u){this.shape=e,this.shapeShape=t,this.values=s,this.valuesShape=o,this.valuesDType=r,this.defaultValue=i,this.defaultValueShape=a,this.rowPartitionValues=l,this.rowPartitionValuesShapes=c,this.rowPartitionTypes=Gm(u),this.raggedRank=Hm(this.rowPartitionTypes)}getRowPartitionTypeByDimension(e){return this.rowPartitionTypes[0]===fn.FIRST_DIM_SIZE?this.rowPartitionTypes[e+1]:this.rowPartitionTypes[e]}getRowPartitionTensor(e){return this.rowPartitionTypes[0]===fn.FIRST_DIM_SIZE?this.rowPartitionValues[e+1]:this.rowPartitionValues[e]}getMaxWidth(e){const t=this.getRowPartitionTensor(e-1);switch(this.getRowPartitionTypeByDimension(e-1)){case fn.VALUE_ROWIDS:return ac.getMaxWidthValueRowID(t);case fn.ROW_SPLITS:return ac.getMaxWidthRowSplit(t);default:throw new Error(`Cannot handle partition type ${fn[this.getRowPartitionTypeByDimension(e-1)]}`)}}static getMaxWidthRowSplit(e){const t=e.length;if(t===0||t===1)return 0;let s=0;for(let o=0;o<t-1;++o){const r=e[o+1]-e[o];r>s&&(s=r)}return s}static getMaxWidthValueRowID(e){const t=e.length;if(t===0)return 0;let s=0,o=e[0],r=0;for(let i=1;i<t;++i){const a=e[i];a!==o&&(o=a,r=Math.max(i-s,r),s=i)}return Math.max(t-s,r)}tensorShapeFromTensor(e,t,s=!0){if(t.length===0){if(e[0]===-1)return[];throw new Error("The only valid scalar shape tensor is the fully unknown shape specified as -1.")}return V0(e,s)}calculateOutputSize(e){const t=this.valuesShape,s=this.defaultValueShape;qm(s,t);const o=this.tensorShapeFromTensor(this.shape,this.shapeShape),i=Um(this.raggedRank,o,t);i[0]<0&&(i[0]=e);for(let a=1;a<=this.raggedRank;++a)i[a]<0&&(i[a]=this.getMaxWidth(a));return i}calculateFirstParentOutputIndex(e,t,s){const o=Math.min(e,s),r=[];let i=0;for(let a=0;a<o;++a,i+=t)r.push(i);for(let a=o;a<e;++a)r.push(-1);return S(r.length===e,()=>"Final length of result must be equal to firstDimension."),r}calculateOutputIndexRowSplit(e,t,s,o){const r=e.length,i=[];for(let a=0;a<r-1;++a){const l=e[a+1]-e[a];let c=Math.min(o,l),u=t[a];u===-1&&(c=0);for(let h=0;h<c;++h)i.push(u),u+=s;for(let h=0;h<l-c;++h)i.push(-1)}if(r>0&&i.length!==e[r-1])throw new Error("Invalid row split size.");return i}calculateOutputIndexValueRowID(e,t,s,o){const r=e.length,i=[];if(r===0)return[];let a=0,l=e[0];if(l>=t.length)throw new Error(`Got currentValueRowId=${l}, which is not less than ${t.length}`);let c=t[l];i.push(c);for(let u=1;u<r;++u){const h=e[u];if(h===l)c>=0&&(++a,a<o?c+=s:c=-1);else{if(a=0,l=h,h>=t.length)throw new Error(`Got nextValueRowId=${h} which is not less than ${t.length}`);c=t[h]}i.push(c)}if(i.length!==e.length)throw new Error("Invalid row ids.");return i}calculateOutputIndex(e,t,s,o){const r=this.getRowPartitionTensor(e),i=this.getRowPartitionTypeByDimension(e);switch(i){case fn.VALUE_ROWIDS:return this.calculateOutputIndexValueRowID(r,t,s,o);case fn.ROW_SPLITS:if(r.length-1>t.length)throw new Error(`Row partition size is greater than output size: ${r.length-1} > ${t.length}`);return this.calculateOutputIndexRowSplit(r,t,s,o);default:throw new Error(`Unsupported partition type: ${fn[i]}`)}}getFirstDimensionSize(){const e=this.rowPartitionValues[0];if(this.rowPartitionTypes.length===0)throw new Error("No row_partition_types given.");const t=this.rowPartitionTypes[0];switch(t){case fn.FIRST_DIM_SIZE:return e[0];case fn.VALUE_ROWIDS:throw new Error("Cannot handle VALUE_ROWIDS in first dimension.");case fn.ROW_SPLITS:return this.rowPartitionValuesShapes[0][0]-1;default:throw new Error(`Cannot handle type ${fn[t]}`)}}compute(){if(this.rowPartitionValues[0].length<=0)throw new Error("Invalid first partition input. Tensor requires at least one element.");const t=this.getFirstDimensionSize(),s=this.calculateOutputSize(t),o=new Array(this.raggedRank+1);o[o.length-1]=1;for(let l=o.length-2;l>=0;--l)o[l]=o[l+1]*s[l+1];const r=V0(s,!1),i=et(this.valuesDType,j(r));if(o[0]*s[0]>0){let l=this.calculateFirstParentOutputIndex(t,o[0],s[0]);for(let c=1;c<=this.raggedRank;++c)l=this.calculateOutputIndex(c-1,l,o[c],s[c]);this.setOutput(this.raggedRank,l,i,r)}return[r,i]}setOutput(e,t,s,o){if(s.length===0)return;const r=this.values,i=s;let a=o.slice();a=a.slice(e+1);const l=j(a),c=t.length;let u=this.defaultValue;if(u.length!==l&&u.length!==1){const f=this.defaultValueShape;z(()=>{const m=V(u,f);u=hi(m,a).dataSync()})}let h=0,d=0,p=0;for(let f=0;f<=c;++f){let m=f<c?t[f]:-1;if(m===p){++p;continue}if(d<p){const g=r.subarray(h*l),x=i.subarray(d*l),b=(p-d)*l;z0(x,g,b)}if(f>=c){const g=s.length;m=Math.floor(g/l)}if(m>p)if(this.defaultValue.length===1)i.subarray(p*l,m*l).fill(this.defaultValue[0]),p=m;else for(;m>p;){const g=i.slice(p*l);z0(g,u,l),++p}m<0?(h=f+1,d=p):(h=f,d=p,p=d+1)}}}function z0(n,e,t){for(let s=0;s<t;s++)n[s]=e[s]}function V0(n,e){const t=[];for(let s of n){if(s<0){if(!e)throw new Error(`Dimension ${s} must be >= 0`);if(s<-1)throw new Error(`Dimension ${s} must be >= -1`);s=-1}t.push(s)}return t}function W0(n,e,t,s,o,r,i,a,l,c){return new ac(n,e,t,s,o,r,i,a,l,c).compute()}function U0(n,e,t,s){const o=n===e,r=n<e&&t<0,i=e<n&&t>1;if(o||r||i)return Et(0,s);const a=Math.abs(Math.ceil((e-n)/t)),l=Et(a,s);e<n&&t===1&&(t=-1),l[0]=n;for(let c=1;c<l.length;c++)l[c]=l[c-1]+t;return l}const G0=jn(n=>1/Math.sqrt(n)),jR=Es(Gr,G0),KR={kernelName:Gr,backendName:"cpu",kernelFunc:jR};function po(n,e,t,s,o,r,i,a,l,c){const u=[s/o,o],h=n.values,d=e.values;if(s===0)return ke(t,e.dtype);const p=l instanceof It?l:ke(u,e.dtype);typeof l=="string"||typeof l=="number"?p.values.fill(l):typeof l=="boolean"&&p.values.fill(+l);for(let f=0;f<r;f++){const m=[];let g=0;for(let x=0;x<i;x++){const b=h[f*i+x];m.push(b),g+=b*a[x]}if(g<0||g>=s/o)throw new Error(`Invalid indices: ${m} does not index into ${t}`);for(let x=0;x<o;x++)c?p.values[g*o+x]+=d[f*o+x]:p.values[g*o+x]=e.rank===0?d[0]:d[f*o+x]}return p}const XR=jn(n=>1/(1+Math.exp(-n))),H0=Be(Xr,n=>1/(1+Math.exp(-n))),YR={kernelName:Xr,backendName:"cpu",kernelFunc:H0};function q0(n,e,t,s,o){const r=Pm(s,e,t),i=j(t),a=fe(s);if(r){const h=Bm(e,a);return o==="string"?n.slice(h,h+i):n.subarray(h,h+i)}const l=o==="string"?os(n):n,c=ke(s,o,l),u=ke(t,o);for(let h=0;h<u.size;++h){const d=u.indexToLoc(h),p=d.map((f,m)=>f+e[m]);u.set(c.get(...p),...d)}return o==="string"?pg(u.values):u.values}function fo(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{begin:r,size:i}=s;ce(o,"slice");const[a,l]=_h(o,r,i);Lm(o,a,l);const c=t.data.get(o.dataId).values,u=q0(c,a,l,o.shape,o.dtype);return t.makeTensorInfo(l,o.dtype,u)}const ZR={kernelName:ja,backendName:"cpu",kernelFunc:fo};function j0(n,e,t,s,o,r,i){const a=e[0],l=r[0],c=new Array(l),u=new Array(a),h=e[1];if(l===0){if(a!==0)throw new Error(tg(a));const g=et(t,0),x=et(o,0);return[g,[0,h],x,c,u]}let d=!0,p=0;const f=new Array(l).fill(0);for(let g=0;g<a;++g){const x=n[g*h];if(x<0)throw new Error(ng(g,x));if(x>=l)throw new Error(sg(g,x,l));++f[x],d=d&&x>=p,p=x}let m=!0;for(let g=0;g<l;++g){const x=f[g]===0;c[g]=x,m=m&&!x,f[g]=Math.max(f[g],1),g>0&&(f[g]+=f[g-1])}if(m&&d){const g=n,x=s;for(let b=0;b<a;++b)u[b]=b;return[g,[a,h],x,c,u]}else{const g=f[l-1],x=et(t,g*h),b=et(o,g),w=new Array(l).fill(0);for(let y=0;y<a;++y){const C=n[y*h],$=w[C],v=(C===0?0:f[C-1])+$;w[C]++;for(let k=0;k<h;++k)x[v*h+k]=n[y*h+k];b[v]=s[y],u[y]=v}for(let y=0;y<l;++y)if(w[y]===0){const $=y===0?0:f[y-1];x[$*h+0]=y;for(let v=1;v<h;++v)x[$*h+v]=0;b[$]=i}return[x,[g,h],b,c,u]}}function K0(n,e,t,s,o){const r=j(s),i=e[0],a=o.length,l=[];let c=1,u=-1;for(let g=0;g<a;++g){const x=o[g];if(x===-1){if(u!==-1)throw new Error(og(u,g));u=g,l.push(1)}else{if(x<0)throw new Error(rg(g,x));c*=x,l.push(x)}}if(u!==-1){if(c<=0)throw new Error(ig());const g=Math.trunc(r/c);if(c*g!==r)throw new Error(ag(s,l));l[u]=g}if(j(l)!==r)throw new Error(lg(s,l));const d=s.length,p=[];if(d>0){p[d-1]=1;for(let g=d-2;g>=0;--g)p[g]=p[g+1]*s[g+1]}const f=[];if(a>0){f[a-1]=1;for(let g=a-2;g>=0;--g)f[g]=f[g+1]*l[g+1]}const m=et(t,i*a);for(let g=0;g<i;++g){let x=0;for(let b=0;b<d;++b)x+=n[g*d+b]*p[b];for(let b=0;b<a;++b)m[g*a+b]=Math.trunc(x/f[b]),x%=f[b]}return[m,[i,a],l]}function Wd(n,e,t,s,o,r=!1,i=0){const a=s.length,l=[e[0],n.length/e[0]],c=l[1],h=a>0?o[a-1]+1:0;if(h<0)throw new Error(ed());const d=e.slice();d[0]=h;const p=d.reduce((w,y)=>w*y,1),f=et(t,p);if(a===0)return h>0&&f.fill(i),[f,d];if(h<=0)throw new Error(ed());let m=0,g=1,x=0,b=o[m];for(;;){let w=0;if(g<a){if(w=o[g],b===w){++g;continue}if(b>=w)throw new Error(cg())}if(b<0||b>=h)throw new Error(ug(b,h));b>x&&f.fill(i,x*c,b*c);for(let y=m;y<g;++y){const C=s[y];if(C<0||C>=l[0])throw new Error(hg(y,s[y],l[0]));for(let $=0;$<c;$++)f[b*c+$]+=n[C*c+$]}if(r)for(let y=0;y<c;y++)f[b*c+y]/=g-m;if(m=g,++g,x=b+1,b=w,g>a)break}return x<h&&f.fill(i,x*c,h*c),[f,d]}const QR=jn(n=>Math.sqrt(n)),JR=Be(Zr,n=>Math.sqrt(n)),eA={kernelName:Zr,backendName:"cpu",kernelFunc:JR};const X0=it(((n,e)=>{const t=n-e;return t*t})),tA=xt(Qr,X0),nA={kernelName:Qr,backendName:"cpu",kernelFunc:tA};const Y0=jn((n,e)=>{const{pattern:t,replaceGlobal:s,rewrite:o}=e;return n.replace(new RegExp(t,s?"g":""),o)}),sA=Es(Tu,Y0),oA={kernelName:Tu,backendName:"cpu",kernelFunc:sA};function Z0(n,e,t,s){const o=ke(n,e.dtype);for(let r=0;r<o.size;r++){const i=o.indexToLoc(r),a=new Array(i.length);for(let l=0;l<a.length;l++)a[l]=i[l]*t[l]+s[l];o.set(e.get(...a),...i)}return o}class rA{constructor(e,t,s,o,r,i){this.separator=ds(e),this.nGramWidths=t,this.leftPad=ds(s),this.rightPad=ds(o),this.padWidth=r,this.preserveShort=i}getPadWidth(e){return Math.min(this.padWidth<0?e-1:this.padWidth,e-1)}getNumNGrams(e,t){const s=this.getPadWidth(t);return Math.max(0,e+2*s-t+1)}createNGrams(e,t,s,o,r,i){for(let a=0;a<r;++a){const l=this.getPadWidth(i),c=Math.max(0,l-a),u=Math.max(0,l-(r-(a+1))),h=i-(c+u),d=t+(c>0?0:a-l);let p=0;p+=c*this.leftPad.length;for(let b=0;b<h;++b)p+=e[d+b].length;p+=u*this.rightPad.length;const f=c+u+h-1;p+=f*this.separator.length,s[o+a]=new Uint8Array(p);const m=s[o+a];let g=0;const x=b=>b.forEach(w=>m[g++]=w);for(let b=0;b<c;++b)x(this.leftPad),x(this.separator);for(let b=0;b<h-1;++b)x(e[d+b]),x(this.separator);if(h>0){x(e[d+h-1]);for(let b=0;b<u;++b)x(this.separator),x(this.rightPad)}else{for(let b=0;b<u-1;++b)x(this.rightPad),x(this.separator);x(this.rightPad)}}}compute(e,t){const s=e.length,o=t.length;if(o>0){let l=t[0];if(l!==0)throw new Error(`First split value must be 0, got ${l}`);for(let c=1;c<o;++c){let u=t[c]>=l;if(u=u&&t[c]<=s,!u)throw new Error(`Invalid split value ${t[c]}, must be in [${l}, ${s}]`);l=t[c]}if(l!==s)throw new Error(`Last split value must be data size. Expected ${s}, got ${l}`)}const r=o-1,i=et("int32",o);if(s===0||o===0){const l=new Array(s);for(let c=0;c<=r;++c)i[c]=0;return[l,i]}i[0]=0;for(let l=1;l<=r;++l){const c=t[l]-t[l-1];let u=0;this.nGramWidths.forEach(h=>{u+=this.getNumNGrams(c,h)}),this.preserveShort&&c>0&&u===0&&(u=1),i[l]=i[l-1]+u}const a=new Array(i[r]);for(let l=0;l<r;++l){const c=t[l];let u=i[l];if(this.nGramWidths.forEach(h=>{const d=t[l+1]-t[l],p=this.getNumNGrams(d,h);this.createNGrams(e,c,a,u,p,h),u+=p}),this.preserveShort&&u===i[l]){const h=t[l+1]-t[l];if(h===0)continue;const d=h+2*this.padWidth;this.createNGrams(e,c,a,u,1,d)}}return[a,i]}}function Q0(n,e,t,s,o,r,i,a){return new rA(t,s,o,r,i,a).compute(n,e)}function iA(n,e,t,s){if(!n.length)return;if(e.length===0){for(let r=0;r<n.length;++r)s.push(n.subarray(r,r+1));return}if(e.length===1){const r=e[0];let i=n.indexOf(r);for(;i!==-1;){const a=n.subarray(0,i);(!t||a.length!==0)&&s.push(a),n=n.subarray(i+1),i=n.indexOf(r)}(!t||n.length!==0)&&s.push(n);return}let o=0;for(let r=0;r<n.length+1;r++)if(r===n.length||e.indexOf(n[r])!==-1){const i=n.subarray(o,r);(!t||i.length!==0)&&s.push(i),o=r+1}}function J0(n,e,t){const s=n.length,o=[];let r=0,i=0;const a=new Array(s);for(let d=0;d<s;++d){const p=o.length;iA(n[d],e,t,o);const f=o.length-p;a[d]=f,r+=f,i=Math.max(i,f)}const l=et("int32",r*2),c=new Array(r),u=[s,i];let h=0;for(let d=0;d<s;++d)for(let p=0;p<a[d];++p)l[h*2]=d,l[h*2+1]=p,c[h]=o[h],++h;return[l,c,u]}function e1(n,e){const t=et("int32",n.length);for(let s=0;s<n.length;++s)t[s]=$w(n[s]).modulo(e).getLowBitsUnsigned();return t}const t1=it(((n,e)=>n-e)),aA=Pd(((n,e,t,s)=>({real:n-t,imag:e-s}))),Ud=xt(Jr,t1,aA),lA={kernelName:Jr,backendName:"cpu",kernelFunc:Ud};function n1(n,e){const t=new Array(n.rank);for(let o=0;o<t.length;o++)t[o]=n.shape[o]*e[o];const s=ke(t,n.dtype);for(let o=0;o<s.values.length;++o){const r=s.indexToLoc(o),i=new Array(n.rank);for(let l=0;l<i.length;l++)i[l]=r[l]%n.shape[l];const a=n.locToIndex(i);s.values[o]=n.values[a]}return s}const Pi=(n,e)=>{const t=e.value-n.value;return t===0?n.index-e.index:t};function s1(n,e,t=0,s=n.length-1){for(;s>t;){if(s-t>600){const a=s-t+1,l=e-t+1,c=Math.log(a),u=.5*Math.exp(2*c/3),h=.5*Math.sqrt(c*u*(a-u)/a)*Math.sign(l-a/2),d=Math.max(t,Math.floor(e-l*u/a+h)),p=Math.min(s,Math.floor(e+(a-l)*u/a+h));s1(n,e,d,p)}const o=n[e];let r=t,i=s;for(Rn(n,t,e),Pi(n[s],o)>0&&Rn(n,t,s);r<i;){for(Rn(n,r,i),r++,i--;Pi(n[r],o)<0;)r=r+1;for(;Pi(n[i],o)>0;)i=i-1}Pi(n[t],o)===0?Rn(n,t,i):(i=i+1,Rn(n,i,s)),i<=e&&(t=i+1),e<=i&&(s=i-1)}}function o1(n,e,t,s,o){const r=e[e.length-1],[i,a]=[n.length/r,r],l=Tt(t,i*s),c=Tt("int32",i*s);for(let h=0;h<i;h++){const d=h*a,p=n.subarray(d,d+a);let f=new Array(p.length);p.forEach((b,w)=>f[w]={value:b,index:w}),s<f.length&&(s1(f,s),f=f.slice(0,s)),o&&f.sort(Pi);const m=h*s,g=l.subarray(m,m+s),x=c.subarray(m,m+s);for(let b=0;b<s;b++)g[b]=f[b].value,x[b]=f[b].index}const u=e.slice();return u[u.length-1]=s,[ke(u,t,l),ke(u,"int32",c)]}function r1(n,e,t,s){const o=ve(e,t)[0],r=[1,t[0],1];for(let f=0;f<o;f++)r[0]*=t[f];r[1]=t[o];for(let f=o+1;f<t.length;f++)r[2]*=t[f];const i=new Map,a=new Int32Array(t[o]),l=new It(r,s,n),c=[],u=r[0]===1&&r[2]===1;for(let f=0;f<t[o];f++){let m;if(u)m=n[f].toString();else{const x=[];for(let b=0;b<r[0];b++)for(let w=0;w<r[2];w++)x.push(l.get(b,f,w));m=x.join(",")}const g=i.get(m);if(g!=null)a[f]=g;else{const x=i.size;i.set(m,x),a[f]=x,c.push(f)}}const h=r.slice();h[1]=i.size;const d=new It(h,s);c.forEach((f,m)=>{for(let g=0;g<r[0];g++)for(let x=0;x<r[2];x++)d.set(l.get(g,f,x),g,m,x)});const p=t.slice();return p[o]=h[1],{outputValues:d.values,outputShape:p,indices:a}}var cA=Object.freeze({__proto__:null,addImpl:u0,bincountImpl:Bd,bincountReduceImpl:h0,bitwiseAndImpl:d0,castImpl:c0,ceilImpl:p0,concatImpl:f0,equalImpl:m0,expImpl:x0,expm1Impl:y0,floorDivImpl:C0,floorImpl:w0,gatherNdImpl:I0,gatherV2Impl:$0,greaterEqualImpl:k0,greaterImpl:v0,lessEqualImpl:N0,lessImpl:S0,linSpaceImpl:T0,logImpl:E0,maxImpl:R0,maximumImpl:A0,minimumImpl:D0,multiplyImpl:zd,negImpl:F0,notEqualImpl:_0,prodImpl:O0,raggedGatherImpl:M0,raggedRangeImpl:B0,raggedTensorToTensorImpl:W0,rangeImpl:U0,rsqrtImpl:G0,scatterImpl:po,sigmoidImpl:XR,simpleAbsImpl:l0,sliceImpl:q0,sparseFillEmptyRowsImpl:j0,sparseReshapeImpl:K0,sparseSegmentReductionImpl:Wd,sqrtImpl:QR,squaredDifferenceImpl:X0,staticRegexReplaceImpl:Y0,stridedSliceImpl:Z0,stringNGramsImpl:Q0,stringSplitImpl:J0,stringToHashBucketFastImpl:e1,subImpl:t1,tileImpl:n1,topKImpl:o1,transposeImpl:Vd,uniqueImpl:r1});$f("cpu",()=>new oc,1);const i1=Be(Ir,n=>n>=0?n:Math.exp(n)-1),uA={kernelName:Ir,backendName:"cpu",kernelFunc:i1};function a1(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{alpha:r}=s;ce([o],"leakyRelu");const i=j(o.shape),a=t.data.get(o.dataId).values,l=Tt("float32",i);for(let c=0;c<a.length;c++)l[c]=a[c]<0?r*a[c]:a[c];return t.makeTensorInfo(o.shape,"float32",l)}const hA={kernelName:Ca,backendName:"cpu",kernelFunc:a1};const dA=it((n,e)=>n<0?e*n:n);function l1(n){const{inputs:e,backend:t}=n,{x:s,alpha:o}=e;ce([s,o],"prelu");const r=t.data.get(s.dataId).values,i=t.data.get(o.dataId).values,[a,l]=dA(s.shape,o.shape,r,i,"float32");return t.makeTensorInfo(l,"float32",a)}const pA={kernelName:za,backendName:"cpu",kernelFunc:l1};const c1=Be(Vr,n=>Math.max(0,n)),fA={kernelName:Vr,backendName:"cpu",kernelFunc:c1};const u1=Be(Wr,n=>Math.min(Math.max(0,n),6)),mA={kernelName:Wr,backendName:"cpu",kernelFunc:u1};function lc(n,e,t,s,o){if(t==="linear")return qn({inputs:{x:e},backend:n});if(t==="relu")return c1({inputs:{x:e},backend:n});if(t==="elu")return i1({inputs:{x:e},backend:n});if(t==="relu6")return u1({inputs:{x:e},backend:n});if(t==="prelu")return l1({inputs:{x:e,alpha:s},backend:n});if(t==="leakyrelu")return a1({inputs:{x:e},backend:n,attrs:{alpha:o}});if(t==="sigmoid")return H0({inputs:{x:e},backend:n});throw new Error(`Activation ${t} has not been implemented for the CPU backend.`)}function qe(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{shape:r}=s,i=j(o.shape),a=Ip(r,i),l=j(a);S(i===l,()=>`The new shape (${a}) has ${l} elements and the old shape (${o.shape}) has ${i} elements. The new shape and old shape must have the same number of elements.`),t.incRef(o.dataId);const c=t.data.get(o.dataId);if(c.complexTensorInfos!=null){const u=c.complexTensorInfos.real,h=c.complexTensorInfos.imag;u.shape=a,h.shape=a}return{dataId:o.dataId,shape:a,dtype:o.dtype}}const gA={kernelName:Wa,backendName:"cpu",kernelFunc:qe};function h1(n){const{inputs:e,backend:t,attrs:s}=n,{a:o,b:r}=e,{transposeA:i,transposeB:a}=s;ce([o,r],"matMul");const l=o.shape.length,c=r.shape.length,u=i?o.shape[l-2]:o.shape[l-1],h=a?r.shape[c-1]:r.shape[c-2],d=i?o.shape[l-1]:o.shape[l-2],p=a?r.shape[c-2]:r.shape[c-1],f=o.shape.slice(0,-2),m=r.shape.slice(0,-2),g=j(f),x=j(m),w=we(o.shape.slice(0,-2),r.shape.slice(0,-2)).concat([d,p]);S(u===h,()=>`Error in matMul: inner shapes (${u}) and (${h}) of Tensors with shapes ${o.shape} and ${r.shape} and transposeA=${i} and transposeB=${a} must match.`);const y=i?[g,u,d]:[g,d,u],C=a?[x,p,h]:[x,h,p],$=qe({inputs:{x:o},backend:t,attrs:{shape:y}}),v=qe({inputs:{x:r},backend:t,attrs:{shape:C}}),k=i?$.shape[1]:$.shape[2],N=i?$.shape[2]:$.shape[1],T=a?v.shape[1]:v.shape[2],I=Math.max(g,x),E=t.data.get($.dataId).values,R=t.data.get(v.dataId).values,D=fe($.shape),F=fe(v.shape),[_,P,B]=i?[D[0],1,D[1]]:[D[0],D[1],1],[H,G,Z]=a?[1,F[1],F[0]]:[F[1],1,F[0]],Q=N*T,J=ke([I,N,T],$.dtype),K=J.values,Y=t.blockSize;for(let ne=0;ne<I;ne++){const oe=ne%g,le=ne%x;for(let ae=0;ae<N;ae+=Y){const pe=Math.min(ae+Y,N);for(let ue=0;ue<T;ue+=Y){const Ie=Math.min(ue+Y,T);for(let Le=0;Le<k;Le+=Y){const Ne=Math.min(Le+Y,k);for(let Te=ae;Te<pe;Te++)for(let de=ue;de<Ie;de++){let $e=0;for(let Me=Le;Me<Ne;Me++){const Je=E[oe*_+Te*P+Me*B],Ve=R[Me*H+de*G+le*Z];$e+=Je*Ve}K[ne*Q+(Te*T+de)]+=$e}}}}}return t.disposeIntermediateTensorInfo($),t.disposeIntermediateTensorInfo(v),t.makeTensorInfo(w,J.dtype,J.values)}const xA={kernelName:ia,backendName:"cpu",kernelFunc:h1};function bA(n){const{inputs:e,backend:t,attrs:s}=n,{a:o,b:r,bias:i,preluActivationWeights:a}=e,{transposeA:l,transposeB:c,activation:u,leakyreluAlpha:h}=s;let d,p,f;const m=[];d=h1({inputs:{a:o,b:r},attrs:{transposeA:l,transposeB:c},backend:t}),i&&(p=Ko({inputs:{a:d,b:i},backend:t}),m.push(d),d=p),u&&(f=lc(t,d,u,a,h),m.push(d),d=f);for(const x of m)t.disposeIntermediateTensorInfo(x);return d}const yA={kernelName:tl,backendName:"cpu",kernelFunc:bA};const wA=Be(cr,n=>Math.acos(n)),CA={kernelName:cr,backendName:"cpu",kernelFunc:wA};const IA=Be(ur,n=>Math.acosh(n)),$A={kernelName:ur,backendName:"cpu",kernelFunc:IA};function vA(n){const{inputs:e,backend:t}=n,s=e;ce(e,"addN");const o=s.map(a=>t.data.get(a.dataId).values),r=ke(s[0].shape,s[0].dtype),i=r.values;for(let a=0;a<s.length;a++){const l=o[a];for(let c=0;c<i.length;c++)i[c]+=l[c]}return t.makeTensorInfo(r.shape,r.dtype,r.values)}const kA={kernelName:Hc,backendName:"cpu",kernelFunc:vA};function SA(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{axis:r,keepDims:i}=s;ce(o,"all");const a=ve(r,o.shape);let l=a;const c=Ze(l,o.shape.length);let u=o;c!=null&&(u=qt({inputs:{x:o},backend:t,attrs:{perm:c}}),l=nt(l.length,o.shape.length)),kt("all",l,u.shape.length);const[h,d]=yt(u.shape,l),p=j(d),f=Et(j(h),u.dtype),m=t.data.get(u.dataId).values;for(let x=0;x<f.length;++x){const b=x*p;let w=m[b];for(let y=0;y<p;++y){const C=m[b+y];w=w&&C}f[x]=w}c!=null&&t.disposeIntermediateTensorInfo(u);const g=t.makeTensorInfo(h,u.dtype,f);if(i){const x=at(h,a),b=qe({inputs:{x:g},backend:t,attrs:{shape:x}});return t.disposeIntermediateTensorInfo(g),b}return g}const NA={kernelName:qc,backendName:"cpu",kernelFunc:SA};function TA(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{axis:r,keepDims:i}=s;ce(o,"any");const a=ve(r,o.shape);let l=a;const c=Ze(l,o.shape.length);let u=o;c!=null&&(u=qt({inputs:{x:o},backend:t,attrs:{perm:c}}),l=nt(l.length,o.shape.length)),kt("any",l,u.shape.length);const[h,d]=yt(u.shape,l),p=j(d),f=Et(j(h),u.dtype),m=t.data.get(u.dataId).values;for(let x=0;x<f.length;++x){const b=x*p;let w=m[b];for(let y=0;y<p;++y){const C=m[b+y];w=w||C}f[x]=w}c!=null&&t.disposeIntermediateTensorInfo(u);const g=t.makeTensorInfo(h,u.dtype,f);if(i){const x=at(h,a),b=qe({inputs:{x:g},backend:t,attrs:{shape:x}});return t.disposeIntermediateTensorInfo(g),b}return g}const EA={kernelName:jc,backendName:"cpu",kernelFunc:TA};function RA(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{axis:r}=s;ce(o,"argMax");let i=ve(r,o.shape);const a=Ze(i,o.shape.length);let l=o;const c=[];a!=null&&(l=qt({inputs:{x:o},backend:t,attrs:{perm:a}}),c.push(l),i=nt(i.length,l.shape.length)),i=[i[0]],kt("argMax",i,l.shape.length);const[u,h]=yt(l.shape,i),d=j(u),p=Et(d,"int32"),f=j(h),m=t.data.get(l.dataId).values;for(let g=0;g<p.length;++g){const x=g*f;let b=m[x],w=0;for(let y=0;y<f;++y){const C=m[x+y];C>b&&(b=C,w=y)}p[g]=w}return c.forEach(g=>t.disposeIntermediateTensorInfo(g)),t.makeTensorInfo(u,"int32",p)}const AA={kernelName:na,backendName:"cpu",kernelFunc:RA};function DA(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{axis:r}=s;ce(o,"argMin");let i=ve(r,o.shape);const a=Ze(i,o.shape.length);let l=o;const c=[];a!=null&&(l=qt({inputs:{x:o},backend:t,attrs:{perm:a}}),c.push(l),i=nt(i.length,l.shape.length)),i=[i[0]],kt("argMin",i,l.shape.length);const[u,h]=yt(l.shape,i),d=j(u),p=Et(d,"int32"),f=j(h),m=t.data.get(l.dataId).values;for(let g=0;g<p.length;++g){const x=g*f;let b=m[x],w=0;for(let y=0;y<f;++y){const C=m[x+y];C<b&&(b=C,w=y)}p[g]=w}return c.forEach(g=>t.disposeIntermediateTensorInfo(g)),t.makeTensorInfo(u,"int32",p)}const FA={kernelName:sa,backendName:"cpu",kernelFunc:DA};const _A=Be(hr,n=>Math.asin(n)),OA={kernelName:hr,backendName:"cpu",kernelFunc:_A};const LA=Be(dr,n=>Math.asinh(n)),MA={kernelName:dr,backendName:"cpu",kernelFunc:LA};const PA=Be(pr,n=>Math.atan(n)),BA={kernelName:pr,backendName:"cpu",kernelFunc:PA};const zA=it((n,e)=>Math.atan2(n,e)),VA=xt(mr,zA),WA={kernelName:mr,backendName:"cpu",kernelFunc:VA};const UA=Be(fr,n=>Math.atanh(n)),GA={kernelName:fr,backendName:"cpu",kernelFunc:UA};function Gd(n,e,t,s,o,r){const i=o.strideHeight,a=o.strideWidth,l=o.dilationHeight,c=o.dilationWidth,u=o.effectiveFilterHeight,h=o.effectiveFilterWidth,d=o.padInfo.top,p=o.padInfo.left,f=r==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,m=ke(o.outShape,t),g=m.values,x=o.outShape[1]*o.outShape[2]*o.outShape[3],b=o.outShape[2]*o.outShape[3],w=o.outShape[3];for(let y=0;y<o.batchSize;++y){const C=y*x,$=y*s[0];for(let v=0;v<o.inChannels;++v)for(let k=0;k<o.outHeight;++k){const N=k*i-d,T=Math.max(0,N),I=Math.min(o.inHeight,u+N),E=C+k*b;for(let R=0;R<o.outWidth;++R){const D=R*a-p,F=Math.max(0,D),_=Math.min(o.inWidth,h+D);let P=f,B=0,H=0;for(let Z=T;Z<I;Z+=l){const Q=$+Z*s[1];for(let J=F;J<_;J+=c){const K=Q+J*s[2],Y=n[K+v];r==="max"&&Y>P?P=Y:r==="avg"&&(B+=Y,H++)}if(isNaN(P))break}const G=E+R*w+v;g[G]=r==="avg"?B/H:P}}}return m}function d1(n,e,t,s,o=!1,r=!1){const i=ke(s.outShape,"int32"),a=s.strideHeight,l=s.strideWidth,c=s.dilationHeight,u=s.dilationWidth,h=s.effectiveFilterHeight,d=s.effectiveFilterWidth,p=s.padInfo.top,f=s.padInfo.left,m=ke(e,t,n);for(let g=0;g<s.batchSize;++g)for(let x=0;x<s.inChannels;++x)for(let b=0;b<s.outHeight;++b){const w=b*a-p;let y=w;for(;y<0;)y+=c;const C=Math.min(s.inHeight,h+w);for(let $=0;$<s.outWidth;++$){const v=$*l-f;let k=v;for(;k<0;)k+=u;const N=Math.min(s.inWidth,d+v);let T=Number.NEGATIVE_INFINITY,I=-1;for(let E=y;E<C;E+=c){const R=E-w;for(let D=k;D<N;D+=u){const F=D-v,_=m.get(g,E,D,x);_>T&&(T=_,o?I=r?((g*s.inHeight+E)*s.inWidth+D)*s.inChannels+x:(E*s.inWidth+D)*s.inChannels+x:I=R*d+F)}}i.set(I,g,b,$,x)}}return i}function p1(n,e,t,s,o,r){const i=o.strideDepth,a=o.strideHeight,l=o.strideWidth,c=o.dilationDepth,u=o.dilationHeight,h=o.dilationWidth,d=o.effectiveFilterDepth,p=o.effectiveFilterHeight,f=o.effectiveFilterWidth,m=o.padInfo.front,g=o.padInfo.top,x=o.padInfo.left,b=r==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,w=ke(o.outShape,t),y=w.values,C=o.outShape[1]*o.outShape[2]*o.outShape[3]*o.outShape[4],$=o.outShape[2]*o.outShape[3]*o.outShape[4],v=o.outShape[3]*o.outShape[4],k=o.outShape[4];for(let N=0;N<o.batchSize;++N){const T=N*C,I=N*s[0];for(let E=0;E<o.inChannels;++E)for(let R=0;R<o.outDepth;++R){const D=R*i-m;let F=D;for(;F<0;)F+=c;const _=Math.min(o.inDepth,d+D),P=T+R*$;for(let B=0;B<o.outHeight;++B){const H=B*a-g;let G=H;for(;G<0;)G+=u;const Z=Math.min(o.inHeight,p+H),Q=P+B*v;for(let J=0;J<o.outWidth;++J){const K=J*l-x;let Y=K;for(;Y<0;)Y+=h;const ne=Math.min(o.inWidth,f+K),oe=Q+J*k;let le=b,ae=0,pe=0;for(let Ie=F;Ie<_;Ie+=c){const Le=I+Ie*s[1];for(let Ne=G;Ne<Z;Ne+=u){const Te=Le+Ne*s[2];for(let de=Y;de<ne;de+=h){const $e=Te+de*s[3],Me=n[$e+E];if(r==="max"&&Me>le?le=Me:r==="avg"&&(ae+=Me,pe++),isNaN(le))break}if(isNaN(le))break}if(isNaN(le))break}const ue=oe+E;y[ue]=r==="avg"?ae/Math.max(pe,1):le}}}}return w}function HA(n,e){const t=ke(e.outShape,"int32"),s=e.strideDepth,o=e.strideHeight,r=e.strideWidth,i=e.dilationDepth,a=e.dilationHeight,l=e.dilationWidth,c=e.effectiveFilterDepth,u=e.effectiveFilterHeight,h=e.effectiveFilterWidth,d=e.padInfo.front,p=e.padInfo.top,f=e.padInfo.left;for(let m=0;m<e.batchSize;++m)for(let g=0;g<e.inChannels;++g)for(let x=0;x<e.outDepth;++x){const b=x*s-d;let w=b;for(;w<0;)w+=i;const y=Math.min(e.inDepth,c+b);for(let C=0;C<e.outHeight;++C){const $=C*o-p;let v=$;for(;v<0;)v+=a;const k=Math.min(e.inHeight,u+$);for(let N=0;N<e.outWidth;++N){const T=N*r-f;let I=T;for(;I<0;)I+=l;const E=Math.min(e.inWidth,h+T);let R=Number.NEGATIVE_INFINITY,D=-1;for(let F=w;F<y;F+=i){const _=F-b;for(let P=v;P<k;P+=a){const B=P-$;for(let H=I;H<E;H+=l){const G=H-T,Z=n.get(m,F,P,H,g);Z>=R&&(R=Z,D=_*u*h+B*u+G)}}}t.set(D,m,x,C,N,g)}}}return t}function qA(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e;ce(o,"avgPool");const{filterSize:r,strides:i,pad:a,dimRoundingMode:l}=s,c=1;S(Rt(i,c),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${c}'`);const u=an(o.shape,r,i,c,a,l);let h;if(u.filterWidth===1&&u.filterHeight===1&&_e(u.inShape,u.outShape))h=qn({inputs:{x:o},backend:t});else{const d=t.data.get(o.dataId).values,p=fe(o.shape),f=Gd(d,o.shape,o.dtype,p,u,"avg");h=t.makeTensorInfo(u.outShape,o.dtype,f.values)}return h}const jA={kernelName:oa,backendName:"cpu",kernelFunc:qA};function KA(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{filterSize:r,strides:i,pad:a,dimRoundingMode:l,dataFormat:c}=s;ce(o,"avgPool3d");const u=Qn(o.shape,r,i,1,a,l,c),h=t.data.get(o.dataId).values,d=p1(h,o.shape,o.dtype,fe(o.shape),u,"avg");return t.makeTensorInfo(d.shape,"float32",d.values)}const XA={kernelName:ra,backendName:"cpu",kernelFunc:KA};function YA(n){const{inputs:e,backend:t,attrs:s}=n,{dy:o,input:r}=e,{filterSize:i,strides:a,pad:l,dimRoundingMode:c}=s;ce([o,r],"avgPool3DGrad");const u=Qn(r.shape,i,a,1,l,c),h=u.strideDepth,d=u.strideHeight,p=u.strideWidth,f=u.filterDepth,m=u.filterHeight,g=u.filterWidth,x=u.dilationDepth,b=u.dilationHeight,w=u.dilationWidth,y=u.effectiveFilterDepth,C=u.effectiveFilterHeight,$=u.effectiveFilterWidth,v=y-1-u.padInfo.front,k=$-1-u.padInfo.left,N=C-1-u.padInfo.top,T=ke(r.shape,"float32"),I=1/(f*m*g),E=t.bufferSync(o);for(let R=0;R<u.batchSize;++R)for(let D=0;D<u.inChannels;++D)for(let F=0;F<u.inDepth;++F)for(let _=0;_<u.inHeight;++_)for(let P=0;P<u.inWidth;++P){const B=F-v,H=_-N,G=P-k;let Z=0;for(let Q=0;Q<y;Q+=x){const J=(B+Q)/h;if(!(J<0||J>=u.outDepth||Math.floor(J)!==J))for(let K=0;K<C;K+=b){const Y=(H+K)/d;if(!(Y<0||Y>=u.outHeight||Math.floor(Y)!==Y))for(let ne=0;ne<$;ne+=w){const oe=(G+ne)/p;if(oe<0||oe>=u.outWidth||Math.floor(oe)!==oe)continue;const le=E.get(R,J,Y,oe,D);Z+=le}}}T.set(Z*I,R,F,_,P,D)}return t.makeTensorInfo(T.shape,T.dtype,T.values)}const ZA={kernelName:Xc,backendName:"cpu",kernelFunc:YA};function QA(n){const{inputs:e,backend:t,attrs:s}=n,{dy:o,input:r}=e,i=r;ce([o,r],"avgPoolGrad");const{filterSize:a,strides:l,pad:c}=s,u=an(i.shape,a,l,1,c),h=u.strideHeight,d=u.strideWidth,p=u.filterHeight,f=u.filterWidth,m=u.dilationHeight,g=u.dilationWidth,x=u.effectiveFilterHeight,b=u.effectiveFilterWidth,w=b-1-u.padInfo.left,y=x-1-u.padInfo.top,C=ke(i.shape,"float32"),$=1/(p*f),v=t.data.get(o.dataId).values,k=ke(o.shape,"float32",v);for(let N=0;N<u.batchSize;++N)for(let T=0;T<u.inChannels;++T)for(let I=0;I<u.inHeight;++I)for(let E=0;E<u.inWidth;++E){const R=I-y,D=E-w;let F=0;for(let _=0;_<x;_+=m){const P=(R+_)/h;if(!(P<0||P>=u.outHeight||Math.floor(P)!==P))for(let B=0;B<b;B+=g){const H=(D+B)/d;if(H<0||H>=u.outWidth||Math.floor(H)!==H)continue;const G=k.get(N,P,H,T);F+=G}}C.set(F*$,N,I,E,T)}return t.makeTensorInfo(C.shape,C.dtype,C.values)}const JA={kernelName:Kc,backendName:"cpu",kernelFunc:QA};function eD(n){const{inputs:e,backend:t,attrs:s}=n,{x:o,scale:r,offset:i,mean:a,variance:l}=e;S(a.shape.length===l.shape.length,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),S(i==null||a.shape.length===i.shape.length,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),S(r==null||a.shape.length===r.shape.length,()=>"Batch normalization gradient requires mean and scale to have equal ranks."),ce([o,a,l,r,i],"batchNorm");let{varianceEpsilon:c}=s;c==null&&(c=.001);const u=t.data.get(o.dataId).values,h=t.data.get(a.dataId).values,d=t.data.get(l.dataId).values,p=r?t.data.get(r.dataId).values:new Float32Array([1]),f=i?t.data.get(i.dataId).values:new Float32Array([0]),m=new Float32Array(u.length),g=f.length,x=p.length,b=d.length,w=h.length;let y=0,C=0,$=0,v=0;for(let k=0;k<u.length;++k)m[k]=f[y++]+(u[k]-h[C++])*p[$++]/Math.sqrt(d[v++]+c),y>=g&&(y=0),C>=w&&(C=0),$>=x&&($=0),v>=b&&(v=0);return t.makeTensorInfo(o.shape,o.dtype,m)}const tD={kernelName:ba,backendName:"cpu",kernelFunc:eD};function nD(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{blockShape:r,crops:i}=s;ce([o],"batchToSpaceND");const a=r.reduce((x,b)=>x*b),l=yi(o.shape,r,a),c=wi(l.length,r.length),u=Ci(o.shape,r,a),h=Ph(i,r.length),d=Bh(u,i,r.length),p=qe({inputs:{x:o},backend:t,attrs:{shape:l}}),f=qt({inputs:{x:p},backend:t,attrs:{perm:c}}),m=qe({inputs:{x:f},backend:t,attrs:{shape:u}}),g=fo({inputs:{x:m},backend:t,attrs:{begin:h,size:d}});return t.disposeIntermediateTensorInfo(p),t.disposeIntermediateTensorInfo(f),t.disposeIntermediateTensorInfo(m),g}const sD={kernelName:aa,backendName:"cpu",kernelFunc:nD};function oD(n){const{inputs:e,backend:t,attrs:s}=n,{x:o,weights:r}=e,{size:i}=s,a=t.data.get(o.dataId).values,l=t.data.get(r.dataId).values,c=Bd(a,l,r.dtype,r.shape,i);return t.makeTensorInfo([i],r.dtype,c)}const rD={kernelName:Yc,backendName:"cpu",kernelFunc:oD};function iD(n){const{inputs:e,backend:t}=n,{s0:s,s1:o}=e,r=t.data.get(s.dataId).values,i=t.data.get(o.dataId).values,a=we(Array.from(r),Array.from(i));return t.makeTensorInfo([a.length],"int32",Int32Array.from(a))}const aD={kernelName:Ep,backendName:"cpu",kernelFunc:iD};const lD=Be(br,(n,e)=>{const t=e;return n>t.clipValueMax?t.clipValueMax:n<t.clipValueMin?t.clipValueMin:n}),cD={kernelName:br,backendName:"cpu",kernelFunc:lD};const uD={kernelName:la,backendName:"cpu",kernelFunc:n=>{const{x:e}=n.inputs,t=n.backend,s=new Float32Array(j(e.shape)),o=t.data.get(e.dataId),r=o.complexTensorInfos.real,i=o.complexTensorInfos.imag,a=t.data.get(r.dataId).values,l=t.data.get(i.dataId).values;for(let c=0;c<a.length;c++){const u=a[c],h=l[c];s[c]=Math.hypot(u,h)}return t.makeOutput(s,e.shape,"float32")}};function Xo(n){const{inputs:e,backend:t}=n,{input:s}=e,o=t.data.get(s.dataId).complexTensorInfos.imag,r=t.data.get(o.dataId).values;return t.makeTensorInfo(o.shape,o.dtype,r)}const hD={kernelName:gu,backendName:"cpu",kernelFunc:Xo};function Yo(n){const{inputs:e,backend:t,attrs:s}=n,{axis:o}=s,r=ve(o,e[0].shape)[0],i=e.map(m=>m.shape);Oh(i,r);let a=Pn(e.map(m=>m.shape),r);if(j(a)===0)return t.makeTensorInfo(a,e[0].dtype,[]);const l=e.filter(m=>j(m.shape)>0);if(l.length===1)return qn({inputs:{x:l[0]},backend:t});if(l[0].dtype==="complex64"){const m=l.map(y=>ho({inputs:{input:y},backend:t})),g=l.map(y=>Xo({inputs:{input:y},backend:t})),x=Yo({inputs:m,backend:t,attrs:{axis:r}}),b=Yo({inputs:g,backend:t,attrs:{axis:r}}),w=Zt({inputs:{real:x,imag:b},backend:t});return m.forEach(y=>t.disposeIntermediateTensorInfo(y)),g.forEach(y=>t.disposeIntermediateTensorInfo(y)),t.disposeIntermediateTensorInfo(x),t.disposeIntermediateTensorInfo(b),w}const c=l.map(m=>{const x=[-1,j(m.shape.slice(r))];return qe({inputs:{x:m},backend:t,attrs:{shape:x}})}),u=c.map(m=>({vals:t.data.get(m.dataId).values,shape:m.shape}));a=Pn(c.map(m=>m.shape),1);const h=c[0].shape[0]===1,d=f0(u,a,e[0].dtype,h),p=Pn(l.map(m=>m.shape),r),f=t.makeTensorInfo(p,e[0].dtype,d);return c.forEach(m=>t.disposeIntermediateTensorInfo(m)),f}const dD={kernelName:ca,backendName:"cpu",kernelFunc:Yo};function f1(n){const{inputs:e,backend:t,attrs:s}=n,{x:o,filter:r}=e,{strides:i,pad:a,dataFormat:l,dilations:c,dimRoundingMode:u}=s;ce([o,r],"conv2d");const h=Jn(l),d=$t(o.shape,r.shape,i,c,a,u,!1,h),p=d.filterHeight,f=d.filterWidth,m=d.dilationHeight,g=d.dilationWidth,x=d.padInfo.left,b=d.padInfo.top,w=d.dataFormat==="channelsLast",y=new It(d.outShape,o.dtype),C=fe(o.shape),$=fe(r.shape),v=C[0],k=w?C[1]:C[2],N=w?C[2]:1,T=w?1:C[1],I=y.strides[0],E=w?y.strides[1]:y.strides[2],R=w?y.strides[2]:1,D=w?1:y.strides[1],F=t.data.get(o.dataId).values,_=t.data.get(r.dataId).values,P=y.values;for(let B=0;B<d.batchSize;++B){const H=B*v,G=B*I;for(let Z=0;Z<d.outHeight;++Z){const Q=G+Z*E,J=Z*d.strideHeight-b;for(let K=0;K<p;++K){const Y=J+K*m;if(Y<0||Y>=d.inHeight)continue;const ne=K*$[0],oe=H+Y*k;for(let le=0;le<d.outWidth;++le){const ae=Q+le*R,pe=le*d.strideWidth-x;for(let ue=0;ue<f;++ue){const Ie=pe+ue*g;if(Ie<0||Ie>=d.inWidth)continue;const Le=ne+ue*$[1],Ne=oe+Ie*N;let Te=Le;for(let de=0;de<d.inChannels;++de){const $e=F[Ne+de*T];for(let Me=0;Me<d.outChannels;++Me)P[ae+Me*D]+=$e*_[Te+Me];Te+=d.outChannels}}}}}}return t.makeTensorInfo(y.shape,y.dtype,P)}const pD={kernelName:ua,backendName:"cpu",kernelFunc:f1};function fD(n){const{inputs:e,backend:t,attrs:s}=n,{x:o,dy:r}=e,{strides:i,pad:a,dataFormat:l,dimRoundingMode:c,filterShape:u}=s;ce([o,r],"conv2dBackpropFilter");const h=Jn(l),d=$t(o.shape,u,i,1,a,c,!1,h),{strideHeight:p,strideWidth:f,filterHeight:m,filterWidth:g}=d,x=d.dataFormat==="channelsLast",b=new It(d.filterShape,"float32"),w=d.padInfo.left,y=d.padInfo.top,C=t.data.get(o.dataId).values,$=t.data.get(r.dataId).values,v=new It(o.shape,o.dtype,C),k=new It(r.shape,r.dtype,$);for(let N=0;N<m;++N){const T=Math.max(0,Math.ceil((y-N)/p)),I=Math.min(d.outHeight,(d.inHeight+y-N)/p);for(let E=0;E<g;++E){const R=Math.max(0,Math.ceil((w-E)/f)),D=Math.min(d.outWidth,(d.inWidth+w-E)/f);for(let F=0;F<d.inChannels;++F)for(let _=0;_<d.outChannels;++_){let P=0;for(let B=0;B<d.batchSize;++B)for(let H=T;H<I;++H){const G=N+H*p-y;for(let Z=R;Z<D;++Z){const Q=E+Z*f-w;x?P+=v.get(B,G,Q,F)*k.get(B,H,Z,_):P+=v.get(B,F,G,Q)*k.get(B,_,H,Z)}}b.set(P,N,E,F,_)}}}return t.makeTensorInfo(b.shape,b.dtype,b.values)}const mD={kernelName:Jc,backendName:"cpu",kernelFunc:fD};function gD(n){const{inputs:e,backend:t,attrs:s}=n,{dy:o,filter:r}=e,{inputShape:i,strides:a,pad:l,dataFormat:c,dimRoundingMode:u}=s;ce([o,r],"conv2dBackpropInput");const h=fe(r.shape),d=fe(o.shape);let p=Jn(c);const f=$t(i,r.shape,a,1,l,u,!1,p),m=new It(f.inShape,"float32"),g=m.values,x=t.data.get(o.dataId).values,b=t.data.get(r.dataId).values,[w,y,C]=h,{batchSize:$,filterHeight:v,filterWidth:k,inChannels:N,inHeight:T,inWidth:I,outChannels:E,outHeight:R,outWidth:D,strideHeight:F,strideWidth:_}=f;p=f.dataFormat;const P=v-1-f.padInfo.top,B=k-1-f.padInfo.left,H=p==="channelsLast",G=m.strides[0],Z=H?m.strides[1]:m.strides[2],Q=H?m.strides[2]:1,J=H?1:m.strides[1],K=d[0],Y=H?d[1]:d[2],ne=H?d[2]:1,oe=H?1:d[1];for(let le=0;le<$;++le)for(let ae=0;ae<N;++ae)for(let pe=0;pe<T;++pe){const ue=pe-P,Ie=Math.max(0,Math.ceil(ue/F)),Le=Math.min(R,(v+ue)/F);for(let Ne=0;Ne<I;++Ne){const Te=Ne-B,de=Math.max(0,Math.ceil(Te/_)),$e=Math.min(D,(k+Te)/_);let Me=0;for(let Ve=Ie;Ve<Le;++Ve){const Ct=Ve*F-ue;for(let jt=de;jt<$e;++jt){const as=jt*_-Te,on=K*le+Y*Ve+ne*jt,ls=w*(v-1-Ct)+y*(k-1-as)+C*ae;for(let Fs=0;Fs<E;++Fs){const _s=x[on+oe*Fs],Os=b[ls+Fs];Me+=_s*Os}}}const Je=G*le+Z*pe+Q*Ne+J*ae;g[Je]=Me}}return t.makeTensorInfo(m.shape,m.dtype,m.values)}const xD={kernelName:ha,backendName:"cpu",kernelFunc:gD};function bD(n){const{inputs:e,backend:t,attrs:s}=n,{x:o,filter:r}=e,{strides:i,pad:a,dilations:l}=s;ce([o,r],"conv3d");const c=ms(o.shape,r.shape,i,l,a),{filterDepth:u,filterHeight:h,filterWidth:d,dilationDepth:p,dilationHeight:f,dilationWidth:m,padInfo:g}=c,x=g.front,b=g.left,w=g.top,y=new It(c.outShape,o.dtype),C=t.data.get(o.dataId).values,$=t.data.get(r.dataId).values,v=y.values,k=fe(o.shape),N=fe(r.shape);for(let T=0;T<c.batchSize;++T){const I=T*k[0],E=T*y.strides[0];for(let R=0;R<c.outDepth;++R){const D=E+R*y.strides[1],F=R*c.strideDepth-x;for(let _=0;_<u;++_){const P=F+_*p;if(P<0||P>=c.inDepth)continue;const B=_*N[0],H=I+P*k[1];for(let G=0;G<c.outHeight;++G){const Z=D+G*y.strides[2],Q=G*c.strideHeight-w;for(let J=0;J<h;++J){const K=Q+J*f;if(K<0||K>=c.inHeight)continue;const Y=B+J*N[1],ne=H+K*k[2];for(let oe=0;oe<c.outWidth;++oe){const le=Z+oe*c.outChannels,ae=oe*c.strideWidth-b;for(let pe=0;pe<d;++pe){const ue=ae+pe*m;if(ue<0||ue>=c.inWidth)continue;const Ie=Y+pe*N[2],Le=ne+ue*c.inChannels;let Ne=Ie;for(let Te=0;Te<c.inChannels;++Te){const de=C[Le+Te];for(let $e=0;$e<c.outChannels;++$e)v[le+$e]+=de*$[Ne+$e];Ne+=c.outChannels}}}}}}}}return t.makeTensorInfo(y.shape,y.dtype,y.values)}const yD={kernelName:da,backendName:"cpu",kernelFunc:bD};function wD(n){const{inputs:e,backend:t,attrs:s}=n,{x:o,dy:r}=e,{strides:i,pad:a,filterShape:l}=s;ce([o,r],"conv3dBackpropFilterV2");const c=fe(o.shape),u=fe(r.shape),h=ms(o.shape,l,i,1,a),d=h.strideDepth,p=h.strideHeight,f=h.strideWidth,m=h.filterDepth,g=h.filterHeight,x=h.filterWidth,b=new It(h.filterShape,"float32"),w=b.values,[y,C,$,v]=b.strides,k=t.data.get(r.dataId).values,[N,T,I,E]=u,R=t.data.get(o.dataId).values,[D,F,_,P]=c,B=h.padInfo.front,H=h.padInfo.left,G=h.padInfo.top;for(let Z=0;Z<m;++Z){const Q=Math.max(0,Math.ceil((B-Z)/d)),J=Math.min(h.outDepth,(h.inDepth+B-Z)/d),K=Z*y;for(let Y=0;Y<g;++Y){const ne=Math.max(0,Math.ceil((G-Y)/p)),oe=Math.min(h.outHeight,(h.inHeight+G-Y)/p),le=Y*C+K;for(let ae=0;ae<x;++ae){const pe=Math.max(0,Math.ceil((H-ae)/f)),ue=Math.min(h.outWidth,(h.inWidth+H-ae)/f),Ie=ae*$+le;for(let Le=0;Le<h.inChannels;++Le){const Ne=Le*v+Ie;for(let Te=0;Te<h.outChannels;++Te){let de=0;for(let $e=0;$e<h.batchSize;++$e){const Me=$e*D,Je=$e*N;for(let Ve=Q;Ve<J;++Ve){const jt=(Z+Ve*d-B)*F+Me,as=Ve*T+Je;for(let on=ne;on<oe;++on){const Fs=(Y+on*p-G)*_+jt,_s=on*I+as;for(let Os=pe;Os<ue;++Os){const xp=(ae+Os*f-H)*P+Fs,bp=Os*E+_s;de+=R[xp+Le]*k[bp+Te]}}}}w[Ne+Te]=de}}}}}return t.makeTensorInfo(b.shape,b.dtype,b.values)}const CD={kernelName:eu,backendName:"cpu",kernelFunc:wD};function ID(n){const{inputs:e,backend:t,attrs:s}=n,{dy:o,filter:r}=e,{pad:i,strides:a,inputShape:l}=s;ce([o],"conv3dBackpropInputV2");const c=fe(o.shape),u=fe(r.shape),h=ms(l,r.shape,a,1,i),d=new It(h.inShape,"float32"),p=d.values,[f,m,g,x]=d.strides,b=t.data.get(o.dataId).values,[w,y,C,$]=c,v=t.data.get(r.dataId).values,[k,N,T,I]=u,{batchSize:E,filterDepth:R,filterHeight:D,filterWidth:F,inChannels:_,inDepth:P,inHeight:B,inWidth:H,outChannels:G,outDepth:Z,outHeight:Q,outWidth:J,strideDepth:K,strideHeight:Y,strideWidth:ne}=h,oe=R-1-h.padInfo.front,le=D-1-h.padInfo.top,ae=F-1-h.padInfo.left;for(let pe=0;pe<E;++pe)for(let ue=0;ue<_;++ue)for(let Ie=0;Ie<P;++Ie){const Le=Ie-oe,Ne=Math.max(0,Math.ceil(Le/K)),Te=Math.min(Z,(R+Le)/K);for(let de=0;de<B;++de){const $e=de-le,Me=Math.max(0,Math.ceil($e/Y)),Je=Math.min(Q,(D+$e)/Y);for(let Ve=0;Ve<H;++Ve){const Ct=Ve-ae,jt=Math.max(0,Math.ceil(Ct/ne)),as=Math.min(J,(F+Ct)/ne);let on=0;for(let ls=Ne;ls<Te;++ls){const Fs=ls*K-Le;for(let _s=Me;_s<Je;++_s){const Os=_s*Y-$e;for(let Qi=jt;Qi<as;++Qi){const xp=Qi*ne-Ct,bp=w*pe+y*ls+C*_s+$*Qi,WH=k*(R-1-Fs)+N*(D-1-Os)+T*(F-1-xp)+I*ue;for(let Dc=0;Dc<G;++Dc){const UH=b[bp+Dc],GH=v[WH+Dc];on+=UH*GH}}}}p[f*pe+m*Ie+g*de+x*Ve+ue]=on}}}return t.makeTensorInfo(d.shape,d.dtype,d.values)}const $D={kernelName:tu,backendName:"cpu",kernelFunc:ID};const vD=Be(yr,n=>Math.cos(n)),kD={kernelName:yr,backendName:"cpu",kernelFunc:vD};const SD=Be(wr,n=>Math.cosh(n)),ND={kernelName:wr,backendName:"cpu",kernelFunc:SD};function TD(n){const{inputs:e,backend:t,attrs:s}=n,{image:o,boxes:r,boxInd:i}=e,{cropSize:a,method:l,extrapolationValue:c}=s,[u,h,d,p]=o.shape,f=r.shape[0],[m,g]=a,x=ke([f,m,g,p],"float32"),b=t.data.get(r.dataId).values,w=t.data.get(i.dataId).values,y=t.data.get(o.dataId).values,C=fe(o.shape),$=fe(x.shape);for(let v=0;v<f;v++){const k=v*4,N=b[k],T=b[k+1],I=b[k+2],E=b[k+3],R=w[v];if(R>=u)continue;const D=m>1?(I-N)*(h-1)/(m-1):0,F=g>1?(E-T)*(d-1)/(g-1):0;for(let _=0;_<m;_++){const P=m>1?N*(h-1)+_*D:.5*(N+I)*(h-1);if(P<0||P>h-1){for(let B=0;B<g;B++)for(let H=0;H<p;H++){const G=H+B*$[2]+_*$[1]+v*$[0];x.values[G]=c}continue}if(l==="bilinear"){const B=Math.floor(P),H=Math.ceil(P),G=P-B;for(let Z=0;Z<g;Z++){const Q=g>1?T*(d-1)+Z*F:.5*(T+E)*(d-1);if(Q<0||Q>d-1){for(let ne=0;ne<p;ne++){const oe=ne+Z*$[2]+_*$[1]+v*$[0];x.values[oe]=c}continue}const J=Math.floor(Q),K=Math.ceil(Q),Y=Q-J;for(let ne=0;ne<p;ne++){let oe=ne+J*C[2]+B*C[1]+R*C[0];const le=y[oe];oe=ne+K*C[2]+B*C[1]+R*C[0];const ae=y[oe];oe=ne+J*C[2]+H*C[1]+R*C[0];const pe=y[oe];oe=ne+K*C[2]+H*C[1]+R*C[0];const ue=y[oe],Ie=le+(ae-le)*Y,Le=pe+(ue-pe)*Y;oe=ne+Z*$[2]+_*$[1]+v*$[0],x.values[oe]=Ie+(Le-Ie)*G}}}else for(let B=0;B<g;++B){const H=g>1?T*(d-1)+B*F:.5*(T+E)*(d-1);if(H<0||H>d-1){for(let Q=0;Q<p;Q++){const J=Q+B*$[2]+_*$[1]+v*$[0];x.values[J]=c}continue}const G=Math.round(H),Z=Math.round(P);for(let Q=0;Q<p;Q++){const J=Q+G*C[2]+Z*C[1]+R*C[0],K=Q+B*$[2]+_*$[1]+v*$[0];x.values[K]=y[J]}}}}return t.makeTensorInfo(x.shape,x.dtype,x.values)}const ED={kernelName:su,backendName:"cpu",kernelFunc:TD};function RD(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{axis:r,exclusive:i,reverse:a}=s;ce(o,"cumprod");const l=Ze([r],o.shape.length);let c=o;l!=null&&(c=qt({inputs:{x:o},backend:t,attrs:{perm:l}}));const u=nt(1,o.shape.length)[0];if(u!==c.shape.length-1)throw new Error(`backend.cumprod in CPU expects an inner-most axis=${c.shape.length-1} but got axis=${u}`);const h=Kt(c.dtype,"int32"),d=Vc(j(c.shape),h),p=t.data.get(c.dataId).values,f=c.shape[c.shape.length-1],m=a?(x,b)=>x+f-b-1:(x,b)=>x+b;for(let x=0;x<p.length;x+=f)for(let b=0;b<f;b++){const w=m(x,b);if(b===0)d[w]=i?1:p[w];else{const y=m(x,b-1);d[w]=i?p[y]*d[y]:p[w]*d[y]}}const g=t.makeTensorInfo(c.shape,h,d);if(l!=null){const x=gs(l),b=qt({inputs:{x:g},backend:t,attrs:{perm:x}});return t.disposeIntermediateTensorInfo(g),t.disposeIntermediateTensorInfo(c),b}return g}const AD={kernelName:nu,backendName:"cpu",kernelFunc:RD};function DD(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{axis:r,exclusive:i,reverse:a}=s;ce(o,"cumsum");const l=Ze([r],o.shape.length);let c=o;l!=null&&(c=qt({inputs:{x:o},backend:t,attrs:{perm:l}}));const u=nt(1,o.shape.length)[0];if(u!==c.shape.length-1)throw new Error(`backend.cumsum in CPU expects an inner-most axis=${c.shape.length-1} but got axis=${u}`);const h=Kt(c.dtype,"int32"),d=Et(j(c.shape),h),p=t.data.get(c.dataId).values,f=c.shape[c.shape.length-1],m=a?(x,b)=>x+f-b-1:(x,b)=>x+b;for(let x=0;x<p.length;x+=f)for(let b=0;b<f;b++){const w=m(x,b);if(b===0)d[w]=i?0:p[w];else{const y=m(x,b-1);d[w]=i?p[y]+d[y]:p[w]+d[y]}}const g=t.makeTensorInfo(c.shape,h,d);if(l!=null){const x=gs(l),b=qt({inputs:{x:g},backend:t,attrs:{perm:x}});return t.disposeIntermediateTensorInfo(g),t.disposeIntermediateTensorInfo(c),b}return g}const FD={kernelName:pa,backendName:"cpu",kernelFunc:DD};function _D(n){const{inputs:e,backend:t,attrs:s}=n,{x:o,weights:r}=e,{size:i,binaryOutput:a}=s;if(o.shape.length===1){const l=t.data.get(o.dataId).values,c=t.data.get(r.dataId).values,u=Bd(l,c,r.dtype,r.shape,i);return t.makeTensorInfo([i],r.dtype,u)}else if(o.shape.length===2){const l=t.bufferSync(o),c=t.bufferSync(r),u=h0(l,c,i,a);return t.makeTensorInfo(u.shape,r.dtype,u.values)}throw new Error(`Error in denseBincount: input must be at most rank 2, but got rank${o.shape.length}.`)}const OD={kernelName:ou,backendName:"cpu",kernelFunc:_D};function LD(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{blockSize:r,dataFormat:i}=s;S(i==="NHWC",()=>`Only NHWC dataFormat supported on CPU for depthToSpace. Got ${i}`);const a=o.shape[0],l=o.shape[1],c=o.shape[2],u=o.shape[3],h=l*r,d=c*r,p=u/(r*r),f=t.data.get(o.dataId).values,m=new Float32Array(a*h*d*p);let g=0;for(let x=0;x<a;++x)for(let b=0;b<h;++b){const w=Math.floor(b/r),y=b%r;for(let C=0;C<d;++C){const $=Math.floor(C/r),v=C%r,k=(y*r+v)*p;for(let N=0;N<p;++N){const I=N+k+u*($+c*(w+l*x));m[g++]=f[I]}}}return t.makeTensorInfo([a,h,d,p],o.dtype,m)}const MD={kernelName:ru,backendName:"cpu",kernelFunc:LD};function m1(n){const{inputs:e,backend:t,attrs:s}=n,{x:o,filter:r}=e,{strides:i,pad:a,dilations:l,dimRoundingMode:c}=s;ce([o,r],"depthwiseConv2DNative");const u=fe(o.shape),h=fe(r.shape);let d=l;d==null&&(d=[1,1]),S(Rt(i,d),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${i} and dilations '${d}'`);const p=$t(o.shape,r.shape,i,d,a,c,!0),{filterHeight:f,filterWidth:m,dilationHeight:g,dilationWidth:x,padInfo:b}=p,w=b.left,y=b.top,C=p.outChannels/p.inChannels,$=new It(p.outShape,o.dtype),v=t.data.get(o.dataId).values,k=t.data.get(r.dataId).values,N=$.values;for(let T=0;T<p.batchSize;++T){const I=T*u[0],E=T*$.strides[0];for(let R=0;R<p.outHeight;++R){const D=E+R*$.strides[1],F=R*p.strideHeight-y;for(let _=0;_<f;++_){const P=F+_*g;if(P<0||P>=p.inHeight)continue;const B=_*h[0],H=I+P*u[1];for(let G=0;G<p.outWidth;++G){const Z=D+G*$.strides[2],Q=G*p.strideWidth-w;for(let J=0;J<m;++J){const K=Q+J*x;if(K<0||K>=p.inWidth)continue;const Y=B+J*h[1],ne=H+K*p.inChannels;let oe=Z,le=Y;for(let ae=0;ae<p.inChannels;++ae){const pe=v[ne+ae];for(let ue=0;ue<C;++ue)N[oe+ue]+=pe*k[le+ue];oe+=C,le+=C}}}}}}return t.makeTensorInfo($.shape,$.dtype,$.values)}const PD={kernelName:fa,backendName:"cpu",kernelFunc:m1};function BD(n){const{inputs:e,backend:t,attrs:s}=n,{x:o,dy:r}=e,{strides:i,dilations:a,pad:l,dimRoundingMode:c,filterShape:u}=s;ce([o,r],"depthwiseConv2dNativeBackpropFilter");const h=$t(o.shape,u,i,a,l,c,!0),{strideHeight:d,strideWidth:p,filterHeight:f,filterWidth:m}=h,g=new It(h.filterShape,"float32"),x=h.padInfo.left,b=h.padInfo.top,w=h.outChannels/h.inChannels,y=t.data.get(o.dataId).values,C=new It(o.shape,o.dtype,y),$=t.data.get(r.dataId).values,v=new It(r.shape,r.dtype,$);for(let k=0;k<f;++k){const N=Math.max(0,Math.ceil((b-k)/d)),T=Math.min(h.outHeight,(h.inHeight+b-k)/d);for(let I=0;I<m;++I){const E=Math.max(0,Math.ceil((x-I)/p)),R=Math.min(h.outWidth,(h.inWidth+x-I)/p);for(let D=0;D<h.outChannels;++D){const F=Math.trunc(D/w),_=D%w;let P=0;for(let B=0;B<h.batchSize;++B)for(let H=N;H<T;++H){const G=k+H*d-b;for(let Z=E;Z<R;++Z){const Q=I+Z*p-x;P+=C.get(B,G,Q,F)*v.get(B,H,Z,D)}}g.set(P,k,I,F,_)}}}return t.makeTensorInfo(g.shape,g.dtype,g.values)}const zD={kernelName:iu,backendName:"cpu",kernelFunc:BD};function VD(n){const{inputs:e,backend:t,attrs:s}=n,{dy:o,filter:r}=e,{strides:i,dilations:a,pad:l,dimRoundingMode:c,inputShape:u}=s;ce([o,r],"depthwiseConv2DNativeBackpropInput");const h=fe(o.shape),d=fe(r.shape),p=$t(u,r.shape,i,a,l,c,!0),f=new It(p.inShape,"float32"),m=f.values,[g,x,b]=f.strides,w=t.data.get(o.dataId).values,[y,C,$]=h,v=t.data.get(r.dataId).values,[k,N,T]=d,{batchSize:I,filterHeight:E,filterWidth:R,inChannels:D,inHeight:F,inWidth:_,outChannels:P,outHeight:B,outWidth:H,strideHeight:G,strideWidth:Z}=p,Q=E-1-p.padInfo.top,J=R-1-p.padInfo.left,K=P/D;for(let Y=0;Y<I;++Y)for(let ne=0;ne<D;++ne)for(let oe=0;oe<F;++oe){const le=oe-Q,ae=Math.max(0,Math.ceil(le/G)),pe=Math.min(B,(E+le)/G);for(let ue=0;ue<_;++ue){const Ie=ue-J,Le=Math.max(0,Math.ceil(Ie/Z)),Ne=Math.min(H,(R+Ie)/Z);let Te=0;for(let de=ae;de<pe;++de){const $e=de*G-le;for(let Me=Le;Me<Ne;++Me){const Je=Me*Z-Ie,Ve=y*Y+C*de+$*Me,Ct=k*(E-1-$e)+N*(R-1-Je)+T*ne;for(let jt=0;jt<K;++jt){const as=ne*K+jt,on=w[Ve+as],ls=v[Ct+jt];Te+=on*ls}}}m[g*Y+x*oe+b*ue+ne]=Te}}return t.makeTensorInfo(f.shape,f.dtype,f.values)}const WD={kernelName:au,backendName:"cpu",kernelFunc:VD};function UD(n){const{inputs:e,backend:t}=n,{x:s}=e,o=j(s.shape),r=t.data.get(s.dataId).values,i=ke([o,o],s.dtype),a=i.values;for(let c=0;c<r.length;c++)a[c*o+c]=r[c];const l=[...s.shape,...s.shape];return t.makeTensorInfo(l,i.dtype,i.values)}const GD={kernelName:Rp,backendName:"cpu",kernelFunc:UD};const HD={kernelName:ma,backendName:"cpu",kernelFunc:({inputs:n,backend:e,attrs:t})=>{const{x:s,filter:o}=n,{strides:r,pad:i,dilations:a}=t,l=e,c=l.data.get(s.dataId).values,u=s.shape.length,h=l.data.get(o.dataId).values,d=o.shape.length,{batchSize:p,inHeight:f,inWidth:m,inChannels:g,outHeight:x,outWidth:b,padInfo:w,strideHeight:y,strideWidth:C,filterHeight:$,filterWidth:v,dilationHeight:k,dilationWidth:N,outShape:T}=li(s.shape,o.shape,r,i,"NHWC",a),I=j(T),E=T.length,R=et(s.dtype,I);for(let F=0;F<p;++F)for(let _=0;_<x;++_){const P=_*y-w.top;for(let B=0;B<b;++B){const H=B*C-w.left;for(let G=0;G<g;++G){let Z=Number.MIN_SAFE_INTEGER;for(let J=0;J<$;++J){const K=P+J*k;if(K>=0&&K<f)for(let Y=0;Y<v;++Y){const ne=H+Y*N;if(ne>=0&&ne<m){const oe=An([F,K,ne,G],u,fe(s.shape)),le=An([J,Y,G],d,fe(o.shape)),ae=c[oe]+h[le];ae>Z&&(Z=ae)}}}const Q=An([F,_,B,G],E,fe(T));R[Q]=Z}}}return{dataId:l.write(Bs(R,s.dtype),T,s.dtype),shape:T,dtype:s.dtype}}};const qD={kernelName:cu,backendName:"cpu",kernelFunc:({inputs:n,backend:e,attrs:t})=>{const{x:s,filter:o,dy:r}=n,{strides:i,pad:a,dilations:l}=t,c=e,u=bn(s.shape,c.data.get(s.dataId).values),h=bn(o.shape,c.data.get(o.dataId).values),{batchSize:d,inHeight:p,inWidth:f,inChannels:m,outHeight:g,outWidth:x,padInfo:b,strideHeight:w,strideWidth:y,filterHeight:C,filterWidth:$,dilationHeight:v,dilationWidth:k,outShape:N}=li(s.shape,o.shape,i,a,"NHWC",l);S(r.rank===N.length,()=>`Error in ${cu}, dy must have the same rank as output ${N.length}, but got ${r.rank}`);const T=bn(N,c.data.get(r.dataId).values),I=kp(o.shape,o.dtype);for(let R=0;R<d;++R)for(let D=0;D<g;++D){const F=D*w-b.top;for(let _=0;_<x;++_){const P=_*y-b.left;for(let B=0;B<m;++B){let H=Number.MIN_SAFE_INTEGER,G=0,Z=0;for(let Q=0;Q<C;++Q){const J=F+Q*v;if(J>=0&&J<p)for(let K=0;K<$;++K){const Y=P+K*k;if(Y>=0&&Y<f){const ne=u[R][J][Y][B]+h[Q][K][B];ne>H&&(H=ne,G=Q,Z=K)}}}I[G][Z][B]+=T[R][D][_][B]}}}return{dataId:c.write(Bs(I,s.dtype),o.shape,o.dtype),shape:o.shape,dtype:o.dtype}}};const jD={kernelName:lu,backendName:"cpu",kernelFunc:({inputs:n,backend:e,attrs:t})=>{const{x:s,filter:o,dy:r}=n,{strides:i,pad:a,dilations:l}=t,c=e,u=bn(s.shape,c.data.get(s.dataId).values),h=bn(o.shape,c.data.get(o.dataId).values),{batchSize:d,inHeight:p,inWidth:f,inChannels:m,outHeight:g,outWidth:x,padInfo:b,strideHeight:w,strideWidth:y,filterHeight:C,filterWidth:$,dilationHeight:v,dilationWidth:k,outShape:N}=li(s.shape,o.shape,i,a,"NHWC",l);S(r.rank===N.length,()=>`Error in ${lu}, dy must have the same rank as output ${N.length}, but got ${r.rank}`);const T=bn(N,c.data.get(r.dataId).values),I=kp(s.shape,s.dtype);for(let R=0;R<d;++R)for(let D=0;D<g;++D){const F=D*w-b.top;for(let _=0;_<x;++_){const P=_*y-b.left;for(let B=0;B<m;++B){let H=Number.MIN_SAFE_INTEGER,G=F<0?0:F,Z=P<0?0:P;for(let Q=0;Q<C;++Q){const J=F+Q*v;if(J>=0&&J<p)for(let K=0;K<$;++K){const Y=P+K*k;if(Y>=0&&Y<f){const ne=u[R][J][Y][B]+h[Q][K][B];ne>H&&(H=ne,G=J,Z=Y)}}}I[R][G][Z][B]+=T[R][D][_][B]}}}return{dataId:c.write(Bs(I,s.dtype),s.shape,s.dtype),shape:s.shape,dtype:s.dtype}}};function KD(n){const{inputs:e,backend:t,attrs:s}=n,{image:o}=e,{canvas:r,options:i}=s,{contextOptions:a,imageOptions:l}=i||{},c=(l==null?void 0:l.alpha)||1,u=(a==null?void 0:a.contextType)||"2d";if(u!=="2d")throw new Error(`Context type ${a.contextType} is not supported by the CPU backend.`);const h=r.getContext(u,(a==null?void 0:a.contextAttributes)||{});if(h==null)throw new Error(`Could not get the context with ${u} type.`);const[d,p]=o.shape.slice(0,2),f=o.shape.length===2?1:o.shape[2],m=t.data.get(o.dataId).values,g=o.dtype==="float32"?255:1,x=new Uint8ClampedArray(p*d*4);for(let w=0;w<d*p;++w){const y=[0,0,0,255*c];for(let $=0;$<f;$++){const v=m[w*f+$];if(o.dtype==="float32"){if(v<0||v>1)throw new Error(`Tensor values for a float32 Tensor must be in the range [0 - 1] but encountered ${v}.`)}else if(o.dtype==="int32"&&(v<0||v>255))throw new Error(`Tensor values for a int32 Tensor must be in the range [0 - 255] but encountered ${v}.`);f===1?(y[0]=v*g,y[1]=v*g,y[2]=v*g):y[$]=v*g}const C=w*4;x[C+0]=Math.round(y[0]),x[C+1]=Math.round(y[1]),x[C+2]=Math.round(y[2]),x[C+3]=Math.round(y[3])}r.width=p,r.height=d;const b=new ImageData(x,p,d);return h.putImageData(b,0,0),o}const XD={kernelName:hw,backendName:"cpu",kernelFunc:KD};function Bi(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{axis:r,keepDims:i}=s;ce(o,"sum");let a;o.dtype==="bool"?a=Ts({inputs:{x:o},backend:t,attrs:{dtype:"int32"}}):a=qn({inputs:{x:o},backend:t});const l=a.shape.length,c=ve(r,a.shape),u=Ze(c,l);let h=c,d=a;u!=null&&(d=qt({inputs:{x:a},backend:t,attrs:{perm:u}}),h=nt(h.length,l)),kt("sum",h,d.shape.length);const[p,f]=yt(d.shape,h),m=Kt(d.dtype,"int32");let g=rc(t,p,m);const x=j(f),b=t.data.get(g.dataId).values,w=t.data.get(d.dataId).values;for(let y=0;y<b.length;++y){const C=y*x;let $=0;for(let v=0;v<x;++v)$+=w[C+v];b[y]=$}if(i){const y=at(g.shape,c),C=g;g=qe({inputs:{x:g},backend:t,attrs:{shape:y}}),t.disposeIntermediateTensorInfo(C)}return t.disposeIntermediateTensorInfo(a),u!=null&&t.disposeIntermediateTensorInfo(d),g}const YD={kernelName:Ka,backendName:"cpu",kernelFunc:Bi};function ZD(n){const{inputs:e,backend:t,attrs:s}=n,{equation:o}=s,r=e,{allDims:i,summedDims:a,idDims:l}=Kh(o,r.length);Yh(i.length,l,r);const{path:c,steps:u}=Zh(a,l),h=u.length;let d=null,p=i.length;const f=[];for(let m=0;m<h;++m){for(const g of u[m]){const{permutationIndices:x,expandDims:b}=Xh(p,l[g]);let w;Qh(x)?w=r[g]:(w=qt({inputs:{x:r[g]},backend:t,attrs:{perm:x}}),f.push(w));const y=w.shape.slice();for(let C=0;C<b.length;++C)y.splice(b[C],0,1);_e(w.shape,y)||(w=qe({inputs:{x:w},backend:t,attrs:{shape:y}}),f.push(w)),d===null?d=w:(d=ic({inputs:{a:w,b:d},backend:t}),f.push(d))}m<h-1&&(c[m]>=0&&(d=Bi({inputs:{x:d},backend:t,attrs:{axis:c[m]-(i.length-p),keepDims:!1}}),f.push(d)),p--)}for(const m of f)m!==d&&t.disposeIntermediateTensorInfo(m);return d}const QD={kernelName:uu,backendName:"cpu",kernelFunc:ZD};function JD(n){const{inputs:e,backend:t}=n,{dy:s,y:o}=e;ce([s,o],"eluGrad");const r=new Float32Array(j(o.shape)),i=t.data.get(o.dataId).values,a=t.data.get(s.dataId).values;for(let l=0;l<i.length;++l){const c=i[l];c>=0?r[l]=a[l]:r[l]=a[l]*(c+1)}return t.makeTensorInfo(o.shape,"float32",r)}const eF={kernelName:hu,backendName:"cpu",kernelFunc:JD};const tF=zh,nF=Vh,sF=Wh,oF=Uh,rF=Gh,iF=Hh,aF=Be($r,n=>{const e=Math.sign(n),t=Math.abs(n),s=1/(1+tF*t);return e*(1-((((iF*s+rF)*s+oF)*s+sF)*s+nF)*s*Math.exp(-t*t))}),lF={kernelName:$r,backendName:"cpu",kernelFunc:aF};function cc(n){const{inputs:e,backend:t,attrs:s}=n,{input:o}=e,{dim:r}=s,i=o.shape.length,a=o.shape.slice();let l=r;return r<0&&(S(-(i+1)<=r,()=>`Axis must be in the interval [${-(i+1)}, ${i}]`),l=i+r+1),a.splice(l,0,1),qe({inputs:{x:o},backend:t,attrs:{shape:a}})}const cF={kernelName:xa,backendName:"cpu",kernelFunc:cc};const uF=it((n,e)=>n/e),Hd=xt(Cr,uF),qd={kernelName:Cr,backendName:"cpu",kernelFunc:Hd};function g1(n,e,t){const s=n.shape,o=s[0],r=s[1],i=t.data.get(n.dataId),a=i.complexTensorInfos.real,l=i.complexTensorInfos.imag,c=[o,r],u=j(c),h=Tt("float32",u),d=Tt("float32",u);for(let g=0;g<o;g++){const x=fo({inputs:{x:a},backend:t,attrs:{begin:[g,0],size:[1,r]}}),b=fo({inputs:{x:l},backend:t,attrs:{begin:[g,0],size:[1,r]}}),w=Zt({inputs:{real:x,imag:b},backend:t}),{real:y,imag:C}=hF(w,e,t),$=ss(y,C);for(let v=0;v<r;v++){const k=qh($,v);h[g*r+v]=k.real,d[g*r+v]=k.imag}t.disposeIntermediateTensorInfo(x),t.disposeIntermediateTensorInfo(b),t.disposeIntermediateTensorInfo(w)}const p=t.makeTensorInfo(c,"float32",h),f=t.makeTensorInfo(c,"float32",d),m=Zt({inputs:{real:p,imag:f},backend:t});return t.disposeIntermediateTensorInfo(p),t.disposeIntermediateTensorInfo(f),m}function hF(n,e,t){const s=j(n.shape),o=t.data.get(n.dataId),r=t.data.get(o.complexTensorInfos.real.dataId).values,i=t.data.get(o.complexTensorInfos.imag.dataId).values;if(dF(s)){const a=jd(r,i,s,e,t),l=[n.shape[0],n.shape[1]];if(e){const c=t.makeTensorInfo(l,"float32",a.real),u=t.makeTensorInfo(l,"float32",a.imag),h=t.makeTensorInfo([],"float32",hs(s,"float32")),d=qn({inputs:{x:h},backend:t}),p=qd.kernelFunc({inputs:{a:c,b:h},backend:t}),f=qd.kernelFunc({inputs:{a:u,b:d},backend:t}),m=t.data.get(p.dataId).values,g=t.data.get(f.dataId).values;return t.disposeIntermediateTensorInfo(c),t.disposeIntermediateTensorInfo(u),t.disposeIntermediateTensorInfo(h),t.disposeIntermediateTensorInfo(d),t.disposeIntermediateTensorInfo(p),t.disposeIntermediateTensorInfo(f),{real:m,imag:g}}return a}else{const a=ss(r,i),l=pF(a,s,e);return jm(l)}}function dF(n){return(n&n-1)===0}function jd(n,e,t,s,o){if(t===1)return{real:n,imag:e};const r=ss(n,e),i=t/2,a=Km(r),l=a.real,c=a.imag,u=[l.length],h=o.makeTensorInfo(u,"float32",l),d=o.makeTensorInfo(u,"float32",c),p=Zt({inputs:{real:h,imag:d},backend:o}),f=Xm(r),m=f.real,g=f.imag,x=[m.length],b=o.makeTensorInfo(x,"float32",m),w=o.makeTensorInfo(x,"float32",g),y=Zt({inputs:{real:b,imag:w},backend:o}),C=jd(l,c,i,s,o),$=C.real,v=C.imag,k=[$.length],N=o.makeTensorInfo(k,"float32",$),T=o.makeTensorInfo(k,"float32",v),I=Zt({inputs:{real:N,imag:T},backend:o}),E=jd(m,g,i,s,o),R=E.real,D=E.imag,F=[R.length],_=o.makeTensorInfo(F,"float32",R),P=o.makeTensorInfo(F,"float32",D),B=Zt({inputs:{real:_,imag:P},backend:o}),H=Zm(t,s),G=[H.real.length],Z=o.makeTensorInfo(G,"float32",H.real),Q=o.makeTensorInfo(G,"float32",H.imag),J=Zt({inputs:{real:Z,imag:Q},backend:o}),K=ic({inputs:{a:J,b:B},backend:o}),Y=Ko({inputs:{a:I,b:K},backend:o}),ne=Ud({inputs:{a:I,b:K},backend:o}),oe=ho({inputs:{input:Y},backend:o}),le=ho({inputs:{input:ne},backend:o}),ae=Xo({inputs:{input:Y},backend:o}),pe=Xo({inputs:{input:ne},backend:o}),ue=Yo({inputs:[oe,le],backend:o,attrs:{axis:0}}),Ie=Yo({inputs:[ae,pe],backend:o,attrs:{axis:0}}),Le=o.data.get(ue.dataId).values,Ne=o.data.get(Ie.dataId).values;return o.disposeIntermediateTensorInfo(h),o.disposeIntermediateTensorInfo(d),o.disposeIntermediateTensorInfo(p),o.disposeIntermediateTensorInfo(b),o.disposeIntermediateTensorInfo(w),o.disposeIntermediateTensorInfo(y),o.disposeIntermediateTensorInfo(N),o.disposeIntermediateTensorInfo(T),o.disposeIntermediateTensorInfo(I),o.disposeIntermediateTensorInfo(_),o.disposeIntermediateTensorInfo(P),o.disposeIntermediateTensorInfo(B),o.disposeIntermediateTensorInfo(Z),o.disposeIntermediateTensorInfo(Q),o.disposeIntermediateTensorInfo(J),o.disposeIntermediateTensorInfo(K),o.disposeIntermediateTensorInfo(Y),o.disposeIntermediateTensorInfo(ne),o.disposeIntermediateTensorInfo(oe),o.disposeIntermediateTensorInfo(ae),o.disposeIntermediateTensorInfo(le),o.disposeIntermediateTensorInfo(pe),o.disposeIntermediateTensorInfo(ue),o.disposeIntermediateTensorInfo(Ie),{real:Le,imag:Ne}}function pF(n,e,t){const s=new Float32Array(e*2);for(let o=0;o<e;o++){let r=0,i=0;for(let a=0;a<e;a++){const l=Qm(o*a,e,t),c=qh(n,a);r+=c.real*l.real-c.imag*l.imag,i+=c.real*l.imag+c.imag*l.real}t&&(r/=e,i/=e),Ym(s,r,i,o)}return s}function fF(n){const{inputs:e,backend:t}=n,{input:s}=e,o=j(s.shape),r=s.shape[s.shape.length-1],i=o/r,a=qe({inputs:{x:s},backend:t,attrs:{shape:[i,r]}}),l=g1(a,!1,t),c=qe({inputs:{x:l},backend:t,attrs:{shape:s.shape}});return t.disposeIntermediateTensorInfo(a),t.disposeIntermediateTensorInfo(l),c}const mF={kernelName:du,backendName:"cpu",kernelFunc:fF};function Kd(n){const{backend:e,attrs:t}=n,{shape:s,value:o,dtype:r}=t,i=r||So(o),a=et(i,j(s));return xF(a,o,i),e.makeTensorInfo(s,i,a)}const gF={kernelName:pu,backendName:"cpu",kernelFunc:Kd};function xF(n,e,t){n.fill(e)}const bF={kernelName:fu,backendName:"cpu",kernelFunc:({inputs:n,attrs:e,backend:t})=>{const{image:s}=n,o=t,r=Tt(s.dtype,j(s.shape)),[i,a,l,c]=s.shape,u=o.data.get(s.dataId).values;for(let d=0;d<i;d++){const p=d*l*a*c;for(let f=0;f<a;f++){const m=f*(l*c);for(let g=0;g<l;g++){const x=g*c;for(let b=0;b<c;b++){const w=Math.round(l-g-1),y=p+m+x+b;let C=u[y];if(w>=0&&w<l){const $=w*c,v=p+m+$+b;C=u[v]}r[y]=C}}}}return{dataId:o.write(r,s.shape,s.dtype),shape:s.shape,dtype:s.dtype}}};function yF(n){const{inputs:e,backend:t,attrs:s}=n,{x:o,filter:r,bias:i,preluActivationWeights:a}=e,{strides:l,pad:c,dataFormat:u,dilations:h,dimRoundingMode:d,activation:p,leakyreluAlpha:f}=s;let m=f1({inputs:{x:o,filter:r},backend:t,attrs:{strides:l,pad:c,dataFormat:u,dilations:h,dimRoundingMode:d}});if(i){const g=m;if(u==="NCHW"&&i.shape.length===1&&i.shape[0]!==1){const x=qe({inputs:{x:i},backend:t,attrs:{shape:[i.shape[0],1,1]}});m=Ko({inputs:{a:m,b:x},backend:t}),t.disposeIntermediateTensorInfo(x)}else m=Ko({inputs:{a:m,b:i},backend:t});t.disposeIntermediateTensorInfo(g)}if(p){const g=m;if(u==="NCHW"&&p==="prelu"&&a.shape.length===1&&a.shape[0]!==1){const x=qe({inputs:{x:a},backend:t,attrs:{shape:[a.shape[0],1,1]}});m=lc(t,m,p,x,f),t.disposeIntermediateTensorInfo(x)}else m=lc(t,m,p,a,f);t.disposeIntermediateTensorInfo(g)}return m}const wF={kernelName:nl,backendName:"cpu",kernelFunc:yF};function CF(n){const{inputs:e,backend:t,attrs:s}=n,{x:o,filter:r,bias:i,preluActivationWeights:a}=e,{strides:l,pad:c,dataFormat:u,dilations:h,dimRoundingMode:d,activation:p,leakyreluAlpha:f}=s;let m=m1({inputs:{x:o,filter:r},backend:t,attrs:{strides:l,pad:c,dataFormat:u,dilations:h,dimRoundingMode:d}});if(i){const g=m;m=Ko({inputs:{a:m,b:i},backend:t}),t.disposeIntermediateTensorInfo(g)}if(p){const g=m;m=lc(t,m,p,a,f),t.disposeIntermediateTensorInfo(g)}return m}const IF={kernelName:Xp,backendName:"cpu",kernelFunc:CF};function $F(n){const{inputs:e,backend:t}=n,{params:s,indices:o}=e,r=j(s.shape),i=o.shape,a=i[i.length-1],[l,c,u,h]=Dh(s,o);if(c===0)return t.makeTensorInfo(l,s.dtype,[]);const d=t.data.get(o.dataId).values,p=t.bufferSync(s),f=I0(d,p,s.dtype,c,a,u,h,s.shape,r);return t.makeTensorInfo(l,s.dtype,f.values)}const vF={kernelName:Ap,backendName:"cpu",kernelFunc:$F};function kF(n){const{inputs:e,backend:t,attrs:s}=n,{x:o,indices:r}=e,{axis:i,batchDims:a}=s;ce([o,r],"gatherV2");const l=ve(i,o.shape)[0],c=t.data.get(r.dataId).values,u=o.shape[l];for(let y=0;y<c.length;++y){const C=c[y];S(C<=u-1&&C>=0,()=>`GatherV2: the index value ${C} is not in [0, ${u-1}]`)}let h=a;a==null&&(h=0);const d=j(r.shape),p=dg(o,r,l,h),f=qe({inputs:{x:o},backend:t,attrs:{shape:[p.batchSize,p.outerSize,p.dimSize,p.sliceSize]}}),m=qe({inputs:{x:r},backend:t,attrs:{shape:[p.batchSize,d/p.batchSize]}}),g=[p.batchSize,p.outerSize,d/p.batchSize,p.sliceSize],x=t.bufferSync(m),b=t.bufferSync(f),w=$0(b,x,g);return t.disposeIntermediateTensorInfo(f),t.disposeIntermediateTensorInfo(m),t.makeTensorInfo(p.outputShape,w.dtype,w.values)}const SF={kernelName:ya,backendName:"cpu",kernelFunc:kF};function NF(n){const{inputs:e,backend:t}=n,{input:s}=e,o=j(s.shape),r=s.shape[s.shape.length-1],i=o/r,a=qe({inputs:{x:s},backend:t,attrs:{shape:[i,r]}}),l=g1(a,!0,t),c=qe({inputs:{x:l},backend:t,attrs:{shape:s.shape}});return t.disposeIntermediateTensorInfo(a),t.disposeIntermediateTensorInfo(l),c}const TF={kernelName:mu,backendName:"cpu",kernelFunc:NF};const EF=Be(Rr,n=>Number.isFinite(n)?1:0,"bool"),RF={kernelName:Rr,backendName:"cpu",kernelFunc:EF};const AF=Be(Ar,n=>Math.abs(n)===1/0?1:0,"bool"),DF={kernelName:Ar,backendName:"cpu",kernelFunc:AF};const FF=Be(Dr,n=>Number.isNaN(n)?1:0,"bool"),_F={kernelName:Dr,backendName:"cpu",kernelFunc:FF};function OF(n){const{backend:e,attrs:t}=n,{start:s,stop:o,num:r}=t,i=T0(s,o,r);return e.makeTensorInfo([i.length],"float32",i)}const LF={kernelName:Dp,backendName:"cpu",kernelFunc:OF};const MF=Be(_r,n=>Math.log1p(n)),PF={kernelName:_r,backendName:"cpu",kernelFunc:MF};const BF=it((n,e)=>n&&e),zF=xt(va,BF,null,"bool"),VF={kernelName:va,backendName:"cpu",kernelFunc:zF};const WF=Be(ka,n=>n?0:1,"bool"),UF={kernelName:ka,backendName:"cpu",kernelFunc:WF};const GF=it((n,e)=>n||e),HF=xt(Sa,GF,null,"bool"),qF={kernelName:Sa,backendName:"cpu",kernelFunc:HF};function jF(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{depthRadius:r,bias:i,alpha:a,beta:l}=s;ce(o,"LRN");const c=o.shape[3],u=c-1,h=t.data.get(o.dataId).values,d=j(o.shape),p=new Float32Array(d);function f(m){const g=m%c;let x=m-g+Math.max(0,g-r);const b=m-g+Math.min(g+r,u);let w=0;for(;x<=b;x++){const y=h[x];w+=y*y}return w}for(let m=0;m<d;m++){const g=f(m),x=h[m]*Math.pow(i+a*g,-l);p[m]=x}return t.makeTensorInfo(o.shape,o.dtype,p)}const KF={kernelName:Na,backendName:"cpu",kernelFunc:jF};function XF(n){const{inputs:e,backend:t,attrs:s}=n,{x:o,y:r,dy:i}=e,{depthRadius:a,bias:l,alpha:c,beta:u}=s;ce(i,"LRNGrad");const h=j(i.shape),d=i.shape[3],p=t.data.get(i.dataId).values,f=t.data.get(o.dataId).values,m=t.data.get(r.dataId).values,g=new Float32Array(h),x=h;for(let b=0;b<x;b++){const w=b%d,y=b-w+Math.max(0,w-a),C=b-w+Math.min(d,w+a+1);let $=0;for(let v=y;v<C;v++)$+=Math.pow(f[v],2);$=c*$+l;for(let v=y;v<C;v++){let k=-2*c*u*f[v]*m[b]/$;b===v&&(k+=Math.pow($,-u)),k*=p[b],g[v]+=k}}return t.makeTensorInfo(i.shape,o.dtype,g)}const YF={kernelName:xu,backendName:"cpu",kernelFunc:XF};function x1(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{reductionIndices:r,keepDims:i}=s,a=t;let l=o.shape;const c=l.length,u=ve(r,l);let h=u;const d=Ze(h,c);let p=a.data.get(o.dataId).values;if(d!=null){const y=new Array(c);for(let C=0;C<y.length;C++)y[C]=l[d[C]];p=Vd(p,l,o.dtype,d,y),h=nt(h.length,c),l=y}ce(o,"max"),kt("max",h,c);const[f,m]=yt(l,h),g=j(m),x=R0(p,g,f,o.dtype),b=a.write(x,f,o.dtype);let w=f;return i&&(w=at(f,u)),{dataId:b,shape:w,dtype:o.dtype}}const ZF={kernelName:Ta,backendName:"cpu",kernelFunc:x1};function QF(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e;ce(o,"maxPool");const{filterSize:r,strides:i,pad:a,dimRoundingMode:l}=s,c=1;S(Rt(i,c),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${c}'`);const u=an(o.shape,r,i,c,a,l);let h;if(u.filterWidth===1&&u.filterHeight===1&&_e(u.inShape,u.outShape))h=qn({inputs:{x:o},backend:t});else{const d=t.data.get(o.dataId).values,p=fe(o.shape),f=Gd(d,o.shape,o.dtype,p,u,"max");h=t.makeTensorInfo(u.outShape,o.dtype,f.values)}return h}const JF={kernelName:Ea,backendName:"cpu",kernelFunc:QF};function e_(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{filterSize:r,strides:i,pad:a,dimRoundingMode:l,dataFormat:c}=s;ce(o,"maxPool3d");const u=Qn(o.shape,r,i,1,a,l,c),h=t.data.get(o.dataId).values,d=p1(h,o.shape,o.dtype,fe(o.shape),u,"max");return t.makeTensorInfo(d.shape,"float32",d.values)}const t_={kernelName:Ra,backendName:"cpu",kernelFunc:e_};function n_(n){const{inputs:e,backend:t,attrs:s}=n,{dy:o,input:r}=e,{filterSize:i,strides:a,pad:l,dimRoundingMode:c}=s;ce([o,r],"maxPool3DGrad");const u=Qn(r.shape,i,a,1,l,c),h=t.bufferSync(r),d=HA(h,u),p=u.strideDepth,f=u.strideHeight,m=u.strideWidth,g=u.dilationDepth,x=u.dilationHeight,b=u.dilationWidth,w=u.effectiveFilterDepth,y=u.effectiveFilterHeight,C=u.effectiveFilterWidth,$=w-1-u.padInfo.front,v=C-1-u.padInfo.left,k=y-1-u.padInfo.top,N=ke(r.shape,"float32"),T=t.bufferSync(o);for(let I=0;I<u.batchSize;++I)for(let E=0;E<u.inChannels;++E)for(let R=0;R<u.inDepth;++R)for(let D=0;D<u.inHeight;++D)for(let F=0;F<u.inWidth;++F){const _=R-$,P=D-k,B=F-v;let H=0;for(let G=0;G<w;G+=g){const Z=(_+G)/p;if(!(Z<0||Z>=u.outDepth||Math.floor(Z)!==Z))for(let Q=0;Q<y;Q+=x){const J=(P+Q)/f;if(!(J<0||J>=u.outHeight||Math.floor(J)!==J))for(let K=0;K<C;K+=b){const Y=(B+K)/m;if(Y<0||Y>=u.outWidth||Math.floor(Y)!==Y)continue;const ne=w*y*C-1-d.get(I,Z,J,Y,E),oe=G*y*C+Q*C+K,le=ne===oe?1:0;if(le===0)continue;const ae=T.get(I,Z,J,Y,E);H+=ae*le}}}N.set(H,I,R,D,F,E)}return t.makeTensorInfo(N.shape,N.dtype,N.values)}const s_={kernelName:yu,backendName:"cpu",kernelFunc:n_};function o_(n){const{inputs:e,backend:t,attrs:s}=n,{dy:o,input:r,output:i}=e,a=r;ce([r,i],"maxPoolGrad");const{filterSize:l,strides:c,pad:u,dimRoundingMode:h}=s,d=an(a.shape,l,c,1,u,h),p=t.data.get(a.dataId).values,f=ke(d.outShape,a.dtype,d1(p,a.shape,a.dtype,d).values),m=d.strideHeight,g=d.strideWidth,x=d.dilationHeight,b=d.dilationWidth,w=d.effectiveFilterHeight,y=d.effectiveFilterWidth,C=y-1-d.padInfo.left,$=w-1-d.padInfo.top,v=ke(a.shape,"float32"),k=t.data.get(o.dataId).values,N=ke(o.shape,"float32",k);for(let T=0;T<d.batchSize;++T)for(let I=0;I<d.inChannels;++I)for(let E=0;E<d.inHeight;++E)for(let R=0;R<d.inWidth;++R){const D=E-$,F=R-C;let _=0;for(let P=0;P<w;P+=x){const B=(D+P)/m;if(!(B<0||B>=d.outHeight||Math.floor(B)!==B))for(let H=0;H<y;H+=b){const G=(F+H)/g;if(G<0||G>=d.outWidth||Math.floor(G)!==G)continue;const Z=w*y-1-f.get(T,B,G,I),Q=P*y+H,J=Z===Q?1:0;if(J===0)continue;const K=N.get(T,B,G,I);_+=K*J}}v.set(_,T,E,R,I)}return t.makeTensorInfo(v.shape,v.dtype,v.values)}const r_={kernelName:bu,backendName:"cpu",kernelFunc:o_};function i_(n,e,t,s,o){const r=fe(e),i=Gd(n,e,t,r,o,"max"),a=d1(n,e,t,o,!0,s);return[i.values,a.values]}const a_={kernelName:Fp,backendName:"cpu",kernelFunc:({inputs:n,attrs:e,backend:t})=>{const{x:s}=n,{filterSize:o,strides:r,pad:i,includeBatchInIndex:a}=e,l=t;ce(s,"MaxPoolWithArgmax");const c=l.data.get(s.dataId).values,u=an(s.shape,o,r,[1,1],i),[h,d]=i_(c,s.shape,s.dtype,a,u),p=l.write(h,u.outShape,s.dtype),f=l.write(d,u.outShape,s.dtype);return[{dataId:p,shape:u.outShape,dtype:s.dtype},{dataId:f,shape:u.outShape,dtype:"int32"}]}};function l_(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{axis:r,keepDims:i}=s,a=ve(r,o.shape),c=yt(o.shape,a)[1],u=j(c),h=[],d=t.makeTensorInfo([],"float32",new Float32Array([u]));h.push(d);const p=Ts({inputs:{x:o},backend:t,attrs:{dtype:"float32"}});h.push(p);const f=Hd({inputs:{a:p,b:d},backend:t});h.push(f);const m=Bi({inputs:{x:f},backend:t,attrs:{axis:r,keepDims:i}});return h.forEach(g=>t.disposeIntermediateTensorInfo(g)),m}const c_={kernelName:Aa,backendName:"cpu",kernelFunc:l_};function u_(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{axis:r,keepDims:i}=s;ce(o,"min");const a=ve(r,o.shape);let l=a;const c=Ze(l,o.shape.length);let u=o;c!=null&&(u=qt({inputs:{x:o},backend:t,attrs:{perm:c}}),l=nt(l.length,o.shape.length)),kt("min",l,u.shape.length);const[h,d]=yt(u.shape,l),p=j(d),f=Et(j(h),u.dtype),m=t.data.get(u.dataId).values;for(let x=0;x<f.length;++x){const b=x*p;let w=m[b];for(let y=0;y<p;++y){const C=m[b+y];(Number.isNaN(C)||C<w)&&(w=C)}f[x]=w}c!=null&&t.disposeIntermediateTensorInfo(u);const g=t.makeTensorInfo(h,u.dtype,f);if(i){const x=at(h,a),b=qe({inputs:{x:g},backend:t,attrs:{shape:x}});return t.disposeIntermediateTensorInfo(g),b}return g}const h_={kernelName:Da,backendName:"cpu",kernelFunc:u_};function d_(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{paddings:r,mode:i}=s;ce(o,"mirrorPad");const a=r.map((w,y)=>w[0]+o.shape[y]+w[1]),l=r.map(w=>w[0]),c=r.map((w,y)=>w[0]+o.shape[y]),u=i==="reflect"?0:1,h=t.data.get(o.dataId).values,d=o.shape.length,p=fe(o.shape),f=j(a),m=a.length,g=fe(a),x=Tt(o.dtype,f);for(let w=0;w<f;w++){let y=No(w,m,g);for(let $=0;$<m;$++)y[$]<l[$]?y[$]=l[$]*2-y[$]-u:y[$]>=c[$]&&(y[$]=(c[$]-1)*2-y[$]+u);y=y.map(($,v)=>$-l[v]);const C=An(y,d,p);x[w]=h[C]}return{dataId:t.write(x,a,o.dtype),shape:a,dtype:o.dtype}}const p_={kernelName:Fa,backendName:"cpu",kernelFunc:d_};const f_=it(((n,e)=>{const t=n%e;return n<0&&e<0||n>=0&&e>=0?t:(t+e)%e})),m_=xt(Mr,f_),g_={kernelName:Mr,backendName:"cpu",kernelFunc:m_};function b1(n){const{inputs:e,backend:t,attrs:s}=n,{logits:o}=e,{dim:r}=s,i=o.shape.length;let a=r;if(a===-1&&(a=i-1),a!==i-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${i} and dim was ${a}`);const l=ve([a],o.shape),c=x1({inputs:{x:o},backend:t,attrs:{reductionIndices:l,keepDims:!1}}),u=at(c.shape,l),h=qe({inputs:{x:c},backend:t,attrs:{shape:u}}),d=Ud({inputs:{a:o,b:h},backend:t}),p=b0({inputs:{x:d},backend:t}),f=Bi({inputs:{x:p},backend:t,attrs:{axis:l,keepDims:!1}}),m=qe({inputs:{x:f},backend:t,attrs:{shape:u}}),g=Hd({inputs:{a:p,b:m},backend:t});return t.disposeIntermediateTensorInfo(c),t.disposeIntermediateTensorInfo(h),t.disposeIntermediateTensorInfo(d),t.disposeIntermediateTensorInfo(p),t.disposeIntermediateTensorInfo(f),t.disposeIntermediateTensorInfo(m),g}const x_={kernelName:Za,backendName:"cpu",kernelFunc:b1};function b_(n){const{inputs:e,backend:t,attrs:s}=n,{logits:o}=e,{numSamples:r,seed:i,normalized:a}=s;ce(o,"multinomial");const l=a?o:b1({inputs:{logits:o},backend:t,attrs:{dim:-1}}),c=l.shape[0],u=l.shape[1],h=t.data.get(l.dataId).values,d=[c,r],p=Et(j(d),"int32");for(let f=0;f<c;++f){const m=f*u,g=new Float32Array(u-1);g[0]=h[m];for(let w=1;w<g.length;++w)g[w]=g[w-1]+h[m+w];const x=mh.alea(i.toString()),b=f*r;for(let w=0;w<r;++w){const y=x();p[b+w]=g.length;for(let C=0;C<g.length;C++)if(y<g[C]){p[b+w]=C;break}}}return a||t.disposeIntermediateTensorInfo(l),t.makeTensorInfo(d,"int32",p)}const y_={kernelName:_p,backendName:"cpu",kernelFunc:b_};const w_=Sh;function C_(n){const{inputs:e,backend:t,attrs:s}=n,{boxes:o,scores:r}=e,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l}=s;ce(o,"NonMaxSuppression");const c=t.data.get(o.dataId).values,u=t.data.get(r.dataId).values,{selectedIndices:h}=w_(c,u,i,a,l);return t.makeTensorInfo([h.length],"int32",new Int32Array(h))}const I_={kernelName:wu,backendName:"cpu",kernelFunc:C_};const $_=Nh;function v_(n){const{inputs:e,backend:t,attrs:s}=n,{boxes:o,scores:r}=e,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l,padToMaxOutputSize:c}=s;ce(o,"NonMaxSuppressionPadded");const u=t.data.get(o.dataId).values,h=t.data.get(r.dataId).values,{selectedIndices:d,validOutputs:p}=$_(u,h,i,a,l,c);return[t.makeTensorInfo([d.length],"int32",new Int32Array(d)),t.makeTensorInfo([],"int32",new Int32Array([p]))]}const k_={kernelName:Cu,backendName:"cpu",kernelFunc:v_};const S_=Th;function N_(n){const{inputs:e,backend:t,attrs:s}=n,{boxes:o,scores:r}=e,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l,softNmsSigma:c}=s;ce(o,"NonMaxSuppressionWithScore");const u=t.data.get(o.dataId).values,h=t.data.get(r.dataId).values,d=i,p=a,f=l,m=c,{selectedIndices:g,selectedScores:x}=S_(u,h,d,p,f,m);return[t.makeTensorInfo([g.length],"int32",new Int32Array(g)),t.makeTensorInfo([x.length],"float32",new Float32Array(x))]}const T_={kernelName:Iu,backendName:"cpu",kernelFunc:N_};function E_(n){const{inputs:e,backend:t,attrs:s}=n,{indices:o}=e,{dtype:r,depth:i,onValue:a,offValue:l}=s;ce(o,"oneHot");const c=j(o.shape),u=new Float32Array(c*i);u.fill(l);const h=t.data.get(o.dataId).values;for(let d=0;d<c;++d)h[d]>=0&&h[d]<i&&(u[d*i+h[d]]=a);return t.makeTensorInfo([...o.shape,i],r,u)}const R_={kernelName:Ma,backendName:"cpu",kernelFunc:E_};function uc(n){const{inputs:e,backend:t}=n,{x:s}=e;if(s.dtype==="string")throw new Error("zerosLike is not supported for string tensors");if(s.dtype==="complex64"){const o=ho({inputs:{input:s},backend:t}),r=uc({inputs:{x:o},backend:t}),i=Xo({inputs:{input:s},backend:t}),a=uc({inputs:{x:i},backend:t}),l=Zt({inputs:{real:r,imag:a},backend:t});return t.disposeIntermediateTensorInfo(o),t.disposeIntermediateTensorInfo(r),t.disposeIntermediateTensorInfo(i),t.disposeIntermediateTensorInfo(a),l}else return Kd({backend:t,attrs:{shape:s.shape,value:0,dtype:s.dtype}})}const A_={kernelName:el,backendName:"cpu",kernelFunc:uc};function y1(n){const{inputs:e,backend:t}=n,{x:s}=e;if(s.dtype==="string")throw new Error("onesLike is not supported for string tensors");if(s.dtype==="complex64"){const o=ho({inputs:{input:s},backend:t}),r=y1({inputs:{x:o},backend:t}),i=Xo({inputs:{input:s},backend:t}),a=uc({inputs:{x:i},backend:t}),l=Zt({inputs:{real:r,imag:a},backend:t});return t.disposeIntermediateTensorInfo(o),t.disposeIntermediateTensorInfo(r),t.disposeIntermediateTensorInfo(i),t.disposeIntermediateTensorInfo(a),l}else return Kd({backend:t,attrs:{shape:s.shape,value:1,dtype:s.dtype}})}const D_={kernelName:La,backendName:"cpu",kernelFunc:y1};function w1(n){const{inputs:e,backend:t,attrs:s}=n,{axis:o}=s;if(e.length===1)return cc({inputs:{input:e[0]},backend:t,attrs:{dim:o}});const r=e[0].shape,i=e[0].dtype;e.forEach(u=>{Lc(r,u.shape,"All tensors passed to stack must have matching shapes"),S(i===u.dtype,()=>"All tensors passed to stack must have matching dtypes")});const a=[],l=e.map(u=>{const h=cc({inputs:{input:u},backend:t,attrs:{dim:o}});return a.push(h),h}),c=Yo({inputs:l,backend:t,attrs:{axis:o}});return a.forEach(u=>t.disposeIntermediateTensorInfo(u)),c}const F_={kernelName:Pa,backendName:"cpu",kernelFunc:w1};function __(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{paddings:r,constantValue:i}=s;ce(o,"pad");const a=r.map((b,w)=>b[0]+o.shape[w]+b[1]),l=r.map(b=>b[0]),c=t.data.get(o.dataId).values,u=j(o.shape),h=o.shape.length,d=fe(o.shape),p=j(a),f=a.length,m=fe(a),g=Tt(o.dtype,p);i!==0&&g.fill(i);for(let b=0;b<u;b++){const y=No(b,h,d).map(($,v)=>$+l[v]),C=An(y,f,m);g[C]=c[b]}return{dataId:t.write(g,a,o.dtype),shape:a,dtype:o.dtype}}const C1={kernelName:Ba,backendName:"cpu",kernelFunc:__};const O_=it((n,e)=>Math.pow(n,e)),L_=xt(Br,O_),M_={kernelName:Br,backendName:"cpu",kernelFunc:L_};function P_(n){const{inputs:e,backend:t,attrs:s}=n,{paramsNestedSplits:o,paramsDenseValues:r,indices:i}=e,{outputRaggedRank:a}=s,l=o.map(x=>t.data.get(x.dataId).values),c=o.map(x=>x.shape),u=t.data.get(r.dataId).values,h=t.data.get(i.dataId).values,[d,p,f]=M0(l,c,u,r.shape,r.dtype,h,i.shape),m=d.map(x=>t.makeTensorInfo([x.length],"int32",x)),g=t.makeTensorInfo(f,r.dtype,p);return m.concat([g])}const B_={kernelName:Op,backendName:"cpu",kernelFunc:P_};function z_(n){const{inputs:e,backend:t}=n,{starts:s,limits:o,deltas:r}=e,i=t.data.get(s.dataId).values,a=t.data.get(o.dataId).values,l=t.data.get(r.dataId).values,[c,u]=B0(i,s.shape,s.dtype,a,o.shape,l,r.shape),h=t.makeTensorInfo([c.length],"int32",c),d=t.makeTensorInfo([u.length],s.dtype,u);return[h,d]}const V_={kernelName:Lp,backendName:"cpu",kernelFunc:z_};function W_(n){const{inputs:e,backend:t,attrs:s}=n,{shape:o,values:r,defaultValue:i,rowPartitionTensors:a}=e,{rowPartitionTypes:l}=s,c=t.data.get(o.dataId).values,u=t.data.get(r.dataId).values,h=t.data.get(i.dataId).values,d=a.map(g=>t.data.get(g.dataId).values),p=a.map(g=>g.shape),[f,m]=W0(c,o.shape,u,r.shape,r.dtype,h,i.shape,d,p,l);return t.makeTensorInfo(f,r.dtype,m)}const U_={kernelName:Mp,backendName:"cpu",kernelFunc:W_};function G_(n){const{backend:e,attrs:t}=n,{start:s,stop:o,dtype:r,step:i}=t,a=U0(s,o,i,r);return e.makeTensorInfo([a.length],r,a)}const H_={kernelName:$u,backendName:"cpu",kernelFunc:G_};const q_=Be(zr,n=>1/n),j_={kernelName:zr,backendName:"cpu",kernelFunc:q_};function K_(n){const{inputs:e,backend:t,attrs:s}=n,{images:o}=e,{alignCorners:r,halfPixelCenters:i,size:a}=s;ce(o,"resizeBilinear");const l=fe(o.shape),[c,u]=a,[h,d,p,f]=o.shape,m=t.data.get(o.dataId).values,g=new Float32Array(j([h,c,u,f])),x=[r&&c>1?d-1:d,r&&u>1?p-1:p],b=[r&&c>1?c-1:c,r&&u>1?u-1:u];let w=0;const y=x[0]/b[0],C=x[1]/b[1];for(let $=0;$<h;$++)for(let v=0;v<c;v++){let k;i?k=y*(v+.5)-.5:k=y*v;const N=Math.max(0,Math.floor(k)),T=k-N,I=Math.min(d-1,Math.ceil(k)),E=$*l[0]+N*l[1],R=$*l[0]+I*l[1];for(let D=0;D<u;D++){let F;i?F=C*(D+.5)-.5:F=C*D;const _=Math.max(0,Math.floor(F)),P=F-_,B=Math.min(p-1,Math.ceil(F)),H=E+_*l[2],G=R+_*l[2],Z=E+B*l[2],Q=R+B*l[2];for(let J=0;J<f;J++){const K=m[H+J],Y=m[G+J],ne=m[Z+J],oe=m[Q+J],le=K+(ne-K)*P,ae=Y+(oe-Y)*P,pe=le+(ae-le)*T;g[w++]=pe}}}return t.makeTensorInfo([h,c,u,f],"float32",g)}const X_={kernelName:Ga,backendName:"cpu",kernelFunc:K_};function Y_(n){const{inputs:e,backend:t,attrs:s}=n,{images:o,dy:r}=e,{alignCorners:i}=s;ce([r,o],"resizeBilinearGrad");const a=fe(o.shape),[l,c,u,h]=o.shape,[,d,p]=r.shape,f=new Float32Array(l*c*u*h),m=[i&&d>1?c-1:c,i&&p>1?u-1:u],g=[i&&d>1?d-1:d,i&&p>1?p-1:p],x=m[0]/g[0],b=m[1]/g[1],w=t.data.get(r.dataId).values;let y=0;for(let C=0;C<l;C++){const $=C*a[0];for(let v=0;v<d;v++){const k=v*x,N=Math.floor(k),T=Math.min(Math.ceil(k),c-1),I=$+N*a[1],E=$+T*a[1],R=k-N,D=1-R;for(let F=0;F<p;F++){const _=F*b,P=Math.floor(_),B=Math.min(Math.ceil(_),u-1),H=_-P,G=1-H,Z=I+P*a[2],Q=I+B*a[2],J=E+P*a[2],K=E+B*a[2],Y=D*G,ne=D*H,oe=R*G,le=R*H;for(let ae=0;ae<h;ae++){const pe=w[y++];f[Z+ae]+=pe*Y,f[Q+ae]+=pe*ne,f[J+ae]+=pe*oe,f[K+ae]+=pe*le}}}}return t.makeTensorInfo([l,u,c,h],"float32",f)}const Z_={kernelName:Su,backendName:"cpu",kernelFunc:Y_};function Q_(n){const{inputs:e,backend:t,attrs:s}=n,{images:o}=e,{alignCorners:r,halfPixelCenters:i,size:a}=s;ce(o,"resizeNearestNeighbor");const l=fe(o.shape),[c,u]=a,[h,d,p,f]=o.shape,m=t.data.get(o.dataId).values,g=new Float32Array(h*c*u*f),x=[r&&c>1?d-1:d,r&&u>1?p-1:p],b=[r&&c>1?c-1:c,r&&u>1?u-1:u],w=x[0]/b[0],y=x[1]/b[1];let C=0;for(let $=0;$<h;$++){const v=$*l[0];for(let k=0;k<c;k++){const N=i?w*(k+.5):w*k;let T=Math.min(d-1,r?Math.round(N):Math.floor(N));i&&(T=Math.max(0,T));const I=v+T*l[1];for(let E=0;E<u;E++){const R=i?y*(E+.5):y*E;let D=Math.min(p-1,r?Math.round(R):Math.floor(R));i&&(D=Math.max(0,D));const F=I+D*l[2];for(let _=0;_<f;_++){const P=m[F+_];g[C++]=P}}}}return t.makeTensorInfo([h,c,u,f],o.dtype,g)}const J_={kernelName:Ua,backendName:"cpu",kernelFunc:Q_};function eO(n){const{inputs:e,backend:t,attrs:s}=n,{images:o,dy:r}=e,{alignCorners:i}=s;ce([r,o],"resizeNearestNeighborGrad");const a=fe(o.shape),l=fe(r.shape),[c,u,h,d]=o.shape,[,p,f]=r.shape,m=new Float32Array(c*u*h*d),g=t.data.get(r.dataId).values,x=[i&&p>1?u-1:u,i&&f>1?h-1:h],b=[i&&p>1?p-1:p,i&&f>1?f-1:f],w=x[0]/b[0],y=x[1]/b[1],C=1/w,$=1/y,v=Math.ceil(C)*2+2,k=Math.ceil($)*2+2;for(let N=0;N<c;N++){const T=N*a[0];for(let I=0;I<u;I++){const E=T+I*a[1],R=Math.floor(I*C),D=Math.floor(R-v/2);for(let F=0;F<h;F++){const _=E+F*a[2],P=Math.floor(F*$),B=Math.floor(P-k/2);for(let H=0;H<d;H++){let G=0;for(let Z=0;Z<v;Z++){const Q=Z+D;if(Q<0||Q>=p)continue;const J=T+Q*l[1],K=Q*w,Y=Math.min(u-1,i?Math.round(K):Math.floor(K));if(I===Y)for(let ne=0;ne<k;ne++){const oe=ne+B;if(oe<0||oe>=f)continue;const le=J+oe*l[2],ae=oe*y,pe=Math.min(h-1,i?Math.round(ae):Math.floor(ae));F===pe&&(G+=g[le+H])}}m[_+H]=G}}}}return t.makeTensorInfo(o.shape,o.dtype,m)}const tO={kernelName:ku,backendName:"cpu",kernelFunc:eO};function nO(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{dims:r}=s;ce(o,"reverse");const i=o.shape.length,a=ve(r,o.shape);if(i===0)return qn({inputs:{x:o},backend:t});const l=new It(o.shape,o.dtype),c=t.bufferSync(o);for(let u=0;u<l.size;u++){const h=l.indexToLoc(u),d=h.slice();a.forEach(p=>d[p]=o.shape[p]-1-d[p]),l.set(c.get(...d),...h)}return t.makeTensorInfo(l.shape,l.dtype,l.values)}const sO={kernelName:Ha,backendName:"cpu",kernelFunc:nO};const oO={kernelName:Fu,backendName:"cpu",kernelFunc:({inputs:n,attrs:e,backend:t})=>{const{image:s}=n,{radians:o,fillValue:r,center:i}=e,a=t,l=Tt(s.dtype,j(s.shape)),[c,u,h,d]=s.shape,[p,f]=Mh(i,u,h),m=255,g=Math.sin(o),x=Math.cos(o),b=a.data.get(s.dataId).values;for(let y=0;y<c;y++){const C=y*h*u*d;for(let $=0;$<u;$++){const v=$*(h*d);for(let k=0;k<h;k++){const N=k*d;for(let T=0;T<d;T++){const I=[c,$,k,T],E=I[2],R=I[1];let D=(E-p)*x-(R-f)*g,F=(E-p)*g+(R-f)*x;D=Math.round(D+p),F=Math.round(F+f);let _=r;if(typeof r!="number"&&(T===3?_=m:_=r[T]),D>=0&&D<h&&F>=0&&F<u){const B=F*(h*d),H=D*d,G=C+B+H+T;_=b[G]}const P=C+v+N+T;l[P]=_}}}}return{dataId:a.write(l,s.shape,s.dtype),shape:s.shape,dtype:s.dtype}}};const rO=Be(Ur,n=>{const e=Math.floor(n);return n-e<.5?Math.floor(n):n-e>.5?Math.ceil(n):e%2===0?e:e+1}),iO={kernelName:Ur,backendName:"cpu",kernelFunc:rO};function aO(n){const{inputs:e,backend:t,attrs:s}=n,{indices:o,updates:r}=e,{shape:i}=s,{sliceRank:a,numUpdates:l,sliceSize:c,strides:u,outputSize:h}=no(r,o,i),d=!0,p=t.bufferSync(o),f=t.bufferSync(r),m=po(p,f,i,h,c,l,a,u,0,d);return t.makeTensorInfo(i,m.dtype,m.values)}const lO={kernelName:Pp,backendName:"cpu",kernelFunc:aO};function cO(n,e){let t=0,s=n.length,o=0;for(;t<s;)o=Math.floor((t+s)/2),n[o]<e?t=o+1:s=o;return s}function uO(n,e){let t=0,s=n.length,o=0;for(;t<s;)o=Math.floor((t+s)/2),n[o]<=e?t=o+1:s=o;return s}function hO(n,e,t,s,o,r){const i=et("int32",t*o);for(let a=0;a<t;++a){const l=n.slice(a*s,(a+1)*s),c=a*o;for(let u=0;u<o;++u)i[c+u]=r==="left"?cO(l,e[u+c]):uO(l,e[u+c])}return i}function dO(n){const{inputs:e,backend:t,attrs:s}=n,{sortedSequence:o,values:r}=e,{side:i}=s,a=t.data.get(o.dataId).values,l=t.data.get(r.dataId).values,c=hO(a,l,o.shape[0],o.shape[1],r.shape[1],i);return t.makeTensorInfo(r.shape,"int32",c)}const pO={kernelName:zp,backendName:"cpu",kernelFunc:dO};function fO(n){const{inputs:e,backend:t}=n,{condition:s,t:o,e:r}=e;ce([s,o,r],"select");const i=s.shape.length,a=t.data.get(s.dataId).values,l=t.data.get(o.dataId).values,c=t.data.get(r.dataId).values,u=Kt(o.dtype,r.dtype),h=Et(j(o.shape),u);let d=0;const p=i===0||i>1||o.shape.length===1?1:j(o.shape.slice(1));for(let f=0;f<a.length;f++)for(let m=0;m<p;m++)a[f]===1?h[d++]=l[f]:h[d++]=c[f];return t.makeTensorInfo(o.shape,u,h)}const mO={kernelName:qa,backendName:"cpu",kernelFunc:fO};const gO=Dl,xO=Fl,bO=Be(Hr,n=>n>=0?xO*n:gO*(Math.exp(n)-1)),yO={kernelName:Hr,backendName:"cpu",kernelFunc:bO};const wO=Be(Kr,n=>n<0?-1:n>0?1:0),CO={kernelName:Kr,backendName:"cpu",kernelFunc:wO};const IO=Be(qr,n=>Math.sin(n)),$O={kernelName:qr,backendName:"cpu",kernelFunc:IO};const vO=Be(jr,n=>Math.sinh(n)),kO={kernelName:jr,backendName:"cpu",kernelFunc:vO};const I1=Math.log(11920928955078125e-23)+2,SO=Be(Yr,n=>{const e=n>-I1,t=n<I1,s=Math.exp(n);let o;return t?o=s:e?o=n:o=Math.log(1+s),o}),NO={kernelName:Yr,backendName:"cpu",kernelFunc:SO};function TO(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{blockShape:r,paddings:i}=s;ce([o],"spaceToBatchND");const a=j(r),l=[[0,0]];l.push(...i);for(let $=1+r.length;$<o.shape.length;++$)l.push([0,0]);const c=C1.kernelFunc({inputs:{x:o},backend:t,attrs:{paddings:l,constantValue:0}}),u=yi(c.shape,r,a,!1),h=wi(u.length,r.length,!1),d=Ci(c.shape,r,a,!1),m=qe({inputs:{x:c},backend:t,attrs:{shape:u}}),b=qt({inputs:{x:m},backend:t,attrs:{perm:h}}),C=qe({inputs:{x:b},backend:t,attrs:{shape:d}});return t.disposeIntermediateTensorInfo(c),t.disposeIntermediateTensorInfo(m),t.disposeIntermediateTensorInfo(b),C}const EO={kernelName:Xa,backendName:"cpu",kernelFunc:TO};function RO(n){const{inputs:e,backend:t}=n,{indices:s,values:o,denseShape:r,defaultValue:i}=e;if(r.shape.length!==1)throw new Error(`Dense shape must be a vector, saw:
        ${r.shape}`);if(s.shape.length!==2)throw new Error(`Indices must be a matrix, saw:
        ${s.shape}`);if(o.shape.length!==1)throw new Error(`Values must be a vector, saw:
        ${o.shape}`);if(i.shape.length!==0)throw new Error(`Default value must be a scalar, saw:
        ${i.shape}`);const a=t.data.get(s.dataId).values,l=t.data.get(o.dataId).values,c=t.data.get(r.dataId).values,u=t.data.get(i.dataId).values[0],[h,d,p,f,m]=j0(a,s.shape,s.dtype,l,o.dtype,c,u);return[t.makeTensorInfo(d,s.dtype,h),t.makeTensorInfo([d[0]],o.dtype,p),t.makeTensorInfo([f.length],"bool",new Uint8Array(f.map(g=>Number(g)))),t.makeTensorInfo([m.length],s.dtype,new Int32Array(m))]}const AO={kernelName:Vp,backendName:"cpu",kernelFunc:RO};function DO(n){const{inputs:e,backend:t}=n,{inputIndices:s,inputShape:o,newShape:r}=e;if(s.shape.length!==2)throw new Error(`Input indices should be a matrix but received shape
        ${s.shape}`);if(o.shape.length!==1)throw new Error(`Input shape should be a vector but received shape
        ${o.shape}`);if(r.shape.length!==1)throw new Error(`Target shape should be a vector but received shape ${r.shape}`);const i=Array.from(t.data.get(o.dataId).values),a=t.data.get(s.dataId).values,l=Array.from(t.data.get(r.dataId).values),[c,u,h]=K0(a,s.shape,s.dtype,i,l);return[t.makeTensorInfo(u,s.dtype,c),t.makeTensorInfo([h.length],r.dtype,new Int32Array(h))]}const FO={kernelName:Wp,backendName:"cpu",kernelFunc:DO};function _O(n){const{inputs:e,backend:t}=n,{data:s,indices:o,segmentIds:r}=e;if(s.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(o.shape.length!==1)throw new Error(`Indices should be a vector but received shape
          ${o.shape}`);if(r.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
          ${r.shape}`);if(o.shape[0]!==r.shape[0])throw new Error("segmentIds and indices should have same size.");const i=t.data.get(s.dataId).values,a=t.data.get(o.dataId).values,l=t.data.get(r.dataId).values,[c,u]=Wd(i,s.shape,s.dtype,a,l,!0);return t.makeTensorInfo(u,s.dtype,c)}const OO={kernelName:Up,backendName:"cpu",kernelFunc:_O};function LO(n){const{inputs:e,backend:t}=n,{data:s,indices:o,segmentIds:r}=e;if(s.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(o.shape.length!==1)throw new Error(`Indices should be a vector but received shape
         ${o.shape}`);if(r.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
         ${r.shape}`);if(o.shape[0]!==r.shape[0])throw new Error("segmentIds and indices should have same size.");const i=t.data.get(s.dataId).values,a=t.data.get(o.dataId).values,l=t.data.get(r.dataId).values,[c,u]=Wd(i,s.shape,s.dtype,a,l);return t.makeTensorInfo(u,s.dtype,c)}const MO={kernelName:Gp,backendName:"cpu",kernelFunc:LO};function PO(n){const{inputs:e,backend:t,attrs:s}=n,{sparseIndices:o,sparseValues:r,defaultValue:i}=e,{outputShape:a}=s,{sliceRank:l,numUpdates:c,sliceSize:u,strides:h,outputSize:d}=no(r,o,a),p=!1,f=t.bufferSync(o);let m;switch(r.dtype){case"bool":{const g=t.bufferSync(r),x=!!t.data.get(i.dataId).values[0];m=po(f,g,a,d,u,c,l,h,x,p);break}case"float32":{const g=t.bufferSync(r),x=t.data.get(i.dataId).values[0];m=po(f,g,a,d,u,c,l,h,x,p);break}case"int32":{const g=t.bufferSync(r),x=t.data.get(i.dataId).values[0];m=po(f,g,a,d,u,c,l,h,x,p);break}case"string":{const g=t.bufferSync(r),x=ps(t.data.get(i.dataId).values[0]);m=po(f,g,a,d,u,c,l,h,x,p);break}default:throw new Error(`Unsupported type ${r.dtype}`)}return t.makeTensorInfo(a,m.dtype,m.values)}const BO={kernelName:Hp,backendName:"cpu",kernelFunc:PO};function zO(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{numOrSizeSplits:r,axis:i}=s,a=ve(i,o.shape)[0],l=Jh(o,r,a),c=new Array(o.shape.length).fill(0),u=o.shape.slice();return l.map(h=>{const d=[...u];d[a]=h;const p=fo({inputs:{x:o},backend:t,attrs:{begin:c,size:d}});return c[a]+=h,p})}const VO={kernelName:Ya,backendName:"cpu",kernelFunc:zO};const WO={kernelName:Nu,backendName:"cpu",kernelFunc:({inputs:n,backend:e})=>{const{x:t}=n,s=e;ce(t,"square");const o=s.data.get(t.dataId).values,r=new Float32Array(o.length);for(let a=0;a<o.length;++a){const l=o[a];r[a]=l*l}return{dataId:s.write(r,t.shape,t.dtype),shape:t.shape,dtype:t.dtype}}};const UO=Be(si,(n,e)=>{const t=e;return isNaN(n)?NaN:n>0?1:t.alpha}),GO={kernelName:si,backendName:"cpu",kernelFunc:UO};function HO(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{begin:r,end:i,strides:a,beginMask:l,endMask:c,ellipsisMask:u,newAxisMask:h,shrinkAxisMask:d}=s;ce(o,"stridedSlice");const{finalShapeSparse:p,finalShape:f,isIdentity:m,sliceDim0:g,isSimpleSlice:x,begin:b,end:w,strides:y}=zm(o.shape,r,i,a,l,c,u,h,d);let C;if(m)C=qe({inputs:{x:o},backend:t,attrs:{shape:f}});else if(g||x){S(o.shape.length>=1,()=>`Input must have rank at least 1, got: ${o.shape.length}`);const $=Mm(b,w,y),v=fo({inputs:{x:o},backend:t,attrs:{begin:b,size:$}});C=qe({inputs:{x:v},backend:t,attrs:{shape:f}}),t.disposeIntermediateTensorInfo(v)}else{const $=t.bufferSync(o),v=Z0(p,$,y,b);C=t.makeTensorInfo(f,v.dtype,v.values)}return C}const qO={kernelName:Eu,backendName:"cpu",kernelFunc:HO};function jO(n){const{inputs:e,backend:t,attrs:s}=n,{separator:o,nGramWidths:r,leftPad:i,rightPad:a,padWidth:l,preserveShortSequences:c}=s,{data:u,dataSplits:h}=e,d=t.data.get(u.dataId).values,p=t.data.get(h.dataId).values,[f,m]=Q0(d,p,o,r,i,a,l,c);return[t.makeTensorInfo([f.length],"string",f),t.makeTensorInfo(h.shape,"int32",m)]}const KO={kernelName:qp,backendName:"cpu",kernelFunc:jO};function XO(n){const{inputs:e,backend:t,attrs:s}=n,{skipEmpty:o}=s,{input:r,delimiter:i}=e;if(r.dtype!=="string")throw new Error("Input must be of datatype string");if(r.shape.length!==1)throw new Error(`Input must be a vector, got shape: ${r.shape}`);if(i.shape.length!==0)throw new Error(`Delimiter must be a scalar, got shape: ${i.shape}`);const a=t.data.get(r.dataId).values,l=t.data.get(i.dataId).values[0],[c,u,h]=J0(a,l,o),d=u.length;return[t.makeTensorInfo([d,2],"int32",c),t.makeTensorInfo([d],"string",u),t.makeTensorInfo([2],"int32",new Int32Array(h))]}const YO={kernelName:jp,backendName:"cpu",kernelFunc:XO};function ZO(n){const{inputs:e,backend:t,attrs:s}=n,{numBuckets:o}=s,{input:r}=e;if(r.dtype!=="string")throw new Error("Input must be of datatype string");if(o<=0)throw new Error("Number of buckets must be at least 1");const i=t.data.get(r.dataId).values,a=e1(i,o);return t.makeTensorInfo(r.shape,"int32",a)}const QO={kernelName:Kp,backendName:"cpu",kernelFunc:ZO};const JO=Be(ei,n=>Math.tan(n)),eL={kernelName:ei,backendName:"cpu",kernelFunc:JO};const tL=Be(ti,n=>Math.tanh(n)),nL={kernelName:ti,backendName:"cpu",kernelFunc:tL};function sL(n){const{inputs:e,backend:t}=n,{tensor:s,indices:o,updates:r}=e,{sliceRank:i,numUpdates:a,sliceSize:l,strides:c,outputSize:u}=no(r,o,s.shape),h=!1,d=t.bufferSync(o),p=t.bufferSync(r),f=t.bufferSync(s),m=po(d,p,s.shape,u,l,a,i,c,f,h);return t.makeTensorInfo(s.shape,m.dtype,m.values)}const oL={kernelName:Bp,backendName:"cpu",kernelFunc:sL};function rL(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{reps:r}=s;ce(o,"tile");const i=n1(t.bufferSync(o),r);return t.makeTensorInfo(i.shape,i.dtype,i.values)}const iL={kernelName:ni,backendName:"cpu",kernelFunc:rL};function aL(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{k:r,sorted:i}=s;ce(o,"topk");const a=t.data.get(o.dataId).values,[l,c]=o1(a,o.shape,o.dtype,r,i);return[t.makeTensorInfo(l.shape,l.dtype,l.values),t.makeTensorInfo(c.shape,c.dtype,c.values)]}const lL={kernelName:Ru,backendName:"cpu",kernelFunc:aL};function cL(n){const{inputs:e,attrs:t,backend:s}=n,{image:o,transforms:r}=e,{interpolation:i,fillMode:a,fillValue:l,outputShape:c}=t,[u,h,d,p]=o.shape,[f,m]=c!=null?c:[h,d],g=[u,f,m,p],x=fe(o.shape),b=x[0],w=x[1],y=x[2],C=fe(g),$=C[0],v=C[1],k=C[2],N=Tt(o.dtype,j(g));N.fill(l);const T=s.data.get(o.dataId).values,I=s.data.get(r.dataId).values;for(let R=0;R<u;++R){const D=r.shape[0]===1?I:I.subarray(R*8,R*8+8);for(let F=0;F<f;++F)for(let _=0;_<m;++_)for(let P=0;P<p;++P){let B;const H=D[6]*_+D[7]*F+1;if(H===0)continue;const G=(D[0]*_+D[1]*F+D[2])/H,Z=(D[3]*_+D[4]*F+D[5])/H,Q=$1(G,d,a),J=$1(Z,h,a);switch(i){case"nearest":B=mL(T,h,d,b,w,y,R,J,Q,P,l);break;case"bilinear":B=gL(T,h,d,b,w,y,R,J,Q,P,l);break;default:throw new Error(`Error in Transform: Expect 'nearest' or 'bilinear', but got ${i}`)}const K=R*$+F*v+_*k+P;N[K]=B}return s.makeTensorInfo(g,o.dtype,N)}return{dataId:s.write(N,g,o.dtype),shape:o.shape,dtype:o.dtype}}const uL={kernelName:Au,backendName:"cpu",kernelFunc:cL};function $1(n,e,t){switch(t){case"reflect":return hL(n,e);case"wrap":return dL(n,e);case"nearest":return fL(n,e);default:return pL(n)}}function hL(n,e){let t=n;if(t<0)if(e<=1)t=0;else{const s=2*e;t<s&&(t=s*Math.trunc(-t/s)+t),t=t<-e?t+s:-t-1}else if(t>e-1)if(e<=1)t=0;else{const s=2*e;t-=s*Math.trunc(t/s),t>=e&&(t=s-t-1)}return Ls(0,t,e-1)}function dL(n,e){let t=n;if(t<0)if(e<=1)t=0;else{const s=e-1;t+=e*(Math.trunc(-t/s)+1)}else if(t>e-1)if(e<=1)t=0;else{const s=e-1;t-=e*Math.trunc(t/s)}return Ls(0,t,e-1)}function pL(n,e){return n}function fL(n,e){return Ls(0,n,e-1)}function zi(n,e,t,s,o,r,i,a,l,c,u){const h=i*s+a*o+l*r+c;return 0<=a&&a<e&&0<=l&&l<t?n[h]:u}function mL(n,e,t,s,o,r,i,a,l,c,u){const h=Math.round(a),d=Math.round(l);return zi(n,e,t,s,o,r,i,h,d,c,u)}function gL(n,e,t,s,o,r,i,a,l,c,u){const h=Math.floor(a),d=Math.floor(l),p=h+1,f=d+1,m=(f-l)*zi(n,e,t,s,o,r,i,h,d,c,u)+(l-d)*zi(n,e,t,s,o,r,i,h,f,c,u),g=(f-l)*zi(n,e,t,s,o,r,i,p,d,c,u)+(l-d)*zi(n,e,t,s,o,r,i,p,f,c,u);return(p-a)*m+(a-h)*g}function xL(n){const{inputs:e,attrs:t,backend:s}=n,{axis:o}=t,{x:r}=e;ce(r,"unique");const i=s.data.get(r.dataId).values,{outputValues:a,outputShape:l,indices:c}=r1(i,o,r.shape,r.dtype);return[s.makeTensorInfo(l,r.dtype,a),s.makeTensorInfo([c.length],"int32",c)]}const bL={kernelName:Du,backendName:"cpu",kernelFunc:xL};function yL(n){const{inputs:e,backend:t,attrs:s}=n,{value:o}=e;let{axis:r}=s;r<0&&(r+=o.shape.length);const i=o.shape.length,a=o.shape[r],l=new Array(i-1);let c=0;for(let p=0;p<i;p++)p!==r&&(l[c++]=o.shape[p]);const u=new Array(i).fill(0),h=o.shape.slice();h[r]=1;const d=new Array(a);for(let p=0;p<d.length;p++){u[r]=p;const f=fo({inputs:{x:o},backend:t,attrs:{begin:u,size:h}});d[p]=qe({inputs:{x:f},backend:t,attrs:{shape:l}}),t.disposeIntermediateTensorInfo(f)}return d}const wL={kernelName:Qa,backendName:"cpu",kernelFunc:yL};function CL(n){const{inputs:e,backend:t,attrs:s}=n,{x:o,segmentIds:r}=e,{numSegments:i}=s;ce(o,"unsortedSegmentSum");const a=o.shape.length,l=r.shape.length,c=[],u=[],h=a-l;let d=r;for(let f=0;f<h;++f){const m=cc({inputs:{input:d},backend:t,attrs:{dim:f+1}});d=m,u.push(m)}for(let f=0;f<i;++f){const m=hs(f,"int32"),g=t.makeTensorInfo([],"int32",m),x=g0({inputs:{a:g,b:d},backend:t}),b=Ts({inputs:{x},backend:t,attrs:{dtype:"float32"}}),w=ic({inputs:{a:b,b:o},backend:t}),y=Bi({inputs:{x:w},backend:t,attrs:{axis:0,keepDims:!1}});c.push(y),u.push(g),u.push(x),u.push(b),u.push(w),u.push(y)}const p=w1({inputs:c,backend:t,attrs:{axis:0}});return u.forEach(f=>t.disposeIntermediateTensorInfo(f)),p}const IL={kernelName:Ja,backendName:"cpu",kernelFunc:CL};const $L=[yA,JE,CA,$A,rR,kA,NA,EA,AA,FA,OA,MA,BA,WA,GA,jA,XA,ZA,JA,xA,tD,sD,rD,aR,aD,sR,cR,cD,eR,uD,dD,pD,mD,xD,yD,CD,$D,kD,ND,ED,AD,FD,OD,MD,PD,zD,WD,GD,HD,qD,jD,XD,QD,uA,eF,uR,lF,hR,cF,pR,mF,gF,bF,mR,xR,wF,IF,vF,SF,yR,CR,tR,TF,hD,RF,DF,_F,hA,$R,kR,LF,NR,PF,VF,UF,qF,KF,YF,ZF,ER,JF,t_,s_,r_,a_,c_,h_,AR,p_,g_,y_,FR,OR,I_,k_,T_,MR,R_,D_,F_,C1,M_,pA,zR,B_,V_,U_,H_,nR,qd,j_,fA,mA,gA,X_,Z_,J_,tO,sO,oO,iO,KR,lO,pO,mO,yO,YR,CO,$O,kO,ZR,x_,NO,EO,AO,FO,OO,MO,BO,VO,eA,WO,nA,oA,GO,qO,KO,YO,QO,lA,YD,eL,nL,oL,iL,lL,uL,PR,bL,wL,IL,A_];for(const n of $L)Jp(n);const mo={},hc={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function vL(n,e){mo[n]=e}function En(n,e){if(!(n in mo)||e!=null){const s=SL(n,e);if(s!==null)mo[n]=s;else return console.log("Could not get context for WebGL version",n),null}const t=mo[n];return t==null||t.isContextLost()?(delete mo[n],En(n)):(t.disable(t.DEPTH_TEST),t.disable(t.STENCIL_TEST),t.disable(t.BLEND),t.disable(t.DITHER),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SAMPLE_COVERAGE),t.enable(t.SCISSOR_TEST),t.enable(t.CULL_FACE),t.cullFace(t.BACK),mo[n])}function kL(n){if(!U().getBool("IS_SAFARI")&&typeof OffscreenCanvas!="undefined"&&n===2)return new OffscreenCanvas(300,150);if(typeof document!="undefined")return document.createElement("canvas");throw new Error("Cannot create a canvas in this context")}function SL(n,e){if(n!==1&&n!==2)throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");const t=e==null?kL(n):e;return t.addEventListener("webglcontextlost",s=>{s.preventDefault(),delete mo[n]},!1),U().getBool("SOFTWARE_WEBGL_ENABLED")&&(hc.failIfMajorPerformanceCaveat=!1),n===1?t.getContext("webgl",hc)||t.getContext("experimental-webgl",hc):t.getContext("webgl2",hc)}var Vi;(function(n){n[n.DENSE=0]="DENSE",n[n.SHARED_BATCH=1]="SHARED_BATCH"})(Vi||(Vi={}));var sn;(function(n){n[n.RENDER=0]="RENDER",n[n.UPLOAD=1]="UPLOAD",n[n.PIXELS=2]="PIXELS",n[n.DOWNLOAD=3]="DOWNLOAD"})(sn||(sn={}));var St;(function(n){n[n.UNPACKED_FLOAT16=0]="UNPACKED_FLOAT16",n[n.UNPACKED_FLOAT32=1]="UNPACKED_FLOAT32",n[n.PACKED_4X1_UNSIGNED_BYTE=2]="PACKED_4X1_UNSIGNED_BYTE",n[n.PACKED_2X2_FLOAT32=3]="PACKED_2X2_FLOAT32",n[n.PACKED_2X2_FLOAT16=4]="PACKED_2X2_FLOAT16"})(St||(St={}));function Wi(n,e){return[e,n]}function NL(n,e){return n*e}function dc(n){const e=j(n),t=Math.ceil(e/4);return Mc(t)}function Zo(n,e){return[Math.max(1,Math.ceil(e/2)),Math.max(1,Math.ceil(n/2))]}function TL(n,e){const[t,s]=Zo(n,e);return t*s*4}function Xd(n,e){const t=n;let s,o,r,i,a,l,c,u,h,d;return U().getNumber("WEBGL_VERSION")===2?(s=t.R32F,o=t.R16F,r=t.RGBA16F,i=t.RGBA32F,a=t.RED,c=4,u=1,h=t.HALF_FLOAT,d=t.FLOAT,l=t.RGBA8):(s=n.RGBA,o=n.RGBA,r=n.RGBA,i=t.RGBA,a=n.RGBA,c=4,u=4,h=e!=null?e.HALF_FLOAT_OES:null,d=n.FLOAT,l=n.RGBA),{internalFormatFloat:s,internalFormatHalfFloat:o,internalFormatPackedHalfFloat:r,internalFormatPackedFloat:i,textureFormatFloat:a,downloadTextureFormat:l,downloadUnpackNumChannels:c,defaultNumChannels:u,textureTypeHalfFloat:h,textureTypeFloat:d}}function ie(n,e){const t=e();return U().getBool("DEBUG")&&EL(n),t}function EL(n){const e=n.getError();if(e!==n.NO_ERROR)throw new Error("WebGL Error: "+FL(n,e))}const RL=596e-10,AL=65504;function DL(n){return!!(U().getBool("WEBGL_RENDER_FLOAT32_ENABLED")||n===0||RL<Math.abs(n)&&Math.abs(n)<AL)}function FL(n,e){switch(e){case n.NO_ERROR:return"NO_ERROR";case n.INVALID_ENUM:return"INVALID_ENUM";case n.INVALID_VALUE:return"INVALID_VALUE";case n.INVALID_OPERATION:return"INVALID_OPERATION";case n.INVALID_FRAMEBUFFER_OPERATION:return"INVALID_FRAMEBUFFER_OPERATION";case n.OUT_OF_MEMORY:return"OUT_OF_MEMORY";case n.CONTEXT_LOST_WEBGL:return"CONTEXT_LOST_WEBGL";default:return`Unknown error code ${e}`}}function pc(n,e){return is(n,()=>n.getExtension(e),'Extension "'+e+'" not supported on this browser.')}function _L(n,e){const t=is(n,()=>n.createShader(n.VERTEX_SHADER),"Unable to create vertex WebGLShader.");if(ie(n,()=>n.shaderSource(t,e)),ie(n,()=>n.compileShader(t)),n.getShaderParameter(t,n.COMPILE_STATUS)===!1)throw console.log(n.getShaderInfoLog(t)),new Error("Failed to compile vertex shader.");return t}function OL(n,e){const t=is(n,()=>n.createShader(n.FRAGMENT_SHADER),"Unable to create fragment WebGLShader.");if(ie(n,()=>n.shaderSource(t,e)),ie(n,()=>n.compileShader(t)),U().get("ENGINE_COMPILE_ONLY"))return t;if(n.getShaderParameter(t,n.COMPILE_STATUS)===!1)throw v1(e,n.getShaderInfoLog(t)),new Error("Failed to compile fragment shader.");return t}const LL=/ERROR: [0-9]+:([0-9]+):/g;function v1(n,e){const t=LL.exec(e);if(t==null){console.log(`Couldn't parse line number in error: ${e}`),console.log(n);return}const s=+t[1],o=n.split(`
`),r=o.length.toString().length+2,i=o.map((h,d)=>ko((d+1).toString(),r)+h);let a=0;for(let h=0;h<i.length;h++)a=Math.max(i[h].length,a);const l=i.slice(0,s-1),c=i.slice(s-1,s),u=i.slice(s);console.log(l.join(`
`)),console.log(e.split(`
`)[0]),console.log(`%c ${ko(c[0],a)}`,"border:1px solid red; background-color:#e3d2d2; color:#a61717"),console.log(u.join(`
`))}function ML(n){return is(n,()=>n.createProgram(),"Unable to create WebGLProgram.")}function PL(n,e){if(ie(n,()=>n.linkProgram(e)),!U().get("ENGINE_COMPILE_ONLY")&&n.getProgramParameter(e,n.LINK_STATUS)===!1)throw console.log(n.getProgramInfoLog(e)),new Error("Failed to link vertex and fragment shaders.")}function Yd(n,e){if(ie(n,()=>n.validateProgram(e)),n.getProgramParameter(e,n.VALIDATE_STATUS)===!1)throw console.log(n.getProgramInfoLog(e)),new Error("Shader program validation failed.")}function BL(n,e){const t=is(n,()=>n.createBuffer(),"Unable to create WebGLBuffer");return ie(n,()=>n.bindBuffer(n.ARRAY_BUFFER,t)),ie(n,()=>n.bufferData(n.ARRAY_BUFFER,e,n.STATIC_DRAW)),t}function zL(n,e){const t=is(n,()=>n.createBuffer(),"Unable to create WebGLBuffer");return ie(n,()=>n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t)),ie(n,()=>n.bufferData(n.ELEMENT_ARRAY_BUFFER,e,n.STATIC_DRAW)),t}function VL(n){return is(n,()=>n.createTexture(),"Unable to create WebGLTexture.")}function WL(n,e){const t=U().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(n<=0||e<=0){const s=`[${n}x${e}]`;throw new Error("Requested texture size "+s+" is invalid.")}if(n>t||e>t){const s=`[${n}x${e}]`,o=`[${t}x${t}]`;throw new Error("Requested texture size "+s+" greater than WebGL maximum on this browser / GPU "+o+".")}}function UL(n){return is(n,()=>n.createFramebuffer(),"Unable to create WebGLFramebuffer.")}function k1(n,e,t,s,o,r,i){const a=n.getAttribLocation(e,t);return a===-1?!1:(ie(n,()=>n.bindBuffer(n.ARRAY_BUFFER,s)),ie(n,()=>n.vertexAttribPointer(a,o,n.FLOAT,!1,r,i)),ie(n,()=>n.enableVertexAttribArray(a)),!0)}function GL(n,e,t){XL(n,t),ie(n,()=>n.activeTexture(n.TEXTURE0+t)),ie(n,()=>n.bindTexture(n.TEXTURE_2D,e))}function HL(n,e,t){return is(n,()=>n.getUniformLocation(e,t),'uniform "'+t+'" not present in program.')}function qL(n,e,t){return n.getUniformLocation(e,t)}function jL(n,e,t,s){ie(n,()=>GL(n,e,s)),ie(n,()=>n.uniform1i(t,s))}function Zd(n,e,t){ie(n,()=>n.bindFramebuffer(n.FRAMEBUFFER,t)),ie(n,()=>n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e,0))}function S1(n,e){ie(n,()=>n.bindFramebuffer(n.FRAMEBUFFER,e)),ie(n,()=>n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,null,0))}function fc(n){const e=n.checkFramebufferStatus(n.FRAMEBUFFER);if(e!==n.FRAMEBUFFER_COMPLETE)throw new Error("Error binding framebuffer: "+KL(n,e))}function KL(n,e){switch(e){case n.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case n.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case n.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case n.FRAMEBUFFER_UNSUPPORTED:return"FRAMEBUFFER_UNSUPPORTED";default:return`unknown error ${e}`}}function is(n,e,t){const s=ie(n,()=>e());if(s==null)throw new Error(t);return s}function XL(n,e){const t=n.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,s=e+n.TEXTURE0;if(s<n.TEXTURE0||s>t){const o=`[gl.TEXTURE0, gl.TEXTURE${t}]`;throw new Error(`textureUnit must be in ${o}.`)}}function Qo(n,e=2){return j(n.slice(0,n.length-e))}function Jo(n){if(n.length===0)throw Error("Cannot get rows and columns of an empty shape array.");return[n.length>1?n[n.length-2]:1,n[n.length-1]]}function mc(n){let e=[1,1,1];return n.length===0||n.length===1&&n[0]===1||(e=[Qo(n),...Jo(n)]),e}function YL(n,e=!1){let t=U().getNumber("WEBGL_MAX_TEXTURE_SIZE"),s=U().getNumber("WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE");s===1/0&&U().getBool("WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE")&&(s=t/2),e&&(t=t*2,s=s*2,n=n.map((a,l)=>l>=n.length-2?xn(n[l]):n[l]),n.length===1&&(n=[2,n[0]])),n.length!==2&&(n=cs(n).newShape);let o=j(n),r=null;n.length<=1&&o<=t?r=[1,o]:n.length===2&&n[0]<=t&&n[1]<=t?r=n:n.length===3&&n[0]*n[1]<=t&&n[2]<=t?r=[n[0]*n[1],n[2]]:n.length===3&&n[0]<=t&&n[1]*n[2]<=t?r=[n[0],n[1]*n[2]]:n.length===4&&n[0]*n[1]*n[2]<=t&&n[3]<=t?r=[n[0]*n[1]*n[2],n[3]]:n.length===4&&n[0]<=t&&n[1]*n[2]*n[3]<=t&&(r=[n[0],n[1]*n[2]*n[3]]);const i=r!=null&&Math.max(...r)>s&&Math.min(...r)<=(e?2:1)&&Math.min(...r)>0;if(r==null||i)if(e){const a=Qo(n);let l=2,c=2;n.length&&([l,c]=Jo(n)),o=a*(l/2)*(c/2),r=Mc(o).map(u=>u*2)}else r=Mc(o);return r}function gc(n){return n%2===0}function xc(n,e){if(n=n.slice(-2),e=e.slice(-2),_e(n,e)||!n.length||!e.length||n[0]===0||n[1]===0||e[0]===0||e[1]===0)return!0;if(n.length!==e.length){const t=n[n.length-1],s=e[e.length-1];if(t===s||gc(t)&&gc(s)&&(n[0]===1||e[0]===1))return!0}return n[1]===e[1]&&gc(n[0])&&gc(e[0])}let Qd,Jd;function ZL(n){if(Qd==null){const e=En(n);Qd=e.getParameter(e.MAX_TEXTURE_SIZE)}return Qd}function QL(n){if(Jd==null){const e=En(n);Jd=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,Jd)}function JL(n){if(n===0)return 0;let e;const t=En(n);return mn(t,"EXT_disjoint_timer_query_webgl2")&&n===2?e=2:mn(t,"EXT_disjoint_timer_query")?e=1:e=0,e}function mn(n,e){return n.getExtension(e)!=null}function N1(n){try{if(En(n)!=null)return!0}catch(e){return console.log("Error when getting WebGL context: ",e),!1}return!1}function eM(n){if(n===0)return!1;const e=En(n);if(n===1){if(!mn(e,"OES_texture_float"))return!1}else if(!mn(e,"EXT_color_buffer_float"))return!1;return ep(e)}function tM(n){if(n===0)return!1;const e=En(n);if(n===1){if(!mn(e,"OES_texture_float")||!mn(e,"WEBGL_color_buffer_float"))return!1}else{if(mn(e,"EXT_color_buffer_float"))return ep(e);const s="EXT_color_buffer_half_float";if(mn(e,s)){const o=e.getExtension(s);return nM(e,o)}return!1}return ep(e)}function ep(n){const e=Xd(n),t=n.createTexture();n.bindTexture(n.TEXTURE_2D,t),n.texImage2D(n.TEXTURE_2D,0,e.internalFormatFloat,1,1,0,e.textureFormatFloat,e.textureTypeFloat,null);const r=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,r),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,t,0);const i=n.checkFramebufferStatus(n.FRAMEBUFFER)===n.FRAMEBUFFER_COMPLETE;return n.bindTexture(n.TEXTURE_2D,null),n.bindFramebuffer(n.FRAMEBUFFER,null),n.deleteTexture(t),n.deleteFramebuffer(r),i}function nM(n,e){const t=Xd(n,e),s=n.createTexture();n.bindTexture(n.TEXTURE_2D,s),n.texImage2D(n.TEXTURE_2D,0,t.internalFormatHalfFloat,1,1,0,t.textureFormatFloat,t.textureTypeHalfFloat,null);const i=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,i),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,s,0);const a=n.checkFramebufferStatus(n.FRAMEBUFFER)===n.FRAMEBUFFER_COMPLETE;return n.bindTexture(n.TEXTURE_2D,null),n.bindFramebuffer(n.FRAMEBUFFER,null),n.deleteTexture(s),n.deleteFramebuffer(i),a}function sM(n){return n!==2?!1:En(n).fenceSync!=null}function Ui(n,e){Array.isArray(n)||(n=[n]),n.forEach(t=>{t!=null&&S(t.dtype!=="complex64",()=>`${e} does not support complex64 tensors in the WebGL backend.`)})}const he=U();he.registerFlag("HAS_WEBGL",()=>he.getNumber("WEBGL_VERSION")>0),he.registerFlag("WEBGL_VERSION",()=>N1(2)?2:N1(1)?1:0),he.registerFlag("WEBGL_CHECK_NUMERICAL_PROBLEMS",()=>!1),he.registerFlag("WEBGL_BUFFER_SUPPORTED",()=>he.get("WEBGL_VERSION")===2),he.registerFlag("WEBGL_CPU_FORWARD",()=>!0),he.registerFlag("WEBGL_FORCE_F16_TEXTURES",()=>!1),he.registerFlag("WEBGL_PACK",()=>he.getBool("HAS_WEBGL")),he.registerFlag("WEBGL_PACK_NORMALIZATION",()=>he.getBool("WEBGL_PACK")),he.registerFlag("WEBGL_PACK_CLIP",()=>he.getBool("WEBGL_PACK")),he.registerFlag("WEBGL_PACK_DEPTHWISECONV",()=>he.getBool("WEBGL_PACK")),he.registerFlag("WEBGL_PACK_BINARY_OPERATIONS",()=>he.getBool("WEBGL_PACK")),he.registerFlag("WEBGL_PACK_UNARY_OPERATIONS",()=>he.getBool("WEBGL_PACK")),he.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS",()=>he.getBool("WEBGL_PACK")),he.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS",()=>he.getBool("WEBGL_PACK")),he.registerFlag("WEBGL_PACK_REDUCE",()=>he.getBool("WEBGL_PACK")),he.registerFlag("WEBGL_LAZILY_UNPACK",()=>he.getBool("WEBGL_PACK")),he.registerFlag("WEBGL_CONV_IM2COL",()=>he.getBool("WEBGL_PACK")),he.registerFlag("WEBGL_PACK_CONV2DTRANSPOSE",()=>he.getBool("WEBGL_PACK")),he.registerFlag("WEBGL_MAX_TEXTURE_SIZE",()=>ZL(he.getNumber("WEBGL_VERSION"))),he.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER",()=>QL(he.getNumber("WEBGL_VERSION"))),he.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",()=>{const n=he.getNumber("WEBGL_VERSION");return n===0?0:JL(n)}),he.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",()=>he.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&!bf()),he.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE",()=>eM(he.getNumber("WEBGL_VERSION"))),he.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED",()=>he.getBool("WEBGL_FORCE_F16_TEXTURES")?!1:he.getBool("WEBGL_RENDER_FLOAT32_CAPABLE")),he.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED",()=>tM(he.getNumber("WEBGL_VERSION"))),he.registerFlag("WEBGL_FENCE_API_ENABLED",()=>sM(he.getNumber("WEBGL_VERSION"))),he.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM",()=>he.getBool("WEBGL_RENDER_FLOAT32_ENABLED")?4:0),he.registerFlag("WEBGL_DELETE_TEXTURE_THRESHOLD",()=>-1,n=>{if(typeof n!="number")throw new Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be a number but got ${n}.`);if(n<0&&n!==-1)throw new Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be -1 (indicating never delete) or at least 0, but got ${n}.`)}),he.registerFlag("WEBGL_FLUSH_THRESHOLD",()=>bf()?1:-1,n=>{if(typeof n!="number")throw new Error(`WEBGL_FLUSH_THRESHOLD must be a number but got ${n}.`);if(n<0&&n!==-1)throw new Error(`WEBGL_FLUSH_THRESHOLD must be -1 (indicating never manual flush) or at least 0, but got ${n}.`)}),he.registerFlag("CPU_HANDOFF_SIZE_THRESHOLD",()=>128),he.registerFlag("WEBGL_USE_SHAPES_UNIFORMS",()=>!1),he.registerFlag("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD",()=>1e5),he.registerFlag("TOPK_K_CPU_HANDOFF_THRESHOLD",()=>128),he.registerFlag("WEBGL_EXP_CONV",()=>!1),he.registerFlag("SOFTWARE_WEBGL_ENABLED",()=>he.getBool("IS_TEST")),he.registerFlag("WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE",()=>1/0),he.registerFlag("WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE",()=>!1),he.registerFlag("WEBGL2_ISNAN_CUSTOM",()=>!1),he.registerFlag("ENGINE_COMPILE_ONLY",()=>!1);function Mt(){let n,e,t,s,o,r,i,a,l,c;return U().getNumber("WEBGL_VERSION")===2?(n="#version 300 es",e="in",t="out",s="in",o="texture",r="outputColor",i="out vec4 outputColor;",a=U().getBool("WEBGL2_ISNAN_CUSTOM")?`
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
    `):(n="",e="attribute",t="varying",s="varying",o="texture2D",r="gl_FragColor",i="",a=`
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
    `),{version:n,attribute:e,varyingVs:t,varyingFs:s,texture2D:o,output:r,defineOutput:i,defineSpecialNaN:a,defineSpecialInf:l,defineRound:c}}function go(n,e,t="index"){const s=fe(e);return s.map((o,r)=>{const i=`int ${n[r]} = ${t} / ${o}`,a=r===s.length-1?`int ${n[r+1]} = ${t} - ${n[r]} * ${o}`:`index -= ${n[r]} * ${o}`;return`${i}; ${a};`}).join("")}function bc(n,e,t="index"){const s=fe(e);return s.map((o,r)=>{const i=`int ${n[r]} = ${t} / outShapeStrides[${r}]`,a=r===s.length-1?`int ${n[r+1]} = ${t} - ${n[r]} * outShapeStrides[${r}]`:`index -= ${n[r]} * outShapeStrides[${r}]`;return`${i}; ${a};`}).join("")}function oM(n,e){const t=n.length,s=n.map(r=>`${e}[${r}]`),o=new Array(t-1);o[t-2]=s[t-1];for(let r=t-3;r>=0;--r)o[r]=`(${o[r+1]} * ${s[r+1]})`;return o}function rM(n,e,t="index"){const s=n.map((r,i)=>i),o=oM(s,e);return o.map((r,i)=>{const a=`int ${n[i]} = ${t} / ${o[i]}`,l=i===o.length-1?`int ${n[i+1]} = ${t} - ${n[i]} * ${o[i]}`:`index -= ${n[i]} * ${o[i]}`;return`${a}; ${l};`}).join("")}function tp(n){const e=fe(n).map(t=>t.toString());return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * ${e[0]} + coords.y * ${e[1]} + coords.z;
  }
`}function np(){return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * outShapeStrides[0] + coords.y * outShapeStrides[1] + coords.z;
  }
`}const T1=`
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
`;const{getBroadcastDims:E1}=ZS;function iM(n,e,t){const s=[];if(n.forEach(p=>{const f=j(p.shapeInfo.logicalShape);if(p.shapeInfo.isUniform?s.push(`uniform float ${p.name}${f>1?`[${f}]`:""};`):(s.push(`uniform sampler2D ${p.name};`),s.push(`uniform int offset${p.name};`)),t.enableShapeUniforms){const{uniformShape:m}=sp(t.packedInputs,p.shapeInfo.logicalShape,p.shapeInfo.texShape);switch(m.length){case 1:s.push(`uniform int ${p.name}Shape;`);break;case 2:s.push(`uniform ivec2 ${p.name}Shape;`);break;case 3:s.push(`uniform ivec3 ${p.name}Shape;`);break;case 4:s.push(`uniform ivec4 ${p.name}Shape;`);break}s.push(`uniform ivec2 ${p.name}TexShape;`)}}),t.enableShapeUniforms){switch(e.logicalShape.length){case 1:s.push("uniform int outShape;");break;case 2:s.push("uniform ivec2 outShape;"),s.push("uniform int outShapeStrides;");break;case 3:s.push("uniform ivec3 outShape;"),s.push("uniform ivec2 outShapeStrides;");break;case 4:s.push("uniform ivec4 outShape;"),s.push("uniform ivec3 outShapeStrides;");break}s.push("uniform ivec2 outTexShape;")}t.customUniforms&&t.customUniforms.forEach(p=>{s.push(`uniform ${p.type} ${p.name}${p.arrayIndex?`[${p.arrayIndex}]`:""};`)});const o=s.join(`
`),r=n.map(p=>aM(p,e,t.packedInputs,t.enableShapeUniforms)).join(`
`),i=e.texShape,a=Mt(),l=uM(a);let c,u,h=pM(a);return e.isPacked?(c=lM(e.logicalShape,i,t.enableShapeUniforms),u=dM(a)):(c=cM(e.logicalShape,i,t.enableShapeUniforms),u=hM(a)),t.packedInputs&&(h+=xM),[h,l,u,o,c,r,t.userCode].join(`
`)}function er(n,e=!1){const t=n.shapeInfo.logicalShape;switch(t.length){case 0:return EM(n,e);case 1:return AM(n,e);case 2:return FM(n,e);case 3:return OM(n,e);case 4:return MM(n,e);case 5:return PM(n);case 6:return BM(n);default:throw new Error(`${t.length}-D input sampling is not yet supported`)}}function R1(n,e){switch(n.shapeInfo.logicalShape.length){case 0:return TM(n);case 1:return RM(n,e);case 2:return DM(n,e);case 3:return _M(n,e);default:return LM(n,e)}}function aM(n,e,t=!1,s){let o="";t?o+=R1(n,s):o+=er(n,s);const r=n.shapeInfo.logicalShape,i=e.logicalShape;return r.length<=i.length&&(t?o+=zM(n,e):o+=VM(n,e)),o}function lM(n,e,t){switch(n.length){case 0:return A1();case 1:return bM(n,e,t);case 2:return SM(n,e,t);case 3:return wM(n,e,t);default:return IM(n,e,t)}}function cM(n,e,t){switch(n.length){case 0:return A1();case 1:return yM(n,e,t);case 2:return NM(n,e,t);case 3:return CM(n,e,t);case 4:return $M(n,e,t);case 5:return vM(n,e);case 6:return kM(n,e);default:throw new Error(`${n.length}-D output sampling is not yet supported`)}}function uM(n){return`
    float sampleTexture(sampler2D textureSampler, vec2 uv) {
      return ${n.texture2D}(textureSampler, uv).r;
    }
  `}function hM(n){return`
    void setOutput(float val) {
      ${n.output} = vec4(val, 0, 0, 0);
    }
  `}function dM(n){return`
    void setOutput(vec4 val) {
      ${n.output} = val;
    }
  `}function pM(n){return`${n.version}
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

    ${fM}
    ${mM}
    ${gM}
  `}const fM=`
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
`,mM=`
vec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,
  int texNumC, int row, int col) {
  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,gM=`
vec2 packedUVfrom3D(int texNumR, int texNumC,
    int texelsInBatch, int texelsInLogicalRow, int b,
    int row, int col) {
  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,xM=`
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
`;function A1(){return`
    int getOutputCoords() {
      return 0;
    }
  `}function bM(n,e,t){const s=[Math.ceil(e[0]/2),Math.ceil(e[1]/2)];return s[0]===1?t?`
      int getOutputCoords() {
        return 2 * int(resultUV.x * ceil(float(outTexShape[1]) / 2.0));
      }
    `:`
      int getOutputCoords() {
        return 2 * int(resultUV.x * ${s[1]}.0);
      }
    `:s[1]===1?t?`
      int getOutputCoords() {
        return 2 * int(resultUV.y * ceil(float(outTexShape[0]) / 2.0));
      }
    `:`
      int getOutputCoords() {
        return 2 * int(resultUV.y * ${s[0]}.0);
      }
    `:t?`
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
  `}function yM(n,e,t){return e[0]===1?t?`
      int getOutputCoords() {
        return int(resultUV.x * float(outTexShape[1]));
      }
    `:`
      int getOutputCoords() {
        return int(resultUV.x * ${e[1]}.0);
      }
    `:e[1]===1?t?`
      int getOutputCoords() {
        return int(resultUV.y * float(outTexShape[0]));
      }
    `:`
      int getOutputCoords() {
        return int(resultUV.y * ${e[0]}.0);
      }
    `:t?`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(outTexShape[0], outTexShape[1]));
      return resTexRC.x * outTexShape[1] + resTexRC.y;
    }
  `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${e[0]}, ${e[1]}));
      return resTexRC.x * ${e[1]} + resTexRC.y;
    }
  `}function wM(n,e,t){if(t)return`
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
  `;const s=[Math.ceil(e[0]/2),Math.ceil(e[1]/2)],o=Math.ceil(n[2]/2),r=o*Math.ceil(n[1]/2);return`
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
  `}function CM(n,e,t){if(t)return`
  ivec3 getOutputCoords() {
    ivec2 resTexRC = ivec2(resultUV.yx *
                           vec2(outTexShape[0], outTexShape[1]));
    int index = resTexRC.x * outTexShape[1] + resTexRC.y;
    ${bc(["r","c","d"],n)}
    return ivec3(r, c, d);
  }
`;const s=go(["r","c","d"],n);return`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${e[0]}, ${e[1]}));
      int index = resTexRC.x * ${e[1]} + resTexRC.y;
      ${s}
      return ivec3(r, c, d);
    }
  `}function IM(n,e,t){if(t)return`
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
  `;const s=[Math.ceil(e[0]/2),Math.ceil(e[1]/2)],o=Math.ceil(n[n.length-1]/2),r=o*Math.ceil(n[n.length-2]/2);let i=r,a="",l="b, r, c";for(let c=2;c<n.length-1;c++)i*=n[n.length-c-1],a=`
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
  `}function $M(n,e,t){if(t)return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(outTexShape[0], outTexShape[1]));
      int index = resTexRC.x * outTexShape[1] + resTexRC.y;
      ${bc(["r","c","d","d2"],n)}
      return ivec4(r, c, d, d2);
    }
  `;const s=go(["r","c","d","d2"],n);return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${e[0]}, ${e[1]}));
      int index = resTexRC.x * ${e[1]} + resTexRC.y;
      ${s}
      return ivec4(r, c, d, d2);
    }
  `}function vM(n,e){const t=go(["r","c","d","d2","d3"],n);return`
    ivec5 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx * vec2(${e[0]},
                             ${e[1]}));

      int index = resTexRC.x * ${e[1]} + resTexRC.y;

      ${t}

      ivec5 outShape = ivec5(r, c, d, d2, d3);
      return outShape;
    }
  `}function kM(n,e){const t=go(["r","c","d","d2","d3","d4"],n);return`
    ivec6 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${e[0]}, ${e[1]}));
      int index = resTexRC.x * ${e[1]} + resTexRC.y;

      ${t}

      ivec6 result = ivec6(r, c, d, d2, d3, d4);
      return result;
    }
  `}function SM(n,e,t){const s=[Math.ceil(e[0]/2),Math.ceil(e[1]/2)];if(_e(n,e))return t?`
      ivec2 getOutputCoords() {
        ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
        return 2 * ivec2(resultUV.yx * vec2(packedTexShape[0], packedTexShape[1]));
      }
    `:`
      ivec2 getOutputCoords() {
        return 2 * ivec2(resultUV.yx * vec2(${s[0]}, ${s[1]}));
      }
    `;const o=Math.ceil(n[1]/2);return t?`
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
  `}function NM(n,e,t){return _e(n,e)?t?`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(outTexShape[0], outTexShape[1]));
      }
    `:`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(${e[0]}, ${e[1]}));
      }
    `:n[1]===1?t?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(outTexShape[0], outTexShape[1]));
        int index = resTexRC.x * outTexShape[1] + resTexRC.y;
        return ivec2(index, 0);
      }
    `:`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(${e[0]}, ${e[1]}));
        int index = resTexRC.x * ${e[1]} + resTexRC.y;
        return ivec2(index, 0);
      }
    `:n[0]===1?t?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(outTexShape[0], outTexShape[1]));
        int index = resTexRC.x * outTexShape[1] + resTexRC.y;
        return ivec2(0, index);
      }
    `:`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(${e[0]}, ${e[1]}));
        int index = resTexRC.x * ${e[1]} + resTexRC.y;
        return ivec2(0, index);
      }
    `:t?`
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
                             vec2(${e[0]}, ${e[1]}));
      int index = resTexRC.x * ${e[1]} + resTexRC.y;
      int r = index / ${n[1]};
      int c = index - r * ${n[1]};
      return ivec2(r, c);
    }
  `}function xo(n){return`offset${n}`}function TM(n){const e=n.name,t="get"+e.charAt(0).toUpperCase()+e.slice(1),s=Mt();return`
    vec4 ${t}() {
      return ${s.texture2D}(${e}, halfCR);
    }
  `}function EM(n,e){const t=n.name,s="get"+t.charAt(0).toUpperCase()+t.slice(1);if(n.shapeInfo.isUniform)return`float ${s}() {return ${t};}`;const[o,r]=n.shapeInfo.texShape;if(o===1&&r===1)return`
      float ${s}() {
        return sampleTexture(${t}, halfCR);
      }
    `;const i=xo(t);if(e)return`
    float ${s}() {
      vec2 uv = uvFromFlat(${t}TexShape[0], ${t}TexShape[1], ${i});
      return sampleTexture(${t}, uv);
    }
  `;const[a,l]=n.shapeInfo.texShape;return`
    float ${s}() {
      vec2 uv = uvFromFlat(${a}, ${l}, ${i});
      return sampleTexture(${t}, uv);
    }
  `}function RM(n,e){const t=n.name,s="get"+t.charAt(0).toUpperCase()+t.slice(1),o=n.shapeInfo.texShape,r=Mt();if(e)return`
    vec4 ${s}(int index) {
      ivec2 packedTexShape = ivec2(ceil(float(${t}TexShape[0]) / 2.0), ceil(float(${t}TexShape[1]) / 2.0));
      vec2 uv = packedUVfrom1D(
        packedTexShape[0], packedTexShape[1], index);
      return ${r.texture2D}(${t}, uv);
    }
  `;const i=[Math.ceil(o[0]/2),Math.ceil(o[1]/2)];return`
    vec4 ${s}(int index) {
      vec2 uv = packedUVfrom1D(
        ${i[0]}, ${i[1]}, index);
      return ${r.texture2D}(${t}, uv);
    }
  `}function AM(n,e){const t=n.name,s="get"+t.charAt(0).toUpperCase()+t.slice(1);if(n.shapeInfo.isUniform)return`
      float ${s}(int index) {
        ${tr(n)}
      }
    `;const o=n.shapeInfo.texShape,r=o[0],i=o[1];if(i===1&&r===1)return`
      float ${s}(int index) {
        return sampleTexture(${t}, halfCR);
      }
    `;const a=xo(t);return i===1?e?`
      float ${s}(int index) {
        vec2 uv = vec2(0.5, (float(index + ${a}) + 0.5) / float(${t}TexShape[0]));
        return sampleTexture(${t}, uv);
      }
    `:`
      float ${s}(int index) {
        vec2 uv = vec2(0.5, (float(index + ${a}) + 0.5) / ${r}.0);
        return sampleTexture(${t}, uv);
      }
    `:r===1?e?`
      float ${s}(int index) {
        vec2 uv = vec2((float(index + ${a}) + 0.5) / float(${t}TexShape[1]), 0.5);
        return sampleTexture(${t}, uv);
      }
    `:`
      float ${s}(int index) {
        vec2 uv = vec2((float(index + ${a}) + 0.5) / ${i}.0, 0.5);
        return sampleTexture(${t}, uv);
      }
    `:e?`
    float ${s}(int index) {
      vec2 uv = uvFromFlat(${t}TexShape[0], ${t}TexShape[1], index + ${a});
      return sampleTexture(${t}, uv);
    }
  `:`
    float ${s}(int index) {
      vec2 uv = uvFromFlat(${r}, ${i}, index + ${a});
      return sampleTexture(${t}, uv);
    }
  `}function DM(n,e){const t=n.shapeInfo.logicalShape,s=n.name,o="get"+s.charAt(0).toUpperCase()+s.slice(1),r=n.shapeInfo.texShape,i=r[0],a=r[1],l=Mt();if(r!=null&&_e(t,r))return e?`
      vec4 ${o}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${s}TexShape[1], ${s}TexShape[0]);

        return ${l.texture2D}(${s}, uv);
      }
    `:`
      vec4 ${o}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${a}.0, ${i}.0);

        return ${l.texture2D}(${s}, uv);
      }
    `;if(e)return`
    vec4 ${o}(int row, int col) {
      ivec2 packedTexShape = ivec2(ceil(float(${s}TexShape[0]) / 2.0), ceil(float(${s}TexShape[1]) / 2.0));
      int valuesPerRow = int(ceil(float(${s}Shape[1]) / 2.0));
      vec2 uv = packedUVfrom2D(valuesPerRow, packedTexShape[0], packedTexShape[1], row, col);
      return ${l.texture2D}(${s}, uv);
    }
  `;const c=[Math.ceil(r[0]/2),Math.ceil(r[1]/2)],u=Math.ceil(t[1]/2);return`
    vec4 ${o}(int row, int col) {
      vec2 uv = packedUVfrom2D(${u}, ${c[0]}, ${c[1]}, row, col);
      return ${l.texture2D}(${s}, uv);
    }
  `}function FM(n,e){const t=n.shapeInfo.logicalShape,s=n.name,o="get"+s.charAt(0).toUpperCase()+s.slice(1),r=n.shapeInfo.texShape;if(r!=null&&_e(t,r)){if(e)return`
      float ${o}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${s}TexShape[1], ${s}TexShape[0]);
        return sampleTexture(${s}, uv);
      }
    `;const d=r[0],p=r[1];return`
    float ${o}(int row, int col) {
      vec2 uv = (vec2(col, row) + halfCR) / vec2(${p}.0, ${d}.0);
      return sampleTexture(${s}, uv);
    }
  `}const{newShape:i,keptDims:a}=cs(t),l=i;if(l.length<t.length){const d=nr(n,l),p=["row","col"];return`
      ${er(d,e)}
      float ${o}(int row, int col) {
        return ${o}(${sr(p,a)});
      }
    `}if(n.shapeInfo.isUniform)return`
      float ${o}(int row, int col) {
        int index = round(dot(vec2(row, col), vec2(${t[1]}, 1)));
        ${tr(n)}
      }
    `;const c=r[0],u=r[1],h=xo(s);return u===1?e?`
      float ${o}(int row, int col) {
        float index = dot(vec3(row, col, ${h}), vec3(${s}Shape[1], 1, 1));
        vec2 uv = vec2(0.5, (index + 0.5) / float(${s}TexShape[0]));
        return sampleTexture(${s}, uv);
      }
    `:`
    float ${o}(int row, int col) {
      float index = dot(vec3(row, col, ${h}), vec3(${t[1]}, 1, 1));
      vec2 uv = vec2(0.5, (index + 0.5) / ${c}.0);
      return sampleTexture(${s}, uv);
    }
  `:c===1?e?`
      float ${o}(int row, int col) {
        float index = dot(vec3(row, col, ${h}), vec3(${s}Shape[1], 1, 1));
        vec2 uv = vec2((index + 0.5) / float(${s}TexShape[1]), 0.5);
        return sampleTexture(${s}, uv);
      }
    `:`
    float ${o}(int row, int col) {
      float index = dot(vec3(row, col, ${h}), vec3(${t[1]}, 1, 1));
      vec2 uv = vec2((index + 0.5) / ${u}.0, 0.5);
      return sampleTexture(${s}, uv);
    }
  `:e?`
      float ${o}(int row, int col) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * ${s}Shape[1] + col + ${h};
        vec2 uv = uvFromFlat(${s}TexShape[0], ${s}TexShape[1], index);
        return sampleTexture(${s}, uv);
      }
    `:`
  float ${o}(int row, int col) {
    // Explicitly use integer operations as dot() only works on floats.
    int index = row * ${t[1]} + col + ${h};
    vec2 uv = uvFromFlat(${c}, ${u}, index);
    return sampleTexture(${s}, uv);
  }
`}function _M(n,e){const t=n.shapeInfo.logicalShape,s=n.name,o="get"+s.charAt(0).toUpperCase()+s.slice(1),r=n.shapeInfo.texShape,i=[Math.ceil(r[0]/2),Math.ceil(r[1]/2)];if(t[0]===1){const d=t.slice(1),p=[1,2],f=nr(n,d),m=["b","row","col"];return`
        ${R1(f,e)}
        vec4 ${o}(int b, int row, int col) {
          return ${o}(${sr(m,p)});
        }
      `}const a=Mt();if(e)return`
    vec4 ${o}(int b, int row, int col) {
      ivec2 packedTexShape = ivec2(ceil(float(${s}TexShape[0]) / 2.0), ceil(float(${s}TexShape[1]) / 2.0));
      int valuesPerRow = int(ceil(float(${s}Shape[2]) / 2.0));
      int texelsInBatch = valuesPerRow * int(ceil(float(${s}Shape[1]) / 2.0));
      vec2 uv = packedUVfrom3D(
        packedTexShape[0], packedTexShape[1], texelsInBatch, valuesPerRow, b, row, col);
      return ${a.texture2D}(${s}, uv);
    }
  `;const l=i[0],c=i[1],u=Math.ceil(t[2]/2),h=u*Math.ceil(t[1]/2);return`
    vec4 ${o}(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        ${l}, ${c}, ${h}, ${u}, b, row, col);
      return ${a.texture2D}(${s}, uv);
    }
  `}function OM(n,e){const t=n.shapeInfo.logicalShape,s=n.name,o="get"+s.charAt(0).toUpperCase()+s.slice(1),r=t[1]*t[2],i=t[2],{newShape:a,keptDims:l}=cs(t),c=a;if(c.length<t.length){const m=nr(n,c),g=["row","col","depth"];return`
        ${er(m,e)}
        float ${o}(int row, int col, int depth) {
          return ${o}(${sr(g,l)});
        }
      `}if(n.shapeInfo.isUniform)return`
      float ${o}(int row, int col, int depth) {
        int index = round(dot(vec3(row, col, depth),
                          vec3(${r}, ${i}, 1)));
        ${tr(n)}
      }
    `;const u=n.shapeInfo.texShape,h=u[0],d=u[1],p=n.shapeInfo.flatOffset;if(d===r&&p==null)return e?`
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
      `;if(d===i&&p==null)return e?`
      float ${o}(int row, int col, int depth) {
        float texR = dot(vec2(row, col), vec2(${s}Shape[1], 1));
        float texC = float(depth);
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${s}TexShape[1], ${s}TexShape[0]);
        return sampleTexture(${s}, uv);
      }
    `:`
    float ${o}(int row, int col, int depth) {
      float texR = dot(vec2(row, col), vec2(${t[1]}, 1));
      float texC = float(depth);
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${d}.0, ${h}.0);
      return sampleTexture(${s}, uv);
    }
  `;const f=xo(s);return e?`
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
  `}function LM(n,e){const t=n.name,s="get"+t.charAt(0).toUpperCase()+t.slice(1),o=Mt();if(e)return`
    vec4 ${s}(int b2, int b, int row, int col) {
      int valuesPerRow = int(ceil(float(${t}Shape[3]) / 2.0));
      int texelsInBatch = valuesPerRow * int(ceil(float(${t}Shape[2]) / 2.0));
      int index = b * texelsInBatch + (row / 2) * valuesPerRow + (col / 2);
      texelsInBatch *= ${t}Shape[1];
      index = b2 * texelsInBatch + index;
      ivec2 packedTexShape = ivec2(ceil(float(${t}TexShape[0]) / 2.0), ceil(float(${t}TexShape[1]) / 2.0));
      int texR = index / packedTexShape[1];
      int texC = index - texR * packedTexShape[1];
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(packedTexShape[1], packedTexShape[0]); return ${o.texture2D}(${t}, uv);
    }
  `;const r=n.shapeInfo.logicalShape,i=r.length,a=n.shapeInfo.texShape,l=[Math.ceil(a[0]/2),Math.ceil(a[1]/2)],c=l[0],u=l[1],h=Math.ceil(r[i-1]/2);let d=h*Math.ceil(r[i-2]/2),p="int b, int row, int col",f=`b * ${d} + (row / 2) * ${h} + (col / 2)`;for(let m=2;m<i-1;m++)p=`int b${m}, `+p,d*=r[i-m-1],f=`b${m} * ${d} + `+f;return`
    vec4 ${s}(${p}) {
      int index = ${f};
      int texR = index / ${u};
      int texC = index - texR * ${u};
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${u}, ${c});
      return ${o.texture2D}(${t}, uv);
    }
  `}function MM(n,e){const t=n.shapeInfo.logicalShape,s=n.name,o="get"+s.charAt(0).toUpperCase()+s.slice(1),r=t[3],i=t[2]*r,a=t[1]*i,{newShape:l,keptDims:c}=cs(t);if(l.length<t.length){const b=nr(n,l),w=["row","col","depth","depth2"];return`
      ${er(b,e)}
      float ${o}(int row, int col, int depth, int depth2) {
        return ${o}(${sr(w,c)});
      }
    `}if(n.shapeInfo.isUniform)return`
      float ${o}(int row, int col, int depth, int depth2) {
        int index = round(dot(vec4(row, col, depth, depth2),
                          vec4(${a}, ${i}, ${r}, 1)));
        ${tr(n)}
      }
    `;const u=n.shapeInfo.flatOffset,h=n.shapeInfo.texShape,d=h[0],p=h[1],f=`int stride2 = ${s}Shape[3];`,m=`int stride1 = ${s}Shape[2] * stride2;`,g=`int stride0 = ${s}Shape[1] * stride1;`;if(p===a&&u==null)return e?`
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
    `;if(p===r&&u==null)return e?`
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
                         vec3(${t[1]*t[2]}, ${t[2]}, 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${p}.0, ${d}.0);
        return sampleTexture(${s}, uv);
      }
    `;const x=xo(s);return e?`
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
  `}function PM(n){const e=n.shapeInfo.logicalShape,t=n.name,s="get"+t.charAt(0).toUpperCase()+t.slice(1),o=e[4],r=e[3]*o,i=e[2]*r,a=e[1]*i,{newShape:l,keptDims:c}=cs(e);if(l.length<e.length){const m=nr(n,l),g=["row","col","depth","depth2","depth3"];return`
      ${er(m)}
      float ${s}(int row, int col, int depth, int depth2, int depth3) {
        return ${s}(${sr(g,c)});
      }
    `}if(n.shapeInfo.isUniform)return`
      float ${s}(int row, int col, int depth, int depth2, int depth3) {
        float index = dot(
          vec4(row, col, depth, depth2),
          vec4(${a}, ${i}, ${r}, ${o})) +
          depth3;
        ${tr(n)}
      }
    `;const u=n.shapeInfo.flatOffset,h=n.shapeInfo.texShape,d=h[0],p=h[1];if(p===a&&u==null)return`
      float ${s}(int row, int col, int depth, int depth2, int depth3) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
                         vec4(${i}, ${r}, ${o}, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${p}.0, ${d}.0);
        return sampleTexture(${t}, uv);
      }
    `;if(p===o&&u==null)return`
      float ${s}(int row, int col, int depth, int depth2, int depth3) {
        float texR = dot(
          vec4(row, col, depth, depth2),
          vec4(${e[1]*e[2]*e[3]},
               ${e[2]*e[3]}, ${e[3]}, 1));
        int texC = depth3;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${p}.0, ${d}.0);
        return sampleTexture(${t}, uv);
      }
    `;const f=xo(t);return`
    float ${s}(int row, int col, int depth, int depth2, int depth3) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${a} + col * ${i} + depth * ${r} +
          depth2 * ${o} + depth3 + ${f};
      vec2 uv = uvFromFlat(${d}, ${p}, index);
      return sampleTexture(${t}, uv);
    }
  `}function BM(n){const e=n.shapeInfo.logicalShape,t=n.name,s="get"+t.charAt(0).toUpperCase()+t.slice(1),{newShape:o,keptDims:r}=cs(e);if(o.length<e.length){const g=nr(n,o),x=["row","col","depth","depth2","depth3","depth4"];return`
      ${er(g)}
      float ${s}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        return ${s}(${sr(x,r)});
      }
    `}const i=e[5],a=e[4]*i,l=e[3]*a,c=e[2]*l,u=e[1]*c;if(n.shapeInfo.isUniform)return`
      float ${s}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
        int index = round(dot(
          vec4(row, col, depth, depth2),
          vec4(${u}, ${c}, ${l}, ${a})) +
          dot(
            vec2(depth3, depth4),
            vec2(${i}, 1)));
        ${tr(n)}
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
        return sampleTexture(${t}, uv);
      }
    `;if(f===i&&h==null)return`
      float ${s}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        float texR = dot(vec4(row, col, depth, depth2),
          vec4(${e[1]*e[2]*e[3]*e[4]},
               ${e[2]*e[3]*e[4]},
               ${e[3]*e[4]},
               ${e[4]})) + float(depth3);
        int texC = depth4;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${f}.0, ${p}.0);
        return sampleTexture(${t}, uv);
      }
    `;const m=xo(t);return`
    float ${s}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${u} + col * ${c} + depth * ${l} +
          depth2 * ${a} + depth3 * ${i} + depth4 + ${m};
      vec2 uv = uvFromFlat(${p}, ${f}, index);
      return sampleTexture(${t}, uv);
    }
  `}function tr(n){const e=n.name,t=j(n.shapeInfo.logicalShape);return t<2?`return ${e};`:`
    for (int i = 0; i < ${t}; i++) {
      if (i == index) {
        return ${e}[i];
      }
    }
  `}function zM(n,e){const t=n.name,s=t.charAt(0).toUpperCase()+t.slice(1),o="get"+s+"AtOutCoords",r=n.shapeInfo.logicalShape.length,i=e.logicalShape.length,a=E1(n.shapeInfo.logicalShape,e.logicalShape),l=We(i),c=i-r;let u;const h=["x","y","z","w","u","v"];r===0?u="":i<2&&a.length>=1?u="coords = 0;":u=a.map(b=>`coords.${h[b+c]} = 0;`).join(`
`);let d="";i<2&&r>0?d="coords":d=n.shapeInfo.logicalShape.map((b,w)=>`coords.${h[w+c]}`).join(", ");let p="return outputValue;";const m=j(n.shapeInfo.logicalShape)===1,x=j(e.logicalShape)===1;if(r===1&&!m&&!x)p=`
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
  `}function VM(n,e){const t=n.name,s=t.charAt(0).toUpperCase()+t.slice(1),o="get"+s+"AtOutCoords",r=e.texShape,i=n.shapeInfo.texShape,a=n.shapeInfo.logicalShape.length,l=e.logicalShape.length;if(!n.shapeInfo.isUniform&&a===l&&n.shapeInfo.flatOffset==null&&_e(i,r))return`
      float ${o}() {
        return sampleTexture(${t}, resultUV);
      }
    `;const c=We(l),u=E1(n.shapeInfo.logicalShape,e.logicalShape),h=l-a;let d;const p=["x","y","z","w","u","v"];a===0?d="":l<2&&u.length>=1?d="coords = 0;":d=u.map(m=>`coords.${p[m+h]} = 0;`).join(`
`);let f="";return l<2&&a>0?f="coords":f=n.shapeInfo.logicalShape.map((m,g)=>`coords.${p[g+h]}`).join(", "),`
    float ${o}() {
      ${c} coords = getOutputCoords();
      ${d}
      return get${s}(${f});
    }
  `}function We(n){if(n<=1)return"int";if(n===2)return"ivec2";if(n===3)return"ivec3";if(n===4)return"ivec4";if(n===5)return"ivec5";if(n===6)return"ivec6";throw Error(`GPU for rank ${n} is not yet supported`)}function sp(n,e,t){const{newShape:s,keptDims:o}=cs(e),r=e.length,i=n&&r===3&&e[0]===1,a=i?e.slice(1):s,l=!n&&r>1&&!_e(e,t)&&s.length<r||i;return{useSqueezeShape:l,uniformShape:l?a:e,keptDims:o}}function nr(n,e){const t=JSON.parse(JSON.stringify(n));return t.shapeInfo.logicalShape=e,t}function sr(n,e){return e.map(t=>n[t]).join(", ")}function WM(n,e,t,s){const o=t.map((u,h)=>{const d={logicalShape:u.shape,texShape:u.isUniform?null:u.texData.texShape,isUniform:u.isUniform,isPacked:u.isUniform?!1:u.texData.isPacked,flatOffset:null};return u.texData!=null&&u.texData.slice!=null&&u.texData.slice.flatOffset>0&&(d.flatOffset=u.texData.slice.flatOffset),{name:e.variableNames[h],shapeInfo:d}}),r=o.map(u=>u.shapeInfo),i={logicalShape:s.shape,texShape:s.texData.texShape,isUniform:!1,isPacked:s.texData.isPacked,flatOffset:null},a=iM(o,i,e),l=OL(n.gl,a),c=n.createProgram(l);return U().get("ENGINE_COMPILE_ONLY")?{program:e,fragmentShader:l,source:a,webGLProgram:c,inShapeInfos:r,outShapeInfo:i,variablesLocations:null,customUniformLocations:null,infLoc:null,nanLoc:null,outShapeLocation:null,outShapeStridesLocation:null,outTexShapeLocation:null}:(n.buildVao(c),Object.assign({program:e,fragmentShader:l,source:a,webGLProgram:c,inShapeInfos:r,outShapeInfo:i},D1(n,e,c)))}function D1(n,e,t){const s=[],o=[];let r,i,a,l=null,c=null;c=n.getUniformLocation(t,"NAN",!1),U().getNumber("WEBGL_VERSION")===1&&(l=n.getUniformLocation(t,"INFINITY",!1));const u=!1;for(const h of e.variableNames){const d={name:h,uniform:n.getUniformLocation(t,h,u),offset:n.getUniformLocation(t,`offset${h}`,u)};e.enableShapeUniforms&&(d.shape=n.getUniformLocation(t,`${h}Shape`,u),d.texShape=n.getUniformLocation(t,`${h}TexShape`,u)),s.push(d)}if(e.enableShapeUniforms&&(r=n.getUniformLocation(t,"outShape",u),a=n.getUniformLocation(t,"outShapeStrides",u),i=n.getUniformLocation(t,"outTexShape",u)),e.customUniforms)for(const h of e.customUniforms)o.push(n.getUniformLocation(t,h.name,u));return{variablesLocations:s,customUniformLocations:o,infLoc:l,nanLoc:c,outShapeLocation:r,outShapeStridesLocation:a,outTexShapeLocation:i}}function F1(n,e){if(n.length!==e.length)throw Error(`Binary was compiled with ${n.length} inputs, but was executed with ${e.length} inputs`);n.forEach((t,s)=>{const o=t.logicalShape,r=e[s],i=r.shape;if(!_e(o,i))throw Error(`Binary was compiled with different shapes than the current args. Shapes ${o} and ${i} must match`);if(t.isUniform&&r.isUniform)return;const a=t.texShape,l=r.isUniform?null:r.texData.texShape;if(!_e(a,l))throw Error(`Binary was compiled with different texture shapes than the current args. Shape ${a} and ${l} must match`)})}function UM(n,e,t,s,o){e.program.enableShapeUniforms||(F1(e.inShapeInfos,t),F1([e.outShapeInfo],[s]));const r=s.texData.texture,i=s.texData.texShape;s.texData.isPacked?n.setOutputPackedMatrixTexture(r.texture,i[0],i[1]):n.setOutputMatrixTexture(r.texture,i[0],i[1]),n.setProgram(e.webGLProgram),n.bindVertexArray(e.webGLProgram.vao),U().getNumber("WEBGL_VERSION")===1&&e.infLoc!==null&&n.gl.uniform1f(e.infLoc,1/0),e.nanLoc!==null&&n.gl.uniform1f(e.nanLoc,NaN);for(let l=0;l<t.length;++l){const c=t[l],{uniform:u,offset:h,shape:d,texShape:p}=e.variablesLocations[l];if(d){const{uniformShape:f}=sp(e.program.packedInputs,c.shape,c.texData.texShape);switch(f.length){case 1:n.gl.uniform1iv(d,new Int32Array(f));break;case 2:n.gl.uniform2iv(d,new Int32Array(f));break;case 3:n.gl.uniform3iv(d,new Int32Array(f));break;case 4:n.gl.uniform4iv(d,new Int32Array(f));break}}if(p&&n.gl.uniform2i(p,c.texData.texShape[0],c.texData.texShape[1]),u!=null){if(c.isUniform){if(j(c.shape)<2)n.gl.uniform1f(u,c.uniformValues[0]);else{let f=c.uniformValues;f instanceof Float32Array||(f=new Float32Array(f)),n.gl.uniform1fv(u,f)}continue}c.texData.slice!=null&&h!=null&&n.gl.uniform1i(h,c.texData.slice.flatOffset),n.setInputMatrixTexture(c.texData.texture.texture,u,l)}}const a=e.outShapeLocation;if(a)switch(s.shape.length){case 1:n.gl.uniform1iv(a,new Int32Array(s.shape));break;case 2:n.gl.uniform2iv(a,new Int32Array(s.shape));break;case 3:n.gl.uniform3iv(a,new Int32Array(s.shape));break;case 4:n.gl.uniform4iv(a,new Int32Array(s.shape));break}if(e.outShapeStridesLocation){const l=fe(s.shape);switch(s.shape.length){case 2:n.gl.uniform1iv(e.outShapeStridesLocation,new Int32Array(l));break;case 3:n.gl.uniform2iv(e.outShapeStridesLocation,new Int32Array(l));break;case 4:n.gl.uniform3iv(e.outShapeStridesLocation,new Int32Array(l));break}}if(e.outTexShapeLocation&&n.gl.uniform2i(e.outTexShapeLocation,s.texData.texShape[0],s.texData.texShape[1]),e.program.customUniforms&&o)for(let l=0;l<e.program.customUniforms.length;++l){const c=e.program.customUniforms[l],u=e.customUniformLocations[l],h=o[l];if(c.type==="float")n.gl.uniform1fv(u,h);else if(c.type==="vec2")n.gl.uniform2fv(u,h);else if(c.type==="vec3")n.gl.uniform3fv(u,h);else if(c.type==="vec4")n.gl.uniform4fv(u,h);else if(c.type==="int")n.gl.uniform1iv(u,h);else if(c.type==="ivec2")n.gl.uniform2iv(u,h);else if(c.type==="ivec3")n.gl.uniform3iv(u,h);else if(c.type==="ivec4")n.gl.uniform4iv(u,h);else throw Error(`uniform type ${c.type} is not supported yet.`)}n.executeProgram()}function GM(n,e,t){let s="";e.concat(t).forEach(i=>{const a=i.texData!=null&&i.texData.slice!=null&&i.texData.slice.flatOffset>0;if(n.enableShapeUniforms&&!i.isUniform){const l=i.texData.texShape,{useSqueezeShape:c,uniformShape:u,keptDims:h}=sp(n.packedInputs,i.shape,l);let d="",p="",f="";if(u.length===1&&n.packedInputs){const C=[Math.ceil(l[0]/2),Math.ceil(l[1]/2)];d=`${C[0]>1}_${C[1]>1}`}else if(u.length===2&&!n.packedInputs)p=`${u[0]>1}_${u[1]>1}`;else if(u.length>2&&!n.packedInputs){const C=fe(u);f=`${C[0]===l[1]}_${C[C.length-1]===l[1]}`}const m=i.shape.length,g=u.length===2&&_e(i.shape,l),x=j(i.shape)===1,b=Mo(i.shape,t.shape),w=!n.packedInputs&&m===t.shape.length&&_e(l,t.texData.texShape),y=n.packedInputs||u.length>2?"":`${l[0]>1}_${l[1]>1}`;s+=`${m}_${w}_${c?h:""}_${u.length}_${x}_${b}_${g}_${d}_${p}_${f}_${y}_${a}`}else{const l=i.isUniform?"uniform":i.texData.texShape;s+=`${i.shape}_${l}_${a}`}});const o=n.userCode;let r=n.constructor.name;return r+="_"+s+"_"+o+`${U().getNumber("WEBGL_VERSION")}`,r}function Ft(n){return U().getBool("WEBGL_USE_SHAPES_UNIFORMS")&&n<=4}class HM{constructor(e){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=Vi.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];const t=Mt();this.outputShape=e,this.enableShapeUniforms=Ft(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?bc(["r","c","d"],e):go(["r","c","d"],e)}
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

        ${t.output} = result;
      }
    `}}class qM{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=Vi.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];const t=Mt();this.outputShape=e,this.enableShapeUniforms=Ft(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?bc(["r","c","d"],e):go(["r","c","d"],e)}
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

        ${t.output} = result;
      }
    `}}class jM{constructor(e){this.variableNames=["A"],this.outTexUsage=sn.DOWNLOAD;const t=Mt();this.outputShape=e,this.userCode=`
      ${T1}

      void main() {
        float x = getAAtOutCoords();
        ${t.output} = encode_float(x);
      }
    `}}class KM{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=sn.DOWNLOAD;const t=Mt();this.outputShape=e,this.userCode=`
      ${T1}

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        ${t.output} = encode_float(x);
      }
    `}}const XM={R:0,G:1,B:2,A:3};class _1{constructor(e,t=!1,s="RGBA"){this.variableNames=["A"],this.customUniforms=[{name:"texShape",type:"ivec2"}];const o=Mt();this.outputShape=e,this.enableShapeUniforms=Ft(this.outputShape.length);let r="result";t&&(r="floor(result * 255. + 0.5)");let i="";for(let a=0;a<s.length;a++){const l=s[a];i+=`
          if(offset == ${a}) {
            result = values[${XM[l]}];
          }`}this.userCode=`
      ${this.enableShapeUniforms?np():tp(e)}

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
    `}}class YM{constructor(e,t=!1){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.customUniforms=[{name:"texShape",type:"ivec2"}];const s=Mt();this.outputShape=e,this.enableShapeUniforms=Ft(this.outputShape.length);let o="",r="result";t&&(r="floor(result * 255. + 0.5)");for(let i=0;i<=1;i++)for(let a=0;a<=1;a++){const l=i*2+a;o+=`
          localCoords = coords;
          if(localCoords[2] + ${a} < ${this.enableShapeUniforms?"outShape[2]":`${e[2]}`}) {
          localCoords[2] += ${a};
          if (localCoords[1] + ${i} < ${this.enableShapeUniforms?"outShape[1]":`${e[1]}`}) {
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
        ${this.enableShapeUniforms?np():tp(e)}

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
    `}}function ZM(n){const e=Mt(),t=`${e.version}
    precision highp float;
    ${e.attribute} vec3 clipSpacePos;
    ${e.attribute} vec2 uv;
    ${e.varyingVs} vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`;return _L(n,t)}function QM(n){const e=new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]);return BL(n,e)}function JM(n){const e=new Uint16Array([0,1,2,2,1,3]);return zL(n,e)}function Gi(n,e,t,s,o,r){WL(e,t);const i=VL(n),a=n.TEXTURE_2D;return ie(n,()=>n.bindTexture(a,i)),ie(n,()=>n.texParameteri(a,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE)),ie(n,()=>n.texParameteri(a,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)),ie(n,()=>n.texParameteri(a,n.TEXTURE_MIN_FILTER,n.NEAREST)),ie(n,()=>n.texParameteri(a,n.TEXTURE_MAG_FILTER,n.NEAREST)),U().getNumber("WEBGL_VERSION")===1?ie(n,()=>n.texImage2D(a,0,s,e,t,0,o,r,null)):ie(n,()=>n.texStorage2D(a,1,s,e,t)),ie(n,()=>n.bindTexture(n.TEXTURE_2D,null)),{texture:i,texShape:[t,e]}}function O1(n){return n.internalFormatFloat}function eP(n,e,t,s){const[o,r]=Wi(e,t);return Gi(n,o,r,O1(s),s.textureFormatFloat,n.FLOAT)}function L1(n){return n.internalFormatHalfFloat}function tP(n,e,t,s){const[o,r]=Wi(e,t);return Gi(n,o,r,L1(s),s.textureFormatFloat,s.textureTypeHalfFloat)}function M1(n){return n.downloadTextureFormat}function nP(n,e,t,s){const[o,r]=Wi(e,t);return Gi(n,o,r,M1(s),n.RGBA,n.UNSIGNED_BYTE)}function P1(n){return n.internalFormatPackedFloat}function sP(n,e,t,s){const[o,r]=Zo(e,t);return Gi(n,o,r,P1(s),n.RGBA,n.FLOAT)}function B1(n){return n.internalFormatPackedHalfFloat}function oP(n,e,t,s){const[o,r]=Zo(e,t);return Gi(n,o,r,B1(s),n.RGBA,s.textureTypeHalfFloat)}function rP(n,e,t){return ie(n,()=>n.bindBuffer(n.ARRAY_BUFFER,t)),k1(n,e,"clipSpacePos",t,3,20,0)&&k1(n,e,"uv",t,2,20,12)}function iP(n,e,t,s,o,r){ie(n,()=>n.bindTexture(n.TEXTURE_2D,e));let i,a,l;o instanceof Uint8Array?(i=new Uint8Array(t*s*4),a=n.UNSIGNED_BYTE,l=n.RGBA):(i=new Float32Array(t*s*4),a=n.FLOAT,l=r.internalFormatPackedFloat),i.set(o),U().getNumber("WEBGL_VERSION")===2?ie(n,()=>n.texSubImage2D(n.TEXTURE_2D,0,0,0,t,s,n.RGBA,a,i)):ie(n,()=>n.texImage2D(n.TEXTURE_2D,0,l,t,s,0,n.RGBA,a,i)),ie(n,()=>n.bindTexture(n.TEXTURE_2D,null))}function aP(n,e,t){ie(n,()=>n.bindTexture(n.TEXTURE_2D,e)),t.data instanceof Uint8Array?U().getNumber("WEBGL_VERSION")===2?ie(n,()=>n.texSubImage2D(n.TEXTURE_2D,0,0,0,t.width,t.height,n.RGBA,n.UNSIGNED_BYTE,t.data)):ie(n,()=>n.texImage2D(n.TEXTURE_2D,0,n.RGBA,t.width,t.height,0,n.RGBA,n.UNSIGNED_BYTE,t.data)):U().getNumber("WEBGL_VERSION")===2?ie(n,()=>n.texSubImage2D(n.TEXTURE_2D,0,0,0,n.RGBA,n.UNSIGNED_BYTE,t)):ie(n,()=>n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,t)),ie(n,()=>n.bindTexture(n.TEXTURE_2D,null))}function lP(n,e,t,s){const o=n.createBuffer();ie(n,()=>n.bindBuffer(n.PIXEL_PACK_BUFFER,o));const a=4*4*e*t;return ie(n,()=>n.bufferData(n.PIXEL_PACK_BUFFER,a,n.STREAM_READ)),ie(n,()=>n.readPixels(0,0,t,e,n.RGBA,n.FLOAT,0)),ie(n,()=>n.bindBuffer(n.PIXEL_PACK_BUFFER,null)),o}function cP(n,e,t){const s=n,o=new Float32Array(t);return s.bindBuffer(s.PIXEL_PACK_BUFFER,e),s.getBufferSubData(s.PIXEL_PACK_BUFFER,0,o),s.bindBuffer(s.PIXEL_PACK_BUFFER,null),o}function uP(n,e,t,s){const[o,r]=Wi(e,t),i=4,a=new Uint8Array(NL(e*t,i));return ie(n,()=>n.readPixels(0,0,o,r,s.downloadTextureFormat,n.UNSIGNED_BYTE,a)),new Float32Array(a.buffer)}function hP(n,e,t,s,o,r,i,a){const l=n,c=new Float32Array(TL(r,i));return l.bindBuffer(l.PIXEL_PACK_BUFFER,e),l.getBufferSubData(l.PIXEL_PACK_BUFFER,0,c),l.bindBuffer(l.PIXEL_PACK_BUFFER,null),c}function dP(n,e,t){const s=new Float32Array(e*t*4);return ie(n,()=>n.readPixels(0,0,t,e,n.RGBA,n.FLOAT,s)),s}class op{constructor(e){this.outputTexture=null,this.program=null,this.disposed=!1,this.itemsToPoll=[];const t=U().getNumber("WEBGL_VERSION");if(e!=null?(this.gl=e,vL(t,e)):this.gl=En(t),e=this.gl,U().getNumber("WEBGL_VERSION")===2){const r=e;this.createVertexArray=()=>ie(r,()=>r.createVertexArray()),this.bindVertexArray=i=>ie(r,()=>r.bindVertexArray(i)),this.deleteVertexArray=i=>ie(r,()=>r.deleteVertexArray(i)),this.getVertexArray=()=>ie(r,()=>r.getParameter(r.VERTEX_ARRAY_BINDING))}else if(e!=null){const r=e.getExtension("OES_vertex_array_object");if(r==null)throw new Error("All WebGL1 implementations are expected to offer OES_vertex_array_object.");this.createVertexArray=()=>ie(e,()=>r.createVertexArrayOES()),this.bindVertexArray=i=>ie(e,()=>r.bindVertexArrayOES(i)),this.deleteVertexArray=i=>ie(e,()=>r.deleteVertexArrayOES(i)),this.getVertexArray=()=>ie(e,()=>e.getParameter(r.VERTEX_ARRAY_BINDING_OES))}let s="WEBGL_color_buffer_float";const o="EXT_color_buffer_half_float";if(this.parallelCompilationExtension=this.gl.getExtension("KHR_parallel_shader_compile"),U().getNumber("WEBGL_VERSION")===1){const r="OES_texture_float",i="OES_texture_half_float";if(this.textureFloatExtension=pc(this.gl,r),mn(this.gl,i))this.textureHalfFloatExtension=pc(this.gl,i);else if(U().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");if(this.colorBufferFloatExtension=this.gl.getExtension(s),mn(this.gl,o))this.colorBufferHalfFloatExtension=pc(this.gl,o);else if(U().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.")}else if(s="EXT_color_buffer_float",mn(this.gl,s))this.colorBufferFloatExtension=this.gl.getExtension(s);else if(mn(this.gl,o))this.colorBufferHalfFloatExtension=this.gl.getExtension(o);else throw new Error("GL context does not support color renderable floats");this.vertexBuffer=QM(this.gl),this.indexBuffer=JM(this.gl),this.framebuffer=UL(this.gl),this.textureConfig=Xd(this.gl,this.textureHalfFloatExtension)}get debug(){return U().getBool("DEBUG")}dispose(){if(this.disposed)return;this.program!=null&&console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),this.outputTexture!=null&&console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");const e=this.gl;ie(e,()=>e.finish()),ie(e,()=>e.bindFramebuffer(e.FRAMEBUFFER,null)),ie(e,()=>e.deleteFramebuffer(this.framebuffer)),ie(e,()=>e.bindBuffer(e.ARRAY_BUFFER,null)),ie(e,()=>e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null)),ie(e,()=>e.deleteBuffer(this.indexBuffer)),this.disposed=!0}createFloat32MatrixTexture(e,t){return this.throwIfDisposed(),eP(this.gl,e,t,this.textureConfig)}createFloat16MatrixTexture(e,t){return this.throwIfDisposed(),tP(this.gl,e,t,this.textureConfig)}createUnsignedBytesMatrixTexture(e,t){return this.throwIfDisposed(),nP(this.gl,e,t,this.textureConfig)}uploadPixelDataToTexture(e,t){this.throwIfDisposed(),aP(this.gl,e,t)}uploadDenseMatrixToTexture(e,t,s,o){this.throwIfDisposed(),iP(this.gl,e,t,s,o,this.textureConfig)}createFloat16PackedMatrixTexture(e,t){return this.throwIfDisposed(),oP(this.gl,e,t,this.textureConfig)}createPackedMatrixTexture(e,t){return this.throwIfDisposed(),sP(this.gl,e,t,this.textureConfig)}deleteMatrixTexture(e){this.throwIfDisposed(),this.outputTexture===e&&(S1(this.gl,this.framebuffer),this.outputTexture=null),ie(this.gl,()=>this.gl.deleteTexture(e))}downloadByteEncodedFloatMatrixFromOutputTexture(e,t,s){return this.downloadMatrixDriver(e,()=>uP(this.gl,t,s,this.textureConfig))}downloadPackedMatrixFromBuffer(e,t,s,o,r,i){return hP(this.gl,e,t,s,o,r,i,this.textureConfig)}downloadFloat32MatrixFromBuffer(e,t){return cP(this.gl,e,t)}createBufferFromTexture(e,t,s){this.bindTextureToFrameBuffer(e);const o=lP(this.gl,t,s,this.textureConfig);return this.unbindTextureToFrameBuffer(),o}createAndWaitForFence(){const e=this.createFence(this.gl);return this.pollFence(e)}createFence(e){let t,s;if(U().getBool("WEBGL_FENCE_API_ENABLED")){const o=e,r=o.fenceSync(o.SYNC_GPU_COMMANDS_COMPLETE,0);e.flush(),s=()=>{const i=o.clientWaitSync(r,0,0);return i===o.ALREADY_SIGNALED||i===o.CONDITION_SATISFIED},t=r}else U().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(t=this.beginQuery(),this.endQuery(),s=()=>this.isQueryAvailable(t,U().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))):s=()=>!0;return{query:t,isFencePassed:s}}downloadMatrixFromPackedTexture(e,t,s){return this.downloadMatrixDriver(e,()=>dP(this.gl,t,s))}createProgram(e){this.throwIfDisposed();const t=this.gl;this.vertexShader==null&&(this.vertexShader=ZM(t));const s=ML(t);ie(t,()=>t.attachShader(s,this.vertexShader)),ie(t,()=>t.attachShader(s,e)),PL(t,s);const o=Object.assign(s,{vao:this.createVertexArray()});return this.debug&&Yd(t,o),o}buildVao(e){this.setProgram(e),this.bindVertexArray(e.vao);const t=this.gl;ie(t,()=>t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,this.indexBuffer)),rP(t,e,this.vertexBuffer)}deleteProgram(e){this.throwIfDisposed(),e===this.program&&(this.program=null),e!=null&&(ie(this.gl,()=>this.gl.deleteProgram(e)),this.deleteVertexArray(e.vao))}setProgram(e){this.throwIfDisposed(),this.program=e,this.program!=null&&this.debug&&Yd(this.gl,this.program),ie(this.gl,()=>this.gl.useProgram(e))}getUniformLocation(e,t,s=!0){return this.throwIfDisposed(),s?HL(this.gl,e,t):qL(this.gl,e,t)}getAttributeLocation(e,t){return this.throwIfDisposed(),ie(this.gl,()=>this.gl.getAttribLocation(e,t))}getUniformLocationNoThrow(e,t){return this.throwIfDisposed(),this.gl.getUniformLocation(e,t)}setInputMatrixTexture(e,t,s){this.throwIfDisposed(),this.throwIfNoProgram(),jL(this.gl,e,t,s)}setOutputMatrixTexture(e,t,s){this.setOutputMatrixTextureDriver(e,s,t)}setOutputPackedMatrixTexture(e,t,s){this.throwIfDisposed();const[o,r]=Zo(t,s);this.setOutputMatrixTextureDriver(e,o,r)}setOutputMatrixWriteRegion(e,t,s,o){this.setOutputMatrixWriteRegionDriver(s,e,o,t)}setOutputPackedMatrixWriteRegion(e,t,s,o){throw new Error("setOutputPackedMatrixWriteRegion not implemented.")}debugValidate(){this.program!=null&&Yd(this.gl,this.program),fc(this.gl)}executeProgram(){this.throwIfDisposed(),this.throwIfNoProgram();const e=this.gl;if(this.debug){const t=this.getVertexArray();console.assert(t===this.program.vao,"VAO changed between setProgram and executeProgram!"),this.debugValidate()}ie(e,()=>e.drawElements(e.TRIANGLES,6,e.UNSIGNED_SHORT,0))}blockUntilAllProgramsCompleted(){this.throwIfDisposed(),ie(this.gl,()=>this.gl.finish())}getQueryTimerExtension(){return this.disjointQueryTimerExtension==null&&(this.disjointQueryTimerExtension=pc(this.gl,U().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2?"EXT_disjoint_timer_query_webgl2":"EXT_disjoint_timer_query")),this.disjointQueryTimerExtension}getQueryTimerExtensionWebGL2(){return this.getQueryTimerExtension()}getQueryTimerExtensionWebGL1(){return this.getQueryTimerExtension()}beginQuery(){if(U().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){const s=this.gl,o=this.getQueryTimerExtensionWebGL2(),r=s.createQuery();return s.beginQuery(o.TIME_ELAPSED_EXT,r),r}const e=this.getQueryTimerExtensionWebGL1(),t=e.createQueryEXT();return e.beginQueryEXT(e.TIME_ELAPSED_EXT,t),t}endQuery(){if(U().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){const t=this.gl,s=this.getQueryTimerExtensionWebGL2();t.endQuery(s.TIME_ELAPSED_EXT);return}const e=this.getQueryTimerExtensionWebGL1();e.endQueryEXT(e.TIME_ELAPSED_EXT)}waitForQueryAndGetTime(e){return X(this,null,function*(){return yield Cp(()=>this.disposed||this.isQueryAvailable(e,U().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))),this.getQueryTime(e,U().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))})}getQueryTime(e,t){if(t===0)return null;if(t===2){const s=this.gl;return s.getQueryParameter(e,s.QUERY_RESULT)/1e6}else{const s=this.getQueryTimerExtensionWebGL1();return s.getQueryObjectEXT(e,s.QUERY_RESULT_EXT)/1e6}}isQueryAvailable(e,t){if(t===0)return!0;if(t===2){const s=this.gl,o=this.getQueryTimerExtensionWebGL2(),r=s.getQueryParameter(e,s.QUERY_RESULT_AVAILABLE);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(o.GPU_DISJOINT_EXT)),r&&!this.disjoint}else{const s=this.getQueryTimerExtensionWebGL1(),o=s.getQueryObjectEXT(e,s.QUERY_RESULT_AVAILABLE_EXT);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(s.GPU_DISJOINT_EXT)),o&&!this.disjoint}}pollFence(e){return new Promise(t=>{this.addItemToPoll(()=>e.isFencePassed(),()=>t())})}pollItems(){const e=pP(this.itemsToPoll.map(t=>t.isDoneFn));for(let t=0;t<=e;++t){const{resolveFn:s}=this.itemsToPoll[t];s()}this.itemsToPoll=this.itemsToPoll.slice(e+1)}addItemToPoll(e,t){if(this.itemsToPoll.push({isDoneFn:e,resolveFn:t}),this.itemsToPoll.length>1)return;let s;"setTimeoutCustom"in U().platform&&(s=U().platform.setTimeoutCustom.bind(U().platform)),Cp(()=>(this.pollItems(),this.itemsToPoll.length===0),()=>0,null,s)}bindTextureToFrameBuffer(e){this.throwIfDisposed(),Zd(this.gl,e,this.framebuffer),this.debug&&fc(this.gl)}unbindTextureToFrameBuffer(){this.outputTexture!=null?(Zd(this.gl,this.outputTexture,this.framebuffer),this.debug&&fc(this.gl)):S1(this.gl,this.framebuffer)}downloadMatrixDriver(e,t){this.bindTextureToFrameBuffer(e);const s=t();return this.unbindTextureToFrameBuffer(),s}setOutputMatrixTextureDriver(e,t,s){this.throwIfDisposed();const o=this.gl;Zd(o,e,this.framebuffer),this.debug&&fc(o),this.outputTexture=e,ie(o,()=>o.viewport(0,0,t,s)),ie(o,()=>o.scissor(0,0,t,s))}setOutputMatrixWriteRegionDriver(e,t,s,o){this.throwIfDisposed(),ie(this.gl,()=>this.gl.scissor(e,t,s,o))}throwIfDisposed(){if(this.disposed)throw new Error("Attempted to use disposed GPGPUContext.")}throwIfNoProgram(){if(this.program==null)throw new Error("No GPU program is currently set.")}}function pP(n){let e=0;for(;e<n.length&&n[e]();++e);return e-1}const{addImpl:fP,bincountImpl:z1,bincountReduceImpl:mP,bitwiseAndImpl:gP,castImpl:xP,ceilImpl:bP,concatImpl:yP,equalImpl:wP,expImpl:CP,expm1Impl:IP,floorImpl:$P,gatherNdImpl:vP,gatherV2Impl:kP,greaterImpl:SP,greaterEqualImpl:NP,lessImpl:TP,lessEqualImpl:EP,linSpaceImpl:RP,logImpl:AP,maxImpl:DP,maximumImpl:FP,minimumImpl:_P,multiplyImpl:OP,negImpl:LP,notEqualImpl:MP,prodImpl:PP,raggedGatherImpl:BP,raggedRangeImpl:zP,raggedTensorToTensorImpl:VP,rangeImpl:WP,rsqrtImpl:UP,scatterImpl:GP,sigmoidImpl:HP,simpleAbsImpl:V1,sliceImpl:qP,sparseFillEmptyRowsImpl:jP,sparseReshapeImpl:KP,sparseSegmentReductionImpl:W1,sqrtImpl:XP,staticRegexReplaceImpl:YP,stridedSliceImpl:ZP,stringNGramsImpl:QP,stringSplitImpl:JP,stringToHashBucketFastImpl:e3,subImpl:t3,tileImpl:n3,topKImpl:s3,transposeImpl:rp,uniqueImpl:o3}=cA;function U1(n,e){return["x","y","z","w","u","v"].slice(0,e).map(t=>`${n}.${t}`)}function Pt(n,e){return e===1?[n]:U1(n,e)}function r3(n,e){if(n===1)return"rc";let t="";for(let s=0;s<n;s++)t+=e[s],s<n-1&&(t+=",");return t}class i3{constructor(e){if(this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=e,this.rank=e.length,this.enableShapeUniforms=Ft(this.outputShape.length),this.rank===0)this.userCode=`
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;else{const t=Pt("rc",this.rank),s=We(this.rank),o=this.getOutOfBoundsCondition(t),r=this.getSetup(t),i=this.getOutput(t);this.userCode=`
        void main() {
          ${s} rc = getOutputCoords();

          if(${o}) {
            setOutput(vec4(0));
          } else {
            ${r}

            setOutput(vec4(${i}));
          }
        }
      `}}getSourceCoordsArr(e){const t=[];for(let s=0;s<=1;s++)for(let o=0;o<=1;o++){let r=`${s===0?"r":"rp1"}, ${o===0?"c":"cp1"}`;for(let i=2;i<this.rank;i++)r=`${e[e.length-1-i]},`+r;t.push(r)}return t}getOutOfBoundsCondition(e){if(this.rank===1)return`rc > ${this.enableShapeUniforms?"outShape":this.outputShape[0]}`;let t="";for(let s=this.rank-2;s<this.rank;s++)t+=`${e[s]} >= ${this.enableShapeUniforms?`outShape[${s}]`:this.outputShape[s]}`,s<this.rank-1&&(t+="||");return t}getSetup(e){if(this.rank===1)return"";const t=e.slice(-2),s=this.enableShapeUniforms?`outShape[${this.rank} - 1]`:this.outputShape[this.rank-1],o=this.enableShapeUniforms?`outShape[${this.rank} - 2]`:this.outputShape[this.rank-2];return`
      int r = ${t[0]};
      int c = ${t[1]};
      int rp1 = r + 1;
      int cp1 = c + 1;

      bool cEdge = cp1 >= ${s};
      bool rEdge = rp1 >= ${o};
    `}getOutput(e){const t=this.getSourceCoordsArr(e);return this.rank===1?`getA(rc), (rc + 1 >= ${this.enableShapeUniforms?"outShape":this.outputShape[0]} ? 0. : getA(rc + 1)), 0, 0`:`getA(${t[0]}),
            cEdge ? 0. : getA(${t[1]}),
            rEdge ? 0. : getA(${t[2]}),
            rEdge || cEdge ? 0. : getA(${t[3]})`}}class G1{constructor(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec3"}],this.outputShape=e,this.enableShapeUniforms=Ft(this.outputShape.length);let s="";for(let o=0;o<4;o++){let r="thisRC = rc;";o%2===1&&(r+="thisRC.z += 1;"),o>1&&(r+="thisRC.y += 1;"),s+=`
        ${r}
        ${o>0?"if(thisRC.y < rows && thisRC.z < cols){":""}
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[${o}] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        ${o>0?"}":""}
      `}this.userCode=`
      ${a3(t,this.enableShapeUniforms)}
      ${this.enableShapeUniforms?np():tp(e)}

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = ${this.enableShapeUniforms?"outShape[1]":e[1]};
        int cols = ${this.enableShapeUniforms?"outShape[2]":e[2]};

        ${s}

        setOutput(result);
      }
    `}}function a3(n,e){return`
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      ${e?rM(["r","c","d"],"inputShape"):go(["r","c","d"],n)}
      return ivec3(r, c, d);
    }
  `}class l3{constructor(e){this.gpgpu=e,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0,this.freeTextures={},this.usedTextures={},this.logEnabled=!1}acquireTexture(e,t,s){const o=q1(t,s),r=j1(e,o,s);r in this.freeTextures||(this.freeTextures[r]=[]),r in this.usedTextures||(this.usedTextures[r]=[]);const i=H1(e,o,this.gpgpu.gl,this.gpgpu.textureConfig,s);if(this.freeTextures[r].length>0){this.numFreeTextures--,this.numUsedTextures++,this._numBytesFree-=i,this.log();const l=this.freeTextures[r].pop();return this.usedTextures[r].push(l),l}let a;return o===St.PACKED_2X2_FLOAT32?a=this.gpgpu.createPackedMatrixTexture(e[0],e[1]):o===St.PACKED_2X2_FLOAT16?a=this.gpgpu.createFloat16PackedMatrixTexture(e[0],e[1]):o===St.UNPACKED_FLOAT32?a=this.gpgpu.createFloat32MatrixTexture(e[0],e[1]):o===St.UNPACKED_FLOAT16?a=this.gpgpu.createFloat16MatrixTexture(e[0],e[1]):o===St.PACKED_4X1_UNSIGNED_BYTE&&(a=this.gpgpu.createUnsignedBytesMatrixTexture(e[0],e[1])),this.usedTextures[r].push(a),this.numUsedTextures++,this._numBytesAllocated+=i,this.log(),a}releaseTexture(e,t,s,o){if(this.freeTextures==null)return;const r=q1(s,o),i=j1(t,r,o);i in this.freeTextures||(this.freeTextures[i]=[]);const a=H1(t,r,this.gpgpu.gl,this.gpgpu.textureConfig,o),l=U().getNumber("WEBGL_DELETE_TEXTURE_THRESHOLD");l!==-1&&this._numBytesAllocated>l?(this.gpgpu.deleteMatrixTexture(e.texture),this._numBytesAllocated-=a):(this.freeTextures[i].push(e),this.numFreeTextures++,this._numBytesFree+=a),this.numUsedTextures--;const c=this.usedTextures[i],u=c&&c.indexOf(e);if(u==null||u<0)throw new Error("Cannot release a texture that was never provided by this texture manager");c[u]=c[c.length-1],c.pop(),this.log()}log(){if(!this.logEnabled)return;const e=this.numFreeTextures+this.numUsedTextures;console.log("Free/Used",`${this.numFreeTextures} / ${this.numUsedTextures}`,`(${e})`);const t=this._numBytesFree/this._numBytesAllocated;console.log(`Bytes allocated: ${this._numBytesAllocated}`),console.log(`Bytes unused: ${this._numBytesFree} (${Math.round(100*t)}%)`)}get numBytesAllocated(){return this._numBytesAllocated}get numBytesFree(){return this._numBytesFree}getNumUsedTextures(){return this.numUsedTextures}getNumFreeTextures(){return this.numFreeTextures}dispose(){if(this.freeTextures!=null){for(const e in this.freeTextures)this.freeTextures[e].forEach(t=>{this.gpgpu.deleteMatrixTexture(t.texture)});for(const e in this.usedTextures)this.usedTextures[e].forEach(t=>{this.gpgpu.deleteMatrixTexture(t.texture)});this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0}}}function c3(n,e){const t=n;if(e===t.R32F)return 4;if(e===t.R16F)return 2;if(e===t.RGBA32F)return 16;if(e===n.RGBA)return 16;if(e===t.RGBA16F)return 8;if(e===t.RGBA8)return 4;throw new Error(`Unknown internal format ${e}`)}function H1(n,e,t,s,o){const r=u3(e,s);let i;if(o){const[l,c]=Zo(n[0],n[1]);i=l*c}else{const[l,c]=Wi(n[0],n[1]);i=l*c}const a=c3(t,r);return i*a}function u3(n,e){switch(n){case St.PACKED_2X2_FLOAT32:return P1(e);case St.PACKED_2X2_FLOAT16:return B1(e);case St.UNPACKED_FLOAT32:return O1(e);case St.UNPACKED_FLOAT16:return L1(e);case St.PACKED_4X1_UNSIGNED_BYTE:return M1(e);default:throw new Error(`Unknown physical texture type ${n}`)}}function h3(n){return U().getBool("WEBGL_RENDER_FLOAT32_ENABLED")?n?St.PACKED_2X2_FLOAT32:St.UNPACKED_FLOAT32:n?St.PACKED_2X2_FLOAT16:St.UNPACKED_FLOAT16}function q1(n,e){if(n===sn.UPLOAD)return St.PACKED_2X2_FLOAT32;if(n===sn.RENDER||n==null)return h3(e);if(n===sn.DOWNLOAD||n===sn.PIXELS)return St.PACKED_4X1_UNSIGNED_BYTE;throw new Error(`Unknown logical texture type ${n}`)}function j1(n,e,t){return`${n[0]}_${n[1]}_${e}_${t}`}class Kn{constructor(e,t){this.variableNames=["A"],this.outputShape=e,this.enableShapeUniforms=Ft(this.outputShape.length),this.userCode=`
      float unaryOperation(float x) {
        ${t}
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `}}const gn="if (isnan(x)) return x;",d3="return x;",K1="return abs(x);",p3="return (x >= 0.0) ? x : (exp(x) - 1.0);",f3=gn+`
  return (x < 0.0) ? 0.0 : x;
`,m3=gn+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,Rs="return x;",g3="return 1.0 / (1.0 + exp(-1.0 * x));";const x3="return x;",b3=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,y3=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,w3=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,C3="return 1.0 / (1.0 + exp(-1.0 * x));";class As{constructor(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.enableShapeUniforms=Ft(this.outputShape.length),this.userCode=`
      vec4 unaryOperation(vec4 x) {
        ${t}
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `}}class I3{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=e,this.enableShapeUniforms=Ft(this.outputShape.length);const t=e.length,s=Pt("rc",t),o=We(t),r=r3(t,s),i=s.slice(-2),a=t<=1?"rc":`vec2(${i.join(",")})`;this.userCode=`
      void main() {
        ${o} rc = getOutputCoords();
        vec4 packedInput = getA(${r});

        setOutput(getChannel(packedInput, ${a}));
      }
    `}}const $3=ym,v3=1e-7,k3=1e-4,yc={};function S3(n){return n in yc||(yc[n]={}),yc[n]}const N3=U().getNumber("CPU_HANDOFF_SIZE_THRESHOLD"),T3=600;function E3(){return U().global.screen==null?1024:U().global.screen.height*U().global.screen.width*window.devicePixelRatio*T3/1024/1024}class wc extends $o{nextDataId(){return wc.nextDataId++}constructor(e){if(super(),this.pendingRead=new WeakMap,this.pendingDisposal=new WeakSet,this.dataRefCount=new WeakMap,this.numBytesInGPU=0,this.uploadWaitMs=0,this.downloadWaitMs=0,this.lastGlFlushTime=0,this.warnedAboutMemory=!1,this.pendingDeletes=0,this.disposed=!1,!U().getBool("HAS_WEBGL"))throw new Error("WebGL is not supported on this device");let t;if(e!=null){if(e instanceof op)t=e;else{const s=En(U().getNumber("WEBGL_VERSION"),e);t=new op(s)}this.binaryCache={},this.gpgpuCreatedLocally=!1}else{const s=En(U().getNumber("WEBGL_VERSION"));t=new op(s),this.binaryCache=S3(U().getNumber("WEBGL_VERSION")),this.gpgpuCreatedLocally=!0}this.gpgpu=t,this.canvas=this.gpgpu.gl.canvas,this.textureManager=new l3(this.gpgpu),this.numMBBeforeWarning=E3(),this.texData=new Ji(this,je())}numDataIds(){return this.texData.numDataIds()-this.pendingDeletes}writeTexture(e,t,s,o,r,i){const a=this.makeTensorInfo(t,s),l=this.texData.get(a.dataId);l.isPacked=!1,l.texture={texture:e,texShape:[o,r]},l.texShape=[o,r];const c=mc(t),u=new _1(c,!1,i),h=this.runWebGLProgram(u,[a],s,[[o,r]]);return h.shape=t,l.texture=null,this.disposeIntermediateTensorInfo(a),h.dataId}write(e,t,s){if((U().getBool("WEBGL_CHECK_NUMERICAL_PROBLEMS")||U().getBool("DEBUG"))&&this.checkNumericalProblems(e),s==="complex64"&&e!=null)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");const o={id:this.nextDataId()};return this.texData.set(o,{shape:t,dtype:s,values:e,usage:sn.UPLOAD,refCount:1}),o}refCount(e){return this.texData.has(e)?this.texData.get(e).refCount:0}incRef(e){const t=this.texData.get(e);t.refCount++}decRef(e){if(this.texData.has(e)){const t=this.texData.get(e);t.refCount--}}move(e,t,s,o,r){if(U().getBool("DEBUG")&&this.checkNumericalProblems(t),o==="complex64")throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.texData.set(e,{shape:s,dtype:o,values:t,usage:sn.UPLOAD,refCount:r})}disposeIntermediateTensorInfo(e){this.disposeData(e.dataId)}readSync(e){const t=this.texData.get(e),{values:s,dtype:o,complexTensorInfos:r,slice:i,shape:a,isPacked:l}=t;if(i!=null){let d;l?d=new As(a,Rs):d=new Kn(a,Rs);const p=this.runWebGLProgram(d,[{dataId:e,shape:a,dtype:o}],o),f=this.readSync(p.dataId);return this.disposeIntermediateTensorInfo(p),f}if(s!=null)return this.convertAndCacheOnCPU(e);if(o==="string")return s;const c=this.activeTimers!=null;let u;c&&(u=zt());let h;if(o==="complex64"){const d=this.readSync(r.real.dataId),p=this.readSync(r.imag.dataId);h=ss(d,p)}else h=this.getValuesFromTexture(e);return c&&(this.downloadWaitMs+=zt()-u),this.convertAndCacheOnCPU(e,h)}read(e){return X(this,null,function*(){if(this.pendingRead.has(e)){const f=this.pendingRead.get(e);return new Promise(m=>f.push(m))}const t=this.texData.get(e),{values:s,shape:o,slice:r,dtype:i,complexTensorInfos:a,isPacked:l}=t;if(r!=null){let f;l?f=new As(o,Rs):f=new Kn(o,Rs);const m=this.runWebGLProgram(f,[{dataId:e,shape:o,dtype:i}],i),g=this.read(m.dataId);return this.disposeIntermediateTensorInfo(m),g}if(s!=null)return this.convertAndCacheOnCPU(e);if(U().getBool("DEBUG")&&!U().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")&&U().getNumber("WEBGL_VERSION")===2)throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");let c=null,u;if(i!=="complex64"&&U().get("WEBGL_BUFFER_SUPPORTED")){u=this.decode(e);const f=this.texData.get(u.dataId);c=this.gpgpu.createBufferFromTexture(f.texture.texture,...dc(o))}this.pendingRead.set(e,[]),i!=="complex64"&&(yield this.gpgpu.createAndWaitForFence());let h;if(i==="complex64"){const f=yield Promise.all([this.read(a.real.dataId),this.read(a.imag.dataId)]),m=f[0],g=f[1];h=ss(m,g)}else if(c==null)h=this.getValuesFromTexture(e);else{const f=j(o);h=this.gpgpu.downloadFloat32MatrixFromBuffer(c,f)}if(u!=null&&this.disposeIntermediateTensorInfo(u),c!=null){const f=this.gpgpu.gl;ie(f,()=>f.deleteBuffer(c))}const d=this.convertAndCacheOnCPU(e,h),p=this.pendingRead.get(e);return this.pendingRead.delete(e),p.forEach(f=>f(d)),this.pendingDisposal.has(e)&&(this.pendingDisposal.delete(e),this.disposeData(e)&&je().removeDataId(e,this),this.pendingDeletes--),d})}readToGPU(e,t={}){const s=this.texData.get(e),{values:o,shape:r,slice:i,dtype:a,isPacked:l,texture:c}=s;if(a==="complex64")throw new Error("Does not support reading texture for complex64 dtype.");if(i!=null){let p;l?p=new As(r,Rs):p=new Kn(r,Rs);const f=this.runWebGLProgram(p,[{dataId:e,shape:r,dtype:a}],a),m=this.readToGPU(f,t);return this.disposeIntermediateTensorInfo(f),m}if(c==null)throw o!=null?new Error("Data is not on GPU but on CPU."):new Error("There is no data on GPU or CPU.");const u=this.decode(e,t.customTexShape),h=je().makeTensorFromTensorInfo(u),d=this.texData.get(u.dataId);return Object.assign({tensorRef:h},d.texture)}bufferSync(e){const t=this.readSync(e.dataId);if(e.dtype==="string")try{const s=t.map(o=>ps(o));return ke(e.shape,e.dtype,s)}catch(s){throw new Error("Failed to decode encoded string bytes into utf-8")}return ke(e.shape,e.dtype,t)}checkNumericalProblems(e){if(e!=null)for(let t=0;t<e.length;t++){const s=e[t];if(!DL(s))throw U().getBool("WEBGL_RENDER_FLOAT32_CAPABLE")?Error(`The value ${s} cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'`):Error(`The value ${s} cannot be represented on this device.`)}}getValuesFromTexture(e){const{shape:t,dtype:s,isPacked:o}=this.texData.get(e),r=j(t);if(U().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")){const d=this.decode(e),p=this.texData.get(d.dataId),f=this.gpgpu.downloadMatrixFromPackedTexture(p.texture.texture,...dc(t)).subarray(0,r);return this.disposeIntermediateTensorInfo(d),f}const i=U().getBool("WEBGL_PACK")&&o===!0,a=i?mc(t):t,l=i?new KM(a):new jM(a),c=this.runWebGLProgram(l,[{shape:a,dtype:s,dataId:e}],"float32"),u=this.texData.get(c.dataId),h=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(u.texture.texture,u.texShape[0],u.texShape[1]).subarray(0,r);return this.disposeIntermediateTensorInfo(c),h}timerAvailable(){return U().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0}time(e){const t=this.activeTimers,s=[];let o=!1;this.programTimersStack==null?(this.programTimersStack=s,o=!0):this.activeTimers.push(s),this.activeTimers=s,e();const r=zs(this.activeTimers.map(l=>l.query)).filter(l=>l!=null),i=zs(this.activeTimers.map(l=>l.name)).filter(l=>l!=null);this.activeTimers=t,o&&(this.programTimersStack=null);const a={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null};return X(this,null,function*(){if(U().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0){const l=yield Promise.all(r);a.kernelMs=Qy(l),a.getExtraProfileInfo=()=>l.map((c,u)=>({name:i[u],ms:c})).map(c=>`${c.name}: ${c.ms}`).join(", ")}else a.kernelMs={error:"WebGL query timers are not supported in this environment."};return this.uploadWaitMs=0,this.downloadWaitMs=0,a})}memory(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU,numBytesInGPUAllocated:this.textureManager.numBytesAllocated,numBytesInGPUFree:this.textureManager.numBytesFree}}startTimer(){return U().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?this.gpgpu.beginQuery():{startMs:zt(),endMs:null}}endTimer(e){return U().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?(this.gpgpu.endQuery(),e):(e.endMs=zt(),e)}getQueryTime(e){return X(this,null,function*(){if(U().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0)return this.gpgpu.waitForQueryAndGetTime(e);const t=e;return t.endMs-t.startMs})}disposeData(e,t=!1){if(this.pendingDisposal.has(e))return!1;if(!this.texData.has(e))return!0;if(t?this.texData.get(e).refCount=0:this.texData.get(e).refCount--,!t&&this.texData.get(e).refCount>0)return!1;if(this.pendingRead.has(e))return this.pendingDisposal.add(e),this.pendingDeletes++,!1;this.releaseGPUData(e);const{complexTensorInfos:s}=this.texData.get(e);return s!=null&&(this.disposeData(s.real.dataId,t),this.disposeData(s.imag.dataId,t)),this.texData.delete(e),!0}releaseGPUData(e){const{texture:t,dtype:s,texShape:o,usage:r,isPacked:i,slice:a}=this.texData.get(e),l=a&&a.origDataId||e,c=this.dataRefCount.get(l);c>1?this.dataRefCount.set(l,c-1):(this.dataRefCount.delete(l),t!=null&&(this.numBytesInGPU-=this.computeBytes(o,s),this.textureManager.releaseTexture(t,o,r,i)));const u=this.texData.get(e);u.texture=null,u.texShape=null,u.isPacked=!1,u.slice=null}getTexture(e){return this.uploadToGPU(e),this.texData.get(e).texture.texture}getDataInfo(e){return this.texData.get(e)}shouldExecuteOnCPU(e,t=N3){return U().getBool("WEBGL_CPU_FORWARD")&&e.every(s=>this.texData.get(s.dataId).texture==null&&j(s.shape)<t)}getGPGPUContext(){return this.gpgpu}where(e){Jt("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");const t=e.dataSync();return $3(e.shape,t)}packedUnaryOp(e,t,s){const o=new As(e.shape,t),r=this.compileAndRun(o,[e],s);return je().makeTensorFromTensorInfo(r)}abs(e){if(this.shouldExecuteOnCPU([e])&&e.dtype!=="complex64"){const o=V1(this.texData.get(e.dataId).values);return this.makeOutput(e.shape,e.dtype,o)}if(U().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,K1,e.dtype);const t=new Kn(e.shape,K1),s=this.compileAndRun(t,[e]);return je().makeTensorFromTensorInfo(s)}makeTensorInfo(e,t,s){let o;if(t==="string"&&s!=null&&s.length>0&&lr(s[0])){const r=s.map(i=>ds(i));o=this.write(r,e,t)}else o=this.write(s,e,t);return this.texData.get(o).usage=null,{dataId:o,shape:e,dtype:t}}makeOutput(e,t,s){return je().makeTensorFromTensorInfo(this.makeTensorInfo(e,t,s),this)}unpackTensor(e){const t=new I3(e.shape);return this.runWebGLProgram(t,[e],e.dtype)}packTensor(e){const t=new i3(e.shape);return this.runWebGLProgram(t,[e],e.dtype,null,!0)}packedReshape(e,t){const s=[Qo(e.shape),...Jo(e.shape)],o={dtype:e.dtype,shape:s,dataId:e.dataId},r=[Qo(t),...Jo(t)],i=new G1(r,s),a=!0,l=[s],c=this.runWebGLProgram(i,[o],e.dtype,l,a);return{dataId:c.dataId,shape:t,dtype:c.dtype}}decode(e,t){const s=this.texData.get(e),{isPacked:o,shape:r,dtype:i}=s;if(t!=null){const d=j(r),p=t[0]*t[1]*4;S(d<=p,()=>"customTexShape is too small. Row * Column * 4 should be equal or larger than the size of the tensor data.")}const a=mc(r);let l;o?l=new qM(a):l=new HM(a);const c=!0,u=[t!=null?t:dc(a)],h=this.runWebGLProgram(l,[{shape:a,dtype:i,dataId:e}],i,u,c,t);return{dtype:i,shape:r,dataId:h.dataId}}runWebGLProgram(e,t,s,o,r=!1,i){const a=this.makeTensorInfo(e.outputShape,s),l=this.texData.get(a.dataId);if(e.packedOutput&&(l.isPacked=!0),e.outPackingScheme===Vi.DENSE){const x=i!=null?i:dc(e.outputShape);l.texShape=x.map(b=>b*2)}if(e.outTexUsage!=null&&(l.usage=e.outTexUsage),j(a.shape)===0)return l.values=Tt(a.dtype,0),a;const c=[],u=t.map(x=>{if(x.dtype==="complex64")throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");let b=this.texData.get(x.dataId);if(b.texture==null){if(!e.packedInputs&&j(x.shape)<=U().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM"))return{shape:x.shape,texData:null,isUniform:!0,uniformValues:b.values};e.packedInputs&&(b.isPacked=!0,b.shape=x.shape)}if(this.uploadToGPU(x.dataId),!!b.isPacked!=!!e.packedInputs)x=b.isPacked?this.unpackTensor(x):this.packTensor(x),c.push(x),b=this.texData.get(x.dataId);else if(b.isPacked&&!xc(b.shape,x.shape)){const w=x,y=x.shape;x.shape=b.shape,x=this.packedReshape(x,y),c.push(x),b=this.texData.get(x.dataId),w.shape=y}return{shape:x.shape,texData:b,isUniform:!1}});this.uploadToGPU(a.dataId);const h={shape:a.shape,texData:l,isUniform:!1},d=GM(e,u,h),p=this.getAndSaveBinary(d,()=>WM(this.gpgpu,e,u,h)),f=this.activeTimers!=null;let m;f&&(m=this.startTimer()),U().get("ENGINE_COMPILE_ONLY")||UM(this.gpgpu,p,u,h,o),c.forEach(x=>this.disposeIntermediateTensorInfo(x)),f&&(m=this.endTimer(m),this.activeTimers.push({name:e.constructor.name,query:this.getQueryTime(m)}));const g=U().getNumber("WEBGL_FLUSH_THRESHOLD");if(g>0){const x=zt();x-this.lastGlFlushTime>g&&(this.gpgpu.gl.flush(),this.lastGlFlushTime=x)}if(!U().getBool("WEBGL_LAZILY_UNPACK")&&l.isPacked&&r===!1){const x=this.unpackTensor(a);return this.disposeIntermediateTensorInfo(a),x}return a}compileAndRun(e,t,s,o,r=!1){return s=s||t[0].dtype,this.runWebGLProgram(e,t,s,o,r)}getAndSaveBinary(e,t){return e in this.binaryCache||(this.binaryCache[e]=t()),this.binaryCache[e]}getTextureManager(){return this.textureManager}dispose(){this.disposed||(U().getBool("IS_TEST")||Object.keys(this.binaryCache).forEach(t=>{this.gpgpu.deleteProgram(this.binaryCache[t].webGLProgram),delete this.binaryCache[t]}),this.textureManager.dispose(),this.canvas!=null&&typeof HTMLCanvasElement!="undefined"&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),this.disposed=!0)}floatPrecision(){return this.floatPrecisionValue==null&&(this.floatPrecisionValue=z(()=>{if(!U().get("WEBGL_RENDER_FLOAT32_ENABLED")){const e=U().getBool("DEBUG");U().set("DEBUG",!1);const t=this.abs(Oe(1e-8)).dataSync()[0];if(U().set("DEBUG",e),t>0)return 32}return 16})),this.floatPrecisionValue}epsilon(){return this.floatPrecision()===32?v3:k3}uploadToGPU(e){const t=this.texData.get(e),{shape:s,dtype:o,values:r,texture:i,usage:a,isPacked:l}=t;if(i!=null)return;const c=this.activeTimers!=null;let u;c&&(u=zt());let h=t.texShape;if(h==null&&(h=YL(s,l),t.texShape=h),r!=null){const d=mc(s);let p,f=h[1],m=h[0];const g=r instanceof Uint8Array||r instanceof Uint8ClampedArray;(l||!g)&&([f,m]=Zo(h[0],h[1])),l?p=new YM(d,g):p=new _1(d,g);const x=g?[m,f]:h,b=this.makeTensorInfo(x,o),w=this.texData.get(b.dataId);g?w.usage=sn.PIXELS:w.usage=sn.UPLOAD,w.texShape=x,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(b.dataId),f,m,r);const y=[[m,f]],$=this.runWebGLProgram(p,[b],o,y,!0),v=this.texData.get($.dataId);t.texShape=v.texShape,t.isPacked=v.isPacked,t.usage=v.usage,U().get("ENGINE_COMPILE_ONLY")?this.disposeData($.dataId):(t.texture=v.texture,t.values=null,this.texData.delete($.dataId)),this.disposeIntermediateTensorInfo(b),c&&(this.uploadWaitMs+=zt()-u)}else{const d=this.acquireTexture(h,a,o,l);t.texture=d}}convertAndCacheOnCPU(e,t){const s=this.texData.get(e),{dtype:o}=s;return t!=null&&(s.values=R3(t,o)),s.values}acquireTexture(e,t,s,o){if(this.numBytesInGPU+=this.computeBytes(e,s),!this.warnedAboutMemory&&this.numBytesInGPU>this.numMBBeforeWarning*1024*1024){const r=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn(`High memory usage in GPU: ${r} MB, most likely due to a memory leak`)}return this.textureManager.acquireTexture(e,t,o)}computeBytes(e,t){return e[0]*e[1]*ea(t)}checkCompileCompletion(){for(const[,e]of Object.entries(this.binaryCache))this.checkCompletion_(e)}checkCompileCompletionAsync(){return X(this,null,function*(){const e=[];if(this.gpgpu.parallelCompilationExtension){for(const[,t]of Object.entries(this.binaryCache))e.push(this.checkCompletionAsync_(t));return Promise.all(e)}else{for(const[,t]of Object.entries(this.binaryCache)){const s=new Promise(o=>{try{this.checkCompletion_(t),o(!0)}catch(r){throw r}});e.push(s)}return Promise.all(e)}})}checkCompletionAsync_(e){return X(this,null,function*(){return this.gpgpu.gl.getProgramParameter(e.webGLProgram,this.gpgpu.parallelCompilationExtension.COMPLETION_STATUS_KHR)?this.checkCompletion_(e):(yield Wm(),this.checkCompletionAsync_(e))})}checkCompletion_(e){if(this.gpgpu.gl.getProgramParameter(e.webGLProgram,this.gpgpu.gl.LINK_STATUS)===!1)throw console.log(this.gpgpu.gl.getProgramInfoLog(e.webGLProgram)),this.gpgpu.gl.getShaderParameter(e.fragmentShader,this.gpgpu.gl.COMPILE_STATUS)===!1?(v1(e.source,this.gpgpu.gl.getShaderInfoLog(e.fragmentShader)),new Error("Failed to compile fragment shader.")):new Error("Failed to link vertex and fragment shaders.");return!0}getUniformLocations(){for(const e of Object.values(this.binaryCache)){this.gpgpu.buildVao(e.webGLProgram);const{variablesLocations:t,customUniformLocations:s,infLoc:o,nanLoc:r,outShapeLocation:i,outShapeStridesLocation:a,outTexShapeLocation:l}=D1(this.gpgpu,e.program,e.webGLProgram);e.variablesLocations=t,e.customUniformLocations=s,e.infLoc=o,e.nanLoc=r,e.outShapeLocation=i,e.outShapeStridesLocation=a,e.outTexShapeLocation=l}}createTensorFromGPUData(e,t,s){e.channels=e.channels||"RGBA";const{texture:o,height:r,width:i,channels:a}=e,l=je().backend;if(!l.gpgpu.gl.isTexture(o))throw new Error("The texture is invalid. Also, please make sure the texture and the TFJS WebGL backend are using the same canvas. If you want to use your own custom canvas, you have to create and use the custom TFJS WebGL backend created from the canvas through 'new tf.MathBackendWebGL(customCanvas)'.");const c=l.writeTexture(o,t,s,r,i,a);return je().makeTensorFromDataId(c,t,s,l)}}wc.nextDataId=0;function R3(n,e){if(e==="float32"||e==="complex64")return n;if(e==="int32"||e==="bool"){const t=e==="int32"?new Int32Array(n.length):new Uint8Array(n.length);for(let s=0;s<t.length;++s)t[s]=Math.round(n[s]);return t}else throw new Error(`Unknown dtype ${e}`)}yf()&&$f("webgl",()=>new wc,2);const ip=`
  if (isnan(a)) return a;
  if (isnan(b)) return b;
`;class bo{constructor(e,t,s){this.variableNames=["A","B"],this.outputShape=we(t,s),this.enableShapeUniforms=Ft(this.outputShape.length),this.userCode=`
      float binaryOperation(float a, float b) {
        ${e}
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `}}const yo=`
  result.r = isNaN.r ? NAN : result.r;
  result.g = isNaN.g ? NAN : result.g;
  result.b = isNaN.b ? NAN : result.b;
  result.a = isNaN.a ? NAN : result.a;
`;class or{constructor(e,t,s,o=!1){this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=we(t,s);const r=this.outputShape.length;this.enableShapeUniforms=Ft(r);let i="";if(o)if(r===0||j(this.outputShape)===1)i=`
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;else if(i=`
          ${We(r)} coords = getOutputCoords();
        `,r===1)this.enableShapeUniforms?i+=`
            result.y = (coords + 1) >= outShape ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `:i+=`
            result.y = (coords + 1) >= ${this.outputShape[0]} ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;else{const l=Pt("coords",r);this.enableShapeUniforms?i+=`
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
        ${e}
      }

      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();

        vec4 result = binaryOperation(a, b);
        ${i}

        setOutput(result);
      }
    `}}function Qt(n){const{inputs:e,backend:t}=n,{x:s}=e;return t.incRef(s.dataId),{dataId:s.dataId,shape:s.shape,dtype:s.dtype}}const A3={kernelName:Er,backendName:"webgl",kernelFunc:Qt};function Ds(n){const{inputs:e,backend:t}=n,{real:s,imag:o}=e,r=t.makeTensorInfo(s.shape,"complex64"),i=t.texData.get(r.dataId),a=Qt({inputs:{x:s},backend:t}),l=Qt({inputs:{x:o},backend:t});return i.complexTensorInfos={real:a,imag:l},r}const D3={kernelName:Qc,backendName:"webgl",kernelFunc:Ds};const X1="return (a < 0.) ? b * a : a;",Y1=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`;function F3(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{alpha:r}=s,i=t.makeTensorInfo([],"float32",hs(r,"float32")),a=U().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new or(Y1,o.shape,i.shape):new bo(X1,o.shape,i.shape),l=t.runWebGLProgram(a,[o,i],"float32");return t.disposeIntermediateTensorInfo(i),l}const _3={kernelName:Ca,backendName:"webgl",kernelFunc:F3};const Z1="return (a < 0.) ? b * a : a;",Q1=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`;function O3(n){const{inputs:e,backend:t}=n,{x:s,alpha:o}=e,r=U().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new or(Q1,s.shape,o.shape):new bo(Z1,s.shape,o.shape);return t.runWebGLProgram(r,[s,o],"float32")}const L3={kernelName:za,backendName:"webgl",kernelFunc:O3};const rr="if (isnan(x)) return x;";function Ae({opSnippet:n,packedOpSnippet:e,cpuKernelImpl:t,dtype:s}){return({inputs:o,backend:r})=>{const{x:i}=o,a=r,l=s||i.dtype;if(a.shouldExecuteOnCPU([i])&&t!=null){const h=a.texData.get(i.dataId),d=t(h.values,l);return a.makeTensorInfo(i.shape,l,d)}const c=U().getBool("WEBGL_PACK_UNARY_OPERATIONS")&&e!=null;let u;return c?u=new As(i.shape,e):u=new Kn(i.shape,n),a.runWebGLProgram(u,[i],l)}}function Nt({opSnippet:n,packedOpSnippet:e,checkOutOfBounds:t=!1,supportsComplex:s=!1,cpuKernelImpl:o,dtype:r}){return({inputs:i,backend:a})=>{const{a:l,b:c}=i,u=a;if(s&&l.dtype==="complex64"){const f=u.texData.get(l.dataId),m=u.texData.get(c.dataId),[g,x]=[[f.complexTensorInfos.real,m.complexTensorInfos.real],[f.complexTensorInfos.imag,m.complexTensorInfos.imag]].map(w=>{const[y,C]=w,$={dataId:y.dataId,dtype:y.dtype,shape:l.shape},v={dataId:C.dataId,dtype:C.dtype,shape:c.shape},k=new bo(n,l.shape,c.shape);return u.runWebGLProgram(k,[$,v],Kt(y.dtype,C.dtype))}),b=Ds({inputs:{real:g,imag:x},backend:u});return u.disposeIntermediateTensorInfo(g),u.disposeIntermediateTensorInfo(x),b}const h=r||Kt(l.dtype,c.dtype);if((l.dtype==="string"||c.dtype==="string"||u.shouldExecuteOnCPU([l,c]))&&o!=null){const f=u.texData.get(l.dataId).values,m=u.texData.get(c.dataId).values,g=l.dtype==="string"?os(f):f,x=l.dtype==="string"?os(m):m,[b,w]=o(l.shape,c.shape,g,x,h),y=u.makeTensorInfo(w,h),C=u.texData.get(y.dataId);return C.values=b,y}const d=U().getBool("WEBGL_PACK_BINARY_OPERATIONS")&&e!=null;let p;return d?p=new or(e,l.shape,c.shape,t):p=new bo(n,l.shape,c.shape),u.runWebGLProgram(p,[l,c],h)}}function Hi(n,e=!1){if(n==="linear")return e?x3:d3;if(n==="relu")return e?y3:f3;if(n==="elu")return e?b3:p3;if(n==="relu6")return e?w3:m3;if(n==="prelu")return e?Q1:Z1;if(n==="leakyrelu")return e?Y1:X1;if(n==="sigmoid")return e?C3:g3;throw new Error(`Activation ${n} has not been implemented for the WebGL backend.`)}class J1{constructor(e,t,s,o=!1,r=!1,i=!1,a=null,l=!1,c=!1){this.variableNames=["matrixA","matrixB"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=s,this.enableShapeUniforms=Ft(this.outputShape.length);const u=o?e[1]:e[2],h=Math.ceil(u/2),d=o?"i * 2, rc.y":"rc.y, i * 2",p=r?"rc.z, i * 2":"i * 2, rc.z",f=o?["a.xxyy","a.zzww"]:["a.xxzz","a.yyww"],m=r?["b.xzxz","b.ywyw"]:["b.xyxy","b.zwzw"];let g="",x="";a&&(l?g=`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${a}
        }`:c?g=`vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${a}
        }`:g=`vec4 activation(vec4 x) {
          ${a}
        }`,x="result = activation(result);");const b=i?"result += getBiasAtOutCoords();":"";i&&this.variableNames.push("bias"),l&&this.variableNames.push("preluActivationWeights"),c&&this.variableNames.push("leakyreluAlpha");let w="rc.x",y="rc.x";e[0]<t[0]?w=`imod(rc.x, ${e[0]})`:t[0]<e[0]&&(y=`imod(rc.x, ${t[0]})`),this.userCode=`
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
    `}}const ey={REAL:"return areal * breal - aimag * bimag;",IMAG:"return areal * bimag + aimag * breal;"};class ty{constructor(e,t,s){this.variableNames=["AReal","AImag","BReal","BImag"],this.outputShape=we(t,s),this.userCode=`
      float binaryOpComplex(
          float areal, float aimag, float breal, float bimag) {
        ${e}
      }

      void main() {
        float areal = getARealAtOutCoords();
        float aimag = getAImagAtOutCoords();
        float breal = getBRealAtOutCoords();
        float bimag = getBImagAtOutCoords();
        setOutput(binaryOpComplex(areal, aimag, breal, bimag));
      }
    `}}const ny="return a * b;";function ap(n){const{inputs:e,backend:t}=n,{a:s,b:o}=e,r=Kt(s.dtype,o.dtype);if(s.dtype==="complex64"){const a=t.texData.get(s.dataId),l=t.texData.get(o.dataId),c=new ty(ey.REAL,s.shape,o.shape),u=new ty(ey.IMAG,s.shape,o.shape),h=[{dataId:a.complexTensorInfos.real.dataId,dtype:a.complexTensorInfos.real.dtype,shape:s.shape},{dataId:a.complexTensorInfos.imag.dataId,dtype:a.complexTensorInfos.imag.dtype,shape:s.shape},{dataId:l.complexTensorInfos.real.dataId,dtype:l.complexTensorInfos.real.dtype,shape:o.shape},{dataId:l.complexTensorInfos.imag.dataId,dtype:l.complexTensorInfos.imag.dtype,shape:o.shape}],d=t.runWebGLProgram(c,h,"float32"),p=t.runWebGLProgram(u,h,"float32"),f=Ds({inputs:{real:d,imag:p},backend:t});return t.disposeIntermediateTensorInfo(d),t.disposeIntermediateTensorInfo(p),f}if(t.shouldExecuteOnCPU([s,o])){const a=t.texData.get(s.dataId),l=t.texData.get(o.dataId),[c,u]=OP(s.shape,o.shape,a.values,l.values,r),h=t.makeTensorInfo(u,r),d=t.texData.get(h.dataId);return d.values=c,h}let i;return U().getBool("WEBGL_PACK_BINARY_OPERATIONS")?i=new or(ny,s.shape,o.shape):i=new bo(ny,s.shape,o.shape),t.runWebGLProgram(i,[s,o],r)}const M3={kernelName:Pr,backendName:"webgl",kernelFunc:ap};function P3(n,e,t){const s=[Qo(n.shape),...Jo(n.shape)],o={dtype:n.dtype,shape:s,dataId:n.dataId},r=[Qo(e),...Jo(e)],i=new G1(r,s),a=!0,l=[s],c=t.runWebGLProgram(i,[o],n.dtype,l,a);return{dataId:c.dataId,shape:e,dtype:c.dtype}}function se(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{shape:r}=s,i=t,a=j(o.shape),l=Ip(r,a),c=j(l);S(a===c,()=>`The new shape (${l}) has ${c} elements and the old shape (${o.shape}) has ${a} elements. The new shape and old shape must have the same number of elements.`);const u=i.texData.get(o.dataId);return u.isPacked&&!xc(o.shape,l)&&!(u.texture!==null&&xc(u.shape,l))?P3(o,l,i):(i.incRef(o.dataId),{dataId:o.dataId,shape:l,dtype:o.dtype})}const B3={kernelName:Wa,backendName:"webgl",kernelFunc:se};class sy{constructor(e,t){this.variableNames=["x"];const{windowSize:s,batchSize:o,inSize:r,outSize:i}=e;this.outputShape=[o,i];const a=Math.floor(s/4)*4,l=s%4;let c="sumValue += dot(values, ones);";if(t!=null){const h=1/t;c=`sumValue += dot(values * ${vo(h)?h.toPrecision(2):h}, ones);`}let u="";r%s>0&&(u=`
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
    `}}class z3{constructor(e,t){this.variableNames=["x"];const{windowSize:s,batchSize:o,inSize:r,outSize:i}=e;this.outputShape=[o,i];let a="0.0",l="";t==="prod"?a="1.0":t==="min"?(a="1.0 / 1e-20",l="min"):t==="max"&&(a="-1.0 / 1e-20",l="max");let c=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;t==="sum"?c="sumValue":t==="prod"?c="prodValue":t==="all"?c="allValue":t==="any"&&(c="anyValue");const u=Math.floor(s/4)*4,h=s%4;let d=`
      if (${t==="sum"}) {
        sumValue += dot(values, ones);
      } else if (${t==="prod"}) {
        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);
        prodValue *= tmp[0] * tmp[1];
      } else {
        minMaxValue = ${l}(values, minMaxValue);
        if (${t==="min"} || ${t==="max"}) {
          minMaxValue = ${l}(values, minMaxValue);
          bvec4 isNaN = isnan(values);
          if (isNaN.r || isNaN.g || isNaN.b || isNaN.a) {
            minMaxValue = vec4(NAN);
          }
        }
      }
    `,p="vec4";t==="all"?(a="1.0",d=`
        bool reducedAllValue = all(values);
        float floatedReducedAllValue = float(reducedAllValue);
        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);
      `,p="bvec4"):t==="any"&&(a="0.0",d=`
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
    `}}function V3(n){const e=[];for(;e.length===0||e[e.length-1].outSize!==1;){const t=e.length?e[e.length-1].outSize:n[1],s=Al(t);e.push({inSize:t,windowSize:s,outSize:Math.ceil(t/s)})}return e}function wo(n,e,t,s){const o=V3(n.shape);let r=n;for(let i=0;i<o.length;i++){const{inSize:a,windowSize:l,outSize:c}=o[i];let u,h;t==="mean"?u=i===0?new sy({windowSize:l,inSize:a,batchSize:n.shape[0],outSize:c},a):new sy({windowSize:l,inSize:a,batchSize:n.shape[0],outSize:c}):u=new z3({windowSize:l,inSize:a,batchSize:n.shape[0],outSize:c},t),h=r,r=s.runWebGLProgram(u,[r],e),h.dataId!==n.dataId&&s.disposeIntermediateTensorInfo(h)}return r}class W3{constructor(e,t){this.variableNames=["A"];const s=new Array(e.length);for(let i=0;i<s.length;i++)s[i]=e[t[i]];this.outputShape=s,this.rank=s.length;const o=We(this.rank),r=U3(t);this.userCode=`
    void main() {
      ${o} resRC = getOutputCoords();
      setOutput(getA(${r}));
    }
    `}}function U3(n){const e=n.length;if(e>6)throw Error(`Transpose for rank ${e} is not yet supported`);const t=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u","resRC.v"],s=new Array(e);for(let o=0;o<n.length;o++)s[n[o]]=t[o];return s.join()}class G3{constructor(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0;const s=new Array(e.length);for(let u=0;u<s.length;u++)s[u]=e[t[u]];if(this.outputShape=s,this.rank=s.length,this.rank>6)throw Error(`Packed transpose for rank ${this.rank} is not yet supported.`);const o=We(this.rank),r=U1("rc",this.rank),i=new Array(this.rank);for(let u=0;u<t.length;u++)i[t[u]]=r[u];const a=`vec2(${i.slice(-2).join()})`,l=`++${r[this.rank-1]} < ${s[this.rank-1]}`,c=`getChannel(getA(${i.join()}), ${a})`;this.userCode=`
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
    `}}function Cc(n,e,t){const s=U().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new G3(n.shape,e):new W3(n.shape,e);return t.runWebGLProgram(s,[n],n.dtype)}function H3(n,e,t,s){const o=e,r=n.shape.length,i=ve(o,n.shape);let a=i;const l=Ze(a,r),c=l!=null;let u=n;c&&(u=Cc(n,l,s),a=nt(a.length,r)),kt("sum",a,r);const[h,d]=yt(u.shape,a);let p=h;t&&(p=at(h,i));const f=j(d),g=j(n.shape)/f,x=se({inputs:{x:u},attrs:{shape:[g,f]},backend:s}),b=Wu(n.dtype),w=wo(x,b,"sum",s),y=se({inputs:{x:w},attrs:{shape:p},backend:s});return s.disposeIntermediateTensorInfo(x),s.disposeIntermediateTensorInfo(w),c&&s.disposeIntermediateTensorInfo(u),y}function Ic(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{axis:r,keepDims:i}=s;return H3(o,r,i,t)}const q3={kernelName:Ka,backendName:"webgl",kernelFunc:Ic};function Bt(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{perm:r}=s,i=t,a=o.shape.length,l=new Array(a);for(let u=0;u<l.length;u++)l[u]=o.shape[r[u]];let c;if(i.shouldExecuteOnCPU([o])){const h=i.texData.get(o.dataId).values,d=rp(h,o.shape,o.dtype,r,l);c=i.makeTensorInfo(l,o.dtype);const p=i.texData.get(c.dataId);p.values=d}else c=Cc(o,r,i);return c}const j3={kernelName:Eo,backendName:"webgl",kernelFunc:Bt};const oy=1e3;function $c({a:n,b:e,transposeA:t,transposeB:s,backend:o,bias:r=null,preluActivationWeights:i=null,leakyreluAlpha:a=0,activation:l=null}){const c=n.shape.length,u=e.shape.length,h=t?n.shape[c-2]:n.shape[c-1],d=s?e.shape[u-1]:e.shape[u-2],p=t?n.shape[c-1]:n.shape[c-2],f=s?e.shape[u-2]:e.shape[u-1],m=n.shape.slice(0,-2),g=e.shape.slice(0,-2),x=j(m),b=j(g),y=we(n.shape.slice(0,-2),e.shape.slice(0,-2)).concat([p,f]);S(h===d,()=>`Error in matMul: inner shapes (${h}) and (${d}) of Tensors with shapes ${n.shape} and ${e.shape} and transposeA=${t} and transposeB=${s} must match.`);const C=t?[x,h,p]:[x,p,h],$=s?[b,f,d]:[b,d,f],v=se({inputs:{x:n},backend:o,attrs:{shape:C}}),k=se({inputs:{x:e},backend:o,attrs:{shape:$}}),N=[v,k],T=Math.max(x,b),I=t?v.shape[1]:v.shape[2],E=r!=null,R=i!=null,D=l==="leakyrelu",F=l!=null?Hi(l,!0):null,_=E||R||D||F!=null;let P;if((p===1||f===1)&&I>oy&&_===!1){let H=v,G=k;t&&(H=Bt({inputs:{x:v},backend:o,attrs:{perm:[0,2,1]}}),N.push(H)),s&&(G=Bt({inputs:{x:k},backend:o,attrs:{perm:[0,2,1]}}),N.push(G));const Z=f!==1,Q=f===1;let J=H;Z&&(J=se({inputs:{x:H},backend:o,attrs:{shape:[T,I,1]}}),N.push(J));const K=f===1?2:1;let Y=G;Q&&(Y=se({inputs:{x:G},backend:o,attrs:{shape:[T,1,I]}}),N.push(Y));const ne=ap({inputs:{a:J,b:Y},backend:o});P=Ic({inputs:{x:ne},backend:o,attrs:{axis:K,keepDims:!0}}),N.push(ne)}else{const H=Kt(n.dtype,e.dtype),G=new J1(C,$,[T,p,f],t,s,E,F,R,D),Z=[v,k];if(r!=null&&Z.push(r),R&&Z.push(i),D){const Q=o.makeTensorInfo([],"float32",hs(a,"float32"));Z.push(Q),N.push(Q)}P=o.runWebGLProgram(G,Z,H)}const B=se({inputs:{x:P},backend:o,attrs:{shape:y}});N.push(P);for(const H of N)o.disposeIntermediateTensorInfo(H);return B}function K3(n){const{inputs:e,backend:t,attrs:s}=n,{a:o,b:r,bias:i,preluActivationWeights:a}=e,{transposeA:l,transposeB:c,activation:u,leakyreluAlpha:h}=s;return $c({a:o,b:r,transposeA:l,transposeB:c,backend:t,bias:i,preluActivationWeights:a,leakyreluAlpha:h,activation:u})}const X3={kernelName:tl,backendName:"webgl",kernelFunc:K3};const ry="return abs(x);";function Y3(n){const{inputs:e,backend:t}=n,{x:s}=e;if(t.shouldExecuteOnCPU([s])&&s.dtype!=="complex64"){const r=t.texData.get(s.dataId),i=V1(r.values);return t.makeTensorInfo(s.shape,s.dtype,i)}let o;return U().getBool("WEBGL_PACK_UNARY_OPERATIONS")?o=new As(s.shape,ry):o=new Kn(s.shape,ry),t.runWebGLProgram(o,[s],s.dtype)}const Z3={kernelName:ta,backendName:"webgl",kernelFunc:Y3};const Q3=gn+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`,J3=Ae({opSnippet:Q3}),eB={kernelName:cr,backendName:"webgl",kernelFunc:J3};const tB=gn+`
  if (x < 1.0) return NAN;
return log(x + sqrt(x * x - 1.0));`,nB=Ae({opSnippet:tB}),sB={kernelName:ur,backendName:"webgl",kernelFunc:nB};const iy="return a + b;",oB=Nt({opSnippet:iy,packedOpSnippet:iy,supportsComplex:!0,cpuKernelImpl:fP}),rB={kernelName:To,backendName:"webgl",kernelFunc:oB};class iB{constructor(e,t){this.outputShape=[],this.outputShape=e,this.variableNames=t.map((r,i)=>`T${i}`);const s=[];this.variableNames.forEach(r=>{s.push(`float v${r} = get${r}AtOutCoords();`)});const o=this.variableNames.map(r=>`v${r}`).join(" + ");this.userCode=`
      void main() {
        ${s.join(`
        `)}

        float result = ${o};
        setOutput(result);
      }
    `}}class aB{constructor(e,t){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.variableNames=t.map((r,i)=>`T${i}`);const s=[];this.variableNames.forEach(r=>{s.push(`vec4 v${r} = get${r}AtOutCoords();`)});const o=this.variableNames.map(r=>`v${r}`).join(" + ");this.userCode=`
      void main() {
        ${s.join(`
        `)}

        vec4 result = ${o};
        setOutput(result);
      }
    `}}function vc(n){const{inputs:e,backend:t}=n,s=e;if(s.length===1)return Qt({inputs:{x:s[0]},backend:t});if(s.length>U().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER")){const l=Math.floor(s.length/2),c=vc({inputs:s.slice(0,l),backend:t}),u=vc({inputs:s.slice(l),backend:t});return vc({inputs:[c,u],backend:t})}const o=s.map(l=>l.dtype).reduce((l,c)=>Kt(l,c)),r=s.map(l=>l.shape),a=U().getBool("WEBGL_PACK")?new aB(s[0].shape,r):new iB(s[0].shape,r);return t.runWebGLProgram(a,s,o)}const lB={kernelName:Hc,backendName:"webgl",kernelFunc:vc};function cB(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{axis:r,keepDims:i}=s,a=o.shape.length,l=ve(r,o.shape);let c=l;const u=Ze(c,a);let h=o;u!=null&&(h=Bt({inputs:{x:o},backend:t,attrs:{perm:u}}),c=nt(c.length,a)),kt("all",c,a);const[d,p]=yt(h.shape,c),f=j(p),m=se({inputs:{x:h},backend:t,attrs:{shape:[-1,f]}}),g=wo(m,m.dtype,"all",t);let x;if(i){const b=at(d,l);x=se({inputs:{x:g},backend:t,attrs:{shape:b}})}else x=se({inputs:{x:g},backend:t,attrs:{shape:d}});return t.disposeIntermediateTensorInfo(m),t.disposeIntermediateTensorInfo(g),u!=null&&t.disposeIntermediateTensorInfo(h),x}const uB={kernelName:qc,backendName:"webgl",kernelFunc:cB};function hB(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{axis:r,keepDims:i}=s,a=o.shape.length,l=ve(r,o.shape);let c=l;const u=Ze(c,a);let h=o;u!=null&&(h=Bt({inputs:{x:o},backend:t,attrs:{perm:u}}),c=nt(c.length,a)),kt("any",c,a);const[d,p]=yt(h.shape,c),f=j(p),m=se({inputs:{x:h},backend:t,attrs:{shape:[-1,f]}}),g=wo(m,m.dtype,"any",t);let x;if(i){const b=at(d,l);x=se({inputs:{x:g},backend:t,attrs:{shape:b}})}else x=se({inputs:{x:g},backend:t,attrs:{shape:d}});return t.disposeIntermediateTensorInfo(m),t.disposeIntermediateTensorInfo(g),u!=null&&t.disposeIntermediateTensorInfo(h),x}const dB={kernelName:jc,backendName:"webgl",kernelFunc:hB};class pB{constructor(e,t,s){this.variableNames=["A"];const{windowSize:o,batchSize:r,outSize:i}=e;s||this.variableNames.push("bestIndicesA"),this.outputShape=[r,i];const a=t==="max"?">":"<",l=s?"inOffset + i;":"round(getBestIndicesA(batch, inOffset + i));";this.userCode=`
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
    `}}class fB{constructor(e,t,s,o){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,S(e.length>2,()=>`Packed arg${s.charAt(0).toUpperCase()+s.slice(1)} supports only inputs with rank above 2.`);const r=e[e.length-1],i=Math.ceil(r/t);this.outputShape=e.slice(0,-1),i>1&&this.outputShape.push(i),o||this.variableNames.push("bestIndicesA");const a=this.outputShape,l=a.length,c=We(l),u=Pt("coords",l);let h,d;if(i===1){d=l+1;const k=We(d);h=`
        ${k} sourceLocR = ${k}(${u.join()}, 0);
        ++${u[l-1]};
        ${k} sourceLocG = ${k}(${u.join()}, 0);
        ++${u[l-2]};
        ${k} sourceLocA = ${k}(${u.join()}, 0);
        --${u[l-1]};
        ${k} sourceLocB = ${k}(${u.join()}, 0);
        --${u[l-2]};`}else d=l,h=`
        ${c} sourceLocR = coords;
        ++${u[l-1]};
        ${c} sourceLocG = coords;
        ++${u[l-2]};
        ${c} sourceLocA = coords;
        --${u[l-1]};
        ${c} sourceLocB = coords;
        --${u[l-2]};`;const p=["x","y","z","w","u","v"].slice(0,d),f="."+p[d-1],m=p.map(k=>"int "+k),g=Pt("sourceLocR",d-1).concat("inIdx.r"),x=Pt("sourceLocG",d-1).concat("inIdx.g"),b=Pt("sourceLocB",d-1).concat("inIdx.b"),w=Pt("sourceLocA",d-1).concat("inIdx.a"),y=s==="max"?"greaterThan":"lessThan",C=o?"":`
          inIdx = round(vec4(getBestIndicesAChannel(${g.join()}),
                             getBestIndicesAChannel(${x.join()}),
                             getBestIndicesAChannel(${b.join()}),
                             getBestIndicesAChannel(${w.join()})));`,$=`vec4(
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
          sourceLocB${f}, sourceLocA${f}) * ${t};
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = ${$};

        for (int i = 0; i < ${t}; i++) {
          inIdx = srcIdx;
          ${C}
          vec4 candidate = ${$};
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
    `}}function ay(n,e,t,s=null){let o=e.shape[0],r=e.shape[1];s!=null&&(o=s.shape[0],r=s.shape[1]);const i=Al(r),a={windowSize:i,inSize:r,batchSize:o,outSize:Math.ceil(r/i)},l=new pB(a,t,s==null),c=[e];s!=null&&c.push(s);const u=n.runWebGLProgram(l,c,"int32");if(u.shape[1]===1)return u;const h=ay(n,e,t,u);return n.disposeIntermediateTensorInfo(u),h}function ly(n,e,t,s=null){const o=s!=null?s.shape:e.shape,r=o[o.length-1],i=Al(r),a=new fB(o,i,t,s==null),l=s==null?[e]:[e,s],c=n.runWebGLProgram(a,l,"int32");if(c.shape.length===e.shape.length){const u=ly(n,e,t,c);return n.disposeIntermediateTensorInfo(c),u}return c}function cy(n,e,t,s){const o=[t];if(kt("arg"+s.charAt(0).toUpperCase()+s.slice(1),o,e.shape.length),!U().getBool("WEBGL_PACK_REDUCE")||e.shape.length<=2){const r=[],i=n.texData.get(e.dataId),a=i!==null&&i.isPacked;let l=e;a&&(l=n.unpackTensor(e),r.push(l));const[c,u]=yt(l.shape,o),h=j(u),d=se({inputs:{x:l},backend:n,attrs:{shape:[-1,h]}});r.push(d);const p=ay(n,d,s);r.push(p);const f=se({inputs:{x:p},backend:n,attrs:{shape:c}});return r.forEach(m=>n.disposeIntermediateTensorInfo(m)),f}return ly(n,e,s)}function mB(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{axis:r}=s;let i=ve(r,o.shape);const a=Ze(i,o.shape.length);let l=o;const c=[];a!=null&&(l=Bt({inputs:{x:o},backend:t,attrs:{perm:a}}),c.push(l),i=nt(i.length,l.shape.length)),kt("argMax",[i[0]],l.shape.length);const u=cy(t,l,i[0],"max");return c.forEach(h=>t.disposeIntermediateTensorInfo(h)),u}const gB={kernelName:na,backendName:"webgl",kernelFunc:mB};function xB(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{axis:r}=s;let i=ve(r,o.shape);const a=Ze(i,o.shape.length);let l=o;const c=[];a!=null&&(l=Bt({inputs:{x:o},backend:t,attrs:{perm:a}}),c.push(l),i=nt(i.length,l.shape.length)),kt("argMin",[i[0]],l.shape.length);const u=cy(t,l,i[0],"min");return c.forEach(h=>t.disposeIntermediateTensorInfo(h)),u}const bB={kernelName:sa,backendName:"webgl",kernelFunc:xB};const yB=gn+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`,wB=Ae({opSnippet:yB}),CB={kernelName:hr,backendName:"webgl",kernelFunc:wB};const IB=gn+"return log(x + sqrt(x * x + 1.0));",$B=Ae({opSnippet:IB}),vB={kernelName:dr,backendName:"webgl",kernelFunc:$B};const kB=gn+`
  return atan(x);
`,SB=Ae({opSnippet:kB}),NB={kernelName:pr,backendName:"webgl",kernelFunc:SB};const TB=ip+`
  return atan(a, b);
`,EB=`
  vec4 result = atan(a, b);
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+yo+`
  return result;
`,RB=Nt({opSnippet:TB,packedOpSnippet:EB}),AB={kernelName:mr,backendName:"webgl",kernelFunc:RB};const DB=gn+`
  if ((x < -1.0) || (x > 1.0)) return NAN;
return (log(1.0 + x) - log(1.0 - x)) / 2.0;`,FB=Ae({opSnippet:DB}),_B={kernelName:fr,backendName:"webgl",kernelFunc:FB};class qi{constructor(e,t,s,o=!1,r=!1){if(this.variableNames=["x"],t==="avg"&&s)throw new Error("Cannot compute positions for average pool.");const i=e.filterWidth,a=e.strideHeight,l=e.strideWidth,c=e.dilationHeight,u=e.dilationWidth,h=e.effectiveFilterHeight,d=e.effectiveFilterWidth,p=e.padInfo.top,f=e.padInfo.left;this.outputShape=e.outShape;const m=t==="avg",g=`((batch  * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + d`,x=`(xR * ${e.inWidth} + xC) * ${e.inChannels} + d`;let b="0.0";if(m||(b="-1.0 / 1e-20"),s){this.userCode=`
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

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${d};
                wC += ${u}) {
              int xC = xCCorner + wC;

              if (xC < 0 || xC >= ${e.inWidth}) {
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
      `;return}const w="max";let y=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;t==="avg"&&(y="avgValue / max(count, 1.0)");const C=Math.floor(i/4)*4,$=i%4,v=`
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
        if (xC < 0 || xC >= ${e.inWidth}) {
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

          if (xR < 0 || xR >= ${e.inHeight}) {
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
          if (${$===1}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              initializationValue,
              initializationValue,
              initializationValue
            );

            ${v}
          } else if (${$===2}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${u}, d),
              initializationValue,
              initializationValue
            );

            ${v}
          } else if (${$===3}) {
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
    `}}class lp{constructor(e,t,s,o=!1,r=!1){if(this.variableNames=["x"],t==="avg"&&s)throw new Error("Cannot compute positions for average pool.");const i=e.filterWidth,a=e.strideDepth,l=e.strideHeight,c=e.strideWidth,u=e.dilationDepth,h=e.dilationHeight,d=e.dilationWidth,p=e.effectiveFilterDepth,f=e.effectiveFilterHeight,m=e.effectiveFilterWidth,g=e.padInfo.front,x=e.padInfo.top,b=e.padInfo.left;this.outputShape=e.outShape;const w=t==="avg";let y="0.0";if(w||(y="-1.0 / 1e-20"),s){this.userCode=`
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

            if (xD < 0 || xD >= ${e.inDepth}) {
              continue;
            }

            for (int wR = 0; wR < ${f};
                wR += ${h}) {
              int xR = xRCorner + wR;

              if (xR < 0 || xR >= ${e.inHeight}) {
                continue;
              }

              for (int wC = 0; wC < ${m};
                  wC += ${d}) {
                int xC = xCCorner + wC;

                if (xC < 0 || xC >= ${e.inWidth}) {
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
                  minMaxPosition = ${o?r?`(((batch * ${e.inDepth} + xD) * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + ch`:`((xD * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + ch`:`wD * ${f} * ${m} +
                      wR * ${m} + wC`};
                }
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;return}const C="max";let $=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;t==="avg"&&($="avgValue / max(count, 1.0)");const v=Math.floor(i/4)*4,k=i%4,N=`
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
        if (xC < 0 || xC >= ${e.inWidth}) {
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

          if (xD < 0 || xD >= ${e.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${f};
            wR += ${h}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${e.inHeight}) {
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

              ${N}
            }

            int xC = xCCorner + ${v};
            if (${k===1}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                initializationValue,
                initializationValue,
                initializationValue
              );

              ${N}
            } else if (${k===2}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${d}, ch),
                initializationValue,
                initializationValue
              );

              ${N}
            } else if (${k===3}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${d}, ch),
                getValue(batch, xD, xR, xC + 2 * ${d}, ch),
                initializationValue
              );

              ${N}
            }
          }
        }
        setOutput(${$});
      }
    `}}function OB(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e;Ui(o,"avgPool");const{filterSize:r,strides:i,pad:a,dimRoundingMode:l}=s,c=1;S(Rt(i,c),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${c}'`);const u=an(o.shape,r,i,c,a,l);if(u.filterWidth===1&&u.filterHeight===1&&_e(u.inShape,u.outShape))return Qt({inputs:{x:o},backend:t});const h=new qi(u,"avg",!1);return t.runWebGLProgram(h,[o],"float32")}const LB={kernelName:oa,backendName:"webgl",kernelFunc:OB};function MB(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{filterSize:r,strides:i,pad:a,dimRoundingMode:l,dataFormat:c}=s,u=[1,1,1],h=Qn(o.shape,r,i,u,a,l,c),d=new lp(h,"avg",!1);return t.runWebGLProgram(d,[o],"float32")}const PB={kernelName:ra,backendName:"webgl",kernelFunc:MB};class BB{constructor(e){this.variableNames=["dy"],this.outputShape=e.inShape;const t=e.filterHeight,s=e.filterWidth,o=e.strideHeight,r=e.strideWidth,i=e.dilationHeight,a=e.dilationWidth,l=e.effectiveFilterHeight,c=e.effectiveFilterWidth,u=l-1-e.padInfo.top,h=c-1-e.padInfo.left,d=1/(t*s);this.userCode=`
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

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${c};
            wC+= ${a}) {
            float dyC = float(dyCCorner + wC) / ${r}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
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
    `}}class zB{constructor(e){this.variableNames=["dy"],this.outputShape=e.inShape;const t=e.filterDepth,s=e.filterHeight,o=e.filterWidth,r=e.strideDepth,i=e.strideHeight,a=e.strideWidth,l=e.dilationDepth,c=e.dilationHeight,u=e.dilationWidth,h=e.effectiveFilterDepth,d=e.effectiveFilterHeight,p=e.effectiveFilterWidth,f=h-1-e.padInfo.front,m=d-1-e.padInfo.top,g=p-1-e.padInfo.left,x=1/(t*s*o);this.userCode=`
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

          if (dyD < 0.0 || dyD >= ${e.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${d};
              wR += ${c}) {
            float dyR = float(dyRCorner + wR) / ${i}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${p};
                wC += ${u}) {
              float dyC = float(dyCCorner + wC) / ${a}.0;

              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
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
    `}}function VB(n){const{inputs:e,backend:t,attrs:s}=n,{dy:o,input:r}=e,i=r,{filterSize:a,strides:l,pad:c,dimRoundingMode:u}=s,h=[1,1,1],d=Qn(i.shape,a,l,h,c,u),p=new zB(d);return t.runWebGLProgram(p,[o],i.dtype)}const WB={kernelName:Xc,backendName:"webgl",kernelFunc:VB};function UB(n){const{inputs:e,backend:t,attrs:s}=n,{dy:o,input:r}=e,i=r;Ui([o,r],"avgPoolGrad");const{filterSize:a,strides:l,pad:c}=s,u=an(i.shape,a,l,1,c),h=new BB(u);return t.runWebGLProgram(h,[o],i.dtype)}const GB={kernelName:Kc,backendName:"webgl",kernelFunc:UB};function HB(n){const{inputs:e,backend:t,attrs:s}=n,{a:o,b:r}=e,{transposeA:i,transposeB:a}=s;return $c({a:o,b:r,transposeA:i,transposeB:a,backend:t})}const qB={kernelName:ia,backendName:"webgl",kernelFunc:HB};class jB{constructor(e,t,s,o,r,i){this.outputShape=[],this.variableNames=["x","mean","variance"],we(e,t),we(e,s);let a="0.0";o!=null&&(we(e,o),this.variableNames.push("offset"),a="getOffsetAtOutCoords()");let l="1.0";r!=null&&(we(e,r),this.variableNames.push("scale"),l="getScaleAtOutCoords()"),this.outputShape=e,this.userCode=`
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = ${a};
        float scale = ${l};
        float inv = scale * inversesqrt(variance + float(${i}));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `}}class KB{constructor(e,t,s,o,r,i){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=["x","mean","variance"],we(e,t),we(e,s);let a="vec4(0.0)";o!=null&&(we(e,o),this.variableNames.push("offset"),a="getOffsetAtOutCoords()");let l="vec4(1.0)";r!=null&&(we(e,r),this.variableNames.push("scale"),l="getScaleAtOutCoords()"),this.outputShape=e,this.userCode=`
      void main() {
        vec4 offset = ${a};
        vec4 scale = ${l};

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(${i}));

        setOutput((x - mean) * inv + offset);
      }
    `}}const XB={kernelName:ba,backendName:"webgl",kernelFunc:({inputs:n,backend:e,attrs:t})=>{const{x:s,mean:o,variance:r,offset:i,scale:a}=n;S(o.shape.length===r.shape.length,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),S(i==null||o.shape.length===i.shape.length,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),S(a==null||o.shape.length===a.shape.length,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");let{varianceEpsilon:l}=t;l==null&&(l=.001);const c=[s,o,r];let u=null;i!=null&&(u=i.shape,c.push(i));let h=null;a!=null&&(h=a.shape,c.push(a));const d=U().getBool("WEBGL_PACK_NORMALIZATION")?new KB(s.shape,o.shape,r.shape,u,h,l):new jB(s.shape,o.shape,r.shape,u,h,l);return e.runWebGLProgram(d,c,c[0].dtype)}};class YB{constructor(e){this.variableNames=["source"],this.outputShape=e,this.rank=e.length;const t=We(this.rank);this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];const s=ZB(this.rank);let o;const r=e.map((i,a)=>`sourceLoc.${cp[a]} = start[${a}] + coords.${cp[a]};`);o=`
        ${t} sourceLoc;
        ${t} coords = getOutputCoords();
        ${r.join(`
`)}
      `,this.userCode=`
      void main() {
        ${o}
        setOutput(getSource(${s}));
      }
    `}}const cp=["x","y","z","w","u","v"];function ZB(n){if(n===1)return"sourceLoc";if(n<=6)return cp.slice(0,n).map(e=>"sourceLoc."+e).join(",");throw Error(`Slicing for rank ${n} is not yet supported`)}class QB{constructor(e){this.variableNames=["source"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.rank=e.length,this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];const t=We(this.rank),s=Pt("coords",this.rank),o=Pt("sourceLoc",this.rank),r=this.rank===1?"sourceLoc":`vec2(${o.slice(-2).join()})`,i=`getChannel(getSource(${o.join()}), ${r})`,a=`
      result.x = ${i};
      if (++${s[this.rank-1]} < ${e[this.rank-1]}) {
        ++${o[this.rank-1]};
        result.y = ${i};
        --${o[this.rank-1]};
      }
    `,l=this.rank===1?"":`
      --${s[this.rank-1]};
      if (++${s[this.rank-2]} < ${e[this.rank-2]}) {
        ++${o[this.rank-2]};
        result.z = ${i};
        if (++${s[this.rank-1]} < ${e[this.rank-1]}) {
          ++${o[this.rank-1]};
          result.w = ${i};
        }
      }
    `,c=this.rank<=4?`sourceLoc = coords +
            ${t}(${e.map((u,h)=>`start[${h}]`).join()});`:e.map((u,h)=>`${o[h]} = ${s[h]} + start[${h}];`).join(`
`);this.userCode=`
      void main() {
        ${t} coords = getOutputCoords();
        ${t} sourceLoc;
        ${c}
        vec4 result = vec4(0.);
        ${a}
        ${l}
        setOutput(result);
      }
    `}}function JB(n,e,t,s){const o=s.texData.get(n.dataId),r=s.makeTensorInfo(t,n.dtype),i=s.texData.get(r.dataId);Object.assign(i,o),i.refCount=1,i.shape=t,i.dtype=n.dtype;let a=Bm(e,fe(n.shape));o.slice&&(a+=o.slice.flatOffset),i.slice={flatOffset:a,origDataId:o.slice&&o.slice.origDataId||n.dataId};const l=s.dataRefCount.get(i.slice.origDataId)||1;return s.dataRefCount.set(i.slice.origDataId,l+1),r}function ir(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{begin:r,size:i}=s,[a,l]=_h(o,r,i);if(Lm(o,a,l),j(l)===0)return t.makeTensorInfo(l,o.dtype,[]);if(t.shouldExecuteOnCPU([o])||o.dtype==="string"){const h=t.texData.get(o.dataId),d=qP(h.values,a,l,o.shape,o.dtype);return t.makeTensorInfo(l,o.dtype,d)}const{isPacked:c}=t.texData.get(o.dataId),u=Pm(o.shape,a,l);if(c||!u){const h=U().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new QB(l):new YB(l),d=[a];return t.runWebGLProgram(h,[o],o.dtype,d)}return t.uploadToGPU(o.dataId),JB(o,a,l,t)}const ez={kernelName:ja,backendName:"webgl",kernelFunc:ir};const tz={kernelName:aa,backendName:"webgl",kernelFunc:n=>{const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{blockShape:r,crops:i}=s;S(o.shape.length<=4,()=>"batchToSpaceND for rank > 4 with a WebGL backend not implemented yet");const a=r.reduce((b,w)=>b*w),l=yi(o.shape,r,a),c=wi(l.length,r.length),u=Ci(o.shape,r,a),h=Ph(i,r.length),d=Bh(u,i,r.length),p=[],f=se({inputs:{x:o},backend:t,attrs:{shape:l}}),m=Bt({inputs:{x:f},backend:t,attrs:{perm:c}}),g=se({inputs:{x:m},backend:t,attrs:{shape:u}}),x=ir({inputs:{x:g},backend:t,attrs:{begin:h,size:d}});return p.push(f),p.push(m),p.push(g),p.forEach(b=>t.disposeIntermediateTensorInfo(b)),x}};function nz(n){const{inputs:e,backend:t,attrs:s}=n,{x:o,weights:r}=e,{size:i}=s,a=t.readSync(o.dataId),l=t.readSync(r.dataId),c=z1(a,l,r.dtype,r.shape,i);return t.makeTensorInfo([i],r.dtype,c)}const sz={kernelName:Yc,backendName:"webgl",kernelFunc:nz};const oz=`
  int r = int(a.r) & int(b.r);
  int g = int(a.g) & int(b.g);
  int rb = int(a.b) & int(b.b);
  int ra = int(a.a) & int(b.a);
  return vec4(r, g, rb, ra);
`,rz=`
  return float(int(a.r) & int(b.r));
`;function iz(n){const{inputs:e,backend:t}=n,{a:s,b:o}=e,r=U().getBool("WEBGL_PACK_BINARY_OPERATIONS"),i=U().getNumber("WEBGL_VERSION");if(t.shouldExecuteOnCPU([s,o])||i===1){const l=t.texData.get(s.dataId).values,c=t.texData.get(o.dataId).values,[u,h]=gP(s.shape,o.shape,l,c,s.dtype),d=t.makeTensorInfo(h,s.dtype),p=t.texData.get(d.dataId);return p.values=u,d}let a;return r?a=new or(oz,s.shape,o.shape,!1):a=new bo(rz,s.shape,o.shape),t.runWebGLProgram(a,[s,o],s.dtype)}const az={kernelName:Zc,backendName:"webgl",kernelFunc:iz};function lz(n){const{inputs:e,backend:t}=n,{s0:s,s1:o}=e,r=t.readSync(s.dataId),i=t.readSync(o.dataId),a=we(Array.from(r),Array.from(i));return t.makeTensorInfo([a.length],"int32",Int32Array.from(a))}const cz={kernelName:Ep,backendName:"webgl",kernelFunc:lz};const uy=Nt({opSnippet:"return float(a != b);",cpuKernelImpl:MP,dtype:"bool"}),uz={kernelName:Oa,backendName:"webgl",kernelFunc:uy};function ji(n){const{inputs:e,backend:t}=n,{input:s}=e,o=t.texData.get(s.dataId);return Qt({inputs:{x:o.complexTensorInfos.real},backend:t})}const hz={kernelName:vu,backendName:"webgl",kernelFunc:ji};const dz="return float(int(x));";function pz(n,e){const t=new Kn(n.shape,dz),s=e.runWebGLProgram(t,[n],"int32");return{dataId:s.dataId,shape:s.shape,dtype:s.dtype}}function up(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{dtype:r}=s;if(r==="complex64"){if(o.dtype==="complex64")return Qt({inputs:{x:o},backend:t});const i=ot(o.shape),a=up({inputs:{x:o},backend:t,attrs:{dtype:"float32"}}),l=Ds({inputs:{real:a,imag:i},backend:t});return i.dispose(),t.disposeIntermediateTensorInfo(a),l}if(o.dtype==="complex64"){const i=ji({inputs:{input:o},backend:t}),a=up({inputs:{x:i},backend:t,attrs:{dtype:r}});return t.disposeIntermediateTensorInfo(i),a}if(!$p(o.dtype,r)){const i=Qt({inputs:{x:o},backend:t});return{dataId:i.dataId,shape:i.shape,dtype:r}}if(t.shouldExecuteOnCPU([o])){const i=t.texData.get(o.dataId).values,[a,l,c]=xP(i,o.shape,o.dtype,r);return t.makeTensorInfo(a,l,c)}if(r==="int32")return pz(o,t);if(r==="bool"){const i=t.makeTensorInfo([],"bool",Tt("bool",1)),l=uy({inputs:{a:o,b:i},backend:t});return t.disposeIntermediateTensorInfo(i),l}throw new Error(`Error in Cast: failed to cast ${o.dtype} to ${r}`)}const fz={kernelName:gr,backendName:"webgl",kernelFunc:up};const hy="return ceil(x);",mz=Ae({opSnippet:hy,packedOpSnippet:hy,cpuKernelImpl:bP}),gz={kernelName:xr,backendName:"webgl",kernelFunc:mz};class xz{constructor(e){this.variableNames=["A"],this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=e,this.userCode=`

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `}}class bz{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=e,this.userCode=`
      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `}}function yz(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{clipValueMin:r,clipValueMax:i}=s;let a;U().getBool("WEBGL_PACK_CLIP")?a=new bz(o.shape):a=new xz(o.shape);const l=[[r],[i]];return t.runWebGLProgram(a,[o],o.dtype,l)}const wz={kernelName:br,backendName:"webgl",kernelFunc:yz};class Cz{constructor(e){this.variableNames=["real","imag"],this.outputShape=e,this.userCode=`
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
    `}}function dy(n,e){return{dataId:e.dataId,dtype:e.dtype,shape:n.shape}}function Iz(n){const{inputs:e,backend:t}=n,{x:s}=e,o=t.texData.get(s.dataId),r=new Cz(s.shape),i=[dy(s,o.complexTensorInfos.real),dy(s,o.complexTensorInfos.imag)];return t.runWebGLProgram(r,i,i[0].dtype)}const $z={kernelName:la,backendName:"webgl",kernelFunc:Iz};class vz{constructor(e){this.outputShape=[],this.outputShape=Pn(e,1),this.variableNames=e.map((i,a)=>`T${a}`);const t=new Array(e.length-1);t[0]=e[0][1];for(let i=1;i<t.length;i++)t[i]=t[i-1]+e[i][1];const s=[`if (yC < ${t[0]}) setOutput(getT0(yR, yC));`];for(let i=1;i<t.length;i++){const a=t[i-1];s.push(`else if (yC < ${t[i]}) setOutput(getT${i}(yR, yC-${a}));`)}const o=t.length,r=t[t.length-1];s.push(`else setOutput(getT${o}(yR, yC-${r}));`),this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        ${s.join(`
        `)}
      }
    `}}class kz{constructor(e,t){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=Pn(e,t);const s=this.outputShape,o=s.length,r=We(o),i=Pt("coords",o),a=["x","y","z","w","u","v"].slice(0,o);this.variableNames=e.map((m,g)=>`T${g}`);const l=new Array(e.length-1);l[0]=e[0][t];for(let m=1;m<l.length;m++)l[m]=l[m-1]+e[m][t];const c=a[t],u=a.slice(-2),h=a.join();let d=`if (${c} < ${l[0]}) {
        return getChannel(
            getT0(${h}), vec2(${u.join()}));
        }`;for(let m=1;m<l.length;m++){const g=l[m-1];d+=`
        if (${c} < ${l[m]}  && ${c} >= ${l[m-1]}) {
          return getChannel(
            getT${m}(${kc(a,c,g)}),
            vec2(${kc(u,c,g)}));
        }`}const p=l.length,f=l[l.length-1];d+=`
        return getChannel(
          getT${p}(${kc(a,c,f)}),
          vec2(${kc(u,c,f)}));`,this.userCode=`
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
    `}}function kc(n,e,t){const s=n.indexOf(e);return n.map((r,i)=>i===s?`${r} - ${t}`:r).join()}function Sc(n){const{inputs:e,backend:t}=n,{input:s}=e,o=t.texData.get(s.dataId);return Qt({inputs:{x:o.complexTensorInfos.imag},backend:t})}const Sz={kernelName:gu,backendName:"webgl",kernelFunc:Sc};function Ki(n,e,t){const s=n[0].dtype;if(s==="complex64"){const p=n.map(b=>ji({inputs:{input:b},backend:t})),f=n.map(b=>Sc({inputs:{input:b},backend:t})),m=Ki(p,e,t),g=Ki(f,e,t),x=Ds({inputs:{real:m,imag:g},backend:t});return p.forEach(b=>t.disposeIntermediateTensorInfo(b)),f.forEach(b=>t.disposeIntermediateTensorInfo(b)),t.disposeIntermediateTensorInfo(m),t.disposeIntermediateTensorInfo(g),x}let o=t.shouldExecuteOnCPU(n);if(s==="string"&&(o=!0),o){const p=n.map(y=>{const $=[-1,j(y.shape.slice(e))];return se({inputs:{x:y},backend:t,attrs:{shape:$}})}),f=p.map(y=>({vals:t.readSync(y.dataId),shape:y.shape})),m=Pn(p.map(y=>y.shape),1),g=p[0].shape[0]===1,x=yP(f,m,s,g),b=Pn(n.map(y=>y.shape),e),w=t.makeTensorInfo(b,s,x);return p.forEach(y=>t.disposeIntermediateTensorInfo(y)),w}const r=n.filter(p=>j(p.shape)>0),i=U().getBool("WEBGL_PACK_ARRAY_OPERATIONS")&&r[0].shape.length>1;if(r.length===1){const p=i?new Kn(n[0].shape,Rs):new As(n[0].shape,Rs);return t.runWebGLProgram(p,n,s)}const a=U().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER");if(r.length>a){const p=[];for(let m=0;m<r.length;m+=a){const g=r.slice(m,m+a);p.push(Ki(g,e,t))}const f=Ki(p,e,t);for(const m of p)t.disposeIntermediateTensorInfo(m);return f}if(i){const p=new kz(r.map(f=>f.shape),e);return t.runWebGLProgram(p,r,s)}const{tensors2D:l,outShape:c}=Nz(r,e,t),u=new vz(l.map(p=>p.shape)),h=t.runWebGLProgram(u,l,s);l.forEach(p=>t.disposeIntermediateTensorInfo(p));const d=se({inputs:{x:h},attrs:{shape:c},backend:t});return t.disposeIntermediateTensorInfo(h),d}function Nz(n,e,t){const s=Pn(n.map(r=>r.shape),e);return{tensors2D:n.map(r=>se({inputs:{x:r},attrs:{shape:[-1,j(r.shape.slice(e))]},backend:t})),outShape:s}}function py(n){const{inputs:e,backend:t,attrs:s}=n,{axis:o}=s,r=ve(o,e[0].shape)[0],i=e.map(c=>c.shape);Oh(i,r);const a=Pn(e.map(c=>c.shape),r);if(j(a)===0)return t.makeTensorInfo(a,e[0].dtype,[]);const l=e.filter(c=>j(c.shape)>0);return l.length===1?Qt({inputs:{x:l[0]},backend:t}):Ki(l,r,t)}const Tz={kernelName:ca,backendName:"webgl",kernelFunc:py};class fy{constructor(e,t=!1,s=null,o=!1,r=!1){this.variableNames=["x","W"],this.outputShape=e.outShape;const i=e.padInfo.top,a=e.padInfo.left,l=e.strideHeight,c=e.strideWidth,u=e.dilationHeight,h=e.dilationWidth,d=e.filterHeight,p=e.filterWidth,f=Math.floor(e.inChannels/4)*4,m=e.inChannels%4,g=e.dataFormat==="channelsLast",x=g?1:2,b=g?2:3,w=g?3:1;let y="",C="";s&&(o?y=`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${s}
        }`:r?y=`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${s}
        }`:y=`
          float activation(float x) {
            ${s}
          }
        `,C="result = activation(result);");const $=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),o&&this.variableNames.push("preluActivationWeights"),r&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
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

          if (xR < 0 || xR >= ${e.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${p}; wC++) {
            int xC = xCCorner + wC * ${h};

            if (xC < 0 || xC >= ${e.inWidth}) {
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
        ${$}
        ${C}
        setOutput(result);
      }
    `}}class Ez{constructor(e){this.variableNames=["x","W"],this.outputShape=e.outShape;const t=e.padInfo.front,s=e.padInfo.top,o=e.padInfo.left,r=e.strideDepth,i=e.strideHeight,a=e.strideWidth,l=e.dilationDepth,c=e.dilationHeight,u=e.dilationWidth,h=e.filterDepth,d=e.filterHeight,p=e.filterWidth,f=Math.floor(e.inChannels/4)*4,m=e.inChannels%4;this.userCode=`
      const ivec3 strides = ivec3(${r}, ${i}, ${a});
      const ivec3 pads = ivec3(${t}, ${s}, ${o});

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

          if (xF < 0 || xF >= ${e.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${d}; wR++) {
            int xR = xRCorner + wR * ${c};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${p}; wC++) {
              int xC = xCCorner + wC * ${u};

              if (xC < 0 || xC >= ${e.inWidth}) {
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
    `}}class my{constructor(e,t=!1,s=null,o=!1,r=!1){this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=e.outShape,this.enableShapeUniforms=Ft(this.outputShape.length);const i=e.padInfo.left,a=e.strideWidth,l=e.dilationWidth,c=e.filterHeight,u=e.filterWidth,h=u;let d=`
       int xR; int xC; int xCOffset;
       vec4 wTexel; vec4 previous; vec4 final;`;for(let g=0;g<u;g++)d+=`
           vec4 xTexelC${g*2};
           int xTexelC${g*2}Ready;
           vec4 xTexelC${g*2+1};
           int xTexelC${g*2+1}Ready;
           vec4 xC${g};`;d+=`
     for (int r = 0; r < ${c}; r++) {
      for (int d1 = 0; d1 < ${e.inChannels}; d1 += 2) {
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
                 `,x+1<u)){const b=i%2===0?xn(l):l;l%2===0&&i%2===1||l%2!==0&&i%2!==1?(d+=`
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
             if(d1 + 1 < ${e.inChannels}) {
               dotProd += xC${x}.yyww * vec4(wTexel.zw, wTexel.zw);
             }
           `,x+1<u&&(d+=`
               wTexel = getW(r, ${x+1}, d1, d2);
               dotProd += xC${x+1}.xxzz * vec4(wTexel.xy, wTexel.xy);
               if(d1 + 1 < ${e.inChannels}) {
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
         }`,f="result = activation(result);");const m=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),o&&this.variableNames.push("preluActivationWeights"),r&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
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
     `}}class Rz{constructor(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec4"},{name:"pad",type:"ivec2"},{name:"stride",type:"ivec2"},{name:"dilation",type:"ivec2"},{name:"inChannels",type:"int"},{name:"itemsPerBlockRow",type:"int"},{name:"outWidth",type:"int"}],this.outputShape=e,this.enableShapeUniforms=Ft(this.outputShape.length);const{dataFormat:s}=t,o=Mt(),r=s==="channelsLast",i=r?1:2,a=r?2:3,l=this.enableShapeUniforms?"if(blockIndex < outShape[2] && pos < outShape[1]) {":`if(blockIndex < ${e[2]} && pos < ${e[1]}) {`;let c="";for(let u=0;u<=1;u++)for(let h=0;h<=1;h++)c+=`
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
    `}}function Nc(n,e){const t=n.length;return t>=3?e?[...n.slice(0,-3),n[t-3]*n[t-2],n[t-1]]:[...n.slice(0,-3),n[t-3],n[t-2]*n[t-1]]:!e&&t===1&&n[0]>1?[n[0],1]:null}function gy({x:n,filter:e,convInfo:t,backend:s,bias:o=null,preluActivationWeights:r=null,leakyreluAlpha:i=0,activation:a=null}){const l=n.shape,c=s.texData.get(n.dataId),u=t.inChannels,h=l[0]*l[1]*l[2],d=t.outChannels,p=t.dataFormat==="channelsLast",f=!1,m=!1;let g;const x=[];if(r!=null){const y=Nc(r.shape,p);y!=null&&(r=se({inputs:{x:r},backend:s,attrs:{shape:y}}),x.push(r))}if(o!=null){const y=Nc(o.shape,p);y!=null&&(o=se({inputs:{x:o},backend:s,attrs:{shape:y}}),x.push(o))}if(!((h===1||d===1)&&u>oy)&&c.isPacked&&p&&c.texture!=null&&l[2]%2!==0&&_e(c.shape.slice(-3),l.slice(-3))){const y=l[0]*l[1]*(l[2]+1),C={dataId:n.dataId,shape:[1,y,t.inChannels],dtype:n.dtype},$=c.shape;c.shape=c.shape.slice(),c.shape[c.shape.length-2]++,S(xc(c.shape,C.shape),()=>`packed reshape ${c.shape} to ${C.shape} isn't free`);const v=se({inputs:{x:e},backend:s,attrs:{shape:[1,t.inChannels,t.outChannels]}});x.push(v);const k=$c({a:C,b:v,backend:s,transposeA:f,transposeB:m,bias:o,activation:a,preluActivationWeights:r,leakyreluAlpha:i}),N=s.texData.get(k.dataId);S(N.isPacked,()=>"batchMatMul result is expected to be packed"),c.shape=$,N.shape=t.outShape,g=Qt({inputs:{x:k},backend:s}),g.shape=t.outShape,x.push(k)}else{const y=t.outHeight*t.outWidth,C=se({inputs:{x:n},backend:s,attrs:{shape:p?[t.batchSize,y,t.inChannels]:[t.batchSize,t.inChannels,y]}}),$=se({inputs:{x:e},backend:s,attrs:{shape:[1,t.inChannels,t.outChannels]}}),v=$c({a:p?C:$,b:p?$:C,transposeA:!p,transposeB:m,backend:s,bias:o,activation:a,preluActivationWeights:r,leakyreluAlpha:i});g=se({inputs:{x:v},backend:s,attrs:{shape:t.outShape}}),x.push(C),x.push($),x.push(v)}for(const y of x)s.disposeIntermediateTensorInfo(y);return g}function xy({x:n,filter:e,convInfo:t,backend:s,bias:o=null,preluActivationWeights:r=null,leakyreluAlpha:i=0,activation:a=null}){const{filterWidth:l,filterHeight:c,inChannels:u,outWidth:h,outHeight:d,dataFormat:p}=t,f=p==="channelsLast",m=l*c*u,g=d*h,x=[t.batchSize,m,g],b=!0,w=!1,y=[];if(r!=null){const B=Nc(r.shape,f);B!=null&&(r=se({inputs:{x:r},backend:s,attrs:{shape:B}}),y.push(r))}if(o!=null){const B=Nc(o.shape,f);B!=null&&(o=se({inputs:{x:o},backend:s,attrs:{shape:B}}),y.push(o))}const C=se({inputs:{x:e},backend:s,attrs:{shape:[1,m,j(e.shape)/m]}});y.push(C);const $=new Rz(x,t),v=[n.shape,[t.padInfo.top,t.padInfo.left],[t.strideHeight,t.strideWidth],[t.dilationHeight,t.dilationWidth],[t.inChannels],[t.filterWidth*t.inChannels],[t.outWidth]],k=s.runWebGLProgram($,[n],"float32",v),N=se({inputs:{x:k},backend:s,attrs:{shape:x}});y.push(k),y.push(N);const T=o!=null,I=r!=null,E=a==="leakyrelu",R=a?Hi(a,!0):null,D=new J1(f?N.shape:C.shape,f?C.shape:N.shape,f?[t.batchSize,g,t.outChannels]:[t.batchSize,t.outChannels,g],b,w,T,R,I,E),F=f?[N,C]:[C,N];if(o&&F.push(o),I&&F.push(r),E){const B=s.makeTensorInfo([],"float32",hs(i,"float32"));F.push(B),y.push(B)}const _=s.runWebGLProgram(D,F,"float32"),P=se({inputs:{x:_},backend:s,attrs:{shape:t.outShape}});y.push(_);for(const B of y)s.disposeIntermediateTensorInfo(B);return P}function Az(n){const{inputs:e,backend:t,attrs:s}=n,{x:o,filter:r}=e,{strides:i,pad:a,dataFormat:l,dilations:c,dimRoundingMode:u}=s,h=Jn(l),d=$t(o.shape,r.shape,i,c,a,u,!1,h);let p;if(d.filterHeight===1&&d.filterWidth===1&&d.dilationHeight===1&&d.dilationWidth===1&&d.strideHeight===1&&d.strideWidth===1&&(d.padInfo.type==="SAME"||d.padInfo.type==="VALID"))p=gy({x:o,filter:r,convInfo:d,backend:t});else if(d.strideWidth<=2&&h==="channelsLast"&&U().getBool("WEBGL_EXP_CONV")){const m=new my(d),g=[[d.padInfo.top,d.padInfo.left],[d.strideHeight,d.strideWidth],[d.dilationHeight,d.dilationWidth],[d.inHeight,d.inWidth]];p=t.runWebGLProgram(m,[o,r],"float32",g)}else if(U().getBool("WEBGL_CONV_IM2COL"))p=xy({x:o,filter:r,convInfo:d,backend:t});else{const m=new fy(d);p=t.runWebGLProgram(m,[o,r],"float32")}const f=se({inputs:{x:p},backend:t,attrs:{shape:d.outShape}});return t.disposeIntermediateTensorInfo(p),f}const Dz={kernelName:ua,backendName:"webgl",kernelFunc:Az};class Fz{constructor(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;const t=e.strideHeight,s=e.strideWidth,o=e.padInfo.top,r=e.padInfo.left,i=e.dataFormat==="channelsLast";this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int d2 = coords.w;

        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int b = 0; b < ${e.batchSize}; b++) {
          for (int yR = 0; yR < ${e.outHeight}; yR++) {
            int xR = wR + yR * ${t} - ${o};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${e.outWidth}; yC++) {
              int xC = wC + yC * ${s} - ${r};

              if (xC < 0 || xC >= ${e.inWidth}) {
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
    `}}class _z{constructor(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;const t=e.filterHeight,s=e.filterWidth,o=e.strideHeight,r=e.strideWidth,i=e.dataFormat==="channelsLast",a=t-1-e.padInfo.top,l=s-1-e.padInfo.left,c=i?1:2,u=i?2:3,h=i?3:1;this.userCode=`
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
        for (int wR = 0; wR < ${t}; wR++) {
          float dyR = float(dyRCorner + wR) / ${o}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${t} - 1 - wR;

          for (int wC = 0; wC < ${s}; wC++) {
            float dyC = float(dyCCorner + wC) / ${r}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ${s} - 1 - wC;

            for (int d2 = 0; d2 < ${e.outChannels}; d2++) {

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
    `}}class Oz{constructor(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;const t=e.strideDepth,s=e.strideHeight,o=e.strideWidth,r=e.padInfo.front,i=e.padInfo.top,a=e.padInfo.left;this.userCode=`
      void main() {
        ivec5 coords = getOutputCoords();
        int wF = coords.x;
        int wR = coords.y;
        int wC = coords.z;
        int d1 = coords.w;
        int d2 = coords.u;

        float dotProd = 0.0;

        for (int b = 0; b < ${e.batchSize}; b++) {
          for (int yF = 0; yF < ${e.outDepth}; yF++) {
            int xF = wF + yF * ${t} - ${r};

            if (xF < 0 || xF >= ${e.inDepth}) {
              continue;
            }

            for (int yR = 0; yR < ${e.outHeight}; yR++) {
              int xR = wR + yR * ${s} - ${i};

              if (xR < 0 || xR >= ${e.inHeight}) {
                continue;
              }

              for (int yC = 0; yC < ${e.outWidth}; yC++) {
                int xC = wC + yC * ${o} - ${a};

                if (xC < 0 || xC >= ${e.inWidth}) {
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
    `}}class Lz{constructor(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;const t=e.filterDepth,s=e.filterHeight,o=e.filterWidth,r=e.strideDepth,i=e.strideHeight,a=e.strideWidth,l=t-1-e.padInfo.front,c=s-1-e.padInfo.top,u=o-1-e.padInfo.left;this.userCode=`
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
        for (int wF = 0; wF < ${t}; wF++) {
          float dyF = float(dyFCorner + wF) / ${r}.0;

          if (dyF < 0.0 || dyF >= ${e.outDepth}.0 || fract(dyF) > 0.0) {
            continue;
          }
          int idyF = int(dyF);

          int wFPerm = ${t} - 1 - wF;

          for (int wR = 0; wR < ${s}; wR++) {
            float dyR = float(dyRCorner + wR) / ${i}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
              fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            int wRPerm = ${s} - 1 - wR;

            for (int wC = 0; wC < ${o}; wC++) {
              float dyC = float(dyCCorner + wC) / ${a}.0;

              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              int wCPerm = ${o} - 1 - wC;

              for (int d2 = 0; d2 < ${e.outChannels}; d2++) {
                float xValue = getDy(batch, idyF, idyR, idyC, d2);
                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}}function Mz(n){const{inputs:e,backend:t,attrs:s}=n,{x:o,dy:r}=e,{strides:i,pad:a,dataFormat:l,dimRoundingMode:c,filterShape:u}=s,h=Jn(l),d=$t(o.shape,u,i,1,a,c,!1,h),p=new Fz(d);return t.runWebGLProgram(p,[o,r],"float32")}const Pz={kernelName:Jc,backendName:"webgl",kernelFunc:Mz};class Bz{constructor(e){this.variableNames=["dy","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"strides",type:"vec2"}],this.outputShape=e.inShape,this.enableShapeUniforms=Ft(this.outputShape.length);const t=e.filterHeight,s=e.filterWidth,o=t-1-e.padInfo.top,r=s-1-e.padInfo.left;this.userCode=`
      const ivec2 pads = ivec2(${o}, ${r});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];

        ivec2 dyCorner = ivec2(coords[1], coords[2]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        vec4 result = vec4(0.);
        for (int wR = 0; wR < ${t}; wR++) {
          float dyR = float(dyRCorner + wR) / strides[0];
          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);
          int wRPerm = ${t} - 1 - wR;

          for (int wC = 0; wC < ${s}; wC++) {
            int wCPerm = ${s} - 1 - wC;

            float dyC = float(dyCCorner + wC) / strides[1];
            bool idyCVal = (dyC >= 0.0) && (dyC < ${e.outWidth}.0)
              && (fract(dyC) == 0.0);
            int idyC = int(dyC);

            float dyC2 = float(dyCCorner + wC + 1) / strides[1];
            bool idyCVal2 = (dyC2 >= 0.0) && (dyC2 < ${e.outWidth}.0)
              && (fract(dyC2) == 0.0);
            int idyC2 = int(dyC2);

            if (idyCVal && idyCVal2) {
              for (int d2 = 0; d2 < ${e.outChannels}; d2 += 2) {
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
              for (int d2 = 0; d2 < ${e.outChannels}; d2 += 2) {
                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);
                vec4 dySample = getDy(batch, idyR, idyC, d2);
                vec2 dyValue = mod(float(idyC), 2.) == 0. ?
                  dySample.xy : dySample.zw;
                result.xy += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));
              }
            } else if (idyCVal2) {
              for (int d2 = 0; d2 < ${e.outChannels}; d2 += 2) {
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
    `}}function zz(n){const{inputs:e,backend:t,attrs:s}=n,{dy:o,filter:r}=e,{inputShape:i,strides:a,pad:l,dataFormat:c,dimRoundingMode:u}=s,h=Jn(c),d=$t(i,r.shape,a,1,l,u,!1,h);if(U().getBool("WEBGL_PACK_CONV2DTRANSPOSE")&&h==="channelsLast"){const p=[[d.strideHeight,d.strideWidth]],f=new Bz(d);return t.runWebGLProgram(f,[o,r],"float32",p)}else{const p=new _z(d);return t.runWebGLProgram(p,[o,r],"float32")}}const Vz={kernelName:ha,backendName:"webgl",kernelFunc:zz};function Wz(n){const{inputs:e,backend:t,attrs:s}=n,{x:o,filter:r}=e,{strides:i,pad:a,dilations:l}=s,c=ms(o.shape,r.shape,i,l,a),u=new Ez(c);return t.runWebGLProgram(u,[o,r],"float32")}const Uz={kernelName:da,backendName:"webgl",kernelFunc:Wz};function Gz(n){const{inputs:e,backend:t,attrs:s}=n,{x:o,dy:r}=e,{strides:i,pad:a,filterShape:l}=s,c=ms(o.shape,l,i,1,a),u=new Oz(c);return t.runWebGLProgram(u,[o,r],"float32")}const Hz={kernelName:eu,backendName:"webgl",kernelFunc:Gz};function qz(n){const{inputs:e,backend:t,attrs:s}=n,{dy:o,filter:r}=e,{pad:i,strides:a,inputShape:l}=s,c=ms(l,r.shape,a,1,i),u=new Lz(c);return t.runWebGLProgram(u,[o,r],"float32")}const jz={kernelName:tu,backendName:"webgl",kernelFunc:qz};const Kz=rr+`
  return cos(x);
`,Xz=`
  vec4 result = cos(x);
  bvec4 isNaN = isnan(x);
  ${yo}
  return result;
`,Yz=Ae({opSnippet:Kz,packedOpSnippet:Xz}),Zz={kernelName:yr,backendName:"webgl",kernelFunc:Yz};const Qz=Ae({opSnippet:`
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`}),Jz={kernelName:wr,backendName:"webgl",kernelFunc:Qz};class eV{constructor(e,t,s,o,r){this.variableNames=["Image","Boxes","BoxInd"],this.outputShape=[];const[i,a,l,c]=e,[u]=t,[h,d]=s;this.outputShape=[u,h,d,c];const p=o==="bilinear"?1:0,[f,m]=[`${a-1}.0`,`${l-1}.0`],[g,x,b]=h>1?[`${(a-1)/(h-1)}`,"(y2-y1) * height_ratio",`y1*${f} + float(y)*(height_scale)`]:["0.0","0.0",`0.5 * (y1+y2) * ${f}`],[w,y,C]=d>1?[`${(l-1)/(d-1)}`,"(x2-x1) * width_ratio",`x1*${m} + float(x)*(width_scale)`]:["0.0","0.0",`0.5 * (x1+x2) * ${m}`];this.userCode=`
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
    `}}const tV={kernelName:su,backendName:"webgl",kernelFunc:n=>{const{inputs:e,backend:t,attrs:s}=n,{image:o,boxes:r,boxInd:i}=e,{cropSize:a,method:l,extrapolationValue:c}=s,u=new eV(o.shape,r.shape,a,l,c);return t.runWebGLProgram(u,[o,r,i],"float32")}};var Xi;(function(n){n.Prod="*",n.Sum="+"})(Xi||(Xi={}));class by{constructor(e,t,s,o){this.op=e,this.outputShape=t,this.variableNames=["x"],this.customUniforms=[{name:"index",type:"float"}];const r=this.outputShape.length,i=this.op===Xi.Prod?"1.0":"0.0",a=s?i:`getX(${yy(r,"coords",this.op)})`,l=this.outputShape[this.outputShape.length-1];let c="",u="";s?(c=o?`end != ${l-1}`:"end != 0",u=o?"end + 1":"end - 1"):(c=o?`end + pow2 < ${l}`:"end >= pow2",u=o?"end + pow2":"end - pow2"),this.userCode=`
      void main() {
        ${We(r)} coords = getOutputCoords();
        int end = ${wy(r,"coords",this.op)};
        float val = ${a};
        int pow2 = int(pow(2.0, index));
        if (${c}) {
          int idx = ${u};
          ${wy(r,"coords",this.op)} = idx;
          val ${this.op}= getX(${yy(r,"coords",this.op)});
        }
        setOutput(val);
      }
    `}}function yy(n,e,t){if(n===1)return`${e}`;if(n===2)return`${e}.x, ${e}.y`;if(n===3)return`${e}.x, ${e}.y, ${e}.z`;if(n===4)return`${e}.x, ${e}.y, ${e}.z, ${e}.w`;throw new Error(`Cumulative ${t} for rank ${n} is not yet supported`)}function wy(n,e,t){if(n===1)return`${e}`;if(n===2)return`${e}.y`;if(n===3)return`${e}.z`;if(n===4)return`${e}.w`;throw new Error(`Cumulative ${t} for rank ${n} is not yet supported`)}function Cy(n,e,t,s,o,r){const i=e.shape.length,a=Ze([s],i);let l=e;a!=null&&(l=Bt({inputs:{x:e},backend:t,attrs:{perm:a}}));const c=nt(1,i)[0];if(c!==i-1)throw new Error(`WebGL cumprod shader expects an inner-most axis=${e.shape.length-1} but got axis=${s}`);const u=l.shape[c];let h=Qt({inputs:{x:l},backend:t});for(let d=0;d<=Math.ceil(Math.log2(u))-1;d++){const p=new by(n,l.shape,!1,r),f=[[d]],m=h;h=t.runWebGLProgram(p,[h],h.dtype,f),t.disposeIntermediateTensorInfo(m)}if(o){const d=new by(n,l.shape,o,r),p=h;h=t.runWebGLProgram(d,[h],h.dtype),t.disposeIntermediateTensorInfo(p)}if(a!=null){const d=gs(a),p=Bt({inputs:{x:h},backend:t,attrs:{perm:d}});return t.disposeIntermediateTensorInfo(h),t.disposeIntermediateTensorInfo(l),p}return h}function nV(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{axis:r,exclusive:i,reverse:a}=s;return Cy(Xi.Prod,o,t,r,i,a)}const sV={kernelName:nu,backendName:"webgl",kernelFunc:nV};function oV(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{axis:r,exclusive:i,reverse:a}=s;return Cy(Xi.Sum,o,t,r,i,a)}const rV={kernelName:pa,backendName:"webgl",kernelFunc:oV};function iV(n){const{inputs:e,backend:t,attrs:s}=n,{x:o,weights:r}=e,{size:i,binaryOutput:a}=s;if(o.shape.length===1){const l=t.readSync(o.dataId),c=t.readSync(r.dataId),u=z1(l,c,r.dtype,r.shape,i);return t.makeTensorInfo([i],r.dtype,u)}else if(o.shape.length===2){const l=t.bufferSync(o),c=t.bufferSync(r),u=mP(l,c,i,a);return t.makeTensorInfo(u.shape,r.dtype,u.values)}throw new Error(`Error in denseBincount: input must be at most rank 2, but got rank${o.shape.length}.`)}const aV={kernelName:ou,backendName:"webgl",kernelFunc:iV};class lV{constructor(e,t,s){this.variableNames=["x"],this.outputShape=[],this.outputShape=e,this.blockSize=t,this.dataFormat=s,this.userCode=`
    void main() {
      ivec4 coords = getOutputCoords();
      int b = coords[0];
      int h = ${this.getHeightCoordString()};
      int w = ${this.getWidthCoordString()};
      int d = ${this.getDepthCoordString()};

      int in_h = h / ${t};
      int offset_h = imod(h, ${t});
      int in_w = w / ${t};
      int offset_w = imod(w, ${t});
      int offset_d = (offset_h * ${t} + offset_w) *
        ${this.getOutputDepthSize()};
      int in_d = d + offset_d;

      float result = ${this.getInputSamplingString()};
      setOutput(result);
    }
  `}getHeightCoordString(){return this.dataFormat==="NHWC"?"coords[1]":"coords[2]"}getWidthCoordString(){return this.dataFormat==="NHWC"?"coords[2]":"coords[3]"}getDepthCoordString(){return this.dataFormat==="NHWC"?"coords[3]":"coords[1]"}getOutputDepthSize(){return this.dataFormat==="NHWC"?this.outputShape[3]:this.outputShape[1]}getInputSamplingString(){return this.dataFormat==="NHWC"?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"}}function cV(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{blockSize:r,dataFormat:i}=s,a=o.shape[0],l=i==="NHWC"?o.shape[1]:o.shape[2],c=i==="NHWC"?o.shape[2]:o.shape[3],u=i==="NHWC"?o.shape[3]:o.shape[1],h=l*r,d=c*r,p=u/(r*r),f=i==="NHWC"?[a,h,d,p]:[a,p,h,d],m=new lV(f,r,i);return t.runWebGLProgram(m,[o],o.dtype)}const uV={kernelName:ru,backendName:"webgl",kernelFunc:cV};class Iy{constructor(e,t=!1,s=null,o=!1,r=!1){this.variableNames=["x","W"],this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=e.outShape,this.enableShapeUniforms=Ft(this.outputShape.length);const i=e.filterHeight,a=e.filterWidth,l=e.outChannels/e.inChannels;let c="",u="";s&&(o?c=`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${s}
        }`:r?c=`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${s}
        }`:c=`
          float activation(float x) {
            ${s}
          }
        `,u="result = activation(result);");const h=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),o&&this.variableNames.push("preluActivationWeights"),r&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
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
    `}}class $y{constructor(e,t=!1,s=null,o=!1,r=!1){this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=e.outShape,this.enableShapeUniforms=Ft(this.outputShape.length);const i=e.outChannels/e.inChannels,a=e.padInfo.left,l=e.strideWidth,c=e.dilationWidth,u=e.filterHeight,h=e.filterWidth,d=h;let p=`
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
                `,b+1<h)){const w=a%2===0?xn(c):c;c%2===0&&a%2===1||c%2!==0&&a%2!==1?(p+=`
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
        }`,m="result = activation(result);");const g=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),o&&this.variableNames.push("preluActivationWeights"),r&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
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
    `}}function hV(n){const{inputs:e,backend:t,attrs:s}=n,{x:o,filter:r}=e,{strides:i,pad:a,dilations:l,dimRoundingMode:c}=s;let u=l;u==null&&(u=[1,1]),S(Rt(i,u),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${i} and dilations '${u}'`);const h=$t(o.shape,r.shape,i,u,a,c,!0);let d;U().getBool("WEBGL_PACK_DEPTHWISECONV")&&h.strideWidth<=2&&h.outChannels/h.inChannels===1?d=new $y(h):d=new Iy(h);const p=[[h.padInfo.top,h.padInfo.left],[h.strideHeight,h.strideWidth],[h.dilationHeight,h.dilationWidth],[h.inHeight,h.inWidth]];return t.runWebGLProgram(d,[o,r],"float32",p)}const dV={kernelName:fa,backendName:"webgl",kernelFunc:hV};class pV{constructor(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;const t=e.strideHeight,s=e.strideWidth,o=e.padInfo.top,r=e.padInfo.left,i=e.outChannels/e.inChannels;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int dm = coords.w;
        int d2 = d1 * ${i} + dm;

        float dotProd = 0.0;

        // TO DO: Vec4 over the batch size
        for (int b = 0; b < ${e.batchSize}; b++) {
          for (int yR = 0; yR < ${e.outHeight}; yR++) {
            int xR = wR + yR * ${t} - ${o};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${e.outWidth}; yC++) {
              int xC = wC + yC * ${s} - ${r};

              if (xC < 0 || xC >= ${e.inWidth}) {
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
    `}}class fV{constructor(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;const t=e.filterHeight,s=e.filterWidth,o=e.strideHeight,r=e.strideWidth,i=t-1-e.padInfo.top,a=s-1-e.padInfo.left,l=e.outChannels/e.inChannels;this.userCode=`
      const ivec2 pads = ivec2(${i}, ${a});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];
        ivec2 dyCorner = coords.yz - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        float dotProd = 0.0;

        for (int wR = 0; wR < ${t}; wR++) {
          float dyR = float(dyRCorner + wR) / ${o}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${t} - 1 - wR;

          for (int wC = 0; wC < ${s}; wC++) {
            float dyC = float(dyCCorner + wC) / ${r}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
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
    `}}function mV(n){const{inputs:e,backend:t,attrs:s}=n,{x:o,dy:r}=e,{strides:i,dilations:a,pad:l,dimRoundingMode:c,filterShape:u}=s,h=$t(o.shape,u,i,a,l,c,!0),d=new pV(h);return t.runWebGLProgram(d,[o,r],"float32")}const gV={kernelName:iu,backendName:"webgl",kernelFunc:mV};function xV(n){const{inputs:e,backend:t,attrs:s}=n,{dy:o,filter:r}=e,{strides:i,dilations:a,pad:l,dimRoundingMode:c,inputShape:u}=s,h=$t(u,r.shape,i,a,l,c,!0),d=new fV(h);return t.runWebGLProgram(d,[o,r],"float32")}const bV={kernelName:au,backendName:"webgl",kernelFunc:xV};class yV{constructor(e){this.variableNames=["X"],this.outputShape=[e,e],this.userCode=`
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `}}function wV(n){const{inputs:e,backend:t}=n,{x:s}=e,o=[...s.shape,...s.shape],r=j(s.shape),i=se({inputs:{x:s},backend:t,attrs:{shape:[r]}}),a=new yV(r),l=t.runWebGLProgram(a,[i],i.dtype),c=se({inputs:{x:l},backend:t,attrs:{shape:o}});return t.disposeIntermediateTensorInfo(i),t.disposeIntermediateTensorInfo(l),c}const CV={kernelName:Rp,backendName:"webgl",kernelFunc:wV};class IV{constructor(e){this.variableNames=["x","W"],this.outputShape=e.outShape;const{inHeight:t,inWidth:s,padInfo:o,strideHeight:r,strideWidth:i,filterHeight:a,filterWidth:l,dilationHeight:c,dilationWidth:u}=e,{top:h,left:d}=o;this.userCode=`
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

          if (hIn >= 0 && hIn < ${t}) {
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
    `}}function $V(n){const{inputs:e,backend:t,attrs:s}=n,{x:o,filter:r}=e,{strides:i,pad:a,dilations:l}=s,c=li(o.shape,r.shape,i,a,"NHWC",l);let u;const h=new IV(c);u=t.runWebGLProgram(h,[o,r],"float32");const d=se({inputs:{x:u},backend:t,attrs:{shape:c.outShape}});return t.disposeIntermediateTensorInfo(u),d}const vV={kernelName:ma,backendName:"webgl",kernelFunc:$V};function kV(n){const{inputs:e,backend:t,attrs:s}=n,{equation:o}=s,r=e,{allDims:i,summedDims:a,idDims:l}=Kh(o,r.length);Yh(i.length,l,r);const{path:c,steps:u}=Zh(a,l),h=u.length;let d=null,p=i.length;const f=[];for(let m=0;m<h;++m){for(const g of u[m]){const{permutationIndices:x,expandDims:b}=Xh(p,l[g]);let w;Qh(x)?w=r[g]:(w=Bt({inputs:{x:r[g]},backend:t,attrs:{perm:x}}),f.push(w));const y=w.shape.slice();for(let C=0;C<b.length;++C)y.splice(b[C],0,1);_e(w.shape,y)||(w=se({inputs:{x:w},backend:t,attrs:{shape:y}}),f.push(w)),d===null?d=w:(d=ap({inputs:{a:w,b:d},backend:t}),f.push(d))}m<h-1&&(c[m]>=0&&(d=Ic({inputs:{x:d},backend:t,attrs:{axis:c[m]-(i.length-p),keepDims:!1}}),f.push(d)),p--)}for(const m of f)m!==d&&t.disposeIntermediateTensorInfo(m);return d}const SV={kernelName:uu,backendName:"webgl",kernelFunc:kV};const NV=Ae({opSnippet:"return (x >= 0.0) ? x : (exp(x) - 1.0);",packedOpSnippet:`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`}),TV={kernelName:Ir,backendName:"webgl",kernelFunc:NV};const EV="return (b >= 0.0) ? a : a * (b + 1.0);",RV=`
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`,AV={kernelName:hu,backendName:"webgl",kernelFunc:n=>{const{inputs:e,backend:t}=n,{dy:s,y:o}=e,r=U().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new or(RV,s.shape,o.shape):new bo(EV,s.shape,o.shape);return t.runWebGLProgram(r,[s,o],s.dtype)}};const DV=Nt({opSnippet:"return float(a == b);",packedOpSnippet:`
  return vec4(equal(a, b));
`,dtype:"bool",cpuKernelImpl:wP}),FV={kernelName:ga,backendName:"webgl",kernelFunc:DV};const _V=`
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  float p = ${zh};
  float a1 = ${Vh};
  float a2 = ${Wh};
  float a3 = ${Uh};
  float a4 = ${Gh};
  float a5 = ${Hh};

  float sign = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + p * x);
  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));
`,OV=Ae({opSnippet:_V}),LV={kernelName:$r,backendName:"webgl",kernelFunc:OV};const MV=rr+`
  return exp(x);
`,vy=Ae({opSnippet:MV,packedOpSnippet:`
  vec4 result = exp(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,cpuKernelImpl:CP,dtype:"float32"}),PV={kernelName:vr,backendName:"webgl",kernelFunc:vy};function hp(n){const{inputs:e,attrs:t,backend:s}=n,{dim:o}=t,{input:r}=e,i=r.shape.length,a=r.shape.slice();let l=o;return o<0&&(S(-(i+1)<=o,()=>`Axis must be in the interval [${-(i+1)}, ${i}]`),l=i+o+1),a.splice(l,0,1),se({inputs:{x:r},backend:s,attrs:{shape:a}})}const BV={kernelName:xa,backendName:"webgl",kernelFunc:hp};const ky="return exp(x) - 1.0;",zV=Ae({opSnippet:ky,packedOpSnippet:ky,cpuKernelImpl:IP}),VV={kernelName:kr,backendName:"webgl",kernelFunc:zV};class Sy{constructor(e,t,s){this.variableNames=["real","imag"];const o=t[1];this.outputShape=t;const r=s?`2.0 * ${Math.PI}`:`-2.0 * ${Math.PI}`,i=s?`${o}.0`:"1.0";let a;if(e==="real")a="return real * expR - imag * expI;";else if(e==="imag")a="return real * expI + imag * expR;";else throw new Error(`FFT component must be either "real" or "imag", got ${e}.`);this.userCode=`
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
    `}}function Ny(n,e,t){const s=t.texData.get(n.dataId),o=j(n.shape),r=n.shape[n.shape.length-1],i=o/r,a=se({inputs:{x:n},backend:t,attrs:{shape:[i,r]}}),l=a.shape,c=new Sy("real",l,e),u=new Sy("imag",l,e),h=[{dataId:s.complexTensorInfos.real.dataId,dtype:s.complexTensorInfos.real.dtype,shape:l},{dataId:s.complexTensorInfos.imag.dataId,dtype:s.complexTensorInfos.imag.dtype,shape:l}],d=t.runWebGLProgram(c,h,"float32"),p=t.runWebGLProgram(u,h,"float32"),f=Ds({inputs:{real:d,imag:p},backend:t});t.disposeIntermediateTensorInfo(d),t.disposeIntermediateTensorInfo(p);const m=se({inputs:{x:f},backend:t,attrs:{shape:n.shape}});return t.disposeIntermediateTensorInfo(a),t.disposeIntermediateTensorInfo(f),m}function WV(n){const{inputs:e,backend:t}=n,{input:s}=e;return Ny(s,!1,t)}const UV={kernelName:du,backendName:"webgl",kernelFunc:WV};class GV{constructor(e,t){this.outputShape=[],this.customUniforms=[{name:"value",type:"float"}],this.variableNames=["x"],this.outputShape=e,this.userCode=`
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `}}function Yi(n){const{backend:e,attrs:t}=n,{shape:s,value:o}=t;let{dtype:r}=t;if(r=r||So(o),r==="string"){const i=et(r,j(s));return i.fill(o),e.makeTensorInfo(s,r,i)}else{const i=new GV(s,o),a=[[o]];return e.runWebGLProgram(i,[],r,a)}}const HV={kernelName:pu,backendName:"webgl",kernelFunc:Yi};class qV{constructor(e){this.variableNames=["Image"],this.outputShape=[];const t=e[2];this.outputShape=e,this.userCode=`
        void main() {
          ivec4 coords = getOutputCoords();
          int x = coords[2];

          int coordX = ${t} - x - 1;
          float outputValue;
          if(coordX >= 0 && coordX < ${t}) {
            outputValue = getImage(coords[0], coords[1], coordX, coords[3]);
          } else {
            outputValue = getImage(coords[0], coords[1], coords[2], coords[3]);
          }
          setOutput(outputValue);
        }
    `}}const jV={kernelName:fu,backendName:"webgl",kernelFunc:({inputs:n,backend:e})=>{const{image:t}=n,s=e,o=new qV(t.shape);return s.runWebGLProgram(o,[t],t.dtype)}};const Ty="return floor(x);",KV=Ae({opSnippet:Ty,packedOpSnippet:Ty,cpuKernelImpl:$P}),XV={kernelName:Sr,backendName:"webgl",kernelFunc:KV};const YV=Nt({opSnippet:`
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
`,dtype:"int32"}),ZV={kernelName:Nr,backendName:"webgl",kernelFunc:YV};class QV{constructor(e){this.variableNames=["A"];const t=Mt(),[s,o]=e;this.outputShape=e,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${o}.0, ${s}.0);

        vec4 values = ${t.texture2D}(A, uv);
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
    `}}class JV{constructor(e){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;const t=Mt(),[s,o]=e;this.outputShape=e,this.userCode=`
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
            vec4 values = ${t.texture2D}(A, uv);
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

        ${t.output} = result;
      }
    `}}const eW={kernelName:pw,backendName:"webgl",kernelFunc:tW};let ar,dp=U().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");function tW(n){const{inputs:e,backend:t,attrs:s}=n;let{pixels:o}=e;const{numChannels:r}=s,i=typeof HTMLVideoElement!="undefined"&&o instanceof HTMLVideoElement,a=typeof HTMLImageElement!="undefined"&&o instanceof HTMLImageElement,[l,c]=i?[o.videoWidth,o.videoHeight]:[o.width,o.height],u=[c,l],h=[c,l,r];if(a||i){const m=U().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");(ar==null||m!==dp)&&(dp=m,ar=document.createElement("canvas").getContext("2d",{willReadFrequently:dp})),ar.canvas.width=l,ar.canvas.height=c,ar.drawImage(o,0,0,l,c),o=ar.canvas}const d=t.makeTensorInfo(u,"int32");t.texData.get(d.dataId).usage=sn.PIXELS,t.gpgpu.uploadPixelDataToTexture(t.getTexture(d.dataId),o);const p=U().getBool("WEBGL_PACK")?new JV(h):new QV(h),f=t.runWebGLProgram(p,[d],"int32");return t.disposeData(d.dataId),f}function nW(n){const{inputs:e,backend:t,attrs:s}=n,{x:o,filter:r,bias:i,preluActivationWeights:a}=e,{strides:l,pad:c,dataFormat:u,dilations:h,dimRoundingMode:d,activation:p,leakyreluAlpha:f}=s,m=Jn(u),g=$t(o.shape,r.shape,l,h,c,d,!1,m);let x;const b=[],w=i!=null,y=a!=null,C=p==="leakyrelu",$=()=>{const k=[o,r],N=(T,I)=>{if(I==="NCHW"&&T.shape.length===1&&T.shape[0]!==1){const E=se({inputs:{x:T},backend:t,attrs:{shape:[T.shape[0],1,1]}});return b.push(E),E}return T};if(w&&k.push(N(i,u)),y&&k.push(N(a,u)),C){const T=t.makeTensorInfo([],"float32",hs(f,"float32"));k.push(T),b.push(T)}return k};if(g.filterHeight===1&&g.filterWidth===1&&g.dilationHeight===1&&g.dilationWidth===1&&g.strideHeight===1&&g.strideWidth===1&&(g.padInfo.type==="SAME"||g.padInfo.type==="VALID"))x=gy({x:o,filter:r,convInfo:g,backend:t,bias:i,activation:p,preluActivationWeights:a,leakyreluAlpha:f});else if(g.strideWidth<=2&&m==="channelsLast"&&U().getBool("WEBGL_EXP_CONV")){const k=p?Hi(p,!0):null,N=new my(g,w,k,y,C),T=[[g.padInfo.top,g.padInfo.left],[g.strideHeight,g.strideWidth],[g.dilationHeight,g.dilationWidth],[g.inHeight,g.inWidth]],I=$();x=t.runWebGLProgram(N,I,"float32",T)}else if(U().getBool("WEBGL_CONV_IM2COL"))x=xy({x:o,filter:r,convInfo:g,backend:t,bias:i,activation:p,preluActivationWeights:a,leakyreluAlpha:f});else{const k=p?Hi(p,!1):null,N=new fy(g,w,k,y,C),T=$();x=t.runWebGLProgram(N,T,"float32")}const v=se({inputs:{x},backend:t,attrs:{shape:g.outShape}});return b.push(x),b.forEach(k=>t.disposeIntermediateTensorInfo(k)),v}const sW={kernelName:nl,backendName:"webgl",kernelFunc:nW};function oW(n){const{inputs:e,backend:t,attrs:s}=n,{x:o,filter:r,bias:i,preluActivationWeights:a}=e,{strides:l,pad:c,dilations:u,dimRoundingMode:h,activation:d,leakyreluAlpha:p}=s,f=[];let m=u;m==null&&(m=[1,1]),S(Rt(l,m),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${l} and dilations '${m}'`);const g=$t(o.shape,r.shape,l,m,c,h,!0),x=U().getBool("WEBGL_PACK_DEPTHWISECONV")&&g.strideWidth<=2&&g.outChannels/g.inChannels===1,b=d?Hi(d,x):null,w=[o,r],y=i!=null,C=a!=null,$=d==="leakyrelu";if(y&&w.push(i),C&&w.push(a),$){const T=t.makeTensorInfo([],"float32",hs(p,"float32"));w.push(T),f.push(T)}let v;x?v=new $y(g,y,b,C,$):v=new Iy(g,y,b,C,$);const k=[[g.padInfo.top,g.padInfo.left],[g.strideHeight,g.strideWidth],[g.dilationHeight,g.dilationWidth],[g.inHeight,g.inWidth]],N=t.runWebGLProgram(v,w,"float32",k);return f.forEach(T=>t.disposeIntermediateTensorInfo(T)),N}const rW={kernelName:Xp,backendName:"webgl",kernelFunc:oW};class iW{constructor(e,t,s,o){this.sliceDim=e,this.strides=t,this.paramsShape=o,this.variableNames=["x","indices"],this.outputShape=s;const r=We(s.length);let i=`
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
      `}}function aW(n){const{inputs:e,backend:t}=n,{params:s,indices:o}=e,r=o.shape,i=r[r.length-1],a=j(s.shape),[l,c,u,h]=Dh(s,o),d=se({inputs:{x:o},backend:t,attrs:{shape:[c,i]}}),p=se({inputs:{x:s},backend:t,attrs:{shape:[j(s.shape)/u,u]}});if(t.shouldExecuteOnCPU([s,o])||s.dtype==="string"){const x=t.readSync(o.dataId),b=t.bufferSync(s),w=vP(x,b,s.dtype,c,i,u,h,s.shape,a);return t.makeTensorInfo(l,s.dtype,w.values)}const f=new iW(i,h,[c,u],s.shape),m=t.runWebGLProgram(f,[p,d],p.dtype),g=se({inputs:{x:m},backend:t,attrs:{shape:l}});return t.disposeIntermediateTensorInfo(d),t.disposeIntermediateTensorInfo(p),t.disposeIntermediateTensorInfo(m),g}const lW={kernelName:Ap,backendName:"webgl",kernelFunc:aW};class cW{constructor(e,t){this.variableNames=["A","indices"],this.outputShape=t,this.rank=t.length;const s=We(this.rank),o=uW(e);this.userCode=`
      void main() {
        ${s} resRC = getOutputCoords();
        int index = int(getIndices(resRC.x, resRC.z));
        float inBounds = (index >= 0) && (index < ${e[2]}) ? 1.0 : 0.0;
        setOutput(inBounds * getA(${o}));
      }
    `}}function uW(n,e){const t=["resRC.x","resRC.y","resRC.z","resRC.w"],s=[];for(let o=0;o<n.length;o++)o===2?s.push("index"):s.push(`${t[o]}`);return s.join()}function Ey(n){const{inputs:e,backend:t,attrs:s}=n,{x:o,indices:r}=e,{axis:i,batchDims:a}=s,l=ve(i,o.shape)[0];if(U().get("DEBUG")){const b=t.readSync(r.dataId),w=o.shape[l];for(let y=0;y<b.length;++y){const C=b[y];S(C<=w-1&&C>=0,()=>`GatherV2: the index value ${C} is not in [0, ${w-1}]`)}}const c=dg(o,r,l,a),u=j(r.shape),h=[],d=se({inputs:{x:o},backend:t,attrs:{shape:[c.batchSize,c.outerSize,c.dimSize,c.sliceSize]}}),p=se({inputs:{x:r},backend:t,attrs:{shape:[c.batchSize,u/c.batchSize]}});h.push(d),h.push(p);const f=[c.batchSize,c.outerSize,u/c.batchSize,c.sliceSize];if(t.shouldExecuteOnCPU([o,r])||o.dtype==="string"){const b=t.bufferSync(p),w=t.bufferSync(d),y=kP(w,b,f);return h.forEach(C=>t.disposeIntermediateTensorInfo(C)),t.makeTensorInfo(c.outputShape,y.dtype,y.values)}const m=new cW(d.shape,f),g=t.runWebGLProgram(m,[d,p],d.dtype);h.push(g);const x=se({inputs:{x:g},backend:t,attrs:{shape:c.outputShape}});return h.forEach(b=>t.disposeIntermediateTensorInfo(b)),x}const hW={kernelName:ya,backendName:"webgl",kernelFunc:Ey};const dW=Nt({opSnippet:"return float(a > b);",packedOpSnippet:`
  return vec4(greaterThan(a, b));
`,cpuKernelImpl:SP,dtype:"bool"}),pW={kernelName:wa,backendName:"webgl",kernelFunc:dW};const fW=Nt({opSnippet:"return float(a >= b);",packedOpSnippet:`
  return vec4(greaterThanEqual(a, b));
`,dtype:"bool",cpuKernelImpl:NP}),mW={kernelName:Tr,backendName:"webgl",kernelFunc:fW};function gW(n){const{inputs:e,backend:t}=n,{input:s}=e;return Ny(s,!0,t)}const xW={kernelName:mu,backendName:"webgl",kernelFunc:gW};const bW=Ae({opSnippet:"return float(!isnan(x) && !isinf(x));",dtype:"bool"}),yW={kernelName:Rr,backendName:"webgl",kernelFunc:bW};const wW=Ae({opSnippet:"return float(isinf(x));",dtype:"bool"}),CW={kernelName:Ar,backendName:"webgl",kernelFunc:wW};const IW=Ae({opSnippet:"return float(isnan(x));",dtype:"bool"}),$W={kernelName:Dr,backendName:"webgl",kernelFunc:IW};const vW=Nt({opSnippet:"return float(a < b);",packedOpSnippet:`
  return vec4(lessThan(a, b));
`,cpuKernelImpl:TP,dtype:"bool"}),kW={kernelName:Ia,backendName:"webgl",kernelFunc:vW};const SW=Nt({opSnippet:"return float(a <= b);",packedOpSnippet:`
  return vec4(lessThanEqual(a, b));
`,cpuKernelImpl:EP,dtype:"bool"}),NW={kernelName:$a,backendName:"webgl",kernelFunc:SW};function TW(n){const{backend:e,attrs:t}=n,{start:s,stop:o,num:r}=t,i=RP(s,o,r);return e.makeTensorInfo([i.length],"float32",i)}const EW={kernelName:Dp,backendName:"webgl",kernelFunc:TW};const RW=rr+`
  return x < 0.0 ? 0./0. : log(x);
`,AW=Ae({opSnippet:RW,packedOpSnippet:`
  vec4 result = log(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : (x.r < 0.0 ? 0./0. : result.r);
  result.g = isNaN.g ? x.g : (x.g < 0.0 ? 0./0. : result.g);
  result.b = isNaN.b ? x.b : (x.b < 0.0 ? 0./0. : result.b);
  result.a = isNaN.a ? x.a : (x.a < 0.0 ? 0./0. : result.a);
  return result;
`,cpuKernelImpl:AP}),DW={kernelName:Fr,backendName:"webgl",kernelFunc:AW};const FW=rr+`
  return log(1.0 + x);
`,_W=Ae({opSnippet:FW}),OW={kernelName:_r,backendName:"webgl",kernelFunc:_W};const LW=Nt({opSnippet:"return float(a >= 1.0 && b >= 1.0);",packedOpSnippet:`
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`,dtype:"bool"}),MW={kernelName:va,backendName:"webgl",kernelFunc:LW};const PW=Ae({opSnippet:"return float(!(x >= 1.0));"}),BW={kernelName:ka,backendName:"webgl",kernelFunc:PW};const zW=Nt({opSnippet:"return float(a >= 1.0 || b >= 1.0);",packedOpSnippet:`
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`,dtype:"bool"}),VW={kernelName:Sa,backendName:"webgl",kernelFunc:zW};class WW{constructor(e,t,s,o,r){this.variableNames=["x"],this.outputShape=[];const i=t,a=e[3]-1;this.outputShape=e;let l;const c=`float(${s}) + float(${o}) * sum`;r===.5?l=`inversesqrt(${c})`:r===1?l=`1.0/(${c})`:l=`exp(log(${c}) * float(-${r}));`,this.userCode=`
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
    `}}class UW{constructor(e,t,s,o,r){this.variableNames=["x"],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;const i=t,a=e[3]-1;this.outputShape=e;let l;const c=`float(${s}) + float(${o}) * sum`;r===.5?l=`inversesqrt(${c})`:r===1?l=`1.0/(${c})`:l=`exp(log(${c}) * float(-${r}));`,this.userCode=`
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
    `}}const GW={kernelName:Na,backendName:"webgl",kernelFunc:n=>{const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{depthRadius:r,bias:i,alpha:a,beta:l}=s,c=U().getBool("WEBGL_PACK_NORMALIZATION")?new UW(o.shape,r,i,a,l):new WW(o.shape,r,i,a,l);return t.runWebGLProgram(c,[o],o.dtype)}};class HW{constructor(e,t,s,o,r){this.variableNames=["inputImage","outputImage","dy"],this.outputShape=[],this.outputShape=e,this.depth=e[3],this.depthRadius=t,this.bias=s,this.alpha=o,this.beta=r,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];

        float result = 0.0;
        for (int d = 0; d < ${this.depth}; ++d) {
          int depthBegin = int(max(0.0, float(d - ${t})));
          int depthEnd = int(min(float(${this.depth}),
              float(d + ${t} + 1)));

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
    `}}const qW={kernelName:xu,backendName:"webgl",kernelFunc:n=>{const{inputs:e,backend:t,attrs:s}=n,{x:o,y:r,dy:i}=e,{depthRadius:a,bias:l,alpha:c,beta:u}=s,h=new HW(o.shape,a,l,c,u);return t.runWebGLProgram(h,[o,r,i],o.dtype)}};function jW(n,e,t,s){const o=j(e),i=j(n.shape)/o,a=se({inputs:{x:n},attrs:{shape:[i,o]},backend:s}),l=wo(a,n.dtype,"max",s),c=se({inputs:{x:l},attrs:{shape:t},backend:s});return s.disposeIntermediateTensorInfo(a),s.disposeIntermediateTensorInfo(l),c}function Ry(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{reductionIndices:r,keepDims:i}=s,a=o.shape.length,l=ve(r,o.shape);let c=l;const u=Ze(c,a),h=u!=null,d=t.shouldExecuteOnCPU([o]);let p=o;if(h){if(d){const w=t.texData.get(p.dataId).values,y=new Array(a);for(let v=0;v<y.length;v++)y[v]=o.shape[u[v]];const C=rp(w,o.shape,o.dtype,u,y);p=t.makeTensorInfo(y,o.dtype);const $=t.texData.get(p.dataId);$.values=C}else p=Cc(o,u,t);c=nt(c.length,a)}kt("max",c,a);const[f,m]=yt(p.shape,c);let g=f;i&&(g=at(f,l));let x;if(d){const w=t.texData.get(p.dataId).values,y=DP(w,j(m),g,o.dtype);x=t.makeTensorInfo(g,o.dtype);const C=t.texData.get(x.dataId);C.values=y}else x=jW(p,m,g,t);return h&&t.disposeIntermediateTensorInfo(p),x}const KW={kernelName:Ta,backendName:"webgl",kernelFunc:Ry};const XW=ip+`
  return max(a, b);
`,YW=`
  vec4 result = vec4(max(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+yo+`
  return result;
`,ZW=Nt({opSnippet:XW,packedOpSnippet:YW,cpuKernelImpl:FP}),QW={kernelName:Or,backendName:"webgl",kernelFunc:ZW};function JW(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e;Ui(o,"maxPool");const{filterSize:r,strides:i,pad:a,dimRoundingMode:l}=s,c=1;S(Rt(i,c),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${c}'`);const u=an(o.shape,r,i,c,a,l);if(u.filterWidth===1&&u.filterHeight===1&&_e(u.inShape,u.outShape))return Qt({inputs:{x:o},backend:t});const h=new qi(u,"max",!1);return t.runWebGLProgram(h,[o],o.dtype)}const e4={kernelName:Ea,backendName:"webgl",kernelFunc:JW};function t4(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{filterSize:r,strides:i,pad:a,dataFormat:l,dimRoundingMode:c}=s,u=[1,1,1],h=Qn(o.shape,r,i,u,a,c,l),d=new lp(h,"max",!1);return t.runWebGLProgram(d,[o],o.dtype)}const n4={kernelName:Ra,backendName:"webgl",kernelFunc:t4};class s4{constructor(e){this.variableNames=["dy","maxPos"],this.outputShape=e.inShape;const t=e.strideHeight,s=e.strideWidth,o=e.dilationHeight,r=e.effectiveFilterHeight,i=e.effectiveFilterWidth,a=r-1-e.padInfo.top,l=i-1-e.padInfo.left,c=r*i-1;this.userCode=`
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
          float dyR = float(dyRCorner + wR) / ${t}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${i}; wC++) {
            float dyC = float(dyCCorner + wC) / ${s}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
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
    `}}class o4{constructor(e){this.variableNames=["dy","maxPos"],this.outputShape=e.inShape;const t=e.strideDepth,s=e.strideHeight,o=e.strideWidth,r=e.dilationDepth,i=e.dilationHeight,a=e.dilationWidth,l=e.effectiveFilterDepth,c=e.effectiveFilterHeight,u=e.effectiveFilterWidth,h=l-1-e.padInfo.front,d=c-1-e.padInfo.top,p=u-1-e.padInfo.left,f=l*c*u-1;this.userCode=`
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
          float dyD = float(dyDCorner + wD) / ${t}.0;

          if (dyD < 0.0 || dyD >= ${e.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${c};
              wR += ${i}) {
            float dyR = float(dyRCorner + wR) / ${s}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${u};
                wC += ${a}) {
              float dyC = float(dyCCorner + wC) / ${o}.0;

              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
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
    `}}function r4(n){const{inputs:e,backend:t,attrs:s}=n,{dy:o,input:r}=e,i=r,{filterSize:a,strides:l,pad:c,dimRoundingMode:u}=s,h=[1,1,1],d=Qn(i.shape,a,l,h,c,u),p=new lp(d,"max",!0),f=t.runWebGLProgram(p,[i],i.dtype),m=new o4(d),g=t.runWebGLProgram(m,[o,f],i.dtype);return t.disposeIntermediateTensorInfo(f),g}const i4={kernelName:yu,backendName:"webgl",kernelFunc:r4};function a4(n){const{inputs:e,backend:t,attrs:s}=n,{dy:o,input:r,output:i}=e,a=r;Ui([r,i],"maxPoolGrad");const{filterSize:l,strides:c,pad:u,dimRoundingMode:h}=s,d=an(a.shape,l,c,1,u,h),p=!0,f=new qi(d,"max",p),m=t.runWebGLProgram(f,[a],a.dtype),g=new s4(d),x=t.runWebGLProgram(g,[o,m],a.dtype);return t.disposeIntermediateTensorInfo(m),x}const l4={kernelName:bu,backendName:"webgl",kernelFunc:a4};function c4(n,e,t,s){let o=new qi(t,"max",!1);const r=s.runWebGLProgram(o,[n],"float32");o=new qi(t,"max",!0,!0,e);const i=s.runWebGLProgram(o,[n],"float32");return[r,i]}const u4={kernelName:Fp,backendName:"webgl",kernelFunc:({inputs:n,attrs:e,backend:t})=>{const{x:s}=n,{filterSize:o,strides:r,pad:i,includeBatchInIndex:a}=e,l=t;S(s.shape.length===4,()=>`Error in maxPool: input must be rank 4 but got rank ${s.shape.length}.`);const c=[1,1];S(Rt(r,c),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${r} and dilations '${c}'`);const u=an(s.shape,o,r,c,i),[h,d]=c4(s,a,u,l);return[h,d]}};function h4(n,e,t,s){const o=j(e),i=j(n.shape)/o,a=se({inputs:{x:n},attrs:{shape:[i,o]},backend:s}),l=wo(a,"float32","mean",s),c=se({inputs:{x:l},attrs:{shape:t},backend:s});return s.disposeIntermediateTensorInfo(a),s.disposeIntermediateTensorInfo(l),c}const d4={kernelName:Aa,backendName:"webgl",kernelFunc:({inputs:n,attrs:e,backend:t})=>{const{x:s}=n,{keepDims:o,axis:r}=e,i=t,a=s.shape.length,l=ve(r,s.shape);let c=l;const u=Ze(c,a),h=u!=null,d=i.shouldExecuteOnCPU([s]),p=[];let f=s;if(h){if(d){const y=i.texData.get(f.dataId).values,C=new Array(a);for(let k=0;k<C.length;k++)C[k]=s.shape[u[k]];const $=rp(y,s.shape,s.dtype,u,C);f=i.makeTensorInfo(C,s.dtype);const v=i.texData.get(f.dataId);v.values=$}else f=Cc(s,u,i);p.push(f),c=nt(c.length,a)}kt("sum",c,a);const[m,g]=yt(f.shape,c);let x=m;o&&(x=at(m,l));const b=h4(f,g,x,i);for(const w of p)i.disposeIntermediateTensorInfo(w);return b}};function p4(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{axis:r,keepDims:i}=s,a=o.shape.length,l=ve(r,o.shape);let c=l;const u=Ze(c,a);let h=o;u!=null&&(h=Bt({inputs:{x:o},backend:t,attrs:{perm:u}}),c=nt(c.length,o.shape.length)),kt("min",c,a);const[d,p]=yt(h.shape,c),f=j(p),m=se({inputs:{x:h},backend:t,attrs:{shape:[-1,f]}}),g=wo(m,m.dtype,"min",t);let x;if(i){const b=at(d,l);x=se({inputs:{x:g},backend:t,attrs:{shape:b}})}else x=se({inputs:{x:g},backend:t,attrs:{shape:d}});return t.disposeIntermediateTensorInfo(m),t.disposeIntermediateTensorInfo(g),u!=null&&t.disposeIntermediateTensorInfo(h),x}const f4={kernelName:Da,backendName:"webgl",kernelFunc:p4};const m4=ip+`
  return min(a, b);
`,g4=`
  vec4 result = vec4(min(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+yo+`
  return result;
`,x4=Nt({opSnippet:m4,packedOpSnippet:g4,cpuKernelImpl:_P}),b4={kernelName:Lr,backendName:"webgl",kernelFunc:x4};class y4{constructor(e,t,s){this.variableNames=["x"],this.outputShape=t.map((u,h)=>u[0]+e[h]+u[1]);const o=e.length,r=We(o),i=t.map(u=>u[0]).join(","),a=t.map((u,h)=>u[0]+e[h]).join(","),l=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,o),c=s==="reflect"?0:1;if(o===1){this.userCode=`
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
    `}}class w4{constructor(e,t,s){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t.map((f,m)=>f[0]+e[m]+f[1]);const o=e.length,r=We(o),i=t.map(f=>f[0]).join(","),a=t.map((f,m)=>f[0]+e[m]).join(","),l=Pt("rc",o),c=Pt("source",o),u=`${l[o-1]} < ${this.outputShape[o-1]}`,h=o===1?"source":`vec2(${c.slice(-2).join()})`,d=s==="reflect"?0:1;let p="";if(o===1){const f=`
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
    `}}const C4={kernelName:Fa,backendName:"webgl",kernelFunc:({inputs:n,backend:e,attrs:t})=>{const{x:s}=n,{paddings:o,mode:r}=t,i=U().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new w4(s.shape,o,r):new y4(s.shape,o,r);return e.runWebGLProgram(i,[s],s.dtype)}};const I4=`if (b == 0.0) return NAN;
  return mod(a, b);`,$4=`
  vec4 result = mod(a, b);
  bvec4 isNaN = equal(b, vec4(0.0));
  `+yo+`
  return result;
`,v4=Nt({opSnippet:I4,packedOpSnippet:$4}),k4={kernelName:Mr,backendName:"webgl",kernelFunc:v4};class S4{constructor(e,t,s){this.variableNames=["probs"],this.customUniforms=[{name:"seed",type:"float"}],this.outputShape=[e,s],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];

        float r = random(seed);
        float cdf = 0.0;

        for (int i = 0; i < ${t-1}; i++) {
          cdf += getProbs(batch, i);

          if (r < cdf) {
            setOutput(float(i));
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutput(float(${t-1}));
      }
    `}}const Ay=Nt({opSnippet:`
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
`,checkOutOfBounds:!0}),N4={kernelName:Cr,backendName:"webgl",kernelFunc:Ay};const Dy="return a - b;",Fy=Nt({opSnippet:Dy,packedOpSnippet:Dy,supportsComplex:!0,cpuKernelImpl:t3}),T4={kernelName:Jr,backendName:"webgl",kernelFunc:Fy};function _y(n){const{inputs:e,backend:t,attrs:s}=n,{logits:o}=e,{dim:r}=s,i=ve([r],o.shape),a=Ry({inputs:{x:o},backend:t,attrs:{reductionIndices:i,keepDims:!1}}),l=at(a.shape,i),c=se({inputs:{x:a},backend:t,attrs:{shape:l}}),u=Fy({inputs:{a:o,b:c},backend:t}),h=vy({inputs:{x:u},backend:t}),d=Ic({inputs:{x:h},backend:t,attrs:{axis:i,keepDims:!1}}),p=se({inputs:{x:d},backend:t,attrs:{shape:l}}),f=Ay({inputs:{a:h,b:p},backend:t});return t.disposeIntermediateTensorInfo(a),t.disposeIntermediateTensorInfo(c),t.disposeIntermediateTensorInfo(u),t.disposeIntermediateTensorInfo(h),t.disposeIntermediateTensorInfo(d),t.disposeIntermediateTensorInfo(p),f}const E4={kernelName:Za,backendName:"webgl",kernelFunc:_y};function R4(n){const{inputs:e,backend:t,attrs:s}=n,{logits:o}=e,{numSamples:r,seed:i,normalized:a}=s,l=a?o:_y({inputs:{logits:o},backend:t,attrs:{dim:o.shape.length-1}}),c=l.shape[0],u=l.shape[1],h=new S4(c,u,r),d=[[i]],p=t.runWebGLProgram(h,[l],"int32",d);return a||t.disposeIntermediateTensorInfo(l),p}const A4={kernelName:_p,backendName:"webgl",kernelFunc:R4};const D4=gn+`
  return -x;
`,F4=`
  vec4 result = -x;
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`;function _4(n){const{inputs:e,backend:t}=n,{x:s}=e;if(t.shouldExecuteOnCPU([s])){const r=t.texData.get(s.dataId),[i,a]=LP(r.values,s.shape,s.dtype);return t.makeTensorInfo(a,s.dtype,i)}let o;return U().getBool("WEBGL_PACK_UNARY_OPERATIONS")?o=new As(s.shape,F4):o=new Kn(s.shape,D4),t.runWebGLProgram(o,[s],s.dtype)}const O4={kernelName:_a,backendName:"webgl",kernelFunc:_4};const L4=Sh;function M4(n){Jt("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:e,backend:t,attrs:s}=n,{boxes:o,scores:r}=e,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l}=s,c=t.readSync(o.dataId),u=t.readSync(r.dataId),{selectedIndices:h}=L4(c,u,i,a,l);return t.makeTensorInfo([h.length],"int32",new Int32Array(h))}const P4={kernelName:wu,backendName:"webgl",kernelFunc:M4};const B4=Nh;function z4(n){Jt("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:e,backend:t,attrs:s}=n,{boxes:o,scores:r}=e,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l,padToMaxOutputSize:c}=s,u=t.readSync(o.dataId),h=t.readSync(r.dataId),{selectedIndices:d,validOutputs:p}=B4(u,h,i,a,l,c);return[t.makeTensorInfo([d.length],"int32",new Int32Array(d)),t.makeTensorInfo([],"int32",new Int32Array([p]))]}const V4={kernelName:Cu,backendName:"webgl",kernelFunc:z4};const W4=Th;function U4(n){Jt("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:e,backend:t,attrs:s}=n,{boxes:o,scores:r}=e,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l,softNmsSigma:c}=s,u=t.readSync(o.dataId),h=t.readSync(r.dataId),d=i,p=a,f=l,m=c,{selectedIndices:g,selectedScores:x}=W4(u,h,d,p,f,m);return[t.makeTensorInfo([g.length],"int32",new Int32Array(g)),t.makeTensorInfo([x.length],"float32",new Float32Array(x))]}const G4={kernelName:Iu,backendName:"webgl",kernelFunc:U4};class H4{constructor(e,t,s,o){this.variableNames=["indices"],this.outputShape=[e,t],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(${o}), float(${s}),
                      float(index == coords.y)));
      }
    `}}const q4={kernelName:Ma,backendName:"webgl",kernelFunc:n=>{const{inputs:e,backend:t,attrs:s}=n,{indices:o}=e,{dtype:r,depth:i,onValue:a,offValue:l}=s,c=j(o.shape),u=new H4(c,i,a,l),h=se({inputs:{x:o},backend:t,attrs:{shape:[c]}}),d=t.runWebGLProgram(u,[h],r);t.disposeIntermediateTensorInfo(h);const p=[...o.shape,i],f=se({inputs:{x:d},backend:t,attrs:{shape:p}});return t.disposeIntermediateTensorInfo(d),f}};function Tc(n){const{inputs:e,backend:t}=n,{x:s}=e;if(s.dtype==="complex64"){const o=ji({inputs:{input:s},backend:t}),r=Tc({inputs:{x:o},backend:t}),i=Sc({inputs:{input:s},backend:t}),a=Tc({inputs:{x:i},backend:t}),l=Ds({inputs:{real:r,imag:a},backend:t});return t.disposeIntermediateTensorInfo(o),t.disposeIntermediateTensorInfo(r),t.disposeIntermediateTensorInfo(i),t.disposeIntermediateTensorInfo(a),l}else return Yi({attrs:{shape:s.shape,dtype:s.dtype,value:s.dtype==="string"?"":0},backend:t})}const j4={kernelName:el,backendName:"webgl",kernelFunc:Tc};function Oy(n){const{inputs:e,backend:t}=n,{x:s}=e;if(s.dtype==="string")throw new Error("onesLike is not supported under string dtype");if(s.dtype==="complex64"){const o=ji({inputs:{input:s},backend:t}),r=Oy({inputs:{x:o},backend:t}),i=Sc({inputs:{input:s},backend:t}),a=Tc({inputs:{x:i},backend:t}),l=Ds({inputs:{real:r,imag:a},backend:t});return t.disposeIntermediateTensorInfo(o),t.disposeIntermediateTensorInfo(r),t.disposeIntermediateTensorInfo(i),t.disposeIntermediateTensorInfo(a),l}else return Yi({attrs:{shape:s.shape,dtype:s.dtype,value:1},backend:t})}const K4={kernelName:La,backendName:"webgl",kernelFunc:Oy};function X4(n){const{inputs:e,backend:t,attrs:s}=n,{axis:o}=s;if(e.length===1)return hp({inputs:{input:e[0]},backend:t,attrs:{dim:o}});const r=e[0].shape,i=e[0].dtype;e.forEach(u=>{Lc(r,u.shape,"All tensors passed to stack must have matching shapes"),S(i===u.dtype,()=>"All tensors passed to stack must have matching dtypes")});const a=[],l=e.map(u=>{const h=hp({inputs:{input:u},backend:t,attrs:{dim:o}});return a.push(h),h}),c=py({inputs:l,backend:t,attrs:{axis:o}});return a.forEach(u=>t.disposeIntermediateTensorInfo(u)),c}const Y4={kernelName:Pa,backendName:"webgl",kernelFunc:X4};class Z4{constructor(e,t,s){this.variableNames=["x"],this.customUniforms=[{name:"value",type:"float"}],this.outputShape=t.map((c,u)=>c[0]+e[u]+c[1]);const o=e.length,r=We(o),i=t.map(c=>c[0]).join(","),a=t.map((c,u)=>c[0]+e[u]).join(","),l=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,o);if(o===1){this.userCode=`
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
    `}}class Q4{constructor(e,t,s){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"value",type:"float"}],this.outputShape=t.map((m,g)=>m[0]+e[g]+m[1]);const o=e.length,r=We(o),i=t.map(m=>m[0]).join(","),a=t.map((m,g)=>m[0]+e[g]).join(","),l=Pt("rc",o),c=Pt("source",o),u=`${l[o-1]} < ${this.outputShape[o-1]}`,h=o===1?"source":`vec2(${c.slice(-2).join()})`,d=[`${r} rc = outputLoc;`,`${l[o-1]} += 1;
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
    `}}const Ly=n=>{const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{paddings:r,constantValue:i}=s;if(j(o.shape)===0){const c=r.map((u,h)=>u[0]+o.shape[h]+u[1]);return Yi({backend:t,attrs:{shape:c,value:i,dtype:o.dtype}})}const a=U().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Q4(o.shape,r,i):new Z4(o.shape,r,i),l=[[i]];return t.runWebGLProgram(a,[o],o.dtype,l)},J4={kernelName:Ba,backendName:"webgl",kernelFunc:Ly};const eU=`
  if(a < 0.0 && floor(b) < b){
    return NAN;
  }
  if (b == 0.0) {
    return 1.0;
  }
  return (round(mod(b, 2.0)) != 1) ?
      pow(abs(a), b) : sign(a) * pow(abs(a), b);
`,tU=`
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
  `+yo+`
  return result;
`,nU=Nt({opSnippet:eU,packedOpSnippet:tU}),sU={kernelName:Br,backendName:"webgl",kernelFunc:nU};function oU(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{axis:r,keepDims:i}=s,a=o.shape.length,l=[],c=ve(r,o.shape);let u=c;const h=Ze(u,a);let d=o;h!=null&&(d=Bt({inputs:{x:o},backend:t,attrs:{perm:h}}),u=nt(u.length,a),l.push(d)),kt("prod",u,a);let p;if(t.shouldExecuteOnCPU([d])){const f=t.texData.get(d.dataId).values,{outVals:m,outShape:g,outDtype:x}=PP(d.shape,d.dtype,f,u);p=t.makeTensorInfo(g,x,m)}else{const[f,m]=yt(d.shape,u),g=j(m),x=se({inputs:{x:d},backend:t,attrs:{shape:[-1,g]}}),b=Wu(o.dtype),w=wo(x,b,"prod",t);p=se({inputs:{x:w},backend:t,attrs:{shape:f}}),l.push(x),l.push(w)}if(i){l.push(p);const f=at(p.shape,c);p=se({inputs:{x:p},backend:t,attrs:{shape:f}})}return l.forEach(f=>t.disposeIntermediateTensorInfo(f)),p}const rU={kernelName:Va,backendName:"webgl",kernelFunc:oU};function iU(n){const{inputs:e,backend:t,attrs:s}=n,{paramsNestedSplits:o,paramsDenseValues:r,indices:i}=e,{outputRaggedRank:a}=s,l=o.map(x=>t.readSync(x.dataId)),c=o.map(x=>x.shape),u=t.readSync(r.dataId),h=t.readSync(i.dataId),[d,p,f]=BP(l,c,u,r.shape,r.dtype,h,i.shape,a),m=d.map(x=>t.makeTensorInfo([x.length],"int32",x)),g=t.makeTensorInfo(f,r.dtype,p);return m.concat([g])}const aU={kernelName:Op,backendName:"webgl",kernelFunc:iU};function lU(n){const{inputs:e,backend:t}=n,{starts:s,limits:o,deltas:r}=e,i=t.readSync(s.dataId),a=t.readSync(o.dataId),l=t.readSync(r.dataId),[c,u]=zP(i,s.shape,s.dtype,a,o.shape,l,r.shape),h=t.makeTensorInfo([c.length],"int32",c),d=t.makeTensorInfo([u.length],s.dtype,u);return[h,d]}const cU={kernelName:Lp,backendName:"webgl",kernelFunc:lU};function uU(n){const{inputs:e,backend:t,attrs:s}=n,{shape:o,values:r,defaultValue:i,rowPartitionTensors:a}=e,{rowPartitionTypes:l}=s,c=t.readSync(o.dataId),u=t.readSync(r.dataId),h=t.readSync(i.dataId),d=a.map(g=>t.readSync(g.dataId)),p=a.map(g=>g.shape),[f,m]=VP(c,o.shape,u,r.shape,r.dtype,h,i.shape,d,p,l);return t.makeTensorInfo(f,r.dtype,m)}const hU={kernelName:Mp,backendName:"webgl",kernelFunc:uU};const My=n=>{const{backend:e,attrs:t}=n,{start:s,stop:o,step:r,dtype:i}=t,a=WP(s,o,r,i);return e.makeTensorInfo([a.length],i,a)},dU={kernelName:$u,backendName:"webgl",kernelFunc:My};const pU=Ae({opSnippet:"return 1.0 / x;"}),fU={kernelName:zr,backendName:"webgl",kernelFunc:pU};const mU=gn+`
  return (x < 0.0) ? 0.0 : x;
`,gU=Ae({opSnippet:mU,packedOpSnippet:`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`}),xU={kernelName:Vr,backendName:"webgl",kernelFunc:gU};const bU=gn+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,yU=Ae({opSnippet:bU,packedOpSnippet:`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`}),wU={kernelName:Wr,backendName:"webgl",kernelFunc:yU};class CU{constructor(e,t,s,o,r){this.variableNames=["A"],this.outputShape=[];const[i,a,l,c]=e;this.outputShape=[i,t,s,c];const u=[o&&t>1?a-1:a,o&&s>1?l-1:l],h=[o&&t>1?t-1:t,o&&s>1?s-1:s];let d;r?d="(vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC - vec2(0.5)":d="vec2(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
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
    `}}class IU{constructor(e,t,s,o,r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];const[i,a,l,c]=e;this.outputShape=[i,t,s,c];const u=[o&&t>1?a-1:a,o&&s>1?l-1:l],h=[o&&t>1?t-1:t,o&&s>1?s-1:s];let d;r?d="(vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC - vec3(0.5)":d="vec3(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
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
    `}}function $U(n){const{inputs:e,backend:t,attrs:s}=n,{images:o}=e,{alignCorners:r,halfPixelCenters:i,size:a}=s,[l,c]=a,u=U().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new IU(o.shape,l,c,r,i):new CU(o.shape,l,c,r,i);return t.runWebGLProgram(u,[o],"float32")}const vU={kernelName:Ga,backendName:"webgl",kernelFunc:$U};class kU{constructor(e,t,s){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t;const[,o,r]=t,[,i,a]=e,l=[s&&i>1?o-1:o,s&&a>1?r-1:r],c=[s&&i>1?i-1:i,s&&a>1?a-1:a],u=l[0]/c[0],h=l[1]/c[1],d=1/u,p=1/h,f=Math.ceil(d)*2+2,m=Math.ceil(p)*2+2;this.userCode=`
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
    `}}function SU(n){const{inputs:e,backend:t,attrs:s}=n,{images:o,dy:r}=e,{alignCorners:i}=s,a=new kU(r.shape,o.shape,i);return t.runWebGLProgram(a,[r],r.dtype)}const NU={kernelName:Su,backendName:"webgl",kernelFunc:SU};class TU{constructor(e,t,s,o,r){this.variableNames=["A"],this.outputShape=[];const[i,a,l,c]=e;this.outputShape=[i,t,s,c];const u=[o&&t>1?a-1:a,o&&s>1?l-1:l],h=[o&&t>1?t-1:t,o&&s>1?s-1:s],d=o?"0.5":"0.0";let p;r?p="max((vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC, vec2(0.0))":p="vec2(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
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
    `}}class EU{constructor(e,t,s,o,r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];const[i,a,l,c]=e;this.outputShape=[i,t,s,c];const u=[o&&t>1?a-1:a,o&&s>1?l-1:l],h=[o&&t>1?t-1:t,o&&s>1?s-1:s],d=o?"0.5":"0.0";let p;r?p="max((vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC, vec3(0.0))":p="vec3(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
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
    `}}function RU(n){const{inputs:e,backend:t,attrs:s}=n,{images:o}=e,{alignCorners:r,halfPixelCenters:i,size:a}=s,[l,c]=a,u=U().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new EU(o.shape,l,c,r,i):new TU(o.shape,l,c,r,i);return t.runWebGLProgram(u,[o],o.dtype)}const AU={kernelName:Ua,backendName:"webgl",kernelFunc:RU};class DU{constructor(e,t,s){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t;const[,o,r]=t,[,i,a]=e,l=[s&&i>1?o-1:o,s&&a>1?r-1:r],c=[s&&i>1?i-1:i,s&&a>1?a-1:a],u=l[0]/c[0],h=l[1]/c[1],d=1/u,p=1/h,f=Math.ceil(d)*2+2,m=Math.ceil(p)*2+2;this.userCode=`
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
    `}}function FU(n){const{inputs:e,backend:t,attrs:s}=n,{images:o,dy:r}=e,{alignCorners:i}=s,a=new DU(r.shape,o.shape,i);return t.runWebGLProgram(a,[r],r.dtype)}const _U={kernelName:ku,backendName:"webgl",kernelFunc:FU};class OU{constructor(e,t){this.variableNames=["x"];const s=e.length;if(s>4)throw new Error(`WebGL backend: Reverse of rank-${s} tensor is not yet supported`);if(this.outputShape=e,s===1){this.userCode=`
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(${e[0]} - coord - 1));
        }
      `;return}const o=a=>t.indexOf(a)!==-1&&e[a]!==1?`${e[a]} - coords[${a}] - 1`:`coords[${a}]`,r=e.map((a,l)=>o(l)).join(","),i=We(s);this.userCode=`
      void main() {
        ${i} coords = getOutputCoords();
        setOutput(getX(${r}));
      }
    `}}class LU{constructor(e,t){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0;const s=e.length;if(s>4)throw new Error(`WebGL backend: Reverse of rank-${s} tensor is not yet supported`);this.outputShape=e;const o=Pt("rc",s),r=`${o[s-1]} + 1 < ${this.outputShape[s-1]}`,i=`${o[s-2]} + 1 < ${this.outputShape[s-2]}`,a=We(s);s===1?this.userCode=`
        void main(){
          int rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = getChannel(getX(${e[0]} - rc - 1),
            ${e[0]} - rc - 1);
          if(${r}){
              result.g = getChannel(getX(${e[0]} - (rc  + 1) - 1),
                ${e[0]} - (rc  + 1) - 1);
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
    `;function l(f){return d(f)}function c(f){return f[s-1]="("+f[s-1]+" + 1)",d(f)}function u(f){return f[s-2]="("+f[s-2]+" + 1)",d(f)}function h(f){return f[s-1]="("+f[s-1]+" + 1)",f[s-2]="("+f[s-2]+" + 1)",d(f)}function d(f){const m=e.map((b,w)=>p(w,f)),g=m.join(","),x=m.slice(-2).join(",");return`getChannel(getX(${g}), vec2(${x}))`}function p(f,m){return t.indexOf(f)!==-1&&e[f]!==1?`${e[f]} - ${m[f]} - 1`:`${m[f]}`}}}function MU(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{dims:r}=s,i=o.shape.length,a=ve(r,o.shape);if(i===0)return Qt({inputs:{x:o},backend:t});const l=U().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new LU(o.shape,a):new OU(o.shape,a);return t.runWebGLProgram(l,[o],o.dtype)}const PU={kernelName:Ha,backendName:"webgl",kernelFunc:MU};class BU{constructor(e,t){this.variableNames=["Image"],this.outputShape=[],this.customUniforms=[{name:"params",type:"vec4"}];const s=e[1],o=e[2];this.outputShape=e;let r="";typeof t=="number"?r=`float outputValue = ${t.toFixed(2)};`:r=`
        vec3 fill = vec3(${t.join(",")});
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
    `}}const zU={kernelName:Fu,backendName:"webgl",kernelFunc:({inputs:n,attrs:e,backend:t})=>{const{image:s}=n,{radians:o,fillValue:r,center:i}=e,a=t,l=new BU(s.shape,r),[c,u]=Mh(i,s.shape[1],s.shape[2]),h=[[c,u,Math.sin(o),Math.cos(o)]];return a.runWebGLProgram(l,[s],s.dtype,h)}};const VU=Ae({opSnippet:`
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
`}),WU={kernelName:Ur,backendName:"webgl",kernelFunc:VU};const UU=Ae({opSnippet:"return inversesqrt(x);",cpuKernelImpl:UP}),GU={kernelName:Gr,backendName:"webgl",kernelFunc:UU};class pp{constructor(e,t,s,o,r,i,a=!0,l=!1){this.variableNames=["updates","indices","defaultValue"],this.outputShape=i;const c=We(r.length),u=We(i.length);let h="";s===1?h="i":s===2&&(h="i, j");const d=`getIndices(${h})`;let p="";o===1?p="i":o===2&&(p="i, coords[1]");const f=`getUpdates(${p})`;let m="";l&&(m="coords[0], coords[1]");const g=`getDefaultValue(${m})`,x=t>1?"strides[j]":"strides";this.userCode=`
        ${c} strides = ${c}(${r});

        void main() {
          ${u} coords = getOutputCoords();
          float sum = 0.0;
          bool found = false;
          for (int i = 0; i < ${e}; i++) {
            int flattenedIndex = 0;
            for (int j = 0; j < ${t}; j++) {
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
      `}}class HU{constructor(e,t,s,o,r,i,a=!0,l=!1){this.variableNames=["updates","indices","defaultValue"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=i;const c=We(r.length),u=We(i.length);let h="";s===1?h="i":s===2&&(h="i, j");const d=`getIndices(${h})`;let p="";o===1?p="i":o===2&&(p="i, coords[1]");const f=`getUpdates(${p})`;let m="";l&&(m="coords[0], coords[1]");const g=`getDefaultValue(${m})`,x=t>1?"strides[j]":"strides",b=t>1?"strides[j + 1]":"strides";this.userCode=`
        ${c} strides = ${c}(${r});

        void main() {
          ${u} coords = getOutputCoords();
          vec4 sum = vec4(0.);
          vec4 found = vec4(0.);
          for (int i = 0; i < ${e}; i+=2) {
            ivec2 flattenedIndex = ivec2(0);
            for (int j = 0; j < ${t}; j+=2) {
              ivec4 index = round(${d});
              flattenedIndex += index.xz * ${x};
              if (j + 1 < ${t}) {
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
      `}}function qU(n){const{inputs:e,backend:t,attrs:s}=n,{indices:o,updates:r}=e,{shape:i}=s,{sliceRank:a,numUpdates:l,sliceSize:c,strides:u,outputSize:h}=no(r,o,i),d=[h/c,c];if(h===0)return t.makeTensorInfo(i,o.dtype);const p=se({inputs:{x:o},backend:t,attrs:{shape:[l,a]}}),f=se({inputs:{x:r},backend:t,attrs:{shape:[l,c]}}),m=t.makeTensorInfo([],"float32",new Float32Array([0]));let g;U().getBool("WEBGL_PACK")?g=new HU(l,a,p.shape.length,f.shape.length,u,d):g=new pp(l,a,p.shape.length,f.shape.length,u,d);const x=t.runWebGLProgram(g,[f,p,m],f.dtype),b=se({inputs:{x},backend:t,attrs:{shape:i}});return t.disposeIntermediateTensorInfo(p),t.disposeIntermediateTensorInfo(f),t.disposeIntermediateTensorInfo(x),t.disposeIntermediateTensorInfo(m),b}const jU={kernelName:Pp,backendName:"webgl",kernelFunc:qU};class KU{constructor(e,t,s,o){this.variableNames=["sortedSequence","values"],this.customUniforms=[{name:"numInputs",type:"int"}],this.outputShape=[e,s];const r="while (left < right) {",i=`for (int i = 0; i < ${Math.ceil(Math.log2(t+1))}; ++i) { if (left >= right) break;`,a=U().getNumber("WEBGL_VERSION")===2?r:i,l=o==="left"?"<":"<=";this.userCode=`
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
     `}}function XU(n){const{inputs:e,backend:t,attrs:s}=n,{sortedSequence:o,values:r}=e,{side:i}=s,a=new KU(o.shape[0],o.shape[1],r.shape[1],i),l=[[o.shape[1]]];return t.runWebGLProgram(a,[o,r],"int32",l)}const YU={kernelName:zp,backendName:"webgl",kernelFunc:XU};class ZU{constructor(e,t,s){this.variableNames=["c","a","b"],this.outputShape=t;let o,r;if(s>4)throw Error(`Where for rank ${s} is not yet supported`);if(s===1)r="resRC",o="resRC";else{const a=["resRC.x","resRC.y","resRC.z","resRC.w"],l=[],c=[];for(let u=0;u<t.length;u++)c.push(`${a[u]}`),u<e&&l.push(`${a[u]}`);o=l.join(),r=c.join()}const i=We(s);this.userCode=`
      void main() {
        ${i} resRC = getOutputCoords();
        float cVal = getC(${o});
        if (cVal >= 1.0) {
          setOutput(getA(${r}));
        } else {
          setOutput(getB(${r}));
        }
      }
    `}}function QU(n){const{inputs:e,backend:t}=n,{condition:s,t:o,e:r}=e,i=new ZU(s.shape.length,o.shape,o.shape.length);return t.runWebGLProgram(i,[s,o,r],Kt(o.dtype,r.dtype))}const JU={kernelName:qa,backendName:"webgl",kernelFunc:QU};const eG=`
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = ${Dl};
  float scale = ${Fl};
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`,tG=Ae({opSnippet:eG}),nG={kernelName:Hr,backendName:"webgl",kernelFunc:tG};const sG=rr+`
  return 1.0 / (1.0 + exp(-1.0 * x));
`,oG=Ae({opSnippet:sG,packedOpSnippet:`
  vec4 result = 1.0 / (1.0 + exp(-1.0 * x));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,cpuKernelImpl:HP}),rG={kernelName:Xr,backendName:"webgl",kernelFunc:oG};const iG=Ae({opSnippet:`
  if (isnan(x)) { return 0.0; }
  return sign(x);
`}),aG={kernelName:Kr,backendName:"webgl",kernelFunc:iG};const lG=rr+`
  return sin(x);
`,cG=`
  vec4 result = sin(x);
  bvec4 isNaN = isnan(x);
  ${yo}
  return result;
`,uG=Ae({opSnippet:lG,packedOpSnippet:cG}),hG={kernelName:qr,backendName:"webgl",kernelFunc:uG};const dG=Ae({opSnippet:`
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`}),pG={kernelName:jr,backendName:"webgl",kernelFunc:dG};const fG=Ae({opSnippet:`
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
`}),mG={kernelName:Yr,backendName:"webgl",kernelFunc:fG};const gG={kernelName:Xa,backendName:"webgl",kernelFunc:n=>{const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{blockShape:r,paddings:i}=s;S(o.shape.length<=4,()=>"spaceToBatchND for rank > 4 with a WebGL backend not implemented yet");const a=r.reduce((x,b)=>x*b),l=[[0,0]];l.push(...i);for(let x=1+r.length;x<o.shape.length;++x)l.push([0,0]);const c=[],u=Ly({inputs:{x:o},backend:t,attrs:{paddings:l,constantValue:0}}),h=yi(u.shape,r,a,!1),d=wi(h.length,r.length,!1),p=Ci(u.shape,r,a,!1),f=se({inputs:{x:u},backend:t,attrs:{shape:h}}),m=Bt({inputs:{x:f},backend:t,attrs:{perm:d}}),g=se({inputs:{x:m},backend:t,attrs:{shape:p}});return c.push(u),c.push(f),c.push(m),c.forEach(x=>t.disposeIntermediateTensorInfo(x)),g}};function xG(n){const{inputs:e,backend:t}=n,{indices:s,values:o,denseShape:r,defaultValue:i}=e;if(r.shape.length!==1)throw new Error(`Dense shape must be a vector, saw:
         ${r.shape}`);if(s.shape.length!==2)throw new Error(`Indices must be a matrix, saw:
         ${s.shape}`);if(o.shape.length!==1)throw new Error(`Values must be a vector, saw:
         ${o.shape}`);if(i.shape.length!==0)throw new Error(`Default value must be a scalar, saw:
        ${i.shape}`);const a=t.readSync(s.dataId),l=t.readSync(o.dataId),c=t.readSync(r.dataId),u=t.readSync(i.dataId)[0],[h,d,p,f,m]=jP(a,s.shape,s.dtype,l,o.dtype,c,u);return[t.makeTensorInfo(d,s.dtype,h),t.makeTensorInfo([d[0]],o.dtype,p),t.makeTensorInfo([f.length],"bool",new Uint8Array(f.map(g=>Number(g)))),t.makeTensorInfo([m.length],s.dtype,new Int32Array(m))]}const bG={kernelName:Vp,backendName:"webgl",kernelFunc:xG};function yG(n){const{inputs:e,backend:t}=n,{inputIndices:s,inputShape:o,newShape:r}=e;if(s.shape.length!==2)throw new Error(`Input indices should be a matrix but received shape ${s.shape}`);if(o.shape.length!==1)throw new Error(`Input shape should be a vector but received shape ${o.shape}`);if(r.shape.length!==1)throw new Error(`Target shape should be a vector but received shape ${r.shape}`);const i=Array.from(t.readSync(o.dataId)),a=t.readSync(s.dataId),l=Array.from(t.readSync(r.dataId)),[c,u,h]=KP(a,s.shape,s.dtype,i,l);return[t.makeTensorInfo(u,s.dtype,c),t.makeTensorInfo([h.length],r.dtype,new Int32Array(h))]}const wG={kernelName:Wp,backendName:"webgl",kernelFunc:yG};function CG(n){const{inputs:e,backend:t}=n,{data:s,indices:o,segmentIds:r}=e;if(s.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(o.shape.length!==1)throw new Error(`Indices should be a vector but received shape
              ${o.shape}`);if(r.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
              ${r.shape}`);const i=t.readSync(s.dataId),a=t.readSync(o.dataId),l=t.readSync(r.dataId),[c,u]=W1(i,s.shape,s.dtype,a,l,!0);return t.makeTensorInfo(u,s.dtype,c)}const IG={kernelName:Up,backendName:"webgl",kernelFunc:CG};function $G(n){const{inputs:e,backend:t}=n,{data:s,indices:o,segmentIds:r}=e;if(s.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(o.shape.length!==1)throw new Error(`Indices should be a vector but received shape
             ${o.shape}`);if(r.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
             ${r.shape}`);const i=t.readSync(s.dataId),a=t.readSync(o.dataId),l=t.readSync(r.dataId),[c,u]=W1(i,s.shape,s.dtype,a,l);return t.makeTensorInfo(u,s.dtype,c)}const vG={kernelName:Gp,backendName:"webgl",kernelFunc:$G};function kG(n){const{inputs:e,backend:t,attrs:s}=n,{sparseIndices:o,sparseValues:r,defaultValue:i}=e,{outputShape:a}=s,{sliceRank:l,numUpdates:c,sliceSize:u,strides:h,outputSize:d}=no(r,o,a),p=!1;if(r.dtype==="string"){const x=t.bufferSync(o),b=t.bufferSync(r),w=ps(t.readSync(i.dataId)[0]),y=GP(x,b,a,d,u,c,l,h,w,p);return t.makeTensorInfo(a,y.dtype,y.values)}const f=new pp(c,l,o.shape.length,r.shape.length,h,[d,1],p),m=t.runWebGLProgram(f,[r,o,i],r.dtype),g=se({inputs:{x:m},backend:t,attrs:{shape:a}});return t.disposeIntermediateTensorInfo(m),g}const SG={kernelName:Hp,backendName:"webgl",kernelFunc:kG};function NG(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{numOrSizeSplits:r,axis:i}=s,a=ve(i,o.shape)[0],l=Jh(o,r,a),c=o.shape.length,u=new Array(c).fill(0),h=o.shape.slice();return l.map(d=>{const p=[...h];p[a]=d;const f=ir({inputs:{x:o},backend:t,attrs:{begin:u,size:p}});return u[a]+=d,f})}const TG={kernelName:Ya,backendName:"webgl",kernelFunc:NG};const Py="return sqrt(x);",EG=Ae({opSnippet:Py,packedOpSnippet:Py,cpuKernelImpl:XP}),RG={kernelName:Zr,backendName:"webgl",kernelFunc:EG};const AG=Ae({opSnippet:"return x * x;"}),DG={kernelName:Nu,backendName:"webgl",kernelFunc:AG};const By="return (a - b) * (a - b);",FG=Nt({opSnippet:By,packedOpSnippet:By}),_G={kernelName:Qr,backendName:"webgl",kernelFunc:FG};function OG(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e;if(o.dtype!=="string")throw new Error("Input must be of datatype string");const r=t.readSync(o.dataId),i=os(r),a=YP(i,"string",s);return t.makeTensorInfo(o.shape,"string",a)}const LG={kernelName:Tu,backendName:"webgl",kernelFunc:OG};function MG({inputs:n,attrs:e,backend:t}){const{x:s}=n,o=gn+`
    return x > 0.0 ? 1.0 : float(${e.alpha});
  `,r=new Kn(s.shape,o);return t.runWebGLProgram(r,[s],s.dtype)}const PG={kernelName:si,backendName:"webgl",kernelFunc:MG};class BG{constructor(e,t,s){this.variableNames=["x"],this.outputShape=s;const o=s.length,r=We(s.length),i=We(s.length);let a="";if(o===1)a="coords * strides + begin";else{let l=0;a=s.map((c,u)=>(l++,s.length===1?`coords * strides[${u}] + begin[${u}]`:`coords[${l-1}] * strides[${u}] + begin[${u}]`)).join(",")}this.userCode=`
      ${r} begin = ${r}(${e});
      ${r} strides = ${r}(${t});

      void main() {
        ${i} coords = getOutputCoords();
        setOutput(getX(${a}));
      }
    `}}function zG(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{begin:r,end:i,strides:a,beginMask:l,endMask:c,ellipsisMask:u,newAxisMask:h,shrinkAxisMask:d}=s,{finalShapeSparse:p,finalShape:f,isIdentity:m,sliceDim0:g,isSimpleSlice:x,begin:b,end:w,strides:y}=zm(o.shape,r,i,a,l,c,u,h,d);let C;if(m)C=se({inputs:{x:o},backend:t,attrs:{shape:f}});else if(g||x){S(o.shape.length>=1,()=>`Input must have rank at least 1, got: ${o.shape.length}`);const v=Mm(b,w,y),k=ir({inputs:{x:o},backend:t,attrs:{begin:b,size:v}});C=se({inputs:{x:k},backend:t,attrs:{shape:f}}),t.disposeIntermediateTensorInfo(k)}else if(t.shouldExecuteOnCPU([o])){const k=t.readSync(o.dataId),N=ke(o.shape,o.dtype,k),T=ZP(p,N,y,b);C=t.makeTensorInfo(f,o.dtype,T.values)}else{const k=new BG(b,y,p);C=t.runWebGLProgram(k,[o],o.dtype)}const $=se({inputs:{x:C},backend:t,attrs:{shape:f}});return t.disposeIntermediateTensorInfo(C),$}const VG={kernelName:Eu,backendName:"webgl",kernelFunc:zG};function WG(n){const{inputs:e,backend:t,attrs:s}=n,{separator:o,nGramWidths:r,leftPad:i,rightPad:a,padWidth:l,preserveShortSequences:c}=s,{data:u,dataSplits:h}=e,d=t.readSync(u.dataId),p=t.readSync(h.dataId),[f,m]=QP(d,p,o,r,i,a,l,c);return[t.makeTensorInfo([f.length],"string",f),t.makeTensorInfo(h.shape,"int32",m)]}const UG={kernelName:qp,backendName:"webgl",kernelFunc:WG};function GG(n){const{inputs:e,backend:t,attrs:s}=n,{skipEmpty:o}=s,{input:r,delimiter:i}=e;if(r.dtype!=="string")throw new Error("Input must be of datatype string");if(r.shape.length!==1)throw new Error(`Input must be a vector, got shape: ${r.shape}`);if(i.shape.length!==0)throw new Error(`Delimiter must be a scalar, got shape: ${i.shape}`);const a=t.readSync(r.dataId),l=t.readSync(i.dataId)[0],[c,u,h]=JP(a,l,o),d=u.length;return[t.makeTensorInfo([d,2],"int32",c),t.makeTensorInfo([d],"string",u),t.makeTensorInfo([2],"int32",new Int32Array(h))]}const HG={kernelName:jp,backendName:"webgl",kernelFunc:GG};function qG(n){const{inputs:e,backend:t,attrs:s}=n,{numBuckets:o}=s,{input:r}=e;if(r.dtype!=="string")throw new Error("Input must be of datatype string");if(o<=0)throw new Error("Number of buckets must be at least 1");const i=t.readSync(r.dataId),a=e3(i,o);return t.makeTensorInfo(r.shape,"int32",a)}const jG={kernelName:Kp,backendName:"webgl",kernelFunc:qG};const KG=Ae({opSnippet:"return tan(x);"}),XG={kernelName:ei,backendName:"webgl",kernelFunc:KG};const YG=Ae({opSnippet:`
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`}),ZG={kernelName:ti,backendName:"webgl",kernelFunc:YG};function QG(n){const{inputs:e,backend:t,attrs:s}=n,{tensor:o,indices:r,updates:i}=e,{sliceRank:a,numUpdates:l,sliceSize:c,strides:u,outputSize:h}=no(i,r,o.shape),d=[h/c,c];if(h===0)return t.makeTensorInfo(o.shape,r.dtype);const p=se({inputs:{x:r},backend:t,attrs:{shape:[l,a]}}),f=se({inputs:{x:i},backend:t,attrs:{shape:[l,c]}}),m=se({inputs:{x:o},backend:t,attrs:{shape:d}}),g=new pp(l,a,p.shape.length,f.shape.length,u,d,!1,!0),x=t.runWebGLProgram(g,[f,p,m],m.dtype),b=se({inputs:{x},backend:t,attrs:{shape:o.shape}});return t.disposeIntermediateTensorInfo(p),t.disposeIntermediateTensorInfo(f),t.disposeIntermediateTensorInfo(m),t.disposeIntermediateTensorInfo(x),b}const JG={kernelName:Bp,backendName:"webgl",kernelFunc:QG};class eH{constructor(e,t){this.variableNames=["A"];const s=new Array(e.length);for(let i=0;i<s.length;i++)s[i]=e[i]*t[i];this.outputShape=s,this.rank=s.length;const o=We(this.rank),r=tH(e);this.userCode=`
      void main() {
        ${o} resRC = getOutputCoords();
        setOutput(getA(${r}));
      }
    `}}function tH(n){const e=n.length;if(e>5)throw Error(`Tile for rank ${e} is not yet supported`);if(e===1)return`imod(resRC, ${n[0]})`;const t=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u"],s=[];for(let o=0;o<n.length;o++)s.push(`imod(${t[o]}, ${n[o]})`);return s.join()}function zy(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{reps:r}=s;if(o.dtype==="string"||o.shape.length>5){const l=t.readSync(o.dataId),c=o.dtype==="string"?l.map(d=>ps(d)):l,u=ke(o.shape,o.dtype,c),h=n3(u,r);return t.makeTensorInfo(h.shape,h.dtype,h.values)}const i=new eH(o.shape,r);return t.runWebGLProgram(i,[o],o.dtype)}const nH={kernelName:ni,backendName:"webgl",kernelFunc:zy};class sH{constructor(e){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"negativeInf",type:"float"},{name:"dir",type:"int"},{name:"inc",type:"int"}],this.outputShape=e,this.userCode=`
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
     `}}class oH{constructor(e){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"k",type:"int"}],this.outputShape=e,this.userCode=`
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
     `}}function Co(n,e){e!==null&&n.disposeIntermediateTensorInfo(e)}function Vy(n){let e=1;for(;e<n;)e*=2;return e}function rH(n){const{inputs:e,backend:t,attrs:s}=n,{x:o}=e,{k:r,sorted:i}=s,a=U().getNumber("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD"),l=U().getNumber("TOPK_K_CPU_HANDOFF_THRESHOLD"),c=o.shape,u=c[c.length-1];if(t.shouldExecuteOnCPU([o])||u<a||r>l){const T=t.readSync(o.dataId),[I,E]=s3(T,c,o.dtype,r,i);return[t.makeTensorInfo(I.shape,I.dtype,I.values),t.makeTensorInfo(E.shape,E.dtype,E.values)]}if(r===0)return c[c.length-1]=0,[t.makeTensorInfo(c,o.dtype,[]),t.makeTensorInfo(c,"int32",[])];if(u===1)return[o,Yi({attrs:{shape:c,dtype:"int32",value:0},backend:t})];const h=t.texData.get(o.dataId),d=h!==null&&h.isPacked,p=d?t.unpackTensor(o):o,m=j(c)/u,g=se({inputs:{x:p},attrs:{shape:[m,u]},backend:t});d&&Co(t,p);const x=Vy(r),b=Vy(u);let w=null;const y=()=>w===null?[g,g]:[g,w],C=(T,I,E)=>{const R=y(),D=new sH(E),_=[[u],[w===null?1:0],[Number.NEGATIVE_INFINITY],[T],[I]],P=w;w=t.runWebGLProgram(D,R,"int32",_),Co(t,P)};for(let T=1;T<x;T*=2){const I=T*2;for(let E=T;E>=1;E/=2)C(I,E,[m,b])}for(let T=b;T>x;T/=2){const I=y(),E=new oH([m,T/2]),D=[[u],[w===null?1:0],[x]],F=w;w=t.runWebGLProgram(E,I,"int32",D),Co(t,F);const _=x/2,P=_*2;for(let B=_;B>=1;B/=2)C(P,B,w.shape)}let $=w;w=ir({inputs:{x:w},backend:t,attrs:{begin:0,size:[m,r]}}),Co(t,$);let v=Ey({inputs:{x:g,indices:w},backend:t,attrs:{axis:1,batchDims:1}});Co(t,g);const k=c.slice(0,-1);k.push(r),$=w,w=se({inputs:{x:w},attrs:{shape:k},backend:t}),Co(t,$);const N=v;return v=se({inputs:{x:v},attrs:{shape:k},backend:t}),Co(t,N),[v,w]}const iH={kernelName:Ru,backendName:"webgl",kernelFunc:rH};class aH{constructor(e,t,s,o,r,i){this.variableNames=["Image","Transforms"],this.outputShape=i;const a=s==="nearest"?1:2;let l;switch(o){case"constant":l=1;break;case"reflect":l=2;break;case"wrap":l=3;break;case"nearest":l=4;break;default:l=1;break}this.userCode=`
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
              if (0 <= coordY && coordY < ${e} && 0 <= coordX && coordX < ${t}) {
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
                float mapX = mapCoord(inX, float(${t}));
                float mapY = mapCoord(inY, float(${e}));

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
        `}}function lH(n){const{inputs:e,backend:t,attrs:s}=n,{image:o,transforms:r}=e,{interpolation:i,fillMode:a,fillValue:l,outputShape:c}=s,[u,h,d,p]=o.shape,[f,m]=c!=null?c:[h,d],g=[u,f,m,p],x=new aH(h,d,i,a,l,g);return t.runWebGLProgram(x,[o,r],"float32")}const cH={kernelName:Au,backendName:"webgl",kernelFunc:lH};function uH(n){const{inputs:e,attrs:t,backend:s}=n,{axis:o}=t,{x:r}=e;Ui(r,"unique"),console.warn("WARNING: ","UI might be locked temporarily as data is being downloaded");const i=s.readSync(r.dataId),{outputValues:a,outputShape:l,indices:c}=o3(i,o,r.shape,r.dtype);return[s.makeTensorInfo(l,r.dtype,a),s.makeTensorInfo([c.length],"int32",c)]}const hH={kernelName:Du,backendName:"webgl",kernelFunc:uH};function dH(n){const{inputs:e,backend:t,attrs:s}=n,{value:o}=e;let{axis:r}=s;r<0&&(r+=o.shape.length);const i=o,a=i.shape.length,l=o.shape[r],c=new Array(a-1);let u=0;for(let m=0;m<a;m++)m!==r&&(c[u++]=i.shape[m]);const h=[],d=new Array(a).fill(0),p=i.shape.slice();p[r]=1;const f=new Array(l);for(let m=0;m<f.length;m++){d[r]=m;const g=ir({inputs:{x:i},backend:t,attrs:{begin:d,size:p}}),x=se({inputs:{x:g},backend:t,attrs:{shape:c}});f[m]=x,h.push(g)}return h.forEach(m=>t.disposeIntermediateTensorInfo(m)),f}const pH={kernelName:Qa,backendName:"webgl",kernelFunc:dH};class fH{constructor(e,t){this.variableNames=["x","segmentIds"];const s=e.windowSize,o=e.batchSize,r=e.inSize,i=e.numSegments,a=i*Math.ceil(r/s);this.outputShape=[o,a];const l="0.0",c="sumValue",u=Math.floor(s/4)*4,h=s%4,d=`
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
    `}}function mH(n){const{inputs:e,backend:t,attrs:s}=n,{x:o,segmentIds:r}=e,{numSegments:i}=s,a=o.shape.length,l=[];let c=0;const u=Ze([c],a);let h=o;u!=null&&(h=Bt({inputs:{x:o},backend:t,attrs:{perm:u}}),l.push(h),c=nt(1,a)[0]);const d=YS(h.shape,c,i),p=j([h.shape[c]]),f=se({inputs:{x:h},backend:t,attrs:{shape:[-1,p]}});l.push(f);const m=Wu(o.dtype),g=(y,C,$,v,k)=>{const N=y.shape[0],T=y.shape[1],I=XS(T,k),E={windowSize:I,inSize:T,batchSize:N,numSegments:k},R=new fH(E,C),D=t.compileAndRun(R,[y,$],v);if(l.push(D),D.shape[1]===k)return D;const F=My({backend:t,attrs:{start:0,stop:k,step:1,dtype:"float32"}}),_=zy({inputs:{x:F},backend:t,attrs:{reps:[T/I]}});return l.push(F),l.push(_),g(D,C,_,v,k)},x=g(f,"unsortedSegmentSum",r,m,i),b=se({inputs:{x},backend:t,attrs:{shape:d}});let w=b;if(u!=null){l.push(b);const y=gs(u);w=Bt({inputs:{x:w},backend:t,attrs:{perm:y}})}return l.forEach(y=>t.disposeIntermediateTensorInfo(y)),w}const gH={kernelName:Ja,backendName:"webgl",kernelFunc:mH};const xH=[X3,Z3,eB,sB,rB,lB,uB,dB,gB,bB,CB,vB,NB,AB,_B,LB,PB,WB,GB,qB,XB,tz,sz,az,cz,fz,gz,wz,D3,$z,Tz,Dz,Pz,Vz,Uz,Hz,jz,Zz,Jz,tV,sV,rV,aV,uV,dV,gV,bV,CV,vV,SV,TV,AV,FV,LV,PV,BV,VV,UV,HV,jV,XV,ZV,eW,sW,rW,lW,hW,pW,mW,A3,xW,Sz,yW,CW,$W,_3,kW,NW,EW,DW,OW,MW,BW,VW,GW,qW,KW,QW,e4,n4,i4,l4,u4,d4,f4,b4,C4,k4,A4,M3,O4,P4,V4,G4,uz,q4,K4,Y4,J4,sU,L3,rU,aU,cU,hU,dU,hz,N4,fU,xU,wU,B3,vU,NU,AU,_U,PU,zU,WU,GU,jU,YU,JU,nG,rG,aG,hG,pG,ez,E4,mG,gG,bG,wG,IG,vG,SG,TG,RG,DG,_G,LG,PG,VG,UG,HG,jG,T4,q3,XG,ZG,JG,nH,iH,cH,j3,hH,pH,gH,j4];for(const n of xH)Jp(n);const fp=[{id:1,type:"Segmentation",path:"/models/model5_gw_ae/model.json",modelName:"⚡ Tissue GWM (light)",colormapPath:"./models/model5_gw_ae/colormap3.json",webgpu_safetensor:"./models/model5_gw_ae/model.safetensors",webgpu_runner:"model5",webgpuTTArunner:!0,preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,cropPadding:18,autoThreshold:0,enableQuantileNorm:!1,filterOutWithPreMask:!1,enableSeqConv:!1,textureSize:0,warning:null,inferenceDelay:100,description:"Gray and white matter segmentation model. Operates on full T1 image in a single pass, but uses only 5 filters per layer. Can work on integrated graphics cards but is barely large enough to provide good accuracy. Still more accurate than the subvolume model."},{id:2,type:"Brain_Extraction",path:"/models/mindgrab/model.json",modelName:"🪓🧠 omnimodal Skull Stripping",webgpu_safetensor:"./models/mindgrab/model.safetensors",webgpu_runner:"mindgrab",webgpuTTArunner:!0,webgpuStorageSize:503316480,preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,isPostProcessEnable:!0,enableCrop:!0,cropPadding:20,autoThreshold:.5,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!1,textureSize:0,warning:"This model may need dedicated graphics card.  For more info please check with Browser Resources <i class='fa fa-cogs'></i>.",inferenceDelay:100,description:"The omnimodal skull stripping model delivers high-accuracy brain extraction in seconds, supporting multiple imaging modalities including T1, T2, FLAIR, DWI, EPI, MRA, PDw, CT, and PET without a need for tuning. Its generated WebGPU runner stores full-volume activations in fp16, reducing the largest GPU buffer to 480 MiB without the former low-memory speed penalty."},{id:3,type:"Atlas",path:"/models/model16chan18cls/model.json",modelName:"🪓 Subcortical + GWM",colormapPath:"./models/model16chan18cls/colormap.json",webgpu_safetensor:"./models/model16chan18cls/model.safetensors",webgpu_runner:"model16chan18cls",forceFP32:!1,webgpuStorageSize:536870912,numClasses:18,preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,cropPadding:20,autoThreshold:0,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!0,textureSize:0,warning:"This model may need dedicated graphics card.  For more info please check with Browser Resources <i class='fa fa-cogs'></i>.",inferenceDelay:100,description:"Parcellation of the brain into 17 regions: gray and white matter plus subcortical areas. A deep 16-channel gridding-free MeshNet (affine GroupNorm + GELU), synth-trained for robustness across data quality including varying saturation and clinical scans. The lightest/fastest of the Subcortical + GWM family."},{id:4,type:"Atlas",path:"/models/model30chan50cls/model.json",modelName:"🔪 Aparc+Aseg 50",colormapPath:"./models/model30chan50cls/colormap.json",webgpu_safetensor:"./models/model30chan50cls/model.safetensors",webgpu_runner:"model30chan50cls",webgpuTTArunner:!0,preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:200,enableTranspose:!0,enableCrop:!0,cropPadding:0,autoThreshold:0,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!1,textureSize:0,warning:"This model may need dedicated graphics card.  For more info please check with Browser Resources <i class='fa fa-cogs'></i>.",inferenceDelay:100,description:"This is a 50-class model, that segments the brain into the Aparc+Aseg Freesurfer Atlas but one where cortical homologues are merged into a single class."},{id:5,type:"Atlas",path:"/models/model24chan104cls_synth/model.json",modelName:"🪓🔪 Aparc+Aseg 104",colormapPath:"./models/model24chan104cls_synth/colormap.json",webgpu_safetensor:"./models/model24chan104cls_synth/model.safetensors",webgpu_runner:"dkatlas24_synth",forceFP32:!1,webgpuStorageSize:1610612736,numClasses:104,preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,cropPadding:20,autoThreshold:0,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!0,textureSize:0,warning:"This model may need a dedicated graphics card.  For more info please check with Browser Resources <i class='fa fa-cogs'></i>.",inferenceDelay:100,description:"Desikan-Killiany atlas parcellation into 104 regions (cortical + subcortical). A deep 24-channel gridding-free MeshNet with affine GroupNorm and GELU, synth-trained for robustness across data quality. Runs on WebGL2 and WebGPU (fp16 default, fp32 selectable)."},{id:6,type:"Divider",modelName:"-----------------",path:null},{id:7,type:"Segmentation",path:"/models/model_sae16ch3_tfjs/model.json",modelName:"🪓 Tissue GWM",colormapPath:"./models/model_sae16ch3_tfjs/colormap.json",webgpu_safetensor:"./models/model_sae16ch3_tfjs/model.safetensors",webgpu_runner:"robust_tissue",webgpuTTArunner:!0,preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,webglEnableTranspose:!1,enableCrop:!1,cropPadding:10,inputPermutation:null,outputPermutation:null,outputShift:[0,0,0],forceFP32:!1,ttaFlipAxis:0,autoThreshold:.2,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!1,textureSize:0,warning:"This model may need dedicated graphics card.  For more info please check with Browser Resources <i class='fa fa-cogs'></i>.",inferenceDelay:100,description:"Omnimodal gray and white matter segmentation model using SpatialAE architecture with swish activation. Operates on full T1 image in a single pass but needs a dedicated graphics card to operate."},{id:8,type:"Atlas",path:"/models/model32chan18cls/model.json",modelName:"🪓 Subcortical + GWM (Heavy)",colormapPath:"./models/model32chan18cls/colormap.json",webgpu_safetensor:"./models/model32chan18cls/model.safetensors",webgpu_runner:"model32chan18cls",forceFP32:!1,webgpuStorageSize:2147483648,numClasses:18,preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,cropPadding:20,autoThreshold:0,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!0,textureSize:0,warning:"Heavy model: needs a dedicated graphics card and is slower than the default Subcortical + GWM. For more info please check with Browser Resources <i class='fa fa-cogs'></i>.",inferenceDelay:100,description:"Higher-capacity subcortical + gray/white matter parcellation (17 regions) using a deep 32-channel gridding-free MeshNet (affine GroupNorm + GELU). More robust but heavier and slower in-browser than the default Subcortical + GWM (id 3). WebGPU fp16; WebGL2 fallback and fp32 require the pending asset conversions."},{id:10,type:"Brain_Extraction",path:"/models/model5_gw_ae/model.json",modelName:"⚡ Extract the Brain (FAST)",preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,cropPadding:18,autoThreshold:0,enableQuantileNorm:!1,filterOutWithPreMask:!1,enableSeqConv:!1,textureSize:0,warning:null,inferenceDelay:100,description:"Extract the brain fast model operates on full T1 image in a single pass, but uses only 5 filters per layer. Can work on integrated graphics cards but is barely large enough to provide good accuracy. Still more accurate than the failsafe version."},{id:11,type:"Brain_Extraction",path:"/models/model11_gw_ae/model.json",modelName:"🔪 Extract the Brain (High Acc, Slow)",preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,cropPadding:0,autoThreshold:0,enableQuantileNorm:!1,filterOutWithPreMask:!1,enableSeqConv:!0,textureSize:0,warning:"This model may need dedicated graphics card.  For more info please check with Browser Resources <i class='fa fa-cogs'></i>.",inferenceDelay:100,description:"Extract the brain high accuracy model operates on full T1 image in a single pass, but uses only 11 filters per layer. Can work on dedicated graphics cards. Still more accurate than the fast version."},{id:12,type:"Brain_Masking",path:"/models/model5_gw_ae/model.json",modelName:"⚡ Brain Mask (FAST)",colormapPath:"./models/model5_gw_ae/colormap.json",preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,cropPadding:17,autoThreshold:0,enableQuantileNorm:!1,filterOutWithPreMask:!1,enableSeqConv:!1,textureSize:0,warning:null,inferenceDelay:100,description:"This fast masking model operates on full T1 image in a single pass, but uses only 5 filters per layer. Can work on integrated graphics cards but is barely large enough to provide good accuracy. Still more accurate than failsafe version."},{id:13,type:"Brain_Masking",path:"/models/model11_gw_ae/model.json",modelName:"🔪 Brain Mask (High Acc, Low Mem)",preModelId:null,preModelPostProcess:!1,isBatchOverlapEnable:!1,numOverlapBatches:0,enableTranspose:!0,enableCrop:!0,cropPadding:0,autoThreshold:0,enableQuantileNorm:!0,filterOutWithPreMask:!1,enableSeqConv:!0,textureSize:0,warning:"This model may need dedicated graphics card.  For more info please check with Browser Resources <i class='fa fa-cogs'></i>.",inferenceDelay:100,description:"This masking model operates on full T1 image in a single pass, but uses 11 filters per layer. Can work on dedicated graphics cards. Still more accurate than fast version."}];class bH{idx(e,t,s,o){return s*o[0]*o[1]+t*o[0]+e}check_previous_slice(e,t,s,o,r,i,a,l,c,u){let h=0;if(!r)return 0;const d=e[this.idx(s,o,r,i)];if(a>=6){const p=this.idx(s,o,r-1,i);d===e[p]&&(c[h++]=t[p])}if(a>=18){if(s){const p=this.idx(s-1,o,r-1,i);d===e[p]&&(c[h++]=t[p])}if(o){const p=this.idx(s,o-1,r-1,i);d===e[p]&&(c[h++]=t[p])}if(s<i[0]-1){const p=this.idx(s+1,o,r-1,i);d===e[p]&&(c[h++]=t[p])}if(o<i[1]-1){const p=this.idx(s,o+1,r-1,i);d===e[p]&&(c[h++]=t[p])}}if(a===26){if(s&&o){const p=this.idx(s-1,o-1,r-1,i);d===e[p]&&(c[h++]=t[p])}if(s<i[0]-1&&o){const p=this.idx(s+1,o-1,r-1,i);d===e[p]&&(c[h++]=t[p])}if(s&&o<i[1]-1){const p=this.idx(s-1,o+1,r-1,i);d===e[p]&&(c[h++]=t[p])}if(s<i[0]-1&&o<i[1]-1){const p=this.idx(s+1,o+1,r-1,i);d===e[p]&&(c[h++]=t[p])}}return h?(this.fill_tratab(l,c,h,u),c[0]):0}do_initial_labelling(e,t,s){const o=new Uint32Array(32),r=new Uint32Array(32);let i=1;const a=8192;let l=a,c=new Uint32Array(l).fill(0);const u=new Uint32Array(t[0]*t[1]*t[2]).fill(0),h=new Uint32Array(27);for(let d=0;d<t[2];d++)for(let p=0;p<t[1];p++)for(let f=0;f<t[0];f++){let m=0;const g=e[this.idx(f,p,d,t)];if(g!==0){if(h[0]=this.check_previous_slice(e,u,f,p,d,t,s,c,o,r),h[0]&&(m+=1),s>=6){if(f){const x=this.idx(f-1,p,d,t);g===e[x]&&(h[m++]=u[x])}if(p){const x=this.idx(f,p-1,d,t);g===e[x]&&(h[m++]=u[x])}}if(s>=18){if(p&&f){const x=this.idx(f-1,p-1,d,t);g===e[x]&&(h[m++]=u[x])}if(p&&f<t[0]-1){const x=this.idx(f+1,p-1,d,t);g===e[x]&&(h[m++]=u[x])}}if(m)u[this.idx(f,p,d,t)]=h[0],this.fill_tratab(c,h,m,r);else{if(u[this.idx(f,p,d,t)]=i,i>=l){l+=a;const x=new Uint32Array(l);x.set(c),c=x}c[i-1]=i,i++}}}for(let d=0;d<i-1;d++){let p=d;for(;c[p]!==p+1;)p=c[p]-1;c[d]=p+1}return[i-1,c,u]}fill_tratab(e,t,s,o){let i=2147483647;for(let a=0;a<s;a++){let l=t[a];for(;e[l-1]!==l;)l=e[l-1];o[a]=l,i=Math.min(i,l)}for(let a=0;a<s;a++)e[o[a]-1]=i}translate_labels(e,t,s,o){const r=t[0]*t[1]*t[2];let i=0;const a=new Uint32Array(r).fill(0);for(let u=0;u<o;u++)i=Math.max(i,s[u]);const l=new Uint32Array(i).fill(0);let c=0;for(let u=0;u<r;u++)e[u]&&(l[s[e[u]-1]-1]||(c+=1,l[s[e[u]-1]-1]=c),a[u]=l[s[e[u]-1]-1]);return[c,a]}neighbor_winners(e,t,s,o){const r=t[0],i=t[1],a=t[2],l=r*i,c=new Map,u=(d,p)=>{let f=c.get(d);f||(f=new Map,c.set(d,f)),f.set(p,(f.get(p)||0)+1)};for(let d=0;d<a;d++)for(let p=0;p<i;p++)for(let f=0;f<r;f++){const m=d*l+p*r+f,g=e[m];if(g===0||s[g])continue;let x;f>0&&(x=s[e[m-1]])&&u(g,x),f<r-1&&(x=s[e[m+1]])&&u(g,x),p>0&&(x=s[e[m-r]])&&u(g,x),p<i-1&&(x=s[e[m+r]])&&u(g,x),d>0&&(x=s[e[m-l]])&&u(g,x),d<a-1&&(x=s[e[m+l]])&&u(g,x)}const h=new Uint32Array(o+1).fill(0);for(const[d,p]of c){let f=0,m=0;for(const[g,x]of p)(x>m||x===m&&(f===0||g<f))&&(m=x,f=g);h[d]=f}return h}finalize_volume(e,t,s,o,r){const i=e.length,a=new Uint32Array(i).fill(0),l=r?this.neighbor_winners(e,t,s,o):null;let c=0;for(let u=0;u<i;u++){const h=e[u];if(h===0)continue;let d=s[h];!d&&l&&(d=l[h]),d&&(a[u]=d,d>c&&(c=d))}return[c,a]}diagnose_components(e,t,s,o,r={}){var N,T,I;const i=(N=r.topN)!=null?N:50,a=(T=r.minSize)!=null?T:1,l=(I=r.label)!=null?I:"diag",c=o[0],u=o[1],h=o[2],d=c*u,p=new Uint32Array(t+1),f=new Uint32Array(t+1);for(let E=0;E<e.length;E++){const R=s[E];R&&(p[R]=e[E],f[R]++)}const m=new Map,g=new Uint32Array(t+1),x=new Uint32Array(t+1),b=(E,R)=>{let D=m.get(E);D||(D=new Map,m.set(E,D)),D.set(R,(D.get(R)||0)+1)};for(let E=0;E<h;E++)for(let R=0;R<u;R++)for(let D=0;D<c;D++){const F=E*d+R*c+D,_=s[F];if(!_)continue;const P=p[_],B=H=>{const G=s[H];if(G===_)return;x[_]++;const Z=G?p[G]:0;Z===0?g[_]++:Z!==P&&b(_,Z)};D>0&&B(F-1),D<c-1&&B(F+1),R>0&&B(F-c),R<u-1&&B(F+c),E>0&&B(F-d),E<h-1&&B(F+d)}const w=new Map,y=new Map;for(let E=1;E<=t;E++){const R=p[E];w.set(R,(w.get(R)||0)+1),(!y.has(R)||f[E]>y.get(R))&&y.set(R,f[E])}const C=[];for(let E=1;E<=t;E++){if(f[E]<a)continue;const R=p[E],D=m.get(E);let F=0,_=0,P=0;if(D)for(const[H,G]of D)P+=G,G>_&&(_=G,F=H);const B=x[E]||1;C.push({comp:E,class:R,size:f[E],largestOfClass:f[E]===y.get(R)?"Y":"n",compsInClass:w.get(R),domNeighbor:F,domFracForeign:P?+(_/P).toFixed(2):0,domFracBoundary:+(_/B).toFixed(2),bgFrac:+(g[E]/B).toFixed(2)})}C.sort((E,R)=>R.domFracForeign-E.domFracForeign||R.size-E.size);const $=(E,R)=>{const D=R.map(_=>Math.max(_.h.length,...E.map(P=>String(P[_.k]).length))),F=_=>_.map((P,B)=>String(P).padStart(D[B])).join("  ");return[F(R.map(_=>_.h)),...E.map(_=>F(R.map(P=>_[P.k])))].join(`
`)},v=[{k:"comp",h:"comp"},{k:"class",h:"class"},{k:"size",h:"size"},{k:"largestOfClass",h:"lrg"},{k:"compsInClass",h:"nComp"},{k:"domNeighbor",h:"domNbr"},{k:"domFracForeign",h:"encF"},{k:"domFracBoundary",h:"encB"},{k:"bgFrac",h:"bgF"}];console.log(`[${l}] total components=${t}, distinct classes=${w.size}
[${l}] island candidates (encF≈1 + small size + lrg=n ⇒ swallowed island):
`+$(C.slice(0,i),v));const k=[...w.entries()].map(([E,R])=>({class:E,components:R,maxCompSize:y.get(E)})).sort((E,R)=>R.components-E.components);return console.log(`[${l}] per-class component counts (components=1 ⇒ fully connected):
`+$(k.slice(0,30),[{k:"class",h:"class"},{k:"components",h:"comps"},{k:"maxCompSize",h:"maxSize"}])),C}largest_original_cluster_labels(e,t,s,o=null,r=!1){const i=e.length,a=new Uint32Array(t+1).fill(0),l=new Uint32Array(t+1).fill(0);for(let c=0;c<i;c++){const u=e[c],h=s[c];a[h]=u,l[h]++}for(let c=0;c<t+1;c++){const u=a[c];for(let h=0;h<t+1;h++)h!==c&&u===a[h]&&(l[c]<l[h]||l[c]===l[h]&&c<h)&&(a[c]=0)}return this.finalize_volume(s,o,a,t,r)}filter_clusters(e,t,s,o,r=null,i=!1){const a=e.length,l=new Uint32Array(t+1).fill(0),c=new Uint32Array(t+1).fill(0);for(let d=0;d<a;d++){const p=e[d],f=s[d];f>0&&(l[f]=p,c[f]++)}const u=new Uint8Array(t+1).fill(1);for(let d=1;d<=t;d++){const p=l[d];if(o==="all"||o.has&&o.has(p)){for(let m=1;m<=t;m++)if(d!==m&&l[m]===p){if(c[m]>c[d]){u[d]=0;break}else if(c[m]===c[d]&&m<d){u[d]=0;break}}}}const h=new Uint32Array(t+1).fill(0);for(let d=1;d<=t;d++)u[d]&&(h[d]=l[d]);return this.finalize_volume(s,r,h,t,i)}filter_clusters_by_ratio(e,t,s,o,r=null,i=!1){const a=e.length,l=new Uint32Array(t+1).fill(0),c=new Uint32Array(t+1).fill(0);for(let p=0;p<a;p++){const f=s[p];f>0&&(l[f]===0&&(l[f]=e[p]),c[f]++)}const u=new Map;for(let p=1;p<=t;p++){const f=l[p],m=c[p];(!u.has(f)||m>u.get(f))&&u.set(f,m)}const h=new Uint8Array(t+1).fill(0);for(let p=1;p<=t;p++){const f=l[p],m=c[p],g=u.get(f)||0;m>=g*o&&(h[p]=1)}const d=new Uint32Array(t+1).fill(0);for(let p=1;p<=t;p++)h[p]&&(d[p]=l[p]);return this.finalize_volume(s,r,d,t,i)}bwlabel(e,t,s=26,o=!1,r=!1){const i=Date.now(),a=t[0]*t[1]*t[2],l=new Uint32Array(a).fill(0);if(![6,18,26].includes(s))return console.log("bwlabel: conn must be 6, 18 or 26."),[0,l];if(t[0]<2||t[1]<2||t[2]<1)return console.log("bwlabel: img must be 2 or 3-dimensional"),[0,l];if(o)for(let f=0;f<a;f++)e[f]!==0&&(l[f]=1);else l.set(e);let[c,u,h]=this.do_initial_labelling(l,t,s);u===void 0&&(u=new Uint32Array(0));const[d,p]=this.translate_labels(h,t,u,c);if(console.log(s+" neighbor clustering into "+d+" regions in "+(Date.now()-i)+"ms"),r){const[f,m]=this.largest_original_cluster_labels(l,d,p);return[f,m]}return[d,p]}filter_clusters_by_rank(e,t,s,o,r=0,i=null,a=!1,l=null,c=!1){const u=e.length,h=new Uint32Array(t+1).fill(0),d=new Uint32Array(t+1).fill(0),p=l!=null&&Array.isArray(i)&&i.length===3,f=p?i[0]:0,m=p?i[1]:0,g=p?new Int32Array(t+1).fill(2147483647):null,x=p?new Int32Array(t+1).fill(-1):null,b=p?new Int32Array(t+1).fill(2147483647):null,w=p?new Int32Array(t+1).fill(-1):null,y=p?new Int32Array(t+1).fill(2147483647):null,C=p?new Int32Array(t+1).fill(-1):null;for(let I=0;I<u;I++){const E=s[I];if(E>0&&(h[E]===0&&(h[E]=e[I]),d[E]++,p)){const R=I%f,D=I/f|0,F=D%m,_=D/m|0;R<g[E]&&(g[E]=R),R>x[E]&&(x[E]=R),F<b[E]&&(b[E]=F),F>w[E]&&(w[E]=F),_<y[E]&&(y[E]=_),_>C[E]&&(C[E]=_)}}let $=null,v=0;if(p){let I=-1;for(let P=1;P<=t;P++)d[P]>I&&(I=d[P],v=P);const E=Math.max(2,Math.ceil(l)+4),R=f*m,D=new Int16Array(u).fill(-1);let F=[];for(let P=0;P<u;P++)s[P]===v&&(D[P]=0,F.push(P));for(let P=1;P<=E&&F.length;P++){const B=[];for(let H=0;H<F.length;H++){const G=F[H],Z=G%f,J=(G/f|0)%m;Z>0&&D[G-1]===-1&&(D[G-1]=P,B.push(G-1)),Z<f-1&&D[G+1]===-1&&(D[G+1]=P,B.push(G+1)),J>0&&D[G-f]===-1&&(D[G-f]=P,B.push(G-f)),J<m-1&&D[G+f]===-1&&(D[G+f]=P,B.push(G+f)),G-R>=0&&D[G-R]===-1&&(D[G-R]=P,B.push(G-R)),G+R<u&&D[G+R]===-1&&(D[G+R]=P,B.push(G+R))}F=B}const _=E+1;$=new Float64Array(t+1).fill(_);for(let P=0;P<u;P++){const B=s[P];if(B>0&&B!==v){const H=D[P]>=0?D[P]:_;H<$[B]&&($[B]=H)}}c&&console.log(`[rank-filter] brain comp=${v} size=${I} bbox A[${g[v]},${x[v]}] B[${b[v]},${w[v]}] C[${y[v]},${C[v]}] | maxGap=${l} scan=${E}`)}const k=new Map;for(let I=1;I<=t;I++){const E=h[I],R=d[I];k.has(E)||k.set(E,[]),k.get(E).push({i:I,size:R})}const N=new Uint8Array(t+1).fill(0);for(const[I,E]of k.entries()){E.sort((_,P)=>P.size-_.size);const R=E.length?E[0].size:0,D=r>0?R*r:0,F=Math.min(E.length,o);for(let _=0;_<F;_++){const P=E[_];if(P.size<D){c&&_>0&&console.log(`[rank-filter] class ${I} #${_}: size=${P.size} DROP (below ${(r*100).toFixed(0)}% floor)`);break}if(_>0&&p){const B=$[P.i],H=B<=l;if(c&&console.log(`[rank-filter] class ${I} #${_}: size=${P.size} surfDist=${B} -> ${H?"KEEP":"DROP (too far)"}`),!H)continue}N[P.i]=1}}const T=new Uint32Array(t+1).fill(0);for(let I=1;I<=t;I++)N[I]&&(T[I]=h[I]);return this.finalize_volume(s,i,T,t,a)}}function yH(n,e,t){return X(this,null,function*(){const[s,o,r,i,a,l]=yield EH(e),c=o-s+1,u=i-r+1,h=l-a+1,d=(k,N,T,I)=>{const E=Math.min(k,I),R=Math.min(255-N,I),D=Math.max(0,k-E),F=Math.min(255,N+R);return[D,F]},[p,f]=d(s,o,c,t),[m,g]=d(r,i,u,t),[x,b]=d(a,l,h,t);let w=n.slice([p,m,x],[f-p+1,g-m+1,b-x+1]);const y=w.shape,C=y[0]%2,$=y[1]%2,v=y[2]%2;return C||$||v?(w=w.pad([[0,C],[0,$],[0,v]]),console.log(`Padded to even dims: [${y}] -> [${w.shape}]`)):console.log(`Crop dimensions (already even): [${y}]`),{cropped:w,corner:[p,m,x],padding:[C,$,v]}})}function wH(o,r,i){return X(this,arguments,function*(n,e,t,s=[0,0,0]){const[a,l,c]=e,[u,h,d]=t,[p,f,m]=n.shape,[g,x,b]=s||[0,0,0],w=Math.max(0,a+g),y=Math.max(0,l+x),C=Math.max(0,c+b),$=[[w,Math.max(0,u-p-w)],[y,Math.max(0,h-f-y)],[C,Math.max(0,d-m-C)]],v=n.pad($);if(v.shape[0]>u||v.shape[1]>h||v.shape[2]>d){const k=v.slice([0,0,0],[u,h,d]);return v.dispose(),k}return v})}function CH(n,e){return X(this,null,function*(){const t=n.max(),s=t.mul(e),o=yield s.data();return t.dispose(),s.dispose(),z(()=>n.clone().greater(o[0]))})}function IH(n,e=.01,t=.99){return X(this,null,function*(){const s=n.flatten(),o=s.shape[0],r=yield s.data();s.dispose();const i=Math.min(1e5,o);let a;if(i>=o)a=Array.from(r);else{a=new Array(i);for(let p=0;p<i;p++){const f=Math.floor(Math.random()*o);a[p]=r[f]}}a.sort((p,f)=>p-f);const l=a.length,c=Math.floor(l*e),u=Math.ceil(l*t)-1,h=a[c],d=a[u];return{qmin:h,qmax:d}})}function $H(n,e,t,s,o,r,i){return X(this,null,function*(){const a=n.shape[4],l=e.shape[4];let c=null;for(let u=0;u<l;u++){const h=Math.ceil(a/i);let d=null;for(let f=0;f<h;f++){const m=f*i,g=Math.min((f+1)*i,a);if(m<a){const x=z(()=>{const b=n.slice([0,0,0,0,m],[-1,-1,-1,-1,g-m]),w=e.slice([0,0,0,m,u],[-1,-1,-1,g-m,1]);return di(b,w,s,o,"NDHWC",r)});if(d===null)d=x;else{const b=d.add(x);d.dispose(),x.dispose(),d=b}}}let p;if(t){const f=t.slice([u],[1]);p=d.add(f),d.dispose(),f.dispose()}else p=d;if(c==null)c=p;else{const f=yield vt([c,p],4);p.dispose(),c.dispose(),c=f}}return c})}function vH(n,e=1e-5){return z(()=>{const{mean:t,variance:s}=yl(n,[1,2,3],!0),o=El(s.add(e));return n.sub(t).mul(o)})}function kH(n,e,t,s,o,r,i){return X(this,null,function*(){const a=n.shape[4],l=e.shape[4];let c=null;for(let u=0;u<l;u++){const h=Math.ceil(a/i);let d=null;for(let m=0;m<h;m++){const g=m*i,x=Math.min((m+1)*i,a);if(g<a){const b=z(()=>{const w=n.slice([0,0,0,0,g],[-1,-1,-1,-1,x-g]),y=e.slice([0,0,0,g,u],[-1,-1,-1,x-g,1]);return di(w,y,s,o,"NDHWC",r)});if(d===null)d=b;else{const w=d.add(b);d.dispose(),b.dispose(),d=w}}}let p;if(t){const m=t.slice([u],[1]);p=d.add(m),d.dispose(),m.dispose()}else p=d;const f=vH(p);if(p.dispose(),c===null)c=f;else{const m=yield vt([c,f],4);f.dispose(),c.dispose(),c=m}}return c})}function Wy(n,e,t,s,o,r,i,a){const l=n.length;return z(()=>{let c=null;const u=Math.ceil(l/a);for(let h=0;h<u;h++){const d=h*a,p=Math.min((h+1)*a,l),f=p-d,m=f===1?n[d]:vt(n.slice(d,p),4),g=e.slice([0,0,0,d,s],[-1,-1,-1,f,1]),x=di(m,g,o,r,"NDHWC",i);c=c===null?x:c.add(x)}return t&&(c=c.add(t.slice([s],[1]))),c})}function Uy(n,e,t,s,o,r,i,a=!1){const l=e.shape[4],c=[];for(let u=0;u<l;u++){let h=Wy(n,e,t,u,s,o,r,i);if(a){const d=Gy(h);h.dispose(),h=d}c.push(h)}return c}function SH(n,e,t,s,o,r){const i=e.shape[3],a=e.shape[4],l=[1,s[0],s[1],s[2],1],c=[];for(let u=0;u<i;u++){const h=z(()=>{let d=null;for(let p=0;p<a;p++){const f=e.slice([0,0,0,u,p],[-1,-1,-1,1,1]),m=Vf(n[p],f,l,o,r);d=d===null?m:d.add(m)}return t&&(d=d.add(t.slice([u],[1]))),d});c.push(h)}return c}function NH(n,e,t,s,o,r,i,a=!0){return X(this,null,function*(){const l=e.shape[4],c=3;let u=null,h=null,d=null;for(let p=0;p<l;p++){const f=Wy(n,e,t,p,s,o,r,c);d===null&&(d=[f.shape[1],f.shape[2],f.shape[3]]);const m=z(()=>f.reshape(d));if(f.dispose(),u===null)u=m,h=Ee(m);else{const[g,x]=z(()=>{const b=Gt(m,u);return[dt(b,m,u),dt(b,Lo(h.shape,p),h)]});u.dispose(),h.dispose(),m.dispose(),u=g,h=x}i&&i(`Final layer class ${p+1}/${l}`,(p+1)/l),!a&&p%8===0&&(yield new Promise(g=>setTimeout(g,0)))}return u.dispose(),h})}function TH(n){const e=n.shape[4];if(e===1)return[n];const t=[];for(let s=0;s<e;s++)t.push(n.slice([0,0,0,0,s],[-1,-1,-1,-1,1]));return t}function Gy(n,e=1e-5){return z(()=>{const t=n.shape.length,s=n.shape[t-1],o=n.shape[1]*n.shape[2]*n.shape[3],r=n.transpose([0,4,1,2,3]).reshape([s,o]),i=r.mean(1),l=r.sub(i.reshape([s,1])).square().mean(1),c=El(te(l,e)),u=i.reshape([1,1,1,1,s]),h=c.reshape([1,1,1,1,s]);return n.sub(u).mul(h)})}function mp(n,e=0){return X(this,null,function*(){let t=[];e===0?t=yield n.max(2).max(1).arraySync():e===1?t=yield n.max(2).max(0).arraySync():t=yield n.max(1).max(0).arraySync();let s=t.length,o=0;for(let r=0;r<t.length;r++)if(t[r]>0){s=r;break}for(let r=t.length-1;r>=0;r--)if(t[r]>0){o=r;break}return[s,o]})}function EH(n){return X(this,null,function*(){const[e,t]=yield mp(n,0),[s,o]=yield mp(n,1),[r,i]=yield mp(n,2);return console.log("row min and max  :",e,t),console.log("col min and max  :",s,o),console.log("depth min and max  :",r,i),[e,t,s,o,r,i]})}function RH(n,e,t,s,o,r,i,a,l=!0){return X(this,null,function*(){n[0].dtype!=="int32"&&i("",-1,"generateBrainMask assumes int32"),o.preModelPostProcess&&i("",-1,"generateBrainMask assumes BWLabeler instead of preModelPostProcess");const c=n.length,u=n[0].size,h=c*u,d=new Int32Array(h);let p=0;for(let f=0;f<c;f++)d.set(n[f].dataSync(),p),p+=u;for(let f=0;f<h;f++)d[f]=d[f]!==0?1:0;return(l||r.showPhase1Output)&&(a(d,r,o),i("Segmentation finished",0)),Ws(d,[e,t,s])})}function AH(n,e,t){return X(this,null,function*(){const s=e.dims[1],o=e.dims[2];let r;if(e.datatypeCode===2)r=new Uint8Array(t);else if(e.datatypeCode===4)r=new Int16Array(t);else if(e.datatypeCode===8)r=new Int32Array(t);else if(e.datatypeCode===16)r=new Float32Array(t);else if(e.datatypeCode===64)r=new Float64Array(t);else if(e.datatypeCode===256)r=new Int8Array(t);else if(e.datatypeCode===512)r=new Uint16Array(t);else if(e.datatypeCode===768)r=new Uint32Array(t);else return;const i=[];let a=0;for(let c=0;c<n;c++){const u=new Array(o*s);let h=0;for(let d=0;d<o;d++)for(let p=0;p<s;p++){const f=r[a++];u[h++]=f&255}i.push(Ws(u,[o,s]))}const l=Mn(i);return xe(i),l})}function Hy(n){return X(this,null,function*(){return n.layers.length})}function qy(n){return X(this,null,function*(){let e=0;for(let t=0;t<n.layers.length;t++)e+=n.layers[t].countParams();return e})}function Ec(n){return X(this,null,function*(){for(let e=0;e<n.layers.length;e++)if(n.layersByDepth[e][0].dataFormat)return n.layersByDepth[e][0].dataFormat==="channelsLast"})}function jy(n){return X(this,null,function*(){return yield DE(n)})}function Ky(n){return X(this,null,function*(){const e=n.max(),t=n.min();return yield n.sub(t).div(e.sub(t))})}function DH(n,e,t){const i=n.shape[4],a=Math.ceil(i/t);let l=null;for(let c=0;c<a;c++){const u=c*t,d=Math.min((c+1)*t,i)-u,p=z(()=>n.slice([0,0,0,0,u],[-1,-1,-1,-1,d])),f=z(()=>e.slice([0,0,0,u,0],[-1,-1,-1,d,-1])),m=di(p,f,1,0,"NDHWC",1);p.dispose(),f.dispose();const g=to(m);if(m.dispose(),l===null)l=g;else{const x=l.add(g);l.dispose(),l!==g&&g.dispose(),l=x}z(()=>{Fe(ot([1,1]),ot([1,1]))})}return l}function Xy(n,e=.05,t=.95){return X(this,null,function*(){const{qmin:s,qmax:o}=yield IH(n,e,t),r=o-s,i=n.sub(s),a=i.div(r);return i.dispose(),a})}class FH{constructor(e,t,s,o,r=!0){this.model=e,this.outChannels=e.outputLayers[0].kernel.shape[4],this.chunkSize=t,this.isChannelLast=s,this.callbackUI=o,this.isWebWorker=r}apply(e){return X(this,null,function*(){const t=performance.now(),s=this.model.layers[this.model.layers.length-1],o=s.getWeights()[0],r=s.getWeights()[1],i=this.isChannelLast?e.shape.slice(1,-1):e.shape.slice(2);let a=yield L(ts(i),-1e4),l=yield ot(i);const c=3,u=Math.ceil(this.outChannels/c);for(let p=0;p<u;p++){const f=p*c,m=Math.min((p+1)*c,this.outChannels),[g,x]=yield z(()=>{let b=a,w=l;for(let y=f;y<m;y++){const C=o.slice([0,0,0,0,y],[-1,-1,-1,-1,1]),$=r.slice([y],[1]),v=DH(e,C,Math.min(this.chunkSize,this.outChannels)).add($),k=Gt(v,b);b=dt(k,v,b),w=dt(k,Lo(w.shape,y),w)}return[b,w]});xe([a,l]),a=g,l=x,this.callbackUI(`Processing chunk ${p+1}/${u}`,(p+1)/u),this.isWebWorker||(yield new Promise(b=>setTimeout(b,0)))}const h=l.clone();xe([a,l]);const d=performance.now();return console.log(`Execution time: ${d-t} milliseconds`),h})}}function _H(n,e,t,s){return X(this,null,function*(){console.log("Downloading segmentation data from GPU to CPU...");const o=yield n.data(),r=n.shape;if(console.log("Data download complete. Starting CPU processing."),s.isPostProcessEnable){console.log("Applying CPU-based connected-component labeling...");const i=performance.now(),a=new bH,l=[5,14],c=!!s.fillSuppressedWithNeighborLabel||l.includes(t.id),u=r[0]*r[1]*r[2],h=Math.max(1e5,Math.floor(u*.01)),[d,p]=a.bwlabel(o,r,6,!1,!1);if(d>h){const x=`Segmentation produced noise: ${d.toLocaleString()} disconnected regions (cap ${h.toLocaleString()}). The model output is unusable, so post-processing was aborted. Try re-running, switching backend (WebGPU/WebGL2), or another model.`;console.error("[postprocess] "+x);const b=new Error(x);throw b.code="SEGMENTATION_NOISE",b}let f=!1,m=!1;if([1,7].includes(t.id)?(f=!1,m=!1):[5,14].includes(t.id)?(f=!1,m=!0):[3,8,9].includes(t.id)?(f=!1,m=!1):(f=!0,m=!0),[1,7].includes(t.id)){const y=d,C=p,[$,v]=a.filter_clusters_by_rank(o,y,C,2,.02,r,c,8,!1);o.set(v)}else if(!m&&[3,8,9].includes(t.id)){const[x,b]=a.bwlabel(o,r,6,!0,!0);for(let k=0;k<o.length;k++)o[k]*=b[k];const[w,y]=a.bwlabel(o,r,6,!1,!1),C=new Set([1,2,5,6,13]),[$,v]=a.filter_clusters(o,w,y,C,r,c);o.set(v)}else if(!f&&m){s.diagnoseEnclosedComponents&&a.diagnose_components(o,d,p,r,{label:`model${t.id}`,topN:60});const[x,b]=a.largest_original_cluster_labels(o,d,p,r,c);o.set(b)}else{const[x,b]=a.bwlabel(o,r,6,f,m);if(f)for(let w=0;w<o.length;w++)o[w]*=b[w];else o.set(b)}const g=((performance.now()-i)/1e3).toFixed(4);console.log(`Connected-component labeling took: ${g} seconds.`)}switch(t.type){case"Brain_Masking":{const i=new Uint8Array(o.length);for(let a=0;a<o.length;a++)i[a]=o[a]!==0?1:0;return i}case"Brain_Extraction":{const i=new Uint8Array(o.length);for(let a=0;a<o.length;a++){const l=o[a]!==0?1:0;i[a]=e[a]*l}return i}default:return new Uint8Array(o)}})}function OH(n,e,t){var l;let s=0,o=1;if(t)if(e.length===5)o=e[1]*e[2]*e[3];else for(let c=0;c<e.length;c++)e[c]>1&&(o*=e[c]);else if(e.length===5)o=e[2]*e[3]*e[4];else for(let c=0;c<e.length;c++)e[c]>32&&(o*=e[c]);let r=0,i=0;if(n&&n.layers){const c=n.layers.length;for(let u=0;u<c;u++){const h=n.layers[u],d=u===c-1;let p=0,f=h.outputShape;Array.isArray(f)&&Array.isArray(f[0])&&(f=f[0]),Array.isArray(f)&&(t?p=f[f.length-1]:p=f[1]);let m=0;const g=h.batchInputShape,x=b=>Array.isArray(b)?t?b[b.length-1]:b[1]:0;if(g)if(Array.isArray(g)&&Array.isArray(g[0]))for(const b of g)m+=x(b);else Array.isArray(g)&&(m=x(g));if(m===0&&h.weights&&h.weights.length>0){const b=h.weights[0];b&&b.shape&&(b.shape.length===5?m=b.shape[3]:b.shape.length===4&&(m=b.shape[2]))}if(m===0&&(m=p),typeof p=="number"&&typeof m=="number"){const b=o*(m+p),w=o*p;!d&&b>s&&(s=b);const y=o*Math.max(m,p);!d&&y>i&&(i=y),r=w}}}s===0&&(s=o*32*2),i===0&&(i=o*32);const a=!!(n&&n.layers&&n.layers.some(c=>typeof c.name=="string"&&c.name.endsWith("_gn")));return console.log(`[Estimator] Total Layers: ${(l=n==null?void 0:n.layers)==null?void 0:l.length}, Peak(in+out): ${s}, MaxSingle: ${i}, Final Output: ${r}, unpackedIntermediate: ${a}`),{peak:s,maxSingle:i,maxOutput:r,hasUnpackedIntermediate:a}}const gp={WEBGPU:"webgpu",WEBGL_WEBWORKER:"webgl-webworker",WEBGL_SEQUENTIAL:"webgl-sequential"};function LH(n,e){return{startTime:Date.now(),Model_Name:(n==null?void 0:n.modelName)||"Unknown",Execution_Mode:e,TF_Backend:e===gp.WEBGPU?"webgpu":"webgl",isModelFullVol:null,No_SubVolumes:1,Brainchop_Ver:"FullVolume",Input_Shape:null,Output_Shape:null,Channel_Last:null,Model_Param:null,Model_Layers:null,Actual_Labels:null,Expect_Labels:null,NumLabels_Match:null,Missing_Labels:null,Inference_t:null,Postprocess_t:null,Status:null,Error_Type:null,Extra_Err_Info:null}}function MH(n,e,t,s,o,r){return X(this,null,function*(){var i,a,l;if(e)try{n.Input_Shape=JSON.stringify(t),n.Output_Shape=JSON.stringify(((i=e.output)==null?void 0:i.shape)||((l=(a=e.outputs)==null?void 0:a[0])==null?void 0:l.shape)),n.Channel_Last=s,o&&(n.Model_Param=yield o(e)),r&&(n.Model_Layers=yield r(e))}catch(c){console.warn("Failed to add model info to diagnostics:",c)}})}function Yy(n,e,t,s=null){n.Expect_Labels=e,n.Actual_Labels=t,n.NumLabels_Match=e===t,s&&s.length>0&&(n.Missing_Labels=s.join(", "))}function Zy(n,e,t){n.Inference_t=e,n.Postprocess_t=t,n.Status="OK"}function Zi(n,e,t=null){n.Inference_t=1/0,n.Postprocess_t=1/0,n.Status="Fail",n.Error_Type=(e==null?void 0:e.message)||String(e),t&&(n.Extra_Err_Info=t)}const PH=!1;function Rc(n,e,t,s,o,r,i,a,l){return X(this,null,function*(){const c=performance.now();console.log(`---- Start FullVolume Inference (SeqConv: ${e.enableSeqConv}) ----`),e.enableQuantileNorm?(console.log("preModel Quantile normalization enabled"),s=yield Xy(s)):(console.log("preModel Min Max normalization enabled"),s=yield Ky(s));let u;if(o==null){const K=e.autoThreshold;K>0&&K<=1?u=yield CH(s,K):u=yield s.greater([0]).asType("bool")}else u=yield o.greater([0]).asType("bool");const h=s.shape,d=e.webglEnableTranspose!==void 0?e.webglEnableTranspose:e.enableTranspose,p=e.cropPadding;let f,m,g;if(e.enableCrop){const K=yield yH(s,u,p);f=K.cropped,m=K.corner,g=K.padding,s.dispose()}else{console.log("Skipping cropping (enableCrop: false)");const K=s.shape,Y=K[0]%2,ne=K[1]%2,oe=K[2]%2;Y||ne||oe?(console.log(`Padding standard input to even: ${K} -> +[${Y}, ${ne}, ${oe}]`),f=s.pad([[0,Y],[0,ne],[0,oe]]),g=[Y,ne,oe],s.dispose()):(f=s,g=null),m=[0,0,0]}u.dispose(),e.inputPermutation?(console.log(`Permuting Input: ${e.inputPermutation}`),f=f.transpose(e.inputPermutation)):d&&(f=f.transpose(),console.log("Input transposed for pre-model"));const x=yield t,b=x.layers.length,w=Ec(x);let y;w?(x.layers[0].batchInputShape[1]=f.shape[0],x.layers[0].batchInputShape[2]=f.shape[1],x.layers[0].batchInputShape[3]=f.shape[2],y=[n.batchSize,x.layers[0].batchInputShape[1],x.layers[0].batchInputShape[2],x.layers[0].batchInputShape[3],n.numOfChan]):(x.layers[0].batchInputShape[2]=f.shape[0],x.layers[0].batchInputShape[3]=f.shape[1],x.layers[0].batchInputShape[4]=f.shape[2],y=[n.batchSize,n.numOfChan,x.layers[0].batchInputShape[2],x.layers[0].batchInputShape[3],x.layers[0].batchInputShape[4]]);let C=f.reshape(y),$=!1;if(!e.enableSeqConv){const{peak:K,maxSingle:Y,maxOutput:ne,hasUnpackedIntermediate:oe}=OH(x,y,w);console.log(`[Centralized Check] Peak (In+Out): ${K}, MaxSingle: ${Y}, Max Output: ${ne}, unpackedIntermediate: ${oe}`);const le=vf(),ae=le&&le.gpgpu&&le.gpgpu.gl?le.gpgpu.gl.getParameter(le.gpgpu.gl.MAX_TEXTURE_SIZE):16384;console.log(`[Memory Check] MAX_TEXTURE_SIZE from WebGL context: ${ae}`);const ue=Math.ceil(Math.sqrt(Math.ceil(Y/(oe?1:4)))),Ie=Math.ceil(Math.sqrt(ne));ue>ae?(console.warn(`[Memory Check] PACKED intermediates too large (${ue} > ${ae}). Using full SeqConv.`),e.enableSeqConv=!0):Ie>ae?(console.warn(`[Memory Check] UNPACKED output too large (${Ie} > ${ae}). Using chunkedArgMax.`),$=!0):console.log("[Memory Check] All checks passed. Using fast path.")}const v=e.enableSeqConv?"SeqConv (SLOW: per-channel conv + sync every layer)":$?"fast + chunkedArgMax (final layer only)":"fast (dense)";console.log(`%c[PATH] ${v}  | crop=${f.shape}  | enableCrop=${e.enableCrop} cropPadding=${e.cropPadding}`,"font-weight:bold;color:#0a0");function k(K,Y,ne,oe,le,ae,pe){return X(this,null,function*(){let ue=1,Ie=Y;const Le=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),Ne=navigator.userAgent.toLowerCase().indexOf("firefox")>-1;let Te=Le||Ne?10:15;for(le.enableSeqConv&&(Te=1),console.log(`Syncing GPU every ${Te} layers.`);ue<=ne;){performance.now();let de="";try{let $e;const Me=K.layers[ue],Je=Me.activation,Ve=Me.getClassName()==="Conv3D"&&Je&&Je.getClassName()==="linear";le.enableSeqConv&&Ve?$e=yield(K.layers[ue].name.endsWith("_gn")?kH:$H)(Ie,K.layers[ue].getWeights()[0],K.layers[ue].getWeights()[1],K.layers[ue].strides,K.layers[ue].padding,K.layers[ue].dilationRate,3):PH&&K.layers[ue].name.endsWith("_gn")||($e=z(()=>{let Ct=K.layers[ue].apply(Ie);return K.layers[ue].name.endsWith("_gn")&&(Ct=Gy(Ct)),Ct})),Ie.dispose(),Ie=$e}catch($e){throw pe($e.message,-1,$e.message),je().endScope(),je().disposeVariables(),Zi(ae,$e,"Failed while model layer "+ue+" apply"),pe("",-1,"",ae),$e}if(ue%Te===0){pe("Layer "+ue.toString(),(ue+1)/oe);const $e=Ie.slice([0,0,0,0,0],[1,1,1,1,1]);yield $e.data(),$e.dispose()}else pe("Layer "+ue.toString(),(ue+1)/oe);ue++}return Ie})}function N(K,Y,ne,oe,le,ae,pe){return X(this,null,function*(){const ue=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),Ie=navigator.userAgent.toLowerCase().indexOf("firefox")>-1,Le=ue||Ie?4:6;let Ne=TH(Y),Te=1;for(;Te<=ne;){try{const de=K.layers[Te],$e=de.getClassName(),Me=de.activation;let Je;if($e==="Conv3D"&&Me&&Me.getClassName()==="linear"){const Ve=de.name.endsWith("_gn");Je=Uy(Ne,de.getWeights()[0],de.getWeights()[1],de.strides,de.padding,de.dilationRate,3,Ve)}else if($e==="Activation")Je=Ne.map(Ve=>z(()=>de.apply(Ve)));else if($e==="Conv3D"){Je=Uy(Ne,de.getWeights()[0],de.getWeights()[1],de.strides,de.padding,de.dilationRate,3,!1);const Ve=Je.map(Ct=>z(()=>de.activation.apply(Ct)));xe(Je),Je=Ve}else if($e==="Conv3DTranspose"){const Ve=[Ne[0].shape[1],Ne[0].shape[2],Ne[0].shape[3]],Ct=de.computeOutputShape([1,Ve[0],Ve[1],Ve[2],Ne.length]),jt=[Ct[1],Ct[2],Ct[3]];if(Je=SH(Ne,de.getWeights()[0],de.getWeights()[1],jt,de.strides,de.padding),de.activation&&de.activation.getClassName()!=="linear"){const as=Je.map(on=>z(()=>de.activation.apply(on)));xe(Je),Je=as}}else throw new Error(`Channel-list path: unsupported layer ${$e} (${de.name})`);xe(Ne),Ne=Je}catch(de){throw xe(Ne),pe(de.message,-1,de.message),je().endScope(),je().disposeVariables(),Zi(ae,de,"Failed while model layer "+Te+" apply (channel-list)"),pe("",-1,"",ae),de}if(pe("Layer "+Te.toString(),(Te+1)/oe),Te%Le===0){const de=Ne[0].slice([0,0,0,0,0],[1,1,1,1,1]);yield de.data(),de.dispose()}Te++}return Ne})}const T=performance.now(),E=e.enableSeqConv||$?b-2:b-1;let R;if(e.enableSeqConv){e.enableTTA&&console.warn("[channel-list] TTA is not supported on the channel-list path; running a single pass.");const K=yield N(x,C,E,b,e,r,a);f.dispose(),console.log("Applying channel-list final classifier + argmax...");const Y=x.layers[b-1],ne=typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope,oe=yield NH(K,Y.getWeights()[0],Y.getWeights()[1],Y.strides,Y.padding,Y.dilationRate,a,ne);xe(K),R=oe.asType("int32"),oe.dispose(),console.log("Channel-list argmax output shape:",R.shape)}else{if(e.enableTTA){console.log("--- Running TTA Pass 1 (Original) ---");const Y=yield k(x,C,E,b,e,r,a);if(!Y)throw new Error("TTA Error: logits1 is null or undefined");console.log("--- Running TTA Pass 2 (Flipped) ---");const ne=e.ttaFlipAxis||1,oe=f.clone().reverse(ne).reshape(y),le=yield k(x,oe,E,b,e,r,a);if(!le)throw new Error("TTA Error: logits2 is null or undefined");console.log("--- Averaging TTA Results ---");const ae=z(()=>{const pe=le.shape;return le.reshape([pe[0]*pe[1],pe[2],pe[3],pe[4]]).reverse(ne).reshape(pe)});C=Y.add(ae).div(2),Y.dispose(),le.dispose(),ae.dispose(),f.dispose()}else C=yield k(x,C,E,b,e,r,a),f.dispose();if($){console.log("Applying SequentialConvLayer for final layer only (fast path for layers 1-18)...");const Y=yield new FH(x,10,w,a).apply(C);R=Y.asType("int32"),Y.dispose(),C.dispose(),console.log("SequentialConvLayer (final only) output shape:",R.shape)}else console.log("Applying final ArgMax..."),R=z(()=>{const Y=js(C,w?-1:1);return to(Y)}),C.dispose(),console.log("ArgMax output shape:",R.shape)}const D=((performance.now()-T)/1e3).toFixed(4);console.log(`---- Inference Time: ${D} seconds ----`),e.outputPermutation?(console.log(`Permuting Output: ${e.outputPermutation}`),R=R.transpose(e.outputPermutation)):d&&(console.log("outLabelVolume transposed"),R=R.transpose());const F=performance.now();if(g&&(g[0]||g[1]||g[2])){const K=R.shape,Y=[K[0]-g[0],K[1]-g[1],K[2]-g[2]],ne=R.slice([0,0,0],Y);R.dispose(),R=ne,console.log(`Removed padding: [${K}] -> [${R.shape}]`)}console.log("outLabelVolume without padding shape: ",R.shape),R=yield wH(R,m,h,e.outputShift),console.log("outLabelVolume final shape after restoration: ",R.shape);const _=((performance.now()-F)/1e3).toFixed(4);console.log(`---- Restoration Time: ${_} seconds ----`);const P=performance.now();let B;try{B=yield _H(R,l,e,n)}catch(K){throw a(K.message,-1,K.message),Zi(r,K,"Failed during segmentation post-processing"),a("",-1,"",r),R.dispose(),je().disposeVariables(),K}const H=((performance.now()-P)/1e3).toFixed(4);console.log(`---- Postprocessing Time: ${H} seconds ----`),R.dispose(),je().disposeVariables();const G=((performance.now()-c)/1e3).toFixed(4);console.log(`---- Total Execution Time: ${G} seconds ----`);const Q=new Set(B).size,J=e.numClasses||Q;return Yy(r,J,Q),Zy(r,D,H),a(e.modelName+"<br>Segmentation finished",0),a("",-1,"",r),i(B,n,e),0})}function ze(n="",e=-1,t="",s=[]){let o=[];Object.keys(s).length>0&&(o=function(){const i={};for(const a in s)i[a]=s[a];return JSON.stringify(i)}()),self.postMessage({cmd:"ui",message:n,progressFrac:e,modalMessage:t,statData:o})}function Ac(n,e,t){self.postMessage({cmd:"img",img:n,opts:e,modelEntry:t})}function BH(n,e,t,s,o,r,i,a,l,c,u){return X(this,null,function*(){if(a.No_SubVolumes=1,i.preModelId){const h=yield jy(l.rootURL+fp[i.preModelId-1].path),d=fp[i.preModelId-1].enableTranspose,p=fp[i.preModelId-1].enableQuantileNorm;let f=null;p?(console.log("preModel Quantile normalization enabled"),f=yield Xy(e)):(console.log("preModel Min Max normalization enabled"),f=yield Ky(e)),d?(f=f.transpose(),console.log("Input transposed for pre-model")):console.log("Transpose not enabled for pre-model"),a.Brainchop_Ver="PreModel_FV";const m=yield h;try{const g=performance.now(),x=m,b=x.layers[0].batchInputShape;if(console.log(" Pre-Model batch input shape : ",b),b.length!==5){const D="The pre-model input shape must be 5D ";return ze(D,-1,D),0}const w=yield Ec(x),y=l.batchSize,C=l.numOfChan;let $,v,k,N;if(w){if(console.log("Pre-Model Channel Last"),isNaN(b[4])||b[4]!==1){const D="The number of channels for pre-model input shape must be 1";return ze(D,-1,D),0}$=b[1],v=b[2],k=b[3],N=[y,$,v,k,C]}else{if(console.log("Pre-Model Channel First"),isNaN(b[1])||b[1]!==1){const D="The number of channels for pre-model input shape must be 1";return ze(D,-1,D),0}$=b[2],v=b[3],k=b[4],N=[y,C,$,v,k]}a.Input_Shape=JSON.stringify(N),a.Output_Shape=JSON.stringify(x.output.shape),a.Channel_Last=yield w,a.Model_Param=yield qy(x),a.Model_Layers=yield Hy(x);let T=0,I=1;const E=m.layers.length,R=[];for(R[0]=f.reshape(N),xe(f);;){try{R[I]=m.layers[I].apply(R[I-1])}catch(D){const F="Your graphics card (e.g. Intel) may not be compatible with WebGL. "+D.message;return ze(F,-1,F),je().endScope(),je().disposeVariables(),Zi(a,D,"PreModel Failed while model layer "+I+" apply"),ze("",-1,"",a),0}if(m.layers[I].dispose(),R[I-1].dispose(),ze("Layer "+I.toString(),(I+1)/E),ai().unreliable){const D="unreliable reasons :"+ai().reasons;ze(D,NaN,D)}if(I===E-1){const D=w?-1:1;console.log(" find argmax "),console.log("last Tensor shape : ",R[I].shape);const F=w?R[I].shape[4]:R[I].shape[1];let _;try{console.log(" Try tf.argMax for fullVolume .."),_=yield js(R[I],D)}catch(K){if(D===-1)try{const Y=performance.now();console.log(" tf.argMax failed .. try argMaxLarge .."),ze("",-1,"tensor2LightBuffer() is not dead code?"),ze("",-1,"argMaxLarge() is not dead code?"),console.log("argMaxLarge for fullVolume takes : ",((performance.now()-Y)/1e3).toFixed(4))}catch(Y){const ne="argMax buffer couldn't be created due to limited memory resources.";return ze(ne,-1,ne),_.dispose(),je().endScope(),je().disposeVariables(),a.Inference_t=1/0,a.Postprocess_t=1/0,a.Status="Fail",a.Error_Type=Y.message,a.Extra_Err_Info="preModel prediction_argmax from argMaxLarge failed",ze("",-1,"",a),0}else{const Y="argMax buffer couldn't be created due to limited memory resources.";return ze(Y,-1,Y),_.dispose(),je().endScope(),je().disposeVariables(),a.Inference_t=1/0,a.Postprocess_t=1/0,a.Status="Fail",a.Error_Type=K.message,a.Extra_Err_Info="preModel prediction_argmax from argMaxLarge not support yet channel first",ze("",-1,"",a),0}}console.log(" Pre-model prediction_argmax shape : ",_.shape);const P=((performance.now()-g)/1e3).toFixed(4);xe(R[I]),console.log(" Pre-model find array max ");const B=yield _.max().dataSync()[0];T<B&&(T=B);const H=T+1;console.log("Pre-model numSegClasses",H),Yy(a,F,H);let G=yield _.reshape([t,s,o]);xe(_),d&&(console.log("Pre-model outLabelVolume transposed"),G=G.transpose());const Z=performance.now();console.log("Generating pre-model output");let Q;try{const K=yield bs(G);Q=yield RH(K,t,s,o,i,l,c,u,!1),yield xe(G),console.log(" Phase-1 num of tensors after generateBrainMask: ",ai().numTensors)}catch(K){je().endScope(),je().disposeVariables();const Y="Failed while generating pre-model output due to limited browser memory available";return ze(Y,-1,Y),a.Inference_t=P,Zi(a,K,"Pre-model failed while generating output"),a.Inference_t=P,ze("",-1,"",a),0}const J=((performance.now()-Z)/1e3).toFixed(4);if(console.log("Pre-model processing the whole brain volume in tfjs tooks for multi-class output mask : ",((performance.now()-g)/1e3).toFixed(4)+"  Seconds"),Zy(a,P,J),ze("",-1,"",a),Q==null){const K="slice_3d_mask failed ...";return ze(K,-1,K),0}else{if(console.log("--- pre-model done ---"),r)return yield Rc(l,i,n,e,Q,a,Ac,ze,u),0;ze("",-1,"inferenceSubVolumes() is not dead code?")}}I++}}catch(g){ze(g.message,-1,g.message),console.log('If webgl context is lost, try to restore webgl context by visit the link <a href="https://support.biodigital.com/hc/en-us/articles/218322977-How-to-turn-on-WebGL-in-my-browser">here</a>')}}else console.log("--- No pre-model is selected ---"),console.log("------ Run voxel cropping ------"),r?yield Rc(l,i,n,e,null,a,Ac,ze,u):ze("",-1,"inferenceSubVolumes() is not dead code?")})}function zH(n=!0){return X(this,null,function*(){Uw("webgl"),yield Ww(),U().set("DEBUG",!1),U().set("WEBGL_FORCE_F16_TEXTURES",n),U().set("WEBGL_DELETE_TEXTURE_THRESHOLD",-1),U().set("WEBGL_FLUSH_THRESHOLD",1),yield Gw(),console.log("tf env() flags :",U().flags),console.log("tf env() features :",U().features),console.log("tf env total features: ",Object.keys(U().features).length),console.log("tf backend: ",Gu())})}function VH(n,e,t,s){return X(this,null,function*(){const o=e.enableSeqConv?gp.WEBGL_SEQUENTIAL:gp.WEBGL_WEBWORKER,r=LH(e,o);ze("Segmentation started",0);const i=n.batchSize,a=n.numOfChan;if(isNaN(i)||i!==1){const $="The batch Size for input shape must be 1";return ze($,-1,$),0}if(isNaN(a)||a!==1){const $="The number of channels for input shape must be 1";return ze($,-1,$),0}je().startScope(),console.log("Batch size: ",i),console.log("Num of Channels: ",a);const l=yield jy(n.rootURL+e.path),c=!e.forceFP32;yield zH(c);try{const $=U();console.log(`[fp16 check] backend=${Gu()} | requested useF16=${c} (modelEntry.forceFP32=${!!e.forceFP32}) | WEBGL_FORCE_F16_TEXTURES=${$.getBool("WEBGL_FORCE_F16_TEXTURES")} | WEBGL_RENDER_FLOAT32_ENABLED=${$.getBool("WEBGL_RENDER_FLOAT32_ENABLED")} | WEBGL_RENDER_FLOAT32_CAPABLE=${$.getBool("WEBGL_RENDER_FLOAT32_CAPABLE")}`)}catch($){console.warn("[fp16 check] could not read WebGL flags",$)}r.TF_Backend=Gu();const u=l;yield MH(r,u,u.layers[0].batchInputShape,yield Ec(u),qy,Hy);let h=[];if(h=u.layers[0].batchInputShape,console.log(" Model batch input shape : ",h),h.length!==5){const $="The model input shape must be 5D";return ze($,-1,$),0}let d,p,f;const m=t.dims[1],g=t.dims[2],x=t.dims[3];if(yield Ec(u)){if(console.log("Model Channel Last"),isNaN(h[4])||h[4]!==1){const $="The number of channels for input shape must be 1";return ze($,-1,$),0}d=h[1],p=h[2],f=h[3]}else{if(console.log("Model Channel First"),isNaN(h[1])||h[1]!==1){const $="The number of channels for input shape must be 1";return ze($,-1,$),0}d=h[2],p=h[3],f=h[4]}let w;d===256&&p===256&&f===256?w=!0:w=!1,r.isModelFullVol=w;let y=yield AH(x,t,s);e.enableTranspose;const C=e.enableCrop;w&&(C?yield BH(l,y,x,g,m,w,e,r,n,t,s):(console.log("Cropping Disabled"),e.enableSeqConv?yield Rc(n,e,l,y,null,r,Ac,ze,s):yield Rc(n,e,l,y,null,r,Ac,ze,s))),je().endScope()})}self.addEventListener("message",function(n){VH(n.data.opts,n.data.modelEntry,n.data.niftiHeader,n.data.niftiImage)},!1)})();
