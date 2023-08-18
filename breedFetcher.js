const request = require('request'); // import request module
const breedName = process.argv[2]; // get breed from command line

if (!breedName) { // if nothing is input into command line
  console.log('Please provide a breed name as a command-line argument.');
  process.exit(); // Exit so it doesn't also print line 16
}

// Get request
request.get(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => { // make the search breedName
  const data = JSON.parse(body); // turn json string into object
  if (error) {
    console.error('Error:', error);
  }
  if (data.length === 0) { // if there is no data found on breed
    console.log("Breed not found, please enter valid breed name.");
  } else {
    console.log(data[0].description); // logs description of specific cat
  }
});


