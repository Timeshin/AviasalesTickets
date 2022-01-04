import { ITickets } from "../redux/reducerTypes/type"

const ticketsFilter = (tickets: ITickets[], arr: number[]): ITickets[] | any => {
    if(arr.length === 0) {
        return tickets
    }

    return tickets.filter(ticket => ticket.segments.every(segment => arr.includes(segment.stops.length)))
}

export default ticketsFilter