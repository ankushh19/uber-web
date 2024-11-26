import http from "http"
const app = require('./app');
const dotenv = require('dotenv');
dotenv.config()

const server = http.createServer(app);

server.listen(3000);