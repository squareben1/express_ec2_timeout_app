const express = require("express");
const app = express();
const port = 3000;

const delayMs = 370000;

app.get("/", (req, res) => {
  console.log("Hello");
  setTimeout(() => {
    res.send(
      `
      <style>
        h1 {
          margin: 0;
          position: absolute;
          top: 50%;
          left: 50%;
          -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
        }
      </style>
      <h1>Hello World! Delayed by ${delayMs / 1000} seconds (${delayMs}ms)</h1>`
    );
  }, delayMs);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// var server = app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });

// server.keepAliveTimeout = 30000;

// ---------------------------------------------

// sudo sysctl -w \
// net.ipv4.tcp_keepalive_time=10 \
// net.ipv4.tcp_keepalive_intvl=3 \
// net.ipv4.tcp_keepalive_probes=20

// net.ipv4.tcp_keepalive_intvl=3 \
// net.ipv4.tcp_keepalive_probes=10

// tcpdump -i eth0 -n 'port ! 22'
// wireshark filter: tcp.analysis.keep_alive


// server.keepAliveTimeout#
// Added in: v8.0.0
// <number> Timeout in milliseconds. Default: 5000 (5 seconds).
// The number of milliseconds of inactivity a server needs to wait for additional incoming data, after it has finished writing the last response, before a socket will be destroyed. If the server receives new data before the keep-alive timeout has fired, it will reset the regular inactivity timeout, i.e., server.timeout.

// A value of 0 will disable the keep-alive timeout behavior on incoming connections. A value of 0 makes the http server behave similarly to Node.js versions prior to 8.0.0, which did not have a keep-alive timeout.

// The socket timeout logic is set up on connection, so changing this value only affects new connections to the server, not any existing connections.