/* eslint strict:0  */
let cityController,
    express,
    router;

express = require('express');

router = express.Router();
cityController = require('../controllers/city');

router.get('/getCities', (req, res) => {
    cityController.getCities({})
        .then((cities) => {
            res.json(cities);
        });
});

router.get('/', (req, res) => {
    cityController.getCities({})
        .then((cities) => {
            res.render('cities/allCities', {
                cities,
            });
        });
});
router.get('/allCities/add', (req, res) => {
    res.render('cities/addCity', {});
});
router.post('/allCities/add', (req, res) => {
    cityController.addCity({
        name: req.body.name,
    })
        .then(() => {
            res.redirect('/cities/allCities');
        });
});
router.post('/allCities/delete', (req, res) => {
    cityController.deleteCity(req.body.id)
        .then(() => {
            res.redirect('/cities/allCities');
        });
});
router.get('/allCities/:name', (req, res) => {
    cityController.getCity(req.params.name)
        .then((city) => {
            res.render('cities/editCity', {
                city,
            });
        });
});
router.post('/allCities/:name/edit', (req, res) => {
    cityController.updateCity({
        id: req.body.id,
        name: req.body.name,
    })
        .then(() => {
            res.redirect('/cities/allCities');
        });
});

module.exports = router;
