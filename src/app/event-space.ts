export class EventSpace {
    id:  number;
    name: string;
    capacity: number;
    floor: number;
    recording_capabilities: boolean;
    breakout_room: boolean;
    location: string;
    address?: string;
    contact?: string[];
    note?: string;
    photo?: string[];
    security_process?: string;
    geospatial?: string[];
}
