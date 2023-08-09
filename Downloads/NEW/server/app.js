require('dotenv').config()

const express = require('express');
const cookieSession = require("cookie-session");
const authRoutes = require('./routes/auth');
const usersRoutes = require('./routes/users');

// Configurations
const connectToDb = require('./config/db');

// Middlewares
const applyMiddlewares = require('./middlewares');

const app = express();
const port = process.env.PORT || 3000;

// Initialize Sentry before other middlewares and routes
const { init: initSentry } = require('./config/sentry');
initSentry(app); 

// connect to db
connectToDb();

// Middlewares
applyMiddlewares(app);

// Routes
app.use('/users', usersRoutes);
app.use('/auth', authRoutes);

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).json({ message: err.message, stack: err.stack });
});

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: "glamplan",
    keys: [process.env.SECRET_KEY], // should use as secret environment variable
    httpOnly: true
  })
);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
