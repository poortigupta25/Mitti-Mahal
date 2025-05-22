require('dotenv').config();
const express = require('express');
const UserRouter =require('./Routers/UserRouter');
const ProductRouter =require('./Routers/ProductRouter');
const FeedbackRouter =require('./Routers/FeedbackRouter');
const ReportRouter =require('./Routers/ReportRouter');
const cors = require('cors')

const app = express();
const port = process.env.PORT ||5000;
//middle were
app.use(cors({origin: '*'}))
app.use(express.json());
app.use('/user',UserRouter);
app.use('/product',ProductRouter);
app.use('/feedback',FeedbackRouter);
app.use('/report', ReportRouter);

//endpoint or route
app.get('/',(req, res) => {
    res.send('response from express');
});

//start
//add
app.get('/add',(req, res) => {
    res.send('response from add');
});
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
