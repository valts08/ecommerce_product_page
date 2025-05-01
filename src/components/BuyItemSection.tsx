import MinusIcon from "../assets/images/icon-minus.svg"
import PlusIcon from "../assets/images/icon-plus.svg"
import CartIcon from "../assets/images/icon-cart.svg"
import { addProduct } from "../store/product_slice/productSlice"
import { useDispatch } from "react-redux"
import { useState } from "react"

const BuyItemSection = ({ price }: { price: number}) => {
    const [itemQuantity, setItemQuantity] = useState(0)
    const dispath = useDispatch()

    const incrementQuantity = () => {
        setItemQuantity(prevState => prevState + 1)
    }

    const decrementQuantity = () => {
        if (itemQuantity < 1) {
            return
        }
        setItemQuantity(prevState => prevState - 1)
    }

    const handleAddToCart = () => {
        dispath(addProduct({ name: "sneakers", quantity: itemQuantity, price: price }))
    }

    return (
        <div className="flex lg:flex-row flex-col gap-5">
            <div className="flex items-center justify-between border-0 rounded-lg bg-neutral-300/20 p-4 lg:max-w-30/100 min-w-30/100">
                <img src={MinusIcon} alt="minus" className="cursor-pointer" onClick={() => decrementQuantity()}/>
                <span className="font-semibold">{itemQuantity}</span>
                <img src={PlusIcon} alt="plus" className="cursor-pointer" onClick={() => incrementQuantity()}/>
            </div>
            <button onClick={() => handleAddToCart()} className="flex justify-around border-0 rounded-lg py-4 bg-orange-500 shadow-lg shadow-orange-300/50 lg:w-70/100 cursor-pointer">
                <div className="flex m-auto">
                    <img src={CartIcon} alt="cart-img" className="w-[18px] h-[16px] pr-2 brightness-0 self-center"/>
                    <span className="font-semibold text-nowrap">Add to cart</span>
                </div>
            </button>
        </div>
    )
}

export default BuyItemSection