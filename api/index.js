const express = require('express');
const app = express();

app.get('/' , function (req, res) {
     res.send('the api is working fine now')
});

const PORT = 9001;
app.listen(PORT, function(){
    console.log('App is running on port'+ " " + PORT);
});