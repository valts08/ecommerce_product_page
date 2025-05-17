import { createSlice } from "@reduxjs/toolkit";
import { thumbnailList, mainImageList } from "../../utils";

const initialState = {
    thumbnails: thumbnailList,
    mainImages: mainImageList,
    mainImageId: 0,
    modalOpen: false,
    sideNavOpen: false
}

const imageSlice = createSlice({
    name: 'images',
    initialState,
    reducers: {
        setImage: (state, action) => {
            state.mainImageId = action.payload
        },
        setModalImageOpen: (state, action) => {
            state.modalOpen = action.payload
        },
        prevImage: (state) => {
            state.mainImageId = state.mainImageId - 1
        },
        nextImage: (state) => {
            state.mainImageId = state.mainImageId + 1
        },
        // I know this doesn't belong in this slice, but I don't want to make another one so I'll just put it here
        // For future projects where there are multiple open/close components could make 
        // a slice that tracks all of those states
        setSideNavOpen: (state, action) => {
            state.sideNavOpen = action.payload
        },
    }
})

export const { setImage, setModalImageOpen, prevImage, nextImage, setSideNavOpen } = imageSlice.actions
export default imageSlice.reducer