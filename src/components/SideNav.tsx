import CloseNavIcon from "../assets/images/icon-close.svg"
import { useAppDispatch } from "../hooks/storeHooks"
import { setSideNavOpen } from "../store/image_nav_slice/imageSlice"

const SideNav = () => {
    const dispatch = useAppDispatch()

    const handleCloseSideNav = () => {
        dispatch(setSideNavOpen(false))
    }

    return (
        <div className="absolute bg-neutral-800/80 min-h-[100dvh] w-10/10 top-0">
            <div className="absolute flex flex-col gap-6 pl-4 sm:pl-[10%] pt-4 sm:pt-[5%] left-0 min-w-2/4 md:min-w-4/10 min-h-[100dvh] bg-white">
                <img src={CloseNavIcon} alt="close-side-nav" className="h-[14px] w-[14px] cursor-pointer" onClick={() => handleCloseSideNav()}/>
                <ul className="flex flex-col gap-3">
                    <li className="font-bold">Collections</li>
                    <li className="font-bold">Men</li>
                    <li className="font-bold">Women</li>
                    <li className="font-bold">About</li>
                    <li className="font-bold">Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default SideNav