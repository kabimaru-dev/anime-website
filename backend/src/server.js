import { createServer } from 'node:http';

const hostname = '127.0.0.1';
const port = 3000;
const baseUrl = "https://api.jikan.moe/v4";

const server = createServer(async (req, res) => {
  console.log('request:', req.url);
  if (req.url === '/') {
    const response = await fetch(`${baseUrl}/top/anime`);

    const obj = await response.json();
    // for(let i = 0; i < json.data.length; i++){
      
    //   console.log(`${i} + ${json.data[i].popularity}`);

    //   console.log(json.data[i].title);
    // }

    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(obj.data));

    return;
  }

  


  // console.log(data[0])
  // res.statusCode = 200;
  // res.setHeader('Content-Type', 'text/plain');
  // res.end('Hello World');

  // if (req.method === 'GET') {
  //   res.end('GET request');
  //   return;
  // }

  // if (req.method === 'POST') {
  //   res.end('POST request');
  //   return;
  // }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});