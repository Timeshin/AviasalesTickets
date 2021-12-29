interface ISegments {
    date: string;
    destination: string;
    duration: number;
    origin: string;
    stops: string[];
}

export interface IStops {
    all: boolean;
    nonStops: boolean;
    oneStop: boolean;
    twoStops: boolean;
    threeStops: boolean;
}

interface Tickets {
    price: number;
    carrier: string;
    segments: ISegments[];
}

export interface IServerData {
    tickets: Tickets[];
    stop: boolean;
}

export interface TicketsState {
    tickets: Tickets[];
    stopsFilter: IStops;
    stop: boolean;
    loading: boolean;
    searchId: string;
    error: string;
}