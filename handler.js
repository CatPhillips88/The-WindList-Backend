'use strict';

const serverless = require('serverless-http');
const express = require('express')
const app = express();

app.get('/tasks', function (req, res) {
  res.send('Hi Cat! This is a test!');
})

module.exports.tasks = serverless(app);

