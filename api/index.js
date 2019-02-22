import express from 'express';
import bodyParser from 'body-parser';

import mealsRoutes from './routes/mealsRoute';
import menusRouter from './routes/menu.route';
const app = express();

app.use(bodyParser.json());

app.get('/' ,  (req, res) => 
     res.send('the api is working fine now')
);

 app.use('/api/v1/meals', mealsRoutes);
app.use('/api/v1/menus', menusRouter);


const PORT = 9001;
app.listen(PORT);
    console.log('App is running on port'+ " " + PORT);

module.exports = app;