import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "products",
    initialState: [],
    reducers: {
        addProduct: (state, action) => {
            state.push({
                name: action.payload.name,
                quantity: action.payload.quantity,
                price: action.payload.price
            })
        },
        deleteProduct: (state, action) => {
            state.forEach(stateItem => {
                const itemToDelete = state.indexOf(stateItem.name)
                state.splice(itemToDelete, 1)
            })
        }
    }
})

export const { addProduct, deleteProduct } = productSlice.actions;
export default productSlice.reducer;