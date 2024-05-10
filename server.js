const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const userrouter = require('./Routes/userrouter.js');
const cookieParser = require('cookie-parser');

// LOAD ENVIRONMENT VARIABLES FROM .ENV FILE
dotenv.config();

// CREATING EXPRESS APP
const app = express();


// MIDDLEWARE
app.use(bodyParser.json());



// LOGGER MIDDLEWARE
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});
app.use (cookieParser())

app.use('api/v1/users', userrouter)


app.use(errorHandler);

app.listen(3000)

// STARTING THE SERVER
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.info(`Server listening on port ${PORT}`);
});