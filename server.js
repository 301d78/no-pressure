'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');


const app = express();

app.use(cors());

app.listen(3000, () => console.log('Listening'));

