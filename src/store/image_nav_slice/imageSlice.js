import { createSlice } from "@reduxjs/toolkit";
import { thumbnailList, mainImageList } from "../../utils";

const initialState = {
    thumbnails: thumbnailList,
    mainImages: mainImageList,
    mainImageId: 0,
    open: false
}

const imageSlice = createSlice({
    name: 'images',
    initialState,
    reducers: {
        setImage: (state, action) => {
            state.mainImageId = action.payload
        },
        setModalImageOpen: (state, action) => {
            state.open = action.payload
        },
        prevImage: (state) => {
            state.mainImageId = state.mainImageId - 1
        },
        nextImage: (state) => {
            state.mainImageId = state.mainImageId + 1
        }
    }
})

export const { setImage, setModalImageOpen, prevImage, nextImage } = imageSlice.actions
export default imageSlice.reducer