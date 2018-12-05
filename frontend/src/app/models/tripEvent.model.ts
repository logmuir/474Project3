export class TripEvent{
    _id: string;
    title: string;
    address: string;
    order: number;
    date ?: Date;
    status ?: string;

    constructor(){
        this.order = 0;
        this.date = new Date();
        this.status = "incomplete";
    }
    
} export default TripEvent;