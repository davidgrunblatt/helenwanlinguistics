
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    try {
        res.send('Yasss queen');
    } catch (ex) {
        console.log(ex);
    }
});

module.exports = router;