//const axios = require('axios');

axios.get("https://api.exchangerate-api.com/v4/latest/USD").then(function (response) {
    console.log(response);
}).catch(function(erro){
    console.log(erro);
})