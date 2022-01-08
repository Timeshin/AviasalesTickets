import { FC } from "react"
import { useAppSelector } from "../../hooks/hooks"
import { IMainFilterItem } from "../../types/types"

import styles from "./mainFilterItem.module.sass"

const MainFilterItem: FC<IMainFilterItem> = ({name, onClickHandler }) => {
    const { mainFilter } = useAppSelector(({ticketsState}) => ticketsState)

    return (
        <div
        onClick={ onClickHandler }
        className={ mainFilter === name ? styles.main__filter__item__active : styles.main__filter__item}>
            { name }
        </div>
    )
}

export default MainFilterItem
