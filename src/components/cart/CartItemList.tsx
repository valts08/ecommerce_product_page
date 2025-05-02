import { useAppSelector } from "../../hooks/storeHooks"
import CartItem from "./CartItem"

const CartItemList = () => {
    const products = useAppSelector(state => state.products)
    // find out why useAppSelector can't retrieve the store state
    // dispatch gets it there(checked with RTK chrome extension)
    return (
        <div>
            {products.map((product, i) => {
                return <CartItem key={i} product={product}/>
            })}
        </div>
    )
}

export default CartItemList