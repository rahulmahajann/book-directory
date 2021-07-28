const express = require('express')
const router = express.Router()

// get -> 

router.get('/',(req,res)=>{
    // res.send('hello this is my home page!')
    res.render('index')
})

router.get('/contact',(req,res)=>{
    res.render('contact')
})

router.get('/about',(req,res)=>{
    res.render('about')
})

module.exports = router