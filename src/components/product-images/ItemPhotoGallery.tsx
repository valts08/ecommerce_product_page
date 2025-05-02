import MainProductImage from "../../assets/images/image-product-1.jpg"
import ThumbnailImage1 from "../../assets/images/image-product-1-thumbnail.jpg"
import ThumbnailImage2 from "../../assets/images/image-product-2-thumbnail.jpg"
import ThumbnailImage3 from "../../assets/images/image-product-3-thumbnail.jpg"
import ThumbnailImage4 from "../../assets/images/image-product-4-thumbnail.jpg"
import ThumbnailImg from "./ThumbnailImg"

const ItemPhotoGallery = () => {

    const thumbnailList = [ThumbnailImage1, ThumbnailImage2, ThumbnailImage3, ThumbnailImage4]
    const mediumScreenSize = window.innerWidth < 767

    return (
        <div className="flex flex-col">
            <img src={MainProductImage} alt="main-image" className="min-w-[448px] h-[445px] md:rounded-lg cursor-pointer "/>
            {!mediumScreenSize && 
            <div className="flex justify-between pt-[2em]">
                {thumbnailList && thumbnailList.map((thumbnail, i) => {
                    return <ThumbnailImg key={i} image={thumbnail} number={i}/>
                })}
            </div>}
        </div>
    )
}

export default ItemPhotoGallery