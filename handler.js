'use strict';

const serverless = require('serverless-http');
const express = require('express');
const app = express();
app.use(express.json());
const uuidv4 = require('uuid/v4');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_SCHEMA
});

// RETRIEVE TASKS
app.get('/tasks', function (req, res) {
  
  connection.query('SELECT * FROM `tasks` WHERE `user_id` = 1', function (error, results, fields) {
    // error will be an Error if one occurred during the query
    if(error) {
      console.error("It is not possible to fetch tasks...try again!", error);
      res.status(500).json({errorMessage: error});
    }
    else {
      // Query was successful
      res.json({tasks: results});
    }
    // results will contain the results of the query
    // fields will contain information about the returned results fields (if any)
  });
});

// CREATE TASKS
app.post('/tasks', function (req, res) {

// Accept infomation from client about what task is being created

 const insertTask = req.body;

// Take this information and pre-populate a SQL insert statement

// Execute the statement

// Return to client information about the task that has been created









  res.json({
    message: 'Your POST works',
    taskSaved: insertTask
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

