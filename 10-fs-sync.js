const {readFileSync , writeFileSync}=require('fs')
console.log("start");
const first  = readFileSync('./content/first.txt' , 'utf-8')

const second  = readFileSync('./content/second.txt' , 'utf-8')

console.log(first , second);

// gar filaka bune nabyet filaka drwst dakat dwatr nusenaka 
// danyret 

writeFileSync('./content/result-sync.txt' , 
`here is result ${first} , ${second} ` , 
{flag: 'a'}
// flag bo awaya gar bmawet over write datakan bkret zeatr la jaryk byet
)


console.log("done");
console.log("anotherone");
