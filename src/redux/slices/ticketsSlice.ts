import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getTickets, getSearchId } from "../../services/services"
import { IServerData, TicketsState } from "../reducerTypes/type"


const initialState: TicketsState = {
    tickets: [],
    stop: false,
    loading: false,
    searchId: "",
    error: ""
}

export const ticketsSlice = createSlice({
    name: "tickets",
    initialState,
    reducers: {},
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

export default ticketsSlice.reducer