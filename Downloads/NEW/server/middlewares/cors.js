const cors = require('cors');

module.exports = function(app) {
  const corsOptions = {
    origin: 'http://your-frontend-app.com',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  };
  
  app.use(cors(corsOptions));
};
