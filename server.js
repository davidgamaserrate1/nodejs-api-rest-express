const http = require("http")
const port = 3000;



const rotes =
{
    '/':'Node Course',
    '/books':'Book page',
    '/author':'list of authors',
}
    

const server =http.createServer((req, res)=> {
    res.writeHead(200, {'Content-Type':'text/plain'})
    res.end(rotes[req.url]);
})

server.listen(port, ()=>{
    console.log(`Server listening on port http://localhost:${port}` )
})