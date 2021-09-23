'use strict';


// imports
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
// const { handleGetHome, handleGetAbout } = require('./routes.js');
const handlerFunctions = require('./routes.js');

// globals
const PORT = process.env.PORT;
const app = express();


// middleware
app.use(cors());



// routes
app.get('/', handlerFunctions.handleGetHome);

app.get('/about', handlerFunctions.handleGetAbout);

app.get('/movies', handlerFunctions.handleGetMovies);



// listen
app.listen(PORT, () => console.log('Listening on PORT ' + PORT));

