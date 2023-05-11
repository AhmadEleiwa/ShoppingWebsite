import Table from "../../components/Table"
import Form from "../../components/Form"

import './style.css'


const CartPage = props => {
   

    return <div className="cart-page">
        <Table headings={['Title', "Price", 'Quantity']}  />
        <Form />
    </div>
}

export default CartPage