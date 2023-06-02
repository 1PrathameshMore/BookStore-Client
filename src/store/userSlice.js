import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    id: null,
    fullName: null,
    email: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.id = action.payload.id
            state.email = action.payload.email
            state.fullName = action.payload.fullName
        },
        logout: (state) => {
            state.id = null
            state.email = null
            state.fullName = null
        }
    }
})

export const userActions = userSlice.actions

export default userSlice.reducer