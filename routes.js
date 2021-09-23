
// handler functions
function handleGetAbout(req, res) {
  res.send('Hi from about');
}

function handleGetHome(request, response) {
  console.log('You called? I am a GET at home route');
  response.status(200).send('Hi hello haha');
}


// https://api.themoviedb.org/3/search/company?api_key=c2e3548add0404c53d3495c808f1e0f4&query=city&page=1
function handleGetMovies(req, res) {
  res.send('Coming soon');
}



module.exports = { handleGetHome, handleGetAbout, handleGetMovies };

// module.exports = { handleGetHome: handleGetHome, handleGetAbout: handleGetAbout };