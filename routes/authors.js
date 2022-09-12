const express = require('express');
const router = express.Router();
const Author = require('../models/Author');

// ALL
router.get('/', async (req, res) => {
    
    try {
        
        const users = await Author.find({});
        console.log('users ' + users[0].name)
        res.send(users)
    } catch (error) {
        console.log(error)
    }
    // res.render('authors/index', users);
});
//new
router.get('/new', (req, res) => {
    res.render('authors/new', { author: new author() });
});
//create
router.post('/', (req, res) => {
    res.send('create')   
});




module.exports = router;
