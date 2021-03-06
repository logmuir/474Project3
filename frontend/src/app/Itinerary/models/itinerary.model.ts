import TripEvent from "../../TripEvent/models/tripEvent.model";

export class Itinerary {
    _id: string;
    ownerEmail: string;
    title: string;
    description: string;
    start_date: string;
    end_date: string;
    status: string;
    all_tripEvents: TripEvent[];

    constructor(ownerEmail: string, title: string, description: string, start_date: string, end_date: string, status: string, all_tripEvents: TripEvent[]) {
        this.ownerEmail = ownerEmail;
        this.title = title;
        this.description = description;
        this.start_date = start_date;
        this.end_date = end_date;
        this.status = status;
        this.all_tripEvents = all_tripEvents;
    }
}export default Itinerary;