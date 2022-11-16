const express = require('express');
const mongoose = require('mongoose');
const app = express();


app.use(express.json());
app.use(require('./routes/'));

mongoose.connect("mongodb+srv://Sharip:mongo-space-16@cluster0.e26yroz.mongodb.net/Book_store",
() => {   
    console.log('connected');
    app.listen(4000, () => {
        console.log('Сервер работает');
    });
 },
);