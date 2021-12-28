import { configureStore } from "@reduxjs/toolkit"
import { ticketsSlice } from "./"

export const store = configureStore({
    reducer: {
        ticketsState: ticketsSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch