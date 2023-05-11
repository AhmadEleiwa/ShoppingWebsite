import { useReducer } from "react"

const cartReducer = (cart, action) => {
    switch (action.type) {
        case 'added': {
            const item = cart.findIndex(p => p.id === action.data.id)
            console.log( action.id)
            if (item === -1) {
        
                return [
                    ...cart,
                    {
                        id: action.data.id,
                        title: action.data.title,
                        description: action.data.description,
                        quantity: 1
                    }
                ]
            }
            cart[item] = {
                id: action.data.id,
                title: action.data.title,
                description: action.data.description,
                quantity: cart[item].quantity + 1
            }
            return cart
        }
        case "delete":{
            return cart.filter(p => p.id !== action.id)
        }
        case "clear":{
            return []
        }
    }

}

const useCart = () => {
    const [cart, dispatch] = useReducer(cartReducer,[])
    const addProduct=(data)=>{
        dispatch({
            type:'added',
            data:data
        })  
    }
    const deleteProduct=(id)=>{
        dispatch({
            type:'delete',
            id:id
        })  
    }
    const clear =()=>{
        dispatch({
            type:'clear'
        })
    }
    return{cart,addProduct,deleteProduct,clear}
}
export default useCart