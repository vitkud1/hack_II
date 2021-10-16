// import fetch from "node-fetch";
// globalThis.fetch = fetch
const express = require('express');
// import express from 'express'
const app = express();
var cors = require('cors')
// import cors from 'cors'
app.use(cors())
app.set('port', 3041);
app.set('host', '0.0.0.0');
app.listen(app.get('port'), app.get('host'), () => {
    console.log(`[OK] Server is running on ${app.get('host')} :${app.get('port')}`);
});
app.use(express.urlencoded({ extended: true }))
app.use(express.json())



app.use('/api/', require('./routes/index'))

// var url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party";
// var token = "d9474f76262e319098db5615122459f330769067";
// var query = "7728123272";

// var options = {
//     method: "POST",
//     mode: "cors",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//         "Authorization": "Token " + token
//     },
//     body: JSON.stringify({ query: query })
// }

// fetch(url, options)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log("error", error));