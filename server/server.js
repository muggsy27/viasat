const fs = require('fs');
const express = require('express');
const path = require('path');
const publicPath = path.join(__dirname, '..', '/public');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();

app.use(express.static(publicPath));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.post('/', (req, res) => {
  // retrieve request urls
  let urls = req.body.urls;

  /* 
  1. make https requests with the request urls
  2. save the HTML http response in the "homepages" folder
  */
  urls.forEach(url => {
    let fileName1 = url.replace('.com', '');
    let fileName2 = fileName1.replace('https://', '');

    axios.get(url)
      .then(res => {
        console.log(res.data);
        fs.writeFile(__dirname + `/homepages/${fileName2}.html`, res.data, err => {
          if (err) {
            return console.log(err);
          }
          console.log('data is saved');
        });
      });

  });

});

app.listen(3000, function () {
  console.log('listening on port 3000');
});