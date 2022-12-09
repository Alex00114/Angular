import { Room } from "./room.model";

export class Reservation {
    from!: string;
    to!: string;
    name!: string;
    surname!: string;
    room!: Room;
}