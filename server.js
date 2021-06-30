const express = require('express') 
const app = express() 
const cors = require('cors');
app.use(cors()) 
const axios = require('axios'); 
require('dotenv').config();
const PORT = process.env.PORT;
const MOVIES_API_KEY=process.env.MOVIES_API_KEY;
const Weathercontroller =require('./Controllers/Weather.controller')
const Moviescontroller =require('./Controllers/Movies.controller')



app.get('/', (req, res) => {res.send('Hello World')})
app.get('/weather',Weathercontroller);
app.get('/movies',Moviescontroller);
app.listen(PORT, () => {console.log('started server on port 8000')}) 