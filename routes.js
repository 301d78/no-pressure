
// handler functions
function handleGetAbout(req, res) {
  res.send('Hi from about');
}

function handleGetHome(request, response) {
  console.log('You called? I am a GET at home route');
  response.status(200).send('Hi hello haha');
}

module.exports = { handleGetHome, handleGetAbout };

// module.exports = { handleGetHome: handleGetHome, handleGetAbout: handleGetAbout };