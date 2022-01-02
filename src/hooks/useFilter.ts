import { useMemo } from "react"
import { useAppSelector } from "./hooks"
import ticketsFilter from "../utils/ticketsFilter"

const useFilter = () => {
    const { tickets, stopsFilter } = useAppSelector(({ticketsState}) => ticketsState)

    const sortedTickets = useMemo(() => {
        switch (true) {
            case stopsFilter.nonStops:
                return ticketsFilter(tickets, 0)
            case stopsFilter.oneStop:
                return ticketsFilter(tickets, 1)
            case stopsFilter.twoStops:
                return ticketsFilter(tickets, 2)
            case stopsFilter.threeStops:
                return ticketsFilter(tickets, 3)
            default:
                return tickets
        }
    }, [tickets, stopsFilter])

    return sortedTickets
}

export default useFilter