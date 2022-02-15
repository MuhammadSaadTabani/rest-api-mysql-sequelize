import cors from 'cors';
import express from 'express';
import multer from 'multer';
import bodyParser from 'body-parser';

var formData = multer();

var app = express();

app.use(formData.array());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const PORT = process.env.PORT || 8080;


app.listen(PORT, ()=>{
    console.log('Server is listening to the port', PORT)
})