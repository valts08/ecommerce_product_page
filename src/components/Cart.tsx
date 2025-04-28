const Cart = () => {

    return (
        <div className="flex flex-col absolute border-0 bg-white rounded-lg min-h-[256px] max-w-[360px] top-[5.25em] lg:right-[12vw] md:right-[1em] w-100 shadow-lg shadow-black/30">
            <header className="py-[1em] pl-3 font-semibold">Cart</header>
            <div className="border-b-1 border-neutral-100"></div>
            <span className="text-neutral-400 font-semibold m-auto">Your cart is empty.</span>
        </div>
    )
}

export default Cart