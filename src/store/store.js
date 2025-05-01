import { configureStore } from "@reduxjs/toolkit"
import productReducer from "./product_slice/productSlice"

const store = configureStore({
    reducer: {
        products: productReducer
    }
})

export default store