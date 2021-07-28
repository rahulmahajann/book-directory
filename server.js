const express = require('express')
const ejs = require('ejs')
const eel = require('express-ejs-layouts')

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


app.use('/',indexroute)

app.listen(3000,()=>{
    console.log('project is running on port 3000');
})