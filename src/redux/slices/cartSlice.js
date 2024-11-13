import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartItems: [],
    totalPrice: 0

}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCartItems(state, action) {
            const findItem = state.cartItems.find(e => e.id === action.payload.id && e.types === action.payload.types)
            if (findItem) {
                findItem.count++
            } else {
                state.cartItems.push({ ...action.payload, count: 1 })

            }
            // state.cartItems.push(action.payload);
            state.totalPrice = state.cartItems.reduce((sum, obj) => (obj.price * obj.count) + sum, 0)

        },
        minusItems(state, action) {
            const findItem = state.cartItems.find(e => e.id === action.payload.id && e.types === action.payload.types)
            if (findItem) {
                findItem.count--
                state.totalPrice = state.cartItems.reduce((sum, obj) => (obj.price * obj.count) + sum, 0)
            }
        },
        removeCartItems(state, action) {
            // console.log(action.payload)
        (state.cartItems = state.cartItems.filter(e =>  e.id !== action.payload.id || e.types !== action.payload.types) )
        state.totalPrice = state.cartItems.reduce((sum, obj) => (obj.price * obj.count) + sum, 0)},
        clearCartItems(state) {
            state.cartItems = []; state.totalPrice = 0
        },
    }
})

export const { addCartItems, removeCartItems, clearCartItems, minusItems } = cartSlice.actions

export default cartSlice.reducer