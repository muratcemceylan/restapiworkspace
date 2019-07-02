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
    const apiUrl = baseUrl + valuePair;
    

    fetch(apiUrl)
    .then(res => res.json())
    .then(result => {        
        res.send({ result });
        console.log( result );
    })
    .catch(err => {
        res.redirect('/error');
    });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));