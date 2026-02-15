
// const https = require('https');

// const data = JSON.stringify({
//   title: 'Hello HTTPS',
//   body: 'This is a secure POST request',
//   userId: 1
// });

// //Request Headers
// const options = {
//   hostname: 'jsonplaceholder.typicode.com',
//   path: '/posts',
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'Content-Length': data.length
//   }
// };

// // Instead of https.request() we can also use https.post()
// const req = https.request(options, (res) => {
//   let body = '';
//   res.on('data', (chunk) => body += chunk);
//   res.on('end', () => console.log('Response:', body));
// });

// req.on('error', (err) => console.error('Error:', err.message));
// req.write(data);
// req.end();


// rewiriting without using https module
// import https from "https"

async function createPost() {
  try {
    const payload = {
      title: "Hello HTTPS",
      body: "This is a secure POST request",
      userId: 1
    };

    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }

    const result = await res.json();
    console.log("Response:", result);

  } catch (err) {
    console.error("Error:", err.message);
  }
}

// Call function
createPost();



