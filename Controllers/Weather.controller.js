const ForeCast = require("../Models/ForeCast.model");
const PORT = process.env.PORT;
const MOVIES_API_KEY=process.env.MOVIES_API_KEY;
const axios = require('axios');


const weatherController=('/weather', (req, res) => {
    let weather;
    let lat = req.query.lat
    let lon = req.query.lon
  
    let url = `http://api.weatherbit.io/v2.0/forecast/daily?key=${process.env.WEATHER_BIT_API}&lat=${lat}&lon=${lon}`
    let weatherBitResp = axios.get(url).then(response => {
      // res.json(response.data);
      weather = response.data
  
      let forecastArr = weather.data.map((item, index) => {
        return new ForeCast(item)
      });
      res.json(forecastArr)
    }).catch(error=>res.send({message:error.message}));
  });

  module.exports=weatherController

