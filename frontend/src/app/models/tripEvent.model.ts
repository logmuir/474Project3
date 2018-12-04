import { Deserializable } from "./deserializable.model";

export class TripEvent implements Deserializable {
    _id: string;
    title: string;
    address: string;
    date: Date;
    status: string;
    order: number;    

    // constructor(title: string
    // ) {
    //     this.title = title;
    //     this.address = ""
    //     this.date = new Date()
    //     this.status = ""
    // }
    deserialize(input: any){
        Object.assign(this, input);
        return this;
    }
    
} export default TripEvent;