interface ISegments {
    date: string;
    destination: string;
    duration: number;
    origin: string;
    stops: string[];
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
    stop: boolean;
    loading: boolean;
    searchId: string;
    error: string;
}