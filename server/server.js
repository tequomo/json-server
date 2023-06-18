const jsonServer = require('json-server');
const { initDatabase } = require('./database/database');
const { initCustomRoutes } = require('./routes/routes');

const PORT = 3000;

const server = jsonServer.create();
// const router = jsonServer.router(initDatabase());
const router = jsonServer.router('quests.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(jsonServer.bodyParser);

initCustomRoutes(server);

server.use(router);

server.listen(PORT, () => {
  console.log('JSON Server is running');
});
