const axios = require('axios');

// handler functions
function handleGetAbout(req, res) {
  res.send('Hi from about');
}

function handleGetHome(request, response) {
  console.log('You called? I am a GET at home route');
  response.status(200).send('Hi hello haha');
}


async function handleGetMovies(req, res) {
  const { searchQuery } = req.query;
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&query=${searchQuery}&page=1`
  const moviesResponse = await axios.get(url);
  


  res.send(moviesResponse.data.results);
}



module.exports = { handleGetHome, handleGetAbout, handleGetMovies };

// module.exports = { handleGetHome: handleGetHome, handleGetAbout: handleGetAbout };