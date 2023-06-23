const express = require('express');
const path = require('path');
// const cors = require('cors');
const db = require('./models/model.js')
const loginRouter = require('./routes/login');
const PORT = 8888;

// creating server
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/authorize', loginRouter);

// catchall
app.use('*', (req, res) => res.status(404).send('This page does not exist! ):'));

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express global error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  return res.status(errorObj.status).json(errorObj.message);
});

// start server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
});

module.export = app;