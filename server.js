// import * as https from 'https';

import fs from 'fs';
let https;
try {
  https = await import('node:https');
} catch (err) {
  console.error('https support is disabled!');
}

import app from "./app.js";

import cluster from "cluster";


const PORT = process.env.PORT || 9000;

cluster.schedulingPolicy = cluster.SCHED_RR;

const server = https.createServer({
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem'),
}, app);

async function startServer() {

  // app.listen();
  server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`)
  });
}

startServer();