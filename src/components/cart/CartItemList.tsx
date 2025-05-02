import { useSelector } from "react-redux"
import { RootState } from "../../store/store"
import CartItem from "./CartItem"

const CartItemList = () => {
    const products = useSelector<RootState>((state) => state.products)

    return (
        <div>
            {products.map((product: object, i: number) => {
                return <CartItem key={i} product={product}/>
            })}
        </div>
    )
}

export default CartItemList