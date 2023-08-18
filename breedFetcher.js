const request = require('request'); // import request module

// Simple get request
request.get('https://api.thecatapi.com/v1/breeds/search?q=sib', (error, response, body) => {
  if (error) { 
    console.error('Error:', error);
} else {
    console.log('Body:', body); // object containing details of sib cat
    console.log(typeof body) // it's a string
}
});


