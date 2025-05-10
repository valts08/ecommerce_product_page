import { setModalImageOpen } from "../../store/image_nav_slice/imageSlice"
import { createPortal } from "react-dom"
import { useAppSelector, useAppDispatch } from "../../hooks/storeHooks"
import ThumbnailImg from "./ThumbnailImg"
import PictureModal from "./PictureModal"

const ItemPhotoGallery = () => {
    const images = useAppSelector(state => state.images)
    const dispatch = useAppDispatch()
    const mediumScreenSize = window.innerWidth < 768

    const handleModalOpen = () => {
        if (!mediumScreenSize) {
            dispatch(setModalImageOpen(true))
        }
    }
    
    return (
        <>
            {images.open && createPortal(<div className="absolute bg-neutral-950/80 min-h-[100rem] w-[100dvw] top-0"><PictureModal /></div>, document.body)}
            <div className="flex flex-col">
                <img src={images.mainImages.at(images.mainImageId % images.mainImages.length)} alt="main-image" onClick={() => handleModalOpen()} className={`min-w-[448px] h-[445px] md:rounded-lg ${!mediumScreenSize ? "cursor-pointer" : ""}`}/>
                {!mediumScreenSize && 
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