const ThumbnailImg = ({number, image}: {number: number, image: string}) => {

    return (
        <img src={image} alt={`thumbnail-img-${number}`} className="w-[88px] h-[88px] rounded-lg cursor-pointer"/>
    )
}

export default ThumbnailImg