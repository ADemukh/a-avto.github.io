var express = require('express');
var router = express.Router();
var carController = require('../controllers/car');

/* GET home page. */
router.get('/add', function(req, res, next) {
  res.render('addCar', {});
});

router.post('/add', function(req, res, next) {
  console.log(req.body);
  carController.add({
    mark: req.body.mark,
    model: req.body.model,
    from: req.body.from || 1970,
    end: req.body.end
  });
  res.send('added');
});

module.exports = router;