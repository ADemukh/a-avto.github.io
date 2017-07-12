/*eslint strict:0  */
var authController, express, profileClientController, profileShopController, router, shopController, userController;

userController = require('../controllers/user');
express = require('express');
router = express.Router();
authController = require('../controllers/auth');
shopController = require('../controllers/shop');
profileClientController = require('../controllers/profileClient');
profileShopController = require('../controllers/profileShop');


function succeedWrapper(res, message) {
  return function succeed(response) {
    res.json({
      success: true,
      message: message,
      details: response
    });
  };
}

function failureWrapper(res, error) {
  return function failure(err) {
    res.json({
      success: false,
      error: error,
      details: err
    });
  };
}

router.post('/changepassword', authController.isAuthenticated, function changePassword(req, res) {
  userController.changePassword(req.body.email, req.body.newPassword)
    .then(succeedWrapper(res, 'Пароль изменен.'), failureWrapper(res, 'При изменении пароля возникла ошибка.'));
});

router.post('/changeshopphoto', authController.isAuthenticated, function changeUserPhoto(req, res) {
  userController.changePhoto(req.body.email, req.body.photo)
    .then(succeedWrapper(res, 'Фото изменено.'), failureWrapper(res, 'Не удалось изменить фото.'));
});
router.post('/changeshopcontactinfo', authController.isAuthenticated, function changeShopContactInfo(req, res) {
  profileShopController.changeContactInfo(req.body.email, req.body.contactInfo)
    .then(succeedWrapper(res, 'Контактная информация сохранена.'), failureWrapper(res, 'При сохранении контактной информации возникла ошибка.'));
});
router.post('/changeshopoptions', authController.isAuthenticated, function changeShopOptions(req, res) {
  profileShopController.changeOptions(req.body.email, req.body.options)
    .then(succeedWrapper(res, 'Информация сохранена.'), failureWrapper(res, 'При сохранении информации возникла ошибка.'));
});
router.post('/changeshopnotifications', authController.isAuthenticated, function changeShopNotifications(req, res) {
  profileShopController.changeNotifications(req.body.email, req.body.notifications)
    .then(succeedWrapper(res, 'Настройки уведомлений сохранены.'), failureWrapper(res, 'При сохранении уведомлений возникла ошибка.'));
});

router.get('/getShops', function getShops(req, res) {
  shopController.getShops({})
    .then(function onGotShops(shops) {
      res.json(shops);
    });
});

module.exports = router;