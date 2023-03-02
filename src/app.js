
import express from 'express'
const app = express();
import connectDatabase from './db/conn.js'
import signupRouter from '../router/signupRoutes.js'
const port = process.env.PORT || 3000;
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); 
connectDatabase();
app.get("/" , (req, res) => {
    res.send("hello")
});
app.use('/src', signupRouter)
app.listen(port, () =>{
    console.log(`Server running on ${port}`);
})