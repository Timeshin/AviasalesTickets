import { IStops } from "../redux/reducerTypes/type"

const editStopsFilter = (stopsArray: IStops, value: number | null): IStops => {
    const valueIndex = stopsArray.findIndex(item => item === value)
    let arrayClone = [...stopsArray]
    
    if(value === null) {
        return arrayClone = []
    }

    if(valueIndex === -1) {
        return [...arrayClone, value]
    } else {
        arrayClone.splice(valueIndex, 1)
    }
    console.log(arrayClone)

    return arrayClone
}

export default editStopsFilter
