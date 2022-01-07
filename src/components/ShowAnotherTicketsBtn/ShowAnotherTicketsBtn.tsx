import { FC } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/hooks"
import { addQtyTickets } from "../../redux/actions"

import styles from "./showAnotherTicketsBtn.module.sass"

const ShowAnotherTicketsBtn: FC = () => {
    const { loading, stop, error } = useAppSelector(({ticketsState}) => ticketsState)
    const dispatch = useAppDispatch()

    if(loading === true) {
        return null
    }

    if(stop === true) {
        return <h1 className={styles.all__tickets}>--END--</h1>
    }

    return <button
        onClick={() => dispatch(addQtyTickets(5))}
        className={styles.show__tickets__btn}>
        {
            error ? "try again!" : "Show another 5 tickets!"
        }
    </button>
}

export default ShowAnotherTicketsBtn
