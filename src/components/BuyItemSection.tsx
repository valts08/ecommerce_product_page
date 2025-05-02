import MinusIcon from "../assets/images/icon-minus.svg"
import PlusIcon from "../assets/images/icon-plus.svg"
import CartIcon from "../assets/images/icon-cart.svg"
import { addProduct } from "../store/product_slice/productSlice"
import { useAppDispatch } from "../hooks/storeHooks"
import { useState } from "react"

const BuyItemSection = ({ price }: { price: number}) => {
    const [itemQuantity, setItemQuantity] = useState(0)
    const [itemAdded, setItemAdded] = useState(false)
    const dispath = useAppDispatch()

    const incrementQuantity = () => {
        if (!itemAdded) {
            setItemQuantity(prevState => prevState + 1)
        }
    }

    const decrementQuantity = () => {
        if (itemQuantity < 1) {
            return
        }
        if (!itemAdded) {
            setItemQuantity(prevState => prevState - 1)
        }
    }

    const handleAddToCart = () => {
        dispath(addProduct({ name: "Fall Limited Edition Sneakers", quantity: itemQuantity, price: price }))
        setItemAdded(prevState => !prevState)
    }

    return (
        <div className="flex lg:flex-row flex-col gap-5">
            <div className="flex items-center justify-between border-0 rounded-lg bg-neutral-300/20 p-4 lg:max-w-30/100 min-w-30/100">
                <img src={MinusIcon} alt="minus" className="cursor-pointer" onClick={() => decrementQuantity()}/>
                <span className="font-semibold">{itemQuantity}</span>
                <img src={PlusIcon} alt="plus" className="cursor-pointer" onClick={() => incrementQuantity()}/>
            </div>
            <button onClick={() => handleAddToCart()} disabled={itemAdded} className={`${itemAdded ? "bg-orange-300 shadow-orange-300/50 cursor-not-allowed" : "bg-orange-500 shadow-orange-500/50 cursor-pointer"} flex justify-around border-0 rounded-lg py-4 shadow-lg lg:w-70/100`}>
                <div className="flex m-auto">
                    <img src={CartIcon} alt="cart-img" className="w-[18px] h-[16px] pr-2 brightness-0 self-center"/>
                    <span className="font-semibold text-nowrap">Add to cart</span>
                </div>
            </button>
        </div>
    )
}

export default BuyItemSection