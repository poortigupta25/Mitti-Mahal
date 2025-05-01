require('dotenv').config();
const mongoose = require ('mongoose');

const url = process.env.DB_URL;
// asynchronous function - returns Promise
mongoose.connect(url)
.then((result) => {
    console.log('database connnected');
    
}).catch((err) => {
        console.log('err');
});
module.exports = mongoose;