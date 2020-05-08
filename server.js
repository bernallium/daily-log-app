const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

require('dotenv').config();
require('./config/database');

const usersRouter = require('./routes/api/users');
const taskRouter = require('./routes/api/tasks');
const noteRouter = require('./routes/api/notes')

const app = express();

app.use(logger('dev'));
app.use(express.json()); // Processes JSON data sent in the AJAX request and adds it to the req.body:

// Configure both serve-favicon & static middlewares
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// Put API routes here, before the "catch all" route
// app.use('/api/scores', require('./routes/api/scores'));
app.use('/api/users', usersRouter);
app.use('/api/tasks', taskRouter);
app.use('/api/notes', noteRouter);

// The following "catch all" route (note the *)is necessary
// for a SPA's client-side routing to properly work 
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Configure to use port 3001 instead of 3000 during development to avoid collision with React's dev server 
// React's dev server can continue to use 3000)
const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});