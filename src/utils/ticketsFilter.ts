import { ITickets } from "../redux/reducerTypes/type"

const ticketsFilter = (tickets: ITickets[], qty: number): ITickets[] | null => {
    return tickets.map(ticket => ticket.segments.every(segment => segment.stops.length === qty) ? ticket : null)
}

export default ticketsFilter