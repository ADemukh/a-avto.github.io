/*eslint strict:0  */
var express, router, spareController;

express = require('express');
router = express.Router();
spareController = require('../controllers/spare');

router.get('/sendSpares', function getSpares(req, res) {
  console.log('starting...');
  spareController.init();
  console.log('finished.');
  res.send('initialization started in background thread.');
});

router.get('/getSpares', function getSpares(req, res) {
  spareController.getSpares({})
    .then(function gotSpares(spares) {
      res.json(spares);
    });
});
router.get('/allSpares', function getSpares(req, res) {
  spareController.getSpares({})
    .then(function gotMSpares(spares) {
      res.render('spares/allSpares', {
        spares: spares
      });
    });
});
router.get('/allSpares/add', function addSpare(req, res) {
  res.render('spares/addSpare', {});
});
router.post('/allSpares/add', function addSparePost(req, res) {
  spareController.addSpare({
      name: req.body.name
    })
    .then(function redirect() {
      res.redirect('/spares/allSpares');
    });
});
router.post('/allSpares/delete', function deleteSpare(req, res) {
  spareController.deleteSpare(req.body.name)
    .then(function redirect() {
      res.redirect('/spares/allSpares');
    });
});
router.get('/allSpares/:name', function getSpare(req, res) {
  spareController.getSpare(req.params.name)
    .then(function gotCity(spare) {
      res.render('spares/editSpare', {
        spare: spare
      });
    });
});

router.post('/allSpares/:name/edit', function updateSpare(req, res) {
  spareController.updateSpare({
      id: req.body.id,
      name: req.body.name
    })
    .then(function redirect() {
      res.redirect('/spares/allSpares');
    });
});
module.exports = router;