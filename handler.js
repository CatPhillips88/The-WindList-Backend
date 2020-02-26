'use strict';

const serverless = require('serverless-http');
const express = require('express')
const app = express();
const uuidv4 = require('uuid/v4');

app.get('/tasks', function (req, res) {
  const taskItems = [
    {
      id: uuidv4(),
      content: 'buy travel insurance',
      completed: false
    },
    {
      id: uuidv4(),
      content: 'train to gatwick @ 5am',
      completed: false
    },
    {
      id: uuidv4(),
      content: 'don\'t forget passport!',
      completed: true
    }
  ]

  res.json({
    tasks: taskItems
  });
});



module.exports.tasks = serverless(app);

