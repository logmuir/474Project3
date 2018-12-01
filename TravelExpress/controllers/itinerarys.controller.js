// Accessing the Service that we just created

var ItineraryService = require('../services/itinerarys.service')

// Saving the context of this module inside the _the variable

_this = this


// Async Controller function to get the Itinerary List

exports.getItinerarys = async function (req, res, next) {

    // Check the existence of the query parameters, If the exists doesn't exists assign a default value

    console.log(req.query.targetEmail);

    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10;

    try {

        var itinerarys = await ItineraryService.getItinerarys({}, page, limit)

        // Return the itinerarys list with the appropriate HTTP Status Code and Message.

        return res.status(200).json({ status: 200, data: itinerarys, message: "Succesfully Itinerarys Recieved" });

    } catch (e) {

        //Return an Error Response Message with Code and the Error Message.

        return res.status(400).json({ status: 400, message: e.message });

    }
}

exports.createItinerary = async function (req, res, next) {

    // Req.Body contains the form submit values.

    var itinerary = {
        title: req.body.title,
        description: req.body.description,
        status: req.body.status
    }

    try {

        // Calling the Service function with the new object from the Request Body

        var createdItinerary = await ItineraryService.createItinerary(itinerary)
        return res.status(201).json({ status: 201, data: createdItinerary, message: "Succesfully Created Itinerary" })
    } catch (e) {

        //Return an Error Response Message with Code and the Error Message.

        return res.status(400).json({ status: 400, message: "Itinerary Creation was Unsuccesfull" })
    }
}

exports.updateItinerary = async function (req, res, next) {

    // Id is necessary for the update


    if (!req.body._id) {
        return res.status(400).json({ status: 400., message: "Id must be present" })
    }

    var id = req.body._id;

    var itinerary = {
        id,
        title: req.body.title ? req.body.title : null,
        description: req.body.description ? req.body.description : null,
        status: req.body.status ? req.body.status : null
    }

    try {
        var updatedItinerary = await ItineraryService.updateItinerary(itinerary)
        return res.status(200).json({ status: 200, data: updatedItinerary, message: "Succesfully Updated Tod" })
    } catch (e) {
        return res.status(400).json({ status: 400., message: e.message })
    }
}

exports.removeItinerary = async function (req, res, next) {

    var id = req.params.id;

    try {
        var deleted = await ItineraryService.deleteItinerary(id)
        return res.status(204).json({ status: 204, message: "Succesfully Itinerary Deleted" })
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message })
    }

}