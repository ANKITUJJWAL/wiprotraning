const http = require('http')


http.createServer( 
    (req , res) =>{
        
        if(req.url === '/'){
           res.writeHead(200, {'content-type': 'text/html'})
           res.write('<h1>Home Page</h1>')
           res.end();
        }else if(req.url === '/about'){
            // res.end('About Page')
            res.writeHead(200, {'content-type': 'text/plain'})
            res.write('About Page')
            res.end();
        }else if(req.url === '/contact'){
            // res.end('Contact Page');
            res.writeHead(200, {'content-type': 'text/xml'})
            res.write('<h1>Contact Page</h1>')
            res.end();
        }else{
            // res.end('Resource not found')
            res.writeHead(200, {'content-type': 'text/html'})
            res.write('<h1>Resource Not Found</h1>')
            res.end();
        }
      
    }
).listen(3000,()=>console.log('Listening at port 3000'))
