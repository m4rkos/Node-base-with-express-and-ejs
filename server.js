const app = require('./src/routes');

const server = require("http").createServer(app);
const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});