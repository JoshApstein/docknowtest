const Hapi = require('hapi');
const bodyParser = require('body-parser');
const server = new Hapi.Server();

server.connection({ port: process.env.PORT || 3000, host: 'localhost' });

server.start((err) => {
  if (err) {
    throw err;
  }
  console.log("Server Connected");
});
require('./controllers/offerController')(server);
