/*eslint strict:0  */
var express, router;
var authController, profileClientController, profileShopController, userController;

express = require('express');
router = express.Router();
authController = require('../controllers/auth');
userController = require('../controllers/user');
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

router.post('/changeclientphoto', authController.isAuthenticated, function changeClientPhoto(req, res) {
  userController.changePhoto(req.body.email, req.body.photo)
    .then(succeedWrapper(res, 'Фото изменено.'), failureWrapper(res, 'Не удалось изменить фото.'));
});
router.post('/changeclientcontactinfo', authController.isAuthenticated, function changeClientContactInfo(req, res) {
  profileClientController.changeContactInfo(req.body.email, req.body.contactInfo)
    .then(succeedWrapper(res, 'Контактная информация сохранена.'), failureWrapper(res, 'При сохранении контактной информации возникла ошибка.'));
});
router.post('/changeclientnotifications', authController.isAuthenticated, function changeClientNotifications(req, res) {
  profileClientController.changeNotifications(req.body.email, req.body.notifications)
    .then(succeedWrapper(res, 'Настройки уведомлений сохранены.'), failureWrapper(res, 'При сохранении уведомлений возникла ошибка.'));
});
router.post('/changeclientcars', authController.isAuthenticated, function changeClientCars(req, res) {
  profileClientController.changeCars(req.body.email, req.body.cars)
    .then(succeedWrapper(res, 'Изменения сохранены.'), failureWrapper(res, 'При сохранении изменений возникла ошибка.'));
});

module.exports = router;