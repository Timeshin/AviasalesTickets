import { FC } from 'react'
import { useAppSelector } from '../../hooks/hooks'
import { ITicketsList } from '../../types/types'
import TicketItem from '../TicketItem/TicketItem'

import styles from "./ticketsList.module.sass"

const TicketsList: FC<ITicketsList> = ({ tickets }) => {
    const { error, loading } = useAppSelector(({ticketsState}) => ticketsState)

    if(error) {
        return <h1 className={styles.tickets__list__error}>{error}</h1>
    }

    if(loading) {
        return <h1>LOADING...</h1>
    }

    return (
        <div className={styles.tickets__list}>
            {
                tickets.map((ticket, id) =>
                    <TicketItem key={id} ticket={ticket} />
                )
            }
        </div>
    )
}

export default TicketsList
