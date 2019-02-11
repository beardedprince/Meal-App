const express = require('express');
const app = express();

app.get('meals' , (res, req) => {
    const meals = [
        {
            id : 1,
            name: "rice",
            size: "plates",
            price: 500,
            currency:"Naira"
        }
    ]

});

const PORT = 8080;
app.listen(PORT);