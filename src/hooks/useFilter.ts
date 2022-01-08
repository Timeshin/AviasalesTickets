import { useMemo } from "react"
import { useAppSelector } from "./hooks"
import ticketsFilter from "../utils/ticketsFilter"

const useFilter = () => {
    const { tickets, stopsFilter, qtyTickets, mainFilter } = useAppSelector(({ticketsState}) => ticketsState)

    const sortedTickets = useMemo(() => {
        return ticketsFilter(tickets, stopsFilter, qtyTickets, mainFilter)
    }, [tickets, stopsFilter, qtyTickets, mainFilter])

    return sortedTickets
}

export default useFilter