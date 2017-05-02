/*eslint strict:0  */
var express, router;
var profileClientController, profileShopController, userController;

express = require('express');
router = express.Router();
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

router.post('/changepassword', function changePassword(req, res) {
  userController.changePassword(req.body.email, req.body.newPassword)
    .then(succeedWrapper(res, 'Пароль изменен.'), failureWrapper(res, 'При изменении пароля возникла ошибка.'));
});

router.post('/changeclientphoto', function changeClientPhoto(req, res) {
  profileClientController.changePhoto(req.body.email, req.body.photoId)
    .then(succeedWrapper(res, 'Фото изменено.'), failureWrapper(res, 'Не удалось изменить фото.'));
});
router.post('/changeclientcontactinfo', function changeClientContactInfo(req, res) {
  profileClientController.changeContactInfo(req.body.email, req.body.contactInfo)
    .then(succeedWrapper(res), failureWrapper(res));
});
router.post('/changeclientnotifications', function changeClientNotifications(req, res) {
  profileClientController.changeNotifications(req.body.email, req.body.notifications)
    .then(succeedWrapper(res, 'Настройки оповещении сохранены.'), failureWrapper(res, 'При сохранении оповещений возникла ошибка.'));
});
router.post('/changeclientcars', function changeClientCars(req, res) {
  profileClientController.changeCars(req.body.email, req.body.cars)
    .then(succeedWrapper(res, 'Машины сохранены.'), failureWrapper(res, 'При сохранении машин возникла ошибка.'));
});

module.exports = router;