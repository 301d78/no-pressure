'use strict';

// imports
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');

// globals
const PORT = process.env.PORT;
const app = express();


// middleware
app.use(cors());



// routes
app.get('/', (request, response) => {
  console.log('You called? I am a GET at home route');
  response.status(200).send('Hi hello haha');

});



// listen
app.listen(PORT, () => console.log('Listening on PORT ' + PORT));

