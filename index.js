const express = require("express");
const path =require("path");
const app = express();
import signupRouter from '../router/signupRoutes.js'


const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
mongoose.connect("mongodb://127.0.0.1:27017/",
{
    dbName: "signupData",
    useNewUrlParser:true,
    useUnifiedTopology:true,

}).then(() => {
    console.log(`connection successful`);
}).catch((e) => {
    console.log(`no connection`);
});





const port = process.env.PORT || 4000;

// const static_path = path.join(__dirname,"../client/src/components");
// // console.log(path.join(__dirname,"../client/src/app.js"));
// app.use(express.static(static_path));

app.use('/api', signupRouter)


app.listen(4000, function(req,res){
    console.log(`App listening at port ${port}`);
});
