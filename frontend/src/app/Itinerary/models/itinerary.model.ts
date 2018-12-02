import TripEvent from "src/app/TripEvent/models/tripEvent.model";

class Itinerary {
    _id: string;
    title: string;
    description: string;
    date: Date;
    status: string;
    tripEvents: TripEvent[];

    constructor(
    ) {
        this.title = ""
        this.description = ""
        this.date = new Date()
        this.status = ""
        this.tripEvents = []
    }
}

export default Itinerary;