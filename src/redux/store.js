import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slices/counterSlice'
import filterSlice from './slices/filters'
import cartSlice from './slices/cartSlice'
import pizzaSlice from './slices/pizzaSlice'


export const store = configureStore({
  reducer: {
    counterSlice
    , filterSlice, cartSlice, pizzaSlice
  },
})