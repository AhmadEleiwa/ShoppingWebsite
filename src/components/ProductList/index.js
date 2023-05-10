import { useEffect, useState } from "react"
import ProductCard from "../ProductCard"
import style from './style.module.css'

const ProductList = props => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
    }, [])

    return <div className={style.list}>
        {products.map(item => {
            return <ProductCard
                key={item.id}
                title={item.title}
                description={item.description.slice(0,50)}
                Img={item.image}
                price={item.price}
            />
        })}
    </div>
}

export default ProductList