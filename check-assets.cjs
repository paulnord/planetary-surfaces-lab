const fs=require('node:fs');
const path=require('node:path');
const assert=require('node:assert/strict');
const root=path.join(__dirname,'dist');
const images=JSON.parse(fs.readFileSync(path.join(root,'catalog.json'),'utf8'));
assert.equal(new Set(images.map(image=>image.id)).size,images.length,'Duplicate image IDs');
for(const image of images){
  assert(image.width>0&&image.height>0,`Missing dimensions: ${image.id}`);
  for(const key of ['src','thumb']){
    assert(image[key].startsWith('assets/')&&!image[key].includes('..'),'Invalid asset path');
    assert(fs.statSync(path.join(root,image[key])).size>0,`Empty asset: ${image[key]}`);
  }
  if(image.collection==='modern')assert(image.credit&&image.source.startsWith('https://')&&image.date);
}
for(const file of ['index.html','style.css','app.js','original-lab.pdf'])assert(fs.statSync(path.join(root,file)).size>0);
console.log(`Validated ${images.length} image records, local assets, and handout.`);
