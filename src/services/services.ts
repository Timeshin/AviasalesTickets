import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { IServerData } from "../redux/reducerTypes/type"

const _url = "https://front-test.beta.aviasales.ru"

export const getSearchId = createAsyncThunk(
    "tickets/getSearchId",
    async () => {
        const response = await axios.get<{searchId: string}>(`${_url}/search`)
        return response.data.searchId
    }
)

export const getTickets = createAsyncThunk(
    "tickets/getAllTickets",
    async (props: string, thunkAPI) => {
        try {
            const response = await axios.get<IServerData>(`${_url}/tickets`, {
                params: {
                    searchId: props
                }
            })
            console.log(response.data)
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue("Error")
        }
    }
)