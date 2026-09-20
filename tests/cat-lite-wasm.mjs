import assert from 'node:assert/strict';
import { applyCatLitePartialVolume } from '../cat-lite.js';
import { tryCatLiteWasm } from '../cat-lite-wasm.js';
const shape=[32,32,32],n=32**3;
const options={catLitePurePriorPower:3,catLitePriorStrength:.8,catLiteIntensityStrength:.75,
  catLiteMixelPrior:.35,catLiteCsfWmMixelPrior:6,catLiteSpatialWeight:.25,
  catLiteMinSupport:.03,catLiteSigmaFloor:.025,catLiteBiasBlockSize:16,catLiteBiasSmoothPasses:3};
const cases=[
  ['normal',()=>{}],['scaled',(p,i)=>{p[3][i]=.7*p[3][i]+.1;}],
  ['reversed',(p,i)=>{p[3][i]=1-p[3][i];}],['flat',(p,i)=>{p[3][i]=.5;}],
  ['empty',(p,i)=>{p[0][i]=p[1][i]=p[2][i]=0;}],
  ['nonfinite intensity',(p,i)=>{if(i%101===0)p[3][i]=NaN;}],
  ['support ties',(p,i,x,y)=>{if(y===15||y===16)p[0][i]=p[1][i]=p[2][i]=0;}],
  ['islands',(p,i,x,y,z)=>{if(x===15||y===15||z===15)p[0][i]=p[1][i]=p[2][i]=0;}],
];
for(const[name,edit]of cases){
  const p=Array.from({length:4},()=>new Float32Array(n));
  for(let z=0;z<32;z++)for(let y=0;y<32;y++)for(let x=0;x<32;x++){
    const i=x+y*32+z*1024,t=x<11?2:x<22?0:1;
    for(let k=0;k<3;k++)p[k][i]=k===t?.82:.06;
    p[3][i]=[.5,.8,.2][t]+.03*Math.sin(x*.4+y*.2+z*.1);edit(p,i,x,y,z);
  }
  const expected=applyCatLitePartialVolume(p.slice(0,3).map(x=>x.slice()),p[3],shape,options);
  const actual=await tryCatLiteWasm(p.slice(0,3),p[3],shape,options);
  assert(actual,`${name}: wasm must actually run`);
  assert.equal(actual.stats.applied,expected.stats.applied,name);
  if(actual.stats.applied){
    assert.deepEqual(actual.stats.supportCleanup,expected.stats.supportCleanup,name);
    for(const field of ['tissueMeans','tissueSigmas'])for(const t of ['csf','gray','white'])
      assert(Math.abs(actual.stats[field][t]-expected.stats[field][t])<=2**-24,`${name}: ${field}.${t}`);
  }else assert.equal(actual.stats.reason,expected.stats.reason,name);
  let worst=0;
  for(let t=0;t<3;t++)for(let i=0;i<n;i++){
    assert(Number.isFinite(actual.tissues[t][i]),name);
    worst=Math.max(worst,Math.abs(actual.tissues[t][i]-expected.tissues[t][i]));
  }
  assert(worst<=2**-24,`${name}: ${worst}`);
  console.log(`${name}: max=${worst}, applied=${actual.stats.applied}`);
}
const original=[0,1,2].map(()=>new Float32Array(n).fill(.1)),intensity=new Float32Array(n).fill(.5);
assert.equal(await tryCatLiteWasm(original,intensity,shape,{catLitePriorStrength:.5}),null);
for(const v of original)assert(v.every(x=>x===Math.fround(.1)));
assert.equal(await tryCatLiteWasm(original,intensity,[1,32,32]),null);
console.log('CAT-lite wasm: reference numerics, diagnostics and custom-option fallback PASS');
