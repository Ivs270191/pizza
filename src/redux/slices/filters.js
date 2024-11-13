import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    selectedCategory: 0 ,
    selectedType: "rating" ,
    searchInput: ''

}

export const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers:{
        setSelectedCategory: (state,action) => {state.selectedCategory = action.payload},
        setSelectedType: (state,action) => {state.selectedType = action.payload},
        setSearchInput: (state,action) => {state.searchInput = action.payload}
    }
})

export const {setSelectedCategory,setSelectedType,setSearchInput} = filterSlice.actions

export default filterSlice.reducer