if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const express = require('express')
const ejs = require('ejs')
const eel = require('express-ejs-layouts')
const mongoose = require('mongoose')

// importing data from routes/index.js
const indexroute = require('./routes/index')

const app = express()

app.set('view engine','ejs')
app.set('views', __dirname+'/views')

// partials layouts -> !
// layout->layout.ejs
app.set('layout','layouts/layout')
app.use(eel)
app.use(express.static('public'))

mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection

db.on('error',()=>{
    // console.error(error);
    console.log('kuch to hua');
})

db.once('open',()=>{
    console.log('mongoose is running');
})


app.use('/',indexroute)

app.listen(process.env.PORT||3000,()=>{
    console.log('project is running on port 3000');
})