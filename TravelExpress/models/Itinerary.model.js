var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var ItinerarySchema = new mongoose.Schema({
    title: String,
    ownerEmail: String,
    description: String,
    start_date: String,
    end_date: String,
    status: String,
    all_tripEvents: Array
})

ItinerarySchema.plugin(mongoosePaginate)
const Itinerary = mongoose.model('Itinerary', ItinerarySchema)

module.exports = Itinerary;