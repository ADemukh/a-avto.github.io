/* eslint strict:0  */
let carController,
    express,
    router;

express = require('express');

router = express.Router();
carController = require('../controllers/car');

// api for client:
router.get('/getCars', (req, res) => {
    carController.getCars({})
        .then((cars) => {
            res.json(cars);
        });
});
router.get('/getEngineTypes', (req, res) => {
    carController.getEngineTypes({})
        .then((engineTypes) => {
            res.json(engineTypes);
        });
});
router.get('/getEngineCapacities', (req, res) => {
    carController.getEngineCapacities({})
        .then((engineCapacities) => {
            res.json(engineCapacities);
        });
});
router.get('/getGearboxes', (req, res) => {
    carController.getGearboxes({})
        .then((gearboxes) => {
            res.json(gearboxes);
        });
});
router.get('/getSpareTypes', (req, res) => {
    carController.getSpareTypes({})
        .then((spareTypes) => {
            res.json(spareTypes);
        });
});

// /cars/marks
router.get('/marks', (req, res) => {
    carController.getAllMarks()
        .then((marks) => {
            res.render('cars/marks/allMarks', {
                marks,
            });
        });
});
router.get('/marks/add', (req, res) => {
    res.render('cars/marks/addMark', {});
});
router.post('/marks/add', (req, res) => {
    carController.addMark({
        mark: req.body.mark,
        model: req.body.model,
        from: req.body.from,
        end: req.body.end,
    })
        .then(() => {
            res.redirect('/cars/marks');
        });
});
router.post('/marks/:mark/edit', (req, res) => {
    carController.updateMark({
        newMark: req.body.newMark,
        oldMark: req.body.oldMark,
    })
        .then(() => {
            res.redirect('/cars/marks');
        });
});
router.post('/marks/delete', (req, res) => {
    carController.deleteMark(req.body.mark)
        .then(() => {
            res.redirect('/cars/marks');
        });
});

// /cars/marks/volvo
router.get('/marks/:mark', (req, res) => {
    carController.getMark(req.params.mark)
        .then((mark) => {
            res.render('cars/marks/mark', {
                mark,
            });
        });
});
router.get('/marks/:mark/add', (req, res) => {
    res.render('cars/models/addModel', {
        mark: req.params.mark,
    });
});
router.post('/marks/:mark/add', (req, res) => {
    carController.addMark({
        mark: req.params.mark,
        model: req.body.model,
        from: req.body.from,
        end: req.body.end,
    })
        .then(() => {
            res.redirect(`/cars/marks/${req.params.mark}`);
        });
});
router.get('/marks/:mark/:model', (req, res) => {
    carController.getModel(req.params.mark, req.params.model)
        .then((model) => {
            res.render('cars/models/editModel', {
                model,
            });
        });
});
router.post('/marks/:mark/delete', (req, res) => {
    carController.deleteModel(req.body.id)
        .then(() => {
            res.redirect(`/cars/marks/${req.params.mark}`);
        });
});
router.post('/marks/:mark/:model/edit', (req, res) => {
    carController.updateModel({
        id: req.body.id,
        mark: req.body.mark,
        model: req.body.model,
        from: req.body.from,
        end: req.body.end,
    })
        .then(() => {
            res.redirect(`/cars/marks/${req.params.mark}`);
        });
});
router.post('/marks/:mark/:model/delete', (req, res) => {
    carController.deleteModel(req.body.id)
        .then(() => {
            res.redirect(`/cars/marks/${req.params.mark}`);
        });
});

router.get('/engineTypes', (req, res) => {
    carController.getEngineTypes({})
        .then((engineTypes) => {
            res.render('cars/engineTypes/allEngineTypes', {
                engineTypes,
            });
        });
});
router.get('/engineTypes/add', (req, res) => {
    res.render('cars/engineTypes/addEngineType', {});
});
router.post('/engineTypes/add', (req, res) => {
    carController.addEngineType({
        name: req.body.name,
    })
        .then(() => {
            res.redirect('/cars/engineTypes');
        });
});
router.post('/engineTypes/delete', (req, res) => {
    carController.deleteEngineType(req.body.id)
        .then(() => {
            res.redirect('/cars/engineTypes');
        });
});

router.get('/engineCapacities', (req, res) => {
    carController.getEngineCapacities({})
        .then((engineCapacities) => {
            res.render('cars/engineCapacities/allEngineCapacities', {
                engineCapacities,
            });
        });
});
router.get('/engineCapacities/add', (req, res) => {
    res.render('cars/engineCapacities/addEngineCapacity', {});
});
router.post('/engineCapacities/add', (req, res) => {
    carController.addEngineCapacity({
        name: req.body.name,
    })
        .then(() => {
            res.redirect('/cars/engineCapacities');
        });
});
router.post('/engineCapacities/delete', (req, res) => {
    carController.deleteEngineCapacity(req.body.id)
        .then(() => {
            res.redirect('/cars/engineCapacities');
        });
});

router.get('/gearboxes', (req, res) => {
    carController.getGearboxes({})
        .then((gearboxes) => {
            res.render('cars/gearboxes/allGearboxes', {
                gearboxes,
            });
        });
});
router.get('/gearboxes/add', (req, res) => {
    res.render('cars/gearboxes/addGearbox', {});
});
router.post('/gearboxes/add', (req, res) => {
    carController.addGearbox({
        name: req.body.name,
    })
        .then(() => {
            res.redirect('/cars/gearboxes');
        });
});
router.post('/gearboxes/delete', (req, res) => {
    carController.deleteGearbox(req.body.id)
        .then(() => {
            res.redirect('/cars/gearboxes');
        });
});

router.get('/spareTypes', (req, res) => {
    carController.getSpareTypes({})
        .then((spareTypes) => {
            res.render('cars/spareTypes/allSpareTypes', {
                spareTypes,
            });
        });
});
router.get('/spareTypes/add', (req, res) => {
    res.render('cars/spareTypes/addSpareType', {});
});
router.post('/spareTypes/add', (req, res) => {
    carController.addSpareType({
        name: req.body.name,
    })
        .then(() => {
            res.redirect('/cars/spareTypes');
        });
});
router.post('/spareTypes/delete', (req, res) => {
    carController.deleteSpareType(req.body.id)
        .then(() => {
            res.redirect('/cars/spareTypes');
        });
});
router.get('/spareTypes/:name', (req, res) => {
    carController.getSpareType(req.params.name)
        .then((spareType) => {
            res.render('cars/spareTypes/editSpareType', {
                spareType,
            });
        });
});
router.post('/spareTypes/:name/edit', (req, res) => {
    carController.updateSpareType({
        id: req.body.id,
        name: req.body.name,
    })
        .then(() => {
            res.redirect('/cars/spareTypes');
        });
});

module.exports = router;
