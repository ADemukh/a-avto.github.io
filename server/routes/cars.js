/*eslint strict:0  */
var carController, express, router;

express = require('express');
router = express.Router();
carController = require('../controllers/car');

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
      res.redirect('/cars/marks');
    });
});

// /cars/marks/delete { body: { mark }}
router.post('/marks/delete', function deleteCarMarks(req, res) {
  carController.deleteMarks(req.body.mark)
    .then(function redirect() {
      res.redirect('/cars/marks');
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
      res.redirect('/cars/marks');
    });
});

// /cars/marks/volvo/edit { body: { mark model }}
router.post('/marks/:mark/delete', function getAllModels(req, res) {
  carController.deleteCar(req.body.id)
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

router.get('/getEngineTypes', function getEngineTypes(req, res) {
  carController.getEngineTypes({})
    .then(function onGotEngineTypes(engineTypes) {
      res.json(engineTypes);
    });
});

router.get('/engineTypes', function getAllEngineTypes(req, res) {
  carController.getEngineTypes({})
    .then(function gotEngineTypes(engineTypes) {
      res.render('cars/engineTypes/allEngineTypes', {
        engineTypes: engineTypes
      });
    });
});

router.get('/engineTypes/add', function addEngineTypesGet(req, res) {
  res.render('cars/engineTypes/addEngineType', {});
});

router.post('/engineTypes/add', function addEngineTypesPost(req, res) {
  carController.addEngineType({
      name: req.body.name
    })
    .then(function redirect() {
      res.redirect('/cars/engineTypes');
    });
});

router.post('/engineTypes/delete', function deleteEngineTypes(req, res) {
  carController.deleteEngineType(req.body.id)
    .then(function redirect() {
      res.redirect('/cars/engineTypes');
    });
});

router.get('/getEngineCapacities', function getEngineCapacities(req, res) {
  carController.getEngineCapacities({})
    .then(function onGotEngineCapacities(engineCapacities) {
      res.json(engineCapacities);
    });
});

router.get('/engineCapacities', function getAllEngineCapacities(req, res) {
  carController.getEngineCapacities({})
    .then(function gotEngineCapacities(engineCapacities) {
      res.render('cars/engineCapacities/allEngineCapacities', {
        engineCapacities: engineCapacities
      });
    });
});

router.get('/engineCapacities/add', function addEngineCapacitiesGet(req, res) {
  res.render('cars/engineCapacities/addEngineCapacity', {});
});

router.post('/engineCapacities/add', function addEngineCapacitiesPost(req, res) {
  carController.addEngineCapacity({
      name: req.body.name,
    })
    .then(function redirect() {
      res.redirect('/cars/engineCapacities');
    });
});

router.post('/engineCapacities/delete', function deleteEngineCapacities(req, res) {
  carController.deleteEngineCapacity(req.body.id)
    .then(function redirect() {
      res.redirect('/cars/engineCapacities');
    });
});

router.get('/getGearboxes', function getGearboxes(req, res) {
  carController.getGearboxes({})
    .then(function onGotGearboxes(gearboxes) {
      res.json(gearboxes);
    });
});

router.get('/gearboxes', function getAllEngineCapacities(req, res) {
  carController.getGearboxes({})
    .then(function gotGearboxes(gearboxes) {
      res.render('cars/gearboxes/allGearboxes', {
        gearboxes: gearboxes
      });
    });
});

router.get('/gearboxes/add', function addGearboxesGet(req, res) {
  res.render('cars/gearboxes/addGearbox', {});
});

router.post('/gearboxes/add', function addGearboxesPost(req, res) {
  carController.addGearbox({
      name: req.body.name,
    })
    .then(function redirect() {
      res.redirect('/cars/gearboxes');
    });
});

router.post('/gearboxes/delete', function deleteGearboxes(req, res) {
  carController.deleteGearbox(req.body.id)
    .then(function redirect() {
      res.redirect('/cars/gearboxes');
    });
});
router.get('/getSpareTypes', function getSpareTypes(req, res) {
  carController.getSpareTypes({})
    .then(function gotSpareTypes(spareTypes) {
      res.json(spareTypes);
    });
});
router.get('/spareTypes', function getSpareTypes(req, res) {
  carController.getSpareTypes({})
    .then(function gotSpareTypes(spareTypes) {
      res.render('cars/spareTypes/allSpareTypes', {
        spareTypes: spareTypes
      });
    });
});
router.get('/spareTypes/add', function addSpareType(req, res) {
  res.render('cars/spareTypes/addSpareType', {});
});
router.post('/spareTypes/add', function addSpareType(req, res) {
  carController.addSpareType({
      name: req.body.name
    })
    .then(function redirect() {
      res.redirect('/cars/spareTypes');
    });
});
router.post('/spareTypes/delete', function deleteSpareType(req, res) {
  carController.deleteSpareType(req.body.id)
    .then(function redirect() {
      res.redirect('/cars/spareTypes');
    });
});
router.get('/spareTypes/:name', function getSpareType(req, res) {
  carController.getSpareType(req.params.name)
    .then(function gotSpareType(spareType) {
      res.render('cars/spareTypes/editSpareType', {
        spareType: spareType
      });
    });
});
router.post('/spareTypes/:name/edit', function updateSpareType(req, res) {
  carController.updateSpareType({
      id: req.body.id,
      name: req.body.name
    })
    .then(function redirect() {
      res.redirect('/cars/spareTypes');
    });
});

module.exports = router;