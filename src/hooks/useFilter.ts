import { useMemo } from "react"
import { useAppSelector } from "./hooks"
import ticketsFilter from "../utils/ticketsFilter"

const useFilter = () => {
    const { tickets, stopsFilter, qtyTickets } = useAppSelector(({ticketsState}) => ticketsState)

    const sortedTickets = useMemo(() => {
        return ticketsFilter(tickets, stopsFilter, qtyTickets)
    }, [tickets, stopsFilter, qtyTickets])

    return sortedTickets
}

export default useFilter