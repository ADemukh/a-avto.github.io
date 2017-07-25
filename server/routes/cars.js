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

// /cars/marks
router.get('/marks', function getAllCars(req, res) {
  carController.getAllMarks()
    .then(function gotMarks(marks) {
      res.render('cars/marks/allMarks', {
        marks: marks
      });
    });
});

// cars/marks/add
router.get('/marks/add', function addCarGet(req, res) {
  res.render('cars/marks/addMark', {});
});

router.post('/marks/add', function addCarPost(req, res) {
  carController.addMark({
      mark: req.body.mark,
      model: req.body.model,
      from: req.body.from,
      end: req.body.end
    })
    .then(function redirect() {
      res.redirect('/cars/marks/');
    });
});

// /cars/marks/delete { body: { mark }}
router.post('/marks/delete', function deleteCarMarks(req, res) {
  carController.deleteCars(req.body.mark)
    .then(function redirect() {
      res.redirect('/cars/marks/');
    });
});

// /cars/marks/volvo
router.get('/marks/:mark', function getAllModels(req, res) {
  carController.getMark(req.params.mark)
    .then(function gotMark(mark) {
      res.render('cars/marks/mark', {
        mark: mark
      });
    });
});

router.get('/marks/:mark/add', function getAllModels(req, res) {
  res.render('cars/models/addModel', {
    mark: req.params.mark
  });
});
// /cars/marks/volvo/edit { body: { oldMark newMark }}
router.post('/marks/:mark/add', function getAllModels(req, res) {
  carController.addMark({
      mark: req.params.mark,
      model: req.body.model,
      from: req.body.from,
      end: req.body.end
    })
    .then(function redirect() {
      res.redirect('/cars/marks/' + req.params.mark);
    });
});

// /cars/marks/volvo/edit { body: { oldMark newMark }}
router.post('/marks/:mark/edit', function getAllModels(req, res) {
  carController.updateMark({
      newMark: req.body.newMark,
      oldMark: req.body.oldMark
    })
    .then(function redirect() {
      res.redirect('/cars/marks/' + req.body.newMark);
    });
});

// /cars/marks/volvo/edit { body: { mark model }}
router.post('/marks/:mark/delete', function getAllModels(req, res) {
  carController.deleteModel(req.params.mark, req.body.model)
    .then(function redirect() {
      res.redirect('/cars/marks/' + req.params.mark);
    });
});

// /cars/marks/volvo/xc60
router.get('/marks/:mark/:model', function getModel(req, res) {
  carController.getModel(req.params.mark, req.params.model)
    .then(function gotModel(model) {
      res.render('cars/models/editModel', {
        model: model
      });
    });
});

// /cars/marks/volvo/xc60/edit { body: { id mark model from end }}
router.post('/marks/:mark/:model/edit', function updateCar(req, res) {
  carController.updateModel({
      id: req.body.id,
      mark: req.body.mark,
      model: req.body.model,
      from: req.body.from,
      end: req.body.end
    })
    .then(function redirect() {
      res.redirect('/cars/marks/' + req.params.mark);
    });
});

// /cars/marks/volvo/xc60/delete { body: { id }}
router.post('/marks/:mark/:model/delete', function deleteCar(req, res) {
  carController.deleteCar(req.body.id)
  .then(function redirect() {
    res.redirect('/cars/marks/' + req.params.mark);
  });
});

module.exports = router;