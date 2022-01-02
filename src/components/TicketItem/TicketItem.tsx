import { FC } from 'react'
import { ITicketItem } from '../../types/types'
import TicketsLogo from "../../assets/S7 Logo.png"
import { ISegments } from '../../redux/reducerTypes/type'

import styles from "./ticketItem.module.sass"

const TicketItem: FC<ITicketItem> = ({ ticket }) => {

    const getHours = (mins: number): number => {
        const hours = Math.trunc(mins / 60)

        return hours 
    }

    const getMinutes = (mins: number): number => {
        const minutes = mins % 60

        return minutes
    }

    const getDateHours = (date: string): number => {
        const initialDate = new Date(date)

        return initialDate.getUTCHours()
    }

    const getDateMins = (date: string): number => {
        const initialDate = new Date(date)

        return initialDate.getUTCMinutes()
    }
    
    const setTime = (item: ISegments): string => {
        const hours = (
            getDateHours(item.date)
            +
            getHours(item.duration)
            +
            Math.trunc((getMinutes(item.duration) + getDateMins(item.date)) / 60)
        ) % 24
        
        const minutes = (
            getDateMins(item.date)
            +
            getMinutes(item.duration)
        ) % 60

        return `${
            hours < 10 ? "0" + hours : hours
        }:${
            minutes < 10 ? "0" + minutes : minutes
        }`
        
    }

    return (
        <div className={styles.tickets__list__item}>
            <div className={styles.tickets__list__item__header}>
                <div className={styles.tickets__list__item__header__price}>
                    {ticket.price} Р
                </div>
                <div className={styles.tickets__list__item__header__logo}>
                    <img src={TicketsLogo} alt="ticketsLogo" />
                </div>
            </div>
                {
                    ticket.segments.map((item, id) => {
                        return (
                            <div key={id} className={styles.tickets__list__item__content}>
                                <div className={styles.tickets__list__item__content__destination}>
                                    <p>
                                        {item.origin} - {item.destination}
                                    </p>
                                    {
                                        getDateHours(item.date) < 10 ? "0" + getDateHours(item.date)
                                        :
                                        getDateHours(item.date)
                                    }:
                                    {
                                        getDateMins(item.date) < 10 ? "0" + getDateMins(item.date)
                                        :
                                        getDateMins(item.date) 
                                    } - {
                                        setTime(item)
                                    }
                                </div>
                                <div className={styles.tickets__list__item__content__during}>
                                    <p>
                                        ON THE WAY
                                    </p>
                                    {
                                        `${getHours(item.duration)}H ${getMinutes(item.duration)}M`
                                    }
                                </div>
                                <div className={styles.tickets__list__item__content__stops}>
                                    <p>
                                        {
                                            (item.stops.length !== 1) ?
                                            `${item.stops.length} STOPS` :
                                            "1 STOP"
                                        }
                                    </p>
                                    {
                                        item.stops.map((item, id) => (id === 1 || id === 2) ? ", " + item : item)
                                    }
                                </div>
                            </div>
                        )
                    })
                }
        </div>
    )
}

export default TicketItem
