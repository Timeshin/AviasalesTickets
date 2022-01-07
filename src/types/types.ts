import { ITickets } from "../redux/reducerTypes/type";

export interface IStopItem {
    onChangeHandler: () => void;
    name: string;
    checked: boolean;
}

export interface ITicketsList {
    tickets: ITickets[]
}

export interface ITicketItem {
    ticket: ITickets
}

export interface ITicketsFilter {
    tickets: ITickets[]
    filteredTickets: ITickets[]
}