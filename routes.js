const router = require('express').Router();
const getYears = require('./Controller');

router.get('/all-years', getYears);

module.exports = router;

