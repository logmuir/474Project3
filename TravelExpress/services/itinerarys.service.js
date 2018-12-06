
// Gettign the Newly created Mongoose Model we just created 

var Itinerary = require('../models/Itinerary.model')

// Saving the context of this module inside the _the variable
_this = this

// Async function to get the Itinerary List

exports.getItinerarys = async function (query, page, limit) {

    // Options setup for the mongoose paginate

    var options = {
        page,
        limit
    }

    // Try Catch the awaited promise to handle the error 
    try {
        var itinerarys = await Itinerary.paginate(query, options)

        // Return the itineraryd list that was retured by the mongoose promise

        return itinerarys;

    } catch (e) {

        // return a Error message describing the reason 

        throw Error(e)
    }
}

exports.createItinerary = async function (itinerary) {

    // Creating a new Mongoose Object by using the new keyword

    var newItinerary = new Itinerary({
        title: itinerary.title,
        description: itinerary.description,
        start_date: itinerary.start_date,
        end_date: itinerary.end_date,
        status: itinerary.status,
        all_tripEvents: itinerary.all_tripEvents
    })

    try {

        // Saving the Itinerary 

        var savedItinerary = await newItinerary.save()

        return savedItinerary;
    } catch (e) {

        // return a Error message describing the reason     

        throw Error("Error while Creating Itinerary")
    }
}

exports.updateItinerary = async function (itinerary) {
    var id = itinerary.id

    try {
        //Find the old Itinerary Object by the Id

        var oldItinerary = await Itinerary.findById(id);
    } catch (e) {
        throw Error("Error occured while Finding the Itinerary")
    }

    // If no old Itinerary Object exists return false

    if (!oldItinerary) {
        return false;
    }

    //Edit the Itinerary Object

    oldItinerary.title = itinerary.title
    oldItinerary.description = itinerary.description
    oldItinerary.status = itinerary.status

    try {
        var savedItinerary = await oldItinerary.save()
        return savedItinerary;
    } catch (e) {
        throw Error("And Error occured while updating the Itinerary");
    }
}

exports.deleteItinerary = async function (id) {

    // Delete the Itinerary

    try {
        var deleted = await Itinerary.remove({ _id: id })
        if (deleted.result.n === 0) {
            throw Error("Itinerary Could not be deleted")
        }
        return deleted
    } catch (e) {
        throw Error("Error Occured while Deleting the Itinerary")
    }
}