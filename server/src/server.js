const http = require('http');

const app = require('./app');
const {loadPlanetsData} = require('./model/planet.model')

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function runServer() {
  await loadPlanetsData();

  server.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
  })
}

runServer();
