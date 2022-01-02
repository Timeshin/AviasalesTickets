import { FC } from 'react'
import { IStopItem } from "../../types/types"

import "./stopItem.module.sass"

const StopItem: FC<IStopItem> = ({onChangeHandler, name, checked}) => {
    return (
        <li>
            <label>
                <input
                type="checkbox"
                onChange={onChangeHandler}
                checked={checked} />
                <span>{name}</span>
            </label>
        </li>
    )
}

export default StopItem
