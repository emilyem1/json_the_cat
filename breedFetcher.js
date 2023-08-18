const request = require('request'); // import request module

// Simple get request
request.get('https://api.thecatapi.com/v1/breeds/search?q=sib', (error, response, body) => {
  if (error) { 
    console.error('Error:', error);
} else {
    const data = JSON.parse(body); // turn json string into object
    console.log(data); // now an object
    console.log(typeof data); // confirms object 
}
});


