require('dotenv').config();
const express = require('express');
const UserRouter =require('./Routers/UserRouter');
const ProductRouter =require('./Routers/ProductRouter');
const cors = require('cors')

const app = express();
const port = process.env.PORT ||5000;
//middle were
app.use(cors({origin: '*'}))
app.use(express.json());
app.use ('/User',UserRouter);
app.use ('/product',ProductRouter);
//endpoint or route
app.get('/',(req, res) => {
    res.send('response from express');
});

app.get('/add',(req, res) => {
    res.send('response from add');
});

//start
//getall
app.get('/getall',(req, res) => {
    res.send('response from getall');
});
//delete
app.get('/delete',(req, res) => {
    res.send('response from delete');
});
//end

app.listen(port,() =>
{
    console.log('server started');
});
