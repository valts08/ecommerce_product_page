import { useAppDispatch } from "../../hooks/storeHooks"
import { setImage } from "../../store/image_nav_slice/imageSlice"

type ThumbnailImgTypes = {
    number: number, 
    image: string
}

const ThumbnailImg = ({number, image}: ThumbnailImgTypes) => {
    const dispatch = useAppDispatch()

    const handleMainImageChange = () => {
        dispatch(setImage(number))
    }

    return (
        <img src={image} alt={`thumbnail-img-${number}`} className="w-[88px] h-[88px] rounded-lg cursor-pointer" onClick={() => handleMainImageChange()}/>
    )
}

export default ThumbnailImg