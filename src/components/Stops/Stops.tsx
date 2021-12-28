import React, { FC, useState } from 'react'

import styles from "./stops.module.sass"

type TStops = Record<string, boolean>

const Stops: FC = () => {
    const [stopsFilter, setStopsFilter] = useState<TStops>({
        all: true,
        nonStops: false,
        oneStop: false,
        twoStops: false,
        threeStops: false
    })

    const onChangeHandler = (name: string): TStops | void => {
        switch(name) {
            case "all":
                return setStopsFilter({...stopsFilter, all: !stopsFilter.all})
            case "nonStops":
                return setStopsFilter({...stopsFilter, nonStops: !stopsFilter.nonStops})
            case "oneStop":
                return setStopsFilter({...stopsFilter, oneStop: !stopsFilter.oneStop})
            case "twoStops":
                return setStopsFilter({...stopsFilter, twoStops: !stopsFilter.twoStops})
            case "threeStops":
                return setStopsFilter({...stopsFilter, threeStops: !stopsFilter.threeStops})
            default:
                return stopsFilter
        }
        
    }

    return (
        <div className={styles.transfer}>
            <div className={styles.transfer__title}>
                number of transfers
            </div>
            <ul className={styles.transfer__list}>
                <li>
                    <label>
                        <input
                        type="checkbox"
                        onChange={() => onChangeHandler("all")}
                        checked={stopsFilter.all} />
                        <span>All</span>
                    </label>
                </li>
                <li>
                    <label>
                        <input
                        onChange={() => onChangeHandler("nonStops")}
                        checked={stopsFilter.nonStops}
                        type="checkbox"
                         />
                        <span>Non-stop</span>
                    </label>
                </li>
                <li>
                    <label>
                        <input
                        onChange={() => onChangeHandler("oneStop")}
                        checked={stopsFilter.oneStop}
                        type="checkbox"
                         />
                        <span>1 stop</span>
                    </label>
                </li>
                <li>
                    <label>
                        <input
                        onChange={() => onChangeHandler("twoStops")}
                        checked={stopsFilter.twoStops}
                        type="checkbox"
                         />
                        <span>2 stops</span>
                    </label>
                </li>
                <li>
                    <label>
                        <input
                        onChange={() => onChangeHandler("threeStops")}
                        checked={stopsFilter.threeStops}
                        type="checkbox"
                         />
                        <span>3 stops</span>
                    </label>
                </li>
            </ul>
        </div>
    )
}

export default Stops