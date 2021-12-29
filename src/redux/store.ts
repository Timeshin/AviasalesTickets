import { configureStore } from "@reduxjs/toolkit"
import { ticketsState } from "./"

export const store = configureStore({
    reducer: {
        ticketsState
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch