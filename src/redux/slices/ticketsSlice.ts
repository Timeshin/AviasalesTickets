import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getTickets, getSearchId } from "../../services/services"
import { IServerData, TicketsState } from "../reducerTypes/type"
import editStopsFilter from "../../utils/editStopsFilter"

const initialState: TicketsState = {
    tickets: [],
    stopsFilter: [],
    stop: false,
    loading: false,
    searchId: "",
    error: ""
}

export const ticketsSlice = createSlice({
    name: "tickets",
    initialState,
    reducers: {
        stopsFilter: (state, action: PayloadAction<string>): TicketsState => {
            switch(action.payload) {
                case "nonStop":
                    return {
                        ...state,
                        stopsFilter: editStopsFilter(state.stopsFilter, 0)
                    }
                case "oneStop":
                    return {
                        ...state,
                        stopsFilter: editStopsFilter(state.stopsFilter, 1)
                    }
                case "twoStops":
                    return {
                        ...state,
                        stopsFilter: editStopsFilter(state.stopsFilter, 2)
                    }
                case "threeStops":
                    return {
                        ...state,
                        stopsFilter: editStopsFilter(state.stopsFilter, 3)
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

export const { stopsFilter } = actions

export default reducer