import { useAppDispatch } from "../../hooks/storeHooks"
import { setImage } from "../../store/image_nav_slice/imageSlice"
import { useAppSelector } from "../../hooks/storeHooks"

type ThumbnailImgTypes = {
    number: number, 
    image: string
}

const ThumbnailImg = ({ number, image }: ThumbnailImgTypes) => {
    const dispatch = useAppDispatch()
    const { mainImageId, mainImages } = useAppSelector(state => state.images)
    const activeImageStyling = "border-orange-500 opacity-50 border-3"
    const imageHoverStyling = "hover:border-orange-500 hover:opacity-50 hover:border-3"
    const currentImage: string | undefined = mainImages.at(mainImageId % mainImages.length)

    const handleMainImageChange = () => {
        dispatch(setImage(number))
    }

    return (
        <img src={image} alt={`thumbnail-img-${number}`} className={`w-[88px] h-[88px] rounded-lg cursor-pointer ${imageHoverStyling} ${mainImages.indexOf(currentImage!) == number ? activeImageStyling : ""}`} onClick={() => handleMainImageChange()}/>
    )
}

export default ThumbnailImg