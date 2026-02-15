const http = require('http')


http.createServer( 
    (req , res) =>{
        if(req.url === '/'){
            res.end('Home Page')
        }else if(req.url === '/about'){
            res.end('About Page')
        }else if(req.url === '/contact'){
            res.end('Contact Page');
        }else{
            res.end('Resource not found')
        }
      
    }
).listen(3000,()=>console.log('Listening at port 3000'))
