import CompanyLogoImage from "../assets/images/logo.svg"
import CartImage from "../assets/images/icon-cart.svg"
import UserAvatar from "../assets/images/image-avatar.png"
import { useState } from "react"
import { createPortal } from "react-dom"
import Cart from "./Cart"

const NavBar = () => {

    const [showCart, setShowCart] = useState(false)

    const toggleShowCart = () => {
        setShowCart(prevState => !prevState)
    }

    return (
        <nav className="flex justify-between h-[100px] border-b-1 border-neutral-100 relative">
            <section className="flex place-items-center">
                <img src={CompanyLogoImage} alt="company-logo" className="h-[20px]" />
                    <ul className="flex lg:gap-6 md:gap-4 ml-[3em]">
                        <li>Collections</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
            </section>
            <section className="flex place-items-center">
                <img src={CartImage} onClick={() => toggleShowCart()} alt="cart-icon" className="h-[20px] w-[22px] mr-[3em] hover:cursor-pointer" />
                <img src={UserAvatar} alt="user-avatar" className="w-[50px] h-[50px] rounded-lg" />
            </section>
            {showCart && createPortal(<Cart />, document.body)}
        </nav>
    )
}

export default NavBar