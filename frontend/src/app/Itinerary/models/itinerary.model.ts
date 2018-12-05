import TripEvent from "../../TripEvent/models/tripEvent.model";

export class Itinerary {
    _id: string;
    title: string;
    description: string;
    date: Date;
    status: string;
    all_tripEvents: TripEvent[];

    constructor() {
        
    }
}

export default Itinerary;