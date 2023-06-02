import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './cartSlice'
import userReducer from './userSlice'
import categoryReducer from './categorySlice'
import bookSlice from './bookSlice'


const store = configureStore({
    reducer: {
        book: bookSlice,
        cart: cartReducer,
        category: categoryReducer,
        user: userReducer
    },
})

export default store