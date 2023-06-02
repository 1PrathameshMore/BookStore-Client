import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    books: []
}

const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        setBooks: (state, action) => {
            state.books = action.payload.books
        }
    }
})

export const bookActions = bookSlice.actions

export default bookSlice.reducer
