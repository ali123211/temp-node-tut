const os = require('os')
// os komala shtyke tyaya .

// info abou current user  who i am in pc 

const user = os.userInfo()
console.log(user);

// method retutn the system uptime in seconds  wabzanm wata
// cahnd kare pye krdwa 

console.log(os.uptime());


const currentOs = {
name:os.type(),
release:os.release(),
totalMem:os.totalmem(),
freeMem:os.freemem(),

}

console.log(currentOs);