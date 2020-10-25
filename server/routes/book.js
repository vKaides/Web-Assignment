let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const book = require('../models/book');
let passport = require('passport');



let bookController = require('../controllers/book')

//helper function for gaurd purposes
function requireAuth(req,res,next)
{
    //check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();


}
/*Get Route for the Book List page - Read Operation*/
router.get('/', bookController.displayBookList);


/*Get Route for Displaying Add List page - Create Operation*/
router.get('/add', requireAuth, bookController.displayAddPage);
/*Post Route for Processing Add List page - Create Operation*/
router.post('/add',requireAuth, bookController.processAddPage);
/*Get Route for Displaying Add Edit page - Update Operation*/
router.get('/edit/:id',requireAuth, bookController.displayEditPage);
/*Post Route for Processing Add Edit page - Update Operation*/
router.post('/edit/:id',requireAuth, bookController.processEditPage);
/*Get to perform Book Deletion - Delete Operation*/
router.get('/delete/:id',requireAuth, bookController.performDelete );
module.exports = router;
