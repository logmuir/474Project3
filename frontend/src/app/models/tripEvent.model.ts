export class TripEvent{
    _id: string;
    title: string;
    address: string;
    date: Date;
    status: string;
    order: number;    

    constructor(){
        this.date = new Date();
        this.status = "incomplete";
        this.order = 0;
    }
    
} export default TripEvent;