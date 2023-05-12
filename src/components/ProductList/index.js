import { useContext, useEffect, useState } from "react"
import ProductCard from "../ProductCard"
import style from './style.module.css'
import { CartContext } from "../../hooks/useCart"



const ProductList = props => {
    const [products, setProducts] = useState([])

    const cartContext = useContext(CartContext)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
    }, [])

    return <div className={style.productList}>
        <h1>
            Trending Items
        </h1>
        <div className={style.list}>
            {products.map(item => {
                return <ProductCard
                    addProduct={cartContext.addProduct}
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    description={item.description.slice(0, 50)}
                    Img={item.image}
                    price={item.price}
                />
            })}
        </div>
    </div>
}

export default ProductList