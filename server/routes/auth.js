/* eslint strict:0  */
let authController,
    express,
    responseHelper,
    router,
    userController;

express = require('express');

router = express.Router();
authController = require('../controllers/auth');
userController = require('../controllers/user');
responseHelper = require('../helpers/response');

router.post('/loggedin', (req, res) => (req.isAuthenticated() ?
    responseHelper(res).success(req.user) :
    responseHelper(res).error(null)));

router.post('/login', authController.signIn);
router.post('/logout', authController.signOut);
router.post('/signupclient', authController.signUpClient);
router.post('/signupclientpartial', authController.signUpClientPartial);
router.post('/signupshop', authController.signUpShop);
router.get('/popup/:strategy', (req, res) => {
    res.render('auth', {
        title: req.params.strategy,
        authUrl: `/auth/${req.params.strategy}`,
    });
});
router.get('/facebook', authController.authFacebook);
router.get('/facebook/callback', authController.authFacebookCallback);
router.get('/vk', authController.authVk);
router.get('/vk/callback', authController.authVkCallback);

router.post('/emailisfree', (req, res) => {
    userController.checkEmailIsFree(req.body.email)
        .then(responseHelper(res).success, responseHelper(res).error);
});
router.post('/recoverpassword', (req, res) => {
    userController.recoverPassword(req)
        .then(responseHelper(res).success, responseHelper(res).error);
});
router.post('/setpassword', (req, res) => {
    userController.setPassword(req.body.token, req.body.password)
        .then((user) => {
            req.logIn(user, (loginErr) => {
                if (loginErr) {
                    return responseHelper(res).error(loginErr);
                }
                return responseHelper(res).success(user);
            });
        })
        .catch(responseHelper(res).error);
});

module.exports = router;
