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

// /cars/marks
router.get('/marks', function getAllCars(req, res) {
  carController.getAllMarks()
    .then(function gotMarks(marks) {
      res.render('cars/marks/allMarks', {
        marks: marks
      });
    });
});
router.post('/marks/delete', function deleteCarMarks(req, res) {
  carController.deleteCars(req.body.mark);
  carController.getAllMarks()
    .then(function gotMarks(marks) {
      res.render('cars/marks/allMarks', {
        marks: marks
      });
    });
});

router.get('/marks/:mark', function getAllModels(req, res) {
  carController.getMark(req.params.mark)
    .then(function gotMark(mark) {
      res.render('cars/marks/mark', {
        mark: mark
      });
    });
});

router.post('/marks/:mark/edit', function getAllModels(req, res) {
  carController.updateMark({
    newMark: req.body.mark,
    oldMark: req.body.model
  });
  carController.getAllMarks()
    .then(function gotMarks(marks) {
      res.render('cars/marks/allMarks', {
        marks: marks
      });
    });
});

router.get('/marks/:mark/:model', function getModel(req, res) {
  carController.getModel(req.params)
    .then(function gotModel(model) {
      res.render('cars/models/editModel', {
        model: model
      });
    });
});

router.post('/marks/:mark/:model/edit', function updateCar(req, res) {
  carController.update({
    mark: req.body.mark,
    model: req.body.model,
    from: req.body.from,
    end: req.body.end
  });
  carController.getMark(req.params.mark)
    .then(function gotMark(mark) {
      res.render('cars/marks/mark', {
        mark: mark
      });
    });
});
router.post('/marks/:mark/:model/delete', function deleteCar(req, res) {
  carController.deleteCar(req.body.id);
  carController.getAllMarks()
    .then(function gotMarks(marks) {
      res.render('cars/marks/allMarks', {
        marks: marks
      });
    });
});

router.post('/marks/:mark/:model/add', function updateCar(req, res) {
  carController.updateModel(req.body);
});

router.post('/add', function addCarPost(req, res) {
  carController.add({
    mark: req.body.mark,
    model: req.body.model,
    from: req.body.from,
    end: req.body.end
  });
  carController.getAllMarks()
    .then(function gotMarks(marks) {
      res.render('cars/marks/allMarks', {
        marks: marks
      });
    });
});

module.exports = router;