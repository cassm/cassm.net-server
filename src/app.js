require ('dotenv').config();

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const formDataRouter = require('../routes/formdata');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, '../../', 'cassm.net-client', 'build')));
app.use('/formdata', formDataRouter);

// pass everything that isn't a static file request or an api request to react for routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../', 'cassm.net-client', 'build', 'index.html'));
})

module.exports = app;
