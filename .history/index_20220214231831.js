import cors from 'cors';
import express from 'express';
import multer from 'multer';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config() // get the data from .env file

var corsOrigin = {
    origin: 'http://localhost:8080'
}
var formData = multer();

var app = express();

app.use(cors(corsOrigin));
app.use(formData.array());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const PORT = process.env.PORT || 8080;


process.on('UnhandledPromiseRejectionWarning', (reason, p) => {
    console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
    // application specific logging, throwing an error, or other logic here
});

app.get('/',(req, res)=>{
    res.json({
        message: "Welcome to my first SEQUELIZE-MYSQL project"
    })
})

app.get('*', (req, res)=>{
    res.json({
        message: "404 Not Found"
    })
});

app.listen(PORT, ()=>{
    console.log('Server is listening to the port', PORT)
})