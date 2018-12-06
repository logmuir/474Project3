export class TripEvent {
    name: string;
    formattedAddress: string[];
    order: number;
    status?: string;

    constructor(){
        this.order = 0;
        this.status = "incomplete";
    }
    

} export default TripEvent;