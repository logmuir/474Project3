import TripEvent from "../../TripEvent/models/tripEvent.model";

class Itinerary {
    _id: string;
    title: string;
    description: string;
    date: Date;
    status: string;
    all_tripEvents: TripEvent[];
}

export default Itinerary;