import { createContext, useState } from "react"


export const CartContext = createContext({
    data: [],
    addProduct: () => { },
    deleteProduct: () => { },
    clear: () => { }
})




export const CartProvider = (props) => {
    const [cart, setCart] = useState([])

    const addProduct = (data) => {
        const item = cart.findIndex(p => p.id === data.id)
        if (item === -1) {
            setCart([
                ...cart,
                {
                    id: data.id,
                    title: data.title,
                    price: data.price,
                    description: data.description,
                    quantity: 1
                }
            ]
            )
        }
        else {
            const newCart = cart.map(p => {
                if (p.id === data.id)
                    return {
                        id: data.id,
                        title: data.title,
                        price: data.price,
                        description: data.description,
                        quantity: cart[item].quantity + 1
                    }
                else return p
            })
            setCart(newCart)
        }
    }
    const deleteProduct = (id) => {
        setCart(cart.filter(p => p.id !== id))
    }
    const clear = () => {
        setCart([])
    }
    return <CartContext.Provider value={{
        data: cart,
        addProduct,
        deleteProduct,
        clear
    }}>
        {props.children}
    </CartContext.Provider>
}