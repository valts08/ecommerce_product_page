import CloseModalIcon from "../../assets/images/icon-close.svg"
import PrevImgIcon from "../../assets/images/icon-previous.svg"
import NextImgIcon from "../../assets/images/icon-next.svg"
import ThumbnailImg from "./ThumbnailImg"
import { setModalImageOpen, prevImage, nextImage } from "../../store/image_nav_slice/imageSlice"
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks"

const PictureModal = () => {
    const dispatch = useAppDispatch()
    const images = useAppSelector(state => state.images)

    const handleModalClose = () => {
        dispatch(setModalImageOpen(false))
    }

    const handleSwitchImgPrevious = () => {
        dispatch(prevImage())
    }

    const handleSwitchImgNext = () => {
        dispatch(nextImage())
    }

    return (
        <div className="absolute flex flex-col top-[10dvh] left-[36dvw] mx-auto">
            <img className="h-[20px] w-[20px] pb-3 cursor-pointer self-end" src={CloseModalIcon} alt="close-modal" onClick={() => handleModalClose()}/>
            <img className="h-[550px] w-[550px] border-0 rounded-lg aspect-square" src={images.mainImages.at(images.mainImageId % images.mainImages.length)} alt="modal-image"/>
            <div className="flex absolute mt-[17em]">
                <div className="flex translate-x-[-1.75em] place-items-center h-[56px] w-[56px] border-0 bg-white rounded-full  cursor-pointer" onClick={() => handleSwitchImgPrevious()}>
                    <img className="h-[16px] w-[12px] m-auto" src={PrevImgIcon} alt="previous-img-icon"/>
                </div>
                <div className="flex ml-[27.35em] translate-x-[1.75em] place-items-center h-[56px] w-[56px] border-0 bg-white rounded-full cursor-pointer" onClick={() => handleSwitchImgNext()}>
                    <img className="h-[16px] w-[12px] m-auto" src={NextImgIcon} alt="next-img-icon"/>
                </div>
            </div>
            <div className="flex justify-evenly pt-[2em]">
                {images.thumbnails && images.thumbnails.map((thumbnail, i) => {
                    return <ThumbnailImg key={i} image={thumbnail} number={i}/>
                })}
            </div>
        </div>
    )
}

export default PictureModal