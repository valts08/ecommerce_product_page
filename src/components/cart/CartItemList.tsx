import { useAppSelector } from "../../hooks/storeHooks"
import CartItem from "./CartItem"

const CartItemList = () => {
    const products = useAppSelector(state => state.products)

    return (
        <div>
            {products.map((product, i) => {
                return <CartItem key={i} product={product} />
            })}
        </div>
    )
}

export default CartItemList