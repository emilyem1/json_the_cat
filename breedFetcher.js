const request = require('request'); // import request module

const fetchBreedDescription = function(breedName, callback) {
  // callback = (error, description)
  request.get(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => { // search for command line breedName
    if (error) {
      callback(error, null); // description = null
    } else {
      const data = JSON.parse(body); // turn json string into object
      if (data.length === 0) { // if no data is found
        callback(null, "Breed not found, please enter valid breed name.");
        // error = null
      } else {
        callback(null, data[0].description); // logs description of specific cat
        // error = null
      }
    }
  });
};

module.exports = { fetchBreedDescription };