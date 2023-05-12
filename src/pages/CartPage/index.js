import Table from "../../components/Table"
import Form from "../../components/Form"

import './style.css'
import Card from "../../components/Card"
import { useCallback, useContext } from "react"
import { CartContext } from "../../hooks/useCart"


const CartPage = props => {
    const dataContext = useContext(CartContext)
    const totalPrice = useCallback(() => {

        let sum = 0
        for (let i of dataContext.data) {
            sum += i.price * i.quantity
        }
        return sum.toFixed(3)

    }, [dataContext.data])
    const totalQuantity = useCallback(() => {

        let count = 0
        for (let i of dataContext.data) {
            count +=i.quantity
        }
        return count

    }, [dataContext.data])

    return <div className="cart-page">
        <div className="lefter">
            <Table headings={['Title', "Price", 'Quantity']} />
            <div className="cart-list">
                <Card title={'Total Price'} >${totalPrice()}</Card>
                <Card title={'Total Quantity'} >{totalQuantity()}</Card>
            </div>
        </div>
        <Form />
    </div>
}

export default CartPage