/*eslint strict:0  */
var cityController, express, router;

express = require('express');
router = express.Router();
cityController = require('../controllers/city');

router.get('/send', function getCars(req, res) {
  console.log('starting...');
  cityController.init();
  console.log('finished.');
  res.send('initialization started in background thread.');
});

router.get('/getCities', function getCities(req, res) {
  cityController.getCities({})
    .then(function gotMarks(cities) {
      res.json(cities);
    });
});
router.get('/allCities', function getCities(req, res) {
  cityController.getCities({})
    .then(function gotMarks(cities) {
      res.render('cities/allCities', {
        cities: cities
      });
    });
});
router.get('/allCities/add', function addCity(req, res) {
  res.render('cities/addCity', {});
});
router.post('/allCities/add', function addCityPost(req, res) {
  cityController.addCity({
      name: req.body.name
    })
    .then(function redirect() {
      res.redirect('/cities/allCities');
    });
});
router.post('/allCities/delete', function deleteCity(req, res) {
  cityController.deleteCity(req.body.name)
    .then(function redirect() {
      res.redirect('/cities/allCities');
    });
});
router.get('/allCities/:name', function getCity(req, res) {
  cityController.getCity(req.params.name)
    .then(function gotCity(city) {
      res.render('cities/editCity', {
        city: city
      });
    });
});

router.post('/allCities/:name/edit', function updateCity(req, res) {
  cityController.updateCity({
      id: req.body.id,
      name: req.body.name
    })
    .then(function redirect() {
      res.redirect('/cities/allCities');
    });
});
module.exports = router;