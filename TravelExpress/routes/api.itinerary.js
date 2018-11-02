var express = require('express')

var router = express.Router()
var itinerarys = require('./api/itinerarys.route')


router.use('/itinerarys', itinerarys);


module.exports = router;