const args = process.argv.slice(2); 
const fs = require("fs");
const request = require('request');

const url = args[0];
const pth = args[1];

request(url, (error, response, body) => { // basically functional
  // if (error) console.log(error);
  // console.log('statusCode:', response && response.statusCode); 

  fs.writeFile(pth, body, 'utf8', err => {
    if (err) {
      console.error(err)
      return
    }
    console.log(`FETCHED ${url} and WRITTEN TO ${pth}`)
  })
});