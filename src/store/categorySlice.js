import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categories: []
}

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setCategories: (state, action) => {
            state.categories = action.payload.categories
        }
    }
})

export const categoryActions = categorySlice.actions

export default categorySlice.reducer