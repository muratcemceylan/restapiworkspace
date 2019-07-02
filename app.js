const express = require('express');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');
const port = 3000;

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));

const valuePair = "BCHUSD";


app.get('/:valuePair', (req, res) => {
    
    const baseUrl = 'https://api.kraken.com/0/public/Ticker?pair=';	
    const apiId = valuePair;

    const userLocation = (url1, url2) => {

       let newUrl = url1 + url2;
       return newUrl;
    };	

    const apiUrl = userLocation(baseUrl, apiId);
    

    fetch(apiUrl)
    .then(res => res.json())
    .then(result => {        
        res.send({ result });
    })
    .catch(err => {
        res.redirect('/error');
    });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));