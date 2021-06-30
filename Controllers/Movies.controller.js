const Movies = require("../Models/Movies.model");
const PORT = process.env.PORT;
const MOVIES_API_KEY=process.env.MOVIES_API_KEY;
const axios = require('axios');



const moviesController=('/movies', (req, res) => {
    let movies;
    let query = req.query.query
  
    let moviesUrl = `https://api.themoviedb.org/3/search/movie?api_key=${MOVIES_API_KEY}&query=${query}`
    let moviesResp = axios.get(moviesUrl).then(response => {
      movies = response.data.results;
  
      let callMovies = movies.map(el => {
        return new Movies(el);
      });
  
      res.json(callMovies);
      
    }).catch(error=>res.send({message:error.message}));
  });

  module.exports=moviesController