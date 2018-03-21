/* eslint strict:0  */
let express,
    router,
    shopController;

express = require('express');

router = express.Router();
shopController = require('../controllers/shop');

router.get('/getShops', (req, res) => {
    shopController.getShops(req.query.filter ? JSON.parse(req.query.filter) : {})
        .then((shops) => {
            res.json(shops);
        });
});

module.exports = router;
