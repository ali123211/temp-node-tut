const http = require('http')

const server = http.createServer((req, res) => {
//req objecta represent incoming request  and response wat i send back
//console.log(req);
// dway away refreshm krd chunka chaware request dakat 
// awa objectyke zor gawra la zanyare dagarynytawa

if (req.url ==='/') {
    res.end('it is home page')
}

if (req.url === '/about') {
         res.end('Here is our short history')
       }

       res.end(`
       <h1>Oops!</h1>
     <p>We can't seem to find the page you are looking for</p>
     <a href="/">back home</a>
       `)  



})

server.listen(3000) 