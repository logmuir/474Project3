export class TripEvent {
    _id: string;
    Name: string;
    formattedAddress: string[];
    order: number;
    status: string;


    constructor(Name: string, formattedAddress: string[], order: number, status: string) {
        this.Name = Name;
        this.formattedAddress = formattedAddress;
        this.order = order;
        this.status = status;
    }

} export default TripEvent;