const http = require('http');




http.createServer( 
    (req , res) =>{
        res.end('Hello World!');
    }
).listen(3000,()=>console.log('Listening at port 3000'))






//http://localhost:3000/


//Note: control + c to stop the server
