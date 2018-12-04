export class TripEvent {   

    constructor(
        public name: string,
        public address: string,
        public date?: Date,
        public status?: string,
        public order?: number
    ) {}
    
} export default TripEvent;