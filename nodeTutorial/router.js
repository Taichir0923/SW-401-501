const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => {
    res.send('Express homepage')
});


module.exports = router;