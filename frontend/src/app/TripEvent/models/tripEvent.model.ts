class TripEvent {
    _id: string;
    title: string;
    address: string;
    date: Date;
    status: string;
    order: number;    

    constructor(
    ) {
        this.title = ""
        this.address = ""
        this.date = new Date()
        this.status = ""
    }
}

export default TripEvent;