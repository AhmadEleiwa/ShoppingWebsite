import { useContext } from "react"
import Table from "../components/Table"
import { CartContext } from "../hooks/useCart"



const CartPage = props => {
    const cartContext = useContext(CartContext)

    return <div>
        <Table headings={['Title', "Price", 'Quantity']}  items={cartContext.data} />
    </div>
}

export default CartPage