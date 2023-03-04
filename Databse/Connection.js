const mongoose = require('mongoose')

const dotenv = require('dotenv');

dotenv.config();

const url=process.env.MONGODB__URL;

mongoose.connect(url)
.then(()=> console.log("Connected To Database"))
.catch((err)=> console.log(err))


exports.connection = mongoose.connection
