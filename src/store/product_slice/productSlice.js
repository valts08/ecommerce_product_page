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
            state.filter(stateItem => {
                // console.log(stateItem.name, "/", action.payload)
                return stateItem.name !== action.payload
            })
        }
    }
})

export const { addProduct, deleteProduct } = productSlice.actions;
export default productSlice.reducer;