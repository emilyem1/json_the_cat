// index.js
const {fetchBreedDescription}  = require('./breedFetcher');

const breedName = process.argv[2];

if (!breedName) { // if nothing is input into command line
  console.log('Please provide a breed name as a command-line argument.');
  process.exit(); // Exit so it doesn't also print 'breed not found'
}

// Call the function
fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});