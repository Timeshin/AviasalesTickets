import { FC } from 'react'

interface IStopItem {
    onChangeHandler: () => void;
    name: string;
    checked: boolean;
}

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
