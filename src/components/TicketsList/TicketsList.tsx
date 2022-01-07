import { FC } from 'react'
import { useAppSelector } from '../../hooks/hooks'
import { ITicketsList } from '../../types/types'
import TicketItem from '../TicketItem/TicketItem'
import loader from "../../assets/loader.svg"

import styles from "./ticketsList.module.sass"

const TicketsList: FC<ITicketsList> = ({ tickets }) => {
    const { error, loading } = useAppSelector(({ticketsState}) => ticketsState)

    return (
        <div className={styles.tickets__list}>
            {
                tickets.map((ticket, id) =>
                    <TicketItem key={id} ticket={ticket} />
                )
            }
            {
                loading && <img src={loader} alt="Loading..." />
            }
            {
                error && <h1 className={styles.tickets__list__error}>{error}</h1>
            }
        </div>
    )
}

export default TicketsList
