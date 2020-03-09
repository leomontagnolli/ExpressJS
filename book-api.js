const express = require ('express');
const bodyParser = require ('body-parser');
const routes = require ('./routes');

const app = express();
const port = 3000;


//body parser active
app.use (bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use(routes);


app.listen(port, () => {
    console.log(`API REST RODANDO NA PORTA: ${port}`);
});