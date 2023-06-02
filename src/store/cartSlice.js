import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: [],
    totalAmount: 0,
    totalQuantity: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload.item
            const exisitingItem = state.cartItems.find(item => item._id === newItem._id)
            state.totalQuantity++
            if (!exisitingItem) {
                state.cartItems.push({
                    _id: newItem._id,
                    productName: newItem.name,
                    image: newItem.mainImage,
                    price: newItem.price.$numberDecimal,
                    quantity: 1,
                    totalPrice: newItem.price.$numberDecimal
                })
            }

            else {
                exisitingItem.quantity++
                exisitingItem.totalPrice = Number(exisitingItem.totalPrice) + Number(newItem.price.$numberDecimal)
            }

            state.totalAmount += Number(newItem.price.$numberDecimal)
        },
        removeItem: (state, action) => {
            const { id } = action.payload
            const exisitingItem = state.cartItems.find(item => item._id === id)
            console.log(id)
            if (exisitingItem) {
                if (exisitingItem.quantity == 1) {
                    state.totalQuantity -= Number(exisitingItem.quantity)
                    state.totalAmount -= Number(exisitingItem.quantity) * Number(exisitingItem.price.$numberDecimal)
                    state.cartItems = state.cartItems.filter(item => item._id !== exisitingItem._id)
                }
                else if (exisitingItem.quantity > 1) {
                    state.totalQuantity--
                    state.totalAmount -= Number(exisitingItem.price.$numberDecimal)
                    exisitingItem.quantity--
                    exisitingItem.totalPrice -= Number(exisitingItem.price.$numberDecimal)
                }
            }
        },

        deleteItem: (state, action) => {
            const { id } = action.payload
            const exisitingItem = state.cartItems.find(item => item._id === id)

            if (exisitingItem) {
                state.totalQuantity -= Number(exisitingItem.quantity)
                state.totalAmount -= Number(exisitingItem.quantity) * Number(exisitingItem.price.$numberDecimal)
                state.cartItems = state.cartItems.filter(item => item._id !== exisitingItem._id)
            }
        }
    }
})

export const cartActions = cartSlice.actions

export default cartSlice.reducer