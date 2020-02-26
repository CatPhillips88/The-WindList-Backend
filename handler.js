'use strict';

const serverless = require('serverless-http');
const express = require('express')
const app = express();
const uuid4 = require('uuid/v4');

app.get('/tasks', function (req, res) {
  res.json({
    message: 'You got the API to work!'
  })
})



module.exports.tasks = serverless(app);

