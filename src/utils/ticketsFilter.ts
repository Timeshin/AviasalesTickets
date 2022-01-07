import { ITickets } from "../redux/reducerTypes/type"
import { ITicketsFilter } from "../types/types"

const ticketsFilter = (tickets: ITickets[], filterArr: number[], qtyTickets: number): ITicketsFilter => {

    const filteredTickets = filterArr.length !== 0 ? tickets.filter(ticket => 
        ticket.segments.every(segment => 
            filterArr.includes(segment.stops.length)
            )
        )
        :
        tickets
        
    console.log(filteredTickets)
    const returnedTickets = filteredTickets.slice(0, qtyTickets)

    return {
        tickets: returnedTickets,
        filteredTickets
    }
}

export default ticketsFilter
