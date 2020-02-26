'use strict';

const serverless = require('serverless-http');
const express = require('express')
const app = express();

app.get('/tasks', function (req, res) {
  res.json({
    message: 'You got the API to work!'
  })
})

module.exports.tasks = serverless(app);

// module.exports.task => async event => {
//   return {
//     statusCode: 200,
//     body: JSON.stringify(
//      {
//        message: 'This API works'
//      },
//      null,
//      2
//     ),
//   };
// }