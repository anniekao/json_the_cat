const request = require('request');
const breed = process.argv[2];

request('https://api.thecatapi.com/v1/breeds/search?q=' + breed, (err, response, body) => {
  if (!err) {
    const breedInfo = JSON.parse(body);
    const description = breedInfo.length !== 0 ? breedInfo[0].description : 'Breed not found';

    if (response.statusCode < 200 && response.statusCode > 200) {
      console.log('Error', response.statusCode);
    }  else {
      console.log(description);
    }
  } else {
    console.log(err);
  }
});