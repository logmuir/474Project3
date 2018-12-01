var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var ItinerarySchema = new mongoose.Schema({
    ownerEmail: String,
    title: String,
    description: String,
    date: Date,
    status: String
})

ItinerarySchema.plugin(mongoosePaginate)
const Itinerary = mongoose.model('Itinerary', ItinerarySchema)

module.exports = Itinerary;