import { useMemo } from "react"
import { useAppSelector } from "./hooks"
import ticketsFilter from "../utils/ticketsFilter"

const useFilter = () => {
    const { tickets, stopsFilter } = useAppSelector(({ticketsState}) => ticketsState)

    const sortedTickets = useMemo(() => {
        return ticketsFilter(tickets, stopsFilter)
    }, [tickets, stopsFilter])

    return sortedTickets
}

export default useFilter