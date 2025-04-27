import ItemPhotoGallery from "./product-images/ItemPhotoGallery"
import ItemPurchaseInfo from "./ItemPurchaseInfo"

const ProductItem = () => {

    return (
        <div className="flex flex-col lg:flex-row lg:justify-evenly gap-[2em] pt-[5em]">
            <ItemPhotoGallery />
            <ItemPurchaseInfo />
        </div>
    )
}

export default ProductItem