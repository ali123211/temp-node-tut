const patch  =require('path')

console.log(patch.sep);


// get file path 
const filePath = patch.join('/content ' , 'subfolder' , 'test.txt')
console.log(filePath);


const base = patch.basename(filePath)
console.log(base);


// get absolte path wata pathaka ba tawawe
const absolute  = patch.resolve(__dirname , 'content' , 'subfolder' , 'test.txt')
console.log(absolute);