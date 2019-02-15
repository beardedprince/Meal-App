import express  from 'express';
import bodyParser from 'body-parser'
const app = express();

app.use(bodyParser.json());

app.get('/' , function (req, res) {
     res.send('the api is working fine now')
});

const PORT = 9001;
app.listen(PORT, function(){
    console.log('App is running on port'+ " " + PORT);
});