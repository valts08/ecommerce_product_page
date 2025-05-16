import { useAppSelector } from "../../hooks/storeHooks"
import CartItemList from "./CartItemList"

const Cart = () => {
    const products = useAppSelector(state => state.products)
    const listIsEmpty = products.length == 0

    return (
        <div className={`flex flex-col justify-evenly absolute border-0 bg-white rounded-lg min-h-[256px] sm:left-auto left-[50%] sm:top-[5.25em] top-[27.5%] w-100 translate-x-[-50%] translate-y-[-50%] sm:translate-none sm:right-[1rem] md:right-[1rem] lg:right-[12vw] shadow-lg shadow-black/30`}>
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