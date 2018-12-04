import TripEvent from "./tripEvent.model";
import { Deserializable } from "./deserializable.model";

class Itinerary implements Deserializable {
    _id: string;
    title: string;
    description: string;
    date: Date;
    status: string;
    all_tripEvents: TripEvent[];

    // constructor(
    // ) {
    //     this.title = ""
    //     this.description = ""
    //     this.date = new Date()
    //     this.status = ""
    //     this.all_tripEvents = []
    // }
    deserialize(input: any) {
        Object.assign(this, input);
        this.all_tripEvents.push(new TripEvent().deserialize(input));
        //this.car = new Car().deserialize(input.car);
        console.log(this.all_tripEvents);
        return this;
    }
}

export default Itinerary;