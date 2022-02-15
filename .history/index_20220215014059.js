import cors from 'cors';
import express from 'express';
import multer from 'multer';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import userRoutes from './app/routes/user.routes';
import db from './app/config/database';

const {PORT, DATABASE} = process.env;

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

db.authenticate()
.then(()=>{
    console.log("Connected to Database", DATABASE)
}).catch((err)=>{
    console.log(err.message, 'cuck')
});

app.get('/',(req, res)=>{
    res.json({
        message: "Welcome to my first SEQUELIZE-MYSQL project"
    })
})

app.use('/app/user', userRoutes);

app.get('*', (req, res)=>{
    res.json({
        message: "404 Not Found"
    })
});

process.on('UnhandledPromiseRejectionWarning', (reason, p) => {
    console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
    // application specific logging, throwing an error, or other logic here
});


app.listen(PORT || 8080, ()=>{
    console.log('Server is listening to the port', PORT)
})