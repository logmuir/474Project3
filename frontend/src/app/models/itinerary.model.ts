import TripEvent from "./tripEvent.model";

class Itinerary {
    _id: string;
    title: string;
    description: string;
    date: Date;
    status: string;
    all_tripEvents: TripEvent[];
}

export default Itinerary;