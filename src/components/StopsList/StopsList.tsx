import { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { editStopsFilter } from '../../redux/actions'
import { IStopItem } from '../../types/types'
import StopItem from '../StopItem/StopItem'

import styles from "./stopsList.module.sass"

const StopsList: FC = () => {
    const { stopsFilter } = useAppSelector(({ticketsState}) => ticketsState)
    const dispatch = useAppDispatch()

    const onChangeHandler = (name: string): void => {
        dispatch(editStopsFilter(name))
    }

    const stopItems: IStopItem[] = [
        {
            onChangeHandler: () => onChangeHandler("all"),
            name: "All",
            checked: stopsFilter.all
        },
        {
            onChangeHandler: () => onChangeHandler("nonStops"),
            name: "Non-stop",
            checked: stopsFilter.nonStops
        },
        {
            onChangeHandler: () => onChangeHandler("oneStop"),
            name: "1 stop",
            checked: stopsFilter.oneStop
        },
        {
            onChangeHandler: () => onChangeHandler("twoStops"),
            name: "2 stops",
            checked: stopsFilter.twoStops
        },
        {
            onChangeHandler: () => onChangeHandler("threeStops"),
            name: "3 stops",
            checked: stopsFilter.threeStops
        }
    ]

    return (
        <div className={styles.transfer}>
            <div className={styles.transfer__title}>
                number of transfers
            </div>
            <ul className={styles.transfer__list}>
                {
                    stopItems.map((item, id) => 
                        <StopItem key={id}
                         checked={item.checked}
                         name={item.name}
                         onChangeHandler={item.onChangeHandler}
                         />)
                }
            </ul>
        </div>
    )
}

export default StopsList