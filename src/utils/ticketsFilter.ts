import { ITickets } from "../redux/reducerTypes/type"
import { ITicketsFilter } from "../types/types"

const ticketsFilter = (
        tickets: ITickets[],
        filterArr: number[],
        qtyTickets: number,
        mainFilter: string
    ): ITicketsFilter => {


    const filteredTickets = filterArr.length !== 0 ? tickets.filter(ticket => 
        ticket.segments.every(segment => 
                filterArr.includes(segment.stops.length)
            )
        )
        :
        tickets
        
    const returnedTickets = mainFilter === "cheapest" ?
    filteredTickets.slice(0, qtyTickets).sort((a, b) => a.price - b.price) :
    filteredTickets.slice(0, qtyTickets).sort((a, b) => a.segments[0].duration - b.segments[0].duration)

    return {
        tickets: returnedTickets,
        filteredTickets
    }
}

export default ticketsFilter
