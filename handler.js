'use strict';

const serverless = require('serverless-http');
const express = require('express');
const app = express();
const uuidv4 = require('uuid/v4');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'example.org',
  user     : 'bob',
  password : 'secret',
  database : 'my_db'
});

// RETRIEVE TASKS
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

// CREATING TASKS
app.post('/tasks', function (req, res) {
  res.json({
    message: 'Your POST works'
  });
});

// UPDATING TASKS
app.put('/tasks/:id', function (req, res) {
  res.json({
    message: 'Your PUT works',
  });
});

// DELETING TASKS
app.delete('/tasks/:id', function (req, res) {
  res.json({
    message: 'Your DELETE works',
  });
});




module.exports.tasks = serverless(app);

