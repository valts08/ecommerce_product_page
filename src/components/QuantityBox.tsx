import { useState } from "react"
import MinusIcon from "../assets/images/icon-minus.svg"
import PlusIcon from "../assets/images/icon-plus.svg"

const QuantityBox = () => {

    const [itemQuantity, setItemQuantity] = useState(0)

    const incrementQuantity = () => {
        setItemQuantity(prevState => prevState + 1)
    }

    const decrementQuantity = () => {
        if (itemQuantity < 1) {
            return
        }
        setItemQuantity(prevState => prevState - 1)
    }

    return (
        <div className="flex items-center justify-between border-0 rounded-lg bg-neutral-300/20 p-4 lg:max-w-30/100 min-w-30/100">
            <img src={MinusIcon} alt="minus" className="cursor-pointer" onClick={() => decrementQuantity()}/>
            <span className="font-semibold">{itemQuantity}</span>
            <img src={PlusIcon} alt="plus" className="cursor-pointer" onClick={() => incrementQuantity()}/>
        </div>
    )
}

export default QuantityBox