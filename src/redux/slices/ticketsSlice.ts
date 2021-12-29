import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getTickets, getSearchId } from "../../services/services"
import { IServerData, TicketsState } from "../reducerTypes/type"


const initialState: TicketsState = {
    tickets: [],
    stopsFilter: {
        all: true,
        nonStops: false,
        oneStop: false,
        twoStops: false,
        threeStops: false
    },
    stop: false,
    loading: false,
    searchId: "",
    error: ""
}

export const ticketsSlice = createSlice({
    name: "tickets",
    initialState,
    reducers: {
        editStopsFilter: (state, action: PayloadAction<string>): TicketsState => {
            switch(action.payload) {
                case "all":
                    return {
                        ...state,
                        stopsFilter: {
                            ...state.stopsFilter, all: !state.stopsFilter.all
                        }
                    }
                case "nonStops":
                    return {
                        ...state,
                        stopsFilter: {
                            ...state.stopsFilter, nonStops: !state.stopsFilter.nonStops
                        }
                    }
                case "oneStop":
                    return {
                        ...state,
                        stopsFilter: {
                            ...state.stopsFilter, oneStop: !state.stopsFilter.oneStop
                        }
                    }
                case "twoStops":
                    return {
                        ...state,
                        stopsFilter: {
                            ...state.stopsFilter, twoStops: !state.stopsFilter.twoStops
                        }
                    }
                case "threeStops":
                    return {
                        ...state,
                        stopsFilter: {
                            ...state.stopsFilter, threeStops: !state.stopsFilter.threeStops
                        }
                    }
                default:
                    return state
            }
        }
    },
    extraReducers: {
        [getSearchId.fulfilled.type]: (state, action: PayloadAction<string>) => {
            state.searchId = action.payload
        },

        [getTickets.fulfilled.type]: (state, action: PayloadAction<IServerData>) => { // fulfilled (successful), pending (waiting), rejected (error)
            state.tickets = action.payload.tickets
            state.stop = action.payload.stop
            state.loading = false
            state.error = ""
        },

        [getTickets.pending.type]: (state) => {
            state.loading = true
        },

        [getTickets.rejected.type]: (state, action: PayloadAction<string>) => {
            state.loading = false
            state.error = action.payload
        }
    }
})

const { actions, reducer } = ticketsSlice

export const { editStopsFilter } = actions

export default reducer