import { FC, useEffect, useState } from 'react'
import { useAppDispatch } from '../../hooks/hooks'
import { stopsFilter } from '../../redux/actions'
import { IStopItem } from '../../types/types'
import StopItem from '../StopItem/StopItem'

import styles from "./stopsList.module.sass"

const StopsList: FC = () => {
    const [all, setAll] = useState<boolean>(true)
    const [nonStop, setNonStop] = useState<boolean>(false)
    const [oneStop, setOneStop] = useState<boolean>(false)
    const [twoStops, setTwoStops] = useState<boolean>(false)
    const [threeStops, setThreeStops] = useState<boolean>(false)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if(!nonStop && !oneStop && !twoStops && !threeStops) {
            setAll(true)
        }

        if(nonStop || oneStop || twoStops || threeStops) {
            setAll(false)
        }

    }, [nonStop, oneStop, twoStops, threeStops, all])

    const onChangeHandler = (stateChanger: any, value: string): void => {
        stateChanger((prev: boolean) => !prev)

        dispatch(stopsFilter(value))
    }

    const stopItems: IStopItem[] = [
        {
            onChangeHandler: () => {
                onChangeHandler(setAll, "all")
                setNonStop(false)
                setOneStop(false)
                setTwoStops(false)
                setThreeStops(false)
            },
            name: "All",
            checked: all
        },
        {
            onChangeHandler: () => onChangeHandler(setNonStop, "nonStop"),
            name: "Non-stop",
            checked: nonStop
        },
        {
            onChangeHandler: () => onChangeHandler(setOneStop, "oneStop"),
            name: "1 stop",
            checked: oneStop
        },
        {
            onChangeHandler: () => onChangeHandler(setTwoStops, "twoStops"),
            name: "2 stops",
            checked: twoStops
        },
        {
            onChangeHandler: () => onChangeHandler(setThreeStops, "threeStops"),
            name: "3 stops",
            checked: threeStops
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