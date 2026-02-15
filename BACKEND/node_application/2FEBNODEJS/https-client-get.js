const https = require('https');

https.get('https://jsonplaceholder.typicode.com/users', (res) => {
 /*This variable will store all incoming pieces of the response 
because data comes in parts/chunks */
  let data = '';

  /*Every time server sends a piece of data:
Node fires "data" event
chunk contains partial response
You append it to data
"data" is a built-in event emitted by Readable Streams whenever a chunk of data becomes available. 

So "data" is coming from Node’s Stream API, not something you created

*/
  res.on('data', chunk => data += chunk);

  // When response ends
  res.on('end', () => {
    console.log('Response received:');
   //Converts JSON string → JavaScript object
    console.log(JSON.parse(data));
  });
}).on('error', (err) => {
  console.error('Error:', err.message);
});
