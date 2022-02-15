import cors from 'cors';
import express from 'express';
import multer from 'multer';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import userRoutes from './app/routes/user.routes';
import db from './app/config/database';


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

db.sync()

db.authenticate()
.then(()=>{
    console.log("Connected to Database", process.env.DATABASE)
}).catch((err)=>{
    console.log(err.message)
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

const PORT = process.env.PORT || 8080

app.listen(PORT, ()=>{
    console.log('Server is listening to the port', PORT)
})