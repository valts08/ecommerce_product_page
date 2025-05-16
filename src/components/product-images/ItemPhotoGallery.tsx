import PrevImgIcon from "../../assets/images/icon-previous.svg"
import NextImgIcon from "../../assets/images/icon-next.svg"
import { setModalImageOpen } from "../../store/image_nav_slice/imageSlice"
import { prevImage, nextImage } from "../../store/image_nav_slice/imageSlice"
import { createPortal } from "react-dom"
import { useAppSelector, useAppDispatch } from "../../hooks/storeHooks"
import ThumbnailImg from "./ThumbnailImg"
import PictureModal from "./PictureModal"

const ItemPhotoGallery = () => {
    const dispatch = useAppDispatch()
    const images = useAppSelector(state => state.images)
    const mediumScreenSize = window.innerWidth < 768
    const largeScreenSize = window.innerWidth < 1025

    const handleModalOpen = () => {
        if (!largeScreenSize) {
            dispatch(setModalImageOpen(true))
        }
    }

    const handleSwitchImgPrevious = () => {
        dispatch(prevImage())
    }

    const handleSwitchImgNext = () => {
        dispatch(nextImage())
    }
    
    return (
        <>
            {images.open && createPortal(<div className="absolute bg-neutral-950/80 min-h-[100rem] w-[100dvw] top-0"><PictureModal /></div>, document.body)}
            <div className="relative flex flex-col">
                <img src={images.mainImages.at(images.mainImageId % images.mainImages.length)} alt="main-image" onClick={() => handleModalOpen()} className={`object-cover min-w-[448px] h-[445px] md:rounded-lg ${!mediumScreenSize ? "cursor-pointer" : ""}`}/>
                    {largeScreenSize && 
                    (<>
                        <div className="flex absolute mt-[12.5rem] translate-x-[1.75rem] place-items-center h-[56px] w-[56px] border-0 bg-white rounded-full  cursor-pointer" onClick={() => handleSwitchImgPrevious()}>
                            <img className="h-[16px] w-[12px] m-auto" src={PrevImgIcon} alt="previous-img-icon"/>
                        </div>
                        <div className="flex absolute right-0 mt-[12.5rem] -translate-x-[1.75rem] place-items-center h-[56px] w-[56px] border-0 bg-white rounded-full cursor-pointer" onClick={() => handleSwitchImgNext()}>
                            <img className="h-[16px] w-[12px] m-auto" src={NextImgIcon} alt="next-img-icon"/>
                        </div>
                    </>
                    )}
                {!largeScreenSize && 
                <div className="flex justify-between pt-[2em]">
                    {images.thumbnails && images.thumbnails.map((thumbnail, i) => {
                        return <ThumbnailImg key={i} image={thumbnail} number={i}/>
                    })}
                </div>}
            </div>
        </>
    )
}

export default ItemPhotoGallery