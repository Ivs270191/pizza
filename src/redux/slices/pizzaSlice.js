import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

axios.defaults.baseURL = "https://67222c072108960b9cc3333a.mockapi.io/";


export const fetchPizzas = createAsyncThunk(
    'pizza/fetchPizzas',
    async (url) => {
        const getItem = await axios.get(url);
        return getItem.data;
    }


)

const initialState = {
    items: [],
    status: "loading"

}

export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        // setItems(state, action) { state.items = action.payload }
    },
    extraReducers: (builder) => {

        builder.addCase(fetchPizzas.pending, (state) => {

            state.status = 'loading';


        })
        builder.addCase(fetchPizzas.fulfilled, (state, action) => {

            state.items = action.payload;
            state.status = 'success'

        })
        builder.addCase(fetchPizzas.rejected, (state) => {



            state.status = 'error'
        })
    }
})

export const { setItems } = pizzaSlice.actions

export default pizzaSlice.reducer