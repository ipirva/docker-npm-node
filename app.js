const Hapi = require('hapi');
const os = require('os');

const server = new Hapi.Server({ port: process.env.PORT || 3000 });

server.route({
  method: 'GET',
  path:'/',
  options: {
    handler: async (req, h) => {
       let obj = {
         hostname: os.hostname(),
         uptime: os.uptime(),
       }
       return obj;
    }
  }
});

server.start((err) => {
  if (err) {
    throw err;
  }

  console.log('Server running at:', server.info.uri);
});
