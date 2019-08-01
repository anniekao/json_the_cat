const request = require('request');


const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error, null);
    }

    const data = JSON.parse(body);
    const breed = data[0];
    if (breed) {
      callback(null, breed.description.trim());
    } else {
      callback(null, "Failed to find breed");
    }
  });
};

module.exports = { fetchBreedDescription };