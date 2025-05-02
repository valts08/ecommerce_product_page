import ProductImg from "../../assets/images/image-product-1-thumbnail.jpg"
import DeleteIcon from "../../assets/images/icon-delete.svg"

const CartItem = (product: any) => {

    return (
        <div className="flex justify-between">
            <img src={ProductImg} alt="product-img" className="h-[50px] w-[50px] border-0 rounded-md" />
            <div className="flex flex-col justify-between text-gray-400">
                <span>{product.name}</span>
                <div>
                    <span>${product.price} x {product.quantity}</span>
                    <span className="text-black font-semibold pl-2">${product.price*product.quantity}</span>
                </div>
            </div>
            <img src={DeleteIcon} alt="delete-icon" className="h-[16px] w-[14px] self-center" />
        </div>
    )
}

export default CartItem