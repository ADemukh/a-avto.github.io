/* eslint strict:0  */
let express,
    router;

express = require('express');

router = express.Router();
router.get('/', (req, res) => {
    res.render('admin');
});
module.exports = router;
