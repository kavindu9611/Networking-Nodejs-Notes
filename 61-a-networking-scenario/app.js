const http = require("http");

const port = 4080;

const server = http.createServer((req, res) => {
  const data = { message: "Hi there!" };

  res.setHeader("Content-Type", "application/json");
  res.setHeader("Connection", "close");
  res.statusCode = 200;
  res.end(JSON.stringify(data));
});

//127.0.0.1 --> host -->Which interface on my machine
//i want to run my application
server.listen(port, "127.0.0.1", () => {
  console.log(`Server running on port ${port}`);
});

//Output of above code
//Server running on port 4080 --->This means that my machine right now is sending some
//amount of information on this port on localhost or on its loopback ip address
