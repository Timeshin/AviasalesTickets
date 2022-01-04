export interface ISegments {
    date: string;
    destination: string;
    duration: number;
    origin: string;
    stops: string[];
}

export type IStops = Array<number>

export interface ITickets {
    price: number;
    carrier: string;
    segments: ISegments[];
}

export interface IServerData {
    tickets: ITickets[];
    stop: boolean;
}

export interface TicketsState {
    tickets: ITickets[];
    stopsFilter: IStops;
    stop: boolean;
    loading: boolean;
    searchId: string;
    error: string;
}