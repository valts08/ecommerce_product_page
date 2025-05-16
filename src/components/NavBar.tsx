import CompanyLogoImage from "../assets/images/logo.svg"
import CartImage from "../assets/images/icon-cart.svg"
import UserAvatar from "../assets/images/image-avatar.png"
import MenuIcon from "../assets/images/icon-menu.svg"
import { useState } from "react"
import { createPortal } from "react-dom"
import Cart from "./cart/Cart"
import { useAppSelector } from "../hooks/storeHooks"

const NavBar = () => {

    const [showCart, setShowCart] = useState(false)
    const products = useAppSelector(state => state.products)
    const mediumScreenSize = window.innerWidth < 767
    const userImgHoverStyles = "hover:border-3 hover:border-amber-500 hover:rounded-full"
    const pageLinkHoverStyles = "hover:border-b-3 hover:text-black hover:border-amber-500"

    const toggleShowCart = () => {
        setShowCart(prevState => !prevState)
    }

    return (
        <nav className="relative flex justify-between h-[100px] md:border-b-1 border-neutral-100 md:px-0 px-[1.5em]">
            <section className="flex place-items-center">
                {mediumScreenSize && <img src={MenuIcon} alt="side-menu-icon" className="w-[16px] h-[15px] mr-4"/>}
                <img src={CompanyLogoImage} alt="company-logo" className="h-[20px]" />
                    {!mediumScreenSize && <ul className="flex lg:gap-6 md:gap-4 ml-[3em]">
                        <li className={`${pageLinkHoverStyles}`}>Collections</li>
                        <li className={`${pageLinkHoverStyles}`}>Men</li>
                        <li className={`${pageLinkHoverStyles}`}>Women</li>
                        <li className={`${pageLinkHoverStyles}`}>About</li>
                        <li className={`${pageLinkHoverStyles}`}>Contact</li>
                    </ul>}
            </section>
            <section className="flex place-items-center justify-between gap-6">
                <div className="flex relative w-[28px] h-[26px]">
                    {products[0] && <div className="absolute self-end top-0 right-0 min-w-[15px] text-[.50rem] font-semibold bg-amber-600 border-0 rounded-lg text-white">
                        <span className="px-2">
                            {products.reduce((accumulator, currentValue: any) => {
                                const quantitySum = accumulator + currentValue.quantity
                                return quantitySum
                            }, 0)}
                        </span>
                    </div>}
                    <img src={CartImage} onClick={() => toggleShowCart()} alt="cart-icon" className="self-end h-[20px] w-[22px] hover:cursor-pointer" />
                </div>
                <img src={UserAvatar} alt="user-avatar" className={`${userImgHoverStyles} md:w-[50px] md:h-[50px] w-[24px] h-[24px] rounded-lg`} />
            </section>
            {showCart && createPortal(<Cart />, document.body)}
        </nav>
    )
}

export default NavBar