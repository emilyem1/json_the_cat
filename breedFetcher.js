const request = require('request'); // import request module
const breedName = process.argv[2]; // get breed from command line
// turn direct url into 'url' to clean up code 
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`

if (!breedName) { // if nothing is input into command line
  console.log('Please provide a breed name as a command-line argument.');
  process.exit(); // Exit so it doesn't also print line 17
};

const fetchBreedDescription = function(breedName, callback) {
    request.get(url, (error, response, body) => { 
    if (error) {
      console.log('Error', error)
    } else {
      const data = JSON.parse(body); // turn json string into object
      if (data.length === 0) { // if no data is found 
        console.log("Breed not found, please enter valid breed name.");
      } else {
          console.log(data[0].description); // logs description of specific cat
      }
    }
  });
};

// Call the function using breedName and then defining a callback function
fetchBreedDescription(breedName, (error, description) => {
  if (error) {
    console.log('Error:', error);
  } else {
    console.log(description);
  }
});

module.exports = { fetchBreedDescription };