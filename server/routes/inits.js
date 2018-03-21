/* eslint strict:0  */
let express,
    initController,
    router;

express = require('express');

router = express.Router();
initController = require('../controllers/init');

router.get('/initCities', (req, res) => {
    console.log('starting...');
    initController.initCities()
        .then(() => {
            res.redirect('/cities/allCities');
        });
});

router.get('/initCars', (req, res) => {
    console.log('starting...');
    initController.initCars()
        .then(() => {
            res.redirect('/cars/marks');
        });
});

router.get('/initSpareTypes', (req, res) => {
    console.log('starting...');
    initController.initSpareTypes()
        .then(() => {
            res.redirect('/cars/allSpares');
        });
});

router.get('/initNotifications', (req, res) => {
    console.log('starting...');
    initController.initNotifications()
        .then(() => {
            res.redirect('/notifications/notifications');
        });
});

router.get('/initEngineCapacites', (req, res) => {
    console.log('starting...');
    initController.initEngineCapacites()
        .then(() => {
            res.redirect('/cars/engineCapacities');
        });
});

router.get('/initEngineTypes', (req, res) => {
    console.log('starting...');
    initController.initEngineTypes()
        .then(() => {
            res.redirect('/cars/engineTypes');
        });
});

router.get('/initGearBoxes', (req, res) => {
    console.log('starting...');
    initController.initGearBoxes()
        .then(() => {
            res.redirect('/cars/gearboxes');
        });
});

module.exports = router;
