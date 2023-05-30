import http from 'http'
import * as ad from './feature.js'
console.log(ad.x)
const server = http.createServer((req,res)=>{
    const url = req.url
    console.log('servered')
    if(url === '/about'){

        res.end('<h1>About</h1>')
    }else if(url === '/'){
        res.end('<h1>Home</h1>')


    }
    else if(url === '/contact'){
        res.end('<h1>contact</h1>')


    }
})
server.listen(5000,()=>{
  console.log('Server is working')
})