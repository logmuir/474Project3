import TripEvent from "../../TripEvent/models/tripEvent.model";

export class Itinerary {
    _id: string;
    title: string;
    description: string;
    date: Date;
    status: string;
    all_tripEvents: TripEvent[];

    constructor(title: string, description: string, date: Date, status: string, all_tripEvents: TripEvent[]) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.status = status;
        this.all_tripEvents = all_tripEvents;
        
    }
}

export default Itinerary;