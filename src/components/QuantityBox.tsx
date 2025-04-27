import MinusIcon from "../assets/images/icon-minus.svg"
import PlusIcon from "../assets/images/icon-plus.svg"

const QuantityBox = () => {

    return (
        <div className="flex items-center justify-between border-0 rounded-lg bg-neutral-300/20 p-4 lg:max-w-30/100 min-w-30/100">
            <img src={MinusIcon} alt="minus" className="cursor-pointer"/>
            <span className="font-semibold">{0}</span>
            <img src={PlusIcon} alt="plus" className="cursor-pointer"/>
        </div>
    )
}

export default QuantityBox