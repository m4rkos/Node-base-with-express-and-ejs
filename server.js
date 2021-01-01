const dotenv = require('dotenv');
dotenv.config();

const app = require('./src/app');
const server = require("http").createServer(app);

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});