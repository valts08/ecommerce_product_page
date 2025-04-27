import CartIcon from "../assets/images/icon-cart.svg"

const AddToCartButton = () => {

    return (
        <button className="flex justify-around border-0 rounded-lg py-4 bg-orange-500 shadow-lg shadow-orange-300/50 lg:w-70/100 cursor-pointer">
            <div className="flex m-auto">
                <img src={CartIcon} alt="cart-img" className="w-[18px] h-[16px] pr-2 brightness-0 self-center"/>
                <span className="font-semibold text-nowrap">Add to cart</span>
            </div>
        </button>
    )
}

export default AddToCartButton