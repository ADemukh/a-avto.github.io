var express = require('express');
var router = express.Router();
var carController = require('../controllers/car');

router.post('/init', function(req, res, next) {
  console.log('starting...');
  carController.init();
  console.log('finished.');
  res.send('initialization started in background thread.');
});

router.get('/getCars', function(req, res, next) {
  carController.getCars({})
    .then(function(cars){
      res.json(cars);
    });
});

router.get('/getCarModels', function(req, res, next) {
  carController.getCars({ mark: req.body.mark })
    .then(function(cars){
      res.json(cars);
    });
});

router.get('/add', function(req, res, next) {
  res.render('addCar', {});
});

router.post('/add', function(req, res, next) {
  carController.add({
    mark: req.body.mark,
    model: req.body.model,
    from: req.body.from,
    end: req.body.end
  })
    .then(function(cars){
      console.log('finished.');
      res.send('added.');
    });
});

module.exports = router;