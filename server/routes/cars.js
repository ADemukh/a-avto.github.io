/*eslint strict:0  */
var carController, express, router;

express = require('express');
router = express.Router();
carController = require('../controllers/car');

router.post('/init', function init(req, res) {
  console.log('starting...');
  carController.init();
  console.log('finished.');
  res.send('initialization started in background thread.');
});

router.get('/getCars', function getCars(req, res) {
  carController.getCars({})
    .then(function onGotCars(cars) {
      res.json(cars);
    });
});

router.get('/add', function addCarGet(req, res) {
  res.render('addCar', {});
});

router.post('/add', function addCarPost(req, res) {
  carController.add({
    mark: req.body.mark,
    model: req.body.model,
    from: req.body.from,
    end: req.body.end
  })
  .then(function success(cars) {
    console.log('finished.');
    res.send('added.');
  });
});

module.exports = router;