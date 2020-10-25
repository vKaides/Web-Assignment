let express = require('express');
let router = express.Router();


let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);
/* GET home page. */
router.get('/home', indexController.displayHomePage);
/* GET About page. */
router.get('/about', indexController.displayAboutPage);
/* GET Project page. */
router.get('/project', indexController.displayProjectPage);
/* GET services page. */
router.get('/services', indexController.displayServicesPage);
/* GET contact page. */
router.get('/contact', indexController.displayContactPage);

/*Get Route for Displaying Login page */
router.get('/login', indexController.displayLoginPage);
/*Post Route for Processing Login page*/
router.post('/login', indexController.processLoginPage);
/*Get Route for Displaying Register page */
router.get('/register', indexController.displayRegisterPage);
/*Post Route for Processing Register page*/
router.post('/register', indexController.processRegisterPage);
/*Get to perform UserLogout*/
router.get('/logout', indexController.performLogout);

module.exports = router;
