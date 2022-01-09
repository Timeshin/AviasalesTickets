import { ITickets } from "../redux/reducerTypes/type"
import { ITicketsFilter } from "../types/types"

const ticketsFilter = (
    tickets: ITickets[],
    filterArr: number[],
    qtyTickets: number,
    mainFilter: string
): ITicketsFilter => {


    const filteredTickets = (): ITickets[] => {
        let arr: ITickets[] = []

        if (filterArr.length !== 0) {
            arr = [...tickets].filter(ticket =>
                ticket.segments.every(segment =>
                    filterArr.includes(segment.stops.length)
                )
            )
        } else {
            arr = [...tickets]
        }

        if (mainFilter === "cheapest") {
            arr.sort((a, b) => a.price - b.price)
        } else {
            arr.sort((a, b) => {
                return (a.segments[0].duration + a.segments[1].duration) - (b.segments[0].duration + b.segments[1].duration)
            })
        }

        return arr
    }

    const returnedTickets = filteredTickets().slice(0, qtyTickets)

    return {
        tickets: returnedTickets,
        filteredTickets: filteredTickets()
    }
}

export default ticketsFilter
