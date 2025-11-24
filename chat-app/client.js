const net = require("net");

const client = net.createConnection({ host: "127.0.0.1", port: 3008 }, () => {
  console.log("Connected to the server!");
});

// client.on("close", () => {
//   console.log("Closed");
// });

client.on("end", () => {
  console.log("Connection was ended!!");
});

//client ---> is a stream
//To understand the behavour of the how 'close' and
//'end' event works it is same like streams
