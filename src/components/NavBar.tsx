import CompanyLogoImage from "../assets/images/logo.svg"
import CartImage from "../assets/images/icon-cart.svg"
import UserAvatar from "../assets/images/image-avatar.png"

const NavBar = () => {

    return (
        <nav className="flex justify-between h-[100px] border-b-1 border-neutral-100">
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
                <img src={CartImage} alt="cart-icon" className="h-[20px] w-[22px] mr-[3em] hover:cursor-pointer" />
                <img src={UserAvatar} alt="user-avatar" className="w-[50px] h-[50px] rounded-lg" />
            </section>
        </nav>
    )
}

export default NavBar