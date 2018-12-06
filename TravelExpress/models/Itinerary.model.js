var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var ItinerarySchema = new mongoose.Schema({
    ownerEmail: String,
    title: String,
    description: String,
    date: Date,
    status: String,
    all_tripEvents: Array
})

ItinerarySchema.plugin(mongoosePaginate)
const Itinerary = mongoose.model('Itinerary', ItinerarySchema)

module.exports = Itinerary;