import { FC } from "react"
import { useAppDispatch } from "../../hooks/hooks"
import { editingByMainFilter } from "../../redux/actions"
import MainFilterItem from "../MainFilterItem/MainFilterItem"

import styles from "./mainFilterList.module.sass"

const MainFilterList: FC = () => {
    const dispatch = useAppDispatch()

    const itemsContent = [
        {
            name: "cheapest",
            onClickHandler: () => dispatch(editingByMainFilter("cheapest"))
        },
        {
            name: "quickest",
            onClickHandler: () => dispatch(editingByMainFilter("quickest"))
        }
    ]

    return <div className={styles.main__filter}>
        {
            itemsContent.map((item, id) => {
                return <MainFilterItem key={id} name={item.name} onClickHandler={item.onClickHandler} />
            })
        }
    </div>
}

export default MainFilterList
