var express = require('express')

var router = express.Router()

// Getting the Itinerary Controller that we just created

var ItineraryController = require('../../controllers/itinerarys.controller');


// Map each API to the Controller FUnctions

router.get('/', ItineraryController.getItinerarys)

router.post('/', ItineraryController.createItinerary)

router.put('/', ItineraryController.updateItinerary)

router.delete('/:id', ItineraryController.removeItinerary)


// Export the Router

module.exports = router;