import { useSelector } from "react-redux"
import { RootState } from "../../store/store"
import CartItemList from "./CartItemList"

const Cart = () => {

    // idk why it still shows that its of type unknown, probably cuz of how the slice file is set up = not using TS
    const products = useSelector<RootState>((state) => state.products)
    const listIsEmpty = products.length == 0 

    return (
        <div className="flex flex-col justify-evenly absolute border-0 bg-white rounded-lg min-h-[256px] max-w-[360px] top-[5.25em] lg:right-[12vw] md:right-[1em] w-100 shadow-lg shadow-black/30">
            <header className="py-[1em] pl-3 font-semibold">Cart</header>
            <div className="border-b-1 border-neutral-100"></div>
            {listIsEmpty ? (<span className="text-neutral-400 font-semibold m-auto">Your cart is empty.</span>)
                : (
                    <div className="flex flex-col px-[2em] gap-5 my-[1.75em]">
                        <CartItemList />
                        <button className="bg-orange-500 cursor-pointer flex justify-around border-0 rounded-lg py-4">
                            <div className="flex m-auto">
                                <span className="font-semibold text-nowrap">Checkout</span>
                            </div>
                        </button>
                    </div>
                )
            }
        </div>
    )
}

export default Cart