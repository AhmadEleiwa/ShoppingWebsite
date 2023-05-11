import { useContext } from "react"
import Table from "../components/Table"
import { CartContext } from "../hooks/useCart"



const CartPage = props => {
   

    return <div>
        <Table headings={['Title', "Price", 'Quantity']}  />
    </div>
}

export default CartPage