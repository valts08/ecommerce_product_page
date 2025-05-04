import { configureStore } from "@reduxjs/toolkit"
import productReducer from "./product_slice/productSlice"
import imageReducer from "./image_nav_slice/imageSlice"

const store = configureStore({
    reducer: {
        products: productReducer,
        images: imageReducer
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch