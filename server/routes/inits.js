/*eslint strict:0  */
var express, initController, router;

express = require('express');
router = express.Router();
initController = require('../controllers/init');

router.get('/initCities', function getCities(req, res) {
  console.log('starting...');
  initController.initCities()
    .then(function redirect() {
      res.redirect('/cities/allCities');
    });
});

router.get('/initCars', function getCities(req, res) {
  console.log('starting...');
  initController.initCars()
    .then(function redirect() {
      res.redirect('/cars/marks');
    });
});

router.get('/initSpareTypes', function getSparesTypes(req, res) {
  console.log('starting...');
  initController.initSpareTypes()
    .then(function redirect() {
      res.redirect('/cars/allSpares');
    });
});

router.get('/initNotifications', function getSparesTypes(req, res) {
  console.log('starting...');
  initController.initNotifications()
    .then(function redirect() {
      res.redirect('/notifications/notifications');
    });
});

router.get('/initEngineCapacites', function getEngineCapacites(req, res) {
  console.log('starting...');
  initController.initEngineCapacites()
    .then(function redirect() {
      res.redirect('/cars/engineCapacities');
    });
});

router.get('/initEngineTypes', function getEngineTypes(req, res) {
  console.log('starting...');
  initController.initEngineTypes()
    .then(function redirect() {
      res.redirect('/cars/engineTypes');
    });
});

router.get('/initGearBoxes', function getGearBoxes(req, res) {
  console.log('starting...');
  initController.initGearBoxes()
    .then(function redirect() {
      res.redirect('/cars/gearboxes');
    });
});

module.exports = router;